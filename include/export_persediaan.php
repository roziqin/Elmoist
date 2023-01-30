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
		font-family: Calibri,Candara,Segoe,Segoe UI,Optima,Arial,sans-serif;
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
	$filename = "laporan_persediaan.xls";
	header("Content-type: application/vnd-ms-excel");
	header("Content-Disposition: attachment; filename=".$filename);




	?>

	<center>
		<h1>Data Persediaan</h1>
	</center>
	<table border="1">
		<tr>
            <th>Nama Barang</th>
            <th>Kategori</th>
            <th>stok</th>
            <th>harga beli</th>
            <th>harga jual</th>
            <th>aset</th>
		</tr>

		<?php
			$jumlah = 0;
			$sql ="SELECT * FROM barang, kategori WHERE barang_kategori=kategori_id and barang_stok NOT LIKE '0' order by barang_nama ASC";
			$query = mysqli_query($con,$sql);
			while ($datatea=mysqli_fetch_assoc($query)) {

				$nama = $datatea["barang_nama"];
				$kategori = $datatea["kategori_nama"];
				$stok = $datatea["barang_stok"];
				$harga = $datatea["barang_harga_beli"];
				$jual = $datatea["barang_harga_jual"];
				$aset = $stok*$harga;
				$jumlah += $aset;

				?>

				<tr>
					<td><?php echo $nama; ?></td>
					<td><?php echo $kategori; ?></td>
					<td><?php echo $stok; ?></td>
					<td><?php echo $harga; ?></td>
					<td><?php echo $jual; ?></td>
					<td><?php echo $aset; ?></td>
				</tr>

				<?php
			}
		?>

			<tr>
				<td colspan="5">Total</td>
				<td><?php echo $jumlah; ?></td>
			</tr>
	</table>
</body>
</html>