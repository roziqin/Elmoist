<?php 
session_start();
$con = mysqli_connect("localhost","root","","salon_kecantikan");
include '../../../include/format_rupiah.php';

$kond = $_GET['kond'];
$userid = $_SESSION['login_user'];

$q= "SELECT * from pembelian_temp where pembelian_temp_user_id='$userid' ORDER BY pembelian_temp_id DESC LIMIT 1";
$r=mysqli_query($con, $q);
$d=mysqli_fetch_assoc($r);

if ($kond=='home' || $kond=='') {if ($d==null) { ?>
        <div class="row p-3 row-jumlah justify-content-md-center">
            <div class="col-md-6 mt-5">
                <h3 class="text-center mb-5">Pembelian Barang</h3>
                <form method="post" class="form-member">
                    
                    <div class="md-form mb-3">
                        <input type="text" id="defaultForm-nofaktur" class="form-control" name="ip-nofaktur">
                        <label for="defaultForm-nofaktur">No Faktur</label>
                    </div>
                    <button class="btn btn-primary inputfaktur float-right">Proses</button>
                </form>
                <div class="clear"></div>
                <div class="col-md-12 text-center mt-5">
                    <button type="button" class="btn btn-default waves-effect mr-2" id="ceknota"><i class="fas fa-clipboard-check mr-2"></i>Cek Faktur</button>
                </div>
            </div>
        </div>
        <script type="text/javascript">
            $(document).ready(function(){
                $('.mdb-select').materialSelect();
            });
        </script>
    <?php } else { ?>
        <div class="classic-tabs">
            <ul class="nav tabs-white border-bottom" id="myClassicTab" role="tablist">
                <?php
                    $n=0;
                    $sql="SELECT * from jenis ORDER BY jenis_id";
                    $query=mysqli_query($con, $sql);
                    while ($data1=mysqli_fetch_array($query, MYSQLI_ASSOC)) {
                        if ($n==0) {
                            $ket = 'active show';
                            $ket1 = 'true';
                            $ket2 = 'ml-0';
                        } else {
                            $ket = '';
                            $ket1 = 'false';
                            $ket2 = '';

                        }
                        //if($data1['jenis_slug']=='obat' || $data1['jenis_slug']=='skincare' || $data1['jenis_slug']=='facial') {
                        ?>
                            <li class="nav-item <?php echo $ket2; ?>">
                                <a class="nav-link  waves-light <?php echo $ket; ?>" id="profile-tab-classic" data-toggle="tab" href="#<?php echo $data1['jenis_slug']; ?>"
                                role="tab" aria-controls="<?php echo $data1['jenis_slug']; ?>" aria-selected="<?php echo $ket1; ?>"><?php echo $data1['jenis_nama']; ?></a>
                            </li>
                        <?php
                        $n++;
                        //}

                    }

                ?>
            </ul>
            <div class="tab-content" id="myClassicTabContent">
                <?php
                    $n=0;
                    $sql="SELECT * from kategori, jenis WHERE kategori_jenis=jenis_id ORDER BY jenis_id";
                    $query=mysqli_query($con, $sql);
                    while ($data1=mysqli_fetch_array($query, MYSQLI_ASSOC)) {
                        if ($n==0) {
                            $ket='show active';
                        } else {
                            $ket='';

                        }

                        //if($data1['jenis_slug']=='obat' || $data1['jenis_slug']=='skincare') {
                        ?>
                            <div class="tab-pane fade <?php echo $ket; ?>" id="<?php echo $data1['jenis_slug']; ?>" role="tabpanel" aria-labelledby="<?php echo $data1['jenis_slug']; ?>-tab">
                                <div class="row">
                                    <table id="example-<?php echo $data1['jenis_id']; ?>" class="table table-striped table-bordered fadeIn animated" style="width:100%">
                                        <thead>
                                            <tr>
                                                <th>nama item</th>
                                                <th>kategori</th>
                                                <th>stok</th>
                                                <th>harga</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        <?php
                                            $sqlbarang="SELECT * from barang, kategori, jenis where barang_kategori=kategori_id and kategori_jenis=jenis_id and jenis_id='$data1[jenis_id]'";
                                            $querybarang=mysqli_query($con, $sqlbarang);
                                            while ($databarang=mysqli_fetch_array($querybarang, MYSQLI_ASSOC)) {
                                                if ($databarang['barang_image']=='') {
                                                    $image = 'default.jpg';
                                                } else {
                                                    $image = $databarang['barang_image'];
                                                }

                                                if ($databarang['barang_disable']==1) {
                                                    $disable = 'disable';
                                                } else {
                                                    $disable = '';
                                                }

                                                $harga = $databarang['barang_harga_beli'];

                                                if ($databarang['barang_set_stok']!=0) {                                                    
                                                    ?>
                                                    <tr>
                                                        <td><strong class=""><?php echo $databarang['barang_nama']; ?></strong></td>
                                                        <td><strong class=""><?php echo $databarang['kategori_nama']; ?></strong></td>
                                                        <td><span class="stok <?php echo $stok_status; ?>"><?php echo $databarang['barang_stok']; ?></span></td>
                                                        <td>Rp. <?php echo format_rupiah($harga); ?></td>
                                                        <td>
                                                            <button class="btn btn-default pilihmenu m-0" data-id="<?php echo $databarang['barang_id']; ?>">Pilih <i class="fas fa-magic ml-1"></i></button>
                                                        </td>
                                                    </tr>
                                                    <?php
                                                    
                                                }    
                                            }
                                        ?>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            
                        <?php
                        $n++;
                        //}
                    }
                ?>
            </div>
        </div>
    <?php } ?>
<?php } elseif ($kond=='jumlah') { ?>
    <div class="row p-3 row-jumlah justify-content-md-center">
    	<div class="col-md-6 mt-5">
    		<h3 class="text-center mb-5">Input Jumlah</h3>
	    	<form method="post" class="form-jumlah">
	    		<input type="hidden" id="barang_id" class="form-control" value="<?php echo $_GET['id']; ?>" name="barang_id">  	
	    		<div class="md-form mb-3">
				  	<input type="text" id="jumlah" class="form-control" name="jumlah" >
				  	<label for="jumlah">Jumlah dipesan</label>
				</div>
	    		<div class="md-form">
					<textarea id="keterangan" class="md-textarea form-control" rows="3" name="keterangan"></textarea>
					<label for="keterangan">Request</label>
				</div>
                <div class="md-form mt-4">
                    <input type="text" id="hargamanual" class="form-control" name="hargamanual" >
                    <label for="hargamanual">Harga Manual</label>
                </div>
                <div class="md-form mb-4">
                    <select class="mdb-select md-form" id="jenispotongan" name="jenispotongan" searchable="Search here..">
                        <option value="">Pilih Diskon</option>
                        <option value="potongan">Potongan</option>
                        <option value="persen">Persen</option>
                    </select>
                </div>
                <div class="md-form mt-4">
                    <input type="text" id="potongan" class="form-control" name="potongan" >
                    <label for="hargamanual">Jumlah Diskon</label>
                </div>
				<button class="btn btn-primary prosesmenu float-right">Proses</button>
	    	</form>
	    </div>
    </div>
        <script type="text/javascript">
            $(document).ready(function(){
                $('.mdb-select').materialSelect({destroy:true});
                $('.mdb-select').materialSelect();
            });
        </script>
<?php } elseif ($kond=='pembeliansukses') { ?>
    <input type="hidden" id="ketnota" value="<?php echo $_SESSION['no-nota']; ?>" name="ketnota">   
    <div class="row p-3 row-jumlah justify-content-md-center">
        <div class="col-md-6 mt-5">
            <h3 class="text-center mb-5">Pembelian Barang Berhasil</h3>
            <button class="btn btn-primary pembelianbaru float-right">pembelian Baru</button>
            <button class="btn btn-default printulangnota float-right">Print Ulang nota</button>
        </div>
    </div>
    
    <script type="text/javascript">
        var nota = $("#ketnota").val();
        windowList = new Array('../print/nota-pembelian.print.php?id='+nota);
        i = 0;
        windowName = "window";
        windowInterval = window.setInterval(function(){
            window.open(windowList[i],windowName+i,'toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=0,titlebar=no');
            i++;
            if(i==windowList.length){
                window.clearInterval(windowInterval);
            }
        },1000);

        $('.printulangnota').on('click',function(){
            windowList = new Array('../print/nota-pembelian.print.php?id='+nota);
            i = 0;
            windowName = "window";
            windowInterval = window.setInterval(function(){
                window.open(windowList[i],windowName+i,'toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=0,titlebar=no');
                i++;
                if(i==windowList.length){
                    window.clearInterval(windowInterval);
                }
            },1000);
        });
    </script>

   
<?php }  elseif ($kond=='ceknota') { ?>
    <div class="row p-3 row-jumlah justify-content-md-center">
        <div class="col-md-6 mt-5">
            <h3 class="text-center mb-5">Cek Faktur</h3>
            <form method="post" class="form-jumlah"> 
                <div class="md-form mb-3">
                    <input type="text" id="idnofaktur" class="form-control" name="idnofaktur" >
                    <label for="idnonota">No Faktur</label>
                </div>
                <button class="btn btn-primary prosesceknota float-right">Proses</button>
                <button class="btn btn-danger kembali float-right">Kembali</button>
            </form>
        </div>
        <div class="clear"></div>
        <?php if ($_GET['nofaktur']!='') { 
            $nofaktur = $_GET['nofaktur'];
            $sqlnot="SELECT * FROM pembelian where pembelian_no_faktur='$nofaktur' ";
            $querynot=mysqli_query($con,$sqlnot);
            $datanot=mysqli_fetch_assoc($querynot);
            $diskon = $datanot['pembelian_diskon'];
            $nota = $datanot['pembelian_id'];
            $total = $datanot['pembelian_total'];
        ?>
        <div class="col-md-12 p-5">

            <input type="hidden" id="ip-nota" class="form-control" name="ip-nota" value="<?php echo $nota; ?>" >
            <h3>Cek Faktur pembelian : <?php echo $nofaktur; ?></h3>
            <div class="row">
                <table id="listbarang" class="table table-bordered table-striped">
                    <thead>
                    <tr>
                      <th>Nama Produk</th>
                      <th class="text-right">Harga</th>
                      <th width="50px" style="padding-right: 8px; ">Jumlah</th>
                      <th class="text-right">Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    <?php
                        $sqlte1="SELECT * from pembelian_detail, barang where pembelian_detail_barang_id=barang_id and pembelian_detail_nota='$nota' ORDER BY pembelian_detail_id ASC";
                        $queryte1 = mysqli_query($con,$sqlte1);
                        while($datatea = mysqli_fetch_assoc($queryte1)) {
                            $jumlah = $datatea["pembelian_detail_jumlah"];
                            $harga = $datatea["barang_harga_beli"];
                        ?>
                            <tr>
                                <td><?php echo $datatea["barang_nama"]; ?></td>
                                <td class="text-right">Rp. <?php echo format_rupiah($harga); ?></td>
                                <td><?php echo $jumlah; ?></td>
                                <td class="text-right">Rp. <?php echo format_rupiah($jumlah*$harga); ?></td>
                                
                            </tr>
                        <?php
                            if ($datatea["pembelian_detail_diskon"]!=0) {
                            ?>
                                <tr style="font-weight: 700;">
                                    <td>Diskon</td>
                                    <td></td>
                                    <td></td>
                                    <td class="text-right">Rp. <?php echo format_rupiah($datatea["pembelian_detail_diskon"]); ?></td>
                                </tr>
                            <?php
                            }
                        }
                    ?>
                    </tbody>
                </table>
                <div class="col-6 col-md-offset-0">
                    <h4>Total : </h4>
                </div>
                <div class="col-md-6 col-md-offset-0 text-right">
                    <h4>Rp. <?php echo format_rupiah($total); ?></h4>
                </div>              
            </div>
            <button class="btn btn-warning printulang float-right mr-0" id="btn-printulang"><i class="fas fa-print mr-2"></i>Print Ulang</button>
        </div>
        <?php } ?>
    </div>
<?php }  elseif ($kond=='tutupkasir') { ?>
    <div class="row-jumlah">
        <div class="row p-3 justify-content-md-center">
            <div class="col-md-6 mt-5">
                <h3 class="text-center mb-5">Tutup Kasir</h3>
                <form method="post" class="form-omset"> 
                    <div class="md-form mb-3">
                        <input type="text" id="uangfisik" class="form-control" name="uangfisik" >
                        <label for="uangfisik">Masukkan Jumlah Uang Fisik</label>
                    </div>
                    <button class="btn btn-primary prosestutupkasir float-right">Proses</button>
                    <button class="btn btn-danger kembali float-right">Kembali</button>
                </form>
            </div>
        </div>
        <div class="row p-3 justify-content-md-center">
            <div class="col-md-6 p-5">

                <h3 id="spuangfisik"></h3>
                <h3 id="spcash"></h3>
                <h3 id="spdebet"></h3>
                <h3 id="spomset"></h3>
                <h3 id="spselisih"></h3>
                
                    
            </div>
        </div>
    </div>
<?php } ?>


