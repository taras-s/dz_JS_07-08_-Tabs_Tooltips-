
$(function () {
															// console.log('inited')
$( "#tabs" ).on( 'click', "a", tabChange );
															// console.log('tabs:', $("#tabs div").length );
	function tabChange() {

		$("#tabs .active").removeClass('active');
		$( this ).addClass( 'active' );
		var position = $('#tabs a').index(this);				// get clicked position
																// console.log('index=', position);
		$( "#tabs div" )
			.filter( function(index) { return index === position; } )
			.addClass( 'active' );
	}
});

/* ================================== 

 ================================== */