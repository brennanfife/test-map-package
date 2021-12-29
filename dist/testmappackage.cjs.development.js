'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var react = require('@chakra-ui/react');
require('leaflet/dist/leaflet.css');
var reactLeaflet = require('@monsonjeremy/react-leaflet');
var React = require('react');
var React__default = _interopDefault(React);
var reactTileMap = require('react-tile-map');
var fi = require('react-icons/fi');
var axios = _interopDefault(require('axios'));

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var runtime_1 = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined$1;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined$1;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined$1, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined$1;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined$1;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   module.exports 
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}
});

function CryptoVoxels() {
  var _useState = React.useState([]),
      allFeatures = _useState[0],
      setAllFeatures = _useState[1];

  var _useState2 = React.useState(0),
      hoverId = _useState2[0];

  var _useState3 = React.useState(true),
      setUpdateHover = _useState3[1];

  function getAllFeatures() {
    return _getAllFeatures.apply(this, arguments);
  } // TODO: consider moving this above the component level to reduce endpoint calls


  function _getAllFeatures() {
    _getAllFeatures = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee() {
      var URL_ENDPOINT, featuresJSON, featuresRaw, resp, features, parsedFeatures;
      return runtime_1.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              URL_ENDPOINT = 'https://www.cryptovoxels.com/api/parcels.json';
              featuresJSON = {
                parcels: []
              };
              _context.prev = 2;
              _context.next = 5;
              return fetch(URL_ENDPOINT);

            case 5:
              featuresRaw = _context.sent;
              _context.next = 8;
              return featuresRaw.json();

            case 8:
              featuresJSON = _context.sent;
              _context.next = 19;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](2);
              _context.next = 15;
              return window.fetch('../../cryptovoxels_parcels.json');

            case 15:
              resp = _context.sent;
              _context.next = 18;
              return resp.json();

            case 18:
              featuresJSON = _context.sent;

            case 19:
              features = [];
              featuresJSON.parcels.forEach(function (parcel) {
                var value = {
                  type: 'Feature',
                  geometry: parcel.geometry,
                  parcels: {
                    parcel: parcel
                  }
                };
                features.push(value);
              });
              parsedFeatures = features.map(function (item) {
                item.geometry.coordinates[0] = item.geometry.coordinates[0].map(function (arr) {
                  return Array.from(arr).reverse();
                });
                return item;
              });
              setAllFeatures(function () {
                return parsedFeatures;
              });

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 11]]);
    }));
    return _getAllFeatures.apply(this, arguments);
  }

  React.useEffect(function () {
    var mounted = true;

    if (mounted) {
      // if (
      //   hoveredListing &&
      //   hoveredListing.token_id &&
      //   hoveredListing.token_id != hoverId
      // ) {
      // setHoverId(hoveredListing.token_id);
      setUpdateHover(true); // }

      if (allFeatures.length === 0) getAllFeatures();
    } //hoveredListing


    return function () {
      mounted = false;
    };
  }, [allFeatures]);
  var polygonOptions = {
    fillOpacity: 0,
    stroke: false,
    color: 'purple'
  };
  var highlightOptions = {
    fillOpacity: 0.5,
    stroke: false,
    color: 'purple'
  };

  function onClick(_x) {
    return _onClick.apply(this, arguments);
  }

  function _onClick() {
    _onClick = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(id) {
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log('id:', id); // const URL_ENDPOINT = `asset/0x79986af15539de2db9a5086382daeda917a9cf0c/${id}`;
              // try {
              //   const assetRaw = await fetchOpensea(URL_ENDPOINT);
              //   const asset = await assetRaw.json();
              //   const formattedListing = formatAssetForCard(asset, selectedWorld);
              //   setSelectedListing(formattedListing);
              //   setListingDialogIsOpen(true);
              // } catch (err) {
              //   console.log(`onClick endpoint err: ${err}`);
              // }

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _onClick.apply(this, arguments);
  }

  var onMouseEvent = function onMouseEvent(event, type, feature) {
    console.log(feature);

    switch (type) {
      case 'over':
        event.target.setStyle({
          fillOpacity: 0.5
        });
        break;

      case 'out':
        event.target.setStyle({
          fillOpacity: 0.0
        });
        break;
    }
  };

  var cachedOverlay = React.useMemo(function () {
    setUpdateHover(false);
    return allFeatures.map(function (feature, i) {
      return React__default.createElement(reactLeaflet.Polygon, {
        key: i,
        pathOptions: feature.parcels.parcel.id === hoverId ? highlightOptions : polygonOptions,
        positions: feature.geometry.coordinates[0],
        eventHandlers: {
          click: function click() {
            onClick(feature.parcels.parcel.id);
          },
          mouseover: function mouseover(event) {
            return onMouseEvent(event, 'over', feature);
          },
          mouseout: function mouseout(event) {
            return onMouseEvent(event, 'out', feature);
          }
        }
      });
    }); //updateHover, hoverId
  }, [allFeatures]);
  return React__default.createElement(react.Box, {
    h: "100%",
    w: "100%"
  }, React__default.createElement(reactLeaflet.MapContainer, {
    center: [0, 0],
    zoom: 7
  }, React__default.createElement(react.Box, {
    h: "50rem"
  }), React__default.createElement(reactLeaflet.TileLayer, {
    url: "https://map.cryptovoxels.com/tile?z={z}&x={x}&y={y}"
  }), cachedOverlay));
}

