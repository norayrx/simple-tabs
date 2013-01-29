/*
 *  Project:
 *  Description:
 *  Author:
 *  License:
 */

// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;(function ($, window, document, undefined) {

    // undefined is used here as the undefined global variable in ECMAScript 3 is
    // mutable (ie. it can be changed by someone else). undefined isn't really being
    // passed in so we can ensure the value of it is truly undefined. In ES5, undefined
    // can no longer be modified.

    // window and document are passed through as local variable rather than global
    // as this (slightly) quickens the resolution process and can be more efficiently
    // minified (especially when both are regularly referenced in your plugin).

    // Create the defaults once
    var pluginName = "simpleTabs";
    var defaults = {
		tabItemsSelector: ".tab-items > li", 
		tabPanesSelector: ".tab-pane",
		cssClassOn: "active"
	};

    // The actual plugin constructor
    function SimpleTabs(element, options) {
        this.element = element;
     	this.$element = $(element);

		this.options = $.extend({}, defaults, options);
		this._defaults = defaults;
		this._name = pluginName;
		this.init();
    }

    SimpleTabs.prototype = {
        init: function () {
			this.active = this.options.cssClassOn;
			this.$tabItems = this.$element.find(this.options.tabItemsSelector);
			this.$contentPanes = this.$element.find(this.options.tabPanesSelector);
			this.initTabItemEvents(this.$tabItems, this.$contentPanes, this.active);
        },

		initTabItemEvents: function ($tabItems, $contentPanes, active) {
			var _this = this;

			$tabItems.first().addClass(active);
			$contentPanes.first().addClass(active);

			$tabItems.on('click', 'a', function(e) {
				$tabItems.removeClass(active);
				$contentPanes.removeClass(active);

				$(this).parent().addClass(active);
				$contentPanes.filter(this.hash).addClass(active);

				e.preventDefault();
			});
		}
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new SimpleTabs(this, options));
            }
        });
    };

})(jQuery, window, document);

$(function () {
	"use strict";

	$('.simple-tabs').simpleTabs();
	$('.simple-tabs-2').simpleTabs();
});


