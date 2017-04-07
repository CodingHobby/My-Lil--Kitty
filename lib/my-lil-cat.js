/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/lib";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {

	/**
  * Creates an instance of Vector and calculates its module
  * 
  * @param {Number} [x=0] x component of the vector
  * @param {Number} [y=0] y component of the vector
  */
	function Vector(x, y) {
		_classCallCheck(this, Vector);

		this.x = x || 0;
		this.y = y || 0;
		this.mod = this.modulus();
	}

	_createClass(Vector, [{
		key: "modulus",
		value: function modulus() {
			// Using Pythagora to calculate the hypotenuse of the right-angled triangle formed by the two components of the vector
			return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
		}

		/**
   * Resets its own x, y and modulus
   * 
   * @param {Number} [x = 0] 
   * @param {Number} [y = 0] 
   * 
   * @return {Vector} this
   */

	}, {
		key: "reset",
		value: function reset(x, y) {
			this.x = x || 0;
			this.y = y || 0;
			this.mod = this.modulus();
			return this;
		}

		/**
   * Adds another vector to itself
   * 
   * @param {Vector} v the vector to add to this
   * @returns {Vector} the product of the operation
   */

	}, {
		key: "add",
		value: function add(v) {
			return this.reset(this.x + v.x, this.y + v.y);
		}

		/**
   * Subrtracts a vector from itself
   * 
   * @param {Vector} v the vector to subtract from this
   * @returns {Vector} the reult of the operation
   */

	}, {
		key: "sub",
		value: function sub(v) {
			return this.reset(this.x - v.x, this.y - v.y);
		}

		/**
   * Multiplies itself by a scalar
   * 
   * @param {Number} n 
   * @returns {Vector} the result of the operation
   */

	}, {
		key: "mag",
		value: function mag(n) {
			return this.reset(this.x * n, this.y * n);
		}
	}]);

	return Vector;
}();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vector = __webpack_require__(0);

module.exports = function () {

	/**
  * Creates an instance of Body
  * 
  * @param {object} [opts] An object that contains diferent options for the body, such as the position, velocity and acceleration
  */
	function Body(opts) {
		_classCallCheck(this, Body);

		if (opts) {
			if (opts.pos) this.pos = new Vector(opts.pos.x, opts.pos.y);else this.pos = new Vector(0, 0);

			if (opts.vel) this.vel = new Vector(opts.vel.x, opts.vel.y);else this.vel = new Vector(0, 0);

			if (opts.acc) this.acc = new Vector(opts.acc.x, opts.acc.y);else this.acc = new Vector(0, 0);

			this.mass = opts.mass || 10;
		} else {
			this.pos = new Vector(0, 0);
			this.vel = new Vector(0, 0);
			this.acc = new Vector(0, 0);
			this.mass = 10;
		}

		// cf = F / mg
		this.cf = new Vector(this.vel.x / (this.mass * this.gravity), this.vel.y / (this.mass * this.gravity));
	}

	/**
  * Applies a force to a rigid body
  * 
  * @param {Vector} v the vector representing the force
  * @returns {Vector} the result of the addition between the acceleration of the body and the Vector v
  */


	_createClass(Body, [{
		key: 'applyForce',
		value: function applyForce(v) {
			// using Vector.prototype.add()
			return this.acc.add(v);
		}

		/**
   * Updates the state of the body, in particular its acceleration, velocity and position
   * 
   * @returns {Body} returns the body itself
   */

	}, {
		key: 'update',
		value: function update() {
			this.applyG(this.gravity || 0);
			this.vel.add(this.acc);
			this.pos.add(this.vel);
			this.acc.mag(0);
			return this;
		}

		/**
   * Changes the body's gravitational pull
   * 
   * @param {number} [mag] the magnitude of the y component ofthe rgavity force
   * @returns {number} the current gravitational pull of the object
   */

	}, {
		key: 'setG',
		value: function setG(mag) {
			return this.gravity = mag || 1;
		}

		/**
   * Apply the gravitational pull to the body, changing its acceleration
   * 
   * @param {Number} mag the magnitude of the force
   * @returns {Body}
   */

	}, {
		key: 'applyG',
		value: function applyG(mag) {
			return this.applyForce(new Vector(0, this.gravity));
		}

		/**
   * Check if the object is colliding with another object
   * 
   * @param {Body} obj the object to check
   * @returns {Boolean} is the distance between the two objects less than 0?
   */

	}, {
		key: 'collides',
		value: function collides(obj) {
			return this.dist(obj) == 0;
		}

		/**
   * Find out the distance between two bodies
   * 
   * @param {Body} obj the object to check
   * @returns {Number} the distance between the two objects
   */

	}, {
		key: 'dist',
		value: function dist(obj) {
			// Only return the modulus of the vector representing the distance between the two objects
			return new Vector(this.pos.x - obj.pos.x, this.pos.y - obj.pos.y).mod;
		}

		/**
   * Make an object bounce on the screen edges
   * 
   * @param {Vector} constraints
   * @return {Boolean} did the body hit the edges?
   */

		// TODO make the drag force based on the options

	}, {
		key: 'edges',
		value: function edges(constraints) {
			var out = false;

			// Determine whether we are actually out of the boundaries
			// And setting the output accordingly
			if (this.pos.x > constraints.x || this.pos.y > constraints.y || this.pos.x < 0 || this.pos.y < 0) out = true;

			// Changing the object's position and velocity based on whether we really are out of the boundaries
			if (this.pos.x > constraints.x) {
				// This avoids an infinte loop. Important
				this.pos.x = constraints.x;
				// Invert direction in which the body moves
				this.vel.x *= -1 + this.cf.x / 10;
			} else if (this.pos.x < 0) {
				this.pos.x = 0;
				this.vel.x *= -1 + this.cf.x / 10;
			}

			if (this.pos.y > constraints.y) {
				this.pos.y = constraints.y;
				this.vel.y *= -1 + this.cf.y / 10;
			} else if (this.pos.y < 0) {
				this.pos.y = 0;
				this.vel.y *= -1 + this.cf.y / 10;
			}
			return out;
		}
	}]);

	return Body;
}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vector = __webpack_require__(0);
var Body = __webpack_require__(1);