<?php if ($kond=='home' || $kond=='search' || $kond=='item' || $kond=='' ) { ?>

<script type="text/javascript">
    $('.inputfaktur').on('click',function(e){
        e.preventDefault();
        var nofaktur = $('#defaultForm-nofaktur').val();


        $.ajax({
            type:'POST',
            url: "controllers/pembelian.ctrl.php?ket=inputfaktur",
            dataType: "json",
            data:{
                nofaktur:nofaktur
            },
            success:function(data){
                window.location.reload();
                //$('.container__load').load('components/content/pembelian.content.php?kond=home');
            }
        }); 
    });

	for (var i = 0; i < 30 ; i++) {
        $('#example-'+i).DataTable({
          "paging": true,
          "lengthChange": false,
          "searching": true,
          "ordering": true,
          "info": true,
          "autoWidth": false,
          "deferRender": true,
          "drawCallback": function( settings, json ) {
                $('.pilihmenu').on('click',function(e){
                    if(e.handled !== true) {
                        var barang_id = $(this).data('id');
                        console.log("b")
                        $('.container__load').load('components/content/pembelian.content.php?kond=jumlah&id='+barang_id);
                        e.handled = true;
                    }
                }); 
            }

        });
    }

	$('.pilihmenu').on('click',function(){
		var barang_id = $(this).data('id');
		$('.container__load').load('components/content/pembelian.content.php?kond=jumlah&id='+barang_id);
	});

    $('.pilihjenis').on('click',function(){
        var jenis_id = $(this).data('id');
        $('.container__load').load('components/content/pembelian.content.php?kond=item&jenisid='+jenis_id);
    });

	$('.btn-clear-search').on('click',function(){
		$('#carimenu').val('');
		$('.container__load').load('components/content/pembelian.content.php?kond=home');

	});

    $('#ceknota').on('click',function(){
        $('.container__load').load('components/content/pembelian.content.php?kond=ceknota&nofaktur=');
    });


</script>

<?php } elseif ($kond=='pembeliansukses') { ?>
    <script type="text/javascript">
        $('.pembelianbaru').on('click',function(){
            window.location.reload();
            $('.container__load').load('components/content/pembelian.content.php?kond=home');
        });
    </script>

<?php } elseif ($kond=='ceknota' || $kond=='tutupkasir') { ?>
    <script type="text/javascript">

        $('.kembali').on('click',function(e){
            e.preventDefault();
            var idnonota = $('#idnonota').val();
            $('.container__load').load('components/content/pembelian.content.php?kond=home');
        });

        $('.prosesceknota').on('click',function(e){
            e.preventDefault();
            var idnonota = $('#idnofaktur').val();
            $('.container__load').load('components/content/pembelian.content.php?kond=ceknota&nofaktur='+idnonota);
        });

        $('#btn-printulang').on('click',function(e){
            var idnonota = $('#ip-nota').val();
            e.preventDefault();
            
            windowList = new Array('../print/nota-pembelian.print.php?id='+idnonota);
            i = 0;
            windowName = "window";
            windowInterval = window.setInterval(function(){
              window.open(windowList[i],windowName+i,'toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=0,titlebar=no');
              i++;
              if(i==windowList.length){
                window.clearInterval(windowInterval);
              }
            },1000);
        });

                                    
    </script>

<?php } elseif ($kond=='jumlah') { ?>

	<script type="text/javascript">
		
		$('.prosesmenu').on('click',function(e){
			e.preventDefault();
	        var data = $('.form-jumlah').serialize();
        	if ($('#defaultForm-ordertype').val()=='online') {
	        	var pajakjml = $('#ip-pajakonline').val();	
        	} else {
	        	var pajakjml = $('#ip-pajakresto').val();
	        }
	        console.log("prosesmenu");
	        console.log(data)
	       
	        $.ajax({
	            type:'POST',
		        url: "controllers/pembelian.ctrl.php?ket=tambahmenu",
	            dataType: "json",
	            data:data,
	            success:function(data){
					$('#carimenu').val('');
	            	if (data.totalordertemp.toString()=="Stok Kurang") {
	            		$.confirm({
		                      title: 'Stok Kurang',
		                      content: 'Jumlah stok tidak mencukupi',
		                      buttons: {
		                          confirm: {
		                              text: 'Close',
		                              btnClass: 'col-md-12 btn btn-primary',
		                              action: function(){
		                                  
		                                  
		                              }
		                          }
		                      }
		                });
	            	} else {
                        var diskon = '';
                        var ketdiskon = '';
                        if (data.item.pembelian_detail_temp_diskon!=0) {
                            diskon = '<tr class="fadeInLeft animated diskon"><td></td><td>Diskon</td><td></td><td><span class="text_total">Rp. '+formatRupiah((data.item.pembelian_detail_temp_jumlah*data.item.pembelian_detail_temp_diskon).toString())+'</span></td></tr>';
                            ketdiskon = 'itemdiskon';
                        } else {
                            diskon = '';
                            ketdiskon = '';
                        }

			            var content = '<tr class="'+ketdiskon+' fadeInLeft animated"><td><button type="button" class="btn btn-dark-info waves-effect btn orange-text m-0 p-0 btn-remove" data-id="'+data.item.pembelian_detail_temp_id+'"><i class="fas fa-times"></i></button></td><td>'+data.item.barang_nama+'<br><span>'+data.item.pembelian_detail_temp_keterangan+'</span></td><td><button type="button" class="btn btn-dark-info waves-effect btn btn-outline-white mr-2 mt-0 ml-0 mb-0 p-1 btn-plusminus" data-ket="minus" data-id="'+data.item.pembelian_detail_temp_id+'" data-idbarang="'+data.item.pembelian_detail_temp_barang_id+'" data-jumlah="'+data.item.pembelian_detail_temp_jumlah+'"><i class="fas fa-minus"></i></button><span class="text_jumlah">'+data.item.pembelian_detail_temp_jumlah+'</span><button type="button" class="btn btn-dark-info waves-effect btn-outline-white mr-0 mt-0 ml-2 mb-0 p-1 btn-plusminus" data-ket="plus" data-id="'+data.item.pembelian_detail_temp_id+'" data-idbarang="'+data.item.pembelian_detail_temp_barang_id+'" data-jumlah="'+data.item.pembelian_detail_temp_jumlah+'"><i class="fas fa-plus"></i></button></td><td><span class="text_total">'+formatRupiah(data.item.pembelian_detail_temp_total, 'Rp. ')+'</span></td></tr>'+diskon;

			        	$('#subtotal').empty();
			            $('#subtotal').append(formatRupiah(data.totalordertemp.toString(), 'Rp. '));


						var tax = parseInt(pajakjml)*data.totalordertemp*0.1;
						if ($('#ip-pajakpembulatan').val()==1) {
							tax = pembulatan(tax);
				        }

			        	$('#pajak').empty();
						$('#pajak').append(formatRupiah(tax.toString(), 'Rp. '))
						
						var taxservice = 0;
				        if ($('#ip-pajakservice').val()!='') {
				        	taxservice = parseInt($('#ip-pajakservice').val())*data.totalordertemp/100;
							if ($('#ip-pajakpembulatan').val()==1) {
								taxservice = pembulatan(taxservice);
					        }
					        
				        	$('#pajakservice').empty();
							$('#pajakservice').append(formatRupiah(taxservice.toString(), 'Rp. '))
				        }

				        var jmldiskon = $("#defaultForm-jumlahdiskon").val();

						var total = tax+data.totalordertemp+taxservice-jmldiskon;
						$('#total').empty();
						$('#total').append(formatRupiah(total.toString(), 'Rp. '));

						$('#defaultForm-tax').val(tax);
                        $('#defaultForm-subtotal').val(data.totalordertemp);
						$('#defaultForm-total').val(total);

						$('#listitem table').append(content);
						$('.container__load').load('components/content/pembelian.content.php?kond=');

						$('.btn-remove').unbind('click').click(function() {
							var indexitem = $(this).parent().parent().index();
                            var id = $(this).data('id');

                            var classdiskon = $(this).parent().parent().hasClass("itemdiskon");
                            removeItemTemp(id, indexitem, classdiskon);
						});

						$('.btn-plusminus').on('click',function(){
							var indexitem = $(this).parent().parent().index();
							var id = $(this).data('id');
							var idbarang = $(this).data('idbarang');
							var ket = $(this).data('ket');
							var jumlah = $(this).data('jumlah');

							plusminusItem(id, idbarang, indexitem, ket, jumlah);
						});
					}

	            }
	        });
	                  
		});		

	</script>

<?php
}

