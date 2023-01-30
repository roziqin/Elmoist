<?php
session_start();
include '../config/database.php';
?>
<!DOCTYPE html>
<html>
<head>
	<title>Export Data Ke Excel </title>
</head>
<body>
	<style type="text/css">
		body{
			font-family: Calibri,Candara,Segoe,Segoe UI,Optima,Arial,sans-serif; ;
		}
		table{
			margin: 20px auto;
			border-collapse: collapse;
		}
		table th,
		table td{
			border: 1px solid #3c3c3c;
			padding: 3px 8px;

		}
	</style>

	<?php
	$tgl = $_GET['date'];
	$ket1 = $_GET['ket'];
	//$typebayar = $_GET['typebayar'];

	$filename = "laporan_laba".$ket1."-".$tgl.".xls";
	header("Content-type: application/vnd-ms-excel");
	header("Content-Disposition: attachment; filename=".$filename);

	?>
	<center>
		<h1>Data Laba</h1>
	</center>
	<table border="1">
		<tr>
			<th>Tanggal</th>
			<th>Omset</th>
			<th>Laba</th>
            <th>Obat</th>
            <th>Treament</th>
            <th>Skincare</th>
            <th>Tindakan Dokter</th>
            <th>Diskon Transaksi</th>
            <th>Laba Akhir</th>
		</tr>
		<?php
		$text_line = explode(":",$_GET['date']);
		$tgl11=$text_line[0];
		$tgl22=$text_line[1];
		$tot = 0;
		$nn = 0;
		$n = 0;
		$totobat = 0;
		$tottreament = 0;
		$tottskincare = 0;
		$totdiskontran = 0;
		$totlabaakhir = 0;

		if ($_GET['ket']=="harian") {
	    	$ket = "transaksi_tanggal"; 
		} elseif ($_GET['ket']=="bulanan") {
		    $ket = "transaksi_bulan";     
		}
        $bayartext = '';

		$sql ="SELECT transaksi_tanggal, transaksi_bulan, sum(transaksi_total) as total, sum(transaksi_bayar_debet) as debet, sum(transaksi_diskon) as diskon from transaksi WHERE $bayartext $ket BETWEEN '$tgl11' AND '$tgl22' GROUP BY $ket ORDER BY transaksi_tanggal ASC";
		$query = mysqli_query($con,$sql);

		while ($datatea=mysqli_fetch_assoc($query)) {

			$text = '';
			$text1 = '';
			$tglket = $datatea[$ket];

			$sqlcash="SELECT transaksi_detail_jumlah, sum(barang_harga_jual*transaksi_detail_jumlah) as jual, sum(barang_harga_beli*transaksi_detail_jumlah) as beli, sum(transaksi_detail_diskon*transaksi_detail_jumlah) as diskon  from transaksi, transaksi_detail, barang WHERE transaksi_id=transaksi_detail_nota and transaksi_detail_barang_id=barang_id and $ket='$tglket' GROUP BY $ket ";
	        $querycash=mysqli_query($con, $sqlcash);
	        $datacash=mysqli_fetch_assoc($querycash);

	        $sqlobat="SELECT transaksi_detail_jumlah, sum(barang_harga_jual*transaksi_detail_jumlah) as jual, sum(barang_harga_beli*transaksi_detail_jumlah) as beli, sum(transaksi_detail_diskon*transaksi_detail_jumlah) as diskon  from transaksi, transaksi_detail, barang, kategori, jenis WHERE transaksi_id=transaksi_detail_nota and transaksi_detail_barang_id=barang_id and barang_kategori=kategori_id and kategori_jenis=jenis_id and jenis_slug='obat' and $text $ket='$tglket' GROUP BY $ket $text1 ";
	        $queryobat=mysqli_query($con, $sqlobat);
	        $dataobat=mysqli_fetch_assoc($queryobat);
	        $totalobat = 0;
	        $totalobat = $dataobat['jual']-$dataobat['beli'];

	        $sqltreament="SELECT transaksi_detail_jumlah, sum(barang_harga_jual*transaksi_detail_jumlah) as jual, sum(barang_harga_beli*transaksi_detail_jumlah) as beli, sum(transaksi_detail_diskon*transaksi_detail_jumlah) as diskon  from transaksi, transaksi_detail, barang, kategori, jenis WHERE transaksi_id=transaksi_detail_nota and transaksi_detail_barang_id=barang_id and barang_kategori=kategori_id and kategori_jenis=jenis_id and jenis_slug='treament' and $text $ket='$tglket' GROUP BY $ket $text1 ";
	        $querytreament=mysqli_query($con, $sqltreament);
	        $datatreament=mysqli_fetch_assoc($querytreament);
	        $totaltreament = 0;
	        $totaltreament = $datatreament['jual']-$datatreament['beli'];

	        $sqltskincare="SELECT transaksi_detail_jumlah, sum(barang_harga_jual*transaksi_detail_jumlah) as jual, sum(barang_harga_beli*transaksi_detail_jumlah) as beli, sum(transaksi_detail_diskon*transaksi_detail_jumlah) as diskon  from transaksi, transaksi_detail, barang, kategori, jenis WHERE transaksi_id=transaksi_detail_nota and transaksi_detail_barang_id=barang_id and barang_kategori=kategori_id and kategori_jenis=jenis_id and jenis_slug='skincare' and $text $ket='$tglket' GROUP BY $ket $text1 ";
	        $querytskincare=mysqli_query($con, $sqltskincare);
	        $datatskincare=mysqli_fetch_assoc($querytskincare);
	        $totaltskincare = 0;
	        $totaltskincare = $datatskincare['jual']-$datatskincare['beli'];

	        $sqltdokter="SELECT transaksi_detail_jumlah, sum(barang_harga_jual*transaksi_detail_jumlah) as jual, sum(barang_harga_beli*transaksi_detail_jumlah) as beli, sum(transaksi_detail_diskon*transaksi_detail_jumlah) as diskon  from transaksi, transaksi_detail, barang, kategori, jenis WHERE transaksi_id=transaksi_detail_nota and transaksi_detail_barang_id=barang_id and barang_kategori=kategori_id and kategori_jenis=jenis_id and jenis_slug='tindakan-dokter' and $text $ket='$tglket' GROUP BY $ket $text1 ";
	        $querytdokter=mysqli_query($con, $sqltdokter);
	        $datatdokter=mysqli_fetch_assoc($querytdokter);
	        $totaltdokter = 0;
	        $totaltdokter = $datatdokter['jual']-$datatdokter['beli'];

	        $totaljual = $datacash['jual'];
	        $totalbeli = $datacash['beli'];
	        $totaldiskon = $datacash['diskon'];

	        $diskontran = $datatea["diskon"];

	        $n = $totaljual-$totalbeli;
	        $labaakhir = $n-$diskontran;

	        $total = $datatea["total"]+$datatea["debet"];


			?>
			<tr>
				<td><?php echo $tglket; ?></td>
				<td><?php echo $total; ?></td>
				<td><?php echo $n; ?></td>
				<td><?php echo $totalobat; ?></td>
				<td><?php echo $totaltreament; ?></td>
				<td><?php echo $totaltskincare; ?></td>
				<td><?php echo $totaltdokter; ?></td>
				<td><?php echo $diskontran; ?></td>
				<td><?php echo $labaakhir; ?></td>
			</tr>
			<?php
			$tot += $total;
			$nn += $n;
			$totobat += $totalobat;
			$tottreament += $totaltreament;
			$tottskincare += $totaltskincare;
			$totaltdokter += $totaltdokter;
			$totdiskontran += $diskontran;
			$totlabaakhir += $labaakhir;

		}
		?>
		<tr>
			<td >Total</td>
			<td align="right"><?php echo $tot; ?></td>
			<td align="right"><?php echo $nn; ?></td>
			<td align="right"><?php echo $totobat; ?></td>
			<td align="right"><?php echo $tottreament; ?></td>
			<td align="right"><?php echo $tottskincare; ?></td>
			<td align="right"><?php echo $totaltdokter; ?></td>
			<td align="right"><?php echo $totdiskontran; ?></td>
			<td align="right"><?php echo $totlabaakhir; ?></td>
		</tr>
	</table>
</body>
</html>