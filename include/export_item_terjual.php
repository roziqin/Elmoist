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



	$filename = "laporan_item_terjual-".$tgl.".xls";

	header("Content-type: application/vnd-ms-excel");

	header("Content-Disposition: attachment; filename=".$filename);




	?>



	<center>

		<h1>Data Barang Terjual</h1>

	</center>

	<table border="1">

		<tr>

			<th>Barang</th>

			<th>Jumlah</th>

		</tr>

		<?php

		$text_line = explode(":",$_GET['date']);

		$tgl11=$text_line[0];

		$tgl22=$text_line[1];


		    $ket = "transaksi_bulan";     





		$sql ="SELECT transaksi_tanggal, barang_nama, barang_id, sum(transaksi_detail_jumlah) as jumlah from transaksi, transaksi_detail, barang WHERE transaksi_id=transaksi_detail_nota and transaksi_detail_barang_id=barang_id and barang_set_stok=1 and transaksi_bulan BETWEEN '$tgl11' AND '$tgl22' GROUP BY barang_id ORDER BY barang_nama ASC";







		$query = mysqli_query($con,$sql);



		while ($datatea=mysqli_fetch_assoc($query)) {



			$nama = $datatea["barang_nama"];

			$jumlah = $datatea["jumlah"];

			?>

			<tr>

				<td><?php echo $nama; ?></td>

				<td><?php echo $jumlah; ?></td>

			</tr>



			<?php

		}

		

		?>

	</table>

</body>

</html>