
	<div class="container-fluid p-0 fadeIn animated position-relative" style="z-index: 1;">
		<div class="row header-content pt-3 pb-3 info-color text-white ">
			<div class="col-md-9">
				<h2>Users</h2>
			</div>
			<div class="col-md-3">
				<?php include 'partials/notifications.php'; ?>
			</div>
		</div>
	</div>
	
	<main class="pt-4 produk pl-3 pr-3 mr-0">
		<div class="main-wrapper">
		    <div class="container-fluid">
				<div class="row mt-2">
					<div class="col-md-12 container__load fadeIn animated">
						
					</div>
				</div>
		    </div>
		</div>
	</main>


	<?php include 'partials/footer.php'; ?>

	<script type="text/javascript">
		$(document).ready(function(){
		
	 
			$('.container__load').load('components/content/user.content.php');					
	 
		});
	</script>