var _excluded = ["layers", "className"];
var COLOR_BY_TYPE = /*#__PURE__*/Object.freeze({
  0: '#ff9990',
  1: '#ff4053',
  2: '#ff9990',
  3: '#ff4053',
  4: '#ffbd33',
  5: '#5054D4',
  6: '#563db8',
  7: '#716C7A',
  8: '#70AC76',
  9: '#3D3A46',
  10: '#3D3A46',
  11: '#09080A',
  12: '#18141a',
  13: '#110e13',
  14: '#0d0b0e'
});

var Atlas = /*#__PURE__*/function (_PureComponent) {
  _inheritsLoose(Atlas, _PureComponent);

  function Atlas() {
    var _this;

    _this = _PureComponent.apply(this, arguments) || this;
    _this.state = {
      tiles: _this.props.tiles
    };
    _this.mounted = true;

    _this.layer = function (x, y) {
      var tiles = _this.state.tiles;
      var id = x + ',' + y;

      if (tiles && id in tiles) {
        var tile = tiles[id];
        return {
          //@ts-ignore
          color: COLOR_BY_TYPE[tile.type],
          top: !!tile.top,
          left: !!tile.left,
          topLeft: !!tile.topLeft
        };
      } else {
        return {
          color: (x + y) % 2 === 0 ? COLOR_BY_TYPE[13] : COLOR_BY_TYPE[14]
        };
      }
    };

    _this.handleUpdateTiles = function (tiles) {
      if (_this.mounted) {
        _this.setState({
          tiles: tiles
        });
      }
    };

    return _this;
  }

  var _proto = Atlas.prototype;

  _proto.componentDidMount = function componentDidMount() {

    this.mounted = true;
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    if (this.props.tiles && this.props.tiles !== this.state.tiles) {
      this.setState({
        tiles: this.props.tiles
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  _proto.render = function render() {
    var _this$props = this.props,
        layers = _this$props.layers,
        className = _this$props.className,
        rest = _objectWithoutPropertiesLoose(_this$props, _excluded);

    return React__default.createElement(React__default.Fragment, null, React__default.createElement(reactTileMap.TileMap, Object.assign({}, rest, {
      className: className.trim(),
      //@ts-ignore
      layers: [this.layer].concat(layers)
    })), React__default.createElement(react.Box, {
      bgColor: "black",
      h: "20rem"
    }));
  };

  return Atlas;
}(React.PureComponent);
Atlas.defaultProps = /*#__PURE__*/_extends({}, reactTileMap.TileMap.defaultProps, {
  layers: []
}); // export default function Atlas(props: any) {
//   const [tiles] = useState<Record<string, AtlasTile>>(props.tiles);
//   const [layers] = useState([]);
//   const layer: Layer = (x, y) => {
//     const id = x + ',' + y;
//     if (tiles && id in tiles) {
//       const tile = tiles[id];
//       return {
//         //@ts-ignore
//         color: COLOR_BY_TYPE[tile.type],
//         top: !!tile.top,
//         left: !!tile.left,
//         topLeft: !!tile.topLeft,
//       };
//     } else {
//       return {
//         color: (x + y) % 2 === 0 ? COLOR_BY_TYPE[13] : COLOR_BY_TYPE[14],
//       };
//     }
//   };
//   useEffect(() => {
//     let mounted = true;
//     if (mounted) {
//       //   if (!tiles) Atlas.fetchTiles().then(setTiles(tiles));
//       mounted = true;
//     }
//     return () => {
//       mounted = false;
//     };
//   }, [tiles]);
//   return (
//     <>
//       <TileMap
//         // {...props.rest}
//         // className={props.className.trim()}
//         //@ts-ignore
//         layers={[layer, ...layers!]}
//       />
//       <Box bgColor="red.500" h="10rem" />
//     </>
//   );
// }

function Controls(_ref) {
  var ZoomLevels = _ref.ZoomLevels,
      zoomLevel = _ref.zoomLevel,
      setZoomLevel = _ref.setZoomLevel,
      toggleForSaleLayer = _ref.toggleForSaleLayer;
  return React__default.createElement(react.VStack, {
    direction: "column",
    align: "flex-end",
    position: "absolute",
    marginBottom: "1rem",
    bottom: 3,
    right: 3,
    zIndex: "10"
  }, React__default.createElement(react.ButtonGroup, {
    isAttached: true,
    size: "sm"
  }, React__default.createElement(react.IconButton, {
    color: "black",
    bgColor: "gray.50",
    borderRadius: "md",
    "aria-label": "Zoom out",
    icon: React__default.createElement(fi.FiMinus, null),
    isDisabled: zoomLevel === '0.1',
    onClick: function onClick() {
      return setZoomLevel(ZoomLevels[ZoomLevels.indexOf(zoomLevel) - 1]);
    }
  }), React__default.createElement(react.IconButton, {
    color: "black",
    bgColor: "gray.50",
    borderRadius: "md",
    "aria-label": "Zoom in",
    icon: React__default.createElement(fi.FiPlus, null),
    isDisabled: zoomLevel === '1.0',
    onClick: function onClick() {
      return setZoomLevel(ZoomLevels[ZoomLevels.indexOf(zoomLevel) + 1]);
    }
  })), React__default.createElement(react.HStack, {
    bgColor: "gray.50",
    p: "0.5rem",
    borderRadius: "0.5rem"
  }, React__default.createElement(react.Text, {
    color: "black",
    id: "for-sale"
  }, "For sale?"), React__default.createElement(react.Checkbox, {
    size: "sm",
    id: "for-sale",
    colorScheme: "purple",
    defaultChecked: true,
    onChange: toggleForSaleLayer,
    "aria-labelledby": "for-sale"
  })));
}

function DecentralandMap(_ref) {
  var withControls = _ref.withControls;

  var _useState = React.useState(),
      tiles = _useState[0],
      setTiles = _useState[1];

  var _useState2 = React.useState({}),
      setTokenIds = _useState2[1];

  var _useState3 = React.useState(),
      heatTiles = _useState3[0];

  var _useState4 = React.useState('0.6'),
      zoomLevel = _useState4[0],
      setZoomLevel = _useState4[1];

  var _useState5 = React.useState([]),
      layers = _useState5[0],
      setLayers = _useState5[1];

  var _useState6 = React.useState(true),
      forSale = _useState6[0],
      setForSale = _useState6[1];

  var _useState7 = React.useState(false),
      loaded = _useState7[0],
      setIsLoaded = _useState7[1];

  var _useState8 = React.useState(null),
      hover = _useState8[0],
      setHover = _useState8[1]; // const [hoverId, setHoverId] = useState(0);
  // const [selectedMapView] = useSelectedMapView();
  // const [, setSelectedListing] = useSelectedListing();
  // const [hoveredListing] = useHoveredListing();
  // const [, setListingDialogIsOpen] = useListingDialog();


  var ZoomLevels = ['0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1.0'];
  var selected = [];

  function isSelected(x, y) {
    return selected.some(function (coord) {
      return coord.x === x && coord.y === y;
    });
  }

  var handleHover = function handleHover(x, y) {
    // console.log(x);
    setHover({
      x: x,
      y: y
    });
  };

  var toggleForSaleLayer = function toggleForSaleLayer() {
    setForSale(!forSale);
    setIsLoaded(false);
    handleHover(10, 10);
  };

  var forSaleLayer = function forSaleLayer(x, y) {
    var key = x + ',' + y; //@ts-ignore

    if (tiles && tiles[key] && 'price' in tiles[key]) {
      return {
        color: '#00d3ff'
      };
    }

    return null;
  };

  var heatMapLayer = function heatMapLayer(x, y) {
    var key = x + ',' + y; //@ts-ignore

    if (heatTiles && heatTiles[key]) {
      return {
        color: '#ffa500'
      };
    }

    return null;
  };

  var selectedStrokeLayer = function selectedStrokeLayer(x, y) {
    return isSelected(x, y) ? {
      color: '#ff0044',
      scale: 1.4
    } : null;
  };

  var isHighlighted = function isHighlighted(x, y) {
    if (!hover) return false; // only highlight a 10x10 area centered around hover coords

    var radius = 1;
    return x > hover.x - radius && x < hover.x + radius && y > hover.y - radius && y < hover.y + radius;
  };

  var hoverStrokeLayer = function hoverStrokeLayer(x, y) {
    if (isHighlighted(x, y)) {
      return {
        color: '#ff1a4fff',
        scale: 1.25
      };
    }

    return null;
  };

  var hoverFillLayer = function hoverFillLayer(x, y) {
    if (isHighlighted(x, y)) {
      return {
        color: '#ff9990ff',
        scale: 1.2
      };
    }

    return null;
  }; // tile layout with districts and roads


  React.useEffect(function () {
    // if (
    //   hoveredListing &&
    //   hoveredListing.traits &&
    //   hoveredListing.id != hoverId
    // ) {
    //   let hoverX = 0;
    //   let hoverY = 0;
    //   hoveredListing.traits.forEach((trait: any) => {
    //     if (trait.trait_type === 'X') {
    //       hoverX = trait.value;
    //     }
    //     if (trait.trait_type === 'Y') {
    //       hoverY = trait.value;
    //     }
    //   });
    //   // won't work for coordinate 0,0 but whatever
    //   if (hoverX || hoverY) {
    //     handleHover(hoverX, hoverY);
    //   }
    //   setHoverId(hoveredListing.id);
    // }
    if (forSale) {
      setLayers([heatMapLayer, selectedStrokeLayer, hoverStrokeLayer, hoverFillLayer, forSaleLayer]);
    } else {
      setLayers([heatMapLayer, selectedStrokeLayer, hoverStrokeLayer, hoverFillLayer]);
    }

    var isCancelled = false; // TOODO: swap the URLs

    var fetchData = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee() {
        var resp, data, resp2, data2;
        return runtime_1.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!window) {
                  _context.next = 21;
                  break;
                }

                _context.prev = 1;
                _context.next = 4;
                return window.fetch('https://api.decentraland.org/v1/tiles');

              case 4:
                resp = _context.sent;
                _context.next = 7;
                return resp.json();

              case 7:
                data = _context.sent;
                if (!isCancelled) setTiles(data.data); // ugly workarond to weird tile bug

                _context.next = 11;
                return window.fetch('https://api.decentraland.org/v2/tiles?include=tokenId');

              case 11:
                resp2 = _context.sent;
                _context.next = 14;
                return resp2.json();

              case 14:
                data2 = _context.sent;
                setTokenIds(data2.data);
                setIsLoaded(true);
                _context.next = 21;
                break;

              case 19:
                _context.prev = 19;
                _context.t0 = _context["catch"](1);

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 19]]);
      }));

      return function fetchData() {
        return _ref2.apply(this, arguments);
      };
    }();

    if (!loaded) {
      fetchData();
    }

    return function () {
      isCancelled = true;
    };
  }, [forSale, loaded, hover]); // heat layer

  React.useEffect(function () {
  }, []);

  function handleClick(_x, _x2) {
    return _handleClick.apply(this, arguments);
  }

  function _handleClick() {
    _handleClick = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(x, y) {
      var key;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              key = x + ',' + y; //@ts-ignore

              if (tiles && tiles[key]) {
                // let tokenId = '';
                // //@ts-ignore
                // if (tile.estate_id) {
                //   contractId = '0x959e104e1a4db6317fa58f8295f586e1a978c297';
                //   //@ts-ignore
                //   tokenId = tile.estate_id;
                // } else {
                //   contractId = '0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d';
                //   tokenId = tokenIds[key].tokenId;
                // }

                if (isSelected(x, y)) {
                  selected = selected.filter(function (coord) {
                    return coord.x !== x || coord.y !== y;
                  });
                } else if (selected.length) {
                  selected.pop();
                  selected.push({
                    x: x,
                    y: y
                  });
                } else {
                  selected.push({
                    x: x,
                    y: y
                  });
                } // make call to api to get data for this place
                // const LISTING_URL = 'asset/' + contractId + '/' + tokenId;
                // try {
                //   //TODO: replace
                //   const resp = await fetchOpensea(LISTING_URL);
                //   const json = await resp.json();
                //   json.coordinates = { x: x, y: y };
                //   const formattedListing = formatAssetForCard(json, 'decentraland');
                //   setSelectedListing(formattedListing);
                //   setListingDialogIsOpen(true);
                // } catch (error) {
                //   console.error(error);
                // }

              }

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _handleClick.apply(this, arguments);
  }

  return React__default.createElement(react.Box, {
    h: "100%",
    bgColor: "black"
  }, layers ? React__default.createElement(react.Box, {
    position: "relative",
    h: "100%"
  }, React__default.createElement(Atlas, {
    tiles: tiles,
    layers: layers,
    onHover: handleHover,
    onClick: handleClick,
    zoom: parseFloat(zoomLevel),
    isDraggable: true
  }), withControls && React__default.createElement(Controls, {
    ZoomLevels: ZoomLevels,
    zoomLevel: zoomLevel,
    setZoomLevel: setZoomLevel,
    toggleForSaleLayer: toggleForSaleLayer
  })) : React__default.createElement(react.Spinner, null));
}