if ($kond=='home') { ?>
    <script type="text/javascript">
		$.ajax({
	        type:'POST',
	        url:'api/view.api.php?func=list-pembelian-temp',
	        dataType: "json",
	        success:function(data){
	        	$('#listitem table').empty();
	        	$('#subtotal').empty();
	        	$('#pajak').empty();
	        	$('#total').empty();
	        	if ($('#defaultForm-ordertype').val()=='online') {
		        	var pajakjml = $('#ip-pajakonline').val();	
	        	} else {
		        	var pajakjml = $('#ip-pajakresto').val();
		        }
	            var content = "";
	            var subtotal = 0;

                var diskon = '';
                var ketdiskon = '';
				for (var i in data) {

                    if (data[i].pembelian_detail_temp_diskon!=0) {
                        diskon = '<tr class="diskon"><td></td><td>Diskon</td><td></td><td><span class="text_total">Rp. '+formatRupiah((data[i].pembelian_detail_temp_jumlah*data[i].pembelian_detail_temp_diskon).toString())+'</span></td></tr>';
                        ketdiskon = 'itemdiskon';
                    } else {
                        diskon = '';
                        ketdiskon = '';
                    }

				    content += '<tr class="'+ketdiskon+'"><td><button type="button" class="btn btn-dark-info waves-effect btn orange-text m-0 p-0 btn-remove" data-id="'+data[i].pembelian_detail_temp_id+'"><i class="fas fa-times"></i></button></td><td>'+data[i].barang_nama+'<br><span>'+data[i].pembelian_detail_temp_keterangan+'</span></td><td><button type="button" class="btn btn-dark-info waves-effect btn btn-outline-white mr-2 mt-0 ml-0 mb-0 p-1 btn-plusminus"  data-ket="minus" data-id="'+data[i].pembelian_detail_temp_id+'" data-idbarang="'+data[i].pembelian_detail_temp_barang_id+'" data-jumlah="'+data[i].pembelian_detail_temp_jumlah+'"><i class="fas fa-minus"></i></button><span class="text_jumlah">'+data[i].pembelian_detail_temp_jumlah+'</span><button type="button" class="btn btn-dark-info waves-effect btn-outline-white mr-0 mt-0 ml-2 mb-0 p-1 btn-plusminus" data-ket="plus" data-id="'+data[i].pembelian_detail_temp_id+'" data-idbarang="'+data[i].pembelian_detail_temp_barang_id+'" data-jumlah="'+data[i].pembelian_detail_temp_jumlah+'"><i class="fas fa-plus"></i></button></td><td><span class="text_total">'+formatRupiah(data[i].pembelian_detail_temp_total, 'Rp. ')+'</span></td></tr>'+diskon;
				    subtotal += parseInt(data[i].pembelian_detail_temp_total);
				}
				var tax = parseInt(pajakjml)*subtotal*0.1;
				if ($('#ip-pajakpembulatan').val()==1) {
					tax = pembulatan(tax);
		        }
				$('#pajak').append(formatRupiah(tax.toString(), 'Rp. '))

				var taxservice = 0;
		        if ($('#ip-pajakservice').val()!='') {
		        	taxservice = parseInt($('#ip-pajakservice').val())*subtotal/100;
					
					if ($('#ip-pajakpembulatan').val()==1) {
						taxservice = pembulatan(taxservice);
			        }
			        
		        	$('#pajakservice').empty();
					$('#pajakservice').append(formatRupiah(taxservice.toString(), 'Rp. '))
		        }

				$('#subtotal').append(formatRupiah(subtotal.toString(), 'Rp. '));

				var jmldiskon = $("#defaultForm-jumlahdiskon").val();

				var total = tax+subtotal+taxservice-jmldiskon;
				$('#total').append(formatRupiah(total.toString(), 'Rp. '));
				$('#listitem table').append(content);

				$('#defaultForm-tax').val(tax);
                $('#defaultForm-subtotal').val(subtotal);
				$('#defaultForm-total').val(total);

				$('.btn-remove').unbind('click').click(function() {
					var indexitem = $(this).parent().parent().index();
					var id = $(this).data('id');
                    var classdiskon = $(this).parent().parent().hasClass("itemdiskon");
					removeItemTemp(id, indexitem, classdiskon);

				});

				$('.btn-plusminus').on('click',function(){
					var indexitem = $(this).parent().parent().index();
					var id = $(this).data('id');
					var idbarang = $(this).data('idbarang');
					var ket = $(this).data('ket');
					var jumlah = $(this).data('jumlah');

					plusminusItem(id, idbarang, indexitem, ket, jumlah);
				});
	        }
	    });
        $.ajax({
            type:'POST',
            url:'api/view.api.php?func=list-pembelian-faktur-temp',
            dataType: "json",
            success:function(data){
                console.log(data)
                $('#listmember table').empty();
                var nama = ''; 
                if (data!='') {
                    $('#listmember table').append('<tr><td><h6>No Faktur: '+data[0].pembelian_temp_no_faktur+'</h6></td><td class="text-right"></td></tr>');
                    //$('#bayar').removeAttr("disabled");
                }
            }
        });

	</script>

<?php } ?>

