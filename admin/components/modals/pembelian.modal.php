<!-------------- Modal pembelian -------------->

<div class="modal fade" id="modalpembelian" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header text-center">
        <h2 class="modal-title w-100 font-weight-bold" id="totalpembelian"></h2>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body mx-3">
        <input type="hidden" id="defaultForm-total" name="ip-total">
        <table id="table-preview" class="table table-striped table-bordered" style="width:100%">
            <thead>
                <tr>
                    <th>Nama Barang</th>
                    <th>Harga</th>
                    <th>Jumlah</th>
                    <th>Subtotal</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
        <div class="col-md-12 text-center paytype mb-3">
          <button type="button" class="btn btn-white waves-effect mr-2 text-info paytype select" data-id="cash" id="cash" disabled="true"><i class="fas fa-money-bill"></i>Cash</button>
          <button type="button" class="btn btn-white waves-effect mr-2 text-info paytype" data-id="debet" id="debet"><i class="far fa-credit-card"></i>Debet</button>
          <button type="button" class="btn btn-white waves-effect mr-2 text-info paytype" data-id="cashdebet" id="cashdebet" ><i class="fas fa-money-bill"></i>Cash & Debet</button>
        </div>
        <input type="hidden" id="defaultForm-paytype" name="ip-paytype" value="cash">
        <input type="hidden" id="defaultForm-totalmodal" name="ip-total">
        <div class="md-form mb-0">
          <input type="text" id="price" class="form-control validate mb-1" name="ip-bayar">
          <label for="price">Bayar</label>
        </div>
        <div class="md-form mb-0">
          <input type="text" id="price1" class="form-control validate mb-1" name="ip-bayar-debet" >
          <label class="active" for="price1">Bayar Debet</label>
        </div>
        <div class="md-form mb-0">
          <input type="text" id="defaultForm-debet-ket" class="form-control validate mb-1" name="ip-bayar-debet" >
          <label class="active" for="defaultForm-debet-ket">Keterangan Debet</label>
        </div>
      </div>
      <div class="modal-footer d-flex justify-content-center">
        <button class="btn btn-primary" id="submit-pembelian" data-dismiss="modal" aria-label="Close">Proses</button>
      </div>
    </div>
  </div>
</div>

<!-------------- End modal pembelian -------------->





  <script type="text/javascript">
      
      $('#price').priceFormat({ prefix: '', centsSeparator: ',', thousandsSeparator: '.', centsLimit: 0 });
      $('#price1').priceFormat({ prefix: '', centsSeparator: ',', thousandsSeparator: '.', centsLimit: 0 });


      $("#submit-pembelian").click(function(e){
        e.preventDefault();
        var data = new FormData();
        data.append('ip-total', $("#defaultForm-total").val());

        data.append('ip-paytype', $("#defaultForm-paytype").val());
        data.append('ip-jenisdiskon', $("#defaultForm-jenisdiskon").val());
        data.append('ip-jumlahdiskon', $("#defaultForm-jumlahdiskon").val());
        data.append('ip-tax', $("#defaultForm-tax").val());
        
        var total = parseInt($("#defaultForm-total").val());
        var bayar = '';
        var text_line = $("#price").val().split(".");
        var length = text_line.length;

        if (length==1) {
          bayar=text_line[0];

        } else if (length==2) {
          bayar=text_line[0]+""+text_line[1];

        } else if (length==3) {
          bayar=text_line[0]+""+text_line[1]+""+text_line[2];

        } else if (length==4) {
          bayar=text_line[0]+""+text_line[1]+""+text_line[2]+""+text_line[3];

        } else if (length==5) {
          bayar=text_line[0]+""+text_line[1]+""+text_line[2]+""+text_line[3]+""+text_line[4];

        }

        data.append('ip-bayar', bayar);

        var debet = '';
        var text_line = $("#price1").val().split(".");
        var length = text_line.length;

        if (length==1) {
          debet=text_line[0];

        } else if (length==2) {
          debet=text_line[0]+""+text_line[1];

        } else if (length==3) {
          debet=text_line[0]+""+text_line[1]+""+text_line[2];

        } else if (length==4) {
          debet=text_line[0]+""+text_line[1]+""+text_line[2]+""+text_line[3];

        } else if (length==5) {
          debet=text_line[0]+""+text_line[1]+""+text_line[2]+""+text_line[3]+""+text_line[4];

        }

        data.append('ip-bayar-debet', debet);


        bayar = parseInt(bayar);

        if (debet==0) {
          data.append('ip-bayar-debet', 0);
        } else {
          data.append('ip-bayar-debet', debet);
          bayar = bayar+parseInt(debet);
        }
        data.append('ip-bayar-debet-ket', $("#defaultForm-debet-ket").val());
        if (bayar < total) {
            alert("Angka yang dibayarkan Kurang");
        } else {
      
          $.ajax({
            type: 'POST',
            url: "controllers/pembelian.ctrl.php?ket=prosespembelian",
            data: data,
            cache: false,
            processData: false,
            contentType: false,
            success: function(data) {
              console.log(data);
            
              
              $('.container__load').load('components/content/pembelian.content.php?kond=pembeliansukses');
              $('#listitem table').empty();
              $('#subtotal').empty();
              $('#subtotal').append('Rp. 0');
              $('#pajak').empty();
              $('#pajak').append('Rp. 0');
              $('#total').empty();
              $('#total').append('Rp. 0');
              $('.text-jenisdiskon').empty();
              $('.text-jumlahdiskon').empty();

              
            }
          });
          
        }
      }); 
    
  </script> 