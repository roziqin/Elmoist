<?php
include '../../config/database.php';
$search = $_POST['search']['value']; // Ambil data yang di ketik user pada textbox pencarian
$limit = $_POST['length']; // Ambil data limit per page
$start = $_POST['start']; // Ambil data start

date_default_timezone_set('Asia/jakarta');
$bln=date('m');

if ($_GET['ket']=='produk') {

	$sql = mysqli_query($con, "SELECT barang_id FROM barang, kategori where barang_kategori=kategori_id"); // Query untuk menghitung seluruh data siswa
	$sql_count = mysqli_num_rows($sql); // Hitung data yg ada pada query $sql
	$query = "SELECT * FROM barang, kategori where barang_kategori=kategori_id and (barang_nama LIKE '%".$search."%' OR kategori_nama LIKE '%".$search."%')";

} elseif ($_GET['ket']=='kategori') {

	$sql = mysqli_query($con, "SELECT kategori_id FROM kategori, jenis WHERE kategori_jenis=jenis_id"); // Query untuk menghitung seluruh data siswa
	$sql_count = mysqli_num_rows($sql); // Hitung data yg ada pada query $sql
	$query = "SELECT * FROM kategori, jenis where kategori_jenis=jenis_id and (kategori_nama LIKE '%".$search."%')";
	
} elseif ($_GET['ket']=='jenis') {

	$sql = mysqli_query($con, "SELECT jenis_id FROM jenis"); // Query untuk menghitung seluruh data siswa
	$sql_count = mysqli_num_rows($sql); // Hitung data yg ada pada query $sql
	$query = "SELECT * FROM jenis where (jenis_nama LIKE '%".$search."%')";
	
} elseif ($_GET['ket']=='user') {

	$sql = mysqli_query($con, "SELECT id FROM users, roles where role=roles_id"); // Query untuk menghitung seluruh data siswa
	$sql_count = mysqli_num_rows($sql); // Hitung data yg ada pada query $sql
	$query = "SELECT * FROM users, roles where role=roles_id and (name LIKE '%".$search."%')";
	
} elseif ($_GET['ket']=='member') {

	$sql = mysqli_query($con, "SELECT member_id FROM member"); // Query untuk menghitung seluruh data siswa
	$sql_count = mysqli_num_rows($sql); // Hitung data yg ada pada query $sql
	$query = "SELECT * FROM member where (member_nama LIKE '%".$search."%' OR member_hp LIKE '%".$search."%')";
	
} elseif ($_GET['ket']=='memberultah') {

	$sql = mysqli_query($con, "SELECT member_id FROM member WHERE MONTH(member_tgl_lahir) = '".$bln."' "); // Query untuk menghitung seluruh data siswa
	$sql_count = mysqli_num_rows($sql); // Hitung data yg ada pada query $sql
	$query = "SELECT * FROM member where MONTH(member_tgl_lahir) = '".$bln."' and (member_nama LIKE '%".$search."%' or member_tgl_lahir LIKE '%".$search."%' OR member_hp LIKE '%".$search."%')";
	
} elseif ($_GET['ket']=='stok') {

	$sql = mysqli_query($con, "SELECT barang_id FROM barang where barang_set_stok=1"); // Query untuk menghitung seluruh data siswa
	$sql_count = mysqli_num_rows($sql); // Hitung data yg ada pada query $sql
	$query = "SELECT * FROM barang where barang_set_stok=1 and (barang_nama LIKE '%".$search."%')";
	
} elseif ($_GET['ket']=='stoklaporan') {

	$sql = mysqli_query($con, "SELECT barang_id FROM barang, kategori WHERE barang_kategori=kategori_id and barang_stok NOT LIKE '0' "); // Query untuk menghitung seluruh data siswa
	$sql_count = mysqli_num_rows($sql); // Hitung data yg ada pada query $sql
	$query = "SELECT * FROM barang, kategori where barang_kategori=kategori_id and barang_stok NOT LIKE '0' and (barang_nama LIKE '%".$search."%')";
}

$order_field = $_POST['order'][0]['column']; // Untuk mengambil nama field yg menjadi acuan untuk sorting
$order_ascdesc = $_POST['order'][0]['dir']; // Untuk menentukan order by "ASC" atau "DESC"
$order = " ORDER BY ".$_POST['columns'][$order_field]['data']." ".$order_ascdesc;
$sql_data = mysqli_query($con, $query.$order." LIMIT ".$limit." OFFSET ".$start); // Query untuk data yang akan di tampilkan
$sql_filter = mysqli_query($con, $query); // Query untuk count jumlah data sesuai dengan filter pada textbox pencarian
$sql_filter_count = mysqli_num_rows($sql_filter); // Hitung data yg ada pada query $sql_filter

if ($_GET['ket']=='produk') {
	$data = array();
	while($dataarray = mysqli_fetch_assoc($sql_data)) {

		$row_array['barang_id'] = $dataarray['barang_id'];
		$row_array['barang_nama'] = $dataarray['barang_nama'];
		$row_array['kategori_nama'] = $dataarray['kategori_nama'];
		$row_array['barang_harga_beli'] = $dataarray['barang_harga_beli'];
		$row_array['barang_harga_jual'] = $dataarray['barang_harga_jual'];
		$row_array['barang_diskon'] = $dataarray['barang_diskon'];
		$row_array['barang_set_stok'] = $dataarray['barang_set_stok'];
		$row_array['barang_stok'] = $dataarray['barang_stok'];
		$row_array['barang_batas_stok'] = $dataarray['barang_batas_stok'];
		$row_array['barang_disable'] = $dataarray['barang_disable'];
		if ($dataarray['barang_image']=='') {
			$row_array['barang_image'] = 'default.jpg';
		} else {
			$row_array['barang_image'] = $dataarray['barang_image'];
		}
		

        array_push($data,$row_array);
	}
} elseif ($_GET['ket']=='stok') {

	$data = array();

	while($dataarray = mysqli_fetch_assoc($sql_data)) {

		$row_array['barang_nama'] = $dataarray['barang_nama'];
		$row_array['barang_stok'] = $dataarray['barang_stok'];
		$row_array['barang_set_stok'] = $dataarray['barang_set_stok'];
		$row_array['barang_id'] = $dataarray['barang_id'];

		$barangid = $dataarray['barang_id'];


		$sql1="SELECT * from log_stok WHERE barang='$barangid' and keterangan='tambah' ORDER BY log_id DESC LIMIT 1 ";
        $query1=mysqli_query($con, $sql1);
        $data1=mysqli_fetch_assoc($query1);
        $tanggal = isset($data1['tanggal']) ? $data1['tanggal'] : '0000-00-00';


		if ($dataarray['barang_stok']!=0) {
			$row_array['stok_tanggal'] = $tanggal;
		} else {
			$row_array['stok_tanggal'] = '0000-00-00';
		}

        array_push($data,$row_array);

	}

} else {
	$data = mysqli_fetch_all($sql_data, MYSQLI_ASSOC); // Untuk mengambil data hasil query menjadi array

}
$callback = array(
    'draw'=>$_POST['draw'], // Ini dari datatablenya
    'recordsTotal'=>$sql_count,
    'recordsFiltered'=>$sql_filter_count,
    'data'=>$data
);
header('Content-Type: application/json');
echo json_encode($callback); // Convert array $callback ke j