<script type="text/javascript">
	function removeItemTemp(id, index, classdiskon) {
		$.ajax({
			type:'POST',
	        url: "controllers/pembelian.ctrl.php?ket=removeitem",
            dataType: "json",
            data:{
            	id:id,
            	index:index
            },
            success:function(data){

				$('.container__load').load('components/content/pembelian.content.php?kond=home');
            }
        });
	}

	function plusminusItem(id, idbarang, index, keterangan, jumlah) {
		$.ajax({
			type:'POST',
	        url: "controllers/pembelian.ctrl.php?ket=plusminus",
            dataType: "json",
            data:{
            	id:id,
            	idbarang:idbarang,
            	index:index,
            	keterangan:keterangan,
            	jumlah:jumlah
            },
            success:function(data){
            	
            	if ($('#defaultForm-ordertype').val()=='online') {
		        	var pajakjml = $('#ip-pajakonline').val();	
	        	} else {
		        	var pajakjml = $('#ip-pajakresto').val();
		        }

            	console.log("plusminus sukses "+data.totalordertemp);
                if (data.totalordertemp.toString()=="Stok Kurang") {
                    $.confirm({
                          title: 'Stok Kurang',
                          content: 'Jumlah stok tidak mencukupi',
                          buttons: {
                              confirm: {
                                  text: 'Close',
                                  btnClass: 'col-md-12 btn btn-primary',
                                  action: function(){
                                      
                                      
                                  }
                              }
                          }
                    });
                } else {
                    $('.container__load').load('components/content/pembelian.content.php?kond=home');
                }

            	/*
                $.confirm({
                      title: 'Stok Kurang',
                      content: 'Jumlah stok tidak mencukupi',
                      buttons: {
                          confirm: {
                              text: 'Close',
                              btnClass: 'col-md-12 btn btn-primary',
                              action: function(){
                                  
                                  
                              }
                          }
                      }
                });
            	if (data.jumlahordertemp==0) {
            		$("#listitem tr").eq(index).remove();
            	} else {
            		$("#listitem tr:eq("+index+") td span.text_total").empty();
	            	$("#listitem tr:eq("+index+") td span.text_total").text(formatRupiah(data.item.pembelian_detail_temp_total, 'Rp. '));
	            	
	            	$("#listitem tr:eq("+index+") td span.text_jumlah").empty();
	            	$("#listitem tr:eq("+index+") td span.text_jumlah").text(data.item.pembelian_detail_temp_jumlah);

	            	$("#listitem tr:eq("+index+") td button.btn-plusminus").attr("data-jumlah", data.item.pembelian_detail_temp_jumlah)
            	}
				
				$('#subtotal').empty();
	            $('#subtotal').append(formatRupiah(data.totalordertemp.toString(), 'Rp. '));

				var tax = parseInt(pajakjml)*data.totalordertemp*0.1;
				if ($('#ip-pajakpembulatan').val()==1) {
					tax = pembulatan(tax);
		        }

	        	$('#pajak').empty();
				$('#pajak').append(formatRupiah(tax.toString(), 'Rp. '))
				
				var total = tax+data.totalordertemp;
				$('#total').empty();
				$('#total').append(formatRupiah(total.toString(), 'Rp. '));
				*/

				
            }
        });
	}

	function pembulatan(tax) {
		if (tax.toString().length == 3) {
            if (tax.toString().slice(0) == 0 ) {
                tax = 0;
            } else if (tax.toString().slice(0) <= 500 ) {
                tax = 500;
            } else {
                tax = 1000;
            }
            return tax;

        } else if (tax.toString().length == 4) {
            if (tax.toString().slice(1) == 0 ) {
                tax = tax.toString().slice(0,1)+"000";
            } else if (tax.toString().slice(1) <= 500 ) {
                tax = tax.toString().slice(0,1)+"500";
            } else {
                tax = parseInt(tax.toString().slice(0,1))+1+"000";
            }
            tax = parseInt(tax);
            return tax;
        } else if (tax.toString().length == 5) {
            if (tax.toString().slice(2) == 0 ) {
                tax = tax.toString().slice(0,2)+"000";
            } else if (tax.toString().slice(2) <= 500 ) {
                tax = tax.toString().slice(0,2)+"500";
            } else {
                tax = parseInt(tax.toString().slice(0,2))+1+"000";
            }
            tax = parseInt(tax);
            return tax;
        } else {
            if (tax.toString().slice(3) == 0 ) {
                tax = tax.toString().slice(0, 3)+"000";
            } else if (tax.toString().slice(3) <= 500 ) {
                tax = tax.toString().slice(0, 3)+"500";
            } else {
                tax = parseInt(tax.toString().slice(0, 3))+1+"000";
            }
            tax = parseInt(tax);
            return tax;
        }
	}
</script>