// import 'leaflet/dist/leaflet.css';
function SomniumMap() {
  // const [allFeatures, setAllFeatures] = useState([]);
  // async function getAllFeatures() {
  //   try {
  //     const URL_ENDPOINT = '/data/somnium-space.json';
  //     const featuresRaw = await fetch(URL_ENDPOINT);
  //     const featuresJSON = await featuresRaw.json();
  //     let features: any[] = [];
  //     featuresJSON.assets.forEach((asset: any) => {
  //       features.push({ type: 'Feature', geometry: asset.geometry });
  //     });
  //     const parsedFeatures = features.map((item) => {
  //       item.geometry.geometry.coordinates[0] =
  //         item.geometry.geometry.coordinates[0].map((arr: any) => {
  //           return arr.reverse();
  //         });
  //       return item;
  //     });
  //     const featuresGeometry: any = parsedFeatures.map((obj) => obj.geometry);
  //     setAllFeatures(featuresGeometry);
  //   } catch (err) {
  //     console.log(`somniumSpace data fetch err: ${err}`);
  //   }
  // }
  // useEffect(() => {
  //   if (allFeatures.length === 0) getAllFeatures();
  // }, [allFeatures]);
  // const geoJSONOptions = {
  //   color: 'white',
  //   fillOpacity: 1,
  //   stroke: false,
  //   zIndex: 1,
  // };
  // async function onClick(id: number): Promise<any> {
  //   console.log('id:', id);
  // }
  // const onMouseEvent = (event: any, type: any) => {
  //   switch (type) {
  //     case 'over':
  //       event.target.setStyle({ color: 'purple' });
  //       break;
  //     case 'out':
  //       event.target.setStyle({ color: 'white' });
  //       break;
  //     default:
  //       break;
  //   }
  // };
  // const cachedOverlay = useMemo(() => {
  //   return allFeatures.map((obj: any, i) => (
  //     <Polygon
  //       key={i}
  //       pathOptions={geoJSONOptions}
  //       positions={obj.geometry.coordinates[0]}
  //       eventHandlers={{
  //         click: () => {
  //           onClick(obj.id);
  //         },
  //         mouseover: (event: any) => onMouseEvent(event, 'over'),
  //         mouseout: (event: any) => onMouseEvent(event, 'out'),
  //       }}
  //     />
  //   ));
  // }, [allFeatures]);
  // const imageBounds = [
  //   [-1, -1],
  //   [1, 1],
  // ];
  return React__default.createElement(react.Box, {
    h: "100%",
    w: "100%"
  }, "Somnium Space");
}

