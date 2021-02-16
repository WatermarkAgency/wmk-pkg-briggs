function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var Img = _interopDefault(require('gatsby-image'));
var gatsby = require('gatsby');
var reactBootstrap = require('react-bootstrap');
var wmkLib = require('wmk-lib');
var styled = _interopDefault(require('styled-components'));
var wmkColorPalette = require('wmk-color-palette');
require('react-icons/fa');

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var colors = new wmkColorPalette.ColorPalette([{
  value: "#F16724",
  group: "orange",
  primary: true
}, {
  value: "#595f67",
  group: "black",
  secondary: true
}, {
  value: "#d0d0d0",
  group: "gray",
  tertiary: true
}, {
  value: "#F16724",
  group: "orange",
  accent: true
}, {
  value: "#F16724",
  group: "orange",
  coaccent: true
}, {
  value: "#2f2f2f",
  group: "black",
  black: true
}, {
  value: "#2f2f2f",
  group: "black",
  text: true
}, {
  value: "#fcfcfc",
  group: "white",
  reverse: true
}]);

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/** Built-in value references. */
var Symbol$1 = _root.Symbol;

var _Symbol = Symbol$1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag$1 && symToStringTag$1 in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction;

/** Used to detect overreaching core-js shims. */
var coreJsData = _root['__core-js_shared__'];

var _coreJsData = coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked;

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype,
    objectProto$2 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject_1(value) || _isMasked(value)) {
    return false;
  }
  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

var _baseIsNative = baseIsNative;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

var _getNative = getNative;

/* Built-in method references that are verified to be native. */
var nativeCreate = _getNative(Object, 'create');

var _nativeCreate = nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}

var _hashClear = hashClear;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$3.call(data, key);
}

var _hashHas = hashHas;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

var _hashSet = hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;

var _Hash = Hash;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf = assocIndexOf;

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet = listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;

var _ListCache = ListCache;

/* Built-in method references that are verified to be native. */
var Map = _getNative(_root, 'Map');

var _Map = Map;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash,
    'map': new (_Map || _ListCache),
    'string': new _Hash
  };
}

var _mapCacheClear = mapCacheClear;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

var _isKeyable = isKeyable;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

var _getMapData = getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}

var _mapCacheGet = mapCacheGet;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}

var _mapCacheHas = mapCacheHas;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;

var _MapCache = MapCache;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || _MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = _MapCache;

