/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/owl-carousel/owl.carousel.js":
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
/**
 * Owl carousel
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;(function ($, window, document, undefined) {

	/**
  * Creates a carousel.
  * @class The Owl Carousel.
  * @public
  * @param {HTMLElement|jQuery} element - The element to create the carousel for.
  * @param {Object} [options] - The options
  */
	function Owl(element, options) {

		/**
   * Current settings for the carousel.
   * @public
   */
		this.settings = null;

		/**
   * Current options set by the caller including defaults.
   * @public
   */
		this.options = $.extend({}, Owl.Defaults, options);

		/**
   * Plugin element.
   * @public
   */
		this.$element = $(element);

		/**
   * Proxied event handlers.
   * @protected
   */
		this._handlers = {};

		/**
   * References to the running plugins of this carousel.
   * @protected
   */
		this._plugins = {};

		/**
   * Currently suppressed events to prevent them from being retriggered.
   * @protected
   */
		this._supress = {};

		/**
   * Absolute current position.
   * @protected
   */
		this._current = null;

		/**
   * Animation speed in milliseconds.
   * @protected
   */
		this._speed = null;

		/**
   * Coordinates of all items in pixel.
   * @todo The name of this member is missleading.
   * @protected
   */
		this._coordinates = [];

		/**
   * Current breakpoint.
   * @todo Real media queries would be nice.
   * @protected
   */
		this._breakpoint = null;

		/**
   * Current width of the plugin element.
   */
		this._width = null;

		/**
   * All real items.
   * @protected
   */
		this._items = [];

		/**
   * All cloned items.
   * @protected
   */
		this._clones = [];

		/**
   * Merge values of all items.
   * @todo Maybe this could be part of a plugin.
   * @protected
   */
		this._mergers = [];

		/**
   * Widths of all items.
   */
		this._widths = [];

		/**
   * Invalidated parts within the update process.
   * @protected
   */
		this._invalidated = {};

		/**
   * Ordered list of workers for the update process.
   * @protected
   */
		this._pipe = [];

		/**
   * Current state information for the drag operation.
   * @todo #261
   * @protected
   */
		this._drag = {
			time: null,
			target: null,
			pointer: null,
			stage: {
				start: null,
				current: null
			},
			direction: null
		};

		/**
   * Current state information and their tags.
   * @type {Object}
   * @protected
   */
		this._states = {
			current: {},
			tags: {
				'initializing': ['busy'],
				'animating': ['busy'],
				'dragging': ['interacting']
			}
		};

		$.each(['onResize', 'onThrottledResize'], $.proxy(function (i, handler) {
			this._handlers[handler] = $.proxy(this[handler], this);
		}, this));

		$.each(Owl.Plugins, $.proxy(function (key, plugin) {
			this._plugins[key.charAt(0).toLowerCase() + key.slice(1)] = new plugin(this);
		}, this));

		$.each(Owl.Workers, $.proxy(function (priority, worker) {
			this._pipe.push({
				'filter': worker.filter,
				'run': $.proxy(worker.run, this)
			});
		}, this));

		this.setup();
		this.initialize();
	}

	/**
  * Default options for the carousel.
  * @public
  */
	Owl.Defaults = {
		items: 3,
		loop: false,
		center: false,
		rewind: false,
		checkVisibility: true,

		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,

		margin: 0,
		stagePadding: 0,

		merge: false,
		mergeFit: true,
		autoWidth: false,

		startPosition: 0,
		rtl: false,

		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,

		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,

		fallbackEasing: 'swing',
		slideTransition: '',

		info: false,

		nestedItemSelector: false,
		itemElement: 'div',
		stageElement: 'div',

		refreshClass: 'owl-refresh',
		loadedClass: 'owl-loaded',
		loadingClass: 'owl-loading',
		rtlClass: 'owl-rtl',
		responsiveClass: 'owl-responsive',
		dragClass: 'owl-drag',
		itemClass: 'owl-item',
		stageClass: 'owl-stage',
		stageOuterClass: 'owl-stage-outer',
		grabClass: 'owl-grab'
	};

	/**
  * Enumeration for width.
  * @public
  * @readonly
  * @enum {String}
  */
	Owl.Width = {
		Default: 'default',
		Inner: 'inner',
		Outer: 'outer'
	};

	/**
  * Enumeration for types.
  * @public
  * @readonly
  * @enum {String}
  */
	Owl.Type = {
		Event: 'event',
		State: 'state'
	};

	/**
  * Contains all registered plugins.
  * @public
  */
	Owl.Plugins = {};

	/**
  * List of workers involved in the update process.
  */
	Owl.Workers = [{
		filter: ['width', 'settings'],
		run: function run() {
			this._width = this.$element.width();
		}
	}, {
		filter: ['width', 'items', 'settings'],
		run: function run(cache) {
			cache.current = this._items && this._items[this.relative(this._current)];
		}
	}, {
		filter: ['items', 'settings'],
		run: function run() {
			this.$stage.children('.cloned').remove();
		}
	}, {
		filter: ['width', 'items', 'settings'],
		run: function run(cache) {
			var margin = this.settings.margin || '',
			    grid = !this.settings.autoWidth,
			    rtl = this.settings.rtl,
			    css = {
				'width': 'auto',
				'margin-left': rtl ? margin : '',
				'margin-right': rtl ? '' : margin
			};

			!grid && this.$stage.children().css(css);

			cache.css = css;
		}
	}, {
		filter: ['width', 'items', 'settings'],
		run: function run(cache) {
			var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
			    merge = null,
			    iterator = this._items.length,
			    grid = !this.settings.autoWidth,
			    widths = [];

			cache.items = {
				merge: false,
				width: width
			};

			while (iterator--) {
				merge = this._mergers[iterator];
				merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;

				cache.items.merge = merge > 1 || cache.items.merge;

				widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
			}

			this._widths = widths;
		}
	}, {
		filter: ['items', 'settings'],
		run: function run() {
			var clones = [],
			    items = this._items,
			    settings = this.settings,

			// TODO: Should be computed from number of min width items in stage
			view = Math.max(settings.items * 2, 4),
			    size = Math.ceil(items.length / 2) * 2,
			    repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
			    append = '',
			    prepend = '';

			repeat /= 2;

			while (repeat > 0) {
				// Switch to only using appended clones
				clones.push(this.normalize(clones.length / 2, true));
				append = append + items[clones[clones.length - 1]][0].outerHTML;
				clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
				prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
				repeat -= 1;
			}

			this._clones = clones;

			$(append).addClass('cloned').appendTo(this.$stage);
			$(prepend).addClass('cloned').prependTo(this.$stage);
		}
	}, {
		filter: ['width', 'items', 'settings'],
		run: function run() {
			var rtl = this.settings.rtl ? 1 : -1,
			    size = this._clones.length + this._items.length,
			    iterator = -1,
			    previous = 0,
			    current = 0,
			    coordinates = [];

			while (++iterator < size) {
				previous = coordinates[iterator - 1] || 0;
				current = this._widths[this.relative(iterator)] + this.settings.margin;
				coordinates.push(previous + current * rtl);
			}

			this._coordinates = coordinates;
		}
	}, {
		filter: ['width', 'items', 'settings'],
		run: function run() {
			var padding = this.settings.stagePadding,
			    coordinates = this._coordinates,
			    css = {
				'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
				'padding-left': padding || '',
				'padding-right': padding || ''
			};

			this.$stage.css(css);
		}
	}, {
		filter: ['width', 'items', 'settings'],
		run: function run(cache) {
			var iterator = this._coordinates.length,
			    grid = !this.settings.autoWidth,
			    items = this.$stage.children();

			if (grid && cache.items.merge) {
				while (iterator--) {
					cache.css.width = this._widths[this.relative(iterator)];
					items.eq(iterator).css(cache.css);
				}
			} else if (grid) {
				cache.css.width = cache.items.width;
				items.css(cache.css);
			}
		}
	}, {
		filter: ['items'],
		run: function run() {
			this._coordinates.length < 1 && this.$stage.removeAttr('style');
		}
	}, {
		filter: ['width', 'items', 'settings'],
		run: function run(cache) {
			cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
			cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
			this.reset(cache.current);
		}
	}, {
		filter: ['position'],
		run: function run() {
			this.animate(this.coordinates(this._current));
		}
	}, {
		filter: ['width', 'position', 'items', 'settings'],
		run: function run() {
			var rtl = this.settings.rtl ? 1 : -1,
			    padding = this.settings.stagePadding * 2,
			    begin = this.coordinates(this.current()) + padding,
			    end = begin + this.width() * rtl,
			    inner,
			    outer,
			    matches = [],
			    i,
			    n;

			for (i = 0, n = this._coordinates.length; i < n; i++) {
				inner = this._coordinates[i - 1] || 0;
				outer = Math.abs(this._coordinates[i]) + padding * rtl;

				if (this.op(inner, '<=', begin) && this.op(inner, '>', end) || this.op(outer, '<', begin) && this.op(outer, '>', end)) {
					matches.push(i);
				}
			}

			this.$stage.children('.active').removeClass('active');
			this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');

			this.$stage.children('.center').removeClass('center');
			if (this.settings.center) {
				this.$stage.children().eq(this.current()).addClass('center');
			}
		}
	}];

	/**
  * Create the stage DOM element
  */
	Owl.prototype.initializeStage = function () {
		this.$stage = this.$element.find('.' + this.settings.stageClass);

		// if the stage is already in the DOM, grab it and skip stage initialization
		if (this.$stage.length) {
			return;
		}

		this.$element.addClass(this.options.loadingClass);

		// create stage
		this.$stage = $('<' + this.settings.stageElement + '>', {
			"class": this.settings.stageClass
		}).wrap($('<div/>', {
			"class": this.settings.stageOuterClass
		}));

		// append stage
		this.$element.append(this.$stage.parent());
	};

	/**
  * Create item DOM elements
  */
	Owl.prototype.initializeItems = function () {
		var $items = this.$element.find('.owl-item');

		// if the items are already in the DOM, grab them and skip item initialization
		if ($items.length) {
			this._items = $items.get().map(function (item) {
				return $(item);
			});

			this._mergers = this._items.map(function () {
				return 1;
			});

			this.refresh();

			return;
		}

		// append content
		this.replace(this.$element.children().not(this.$stage.parent()));

		// check visibility
		if (this.isVisible()) {
			// update view
			this.refresh();
		} else {
			// invalidate width
			this.invalidate('width');
		}

		this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass);
	};

	/**
  * Initializes the carousel.
  * @protected
  */
	Owl.prototype.initialize = function () {
		this.enter('initializing');
		this.trigger('initialize');

		this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);

		if (this.settings.autoWidth && !this.is('pre-loading')) {
			var imgs, nestedSelector, width;
			imgs = this.$element.find('img');
			nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
			width = this.$element.children(nestedSelector).width();

			if (imgs.length && width <= 0) {
				this.preloadAutoWidthImages(imgs);
			}
		}

		this.initializeStage();
		this.initializeItems();

		// register event handlers
		this.registerEventHandlers();

		this.leave('initializing');
		this.trigger('initialized');
	};

	/**
  * @returns {Boolean} visibility of $element
  *                    if you know the carousel will always be visible you can set `checkVisibility` to `false` to
  *                    prevent the expensive browser layout forced reflow the $element.is(':visible') does
  */
	Owl.prototype.isVisible = function () {
		return this.settings.checkVisibility ? this.$element.is(':visible') : true;
	};

	/**
  * Setups the current settings.
  * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
  * @todo Support for media queries by using `matchMedia` would be nice.
  * @public
  */
	Owl.prototype.setup = function () {
		var viewport = this.viewport(),
		    overwrites = this.options.responsive,
		    match = -1,
		    settings = null;

		if (!overwrites) {
			settings = $.extend({}, this.options);
		} else {
			$.each(overwrites, function (breakpoint) {
				if (breakpoint <= viewport && breakpoint > match) {
					match = Number(breakpoint);
				}
			});

			settings = $.extend({}, this.options, overwrites[match]);
			if (typeof settings.stagePadding === 'function') {
				settings.stagePadding = settings.stagePadding();
			}
			delete settings.responsive;

			// responsive class
			if (settings.responsiveClass) {
				this.$element.attr('class', this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match));
			}
		}

		this.trigger('change', { property: { name: 'settings', value: settings } });
		this._breakpoint = match;
		this.settings = settings;
		this.invalidate('settings');
		this.trigger('changed', { property: { name: 'settings', value: this.settings } });
	};

	/**
  * Updates option logic if necessery.
  * @protected
  */
	Owl.prototype.optionsLogic = function () {
		if (this.settings.autoWidth) {
			this.settings.stagePadding = false;
			this.settings.merge = false;
		}
	};

	/**
  * Prepares an item before add.
  * @todo Rename event parameter `content` to `item`.
  * @protected
  * @returns {jQuery|HTMLElement} - The item container.
  */
	Owl.prototype.prepare = function (item) {
		var event = this.trigger('prepare', { content: item });

		if (!event.data) {
			event.data = $('<' + this.settings.itemElement + '/>').addClass(this.options.itemClass).append(item);
		}

		this.trigger('prepared', { content: event.data });

		return event.data;
	};

	/**
  * Updates the view.
  * @public
  */
	Owl.prototype.update = function () {
		var i = 0,
		    n = this._pipe.length,
		    filter = $.proxy(function (p) {
			return this[p];
		}, this._invalidated),
		    cache = {};

		while (i < n) {
			if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
				this._pipe[i].run(cache);
			}
			i++;
		}

		this._invalidated = {};

		!this.is('valid') && this.enter('valid');
	};

	/**
  * Gets the width of the view.
  * @public
  * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
  * @returns {Number} - The width of the view in pixel.
  */
	Owl.prototype.width = function (dimension) {
		dimension = dimension || Owl.Width.Default;
		switch (dimension) {
			case Owl.Width.Inner:
			case Owl.Width.Outer:
				return this._width;
			default:
				return this._width - this.settings.stagePadding * 2 + this.settings.margin;
		}
	};

	/**
  * Refreshes the carousel primarily for adaptive purposes.
  * @public
  */
	Owl.prototype.refresh = function () {
		this.enter('refreshing');
		this.trigger('refresh');

		this.setup();

		this.optionsLogic();

		this.$element.addClass(this.options.refreshClass);

		this.update();

		this.$element.removeClass(this.options.refreshClass);

		this.leave('refreshing');
		this.trigger('refreshed');
	};

	/**
  * Checks window `resize` event.
  * @protected
  */
	Owl.prototype.onThrottledResize = function () {
		window.clearTimeout(this.resizeTimer);
		this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
	};

	/**
  * Checks window `resize` event.
  * @protected
  */
	Owl.prototype.onResize = function () {
		if (!this._items.length) {
			return false;
		}

		if (this._width === this.$element.width()) {
			return false;
		}

		if (!this.isVisible()) {
			return false;
		}

		this.enter('resizing');

		if (this.trigger('resize').isDefaultPrevented()) {
			this.leave('resizing');
			return false;
		}

		this.invalidate('width');

		this.refresh();

		this.leave('resizing');
		this.trigger('resized');
	};

	/**
  * Registers event handlers.
  * @todo Check `msPointerEnabled`
  * @todo #261
  * @protected
  */
	Owl.prototype.registerEventHandlers = function () {
		if ($.support.transition) {
			this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
		}

		if (this.settings.responsive !== false) {
			this.on(window, 'resize', this._handlers.onThrottledResize);
		}

		if (this.settings.mouseDrag) {
			this.$element.addClass(this.options.dragClass);
			this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('dragstart.owl.core selectstart.owl.core', function () {
				return false;
			});
		}

		if (this.settings.touchDrag) {
			this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
		}
	};

	/**
  * Handles `touchstart` and `mousedown` events.
  * @todo Horizontal swipe threshold as option
  * @todo #261
  * @protected
  * @param {Event} event - The event arguments.
  */
	Owl.prototype.onDragStart = function (event) {
		var stage = null;

		if (event.which === 3) {
			return;
		}

		if ($.support.transform) {
			stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
			stage = {
				x: stage[stage.length === 16 ? 12 : 4],
				y: stage[stage.length === 16 ? 13 : 5]
			};
		} else {
			stage = this.$stage.position();
			stage = {
				x: this.settings.rtl ? stage.left + this.$stage.width() - this.width() + this.settings.margin : stage.left,
				y: stage.top
			};
		}

		if (this.is('animating')) {
			$.support.transform ? this.animate(stage.x) : this.$stage.stop();
			this.invalidate('position');
		}

		this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');

		this.speed(0);

		this._drag.time = new Date().getTime();
		this._drag.target = $(event.target);
		this._drag.stage.start = stage;
		this._drag.stage.current = stage;
		this._drag.pointer = this.pointer(event);

		$(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));

		$(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function (event) {
			var delta = this.difference(this._drag.pointer, this.pointer(event));

			$(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));

			if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
				return;
			}

			event.preventDefault();

			this.enter('dragging');
			this.trigger('drag');
		}, this));
	};

	/**
  * Handles the `touchmove` and `mousemove` events.
  * @todo #261
  * @protected
  * @param {Event} event - The event arguments.
  */
	Owl.prototype.onDragMove = function (event) {
		var minimum = null,
		    maximum = null,
		    pull = null,
		    delta = this.difference(this._drag.pointer, this.pointer(event)),
		    stage = this.difference(this._drag.stage.start, delta);

		if (!this.is('dragging')) {
			return;
		}

		event.preventDefault();

		if (this.settings.loop) {
			minimum = this.coordinates(this.minimum());
			maximum = this.coordinates(this.maximum() + 1) - minimum;
			stage.x = ((stage.x - minimum) % maximum + maximum) % maximum + minimum;
		} else {
			minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
			maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
			pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
			stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
		}

		this._drag.stage.current = stage;

		this.animate(stage.x);
	};

	/**
  * Handles the `touchend` and `mouseup` events.
  * @todo #261
  * @todo Threshold for click event
  * @protected
  * @param {Event} event - The event arguments.
  */
	Owl.prototype.onDragEnd = function (event) {
		var delta = this.difference(this._drag.pointer, this.pointer(event)),
		    stage = this._drag.stage.current,
		    direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';

		$(document).off('.owl.core');

		this.$element.removeClass(this.options.grabClass);

		if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
			this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
			this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
			this.invalidate('position');
			this.update();

			this._drag.direction = direction;

			if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
				this._drag.target.one('click.owl.core', function () {
					return false;
				});
			}
		}

		if (!this.is('dragging')) {
			return;
		}

		this.leave('dragging');
		this.trigger('dragged');
	};

	/**
  * Gets absolute position of the closest item for a coordinate.
  * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
  * @protected
  * @param {Number} coordinate - The coordinate in pixel.
  * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
  * @return {Number} - The absolute position of the closest item.
  */
	Owl.prototype.closest = function (coordinate, direction) {
		var position = -1,
		    pull = 30,
		    width = this.width(),
		    coordinates = this.coordinates();

		if (!this.settings.freeDrag) {
			// check closest item
			$.each(coordinates, $.proxy(function (index, value) {
				// on a left pull, check on current index
				if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
					position = index;
					// on a right pull, check on previous index
					// to do so, subtract width from value and set position = index + 1
				} else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
					position = index + 1;
				} else if (this.op(coordinate, '<', value) && this.op(coordinate, '>', coordinates[index + 1] !== undefined ? coordinates[index + 1] : value - width)) {
					position = direction === 'left' ? index + 1 : index;
				}
				return position === -1;
			}, this));
		}

		if (!this.settings.loop) {
			// non loop boundries
			if (this.op(coordinate, '>', coordinates[this.minimum()])) {
				position = coordinate = this.minimum();
			} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
				position = coordinate = this.maximum();
			}
		}

		return position;
	};

	/**
  * Animates the stage.
  * @todo #270
  * @public
  * @param {Number} coordinate - The coordinate in pixels.
  */
	Owl.prototype.animate = function (coordinate) {
		var animate = this.speed() > 0;

		this.is('animating') && this.onTransitionEnd();

		if (animate) {
			this.enter('animating');
			this.trigger('translate');
		}

		if ($.support.transform3d && $.support.transition) {
			this.$stage.css({
				transform: 'translate3d(' + coordinate + 'px,0px,0px)',
				transition: this.speed() / 1000 + 's' + (this.settings.slideTransition ? ' ' + this.settings.slideTransition : '')
			});
		} else if (animate) {
			this.$stage.animate({
				left: coordinate + 'px'
			}, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
		} else {
			this.$stage.css({
				left: coordinate + 'px'
			});
		}
	};

	/**
  * Checks whether the carousel is in a specific state or not.
  * @param {String} state - The state to check.
  * @returns {Boolean} - The flag which indicates if the carousel is busy.
  */
	Owl.prototype.is = function (state) {
		return this._states.current[state] && this._states.current[state] > 0;
	};

	/**
  * Sets the absolute position of the current item.
  * @public
  * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
  * @returns {Number} - The absolute position of the current item.
  */
	Owl.prototype.current = function (position) {
		if (position === undefined) {
			return this._current;
		}

		if (this._items.length === 0) {
			return undefined;
		}

		position = this.normalize(position);

		if (this._current !== position) {
			var event = this.trigger('change', { property: { name: 'position', value: position } });

			if (event.data !== undefined) {
				position = this.normalize(event.data);
			}

			this._current = position;

			this.invalidate('position');

			this.trigger('changed', { property: { name: 'position', value: this._current } });
		}

		return this._current;
	};

	/**
  * Invalidates the given part of the update routine.
  * @param {String} [part] - The part to invalidate.
  * @returns {Array.<String>} - The invalidated parts.
  */
	Owl.prototype.invalidate = function (part) {
		if ($.type(part) === 'string') {
			this._invalidated[part] = true;
			this.is('valid') && this.leave('valid');
		}
		return $.map(this._invalidated, function (v, i) {
			return i;
		});
	};

	/**
  * Resets the absolute position of the current item.
  * @public
  * @param {Number} position - The absolute position of the new item.
  */
	Owl.prototype.reset = function (position) {
		position = this.normalize(position);

		if (position === undefined) {
			return;
		}

		this._speed = 0;
		this._current = position;

		this.suppress(['translate', 'translated']);

		this.animate(this.coordinates(position));

		this.release(['translate', 'translated']);
	};

	/**
  * Normalizes an absolute or a relative position of an item.
  * @public
  * @param {Number} position - The absolute or relative position to normalize.
  * @param {Boolean} [relative=false] - Whether the given position is relative or not.
  * @returns {Number} - The normalized position.
  */
	Owl.prototype.normalize = function (position, relative) {
		var n = this._items.length,
		    m = relative ? 0 : this._clones.length;

		if (!this.isNumeric(position) || n < 1) {
			position = undefined;
		} else if (position < 0 || position >= n + m) {
			position = ((position - m / 2) % n + n) % n + m / 2;
		}

		return position;
	};

	/**
  * Converts an absolute position of an item into a relative one.
  * @public
  * @param {Number} position - The absolute position to convert.
  * @returns {Number} - The converted position.
  */
	Owl.prototype.relative = function (position) {
		position -= this._clones.length / 2;
		return this.normalize(position, true);
	};

	/**
  * Gets the maximum position for the current item.
  * @public
  * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
  * @returns {Number}
  */
	Owl.prototype.maximum = function (relative) {
		var settings = this.settings,
		    maximum = this._coordinates.length,
		    iterator,
		    reciprocalItemsWidth,
		    elementWidth;

		if (settings.loop) {
			maximum = this._clones.length / 2 + this._items.length - 1;
		} else if (settings.autoWidth || settings.merge) {
			iterator = this._items.length;
			if (iterator) {
				reciprocalItemsWidth = this._items[--iterator].width();
				elementWidth = this.$element.width();
				while (iterator--) {
					reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
					if (reciprocalItemsWidth > elementWidth) {
						break;
					}
				}
			}
			maximum = iterator + 1;
		} else if (settings.center) {
			maximum = this._items.length - 1;
		} else {
			maximum = this._items.length - settings.items;
		}

		if (relative) {
			maximum -= this._clones.length / 2;
		}

		return Math.max(maximum, 0);
	};

	/**
  * Gets the minimum position for the current item.
  * @public
  * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
  * @returns {Number}
  */
	Owl.prototype.minimum = function (relative) {
		return relative ? 0 : this._clones.length / 2;
	};

	/**
  * Gets an item at the specified relative position.
  * @public
  * @param {Number} [position] - The relative position of the item.
  * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
  */
	Owl.prototype.items = function (position) {
		if (position === undefined) {
			return this._items.slice();
		}

		position = this.normalize(position, true);
		return this._items[position];
	};

	/**
  * Gets an item at the specified relative position.
  * @public
  * @param {Number} [position] - The relative position of the item.
  * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
  */
	Owl.prototype.mergers = function (position) {
		if (position === undefined) {
			return this._mergers.slice();
		}

		position = this.normalize(position, true);
		return this._mergers[position];
	};

	/**
  * Gets the absolute positions of clones for an item.
  * @public
  * @param {Number} [position] - The relative position of the item.
  * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
  */
	Owl.prototype.clones = function (position) {
		var odd = this._clones.length / 2,
		    even = odd + this._items.length,
		    map = function map(index) {
			return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2;
		};

		if (position === undefined) {
			return $.map(this._clones, function (v, i) {
				return map(i);
			});
		}

		return $.map(this._clones, function (v, i) {
			return v === position ? map(i) : null;
		});
	};

	/**
  * Sets the current animation speed.
  * @public
  * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
  * @returns {Number} - The current animation speed in milliseconds.
  */
	Owl.prototype.speed = function (speed) {
		if (speed !== undefined) {
			this._speed = speed;
		}

		return this._speed;
	};

	/**
  * Gets the coordinate of an item.
  * @todo The name of this method is missleanding.
  * @public
  * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
  * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
  */
	Owl.prototype.coordinates = function (position) {
		var multiplier = 1,
		    newPosition = position - 1,
		    coordinate;

		if (position === undefined) {
			return $.map(this._coordinates, $.proxy(function (coordinate, index) {
				return this.coordinates(index);
			}, this));
		}

		if (this.settings.center) {
			if (this.settings.rtl) {
				multiplier = -1;
				newPosition = position + 1;
			}

			coordinate = this._coordinates[position];
			coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
		} else {
			coordinate = this._coordinates[newPosition] || 0;
		}

		coordinate = Math.ceil(coordinate);

		return coordinate;
	};

	/**
  * Calculates the speed for a translation.
  * @protected
  * @param {Number} from - The absolute position of the start item.
  * @param {Number} to - The absolute position of the target item.
  * @param {Number} [factor=undefined] - The time factor in milliseconds.
  * @returns {Number} - The time in milliseconds for the translation.
  */
	Owl.prototype.duration = function (from, to, factor) {
		if (factor === 0) {
			return 0;
		}

		return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs(factor || this.settings.smartSpeed);
	};

	/**
  * Slides to the specified item.
  * @public
  * @param {Number} position - The position of the item.
  * @param {Number} [speed] - The time in milliseconds for the transition.
  */
	Owl.prototype.to = function (position, speed) {
		var current = this.current(),
		    revert = null,
		    distance = position - this.relative(current),
		    direction = (distance > 0) - (distance < 0),
		    items = this._items.length,
		    minimum = this.minimum(),
		    maximum = this.maximum();

		if (this.settings.loop) {
			if (!this.settings.rewind && Math.abs(distance) > items / 2) {
				distance += direction * -1 * items;
			}

			position = current + distance;
			revert = ((position - minimum) % items + items) % items + minimum;

			if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
				current = revert - distance;
				position = revert;
				this.reset(current);
			}
		} else if (this.settings.rewind) {
			maximum += 1;
			position = (position % maximum + maximum) % maximum;
		} else {
			position = Math.max(minimum, Math.min(maximum, position));
		}

		this.speed(this.duration(current, position, speed));
		this.current(position);

		if (this.isVisible()) {
			this.update();
		}
	};

	/**
  * Slides to the next item.
  * @public
  * @param {Number} [speed] - The time in milliseconds for the transition.
  */
	Owl.prototype.next = function (speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) + 1, speed);
	};

	/**
  * Slides to the previous item.
  * @public
  * @param {Number} [speed] - The time in milliseconds for the transition.
  */
	Owl.prototype.prev = function (speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) - 1, speed);
	};

	/**
  * Handles the end of an animation.
  * @protected
  * @param {Event} event - The event arguments.
  */
	Owl.prototype.onTransitionEnd = function (event) {

		// if css2 animation then event object is undefined
		if (event !== undefined) {
			event.stopPropagation();

			// Catch only owl-stage transitionEnd event
			if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
				return false;
			}
		}

		this.leave('animating');
		this.trigger('translated');
	};

	/**
  * Gets viewport width.
  * @protected
  * @return {Number} - The width in pixel.
  */
	Owl.prototype.viewport = function () {
		var width;
		if (this.options.responsiveBaseElement !== window) {
			width = $(this.options.responsiveBaseElement).width();
		} else if (window.innerWidth) {
			width = window.innerWidth;
		} else if (document.documentElement && document.documentElement.clientWidth) {
			width = document.documentElement.clientWidth;
		} else {
			console.warn('Can not detect viewport width.');
		}
		return width;
	};

	/**
  * Replaces the current content.
  * @public
  * @param {HTMLElement|jQuery|String} content - The new content.
  */
	Owl.prototype.replace = function (content) {
		this.$stage.empty();
		this._items = [];

		if (content) {
			content = content instanceof jQuery ? content : $(content);
		}

		if (this.settings.nestedItemSelector) {
			content = content.find('.' + this.settings.nestedItemSelector);
		}

		content.filter(function () {
			return this.nodeType === 1;
		}).each($.proxy(function (index, item) {
			item = this.prepare(item);
			this.$stage.append(item);
			this._items.push(item);
			this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}, this));

		this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

		this.invalidate('items');
	};

	/**
  * Adds an item.
  * @todo Use `item` instead of `content` for the event arguments.
  * @public
  * @param {HTMLElement|jQuery|String} content - The item content to add.
  * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
  */
	Owl.prototype.add = function (content, position) {
		var current = this.relative(this._current);

		position = position === undefined ? this._items.length : this.normalize(position, true);
		content = content instanceof jQuery ? content : $(content);

		this.trigger('add', { content: content, position: position });

		content = this.prepare(content);

		if (this._items.length === 0 || position === this._items.length) {
			this._items.length === 0 && this.$stage.append(content);
			this._items.length !== 0 && this._items[position - 1].after(content);
			this._items.push(content);
			this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		} else {
			this._items[position].before(content);
			this._items.splice(position, 0, content);
			this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}

		this._items[current] && this.reset(this._items[current].index());

		this.invalidate('items');

		this.trigger('added', { content: content, position: position });
	};

	/**
  * Removes an item by its position.
  * @todo Use `item` instead of `content` for the event arguments.
  * @public
  * @param {Number} position - The relative position of the item to remove.
  */
	Owl.prototype.remove = function (position) {
		position = this.normalize(position, true);

		if (position === undefined) {
			return;
		}

		this.trigger('remove', { content: this._items[position], position: position });

		this._items[position].remove();
		this._items.splice(position, 1);
		this._mergers.splice(position, 1);

		this.invalidate('items');

		this.trigger('removed', { content: null, position: position });
	};

	/**
  * Preloads images with auto width.
  * @todo Replace by a more generic approach
  * @protected
  */
	Owl.prototype.preloadAutoWidthImages = function (images) {
		images.each($.proxy(function (i, element) {
			this.enter('pre-loading');
			element = $(element);
			$(new Image()).one('load', $.proxy(function (e) {
				element.attr('src', e.target.src);
				element.css('opacity', 1);
				this.leave('pre-loading');
				!this.is('pre-loading') && !this.is('initializing') && this.refresh();
			}, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
		}, this));
	};

	/**
  * Destroys the carousel.
  * @public
  */
	Owl.prototype.destroy = function () {

		this.$element.off('.owl.core');
		this.$stage.off('.owl.core');
		$(document).off('.owl.core');

		if (this.settings.responsive !== false) {
			window.clearTimeout(this.resizeTimer);
			this.off(window, 'resize', this._handlers.onThrottledResize);
		}

		for (var i in this._plugins) {
			this._plugins[i].destroy();
		}

		this.$stage.children('.cloned').remove();

		this.$stage.unwrap();
		this.$stage.children().contents().unwrap();
		this.$stage.children().unwrap();
		this.$stage.remove();
		this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), '')).removeData('owl.carousel');
	};

	/**
  * Operators to calculate right-to-left and left-to-right.
  * @protected
  * @param {Number} [a] - The left side operand.
  * @param {String} [o] - The operator.
  * @param {Number} [b] - The right side operand.
  */
	Owl.prototype.op = function (a, o, b) {
		var rtl = this.settings.rtl;
		switch (o) {
			case '<':
				return rtl ? a > b : a < b;
			case '>':
				return rtl ? a < b : a > b;
			case '>=':
				return rtl ? a <= b : a >= b;
			case '<=':
				return rtl ? a >= b : a <= b;
			default:
				break;
		}
	};

	/**
  * Attaches to an internal event.
  * @protected
  * @param {HTMLElement} element - The event source.
  * @param {String} event - The event name.
  * @param {Function} listener - The event handler to attach.
  * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
  */
	Owl.prototype.on = function (element, event, listener, capture) {
		if (element.addEventListener) {
			element.addEventListener(event, listener, capture);
		} else if (element.attachEvent) {
			element.attachEvent('on' + event, listener);
		}
	};

	/**
  * Detaches from an internal event.
  * @protected
  * @param {HTMLElement} element - The event source.
  * @param {String} event - The event name.
  * @param {Function} listener - The attached event handler to detach.
  * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
  */
	Owl.prototype.off = function (element, event, listener, capture) {
		if (element.removeEventListener) {
			element.removeEventListener(event, listener, capture);
		} else if (element.detachEvent) {
			element.detachEvent('on' + event, listener);
		}
	};

	/**
  * Triggers a public event.
  * @todo Remove `status`, `relatedTarget` should be used instead.
  * @protected
  * @param {String} name - The event name.
  * @param {*} [data=null] - The event data.
  * @param {String} [namespace=carousel] - The event namespace.
  * @param {String} [state] - The state which is associated with the event.
  * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
  * @returns {Event} - The event arguments.
  */
	Owl.prototype.trigger = function (name, data, namespace, state, enter) {
		var status = {
			item: { count: this._items.length, index: this.current() }
		},
		    handler = $.camelCase($.grep(['on', name, namespace], function (v) {
			return v;
		}).join('-').toLowerCase()),
		    event = $.Event([name, 'owl', namespace || 'carousel'].join('.').toLowerCase(), $.extend({ relatedTarget: this }, status, data));

		if (!this._supress[name]) {
			$.each(this._plugins, function (name, plugin) {
				if (plugin.onTrigger) {
					plugin.onTrigger(event);
				}
			});

			this.register({ type: Owl.Type.Event, name: name });
			this.$element.trigger(event);

			if (this.settings && typeof this.settings[handler] === 'function') {
				this.settings[handler].call(this, event);
			}
		}

		return event;
	};

	/**
  * Enters a state.
  * @param name - The state name.
  */
	Owl.prototype.enter = function (name) {
		$.each([name].concat(this._states.tags[name] || []), $.proxy(function (i, name) {
			if (this._states.current[name] === undefined) {
				this._states.current[name] = 0;
			}

			this._states.current[name]++;
		}, this));
	};

	/**
  * Leaves a state.
  * @param name - The state name.
  */
	Owl.prototype.leave = function (name) {
		$.each([name].concat(this._states.tags[name] || []), $.proxy(function (i, name) {
			this._states.current[name]--;
		}, this));
	};

	/**
  * Registers an event or state.
  * @public
  * @param {Object} object - The event or state to register.
  */
	Owl.prototype.register = function (object) {
		if (object.type === Owl.Type.Event) {
			if (!$.event.special[object.name]) {
				$.event.special[object.name] = {};
			}

			if (!$.event.special[object.name].owl) {
				var _default = $.event.special[object.name]._default;
				$.event.special[object.name]._default = function (e) {
					if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
						return _default.apply(this, arguments);
					}
					return e.namespace && e.namespace.indexOf('owl') > -1;
				};
				$.event.special[object.name].owl = true;
			}
		} else if (object.type === Owl.Type.State) {
			if (!this._states.tags[object.name]) {
				this._states.tags[object.name] = object.tags;
			} else {
				this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
			}

			this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function (tag, i) {
				return $.inArray(tag, this._states.tags[object.name]) === i;
			}, this));
		}
	};

	/**
  * Suppresses events.
  * @protected
  * @param {Array.<String>} events - The events to suppress.
  */
	Owl.prototype.suppress = function (events) {
		$.each(events, $.proxy(function (index, event) {
			this._supress[event] = true;
		}, this));
	};

	/**
  * Releases suppressed events.
  * @protected
  * @param {Array.<String>} events - The events to release.
  */
	Owl.prototype.release = function (events) {
		$.each(events, $.proxy(function (index, event) {
			delete this._supress[event];
		}, this));
	};

	/**
  * Gets unified pointer coordinates from event.
  * @todo #261
  * @protected
  * @param {Event} - The `mousedown` or `touchstart` event.
  * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
  */
	Owl.prototype.pointer = function (event) {
		var result = { x: null, y: null };

		event = event.originalEvent || event || window.event;

		event = event.touches && event.touches.length ? event.touches[0] : event.changedTouches && event.changedTouches.length ? event.changedTouches[0] : event;

		if (event.pageX) {
			result.x = event.pageX;
			result.y = event.pageY;
		} else {
			result.x = event.clientX;
			result.y = event.clientY;
		}

		return result;
	};

	/**
  * Determines if the input is a Number or something that can be coerced to a Number
  * @protected
  * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
  * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
  */
	Owl.prototype.isNumeric = function (number) {
		return !isNaN(parseFloat(number));
	};

	/**
  * Gets the difference of two vectors.
  * @todo #261
  * @protected
  * @param {Object} - The first vector.
  * @param {Object} - The second vector.
  * @returns {Object} - The difference.
  */
	Owl.prototype.difference = function (first, second) {
		return {
			x: first.x - second.x,
			y: first.y - second.y
		};
	};

	/**
  * The jQuery Plugin for the Owl Carousel
  * @todo Navigation plugin `next` and `prev`
  * @public
  */
	$.fn.owlCarousel = function (option) {
		var args = Array.prototype.slice.call(arguments, 1);

		return this.each(function () {
			var $this = $(this),
			    data = $this.data('owl.carousel');

			if (!data) {
				data = new Owl(this, (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option);
				$this.data('owl.carousel', data);

				$.each(['next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'], function (i, event) {
					data.register({ type: Owl.Type.Event, name: event });
					data.$element.on(event + '.owl.carousel.core', $.proxy(function (e) {
						if (e.namespace && e.relatedTarget !== this) {
							this.suppress([event]);
							data[event].apply(this, [].slice.call(arguments, 1));
							this.release([event]);
						}
					}, data));
				});
			}

			if (typeof option == 'string' && option.charAt(0) !== '_') {
				data[option].apply(data, args);
			}
		});
	};

	/**
  * The constructor for the jQuery Plugin
  * @public
  */
	$.fn.owlCarousel.Constructor = Owl;
})(window.Zepto || window.jQuery, window, document);

/**
 * AutoRefresh Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function ($, window, document, undefined) {

	/**
  * Creates the auto refresh plugin.
  * @class The Auto Refresh Plugin
  * @param {Owl} carousel - The Owl Carousel
  */
	var AutoRefresh = function AutoRefresh(carousel) {
		/**
   * Reference to the core.
   * @protected
   * @type {Owl}
   */
		this._core = carousel;

		/**
   * Refresh interval.
   * @protected
   * @type {number}
   */
		this._interval = null;

		/**
   * Whether the element is currently visible or not.
   * @protected
   * @type {Boolean}
   */
		this._visible = null;

		/**
   * All event handlers.
   * @protected
   * @type {Object}
   */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._core.settings.autoRefresh) {
					this.watch();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
  * Default options.
  * @public
  */
	AutoRefresh.Defaults = {
		autoRefresh: true,
		autoRefreshInterval: 500
	};

	/**
  * Watches the element.
  */
	AutoRefresh.prototype.watch = function () {
		if (this._interval) {
			return;
		}

		this._visible = this._core.isVisible();
		this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
	};

	/**
  * Refreshes the element.
  */
	AutoRefresh.prototype.refresh = function () {
		if (this._core.isVisible() === this._visible) {
			return;
		}

		this._visible = !this._visible;

		this._core.$element.toggleClass('owl-hidden', !this._visible);

		this._visible && this._core.invalidate('width') && this._core.refresh();
	};

	/**
  * Destroys the plugin.
  */
	AutoRefresh.prototype.destroy = function () {
		var handler, property;

		window.clearInterval(this._interval);

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;
})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function ($, window, document, undefined) {

	/**
  * Creates the lazy plugin.
  * @class The Lazy Plugin
  * @param {Owl} carousel - The Owl Carousel
  */
	var Lazy = function Lazy(carousel) {

		/**
   * Reference to the core.
   * @protected
   * @type {Owl}
   */
		this._core = carousel;

		/**
   * Already loaded items.
   * @protected
   * @type {Array.<jQuery>}
   */
		this._loaded = [];

		/**
   * Event handlers.
   * @protected
   * @type {Object}
   */
		this._handlers = {
			'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function (e) {
				if (!e.namespace) {
					return;
				}

				if (!this._core.settings || !this._core.settings.lazyLoad) {
					return;
				}

				if (e.property && e.property.name == 'position' || e.type == 'initialized') {
					var settings = this._core.settings,
					    n = settings.center && Math.ceil(settings.items / 2) || settings.items,
					    i = settings.center && n * -1 || 0,
					    position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
					    clones = this._core.clones().length,
					    load = $.proxy(function (i, v) {
						this.load(v);
					}, this);
					//TODO: Need documentation for this new option
					if (settings.lazyLoadEager > 0) {
						n += settings.lazyLoadEager;
						// If the carousel is looping also preload images that are to the "left"
						if (settings.loop) {
							position -= settings.lazyLoadEager;
							n++;
						}
					}

					while (i++ < n) {
						this.load(clones / 2 + this._core.relative(position));
						clones && $.each(this._core.clones(this._core.relative(position)), load);
						position++;
					}
				}
			}, this)
		};

		// set the default options
		this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

		// register event handler
		this._core.$element.on(this._handlers);
	};

	/**
  * Default options.
  * @public
  */
	Lazy.Defaults = {
		lazyLoad: false,
		lazyLoadEager: 0
	};

	/**
  * Loads all resources of an item at the specified position.
  * @param {Number} position - The absolute position of the item.
  * @protected
  */
	Lazy.prototype.load = function (position) {
		var $item = this._core.$stage.children().eq(position),
		    $elements = $item && $item.find('.owl-lazy');

		if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
			return;
		}

		$elements.each($.proxy(function (index, element) {
			var $element = $(element),
			    image,
			    url = window.devicePixelRatio > 1 && $element.attr('data-src-retina') || $element.attr('data-src') || $element.attr('data-srcset');

			this._core.trigger('load', { element: $element, url: url }, 'lazy');

			if ($element.is('img')) {
				$element.one('load.owl.lazy', $.proxy(function () {
					$element.css('opacity', 1);
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this)).attr('src', url);
			} else if ($element.is('source')) {
				$element.one('load.owl.lazy', $.proxy(function () {
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this)).attr('srcset', url);
			} else {
				image = new Image();
				image.onload = $.proxy(function () {
					$element.css({
						'background-image': 'url("' + url + '")',
						'opacity': '1'
					});
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this);
				image.src = url;
			}
		}, this));

		this._loaded.push($item.get(0));
	};

	/**
  * Destroys the plugin.
  * @public
  */
	Lazy.prototype.destroy = function () {
		var handler, property;

		for (handler in this.handlers) {
			this._core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;
})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function ($, window, document, undefined) {

	/**
  * Creates the auto height plugin.
  * @class The Auto Height Plugin
  * @param {Owl} carousel - The Owl Carousel
  */
	var AutoHeight = function AutoHeight(carousel) {
		/**
   * Reference to the core.
   * @protected
   * @type {Owl}
   */
		this._core = carousel;

		this._previousHeight = null;

		/**
   * All event handlers.
   * @protected
   * @type {Object}
   */
		this._handlers = {
			'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._core.settings.autoHeight) {
					this.update();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._core.settings.autoHeight && e.property.name === 'position') {
					this.update();
				}
			}, this),
			'loaded.owl.lazy': $.proxy(function (e) {
				if (e.namespace && this._core.settings.autoHeight && e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
					this.update();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
		this._intervalId = null;
		var refThis = this;

		// These changes have been taken from a PR by gavrochelegnou proposed in #1575
		// and have been made compatible with the latest jQuery version
		$(window).on('load', function () {
			if (refThis._core.settings.autoHeight) {
				refThis.update();
			}
		});

		// Autoresize the height of the carousel when window is resized
		// When carousel has images, the height is dependent on the width
		// and should also change on resize
		$(window).resize(function () {
			if (refThis._core.settings.autoHeight) {
				if (refThis._intervalId != null) {
					clearTimeout(refThis._intervalId);
				}

				refThis._intervalId = setTimeout(function () {
					refThis.update();
				}, 250);
			}
		});
	};

	/**
  * Default options.
  * @public
  */
	AutoHeight.Defaults = {
		autoHeight: false,
		autoHeightClass: 'owl-height'
	};

	/**
  * Updates the view.
  */
	AutoHeight.prototype.update = function () {
		var start = this._core._current,
		    end = start + this._core.settings.items,
		    lazyLoadEnabled = this._core.settings.lazyLoad,
		    visible = this._core.$stage.children().toArray().slice(start, end),
		    heights = [],
		    maxheight = 0;

		$.each(visible, function (index, item) {
			heights.push($(item).height());
		});

		maxheight = Math.max.apply(null, heights);

		if (maxheight <= 1 && lazyLoadEnabled && this._previousHeight) {
			maxheight = this._previousHeight;
		}

		this._previousHeight = maxheight;

		this._core.$stage.parent().height(maxheight).addClass(this._core.settings.autoHeightClass);
	};

	AutoHeight.prototype.destroy = function () {
		var handler, property;

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] !== 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;
})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function ($, window, document, undefined) {

	/**
  * Creates the video plugin.
  * @class The Video Plugin
  * @param {Owl} carousel - The Owl Carousel
  */
	var Video = function Video(carousel) {
		/**
   * Reference to the core.
   * @protected
   * @type {Owl}
   */
		this._core = carousel;

		/**
   * Cache all video URLs.
   * @protected
   * @type {Object}
   */
		this._videos = {};

		/**
   * Current playing item.
   * @protected
   * @type {jQuery}
   */
		this._playing = null;

		/**
   * All event handlers.
   * @todo The cloned content removale is too late
   * @protected
   * @type {Object}
   */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function (e) {
				if (e.namespace) {
					this._core.register({ type: 'state', name: 'playing', tags: ['interacting'] });
				}
			}, this),
			'resize.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
					e.preventDefault();
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._core.is('resizing')) {
					this._core.$stage.find('.cloned .owl-video-frame').remove();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function (e) {
				if (e.namespace && e.property.name === 'position' && this._playing) {
					this.stop();
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function (e) {
				if (!e.namespace) {
					return;
				}

				var $element = $(e.content).find('.owl-video');

				if ($element.length) {
					$element.css('display', 'none');
					this.fetch($element, $(e.content));
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Video.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);

		this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function (e) {
			this.play(e);
		}, this));
	};

	/**
  * Default options.
  * @public
  */
	Video.Defaults = {
		video: false,
		videoHeight: false,
		videoWidth: false
	};

	/**
  * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
  * @protected
  * @param {jQuery} target - The target containing the video data.
  * @param {jQuery} item - The item containing the video.
  */
	Video.prototype.fetch = function (target, item) {
		var type = function () {
			if (target.attr('data-vimeo-id')) {
				return 'vimeo';
			} else if (target.attr('data-vzaar-id')) {
				return 'vzaar';
			} else {
				return 'youtube';
			}
		}(),
		    id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
		    width = target.attr('data-width') || this._core.settings.videoWidth,
		    height = target.attr('data-height') || this._core.settings.videoHeight,
		    url = target.attr('href');

		if (url) {

			/*
   		Parses the id's out of the following urls (and probably more):
   		https://www.youtube.com/watch?v=:id
   		https://youtu.be/:id
   		https://vimeo.com/:id
   		https://vimeo.com/channels/:channel/:id
   		https://vimeo.com/groups/:group/videos/:id
   		https://app.vzaar.com/videos/:id
   			Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
   */

			id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

			if (id[3].indexOf('youtu') > -1) {
				type = 'youtube';
			} else if (id[3].indexOf('vimeo') > -1) {
				type = 'vimeo';
			} else if (id[3].indexOf('vzaar') > -1) {
				type = 'vzaar';
			} else {
				throw new Error('Video URL not supported.');
			}
			id = id[6];
		} else {
			throw new Error('Missing video URL.');
		}

		this._videos[url] = {
			type: type,
			id: id,
			width: width,
			height: height
		};

		item.attr('data-video', url);

		this.thumbnail(target, this._videos[url]);
	};

	/**
  * Creates video thumbnail.
  * @protected
  * @param {jQuery} target - The target containing the video data.
  * @param {Object} info - The video info object.
  * @see `fetch`
  */
	Video.prototype.thumbnail = function (target, video) {
		var tnLink,
		    icon,
		    path,
		    dimensions = video.width && video.height ? 'width:' + video.width + 'px;height:' + video.height + 'px;' : '',
		    customTn = target.find('img'),
		    srcType = 'src',
		    lazyClass = '',
		    settings = this._core.settings,
		    create = function create(path) {
			icon = '<div class="owl-video-play-icon"></div>';

			if (settings.lazyLoad) {
				tnLink = $('<div/>', {
					"class": 'owl-video-tn ' + lazyClass,
					"srcType": path
				});
			} else {
				tnLink = $('<div/>', {
					"class": "owl-video-tn",
					"style": 'opacity:1;background-image:url(' + path + ')'
				});
			}
			target.after(tnLink);
			target.after(icon);
		};

		// wrap video content into owl-video-wrapper div
		target.wrap($('<div/>', {
			"class": "owl-video-wrapper",
			"style": dimensions
		}));

		if (this._core.settings.lazyLoad) {
			srcType = 'data-src';
			lazyClass = 'owl-lazy';
		}

		// custom thumbnail
		if (customTn.length) {
			create(customTn.attr(srcType));
			customTn.remove();
			return false;
		}

		if (video.type === 'youtube') {
			path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
			create(path);
		} else if (video.type === 'vimeo') {
			$.ajax({
				type: 'GET',
				url: '//vimeo.com/api/v2/video/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function success(data) {
					path = data[0].thumbnail_large;
					create(path);
				}
			});
		} else if (video.type === 'vzaar') {
			$.ajax({
				type: 'GET',
				url: '//vzaar.com/api/videos/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function success(data) {
					path = data.framegrab_url;
					create(path);
				}
			});
		}
	};

	/**
  * Stops the current video.
  * @public
  */
	Video.prototype.stop = function () {
		this._core.trigger('stop', null, 'video');
		this._playing.find('.owl-video-frame').remove();
		this._playing.removeClass('owl-video-playing');
		this._playing = null;
		this._core.leave('playing');
		this._core.trigger('stopped', null, 'video');
	};

	/**
  * Starts the current video.
  * @public
  * @param {Event} event - The event arguments.
  */
	Video.prototype.play = function (event) {
		var target = $(event.target),
		    item = target.closest('.' + this._core.settings.itemClass),
		    video = this._videos[item.attr('data-video')],
		    width = video.width || '100%',
		    height = video.height || this._core.$stage.height(),
		    html,
		    iframe;

		if (this._playing) {
			return;
		}

		this._core.enter('playing');
		this._core.trigger('play', null, 'video');

		item = this._core.items(this._core.relative(item.index()));

		this._core.reset(item.index());

		html = $('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>');
		html.attr('height', height);
		html.attr('width', width);
		if (video.type === 'youtube') {
			html.attr('src', '//www.youtube.com/embed/' + video.id + '?autoplay=1&rel=0&v=' + video.id);
		} else if (video.type === 'vimeo') {
			html.attr('src', '//player.vimeo.com/video/' + video.id + '?autoplay=1');
		} else if (video.type === 'vzaar') {
			html.attr('src', '//view.vzaar.com/' + video.id + '/player?autoplay=true');
		}

		iframe = $(html).wrap('<div class="owl-video-frame" />').insertAfter(item.find('.owl-video'));

		this._playing = item.addClass('owl-video-playing');
	};

	/**
  * Checks whether an video is currently in full screen mode or not.
  * @todo Bad style because looks like a readonly method but changes members.
  * @protected
  * @returns {Boolean}
  */
	Video.prototype.isInFullScreen = function () {
		var element = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;

		return element && $(element).parent().hasClass('owl-video-frame');
	};

	/**
  * Destroys the plugin.
  */
	Video.prototype.destroy = function () {
		var handler, property;

		this._core.$element.off('click.owl.video');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Video = Video;
})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function ($, window, document, undefined) {

	/**
  * Creates the animate plugin.
  * @class The Navigation Plugin
  * @param {Owl} scope - The Owl Carousel
  */
	var Animate = function Animate(scope) {
		this.core = scope;
		this.core.options = $.extend({}, Animate.Defaults, this.core.options);
		this.swapping = true;
		this.previous = undefined;
		this.next = undefined;

		this.handlers = {
			'change.owl.carousel': $.proxy(function (e) {
				if (e.namespace && e.property.name == 'position') {
					this.previous = this.core.current();
					this.next = e.property.value;
				}
			}, this),
			'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function (e) {
				if (e.namespace) {
					this.swapping = e.type == 'translated';
				}
			}, this),
			'translate.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
					this.swap();
				}
			}, this)
		};

		this.core.$element.on(this.handlers);
	};

	/**
  * Default options.
  * @public
  */
	Animate.Defaults = {
		animateOut: false,
		animateIn: false
	};

	/**
  * Toggles the animation classes whenever an translations starts.
  * @protected
  * @returns {Boolean|undefined}
  */
	Animate.prototype.swap = function () {

		if (this.core.settings.items !== 1) {
			return;
		}

		if (!$.support.animation || !$.support.transition) {
			return;
		}

		this.core.speed(0);

		var left,
		    clear = $.proxy(this.clear, this),
		    previous = this.core.$stage.children().eq(this.previous),
		    next = this.core.$stage.children().eq(this.next),
		    incoming = this.core.settings.animateIn,
		    outgoing = this.core.settings.animateOut;

		if (this.core.current() === this.previous) {
			return;
		}

		if (outgoing) {
			left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
			previous.one($.support.animation.end, clear).css({ 'left': left + 'px' }).addClass('animated owl-animated-out').addClass(outgoing);
		}

		if (incoming) {
			next.one($.support.animation.end, clear).addClass('animated owl-animated-in').addClass(incoming);
		}
	};

	Animate.prototype.clear = function (e) {
		$(e.target).css({ 'left': '' }).removeClass('animated owl-animated-out owl-animated-in').removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut);
		this.core.onTransitionEnd();
	};

	/**
  * Destroys the plugin.
  * @public
  */
	Animate.prototype.destroy = function () {
		var handler, property;

		for (handler in this.handlers) {
			this.core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;
})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author Artus Kolanowski
 * @author David Deutsch
 * @author Tom De Caluwé
 * @license The MIT License (MIT)
 */
;(function ($, window, document, undefined) {

	/**
  * Creates the autoplay plugin.
  * @class The Autoplay Plugin
  * @param {Owl} scope - The Owl Carousel
  */
	var Autoplay = function Autoplay(carousel) {
		/**
   * Reference to the core.
   * @protected
   * @type {Owl}
   */
		this._core = carousel;

		/**
   * The autoplay timeout id.
   * @type {Number}
   */
		this._call = null;

		/**
   * Depending on the state of the plugin, this variable contains either
   * the start time of the timer or the current timer value if it's
   * paused. Since we start in a paused state we initialize the timer
   * value.
   * @type {Number}
   */
		this._time = 0;

		/**
   * Stores the timeout currently used.
   * @type {Number}
   */
		this._timeout = 0;

		/**
   * Indicates whenever the autoplay is paused.
   * @type {Boolean}
   */
		this._paused = true;

		/**
   * All event handlers.
   * @protected
   * @type {Object}
   */
		this._handlers = {
			'changed.owl.carousel': $.proxy(function (e) {
				if (e.namespace && e.property.name === 'settings') {
					if (this._core.settings.autoplay) {
						this.play();
					} else {
						this.stop();
					}
				} else if (e.namespace && e.property.name === 'position' && this._paused) {
					// Reset the timer. This code is triggered when the position
					// of the carousel was changed through user interaction.
					this._time = 0;
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._core.settings.autoplay) {
					this.play();
				}
			}, this),
			'play.owl.autoplay': $.proxy(function (e, t, s) {
				if (e.namespace) {
					this.play(t, s);
				}
			}, this),
			'stop.owl.autoplay': $.proxy(function (e) {
				if (e.namespace) {
					this.stop();
				}
			}, this),
			'mouseover.owl.autoplay': $.proxy(function () {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'mouseleave.owl.autoplay': $.proxy(function () {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.play();
				}
			}, this),
			'touchstart.owl.core': $.proxy(function () {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'touchend.owl.core': $.proxy(function () {
				if (this._core.settings.autoplayHoverPause) {
					this.play();
				}
			}, this)
		};

		// register event handlers
		this._core.$element.on(this._handlers);

		// set default options
		this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
	};

	/**
  * Default options.
  * @public
  */
	Autoplay.Defaults = {
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		autoplaySpeed: false
	};

	/**
  * Transition to the next slide and set a timeout for the next transition.
  * @private
  * @param {Number} [speed] - The animation speed for the animations.
  */
	Autoplay.prototype._next = function (speed) {
		this._call = window.setTimeout($.proxy(this._next, this, speed), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read());

		if (this._core.is('interacting') || document.hidden) {
			return;
		}
		this._core.next(speed || this._core.settings.autoplaySpeed);
	};

	/**
  * Reads the current timer value when the timer is playing.
  * @public
  */
	Autoplay.prototype.read = function () {
		return new Date().getTime() - this._time;
	};

	/**
  * Starts the autoplay.
  * @public
  * @param {Number} [timeout] - The interval before the next animation starts.
  * @param {Number} [speed] - The animation speed for the animations.
  */
	Autoplay.prototype.play = function (timeout, speed) {
		var elapsed;

		if (!this._core.is('rotating')) {
			this._core.enter('rotating');
		}

		timeout = timeout || this._core.settings.autoplayTimeout;

		// Calculate the elapsed time since the last transition. If the carousel
		// wasn't playing this calculation will yield zero.
		elapsed = Math.min(this._time % (this._timeout || timeout), timeout);

		if (this._paused) {
			// Start the clock.
			this._time = this.read();
			this._paused = false;
		} else {
			// Clear the active timeout to allow replacement.
			window.clearTimeout(this._call);
		}

		// Adjust the origin of the timer to match the new timeout value.
		this._time += this.read() % timeout - elapsed;

		this._timeout = timeout;
		this._call = window.setTimeout($.proxy(this._next, this, speed), timeout - elapsed);
	};

	/**
  * Stops the autoplay.
  * @public
  */
	Autoplay.prototype.stop = function () {
		if (this._core.is('rotating')) {
			// Reset the clock.
			this._time = 0;
			this._paused = true;

			window.clearTimeout(this._call);
			this._core.leave('rotating');
		}
	};

	/**
  * Pauses the autoplay.
  * @public
  */
	Autoplay.prototype.pause = function () {
		if (this._core.is('rotating') && !this._paused) {
			// Pause the clock.
			this._time = this.read();
			this._paused = true;

			window.clearTimeout(this._call);
		}
	};

	/**
  * Destroys the plugin.
  */
	Autoplay.prototype.destroy = function () {
		var handler, property;

		this.stop();

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;
})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function ($, window, document, undefined) {
	'use strict';

	/**
  * Creates the navigation plugin.
  * @class The Navigation Plugin
  * @param {Owl} carousel - The Owl Carousel.
  */

	var Navigation = function Navigation(carousel) {
		/**
   * Reference to the core.
   * @protected
   * @type {Owl}
   */
		this._core = carousel;

		/**
   * Indicates whether the plugin is initialized or not.
   * @protected
   * @type {Boolean}
   */
		this._initialized = false;

		/**
   * The current paging indexes.
   * @protected
   * @type {Array}
   */
		this._pages = [];

		/**
   * All DOM elements of the user interface.
   * @protected
   * @type {Object}
   */
		this._controls = {};

		/**
   * Markup for an indicator.
   * @protected
   * @type {Array.<String>}
   */
		this._templates = [];

		/**
   * The carousel element.
   * @type {jQuery}
   */
		this.$element = this._core.$element;

		/**
   * Overridden methods of the carousel.
   * @protected
   * @type {Object}
   */
		this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		};

		/**
   * All event handlers.
   * @protected
   * @type {Object}
   */
		this._handlers = {
			'prepared.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.push('<div class="' + this._core.settings.dotClass + '">' + $(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
				}
			}, this),
			'added.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 0, this._templates.pop());
				}
			}, this),
			'remove.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 1);
				}
			}, this),
			'changed.owl.carousel': $.proxy(function (e) {
				if (e.namespace && e.property.name == 'position') {
					this.draw();
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function (e) {
				if (e.namespace && !this._initialized) {
					this._core.trigger('initialize', null, 'navigation');
					this.initialize();
					this.update();
					this.draw();
					this._initialized = true;
					this._core.trigger('initialized', null, 'navigation');
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._initialized) {
					this._core.trigger('refresh', null, 'navigation');
					this.update();
					this.draw();
					this._core.trigger('refreshed', null, 'navigation');
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

		// register event handlers
		this.$element.on(this._handlers);
	};

	/**
  * Default options.
  * @public
  * @todo Rename `slideBy` to `navBy`
  */
	Navigation.Defaults = {
		nav: false,
		navText: ['<span aria-label="' + 'Previous' + '">&#x2039;</span>', '<span aria-label="' + 'Next' + '">&#x203a;</span>'],
		navSpeed: false,
		navElement: 'button type="button" role="presentation"',
		navContainer: false,
		navContainerClass: 'owl-nav',
		navClass: ['owl-prev', 'owl-next'],
		slideBy: 1,
		dotClass: 'owl-dot',
		dotsClass: 'owl-dots',
		dots: true,
		dotsEach: false,
		dotsData: false,
		dotsSpeed: false,
		dotsContainer: false
	};

	/**
  * Initializes the layout of the plugin and extends the carousel.
  * @protected
  */
	Navigation.prototype.initialize = function () {
		var override,
		    settings = this._core.settings;

		// create DOM structure for relative navigation
		this._controls.$relative = (settings.navContainer ? $(settings.navContainer) : $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$previous = $('<' + settings.navElement + '>').addClass(settings.navClass[0]).html(settings.navText[0]).prependTo(this._controls.$relative).on('click', $.proxy(function (e) {
			this.prev(settings.navSpeed);
		}, this));
		this._controls.$next = $('<' + settings.navElement + '>').addClass(settings.navClass[1]).html(settings.navText[1]).appendTo(this._controls.$relative).on('click', $.proxy(function (e) {
			this.next(settings.navSpeed);
		}, this));

		// create DOM structure for absolute navigation
		if (!settings.dotsData) {
			this._templates = [$('<button role="button">').addClass(settings.dotClass).append($('<span>')).prop('outerHTML')];
		}

		this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer) : $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$absolute.on('click', 'button', $.proxy(function (e) {
			var index = $(e.target).parent().is(this._controls.$absolute) ? $(e.target).index() : $(e.target).parent().index();

			e.preventDefault();

			this.to(index, settings.dotsSpeed);
		}, this));

		/*$el.on('focusin', function() {
  	$(document).off(".carousel");
  		$(document).on('keydown.carousel', function(e) {
  		if(e.keyCode == 37) {
  			$el.trigger('prev.owl')
  		}
  		if(e.keyCode == 39) {
  			$el.trigger('next.owl')
  		}
  	});
  });*/

		// override public methods of the carousel
		for (override in this._overrides) {
			this._core[override] = $.proxy(this[override], this);
		}
	};

	/**
  * Destroys the plugin.
  * @protected
  */
	Navigation.prototype.destroy = function () {
		var handler, control, property, override, settings;
		settings = this._core.settings;

		for (handler in this._handlers) {
			this.$element.off(handler, this._handlers[handler]);
		}
		for (control in this._controls) {
			if (control === '$relative' && settings.navContainer) {
				this._controls[control].html('');
			} else {
				this._controls[control].remove();
			}
		}
		for (override in this.overides) {
			this._core[override] = this._overrides[override];
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	/**
  * Updates the internal state.
  * @protected
  */
	Navigation.prototype.update = function () {
		var i,
		    j,
		    k,
		    lower = this._core.clones().length / 2,
		    upper = lower + this._core.items().length,
		    maximum = this._core.maximum(true),
		    settings = this._core.settings,
		    size = settings.center || settings.autoWidth || settings.dotsData ? 1 : settings.dotsEach || settings.items;

		if (settings.slideBy !== 'page') {
			settings.slideBy = Math.min(settings.slideBy, settings.items);
		}

		if (settings.dots || settings.slideBy == 'page') {
			this._pages = [];

			for (i = lower, j = 0, k = 0; i < upper; i++) {
				if (j >= size || j === 0) {
					this._pages.push({
						start: Math.min(maximum, i - lower),
						end: i - lower + size - 1
					});
					if (Math.min(maximum, i - lower) === maximum) {
						break;
					}
					j = 0, ++k;
				}
				j += this._core.mergers(this._core.relative(i));
			}
		}
	};

	/**
  * Draws the user interface.
  * @todo The option `dotsData` wont work.
  * @protected
  */
	Navigation.prototype.draw = function () {
		var difference,
		    settings = this._core.settings,
		    disabled = this._core.items().length <= settings.items,
		    index = this._core.relative(this._core.current()),
		    loop = settings.loop || settings.rewind;

		this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);

		if (settings.nav) {
			this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
			this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
		}

		this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);

		if (settings.dots) {
			difference = this._pages.length - this._controls.$absolute.children().length;

			if (settings.dotsData && difference !== 0) {
				this._controls.$absolute.html(this._templates.join(''));
			} else if (difference > 0) {
				this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
			} else if (difference < 0) {
				this._controls.$absolute.children().slice(difference).remove();
			}

			this._controls.$absolute.find('.active').removeClass('active');
			this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
		}
	};

	/**
  * Extends event data.
  * @protected
  * @param {Event} event - The event object which gets thrown.
  */
	Navigation.prototype.onTrigger = function (event) {
		var settings = this._core.settings;

		event.page = {
			index: $.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: settings && (settings.center || settings.autoWidth || settings.dotsData ? 1 : settings.dotsEach || settings.items)
		};
	};

	/**
  * Gets the current page position of the carousel.
  * @protected
  * @returns {Number}
  */
	Navigation.prototype.current = function () {
		var current = this._core.relative(this._core.current());
		return $.grep(this._pages, $.proxy(function (page, index) {
			return page.start <= current && page.end >= current;
		}, this)).pop();
	};

	/**
  * Gets the current succesor/predecessor position.
  * @protected
  * @returns {Number}
  */
	Navigation.prototype.getPosition = function (successor) {
		var position,
		    length,
		    settings = this._core.settings;

		if (settings.slideBy == 'page') {
			position = $.inArray(this.current(), this._pages);
			length = this._pages.length;
			successor ? ++position : --position;
			position = this._pages[(position % length + length) % length].start;
		} else {
			position = this._core.relative(this._core.current());
			length = this._core.items().length;
			successor ? position += settings.slideBy : position -= settings.slideBy;
		}

		return position;
	};

	/**
  * Slides to the next item or page.
  * @public
  * @param {Number} [speed=false] - The time in milliseconds for the transition.
  */
	Navigation.prototype.next = function (speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
	};

	/**
  * Slides to the previous item or page.
  * @public
  * @param {Number} [speed=false] - The time in milliseconds for the transition.
  */
	Navigation.prototype.prev = function (speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
	};

	/**
  * Slides to the specified item or page.
  * @public
  * @param {Number} position - The position of the item or page.
  * @param {Number} [speed] - The time in milliseconds for the transition.
  * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
  */
	Navigation.prototype.to = function (position, speed, standard) {
		var length;

		if (!standard && this._pages.length) {
			length = this._pages.length;
			$.proxy(this._overrides.to, this._core)(this._pages[(position % length + length) % length].start, speed);
		} else {
			$.proxy(this._overrides.to, this._core)(position, speed);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;
})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function ($, window, document, undefined) {
	'use strict';

	/**
  * Creates the hash plugin.
  * @class The Hash Plugin
  * @param {Owl} carousel - The Owl Carousel
  */

	var Hash = function Hash(carousel) {
		/**
   * Reference to the core.
   * @protected
   * @type {Owl}
   */
		this._core = carousel;

		/**
   * Hash index for the items.
   * @protected
   * @type {Object}
   */
		this._hashes = {};

		/**
   * The carousel element.
   * @type {jQuery}
   */
		this.$element = this._core.$element;

		/**
   * All event handlers.
   * @protected
   * @type {Object}
   */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function (e) {
				if (e.namespace && this._core.settings.startPosition === 'URLHash') {
					$(window).trigger('hashchange.owl.navigation');
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function (e) {
				if (e.namespace) {
					var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');

					if (!hash) {
						return;
					}

					this._hashes[hash] = e.content;
				}
			}, this),
			'changed.owl.carousel': $.proxy(function (e) {
				if (e.namespace && e.property.name === 'position') {
					var current = this._core.items(this._core.relative(this._core.current())),
					    hash = $.map(this._hashes, function (item, hash) {
						return item === current ? hash : null;
					}).join();

					if (!hash || window.location.hash.slice(1) === hash) {
						return;
					}

					window.location.hash = hash;
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Hash.Defaults, this._core.options);

		// register the event handlers
		this.$element.on(this._handlers);

		// register event listener for hash navigation
		$(window).on('hashchange.owl.navigation', $.proxy(function (e) {
			var hash = window.location.hash.substring(1),
			    items = this._core.$stage.children(),
			    position = this._hashes[hash] && items.index(this._hashes[hash]);

			if (position === undefined || position === this._core.current()) {
				return;
			}

			this._core.to(this._core.relative(position), false, true);
		}, this));
	};

	/**
  * Default options.
  * @public
  */
	Hash.Defaults = {
		URLhashListener: false
	};

	/**
  * Destroys the plugin.
  * @public
  */
	Hash.prototype.destroy = function () {
		var handler, property;

		$(window).off('hashchange.owl.navigation');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;
})(window.Zepto || window.jQuery, window, document);

/**
 * Support Plugin
 *
 * @version 2.3.4
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function ($, window, document, undefined) {

	var style = $('<support>').get(0).style,
	    prefixes = 'Webkit Moz O ms'.split(' '),
	    events = {
		transition: {
			end: {
				WebkitTransition: 'webkitTransitionEnd',
				MozTransition: 'transitionend',
				OTransition: 'oTransitionEnd',
				transition: 'transitionend'
			}
		},
		animation: {
			end: {
				WebkitAnimation: 'webkitAnimationEnd',
				MozAnimation: 'animationend',
				OAnimation: 'oAnimationEnd',
				animation: 'animationend'
			}
		}
	},
	    tests = {
		csstransforms: function csstransforms() {
			return !!test('transform');
		},
		csstransforms3d: function csstransforms3d() {
			return !!test('perspective');
		},
		csstransitions: function csstransitions() {
			return !!test('transition');
		},
		cssanimations: function cssanimations() {
			return !!test('animation');
		}
	};

	function test(property, prefixed) {
		var result = false,
		    upper = property.charAt(0).toUpperCase() + property.slice(1);

		$.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function (i, property) {
			if (style[property] !== undefined) {
				result = prefixed ? property : true;
				return false;
			}
		});

		return result;
	}

	function prefixed(property) {
		return test(property, true);
	}

	if (tests.csstransitions()) {
		/* jshint -W053 */
		$.support.transition = new String(prefixed('transition'));
		$.support.transition.end = events.transition.end[$.support.transition];
	}

	if (tests.cssanimations()) {
		/* jshint -W053 */
		$.support.animation = new String(prefixed('animation'));
		$.support.animation.end = events.animation.end[$.support.animation];
	}

	if (tests.csstransforms()) {
		/* jshint -W053 */
		$.support.transform = new String(prefixed('transform'));
		$.support.transform3d = tests.csstransforms3d();
	}
})(window.Zepto || window.jQuery, window, document);

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/js/owl-carousel/owl.carousel.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWJjMDNlODA2NThkNmIyNDdjMGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL293bC1jYXJvdXNlbC9vd2wuY2Fyb3VzZWwuanMiXSwibmFtZXMiOlsiJCIsIndpbmRvdyIsImRvY3VtZW50IiwidW5kZWZpbmVkIiwiT3dsIiwiZWxlbWVudCIsIm9wdGlvbnMiLCJzZXR0aW5ncyIsImV4dGVuZCIsIkRlZmF1bHRzIiwiJGVsZW1lbnQiLCJfaGFuZGxlcnMiLCJfcGx1Z2lucyIsIl9zdXByZXNzIiwiX2N1cnJlbnQiLCJfc3BlZWQiLCJfY29vcmRpbmF0ZXMiLCJfYnJlYWtwb2ludCIsIl93aWR0aCIsIl9pdGVtcyIsIl9jbG9uZXMiLCJfbWVyZ2VycyIsIl93aWR0aHMiLCJfaW52YWxpZGF0ZWQiLCJfcGlwZSIsIl9kcmFnIiwidGltZSIsInRhcmdldCIsInBvaW50ZXIiLCJzdGFnZSIsInN0YXJ0IiwiY3VycmVudCIsImRpcmVjdGlvbiIsIl9zdGF0ZXMiLCJ0YWdzIiwiZWFjaCIsInByb3h5IiwiaSIsImhhbmRsZXIiLCJQbHVnaW5zIiwia2V5IiwicGx1Z2luIiwiY2hhckF0IiwidG9Mb3dlckNhc2UiLCJzbGljZSIsIldvcmtlcnMiLCJwcmlvcml0eSIsIndvcmtlciIsInB1c2giLCJmaWx0ZXIiLCJydW4iLCJzZXR1cCIsImluaXRpYWxpemUiLCJpdGVtcyIsImxvb3AiLCJjZW50ZXIiLCJyZXdpbmQiLCJjaGVja1Zpc2liaWxpdHkiLCJtb3VzZURyYWciLCJ0b3VjaERyYWciLCJwdWxsRHJhZyIsImZyZWVEcmFnIiwibWFyZ2luIiwic3RhZ2VQYWRkaW5nIiwibWVyZ2UiLCJtZXJnZUZpdCIsImF1dG9XaWR0aCIsInN0YXJ0UG9zaXRpb24iLCJydGwiLCJzbWFydFNwZWVkIiwiZmx1aWRTcGVlZCIsImRyYWdFbmRTcGVlZCIsInJlc3BvbnNpdmUiLCJyZXNwb25zaXZlUmVmcmVzaFJhdGUiLCJyZXNwb25zaXZlQmFzZUVsZW1lbnQiLCJmYWxsYmFja0Vhc2luZyIsInNsaWRlVHJhbnNpdGlvbiIsImluZm8iLCJuZXN0ZWRJdGVtU2VsZWN0b3IiLCJpdGVtRWxlbWVudCIsInN0YWdlRWxlbWVudCIsInJlZnJlc2hDbGFzcyIsImxvYWRlZENsYXNzIiwibG9hZGluZ0NsYXNzIiwicnRsQ2xhc3MiLCJyZXNwb25zaXZlQ2xhc3MiLCJkcmFnQ2xhc3MiLCJpdGVtQ2xhc3MiLCJzdGFnZUNsYXNzIiwic3RhZ2VPdXRlckNsYXNzIiwiZ3JhYkNsYXNzIiwiV2lkdGgiLCJEZWZhdWx0IiwiSW5uZXIiLCJPdXRlciIsIlR5cGUiLCJFdmVudCIsIlN0YXRlIiwid2lkdGgiLCJjYWNoZSIsInJlbGF0aXZlIiwiJHN0YWdlIiwiY2hpbGRyZW4iLCJyZW1vdmUiLCJncmlkIiwiY3NzIiwidG9GaXhlZCIsIml0ZXJhdG9yIiwibGVuZ3RoIiwid2lkdGhzIiwiTWF0aCIsIm1pbiIsImNsb25lcyIsInZpZXciLCJtYXgiLCJzaXplIiwiY2VpbCIsInJlcGVhdCIsImFwcGVuZCIsInByZXBlbmQiLCJub3JtYWxpemUiLCJvdXRlckhUTUwiLCJhZGRDbGFzcyIsImFwcGVuZFRvIiwicHJlcGVuZFRvIiwicHJldmlvdXMiLCJjb29yZGluYXRlcyIsInBhZGRpbmciLCJhYnMiLCJlcSIsInJlbW92ZUF0dHIiLCJpbmRleCIsIm1pbmltdW0iLCJtYXhpbXVtIiwicmVzZXQiLCJhbmltYXRlIiwiYmVnaW4iLCJlbmQiLCJpbm5lciIsIm91dGVyIiwibWF0Y2hlcyIsIm4iLCJvcCIsInJlbW92ZUNsYXNzIiwiam9pbiIsInByb3RvdHlwZSIsImluaXRpYWxpemVTdGFnZSIsImZpbmQiLCJ3cmFwIiwicGFyZW50IiwiaW5pdGlhbGl6ZUl0ZW1zIiwiJGl0ZW1zIiwiZ2V0IiwibWFwIiwiaXRlbSIsInJlZnJlc2giLCJyZXBsYWNlIiwibm90IiwiaXNWaXNpYmxlIiwiaW52YWxpZGF0ZSIsImVudGVyIiwidHJpZ2dlciIsInRvZ2dsZUNsYXNzIiwiaXMiLCJpbWdzIiwibmVzdGVkU2VsZWN0b3IiLCJwcmVsb2FkQXV0b1dpZHRoSW1hZ2VzIiwicmVnaXN0ZXJFdmVudEhhbmRsZXJzIiwibGVhdmUiLCJ2aWV3cG9ydCIsIm92ZXJ3cml0ZXMiLCJtYXRjaCIsImJyZWFrcG9pbnQiLCJOdW1iZXIiLCJhdHRyIiwiUmVnRXhwIiwicHJvcGVydHkiLCJuYW1lIiwidmFsdWUiLCJvcHRpb25zTG9naWMiLCJwcmVwYXJlIiwiZXZlbnQiLCJjb250ZW50IiwiZGF0YSIsInVwZGF0ZSIsInAiLCJhbGwiLCJncmVwIiwiZGltZW5zaW9uIiwib25UaHJvdHRsZWRSZXNpemUiLCJjbGVhclRpbWVvdXQiLCJyZXNpemVUaW1lciIsInNldFRpbWVvdXQiLCJvblJlc2l6ZSIsImlzRGVmYXVsdFByZXZlbnRlZCIsInN1cHBvcnQiLCJ0cmFuc2l0aW9uIiwib24iLCJvblRyYW5zaXRpb25FbmQiLCJvbkRyYWdTdGFydCIsIm9uRHJhZ0VuZCIsIndoaWNoIiwidHJhbnNmb3JtIiwic3BsaXQiLCJ4IiwieSIsInBvc2l0aW9uIiwibGVmdCIsInRvcCIsInN0b3AiLCJ0eXBlIiwic3BlZWQiLCJEYXRlIiwiZ2V0VGltZSIsIm9uZSIsImRlbHRhIiwiZGlmZmVyZW5jZSIsIm9uRHJhZ01vdmUiLCJwcmV2ZW50RGVmYXVsdCIsInB1bGwiLCJvZmYiLCJjbG9zZXN0IiwiY29vcmRpbmF0ZSIsInRyYW5zZm9ybTNkIiwic3RhdGUiLCJwYXJ0IiwidiIsInN1cHByZXNzIiwicmVsZWFzZSIsIm0iLCJpc051bWVyaWMiLCJyZWNpcHJvY2FsSXRlbXNXaWR0aCIsImVsZW1lbnRXaWR0aCIsIm1lcmdlcnMiLCJvZGQiLCJldmVuIiwibXVsdGlwbGllciIsIm5ld1Bvc2l0aW9uIiwiZHVyYXRpb24iLCJmcm9tIiwidG8iLCJmYWN0b3IiLCJyZXZlcnQiLCJkaXN0YW5jZSIsIm5leHQiLCJwcmV2Iiwic3RvcFByb3BhZ2F0aW9uIiwic3JjRWxlbWVudCIsIm9yaWdpbmFsVGFyZ2V0IiwiaW5uZXJXaWR0aCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiY29uc29sZSIsIndhcm4iLCJlbXB0eSIsImpRdWVyeSIsIm5vZGVUeXBlIiwiYWRkQmFjayIsImFkZCIsImFmdGVyIiwiYmVmb3JlIiwic3BsaWNlIiwiaW1hZ2VzIiwiSW1hZ2UiLCJlIiwic3JjIiwiZGVzdHJveSIsInVud3JhcCIsImNvbnRlbnRzIiwicmVtb3ZlRGF0YSIsImEiLCJvIiwiYiIsImxpc3RlbmVyIiwiY2FwdHVyZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJhdHRhY2hFdmVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkZXRhY2hFdmVudCIsIm5hbWVzcGFjZSIsInN0YXR1cyIsImNvdW50IiwiY2FtZWxDYXNlIiwicmVsYXRlZFRhcmdldCIsIm9uVHJpZ2dlciIsInJlZ2lzdGVyIiwiY2FsbCIsImNvbmNhdCIsIm9iamVjdCIsInNwZWNpYWwiLCJvd2wiLCJfZGVmYXVsdCIsImFwcGx5IiwiaW5kZXhPZiIsImFyZ3VtZW50cyIsInRhZyIsImluQXJyYXkiLCJldmVudHMiLCJyZXN1bHQiLCJvcmlnaW5hbEV2ZW50IiwidG91Y2hlcyIsImNoYW5nZWRUb3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsImNsaWVudFgiLCJjbGllbnRZIiwibnVtYmVyIiwiaXNOYU4iLCJwYXJzZUZsb2F0IiwiZmlyc3QiLCJzZWNvbmQiLCJmbiIsIm93bENhcm91c2VsIiwib3B0aW9uIiwiYXJncyIsIkFycmF5IiwiJHRoaXMiLCJDb25zdHJ1Y3RvciIsIlplcHRvIiwiQXV0b1JlZnJlc2giLCJjYXJvdXNlbCIsIl9jb3JlIiwiX2ludGVydmFsIiwiX3Zpc2libGUiLCJhdXRvUmVmcmVzaCIsIndhdGNoIiwiYXV0b1JlZnJlc2hJbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIk9iamVjdCIsImdldE93blByb3BlcnR5TmFtZXMiLCJMYXp5IiwiX2xvYWRlZCIsImxhenlMb2FkIiwibG9hZCIsImxhenlMb2FkRWFnZXIiLCIkaXRlbSIsIiRlbGVtZW50cyIsImltYWdlIiwidXJsIiwiZGV2aWNlUGl4ZWxSYXRpbyIsIm9ubG9hZCIsImhhbmRsZXJzIiwiQXV0b0hlaWdodCIsIl9wcmV2aW91c0hlaWdodCIsImF1dG9IZWlnaHQiLCJfaW50ZXJ2YWxJZCIsInJlZlRoaXMiLCJyZXNpemUiLCJhdXRvSGVpZ2h0Q2xhc3MiLCJsYXp5TG9hZEVuYWJsZWQiLCJ2aXNpYmxlIiwidG9BcnJheSIsImhlaWdodHMiLCJtYXhoZWlnaHQiLCJoZWlnaHQiLCJWaWRlbyIsIl92aWRlb3MiLCJfcGxheWluZyIsInZpZGVvIiwiaXNJbkZ1bGxTY3JlZW4iLCJmZXRjaCIsInBsYXkiLCJ2aWRlb0hlaWdodCIsInZpZGVvV2lkdGgiLCJpZCIsIkVycm9yIiwidGh1bWJuYWlsIiwidG5MaW5rIiwiaWNvbiIsInBhdGgiLCJkaW1lbnNpb25zIiwiY3VzdG9tVG4iLCJzcmNUeXBlIiwibGF6eUNsYXNzIiwiY3JlYXRlIiwiYWpheCIsImpzb25wIiwiZGF0YVR5cGUiLCJzdWNjZXNzIiwidGh1bWJuYWlsX2xhcmdlIiwiZnJhbWVncmFiX3VybCIsImh0bWwiLCJpZnJhbWUiLCJpbnNlcnRBZnRlciIsImZ1bGxzY3JlZW5FbGVtZW50IiwibW96RnVsbFNjcmVlbkVsZW1lbnQiLCJ3ZWJraXRGdWxsc2NyZWVuRWxlbWVudCIsImhhc0NsYXNzIiwiQW5pbWF0ZSIsInNjb3BlIiwiY29yZSIsInN3YXBwaW5nIiwiYW5pbWF0ZU91dCIsImFuaW1hdGVJbiIsInN3YXAiLCJhbmltYXRpb24iLCJjbGVhciIsImluY29taW5nIiwib3V0Z29pbmciLCJBdXRvcGxheSIsIl9jYWxsIiwiX3RpbWUiLCJfdGltZW91dCIsIl9wYXVzZWQiLCJhdXRvcGxheSIsInQiLCJzIiwiYXV0b3BsYXlIb3ZlclBhdXNlIiwicGF1c2UiLCJhdXRvcGxheVRpbWVvdXQiLCJhdXRvcGxheVNwZWVkIiwiX25leHQiLCJyb3VuZCIsInJlYWQiLCJoaWRkZW4iLCJ0aW1lb3V0IiwiZWxhcHNlZCIsIk5hdmlnYXRpb24iLCJfaW5pdGlhbGl6ZWQiLCJfcGFnZXMiLCJfY29udHJvbHMiLCJfdGVtcGxhdGVzIiwiX292ZXJyaWRlcyIsImRvdHNEYXRhIiwiZG90Q2xhc3MiLCJwb3AiLCJkcmF3IiwibmF2IiwibmF2VGV4dCIsIm5hdlNwZWVkIiwibmF2RWxlbWVudCIsIm5hdkNvbnRhaW5lciIsIm5hdkNvbnRhaW5lckNsYXNzIiwibmF2Q2xhc3MiLCJzbGlkZUJ5IiwiZG90c0NsYXNzIiwiZG90cyIsImRvdHNFYWNoIiwiZG90c1NwZWVkIiwiZG90c0NvbnRhaW5lciIsIm92ZXJyaWRlIiwiJHJlbGF0aXZlIiwiJHByZXZpb3VzIiwiJG5leHQiLCJwcm9wIiwiJGFic29sdXRlIiwiY29udHJvbCIsIm92ZXJpZGVzIiwiaiIsImsiLCJsb3dlciIsInVwcGVyIiwiZGlzYWJsZWQiLCJwYWdlIiwiZ2V0UG9zaXRpb24iLCJzdWNjZXNzb3IiLCJzdGFuZGFyZCIsIkhhc2giLCJfaGFzaGVzIiwiaGFzaCIsImxvY2F0aW9uIiwic3Vic3RyaW5nIiwiVVJMaGFzaExpc3RlbmVyIiwic3R5bGUiLCJwcmVmaXhlcyIsIldlYmtpdFRyYW5zaXRpb24iLCJNb3pUcmFuc2l0aW9uIiwiT1RyYW5zaXRpb24iLCJXZWJraXRBbmltYXRpb24iLCJNb3pBbmltYXRpb24iLCJPQW5pbWF0aW9uIiwidGVzdHMiLCJjc3N0cmFuc2Zvcm1zIiwidGVzdCIsImNzc3RyYW5zZm9ybXMzZCIsImNzc3RyYW5zaXRpb25zIiwiY3NzYW5pbWF0aW9ucyIsInByZWZpeGVkIiwidG9VcHBlckNhc2UiLCJTdHJpbmciXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzdEQTs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7O0FBWUEsQ0FBQyxDQUFDLFVBQVNBLENBQVQsRUFBWUMsTUFBWixFQUFvQkMsUUFBcEIsRUFBOEJDLFNBQTlCLEVBQXlDOztBQUUxQzs7Ozs7OztBQU9BLFVBQVNDLEdBQVQsQ0FBYUMsT0FBYixFQUFzQkMsT0FBdEIsRUFBK0I7O0FBRTlCOzs7O0FBSUEsT0FBS0MsUUFBTCxHQUFnQixJQUFoQjs7QUFFQTs7OztBQUlBLE9BQUtELE9BQUwsR0FBZU4sRUFBRVEsTUFBRixDQUFTLEVBQVQsRUFBYUosSUFBSUssUUFBakIsRUFBMkJILE9BQTNCLENBQWY7O0FBRUE7Ozs7QUFJQSxPQUFLSSxRQUFMLEdBQWdCVixFQUFFSyxPQUFGLENBQWhCOztBQUVBOzs7O0FBSUEsT0FBS00sU0FBTCxHQUFpQixFQUFqQjs7QUFFQTs7OztBQUlBLE9BQUtDLFFBQUwsR0FBZ0IsRUFBaEI7O0FBRUE7Ozs7QUFJQSxPQUFLQyxRQUFMLEdBQWdCLEVBQWhCOztBQUVBOzs7O0FBSUEsT0FBS0MsUUFBTCxHQUFnQixJQUFoQjs7QUFFQTs7OztBQUlBLE9BQUtDLE1BQUwsR0FBYyxJQUFkOztBQUVBOzs7OztBQUtBLE9BQUtDLFlBQUwsR0FBb0IsRUFBcEI7O0FBRUE7Ozs7O0FBS0EsT0FBS0MsV0FBTCxHQUFtQixJQUFuQjs7QUFFQTs7O0FBR0EsT0FBS0MsTUFBTCxHQUFjLElBQWQ7O0FBRUE7Ozs7QUFJQSxPQUFLQyxNQUFMLEdBQWMsRUFBZDs7QUFFQTs7OztBQUlBLE9BQUtDLE9BQUwsR0FBZSxFQUFmOztBQUVBOzs7OztBQUtBLE9BQUtDLFFBQUwsR0FBZ0IsRUFBaEI7O0FBRUE7OztBQUdBLE9BQUtDLE9BQUwsR0FBZSxFQUFmOztBQUVBOzs7O0FBSUEsT0FBS0MsWUFBTCxHQUFvQixFQUFwQjs7QUFFQTs7OztBQUlBLE9BQUtDLEtBQUwsR0FBYSxFQUFiOztBQUVBOzs7OztBQUtBLE9BQUtDLEtBQUwsR0FBYTtBQUNaQyxTQUFNLElBRE07QUFFWkMsV0FBUSxJQUZJO0FBR1pDLFlBQVMsSUFIRztBQUlaQyxVQUFPO0FBQ05DLFdBQU8sSUFERDtBQUVOQyxhQUFTO0FBRkgsSUFKSztBQVFaQyxjQUFXO0FBUkMsR0FBYjs7QUFXQTs7Ozs7QUFLQSxPQUFLQyxPQUFMLEdBQWU7QUFDZEYsWUFBUyxFQURLO0FBRWRHLFNBQU07QUFDTCxvQkFBZ0IsQ0FBRSxNQUFGLENBRFg7QUFFTCxpQkFBYSxDQUFFLE1BQUYsQ0FGUjtBQUdMLGdCQUFZLENBQUUsYUFBRjtBQUhQO0FBRlEsR0FBZjs7QUFTQWxDLElBQUVtQyxJQUFGLENBQU8sQ0FBRSxVQUFGLEVBQWMsbUJBQWQsQ0FBUCxFQUE0Q25DLEVBQUVvQyxLQUFGLENBQVEsVUFBU0MsQ0FBVCxFQUFZQyxPQUFaLEVBQXFCO0FBQ3hFLFFBQUszQixTQUFMLENBQWUyQixPQUFmLElBQTBCdEMsRUFBRW9DLEtBQUYsQ0FBUSxLQUFLRSxPQUFMLENBQVIsRUFBdUIsSUFBdkIsQ0FBMUI7QUFDQSxHQUYyQyxFQUV6QyxJQUZ5QyxDQUE1Qzs7QUFJQXRDLElBQUVtQyxJQUFGLENBQU8vQixJQUFJbUMsT0FBWCxFQUFvQnZDLEVBQUVvQyxLQUFGLENBQVEsVUFBU0ksR0FBVCxFQUFjQyxNQUFkLEVBQXNCO0FBQ2pELFFBQUs3QixRQUFMLENBQWM0QixJQUFJRSxNQUFKLENBQVcsQ0FBWCxFQUFjQyxXQUFkLEtBQThCSCxJQUFJSSxLQUFKLENBQVUsQ0FBVixDQUE1QyxJQUNHLElBQUlILE1BQUosQ0FBVyxJQUFYLENBREg7QUFFQSxHQUhtQixFQUdqQixJQUhpQixDQUFwQjs7QUFLQXpDLElBQUVtQyxJQUFGLENBQU8vQixJQUFJeUMsT0FBWCxFQUFvQjdDLEVBQUVvQyxLQUFGLENBQVEsVUFBU1UsUUFBVCxFQUFtQkMsTUFBbkIsRUFBMkI7QUFDdEQsUUFBS3ZCLEtBQUwsQ0FBV3dCLElBQVgsQ0FBZ0I7QUFDZixjQUFVRCxPQUFPRSxNQURGO0FBRWYsV0FBT2pELEVBQUVvQyxLQUFGLENBQVFXLE9BQU9HLEdBQWYsRUFBb0IsSUFBcEI7QUFGUSxJQUFoQjtBQUlBLEdBTG1CLEVBS2pCLElBTGlCLENBQXBCOztBQU9BLE9BQUtDLEtBQUw7QUFDQSxPQUFLQyxVQUFMO0FBQ0E7O0FBRUQ7Ozs7QUFJQWhELEtBQUlLLFFBQUosR0FBZTtBQUNkNEMsU0FBTyxDQURPO0FBRWRDLFFBQU0sS0FGUTtBQUdkQyxVQUFRLEtBSE07QUFJZEMsVUFBUSxLQUpNO0FBS2RDLG1CQUFpQixJQUxIOztBQU9kQyxhQUFXLElBUEc7QUFRZEMsYUFBVyxJQVJHO0FBU2RDLFlBQVUsSUFUSTtBQVVkQyxZQUFVLEtBVkk7O0FBWWRDLFVBQVEsQ0FaTTtBQWFkQyxnQkFBYyxDQWJBOztBQWVkQyxTQUFPLEtBZk87QUFnQmRDLFlBQVUsSUFoQkk7QUFpQmRDLGFBQVcsS0FqQkc7O0FBbUJkQyxpQkFBZSxDQW5CRDtBQW9CZEMsT0FBSyxLQXBCUzs7QUFzQmRDLGNBQVksR0F0QkU7QUF1QmRDLGNBQVksS0F2QkU7QUF3QmRDLGdCQUFjLEtBeEJBOztBQTBCZEMsY0FBWSxFQTFCRTtBQTJCZEMseUJBQXVCLEdBM0JUO0FBNEJkQyx5QkFBdUJ6RSxNQTVCVDs7QUE4QmQwRSxrQkFBZ0IsT0E5QkY7QUErQmRDLG1CQUFpQixFQS9CSDs7QUFpQ2RDLFFBQU0sS0FqQ1E7O0FBbUNkQyxzQkFBb0IsS0FuQ047QUFvQ2RDLGVBQWEsS0FwQ0M7QUFxQ2RDLGdCQUFjLEtBckNBOztBQXVDZEMsZ0JBQWMsYUF2Q0E7QUF3Q2RDLGVBQWEsWUF4Q0M7QUF5Q2RDLGdCQUFjLGFBekNBO0FBMENkQyxZQUFVLFNBMUNJO0FBMkNkQyxtQkFBaUIsZ0JBM0NIO0FBNENkQyxhQUFXLFVBNUNHO0FBNkNkQyxhQUFXLFVBN0NHO0FBOENkQyxjQUFZLFdBOUNFO0FBK0NkQyxtQkFBaUIsaUJBL0NIO0FBZ0RkQyxhQUFXO0FBaERHLEVBQWY7O0FBbURBOzs7Ozs7QUFNQXRGLEtBQUl1RixLQUFKLEdBQVk7QUFDWEMsV0FBUyxTQURFO0FBRVhDLFNBQU8sT0FGSTtBQUdYQyxTQUFPO0FBSEksRUFBWjs7QUFNQTs7Ozs7O0FBTUExRixLQUFJMkYsSUFBSixHQUFXO0FBQ1ZDLFNBQU8sT0FERztBQUVWQyxTQUFPO0FBRkcsRUFBWDs7QUFLQTs7OztBQUlBN0YsS0FBSW1DLE9BQUosR0FBYyxFQUFkOztBQUVBOzs7QUFHQW5DLEtBQUl5QyxPQUFKLEdBQWMsQ0FBRTtBQUNmSSxVQUFRLENBQUUsT0FBRixFQUFXLFVBQVgsQ0FETztBQUVmQyxPQUFLLGVBQVc7QUFDZixRQUFLaEMsTUFBTCxHQUFjLEtBQUtSLFFBQUwsQ0FBY3dGLEtBQWQsRUFBZDtBQUNBO0FBSmMsRUFBRixFQUtYO0FBQ0ZqRCxVQUFRLENBQUUsT0FBRixFQUFXLE9BQVgsRUFBb0IsVUFBcEIsQ0FETjtBQUVGQyxPQUFLLGFBQVNpRCxLQUFULEVBQWdCO0FBQ3BCQSxTQUFNcEUsT0FBTixHQUFnQixLQUFLWixNQUFMLElBQWUsS0FBS0EsTUFBTCxDQUFZLEtBQUtpRixRQUFMLENBQWMsS0FBS3RGLFFBQW5CLENBQVosQ0FBL0I7QUFDQTtBQUpDLEVBTFcsRUFVWDtBQUNGbUMsVUFBUSxDQUFFLE9BQUYsRUFBVyxVQUFYLENBRE47QUFFRkMsT0FBSyxlQUFXO0FBQ2YsUUFBS21ELE1BQUwsQ0FBWUMsUUFBWixDQUFxQixTQUFyQixFQUFnQ0MsTUFBaEM7QUFDQTtBQUpDLEVBVlcsRUFlWDtBQUNGdEQsVUFBUSxDQUFFLE9BQUYsRUFBVyxPQUFYLEVBQW9CLFVBQXBCLENBRE47QUFFRkMsT0FBSyxhQUFTaUQsS0FBVCxFQUFnQjtBQUNwQixPQUFJckMsU0FBUyxLQUFLdkQsUUFBTCxDQUFjdUQsTUFBZCxJQUF3QixFQUFyQztBQUFBLE9BQ0MwQyxPQUFPLENBQUMsS0FBS2pHLFFBQUwsQ0FBYzJELFNBRHZCO0FBQUEsT0FFQ0UsTUFBTSxLQUFLN0QsUUFBTCxDQUFjNkQsR0FGckI7QUFBQSxPQUdDcUMsTUFBTTtBQUNMLGFBQVMsTUFESjtBQUVMLG1CQUFlckMsTUFBTU4sTUFBTixHQUFlLEVBRnpCO0FBR0wsb0JBQWdCTSxNQUFNLEVBQU4sR0FBV047QUFIdEIsSUFIUDs7QUFTQSxJQUFDMEMsSUFBRCxJQUFTLEtBQUtILE1BQUwsQ0FBWUMsUUFBWixHQUF1QkcsR0FBdkIsQ0FBMkJBLEdBQTNCLENBQVQ7O0FBRUFOLFNBQU1NLEdBQU4sR0FBWUEsR0FBWjtBQUNBO0FBZkMsRUFmVyxFQStCWDtBQUNGeEQsVUFBUSxDQUFFLE9BQUYsRUFBVyxPQUFYLEVBQW9CLFVBQXBCLENBRE47QUFFRkMsT0FBSyxhQUFTaUQsS0FBVCxFQUFnQjtBQUNwQixPQUFJRCxRQUFRLENBQUMsS0FBS0EsS0FBTCxLQUFlLEtBQUszRixRQUFMLENBQWM4QyxLQUE5QixFQUFxQ3FELE9BQXJDLENBQTZDLENBQTdDLElBQWtELEtBQUtuRyxRQUFMLENBQWN1RCxNQUE1RTtBQUFBLE9BQ0NFLFFBQVEsSUFEVDtBQUFBLE9BRUMyQyxXQUFXLEtBQUt4RixNQUFMLENBQVl5RixNQUZ4QjtBQUFBLE9BR0NKLE9BQU8sQ0FBQyxLQUFLakcsUUFBTCxDQUFjMkQsU0FIdkI7QUFBQSxPQUlDMkMsU0FBUyxFQUpWOztBQU1BVixTQUFNOUMsS0FBTixHQUFjO0FBQ2JXLFdBQU8sS0FETTtBQUVia0MsV0FBT0E7QUFGTSxJQUFkOztBQUtBLFVBQU9TLFVBQVAsRUFBbUI7QUFDbEIzQyxZQUFRLEtBQUszQyxRQUFMLENBQWNzRixRQUFkLENBQVI7QUFDQTNDLFlBQVEsS0FBS3pELFFBQUwsQ0FBYzBELFFBQWQsSUFBMEI2QyxLQUFLQyxHQUFMLENBQVMvQyxLQUFULEVBQWdCLEtBQUt6RCxRQUFMLENBQWM4QyxLQUE5QixDQUExQixJQUFrRVcsS0FBMUU7O0FBRUFtQyxVQUFNOUMsS0FBTixDQUFZVyxLQUFaLEdBQW9CQSxRQUFRLENBQVIsSUFBYW1DLE1BQU05QyxLQUFOLENBQVlXLEtBQTdDOztBQUVBNkMsV0FBT0YsUUFBUCxJQUFtQixDQUFDSCxJQUFELEdBQVEsS0FBS3JGLE1BQUwsQ0FBWXdGLFFBQVosRUFBc0JULEtBQXRCLEVBQVIsR0FBd0NBLFFBQVFsQyxLQUFuRTtBQUNBOztBQUVELFFBQUsxQyxPQUFMLEdBQWV1RixNQUFmO0FBQ0E7QUF4QkMsRUEvQlcsRUF3RFg7QUFDRjVELFVBQVEsQ0FBRSxPQUFGLEVBQVcsVUFBWCxDQUROO0FBRUZDLE9BQUssZUFBVztBQUNmLE9BQUk4RCxTQUFTLEVBQWI7QUFBQSxPQUNDM0QsUUFBUSxLQUFLbEMsTUFEZDtBQUFBLE9BRUNaLFdBQVcsS0FBS0EsUUFGakI7O0FBR0M7QUFDQTBHLFVBQU9ILEtBQUtJLEdBQUwsQ0FBUzNHLFNBQVM4QyxLQUFULEdBQWlCLENBQTFCLEVBQTZCLENBQTdCLENBSlI7QUFBQSxPQUtDOEQsT0FBT0wsS0FBS00sSUFBTCxDQUFVL0QsTUFBTXVELE1BQU4sR0FBZSxDQUF6QixJQUE4QixDQUx0QztBQUFBLE9BTUNTLFNBQVM5RyxTQUFTK0MsSUFBVCxJQUFpQkQsTUFBTXVELE1BQXZCLEdBQWdDckcsU0FBU2lELE1BQVQsR0FBa0J5RCxJQUFsQixHQUF5QkgsS0FBS0ksR0FBTCxDQUFTRCxJQUFULEVBQWVFLElBQWYsQ0FBekQsR0FBZ0YsQ0FOMUY7QUFBQSxPQU9DRyxTQUFTLEVBUFY7QUFBQSxPQVFDQyxVQUFVLEVBUlg7O0FBVUFGLGFBQVUsQ0FBVjs7QUFFQSxVQUFPQSxTQUFTLENBQWhCLEVBQW1CO0FBQ2xCO0FBQ0FMLFdBQU9oRSxJQUFQLENBQVksS0FBS3dFLFNBQUwsQ0FBZVIsT0FBT0osTUFBUCxHQUFnQixDQUEvQixFQUFrQyxJQUFsQyxDQUFaO0FBQ0FVLGFBQVNBLFNBQVNqRSxNQUFNMkQsT0FBT0EsT0FBT0osTUFBUCxHQUFnQixDQUF2QixDQUFOLEVBQWlDLENBQWpDLEVBQW9DYSxTQUF0RDtBQUNBVCxXQUFPaEUsSUFBUCxDQUFZLEtBQUt3RSxTQUFMLENBQWVuRSxNQUFNdUQsTUFBTixHQUFlLENBQWYsR0FBbUIsQ0FBQ0ksT0FBT0osTUFBUCxHQUFnQixDQUFqQixJQUFzQixDQUF4RCxFQUEyRCxJQUEzRCxDQUFaO0FBQ0FXLGNBQVVsRSxNQUFNMkQsT0FBT0EsT0FBT0osTUFBUCxHQUFnQixDQUF2QixDQUFOLEVBQWlDLENBQWpDLEVBQW9DYSxTQUFwQyxHQUFnREYsT0FBMUQ7QUFDQUYsY0FBVSxDQUFWO0FBQ0E7O0FBRUQsUUFBS2pHLE9BQUwsR0FBZTRGLE1BQWY7O0FBRUFoSCxLQUFFc0gsTUFBRixFQUFVSSxRQUFWLENBQW1CLFFBQW5CLEVBQTZCQyxRQUE3QixDQUFzQyxLQUFLdEIsTUFBM0M7QUFDQXJHLEtBQUV1SCxPQUFGLEVBQVdHLFFBQVgsQ0FBb0IsUUFBcEIsRUFBOEJFLFNBQTlCLENBQXdDLEtBQUt2QixNQUE3QztBQUNBO0FBNUJDLEVBeERXLEVBcUZYO0FBQ0ZwRCxVQUFRLENBQUUsT0FBRixFQUFXLE9BQVgsRUFBb0IsVUFBcEIsQ0FETjtBQUVGQyxPQUFLLGVBQVc7QUFDZixPQUFJa0IsTUFBTSxLQUFLN0QsUUFBTCxDQUFjNkQsR0FBZCxHQUFvQixDQUFwQixHQUF3QixDQUFDLENBQW5DO0FBQUEsT0FDQytDLE9BQU8sS0FBSy9GLE9BQUwsQ0FBYXdGLE1BQWIsR0FBc0IsS0FBS3pGLE1BQUwsQ0FBWXlGLE1BRDFDO0FBQUEsT0FFQ0QsV0FBVyxDQUFDLENBRmI7QUFBQSxPQUdDa0IsV0FBVyxDQUhaO0FBQUEsT0FJQzlGLFVBQVUsQ0FKWDtBQUFBLE9BS0MrRixjQUFjLEVBTGY7O0FBT0EsVUFBTyxFQUFFbkIsUUFBRixHQUFhUSxJQUFwQixFQUEwQjtBQUN6QlUsZUFBV0MsWUFBWW5CLFdBQVcsQ0FBdkIsS0FBNkIsQ0FBeEM7QUFDQTVFLGNBQVUsS0FBS1QsT0FBTCxDQUFhLEtBQUs4RSxRQUFMLENBQWNPLFFBQWQsQ0FBYixJQUF3QyxLQUFLcEcsUUFBTCxDQUFjdUQsTUFBaEU7QUFDQWdFLGdCQUFZOUUsSUFBWixDQUFpQjZFLFdBQVc5RixVQUFVcUMsR0FBdEM7QUFDQTs7QUFFRCxRQUFLcEQsWUFBTCxHQUFvQjhHLFdBQXBCO0FBQ0E7QUFqQkMsRUFyRlcsRUF1R1g7QUFDRjdFLFVBQVEsQ0FBRSxPQUFGLEVBQVcsT0FBWCxFQUFvQixVQUFwQixDQUROO0FBRUZDLE9BQUssZUFBVztBQUNmLE9BQUk2RSxVQUFVLEtBQUt4SCxRQUFMLENBQWN3RCxZQUE1QjtBQUFBLE9BQ0MrRCxjQUFjLEtBQUs5RyxZQURwQjtBQUFBLE9BRUN5RixNQUFNO0FBQ0wsYUFBU0ssS0FBS00sSUFBTCxDQUFVTixLQUFLa0IsR0FBTCxDQUFTRixZQUFZQSxZQUFZbEIsTUFBWixHQUFxQixDQUFqQyxDQUFULENBQVYsSUFBMkRtQixVQUFVLENBRHpFO0FBRUwsb0JBQWdCQSxXQUFXLEVBRnRCO0FBR0wscUJBQWlCQSxXQUFXO0FBSHZCLElBRlA7O0FBUUEsUUFBSzFCLE1BQUwsQ0FBWUksR0FBWixDQUFnQkEsR0FBaEI7QUFDQTtBQVpDLEVBdkdXLEVBb0hYO0FBQ0Z4RCxVQUFRLENBQUUsT0FBRixFQUFXLE9BQVgsRUFBb0IsVUFBcEIsQ0FETjtBQUVGQyxPQUFLLGFBQVNpRCxLQUFULEVBQWdCO0FBQ3BCLE9BQUlRLFdBQVcsS0FBSzNGLFlBQUwsQ0FBa0I0RixNQUFqQztBQUFBLE9BQ0NKLE9BQU8sQ0FBQyxLQUFLakcsUUFBTCxDQUFjMkQsU0FEdkI7QUFBQSxPQUVDYixRQUFRLEtBQUtnRCxNQUFMLENBQVlDLFFBQVosRUFGVDs7QUFJQSxPQUFJRSxRQUFRTCxNQUFNOUMsS0FBTixDQUFZVyxLQUF4QixFQUErQjtBQUM5QixXQUFPMkMsVUFBUCxFQUFtQjtBQUNsQlIsV0FBTU0sR0FBTixDQUFVUCxLQUFWLEdBQWtCLEtBQUs1RSxPQUFMLENBQWEsS0FBSzhFLFFBQUwsQ0FBY08sUUFBZCxDQUFiLENBQWxCO0FBQ0F0RCxXQUFNNEUsRUFBTixDQUFTdEIsUUFBVCxFQUFtQkYsR0FBbkIsQ0FBdUJOLE1BQU1NLEdBQTdCO0FBQ0E7QUFDRCxJQUxELE1BS08sSUFBSUQsSUFBSixFQUFVO0FBQ2hCTCxVQUFNTSxHQUFOLENBQVVQLEtBQVYsR0FBa0JDLE1BQU05QyxLQUFOLENBQVk2QyxLQUE5QjtBQUNBN0MsVUFBTW9ELEdBQU4sQ0FBVU4sTUFBTU0sR0FBaEI7QUFDQTtBQUNEO0FBaEJDLEVBcEhXLEVBcUlYO0FBQ0Z4RCxVQUFRLENBQUUsT0FBRixDQUROO0FBRUZDLE9BQUssZUFBVztBQUNmLFFBQUtsQyxZQUFMLENBQWtCNEYsTUFBbEIsR0FBMkIsQ0FBM0IsSUFBZ0MsS0FBS1AsTUFBTCxDQUFZNkIsVUFBWixDQUF1QixPQUF2QixDQUFoQztBQUNBO0FBSkMsRUFySVcsRUEwSVg7QUFDRmpGLFVBQVEsQ0FBRSxPQUFGLEVBQVcsT0FBWCxFQUFvQixVQUFwQixDQUROO0FBRUZDLE9BQUssYUFBU2lELEtBQVQsRUFBZ0I7QUFDcEJBLFNBQU1wRSxPQUFOLEdBQWdCb0UsTUFBTXBFLE9BQU4sR0FBZ0IsS0FBS3NFLE1BQUwsQ0FBWUMsUUFBWixHQUF1QjZCLEtBQXZCLENBQTZCaEMsTUFBTXBFLE9BQW5DLENBQWhCLEdBQThELENBQTlFO0FBQ0FvRSxTQUFNcEUsT0FBTixHQUFnQitFLEtBQUtJLEdBQUwsQ0FBUyxLQUFLa0IsT0FBTCxFQUFULEVBQXlCdEIsS0FBS0MsR0FBTCxDQUFTLEtBQUtzQixPQUFMLEVBQVQsRUFBeUJsQyxNQUFNcEUsT0FBL0IsQ0FBekIsQ0FBaEI7QUFDQSxRQUFLdUcsS0FBTCxDQUFXbkMsTUFBTXBFLE9BQWpCO0FBQ0E7QUFOQyxFQTFJVyxFQWlKWDtBQUNGa0IsVUFBUSxDQUFFLFVBQUYsQ0FETjtBQUVGQyxPQUFLLGVBQVc7QUFDZixRQUFLcUYsT0FBTCxDQUFhLEtBQUtULFdBQUwsQ0FBaUIsS0FBS2hILFFBQXRCLENBQWI7QUFDQTtBQUpDLEVBakpXLEVBc0pYO0FBQ0ZtQyxVQUFRLENBQUUsT0FBRixFQUFXLFVBQVgsRUFBdUIsT0FBdkIsRUFBZ0MsVUFBaEMsQ0FETjtBQUVGQyxPQUFLLGVBQVc7QUFDZixPQUFJa0IsTUFBTSxLQUFLN0QsUUFBTCxDQUFjNkQsR0FBZCxHQUFvQixDQUFwQixHQUF3QixDQUFDLENBQW5DO0FBQUEsT0FDQzJELFVBQVUsS0FBS3hILFFBQUwsQ0FBY3dELFlBQWQsR0FBNkIsQ0FEeEM7QUFBQSxPQUVDeUUsUUFBUSxLQUFLVixXQUFMLENBQWlCLEtBQUsvRixPQUFMLEVBQWpCLElBQW1DZ0csT0FGNUM7QUFBQSxPQUdDVSxNQUFNRCxRQUFRLEtBQUt0QyxLQUFMLEtBQWU5QixHQUg5QjtBQUFBLE9BSUNzRSxLQUpEO0FBQUEsT0FJUUMsS0FKUjtBQUFBLE9BSWVDLFVBQVUsRUFKekI7QUFBQSxPQUk2QnZHLENBSjdCO0FBQUEsT0FJZ0N3RyxDQUpoQzs7QUFNQSxRQUFLeEcsSUFBSSxDQUFKLEVBQU93RyxJQUFJLEtBQUs3SCxZQUFMLENBQWtCNEYsTUFBbEMsRUFBMEN2RSxJQUFJd0csQ0FBOUMsRUFBaUR4RyxHQUFqRCxFQUFzRDtBQUNyRHFHLFlBQVEsS0FBSzFILFlBQUwsQ0FBa0JxQixJQUFJLENBQXRCLEtBQTRCLENBQXBDO0FBQ0FzRyxZQUFRN0IsS0FBS2tCLEdBQUwsQ0FBUyxLQUFLaEgsWUFBTCxDQUFrQnFCLENBQWxCLENBQVQsSUFBaUMwRixVQUFVM0QsR0FBbkQ7O0FBRUEsUUFBSyxLQUFLMEUsRUFBTCxDQUFRSixLQUFSLEVBQWUsSUFBZixFQUFxQkYsS0FBckIsS0FBZ0MsS0FBS00sRUFBTCxDQUFRSixLQUFSLEVBQWUsR0FBZixFQUFvQkQsR0FBcEIsQ0FBakMsSUFDQyxLQUFLSyxFQUFMLENBQVFILEtBQVIsRUFBZSxHQUFmLEVBQW9CSCxLQUFwQixLQUE4QixLQUFLTSxFQUFMLENBQVFILEtBQVIsRUFBZSxHQUFmLEVBQW9CRixHQUFwQixDQURuQyxFQUM4RDtBQUM3REcsYUFBUTVGLElBQVIsQ0FBYVgsQ0FBYjtBQUNBO0FBQ0Q7O0FBRUQsUUFBS2dFLE1BQUwsQ0FBWUMsUUFBWixDQUFxQixTQUFyQixFQUFnQ3lDLFdBQWhDLENBQTRDLFFBQTVDO0FBQ0EsUUFBSzFDLE1BQUwsQ0FBWUMsUUFBWixDQUFxQixTQUFTc0MsUUFBUUksSUFBUixDQUFhLFNBQWIsQ0FBVCxHQUFtQyxHQUF4RCxFQUE2RHRCLFFBQTdELENBQXNFLFFBQXRFOztBQUVBLFFBQUtyQixNQUFMLENBQVlDLFFBQVosQ0FBcUIsU0FBckIsRUFBZ0N5QyxXQUFoQyxDQUE0QyxRQUE1QztBQUNBLE9BQUksS0FBS3hJLFFBQUwsQ0FBY2dELE1BQWxCLEVBQTBCO0FBQ3pCLFNBQUs4QyxNQUFMLENBQVlDLFFBQVosR0FBdUIyQixFQUF2QixDQUEwQixLQUFLbEcsT0FBTCxFQUExQixFQUEwQzJGLFFBQTFDLENBQW1ELFFBQW5EO0FBQ0E7QUFDRDtBQTFCQyxFQXRKVyxDQUFkOztBQW1MQTs7O0FBR0F0SCxLQUFJNkksU0FBSixDQUFjQyxlQUFkLEdBQWdDLFlBQVc7QUFDMUMsT0FBSzdDLE1BQUwsR0FBYyxLQUFLM0YsUUFBTCxDQUFjeUksSUFBZCxDQUFtQixNQUFNLEtBQUs1SSxRQUFMLENBQWNpRixVQUF2QyxDQUFkOztBQUVBO0FBQ0EsTUFBSSxLQUFLYSxNQUFMLENBQVlPLE1BQWhCLEVBQXdCO0FBQ3ZCO0FBQ0E7O0FBRUQsT0FBS2xHLFFBQUwsQ0FBY2dILFFBQWQsQ0FBdUIsS0FBS3BILE9BQUwsQ0FBYTZFLFlBQXBDOztBQUVBO0FBQ0EsT0FBS2tCLE1BQUwsR0FBY3JHLEVBQUUsTUFBTSxLQUFLTyxRQUFMLENBQWN5RSxZQUFwQixHQUFtQyxHQUFyQyxFQUEwQztBQUN2RCxZQUFTLEtBQUt6RSxRQUFMLENBQWNpRjtBQURnQyxHQUExQyxFQUVYNEQsSUFGVyxDQUVMcEosRUFBRyxRQUFILEVBQWE7QUFDckIsWUFBUyxLQUFLTyxRQUFMLENBQWNrRjtBQURGLEdBQWIsQ0FGSyxDQUFkOztBQU1BO0FBQ0EsT0FBSy9FLFFBQUwsQ0FBYzRHLE1BQWQsQ0FBcUIsS0FBS2pCLE1BQUwsQ0FBWWdELE1BQVosRUFBckI7QUFDQSxFQW5CRDs7QUFxQkE7OztBQUdBakosS0FBSTZJLFNBQUosQ0FBY0ssZUFBZCxHQUFnQyxZQUFXO0FBQzFDLE1BQUlDLFNBQVMsS0FBSzdJLFFBQUwsQ0FBY3lJLElBQWQsQ0FBbUIsV0FBbkIsQ0FBYjs7QUFFQTtBQUNBLE1BQUlJLE9BQU8zQyxNQUFYLEVBQW1CO0FBQ2xCLFFBQUt6RixNQUFMLEdBQWNvSSxPQUFPQyxHQUFQLEdBQWFDLEdBQWIsQ0FBaUIsVUFBU0MsSUFBVCxFQUFlO0FBQzdDLFdBQU8xSixFQUFFMEosSUFBRixDQUFQO0FBQ0EsSUFGYSxDQUFkOztBQUlBLFFBQUtySSxRQUFMLEdBQWdCLEtBQUtGLE1BQUwsQ0FBWXNJLEdBQVosQ0FBZ0IsWUFBVztBQUMxQyxXQUFPLENBQVA7QUFDQSxJQUZlLENBQWhCOztBQUlBLFFBQUtFLE9BQUw7O0FBRUE7QUFDQTs7QUFFRDtBQUNBLE9BQUtDLE9BQUwsQ0FBYSxLQUFLbEosUUFBTCxDQUFjNEYsUUFBZCxHQUF5QnVELEdBQXpCLENBQTZCLEtBQUt4RCxNQUFMLENBQVlnRCxNQUFaLEVBQTdCLENBQWI7O0FBRUE7QUFDQSxNQUFJLEtBQUtTLFNBQUwsRUFBSixFQUFzQjtBQUNyQjtBQUNBLFFBQUtILE9BQUw7QUFDQSxHQUhELE1BR087QUFDTjtBQUNBLFFBQUtJLFVBQUwsQ0FBZ0IsT0FBaEI7QUFDQTs7QUFFRCxPQUFLckosUUFBTCxDQUNFcUksV0FERixDQUNjLEtBQUt6SSxPQUFMLENBQWE2RSxZQUQzQixFQUVFdUMsUUFGRixDQUVXLEtBQUtwSCxPQUFMLENBQWE0RSxXQUZ4QjtBQUdBLEVBakNEOztBQW1DQTs7OztBQUlBOUUsS0FBSTZJLFNBQUosQ0FBYzdGLFVBQWQsR0FBMkIsWUFBVztBQUNyQyxPQUFLNEcsS0FBTCxDQUFXLGNBQVg7QUFDQSxPQUFLQyxPQUFMLENBQWEsWUFBYjs7QUFFQSxPQUFLdkosUUFBTCxDQUFjd0osV0FBZCxDQUEwQixLQUFLM0osUUFBTCxDQUFjNkUsUUFBeEMsRUFBa0QsS0FBSzdFLFFBQUwsQ0FBYzZELEdBQWhFOztBQUVBLE1BQUksS0FBSzdELFFBQUwsQ0FBYzJELFNBQWQsSUFBMkIsQ0FBQyxLQUFLaUcsRUFBTCxDQUFRLGFBQVIsQ0FBaEMsRUFBd0Q7QUFDdkQsT0FBSUMsSUFBSixFQUFVQyxjQUFWLEVBQTBCbkUsS0FBMUI7QUFDQWtFLFVBQU8sS0FBSzFKLFFBQUwsQ0FBY3lJLElBQWQsQ0FBbUIsS0FBbkIsQ0FBUDtBQUNBa0Isb0JBQWlCLEtBQUs5SixRQUFMLENBQWN1RSxrQkFBZCxHQUFtQyxNQUFNLEtBQUt2RSxRQUFMLENBQWN1RSxrQkFBdkQsR0FBNEUzRSxTQUE3RjtBQUNBK0YsV0FBUSxLQUFLeEYsUUFBTCxDQUFjNEYsUUFBZCxDQUF1QitELGNBQXZCLEVBQXVDbkUsS0FBdkMsRUFBUjs7QUFFQSxPQUFJa0UsS0FBS3hELE1BQUwsSUFBZVYsU0FBUyxDQUE1QixFQUErQjtBQUM5QixTQUFLb0Usc0JBQUwsQ0FBNEJGLElBQTVCO0FBQ0E7QUFDRDs7QUFFRCxPQUFLbEIsZUFBTDtBQUNBLE9BQUtJLGVBQUw7O0FBRUE7QUFDQSxPQUFLaUIscUJBQUw7O0FBRUEsT0FBS0MsS0FBTCxDQUFXLGNBQVg7QUFDQSxPQUFLUCxPQUFMLENBQWEsYUFBYjtBQUNBLEVBekJEOztBQTJCQTs7Ozs7QUFLQTdKLEtBQUk2SSxTQUFKLENBQWNhLFNBQWQsR0FBMEIsWUFBVztBQUNwQyxTQUFPLEtBQUt2SixRQUFMLENBQWNrRCxlQUFkLEdBQ0osS0FBSy9DLFFBQUwsQ0FBY3lKLEVBQWQsQ0FBaUIsVUFBakIsQ0FESSxHQUVKLElBRkg7QUFHQSxFQUpEOztBQU1BOzs7Ozs7QUFNQS9KLEtBQUk2SSxTQUFKLENBQWM5RixLQUFkLEdBQXNCLFlBQVc7QUFDaEMsTUFBSXNILFdBQVcsS0FBS0EsUUFBTCxFQUFmO0FBQUEsTUFDQ0MsYUFBYSxLQUFLcEssT0FBTCxDQUFha0UsVUFEM0I7QUFBQSxNQUVDbUcsUUFBUSxDQUFDLENBRlY7QUFBQSxNQUdDcEssV0FBVyxJQUhaOztBQUtBLE1BQUksQ0FBQ21LLFVBQUwsRUFBaUI7QUFDaEJuSyxjQUFXUCxFQUFFUSxNQUFGLENBQVMsRUFBVCxFQUFhLEtBQUtGLE9BQWxCLENBQVg7QUFDQSxHQUZELE1BRU87QUFDTk4sS0FBRW1DLElBQUYsQ0FBT3VJLFVBQVAsRUFBbUIsVUFBU0UsVUFBVCxFQUFxQjtBQUN2QyxRQUFJQSxjQUFjSCxRQUFkLElBQTBCRyxhQUFhRCxLQUEzQyxFQUFrRDtBQUNqREEsYUFBUUUsT0FBT0QsVUFBUCxDQUFSO0FBQ0E7QUFDRCxJQUpEOztBQU1BckssY0FBV1AsRUFBRVEsTUFBRixDQUFTLEVBQVQsRUFBYSxLQUFLRixPQUFsQixFQUEyQm9LLFdBQVdDLEtBQVgsQ0FBM0IsQ0FBWDtBQUNBLE9BQUksT0FBT3BLLFNBQVN3RCxZQUFoQixLQUFpQyxVQUFyQyxFQUFpRDtBQUNoRHhELGFBQVN3RCxZQUFULEdBQXdCeEQsU0FBU3dELFlBQVQsRUFBeEI7QUFDQTtBQUNELFVBQU94RCxTQUFTaUUsVUFBaEI7O0FBRUE7QUFDQSxPQUFJakUsU0FBUzhFLGVBQWIsRUFBOEI7QUFDN0IsU0FBSzNFLFFBQUwsQ0FBY29LLElBQWQsQ0FBbUIsT0FBbkIsRUFDQyxLQUFLcEssUUFBTCxDQUFjb0ssSUFBZCxDQUFtQixPQUFuQixFQUE0QmxCLE9BQTVCLENBQW9DLElBQUltQixNQUFKLENBQVcsTUFBTSxLQUFLekssT0FBTCxDQUFhK0UsZUFBbkIsR0FBcUMsV0FBaEQsRUFBNkQsR0FBN0QsQ0FBcEMsRUFBdUcsT0FBT3NGLEtBQTlHLENBREQ7QUFHQTtBQUNEOztBQUVELE9BQUtWLE9BQUwsQ0FBYSxRQUFiLEVBQXVCLEVBQUVlLFVBQVUsRUFBRUMsTUFBTSxVQUFSLEVBQW9CQyxPQUFPM0ssUUFBM0IsRUFBWixFQUF2QjtBQUNBLE9BQUtVLFdBQUwsR0FBbUIwSixLQUFuQjtBQUNBLE9BQUtwSyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLE9BQUt3SixVQUFMLENBQWdCLFVBQWhCO0FBQ0EsT0FBS0UsT0FBTCxDQUFhLFNBQWIsRUFBd0IsRUFBRWUsVUFBVSxFQUFFQyxNQUFNLFVBQVIsRUFBb0JDLE9BQU8sS0FBSzNLLFFBQWhDLEVBQVosRUFBeEI7QUFDQSxFQWxDRDs7QUFvQ0E7Ozs7QUFJQUgsS0FBSTZJLFNBQUosQ0FBY2tDLFlBQWQsR0FBNkIsWUFBVztBQUN2QyxNQUFJLEtBQUs1SyxRQUFMLENBQWMyRCxTQUFsQixFQUE2QjtBQUM1QixRQUFLM0QsUUFBTCxDQUFjd0QsWUFBZCxHQUE2QixLQUE3QjtBQUNBLFFBQUt4RCxRQUFMLENBQWN5RCxLQUFkLEdBQXNCLEtBQXRCO0FBQ0E7QUFDRCxFQUxEOztBQU9BOzs7Ozs7QUFNQTVELEtBQUk2SSxTQUFKLENBQWNtQyxPQUFkLEdBQXdCLFVBQVMxQixJQUFULEVBQWU7QUFDdEMsTUFBSTJCLFFBQVEsS0FBS3BCLE9BQUwsQ0FBYSxTQUFiLEVBQXdCLEVBQUVxQixTQUFTNUIsSUFBWCxFQUF4QixDQUFaOztBQUVBLE1BQUksQ0FBQzJCLE1BQU1FLElBQVgsRUFBaUI7QUFDaEJGLFNBQU1FLElBQU4sR0FBYXZMLEVBQUUsTUFBTSxLQUFLTyxRQUFMLENBQWN3RSxXQUFwQixHQUFrQyxJQUFwQyxFQUNYMkMsUUFEVyxDQUNGLEtBQUtwSCxPQUFMLENBQWFpRixTQURYLEVBQ3NCK0IsTUFEdEIsQ0FDNkJvQyxJQUQ3QixDQUFiO0FBRUE7O0FBRUQsT0FBS08sT0FBTCxDQUFhLFVBQWIsRUFBeUIsRUFBRXFCLFNBQVNELE1BQU1FLElBQWpCLEVBQXpCOztBQUVBLFNBQU9GLE1BQU1FLElBQWI7QUFDQSxFQVhEOztBQWFBOzs7O0FBSUFuTCxLQUFJNkksU0FBSixDQUFjdUMsTUFBZCxHQUF1QixZQUFXO0FBQ2pDLE1BQUluSixJQUFJLENBQVI7QUFBQSxNQUNDd0csSUFBSSxLQUFLckgsS0FBTCxDQUFXb0YsTUFEaEI7QUFBQSxNQUVDM0QsU0FBU2pELEVBQUVvQyxLQUFGLENBQVEsVUFBU3FKLENBQVQsRUFBWTtBQUFFLFVBQU8sS0FBS0EsQ0FBTCxDQUFQO0FBQWdCLEdBQXRDLEVBQXdDLEtBQUtsSyxZQUE3QyxDQUZWO0FBQUEsTUFHQzRFLFFBQVEsRUFIVDs7QUFLQSxTQUFPOUQsSUFBSXdHLENBQVgsRUFBYztBQUNiLE9BQUksS0FBS3RILFlBQUwsQ0FBa0JtSyxHQUFsQixJQUF5QjFMLEVBQUUyTCxJQUFGLENBQU8sS0FBS25LLEtBQUwsQ0FBV2EsQ0FBWCxFQUFjWSxNQUFyQixFQUE2QkEsTUFBN0IsRUFBcUMyRCxNQUFyQyxHQUE4QyxDQUEzRSxFQUE4RTtBQUM3RSxTQUFLcEYsS0FBTCxDQUFXYSxDQUFYLEVBQWNhLEdBQWQsQ0FBa0JpRCxLQUFsQjtBQUNBO0FBQ0Q5RDtBQUNBOztBQUVELE9BQUtkLFlBQUwsR0FBb0IsRUFBcEI7O0FBRUEsR0FBQyxLQUFLNEksRUFBTCxDQUFRLE9BQVIsQ0FBRCxJQUFxQixLQUFLSCxLQUFMLENBQVcsT0FBWCxDQUFyQjtBQUNBLEVBaEJEOztBQWtCQTs7Ozs7O0FBTUE1SixLQUFJNkksU0FBSixDQUFjL0MsS0FBZCxHQUFzQixVQUFTMEYsU0FBVCxFQUFvQjtBQUN6Q0EsY0FBWUEsYUFBYXhMLElBQUl1RixLQUFKLENBQVVDLE9BQW5DO0FBQ0EsVUFBUWdHLFNBQVI7QUFDQyxRQUFLeEwsSUFBSXVGLEtBQUosQ0FBVUUsS0FBZjtBQUNBLFFBQUt6RixJQUFJdUYsS0FBSixDQUFVRyxLQUFmO0FBQ0MsV0FBTyxLQUFLNUUsTUFBWjtBQUNEO0FBQ0MsV0FBTyxLQUFLQSxNQUFMLEdBQWMsS0FBS1gsUUFBTCxDQUFjd0QsWUFBZCxHQUE2QixDQUEzQyxHQUErQyxLQUFLeEQsUUFBTCxDQUFjdUQsTUFBcEU7QUFMRjtBQU9BLEVBVEQ7O0FBV0E7Ozs7QUFJQTFELEtBQUk2SSxTQUFKLENBQWNVLE9BQWQsR0FBd0IsWUFBVztBQUNsQyxPQUFLSyxLQUFMLENBQVcsWUFBWDtBQUNBLE9BQUtDLE9BQUwsQ0FBYSxTQUFiOztBQUVBLE9BQUs5RyxLQUFMOztBQUVBLE9BQUtnSSxZQUFMOztBQUVBLE9BQUt6SyxRQUFMLENBQWNnSCxRQUFkLENBQXVCLEtBQUtwSCxPQUFMLENBQWEyRSxZQUFwQzs7QUFFQSxPQUFLdUcsTUFBTDs7QUFFQSxPQUFLOUssUUFBTCxDQUFjcUksV0FBZCxDQUEwQixLQUFLekksT0FBTCxDQUFhMkUsWUFBdkM7O0FBRUEsT0FBS3VGLEtBQUwsQ0FBVyxZQUFYO0FBQ0EsT0FBS1AsT0FBTCxDQUFhLFdBQWI7QUFDQSxFQWhCRDs7QUFrQkE7Ozs7QUFJQTdKLEtBQUk2SSxTQUFKLENBQWM0QyxpQkFBZCxHQUFrQyxZQUFXO0FBQzVDNUwsU0FBTzZMLFlBQVAsQ0FBb0IsS0FBS0MsV0FBekI7QUFDQSxPQUFLQSxXQUFMLEdBQW1COUwsT0FBTytMLFVBQVAsQ0FBa0IsS0FBS3JMLFNBQUwsQ0FBZXNMLFFBQWpDLEVBQTJDLEtBQUsxTCxRQUFMLENBQWNrRSxxQkFBekQsQ0FBbkI7QUFDQSxFQUhEOztBQUtBOzs7O0FBSUFyRSxLQUFJNkksU0FBSixDQUFjZ0QsUUFBZCxHQUF5QixZQUFXO0FBQ25DLE1BQUksQ0FBQyxLQUFLOUssTUFBTCxDQUFZeUYsTUFBakIsRUFBeUI7QUFDeEIsVUFBTyxLQUFQO0FBQ0E7O0FBRUQsTUFBSSxLQUFLMUYsTUFBTCxLQUFnQixLQUFLUixRQUFMLENBQWN3RixLQUFkLEVBQXBCLEVBQTJDO0FBQzFDLFVBQU8sS0FBUDtBQUNBOztBQUVELE1BQUksQ0FBQyxLQUFLNEQsU0FBTCxFQUFMLEVBQXVCO0FBQ3RCLFVBQU8sS0FBUDtBQUNBOztBQUVELE9BQUtFLEtBQUwsQ0FBVyxVQUFYOztBQUVBLE1BQUksS0FBS0MsT0FBTCxDQUFhLFFBQWIsRUFBdUJpQyxrQkFBdkIsRUFBSixFQUFpRDtBQUNoRCxRQUFLMUIsS0FBTCxDQUFXLFVBQVg7QUFDQSxVQUFPLEtBQVA7QUFDQTs7QUFFRCxPQUFLVCxVQUFMLENBQWdCLE9BQWhCOztBQUVBLE9BQUtKLE9BQUw7O0FBRUEsT0FBS2EsS0FBTCxDQUFXLFVBQVg7QUFDQSxPQUFLUCxPQUFMLENBQWEsU0FBYjtBQUNBLEVBMUJEOztBQTRCQTs7Ozs7O0FBTUE3SixLQUFJNkksU0FBSixDQUFjc0IscUJBQWQsR0FBc0MsWUFBVztBQUNoRCxNQUFJdkssRUFBRW1NLE9BQUYsQ0FBVUMsVUFBZCxFQUEwQjtBQUN6QixRQUFLL0YsTUFBTCxDQUFZZ0csRUFBWixDQUFlck0sRUFBRW1NLE9BQUYsQ0FBVUMsVUFBVixDQUFxQjNELEdBQXJCLEdBQTJCLFdBQTFDLEVBQXVEekksRUFBRW9DLEtBQUYsQ0FBUSxLQUFLa0ssZUFBYixFQUE4QixJQUE5QixDQUF2RDtBQUNBOztBQUVELE1BQUksS0FBSy9MLFFBQUwsQ0FBY2lFLFVBQWQsS0FBNkIsS0FBakMsRUFBd0M7QUFDdkMsUUFBSzZILEVBQUwsQ0FBUXBNLE1BQVIsRUFBZ0IsUUFBaEIsRUFBMEIsS0FBS1UsU0FBTCxDQUFla0wsaUJBQXpDO0FBQ0E7O0FBRUQsTUFBSSxLQUFLdEwsUUFBTCxDQUFjbUQsU0FBbEIsRUFBNkI7QUFDNUIsUUFBS2hELFFBQUwsQ0FBY2dILFFBQWQsQ0FBdUIsS0FBS3BILE9BQUwsQ0FBYWdGLFNBQXBDO0FBQ0EsUUFBS2UsTUFBTCxDQUFZZ0csRUFBWixDQUFlLG9CQUFmLEVBQXFDck0sRUFBRW9DLEtBQUYsQ0FBUSxLQUFLbUssV0FBYixFQUEwQixJQUExQixDQUFyQztBQUNBLFFBQUtsRyxNQUFMLENBQVlnRyxFQUFaLENBQWUseUNBQWYsRUFBMEQsWUFBVztBQUFFLFdBQU8sS0FBUDtBQUFjLElBQXJGO0FBQ0E7O0FBRUQsTUFBSSxLQUFLOUwsUUFBTCxDQUFjb0QsU0FBbEIsRUFBNEI7QUFDM0IsUUFBSzBDLE1BQUwsQ0FBWWdHLEVBQVosQ0FBZSxxQkFBZixFQUFzQ3JNLEVBQUVvQyxLQUFGLENBQVEsS0FBS21LLFdBQWIsRUFBMEIsSUFBMUIsQ0FBdEM7QUFDQSxRQUFLbEcsTUFBTCxDQUFZZ0csRUFBWixDQUFlLHNCQUFmLEVBQXVDck0sRUFBRW9DLEtBQUYsQ0FBUSxLQUFLb0ssU0FBYixFQUF3QixJQUF4QixDQUF2QztBQUNBO0FBQ0QsRUFuQkQ7O0FBcUJBOzs7Ozs7O0FBT0FwTSxLQUFJNkksU0FBSixDQUFjc0QsV0FBZCxHQUE0QixVQUFTbEIsS0FBVCxFQUFnQjtBQUMzQyxNQUFJeEosUUFBUSxJQUFaOztBQUVBLE1BQUl3SixNQUFNb0IsS0FBTixLQUFnQixDQUFwQixFQUF1QjtBQUN0QjtBQUNBOztBQUVELE1BQUl6TSxFQUFFbU0sT0FBRixDQUFVTyxTQUFkLEVBQXlCO0FBQ3hCN0ssV0FBUSxLQUFLd0UsTUFBTCxDQUFZSSxHQUFaLENBQWdCLFdBQWhCLEVBQTZCbUQsT0FBN0IsQ0FBcUMsWUFBckMsRUFBbUQsRUFBbkQsRUFBdUQrQyxLQUF2RCxDQUE2RCxHQUE3RCxDQUFSO0FBQ0E5SyxXQUFRO0FBQ1ArSyxPQUFHL0ssTUFBTUEsTUFBTStFLE1BQU4sS0FBaUIsRUFBakIsR0FBc0IsRUFBdEIsR0FBMkIsQ0FBakMsQ0FESTtBQUVQaUcsT0FBR2hMLE1BQU1BLE1BQU0rRSxNQUFOLEtBQWlCLEVBQWpCLEdBQXNCLEVBQXRCLEdBQTJCLENBQWpDO0FBRkksSUFBUjtBQUlBLEdBTkQsTUFNTztBQUNOL0UsV0FBUSxLQUFLd0UsTUFBTCxDQUFZeUcsUUFBWixFQUFSO0FBQ0FqTCxXQUFRO0FBQ1ArSyxPQUFHLEtBQUtyTSxRQUFMLENBQWM2RCxHQUFkLEdBQ0Z2QyxNQUFNa0wsSUFBTixHQUFhLEtBQUsxRyxNQUFMLENBQVlILEtBQVosRUFBYixHQUFtQyxLQUFLQSxLQUFMLEVBQW5DLEdBQWtELEtBQUszRixRQUFMLENBQWN1RCxNQUQ5RCxHQUVGakMsTUFBTWtMLElBSEE7QUFJUEYsT0FBR2hMLE1BQU1tTDtBQUpGLElBQVI7QUFNQTs7QUFFRCxNQUFJLEtBQUs3QyxFQUFMLENBQVEsV0FBUixDQUFKLEVBQTBCO0FBQ3pCbkssS0FBRW1NLE9BQUYsQ0FBVU8sU0FBVixHQUFzQixLQUFLbkUsT0FBTCxDQUFhMUcsTUFBTStLLENBQW5CLENBQXRCLEdBQThDLEtBQUt2RyxNQUFMLENBQVk0RyxJQUFaLEVBQTlDO0FBQ0EsUUFBS2xELFVBQUwsQ0FBZ0IsVUFBaEI7QUFDQTs7QUFFRCxPQUFLckosUUFBTCxDQUFjd0osV0FBZCxDQUEwQixLQUFLNUosT0FBTCxDQUFhb0YsU0FBdkMsRUFBa0QyRixNQUFNNkIsSUFBTixLQUFlLFdBQWpFOztBQUVBLE9BQUtDLEtBQUwsQ0FBVyxDQUFYOztBQUVBLE9BQUsxTCxLQUFMLENBQVdDLElBQVgsR0FBa0IsSUFBSTBMLElBQUosR0FBV0MsT0FBWCxFQUFsQjtBQUNBLE9BQUs1TCxLQUFMLENBQVdFLE1BQVgsR0FBb0IzQixFQUFFcUwsTUFBTTFKLE1BQVIsQ0FBcEI7QUFDQSxPQUFLRixLQUFMLENBQVdJLEtBQVgsQ0FBaUJDLEtBQWpCLEdBQXlCRCxLQUF6QjtBQUNBLE9BQUtKLEtBQUwsQ0FBV0ksS0FBWCxDQUFpQkUsT0FBakIsR0FBMkJGLEtBQTNCO0FBQ0EsT0FBS0osS0FBTCxDQUFXRyxPQUFYLEdBQXFCLEtBQUtBLE9BQUwsQ0FBYXlKLEtBQWIsQ0FBckI7O0FBRUFyTCxJQUFFRSxRQUFGLEVBQVltTSxFQUFaLENBQWUsb0NBQWYsRUFBcURyTSxFQUFFb0MsS0FBRixDQUFRLEtBQUtvSyxTQUFiLEVBQXdCLElBQXhCLENBQXJEOztBQUVBeE0sSUFBRUUsUUFBRixFQUFZb04sR0FBWixDQUFnQix1Q0FBaEIsRUFBeUR0TixFQUFFb0MsS0FBRixDQUFRLFVBQVNpSixLQUFULEVBQWdCO0FBQ2hGLE9BQUlrQyxRQUFRLEtBQUtDLFVBQUwsQ0FBZ0IsS0FBSy9MLEtBQUwsQ0FBV0csT0FBM0IsRUFBb0MsS0FBS0EsT0FBTCxDQUFheUosS0FBYixDQUFwQyxDQUFaOztBQUVBckwsS0FBRUUsUUFBRixFQUFZbU0sRUFBWixDQUFlLHVDQUFmLEVBQXdEck0sRUFBRW9DLEtBQUYsQ0FBUSxLQUFLcUwsVUFBYixFQUF5QixJQUF6QixDQUF4RDs7QUFFQSxPQUFJM0csS0FBS2tCLEdBQUwsQ0FBU3VGLE1BQU1YLENBQWYsSUFBb0I5RixLQUFLa0IsR0FBTCxDQUFTdUYsTUFBTVYsQ0FBZixDQUFwQixJQUF5QyxLQUFLMUMsRUFBTCxDQUFRLE9BQVIsQ0FBN0MsRUFBK0Q7QUFDOUQ7QUFDQTs7QUFFRGtCLFNBQU1xQyxjQUFOOztBQUVBLFFBQUsxRCxLQUFMLENBQVcsVUFBWDtBQUNBLFFBQUtDLE9BQUwsQ0FBYSxNQUFiO0FBQ0EsR0Fid0QsRUFhdEQsSUFic0QsQ0FBekQ7QUFjQSxFQXRERDs7QUF3REE7Ozs7OztBQU1BN0osS0FBSTZJLFNBQUosQ0FBY3dFLFVBQWQsR0FBMkIsVUFBU3BDLEtBQVQsRUFBZ0I7QUFDMUMsTUFBSWpELFVBQVUsSUFBZDtBQUFBLE1BQ0NDLFVBQVUsSUFEWDtBQUFBLE1BRUNzRixPQUFPLElBRlI7QUFBQSxNQUdDSixRQUFRLEtBQUtDLFVBQUwsQ0FBZ0IsS0FBSy9MLEtBQUwsQ0FBV0csT0FBM0IsRUFBb0MsS0FBS0EsT0FBTCxDQUFheUosS0FBYixDQUFwQyxDQUhUO0FBQUEsTUFJQ3hKLFFBQVEsS0FBSzJMLFVBQUwsQ0FBZ0IsS0FBSy9MLEtBQUwsQ0FBV0ksS0FBWCxDQUFpQkMsS0FBakMsRUFBd0N5TCxLQUF4QyxDQUpUOztBQU1BLE1BQUksQ0FBQyxLQUFLcEQsRUFBTCxDQUFRLFVBQVIsQ0FBTCxFQUEwQjtBQUN6QjtBQUNBOztBQUVEa0IsUUFBTXFDLGNBQU47O0FBRUEsTUFBSSxLQUFLbk4sUUFBTCxDQUFjK0MsSUFBbEIsRUFBd0I7QUFDdkI4RSxhQUFVLEtBQUtOLFdBQUwsQ0FBaUIsS0FBS00sT0FBTCxFQUFqQixDQUFWO0FBQ0FDLGFBQVUsS0FBS1AsV0FBTCxDQUFpQixLQUFLTyxPQUFMLEtBQWlCLENBQWxDLElBQXVDRCxPQUFqRDtBQUNBdkcsU0FBTStLLENBQU4sR0FBVyxDQUFDLENBQUMvSyxNQUFNK0ssQ0FBTixHQUFVeEUsT0FBWCxJQUFzQkMsT0FBdEIsR0FBZ0NBLE9BQWpDLElBQTRDQSxPQUE3QyxHQUF3REQsT0FBbEU7QUFDQSxHQUpELE1BSU87QUFDTkEsYUFBVSxLQUFLN0gsUUFBTCxDQUFjNkQsR0FBZCxHQUFvQixLQUFLMEQsV0FBTCxDQUFpQixLQUFLTyxPQUFMLEVBQWpCLENBQXBCLEdBQXVELEtBQUtQLFdBQUwsQ0FBaUIsS0FBS00sT0FBTCxFQUFqQixDQUFqRTtBQUNBQyxhQUFVLEtBQUs5SCxRQUFMLENBQWM2RCxHQUFkLEdBQW9CLEtBQUswRCxXQUFMLENBQWlCLEtBQUtNLE9BQUwsRUFBakIsQ0FBcEIsR0FBdUQsS0FBS04sV0FBTCxDQUFpQixLQUFLTyxPQUFMLEVBQWpCLENBQWpFO0FBQ0FzRixVQUFPLEtBQUtwTixRQUFMLENBQWNxRCxRQUFkLEdBQXlCLENBQUMsQ0FBRCxHQUFLMkosTUFBTVgsQ0FBWCxHQUFlLENBQXhDLEdBQTRDLENBQW5EO0FBQ0EvSyxTQUFNK0ssQ0FBTixHQUFVOUYsS0FBS0ksR0FBTCxDQUFTSixLQUFLQyxHQUFMLENBQVNsRixNQUFNK0ssQ0FBZixFQUFrQnhFLFVBQVV1RixJQUE1QixDQUFULEVBQTRDdEYsVUFBVXNGLElBQXRELENBQVY7QUFDQTs7QUFFRCxPQUFLbE0sS0FBTCxDQUFXSSxLQUFYLENBQWlCRSxPQUFqQixHQUEyQkYsS0FBM0I7O0FBRUEsT0FBSzBHLE9BQUwsQ0FBYTFHLE1BQU0rSyxDQUFuQjtBQUNBLEVBM0JEOztBQTZCQTs7Ozs7OztBQU9BeE0sS0FBSTZJLFNBQUosQ0FBY3VELFNBQWQsR0FBMEIsVUFBU25CLEtBQVQsRUFBZ0I7QUFDekMsTUFBSWtDLFFBQVEsS0FBS0MsVUFBTCxDQUFnQixLQUFLL0wsS0FBTCxDQUFXRyxPQUEzQixFQUFvQyxLQUFLQSxPQUFMLENBQWF5SixLQUFiLENBQXBDLENBQVo7QUFBQSxNQUNDeEosUUFBUSxLQUFLSixLQUFMLENBQVdJLEtBQVgsQ0FBaUJFLE9BRDFCO0FBQUEsTUFFQ0MsWUFBWXVMLE1BQU1YLENBQU4sR0FBVSxDQUFWLEdBQWMsS0FBS3JNLFFBQUwsQ0FBYzZELEdBQTVCLEdBQWtDLE1BQWxDLEdBQTJDLE9BRnhEOztBQUlBcEUsSUFBRUUsUUFBRixFQUFZME4sR0FBWixDQUFnQixXQUFoQjs7QUFFQSxPQUFLbE4sUUFBTCxDQUFjcUksV0FBZCxDQUEwQixLQUFLekksT0FBTCxDQUFhb0YsU0FBdkM7O0FBRUEsTUFBSTZILE1BQU1YLENBQU4sS0FBWSxDQUFaLElBQWlCLEtBQUt6QyxFQUFMLENBQVEsVUFBUixDQUFqQixJQUF3QyxDQUFDLEtBQUtBLEVBQUwsQ0FBUSxPQUFSLENBQTdDLEVBQStEO0FBQzlELFFBQUtnRCxLQUFMLENBQVcsS0FBSzVNLFFBQUwsQ0FBY2dFLFlBQWQsSUFBOEIsS0FBS2hFLFFBQUwsQ0FBYzhELFVBQXZEO0FBQ0EsUUFBS3RDLE9BQUwsQ0FBYSxLQUFLOEwsT0FBTCxDQUFhaE0sTUFBTStLLENBQW5CLEVBQXNCVyxNQUFNWCxDQUFOLEtBQVksQ0FBWixHQUFnQjVLLFNBQWhCLEdBQTRCLEtBQUtQLEtBQUwsQ0FBV08sU0FBN0QsQ0FBYjtBQUNBLFFBQUsrSCxVQUFMLENBQWdCLFVBQWhCO0FBQ0EsUUFBS3lCLE1BQUw7O0FBRUEsUUFBSy9KLEtBQUwsQ0FBV08sU0FBWCxHQUF1QkEsU0FBdkI7O0FBRUEsT0FBSThFLEtBQUtrQixHQUFMLENBQVN1RixNQUFNWCxDQUFmLElBQW9CLENBQXBCLElBQXlCLElBQUlRLElBQUosR0FBV0MsT0FBWCxLQUF1QixLQUFLNUwsS0FBTCxDQUFXQyxJQUFsQyxHQUF5QyxHQUF0RSxFQUEyRTtBQUMxRSxTQUFLRCxLQUFMLENBQVdFLE1BQVgsQ0FBa0IyTCxHQUFsQixDQUFzQixnQkFBdEIsRUFBd0MsWUFBVztBQUFFLFlBQU8sS0FBUDtBQUFlLEtBQXBFO0FBQ0E7QUFDRDs7QUFFRCxNQUFJLENBQUMsS0FBS25ELEVBQUwsQ0FBUSxVQUFSLENBQUwsRUFBMEI7QUFDekI7QUFDQTs7QUFFRCxPQUFLSyxLQUFMLENBQVcsVUFBWDtBQUNBLE9BQUtQLE9BQUwsQ0FBYSxTQUFiO0FBQ0EsRUE1QkQ7O0FBOEJBOzs7Ozs7OztBQVFBN0osS0FBSTZJLFNBQUosQ0FBYzRFLE9BQWQsR0FBd0IsVUFBU0MsVUFBVCxFQUFxQjlMLFNBQXJCLEVBQWdDO0FBQ3ZELE1BQUk4SyxXQUFXLENBQUMsQ0FBaEI7QUFBQSxNQUNDYSxPQUFPLEVBRFI7QUFBQSxNQUVDekgsUUFBUSxLQUFLQSxLQUFMLEVBRlQ7QUFBQSxNQUdDNEIsY0FBYyxLQUFLQSxXQUFMLEVBSGY7O0FBS0EsTUFBSSxDQUFDLEtBQUt2SCxRQUFMLENBQWNzRCxRQUFuQixFQUE2QjtBQUM1QjtBQUNBN0QsS0FBRW1DLElBQUYsQ0FBTzJGLFdBQVAsRUFBb0I5SCxFQUFFb0MsS0FBRixDQUFRLFVBQVMrRixLQUFULEVBQWdCK0MsS0FBaEIsRUFBdUI7QUFDbEQ7QUFDQSxRQUFJbEosY0FBYyxNQUFkLElBQXdCOEwsYUFBYTVDLFFBQVF5QyxJQUE3QyxJQUFxREcsYUFBYTVDLFFBQVF5QyxJQUE5RSxFQUFvRjtBQUNuRmIsZ0JBQVczRSxLQUFYO0FBQ0Q7QUFDQTtBQUNDLEtBSkQsTUFJTyxJQUFJbkcsY0FBYyxPQUFkLElBQXlCOEwsYUFBYTVDLFFBQVFoRixLQUFSLEdBQWdCeUgsSUFBdEQsSUFBOERHLGFBQWE1QyxRQUFRaEYsS0FBUixHQUFnQnlILElBQS9GLEVBQXFHO0FBQzNHYixnQkFBVzNFLFFBQVEsQ0FBbkI7QUFDQSxLQUZNLE1BRUEsSUFBSSxLQUFLVyxFQUFMLENBQVFnRixVQUFSLEVBQW9CLEdBQXBCLEVBQXlCNUMsS0FBekIsS0FDUCxLQUFLcEMsRUFBTCxDQUFRZ0YsVUFBUixFQUFvQixHQUFwQixFQUF5QmhHLFlBQVlLLFFBQVEsQ0FBcEIsTUFBMkJoSSxTQUEzQixHQUF1QzJILFlBQVlLLFFBQVEsQ0FBcEIsQ0FBdkMsR0FBZ0UrQyxRQUFRaEYsS0FBakcsQ0FERyxFQUNzRztBQUM1RzRHLGdCQUFXOUssY0FBYyxNQUFkLEdBQXVCbUcsUUFBUSxDQUEvQixHQUFtQ0EsS0FBOUM7QUFDQTtBQUNELFdBQU8yRSxhQUFhLENBQUMsQ0FBckI7QUFDQSxJQWJtQixFQWFqQixJQWJpQixDQUFwQjtBQWNBOztBQUVELE1BQUksQ0FBQyxLQUFLdk0sUUFBTCxDQUFjK0MsSUFBbkIsRUFBeUI7QUFDeEI7QUFDQSxPQUFJLEtBQUt3RixFQUFMLENBQVFnRixVQUFSLEVBQW9CLEdBQXBCLEVBQXlCaEcsWUFBWSxLQUFLTSxPQUFMLEVBQVosQ0FBekIsQ0FBSixFQUEyRDtBQUMxRDBFLGVBQVdnQixhQUFhLEtBQUsxRixPQUFMLEVBQXhCO0FBQ0EsSUFGRCxNQUVPLElBQUksS0FBS1UsRUFBTCxDQUFRZ0YsVUFBUixFQUFvQixHQUFwQixFQUF5QmhHLFlBQVksS0FBS08sT0FBTCxFQUFaLENBQXpCLENBQUosRUFBMkQ7QUFDakV5RSxlQUFXZ0IsYUFBYSxLQUFLekYsT0FBTCxFQUF4QjtBQUNBO0FBQ0Q7O0FBRUQsU0FBT3lFLFFBQVA7QUFDQSxFQWxDRDs7QUFvQ0E7Ozs7OztBQU1BMU0sS0FBSTZJLFNBQUosQ0FBY1YsT0FBZCxHQUF3QixVQUFTdUYsVUFBVCxFQUFxQjtBQUM1QyxNQUFJdkYsVUFBVSxLQUFLNEUsS0FBTCxLQUFlLENBQTdCOztBQUVBLE9BQUtoRCxFQUFMLENBQVEsV0FBUixLQUF3QixLQUFLbUMsZUFBTCxFQUF4Qjs7QUFFQSxNQUFJL0QsT0FBSixFQUFhO0FBQ1osUUFBS3lCLEtBQUwsQ0FBVyxXQUFYO0FBQ0EsUUFBS0MsT0FBTCxDQUFhLFdBQWI7QUFDQTs7QUFFRCxNQUFJakssRUFBRW1NLE9BQUYsQ0FBVTRCLFdBQVYsSUFBeUIvTixFQUFFbU0sT0FBRixDQUFVQyxVQUF2QyxFQUFtRDtBQUNsRCxRQUFLL0YsTUFBTCxDQUFZSSxHQUFaLENBQWdCO0FBQ2ZpRyxlQUFXLGlCQUFpQm9CLFVBQWpCLEdBQThCLGFBRDFCO0FBRWYxQixnQkFBYSxLQUFLZSxLQUFMLEtBQWUsSUFBaEIsR0FBd0IsR0FBeEIsSUFDWCxLQUFLNU0sUUFBTCxDQUFjcUUsZUFBZCxHQUFnQyxNQUFNLEtBQUtyRSxRQUFMLENBQWNxRSxlQUFwRCxHQUFzRSxFQUQzRDtBQUZHLElBQWhCO0FBTUEsR0FQRCxNQU9PLElBQUkyRCxPQUFKLEVBQWE7QUFDbkIsUUFBS2xDLE1BQUwsQ0FBWWtDLE9BQVosQ0FBb0I7QUFDbkJ3RSxVQUFNZSxhQUFhO0FBREEsSUFBcEIsRUFFRyxLQUFLWCxLQUFMLEVBRkgsRUFFaUIsS0FBSzVNLFFBQUwsQ0FBY29FLGNBRi9CLEVBRStDM0UsRUFBRW9DLEtBQUYsQ0FBUSxLQUFLa0ssZUFBYixFQUE4QixJQUE5QixDQUYvQztBQUdBLEdBSk0sTUFJQTtBQUNOLFFBQUtqRyxNQUFMLENBQVlJLEdBQVosQ0FBZ0I7QUFDZnNHLFVBQU1lLGFBQWE7QUFESixJQUFoQjtBQUdBO0FBQ0QsRUExQkQ7O0FBNEJBOzs7OztBQUtBMU4sS0FBSTZJLFNBQUosQ0FBY2tCLEVBQWQsR0FBbUIsVUFBUzZELEtBQVQsRUFBZ0I7QUFDbEMsU0FBTyxLQUFLL0wsT0FBTCxDQUFhRixPQUFiLENBQXFCaU0sS0FBckIsS0FBK0IsS0FBSy9MLE9BQUwsQ0FBYUYsT0FBYixDQUFxQmlNLEtBQXJCLElBQThCLENBQXBFO0FBQ0EsRUFGRDs7QUFJQTs7Ozs7O0FBTUE1TixLQUFJNkksU0FBSixDQUFjbEgsT0FBZCxHQUF3QixVQUFTK0ssUUFBVCxFQUFtQjtBQUMxQyxNQUFJQSxhQUFhM00sU0FBakIsRUFBNEI7QUFDM0IsVUFBTyxLQUFLVyxRQUFaO0FBQ0E7O0FBRUQsTUFBSSxLQUFLSyxNQUFMLENBQVl5RixNQUFaLEtBQXVCLENBQTNCLEVBQThCO0FBQzdCLFVBQU96RyxTQUFQO0FBQ0E7O0FBRUQyTSxhQUFXLEtBQUt0RixTQUFMLENBQWVzRixRQUFmLENBQVg7O0FBRUEsTUFBSSxLQUFLaE0sUUFBTCxLQUFrQmdNLFFBQXRCLEVBQWdDO0FBQy9CLE9BQUl6QixRQUFRLEtBQUtwQixPQUFMLENBQWEsUUFBYixFQUF1QixFQUFFZSxVQUFVLEVBQUVDLE1BQU0sVUFBUixFQUFvQkMsT0FBTzRCLFFBQTNCLEVBQVosRUFBdkIsQ0FBWjs7QUFFQSxPQUFJekIsTUFBTUUsSUFBTixLQUFlcEwsU0FBbkIsRUFBOEI7QUFDN0IyTSxlQUFXLEtBQUt0RixTQUFMLENBQWU2RCxNQUFNRSxJQUFyQixDQUFYO0FBQ0E7O0FBRUQsUUFBS3pLLFFBQUwsR0FBZ0JnTSxRQUFoQjs7QUFFQSxRQUFLL0MsVUFBTCxDQUFnQixVQUFoQjs7QUFFQSxRQUFLRSxPQUFMLENBQWEsU0FBYixFQUF3QixFQUFFZSxVQUFVLEVBQUVDLE1BQU0sVUFBUixFQUFvQkMsT0FBTyxLQUFLcEssUUFBaEMsRUFBWixFQUF4QjtBQUNBOztBQUVELFNBQU8sS0FBS0EsUUFBWjtBQUNBLEVBMUJEOztBQTRCQTs7Ozs7QUFLQVYsS0FBSTZJLFNBQUosQ0FBY2MsVUFBZCxHQUEyQixVQUFTa0UsSUFBVCxFQUFlO0FBQ3pDLE1BQUlqTyxFQUFFa04sSUFBRixDQUFPZSxJQUFQLE1BQWlCLFFBQXJCLEVBQStCO0FBQzlCLFFBQUsxTSxZQUFMLENBQWtCME0sSUFBbEIsSUFBMEIsSUFBMUI7QUFDQSxRQUFLOUQsRUFBTCxDQUFRLE9BQVIsS0FBb0IsS0FBS0ssS0FBTCxDQUFXLE9BQVgsQ0FBcEI7QUFDQTtBQUNELFNBQU94SyxFQUFFeUosR0FBRixDQUFNLEtBQUtsSSxZQUFYLEVBQXlCLFVBQVMyTSxDQUFULEVBQVk3TCxDQUFaLEVBQWU7QUFBRSxVQUFPQSxDQUFQO0FBQVUsR0FBcEQsQ0FBUDtBQUNBLEVBTkQ7O0FBUUE7Ozs7O0FBS0FqQyxLQUFJNkksU0FBSixDQUFjWCxLQUFkLEdBQXNCLFVBQVN3RSxRQUFULEVBQW1CO0FBQ3hDQSxhQUFXLEtBQUt0RixTQUFMLENBQWVzRixRQUFmLENBQVg7O0FBRUEsTUFBSUEsYUFBYTNNLFNBQWpCLEVBQTRCO0FBQzNCO0FBQ0E7O0FBRUQsT0FBS1ksTUFBTCxHQUFjLENBQWQ7QUFDQSxPQUFLRCxRQUFMLEdBQWdCZ00sUUFBaEI7O0FBRUEsT0FBS3FCLFFBQUwsQ0FBYyxDQUFFLFdBQUYsRUFBZSxZQUFmLENBQWQ7O0FBRUEsT0FBSzVGLE9BQUwsQ0FBYSxLQUFLVCxXQUFMLENBQWlCZ0YsUUFBakIsQ0FBYjs7QUFFQSxPQUFLc0IsT0FBTCxDQUFhLENBQUUsV0FBRixFQUFlLFlBQWYsQ0FBYjtBQUNBLEVBZkQ7O0FBaUJBOzs7Ozs7O0FBT0FoTyxLQUFJNkksU0FBSixDQUFjekIsU0FBZCxHQUEwQixVQUFTc0YsUUFBVCxFQUFtQjFHLFFBQW5CLEVBQTZCO0FBQ3RELE1BQUl5QyxJQUFJLEtBQUsxSCxNQUFMLENBQVl5RixNQUFwQjtBQUFBLE1BQ0N5SCxJQUFJakksV0FBVyxDQUFYLEdBQWUsS0FBS2hGLE9BQUwsQ0FBYXdGLE1BRGpDOztBQUdBLE1BQUksQ0FBQyxLQUFLMEgsU0FBTCxDQUFleEIsUUFBZixDQUFELElBQTZCakUsSUFBSSxDQUFyQyxFQUF3QztBQUN2Q2lFLGNBQVczTSxTQUFYO0FBQ0EsR0FGRCxNQUVPLElBQUkyTSxXQUFXLENBQVgsSUFBZ0JBLFlBQVlqRSxJQUFJd0YsQ0FBcEMsRUFBdUM7QUFDN0N2QixjQUFXLENBQUMsQ0FBQ0EsV0FBV3VCLElBQUksQ0FBaEIsSUFBcUJ4RixDQUFyQixHQUF5QkEsQ0FBMUIsSUFBK0JBLENBQS9CLEdBQW1Dd0YsSUFBSSxDQUFsRDtBQUNBOztBQUVELFNBQU92QixRQUFQO0FBQ0EsRUFYRDs7QUFhQTs7Ozs7O0FBTUExTSxLQUFJNkksU0FBSixDQUFjN0MsUUFBZCxHQUF5QixVQUFTMEcsUUFBVCxFQUFtQjtBQUMzQ0EsY0FBWSxLQUFLMUwsT0FBTCxDQUFhd0YsTUFBYixHQUFzQixDQUFsQztBQUNBLFNBQU8sS0FBS1ksU0FBTCxDQUFlc0YsUUFBZixFQUF5QixJQUF6QixDQUFQO0FBQ0EsRUFIRDs7QUFLQTs7Ozs7O0FBTUExTSxLQUFJNkksU0FBSixDQUFjWixPQUFkLEdBQXdCLFVBQVNqQyxRQUFULEVBQW1CO0FBQzFDLE1BQUk3RixXQUFXLEtBQUtBLFFBQXBCO0FBQUEsTUFDQzhILFVBQVUsS0FBS3JILFlBQUwsQ0FBa0I0RixNQUQ3QjtBQUFBLE1BRUNELFFBRkQ7QUFBQSxNQUdDNEgsb0JBSEQ7QUFBQSxNQUlDQyxZQUpEOztBQU1BLE1BQUlqTyxTQUFTK0MsSUFBYixFQUFtQjtBQUNsQitFLGFBQVUsS0FBS2pILE9BQUwsQ0FBYXdGLE1BQWIsR0FBc0IsQ0FBdEIsR0FBMEIsS0FBS3pGLE1BQUwsQ0FBWXlGLE1BQXRDLEdBQStDLENBQXpEO0FBQ0EsR0FGRCxNQUVPLElBQUlyRyxTQUFTMkQsU0FBVCxJQUFzQjNELFNBQVN5RCxLQUFuQyxFQUEwQztBQUNoRDJDLGNBQVcsS0FBS3hGLE1BQUwsQ0FBWXlGLE1BQXZCO0FBQ0EsT0FBSUQsUUFBSixFQUFjO0FBQ2I0SCwyQkFBdUIsS0FBS3BOLE1BQUwsQ0FBWSxFQUFFd0YsUUFBZCxFQUF3QlQsS0FBeEIsRUFBdkI7QUFDQXNJLG1CQUFlLEtBQUs5TixRQUFMLENBQWN3RixLQUFkLEVBQWY7QUFDQSxXQUFPUyxVQUFQLEVBQW1CO0FBQ2xCNEgsNkJBQXdCLEtBQUtwTixNQUFMLENBQVl3RixRQUFaLEVBQXNCVCxLQUF0QixLQUFnQyxLQUFLM0YsUUFBTCxDQUFjdUQsTUFBdEU7QUFDQSxTQUFJeUssdUJBQXVCQyxZQUEzQixFQUF5QztBQUN4QztBQUNBO0FBQ0Q7QUFDRDtBQUNEbkcsYUFBVTFCLFdBQVcsQ0FBckI7QUFDQSxHQWJNLE1BYUEsSUFBSXBHLFNBQVNnRCxNQUFiLEVBQXFCO0FBQzNCOEUsYUFBVSxLQUFLbEgsTUFBTCxDQUFZeUYsTUFBWixHQUFxQixDQUEvQjtBQUNBLEdBRk0sTUFFQTtBQUNOeUIsYUFBVSxLQUFLbEgsTUFBTCxDQUFZeUYsTUFBWixHQUFxQnJHLFNBQVM4QyxLQUF4QztBQUNBOztBQUVELE1BQUkrQyxRQUFKLEVBQWM7QUFDYmlDLGNBQVcsS0FBS2pILE9BQUwsQ0FBYXdGLE1BQWIsR0FBc0IsQ0FBakM7QUFDQTs7QUFFRCxTQUFPRSxLQUFLSSxHQUFMLENBQVNtQixPQUFULEVBQWtCLENBQWxCLENBQVA7QUFDQSxFQWpDRDs7QUFtQ0E7Ozs7OztBQU1BakksS0FBSTZJLFNBQUosQ0FBY2IsT0FBZCxHQUF3QixVQUFTaEMsUUFBVCxFQUFtQjtBQUMxQyxTQUFPQSxXQUFXLENBQVgsR0FBZSxLQUFLaEYsT0FBTCxDQUFhd0YsTUFBYixHQUFzQixDQUE1QztBQUNBLEVBRkQ7O0FBSUE7Ozs7OztBQU1BeEcsS0FBSTZJLFNBQUosQ0FBYzVGLEtBQWQsR0FBc0IsVUFBU3lKLFFBQVQsRUFBbUI7QUFDeEMsTUFBSUEsYUFBYTNNLFNBQWpCLEVBQTRCO0FBQzNCLFVBQU8sS0FBS2dCLE1BQUwsQ0FBWXlCLEtBQVosRUFBUDtBQUNBOztBQUVEa0ssYUFBVyxLQUFLdEYsU0FBTCxDQUFlc0YsUUFBZixFQUF5QixJQUF6QixDQUFYO0FBQ0EsU0FBTyxLQUFLM0wsTUFBTCxDQUFZMkwsUUFBWixDQUFQO0FBQ0EsRUFQRDs7QUFTQTs7Ozs7O0FBTUExTSxLQUFJNkksU0FBSixDQUFjd0YsT0FBZCxHQUF3QixVQUFTM0IsUUFBVCxFQUFtQjtBQUMxQyxNQUFJQSxhQUFhM00sU0FBakIsRUFBNEI7QUFDM0IsVUFBTyxLQUFLa0IsUUFBTCxDQUFjdUIsS0FBZCxFQUFQO0FBQ0E7O0FBRURrSyxhQUFXLEtBQUt0RixTQUFMLENBQWVzRixRQUFmLEVBQXlCLElBQXpCLENBQVg7QUFDQSxTQUFPLEtBQUt6TCxRQUFMLENBQWN5TCxRQUFkLENBQVA7QUFDQSxFQVBEOztBQVNBOzs7Ozs7QUFNQTFNLEtBQUk2SSxTQUFKLENBQWNqQyxNQUFkLEdBQXVCLFVBQVM4RixRQUFULEVBQW1CO0FBQ3pDLE1BQUk0QixNQUFNLEtBQUt0TixPQUFMLENBQWF3RixNQUFiLEdBQXNCLENBQWhDO0FBQUEsTUFDQytILE9BQU9ELE1BQU0sS0FBS3ZOLE1BQUwsQ0FBWXlGLE1BRDFCO0FBQUEsTUFFQzZDLE1BQU0sU0FBTkEsR0FBTSxDQUFTdEIsS0FBVCxFQUFnQjtBQUFFLFVBQU9BLFFBQVEsQ0FBUixLQUFjLENBQWQsR0FBa0J3RyxPQUFPeEcsUUFBUSxDQUFqQyxHQUFxQ3VHLE1BQU0sQ0FBQ3ZHLFFBQVEsQ0FBVCxJQUFjLENBQWhFO0FBQW1FLEdBRjVGOztBQUlBLE1BQUkyRSxhQUFhM00sU0FBakIsRUFBNEI7QUFDM0IsVUFBT0gsRUFBRXlKLEdBQUYsQ0FBTSxLQUFLckksT0FBWCxFQUFvQixVQUFTOE0sQ0FBVCxFQUFZN0wsQ0FBWixFQUFlO0FBQUUsV0FBT29ILElBQUlwSCxDQUFKLENBQVA7QUFBZSxJQUFwRCxDQUFQO0FBQ0E7O0FBRUQsU0FBT3JDLEVBQUV5SixHQUFGLENBQU0sS0FBS3JJLE9BQVgsRUFBb0IsVUFBUzhNLENBQVQsRUFBWTdMLENBQVosRUFBZTtBQUFFLFVBQU82TCxNQUFNcEIsUUFBTixHQUFpQnJELElBQUlwSCxDQUFKLENBQWpCLEdBQTBCLElBQWpDO0FBQXVDLEdBQTVFLENBQVA7QUFDQSxFQVZEOztBQVlBOzs7Ozs7QUFNQWpDLEtBQUk2SSxTQUFKLENBQWNrRSxLQUFkLEdBQXNCLFVBQVNBLEtBQVQsRUFBZ0I7QUFDckMsTUFBSUEsVUFBVWhOLFNBQWQsRUFBeUI7QUFDeEIsUUFBS1ksTUFBTCxHQUFjb00sS0FBZDtBQUNBOztBQUVELFNBQU8sS0FBS3BNLE1BQVo7QUFDQSxFQU5EOztBQVFBOzs7Ozs7O0FBT0FYLEtBQUk2SSxTQUFKLENBQWNuQixXQUFkLEdBQTRCLFVBQVNnRixRQUFULEVBQW1CO0FBQzlDLE1BQUk4QixhQUFhLENBQWpCO0FBQUEsTUFDQ0MsY0FBYy9CLFdBQVcsQ0FEMUI7QUFBQSxNQUVDZ0IsVUFGRDs7QUFJQSxNQUFJaEIsYUFBYTNNLFNBQWpCLEVBQTRCO0FBQzNCLFVBQU9ILEVBQUV5SixHQUFGLENBQU0sS0FBS3pJLFlBQVgsRUFBeUJoQixFQUFFb0MsS0FBRixDQUFRLFVBQVMwTCxVQUFULEVBQXFCM0YsS0FBckIsRUFBNEI7QUFDbkUsV0FBTyxLQUFLTCxXQUFMLENBQWlCSyxLQUFqQixDQUFQO0FBQ0EsSUFGK0IsRUFFN0IsSUFGNkIsQ0FBekIsQ0FBUDtBQUdBOztBQUVELE1BQUksS0FBSzVILFFBQUwsQ0FBY2dELE1BQWxCLEVBQTBCO0FBQ3pCLE9BQUksS0FBS2hELFFBQUwsQ0FBYzZELEdBQWxCLEVBQXVCO0FBQ3RCd0ssaUJBQWEsQ0FBQyxDQUFkO0FBQ0FDLGtCQUFjL0IsV0FBVyxDQUF6QjtBQUNBOztBQUVEZ0IsZ0JBQWEsS0FBSzlNLFlBQUwsQ0FBa0I4TCxRQUFsQixDQUFiO0FBQ0FnQixpQkFBYyxDQUFDLEtBQUs1SCxLQUFMLEtBQWU0SCxVQUFmLElBQTZCLEtBQUs5TSxZQUFMLENBQWtCNk4sV0FBbEIsS0FBa0MsQ0FBL0QsQ0FBRCxJQUFzRSxDQUF0RSxHQUEwRUQsVUFBeEY7QUFDQSxHQVJELE1BUU87QUFDTmQsZ0JBQWEsS0FBSzlNLFlBQUwsQ0FBa0I2TixXQUFsQixLQUFrQyxDQUEvQztBQUNBOztBQUVEZixlQUFhaEgsS0FBS00sSUFBTCxDQUFVMEcsVUFBVixDQUFiOztBQUVBLFNBQU9BLFVBQVA7QUFDQSxFQTFCRDs7QUE0QkE7Ozs7Ozs7O0FBUUExTixLQUFJNkksU0FBSixDQUFjNkYsUUFBZCxHQUF5QixVQUFTQyxJQUFULEVBQWVDLEVBQWYsRUFBbUJDLE1BQW5CLEVBQTJCO0FBQ25ELE1BQUlBLFdBQVcsQ0FBZixFQUFrQjtBQUNqQixVQUFPLENBQVA7QUFDQTs7QUFFRCxTQUFPbkksS0FBS0MsR0FBTCxDQUFTRCxLQUFLSSxHQUFMLENBQVNKLEtBQUtrQixHQUFMLENBQVNnSCxLQUFLRCxJQUFkLENBQVQsRUFBOEIsQ0FBOUIsQ0FBVCxFQUEyQyxDQUEzQyxJQUFnRGpJLEtBQUtrQixHQUFMLENBQVVpSCxVQUFVLEtBQUsxTyxRQUFMLENBQWM4RCxVQUFsQyxDQUF2RDtBQUNBLEVBTkQ7O0FBUUE7Ozs7OztBQU1BakUsS0FBSTZJLFNBQUosQ0FBYytGLEVBQWQsR0FBbUIsVUFBU2xDLFFBQVQsRUFBbUJLLEtBQW5CLEVBQTBCO0FBQzVDLE1BQUlwTCxVQUFVLEtBQUtBLE9BQUwsRUFBZDtBQUFBLE1BQ0NtTixTQUFTLElBRFY7QUFBQSxNQUVDQyxXQUFXckMsV0FBVyxLQUFLMUcsUUFBTCxDQUFjckUsT0FBZCxDQUZ2QjtBQUFBLE1BR0NDLFlBQVksQ0FBQ21OLFdBQVcsQ0FBWixLQUFrQkEsV0FBVyxDQUE3QixDQUhiO0FBQUEsTUFJQzlMLFFBQVEsS0FBS2xDLE1BQUwsQ0FBWXlGLE1BSnJCO0FBQUEsTUFLQ3dCLFVBQVUsS0FBS0EsT0FBTCxFQUxYO0FBQUEsTUFNQ0MsVUFBVSxLQUFLQSxPQUFMLEVBTlg7O0FBUUEsTUFBSSxLQUFLOUgsUUFBTCxDQUFjK0MsSUFBbEIsRUFBd0I7QUFDdkIsT0FBSSxDQUFDLEtBQUsvQyxRQUFMLENBQWNpRCxNQUFmLElBQXlCc0QsS0FBS2tCLEdBQUwsQ0FBU21ILFFBQVQsSUFBcUI5TCxRQUFRLENBQTFELEVBQTZEO0FBQzVEOEwsZ0JBQVluTixZQUFZLENBQUMsQ0FBYixHQUFpQnFCLEtBQTdCO0FBQ0E7O0FBRUR5SixjQUFXL0ssVUFBVW9OLFFBQXJCO0FBQ0FELFlBQVMsQ0FBQyxDQUFDcEMsV0FBVzFFLE9BQVosSUFBdUIvRSxLQUF2QixHQUErQkEsS0FBaEMsSUFBeUNBLEtBQXpDLEdBQWlEK0UsT0FBMUQ7O0FBRUEsT0FBSThHLFdBQVdwQyxRQUFYLElBQXVCb0MsU0FBU0MsUUFBVCxJQUFxQjlHLE9BQTVDLElBQXVENkcsU0FBU0MsUUFBVCxHQUFvQixDQUEvRSxFQUFrRjtBQUNqRnBOLGNBQVVtTixTQUFTQyxRQUFuQjtBQUNBckMsZUFBV29DLE1BQVg7QUFDQSxTQUFLNUcsS0FBTCxDQUFXdkcsT0FBWDtBQUNBO0FBQ0QsR0FiRCxNQWFPLElBQUksS0FBS3hCLFFBQUwsQ0FBY2lELE1BQWxCLEVBQTBCO0FBQ2hDNkUsY0FBVyxDQUFYO0FBQ0F5RSxjQUFXLENBQUNBLFdBQVd6RSxPQUFYLEdBQXFCQSxPQUF0QixJQUFpQ0EsT0FBNUM7QUFDQSxHQUhNLE1BR0E7QUFDTnlFLGNBQVdoRyxLQUFLSSxHQUFMLENBQVNrQixPQUFULEVBQWtCdEIsS0FBS0MsR0FBTCxDQUFTc0IsT0FBVCxFQUFrQnlFLFFBQWxCLENBQWxCLENBQVg7QUFDQTs7QUFFRCxPQUFLSyxLQUFMLENBQVcsS0FBSzJCLFFBQUwsQ0FBYy9NLE9BQWQsRUFBdUIrSyxRQUF2QixFQUFpQ0ssS0FBakMsQ0FBWDtBQUNBLE9BQUtwTCxPQUFMLENBQWErSyxRQUFiOztBQUVBLE1BQUksS0FBS2hELFNBQUwsRUFBSixFQUFzQjtBQUNyQixRQUFLMEIsTUFBTDtBQUNBO0FBQ0QsRUFuQ0Q7O0FBcUNBOzs7OztBQUtBcEwsS0FBSTZJLFNBQUosQ0FBY21HLElBQWQsR0FBcUIsVUFBU2pDLEtBQVQsRUFBZ0I7QUFDcENBLFVBQVFBLFNBQVMsS0FBakI7QUFDQSxPQUFLNkIsRUFBTCxDQUFRLEtBQUs1SSxRQUFMLENBQWMsS0FBS3JFLE9BQUwsRUFBZCxJQUFnQyxDQUF4QyxFQUEyQ29MLEtBQTNDO0FBQ0EsRUFIRDs7QUFLQTs7Ozs7QUFLQS9NLEtBQUk2SSxTQUFKLENBQWNvRyxJQUFkLEdBQXFCLFVBQVNsQyxLQUFULEVBQWdCO0FBQ3BDQSxVQUFRQSxTQUFTLEtBQWpCO0FBQ0EsT0FBSzZCLEVBQUwsQ0FBUSxLQUFLNUksUUFBTCxDQUFjLEtBQUtyRSxPQUFMLEVBQWQsSUFBZ0MsQ0FBeEMsRUFBMkNvTCxLQUEzQztBQUNBLEVBSEQ7O0FBS0E7Ozs7O0FBS0EvTSxLQUFJNkksU0FBSixDQUFjcUQsZUFBZCxHQUFnQyxVQUFTakIsS0FBVCxFQUFnQjs7QUFFL0M7QUFDQSxNQUFJQSxVQUFVbEwsU0FBZCxFQUF5QjtBQUN4QmtMLFNBQU1pRSxlQUFOOztBQUVBO0FBQ0EsT0FBSSxDQUFDakUsTUFBTTFKLE1BQU4sSUFBZ0IwSixNQUFNa0UsVUFBdEIsSUFBb0NsRSxNQUFNbUUsY0FBM0MsTUFBK0QsS0FBS25KLE1BQUwsQ0FBWW1ELEdBQVosQ0FBZ0IsQ0FBaEIsQ0FBbkUsRUFBdUY7QUFDdEYsV0FBTyxLQUFQO0FBQ0E7QUFDRDs7QUFFRCxPQUFLZ0IsS0FBTCxDQUFXLFdBQVg7QUFDQSxPQUFLUCxPQUFMLENBQWEsWUFBYjtBQUNBLEVBZEQ7O0FBZ0JBOzs7OztBQUtBN0osS0FBSTZJLFNBQUosQ0FBY3dCLFFBQWQsR0FBeUIsWUFBVztBQUNuQyxNQUFJdkUsS0FBSjtBQUNBLE1BQUksS0FBSzVGLE9BQUwsQ0FBYW9FLHFCQUFiLEtBQXVDekUsTUFBM0MsRUFBbUQ7QUFDbERpRyxXQUFRbEcsRUFBRSxLQUFLTSxPQUFMLENBQWFvRSxxQkFBZixFQUFzQ3dCLEtBQXRDLEVBQVI7QUFDQSxHQUZELE1BRU8sSUFBSWpHLE9BQU93UCxVQUFYLEVBQXVCO0FBQzdCdkosV0FBUWpHLE9BQU93UCxVQUFmO0FBQ0EsR0FGTSxNQUVBLElBQUl2UCxTQUFTd1AsZUFBVCxJQUE0QnhQLFNBQVN3UCxlQUFULENBQXlCQyxXQUF6RCxFQUFzRTtBQUM1RXpKLFdBQVFoRyxTQUFTd1AsZUFBVCxDQUF5QkMsV0FBakM7QUFDQSxHQUZNLE1BRUE7QUFDTkMsV0FBUUMsSUFBUixDQUFhLGdDQUFiO0FBQ0E7QUFDRCxTQUFPM0osS0FBUDtBQUNBLEVBWkQ7O0FBY0E7Ozs7O0FBS0E5RixLQUFJNkksU0FBSixDQUFjVyxPQUFkLEdBQXdCLFVBQVMwQixPQUFULEVBQWtCO0FBQ3pDLE9BQUtqRixNQUFMLENBQVl5SixLQUFaO0FBQ0EsT0FBSzNPLE1BQUwsR0FBYyxFQUFkOztBQUVBLE1BQUltSyxPQUFKLEVBQWE7QUFDWkEsYUFBV0EsbUJBQW1CeUUsTUFBcEIsR0FBOEJ6RSxPQUE5QixHQUF3Q3RMLEVBQUVzTCxPQUFGLENBQWxEO0FBQ0E7O0FBRUQsTUFBSSxLQUFLL0ssUUFBTCxDQUFjdUUsa0JBQWxCLEVBQXNDO0FBQ3JDd0csYUFBVUEsUUFBUW5DLElBQVIsQ0FBYSxNQUFNLEtBQUs1SSxRQUFMLENBQWN1RSxrQkFBakMsQ0FBVjtBQUNBOztBQUVEd0csVUFBUXJJLE1BQVIsQ0FBZSxZQUFXO0FBQ3pCLFVBQU8sS0FBSytNLFFBQUwsS0FBa0IsQ0FBekI7QUFDQSxHQUZELEVBRUc3TixJQUZILENBRVFuQyxFQUFFb0MsS0FBRixDQUFRLFVBQVMrRixLQUFULEVBQWdCdUIsSUFBaEIsRUFBc0I7QUFDckNBLFVBQU8sS0FBSzBCLE9BQUwsQ0FBYTFCLElBQWIsQ0FBUDtBQUNBLFFBQUtyRCxNQUFMLENBQVlpQixNQUFaLENBQW1Cb0MsSUFBbkI7QUFDQSxRQUFLdkksTUFBTCxDQUFZNkIsSUFBWixDQUFpQjBHLElBQWpCO0FBQ0EsUUFBS3JJLFFBQUwsQ0FBYzJCLElBQWQsQ0FBbUIwRyxLQUFLUCxJQUFMLENBQVUsY0FBVixFQUEwQjhHLE9BQTFCLENBQWtDLGNBQWxDLEVBQWtEbkYsSUFBbEQsQ0FBdUQsWUFBdkQsSUFBdUUsQ0FBdkUsSUFBNEUsQ0FBL0Y7QUFDQSxHQUxPLEVBS0wsSUFMSyxDQUZSOztBQVNBLE9BQUt4QyxLQUFMLENBQVcsS0FBS2dHLFNBQUwsQ0FBZSxLQUFLL04sUUFBTCxDQUFjNEQsYUFBN0IsSUFBOEMsS0FBSzVELFFBQUwsQ0FBYzRELGFBQTVELEdBQTRFLENBQXZGOztBQUVBLE9BQUs0RixVQUFMLENBQWdCLE9BQWhCO0FBQ0EsRUF4QkQ7O0FBMEJBOzs7Ozs7O0FBT0EzSixLQUFJNkksU0FBSixDQUFjaUgsR0FBZCxHQUFvQixVQUFTNUUsT0FBVCxFQUFrQndCLFFBQWxCLEVBQTRCO0FBQy9DLE1BQUkvSyxVQUFVLEtBQUtxRSxRQUFMLENBQWMsS0FBS3RGLFFBQW5CLENBQWQ7O0FBRUFnTSxhQUFXQSxhQUFhM00sU0FBYixHQUF5QixLQUFLZ0IsTUFBTCxDQUFZeUYsTUFBckMsR0FBOEMsS0FBS1ksU0FBTCxDQUFlc0YsUUFBZixFQUF5QixJQUF6QixDQUF6RDtBQUNBeEIsWUFBVUEsbUJBQW1CeUUsTUFBbkIsR0FBNEJ6RSxPQUE1QixHQUFzQ3RMLEVBQUVzTCxPQUFGLENBQWhEOztBQUVBLE9BQUtyQixPQUFMLENBQWEsS0FBYixFQUFvQixFQUFFcUIsU0FBU0EsT0FBWCxFQUFvQndCLFVBQVVBLFFBQTlCLEVBQXBCOztBQUVBeEIsWUFBVSxLQUFLRixPQUFMLENBQWFFLE9BQWIsQ0FBVjs7QUFFQSxNQUFJLEtBQUtuSyxNQUFMLENBQVl5RixNQUFaLEtBQXVCLENBQXZCLElBQTRCa0csYUFBYSxLQUFLM0wsTUFBTCxDQUFZeUYsTUFBekQsRUFBaUU7QUFDaEUsUUFBS3pGLE1BQUwsQ0FBWXlGLE1BQVosS0FBdUIsQ0FBdkIsSUFBNEIsS0FBS1AsTUFBTCxDQUFZaUIsTUFBWixDQUFtQmdFLE9BQW5CLENBQTVCO0FBQ0EsUUFBS25LLE1BQUwsQ0FBWXlGLE1BQVosS0FBdUIsQ0FBdkIsSUFBNEIsS0FBS3pGLE1BQUwsQ0FBWTJMLFdBQVcsQ0FBdkIsRUFBMEJxRCxLQUExQixDQUFnQzdFLE9BQWhDLENBQTVCO0FBQ0EsUUFBS25LLE1BQUwsQ0FBWTZCLElBQVosQ0FBaUJzSSxPQUFqQjtBQUNBLFFBQUtqSyxRQUFMLENBQWMyQixJQUFkLENBQW1Cc0ksUUFBUW5DLElBQVIsQ0FBYSxjQUFiLEVBQTZCOEcsT0FBN0IsQ0FBcUMsY0FBckMsRUFBcURuRixJQUFyRCxDQUEwRCxZQUExRCxJQUEwRSxDQUExRSxJQUErRSxDQUFsRztBQUNBLEdBTEQsTUFLTztBQUNOLFFBQUszSixNQUFMLENBQVkyTCxRQUFaLEVBQXNCc0QsTUFBdEIsQ0FBNkI5RSxPQUE3QjtBQUNBLFFBQUtuSyxNQUFMLENBQVlrUCxNQUFaLENBQW1CdkQsUUFBbkIsRUFBNkIsQ0FBN0IsRUFBZ0N4QixPQUFoQztBQUNBLFFBQUtqSyxRQUFMLENBQWNnUCxNQUFkLENBQXFCdkQsUUFBckIsRUFBK0IsQ0FBL0IsRUFBa0N4QixRQUFRbkMsSUFBUixDQUFhLGNBQWIsRUFBNkI4RyxPQUE3QixDQUFxQyxjQUFyQyxFQUFxRG5GLElBQXJELENBQTBELFlBQTFELElBQTBFLENBQTFFLElBQStFLENBQWpIO0FBQ0E7O0FBRUQsT0FBSzNKLE1BQUwsQ0FBWVksT0FBWixLQUF3QixLQUFLdUcsS0FBTCxDQUFXLEtBQUtuSCxNQUFMLENBQVlZLE9BQVosRUFBcUJvRyxLQUFyQixFQUFYLENBQXhCOztBQUVBLE9BQUs0QixVQUFMLENBQWdCLE9BQWhCOztBQUVBLE9BQUtFLE9BQUwsQ0FBYSxPQUFiLEVBQXNCLEVBQUVxQixTQUFTQSxPQUFYLEVBQW9Cd0IsVUFBVUEsUUFBOUIsRUFBdEI7QUFDQSxFQTFCRDs7QUE0QkE7Ozs7OztBQU1BMU0sS0FBSTZJLFNBQUosQ0FBYzFDLE1BQWQsR0FBdUIsVUFBU3VHLFFBQVQsRUFBbUI7QUFDekNBLGFBQVcsS0FBS3RGLFNBQUwsQ0FBZXNGLFFBQWYsRUFBeUIsSUFBekIsQ0FBWDs7QUFFQSxNQUFJQSxhQUFhM00sU0FBakIsRUFBNEI7QUFDM0I7QUFDQTs7QUFFRCxPQUFLOEosT0FBTCxDQUFhLFFBQWIsRUFBdUIsRUFBRXFCLFNBQVMsS0FBS25LLE1BQUwsQ0FBWTJMLFFBQVosQ0FBWCxFQUFrQ0EsVUFBVUEsUUFBNUMsRUFBdkI7O0FBRUEsT0FBSzNMLE1BQUwsQ0FBWTJMLFFBQVosRUFBc0J2RyxNQUF0QjtBQUNBLE9BQUtwRixNQUFMLENBQVlrUCxNQUFaLENBQW1CdkQsUUFBbkIsRUFBNkIsQ0FBN0I7QUFDQSxPQUFLekwsUUFBTCxDQUFjZ1AsTUFBZCxDQUFxQnZELFFBQXJCLEVBQStCLENBQS9COztBQUVBLE9BQUsvQyxVQUFMLENBQWdCLE9BQWhCOztBQUVBLE9BQUtFLE9BQUwsQ0FBYSxTQUFiLEVBQXdCLEVBQUVxQixTQUFTLElBQVgsRUFBaUJ3QixVQUFVQSxRQUEzQixFQUF4QjtBQUNBLEVBaEJEOztBQWtCQTs7Ozs7QUFLQTFNLEtBQUk2SSxTQUFKLENBQWNxQixzQkFBZCxHQUF1QyxVQUFTZ0csTUFBVCxFQUFpQjtBQUN2REEsU0FBT25PLElBQVAsQ0FBWW5DLEVBQUVvQyxLQUFGLENBQVEsVUFBU0MsQ0FBVCxFQUFZaEMsT0FBWixFQUFxQjtBQUN4QyxRQUFLMkosS0FBTCxDQUFXLGFBQVg7QUFDQTNKLGFBQVVMLEVBQUVLLE9BQUYsQ0FBVjtBQUNBTCxLQUFFLElBQUl1USxLQUFKLEVBQUYsRUFBZWpELEdBQWYsQ0FBbUIsTUFBbkIsRUFBMkJ0TixFQUFFb0MsS0FBRixDQUFRLFVBQVNvTyxDQUFULEVBQVk7QUFDOUNuUSxZQUFReUssSUFBUixDQUFhLEtBQWIsRUFBb0IwRixFQUFFN08sTUFBRixDQUFTOE8sR0FBN0I7QUFDQXBRLFlBQVFvRyxHQUFSLENBQVksU0FBWixFQUF1QixDQUF2QjtBQUNBLFNBQUsrRCxLQUFMLENBQVcsYUFBWDtBQUNBLEtBQUMsS0FBS0wsRUFBTCxDQUFRLGFBQVIsQ0FBRCxJQUEyQixDQUFDLEtBQUtBLEVBQUwsQ0FBUSxjQUFSLENBQTVCLElBQXVELEtBQUtSLE9BQUwsRUFBdkQ7QUFDQSxJQUwwQixFQUt4QixJQUx3QixDQUEzQixFQUtVbUIsSUFMVixDQUtlLEtBTGYsRUFLc0J6SyxRQUFReUssSUFBUixDQUFhLEtBQWIsS0FBdUJ6SyxRQUFReUssSUFBUixDQUFhLFVBQWIsQ0FBdkIsSUFBbUR6SyxRQUFReUssSUFBUixDQUFhLGlCQUFiLENBTHpFO0FBTUEsR0FUVyxFQVNULElBVFMsQ0FBWjtBQVVBLEVBWEQ7O0FBYUE7Ozs7QUFJQTFLLEtBQUk2SSxTQUFKLENBQWN5SCxPQUFkLEdBQXdCLFlBQVc7O0FBRWxDLE9BQUtoUSxRQUFMLENBQWNrTixHQUFkLENBQWtCLFdBQWxCO0FBQ0EsT0FBS3ZILE1BQUwsQ0FBWXVILEdBQVosQ0FBZ0IsV0FBaEI7QUFDQTVOLElBQUVFLFFBQUYsRUFBWTBOLEdBQVosQ0FBZ0IsV0FBaEI7O0FBRUEsTUFBSSxLQUFLck4sUUFBTCxDQUFjaUUsVUFBZCxLQUE2QixLQUFqQyxFQUF3QztBQUN2Q3ZFLFVBQU82TCxZQUFQLENBQW9CLEtBQUtDLFdBQXpCO0FBQ0EsUUFBSzZCLEdBQUwsQ0FBUzNOLE1BQVQsRUFBaUIsUUFBakIsRUFBMkIsS0FBS1UsU0FBTCxDQUFla0wsaUJBQTFDO0FBQ0E7O0FBRUQsT0FBSyxJQUFJeEosQ0FBVCxJQUFjLEtBQUt6QixRQUFuQixFQUE2QjtBQUM1QixRQUFLQSxRQUFMLENBQWN5QixDQUFkLEVBQWlCcU8sT0FBakI7QUFDQTs7QUFFRCxPQUFLckssTUFBTCxDQUFZQyxRQUFaLENBQXFCLFNBQXJCLEVBQWdDQyxNQUFoQzs7QUFFQSxPQUFLRixNQUFMLENBQVlzSyxNQUFaO0FBQ0EsT0FBS3RLLE1BQUwsQ0FBWUMsUUFBWixHQUF1QnNLLFFBQXZCLEdBQWtDRCxNQUFsQztBQUNBLE9BQUt0SyxNQUFMLENBQVlDLFFBQVosR0FBdUJxSyxNQUF2QjtBQUNBLE9BQUt0SyxNQUFMLENBQVlFLE1BQVo7QUFDQSxPQUFLN0YsUUFBTCxDQUNFcUksV0FERixDQUNjLEtBQUt6SSxPQUFMLENBQWEyRSxZQUQzQixFQUVFOEQsV0FGRixDQUVjLEtBQUt6SSxPQUFMLENBQWE2RSxZQUYzQixFQUdFNEQsV0FIRixDQUdjLEtBQUt6SSxPQUFMLENBQWE0RSxXQUgzQixFQUlFNkQsV0FKRixDQUljLEtBQUt6SSxPQUFMLENBQWE4RSxRQUozQixFQUtFMkQsV0FMRixDQUtjLEtBQUt6SSxPQUFMLENBQWFnRixTQUwzQixFQU1FeUQsV0FORixDQU1jLEtBQUt6SSxPQUFMLENBQWFvRixTQU4zQixFQU9Fb0YsSUFQRixDQU9PLE9BUFAsRUFPZ0IsS0FBS3BLLFFBQUwsQ0FBY29LLElBQWQsQ0FBbUIsT0FBbkIsRUFBNEJsQixPQUE1QixDQUFvQyxJQUFJbUIsTUFBSixDQUFXLEtBQUt6SyxPQUFMLENBQWErRSxlQUFiLEdBQStCLFVBQTFDLEVBQXNELEdBQXRELENBQXBDLEVBQWdHLEVBQWhHLENBUGhCLEVBUUV3TCxVQVJGLENBUWEsY0FSYjtBQVNBLEVBOUJEOztBQWdDQTs7Ozs7OztBQU9BelEsS0FBSTZJLFNBQUosQ0FBY0gsRUFBZCxHQUFtQixVQUFTZ0ksQ0FBVCxFQUFZQyxDQUFaLEVBQWVDLENBQWYsRUFBa0I7QUFDcEMsTUFBSTVNLE1BQU0sS0FBSzdELFFBQUwsQ0FBYzZELEdBQXhCO0FBQ0EsVUFBUTJNLENBQVI7QUFDQyxRQUFLLEdBQUw7QUFDQyxXQUFPM00sTUFBTTBNLElBQUlFLENBQVYsR0FBY0YsSUFBSUUsQ0FBekI7QUFDRCxRQUFLLEdBQUw7QUFDQyxXQUFPNU0sTUFBTTBNLElBQUlFLENBQVYsR0FBY0YsSUFBSUUsQ0FBekI7QUFDRCxRQUFLLElBQUw7QUFDQyxXQUFPNU0sTUFBTTBNLEtBQUtFLENBQVgsR0FBZUYsS0FBS0UsQ0FBM0I7QUFDRCxRQUFLLElBQUw7QUFDQyxXQUFPNU0sTUFBTTBNLEtBQUtFLENBQVgsR0FBZUYsS0FBS0UsQ0FBM0I7QUFDRDtBQUNDO0FBVkY7QUFZQSxFQWREOztBQWdCQTs7Ozs7Ozs7QUFRQTVRLEtBQUk2SSxTQUFKLENBQWNvRCxFQUFkLEdBQW1CLFVBQVNoTSxPQUFULEVBQWtCZ0wsS0FBbEIsRUFBeUI0RixRQUF6QixFQUFtQ0MsT0FBbkMsRUFBNEM7QUFDOUQsTUFBSTdRLFFBQVE4USxnQkFBWixFQUE4QjtBQUM3QjlRLFdBQVE4USxnQkFBUixDQUF5QjlGLEtBQXpCLEVBQWdDNEYsUUFBaEMsRUFBMENDLE9BQTFDO0FBQ0EsR0FGRCxNQUVPLElBQUk3USxRQUFRK1EsV0FBWixFQUF5QjtBQUMvQi9RLFdBQVErUSxXQUFSLENBQW9CLE9BQU8vRixLQUEzQixFQUFrQzRGLFFBQWxDO0FBQ0E7QUFDRCxFQU5EOztBQVFBOzs7Ozs7OztBQVFBN1EsS0FBSTZJLFNBQUosQ0FBYzJFLEdBQWQsR0FBb0IsVUFBU3ZOLE9BQVQsRUFBa0JnTCxLQUFsQixFQUF5QjRGLFFBQXpCLEVBQW1DQyxPQUFuQyxFQUE0QztBQUMvRCxNQUFJN1EsUUFBUWdSLG1CQUFaLEVBQWlDO0FBQ2hDaFIsV0FBUWdSLG1CQUFSLENBQTRCaEcsS0FBNUIsRUFBbUM0RixRQUFuQyxFQUE2Q0MsT0FBN0M7QUFDQSxHQUZELE1BRU8sSUFBSTdRLFFBQVFpUixXQUFaLEVBQXlCO0FBQy9CalIsV0FBUWlSLFdBQVIsQ0FBb0IsT0FBT2pHLEtBQTNCLEVBQWtDNEYsUUFBbEM7QUFDQTtBQUNELEVBTkQ7O0FBUUE7Ozs7Ozs7Ozs7O0FBV0E3USxLQUFJNkksU0FBSixDQUFjZ0IsT0FBZCxHQUF3QixVQUFTZ0IsSUFBVCxFQUFlTSxJQUFmLEVBQXFCZ0csU0FBckIsRUFBZ0N2RCxLQUFoQyxFQUF1Q2hFLEtBQXZDLEVBQThDO0FBQ3JFLE1BQUl3SCxTQUFTO0FBQ1o5SCxTQUFNLEVBQUUrSCxPQUFPLEtBQUt0USxNQUFMLENBQVl5RixNQUFyQixFQUE2QnVCLE9BQU8sS0FBS3BHLE9BQUwsRUFBcEM7QUFETSxHQUFiO0FBQUEsTUFFR08sVUFBVXRDLEVBQUUwUixTQUFGLENBQ1oxUixFQUFFMkwsSUFBRixDQUFPLENBQUUsSUFBRixFQUFRVixJQUFSLEVBQWNzRyxTQUFkLENBQVAsRUFBa0MsVUFBU3JELENBQVQsRUFBWTtBQUFFLFVBQU9BLENBQVA7QUFBVSxHQUExRCxFQUNFbEYsSUFERixDQUNPLEdBRFAsRUFDWXJHLFdBRFosRUFEWSxDQUZiO0FBQUEsTUFLRzBJLFFBQVFyTCxFQUFFZ0csS0FBRixDQUNWLENBQUVpRixJQUFGLEVBQVEsS0FBUixFQUFlc0csYUFBYSxVQUE1QixFQUF5Q3ZJLElBQXpDLENBQThDLEdBQTlDLEVBQW1EckcsV0FBbkQsRUFEVSxFQUVWM0MsRUFBRVEsTUFBRixDQUFTLEVBQUVtUixlQUFlLElBQWpCLEVBQVQsRUFBa0NILE1BQWxDLEVBQTBDakcsSUFBMUMsQ0FGVSxDQUxYOztBQVVBLE1BQUksQ0FBQyxLQUFLMUssUUFBTCxDQUFjb0ssSUFBZCxDQUFMLEVBQTBCO0FBQ3pCakwsS0FBRW1DLElBQUYsQ0FBTyxLQUFLdkIsUUFBWixFQUFzQixVQUFTcUssSUFBVCxFQUFleEksTUFBZixFQUF1QjtBQUM1QyxRQUFJQSxPQUFPbVAsU0FBWCxFQUFzQjtBQUNyQm5QLFlBQU9tUCxTQUFQLENBQWlCdkcsS0FBakI7QUFDQTtBQUNELElBSkQ7O0FBTUEsUUFBS3dHLFFBQUwsQ0FBYyxFQUFFM0UsTUFBTTlNLElBQUkyRixJQUFKLENBQVNDLEtBQWpCLEVBQXdCaUYsTUFBTUEsSUFBOUIsRUFBZDtBQUNBLFFBQUt2SyxRQUFMLENBQWN1SixPQUFkLENBQXNCb0IsS0FBdEI7O0FBRUEsT0FBSSxLQUFLOUssUUFBTCxJQUFpQixPQUFPLEtBQUtBLFFBQUwsQ0FBYytCLE9BQWQsQ0FBUCxLQUFrQyxVQUF2RCxFQUFtRTtBQUNsRSxTQUFLL0IsUUFBTCxDQUFjK0IsT0FBZCxFQUF1QndQLElBQXZCLENBQTRCLElBQTVCLEVBQWtDekcsS0FBbEM7QUFDQTtBQUNEOztBQUVELFNBQU9BLEtBQVA7QUFDQSxFQTNCRDs7QUE2QkE7Ozs7QUFJQWpMLEtBQUk2SSxTQUFKLENBQWNlLEtBQWQsR0FBc0IsVUFBU2lCLElBQVQsRUFBZTtBQUNwQ2pMLElBQUVtQyxJQUFGLENBQU8sQ0FBRThJLElBQUYsRUFBUzhHLE1BQVQsQ0FBZ0IsS0FBSzlQLE9BQUwsQ0FBYUMsSUFBYixDQUFrQitJLElBQWxCLEtBQTJCLEVBQTNDLENBQVAsRUFBdURqTCxFQUFFb0MsS0FBRixDQUFRLFVBQVNDLENBQVQsRUFBWTRJLElBQVosRUFBa0I7QUFDaEYsT0FBSSxLQUFLaEosT0FBTCxDQUFhRixPQUFiLENBQXFCa0osSUFBckIsTUFBK0I5SyxTQUFuQyxFQUE4QztBQUM3QyxTQUFLOEIsT0FBTCxDQUFhRixPQUFiLENBQXFCa0osSUFBckIsSUFBNkIsQ0FBN0I7QUFDQTs7QUFFRCxRQUFLaEosT0FBTCxDQUFhRixPQUFiLENBQXFCa0osSUFBckI7QUFDQSxHQU5zRCxFQU1wRCxJQU5vRCxDQUF2RDtBQU9BLEVBUkQ7O0FBVUE7Ozs7QUFJQTdLLEtBQUk2SSxTQUFKLENBQWN1QixLQUFkLEdBQXNCLFVBQVNTLElBQVQsRUFBZTtBQUNwQ2pMLElBQUVtQyxJQUFGLENBQU8sQ0FBRThJLElBQUYsRUFBUzhHLE1BQVQsQ0FBZ0IsS0FBSzlQLE9BQUwsQ0FBYUMsSUFBYixDQUFrQitJLElBQWxCLEtBQTJCLEVBQTNDLENBQVAsRUFBdURqTCxFQUFFb0MsS0FBRixDQUFRLFVBQVNDLENBQVQsRUFBWTRJLElBQVosRUFBa0I7QUFDaEYsUUFBS2hKLE9BQUwsQ0FBYUYsT0FBYixDQUFxQmtKLElBQXJCO0FBQ0EsR0FGc0QsRUFFcEQsSUFGb0QsQ0FBdkQ7QUFHQSxFQUpEOztBQU1BOzs7OztBQUtBN0ssS0FBSTZJLFNBQUosQ0FBYzRJLFFBQWQsR0FBeUIsVUFBU0csTUFBVCxFQUFpQjtBQUN6QyxNQUFJQSxPQUFPOUUsSUFBUCxLQUFnQjlNLElBQUkyRixJQUFKLENBQVNDLEtBQTdCLEVBQW9DO0FBQ25DLE9BQUksQ0FBQ2hHLEVBQUVxTCxLQUFGLENBQVE0RyxPQUFSLENBQWdCRCxPQUFPL0csSUFBdkIsQ0FBTCxFQUFtQztBQUNsQ2pMLE1BQUVxTCxLQUFGLENBQVE0RyxPQUFSLENBQWdCRCxPQUFPL0csSUFBdkIsSUFBK0IsRUFBL0I7QUFDQTs7QUFFRCxPQUFJLENBQUNqTCxFQUFFcUwsS0FBRixDQUFRNEcsT0FBUixDQUFnQkQsT0FBTy9HLElBQXZCLEVBQTZCaUgsR0FBbEMsRUFBdUM7QUFDdEMsUUFBSUMsV0FBV25TLEVBQUVxTCxLQUFGLENBQVE0RyxPQUFSLENBQWdCRCxPQUFPL0csSUFBdkIsRUFBNkJrSCxRQUE1QztBQUNBblMsTUFBRXFMLEtBQUYsQ0FBUTRHLE9BQVIsQ0FBZ0JELE9BQU8vRyxJQUF2QixFQUE2QmtILFFBQTdCLEdBQXdDLFVBQVMzQixDQUFULEVBQVk7QUFDbkQsU0FBSTJCLFlBQVlBLFNBQVNDLEtBQXJCLEtBQStCLENBQUM1QixFQUFFZSxTQUFILElBQWdCZixFQUFFZSxTQUFGLENBQVljLE9BQVosQ0FBb0IsS0FBcEIsTUFBK0IsQ0FBQyxDQUEvRSxDQUFKLEVBQXVGO0FBQ3RGLGFBQU9GLFNBQVNDLEtBQVQsQ0FBZSxJQUFmLEVBQXFCRSxTQUFyQixDQUFQO0FBQ0E7QUFDRCxZQUFPOUIsRUFBRWUsU0FBRixJQUFlZixFQUFFZSxTQUFGLENBQVljLE9BQVosQ0FBb0IsS0FBcEIsSUFBNkIsQ0FBQyxDQUFwRDtBQUNBLEtBTEQ7QUFNQXJTLE1BQUVxTCxLQUFGLENBQVE0RyxPQUFSLENBQWdCRCxPQUFPL0csSUFBdkIsRUFBNkJpSCxHQUE3QixHQUFtQyxJQUFuQztBQUNBO0FBQ0QsR0FmRCxNQWVPLElBQUlGLE9BQU85RSxJQUFQLEtBQWdCOU0sSUFBSTJGLElBQUosQ0FBU0UsS0FBN0IsRUFBb0M7QUFDMUMsT0FBSSxDQUFDLEtBQUtoRSxPQUFMLENBQWFDLElBQWIsQ0FBa0I4UCxPQUFPL0csSUFBekIsQ0FBTCxFQUFxQztBQUNwQyxTQUFLaEosT0FBTCxDQUFhQyxJQUFiLENBQWtCOFAsT0FBTy9HLElBQXpCLElBQWlDK0csT0FBTzlQLElBQXhDO0FBQ0EsSUFGRCxNQUVPO0FBQ04sU0FBS0QsT0FBTCxDQUFhQyxJQUFiLENBQWtCOFAsT0FBTy9HLElBQXpCLElBQWlDLEtBQUtoSixPQUFMLENBQWFDLElBQWIsQ0FBa0I4UCxPQUFPL0csSUFBekIsRUFBK0I4RyxNQUEvQixDQUFzQ0MsT0FBTzlQLElBQTdDLENBQWpDO0FBQ0E7O0FBRUQsUUFBS0QsT0FBTCxDQUFhQyxJQUFiLENBQWtCOFAsT0FBTy9HLElBQXpCLElBQWlDakwsRUFBRTJMLElBQUYsQ0FBTyxLQUFLMUosT0FBTCxDQUFhQyxJQUFiLENBQWtCOFAsT0FBTy9HLElBQXpCLENBQVAsRUFBdUNqTCxFQUFFb0MsS0FBRixDQUFRLFVBQVNtUSxHQUFULEVBQWNsUSxDQUFkLEVBQWlCO0FBQ2hHLFdBQU9yQyxFQUFFd1MsT0FBRixDQUFVRCxHQUFWLEVBQWUsS0FBS3RRLE9BQUwsQ0FBYUMsSUFBYixDQUFrQjhQLE9BQU8vRyxJQUF6QixDQUFmLE1BQW1ENUksQ0FBMUQ7QUFDQSxJQUZ1RSxFQUVyRSxJQUZxRSxDQUF2QyxDQUFqQztBQUdBO0FBQ0QsRUEzQkQ7O0FBNkJBOzs7OztBQUtBakMsS0FBSTZJLFNBQUosQ0FBY2tGLFFBQWQsR0FBeUIsVUFBU3NFLE1BQVQsRUFBaUI7QUFDekN6UyxJQUFFbUMsSUFBRixDQUFPc1EsTUFBUCxFQUFlelMsRUFBRW9DLEtBQUYsQ0FBUSxVQUFTK0YsS0FBVCxFQUFnQmtELEtBQWhCLEVBQXVCO0FBQzdDLFFBQUt4SyxRQUFMLENBQWN3SyxLQUFkLElBQXVCLElBQXZCO0FBQ0EsR0FGYyxFQUVaLElBRlksQ0FBZjtBQUdBLEVBSkQ7O0FBTUE7Ozs7O0FBS0FqTCxLQUFJNkksU0FBSixDQUFjbUYsT0FBZCxHQUF3QixVQUFTcUUsTUFBVCxFQUFpQjtBQUN4Q3pTLElBQUVtQyxJQUFGLENBQU9zUSxNQUFQLEVBQWV6UyxFQUFFb0MsS0FBRixDQUFRLFVBQVMrRixLQUFULEVBQWdCa0QsS0FBaEIsRUFBdUI7QUFDN0MsVUFBTyxLQUFLeEssUUFBTCxDQUFjd0ssS0FBZCxDQUFQO0FBQ0EsR0FGYyxFQUVaLElBRlksQ0FBZjtBQUdBLEVBSkQ7O0FBTUE7Ozs7Ozs7QUFPQWpMLEtBQUk2SSxTQUFKLENBQWNySCxPQUFkLEdBQXdCLFVBQVN5SixLQUFULEVBQWdCO0FBQ3ZDLE1BQUlxSCxTQUFTLEVBQUU5RixHQUFHLElBQUwsRUFBV0MsR0FBRyxJQUFkLEVBQWI7O0FBRUF4QixVQUFRQSxNQUFNc0gsYUFBTixJQUF1QnRILEtBQXZCLElBQWdDcEwsT0FBT29MLEtBQS9DOztBQUVBQSxVQUFRQSxNQUFNdUgsT0FBTixJQUFpQnZILE1BQU11SCxPQUFOLENBQWNoTSxNQUEvQixHQUNQeUUsTUFBTXVILE9BQU4sQ0FBYyxDQUFkLENBRE8sR0FDWXZILE1BQU13SCxjQUFOLElBQXdCeEgsTUFBTXdILGNBQU4sQ0FBcUJqTSxNQUE3QyxHQUNsQnlFLE1BQU13SCxjQUFOLENBQXFCLENBQXJCLENBRGtCLEdBQ1F4SCxLQUY1Qjs7QUFJQSxNQUFJQSxNQUFNeUgsS0FBVixFQUFpQjtBQUNoQkosVUFBTzlGLENBQVAsR0FBV3ZCLE1BQU15SCxLQUFqQjtBQUNBSixVQUFPN0YsQ0FBUCxHQUFXeEIsTUFBTTBILEtBQWpCO0FBQ0EsR0FIRCxNQUdPO0FBQ05MLFVBQU85RixDQUFQLEdBQVd2QixNQUFNMkgsT0FBakI7QUFDQU4sVUFBTzdGLENBQVAsR0FBV3hCLE1BQU00SCxPQUFqQjtBQUNBOztBQUVELFNBQU9QLE1BQVA7QUFDQSxFQWxCRDs7QUFvQkE7Ozs7OztBQU1BdFMsS0FBSTZJLFNBQUosQ0FBY3FGLFNBQWQsR0FBMEIsVUFBUzRFLE1BQVQsRUFBaUI7QUFDMUMsU0FBTyxDQUFDQyxNQUFNQyxXQUFXRixNQUFYLENBQU4sQ0FBUjtBQUNBLEVBRkQ7O0FBSUE7Ozs7Ozs7O0FBUUE5UyxLQUFJNkksU0FBSixDQUFjdUUsVUFBZCxHQUEyQixVQUFTNkYsS0FBVCxFQUFnQkMsTUFBaEIsRUFBd0I7QUFDbEQsU0FBTztBQUNOMUcsTUFBR3lHLE1BQU16RyxDQUFOLEdBQVUwRyxPQUFPMUcsQ0FEZDtBQUVOQyxNQUFHd0csTUFBTXhHLENBQU4sR0FBVXlHLE9BQU96RztBQUZkLEdBQVA7QUFJQSxFQUxEOztBQU9BOzs7OztBQUtBN00sR0FBRXVULEVBQUYsQ0FBS0MsV0FBTCxHQUFtQixVQUFTQyxNQUFULEVBQWlCO0FBQ25DLE1BQUlDLE9BQU9DLE1BQU0xSyxTQUFOLENBQWdCckcsS0FBaEIsQ0FBc0JrUCxJQUF0QixDQUEyQlEsU0FBM0IsRUFBc0MsQ0FBdEMsQ0FBWDs7QUFFQSxTQUFPLEtBQUtuUSxJQUFMLENBQVUsWUFBVztBQUMzQixPQUFJeVIsUUFBUTVULEVBQUUsSUFBRixDQUFaO0FBQUEsT0FDQ3VMLE9BQU9xSSxNQUFNckksSUFBTixDQUFXLGNBQVgsQ0FEUjs7QUFHQSxPQUFJLENBQUNBLElBQUwsRUFBVztBQUNWQSxXQUFPLElBQUluTCxHQUFKLENBQVEsSUFBUixFQUFjLFFBQU9xVCxNQUFQLHlDQUFPQSxNQUFQLE1BQWlCLFFBQWpCLElBQTZCQSxNQUEzQyxDQUFQO0FBQ0FHLFVBQU1ySSxJQUFOLENBQVcsY0FBWCxFQUEyQkEsSUFBM0I7O0FBRUF2TCxNQUFFbUMsSUFBRixDQUFPLENBQ04sTUFETSxFQUNFLE1BREYsRUFDVSxJQURWLEVBQ2dCLFNBRGhCLEVBQzJCLFNBRDNCLEVBQ3NDLFNBRHRDLEVBQ2lELEtBRGpELEVBQ3dELFFBRHhELENBQVAsRUFFRyxVQUFTRSxDQUFULEVBQVlnSixLQUFaLEVBQW1CO0FBQ3JCRSxVQUFLc0csUUFBTCxDQUFjLEVBQUUzRSxNQUFNOU0sSUFBSTJGLElBQUosQ0FBU0MsS0FBakIsRUFBd0JpRixNQUFNSSxLQUE5QixFQUFkO0FBQ0FFLFVBQUs3SyxRQUFMLENBQWMyTCxFQUFkLENBQWlCaEIsUUFBUSxvQkFBekIsRUFBK0NyTCxFQUFFb0MsS0FBRixDQUFRLFVBQVNvTyxDQUFULEVBQVk7QUFDbEUsVUFBSUEsRUFBRWUsU0FBRixJQUFlZixFQUFFbUIsYUFBRixLQUFvQixJQUF2QyxFQUE2QztBQUM1QyxZQUFLeEQsUUFBTCxDQUFjLENBQUU5QyxLQUFGLENBQWQ7QUFDQUUsWUFBS0YsS0FBTCxFQUFZK0csS0FBWixDQUFrQixJQUFsQixFQUF3QixHQUFHeFAsS0FBSCxDQUFTa1AsSUFBVCxDQUFjUSxTQUFkLEVBQXlCLENBQXpCLENBQXhCO0FBQ0EsWUFBS2xFLE9BQUwsQ0FBYSxDQUFFL0MsS0FBRixDQUFiO0FBQ0E7QUFDRCxNQU44QyxFQU01Q0UsSUFONEMsQ0FBL0M7QUFPQSxLQVhEO0FBWUE7O0FBRUQsT0FBSSxPQUFPa0ksTUFBUCxJQUFpQixRQUFqQixJQUE2QkEsT0FBTy9RLE1BQVAsQ0FBYyxDQUFkLE1BQXFCLEdBQXRELEVBQTJEO0FBQzFENkksU0FBS2tJLE1BQUwsRUFBYXJCLEtBQWIsQ0FBbUI3RyxJQUFuQixFQUF5Qm1JLElBQXpCO0FBQ0E7QUFDRCxHQXpCTSxDQUFQO0FBMEJBLEVBN0JEOztBQStCQTs7OztBQUlBMVQsR0FBRXVULEVBQUYsQ0FBS0MsV0FBTCxDQUFpQkssV0FBakIsR0FBK0J6VCxHQUEvQjtBQUVBLENBenNEQSxFQXlzREVILE9BQU82VCxLQUFQLElBQWdCN1QsT0FBTzhQLE1BenNEekIsRUF5c0RpQzlQLE1BenNEakMsRUF5c0R5Q0MsUUF6c0R6Qzs7QUEyc0REOzs7Ozs7O0FBT0EsQ0FBQyxDQUFDLFVBQVNGLENBQVQsRUFBWUMsTUFBWixFQUFvQkMsUUFBcEIsRUFBOEJDLFNBQTlCLEVBQXlDOztBQUUxQzs7Ozs7QUFLQSxLQUFJNFQsY0FBYyxTQUFkQSxXQUFjLENBQVNDLFFBQVQsRUFBbUI7QUFDcEM7Ozs7O0FBS0EsT0FBS0MsS0FBTCxHQUFhRCxRQUFiOztBQUVBOzs7OztBQUtBLE9BQUtFLFNBQUwsR0FBaUIsSUFBakI7O0FBRUE7Ozs7O0FBS0EsT0FBS0MsUUFBTCxHQUFnQixJQUFoQjs7QUFFQTs7Ozs7QUFLQSxPQUFLeFQsU0FBTCxHQUFpQjtBQUNoQiwrQkFBNEJYLEVBQUVvQyxLQUFGLENBQVEsVUFBU29PLENBQVQsRUFBWTtBQUMvQyxRQUFJQSxFQUFFZSxTQUFGLElBQWUsS0FBSzBDLEtBQUwsQ0FBVzFULFFBQVgsQ0FBb0I2VCxXQUF2QyxFQUFvRDtBQUNuRCxVQUFLQyxLQUFMO0FBQ0E7QUFDRCxJQUoyQixFQUl6QixJQUp5QjtBQURaLEdBQWpCOztBQVFBO0FBQ0EsT0FBS0osS0FBTCxDQUFXM1QsT0FBWCxHQUFxQk4sRUFBRVEsTUFBRixDQUFTLEVBQVQsRUFBYXVULFlBQVl0VCxRQUF6QixFQUFtQyxLQUFLd1QsS0FBTCxDQUFXM1QsT0FBOUMsQ0FBckI7O0FBRUE7QUFDQSxPQUFLMlQsS0FBTCxDQUFXdlQsUUFBWCxDQUFvQjJMLEVBQXBCLENBQXVCLEtBQUsxTCxTQUE1QjtBQUNBLEVBeENEOztBQTBDQTs7OztBQUlBb1QsYUFBWXRULFFBQVosR0FBdUI7QUFDdEIyVCxlQUFhLElBRFM7QUFFdEJFLHVCQUFxQjtBQUZDLEVBQXZCOztBQUtBOzs7QUFHQVAsYUFBWTlLLFNBQVosQ0FBc0JvTCxLQUF0QixHQUE4QixZQUFXO0FBQ3hDLE1BQUksS0FBS0gsU0FBVCxFQUFvQjtBQUNuQjtBQUNBOztBQUVELE9BQUtDLFFBQUwsR0FBZ0IsS0FBS0YsS0FBTCxDQUFXbkssU0FBWCxFQUFoQjtBQUNBLE9BQUtvSyxTQUFMLEdBQWlCalUsT0FBT3NVLFdBQVAsQ0FBbUJ2VSxFQUFFb0MsS0FBRixDQUFRLEtBQUt1SCxPQUFiLEVBQXNCLElBQXRCLENBQW5CLEVBQWdELEtBQUtzSyxLQUFMLENBQVcxVCxRQUFYLENBQW9CK1QsbUJBQXBFLENBQWpCO0FBQ0EsRUFQRDs7QUFTQTs7O0FBR0FQLGFBQVk5SyxTQUFaLENBQXNCVSxPQUF0QixHQUFnQyxZQUFXO0FBQzFDLE1BQUksS0FBS3NLLEtBQUwsQ0FBV25LLFNBQVgsT0FBMkIsS0FBS3FLLFFBQXBDLEVBQThDO0FBQzdDO0FBQ0E7O0FBRUQsT0FBS0EsUUFBTCxHQUFnQixDQUFDLEtBQUtBLFFBQXRCOztBQUVBLE9BQUtGLEtBQUwsQ0FBV3ZULFFBQVgsQ0FBb0J3SixXQUFwQixDQUFnQyxZQUFoQyxFQUE4QyxDQUFDLEtBQUtpSyxRQUFwRDs7QUFFQSxPQUFLQSxRQUFMLElBQWtCLEtBQUtGLEtBQUwsQ0FBV2xLLFVBQVgsQ0FBc0IsT0FBdEIsS0FBa0MsS0FBS2tLLEtBQUwsQ0FBV3RLLE9BQVgsRUFBcEQ7QUFDQSxFQVZEOztBQVlBOzs7QUFHQW9LLGFBQVk5SyxTQUFaLENBQXNCeUgsT0FBdEIsR0FBZ0MsWUFBVztBQUMxQyxNQUFJcE8sT0FBSixFQUFhMEksUUFBYjs7QUFFQS9LLFNBQU91VSxhQUFQLENBQXFCLEtBQUtOLFNBQTFCOztBQUVBLE9BQUs1UixPQUFMLElBQWdCLEtBQUszQixTQUFyQixFQUFnQztBQUMvQixRQUFLc1QsS0FBTCxDQUFXdlQsUUFBWCxDQUFvQmtOLEdBQXBCLENBQXdCdEwsT0FBeEIsRUFBaUMsS0FBSzNCLFNBQUwsQ0FBZTJCLE9BQWYsQ0FBakM7QUFDQTtBQUNELE9BQUswSSxRQUFMLElBQWlCeUosT0FBT0MsbUJBQVAsQ0FBMkIsSUFBM0IsQ0FBakIsRUFBbUQ7QUFDbEQsVUFBTyxLQUFLMUosUUFBTCxDQUFQLElBQXlCLFVBQXpCLEtBQXdDLEtBQUtBLFFBQUwsSUFBaUIsSUFBekQ7QUFDQTtBQUNELEVBWEQ7O0FBYUFoTCxHQUFFdVQsRUFBRixDQUFLQyxXQUFMLENBQWlCSyxXQUFqQixDQUE2QnRSLE9BQTdCLENBQXFDd1IsV0FBckMsR0FBbURBLFdBQW5EO0FBRUEsQ0F2R0EsRUF1R0U5VCxPQUFPNlQsS0FBUCxJQUFnQjdULE9BQU84UCxNQXZHekIsRUF1R2lDOVAsTUF2R2pDLEVBdUd5Q0MsUUF2R3pDOztBQXlHRDs7Ozs7OztBQU9BLENBQUMsQ0FBQyxVQUFTRixDQUFULEVBQVlDLE1BQVosRUFBb0JDLFFBQXBCLEVBQThCQyxTQUE5QixFQUF5Qzs7QUFFMUM7Ozs7O0FBS0EsS0FBSXdVLE9BQU8sU0FBUEEsSUFBTyxDQUFTWCxRQUFULEVBQW1COztBQUU3Qjs7Ozs7QUFLQSxPQUFLQyxLQUFMLEdBQWFELFFBQWI7O0FBRUE7Ozs7O0FBS0EsT0FBS1ksT0FBTCxHQUFlLEVBQWY7O0FBRUE7Ozs7O0FBS0EsT0FBS2pVLFNBQUwsR0FBaUI7QUFDaEIsd0VBQXFFWCxFQUFFb0MsS0FBRixDQUFRLFVBQVNvTyxDQUFULEVBQVk7QUFDeEYsUUFBSSxDQUFDQSxFQUFFZSxTQUFQLEVBQWtCO0FBQ2pCO0FBQ0E7O0FBRUQsUUFBSSxDQUFDLEtBQUswQyxLQUFMLENBQVcxVCxRQUFaLElBQXdCLENBQUMsS0FBSzBULEtBQUwsQ0FBVzFULFFBQVgsQ0FBb0JzVSxRQUFqRCxFQUEyRDtBQUMxRDtBQUNBOztBQUVELFFBQUtyRSxFQUFFeEYsUUFBRixJQUFjd0YsRUFBRXhGLFFBQUYsQ0FBV0MsSUFBWCxJQUFtQixVQUFsQyxJQUFpRHVGLEVBQUV0RCxJQUFGLElBQVUsYUFBL0QsRUFBOEU7QUFDN0UsU0FBSTNNLFdBQVcsS0FBSzBULEtBQUwsQ0FBVzFULFFBQTFCO0FBQUEsU0FDQ3NJLElBQUt0SSxTQUFTZ0QsTUFBVCxJQUFtQnVELEtBQUtNLElBQUwsQ0FBVTdHLFNBQVM4QyxLQUFULEdBQWlCLENBQTNCLENBQW5CLElBQW9EOUMsU0FBUzhDLEtBRG5FO0FBQUEsU0FFQ2hCLElBQU05QixTQUFTZ0QsTUFBVCxJQUFtQnNGLElBQUksQ0FBQyxDQUF6QixJQUErQixDQUZyQztBQUFBLFNBR0NpRSxXQUFXLENBQUMwRCxFQUFFeEYsUUFBRixJQUFjd0YsRUFBRXhGLFFBQUYsQ0FBV0UsS0FBWCxLQUFxQi9LLFNBQW5DLEdBQStDcVEsRUFBRXhGLFFBQUYsQ0FBV0UsS0FBMUQsR0FBa0UsS0FBSytJLEtBQUwsQ0FBV2xTLE9BQVgsRUFBbkUsSUFBMkZNLENBSHZHO0FBQUEsU0FJQzJFLFNBQVMsS0FBS2lOLEtBQUwsQ0FBV2pOLE1BQVgsR0FBb0JKLE1BSjlCO0FBQUEsU0FLQ2tPLE9BQU85VSxFQUFFb0MsS0FBRixDQUFRLFVBQVNDLENBQVQsRUFBWTZMLENBQVosRUFBZTtBQUFFLFdBQUs0RyxJQUFMLENBQVU1RyxDQUFWO0FBQWMsTUFBdkMsRUFBeUMsSUFBekMsQ0FMUjtBQU1BO0FBQ0EsU0FBSTNOLFNBQVN3VSxhQUFULEdBQXlCLENBQTdCLEVBQWdDO0FBQy9CbE0sV0FBS3RJLFNBQVN3VSxhQUFkO0FBQ0E7QUFDQSxVQUFJeFUsU0FBUytDLElBQWIsRUFBbUI7QUFDWHdKLG1CQUFZdk0sU0FBU3dVLGFBQXJCO0FBQ0FsTTtBQUNEO0FBQ1A7O0FBRUQsWUFBT3hHLE1BQU13RyxDQUFiLEVBQWdCO0FBQ2YsV0FBS2lNLElBQUwsQ0FBVTlOLFNBQVMsQ0FBVCxHQUFhLEtBQUtpTixLQUFMLENBQVc3TixRQUFYLENBQW9CMEcsUUFBcEIsQ0FBdkI7QUFDQTlGLGdCQUFVaEgsRUFBRW1DLElBQUYsQ0FBTyxLQUFLOFIsS0FBTCxDQUFXak4sTUFBWCxDQUFrQixLQUFLaU4sS0FBTCxDQUFXN04sUUFBWCxDQUFvQjBHLFFBQXBCLENBQWxCLENBQVAsRUFBeURnSSxJQUF6RCxDQUFWO0FBQ0FoSTtBQUNBO0FBQ0Q7QUFDRCxJQWhDb0UsRUFnQ2xFLElBaENrRTtBQURyRCxHQUFqQjs7QUFvQ0E7QUFDQSxPQUFLbUgsS0FBTCxDQUFXM1QsT0FBWCxHQUFxQk4sRUFBRVEsTUFBRixDQUFTLEVBQVQsRUFBYW1VLEtBQUtsVSxRQUFsQixFQUE0QixLQUFLd1QsS0FBTCxDQUFXM1QsT0FBdkMsQ0FBckI7O0FBRUE7QUFDQSxPQUFLMlQsS0FBTCxDQUFXdlQsUUFBWCxDQUFvQjJMLEVBQXBCLENBQXVCLEtBQUsxTCxTQUE1QjtBQUNBLEVBOUREOztBQWdFQTs7OztBQUlBZ1UsTUFBS2xVLFFBQUwsR0FBZ0I7QUFDZm9VLFlBQVUsS0FESztBQUVmRSxpQkFBZTtBQUZBLEVBQWhCOztBQUtBOzs7OztBQUtBSixNQUFLMUwsU0FBTCxDQUFlNkwsSUFBZixHQUFzQixVQUFTaEksUUFBVCxFQUFtQjtBQUN4QyxNQUFJa0ksUUFBUSxLQUFLZixLQUFMLENBQVc1TixNQUFYLENBQWtCQyxRQUFsQixHQUE2QjJCLEVBQTdCLENBQWdDNkUsUUFBaEMsQ0FBWjtBQUFBLE1BQ0NtSSxZQUFZRCxTQUFTQSxNQUFNN0wsSUFBTixDQUFXLFdBQVgsQ0FEdEI7O0FBR0EsTUFBSSxDQUFDOEwsU0FBRCxJQUFjalYsRUFBRXdTLE9BQUYsQ0FBVXdDLE1BQU14TCxHQUFOLENBQVUsQ0FBVixDQUFWLEVBQXdCLEtBQUtvTCxPQUE3QixJQUF3QyxDQUFDLENBQTNELEVBQThEO0FBQzdEO0FBQ0E7O0FBRURLLFlBQVU5UyxJQUFWLENBQWVuQyxFQUFFb0MsS0FBRixDQUFRLFVBQVMrRixLQUFULEVBQWdCOUgsT0FBaEIsRUFBeUI7QUFDL0MsT0FBSUssV0FBV1YsRUFBRUssT0FBRixDQUFmO0FBQUEsT0FBMkI2VSxLQUEzQjtBQUFBLE9BQ2FDLE1BQU9sVixPQUFPbVYsZ0JBQVAsR0FBMEIsQ0FBMUIsSUFBK0IxVSxTQUFTb0ssSUFBVCxDQUFjLGlCQUFkLENBQWhDLElBQXFFcEssU0FBU29LLElBQVQsQ0FBYyxVQUFkLENBQXJFLElBQWtHcEssU0FBU29LLElBQVQsQ0FBYyxhQUFkLENBRHJIOztBQUdBLFFBQUttSixLQUFMLENBQVdoSyxPQUFYLENBQW1CLE1BQW5CLEVBQTJCLEVBQUU1SixTQUFTSyxRQUFYLEVBQXFCeVUsS0FBS0EsR0FBMUIsRUFBM0IsRUFBNEQsTUFBNUQ7O0FBRUEsT0FBSXpVLFNBQVN5SixFQUFULENBQVksS0FBWixDQUFKLEVBQXdCO0FBQ3ZCekosYUFBUzRNLEdBQVQsQ0FBYSxlQUFiLEVBQThCdE4sRUFBRW9DLEtBQUYsQ0FBUSxZQUFXO0FBQ2hEMUIsY0FBUytGLEdBQVQsQ0FBYSxTQUFiLEVBQXdCLENBQXhCO0FBQ0EsVUFBS3dOLEtBQUwsQ0FBV2hLLE9BQVgsQ0FBbUIsUUFBbkIsRUFBNkIsRUFBRTVKLFNBQVNLLFFBQVgsRUFBcUJ5VSxLQUFLQSxHQUExQixFQUE3QixFQUE4RCxNQUE5RDtBQUNBLEtBSDZCLEVBRzNCLElBSDJCLENBQTlCLEVBR1VySyxJQUhWLENBR2UsS0FIZixFQUdzQnFLLEdBSHRCO0FBSVMsSUFMVixNQUtnQixJQUFJelUsU0FBU3lKLEVBQVQsQ0FBWSxRQUFaLENBQUosRUFBMkI7QUFDOUJ6SixhQUFTNE0sR0FBVCxDQUFhLGVBQWIsRUFBOEJ0TixFQUFFb0MsS0FBRixDQUFRLFlBQVc7QUFDN0MsVUFBSzZSLEtBQUwsQ0FBV2hLLE9BQVgsQ0FBbUIsUUFBbkIsRUFBNkIsRUFBRTVKLFNBQVNLLFFBQVgsRUFBcUJ5VSxLQUFLQSxHQUExQixFQUE3QixFQUE4RCxNQUE5RDtBQUNILEtBRjZCLEVBRTNCLElBRjJCLENBQTlCLEVBRVVySyxJQUZWLENBRWUsUUFGZixFQUV5QnFLLEdBRnpCO0FBR1osSUFKZSxNQUlUO0FBQ05ELFlBQVEsSUFBSTNFLEtBQUosRUFBUjtBQUNBMkUsVUFBTUcsTUFBTixHQUFlclYsRUFBRW9DLEtBQUYsQ0FBUSxZQUFXO0FBQ2pDMUIsY0FBUytGLEdBQVQsQ0FBYTtBQUNaLDBCQUFvQixVQUFVME8sR0FBVixHQUFnQixJQUR4QjtBQUVaLGlCQUFXO0FBRkMsTUFBYjtBQUlBLFVBQUtsQixLQUFMLENBQVdoSyxPQUFYLENBQW1CLFFBQW5CLEVBQTZCLEVBQUU1SixTQUFTSyxRQUFYLEVBQXFCeVUsS0FBS0EsR0FBMUIsRUFBN0IsRUFBOEQsTUFBOUQ7QUFDQSxLQU5jLEVBTVosSUFOWSxDQUFmO0FBT0FELFVBQU16RSxHQUFOLEdBQVkwRSxHQUFaO0FBQ0E7QUFDRCxHQTFCYyxFQTBCWixJQTFCWSxDQUFmOztBQTRCQSxPQUFLUCxPQUFMLENBQWE1UixJQUFiLENBQWtCZ1MsTUFBTXhMLEdBQU4sQ0FBVSxDQUFWLENBQWxCO0FBQ0EsRUFyQ0Q7O0FBdUNBOzs7O0FBSUFtTCxNQUFLMUwsU0FBTCxDQUFleUgsT0FBZixHQUF5QixZQUFXO0FBQ25DLE1BQUlwTyxPQUFKLEVBQWEwSSxRQUFiOztBQUVBLE9BQUsxSSxPQUFMLElBQWdCLEtBQUtnVCxRQUFyQixFQUErQjtBQUM5QixRQUFLckIsS0FBTCxDQUFXdlQsUUFBWCxDQUFvQmtOLEdBQXBCLENBQXdCdEwsT0FBeEIsRUFBaUMsS0FBS2dULFFBQUwsQ0FBY2hULE9BQWQsQ0FBakM7QUFDQTtBQUNELE9BQUswSSxRQUFMLElBQWlCeUosT0FBT0MsbUJBQVAsQ0FBMkIsSUFBM0IsQ0FBakIsRUFBbUQ7QUFDbEQsVUFBTyxLQUFLMUosUUFBTCxDQUFQLElBQXlCLFVBQXpCLEtBQXdDLEtBQUtBLFFBQUwsSUFBaUIsSUFBekQ7QUFDQTtBQUNELEVBVEQ7O0FBV0FoTCxHQUFFdVQsRUFBRixDQUFLQyxXQUFMLENBQWlCSyxXQUFqQixDQUE2QnRSLE9BQTdCLENBQXFDb1MsSUFBckMsR0FBNENBLElBQTVDO0FBRUEsQ0E3SUEsRUE2SUUxVSxPQUFPNlQsS0FBUCxJQUFnQjdULE9BQU84UCxNQTdJekIsRUE2SWlDOVAsTUE3SWpDLEVBNkl5Q0MsUUE3SXpDOztBQStJRDs7Ozs7OztBQU9BLENBQUMsQ0FBQyxVQUFTRixDQUFULEVBQVlDLE1BQVosRUFBb0JDLFFBQXBCLEVBQThCQyxTQUE5QixFQUF5Qzs7QUFFMUM7Ozs7O0FBS0EsS0FBSW9WLGFBQWEsU0FBYkEsVUFBYSxDQUFTdkIsUUFBVCxFQUFtQjtBQUNuQzs7Ozs7QUFLQSxPQUFLQyxLQUFMLEdBQWFELFFBQWI7O0FBRUEsT0FBS3dCLGVBQUwsR0FBdUIsSUFBdkI7O0FBRUE7Ozs7O0FBS0EsT0FBSzdVLFNBQUwsR0FBaUI7QUFDaEIsc0RBQW1EWCxFQUFFb0MsS0FBRixDQUFRLFVBQVNvTyxDQUFULEVBQVk7QUFDdEUsUUFBSUEsRUFBRWUsU0FBRixJQUFlLEtBQUswQyxLQUFMLENBQVcxVCxRQUFYLENBQW9Ca1YsVUFBdkMsRUFBbUQ7QUFDbEQsVUFBS2pLLE1BQUw7QUFDQTtBQUNELElBSmtELEVBSWhELElBSmdELENBRG5DO0FBTWhCLDJCQUF3QnhMLEVBQUVvQyxLQUFGLENBQVEsVUFBU29PLENBQVQsRUFBWTtBQUMzQyxRQUFJQSxFQUFFZSxTQUFGLElBQWUsS0FBSzBDLEtBQUwsQ0FBVzFULFFBQVgsQ0FBb0JrVixVQUFuQyxJQUFpRGpGLEVBQUV4RixRQUFGLENBQVdDLElBQVgsS0FBb0IsVUFBekUsRUFBb0Y7QUFDbkYsVUFBS08sTUFBTDtBQUNBO0FBQ0QsSUFKdUIsRUFJckIsSUFKcUIsQ0FOUjtBQVdoQixzQkFBbUJ4TCxFQUFFb0MsS0FBRixDQUFRLFVBQVNvTyxDQUFULEVBQVk7QUFDdEMsUUFBSUEsRUFBRWUsU0FBRixJQUFlLEtBQUswQyxLQUFMLENBQVcxVCxRQUFYLENBQW9Ca1YsVUFBbkMsSUFDQWpGLEVBQUVuUSxPQUFGLENBQVV3TixPQUFWLENBQWtCLE1BQU0sS0FBS29HLEtBQUwsQ0FBVzFULFFBQVgsQ0FBb0JnRixTQUE1QyxFQUF1RDRDLEtBQXZELE9BQW1FLEtBQUs4TCxLQUFMLENBQVdsUyxPQUFYLEVBRHZFLEVBQzZGO0FBQzVGLFVBQUt5SixNQUFMO0FBQ0E7QUFDRCxJQUxrQixFQUtoQixJQUxnQjtBQVhILEdBQWpCOztBQW1CQTtBQUNBLE9BQUt5SSxLQUFMLENBQVczVCxPQUFYLEdBQXFCTixFQUFFUSxNQUFGLENBQVMsRUFBVCxFQUFhK1UsV0FBVzlVLFFBQXhCLEVBQWtDLEtBQUt3VCxLQUFMLENBQVczVCxPQUE3QyxDQUFyQjs7QUFFQTtBQUNBLE9BQUsyVCxLQUFMLENBQVd2VCxRQUFYLENBQW9CMkwsRUFBcEIsQ0FBdUIsS0FBSzFMLFNBQTVCO0FBQ0EsT0FBSytVLFdBQUwsR0FBbUIsSUFBbkI7QUFDQSxNQUFJQyxVQUFVLElBQWQ7O0FBRUE7QUFDQTtBQUNBM1YsSUFBRUMsTUFBRixFQUFVb00sRUFBVixDQUFhLE1BQWIsRUFBcUIsWUFBVztBQUMvQixPQUFJc0osUUFBUTFCLEtBQVIsQ0FBYzFULFFBQWQsQ0FBdUJrVixVQUEzQixFQUF1QztBQUN0Q0UsWUFBUW5LLE1BQVI7QUFDQTtBQUNELEdBSkQ7O0FBTUE7QUFDQTtBQUNBO0FBQ0F4TCxJQUFFQyxNQUFGLEVBQVUyVixNQUFWLENBQWlCLFlBQVc7QUFDM0IsT0FBSUQsUUFBUTFCLEtBQVIsQ0FBYzFULFFBQWQsQ0FBdUJrVixVQUEzQixFQUF1QztBQUN0QyxRQUFJRSxRQUFRRCxXQUFSLElBQXVCLElBQTNCLEVBQWlDO0FBQ2hDNUosa0JBQWE2SixRQUFRRCxXQUFyQjtBQUNBOztBQUVEQyxZQUFRRCxXQUFSLEdBQXNCMUosV0FBVyxZQUFXO0FBQzNDMkosYUFBUW5LLE1BQVI7QUFDQSxLQUZxQixFQUVuQixHQUZtQixDQUF0QjtBQUdBO0FBQ0QsR0FWRDtBQVlBLEVBakVEOztBQW1FQTs7OztBQUlBK0osWUFBVzlVLFFBQVgsR0FBc0I7QUFDckJnVixjQUFZLEtBRFM7QUFFckJJLG1CQUFpQjtBQUZJLEVBQXRCOztBQUtBOzs7QUFHQU4sWUFBV3RNLFNBQVgsQ0FBcUJ1QyxNQUFyQixHQUE4QixZQUFXO0FBQ3hDLE1BQUkxSixRQUFRLEtBQUttUyxLQUFMLENBQVduVCxRQUF2QjtBQUFBLE1BQ0MySCxNQUFNM0csUUFBUSxLQUFLbVMsS0FBTCxDQUFXMVQsUUFBWCxDQUFvQjhDLEtBRG5DO0FBQUEsTUFFQ3lTLGtCQUFrQixLQUFLN0IsS0FBTCxDQUFXMVQsUUFBWCxDQUFvQnNVLFFBRnZDO0FBQUEsTUFHQ2tCLFVBQVUsS0FBSzlCLEtBQUwsQ0FBVzVOLE1BQVgsQ0FBa0JDLFFBQWxCLEdBQTZCMFAsT0FBN0IsR0FBdUNwVCxLQUF2QyxDQUE2Q2QsS0FBN0MsRUFBb0QyRyxHQUFwRCxDQUhYO0FBQUEsTUFJQ3dOLFVBQVUsRUFKWDtBQUFBLE1BS0NDLFlBQVksQ0FMYjs7QUFPQWxXLElBQUVtQyxJQUFGLENBQU80VCxPQUFQLEVBQWdCLFVBQVM1TixLQUFULEVBQWdCdUIsSUFBaEIsRUFBc0I7QUFDckN1TSxXQUFRalQsSUFBUixDQUFhaEQsRUFBRTBKLElBQUYsRUFBUXlNLE1BQVIsRUFBYjtBQUNBLEdBRkQ7O0FBSUFELGNBQVlwUCxLQUFLSSxHQUFMLENBQVNrTCxLQUFULENBQWUsSUFBZixFQUFxQjZELE9BQXJCLENBQVo7O0FBRUEsTUFBSUMsYUFBYSxDQUFiLElBQWtCSixlQUFsQixJQUFxQyxLQUFLTixlQUE5QyxFQUErRDtBQUM5RFUsZUFBWSxLQUFLVixlQUFqQjtBQUNBOztBQUVELE9BQUtBLGVBQUwsR0FBdUJVLFNBQXZCOztBQUVBLE9BQUtqQyxLQUFMLENBQVc1TixNQUFYLENBQWtCZ0QsTUFBbEIsR0FDRThNLE1BREYsQ0FDU0QsU0FEVCxFQUVFeE8sUUFGRixDQUVXLEtBQUt1TSxLQUFMLENBQVcxVCxRQUFYLENBQW9Cc1YsZUFGL0I7QUFHQSxFQXZCRDs7QUF5QkFOLFlBQVd0TSxTQUFYLENBQXFCeUgsT0FBckIsR0FBK0IsWUFBVztBQUN6QyxNQUFJcE8sT0FBSixFQUFhMEksUUFBYjs7QUFFQSxPQUFLMUksT0FBTCxJQUFnQixLQUFLM0IsU0FBckIsRUFBZ0M7QUFDL0IsUUFBS3NULEtBQUwsQ0FBV3ZULFFBQVgsQ0FBb0JrTixHQUFwQixDQUF3QnRMLE9BQXhCLEVBQWlDLEtBQUszQixTQUFMLENBQWUyQixPQUFmLENBQWpDO0FBQ0E7QUFDRCxPQUFLMEksUUFBTCxJQUFpQnlKLE9BQU9DLG1CQUFQLENBQTJCLElBQTNCLENBQWpCLEVBQW1EO0FBQ2xELFVBQU8sS0FBSzFKLFFBQUwsQ0FBUCxLQUEwQixVQUExQixLQUF5QyxLQUFLQSxRQUFMLElBQWlCLElBQTFEO0FBQ0E7QUFDRCxFQVREOztBQVdBaEwsR0FBRXVULEVBQUYsQ0FBS0MsV0FBTCxDQUFpQkssV0FBakIsQ0FBNkJ0UixPQUE3QixDQUFxQ2dULFVBQXJDLEdBQWtEQSxVQUFsRDtBQUVBLENBNUhBLEVBNEhFdFYsT0FBTzZULEtBQVAsSUFBZ0I3VCxPQUFPOFAsTUE1SHpCLEVBNEhpQzlQLE1BNUhqQyxFQTRIeUNDLFFBNUh6Qzs7QUE4SEQ7Ozs7Ozs7QUFPQSxDQUFDLENBQUMsVUFBU0YsQ0FBVCxFQUFZQyxNQUFaLEVBQW9CQyxRQUFwQixFQUE4QkMsU0FBOUIsRUFBeUM7O0FBRTFDOzs7OztBQUtBLEtBQUlpVyxRQUFRLFNBQVJBLEtBQVEsQ0FBU3BDLFFBQVQsRUFBbUI7QUFDOUI7Ozs7O0FBS0EsT0FBS0MsS0FBTCxHQUFhRCxRQUFiOztBQUVBOzs7OztBQUtBLE9BQUtxQyxPQUFMLEdBQWUsRUFBZjs7QUFFQTs7Ozs7QUFLQSxPQUFLQyxRQUFMLEdBQWdCLElBQWhCOztBQUVBOzs7Ozs7QUFNQSxPQUFLM1YsU0FBTCxHQUFpQjtBQUNoQiwrQkFBNEJYLEVBQUVvQyxLQUFGLENBQVEsVUFBU29PLENBQVQsRUFBWTtBQUMvQyxRQUFJQSxFQUFFZSxTQUFOLEVBQWlCO0FBQ2hCLFVBQUswQyxLQUFMLENBQVdwQyxRQUFYLENBQW9CLEVBQUUzRSxNQUFNLE9BQVIsRUFBaUJqQyxNQUFNLFNBQXZCLEVBQWtDL0ksTUFBTSxDQUFFLGFBQUYsQ0FBeEMsRUFBcEI7QUFDQTtBQUNELElBSjJCLEVBSXpCLElBSnlCLENBRFo7QUFNaEIsMEJBQXVCbEMsRUFBRW9DLEtBQUYsQ0FBUSxVQUFTb08sQ0FBVCxFQUFZO0FBQzFDLFFBQUlBLEVBQUVlLFNBQUYsSUFBZSxLQUFLMEMsS0FBTCxDQUFXMVQsUUFBWCxDQUFvQmdXLEtBQW5DLElBQTRDLEtBQUtDLGNBQUwsRUFBaEQsRUFBdUU7QUFDdEVoRyxPQUFFOUMsY0FBRjtBQUNBO0FBQ0QsSUFKc0IsRUFJcEIsSUFKb0IsQ0FOUDtBQVdoQiw2QkFBMEIxTixFQUFFb0MsS0FBRixDQUFRLFVBQVNvTyxDQUFULEVBQVk7QUFDN0MsUUFBSUEsRUFBRWUsU0FBRixJQUFlLEtBQUswQyxLQUFMLENBQVc5SixFQUFYLENBQWMsVUFBZCxDQUFuQixFQUE4QztBQUM3QyxVQUFLOEosS0FBTCxDQUFXNU4sTUFBWCxDQUFrQjhDLElBQWxCLENBQXVCLDBCQUF2QixFQUFtRDVDLE1BQW5EO0FBQ0E7QUFDRCxJQUp5QixFQUl2QixJQUp1QixDQVhWO0FBZ0JoQiwyQkFBd0J2RyxFQUFFb0MsS0FBRixDQUFRLFVBQVNvTyxDQUFULEVBQVk7QUFDM0MsUUFBSUEsRUFBRWUsU0FBRixJQUFlZixFQUFFeEYsUUFBRixDQUFXQyxJQUFYLEtBQW9CLFVBQW5DLElBQWlELEtBQUtxTCxRQUExRCxFQUFvRTtBQUNuRSxVQUFLckosSUFBTDtBQUNBO0FBQ0QsSUFKdUIsRUFJckIsSUFKcUIsQ0FoQlI7QUFxQmhCLDRCQUF5QmpOLEVBQUVvQyxLQUFGLENBQVEsVUFBU29PLENBQVQsRUFBWTtBQUM1QyxRQUFJLENBQUNBLEVBQUVlLFNBQVAsRUFBa0I7QUFDakI7QUFDQTs7QUFFRCxRQUFJN1EsV0FBV1YsRUFBRXdRLEVBQUVsRixPQUFKLEVBQWFuQyxJQUFiLENBQWtCLFlBQWxCLENBQWY7O0FBRUEsUUFBSXpJLFNBQVNrRyxNQUFiLEVBQXFCO0FBQ3BCbEcsY0FBUytGLEdBQVQsQ0FBYSxTQUFiLEVBQXdCLE1BQXhCO0FBQ0EsVUFBS2dRLEtBQUwsQ0FBVy9WLFFBQVgsRUFBcUJWLEVBQUV3USxFQUFFbEYsT0FBSixDQUFyQjtBQUNBO0FBQ0QsSUFYd0IsRUFXdEIsSUFYc0I7QUFyQlQsR0FBakI7O0FBbUNBO0FBQ0EsT0FBSzJJLEtBQUwsQ0FBVzNULE9BQVgsR0FBcUJOLEVBQUVRLE1BQUYsQ0FBUyxFQUFULEVBQWE0VixNQUFNM1YsUUFBbkIsRUFBNkIsS0FBS3dULEtBQUwsQ0FBVzNULE9BQXhDLENBQXJCOztBQUVBO0FBQ0EsT0FBSzJULEtBQUwsQ0FBV3ZULFFBQVgsQ0FBb0IyTCxFQUFwQixDQUF1QixLQUFLMUwsU0FBNUI7O0FBRUEsT0FBS3NULEtBQUwsQ0FBV3ZULFFBQVgsQ0FBb0IyTCxFQUFwQixDQUF1QixpQkFBdkIsRUFBMEMsc0JBQTFDLEVBQWtFck0sRUFBRW9DLEtBQUYsQ0FBUSxVQUFTb08sQ0FBVCxFQUFZO0FBQ3JGLFFBQUtrRyxJQUFMLENBQVVsRyxDQUFWO0FBQ0EsR0FGaUUsRUFFL0QsSUFGK0QsQ0FBbEU7QUFHQSxFQXhFRDs7QUEwRUE7Ozs7QUFJQTRGLE9BQU0zVixRQUFOLEdBQWlCO0FBQ2hCOFYsU0FBTyxLQURTO0FBRWhCSSxlQUFhLEtBRkc7QUFHaEJDLGNBQVk7QUFISSxFQUFqQjs7QUFNQTs7Ozs7O0FBTUFSLE9BQU1uTixTQUFOLENBQWdCd04sS0FBaEIsR0FBd0IsVUFBUzlVLE1BQVQsRUFBaUIrSCxJQUFqQixFQUF1QjtBQUM3QyxNQUFJd0QsT0FBUSxZQUFXO0FBQ3JCLE9BQUl2TCxPQUFPbUosSUFBUCxDQUFZLGVBQVosQ0FBSixFQUFrQztBQUNqQyxXQUFPLE9BQVA7QUFDQSxJQUZELE1BRU8sSUFBSW5KLE9BQU9tSixJQUFQLENBQVksZUFBWixDQUFKLEVBQWtDO0FBQ3hDLFdBQU8sT0FBUDtBQUNBLElBRk0sTUFFQTtBQUNOLFdBQU8sU0FBUDtBQUNBO0FBQ0QsR0FSUyxFQUFYO0FBQUEsTUFTQytMLEtBQUtsVixPQUFPbUosSUFBUCxDQUFZLGVBQVosS0FBZ0NuSixPQUFPbUosSUFBUCxDQUFZLGlCQUFaLENBQWhDLElBQWtFbkosT0FBT21KLElBQVAsQ0FBWSxlQUFaLENBVHhFO0FBQUEsTUFVQzVFLFFBQVF2RSxPQUFPbUosSUFBUCxDQUFZLFlBQVosS0FBNkIsS0FBS21KLEtBQUwsQ0FBVzFULFFBQVgsQ0FBb0JxVyxVQVYxRDtBQUFBLE1BV0NULFNBQVN4VSxPQUFPbUosSUFBUCxDQUFZLGFBQVosS0FBOEIsS0FBS21KLEtBQUwsQ0FBVzFULFFBQVgsQ0FBb0JvVyxXQVg1RDtBQUFBLE1BWUN4QixNQUFNeFQsT0FBT21KLElBQVAsQ0FBWSxNQUFaLENBWlA7O0FBY0QsTUFBSXFLLEdBQUosRUFBUzs7QUFFUjs7Ozs7Ozs7Ozs7QUFZQTBCLFFBQUsxQixJQUFJeEssS0FBSixDQUFVLDJOQUFWLENBQUw7O0FBRUEsT0FBSWtNLEdBQUcsQ0FBSCxFQUFNeEUsT0FBTixDQUFjLE9BQWQsSUFBeUIsQ0FBQyxDQUE5QixFQUFpQztBQUNoQ25GLFdBQU8sU0FBUDtBQUNBLElBRkQsTUFFTyxJQUFJMkosR0FBRyxDQUFILEVBQU14RSxPQUFOLENBQWMsT0FBZCxJQUF5QixDQUFDLENBQTlCLEVBQWlDO0FBQ3ZDbkYsV0FBTyxPQUFQO0FBQ0EsSUFGTSxNQUVBLElBQUkySixHQUFHLENBQUgsRUFBTXhFLE9BQU4sQ0FBYyxPQUFkLElBQXlCLENBQUMsQ0FBOUIsRUFBaUM7QUFDdkNuRixXQUFPLE9BQVA7QUFDQSxJQUZNLE1BRUE7QUFDTixVQUFNLElBQUk0SixLQUFKLENBQVUsMEJBQVYsQ0FBTjtBQUNBO0FBQ0RELFFBQUtBLEdBQUcsQ0FBSCxDQUFMO0FBQ0EsR0ExQkQsTUEwQk87QUFDTixTQUFNLElBQUlDLEtBQUosQ0FBVSxvQkFBVixDQUFOO0FBQ0E7O0FBRUQsT0FBS1QsT0FBTCxDQUFhbEIsR0FBYixJQUFvQjtBQUNuQmpJLFNBQU1BLElBRGE7QUFFbkIySixPQUFJQSxFQUZlO0FBR25CM1EsVUFBT0EsS0FIWTtBQUluQmlRLFdBQVFBO0FBSlcsR0FBcEI7O0FBT0F6TSxPQUFLb0IsSUFBTCxDQUFVLFlBQVYsRUFBd0JxSyxHQUF4Qjs7QUFFQSxPQUFLNEIsU0FBTCxDQUFlcFYsTUFBZixFQUF1QixLQUFLMFUsT0FBTCxDQUFhbEIsR0FBYixDQUF2QjtBQUNBLEVBdkREOztBQXlEQTs7Ozs7OztBQU9BaUIsT0FBTW5OLFNBQU4sQ0FBZ0I4TixTQUFoQixHQUE0QixVQUFTcFYsTUFBVCxFQUFpQjRVLEtBQWpCLEVBQXdCO0FBQ25ELE1BQUlTLE1BQUo7QUFBQSxNQUNDQyxJQUREO0FBQUEsTUFFQ0MsSUFGRDtBQUFBLE1BR0NDLGFBQWFaLE1BQU1yUSxLQUFOLElBQWVxUSxNQUFNSixNQUFyQixHQUE4QixXQUFXSSxNQUFNclEsS0FBakIsR0FBeUIsWUFBekIsR0FBd0NxUSxNQUFNSixNQUE5QyxHQUF1RCxLQUFyRixHQUE2RixFQUgzRztBQUFBLE1BSUNpQixXQUFXelYsT0FBT3dILElBQVAsQ0FBWSxLQUFaLENBSlo7QUFBQSxNQUtDa08sVUFBVSxLQUxYO0FBQUEsTUFNQ0MsWUFBWSxFQU5iO0FBQUEsTUFPQy9XLFdBQVcsS0FBSzBULEtBQUwsQ0FBVzFULFFBUHZCO0FBQUEsTUFRQ2dYLFNBQVMsU0FBVEEsTUFBUyxDQUFTTCxJQUFULEVBQWU7QUFDdkJELFVBQU8seUNBQVA7O0FBRUEsT0FBSTFXLFNBQVNzVSxRQUFiLEVBQXVCO0FBQ3RCbUMsYUFBU2hYLEVBQUUsUUFBRixFQUFXO0FBQ25CLGNBQVMsa0JBQWtCc1gsU0FEUjtBQUVuQixnQkFBV0o7QUFGUSxLQUFYLENBQVQ7QUFJQSxJQUxELE1BS087QUFDTkYsYUFBU2hYLEVBQUcsUUFBSCxFQUFhO0FBQ3JCLGNBQVMsY0FEWTtBQUVyQixjQUFTLG9DQUFvQ2tYLElBQXBDLEdBQTJDO0FBRi9CLEtBQWIsQ0FBVDtBQUlBO0FBQ0R2VixVQUFPd08sS0FBUCxDQUFhNkcsTUFBYjtBQUNBclYsVUFBT3dPLEtBQVAsQ0FBYThHLElBQWI7QUFDQSxHQXhCRjs7QUEwQkE7QUFDQXRWLFNBQU95SCxJQUFQLENBQWFwSixFQUFHLFFBQUgsRUFBYTtBQUN6QixZQUFTLG1CQURnQjtBQUV6QixZQUFTbVg7QUFGZ0IsR0FBYixDQUFiOztBQUtBLE1BQUksS0FBS2xELEtBQUwsQ0FBVzFULFFBQVgsQ0FBb0JzVSxRQUF4QixFQUFrQztBQUNqQ3dDLGFBQVUsVUFBVjtBQUNBQyxlQUFZLFVBQVo7QUFDQTs7QUFFRDtBQUNBLE1BQUlGLFNBQVN4USxNQUFiLEVBQXFCO0FBQ3BCMlEsVUFBT0gsU0FBU3RNLElBQVQsQ0FBY3VNLE9BQWQsQ0FBUDtBQUNBRCxZQUFTN1EsTUFBVDtBQUNBLFVBQU8sS0FBUDtBQUNBOztBQUVELE1BQUlnUSxNQUFNckosSUFBTixLQUFlLFNBQW5CLEVBQThCO0FBQzdCZ0ssVUFBTywwQkFBMEJYLE1BQU1NLEVBQWhDLEdBQXFDLGdCQUE1QztBQUNBVSxVQUFPTCxJQUFQO0FBQ0EsR0FIRCxNQUdPLElBQUlYLE1BQU1ySixJQUFOLEtBQWUsT0FBbkIsRUFBNEI7QUFDbENsTixLQUFFd1gsSUFBRixDQUFPO0FBQ050SyxVQUFNLEtBREE7QUFFTmlJLFNBQUssOEJBQThCb0IsTUFBTU0sRUFBcEMsR0FBeUMsT0FGeEM7QUFHTlksV0FBTyxVQUhEO0FBSU5DLGNBQVUsT0FKSjtBQUtOQyxhQUFTLGlCQUFTcE0sSUFBVCxFQUFlO0FBQ3ZCMkwsWUFBTzNMLEtBQUssQ0FBTCxFQUFRcU0sZUFBZjtBQUNBTCxZQUFPTCxJQUFQO0FBQ0E7QUFSSyxJQUFQO0FBVUEsR0FYTSxNQVdBLElBQUlYLE1BQU1ySixJQUFOLEtBQWUsT0FBbkIsRUFBNEI7QUFDbENsTixLQUFFd1gsSUFBRixDQUFPO0FBQ050SyxVQUFNLEtBREE7QUFFTmlJLFNBQUssNEJBQTRCb0IsTUFBTU0sRUFBbEMsR0FBdUMsT0FGdEM7QUFHTlksV0FBTyxVQUhEO0FBSU5DLGNBQVUsT0FKSjtBQUtOQyxhQUFTLGlCQUFTcE0sSUFBVCxFQUFlO0FBQ3ZCMkwsWUFBTzNMLEtBQUtzTSxhQUFaO0FBQ0FOLFlBQU9MLElBQVA7QUFDQTtBQVJLLElBQVA7QUFVQTtBQUNELEVBdkVEOztBQXlFQTs7OztBQUlBZCxPQUFNbk4sU0FBTixDQUFnQmdFLElBQWhCLEdBQXVCLFlBQVc7QUFDakMsT0FBS2dILEtBQUwsQ0FBV2hLLE9BQVgsQ0FBbUIsTUFBbkIsRUFBMkIsSUFBM0IsRUFBaUMsT0FBakM7QUFDQSxPQUFLcU0sUUFBTCxDQUFjbk4sSUFBZCxDQUFtQixrQkFBbkIsRUFBdUM1QyxNQUF2QztBQUNBLE9BQUsrUCxRQUFMLENBQWN2TixXQUFkLENBQTBCLG1CQUExQjtBQUNBLE9BQUt1TixRQUFMLEdBQWdCLElBQWhCO0FBQ0EsT0FBS3JDLEtBQUwsQ0FBV3pKLEtBQVgsQ0FBaUIsU0FBakI7QUFDQSxPQUFLeUosS0FBTCxDQUFXaEssT0FBWCxDQUFtQixTQUFuQixFQUE4QixJQUE5QixFQUFvQyxPQUFwQztBQUNBLEVBUEQ7O0FBU0E7Ozs7O0FBS0FtTSxPQUFNbk4sU0FBTixDQUFnQnlOLElBQWhCLEdBQXVCLFVBQVNyTCxLQUFULEVBQWdCO0FBQ3RDLE1BQUkxSixTQUFTM0IsRUFBRXFMLE1BQU0xSixNQUFSLENBQWI7QUFBQSxNQUNDK0gsT0FBTy9ILE9BQU9rTSxPQUFQLENBQWUsTUFBTSxLQUFLb0csS0FBTCxDQUFXMVQsUUFBWCxDQUFvQmdGLFNBQXpDLENBRFI7QUFBQSxNQUVDZ1IsUUFBUSxLQUFLRixPQUFMLENBQWEzTSxLQUFLb0IsSUFBTCxDQUFVLFlBQVYsQ0FBYixDQUZUO0FBQUEsTUFHQzVFLFFBQVFxUSxNQUFNclEsS0FBTixJQUFlLE1BSHhCO0FBQUEsTUFJQ2lRLFNBQVNJLE1BQU1KLE1BQU4sSUFBZ0IsS0FBS2xDLEtBQUwsQ0FBVzVOLE1BQVgsQ0FBa0I4UCxNQUFsQixFQUoxQjtBQUFBLE1BS0MyQixJQUxEO0FBQUEsTUFNQ0MsTUFORDs7QUFRQSxNQUFJLEtBQUt6QixRQUFULEVBQW1CO0FBQ2xCO0FBQ0E7O0FBRUQsT0FBS3JDLEtBQUwsQ0FBV2pLLEtBQVgsQ0FBaUIsU0FBakI7QUFDQSxPQUFLaUssS0FBTCxDQUFXaEssT0FBWCxDQUFtQixNQUFuQixFQUEyQixJQUEzQixFQUFpQyxPQUFqQzs7QUFFQVAsU0FBTyxLQUFLdUssS0FBTCxDQUFXNVEsS0FBWCxDQUFpQixLQUFLNFEsS0FBTCxDQUFXN04sUUFBWCxDQUFvQnNELEtBQUt2QixLQUFMLEVBQXBCLENBQWpCLENBQVA7O0FBRUEsT0FBSzhMLEtBQUwsQ0FBVzNMLEtBQVgsQ0FBaUJvQixLQUFLdkIsS0FBTCxFQUFqQjs7QUFFQTJQLFNBQU85WCxFQUFHLDZGQUFILENBQVA7QUFDQThYLE9BQUtoTixJQUFMLENBQVcsUUFBWCxFQUFxQnFMLE1BQXJCO0FBQ0EyQixPQUFLaE4sSUFBTCxDQUFXLE9BQVgsRUFBb0I1RSxLQUFwQjtBQUNBLE1BQUlxUSxNQUFNckosSUFBTixLQUFlLFNBQW5CLEVBQThCO0FBQzdCNEssUUFBS2hOLElBQUwsQ0FBVyxLQUFYLEVBQWtCLDZCQUE2QnlMLE1BQU1NLEVBQW5DLEdBQXdDLHNCQUF4QyxHQUFpRU4sTUFBTU0sRUFBekY7QUFDQSxHQUZELE1BRU8sSUFBSU4sTUFBTXJKLElBQU4sS0FBZSxPQUFuQixFQUE0QjtBQUNsQzRLLFFBQUtoTixJQUFMLENBQVcsS0FBWCxFQUFrQiw4QkFBOEJ5TCxNQUFNTSxFQUFwQyxHQUF5QyxhQUEzRDtBQUNBLEdBRk0sTUFFQSxJQUFJTixNQUFNckosSUFBTixLQUFlLE9BQW5CLEVBQTRCO0FBQ2xDNEssUUFBS2hOLElBQUwsQ0FBVyxLQUFYLEVBQWtCLHNCQUFzQnlMLE1BQU1NLEVBQTVCLEdBQWlDLHVCQUFuRDtBQUNBOztBQUVEa0IsV0FBUy9YLEVBQUU4WCxJQUFGLEVBQVExTyxJQUFSLENBQWMsaUNBQWQsRUFBa0Q0TyxXQUFsRCxDQUE4RHRPLEtBQUtQLElBQUwsQ0FBVSxZQUFWLENBQTlELENBQVQ7O0FBRUEsT0FBS21OLFFBQUwsR0FBZ0I1TSxLQUFLaEMsUUFBTCxDQUFjLG1CQUFkLENBQWhCO0FBQ0EsRUFsQ0Q7O0FBb0NBOzs7Ozs7QUFNQTBPLE9BQU1uTixTQUFOLENBQWdCdU4sY0FBaEIsR0FBaUMsWUFBVztBQUMzQyxNQUFJblcsVUFBVUgsU0FBUytYLGlCQUFULElBQThCL1gsU0FBU2dZLG9CQUF2QyxJQUNaaFksU0FBU2lZLHVCQURYOztBQUdBLFNBQU85WCxXQUFXTCxFQUFFSyxPQUFGLEVBQVdnSixNQUFYLEdBQW9CK08sUUFBcEIsQ0FBNkIsaUJBQTdCLENBQWxCO0FBQ0EsRUFMRDs7QUFPQTs7O0FBR0FoQyxPQUFNbk4sU0FBTixDQUFnQnlILE9BQWhCLEdBQTBCLFlBQVc7QUFDcEMsTUFBSXBPLE9BQUosRUFBYTBJLFFBQWI7O0FBRUEsT0FBS2lKLEtBQUwsQ0FBV3ZULFFBQVgsQ0FBb0JrTixHQUFwQixDQUF3QixpQkFBeEI7O0FBRUEsT0FBS3RMLE9BQUwsSUFBZ0IsS0FBSzNCLFNBQXJCLEVBQWdDO0FBQy9CLFFBQUtzVCxLQUFMLENBQVd2VCxRQUFYLENBQW9Ca04sR0FBcEIsQ0FBd0J0TCxPQUF4QixFQUFpQyxLQUFLM0IsU0FBTCxDQUFlMkIsT0FBZixDQUFqQztBQUNBO0FBQ0QsT0FBSzBJLFFBQUwsSUFBaUJ5SixPQUFPQyxtQkFBUCxDQUEyQixJQUEzQixDQUFqQixFQUFtRDtBQUNsRCxVQUFPLEtBQUsxSixRQUFMLENBQVAsSUFBeUIsVUFBekIsS0FBd0MsS0FBS0EsUUFBTCxJQUFpQixJQUF6RDtBQUNBO0FBQ0QsRUFYRDs7QUFhQWhMLEdBQUV1VCxFQUFGLENBQUtDLFdBQUwsQ0FBaUJLLFdBQWpCLENBQTZCdFIsT0FBN0IsQ0FBcUM2VCxLQUFyQyxHQUE2Q0EsS0FBN0M7QUFFQSxDQS9UQSxFQStURW5XLE9BQU82VCxLQUFQLElBQWdCN1QsT0FBTzhQLE1BL1R6QixFQStUaUM5UCxNQS9UakMsRUErVHlDQyxRQS9UekM7O0FBaVVEOzs7Ozs7O0FBT0EsQ0FBQyxDQUFDLFVBQVNGLENBQVQsRUFBWUMsTUFBWixFQUFvQkMsUUFBcEIsRUFBOEJDLFNBQTlCLEVBQXlDOztBQUUxQzs7Ozs7QUFLQSxLQUFJa1ksVUFBVSxTQUFWQSxPQUFVLENBQVNDLEtBQVQsRUFBZ0I7QUFDN0IsT0FBS0MsSUFBTCxHQUFZRCxLQUFaO0FBQ0EsT0FBS0MsSUFBTCxDQUFValksT0FBVixHQUFvQk4sRUFBRVEsTUFBRixDQUFTLEVBQVQsRUFBYTZYLFFBQVE1WCxRQUFyQixFQUErQixLQUFLOFgsSUFBTCxDQUFValksT0FBekMsQ0FBcEI7QUFDQSxPQUFLa1ksUUFBTCxHQUFnQixJQUFoQjtBQUNBLE9BQUszUSxRQUFMLEdBQWdCMUgsU0FBaEI7QUFDQSxPQUFLaVAsSUFBTCxHQUFZalAsU0FBWjs7QUFFQSxPQUFLbVYsUUFBTCxHQUFnQjtBQUNmLDBCQUF1QnRWLEVBQUVvQyxLQUFGLENBQVEsVUFBU29PLENBQVQsRUFBWTtBQUMxQyxRQUFJQSxFQUFFZSxTQUFGLElBQWVmLEVBQUV4RixRQUFGLENBQVdDLElBQVgsSUFBbUIsVUFBdEMsRUFBa0Q7QUFDakQsVUFBS3BELFFBQUwsR0FBZ0IsS0FBSzBRLElBQUwsQ0FBVXhXLE9BQVYsRUFBaEI7QUFDQSxVQUFLcU4sSUFBTCxHQUFZb0IsRUFBRXhGLFFBQUYsQ0FBV0UsS0FBdkI7QUFDQTtBQUNELElBTHNCLEVBS3BCLElBTG9CLENBRFI7QUFPZixxRUFBa0VsTCxFQUFFb0MsS0FBRixDQUFRLFVBQVNvTyxDQUFULEVBQVk7QUFDckYsUUFBSUEsRUFBRWUsU0FBTixFQUFpQjtBQUNoQixVQUFLaUgsUUFBTCxHQUFnQmhJLEVBQUV0RCxJQUFGLElBQVUsWUFBMUI7QUFDQTtBQUNELElBSmlFLEVBSS9ELElBSitELENBUG5EO0FBWWYsNkJBQTBCbE4sRUFBRW9DLEtBQUYsQ0FBUSxVQUFTb08sQ0FBVCxFQUFZO0FBQzdDLFFBQUlBLEVBQUVlLFNBQUYsSUFBZSxLQUFLaUgsUUFBcEIsS0FBaUMsS0FBS0QsSUFBTCxDQUFValksT0FBVixDQUFrQm1ZLFVBQWxCLElBQWdDLEtBQUtGLElBQUwsQ0FBVWpZLE9BQVYsQ0FBa0JvWSxTQUFuRixDQUFKLEVBQW1HO0FBQ2xHLFVBQUtDLElBQUw7QUFDQTtBQUNELElBSnlCLEVBSXZCLElBSnVCO0FBWlgsR0FBaEI7O0FBbUJBLE9BQUtKLElBQUwsQ0FBVTdYLFFBQVYsQ0FBbUIyTCxFQUFuQixDQUFzQixLQUFLaUosUUFBM0I7QUFDQSxFQTNCRDs7QUE2QkE7Ozs7QUFJQStDLFNBQVE1WCxRQUFSLEdBQW1CO0FBQ2xCZ1ksY0FBWSxLQURNO0FBRWxCQyxhQUFXO0FBRk8sRUFBbkI7O0FBS0E7Ozs7O0FBS0FMLFNBQVFwUCxTQUFSLENBQWtCMFAsSUFBbEIsR0FBeUIsWUFBVzs7QUFFbkMsTUFBSSxLQUFLSixJQUFMLENBQVVoWSxRQUFWLENBQW1COEMsS0FBbkIsS0FBNkIsQ0FBakMsRUFBb0M7QUFDbkM7QUFDQTs7QUFFRCxNQUFJLENBQUNyRCxFQUFFbU0sT0FBRixDQUFVeU0sU0FBWCxJQUF3QixDQUFDNVksRUFBRW1NLE9BQUYsQ0FBVUMsVUFBdkMsRUFBbUQ7QUFDbEQ7QUFDQTs7QUFFRCxPQUFLbU0sSUFBTCxDQUFVcEwsS0FBVixDQUFnQixDQUFoQjs7QUFFQSxNQUFJSixJQUFKO0FBQUEsTUFDQzhMLFFBQVE3WSxFQUFFb0MsS0FBRixDQUFRLEtBQUt5VyxLQUFiLEVBQW9CLElBQXBCLENBRFQ7QUFBQSxNQUVDaFIsV0FBVyxLQUFLMFEsSUFBTCxDQUFVbFMsTUFBVixDQUFpQkMsUUFBakIsR0FBNEIyQixFQUE1QixDQUErQixLQUFLSixRQUFwQyxDQUZaO0FBQUEsTUFHQ3VILE9BQU8sS0FBS21KLElBQUwsQ0FBVWxTLE1BQVYsQ0FBaUJDLFFBQWpCLEdBQTRCMkIsRUFBNUIsQ0FBK0IsS0FBS21ILElBQXBDLENBSFI7QUFBQSxNQUlDMEosV0FBVyxLQUFLUCxJQUFMLENBQVVoWSxRQUFWLENBQW1CbVksU0FKL0I7QUFBQSxNQUtDSyxXQUFXLEtBQUtSLElBQUwsQ0FBVWhZLFFBQVYsQ0FBbUJrWSxVQUwvQjs7QUFPQSxNQUFJLEtBQUtGLElBQUwsQ0FBVXhXLE9BQVYsT0FBd0IsS0FBSzhGLFFBQWpDLEVBQTJDO0FBQzFDO0FBQ0E7O0FBRUQsTUFBSWtSLFFBQUosRUFBYztBQUNiaE0sVUFBTyxLQUFLd0wsSUFBTCxDQUFVelEsV0FBVixDQUFzQixLQUFLRCxRQUEzQixJQUF1QyxLQUFLMFEsSUFBTCxDQUFVelEsV0FBVixDQUFzQixLQUFLc0gsSUFBM0IsQ0FBOUM7QUFDQXZILFlBQVN5RixHQUFULENBQWF0TixFQUFFbU0sT0FBRixDQUFVeU0sU0FBVixDQUFvQm5RLEdBQWpDLEVBQXNDb1EsS0FBdEMsRUFDRXBTLEdBREYsQ0FDTyxFQUFFLFFBQVFzRyxPQUFPLElBQWpCLEVBRFAsRUFFRXJGLFFBRkYsQ0FFVywyQkFGWCxFQUdFQSxRQUhGLENBR1dxUixRQUhYO0FBSUE7O0FBRUQsTUFBSUQsUUFBSixFQUFjO0FBQ2IxSixRQUFLOUIsR0FBTCxDQUFTdE4sRUFBRW1NLE9BQUYsQ0FBVXlNLFNBQVYsQ0FBb0JuUSxHQUE3QixFQUFrQ29RLEtBQWxDLEVBQ0VuUixRQURGLENBQ1csMEJBRFgsRUFFRUEsUUFGRixDQUVXb1IsUUFGWDtBQUdBO0FBQ0QsRUFwQ0Q7O0FBc0NBVCxTQUFRcFAsU0FBUixDQUFrQjRQLEtBQWxCLEdBQTBCLFVBQVNySSxDQUFULEVBQVk7QUFDckN4USxJQUFFd1EsRUFBRTdPLE1BQUosRUFBWThFLEdBQVosQ0FBaUIsRUFBRSxRQUFRLEVBQVYsRUFBakIsRUFDRXNDLFdBREYsQ0FDYywyQ0FEZCxFQUVFQSxXQUZGLENBRWMsS0FBS3dQLElBQUwsQ0FBVWhZLFFBQVYsQ0FBbUJtWSxTQUZqQyxFQUdFM1AsV0FIRixDQUdjLEtBQUt3UCxJQUFMLENBQVVoWSxRQUFWLENBQW1Ca1ksVUFIakM7QUFJQSxPQUFLRixJQUFMLENBQVVqTSxlQUFWO0FBQ0EsRUFORDs7QUFRQTs7OztBQUlBK0wsU0FBUXBQLFNBQVIsQ0FBa0J5SCxPQUFsQixHQUE0QixZQUFXO0FBQ3RDLE1BQUlwTyxPQUFKLEVBQWEwSSxRQUFiOztBQUVBLE9BQUsxSSxPQUFMLElBQWdCLEtBQUtnVCxRQUFyQixFQUErQjtBQUM5QixRQUFLaUQsSUFBTCxDQUFVN1gsUUFBVixDQUFtQmtOLEdBQW5CLENBQXVCdEwsT0FBdkIsRUFBZ0MsS0FBS2dULFFBQUwsQ0FBY2hULE9BQWQsQ0FBaEM7QUFDQTtBQUNELE9BQUswSSxRQUFMLElBQWlCeUosT0FBT0MsbUJBQVAsQ0FBMkIsSUFBM0IsQ0FBakIsRUFBbUQ7QUFDbEQsVUFBTyxLQUFLMUosUUFBTCxDQUFQLElBQXlCLFVBQXpCLEtBQXdDLEtBQUtBLFFBQUwsSUFBaUIsSUFBekQ7QUFDQTtBQUNELEVBVEQ7O0FBV0FoTCxHQUFFdVQsRUFBRixDQUFLQyxXQUFMLENBQWlCSyxXQUFqQixDQUE2QnRSLE9BQTdCLENBQXFDOFYsT0FBckMsR0FBK0NBLE9BQS9DO0FBRUEsQ0FqSEEsRUFpSEVwWSxPQUFPNlQsS0FBUCxJQUFnQjdULE9BQU84UCxNQWpIekIsRUFpSGlDOVAsTUFqSGpDLEVBaUh5Q0MsUUFqSHpDOztBQW1IRDs7Ozs7Ozs7O0FBU0EsQ0FBQyxDQUFDLFVBQVNGLENBQVQsRUFBWUMsTUFBWixFQUFvQkMsUUFBcEIsRUFBOEJDLFNBQTlCLEVBQXlDOztBQUUxQzs7Ozs7QUFLQSxLQUFJNlksV0FBVyxTQUFYQSxRQUFXLENBQVNoRixRQUFULEVBQW1CO0FBQ2pDOzs7OztBQUtBLE9BQUtDLEtBQUwsR0FBYUQsUUFBYjs7QUFFQTs7OztBQUlBLE9BQUtpRixLQUFMLEdBQWEsSUFBYjs7QUFFQTs7Ozs7OztBQU9BLE9BQUtDLEtBQUwsR0FBYSxDQUFiOztBQUVBOzs7O0FBSUEsT0FBS0MsUUFBTCxHQUFnQixDQUFoQjs7QUFFQTs7OztBQUlBLE9BQUtDLE9BQUwsR0FBZSxJQUFmOztBQUVBOzs7OztBQUtBLE9BQUt6WSxTQUFMLEdBQWlCO0FBQ2hCLDJCQUF3QlgsRUFBRW9DLEtBQUYsQ0FBUSxVQUFTb08sQ0FBVCxFQUFZO0FBQzNDLFFBQUlBLEVBQUVlLFNBQUYsSUFBZWYsRUFBRXhGLFFBQUYsQ0FBV0MsSUFBWCxLQUFvQixVQUF2QyxFQUFtRDtBQUNsRCxTQUFJLEtBQUtnSixLQUFMLENBQVcxVCxRQUFYLENBQW9COFksUUFBeEIsRUFBa0M7QUFDakMsV0FBSzNDLElBQUw7QUFDQSxNQUZELE1BRU87QUFDTixXQUFLekosSUFBTDtBQUNBO0FBQ0QsS0FORCxNQU1PLElBQUl1RCxFQUFFZSxTQUFGLElBQWVmLEVBQUV4RixRQUFGLENBQVdDLElBQVgsS0FBb0IsVUFBbkMsSUFBaUQsS0FBS21PLE9BQTFELEVBQW1FO0FBQ3pFO0FBQ0E7QUFDQSxVQUFLRixLQUFMLEdBQWEsQ0FBYjtBQUNBO0FBQ0QsSUFadUIsRUFZckIsSUFacUIsQ0FEUjtBQWNoQiwrQkFBNEJsWixFQUFFb0MsS0FBRixDQUFRLFVBQVNvTyxDQUFULEVBQVk7QUFDL0MsUUFBSUEsRUFBRWUsU0FBRixJQUFlLEtBQUswQyxLQUFMLENBQVcxVCxRQUFYLENBQW9COFksUUFBdkMsRUFBaUQ7QUFDaEQsVUFBSzNDLElBQUw7QUFDQTtBQUNELElBSjJCLEVBSXpCLElBSnlCLENBZFo7QUFtQmhCLHdCQUFxQjFXLEVBQUVvQyxLQUFGLENBQVEsVUFBU29PLENBQVQsRUFBWThJLENBQVosRUFBZUMsQ0FBZixFQUFrQjtBQUM5QyxRQUFJL0ksRUFBRWUsU0FBTixFQUFpQjtBQUNoQixVQUFLbUYsSUFBTCxDQUFVNEMsQ0FBVixFQUFhQyxDQUFiO0FBQ0E7QUFDRCxJQUpvQixFQUlsQixJQUprQixDQW5CTDtBQXdCaEIsd0JBQXFCdlosRUFBRW9DLEtBQUYsQ0FBUSxVQUFTb08sQ0FBVCxFQUFZO0FBQ3hDLFFBQUlBLEVBQUVlLFNBQU4sRUFBaUI7QUFDaEIsVUFBS3RFLElBQUw7QUFDQTtBQUNELElBSm9CLEVBSWxCLElBSmtCLENBeEJMO0FBNkJoQiw2QkFBMEJqTixFQUFFb0MsS0FBRixDQUFRLFlBQVc7QUFDNUMsUUFBSSxLQUFLNlIsS0FBTCxDQUFXMVQsUUFBWCxDQUFvQmlaLGtCQUFwQixJQUEwQyxLQUFLdkYsS0FBTCxDQUFXOUosRUFBWCxDQUFjLFVBQWQsQ0FBOUMsRUFBeUU7QUFDeEUsVUFBS3NQLEtBQUw7QUFDQTtBQUNELElBSnlCLEVBSXZCLElBSnVCLENBN0JWO0FBa0NoQiw4QkFBMkJ6WixFQUFFb0MsS0FBRixDQUFRLFlBQVc7QUFDN0MsUUFBSSxLQUFLNlIsS0FBTCxDQUFXMVQsUUFBWCxDQUFvQmlaLGtCQUFwQixJQUEwQyxLQUFLdkYsS0FBTCxDQUFXOUosRUFBWCxDQUFjLFVBQWQsQ0FBOUMsRUFBeUU7QUFDeEUsVUFBS3VNLElBQUw7QUFDQTtBQUNELElBSjBCLEVBSXhCLElBSndCLENBbENYO0FBdUNoQiwwQkFBdUIxVyxFQUFFb0MsS0FBRixDQUFRLFlBQVc7QUFDekMsUUFBSSxLQUFLNlIsS0FBTCxDQUFXMVQsUUFBWCxDQUFvQmlaLGtCQUFwQixJQUEwQyxLQUFLdkYsS0FBTCxDQUFXOUosRUFBWCxDQUFjLFVBQWQsQ0FBOUMsRUFBeUU7QUFDeEUsVUFBS3NQLEtBQUw7QUFDQTtBQUNELElBSnNCLEVBSXBCLElBSm9CLENBdkNQO0FBNENoQix3QkFBcUJ6WixFQUFFb0MsS0FBRixDQUFRLFlBQVc7QUFDdkMsUUFBSSxLQUFLNlIsS0FBTCxDQUFXMVQsUUFBWCxDQUFvQmlaLGtCQUF4QixFQUE0QztBQUMzQyxVQUFLOUMsSUFBTDtBQUNBO0FBQ0QsSUFKb0IsRUFJbEIsSUFKa0I7QUE1Q0wsR0FBakI7O0FBbURBO0FBQ0EsT0FBS3pDLEtBQUwsQ0FBV3ZULFFBQVgsQ0FBb0IyTCxFQUFwQixDQUF1QixLQUFLMUwsU0FBNUI7O0FBRUE7QUFDQSxPQUFLc1QsS0FBTCxDQUFXM1QsT0FBWCxHQUFxQk4sRUFBRVEsTUFBRixDQUFTLEVBQVQsRUFBYXdZLFNBQVN2WSxRQUF0QixFQUFnQyxLQUFLd1QsS0FBTCxDQUFXM1QsT0FBM0MsQ0FBckI7QUFDQSxFQWhHRDs7QUFrR0E7Ozs7QUFJQTBZLFVBQVN2WSxRQUFULEdBQW9CO0FBQ25CNFksWUFBVSxLQURTO0FBRW5CSyxtQkFBaUIsSUFGRTtBQUduQkYsc0JBQW9CLEtBSEQ7QUFJbkJHLGlCQUFlO0FBSkksRUFBcEI7O0FBT0E7Ozs7O0FBS0FYLFVBQVMvUCxTQUFULENBQW1CMlEsS0FBbkIsR0FBMkIsVUFBU3pNLEtBQVQsRUFBZ0I7QUFDMUMsT0FBSzhMLEtBQUwsR0FBYWhaLE9BQU8rTCxVQUFQLENBQ1poTSxFQUFFb0MsS0FBRixDQUFRLEtBQUt3WCxLQUFiLEVBQW9CLElBQXBCLEVBQTBCek0sS0FBMUIsQ0FEWSxFQUVaLEtBQUtnTSxRQUFMLElBQWlCclMsS0FBSytTLEtBQUwsQ0FBVyxLQUFLQyxJQUFMLEtBQWMsS0FBS1gsUUFBOUIsSUFBMEMsQ0FBM0QsSUFBZ0UsS0FBS1csSUFBTCxFQUZwRCxDQUFiOztBQUtBLE1BQUksS0FBSzdGLEtBQUwsQ0FBVzlKLEVBQVgsQ0FBYyxhQUFkLEtBQWdDakssU0FBUzZaLE1BQTdDLEVBQXFEO0FBQ3BEO0FBQ0E7QUFDRCxPQUFLOUYsS0FBTCxDQUFXN0UsSUFBWCxDQUFnQmpDLFNBQVMsS0FBSzhHLEtBQUwsQ0FBVzFULFFBQVgsQ0FBb0JvWixhQUE3QztBQUNBLEVBVkQ7O0FBWUE7Ozs7QUFJQVgsVUFBUy9QLFNBQVQsQ0FBbUI2USxJQUFuQixHQUEwQixZQUFXO0FBQ3BDLFNBQU8sSUFBSTFNLElBQUosR0FBV0MsT0FBWCxLQUF1QixLQUFLNkwsS0FBbkM7QUFDQSxFQUZEOztBQUlBOzs7Ozs7QUFNQUYsVUFBUy9QLFNBQVQsQ0FBbUJ5TixJQUFuQixHQUEwQixVQUFTc0QsT0FBVCxFQUFrQjdNLEtBQWxCLEVBQXlCO0FBQ2xELE1BQUk4TSxPQUFKOztBQUVBLE1BQUksQ0FBQyxLQUFLaEcsS0FBTCxDQUFXOUosRUFBWCxDQUFjLFVBQWQsQ0FBTCxFQUFnQztBQUMvQixRQUFLOEosS0FBTCxDQUFXakssS0FBWCxDQUFpQixVQUFqQjtBQUNBOztBQUVEZ1EsWUFBVUEsV0FBVyxLQUFLL0YsS0FBTCxDQUFXMVQsUUFBWCxDQUFvQm1aLGVBQXpDOztBQUVBO0FBQ0E7QUFDQU8sWUFBVW5ULEtBQUtDLEdBQUwsQ0FBUyxLQUFLbVMsS0FBTCxJQUFjLEtBQUtDLFFBQUwsSUFBaUJhLE9BQS9CLENBQVQsRUFBa0RBLE9BQWxELENBQVY7O0FBRUEsTUFBSSxLQUFLWixPQUFULEVBQWtCO0FBQ2pCO0FBQ0EsUUFBS0YsS0FBTCxHQUFhLEtBQUtZLElBQUwsRUFBYjtBQUNBLFFBQUtWLE9BQUwsR0FBZSxLQUFmO0FBQ0EsR0FKRCxNQUlPO0FBQ047QUFDQW5aLFVBQU82TCxZQUFQLENBQW9CLEtBQUttTixLQUF6QjtBQUNBOztBQUVEO0FBQ0EsT0FBS0MsS0FBTCxJQUFjLEtBQUtZLElBQUwsS0FBY0UsT0FBZCxHQUF3QkMsT0FBdEM7O0FBRUEsT0FBS2QsUUFBTCxHQUFnQmEsT0FBaEI7QUFDQSxPQUFLZixLQUFMLEdBQWFoWixPQUFPK0wsVUFBUCxDQUFrQmhNLEVBQUVvQyxLQUFGLENBQVEsS0FBS3dYLEtBQWIsRUFBb0IsSUFBcEIsRUFBMEJ6TSxLQUExQixDQUFsQixFQUFvRDZNLFVBQVVDLE9BQTlELENBQWI7QUFDQSxFQTNCRDs7QUE2QkE7Ozs7QUFJQWpCLFVBQVMvUCxTQUFULENBQW1CZ0UsSUFBbkIsR0FBMEIsWUFBVztBQUNwQyxNQUFJLEtBQUtnSCxLQUFMLENBQVc5SixFQUFYLENBQWMsVUFBZCxDQUFKLEVBQStCO0FBQzlCO0FBQ0EsUUFBSytPLEtBQUwsR0FBYSxDQUFiO0FBQ0EsUUFBS0UsT0FBTCxHQUFlLElBQWY7O0FBRUFuWixVQUFPNkwsWUFBUCxDQUFvQixLQUFLbU4sS0FBekI7QUFDQSxRQUFLaEYsS0FBTCxDQUFXekosS0FBWCxDQUFpQixVQUFqQjtBQUNBO0FBQ0QsRUFURDs7QUFXQTs7OztBQUlBd08sVUFBUy9QLFNBQVQsQ0FBbUJ3USxLQUFuQixHQUEyQixZQUFXO0FBQ3JDLE1BQUksS0FBS3hGLEtBQUwsQ0FBVzlKLEVBQVgsQ0FBYyxVQUFkLEtBQTZCLENBQUMsS0FBS2lQLE9BQXZDLEVBQWdEO0FBQy9DO0FBQ0EsUUFBS0YsS0FBTCxHQUFhLEtBQUtZLElBQUwsRUFBYjtBQUNBLFFBQUtWLE9BQUwsR0FBZSxJQUFmOztBQUVBblosVUFBTzZMLFlBQVAsQ0FBb0IsS0FBS21OLEtBQXpCO0FBQ0E7QUFDRCxFQVJEOztBQVVBOzs7QUFHQUQsVUFBUy9QLFNBQVQsQ0FBbUJ5SCxPQUFuQixHQUE2QixZQUFXO0FBQ3ZDLE1BQUlwTyxPQUFKLEVBQWEwSSxRQUFiOztBQUVBLE9BQUtpQyxJQUFMOztBQUVBLE9BQUszSyxPQUFMLElBQWdCLEtBQUszQixTQUFyQixFQUFnQztBQUMvQixRQUFLc1QsS0FBTCxDQUFXdlQsUUFBWCxDQUFvQmtOLEdBQXBCLENBQXdCdEwsT0FBeEIsRUFBaUMsS0FBSzNCLFNBQUwsQ0FBZTJCLE9BQWYsQ0FBakM7QUFDQTtBQUNELE9BQUswSSxRQUFMLElBQWlCeUosT0FBT0MsbUJBQVAsQ0FBMkIsSUFBM0IsQ0FBakIsRUFBbUQ7QUFDbEQsVUFBTyxLQUFLMUosUUFBTCxDQUFQLElBQXlCLFVBQXpCLEtBQXdDLEtBQUtBLFFBQUwsSUFBaUIsSUFBekQ7QUFDQTtBQUNELEVBWEQ7O0FBYUFoTCxHQUFFdVQsRUFBRixDQUFLQyxXQUFMLENBQWlCSyxXQUFqQixDQUE2QnRSLE9BQTdCLENBQXFDOFcsUUFBckMsR0FBZ0RMLFFBQWhEO0FBRUEsQ0EvTkEsRUErTkUvWSxPQUFPNlQsS0FBUCxJQUFnQjdULE9BQU84UCxNQS9OekIsRUErTmlDOVAsTUEvTmpDLEVBK055Q0MsUUEvTnpDOztBQWlPRDs7Ozs7OztBQU9BLENBQUMsQ0FBQyxVQUFTRixDQUFULEVBQVlDLE1BQVosRUFBb0JDLFFBQXBCLEVBQThCQyxTQUE5QixFQUF5QztBQUMxQzs7QUFFQTs7Ozs7O0FBS0EsS0FBSStaLGFBQWEsU0FBYkEsVUFBYSxDQUFTbEcsUUFBVCxFQUFtQjtBQUNuQzs7Ozs7QUFLQSxPQUFLQyxLQUFMLEdBQWFELFFBQWI7O0FBRUE7Ozs7O0FBS0EsT0FBS21HLFlBQUwsR0FBb0IsS0FBcEI7O0FBRUE7Ozs7O0FBS0EsT0FBS0MsTUFBTCxHQUFjLEVBQWQ7O0FBRUE7Ozs7O0FBS0EsT0FBS0MsU0FBTCxHQUFpQixFQUFqQjs7QUFFQTs7Ozs7QUFLQSxPQUFLQyxVQUFMLEdBQWtCLEVBQWxCOztBQUVBOzs7O0FBSUEsT0FBSzVaLFFBQUwsR0FBZ0IsS0FBS3VULEtBQUwsQ0FBV3ZULFFBQTNCOztBQUVBOzs7OztBQUtBLE9BQUs2WixVQUFMLEdBQWtCO0FBQ2pCbkwsU0FBTSxLQUFLNkUsS0FBTCxDQUFXN0UsSUFEQTtBQUVqQkMsU0FBTSxLQUFLNEUsS0FBTCxDQUFXNUUsSUFGQTtBQUdqQkwsT0FBSSxLQUFLaUYsS0FBTCxDQUFXakY7QUFIRSxHQUFsQjs7QUFNQTs7Ozs7QUFLQSxPQUFLck8sU0FBTCxHQUFpQjtBQUNoQiw0QkFBeUJYLEVBQUVvQyxLQUFGLENBQVEsVUFBU29PLENBQVQsRUFBWTtBQUM1QyxRQUFJQSxFQUFFZSxTQUFGLElBQWUsS0FBSzBDLEtBQUwsQ0FBVzFULFFBQVgsQ0FBb0JpYSxRQUF2QyxFQUFpRDtBQUNoRCxVQUFLRixVQUFMLENBQWdCdFgsSUFBaEIsQ0FBcUIsaUJBQWlCLEtBQUtpUixLQUFMLENBQVcxVCxRQUFYLENBQW9Ca2EsUUFBckMsR0FBZ0QsSUFBaEQsR0FDcEJ6YSxFQUFFd1EsRUFBRWxGLE9BQUosRUFBYW5DLElBQWIsQ0FBa0IsWUFBbEIsRUFBZ0M4RyxPQUFoQyxDQUF3QyxZQUF4QyxFQUFzRG5GLElBQXRELENBQTJELFVBQTNELENBRG9CLEdBQ3FELFFBRDFFO0FBRUE7QUFDRCxJQUx3QixFQUt0QixJQUxzQixDQURUO0FBT2hCLHlCQUFzQjlLLEVBQUVvQyxLQUFGLENBQVEsVUFBU29PLENBQVQsRUFBWTtBQUN6QyxRQUFJQSxFQUFFZSxTQUFGLElBQWUsS0FBSzBDLEtBQUwsQ0FBVzFULFFBQVgsQ0FBb0JpYSxRQUF2QyxFQUFpRDtBQUNoRCxVQUFLRixVQUFMLENBQWdCakssTUFBaEIsQ0FBdUJHLEVBQUUxRCxRQUF6QixFQUFtQyxDQUFuQyxFQUFzQyxLQUFLd04sVUFBTCxDQUFnQkksR0FBaEIsRUFBdEM7QUFDQTtBQUNELElBSnFCLEVBSW5CLElBSm1CLENBUE47QUFZaEIsMEJBQXVCMWEsRUFBRW9DLEtBQUYsQ0FBUSxVQUFTb08sQ0FBVCxFQUFZO0FBQzFDLFFBQUlBLEVBQUVlLFNBQUYsSUFBZSxLQUFLMEMsS0FBTCxDQUFXMVQsUUFBWCxDQUFvQmlhLFFBQXZDLEVBQWlEO0FBQ2hELFVBQUtGLFVBQUwsQ0FBZ0JqSyxNQUFoQixDQUF1QkcsRUFBRTFELFFBQXpCLEVBQW1DLENBQW5DO0FBQ0E7QUFDRCxJQUpzQixFQUlwQixJQUpvQixDQVpQO0FBaUJoQiwyQkFBd0I5TSxFQUFFb0MsS0FBRixDQUFRLFVBQVNvTyxDQUFULEVBQVk7QUFDM0MsUUFBSUEsRUFBRWUsU0FBRixJQUFlZixFQUFFeEYsUUFBRixDQUFXQyxJQUFYLElBQW1CLFVBQXRDLEVBQWtEO0FBQ2pELFVBQUswUCxJQUFMO0FBQ0E7QUFDRCxJQUp1QixFQUlyQixJQUpxQixDQWpCUjtBQXNCaEIsK0JBQTRCM2EsRUFBRW9DLEtBQUYsQ0FBUSxVQUFTb08sQ0FBVCxFQUFZO0FBQy9DLFFBQUlBLEVBQUVlLFNBQUYsSUFBZSxDQUFDLEtBQUs0SSxZQUF6QixFQUF1QztBQUN0QyxVQUFLbEcsS0FBTCxDQUFXaEssT0FBWCxDQUFtQixZQUFuQixFQUFpQyxJQUFqQyxFQUF1QyxZQUF2QztBQUNBLFVBQUs3RyxVQUFMO0FBQ0EsVUFBS29JLE1BQUw7QUFDQSxVQUFLbVAsSUFBTDtBQUNBLFVBQUtSLFlBQUwsR0FBb0IsSUFBcEI7QUFDQSxVQUFLbEcsS0FBTCxDQUFXaEssT0FBWCxDQUFtQixhQUFuQixFQUFrQyxJQUFsQyxFQUF3QyxZQUF4QztBQUNBO0FBQ0QsSUFUMkIsRUFTekIsSUFUeUIsQ0F0Qlo7QUFnQ2hCLDZCQUEwQmpLLEVBQUVvQyxLQUFGLENBQVEsVUFBU29PLENBQVQsRUFBWTtBQUM3QyxRQUFJQSxFQUFFZSxTQUFGLElBQWUsS0FBSzRJLFlBQXhCLEVBQXNDO0FBQ3JDLFVBQUtsRyxLQUFMLENBQVdoSyxPQUFYLENBQW1CLFNBQW5CLEVBQThCLElBQTlCLEVBQW9DLFlBQXBDO0FBQ0EsVUFBS3VCLE1BQUw7QUFDQSxVQUFLbVAsSUFBTDtBQUNBLFVBQUsxRyxLQUFMLENBQVdoSyxPQUFYLENBQW1CLFdBQW5CLEVBQWdDLElBQWhDLEVBQXNDLFlBQXRDO0FBQ0E7QUFDRCxJQVB5QixFQU92QixJQVB1QjtBQWhDVixHQUFqQjs7QUEwQ0E7QUFDQSxPQUFLZ0ssS0FBTCxDQUFXM1QsT0FBWCxHQUFxQk4sRUFBRVEsTUFBRixDQUFTLEVBQVQsRUFBYTBaLFdBQVd6WixRQUF4QixFQUFrQyxLQUFLd1QsS0FBTCxDQUFXM1QsT0FBN0MsQ0FBckI7O0FBRUE7QUFDQSxPQUFLSSxRQUFMLENBQWMyTCxFQUFkLENBQWlCLEtBQUsxTCxTQUF0QjtBQUNBLEVBekdEOztBQTJHQTs7Ozs7QUFLQXVaLFlBQVd6WixRQUFYLEdBQXNCO0FBQ3JCbWEsT0FBSyxLQURnQjtBQUVyQkMsV0FBUyxDQUNSLHVCQUF1QixVQUF2QixHQUFvQyxtQkFENUIsRUFFUix1QkFBdUIsTUFBdkIsR0FBZ0MsbUJBRnhCLENBRlk7QUFNckJDLFlBQVUsS0FOVztBQU9yQkMsY0FBWSwwQ0FQUztBQVFyQkMsZ0JBQWMsS0FSTztBQVNyQkMscUJBQW1CLFNBVEU7QUFVckJDLFlBQVUsQ0FDVCxVQURTLEVBRVQsVUFGUyxDQVZXO0FBY3JCQyxXQUFTLENBZFk7QUFlckJWLFlBQVUsU0FmVztBQWdCckJXLGFBQVcsVUFoQlU7QUFpQnJCQyxRQUFNLElBakJlO0FBa0JyQkMsWUFBVSxLQWxCVztBQW1CckJkLFlBQVUsS0FuQlc7QUFvQnJCZSxhQUFXLEtBcEJVO0FBcUJyQkMsaUJBQWU7QUFyQk0sRUFBdEI7O0FBd0JBOzs7O0FBSUF0QixZQUFXalIsU0FBWCxDQUFxQjdGLFVBQXJCLEdBQWtDLFlBQVc7QUFDNUMsTUFBSXFZLFFBQUo7QUFBQSxNQUNDbGIsV0FBVyxLQUFLMFQsS0FBTCxDQUFXMVQsUUFEdkI7O0FBR0E7QUFDQSxPQUFLOFosU0FBTCxDQUFlcUIsU0FBZixHQUEyQixDQUFDbmIsU0FBU3lhLFlBQVQsR0FBd0JoYixFQUFFTyxTQUFTeWEsWUFBWCxDQUF4QixHQUN6QmhiLEVBQUUsT0FBRixFQUFXMEgsUUFBWCxDQUFvQm5ILFNBQVMwYSxpQkFBN0IsRUFBZ0R0VCxRQUFoRCxDQUF5RCxLQUFLakgsUUFBOUQsQ0FEd0IsRUFDaURnSCxRQURqRCxDQUMwRCxVQUQxRCxDQUEzQjs7QUFHQSxPQUFLMlMsU0FBTCxDQUFlc0IsU0FBZixHQUEyQjNiLEVBQUUsTUFBTU8sU0FBU3dhLFVBQWYsR0FBNEIsR0FBOUIsRUFDekJyVCxRQUR5QixDQUNoQm5ILFNBQVMyYSxRQUFULENBQWtCLENBQWxCLENBRGdCLEVBRXpCcEQsSUFGeUIsQ0FFcEJ2WCxTQUFTc2EsT0FBVCxDQUFpQixDQUFqQixDQUZvQixFQUd6QmpULFNBSHlCLENBR2YsS0FBS3lTLFNBQUwsQ0FBZXFCLFNBSEEsRUFJekJyUCxFQUp5QixDQUl0QixPQUpzQixFQUlick0sRUFBRW9DLEtBQUYsQ0FBUSxVQUFTb08sQ0FBVCxFQUFZO0FBQ2hDLFFBQUtuQixJQUFMLENBQVU5TyxTQUFTdWEsUUFBbkI7QUFDQSxHQUZZLEVBRVYsSUFGVSxDQUphLENBQTNCO0FBT0EsT0FBS1QsU0FBTCxDQUFldUIsS0FBZixHQUF1QjViLEVBQUUsTUFBTU8sU0FBU3dhLFVBQWYsR0FBNEIsR0FBOUIsRUFDckJyVCxRQURxQixDQUNabkgsU0FBUzJhLFFBQVQsQ0FBa0IsQ0FBbEIsQ0FEWSxFQUVyQnBELElBRnFCLENBRWhCdlgsU0FBU3NhLE9BQVQsQ0FBaUIsQ0FBakIsQ0FGZ0IsRUFHckJsVCxRQUhxQixDQUdaLEtBQUswUyxTQUFMLENBQWVxQixTQUhILEVBSXJCclAsRUFKcUIsQ0FJbEIsT0FKa0IsRUFJVHJNLEVBQUVvQyxLQUFGLENBQVEsVUFBU29PLENBQVQsRUFBWTtBQUNoQyxRQUFLcEIsSUFBTCxDQUFVN08sU0FBU3VhLFFBQW5CO0FBQ0EsR0FGWSxFQUVWLElBRlUsQ0FKUyxDQUF2Qjs7QUFRQTtBQUNBLE1BQUksQ0FBQ3ZhLFNBQVNpYSxRQUFkLEVBQXdCO0FBQ3ZCLFFBQUtGLFVBQUwsR0FBa0IsQ0FBRXRhLEVBQUUsd0JBQUYsRUFDbEIwSCxRQURrQixDQUNUbkgsU0FBU2thLFFBREEsRUFFbEJuVCxNQUZrQixDQUVYdEgsRUFBRSxRQUFGLENBRlcsRUFHbEI2YixJQUhrQixDQUdiLFdBSGEsQ0FBRixDQUFsQjtBQUlBOztBQUVELE9BQUt4QixTQUFMLENBQWV5QixTQUFmLEdBQTJCLENBQUN2YixTQUFTaWIsYUFBVCxHQUF5QnhiLEVBQUVPLFNBQVNpYixhQUFYLENBQXpCLEdBQ3pCeGIsRUFBRSxPQUFGLEVBQVcwSCxRQUFYLENBQW9CbkgsU0FBUzZhLFNBQTdCLEVBQXdDelQsUUFBeEMsQ0FBaUQsS0FBS2pILFFBQXRELENBRHdCLEVBQ3lDZ0gsUUFEekMsQ0FDa0QsVUFEbEQsQ0FBM0I7O0FBR0EsT0FBSzJTLFNBQUwsQ0FBZXlCLFNBQWYsQ0FBeUJ6UCxFQUF6QixDQUE0QixPQUE1QixFQUFxQyxRQUFyQyxFQUErQ3JNLEVBQUVvQyxLQUFGLENBQVEsVUFBU29PLENBQVQsRUFBWTtBQUNsRSxPQUFJckksUUFBUW5JLEVBQUV3USxFQUFFN08sTUFBSixFQUFZMEgsTUFBWixHQUFxQmMsRUFBckIsQ0FBd0IsS0FBS2tRLFNBQUwsQ0FBZXlCLFNBQXZDLElBQ1Q5YixFQUFFd1EsRUFBRTdPLE1BQUosRUFBWXdHLEtBQVosRUFEUyxHQUNhbkksRUFBRXdRLEVBQUU3TyxNQUFKLEVBQVkwSCxNQUFaLEdBQXFCbEIsS0FBckIsRUFEekI7O0FBR0FxSSxLQUFFOUMsY0FBRjs7QUFFQSxRQUFLc0IsRUFBTCxDQUFRN0csS0FBUixFQUFlNUgsU0FBU2diLFNBQXhCO0FBQ0EsR0FQOEMsRUFPNUMsSUFQNEMsQ0FBL0M7O0FBU0E7Ozs7Ozs7Ozs7OztBQWFBO0FBQ0EsT0FBS0UsUUFBTCxJQUFpQixLQUFLbEIsVUFBdEIsRUFBa0M7QUFDakMsUUFBS3RHLEtBQUwsQ0FBV3dILFFBQVgsSUFBdUJ6YixFQUFFb0MsS0FBRixDQUFRLEtBQUtxWixRQUFMLENBQVIsRUFBd0IsSUFBeEIsQ0FBdkI7QUFDQTtBQUNELEVBNUREOztBQThEQTs7OztBQUlBdkIsWUFBV2pSLFNBQVgsQ0FBcUJ5SCxPQUFyQixHQUErQixZQUFXO0FBQ3pDLE1BQUlwTyxPQUFKLEVBQWF5WixPQUFiLEVBQXNCL1EsUUFBdEIsRUFBZ0N5USxRQUFoQyxFQUEwQ2xiLFFBQTFDO0FBQ0FBLGFBQVcsS0FBSzBULEtBQUwsQ0FBVzFULFFBQXRCOztBQUVBLE9BQUsrQixPQUFMLElBQWdCLEtBQUszQixTQUFyQixFQUFnQztBQUMvQixRQUFLRCxRQUFMLENBQWNrTixHQUFkLENBQWtCdEwsT0FBbEIsRUFBMkIsS0FBSzNCLFNBQUwsQ0FBZTJCLE9BQWYsQ0FBM0I7QUFDQTtBQUNELE9BQUt5WixPQUFMLElBQWdCLEtBQUsxQixTQUFyQixFQUFnQztBQUMvQixPQUFJMEIsWUFBWSxXQUFaLElBQTJCeGIsU0FBU3lhLFlBQXhDLEVBQXNEO0FBQ3JELFNBQUtYLFNBQUwsQ0FBZTBCLE9BQWYsRUFBd0JqRSxJQUF4QixDQUE2QixFQUE3QjtBQUNBLElBRkQsTUFFTztBQUNOLFNBQUt1QyxTQUFMLENBQWUwQixPQUFmLEVBQXdCeFYsTUFBeEI7QUFDQTtBQUNEO0FBQ0QsT0FBS2tWLFFBQUwsSUFBaUIsS0FBS08sUUFBdEIsRUFBZ0M7QUFDL0IsUUFBSy9ILEtBQUwsQ0FBV3dILFFBQVgsSUFBdUIsS0FBS2xCLFVBQUwsQ0FBZ0JrQixRQUFoQixDQUF2QjtBQUNBO0FBQ0QsT0FBS3pRLFFBQUwsSUFBaUJ5SixPQUFPQyxtQkFBUCxDQUEyQixJQUEzQixDQUFqQixFQUFtRDtBQUNsRCxVQUFPLEtBQUsxSixRQUFMLENBQVAsSUFBeUIsVUFBekIsS0FBd0MsS0FBS0EsUUFBTCxJQUFpQixJQUF6RDtBQUNBO0FBQ0QsRUFwQkQ7O0FBc0JBOzs7O0FBSUFrUCxZQUFXalIsU0FBWCxDQUFxQnVDLE1BQXJCLEdBQThCLFlBQVc7QUFDeEMsTUFBSW5KLENBQUo7QUFBQSxNQUFPNFosQ0FBUDtBQUFBLE1BQVVDLENBQVY7QUFBQSxNQUNDQyxRQUFRLEtBQUtsSSxLQUFMLENBQVdqTixNQUFYLEdBQW9CSixNQUFwQixHQUE2QixDQUR0QztBQUFBLE1BRUN3VixRQUFRRCxRQUFRLEtBQUtsSSxLQUFMLENBQVc1USxLQUFYLEdBQW1CdUQsTUFGcEM7QUFBQSxNQUdDeUIsVUFBVSxLQUFLNEwsS0FBTCxDQUFXNUwsT0FBWCxDQUFtQixJQUFuQixDQUhYO0FBQUEsTUFJQzlILFdBQVcsS0FBSzBULEtBQUwsQ0FBVzFULFFBSnZCO0FBQUEsTUFLQzRHLE9BQU81RyxTQUFTZ0QsTUFBVCxJQUFtQmhELFNBQVMyRCxTQUE1QixJQUF5QzNELFNBQVNpYSxRQUFsRCxHQUNKLENBREksR0FDQWphLFNBQVMrYSxRQUFULElBQXFCL2EsU0FBUzhDLEtBTnRDOztBQVFBLE1BQUk5QyxTQUFTNGEsT0FBVCxLQUFxQixNQUF6QixFQUFpQztBQUNoQzVhLFlBQVM0YSxPQUFULEdBQW1CclUsS0FBS0MsR0FBTCxDQUFTeEcsU0FBUzRhLE9BQWxCLEVBQTJCNWEsU0FBUzhDLEtBQXBDLENBQW5CO0FBQ0E7O0FBRUQsTUFBSTlDLFNBQVM4YSxJQUFULElBQWlCOWEsU0FBUzRhLE9BQVQsSUFBb0IsTUFBekMsRUFBaUQ7QUFDaEQsUUFBS2YsTUFBTCxHQUFjLEVBQWQ7O0FBRUEsUUFBSy9YLElBQUk4WixLQUFKLEVBQVdGLElBQUksQ0FBZixFQUFrQkMsSUFBSSxDQUEzQixFQUE4QjdaLElBQUkrWixLQUFsQyxFQUF5Qy9aLEdBQXpDLEVBQThDO0FBQzdDLFFBQUk0WixLQUFLOVUsSUFBTCxJQUFhOFUsTUFBTSxDQUF2QixFQUEwQjtBQUN6QixVQUFLN0IsTUFBTCxDQUFZcFgsSUFBWixDQUFpQjtBQUNoQmxCLGFBQU9nRixLQUFLQyxHQUFMLENBQVNzQixPQUFULEVBQWtCaEcsSUFBSThaLEtBQXRCLENBRFM7QUFFaEIxVCxXQUFLcEcsSUFBSThaLEtBQUosR0FBWWhWLElBQVosR0FBbUI7QUFGUixNQUFqQjtBQUlBLFNBQUlMLEtBQUtDLEdBQUwsQ0FBU3NCLE9BQVQsRUFBa0JoRyxJQUFJOFosS0FBdEIsTUFBaUM5VCxPQUFyQyxFQUE4QztBQUM3QztBQUNBO0FBQ0Q0VCxTQUFJLENBQUosRUFBTyxFQUFFQyxDQUFUO0FBQ0E7QUFDREQsU0FBSyxLQUFLaEksS0FBTCxDQUFXeEYsT0FBWCxDQUFtQixLQUFLd0YsS0FBTCxDQUFXN04sUUFBWCxDQUFvQi9ELENBQXBCLENBQW5CLENBQUw7QUFDQTtBQUNEO0FBQ0QsRUE5QkQ7O0FBZ0NBOzs7OztBQUtBNlgsWUFBV2pSLFNBQVgsQ0FBcUIwUixJQUFyQixHQUE0QixZQUFXO0FBQ3RDLE1BQUluTixVQUFKO0FBQUEsTUFDQ2pOLFdBQVcsS0FBSzBULEtBQUwsQ0FBVzFULFFBRHZCO0FBQUEsTUFFQzhiLFdBQVcsS0FBS3BJLEtBQUwsQ0FBVzVRLEtBQVgsR0FBbUJ1RCxNQUFuQixJQUE2QnJHLFNBQVM4QyxLQUZsRDtBQUFBLE1BR0M4RSxRQUFRLEtBQUs4TCxLQUFMLENBQVc3TixRQUFYLENBQW9CLEtBQUs2TixLQUFMLENBQVdsUyxPQUFYLEVBQXBCLENBSFQ7QUFBQSxNQUlDdUIsT0FBTy9DLFNBQVMrQyxJQUFULElBQWlCL0MsU0FBU2lELE1BSmxDOztBQU1BLE9BQUs2VyxTQUFMLENBQWVxQixTQUFmLENBQXlCeFIsV0FBekIsQ0FBcUMsVUFBckMsRUFBaUQsQ0FBQzNKLFNBQVNxYSxHQUFWLElBQWlCeUIsUUFBbEU7O0FBRUEsTUFBSTliLFNBQVNxYSxHQUFiLEVBQWtCO0FBQ2pCLFFBQUtQLFNBQUwsQ0FBZXNCLFNBQWYsQ0FBeUJ6UixXQUF6QixDQUFxQyxVQUFyQyxFQUFpRCxDQUFDNUcsSUFBRCxJQUFTNkUsU0FBUyxLQUFLOEwsS0FBTCxDQUFXN0wsT0FBWCxDQUFtQixJQUFuQixDQUFuRTtBQUNBLFFBQUtpUyxTQUFMLENBQWV1QixLQUFmLENBQXFCMVIsV0FBckIsQ0FBaUMsVUFBakMsRUFBNkMsQ0FBQzVHLElBQUQsSUFBUzZFLFNBQVMsS0FBSzhMLEtBQUwsQ0FBVzVMLE9BQVgsQ0FBbUIsSUFBbkIsQ0FBL0Q7QUFDQTs7QUFFRCxPQUFLZ1MsU0FBTCxDQUFleUIsU0FBZixDQUF5QjVSLFdBQXpCLENBQXFDLFVBQXJDLEVBQWlELENBQUMzSixTQUFTOGEsSUFBVixJQUFrQmdCLFFBQW5FOztBQUVBLE1BQUk5YixTQUFTOGEsSUFBYixFQUFtQjtBQUNsQjdOLGdCQUFhLEtBQUs0TSxNQUFMLENBQVl4VCxNQUFaLEdBQXFCLEtBQUt5VCxTQUFMLENBQWV5QixTQUFmLENBQXlCeFYsUUFBekIsR0FBb0NNLE1BQXRFOztBQUVBLE9BQUlyRyxTQUFTaWEsUUFBVCxJQUFxQmhOLGVBQWUsQ0FBeEMsRUFBMkM7QUFDMUMsU0FBSzZNLFNBQUwsQ0FBZXlCLFNBQWYsQ0FBeUJoRSxJQUF6QixDQUE4QixLQUFLd0MsVUFBTCxDQUFnQnRSLElBQWhCLENBQXFCLEVBQXJCLENBQTlCO0FBQ0EsSUFGRCxNQUVPLElBQUl3RSxhQUFhLENBQWpCLEVBQW9CO0FBQzFCLFNBQUs2TSxTQUFMLENBQWV5QixTQUFmLENBQXlCeFUsTUFBekIsQ0FBZ0MsSUFBSXFNLEtBQUosQ0FBVW5HLGFBQWEsQ0FBdkIsRUFBMEJ4RSxJQUExQixDQUErQixLQUFLc1IsVUFBTCxDQUFnQixDQUFoQixDQUEvQixDQUFoQztBQUNBLElBRk0sTUFFQSxJQUFJOU0sYUFBYSxDQUFqQixFQUFvQjtBQUMxQixTQUFLNk0sU0FBTCxDQUFleUIsU0FBZixDQUF5QnhWLFFBQXpCLEdBQW9DMUQsS0FBcEMsQ0FBMEM0SyxVQUExQyxFQUFzRGpILE1BQXREO0FBQ0E7O0FBRUQsUUFBSzhULFNBQUwsQ0FBZXlCLFNBQWYsQ0FBeUIzUyxJQUF6QixDQUE4QixTQUE5QixFQUF5Q0osV0FBekMsQ0FBcUQsUUFBckQ7QUFDQSxRQUFLc1IsU0FBTCxDQUFleUIsU0FBZixDQUF5QnhWLFFBQXpCLEdBQW9DMkIsRUFBcEMsQ0FBdUNqSSxFQUFFd1MsT0FBRixDQUFVLEtBQUt6USxPQUFMLEVBQVYsRUFBMEIsS0FBS3FZLE1BQS9CLENBQXZDLEVBQStFMVMsUUFBL0UsQ0FBd0YsUUFBeEY7QUFDQTtBQUNELEVBOUJEOztBQWdDQTs7Ozs7QUFLQXdTLFlBQVdqUixTQUFYLENBQXFCMkksU0FBckIsR0FBaUMsVUFBU3ZHLEtBQVQsRUFBZ0I7QUFDaEQsTUFBSTlLLFdBQVcsS0FBSzBULEtBQUwsQ0FBVzFULFFBQTFCOztBQUVBOEssUUFBTWlSLElBQU4sR0FBYTtBQUNablUsVUFBT25JLEVBQUV3UyxPQUFGLENBQVUsS0FBS3pRLE9BQUwsRUFBVixFQUEwQixLQUFLcVksTUFBL0IsQ0FESztBQUVaM0ksVUFBTyxLQUFLMkksTUFBTCxDQUFZeFQsTUFGUDtBQUdaTyxTQUFNNUcsYUFBYUEsU0FBU2dELE1BQVQsSUFBbUJoRCxTQUFTMkQsU0FBNUIsSUFBeUMzRCxTQUFTaWEsUUFBbEQsR0FDaEIsQ0FEZ0IsR0FDWmphLFNBQVMrYSxRQUFULElBQXFCL2EsU0FBUzhDLEtBRC9CO0FBSE0sR0FBYjtBQU1BLEVBVEQ7O0FBV0E7Ozs7O0FBS0E2VyxZQUFXalIsU0FBWCxDQUFxQmxILE9BQXJCLEdBQStCLFlBQVc7QUFDekMsTUFBSUEsVUFBVSxLQUFLa1MsS0FBTCxDQUFXN04sUUFBWCxDQUFvQixLQUFLNk4sS0FBTCxDQUFXbFMsT0FBWCxFQUFwQixDQUFkO0FBQ0EsU0FBTy9CLEVBQUUyTCxJQUFGLENBQU8sS0FBS3lPLE1BQVosRUFBb0JwYSxFQUFFb0MsS0FBRixDQUFRLFVBQVNrYSxJQUFULEVBQWVuVSxLQUFmLEVBQXNCO0FBQ3hELFVBQU9tVSxLQUFLeGEsS0FBTCxJQUFjQyxPQUFkLElBQXlCdWEsS0FBSzdULEdBQUwsSUFBWTFHLE9BQTVDO0FBQ0EsR0FGMEIsRUFFeEIsSUFGd0IsQ0FBcEIsRUFFRzJZLEdBRkgsRUFBUDtBQUdBLEVBTEQ7O0FBT0E7Ozs7O0FBS0FSLFlBQVdqUixTQUFYLENBQXFCc1QsV0FBckIsR0FBbUMsVUFBU0MsU0FBVCxFQUFvQjtBQUN0RCxNQUFJMVAsUUFBSjtBQUFBLE1BQWNsRyxNQUFkO0FBQUEsTUFDQ3JHLFdBQVcsS0FBSzBULEtBQUwsQ0FBVzFULFFBRHZCOztBQUdBLE1BQUlBLFNBQVM0YSxPQUFULElBQW9CLE1BQXhCLEVBQWdDO0FBQy9Cck8sY0FBVzlNLEVBQUV3UyxPQUFGLENBQVUsS0FBS3pRLE9BQUwsRUFBVixFQUEwQixLQUFLcVksTUFBL0IsQ0FBWDtBQUNBeFQsWUFBUyxLQUFLd1QsTUFBTCxDQUFZeFQsTUFBckI7QUFDQTRWLGVBQVksRUFBRTFQLFFBQWQsR0FBeUIsRUFBRUEsUUFBM0I7QUFDQUEsY0FBVyxLQUFLc04sTUFBTCxDQUFZLENBQUV0TixXQUFXbEcsTUFBWixHQUFzQkEsTUFBdkIsSUFBaUNBLE1BQTdDLEVBQXFEOUUsS0FBaEU7QUFDQSxHQUxELE1BS087QUFDTmdMLGNBQVcsS0FBS21ILEtBQUwsQ0FBVzdOLFFBQVgsQ0FBb0IsS0FBSzZOLEtBQUwsQ0FBV2xTLE9BQVgsRUFBcEIsQ0FBWDtBQUNBNkUsWUFBUyxLQUFLcU4sS0FBTCxDQUFXNVEsS0FBWCxHQUFtQnVELE1BQTVCO0FBQ0E0VixlQUFZMVAsWUFBWXZNLFNBQVM0YSxPQUFqQyxHQUEyQ3JPLFlBQVl2TSxTQUFTNGEsT0FBaEU7QUFDQTs7QUFFRCxTQUFPck8sUUFBUDtBQUNBLEVBaEJEOztBQWtCQTs7Ozs7QUFLQW9OLFlBQVdqUixTQUFYLENBQXFCbUcsSUFBckIsR0FBNEIsVUFBU2pDLEtBQVQsRUFBZ0I7QUFDM0NuTixJQUFFb0MsS0FBRixDQUFRLEtBQUttWSxVQUFMLENBQWdCdkwsRUFBeEIsRUFBNEIsS0FBS2lGLEtBQWpDLEVBQXdDLEtBQUtzSSxXQUFMLENBQWlCLElBQWpCLENBQXhDLEVBQWdFcFAsS0FBaEU7QUFDQSxFQUZEOztBQUlBOzs7OztBQUtBK00sWUFBV2pSLFNBQVgsQ0FBcUJvRyxJQUFyQixHQUE0QixVQUFTbEMsS0FBVCxFQUFnQjtBQUMzQ25OLElBQUVvQyxLQUFGLENBQVEsS0FBS21ZLFVBQUwsQ0FBZ0J2TCxFQUF4QixFQUE0QixLQUFLaUYsS0FBakMsRUFBd0MsS0FBS3NJLFdBQUwsQ0FBaUIsS0FBakIsQ0FBeEMsRUFBaUVwUCxLQUFqRTtBQUNBLEVBRkQ7O0FBSUE7Ozs7Ozs7QUFPQStNLFlBQVdqUixTQUFYLENBQXFCK0YsRUFBckIsR0FBMEIsVUFBU2xDLFFBQVQsRUFBbUJLLEtBQW5CLEVBQTBCc1AsUUFBMUIsRUFBb0M7QUFDN0QsTUFBSTdWLE1BQUo7O0FBRUEsTUFBSSxDQUFDNlYsUUFBRCxJQUFhLEtBQUtyQyxNQUFMLENBQVl4VCxNQUE3QixFQUFxQztBQUNwQ0EsWUFBUyxLQUFLd1QsTUFBTCxDQUFZeFQsTUFBckI7QUFDQTVHLEtBQUVvQyxLQUFGLENBQVEsS0FBS21ZLFVBQUwsQ0FBZ0J2TCxFQUF4QixFQUE0QixLQUFLaUYsS0FBakMsRUFBd0MsS0FBS21HLE1BQUwsQ0FBWSxDQUFFdE4sV0FBV2xHLE1BQVosR0FBc0JBLE1BQXZCLElBQWlDQSxNQUE3QyxFQUFxRDlFLEtBQTdGLEVBQW9HcUwsS0FBcEc7QUFDQSxHQUhELE1BR087QUFDTm5OLEtBQUVvQyxLQUFGLENBQVEsS0FBS21ZLFVBQUwsQ0FBZ0J2TCxFQUF4QixFQUE0QixLQUFLaUYsS0FBakMsRUFBd0NuSCxRQUF4QyxFQUFrREssS0FBbEQ7QUFDQTtBQUNELEVBVEQ7O0FBV0FuTixHQUFFdVQsRUFBRixDQUFLQyxXQUFMLENBQWlCSyxXQUFqQixDQUE2QnRSLE9BQTdCLENBQXFDMlgsVUFBckMsR0FBa0RBLFVBQWxEO0FBRUEsQ0E5WUEsRUE4WUVqYSxPQUFPNlQsS0FBUCxJQUFnQjdULE9BQU84UCxNQTlZekIsRUE4WWlDOVAsTUE5WWpDLEVBOFl5Q0MsUUE5WXpDOztBQWdaRDs7Ozs7OztBQU9BLENBQUMsQ0FBQyxVQUFTRixDQUFULEVBQVlDLE1BQVosRUFBb0JDLFFBQXBCLEVBQThCQyxTQUE5QixFQUF5QztBQUMxQzs7QUFFQTs7Ozs7O0FBS0EsS0FBSXVjLE9BQU8sU0FBUEEsSUFBTyxDQUFTMUksUUFBVCxFQUFtQjtBQUM3Qjs7Ozs7QUFLQSxPQUFLQyxLQUFMLEdBQWFELFFBQWI7O0FBRUE7Ozs7O0FBS0EsT0FBSzJJLE9BQUwsR0FBZSxFQUFmOztBQUVBOzs7O0FBSUEsT0FBS2pjLFFBQUwsR0FBZ0IsS0FBS3VULEtBQUwsQ0FBV3ZULFFBQTNCOztBQUVBOzs7OztBQUtBLE9BQUtDLFNBQUwsR0FBaUI7QUFDaEIsK0JBQTRCWCxFQUFFb0MsS0FBRixDQUFRLFVBQVNvTyxDQUFULEVBQVk7QUFDL0MsUUFBSUEsRUFBRWUsU0FBRixJQUFlLEtBQUswQyxLQUFMLENBQVcxVCxRQUFYLENBQW9CNEQsYUFBcEIsS0FBc0MsU0FBekQsRUFBb0U7QUFDbkVuRSxPQUFFQyxNQUFGLEVBQVVnSyxPQUFWLENBQWtCLDJCQUFsQjtBQUNBO0FBQ0QsSUFKMkIsRUFJekIsSUFKeUIsQ0FEWjtBQU1oQiw0QkFBeUJqSyxFQUFFb0MsS0FBRixDQUFRLFVBQVNvTyxDQUFULEVBQVk7QUFDNUMsUUFBSUEsRUFBRWUsU0FBTixFQUFpQjtBQUNoQixTQUFJcUwsT0FBTzVjLEVBQUV3USxFQUFFbEYsT0FBSixFQUFhbkMsSUFBYixDQUFrQixhQUFsQixFQUFpQzhHLE9BQWpDLENBQXlDLGFBQXpDLEVBQXdEbkYsSUFBeEQsQ0FBNkQsV0FBN0QsQ0FBWDs7QUFFQSxTQUFJLENBQUM4UixJQUFMLEVBQVc7QUFDVjtBQUNBOztBQUVELFVBQUtELE9BQUwsQ0FBYUMsSUFBYixJQUFxQnBNLEVBQUVsRixPQUF2QjtBQUNBO0FBQ0QsSUFWd0IsRUFVdEIsSUFWc0IsQ0FOVDtBQWlCaEIsMkJBQXdCdEwsRUFBRW9DLEtBQUYsQ0FBUSxVQUFTb08sQ0FBVCxFQUFZO0FBQzNDLFFBQUlBLEVBQUVlLFNBQUYsSUFBZWYsRUFBRXhGLFFBQUYsQ0FBV0MsSUFBWCxLQUFvQixVQUF2QyxFQUFtRDtBQUNsRCxTQUFJbEosVUFBVSxLQUFLa1MsS0FBTCxDQUFXNVEsS0FBWCxDQUFpQixLQUFLNFEsS0FBTCxDQUFXN04sUUFBWCxDQUFvQixLQUFLNk4sS0FBTCxDQUFXbFMsT0FBWCxFQUFwQixDQUFqQixDQUFkO0FBQUEsU0FDQzZhLE9BQU81YyxFQUFFeUosR0FBRixDQUFNLEtBQUtrVCxPQUFYLEVBQW9CLFVBQVNqVCxJQUFULEVBQWVrVCxJQUFmLEVBQXFCO0FBQy9DLGFBQU9sVCxTQUFTM0gsT0FBVCxHQUFtQjZhLElBQW5CLEdBQTBCLElBQWpDO0FBQ0EsTUFGTSxFQUVKNVQsSUFGSSxFQURSOztBQUtBLFNBQUksQ0FBQzRULElBQUQsSUFBUzNjLE9BQU80YyxRQUFQLENBQWdCRCxJQUFoQixDQUFxQmhhLEtBQXJCLENBQTJCLENBQTNCLE1BQWtDZ2EsSUFBL0MsRUFBcUQ7QUFDcEQ7QUFDQTs7QUFFRDNjLFlBQU80YyxRQUFQLENBQWdCRCxJQUFoQixHQUF1QkEsSUFBdkI7QUFDQTtBQUNELElBYnVCLEVBYXJCLElBYnFCO0FBakJSLEdBQWpCOztBQWlDQTtBQUNBLE9BQUszSSxLQUFMLENBQVczVCxPQUFYLEdBQXFCTixFQUFFUSxNQUFGLENBQVMsRUFBVCxFQUFha2MsS0FBS2pjLFFBQWxCLEVBQTRCLEtBQUt3VCxLQUFMLENBQVczVCxPQUF2QyxDQUFyQjs7QUFFQTtBQUNBLE9BQUtJLFFBQUwsQ0FBYzJMLEVBQWQsQ0FBaUIsS0FBSzFMLFNBQXRCOztBQUVBO0FBQ0FYLElBQUVDLE1BQUYsRUFBVW9NLEVBQVYsQ0FBYSwyQkFBYixFQUEwQ3JNLEVBQUVvQyxLQUFGLENBQVEsVUFBU29PLENBQVQsRUFBWTtBQUM3RCxPQUFJb00sT0FBTzNjLE9BQU80YyxRQUFQLENBQWdCRCxJQUFoQixDQUFxQkUsU0FBckIsQ0FBK0IsQ0FBL0IsQ0FBWDtBQUFBLE9BQ0N6WixRQUFRLEtBQUs0USxLQUFMLENBQVc1TixNQUFYLENBQWtCQyxRQUFsQixFQURUO0FBQUEsT0FFQ3dHLFdBQVcsS0FBSzZQLE9BQUwsQ0FBYUMsSUFBYixLQUFzQnZaLE1BQU04RSxLQUFOLENBQVksS0FBS3dVLE9BQUwsQ0FBYUMsSUFBYixDQUFaLENBRmxDOztBQUlBLE9BQUk5UCxhQUFhM00sU0FBYixJQUEwQjJNLGFBQWEsS0FBS21ILEtBQUwsQ0FBV2xTLE9BQVgsRUFBM0MsRUFBaUU7QUFDaEU7QUFDQTs7QUFFRCxRQUFLa1MsS0FBTCxDQUFXakYsRUFBWCxDQUFjLEtBQUtpRixLQUFMLENBQVc3TixRQUFYLENBQW9CMEcsUUFBcEIsQ0FBZCxFQUE2QyxLQUE3QyxFQUFvRCxJQUFwRDtBQUNBLEdBVnlDLEVBVXZDLElBVnVDLENBQTFDO0FBV0EsRUE3RUQ7O0FBK0VBOzs7O0FBSUE0UCxNQUFLamMsUUFBTCxHQUFnQjtBQUNmc2MsbUJBQWlCO0FBREYsRUFBaEI7O0FBSUE7Ozs7QUFJQUwsTUFBS3pULFNBQUwsQ0FBZXlILE9BQWYsR0FBeUIsWUFBVztBQUNuQyxNQUFJcE8sT0FBSixFQUFhMEksUUFBYjs7QUFFQWhMLElBQUVDLE1BQUYsRUFBVTJOLEdBQVYsQ0FBYywyQkFBZDs7QUFFQSxPQUFLdEwsT0FBTCxJQUFnQixLQUFLM0IsU0FBckIsRUFBZ0M7QUFDL0IsUUFBS3NULEtBQUwsQ0FBV3ZULFFBQVgsQ0FBb0JrTixHQUFwQixDQUF3QnRMLE9BQXhCLEVBQWlDLEtBQUszQixTQUFMLENBQWUyQixPQUFmLENBQWpDO0FBQ0E7QUFDRCxPQUFLMEksUUFBTCxJQUFpQnlKLE9BQU9DLG1CQUFQLENBQTJCLElBQTNCLENBQWpCLEVBQW1EO0FBQ2xELFVBQU8sS0FBSzFKLFFBQUwsQ0FBUCxJQUF5QixVQUF6QixLQUF3QyxLQUFLQSxRQUFMLElBQWlCLElBQXpEO0FBQ0E7QUFDRCxFQVhEOztBQWFBaEwsR0FBRXVULEVBQUYsQ0FBS0MsV0FBTCxDQUFpQkssV0FBakIsQ0FBNkJ0UixPQUE3QixDQUFxQ21hLElBQXJDLEdBQTRDQSxJQUE1QztBQUVBLENBbEhBLEVBa0hFemMsT0FBTzZULEtBQVAsSUFBZ0I3VCxPQUFPOFAsTUFsSHpCLEVBa0hpQzlQLE1BbEhqQyxFQWtIeUNDLFFBbEh6Qzs7QUFvSEQ7Ozs7Ozs7OztBQVNBLENBQUMsQ0FBQyxVQUFTRixDQUFULEVBQVlDLE1BQVosRUFBb0JDLFFBQXBCLEVBQThCQyxTQUE5QixFQUF5Qzs7QUFFMUMsS0FBSTZjLFFBQVFoZCxFQUFFLFdBQUYsRUFBZXdKLEdBQWYsQ0FBbUIsQ0FBbkIsRUFBc0J3VCxLQUFsQztBQUFBLEtBQ0NDLFdBQVcsa0JBQWtCdFEsS0FBbEIsQ0FBd0IsR0FBeEIsQ0FEWjtBQUFBLEtBRUM4RixTQUFTO0FBQ1JyRyxjQUFZO0FBQ1gzRCxRQUFLO0FBQ0p5VSxzQkFBa0IscUJBRGQ7QUFFSkMsbUJBQWUsZUFGWDtBQUdKQyxpQkFBYSxnQkFIVDtBQUlKaFIsZ0JBQVk7QUFKUjtBQURNLEdBREo7QUFTUndNLGFBQVc7QUFDVm5RLFFBQUs7QUFDSjRVLHFCQUFpQixvQkFEYjtBQUVKQyxrQkFBYyxjQUZWO0FBR0pDLGdCQUFZLGVBSFI7QUFJSjNFLGVBQVc7QUFKUDtBQURLO0FBVEgsRUFGVjtBQUFBLEtBb0JDNEUsUUFBUTtBQUNQQyxpQkFBZSx5QkFBVztBQUN6QixVQUFPLENBQUMsQ0FBQ0MsS0FBSyxXQUFMLENBQVQ7QUFDQSxHQUhNO0FBSVBDLG1CQUFpQiwyQkFBVztBQUMzQixVQUFPLENBQUMsQ0FBQ0QsS0FBSyxhQUFMLENBQVQ7QUFDQSxHQU5NO0FBT1BFLGtCQUFnQiwwQkFBVztBQUMxQixVQUFPLENBQUMsQ0FBQ0YsS0FBSyxZQUFMLENBQVQ7QUFDQSxHQVRNO0FBVVBHLGlCQUFlLHlCQUFXO0FBQ3pCLFVBQU8sQ0FBQyxDQUFDSCxLQUFLLFdBQUwsQ0FBVDtBQUNBO0FBWk0sRUFwQlQ7O0FBbUNBLFVBQVNBLElBQVQsQ0FBYzFTLFFBQWQsRUFBd0I4UyxRQUF4QixFQUFrQztBQUNqQyxNQUFJcEwsU0FBUyxLQUFiO0FBQUEsTUFDQzBKLFFBQVFwUixTQUFTdEksTUFBVCxDQUFnQixDQUFoQixFQUFtQnFiLFdBQW5CLEtBQW1DL1MsU0FBU3BJLEtBQVQsQ0FBZSxDQUFmLENBRDVDOztBQUdBNUMsSUFBRW1DLElBQUYsQ0FBTyxDQUFDNkksV0FBVyxHQUFYLEdBQWlCaVMsU0FBU2pVLElBQVQsQ0FBY29ULFFBQVEsR0FBdEIsQ0FBakIsR0FBOENBLEtBQS9DLEVBQXNEelAsS0FBdEQsQ0FBNEQsR0FBNUQsQ0FBUCxFQUF5RSxVQUFTdEssQ0FBVCxFQUFZMkksUUFBWixFQUFzQjtBQUM5RixPQUFJZ1MsTUFBTWhTLFFBQU4sTUFBb0I3SyxTQUF4QixFQUFtQztBQUNsQ3VTLGFBQVNvTCxXQUFXOVMsUUFBWCxHQUFzQixJQUEvQjtBQUNBLFdBQU8sS0FBUDtBQUNBO0FBQ0QsR0FMRDs7QUFPQSxTQUFPMEgsTUFBUDtBQUNBOztBQUVELFVBQVNvTCxRQUFULENBQWtCOVMsUUFBbEIsRUFBNEI7QUFDM0IsU0FBTzBTLEtBQUsxUyxRQUFMLEVBQWUsSUFBZixDQUFQO0FBQ0E7O0FBRUQsS0FBSXdTLE1BQU1JLGNBQU4sRUFBSixFQUE0QjtBQUMzQjtBQUNBNWQsSUFBRW1NLE9BQUYsQ0FBVUMsVUFBVixHQUF1QixJQUFJNFIsTUFBSixDQUFXRixTQUFTLFlBQVQsQ0FBWCxDQUF2QjtBQUNBOWQsSUFBRW1NLE9BQUYsQ0FBVUMsVUFBVixDQUFxQjNELEdBQXJCLEdBQTJCZ0ssT0FBT3JHLFVBQVAsQ0FBa0IzRCxHQUFsQixDQUF1QnpJLEVBQUVtTSxPQUFGLENBQVVDLFVBQWpDLENBQTNCO0FBQ0E7O0FBRUQsS0FBSW9SLE1BQU1LLGFBQU4sRUFBSixFQUEyQjtBQUMxQjtBQUNBN2QsSUFBRW1NLE9BQUYsQ0FBVXlNLFNBQVYsR0FBc0IsSUFBSW9GLE1BQUosQ0FBV0YsU0FBUyxXQUFULENBQVgsQ0FBdEI7QUFDQTlkLElBQUVtTSxPQUFGLENBQVV5TSxTQUFWLENBQW9CblEsR0FBcEIsR0FBMEJnSyxPQUFPbUcsU0FBUCxDQUFpQm5RLEdBQWpCLENBQXNCekksRUFBRW1NLE9BQUYsQ0FBVXlNLFNBQWhDLENBQTFCO0FBQ0E7O0FBRUQsS0FBSTRFLE1BQU1DLGFBQU4sRUFBSixFQUEyQjtBQUMxQjtBQUNBemQsSUFBRW1NLE9BQUYsQ0FBVU8sU0FBVixHQUFzQixJQUFJc1IsTUFBSixDQUFXRixTQUFTLFdBQVQsQ0FBWCxDQUF0QjtBQUNBOWQsSUFBRW1NLE9BQUYsQ0FBVTRCLFdBQVYsR0FBd0J5UCxNQUFNRyxlQUFOLEVBQXhCO0FBQ0E7QUFFRCxDQXpFQSxFQXlFRTFkLE9BQU82VCxLQUFQLElBQWdCN1QsT0FBTzhQLE1BekV6QixFQXlFaUM5UCxNQXpFakMsRUF5RXlDQyxRQXpFekMsRSIsImZpbGUiOiIvanMvdmVuZG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDliYzAzZTgwNjU4ZDZiMjQ3YzBjIiwiLyoqXG4gKiBPd2wgQ2Fyb3VzZWwgdjIuMy40XG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE4IERhdmlkIERldXRzY2hcbiAqIExpY2Vuc2VkIHVuZGVyOiBTRUUgTElDRU5TRSBJTiBodHRwczovL2dpdGh1Yi5jb20vT3dsQ2Fyb3VzZWwyL093bENhcm91c2VsMi9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cbi8qKlxuICogT3dsIGNhcm91c2VsXG4gKiBAdmVyc2lvbiAyLjMuNFxuICogQGF1dGhvciBCYXJ0b3N6IFdvamNpZWNob3dza2lcbiAqIEBhdXRob3IgRGF2aWQgRGV1dHNjaFxuICogQGxpY2Vuc2UgVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBAdG9kbyBMYXp5IExvYWQgSWNvblxuICogQHRvZG8gcHJldmVudCBhbmltYXRpb25lbmQgYnVibGluZ1xuICogQHRvZG8gaXRlbXNTY2FsZVVwXG4gKiBAdG9kbyBUZXN0IFplcHRvXG4gKiBAdG9kbyBzdGFnZVBhZGRpbmcgY2FsY3VsYXRlIHdyb25nIGFjdGl2ZSBjbGFzc2VzXG4gKi9cbjsoZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKSB7XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBjYXJvdXNlbC5cblx0ICogQGNsYXNzIFRoZSBPd2wgQ2Fyb3VzZWwuXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudHxqUXVlcnl9IGVsZW1lbnQgLSBUaGUgZWxlbWVudCB0byBjcmVhdGUgdGhlIGNhcm91c2VsIGZvci5cblx0ICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIFRoZSBvcHRpb25zXG5cdCAqL1xuXHRmdW5jdGlvbiBPd2woZWxlbWVudCwgb3B0aW9ucykge1xuXG5cdFx0LyoqXG5cdFx0ICogQ3VycmVudCBzZXR0aW5ncyBmb3IgdGhlIGNhcm91c2VsLlxuXHRcdCAqIEBwdWJsaWNcblx0XHQgKi9cblx0XHR0aGlzLnNldHRpbmdzID0gbnVsbDtcblxuXHRcdC8qKlxuXHRcdCAqIEN1cnJlbnQgb3B0aW9ucyBzZXQgYnkgdGhlIGNhbGxlciBpbmNsdWRpbmcgZGVmYXVsdHMuXG5cdFx0ICogQHB1YmxpY1xuXHRcdCAqL1xuXHRcdHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBPd2wuRGVmYXVsdHMsIG9wdGlvbnMpO1xuXG5cdFx0LyoqXG5cdFx0ICogUGx1Z2luIGVsZW1lbnQuXG5cdFx0ICogQHB1YmxpY1xuXHRcdCAqL1xuXHRcdHRoaXMuJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xuXG5cdFx0LyoqXG5cdFx0ICogUHJveGllZCBldmVudCBoYW5kbGVycy5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICovXG5cdFx0dGhpcy5faGFuZGxlcnMgPSB7fTtcblxuXHRcdC8qKlxuXHRcdCAqIFJlZmVyZW5jZXMgdG8gdGhlIHJ1bm5pbmcgcGx1Z2lucyBvZiB0aGlzIGNhcm91c2VsLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKi9cblx0XHR0aGlzLl9wbHVnaW5zID0ge307XG5cblx0XHQvKipcblx0XHQgKiBDdXJyZW50bHkgc3VwcHJlc3NlZCBldmVudHMgdG8gcHJldmVudCB0aGVtIGZyb20gYmVpbmcgcmV0cmlnZ2VyZWQuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqL1xuXHRcdHRoaXMuX3N1cHJlc3MgPSB7fTtcblxuXHRcdC8qKlxuXHRcdCAqIEFic29sdXRlIGN1cnJlbnQgcG9zaXRpb24uXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqL1xuXHRcdHRoaXMuX2N1cnJlbnQgPSBudWxsO1xuXG5cdFx0LyoqXG5cdFx0ICogQW5pbWF0aW9uIHNwZWVkIGluIG1pbGxpc2Vjb25kcy5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICovXG5cdFx0dGhpcy5fc3BlZWQgPSBudWxsO1xuXG5cdFx0LyoqXG5cdFx0ICogQ29vcmRpbmF0ZXMgb2YgYWxsIGl0ZW1zIGluIHBpeGVsLlxuXHRcdCAqIEB0b2RvIFRoZSBuYW1lIG9mIHRoaXMgbWVtYmVyIGlzIG1pc3NsZWFkaW5nLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKi9cblx0XHR0aGlzLl9jb29yZGluYXRlcyA9IFtdO1xuXG5cdFx0LyoqXG5cdFx0ICogQ3VycmVudCBicmVha3BvaW50LlxuXHRcdCAqIEB0b2RvIFJlYWwgbWVkaWEgcXVlcmllcyB3b3VsZCBiZSBuaWNlLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKi9cblx0XHR0aGlzLl9icmVha3BvaW50ID0gbnVsbDtcblxuXHRcdC8qKlxuXHRcdCAqIEN1cnJlbnQgd2lkdGggb2YgdGhlIHBsdWdpbiBlbGVtZW50LlxuXHRcdCAqL1xuXHRcdHRoaXMuX3dpZHRoID0gbnVsbDtcblxuXHRcdC8qKlxuXHRcdCAqIEFsbCByZWFsIGl0ZW1zLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKi9cblx0XHR0aGlzLl9pdGVtcyA9IFtdO1xuXG5cdFx0LyoqXG5cdFx0ICogQWxsIGNsb25lZCBpdGVtcy5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICovXG5cdFx0dGhpcy5fY2xvbmVzID0gW107XG5cblx0XHQvKipcblx0XHQgKiBNZXJnZSB2YWx1ZXMgb2YgYWxsIGl0ZW1zLlxuXHRcdCAqIEB0b2RvIE1heWJlIHRoaXMgY291bGQgYmUgcGFydCBvZiBhIHBsdWdpbi5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICovXG5cdFx0dGhpcy5fbWVyZ2VycyA9IFtdO1xuXG5cdFx0LyoqXG5cdFx0ICogV2lkdGhzIG9mIGFsbCBpdGVtcy5cblx0XHQgKi9cblx0XHR0aGlzLl93aWR0aHMgPSBbXTtcblxuXHRcdC8qKlxuXHRcdCAqIEludmFsaWRhdGVkIHBhcnRzIHdpdGhpbiB0aGUgdXBkYXRlIHByb2Nlc3MuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqL1xuXHRcdHRoaXMuX2ludmFsaWRhdGVkID0ge307XG5cblx0XHQvKipcblx0XHQgKiBPcmRlcmVkIGxpc3Qgb2Ygd29ya2VycyBmb3IgdGhlIHVwZGF0ZSBwcm9jZXNzLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKi9cblx0XHR0aGlzLl9waXBlID0gW107XG5cblx0XHQvKipcblx0XHQgKiBDdXJyZW50IHN0YXRlIGluZm9ybWF0aW9uIGZvciB0aGUgZHJhZyBvcGVyYXRpb24uXG5cdFx0ICogQHRvZG8gIzI2MVxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKi9cblx0XHR0aGlzLl9kcmFnID0ge1xuXHRcdFx0dGltZTogbnVsbCxcblx0XHRcdHRhcmdldDogbnVsbCxcblx0XHRcdHBvaW50ZXI6IG51bGwsXG5cdFx0XHRzdGFnZToge1xuXHRcdFx0XHRzdGFydDogbnVsbCxcblx0XHRcdFx0Y3VycmVudDogbnVsbFxuXHRcdFx0fSxcblx0XHRcdGRpcmVjdGlvbjogbnVsbFxuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBDdXJyZW50IHN0YXRlIGluZm9ybWF0aW9uIGFuZCB0aGVpciB0YWdzLlxuXHRcdCAqIEB0eXBlIHtPYmplY3R9XG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqL1xuXHRcdHRoaXMuX3N0YXRlcyA9IHtcblx0XHRcdGN1cnJlbnQ6IHt9LFxuXHRcdFx0dGFnczoge1xuXHRcdFx0XHQnaW5pdGlhbGl6aW5nJzogWyAnYnVzeScgXSxcblx0XHRcdFx0J2FuaW1hdGluZyc6IFsgJ2J1c3knIF0sXG5cdFx0XHRcdCdkcmFnZ2luZyc6IFsgJ2ludGVyYWN0aW5nJyBdXG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdCQuZWFjaChbICdvblJlc2l6ZScsICdvblRocm90dGxlZFJlc2l6ZScgXSwgJC5wcm94eShmdW5jdGlvbihpLCBoYW5kbGVyKSB7XG5cdFx0XHR0aGlzLl9oYW5kbGVyc1toYW5kbGVyXSA9ICQucHJveHkodGhpc1toYW5kbGVyXSwgdGhpcyk7XG5cdFx0fSwgdGhpcykpO1xuXG5cdFx0JC5lYWNoKE93bC5QbHVnaW5zLCAkLnByb3h5KGZ1bmN0aW9uKGtleSwgcGx1Z2luKSB7XG5cdFx0XHR0aGlzLl9wbHVnaW5zW2tleS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIGtleS5zbGljZSgxKV1cblx0XHRcdFx0PSBuZXcgcGx1Z2luKHRoaXMpO1xuXHRcdH0sIHRoaXMpKTtcblxuXHRcdCQuZWFjaChPd2wuV29ya2VycywgJC5wcm94eShmdW5jdGlvbihwcmlvcml0eSwgd29ya2VyKSB7XG5cdFx0XHR0aGlzLl9waXBlLnB1c2goe1xuXHRcdFx0XHQnZmlsdGVyJzogd29ya2VyLmZpbHRlcixcblx0XHRcdFx0J3J1bic6ICQucHJveHkod29ya2VyLnJ1biwgdGhpcylcblx0XHRcdH0pO1xuXHRcdH0sIHRoaXMpKTtcblxuXHRcdHRoaXMuc2V0dXAoKTtcblx0XHR0aGlzLmluaXRpYWxpemUoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBEZWZhdWx0IG9wdGlvbnMgZm9yIHRoZSBjYXJvdXNlbC5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0T3dsLkRlZmF1bHRzID0ge1xuXHRcdGl0ZW1zOiAzLFxuXHRcdGxvb3A6IGZhbHNlLFxuXHRcdGNlbnRlcjogZmFsc2UsXG5cdFx0cmV3aW5kOiBmYWxzZSxcblx0XHRjaGVja1Zpc2liaWxpdHk6IHRydWUsXG5cblx0XHRtb3VzZURyYWc6IHRydWUsXG5cdFx0dG91Y2hEcmFnOiB0cnVlLFxuXHRcdHB1bGxEcmFnOiB0cnVlLFxuXHRcdGZyZWVEcmFnOiBmYWxzZSxcblxuXHRcdG1hcmdpbjogMCxcblx0XHRzdGFnZVBhZGRpbmc6IDAsXG5cblx0XHRtZXJnZTogZmFsc2UsXG5cdFx0bWVyZ2VGaXQ6IHRydWUsXG5cdFx0YXV0b1dpZHRoOiBmYWxzZSxcblxuXHRcdHN0YXJ0UG9zaXRpb246IDAsXG5cdFx0cnRsOiBmYWxzZSxcblxuXHRcdHNtYXJ0U3BlZWQ6IDI1MCxcblx0XHRmbHVpZFNwZWVkOiBmYWxzZSxcblx0XHRkcmFnRW5kU3BlZWQ6IGZhbHNlLFxuXG5cdFx0cmVzcG9uc2l2ZToge30sXG5cdFx0cmVzcG9uc2l2ZVJlZnJlc2hSYXRlOiAyMDAsXG5cdFx0cmVzcG9uc2l2ZUJhc2VFbGVtZW50OiB3aW5kb3csXG5cblx0XHRmYWxsYmFja0Vhc2luZzogJ3N3aW5nJyxcblx0XHRzbGlkZVRyYW5zaXRpb246ICcnLFxuXG5cdFx0aW5mbzogZmFsc2UsXG5cblx0XHRuZXN0ZWRJdGVtU2VsZWN0b3I6IGZhbHNlLFxuXHRcdGl0ZW1FbGVtZW50OiAnZGl2Jyxcblx0XHRzdGFnZUVsZW1lbnQ6ICdkaXYnLFxuXG5cdFx0cmVmcmVzaENsYXNzOiAnb3dsLXJlZnJlc2gnLFxuXHRcdGxvYWRlZENsYXNzOiAnb3dsLWxvYWRlZCcsXG5cdFx0bG9hZGluZ0NsYXNzOiAnb3dsLWxvYWRpbmcnLFxuXHRcdHJ0bENsYXNzOiAnb3dsLXJ0bCcsXG5cdFx0cmVzcG9uc2l2ZUNsYXNzOiAnb3dsLXJlc3BvbnNpdmUnLFxuXHRcdGRyYWdDbGFzczogJ293bC1kcmFnJyxcblx0XHRpdGVtQ2xhc3M6ICdvd2wtaXRlbScsXG5cdFx0c3RhZ2VDbGFzczogJ293bC1zdGFnZScsXG5cdFx0c3RhZ2VPdXRlckNsYXNzOiAnb3dsLXN0YWdlLW91dGVyJyxcblx0XHRncmFiQ2xhc3M6ICdvd2wtZ3JhYidcblx0fTtcblxuXHQvKipcblx0ICogRW51bWVyYXRpb24gZm9yIHdpZHRoLlxuXHQgKiBAcHVibGljXG5cdCAqIEByZWFkb25seVxuXHQgKiBAZW51bSB7U3RyaW5nfVxuXHQgKi9cblx0T3dsLldpZHRoID0ge1xuXHRcdERlZmF1bHQ6ICdkZWZhdWx0Jyxcblx0XHRJbm5lcjogJ2lubmVyJyxcblx0XHRPdXRlcjogJ291dGVyJ1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBFbnVtZXJhdGlvbiBmb3IgdHlwZXMuXG5cdCAqIEBwdWJsaWNcblx0ICogQHJlYWRvbmx5XG5cdCAqIEBlbnVtIHtTdHJpbmd9XG5cdCAqL1xuXHRPd2wuVHlwZSA9IHtcblx0XHRFdmVudDogJ2V2ZW50Jyxcblx0XHRTdGF0ZTogJ3N0YXRlJ1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBDb250YWlucyBhbGwgcmVnaXN0ZXJlZCBwbHVnaW5zLlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRPd2wuUGx1Z2lucyA9IHt9O1xuXG5cdC8qKlxuXHQgKiBMaXN0IG9mIHdvcmtlcnMgaW52b2x2ZWQgaW4gdGhlIHVwZGF0ZSBwcm9jZXNzLlxuXHQgKi9cblx0T3dsLldvcmtlcnMgPSBbIHtcblx0XHRmaWx0ZXI6IFsgJ3dpZHRoJywgJ3NldHRpbmdzJyBdLFxuXHRcdHJ1bjogZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLl93aWR0aCA9IHRoaXMuJGVsZW1lbnQud2lkdGgoKTtcblx0XHR9XG5cdH0sIHtcblx0XHRmaWx0ZXI6IFsgJ3dpZHRoJywgJ2l0ZW1zJywgJ3NldHRpbmdzJyBdLFxuXHRcdHJ1bjogZnVuY3Rpb24oY2FjaGUpIHtcblx0XHRcdGNhY2hlLmN1cnJlbnQgPSB0aGlzLl9pdGVtcyAmJiB0aGlzLl9pdGVtc1t0aGlzLnJlbGF0aXZlKHRoaXMuX2N1cnJlbnQpXTtcblx0XHR9XG5cdH0sIHtcblx0XHRmaWx0ZXI6IFsgJ2l0ZW1zJywgJ3NldHRpbmdzJyBdLFxuXHRcdHJ1bjogZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLiRzdGFnZS5jaGlsZHJlbignLmNsb25lZCcpLnJlbW92ZSgpO1xuXHRcdH1cblx0fSwge1xuXHRcdGZpbHRlcjogWyAnd2lkdGgnLCAnaXRlbXMnLCAnc2V0dGluZ3MnIF0sXG5cdFx0cnVuOiBmdW5jdGlvbihjYWNoZSkge1xuXHRcdFx0dmFyIG1hcmdpbiA9IHRoaXMuc2V0dGluZ3MubWFyZ2luIHx8ICcnLFxuXHRcdFx0XHRncmlkID0gIXRoaXMuc2V0dGluZ3MuYXV0b1dpZHRoLFxuXHRcdFx0XHRydGwgPSB0aGlzLnNldHRpbmdzLnJ0bCxcblx0XHRcdFx0Y3NzID0ge1xuXHRcdFx0XHRcdCd3aWR0aCc6ICdhdXRvJyxcblx0XHRcdFx0XHQnbWFyZ2luLWxlZnQnOiBydGwgPyBtYXJnaW4gOiAnJyxcblx0XHRcdFx0XHQnbWFyZ2luLXJpZ2h0JzogcnRsID8gJycgOiBtYXJnaW5cblx0XHRcdFx0fTtcblxuXHRcdFx0IWdyaWQgJiYgdGhpcy4kc3RhZ2UuY2hpbGRyZW4oKS5jc3MoY3NzKTtcblxuXHRcdFx0Y2FjaGUuY3NzID0gY3NzO1xuXHRcdH1cblx0fSwge1xuXHRcdGZpbHRlcjogWyAnd2lkdGgnLCAnaXRlbXMnLCAnc2V0dGluZ3MnIF0sXG5cdFx0cnVuOiBmdW5jdGlvbihjYWNoZSkge1xuXHRcdFx0dmFyIHdpZHRoID0gKHRoaXMud2lkdGgoKSAvIHRoaXMuc2V0dGluZ3MuaXRlbXMpLnRvRml4ZWQoMykgLSB0aGlzLnNldHRpbmdzLm1hcmdpbixcblx0XHRcdFx0bWVyZ2UgPSBudWxsLFxuXHRcdFx0XHRpdGVyYXRvciA9IHRoaXMuX2l0ZW1zLmxlbmd0aCxcblx0XHRcdFx0Z3JpZCA9ICF0aGlzLnNldHRpbmdzLmF1dG9XaWR0aCxcblx0XHRcdFx0d2lkdGhzID0gW107XG5cblx0XHRcdGNhY2hlLml0ZW1zID0ge1xuXHRcdFx0XHRtZXJnZTogZmFsc2UsXG5cdFx0XHRcdHdpZHRoOiB3aWR0aFxuXHRcdFx0fTtcblxuXHRcdFx0d2hpbGUgKGl0ZXJhdG9yLS0pIHtcblx0XHRcdFx0bWVyZ2UgPSB0aGlzLl9tZXJnZXJzW2l0ZXJhdG9yXTtcblx0XHRcdFx0bWVyZ2UgPSB0aGlzLnNldHRpbmdzLm1lcmdlRml0ICYmIE1hdGgubWluKG1lcmdlLCB0aGlzLnNldHRpbmdzLml0ZW1zKSB8fCBtZXJnZTtcblxuXHRcdFx0XHRjYWNoZS5pdGVtcy5tZXJnZSA9IG1lcmdlID4gMSB8fCBjYWNoZS5pdGVtcy5tZXJnZTtcblxuXHRcdFx0XHR3aWR0aHNbaXRlcmF0b3JdID0gIWdyaWQgPyB0aGlzLl9pdGVtc1tpdGVyYXRvcl0ud2lkdGgoKSA6IHdpZHRoICogbWVyZ2U7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX3dpZHRocyA9IHdpZHRocztcblx0XHR9XG5cdH0sIHtcblx0XHRmaWx0ZXI6IFsgJ2l0ZW1zJywgJ3NldHRpbmdzJyBdLFxuXHRcdHJ1bjogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgY2xvbmVzID0gW10sXG5cdFx0XHRcdGl0ZW1zID0gdGhpcy5faXRlbXMsXG5cdFx0XHRcdHNldHRpbmdzID0gdGhpcy5zZXR0aW5ncyxcblx0XHRcdFx0Ly8gVE9ETzogU2hvdWxkIGJlIGNvbXB1dGVkIGZyb20gbnVtYmVyIG9mIG1pbiB3aWR0aCBpdGVtcyBpbiBzdGFnZVxuXHRcdFx0XHR2aWV3ID0gTWF0aC5tYXgoc2V0dGluZ3MuaXRlbXMgKiAyLCA0KSxcblx0XHRcdFx0c2l6ZSA9IE1hdGguY2VpbChpdGVtcy5sZW5ndGggLyAyKSAqIDIsXG5cdFx0XHRcdHJlcGVhdCA9IHNldHRpbmdzLmxvb3AgJiYgaXRlbXMubGVuZ3RoID8gc2V0dGluZ3MucmV3aW5kID8gdmlldyA6IE1hdGgubWF4KHZpZXcsIHNpemUpIDogMCxcblx0XHRcdFx0YXBwZW5kID0gJycsXG5cdFx0XHRcdHByZXBlbmQgPSAnJztcblxuXHRcdFx0cmVwZWF0IC89IDI7XG5cblx0XHRcdHdoaWxlIChyZXBlYXQgPiAwKSB7XG5cdFx0XHRcdC8vIFN3aXRjaCB0byBvbmx5IHVzaW5nIGFwcGVuZGVkIGNsb25lc1xuXHRcdFx0XHRjbG9uZXMucHVzaCh0aGlzLm5vcm1hbGl6ZShjbG9uZXMubGVuZ3RoIC8gMiwgdHJ1ZSkpO1xuXHRcdFx0XHRhcHBlbmQgPSBhcHBlbmQgKyBpdGVtc1tjbG9uZXNbY2xvbmVzLmxlbmd0aCAtIDFdXVswXS5vdXRlckhUTUw7XG5cdFx0XHRcdGNsb25lcy5wdXNoKHRoaXMubm9ybWFsaXplKGl0ZW1zLmxlbmd0aCAtIDEgLSAoY2xvbmVzLmxlbmd0aCAtIDEpIC8gMiwgdHJ1ZSkpO1xuXHRcdFx0XHRwcmVwZW5kID0gaXRlbXNbY2xvbmVzW2Nsb25lcy5sZW5ndGggLSAxXV1bMF0ub3V0ZXJIVE1MICsgcHJlcGVuZDtcblx0XHRcdFx0cmVwZWF0IC09IDE7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX2Nsb25lcyA9IGNsb25lcztcblxuXHRcdFx0JChhcHBlbmQpLmFkZENsYXNzKCdjbG9uZWQnKS5hcHBlbmRUbyh0aGlzLiRzdGFnZSk7XG5cdFx0XHQkKHByZXBlbmQpLmFkZENsYXNzKCdjbG9uZWQnKS5wcmVwZW5kVG8odGhpcy4kc3RhZ2UpO1xuXHRcdH1cblx0fSwge1xuXHRcdGZpbHRlcjogWyAnd2lkdGgnLCAnaXRlbXMnLCAnc2V0dGluZ3MnIF0sXG5cdFx0cnVuOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBydGwgPSB0aGlzLnNldHRpbmdzLnJ0bCA/IDEgOiAtMSxcblx0XHRcdFx0c2l6ZSA9IHRoaXMuX2Nsb25lcy5sZW5ndGggKyB0aGlzLl9pdGVtcy5sZW5ndGgsXG5cdFx0XHRcdGl0ZXJhdG9yID0gLTEsXG5cdFx0XHRcdHByZXZpb3VzID0gMCxcblx0XHRcdFx0Y3VycmVudCA9IDAsXG5cdFx0XHRcdGNvb3JkaW5hdGVzID0gW107XG5cblx0XHRcdHdoaWxlICgrK2l0ZXJhdG9yIDwgc2l6ZSkge1xuXHRcdFx0XHRwcmV2aW91cyA9IGNvb3JkaW5hdGVzW2l0ZXJhdG9yIC0gMV0gfHwgMDtcblx0XHRcdFx0Y3VycmVudCA9IHRoaXMuX3dpZHRoc1t0aGlzLnJlbGF0aXZlKGl0ZXJhdG9yKV0gKyB0aGlzLnNldHRpbmdzLm1hcmdpbjtcblx0XHRcdFx0Y29vcmRpbmF0ZXMucHVzaChwcmV2aW91cyArIGN1cnJlbnQgKiBydGwpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl9jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuXHRcdH1cblx0fSwge1xuXHRcdGZpbHRlcjogWyAnd2lkdGgnLCAnaXRlbXMnLCAnc2V0dGluZ3MnIF0sXG5cdFx0cnVuOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBwYWRkaW5nID0gdGhpcy5zZXR0aW5ncy5zdGFnZVBhZGRpbmcsXG5cdFx0XHRcdGNvb3JkaW5hdGVzID0gdGhpcy5fY29vcmRpbmF0ZXMsXG5cdFx0XHRcdGNzcyA9IHtcblx0XHRcdFx0XHQnd2lkdGgnOiBNYXRoLmNlaWwoTWF0aC5hYnMoY29vcmRpbmF0ZXNbY29vcmRpbmF0ZXMubGVuZ3RoIC0gMV0pKSArIHBhZGRpbmcgKiAyLFxuXHRcdFx0XHRcdCdwYWRkaW5nLWxlZnQnOiBwYWRkaW5nIHx8ICcnLFxuXHRcdFx0XHRcdCdwYWRkaW5nLXJpZ2h0JzogcGFkZGluZyB8fCAnJ1xuXHRcdFx0XHR9O1xuXG5cdFx0XHR0aGlzLiRzdGFnZS5jc3MoY3NzKTtcblx0XHR9XG5cdH0sIHtcblx0XHRmaWx0ZXI6IFsgJ3dpZHRoJywgJ2l0ZW1zJywgJ3NldHRpbmdzJyBdLFxuXHRcdHJ1bjogZnVuY3Rpb24oY2FjaGUpIHtcblx0XHRcdHZhciBpdGVyYXRvciA9IHRoaXMuX2Nvb3JkaW5hdGVzLmxlbmd0aCxcblx0XHRcdFx0Z3JpZCA9ICF0aGlzLnNldHRpbmdzLmF1dG9XaWR0aCxcblx0XHRcdFx0aXRlbXMgPSB0aGlzLiRzdGFnZS5jaGlsZHJlbigpO1xuXG5cdFx0XHRpZiAoZ3JpZCAmJiBjYWNoZS5pdGVtcy5tZXJnZSkge1xuXHRcdFx0XHR3aGlsZSAoaXRlcmF0b3ItLSkge1xuXHRcdFx0XHRcdGNhY2hlLmNzcy53aWR0aCA9IHRoaXMuX3dpZHRoc1t0aGlzLnJlbGF0aXZlKGl0ZXJhdG9yKV07XG5cdFx0XHRcdFx0aXRlbXMuZXEoaXRlcmF0b3IpLmNzcyhjYWNoZS5jc3MpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGdyaWQpIHtcblx0XHRcdFx0Y2FjaGUuY3NzLndpZHRoID0gY2FjaGUuaXRlbXMud2lkdGg7XG5cdFx0XHRcdGl0ZW1zLmNzcyhjYWNoZS5jc3MpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwge1xuXHRcdGZpbHRlcjogWyAnaXRlbXMnIF0sXG5cdFx0cnVuOiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuX2Nvb3JkaW5hdGVzLmxlbmd0aCA8IDEgJiYgdGhpcy4kc3RhZ2UucmVtb3ZlQXR0cignc3R5bGUnKTtcblx0XHR9XG5cdH0sIHtcblx0XHRmaWx0ZXI6IFsgJ3dpZHRoJywgJ2l0ZW1zJywgJ3NldHRpbmdzJyBdLFxuXHRcdHJ1bjogZnVuY3Rpb24oY2FjaGUpIHtcblx0XHRcdGNhY2hlLmN1cnJlbnQgPSBjYWNoZS5jdXJyZW50ID8gdGhpcy4kc3RhZ2UuY2hpbGRyZW4oKS5pbmRleChjYWNoZS5jdXJyZW50KSA6IDA7XG5cdFx0XHRjYWNoZS5jdXJyZW50ID0gTWF0aC5tYXgodGhpcy5taW5pbXVtKCksIE1hdGgubWluKHRoaXMubWF4aW11bSgpLCBjYWNoZS5jdXJyZW50KSk7XG5cdFx0XHR0aGlzLnJlc2V0KGNhY2hlLmN1cnJlbnQpO1xuXHRcdH1cblx0fSwge1xuXHRcdGZpbHRlcjogWyAncG9zaXRpb24nIF0sXG5cdFx0cnVuOiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuYW5pbWF0ZSh0aGlzLmNvb3JkaW5hdGVzKHRoaXMuX2N1cnJlbnQpKTtcblx0XHR9XG5cdH0sIHtcblx0XHRmaWx0ZXI6IFsgJ3dpZHRoJywgJ3Bvc2l0aW9uJywgJ2l0ZW1zJywgJ3NldHRpbmdzJyBdLFxuXHRcdHJ1bjogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcnRsID0gdGhpcy5zZXR0aW5ncy5ydGwgPyAxIDogLTEsXG5cdFx0XHRcdHBhZGRpbmcgPSB0aGlzLnNldHRpbmdzLnN0YWdlUGFkZGluZyAqIDIsXG5cdFx0XHRcdGJlZ2luID0gdGhpcy5jb29yZGluYXRlcyh0aGlzLmN1cnJlbnQoKSkgKyBwYWRkaW5nLFxuXHRcdFx0XHRlbmQgPSBiZWdpbiArIHRoaXMud2lkdGgoKSAqIHJ0bCxcblx0XHRcdFx0aW5uZXIsIG91dGVyLCBtYXRjaGVzID0gW10sIGksIG47XG5cblx0XHRcdGZvciAoaSA9IDAsIG4gPSB0aGlzLl9jb29yZGluYXRlcy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcblx0XHRcdFx0aW5uZXIgPSB0aGlzLl9jb29yZGluYXRlc1tpIC0gMV0gfHwgMDtcblx0XHRcdFx0b3V0ZXIgPSBNYXRoLmFicyh0aGlzLl9jb29yZGluYXRlc1tpXSkgKyBwYWRkaW5nICogcnRsO1xuXG5cdFx0XHRcdGlmICgodGhpcy5vcChpbm5lciwgJzw9JywgYmVnaW4pICYmICh0aGlzLm9wKGlubmVyLCAnPicsIGVuZCkpKVxuXHRcdFx0XHRcdHx8ICh0aGlzLm9wKG91dGVyLCAnPCcsIGJlZ2luKSAmJiB0aGlzLm9wKG91dGVyLCAnPicsIGVuZCkpKSB7XG5cdFx0XHRcdFx0bWF0Y2hlcy5wdXNoKGkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuJHN0YWdlLmNoaWxkcmVuKCcuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdFx0dGhpcy4kc3RhZ2UuY2hpbGRyZW4oJzplcSgnICsgbWF0Y2hlcy5qb2luKCcpLCA6ZXEoJykgKyAnKScpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuXHRcdFx0dGhpcy4kc3RhZ2UuY2hpbGRyZW4oJy5jZW50ZXInKS5yZW1vdmVDbGFzcygnY2VudGVyJyk7XG5cdFx0XHRpZiAodGhpcy5zZXR0aW5ncy5jZW50ZXIpIHtcblx0XHRcdFx0dGhpcy4kc3RhZ2UuY2hpbGRyZW4oKS5lcSh0aGlzLmN1cnJlbnQoKSkuYWRkQ2xhc3MoJ2NlbnRlcicpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBdO1xuXG5cdC8qKlxuXHQgKiBDcmVhdGUgdGhlIHN0YWdlIERPTSBlbGVtZW50XG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLmluaXRpYWxpemVTdGFnZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuJHN0YWdlID0gdGhpcy4kZWxlbWVudC5maW5kKCcuJyArIHRoaXMuc2V0dGluZ3Muc3RhZ2VDbGFzcyk7XG5cblx0XHQvLyBpZiB0aGUgc3RhZ2UgaXMgYWxyZWFkeSBpbiB0aGUgRE9NLCBncmFiIGl0IGFuZCBza2lwIHN0YWdlIGluaXRpYWxpemF0aW9uXG5cdFx0aWYgKHRoaXMuJHN0YWdlLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3ModGhpcy5vcHRpb25zLmxvYWRpbmdDbGFzcyk7XG5cblx0XHQvLyBjcmVhdGUgc3RhZ2Vcblx0XHR0aGlzLiRzdGFnZSA9ICQoJzwnICsgdGhpcy5zZXR0aW5ncy5zdGFnZUVsZW1lbnQgKyAnPicsIHtcblx0XHRcdFwiY2xhc3NcIjogdGhpcy5zZXR0aW5ncy5zdGFnZUNsYXNzXG5cdFx0fSkud3JhcCggJCggJzxkaXYvPicsIHtcblx0XHRcdFwiY2xhc3NcIjogdGhpcy5zZXR0aW5ncy5zdGFnZU91dGVyQ2xhc3Ncblx0XHR9KSk7XG5cblx0XHQvLyBhcHBlbmQgc3RhZ2Vcblx0XHR0aGlzLiRlbGVtZW50LmFwcGVuZCh0aGlzLiRzdGFnZS5wYXJlbnQoKSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIENyZWF0ZSBpdGVtIERPTSBlbGVtZW50c1xuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5pbml0aWFsaXplSXRlbXMgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgJGl0ZW1zID0gdGhpcy4kZWxlbWVudC5maW5kKCcub3dsLWl0ZW0nKTtcblxuXHRcdC8vIGlmIHRoZSBpdGVtcyBhcmUgYWxyZWFkeSBpbiB0aGUgRE9NLCBncmFiIHRoZW0gYW5kIHNraXAgaXRlbSBpbml0aWFsaXphdGlvblxuXHRcdGlmICgkaXRlbXMubGVuZ3RoKSB7XG5cdFx0XHR0aGlzLl9pdGVtcyA9ICRpdGVtcy5nZXQoKS5tYXAoZnVuY3Rpb24oaXRlbSkge1xuXHRcdFx0XHRyZXR1cm4gJChpdGVtKTtcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLl9tZXJnZXJzID0gdGhpcy5faXRlbXMubWFwKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLnJlZnJlc2goKTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIGFwcGVuZCBjb250ZW50XG5cdFx0dGhpcy5yZXBsYWNlKHRoaXMuJGVsZW1lbnQuY2hpbGRyZW4oKS5ub3QodGhpcy4kc3RhZ2UucGFyZW50KCkpKTtcblxuXHRcdC8vIGNoZWNrIHZpc2liaWxpdHlcblx0XHRpZiAodGhpcy5pc1Zpc2libGUoKSkge1xuXHRcdFx0Ly8gdXBkYXRlIHZpZXdcblx0XHRcdHRoaXMucmVmcmVzaCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBpbnZhbGlkYXRlIHdpZHRoXG5cdFx0XHR0aGlzLmludmFsaWRhdGUoJ3dpZHRoJyk7XG5cdFx0fVxuXG5cdFx0dGhpcy4kZWxlbWVudFxuXHRcdFx0LnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5sb2FkaW5nQ2xhc3MpXG5cdFx0XHQuYWRkQ2xhc3ModGhpcy5vcHRpb25zLmxvYWRlZENsYXNzKTtcblx0fTtcblxuXHQvKipcblx0ICogSW5pdGlhbGl6ZXMgdGhlIGNhcm91c2VsLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbigpIHtcblx0XHR0aGlzLmVudGVyKCdpbml0aWFsaXppbmcnKTtcblx0XHR0aGlzLnRyaWdnZXIoJ2luaXRpYWxpemUnKTtcblxuXHRcdHRoaXMuJGVsZW1lbnQudG9nZ2xlQ2xhc3ModGhpcy5zZXR0aW5ncy5ydGxDbGFzcywgdGhpcy5zZXR0aW5ncy5ydGwpO1xuXG5cdFx0aWYgKHRoaXMuc2V0dGluZ3MuYXV0b1dpZHRoICYmICF0aGlzLmlzKCdwcmUtbG9hZGluZycpKSB7XG5cdFx0XHR2YXIgaW1ncywgbmVzdGVkU2VsZWN0b3IsIHdpZHRoO1xuXHRcdFx0aW1ncyA9IHRoaXMuJGVsZW1lbnQuZmluZCgnaW1nJyk7XG5cdFx0XHRuZXN0ZWRTZWxlY3RvciA9IHRoaXMuc2V0dGluZ3MubmVzdGVkSXRlbVNlbGVjdG9yID8gJy4nICsgdGhpcy5zZXR0aW5ncy5uZXN0ZWRJdGVtU2VsZWN0b3IgOiB1bmRlZmluZWQ7XG5cdFx0XHR3aWR0aCA9IHRoaXMuJGVsZW1lbnQuY2hpbGRyZW4obmVzdGVkU2VsZWN0b3IpLndpZHRoKCk7XG5cblx0XHRcdGlmIChpbWdzLmxlbmd0aCAmJiB3aWR0aCA8PSAwKSB7XG5cdFx0XHRcdHRoaXMucHJlbG9hZEF1dG9XaWR0aEltYWdlcyhpbWdzKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLmluaXRpYWxpemVTdGFnZSgpO1xuXHRcdHRoaXMuaW5pdGlhbGl6ZUl0ZW1zKCk7XG5cblx0XHQvLyByZWdpc3RlciBldmVudCBoYW5kbGVyc1xuXHRcdHRoaXMucmVnaXN0ZXJFdmVudEhhbmRsZXJzKCk7XG5cblx0XHR0aGlzLmxlYXZlKCdpbml0aWFsaXppbmcnKTtcblx0XHR0aGlzLnRyaWdnZXIoJ2luaXRpYWxpemVkJyk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEByZXR1cm5zIHtCb29sZWFufSB2aXNpYmlsaXR5IG9mICRlbGVtZW50XG5cdCAqICAgICAgICAgICAgICAgICAgICBpZiB5b3Uga25vdyB0aGUgY2Fyb3VzZWwgd2lsbCBhbHdheXMgYmUgdmlzaWJsZSB5b3UgY2FuIHNldCBgY2hlY2tWaXNpYmlsaXR5YCB0byBgZmFsc2VgIHRvXG5cdCAqICAgICAgICAgICAgICAgICAgICBwcmV2ZW50IHRoZSBleHBlbnNpdmUgYnJvd3NlciBsYXlvdXQgZm9yY2VkIHJlZmxvdyB0aGUgJGVsZW1lbnQuaXMoJzp2aXNpYmxlJykgZG9lc1xuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5pc1Zpc2libGUgPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5zZXR0aW5ncy5jaGVja1Zpc2liaWxpdHlcblx0XHRcdD8gdGhpcy4kZWxlbWVudC5pcygnOnZpc2libGUnKVxuXHRcdFx0OiB0cnVlO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXR1cHMgdGhlIGN1cnJlbnQgc2V0dGluZ3MuXG5cdCAqIEB0b2RvIFJlbW92ZSByZXNwb25zaXZlIGNsYXNzZXMuIFdoeSBzaG91bGQgYWRhcHRpdmUgZGVzaWducyBiZSBicm91Z2h0IGludG8gSUU4P1xuXHQgKiBAdG9kbyBTdXBwb3J0IGZvciBtZWRpYSBxdWVyaWVzIGJ5IHVzaW5nIGBtYXRjaE1lZGlhYCB3b3VsZCBiZSBuaWNlLlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnNldHVwID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHZpZXdwb3J0ID0gdGhpcy52aWV3cG9ydCgpLFxuXHRcdFx0b3ZlcndyaXRlcyA9IHRoaXMub3B0aW9ucy5yZXNwb25zaXZlLFxuXHRcdFx0bWF0Y2ggPSAtMSxcblx0XHRcdHNldHRpbmdzID0gbnVsbDtcblxuXHRcdGlmICghb3ZlcndyaXRlcykge1xuXHRcdFx0c2V0dGluZ3MgPSAkLmV4dGVuZCh7fSwgdGhpcy5vcHRpb25zKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JC5lYWNoKG92ZXJ3cml0ZXMsIGZ1bmN0aW9uKGJyZWFrcG9pbnQpIHtcblx0XHRcdFx0aWYgKGJyZWFrcG9pbnQgPD0gdmlld3BvcnQgJiYgYnJlYWtwb2ludCA+IG1hdGNoKSB7XG5cdFx0XHRcdFx0bWF0Y2ggPSBOdW1iZXIoYnJlYWtwb2ludCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRzZXR0aW5ncyA9ICQuZXh0ZW5kKHt9LCB0aGlzLm9wdGlvbnMsIG92ZXJ3cml0ZXNbbWF0Y2hdKTtcblx0XHRcdGlmICh0eXBlb2Ygc2V0dGluZ3Muc3RhZ2VQYWRkaW5nID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdHNldHRpbmdzLnN0YWdlUGFkZGluZyA9IHNldHRpbmdzLnN0YWdlUGFkZGluZygpO1xuXHRcdFx0fVxuXHRcdFx0ZGVsZXRlIHNldHRpbmdzLnJlc3BvbnNpdmU7XG5cblx0XHRcdC8vIHJlc3BvbnNpdmUgY2xhc3Ncblx0XHRcdGlmIChzZXR0aW5ncy5yZXNwb25zaXZlQ2xhc3MpIHtcblx0XHRcdFx0dGhpcy4kZWxlbWVudC5hdHRyKCdjbGFzcycsXG5cdFx0XHRcdFx0dGhpcy4kZWxlbWVudC5hdHRyKCdjbGFzcycpLnJlcGxhY2UobmV3IFJlZ0V4cCgnKCcgKyB0aGlzLm9wdGlvbnMucmVzcG9uc2l2ZUNsYXNzICsgJy0pXFxcXFMrXFxcXHMnLCAnZycpLCAnJDEnICsgbWF0Y2gpXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy50cmlnZ2VyKCdjaGFuZ2UnLCB7IHByb3BlcnR5OiB7IG5hbWU6ICdzZXR0aW5ncycsIHZhbHVlOiBzZXR0aW5ncyB9IH0pO1xuXHRcdHRoaXMuX2JyZWFrcG9pbnQgPSBtYXRjaDtcblx0XHR0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG5cdFx0dGhpcy5pbnZhbGlkYXRlKCdzZXR0aW5ncycpO1xuXHRcdHRoaXMudHJpZ2dlcignY2hhbmdlZCcsIHsgcHJvcGVydHk6IHsgbmFtZTogJ3NldHRpbmdzJywgdmFsdWU6IHRoaXMuc2V0dGluZ3MgfSB9KTtcblx0fTtcblxuXHQvKipcblx0ICogVXBkYXRlcyBvcHRpb24gbG9naWMgaWYgbmVjZXNzZXJ5LlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLm9wdGlvbnNMb2dpYyA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICh0aGlzLnNldHRpbmdzLmF1dG9XaWR0aCkge1xuXHRcdFx0dGhpcy5zZXR0aW5ncy5zdGFnZVBhZGRpbmcgPSBmYWxzZTtcblx0XHRcdHRoaXMuc2V0dGluZ3MubWVyZ2UgPSBmYWxzZTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIFByZXBhcmVzIGFuIGl0ZW0gYmVmb3JlIGFkZC5cblx0ICogQHRvZG8gUmVuYW1lIGV2ZW50IHBhcmFtZXRlciBgY29udGVudGAgdG8gYGl0ZW1gLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEByZXR1cm5zIHtqUXVlcnl8SFRNTEVsZW1lbnR9IC0gVGhlIGl0ZW0gY29udGFpbmVyLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5wcmVwYXJlID0gZnVuY3Rpb24oaXRlbSkge1xuXHRcdHZhciBldmVudCA9IHRoaXMudHJpZ2dlcigncHJlcGFyZScsIHsgY29udGVudDogaXRlbSB9KTtcblxuXHRcdGlmICghZXZlbnQuZGF0YSkge1xuXHRcdFx0ZXZlbnQuZGF0YSA9ICQoJzwnICsgdGhpcy5zZXR0aW5ncy5pdGVtRWxlbWVudCArICcvPicpXG5cdFx0XHRcdC5hZGRDbGFzcyh0aGlzLm9wdGlvbnMuaXRlbUNsYXNzKS5hcHBlbmQoaXRlbSlcblx0XHR9XG5cblx0XHR0aGlzLnRyaWdnZXIoJ3ByZXBhcmVkJywgeyBjb250ZW50OiBldmVudC5kYXRhIH0pO1xuXG5cdFx0cmV0dXJuIGV2ZW50LmRhdGE7XG5cdH07XG5cblx0LyoqXG5cdCAqIFVwZGF0ZXMgdGhlIHZpZXcuXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdE93bC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGkgPSAwLFxuXHRcdFx0biA9IHRoaXMuX3BpcGUubGVuZ3RoLFxuXHRcdFx0ZmlsdGVyID0gJC5wcm94eShmdW5jdGlvbihwKSB7IHJldHVybiB0aGlzW3BdIH0sIHRoaXMuX2ludmFsaWRhdGVkKSxcblx0XHRcdGNhY2hlID0ge307XG5cblx0XHR3aGlsZSAoaSA8IG4pIHtcblx0XHRcdGlmICh0aGlzLl9pbnZhbGlkYXRlZC5hbGwgfHwgJC5ncmVwKHRoaXMuX3BpcGVbaV0uZmlsdGVyLCBmaWx0ZXIpLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0dGhpcy5fcGlwZVtpXS5ydW4oY2FjaGUpO1xuXHRcdFx0fVxuXHRcdFx0aSsrO1xuXHRcdH1cblxuXHRcdHRoaXMuX2ludmFsaWRhdGVkID0ge307XG5cblx0XHQhdGhpcy5pcygndmFsaWQnKSAmJiB0aGlzLmVudGVyKCd2YWxpZCcpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBHZXRzIHRoZSB3aWR0aCBvZiB0aGUgdmlldy5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge093bC5XaWR0aH0gW2RpbWVuc2lvbj1Pd2wuV2lkdGguRGVmYXVsdF0gLSBUaGUgZGltZW5zaW9uIHRvIHJldHVybi5cblx0ICogQHJldHVybnMge051bWJlcn0gLSBUaGUgd2lkdGggb2YgdGhlIHZpZXcgaW4gcGl4ZWwuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLndpZHRoID0gZnVuY3Rpb24oZGltZW5zaW9uKSB7XG5cdFx0ZGltZW5zaW9uID0gZGltZW5zaW9uIHx8IE93bC5XaWR0aC5EZWZhdWx0O1xuXHRcdHN3aXRjaCAoZGltZW5zaW9uKSB7XG5cdFx0XHRjYXNlIE93bC5XaWR0aC5Jbm5lcjpcblx0XHRcdGNhc2UgT3dsLldpZHRoLk91dGVyOlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5fd2lkdGg7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gdGhpcy5fd2lkdGggLSB0aGlzLnNldHRpbmdzLnN0YWdlUGFkZGluZyAqIDIgKyB0aGlzLnNldHRpbmdzLm1hcmdpbjtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIFJlZnJlc2hlcyB0aGUgY2Fyb3VzZWwgcHJpbWFyaWx5IGZvciBhZGFwdGl2ZSBwdXJwb3Nlcy5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5lbnRlcigncmVmcmVzaGluZycpO1xuXHRcdHRoaXMudHJpZ2dlcigncmVmcmVzaCcpO1xuXG5cdFx0dGhpcy5zZXR1cCgpO1xuXG5cdFx0dGhpcy5vcHRpb25zTG9naWMoKTtcblxuXHRcdHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3ModGhpcy5vcHRpb25zLnJlZnJlc2hDbGFzcyk7XG5cblx0XHR0aGlzLnVwZGF0ZSgpO1xuXG5cdFx0dGhpcy4kZWxlbWVudC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMucmVmcmVzaENsYXNzKTtcblxuXHRcdHRoaXMubGVhdmUoJ3JlZnJlc2hpbmcnKTtcblx0XHR0aGlzLnRyaWdnZXIoJ3JlZnJlc2hlZCcpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBDaGVja3Mgd2luZG93IGByZXNpemVgIGV2ZW50LlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLm9uVGhyb3R0bGVkUmVzaXplID0gZnVuY3Rpb24oKSB7XG5cdFx0d2luZG93LmNsZWFyVGltZW91dCh0aGlzLnJlc2l6ZVRpbWVyKTtcblx0XHR0aGlzLnJlc2l6ZVRpbWVyID0gd2luZG93LnNldFRpbWVvdXQodGhpcy5faGFuZGxlcnMub25SZXNpemUsIHRoaXMuc2V0dGluZ3MucmVzcG9uc2l2ZVJlZnJlc2hSYXRlKTtcblx0fTtcblxuXHQvKipcblx0ICogQ2hlY2tzIHdpbmRvdyBgcmVzaXplYCBldmVudC5cblx0ICogQHByb3RlY3RlZFxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5vblJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICghdGhpcy5faXRlbXMubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuX3dpZHRoID09PSB0aGlzLiRlbGVtZW50LndpZHRoKCkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAoIXRoaXMuaXNWaXNpYmxlKCkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHR0aGlzLmVudGVyKCdyZXNpemluZycpO1xuXG5cdFx0aWYgKHRoaXMudHJpZ2dlcigncmVzaXplJykuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcblx0XHRcdHRoaXMubGVhdmUoJ3Jlc2l6aW5nJyk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0dGhpcy5pbnZhbGlkYXRlKCd3aWR0aCcpO1xuXG5cdFx0dGhpcy5yZWZyZXNoKCk7XG5cblx0XHR0aGlzLmxlYXZlKCdyZXNpemluZycpO1xuXHRcdHRoaXMudHJpZ2dlcigncmVzaXplZCcpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBSZWdpc3RlcnMgZXZlbnQgaGFuZGxlcnMuXG5cdCAqIEB0b2RvIENoZWNrIGBtc1BvaW50ZXJFbmFibGVkYFxuXHQgKiBAdG9kbyAjMjYxXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICovXG5cdE93bC5wcm90b3R5cGUucmVnaXN0ZXJFdmVudEhhbmRsZXJzID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYgKCQuc3VwcG9ydC50cmFuc2l0aW9uKSB7XG5cdFx0XHR0aGlzLiRzdGFnZS5vbigkLnN1cHBvcnQudHJhbnNpdGlvbi5lbmQgKyAnLm93bC5jb3JlJywgJC5wcm94eSh0aGlzLm9uVHJhbnNpdGlvbkVuZCwgdGhpcykpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnNldHRpbmdzLnJlc3BvbnNpdmUgIT09IGZhbHNlKSB7XG5cdFx0XHR0aGlzLm9uKHdpbmRvdywgJ3Jlc2l6ZScsIHRoaXMuX2hhbmRsZXJzLm9uVGhyb3R0bGVkUmVzaXplKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5zZXR0aW5ncy5tb3VzZURyYWcpIHtcblx0XHRcdHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3ModGhpcy5vcHRpb25zLmRyYWdDbGFzcyk7XG5cdFx0XHR0aGlzLiRzdGFnZS5vbignbW91c2Vkb3duLm93bC5jb3JlJywgJC5wcm94eSh0aGlzLm9uRHJhZ1N0YXJ0LCB0aGlzKSk7XG5cdFx0XHR0aGlzLiRzdGFnZS5vbignZHJhZ3N0YXJ0Lm93bC5jb3JlIHNlbGVjdHN0YXJ0Lm93bC5jb3JlJywgZnVuY3Rpb24oKSB7IHJldHVybiBmYWxzZSB9KTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5zZXR0aW5ncy50b3VjaERyYWcpe1xuXHRcdFx0dGhpcy4kc3RhZ2Uub24oJ3RvdWNoc3RhcnQub3dsLmNvcmUnLCAkLnByb3h5KHRoaXMub25EcmFnU3RhcnQsIHRoaXMpKTtcblx0XHRcdHRoaXMuJHN0YWdlLm9uKCd0b3VjaGNhbmNlbC5vd2wuY29yZScsICQucHJveHkodGhpcy5vbkRyYWdFbmQsIHRoaXMpKTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgYHRvdWNoc3RhcnRgIGFuZCBgbW91c2Vkb3duYCBldmVudHMuXG5cdCAqIEB0b2RvIEhvcml6b250YWwgc3dpcGUgdGhyZXNob2xkIGFzIG9wdGlvblxuXHQgKiBAdG9kbyAjMjYxXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBUaGUgZXZlbnQgYXJndW1lbnRzLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5vbkRyYWdTdGFydCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0dmFyIHN0YWdlID0gbnVsbDtcblxuXHRcdGlmIChldmVudC53aGljaCA9PT0gMykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICgkLnN1cHBvcnQudHJhbnNmb3JtKSB7XG5cdFx0XHRzdGFnZSA9IHRoaXMuJHN0YWdlLmNzcygndHJhbnNmb3JtJykucmVwbGFjZSgvLipcXCh8XFwpfCAvZywgJycpLnNwbGl0KCcsJyk7XG5cdFx0XHRzdGFnZSA9IHtcblx0XHRcdFx0eDogc3RhZ2Vbc3RhZ2UubGVuZ3RoID09PSAxNiA/IDEyIDogNF0sXG5cdFx0XHRcdHk6IHN0YWdlW3N0YWdlLmxlbmd0aCA9PT0gMTYgPyAxMyA6IDVdXG5cdFx0XHR9O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdGFnZSA9IHRoaXMuJHN0YWdlLnBvc2l0aW9uKCk7XG5cdFx0XHRzdGFnZSA9IHtcblx0XHRcdFx0eDogdGhpcy5zZXR0aW5ncy5ydGwgP1xuXHRcdFx0XHRcdHN0YWdlLmxlZnQgKyB0aGlzLiRzdGFnZS53aWR0aCgpIC0gdGhpcy53aWR0aCgpICsgdGhpcy5zZXR0aW5ncy5tYXJnaW4gOlxuXHRcdFx0XHRcdHN0YWdlLmxlZnQsXG5cdFx0XHRcdHk6IHN0YWdlLnRvcFxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5pcygnYW5pbWF0aW5nJykpIHtcblx0XHRcdCQuc3VwcG9ydC50cmFuc2Zvcm0gPyB0aGlzLmFuaW1hdGUoc3RhZ2UueCkgOiB0aGlzLiRzdGFnZS5zdG9wKClcblx0XHRcdHRoaXMuaW52YWxpZGF0ZSgncG9zaXRpb24nKTtcblx0XHR9XG5cblx0XHR0aGlzLiRlbGVtZW50LnRvZ2dsZUNsYXNzKHRoaXMub3B0aW9ucy5ncmFiQ2xhc3MsIGV2ZW50LnR5cGUgPT09ICdtb3VzZWRvd24nKTtcblxuXHRcdHRoaXMuc3BlZWQoMCk7XG5cblx0XHR0aGlzLl9kcmFnLnRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblx0XHR0aGlzLl9kcmFnLnRhcmdldCA9ICQoZXZlbnQudGFyZ2V0KTtcblx0XHR0aGlzLl9kcmFnLnN0YWdlLnN0YXJ0ID0gc3RhZ2U7XG5cdFx0dGhpcy5fZHJhZy5zdGFnZS5jdXJyZW50ID0gc3RhZ2U7XG5cdFx0dGhpcy5fZHJhZy5wb2ludGVyID0gdGhpcy5wb2ludGVyKGV2ZW50KTtcblxuXHRcdCQoZG9jdW1lbnQpLm9uKCdtb3VzZXVwLm93bC5jb3JlIHRvdWNoZW5kLm93bC5jb3JlJywgJC5wcm94eSh0aGlzLm9uRHJhZ0VuZCwgdGhpcykpO1xuXG5cdFx0JChkb2N1bWVudCkub25lKCdtb3VzZW1vdmUub3dsLmNvcmUgdG91Y2htb3ZlLm93bC5jb3JlJywgJC5wcm94eShmdW5jdGlvbihldmVudCkge1xuXHRcdFx0dmFyIGRlbHRhID0gdGhpcy5kaWZmZXJlbmNlKHRoaXMuX2RyYWcucG9pbnRlciwgdGhpcy5wb2ludGVyKGV2ZW50KSk7XG5cblx0XHRcdCQoZG9jdW1lbnQpLm9uKCdtb3VzZW1vdmUub3dsLmNvcmUgdG91Y2htb3ZlLm93bC5jb3JlJywgJC5wcm94eSh0aGlzLm9uRHJhZ01vdmUsIHRoaXMpKTtcblxuXHRcdFx0aWYgKE1hdGguYWJzKGRlbHRhLngpIDwgTWF0aC5hYnMoZGVsdGEueSkgJiYgdGhpcy5pcygndmFsaWQnKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdHRoaXMuZW50ZXIoJ2RyYWdnaW5nJyk7XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2RyYWcnKTtcblx0XHR9LCB0aGlzKSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgdGhlIGB0b3VjaG1vdmVgIGFuZCBgbW91c2Vtb3ZlYCBldmVudHMuXG5cdCAqIEB0b2RvICMyNjFcblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIFRoZSBldmVudCBhcmd1bWVudHMuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLm9uRHJhZ01vdmUgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdHZhciBtaW5pbXVtID0gbnVsbCxcblx0XHRcdG1heGltdW0gPSBudWxsLFxuXHRcdFx0cHVsbCA9IG51bGwsXG5cdFx0XHRkZWx0YSA9IHRoaXMuZGlmZmVyZW5jZSh0aGlzLl9kcmFnLnBvaW50ZXIsIHRoaXMucG9pbnRlcihldmVudCkpLFxuXHRcdFx0c3RhZ2UgPSB0aGlzLmRpZmZlcmVuY2UodGhpcy5fZHJhZy5zdGFnZS5zdGFydCwgZGVsdGEpO1xuXG5cdFx0aWYgKCF0aGlzLmlzKCdkcmFnZ2luZycpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGlmICh0aGlzLnNldHRpbmdzLmxvb3ApIHtcblx0XHRcdG1pbmltdW0gPSB0aGlzLmNvb3JkaW5hdGVzKHRoaXMubWluaW11bSgpKTtcblx0XHRcdG1heGltdW0gPSB0aGlzLmNvb3JkaW5hdGVzKHRoaXMubWF4aW11bSgpICsgMSkgLSBtaW5pbXVtO1xuXHRcdFx0c3RhZ2UueCA9ICgoKHN0YWdlLnggLSBtaW5pbXVtKSAlIG1heGltdW0gKyBtYXhpbXVtKSAlIG1heGltdW0pICsgbWluaW11bTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWluaW11bSA9IHRoaXMuc2V0dGluZ3MucnRsID8gdGhpcy5jb29yZGluYXRlcyh0aGlzLm1heGltdW0oKSkgOiB0aGlzLmNvb3JkaW5hdGVzKHRoaXMubWluaW11bSgpKTtcblx0XHRcdG1heGltdW0gPSB0aGlzLnNldHRpbmdzLnJ0bCA/IHRoaXMuY29vcmRpbmF0ZXModGhpcy5taW5pbXVtKCkpIDogdGhpcy5jb29yZGluYXRlcyh0aGlzLm1heGltdW0oKSk7XG5cdFx0XHRwdWxsID0gdGhpcy5zZXR0aW5ncy5wdWxsRHJhZyA/IC0xICogZGVsdGEueCAvIDUgOiAwO1xuXHRcdFx0c3RhZ2UueCA9IE1hdGgubWF4KE1hdGgubWluKHN0YWdlLngsIG1pbmltdW0gKyBwdWxsKSwgbWF4aW11bSArIHB1bGwpO1xuXHRcdH1cblxuXHRcdHRoaXMuX2RyYWcuc3RhZ2UuY3VycmVudCA9IHN0YWdlO1xuXG5cdFx0dGhpcy5hbmltYXRlKHN0YWdlLngpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIHRoZSBgdG91Y2hlbmRgIGFuZCBgbW91c2V1cGAgZXZlbnRzLlxuXHQgKiBAdG9kbyAjMjYxXG5cdCAqIEB0b2RvIFRocmVzaG9sZCBmb3IgY2xpY2sgZXZlbnRcblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIFRoZSBldmVudCBhcmd1bWVudHMuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLm9uRHJhZ0VuZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0dmFyIGRlbHRhID0gdGhpcy5kaWZmZXJlbmNlKHRoaXMuX2RyYWcucG9pbnRlciwgdGhpcy5wb2ludGVyKGV2ZW50KSksXG5cdFx0XHRzdGFnZSA9IHRoaXMuX2RyYWcuc3RhZ2UuY3VycmVudCxcblx0XHRcdGRpcmVjdGlvbiA9IGRlbHRhLnggPiAwIF4gdGhpcy5zZXR0aW5ncy5ydGwgPyAnbGVmdCcgOiAncmlnaHQnO1xuXG5cdFx0JChkb2N1bWVudCkub2ZmKCcub3dsLmNvcmUnKTtcblxuXHRcdHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmdyYWJDbGFzcyk7XG5cblx0XHRpZiAoZGVsdGEueCAhPT0gMCAmJiB0aGlzLmlzKCdkcmFnZ2luZycpIHx8ICF0aGlzLmlzKCd2YWxpZCcpKSB7XG5cdFx0XHR0aGlzLnNwZWVkKHRoaXMuc2V0dGluZ3MuZHJhZ0VuZFNwZWVkIHx8IHRoaXMuc2V0dGluZ3Muc21hcnRTcGVlZCk7XG5cdFx0XHR0aGlzLmN1cnJlbnQodGhpcy5jbG9zZXN0KHN0YWdlLngsIGRlbHRhLnggIT09IDAgPyBkaXJlY3Rpb24gOiB0aGlzLl9kcmFnLmRpcmVjdGlvbikpO1xuXHRcdFx0dGhpcy5pbnZhbGlkYXRlKCdwb3NpdGlvbicpO1xuXHRcdFx0dGhpcy51cGRhdGUoKTtcblxuXHRcdFx0dGhpcy5fZHJhZy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG5cblx0XHRcdGlmIChNYXRoLmFicyhkZWx0YS54KSA+IDMgfHwgbmV3IERhdGUoKS5nZXRUaW1lKCkgLSB0aGlzLl9kcmFnLnRpbWUgPiAzMDApIHtcblx0XHRcdFx0dGhpcy5fZHJhZy50YXJnZXQub25lKCdjbGljay5vd2wuY29yZScsIGZ1bmN0aW9uKCkgeyByZXR1cm4gZmFsc2U7IH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICghdGhpcy5pcygnZHJhZ2dpbmcnKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMubGVhdmUoJ2RyYWdnaW5nJyk7XG5cdFx0dGhpcy50cmlnZ2VyKCdkcmFnZ2VkJyk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEdldHMgYWJzb2x1dGUgcG9zaXRpb24gb2YgdGhlIGNsb3Nlc3QgaXRlbSBmb3IgYSBjb29yZGluYXRlLlxuXHQgKiBAdG9kbyBTZXR0aW5nIGBmcmVlRHJhZ2AgbWFrZXMgYGNsb3Nlc3RgIG5vdCByZXVzYWJsZS4gU2VlICMxNjUuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGNvb3JkaW5hdGUgLSBUaGUgY29vcmRpbmF0ZSBpbiBwaXhlbC5cblx0ICogQHBhcmFtIHtTdHJpbmd9IGRpcmVjdGlvbiAtIFRoZSBkaXJlY3Rpb24gdG8gY2hlY2sgZm9yIHRoZSBjbG9zZXN0IGl0ZW0uIEV0aGVyIGBsZWZ0YCBvciBgcmlnaHRgLlxuXHQgKiBAcmV0dXJuIHtOdW1iZXJ9IC0gVGhlIGFic29sdXRlIHBvc2l0aW9uIG9mIHRoZSBjbG9zZXN0IGl0ZW0uXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLmNsb3Nlc3QgPSBmdW5jdGlvbihjb29yZGluYXRlLCBkaXJlY3Rpb24pIHtcblx0XHR2YXIgcG9zaXRpb24gPSAtMSxcblx0XHRcdHB1bGwgPSAzMCxcblx0XHRcdHdpZHRoID0gdGhpcy53aWR0aCgpLFxuXHRcdFx0Y29vcmRpbmF0ZXMgPSB0aGlzLmNvb3JkaW5hdGVzKCk7XG5cblx0XHRpZiAoIXRoaXMuc2V0dGluZ3MuZnJlZURyYWcpIHtcblx0XHRcdC8vIGNoZWNrIGNsb3Nlc3QgaXRlbVxuXHRcdFx0JC5lYWNoKGNvb3JkaW5hdGVzLCAkLnByb3h5KGZ1bmN0aW9uKGluZGV4LCB2YWx1ZSkge1xuXHRcdFx0XHQvLyBvbiBhIGxlZnQgcHVsbCwgY2hlY2sgb24gY3VycmVudCBpbmRleFxuXHRcdFx0XHRpZiAoZGlyZWN0aW9uID09PSAnbGVmdCcgJiYgY29vcmRpbmF0ZSA+IHZhbHVlIC0gcHVsbCAmJiBjb29yZGluYXRlIDwgdmFsdWUgKyBwdWxsKSB7XG5cdFx0XHRcdFx0cG9zaXRpb24gPSBpbmRleDtcblx0XHRcdFx0Ly8gb24gYSByaWdodCBwdWxsLCBjaGVjayBvbiBwcmV2aW91cyBpbmRleFxuXHRcdFx0XHQvLyB0byBkbyBzbywgc3VidHJhY3Qgd2lkdGggZnJvbSB2YWx1ZSBhbmQgc2V0IHBvc2l0aW9uID0gaW5kZXggKyAxXG5cdFx0XHRcdH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAncmlnaHQnICYmIGNvb3JkaW5hdGUgPiB2YWx1ZSAtIHdpZHRoIC0gcHVsbCAmJiBjb29yZGluYXRlIDwgdmFsdWUgLSB3aWR0aCArIHB1bGwpIHtcblx0XHRcdFx0XHRwb3NpdGlvbiA9IGluZGV4ICsgMTtcblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLm9wKGNvb3JkaW5hdGUsICc8JywgdmFsdWUpXG5cdFx0XHRcdFx0JiYgdGhpcy5vcChjb29yZGluYXRlLCAnPicsIGNvb3JkaW5hdGVzW2luZGV4ICsgMV0gIT09IHVuZGVmaW5lZCA/IGNvb3JkaW5hdGVzW2luZGV4ICsgMV0gOiB2YWx1ZSAtIHdpZHRoKSkge1xuXHRcdFx0XHRcdHBvc2l0aW9uID0gZGlyZWN0aW9uID09PSAnbGVmdCcgPyBpbmRleCArIDEgOiBpbmRleDtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcG9zaXRpb24gPT09IC0xO1xuXHRcdFx0fSwgdGhpcykpO1xuXHRcdH1cblxuXHRcdGlmICghdGhpcy5zZXR0aW5ncy5sb29wKSB7XG5cdFx0XHQvLyBub24gbG9vcCBib3VuZHJpZXNcblx0XHRcdGlmICh0aGlzLm9wKGNvb3JkaW5hdGUsICc+JywgY29vcmRpbmF0ZXNbdGhpcy5taW5pbXVtKCldKSkge1xuXHRcdFx0XHRwb3NpdGlvbiA9IGNvb3JkaW5hdGUgPSB0aGlzLm1pbmltdW0oKTtcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5vcChjb29yZGluYXRlLCAnPCcsIGNvb3JkaW5hdGVzW3RoaXMubWF4aW11bSgpXSkpIHtcblx0XHRcdFx0cG9zaXRpb24gPSBjb29yZGluYXRlID0gdGhpcy5tYXhpbXVtKCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHBvc2l0aW9uO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBBbmltYXRlcyB0aGUgc3RhZ2UuXG5cdCAqIEB0b2RvICMyNzBcblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge051bWJlcn0gY29vcmRpbmF0ZSAtIFRoZSBjb29yZGluYXRlIGluIHBpeGVscy5cblx0ICovXG5cdE93bC5wcm90b3R5cGUuYW5pbWF0ZSA9IGZ1bmN0aW9uKGNvb3JkaW5hdGUpIHtcblx0XHR2YXIgYW5pbWF0ZSA9IHRoaXMuc3BlZWQoKSA+IDA7XG5cblx0XHR0aGlzLmlzKCdhbmltYXRpbmcnKSAmJiB0aGlzLm9uVHJhbnNpdGlvbkVuZCgpO1xuXG5cdFx0aWYgKGFuaW1hdGUpIHtcblx0XHRcdHRoaXMuZW50ZXIoJ2FuaW1hdGluZycpO1xuXHRcdFx0dGhpcy50cmlnZ2VyKCd0cmFuc2xhdGUnKTtcblx0XHR9XG5cblx0XHRpZiAoJC5zdXBwb3J0LnRyYW5zZm9ybTNkICYmICQuc3VwcG9ydC50cmFuc2l0aW9uKSB7XG5cdFx0XHR0aGlzLiRzdGFnZS5jc3Moe1xuXHRcdFx0XHR0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgnICsgY29vcmRpbmF0ZSArICdweCwwcHgsMHB4KScsXG5cdFx0XHRcdHRyYW5zaXRpb246ICh0aGlzLnNwZWVkKCkgLyAxMDAwKSArICdzJyArIChcblx0XHRcdFx0XHR0aGlzLnNldHRpbmdzLnNsaWRlVHJhbnNpdGlvbiA/ICcgJyArIHRoaXMuc2V0dGluZ3Muc2xpZGVUcmFuc2l0aW9uIDogJydcblx0XHRcdFx0KVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIGlmIChhbmltYXRlKSB7XG5cdFx0XHR0aGlzLiRzdGFnZS5hbmltYXRlKHtcblx0XHRcdFx0bGVmdDogY29vcmRpbmF0ZSArICdweCdcblx0XHRcdH0sIHRoaXMuc3BlZWQoKSwgdGhpcy5zZXR0aW5ncy5mYWxsYmFja0Vhc2luZywgJC5wcm94eSh0aGlzLm9uVHJhbnNpdGlvbkVuZCwgdGhpcykpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLiRzdGFnZS5jc3Moe1xuXHRcdFx0XHRsZWZ0OiBjb29yZGluYXRlICsgJ3B4J1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBDaGVja3Mgd2hldGhlciB0aGUgY2Fyb3VzZWwgaXMgaW4gYSBzcGVjaWZpYyBzdGF0ZSBvciBub3QuXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBzdGF0ZSAtIFRoZSBzdGF0ZSB0byBjaGVjay5cblx0ICogQHJldHVybnMge0Jvb2xlYW59IC0gVGhlIGZsYWcgd2hpY2ggaW5kaWNhdGVzIGlmIHRoZSBjYXJvdXNlbCBpcyBidXN5LlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5pcyA9IGZ1bmN0aW9uKHN0YXRlKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3N0YXRlcy5jdXJyZW50W3N0YXRlXSAmJiB0aGlzLl9zdGF0ZXMuY3VycmVudFtzdGF0ZV0gPiAwO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXRzIHRoZSBhYnNvbHV0ZSBwb3NpdGlvbiBvZiB0aGUgY3VycmVudCBpdGVtLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbcG9zaXRpb25dIC0gVGhlIG5ldyBhYnNvbHV0ZSBwb3NpdGlvbiBvciBub3RoaW5nIHRvIGxlYXZlIGl0IHVuY2hhbmdlZC5cblx0ICogQHJldHVybnMge051bWJlcn0gLSBUaGUgYWJzb2x1dGUgcG9zaXRpb24gb2YgdGhlIGN1cnJlbnQgaXRlbS5cblx0ICovXG5cdE93bC5wcm90b3R5cGUuY3VycmVudCA9IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG5cdFx0aWYgKHBvc2l0aW9uID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLl9jdXJyZW50O1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLl9pdGVtcy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0cG9zaXRpb24gPSB0aGlzLm5vcm1hbGl6ZShwb3NpdGlvbik7XG5cblx0XHRpZiAodGhpcy5fY3VycmVudCAhPT0gcG9zaXRpb24pIHtcblx0XHRcdHZhciBldmVudCA9IHRoaXMudHJpZ2dlcignY2hhbmdlJywgeyBwcm9wZXJ0eTogeyBuYW1lOiAncG9zaXRpb24nLCB2YWx1ZTogcG9zaXRpb24gfSB9KTtcblxuXHRcdFx0aWYgKGV2ZW50LmRhdGEgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRwb3NpdGlvbiA9IHRoaXMubm9ybWFsaXplKGV2ZW50LmRhdGEpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl9jdXJyZW50ID0gcG9zaXRpb247XG5cblx0XHRcdHRoaXMuaW52YWxpZGF0ZSgncG9zaXRpb24nKTtcblxuXHRcdFx0dGhpcy50cmlnZ2VyKCdjaGFuZ2VkJywgeyBwcm9wZXJ0eTogeyBuYW1lOiAncG9zaXRpb24nLCB2YWx1ZTogdGhpcy5fY3VycmVudCB9IH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLl9jdXJyZW50O1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBJbnZhbGlkYXRlcyB0aGUgZ2l2ZW4gcGFydCBvZiB0aGUgdXBkYXRlIHJvdXRpbmUuXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBbcGFydF0gLSBUaGUgcGFydCB0byBpbnZhbGlkYXRlLlxuXHQgKiBAcmV0dXJucyB7QXJyYXkuPFN0cmluZz59IC0gVGhlIGludmFsaWRhdGVkIHBhcnRzLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5pbnZhbGlkYXRlID0gZnVuY3Rpb24ocGFydCkge1xuXHRcdGlmICgkLnR5cGUocGFydCkgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHR0aGlzLl9pbnZhbGlkYXRlZFtwYXJ0XSA9IHRydWU7XG5cdFx0XHR0aGlzLmlzKCd2YWxpZCcpICYmIHRoaXMubGVhdmUoJ3ZhbGlkJyk7XG5cdFx0fVxuXHRcdHJldHVybiAkLm1hcCh0aGlzLl9pbnZhbGlkYXRlZCwgZnVuY3Rpb24odiwgaSkgeyByZXR1cm4gaSB9KTtcblx0fTtcblxuXHQvKipcblx0ICogUmVzZXRzIHRoZSBhYnNvbHV0ZSBwb3NpdGlvbiBvZiB0aGUgY3VycmVudCBpdGVtLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBwb3NpdGlvbiAtIFRoZSBhYnNvbHV0ZSBwb3NpdGlvbiBvZiB0aGUgbmV3IGl0ZW0uXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcblx0XHRwb3NpdGlvbiA9IHRoaXMubm9ybWFsaXplKHBvc2l0aW9uKTtcblxuXHRcdGlmIChwb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5fc3BlZWQgPSAwO1xuXHRcdHRoaXMuX2N1cnJlbnQgPSBwb3NpdGlvbjtcblxuXHRcdHRoaXMuc3VwcHJlc3MoWyAndHJhbnNsYXRlJywgJ3RyYW5zbGF0ZWQnIF0pO1xuXG5cdFx0dGhpcy5hbmltYXRlKHRoaXMuY29vcmRpbmF0ZXMocG9zaXRpb24pKTtcblxuXHRcdHRoaXMucmVsZWFzZShbICd0cmFuc2xhdGUnLCAndHJhbnNsYXRlZCcgXSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIE5vcm1hbGl6ZXMgYW4gYWJzb2x1dGUgb3IgYSByZWxhdGl2ZSBwb3NpdGlvbiBvZiBhbiBpdGVtLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBwb3NpdGlvbiAtIFRoZSBhYnNvbHV0ZSBvciByZWxhdGl2ZSBwb3NpdGlvbiB0byBub3JtYWxpemUuXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gW3JlbGF0aXZlPWZhbHNlXSAtIFdoZXRoZXIgdGhlIGdpdmVuIHBvc2l0aW9uIGlzIHJlbGF0aXZlIG9yIG5vdC5cblx0ICogQHJldHVybnMge051bWJlcn0gLSBUaGUgbm9ybWFsaXplZCBwb3NpdGlvbi5cblx0ICovXG5cdE93bC5wcm90b3R5cGUubm9ybWFsaXplID0gZnVuY3Rpb24ocG9zaXRpb24sIHJlbGF0aXZlKSB7XG5cdFx0dmFyIG4gPSB0aGlzLl9pdGVtcy5sZW5ndGgsXG5cdFx0XHRtID0gcmVsYXRpdmUgPyAwIDogdGhpcy5fY2xvbmVzLmxlbmd0aDtcblxuXHRcdGlmICghdGhpcy5pc051bWVyaWMocG9zaXRpb24pIHx8IG4gPCAxKSB7XG5cdFx0XHRwb3NpdGlvbiA9IHVuZGVmaW5lZDtcblx0XHR9IGVsc2UgaWYgKHBvc2l0aW9uIDwgMCB8fCBwb3NpdGlvbiA+PSBuICsgbSkge1xuXHRcdFx0cG9zaXRpb24gPSAoKHBvc2l0aW9uIC0gbSAvIDIpICUgbiArIG4pICUgbiArIG0gLyAyO1xuXHRcdH1cblxuXHRcdHJldHVybiBwb3NpdGlvbjtcblx0fTtcblxuXHQvKipcblx0ICogQ29udmVydHMgYW4gYWJzb2x1dGUgcG9zaXRpb24gb2YgYW4gaXRlbSBpbnRvIGEgcmVsYXRpdmUgb25lLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBwb3NpdGlvbiAtIFRoZSBhYnNvbHV0ZSBwb3NpdGlvbiB0byBjb252ZXJ0LlxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfSAtIFRoZSBjb252ZXJ0ZWQgcG9zaXRpb24uXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnJlbGF0aXZlID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcblx0XHRwb3NpdGlvbiAtPSB0aGlzLl9jbG9uZXMubGVuZ3RoIC8gMjtcblx0XHRyZXR1cm4gdGhpcy5ub3JtYWxpemUocG9zaXRpb24sIHRydWUpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBHZXRzIHRoZSBtYXhpbXVtIHBvc2l0aW9uIGZvciB0aGUgY3VycmVudCBpdGVtLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gW3JlbGF0aXZlPWZhbHNlXSAtIFdoZXRoZXIgdG8gcmV0dXJuIGFuIGFic29sdXRlIHBvc2l0aW9uIG9yIGEgcmVsYXRpdmUgcG9zaXRpb24uXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9XG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLm1heGltdW0gPSBmdW5jdGlvbihyZWxhdGl2ZSkge1xuXHRcdHZhciBzZXR0aW5ncyA9IHRoaXMuc2V0dGluZ3MsXG5cdFx0XHRtYXhpbXVtID0gdGhpcy5fY29vcmRpbmF0ZXMubGVuZ3RoLFxuXHRcdFx0aXRlcmF0b3IsXG5cdFx0XHRyZWNpcHJvY2FsSXRlbXNXaWR0aCxcblx0XHRcdGVsZW1lbnRXaWR0aDtcblxuXHRcdGlmIChzZXR0aW5ncy5sb29wKSB7XG5cdFx0XHRtYXhpbXVtID0gdGhpcy5fY2xvbmVzLmxlbmd0aCAvIDIgKyB0aGlzLl9pdGVtcy5sZW5ndGggLSAxO1xuXHRcdH0gZWxzZSBpZiAoc2V0dGluZ3MuYXV0b1dpZHRoIHx8IHNldHRpbmdzLm1lcmdlKSB7XG5cdFx0XHRpdGVyYXRvciA9IHRoaXMuX2l0ZW1zLmxlbmd0aDtcblx0XHRcdGlmIChpdGVyYXRvcikge1xuXHRcdFx0XHRyZWNpcHJvY2FsSXRlbXNXaWR0aCA9IHRoaXMuX2l0ZW1zWy0taXRlcmF0b3JdLndpZHRoKCk7XG5cdFx0XHRcdGVsZW1lbnRXaWR0aCA9IHRoaXMuJGVsZW1lbnQud2lkdGgoKTtcblx0XHRcdFx0d2hpbGUgKGl0ZXJhdG9yLS0pIHtcblx0XHRcdFx0XHRyZWNpcHJvY2FsSXRlbXNXaWR0aCArPSB0aGlzLl9pdGVtc1tpdGVyYXRvcl0ud2lkdGgoKSArIHRoaXMuc2V0dGluZ3MubWFyZ2luO1xuXHRcdFx0XHRcdGlmIChyZWNpcHJvY2FsSXRlbXNXaWR0aCA+IGVsZW1lbnRXaWR0aCkge1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtYXhpbXVtID0gaXRlcmF0b3IgKyAxO1xuXHRcdH0gZWxzZSBpZiAoc2V0dGluZ3MuY2VudGVyKSB7XG5cdFx0XHRtYXhpbXVtID0gdGhpcy5faXRlbXMubGVuZ3RoIC0gMTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWF4aW11bSA9IHRoaXMuX2l0ZW1zLmxlbmd0aCAtIHNldHRpbmdzLml0ZW1zO1xuXHRcdH1cblxuXHRcdGlmIChyZWxhdGl2ZSkge1xuXHRcdFx0bWF4aW11bSAtPSB0aGlzLl9jbG9uZXMubGVuZ3RoIC8gMjtcblx0XHR9XG5cblx0XHRyZXR1cm4gTWF0aC5tYXgobWF4aW11bSwgMCk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEdldHMgdGhlIG1pbmltdW0gcG9zaXRpb24gZm9yIHRoZSBjdXJyZW50IGl0ZW0uXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtCb29sZWFufSBbcmVsYXRpdmU9ZmFsc2VdIC0gV2hldGhlciB0byByZXR1cm4gYW4gYWJzb2x1dGUgcG9zaXRpb24gb3IgYSByZWxhdGl2ZSBwb3NpdGlvbi5cblx0ICogQHJldHVybnMge051bWJlcn1cblx0ICovXG5cdE93bC5wcm90b3R5cGUubWluaW11bSA9IGZ1bmN0aW9uKHJlbGF0aXZlKSB7XG5cdFx0cmV0dXJuIHJlbGF0aXZlID8gMCA6IHRoaXMuX2Nsb25lcy5sZW5ndGggLyAyO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBHZXRzIGFuIGl0ZW0gYXQgdGhlIHNwZWNpZmllZCByZWxhdGl2ZSBwb3NpdGlvbi5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge051bWJlcn0gW3Bvc2l0aW9uXSAtIFRoZSByZWxhdGl2ZSBwb3NpdGlvbiBvZiB0aGUgaXRlbS5cblx0ICogQHJldHVybiB7alF1ZXJ5fEFycmF5LjxqUXVlcnk+fSAtIFRoZSBpdGVtIGF0IHRoZSBnaXZlbiBwb3NpdGlvbiBvciBhbGwgaXRlbXMgaWYgbm8gcG9zaXRpb24gd2FzIGdpdmVuLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5pdGVtcyA9IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG5cdFx0aWYgKHBvc2l0aW9uID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLl9pdGVtcy5zbGljZSgpO1xuXHRcdH1cblxuXHRcdHBvc2l0aW9uID0gdGhpcy5ub3JtYWxpemUocG9zaXRpb24sIHRydWUpO1xuXHRcdHJldHVybiB0aGlzLl9pdGVtc1twb3NpdGlvbl07XG5cdH07XG5cblx0LyoqXG5cdCAqIEdldHMgYW4gaXRlbSBhdCB0aGUgc3BlY2lmaWVkIHJlbGF0aXZlIHBvc2l0aW9uLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbcG9zaXRpb25dIC0gVGhlIHJlbGF0aXZlIHBvc2l0aW9uIG9mIHRoZSBpdGVtLlxuXHQgKiBAcmV0dXJuIHtqUXVlcnl8QXJyYXkuPGpRdWVyeT59IC0gVGhlIGl0ZW0gYXQgdGhlIGdpdmVuIHBvc2l0aW9uIG9yIGFsbCBpdGVtcyBpZiBubyBwb3NpdGlvbiB3YXMgZ2l2ZW4uXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLm1lcmdlcnMgPSBmdW5jdGlvbihwb3NpdGlvbikge1xuXHRcdGlmIChwb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fbWVyZ2Vycy5zbGljZSgpO1xuXHRcdH1cblxuXHRcdHBvc2l0aW9uID0gdGhpcy5ub3JtYWxpemUocG9zaXRpb24sIHRydWUpO1xuXHRcdHJldHVybiB0aGlzLl9tZXJnZXJzW3Bvc2l0aW9uXTtcblx0fTtcblxuXHQvKipcblx0ICogR2V0cyB0aGUgYWJzb2x1dGUgcG9zaXRpb25zIG9mIGNsb25lcyBmb3IgYW4gaXRlbS5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge051bWJlcn0gW3Bvc2l0aW9uXSAtIFRoZSByZWxhdGl2ZSBwb3NpdGlvbiBvZiB0aGUgaXRlbS5cblx0ICogQHJldHVybnMge0FycmF5LjxOdW1iZXI+fSAtIFRoZSBhYnNvbHV0ZSBwb3NpdGlvbnMgb2YgY2xvbmVzIGZvciB0aGUgaXRlbSBvciBhbGwgaWYgbm8gcG9zaXRpb24gd2FzIGdpdmVuLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5jbG9uZXMgPSBmdW5jdGlvbihwb3NpdGlvbikge1xuXHRcdHZhciBvZGQgPSB0aGlzLl9jbG9uZXMubGVuZ3RoIC8gMixcblx0XHRcdGV2ZW4gPSBvZGQgKyB0aGlzLl9pdGVtcy5sZW5ndGgsXG5cdFx0XHRtYXAgPSBmdW5jdGlvbihpbmRleCkgeyByZXR1cm4gaW5kZXggJSAyID09PSAwID8gZXZlbiArIGluZGV4IC8gMiA6IG9kZCAtIChpbmRleCArIDEpIC8gMiB9O1xuXG5cdFx0aWYgKHBvc2l0aW9uID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiAkLm1hcCh0aGlzLl9jbG9uZXMsIGZ1bmN0aW9uKHYsIGkpIHsgcmV0dXJuIG1hcChpKSB9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gJC5tYXAodGhpcy5fY2xvbmVzLCBmdW5jdGlvbih2LCBpKSB7IHJldHVybiB2ID09PSBwb3NpdGlvbiA/IG1hcChpKSA6IG51bGwgfSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNldHMgdGhlIGN1cnJlbnQgYW5pbWF0aW9uIHNwZWVkLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbc3BlZWRdIC0gVGhlIGFuaW1hdGlvbiBzcGVlZCBpbiBtaWxsaXNlY29uZHMgb3Igbm90aGluZyB0byBsZWF2ZSBpdCB1bmNoYW5nZWQuXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9IC0gVGhlIGN1cnJlbnQgYW5pbWF0aW9uIHNwZWVkIGluIG1pbGxpc2Vjb25kcy5cblx0ICovXG5cdE93bC5wcm90b3R5cGUuc3BlZWQgPSBmdW5jdGlvbihzcGVlZCkge1xuXHRcdGlmIChzcGVlZCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLl9zcGVlZCA9IHNwZWVkO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLl9zcGVlZDtcblx0fTtcblxuXHQvKipcblx0ICogR2V0cyB0aGUgY29vcmRpbmF0ZSBvZiBhbiBpdGVtLlxuXHQgKiBAdG9kbyBUaGUgbmFtZSBvZiB0aGlzIG1ldGhvZCBpcyBtaXNzbGVhbmRpbmcuXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHBvc2l0aW9uIC0gVGhlIGFic29sdXRlIHBvc2l0aW9uIG9mIHRoZSBpdGVtIHdpdGhpbiBgbWluaW11bSgpYCBhbmQgYG1heGltdW0oKWAuXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ8QXJyYXkuPE51bWJlcj59IC0gVGhlIGNvb3JkaW5hdGUgb2YgdGhlIGl0ZW0gaW4gcGl4ZWwgb3IgYWxsIGNvb3JkaW5hdGVzLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5jb29yZGluYXRlcyA9IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG5cdFx0dmFyIG11bHRpcGxpZXIgPSAxLFxuXHRcdFx0bmV3UG9zaXRpb24gPSBwb3NpdGlvbiAtIDEsXG5cdFx0XHRjb29yZGluYXRlO1xuXG5cdFx0aWYgKHBvc2l0aW9uID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiAkLm1hcCh0aGlzLl9jb29yZGluYXRlcywgJC5wcm94eShmdW5jdGlvbihjb29yZGluYXRlLCBpbmRleCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5jb29yZGluYXRlcyhpbmRleCk7XG5cdFx0XHR9LCB0aGlzKSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc2V0dGluZ3MuY2VudGVyKSB7XG5cdFx0XHRpZiAodGhpcy5zZXR0aW5ncy5ydGwpIHtcblx0XHRcdFx0bXVsdGlwbGllciA9IC0xO1xuXHRcdFx0XHRuZXdQb3NpdGlvbiA9IHBvc2l0aW9uICsgMTtcblx0XHRcdH1cblxuXHRcdFx0Y29vcmRpbmF0ZSA9IHRoaXMuX2Nvb3JkaW5hdGVzW3Bvc2l0aW9uXTtcblx0XHRcdGNvb3JkaW5hdGUgKz0gKHRoaXMud2lkdGgoKSAtIGNvb3JkaW5hdGUgKyAodGhpcy5fY29vcmRpbmF0ZXNbbmV3UG9zaXRpb25dIHx8IDApKSAvIDIgKiBtdWx0aXBsaWVyO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb29yZGluYXRlID0gdGhpcy5fY29vcmRpbmF0ZXNbbmV3UG9zaXRpb25dIHx8IDA7XG5cdFx0fVxuXG5cdFx0Y29vcmRpbmF0ZSA9IE1hdGguY2VpbChjb29yZGluYXRlKTtcblxuXHRcdHJldHVybiBjb29yZGluYXRlO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBDYWxjdWxhdGVzIHRoZSBzcGVlZCBmb3IgYSB0cmFuc2xhdGlvbi5cblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge051bWJlcn0gZnJvbSAtIFRoZSBhYnNvbHV0ZSBwb3NpdGlvbiBvZiB0aGUgc3RhcnQgaXRlbS5cblx0ICogQHBhcmFtIHtOdW1iZXJ9IHRvIC0gVGhlIGFic29sdXRlIHBvc2l0aW9uIG9mIHRoZSB0YXJnZXQgaXRlbS5cblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtmYWN0b3I9dW5kZWZpbmVkXSAtIFRoZSB0aW1lIGZhY3RvciBpbiBtaWxsaXNlY29uZHMuXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9IC0gVGhlIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGZvciB0aGUgdHJhbnNsYXRpb24uXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLmR1cmF0aW9uID0gZnVuY3Rpb24oZnJvbSwgdG8sIGZhY3Rvcikge1xuXHRcdGlmIChmYWN0b3IgPT09IDApIHtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblxuXHRcdHJldHVybiBNYXRoLm1pbihNYXRoLm1heChNYXRoLmFicyh0byAtIGZyb20pLCAxKSwgNikgKiBNYXRoLmFicygoZmFjdG9yIHx8IHRoaXMuc2V0dGluZ3Muc21hcnRTcGVlZCkpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTbGlkZXMgdG8gdGhlIHNwZWNpZmllZCBpdGVtLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBwb3NpdGlvbiAtIFRoZSBwb3NpdGlvbiBvZiB0aGUgaXRlbS5cblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtzcGVlZF0gLSBUaGUgdGltZSBpbiBtaWxsaXNlY29uZHMgZm9yIHRoZSB0cmFuc2l0aW9uLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS50byA9IGZ1bmN0aW9uKHBvc2l0aW9uLCBzcGVlZCkge1xuXHRcdHZhciBjdXJyZW50ID0gdGhpcy5jdXJyZW50KCksXG5cdFx0XHRyZXZlcnQgPSBudWxsLFxuXHRcdFx0ZGlzdGFuY2UgPSBwb3NpdGlvbiAtIHRoaXMucmVsYXRpdmUoY3VycmVudCksXG5cdFx0XHRkaXJlY3Rpb24gPSAoZGlzdGFuY2UgPiAwKSAtIChkaXN0YW5jZSA8IDApLFxuXHRcdFx0aXRlbXMgPSB0aGlzLl9pdGVtcy5sZW5ndGgsXG5cdFx0XHRtaW5pbXVtID0gdGhpcy5taW5pbXVtKCksXG5cdFx0XHRtYXhpbXVtID0gdGhpcy5tYXhpbXVtKCk7XG5cblx0XHRpZiAodGhpcy5zZXR0aW5ncy5sb29wKSB7XG5cdFx0XHRpZiAoIXRoaXMuc2V0dGluZ3MucmV3aW5kICYmIE1hdGguYWJzKGRpc3RhbmNlKSA+IGl0ZW1zIC8gMikge1xuXHRcdFx0XHRkaXN0YW5jZSArPSBkaXJlY3Rpb24gKiAtMSAqIGl0ZW1zO1xuXHRcdFx0fVxuXG5cdFx0XHRwb3NpdGlvbiA9IGN1cnJlbnQgKyBkaXN0YW5jZTtcblx0XHRcdHJldmVydCA9ICgocG9zaXRpb24gLSBtaW5pbXVtKSAlIGl0ZW1zICsgaXRlbXMpICUgaXRlbXMgKyBtaW5pbXVtO1xuXG5cdFx0XHRpZiAocmV2ZXJ0ICE9PSBwb3NpdGlvbiAmJiByZXZlcnQgLSBkaXN0YW5jZSA8PSBtYXhpbXVtICYmIHJldmVydCAtIGRpc3RhbmNlID4gMCkge1xuXHRcdFx0XHRjdXJyZW50ID0gcmV2ZXJ0IC0gZGlzdGFuY2U7XG5cdFx0XHRcdHBvc2l0aW9uID0gcmV2ZXJ0O1xuXHRcdFx0XHR0aGlzLnJlc2V0KGN1cnJlbnQpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAodGhpcy5zZXR0aW5ncy5yZXdpbmQpIHtcblx0XHRcdG1heGltdW0gKz0gMTtcblx0XHRcdHBvc2l0aW9uID0gKHBvc2l0aW9uICUgbWF4aW11bSArIG1heGltdW0pICUgbWF4aW11bTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cG9zaXRpb24gPSBNYXRoLm1heChtaW5pbXVtLCBNYXRoLm1pbihtYXhpbXVtLCBwb3NpdGlvbikpO1xuXHRcdH1cblxuXHRcdHRoaXMuc3BlZWQodGhpcy5kdXJhdGlvbihjdXJyZW50LCBwb3NpdGlvbiwgc3BlZWQpKTtcblx0XHR0aGlzLmN1cnJlbnQocG9zaXRpb24pO1xuXG5cdFx0aWYgKHRoaXMuaXNWaXNpYmxlKCkpIHtcblx0XHRcdHRoaXMudXBkYXRlKCk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBTbGlkZXMgdG8gdGhlIG5leHQgaXRlbS5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge051bWJlcn0gW3NwZWVkXSAtIFRoZSB0aW1lIGluIG1pbGxpc2Vjb25kcyBmb3IgdGhlIHRyYW5zaXRpb24uXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbihzcGVlZCkge1xuXHRcdHNwZWVkID0gc3BlZWQgfHwgZmFsc2U7XG5cdFx0dGhpcy50byh0aGlzLnJlbGF0aXZlKHRoaXMuY3VycmVudCgpKSArIDEsIHNwZWVkKTtcblx0fTtcblxuXHQvKipcblx0ICogU2xpZGVzIHRvIHRoZSBwcmV2aW91cyBpdGVtLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbc3BlZWRdIC0gVGhlIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGZvciB0aGUgdHJhbnNpdGlvbi5cblx0ICovXG5cdE93bC5wcm90b3R5cGUucHJldiA9IGZ1bmN0aW9uKHNwZWVkKSB7XG5cdFx0c3BlZWQgPSBzcGVlZCB8fCBmYWxzZTtcblx0XHR0aGlzLnRvKHRoaXMucmVsYXRpdmUodGhpcy5jdXJyZW50KCkpIC0gMSwgc3BlZWQpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIHRoZSBlbmQgb2YgYW4gYW5pbWF0aW9uLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gVGhlIGV2ZW50IGFyZ3VtZW50cy5cblx0ICovXG5cdE93bC5wcm90b3R5cGUub25UcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuXHRcdC8vIGlmIGNzczIgYW5pbWF0aW9uIHRoZW4gZXZlbnQgb2JqZWN0IGlzIHVuZGVmaW5lZFxuXHRcdGlmIChldmVudCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdFx0Ly8gQ2F0Y2ggb25seSBvd2wtc3RhZ2UgdHJhbnNpdGlvbkVuZCBldmVudFxuXHRcdFx0aWYgKChldmVudC50YXJnZXQgfHwgZXZlbnQuc3JjRWxlbWVudCB8fCBldmVudC5vcmlnaW5hbFRhcmdldCkgIT09IHRoaXMuJHN0YWdlLmdldCgwKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5sZWF2ZSgnYW5pbWF0aW5nJyk7XG5cdFx0dGhpcy50cmlnZ2VyKCd0cmFuc2xhdGVkJyk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEdldHMgdmlld3BvcnQgd2lkdGguXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHJldHVybiB7TnVtYmVyfSAtIFRoZSB3aWR0aCBpbiBwaXhlbC5cblx0ICovXG5cdE93bC5wcm90b3R5cGUudmlld3BvcnQgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgd2lkdGg7XG5cdFx0aWYgKHRoaXMub3B0aW9ucy5yZXNwb25zaXZlQmFzZUVsZW1lbnQgIT09IHdpbmRvdykge1xuXHRcdFx0d2lkdGggPSAkKHRoaXMub3B0aW9ucy5yZXNwb25zaXZlQmFzZUVsZW1lbnQpLndpZHRoKCk7XG5cdFx0fSBlbHNlIGlmICh3aW5kb3cuaW5uZXJXaWR0aCkge1xuXHRcdFx0d2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblx0XHR9IGVsc2UgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpIHtcblx0XHRcdHdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLndhcm4oJ0NhbiBub3QgZGV0ZWN0IHZpZXdwb3J0IHdpZHRoLicpO1xuXHRcdH1cblx0XHRyZXR1cm4gd2lkdGg7XG5cdH07XG5cblx0LyoqXG5cdCAqIFJlcGxhY2VzIHRoZSBjdXJyZW50IGNvbnRlbnQuXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudHxqUXVlcnl8U3RyaW5nfSBjb250ZW50IC0gVGhlIG5ldyBjb250ZW50LlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24oY29udGVudCkge1xuXHRcdHRoaXMuJHN0YWdlLmVtcHR5KCk7XG5cdFx0dGhpcy5faXRlbXMgPSBbXTtcblxuXHRcdGlmIChjb250ZW50KSB7XG5cdFx0XHRjb250ZW50ID0gKGNvbnRlbnQgaW5zdGFuY2VvZiBqUXVlcnkpID8gY29udGVudCA6ICQoY29udGVudCk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc2V0dGluZ3MubmVzdGVkSXRlbVNlbGVjdG9yKSB7XG5cdFx0XHRjb250ZW50ID0gY29udGVudC5maW5kKCcuJyArIHRoaXMuc2V0dGluZ3MubmVzdGVkSXRlbVNlbGVjdG9yKTtcblx0XHR9XG5cblx0XHRjb250ZW50LmZpbHRlcihmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiB0aGlzLm5vZGVUeXBlID09PSAxO1xuXHRcdH0pLmVhY2goJC5wcm94eShmdW5jdGlvbihpbmRleCwgaXRlbSkge1xuXHRcdFx0aXRlbSA9IHRoaXMucHJlcGFyZShpdGVtKTtcblx0XHRcdHRoaXMuJHN0YWdlLmFwcGVuZChpdGVtKTtcblx0XHRcdHRoaXMuX2l0ZW1zLnB1c2goaXRlbSk7XG5cdFx0XHR0aGlzLl9tZXJnZXJzLnB1c2goaXRlbS5maW5kKCdbZGF0YS1tZXJnZV0nKS5hZGRCYWNrKCdbZGF0YS1tZXJnZV0nKS5hdHRyKCdkYXRhLW1lcmdlJykgKiAxIHx8IDEpO1xuXHRcdH0sIHRoaXMpKTtcblxuXHRcdHRoaXMucmVzZXQodGhpcy5pc051bWVyaWModGhpcy5zZXR0aW5ncy5zdGFydFBvc2l0aW9uKSA/IHRoaXMuc2V0dGluZ3Muc3RhcnRQb3NpdGlvbiA6IDApO1xuXG5cdFx0dGhpcy5pbnZhbGlkYXRlKCdpdGVtcycpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBBZGRzIGFuIGl0ZW0uXG5cdCAqIEB0b2RvIFVzZSBgaXRlbWAgaW5zdGVhZCBvZiBgY29udGVudGAgZm9yIHRoZSBldmVudCBhcmd1bWVudHMuXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudHxqUXVlcnl8U3RyaW5nfSBjb250ZW50IC0gVGhlIGl0ZW0gY29udGVudCB0byBhZGQuXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbcG9zaXRpb25dIC0gVGhlIHJlbGF0aXZlIHBvc2l0aW9uIGF0IHdoaWNoIHRvIGluc2VydCB0aGUgaXRlbSBvdGhlcndpc2UgdGhlIGl0ZW0gd2lsbCBiZSBhZGRlZCB0byB0aGUgZW5kLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihjb250ZW50LCBwb3NpdGlvbikge1xuXHRcdHZhciBjdXJyZW50ID0gdGhpcy5yZWxhdGl2ZSh0aGlzLl9jdXJyZW50KTtcblxuXHRcdHBvc2l0aW9uID0gcG9zaXRpb24gPT09IHVuZGVmaW5lZCA/IHRoaXMuX2l0ZW1zLmxlbmd0aCA6IHRoaXMubm9ybWFsaXplKHBvc2l0aW9uLCB0cnVlKTtcblx0XHRjb250ZW50ID0gY29udGVudCBpbnN0YW5jZW9mIGpRdWVyeSA/IGNvbnRlbnQgOiAkKGNvbnRlbnQpO1xuXG5cdFx0dGhpcy50cmlnZ2VyKCdhZGQnLCB7IGNvbnRlbnQ6IGNvbnRlbnQsIHBvc2l0aW9uOiBwb3NpdGlvbiB9KTtcblxuXHRcdGNvbnRlbnQgPSB0aGlzLnByZXBhcmUoY29udGVudCk7XG5cblx0XHRpZiAodGhpcy5faXRlbXMubGVuZ3RoID09PSAwIHx8IHBvc2l0aW9uID09PSB0aGlzLl9pdGVtcy5sZW5ndGgpIHtcblx0XHRcdHRoaXMuX2l0ZW1zLmxlbmd0aCA9PT0gMCAmJiB0aGlzLiRzdGFnZS5hcHBlbmQoY29udGVudCk7XG5cdFx0XHR0aGlzLl9pdGVtcy5sZW5ndGggIT09IDAgJiYgdGhpcy5faXRlbXNbcG9zaXRpb24gLSAxXS5hZnRlcihjb250ZW50KTtcblx0XHRcdHRoaXMuX2l0ZW1zLnB1c2goY29udGVudCk7XG5cdFx0XHR0aGlzLl9tZXJnZXJzLnB1c2goY29udGVudC5maW5kKCdbZGF0YS1tZXJnZV0nKS5hZGRCYWNrKCdbZGF0YS1tZXJnZV0nKS5hdHRyKCdkYXRhLW1lcmdlJykgKiAxIHx8IDEpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl9pdGVtc1twb3NpdGlvbl0uYmVmb3JlKGNvbnRlbnQpO1xuXHRcdFx0dGhpcy5faXRlbXMuc3BsaWNlKHBvc2l0aW9uLCAwLCBjb250ZW50KTtcblx0XHRcdHRoaXMuX21lcmdlcnMuc3BsaWNlKHBvc2l0aW9uLCAwLCBjb250ZW50LmZpbmQoJ1tkYXRhLW1lcmdlXScpLmFkZEJhY2soJ1tkYXRhLW1lcmdlXScpLmF0dHIoJ2RhdGEtbWVyZ2UnKSAqIDEgfHwgMSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5faXRlbXNbY3VycmVudF0gJiYgdGhpcy5yZXNldCh0aGlzLl9pdGVtc1tjdXJyZW50XS5pbmRleCgpKTtcblxuXHRcdHRoaXMuaW52YWxpZGF0ZSgnaXRlbXMnKTtcblxuXHRcdHRoaXMudHJpZ2dlcignYWRkZWQnLCB7IGNvbnRlbnQ6IGNvbnRlbnQsIHBvc2l0aW9uOiBwb3NpdGlvbiB9KTtcblx0fTtcblxuXHQvKipcblx0ICogUmVtb3ZlcyBhbiBpdGVtIGJ5IGl0cyBwb3NpdGlvbi5cblx0ICogQHRvZG8gVXNlIGBpdGVtYCBpbnN0ZWFkIG9mIGBjb250ZW50YCBmb3IgdGhlIGV2ZW50IGFyZ3VtZW50cy5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge051bWJlcn0gcG9zaXRpb24gLSBUaGUgcmVsYXRpdmUgcG9zaXRpb24gb2YgdGhlIGl0ZW0gdG8gcmVtb3ZlLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihwb3NpdGlvbikge1xuXHRcdHBvc2l0aW9uID0gdGhpcy5ub3JtYWxpemUocG9zaXRpb24sIHRydWUpO1xuXG5cdFx0aWYgKHBvc2l0aW9uID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLnRyaWdnZXIoJ3JlbW92ZScsIHsgY29udGVudDogdGhpcy5faXRlbXNbcG9zaXRpb25dLCBwb3NpdGlvbjogcG9zaXRpb24gfSk7XG5cblx0XHR0aGlzLl9pdGVtc1twb3NpdGlvbl0ucmVtb3ZlKCk7XG5cdFx0dGhpcy5faXRlbXMuc3BsaWNlKHBvc2l0aW9uLCAxKTtcblx0XHR0aGlzLl9tZXJnZXJzLnNwbGljZShwb3NpdGlvbiwgMSk7XG5cblx0XHR0aGlzLmludmFsaWRhdGUoJ2l0ZW1zJyk7XG5cblx0XHR0aGlzLnRyaWdnZXIoJ3JlbW92ZWQnLCB7IGNvbnRlbnQ6IG51bGwsIHBvc2l0aW9uOiBwb3NpdGlvbiB9KTtcblx0fTtcblxuXHQvKipcblx0ICogUHJlbG9hZHMgaW1hZ2VzIHdpdGggYXV0byB3aWR0aC5cblx0ICogQHRvZG8gUmVwbGFjZSBieSBhIG1vcmUgZ2VuZXJpYyBhcHByb2FjaFxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnByZWxvYWRBdXRvV2lkdGhJbWFnZXMgPSBmdW5jdGlvbihpbWFnZXMpIHtcblx0XHRpbWFnZXMuZWFjaCgkLnByb3h5KGZ1bmN0aW9uKGksIGVsZW1lbnQpIHtcblx0XHRcdHRoaXMuZW50ZXIoJ3ByZS1sb2FkaW5nJyk7XG5cdFx0XHRlbGVtZW50ID0gJChlbGVtZW50KTtcblx0XHRcdCQobmV3IEltYWdlKCkpLm9uZSgnbG9hZCcsICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRlbGVtZW50LmF0dHIoJ3NyYycsIGUudGFyZ2V0LnNyYyk7XG5cdFx0XHRcdGVsZW1lbnQuY3NzKCdvcGFjaXR5JywgMSk7XG5cdFx0XHRcdHRoaXMubGVhdmUoJ3ByZS1sb2FkaW5nJyk7XG5cdFx0XHRcdCF0aGlzLmlzKCdwcmUtbG9hZGluZycpICYmICF0aGlzLmlzKCdpbml0aWFsaXppbmcnKSAmJiB0aGlzLnJlZnJlc2goKTtcblx0XHRcdH0sIHRoaXMpKS5hdHRyKCdzcmMnLCBlbGVtZW50LmF0dHIoJ3NyYycpIHx8IGVsZW1lbnQuYXR0cignZGF0YS1zcmMnKSB8fCBlbGVtZW50LmF0dHIoJ2RhdGEtc3JjLXJldGluYScpKTtcblx0XHR9LCB0aGlzKSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIERlc3Ryb3lzIHRoZSBjYXJvdXNlbC5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG5cblx0XHR0aGlzLiRlbGVtZW50Lm9mZignLm93bC5jb3JlJyk7XG5cdFx0dGhpcy4kc3RhZ2Uub2ZmKCcub3dsLmNvcmUnKTtcblx0XHQkKGRvY3VtZW50KS5vZmYoJy5vd2wuY29yZScpO1xuXG5cdFx0aWYgKHRoaXMuc2V0dGluZ3MucmVzcG9uc2l2ZSAhPT0gZmFsc2UpIHtcblx0XHRcdHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5yZXNpemVUaW1lcik7XG5cdFx0XHR0aGlzLm9mZih3aW5kb3csICdyZXNpemUnLCB0aGlzLl9oYW5kbGVycy5vblRocm90dGxlZFJlc2l6ZSk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSBpbiB0aGlzLl9wbHVnaW5zKSB7XG5cdFx0XHR0aGlzLl9wbHVnaW5zW2ldLmRlc3Ryb3koKTtcblx0XHR9XG5cblx0XHR0aGlzLiRzdGFnZS5jaGlsZHJlbignLmNsb25lZCcpLnJlbW92ZSgpO1xuXG5cdFx0dGhpcy4kc3RhZ2UudW53cmFwKCk7XG5cdFx0dGhpcy4kc3RhZ2UuY2hpbGRyZW4oKS5jb250ZW50cygpLnVud3JhcCgpO1xuXHRcdHRoaXMuJHN0YWdlLmNoaWxkcmVuKCkudW53cmFwKCk7XG5cdFx0dGhpcy4kc3RhZ2UucmVtb3ZlKCk7XG5cdFx0dGhpcy4kZWxlbWVudFxuXHRcdFx0LnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5yZWZyZXNoQ2xhc3MpXG5cdFx0XHQucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmxvYWRpbmdDbGFzcylcblx0XHRcdC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMubG9hZGVkQ2xhc3MpXG5cdFx0XHQucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLnJ0bENsYXNzKVxuXHRcdFx0LnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5kcmFnQ2xhc3MpXG5cdFx0XHQucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmdyYWJDbGFzcylcblx0XHRcdC5hdHRyKCdjbGFzcycsIHRoaXMuJGVsZW1lbnQuYXR0cignY2xhc3MnKS5yZXBsYWNlKG5ldyBSZWdFeHAodGhpcy5vcHRpb25zLnJlc3BvbnNpdmVDbGFzcyArICctXFxcXFMrXFxcXHMnLCAnZycpLCAnJykpXG5cdFx0XHQucmVtb3ZlRGF0YSgnb3dsLmNhcm91c2VsJyk7XG5cdH07XG5cblx0LyoqXG5cdCAqIE9wZXJhdG9ycyB0byBjYWxjdWxhdGUgcmlnaHQtdG8tbGVmdCBhbmQgbGVmdC10by1yaWdodC5cblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge051bWJlcn0gW2FdIC0gVGhlIGxlZnQgc2lkZSBvcGVyYW5kLlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gW29dIC0gVGhlIG9wZXJhdG9yLlxuXHQgKiBAcGFyYW0ge051bWJlcn0gW2JdIC0gVGhlIHJpZ2h0IHNpZGUgb3BlcmFuZC5cblx0ICovXG5cdE93bC5wcm90b3R5cGUub3AgPSBmdW5jdGlvbihhLCBvLCBiKSB7XG5cdFx0dmFyIHJ0bCA9IHRoaXMuc2V0dGluZ3MucnRsO1xuXHRcdHN3aXRjaCAobykge1xuXHRcdFx0Y2FzZSAnPCc6XG5cdFx0XHRcdHJldHVybiBydGwgPyBhID4gYiA6IGEgPCBiO1xuXHRcdFx0Y2FzZSAnPic6XG5cdFx0XHRcdHJldHVybiBydGwgPyBhIDwgYiA6IGEgPiBiO1xuXHRcdFx0Y2FzZSAnPj0nOlxuXHRcdFx0XHRyZXR1cm4gcnRsID8gYSA8PSBiIDogYSA+PSBiO1xuXHRcdFx0Y2FzZSAnPD0nOlxuXHRcdFx0XHRyZXR1cm4gcnRsID8gYSA+PSBiIDogYSA8PSBiO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBBdHRhY2hlcyB0byBhbiBpbnRlcm5hbCBldmVudC5cblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gVGhlIGV2ZW50IHNvdXJjZS5cblx0ICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50IC0gVGhlIGV2ZW50IG5hbWUuXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIC0gVGhlIGV2ZW50IGhhbmRsZXIgdG8gYXR0YWNoLlxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IGNhcHR1cmUgLSBXZXRoZXIgdGhlIGV2ZW50IHNob3VsZCBiZSBoYW5kbGVkIGF0IHRoZSBjYXB0dXJpbmcgcGhhc2Ugb3Igbm90LlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKGVsZW1lbnQsIGV2ZW50LCBsaXN0ZW5lciwgY2FwdHVyZSkge1xuXHRcdGlmIChlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIpIHtcblx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIsIGNhcHR1cmUpO1xuXHRcdH0gZWxzZSBpZiAoZWxlbWVudC5hdHRhY2hFdmVudCkge1xuXHRcdFx0ZWxlbWVudC5hdHRhY2hFdmVudCgnb24nICsgZXZlbnQsIGxpc3RlbmVyKTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIERldGFjaGVzIGZyb20gYW4gaW50ZXJuYWwgZXZlbnQuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIFRoZSBldmVudCBzb3VyY2UuXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCAtIFRoZSBldmVudCBuYW1lLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciAtIFRoZSBhdHRhY2hlZCBldmVudCBoYW5kbGVyIHRvIGRldGFjaC5cblx0ICogQHBhcmFtIHtCb29sZWFufSBjYXB0dXJlIC0gV2V0aGVyIHRoZSBhdHRhY2hlZCBldmVudCBoYW5kbGVyIHdhcyByZWdpc3RlcmVkIGFzIGEgY2FwdHVyaW5nIGxpc3RlbmVyIG9yIG5vdC5cblx0ICovXG5cdE93bC5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24oZWxlbWVudCwgZXZlbnQsIGxpc3RlbmVyLCBjYXB0dXJlKSB7XG5cdFx0aWYgKGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lciwgY2FwdHVyZSk7XG5cdFx0fSBlbHNlIGlmIChlbGVtZW50LmRldGFjaEV2ZW50KSB7XG5cdFx0XHRlbGVtZW50LmRldGFjaEV2ZW50KCdvbicgKyBldmVudCwgbGlzdGVuZXIpO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogVHJpZ2dlcnMgYSBwdWJsaWMgZXZlbnQuXG5cdCAqIEB0b2RvIFJlbW92ZSBgc3RhdHVzYCwgYHJlbGF0ZWRUYXJnZXRgIHNob3VsZCBiZSB1c2VkIGluc3RlYWQuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgLSBUaGUgZXZlbnQgbmFtZS5cblx0ICogQHBhcmFtIHsqfSBbZGF0YT1udWxsXSAtIFRoZSBldmVudCBkYXRhLlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gW25hbWVzcGFjZT1jYXJvdXNlbF0gLSBUaGUgZXZlbnQgbmFtZXNwYWNlLlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gW3N0YXRlXSAtIFRoZSBzdGF0ZSB3aGljaCBpcyBhc3NvY2lhdGVkIHdpdGggdGhlIGV2ZW50LlxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IFtlbnRlcj1mYWxzZV0gLSBJbmRpY2F0ZXMgaWYgdGhlIGNhbGwgZW50ZXJzIHRoZSBzcGVjaWZpZWQgc3RhdGUgb3Igbm90LlxuXHQgKiBAcmV0dXJucyB7RXZlbnR9IC0gVGhlIGV2ZW50IGFyZ3VtZW50cy5cblx0ICovXG5cdE93bC5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uKG5hbWUsIGRhdGEsIG5hbWVzcGFjZSwgc3RhdGUsIGVudGVyKSB7XG5cdFx0dmFyIHN0YXR1cyA9IHtcblx0XHRcdGl0ZW06IHsgY291bnQ6IHRoaXMuX2l0ZW1zLmxlbmd0aCwgaW5kZXg6IHRoaXMuY3VycmVudCgpIH1cblx0XHR9LCBoYW5kbGVyID0gJC5jYW1lbENhc2UoXG5cdFx0XHQkLmdyZXAoWyAnb24nLCBuYW1lLCBuYW1lc3BhY2UgXSwgZnVuY3Rpb24odikgeyByZXR1cm4gdiB9KVxuXHRcdFx0XHQuam9pbignLScpLnRvTG93ZXJDYXNlKClcblx0XHQpLCBldmVudCA9ICQuRXZlbnQoXG5cdFx0XHRbIG5hbWUsICdvd2wnLCBuYW1lc3BhY2UgfHwgJ2Nhcm91c2VsJyBdLmpvaW4oJy4nKS50b0xvd2VyQ2FzZSgpLFxuXHRcdFx0JC5leHRlbmQoeyByZWxhdGVkVGFyZ2V0OiB0aGlzIH0sIHN0YXR1cywgZGF0YSlcblx0XHQpO1xuXG5cdFx0aWYgKCF0aGlzLl9zdXByZXNzW25hbWVdKSB7XG5cdFx0XHQkLmVhY2godGhpcy5fcGx1Z2lucywgZnVuY3Rpb24obmFtZSwgcGx1Z2luKSB7XG5cdFx0XHRcdGlmIChwbHVnaW4ub25UcmlnZ2VyKSB7XG5cdFx0XHRcdFx0cGx1Z2luLm9uVHJpZ2dlcihldmVudCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLnJlZ2lzdGVyKHsgdHlwZTogT3dsLlR5cGUuRXZlbnQsIG5hbWU6IG5hbWUgfSk7XG5cdFx0XHR0aGlzLiRlbGVtZW50LnRyaWdnZXIoZXZlbnQpO1xuXG5cdFx0XHRpZiAodGhpcy5zZXR0aW5ncyAmJiB0eXBlb2YgdGhpcy5zZXR0aW5nc1toYW5kbGVyXSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHR0aGlzLnNldHRpbmdzW2hhbmRsZXJdLmNhbGwodGhpcywgZXZlbnQpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBldmVudDtcblx0fTtcblxuXHQvKipcblx0ICogRW50ZXJzIGEgc3RhdGUuXG5cdCAqIEBwYXJhbSBuYW1lIC0gVGhlIHN0YXRlIG5hbWUuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLmVudGVyID0gZnVuY3Rpb24obmFtZSkge1xuXHRcdCQuZWFjaChbIG5hbWUgXS5jb25jYXQodGhpcy5fc3RhdGVzLnRhZ3NbbmFtZV0gfHwgW10pLCAkLnByb3h5KGZ1bmN0aW9uKGksIG5hbWUpIHtcblx0XHRcdGlmICh0aGlzLl9zdGF0ZXMuY3VycmVudFtuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMuX3N0YXRlcy5jdXJyZW50W25hbWVdID0gMDtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fc3RhdGVzLmN1cnJlbnRbbmFtZV0rKztcblx0XHR9LCB0aGlzKSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIExlYXZlcyBhIHN0YXRlLlxuXHQgKiBAcGFyYW0gbmFtZSAtIFRoZSBzdGF0ZSBuYW1lLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5sZWF2ZSA9IGZ1bmN0aW9uKG5hbWUpIHtcblx0XHQkLmVhY2goWyBuYW1lIF0uY29uY2F0KHRoaXMuX3N0YXRlcy50YWdzW25hbWVdIHx8IFtdKSwgJC5wcm94eShmdW5jdGlvbihpLCBuYW1lKSB7XG5cdFx0XHR0aGlzLl9zdGF0ZXMuY3VycmVudFtuYW1lXS0tO1xuXHRcdH0sIHRoaXMpKTtcblx0fTtcblxuXHQvKipcblx0ICogUmVnaXN0ZXJzIGFuIGV2ZW50IG9yIHN0YXRlLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgLSBUaGUgZXZlbnQgb3Igc3RhdGUgdG8gcmVnaXN0ZXIuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnJlZ2lzdGVyID0gZnVuY3Rpb24ob2JqZWN0KSB7XG5cdFx0aWYgKG9iamVjdC50eXBlID09PSBPd2wuVHlwZS5FdmVudCkge1xuXHRcdFx0aWYgKCEkLmV2ZW50LnNwZWNpYWxbb2JqZWN0Lm5hbWVdKSB7XG5cdFx0XHRcdCQuZXZlbnQuc3BlY2lhbFtvYmplY3QubmFtZV0gPSB7fTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCEkLmV2ZW50LnNwZWNpYWxbb2JqZWN0Lm5hbWVdLm93bCkge1xuXHRcdFx0XHR2YXIgX2RlZmF1bHQgPSAkLmV2ZW50LnNwZWNpYWxbb2JqZWN0Lm5hbWVdLl9kZWZhdWx0O1xuXHRcdFx0XHQkLmV2ZW50LnNwZWNpYWxbb2JqZWN0Lm5hbWVdLl9kZWZhdWx0ID0gZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdGlmIChfZGVmYXVsdCAmJiBfZGVmYXVsdC5hcHBseSAmJiAoIWUubmFtZXNwYWNlIHx8IGUubmFtZXNwYWNlLmluZGV4T2YoJ293bCcpID09PSAtMSkpIHtcblx0XHRcdFx0XHRcdHJldHVybiBfZGVmYXVsdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gZS5uYW1lc3BhY2UgJiYgZS5uYW1lc3BhY2UuaW5kZXhPZignb3dsJykgPiAtMTtcblx0XHRcdFx0fTtcblx0XHRcdFx0JC5ldmVudC5zcGVjaWFsW29iamVjdC5uYW1lXS5vd2wgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAob2JqZWN0LnR5cGUgPT09IE93bC5UeXBlLlN0YXRlKSB7XG5cdFx0XHRpZiAoIXRoaXMuX3N0YXRlcy50YWdzW29iamVjdC5uYW1lXSkge1xuXHRcdFx0XHR0aGlzLl9zdGF0ZXMudGFnc1tvYmplY3QubmFtZV0gPSBvYmplY3QudGFncztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuX3N0YXRlcy50YWdzW29iamVjdC5uYW1lXSA9IHRoaXMuX3N0YXRlcy50YWdzW29iamVjdC5uYW1lXS5jb25jYXQob2JqZWN0LnRhZ3MpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl9zdGF0ZXMudGFnc1tvYmplY3QubmFtZV0gPSAkLmdyZXAodGhpcy5fc3RhdGVzLnRhZ3Nbb2JqZWN0Lm5hbWVdLCAkLnByb3h5KGZ1bmN0aW9uKHRhZywgaSkge1xuXHRcdFx0XHRyZXR1cm4gJC5pbkFycmF5KHRhZywgdGhpcy5fc3RhdGVzLnRhZ3Nbb2JqZWN0Lm5hbWVdKSA9PT0gaTtcblx0XHRcdH0sIHRoaXMpKTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIFN1cHByZXNzZXMgZXZlbnRzLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7QXJyYXkuPFN0cmluZz59IGV2ZW50cyAtIFRoZSBldmVudHMgdG8gc3VwcHJlc3MuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnN1cHByZXNzID0gZnVuY3Rpb24oZXZlbnRzKSB7XG5cdFx0JC5lYWNoKGV2ZW50cywgJC5wcm94eShmdW5jdGlvbihpbmRleCwgZXZlbnQpIHtcblx0XHRcdHRoaXMuX3N1cHJlc3NbZXZlbnRdID0gdHJ1ZTtcblx0XHR9LCB0aGlzKSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFJlbGVhc2VzIHN1cHByZXNzZWQgZXZlbnRzLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7QXJyYXkuPFN0cmluZz59IGV2ZW50cyAtIFRoZSBldmVudHMgdG8gcmVsZWFzZS5cblx0ICovXG5cdE93bC5wcm90b3R5cGUucmVsZWFzZSA9IGZ1bmN0aW9uKGV2ZW50cykge1xuXHRcdCQuZWFjaChldmVudHMsICQucHJveHkoZnVuY3Rpb24oaW5kZXgsIGV2ZW50KSB7XG5cdFx0XHRkZWxldGUgdGhpcy5fc3VwcmVzc1tldmVudF07XG5cdFx0fSwgdGhpcykpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBHZXRzIHVuaWZpZWQgcG9pbnRlciBjb29yZGluYXRlcyBmcm9tIGV2ZW50LlxuXHQgKiBAdG9kbyAjMjYxXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtFdmVudH0gLSBUaGUgYG1vdXNlZG93bmAgb3IgYHRvdWNoc3RhcnRgIGV2ZW50LlxuXHQgKiBAcmV0dXJucyB7T2JqZWN0fSAtIENvbnRhaW5zIGB4YCBhbmQgYHlgIGNvb3JkaW5hdGVzIG9mIGN1cnJlbnQgcG9pbnRlciBwb3NpdGlvbi5cblx0ICovXG5cdE93bC5wcm90b3R5cGUucG9pbnRlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0dmFyIHJlc3VsdCA9IHsgeDogbnVsbCwgeTogbnVsbCB9O1xuXG5cdFx0ZXZlbnQgPSBldmVudC5vcmlnaW5hbEV2ZW50IHx8IGV2ZW50IHx8IHdpbmRvdy5ldmVudDtcblxuXHRcdGV2ZW50ID0gZXZlbnQudG91Y2hlcyAmJiBldmVudC50b3VjaGVzLmxlbmd0aCA/XG5cdFx0XHRldmVudC50b3VjaGVzWzBdIDogZXZlbnQuY2hhbmdlZFRvdWNoZXMgJiYgZXZlbnQuY2hhbmdlZFRvdWNoZXMubGVuZ3RoID9cblx0XHRcdFx0ZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0gOiBldmVudDtcblxuXHRcdGlmIChldmVudC5wYWdlWCkge1xuXHRcdFx0cmVzdWx0LnggPSBldmVudC5wYWdlWDtcblx0XHRcdHJlc3VsdC55ID0gZXZlbnQucGFnZVk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlc3VsdC54ID0gZXZlbnQuY2xpZW50WDtcblx0XHRcdHJlc3VsdC55ID0gZXZlbnQuY2xpZW50WTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBEZXRlcm1pbmVzIGlmIHRoZSBpbnB1dCBpcyBhIE51bWJlciBvciBzb21ldGhpbmcgdGhhdCBjYW4gYmUgY29lcmNlZCB0byBhIE51bWJlclxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ3xPYmplY3R8QXJyYXl8Qm9vbGVhbnxSZWdFeHB8RnVuY3Rpb258U3ltYm9sfSAtIFRoZSBpbnB1dCB0byBiZSB0ZXN0ZWRcblx0ICogQHJldHVybnMge0Jvb2xlYW59IC0gQW4gaW5kaWNhdGlvbiBpZiB0aGUgaW5wdXQgaXMgYSBOdW1iZXIgb3IgY2FuIGJlIGNvZXJjZWQgdG8gYSBOdW1iZXJcblx0ICovXG5cdE93bC5wcm90b3R5cGUuaXNOdW1lcmljID0gZnVuY3Rpb24obnVtYmVyKSB7XG5cdFx0cmV0dXJuICFpc05hTihwYXJzZUZsb2F0KG51bWJlcikpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBHZXRzIHRoZSBkaWZmZXJlbmNlIG9mIHR3byB2ZWN0b3JzLlxuXHQgKiBAdG9kbyAjMjYxXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtPYmplY3R9IC0gVGhlIGZpcnN0IHZlY3Rvci5cblx0ICogQHBhcmFtIHtPYmplY3R9IC0gVGhlIHNlY29uZCB2ZWN0b3IuXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9IC0gVGhlIGRpZmZlcmVuY2UuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLmRpZmZlcmVuY2UgPSBmdW5jdGlvbihmaXJzdCwgc2Vjb25kKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHg6IGZpcnN0LnggLSBzZWNvbmQueCxcblx0XHRcdHk6IGZpcnN0LnkgLSBzZWNvbmQueVxuXHRcdH07XG5cdH07XG5cblx0LyoqXG5cdCAqIFRoZSBqUXVlcnkgUGx1Z2luIGZvciB0aGUgT3dsIENhcm91c2VsXG5cdCAqIEB0b2RvIE5hdmlnYXRpb24gcGx1Z2luIGBuZXh0YCBhbmQgYHByZXZgXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdCQuZm4ub3dsQ2Fyb3VzZWwgPSBmdW5jdGlvbihvcHRpb24pIHtcblx0XHR2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cblx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKSxcblx0XHRcdFx0ZGF0YSA9ICR0aGlzLmRhdGEoJ293bC5jYXJvdXNlbCcpO1xuXG5cdFx0XHRpZiAoIWRhdGEpIHtcblx0XHRcdFx0ZGF0YSA9IG5ldyBPd2wodGhpcywgdHlwZW9mIG9wdGlvbiA9PSAnb2JqZWN0JyAmJiBvcHRpb24pO1xuXHRcdFx0XHQkdGhpcy5kYXRhKCdvd2wuY2Fyb3VzZWwnLCBkYXRhKTtcblxuXHRcdFx0XHQkLmVhY2goW1xuXHRcdFx0XHRcdCduZXh0JywgJ3ByZXYnLCAndG8nLCAnZGVzdHJveScsICdyZWZyZXNoJywgJ3JlcGxhY2UnLCAnYWRkJywgJ3JlbW92ZSdcblx0XHRcdFx0XSwgZnVuY3Rpb24oaSwgZXZlbnQpIHtcblx0XHRcdFx0XHRkYXRhLnJlZ2lzdGVyKHsgdHlwZTogT3dsLlR5cGUuRXZlbnQsIG5hbWU6IGV2ZW50IH0pO1xuXHRcdFx0XHRcdGRhdGEuJGVsZW1lbnQub24oZXZlbnQgKyAnLm93bC5jYXJvdXNlbC5jb3JlJywgJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UgJiYgZS5yZWxhdGVkVGFyZ2V0ICE9PSB0aGlzKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc3VwcHJlc3MoWyBldmVudCBdKTtcblx0XHRcdFx0XHRcdFx0ZGF0YVtldmVudF0uYXBwbHkodGhpcywgW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5yZWxlYXNlKFsgZXZlbnQgXSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSwgZGF0YSkpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHR5cGVvZiBvcHRpb24gPT0gJ3N0cmluZycgJiYgb3B0aW9uLmNoYXJBdCgwKSAhPT0gJ18nKSB7XG5cdFx0XHRcdGRhdGFbb3B0aW9uXS5hcHBseShkYXRhLCBhcmdzKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fTtcblxuXHQvKipcblx0ICogVGhlIGNvbnN0cnVjdG9yIGZvciB0aGUgalF1ZXJ5IFBsdWdpblxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHQkLmZuLm93bENhcm91c2VsLkNvbnN0cnVjdG9yID0gT3dsO1xuXG59KSh3aW5kb3cuWmVwdG8gfHwgd2luZG93LmpRdWVyeSwgd2luZG93LCBkb2N1bWVudCk7XG5cbi8qKlxuICogQXV0b1JlZnJlc2ggUGx1Z2luXG4gKiBAdmVyc2lvbiAyLjMuNFxuICogQGF1dGhvciBBcnR1cyBLb2xhbm93c2tpXG4gKiBAYXV0aG9yIERhdmlkIERldXRzY2hcbiAqIEBsaWNlbnNlIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICovXG47KGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCkge1xuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIHRoZSBhdXRvIHJlZnJlc2ggcGx1Z2luLlxuXHQgKiBAY2xhc3MgVGhlIEF1dG8gUmVmcmVzaCBQbHVnaW5cblx0ICogQHBhcmFtIHtPd2x9IGNhcm91c2VsIC0gVGhlIE93bCBDYXJvdXNlbFxuXHQgKi9cblx0dmFyIEF1dG9SZWZyZXNoID0gZnVuY3Rpb24oY2Fyb3VzZWwpIHtcblx0XHQvKipcblx0XHQgKiBSZWZlcmVuY2UgdG8gdGhlIGNvcmUuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtPd2x9XG5cdFx0ICovXG5cdFx0dGhpcy5fY29yZSA9IGNhcm91c2VsO1xuXG5cdFx0LyoqXG5cdFx0ICogUmVmcmVzaCBpbnRlcnZhbC5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge251bWJlcn1cblx0XHQgKi9cblx0XHR0aGlzLl9pbnRlcnZhbCA9IG51bGw7XG5cblx0XHQvKipcblx0XHQgKiBXaGV0aGVyIHRoZSBlbGVtZW50IGlzIGN1cnJlbnRseSB2aXNpYmxlIG9yIG5vdC5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge0Jvb2xlYW59XG5cdFx0ICovXG5cdFx0dGhpcy5fdmlzaWJsZSA9IG51bGw7XG5cblx0XHQvKipcblx0XHQgKiBBbGwgZXZlbnQgaGFuZGxlcnMuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtPYmplY3R9XG5cdFx0ICovXG5cdFx0dGhpcy5faGFuZGxlcnMgPSB7XG5cdFx0XHQnaW5pdGlhbGl6ZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSAmJiB0aGlzLl9jb3JlLnNldHRpbmdzLmF1dG9SZWZyZXNoKSB7XG5cdFx0XHRcdFx0dGhpcy53YXRjaCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKVxuXHRcdH07XG5cblx0XHQvLyBzZXQgZGVmYXVsdCBvcHRpb25zXG5cdFx0dGhpcy5fY29yZS5vcHRpb25zID0gJC5leHRlbmQoe30sIEF1dG9SZWZyZXNoLkRlZmF1bHRzLCB0aGlzLl9jb3JlLm9wdGlvbnMpO1xuXG5cdFx0Ly8gcmVnaXN0ZXIgZXZlbnQgaGFuZGxlcnNcblx0XHR0aGlzLl9jb3JlLiRlbGVtZW50Lm9uKHRoaXMuX2hhbmRsZXJzKTtcblx0fTtcblxuXHQvKipcblx0ICogRGVmYXVsdCBvcHRpb25zLlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRBdXRvUmVmcmVzaC5EZWZhdWx0cyA9IHtcblx0XHRhdXRvUmVmcmVzaDogdHJ1ZSxcblx0XHRhdXRvUmVmcmVzaEludGVydmFsOiA1MDBcblx0fTtcblxuXHQvKipcblx0ICogV2F0Y2hlcyB0aGUgZWxlbWVudC5cblx0ICovXG5cdEF1dG9SZWZyZXNoLnByb3RvdHlwZS53YXRjaCA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICh0aGlzLl9pbnRlcnZhbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuX3Zpc2libGUgPSB0aGlzLl9jb3JlLmlzVmlzaWJsZSgpO1xuXHRcdHRoaXMuX2ludGVydmFsID0gd2luZG93LnNldEludGVydmFsKCQucHJveHkodGhpcy5yZWZyZXNoLCB0aGlzKSwgdGhpcy5fY29yZS5zZXR0aW5ncy5hdXRvUmVmcmVzaEludGVydmFsKTtcblx0fTtcblxuXHQvKipcblx0ICogUmVmcmVzaGVzIHRoZSBlbGVtZW50LlxuXHQgKi9cblx0QXV0b1JlZnJlc2gucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbigpIHtcblx0XHRpZiAodGhpcy5fY29yZS5pc1Zpc2libGUoKSA9PT0gdGhpcy5fdmlzaWJsZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuX3Zpc2libGUgPSAhdGhpcy5fdmlzaWJsZTtcblxuXHRcdHRoaXMuX2NvcmUuJGVsZW1lbnQudG9nZ2xlQ2xhc3MoJ293bC1oaWRkZW4nLCAhdGhpcy5fdmlzaWJsZSk7XG5cblx0XHR0aGlzLl92aXNpYmxlICYmICh0aGlzLl9jb3JlLmludmFsaWRhdGUoJ3dpZHRoJykgJiYgdGhpcy5fY29yZS5yZWZyZXNoKCkpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBEZXN0cm95cyB0aGUgcGx1Z2luLlxuXHQgKi9cblx0QXV0b1JlZnJlc2gucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgaGFuZGxlciwgcHJvcGVydHk7XG5cblx0XHR3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbCk7XG5cblx0XHRmb3IgKGhhbmRsZXIgaW4gdGhpcy5faGFuZGxlcnMpIHtcblx0XHRcdHRoaXMuX2NvcmUuJGVsZW1lbnQub2ZmKGhhbmRsZXIsIHRoaXMuX2hhbmRsZXJzW2hhbmRsZXJdKTtcblx0XHR9XG5cdFx0Zm9yIChwcm9wZXJ0eSBpbiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKSkge1xuXHRcdFx0dHlwZW9mIHRoaXNbcHJvcGVydHldICE9ICdmdW5jdGlvbicgJiYgKHRoaXNbcHJvcGVydHldID0gbnVsbCk7XG5cdFx0fVxuXHR9O1xuXG5cdCQuZm4ub3dsQ2Fyb3VzZWwuQ29uc3RydWN0b3IuUGx1Z2lucy5BdXRvUmVmcmVzaCA9IEF1dG9SZWZyZXNoO1xuXG59KSh3aW5kb3cuWmVwdG8gfHwgd2luZG93LmpRdWVyeSwgd2luZG93LCBkb2N1bWVudCk7XG5cbi8qKlxuICogTGF6eSBQbHVnaW5cbiAqIEB2ZXJzaW9uIDIuMy40XG4gKiBAYXV0aG9yIEJhcnRvc3ogV29qY2llY2hvd3NraVxuICogQGF1dGhvciBEYXZpZCBEZXV0c2NoXG4gKiBAbGljZW5zZSBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqL1xuOyhmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQpIHtcblxuXHQvKipcblx0ICogQ3JlYXRlcyB0aGUgbGF6eSBwbHVnaW4uXG5cdCAqIEBjbGFzcyBUaGUgTGF6eSBQbHVnaW5cblx0ICogQHBhcmFtIHtPd2x9IGNhcm91c2VsIC0gVGhlIE93bCBDYXJvdXNlbFxuXHQgKi9cblx0dmFyIExhenkgPSBmdW5jdGlvbihjYXJvdXNlbCkge1xuXG5cdFx0LyoqXG5cdFx0ICogUmVmZXJlbmNlIHRvIHRoZSBjb3JlLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7T3dsfVxuXHRcdCAqL1xuXHRcdHRoaXMuX2NvcmUgPSBjYXJvdXNlbDtcblxuXHRcdC8qKlxuXHRcdCAqIEFscmVhZHkgbG9hZGVkIGl0ZW1zLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7QXJyYXkuPGpRdWVyeT59XG5cdFx0ICovXG5cdFx0dGhpcy5fbG9hZGVkID0gW107XG5cblx0XHQvKipcblx0XHQgKiBFdmVudCBoYW5kbGVycy5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge09iamVjdH1cblx0XHQgKi9cblx0XHR0aGlzLl9oYW5kbGVycyA9IHtcblx0XHRcdCdpbml0aWFsaXplZC5vd2wuY2Fyb3VzZWwgY2hhbmdlLm93bC5jYXJvdXNlbCByZXNpemVkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoIWUubmFtZXNwYWNlKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCF0aGlzLl9jb3JlLnNldHRpbmdzIHx8ICF0aGlzLl9jb3JlLnNldHRpbmdzLmxhenlMb2FkKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKChlLnByb3BlcnR5ICYmIGUucHJvcGVydHkubmFtZSA9PSAncG9zaXRpb24nKSB8fCBlLnR5cGUgPT0gJ2luaXRpYWxpemVkJykge1xuXHRcdFx0XHRcdHZhciBzZXR0aW5ncyA9IHRoaXMuX2NvcmUuc2V0dGluZ3MsXG5cdFx0XHRcdFx0XHRuID0gKHNldHRpbmdzLmNlbnRlciAmJiBNYXRoLmNlaWwoc2V0dGluZ3MuaXRlbXMgLyAyKSB8fCBzZXR0aW5ncy5pdGVtcyksXG5cdFx0XHRcdFx0XHRpID0gKChzZXR0aW5ncy5jZW50ZXIgJiYgbiAqIC0xKSB8fCAwKSxcblx0XHRcdFx0XHRcdHBvc2l0aW9uID0gKGUucHJvcGVydHkgJiYgZS5wcm9wZXJ0eS52YWx1ZSAhPT0gdW5kZWZpbmVkID8gZS5wcm9wZXJ0eS52YWx1ZSA6IHRoaXMuX2NvcmUuY3VycmVudCgpKSArIGksXG5cdFx0XHRcdFx0XHRjbG9uZXMgPSB0aGlzLl9jb3JlLmNsb25lcygpLmxlbmd0aCxcblx0XHRcdFx0XHRcdGxvYWQgPSAkLnByb3h5KGZ1bmN0aW9uKGksIHYpIHsgdGhpcy5sb2FkKHYpIH0sIHRoaXMpO1xuXHRcdFx0XHRcdC8vVE9ETzogTmVlZCBkb2N1bWVudGF0aW9uIGZvciB0aGlzIG5ldyBvcHRpb25cblx0XHRcdFx0XHRpZiAoc2V0dGluZ3MubGF6eUxvYWRFYWdlciA+IDApIHtcblx0XHRcdFx0XHRcdG4gKz0gc2V0dGluZ3MubGF6eUxvYWRFYWdlcjtcblx0XHRcdFx0XHRcdC8vIElmIHRoZSBjYXJvdXNlbCBpcyBsb29waW5nIGFsc28gcHJlbG9hZCBpbWFnZXMgdGhhdCBhcmUgdG8gdGhlIFwibGVmdFwiXG5cdFx0XHRcdFx0XHRpZiAoc2V0dGluZ3MubG9vcCkge1xuICAgICAgICAgICAgICBwb3NpdGlvbiAtPSBzZXR0aW5ncy5sYXp5TG9hZEVhZ2VyO1xuICAgICAgICAgICAgICBuKys7XG4gICAgICAgICAgICB9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0d2hpbGUgKGkrKyA8IG4pIHtcblx0XHRcdFx0XHRcdHRoaXMubG9hZChjbG9uZXMgLyAyICsgdGhpcy5fY29yZS5yZWxhdGl2ZShwb3NpdGlvbikpO1xuXHRcdFx0XHRcdFx0Y2xvbmVzICYmICQuZWFjaCh0aGlzLl9jb3JlLmNsb25lcyh0aGlzLl9jb3JlLnJlbGF0aXZlKHBvc2l0aW9uKSksIGxvYWQpO1xuXHRcdFx0XHRcdFx0cG9zaXRpb24rKztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpXG5cdFx0fTtcblxuXHRcdC8vIHNldCB0aGUgZGVmYXVsdCBvcHRpb25zXG5cdFx0dGhpcy5fY29yZS5vcHRpb25zID0gJC5leHRlbmQoe30sIExhenkuRGVmYXVsdHMsIHRoaXMuX2NvcmUub3B0aW9ucyk7XG5cblx0XHQvLyByZWdpc3RlciBldmVudCBoYW5kbGVyXG5cdFx0dGhpcy5fY29yZS4kZWxlbWVudC5vbih0aGlzLl9oYW5kbGVycyk7XG5cdH07XG5cblx0LyoqXG5cdCAqIERlZmF1bHQgb3B0aW9ucy5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0TGF6eS5EZWZhdWx0cyA9IHtcblx0XHRsYXp5TG9hZDogZmFsc2UsXG5cdFx0bGF6eUxvYWRFYWdlcjogMFxuXHR9O1xuXG5cdC8qKlxuXHQgKiBMb2FkcyBhbGwgcmVzb3VyY2VzIG9mIGFuIGl0ZW0gYXQgdGhlIHNwZWNpZmllZCBwb3NpdGlvbi5cblx0ICogQHBhcmFtIHtOdW1iZXJ9IHBvc2l0aW9uIC0gVGhlIGFic29sdXRlIHBvc2l0aW9uIG9mIHRoZSBpdGVtLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqL1xuXHRMYXp5LnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcblx0XHR2YXIgJGl0ZW0gPSB0aGlzLl9jb3JlLiRzdGFnZS5jaGlsZHJlbigpLmVxKHBvc2l0aW9uKSxcblx0XHRcdCRlbGVtZW50cyA9ICRpdGVtICYmICRpdGVtLmZpbmQoJy5vd2wtbGF6eScpO1xuXG5cdFx0aWYgKCEkZWxlbWVudHMgfHwgJC5pbkFycmF5KCRpdGVtLmdldCgwKSwgdGhpcy5fbG9hZGVkKSA+IC0xKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0JGVsZW1lbnRzLmVhY2goJC5wcm94eShmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xuXHRcdFx0dmFyICRlbGVtZW50ID0gJChlbGVtZW50KSwgaW1hZ2UsXG4gICAgICAgICAgICAgICAgdXJsID0gKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvID4gMSAmJiAkZWxlbWVudC5hdHRyKCdkYXRhLXNyYy1yZXRpbmEnKSkgfHwgJGVsZW1lbnQuYXR0cignZGF0YS1zcmMnKSB8fCAkZWxlbWVudC5hdHRyKCdkYXRhLXNyY3NldCcpO1xuXG5cdFx0XHR0aGlzLl9jb3JlLnRyaWdnZXIoJ2xvYWQnLCB7IGVsZW1lbnQ6ICRlbGVtZW50LCB1cmw6IHVybCB9LCAnbGF6eScpO1xuXG5cdFx0XHRpZiAoJGVsZW1lbnQuaXMoJ2ltZycpKSB7XG5cdFx0XHRcdCRlbGVtZW50Lm9uZSgnbG9hZC5vd2wubGF6eScsICQucHJveHkoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0JGVsZW1lbnQuY3NzKCdvcGFjaXR5JywgMSk7XG5cdFx0XHRcdFx0dGhpcy5fY29yZS50cmlnZ2VyKCdsb2FkZWQnLCB7IGVsZW1lbnQ6ICRlbGVtZW50LCB1cmw6IHVybCB9LCAnbGF6eScpO1xuXHRcdFx0XHR9LCB0aGlzKSkuYXR0cignc3JjJywgdXJsKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoJGVsZW1lbnQuaXMoJ3NvdXJjZScpKSB7XG4gICAgICAgICAgICAgICAgJGVsZW1lbnQub25lKCdsb2FkLm93bC5sYXp5JywgJC5wcm94eShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29yZS50cmlnZ2VyKCdsb2FkZWQnLCB7IGVsZW1lbnQ6ICRlbGVtZW50LCB1cmw6IHVybCB9LCAnbGF6eScpO1xuICAgICAgICAgICAgICAgIH0sIHRoaXMpKS5hdHRyKCdzcmNzZXQnLCB1cmwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aW1hZ2UgPSBuZXcgSW1hZ2UoKTtcblx0XHRcdFx0aW1hZ2Uub25sb2FkID0gJC5wcm94eShmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQkZWxlbWVudC5jc3Moe1xuXHRcdFx0XHRcdFx0J2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKFwiJyArIHVybCArICdcIiknLFxuXHRcdFx0XHRcdFx0J29wYWNpdHknOiAnMSdcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR0aGlzLl9jb3JlLnRyaWdnZXIoJ2xvYWRlZCcsIHsgZWxlbWVudDogJGVsZW1lbnQsIHVybDogdXJsIH0sICdsYXp5Jyk7XG5cdFx0XHRcdH0sIHRoaXMpO1xuXHRcdFx0XHRpbWFnZS5zcmMgPSB1cmw7XG5cdFx0XHR9XG5cdFx0fSwgdGhpcykpO1xuXG5cdFx0dGhpcy5fbG9hZGVkLnB1c2goJGl0ZW0uZ2V0KDApKTtcblx0fTtcblxuXHQvKipcblx0ICogRGVzdHJveXMgdGhlIHBsdWdpbi5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0TGF6eS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBoYW5kbGVyLCBwcm9wZXJ0eTtcblxuXHRcdGZvciAoaGFuZGxlciBpbiB0aGlzLmhhbmRsZXJzKSB7XG5cdFx0XHR0aGlzLl9jb3JlLiRlbGVtZW50Lm9mZihoYW5kbGVyLCB0aGlzLmhhbmRsZXJzW2hhbmRsZXJdKTtcblx0XHR9XG5cdFx0Zm9yIChwcm9wZXJ0eSBpbiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKSkge1xuXHRcdFx0dHlwZW9mIHRoaXNbcHJvcGVydHldICE9ICdmdW5jdGlvbicgJiYgKHRoaXNbcHJvcGVydHldID0gbnVsbCk7XG5cdFx0fVxuXHR9O1xuXG5cdCQuZm4ub3dsQ2Fyb3VzZWwuQ29uc3RydWN0b3IuUGx1Z2lucy5MYXp5ID0gTGF6eTtcblxufSkod2luZG93LlplcHRvIHx8IHdpbmRvdy5qUXVlcnksIHdpbmRvdywgZG9jdW1lbnQpO1xuXG4vKipcbiAqIEF1dG9IZWlnaHQgUGx1Z2luXG4gKiBAdmVyc2lvbiAyLjMuNFxuICogQGF1dGhvciBCYXJ0b3N6IFdvamNpZWNob3dza2lcbiAqIEBhdXRob3IgRGF2aWQgRGV1dHNjaFxuICogQGxpY2Vuc2UgVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKi9cbjsoZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKSB7XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgdGhlIGF1dG8gaGVpZ2h0IHBsdWdpbi5cblx0ICogQGNsYXNzIFRoZSBBdXRvIEhlaWdodCBQbHVnaW5cblx0ICogQHBhcmFtIHtPd2x9IGNhcm91c2VsIC0gVGhlIE93bCBDYXJvdXNlbFxuXHQgKi9cblx0dmFyIEF1dG9IZWlnaHQgPSBmdW5jdGlvbihjYXJvdXNlbCkge1xuXHRcdC8qKlxuXHRcdCAqIFJlZmVyZW5jZSB0byB0aGUgY29yZS5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge093bH1cblx0XHQgKi9cblx0XHR0aGlzLl9jb3JlID0gY2Fyb3VzZWw7XG5cblx0XHR0aGlzLl9wcmV2aW91c0hlaWdodCA9IG51bGw7XG5cblx0XHQvKipcblx0XHQgKiBBbGwgZXZlbnQgaGFuZGxlcnMuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtPYmplY3R9XG5cdFx0ICovXG5cdFx0dGhpcy5faGFuZGxlcnMgPSB7XG5cdFx0XHQnaW5pdGlhbGl6ZWQub3dsLmNhcm91c2VsIHJlZnJlc2hlZC5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlICYmIHRoaXMuX2NvcmUuc2V0dGluZ3MuYXV0b0hlaWdodCkge1xuXHRcdFx0XHRcdHRoaXMudXBkYXRlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J2NoYW5nZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSAmJiB0aGlzLl9jb3JlLnNldHRpbmdzLmF1dG9IZWlnaHQgJiYgZS5wcm9wZXJ0eS5uYW1lID09PSAncG9zaXRpb24nKXtcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKSxcblx0XHRcdCdsb2FkZWQub3dsLmxhenknOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlICYmIHRoaXMuX2NvcmUuc2V0dGluZ3MuYXV0b0hlaWdodFxuXHRcdFx0XHRcdCYmIGUuZWxlbWVudC5jbG9zZXN0KCcuJyArIHRoaXMuX2NvcmUuc2V0dGluZ3MuaXRlbUNsYXNzKS5pbmRleCgpID09PSB0aGlzLl9jb3JlLmN1cnJlbnQoKSkge1xuXHRcdFx0XHRcdHRoaXMudXBkYXRlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpXG5cdFx0fTtcblxuXHRcdC8vIHNldCBkZWZhdWx0IG9wdGlvbnNcblx0XHR0aGlzLl9jb3JlLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgQXV0b0hlaWdodC5EZWZhdWx0cywgdGhpcy5fY29yZS5vcHRpb25zKTtcblxuXHRcdC8vIHJlZ2lzdGVyIGV2ZW50IGhhbmRsZXJzXG5cdFx0dGhpcy5fY29yZS4kZWxlbWVudC5vbih0aGlzLl9oYW5kbGVycyk7XG5cdFx0dGhpcy5faW50ZXJ2YWxJZCA9IG51bGw7XG5cdFx0dmFyIHJlZlRoaXMgPSB0aGlzO1xuXG5cdFx0Ly8gVGhlc2UgY2hhbmdlcyBoYXZlIGJlZW4gdGFrZW4gZnJvbSBhIFBSIGJ5IGdhdnJvY2hlbGVnbm91IHByb3Bvc2VkIGluICMxNTc1XG5cdFx0Ly8gYW5kIGhhdmUgYmVlbiBtYWRlIGNvbXBhdGlibGUgd2l0aCB0aGUgbGF0ZXN0IGpRdWVyeSB2ZXJzaW9uXG5cdFx0JCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAocmVmVGhpcy5fY29yZS5zZXR0aW5ncy5hdXRvSGVpZ2h0KSB7XG5cdFx0XHRcdHJlZlRoaXMudXBkYXRlKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvLyBBdXRvcmVzaXplIHRoZSBoZWlnaHQgb2YgdGhlIGNhcm91c2VsIHdoZW4gd2luZG93IGlzIHJlc2l6ZWRcblx0XHQvLyBXaGVuIGNhcm91c2VsIGhhcyBpbWFnZXMsIHRoZSBoZWlnaHQgaXMgZGVwZW5kZW50IG9uIHRoZSB3aWR0aFxuXHRcdC8vIGFuZCBzaG91bGQgYWxzbyBjaGFuZ2Ugb24gcmVzaXplXG5cdFx0JCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcblx0XHRcdGlmIChyZWZUaGlzLl9jb3JlLnNldHRpbmdzLmF1dG9IZWlnaHQpIHtcblx0XHRcdFx0aWYgKHJlZlRoaXMuX2ludGVydmFsSWQgIT0gbnVsbCkge1xuXHRcdFx0XHRcdGNsZWFyVGltZW91dChyZWZUaGlzLl9pbnRlcnZhbElkKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJlZlRoaXMuX2ludGVydmFsSWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHJlZlRoaXMudXBkYXRlKCk7XG5cdFx0XHRcdH0sIDI1MCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0fTtcblxuXHQvKipcblx0ICogRGVmYXVsdCBvcHRpb25zLlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRBdXRvSGVpZ2h0LkRlZmF1bHRzID0ge1xuXHRcdGF1dG9IZWlnaHQ6IGZhbHNlLFxuXHRcdGF1dG9IZWlnaHRDbGFzczogJ293bC1oZWlnaHQnXG5cdH07XG5cblx0LyoqXG5cdCAqIFVwZGF0ZXMgdGhlIHZpZXcuXG5cdCAqL1xuXHRBdXRvSGVpZ2h0LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgc3RhcnQgPSB0aGlzLl9jb3JlLl9jdXJyZW50LFxuXHRcdFx0ZW5kID0gc3RhcnQgKyB0aGlzLl9jb3JlLnNldHRpbmdzLml0ZW1zLFxuXHRcdFx0bGF6eUxvYWRFbmFibGVkID0gdGhpcy5fY29yZS5zZXR0aW5ncy5sYXp5TG9hZCxcblx0XHRcdHZpc2libGUgPSB0aGlzLl9jb3JlLiRzdGFnZS5jaGlsZHJlbigpLnRvQXJyYXkoKS5zbGljZShzdGFydCwgZW5kKSxcblx0XHRcdGhlaWdodHMgPSBbXSxcblx0XHRcdG1heGhlaWdodCA9IDA7XG5cblx0XHQkLmVhY2godmlzaWJsZSwgZnVuY3Rpb24oaW5kZXgsIGl0ZW0pIHtcblx0XHRcdGhlaWdodHMucHVzaCgkKGl0ZW0pLmhlaWdodCgpKTtcblx0XHR9KTtcblxuXHRcdG1heGhlaWdodCA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGhlaWdodHMpO1xuXG5cdFx0aWYgKG1heGhlaWdodCA8PSAxICYmIGxhenlMb2FkRW5hYmxlZCAmJiB0aGlzLl9wcmV2aW91c0hlaWdodCkge1xuXHRcdFx0bWF4aGVpZ2h0ID0gdGhpcy5fcHJldmlvdXNIZWlnaHQ7XG5cdFx0fVxuXG5cdFx0dGhpcy5fcHJldmlvdXNIZWlnaHQgPSBtYXhoZWlnaHQ7XG5cblx0XHR0aGlzLl9jb3JlLiRzdGFnZS5wYXJlbnQoKVxuXHRcdFx0LmhlaWdodChtYXhoZWlnaHQpXG5cdFx0XHQuYWRkQ2xhc3ModGhpcy5fY29yZS5zZXR0aW5ncy5hdXRvSGVpZ2h0Q2xhc3MpO1xuXHR9O1xuXG5cdEF1dG9IZWlnaHQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgaGFuZGxlciwgcHJvcGVydHk7XG5cblx0XHRmb3IgKGhhbmRsZXIgaW4gdGhpcy5faGFuZGxlcnMpIHtcblx0XHRcdHRoaXMuX2NvcmUuJGVsZW1lbnQub2ZmKGhhbmRsZXIsIHRoaXMuX2hhbmRsZXJzW2hhbmRsZXJdKTtcblx0XHR9XG5cdFx0Zm9yIChwcm9wZXJ0eSBpbiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKSkge1xuXHRcdFx0dHlwZW9mIHRoaXNbcHJvcGVydHldICE9PSAnZnVuY3Rpb24nICYmICh0aGlzW3Byb3BlcnR5XSA9IG51bGwpO1xuXHRcdH1cblx0fTtcblxuXHQkLmZuLm93bENhcm91c2VsLkNvbnN0cnVjdG9yLlBsdWdpbnMuQXV0b0hlaWdodCA9IEF1dG9IZWlnaHQ7XG5cbn0pKHdpbmRvdy5aZXB0byB8fCB3aW5kb3cualF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50KTtcblxuLyoqXG4gKiBWaWRlbyBQbHVnaW5cbiAqIEB2ZXJzaW9uIDIuMy40XG4gKiBAYXV0aG9yIEJhcnRvc3ogV29qY2llY2hvd3NraVxuICogQGF1dGhvciBEYXZpZCBEZXV0c2NoXG4gKiBAbGljZW5zZSBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqL1xuOyhmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQpIHtcblxuXHQvKipcblx0ICogQ3JlYXRlcyB0aGUgdmlkZW8gcGx1Z2luLlxuXHQgKiBAY2xhc3MgVGhlIFZpZGVvIFBsdWdpblxuXHQgKiBAcGFyYW0ge093bH0gY2Fyb3VzZWwgLSBUaGUgT3dsIENhcm91c2VsXG5cdCAqL1xuXHR2YXIgVmlkZW8gPSBmdW5jdGlvbihjYXJvdXNlbCkge1xuXHRcdC8qKlxuXHRcdCAqIFJlZmVyZW5jZSB0byB0aGUgY29yZS5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge093bH1cblx0XHQgKi9cblx0XHR0aGlzLl9jb3JlID0gY2Fyb3VzZWw7XG5cblx0XHQvKipcblx0XHQgKiBDYWNoZSBhbGwgdmlkZW8gVVJMcy5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge09iamVjdH1cblx0XHQgKi9cblx0XHR0aGlzLl92aWRlb3MgPSB7fTtcblxuXHRcdC8qKlxuXHRcdCAqIEN1cnJlbnQgcGxheWluZyBpdGVtLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7alF1ZXJ5fVxuXHRcdCAqL1xuXHRcdHRoaXMuX3BsYXlpbmcgPSBudWxsO1xuXG5cdFx0LyoqXG5cdFx0ICogQWxsIGV2ZW50IGhhbmRsZXJzLlxuXHRcdCAqIEB0b2RvIFRoZSBjbG9uZWQgY29udGVudCByZW1vdmFsZSBpcyB0b28gbGF0ZVxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7T2JqZWN0fVxuXHRcdCAqL1xuXHRcdHRoaXMuX2hhbmRsZXJzID0ge1xuXHRcdFx0J2luaXRpYWxpemVkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UpIHtcblx0XHRcdFx0XHR0aGlzLl9jb3JlLnJlZ2lzdGVyKHsgdHlwZTogJ3N0YXRlJywgbmFtZTogJ3BsYXlpbmcnLCB0YWdzOiBbICdpbnRlcmFjdGluZycgXSB9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyksXG5cdFx0XHQncmVzaXplLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UgJiYgdGhpcy5fY29yZS5zZXR0aW5ncy52aWRlbyAmJiB0aGlzLmlzSW5GdWxsU2NyZWVuKCkpIHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J3JlZnJlc2hlZC5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlICYmIHRoaXMuX2NvcmUuaXMoJ3Jlc2l6aW5nJykpIHtcblx0XHRcdFx0XHR0aGlzLl9jb3JlLiRzdGFnZS5maW5kKCcuY2xvbmVkIC5vd2wtdmlkZW8tZnJhbWUnKS5yZW1vdmUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyksXG5cdFx0XHQnY2hhbmdlZC5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlICYmIGUucHJvcGVydHkubmFtZSA9PT0gJ3Bvc2l0aW9uJyAmJiB0aGlzLl9wbGF5aW5nKSB7XG5cdFx0XHRcdFx0dGhpcy5zdG9wKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J3ByZXBhcmVkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoIWUubmFtZXNwYWNlKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmFyICRlbGVtZW50ID0gJChlLmNvbnRlbnQpLmZpbmQoJy5vd2wtdmlkZW8nKTtcblxuXHRcdFx0XHRpZiAoJGVsZW1lbnQubGVuZ3RoKSB7XG5cdFx0XHRcdFx0JGVsZW1lbnQuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcblx0XHRcdFx0XHR0aGlzLmZldGNoKCRlbGVtZW50LCAkKGUuY29udGVudCkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKVxuXHRcdH07XG5cblx0XHQvLyBzZXQgZGVmYXVsdCBvcHRpb25zXG5cdFx0dGhpcy5fY29yZS5vcHRpb25zID0gJC5leHRlbmQoe30sIFZpZGVvLkRlZmF1bHRzLCB0aGlzLl9jb3JlLm9wdGlvbnMpO1xuXG5cdFx0Ly8gcmVnaXN0ZXIgZXZlbnQgaGFuZGxlcnNcblx0XHR0aGlzLl9jb3JlLiRlbGVtZW50Lm9uKHRoaXMuX2hhbmRsZXJzKTtcblxuXHRcdHRoaXMuX2NvcmUuJGVsZW1lbnQub24oJ2NsaWNrLm93bC52aWRlbycsICcub3dsLXZpZGVvLXBsYXktaWNvbicsICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0dGhpcy5wbGF5KGUpO1xuXHRcdH0sIHRoaXMpKTtcblx0fTtcblxuXHQvKipcblx0ICogRGVmYXVsdCBvcHRpb25zLlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRWaWRlby5EZWZhdWx0cyA9IHtcblx0XHR2aWRlbzogZmFsc2UsXG5cdFx0dmlkZW9IZWlnaHQ6IGZhbHNlLFxuXHRcdHZpZGVvV2lkdGg6IGZhbHNlXG5cdH07XG5cblx0LyoqXG5cdCAqIEdldHMgdGhlIHZpZGVvIElEIGFuZCB0aGUgdHlwZSAoWW91VHViZS9WaW1lby92emFhciBvbmx5KS5cblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge2pRdWVyeX0gdGFyZ2V0IC0gVGhlIHRhcmdldCBjb250YWluaW5nIHRoZSB2aWRlbyBkYXRhLlxuXHQgKiBAcGFyYW0ge2pRdWVyeX0gaXRlbSAtIFRoZSBpdGVtIGNvbnRhaW5pbmcgdGhlIHZpZGVvLlxuXHQgKi9cblx0VmlkZW8ucHJvdG90eXBlLmZldGNoID0gZnVuY3Rpb24odGFyZ2V0LCBpdGVtKSB7XG5cdFx0XHR2YXIgdHlwZSA9IChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZiAodGFyZ2V0LmF0dHIoJ2RhdGEtdmltZW8taWQnKSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuICd2aW1lbyc7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0YXJnZXQuYXR0cignZGF0YS12emFhci1pZCcpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gJ3Z6YWFyJ1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gJ3lvdXR1YmUnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSkoKSxcblx0XHRcdFx0aWQgPSB0YXJnZXQuYXR0cignZGF0YS12aW1lby1pZCcpIHx8IHRhcmdldC5hdHRyKCdkYXRhLXlvdXR1YmUtaWQnKSB8fCB0YXJnZXQuYXR0cignZGF0YS12emFhci1pZCcpLFxuXHRcdFx0XHR3aWR0aCA9IHRhcmdldC5hdHRyKCdkYXRhLXdpZHRoJykgfHwgdGhpcy5fY29yZS5zZXR0aW5ncy52aWRlb1dpZHRoLFxuXHRcdFx0XHRoZWlnaHQgPSB0YXJnZXQuYXR0cignZGF0YS1oZWlnaHQnKSB8fCB0aGlzLl9jb3JlLnNldHRpbmdzLnZpZGVvSGVpZ2h0LFxuXHRcdFx0XHR1cmwgPSB0YXJnZXQuYXR0cignaHJlZicpO1xuXG5cdFx0aWYgKHVybCkge1xuXG5cdFx0XHQvKlxuXHRcdFx0XHRcdFBhcnNlcyB0aGUgaWQncyBvdXQgb2YgdGhlIGZvbGxvd2luZyB1cmxzIChhbmQgcHJvYmFibHkgbW9yZSk6XG5cdFx0XHRcdFx0aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj06aWRcblx0XHRcdFx0XHRodHRwczovL3lvdXR1LmJlLzppZFxuXHRcdFx0XHRcdGh0dHBzOi8vdmltZW8uY29tLzppZFxuXHRcdFx0XHRcdGh0dHBzOi8vdmltZW8uY29tL2NoYW5uZWxzLzpjaGFubmVsLzppZFxuXHRcdFx0XHRcdGh0dHBzOi8vdmltZW8uY29tL2dyb3Vwcy86Z3JvdXAvdmlkZW9zLzppZFxuXHRcdFx0XHRcdGh0dHBzOi8vYXBwLnZ6YWFyLmNvbS92aWRlb3MvOmlkXG5cblx0XHRcdFx0XHRWaXN1YWwgZXhhbXBsZTogaHR0cHM6Ly9yZWdleHBlci5jb20vIyhodHRwJTNBJTdDaHR0cHMlM0ElN0MpJTVDJTJGJTVDJTJGKHBsYXllci4lN0N3d3cuJTdDYXBwLiklM0YodmltZW8lNUMuY29tJTdDeW91dHUoYmUlNUMuY29tJTdDJTVDLmJlJTdDYmUlNUMuZ29vZ2xlYXBpcyU1Qy5jb20pJTdDdnphYXIlNUMuY29tKSU1QyUyRih2aWRlbyU1QyUyRiU3Q3ZpZGVvcyU1QyUyRiU3Q2VtYmVkJTVDJTJGJTdDY2hhbm5lbHMlNUMlMkYuJTJCJTVDJTJGJTdDZ3JvdXBzJTVDJTJGLiUyQiU1QyUyRiU3Q3dhdGNoJTVDJTNGdiUzRCU3Q3YlNUMlMkYpJTNGKCU1QkEtWmEtejAtOS5fJTI1LSU1RCopKCU1QyUyNiU1Q1MlMkIpJTNGXG5cdFx0XHQqL1xuXG5cdFx0XHRpZCA9IHVybC5tYXRjaCgvKGh0dHA6fGh0dHBzOnwpXFwvXFwvKHBsYXllci58d3d3LnxhcHAuKT8odmltZW9cXC5jb218eW91dHUoYmVcXC5jb218XFwuYmV8YmVcXC5nb29nbGVhcGlzXFwuY29tfGJlXFwtbm9jb29raWVcXC5jb20pfHZ6YWFyXFwuY29tKVxcLyh2aWRlb1xcL3x2aWRlb3NcXC98ZW1iZWRcXC98Y2hhbm5lbHNcXC8uK1xcL3xncm91cHNcXC8uK1xcL3x3YXRjaFxcP3Y9fHZcXC8pPyhbQS1aYS16MC05Ll8lLV0qKShcXCZcXFMrKT8vKTtcblxuXHRcdFx0aWYgKGlkWzNdLmluZGV4T2YoJ3lvdXR1JykgPiAtMSkge1xuXHRcdFx0XHR0eXBlID0gJ3lvdXR1YmUnO1xuXHRcdFx0fSBlbHNlIGlmIChpZFszXS5pbmRleE9mKCd2aW1lbycpID4gLTEpIHtcblx0XHRcdFx0dHlwZSA9ICd2aW1lbyc7XG5cdFx0XHR9IGVsc2UgaWYgKGlkWzNdLmluZGV4T2YoJ3Z6YWFyJykgPiAtMSkge1xuXHRcdFx0XHR0eXBlID0gJ3Z6YWFyJztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignVmlkZW8gVVJMIG5vdCBzdXBwb3J0ZWQuJyk7XG5cdFx0XHR9XG5cdFx0XHRpZCA9IGlkWzZdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgdmlkZW8gVVJMLicpO1xuXHRcdH1cblxuXHRcdHRoaXMuX3ZpZGVvc1t1cmxdID0ge1xuXHRcdFx0dHlwZTogdHlwZSxcblx0XHRcdGlkOiBpZCxcblx0XHRcdHdpZHRoOiB3aWR0aCxcblx0XHRcdGhlaWdodDogaGVpZ2h0XG5cdFx0fTtcblxuXHRcdGl0ZW0uYXR0cignZGF0YS12aWRlbycsIHVybCk7XG5cblx0XHR0aGlzLnRodW1ibmFpbCh0YXJnZXQsIHRoaXMuX3ZpZGVvc1t1cmxdKTtcblx0fTtcblxuXHQvKipcblx0ICogQ3JlYXRlcyB2aWRlbyB0aHVtYm5haWwuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtqUXVlcnl9IHRhcmdldCAtIFRoZSB0YXJnZXQgY29udGFpbmluZyB0aGUgdmlkZW8gZGF0YS5cblx0ICogQHBhcmFtIHtPYmplY3R9IGluZm8gLSBUaGUgdmlkZW8gaW5mbyBvYmplY3QuXG5cdCAqIEBzZWUgYGZldGNoYFxuXHQgKi9cblx0VmlkZW8ucHJvdG90eXBlLnRodW1ibmFpbCA9IGZ1bmN0aW9uKHRhcmdldCwgdmlkZW8pIHtcblx0XHR2YXIgdG5MaW5rLFxuXHRcdFx0aWNvbixcblx0XHRcdHBhdGgsXG5cdFx0XHRkaW1lbnNpb25zID0gdmlkZW8ud2lkdGggJiYgdmlkZW8uaGVpZ2h0ID8gJ3dpZHRoOicgKyB2aWRlby53aWR0aCArICdweDtoZWlnaHQ6JyArIHZpZGVvLmhlaWdodCArICdweDsnIDogJycsXG5cdFx0XHRjdXN0b21UbiA9IHRhcmdldC5maW5kKCdpbWcnKSxcblx0XHRcdHNyY1R5cGUgPSAnc3JjJyxcblx0XHRcdGxhenlDbGFzcyA9ICcnLFxuXHRcdFx0c2V0dGluZ3MgPSB0aGlzLl9jb3JlLnNldHRpbmdzLFxuXHRcdFx0Y3JlYXRlID0gZnVuY3Rpb24ocGF0aCkge1xuXHRcdFx0XHRpY29uID0gJzxkaXYgY2xhc3M9XCJvd2wtdmlkZW8tcGxheS1pY29uXCI+PC9kaXY+JztcblxuXHRcdFx0XHRpZiAoc2V0dGluZ3MubGF6eUxvYWQpIHtcblx0XHRcdFx0XHR0bkxpbmsgPSAkKCc8ZGl2Lz4nLHtcblx0XHRcdFx0XHRcdFwiY2xhc3NcIjogJ293bC12aWRlby10biAnICsgbGF6eUNsYXNzLFxuXHRcdFx0XHRcdFx0XCJzcmNUeXBlXCI6IHBhdGhcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0bkxpbmsgPSAkKCAnPGRpdi8+Jywge1xuXHRcdFx0XHRcdFx0XCJjbGFzc1wiOiBcIm93bC12aWRlby10blwiLFxuXHRcdFx0XHRcdFx0XCJzdHlsZVwiOiAnb3BhY2l0eToxO2JhY2tncm91bmQtaW1hZ2U6dXJsKCcgKyBwYXRoICsgJyknXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGFyZ2V0LmFmdGVyKHRuTGluayk7XG5cdFx0XHRcdHRhcmdldC5hZnRlcihpY29uKTtcblx0XHRcdH07XG5cblx0XHQvLyB3cmFwIHZpZGVvIGNvbnRlbnQgaW50byBvd2wtdmlkZW8td3JhcHBlciBkaXZcblx0XHR0YXJnZXQud3JhcCggJCggJzxkaXYvPicsIHtcblx0XHRcdFwiY2xhc3NcIjogXCJvd2wtdmlkZW8td3JhcHBlclwiLFxuXHRcdFx0XCJzdHlsZVwiOiBkaW1lbnNpb25zXG5cdFx0fSkpO1xuXG5cdFx0aWYgKHRoaXMuX2NvcmUuc2V0dGluZ3MubGF6eUxvYWQpIHtcblx0XHRcdHNyY1R5cGUgPSAnZGF0YS1zcmMnO1xuXHRcdFx0bGF6eUNsYXNzID0gJ293bC1sYXp5Jztcblx0XHR9XG5cblx0XHQvLyBjdXN0b20gdGh1bWJuYWlsXG5cdFx0aWYgKGN1c3RvbVRuLmxlbmd0aCkge1xuXHRcdFx0Y3JlYXRlKGN1c3RvbVRuLmF0dHIoc3JjVHlwZSkpO1xuXHRcdFx0Y3VzdG9tVG4ucmVtb3ZlKCk7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKHZpZGVvLnR5cGUgPT09ICd5b3V0dWJlJykge1xuXHRcdFx0cGF0aCA9IFwiLy9pbWcueW91dHViZS5jb20vdmkvXCIgKyB2aWRlby5pZCArIFwiL2hxZGVmYXVsdC5qcGdcIjtcblx0XHRcdGNyZWF0ZShwYXRoKTtcblx0XHR9IGVsc2UgaWYgKHZpZGVvLnR5cGUgPT09ICd2aW1lbycpIHtcblx0XHRcdCQuYWpheCh7XG5cdFx0XHRcdHR5cGU6ICdHRVQnLFxuXHRcdFx0XHR1cmw6ICcvL3ZpbWVvLmNvbS9hcGkvdjIvdmlkZW8vJyArIHZpZGVvLmlkICsgJy5qc29uJyxcblx0XHRcdFx0anNvbnA6ICdjYWxsYmFjaycsXG5cdFx0XHRcdGRhdGFUeXBlOiAnanNvbnAnLFxuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG5cdFx0XHRcdFx0cGF0aCA9IGRhdGFbMF0udGh1bWJuYWlsX2xhcmdlO1xuXHRcdFx0XHRcdGNyZWF0ZShwYXRoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIGlmICh2aWRlby50eXBlID09PSAndnphYXInKSB7XG5cdFx0XHQkLmFqYXgoe1xuXHRcdFx0XHR0eXBlOiAnR0VUJyxcblx0XHRcdFx0dXJsOiAnLy92emFhci5jb20vYXBpL3ZpZGVvcy8nICsgdmlkZW8uaWQgKyAnLmpzb24nLFxuXHRcdFx0XHRqc29ucDogJ2NhbGxiYWNrJyxcblx0XHRcdFx0ZGF0YVR5cGU6ICdqc29ucCcsXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRcdFx0XHRwYXRoID0gZGF0YS5mcmFtZWdyYWJfdXJsO1xuXHRcdFx0XHRcdGNyZWF0ZShwYXRoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBTdG9wcyB0aGUgY3VycmVudCB2aWRlby5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0VmlkZW8ucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbigpIHtcblx0XHR0aGlzLl9jb3JlLnRyaWdnZXIoJ3N0b3AnLCBudWxsLCAndmlkZW8nKTtcblx0XHR0aGlzLl9wbGF5aW5nLmZpbmQoJy5vd2wtdmlkZW8tZnJhbWUnKS5yZW1vdmUoKTtcblx0XHR0aGlzLl9wbGF5aW5nLnJlbW92ZUNsYXNzKCdvd2wtdmlkZW8tcGxheWluZycpO1xuXHRcdHRoaXMuX3BsYXlpbmcgPSBudWxsO1xuXHRcdHRoaXMuX2NvcmUubGVhdmUoJ3BsYXlpbmcnKTtcblx0XHR0aGlzLl9jb3JlLnRyaWdnZXIoJ3N0b3BwZWQnLCBudWxsLCAndmlkZW8nKTtcblx0fTtcblxuXHQvKipcblx0ICogU3RhcnRzIHRoZSBjdXJyZW50IHZpZGVvLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gVGhlIGV2ZW50IGFyZ3VtZW50cy5cblx0ICovXG5cdFZpZGVvLnByb3RvdHlwZS5wbGF5ID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHR2YXIgdGFyZ2V0ID0gJChldmVudC50YXJnZXQpLFxuXHRcdFx0aXRlbSA9IHRhcmdldC5jbG9zZXN0KCcuJyArIHRoaXMuX2NvcmUuc2V0dGluZ3MuaXRlbUNsYXNzKSxcblx0XHRcdHZpZGVvID0gdGhpcy5fdmlkZW9zW2l0ZW0uYXR0cignZGF0YS12aWRlbycpXSxcblx0XHRcdHdpZHRoID0gdmlkZW8ud2lkdGggfHwgJzEwMCUnLFxuXHRcdFx0aGVpZ2h0ID0gdmlkZW8uaGVpZ2h0IHx8IHRoaXMuX2NvcmUuJHN0YWdlLmhlaWdodCgpLFxuXHRcdFx0aHRtbCxcblx0XHRcdGlmcmFtZTtcblxuXHRcdGlmICh0aGlzLl9wbGF5aW5nKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5fY29yZS5lbnRlcigncGxheWluZycpO1xuXHRcdHRoaXMuX2NvcmUudHJpZ2dlcigncGxheScsIG51bGwsICd2aWRlbycpO1xuXG5cdFx0aXRlbSA9IHRoaXMuX2NvcmUuaXRlbXModGhpcy5fY29yZS5yZWxhdGl2ZShpdGVtLmluZGV4KCkpKTtcblxuXHRcdHRoaXMuX2NvcmUucmVzZXQoaXRlbS5pbmRleCgpKTtcblxuXHRcdGh0bWwgPSAkKCAnPGlmcmFtZSBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvd2Z1bGxzY3JlZW4gbW96YWxsb3dmdWxsc2NyZWVuIHdlYmtpdEFsbG93RnVsbFNjcmVlbiA+PC9pZnJhbWU+JyApO1xuXHRcdGh0bWwuYXR0ciggJ2hlaWdodCcsIGhlaWdodCApO1xuXHRcdGh0bWwuYXR0ciggJ3dpZHRoJywgd2lkdGggKTtcblx0XHRpZiAodmlkZW8udHlwZSA9PT0gJ3lvdXR1YmUnKSB7XG5cdFx0XHRodG1sLmF0dHIoICdzcmMnLCAnLy93d3cueW91dHViZS5jb20vZW1iZWQvJyArIHZpZGVvLmlkICsgJz9hdXRvcGxheT0xJnJlbD0wJnY9JyArIHZpZGVvLmlkICk7XG5cdFx0fSBlbHNlIGlmICh2aWRlby50eXBlID09PSAndmltZW8nKSB7XG5cdFx0XHRodG1sLmF0dHIoICdzcmMnLCAnLy9wbGF5ZXIudmltZW8uY29tL3ZpZGVvLycgKyB2aWRlby5pZCArICc/YXV0b3BsYXk9MScgKTtcblx0XHR9IGVsc2UgaWYgKHZpZGVvLnR5cGUgPT09ICd2emFhcicpIHtcblx0XHRcdGh0bWwuYXR0ciggJ3NyYycsICcvL3ZpZXcudnphYXIuY29tLycgKyB2aWRlby5pZCArICcvcGxheWVyP2F1dG9wbGF5PXRydWUnICk7XG5cdFx0fVxuXG5cdFx0aWZyYW1lID0gJChodG1sKS53cmFwKCAnPGRpdiBjbGFzcz1cIm93bC12aWRlby1mcmFtZVwiIC8+JyApLmluc2VydEFmdGVyKGl0ZW0uZmluZCgnLm93bC12aWRlbycpKTtcblxuXHRcdHRoaXMuX3BsYXlpbmcgPSBpdGVtLmFkZENsYXNzKCdvd2wtdmlkZW8tcGxheWluZycpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBDaGVja3Mgd2hldGhlciBhbiB2aWRlbyBpcyBjdXJyZW50bHkgaW4gZnVsbCBzY3JlZW4gbW9kZSBvciBub3QuXG5cdCAqIEB0b2RvIEJhZCBzdHlsZSBiZWNhdXNlIGxvb2tzIGxpa2UgYSByZWFkb25seSBtZXRob2QgYnV0IGNoYW5nZXMgbWVtYmVycy5cblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcmV0dXJucyB7Qm9vbGVhbn1cblx0ICovXG5cdFZpZGVvLnByb3RvdHlwZS5pc0luRnVsbFNjcmVlbiA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQgfHwgZG9jdW1lbnQubW96RnVsbFNjcmVlbkVsZW1lbnQgfHxcblx0XHRcdFx0ZG9jdW1lbnQud2Via2l0RnVsbHNjcmVlbkVsZW1lbnQ7XG5cblx0XHRyZXR1cm4gZWxlbWVudCAmJiAkKGVsZW1lbnQpLnBhcmVudCgpLmhhc0NsYXNzKCdvd2wtdmlkZW8tZnJhbWUnKTtcblx0fTtcblxuXHQvKipcblx0ICogRGVzdHJveXMgdGhlIHBsdWdpbi5cblx0ICovXG5cdFZpZGVvLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGhhbmRsZXIsIHByb3BlcnR5O1xuXG5cdFx0dGhpcy5fY29yZS4kZWxlbWVudC5vZmYoJ2NsaWNrLm93bC52aWRlbycpO1xuXG5cdFx0Zm9yIChoYW5kbGVyIGluIHRoaXMuX2hhbmRsZXJzKSB7XG5cdFx0XHR0aGlzLl9jb3JlLiRlbGVtZW50Lm9mZihoYW5kbGVyLCB0aGlzLl9oYW5kbGVyc1toYW5kbGVyXSk7XG5cdFx0fVxuXHRcdGZvciAocHJvcGVydHkgaW4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcykpIHtcblx0XHRcdHR5cGVvZiB0aGlzW3Byb3BlcnR5XSAhPSAnZnVuY3Rpb24nICYmICh0aGlzW3Byb3BlcnR5XSA9IG51bGwpO1xuXHRcdH1cblx0fTtcblxuXHQkLmZuLm93bENhcm91c2VsLkNvbnN0cnVjdG9yLlBsdWdpbnMuVmlkZW8gPSBWaWRlbztcblxufSkod2luZG93LlplcHRvIHx8IHdpbmRvdy5qUXVlcnksIHdpbmRvdywgZG9jdW1lbnQpO1xuXG4vKipcbiAqIEFuaW1hdGUgUGx1Z2luXG4gKiBAdmVyc2lvbiAyLjMuNFxuICogQGF1dGhvciBCYXJ0b3N6IFdvamNpZWNob3dza2lcbiAqIEBhdXRob3IgRGF2aWQgRGV1dHNjaFxuICogQGxpY2Vuc2UgVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKi9cbjsoZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKSB7XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgdGhlIGFuaW1hdGUgcGx1Z2luLlxuXHQgKiBAY2xhc3MgVGhlIE5hdmlnYXRpb24gUGx1Z2luXG5cdCAqIEBwYXJhbSB7T3dsfSBzY29wZSAtIFRoZSBPd2wgQ2Fyb3VzZWxcblx0ICovXG5cdHZhciBBbmltYXRlID0gZnVuY3Rpb24oc2NvcGUpIHtcblx0XHR0aGlzLmNvcmUgPSBzY29wZTtcblx0XHR0aGlzLmNvcmUub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBBbmltYXRlLkRlZmF1bHRzLCB0aGlzLmNvcmUub3B0aW9ucyk7XG5cdFx0dGhpcy5zd2FwcGluZyA9IHRydWU7XG5cdFx0dGhpcy5wcmV2aW91cyA9IHVuZGVmaW5lZDtcblx0XHR0aGlzLm5leHQgPSB1bmRlZmluZWQ7XG5cblx0XHR0aGlzLmhhbmRsZXJzID0ge1xuXHRcdFx0J2NoYW5nZS5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlICYmIGUucHJvcGVydHkubmFtZSA9PSAncG9zaXRpb24nKSB7XG5cdFx0XHRcdFx0dGhpcy5wcmV2aW91cyA9IHRoaXMuY29yZS5jdXJyZW50KCk7XG5cdFx0XHRcdFx0dGhpcy5uZXh0ID0gZS5wcm9wZXJ0eS52YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyksXG5cdFx0XHQnZHJhZy5vd2wuY2Fyb3VzZWwgZHJhZ2dlZC5vd2wuY2Fyb3VzZWwgdHJhbnNsYXRlZC5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlKSB7XG5cdFx0XHRcdFx0dGhpcy5zd2FwcGluZyA9IGUudHlwZSA9PSAndHJhbnNsYXRlZCc7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J3RyYW5zbGF0ZS5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlICYmIHRoaXMuc3dhcHBpbmcgJiYgKHRoaXMuY29yZS5vcHRpb25zLmFuaW1hdGVPdXQgfHwgdGhpcy5jb3JlLm9wdGlvbnMuYW5pbWF0ZUluKSkge1xuXHRcdFx0XHRcdHRoaXMuc3dhcCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKVxuXHRcdH07XG5cblx0XHR0aGlzLmNvcmUuJGVsZW1lbnQub24odGhpcy5oYW5kbGVycyk7XG5cdH07XG5cblx0LyoqXG5cdCAqIERlZmF1bHQgb3B0aW9ucy5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0QW5pbWF0ZS5EZWZhdWx0cyA9IHtcblx0XHRhbmltYXRlT3V0OiBmYWxzZSxcblx0XHRhbmltYXRlSW46IGZhbHNlXG5cdH07XG5cblx0LyoqXG5cdCAqIFRvZ2dsZXMgdGhlIGFuaW1hdGlvbiBjbGFzc2VzIHdoZW5ldmVyIGFuIHRyYW5zbGF0aW9ucyBzdGFydHMuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHJldHVybnMge0Jvb2xlYW58dW5kZWZpbmVkfVxuXHQgKi9cblx0QW5pbWF0ZS5wcm90b3R5cGUuc3dhcCA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0aWYgKHRoaXMuY29yZS5zZXR0aW5ncy5pdGVtcyAhPT0gMSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICghJC5zdXBwb3J0LmFuaW1hdGlvbiB8fCAhJC5zdXBwb3J0LnRyYW5zaXRpb24pIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmNvcmUuc3BlZWQoMCk7XG5cblx0XHR2YXIgbGVmdCxcblx0XHRcdGNsZWFyID0gJC5wcm94eSh0aGlzLmNsZWFyLCB0aGlzKSxcblx0XHRcdHByZXZpb3VzID0gdGhpcy5jb3JlLiRzdGFnZS5jaGlsZHJlbigpLmVxKHRoaXMucHJldmlvdXMpLFxuXHRcdFx0bmV4dCA9IHRoaXMuY29yZS4kc3RhZ2UuY2hpbGRyZW4oKS5lcSh0aGlzLm5leHQpLFxuXHRcdFx0aW5jb21pbmcgPSB0aGlzLmNvcmUuc2V0dGluZ3MuYW5pbWF0ZUluLFxuXHRcdFx0b3V0Z29pbmcgPSB0aGlzLmNvcmUuc2V0dGluZ3MuYW5pbWF0ZU91dDtcblxuXHRcdGlmICh0aGlzLmNvcmUuY3VycmVudCgpID09PSB0aGlzLnByZXZpb3VzKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKG91dGdvaW5nKSB7XG5cdFx0XHRsZWZ0ID0gdGhpcy5jb3JlLmNvb3JkaW5hdGVzKHRoaXMucHJldmlvdXMpIC0gdGhpcy5jb3JlLmNvb3JkaW5hdGVzKHRoaXMubmV4dCk7XG5cdFx0XHRwcmV2aW91cy5vbmUoJC5zdXBwb3J0LmFuaW1hdGlvbi5lbmQsIGNsZWFyKVxuXHRcdFx0XHQuY3NzKCB7ICdsZWZ0JzogbGVmdCArICdweCcgfSApXG5cdFx0XHRcdC5hZGRDbGFzcygnYW5pbWF0ZWQgb3dsLWFuaW1hdGVkLW91dCcpXG5cdFx0XHRcdC5hZGRDbGFzcyhvdXRnb2luZyk7XG5cdFx0fVxuXG5cdFx0aWYgKGluY29taW5nKSB7XG5cdFx0XHRuZXh0Lm9uZSgkLnN1cHBvcnQuYW5pbWF0aW9uLmVuZCwgY2xlYXIpXG5cdFx0XHRcdC5hZGRDbGFzcygnYW5pbWF0ZWQgb3dsLWFuaW1hdGVkLWluJylcblx0XHRcdFx0LmFkZENsYXNzKGluY29taW5nKTtcblx0XHR9XG5cdH07XG5cblx0QW5pbWF0ZS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbihlKSB7XG5cdFx0JChlLnRhcmdldCkuY3NzKCB7ICdsZWZ0JzogJycgfSApXG5cdFx0XHQucmVtb3ZlQ2xhc3MoJ2FuaW1hdGVkIG93bC1hbmltYXRlZC1vdXQgb3dsLWFuaW1hdGVkLWluJylcblx0XHRcdC5yZW1vdmVDbGFzcyh0aGlzLmNvcmUuc2V0dGluZ3MuYW5pbWF0ZUluKVxuXHRcdFx0LnJlbW92ZUNsYXNzKHRoaXMuY29yZS5zZXR0aW5ncy5hbmltYXRlT3V0KTtcblx0XHR0aGlzLmNvcmUub25UcmFuc2l0aW9uRW5kKCk7XG5cdH07XG5cblx0LyoqXG5cdCAqIERlc3Ryb3lzIHRoZSBwbHVnaW4uXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdEFuaW1hdGUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgaGFuZGxlciwgcHJvcGVydHk7XG5cblx0XHRmb3IgKGhhbmRsZXIgaW4gdGhpcy5oYW5kbGVycykge1xuXHRcdFx0dGhpcy5jb3JlLiRlbGVtZW50Lm9mZihoYW5kbGVyLCB0aGlzLmhhbmRsZXJzW2hhbmRsZXJdKTtcblx0XHR9XG5cdFx0Zm9yIChwcm9wZXJ0eSBpbiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKSkge1xuXHRcdFx0dHlwZW9mIHRoaXNbcHJvcGVydHldICE9ICdmdW5jdGlvbicgJiYgKHRoaXNbcHJvcGVydHldID0gbnVsbCk7XG5cdFx0fVxuXHR9O1xuXG5cdCQuZm4ub3dsQ2Fyb3VzZWwuQ29uc3RydWN0b3IuUGx1Z2lucy5BbmltYXRlID0gQW5pbWF0ZTtcblxufSkod2luZG93LlplcHRvIHx8IHdpbmRvdy5qUXVlcnksIHdpbmRvdywgZG9jdW1lbnQpO1xuXG4vKipcbiAqIEF1dG9wbGF5IFBsdWdpblxuICogQHZlcnNpb24gMi4zLjRcbiAqIEBhdXRob3IgQmFydG9zeiBXb2pjaWVjaG93c2tpXG4gKiBAYXV0aG9yIEFydHVzIEtvbGFub3dza2lcbiAqIEBhdXRob3IgRGF2aWQgRGV1dHNjaFxuICogQGF1dGhvciBUb20gRGUgQ2FsdXfDqVxuICogQGxpY2Vuc2UgVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKi9cbjsoZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKSB7XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgdGhlIGF1dG9wbGF5IHBsdWdpbi5cblx0ICogQGNsYXNzIFRoZSBBdXRvcGxheSBQbHVnaW5cblx0ICogQHBhcmFtIHtPd2x9IHNjb3BlIC0gVGhlIE93bCBDYXJvdXNlbFxuXHQgKi9cblx0dmFyIEF1dG9wbGF5ID0gZnVuY3Rpb24oY2Fyb3VzZWwpIHtcblx0XHQvKipcblx0XHQgKiBSZWZlcmVuY2UgdG8gdGhlIGNvcmUuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtPd2x9XG5cdFx0ICovXG5cdFx0dGhpcy5fY29yZSA9IGNhcm91c2VsO1xuXG5cdFx0LyoqXG5cdFx0ICogVGhlIGF1dG9wbGF5IHRpbWVvdXQgaWQuXG5cdFx0ICogQHR5cGUge051bWJlcn1cblx0XHQgKi9cblx0XHR0aGlzLl9jYWxsID0gbnVsbDtcblxuXHRcdC8qKlxuXHRcdCAqIERlcGVuZGluZyBvbiB0aGUgc3RhdGUgb2YgdGhlIHBsdWdpbiwgdGhpcyB2YXJpYWJsZSBjb250YWlucyBlaXRoZXJcblx0XHQgKiB0aGUgc3RhcnQgdGltZSBvZiB0aGUgdGltZXIgb3IgdGhlIGN1cnJlbnQgdGltZXIgdmFsdWUgaWYgaXQnc1xuXHRcdCAqIHBhdXNlZC4gU2luY2Ugd2Ugc3RhcnQgaW4gYSBwYXVzZWQgc3RhdGUgd2UgaW5pdGlhbGl6ZSB0aGUgdGltZXJcblx0XHQgKiB2YWx1ZS5cblx0XHQgKiBAdHlwZSB7TnVtYmVyfVxuXHRcdCAqL1xuXHRcdHRoaXMuX3RpbWUgPSAwO1xuXG5cdFx0LyoqXG5cdFx0ICogU3RvcmVzIHRoZSB0aW1lb3V0IGN1cnJlbnRseSB1c2VkLlxuXHRcdCAqIEB0eXBlIHtOdW1iZXJ9XG5cdFx0ICovXG5cdFx0dGhpcy5fdGltZW91dCA9IDA7XG5cblx0XHQvKipcblx0XHQgKiBJbmRpY2F0ZXMgd2hlbmV2ZXIgdGhlIGF1dG9wbGF5IGlzIHBhdXNlZC5cblx0XHQgKiBAdHlwZSB7Qm9vbGVhbn1cblx0XHQgKi9cblx0XHR0aGlzLl9wYXVzZWQgPSB0cnVlO1xuXG5cdFx0LyoqXG5cdFx0ICogQWxsIGV2ZW50IGhhbmRsZXJzLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7T2JqZWN0fVxuXHRcdCAqL1xuXHRcdHRoaXMuX2hhbmRsZXJzID0ge1xuXHRcdFx0J2NoYW5nZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSAmJiBlLnByb3BlcnR5Lm5hbWUgPT09ICdzZXR0aW5ncycpIHtcblx0XHRcdFx0XHRpZiAodGhpcy5fY29yZS5zZXR0aW5ncy5hdXRvcGxheSkge1xuXHRcdFx0XHRcdFx0dGhpcy5wbGF5KCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMuc3RvcCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmIChlLm5hbWVzcGFjZSAmJiBlLnByb3BlcnR5Lm5hbWUgPT09ICdwb3NpdGlvbicgJiYgdGhpcy5fcGF1c2VkKSB7XG5cdFx0XHRcdFx0Ly8gUmVzZXQgdGhlIHRpbWVyLiBUaGlzIGNvZGUgaXMgdHJpZ2dlcmVkIHdoZW4gdGhlIHBvc2l0aW9uXG5cdFx0XHRcdFx0Ly8gb2YgdGhlIGNhcm91c2VsIHdhcyBjaGFuZ2VkIHRocm91Z2ggdXNlciBpbnRlcmFjdGlvbi5cblx0XHRcdFx0XHR0aGlzLl90aW1lID0gMDtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyksXG5cdFx0XHQnaW5pdGlhbGl6ZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSAmJiB0aGlzLl9jb3JlLnNldHRpbmdzLmF1dG9wbGF5KSB7XG5cdFx0XHRcdFx0dGhpcy5wbGF5KCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J3BsYXkub3dsLmF1dG9wbGF5JzogJC5wcm94eShmdW5jdGlvbihlLCB0LCBzKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSkge1xuXHRcdFx0XHRcdHRoaXMucGxheSh0LCBzKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyksXG5cdFx0XHQnc3RvcC5vd2wuYXV0b3BsYXknOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlKSB7XG5cdFx0XHRcdFx0dGhpcy5zdG9wKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J21vdXNlb3Zlci5vd2wuYXV0b3BsYXknOiAkLnByb3h5KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAodGhpcy5fY29yZS5zZXR0aW5ncy5hdXRvcGxheUhvdmVyUGF1c2UgJiYgdGhpcy5fY29yZS5pcygncm90YXRpbmcnKSkge1xuXHRcdFx0XHRcdHRoaXMucGF1c2UoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyksXG5cdFx0XHQnbW91c2VsZWF2ZS5vd2wuYXV0b3BsYXknOiAkLnByb3h5KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAodGhpcy5fY29yZS5zZXR0aW5ncy5hdXRvcGxheUhvdmVyUGF1c2UgJiYgdGhpcy5fY29yZS5pcygncm90YXRpbmcnKSkge1xuXHRcdFx0XHRcdHRoaXMucGxheSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKSxcblx0XHRcdCd0b3VjaHN0YXJ0Lm93bC5jb3JlJzogJC5wcm94eShmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKHRoaXMuX2NvcmUuc2V0dGluZ3MuYXV0b3BsYXlIb3ZlclBhdXNlICYmIHRoaXMuX2NvcmUuaXMoJ3JvdGF0aW5nJykpIHtcblx0XHRcdFx0XHR0aGlzLnBhdXNlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J3RvdWNoZW5kLm93bC5jb3JlJzogJC5wcm94eShmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKHRoaXMuX2NvcmUuc2V0dGluZ3MuYXV0b3BsYXlIb3ZlclBhdXNlKSB7XG5cdFx0XHRcdFx0dGhpcy5wbGF5KCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpXG5cdFx0fTtcblxuXHRcdC8vIHJlZ2lzdGVyIGV2ZW50IGhhbmRsZXJzXG5cdFx0dGhpcy5fY29yZS4kZWxlbWVudC5vbih0aGlzLl9oYW5kbGVycyk7XG5cblx0XHQvLyBzZXQgZGVmYXVsdCBvcHRpb25zXG5cdFx0dGhpcy5fY29yZS5vcHRpb25zID0gJC5leHRlbmQoe30sIEF1dG9wbGF5LkRlZmF1bHRzLCB0aGlzLl9jb3JlLm9wdGlvbnMpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBEZWZhdWx0IG9wdGlvbnMuXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdEF1dG9wbGF5LkRlZmF1bHRzID0ge1xuXHRcdGF1dG9wbGF5OiBmYWxzZSxcblx0XHRhdXRvcGxheVRpbWVvdXQ6IDUwMDAsXG5cdFx0YXV0b3BsYXlIb3ZlclBhdXNlOiBmYWxzZSxcblx0XHRhdXRvcGxheVNwZWVkOiBmYWxzZVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBUcmFuc2l0aW9uIHRvIHRoZSBuZXh0IHNsaWRlIGFuZCBzZXQgYSB0aW1lb3V0IGZvciB0aGUgbmV4dCB0cmFuc2l0aW9uLlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge051bWJlcn0gW3NwZWVkXSAtIFRoZSBhbmltYXRpb24gc3BlZWQgZm9yIHRoZSBhbmltYXRpb25zLlxuXHQgKi9cblx0QXV0b3BsYXkucHJvdG90eXBlLl9uZXh0ID0gZnVuY3Rpb24oc3BlZWQpIHtcblx0XHR0aGlzLl9jYWxsID0gd2luZG93LnNldFRpbWVvdXQoXG5cdFx0XHQkLnByb3h5KHRoaXMuX25leHQsIHRoaXMsIHNwZWVkKSxcblx0XHRcdHRoaXMuX3RpbWVvdXQgKiAoTWF0aC5yb3VuZCh0aGlzLnJlYWQoKSAvIHRoaXMuX3RpbWVvdXQpICsgMSkgLSB0aGlzLnJlYWQoKVxuXHRcdCk7XG5cblx0XHRpZiAodGhpcy5fY29yZS5pcygnaW50ZXJhY3RpbmcnKSB8fCBkb2N1bWVudC5oaWRkZW4pIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5fY29yZS5uZXh0KHNwZWVkIHx8IHRoaXMuX2NvcmUuc2V0dGluZ3MuYXV0b3BsYXlTcGVlZCk7XG5cdH1cblxuXHQvKipcblx0ICogUmVhZHMgdGhlIGN1cnJlbnQgdGltZXIgdmFsdWUgd2hlbiB0aGUgdGltZXIgaXMgcGxheWluZy5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0QXV0b3BsYXkucHJvdG90eXBlLnJlYWQgPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSB0aGlzLl90aW1lO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTdGFydHMgdGhlIGF1dG9wbGF5LlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbdGltZW91dF0gLSBUaGUgaW50ZXJ2YWwgYmVmb3JlIHRoZSBuZXh0IGFuaW1hdGlvbiBzdGFydHMuXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbc3BlZWRdIC0gVGhlIGFuaW1hdGlvbiBzcGVlZCBmb3IgdGhlIGFuaW1hdGlvbnMuXG5cdCAqL1xuXHRBdXRvcGxheS5wcm90b3R5cGUucGxheSA9IGZ1bmN0aW9uKHRpbWVvdXQsIHNwZWVkKSB7XG5cdFx0dmFyIGVsYXBzZWQ7XG5cblx0XHRpZiAoIXRoaXMuX2NvcmUuaXMoJ3JvdGF0aW5nJykpIHtcblx0XHRcdHRoaXMuX2NvcmUuZW50ZXIoJ3JvdGF0aW5nJyk7XG5cdFx0fVxuXG5cdFx0dGltZW91dCA9IHRpbWVvdXQgfHwgdGhpcy5fY29yZS5zZXR0aW5ncy5hdXRvcGxheVRpbWVvdXQ7XG5cblx0XHQvLyBDYWxjdWxhdGUgdGhlIGVsYXBzZWQgdGltZSBzaW5jZSB0aGUgbGFzdCB0cmFuc2l0aW9uLiBJZiB0aGUgY2Fyb3VzZWxcblx0XHQvLyB3YXNuJ3QgcGxheWluZyB0aGlzIGNhbGN1bGF0aW9uIHdpbGwgeWllbGQgemVyby5cblx0XHRlbGFwc2VkID0gTWF0aC5taW4odGhpcy5fdGltZSAlICh0aGlzLl90aW1lb3V0IHx8IHRpbWVvdXQpLCB0aW1lb3V0KTtcblxuXHRcdGlmICh0aGlzLl9wYXVzZWQpIHtcblx0XHRcdC8vIFN0YXJ0IHRoZSBjbG9jay5cblx0XHRcdHRoaXMuX3RpbWUgPSB0aGlzLnJlYWQoKTtcblx0XHRcdHRoaXMuX3BhdXNlZCA9IGZhbHNlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBDbGVhciB0aGUgYWN0aXZlIHRpbWVvdXQgdG8gYWxsb3cgcmVwbGFjZW1lbnQuXG5cdFx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuX2NhbGwpO1xuXHRcdH1cblxuXHRcdC8vIEFkanVzdCB0aGUgb3JpZ2luIG9mIHRoZSB0aW1lciB0byBtYXRjaCB0aGUgbmV3IHRpbWVvdXQgdmFsdWUuXG5cdFx0dGhpcy5fdGltZSArPSB0aGlzLnJlYWQoKSAlIHRpbWVvdXQgLSBlbGFwc2VkO1xuXG5cdFx0dGhpcy5fdGltZW91dCA9IHRpbWVvdXQ7XG5cdFx0dGhpcy5fY2FsbCA9IHdpbmRvdy5zZXRUaW1lb3V0KCQucHJveHkodGhpcy5fbmV4dCwgdGhpcywgc3BlZWQpLCB0aW1lb3V0IC0gZWxhcHNlZCk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFN0b3BzIHRoZSBhdXRvcGxheS5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0QXV0b3BsYXkucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbigpIHtcblx0XHRpZiAodGhpcy5fY29yZS5pcygncm90YXRpbmcnKSkge1xuXHRcdFx0Ly8gUmVzZXQgdGhlIGNsb2NrLlxuXHRcdFx0dGhpcy5fdGltZSA9IDA7XG5cdFx0XHR0aGlzLl9wYXVzZWQgPSB0cnVlO1xuXG5cdFx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuX2NhbGwpO1xuXHRcdFx0dGhpcy5fY29yZS5sZWF2ZSgncm90YXRpbmcnKTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIFBhdXNlcyB0aGUgYXV0b3BsYXkuXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdEF1dG9wbGF5LnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICh0aGlzLl9jb3JlLmlzKCdyb3RhdGluZycpICYmICF0aGlzLl9wYXVzZWQpIHtcblx0XHRcdC8vIFBhdXNlIHRoZSBjbG9jay5cblx0XHRcdHRoaXMuX3RpbWUgPSB0aGlzLnJlYWQoKTtcblx0XHRcdHRoaXMuX3BhdXNlZCA9IHRydWU7XG5cblx0XHRcdHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5fY2FsbCk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBEZXN0cm95cyB0aGUgcGx1Z2luLlxuXHQgKi9cblx0QXV0b3BsYXkucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgaGFuZGxlciwgcHJvcGVydHk7XG5cblx0XHR0aGlzLnN0b3AoKTtcblxuXHRcdGZvciAoaGFuZGxlciBpbiB0aGlzLl9oYW5kbGVycykge1xuXHRcdFx0dGhpcy5fY29yZS4kZWxlbWVudC5vZmYoaGFuZGxlciwgdGhpcy5faGFuZGxlcnNbaGFuZGxlcl0pO1xuXHRcdH1cblx0XHRmb3IgKHByb3BlcnR5IGluIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpKSB7XG5cdFx0XHR0eXBlb2YgdGhpc1twcm9wZXJ0eV0gIT0gJ2Z1bmN0aW9uJyAmJiAodGhpc1twcm9wZXJ0eV0gPSBudWxsKTtcblx0XHR9XG5cdH07XG5cblx0JC5mbi5vd2xDYXJvdXNlbC5Db25zdHJ1Y3Rvci5QbHVnaW5zLmF1dG9wbGF5ID0gQXV0b3BsYXk7XG5cbn0pKHdpbmRvdy5aZXB0byB8fCB3aW5kb3cualF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50KTtcblxuLyoqXG4gKiBOYXZpZ2F0aW9uIFBsdWdpblxuICogQHZlcnNpb24gMi4zLjRcbiAqIEBhdXRob3IgQXJ0dXMgS29sYW5vd3NraVxuICogQGF1dGhvciBEYXZpZCBEZXV0c2NoXG4gKiBAbGljZW5zZSBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqL1xuOyhmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIHRoZSBuYXZpZ2F0aW9uIHBsdWdpbi5cblx0ICogQGNsYXNzIFRoZSBOYXZpZ2F0aW9uIFBsdWdpblxuXHQgKiBAcGFyYW0ge093bH0gY2Fyb3VzZWwgLSBUaGUgT3dsIENhcm91c2VsLlxuXHQgKi9cblx0dmFyIE5hdmlnYXRpb24gPSBmdW5jdGlvbihjYXJvdXNlbCkge1xuXHRcdC8qKlxuXHRcdCAqIFJlZmVyZW5jZSB0byB0aGUgY29yZS5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge093bH1cblx0XHQgKi9cblx0XHR0aGlzLl9jb3JlID0gY2Fyb3VzZWw7XG5cblx0XHQvKipcblx0XHQgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgcGx1Z2luIGlzIGluaXRpYWxpemVkIG9yIG5vdC5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge0Jvb2xlYW59XG5cdFx0ICovXG5cdFx0dGhpcy5faW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuXHRcdC8qKlxuXHRcdCAqIFRoZSBjdXJyZW50IHBhZ2luZyBpbmRleGVzLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7QXJyYXl9XG5cdFx0ICovXG5cdFx0dGhpcy5fcGFnZXMgPSBbXTtcblxuXHRcdC8qKlxuXHRcdCAqIEFsbCBET00gZWxlbWVudHMgb2YgdGhlIHVzZXIgaW50ZXJmYWNlLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7T2JqZWN0fVxuXHRcdCAqL1xuXHRcdHRoaXMuX2NvbnRyb2xzID0ge307XG5cblx0XHQvKipcblx0XHQgKiBNYXJrdXAgZm9yIGFuIGluZGljYXRvci5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge0FycmF5LjxTdHJpbmc+fVxuXHRcdCAqL1xuXHRcdHRoaXMuX3RlbXBsYXRlcyA9IFtdO1xuXG5cdFx0LyoqXG5cdFx0ICogVGhlIGNhcm91c2VsIGVsZW1lbnQuXG5cdFx0ICogQHR5cGUge2pRdWVyeX1cblx0XHQgKi9cblx0XHR0aGlzLiRlbGVtZW50ID0gdGhpcy5fY29yZS4kZWxlbWVudDtcblxuXHRcdC8qKlxuXHRcdCAqIE92ZXJyaWRkZW4gbWV0aG9kcyBvZiB0aGUgY2Fyb3VzZWwuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtPYmplY3R9XG5cdFx0ICovXG5cdFx0dGhpcy5fb3ZlcnJpZGVzID0ge1xuXHRcdFx0bmV4dDogdGhpcy5fY29yZS5uZXh0LFxuXHRcdFx0cHJldjogdGhpcy5fY29yZS5wcmV2LFxuXHRcdFx0dG86IHRoaXMuX2NvcmUudG9cblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogQWxsIGV2ZW50IGhhbmRsZXJzLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7T2JqZWN0fVxuXHRcdCAqL1xuXHRcdHRoaXMuX2hhbmRsZXJzID0ge1xuXHRcdFx0J3ByZXBhcmVkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UgJiYgdGhpcy5fY29yZS5zZXR0aW5ncy5kb3RzRGF0YSkge1xuXHRcdFx0XHRcdHRoaXMuX3RlbXBsYXRlcy5wdXNoKCc8ZGl2IGNsYXNzPVwiJyArIHRoaXMuX2NvcmUuc2V0dGluZ3MuZG90Q2xhc3MgKyAnXCI+JyArXG5cdFx0XHRcdFx0XHQkKGUuY29udGVudCkuZmluZCgnW2RhdGEtZG90XScpLmFkZEJhY2soJ1tkYXRhLWRvdF0nKS5hdHRyKCdkYXRhLWRvdCcpICsgJzwvZGl2PicpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKSxcblx0XHRcdCdhZGRlZC5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlICYmIHRoaXMuX2NvcmUuc2V0dGluZ3MuZG90c0RhdGEpIHtcblx0XHRcdFx0XHR0aGlzLl90ZW1wbGF0ZXMuc3BsaWNlKGUucG9zaXRpb24sIDAsIHRoaXMuX3RlbXBsYXRlcy5wb3AoKSk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J3JlbW92ZS5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlICYmIHRoaXMuX2NvcmUuc2V0dGluZ3MuZG90c0RhdGEpIHtcblx0XHRcdFx0XHR0aGlzLl90ZW1wbGF0ZXMuc3BsaWNlKGUucG9zaXRpb24sIDEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKSxcblx0XHRcdCdjaGFuZ2VkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UgJiYgZS5wcm9wZXJ0eS5uYW1lID09ICdwb3NpdGlvbicpIHtcblx0XHRcdFx0XHR0aGlzLmRyYXcoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyksXG5cdFx0XHQnaW5pdGlhbGl6ZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSAmJiAhdGhpcy5faW5pdGlhbGl6ZWQpIHtcblx0XHRcdFx0XHR0aGlzLl9jb3JlLnRyaWdnZXIoJ2luaXRpYWxpemUnLCBudWxsLCAnbmF2aWdhdGlvbicpO1xuXHRcdFx0XHRcdHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHRcdFx0XHRcdHRoaXMudXBkYXRlKCk7XG5cdFx0XHRcdFx0dGhpcy5kcmF3KCk7XG5cdFx0XHRcdFx0dGhpcy5faW5pdGlhbGl6ZWQgPSB0cnVlO1xuXHRcdFx0XHRcdHRoaXMuX2NvcmUudHJpZ2dlcignaW5pdGlhbGl6ZWQnLCBudWxsLCAnbmF2aWdhdGlvbicpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKSxcblx0XHRcdCdyZWZyZXNoZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSAmJiB0aGlzLl9pbml0aWFsaXplZCkge1xuXHRcdFx0XHRcdHRoaXMuX2NvcmUudHJpZ2dlcigncmVmcmVzaCcsIG51bGwsICduYXZpZ2F0aW9uJyk7XG5cdFx0XHRcdFx0dGhpcy51cGRhdGUoKTtcblx0XHRcdFx0XHR0aGlzLmRyYXcoKTtcblx0XHRcdFx0XHR0aGlzLl9jb3JlLnRyaWdnZXIoJ3JlZnJlc2hlZCcsIG51bGwsICduYXZpZ2F0aW9uJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpXG5cdFx0fTtcblxuXHRcdC8vIHNldCBkZWZhdWx0IG9wdGlvbnNcblx0XHR0aGlzLl9jb3JlLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgTmF2aWdhdGlvbi5EZWZhdWx0cywgdGhpcy5fY29yZS5vcHRpb25zKTtcblxuXHRcdC8vIHJlZ2lzdGVyIGV2ZW50IGhhbmRsZXJzXG5cdFx0dGhpcy4kZWxlbWVudC5vbih0aGlzLl9oYW5kbGVycyk7XG5cdH07XG5cblx0LyoqXG5cdCAqIERlZmF1bHQgb3B0aW9ucy5cblx0ICogQHB1YmxpY1xuXHQgKiBAdG9kbyBSZW5hbWUgYHNsaWRlQnlgIHRvIGBuYXZCeWBcblx0ICovXG5cdE5hdmlnYXRpb24uRGVmYXVsdHMgPSB7XG5cdFx0bmF2OiBmYWxzZSxcblx0XHRuYXZUZXh0OiBbXG5cdFx0XHQnPHNwYW4gYXJpYS1sYWJlbD1cIicgKyAnUHJldmlvdXMnICsgJ1wiPiYjeDIwMzk7PC9zcGFuPicsXG5cdFx0XHQnPHNwYW4gYXJpYS1sYWJlbD1cIicgKyAnTmV4dCcgKyAnXCI+JiN4MjAzYTs8L3NwYW4+J1xuXHRcdF0sXG5cdFx0bmF2U3BlZWQ6IGZhbHNlLFxuXHRcdG5hdkVsZW1lbnQ6ICdidXR0b24gdHlwZT1cImJ1dHRvblwiIHJvbGU9XCJwcmVzZW50YXRpb25cIicsXG5cdFx0bmF2Q29udGFpbmVyOiBmYWxzZSxcblx0XHRuYXZDb250YWluZXJDbGFzczogJ293bC1uYXYnLFxuXHRcdG5hdkNsYXNzOiBbXG5cdFx0XHQnb3dsLXByZXYnLFxuXHRcdFx0J293bC1uZXh0J1xuXHRcdF0sXG5cdFx0c2xpZGVCeTogMSxcblx0XHRkb3RDbGFzczogJ293bC1kb3QnLFxuXHRcdGRvdHNDbGFzczogJ293bC1kb3RzJyxcblx0XHRkb3RzOiB0cnVlLFxuXHRcdGRvdHNFYWNoOiBmYWxzZSxcblx0XHRkb3RzRGF0YTogZmFsc2UsXG5cdFx0ZG90c1NwZWVkOiBmYWxzZSxcblx0XHRkb3RzQ29udGFpbmVyOiBmYWxzZVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBJbml0aWFsaXplcyB0aGUgbGF5b3V0IG9mIHRoZSBwbHVnaW4gYW5kIGV4dGVuZHMgdGhlIGNhcm91c2VsLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqL1xuXHROYXZpZ2F0aW9uLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG92ZXJyaWRlLFxuXHRcdFx0c2V0dGluZ3MgPSB0aGlzLl9jb3JlLnNldHRpbmdzO1xuXG5cdFx0Ly8gY3JlYXRlIERPTSBzdHJ1Y3R1cmUgZm9yIHJlbGF0aXZlIG5hdmlnYXRpb25cblx0XHR0aGlzLl9jb250cm9scy4kcmVsYXRpdmUgPSAoc2V0dGluZ3MubmF2Q29udGFpbmVyID8gJChzZXR0aW5ncy5uYXZDb250YWluZXIpXG5cdFx0XHQ6ICQoJzxkaXY+JykuYWRkQ2xhc3Moc2V0dGluZ3MubmF2Q29udGFpbmVyQ2xhc3MpLmFwcGVuZFRvKHRoaXMuJGVsZW1lbnQpKS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcblxuXHRcdHRoaXMuX2NvbnRyb2xzLiRwcmV2aW91cyA9ICQoJzwnICsgc2V0dGluZ3MubmF2RWxlbWVudCArICc+Jylcblx0XHRcdC5hZGRDbGFzcyhzZXR0aW5ncy5uYXZDbGFzc1swXSlcblx0XHRcdC5odG1sKHNldHRpbmdzLm5hdlRleHRbMF0pXG5cdFx0XHQucHJlcGVuZFRvKHRoaXMuX2NvbnRyb2xzLiRyZWxhdGl2ZSlcblx0XHRcdC5vbignY2xpY2snLCAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0dGhpcy5wcmV2KHNldHRpbmdzLm5hdlNwZWVkKTtcblx0XHRcdH0sIHRoaXMpKTtcblx0XHR0aGlzLl9jb250cm9scy4kbmV4dCA9ICQoJzwnICsgc2V0dGluZ3MubmF2RWxlbWVudCArICc+Jylcblx0XHRcdC5hZGRDbGFzcyhzZXR0aW5ncy5uYXZDbGFzc1sxXSlcblx0XHRcdC5odG1sKHNldHRpbmdzLm5hdlRleHRbMV0pXG5cdFx0XHQuYXBwZW5kVG8odGhpcy5fY29udHJvbHMuJHJlbGF0aXZlKVxuXHRcdFx0Lm9uKCdjbGljaycsICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHR0aGlzLm5leHQoc2V0dGluZ3MubmF2U3BlZWQpO1xuXHRcdFx0fSwgdGhpcykpO1xuXG5cdFx0Ly8gY3JlYXRlIERPTSBzdHJ1Y3R1cmUgZm9yIGFic29sdXRlIG5hdmlnYXRpb25cblx0XHRpZiAoIXNldHRpbmdzLmRvdHNEYXRhKSB7XG5cdFx0XHR0aGlzLl90ZW1wbGF0ZXMgPSBbICQoJzxidXR0b24gcm9sZT1cImJ1dHRvblwiPicpXG5cdFx0XHRcdC5hZGRDbGFzcyhzZXR0aW5ncy5kb3RDbGFzcylcblx0XHRcdFx0LmFwcGVuZCgkKCc8c3Bhbj4nKSlcblx0XHRcdFx0LnByb3AoJ291dGVySFRNTCcpIF07XG5cdFx0fVxuXG5cdFx0dGhpcy5fY29udHJvbHMuJGFic29sdXRlID0gKHNldHRpbmdzLmRvdHNDb250YWluZXIgPyAkKHNldHRpbmdzLmRvdHNDb250YWluZXIpXG5cdFx0XHQ6ICQoJzxkaXY+JykuYWRkQ2xhc3Moc2V0dGluZ3MuZG90c0NsYXNzKS5hcHBlbmRUbyh0aGlzLiRlbGVtZW50KSkuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG5cblx0XHR0aGlzLl9jb250cm9scy4kYWJzb2x1dGUub24oJ2NsaWNrJywgJ2J1dHRvbicsICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0dmFyIGluZGV4ID0gJChlLnRhcmdldCkucGFyZW50KCkuaXModGhpcy5fY29udHJvbHMuJGFic29sdXRlKVxuXHRcdFx0XHQ/ICQoZS50YXJnZXQpLmluZGV4KCkgOiAkKGUudGFyZ2V0KS5wYXJlbnQoKS5pbmRleCgpO1xuXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdHRoaXMudG8oaW5kZXgsIHNldHRpbmdzLmRvdHNTcGVlZCk7XG5cdFx0fSwgdGhpcykpO1xuXG5cdFx0LyokZWwub24oJ2ZvY3VzaW4nLCBmdW5jdGlvbigpIHtcblx0XHRcdCQoZG9jdW1lbnQpLm9mZihcIi5jYXJvdXNlbFwiKTtcblxuXHRcdFx0JChkb2N1bWVudCkub24oJ2tleWRvd24uY2Fyb3VzZWwnLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmKGUua2V5Q29kZSA9PSAzNykge1xuXHRcdFx0XHRcdCRlbC50cmlnZ2VyKCdwcmV2Lm93bCcpXG5cdFx0XHRcdH1cblx0XHRcdFx0aWYoZS5rZXlDb2RlID09IDM5KSB7XG5cdFx0XHRcdFx0JGVsLnRyaWdnZXIoJ25leHQub3dsJylcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSk7Ki9cblxuXHRcdC8vIG92ZXJyaWRlIHB1YmxpYyBtZXRob2RzIG9mIHRoZSBjYXJvdXNlbFxuXHRcdGZvciAob3ZlcnJpZGUgaW4gdGhpcy5fb3ZlcnJpZGVzKSB7XG5cdFx0XHR0aGlzLl9jb3JlW292ZXJyaWRlXSA9ICQucHJveHkodGhpc1tvdmVycmlkZV0sIHRoaXMpO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogRGVzdHJveXMgdGhlIHBsdWdpbi5cblx0ICogQHByb3RlY3RlZFxuXHQgKi9cblx0TmF2aWdhdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBoYW5kbGVyLCBjb250cm9sLCBwcm9wZXJ0eSwgb3ZlcnJpZGUsIHNldHRpbmdzO1xuXHRcdHNldHRpbmdzID0gdGhpcy5fY29yZS5zZXR0aW5ncztcblxuXHRcdGZvciAoaGFuZGxlciBpbiB0aGlzLl9oYW5kbGVycykge1xuXHRcdFx0dGhpcy4kZWxlbWVudC5vZmYoaGFuZGxlciwgdGhpcy5faGFuZGxlcnNbaGFuZGxlcl0pO1xuXHRcdH1cblx0XHRmb3IgKGNvbnRyb2wgaW4gdGhpcy5fY29udHJvbHMpIHtcblx0XHRcdGlmIChjb250cm9sID09PSAnJHJlbGF0aXZlJyAmJiBzZXR0aW5ncy5uYXZDb250YWluZXIpIHtcblx0XHRcdFx0dGhpcy5fY29udHJvbHNbY29udHJvbF0uaHRtbCgnJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLl9jb250cm9sc1tjb250cm9sXS5yZW1vdmUoKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Zm9yIChvdmVycmlkZSBpbiB0aGlzLm92ZXJpZGVzKSB7XG5cdFx0XHR0aGlzLl9jb3JlW292ZXJyaWRlXSA9IHRoaXMuX292ZXJyaWRlc1tvdmVycmlkZV07XG5cdFx0fVxuXHRcdGZvciAocHJvcGVydHkgaW4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcykpIHtcblx0XHRcdHR5cGVvZiB0aGlzW3Byb3BlcnR5XSAhPSAnZnVuY3Rpb24nICYmICh0aGlzW3Byb3BlcnR5XSA9IG51bGwpO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogVXBkYXRlcyB0aGUgaW50ZXJuYWwgc3RhdGUuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICovXG5cdE5hdmlnYXRpb24ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBpLCBqLCBrLFxuXHRcdFx0bG93ZXIgPSB0aGlzLl9jb3JlLmNsb25lcygpLmxlbmd0aCAvIDIsXG5cdFx0XHR1cHBlciA9IGxvd2VyICsgdGhpcy5fY29yZS5pdGVtcygpLmxlbmd0aCxcblx0XHRcdG1heGltdW0gPSB0aGlzLl9jb3JlLm1heGltdW0odHJ1ZSksXG5cdFx0XHRzZXR0aW5ncyA9IHRoaXMuX2NvcmUuc2V0dGluZ3MsXG5cdFx0XHRzaXplID0gc2V0dGluZ3MuY2VudGVyIHx8IHNldHRpbmdzLmF1dG9XaWR0aCB8fCBzZXR0aW5ncy5kb3RzRGF0YVxuXHRcdFx0XHQ/IDEgOiBzZXR0aW5ncy5kb3RzRWFjaCB8fCBzZXR0aW5ncy5pdGVtcztcblxuXHRcdGlmIChzZXR0aW5ncy5zbGlkZUJ5ICE9PSAncGFnZScpIHtcblx0XHRcdHNldHRpbmdzLnNsaWRlQnkgPSBNYXRoLm1pbihzZXR0aW5ncy5zbGlkZUJ5LCBzZXR0aW5ncy5pdGVtcyk7XG5cdFx0fVxuXG5cdFx0aWYgKHNldHRpbmdzLmRvdHMgfHwgc2V0dGluZ3Muc2xpZGVCeSA9PSAncGFnZScpIHtcblx0XHRcdHRoaXMuX3BhZ2VzID0gW107XG5cblx0XHRcdGZvciAoaSA9IGxvd2VyLCBqID0gMCwgayA9IDA7IGkgPCB1cHBlcjsgaSsrKSB7XG5cdFx0XHRcdGlmIChqID49IHNpemUgfHwgaiA9PT0gMCkge1xuXHRcdFx0XHRcdHRoaXMuX3BhZ2VzLnB1c2goe1xuXHRcdFx0XHRcdFx0c3RhcnQ6IE1hdGgubWluKG1heGltdW0sIGkgLSBsb3dlciksXG5cdFx0XHRcdFx0XHRlbmQ6IGkgLSBsb3dlciArIHNpemUgLSAxXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0aWYgKE1hdGgubWluKG1heGltdW0sIGkgLSBsb3dlcikgPT09IG1heGltdW0pIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRqID0gMCwgKytrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGogKz0gdGhpcy5fY29yZS5tZXJnZXJzKHRoaXMuX2NvcmUucmVsYXRpdmUoaSkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogRHJhd3MgdGhlIHVzZXIgaW50ZXJmYWNlLlxuXHQgKiBAdG9kbyBUaGUgb3B0aW9uIGBkb3RzRGF0YWAgd29udCB3b3JrLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqL1xuXHROYXZpZ2F0aW9uLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGRpZmZlcmVuY2UsXG5cdFx0XHRzZXR0aW5ncyA9IHRoaXMuX2NvcmUuc2V0dGluZ3MsXG5cdFx0XHRkaXNhYmxlZCA9IHRoaXMuX2NvcmUuaXRlbXMoKS5sZW5ndGggPD0gc2V0dGluZ3MuaXRlbXMsXG5cdFx0XHRpbmRleCA9IHRoaXMuX2NvcmUucmVsYXRpdmUodGhpcy5fY29yZS5jdXJyZW50KCkpLFxuXHRcdFx0bG9vcCA9IHNldHRpbmdzLmxvb3AgfHwgc2V0dGluZ3MucmV3aW5kO1xuXG5cdFx0dGhpcy5fY29udHJvbHMuJHJlbGF0aXZlLnRvZ2dsZUNsYXNzKCdkaXNhYmxlZCcsICFzZXR0aW5ncy5uYXYgfHwgZGlzYWJsZWQpO1xuXG5cdFx0aWYgKHNldHRpbmdzLm5hdikge1xuXHRcdFx0dGhpcy5fY29udHJvbHMuJHByZXZpb3VzLnRvZ2dsZUNsYXNzKCdkaXNhYmxlZCcsICFsb29wICYmIGluZGV4IDw9IHRoaXMuX2NvcmUubWluaW11bSh0cnVlKSk7XG5cdFx0XHR0aGlzLl9jb250cm9scy4kbmV4dC50b2dnbGVDbGFzcygnZGlzYWJsZWQnLCAhbG9vcCAmJiBpbmRleCA+PSB0aGlzLl9jb3JlLm1heGltdW0odHJ1ZSkpO1xuXHRcdH1cblxuXHRcdHRoaXMuX2NvbnRyb2xzLiRhYnNvbHV0ZS50b2dnbGVDbGFzcygnZGlzYWJsZWQnLCAhc2V0dGluZ3MuZG90cyB8fCBkaXNhYmxlZCk7XG5cblx0XHRpZiAoc2V0dGluZ3MuZG90cykge1xuXHRcdFx0ZGlmZmVyZW5jZSA9IHRoaXMuX3BhZ2VzLmxlbmd0aCAtIHRoaXMuX2NvbnRyb2xzLiRhYnNvbHV0ZS5jaGlsZHJlbigpLmxlbmd0aDtcblxuXHRcdFx0aWYgKHNldHRpbmdzLmRvdHNEYXRhICYmIGRpZmZlcmVuY2UgIT09IDApIHtcblx0XHRcdFx0dGhpcy5fY29udHJvbHMuJGFic29sdXRlLmh0bWwodGhpcy5fdGVtcGxhdGVzLmpvaW4oJycpKTtcblx0XHRcdH0gZWxzZSBpZiAoZGlmZmVyZW5jZSA+IDApIHtcblx0XHRcdFx0dGhpcy5fY29udHJvbHMuJGFic29sdXRlLmFwcGVuZChuZXcgQXJyYXkoZGlmZmVyZW5jZSArIDEpLmpvaW4odGhpcy5fdGVtcGxhdGVzWzBdKSk7XG5cdFx0XHR9IGVsc2UgaWYgKGRpZmZlcmVuY2UgPCAwKSB7XG5cdFx0XHRcdHRoaXMuX2NvbnRyb2xzLiRhYnNvbHV0ZS5jaGlsZHJlbigpLnNsaWNlKGRpZmZlcmVuY2UpLnJlbW92ZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl9jb250cm9scy4kYWJzb2x1dGUuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdHRoaXMuX2NvbnRyb2xzLiRhYnNvbHV0ZS5jaGlsZHJlbigpLmVxKCQuaW5BcnJheSh0aGlzLmN1cnJlbnQoKSwgdGhpcy5fcGFnZXMpKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBFeHRlbmRzIGV2ZW50IGRhdGEuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBUaGUgZXZlbnQgb2JqZWN0IHdoaWNoIGdldHMgdGhyb3duLlxuXHQgKi9cblx0TmF2aWdhdGlvbi5wcm90b3R5cGUub25UcmlnZ2VyID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHR2YXIgc2V0dGluZ3MgPSB0aGlzLl9jb3JlLnNldHRpbmdzO1xuXG5cdFx0ZXZlbnQucGFnZSA9IHtcblx0XHRcdGluZGV4OiAkLmluQXJyYXkodGhpcy5jdXJyZW50KCksIHRoaXMuX3BhZ2VzKSxcblx0XHRcdGNvdW50OiB0aGlzLl9wYWdlcy5sZW5ndGgsXG5cdFx0XHRzaXplOiBzZXR0aW5ncyAmJiAoc2V0dGluZ3MuY2VudGVyIHx8IHNldHRpbmdzLmF1dG9XaWR0aCB8fCBzZXR0aW5ncy5kb3RzRGF0YVxuXHRcdFx0XHQ/IDEgOiBzZXR0aW5ncy5kb3RzRWFjaCB8fCBzZXR0aW5ncy5pdGVtcylcblx0XHR9O1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBHZXRzIHRoZSBjdXJyZW50IHBhZ2UgcG9zaXRpb24gb2YgdGhlIGNhcm91c2VsLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9XG5cdCAqL1xuXHROYXZpZ2F0aW9uLnByb3RvdHlwZS5jdXJyZW50ID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGN1cnJlbnQgPSB0aGlzLl9jb3JlLnJlbGF0aXZlKHRoaXMuX2NvcmUuY3VycmVudCgpKTtcblx0XHRyZXR1cm4gJC5ncmVwKHRoaXMuX3BhZ2VzLCAkLnByb3h5KGZ1bmN0aW9uKHBhZ2UsIGluZGV4KSB7XG5cdFx0XHRyZXR1cm4gcGFnZS5zdGFydCA8PSBjdXJyZW50ICYmIHBhZ2UuZW5kID49IGN1cnJlbnQ7XG5cdFx0fSwgdGhpcykpLnBvcCgpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBHZXRzIHRoZSBjdXJyZW50IHN1Y2Nlc29yL3ByZWRlY2Vzc29yIHBvc2l0aW9uLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9XG5cdCAqL1xuXHROYXZpZ2F0aW9uLnByb3RvdHlwZS5nZXRQb3NpdGlvbiA9IGZ1bmN0aW9uKHN1Y2Nlc3Nvcikge1xuXHRcdHZhciBwb3NpdGlvbiwgbGVuZ3RoLFxuXHRcdFx0c2V0dGluZ3MgPSB0aGlzLl9jb3JlLnNldHRpbmdzO1xuXG5cdFx0aWYgKHNldHRpbmdzLnNsaWRlQnkgPT0gJ3BhZ2UnKSB7XG5cdFx0XHRwb3NpdGlvbiA9ICQuaW5BcnJheSh0aGlzLmN1cnJlbnQoKSwgdGhpcy5fcGFnZXMpO1xuXHRcdFx0bGVuZ3RoID0gdGhpcy5fcGFnZXMubGVuZ3RoO1xuXHRcdFx0c3VjY2Vzc29yID8gKytwb3NpdGlvbiA6IC0tcG9zaXRpb247XG5cdFx0XHRwb3NpdGlvbiA9IHRoaXMuX3BhZ2VzWygocG9zaXRpb24gJSBsZW5ndGgpICsgbGVuZ3RoKSAlIGxlbmd0aF0uc3RhcnQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHBvc2l0aW9uID0gdGhpcy5fY29yZS5yZWxhdGl2ZSh0aGlzLl9jb3JlLmN1cnJlbnQoKSk7XG5cdFx0XHRsZW5ndGggPSB0aGlzLl9jb3JlLml0ZW1zKCkubGVuZ3RoO1xuXHRcdFx0c3VjY2Vzc29yID8gcG9zaXRpb24gKz0gc2V0dGluZ3Muc2xpZGVCeSA6IHBvc2l0aW9uIC09IHNldHRpbmdzLnNsaWRlQnk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHBvc2l0aW9uO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTbGlkZXMgdG8gdGhlIG5leHQgaXRlbSBvciBwYWdlLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbc3BlZWQ9ZmFsc2VdIC0gVGhlIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGZvciB0aGUgdHJhbnNpdGlvbi5cblx0ICovXG5cdE5hdmlnYXRpb24ucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbihzcGVlZCkge1xuXHRcdCQucHJveHkodGhpcy5fb3ZlcnJpZGVzLnRvLCB0aGlzLl9jb3JlKSh0aGlzLmdldFBvc2l0aW9uKHRydWUpLCBzcGVlZCk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNsaWRlcyB0byB0aGUgcHJldmlvdXMgaXRlbSBvciBwYWdlLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbc3BlZWQ9ZmFsc2VdIC0gVGhlIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGZvciB0aGUgdHJhbnNpdGlvbi5cblx0ICovXG5cdE5hdmlnYXRpb24ucHJvdG90eXBlLnByZXYgPSBmdW5jdGlvbihzcGVlZCkge1xuXHRcdCQucHJveHkodGhpcy5fb3ZlcnJpZGVzLnRvLCB0aGlzLl9jb3JlKSh0aGlzLmdldFBvc2l0aW9uKGZhbHNlKSwgc3BlZWQpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTbGlkZXMgdG8gdGhlIHNwZWNpZmllZCBpdGVtIG9yIHBhZ2UuXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHBvc2l0aW9uIC0gVGhlIHBvc2l0aW9uIG9mIHRoZSBpdGVtIG9yIHBhZ2UuXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbc3BlZWRdIC0gVGhlIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGZvciB0aGUgdHJhbnNpdGlvbi5cblx0ICogQHBhcmFtIHtCb29sZWFufSBbc3RhbmRhcmQ9ZmFsc2VdIC0gV2hldGhlciB0byB1c2UgdGhlIHN0YW5kYXJkIGJlaGF2aW91ciBvciBub3QuXG5cdCAqL1xuXHROYXZpZ2F0aW9uLnByb3RvdHlwZS50byA9IGZ1bmN0aW9uKHBvc2l0aW9uLCBzcGVlZCwgc3RhbmRhcmQpIHtcblx0XHR2YXIgbGVuZ3RoO1xuXG5cdFx0aWYgKCFzdGFuZGFyZCAmJiB0aGlzLl9wYWdlcy5sZW5ndGgpIHtcblx0XHRcdGxlbmd0aCA9IHRoaXMuX3BhZ2VzLmxlbmd0aDtcblx0XHRcdCQucHJveHkodGhpcy5fb3ZlcnJpZGVzLnRvLCB0aGlzLl9jb3JlKSh0aGlzLl9wYWdlc1soKHBvc2l0aW9uICUgbGVuZ3RoKSArIGxlbmd0aCkgJSBsZW5ndGhdLnN0YXJ0LCBzcGVlZCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQucHJveHkodGhpcy5fb3ZlcnJpZGVzLnRvLCB0aGlzLl9jb3JlKShwb3NpdGlvbiwgc3BlZWQpO1xuXHRcdH1cblx0fTtcblxuXHQkLmZuLm93bENhcm91c2VsLkNvbnN0cnVjdG9yLlBsdWdpbnMuTmF2aWdhdGlvbiA9IE5hdmlnYXRpb247XG5cbn0pKHdpbmRvdy5aZXB0byB8fCB3aW5kb3cualF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50KTtcblxuLyoqXG4gKiBIYXNoIFBsdWdpblxuICogQHZlcnNpb24gMi4zLjRcbiAqIEBhdXRob3IgQXJ0dXMgS29sYW5vd3NraVxuICogQGF1dGhvciBEYXZpZCBEZXV0c2NoXG4gKiBAbGljZW5zZSBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqL1xuOyhmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIHRoZSBoYXNoIHBsdWdpbi5cblx0ICogQGNsYXNzIFRoZSBIYXNoIFBsdWdpblxuXHQgKiBAcGFyYW0ge093bH0gY2Fyb3VzZWwgLSBUaGUgT3dsIENhcm91c2VsXG5cdCAqL1xuXHR2YXIgSGFzaCA9IGZ1bmN0aW9uKGNhcm91c2VsKSB7XG5cdFx0LyoqXG5cdFx0ICogUmVmZXJlbmNlIHRvIHRoZSBjb3JlLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7T3dsfVxuXHRcdCAqL1xuXHRcdHRoaXMuX2NvcmUgPSBjYXJvdXNlbDtcblxuXHRcdC8qKlxuXHRcdCAqIEhhc2ggaW5kZXggZm9yIHRoZSBpdGVtcy5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge09iamVjdH1cblx0XHQgKi9cblx0XHR0aGlzLl9oYXNoZXMgPSB7fTtcblxuXHRcdC8qKlxuXHRcdCAqIFRoZSBjYXJvdXNlbCBlbGVtZW50LlxuXHRcdCAqIEB0eXBlIHtqUXVlcnl9XG5cdFx0ICovXG5cdFx0dGhpcy4kZWxlbWVudCA9IHRoaXMuX2NvcmUuJGVsZW1lbnQ7XG5cblx0XHQvKipcblx0XHQgKiBBbGwgZXZlbnQgaGFuZGxlcnMuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtPYmplY3R9XG5cdFx0ICovXG5cdFx0dGhpcy5faGFuZGxlcnMgPSB7XG5cdFx0XHQnaW5pdGlhbGl6ZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSAmJiB0aGlzLl9jb3JlLnNldHRpbmdzLnN0YXJ0UG9zaXRpb24gPT09ICdVUkxIYXNoJykge1xuXHRcdFx0XHRcdCQod2luZG93KS50cmlnZ2VyKCdoYXNoY2hhbmdlLm93bC5uYXZpZ2F0aW9uJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J3ByZXBhcmVkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UpIHtcblx0XHRcdFx0XHR2YXIgaGFzaCA9ICQoZS5jb250ZW50KS5maW5kKCdbZGF0YS1oYXNoXScpLmFkZEJhY2soJ1tkYXRhLWhhc2hdJykuYXR0cignZGF0YS1oYXNoJyk7XG5cblx0XHRcdFx0XHRpZiAoIWhhc2gpIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLl9oYXNoZXNbaGFzaF0gPSBlLmNvbnRlbnQ7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J2NoYW5nZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSAmJiBlLnByb3BlcnR5Lm5hbWUgPT09ICdwb3NpdGlvbicpIHtcblx0XHRcdFx0XHR2YXIgY3VycmVudCA9IHRoaXMuX2NvcmUuaXRlbXModGhpcy5fY29yZS5yZWxhdGl2ZSh0aGlzLl9jb3JlLmN1cnJlbnQoKSkpLFxuXHRcdFx0XHRcdFx0aGFzaCA9ICQubWFwKHRoaXMuX2hhc2hlcywgZnVuY3Rpb24oaXRlbSwgaGFzaCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gaXRlbSA9PT0gY3VycmVudCA/IGhhc2ggOiBudWxsO1xuXHRcdFx0XHRcdFx0fSkuam9pbigpO1xuXG5cdFx0XHRcdFx0aWYgKCFoYXNoIHx8IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDEpID09PSBoYXNoKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhhc2ggPSBoYXNoO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKVxuXHRcdH07XG5cblx0XHQvLyBzZXQgZGVmYXVsdCBvcHRpb25zXG5cdFx0dGhpcy5fY29yZS5vcHRpb25zID0gJC5leHRlbmQoe30sIEhhc2guRGVmYXVsdHMsIHRoaXMuX2NvcmUub3B0aW9ucyk7XG5cblx0XHQvLyByZWdpc3RlciB0aGUgZXZlbnQgaGFuZGxlcnNcblx0XHR0aGlzLiRlbGVtZW50Lm9uKHRoaXMuX2hhbmRsZXJzKTtcblxuXHRcdC8vIHJlZ2lzdGVyIGV2ZW50IGxpc3RlbmVyIGZvciBoYXNoIG5hdmlnYXRpb25cblx0XHQkKHdpbmRvdykub24oJ2hhc2hjaGFuZ2Uub3dsLm5hdmlnYXRpb24nLCAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdHZhciBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpLFxuXHRcdFx0XHRpdGVtcyA9IHRoaXMuX2NvcmUuJHN0YWdlLmNoaWxkcmVuKCksXG5cdFx0XHRcdHBvc2l0aW9uID0gdGhpcy5faGFzaGVzW2hhc2hdICYmIGl0ZW1zLmluZGV4KHRoaXMuX2hhc2hlc1toYXNoXSk7XG5cblx0XHRcdGlmIChwb3NpdGlvbiA9PT0gdW5kZWZpbmVkIHx8IHBvc2l0aW9uID09PSB0aGlzLl9jb3JlLmN1cnJlbnQoKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX2NvcmUudG8odGhpcy5fY29yZS5yZWxhdGl2ZShwb3NpdGlvbiksIGZhbHNlLCB0cnVlKTtcblx0XHR9LCB0aGlzKSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIERlZmF1bHQgb3B0aW9ucy5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0SGFzaC5EZWZhdWx0cyA9IHtcblx0XHRVUkxoYXNoTGlzdGVuZXI6IGZhbHNlXG5cdH07XG5cblx0LyoqXG5cdCAqIERlc3Ryb3lzIHRoZSBwbHVnaW4uXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdEhhc2gucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgaGFuZGxlciwgcHJvcGVydHk7XG5cblx0XHQkKHdpbmRvdykub2ZmKCdoYXNoY2hhbmdlLm93bC5uYXZpZ2F0aW9uJyk7XG5cblx0XHRmb3IgKGhhbmRsZXIgaW4gdGhpcy5faGFuZGxlcnMpIHtcblx0XHRcdHRoaXMuX2NvcmUuJGVsZW1lbnQub2ZmKGhhbmRsZXIsIHRoaXMuX2hhbmRsZXJzW2hhbmRsZXJdKTtcblx0XHR9XG5cdFx0Zm9yIChwcm9wZXJ0eSBpbiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKSkge1xuXHRcdFx0dHlwZW9mIHRoaXNbcHJvcGVydHldICE9ICdmdW5jdGlvbicgJiYgKHRoaXNbcHJvcGVydHldID0gbnVsbCk7XG5cdFx0fVxuXHR9O1xuXG5cdCQuZm4ub3dsQ2Fyb3VzZWwuQ29uc3RydWN0b3IuUGx1Z2lucy5IYXNoID0gSGFzaDtcblxufSkod2luZG93LlplcHRvIHx8IHdpbmRvdy5qUXVlcnksIHdpbmRvdywgZG9jdW1lbnQpO1xuXG4vKipcbiAqIFN1cHBvcnQgUGx1Z2luXG4gKlxuICogQHZlcnNpb24gMi4zLjRcbiAqIEBhdXRob3IgVml2aWQgUGxhbmV0IFNvZnR3YXJlIEdtYkhcbiAqIEBhdXRob3IgQXJ0dXMgS29sYW5vd3NraVxuICogQGF1dGhvciBEYXZpZCBEZXV0c2NoXG4gKiBAbGljZW5zZSBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqL1xuOyhmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQpIHtcblxuXHR2YXIgc3R5bGUgPSAkKCc8c3VwcG9ydD4nKS5nZXQoMCkuc3R5bGUsXG5cdFx0cHJlZml4ZXMgPSAnV2Via2l0IE1veiBPIG1zJy5zcGxpdCgnICcpLFxuXHRcdGV2ZW50cyA9IHtcblx0XHRcdHRyYW5zaXRpb246IHtcblx0XHRcdFx0ZW5kOiB7XG5cdFx0XHRcdFx0V2Via2l0VHJhbnNpdGlvbjogJ3dlYmtpdFRyYW5zaXRpb25FbmQnLFxuXHRcdFx0XHRcdE1velRyYW5zaXRpb246ICd0cmFuc2l0aW9uZW5kJyxcblx0XHRcdFx0XHRPVHJhbnNpdGlvbjogJ29UcmFuc2l0aW9uRW5kJyxcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiAndHJhbnNpdGlvbmVuZCdcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGFuaW1hdGlvbjoge1xuXHRcdFx0XHRlbmQ6IHtcblx0XHRcdFx0XHRXZWJraXRBbmltYXRpb246ICd3ZWJraXRBbmltYXRpb25FbmQnLFxuXHRcdFx0XHRcdE1vekFuaW1hdGlvbjogJ2FuaW1hdGlvbmVuZCcsXG5cdFx0XHRcdFx0T0FuaW1hdGlvbjogJ29BbmltYXRpb25FbmQnLFxuXHRcdFx0XHRcdGFuaW1hdGlvbjogJ2FuaW1hdGlvbmVuZCdcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0dGVzdHMgPSB7XG5cdFx0XHRjc3N0cmFuc2Zvcm1zOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuICEhdGVzdCgndHJhbnNmb3JtJyk7XG5cdFx0XHR9LFxuXHRcdFx0Y3NzdHJhbnNmb3JtczNkOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuICEhdGVzdCgncGVyc3BlY3RpdmUnKTtcblx0XHRcdH0sXG5cdFx0XHRjc3N0cmFuc2l0aW9uczogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiAhIXRlc3QoJ3RyYW5zaXRpb24nKTtcblx0XHRcdH0sXG5cdFx0XHRjc3NhbmltYXRpb25zOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuICEhdGVzdCgnYW5pbWF0aW9uJyk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRmdW5jdGlvbiB0ZXN0KHByb3BlcnR5LCBwcmVmaXhlZCkge1xuXHRcdHZhciByZXN1bHQgPSBmYWxzZSxcblx0XHRcdHVwcGVyID0gcHJvcGVydHkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wZXJ0eS5zbGljZSgxKTtcblxuXHRcdCQuZWFjaCgocHJvcGVydHkgKyAnICcgKyBwcmVmaXhlcy5qb2luKHVwcGVyICsgJyAnKSArIHVwcGVyKS5zcGxpdCgnICcpLCBmdW5jdGlvbihpLCBwcm9wZXJ0eSkge1xuXHRcdFx0aWYgKHN0eWxlW3Byb3BlcnR5XSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHJlc3VsdCA9IHByZWZpeGVkID8gcHJvcGVydHkgOiB0cnVlO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0ZnVuY3Rpb24gcHJlZml4ZWQocHJvcGVydHkpIHtcblx0XHRyZXR1cm4gdGVzdChwcm9wZXJ0eSwgdHJ1ZSk7XG5cdH1cblxuXHRpZiAodGVzdHMuY3NzdHJhbnNpdGlvbnMoKSkge1xuXHRcdC8qIGpzaGludCAtVzA1MyAqL1xuXHRcdCQuc3VwcG9ydC50cmFuc2l0aW9uID0gbmV3IFN0cmluZyhwcmVmaXhlZCgndHJhbnNpdGlvbicpKVxuXHRcdCQuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCA9IGV2ZW50cy50cmFuc2l0aW9uLmVuZFsgJC5zdXBwb3J0LnRyYW5zaXRpb24gXTtcblx0fVxuXG5cdGlmICh0ZXN0cy5jc3NhbmltYXRpb25zKCkpIHtcblx0XHQvKiBqc2hpbnQgLVcwNTMgKi9cblx0XHQkLnN1cHBvcnQuYW5pbWF0aW9uID0gbmV3IFN0cmluZyhwcmVmaXhlZCgnYW5pbWF0aW9uJykpXG5cdFx0JC5zdXBwb3J0LmFuaW1hdGlvbi5lbmQgPSBldmVudHMuYW5pbWF0aW9uLmVuZFsgJC5zdXBwb3J0LmFuaW1hdGlvbiBdO1xuXHR9XG5cblx0aWYgKHRlc3RzLmNzc3RyYW5zZm9ybXMoKSkge1xuXHRcdC8qIGpzaGludCAtVzA1MyAqL1xuXHRcdCQuc3VwcG9ydC50cmFuc2Zvcm0gPSBuZXcgU3RyaW5nKHByZWZpeGVkKCd0cmFuc2Zvcm0nKSk7XG5cdFx0JC5zdXBwb3J0LnRyYW5zZm9ybTNkID0gdGVzdHMuY3NzdHJhbnNmb3JtczNkKCk7XG5cdH1cblxufSkod2luZG93LlplcHRvIHx8IHdpbmRvdy5qUXVlcnksIHdpbmRvdywgZG9jdW1lbnQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL293bC1jYXJvdXNlbC9vd2wuY2Fyb3VzZWwuanMiXSwic291cmNlUm9vdCI6IiJ9