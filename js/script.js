var DDC = DDC || {};

DDC.navTabs = (function($) {
	"use strict";

	/*** private variables ***/

	var $navTabs, 
		$navPanes,
		classOn = "active",

	/*** private methods ***/

	initSelectors = function () {
		$navTabs = $('.nav-tabs');
		$navPanes = $('.tab-pane');
	},

	initNavTabEvents = function () {
		$navTabs.first().addClass(classOn);
		$navPanes.first().addClass(classOn);
		$navTabs.on('click', 'a', function(e) {
			$navTabs.find('a').removeClass(classOn);
			$(this).addClass(classOn);
			$navPanes.removeClass(classOn);
			$navPanes.filter(this.hash).addClass(classOn);
			e.preventDefault();
		});
	},

	init = function () {
		initSelectors();
		initNavTabEvents();
	};

	/*** public ***/
	return {
		Init: init
	};

}(jQuery));

$(function () {
	"use strict";
	DDC.navTabs.Init();
});