function TheSandboxMap() {
  var _useState = React.useState({}),
      tiles = _useState[0],
      setTiles = _useState[1];

  var _useState2 = React.useState('0.2'),
      zoomLevel = _useState2[0],
      setZoomLevel = _useState2[1];

  var _useState3 = React.useState([]),
      layers = _useState3[0],
      setLayers = _useState3[1];

  var _useState4 = React.useState(false),
      loaded = _useState4[0],
      setIsLoaded = _useState4[1];

  var ZoomLevels = ['0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1.0'];
  var selected = [];

  function isSelected(x, y) {
    return selected.some(function (coord) {
      return coord.x === x && coord.y === y;
    });
  }

  var hover;

  var handleHover = function handleHover(x, y) {
    hover = {
      x: x,
      y: y
    };
  }; // tile layout with districts and roads


  React.useEffect(function () {
    var isHighlighted = function isHighlighted(x, y) {
      if (!hover) return false; // only highlight a 10x10 area centered around hover coords

      var radius = 1;
      return x > hover.x - radius && x < hover.x + radius && y > hover.y - radius && y < hover.y + radius;
    };

    var heatMapLayer = function heatMapLayer(x, y) {
      var key = x + ',' + y; //@ts-ignore

      if (tiles && tiles[key]) {
        return {
          color: '#00d3ff'
        };
      }

      return null;
    };

    var hoverStrokeLayer = function hoverStrokeLayer(x, y) {
      if (isHighlighted(x, y)) {
        return {
          color: '#44ff00',
          scale: 1.25
        };
      }

      return null;
    };

    var hoverFillLayer = function hoverFillLayer(x, y) {
      if (isHighlighted(x, y)) {
        return {
          color: '#99ff90',
          scale: 1.2
        };
      }

      return null;
    };

    setLayers([heatMapLayer, hoverStrokeLayer, hoverFillLayer]);
    var isCancelled = false;

    var fetchData = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee() {
        var _yield$axios, data;

        return runtime_1.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios("./the-sandbox.json");

              case 3:
                _yield$axios = _context.sent;
                data = _yield$axios.data;
                console.log(data);
                if (!isCancelled) setTiles(data);
                setIsLoaded(true);
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 10]]);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    if (!loaded) {
      console.log('one');
      fetchData();
    }

    return function () {
      isCancelled = true;
    };
  }, [loaded, tiles]);

  function handleClick(_x, _x2) {
    return _handleClick.apply(this, arguments);
  }

  function _handleClick() {
    _handleClick = _asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2(x, y) {
      var key;
      return runtime_1.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              key = x + ',' + y; //@ts-ignore

              if (tiles && key in tiles) {
                // let tokenId = tiles[key].id;
                if (isSelected(x, y)) {
                  selected = selected.filter(function (coord) {
                    return coord.x !== x || coord.y !== y;
                  });
                } else if (selected.length) {
                  selected.pop();
                  selected.push({
                    x: x,
                    y: y
                  });
                } else {
                  selected.push({
                    x: x,
                    y: y
                  });
                } // make call to api to get data for this place
                //TODO: replace
                // const LISTING_URL =
                //   'asset/' + '0x50f5474724e0ee42d9a4e711ccfb275809fd6d4a' + '/' + tokenId;
                // try {
                //   const resp = await fetchOpensea(LISTING_URL);
                //   const json = await resp.json();
                //   json.coordinates = { x: x, y: y };
                //   const formattedListing = formatAssetForCard(json, 'the-sandbox');
                //   setSelectedListing(formattedListing);
                //   setListingDialogIsOpen(true);
                // } catch (error) {
                //   console.error(error);
                // }

              }

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _handleClick.apply(this, arguments);
  }

  return React__default.createElement(react.Box, {
    h: "100%",
    bgColor: "black"
  }, layers ? React__default.createElement(react.Box, {
    position: "relative",
    h: "100%"
  }, React__default.createElement(react.Box, {
    h: "100%"
  }, React__default.createElement(Atlas, {
    tiles: tiles,
    layers: layers,
    onHover: handleHover,
    onClick: handleClick,
    zoom: parseFloat(zoomLevel),
    x: 127,
    y: 108
  })), React__default.createElement(react.VStack, {
    direction: "column",
    align: "flex-end",
    position: "absolute",
    bottom: 3,
    right: 3
  }, React__default.createElement(react.ButtonGroup, {
    isAttached: true,
    size: "sm",
    colorScheme: "gray"
  }, React__default.createElement(react.IconButton, {
    borderRadius: "md",
    "aria-label": "Zoom out",
    icon: React__default.createElement(fi.FiMinus, null),
    isDisabled: zoomLevel === '0.1',
    onClick: function onClick() {
      return setZoomLevel(ZoomLevels[ZoomLevels.indexOf(zoomLevel) - 1]);
    }
  }), React__default.createElement(react.IconButton, {
    borderRadius: "md",
    "aria-label": "Zoom in",
    icon: React__default.createElement(fi.FiPlus, null),
    isDisabled: zoomLevel === '1.0',
    onClick: function onClick() {
      return setZoomLevel(ZoomLevels[ZoomLevels.indexOf(zoomLevel) + 1]);
    }
  })))) : React__default.createElement(react.Spinner, null));
}