module.exports = function () {
	/**
  * Creates an instance of World.
  * 
  * @param {Object} [opts] the options for the world
  */
	function World(opts) {
		var _this = this;

		_classCallCheck(this, World);

		if (opts) {
			this.bodies = opts.bodies || [];
			this.gravity = opts.gravity || 1;
			this.constraints = opts.constraints || {
				x: 600,
				y: 600
			};
		} else {
			this.bodies = [];
			this.gravity = 1;
			this.constraints = {
				x: 600,
				y: 600
			};
		}

		this.bodies.forEach(function (body) {
			return body.setG(_this.gravity);
		});
	}

	/**
  * Adding a body to the world
  * 
  * @param {Body} [body=new Body()] the body to add
  * @returns {Body[]} the world's bodies
  */


	_createClass(World, [{
		key: 'addBody',
		value: function addBody(body) {
			this.bodies.push(body || new Body({
				pos: new Vector(0, 0),
				vel: new Vector(0, 0),
				gravity: this.gravity
			}));

			return this.bodies;
		}

		/**
   * Updates all of the bodies of the world
   * 
   * @return {Body[]} the world's bodies
   */

	}, {
		key: 'update',
		value: function update() {
			var _this2 = this;

			this.bodies.forEach(function (body) {
				body.update();
				body.edges(_this2.constraints);

				return _this2.bodies;
			});
		}

		/**
   * Set the magnitude of the gravity
   * 
   * @param {Number} [mag] 
   * @returns {Number} the current gravity
   */

	}, {
		key: 'setG',
		value: function setG(mag) {
			this.gravity = mag || 1;
			return this.gravity;
		}
	}]);

	return World;
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var World = __webpack_require__(2);

module.exports = function () {
	function Renderer(opts) {
		_classCallCheck(this, Renderer);

		if (opts) {
			this.frameRate = opts.frameRate || 30;
			this.world = opts.world || new World();
			this.canvas = opts.canvas || 'c';
		} else {
			// TODO This is totally wrong, since the framerate should be inverse, since we're using setInterval
			// Find a fix!
			this.frameRate = 30;
			this.world = new World();
			this.canvas = 'c';
		}
	}

	_createClass(Renderer, [{
		key: 'init',
		value: function init() {
			this.createCanvas(this.canvas);
		}
	}, {
		key: 'createCanvas',
		value: function createCanvas(canvas) {
			if (!document) {
				throw new Error('Cannot get the document');
				return false;
			}

			if (!document.querySelector('#canvas')) {
				document.querySelector('#app').appendChild(document.createElement('canvas')).setAttribute('id', canvas);
			}

			var c = document.getElementById(canvas);
			var context = c.getContext('2D');
			return context;
		}
	}, {
		key: 'render',
		value: function render() {
			setInterval(this.frameRate, function () {
				world.update();
			});
		}
	}]);

	return Renderer;
}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Vector = __webpack_require__(0);
var Body = __webpack_require__(1);
var World = __webpack_require__(2);
var Renderer = __webpack_require__(3);

module.exports = { World: World, Vector: Vector, Body: Body, Renderer: Renderer };

/***/ })
/******/ ]);