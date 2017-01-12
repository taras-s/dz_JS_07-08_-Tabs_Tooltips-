
$(function () {
// console.log('inited')

//---------------------------- initialization

	var TIP_SPEED = 300;
	var TIP_V_OFFSET = 3;

	var arrVerOffsets = [];

	eTitles = $( 'input[title]' )
	arrTitles = eTitles.toArray()						// array titles


	var offset = eTitles.each(function( index ) {		// make array of vertical offsets
		var offs = Math.floor( $(this).position().top ) + TIP_V_OFFSET;
		// console.log('i:', index, 'offs:', offs);
		arrVerOffsets.push(offs);
	});

	var tipString ="";
	for ( var i = 0; i < arrTitles.length; i++ ) {		// assemble HTML tips
		tipString = tipString + '<p class="tooltip" style="top:' + arrVerOffsets[i] + 'px;">' + arrTitles[i].title + '</p>\n'
	}

	$( ".wrapper" ).prepend( tipString );				// add to DOM

	$( '.tooltip' ).hide(0);							//hide all tips
	eTitles.removeAttr("title");

// ------------------------- events

	$( "form input" ).on( 'mouseover', showTip );
	$( "form input" ).on( 'mouseout', function () {  $( '.tooltip' ).hide(TIP_SPEED);	} );
	$( "button" ).on('click', showTipsAll);

// --------------------------- handlers

	function showTip() {								// mouse over
		var position = $('form input').index(this);
		$( '.tooltip' )
			.filter( function(index) { return index === position; } )
			.show(TIP_SPEED);
	}
	
	function showTipsAll(e) {							// Key Press
		$( ".tooltip" ).show(TIP_SPEED);
		e.preventDefault();
	}

});