var memoize_1 = memoize;

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize_1(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

var _memoizeCapped = memoizeCapped;

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = _memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

var _templateObject, _templateObject2;
var baseUrl = "https://briggsamerican.com/map";
var StyledGrid = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  height: 200px;\n  position: relative;\n  margin: 0.5rem;\n  overflow: hidden;\n  transition: all 0.3s ease;\n  .specs {\n    opacity: 0;\n    left: -50%;\n    transition: all 0.3s ease;\n  }\n  :hover {\n    box-shadow: 0px 3px 10px ", ";\n    transition: all 0.3s ease;\n    .specs {\n      opacity: 1;\n      left: 0;\n      transition: all 0.3s ease;\n      :hover {\n        cursor: pointer;\n      }\n    }\n  }\n"])), colors.rgba("black", 0.45));
var MapSearchLink = styled.a(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  padding: 0.5rem;\n  background: black;\n  color: ", ";\n  :hover {\n    color: ", ";\n    text-decoration: none;\n  }\n  font-size: 0.8rem;\n  bottom: 0;\n"])), colors.hex("white"), colors.hover("tertiary"));

var CityList = function CityList(_ref) {
  var setActiveCity = _ref.setActiveCity;

  var handleSelect = function handleSelect(e) {
    setActiveCity(e.target.value);
  };

  return /*#__PURE__*/React__default.createElement(reactBootstrap.Form.Control, {
    as: "select",
    id: "quicksearch_City_list",
    type: "list",
    onChange: handleSelect
  }, /*#__PURE__*/React__default.createElement("option", {
    value: ""
  }, "- Select a City-"), /*#__PURE__*/React__default.createElement("option", {
    value: "Any"
  }, "Any"), /*#__PURE__*/React__default.createElement("option", {
    value: "Advance"
  }, "Advance"), /*#__PURE__*/React__default.createElement("option", {
    value: "Albemarle"
  }, "Albemarle"), /*#__PURE__*/React__default.createElement("option", {
    value: "Alexander"
  }, "Alexander"), /*#__PURE__*/React__default.createElement("option", {
    value: "Alexis"
  }, "Alexis"), /*#__PURE__*/React__default.createElement("option", {
    value: "Almond"
  }, "Almond"), /*#__PURE__*/React__default.createElement("option", {
    value: "Anderson"
  }, "Anderson"), /*#__PURE__*/React__default.createElement("option", {
    value: "Ansonville"
  }, "Ansonville"), /*#__PURE__*/React__default.createElement("option", {
    value: "Arden"
  }, "Arden"), /*#__PURE__*/React__default.createElement("option", {
    value: "Asheboro"
  }, "Asheboro"), /*#__PURE__*/React__default.createElement("option", {
    value: "Asheville"
  }, "Asheville"), /*#__PURE__*/React__default.createElement("option", {
    value: "Badin"
  }, "Badin"), /*#__PURE__*/React__default.createElement("option", {
    value: "Badin Lake"
  }, "Badin Lake"), /*#__PURE__*/React__default.createElement("option", {
    value: "Bakersville"
  }, "Bakersville"), /*#__PURE__*/React__default.createElement("option", {
    value: "Balsam"
  }, "Balsam"), /*#__PURE__*/React__default.createElement("option", {
    value: "Balsam Grove"
  }, "Balsam Grove"), /*#__PURE__*/React__default.createElement("option", {
    value: "Banner Elk"
  }, "Banner Elk"), /*#__PURE__*/React__default.createElement("option", {
    value: "Barnardsville"
  }, "Barnardsville"), /*#__PURE__*/React__default.createElement("option", {
    value: "Bat Cave"
  }, "Bat Cave"), /*#__PURE__*/React__default.createElement("option", {
    value: "Beech Mountain"
  }, "Beech Mountain"), /*#__PURE__*/React__default.createElement("option", {
    value: "Belmont"
  }, "Belmont"), /*#__PURE__*/React__default.createElement("option", {
    value: "Bessemer City"
  }, "Bessemer City"), /*#__PURE__*/React__default.createElement("option", {
    value: "Bethune"
  }, "Bethune"), /*#__PURE__*/React__default.createElement("option", {
    value: "Biltmore Forest"
  }, "Biltmore Forest"), /*#__PURE__*/React__default.createElement("option", {
    value: "Biltmore Lake"
  }, "Biltmore Lake"), /*#__PURE__*/React__default.createElement("option", {
    value: "Biscoe"
  }, "Biscoe"), /*#__PURE__*/React__default.createElement("option", {
    value: "Black Mountain"
  }, "Black Mountain"), /*#__PURE__*/React__default.createElement("option", {
    value: "Blacksburg"
  }, "Blacksburg"), /*#__PURE__*/React__default.createElement("option", {
    value: "Blackstock"
  }, "Blackstock"), /*#__PURE__*/React__default.createElement("option", {
    value: "Blowing Rock"
  }, "Blowing Rock"), /*#__PURE__*/React__default.createElement("option", {
    value: "Blythewood"
  }, "Blythewood"), /*#__PURE__*/React__default.createElement("option", {
    value: "Boiling Springs"
  }, "Boiling Springs"), /*#__PURE__*/React__default.createElement("option", {
    value: "Boomer"
  }, "Boomer"), /*#__PURE__*/React__default.createElement("option", {
    value: "Boone"
  }, "Boone"), /*#__PURE__*/React__default.createElement("option", {
    value: "Boonville"
  }, "Boonville"), /*#__PURE__*/React__default.createElement("option", {
    value: "Bostic"
  }, "Bostic"), /*#__PURE__*/React__default.createElement("option", {
    value: "Brevard"
  }, "Brevard"), /*#__PURE__*/React__default.createElement("option", {
    value: "Bryson City"
  }, "Bryson City"), /*#__PURE__*/React__default.createElement("option", {
    value: "Burnsville"
  }, "Burnsville"), /*#__PURE__*/React__default.createElement("option", {
    value: "Camden"
  }, "Camden"), /*#__PURE__*/React__default.createElement("option", {
    value: "Campobello"
  }, "Campobello"), /*#__PURE__*/React__default.createElement("option", {
    value: "Candler"
  }, "Candler"), /*#__PURE__*/React__default.createElement("option", {
    value: "Candor"
  }, "Candor"), /*#__PURE__*/React__default.createElement("option", {
    value: "Canton"
  }, "Canton"), /*#__PURE__*/React__default.createElement("option", {
    value: "Casar"
  }, "Casar"), /*#__PURE__*/React__default.createElement("option", {
    value: "Cashiers"
  }, "Cashiers"), /*#__PURE__*/React__default.createElement("option", {
    value: "Cassatt"
  }, "Cassatt"), /*#__PURE__*/React__default.createElement("option", {
    value: "Catawba"
  }, "Catawba"), /*#__PURE__*/React__default.createElement("option", {
    value: "Cedar Mountain"
  }, "Cedar Mountain"), /*#__PURE__*/React__default.createElement("option", {
    value: "Chapel Hill"
  }, "Chapel Hill"), /*#__PURE__*/React__default.createElement("option", {
    value: "Charlotte"
  }, "Charlotte"), /*#__PURE__*/React__default.createElement("option", {
    value: "Cheraw"
  }, "Cheraw"), /*#__PURE__*/React__default.createElement("option", {
    value: "Cherokee"
  }, "Cherokee"), /*#__PURE__*/React__default.createElement("option", {
    value: "Cherryville"
  }, "Cherryville"), /*#__PURE__*/React__default.createElement("option", {
    value: "Chesnee"
  }, "Chesnee"), /*#__PURE__*/React__default.createElement("option", {
    value: "Chester"
  }, "Chester"), /*#__PURE__*/React__default.createElement("option", {
    value: "Chesterfield"
  }, "Chesterfield"), /*#__PURE__*/React__default.createElement("option", {
    value: "Chimney Rock"
  }, "Chimney Rock"), /*#__PURE__*/React__default.createElement("option", {
    value: "China Grove"
  }, "China Grove"), /*#__PURE__*/React__default.createElement("option", {
    value: "Claremont"
  }, "Claremont"), /*#__PURE__*/React__default.createElement("option", {
    value: "Clemmons"
  }, "Clemmons"), /*#__PURE__*/React__default.createElement("option", {
    value: "Cleveland"
  }, "Cleveland"), /*#__PURE__*/React__default.createElement("option", {
    value: "Clover"
  }, "Clover"), /*#__PURE__*/React__default.createElement("option", {
    value: "Clyde"
  }, "Clyde"), /*#__PURE__*/React__default.createElement("option", {
    value: "Collettsville"
  }, "Collettsville"), /*#__PURE__*/React__default.createElement("option", {
    value: "Columbia"
  }, "Columbia"), /*#__PURE__*/React__default.createElement("option", {
    value: "Columbus"
  }, "Columbus"), /*#__PURE__*/React__default.createElement("option", {
    value: "Concord"
  }, "Concord"), /*#__PURE__*/React__default.createElement("option", {
    value: "Connelly Springs"
  }, "Connelly Springs"), /*#__PURE__*/React__default.createElement("option", {
    value: "Conover"
  }, "Conover"), /*#__PURE__*/React__default.createElement("option", {
    value: "Cooleemee"
  }, "Cooleemee"), /*#__PURE__*/React__default.createElement("option", {
    value: "Cornelius"
  }, "Cornelius"), /*#__PURE__*/React__default.createElement("option", {
    value: "Cramerton"
  }, "Cramerton"), /*#__PURE__*/React__default.createElement("option", {
    value: "Crouse"
  }, "Crouse"), /*#__PURE__*/React__default.createElement("option", {
    value: "Cullowhee"
  }, "Cullowhee"), /*#__PURE__*/React__default.createElement("option", {
    value: "Dallas"
  }, "Dallas"), /*#__PURE__*/React__default.createElement("option", {
    value: "Davidson"
  }, "Davidson"), /*#__PURE__*/React__default.createElement("option", {
    value: "Deep Gap"
  }, "Deep Gap"), /*#__PURE__*/React__default.createElement("option", {
    value: "Denton"
  }, "Denton"), /*#__PURE__*/React__default.createElement("option", {
    value: "Denver"
  }, "Denver"), /*#__PURE__*/React__default.createElement("option", {
    value: "Dillsboro"
  }, "Dillsboro"), /*#__PURE__*/React__default.createElement("option", {
    value: "Dobson"
  }, "Dobson"), /*#__PURE__*/React__default.createElement("option", {
    value: "Drexel"
  }, "Drexel"), /*#__PURE__*/React__default.createElement("option", {
    value: "Durham"
  }, "Durham"), /*#__PURE__*/React__default.createElement("option", {
    value: "East Bend"
  }, "East Bend"), /*#__PURE__*/React__default.createElement("option", {
    value: "East Flat Rock"
  }, "East Flat Rock"), /*#__PURE__*/React__default.createElement("option", {
    value: "East Spencer"
  }, "East Spencer"), /*#__PURE__*/React__default.createElement("option", {
    value: "Edgemoor"
  }, "Edgemoor"), /*#__PURE__*/React__default.createElement("option", {
    value: "Edneyville"
  }, "Edneyville"), /*#__PURE__*/React__default.createElement("option", {
    value: "Elgin"
  }, "Elgin"), /*#__PURE__*/React__default.createElement("option", {
    value: "Elk Park"
  }, "Elk Park"), /*#__PURE__*/React__default.createElement("option", {
    value: "Elkin"
  }, "Elkin"), /*#__PURE__*/React__default.createElement("option", {
    value: "Ellenboro"
  }, "Ellenboro"), /*#__PURE__*/React__default.createElement("option", {
    value: "Ellerbe"
  }, "Ellerbe"), /*#__PURE__*/React__default.createElement("option", {
    value: "Etowah"
  }, "Etowah"), /*#__PURE__*/React__default.createElement("option", {
    value: "Fairview"
  }, "Fairview"), /*#__PURE__*/React__default.createElement("option", {
    value: "Faith"
  }, "Faith"), /*#__PURE__*/React__default.createElement("option", {
    value: "Fallston"
  }, "Fallston"), /*#__PURE__*/React__default.createElement("option", {
    value: "Fayetteville"
  }, "Fayetteville"), /*#__PURE__*/React__default.createElement("option", {
    value: "Ferguson"
  }, "Ferguson"), /*#__PURE__*/React__default.createElement("option", {
    value: "Flat Rock"
  }, "Flat Rock"), /*#__PURE__*/React__default.createElement("option", {
    value: "Fleetwood"
  }, "Fleetwood"), /*#__PURE__*/React__default.createElement("option", {
    value: "Fletcher"
  }, "Fletcher"), /*#__PURE__*/React__default.createElement("option", {
    value: "Forest City"
  }, "Forest City"), /*#__PURE__*/React__default.createElement("option", {
    value: "Fort Lawn"
  }, "Fort Lawn"), /*#__PURE__*/React__default.createElement("option", {
    value: "Fort Mill"
  }, "Fort Mill"), /*#__PURE__*/React__default.createElement("option", {
    value: "Franklin"
  }, "Franklin"), /*#__PURE__*/React__default.createElement("option", {
    value: "Gaffney"
  }, "Gaffney"), /*#__PURE__*/React__default.createElement("option", {
    value: "Gaston"
  }, "Gaston"), /*#__PURE__*/React__default.createElement("option", {
    value: "Gastonia"
  }, "Gastonia"), /*#__PURE__*/React__default.createElement("option", {
    value: "Gerton"
  }, "Gerton"), /*#__PURE__*/React__default.createElement("option", {
    value: "Gilbert"
  }, "Gilbert"), /*#__PURE__*/React__default.createElement("option", {
    value: "Glen Alpine"
  }, "Glen Alpine"), /*#__PURE__*/React__default.createElement("option", {
    value: "Glenville"
  }, "Glenville"), /*#__PURE__*/React__default.createElement("option", {
    value: "Gold Hill"
  }, "Gold Hill"), /*#__PURE__*/React__default.createElement("option", {
    value: "Granite Falls"
  }, "Granite Falls"), /*#__PURE__*/React__default.createElement("option", {
    value: "Granite Quarry"
  }, "Granite Quarry"), /*#__PURE__*/React__default.createElement("option", {
    value: "Grassy Creek"
  }, "Grassy Creek"), /*#__PURE__*/React__default.createElement("option", {
    value: "Great Falls"
  }, "Great Falls"), /*#__PURE__*/React__default.createElement("option", {
    value: "Green Mountain"
  }, "Green Mountain"), /*#__PURE__*/React__default.createElement("option", {
    value: "Greensboro"
  }, "Greensboro"), /*#__PURE__*/React__default.createElement("option", {
    value: "Greenville"
  }, "Greenville"), /*#__PURE__*/React__default.createElement("option", {
    value: "Grover"
  }, "Grover"), /*#__PURE__*/React__default.createElement("option", {
    value: "Hamlet"
  }, "Hamlet"), /*#__PURE__*/React__default.createElement("option", {
    value: "Hamptonville"
  }, "Hamptonville"), /*#__PURE__*/React__default.createElement("option", {
    value: "Harmony"
  }, "Harmony"), /*#__PURE__*/React__default.createElement("option", {
    value: "Harrisburg"
  }, "Harrisburg"), /*#__PURE__*/React__default.createElement("option", {
    value: "Hayesville"
  }, "Hayesville"), /*#__PURE__*/React__default.createElement("option", {
    value: "Hays"
  }, "Hays"), /*#__PURE__*/React__default.createElement("option", {
    value: "Heath Springs"
  }, "Heath Springs"), /*#__PURE__*/React__default.createElement("option", {
    value: "Hemby Bridge"
  }, "Hemby Bridge"), /*#__PURE__*/React__default.createElement("option", {
    value: "Hendersonville"
  }, "Hendersonville"), /*#__PURE__*/React__default.createElement("option", {
    value: "Hickory"
  }, "Hickory"), /*#__PURE__*/React__default.createElement("option", {
    value: "Hickory Grove"
  }, "Hickory Grove"), /*#__PURE__*/React__default.createElement("option", {
    value: "Hiddenite"
  }, "Hiddenite"), /*#__PURE__*/React__default.createElement("option", {
    value: "High Point"
  }, "High Point"), /*#__PURE__*/React__default.createElement("option", {
    value: "High Shoals"
  }, "High Shoals"), /*#__PURE__*/React__default.createElement("option", {
    value: "Highlands"
  }, "Highlands"), /*#__PURE__*/React__default.createElement("option", {
    value: "Hildebran"
  }, "Hildebran"), /*#__PURE__*/React__default.createElement("option", {
    value: "Horse Shoe"
  }, "Horse Shoe"), /*#__PURE__*/React__default.createElement("option", {
    value: "Hot Springs"
  }, "Hot Springs"), /*#__PURE__*/React__default.createElement("option", {
    value: "Hudson"
  }, "Hudson"), /*#__PURE__*/React__default.createElement("option", {
    value: "Huntersville"
  }, "Huntersville"), /*#__PURE__*/React__default.createElement("option", {
    value: "Indian Land"
  }, "Indian Land"), /*#__PURE__*/React__default.createElement("option", {
    value: "Indian Trail"
  }, "Indian Trail"), /*#__PURE__*/React__default.createElement("option", {
    value: "Inman"
  }, "Inman"), /*#__PURE__*/React__default.createElement("option", {
    value: "Iron Station"
  }, "Iron Station"), /*#__PURE__*/React__default.createElement("option", {
    value: "Ironton Township"
  }, "Ironton Township"), /*#__PURE__*/React__default.createElement("option", {
    value: "Jefferson"
  }, "Jefferson"), /*#__PURE__*/React__default.createElement("option", {
    value: "Jonesville"
  }, "Jonesville"), /*#__PURE__*/React__default.createElement("option", {
    value: "Kannapolis"
  }, "Kannapolis"), /*#__PURE__*/React__default.createElement("option", {
    value: "Kernersville"
  }, "Kernersville"), /*#__PURE__*/React__default.createElement("option", {
    value: "Kershaw"
  }, "Kershaw"), /*#__PURE__*/React__default.createElement("option", {
    value: "King"
  }, "King"), /*#__PURE__*/React__default.createElement("option", {
    value: "Kings Mountain"
  }, "Kings Mountain"), /*#__PURE__*/React__default.createElement("option", {
    value: "Lake Junaluska"
  }, "Lake Junaluska"), /*#__PURE__*/React__default.createElement("option", {
    value: "Lake Lure"
  }, "Lake Lure"), /*#__PURE__*/React__default.createElement("option", {
    value: "Lake Toxaway"
  }, "Lake Toxaway"), /*#__PURE__*/React__default.createElement("option", {
    value: "Lake Wylie"
  }, "Lake Wylie"), /*#__PURE__*/React__default.createElement("option", {
    value: "Lancaster"
  }, "Lancaster"), /*#__PURE__*/React__default.createElement("option", {
    value: "Landis"
  }, "Landis"), /*#__PURE__*/React__default.createElement("option", {
    value: "Landrum"
  }, "Landrum"), /*#__PURE__*/React__default.createElement("option", {
    value: "Lansing"
  }, "Lansing"), /*#__PURE__*/React__default.createElement("option", {
    value: "Laurel Park"
  }, "Laurel Park"), /*#__PURE__*/React__default.createElement("option", {
    value: "Laurel Springs"
  }, "Laurel Springs"), /*#__PURE__*/React__default.createElement("option", {
    value: "Laurinburg"
  }, "Laurinburg"), /*#__PURE__*/React__default.createElement("option", {
    value: "Lawndale"
  }, "Lawndale"), /*#__PURE__*/React__default.createElement("option", {
    value: "Leesville"
  }, "Leesville"), /*#__PURE__*/React__default.createElement("option", {
    value: "Leicester"
  }, "Leicester"), /*#__PURE__*/React__default.createElement("option", {
    value: "Lenoir"
  }, "Lenoir"), /*#__PURE__*/React__default.createElement("option", {
    value: "Lewisville"
  }, "Lewisville"), /*#__PURE__*/React__default.createElement("option", {
    value: "Lexington"
  }, "Lexington"), /*#__PURE__*/React__default.createElement("option", {
    value: "Liberty Hill"
  }, "Liberty Hill"), /*#__PURE__*/React__default.createElement("option", {
    value: "Lilesville"
  }, "Lilesville"), /*#__PURE__*/React__default.createElement("option", {
    value: "Lincolnton"
  }, "Lincolnton"), /*#__PURE__*/React__default.createElement("option", {
    value: "Linville"
  }, "Linville"), /*#__PURE__*/React__default.createElement("option", {
    value: "Linwood"
  }, "Linwood"), /*#__PURE__*/React__default.createElement("option", {
    value: "Little Switzerland"
  }, "Little Switzerland"), /*#__PURE__*/React__default.createElement("option", {
    value: "Locust"
  }, "Locust"), /*#__PURE__*/React__default.createElement("option", {
    value: "Loris"
  }, "Loris"), /*#__PURE__*/React__default.createElement("option", {
    value: "Lowell"
  }, "Lowell"), /*#__PURE__*/React__default.createElement("option", {
    value: "Lugoff"
  }, "Lugoff"), /*#__PURE__*/React__default.createElement("option", {
    value: "Maggie Valley"
  }, "Maggie Valley"), /*#__PURE__*/React__default.createElement("option", {
    value: "Maiden"
  }, "Maiden"), /*#__PURE__*/React__default.createElement("option", {
    value: "Marion"
  }, "Marion"), /*#__PURE__*/React__default.createElement("option", {
    value: "Mars Hill"
  }, "Mars Hill"), /*#__PURE__*/React__default.createElement("option", {
    value: "Marshall"
  }, "Marshall"), /*#__PURE__*/React__default.createElement("option", {
    value: "Marshville"
  }, "Marshville"), /*#__PURE__*/React__default.createElement("option", {
    value: "Marvin"
  }, "Marvin"), /*#__PURE__*/React__default.createElement("option", {
    value: "Matthews"
  }, "Matthews"), /*#__PURE__*/React__default.createElement("option", {
    value: "McAdenville"
  }, "McAdenville"), /*#__PURE__*/React__default.createElement("option", {
    value: "McConnells"
  }, "McConnells"), /*#__PURE__*/React__default.createElement("option", {
    value: "McGrady"
  }, "McGrady"), /*#__PURE__*/React__default.createElement("option", {
    value: "Mebane"
  }, "Mebane"), /*#__PURE__*/React__default.createElement("option", {
    value: "Midland"
  }, "Midland"), /*#__PURE__*/React__default.createElement("option", {
    value: "Mill Spring"
  }, "Mill Spring"), /*#__PURE__*/React__default.createElement("option", {
    value: "Millers Creek"
  }, "Millers Creek"), /*#__PURE__*/React__default.createElement("option", {
    value: "Mills River"
  }, "Mills River"), /*#__PURE__*/React__default.createElement("option", {
    value: "Mineral Springs"
  }, "Mineral Springs"), /*#__PURE__*/React__default.createElement("option", {
    value: "Mint Hill"
  }, "Mint Hill"), /*#__PURE__*/React__default.createElement("option", {
    value: "Misenheimer"
  }, "Misenheimer"), /*#__PURE__*/React__default.createElement("option", {
    value: "Mocksville"
  }, "Mocksville"), /*#__PURE__*/React__default.createElement("option", {
    value: "Monroe"
  }, "Monroe"), /*#__PURE__*/React__default.createElement("option", {
    value: "Montreat"
  }, "Montreat"), /*#__PURE__*/React__default.createElement("option", {
    value: "Mooresboro"
  }, "Mooresboro"), /*#__PURE__*/React__default.createElement("option", {
    value: "Mooresville"
  }, "Mooresville"), /*#__PURE__*/React__default.createElement("option", {
    value: "Moravian Falls"
  }, "Moravian Falls"), /*#__PURE__*/React__default.createElement("option", {
    value: "Morganton"
  }, "Morganton"), /*#__PURE__*/React__default.createElement("option", {
    value: "Morven"
  }, "Morven"), /*#__PURE__*/React__default.createElement("option", {
    value: "Mount Airy"
  }, "Mount Airy"), /*#__PURE__*/React__default.createElement("option", {
    value: "Mount Croghan"
  }, "Mount Croghan"), /*#__PURE__*/React__default.createElement("option", {
    value: "Mount Gilead"
  }, "Mount Gilead"), /*#__PURE__*/React__default.createElement("option", {
    value: "Mount Holly"
  }, "Mount Holly"), /*#__PURE__*/React__default.createElement("option", {
    value: "Mount Pleasant"
  }, "Mount Pleasant"), /*#__PURE__*/React__default.createElement("option", {
    value: "Mount Ulla"
  }, "Mount Ulla"), /*#__PURE__*/React__default.createElement("option", {
    value: "Mountain Home"
  }, "Mountain Home"), /*#__PURE__*/React__default.createElement("option", {
    value: "Mt Ulla"
  }, "Mt Ulla"), /*#__PURE__*/React__default.createElement("option", {
    value: "Murphy"
  }, "Murphy"), /*#__PURE__*/React__default.createElement("option", {
    value: "N Wilkesboro"
  }, "N Wilkesboro"), /*#__PURE__*/React__default.createElement("option", {
    value: "Nebo"
  }, "Nebo"), /*#__PURE__*/React__default.createElement("option", {
    value: "New London"
  }, "New London"), /*#__PURE__*/React__default.createElement("option", {
    value: "Newland"
  }, "Newland"), /*#__PURE__*/React__default.createElement("option", {
    value: "Newton"
  }, "Newton"), /*#__PURE__*/React__default.createElement("option", {
    value: "North Wilkesboro"
  }, "North Wilkesboro"), /*#__PURE__*/React__default.createElement("option", {
    value: "Norwood"
  }, "Norwood"), /*#__PURE__*/React__default.createElement("option", {
    value: "Oakboro"
  }, "Oakboro"), /*#__PURE__*/React__default.createElement("option", {
    value: "Ocean Isle"
  }, "Ocean Isle"), /*#__PURE__*/React__default.createElement("option", {
    value: "Old Fort"
  }, "Old Fort"), /*#__PURE__*/React__default.createElement("option", {
    value: "Olin"
  }, "Olin"), /*#__PURE__*/React__default.createElement("option", {
    value: "Pageland"
  }, "Pageland"), /*#__PURE__*/React__default.createElement("option", {
    value: "Patterson"
  }, "Patterson"), /*#__PURE__*/React__default.createElement("option", {
    value: "Peachland"
  }, "Peachland"), /*#__PURE__*/React__default.createElement("option", {
    value: "Penrose"
  }, "Penrose"), /*#__PURE__*/React__default.createElement("option", {
    value: "Pfafftown"
  }, "Pfafftown"), /*#__PURE__*/React__default.createElement("option", {
    value: "Pineville"
  }, "Pineville"), /*#__PURE__*/React__default.createElement("option", {
    value: "Pisgah Forest"
  }, "Pisgah Forest"), /*#__PURE__*/React__default.createElement("option", {
    value: "Polkton"
  }, "Polkton"), /*#__PURE__*/React__default.createElement("option", {
    value: "Purlear"
  }, "Purlear"), /*#__PURE__*/React__default.createElement("option", {
    value: "Qualla"
  }, "Qualla"), /*#__PURE__*/React__default.createElement("option", {
    value: "Raleigh"
  }, "Raleigh"), /*#__PURE__*/React__default.createElement("option", {
    value: "Ranlo"
  }, "Ranlo"), /*#__PURE__*/React__default.createElement("option", {
    value: "Rhodhiss"
  }, "Rhodhiss"), /*#__PURE__*/React__default.createElement("option", {
    value: "Richburg"
  }, "Richburg"), /*#__PURE__*/React__default.createElement("option", {
    value: "Richfield"
  }, "Richfield"), /*#__PURE__*/React__default.createElement("option", {
    value: "Robbinsville"
  }, "Robbinsville"), /*#__PURE__*/React__default.createElement("option", {
    value: "Rock Hill"
  }, "Rock Hill"), /*#__PURE__*/React__default.createElement("option", {
    value: "Rockingham"
  }, "Rockingham"), /*#__PURE__*/React__default.createElement("option", {
    value: "Rockwell"
  }, "Rockwell"), /*#__PURE__*/React__default.createElement("option", {
    value: "Ronda"
  }, "Ronda"), /*#__PURE__*/React__default.createElement("option", {
    value: "Rosman"
  }, "Rosman"), /*#__PURE__*/React__default.createElement("option", {
    value: "Ruby"
  }, "Ruby"), /*#__PURE__*/React__default.createElement("option", {
    value: "Rural Hall"
  }, "Rural Hall"), /*#__PURE__*/React__default.createElement("option", {
    value: "Rutherford College"
  }, "Rutherford College"), /*#__PURE__*/React__default.createElement("option", {
    value: "Rutherfordton"
  }, "Rutherfordton"), /*#__PURE__*/React__default.createElement("option", {
    value: "Salisbury"
  }, "Salisbury"), /*#__PURE__*/React__default.createElement("option", {
    value: "Saluda"
  }, "Saluda"), /*#__PURE__*/React__default.createElement("option", {
    value: "Sapphire"
  }, "Sapphire"), /*#__PURE__*/React__default.createElement("option", {
    value: "Sharon"
  }, "Sharon"), /*#__PURE__*/React__default.createElement("option", {
    value: "Shelby"
  }, "Shelby"), /*#__PURE__*/React__default.createElement("option", {
    value: "Sherrills Ford"
  }, "Sherrills Ford"), /*#__PURE__*/React__default.createElement("option", {
    value: "Siler City"
  }, "Siler City"), /*#__PURE__*/React__default.createElement("option", {
    value: "Smyrna"
  }, "Smyrna"), /*#__PURE__*/React__default.createElement("option", {
    value: "Spartanburg"
  }, "Spartanburg"), /*#__PURE__*/React__default.createElement("option", {
    value: "Spencer"
  }, "Spencer"), /*#__PURE__*/React__default.createElement("option", {
    value: "Spindale"
  }, "Spindale"), /*#__PURE__*/React__default.createElement("option", {
    value: "Spruce Pine"
  }, "Spruce Pine"), /*#__PURE__*/React__default.createElement("option", {
    value: "Stallings"
  }, "Stallings"), /*#__PURE__*/React__default.createElement("option", {
    value: "Stanfield"
  }, "Stanfield"), /*#__PURE__*/React__default.createElement("option", {
    value: "Stanley"
  }, "Stanley"), /*#__PURE__*/React__default.createElement("option", {
    value: "Star"
  }, "Star"), /*#__PURE__*/React__default.createElement("option", {
    value: "State Road"
  }, "State Road"), /*#__PURE__*/React__default.createElement("option", {
    value: "Statesville"
  }, "Statesville"), /*#__PURE__*/React__default.createElement("option", {
    value: "Stony Point"
  }, "Stony Point"), /*#__PURE__*/React__default.createElement("option", {
    value: "Sugar Grove"
  }, "Sugar Grove"), /*#__PURE__*/React__default.createElement("option", {
    value: "Sugar Mountain"
  }, "Sugar Mountain"), /*#__PURE__*/React__default.createElement("option", {
    value: "Sumter"
  }, "Sumter"), /*#__PURE__*/React__default.createElement("option", {
    value: "Swannanoa"
  }, "Swannanoa"), /*#__PURE__*/React__default.createElement("option", {
    value: "Sylva"
  }, "Sylva"), /*#__PURE__*/React__default.createElement("option", {
    value: "Taylorsville"
  }, "Taylorsville"), /*#__PURE__*/React__default.createElement("option", {
    value: "Tega Cay"
  }, "Tega Cay"), /*#__PURE__*/React__default.createElement("option", {
    value: "Terrell"
  }, "Terrell"), /*#__PURE__*/React__default.createElement("option", {
    value: "Thomasville"
  }, "Thomasville"), /*#__PURE__*/React__default.createElement("option", {
    value: "Thurmond"
  }, "Thurmond"), /*#__PURE__*/React__default.createElement("option", {
    value: "Todd"
  }, "Todd"), /*#__PURE__*/React__default.createElement("option", {
    value: "Topton"
  }, "Topton"), /*#__PURE__*/React__default.createElement("option", {
    value: "Traphill"
  }, "Traphill"), /*#__PURE__*/React__default.createElement("option", {
    value: "Travelers Rest"
  }, "Travelers Rest"), /*#__PURE__*/React__default.createElement("option", {
    value: "Troutman"
  }, "Troutman"), /*#__PURE__*/React__default.createElement("option", {
    value: "Troy"
  }, "Troy"), /*#__PURE__*/React__default.createElement("option", {
    value: "Tryon"
  }, "Tryon"), /*#__PURE__*/React__default.createElement("option", {
    value: "Tuckasegee"
  }, "Tuckasegee"), /*#__PURE__*/React__default.createElement("option", {
    value: "Union"
  }, "Union"), /*#__PURE__*/React__default.createElement("option", {
    value: "Union Grove"
  }, "Union Grove"), /*#__PURE__*/React__default.createElement("option", {
    value: "Union Mills"
  }, "Union Mills"), /*#__PURE__*/React__default.createElement("option", {
    value: "Valdese"
  }, "Valdese"), /*#__PURE__*/React__default.createElement("option", {
    value: "Vale"
  }, "Vale"), /*#__PURE__*/React__default.createElement("option", {
    value: "Van Wyck"
  }, "Van Wyck"), /*#__PURE__*/React__default.createElement("option", {
    value: "Vilas"
  }, "Vilas"), /*#__PURE__*/React__default.createElement("option", {
    value: "Waco"
  }, "Waco"), /*#__PURE__*/React__default.createElement("option", {
    value: "Wadesboro"
  }, "Wadesboro"), /*#__PURE__*/React__default.createElement("option", {
    value: "Waxhaw"
  }, "Waxhaw"), /*#__PURE__*/React__default.createElement("option", {
    value: "Waynesville"
  }, "Waynesville"), /*#__PURE__*/React__default.createElement("option", {
    value: "Weaverville"
  }, "Weaverville"), /*#__PURE__*/React__default.createElement("option", {
    value: "Webster"
  }, "Webster"), /*#__PURE__*/React__default.createElement("option", {
    value: "Weddington"
  }, "Weddington"), /*#__PURE__*/React__default.createElement("option", {
    value: "Wellford"
  }, "Wellford"), /*#__PURE__*/React__default.createElement("option", {
    value: "Wesley Chapel"
  }, "Wesley Chapel"), /*#__PURE__*/React__default.createElement("option", {
    value: "West Jefferson"
  }, "West Jefferson"), /*#__PURE__*/React__default.createElement("option", {
    value: "Whittier"
  }, "Whittier"), /*#__PURE__*/React__default.createElement("option", {
    value: "Wilkesboro"
  }, "Wilkesboro"), /*#__PURE__*/React__default.createElement("option", {
    value: "Wilmington"
  }, "Wilmington"), /*#__PURE__*/React__default.createElement("option", {
    value: "Wingate"
  }, "Wingate"), /*#__PURE__*/React__default.createElement("option", {
    value: "Winnsboro"
  }, "Winnsboro"), /*#__PURE__*/React__default.createElement("option", {
    value: "Winston Salem"
  }, "Winston Salem"), /*#__PURE__*/React__default.createElement("option", {
    value: "Woodfin"
  }, "Woodfin"), /*#__PURE__*/React__default.createElement("option", {
    value: "Woodleaf"
  }, "Woodleaf"), /*#__PURE__*/React__default.createElement("option", {
    value: "Yadkinville"
  }, "Yadkinville"), /*#__PURE__*/React__default.createElement("option", {
    value: "York"
  }, "York"), /*#__PURE__*/React__default.createElement("option", {
    value: "Zirconia"
  }, "Zirconia"));
};

var _templateObject$1;
var ButtonWrap = styled(reactBootstrap.Button)(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteralLoose(["\n  background-color: ", ";\n  border-color: ", ";\n  padding: 5px 30px;\n  &:hover {\n    background-color: ", ";\n    border-color: ", ";\n  }\n"])), colors.hex("primary"), colors.hex("primary"), colors.hover("primary"), colors.hex("primary"));

var QuickSearchPlus = function QuickSearchPlus() {
  var _useState = React.useState(""),
      activeCity = _useState[0],
      setActiveCity = _useState[1];

  var _useState2 = React.useState(600000),
      maxPrice = _useState2[0],
      setMaxPrice = _useState2[1];

  var validateInputs = function validateInputs(active, max) {
    if (active) {
      if (max) {
        var args = active !== "Any" ? {
          MinPrice: "0",
          MinBeds: "1",
          MinBaths: "1",
          MinImprovedSqFt: "1",
          MaxPrice: max ? parseInt(max) : "600000",
          Locations: active
        } : {
          MinPrice: "0",
          MinBeds: "1",
          MinBaths: "1",
          MinImprovedSqFt: "1",
          MaxPrice: max ? parseInt(max) : "600000"
        };
        return args;
      }
    }

    return false;
  };

  var handleMax = function handleMax(e) {
    setMaxPrice(e.target.value);
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var isValid = validateInputs(activeCity, maxPrice);

    if (isValid) {
      var argArr = Object.keys(isValid);
      var argStr = argArr.reduce(function (acc, val) {
        return acc + "&" + val + "=" + isValid[val];
      }, "#&PerformSearch");
      window.location.href = baseUrl + argStr;
    }
  };

  return /*#__PURE__*/React__default.createElement(reactBootstrap.Form, {
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/React__default.createElement(CityList, {
    setActiveCity: setActiveCity
  }), /*#__PURE__*/React__default.createElement("div", {
    style: {
      width: "20px"
    }
  }), /*#__PURE__*/React__default.createElement(reactBootstrap.Form.Control, {
    type: "input",
    placeholder: "Max Price",
    style: {
      maxWidth: "400px"
    },
    onBlur: handleMax
  }), /*#__PURE__*/React__default.createElement("div", {
    style: {
      width: "20px"
    }
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "submit-advanced-wrap"
  }, /*#__PURE__*/React__default.createElement(ButtonWrap, {
    onClick: handleSubmit
  }, "Submit")));
};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty$4 = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty$4.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

var _templateObject$2;
var HeadingWrap = styled.div(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteralLoose(["\n  h1,\n  h2 {\n    color: ", ";\n    text-transform: uppercase;\n    font-size: 8vh;\n    &.center {\n      text-align: center;\n    }\n    &.larger {\n      font-size: 11vh;\n    }\n  }\n"])), colors.hex("primary"));

var HeadingTitle = function HeadingTitle(_ref) {
  var title = _ref.title,
      reverse = _ref.reverse,
      center = _ref.center,
      larger = _ref.larger,
      h2 = _ref.h2;
  var classes = ["font-title"];

  if (reverse) {
    classes.push("reverse");
  }

  if (center) {
    classes.push("center");
  }

  if (larger) {
    classes.push("larger");
  }

  var Heading = function Heading(_ref2) {
    var h2 = _ref2.h2,
        children = _ref2.children,
        classes = _ref2.classes;
    return !h2 ? /*#__PURE__*/React__default.createElement("h1", {
      className: classes.join(" ")
    }, children) : /*#__PURE__*/React__default.createElement("h2", {
      className: classes.join(" ")
    }, children);
  };

  return /*#__PURE__*/React__default.createElement(HeadingWrap, null, /*#__PURE__*/React__default.createElement(Heading, {
    classes: classes,
    h2: h2
  }, title));
};
HeadingTitle.propTypes = {
  title: propTypes.string.isRequired,
  reverse: propTypes.bool,
  center: propTypes.bool,
  larger: propTypes.bool,
  h2: propTypes.bool
};
HeadingTitle.defaultTypes = {
  reverse: true,
  center: false,
  larger: false,
  h2: false
};

var _templateObject$3, _templateObject2$1;
var HeroWrap = styled(reactBootstrap.Container)(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteralLoose(["\n  padding: 0;\n  margin: 0;\n  position: relative;\n  .bg {\n    .wmk-media-video {\n      height: 45vh;\n    }\n  }\n  .fg {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  border-bottom: 4px solid ", ";\n  .hidden {\n    display: none;\n  }\n  .flex-center {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n"])), colors.hex("primary"));