var customTheme = /*#__PURE__*/react.extendTheme({
  colors: {
    primary: '#FF6464',
    secondary: '#00A8CC',
    darkColor: '#21243D',
    lightColor: '#8695A4',
    whiteColor: ' #FFFFFF'
  },
  components: {
    Button: {
      variants: {
        solid: {
          backgroundColor: 'primary',
          color: 'whiteColor'
        },
        ghost: {
          color: 'secondary'
        }
      }
    },
    Heading: {
      variants: {
        '1': {
          fontSize: '44px',
          lineHeight: '60px'
        },
        '2': {
          fontSize: '34px',
          lineHeight: '50px'
        },
        '3': {
          fontSize: '30px',
          lineHeight: '44px'
        },
        '4': {
          fontSize: '26px',
          lineHeight: '38px'
        }
      }
    },
    Text: {
      variants: {
        '1': {
          fontSize: '16px',
          lineHeight: '23px',
          color: 'darkColor'
        },
        '2': {
          fontSize: '22px',
          lineHeight: '60px',
          color: 'darkColor'
        },
        '3': {
          fontSize: '18px',
          lineHeight: '26px',
          color: 'darkColor'
        },
        '4': {
          fontSize: '20px',
          lineHeight: '29.3px',
          color: 'lightColor'
        },
        '5': {
          fontSize: '14px',
          lineHeight: '20.5px',
          color: 'darkColor'
        },
        '6': {
          fontSize: '20px',
          lineHeight: '29.38px',
          color: 'darkColor'
        }
      }
    }
  }
});

var worlds = ['decentraland', 'the-sandbox', 'somnium-space', 'cryptovoxels'];
function Map(_ref) {
  var _ref$world = _ref.world,
      world = _ref$world === void 0 ? worlds[0] : _ref$world,
      _ref$withControls = _ref.withControls,
      withControls = _ref$withControls === void 0 ? false : _ref$withControls;
  return React__default.createElement(react.ChakraProvider, {
    theme: customTheme
  }, React__default.createElement(react.Box, {
    h: "100%",
    w: "100%"
  }, world === 'decentraland' ? React__default.createElement(DecentralandMap, {
    withControls: withControls
  }) : world === 'the-sandbox' ? React__default.createElement(TheSandboxMap, null) : world === 'somnium-space' ? React__default.createElement(SomniumMap, null) : world === 'cryptovoxels' ? React__default.createElement(CryptoVoxels, null) : null));
}

exports.Map = Map;
//# sourceMappingURL=testmappackage.cjs.development.js.map
