/* global window, Reveal */

(function() {
	'use strict';

	var header = document.querySelector( 'header' );
	var footer = document.querySelector( 'footer' );

	/**
	* Callback invoked when a slide with the `noicons` state is accessed.
	*
	* @private
	* @param {Event} event - event
	*/
	function onNoIcons( event ) {
		header.classList.add( 'hidden' );
		footer.classList.add( 'hidden' );
	}

	/**
	* Callback invoked when a slide with the `icons` state is accessed.
	*
	* @private
	* @param {Event} event - event
	*/
	function onIcons( event ) {
		header.classList.remove( 'hidden' );
		footer.classList.remove( 'hidden' );
	}

	Reveal.addEventListener( 'noicons', onNoIcons, false );
	Reveal.addEventListener( 'icons', onIcons, false );
})();