var HeroSearch = function HeroSearch() {
  var _useStaticQuery = gatsby.useStaticQuery(gatsby.graphql(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteralLoose(["\n    {\n      options: contentfulGlobal(slug: { eq: \"main\" }) {\n        ...NodeGlobalHomeFields\n      }\n    }\n  "])))),
      options = _useStaticQuery.options;

  var companyName = options.companyName,
      hero = options.hero;
  var fluid = hero.fluid,
      file = hero.file;
  var url = file.url;
  return /*#__PURE__*/React__default.createElement(HeroWrap, {
    fluid: true
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "bg"
  }, fluid && !url && /*#__PURE__*/React__default.createElement(Img, {
    fluid: fluid,
    alt: companyName
  }), url && /*#__PURE__*/React__default.createElement(wmkLib.Video, {
    url: url
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "fg"
  }, /*#__PURE__*/React__default.createElement(reactBootstrap.Row, {
    className: "flex-column"
  }, /*#__PURE__*/React__default.createElement(reactBootstrap.Col, null, /*#__PURE__*/React__default.createElement(HeadingTitle, {
    title: "Discover",
    center: true,
    reverse: true
  })), /*#__PURE__*/React__default.createElement(QuickSearchPlus, null))));
};

var IDXHero = HeroSearch;

exports.IDXHero = IDXHero;
//# sourceMappingURL=index.js.map
