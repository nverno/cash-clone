var __defProp2 = Object.defineProperty;
var __defProps2 = Object.defineProperties;
var __getOwnPropDescs2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues2 = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp2.call(b2, prop))
      __defNormalProp2(a2, prop, b2[prop]);
  if (__getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(b2)) {
      if (__propIsEnum2.call(b2, prop))
        __defNormalProp2(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps2 = (a2, b2) => __defProps2(a2, __getOwnPropDescs2(b2));
var __objRest2 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp2.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum2.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const p$8 = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p$8();
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var reactDom = { exports: {} };
var reactDom_production_min = {};
var react = { exports: {} };
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$5 = Symbol.for("react.element"), n$6 = Symbol.for("react.portal"), p$7 = Symbol.for("react.fragment"), q$6 = Symbol.for("react.strict_mode"), r$4 = Symbol.for("react.profiler"), t$6 = Symbol.for("react.provider"), u$4 = Symbol.for("react.context"), v$4 = Symbol.for("react.forward_ref"), w$3 = Symbol.for("react.suspense"), x$2 = Symbol.for("react.memo"), y$2 = Symbol.for("react.lazy"), z$3 = Symbol.iterator;
function A$3(a2) {
  if (a2 === null || typeof a2 !== "object")
    return null;
  a2 = z$3 && a2[z$3] || a2["@@iterator"];
  return typeof a2 === "function" ? a2 : null;
}
var B$2 = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, C$1 = Object.assign, D$2 = {};
function E$2(a2, b2, e2) {
  this.props = a2;
  this.context = b2;
  this.refs = D$2;
  this.updater = e2 || B$2;
}
E$2.prototype.isReactComponent = {};
E$2.prototype.setState = function(a2, b2) {
  if (typeof a2 !== "object" && typeof a2 !== "function" && a2 != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a2, b2, "setState");
};
E$2.prototype.forceUpdate = function(a2) {
  this.updater.enqueueForceUpdate(this, a2, "forceUpdate");
};
function F$1() {
}
F$1.prototype = E$2.prototype;
function G$2(a2, b2, e2) {
  this.props = a2;
  this.context = b2;
  this.refs = D$2;
  this.updater = e2 || B$2;
}
var H$2 = G$2.prototype = new F$1();
H$2.constructor = G$2;
C$1(H$2, E$2.prototype);
H$2.isPureReactComponent = true;
var I$2 = Array.isArray, J = Object.prototype.hasOwnProperty, K$1 = { current: null }, L$2 = { key: true, ref: true, __self: true, __source: true };
function M$2(a2, b2, e2) {
  var d2, c2 = {}, k2 = null, h2 = null;
  if (b2 != null)
    for (d2 in b2.ref !== void 0 && (h2 = b2.ref), b2.key !== void 0 && (k2 = "" + b2.key), b2)
      J.call(b2, d2) && !L$2.hasOwnProperty(d2) && (c2[d2] = b2[d2]);
  var g2 = arguments.length - 2;
  if (g2 === 1)
    c2.children = e2;
  else if (1 < g2) {
    for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++)
      f2[m2] = arguments[m2 + 2];
    c2.children = f2;
  }
  if (a2 && a2.defaultProps)
    for (d2 in g2 = a2.defaultProps, g2)
      c2[d2] === void 0 && (c2[d2] = g2[d2]);
  return { $$typeof: l$5, type: a2, key: k2, ref: h2, props: c2, _owner: K$1.current };
}
function N$2(a2, b2) {
  return { $$typeof: l$5, type: a2.type, key: b2, ref: a2.ref, props: a2.props, _owner: a2._owner };
}
function O$2(a2) {
  return typeof a2 === "object" && a2 !== null && a2.$$typeof === l$5;
}
function escape(a2) {
  var b2 = { "=": "=0", ":": "=2" };
  return "$" + a2.replace(/[=:]/g, function(a3) {
    return b2[a3];
  });
}
var P$2 = /\/+/g;
function Q$2(a2, b2) {
  return typeof a2 === "object" && a2 !== null && a2.key != null ? escape("" + a2.key) : b2.toString(36);
}
function R$2(a2, b2, e2, d2, c2) {
  var k2 = typeof a2;
  if (k2 === "undefined" || k2 === "boolean")
    a2 = null;
  var h2 = false;
  if (a2 === null)
    h2 = true;
  else
    switch (k2) {
      case "string":
      case "number":
        h2 = true;
        break;
      case "object":
        switch (a2.$$typeof) {
          case l$5:
          case n$6:
            h2 = true;
        }
    }
  if (h2)
    return h2 = a2, c2 = c2(h2), a2 = d2 === "" ? "." + Q$2(h2, 0) : d2, I$2(c2) ? (e2 = "", a2 != null && (e2 = a2.replace(P$2, "$&/") + "/"), R$2(c2, b2, e2, "", function(a3) {
      return a3;
    })) : c2 != null && (O$2(c2) && (c2 = N$2(c2, e2 + (!c2.key || h2 && h2.key === c2.key ? "" : ("" + c2.key).replace(P$2, "$&/") + "/") + a2)), b2.push(c2)), 1;
  h2 = 0;
  d2 = d2 === "" ? "." : d2 + ":";
  if (I$2(a2))
    for (var g2 = 0; g2 < a2.length; g2++) {
      k2 = a2[g2];
      var f2 = d2 + Q$2(k2, g2);
      h2 += R$2(k2, b2, e2, f2, c2);
    }
  else if (f2 = A$3(a2), typeof f2 === "function")
    for (a2 = f2.call(a2), g2 = 0; !(k2 = a2.next()).done; )
      k2 = k2.value, f2 = d2 + Q$2(k2, g2++), h2 += R$2(k2, b2, e2, f2, c2);
  else if (k2 === "object")
    throw b2 = String(a2), Error("Objects are not valid as a React child (found: " + (b2 === "[object Object]" ? "object with keys {" + Object.keys(a2).join(", ") + "}" : b2) + "). If you meant to render a collection of children, use an array instead.");
  return h2;
}
function S$2(a2, b2, e2) {
  if (a2 == null)
    return a2;
  var d2 = [], c2 = 0;
  R$2(a2, d2, "", "", function(a3) {
    return b2.call(e2, a3, c2++);
  });
  return d2;
}
function T$2(a2) {
  if (a2._status === -1) {
    var b2 = a2._result;
    b2 = b2();
    b2.then(function(b3) {
      if (a2._status === 0 || a2._status === -1)
        a2._status = 1, a2._result = b3;
    }, function(b3) {
      if (a2._status === 0 || a2._status === -1)
        a2._status = 2, a2._result = b3;
    });
    a2._status === -1 && (a2._status = 0, a2._result = b2);
  }
  if (a2._status === 1)
    return a2._result.default;
  throw a2._result;
}
var U$2 = { current: null }, V$1 = { transition: null }, W$2 = { ReactCurrentDispatcher: U$2, ReactCurrentBatchConfig: V$1, ReactCurrentOwner: K$1 };
react_production_min.Children = { map: S$2, forEach: function(a2, b2, e2) {
  S$2(a2, function() {
    b2.apply(this, arguments);
  }, e2);
}, count: function(a2) {
  var b2 = 0;
  S$2(a2, function() {
    b2++;
  });
  return b2;
}, toArray: function(a2) {
  return S$2(a2, function(a3) {
    return a3;
  }) || [];
}, only: function(a2) {
  if (!O$2(a2))
    throw Error("React.Children.only expected to receive a single React element child.");
  return a2;
} };
react_production_min.Component = E$2;
react_production_min.Fragment = p$7;
react_production_min.Profiler = r$4;
react_production_min.PureComponent = G$2;
react_production_min.StrictMode = q$6;
react_production_min.Suspense = w$3;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$2;
react_production_min.cloneElement = function(a2, b2, e2) {
  if (a2 === null || a2 === void 0)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a2 + ".");
  var d2 = C$1({}, a2.props), c2 = a2.key, k2 = a2.ref, h2 = a2._owner;
  if (b2 != null) {
    b2.ref !== void 0 && (k2 = b2.ref, h2 = K$1.current);
    b2.key !== void 0 && (c2 = "" + b2.key);
    if (a2.type && a2.type.defaultProps)
      var g2 = a2.type.defaultProps;
    for (f2 in b2)
      J.call(b2, f2) && !L$2.hasOwnProperty(f2) && (d2[f2] = b2[f2] === void 0 && g2 !== void 0 ? g2[f2] : b2[f2]);
  }
  var f2 = arguments.length - 2;
  if (f2 === 1)
    d2.children = e2;
  else if (1 < f2) {
    g2 = Array(f2);
    for (var m2 = 0; m2 < f2; m2++)
      g2[m2] = arguments[m2 + 2];
    d2.children = g2;
  }
  return { $$typeof: l$5, type: a2.type, key: c2, ref: k2, props: d2, _owner: h2 };
};
react_production_min.createContext = function(a2) {
  a2 = { $$typeof: u$4, _currentValue: a2, _currentValue2: a2, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
  a2.Provider = { $$typeof: t$6, _context: a2 };
  return a2.Consumer = a2;
};
react_production_min.createElement = M$2;
react_production_min.createFactory = function(a2) {
  var b2 = M$2.bind(null, a2);
  b2.type = a2;
  return b2;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a2) {
  return { $$typeof: v$4, render: a2 };
};
react_production_min.isValidElement = O$2;
react_production_min.lazy = function(a2) {
  return { $$typeof: y$2, _payload: { _status: -1, _result: a2 }, _init: T$2 };
};
react_production_min.memo = function(a2, b2) {
  return { $$typeof: x$2, type: a2, compare: b2 === void 0 ? null : b2 };
};
react_production_min.startTransition = function(a2) {
  var b2 = V$1.transition;
  V$1.transition = {};
  try {
    a2();
  } finally {
    V$1.transition = b2;
  }
};
react_production_min.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
react_production_min.useCallback = function(a2, b2) {
  return U$2.current.useCallback(a2, b2);
};
react_production_min.useContext = function(a2) {
  return U$2.current.useContext(a2);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useDeferredValue = function(a2) {
  return U$2.current.useDeferredValue(a2);
};
react_production_min.useEffect = function(a2, b2) {
  return U$2.current.useEffect(a2, b2);
};
react_production_min.useId = function() {
  return U$2.current.useId();
};
react_production_min.useImperativeHandle = function(a2, b2, e2) {
  return U$2.current.useImperativeHandle(a2, b2, e2);
};
react_production_min.useInsertionEffect = function(a2, b2) {
  return U$2.current.useInsertionEffect(a2, b2);
};
react_production_min.useLayoutEffect = function(a2, b2) {
  return U$2.current.useLayoutEffect(a2, b2);
};
react_production_min.useMemo = function(a2, b2) {
  return U$2.current.useMemo(a2, b2);
};
react_production_min.useReducer = function(a2, b2, e2) {
  return U$2.current.useReducer(a2, b2, e2);
};
react_production_min.useRef = function(a2) {
  return U$2.current.useRef(a2);
};
react_production_min.useState = function(a2) {
  return U$2.current.useState(a2);
};
react_production_min.useSyncExternalStore = function(a2, b2, e2) {
  return U$2.current.useSyncExternalStore(a2, b2, e2);
};
react_production_min.useTransition = function() {
  return U$2.current.useTransition();
};
react_production_min.version = "18.1.0";
{
  react.exports = react_production_min;
}
var React = react.exports;
var scheduler = { exports: {} };
var scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports2) {
  function f2(a2, b2) {
    var c2 = a2.length;
    a2.push(b2);
    a:
      for (; 0 < c2; ) {
        var d2 = c2 - 1 >>> 1, e2 = a2[d2];
        if (0 < g2(e2, b2))
          a2[d2] = b2, a2[c2] = e2, c2 = d2;
        else
          break a;
      }
  }
  function h2(a2) {
    return a2.length === 0 ? null : a2[0];
  }
  function k2(a2) {
    if (a2.length === 0)
      return null;
    var b2 = a2[0], c2 = a2.pop();
    if (c2 !== b2) {
      a2[0] = c2;
      a:
        for (var d2 = 0, e2 = a2.length, w2 = e2 >>> 1; d2 < w2; ) {
          var m2 = 2 * (d2 + 1) - 1, C2 = a2[m2], n2 = m2 + 1, x2 = a2[n2];
          if (0 > g2(C2, c2))
            n2 < e2 && 0 > g2(x2, C2) ? (a2[d2] = x2, a2[n2] = c2, d2 = n2) : (a2[d2] = C2, a2[m2] = c2, d2 = m2);
          else if (n2 < e2 && 0 > g2(x2, c2))
            a2[d2] = x2, a2[n2] = c2, d2 = n2;
          else
            break a;
        }
    }
    return b2;
  }
  function g2(a2, b2) {
    var c2 = a2.sortIndex - b2.sortIndex;
    return c2 !== 0 ? c2 : a2.id - b2.id;
  }
  if (typeof performance === "object" && typeof performance.now === "function") {
    var l2 = performance;
    exports2.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports2.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = typeof setTimeout === "function" ? setTimeout : null, E2 = typeof clearTimeout === "function" ? clearTimeout : null, F2 = typeof setImmediate !== "undefined" ? setImmediate : null;
  typeof navigator !== "undefined" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function G2(a2) {
    for (var b2 = h2(t2); b2 !== null; ) {
      if (b2.callback === null)
        k2(t2);
      else if (b2.startTime <= a2)
        k2(t2), b2.sortIndex = b2.expirationTime, f2(r2, b2);
      else
        break;
      b2 = h2(t2);
    }
  }
  function H2(a2) {
    B2 = false;
    G2(a2);
    if (!A2)
      if (h2(r2) !== null)
        A2 = true, I2(J2);
      else {
        var b2 = h2(t2);
        b2 !== null && K2(H2, b2.startTime - a2);
      }
  }
  function J2(a2, b2) {
    A2 = false;
    B2 && (B2 = false, E2(L2), L2 = -1);
    z2 = true;
    var c2 = y2;
    try {
      G2(b2);
      for (v2 = h2(r2); v2 !== null && (!(v2.expirationTime > b2) || a2 && !M2()); ) {
        var d2 = v2.callback;
        if (typeof d2 === "function") {
          v2.callback = null;
          y2 = v2.priorityLevel;
          var e2 = d2(v2.expirationTime <= b2);
          b2 = exports2.unstable_now();
          typeof e2 === "function" ? v2.callback = e2 : v2 === h2(r2) && k2(r2);
          G2(b2);
        } else
          k2(r2);
        v2 = h2(r2);
      }
      if (v2 !== null)
        var w2 = true;
      else {
        var m2 = h2(t2);
        m2 !== null && K2(H2, m2.startTime - b2);
        w2 = false;
      }
      return w2;
    } finally {
      v2 = null, y2 = c2, z2 = false;
    }
  }
  var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
  function M2() {
    return exports2.unstable_now() - Q2 < P2 ? false : true;
  }
  function R2() {
    if (O2 !== null) {
      var a2 = exports2.unstable_now();
      Q2 = a2;
      var b2 = true;
      try {
        b2 = O2(true, a2);
      } finally {
        b2 ? S2() : (N2 = false, O2 = null);
      }
    } else
      N2 = false;
  }
  var S2;
  if (typeof F2 === "function")
    S2 = function() {
      F2(R2);
    };
  else if (typeof MessageChannel !== "undefined") {
    var T2 = new MessageChannel(), U2 = T2.port2;
    T2.port1.onmessage = R2;
    S2 = function() {
      U2.postMessage(null);
    };
  } else
    S2 = function() {
      D2(R2, 0);
    };
  function I2(a2) {
    O2 = a2;
    N2 || (N2 = true, S2());
  }
  function K2(a2, b2) {
    L2 = D2(function() {
      a2(exports2.unstable_now());
    }, b2);
  }
  exports2.unstable_IdlePriority = 5;
  exports2.unstable_ImmediatePriority = 1;
  exports2.unstable_LowPriority = 4;
  exports2.unstable_NormalPriority = 3;
  exports2.unstable_Profiling = null;
  exports2.unstable_UserBlockingPriority = 2;
  exports2.unstable_cancelCallback = function(a2) {
    a2.callback = null;
  };
  exports2.unstable_continueExecution = function() {
    A2 || z2 || (A2 = true, I2(J2));
  };
  exports2.unstable_forceFrameRate = function(a2) {
    0 > a2 || 125 < a2 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a2 ? Math.floor(1e3 / a2) : 5;
  };
  exports2.unstable_getCurrentPriorityLevel = function() {
    return y2;
  };
  exports2.unstable_getFirstCallbackNode = function() {
    return h2(r2);
  };
  exports2.unstable_next = function(a2) {
    switch (y2) {
      case 1:
      case 2:
      case 3:
        var b2 = 3;
        break;
      default:
        b2 = y2;
    }
    var c2 = y2;
    y2 = b2;
    try {
      return a2();
    } finally {
      y2 = c2;
    }
  };
  exports2.unstable_pauseExecution = function() {
  };
  exports2.unstable_requestPaint = function() {
  };
  exports2.unstable_runWithPriority = function(a2, b2) {
    switch (a2) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a2 = 3;
    }
    var c2 = y2;
    y2 = a2;
    try {
      return b2();
    } finally {
      y2 = c2;
    }
  };
  exports2.unstable_scheduleCallback = function(a2, b2, c2) {
    var d2 = exports2.unstable_now();
    typeof c2 === "object" && c2 !== null ? (c2 = c2.delay, c2 = typeof c2 === "number" && 0 < c2 ? d2 + c2 : d2) : c2 = d2;
    switch (a2) {
      case 1:
        var e2 = -1;
        break;
      case 2:
        e2 = 250;
        break;
      case 5:
        e2 = 1073741823;
        break;
      case 4:
        e2 = 1e4;
        break;
      default:
        e2 = 5e3;
    }
    e2 = c2 + e2;
    a2 = { id: u2++, callback: b2, priorityLevel: a2, startTime: c2, expirationTime: e2, sortIndex: -1 };
    c2 > d2 ? (a2.sortIndex = c2, f2(t2, a2), h2(r2) === null && a2 === h2(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c2 - d2))) : (a2.sortIndex = e2, f2(r2, a2), A2 || z2 || (A2 = true, I2(J2)));
    return a2;
  };
  exports2.unstable_shouldYield = M2;
  exports2.unstable_wrapCallback = function(a2) {
    var b2 = y2;
    return function() {
      var c2 = y2;
      y2 = b2;
      try {
        return a2.apply(this, arguments);
      } finally {
        y2 = c2;
      }
    };
  };
})(scheduler_production_min);
{
  scheduler.exports = scheduler_production_min;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = react.exports, ba = scheduler.exports;
function p$6(a2) {
  for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c2 = 1; c2 < arguments.length; c2++)
    b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
  return "Minified React error #" + a2 + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var da = /* @__PURE__ */ new Set(), ea = {};
function fa(a2, b2) {
  ha(a2, b2);
  ha(a2 + "Capture", b2);
}
function ha(a2, b2) {
  ea[a2] = b2;
  for (a2 = 0; a2 < b2.length; a2++)
    da.add(b2[a2]);
}
var ia = !(typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined"), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
function na(a2) {
  if (ja.call(ma, a2))
    return true;
  if (ja.call(la, a2))
    return false;
  if (ka.test(a2))
    return ma[a2] = true;
  la[a2] = true;
  return false;
}
function oa(a2, b2, c2, d2) {
  if (c2 !== null && c2.type === 0)
    return false;
  switch (typeof b2) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d2)
        return false;
      if (c2 !== null)
        return !c2.acceptsBooleans;
      a2 = a2.toLowerCase().slice(0, 5);
      return a2 !== "data-" && a2 !== "aria-";
    default:
      return false;
  }
}
function pa(a2, b2, c2, d2) {
  if (b2 === null || typeof b2 === "undefined" || oa(a2, b2, c2, d2))
    return true;
  if (d2)
    return false;
  if (c2 !== null)
    switch (c2.type) {
      case 3:
        return !b2;
      case 4:
        return b2 === false;
      case 5:
        return isNaN(b2);
      case 6:
        return isNaN(b2) || 1 > b2;
    }
  return false;
}
function t$5(a2, b2, c2, d2, e2, f2, g2) {
  this.acceptsBooleans = b2 === 2 || b2 === 3 || b2 === 4;
  this.attributeName = d2;
  this.attributeNamespace = e2;
  this.mustUseProperty = c2;
  this.propertyName = a2;
  this.type = b2;
  this.sanitizeURL = f2;
  this.removeEmptyString = g2;
}
var z$2 = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a2) {
  z$2[a2] = new t$5(a2, 0, false, a2, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a2) {
  var b2 = a2[0];
  z$2[b2] = new t$5(b2, 1, false, a2[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a2) {
  z$2[a2] = new t$5(a2, 2, false, a2.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a2) {
  z$2[a2] = new t$5(a2, 2, false, a2, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a2) {
  z$2[a2] = new t$5(a2, 3, false, a2.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a2) {
  z$2[a2] = new t$5(a2, 3, true, a2, null, false, false);
});
["capture", "download"].forEach(function(a2) {
  z$2[a2] = new t$5(a2, 4, false, a2, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a2) {
  z$2[a2] = new t$5(a2, 6, false, a2, null, false, false);
});
["rowSpan", "start"].forEach(function(a2) {
  z$2[a2] = new t$5(a2, 5, false, a2.toLowerCase(), null, false, false);
});
var qa = /[\-:]([a-z])/g;
function ra(a2) {
  return a2[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a2) {
  var b2 = a2.replace(qa, ra);
  z$2[b2] = new t$5(b2, 1, false, a2, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a2) {
  var b2 = a2.replace(qa, ra);
  z$2[b2] = new t$5(b2, 1, false, a2, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a2) {
  var b2 = a2.replace(qa, ra);
  z$2[b2] = new t$5(b2, 1, false, a2, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a2) {
  z$2[a2] = new t$5(a2, 1, false, a2.toLowerCase(), null, false, false);
});
z$2.xlinkHref = new t$5("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a2) {
  z$2[a2] = new t$5(a2, 1, false, a2.toLowerCase(), null, true, true);
});
function sa(a2, b2, c2, d2) {
  var e2 = z$2.hasOwnProperty(b2) ? z$2[b2] : null;
  if (e2 !== null ? e2.type !== 0 : d2 || !(2 < b2.length) || b2[0] !== "o" && b2[0] !== "O" || b2[1] !== "n" && b2[1] !== "N")
    pa(b2, c2, e2, d2) && (c2 = null), d2 || e2 === null ? na(b2) && (c2 === null ? a2.removeAttribute(b2) : a2.setAttribute(b2, "" + c2)) : e2.mustUseProperty ? a2[e2.propertyName] = c2 === null ? e2.type === 3 ? false : "" : c2 : (b2 = e2.attributeName, d2 = e2.attributeNamespace, c2 === null ? a2.removeAttribute(b2) : (e2 = e2.type, c2 = e2 === 3 || e2 === 4 && c2 === true ? "" : "" + c2, d2 ? a2.setAttributeNS(d2, b2, c2) : a2.setAttribute(b2, c2)));
}
var ta = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ua = Symbol.for("react.element"), va = Symbol.for("react.portal"), wa = Symbol.for("react.fragment"), xa = Symbol.for("react.strict_mode"), za = Symbol.for("react.profiler"), Aa = Symbol.for("react.provider"), Ba = Symbol.for("react.context"), Ca = Symbol.for("react.forward_ref"), Da = Symbol.for("react.suspense"), Ea = Symbol.for("react.suspense_list"), Fa = Symbol.for("react.memo"), Ga = Symbol.for("react.lazy");
var Ha = Symbol.for("react.offscreen");
var Ia = Symbol.iterator;
function Ja(a2) {
  if (a2 === null || typeof a2 !== "object")
    return null;
  a2 = Ia && a2[Ia] || a2["@@iterator"];
  return typeof a2 === "function" ? a2 : null;
}
var A$2 = Object.assign, Ka;
function La(a2) {
  if (Ka === void 0)
    try {
      throw Error();
    } catch (c2) {
      var b2 = c2.stack.trim().match(/\n( *(at )?)/);
      Ka = b2 && b2[1] || "";
    }
  return "\n" + Ka + a2;
}
var Ma = false;
function Na(a2, b2) {
  if (!a2 || Ma)
    return "";
  Ma = true;
  var c2 = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b2)
      if (b2 = function() {
        throw Error();
      }, Object.defineProperty(b2.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect === "object" && Reflect.construct) {
        try {
          Reflect.construct(b2, []);
        } catch (l2) {
          var d2 = l2;
        }
        Reflect.construct(a2, [], b2);
      } else {
        try {
          b2.call();
        } catch (l2) {
          d2 = l2;
        }
        a2.call(b2.prototype);
      }
    else {
      try {
        throw Error();
      } catch (l2) {
        d2 = l2;
      }
      a2();
    }
  } catch (l2) {
    if (l2 && d2 && typeof l2.stack === "string") {
      for (var e2 = l2.stack.split("\n"), f2 = d2.stack.split("\n"), g2 = e2.length - 1, h2 = f2.length - 1; 1 <= g2 && 0 <= h2 && e2[g2] !== f2[h2]; )
        h2--;
      for (; 1 <= g2 && 0 <= h2; g2--, h2--)
        if (e2[g2] !== f2[h2]) {
          if (g2 !== 1 || h2 !== 1) {
            do
              if (g2--, h2--, 0 > h2 || e2[g2] !== f2[h2]) {
                var k2 = "\n" + e2[g2].replace(" at new ", " at ");
                a2.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a2.displayName));
                return k2;
              }
            while (1 <= g2 && 0 <= h2);
          }
          break;
        }
    }
  } finally {
    Ma = false, Error.prepareStackTrace = c2;
  }
  return (a2 = a2 ? a2.displayName || a2.name : "") ? La(a2) : "";
}
function Oa(a2) {
  switch (a2.tag) {
    case 5:
      return La(a2.type);
    case 16:
      return La("Lazy");
    case 13:
      return La("Suspense");
    case 19:
      return La("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a2 = Na(a2.type, false), a2;
    case 11:
      return a2 = Na(a2.type.render, false), a2;
    case 1:
      return a2 = Na(a2.type, true), a2;
    default:
      return "";
  }
}
function Pa(a2) {
  if (a2 == null)
    return null;
  if (typeof a2 === "function")
    return a2.displayName || a2.name || null;
  if (typeof a2 === "string")
    return a2;
  switch (a2) {
    case wa:
      return "Fragment";
    case va:
      return "Portal";
    case za:
      return "Profiler";
    case xa:
      return "StrictMode";
    case Da:
      return "Suspense";
    case Ea:
      return "SuspenseList";
  }
  if (typeof a2 === "object")
    switch (a2.$$typeof) {
      case Ba:
        return (a2.displayName || "Context") + ".Consumer";
      case Aa:
        return (a2._context.displayName || "Context") + ".Provider";
      case Ca:
        var b2 = a2.render;
        a2 = a2.displayName;
        a2 || (a2 = b2.displayName || b2.name || "", a2 = a2 !== "" ? "ForwardRef(" + a2 + ")" : "ForwardRef");
        return a2;
      case Fa:
        return b2 = a2.displayName || null, b2 !== null ? b2 : Pa(a2.type) || "Memo";
      case Ga:
        b2 = a2._payload;
        a2 = a2._init;
        try {
          return Pa(a2(b2));
        } catch (c2) {
        }
    }
  return null;
}
function Qa(a2) {
  var b2 = a2.type;
  switch (a2.tag) {
    case 24:
      return "Cache";
    case 9:
      return (b2.displayName || "Context") + ".Consumer";
    case 10:
      return (b2._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return a2 = b2.render, a2 = a2.displayName || a2.name || "", b2.displayName || (a2 !== "" ? "ForwardRef(" + a2 + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return b2;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Pa(b2);
    case 8:
      return b2 === xa ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof b2 === "function")
        return b2.displayName || b2.name || null;
      if (typeof b2 === "string")
        return b2;
  }
  return null;
}
function Ra(a2) {
  switch (typeof a2) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return a2;
    case "object":
      return a2;
    default:
      return "";
  }
}
function Sa(a2) {
  var b2 = a2.type;
  return (a2 = a2.nodeName) && a2.toLowerCase() === "input" && (b2 === "checkbox" || b2 === "radio");
}
function Ta(a2) {
  var b2 = Sa(a2) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a2.constructor.prototype, b2), d2 = "" + a2[b2];
  if (!a2.hasOwnProperty(b2) && typeof c2 !== "undefined" && typeof c2.get === "function" && typeof c2.set === "function") {
    var e2 = c2.get, f2 = c2.set;
    Object.defineProperty(a2, b2, { configurable: true, get: function() {
      return e2.call(this);
    }, set: function(a3) {
      d2 = "" + a3;
      f2.call(this, a3);
    } });
    Object.defineProperty(a2, b2, { enumerable: c2.enumerable });
    return { getValue: function() {
      return d2;
    }, setValue: function(a3) {
      d2 = "" + a3;
    }, stopTracking: function() {
      a2._valueTracker = null;
      delete a2[b2];
    } };
  }
}
function Ua(a2) {
  a2._valueTracker || (a2._valueTracker = Ta(a2));
}
function Va(a2) {
  if (!a2)
    return false;
  var b2 = a2._valueTracker;
  if (!b2)
    return true;
  var c2 = b2.getValue();
  var d2 = "";
  a2 && (d2 = Sa(a2) ? a2.checked ? "true" : "false" : a2.value);
  a2 = d2;
  return a2 !== c2 ? (b2.setValue(a2), true) : false;
}
function Wa(a2) {
  a2 = a2 || (typeof document !== "undefined" ? document : void 0);
  if (typeof a2 === "undefined")
    return null;
  try {
    return a2.activeElement || a2.body;
  } catch (b2) {
    return a2.body;
  }
}
function Xa(a2, b2) {
  var c2 = b2.checked;
  return A$2({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: c2 != null ? c2 : a2._wrapperState.initialChecked });
}
function Ya(a2, b2) {
  var c2 = b2.defaultValue == null ? "" : b2.defaultValue, d2 = b2.checked != null ? b2.checked : b2.defaultChecked;
  c2 = Ra(b2.value != null ? b2.value : c2);
  a2._wrapperState = { initialChecked: d2, initialValue: c2, controlled: b2.type === "checkbox" || b2.type === "radio" ? b2.checked != null : b2.value != null };
}
function Za(a2, b2) {
  b2 = b2.checked;
  b2 != null && sa(a2, "checked", b2, false);
}
function $a(a2, b2) {
  Za(a2, b2);
  var c2 = Ra(b2.value), d2 = b2.type;
  if (c2 != null)
    if (d2 === "number") {
      if (c2 === 0 && a2.value === "" || a2.value != c2)
        a2.value = "" + c2;
    } else
      a2.value !== "" + c2 && (a2.value = "" + c2);
  else if (d2 === "submit" || d2 === "reset") {
    a2.removeAttribute("value");
    return;
  }
  b2.hasOwnProperty("value") ? bb(a2, b2.type, c2) : b2.hasOwnProperty("defaultValue") && bb(a2, b2.type, Ra(b2.defaultValue));
  b2.checked == null && b2.defaultChecked != null && (a2.defaultChecked = !!b2.defaultChecked);
}
function cb(a2, b2, c2) {
  if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
    var d2 = b2.type;
    if (!(d2 !== "submit" && d2 !== "reset" || b2.value !== void 0 && b2.value !== null))
      return;
    b2 = "" + a2._wrapperState.initialValue;
    c2 || b2 === a2.value || (a2.value = b2);
    a2.defaultValue = b2;
  }
  c2 = a2.name;
  c2 !== "" && (a2.name = "");
  a2.defaultChecked = !!a2._wrapperState.initialChecked;
  c2 !== "" && (a2.name = c2);
}
function bb(a2, b2, c2) {
  if (b2 !== "number" || Wa(a2.ownerDocument) !== a2)
    c2 == null ? a2.defaultValue = "" + a2._wrapperState.initialValue : a2.defaultValue !== "" + c2 && (a2.defaultValue = "" + c2);
}
var db = Array.isArray;
function eb(a2, b2, c2, d2) {
  a2 = a2.options;
  if (b2) {
    b2 = {};
    for (var e2 = 0; e2 < c2.length; e2++)
      b2["$" + c2[e2]] = true;
    for (c2 = 0; c2 < a2.length; c2++)
      e2 = b2.hasOwnProperty("$" + a2[c2].value), a2[c2].selected !== e2 && (a2[c2].selected = e2), e2 && d2 && (a2[c2].defaultSelected = true);
  } else {
    c2 = "" + Ra(c2);
    b2 = null;
    for (e2 = 0; e2 < a2.length; e2++) {
      if (a2[e2].value === c2) {
        a2[e2].selected = true;
        d2 && (a2[e2].defaultSelected = true);
        return;
      }
      b2 !== null || a2[e2].disabled || (b2 = a2[e2]);
    }
    b2 !== null && (b2.selected = true);
  }
}
function fb(a2, b2) {
  if (b2.dangerouslySetInnerHTML != null)
    throw Error(p$6(91));
  return A$2({}, b2, { value: void 0, defaultValue: void 0, children: "" + a2._wrapperState.initialValue });
}
function gb(a2, b2) {
  var c2 = b2.value;
  if (c2 == null) {
    c2 = b2.children;
    b2 = b2.defaultValue;
    if (c2 != null) {
      if (b2 != null)
        throw Error(p$6(92));
      if (db(c2)) {
        if (1 < c2.length)
          throw Error(p$6(93));
        c2 = c2[0];
      }
      b2 = c2;
    }
    b2 == null && (b2 = "");
    c2 = b2;
  }
  a2._wrapperState = { initialValue: Ra(c2) };
}
function hb(a2, b2) {
  var c2 = Ra(b2.value), d2 = Ra(b2.defaultValue);
  c2 != null && (c2 = "" + c2, c2 !== a2.value && (a2.value = c2), b2.defaultValue == null && a2.defaultValue !== c2 && (a2.defaultValue = c2));
  d2 != null && (a2.defaultValue = "" + d2);
}
function ib(a2) {
  var b2 = a2.textContent;
  b2 === a2._wrapperState.initialValue && b2 !== "" && b2 !== null && (a2.value = b2);
}
function jb(a2) {
  switch (a2) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function kb(a2, b2) {
  return a2 == null || a2 === "http://www.w3.org/1999/xhtml" ? jb(b2) : a2 === "http://www.w3.org/2000/svg" && b2 === "foreignObject" ? "http://www.w3.org/1999/xhtml" : a2;
}
var lb, mb = function(a2) {
  return typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction ? function(b2, c2, d2, e2) {
    MSApp.execUnsafeLocalFunction(function() {
      return a2(b2, c2, d2, e2);
    });
  } : a2;
}(function(a2, b2) {
  if (a2.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in a2)
    a2.innerHTML = b2;
  else {
    lb = lb || document.createElement("div");
    lb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
    for (b2 = lb.firstChild; a2.firstChild; )
      a2.removeChild(a2.firstChild);
    for (; b2.firstChild; )
      a2.appendChild(b2.firstChild);
  }
});
function nb(a2, b2) {
  if (b2) {
    var c2 = a2.firstChild;
    if (c2 && c2 === a2.lastChild && c2.nodeType === 3) {
      c2.nodeValue = b2;
      return;
    }
  }
  a2.textContent = b2;
}
var ob = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, pb = ["Webkit", "ms", "Moz", "O"];
Object.keys(ob).forEach(function(a2) {
  pb.forEach(function(b2) {
    b2 = b2 + a2.charAt(0).toUpperCase() + a2.substring(1);
    ob[b2] = ob[a2];
  });
});
function qb(a2, b2, c2) {
  return b2 == null || typeof b2 === "boolean" || b2 === "" ? "" : c2 || typeof b2 !== "number" || b2 === 0 || ob.hasOwnProperty(a2) && ob[a2] ? ("" + b2).trim() : b2 + "px";
}
function rb(a2, b2) {
  a2 = a2.style;
  for (var c2 in b2)
    if (b2.hasOwnProperty(c2)) {
      var d2 = c2.indexOf("--") === 0, e2 = qb(c2, b2[c2], d2);
      c2 === "float" && (c2 = "cssFloat");
      d2 ? a2.setProperty(c2, e2) : a2[c2] = e2;
    }
}
var sb = A$2({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function tb(a2, b2) {
  if (b2) {
    if (sb[a2] && (b2.children != null || b2.dangerouslySetInnerHTML != null))
      throw Error(p$6(137, a2));
    if (b2.dangerouslySetInnerHTML != null) {
      if (b2.children != null)
        throw Error(p$6(60));
      if (typeof b2.dangerouslySetInnerHTML !== "object" || !("__html" in b2.dangerouslySetInnerHTML))
        throw Error(p$6(61));
    }
    if (b2.style != null && typeof b2.style !== "object")
      throw Error(p$6(62));
  }
}
function ub(a2, b2) {
  if (a2.indexOf("-") === -1)
    return typeof b2.is === "string";
  switch (a2) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var vb = null;
function wb(a2) {
  a2 = a2.target || a2.srcElement || window;
  a2.correspondingUseElement && (a2 = a2.correspondingUseElement);
  return a2.nodeType === 3 ? a2.parentNode : a2;
}
var xb = null, yb = null, zb = null;
function Ab(a2) {
  if (a2 = Bb(a2)) {
    if (typeof xb !== "function")
      throw Error(p$6(280));
    var b2 = a2.stateNode;
    b2 && (b2 = Cb(b2), xb(a2.stateNode, a2.type, b2));
  }
}
function Db(a2) {
  yb ? zb ? zb.push(a2) : zb = [a2] : yb = a2;
}
function Eb() {
  if (yb) {
    var a2 = yb, b2 = zb;
    zb = yb = null;
    Ab(a2);
    if (b2)
      for (a2 = 0; a2 < b2.length; a2++)
        Ab(b2[a2]);
  }
}
function Fb(a2, b2) {
  return a2(b2);
}
function Gb() {
}
var Hb = false;
function Ib(a2, b2, c2) {
  if (Hb)
    return a2(b2, c2);
  Hb = true;
  try {
    return Fb(a2, b2, c2);
  } finally {
    if (Hb = false, yb !== null || zb !== null)
      Gb(), Eb();
  }
}
function Jb(a2, b2) {
  var c2 = a2.stateNode;
  if (c2 === null)
    return null;
  var d2 = Cb(c2);
  if (d2 === null)
    return null;
  c2 = d2[b2];
  a:
    switch (b2) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d2 = !d2.disabled) || (a2 = a2.type, d2 = !(a2 === "button" || a2 === "input" || a2 === "select" || a2 === "textarea"));
        a2 = !d2;
        break a;
      default:
        a2 = false;
    }
  if (a2)
    return null;
  if (c2 && typeof c2 !== "function")
    throw Error(p$6(231, b2, typeof c2));
  return c2;
}
var Kb = false;
if (ia)
  try {
    var Lb = {};
    Object.defineProperty(Lb, "passive", { get: function() {
      Kb = true;
    } });
    window.addEventListener("test", Lb, Lb);
    window.removeEventListener("test", Lb, Lb);
  } catch (a2) {
    Kb = false;
  }
function Mb(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b2.apply(c2, l2);
  } catch (n2) {
    this.onError(n2);
  }
}
var Nb = false, Ob = null, Pb = false, Qb = null, Rb = { onError: function(a2) {
  Nb = true;
  Ob = a2;
} };
function Sb(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  Nb = false;
  Ob = null;
  Mb.apply(Rb, arguments);
}
function Tb(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  Sb.apply(this, arguments);
  if (Nb) {
    if (Nb) {
      var l2 = Ob;
      Nb = false;
      Ob = null;
    } else
      throw Error(p$6(198));
    Pb || (Pb = true, Qb = l2);
  }
}
function Ub(a2) {
  var b2 = a2, c2 = a2;
  if (a2.alternate)
    for (; b2.return; )
      b2 = b2.return;
  else {
    a2 = b2;
    do
      b2 = a2, (b2.flags & 4098) !== 0 && (c2 = b2.return), a2 = b2.return;
    while (a2);
  }
  return b2.tag === 3 ? c2 : null;
}
function Vb(a2) {
  if (a2.tag === 13) {
    var b2 = a2.memoizedState;
    b2 === null && (a2 = a2.alternate, a2 !== null && (b2 = a2.memoizedState));
    if (b2 !== null)
      return b2.dehydrated;
  }
  return null;
}
function Wb(a2) {
  if (Ub(a2) !== a2)
    throw Error(p$6(188));
}
function Xb(a2) {
  var b2 = a2.alternate;
  if (!b2) {
    b2 = Ub(a2);
    if (b2 === null)
      throw Error(p$6(188));
    return b2 !== a2 ? null : a2;
  }
  for (var c2 = a2, d2 = b2; ; ) {
    var e2 = c2.return;
    if (e2 === null)
      break;
    var f2 = e2.alternate;
    if (f2 === null) {
      d2 = e2.return;
      if (d2 !== null) {
        c2 = d2;
        continue;
      }
      break;
    }
    if (e2.child === f2.child) {
      for (f2 = e2.child; f2; ) {
        if (f2 === c2)
          return Wb(e2), a2;
        if (f2 === d2)
          return Wb(e2), b2;
        f2 = f2.sibling;
      }
      throw Error(p$6(188));
    }
    if (c2.return !== d2.return)
      c2 = e2, d2 = f2;
    else {
      for (var g2 = false, h2 = e2.child; h2; ) {
        if (h2 === c2) {
          g2 = true;
          c2 = e2;
          d2 = f2;
          break;
        }
        if (h2 === d2) {
          g2 = true;
          d2 = e2;
          c2 = f2;
          break;
        }
        h2 = h2.sibling;
      }
      if (!g2) {
        for (h2 = f2.child; h2; ) {
          if (h2 === c2) {
            g2 = true;
            c2 = f2;
            d2 = e2;
            break;
          }
          if (h2 === d2) {
            g2 = true;
            d2 = f2;
            c2 = e2;
            break;
          }
          h2 = h2.sibling;
        }
        if (!g2)
          throw Error(p$6(189));
      }
    }
    if (c2.alternate !== d2)
      throw Error(p$6(190));
  }
  if (c2.tag !== 3)
    throw Error(p$6(188));
  return c2.stateNode.current === c2 ? a2 : b2;
}
function Yb(a2) {
  a2 = Xb(a2);
  return a2 !== null ? Zb(a2) : null;
}
function Zb(a2) {
  if (a2.tag === 5 || a2.tag === 6)
    return a2;
  for (a2 = a2.child; a2 !== null; ) {
    var b2 = Zb(a2);
    if (b2 !== null)
      return b2;
    a2 = a2.sibling;
  }
  return null;
}
var $b = ba.unstable_scheduleCallback, ac = ba.unstable_cancelCallback, bc = ba.unstable_shouldYield, cc = ba.unstable_requestPaint, B$1 = ba.unstable_now, dc = ba.unstable_getCurrentPriorityLevel, ec = ba.unstable_ImmediatePriority, fc = ba.unstable_UserBlockingPriority, gc = ba.unstable_NormalPriority, hc = ba.unstable_LowPriority, ic = ba.unstable_IdlePriority, jc = null, kc = null;
function lc(a2) {
  if (kc && typeof kc.onCommitFiberRoot === "function")
    try {
      kc.onCommitFiberRoot(jc, a2, void 0, (a2.current.flags & 128) === 128);
    } catch (b2) {
    }
}
var nc = Math.clz32 ? Math.clz32 : mc, oc = Math.log, pc = Math.LN2;
function mc(a2) {
  a2 >>>= 0;
  return a2 === 0 ? 32 : 31 - (oc(a2) / pc | 0) | 0;
}
var qc = 64, rc = 4194304;
function sc(a2) {
  switch (a2 & -a2) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return a2 & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return a2 & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return a2;
  }
}
function tc(a2, b2) {
  var c2 = a2.pendingLanes;
  if (c2 === 0)
    return 0;
  var d2 = 0, e2 = a2.suspendedLanes, f2 = a2.pingedLanes, g2 = c2 & 268435455;
  if (g2 !== 0) {
    var h2 = g2 & ~e2;
    h2 !== 0 ? d2 = sc(h2) : (f2 &= g2, f2 !== 0 && (d2 = sc(f2)));
  } else
    g2 = c2 & ~e2, g2 !== 0 ? d2 = sc(g2) : f2 !== 0 && (d2 = sc(f2));
  if (d2 === 0)
    return 0;
  if (b2 !== 0 && b2 !== d2 && (b2 & e2) === 0 && (e2 = d2 & -d2, f2 = b2 & -b2, e2 >= f2 || e2 === 16 && (f2 & 4194240) !== 0))
    return b2;
  (d2 & 4) !== 0 && (d2 |= c2 & 16);
  b2 = a2.entangledLanes;
  if (b2 !== 0)
    for (a2 = a2.entanglements, b2 &= d2; 0 < b2; )
      c2 = 31 - nc(b2), e2 = 1 << c2, d2 |= a2[c2], b2 &= ~e2;
  return d2;
}
function uc(a2, b2) {
  switch (a2) {
    case 1:
    case 2:
    case 4:
      return b2 + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return b2 + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function vc(a2, b2) {
  for (var c2 = a2.suspendedLanes, d2 = a2.pingedLanes, e2 = a2.expirationTimes, f2 = a2.pendingLanes; 0 < f2; ) {
    var g2 = 31 - nc(f2), h2 = 1 << g2, k2 = e2[g2];
    if (k2 === -1) {
      if ((h2 & c2) === 0 || (h2 & d2) !== 0)
        e2[g2] = uc(h2, b2);
    } else
      k2 <= b2 && (a2.expiredLanes |= h2);
    f2 &= ~h2;
  }
}
function wc(a2) {
  a2 = a2.pendingLanes & -1073741825;
  return a2 !== 0 ? a2 : a2 & 1073741824 ? 1073741824 : 0;
}
function xc() {
  var a2 = qc;
  qc <<= 1;
  (qc & 4194240) === 0 && (qc = 64);
  return a2;
}
function yc(a2) {
  for (var b2 = [], c2 = 0; 31 > c2; c2++)
    b2.push(a2);
  return b2;
}
function zc(a2, b2, c2) {
  a2.pendingLanes |= b2;
  b2 !== 536870912 && (a2.suspendedLanes = 0, a2.pingedLanes = 0);
  a2 = a2.eventTimes;
  b2 = 31 - nc(b2);
  a2[b2] = c2;
}
function Ac(a2, b2) {
  var c2 = a2.pendingLanes & ~b2;
  a2.pendingLanes = b2;
  a2.suspendedLanes = 0;
  a2.pingedLanes = 0;
  a2.expiredLanes &= b2;
  a2.mutableReadLanes &= b2;
  a2.entangledLanes &= b2;
  b2 = a2.entanglements;
  var d2 = a2.eventTimes;
  for (a2 = a2.expirationTimes; 0 < c2; ) {
    var e2 = 31 - nc(c2), f2 = 1 << e2;
    b2[e2] = 0;
    d2[e2] = -1;
    a2[e2] = -1;
    c2 &= ~f2;
  }
}
function Bc(a2, b2) {
  var c2 = a2.entangledLanes |= b2;
  for (a2 = a2.entanglements; c2; ) {
    var d2 = 31 - nc(c2), e2 = 1 << d2;
    e2 & b2 | a2[d2] & b2 && (a2[d2] |= b2);
    c2 &= ~e2;
  }
}
var C = 0;
function Cc(a2) {
  a2 &= -a2;
  return 1 < a2 ? 4 < a2 ? (a2 & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
}
var Dc, Ec, Fc, Gc, Hc, Ic = false, Jc = [], Kc = null, Lc = null, Mc = null, Nc = /* @__PURE__ */ new Map(), Oc = /* @__PURE__ */ new Map(), Pc = [], Qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Rc(a2, b2) {
  switch (a2) {
    case "focusin":
    case "focusout":
      Kc = null;
      break;
    case "dragenter":
    case "dragleave":
      Lc = null;
      break;
    case "mouseover":
    case "mouseout":
      Mc = null;
      break;
    case "pointerover":
    case "pointerout":
      Nc.delete(b2.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Oc.delete(b2.pointerId);
  }
}
function Sc(a2, b2, c2, d2, e2, f2) {
  if (a2 === null || a2.nativeEvent !== f2)
    return a2 = { blockedOn: b2, domEventName: c2, eventSystemFlags: d2, nativeEvent: f2, targetContainers: [e2] }, b2 !== null && (b2 = Bb(b2), b2 !== null && Ec(b2)), a2;
  a2.eventSystemFlags |= d2;
  b2 = a2.targetContainers;
  e2 !== null && b2.indexOf(e2) === -1 && b2.push(e2);
  return a2;
}
function Tc(a2, b2, c2, d2, e2) {
  switch (b2) {
    case "focusin":
      return Kc = Sc(Kc, a2, b2, c2, d2, e2), true;
    case "dragenter":
      return Lc = Sc(Lc, a2, b2, c2, d2, e2), true;
    case "mouseover":
      return Mc = Sc(Mc, a2, b2, c2, d2, e2), true;
    case "pointerover":
      var f2 = e2.pointerId;
      Nc.set(f2, Sc(Nc.get(f2) || null, a2, b2, c2, d2, e2));
      return true;
    case "gotpointercapture":
      return f2 = e2.pointerId, Oc.set(f2, Sc(Oc.get(f2) || null, a2, b2, c2, d2, e2)), true;
  }
  return false;
}
function Uc(a2) {
  var b2 = Vc(a2.target);
  if (b2 !== null) {
    var c2 = Ub(b2);
    if (c2 !== null) {
      if (b2 = c2.tag, b2 === 13) {
        if (b2 = Vb(c2), b2 !== null) {
          a2.blockedOn = b2;
          Hc(a2.priority, function() {
            Fc(c2);
          });
          return;
        }
      } else if (b2 === 3 && c2.stateNode.current.memoizedState.isDehydrated) {
        a2.blockedOn = c2.tag === 3 ? c2.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a2.blockedOn = null;
}
function Wc(a2) {
  if (a2.blockedOn !== null)
    return false;
  for (var b2 = a2.targetContainers; 0 < b2.length; ) {
    var c2 = Xc(a2.domEventName, a2.eventSystemFlags, b2[0], a2.nativeEvent);
    if (c2 === null) {
      c2 = a2.nativeEvent;
      var d2 = new c2.constructor(c2.type, c2);
      vb = d2;
      c2.target.dispatchEvent(d2);
      vb = null;
    } else
      return b2 = Bb(c2), b2 !== null && Ec(b2), a2.blockedOn = c2, false;
    b2.shift();
  }
  return true;
}
function Yc(a2, b2, c2) {
  Wc(a2) && c2.delete(b2);
}
function Zc() {
  Ic = false;
  Kc !== null && Wc(Kc) && (Kc = null);
  Lc !== null && Wc(Lc) && (Lc = null);
  Mc !== null && Wc(Mc) && (Mc = null);
  Nc.forEach(Yc);
  Oc.forEach(Yc);
}
function $c(a2, b2) {
  a2.blockedOn === b2 && (a2.blockedOn = null, Ic || (Ic = true, ba.unstable_scheduleCallback(ba.unstable_NormalPriority, Zc)));
}
function ad(a2) {
  function b2(b3) {
    return $c(b3, a2);
  }
  if (0 < Jc.length) {
    $c(Jc[0], a2);
    for (var c2 = 1; c2 < Jc.length; c2++) {
      var d2 = Jc[c2];
      d2.blockedOn === a2 && (d2.blockedOn = null);
    }
  }
  Kc !== null && $c(Kc, a2);
  Lc !== null && $c(Lc, a2);
  Mc !== null && $c(Mc, a2);
  Nc.forEach(b2);
  Oc.forEach(b2);
  for (c2 = 0; c2 < Pc.length; c2++)
    d2 = Pc[c2], d2.blockedOn === a2 && (d2.blockedOn = null);
  for (; 0 < Pc.length && (c2 = Pc[0], c2.blockedOn === null); )
    Uc(c2), c2.blockedOn === null && Pc.shift();
}
var bd = ta.ReactCurrentBatchConfig, cd = true;
function dd(a2, b2, c2, d2) {
  var e2 = C, f2 = bd.transition;
  bd.transition = null;
  try {
    C = 1, ed(a2, b2, c2, d2);
  } finally {
    C = e2, bd.transition = f2;
  }
}
function fd(a2, b2, c2, d2) {
  var e2 = C, f2 = bd.transition;
  bd.transition = null;
  try {
    C = 4, ed(a2, b2, c2, d2);
  } finally {
    C = e2, bd.transition = f2;
  }
}
function ed(a2, b2, c2, d2) {
  if (cd) {
    var e2 = Xc(a2, b2, c2, d2);
    if (e2 === null)
      gd(a2, b2, d2, hd, c2), Rc(a2, d2);
    else if (Tc(e2, a2, b2, c2, d2))
      d2.stopPropagation();
    else if (Rc(a2, d2), b2 & 4 && -1 < Qc.indexOf(a2)) {
      for (; e2 !== null; ) {
        var f2 = Bb(e2);
        f2 !== null && Dc(f2);
        f2 = Xc(a2, b2, c2, d2);
        f2 === null && gd(a2, b2, d2, hd, c2);
        if (f2 === e2)
          break;
        e2 = f2;
      }
      e2 !== null && d2.stopPropagation();
    } else
      gd(a2, b2, d2, null, c2);
  }
}
var hd = null;
function Xc(a2, b2, c2, d2) {
  hd = null;
  a2 = wb(d2);
  a2 = Vc(a2);
  if (a2 !== null)
    if (b2 = Ub(a2), b2 === null)
      a2 = null;
    else if (c2 = b2.tag, c2 === 13) {
      a2 = Vb(b2);
      if (a2 !== null)
        return a2;
      a2 = null;
    } else if (c2 === 3) {
      if (b2.stateNode.current.memoizedState.isDehydrated)
        return b2.tag === 3 ? b2.stateNode.containerInfo : null;
      a2 = null;
    } else
      b2 !== a2 && (a2 = null);
  hd = a2;
  return null;
}
function id(a2) {
  switch (a2) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (dc()) {
        case ec:
          return 1;
        case fc:
          return 4;
        case gc:
        case hc:
          return 16;
        case ic:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var jd = null, kd = null, ld = null;
function md() {
  if (ld)
    return ld;
  var a2, b2 = kd, c2 = b2.length, d2, e2 = "value" in jd ? jd.value : jd.textContent, f2 = e2.length;
  for (a2 = 0; a2 < c2 && b2[a2] === e2[a2]; a2++)
    ;
  var g2 = c2 - a2;
  for (d2 = 1; d2 <= g2 && b2[c2 - d2] === e2[f2 - d2]; d2++)
    ;
  return ld = e2.slice(a2, 1 < d2 ? 1 - d2 : void 0);
}
function nd(a2) {
  var b2 = a2.keyCode;
  "charCode" in a2 ? (a2 = a2.charCode, a2 === 0 && b2 === 13 && (a2 = 13)) : a2 = b2;
  a2 === 10 && (a2 = 13);
  return 32 <= a2 || a2 === 13 ? a2 : 0;
}
function od() {
  return true;
}
function pd() {
  return false;
}
function qd(a2) {
  function b2(b3, d2, e2, f2, g2) {
    this._reactName = b3;
    this._targetInst = e2;
    this.type = d2;
    this.nativeEvent = f2;
    this.target = g2;
    this.currentTarget = null;
    for (var c2 in a2)
      a2.hasOwnProperty(c2) && (b3 = a2[c2], this[c2] = b3 ? b3(f2) : f2[c2]);
    this.isDefaultPrevented = (f2.defaultPrevented != null ? f2.defaultPrevented : f2.returnValue === false) ? od : pd;
    this.isPropagationStopped = pd;
    return this;
  }
  A$2(b2.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a3 = this.nativeEvent;
    a3 && (a3.preventDefault ? a3.preventDefault() : typeof a3.returnValue !== "unknown" && (a3.returnValue = false), this.isDefaultPrevented = od);
  }, stopPropagation: function() {
    var a3 = this.nativeEvent;
    a3 && (a3.stopPropagation ? a3.stopPropagation() : typeof a3.cancelBubble !== "unknown" && (a3.cancelBubble = true), this.isPropagationStopped = od);
  }, persist: function() {
  }, isPersistent: od });
  return b2;
}
var rd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a2) {
  return a2.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, sd = qd(rd), td = A$2({}, rd, { view: 0, detail: 0 }), ud = qd(td), vd, wd, xd, zd = A$2({}, td, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: yd, button: 0, buttons: 0, relatedTarget: function(a2) {
  return a2.relatedTarget === void 0 ? a2.fromElement === a2.srcElement ? a2.toElement : a2.fromElement : a2.relatedTarget;
}, movementX: function(a2) {
  if ("movementX" in a2)
    return a2.movementX;
  a2 !== xd && (xd && a2.type === "mousemove" ? (vd = a2.screenX - xd.screenX, wd = a2.screenY - xd.screenY) : wd = vd = 0, xd = a2);
  return vd;
}, movementY: function(a2) {
  return "movementY" in a2 ? a2.movementY : wd;
} }), Ad = qd(zd), Bd = A$2({}, zd, { dataTransfer: 0 }), Cd = qd(Bd), Dd = A$2({}, td, { relatedTarget: 0 }), Ed = qd(Dd), Fd = A$2({}, rd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Gd = qd(Fd), Hd = A$2({}, rd, { clipboardData: function(a2) {
  return "clipboardData" in a2 ? a2.clipboardData : window.clipboardData;
} }), Id = qd(Hd), Jd = A$2({}, rd, { data: 0 }), Kd = qd(Jd), Ld = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Md = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Nd = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Od(a2) {
  var b2 = this.nativeEvent;
  return b2.getModifierState ? b2.getModifierState(a2) : (a2 = Nd[a2]) ? !!b2[a2] : false;
}
function yd() {
  return Od;
}
var Pd = A$2({}, td, { key: function(a2) {
  if (a2.key) {
    var b2 = Ld[a2.key] || a2.key;
    if (b2 !== "Unidentified")
      return b2;
  }
  return a2.type === "keypress" ? (a2 = nd(a2), a2 === 13 ? "Enter" : String.fromCharCode(a2)) : a2.type === "keydown" || a2.type === "keyup" ? Md[a2.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: yd, charCode: function(a2) {
  return a2.type === "keypress" ? nd(a2) : 0;
}, keyCode: function(a2) {
  return a2.type === "keydown" || a2.type === "keyup" ? a2.keyCode : 0;
}, which: function(a2) {
  return a2.type === "keypress" ? nd(a2) : a2.type === "keydown" || a2.type === "keyup" ? a2.keyCode : 0;
} }), Qd = qd(Pd), Rd = A$2({}, zd, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Sd = qd(Rd), Td = A$2({}, td, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: yd }), Ud = qd(Td), Vd = A$2({}, rd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Wd = qd(Vd), Xd = A$2({}, zd, {
  deltaX: function(a2) {
    return "deltaX" in a2 ? a2.deltaX : "wheelDeltaX" in a2 ? -a2.wheelDeltaX : 0;
  },
  deltaY: function(a2) {
    return "deltaY" in a2 ? a2.deltaY : "wheelDeltaY" in a2 ? -a2.wheelDeltaY : "wheelDelta" in a2 ? -a2.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Yd = qd(Xd), Zd = [9, 13, 27, 32], $d = ia && "CompositionEvent" in window, ae = null;
ia && "documentMode" in document && (ae = document.documentMode);
var be = ia && "TextEvent" in window && !ae, ce = ia && (!$d || ae && 8 < ae && 11 >= ae), de = String.fromCharCode(32), ee = false;
function fe(a2, b2) {
  switch (a2) {
    case "keyup":
      return Zd.indexOf(b2.keyCode) !== -1;
    case "keydown":
      return b2.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function ge(a2) {
  a2 = a2.detail;
  return typeof a2 === "object" && "data" in a2 ? a2.data : null;
}
var he = false;
function ie(a2, b2) {
  switch (a2) {
    case "compositionend":
      return ge(b2);
    case "keypress":
      if (b2.which !== 32)
        return null;
      ee = true;
      return de;
    case "textInput":
      return a2 = b2.data, a2 === de && ee ? null : a2;
    default:
      return null;
  }
}
function je(a2, b2) {
  if (he)
    return a2 === "compositionend" || !$d && fe(a2, b2) ? (a2 = md(), ld = kd = jd = null, he = false, a2) : null;
  switch (a2) {
    case "paste":
      return null;
    case "keypress":
      if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
        if (b2.char && 1 < b2.char.length)
          return b2.char;
        if (b2.which)
          return String.fromCharCode(b2.which);
      }
      return null;
    case "compositionend":
      return ce && b2.locale !== "ko" ? null : b2.data;
    default:
      return null;
  }
}
var ke = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function le(a2) {
  var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
  return b2 === "input" ? !!ke[a2.type] : b2 === "textarea" ? true : false;
}
function me(a2, b2, c2, d2) {
  Db(d2);
  b2 = ne(b2, "onChange");
  0 < b2.length && (c2 = new sd("onChange", "change", null, c2, d2), a2.push({ event: c2, listeners: b2 }));
}
var oe = null, pe = null;
function qe(a2) {
  re(a2, 0);
}
function se(a2) {
  var b2 = te(a2);
  if (Va(b2))
    return a2;
}
function ue(a2, b2) {
  if (a2 === "change")
    return b2;
}
var ve = false;
if (ia) {
  var we;
  if (ia) {
    var xe = "oninput" in document;
    if (!xe) {
      var ye = document.createElement("div");
      ye.setAttribute("oninput", "return;");
      xe = typeof ye.oninput === "function";
    }
    we = xe;
  } else
    we = false;
  ve = we && (!document.documentMode || 9 < document.documentMode);
}
function ze() {
  oe && (oe.detachEvent("onpropertychange", Ae), pe = oe = null);
}
function Ae(a2) {
  if (a2.propertyName === "value" && se(pe)) {
    var b2 = [];
    me(b2, pe, a2, wb(a2));
    Ib(qe, b2);
  }
}
function Be(a2, b2, c2) {
  a2 === "focusin" ? (ze(), oe = b2, pe = c2, oe.attachEvent("onpropertychange", Ae)) : a2 === "focusout" && ze();
}
function Ce(a2) {
  if (a2 === "selectionchange" || a2 === "keyup" || a2 === "keydown")
    return se(pe);
}
function De(a2, b2) {
  if (a2 === "click")
    return se(b2);
}
function Ee(a2, b2) {
  if (a2 === "input" || a2 === "change")
    return se(b2);
}
function Fe(a2, b2) {
  return a2 === b2 && (a2 !== 0 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
}
var Ge = typeof Object.is === "function" ? Object.is : Fe;
function He(a2, b2) {
  if (Ge(a2, b2))
    return true;
  if (typeof a2 !== "object" || a2 === null || typeof b2 !== "object" || b2 === null)
    return false;
  var c2 = Object.keys(a2), d2 = Object.keys(b2);
  if (c2.length !== d2.length)
    return false;
  for (d2 = 0; d2 < c2.length; d2++) {
    var e2 = c2[d2];
    if (!ja.call(b2, e2) || !Ge(a2[e2], b2[e2]))
      return false;
  }
  return true;
}
function Ie(a2) {
  for (; a2 && a2.firstChild; )
    a2 = a2.firstChild;
  return a2;
}
function Je(a2, b2) {
  var c2 = Ie(a2);
  a2 = 0;
  for (var d2; c2; ) {
    if (c2.nodeType === 3) {
      d2 = a2 + c2.textContent.length;
      if (a2 <= b2 && d2 >= b2)
        return { node: c2, offset: b2 - a2 };
      a2 = d2;
    }
    a: {
      for (; c2; ) {
        if (c2.nextSibling) {
          c2 = c2.nextSibling;
          break a;
        }
        c2 = c2.parentNode;
      }
      c2 = void 0;
    }
    c2 = Ie(c2);
  }
}
function Ke(a2, b2) {
  return a2 && b2 ? a2 === b2 ? true : a2 && a2.nodeType === 3 ? false : b2 && b2.nodeType === 3 ? Ke(a2, b2.parentNode) : "contains" in a2 ? a2.contains(b2) : a2.compareDocumentPosition ? !!(a2.compareDocumentPosition(b2) & 16) : false : false;
}
function Le() {
  for (var a2 = window, b2 = Wa(); b2 instanceof a2.HTMLIFrameElement; ) {
    try {
      var c2 = typeof b2.contentWindow.location.href === "string";
    } catch (d2) {
      c2 = false;
    }
    if (c2)
      a2 = b2.contentWindow;
    else
      break;
    b2 = Wa(a2.document);
  }
  return b2;
}
function Me(a2) {
  var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
  return b2 && (b2 === "input" && (a2.type === "text" || a2.type === "search" || a2.type === "tel" || a2.type === "url" || a2.type === "password") || b2 === "textarea" || a2.contentEditable === "true");
}
function Ne(a2) {
  var b2 = Le(), c2 = a2.focusedElem, d2 = a2.selectionRange;
  if (b2 !== c2 && c2 && c2.ownerDocument && Ke(c2.ownerDocument.documentElement, c2)) {
    if (d2 !== null && Me(c2)) {
      if (b2 = d2.start, a2 = d2.end, a2 === void 0 && (a2 = b2), "selectionStart" in c2)
        c2.selectionStart = b2, c2.selectionEnd = Math.min(a2, c2.value.length);
      else if (a2 = (b2 = c2.ownerDocument || document) && b2.defaultView || window, a2.getSelection) {
        a2 = a2.getSelection();
        var e2 = c2.textContent.length, f2 = Math.min(d2.start, e2);
        d2 = d2.end === void 0 ? f2 : Math.min(d2.end, e2);
        !a2.extend && f2 > d2 && (e2 = d2, d2 = f2, f2 = e2);
        e2 = Je(c2, f2);
        var g2 = Je(c2, d2);
        e2 && g2 && (a2.rangeCount !== 1 || a2.anchorNode !== e2.node || a2.anchorOffset !== e2.offset || a2.focusNode !== g2.node || a2.focusOffset !== g2.offset) && (b2 = b2.createRange(), b2.setStart(e2.node, e2.offset), a2.removeAllRanges(), f2 > d2 ? (a2.addRange(b2), a2.extend(g2.node, g2.offset)) : (b2.setEnd(g2.node, g2.offset), a2.addRange(b2)));
      }
    }
    b2 = [];
    for (a2 = c2; a2 = a2.parentNode; )
      a2.nodeType === 1 && b2.push({ element: a2, left: a2.scrollLeft, top: a2.scrollTop });
    typeof c2.focus === "function" && c2.focus();
    for (c2 = 0; c2 < b2.length; c2++)
      a2 = b2[c2], a2.element.scrollLeft = a2.left, a2.element.scrollTop = a2.top;
  }
}
var Oe = ia && "documentMode" in document && 11 >= document.documentMode, Pe = null, Qe = null, Re = null, Se = false;
function Te(a2, b2, c2) {
  var d2 = c2.window === c2 ? c2.document : c2.nodeType === 9 ? c2 : c2.ownerDocument;
  Se || Pe == null || Pe !== Wa(d2) || (d2 = Pe, "selectionStart" in d2 && Me(d2) ? d2 = { start: d2.selectionStart, end: d2.selectionEnd } : (d2 = (d2.ownerDocument && d2.ownerDocument.defaultView || window).getSelection(), d2 = { anchorNode: d2.anchorNode, anchorOffset: d2.anchorOffset, focusNode: d2.focusNode, focusOffset: d2.focusOffset }), Re && He(Re, d2) || (Re = d2, d2 = ne(Qe, "onSelect"), 0 < d2.length && (b2 = new sd("onSelect", "select", null, b2, c2), a2.push({ event: b2, listeners: d2 }), b2.target = Pe)));
}
function Ue(a2, b2) {
  var c2 = {};
  c2[a2.toLowerCase()] = b2.toLowerCase();
  c2["Webkit" + a2] = "webkit" + b2;
  c2["Moz" + a2] = "moz" + b2;
  return c2;
}
var Ve = { animationend: Ue("Animation", "AnimationEnd"), animationiteration: Ue("Animation", "AnimationIteration"), animationstart: Ue("Animation", "AnimationStart"), transitionend: Ue("Transition", "TransitionEnd") }, We = {}, Xe = {};
ia && (Xe = document.createElement("div").style, "AnimationEvent" in window || (delete Ve.animationend.animation, delete Ve.animationiteration.animation, delete Ve.animationstart.animation), "TransitionEvent" in window || delete Ve.transitionend.transition);
function Ye(a2) {
  if (We[a2])
    return We[a2];
  if (!Ve[a2])
    return a2;
  var b2 = Ve[a2], c2;
  for (c2 in b2)
    if (b2.hasOwnProperty(c2) && c2 in Xe)
      return We[a2] = b2[c2];
  return a2;
}
var Ze = Ye("animationend"), $e = Ye("animationiteration"), af = Ye("animationstart"), bf = Ye("transitionend"), cf = /* @__PURE__ */ new Map(), df = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ef(a2, b2) {
  cf.set(a2, b2);
  fa(b2, [a2]);
}
for (var ff = 0; ff < df.length; ff++) {
  var gf = df[ff], hf = gf.toLowerCase(), jf = gf[0].toUpperCase() + gf.slice(1);
  ef(hf, "on" + jf);
}
ef(Ze, "onAnimationEnd");
ef($e, "onAnimationIteration");
ef(af, "onAnimationStart");
ef("dblclick", "onDoubleClick");
ef("focusin", "onFocus");
ef("focusout", "onBlur");
ef(bf, "onTransitionEnd");
ha("onMouseEnter", ["mouseout", "mouseover"]);
ha("onMouseLeave", ["mouseout", "mouseover"]);
ha("onPointerEnter", ["pointerout", "pointerover"]);
ha("onPointerLeave", ["pointerout", "pointerover"]);
fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var kf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), lf = new Set("cancel close invalid load scroll toggle".split(" ").concat(kf));
function mf(a2, b2, c2) {
  var d2 = a2.type || "unknown-event";
  a2.currentTarget = c2;
  Tb(d2, b2, void 0, a2);
  a2.currentTarget = null;
}
function re(a2, b2) {
  b2 = (b2 & 4) !== 0;
  for (var c2 = 0; c2 < a2.length; c2++) {
    var d2 = a2[c2], e2 = d2.event;
    d2 = d2.listeners;
    a: {
      var f2 = void 0;
      if (b2)
        for (var g2 = d2.length - 1; 0 <= g2; g2--) {
          var h2 = d2[g2], k2 = h2.instance, l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped())
            break a;
          mf(e2, h2, l2);
          f2 = k2;
        }
      else
        for (g2 = 0; g2 < d2.length; g2++) {
          h2 = d2[g2];
          k2 = h2.instance;
          l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped())
            break a;
          mf(e2, h2, l2);
          f2 = k2;
        }
    }
  }
  if (Pb)
    throw a2 = Qb, Pb = false, Qb = null, a2;
}
function D$1(a2, b2) {
  var c2 = b2[nf];
  c2 === void 0 && (c2 = b2[nf] = /* @__PURE__ */ new Set());
  var d2 = a2 + "__bubble";
  c2.has(d2) || (of(b2, a2, 2, false), c2.add(d2));
}
function pf(a2, b2, c2) {
  var d2 = 0;
  b2 && (d2 |= 4);
  of(c2, a2, d2, b2);
}
var qf = "_reactListening" + Math.random().toString(36).slice(2);
function rf(a2) {
  if (!a2[qf]) {
    a2[qf] = true;
    da.forEach(function(b3) {
      b3 !== "selectionchange" && (lf.has(b3) || pf(b3, false, a2), pf(b3, true, a2));
    });
    var b2 = a2.nodeType === 9 ? a2 : a2.ownerDocument;
    b2 === null || b2[qf] || (b2[qf] = true, pf("selectionchange", false, b2));
  }
}
function of(a2, b2, c2, d2) {
  switch (id(b2)) {
    case 1:
      var e2 = dd;
      break;
    case 4:
      e2 = fd;
      break;
    default:
      e2 = ed;
  }
  c2 = e2.bind(null, b2, c2, a2);
  e2 = void 0;
  !Kb || b2 !== "touchstart" && b2 !== "touchmove" && b2 !== "wheel" || (e2 = true);
  d2 ? e2 !== void 0 ? a2.addEventListener(b2, c2, { capture: true, passive: e2 }) : a2.addEventListener(b2, c2, true) : e2 !== void 0 ? a2.addEventListener(b2, c2, { passive: e2 }) : a2.addEventListener(b2, c2, false);
}
function gd(a2, b2, c2, d2, e2) {
  var f2 = d2;
  if ((b2 & 1) === 0 && (b2 & 2) === 0 && d2 !== null)
    a:
      for (; ; ) {
        if (d2 === null)
          return;
        var g2 = d2.tag;
        if (g2 === 3 || g2 === 4) {
          var h2 = d2.stateNode.containerInfo;
          if (h2 === e2 || h2.nodeType === 8 && h2.parentNode === e2)
            break;
          if (g2 === 4)
            for (g2 = d2.return; g2 !== null; ) {
              var k2 = g2.tag;
              if (k2 === 3 || k2 === 4) {
                if (k2 = g2.stateNode.containerInfo, k2 === e2 || k2.nodeType === 8 && k2.parentNode === e2)
                  return;
              }
              g2 = g2.return;
            }
          for (; h2 !== null; ) {
            g2 = Vc(h2);
            if (g2 === null)
              return;
            k2 = g2.tag;
            if (k2 === 5 || k2 === 6) {
              d2 = f2 = g2;
              continue a;
            }
            h2 = h2.parentNode;
          }
        }
        d2 = d2.return;
      }
  Ib(function() {
    var d3 = f2, e3 = wb(c2), g3 = [];
    a: {
      var h3 = cf.get(a2);
      if (h3 !== void 0) {
        var k3 = sd, m2 = a2;
        switch (a2) {
          case "keypress":
            if (nd(c2) === 0)
              break a;
          case "keydown":
          case "keyup":
            k3 = Qd;
            break;
          case "focusin":
            m2 = "focus";
            k3 = Ed;
            break;
          case "focusout":
            m2 = "blur";
            k3 = Ed;
            break;
          case "beforeblur":
          case "afterblur":
            k3 = Ed;
            break;
          case "click":
            if (c2.button === 2)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k3 = Ad;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k3 = Cd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k3 = Ud;
            break;
          case Ze:
          case $e:
          case af:
            k3 = Gd;
            break;
          case bf:
            k3 = Wd;
            break;
          case "scroll":
            k3 = ud;
            break;
          case "wheel":
            k3 = Yd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k3 = Id;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k3 = Sd;
        }
        var w2 = (b2 & 4) !== 0, J2 = !w2 && a2 === "scroll", v2 = w2 ? h3 !== null ? h3 + "Capture" : null : h3;
        w2 = [];
        for (var x2 = d3, r2; x2 !== null; ) {
          r2 = x2;
          var F2 = r2.stateNode;
          r2.tag === 5 && F2 !== null && (r2 = F2, v2 !== null && (F2 = Jb(x2, v2), F2 != null && w2.push(sf(x2, F2, r2))));
          if (J2)
            break;
          x2 = x2.return;
        }
        0 < w2.length && (h3 = new k3(h3, m2, null, c2, e3), g3.push({ event: h3, listeners: w2 }));
      }
    }
    if ((b2 & 7) === 0) {
      a: {
        h3 = a2 === "mouseover" || a2 === "pointerover";
        k3 = a2 === "mouseout" || a2 === "pointerout";
        if (h3 && c2 !== vb && (m2 = c2.relatedTarget || c2.fromElement) && (Vc(m2) || m2[tf]))
          break a;
        if (k3 || h3) {
          h3 = e3.window === e3 ? e3 : (h3 = e3.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
          if (k3) {
            if (m2 = c2.relatedTarget || c2.toElement, k3 = d3, m2 = m2 ? Vc(m2) : null, m2 !== null && (J2 = Ub(m2), m2 !== J2 || m2.tag !== 5 && m2.tag !== 6))
              m2 = null;
          } else
            k3 = null, m2 = d3;
          if (k3 !== m2) {
            w2 = Ad;
            F2 = "onMouseLeave";
            v2 = "onMouseEnter";
            x2 = "mouse";
            if (a2 === "pointerout" || a2 === "pointerover")
              w2 = Sd, F2 = "onPointerLeave", v2 = "onPointerEnter", x2 = "pointer";
            J2 = k3 == null ? h3 : te(k3);
            r2 = m2 == null ? h3 : te(m2);
            h3 = new w2(F2, x2 + "leave", k3, c2, e3);
            h3.target = J2;
            h3.relatedTarget = r2;
            F2 = null;
            Vc(e3) === d3 && (w2 = new w2(v2, x2 + "enter", m2, c2, e3), w2.target = r2, w2.relatedTarget = J2, F2 = w2);
            J2 = F2;
            if (k3 && m2)
              b: {
                w2 = k3;
                v2 = m2;
                x2 = 0;
                for (r2 = w2; r2; r2 = uf(r2))
                  x2++;
                r2 = 0;
                for (F2 = v2; F2; F2 = uf(F2))
                  r2++;
                for (; 0 < x2 - r2; )
                  w2 = uf(w2), x2--;
                for (; 0 < r2 - x2; )
                  v2 = uf(v2), r2--;
                for (; x2--; ) {
                  if (w2 === v2 || v2 !== null && w2 === v2.alternate)
                    break b;
                  w2 = uf(w2);
                  v2 = uf(v2);
                }
                w2 = null;
              }
            else
              w2 = null;
            k3 !== null && vf(g3, h3, k3, w2, false);
            m2 !== null && J2 !== null && vf(g3, J2, m2, w2, true);
          }
        }
      }
      a: {
        h3 = d3 ? te(d3) : window;
        k3 = h3.nodeName && h3.nodeName.toLowerCase();
        if (k3 === "select" || k3 === "input" && h3.type === "file")
          var Z2 = ue;
        else if (le(h3))
          if (ve)
            Z2 = Ee;
          else {
            Z2 = Ce;
            var ya = Be;
          }
        else
          (k3 = h3.nodeName) && k3.toLowerCase() === "input" && (h3.type === "checkbox" || h3.type === "radio") && (Z2 = De);
        if (Z2 && (Z2 = Z2(a2, d3))) {
          me(g3, Z2, c2, e3);
          break a;
        }
        ya && ya(a2, h3, d3);
        a2 === "focusout" && (ya = h3._wrapperState) && ya.controlled && h3.type === "number" && bb(h3, "number", h3.value);
      }
      ya = d3 ? te(d3) : window;
      switch (a2) {
        case "focusin":
          if (le(ya) || ya.contentEditable === "true")
            Pe = ya, Qe = d3, Re = null;
          break;
        case "focusout":
          Re = Qe = Pe = null;
          break;
        case "mousedown":
          Se = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Se = false;
          Te(g3, c2, e3);
          break;
        case "selectionchange":
          if (Oe)
            break;
        case "keydown":
        case "keyup":
          Te(g3, c2, e3);
      }
      var ab;
      if ($d)
        b: {
          switch (a2) {
            case "compositionstart":
              var ca = "onCompositionStart";
              break b;
            case "compositionend":
              ca = "onCompositionEnd";
              break b;
            case "compositionupdate":
              ca = "onCompositionUpdate";
              break b;
          }
          ca = void 0;
        }
      else
        he ? fe(a2, c2) && (ca = "onCompositionEnd") : a2 === "keydown" && c2.keyCode === 229 && (ca = "onCompositionStart");
      ca && (ce && c2.locale !== "ko" && (he || ca !== "onCompositionStart" ? ca === "onCompositionEnd" && he && (ab = md()) : (jd = e3, kd = "value" in jd ? jd.value : jd.textContent, he = true)), ya = ne(d3, ca), 0 < ya.length && (ca = new Kd(ca, a2, null, c2, e3), g3.push({ event: ca, listeners: ya }), ab ? ca.data = ab : (ab = ge(c2), ab !== null && (ca.data = ab))));
      if (ab = be ? ie(a2, c2) : je(a2, c2))
        d3 = ne(d3, "onBeforeInput"), 0 < d3.length && (e3 = new Kd("onBeforeInput", "beforeinput", null, c2, e3), g3.push({ event: e3, listeners: d3 }), e3.data = ab);
    }
    re(g3, b2);
  });
}
function sf(a2, b2, c2) {
  return { instance: a2, listener: b2, currentTarget: c2 };
}
function ne(a2, b2) {
  for (var c2 = b2 + "Capture", d2 = []; a2 !== null; ) {
    var e2 = a2, f2 = e2.stateNode;
    e2.tag === 5 && f2 !== null && (e2 = f2, f2 = Jb(a2, c2), f2 != null && d2.unshift(sf(a2, f2, e2)), f2 = Jb(a2, b2), f2 != null && d2.push(sf(a2, f2, e2)));
    a2 = a2.return;
  }
  return d2;
}
function uf(a2) {
  if (a2 === null)
    return null;
  do
    a2 = a2.return;
  while (a2 && a2.tag !== 5);
  return a2 ? a2 : null;
}
function vf(a2, b2, c2, d2, e2) {
  for (var f2 = b2._reactName, g2 = []; c2 !== null && c2 !== d2; ) {
    var h2 = c2, k2 = h2.alternate, l2 = h2.stateNode;
    if (k2 !== null && k2 === d2)
      break;
    h2.tag === 5 && l2 !== null && (h2 = l2, e2 ? (k2 = Jb(c2, f2), k2 != null && g2.unshift(sf(c2, k2, h2))) : e2 || (k2 = Jb(c2, f2), k2 != null && g2.push(sf(c2, k2, h2))));
    c2 = c2.return;
  }
  g2.length !== 0 && a2.push({ event: b2, listeners: g2 });
}
var wf = /\r\n?/g, xf = /\u0000|\uFFFD/g;
function yf(a2) {
  return (typeof a2 === "string" ? a2 : "" + a2).replace(wf, "\n").replace(xf, "");
}
function zf(a2, b2, c2) {
  b2 = yf(b2);
  if (yf(a2) !== b2 && c2)
    throw Error(p$6(425));
}
function Af() {
}
var Bf = null, Cf = null;
function Df(a2, b2) {
  return a2 === "textarea" || a2 === "noscript" || typeof b2.children === "string" || typeof b2.children === "number" || typeof b2.dangerouslySetInnerHTML === "object" && b2.dangerouslySetInnerHTML !== null && b2.dangerouslySetInnerHTML.__html != null;
}
var Ef = typeof setTimeout === "function" ? setTimeout : void 0, Ff = typeof clearTimeout === "function" ? clearTimeout : void 0, Gf = typeof Promise === "function" ? Promise : void 0, If = typeof queueMicrotask === "function" ? queueMicrotask : typeof Gf !== "undefined" ? function(a2) {
  return Gf.resolve(null).then(a2).catch(Hf);
} : Ef;
function Hf(a2) {
  setTimeout(function() {
    throw a2;
  });
}
function Jf(a2, b2) {
  var c2 = b2, d2 = 0;
  do {
    var e2 = c2.nextSibling;
    a2.removeChild(c2);
    if (e2 && e2.nodeType === 8)
      if (c2 = e2.data, c2 === "/$") {
        if (d2 === 0) {
          a2.removeChild(e2);
          ad(b2);
          return;
        }
        d2--;
      } else
        c2 !== "$" && c2 !== "$?" && c2 !== "$!" || d2++;
    c2 = e2;
  } while (c2);
  ad(b2);
}
function Kf(a2) {
  for (; a2 != null; a2 = a2.nextSibling) {
    var b2 = a2.nodeType;
    if (b2 === 1 || b2 === 3)
      break;
    if (b2 === 8) {
      b2 = a2.data;
      if (b2 === "$" || b2 === "$!" || b2 === "$?")
        break;
      if (b2 === "/$")
        return null;
    }
  }
  return a2;
}
function Lf(a2) {
  a2 = a2.previousSibling;
  for (var b2 = 0; a2; ) {
    if (a2.nodeType === 8) {
      var c2 = a2.data;
      if (c2 === "$" || c2 === "$!" || c2 === "$?") {
        if (b2 === 0)
          return a2;
        b2--;
      } else
        c2 === "/$" && b2++;
    }
    a2 = a2.previousSibling;
  }
  return null;
}
var Mf = Math.random().toString(36).slice(2), Nf = "__reactFiber$" + Mf, Of = "__reactProps$" + Mf, tf = "__reactContainer$" + Mf, nf = "__reactEvents$" + Mf, Pf = "__reactListeners$" + Mf, Qf = "__reactHandles$" + Mf;
function Vc(a2) {
  var b2 = a2[Nf];
  if (b2)
    return b2;
  for (var c2 = a2.parentNode; c2; ) {
    if (b2 = c2[tf] || c2[Nf]) {
      c2 = b2.alternate;
      if (b2.child !== null || c2 !== null && c2.child !== null)
        for (a2 = Lf(a2); a2 !== null; ) {
          if (c2 = a2[Nf])
            return c2;
          a2 = Lf(a2);
        }
      return b2;
    }
    a2 = c2;
    c2 = a2.parentNode;
  }
  return null;
}
function Bb(a2) {
  a2 = a2[Nf] || a2[tf];
  return !a2 || a2.tag !== 5 && a2.tag !== 6 && a2.tag !== 13 && a2.tag !== 3 ? null : a2;
}
function te(a2) {
  if (a2.tag === 5 || a2.tag === 6)
    return a2.stateNode;
  throw Error(p$6(33));
}
function Cb(a2) {
  return a2[Of] || null;
}
var Rf = [], Sf = -1;
function Tf(a2) {
  return { current: a2 };
}
function E$1(a2) {
  0 > Sf || (a2.current = Rf[Sf], Rf[Sf] = null, Sf--);
}
function G$1(a2, b2) {
  Sf++;
  Rf[Sf] = a2.current;
  a2.current = b2;
}
var Uf = {}, H$1 = Tf(Uf), Vf = Tf(false), Wf = Uf;
function Xf(a2, b2) {
  var c2 = a2.type.contextTypes;
  if (!c2)
    return Uf;
  var d2 = a2.stateNode;
  if (d2 && d2.__reactInternalMemoizedUnmaskedChildContext === b2)
    return d2.__reactInternalMemoizedMaskedChildContext;
  var e2 = {}, f2;
  for (f2 in c2)
    e2[f2] = b2[f2];
  d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = b2, a2.__reactInternalMemoizedMaskedChildContext = e2);
  return e2;
}
function Yf(a2) {
  a2 = a2.childContextTypes;
  return a2 !== null && a2 !== void 0;
}
function Zf() {
  E$1(Vf);
  E$1(H$1);
}
function $f(a2, b2, c2) {
  if (H$1.current !== Uf)
    throw Error(p$6(168));
  G$1(H$1, b2);
  G$1(Vf, c2);
}
function ag(a2, b2, c2) {
  var d2 = a2.stateNode;
  b2 = b2.childContextTypes;
  if (typeof d2.getChildContext !== "function")
    return c2;
  d2 = d2.getChildContext();
  for (var e2 in d2)
    if (!(e2 in b2))
      throw Error(p$6(108, Qa(a2) || "Unknown", e2));
  return A$2({}, c2, d2);
}
function bg(a2) {
  a2 = (a2 = a2.stateNode) && a2.__reactInternalMemoizedMergedChildContext || Uf;
  Wf = H$1.current;
  G$1(H$1, a2);
  G$1(Vf, Vf.current);
  return true;
}
function cg(a2, b2, c2) {
  var d2 = a2.stateNode;
  if (!d2)
    throw Error(p$6(169));
  c2 ? (a2 = ag(a2, b2, Wf), d2.__reactInternalMemoizedMergedChildContext = a2, E$1(Vf), E$1(H$1), G$1(H$1, a2)) : E$1(Vf);
  G$1(Vf, c2);
}
var dg = null, eg = false, fg = false;
function gg(a2) {
  dg === null ? dg = [a2] : dg.push(a2);
}
function hg(a2) {
  eg = true;
  gg(a2);
}
function ig() {
  if (!fg && dg !== null) {
    fg = true;
    var a2 = 0, b2 = C;
    try {
      var c2 = dg;
      for (C = 1; a2 < c2.length; a2++) {
        var d2 = c2[a2];
        do
          d2 = d2(true);
        while (d2 !== null);
      }
      dg = null;
      eg = false;
    } catch (e2) {
      throw dg !== null && (dg = dg.slice(a2 + 1)), $b(ec, ig), e2;
    } finally {
      C = b2, fg = false;
    }
  }
  return null;
}
var jg = ta.ReactCurrentBatchConfig;
function kg(a2, b2) {
  if (a2 && a2.defaultProps) {
    b2 = A$2({}, b2);
    a2 = a2.defaultProps;
    for (var c2 in a2)
      b2[c2] === void 0 && (b2[c2] = a2[c2]);
    return b2;
  }
  return b2;
}
var lg = Tf(null), mg = null, ng = null, og = null;
function pg() {
  og = ng = mg = null;
}
function qg(a2) {
  var b2 = lg.current;
  E$1(lg);
  a2._currentValue = b2;
}
function rg(a2, b2, c2) {
  for (; a2 !== null; ) {
    var d2 = a2.alternate;
    (a2.childLanes & b2) !== b2 ? (a2.childLanes |= b2, d2 !== null && (d2.childLanes |= b2)) : d2 !== null && (d2.childLanes & b2) !== b2 && (d2.childLanes |= b2);
    if (a2 === c2)
      break;
    a2 = a2.return;
  }
}
function sg(a2, b2) {
  mg = a2;
  og = ng = null;
  a2 = a2.dependencies;
  a2 !== null && a2.firstContext !== null && ((a2.lanes & b2) !== 0 && (tg = true), a2.firstContext = null);
}
function ug(a2) {
  var b2 = a2._currentValue;
  if (og !== a2)
    if (a2 = { context: a2, memoizedValue: b2, next: null }, ng === null) {
      if (mg === null)
        throw Error(p$6(308));
      ng = a2;
      mg.dependencies = { lanes: 0, firstContext: a2 };
    } else
      ng = ng.next = a2;
  return b2;
}
var vg = null, wg = false;
function xg(a2) {
  a2.updateQueue = { baseState: a2.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function yg(a2, b2) {
  a2 = a2.updateQueue;
  b2.updateQueue === a2 && (b2.updateQueue = { baseState: a2.baseState, firstBaseUpdate: a2.firstBaseUpdate, lastBaseUpdate: a2.lastBaseUpdate, shared: a2.shared, effects: a2.effects });
}
function zg(a2, b2) {
  return { eventTime: a2, lane: b2, tag: 0, payload: null, callback: null, next: null };
}
function Ag(a2, b2) {
  var c2 = a2.updateQueue;
  c2 !== null && (c2 = c2.shared, Bg(a2) ? (a2 = c2.interleaved, a2 === null ? (b2.next = b2, vg === null ? vg = [c2] : vg.push(c2)) : (b2.next = a2.next, a2.next = b2), c2.interleaved = b2) : (a2 = c2.pending, a2 === null ? b2.next = b2 : (b2.next = a2.next, a2.next = b2), c2.pending = b2));
}
function Cg(a2, b2, c2) {
  b2 = b2.updateQueue;
  if (b2 !== null && (b2 = b2.shared, (c2 & 4194240) !== 0)) {
    var d2 = b2.lanes;
    d2 &= a2.pendingLanes;
    c2 |= d2;
    b2.lanes = c2;
    Bc(a2, c2);
  }
}
function Dg(a2, b2) {
  var c2 = a2.updateQueue, d2 = a2.alternate;
  if (d2 !== null && (d2 = d2.updateQueue, c2 === d2)) {
    var e2 = null, f2 = null;
    c2 = c2.firstBaseUpdate;
    if (c2 !== null) {
      do {
        var g2 = { eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null };
        f2 === null ? e2 = f2 = g2 : f2 = f2.next = g2;
        c2 = c2.next;
      } while (c2 !== null);
      f2 === null ? e2 = f2 = b2 : f2 = f2.next = b2;
    } else
      e2 = f2 = b2;
    c2 = { baseState: d2.baseState, firstBaseUpdate: e2, lastBaseUpdate: f2, shared: d2.shared, effects: d2.effects };
    a2.updateQueue = c2;
    return;
  }
  a2 = c2.lastBaseUpdate;
  a2 === null ? c2.firstBaseUpdate = b2 : a2.next = b2;
  c2.lastBaseUpdate = b2;
}
function Eg(a2, b2, c2, d2) {
  var e2 = a2.updateQueue;
  wg = false;
  var f2 = e2.firstBaseUpdate, g2 = e2.lastBaseUpdate, h2 = e2.shared.pending;
  if (h2 !== null) {
    e2.shared.pending = null;
    var k2 = h2, l2 = k2.next;
    k2.next = null;
    g2 === null ? f2 = l2 : g2.next = l2;
    g2 = k2;
    var n2 = a2.alternate;
    n2 !== null && (n2 = n2.updateQueue, h2 = n2.lastBaseUpdate, h2 !== g2 && (h2 === null ? n2.firstBaseUpdate = l2 : h2.next = l2, n2.lastBaseUpdate = k2));
  }
  if (f2 !== null) {
    var u2 = e2.baseState;
    g2 = 0;
    n2 = l2 = k2 = null;
    h2 = f2;
    do {
      var q2 = h2.lane, y2 = h2.eventTime;
      if ((d2 & q2) === q2) {
        n2 !== null && (n2 = n2.next = {
          eventTime: y2,
          lane: 0,
          tag: h2.tag,
          payload: h2.payload,
          callback: h2.callback,
          next: null
        });
        a: {
          var m2 = a2, w2 = h2;
          q2 = b2;
          y2 = c2;
          switch (w2.tag) {
            case 1:
              m2 = w2.payload;
              if (typeof m2 === "function") {
                u2 = m2.call(y2, u2, q2);
                break a;
              }
              u2 = m2;
              break a;
            case 3:
              m2.flags = m2.flags & -65537 | 128;
            case 0:
              m2 = w2.payload;
              q2 = typeof m2 === "function" ? m2.call(y2, u2, q2) : m2;
              if (q2 === null || q2 === void 0)
                break a;
              u2 = A$2({}, u2, q2);
              break a;
            case 2:
              wg = true;
          }
        }
        h2.callback !== null && h2.lane !== 0 && (a2.flags |= 64, q2 = e2.effects, q2 === null ? e2.effects = [h2] : q2.push(h2));
      } else
        y2 = { eventTime: y2, lane: q2, tag: h2.tag, payload: h2.payload, callback: h2.callback, next: null }, n2 === null ? (l2 = n2 = y2, k2 = u2) : n2 = n2.next = y2, g2 |= q2;
      h2 = h2.next;
      if (h2 === null)
        if (h2 = e2.shared.pending, h2 === null)
          break;
        else
          q2 = h2, h2 = q2.next, q2.next = null, e2.lastBaseUpdate = q2, e2.shared.pending = null;
    } while (1);
    n2 === null && (k2 = u2);
    e2.baseState = k2;
    e2.firstBaseUpdate = l2;
    e2.lastBaseUpdate = n2;
    b2 = e2.shared.interleaved;
    if (b2 !== null) {
      e2 = b2;
      do
        g2 |= e2.lane, e2 = e2.next;
      while (e2 !== b2);
    } else
      f2 === null && (e2.shared.lanes = 0);
    Fg |= g2;
    a2.lanes = g2;
    a2.memoizedState = u2;
  }
}
function Gg(a2, b2, c2) {
  a2 = b2.effects;
  b2.effects = null;
  if (a2 !== null)
    for (b2 = 0; b2 < a2.length; b2++) {
      var d2 = a2[b2], e2 = d2.callback;
      if (e2 !== null) {
        d2.callback = null;
        d2 = c2;
        if (typeof e2 !== "function")
          throw Error(p$6(191, e2));
        e2.call(d2);
      }
    }
}
var Hg = new aa.Component().refs;
function Ig(a2, b2, c2, d2) {
  b2 = a2.memoizedState;
  c2 = c2(d2, b2);
  c2 = c2 === null || c2 === void 0 ? b2 : A$2({}, b2, c2);
  a2.memoizedState = c2;
  a2.lanes === 0 && (a2.updateQueue.baseState = c2);
}
var Mg = { isMounted: function(a2) {
  return (a2 = a2._reactInternals) ? Ub(a2) === a2 : false;
}, enqueueSetState: function(a2, b2, c2) {
  a2 = a2._reactInternals;
  var d2 = Jg(), e2 = Kg(a2), f2 = zg(d2, e2);
  f2.payload = b2;
  c2 !== void 0 && c2 !== null && (f2.callback = c2);
  Ag(a2, f2);
  b2 = Lg(a2, e2, d2);
  b2 !== null && Cg(b2, a2, e2);
}, enqueueReplaceState: function(a2, b2, c2) {
  a2 = a2._reactInternals;
  var d2 = Jg(), e2 = Kg(a2), f2 = zg(d2, e2);
  f2.tag = 1;
  f2.payload = b2;
  c2 !== void 0 && c2 !== null && (f2.callback = c2);
  Ag(a2, f2);
  b2 = Lg(a2, e2, d2);
  b2 !== null && Cg(b2, a2, e2);
}, enqueueForceUpdate: function(a2, b2) {
  a2 = a2._reactInternals;
  var c2 = Jg(), d2 = Kg(a2), e2 = zg(c2, d2);
  e2.tag = 2;
  b2 !== void 0 && b2 !== null && (e2.callback = b2);
  Ag(a2, e2);
  b2 = Lg(a2, d2, c2);
  b2 !== null && Cg(b2, a2, d2);
} };
function Ng(a2, b2, c2, d2, e2, f2, g2) {
  a2 = a2.stateNode;
  return typeof a2.shouldComponentUpdate === "function" ? a2.shouldComponentUpdate(d2, f2, g2) : b2.prototype && b2.prototype.isPureReactComponent ? !He(c2, d2) || !He(e2, f2) : true;
}
function Og(a2, b2, c2) {
  var d2 = false, e2 = Uf;
  var f2 = b2.contextType;
  typeof f2 === "object" && f2 !== null ? f2 = ug(f2) : (e2 = Yf(b2) ? Wf : H$1.current, d2 = b2.contextTypes, f2 = (d2 = d2 !== null && d2 !== void 0) ? Xf(a2, e2) : Uf);
  b2 = new b2(c2, f2);
  a2.memoizedState = b2.state !== null && b2.state !== void 0 ? b2.state : null;
  b2.updater = Mg;
  a2.stateNode = b2;
  b2._reactInternals = a2;
  d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = e2, a2.__reactInternalMemoizedMaskedChildContext = f2);
  return b2;
}
function Pg(a2, b2, c2, d2) {
  a2 = b2.state;
  typeof b2.componentWillReceiveProps === "function" && b2.componentWillReceiveProps(c2, d2);
  typeof b2.UNSAFE_componentWillReceiveProps === "function" && b2.UNSAFE_componentWillReceiveProps(c2, d2);
  b2.state !== a2 && Mg.enqueueReplaceState(b2, b2.state, null);
}
function Qg(a2, b2, c2, d2) {
  var e2 = a2.stateNode;
  e2.props = c2;
  e2.state = a2.memoizedState;
  e2.refs = Hg;
  xg(a2);
  var f2 = b2.contextType;
  typeof f2 === "object" && f2 !== null ? e2.context = ug(f2) : (f2 = Yf(b2) ? Wf : H$1.current, e2.context = Xf(a2, f2));
  e2.state = a2.memoizedState;
  f2 = b2.getDerivedStateFromProps;
  typeof f2 === "function" && (Ig(a2, b2, f2, c2), e2.state = a2.memoizedState);
  typeof b2.getDerivedStateFromProps === "function" || typeof e2.getSnapshotBeforeUpdate === "function" || typeof e2.UNSAFE_componentWillMount !== "function" && typeof e2.componentWillMount !== "function" || (b2 = e2.state, typeof e2.componentWillMount === "function" && e2.componentWillMount(), typeof e2.UNSAFE_componentWillMount === "function" && e2.UNSAFE_componentWillMount(), b2 !== e2.state && Mg.enqueueReplaceState(e2, e2.state, null), Eg(a2, c2, e2, d2), e2.state = a2.memoizedState);
  typeof e2.componentDidMount === "function" && (a2.flags |= 4194308);
}
var Rg = [], Sg = 0, Tg = null, Ug = 0, Vg = [], Wg = 0, Xg = null, Yg = 1, Zg = "";
function $g(a2, b2) {
  Rg[Sg++] = Ug;
  Rg[Sg++] = Tg;
  Tg = a2;
  Ug = b2;
}
function ah(a2, b2, c2) {
  Vg[Wg++] = Yg;
  Vg[Wg++] = Zg;
  Vg[Wg++] = Xg;
  Xg = a2;
  var d2 = Yg;
  a2 = Zg;
  var e2 = 32 - nc(d2) - 1;
  d2 &= ~(1 << e2);
  c2 += 1;
  var f2 = 32 - nc(b2) + e2;
  if (30 < f2) {
    var g2 = e2 - e2 % 5;
    f2 = (d2 & (1 << g2) - 1).toString(32);
    d2 >>= g2;
    e2 -= g2;
    Yg = 1 << 32 - nc(b2) + e2 | c2 << e2 | d2;
    Zg = f2 + a2;
  } else
    Yg = 1 << f2 | c2 << e2 | d2, Zg = a2;
}
function bh(a2) {
  a2.return !== null && ($g(a2, 1), ah(a2, 1, 0));
}
function ch(a2) {
  for (; a2 === Tg; )
    Tg = Rg[--Sg], Rg[Sg] = null, Ug = Rg[--Sg], Rg[Sg] = null;
  for (; a2 === Xg; )
    Xg = Vg[--Wg], Vg[Wg] = null, Zg = Vg[--Wg], Vg[Wg] = null, Yg = Vg[--Wg], Vg[Wg] = null;
}
var dh = null, eh = null, I$1 = false, fh = null;
function gh(a2, b2) {
  var c2 = hh(5, null, null, 0);
  c2.elementType = "DELETED";
  c2.stateNode = b2;
  c2.return = a2;
  b2 = a2.deletions;
  b2 === null ? (a2.deletions = [c2], a2.flags |= 16) : b2.push(c2);
}
function ih(a2, b2) {
  switch (a2.tag) {
    case 5:
      var c2 = a2.type;
      b2 = b2.nodeType !== 1 || c2.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
      return b2 !== null ? (a2.stateNode = b2, dh = a2, eh = Kf(b2.firstChild), true) : false;
    case 6:
      return b2 = a2.pendingProps === "" || b2.nodeType !== 3 ? null : b2, b2 !== null ? (a2.stateNode = b2, dh = a2, eh = null, true) : false;
    case 13:
      return b2 = b2.nodeType !== 8 ? null : b2, b2 !== null ? (c2 = Xg !== null ? { id: Yg, overflow: Zg } : null, a2.memoizedState = { dehydrated: b2, treeContext: c2, retryLane: 1073741824 }, c2 = hh(18, null, null, 0), c2.stateNode = b2, c2.return = a2, a2.child = c2, dh = a2, eh = null, true) : false;
    default:
      return false;
  }
}
function jh(a2) {
  return (a2.mode & 1) !== 0 && (a2.flags & 128) === 0;
}
function kh(a2) {
  if (I$1) {
    var b2 = eh;
    if (b2) {
      var c2 = b2;
      if (!ih(a2, b2)) {
        if (jh(a2))
          throw Error(p$6(418));
        b2 = Kf(c2.nextSibling);
        var d2 = dh;
        b2 && ih(a2, b2) ? gh(d2, c2) : (a2.flags = a2.flags & -4097 | 2, I$1 = false, dh = a2);
      }
    } else {
      if (jh(a2))
        throw Error(p$6(418));
      a2.flags = a2.flags & -4097 | 2;
      I$1 = false;
      dh = a2;
    }
  }
}
function lh(a2) {
  for (a2 = a2.return; a2 !== null && a2.tag !== 5 && a2.tag !== 3 && a2.tag !== 13; )
    a2 = a2.return;
  dh = a2;
}
function mh(a2) {
  if (a2 !== dh)
    return false;
  if (!I$1)
    return lh(a2), I$1 = true, false;
  var b2;
  (b2 = a2.tag !== 3) && !(b2 = a2.tag !== 5) && (b2 = a2.type, b2 = b2 !== "head" && b2 !== "body" && !Df(a2.type, a2.memoizedProps));
  if (b2 && (b2 = eh)) {
    if (jh(a2)) {
      for (a2 = eh; a2; )
        a2 = Kf(a2.nextSibling);
      throw Error(p$6(418));
    }
    for (; b2; )
      gh(a2, b2), b2 = Kf(b2.nextSibling);
  }
  lh(a2);
  if (a2.tag === 13) {
    a2 = a2.memoizedState;
    a2 = a2 !== null ? a2.dehydrated : null;
    if (!a2)
      throw Error(p$6(317));
    a: {
      a2 = a2.nextSibling;
      for (b2 = 0; a2; ) {
        if (a2.nodeType === 8) {
          var c2 = a2.data;
          if (c2 === "/$") {
            if (b2 === 0) {
              eh = Kf(a2.nextSibling);
              break a;
            }
            b2--;
          } else
            c2 !== "$" && c2 !== "$!" && c2 !== "$?" || b2++;
        }
        a2 = a2.nextSibling;
      }
      eh = null;
    }
  } else
    eh = dh ? Kf(a2.stateNode.nextSibling) : null;
  return true;
}
function nh() {
  eh = dh = null;
  I$1 = false;
}
function oh(a2) {
  fh === null ? fh = [a2] : fh.push(a2);
}
function ph(a2, b2, c2) {
  a2 = c2.ref;
  if (a2 !== null && typeof a2 !== "function" && typeof a2 !== "object") {
    if (c2._owner) {
      c2 = c2._owner;
      if (c2) {
        if (c2.tag !== 1)
          throw Error(p$6(309));
        var d2 = c2.stateNode;
      }
      if (!d2)
        throw Error(p$6(147, a2));
      var e2 = d2, f2 = "" + a2;
      if (b2 !== null && b2.ref !== null && typeof b2.ref === "function" && b2.ref._stringRef === f2)
        return b2.ref;
      b2 = function(a3) {
        var b3 = e2.refs;
        b3 === Hg && (b3 = e2.refs = {});
        a3 === null ? delete b3[f2] : b3[f2] = a3;
      };
      b2._stringRef = f2;
      return b2;
    }
    if (typeof a2 !== "string")
      throw Error(p$6(284));
    if (!c2._owner)
      throw Error(p$6(290, a2));
  }
  return a2;
}
function qh(a2, b2) {
  a2 = Object.prototype.toString.call(b2);
  throw Error(p$6(31, a2 === "[object Object]" ? "object with keys {" + Object.keys(b2).join(", ") + "}" : a2));
}
function rh(a2) {
  var b2 = a2._init;
  return b2(a2._payload);
}
function sh(a2) {
  function b2(b3, c3) {
    if (a2) {
      var d3 = b3.deletions;
      d3 === null ? (b3.deletions = [c3], b3.flags |= 16) : d3.push(c3);
    }
  }
  function c2(c3, d3) {
    if (!a2)
      return null;
    for (; d3 !== null; )
      b2(c3, d3), d3 = d3.sibling;
    return null;
  }
  function d2(a3, b3) {
    for (a3 = /* @__PURE__ */ new Map(); b3 !== null; )
      b3.key !== null ? a3.set(b3.key, b3) : a3.set(b3.index, b3), b3 = b3.sibling;
    return a3;
  }
  function e2(a3, b3) {
    a3 = th(a3, b3);
    a3.index = 0;
    a3.sibling = null;
    return a3;
  }
  function f2(b3, c3, d3) {
    b3.index = d3;
    if (!a2)
      return b3.flags |= 1048576, c3;
    d3 = b3.alternate;
    if (d3 !== null)
      return d3 = d3.index, d3 < c3 ? (b3.flags |= 2, c3) : d3;
    b3.flags |= 2;
    return c3;
  }
  function g2(b3) {
    a2 && b3.alternate === null && (b3.flags |= 2);
    return b3;
  }
  function h2(a3, b3, c3, d3) {
    if (b3 === null || b3.tag !== 6)
      return b3 = uh(c3, a3.mode, d3), b3.return = a3, b3;
    b3 = e2(b3, c3);
    b3.return = a3;
    return b3;
  }
  function k2(a3, b3, c3, d3) {
    var f3 = c3.type;
    if (f3 === wa)
      return n2(a3, b3, c3.props.children, d3, c3.key);
    if (b3 !== null && (b3.elementType === f3 || typeof f3 === "object" && f3 !== null && f3.$$typeof === Ga && rh(f3) === b3.type))
      return d3 = e2(b3, c3.props), d3.ref = ph(a3, b3, c3), d3.return = a3, d3;
    d3 = vh(c3.type, c3.key, c3.props, null, a3.mode, d3);
    d3.ref = ph(a3, b3, c3);
    d3.return = a3;
    return d3;
  }
  function l2(a3, b3, c3, d3) {
    if (b3 === null || b3.tag !== 4 || b3.stateNode.containerInfo !== c3.containerInfo || b3.stateNode.implementation !== c3.implementation)
      return b3 = wh(c3, a3.mode, d3), b3.return = a3, b3;
    b3 = e2(b3, c3.children || []);
    b3.return = a3;
    return b3;
  }
  function n2(a3, b3, c3, d3, f3) {
    if (b3 === null || b3.tag !== 7)
      return b3 = xh(c3, a3.mode, d3, f3), b3.return = a3, b3;
    b3 = e2(b3, c3);
    b3.return = a3;
    return b3;
  }
  function u2(a3, b3, c3) {
    if (typeof b3 === "string" && b3 !== "" || typeof b3 === "number")
      return b3 = uh("" + b3, a3.mode, c3), b3.return = a3, b3;
    if (typeof b3 === "object" && b3 !== null) {
      switch (b3.$$typeof) {
        case ua:
          return c3 = vh(b3.type, b3.key, b3.props, null, a3.mode, c3), c3.ref = ph(a3, null, b3), c3.return = a3, c3;
        case va:
          return b3 = wh(b3, a3.mode, c3), b3.return = a3, b3;
        case Ga:
          var d3 = b3._init;
          return u2(a3, d3(b3._payload), c3);
      }
      if (db(b3) || Ja(b3))
        return b3 = xh(b3, a3.mode, c3, null), b3.return = a3, b3;
      qh(a3, b3);
    }
    return null;
  }
  function q2(a3, b3, c3, d3) {
    var e3 = b3 !== null ? b3.key : null;
    if (typeof c3 === "string" && c3 !== "" || typeof c3 === "number")
      return e3 !== null ? null : h2(a3, b3, "" + c3, d3);
    if (typeof c3 === "object" && c3 !== null) {
      switch (c3.$$typeof) {
        case ua:
          return c3.key === e3 ? k2(a3, b3, c3, d3) : null;
        case va:
          return c3.key === e3 ? l2(a3, b3, c3, d3) : null;
        case Ga:
          return e3 = c3._init, q2(a3, b3, e3(c3._payload), d3);
      }
      if (db(c3) || Ja(c3))
        return e3 !== null ? null : n2(a3, b3, c3, d3, null);
      qh(a3, c3);
    }
    return null;
  }
  function y2(a3, b3, c3, d3, e3) {
    if (typeof d3 === "string" && d3 !== "" || typeof d3 === "number")
      return a3 = a3.get(c3) || null, h2(b3, a3, "" + d3, e3);
    if (typeof d3 === "object" && d3 !== null) {
      switch (d3.$$typeof) {
        case ua:
          return a3 = a3.get(d3.key === null ? c3 : d3.key) || null, k2(b3, a3, d3, e3);
        case va:
          return a3 = a3.get(d3.key === null ? c3 : d3.key) || null, l2(b3, a3, d3, e3);
        case Ga:
          var f3 = d3._init;
          return y2(a3, b3, c3, f3(d3._payload), e3);
      }
      if (db(d3) || Ja(d3))
        return a3 = a3.get(c3) || null, n2(b3, a3, d3, e3, null);
      qh(b3, d3);
    }
    return null;
  }
  function m2(e3, g3, h3, k3) {
    for (var l3 = null, n3 = null, r2 = g3, m3 = g3 = 0, x2 = null; r2 !== null && m3 < h3.length; m3++) {
      r2.index > m3 ? (x2 = r2, r2 = null) : x2 = r2.sibling;
      var v2 = q2(e3, r2, h3[m3], k3);
      if (v2 === null) {
        r2 === null && (r2 = x2);
        break;
      }
      a2 && r2 && v2.alternate === null && b2(e3, r2);
      g3 = f2(v2, g3, m3);
      n3 === null ? l3 = v2 : n3.sibling = v2;
      n3 = v2;
      r2 = x2;
    }
    if (m3 === h3.length)
      return c2(e3, r2), I$1 && $g(e3, m3), l3;
    if (r2 === null) {
      for (; m3 < h3.length; m3++)
        r2 = u2(e3, h3[m3], k3), r2 !== null && (g3 = f2(r2, g3, m3), n3 === null ? l3 = r2 : n3.sibling = r2, n3 = r2);
      I$1 && $g(e3, m3);
      return l3;
    }
    for (r2 = d2(e3, r2); m3 < h3.length; m3++)
      x2 = y2(r2, e3, m3, h3[m3], k3), x2 !== null && (a2 && x2.alternate !== null && r2.delete(x2.key === null ? m3 : x2.key), g3 = f2(x2, g3, m3), n3 === null ? l3 = x2 : n3.sibling = x2, n3 = x2);
    a2 && r2.forEach(function(a3) {
      return b2(e3, a3);
    });
    I$1 && $g(e3, m3);
    return l3;
  }
  function w2(e3, g3, h3, k3) {
    var l3 = Ja(h3);
    if (typeof l3 !== "function")
      throw Error(p$6(150));
    h3 = l3.call(h3);
    if (h3 == null)
      throw Error(p$6(151));
    for (var n3 = l3 = null, m3 = g3, r2 = g3 = 0, x2 = null, v2 = h3.next(); m3 !== null && !v2.done; r2++, v2 = h3.next()) {
      m3.index > r2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
      var w3 = q2(e3, m3, v2.value, k3);
      if (w3 === null) {
        m3 === null && (m3 = x2);
        break;
      }
      a2 && m3 && w3.alternate === null && b2(e3, m3);
      g3 = f2(w3, g3, r2);
      n3 === null ? l3 = w3 : n3.sibling = w3;
      n3 = w3;
      m3 = x2;
    }
    if (v2.done)
      return c2(e3, m3), I$1 && $g(e3, r2), l3;
    if (m3 === null) {
      for (; !v2.done; r2++, v2 = h3.next())
        v2 = u2(e3, v2.value, k3), v2 !== null && (g3 = f2(v2, g3, r2), n3 === null ? l3 = v2 : n3.sibling = v2, n3 = v2);
      I$1 && $g(e3, r2);
      return l3;
    }
    for (m3 = d2(e3, m3); !v2.done; r2++, v2 = h3.next())
      v2 = y2(m3, e3, r2, v2.value, k3), v2 !== null && (a2 && v2.alternate !== null && m3.delete(v2.key === null ? r2 : v2.key), g3 = f2(v2, g3, r2), n3 === null ? l3 = v2 : n3.sibling = v2, n3 = v2);
    a2 && m3.forEach(function(a3) {
      return b2(e3, a3);
    });
    I$1 && $g(e3, r2);
    return l3;
  }
  function J2(a3, d3, f3, h3) {
    typeof f3 === "object" && f3 !== null && f3.type === wa && f3.key === null && (f3 = f3.props.children);
    if (typeof f3 === "object" && f3 !== null) {
      switch (f3.$$typeof) {
        case ua:
          a: {
            for (var k3 = f3.key, l3 = d3; l3 !== null; ) {
              if (l3.key === k3) {
                k3 = f3.type;
                if (k3 === wa) {
                  if (l3.tag === 7) {
                    c2(a3, l3.sibling);
                    d3 = e2(l3, f3.props.children);
                    d3.return = a3;
                    a3 = d3;
                    break a;
                  }
                } else if (l3.elementType === k3 || typeof k3 === "object" && k3 !== null && k3.$$typeof === Ga && rh(k3) === l3.type) {
                  c2(a3, l3.sibling);
                  d3 = e2(l3, f3.props);
                  d3.ref = ph(a3, l3, f3);
                  d3.return = a3;
                  a3 = d3;
                  break a;
                }
                c2(a3, l3);
                break;
              } else
                b2(a3, l3);
              l3 = l3.sibling;
            }
            f3.type === wa ? (d3 = xh(f3.props.children, a3.mode, h3, f3.key), d3.return = a3, a3 = d3) : (h3 = vh(f3.type, f3.key, f3.props, null, a3.mode, h3), h3.ref = ph(a3, d3, f3), h3.return = a3, a3 = h3);
          }
          return g2(a3);
        case va:
          a: {
            for (l3 = f3.key; d3 !== null; ) {
              if (d3.key === l3)
                if (d3.tag === 4 && d3.stateNode.containerInfo === f3.containerInfo && d3.stateNode.implementation === f3.implementation) {
                  c2(a3, d3.sibling);
                  d3 = e2(d3, f3.children || []);
                  d3.return = a3;
                  a3 = d3;
                  break a;
                } else {
                  c2(a3, d3);
                  break;
                }
              else
                b2(a3, d3);
              d3 = d3.sibling;
            }
            d3 = wh(f3, a3.mode, h3);
            d3.return = a3;
            a3 = d3;
          }
          return g2(a3);
        case Ga:
          return l3 = f3._init, J2(a3, d3, l3(f3._payload), h3);
      }
      if (db(f3))
        return m2(a3, d3, f3, h3);
      if (Ja(f3))
        return w2(a3, d3, f3, h3);
      qh(a3, f3);
    }
    return typeof f3 === "string" && f3 !== "" || typeof f3 === "number" ? (f3 = "" + f3, d3 !== null && d3.tag === 6 ? (c2(a3, d3.sibling), d3 = e2(d3, f3), d3.return = a3, a3 = d3) : (c2(a3, d3), d3 = uh(f3, a3.mode, h3), d3.return = a3, a3 = d3), g2(a3)) : c2(a3, d3);
  }
  return J2;
}
var yh = sh(true), zh = sh(false), Ah = {}, Bh = Tf(Ah), Ch = Tf(Ah), Dh = Tf(Ah);
function Eh(a2) {
  if (a2 === Ah)
    throw Error(p$6(174));
  return a2;
}
function Fh(a2, b2) {
  G$1(Dh, b2);
  G$1(Ch, a2);
  G$1(Bh, Ah);
  a2 = b2.nodeType;
  switch (a2) {
    case 9:
    case 11:
      b2 = (b2 = b2.documentElement) ? b2.namespaceURI : kb(null, "");
      break;
    default:
      a2 = a2 === 8 ? b2.parentNode : b2, b2 = a2.namespaceURI || null, a2 = a2.tagName, b2 = kb(b2, a2);
  }
  E$1(Bh);
  G$1(Bh, b2);
}
function Gh() {
  E$1(Bh);
  E$1(Ch);
  E$1(Dh);
}
function Hh(a2) {
  Eh(Dh.current);
  var b2 = Eh(Bh.current);
  var c2 = kb(b2, a2.type);
  b2 !== c2 && (G$1(Ch, a2), G$1(Bh, c2));
}
function Ih(a2) {
  Ch.current === a2 && (E$1(Bh), E$1(Ch));
}
var K = Tf(0);
function Jh(a2) {
  for (var b2 = a2; b2 !== null; ) {
    if (b2.tag === 13) {
      var c2 = b2.memoizedState;
      if (c2 !== null && (c2 = c2.dehydrated, c2 === null || c2.data === "$?" || c2.data === "$!"))
        return b2;
    } else if (b2.tag === 19 && b2.memoizedProps.revealOrder !== void 0) {
      if ((b2.flags & 128) !== 0)
        return b2;
    } else if (b2.child !== null) {
      b2.child.return = b2;
      b2 = b2.child;
      continue;
    }
    if (b2 === a2)
      break;
    for (; b2.sibling === null; ) {
      if (b2.return === null || b2.return === a2)
        return null;
      b2 = b2.return;
    }
    b2.sibling.return = b2.return;
    b2 = b2.sibling;
  }
  return null;
}
var Kh = [];
function Lh() {
  for (var a2 = 0; a2 < Kh.length; a2++)
    Kh[a2]._workInProgressVersionPrimary = null;
  Kh.length = 0;
}
var Mh = ta.ReactCurrentDispatcher, Nh = ta.ReactCurrentBatchConfig, Oh = 0, L$1 = null, M$1 = null, N$1 = null, Ph = false, Qh = false, Rh = 0, Sh = 0;
function O$1() {
  throw Error(p$6(321));
}
function Th(a2, b2) {
  if (b2 === null)
    return false;
  for (var c2 = 0; c2 < b2.length && c2 < a2.length; c2++)
    if (!Ge(a2[c2], b2[c2]))
      return false;
  return true;
}
function Uh(a2, b2, c2, d2, e2, f2) {
  Oh = f2;
  L$1 = b2;
  b2.memoizedState = null;
  b2.updateQueue = null;
  b2.lanes = 0;
  Mh.current = a2 === null || a2.memoizedState === null ? Vh : Wh;
  a2 = c2(d2, e2);
  if (Qh) {
    f2 = 0;
    do {
      Qh = false;
      Rh = 0;
      if (25 <= f2)
        throw Error(p$6(301));
      f2 += 1;
      N$1 = M$1 = null;
      b2.updateQueue = null;
      Mh.current = Xh;
      a2 = c2(d2, e2);
    } while (Qh);
  }
  Mh.current = Yh;
  b2 = M$1 !== null && M$1.next !== null;
  Oh = 0;
  N$1 = M$1 = L$1 = null;
  Ph = false;
  if (b2)
    throw Error(p$6(300));
  return a2;
}
function Zh() {
  var a2 = Rh !== 0;
  Rh = 0;
  return a2;
}
function $h() {
  var a2 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  N$1 === null ? L$1.memoizedState = N$1 = a2 : N$1 = N$1.next = a2;
  return N$1;
}
function ai() {
  if (M$1 === null) {
    var a2 = L$1.alternate;
    a2 = a2 !== null ? a2.memoizedState : null;
  } else
    a2 = M$1.next;
  var b2 = N$1 === null ? L$1.memoizedState : N$1.next;
  if (b2 !== null)
    N$1 = b2, M$1 = a2;
  else {
    if (a2 === null)
      throw Error(p$6(310));
    M$1 = a2;
    a2 = { memoizedState: M$1.memoizedState, baseState: M$1.baseState, baseQueue: M$1.baseQueue, queue: M$1.queue, next: null };
    N$1 === null ? L$1.memoizedState = N$1 = a2 : N$1 = N$1.next = a2;
  }
  return N$1;
}
function bi(a2, b2) {
  return typeof b2 === "function" ? b2(a2) : b2;
}
function ci(a2) {
  var b2 = ai(), c2 = b2.queue;
  if (c2 === null)
    throw Error(p$6(311));
  c2.lastRenderedReducer = a2;
  var d2 = M$1, e2 = d2.baseQueue, f2 = c2.pending;
  if (f2 !== null) {
    if (e2 !== null) {
      var g2 = e2.next;
      e2.next = f2.next;
      f2.next = g2;
    }
    d2.baseQueue = e2 = f2;
    c2.pending = null;
  }
  if (e2 !== null) {
    f2 = e2.next;
    d2 = d2.baseState;
    var h2 = g2 = null, k2 = null, l2 = f2;
    do {
      var n2 = l2.lane;
      if ((Oh & n2) === n2)
        k2 !== null && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d2 = l2.hasEagerState ? l2.eagerState : a2(d2, l2.action);
      else {
        var u2 = {
          lane: n2,
          action: l2.action,
          hasEagerState: l2.hasEagerState,
          eagerState: l2.eagerState,
          next: null
        };
        k2 === null ? (h2 = k2 = u2, g2 = d2) : k2 = k2.next = u2;
        L$1.lanes |= n2;
        Fg |= n2;
      }
      l2 = l2.next;
    } while (l2 !== null && l2 !== f2);
    k2 === null ? g2 = d2 : k2.next = h2;
    Ge(d2, b2.memoizedState) || (tg = true);
    b2.memoizedState = d2;
    b2.baseState = g2;
    b2.baseQueue = k2;
    c2.lastRenderedState = d2;
  }
  a2 = c2.interleaved;
  if (a2 !== null) {
    e2 = a2;
    do
      f2 = e2.lane, L$1.lanes |= f2, Fg |= f2, e2 = e2.next;
    while (e2 !== a2);
  } else
    e2 === null && (c2.lanes = 0);
  return [b2.memoizedState, c2.dispatch];
}
function di(a2) {
  var b2 = ai(), c2 = b2.queue;
  if (c2 === null)
    throw Error(p$6(311));
  c2.lastRenderedReducer = a2;
  var d2 = c2.dispatch, e2 = c2.pending, f2 = b2.memoizedState;
  if (e2 !== null) {
    c2.pending = null;
    var g2 = e2 = e2.next;
    do
      f2 = a2(f2, g2.action), g2 = g2.next;
    while (g2 !== e2);
    Ge(f2, b2.memoizedState) || (tg = true);
    b2.memoizedState = f2;
    b2.baseQueue === null && (b2.baseState = f2);
    c2.lastRenderedState = f2;
  }
  return [f2, d2];
}
function ei() {
}
function fi(a2, b2) {
  var c2 = L$1, d2 = ai(), e2 = b2(), f2 = !Ge(d2.memoizedState, e2);
  f2 && (d2.memoizedState = e2, tg = true);
  d2 = d2.queue;
  gi(hi.bind(null, c2, d2, a2), [a2]);
  if (d2.getSnapshot !== b2 || f2 || N$1 !== null && N$1.memoizedState.tag & 1) {
    c2.flags |= 2048;
    ii(9, ji.bind(null, c2, d2, e2, b2), void 0, null);
    if (P$1 === null)
      throw Error(p$6(349));
    (Oh & 30) !== 0 || ki(c2, b2, e2);
  }
  return e2;
}
function ki(a2, b2, c2) {
  a2.flags |= 16384;
  a2 = { getSnapshot: b2, value: c2 };
  b2 = L$1.updateQueue;
  b2 === null ? (b2 = { lastEffect: null, stores: null }, L$1.updateQueue = b2, b2.stores = [a2]) : (c2 = b2.stores, c2 === null ? b2.stores = [a2] : c2.push(a2));
}
function ji(a2, b2, c2, d2) {
  b2.value = c2;
  b2.getSnapshot = d2;
  li(b2) && Lg(a2, 1, -1);
}
function hi(a2, b2, c2) {
  return c2(function() {
    li(b2) && Lg(a2, 1, -1);
  });
}
function li(a2) {
  var b2 = a2.getSnapshot;
  a2 = a2.value;
  try {
    var c2 = b2();
    return !Ge(a2, c2);
  } catch (d2) {
    return true;
  }
}
function mi(a2) {
  var b2 = $h();
  typeof a2 === "function" && (a2 = a2());
  b2.memoizedState = b2.baseState = a2;
  a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: bi, lastRenderedState: a2 };
  b2.queue = a2;
  a2 = a2.dispatch = ni.bind(null, L$1, a2);
  return [b2.memoizedState, a2];
}
function ii(a2, b2, c2, d2) {
  a2 = { tag: a2, create: b2, destroy: c2, deps: d2, next: null };
  b2 = L$1.updateQueue;
  b2 === null ? (b2 = { lastEffect: null, stores: null }, L$1.updateQueue = b2, b2.lastEffect = a2.next = a2) : (c2 = b2.lastEffect, c2 === null ? b2.lastEffect = a2.next = a2 : (d2 = c2.next, c2.next = a2, a2.next = d2, b2.lastEffect = a2));
  return a2;
}
function oi() {
  return ai().memoizedState;
}
function pi(a2, b2, c2, d2) {
  var e2 = $h();
  L$1.flags |= a2;
  e2.memoizedState = ii(1 | b2, c2, void 0, d2 === void 0 ? null : d2);
}
function qi(a2, b2, c2, d2) {
  var e2 = ai();
  d2 = d2 === void 0 ? null : d2;
  var f2 = void 0;
  if (M$1 !== null) {
    var g2 = M$1.memoizedState;
    f2 = g2.destroy;
    if (d2 !== null && Th(d2, g2.deps)) {
      e2.memoizedState = ii(b2, c2, f2, d2);
      return;
    }
  }
  L$1.flags |= a2;
  e2.memoizedState = ii(1 | b2, c2, f2, d2);
}
function ri(a2, b2) {
  return pi(8390656, 8, a2, b2);
}
function gi(a2, b2) {
  return qi(2048, 8, a2, b2);
}
function si(a2, b2) {
  return qi(4, 2, a2, b2);
}
function ti(a2, b2) {
  return qi(4, 4, a2, b2);
}
function ui(a2, b2) {
  if (typeof b2 === "function")
    return a2 = a2(), b2(a2), function() {
      b2(null);
    };
  if (b2 !== null && b2 !== void 0)
    return a2 = a2(), b2.current = a2, function() {
      b2.current = null;
    };
}
function vi(a2, b2, c2) {
  c2 = c2 !== null && c2 !== void 0 ? c2.concat([a2]) : null;
  return qi(4, 4, ui.bind(null, b2, a2), c2);
}
function wi() {
}
function xi(a2, b2) {
  var c2 = ai();
  b2 = b2 === void 0 ? null : b2;
  var d2 = c2.memoizedState;
  if (d2 !== null && b2 !== null && Th(b2, d2[1]))
    return d2[0];
  c2.memoizedState = [a2, b2];
  return a2;
}
function yi(a2, b2) {
  var c2 = ai();
  b2 = b2 === void 0 ? null : b2;
  var d2 = c2.memoizedState;
  if (d2 !== null && b2 !== null && Th(b2, d2[1]))
    return d2[0];
  a2 = a2();
  c2.memoizedState = [a2, b2];
  return a2;
}
function zi(a2, b2, c2) {
  if ((Oh & 21) === 0)
    return a2.baseState && (a2.baseState = false, tg = true), a2.memoizedState = c2;
  Ge(c2, b2) || (c2 = xc(), L$1.lanes |= c2, Fg |= c2, a2.baseState = true);
  return b2;
}
function Ai(a2, b2) {
  var c2 = C;
  C = c2 !== 0 && 4 > c2 ? c2 : 4;
  a2(true);
  var d2 = Nh.transition;
  Nh.transition = {};
  try {
    a2(false), b2();
  } finally {
    C = c2, Nh.transition = d2;
  }
}
function Bi() {
  return ai().memoizedState;
}
function Ci(a2, b2, c2) {
  var d2 = Kg(a2);
  c2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
  Di(a2) ? Ei(b2, c2) : (Fi(a2, b2, c2), c2 = Jg(), a2 = Lg(a2, d2, c2), a2 !== null && Gi(a2, b2, d2));
}
function ni(a2, b2, c2) {
  var d2 = Kg(a2), e2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
  if (Di(a2))
    Ei(b2, e2);
  else {
    Fi(a2, b2, e2);
    var f2 = a2.alternate;
    if (a2.lanes === 0 && (f2 === null || f2.lanes === 0) && (f2 = b2.lastRenderedReducer, f2 !== null))
      try {
        var g2 = b2.lastRenderedState, h2 = f2(g2, c2);
        e2.hasEagerState = true;
        e2.eagerState = h2;
        if (Ge(h2, g2))
          return;
      } catch (k2) {
      } finally {
      }
    c2 = Jg();
    a2 = Lg(a2, d2, c2);
    a2 !== null && Gi(a2, b2, d2);
  }
}
function Di(a2) {
  var b2 = a2.alternate;
  return a2 === L$1 || b2 !== null && b2 === L$1;
}
function Ei(a2, b2) {
  Qh = Ph = true;
  var c2 = a2.pending;
  c2 === null ? b2.next = b2 : (b2.next = c2.next, c2.next = b2);
  a2.pending = b2;
}
function Fi(a2, b2, c2) {
  Bg(a2) ? (a2 = b2.interleaved, a2 === null ? (c2.next = c2, vg === null ? vg = [b2] : vg.push(b2)) : (c2.next = a2.next, a2.next = c2), b2.interleaved = c2) : (a2 = b2.pending, a2 === null ? c2.next = c2 : (c2.next = a2.next, a2.next = c2), b2.pending = c2);
}
function Gi(a2, b2, c2) {
  if ((c2 & 4194240) !== 0) {
    var d2 = b2.lanes;
    d2 &= a2.pendingLanes;
    c2 |= d2;
    b2.lanes = c2;
    Bc(a2, c2);
  }
}
var Yh = { readContext: ug, useCallback: O$1, useContext: O$1, useEffect: O$1, useImperativeHandle: O$1, useInsertionEffect: O$1, useLayoutEffect: O$1, useMemo: O$1, useReducer: O$1, useRef: O$1, useState: O$1, useDebugValue: O$1, useDeferredValue: O$1, useTransition: O$1, useMutableSource: O$1, useSyncExternalStore: O$1, useId: O$1, unstable_isNewReconciler: false }, Vh = { readContext: ug, useCallback: function(a2, b2) {
  $h().memoizedState = [a2, b2 === void 0 ? null : b2];
  return a2;
}, useContext: ug, useEffect: ri, useImperativeHandle: function(a2, b2, c2) {
  c2 = c2 !== null && c2 !== void 0 ? c2.concat([a2]) : null;
  return pi(4194308, 4, ui.bind(null, b2, a2), c2);
}, useLayoutEffect: function(a2, b2) {
  return pi(4194308, 4, a2, b2);
}, useInsertionEffect: function(a2, b2) {
  return pi(4, 2, a2, b2);
}, useMemo: function(a2, b2) {
  var c2 = $h();
  b2 = b2 === void 0 ? null : b2;
  a2 = a2();
  c2.memoizedState = [a2, b2];
  return a2;
}, useReducer: function(a2, b2, c2) {
  var d2 = $h();
  b2 = c2 !== void 0 ? c2(b2) : b2;
  d2.memoizedState = d2.baseState = b2;
  a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a2, lastRenderedState: b2 };
  d2.queue = a2;
  a2 = a2.dispatch = Ci.bind(null, L$1, a2);
  return [d2.memoizedState, a2];
}, useRef: function(a2) {
  var b2 = $h();
  a2 = { current: a2 };
  return b2.memoizedState = a2;
}, useState: mi, useDebugValue: wi, useDeferredValue: function(a2) {
  return $h().memoizedState = a2;
}, useTransition: function() {
  var a2 = mi(false), b2 = a2[0];
  a2 = Ai.bind(null, a2[1]);
  $h().memoizedState = a2;
  return [b2, a2];
}, useMutableSource: function() {
}, useSyncExternalStore: function(a2, b2, c2) {
  var d2 = L$1, e2 = $h();
  if (I$1) {
    if (c2 === void 0)
      throw Error(p$6(407));
    c2 = c2();
  } else {
    c2 = b2();
    if (P$1 === null)
      throw Error(p$6(349));
    (Oh & 30) !== 0 || ki(d2, b2, c2);
  }
  e2.memoizedState = c2;
  var f2 = { value: c2, getSnapshot: b2 };
  e2.queue = f2;
  ri(hi.bind(null, d2, f2, a2), [a2]);
  d2.flags |= 2048;
  ii(9, ji.bind(null, d2, f2, c2, b2), void 0, null);
  return c2;
}, useId: function() {
  var a2 = $h(), b2 = P$1.identifierPrefix;
  if (I$1) {
    var c2 = Zg;
    var d2 = Yg;
    c2 = (d2 & ~(1 << 32 - nc(d2) - 1)).toString(32) + c2;
    b2 = ":" + b2 + "R" + c2;
    c2 = Rh++;
    0 < c2 && (b2 += "H" + c2.toString(32));
    b2 += ":";
  } else
    c2 = Sh++, b2 = ":" + b2 + "r" + c2.toString(32) + ":";
  return a2.memoizedState = b2;
}, unstable_isNewReconciler: false }, Wh = {
  readContext: ug,
  useCallback: xi,
  useContext: ug,
  useEffect: gi,
  useImperativeHandle: vi,
  useInsertionEffect: si,
  useLayoutEffect: ti,
  useMemo: yi,
  useReducer: ci,
  useRef: oi,
  useState: function() {
    return ci(bi);
  },
  useDebugValue: wi,
  useDeferredValue: function(a2) {
    var b2 = ai();
    return zi(b2, M$1.memoizedState, a2);
  },
  useTransition: function() {
    var a2 = ci(bi)[0], b2 = ai().memoizedState;
    return [a2, b2];
  },
  useMutableSource: ei,
  useSyncExternalStore: fi,
  useId: Bi,
  unstable_isNewReconciler: false
}, Xh = { readContext: ug, useCallback: xi, useContext: ug, useEffect: gi, useImperativeHandle: vi, useInsertionEffect: si, useLayoutEffect: ti, useMemo: yi, useReducer: di, useRef: oi, useState: function() {
  return di(bi);
}, useDebugValue: wi, useDeferredValue: function(a2) {
  var b2 = ai();
  return M$1 === null ? b2.memoizedState = a2 : zi(b2, M$1.memoizedState, a2);
}, useTransition: function() {
  var a2 = di(bi)[0], b2 = ai().memoizedState;
  return [a2, b2];
}, useMutableSource: ei, useSyncExternalStore: fi, useId: Bi, unstable_isNewReconciler: false };
function Hi(a2, b2) {
  try {
    var c2 = "", d2 = b2;
    do
      c2 += Oa(d2), d2 = d2.return;
    while (d2);
    var e2 = c2;
  } catch (f2) {
    e2 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a2, source: b2, stack: e2 };
}
function Ii(a2, b2) {
  try {
    console.error(b2.value);
  } catch (c2) {
    setTimeout(function() {
      throw c2;
    });
  }
}
var Ji = typeof WeakMap === "function" ? WeakMap : Map;
function Ki(a2, b2, c2) {
  c2 = zg(-1, c2);
  c2.tag = 3;
  c2.payload = { element: null };
  var d2 = b2.value;
  c2.callback = function() {
    Li || (Li = true, Mi = d2);
    Ii(a2, b2);
  };
  return c2;
}
function Ni(a2, b2, c2) {
  c2 = zg(-1, c2);
  c2.tag = 3;
  var d2 = a2.type.getDerivedStateFromError;
  if (typeof d2 === "function") {
    var e2 = b2.value;
    c2.payload = function() {
      return d2(e2);
    };
    c2.callback = function() {
      Ii(a2, b2);
    };
  }
  var f2 = a2.stateNode;
  f2 !== null && typeof f2.componentDidCatch === "function" && (c2.callback = function() {
    Ii(a2, b2);
    typeof d2 !== "function" && (Oi === null ? Oi = /* @__PURE__ */ new Set([this]) : Oi.add(this));
    var c3 = b2.stack;
    this.componentDidCatch(b2.value, { componentStack: c3 !== null ? c3 : "" });
  });
  return c2;
}
function Pi(a2, b2, c2) {
  var d2 = a2.pingCache;
  if (d2 === null) {
    d2 = a2.pingCache = new Ji();
    var e2 = /* @__PURE__ */ new Set();
    d2.set(b2, e2);
  } else
    e2 = d2.get(b2), e2 === void 0 && (e2 = /* @__PURE__ */ new Set(), d2.set(b2, e2));
  e2.has(c2) || (e2.add(c2), a2 = Qi.bind(null, a2, b2, c2), b2.then(a2, a2));
}
function Ri(a2) {
  do {
    var b2;
    if (b2 = a2.tag === 13)
      b2 = a2.memoizedState, b2 = b2 !== null ? b2.dehydrated !== null ? true : false : true;
    if (b2)
      return a2;
    a2 = a2.return;
  } while (a2 !== null);
  return null;
}
function Si(a2, b2, c2, d2, e2) {
  if ((a2.mode & 1) === 0)
    return a2 === b2 ? a2.flags |= 65536 : (a2.flags |= 128, c2.flags |= 131072, c2.flags &= -52805, c2.tag === 1 && (c2.alternate === null ? c2.tag = 17 : (b2 = zg(-1, 1), b2.tag = 2, Ag(c2, b2))), c2.lanes |= 1), a2;
  a2.flags |= 65536;
  a2.lanes = e2;
  return a2;
}
var Ti, Ui, Vi, Wi;
Ti = function(a2, b2) {
  for (var c2 = b2.child; c2 !== null; ) {
    if (c2.tag === 5 || c2.tag === 6)
      a2.appendChild(c2.stateNode);
    else if (c2.tag !== 4 && c2.child !== null) {
      c2.child.return = c2;
      c2 = c2.child;
      continue;
    }
    if (c2 === b2)
      break;
    for (; c2.sibling === null; ) {
      if (c2.return === null || c2.return === b2)
        return;
      c2 = c2.return;
    }
    c2.sibling.return = c2.return;
    c2 = c2.sibling;
  }
};
Ui = function() {
};
Vi = function(a2, b2, c2, d2) {
  var e2 = a2.memoizedProps;
  if (e2 !== d2) {
    a2 = b2.stateNode;
    Eh(Bh.current);
    var f2 = null;
    switch (c2) {
      case "input":
        e2 = Xa(a2, e2);
        d2 = Xa(a2, d2);
        f2 = [];
        break;
      case "select":
        e2 = A$2({}, e2, { value: void 0 });
        d2 = A$2({}, d2, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e2 = fb(a2, e2);
        d2 = fb(a2, d2);
        f2 = [];
        break;
      default:
        typeof e2.onClick !== "function" && typeof d2.onClick === "function" && (a2.onclick = Af);
    }
    tb(c2, d2);
    var g2;
    c2 = null;
    for (l2 in e2)
      if (!d2.hasOwnProperty(l2) && e2.hasOwnProperty(l2) && e2[l2] != null)
        if (l2 === "style") {
          var h2 = e2[l2];
          for (g2 in h2)
            h2.hasOwnProperty(g2) && (c2 || (c2 = {}), c2[g2] = "");
        } else
          l2 !== "dangerouslySetInnerHTML" && l2 !== "children" && l2 !== "suppressContentEditableWarning" && l2 !== "suppressHydrationWarning" && l2 !== "autoFocus" && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d2) {
      var k2 = d2[l2];
      h2 = e2 != null ? e2[l2] : void 0;
      if (d2.hasOwnProperty(l2) && k2 !== h2 && (k2 != null || h2 != null))
        if (l2 === "style")
          if (h2) {
            for (g2 in h2)
              !h2.hasOwnProperty(g2) || k2 && k2.hasOwnProperty(g2) || (c2 || (c2 = {}), c2[g2] = "");
            for (g2 in k2)
              k2.hasOwnProperty(g2) && h2[g2] !== k2[g2] && (c2 || (c2 = {}), c2[g2] = k2[g2]);
          } else
            c2 || (f2 || (f2 = []), f2.push(l2, c2)), c2 = k2;
        else
          l2 === "dangerouslySetInnerHTML" ? (k2 = k2 ? k2.__html : void 0, h2 = h2 ? h2.__html : void 0, k2 != null && h2 !== k2 && (f2 = f2 || []).push(l2, k2)) : l2 === "children" ? typeof k2 !== "string" && typeof k2 !== "number" || (f2 = f2 || []).push(l2, "" + k2) : l2 !== "suppressContentEditableWarning" && l2 !== "suppressHydrationWarning" && (ea.hasOwnProperty(l2) ? (k2 != null && l2 === "onScroll" && D$1("scroll", a2), f2 || h2 === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
    }
    c2 && (f2 = f2 || []).push("style", c2);
    var l2 = f2;
    if (b2.updateQueue = l2)
      b2.flags |= 4;
  }
};
Wi = function(a2, b2, c2, d2) {
  c2 !== d2 && (b2.flags |= 4);
};
function Xi(a2, b2) {
  if (!I$1)
    switch (a2.tailMode) {
      case "hidden":
        b2 = a2.tail;
        for (var c2 = null; b2 !== null; )
          b2.alternate !== null && (c2 = b2), b2 = b2.sibling;
        c2 === null ? a2.tail = null : c2.sibling = null;
        break;
      case "collapsed":
        c2 = a2.tail;
        for (var d2 = null; c2 !== null; )
          c2.alternate !== null && (d2 = c2), c2 = c2.sibling;
        d2 === null ? b2 || a2.tail === null ? a2.tail = null : a2.tail.sibling = null : d2.sibling = null;
    }
}
function Q$1(a2) {
  var b2 = a2.alternate !== null && a2.alternate.child === a2.child, c2 = 0, d2 = 0;
  if (b2)
    for (var e2 = a2.child; e2 !== null; )
      c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags & 14680064, d2 |= e2.flags & 14680064, e2.return = a2, e2 = e2.sibling;
  else
    for (e2 = a2.child; e2 !== null; )
      c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags, d2 |= e2.flags, e2.return = a2, e2 = e2.sibling;
  a2.subtreeFlags |= d2;
  a2.childLanes = c2;
  return b2;
}
function Yi(a2, b2, c2) {
  var d2 = b2.pendingProps;
  ch(b2);
  switch (b2.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Q$1(b2), null;
    case 1:
      return Yf(b2.type) && Zf(), Q$1(b2), null;
    case 3:
      d2 = b2.stateNode;
      Gh();
      E$1(Vf);
      E$1(H$1);
      Lh();
      d2.pendingContext && (d2.context = d2.pendingContext, d2.pendingContext = null);
      if (a2 === null || a2.child === null)
        mh(b2) ? b2.flags |= 4 : a2 === null || a2.memoizedState.isDehydrated && (b2.flags & 256) === 0 || (b2.flags |= 1024, fh !== null && (Zi(fh), fh = null));
      Ui(a2, b2);
      Q$1(b2);
      return null;
    case 5:
      Ih(b2);
      var e2 = Eh(Dh.current);
      c2 = b2.type;
      if (a2 !== null && b2.stateNode != null)
        Vi(a2, b2, c2, d2, e2), a2.ref !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
      else {
        if (!d2) {
          if (b2.stateNode === null)
            throw Error(p$6(166));
          Q$1(b2);
          return null;
        }
        a2 = Eh(Bh.current);
        if (mh(b2)) {
          d2 = b2.stateNode;
          c2 = b2.type;
          var f2 = b2.memoizedProps;
          d2[Nf] = b2;
          d2[Of] = f2;
          a2 = (b2.mode & 1) !== 0;
          switch (c2) {
            case "dialog":
              D$1("cancel", d2);
              D$1("close", d2);
              break;
            case "iframe":
            case "object":
            case "embed":
              D$1("load", d2);
              break;
            case "video":
            case "audio":
              for (e2 = 0; e2 < kf.length; e2++)
                D$1(kf[e2], d2);
              break;
            case "source":
              D$1("error", d2);
              break;
            case "img":
            case "image":
            case "link":
              D$1("error", d2);
              D$1("load", d2);
              break;
            case "details":
              D$1("toggle", d2);
              break;
            case "input":
              Ya(d2, f2);
              D$1("invalid", d2);
              break;
            case "select":
              d2._wrapperState = { wasMultiple: !!f2.multiple };
              D$1("invalid", d2);
              break;
            case "textarea":
              gb(d2, f2), D$1("invalid", d2);
          }
          tb(c2, f2);
          e2 = null;
          for (var g2 in f2)
            if (f2.hasOwnProperty(g2)) {
              var h2 = f2[g2];
              g2 === "children" ? typeof h2 === "string" ? d2.textContent !== h2 && (f2.suppressHydrationWarning !== true && zf(d2.textContent, h2, a2), e2 = ["children", h2]) : typeof h2 === "number" && d2.textContent !== "" + h2 && (f2.suppressHydrationWarning !== true && zf(d2.textContent, h2, a2), e2 = ["children", "" + h2]) : ea.hasOwnProperty(g2) && h2 != null && g2 === "onScroll" && D$1("scroll", d2);
            }
          switch (c2) {
            case "input":
              Ua(d2);
              cb(d2, f2, true);
              break;
            case "textarea":
              Ua(d2);
              ib(d2);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof f2.onClick === "function" && (d2.onclick = Af);
          }
          d2 = e2;
          b2.updateQueue = d2;
          d2 !== null && (b2.flags |= 4);
        } else {
          g2 = e2.nodeType === 9 ? e2 : e2.ownerDocument;
          a2 === "http://www.w3.org/1999/xhtml" && (a2 = jb(c2));
          a2 === "http://www.w3.org/1999/xhtml" ? c2 === "script" ? (a2 = g2.createElement("div"), a2.innerHTML = "<script><\/script>", a2 = a2.removeChild(a2.firstChild)) : typeof d2.is === "string" ? a2 = g2.createElement(c2, { is: d2.is }) : (a2 = g2.createElement(c2), c2 === "select" && (g2 = a2, d2.multiple ? g2.multiple = true : d2.size && (g2.size = d2.size))) : a2 = g2.createElementNS(a2, c2);
          a2[Nf] = b2;
          a2[Of] = d2;
          Ti(a2, b2, false, false);
          b2.stateNode = a2;
          a: {
            g2 = ub(c2, d2);
            switch (c2) {
              case "dialog":
                D$1("cancel", a2);
                D$1("close", a2);
                e2 = d2;
                break;
              case "iframe":
              case "object":
              case "embed":
                D$1("load", a2);
                e2 = d2;
                break;
              case "video":
              case "audio":
                for (e2 = 0; e2 < kf.length; e2++)
                  D$1(kf[e2], a2);
                e2 = d2;
                break;
              case "source":
                D$1("error", a2);
                e2 = d2;
                break;
              case "img":
              case "image":
              case "link":
                D$1("error", a2);
                D$1("load", a2);
                e2 = d2;
                break;
              case "details":
                D$1("toggle", a2);
                e2 = d2;
                break;
              case "input":
                Ya(a2, d2);
                e2 = Xa(a2, d2);
                D$1("invalid", a2);
                break;
              case "option":
                e2 = d2;
                break;
              case "select":
                a2._wrapperState = { wasMultiple: !!d2.multiple };
                e2 = A$2({}, d2, { value: void 0 });
                D$1("invalid", a2);
                break;
              case "textarea":
                gb(a2, d2);
                e2 = fb(a2, d2);
                D$1("invalid", a2);
                break;
              default:
                e2 = d2;
            }
            tb(c2, e2);
            h2 = e2;
            for (f2 in h2)
              if (h2.hasOwnProperty(f2)) {
                var k2 = h2[f2];
                f2 === "style" ? rb(a2, k2) : f2 === "dangerouslySetInnerHTML" ? (k2 = k2 ? k2.__html : void 0, k2 != null && mb(a2, k2)) : f2 === "children" ? typeof k2 === "string" ? (c2 !== "textarea" || k2 !== "") && nb(a2, k2) : typeof k2 === "number" && nb(a2, "" + k2) : f2 !== "suppressContentEditableWarning" && f2 !== "suppressHydrationWarning" && f2 !== "autoFocus" && (ea.hasOwnProperty(f2) ? k2 != null && f2 === "onScroll" && D$1("scroll", a2) : k2 != null && sa(a2, f2, k2, g2));
              }
            switch (c2) {
              case "input":
                Ua(a2);
                cb(a2, d2, false);
                break;
              case "textarea":
                Ua(a2);
                ib(a2);
                break;
              case "option":
                d2.value != null && a2.setAttribute("value", "" + Ra(d2.value));
                break;
              case "select":
                a2.multiple = !!d2.multiple;
                f2 = d2.value;
                f2 != null ? eb(a2, !!d2.multiple, f2, false) : d2.defaultValue != null && eb(a2, !!d2.multiple, d2.defaultValue, true);
                break;
              default:
                typeof e2.onClick === "function" && (a2.onclick = Af);
            }
            switch (c2) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                d2 = !!d2.autoFocus;
                break a;
              case "img":
                d2 = true;
                break a;
              default:
                d2 = false;
            }
          }
          d2 && (b2.flags |= 4);
        }
        b2.ref !== null && (b2.flags |= 512, b2.flags |= 2097152);
      }
      Q$1(b2);
      return null;
    case 6:
      if (a2 && b2.stateNode != null)
        Wi(a2, b2, a2.memoizedProps, d2);
      else {
        if (typeof d2 !== "string" && b2.stateNode === null)
          throw Error(p$6(166));
        c2 = Eh(Dh.current);
        Eh(Bh.current);
        if (mh(b2)) {
          d2 = b2.stateNode;
          c2 = b2.memoizedProps;
          d2[Nf] = b2;
          if (f2 = d2.nodeValue !== c2) {
            if (a2 = dh, a2 !== null)
              switch (a2.tag) {
                case 3:
                  zf(d2.nodeValue, c2, (a2.mode & 1) !== 0);
                  break;
                case 5:
                  a2.memoizedProps.suppressHydrationWarning !== true && zf(d2.nodeValue, c2, (a2.mode & 1) !== 0);
              }
          }
          f2 && (b2.flags |= 4);
        } else
          d2 = (c2.nodeType === 9 ? c2 : c2.ownerDocument).createTextNode(d2), d2[Nf] = b2, b2.stateNode = d2;
      }
      Q$1(b2);
      return null;
    case 13:
      E$1(K);
      d2 = b2.memoizedState;
      if (I$1 && eh !== null && (b2.mode & 1) !== 0 && (b2.flags & 128) === 0) {
        for (d2 = eh; d2; )
          d2 = Kf(d2.nextSibling);
        nh();
        b2.flags |= 98560;
        return b2;
      }
      if (d2 !== null && d2.dehydrated !== null) {
        d2 = mh(b2);
        if (a2 === null) {
          if (!d2)
            throw Error(p$6(318));
          d2 = b2.memoizedState;
          d2 = d2 !== null ? d2.dehydrated : null;
          if (!d2)
            throw Error(p$6(317));
          d2[Nf] = b2;
        } else
          nh(), (b2.flags & 128) === 0 && (b2.memoizedState = null), b2.flags |= 4;
        Q$1(b2);
        return null;
      }
      fh !== null && (Zi(fh), fh = null);
      if ((b2.flags & 128) !== 0)
        return b2.lanes = c2, b2;
      d2 = d2 !== null;
      c2 = false;
      a2 === null ? mh(b2) : c2 = a2.memoizedState !== null;
      d2 !== c2 && d2 && (b2.child.flags |= 8192, (b2.mode & 1) !== 0 && (a2 === null || (K.current & 1) !== 0 ? R$1 === 0 && (R$1 = 3) : $i()));
      b2.updateQueue !== null && (b2.flags |= 4);
      Q$1(b2);
      return null;
    case 4:
      return Gh(), Ui(a2, b2), a2 === null && rf(b2.stateNode.containerInfo), Q$1(b2), null;
    case 10:
      return qg(b2.type._context), Q$1(b2), null;
    case 17:
      return Yf(b2.type) && Zf(), Q$1(b2), null;
    case 19:
      E$1(K);
      f2 = b2.memoizedState;
      if (f2 === null)
        return Q$1(b2), null;
      d2 = (b2.flags & 128) !== 0;
      g2 = f2.rendering;
      if (g2 === null)
        if (d2)
          Xi(f2, false);
        else {
          if (R$1 !== 0 || a2 !== null && (a2.flags & 128) !== 0)
            for (a2 = b2.child; a2 !== null; ) {
              g2 = Jh(a2);
              if (g2 !== null) {
                b2.flags |= 128;
                Xi(f2, false);
                d2 = g2.updateQueue;
                d2 !== null && (b2.updateQueue = d2, b2.flags |= 4);
                b2.subtreeFlags = 0;
                d2 = c2;
                for (c2 = b2.child; c2 !== null; )
                  f2 = c2, a2 = d2, f2.flags &= 14680066, g2 = f2.alternate, g2 === null ? (f2.childLanes = 0, f2.lanes = a2, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g2.childLanes, f2.lanes = g2.lanes, f2.child = g2.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g2.memoizedProps, f2.memoizedState = g2.memoizedState, f2.updateQueue = g2.updateQueue, f2.type = g2.type, a2 = g2.dependencies, f2.dependencies = a2 === null ? null : { lanes: a2.lanes, firstContext: a2.firstContext }), c2 = c2.sibling;
                G$1(K, K.current & 1 | 2);
                return b2.child;
              }
              a2 = a2.sibling;
            }
          f2.tail !== null && B$1() > aj && (b2.flags |= 128, d2 = true, Xi(f2, false), b2.lanes = 4194304);
        }
      else {
        if (!d2)
          if (a2 = Jh(g2), a2 !== null) {
            if (b2.flags |= 128, d2 = true, c2 = a2.updateQueue, c2 !== null && (b2.updateQueue = c2, b2.flags |= 4), Xi(f2, true), f2.tail === null && f2.tailMode === "hidden" && !g2.alternate && !I$1)
              return Q$1(b2), null;
          } else
            2 * B$1() - f2.renderingStartTime > aj && c2 !== 1073741824 && (b2.flags |= 128, d2 = true, Xi(f2, false), b2.lanes = 4194304);
        f2.isBackwards ? (g2.sibling = b2.child, b2.child = g2) : (c2 = f2.last, c2 !== null ? c2.sibling = g2 : b2.child = g2, f2.last = g2);
      }
      if (f2.tail !== null)
        return b2 = f2.tail, f2.rendering = b2, f2.tail = b2.sibling, f2.renderingStartTime = B$1(), b2.sibling = null, c2 = K.current, G$1(K, d2 ? c2 & 1 | 2 : c2 & 1), b2;
      Q$1(b2);
      return null;
    case 22:
    case 23:
      return bj(), d2 = b2.memoizedState !== null, a2 !== null && a2.memoizedState !== null !== d2 && (b2.flags |= 8192), d2 && (b2.mode & 1) !== 0 ? (cj & 1073741824) !== 0 && (Q$1(b2), b2.subtreeFlags & 6 && (b2.flags |= 8192)) : Q$1(b2), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p$6(156, b2.tag));
}
var dj = ta.ReactCurrentOwner, tg = false;
function ej(a2, b2, c2, d2) {
  b2.child = a2 === null ? zh(b2, null, c2, d2) : yh(b2, a2.child, c2, d2);
}
function fj(a2, b2, c2, d2, e2) {
  c2 = c2.render;
  var f2 = b2.ref;
  sg(b2, e2);
  d2 = Uh(a2, b2, c2, d2, f2, e2);
  c2 = Zh();
  if (a2 !== null && !tg)
    return b2.updateQueue = a2.updateQueue, b2.flags &= -2053, a2.lanes &= ~e2, gj(a2, b2, e2);
  I$1 && c2 && bh(b2);
  b2.flags |= 1;
  ej(a2, b2, d2, e2);
  return b2.child;
}
function hj(a2, b2, c2, d2, e2) {
  if (a2 === null) {
    var f2 = c2.type;
    if (typeof f2 === "function" && !ij(f2) && f2.defaultProps === void 0 && c2.compare === null && c2.defaultProps === void 0)
      return b2.tag = 15, b2.type = f2, jj(a2, b2, f2, d2, e2);
    a2 = vh(c2.type, null, d2, b2, b2.mode, e2);
    a2.ref = b2.ref;
    a2.return = b2;
    return b2.child = a2;
  }
  f2 = a2.child;
  if ((a2.lanes & e2) === 0) {
    var g2 = f2.memoizedProps;
    c2 = c2.compare;
    c2 = c2 !== null ? c2 : He;
    if (c2(g2, d2) && a2.ref === b2.ref)
      return gj(a2, b2, e2);
  }
  b2.flags |= 1;
  a2 = th(f2, d2);
  a2.ref = b2.ref;
  a2.return = b2;
  return b2.child = a2;
}
function jj(a2, b2, c2, d2, e2) {
  if (a2 !== null) {
    var f2 = a2.memoizedProps;
    if (He(f2, d2) && a2.ref === b2.ref)
      if (tg = false, b2.pendingProps = d2 = f2, (a2.lanes & e2) !== 0)
        (a2.flags & 131072) !== 0 && (tg = true);
      else
        return b2.lanes = a2.lanes, gj(a2, b2, e2);
  }
  return kj(a2, b2, c2, d2, e2);
}
function lj(a2, b2, c2) {
  var d2 = b2.pendingProps, e2 = d2.children, f2 = a2 !== null ? a2.memoizedState : null;
  if (d2.mode === "hidden")
    if ((b2.mode & 1) === 0)
      b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G$1(mj, cj), cj |= c2;
    else if ((c2 & 1073741824) !== 0)
      b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, d2 = f2 !== null ? f2.baseLanes : c2, G$1(mj, cj), cj |= d2;
    else
      return a2 = f2 !== null ? f2.baseLanes | c2 : c2, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a2, cachePool: null, transitions: null }, b2.updateQueue = null, G$1(mj, cj), cj |= a2, null;
  else
    f2 !== null ? (d2 = f2.baseLanes | c2, b2.memoizedState = null) : d2 = c2, G$1(mj, cj), cj |= d2;
  ej(a2, b2, e2, c2);
  return b2.child;
}
function nj(a2, b2) {
  var c2 = b2.ref;
  if (a2 === null && c2 !== null || a2 !== null && a2.ref !== c2)
    b2.flags |= 512, b2.flags |= 2097152;
}
function kj(a2, b2, c2, d2, e2) {
  var f2 = Yf(c2) ? Wf : H$1.current;
  f2 = Xf(b2, f2);
  sg(b2, e2);
  c2 = Uh(a2, b2, c2, d2, f2, e2);
  d2 = Zh();
  if (a2 !== null && !tg)
    return b2.updateQueue = a2.updateQueue, b2.flags &= -2053, a2.lanes &= ~e2, gj(a2, b2, e2);
  I$1 && d2 && bh(b2);
  b2.flags |= 1;
  ej(a2, b2, c2, e2);
  return b2.child;
}
function oj(a2, b2, c2, d2, e2) {
  if (Yf(c2)) {
    var f2 = true;
    bg(b2);
  } else
    f2 = false;
  sg(b2, e2);
  if (b2.stateNode === null)
    a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2), Og(b2, c2, d2), Qg(b2, c2, d2, e2), d2 = true;
  else if (a2 === null) {
    var g2 = b2.stateNode, h2 = b2.memoizedProps;
    g2.props = h2;
    var k2 = g2.context, l2 = c2.contextType;
    typeof l2 === "object" && l2 !== null ? l2 = ug(l2) : (l2 = Yf(c2) ? Wf : H$1.current, l2 = Xf(b2, l2));
    var n2 = c2.getDerivedStateFromProps, u2 = typeof n2 === "function" || typeof g2.getSnapshotBeforeUpdate === "function";
    u2 || typeof g2.UNSAFE_componentWillReceiveProps !== "function" && typeof g2.componentWillReceiveProps !== "function" || (h2 !== d2 || k2 !== l2) && Pg(b2, g2, d2, l2);
    wg = false;
    var q2 = b2.memoizedState;
    g2.state = q2;
    Eg(b2, d2, g2, e2);
    k2 = b2.memoizedState;
    h2 !== d2 || q2 !== k2 || Vf.current || wg ? (typeof n2 === "function" && (Ig(b2, c2, n2, d2), k2 = b2.memoizedState), (h2 = wg || Ng(b2, c2, h2, d2, q2, k2, l2)) ? (u2 || typeof g2.UNSAFE_componentWillMount !== "function" && typeof g2.componentWillMount !== "function" || (typeof g2.componentWillMount === "function" && g2.componentWillMount(), typeof g2.UNSAFE_componentWillMount === "function" && g2.UNSAFE_componentWillMount()), typeof g2.componentDidMount === "function" && (b2.flags |= 4194308)) : (typeof g2.componentDidMount === "function" && (b2.flags |= 4194308), b2.memoizedProps = d2, b2.memoizedState = k2), g2.props = d2, g2.state = k2, g2.context = l2, d2 = h2) : (typeof g2.componentDidMount === "function" && (b2.flags |= 4194308), d2 = false);
  } else {
    g2 = b2.stateNode;
    yg(a2, b2);
    h2 = b2.memoizedProps;
    l2 = b2.type === b2.elementType ? h2 : kg(b2.type, h2);
    g2.props = l2;
    u2 = b2.pendingProps;
    q2 = g2.context;
    k2 = c2.contextType;
    typeof k2 === "object" && k2 !== null ? k2 = ug(k2) : (k2 = Yf(c2) ? Wf : H$1.current, k2 = Xf(b2, k2));
    var y2 = c2.getDerivedStateFromProps;
    (n2 = typeof y2 === "function" || typeof g2.getSnapshotBeforeUpdate === "function") || typeof g2.UNSAFE_componentWillReceiveProps !== "function" && typeof g2.componentWillReceiveProps !== "function" || (h2 !== u2 || q2 !== k2) && Pg(b2, g2, d2, k2);
    wg = false;
    q2 = b2.memoizedState;
    g2.state = q2;
    Eg(b2, d2, g2, e2);
    var m2 = b2.memoizedState;
    h2 !== u2 || q2 !== m2 || Vf.current || wg ? (typeof y2 === "function" && (Ig(b2, c2, y2, d2), m2 = b2.memoizedState), (l2 = wg || Ng(b2, c2, l2, d2, q2, m2, k2) || false) ? (n2 || typeof g2.UNSAFE_componentWillUpdate !== "function" && typeof g2.componentWillUpdate !== "function" || (typeof g2.componentWillUpdate === "function" && g2.componentWillUpdate(d2, m2, k2), typeof g2.UNSAFE_componentWillUpdate === "function" && g2.UNSAFE_componentWillUpdate(d2, m2, k2)), typeof g2.componentDidUpdate === "function" && (b2.flags |= 4), typeof g2.getSnapshotBeforeUpdate === "function" && (b2.flags |= 1024)) : (typeof g2.componentDidUpdate !== "function" || h2 === a2.memoizedProps && q2 === a2.memoizedState || (b2.flags |= 4), typeof g2.getSnapshotBeforeUpdate !== "function" || h2 === a2.memoizedProps && q2 === a2.memoizedState || (b2.flags |= 1024), b2.memoizedProps = d2, b2.memoizedState = m2), g2.props = d2, g2.state = m2, g2.context = k2, d2 = l2) : (typeof g2.componentDidUpdate !== "function" || h2 === a2.memoizedProps && q2 === a2.memoizedState || (b2.flags |= 4), typeof g2.getSnapshotBeforeUpdate !== "function" || h2 === a2.memoizedProps && q2 === a2.memoizedState || (b2.flags |= 1024), d2 = false);
  }
  return pj(a2, b2, c2, d2, f2, e2);
}
function pj(a2, b2, c2, d2, e2, f2) {
  nj(a2, b2);
  var g2 = (b2.flags & 128) !== 0;
  if (!d2 && !g2)
    return e2 && cg(b2, c2, false), gj(a2, b2, f2);
  d2 = b2.stateNode;
  dj.current = b2;
  var h2 = g2 && typeof c2.getDerivedStateFromError !== "function" ? null : d2.render();
  b2.flags |= 1;
  a2 !== null && g2 ? (b2.child = yh(b2, a2.child, null, f2), b2.child = yh(b2, null, h2, f2)) : ej(a2, b2, h2, f2);
  b2.memoizedState = d2.state;
  e2 && cg(b2, c2, true);
  return b2.child;
}
function qj(a2) {
  var b2 = a2.stateNode;
  b2.pendingContext ? $f(a2, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && $f(a2, b2.context, false);
  Fh(a2, b2.containerInfo);
}
function rj(a2, b2, c2, d2, e2) {
  nh();
  oh(e2);
  b2.flags |= 256;
  ej(a2, b2, c2, d2);
  return b2.child;
}
var sj = { dehydrated: null, treeContext: null, retryLane: 0 };
function tj(a2) {
  return { baseLanes: a2, cachePool: null, transitions: null };
}
function uj(a2, b2) {
  return { baseLanes: a2.baseLanes | b2, cachePool: null, transitions: a2.transitions };
}
function vj(a2, b2, c2) {
  var d2 = b2.pendingProps, e2 = K.current, f2 = false, g2 = (b2.flags & 128) !== 0, h2;
  (h2 = g2) || (h2 = a2 !== null && a2.memoizedState === null ? false : (e2 & 2) !== 0);
  if (h2)
    f2 = true, b2.flags &= -129;
  else if (a2 === null || a2.memoizedState !== null)
    e2 |= 1;
  G$1(K, e2 & 1);
  if (a2 === null) {
    kh(b2);
    a2 = b2.memoizedState;
    if (a2 !== null && (a2 = a2.dehydrated, a2 !== null))
      return (b2.mode & 1) === 0 ? b2.lanes = 1 : a2.data === "$!" ? b2.lanes = 8 : b2.lanes = 1073741824, null;
    e2 = d2.children;
    a2 = d2.fallback;
    return f2 ? (d2 = b2.mode, f2 = b2.child, e2 = { mode: "hidden", children: e2 }, (d2 & 1) === 0 && f2 !== null ? (f2.childLanes = 0, f2.pendingProps = e2) : f2 = wj(e2, d2, 0, null), a2 = xh(a2, d2, c2, null), f2.return = b2, a2.return = b2, f2.sibling = a2, b2.child = f2, b2.child.memoizedState = tj(c2), b2.memoizedState = sj, a2) : xj(b2, e2);
  }
  e2 = a2.memoizedState;
  if (e2 !== null) {
    h2 = e2.dehydrated;
    if (h2 !== null) {
      if (g2) {
        if (b2.flags & 256)
          return b2.flags &= -257, yj(a2, b2, c2, Error(p$6(422)));
        if (b2.memoizedState !== null)
          return b2.child = a2.child, b2.flags |= 128, null;
        f2 = d2.fallback;
        e2 = b2.mode;
        d2 = wj({ mode: "visible", children: d2.children }, e2, 0, null);
        f2 = xh(f2, e2, c2, null);
        f2.flags |= 2;
        d2.return = b2;
        f2.return = b2;
        d2.sibling = f2;
        b2.child = d2;
        (b2.mode & 1) !== 0 && yh(b2, a2.child, null, c2);
        b2.child.memoizedState = tj(c2);
        b2.memoizedState = sj;
        return f2;
      }
      if ((b2.mode & 1) === 0)
        b2 = yj(a2, b2, c2, null);
      else if (h2.data === "$!")
        b2 = yj(a2, b2, c2, Error(p$6(419)));
      else if (d2 = (c2 & a2.childLanes) !== 0, tg || d2) {
        d2 = P$1;
        if (d2 !== null) {
          switch (c2 & -c2) {
            case 4:
              f2 = 2;
              break;
            case 16:
              f2 = 8;
              break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              f2 = 32;
              break;
            case 536870912:
              f2 = 268435456;
              break;
            default:
              f2 = 0;
          }
          d2 = (f2 & (d2.suspendedLanes | c2)) !== 0 ? 0 : f2;
          d2 !== 0 && d2 !== e2.retryLane && (e2.retryLane = d2, Lg(a2, d2, -1));
        }
        $i();
        b2 = yj(a2, b2, c2, Error(p$6(421)));
      } else
        h2.data === "$?" ? (b2.flags |= 128, b2.child = a2.child, b2 = zj.bind(null, a2), h2._reactRetry = b2, b2 = null) : (c2 = e2.treeContext, eh = Kf(h2.nextSibling), dh = b2, I$1 = true, fh = null, c2 !== null && (Vg[Wg++] = Yg, Vg[Wg++] = Zg, Vg[Wg++] = Xg, Yg = c2.id, Zg = c2.overflow, Xg = b2), b2 = xj(b2, b2.pendingProps.children), b2.flags |= 4096);
      return b2;
    }
    if (f2)
      return d2 = Aj(a2, b2, d2.children, d2.fallback, c2), f2 = b2.child, e2 = a2.child.memoizedState, f2.memoizedState = e2 === null ? tj(c2) : uj(e2, c2), f2.childLanes = a2.childLanes & ~c2, b2.memoizedState = sj, d2;
    c2 = Bj(a2, b2, d2.children, c2);
    b2.memoizedState = null;
    return c2;
  }
  if (f2)
    return d2 = Aj(a2, b2, d2.children, d2.fallback, c2), f2 = b2.child, e2 = a2.child.memoizedState, f2.memoizedState = e2 === null ? tj(c2) : uj(e2, c2), f2.childLanes = a2.childLanes & ~c2, b2.memoizedState = sj, d2;
  c2 = Bj(a2, b2, d2.children, c2);
  b2.memoizedState = null;
  return c2;
}
function xj(a2, b2) {
  b2 = wj({ mode: "visible", children: b2 }, a2.mode, 0, null);
  b2.return = a2;
  return a2.child = b2;
}
function Bj(a2, b2, c2, d2) {
  var e2 = a2.child;
  a2 = e2.sibling;
  c2 = th(e2, { mode: "visible", children: c2 });
  (b2.mode & 1) === 0 && (c2.lanes = d2);
  c2.return = b2;
  c2.sibling = null;
  a2 !== null && (d2 = b2.deletions, d2 === null ? (b2.deletions = [a2], b2.flags |= 16) : d2.push(a2));
  return b2.child = c2;
}
function Aj(a2, b2, c2, d2, e2) {
  var f2 = b2.mode;
  a2 = a2.child;
  var g2 = a2.sibling, h2 = { mode: "hidden", children: c2 };
  (f2 & 1) === 0 && b2.child !== a2 ? (c2 = b2.child, c2.childLanes = 0, c2.pendingProps = h2, b2.deletions = null) : (c2 = th(a2, h2), c2.subtreeFlags = a2.subtreeFlags & 14680064);
  g2 !== null ? d2 = th(g2, d2) : (d2 = xh(d2, f2, e2, null), d2.flags |= 2);
  d2.return = b2;
  c2.return = b2;
  c2.sibling = d2;
  b2.child = c2;
  return d2;
}
function yj(a2, b2, c2, d2) {
  d2 !== null && oh(d2);
  yh(b2, a2.child, null, c2);
  a2 = xj(b2, b2.pendingProps.children);
  a2.flags |= 2;
  b2.memoizedState = null;
  return a2;
}
function Cj(a2, b2, c2) {
  a2.lanes |= b2;
  var d2 = a2.alternate;
  d2 !== null && (d2.lanes |= b2);
  rg(a2.return, b2, c2);
}
function Dj(a2, b2, c2, d2, e2) {
  var f2 = a2.memoizedState;
  f2 === null ? a2.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d2, tail: c2, tailMode: e2 } : (f2.isBackwards = b2, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d2, f2.tail = c2, f2.tailMode = e2);
}
function Ej(a2, b2, c2) {
  var d2 = b2.pendingProps, e2 = d2.revealOrder, f2 = d2.tail;
  ej(a2, b2, d2.children, c2);
  d2 = K.current;
  if ((d2 & 2) !== 0)
    d2 = d2 & 1 | 2, b2.flags |= 128;
  else {
    if (a2 !== null && (a2.flags & 128) !== 0)
      a:
        for (a2 = b2.child; a2 !== null; ) {
          if (a2.tag === 13)
            a2.memoizedState !== null && Cj(a2, c2, b2);
          else if (a2.tag === 19)
            Cj(a2, c2, b2);
          else if (a2.child !== null) {
            a2.child.return = a2;
            a2 = a2.child;
            continue;
          }
          if (a2 === b2)
            break a;
          for (; a2.sibling === null; ) {
            if (a2.return === null || a2.return === b2)
              break a;
            a2 = a2.return;
          }
          a2.sibling.return = a2.return;
          a2 = a2.sibling;
        }
    d2 &= 1;
  }
  G$1(K, d2);
  if ((b2.mode & 1) === 0)
    b2.memoizedState = null;
  else
    switch (e2) {
      case "forwards":
        c2 = b2.child;
        for (e2 = null; c2 !== null; )
          a2 = c2.alternate, a2 !== null && Jh(a2) === null && (e2 = c2), c2 = c2.sibling;
        c2 = e2;
        c2 === null ? (e2 = b2.child, b2.child = null) : (e2 = c2.sibling, c2.sibling = null);
        Dj(b2, false, e2, c2, f2);
        break;
      case "backwards":
        c2 = null;
        e2 = b2.child;
        for (b2.child = null; e2 !== null; ) {
          a2 = e2.alternate;
          if (a2 !== null && Jh(a2) === null) {
            b2.child = e2;
            break;
          }
          a2 = e2.sibling;
          e2.sibling = c2;
          c2 = e2;
          e2 = a2;
        }
        Dj(b2, true, c2, null, f2);
        break;
      case "together":
        Dj(b2, false, null, null, void 0);
        break;
      default:
        b2.memoizedState = null;
    }
  return b2.child;
}
function gj(a2, b2, c2) {
  a2 !== null && (b2.dependencies = a2.dependencies);
  Fg |= b2.lanes;
  if ((c2 & b2.childLanes) === 0)
    return null;
  if (a2 !== null && b2.child !== a2.child)
    throw Error(p$6(153));
  if (b2.child !== null) {
    a2 = b2.child;
    c2 = th(a2, a2.pendingProps);
    b2.child = c2;
    for (c2.return = b2; a2.sibling !== null; )
      a2 = a2.sibling, c2 = c2.sibling = th(a2, a2.pendingProps), c2.return = b2;
    c2.sibling = null;
  }
  return b2.child;
}
function Fj(a2, b2, c2) {
  switch (b2.tag) {
    case 3:
      qj(b2);
      nh();
      break;
    case 5:
      Hh(b2);
      break;
    case 1:
      Yf(b2.type) && bg(b2);
      break;
    case 4:
      Fh(b2, b2.stateNode.containerInfo);
      break;
    case 10:
      var d2 = b2.type._context, e2 = b2.memoizedProps.value;
      G$1(lg, d2._currentValue);
      d2._currentValue = e2;
      break;
    case 13:
      d2 = b2.memoizedState;
      if (d2 !== null) {
        if (d2.dehydrated !== null)
          return G$1(K, K.current & 1), b2.flags |= 128, null;
        if ((c2 & b2.child.childLanes) !== 0)
          return vj(a2, b2, c2);
        G$1(K, K.current & 1);
        a2 = gj(a2, b2, c2);
        return a2 !== null ? a2.sibling : null;
      }
      G$1(K, K.current & 1);
      break;
    case 19:
      d2 = (c2 & b2.childLanes) !== 0;
      if ((a2.flags & 128) !== 0) {
        if (d2)
          return Ej(a2, b2, c2);
        b2.flags |= 128;
      }
      e2 = b2.memoizedState;
      e2 !== null && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
      G$1(K, K.current);
      if (d2)
        break;
      else
        return null;
    case 22:
    case 23:
      return b2.lanes = 0, lj(a2, b2, c2);
  }
  return gj(a2, b2, c2);
}
function Gj(a2, b2) {
  ch(b2);
  switch (b2.tag) {
    case 1:
      return Yf(b2.type) && Zf(), a2 = b2.flags, a2 & 65536 ? (b2.flags = a2 & -65537 | 128, b2) : null;
    case 3:
      return Gh(), E$1(Vf), E$1(H$1), Lh(), a2 = b2.flags, (a2 & 65536) !== 0 && (a2 & 128) === 0 ? (b2.flags = a2 & -65537 | 128, b2) : null;
    case 5:
      return Ih(b2), null;
    case 13:
      E$1(K);
      a2 = b2.memoizedState;
      if (a2 !== null && a2.dehydrated !== null) {
        if (b2.alternate === null)
          throw Error(p$6(340));
        nh();
      }
      a2 = b2.flags;
      return a2 & 65536 ? (b2.flags = a2 & -65537 | 128, b2) : null;
    case 19:
      return E$1(K), null;
    case 4:
      return Gh(), null;
    case 10:
      return qg(b2.type._context), null;
    case 22:
    case 23:
      return bj(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Hj = false, S$1 = false, Ij = typeof WeakSet === "function" ? WeakSet : Set, T$1 = null;
function Jj(a2, b2) {
  var c2 = a2.ref;
  if (c2 !== null)
    if (typeof c2 === "function")
      try {
        c2(null);
      } catch (d2) {
        U$1(a2, b2, d2);
      }
    else
      c2.current = null;
}
function Kj(a2, b2, c2) {
  try {
    c2();
  } catch (d2) {
    U$1(a2, b2, d2);
  }
}
var Lj = false;
function Mj(a2, b2) {
  Bf = cd;
  a2 = Le();
  if (Me(a2)) {
    if ("selectionStart" in a2)
      var c2 = { start: a2.selectionStart, end: a2.selectionEnd };
    else
      a: {
        c2 = (c2 = a2.ownerDocument) && c2.defaultView || window;
        var d2 = c2.getSelection && c2.getSelection();
        if (d2 && d2.rangeCount !== 0) {
          c2 = d2.anchorNode;
          var e2 = d2.anchorOffset, f2 = d2.focusNode;
          d2 = d2.focusOffset;
          try {
            c2.nodeType, f2.nodeType;
          } catch (Z2) {
            c2 = null;
            break a;
          }
          var g2 = 0, h2 = -1, k2 = -1, l2 = 0, n2 = 0, u2 = a2, q2 = null;
          b:
            for (; ; ) {
              for (var y2; ; ) {
                u2 !== c2 || e2 !== 0 && u2.nodeType !== 3 || (h2 = g2 + e2);
                u2 !== f2 || d2 !== 0 && u2.nodeType !== 3 || (k2 = g2 + d2);
                u2.nodeType === 3 && (g2 += u2.nodeValue.length);
                if ((y2 = u2.firstChild) === null)
                  break;
                q2 = u2;
                u2 = y2;
              }
              for (; ; ) {
                if (u2 === a2)
                  break b;
                q2 === c2 && ++l2 === e2 && (h2 = g2);
                q2 === f2 && ++n2 === d2 && (k2 = g2);
                if ((y2 = u2.nextSibling) !== null)
                  break;
                u2 = q2;
                q2 = u2.parentNode;
              }
              u2 = y2;
            }
          c2 = h2 === -1 || k2 === -1 ? null : { start: h2, end: k2 };
        } else
          c2 = null;
      }
    c2 = c2 || { start: 0, end: 0 };
  } else
    c2 = null;
  Cf = { focusedElem: a2, selectionRange: c2 };
  cd = false;
  for (T$1 = b2; T$1 !== null; )
    if (b2 = T$1, a2 = b2.child, (b2.subtreeFlags & 1028) !== 0 && a2 !== null)
      a2.return = b2, T$1 = a2;
    else
      for (; T$1 !== null; ) {
        b2 = T$1;
        try {
          var m2 = b2.alternate;
          if ((b2.flags & 1024) !== 0)
            switch (b2.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (m2 !== null) {
                  var w2 = m2.memoizedProps, J2 = m2.memoizedState, v2 = b2.stateNode, x2 = v2.getSnapshotBeforeUpdate(b2.elementType === b2.type ? w2 : kg(b2.type, w2), J2);
                  v2.__reactInternalSnapshotBeforeUpdate = x2;
                }
                break;
              case 3:
                var r2 = b2.stateNode.containerInfo;
                if (r2.nodeType === 1)
                  r2.textContent = "";
                else if (r2.nodeType === 9) {
                  var F2 = r2.body;
                  F2 != null && (F2.textContent = "");
                }
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p$6(163));
            }
        } catch (Z2) {
          U$1(b2, b2.return, Z2);
        }
        a2 = b2.sibling;
        if (a2 !== null) {
          a2.return = b2.return;
          T$1 = a2;
          break;
        }
        T$1 = b2.return;
      }
  m2 = Lj;
  Lj = false;
  return m2;
}
function Nj(a2, b2, c2) {
  var d2 = b2.updateQueue;
  d2 = d2 !== null ? d2.lastEffect : null;
  if (d2 !== null) {
    var e2 = d2 = d2.next;
    do {
      if ((e2.tag & a2) === a2) {
        var f2 = e2.destroy;
        e2.destroy = void 0;
        f2 !== void 0 && Kj(b2, c2, f2);
      }
      e2 = e2.next;
    } while (e2 !== d2);
  }
}
function Oj(a2, b2) {
  b2 = b2.updateQueue;
  b2 = b2 !== null ? b2.lastEffect : null;
  if (b2 !== null) {
    var c2 = b2 = b2.next;
    do {
      if ((c2.tag & a2) === a2) {
        var d2 = c2.create;
        c2.destroy = d2();
      }
      c2 = c2.next;
    } while (c2 !== b2);
  }
}
function Pj(a2) {
  var b2 = a2.ref;
  if (b2 !== null) {
    var c2 = a2.stateNode;
    switch (a2.tag) {
      case 5:
        a2 = c2;
        break;
      default:
        a2 = c2;
    }
    typeof b2 === "function" ? b2(a2) : b2.current = a2;
  }
}
function Qj(a2) {
  var b2 = a2.alternate;
  b2 !== null && (a2.alternate = null, Qj(b2));
  a2.child = null;
  a2.deletions = null;
  a2.sibling = null;
  a2.tag === 5 && (b2 = a2.stateNode, b2 !== null && (delete b2[Nf], delete b2[Of], delete b2[nf], delete b2[Pf], delete b2[Qf]));
  a2.stateNode = null;
  a2.return = null;
  a2.dependencies = null;
  a2.memoizedProps = null;
  a2.memoizedState = null;
  a2.pendingProps = null;
  a2.stateNode = null;
  a2.updateQueue = null;
}
function Rj(a2) {
  return a2.tag === 5 || a2.tag === 3 || a2.tag === 4;
}
function Sj(a2) {
  a:
    for (; ; ) {
      for (; a2.sibling === null; ) {
        if (a2.return === null || Rj(a2.return))
          return null;
        a2 = a2.return;
      }
      a2.sibling.return = a2.return;
      for (a2 = a2.sibling; a2.tag !== 5 && a2.tag !== 6 && a2.tag !== 18; ) {
        if (a2.flags & 2)
          continue a;
        if (a2.child === null || a2.tag === 4)
          continue a;
        else
          a2.child.return = a2, a2 = a2.child;
      }
      if (!(a2.flags & 2))
        return a2.stateNode;
    }
}
function Tj(a2, b2, c2) {
  var d2 = a2.tag;
  if (d2 === 5 || d2 === 6)
    a2 = a2.stateNode, b2 ? c2.nodeType === 8 ? c2.parentNode.insertBefore(a2, b2) : c2.insertBefore(a2, b2) : (c2.nodeType === 8 ? (b2 = c2.parentNode, b2.insertBefore(a2, c2)) : (b2 = c2, b2.appendChild(a2)), c2 = c2._reactRootContainer, c2 !== null && c2 !== void 0 || b2.onclick !== null || (b2.onclick = Af));
  else if (d2 !== 4 && (a2 = a2.child, a2 !== null))
    for (Tj(a2, b2, c2), a2 = a2.sibling; a2 !== null; )
      Tj(a2, b2, c2), a2 = a2.sibling;
}
function Uj(a2, b2, c2) {
  var d2 = a2.tag;
  if (d2 === 5 || d2 === 6)
    a2 = a2.stateNode, b2 ? c2.insertBefore(a2, b2) : c2.appendChild(a2);
  else if (d2 !== 4 && (a2 = a2.child, a2 !== null))
    for (Uj(a2, b2, c2), a2 = a2.sibling; a2 !== null; )
      Uj(a2, b2, c2), a2 = a2.sibling;
}
var V = null, Vj = false;
function Wj(a2, b2, c2) {
  for (c2 = c2.child; c2 !== null; )
    Xj(a2, b2, c2), c2 = c2.sibling;
}
function Xj(a2, b2, c2) {
  if (kc && typeof kc.onCommitFiberUnmount === "function")
    try {
      kc.onCommitFiberUnmount(jc, c2);
    } catch (h2) {
    }
  switch (c2.tag) {
    case 5:
      S$1 || Jj(c2, b2);
    case 6:
      var d2 = V, e2 = Vj;
      V = null;
      Wj(a2, b2, c2);
      V = d2;
      Vj = e2;
      V !== null && (Vj ? (a2 = V, c2 = c2.stateNode, a2.nodeType === 8 ? a2.parentNode.removeChild(c2) : a2.removeChild(c2)) : V.removeChild(c2.stateNode));
      break;
    case 18:
      V !== null && (Vj ? (a2 = V, c2 = c2.stateNode, a2.nodeType === 8 ? Jf(a2.parentNode, c2) : a2.nodeType === 1 && Jf(a2, c2), ad(a2)) : Jf(V, c2.stateNode));
      break;
    case 4:
      d2 = V;
      e2 = Vj;
      V = c2.stateNode.containerInfo;
      Vj = true;
      Wj(a2, b2, c2);
      V = d2;
      Vj = e2;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!S$1 && (d2 = c2.updateQueue, d2 !== null && (d2 = d2.lastEffect, d2 !== null))) {
        e2 = d2 = d2.next;
        do {
          var f2 = e2, g2 = f2.destroy;
          f2 = f2.tag;
          g2 !== void 0 && ((f2 & 2) !== 0 ? Kj(c2, b2, g2) : (f2 & 4) !== 0 && Kj(c2, b2, g2));
          e2 = e2.next;
        } while (e2 !== d2);
      }
      Wj(a2, b2, c2);
      break;
    case 1:
      if (!S$1 && (Jj(c2, b2), d2 = c2.stateNode, typeof d2.componentWillUnmount === "function"))
        try {
          d2.props = c2.memoizedProps, d2.state = c2.memoizedState, d2.componentWillUnmount();
        } catch (h2) {
          U$1(c2, b2, h2);
        }
      Wj(a2, b2, c2);
      break;
    case 21:
      Wj(a2, b2, c2);
      break;
    case 22:
      c2.mode & 1 ? (S$1 = (d2 = S$1) || c2.memoizedState !== null, Wj(a2, b2, c2), S$1 = d2) : Wj(a2, b2, c2);
      break;
    default:
      Wj(a2, b2, c2);
  }
}
function Yj(a2) {
  var b2 = a2.updateQueue;
  if (b2 !== null) {
    a2.updateQueue = null;
    var c2 = a2.stateNode;
    c2 === null && (c2 = a2.stateNode = new Ij());
    b2.forEach(function(b3) {
      var d2 = Zj.bind(null, a2, b3);
      c2.has(b3) || (c2.add(b3), b3.then(d2, d2));
    });
  }
}
function ak(a2, b2) {
  var c2 = b2.deletions;
  if (c2 !== null)
    for (var d2 = 0; d2 < c2.length; d2++) {
      var e2 = c2[d2];
      try {
        var f2 = a2, g2 = b2, h2 = g2;
        a:
          for (; h2 !== null; ) {
            switch (h2.tag) {
              case 5:
                V = h2.stateNode;
                Vj = false;
                break a;
              case 3:
                V = h2.stateNode.containerInfo;
                Vj = true;
                break a;
              case 4:
                V = h2.stateNode.containerInfo;
                Vj = true;
                break a;
            }
            h2 = h2.return;
          }
        if (V === null)
          throw Error(p$6(160));
        Xj(f2, g2, e2);
        V = null;
        Vj = false;
        var k2 = e2.alternate;
        k2 !== null && (k2.return = null);
        e2.return = null;
      } catch (l2) {
        U$1(e2, b2, l2);
      }
    }
  if (b2.subtreeFlags & 12854)
    for (b2 = b2.child; b2 !== null; )
      bk(b2, a2), b2 = b2.sibling;
}
function bk(a2, b2) {
  var c2 = a2.alternate, d2 = a2.flags;
  switch (a2.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      ak(b2, a2);
      ck(a2);
      if (d2 & 4) {
        try {
          Nj(3, a2, a2.return), Oj(3, a2);
        } catch (m2) {
          U$1(a2, a2.return, m2);
        }
        try {
          Nj(5, a2, a2.return);
        } catch (m2) {
          U$1(a2, a2.return, m2);
        }
      }
      break;
    case 1:
      ak(b2, a2);
      ck(a2);
      d2 & 512 && c2 !== null && Jj(c2, c2.return);
      break;
    case 5:
      ak(b2, a2);
      ck(a2);
      d2 & 512 && c2 !== null && Jj(c2, c2.return);
      if (a2.flags & 32) {
        var e2 = a2.stateNode;
        try {
          nb(e2, "");
        } catch (m2) {
          U$1(a2, a2.return, m2);
        }
      }
      if (d2 & 4 && (e2 = a2.stateNode, e2 != null)) {
        var f2 = a2.memoizedProps, g2 = c2 !== null ? c2.memoizedProps : f2, h2 = a2.type, k2 = a2.updateQueue;
        a2.updateQueue = null;
        if (k2 !== null)
          try {
            h2 === "input" && f2.type === "radio" && f2.name != null && Za(e2, f2);
            ub(h2, g2);
            var l2 = ub(h2, f2);
            for (g2 = 0; g2 < k2.length; g2 += 2) {
              var n2 = k2[g2], u2 = k2[g2 + 1];
              n2 === "style" ? rb(e2, u2) : n2 === "dangerouslySetInnerHTML" ? mb(e2, u2) : n2 === "children" ? nb(e2, u2) : sa(e2, n2, u2, l2);
            }
            switch (h2) {
              case "input":
                $a(e2, f2);
                break;
              case "textarea":
                hb(e2, f2);
                break;
              case "select":
                var q2 = e2._wrapperState.wasMultiple;
                e2._wrapperState.wasMultiple = !!f2.multiple;
                var y2 = f2.value;
                y2 != null ? eb(e2, !!f2.multiple, y2, false) : q2 !== !!f2.multiple && (f2.defaultValue != null ? eb(e2, !!f2.multiple, f2.defaultValue, true) : eb(e2, !!f2.multiple, f2.multiple ? [] : "", false));
            }
            e2[Of] = f2;
          } catch (m2) {
            U$1(a2, a2.return, m2);
          }
      }
      break;
    case 6:
      ak(b2, a2);
      ck(a2);
      if (d2 & 4) {
        if (a2.stateNode === null)
          throw Error(p$6(162));
        l2 = a2.stateNode;
        n2 = a2.memoizedProps;
        try {
          l2.nodeValue = n2;
        } catch (m2) {
          U$1(a2, a2.return, m2);
        }
      }
      break;
    case 3:
      ak(b2, a2);
      ck(a2);
      if (d2 & 4 && c2 !== null && c2.memoizedState.isDehydrated)
        try {
          ad(b2.containerInfo);
        } catch (m2) {
          U$1(a2, a2.return, m2);
        }
      break;
    case 4:
      ak(b2, a2);
      ck(a2);
      break;
    case 13:
      ak(b2, a2);
      ck(a2);
      l2 = a2.child;
      l2.flags & 8192 && l2.memoizedState !== null && (l2.alternate === null || l2.alternate.memoizedState === null) && (dk = B$1());
      d2 & 4 && Yj(a2);
      break;
    case 22:
      l2 = c2 !== null && c2.memoizedState !== null;
      a2.mode & 1 ? (S$1 = (n2 = S$1) || l2, ak(b2, a2), S$1 = n2) : ak(b2, a2);
      ck(a2);
      if (d2 & 8192) {
        n2 = a2.memoizedState !== null;
        a:
          for (u2 = null, q2 = a2; ; ) {
            if (q2.tag === 5) {
              if (u2 === null) {
                u2 = q2;
                try {
                  e2 = q2.stateNode, n2 ? (f2 = e2.style, typeof f2.setProperty === "function" ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h2 = q2.stateNode, k2 = q2.memoizedProps.style, g2 = k2 !== void 0 && k2 !== null && k2.hasOwnProperty("display") ? k2.display : null, h2.style.display = qb("display", g2));
                } catch (m2) {
                  U$1(a2, a2.return, m2);
                }
              }
            } else if (q2.tag === 6) {
              if (u2 === null)
                try {
                  q2.stateNode.nodeValue = n2 ? "" : q2.memoizedProps;
                } catch (m2) {
                  U$1(a2, a2.return, m2);
                }
            } else if ((q2.tag !== 22 && q2.tag !== 23 || q2.memoizedState === null || q2 === a2) && q2.child !== null) {
              q2.child.return = q2;
              q2 = q2.child;
              continue;
            }
            if (q2 === a2)
              break a;
            for (; q2.sibling === null; ) {
              if (q2.return === null || q2.return === a2)
                break a;
              u2 === q2 && (u2 = null);
              q2 = q2.return;
            }
            u2 === q2 && (u2 = null);
            q2.sibling.return = q2.return;
            q2 = q2.sibling;
          }
        if (n2 && !l2 && (a2.mode & 1) !== 0)
          for (T$1 = a2, a2 = a2.child; a2 !== null; ) {
            for (l2 = T$1 = a2; T$1 !== null; ) {
              n2 = T$1;
              u2 = n2.child;
              switch (n2.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Nj(4, n2, n2.return);
                  break;
                case 1:
                  Jj(n2, n2.return);
                  f2 = n2.stateNode;
                  if (typeof f2.componentWillUnmount === "function") {
                    q2 = n2;
                    y2 = n2.return;
                    try {
                      e2 = q2, f2.props = e2.memoizedProps, f2.state = e2.memoizedState, f2.componentWillUnmount();
                    } catch (m2) {
                      U$1(q2, y2, m2);
                    }
                  }
                  break;
                case 5:
                  Jj(n2, n2.return);
                  break;
                case 22:
                  if (n2.memoizedState !== null) {
                    ek(l2);
                    continue;
                  }
              }
              u2 !== null ? (u2.return = n2, T$1 = u2) : ek(l2);
            }
            a2 = a2.sibling;
          }
      }
      break;
    case 19:
      ak(b2, a2);
      ck(a2);
      d2 & 4 && Yj(a2);
      break;
    case 21:
      break;
    default:
      ak(b2, a2), ck(a2);
  }
}
function ck(a2) {
  var b2 = a2.flags;
  if (b2 & 2) {
    try {
      a: {
        for (var c2 = a2.return; c2 !== null; ) {
          if (Rj(c2)) {
            var d2 = c2;
            break a;
          }
          c2 = c2.return;
        }
        throw Error(p$6(160));
      }
      switch (d2.tag) {
        case 5:
          var e2 = d2.stateNode;
          d2.flags & 32 && (nb(e2, ""), d2.flags &= -33);
          var f2 = Sj(a2);
          Uj(a2, f2, e2);
          break;
        case 3:
        case 4:
          var g2 = d2.stateNode.containerInfo, h2 = Sj(a2);
          Tj(a2, h2, g2);
          break;
        default:
          throw Error(p$6(161));
      }
    } catch (k2) {
      U$1(a2, a2.return, k2);
    }
    a2.flags &= -3;
  }
  b2 & 4096 && (a2.flags &= -4097);
}
function fk(a2, b2, c2) {
  T$1 = a2;
  gk(a2);
}
function gk(a2, b2, c2) {
  for (var d2 = (a2.mode & 1) !== 0; T$1 !== null; ) {
    var e2 = T$1, f2 = e2.child;
    if (e2.tag === 22 && d2) {
      var g2 = e2.memoizedState !== null || Hj;
      if (!g2) {
        var h2 = e2.alternate, k2 = h2 !== null && h2.memoizedState !== null || S$1;
        h2 = Hj;
        var l2 = S$1;
        Hj = g2;
        if ((S$1 = k2) && !l2)
          for (T$1 = e2; T$1 !== null; )
            g2 = T$1, k2 = g2.child, g2.tag === 22 && g2.memoizedState !== null ? hk(e2) : k2 !== null ? (k2.return = g2, T$1 = k2) : hk(e2);
        for (; f2 !== null; )
          T$1 = f2, gk(f2), f2 = f2.sibling;
        T$1 = e2;
        Hj = h2;
        S$1 = l2;
      }
      ik(a2);
    } else
      (e2.subtreeFlags & 8772) !== 0 && f2 !== null ? (f2.return = e2, T$1 = f2) : ik(a2);
  }
}
function ik(a2) {
  for (; T$1 !== null; ) {
    var b2 = T$1;
    if ((b2.flags & 8772) !== 0) {
      var c2 = b2.alternate;
      try {
        if ((b2.flags & 8772) !== 0)
          switch (b2.tag) {
            case 0:
            case 11:
            case 15:
              S$1 || Oj(5, b2);
              break;
            case 1:
              var d2 = b2.stateNode;
              if (b2.flags & 4 && !S$1)
                if (c2 === null)
                  d2.componentDidMount();
                else {
                  var e2 = b2.elementType === b2.type ? c2.memoizedProps : kg(b2.type, c2.memoizedProps);
                  d2.componentDidUpdate(e2, c2.memoizedState, d2.__reactInternalSnapshotBeforeUpdate);
                }
              var f2 = b2.updateQueue;
              f2 !== null && Gg(b2, f2, d2);
              break;
            case 3:
              var g2 = b2.updateQueue;
              if (g2 !== null) {
                c2 = null;
                if (b2.child !== null)
                  switch (b2.child.tag) {
                    case 5:
                      c2 = b2.child.stateNode;
                      break;
                    case 1:
                      c2 = b2.child.stateNode;
                  }
                Gg(b2, g2, c2);
              }
              break;
            case 5:
              var h2 = b2.stateNode;
              if (c2 === null && b2.flags & 4) {
                c2 = h2;
                var k2 = b2.memoizedProps;
                switch (b2.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    k2.autoFocus && c2.focus();
                    break;
                  case "img":
                    k2.src && (c2.src = k2.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (b2.memoizedState === null) {
                var l2 = b2.alternate;
                if (l2 !== null) {
                  var n2 = l2.memoizedState;
                  if (n2 !== null) {
                    var u2 = n2.dehydrated;
                    u2 !== null && ad(u2);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
              break;
            default:
              throw Error(p$6(163));
          }
        S$1 || b2.flags & 512 && Pj(b2);
      } catch (q2) {
        U$1(b2, b2.return, q2);
      }
    }
    if (b2 === a2) {
      T$1 = null;
      break;
    }
    c2 = b2.sibling;
    if (c2 !== null) {
      c2.return = b2.return;
      T$1 = c2;
      break;
    }
    T$1 = b2.return;
  }
}
function ek(a2) {
  for (; T$1 !== null; ) {
    var b2 = T$1;
    if (b2 === a2) {
      T$1 = null;
      break;
    }
    var c2 = b2.sibling;
    if (c2 !== null) {
      c2.return = b2.return;
      T$1 = c2;
      break;
    }
    T$1 = b2.return;
  }
}
function hk(a2) {
  for (; T$1 !== null; ) {
    var b2 = T$1;
    try {
      switch (b2.tag) {
        case 0:
        case 11:
        case 15:
          var c2 = b2.return;
          try {
            Oj(4, b2);
          } catch (k2) {
            U$1(b2, c2, k2);
          }
          break;
        case 1:
          var d2 = b2.stateNode;
          if (typeof d2.componentDidMount === "function") {
            var e2 = b2.return;
            try {
              d2.componentDidMount();
            } catch (k2) {
              U$1(b2, e2, k2);
            }
          }
          var f2 = b2.return;
          try {
            Pj(b2);
          } catch (k2) {
            U$1(b2, f2, k2);
          }
          break;
        case 5:
          var g2 = b2.return;
          try {
            Pj(b2);
          } catch (k2) {
            U$1(b2, g2, k2);
          }
      }
    } catch (k2) {
      U$1(b2, b2.return, k2);
    }
    if (b2 === a2) {
      T$1 = null;
      break;
    }
    var h2 = b2.sibling;
    if (h2 !== null) {
      h2.return = b2.return;
      T$1 = h2;
      break;
    }
    T$1 = b2.return;
  }
}
var jk = Math.ceil, kk = ta.ReactCurrentDispatcher, lk = ta.ReactCurrentOwner, mk = ta.ReactCurrentBatchConfig, W$1 = 0, P$1 = null, X$1 = null, Y = 0, cj = 0, mj = Tf(0), R$1 = 0, nk = null, Fg = 0, ok = 0, pk = 0, qk = null, rk = null, dk = 0, aj = Infinity, sk = null, Li = false, Mi = null, Oi = null, tk = false, uk = null, vk = 0, wk = 0, xk = null, yk = -1, zk = 0;
function Jg() {
  return (W$1 & 6) !== 0 ? B$1() : yk !== -1 ? yk : yk = B$1();
}
function Kg(a2) {
  if ((a2.mode & 1) === 0)
    return 1;
  if ((W$1 & 2) !== 0 && Y !== 0)
    return Y & -Y;
  if (jg.transition !== null)
    return zk === 0 && (zk = xc()), zk;
  a2 = C;
  if (a2 !== 0)
    return a2;
  a2 = window.event;
  a2 = a2 === void 0 ? 16 : id(a2.type);
  return a2;
}
function Lg(a2, b2, c2) {
  if (50 < wk)
    throw wk = 0, xk = null, Error(p$6(185));
  var d2 = Ak(a2, b2);
  if (d2 === null)
    return null;
  zc(d2, b2, c2);
  if ((W$1 & 2) === 0 || d2 !== P$1)
    d2 === P$1 && ((W$1 & 2) === 0 && (ok |= b2), R$1 === 4 && Bk(d2, Y)), Ck(d2, c2), b2 === 1 && W$1 === 0 && (a2.mode & 1) === 0 && (aj = B$1() + 500, eg && ig());
  return d2;
}
function Ak(a2, b2) {
  a2.lanes |= b2;
  var c2 = a2.alternate;
  c2 !== null && (c2.lanes |= b2);
  c2 = a2;
  for (a2 = a2.return; a2 !== null; )
    a2.childLanes |= b2, c2 = a2.alternate, c2 !== null && (c2.childLanes |= b2), c2 = a2, a2 = a2.return;
  return c2.tag === 3 ? c2.stateNode : null;
}
function Bg(a2) {
  return (P$1 !== null || vg !== null) && (a2.mode & 1) !== 0 && (W$1 & 2) === 0;
}
function Ck(a2, b2) {
  var c2 = a2.callbackNode;
  vc(a2, b2);
  var d2 = tc(a2, a2 === P$1 ? Y : 0);
  if (d2 === 0)
    c2 !== null && ac(c2), a2.callbackNode = null, a2.callbackPriority = 0;
  else if (b2 = d2 & -d2, a2.callbackPriority !== b2) {
    c2 != null && ac(c2);
    if (b2 === 1)
      a2.tag === 0 ? hg(Dk.bind(null, a2)) : gg(Dk.bind(null, a2)), If(function() {
        W$1 === 0 && ig();
      }), c2 = null;
    else {
      switch (Cc(d2)) {
        case 1:
          c2 = ec;
          break;
        case 4:
          c2 = fc;
          break;
        case 16:
          c2 = gc;
          break;
        case 536870912:
          c2 = ic;
          break;
        default:
          c2 = gc;
      }
      c2 = Ek(c2, Fk.bind(null, a2));
    }
    a2.callbackPriority = b2;
    a2.callbackNode = c2;
  }
}
function Fk(a2, b2) {
  yk = -1;
  zk = 0;
  if ((W$1 & 6) !== 0)
    throw Error(p$6(327));
  var c2 = a2.callbackNode;
  if (Gk() && a2.callbackNode !== c2)
    return null;
  var d2 = tc(a2, a2 === P$1 ? Y : 0);
  if (d2 === 0)
    return null;
  if ((d2 & 30) !== 0 || (d2 & a2.expiredLanes) !== 0 || b2)
    b2 = Hk(a2, d2);
  else {
    b2 = d2;
    var e2 = W$1;
    W$1 |= 2;
    var f2 = Ik();
    if (P$1 !== a2 || Y !== b2)
      sk = null, aj = B$1() + 500, Jk(a2, b2);
    do
      try {
        Kk();
        break;
      } catch (h2) {
        Lk(a2, h2);
      }
    while (1);
    pg();
    kk.current = f2;
    W$1 = e2;
    X$1 !== null ? b2 = 0 : (P$1 = null, Y = 0, b2 = R$1);
  }
  if (b2 !== 0) {
    b2 === 2 && (e2 = wc(a2), e2 !== 0 && (d2 = e2, b2 = Mk(a2, e2)));
    if (b2 === 1)
      throw c2 = nk, Jk(a2, 0), Bk(a2, d2), Ck(a2, B$1()), c2;
    if (b2 === 6)
      Bk(a2, d2);
    else {
      e2 = a2.current.alternate;
      if ((d2 & 30) === 0 && !Nk(e2) && (b2 = Hk(a2, d2), b2 === 2 && (f2 = wc(a2), f2 !== 0 && (d2 = f2, b2 = Mk(a2, f2))), b2 === 1))
        throw c2 = nk, Jk(a2, 0), Bk(a2, d2), Ck(a2, B$1()), c2;
      a2.finishedWork = e2;
      a2.finishedLanes = d2;
      switch (b2) {
        case 0:
        case 1:
          throw Error(p$6(345));
        case 2:
          Ok(a2, rk, sk);
          break;
        case 3:
          Bk(a2, d2);
          if ((d2 & 130023424) === d2 && (b2 = dk + 500 - B$1(), 10 < b2)) {
            if (tc(a2, 0) !== 0)
              break;
            e2 = a2.suspendedLanes;
            if ((e2 & d2) !== d2) {
              Jg();
              a2.pingedLanes |= a2.suspendedLanes & e2;
              break;
            }
            a2.timeoutHandle = Ef(Ok.bind(null, a2, rk, sk), b2);
            break;
          }
          Ok(a2, rk, sk);
          break;
        case 4:
          Bk(a2, d2);
          if ((d2 & 4194240) === d2)
            break;
          b2 = a2.eventTimes;
          for (e2 = -1; 0 < d2; ) {
            var g2 = 31 - nc(d2);
            f2 = 1 << g2;
            g2 = b2[g2];
            g2 > e2 && (e2 = g2);
            d2 &= ~f2;
          }
          d2 = e2;
          d2 = B$1() - d2;
          d2 = (120 > d2 ? 120 : 480 > d2 ? 480 : 1080 > d2 ? 1080 : 1920 > d2 ? 1920 : 3e3 > d2 ? 3e3 : 4320 > d2 ? 4320 : 1960 * jk(d2 / 1960)) - d2;
          if (10 < d2) {
            a2.timeoutHandle = Ef(Ok.bind(null, a2, rk, sk), d2);
            break;
          }
          Ok(a2, rk, sk);
          break;
        case 5:
          Ok(a2, rk, sk);
          break;
        default:
          throw Error(p$6(329));
      }
    }
  }
  Ck(a2, B$1());
  return a2.callbackNode === c2 ? Fk.bind(null, a2) : null;
}
function Mk(a2, b2) {
  var c2 = qk;
  a2.current.memoizedState.isDehydrated && (Jk(a2, b2).flags |= 256);
  a2 = Hk(a2, b2);
  a2 !== 2 && (b2 = rk, rk = c2, b2 !== null && Zi(b2));
  return a2;
}
function Zi(a2) {
  rk === null ? rk = a2 : rk.push.apply(rk, a2);
}
function Nk(a2) {
  for (var b2 = a2; ; ) {
    if (b2.flags & 16384) {
      var c2 = b2.updateQueue;
      if (c2 !== null && (c2 = c2.stores, c2 !== null))
        for (var d2 = 0; d2 < c2.length; d2++) {
          var e2 = c2[d2], f2 = e2.getSnapshot;
          e2 = e2.value;
          try {
            if (!Ge(f2(), e2))
              return false;
          } catch (g2) {
            return false;
          }
        }
    }
    c2 = b2.child;
    if (b2.subtreeFlags & 16384 && c2 !== null)
      c2.return = b2, b2 = c2;
    else {
      if (b2 === a2)
        break;
      for (; b2.sibling === null; ) {
        if (b2.return === null || b2.return === a2)
          return true;
        b2 = b2.return;
      }
      b2.sibling.return = b2.return;
      b2 = b2.sibling;
    }
  }
  return true;
}
function Bk(a2, b2) {
  b2 &= ~pk;
  b2 &= ~ok;
  a2.suspendedLanes |= b2;
  a2.pingedLanes &= ~b2;
  for (a2 = a2.expirationTimes; 0 < b2; ) {
    var c2 = 31 - nc(b2), d2 = 1 << c2;
    a2[c2] = -1;
    b2 &= ~d2;
  }
}
function Dk(a2) {
  if ((W$1 & 6) !== 0)
    throw Error(p$6(327));
  Gk();
  var b2 = tc(a2, 0);
  if ((b2 & 1) === 0)
    return Ck(a2, B$1()), null;
  var c2 = Hk(a2, b2);
  if (a2.tag !== 0 && c2 === 2) {
    var d2 = wc(a2);
    d2 !== 0 && (b2 = d2, c2 = Mk(a2, d2));
  }
  if (c2 === 1)
    throw c2 = nk, Jk(a2, 0), Bk(a2, b2), Ck(a2, B$1()), c2;
  if (c2 === 6)
    throw Error(p$6(345));
  a2.finishedWork = a2.current.alternate;
  a2.finishedLanes = b2;
  Ok(a2, rk, sk);
  Ck(a2, B$1());
  return null;
}
function Pk(a2, b2) {
  var c2 = W$1;
  W$1 |= 1;
  try {
    return a2(b2);
  } finally {
    W$1 = c2, W$1 === 0 && (aj = B$1() + 500, eg && ig());
  }
}
function Qk(a2) {
  uk !== null && uk.tag === 0 && (W$1 & 6) === 0 && Gk();
  var b2 = W$1;
  W$1 |= 1;
  var c2 = mk.transition, d2 = C;
  try {
    if (mk.transition = null, C = 1, a2)
      return a2();
  } finally {
    C = d2, mk.transition = c2, W$1 = b2, (W$1 & 6) === 0 && ig();
  }
}
function bj() {
  cj = mj.current;
  E$1(mj);
}
function Jk(a2, b2) {
  a2.finishedWork = null;
  a2.finishedLanes = 0;
  var c2 = a2.timeoutHandle;
  c2 !== -1 && (a2.timeoutHandle = -1, Ff(c2));
  if (X$1 !== null)
    for (c2 = X$1.return; c2 !== null; ) {
      var d2 = c2;
      ch(d2);
      switch (d2.tag) {
        case 1:
          d2 = d2.type.childContextTypes;
          d2 !== null && d2 !== void 0 && Zf();
          break;
        case 3:
          Gh();
          E$1(Vf);
          E$1(H$1);
          Lh();
          break;
        case 5:
          Ih(d2);
          break;
        case 4:
          Gh();
          break;
        case 13:
          E$1(K);
          break;
        case 19:
          E$1(K);
          break;
        case 10:
          qg(d2.type._context);
          break;
        case 22:
        case 23:
          bj();
      }
      c2 = c2.return;
    }
  P$1 = a2;
  X$1 = a2 = th(a2.current, null);
  Y = cj = b2;
  R$1 = 0;
  nk = null;
  pk = ok = Fg = 0;
  rk = qk = null;
  if (vg !== null) {
    for (b2 = 0; b2 < vg.length; b2++)
      if (c2 = vg[b2], d2 = c2.interleaved, d2 !== null) {
        c2.interleaved = null;
        var e2 = d2.next, f2 = c2.pending;
        if (f2 !== null) {
          var g2 = f2.next;
          f2.next = e2;
          d2.next = g2;
        }
        c2.pending = d2;
      }
    vg = null;
  }
  return a2;
}
function Lk(a2, b2) {
  do {
    var c2 = X$1;
    try {
      pg();
      Mh.current = Yh;
      if (Ph) {
        for (var d2 = L$1.memoizedState; d2 !== null; ) {
          var e2 = d2.queue;
          e2 !== null && (e2.pending = null);
          d2 = d2.next;
        }
        Ph = false;
      }
      Oh = 0;
      N$1 = M$1 = L$1 = null;
      Qh = false;
      Rh = 0;
      lk.current = null;
      if (c2 === null || c2.return === null) {
        R$1 = 1;
        nk = b2;
        X$1 = null;
        break;
      }
      a: {
        var f2 = a2, g2 = c2.return, h2 = c2, k2 = b2;
        b2 = Y;
        h2.flags |= 32768;
        if (k2 !== null && typeof k2 === "object" && typeof k2.then === "function") {
          var l2 = k2, n2 = h2, u2 = n2.tag;
          if ((n2.mode & 1) === 0 && (u2 === 0 || u2 === 11 || u2 === 15)) {
            var q2 = n2.alternate;
            q2 ? (n2.updateQueue = q2.updateQueue, n2.memoizedState = q2.memoizedState, n2.lanes = q2.lanes) : (n2.updateQueue = null, n2.memoizedState = null);
          }
          var y2 = Ri(g2);
          if (y2 !== null) {
            y2.flags &= -257;
            Si(y2, g2, h2, f2, b2);
            y2.mode & 1 && Pi(f2, l2, b2);
            b2 = y2;
            k2 = l2;
            var m2 = b2.updateQueue;
            if (m2 === null) {
              var w2 = /* @__PURE__ */ new Set();
              w2.add(k2);
              b2.updateQueue = w2;
            } else
              m2.add(k2);
            break a;
          } else {
            if ((b2 & 1) === 0) {
              Pi(f2, l2, b2);
              $i();
              break a;
            }
            k2 = Error(p$6(426));
          }
        } else if (I$1 && h2.mode & 1) {
          var J2 = Ri(g2);
          if (J2 !== null) {
            (J2.flags & 65536) === 0 && (J2.flags |= 256);
            Si(J2, g2, h2, f2, b2);
            oh(k2);
            break a;
          }
        }
        f2 = k2;
        R$1 !== 4 && (R$1 = 2);
        qk === null ? qk = [f2] : qk.push(f2);
        k2 = Hi(k2, h2);
        h2 = g2;
        do {
          switch (h2.tag) {
            case 3:
              h2.flags |= 65536;
              b2 &= -b2;
              h2.lanes |= b2;
              var v2 = Ki(h2, k2, b2);
              Dg(h2, v2);
              break a;
            case 1:
              f2 = k2;
              var x2 = h2.type, r2 = h2.stateNode;
              if ((h2.flags & 128) === 0 && (typeof x2.getDerivedStateFromError === "function" || r2 !== null && typeof r2.componentDidCatch === "function" && (Oi === null || !Oi.has(r2)))) {
                h2.flags |= 65536;
                b2 &= -b2;
                h2.lanes |= b2;
                var F2 = Ni(h2, f2, b2);
                Dg(h2, F2);
                break a;
              }
          }
          h2 = h2.return;
        } while (h2 !== null);
      }
      Rk(c2);
    } catch (Z2) {
      b2 = Z2;
      X$1 === c2 && c2 !== null && (X$1 = c2 = c2.return);
      continue;
    }
    break;
  } while (1);
}
function Ik() {
  var a2 = kk.current;
  kk.current = Yh;
  return a2 === null ? Yh : a2;
}
function $i() {
  if (R$1 === 0 || R$1 === 3 || R$1 === 2)
    R$1 = 4;
  P$1 === null || (Fg & 268435455) === 0 && (ok & 268435455) === 0 || Bk(P$1, Y);
}
function Hk(a2, b2) {
  var c2 = W$1;
  W$1 |= 2;
  var d2 = Ik();
  if (P$1 !== a2 || Y !== b2)
    sk = null, Jk(a2, b2);
  do
    try {
      Sk();
      break;
    } catch (e2) {
      Lk(a2, e2);
    }
  while (1);
  pg();
  W$1 = c2;
  kk.current = d2;
  if (X$1 !== null)
    throw Error(p$6(261));
  P$1 = null;
  Y = 0;
  return R$1;
}
function Sk() {
  for (; X$1 !== null; )
    Tk(X$1);
}
function Kk() {
  for (; X$1 !== null && !bc(); )
    Tk(X$1);
}
function Tk(a2) {
  var b2 = Uk(a2.alternate, a2, cj);
  a2.memoizedProps = a2.pendingProps;
  b2 === null ? Rk(a2) : X$1 = b2;
  lk.current = null;
}
function Rk(a2) {
  var b2 = a2;
  do {
    var c2 = b2.alternate;
    a2 = b2.return;
    if ((b2.flags & 32768) === 0) {
      if (c2 = Yi(c2, b2, cj), c2 !== null) {
        X$1 = c2;
        return;
      }
    } else {
      c2 = Gj(c2, b2);
      if (c2 !== null) {
        c2.flags &= 32767;
        X$1 = c2;
        return;
      }
      if (a2 !== null)
        a2.flags |= 32768, a2.subtreeFlags = 0, a2.deletions = null;
      else {
        R$1 = 6;
        X$1 = null;
        return;
      }
    }
    b2 = b2.sibling;
    if (b2 !== null) {
      X$1 = b2;
      return;
    }
    X$1 = b2 = a2;
  } while (b2 !== null);
  R$1 === 0 && (R$1 = 5);
}
function Ok(a2, b2, c2) {
  var d2 = C, e2 = mk.transition;
  try {
    mk.transition = null, C = 1, Vk(a2, b2, c2, d2);
  } finally {
    mk.transition = e2, C = d2;
  }
  return null;
}
function Vk(a2, b2, c2, d2) {
  do
    Gk();
  while (uk !== null);
  if ((W$1 & 6) !== 0)
    throw Error(p$6(327));
  c2 = a2.finishedWork;
  var e2 = a2.finishedLanes;
  if (c2 === null)
    return null;
  a2.finishedWork = null;
  a2.finishedLanes = 0;
  if (c2 === a2.current)
    throw Error(p$6(177));
  a2.callbackNode = null;
  a2.callbackPriority = 0;
  var f2 = c2.lanes | c2.childLanes;
  Ac(a2, f2);
  a2 === P$1 && (X$1 = P$1 = null, Y = 0);
  (c2.subtreeFlags & 2064) === 0 && (c2.flags & 2064) === 0 || tk || (tk = true, Ek(gc, function() {
    Gk();
    return null;
  }));
  f2 = (c2.flags & 15990) !== 0;
  if ((c2.subtreeFlags & 15990) !== 0 || f2) {
    f2 = mk.transition;
    mk.transition = null;
    var g2 = C;
    C = 1;
    var h2 = W$1;
    W$1 |= 4;
    lk.current = null;
    Mj(a2, c2);
    bk(c2, a2);
    Ne(Cf);
    cd = !!Bf;
    Cf = Bf = null;
    a2.current = c2;
    fk(c2);
    cc();
    W$1 = h2;
    C = g2;
    mk.transition = f2;
  } else
    a2.current = c2;
  tk && (tk = false, uk = a2, vk = e2);
  f2 = a2.pendingLanes;
  f2 === 0 && (Oi = null);
  lc(c2.stateNode);
  Ck(a2, B$1());
  if (b2 !== null)
    for (d2 = a2.onRecoverableError, c2 = 0; c2 < b2.length; c2++)
      d2(b2[c2]);
  if (Li)
    throw Li = false, a2 = Mi, Mi = null, a2;
  (vk & 1) !== 0 && a2.tag !== 0 && Gk();
  f2 = a2.pendingLanes;
  (f2 & 1) !== 0 ? a2 === xk ? wk++ : (wk = 0, xk = a2) : wk = 0;
  ig();
  return null;
}
function Gk() {
  if (uk !== null) {
    var a2 = Cc(vk), b2 = mk.transition, c2 = C;
    try {
      mk.transition = null;
      C = 16 > a2 ? 16 : a2;
      if (uk === null)
        var d2 = false;
      else {
        a2 = uk;
        uk = null;
        vk = 0;
        if ((W$1 & 6) !== 0)
          throw Error(p$6(331));
        var e2 = W$1;
        W$1 |= 4;
        for (T$1 = a2.current; T$1 !== null; ) {
          var f2 = T$1, g2 = f2.child;
          if ((T$1.flags & 16) !== 0) {
            var h2 = f2.deletions;
            if (h2 !== null) {
              for (var k2 = 0; k2 < h2.length; k2++) {
                var l2 = h2[k2];
                for (T$1 = l2; T$1 !== null; ) {
                  var n2 = T$1;
                  switch (n2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Nj(8, n2, f2);
                  }
                  var u2 = n2.child;
                  if (u2 !== null)
                    u2.return = n2, T$1 = u2;
                  else
                    for (; T$1 !== null; ) {
                      n2 = T$1;
                      var q2 = n2.sibling, y2 = n2.return;
                      Qj(n2);
                      if (n2 === l2) {
                        T$1 = null;
                        break;
                      }
                      if (q2 !== null) {
                        q2.return = y2;
                        T$1 = q2;
                        break;
                      }
                      T$1 = y2;
                    }
                }
              }
              var m2 = f2.alternate;
              if (m2 !== null) {
                var w2 = m2.child;
                if (w2 !== null) {
                  m2.child = null;
                  do {
                    var J2 = w2.sibling;
                    w2.sibling = null;
                    w2 = J2;
                  } while (w2 !== null);
                }
              }
              T$1 = f2;
            }
          }
          if ((f2.subtreeFlags & 2064) !== 0 && g2 !== null)
            g2.return = f2, T$1 = g2;
          else
            b:
              for (; T$1 !== null; ) {
                f2 = T$1;
                if ((f2.flags & 2048) !== 0)
                  switch (f2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Nj(9, f2, f2.return);
                  }
                var v2 = f2.sibling;
                if (v2 !== null) {
                  v2.return = f2.return;
                  T$1 = v2;
                  break b;
                }
                T$1 = f2.return;
              }
        }
        var x2 = a2.current;
        for (T$1 = x2; T$1 !== null; ) {
          g2 = T$1;
          var r2 = g2.child;
          if ((g2.subtreeFlags & 2064) !== 0 && r2 !== null)
            r2.return = g2, T$1 = r2;
          else
            b:
              for (g2 = x2; T$1 !== null; ) {
                h2 = T$1;
                if ((h2.flags & 2048) !== 0)
                  try {
                    switch (h2.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Oj(9, h2);
                    }
                  } catch (Z2) {
                    U$1(h2, h2.return, Z2);
                  }
                if (h2 === g2) {
                  T$1 = null;
                  break b;
                }
                var F2 = h2.sibling;
                if (F2 !== null) {
                  F2.return = h2.return;
                  T$1 = F2;
                  break b;
                }
                T$1 = h2.return;
              }
        }
        W$1 = e2;
        ig();
        if (kc && typeof kc.onPostCommitFiberRoot === "function")
          try {
            kc.onPostCommitFiberRoot(jc, a2);
          } catch (Z2) {
          }
        d2 = true;
      }
      return d2;
    } finally {
      C = c2, mk.transition = b2;
    }
  }
  return false;
}
function Wk(a2, b2, c2) {
  b2 = Hi(c2, b2);
  b2 = Ki(a2, b2, 1);
  Ag(a2, b2);
  b2 = Jg();
  a2 = Ak(a2, 1);
  a2 !== null && (zc(a2, 1, b2), Ck(a2, b2));
}
function U$1(a2, b2, c2) {
  if (a2.tag === 3)
    Wk(a2, a2, c2);
  else
    for (; b2 !== null; ) {
      if (b2.tag === 3) {
        Wk(b2, a2, c2);
        break;
      } else if (b2.tag === 1) {
        var d2 = b2.stateNode;
        if (typeof b2.type.getDerivedStateFromError === "function" || typeof d2.componentDidCatch === "function" && (Oi === null || !Oi.has(d2))) {
          a2 = Hi(c2, a2);
          a2 = Ni(b2, a2, 1);
          Ag(b2, a2);
          a2 = Jg();
          b2 = Ak(b2, 1);
          b2 !== null && (zc(b2, 1, a2), Ck(b2, a2));
          break;
        }
      }
      b2 = b2.return;
    }
}
function Qi(a2, b2, c2) {
  var d2 = a2.pingCache;
  d2 !== null && d2.delete(b2);
  b2 = Jg();
  a2.pingedLanes |= a2.suspendedLanes & c2;
  P$1 === a2 && (Y & c2) === c2 && (R$1 === 4 || R$1 === 3 && (Y & 130023424) === Y && 500 > B$1() - dk ? Jk(a2, 0) : pk |= c2);
  Ck(a2, b2);
}
function Xk(a2, b2) {
  b2 === 0 && ((a2.mode & 1) === 0 ? b2 = 1 : (b2 = rc, rc <<= 1, (rc & 130023424) === 0 && (rc = 4194304)));
  var c2 = Jg();
  a2 = Ak(a2, b2);
  a2 !== null && (zc(a2, b2, c2), Ck(a2, c2));
}
function zj(a2) {
  var b2 = a2.memoizedState, c2 = 0;
  b2 !== null && (c2 = b2.retryLane);
  Xk(a2, c2);
}
function Zj(a2, b2) {
  var c2 = 0;
  switch (a2.tag) {
    case 13:
      var d2 = a2.stateNode;
      var e2 = a2.memoizedState;
      e2 !== null && (c2 = e2.retryLane);
      break;
    case 19:
      d2 = a2.stateNode;
      break;
    default:
      throw Error(p$6(314));
  }
  d2 !== null && d2.delete(b2);
  Xk(a2, c2);
}
var Uk;
Uk = function(a2, b2, c2) {
  if (a2 !== null)
    if (a2.memoizedProps !== b2.pendingProps || Vf.current)
      tg = true;
    else {
      if ((a2.lanes & c2) === 0 && (b2.flags & 128) === 0)
        return tg = false, Fj(a2, b2, c2);
      tg = (a2.flags & 131072) !== 0 ? true : false;
    }
  else
    tg = false, I$1 && (b2.flags & 1048576) !== 0 && ah(b2, Ug, b2.index);
  b2.lanes = 0;
  switch (b2.tag) {
    case 2:
      var d2 = b2.type;
      a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2);
      a2 = b2.pendingProps;
      var e2 = Xf(b2, H$1.current);
      sg(b2, c2);
      e2 = Uh(null, b2, d2, a2, e2, c2);
      var f2 = Zh();
      b2.flags |= 1;
      typeof e2 === "object" && e2 !== null && typeof e2.render === "function" && e2.$$typeof === void 0 ? (b2.tag = 1, b2.memoizedState = null, b2.updateQueue = null, Yf(d2) ? (f2 = true, bg(b2)) : f2 = false, b2.memoizedState = e2.state !== null && e2.state !== void 0 ? e2.state : null, xg(b2), e2.updater = Mg, b2.stateNode = e2, e2._reactInternals = b2, Qg(b2, d2, a2, c2), b2 = pj(null, b2, d2, true, f2, c2)) : (b2.tag = 0, I$1 && f2 && bh(b2), ej(null, b2, e2, c2), b2 = b2.child);
      return b2;
    case 16:
      d2 = b2.elementType;
      a: {
        a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2);
        a2 = b2.pendingProps;
        e2 = d2._init;
        d2 = e2(d2._payload);
        b2.type = d2;
        e2 = b2.tag = Yk(d2);
        a2 = kg(d2, a2);
        switch (e2) {
          case 0:
            b2 = kj(null, b2, d2, a2, c2);
            break a;
          case 1:
            b2 = oj(null, b2, d2, a2, c2);
            break a;
          case 11:
            b2 = fj(null, b2, d2, a2, c2);
            break a;
          case 14:
            b2 = hj(null, b2, d2, kg(d2.type, a2), c2);
            break a;
        }
        throw Error(p$6(306, d2, ""));
      }
      return b2;
    case 0:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : kg(d2, e2), kj(a2, b2, d2, e2, c2);
    case 1:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : kg(d2, e2), oj(a2, b2, d2, e2, c2);
    case 3:
      a: {
        qj(b2);
        if (a2 === null)
          throw Error(p$6(387));
        d2 = b2.pendingProps;
        f2 = b2.memoizedState;
        e2 = f2.element;
        yg(a2, b2);
        Eg(b2, d2, null, c2);
        var g2 = b2.memoizedState;
        d2 = g2.element;
        if (f2.isDehydrated)
          if (f2 = {
            element: d2,
            isDehydrated: false,
            cache: g2.cache,
            pendingSuspenseBoundaries: g2.pendingSuspenseBoundaries,
            transitions: g2.transitions
          }, b2.updateQueue.baseState = f2, b2.memoizedState = f2, b2.flags & 256) {
            e2 = Error(p$6(423));
            b2 = rj(a2, b2, d2, c2, e2);
            break a;
          } else if (d2 !== e2) {
            e2 = Error(p$6(424));
            b2 = rj(a2, b2, d2, c2, e2);
            break a;
          } else
            for (eh = Kf(b2.stateNode.containerInfo.firstChild), dh = b2, I$1 = true, fh = null, c2 = zh(b2, null, d2, c2), b2.child = c2; c2; )
              c2.flags = c2.flags & -3 | 4096, c2 = c2.sibling;
        else {
          nh();
          if (d2 === e2) {
            b2 = gj(a2, b2, c2);
            break a;
          }
          ej(a2, b2, d2, c2);
        }
        b2 = b2.child;
      }
      return b2;
    case 5:
      return Hh(b2), a2 === null && kh(b2), d2 = b2.type, e2 = b2.pendingProps, f2 = a2 !== null ? a2.memoizedProps : null, g2 = e2.children, Df(d2, e2) ? g2 = null : f2 !== null && Df(d2, f2) && (b2.flags |= 32), nj(a2, b2), ej(a2, b2, g2, c2), b2.child;
    case 6:
      return a2 === null && kh(b2), null;
    case 13:
      return vj(a2, b2, c2);
    case 4:
      return Fh(b2, b2.stateNode.containerInfo), d2 = b2.pendingProps, a2 === null ? b2.child = yh(b2, null, d2, c2) : ej(a2, b2, d2, c2), b2.child;
    case 11:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : kg(d2, e2), fj(a2, b2, d2, e2, c2);
    case 7:
      return ej(a2, b2, b2.pendingProps, c2), b2.child;
    case 8:
      return ej(a2, b2, b2.pendingProps.children, c2), b2.child;
    case 12:
      return ej(a2, b2, b2.pendingProps.children, c2), b2.child;
    case 10:
      a: {
        d2 = b2.type._context;
        e2 = b2.pendingProps;
        f2 = b2.memoizedProps;
        g2 = e2.value;
        G$1(lg, d2._currentValue);
        d2._currentValue = g2;
        if (f2 !== null)
          if (Ge(f2.value, g2)) {
            if (f2.children === e2.children && !Vf.current) {
              b2 = gj(a2, b2, c2);
              break a;
            }
          } else
            for (f2 = b2.child, f2 !== null && (f2.return = b2); f2 !== null; ) {
              var h2 = f2.dependencies;
              if (h2 !== null) {
                g2 = f2.child;
                for (var k2 = h2.firstContext; k2 !== null; ) {
                  if (k2.context === d2) {
                    if (f2.tag === 1) {
                      k2 = zg(-1, c2 & -c2);
                      k2.tag = 2;
                      var l2 = f2.updateQueue;
                      if (l2 !== null) {
                        l2 = l2.shared;
                        var n2 = l2.pending;
                        n2 === null ? k2.next = k2 : (k2.next = n2.next, n2.next = k2);
                        l2.pending = k2;
                      }
                    }
                    f2.lanes |= c2;
                    k2 = f2.alternate;
                    k2 !== null && (k2.lanes |= c2);
                    rg(f2.return, c2, b2);
                    h2.lanes |= c2;
                    break;
                  }
                  k2 = k2.next;
                }
              } else if (f2.tag === 10)
                g2 = f2.type === b2.type ? null : f2.child;
              else if (f2.tag === 18) {
                g2 = f2.return;
                if (g2 === null)
                  throw Error(p$6(341));
                g2.lanes |= c2;
                h2 = g2.alternate;
                h2 !== null && (h2.lanes |= c2);
                rg(g2, c2, b2);
                g2 = f2.sibling;
              } else
                g2 = f2.child;
              if (g2 !== null)
                g2.return = f2;
              else
                for (g2 = f2; g2 !== null; ) {
                  if (g2 === b2) {
                    g2 = null;
                    break;
                  }
                  f2 = g2.sibling;
                  if (f2 !== null) {
                    f2.return = g2.return;
                    g2 = f2;
                    break;
                  }
                  g2 = g2.return;
                }
              f2 = g2;
            }
        ej(a2, b2, e2.children, c2);
        b2 = b2.child;
      }
      return b2;
    case 9:
      return e2 = b2.type, d2 = b2.pendingProps.children, sg(b2, c2), e2 = ug(e2), d2 = d2(e2), b2.flags |= 1, ej(a2, b2, d2, c2), b2.child;
    case 14:
      return d2 = b2.type, e2 = kg(d2, b2.pendingProps), e2 = kg(d2.type, e2), hj(a2, b2, d2, e2, c2);
    case 15:
      return jj(a2, b2, b2.type, b2.pendingProps, c2);
    case 17:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : kg(d2, e2), a2 !== null && (a2.alternate = null, b2.alternate = null, b2.flags |= 2), b2.tag = 1, Yf(d2) ? (a2 = true, bg(b2)) : a2 = false, sg(b2, c2), Og(b2, d2, e2), Qg(b2, d2, e2, c2), pj(null, b2, d2, true, a2, c2);
    case 19:
      return Ej(a2, b2, c2);
    case 22:
      return lj(a2, b2, c2);
  }
  throw Error(p$6(156, b2.tag));
};
function Ek(a2, b2) {
  return $b(a2, b2);
}
function Zk(a2, b2, c2, d2) {
  this.tag = a2;
  this.key = c2;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b2;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d2;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function hh(a2, b2, c2, d2) {
  return new Zk(a2, b2, c2, d2);
}
function ij(a2) {
  a2 = a2.prototype;
  return !(!a2 || !a2.isReactComponent);
}
function Yk(a2) {
  if (typeof a2 === "function")
    return ij(a2) ? 1 : 0;
  if (a2 !== void 0 && a2 !== null) {
    a2 = a2.$$typeof;
    if (a2 === Ca)
      return 11;
    if (a2 === Fa)
      return 14;
  }
  return 2;
}
function th(a2, b2) {
  var c2 = a2.alternate;
  c2 === null ? (c2 = hh(a2.tag, b2, a2.key, a2.mode), c2.elementType = a2.elementType, c2.type = a2.type, c2.stateNode = a2.stateNode, c2.alternate = a2, a2.alternate = c2) : (c2.pendingProps = b2, c2.type = a2.type, c2.flags = 0, c2.subtreeFlags = 0, c2.deletions = null);
  c2.flags = a2.flags & 14680064;
  c2.childLanes = a2.childLanes;
  c2.lanes = a2.lanes;
  c2.child = a2.child;
  c2.memoizedProps = a2.memoizedProps;
  c2.memoizedState = a2.memoizedState;
  c2.updateQueue = a2.updateQueue;
  b2 = a2.dependencies;
  c2.dependencies = b2 === null ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
  c2.sibling = a2.sibling;
  c2.index = a2.index;
  c2.ref = a2.ref;
  return c2;
}
function vh(a2, b2, c2, d2, e2, f2) {
  var g2 = 2;
  d2 = a2;
  if (typeof a2 === "function")
    ij(a2) && (g2 = 1);
  else if (typeof a2 === "string")
    g2 = 5;
  else
    a:
      switch (a2) {
        case wa:
          return xh(c2.children, e2, f2, b2);
        case xa:
          g2 = 8;
          e2 |= 8;
          break;
        case za:
          return a2 = hh(12, c2, b2, e2 | 2), a2.elementType = za, a2.lanes = f2, a2;
        case Da:
          return a2 = hh(13, c2, b2, e2), a2.elementType = Da, a2.lanes = f2, a2;
        case Ea:
          return a2 = hh(19, c2, b2, e2), a2.elementType = Ea, a2.lanes = f2, a2;
        case Ha:
          return wj(c2, e2, f2, b2);
        default:
          if (typeof a2 === "object" && a2 !== null)
            switch (a2.$$typeof) {
              case Aa:
                g2 = 10;
                break a;
              case Ba:
                g2 = 9;
                break a;
              case Ca:
                g2 = 11;
                break a;
              case Fa:
                g2 = 14;
                break a;
              case Ga:
                g2 = 16;
                d2 = null;
                break a;
            }
          throw Error(p$6(130, a2 == null ? a2 : typeof a2, ""));
      }
  b2 = hh(g2, c2, b2, e2);
  b2.elementType = a2;
  b2.type = d2;
  b2.lanes = f2;
  return b2;
}
function xh(a2, b2, c2, d2) {
  a2 = hh(7, a2, d2, b2);
  a2.lanes = c2;
  return a2;
}
function wj(a2, b2, c2, d2) {
  a2 = hh(22, a2, d2, b2);
  a2.elementType = Ha;
  a2.lanes = c2;
  a2.stateNode = {};
  return a2;
}
function uh(a2, b2, c2) {
  a2 = hh(6, a2, null, b2);
  a2.lanes = c2;
  return a2;
}
function wh(a2, b2, c2) {
  b2 = hh(4, a2.children !== null ? a2.children : [], a2.key, b2);
  b2.lanes = c2;
  b2.stateNode = { containerInfo: a2.containerInfo, pendingChildren: null, implementation: a2.implementation };
  return b2;
}
function $k(a2, b2, c2, d2, e2) {
  this.tag = b2;
  this.containerInfo = a2;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = yc(0);
  this.expirationTimes = yc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = yc(0);
  this.identifierPrefix = d2;
  this.onRecoverableError = e2;
  this.mutableSourceEagerHydrationData = null;
}
function al(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  a2 = new $k(a2, b2, c2, h2, k2);
  b2 === 1 ? (b2 = 1, f2 === true && (b2 |= 8)) : b2 = 0;
  f2 = hh(3, null, null, b2);
  a2.current = f2;
  f2.stateNode = a2;
  f2.memoizedState = { element: d2, isDehydrated: c2, cache: null, transitions: null, pendingSuspenseBoundaries: null };
  xg(f2);
  return a2;
}
function bl(a2, b2, c2) {
  var d2 = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: va, key: d2 == null ? null : "" + d2, children: a2, containerInfo: b2, implementation: c2 };
}
function cl(a2) {
  if (!a2)
    return Uf;
  a2 = a2._reactInternals;
  a: {
    if (Ub(a2) !== a2 || a2.tag !== 1)
      throw Error(p$6(170));
    var b2 = a2;
    do {
      switch (b2.tag) {
        case 3:
          b2 = b2.stateNode.context;
          break a;
        case 1:
          if (Yf(b2.type)) {
            b2 = b2.stateNode.__reactInternalMemoizedMergedChildContext;
            break a;
          }
      }
      b2 = b2.return;
    } while (b2 !== null);
    throw Error(p$6(171));
  }
  if (a2.tag === 1) {
    var c2 = a2.type;
    if (Yf(c2))
      return ag(a2, c2, b2);
  }
  return b2;
}
function dl(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  a2 = al(c2, d2, true, a2, e2, f2, g2, h2, k2);
  a2.context = cl(null);
  c2 = a2.current;
  d2 = Jg();
  e2 = Kg(c2);
  f2 = zg(d2, e2);
  f2.callback = b2 !== void 0 && b2 !== null ? b2 : null;
  Ag(c2, f2);
  a2.current.lanes = e2;
  zc(a2, e2, d2);
  Ck(a2, d2);
  return a2;
}
function el(a2, b2, c2, d2) {
  var e2 = b2.current, f2 = Jg(), g2 = Kg(e2);
  c2 = cl(c2);
  b2.context === null ? b2.context = c2 : b2.pendingContext = c2;
  b2 = zg(f2, g2);
  b2.payload = { element: a2 };
  d2 = d2 === void 0 ? null : d2;
  d2 !== null && (b2.callback = d2);
  Ag(e2, b2);
  a2 = Lg(e2, g2, f2);
  a2 !== null && Cg(a2, e2, g2);
  return g2;
}
function fl(a2) {
  a2 = a2.current;
  if (!a2.child)
    return null;
  switch (a2.child.tag) {
    case 5:
      return a2.child.stateNode;
    default:
      return a2.child.stateNode;
  }
}
function gl(a2, b2) {
  a2 = a2.memoizedState;
  if (a2 !== null && a2.dehydrated !== null) {
    var c2 = a2.retryLane;
    a2.retryLane = c2 !== 0 && c2 < b2 ? c2 : b2;
  }
}
function hl(a2, b2) {
  gl(a2, b2);
  (a2 = a2.alternate) && gl(a2, b2);
}
function il() {
  return null;
}
var jl = typeof reportError === "function" ? reportError : function(a2) {
  console.error(a2);
};
function kl(a2) {
  this._internalRoot = a2;
}
ll.prototype.render = kl.prototype.render = function(a2) {
  var b2 = this._internalRoot;
  if (b2 === null)
    throw Error(p$6(409));
  el(a2, b2, null, null);
};
ll.prototype.unmount = kl.prototype.unmount = function() {
  var a2 = this._internalRoot;
  if (a2 !== null) {
    this._internalRoot = null;
    var b2 = a2.containerInfo;
    Qk(function() {
      el(null, a2, null, null);
    });
    b2[tf] = null;
  }
};
function ll(a2) {
  this._internalRoot = a2;
}
ll.prototype.unstable_scheduleHydration = function(a2) {
  if (a2) {
    var b2 = Gc();
    a2 = { blockedOn: null, target: a2, priority: b2 };
    for (var c2 = 0; c2 < Pc.length && b2 !== 0 && b2 < Pc[c2].priority; c2++)
      ;
    Pc.splice(c2, 0, a2);
    c2 === 0 && Uc(a2);
  }
};
function ml(a2) {
  return !(!a2 || a2.nodeType !== 1 && a2.nodeType !== 9 && a2.nodeType !== 11);
}
function nl(a2) {
  return !(!a2 || a2.nodeType !== 1 && a2.nodeType !== 9 && a2.nodeType !== 11 && (a2.nodeType !== 8 || a2.nodeValue !== " react-mount-point-unstable "));
}
function ol() {
}
function pl(a2, b2, c2, d2, e2) {
  if (e2) {
    if (typeof d2 === "function") {
      var f2 = d2;
      d2 = function() {
        var a3 = fl(g2);
        f2.call(a3);
      };
    }
    var g2 = dl(b2, d2, a2, 0, null, false, false, "", ol);
    a2._reactRootContainer = g2;
    a2[tf] = g2.current;
    rf(a2.nodeType === 8 ? a2.parentNode : a2);
    Qk();
    return g2;
  }
  for (; e2 = a2.lastChild; )
    a2.removeChild(e2);
  if (typeof d2 === "function") {
    var h2 = d2;
    d2 = function() {
      var a3 = fl(k2);
      h2.call(a3);
    };
  }
  var k2 = al(a2, 0, false, null, null, false, false, "", ol);
  a2._reactRootContainer = k2;
  a2[tf] = k2.current;
  rf(a2.nodeType === 8 ? a2.parentNode : a2);
  Qk(function() {
    el(b2, k2, c2, d2);
  });
  return k2;
}
function ql(a2, b2, c2, d2, e2) {
  var f2 = c2._reactRootContainer;
  if (f2) {
    var g2 = f2;
    if (typeof e2 === "function") {
      var h2 = e2;
      e2 = function() {
        var a3 = fl(g2);
        h2.call(a3);
      };
    }
    el(b2, g2, a2, e2);
  } else
    g2 = pl(c2, b2, a2, e2, d2);
  return fl(g2);
}
Dc = function(a2) {
  switch (a2.tag) {
    case 3:
      var b2 = a2.stateNode;
      if (b2.current.memoizedState.isDehydrated) {
        var c2 = sc(b2.pendingLanes);
        c2 !== 0 && (Bc(b2, c2 | 1), Ck(b2, B$1()), (W$1 & 6) === 0 && (aj = B$1() + 500, ig()));
      }
      break;
    case 13:
      var d2 = Jg();
      Qk(function() {
        return Lg(a2, 1, d2);
      });
      hl(a2, 1);
  }
};
Ec = function(a2) {
  if (a2.tag === 13) {
    var b2 = Jg();
    Lg(a2, 134217728, b2);
    hl(a2, 134217728);
  }
};
Fc = function(a2) {
  if (a2.tag === 13) {
    var b2 = Jg(), c2 = Kg(a2);
    Lg(a2, c2, b2);
    hl(a2, c2);
  }
};
Gc = function() {
  return C;
};
Hc = function(a2, b2) {
  var c2 = C;
  try {
    return C = a2, b2();
  } finally {
    C = c2;
  }
};
xb = function(a2, b2, c2) {
  switch (b2) {
    case "input":
      $a(a2, c2);
      b2 = c2.name;
      if (c2.type === "radio" && b2 != null) {
        for (c2 = a2; c2.parentNode; )
          c2 = c2.parentNode;
        c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
        for (b2 = 0; b2 < c2.length; b2++) {
          var d2 = c2[b2];
          if (d2 !== a2 && d2.form === a2.form) {
            var e2 = Cb(d2);
            if (!e2)
              throw Error(p$6(90));
            Va(d2);
            $a(d2, e2);
          }
        }
      }
      break;
    case "textarea":
      hb(a2, c2);
      break;
    case "select":
      b2 = c2.value, b2 != null && eb(a2, !!c2.multiple, b2, false);
  }
};
Fb = Pk;
Gb = Qk;
var rl = { usingClientEntryPoint: false, Events: [Bb, te, Cb, Db, Eb, Pk] }, sl = { findFiberByHostInstance: Vc, bundleType: 0, version: "18.1.0", rendererPackageName: "react-dom" };
var tl = { bundleType: sl.bundleType, version: sl.version, rendererPackageName: sl.rendererPackageName, rendererConfig: sl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ta.ReactCurrentDispatcher, findHostInstanceByFiber: function(a2) {
  a2 = Yb(a2);
  return a2 === null ? null : a2.stateNode;
}, findFiberByHostInstance: sl.findFiberByHostInstance || il, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.1.0-next-22edb9f77-20220426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
  var ul = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ul.isDisabled && ul.supportsFiber)
    try {
      jc = ul.inject(tl), kc = ul;
    } catch (a2) {
    }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rl;
reactDom_production_min.createPortal = function(a2, b2) {
  var c2 = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ml(b2))
    throw Error(p$6(200));
  return bl(a2, b2, null, c2);
};
reactDom_production_min.createRoot = function(a2, b2) {
  if (!ml(a2))
    throw Error(p$6(299));
  var c2 = false, d2 = "", e2 = jl;
  b2 !== null && b2 !== void 0 && (b2.unstable_strictMode === true && (c2 = true), b2.identifierPrefix !== void 0 && (d2 = b2.identifierPrefix), b2.onRecoverableError !== void 0 && (e2 = b2.onRecoverableError));
  b2 = al(a2, 1, false, null, null, c2, false, d2, e2);
  a2[tf] = b2.current;
  rf(a2.nodeType === 8 ? a2.parentNode : a2);
  return new kl(b2);
};
reactDom_production_min.findDOMNode = function(a2) {
  if (a2 == null)
    return null;
  if (a2.nodeType === 1)
    return a2;
  var b2 = a2._reactInternals;
  if (b2 === void 0) {
    if (typeof a2.render === "function")
      throw Error(p$6(188));
    a2 = Object.keys(a2).join(",");
    throw Error(p$6(268, a2));
  }
  a2 = Yb(b2);
  a2 = a2 === null ? null : a2.stateNode;
  return a2;
};
reactDom_production_min.flushSync = function(a2) {
  return Qk(a2);
};
reactDom_production_min.hydrate = function(a2, b2, c2) {
  if (!nl(b2))
    throw Error(p$6(200));
  return ql(null, a2, b2, true, c2);
};
reactDom_production_min.hydrateRoot = function(a2, b2, c2) {
  if (!ml(a2))
    throw Error(p$6(405));
  var d2 = c2 != null && c2.hydratedSources || null, e2 = false, f2 = "", g2 = jl;
  c2 !== null && c2 !== void 0 && (c2.unstable_strictMode === true && (e2 = true), c2.identifierPrefix !== void 0 && (f2 = c2.identifierPrefix), c2.onRecoverableError !== void 0 && (g2 = c2.onRecoverableError));
  b2 = dl(b2, null, a2, 1, c2 != null ? c2 : null, e2, false, f2, g2);
  a2[tf] = b2.current;
  rf(a2);
  if (d2)
    for (a2 = 0; a2 < d2.length; a2++)
      c2 = d2[a2], e2 = c2._getVersion, e2 = e2(c2._source), b2.mutableSourceEagerHydrationData == null ? b2.mutableSourceEagerHydrationData = [c2, e2] : b2.mutableSourceEagerHydrationData.push(c2, e2);
  return new ll(b2);
};
reactDom_production_min.render = function(a2, b2, c2) {
  if (!nl(b2))
    throw Error(p$6(200));
  return ql(null, a2, b2, false, c2);
};
reactDom_production_min.unmountComponentAtNode = function(a2) {
  if (!nl(a2))
    throw Error(p$6(40));
  return a2._reactRootContainer ? (Qk(function() {
    ql(null, null, a2, false, function() {
      a2._reactRootContainer = null;
      a2[tf] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Pk;
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a2, b2, c2, d2) {
  if (!nl(c2))
    throw Error(p$6(200));
  if (a2 == null || a2._reactInternals === void 0)
    throw Error(p$6(38));
  return ql(a2, b2, c2, false, d2);
};
reactDom_production_min.version = "18.1.0-next-22edb9f77-20220426";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  reactDom.exports = reactDom_production_min;
}
var createRoot;
var m$5 = reactDom.exports;
{
  createRoot = m$5.createRoot;
}
function _extends$1() {
  _extends$1 = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
var Action;
(function(Action2) {
  Action2["Pop"] = "POP";
  Action2["Push"] = "PUSH";
  Action2["Replace"] = "REPLACE";
})(Action || (Action = {}));
var readOnly = function(obj) {
  return obj;
};
var BeforeUnloadEventType = "beforeunload";
var PopStateEventType = "popstate";
function createBrowserHistory(options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$window = _options.window, window2 = _options$window === void 0 ? document.defaultView : _options$window;
  var globalHistory = window2.history;
  function getIndexAndLocation() {
    var _window$location = window2.location, pathname = _window$location.pathname, search = _window$location.search, hash = _window$location.hash;
    var state = globalHistory.state || {};
    return [state.idx, readOnly({
      pathname,
      search,
      hash,
      state: state.usr || null,
      key: state.key || "default"
    })];
  }
  var blockedPopTx = null;
  function handlePop() {
    if (blockedPopTx) {
      blockers.call(blockedPopTx);
      blockedPopTx = null;
    } else {
      var nextAction = Action.Pop;
      var _getIndexAndLocation = getIndexAndLocation(), nextIndex = _getIndexAndLocation[0], nextLocation = _getIndexAndLocation[1];
      if (blockers.length) {
        if (nextIndex != null) {
          var delta = index - nextIndex;
          if (delta) {
            blockedPopTx = {
              action: nextAction,
              location: nextLocation,
              retry: function retry() {
                go(delta * -1);
              }
            };
            go(delta);
          }
        }
      } else {
        applyTx(nextAction);
      }
    }
  }
  window2.addEventListener(PopStateEventType, handlePop);
  var action = Action.Pop;
  var _getIndexAndLocation2 = getIndexAndLocation(), index = _getIndexAndLocation2[0], location = _getIndexAndLocation2[1];
  var listeners = createEvents();
  var blockers = createEvents();
  if (index == null) {
    index = 0;
    globalHistory.replaceState(_extends$1({}, globalHistory.state, {
      idx: index
    }), "");
  }
  function createHref(to2) {
    return typeof to2 === "string" ? to2 : createPath(to2);
  }
  function getNextLocation(to2, state) {
    if (state === void 0) {
      state = null;
    }
    return readOnly(_extends$1({
      pathname: location.pathname,
      hash: "",
      search: ""
    }, typeof to2 === "string" ? parsePath(to2) : to2, {
      state,
      key: createKey()
    }));
  }
  function getHistoryStateAndUrl(nextLocation, index2) {
    return [{
      usr: nextLocation.state,
      key: nextLocation.key,
      idx: index2
    }, createHref(nextLocation)];
  }
  function allowTx(action2, location2, retry) {
    return !blockers.length || (blockers.call({
      action: action2,
      location: location2,
      retry
    }), false);
  }
  function applyTx(nextAction) {
    action = nextAction;
    var _getIndexAndLocation3 = getIndexAndLocation();
    index = _getIndexAndLocation3[0];
    location = _getIndexAndLocation3[1];
    listeners.call({
      action,
      location
    });
  }
  function push(to2, state) {
    var nextAction = Action.Push;
    var nextLocation = getNextLocation(to2, state);
    function retry() {
      push(to2, state);
    }
    if (allowTx(nextAction, nextLocation, retry)) {
      var _getHistoryStateAndUr = getHistoryStateAndUrl(nextLocation, index + 1), historyState = _getHistoryStateAndUr[0], url = _getHistoryStateAndUr[1];
      try {
        globalHistory.pushState(historyState, "", url);
      } catch (error) {
        window2.location.assign(url);
      }
      applyTx(nextAction);
    }
  }
  function replace(to2, state) {
    var nextAction = Action.Replace;
    var nextLocation = getNextLocation(to2, state);
    function retry() {
      replace(to2, state);
    }
    if (allowTx(nextAction, nextLocation, retry)) {
      var _getHistoryStateAndUr2 = getHistoryStateAndUrl(nextLocation, index), historyState = _getHistoryStateAndUr2[0], url = _getHistoryStateAndUr2[1];
      globalHistory.replaceState(historyState, "", url);
      applyTx(nextAction);
    }
  }
  function go(delta) {
    globalHistory.go(delta);
  }
  var history = {
    get action() {
      return action;
    },
    get location() {
      return location;
    },
    createHref,
    push,
    replace,
    go,
    back: function back() {
      go(-1);
    },
    forward: function forward() {
      go(1);
    },
    listen: function listen(listener) {
      return listeners.push(listener);
    },
    block: function block(blocker) {
      var unblock = blockers.push(blocker);
      if (blockers.length === 1) {
        window2.addEventListener(BeforeUnloadEventType, promptBeforeUnload);
      }
      return function() {
        unblock();
        if (!blockers.length) {
          window2.removeEventListener(BeforeUnloadEventType, promptBeforeUnload);
        }
      };
    }
  };
  return history;
}
function promptBeforeUnload(event) {
  event.preventDefault();
  event.returnValue = "";
}
function createEvents() {
  var handlers = [];
  return {
    get length() {
      return handlers.length;
    },
    push: function push(fn2) {
      handlers.push(fn2);
      return function() {
        handlers = handlers.filter(function(handler) {
          return handler !== fn2;
        });
      };
    },
    call: function call(arg) {
      handlers.forEach(function(fn2) {
        return fn2 && fn2(arg);
      });
    }
  };
}
function createKey() {
  return Math.random().toString(36).substr(2, 8);
}
function createPath(_ref) {
  var _ref$pathname = _ref.pathname, pathname = _ref$pathname === void 0 ? "/" : _ref$pathname, _ref$search = _ref.search, search = _ref$search === void 0 ? "" : _ref$search, _ref$hash = _ref.hash, hash = _ref$hash === void 0 ? "" : _ref$hash;
  if (search && search !== "?")
    pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#")
    pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
function parsePath(path) {
  var parsedPath = {};
  if (path) {
    var hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }
    var searchIndex = path.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const NavigationContext = /* @__PURE__ */ react.exports.createContext(null);
const LocationContext = /* @__PURE__ */ react.exports.createContext(null);
const RouteContext = /* @__PURE__ */ react.exports.createContext({
  outlet: null,
  matches: []
});
function invariant(cond, message) {
  if (!cond)
    throw new Error(message);
}
function matchRoutes(routes, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }
  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);
  if (pathname == null) {
    return null;
  }
  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches2 = null;
  for (let i2 = 0; matches2 == null && i2 < branches.length; ++i2) {
    matches2 = matchRouteBranch(branches[i2], pathname);
  }
  return matches2;
}
function flattenRoutes(routes, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }
  if (parentsMeta === void 0) {
    parentsMeta = [];
  }
  if (parentPath === void 0) {
    parentPath = "";
  }
  routes.forEach((route, index) => {
    let meta = {
      relativePath: route.path || "",
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route
    };
    if (meta.relativePath.startsWith("/")) {
      !meta.relativePath.startsWith(parentPath) ? invariant(false) : void 0;
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }
    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta);
    if (route.children && route.children.length > 0) {
      !(route.index !== true) ? invariant(false) : void 0;
      flattenRoutes(route.children, branches, routesMeta, path);
    }
    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  });
  return branches;
}
function rankRouteBranches(branches) {
  branches.sort((a2, b2) => a2.score !== b2.score ? b2.score - a2.score : compareIndexes(a2.routesMeta.map((meta) => meta.childrenIndex), b2.routesMeta.map((meta) => meta.childrenIndex)));
}
const paramRe = /^:\w+$/;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = -2;
const isSplat = (s2) => s2 === "*";
function computeScore(path, index) {
  let segments = path.split("/");
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index) {
    initialScore += indexRouteValue;
  }
  return segments.filter((s2) => !isSplat(s2)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}
function compareIndexes(a2, b2) {
  let siblings = a2.length === b2.length && a2.slice(0, -1).every((n2, i2) => n2 === b2[i2]);
  return siblings ? a2[a2.length - 1] - b2[b2.length - 1] : 0;
}
function matchRouteBranch(branch, pathname) {
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches2 = [];
  for (let i2 = 0; i2 < routesMeta.length; ++i2) {
    let meta = routesMeta[i2];
    let end = i2 === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath({
      path: meta.relativePath,
      caseSensitive: meta.caseSensitive,
      end
    }, remainingPathname);
    if (!match)
      return null;
    Object.assign(matchedParams, match.params);
    let route = meta.route;
    matches2.push({
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
      route
    });
    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }
  return matches2;
}
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }
  let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match)
    return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = paramNames.reduce((memo, paramName, index) => {
    if (paramName === "*") {
      let splatValue = captureGroups[index] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }
    memo[paramName] = safelyDecodeURIComponent(captureGroups[index] || "");
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }
  if (end === void 0) {
    end = true;
  }
  let paramNames = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/:(\w+)/g, (_2, paramName) => {
    paramNames.push(paramName);
    return "([^\\/]+)";
  });
  if (path.endsWith("*")) {
    paramNames.push("*");
    regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
  } else {
    regexpSource += end ? "\\/*$" : "(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)";
  }
  let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
  return [matcher, paramNames];
}
function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
    return value;
  }
}
function resolvePath(to2, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }
  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to2 === "string" ? parsePath(to2) : to2;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach((segment) => {
    if (segment === "..") {
      if (segments.length > 1)
        segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}
function resolveTo(toArg, routePathnames, locationPathname) {
  let to2 = typeof toArg === "string" ? parsePath(toArg) : toArg;
  let toPathname = toArg === "" || to2.pathname === "" ? "/" : to2.pathname;
  let from2;
  if (toPathname == null) {
    from2 = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    if (toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to2.pathname = toSegments.join("/");
    }
    from2 = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path = resolvePath(to2, from2);
  if (toPathname && toPathname !== "/" && toPathname.endsWith("/") && !path.pathname.endsWith("/")) {
    path.pathname += "/";
  }
  return path;
}
function getToPathname(to2) {
  return to2 === "" || to2.pathname === "" ? "/" : typeof to2 === "string" ? parsePath(to2).pathname : to2.pathname;
}
function stripBasename(pathname, basename) {
  if (basename === "/")
    return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  let nextChar = pathname.charAt(basename.length);
  if (nextChar && nextChar !== "/") {
    return null;
  }
  return pathname.slice(basename.length) || "/";
}
const joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
const normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
const normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
const normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
function useHref(to2) {
  !useInRouterContext() ? invariant(false) : void 0;
  let {
    basename,
    navigator: navigator2
  } = react.exports.useContext(NavigationContext);
  let {
    hash,
    pathname,
    search
  } = useResolvedPath(to2);
  let joinedPathname = pathname;
  if (basename !== "/") {
    let toPathname = getToPathname(to2);
    let endsWithSlash = toPathname != null && toPathname.endsWith("/");
    joinedPathname = pathname === "/" ? basename + (endsWithSlash ? "/" : "") : joinPaths([basename, pathname]);
  }
  return navigator2.createHref({
    pathname: joinedPathname,
    search,
    hash
  });
}
function useInRouterContext() {
  return react.exports.useContext(LocationContext) != null;
}
function useLocation() {
  !useInRouterContext() ? invariant(false) : void 0;
  return react.exports.useContext(LocationContext).location;
}
function useNavigate() {
  !useInRouterContext() ? invariant(false) : void 0;
  let {
    basename,
    navigator: navigator2
  } = react.exports.useContext(NavigationContext);
  let {
    matches: matches2
  } = react.exports.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(matches2.map((match) => match.pathnameBase));
  let activeRef = react.exports.useRef(false);
  react.exports.useEffect(() => {
    activeRef.current = true;
  });
  let navigate = react.exports.useCallback(function(to2, options) {
    if (options === void 0) {
      options = {};
    }
    if (!activeRef.current)
      return;
    if (typeof to2 === "number") {
      navigator2.go(to2);
      return;
    }
    let path = resolveTo(to2, JSON.parse(routePathnamesJson), locationPathname);
    if (basename !== "/") {
      path.pathname = joinPaths([basename, path.pathname]);
    }
    (!!options.replace ? navigator2.replace : navigator2.push)(path, options.state);
  }, [basename, navigator2, routePathnamesJson, locationPathname]);
  return navigate;
}
const OutletContext = /* @__PURE__ */ react.exports.createContext(null);
function useOutletContext() {
  return react.exports.useContext(OutletContext);
}
function useOutlet(context) {
  let outlet = react.exports.useContext(RouteContext).outlet;
  if (outlet) {
    return /* @__PURE__ */ react.exports.createElement(OutletContext.Provider, {
      value: context
    }, outlet);
  }
  return outlet;
}
function useParams() {
  let {
    matches: matches2
  } = react.exports.useContext(RouteContext);
  let routeMatch = matches2[matches2.length - 1];
  return routeMatch ? routeMatch.params : {};
}
function useResolvedPath(to2) {
  let {
    matches: matches2
  } = react.exports.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(matches2.map((match) => match.pathnameBase));
  return react.exports.useMemo(() => resolveTo(to2, JSON.parse(routePathnamesJson), locationPathname), [to2, routePathnamesJson, locationPathname]);
}
function useRoutes(routes, locationArg) {
  !useInRouterContext() ? invariant(false) : void 0;
  let {
    matches: parentMatches
  } = react.exports.useContext(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  routeMatch && routeMatch.route;
  let locationFromContext = useLocation();
  let location;
  if (locationArg) {
    var _parsedLocationArg$pa;
    let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? invariant(false) : void 0;
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }
  let pathname = location.pathname || "/";
  let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
  let matches2 = matchRoutes(routes, {
    pathname: remainingPathname
  });
  return _renderMatches(matches2 && matches2.map((match) => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: joinPaths([parentPathnameBase, match.pathname]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([parentPathnameBase, match.pathnameBase])
  })), parentMatches);
}
function _renderMatches(matches2, parentMatches) {
  if (parentMatches === void 0) {
    parentMatches = [];
  }
  if (matches2 == null)
    return null;
  return matches2.reduceRight((outlet, match, index) => {
    return /* @__PURE__ */ react.exports.createElement(RouteContext.Provider, {
      children: match.route.element !== void 0 ? match.route.element : outlet,
      value: {
        outlet,
        matches: parentMatches.concat(matches2.slice(0, index + 1))
      }
    });
  }, null);
}
function Navigate(_ref2) {
  let {
    to: to2,
    replace,
    state
  } = _ref2;
  !useInRouterContext() ? invariant(false) : void 0;
  let navigate = useNavigate();
  react.exports.useEffect(() => {
    navigate(to2, {
      replace,
      state
    });
  });
  return null;
}
function Outlet(props) {
  return useOutlet(props.context);
}
function Route(_props) {
  invariant(false);
}
function Router(_ref3) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = Action.Pop,
    navigator: navigator2,
    static: staticProp = false
  } = _ref3;
  !!useInRouterContext() ? invariant(false) : void 0;
  let basename = normalizePathname(basenameProp);
  let navigationContext = react.exports.useMemo(() => ({
    basename,
    navigator: navigator2,
    static: staticProp
  }), [basename, navigator2, staticProp]);
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let location = react.exports.useMemo(() => {
    let trailingPathname = stripBasename(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      pathname: trailingPathname,
      search,
      hash,
      state,
      key
    };
  }, [basename, pathname, search, hash, state, key]);
  if (location == null) {
    return null;
  }
  return /* @__PURE__ */ react.exports.createElement(NavigationContext.Provider, {
    value: navigationContext
  }, /* @__PURE__ */ react.exports.createElement(LocationContext.Provider, {
    children,
    value: {
      location,
      navigationType
    }
  }));
}
function Routes(_ref4) {
  let {
    children,
    location
  } = _ref4;
  return useRoutes(createRoutesFromChildren(children), location);
}
function createRoutesFromChildren(children) {
  let routes = [];
  react.exports.Children.forEach(children, (element) => {
    if (!/* @__PURE__ */ react.exports.isValidElement(element)) {
      return;
    }
    if (element.type === react.exports.Fragment) {
      routes.push.apply(routes, createRoutesFromChildren(element.props.children));
      return;
    }
    !(element.type === Route) ? invariant(false) : void 0;
    let route = {
      caseSensitive: element.props.caseSensitive,
      element: element.props.element,
      index: element.props.index,
      path: element.props.path
    };
    if (element.props.children) {
      route.children = createRoutesFromChildren(element.props.children);
    }
    routes.push(route);
  });
  return routes;
}
/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
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
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
const _excluded = ["onClick", "reloadDocument", "replace", "state", "target", "to"];
function BrowserRouter(_ref) {
  let {
    basename,
    children,
    window: window2
  } = _ref;
  let historyRef = react.exports.useRef();
  if (historyRef.current == null) {
    historyRef.current = createBrowserHistory({
      window: window2
    });
  }
  let history = historyRef.current;
  let [state, setState] = react.exports.useState({
    action: history.action,
    location: history.location
  });
  react.exports.useLayoutEffect(() => history.listen(setState), [history]);
  return /* @__PURE__ */ react.exports.createElement(Router, {
    basename,
    children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
const Link = /* @__PURE__ */ react.exports.forwardRef(function LinkWithRef(_ref4, ref) {
  let {
    onClick,
    reloadDocument,
    replace = false,
    state,
    target,
    to: to2
  } = _ref4, rest = _objectWithoutPropertiesLoose(_ref4, _excluded);
  let href = useHref(to2);
  let internalOnClick = useLinkClickHandler(to2, {
    replace,
    state,
    target
  });
  function handleClick(event) {
    if (onClick)
      onClick(event);
    if (!event.defaultPrevented && !reloadDocument) {
      internalOnClick(event);
    }
  }
  return /* @__PURE__ */ react.exports.createElement("a", _extends({}, rest, {
    href,
    onClick: handleClick,
    ref,
    target
  }));
});
function useLinkClickHandler(to2, _temp) {
  let {
    target,
    replace: replaceProp,
    state
  } = _temp === void 0 ? {} : _temp;
  let navigate = useNavigate();
  let location = useLocation();
  let path = useResolvedPath(to2);
  return react.exports.useCallback((event) => {
    if (event.button === 0 && (!target || target === "_self") && !isModifiedEvent(event)) {
      event.preventDefault();
      let replace = !!replaceProp || createPath(location) === createPath(path);
      navigate(to2, {
        replace,
        state
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to2]);
}
var shim = { exports: {} };
var useSyncExternalStoreShim_production_min = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e$2 = react.exports;
function h$4(a2, b2) {
  return a2 === b2 && (a2 !== 0 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
}
var k$4 = typeof Object.is === "function" ? Object.is : h$4, l$4 = e$2.useState, m$4 = e$2.useEffect, n$5 = e$2.useLayoutEffect, p$5 = e$2.useDebugValue;
function q$5(a2, b2) {
  var d2 = b2(), f2 = l$4({ inst: { value: d2, getSnapshot: b2 } }), c2 = f2[0].inst, g2 = f2[1];
  n$5(function() {
    c2.value = d2;
    c2.getSnapshot = b2;
    r$3(c2) && g2({ inst: c2 });
  }, [a2, d2, b2]);
  m$4(function() {
    r$3(c2) && g2({ inst: c2 });
    return a2(function() {
      r$3(c2) && g2({ inst: c2 });
    });
  }, [a2]);
  p$5(d2);
  return d2;
}
function r$3(a2) {
  var b2 = a2.getSnapshot;
  a2 = a2.value;
  try {
    var d2 = b2();
    return !k$4(a2, d2);
  } catch (f2) {
    return true;
  }
}
function t$4(a2, b2) {
  return b2();
}
var u$3 = typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined" ? t$4 : q$5;
useSyncExternalStoreShim_production_min.useSyncExternalStore = e$2.useSyncExternalStore !== void 0 ? e$2.useSyncExternalStore : u$3;
{
  shim.exports = useSyncExternalStoreShim_production_min;
}
var withSelector = { exports: {} };
var withSelector_production_min = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var h$3 = react.exports, n$4 = shim.exports;
function p$4(a2, b2) {
  return a2 === b2 && (a2 !== 0 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
}
var q$4 = typeof Object.is === "function" ? Object.is : p$4, r$2 = n$4.useSyncExternalStore, t$3 = h$3.useRef, u$2 = h$3.useEffect, v$3 = h$3.useMemo, w$2 = h$3.useDebugValue;
withSelector_production_min.useSyncExternalStoreWithSelector = function(a2, b2, e2, l2, g2) {
  var c2 = t$3(null);
  if (c2.current === null) {
    var f2 = { hasValue: false, value: null };
    c2.current = f2;
  } else
    f2 = c2.current;
  c2 = v$3(function() {
    function a3(a4) {
      if (!c3) {
        c3 = true;
        d3 = a4;
        a4 = l2(a4);
        if (g2 !== void 0 && f2.hasValue) {
          var b3 = f2.value;
          if (g2(b3, a4))
            return k2 = b3;
        }
        return k2 = a4;
      }
      b3 = k2;
      if (q$4(d3, a4))
        return b3;
      var e3 = l2(a4);
      if (g2 !== void 0 && g2(b3, e3))
        return b3;
      d3 = a4;
      return k2 = e3;
    }
    var c3 = false, d3, k2, m2 = e2 === void 0 ? null : e2;
    return [function() {
      return a3(b2());
    }, m2 === null ? void 0 : function() {
      return a3(m2());
    }];
  }, [b2, e2, l2, g2]);
  var d2 = r$2(a2, c2[0], c2[1]);
  u$2(function() {
    f2.hasValue = true;
    f2.value = d2;
  }, [d2]);
  w$2(d2);
  return d2;
};
{
  withSelector.exports = withSelector_production_min;
}
function defaultNoopBatch(callback) {
  callback();
}
let batch = defaultNoopBatch;
const setBatch = (newBatch) => batch = newBatch;
const getBatch = () => batch;
const ReactReduxContext = /* @__PURE__ */ React.createContext(null);
function useReduxContext() {
  const contextValue = react.exports.useContext(ReactReduxContext);
  return contextValue;
}
const notInitialized = () => {
  throw new Error("uSES not initialized!");
};
let useSyncExternalStoreWithSelector = notInitialized;
const initializeUseSelector = (fn2) => {
  useSyncExternalStoreWithSelector = fn2;
};
const refEquality = (a2, b2) => a2 === b2;
function createSelectorHook(context = ReactReduxContext) {
  const useReduxContext$1 = context === ReactReduxContext ? useReduxContext : () => react.exports.useContext(context);
  return function useSelector2(selector, equalityFn = refEquality) {
    const {
      store: store2,
      subscription,
      getServerState
    } = useReduxContext$1();
    const selectedState = useSyncExternalStoreWithSelector(subscription.addNestedSub, store2.getState, getServerState || store2.getState, selector, equalityFn);
    react.exports.useDebugValue(selectedState);
    return selectedState;
  };
}
const useSelector = /* @__PURE__ */ createSelectorHook();
var reactIs$1 = { exports: {} };
var reactIs_production_min$1 = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$2 = typeof Symbol === "function" && Symbol.for, c$2 = b$2 ? Symbol.for("react.element") : 60103, d$2 = b$2 ? Symbol.for("react.portal") : 60106, e$1 = b$2 ? Symbol.for("react.fragment") : 60107, f$3 = b$2 ? Symbol.for("react.strict_mode") : 60108, g$2 = b$2 ? Symbol.for("react.profiler") : 60114, h$2 = b$2 ? Symbol.for("react.provider") : 60109, k$3 = b$2 ? Symbol.for("react.context") : 60110, l$3 = b$2 ? Symbol.for("react.async_mode") : 60111, m$3 = b$2 ? Symbol.for("react.concurrent_mode") : 60111, n$3 = b$2 ? Symbol.for("react.forward_ref") : 60112, p$3 = b$2 ? Symbol.for("react.suspense") : 60113, q$3 = b$2 ? Symbol.for("react.suspense_list") : 60120, r$1 = b$2 ? Symbol.for("react.memo") : 60115, t$2 = b$2 ? Symbol.for("react.lazy") : 60116, v$2 = b$2 ? Symbol.for("react.block") : 60121, w$1 = b$2 ? Symbol.for("react.fundamental") : 60117, x$1 = b$2 ? Symbol.for("react.responder") : 60118, y$1 = b$2 ? Symbol.for("react.scope") : 60119;
function z$1(a2) {
  if (typeof a2 === "object" && a2 !== null) {
    var u2 = a2.$$typeof;
    switch (u2) {
      case c$2:
        switch (a2 = a2.type, a2) {
          case l$3:
          case m$3:
          case e$1:
          case g$2:
          case f$3:
          case p$3:
            return a2;
          default:
            switch (a2 = a2 && a2.$$typeof, a2) {
              case k$3:
              case n$3:
              case t$2:
              case r$1:
              case h$2:
                return a2;
              default:
                return u2;
            }
        }
      case d$2:
        return u2;
    }
  }
}
function A$1(a2) {
  return z$1(a2) === m$3;
}
reactIs_production_min$1.AsyncMode = l$3;
reactIs_production_min$1.ConcurrentMode = m$3;
reactIs_production_min$1.ContextConsumer = k$3;
reactIs_production_min$1.ContextProvider = h$2;
reactIs_production_min$1.Element = c$2;
reactIs_production_min$1.ForwardRef = n$3;
reactIs_production_min$1.Fragment = e$1;
reactIs_production_min$1.Lazy = t$2;
reactIs_production_min$1.Memo = r$1;
reactIs_production_min$1.Portal = d$2;
reactIs_production_min$1.Profiler = g$2;
reactIs_production_min$1.StrictMode = f$3;
reactIs_production_min$1.Suspense = p$3;
reactIs_production_min$1.isAsyncMode = function(a2) {
  return A$1(a2) || z$1(a2) === l$3;
};
reactIs_production_min$1.isConcurrentMode = A$1;
reactIs_production_min$1.isContextConsumer = function(a2) {
  return z$1(a2) === k$3;
};
reactIs_production_min$1.isContextProvider = function(a2) {
  return z$1(a2) === h$2;
};
reactIs_production_min$1.isElement = function(a2) {
  return typeof a2 === "object" && a2 !== null && a2.$$typeof === c$2;
};
reactIs_production_min$1.isForwardRef = function(a2) {
  return z$1(a2) === n$3;
};
reactIs_production_min$1.isFragment = function(a2) {
  return z$1(a2) === e$1;
};
reactIs_production_min$1.isLazy = function(a2) {
  return z$1(a2) === t$2;
};
reactIs_production_min$1.isMemo = function(a2) {
  return z$1(a2) === r$1;
};
reactIs_production_min$1.isPortal = function(a2) {
  return z$1(a2) === d$2;
};
reactIs_production_min$1.isProfiler = function(a2) {
  return z$1(a2) === g$2;
};
reactIs_production_min$1.isStrictMode = function(a2) {
  return z$1(a2) === f$3;
};
reactIs_production_min$1.isSuspense = function(a2) {
  return z$1(a2) === p$3;
};
reactIs_production_min$1.isValidElementType = function(a2) {
  return typeof a2 === "string" || typeof a2 === "function" || a2 === e$1 || a2 === m$3 || a2 === g$2 || a2 === f$3 || a2 === p$3 || a2 === q$3 || typeof a2 === "object" && a2 !== null && (a2.$$typeof === t$2 || a2.$$typeof === r$1 || a2.$$typeof === h$2 || a2.$$typeof === k$3 || a2.$$typeof === n$3 || a2.$$typeof === w$1 || a2.$$typeof === x$1 || a2.$$typeof === y$1 || a2.$$typeof === v$2);
};
reactIs_production_min$1.typeOf = z$1;
{
  reactIs$1.exports = reactIs_production_min$1;
}
var reactIs = reactIs$1.exports;
var FORWARD_REF_STATICS = {
  "$$typeof": true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  "$$typeof": true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
var reactIs_production_min = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$1 = Symbol.for("react.element"), c$1 = Symbol.for("react.portal"), d$1 = Symbol.for("react.fragment"), e = Symbol.for("react.strict_mode"), f$2 = Symbol.for("react.profiler"), g$1 = Symbol.for("react.provider"), h$1 = Symbol.for("react.context"), k$2 = Symbol.for("react.server_context"), l$2 = Symbol.for("react.forward_ref"), m$2 = Symbol.for("react.suspense"), n$2 = Symbol.for("react.suspense_list"), p$2 = Symbol.for("react.memo"), q$2 = Symbol.for("react.lazy"), t$1 = Symbol.for("react.offscreen"), u$1;
u$1 = Symbol.for("react.module.reference");
function v$1(a2) {
  if (typeof a2 === "object" && a2 !== null) {
    var r2 = a2.$$typeof;
    switch (r2) {
      case b$1:
        switch (a2 = a2.type, a2) {
          case d$1:
          case f$2:
          case e:
          case m$2:
          case n$2:
            return a2;
          default:
            switch (a2 = a2 && a2.$$typeof, a2) {
              case k$2:
              case h$1:
              case l$2:
              case q$2:
              case p$2:
              case g$1:
                return a2;
              default:
                return r2;
            }
        }
      case c$1:
        return r2;
    }
  }
}
reactIs_production_min.ContextConsumer = h$1;
reactIs_production_min.ContextProvider = g$1;
reactIs_production_min.Element = b$1;
reactIs_production_min.ForwardRef = l$2;
reactIs_production_min.Fragment = d$1;
reactIs_production_min.Lazy = q$2;
reactIs_production_min.Memo = p$2;
reactIs_production_min.Portal = c$1;
reactIs_production_min.Profiler = f$2;
reactIs_production_min.StrictMode = e;
reactIs_production_min.Suspense = m$2;
reactIs_production_min.SuspenseList = n$2;
reactIs_production_min.isAsyncMode = function() {
  return false;
};
reactIs_production_min.isConcurrentMode = function() {
  return false;
};
reactIs_production_min.isContextConsumer = function(a2) {
  return v$1(a2) === h$1;
};
reactIs_production_min.isContextProvider = function(a2) {
  return v$1(a2) === g$1;
};
reactIs_production_min.isElement = function(a2) {
  return typeof a2 === "object" && a2 !== null && a2.$$typeof === b$1;
};
reactIs_production_min.isForwardRef = function(a2) {
  return v$1(a2) === l$2;
};
reactIs_production_min.isFragment = function(a2) {
  return v$1(a2) === d$1;
};
reactIs_production_min.isLazy = function(a2) {
  return v$1(a2) === q$2;
};
reactIs_production_min.isMemo = function(a2) {
  return v$1(a2) === p$2;
};
reactIs_production_min.isPortal = function(a2) {
  return v$1(a2) === c$1;
};
reactIs_production_min.isProfiler = function(a2) {
  return v$1(a2) === f$2;
};
reactIs_production_min.isStrictMode = function(a2) {
  return v$1(a2) === e;
};
reactIs_production_min.isSuspense = function(a2) {
  return v$1(a2) === m$2;
};
reactIs_production_min.isSuspenseList = function(a2) {
  return v$1(a2) === n$2;
};
reactIs_production_min.isValidElementType = function(a2) {
  return typeof a2 === "string" || typeof a2 === "function" || a2 === d$1 || a2 === f$2 || a2 === e || a2 === m$2 || a2 === n$2 || a2 === t$1 || typeof a2 === "object" && a2 !== null && (a2.$$typeof === q$2 || a2.$$typeof === p$2 || a2.$$typeof === g$1 || a2.$$typeof === h$1 || a2.$$typeof === l$2 || a2.$$typeof === u$1 || a2.getModuleId !== void 0) ? true : false;
};
reactIs_production_min.typeOf = v$1;
function createListenerCollection() {
  const batch2 = getBatch();
  let first = null;
  let last2 = null;
  return {
    clear() {
      first = null;
      last2 = null;
    },
    notify() {
      batch2(() => {
        let listener = first;
        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },
    get() {
      let listeners = [];
      let listener = first;
      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }
      return listeners;
    },
    subscribe(callback) {
      let isSubscribed = true;
      let listener = last2 = {
        callback,
        next: null,
        prev: last2
      };
      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }
      return function unsubscribe() {
        if (!isSubscribed || first === null)
          return;
        isSubscribed = false;
        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last2 = listener.prev;
        }
        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }
  };
}
const nullListeners = {
  notify() {
  },
  get: () => []
};
function createSubscription(store2, parentSub) {
  let unsubscribe;
  let listeners = nullListeners;
  function addNestedSub(listener) {
    trySubscribe();
    return listeners.subscribe(listener);
  }
  function notifyNestedSubs() {
    listeners.notify();
  }
  function handleChangeWrapper() {
    if (subscription.onStateChange) {
      subscription.onStateChange();
    }
  }
  function isSubscribed() {
    return Boolean(unsubscribe);
  }
  function trySubscribe() {
    if (!unsubscribe) {
      unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store2.subscribe(handleChangeWrapper);
      listeners = createListenerCollection();
    }
  }
  function tryUnsubscribe() {
    if (unsubscribe) {
      unsubscribe();
      unsubscribe = void 0;
      listeners.clear();
      listeners = nullListeners;
    }
  }
  const subscription = {
    addNestedSub,
    notifyNestedSubs,
    handleChangeWrapper,
    isSubscribed,
    trySubscribe,
    tryUnsubscribe,
    getListeners: () => listeners
  };
  return subscription;
}
const canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
const useIsomorphicLayoutEffect$1 = canUseDOM ? react.exports.useLayoutEffect : react.exports.useEffect;
function is(x2, y2) {
  if (x2 === y2) {
    return x2 !== 0 || y2 !== 0 || 1 / x2 === 1 / y2;
  } else {
    return x2 !== x2 && y2 !== y2;
  }
}
function shallowEqual(objA, objB) {
  if (is(objA, objB))
    return true;
  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length)
    return false;
  for (let i2 = 0; i2 < keysA.length; i2++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i2]) || !is(objA[keysA[i2]], objB[keysA[i2]])) {
      return false;
    }
  }
  return true;
}
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f$1 = react.exports, k$1 = Symbol.for("react.element"), l$1 = Symbol.for("react.fragment"), m$1 = Object.prototype.hasOwnProperty, n$1 = f$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$1 = { key: true, ref: true, __self: true, __source: true };
function q$1(c2, a2, g2) {
  var b2, d2 = {}, e2 = null, h2 = null;
  g2 !== void 0 && (e2 = "" + g2);
  a2.key !== void 0 && (e2 = "" + a2.key);
  a2.ref !== void 0 && (h2 = a2.ref);
  for (b2 in a2)
    m$1.call(a2, b2) && !p$1.hasOwnProperty(b2) && (d2[b2] = a2[b2]);
  if (c2 && c2.defaultProps)
    for (b2 in a2 = c2.defaultProps, a2)
      d2[b2] === void 0 && (d2[b2] = a2[b2]);
  return { $$typeof: k$1, type: c2, key: e2, ref: h2, props: d2, _owner: n$1.current };
}
reactJsxRuntime_production_min.Fragment = l$1;
reactJsxRuntime_production_min.jsx = q$1;
reactJsxRuntime_production_min.jsxs = q$1;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
const jsx = jsxRuntime.exports.jsx;
const jsxs = jsxRuntime.exports.jsxs;
const Fragment = jsxRuntime.exports.Fragment;
function Provider({
  store: store2,
  context,
  children,
  serverState
}) {
  const contextValue = react.exports.useMemo(() => {
    const subscription = createSubscription(store2);
    return {
      store: store2,
      subscription,
      getServerState: serverState ? () => serverState : void 0
    };
  }, [store2, serverState]);
  const previousState = react.exports.useMemo(() => store2.getState(), [store2]);
  useIsomorphicLayoutEffect$1(() => {
    const {
      subscription
    } = contextValue;
    subscription.onStateChange = subscription.notifyNestedSubs;
    subscription.trySubscribe();
    if (previousState !== store2.getState()) {
      subscription.notifyNestedSubs();
    }
    return () => {
      subscription.tryUnsubscribe();
      subscription.onStateChange = void 0;
    };
  }, [contextValue, previousState]);
  const Context = context || ReactReduxContext;
  return /* @__PURE__ */ jsx(Context.Provider, {
    value: contextValue,
    children
  });
}
function createStoreHook(context = ReactReduxContext) {
  const useReduxContext$1 = context === ReactReduxContext ? useReduxContext : () => react.exports.useContext(context);
  return function useStore2() {
    const {
      store: store2
    } = useReduxContext$1();
    return store2;
  };
}
const useStore = /* @__PURE__ */ createStoreHook();
function createDispatchHook(context = ReactReduxContext) {
  const useStore$1 = context === ReactReduxContext ? useStore : createStoreHook(context);
  return function useDispatch2() {
    const store2 = useStore$1();
    return store2.dispatch;
  };
}
const useDispatch = /* @__PURE__ */ createDispatchHook();
initializeUseSelector(withSelector.exports.useSyncExternalStoreWithSelector);
setBatch(reactDom.exports.unstable_batchedUpdates);
var globals = "";
const useAppSelector = useSelector;
const useAppDispatch = () => useDispatch();
function n(n2) {
  for (var r2 = arguments.length, t2 = Array(r2 > 1 ? r2 - 1 : 0), e2 = 1; e2 < r2; e2++)
    t2[e2 - 1] = arguments[e2];
  throw Error("[Immer] minified error nr: " + n2 + (t2.length ? " " + t2.map(function(n3) {
    return "'" + n3 + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function r(n2) {
  return !!n2 && !!n2[Q];
}
function t(n2) {
  return !!n2 && (function(n3) {
    if (!n3 || typeof n3 != "object")
      return false;
    var r2 = Object.getPrototypeOf(n3);
    if (r2 === null)
      return true;
    var t2 = Object.hasOwnProperty.call(r2, "constructor") && r2.constructor;
    return t2 === Object || typeof t2 == "function" && Function.toString.call(t2) === Z;
  }(n2) || Array.isArray(n2) || !!n2[L] || !!n2.constructor[L] || s(n2) || v(n2));
}
function i(n2, r2, t2) {
  t2 === void 0 && (t2 = false), o(n2) === 0 ? (t2 ? Object.keys : nn)(n2).forEach(function(e2) {
    t2 && typeof e2 == "symbol" || r2(e2, n2[e2], n2);
  }) : n2.forEach(function(t3, e2) {
    return r2(e2, t3, n2);
  });
}
function o(n2) {
  var r2 = n2[Q];
  return r2 ? r2.i > 3 ? r2.i - 4 : r2.i : Array.isArray(n2) ? 1 : s(n2) ? 2 : v(n2) ? 3 : 0;
}
function u(n2, r2) {
  return o(n2) === 2 ? n2.has(r2) : Object.prototype.hasOwnProperty.call(n2, r2);
}
function a(n2, r2) {
  return o(n2) === 2 ? n2.get(r2) : n2[r2];
}
function f(n2, r2, t2) {
  var e2 = o(n2);
  e2 === 2 ? n2.set(r2, t2) : e2 === 3 ? (n2.delete(r2), n2.add(t2)) : n2[r2] = t2;
}
function c(n2, r2) {
  return n2 === r2 ? n2 !== 0 || 1 / n2 == 1 / r2 : n2 != n2 && r2 != r2;
}
function s(n2) {
  return X && n2 instanceof Map;
}
function v(n2) {
  return q && n2 instanceof Set;
}
function p(n2) {
  return n2.o || n2.t;
}
function l(n2) {
  if (Array.isArray(n2))
    return Array.prototype.slice.call(n2);
  var r2 = rn(n2);
  delete r2[Q];
  for (var t2 = nn(r2), e2 = 0; e2 < t2.length; e2++) {
    var i2 = t2[e2], o2 = r2[i2];
    o2.writable === false && (o2.writable = true, o2.configurable = true), (o2.get || o2.set) && (r2[i2] = { configurable: true, writable: true, enumerable: o2.enumerable, value: n2[i2] });
  }
  return Object.create(Object.getPrototypeOf(n2), r2);
}
function d(n2, e2) {
  return e2 === void 0 && (e2 = false), y(n2) || r(n2) || !t(n2) ? n2 : (o(n2) > 1 && (n2.set = n2.add = n2.clear = n2.delete = h), Object.freeze(n2), e2 && i(n2, function(n3, r2) {
    return d(r2, true);
  }, true), n2);
}
function h() {
  n(2);
}
function y(n2) {
  return n2 == null || typeof n2 != "object" || Object.isFrozen(n2);
}
function b(r2) {
  var t2 = tn[r2];
  return t2 || n(18, r2), t2;
}
function m(n2, r2) {
  tn[n2] || (tn[n2] = r2);
}
function _() {
  return U;
}
function j(n2, r2) {
  r2 && (b("Patches"), n2.u = [], n2.s = [], n2.v = r2);
}
function O(n2) {
  g(n2), n2.p.forEach(S), n2.p = null;
}
function g(n2) {
  n2 === U && (U = n2.l);
}
function w(n2) {
  return U = { p: [], l: U, h: n2, m: true, _: 0 };
}
function S(n2) {
  var r2 = n2[Q];
  r2.i === 0 || r2.i === 1 ? r2.j() : r2.O = true;
}
function P(r2, e2) {
  e2._ = e2.p.length;
  var i2 = e2.p[0], o2 = r2 !== void 0 && r2 !== i2;
  return e2.h.g || b("ES5").S(e2, r2, o2), o2 ? (i2[Q].P && (O(e2), n(4)), t(r2) && (r2 = M(e2, r2), e2.l || x(e2, r2)), e2.u && b("Patches").M(i2[Q].t, r2, e2.u, e2.s)) : r2 = M(e2, i2, []), O(e2), e2.u && e2.v(e2.u, e2.s), r2 !== H ? r2 : void 0;
}
function M(n2, r2, t2) {
  if (y(r2))
    return r2;
  var e2 = r2[Q];
  if (!e2)
    return i(r2, function(i2, o3) {
      return A(n2, e2, r2, i2, o3, t2);
    }, true), r2;
  if (e2.A !== n2)
    return r2;
  if (!e2.P)
    return x(n2, e2.t, true), e2.t;
  if (!e2.I) {
    e2.I = true, e2.A._--;
    var o2 = e2.i === 4 || e2.i === 5 ? e2.o = l(e2.k) : e2.o;
    i(e2.i === 3 ? new Set(o2) : o2, function(r3, i2) {
      return A(n2, e2, o2, r3, i2, t2);
    }), x(n2, o2, false), t2 && n2.u && b("Patches").R(e2, t2, n2.u, n2.s);
  }
  return e2.o;
}
function A(e2, i2, o2, a2, c2, s2) {
  if (r(c2)) {
    var v2 = M(e2, c2, s2 && i2 && i2.i !== 3 && !u(i2.D, a2) ? s2.concat(a2) : void 0);
    if (f(o2, a2, v2), !r(v2))
      return;
    e2.m = false;
  }
  if (t(c2) && !y(c2)) {
    if (!e2.h.F && e2._ < 1)
      return;
    M(e2, c2), i2 && i2.A.l || x(e2, c2);
  }
}
function x(n2, r2, t2) {
  t2 === void 0 && (t2 = false), n2.h.F && n2.m && d(r2, t2);
}
function z(n2, r2) {
  var t2 = n2[Q];
  return (t2 ? p(t2) : n2)[r2];
}
function I(n2, r2) {
  if (r2 in n2)
    for (var t2 = Object.getPrototypeOf(n2); t2; ) {
      var e2 = Object.getOwnPropertyDescriptor(t2, r2);
      if (e2)
        return e2;
      t2 = Object.getPrototypeOf(t2);
    }
}
function k(n2) {
  n2.P || (n2.P = true, n2.l && k(n2.l));
}
function E(n2) {
  n2.o || (n2.o = l(n2.t));
}
function R(n2, r2, t2) {
  var e2 = s(r2) ? b("MapSet").N(r2, t2) : v(r2) ? b("MapSet").T(r2, t2) : n2.g ? function(n3, r3) {
    var t3 = Array.isArray(n3), e3 = { i: t3 ? 1 : 0, A: r3 ? r3.A : _(), P: false, I: false, D: {}, l: r3, t: n3, k: null, o: null, j: null, C: false }, i2 = e3, o2 = en;
    t3 && (i2 = [e3], o2 = on);
    var u2 = Proxy.revocable(i2, o2), a2 = u2.revoke, f2 = u2.proxy;
    return e3.k = f2, e3.j = a2, f2;
  }(r2, t2) : b("ES5").J(r2, t2);
  return (t2 ? t2.A : _()).p.push(e2), e2;
}
function D(e2) {
  return r(e2) || n(22, e2), function n2(r2) {
    if (!t(r2))
      return r2;
    var e3, u2 = r2[Q], c2 = o(r2);
    if (u2) {
      if (!u2.P && (u2.i < 4 || !b("ES5").K(u2)))
        return u2.t;
      u2.I = true, e3 = F(r2, c2), u2.I = false;
    } else
      e3 = F(r2, c2);
    return i(e3, function(r3, t2) {
      u2 && a(u2.t, r3) === t2 || f(e3, r3, n2(t2));
    }), c2 === 3 ? new Set(e3) : e3;
  }(e2);
}
function F(n2, r2) {
  switch (r2) {
    case 2:
      return new Map(n2);
    case 3:
      return Array.from(n2);
  }
  return l(n2);
}
function N() {
  function t2(n2, r2) {
    var t3 = s2[n2];
    return t3 ? t3.enumerable = r2 : s2[n2] = t3 = { configurable: true, enumerable: r2, get: function() {
      var r3 = this[Q];
      return en.get(r3, n2);
    }, set: function(r3) {
      var t4 = this[Q];
      en.set(t4, n2, r3);
    } }, t3;
  }
  function e2(n2) {
    for (var r2 = n2.length - 1; r2 >= 0; r2--) {
      var t3 = n2[r2][Q];
      if (!t3.P)
        switch (t3.i) {
          case 5:
            a2(t3) && k(t3);
            break;
          case 4:
            o2(t3) && k(t3);
        }
    }
  }
  function o2(n2) {
    for (var r2 = n2.t, t3 = n2.k, e3 = nn(t3), i2 = e3.length - 1; i2 >= 0; i2--) {
      var o3 = e3[i2];
      if (o3 !== Q) {
        var a3 = r2[o3];
        if (a3 === void 0 && !u(r2, o3))
          return true;
        var f2 = t3[o3], s3 = f2 && f2[Q];
        if (s3 ? s3.t !== a3 : !c(f2, a3))
          return true;
      }
    }
    var v2 = !!r2[Q];
    return e3.length !== nn(r2).length + (v2 ? 0 : 1);
  }
  function a2(n2) {
    var r2 = n2.k;
    if (r2.length !== n2.t.length)
      return true;
    var t3 = Object.getOwnPropertyDescriptor(r2, r2.length - 1);
    if (t3 && !t3.get)
      return true;
    for (var e3 = 0; e3 < r2.length; e3++)
      if (!r2.hasOwnProperty(e3))
        return true;
    return false;
  }
  var s2 = {};
  m("ES5", { J: function(n2, r2) {
    var e3 = Array.isArray(n2), i2 = function(n3, r3) {
      if (n3) {
        for (var e4 = Array(r3.length), i3 = 0; i3 < r3.length; i3++)
          Object.defineProperty(e4, "" + i3, t2(i3, true));
        return e4;
      }
      var o4 = rn(r3);
      delete o4[Q];
      for (var u2 = nn(o4), a3 = 0; a3 < u2.length; a3++) {
        var f2 = u2[a3];
        o4[f2] = t2(f2, n3 || !!o4[f2].enumerable);
      }
      return Object.create(Object.getPrototypeOf(r3), o4);
    }(e3, n2), o3 = { i: e3 ? 5 : 4, A: r2 ? r2.A : _(), P: false, I: false, D: {}, l: r2, t: n2, k: i2, o: null, O: false, C: false };
    return Object.defineProperty(i2, Q, { value: o3, writable: true }), i2;
  }, S: function(n2, t3, o3) {
    o3 ? r(t3) && t3[Q].A === n2 && e2(n2.p) : (n2.u && function n3(r2) {
      if (r2 && typeof r2 == "object") {
        var t4 = r2[Q];
        if (t4) {
          var e3 = t4.t, o4 = t4.k, f2 = t4.D, c2 = t4.i;
          if (c2 === 4)
            i(o4, function(r3) {
              r3 !== Q && (e3[r3] !== void 0 || u(e3, r3) ? f2[r3] || n3(o4[r3]) : (f2[r3] = true, k(t4)));
            }), i(e3, function(n4) {
              o4[n4] !== void 0 || u(o4, n4) || (f2[n4] = false, k(t4));
            });
          else if (c2 === 5) {
            if (a2(t4) && (k(t4), f2.length = true), o4.length < e3.length)
              for (var s3 = o4.length; s3 < e3.length; s3++)
                f2[s3] = false;
            else
              for (var v2 = e3.length; v2 < o4.length; v2++)
                f2[v2] = true;
            for (var p2 = Math.min(o4.length, e3.length), l2 = 0; l2 < p2; l2++)
              o4.hasOwnProperty(l2) || (f2[l2] = true), f2[l2] === void 0 && n3(o4[l2]);
          }
        }
      }
    }(n2.p[0]), e2(n2.p));
  }, K: function(n2) {
    return n2.i === 4 ? o2(n2) : a2(n2);
  } });
}
function T() {
  function e2(n2) {
    if (!t(n2))
      return n2;
    if (Array.isArray(n2))
      return n2.map(e2);
    if (s(n2))
      return new Map(Array.from(n2.entries()).map(function(n3) {
        return [n3[0], e2(n3[1])];
      }));
    if (v(n2))
      return new Set(Array.from(n2).map(e2));
    var r2 = Object.create(Object.getPrototypeOf(n2));
    for (var i2 in n2)
      r2[i2] = e2(n2[i2]);
    return u(n2, L) && (r2[L] = n2[L]), r2;
  }
  function f2(n2) {
    return r(n2) ? e2(n2) : n2;
  }
  var c2 = "add";
  m("Patches", { $: function(r2, t2) {
    return t2.forEach(function(t3) {
      for (var i2 = t3.path, u2 = t3.op, f3 = r2, s2 = 0; s2 < i2.length - 1; s2++) {
        var v2 = o(f3), p2 = "" + i2[s2];
        v2 !== 0 && v2 !== 1 || p2 !== "__proto__" && p2 !== "constructor" || n(24), typeof f3 == "function" && p2 === "prototype" && n(24), typeof (f3 = a(f3, p2)) != "object" && n(15, i2.join("/"));
      }
      var l2 = o(f3), d2 = e2(t3.value), h2 = i2[i2.length - 1];
      switch (u2) {
        case "replace":
          switch (l2) {
            case 2:
              return f3.set(h2, d2);
            case 3:
              n(16);
            default:
              return f3[h2] = d2;
          }
        case c2:
          switch (l2) {
            case 1:
              return h2 === "-" ? f3.push(d2) : f3.splice(h2, 0, d2);
            case 2:
              return f3.set(h2, d2);
            case 3:
              return f3.add(d2);
            default:
              return f3[h2] = d2;
          }
        case "remove":
          switch (l2) {
            case 1:
              return f3.splice(h2, 1);
            case 2:
              return f3.delete(h2);
            case 3:
              return f3.delete(t3.value);
            default:
              return delete f3[h2];
          }
        default:
          n(17, u2);
      }
    }), r2;
  }, R: function(n2, r2, t2, e3) {
    switch (n2.i) {
      case 0:
      case 4:
      case 2:
        return function(n3, r3, t3, e4) {
          var o2 = n3.t, s2 = n3.o;
          i(n3.D, function(n4, i2) {
            var v2 = a(o2, n4), p2 = a(s2, n4), l2 = i2 ? u(o2, n4) ? "replace" : c2 : "remove";
            if (v2 !== p2 || l2 !== "replace") {
              var d2 = r3.concat(n4);
              t3.push(l2 === "remove" ? { op: l2, path: d2 } : { op: l2, path: d2, value: p2 }), e4.push(l2 === c2 ? { op: "remove", path: d2 } : l2 === "remove" ? { op: c2, path: d2, value: f2(v2) } : { op: "replace", path: d2, value: f2(v2) });
            }
          });
        }(n2, r2, t2, e3);
      case 5:
      case 1:
        return function(n3, r3, t3, e4) {
          var i2 = n3.t, o2 = n3.D, u2 = n3.o;
          if (u2.length < i2.length) {
            var a2 = [u2, i2];
            i2 = a2[0], u2 = a2[1];
            var s2 = [e4, t3];
            t3 = s2[0], e4 = s2[1];
          }
          for (var v2 = 0; v2 < i2.length; v2++)
            if (o2[v2] && u2[v2] !== i2[v2]) {
              var p2 = r3.concat([v2]);
              t3.push({ op: "replace", path: p2, value: f2(u2[v2]) }), e4.push({ op: "replace", path: p2, value: f2(i2[v2]) });
            }
          for (var l2 = i2.length; l2 < u2.length; l2++) {
            var d2 = r3.concat([l2]);
            t3.push({ op: c2, path: d2, value: f2(u2[l2]) });
          }
          i2.length < u2.length && e4.push({ op: "replace", path: r3.concat(["length"]), value: i2.length });
        }(n2, r2, t2, e3);
      case 3:
        return function(n3, r3, t3, e4) {
          var i2 = n3.t, o2 = n3.o, u2 = 0;
          i2.forEach(function(n4) {
            if (!o2.has(n4)) {
              var i3 = r3.concat([u2]);
              t3.push({ op: "remove", path: i3, value: n4 }), e4.unshift({ op: c2, path: i3, value: n4 });
            }
            u2++;
          }), u2 = 0, o2.forEach(function(n4) {
            if (!i2.has(n4)) {
              var o3 = r3.concat([u2]);
              t3.push({ op: c2, path: o3, value: n4 }), e4.unshift({ op: "remove", path: o3, value: n4 });
            }
            u2++;
          });
        }(n2, r2, t2, e3);
    }
  }, M: function(n2, r2, t2, e3) {
    t2.push({ op: "replace", path: [], value: r2 === H ? void 0 : r2 }), e3.push({ op: "replace", path: [], value: n2 });
  } });
}
var G, U, W = typeof Symbol != "undefined" && typeof Symbol("x") == "symbol", X = typeof Map != "undefined", q = typeof Set != "undefined", B = typeof Proxy != "undefined" && Proxy.revocable !== void 0 && typeof Reflect != "undefined", H = W ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = true, G), L = W ? Symbol.for("immer-draftable") : "__$immer_draftable", Q = W ? Symbol.for("immer-state") : "__$immer_state", Z = "" + Object.prototype.constructor, nn = typeof Reflect != "undefined" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(n2) {
  return Object.getOwnPropertyNames(n2).concat(Object.getOwnPropertySymbols(n2));
} : Object.getOwnPropertyNames, rn = Object.getOwnPropertyDescriptors || function(n2) {
  var r2 = {};
  return nn(n2).forEach(function(t2) {
    r2[t2] = Object.getOwnPropertyDescriptor(n2, t2);
  }), r2;
}, tn = {}, en = { get: function(n2, r2) {
  if (r2 === Q)
    return n2;
  var e2 = p(n2);
  if (!u(e2, r2))
    return function(n3, r3, t2) {
      var e3, i3 = I(r3, t2);
      return i3 ? "value" in i3 ? i3.value : (e3 = i3.get) === null || e3 === void 0 ? void 0 : e3.call(n3.k) : void 0;
    }(n2, e2, r2);
  var i2 = e2[r2];
  return n2.I || !t(i2) ? i2 : i2 === z(n2.t, r2) ? (E(n2), n2.o[r2] = R(n2.A.h, i2, n2)) : i2;
}, has: function(n2, r2) {
  return r2 in p(n2);
}, ownKeys: function(n2) {
  return Reflect.ownKeys(p(n2));
}, set: function(n2, r2, t2) {
  var e2 = I(p(n2), r2);
  if (e2 == null ? void 0 : e2.set)
    return e2.set.call(n2.k, t2), true;
  if (!n2.P) {
    var i2 = z(p(n2), r2), o2 = i2 == null ? void 0 : i2[Q];
    if (o2 && o2.t === t2)
      return n2.o[r2] = t2, n2.D[r2] = false, true;
    if (c(t2, i2) && (t2 !== void 0 || u(n2.t, r2)))
      return true;
    E(n2), k(n2);
  }
  return n2.o[r2] === t2 && typeof t2 != "number" && (t2 !== void 0 || r2 in n2.o) || (n2.o[r2] = t2, n2.D[r2] = true, true);
}, deleteProperty: function(n2, r2) {
  return z(n2.t, r2) !== void 0 || r2 in n2.t ? (n2.D[r2] = false, E(n2), k(n2)) : delete n2.D[r2], n2.o && delete n2.o[r2], true;
}, getOwnPropertyDescriptor: function(n2, r2) {
  var t2 = p(n2), e2 = Reflect.getOwnPropertyDescriptor(t2, r2);
  return e2 ? { writable: true, configurable: n2.i !== 1 || r2 !== "length", enumerable: e2.enumerable, value: t2[r2] } : e2;
}, defineProperty: function() {
  n(11);
}, getPrototypeOf: function(n2) {
  return Object.getPrototypeOf(n2.t);
}, setPrototypeOf: function() {
  n(12);
} }, on = {};
i(en, function(n2, r2) {
  on[n2] = function() {
    return arguments[0] = arguments[0][0], r2.apply(this, arguments);
  };
}), on.deleteProperty = function(r2, t2) {
  return on.set.call(this, r2, t2, void 0);
}, on.set = function(r2, t2, e2) {
  return en.set.call(this, r2[0], t2, e2, r2[0]);
};
var un = function() {
  function e2(r2) {
    var e3 = this;
    this.g = B, this.F = true, this.produce = function(r3, i3, o2) {
      if (typeof r3 == "function" && typeof i3 != "function") {
        var u2 = i3;
        i3 = r3;
        var a2 = e3;
        return function(n2) {
          var r4 = this;
          n2 === void 0 && (n2 = u2);
          for (var t2 = arguments.length, e4 = Array(t2 > 1 ? t2 - 1 : 0), o3 = 1; o3 < t2; o3++)
            e4[o3 - 1] = arguments[o3];
          return a2.produce(n2, function(n3) {
            var t3;
            return (t3 = i3).call.apply(t3, [r4, n3].concat(e4));
          });
        };
      }
      var f2;
      if (typeof i3 != "function" && n(6), o2 !== void 0 && typeof o2 != "function" && n(7), t(r3)) {
        var c2 = w(e3), s2 = R(e3, r3, void 0), v2 = true;
        try {
          f2 = i3(s2), v2 = false;
        } finally {
          v2 ? O(c2) : g(c2);
        }
        return typeof Promise != "undefined" && f2 instanceof Promise ? f2.then(function(n2) {
          return j(c2, o2), P(n2, c2);
        }, function(n2) {
          throw O(c2), n2;
        }) : (j(c2, o2), P(f2, c2));
      }
      if (!r3 || typeof r3 != "object") {
        if ((f2 = i3(r3)) === void 0 && (f2 = r3), f2 === H && (f2 = void 0), e3.F && d(f2, true), o2) {
          var p2 = [], l2 = [];
          b("Patches").M(r3, f2, p2, l2), o2(p2, l2);
        }
        return f2;
      }
      n(21, r3);
    }, this.produceWithPatches = function(n2, r3) {
      if (typeof n2 == "function")
        return function(r4) {
          for (var t3 = arguments.length, i4 = Array(t3 > 1 ? t3 - 1 : 0), o3 = 1; o3 < t3; o3++)
            i4[o3 - 1] = arguments[o3];
          return e3.produceWithPatches(r4, function(r5) {
            return n2.apply(void 0, [r5].concat(i4));
          });
        };
      var t2, i3, o2 = e3.produce(n2, r3, function(n3, r4) {
        t2 = n3, i3 = r4;
      });
      return typeof Promise != "undefined" && o2 instanceof Promise ? o2.then(function(n3) {
        return [n3, t2, i3];
      }) : [o2, t2, i3];
    }, typeof (r2 == null ? void 0 : r2.useProxies) == "boolean" && this.setUseProxies(r2.useProxies), typeof (r2 == null ? void 0 : r2.autoFreeze) == "boolean" && this.setAutoFreeze(r2.autoFreeze);
  }
  var i2 = e2.prototype;
  return i2.createDraft = function(e3) {
    t(e3) || n(8), r(e3) && (e3 = D(e3));
    var i3 = w(this), o2 = R(this, e3, void 0);
    return o2[Q].C = true, g(i3), o2;
  }, i2.finishDraft = function(r2, t2) {
    var e3 = r2 && r2[Q];
    var i3 = e3.A;
    return j(i3, t2), P(void 0, i3);
  }, i2.setAutoFreeze = function(n2) {
    this.F = n2;
  }, i2.setUseProxies = function(r2) {
    r2 && !B && n(20), this.g = r2;
  }, i2.applyPatches = function(n2, t2) {
    var e3;
    for (e3 = t2.length - 1; e3 >= 0; e3--) {
      var i3 = t2[e3];
      if (i3.path.length === 0 && i3.op === "replace") {
        n2 = i3.value;
        break;
      }
    }
    e3 > -1 && (t2 = t2.slice(e3 + 1));
    var o2 = b("Patches").$;
    return r(n2) ? o2(n2, t2) : this.produce(n2, function(n3) {
      return o2(n3, t2);
    });
  }, e2;
}(), an = new un(), fn = an.produce, cn = an.produceWithPatches.bind(an);
an.setAutoFreeze.bind(an);
an.setUseProxies.bind(an);
var pn = an.applyPatches.bind(an);
an.createDraft.bind(an);
an.finishDraft.bind(an);
var createNextState = fn;
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread2(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = arguments[i2] != null ? arguments[i2] : {};
    i2 % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or use the non-minified dev environment for full errors. ";
}
var $$observable = function() {
  return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();
var randomString = function randomString2() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};
function isPlainObject$3(obj) {
  if (typeof obj !== "object" || obj === null)
    return false;
  var proto2 = obj;
  while (Object.getPrototypeOf(proto2) !== null) {
    proto2 = Object.getPrototypeOf(proto2);
  }
  return Object.getPrototypeOf(obj) === proto2;
}
function createStore(reducer, preloadedState, enhancer) {
  var _ref2;
  if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
    throw new Error(formatProdErrorMessage(0));
  }
  if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
    enhancer = preloadedState;
    preloadedState = void 0;
  }
  if (typeof enhancer !== "undefined") {
    if (typeof enhancer !== "function") {
      throw new Error(formatProdErrorMessage(1));
    }
    return enhancer(createStore)(reducer, preloadedState);
  }
  if (typeof reducer !== "function") {
    throw new Error(formatProdErrorMessage(2));
  }
  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  function getState() {
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(3));
    }
    return currentState;
  }
  function subscribe(listener) {
    if (typeof listener !== "function") {
      throw new Error(formatProdErrorMessage(4));
    }
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(5));
    }
    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }
      if (isDispatching) {
        throw new Error(formatProdErrorMessage(6));
      }
      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  function dispatch(action) {
    if (!isPlainObject$3(action)) {
      throw new Error(formatProdErrorMessage(7));
    }
    if (typeof action.type === "undefined") {
      throw new Error(formatProdErrorMessage(8));
    }
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(9));
    }
    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }
    var listeners = currentListeners = nextListeners;
    for (var i2 = 0; i2 < listeners.length; i2++) {
      var listener = listeners[i2];
      listener();
    }
    return action;
  }
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== "function") {
      throw new Error(formatProdErrorMessage(10));
    }
    currentReducer = nextReducer;
    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  function observable() {
    var _ref;
    var outerSubscribe = subscribe;
    return _ref = {
      subscribe: function subscribe2(observer) {
        if (typeof observer !== "object" || observer === null) {
          throw new Error(formatProdErrorMessage(11));
        }
        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }
        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe
        };
      }
    }, _ref[$$observable] = function() {
      return this;
    }, _ref;
  }
  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch,
    subscribe,
    getState,
    replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}
function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function(key) {
    var reducer = reducers[key];
    var initialState2 = reducer(void 0, {
      type: ActionTypes.INIT
    });
    if (typeof initialState2 === "undefined") {
      throw new Error(formatProdErrorMessage(12));
    }
    if (typeof reducer(void 0, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === "undefined") {
      throw new Error(formatProdErrorMessage(13));
    }
  });
}
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i2 = 0; i2 < reducerKeys.length; i2++) {
    var key = reducerKeys[i2];
    if (typeof reducers[key] === "function") {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);
  var shapeAssertionError;
  try {
    assertReducerShape(finalReducers);
  } catch (e2) {
    shapeAssertionError = e2;
  }
  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }
    if (shapeAssertionError) {
      throw shapeAssertionError;
    }
    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === "undefined") {
        action && action.type;
        throw new Error(formatProdErrorMessage(14));
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }
  if (funcs.length === 0) {
    return function(arg) {
      return arg;
    };
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce(function(a2, b2) {
    return function() {
      return a2(b2.apply(void 0, arguments));
    };
  });
}
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }
  return function(createStore2) {
    return function() {
      var store2 = createStore2.apply(void 0, arguments);
      var _dispatch = function dispatch() {
        throw new Error(formatProdErrorMessage(15));
      };
      var middlewareAPI = {
        getState: store2.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function(middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store2.dispatch);
      return _objectSpread2(_objectSpread2({}, store2), {}, {
        dispatch: _dispatch
      });
    };
  };
}
var NOT_FOUND = "NOT_FOUND";
function createSingletonCache(equals) {
  var entry;
  return {
    get: function get2(key) {
      if (entry && equals(entry.key, key)) {
        return entry.value;
      }
      return NOT_FOUND;
    },
    put: function put(key, value) {
      entry = {
        key,
        value
      };
    },
    getEntries: function getEntries() {
      return entry ? [entry] : [];
    },
    clear: function clear() {
      entry = void 0;
    }
  };
}
function createLruCache(maxSize, equals) {
  var entries = [];
  function get2(key) {
    var cacheIndex = entries.findIndex(function(entry2) {
      return equals(key, entry2.key);
    });
    if (cacheIndex > -1) {
      var entry = entries[cacheIndex];
      if (cacheIndex > 0) {
        entries.splice(cacheIndex, 1);
        entries.unshift(entry);
      }
      return entry.value;
    }
    return NOT_FOUND;
  }
  function put(key, value) {
    if (get2(key) === NOT_FOUND) {
      entries.unshift({
        key,
        value
      });
      if (entries.length > maxSize) {
        entries.pop();
      }
    }
  }
  function getEntries() {
    return entries;
  }
  function clear() {
    entries = [];
  }
  return {
    get: get2,
    put,
    getEntries,
    clear
  };
}
var defaultEqualityCheck = function defaultEqualityCheck2(a2, b2) {
  return a2 === b2;
};
function createCacheKeyComparator(equalityCheck) {
  return function areArgumentsShallowlyEqual(prev, next) {
    if (prev === null || next === null || prev.length !== next.length) {
      return false;
    }
    var length = prev.length;
    for (var i2 = 0; i2 < length; i2++) {
      if (!equalityCheck(prev[i2], next[i2])) {
        return false;
      }
    }
    return true;
  };
}
function defaultMemoize(func, equalityCheckOrOptions) {
  var providedOptions = typeof equalityCheckOrOptions === "object" ? equalityCheckOrOptions : {
    equalityCheck: equalityCheckOrOptions
  };
  var _providedOptions$equa = providedOptions.equalityCheck, equalityCheck = _providedOptions$equa === void 0 ? defaultEqualityCheck : _providedOptions$equa, _providedOptions$maxS = providedOptions.maxSize, maxSize = _providedOptions$maxS === void 0 ? 1 : _providedOptions$maxS, resultEqualityCheck = providedOptions.resultEqualityCheck;
  var comparator = createCacheKeyComparator(equalityCheck);
  var cache = maxSize === 1 ? createSingletonCache(comparator) : createLruCache(maxSize, comparator);
  function memoized() {
    var value = cache.get(arguments);
    if (value === NOT_FOUND) {
      value = func.apply(null, arguments);
      if (resultEqualityCheck) {
        var entries = cache.getEntries();
        var matchingEntry = entries.find(function(entry) {
          return resultEqualityCheck(entry.value, value);
        });
        if (matchingEntry) {
          value = matchingEntry.value;
        }
      }
      cache.put(arguments, value);
    }
    return value;
  }
  memoized.clearCache = function() {
    return cache.clear();
  };
  return memoized;
}
function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;
  if (!dependencies.every(function(dep) {
    return typeof dep === "function";
  })) {
    var dependencyTypes = dependencies.map(function(dep) {
      return typeof dep === "function" ? "function " + (dep.name || "unnamed") + "()" : typeof dep;
    }).join(", ");
    throw new Error("createSelector expects all input-selectors to be functions, but received the following types: [" + dependencyTypes + "]");
  }
  return dependencies;
}
function createSelectorCreator(memoize2) {
  for (var _len = arguments.length, memoizeOptionsFromArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptionsFromArgs[_key - 1] = arguments[_key];
  }
  var createSelector2 = function createSelector3() {
    for (var _len2 = arguments.length, funcs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }
    var _recomputations = 0;
    var _lastResult;
    var directlyPassedOptions = {
      memoizeOptions: void 0
    };
    var resultFunc = funcs.pop();
    if (typeof resultFunc === "object") {
      directlyPassedOptions = resultFunc;
      resultFunc = funcs.pop();
    }
    if (typeof resultFunc !== "function") {
      throw new Error("createSelector expects an output function after the inputs, but received: [" + typeof resultFunc + "]");
    }
    var _directlyPassedOption = directlyPassedOptions, _directlyPassedOption2 = _directlyPassedOption.memoizeOptions, memoizeOptions = _directlyPassedOption2 === void 0 ? memoizeOptionsFromArgs : _directlyPassedOption2;
    var finalMemoizeOptions = Array.isArray(memoizeOptions) ? memoizeOptions : [memoizeOptions];
    var dependencies = getDependencies(funcs);
    var memoizedResultFunc = memoize2.apply(void 0, [function() {
      _recomputations++;
      return resultFunc.apply(null, arguments);
    }].concat(finalMemoizeOptions));
    var selector = memoize2(function() {
      var params = [];
      var length = dependencies.length;
      for (var i2 = 0; i2 < length; i2++) {
        params.push(dependencies[i2].apply(null, arguments));
      }
      _lastResult = memoizedResultFunc.apply(null, params);
      return _lastResult;
    });
    Object.assign(selector, {
      resultFunc,
      memoizedResultFunc,
      dependencies,
      lastResult: function lastResult() {
        return _lastResult;
      },
      recomputations: function recomputations() {
        return _recomputations;
      },
      resetRecomputations: function resetRecomputations() {
        return _recomputations = 0;
      }
    });
    return selector;
  };
  return createSelector2;
}
var createSelector = /* @__PURE__ */ createSelectorCreator(defaultMemoize);
function createThunkMiddleware(extraArgument) {
  var middleware = function middleware2(_ref) {
    var dispatch = _ref.dispatch, getState = _ref.getState;
    return function(next) {
      return function(action) {
        if (typeof action === "function") {
          return action(dispatch, getState, extraArgument);
        }
        return next(action);
      };
    };
  };
  return middleware;
}
var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;
var thunkMiddleware = thunk;
var __extends = globalThis && globalThis.__extends || function() {
  var extendStatics = function(d2, b2) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
      d3.__proto__ = b3;
    } || function(d3, b3) {
      for (var p2 in b3)
        if (Object.prototype.hasOwnProperty.call(b3, p2))
          d3[p2] = b3[p2];
    };
    return extendStatics(d2, b2);
  };
  return function(d2, b2) {
    if (typeof b2 !== "function" && b2 !== null)
      throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
    extendStatics(d2, b2);
    function __() {
      this.constructor = d2;
    }
    d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
  };
}();
var __generator$1 = globalThis && globalThis.__generator || function(thisArg, body) {
  var _2 = { label: 0, sent: function() {
    if (t2[0] & 1)
      throw t2[1];
    return t2[1];
  }, trys: [], ops: [] }, f2, y2, t2, g2;
  return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
    return this;
  }), g2;
  function verb(n2) {
    return function(v2) {
      return step([n2, v2]);
    };
  }
  function step(op) {
    if (f2)
      throw new TypeError("Generator is already executing.");
    while (_2)
      try {
        if (f2 = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done)
          return t2;
        if (y2 = 0, t2)
          op = [op[0] & 2, t2.value];
        switch (op[0]) {
          case 0:
          case 1:
            t2 = op;
            break;
          case 4:
            _2.label++;
            return { value: op[1], done: false };
          case 5:
            _2.label++;
            y2 = op[1];
            op = [0];
            continue;
          case 7:
            op = _2.ops.pop();
            _2.trys.pop();
            continue;
          default:
            if (!(t2 = _2.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _2 = 0;
              continue;
            }
            if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
              _2.label = op[1];
              break;
            }
            if (op[0] === 6 && _2.label < t2[1]) {
              _2.label = t2[1];
              t2 = op;
              break;
            }
            if (t2 && _2.label < t2[2]) {
              _2.label = t2[2];
              _2.ops.push(op);
              break;
            }
            if (t2[2])
              _2.ops.pop();
            _2.trys.pop();
            continue;
        }
        op = body.call(thisArg, _2);
      } catch (e2) {
        op = [6, e2];
        y2 = 0;
      } finally {
        f2 = t2 = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var __spreadArray$2 = globalThis && globalThis.__spreadArray || function(to2, from2) {
  for (var i2 = 0, il2 = from2.length, j2 = to2.length; i2 < il2; i2++, j2++)
    to2[j2] = from2[i2];
  return to2;
};
var __defProp$2 = Object.defineProperty;
var __defProps$2 = Object.defineProperties;
var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = function(obj, key, value) {
  return key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
};
var __spreadValues$2 = function(a2, b2) {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp$2.call(b2, prop))
      __defNormalProp$2(a2, prop, b2[prop]);
  if (__getOwnPropSymbols$2)
    for (var _i = 0, _c = __getOwnPropSymbols$2(b2); _i < _c.length; _i++) {
      var prop = _c[_i];
      if (__propIsEnum$2.call(b2, prop))
        __defNormalProp$2(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps$2 = function(a2, b2) {
  return __defProps$2(a2, __getOwnPropDescs$2(b2));
};
var __async$1 = function(__this, __arguments, generator) {
  return new Promise(function(resolve, reject) {
    var fulfilled = function(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var rejected = function(value) {
      try {
        step(generator.throw(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var step = function(x2) {
      return x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
    };
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var composeWithDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length === 0)
    return void 0;
  if (typeof arguments[0] === "object")
    return compose;
  return compose.apply(null, arguments);
};
function isPlainObject$2(value) {
  if (typeof value !== "object" || value === null)
    return false;
  var proto2 = Object.getPrototypeOf(value);
  if (proto2 === null)
    return true;
  var baseProto = proto2;
  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }
  return proto2 === baseProto;
}
var MiddlewareArray = function(_super) {
  __extends(MiddlewareArray2, _super);
  function MiddlewareArray2() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var _this = _super.apply(this, args) || this;
    Object.setPrototypeOf(_this, MiddlewareArray2.prototype);
    return _this;
  }
  Object.defineProperty(MiddlewareArray2, Symbol.species, {
    get: function() {
      return MiddlewareArray2;
    },
    enumerable: false,
    configurable: true
  });
  MiddlewareArray2.prototype.concat = function() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      arr[_i] = arguments[_i];
    }
    return _super.prototype.concat.apply(this, arr);
  };
  MiddlewareArray2.prototype.prepend = function() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      arr[_i] = arguments[_i];
    }
    if (arr.length === 1 && Array.isArray(arr[0])) {
      return new (MiddlewareArray2.bind.apply(MiddlewareArray2, __spreadArray$2([void 0], arr[0].concat(this))))();
    }
    return new (MiddlewareArray2.bind.apply(MiddlewareArray2, __spreadArray$2([void 0], arr.concat(this))))();
  };
  return MiddlewareArray2;
}(Array);
function isBoolean(x2) {
  return typeof x2 === "boolean";
}
function curryGetDefaultMiddleware() {
  return function curriedGetDefaultMiddleware(options) {
    return getDefaultMiddleware(options);
  };
}
function getDefaultMiddleware(options) {
  if (options === void 0) {
    options = {};
  }
  var _c = options.thunk, thunk2 = _c === void 0 ? true : _c;
  options.immutableCheck;
  options.serializableCheck;
  var middlewareArray = new MiddlewareArray();
  if (thunk2) {
    if (isBoolean(thunk2)) {
      middlewareArray.push(thunkMiddleware);
    } else {
      middlewareArray.push(thunkMiddleware.withExtraArgument(thunk2.extraArgument));
    }
  }
  return middlewareArray;
}
var IS_PRODUCTION = true;
function configureStore(options) {
  var curriedGetDefaultMiddleware = curryGetDefaultMiddleware();
  var _c = options || {}, _d = _c.reducer, reducer = _d === void 0 ? void 0 : _d, _e = _c.middleware, middleware = _e === void 0 ? curriedGetDefaultMiddleware() : _e, _f = _c.devTools, devTools = _f === void 0 ? true : _f, _g = _c.preloadedState, preloadedState = _g === void 0 ? void 0 : _g, _h = _c.enhancers, enhancers = _h === void 0 ? void 0 : _h;
  var rootReducer;
  if (typeof reducer === "function") {
    rootReducer = reducer;
  } else if (isPlainObject$2(reducer)) {
    rootReducer = combineReducers(reducer);
  } else {
    throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
  }
  var finalMiddleware = middleware;
  if (typeof finalMiddleware === "function") {
    finalMiddleware = finalMiddleware(curriedGetDefaultMiddleware);
  }
  var middlewareEnhancer = applyMiddleware.apply(void 0, finalMiddleware);
  var finalCompose = compose;
  if (devTools) {
    finalCompose = composeWithDevTools(__spreadValues$2({
      trace: !IS_PRODUCTION
    }, typeof devTools === "object" && devTools));
  }
  var storeEnhancers = [middlewareEnhancer];
  if (Array.isArray(enhancers)) {
    storeEnhancers = __spreadArray$2([middlewareEnhancer], enhancers);
  } else if (typeof enhancers === "function") {
    storeEnhancers = enhancers(storeEnhancers);
  }
  var composedEnhancer = finalCompose.apply(void 0, storeEnhancers);
  return createStore(rootReducer, preloadedState, composedEnhancer);
}
function createAction(type, prepareAction) {
  function actionCreator() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (prepareAction) {
      var prepared = prepareAction.apply(void 0, args);
      if (!prepared) {
        throw new Error("prepareAction did not return an object");
      }
      return __spreadValues$2(__spreadValues$2({
        type,
        payload: prepared.payload
      }, "meta" in prepared && { meta: prepared.meta }), "error" in prepared && { error: prepared.error });
    }
    return { type, payload: args[0] };
  }
  actionCreator.toString = function() {
    return "" + type;
  };
  actionCreator.type = type;
  actionCreator.match = function(action) {
    return action.type === type;
  };
  return actionCreator;
}
function executeReducerBuilderCallback(builderCallback) {
  var actionsMap = {};
  var actionMatchers = [];
  var defaultCaseReducer;
  var builder = {
    addCase: function(typeOrActionCreator, reducer) {
      var type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
      if (type in actionsMap) {
        throw new Error("addCase cannot be called with two reducers for the same action type");
      }
      actionsMap[type] = reducer;
      return builder;
    },
    addMatcher: function(matcher, reducer) {
      actionMatchers.push({ matcher, reducer });
      return builder;
    },
    addDefaultCase: function(reducer) {
      defaultCaseReducer = reducer;
      return builder;
    }
  };
  builderCallback(builder);
  return [actionsMap, actionMatchers, defaultCaseReducer];
}
function isStateFunction(x2) {
  return typeof x2 === "function";
}
function createReducer(initialState2, mapOrBuilderCallback, actionMatchers, defaultCaseReducer) {
  if (actionMatchers === void 0) {
    actionMatchers = [];
  }
  var _c = typeof mapOrBuilderCallback === "function" ? executeReducerBuilderCallback(mapOrBuilderCallback) : [mapOrBuilderCallback, actionMatchers, defaultCaseReducer], actionsMap = _c[0], finalActionMatchers = _c[1], finalDefaultCaseReducer = _c[2];
  var getInitialState;
  if (isStateFunction(initialState2)) {
    getInitialState = function() {
      return createNextState(initialState2(), function() {
      });
    };
  } else {
    var frozenInitialState_1 = createNextState(initialState2, function() {
    });
    getInitialState = function() {
      return frozenInitialState_1;
    };
  }
  function reducer(state, action) {
    if (state === void 0) {
      state = getInitialState();
    }
    var caseReducers = __spreadArray$2([
      actionsMap[action.type]
    ], finalActionMatchers.filter(function(_c2) {
      var matcher = _c2.matcher;
      return matcher(action);
    }).map(function(_c2) {
      var reducer2 = _c2.reducer;
      return reducer2;
    }));
    if (caseReducers.filter(function(cr) {
      return !!cr;
    }).length === 0) {
      caseReducers = [finalDefaultCaseReducer];
    }
    return caseReducers.reduce(function(previousState, caseReducer) {
      if (caseReducer) {
        if (r(previousState)) {
          var draft = previousState;
          var result = caseReducer(draft, action);
          if (typeof result === "undefined") {
            return previousState;
          }
          return result;
        } else if (!t(previousState)) {
          var result = caseReducer(previousState, action);
          if (typeof result === "undefined") {
            if (previousState === null) {
              return previousState;
            }
            throw Error("A case reducer on a non-draftable value must not return undefined");
          }
          return result;
        } else {
          return createNextState(previousState, function(draft2) {
            return caseReducer(draft2, action);
          });
        }
      }
      return previousState;
    }, state);
  }
  reducer.getInitialState = getInitialState;
  return reducer;
}
function getType2(slice, actionKey) {
  return slice + "/" + actionKey;
}
function createSlice(options) {
  var name = options.name;
  if (!name) {
    throw new Error("`name` is a required option for createSlice");
  }
  var initialState2 = typeof options.initialState == "function" ? options.initialState : createNextState(options.initialState, function() {
  });
  var reducers = options.reducers || {};
  var reducerNames = Object.keys(reducers);
  var sliceCaseReducersByName = {};
  var sliceCaseReducersByType = {};
  var actionCreators = {};
  reducerNames.forEach(function(reducerName) {
    var maybeReducerWithPrepare = reducers[reducerName];
    var type = getType2(name, reducerName);
    var caseReducer;
    var prepareCallback;
    if ("reducer" in maybeReducerWithPrepare) {
      caseReducer = maybeReducerWithPrepare.reducer;
      prepareCallback = maybeReducerWithPrepare.prepare;
    } else {
      caseReducer = maybeReducerWithPrepare;
    }
    sliceCaseReducersByName[reducerName] = caseReducer;
    sliceCaseReducersByType[type] = caseReducer;
    actionCreators[reducerName] = prepareCallback ? createAction(type, prepareCallback) : createAction(type);
  });
  function buildReducer() {
    var _c = typeof options.extraReducers === "function" ? executeReducerBuilderCallback(options.extraReducers) : [options.extraReducers], _d = _c[0], extraReducers = _d === void 0 ? {} : _d, _e = _c[1], actionMatchers = _e === void 0 ? [] : _e, _f = _c[2], defaultCaseReducer = _f === void 0 ? void 0 : _f;
    var finalCaseReducers = __spreadValues$2(__spreadValues$2({}, extraReducers), sliceCaseReducersByType);
    return createReducer(initialState2, finalCaseReducers, actionMatchers, defaultCaseReducer);
  }
  var _reducer;
  return {
    name,
    reducer: function(state, action) {
      if (!_reducer)
        _reducer = buildReducer();
      return _reducer(state, action);
    },
    actions: actionCreators,
    caseReducers: sliceCaseReducersByName,
    getInitialState: function() {
      if (!_reducer)
        _reducer = buildReducer();
      return _reducer.getInitialState();
    }
  };
}
var urlAlphabet = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";
var nanoid = function(size) {
  if (size === void 0) {
    size = 21;
  }
  var id2 = "";
  var i2 = size;
  while (i2--) {
    id2 += urlAlphabet[Math.random() * 64 | 0];
  }
  return id2;
};
var commonProperties = [
  "name",
  "message",
  "stack",
  "code"
];
var RejectWithValue = function() {
  function RejectWithValue2(payload, meta) {
    this.payload = payload;
    this.meta = meta;
  }
  return RejectWithValue2;
}();
var FulfillWithMeta = function() {
  function FulfillWithMeta2(payload, meta) {
    this.payload = payload;
    this.meta = meta;
  }
  return FulfillWithMeta2;
}();
var miniSerializeError = function(value) {
  if (typeof value === "object" && value !== null) {
    var simpleError = {};
    for (var _i = 0, commonProperties_1 = commonProperties; _i < commonProperties_1.length; _i++) {
      var property = commonProperties_1[_i];
      if (typeof value[property] === "string") {
        simpleError[property] = value[property];
      }
    }
    return simpleError;
  }
  return { message: String(value) };
};
function createAsyncThunk(typePrefix, payloadCreator, options) {
  var fulfilled = createAction(typePrefix + "/fulfilled", function(payload, requestId, arg, meta) {
    return {
      payload,
      meta: __spreadProps$2(__spreadValues$2({}, meta || {}), {
        arg,
        requestId,
        requestStatus: "fulfilled"
      })
    };
  });
  var pending = createAction(typePrefix + "/pending", function(requestId, arg, meta) {
    return {
      payload: void 0,
      meta: __spreadProps$2(__spreadValues$2({}, meta || {}), {
        arg,
        requestId,
        requestStatus: "pending"
      })
    };
  });
  var rejected = createAction(typePrefix + "/rejected", function(error, requestId, arg, payload, meta) {
    return {
      payload,
      error: (options && options.serializeError || miniSerializeError)(error || "Rejected"),
      meta: __spreadProps$2(__spreadValues$2({}, meta || {}), {
        arg,
        requestId,
        rejectedWithValue: !!payload,
        requestStatus: "rejected",
        aborted: (error == null ? void 0 : error.name) === "AbortError",
        condition: (error == null ? void 0 : error.name) === "ConditionError"
      })
    };
  });
  var AC = typeof AbortController !== "undefined" ? AbortController : function() {
    function class_1() {
      this.signal = {
        aborted: false,
        addEventListener: function() {
        },
        dispatchEvent: function() {
          return false;
        },
        onabort: function() {
        },
        removeEventListener: function() {
        }
      };
    }
    class_1.prototype.abort = function() {
    };
    return class_1;
  }();
  function actionCreator(arg) {
    return function(dispatch, getState, extra) {
      var requestId = (options == null ? void 0 : options.idGenerator) ? options.idGenerator(arg) : nanoid();
      var abortController = new AC();
      var abortReason;
      var abortedPromise = new Promise(function(_2, reject) {
        return abortController.signal.addEventListener("abort", function() {
          return reject({ name: "AbortError", message: abortReason || "Aborted" });
        });
      });
      var started = false;
      function abort(reason) {
        if (started) {
          abortReason = reason;
          abortController.abort();
        }
      }
      var promise = function() {
        return __async$1(this, null, function() {
          var _a, _b, finalAction, conditionResult, err_1, skipDispatch;
          return __generator$1(this, function(_c) {
            switch (_c.label) {
              case 0:
                _c.trys.push([0, 4, , 5]);
                conditionResult = (_a = options == null ? void 0 : options.condition) == null ? void 0 : _a.call(options, arg, { getState, extra });
                if (!isThenable(conditionResult))
                  return [3, 2];
                return [4, conditionResult];
              case 1:
                conditionResult = _c.sent();
                _c.label = 2;
              case 2:
                if (conditionResult === false) {
                  throw {
                    name: "ConditionError",
                    message: "Aborted due to condition callback returning false."
                  };
                }
                started = true;
                dispatch(pending(requestId, arg, (_b = options == null ? void 0 : options.getPendingMeta) == null ? void 0 : _b.call(options, { requestId, arg }, { getState, extra })));
                return [4, Promise.race([
                  abortedPromise,
                  Promise.resolve(payloadCreator(arg, {
                    dispatch,
                    getState,
                    extra,
                    requestId,
                    signal: abortController.signal,
                    rejectWithValue: function(value, meta) {
                      return new RejectWithValue(value, meta);
                    },
                    fulfillWithValue: function(value, meta) {
                      return new FulfillWithMeta(value, meta);
                    }
                  })).then(function(result) {
                    if (result instanceof RejectWithValue) {
                      throw result;
                    }
                    if (result instanceof FulfillWithMeta) {
                      return fulfilled(result.payload, requestId, arg, result.meta);
                    }
                    return fulfilled(result, requestId, arg);
                  })
                ])];
              case 3:
                finalAction = _c.sent();
                return [3, 5];
              case 4:
                err_1 = _c.sent();
                finalAction = err_1 instanceof RejectWithValue ? rejected(null, requestId, arg, err_1.payload, err_1.meta) : rejected(err_1, requestId, arg);
                return [3, 5];
              case 5:
                skipDispatch = options && !options.dispatchConditionRejection && rejected.match(finalAction) && finalAction.meta.condition;
                if (!skipDispatch) {
                  dispatch(finalAction);
                }
                return [2, finalAction];
            }
          });
        });
      }();
      return Object.assign(promise, {
        abort,
        requestId,
        arg,
        unwrap: function() {
          return promise.then(unwrapResult);
        }
      });
    };
  }
  return Object.assign(actionCreator, {
    pending,
    rejected,
    fulfilled,
    typePrefix
  });
}
function unwrapResult(action) {
  if (action.meta && action.meta.rejectedWithValue) {
    throw action.payload;
  }
  if (action.error) {
    throw action.error;
  }
  return action.payload;
}
function isThenable(value) {
  return value !== null && typeof value === "object" && typeof value.then === "function";
}
var hasMatchFunction = function(v2) {
  return v2 && typeof v2.match === "function";
};
var matches = function(matcher, action) {
  if (hasMatchFunction(matcher)) {
    return matcher.match(action);
  } else {
    return matcher(action);
  }
};
function isAnyOf() {
  var matchers = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    matchers[_i] = arguments[_i];
  }
  return function(action) {
    return matchers.some(function(matcher) {
      return matches(matcher, action);
    });
  };
}
function isAllOf() {
  var matchers = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    matchers[_i] = arguments[_i];
  }
  return function(action) {
    return matchers.every(function(matcher) {
      return matches(matcher, action);
    });
  };
}
function hasExpectedRequestMetadata(action, validStatus) {
  if (!action || !action.meta)
    return false;
  var hasValidRequestId = typeof action.meta.requestId === "string";
  var hasValidRequestStatus = validStatus.indexOf(action.meta.requestStatus) > -1;
  return hasValidRequestId && hasValidRequestStatus;
}
function isAsyncThunkArray(a2) {
  return typeof a2[0] === "function" && "pending" in a2[0] && "fulfilled" in a2[0] && "rejected" in a2[0];
}
function isPending() {
  var asyncThunks = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    asyncThunks[_i] = arguments[_i];
  }
  if (asyncThunks.length === 0) {
    return function(action) {
      return hasExpectedRequestMetadata(action, ["pending"]);
    };
  }
  if (!isAsyncThunkArray(asyncThunks)) {
    return isPending()(asyncThunks[0]);
  }
  return function(action) {
    var matchers = asyncThunks.map(function(asyncThunk) {
      return asyncThunk.pending;
    });
    var combinedMatcher = isAnyOf.apply(void 0, matchers);
    return combinedMatcher(action);
  };
}
function isRejected() {
  var asyncThunks = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    asyncThunks[_i] = arguments[_i];
  }
  if (asyncThunks.length === 0) {
    return function(action) {
      return hasExpectedRequestMetadata(action, ["rejected"]);
    };
  }
  if (!isAsyncThunkArray(asyncThunks)) {
    return isRejected()(asyncThunks[0]);
  }
  return function(action) {
    var matchers = asyncThunks.map(function(asyncThunk) {
      return asyncThunk.rejected;
    });
    var combinedMatcher = isAnyOf.apply(void 0, matchers);
    return combinedMatcher(action);
  };
}
function isRejectedWithValue() {
  var asyncThunks = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    asyncThunks[_i] = arguments[_i];
  }
  var hasFlag = function(action) {
    return action && action.meta && action.meta.rejectedWithValue;
  };
  if (asyncThunks.length === 0) {
    return function(action) {
      var combinedMatcher = isAllOf(isRejected.apply(void 0, asyncThunks), hasFlag);
      return combinedMatcher(action);
    };
  }
  if (!isAsyncThunkArray(asyncThunks)) {
    return isRejectedWithValue()(asyncThunks[0]);
  }
  return function(action) {
    var combinedMatcher = isAllOf(isRejected.apply(void 0, asyncThunks), hasFlag);
    return combinedMatcher(action);
  };
}
function isFulfilled() {
  var asyncThunks = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    asyncThunks[_i] = arguments[_i];
  }
  if (asyncThunks.length === 0) {
    return function(action) {
      return hasExpectedRequestMetadata(action, ["fulfilled"]);
    };
  }
  if (!isAsyncThunkArray(asyncThunks)) {
    return isFulfilled()(asyncThunks[0]);
  }
  return function(action) {
    var matchers = asyncThunks.map(function(asyncThunk) {
      return asyncThunk.fulfilled;
    });
    var combinedMatcher = isAnyOf.apply(void 0, matchers);
    return combinedMatcher(action);
  };
}
function isAsyncThunkAction() {
  var asyncThunks = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    asyncThunks[_i] = arguments[_i];
  }
  if (asyncThunks.length === 0) {
    return function(action) {
      return hasExpectedRequestMetadata(action, ["pending", "fulfilled", "rejected"]);
    };
  }
  if (!isAsyncThunkArray(asyncThunks)) {
    return isAsyncThunkAction()(asyncThunks[0]);
  }
  return function(action) {
    var matchers = [];
    for (var _i2 = 0, asyncThunks_1 = asyncThunks; _i2 < asyncThunks_1.length; _i2++) {
      var asyncThunk = asyncThunks_1[_i2];
      matchers.push(asyncThunk.pending, asyncThunk.rejected, asyncThunk.fulfilled);
    }
    var combinedMatcher = isAnyOf.apply(void 0, matchers);
    return combinedMatcher(action);
  };
}
var alm = "listenerMiddleware";
createAction(alm + "/add");
createAction(alm + "/removeAll");
createAction(alm + "/remove");
N();
var __generator = globalThis && globalThis.__generator || function(thisArg, body) {
  var _2 = { label: 0, sent: function() {
    if (t2[0] & 1)
      throw t2[1];
    return t2[1];
  }, trys: [], ops: [] }, f2, y2, t2, g2;
  return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
    return this;
  }), g2;
  function verb(n2) {
    return function(v2) {
      return step([n2, v2]);
    };
  }
  function step(op) {
    if (f2)
      throw new TypeError("Generator is already executing.");
    while (_2)
      try {
        if (f2 = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done)
          return t2;
        if (y2 = 0, t2)
          op = [op[0] & 2, t2.value];
        switch (op[0]) {
          case 0:
          case 1:
            t2 = op;
            break;
          case 4:
            _2.label++;
            return { value: op[1], done: false };
          case 5:
            _2.label++;
            y2 = op[1];
            op = [0];
            continue;
          case 7:
            op = _2.ops.pop();
            _2.trys.pop();
            continue;
          default:
            if (!(t2 = _2.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _2 = 0;
              continue;
            }
            if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
              _2.label = op[1];
              break;
            }
            if (op[0] === 6 && _2.label < t2[1]) {
              _2.label = t2[1];
              t2 = op;
              break;
            }
            if (t2 && _2.label < t2[2]) {
              _2.label = t2[2];
              _2.ops.push(op);
              break;
            }
            if (t2[2])
              _2.ops.pop();
            _2.trys.pop();
            continue;
        }
        op = body.call(thisArg, _2);
      } catch (e2) {
        op = [6, e2];
        y2 = 0;
      } finally {
        f2 = t2 = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var __spreadArray$1 = globalThis && globalThis.__spreadArray || function(to2, from2) {
  for (var i2 = 0, il2 = from2.length, j2 = to2.length; i2 < il2; i2++, j2++)
    to2[j2] = from2[i2];
  return to2;
};
var __defProp$1 = Object.defineProperty;
var __defProps$1 = Object.defineProperties;
var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = function(obj, key, value) {
  return key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
};
var __spreadValues$1 = function(a2, b2) {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp$1.call(b2, prop))
      __defNormalProp$1(a2, prop, b2[prop]);
  if (__getOwnPropSymbols$1)
    for (var _i = 0, _e = __getOwnPropSymbols$1(b2); _i < _e.length; _i++) {
      var prop = _e[_i];
      if (__propIsEnum$1.call(b2, prop))
        __defNormalProp$1(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps$1 = function(a2, b2) {
  return __defProps$1(a2, __getOwnPropDescs$1(b2));
};
var __objRest = function(source, exclude) {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1)
    for (var _i = 0, _e = __getOwnPropSymbols$1(source); _i < _e.length; _i++) {
      var prop = _e[_i];
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __async = function(__this, __arguments, generator) {
  return new Promise(function(resolve, reject) {
    var fulfilled = function(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var rejected = function(value) {
      try {
        step(generator.throw(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var step = function(x2) {
      return x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
    };
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var QueryStatus;
(function(QueryStatus2) {
  QueryStatus2["uninitialized"] = "uninitialized";
  QueryStatus2["pending"] = "pending";
  QueryStatus2["fulfilled"] = "fulfilled";
  QueryStatus2["rejected"] = "rejected";
})(QueryStatus || (QueryStatus = {}));
function getRequestStatusFlags(status) {
  return {
    status,
    isUninitialized: status === QueryStatus.uninitialized,
    isLoading: status === QueryStatus.pending,
    isSuccess: status === QueryStatus.fulfilled,
    isError: status === QueryStatus.rejected
  };
}
function isAbsoluteUrl(url) {
  return new RegExp("(^|:)//").test(url);
}
var withoutTrailingSlash = function(url) {
  return url.replace(/\/$/, "");
};
var withoutLeadingSlash = function(url) {
  return url.replace(/^\//, "");
};
function joinUrls(base, url) {
  if (!base) {
    return url;
  }
  if (!url) {
    return base;
  }
  if (isAbsoluteUrl(url)) {
    return url;
  }
  base = withoutTrailingSlash(base);
  url = withoutLeadingSlash(url);
  return base + "/" + url;
}
var flatten$1 = function(arr) {
  return [].concat.apply([], arr);
};
function isOnline() {
  return typeof navigator === "undefined" ? true : navigator.onLine === void 0 ? true : navigator.onLine;
}
function isDocumentVisible() {
  if (typeof document === "undefined") {
    return true;
  }
  return document.visibilityState !== "hidden";
}
var isPlainObject$1 = isPlainObject$2;
function copyWithStructuralSharing(oldObj, newObj) {
  if (oldObj === newObj || !(isPlainObject$1(oldObj) && isPlainObject$1(newObj) || Array.isArray(oldObj) && Array.isArray(newObj))) {
    return newObj;
  }
  var newKeys = Object.keys(newObj);
  var oldKeys = Object.keys(oldObj);
  var isSameObject = newKeys.length === oldKeys.length;
  var mergeObj = Array.isArray(newObj) ? [] : {};
  for (var _i = 0, newKeys_1 = newKeys; _i < newKeys_1.length; _i++) {
    var key = newKeys_1[_i];
    mergeObj[key] = copyWithStructuralSharing(oldObj[key], newObj[key]);
    if (isSameObject)
      isSameObject = oldObj[key] === mergeObj[key];
  }
  return isSameObject ? oldObj : mergeObj;
}
var defaultFetchFn = function() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  return fetch.apply(void 0, args);
};
var defaultValidateStatus = function(response) {
  return response.status >= 200 && response.status <= 299;
};
var isJsonContentType = function(headers) {
  var _a, _b;
  return (_b = (_a = headers.get("content-type")) == null ? void 0 : _a.trim()) == null ? void 0 : _b.startsWith("application/json");
};
var handleResponse = function(response, responseHandler) {
  return __async(void 0, null, function() {
    var text;
    return __generator(this, function(_e) {
      switch (_e.label) {
        case 0:
          if (typeof responseHandler === "function") {
            return [2, responseHandler(response)];
          }
          if (responseHandler === "text") {
            return [2, response.text()];
          }
          if (!(responseHandler === "json"))
            return [3, 2];
          return [4, response.text()];
        case 1:
          text = _e.sent();
          return [2, text.length ? JSON.parse(text) : null];
        case 2:
          return [2];
      }
    });
  });
};
function stripUndefined(obj) {
  if (!isPlainObject$2(obj)) {
    return obj;
  }
  var copy = __spreadValues$1({}, obj);
  for (var _i = 0, _e = Object.entries(copy); _i < _e.length; _i++) {
    var _f = _e[_i], k2 = _f[0], v2 = _f[1];
    if (typeof v2 === "undefined")
      delete copy[k2];
  }
  return copy;
}
function fetchBaseQuery(_a) {
  var _this = this;
  if (_a === void 0) {
    _a = {};
  }
  var _b = _a, baseUrl = _b.baseUrl, _e = _b.prepareHeaders, prepareHeaders = _e === void 0 ? function(x2) {
    return x2;
  } : _e, _f = _b.fetchFn, fetchFn = _f === void 0 ? defaultFetchFn : _f, paramsSerializer = _b.paramsSerializer, baseFetchOptions = __objRest(_b, [
    "baseUrl",
    "prepareHeaders",
    "fetchFn",
    "paramsSerializer"
  ]);
  if (typeof fetch === "undefined" && fetchFn === defaultFetchFn) {
    console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments.");
  }
  return function(arg, api2) {
    return __async(_this, null, function() {
      var signal, getState, extra, endpoint, forced, type, meta, _a2, url, _e2, method, _f2, headers, _g, body, _h, params, _j, responseHandler, _k, validateStatus, rest, config, _l, isJsonifiable, divider, query, request, requestClone, response, e_1, responseClone, resultData, responseText, handleResponseError_1, e_2;
      return __generator(this, function(_m) {
        switch (_m.label) {
          case 0:
            signal = api2.signal, getState = api2.getState, extra = api2.extra, endpoint = api2.endpoint, forced = api2.forced, type = api2.type;
            _a2 = typeof arg == "string" ? { url: arg } : arg, url = _a2.url, _e2 = _a2.method, method = _e2 === void 0 ? "GET" : _e2, _f2 = _a2.headers, headers = _f2 === void 0 ? new Headers({}) : _f2, _g = _a2.body, body = _g === void 0 ? void 0 : _g, _h = _a2.params, params = _h === void 0 ? void 0 : _h, _j = _a2.responseHandler, responseHandler = _j === void 0 ? "json" : _j, _k = _a2.validateStatus, validateStatus = _k === void 0 ? defaultValidateStatus : _k, rest = __objRest(_a2, [
              "url",
              "method",
              "headers",
              "body",
              "params",
              "responseHandler",
              "validateStatus"
            ]);
            config = __spreadValues$1(__spreadProps$1(__spreadValues$1({}, baseFetchOptions), {
              method,
              signal,
              body
            }), rest);
            _l = config;
            return [4, prepareHeaders(new Headers(stripUndefined(headers)), { getState, extra, endpoint, forced, type })];
          case 1:
            _l.headers = _m.sent();
            isJsonifiable = function(body2) {
              return typeof body2 === "object" && (isPlainObject$2(body2) || Array.isArray(body2) || typeof body2.toJSON === "function");
            };
            if (!config.headers.has("content-type") && isJsonifiable(body)) {
              config.headers.set("content-type", "application/json");
            }
            if (body && isJsonContentType(config.headers)) {
              config.body = JSON.stringify(body);
            }
            if (params) {
              divider = ~url.indexOf("?") ? "&" : "?";
              query = paramsSerializer ? paramsSerializer(params) : new URLSearchParams(stripUndefined(params));
              url += divider + query;
            }
            url = joinUrls(baseUrl, url);
            request = new Request(url, config);
            requestClone = request.clone();
            meta = { request: requestClone };
            _m.label = 2;
          case 2:
            _m.trys.push([2, 4, , 5]);
            return [4, fetchFn(request)];
          case 3:
            response = _m.sent();
            return [3, 5];
          case 4:
            e_1 = _m.sent();
            return [2, { error: { status: "FETCH_ERROR", error: String(e_1) }, meta }];
          case 5:
            responseClone = response.clone();
            meta.response = responseClone;
            responseText = "";
            _m.label = 6;
          case 6:
            _m.trys.push([6, 8, , 9]);
            return [4, Promise.all([
              handleResponse(response, responseHandler).then(function(r2) {
                return resultData = r2;
              }, function(e2) {
                return handleResponseError_1 = e2;
              }),
              responseClone.text().then(function(r2) {
                return responseText = r2;
              }, function() {
              })
            ])];
          case 7:
            _m.sent();
            if (handleResponseError_1)
              throw handleResponseError_1;
            return [3, 9];
          case 8:
            e_2 = _m.sent();
            return [2, {
              error: {
                status: "PARSING_ERROR",
                originalStatus: response.status,
                data: responseText,
                error: String(e_2)
              },
              meta
            }];
          case 9:
            return [2, validateStatus(response, resultData) ? {
              data: resultData,
              meta
            } : {
              error: {
                status: response.status,
                data: resultData
              },
              meta
            }];
        }
      });
    });
  };
}
var HandledError = function() {
  function HandledError2(value, meta) {
    if (meta === void 0) {
      meta = void 0;
    }
    this.value = value;
    this.meta = meta;
  }
  return HandledError2;
}();
var onFocus = /* @__PURE__ */ createAction("__rtkq/focused");
var onFocusLost = /* @__PURE__ */ createAction("__rtkq/unfocused");
var onOnline = /* @__PURE__ */ createAction("__rtkq/online");
var onOffline = /* @__PURE__ */ createAction("__rtkq/offline");
var initialized = false;
function setupListeners(dispatch, customHandler) {
  function defaultHandler() {
    var handleFocus = function() {
      return dispatch(onFocus());
    };
    var handleFocusLost = function() {
      return dispatch(onFocusLost());
    };
    var handleOnline = function() {
      return dispatch(onOnline());
    };
    var handleOffline = function() {
      return dispatch(onOffline());
    };
    var handleVisibilityChange = function() {
      if (window.document.visibilityState === "visible") {
        handleFocus();
      } else {
        handleFocusLost();
      }
    };
    if (!initialized) {
      if (typeof window !== "undefined" && window.addEventListener) {
        window.addEventListener("visibilitychange", handleVisibilityChange, false);
        window.addEventListener("focus", handleFocus, false);
        window.addEventListener("online", handleOnline, false);
        window.addEventListener("offline", handleOffline, false);
        initialized = true;
      }
    }
    var unsubscribe = function() {
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      initialized = false;
    };
    return unsubscribe;
  }
  return customHandler ? customHandler(dispatch, { onFocus, onFocusLost, onOffline, onOnline }) : defaultHandler();
}
var DefinitionType$1;
(function(DefinitionType2) {
  DefinitionType2["query"] = "query";
  DefinitionType2["mutation"] = "mutation";
})(DefinitionType$1 || (DefinitionType$1 = {}));
function isQueryDefinition$1(e2) {
  return e2.type === DefinitionType$1.query;
}
function isMutationDefinition$1(e2) {
  return e2.type === DefinitionType$1.mutation;
}
function calculateProvidedBy(description, result, error, queryArg, meta, assertTagTypes) {
  if (isFunction$2(description)) {
    return description(result, error, queryArg, meta).map(expandTagDescription).map(assertTagTypes);
  }
  if (Array.isArray(description)) {
    return description.map(expandTagDescription).map(assertTagTypes);
  }
  return [];
}
function isFunction$2(t2) {
  return typeof t2 === "function";
}
function expandTagDescription(description) {
  return typeof description === "string" ? { type: description } : description;
}
function defaultTransformResponse(baseQueryReturnValue) {
  return baseQueryReturnValue;
}
function buildThunks(_e) {
  var _this = this;
  var reducerPath = _e.reducerPath, baseQuery = _e.baseQuery, endpointDefinitions = _e.context.endpointDefinitions, serializeQueryArgs = _e.serializeQueryArgs, api2 = _e.api;
  var patchQueryData = function(endpointName, args, patches) {
    return function(dispatch) {
      var endpointDefinition = endpointDefinitions[endpointName];
      dispatch(api2.internalActions.queryResultPatched({
        queryCacheKey: serializeQueryArgs({
          queryArgs: args,
          endpointDefinition,
          endpointName
        }),
        patches
      }));
    };
  };
  var updateQueryData = function(endpointName, args, updateRecipe) {
    return function(dispatch, getState) {
      var _e2, _f;
      var currentState = api2.endpoints[endpointName].select(args)(getState());
      var ret = {
        patches: [],
        inversePatches: [],
        undo: function() {
          return dispatch(api2.util.patchQueryData(endpointName, args, ret.inversePatches));
        }
      };
      if (currentState.status === QueryStatus.uninitialized) {
        return ret;
      }
      if ("data" in currentState) {
        if (t(currentState.data)) {
          var _g = cn(currentState.data, updateRecipe), patches = _g[1], inversePatches = _g[2];
          (_e2 = ret.patches).push.apply(_e2, patches);
          (_f = ret.inversePatches).push.apply(_f, inversePatches);
        } else {
          var value = updateRecipe(currentState.data);
          ret.patches.push({ op: "replace", path: [], value });
          ret.inversePatches.push({
            op: "replace",
            path: [],
            value: currentState.data
          });
        }
      }
      dispatch(api2.util.patchQueryData(endpointName, args, ret.patches));
      return ret;
    };
  };
  var executeEndpoint = function(_0, _1) {
    return __async(_this, [_0, _1], function(arg, _e2) {
      var endpointDefinition, transformResponse, result, baseQueryApi_1, what, err, _i, _f, key, _g, error_1;
      var signal = _e2.signal, rejectWithValue = _e2.rejectWithValue, fulfillWithValue = _e2.fulfillWithValue, dispatch = _e2.dispatch, getState = _e2.getState, extra = _e2.extra;
      return __generator(this, function(_h) {
        switch (_h.label) {
          case 0:
            endpointDefinition = endpointDefinitions[arg.endpointName];
            _h.label = 1;
          case 1:
            _h.trys.push([1, 7, , 8]);
            transformResponse = defaultTransformResponse;
            result = void 0;
            baseQueryApi_1 = {
              signal,
              dispatch,
              getState,
              extra,
              endpoint: arg.endpointName,
              type: arg.type,
              forced: arg.type === "query" ? isForcedQuery(arg, getState()) : void 0
            };
            if (!endpointDefinition.query)
              return [3, 3];
            return [4, baseQuery(endpointDefinition.query(arg.originalArgs), baseQueryApi_1, endpointDefinition.extraOptions)];
          case 2:
            result = _h.sent();
            if (endpointDefinition.transformResponse) {
              transformResponse = endpointDefinition.transformResponse;
            }
            return [3, 5];
          case 3:
            return [4, endpointDefinition.queryFn(arg.originalArgs, baseQueryApi_1, endpointDefinition.extraOptions, function(arg2) {
              return baseQuery(arg2, baseQueryApi_1, endpointDefinition.extraOptions);
            })];
          case 4:
            result = _h.sent();
            _h.label = 5;
          case 5:
            if (typeof process !== "undefined" && false) {
              what = endpointDefinition.query ? "`baseQuery`" : "`queryFn`";
              err = void 0;
              if (!result) {
                err = what + " did not return anything.";
              } else if (typeof result !== "object") {
                err = what + " did not return an object.";
              } else if (result.error && result.data) {
                err = what + " returned an object containing both `error` and `result`.";
              } else if (result.error === void 0 && result.data === void 0) {
                err = what + " returned an object containing neither a valid `error` and `result`. At least one of them should not be `undefined`";
              } else {
                for (_i = 0, _f = Object.keys(result); _i < _f.length; _i++) {
                  key = _f[_i];
                  if (key !== "error" && key !== "data" && key !== "meta") {
                    err = "The object returned by " + what + " has the unknown property " + key + ".";
                    break;
                  }
                }
              }
              if (err) {
                console.error("Error encountered handling the endpoint " + arg.endpointName + ".\n              " + err + "\n              It needs to return an object with either the shape `{ data: <value> }` or `{ error: <value> }` that may contain an optional `meta` property.\n              Object returned was:", result);
              }
            }
            if (result.error)
              throw new HandledError(result.error, result.meta);
            _g = fulfillWithValue;
            return [4, transformResponse(result.data, result.meta, arg.originalArgs)];
          case 6:
            return [2, _g.apply(void 0, [_h.sent(), {
              fulfilledTimeStamp: Date.now(),
              baseQueryMeta: result.meta
            }])];
          case 7:
            error_1 = _h.sent();
            if (error_1 instanceof HandledError) {
              return [2, rejectWithValue(error_1.value, { baseQueryMeta: error_1.meta })];
            }
            if (typeof process !== "undefined" && false) {
              console.error('An unhandled error occured processing a request for the endpoint "' + arg.endpointName + '".\nIn the case of an unhandled error, no tags will be "provided" or "invalidated".', error_1);
            } else {
              console.error(error_1);
            }
            throw error_1;
          case 8:
            return [2];
        }
      });
    });
  };
  function isForcedQuery(arg, state) {
    var _a, _b, _c, _d;
    var requestState = (_b = (_a = state[reducerPath]) == null ? void 0 : _a.queries) == null ? void 0 : _b[arg.queryCacheKey];
    var baseFetchOnMountOrArgChange = (_c = state[reducerPath]) == null ? void 0 : _c.config.refetchOnMountOrArgChange;
    var fulfilledVal = requestState == null ? void 0 : requestState.fulfilledTimeStamp;
    var refetchVal = (_d = arg.forceRefetch) != null ? _d : arg.subscribe && baseFetchOnMountOrArgChange;
    if (refetchVal) {
      return refetchVal === true || (Number(new Date()) - Number(fulfilledVal)) / 1e3 >= refetchVal;
    }
    return false;
  }
  var queryThunk = createAsyncThunk(reducerPath + "/executeQuery", executeEndpoint, {
    getPendingMeta: function() {
      return { startedTimeStamp: Date.now() };
    },
    condition: function(arg, _e2) {
      var getState = _e2.getState;
      var _a, _b;
      var state = getState();
      var requestState = (_b = (_a = state[reducerPath]) == null ? void 0 : _a.queries) == null ? void 0 : _b[arg.queryCacheKey];
      var fulfilledVal = requestState == null ? void 0 : requestState.fulfilledTimeStamp;
      if ((requestState == null ? void 0 : requestState.status) === "pending")
        return false;
      if (isForcedQuery(arg, state))
        return true;
      if (fulfilledVal)
        return false;
      return true;
    },
    dispatchConditionRejection: true
  });
  var mutationThunk = createAsyncThunk(reducerPath + "/executeMutation", executeEndpoint, {
    getPendingMeta: function() {
      return { startedTimeStamp: Date.now() };
    }
  });
  var hasTheForce = function(options) {
    return "force" in options;
  };
  var hasMaxAge = function(options) {
    return "ifOlderThan" in options;
  };
  var prefetch = function(endpointName, arg, options) {
    return function(dispatch, getState) {
      var force = hasTheForce(options) && options.force;
      var maxAge = hasMaxAge(options) && options.ifOlderThan;
      var queryAction = function(force2) {
        if (force2 === void 0) {
          force2 = true;
        }
        return api2.endpoints[endpointName].initiate(arg, { forceRefetch: force2 });
      };
      var latestStateValue = api2.endpoints[endpointName].select(arg)(getState());
      if (force) {
        dispatch(queryAction());
      } else if (maxAge) {
        var lastFulfilledTs = latestStateValue == null ? void 0 : latestStateValue.fulfilledTimeStamp;
        if (!lastFulfilledTs) {
          dispatch(queryAction());
          return;
        }
        var shouldRetrigger = (Number(new Date()) - Number(new Date(lastFulfilledTs))) / 1e3 >= maxAge;
        if (shouldRetrigger) {
          dispatch(queryAction());
        }
      } else {
        dispatch(queryAction(false));
      }
    };
  };
  function matchesEndpoint(endpointName) {
    return function(action) {
      var _a, _b;
      return ((_b = (_a = action == null ? void 0 : action.meta) == null ? void 0 : _a.arg) == null ? void 0 : _b.endpointName) === endpointName;
    };
  }
  function buildMatchThunkActions(thunk2, endpointName) {
    return {
      matchPending: isAllOf(isPending(thunk2), matchesEndpoint(endpointName)),
      matchFulfilled: isAllOf(isFulfilled(thunk2), matchesEndpoint(endpointName)),
      matchRejected: isAllOf(isRejected(thunk2), matchesEndpoint(endpointName))
    };
  }
  return {
    queryThunk,
    mutationThunk,
    prefetch,
    updateQueryData,
    patchQueryData,
    buildMatchThunkActions
  };
}
function calculateProvidedByThunk(action, type, endpointDefinitions, assertTagType) {
  return calculateProvidedBy(endpointDefinitions[action.meta.arg.endpointName][type], isFulfilled(action) ? action.payload : void 0, isRejectedWithValue(action) ? action.payload : void 0, action.meta.arg.originalArgs, "baseQueryMeta" in action.meta ? action.meta.baseQueryMeta : void 0, assertTagType);
}
function updateQuerySubstateIfExists(state, queryCacheKey, update) {
  var substate = state[queryCacheKey];
  if (substate) {
    update(substate);
  }
}
function getMutationCacheKey(id2) {
  var _a;
  return (_a = "arg" in id2 ? id2.arg.fixedCacheKey : id2.fixedCacheKey) != null ? _a : id2.requestId;
}
function updateMutationSubstateIfExists(state, id2, update) {
  var substate = state[getMutationCacheKey(id2)];
  if (substate) {
    update(substate);
  }
}
var initialState$2 = {};
function buildSlice(_e) {
  var reducerPath = _e.reducerPath, queryThunk = _e.queryThunk, mutationThunk = _e.mutationThunk, _f = _e.context, definitions = _f.endpointDefinitions, apiUid = _f.apiUid, extractRehydrationInfo = _f.extractRehydrationInfo, hasRehydrationInfo = _f.hasRehydrationInfo, assertTagType = _e.assertTagType, config = _e.config;
  var resetApiState = createAction(reducerPath + "/resetApiState");
  var querySlice = createSlice({
    name: reducerPath + "/queries",
    initialState: initialState$2,
    reducers: {
      removeQueryResult: function(draft, _e2) {
        var queryCacheKey = _e2.payload.queryCacheKey;
        delete draft[queryCacheKey];
      },
      queryResultPatched: function(draft, _e2) {
        var _f2 = _e2.payload, queryCacheKey = _f2.queryCacheKey, patches = _f2.patches;
        updateQuerySubstateIfExists(draft, queryCacheKey, function(substate) {
          substate.data = pn(substate.data, patches.concat());
        });
      }
    },
    extraReducers: function(builder) {
      builder.addCase(queryThunk.pending, function(draft, _e2) {
        var meta = _e2.meta, arg = _e2.meta.arg;
        var _a, _b;
        if (arg.subscribe) {
          (_b = draft[_a = arg.queryCacheKey]) != null ? _b : draft[_a] = {
            status: QueryStatus.uninitialized,
            endpointName: arg.endpointName
          };
        }
        updateQuerySubstateIfExists(draft, arg.queryCacheKey, function(substate) {
          substate.status = QueryStatus.pending;
          substate.requestId = meta.requestId;
          if (arg.originalArgs !== void 0) {
            substate.originalArgs = arg.originalArgs;
          }
          substate.startedTimeStamp = meta.startedTimeStamp;
        });
      }).addCase(queryThunk.fulfilled, function(draft, _e2) {
        var meta = _e2.meta, payload = _e2.payload;
        updateQuerySubstateIfExists(draft, meta.arg.queryCacheKey, function(substate) {
          var _a;
          if (substate.requestId !== meta.requestId)
            return;
          substate.status = QueryStatus.fulfilled;
          substate.data = ((_a = definitions[meta.arg.endpointName].structuralSharing) != null ? _a : true) ? copyWithStructuralSharing(substate.data, payload) : payload;
          delete substate.error;
          substate.fulfilledTimeStamp = meta.fulfilledTimeStamp;
        });
      }).addCase(queryThunk.rejected, function(draft, _e2) {
        var _f2 = _e2.meta, condition = _f2.condition, arg = _f2.arg, requestId = _f2.requestId, error = _e2.error, payload = _e2.payload;
        updateQuerySubstateIfExists(draft, arg.queryCacheKey, function(substate) {
          if (condition)
            ;
          else {
            if (substate.requestId !== requestId)
              return;
            substate.status = QueryStatus.rejected;
            substate.error = payload != null ? payload : error;
          }
        });
      }).addMatcher(hasRehydrationInfo, function(draft, action) {
        var queries = extractRehydrationInfo(action).queries;
        for (var _i = 0, _e2 = Object.entries(queries); _i < _e2.length; _i++) {
          var _f2 = _e2[_i], key = _f2[0], entry = _f2[1];
          if ((entry == null ? void 0 : entry.status) === QueryStatus.fulfilled || (entry == null ? void 0 : entry.status) === QueryStatus.rejected) {
            draft[key] = entry;
          }
        }
      });
    }
  });
  var mutationSlice = createSlice({
    name: reducerPath + "/mutations",
    initialState: initialState$2,
    reducers: {
      removeMutationResult: function(draft, _e2) {
        var payload = _e2.payload;
        var cacheKey = getMutationCacheKey(payload);
        if (cacheKey in draft) {
          delete draft[cacheKey];
        }
      }
    },
    extraReducers: function(builder) {
      builder.addCase(mutationThunk.pending, function(draft, _e2) {
        var meta = _e2.meta, _f2 = _e2.meta, requestId = _f2.requestId, arg = _f2.arg, startedTimeStamp = _f2.startedTimeStamp;
        if (!arg.track)
          return;
        draft[getMutationCacheKey(meta)] = {
          requestId,
          status: QueryStatus.pending,
          endpointName: arg.endpointName,
          startedTimeStamp
        };
      }).addCase(mutationThunk.fulfilled, function(draft, _e2) {
        var payload = _e2.payload, meta = _e2.meta;
        if (!meta.arg.track)
          return;
        updateMutationSubstateIfExists(draft, meta, function(substate) {
          if (substate.requestId !== meta.requestId)
            return;
          substate.status = QueryStatus.fulfilled;
          substate.data = payload;
          substate.fulfilledTimeStamp = meta.fulfilledTimeStamp;
        });
      }).addCase(mutationThunk.rejected, function(draft, _e2) {
        var payload = _e2.payload, error = _e2.error, meta = _e2.meta;
        if (!meta.arg.track)
          return;
        updateMutationSubstateIfExists(draft, meta, function(substate) {
          if (substate.requestId !== meta.requestId)
            return;
          substate.status = QueryStatus.rejected;
          substate.error = payload != null ? payload : error;
        });
      }).addMatcher(hasRehydrationInfo, function(draft, action) {
        var mutations = extractRehydrationInfo(action).mutations;
        for (var _i = 0, _e2 = Object.entries(mutations); _i < _e2.length; _i++) {
          var _f2 = _e2[_i], key = _f2[0], entry = _f2[1];
          if (((entry == null ? void 0 : entry.status) === QueryStatus.fulfilled || (entry == null ? void 0 : entry.status) === QueryStatus.rejected) && key !== (entry == null ? void 0 : entry.requestId)) {
            draft[key] = entry;
          }
        }
      });
    }
  });
  var invalidationSlice = createSlice({
    name: reducerPath + "/invalidation",
    initialState: initialState$2,
    reducers: {},
    extraReducers: function(builder) {
      builder.addCase(querySlice.actions.removeQueryResult, function(draft, _e2) {
        var queryCacheKey = _e2.payload.queryCacheKey;
        for (var _i = 0, _f2 = Object.values(draft); _i < _f2.length; _i++) {
          var tagTypeSubscriptions = _f2[_i];
          for (var _g = 0, _h = Object.values(tagTypeSubscriptions); _g < _h.length; _g++) {
            var idSubscriptions = _h[_g];
            var foundAt = idSubscriptions.indexOf(queryCacheKey);
            if (foundAt !== -1) {
              idSubscriptions.splice(foundAt, 1);
            }
          }
        }
      }).addMatcher(hasRehydrationInfo, function(draft, action) {
        var _a, _b, _c, _d;
        var provided = extractRehydrationInfo(action).provided;
        for (var _i = 0, _e2 = Object.entries(provided); _i < _e2.length; _i++) {
          var _f2 = _e2[_i], type = _f2[0], incomingTags = _f2[1];
          for (var _g = 0, _h = Object.entries(incomingTags); _g < _h.length; _g++) {
            var _j = _h[_g], id2 = _j[0], cacheKeys = _j[1];
            var subscribedQueries = (_d = (_b = (_a = draft[type]) != null ? _a : draft[type] = {})[_c = id2 || "__internal_without_id"]) != null ? _d : _b[_c] = [];
            for (var _k = 0, cacheKeys_1 = cacheKeys; _k < cacheKeys_1.length; _k++) {
              var queryCacheKey = cacheKeys_1[_k];
              var alreadySubscribed = subscribedQueries.includes(queryCacheKey);
              if (!alreadySubscribed) {
                subscribedQueries.push(queryCacheKey);
              }
            }
          }
        }
      }).addMatcher(isAnyOf(isFulfilled(queryThunk), isRejectedWithValue(queryThunk)), function(draft, action) {
        var _a, _b, _c, _d;
        var providedTags = calculateProvidedByThunk(action, "providesTags", definitions, assertTagType);
        var queryCacheKey = action.meta.arg.queryCacheKey;
        for (var _i = 0, providedTags_1 = providedTags; _i < providedTags_1.length; _i++) {
          var _e2 = providedTags_1[_i], type = _e2.type, id2 = _e2.id;
          var subscribedQueries = (_d = (_b = (_a = draft[type]) != null ? _a : draft[type] = {})[_c = id2 || "__internal_without_id"]) != null ? _d : _b[_c] = [];
          var alreadySubscribed = subscribedQueries.includes(queryCacheKey);
          if (!alreadySubscribed) {
            subscribedQueries.push(queryCacheKey);
          }
        }
      });
    }
  });
  var subscriptionSlice = createSlice({
    name: reducerPath + "/subscriptions",
    initialState: initialState$2,
    reducers: {
      updateSubscriptionOptions: function(draft, _e2) {
        var _f2 = _e2.payload, queryCacheKey = _f2.queryCacheKey, requestId = _f2.requestId, options = _f2.options;
        var _a;
        if ((_a = draft == null ? void 0 : draft[queryCacheKey]) == null ? void 0 : _a[requestId]) {
          draft[queryCacheKey][requestId] = options;
        }
      },
      unsubscribeQueryResult: function(draft, _e2) {
        var _f2 = _e2.payload, queryCacheKey = _f2.queryCacheKey, requestId = _f2.requestId;
        if (draft[queryCacheKey]) {
          delete draft[queryCacheKey][requestId];
        }
      }
    },
    extraReducers: function(builder) {
      builder.addCase(querySlice.actions.removeQueryResult, function(draft, _e2) {
        var queryCacheKey = _e2.payload.queryCacheKey;
        delete draft[queryCacheKey];
      }).addCase(queryThunk.pending, function(draft, _e2) {
        var _f2 = _e2.meta, arg = _f2.arg, requestId = _f2.requestId;
        var _a, _b, _c, _d;
        if (arg.subscribe) {
          var substate = (_b = draft[_a = arg.queryCacheKey]) != null ? _b : draft[_a] = {};
          substate[requestId] = (_d = (_c = arg.subscriptionOptions) != null ? _c : substate[requestId]) != null ? _d : {};
        }
      }).addCase(queryThunk.rejected, function(draft, _e2) {
        var _f2 = _e2.meta, condition = _f2.condition, arg = _f2.arg, requestId = _f2.requestId;
        _e2.error;
        _e2.payload;
        var _a, _b, _c, _d;
        if (condition && arg.subscribe) {
          var substate = (_b = draft[_a = arg.queryCacheKey]) != null ? _b : draft[_a] = {};
          substate[requestId] = (_d = (_c = arg.subscriptionOptions) != null ? _c : substate[requestId]) != null ? _d : {};
        }
      }).addMatcher(hasRehydrationInfo, function(draft) {
        return __spreadValues$1({}, draft);
      });
    }
  });
  var configSlice = createSlice({
    name: reducerPath + "/config",
    initialState: __spreadValues$1({
      online: isOnline(),
      focused: isDocumentVisible(),
      middlewareRegistered: false
    }, config),
    reducers: {
      middlewareRegistered: function(state, _e2) {
        var payload = _e2.payload;
        state.middlewareRegistered = state.middlewareRegistered === "conflict" || apiUid !== payload ? "conflict" : true;
      }
    },
    extraReducers: function(builder) {
      builder.addCase(onOnline, function(state) {
        state.online = true;
      }).addCase(onOffline, function(state) {
        state.online = false;
      }).addCase(onFocus, function(state) {
        state.focused = true;
      }).addCase(onFocusLost, function(state) {
        state.focused = false;
      }).addMatcher(hasRehydrationInfo, function(draft) {
        return __spreadValues$1({}, draft);
      });
    }
  });
  var combinedReducer = combineReducers({
    queries: querySlice.reducer,
    mutations: mutationSlice.reducer,
    provided: invalidationSlice.reducer,
    subscriptions: subscriptionSlice.reducer,
    config: configSlice.reducer
  });
  var reducer = function(state, action) {
    return combinedReducer(resetApiState.match(action) ? void 0 : state, action);
  };
  var actions = __spreadProps$1(__spreadValues$1(__spreadValues$1(__spreadValues$1(__spreadValues$1({}, configSlice.actions), querySlice.actions), subscriptionSlice.actions), mutationSlice.actions), {
    unsubscribeMutationResult: mutationSlice.actions.removeMutationResult,
    resetApiState
  });
  return { reducer, actions };
}
var skipToken = /* @__PURE__ */ Symbol.for("RTKQ/skipToken");
var initialSubState = {
  status: QueryStatus.uninitialized
};
var defaultQuerySubState = /* @__PURE__ */ createNextState(initialSubState, function() {
});
var defaultMutationSubState = /* @__PURE__ */ createNextState(initialSubState, function() {
});
function buildSelectors(_e) {
  var serializeQueryArgs = _e.serializeQueryArgs, reducerPath = _e.reducerPath;
  return { buildQuerySelector, buildMutationSelector, selectInvalidatedBy };
  function withRequestFlags(substate) {
    return __spreadValues$1(__spreadValues$1({}, substate), getRequestStatusFlags(substate.status));
  }
  function selectInternalState(rootState) {
    var state = rootState[reducerPath];
    return state;
  }
  function buildQuerySelector(endpointName, endpointDefinition) {
    return function(queryArgs) {
      var selectQuerySubState = createSelector(selectInternalState, function(internalState) {
        var _a, _b;
        return (_b = queryArgs === skipToken ? void 0 : (_a = internalState == null ? void 0 : internalState.queries) == null ? void 0 : _a[serializeQueryArgs({
          queryArgs,
          endpointDefinition,
          endpointName
        })]) != null ? _b : defaultQuerySubState;
      });
      return createSelector(selectQuerySubState, withRequestFlags);
    };
  }
  function buildMutationSelector() {
    return function(id2) {
      var _a;
      var mutationId;
      if (typeof id2 === "object") {
        mutationId = (_a = getMutationCacheKey(id2)) != null ? _a : skipToken;
      } else {
        mutationId = id2;
      }
      var selectMutationSubstate = createSelector(selectInternalState, function(internalState) {
        var _a2, _b;
        return (_b = mutationId === skipToken ? void 0 : (_a2 = internalState == null ? void 0 : internalState.mutations) == null ? void 0 : _a2[mutationId]) != null ? _b : defaultMutationSubState;
      });
      return createSelector(selectMutationSubstate, withRequestFlags);
    };
  }
  function selectInvalidatedBy(state, tags) {
    var _a;
    var apiState = state[reducerPath];
    var toInvalidate = /* @__PURE__ */ new Set();
    for (var _i = 0, _e2 = tags.map(expandTagDescription); _i < _e2.length; _i++) {
      var tag = _e2[_i];
      var provided = apiState.provided[tag.type];
      if (!provided) {
        continue;
      }
      var invalidateSubscriptions = (_a = tag.id !== void 0 ? provided[tag.id] : flatten$1(Object.values(provided))) != null ? _a : [];
      for (var _f = 0, invalidateSubscriptions_1 = invalidateSubscriptions; _f < invalidateSubscriptions_1.length; _f++) {
        var invalidate = invalidateSubscriptions_1[_f];
        toInvalidate.add(invalidate);
      }
    }
    return flatten$1(Array.from(toInvalidate.values()).map(function(queryCacheKey) {
      var querySubState = apiState.queries[queryCacheKey];
      return querySubState ? [
        {
          queryCacheKey,
          endpointName: querySubState.endpointName,
          originalArgs: querySubState.originalArgs
        }
      ] : [];
    }));
  }
}
var defaultSerializeQueryArgs = function(_e) {
  var endpointName = _e.endpointName, queryArgs = _e.queryArgs;
  return endpointName + "(" + JSON.stringify(queryArgs, function(key, value) {
    return isPlainObject$2(value) ? Object.keys(value).sort().reduce(function(acc, key2) {
      acc[key2] = value[key2];
      return acc;
    }, {}) : value;
  }) + ")";
};
function buildCreateApi() {
  var modules = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    modules[_i] = arguments[_i];
  }
  return function baseCreateApi(options) {
    var extractRehydrationInfo = defaultMemoize(function(action) {
      var _a, _b;
      return (_b = options.extractRehydrationInfo) == null ? void 0 : _b.call(options, action, {
        reducerPath: (_a = options.reducerPath) != null ? _a : "api"
      });
    });
    var optionsWithDefaults = __spreadProps$1(__spreadValues$1({
      reducerPath: "api",
      serializeQueryArgs: defaultSerializeQueryArgs,
      keepUnusedDataFor: 60,
      refetchOnMountOrArgChange: false,
      refetchOnFocus: false,
      refetchOnReconnect: false
    }, options), {
      extractRehydrationInfo,
      tagTypes: __spreadArray$1([], options.tagTypes || [])
    });
    var context = {
      endpointDefinitions: {},
      batch: function(fn2) {
        fn2();
      },
      apiUid: nanoid(),
      extractRehydrationInfo,
      hasRehydrationInfo: defaultMemoize(function(action) {
        return extractRehydrationInfo(action) != null;
      })
    };
    var api2 = {
      injectEndpoints,
      enhanceEndpoints: function(_e) {
        var addTagTypes = _e.addTagTypes, endpoints = _e.endpoints;
        if (addTagTypes) {
          for (var _i2 = 0, addTagTypes_1 = addTagTypes; _i2 < addTagTypes_1.length; _i2++) {
            var eT = addTagTypes_1[_i2];
            if (!optionsWithDefaults.tagTypes.includes(eT)) {
              optionsWithDefaults.tagTypes.push(eT);
            }
          }
        }
        if (endpoints) {
          for (var _f = 0, _g = Object.entries(endpoints); _f < _g.length; _f++) {
            var _h = _g[_f], endpointName = _h[0], partialDefinition = _h[1];
            if (typeof partialDefinition === "function") {
              partialDefinition(context.endpointDefinitions[endpointName]);
            }
            Object.assign(context.endpointDefinitions[endpointName] || {}, partialDefinition);
          }
        }
        return api2;
      }
    };
    var initializedModules = modules.map(function(m2) {
      return m2.init(api2, optionsWithDefaults, context);
    });
    function injectEndpoints(inject) {
      var evaluatedEndpoints = inject.endpoints({
        query: function(x2) {
          return __spreadProps$1(__spreadValues$1({}, x2), { type: DefinitionType$1.query });
        },
        mutation: function(x2) {
          return __spreadProps$1(__spreadValues$1({}, x2), { type: DefinitionType$1.mutation });
        }
      });
      for (var _i2 = 0, _e = Object.entries(evaluatedEndpoints); _i2 < _e.length; _i2++) {
        var _f = _e[_i2], endpointName = _f[0], definition = _f[1];
        if (!inject.overrideExisting && endpointName in context.endpointDefinitions) {
          if (typeof process !== "undefined" && false) {
            console.error("called `injectEndpoints` to override already-existing endpointName " + endpointName + " without specifying `overrideExisting: true`");
          }
          continue;
        }
        context.endpointDefinitions[endpointName] = definition;
        for (var _g = 0, initializedModules_1 = initializedModules; _g < initializedModules_1.length; _g++) {
          var m2 = initializedModules_1[_g];
          m2.injectEndpoint(endpointName, definition);
        }
      }
      return api2;
    }
    return api2.injectEndpoints({ endpoints: options.endpoints });
  };
}
var build = function(_e) {
  var reducerPath = _e.reducerPath, api2 = _e.api, context = _e.context;
  var _f = api2.internalActions, removeQueryResult = _f.removeQueryResult, unsubscribeQueryResult = _f.unsubscribeQueryResult;
  return function(mwApi) {
    var currentRemovalTimeouts = {};
    return function(next) {
      return function(action) {
        var _a;
        var result = next(action);
        if (unsubscribeQueryResult.match(action)) {
          var state = mwApi.getState()[reducerPath];
          var queryCacheKey = action.payload.queryCacheKey;
          handleUnsubscribe(queryCacheKey, (_a = state.queries[queryCacheKey]) == null ? void 0 : _a.endpointName, mwApi, state.config);
        }
        if (api2.util.resetApiState.match(action)) {
          for (var _i = 0, _e2 = Object.entries(currentRemovalTimeouts); _i < _e2.length; _i++) {
            var _f2 = _e2[_i], key = _f2[0], timeout = _f2[1];
            if (timeout)
              clearTimeout(timeout);
            delete currentRemovalTimeouts[key];
          }
        }
        if (context.hasRehydrationInfo(action)) {
          var state = mwApi.getState()[reducerPath];
          var queries = context.extractRehydrationInfo(action).queries;
          for (var _g = 0, _h = Object.entries(queries); _g < _h.length; _g++) {
            var _j = _h[_g], queryCacheKey = _j[0], queryState = _j[1];
            handleUnsubscribe(queryCacheKey, queryState == null ? void 0 : queryState.endpointName, mwApi, state.config);
          }
        }
        return result;
      };
    };
    function handleUnsubscribe(queryCacheKey, endpointName, api22, config) {
      var _a;
      var endpointDefinition = context.endpointDefinitions[endpointName];
      var keepUnusedDataFor = (_a = endpointDefinition == null ? void 0 : endpointDefinition.keepUnusedDataFor) != null ? _a : config.keepUnusedDataFor;
      var currentTimeout = currentRemovalTimeouts[queryCacheKey];
      if (currentTimeout) {
        clearTimeout(currentTimeout);
      }
      currentRemovalTimeouts[queryCacheKey] = setTimeout(function() {
        var subscriptions = api22.getState()[reducerPath].subscriptions[queryCacheKey];
        if (!subscriptions || Object.keys(subscriptions).length === 0) {
          api22.dispatch(removeQueryResult({ queryCacheKey }));
        }
        delete currentRemovalTimeouts[queryCacheKey];
      }, keepUnusedDataFor * 1e3);
    }
  };
};
var build2 = function(_e) {
  var reducerPath = _e.reducerPath, context = _e.context, endpointDefinitions = _e.context.endpointDefinitions, mutationThunk = _e.mutationThunk, api2 = _e.api, assertTagType = _e.assertTagType, refetchQuery = _e.refetchQuery;
  var removeQueryResult = api2.internalActions.removeQueryResult;
  return function(mwApi) {
    return function(next) {
      return function(action) {
        var result = next(action);
        if (isAnyOf(isFulfilled(mutationThunk), isRejectedWithValue(mutationThunk))(action)) {
          invalidateTags(calculateProvidedByThunk(action, "invalidatesTags", endpointDefinitions, assertTagType), mwApi);
        }
        if (api2.util.invalidateTags.match(action)) {
          invalidateTags(calculateProvidedBy(action.payload, void 0, void 0, void 0, void 0, assertTagType), mwApi);
        }
        return result;
      };
    };
  };
  function invalidateTags(tags, mwApi) {
    var rootState = mwApi.getState();
    var state = rootState[reducerPath];
    var toInvalidate = api2.util.selectInvalidatedBy(rootState, tags);
    context.batch(function() {
      var valuesArray = Array.from(toInvalidate.values());
      for (var _i = 0, valuesArray_1 = valuesArray; _i < valuesArray_1.length; _i++) {
        var queryCacheKey = valuesArray_1[_i].queryCacheKey;
        var querySubState = state.queries[queryCacheKey];
        var subscriptionSubState = state.subscriptions[queryCacheKey];
        if (querySubState && subscriptionSubState) {
          if (Object.keys(subscriptionSubState).length === 0) {
            mwApi.dispatch(removeQueryResult({
              queryCacheKey
            }));
          } else if (querySubState.status !== QueryStatus.uninitialized) {
            mwApi.dispatch(refetchQuery(querySubState, queryCacheKey));
          } else
            ;
        }
      }
    });
  }
};
var build3 = function(_e) {
  var reducerPath = _e.reducerPath, queryThunk = _e.queryThunk, api2 = _e.api, refetchQuery = _e.refetchQuery;
  return function(mwApi) {
    var currentPolls = {};
    return function(next) {
      return function(action) {
        var result = next(action);
        if (api2.internalActions.updateSubscriptionOptions.match(action) || api2.internalActions.unsubscribeQueryResult.match(action)) {
          updatePollingInterval(action.payload, mwApi);
        }
        if (queryThunk.pending.match(action) || queryThunk.rejected.match(action) && action.meta.condition) {
          updatePollingInterval(action.meta.arg, mwApi);
        }
        if (queryThunk.fulfilled.match(action) || queryThunk.rejected.match(action) && !action.meta.condition) {
          startNextPoll(action.meta.arg, mwApi);
        }
        if (api2.util.resetApiState.match(action)) {
          clearPolls();
        }
        return result;
      };
    };
    function startNextPoll(_e2, api22) {
      var queryCacheKey = _e2.queryCacheKey;
      var state = api22.getState()[reducerPath];
      var querySubState = state.queries[queryCacheKey];
      var subscriptions = state.subscriptions[queryCacheKey];
      if (!querySubState || querySubState.status === QueryStatus.uninitialized)
        return;
      var lowestPollingInterval = findLowestPollingInterval(subscriptions);
      if (!Number.isFinite(lowestPollingInterval))
        return;
      var currentPoll = currentPolls[queryCacheKey];
      if (currentPoll == null ? void 0 : currentPoll.timeout) {
        clearTimeout(currentPoll.timeout);
        currentPoll.timeout = void 0;
      }
      var nextPollTimestamp = Date.now() + lowestPollingInterval;
      var currentInterval = currentPolls[queryCacheKey] = {
        nextPollTimestamp,
        pollingInterval: lowestPollingInterval,
        timeout: setTimeout(function() {
          currentInterval.timeout = void 0;
          api22.dispatch(refetchQuery(querySubState, queryCacheKey));
        }, lowestPollingInterval)
      };
    }
    function updatePollingInterval(_e2, api22) {
      var queryCacheKey = _e2.queryCacheKey;
      var state = api22.getState()[reducerPath];
      var querySubState = state.queries[queryCacheKey];
      var subscriptions = state.subscriptions[queryCacheKey];
      if (!querySubState || querySubState.status === QueryStatus.uninitialized) {
        return;
      }
      var lowestPollingInterval = findLowestPollingInterval(subscriptions);
      if (!Number.isFinite(lowestPollingInterval)) {
        cleanupPollForKey(queryCacheKey);
        return;
      }
      var currentPoll = currentPolls[queryCacheKey];
      var nextPollTimestamp = Date.now() + lowestPollingInterval;
      if (!currentPoll || nextPollTimestamp < currentPoll.nextPollTimestamp) {
        startNextPoll({ queryCacheKey }, api22);
      }
    }
    function cleanupPollForKey(key) {
      var existingPoll = currentPolls[key];
      if (existingPoll == null ? void 0 : existingPoll.timeout) {
        clearTimeout(existingPoll.timeout);
      }
      delete currentPolls[key];
    }
    function clearPolls() {
      for (var _i = 0, _e2 = Object.keys(currentPolls); _i < _e2.length; _i++) {
        var key = _e2[_i];
        cleanupPollForKey(key);
      }
    }
  };
  function findLowestPollingInterval(subscribers) {
    if (subscribers === void 0) {
      subscribers = {};
    }
    var lowestPollingInterval = Number.POSITIVE_INFINITY;
    for (var _i = 0, _e2 = Object.values(subscribers); _i < _e2.length; _i++) {
      var subscription = _e2[_i];
      if (!!subscription.pollingInterval)
        lowestPollingInterval = Math.min(subscription.pollingInterval, lowestPollingInterval);
    }
    return lowestPollingInterval;
  }
};
var build4 = function(_e) {
  var reducerPath = _e.reducerPath, context = _e.context, api2 = _e.api, refetchQuery = _e.refetchQuery;
  var removeQueryResult = api2.internalActions.removeQueryResult;
  return function(mwApi) {
    return function(next) {
      return function(action) {
        var result = next(action);
        if (onFocus.match(action)) {
          refetchValidQueries(mwApi, "refetchOnFocus");
        }
        if (onOnline.match(action)) {
          refetchValidQueries(mwApi, "refetchOnReconnect");
        }
        return result;
      };
    };
  };
  function refetchValidQueries(api22, type) {
    var state = api22.getState()[reducerPath];
    var queries = state.queries;
    var subscriptions = state.subscriptions;
    context.batch(function() {
      for (var _i = 0, _e2 = Object.keys(subscriptions); _i < _e2.length; _i++) {
        var queryCacheKey = _e2[_i];
        var querySubState = queries[queryCacheKey];
        var subscriptionSubState = subscriptions[queryCacheKey];
        if (!subscriptionSubState || !querySubState)
          continue;
        var shouldRefetch = Object.values(subscriptionSubState).some(function(sub) {
          return sub[type] === true;
        }) || Object.values(subscriptionSubState).every(function(sub) {
          return sub[type] === void 0;
        }) && state.config[type];
        if (shouldRefetch) {
          if (Object.keys(subscriptionSubState).length === 0) {
            api22.dispatch(removeQueryResult({
              queryCacheKey
            }));
          } else if (querySubState.status !== QueryStatus.uninitialized) {
            api22.dispatch(refetchQuery(querySubState, queryCacheKey));
          }
        }
      }
    });
  }
};
var neverResolvedError = new Error("Promise never resolved before cacheEntryRemoved.");
var build5 = function(_e) {
  var api2 = _e.api, reducerPath = _e.reducerPath, context = _e.context, queryThunk = _e.queryThunk, mutationThunk = _e.mutationThunk;
  var isQueryThunk = isAsyncThunkAction(queryThunk);
  var isMutationThunk = isAsyncThunkAction(mutationThunk);
  var isFullfilledThunk = isFulfilled(queryThunk, mutationThunk);
  return function(mwApi) {
    var lifecycleMap = {};
    return function(next) {
      return function(action) {
        var stateBefore = mwApi.getState();
        var result = next(action);
        var cacheKey = getCacheKey(action);
        if (queryThunk.pending.match(action)) {
          var oldState = stateBefore[reducerPath].queries[cacheKey];
          var state = mwApi.getState()[reducerPath].queries[cacheKey];
          if (!oldState && state) {
            handleNewKey(action.meta.arg.endpointName, action.meta.arg.originalArgs, cacheKey, mwApi, action.meta.requestId);
          }
        } else if (mutationThunk.pending.match(action)) {
          var state = mwApi.getState()[reducerPath].mutations[cacheKey];
          if (state) {
            handleNewKey(action.meta.arg.endpointName, action.meta.arg.originalArgs, cacheKey, mwApi, action.meta.requestId);
          }
        } else if (isFullfilledThunk(action)) {
          var lifecycle = lifecycleMap[cacheKey];
          if (lifecycle == null ? void 0 : lifecycle.valueResolved) {
            lifecycle.valueResolved({
              data: action.payload,
              meta: action.meta.baseQueryMeta
            });
            delete lifecycle.valueResolved;
          }
        } else if (api2.internalActions.removeQueryResult.match(action) || api2.internalActions.removeMutationResult.match(action)) {
          var lifecycle = lifecycleMap[cacheKey];
          if (lifecycle) {
            delete lifecycleMap[cacheKey];
            lifecycle.cacheEntryRemoved();
          }
        } else if (api2.util.resetApiState.match(action)) {
          for (var _i = 0, _e2 = Object.entries(lifecycleMap); _i < _e2.length; _i++) {
            var _f = _e2[_i], cacheKey2 = _f[0], lifecycle = _f[1];
            delete lifecycleMap[cacheKey2];
            lifecycle.cacheEntryRemoved();
          }
        }
        return result;
      };
    };
    function getCacheKey(action) {
      if (isQueryThunk(action))
        return action.meta.arg.queryCacheKey;
      if (isMutationThunk(action))
        return action.meta.requestId;
      if (api2.internalActions.removeQueryResult.match(action))
        return action.payload.queryCacheKey;
      if (api2.internalActions.removeMutationResult.match(action))
        return getMutationCacheKey(action.payload);
      return "";
    }
    function handleNewKey(endpointName, originalArgs, queryCacheKey, mwApi2, requestId) {
      var endpointDefinition = context.endpointDefinitions[endpointName];
      var onCacheEntryAdded = endpointDefinition == null ? void 0 : endpointDefinition.onCacheEntryAdded;
      if (!onCacheEntryAdded)
        return;
      var lifecycle = {};
      var cacheEntryRemoved = new Promise(function(resolve) {
        lifecycle.cacheEntryRemoved = resolve;
      });
      var cacheDataLoaded = Promise.race([
        new Promise(function(resolve) {
          lifecycle.valueResolved = resolve;
        }),
        cacheEntryRemoved.then(function() {
          throw neverResolvedError;
        })
      ]);
      cacheDataLoaded.catch(function() {
      });
      lifecycleMap[queryCacheKey] = lifecycle;
      var selector = api2.endpoints[endpointName].select(endpointDefinition.type === DefinitionType$1.query ? originalArgs : queryCacheKey);
      var extra = mwApi2.dispatch(function(_2, __, extra2) {
        return extra2;
      });
      var lifecycleApi = __spreadProps$1(__spreadValues$1({}, mwApi2), {
        getCacheEntry: function() {
          return selector(mwApi2.getState());
        },
        requestId,
        extra,
        updateCachedData: endpointDefinition.type === DefinitionType$1.query ? function(updateRecipe) {
          return mwApi2.dispatch(api2.util.updateQueryData(endpointName, originalArgs, updateRecipe));
        } : void 0,
        cacheDataLoaded,
        cacheEntryRemoved
      });
      var runningHandler = onCacheEntryAdded(originalArgs, lifecycleApi);
      Promise.resolve(runningHandler).catch(function(e2) {
        if (e2 === neverResolvedError)
          return;
        throw e2;
      });
    }
  };
};
var build6 = function(_e) {
  var api2 = _e.api, context = _e.context, queryThunk = _e.queryThunk, mutationThunk = _e.mutationThunk;
  var isPendingThunk = isPending(queryThunk, mutationThunk);
  var isRejectedThunk = isRejected(queryThunk, mutationThunk);
  var isFullfilledThunk = isFulfilled(queryThunk, mutationThunk);
  return function(mwApi) {
    var lifecycleMap = {};
    return function(next) {
      return function(action) {
        var _a, _b, _c;
        var result = next(action);
        if (isPendingThunk(action)) {
          var _e2 = action.meta, requestId = _e2.requestId, _f = _e2.arg, endpointName_1 = _f.endpointName, originalArgs_1 = _f.originalArgs;
          var endpointDefinition = context.endpointDefinitions[endpointName_1];
          var onQueryStarted = endpointDefinition == null ? void 0 : endpointDefinition.onQueryStarted;
          if (onQueryStarted) {
            var lifecycle_1 = {};
            var queryFulfilled = new Promise(function(resolve, reject) {
              lifecycle_1.resolve = resolve;
              lifecycle_1.reject = reject;
            });
            queryFulfilled.catch(function() {
            });
            lifecycleMap[requestId] = lifecycle_1;
            var selector_1 = api2.endpoints[endpointName_1].select(endpointDefinition.type === DefinitionType$1.query ? originalArgs_1 : requestId);
            var extra = mwApi.dispatch(function(_2, __, extra2) {
              return extra2;
            });
            var lifecycleApi = __spreadProps$1(__spreadValues$1({}, mwApi), {
              getCacheEntry: function() {
                return selector_1(mwApi.getState());
              },
              requestId,
              extra,
              updateCachedData: endpointDefinition.type === DefinitionType$1.query ? function(updateRecipe) {
                return mwApi.dispatch(api2.util.updateQueryData(endpointName_1, originalArgs_1, updateRecipe));
              } : void 0,
              queryFulfilled
            });
            onQueryStarted(originalArgs_1, lifecycleApi);
          }
        } else if (isFullfilledThunk(action)) {
          var _g = action.meta, requestId = _g.requestId, baseQueryMeta = _g.baseQueryMeta;
          (_a = lifecycleMap[requestId]) == null ? void 0 : _a.resolve({
            data: action.payload,
            meta: baseQueryMeta
          });
          delete lifecycleMap[requestId];
        } else if (isRejectedThunk(action)) {
          var _h = action.meta, requestId = _h.requestId, rejectedWithValue = _h.rejectedWithValue, baseQueryMeta = _h.baseQueryMeta;
          (_c = lifecycleMap[requestId]) == null ? void 0 : _c.reject({
            error: (_b = action.payload) != null ? _b : action.error,
            isUnhandledError: !rejectedWithValue,
            meta: baseQueryMeta
          });
          delete lifecycleMap[requestId];
        }
        return result;
      };
    };
  };
};
var build7 = function(_e) {
  var api2 = _e.api, apiUid = _e.context.apiUid, reducerPath = _e.reducerPath;
  return function(mwApi) {
    var initialized2 = false;
    return function(next) {
      return function(action) {
        var _a, _b;
        if (!initialized2) {
          initialized2 = true;
          mwApi.dispatch(api2.internalActions.middlewareRegistered(apiUid));
        }
        var result = next(action);
        if (api2.util.resetApiState.match(action)) {
          mwApi.dispatch(api2.internalActions.middlewareRegistered(apiUid));
        }
        if (typeof process !== "undefined" && false) {
          if (api2.internalActions.middlewareRegistered.match(action) && action.payload === apiUid && ((_b = (_a = mwApi.getState()[reducerPath]) == null ? void 0 : _a.config) == null ? void 0 : _b.middlewareRegistered) === "conflict") {
            console.warn('There is a mismatch between slice and middleware for the reducerPath "' + reducerPath + '".\nYou can only have one api per reducer path, this will lead to crashes in various situations!' + (reducerPath === "api" ? "\nIf you have multiple apis, you *have* to specify the reducerPath option when using createApi!" : ""));
          }
        }
        return result;
      };
    };
  };
};
function buildMiddleware(input) {
  var reducerPath = input.reducerPath, queryThunk = input.queryThunk;
  var actions = {
    invalidateTags: createAction(reducerPath + "/invalidateTags")
  };
  var middlewares = [
    build7,
    build,
    build2,
    build3,
    build4,
    build5,
    build6
  ].map(function(build8) {
    return build8(__spreadProps$1(__spreadValues$1({}, input), {
      refetchQuery
    }));
  });
  var middleware = function(mwApi) {
    return function(next) {
      var applied = compose.apply(void 0, middlewares.map(function(middleware2) {
        return middleware2(mwApi);
      }))(next);
      return function(action) {
        if (mwApi.getState()[reducerPath]) {
          return applied(action);
        }
        return next(action);
      };
    };
  };
  return { middleware, actions };
  function refetchQuery(querySubState, queryCacheKey, override) {
    if (override === void 0) {
      override = {};
    }
    return queryThunk(__spreadValues$1({
      type: "query",
      endpointName: querySubState.endpointName,
      originalArgs: querySubState.originalArgs,
      subscribe: false,
      forceRefetch: true,
      queryCacheKey
    }, override));
  }
}
function buildInitiate(_e) {
  var serializeQueryArgs = _e.serializeQueryArgs, queryThunk = _e.queryThunk, mutationThunk = _e.mutationThunk, api2 = _e.api, context = _e.context;
  var runningQueries = {};
  var runningMutations = {};
  var _f = api2.internalActions, unsubscribeQueryResult = _f.unsubscribeQueryResult, removeMutationResult = _f.removeMutationResult, updateSubscriptionOptions = _f.updateSubscriptionOptions;
  return {
    buildInitiateQuery,
    buildInitiateMutation,
    getRunningOperationPromises,
    getRunningOperationPromise
  };
  function getRunningOperationPromise(endpointName, argOrRequestId) {
    var endpointDefinition = context.endpointDefinitions[endpointName];
    if (endpointDefinition.type === DefinitionType$1.query) {
      var queryCacheKey = serializeQueryArgs({
        queryArgs: argOrRequestId,
        endpointDefinition,
        endpointName
      });
      return runningQueries[queryCacheKey];
    } else {
      return runningMutations[argOrRequestId];
    }
  }
  function getRunningOperationPromises() {
    return __spreadArray$1(__spreadArray$1([], Object.values(runningQueries)), Object.values(runningMutations)).filter(function(t2) {
      return !!t2;
    });
  }
  function buildInitiateQuery(endpointName, endpointDefinition) {
    var queryAction = function(arg, _e2) {
      var _f2 = _e2 === void 0 ? {} : _e2, _g = _f2.subscribe, subscribe = _g === void 0 ? true : _g, forceRefetch = _f2.forceRefetch, subscriptionOptions = _f2.subscriptionOptions;
      return function(dispatch, getState) {
        var queryCacheKey = serializeQueryArgs({
          queryArgs: arg,
          endpointDefinition,
          endpointName
        });
        var thunk2 = queryThunk({
          type: "query",
          subscribe,
          forceRefetch,
          subscriptionOptions,
          endpointName,
          originalArgs: arg,
          queryCacheKey
        });
        var thunkResult = dispatch(thunk2);
        var requestId = thunkResult.requestId, abort = thunkResult.abort;
        var statePromise = Object.assign(Promise.all([runningQueries[queryCacheKey], thunkResult]).then(function() {
          return api2.endpoints[endpointName].select(arg)(getState());
        }), {
          arg,
          requestId,
          subscriptionOptions,
          queryCacheKey,
          abort,
          unwrap: function() {
            return __async(this, null, function() {
              var result;
              return __generator(this, function(_e3) {
                switch (_e3.label) {
                  case 0:
                    return [4, statePromise];
                  case 1:
                    result = _e3.sent();
                    if (result.isError) {
                      throw result.error;
                    }
                    return [2, result.data];
                }
              });
            });
          },
          refetch: function() {
            dispatch(queryAction(arg, { subscribe: false, forceRefetch: true }));
          },
          unsubscribe: function() {
            if (subscribe)
              dispatch(unsubscribeQueryResult({
                queryCacheKey,
                requestId
              }));
          },
          updateSubscriptionOptions: function(options) {
            statePromise.subscriptionOptions = options;
            dispatch(updateSubscriptionOptions({
              endpointName,
              requestId,
              queryCacheKey,
              options
            }));
          }
        });
        if (!runningQueries[queryCacheKey]) {
          runningQueries[queryCacheKey] = statePromise;
          statePromise.then(function() {
            delete runningQueries[queryCacheKey];
          });
        }
        return statePromise;
      };
    };
    return queryAction;
  }
  function buildInitiateMutation(endpointName) {
    return function(arg, _e2) {
      var _f2 = _e2 === void 0 ? {} : _e2, _g = _f2.track, track = _g === void 0 ? true : _g, fixedCacheKey = _f2.fixedCacheKey;
      return function(dispatch, getState) {
        var thunk2 = mutationThunk({
          type: "mutation",
          endpointName,
          originalArgs: arg,
          track,
          fixedCacheKey
        });
        var thunkResult = dispatch(thunk2);
        var requestId = thunkResult.requestId, abort = thunkResult.abort, unwrap = thunkResult.unwrap;
        var returnValuePromise = thunkResult.unwrap().then(function(data) {
          return { data };
        }).catch(function(error) {
          return { error };
        });
        var reset = function() {
          dispatch(removeMutationResult({ requestId, fixedCacheKey }));
        };
        var ret = Object.assign(returnValuePromise, {
          arg: thunkResult.arg,
          requestId,
          abort,
          unwrap,
          unsubscribe: reset,
          reset
        });
        runningMutations[requestId] = ret;
        ret.then(function() {
          delete runningMutations[requestId];
        });
        if (fixedCacheKey) {
          runningMutations[fixedCacheKey] = ret;
          ret.then(function() {
            if (runningMutations[fixedCacheKey] === ret)
              delete runningMutations[fixedCacheKey];
          });
        }
        return ret;
      };
    };
  }
}
function safeAssign$1(target) {
  var args = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }
  Object.assign.apply(Object, __spreadArray$1([target], args));
}
var coreModuleName = /* @__PURE__ */ Symbol();
var coreModule = function() {
  return {
    name: coreModuleName,
    init: function(api2, _e, context) {
      var baseQuery = _e.baseQuery, tagTypes2 = _e.tagTypes, reducerPath = _e.reducerPath, serializeQueryArgs = _e.serializeQueryArgs, keepUnusedDataFor = _e.keepUnusedDataFor, refetchOnMountOrArgChange = _e.refetchOnMountOrArgChange, refetchOnFocus = _e.refetchOnFocus, refetchOnReconnect = _e.refetchOnReconnect;
      T();
      var assertTagType = function(tag) {
        if (typeof process !== "undefined" && false) {
          if (!tagTypes2.includes(tag.type)) {
            console.error("Tag type '" + tag.type + "' was used, but not specified in `tagTypes`!");
          }
        }
        return tag;
      };
      Object.assign(api2, {
        reducerPath,
        endpoints: {},
        internalActions: {
          onOnline,
          onOffline,
          onFocus,
          onFocusLost
        },
        util: {}
      });
      var _f = buildThunks({
        baseQuery,
        reducerPath,
        context,
        api: api2,
        serializeQueryArgs
      }), queryThunk = _f.queryThunk, mutationThunk = _f.mutationThunk, patchQueryData = _f.patchQueryData, updateQueryData = _f.updateQueryData, prefetch = _f.prefetch, buildMatchThunkActions = _f.buildMatchThunkActions;
      var _g = buildSlice({
        context,
        queryThunk,
        mutationThunk,
        reducerPath,
        assertTagType,
        config: {
          refetchOnFocus,
          refetchOnReconnect,
          refetchOnMountOrArgChange,
          keepUnusedDataFor,
          reducerPath
        }
      }), reducer = _g.reducer, sliceActions = _g.actions;
      safeAssign$1(api2.util, {
        patchQueryData,
        updateQueryData,
        prefetch,
        resetApiState: sliceActions.resetApiState
      });
      safeAssign$1(api2.internalActions, sliceActions);
      Object.defineProperty(api2.util, "updateQueryResult", {
        get: function() {
          if (typeof process !== "undefined" && false) {
            console.warn("`api.util.updateQueryResult` has been renamed to `api.util.updateQueryData`, please change your code accordingly");
          }
          return api2.util.updateQueryData;
        }
      });
      Object.defineProperty(api2.util, "patchQueryResult", {
        get: function() {
          if (typeof process !== "undefined" && false) {
            console.warn("`api.util.patchQueryResult` has been renamed to `api.util.patchQueryData`, please change your code accordingly");
          }
          return api2.util.patchQueryData;
        }
      });
      var _h = buildMiddleware({
        reducerPath,
        context,
        queryThunk,
        mutationThunk,
        api: api2,
        assertTagType
      }), middleware = _h.middleware, middlewareActions = _h.actions;
      safeAssign$1(api2.util, middlewareActions);
      safeAssign$1(api2, { reducer, middleware });
      var _j = buildSelectors({
        serializeQueryArgs,
        reducerPath
      }), buildQuerySelector = _j.buildQuerySelector, buildMutationSelector = _j.buildMutationSelector, selectInvalidatedBy = _j.selectInvalidatedBy;
      safeAssign$1(api2.util, { selectInvalidatedBy });
      var _k = buildInitiate({
        queryThunk,
        mutationThunk,
        api: api2,
        serializeQueryArgs,
        context
      }), buildInitiateQuery = _k.buildInitiateQuery, buildInitiateMutation = _k.buildInitiateMutation, getRunningOperationPromises = _k.getRunningOperationPromises, getRunningOperationPromise = _k.getRunningOperationPromise;
      safeAssign$1(api2.util, {
        getRunningOperationPromises,
        getRunningOperationPromise
      });
      return {
        name: coreModuleName,
        injectEndpoint: function(endpointName, definition) {
          var _a, _b;
          var anyApi = api2;
          (_b = (_a = anyApi.endpoints)[endpointName]) != null ? _b : _a[endpointName] = {};
          if (isQueryDefinition$1(definition)) {
            safeAssign$1(anyApi.endpoints[endpointName], {
              select: buildQuerySelector(endpointName, definition),
              initiate: buildInitiateQuery(endpointName, definition)
            }, buildMatchThunkActions(queryThunk, endpointName));
          } else if (isMutationDefinition$1(definition)) {
            safeAssign$1(anyApi.endpoints[endpointName], {
              select: buildMutationSelector(),
              initiate: buildInitiateMutation(endpointName)
            }, buildMatchThunkActions(mutationThunk, endpointName));
          }
        }
      };
    }
  };
};
var __spreadArray = globalThis && globalThis.__spreadArray || function(to2, from2) {
  for (var i2 = 0, il2 = from2.length, j2 = to2.length; i2 < il2; i2++, j2++)
    to2[j2] = from2[i2];
  return to2;
};
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = function(obj, key, value) {
  return key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
};
var __spreadValues = function(a2, b2) {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var _i = 0, _c = __getOwnPropSymbols(b2); _i < _c.length; _i++) {
      var prop = _c[_i];
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = function(a2, b2) {
  return __defProps(a2, __getOwnPropDescs(b2));
};
function useStableQueryArgs(queryArgs, serialize, endpointDefinition, endpointName) {
  var incoming = react.exports.useMemo(function() {
    return {
      queryArgs,
      serialized: typeof queryArgs == "object" ? serialize({ queryArgs, endpointDefinition, endpointName }) : queryArgs
    };
  }, [queryArgs, serialize, endpointDefinition, endpointName]);
  var cache = react.exports.useRef(incoming);
  react.exports.useEffect(function() {
    if (cache.current.serialized !== incoming.serialized) {
      cache.current = incoming;
    }
  }, [incoming]);
  return cache.current.serialized === incoming.serialized ? cache.current.queryArgs : queryArgs;
}
var UNINITIALIZED_VALUE = Symbol();
function useShallowStableValue(value) {
  var cache = react.exports.useRef(value);
  react.exports.useEffect(function() {
    if (!shallowEqual(cache.current, value)) {
      cache.current = value;
    }
  }, [value]);
  return shallowEqual(cache.current, value) ? cache.current : value;
}
var useIsomorphicLayoutEffect = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined" ? react.exports.useLayoutEffect : react.exports.useEffect;
var defaultQueryStateSelector = function(x2) {
  return x2;
};
var defaultMutationStateSelector = function(x2) {
  return x2;
};
var noPendingQueryStateSelector = function(selected) {
  if (selected.isUninitialized) {
    return __spreadProps(__spreadValues({}, selected), {
      isUninitialized: false,
      isFetching: true,
      isLoading: selected.data !== void 0 ? false : true,
      status: QueryStatus.pending
    });
  }
  return selected;
};
function buildHooks(_c) {
  var api2 = _c.api, _d = _c.moduleOptions, batch2 = _d.batch, useDispatch2 = _d.useDispatch, useSelector2 = _d.useSelector, useStore2 = _d.useStore, unstable__sideEffectsInRender = _d.unstable__sideEffectsInRender, serializeQueryArgs = _c.serializeQueryArgs, context = _c.context;
  var usePossiblyImmediateEffect = unstable__sideEffectsInRender ? function(cb2) {
    return cb2();
  } : react.exports.useEffect;
  return { buildQueryHooks, buildMutationHook, usePrefetch };
  function queryStatePreSelector(currentState, lastResult, queryArgs) {
    if ((lastResult == null ? void 0 : lastResult.endpointName) && currentState.isUninitialized) {
      var endpointName = lastResult.endpointName;
      var endpointDefinition = context.endpointDefinitions[endpointName];
      if (serializeQueryArgs({
        queryArgs: lastResult.originalArgs,
        endpointDefinition,
        endpointName
      }) === serializeQueryArgs({
        queryArgs,
        endpointDefinition,
        endpointName
      }))
        lastResult = void 0;
    }
    var data = currentState.isSuccess ? currentState.data : lastResult == null ? void 0 : lastResult.data;
    if (data === void 0)
      data = currentState.data;
    var hasData = data !== void 0;
    var isFetching = currentState.isLoading;
    var isLoading = !hasData && isFetching;
    var isSuccess = currentState.isSuccess || isFetching && hasData;
    return __spreadProps(__spreadValues({}, currentState), {
      data,
      currentData: currentState.data,
      isFetching,
      isLoading,
      isSuccess
    });
  }
  function usePrefetch(endpointName, defaultOptions) {
    var dispatch = useDispatch2();
    var stableDefaultOptions = useShallowStableValue(defaultOptions);
    return react.exports.useCallback(function(arg, options) {
      return dispatch(api2.util.prefetch(endpointName, arg, __spreadValues(__spreadValues({}, stableDefaultOptions), options)));
    }, [endpointName, dispatch, stableDefaultOptions]);
  }
  function buildQueryHooks(name) {
    var useQuerySubscription = function(arg, _c2) {
      var _d2 = _c2 === void 0 ? {} : _c2, refetchOnReconnect = _d2.refetchOnReconnect, refetchOnFocus = _d2.refetchOnFocus, refetchOnMountOrArgChange = _d2.refetchOnMountOrArgChange, _e = _d2.skip, skip = _e === void 0 ? false : _e, _f = _d2.pollingInterval, pollingInterval = _f === void 0 ? 0 : _f;
      var initiate = api2.endpoints[name].initiate;
      var dispatch = useDispatch2();
      var stableArg = useStableQueryArgs(skip ? skipToken : arg, serializeQueryArgs, context.endpointDefinitions[name], name);
      var stableSubscriptionOptions = useShallowStableValue({
        refetchOnReconnect,
        refetchOnFocus,
        pollingInterval
      });
      var promiseRef = react.exports.useRef();
      var _g = promiseRef.current || {}, queryCacheKey = _g.queryCacheKey, requestId = _g.requestId;
      var subscriptionRemoved = useSelector2(function(state) {
        var _a;
        return !!queryCacheKey && !!requestId && !((_a = state[api2.reducerPath].subscriptions[queryCacheKey]) == null ? void 0 : _a[requestId]);
      });
      usePossiblyImmediateEffect(function() {
        promiseRef.current = void 0;
      }, [subscriptionRemoved]);
      usePossiblyImmediateEffect(function() {
        var _a;
        var lastPromise = promiseRef.current;
        if (typeof process !== "undefined" && false) {
          console.log(subscriptionRemoved);
        }
        if (stableArg === skipToken) {
          lastPromise == null ? void 0 : lastPromise.unsubscribe();
          promiseRef.current = void 0;
          return;
        }
        var lastSubscriptionOptions = (_a = promiseRef.current) == null ? void 0 : _a.subscriptionOptions;
        if (!lastPromise || lastPromise.arg !== stableArg) {
          lastPromise == null ? void 0 : lastPromise.unsubscribe();
          var promise = dispatch(initiate(stableArg, {
            subscriptionOptions: stableSubscriptionOptions,
            forceRefetch: refetchOnMountOrArgChange
          }));
          promiseRef.current = promise;
        } else if (stableSubscriptionOptions !== lastSubscriptionOptions) {
          lastPromise.updateSubscriptionOptions(stableSubscriptionOptions);
        }
      }, [
        dispatch,
        initiate,
        refetchOnMountOrArgChange,
        stableArg,
        stableSubscriptionOptions,
        subscriptionRemoved
      ]);
      react.exports.useEffect(function() {
        return function() {
          var _a;
          (_a = promiseRef.current) == null ? void 0 : _a.unsubscribe();
          promiseRef.current = void 0;
        };
      }, []);
      return react.exports.useMemo(function() {
        return {
          refetch: function() {
            var _a;
            return void ((_a = promiseRef.current) == null ? void 0 : _a.refetch());
          }
        };
      }, []);
    };
    var useLazyQuerySubscription = function(_c2) {
      var _d2 = _c2 === void 0 ? {} : _c2, refetchOnReconnect = _d2.refetchOnReconnect, refetchOnFocus = _d2.refetchOnFocus, _e = _d2.pollingInterval, pollingInterval = _e === void 0 ? 0 : _e;
      var initiate = api2.endpoints[name].initiate;
      var dispatch = useDispatch2();
      var _f = react.exports.useState(UNINITIALIZED_VALUE), arg = _f[0], setArg = _f[1];
      var promiseRef = react.exports.useRef();
      var stableSubscriptionOptions = useShallowStableValue({
        refetchOnReconnect,
        refetchOnFocus,
        pollingInterval
      });
      usePossiblyImmediateEffect(function() {
        var _a, _b;
        var lastSubscriptionOptions = (_a = promiseRef.current) == null ? void 0 : _a.subscriptionOptions;
        if (stableSubscriptionOptions !== lastSubscriptionOptions) {
          (_b = promiseRef.current) == null ? void 0 : _b.updateSubscriptionOptions(stableSubscriptionOptions);
        }
      }, [stableSubscriptionOptions]);
      var subscriptionOptionsRef = react.exports.useRef(stableSubscriptionOptions);
      usePossiblyImmediateEffect(function() {
        subscriptionOptionsRef.current = stableSubscriptionOptions;
      }, [stableSubscriptionOptions]);
      var trigger = react.exports.useCallback(function(arg2, preferCacheValue) {
        if (preferCacheValue === void 0) {
          preferCacheValue = false;
        }
        var promise;
        batch2(function() {
          var _a;
          (_a = promiseRef.current) == null ? void 0 : _a.unsubscribe();
          promiseRef.current = promise = dispatch(initiate(arg2, {
            subscriptionOptions: subscriptionOptionsRef.current,
            forceRefetch: !preferCacheValue
          }));
          setArg(arg2);
        });
        return promise;
      }, [dispatch, initiate]);
      react.exports.useEffect(function() {
        return function() {
          var _a;
          (_a = promiseRef == null ? void 0 : promiseRef.current) == null ? void 0 : _a.unsubscribe();
        };
      }, []);
      react.exports.useEffect(function() {
        if (arg !== UNINITIALIZED_VALUE && !promiseRef.current) {
          trigger(arg, true);
        }
      }, [arg, trigger]);
      return react.exports.useMemo(function() {
        return [trigger, arg];
      }, [trigger, arg]);
    };
    var useQueryState = function(arg, _c2) {
      var _d2 = _c2 === void 0 ? {} : _c2, _e = _d2.skip, skip = _e === void 0 ? false : _e, _f = _d2.selectFromResult, selectFromResult = _f === void 0 ? defaultQueryStateSelector : _f;
      var select = api2.endpoints[name].select;
      var stableArg = useStableQueryArgs(skip ? skipToken : arg, serializeQueryArgs, context.endpointDefinitions[name], name);
      var lastValue = react.exports.useRef();
      var selectDefaultResult = react.exports.useMemo(function() {
        return createSelector([
          select(stableArg),
          function(_2, lastResult) {
            return lastResult;
          },
          function(_2) {
            return stableArg;
          }
        ], queryStatePreSelector);
      }, [select, stableArg]);
      var querySelector = react.exports.useMemo(function() {
        return createSelector([selectDefaultResult], selectFromResult);
      }, [selectDefaultResult, selectFromResult]);
      var currentState = useSelector2(function(state) {
        return querySelector(state, lastValue.current);
      }, shallowEqual);
      var store2 = useStore2();
      var newLastValue = selectDefaultResult(store2.getState(), lastValue.current);
      useIsomorphicLayoutEffect(function() {
        lastValue.current = newLastValue;
      }, [newLastValue]);
      return currentState;
    };
    return {
      useQueryState,
      useQuerySubscription,
      useLazyQuerySubscription,
      useLazyQuery: function(options) {
        var _c2 = useLazyQuerySubscription(options), trigger = _c2[0], arg = _c2[1];
        var queryStateResults = useQueryState(arg, __spreadProps(__spreadValues({}, options), {
          skip: arg === UNINITIALIZED_VALUE
        }));
        var info = react.exports.useMemo(function() {
          return { lastArg: arg };
        }, [arg]);
        return react.exports.useMemo(function() {
          return [trigger, queryStateResults, info];
        }, [trigger, queryStateResults, info]);
      },
      useQuery: function(arg, options) {
        var querySubscriptionResults = useQuerySubscription(arg, options);
        var queryStateResults = useQueryState(arg, __spreadValues({
          selectFromResult: arg === skipToken || (options == null ? void 0 : options.skip) ? void 0 : noPendingQueryStateSelector
        }, options));
        return react.exports.useMemo(function() {
          return __spreadValues(__spreadValues({}, queryStateResults), querySubscriptionResults);
        }, [queryStateResults, querySubscriptionResults]);
      }
    };
  }
  function buildMutationHook(name) {
    return function(_c2) {
      var _d2 = _c2 === void 0 ? {} : _c2, _e = _d2.selectFromResult, selectFromResult = _e === void 0 ? defaultMutationStateSelector : _e, fixedCacheKey = _d2.fixedCacheKey;
      var _f = api2.endpoints[name], select = _f.select, initiate = _f.initiate;
      var dispatch = useDispatch2();
      var _g = react.exports.useState(), promise = _g[0], setPromise = _g[1];
      react.exports.useEffect(function() {
        return function() {
          if (!(promise == null ? void 0 : promise.arg.fixedCacheKey)) {
            promise == null ? void 0 : promise.reset();
          }
        };
      }, [promise]);
      var triggerMutation = react.exports.useCallback(function(arg) {
        var promise2 = dispatch(initiate(arg, { fixedCacheKey }));
        setPromise(promise2);
        return promise2;
      }, [dispatch, initiate, fixedCacheKey]);
      var requestId = (promise || {}).requestId;
      var mutationSelector = react.exports.useMemo(function() {
        return createSelector([select({ fixedCacheKey, requestId: promise == null ? void 0 : promise.requestId })], selectFromResult);
      }, [select, promise, selectFromResult, fixedCacheKey]);
      var currentState = useSelector2(mutationSelector, shallowEqual);
      var originalArgs = fixedCacheKey == null ? promise == null ? void 0 : promise.arg.originalArgs : void 0;
      var reset = react.exports.useCallback(function() {
        batch2(function() {
          if (promise) {
            setPromise(void 0);
          }
          if (fixedCacheKey) {
            dispatch(api2.internalActions.removeMutationResult({
              requestId,
              fixedCacheKey
            }));
          }
        });
      }, [dispatch, fixedCacheKey, promise, requestId]);
      var finalState = react.exports.useMemo(function() {
        return __spreadProps(__spreadValues({}, currentState), { originalArgs, reset });
      }, [currentState, originalArgs, reset]);
      return react.exports.useMemo(function() {
        return [triggerMutation, finalState];
      }, [triggerMutation, finalState]);
    };
  }
}
var DefinitionType;
(function(DefinitionType2) {
  DefinitionType2["query"] = "query";
  DefinitionType2["mutation"] = "mutation";
})(DefinitionType || (DefinitionType = {}));
function isQueryDefinition(e2) {
  return e2.type === DefinitionType.query;
}
function isMutationDefinition(e2) {
  return e2.type === DefinitionType.mutation;
}
function capitalize$1(str) {
  return str.replace(str[0], str[0].toUpperCase());
}
function safeAssign(target) {
  var args = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }
  Object.assign.apply(Object, __spreadArray([target], args));
}
var reactHooksModuleName = /* @__PURE__ */ Symbol();
var reactHooksModule = function(_c) {
  var _d = _c === void 0 ? {} : _c, _e = _d.batch, batch2 = _e === void 0 ? reactDom.exports.unstable_batchedUpdates : _e, _f = _d.useDispatch, useDispatch$1 = _f === void 0 ? useDispatch : _f, _g = _d.useSelector, useSelector$1 = _g === void 0 ? useSelector : _g, _h = _d.useStore, useStore$1 = _h === void 0 ? useStore : _h, _j = _d.unstable__sideEffectsInRender, unstable__sideEffectsInRender = _j === void 0 ? false : _j;
  return {
    name: reactHooksModuleName,
    init: function(api2, _c2, context) {
      var serializeQueryArgs = _c2.serializeQueryArgs;
      var anyApi = api2;
      var _d2 = buildHooks({
        api: api2,
        moduleOptions: {
          batch: batch2,
          useDispatch: useDispatch$1,
          useSelector: useSelector$1,
          useStore: useStore$1,
          unstable__sideEffectsInRender
        },
        serializeQueryArgs,
        context
      }), buildQueryHooks = _d2.buildQueryHooks, buildMutationHook = _d2.buildMutationHook, usePrefetch = _d2.usePrefetch;
      safeAssign(anyApi, { usePrefetch });
      safeAssign(context, { batch: batch2 });
      return {
        injectEndpoint: function(endpointName, definition) {
          if (isQueryDefinition(definition)) {
            var _c3 = buildQueryHooks(endpointName), useQuery = _c3.useQuery, useLazyQuery = _c3.useLazyQuery, useLazyQuerySubscription = _c3.useLazyQuerySubscription, useQueryState = _c3.useQueryState, useQuerySubscription = _c3.useQuerySubscription;
            safeAssign(anyApi.endpoints[endpointName], {
              useQuery,
              useLazyQuery,
              useLazyQuerySubscription,
              useQueryState,
              useQuerySubscription
            });
            api2["use" + capitalize$1(endpointName) + "Query"] = useQuery;
            api2["useLazy" + capitalize$1(endpointName) + "Query"] = useLazyQuery;
          } else if (isMutationDefinition(definition)) {
            var useMutation = buildMutationHook(endpointName);
            safeAssign(anyApi.endpoints[endpointName], {
              useMutation
            });
            api2["use" + capitalize$1(endpointName) + "Mutation"] = useMutation;
          }
        }
      };
    }
  };
};
var createApi = /* @__PURE__ */ buildCreateApi(coreModule(), reactHooksModule());
const tagTypes = ["User", "Transaction", "Settings", "Search"];
const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://caashapp-backend.herokuapp.com",
    credentials: "include",
    prepareHeaders: (headers, api2) => {
      var _a;
      const state = api2.getState();
      const token2 = ((_a = state.auth.token) == null ? void 0 : _a.token) || localStorage.getItem("authToken");
      if (token2) {
        headers.set("Authorization", `Bearer ${token2}`);
      }
      return headers;
    }
  }),
  endpoints: () => ({}),
  tagTypes
});
const authApi = api.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    requestLoginCode: builder.mutation({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body
      })
    }),
    login: builder.mutation({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body
      }),
      invalidatesTags: ["User"]
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST"
      }),
      invalidatesTags: ["User"]
    })
  })
});
const {
  useRequestLoginCodeMutation,
  useLoginMutation,
  useLogoutMutation
} = authApi;
const usersApi = api.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getUserById: builder.query({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: "GET"
      }),
      providesTags: (result = {}) => {
        if (result.cashTag)
          return [{ type: "User", id: String(result.cashTag) }];
      }
    }),
    getUserByCashTag: builder.query({
      query: (cashTag) => ({
        url: `/users/by-cashtag/${cashTag}`,
        method: "GET"
      }),
      providesTags: (result, error, arg) => [
        { type: "User", id: String(arg) }
      ]
    }),
    setName: builder.mutation({
      query: (_a) => {
        var _b = _a, { id: id2 } = _b, body = __objRest2(_b, ["id"]);
        return {
          url: `/users/${id2}`,
          method: "PUT",
          body
        };
      },
      invalidatesTags: (result, error) => {
        if (error)
          return [];
        return [{ type: "User", id: result.cashTag }];
      }
    })
  })
});
const {
  useGetUserByCashTagQuery,
  useGetUserByIdQuery,
  useLazyGetUserByIdQuery,
  useSetNameMutation
} = usersApi;
const transactionsApi = api.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getTransactions: builder.query({
      query: (_a) => {
        var _b = _a, { userId } = _b, params = __objRest2(_b, ["userId"]);
        return {
          url: `/transactions/${userId}`,
          method: "GET",
          params
        };
      },
      providesTags: ["Transaction"]
    }),
    createTransaction: builder.mutation({
      query: (body) => ({
        url: "/transactions",
        method: "POST",
        body
      }),
      invalidatesTags: (result, error, arg) => {
        if (error)
          return [];
        return [
          "Transaction",
          { type: "User", id: arg.receiverId },
          { type: "User", id: arg.senderId }
        ];
      }
    })
  })
});
const {
  useGetTransactionsQuery,
  useLazyGetTransactionsQuery,
  useCreateTransactionMutation
} = transactionsApi;
const searchApi = api.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    searchUsers: builder.query({
      query: (params) => ({
        url: "/search/users",
        method: "GET",
        params
      }),
      providesTags: (_result, error, arg) => {
        if (error)
          return [];
        return [{ type: "Search", id: JSON.stringify(arg) }];
      }
    })
  })
});
const { useLazySearchUsersQuery } = searchApi;
const initialState$1 = {};
const setAuth = (state, action) => {
  const { token: token2, user } = action.payload;
  state.token = token2;
  state.userId = user.id;
  localStorage.setItem("auth", JSON.stringify({
    token: token2,
    user: { id: user.id }
  }));
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialState$1,
  reducers: {
    setAuth,
    unsetAuth: () => {
      localStorage.removeItem("auth");
      return initialState$1;
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, setAuth);
    builder.addMatcher(authApi.endpoints.logout.matchFulfilled, () => {
      localStorage.removeItem("auth");
      return initialState$1;
    });
    builder.addMatcher(authApi.endpoints.logout.matchRejected, () => {
      localStorage.removeItem("auth");
      return initialState$1;
    });
  }
});
const initialState = {
  name: null,
  cashTag: null,
  balance: null,
  email: null,
  id: null,
  card: null,
  settings: null,
  accounts: null,
  phoneNumber: null,
  pinNumber: null,
  roles: null,
  username: null
};
const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    unsetUser: (state, _action) => {
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
      Object.assign(state, payload.user);
    });
    builder.addMatcher(usersApi.endpoints.getUserById.matchFulfilled, (state, { payload }) => {
      Object.assign(state, payload);
    });
  }
});
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    user: usersSlice.reducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware2) => getDefaultMiddleware2().concat(api.middleware)
});
setupListeners(store.dispatch);
var classnames$1 = { exports: {} };
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
(function(module2) {
  (function() {
    var hasOwn = {}.hasOwnProperty;
    function classNames() {
      var classes = [];
      for (var i2 = 0; i2 < arguments.length; i2++) {
        var arg = arguments[i2];
        if (!arg)
          continue;
        var argType = typeof arg;
        if (argType === "string" || argType === "number") {
          classes.push(arg);
        } else if (Array.isArray(arg)) {
          if (arg.length) {
            var inner = classNames.apply(null, arg);
            if (inner) {
              classes.push(inner);
            }
          }
        } else if (argType === "object") {
          if (arg.toString === Object.prototype.toString) {
            for (var key in arg) {
              if (hasOwn.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          } else {
            classes.push(arg.toString());
          }
        }
      }
      return classes.join(" ");
    }
    if (module2.exports) {
      classNames.default = classNames;
      module2.exports = classNames;
    } else {
      window.classNames = classNames;
    }
  })();
})(classnames$1);
var classnames = classnames$1.exports;
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeGlobal$1 = freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root$1 = freeGlobal$1 || freeSelf || Function("return this")();
var root$2 = root$1;
var Symbol$1 = root$2.Symbol;
var Symbol$2 = Symbol$1;
var objectProto$e = Object.prototype;
var hasOwnProperty$b = objectProto$e.hasOwnProperty;
var nativeObjectToString$1 = objectProto$e.toString;
var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty$b.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e2) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var objectProto$d = Object.prototype;
var nativeObjectToString = objectProto$d.toString;
function objectToString(value) {
  return nativeObjectToString.call(value);
}
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var symbolTag$2 = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag$2;
}
function arrayMap(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
var isArray$1 = Array.isArray;
var isArray$2 = isArray$1;
var INFINITY$1 = 1 / 0;
var symbolProto$1 = Symbol$2 ? Symbol$2.prototype : void 0, symbolToString = symbolProto$1 ? symbolProto$1.toString : void 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray$2(value)) {
    return arrayMap(value, baseToString) + "";
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
}
var reWhitespace = /\s/;
function trimmedEndIndex(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {
  }
  return index;
}
var reTrimStart = /^\s+/;
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
function isObject$1(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject$1(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject$1(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
function identity(value) {
  return value;
}
var asyncTag = "[object AsyncFunction]", funcTag$2 = "[object Function]", genTag$1 = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction$1(value) {
  if (!isObject$1(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
}
var coreJsData = root$2["__core-js_shared__"];
var coreJsData$1 = coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData$1 && coreJsData$1.keys && coreJsData$1.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var funcProto$2 = Function.prototype;
var funcToString$2 = funcProto$2.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$2.call(func);
    } catch (e2) {
    }
    try {
      return func + "";
    } catch (e2) {
    }
  }
  return "";
}
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto$1 = Function.prototype, objectProto$c = Object.prototype;
var funcToString$1 = funcProto$1.toString;
var hasOwnProperty$a = objectProto$c.hasOwnProperty;
var reIsNative = RegExp("^" + funcToString$1.call(hasOwnProperty$a).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative(value) {
  if (!isObject$1(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
function getValue(object, key) {
  return object == null ? void 0 : object[key];
}
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : void 0;
}
var WeakMap$1 = getNative(root$2, "WeakMap");
var WeakMap$2 = WeakMap$1;
var objectCreate = Object.create;
var baseCreate = function() {
  function object() {
  }
  return function(proto2) {
    if (!isObject$1(proto2)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto2);
    }
    object.prototype = proto2;
    var result = new object();
    object.prototype = void 0;
    return result;
  };
}();
var baseCreate$1 = baseCreate;
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
function copyArray(source, array) {
  var index = -1, length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
function constant(value) {
  return function() {
    return value;
  };
}
var defineProperty = function() {
  try {
    var func = getNative(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e2) {
  }
}();
var defineProperty$1 = defineProperty;
var baseSetToString = !defineProperty$1 ? identity : function(func, string) {
  return defineProperty$1(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant(string),
    "writable": true
  });
};
var baseSetToString$1 = baseSetToString;
var setToString = shortOut(baseSetToString$1);
var setToString$1 = setToString;
function arrayEach(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}
var MAX_SAFE_INTEGER$1 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
function baseAssignValue(object, key, value) {
  if (key == "__proto__" && defineProperty$1) {
    defineProperty$1(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
var objectProto$b = Object.prototype;
var hasOwnProperty$9 = objectProto$b.hasOwnProperty;
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$9.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1, length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}
var nativeMax$1 = Math.max;
function overRest(func, start, transform) {
  start = nativeMax$1(start === void 0 ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index = -1, length = nativeMax$1(args.length - start, 0), array = Array(length);
    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction$1(value);
}
var objectProto$a = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor, proto2 = typeof Ctor == "function" && Ctor.prototype || objectProto$a;
  return value === proto2;
}
function baseTimes(n2, iteratee) {
  var index = -1, result = Array(n2);
  while (++index < n2) {
    result[index] = iteratee(index);
  }
  return result;
}
var argsTag$2 = "[object Arguments]";
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag$2;
}
var objectProto$9 = Object.prototype;
var hasOwnProperty$8 = objectProto$9.hasOwnProperty;
var propertyIsEnumerable$1 = objectProto$9.propertyIsEnumerable;
var isArguments = baseIsArguments(function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty$8.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
};
var isArguments$1 = isArguments;
function stubFalse() {
  return false;
}
var freeExports$2 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$2 = freeExports$2 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;
var Buffer$1 = moduleExports$2 ? root$2.Buffer : void 0;
var nativeIsBuffer = Buffer$1 ? Buffer$1.isBuffer : void 0;
var isBuffer = nativeIsBuffer || stubFalse;
var isBuffer$1 = isBuffer;
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$2 = "[object Boolean]", dateTag$2 = "[object Date]", errorTag$1 = "[object Error]", funcTag$1 = "[object Function]", mapTag$5 = "[object Map]", numberTag$2 = "[object Number]", objectTag$3 = "[object Object]", regexpTag$2 = "[object RegExp]", setTag$5 = "[object Set]", stringTag$2 = "[object String]", weakMapTag$2 = "[object WeakMap]";
var arrayBufferTag$2 = "[object ArrayBuffer]", dataViewTag$3 = "[object DataView]", float32Tag$2 = "[object Float32Array]", float64Tag$2 = "[object Float64Array]", int8Tag$2 = "[object Int8Array]", int16Tag$2 = "[object Int16Array]", int32Tag$2 = "[object Int32Array]", uint8Tag$2 = "[object Uint8Array]", uint8ClampedTag$2 = "[object Uint8ClampedArray]", uint16Tag$2 = "[object Uint16Array]", uint32Tag$2 = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] = typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] = typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] = typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] = typedArrayTags[uint32Tag$2] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag$2] = typedArrayTags[boolTag$2] = typedArrayTags[dataViewTag$3] = typedArrayTags[dateTag$2] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$5] = typedArrayTags[numberTag$2] = typedArrayTags[objectTag$3] = typedArrayTags[regexpTag$2] = typedArrayTags[setTag$5] = typedArrayTags[stringTag$2] = typedArrayTags[weakMapTag$2] = false;
function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
var freeProcess = moduleExports$1 && freeGlobal$1.process;
var nodeUtil = function() {
  try {
    var types = freeModule$1 && freeModule$1.require && freeModule$1.require("util").types;
    if (types) {
      return types;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e2) {
  }
}();
var nodeUtil$1 = nodeUtil;
var nodeIsTypedArray = nodeUtil$1 && nodeUtil$1.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray$1 = isTypedArray;
var objectProto$8 = Object.prototype;
var hasOwnProperty$7 = objectProto$8.hasOwnProperty;
function arrayLikeKeys(value, inherited) {
  var isArr = isArray$2(value), isArg = !isArr && isArguments$1(value), isBuff = !isArr && !isArg && isBuffer$1(value), isType = !isArr && !isArg && !isBuff && isTypedArray$1(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$7.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var nativeKeys = overArg(Object.keys, Object);
var nativeKeys$1 = nativeKeys;
var objectProto$7 = Object.prototype;
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys$1(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$6.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
function keys$1(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var objectProto$6 = Object.prototype;
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
function baseKeysIn(object) {
  if (!isObject$1(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$5.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey(value, object) {
  if (isArray$2(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var nativeCreate = getNative(Object, "create");
var nativeCreate$1 = nativeCreate;
function hashClear() {
  this.__data__ = nativeCreate$1 ? nativeCreate$1(null) : {};
  this.size = 0;
}
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
var objectProto$5 = Object.prototype;
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate$1) {
    var result = data[key];
    return result === HASH_UNDEFINED$1 ? void 0 : result;
  }
  return hasOwnProperty$4.call(data, key) ? data[key] : void 0;
}
var objectProto$4 = Object.prototype;
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate$1 ? data[key] !== void 0 : hasOwnProperty$3.call(data, key);
}
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate$1 && value === void 0 ? HASH_UNDEFINED : value;
  return this;
}
function Hash(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data = this.__data__, index = assocIndexOf(data, key);
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
function listCacheGet(key) {
  var data = this.__data__, index = assocIndexOf(data, key);
  return index < 0 ? void 0 : data[index][1];
}
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
function listCacheSet(key, value) {
  var data = this.__data__, index = assocIndexOf(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
function ListCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
var Map$1 = getNative(root$2, "Map");
var Map$2 = Map$1;
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$2 || ListCache)(),
    "string": new Hash()
  };
}
function isKeyable(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
function getMapData(map2, key) {
  var data = map2.__data__;
  return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
function mapCacheDelete(key) {
  var result = getMapData(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
function mapCacheSet(key, value) {
  var data = getMapData(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
function MapCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
var FUNC_ERROR_TEXT$1 = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}
memoize.Cache = MapCache;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });
  return result;
});
var stringToPath$1 = stringToPath;
function toString$1(value) {
  return value == null ? "" : baseToString(value);
}
function castPath(value, object) {
  if (isArray$2(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath$1(toString$1(value));
}
var INFINITY = 1 / 0;
function toKey(value) {
  if (typeof value == "string" || isSymbol(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
function baseGet(object, path) {
  path = castPath(path, object);
  var index = 0, length = path.length;
  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return index && index == length ? object : void 0;
}
function arrayPush(array, values) {
  var index = -1, length = values.length, offset2 = array.length;
  while (++index < length) {
    array[offset2 + index] = values[index];
  }
  return array;
}
var spreadableSymbol = Symbol$2 ? Symbol$2.isConcatSpreadable : void 0;
function isFlattenable(value) {
  return isArray$2(value) || isArguments$1(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1, length = array.length;
  predicate || (predicate = isFlattenable);
  result || (result = []);
  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}
function flatRest(func) {
  return setToString$1(overRest(func, void 0, flatten), func + "");
}
var getPrototype = overArg(Object.getPrototypeOf, Object);
var getPrototype$1 = getPrototype;
var objectTag$2 = "[object Object]";
var funcProto = Function.prototype, objectProto$3 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag$2) {
    return false;
  }
  var proto2 = getPrototype$1(value);
  if (proto2 === null) {
    return true;
  }
  var Ctor = hasOwnProperty$2.call(proto2, "constructor") && proto2.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
function baseSlice(array, start, end) {
  var index = -1, length = array.length;
  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;
  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}
function castSlice(array, start, end) {
  var length = array.length;
  end = end === void 0 ? length : end;
  return !start && end >= length ? array : baseSlice(array, start, end);
}
var rsAstralRange$1 = "\\ud800-\\udfff", rsComboMarksRange$1 = "\\u0300-\\u036f", reComboHalfMarksRange$1 = "\\ufe20-\\ufe2f", rsComboSymbolsRange$1 = "\\u20d0-\\u20ff", rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1, rsVarRange$1 = "\\ufe0e\\ufe0f";
var rsZWJ$1 = "\\u200d";
var reHasUnicode = RegExp("[" + rsZWJ$1 + rsAstralRange$1 + rsComboRange$1 + rsVarRange$1 + "]");
function hasUnicode(string) {
  return reHasUnicode.test(string);
}
function asciiToArray(string) {
  return string.split("");
}
var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsVarRange = "\\ufe0e\\ufe0f";
var rsAstral = "[" + rsAstralRange + "]", rsCombo = "[" + rsComboRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsZWJ = "\\u200d";
var reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}
function stringToArray(string) {
  return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
}
function createCaseFirst(methodName) {
  return function(string) {
    string = toString$1(string);
    var strSymbols = hasUnicode(string) ? stringToArray(string) : void 0;
    var chr = strSymbols ? strSymbols[0] : string.charAt(0);
    var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
    return chr[methodName]() + trailing;
  };
}
var upperFirst = createCaseFirst("toUpperCase");
var upperFirst$1 = upperFirst;
function capitalize(string) {
  return upperFirst$1(toString$1(string).toLowerCase());
}
function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}
function stackDelete(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
function stackGet(key) {
  return this.__data__.get(key);
}
function stackHas(key) {
  return this.__data__.has(key);
}
var LARGE_ARRAY_SIZE = 200;
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map$2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}
Stack.prototype.clear = stackClear;
Stack.prototype["delete"] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
function baseAssign(object, source) {
  return object && copyObject(source, keys$1(source), object);
}
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer = moduleExports ? root$2.Buffer : void 0, allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}
function arrayFilter(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
function stubArray() {
  return [];
}
var objectProto$2 = Object.prototype;
var propertyIsEnumerable = objectProto$2.propertyIsEnumerable;
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
var getSymbols = !nativeGetSymbols$1 ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols$1(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
var getSymbols$1 = getSymbols;
function copySymbols(source, object) {
  return copyObject(source, getSymbols$1(source), object);
}
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols$1(object));
    object = getPrototype$1(object);
  }
  return result;
};
var getSymbolsIn$1 = getSymbolsIn;
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn$1(source), object);
}
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$2(object) ? result : arrayPush(result, symbolsFunc(object));
}
function getAllKeys(object) {
  return baseGetAllKeys(object, keys$1, getSymbols$1);
}
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn$1);
}
var DataView = getNative(root$2, "DataView");
var DataView$1 = DataView;
var Promise$1 = getNative(root$2, "Promise");
var Promise$2 = Promise$1;
var Set$1 = getNative(root$2, "Set");
var Set$2 = Set$1;
var mapTag$4 = "[object Map]", objectTag$1 = "[object Object]", promiseTag = "[object Promise]", setTag$4 = "[object Set]", weakMapTag$1 = "[object WeakMap]";
var dataViewTag$2 = "[object DataView]";
var dataViewCtorString = toSource(DataView$1), mapCtorString = toSource(Map$2), promiseCtorString = toSource(Promise$2), setCtorString = toSource(Set$2), weakMapCtorString = toSource(WeakMap$2);
var getTag = baseGetTag;
if (DataView$1 && getTag(new DataView$1(new ArrayBuffer(1))) != dataViewTag$2 || Map$2 && getTag(new Map$2()) != mapTag$4 || Promise$2 && getTag(Promise$2.resolve()) != promiseTag || Set$2 && getTag(new Set$2()) != setTag$4 || WeakMap$2 && getTag(new WeakMap$2()) != weakMapTag$1) {
  getTag = function(value) {
    var result = baseGetTag(value), Ctor = result == objectTag$1 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag$2;
        case mapCtorString:
          return mapTag$4;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag$4;
        case weakMapCtorString:
          return weakMapTag$1;
      }
    }
    return result;
  };
}
var getTag$1 = getTag;
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function initCloneArray(array) {
  var length = array.length, result = new array.constructor(length);
  if (length && typeof array[0] == "string" && hasOwnProperty$1.call(array, "index")) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}
var Uint8Array = root$2.Uint8Array;
var Uint8Array$1 = Uint8Array;
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array$1(result).set(new Uint8Array$1(arrayBuffer));
  return result;
}
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var reFlags = /\w*$/;
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
var symbolProto = Symbol$2 ? Symbol$2.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", mapTag$3 = "[object Map]", numberTag$1 = "[object Number]", regexpTag$1 = "[object RegExp]", setTag$3 = "[object Set]", stringTag$1 = "[object String]", symbolTag$1 = "[object Symbol]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$1:
      return cloneArrayBuffer(object);
    case boolTag$1:
    case dateTag$1:
      return new Ctor(+object);
    case dataViewTag$1:
      return cloneDataView(object, isDeep);
    case float32Tag$1:
    case float64Tag$1:
    case int8Tag$1:
    case int16Tag$1:
    case int32Tag$1:
    case uint8Tag$1:
    case uint8ClampedTag$1:
    case uint16Tag$1:
    case uint32Tag$1:
      return cloneTypedArray(object, isDeep);
    case mapTag$3:
      return new Ctor();
    case numberTag$1:
    case stringTag$1:
      return new Ctor(object);
    case regexpTag$1:
      return cloneRegExp(object);
    case setTag$3:
      return new Ctor();
    case symbolTag$1:
      return cloneSymbol(object);
  }
}
function initCloneObject(object) {
  return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate$1(getPrototype$1(object)) : {};
}
var mapTag$2 = "[object Map]";
function baseIsMap(value) {
  return isObjectLike(value) && getTag$1(value) == mapTag$2;
}
var nodeIsMap = nodeUtil$1 && nodeUtil$1.isMap;
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
var isMap$1 = isMap;
var setTag$2 = "[object Set]";
function baseIsSet(value) {
  return isObjectLike(value) && getTag$1(value) == setTag$2;
}
var nodeIsSet = nodeUtil$1 && nodeUtil$1.isSet;
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
var isSet$1 = isSet;
var CLONE_DEEP_FLAG$1 = 1, CLONE_FLAT_FLAG$1 = 2, CLONE_SYMBOLS_FLAG$1 = 4;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag$1 = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag$1 = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag$1] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag$1] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result, isDeep = bitmask & CLONE_DEEP_FLAG$1, isFlat = bitmask & CLONE_FLAT_FLAG$1, isFull = bitmask & CLONE_SYMBOLS_FLAG$1;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== void 0) {
    return result;
  }
  if (!isObject$1(value)) {
    return value;
  }
  var isArr = isArray$2(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag$1(value), isFunc = tag == funcTag || tag == genTag;
    if (isBuffer$1(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || isFunc && !object) {
      result = isFlat || isFunc ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  stack || (stack = new Stack());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if (isSet$1(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap$1(value)) {
    value.forEach(function(subValue, key2) {
      result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys$1;
  var props = isArr ? void 0 : keysFunc(value);
  arrayEach(props || value, function(subValue, key2) {
    if (props) {
      key2 = subValue;
      subValue = value[key2];
    }
    assignValue(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
  });
  return result;
}
var now$1 = function() {
  return root$2.Date.now();
};
var now$2 = now$1;
var FUNC_ERROR_TEXT = "Expected a function";
var nativeMax = Math.max, nativeMin = Math.min;
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject$1(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now$2();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now$2());
  }
  function debounced() {
    var time = now$2(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : void 0;
}
function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}
var mapTag = "[object Map]", setTag = "[object Set]";
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike(value) && (isArray$2(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer$1(value) || isTypedArray$1(value) || isArguments$1(value))) {
    return !value.length;
  }
  var tag = getTag$1(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (isPrototype(value)) {
    return !baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}
function baseUnset(object, path) {
  path = castPath(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey(last(path))];
}
function customOmitClone(value) {
  return isPlainObject(value) ? void 0 : value;
}
var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
var omit = flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = arrayMap(paths, function(path) {
    path = castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject(object, getAllKeysIn(object), result);
  if (isDeep) {
    result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    baseUnset(result, paths[length]);
  }
  return result;
});
var omit$1 = omit;
const formatName = (user) => {
  var _a;
  return (_a = user == null ? void 0 : user.name) == null ? void 0 : _a.split(" ").map(capitalize).join(" ");
};
const formatDollars = (n2) => {
  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  return `$${formatter.format(n2 != null ? n2 : 0)}`;
};
const formatBalance = (user) => {
  return formatDollars(user.balance);
};
const formatCashTag = (user) => {
  return `$${user.cashTag}`;
};
const formatInitial = (user) => {
  return user == null ? void 0 : user.name[0].toLocaleUpperCase();
};
const formatCreditCard = (show, card) => {
  const parts = new Array(4).fill("\u2022\u2022\u2022\u2022");
  if (!card)
    return parts;
  if (!show)
    parts[3] = card.cardNumber.slice(12);
  else {
    for (let i2 = 0; i2 < 4; i2++)
      parts[i2] = card.cardNumber.slice(4 * i2, 4 * i2 + 4);
  }
  return parts;
};
const formatRoutingNumber = (account) => {
  return `${account.routingNumber}`;
};
const formatAccountNumber = (account) => {
  return `${account.accountNumber.slice(0, 2)} \xB7 \xB7 \xB7 \xB7 \xB7 \xB7`;
};
const formatUserPhoneNumber = (user) => {
  var _a;
  if (!((_a = user.phoneNumber) == null ? void 0 : _a.length))
    return null;
  const phoneNumber = user.phoneNumber[0].phoneNumber;
  const areaCode = phoneNumber.slice(0, 3);
  const num = phoneNumber.slice(3);
  return `(${areaCode}) ${num.slice(0, 3)}-${num.slice(3)}`;
};
const splitPhoneNumber = (input) => {
  const res = new Array(4);
  if (input[0] === "1") {
    res[0] = input[0];
    input = input.slice(1);
  }
  for (let i2 = 1, b2 = 0, e2 = 3; i2 <= 3; i2++, b2 += 3, e2 += i2 === 3 ? 4 : 3)
    res[i2] = input.slice(b2, e2);
  return res;
};
const formatPhoneNumber = (input) => {
  const [code, area, a2, b2] = splitPhoneNumber(input);
  let res = (code == null ? void 0 : code.length) ? code + " " : "";
  res += area.length === 3 ? "(" + area + ")" : area;
  if (a2.length)
    res += " " + a2;
  if (b2.length)
    res += "-" + b2;
  return res;
};
const isPhoneNumber = (input) => /^(1\d{10}|[02-9]\d{9})$/.test(input);
function getTextWidth(text, font, canvas) {
  const context = canvas.getContext("2d");
  context.font = font;
  const metrics = context.measureText(text);
  return metrics.width;
}
function getCssStyle(element, prop) {
  return window.getComputedStyle(element, null).getPropertyValue(prop);
}
function getCanvasFontSize(el2 = document.body) {
  const fontWeight = getCssStyle(el2, "font-weight") || "normal";
  const fontSize = getCssStyle(el2, "font-size") || "16px";
  const fontFamily = getCssStyle(el2, "font-family") || "Times New Roman";
  return `${fontWeight} ${fontSize} ${fontFamily}`;
}
const sitFor = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const SidebarProfile = (props) => {
  const {
    user
  } = props;
  if (!user)
    return null;
  return /* @__PURE__ */ jsx("div", {
    className: "customer-info",
    children: /* @__PURE__ */ jsxs("div", {
      className: "customer-profile-simple",
      children: [/* @__PURE__ */ jsx("i", {
        style: {
          backgroundColor: "#FB60C4"
        },
        className: "customer-avatar ",
        children: /* @__PURE__ */ jsx("div", {
          className: "initial-placeholder",
          children: (user == null ? void 0 : user.name) && formatInitial(user)
        })
      }), /* @__PURE__ */ jsx("h3", {
        className: "display-name display-name-with-icon",
        children: /* @__PURE__ */ jsx("span", {
          className: "name truncate-text",
          children: `${formatName(user)}`
        })
      }), /* @__PURE__ */ jsx("h4", {
        className: "cashtag",
        children: /* @__PURE__ */ jsx(Link, {
          to: `/${formatCashTag(user)}`,
          children: formatCashTag(user)
        })
      })]
    })
  });
};
const Sidebar = (props) => {
  const {
    user,
    showModal
  } = props;
  const location = useLocation();
  const [activeLink, setActiveLink] = React.useState("activity");
  const [signOut] = useLogoutMutation();
  const navigate = useNavigate();
  React.useEffect(() => {
    const parts = location.pathname.split("/");
    const current = parts[parts.length - 1];
    if (current !== activeLink)
      setActiveLink(current);
  }, [location]);
  const handleSignOut = async () => {
    try {
      await signOut().unwrap();
      navigate("/");
    } catch (err) {
      console.error("sign out:", err);
    }
  };
  const SidebarLink = (props2) => {
    const {
      type,
      title,
      children
    } = props2;
    return /* @__PURE__ */ jsxs(Link, {
      to: `/account/${type}`,
      title,
      onClick: () => setActiveLink(type),
      className: classnames("nav-item", type, {
        active: activeLink === type
      }),
      children: [children, /* @__PURE__ */ jsx("span", {
        className: "nav-item-label",
        children: title
      })]
    });
  };
  return /* @__PURE__ */ jsxs("div", {
    className: "!h-full account-navigation-bar flex-container",
    children: [/* @__PURE__ */ jsx(SidebarProfile, {
      user
    }), /* @__PURE__ */ jsxs("nav", {
      className: "nav-items",
      children: [/* @__PURE__ */ jsxs(SidebarLink, {
        type: "activity",
        title: "Activity",
        children: [/* @__PURE__ */ jsx("svg", {
          viewBox: "0 0 100 100",
          className: "inline-svg activity-badge",
          children: /* @__PURE__ */ jsxs("g", {
            children: [/* @__PURE__ */ jsx("circle", {
              cx: "50",
              cy: "50",
              r: "50"
            }), /* @__PURE__ */ jsx("text", {
              x: "50",
              y: "70",
              fontSize: "50",
              textAnchor: "middle",
              children: "1"
            })]
          })
        }), /* @__PURE__ */ jsx("div", {
          className: "inline-svg ",
          children: /* @__PURE__ */ jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "22",
            height: "22",
            viewBox: "0 0 22 22",
            children: /* @__PURE__ */ jsxs("g", {
              fill: "#FFF",
              fillRule: "evenodd",
              children: [/* @__PURE__ */ jsx("path", {
                d: "M11 0C4.9 0 0 4.9 0 11s4.9 11 11 11 11-4.9 11-11S17.1 0 11 0zm0 20c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9z"
              }), /* @__PURE__ */ jsx("path", {
                d: "M12 6h-2v6.5l4.5 2.4 1-1.8-3.5-1.8V6z"
              })]
            })
          })
        })]
      }), /* @__PURE__ */ jsx(SidebarLink, {
        type: "mycash",
        title: "Cash Card",
        children: /* @__PURE__ */ jsx("div", {
          className: "inline-svg ",
          children: /* @__PURE__ */ jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "22",
            height: "22",
            viewBox: "0 0 22 22",
            children: /* @__PURE__ */ jsx("path", {
              d: "M11 0c6.072 0 11 4.928 11 11s-4.928 11-11 11S0 17.072 0 11 4.928 0 11 0zm0 2c-4.968 0-9 4.032-9 9s4.032 9 9 9 9-4.032 9-9-4.032-9-9-9zm2.303 7.2a.288.288 0 0 0 .403-.009l.552-.569a.296.296 0 0 0-.014-.426 4.341 4.341 0 0 0-1.478-.844l.173-.838a.292.292 0 0 0-.283-.354h-1.065a.29.29 0 0 0-.283.233l-.156.744c-1.416.072-2.616.79-2.616 2.265 0 1.277.993 1.824 2.041 2.202.993.379 1.518.52 1.518 1.052 0 .547-.525.87-1.297.87-.705 0-1.443-.237-2.015-.81a.284.284 0 0 0-.404-.002l-.593.594a.299.299 0 0 0 .002.423 3.9 3.9 0 0 0 1.714.97l-.162.776a.292.292 0 0 0 .28.355l1.067.008a.29.29 0 0 0 .285-.233l.154-.746c1.696-.106 2.734-1.043 2.734-2.416 0-1.262-1.034-1.795-2.29-2.23-.717-.266-1.338-.448-1.338-.995 0-.533.58-.744 1.159-.744.74 0 1.449.305 1.913.724z",
              fillRule: "nonzero"
            })
          })
        })
      }), /* @__PURE__ */ jsx(SidebarLink, {
        type: "settings",
        title: "Settings",
        children: /* @__PURE__ */ jsx("div", {
          className: "inline-svg ",
          children: /* @__PURE__ */ jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "23",
            height: "22",
            viewBox: "0 0 23 22",
            children: /* @__PURE__ */ jsxs("g", {
              fill: "#FFF",
              fillRule: "evenodd",
              children: [/* @__PURE__ */ jsx("path", {
                d: "M22.5 11c0-6.1-4.9-11-11-11S.5 4.9.5 11c0 4.7 2.9 8.7 7.1 10.3 1.1.5 2.4.7 3.9.7s2.9-.3 3.9-.7c4.2-1.6 7.1-5.6 7.1-10.3zm-5.4 7c-.8-1.2-3-2-5.6-2-2.6 0-4.8.8-5.6 2-2-1.7-3.4-4.2-3.4-7 0-5 4-9 9-9s9 4 9 9c0 2.8-1.3 5.3-3.4 7z"
              }), /* @__PURE__ */ jsx("circle", {
                cx: "11.5",
                cy: "9",
                r: "3"
              })]
            })
          })
        })
      }), /* @__PURE__ */ jsxs("a", {
        href: "#",
        title: "Sign Out",
        className: "nav-item signout",
        onClick: handleSignOut,
        children: [/* @__PURE__ */ jsx("div", {
          className: "inline-svg ",
          children: /* @__PURE__ */ jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "23",
            height: "22",
            viewBox: "0 0 23 22",
            children: /* @__PURE__ */ jsxs("g", {
              fill: "#FFF",
              fillRule: "evenodd",
              children: [/* @__PURE__ */ jsx("path", {
                d: "M11.5 22c-6.1 0-11-4.9-11-11s4.9-11 11-11 11 4.9 11 11-4.9 11-11 11zm0-20c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9z"
              }), /* @__PURE__ */ jsx("path", {
                d: "M7 10h9v2H7z"
              })]
            })
          })
        }), /* @__PURE__ */ jsx("span", {
          className: "nav-item-label",
          children: "Sign Out"
        })]
      }), /* @__PURE__ */ jsx("a", {
        onClick: () => showModal(true),
        "data-link-label": "Navbar Create Payment",
        title: "New",
        className: "nav-item create-payment cursor-pointer",
        children: /* @__PURE__ */ jsx("span", {
          className: "button-text",
          children: "New"
        })
      })]
    })]
  });
};
function useMemoizedFn(fn2) {
  var fnRef = react.exports.useRef(fn2);
  fnRef.current = react.exports.useMemo(function() {
    return fn2;
  }, [fn2]);
  var memoizedFn = react.exports.useRef();
  if (!memoizedFn.current) {
    memoizedFn.current = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return fnRef.current.apply(this, args);
    };
  }
  return memoizedFn.current;
}
function SvgLogo() {
  return /* @__PURE__ */ react.exports.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 40 40"
  }, /* @__PURE__ */ react.exports.createElement("path", {
    d: "M9 0h22a9 9 0 0 1 9 9v22a9 9 0 0 1-9 9H9a9 9 0 0 1-9-9V9a9 9 0 0 1 9-9zm12.305 13.743c1.865 0 3.653.755 4.821 1.792a.734.734 0 0 0 1.015-.02l1.39-1.41a.725.725 0 0 0-.034-1.056 10.989 10.989 0 0 0-3.726-2.095l.436-2.076A.728.728 0 0 0 24.494 8h-2.686c-.343 0-.64.24-.712.576l-.392 1.846c-3.57.179-6.597 1.96-6.597 5.616 0 3.164 2.504 4.52 5.146 5.46 2.504.938 3.825 1.286 3.825 2.607 0 1.357-1.32 2.156-3.269 2.156-1.775 0-3.635-.586-5.079-2.009a.725.725 0 0 0-1.019-.002l-1.493 1.473a.732.732 0 0 0 .004 1.047c1.165 1.13 2.64 1.948 4.322 2.407l-.41 1.923a.729.729 0 0 0 .707.88l2.69.02a.727.727 0 0 0 .718-.578l.388-1.85c4.276-.263 6.892-2.587 6.892-5.988 0-3.13-2.607-4.451-5.772-5.529-1.808-.661-3.373-1.113-3.373-2.469 0-1.32 1.46-1.843 2.92-1.843z",
    fillRule: "nonzero"
  }));
}
const UserAvatar = (props) => {
  const _a = props, {
    user,
    fontSize = 14,
    backgroundColor = "#FB60C4"
  } = _a, htmlProps = __objRest2(_a, [
    "user",
    "fontSize",
    "backgroundColor"
  ]);
  const width = fontSize * 2 + fontSize % 2;
  if (!user)
    return null;
  return /* @__PURE__ */ jsxs("i", __spreadProps2(__spreadValues2({
    style: {
      width: `${width}px`,
      height: `${width}px`,
      fontSize: `${fontSize}px`,
      lineHeight: `${width}px`,
      backgroundColor
    },
    className: "customer-avatar"
  }, htmlProps), {
    children: [" ", /* @__PURE__ */ jsx("div", {
      className: "initial-placeholder",
      children: formatInitial(user)
    })]
  }));
};
const PaymentHeader = (props) => {
  const {
    user
  } = props;
  if (!user)
    return null;
  return /* @__PURE__ */ jsxs("header", {
    className: "payment-header",
    children: [/* @__PURE__ */ jsxs("div", {
      className: "profile-banner",
      children: [/* @__PURE__ */ jsxs("div", {
        className: "profile-nav flex-container flex-h",
        children: [/* @__PURE__ */ jsxs(Link, {
          to: "/",
          rel: "noopener noreferrer",
          className: "logo-container flex-container flex-h",
          children: [/* @__PURE__ */ jsx("div", {
            className: "logo inline-svg fill-white",
            children: /* @__PURE__ */ jsx(SvgLogo, {})
          }), /* @__PURE__ */ jsx("span", {
            className: "logo-text",
            children: "Cash App"
          })]
        }), /* @__PURE__ */ jsxs("a", {
          href: "https://itunes.apple.com/us/app/square-cash/id711923939?pt=302818&mt=8&ct=cash-web",
          rel: "noopener noreferrer",
          target: "_blank",
          className: "about-button",
          children: [" ", "Get the App"]
        })]
      }), /* @__PURE__ */ jsx("div", {
        className: "profile-nav-spacer"
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "customer-profile-simple",
      children: [/* @__PURE__ */ jsx(UserAvatar, {
        user,
        fontSize: 47
      }), /* @__PURE__ */ jsxs("div", {
        className: "profile-name",
        children: [/* @__PURE__ */ jsx("h3", {
          className: "display-name display-name-with-icon",
          children: /* @__PURE__ */ jsx("span", {
            className: "name ",
            children: formatName(user)
          })
        }), /* @__PURE__ */ jsxs("p", {
          className: "cashtag",
          children: ["Pay ", formatCashTag(user)]
        })]
      })]
    })]
  });
};
const PaymentInput = (props) => {
  const {
    setValue,
    hasError
  } = props;
  const [isError, setIsError] = React.useState(false);
  const [wholeValue, setWholeValue] = React.useState("0");
  const [fractionalValue, setFractionalValue] = React.useState("");
  const [editingFractional, setEditingFractional] = React.useState(false);
  const [wholeWidth, setWholeWidth] = React.useState(55);
  const [$whole, set$whole] = React.useState(null);
  const $fraction = React.useRef(null);
  const [font, setFont] = React.useState("");
  const [canvas, setCanvas] = React.useState(null);
  React.useEffect(() => {
    if (!wholeValue)
      return;
    const val = wholeValue + (fractionalValue ? "." + fractionalValue : "");
    setValue(parseFloat(val));
  }, [wholeValue, fractionalValue]);
  const onRefChange = React.useCallback((node) => {
    if (!node)
      return;
    set$whole(node);
    const elem = document.getElementById("whole-amount");
    if (!elem)
      return;
    const font2 = getCanvasFontSize(elem);
    const canvas2 = document.createElement("canvas");
    setWholeWidth(getTextWidth(wholeValue, font2, canvas2));
    setFont(font2);
    setCanvas(canvas2);
    return node;
  }, []);
  const handleWholeChange = (e2) => {
    let val = e2.target.value.replaceAll(/^0+|[^0-9]/g, "");
    if (val.length === 0)
      val = "0";
    setWholeWidth(getTextWidth(val, font, canvas));
    setWholeValue(val);
  };
  const handleFractionalChange = (e2) => {
    setFractionalValue(e2.target.value.replaceAll(/^0+|[^0-9]/g, ""));
  };
  const handleWholeKey = (e2) => {
    if (e2.key === "Backspace" && (wholeValue === "0" || wholeValue.length === 0)) {
      setIsError(true);
      setTimeout(() => setIsError(false), 1e3);
    } else if (e2.key === ".") {
      e2.preventDefault();
      setEditingFractional(true);
      $fraction.current.focus();
    }
  };
  const handleFractionalDelete = (e2) => {
    if (e2.key === "Backspace" && !fractionalValue.length) {
      e2.preventDefault();
      setEditingFractional(false);
      $whole.focus();
    }
  };
  return /* @__PURE__ */ jsx("div", {
    className: "ember-view",
    children: /* @__PURE__ */ jsxs("div", {
      "data-fractional-value-length": fractionalValue.length,
      className: classnames("display-amount display-amount-input-component responsive", {
        error: isError || hasError,
        "editing-fractional-value": editingFractional
      }),
      children: [/* @__PURE__ */ jsx("div", {
        className: "currency-symbol",
        children: "$"
      }), /* @__PURE__ */ jsx("input", {
        ref: onRefChange,
        type: "tel",
        name: "whole-amount-value",
        id: "whole-amount",
        autoComplete: "off",
        placeholder: "0",
        maxLength: 4,
        className: "whole-amount-value ember-text-field",
        onChange: handleWholeChange,
        value: wholeValue,
        onKeyDown: handleWholeKey,
        autoFocus: true,
        style: {
          width: wholeWidth
        }
      }), /* @__PURE__ */ jsx("input", {
        ref: $fraction,
        type: "tel",
        name: "fractional-amount-value",
        autoComplete: "off",
        tabIndex: editingFractional ? 0 : -1,
        placeholder: "00",
        maxLength: 2,
        onChange: handleFractionalChange,
        onKeyDown: handleFractionalDelete,
        value: fractionalValue,
        className: "fractional-amount-value ember-text-field"
      })]
    })
  });
};
const PaymentNote = (props) => {
  const {
    note,
    setNote
  } = props;
  const [hasText, setHasText] = React.useState(false);
  const handleNoteChange = (e2) => {
    if (e2.target.value.length > 8)
      !hasText && setHasText(true);
    else
      hasText && setHasText(false);
    setNote(e2.target.value);
  };
  return /* @__PURE__ */ jsxs("div", {
    id: "note",
    className: "field note-input-container prefixed-note-component",
    children: [/* @__PURE__ */ jsx("div", {
      className: "prefix",
      children: "For:"
    }), /* @__PURE__ */ jsx("input", {
      type: "text",
      autoComplete: "off",
      placeholder: "add a note",
      className: classnames("input ember-text-field", {
        "has-text": hasText
      }),
      value: note,
      onChange: handleNoteChange
    })]
  });
};
function useOutsideClick(ref, handleFinished) {
  const handleClickOutside = (e2) => {
    if (ref.current && !ref.current.contains(e2.target))
      handleFinished(e2);
  };
  react.exports.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
function useTheme(add2, remove, el2 = window.document.body) {
  react.exports.useLayoutEffect(() => {
    const initial = el2.className;
    if (add2) {
      if (typeof add2 === "string")
        add2 = [add2];
      el2.classList.add(...add2);
    }
    if (remove) {
      if (typeof remove === "string")
        remove = [remove];
      el2.classList.remove(...remove);
    }
    return () => {
      el2.className = initial;
    };
  }, [add2, remove]);
}
const PaymentPageForm = (props) => {
  const {
    value,
    note,
    sendTo,
    setInstructions
  } = props;
  const [show, setShow] = React.useState(false);
  const $menu = React.useRef(null);
  useOutsideClick($menu, () => setShow(false));
  const loggedIn = useAppSelector((state) => state.auth.token);
  const user = useAppSelector((state) => state.user);
  const [createTransaction] = useCreateTransactionMutation();
  const [logout] = useLogoutMutation();
  const sendTransaction = useMemoizedFn(async (data) => {
    try {
      await createTransaction(data).unwrap();
    } catch (err) {
      console.error("transaction failure:", JSON.stringify(err, null, 2));
    }
  });
  const handleSubmit = async (e2) => {
    e2.preventDefault();
    if (user.cashTag === sendTo.cashTag) {
      setInstructions("You can't pay yourself!");
      return;
    }
    try {
      await sendTransaction({
        senderId: user.cashTag,
        receiverId: sendTo.cashTag,
        value,
        note
      });
    } catch (err) {
      console.error("transaction failure:", JSON.stringify(err, null, 2));
    }
  };
  if (!(loggedIn && sendTo))
    return null;
  return /* @__PURE__ */ jsxs("form", {
    className: "form blocker-form ",
    onSubmit: handleSubmit,
    children: [/* @__PURE__ */ jsxs("div", {
      className: "current-customer-panel",
      children: [/* @__PURE__ */ jsxs("div", {
        ref: $menu,
        className: classnames("current-customer-menu theme-white theme-bg flex-container flex-v", {
          show
        }),
        children: [/* @__PURE__ */ jsxs("div", {
          className: "flex-fill",
          children: [/* @__PURE__ */ jsx("div", {
            className: "sqc-close-button",
            children: /* @__PURE__ */ jsx("i", {
              className: "sqc-close-button-icon"
            })
          }), /* @__PURE__ */ jsx(UserAvatar, {
            user,
            fontSize: 27
          }), /* @__PURE__ */ jsx("h3", {
            className: "display-name",
            children: formatName(user)
          }), /* @__PURE__ */ jsx("p", {
            className: "card theme-color",
            children: " "
          })]
        }), /* @__PURE__ */ jsx("nav", {
          children: /* @__PURE__ */ jsx("a", {
            className: "logout",
            onClick: (e2) => {
              e2.preventDefault();
              logout();
            },
            children: "Sign Out"
          })
        })]
      }), /* @__PURE__ */ jsx("div", {
        children: /* @__PURE__ */ jsxs("div", {
          className: "field display-current-customer button--round flex-container flex-h",
          onClick: () => setShow(true),
          children: [/* @__PURE__ */ jsx(UserAvatar, {
            user,
            fontSize: 14
          }), /* @__PURE__ */ jsxs("p", {
            className: "from-field truncate-text",
            children: ["From ", formatCashTag(user)]
          })]
        })
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "cta submit-button-component submit-button-with-spinner",
      children: [/* @__PURE__ */ jsx("button", {
        type: "submit",
        "aria-label": "pay",
        className: "button theme-button button--round",
        children: "pay"
      }), /* @__PURE__ */ jsx("div", {
        className: "spinner-container"
      })]
    }), /* @__PURE__ */ jsxs("a", {
      onClick: (e2) => {
        e2.preventDefault();
      },
      href: "#",
      className: "show-qr-action",
      children: ["Already have Cash App? ", /* @__PURE__ */ jsx("strong", {
        children: "Pay in the app"
      })]
    })]
  });
};
const PaymentFooter = () => {
  return /* @__PURE__ */ jsx("footer", {
    className: "payment-footer",
    children: /* @__PURE__ */ jsx("nav", {
      className: "navigation payment-navigation-links",
      children: /* @__PURE__ */ jsxs("div", {
        className: "legal is-hoverable",
        children: [/* @__PURE__ */ jsx("span", {
          className: "theme-link-color",
          children: "Legal"
        }), /* @__PURE__ */ jsxs("div", {
          className: "inner-area legal-links",
          children: [/* @__PURE__ */ jsxs("a", {
            href: "https://cash.app/legal/tos",
            rel: "noopener noreferrer",
            target: "_blank",
            className: "ember-view",
            children: [" ", "Legal"]
          }), /* @__PURE__ */ jsxs("a", {
            href: "https://squareup.com/legal/licenses",
            rel: "noopener noreferrer",
            target: "_blank",
            className: "ember-view",
            children: [" ", "Licenses"]
          }), /* @__PURE__ */ jsxs("a", {
            href: "https://squareup.com/legal/privacy",
            rel: "noopener noreferrer",
            target: "_blank",
            className: "ember-view",
            children: [" ", "Privacy"]
          })]
        })]
      })
    })
  });
};
const PaymentPage = () => {
  const {
    cashTag
  } = useParams();
  const {
    data: user,
    isLoading
  } = useGetUserByCashTagQuery(!(cashTag == null ? void 0 : cashTag.length) ? skipToken : cashTag);
  const [value, setValue] = React.useState(0);
  const [note, setNote] = React.useState("");
  const [instructions, setInstructions] = React.useState("");
  useTheme(["theme-white"], ["theme-light-gray", "theme-green"]);
  if (isLoading || !user)
    return null;
  return /* @__PURE__ */ jsxs("div", {
    className: "full-height application-cash",
    children: [/* @__PURE__ */ jsx("div", {
      className: "cookie-banner"
    }), /* @__PURE__ */ jsxs("div", {
      className: "profile-page layout-payment flex-container flex-v full-height current-step-initiate-payment",
      children: [/* @__PURE__ */ jsx(PaymentHeader, {
        user
      }), /* @__PURE__ */ jsx("main", {
        className: "profile-content-main flex-fill flex-container flex-v",
        children: /* @__PURE__ */ jsx("div", {
          className: "payment-flow-step profile-card-step flex-container flex-fill",
          children: /* @__PURE__ */ jsxs("div", {
            className: "blocker-content-section",
            children: [/* @__PURE__ */ jsxs("div", {
              className: "amount-container flex-container ",
              children: [/* @__PURE__ */ jsx(PaymentInput, {
                setValue
              }), /* @__PURE__ */ jsx(PaymentNote, {
                note,
                setNote
              })]
            }), /* @__PURE__ */ jsx("div", {
              className: "instructions-and-controls",
              children: /* @__PURE__ */ jsx("p", {
                className: "instructions text-red-400",
                children: instructions
              })
            }), /* @__PURE__ */ jsx(PaymentPageForm, {
              value,
              note,
              sendTo: user,
              setInstructions
            })]
          })
        })
      })]
    }), /* @__PURE__ */ jsx(PaymentFooter, {}), /* @__PURE__ */ jsx("div", {
      className: "modal-manager",
      children: /* @__PURE__ */ jsx("div", {
        className: "modal-overlay "
      })
    })]
  });
};
const LookupUserResults = (props) => {
  const {
    addUser,
    results = [],
    selectedUsers = {}
  } = props;
  return /* @__PURE__ */ jsx("ul", {
    className: "results",
    children: results.map((user, idx) => /* @__PURE__ */ jsxs("li", {
      tabIndex: idx + 1,
      onFocusCapture: () => addUser(user),
      className: "customer-list-item has-focus ember-view",
      children: [/* @__PURE__ */ jsx("i", {
        style: {
          width: "40px",
          height: "40px",
          fontSize: "20px",
          lineHeight: "40px"
        },
        className: "customer-avatar has-image ember-view",
        children: /* @__PURE__ */ jsx("img", {
          src: "https://cash-images-f.squarecdn.com/apps/imgs/9ZydaYiHwbs6U0u9nQIOHB.jpeg?width=40",
          className: "avatar-image"
        })
      }), /* @__PURE__ */ jsxs("div", {
        className: "name",
        children: [/* @__PURE__ */ jsx("h3", {
          className: "display-name display-name-with-icon ember-view",
          children: /* @__PURE__ */ jsx("span", {
            className: "name ",
            children: formatName(user)
          })
        }), /* @__PURE__ */ jsx("p", {
          className: "alias",
          children: formatCashTag(user)
        })]
      }), /* @__PURE__ */ jsx("i", {
        className: classnames("selection-indicator", {
          "is-selected": user.cashTag in selectedUsers
        })
      })]
    }, user.cashTag))
  });
};
const normalizeKey = (input) => input.length <= 2 ? input : (input[0] === "$" ? input.slice(1) : input).toLocaleLowerCase();
const LookupUserInput = (props) => {
  const {
    selectedUsers,
    setSelectedUsers,
    hasError,
    setHasError
  } = props;
  const [to2, setTo] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [getSearch, {
    data: searchResults
  }] = useLazySearchUsersQuery();
  const [showSuggestions, setShowSuggestions] = React.useState(false);
  const addUser = (usr) => {
    console.debug("[DEBUG] selecting user:", JSON.stringify(usr, null, 2));
    setSelectedUsers(__spreadProps2(__spreadValues2({}, selectedUsers), {
      [usr.cashTag]: usr
    }));
    setTo("");
    clearErrors();
  };
  const addIfValid = (str) => {
    if (!searchResults)
      return;
    const key = normalizeKey(str);
    const usr = searchResults == null ? void 0 : searchResults.find((x2) => {
      var _a;
      return x2.cashTag.toLocaleLowerCase() === key || ((_a = x2 == null ? void 0 : x2.email) == null ? void 0 : _a.find((e2) => e2.email.toLocaleLowerCase() === key));
    });
    if (usr)
      addUser(usr);
    return usr;
  };
  const clearErrors = () => {
    hasError && setHasError(false);
    errorMessage.length && setErrorMessage("");
  };
  const handleSearch = useMemoizedFn((input) => {
    if (input.length < 2)
      return;
    getSearch({
      query: input,
      match: "prefix"
    }, true);
  });
  const search = React.useCallback(debounce(handleSearch, 400, {
    leading: false,
    trailing: true
  }), []);
  const handleFocus = (e2) => {
    e2.preventDefault();
    clearErrors();
    setShowSuggestions(true);
  };
  const handleBlur = (e2) => {
    e2.preventDefault();
    setShowSuggestions(false);
    if (e2.target.value.length > 0 && !addIfValid(e2.target.value)) {
      setHasError(true);
      setErrorMessage(`'${e2.target.value}' is not a valid Cashtag, phone number, or email address`);
    }
  };
  const handleChange = (e2) => {
    e2.preventDefault();
    const str = e2.target.value.trim();
    setTo(str);
    search(str.toLocaleLowerCase());
  };
  return /* @__PURE__ */ jsxs("div", {
    className: classnames("field static-label-field customer-chooser ember-view", {
      "is-invalid": hasError
    }),
    children: [/* @__PURE__ */ jsx("label", {
      children: "To:"
    }), /* @__PURE__ */ jsx("div", {
      className: "recipients flex-container flex-h",
      children: /* @__PURE__ */ jsxs("div", {
        className: "token-list",
        children: [Object.values(selectedUsers).map((usr) => /* @__PURE__ */ jsxs("div", {
          title: formatCashTag(usr),
          className: "tokenized-customer ember-view",
          children: [/* @__PURE__ */ jsx("div", {
            className: "display-name truncate-text",
            children: formatName(usr)
          }), /* @__PURE__ */ jsx("a", {
            className: "remove cursor-pointer",
            onClick: () => setSelectedUsers(omit$1(selectedUsers, usr.cashTag))
          })]
        }, usr.cashTag)), /* @__PURE__ */ jsx("input", {
          type: "text",
          autoComplete: "off",
          spellCheck: "false",
          placeholder: "Name, $Cashtag, SMS, Email",
          autoCorrect: "false",
          autoCapitalize: "off",
          className: "live-input ember-text-field ember-view",
          onFocus: handleFocus,
          onBlur: handleBlur,
          onChange: handleChange,
          value: to2
        })]
      })
    }), /* @__PURE__ */ jsxs("div", {
      className: "anchor",
      children: [/* @__PURE__ */ jsx("div", {
        className: classnames("list-picker customer-list-picker ember-view", {
          show: showSuggestions
        }),
        children: /* @__PURE__ */ jsx(LookupUserResults, {
          results: searchResults,
          selectedUsers,
          addUser
        })
      }), /* @__PURE__ */ jsx("div", {
        className: classnames("error-container ", {
          show: errorMessage.length > 0
        }),
        children: /* @__PURE__ */ jsx("p", {
          className: "error-message",
          children: errorMessage
        })
      })]
    })]
  });
};
const TransactionModal = React.forwardRef((props, ref) => {
  const {
    showModal
  } = props;
  const user = useAppSelector((state) => state.user);
  const [value, setValue] = React.useState(0);
  const [note, setNote] = React.useState("");
  const [selectedUsers, setSelectedUsers] = React.useState({});
  const [receiverError, setReceiverError] = React.useState(false);
  const [valueError, setValueError] = React.useState(false);
  const [createTransaction] = useCreateTransactionMutation();
  const validate = useMemoizedFn((value2, receivers) => {
    let res = true;
    if (value2 === 0) {
      res = false;
      setValueError(true);
      setTimeout(() => setValueError(false), 1e3);
    }
    if (isEmpty(receivers)) {
      res = false;
      setReceiverError(true);
    }
    return res;
  });
  const handleSubmit = (isRequest) => async (e2) => {
    e2.preventDefault();
    if (!validate(value, selectedUsers))
      return;
    try {
      for (const receiver of Object.values(selectedUsers)) {
        await createTransaction({
          senderId: isRequest ? receiver.cashTag : user.cashTag,
          receiverId: isRequest ? user.cashTag : receiver.cashTag,
          value,
          note
        }).unwrap();
      }
      showModal(false);
    } catch (err) {
      console.debug("DEBUG: transaction failure:", JSON.stringify(err, null, 2));
    }
  };
  if (!user)
    return null;
  return /* @__PURE__ */ jsxs("div", {
    ref,
    className: "content theme-white theme-bg pad",
    children: [/* @__PURE__ */ jsx("div", {
      onClick: () => showModal(false),
      className: "sqc-close-button ember-view",
      children: /* @__PURE__ */ jsx("i", {
        className: "sqc-close-button-icon"
      })
    }), /* @__PURE__ */ jsxs("div", {
      className: "payment-initiator ember-view",
      children: [/* @__PURE__ */ jsx("div", {
        className: "fixed-display-amount-wrapper",
        children: /* @__PURE__ */ jsx(PaymentInput, {
          setValue,
          hasError: valueError
        })
      }), /* @__PURE__ */ jsx(LookupUserInput, {
        selectedUsers,
        setSelectedUsers,
        hasError: receiverError,
        setHasError: setReceiverError
      }), /* @__PURE__ */ jsxs("div", {
        className: "field static-label-field note-field ember-view",
        children: [/* @__PURE__ */ jsx("label", {
          children: "For:"
        }), /* @__PURE__ */ jsx("input", {
          type: "text",
          placeholder: "Dinner, Rent, etc.",
          className: "ember-text-field ember-view",
          value: note,
          onChange: (e2) => {
            e2.preventDefault();
            setNote(e2.target.value);
          }
        })]
      }), /* @__PURE__ */ jsxs("div", {
        className: "cta button-group",
        children: [/* @__PURE__ */ jsx("button", {
          className: "start-payment-button request",
          onClick: handleSubmit(true),
          children: "Request"
        }), /* @__PURE__ */ jsx("button", {
          className: "start-payment-button send",
          onClick: handleSubmit(false),
          children: "Pay"
        })]
      })]
    }), /* @__PURE__ */ jsx("div", {
      className: "spinner-container ember-view"
    })]
  });
});
const useSetShowModal = () => useOutletContext();
const Dashboard = (props) => {
  const [showTransactionModal, setShowTransactionModal] = React.useState(false);
  React.useLayoutEffect(() => {
    document.body.classList.add("theme-light-gray");
    document.body.classList.remove("theme-green");
  }, []);
  return /* @__PURE__ */ jsxs("div", {
    className: "full-height application-cash",
    children: [showTransactionModal && /* @__PURE__ */ jsx("div", {
      className: "full-screen-payment-sheet show",
      children: /* @__PURE__ */ jsx(TransactionModal, {
        showModal: setShowTransactionModal
      })
    }), /* @__PURE__ */ jsx("div", {
      className: "account-new",
      children: /* @__PURE__ */ jsxs("div", {
        className: "layout-account-new flex-container",
        children: [/* @__PURE__ */ jsx(Sidebar, __spreadValues2({
          showModal: setShowTransactionModal
        }, props)), /* @__PURE__ */ jsx("section", {
          className: "yield-content flex-fill flex-v theme-bg theme-light-gray",
          children: /* @__PURE__ */ jsx(Outlet, {
            context: {
              setShowModal: setShowTransactionModal
            }
          })
        })]
      })
    })]
  });
};
const MyCard = (props) => {
  var _a;
  const {
    user
  } = props;
  const [showCard, setShowCard] = React.useState(false);
  const [showMenu, setShowMenu] = React.useState(false);
  if (!user)
    return null;
  const card = formatCreditCard(showCard, user.card);
  return /* @__PURE__ */ jsx("div", {
    className: "card-likeness-section",
    onClick: () => setShowMenu(!showMenu),
    children: /* @__PURE__ */ jsxs("div", {
      className: "card-likeness",
      children: [/* @__PURE__ */ jsxs("div", {
        className: "card-inner",
        children: [/* @__PURE__ */ jsxs("div", {
          typeof: "button",
          className: "card-number {{unless card.pan 'locked'}} copy-btn",
          children: [/* @__PURE__ */ jsx("div", {
            className: "tooltip-bubble",
            children: "Copied!"
          }), /* @__PURE__ */ jsx("div", {
            className: "card-number-wrapper flex justify-between",
            children: card.map((part, idx) => /* @__PURE__ */ jsx("div", {
              className: "card-number-section",
              children: part
            }, idx))
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: "card-bottom",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "card-details",
            children: [/* @__PURE__ */ jsx("div", {
              className: "cardholder-name",
              children: formatName(user)
            }), /* @__PURE__ */ jsx("span", {
              className: "card-expiry-text",
              children: ((_a = user.card) == null ? void 0 : _a.cardActivated) ? "Card Activated" : "Card Not Activated"
            })]
          }), /* @__PURE__ */ jsx("div", {
            className: "inline-svg card-logo mr-[-19px]",
            children: /* @__PURE__ */ jsx("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "21",
              height: "6",
              viewBox: "0 0 21 6",
              children: /* @__PURE__ */ jsx("path", {
                d: "M18.51 5.991s-.148-.792-.196-1l-2.06-.002c-.062.161-.338 1.002-.338 1.002h-1.689L16.616.494c.169-.387.457-.493.842-.493h1.243l1.301 5.99H18.51zm-.83-3.854l-.109-.512c-.081.223-.222.583-.213.567 0 0-.508 1.203-.641 1.545h1.335c-.064-.298-.372-1.6-.372-1.6zm-3.604-.661a2.936 2.936 0 0 0-1.203-.227c-.63 0-.921.264-.921.511-.004.278.34.461.902.736.928.424 1.357.846 1.351 1.521-.013 1.232-1.11 1.982-2.801 1.982-.721-.007-1.416-.151-1.791-.317l.225-1.329.208.094c.528.222.87.312 1.514.312.462 0 .958-.135.962-.533.003-.26-.208-.446-.834-.737-.61-.284-1.418-.668-1.409-1.521.01-1.154 1.129-1.959 2.718-1.959a4.13 4.13 0 0 1 1.441.249l-.218 1.287-.144-.069zM6.998 5.988L8.003.003h1.609L8.606 5.988H6.998zm-3.879.003L1.685.781c.869.478 1.527 1.115 1.948 1.855l.069.129c.038.072.069.147.103.221.037.088.075.176.102.264l.167.823L5.649 0h1.704L4.821 5.989l-1.702.002zm.514-3.355A4.849 4.849 0 0 0 1.679.759l.006.022A6.79 6.79 0 0 0 0 .128L.02.004h2.594c.349.013.631.125.729.501l.564 2.698c-.029-.074-.069-.145-.102-.217a3.645 3.645 0 0 0-.103-.221c-.023-.043-.045-.087-.069-.129z",
                fillRule: "evenodd"
              })
            })
          })]
        })]
      }), /* @__PURE__ */ jsx("div", {
        className: classnames("action-overlay-menu layout-vertical", {
          "show-menu": showMenu
        }),
        children: /* @__PURE__ */ jsx("div", {
          className: "action-items",
          children: /* @__PURE__ */ jsxs("div", {
            className: "action-item flex-h virtual-card-visibility",
            children: [/* @__PURE__ */ jsx("span", {
              className: "title",
              children: "Show Card Info"
            }), /* @__PURE__ */ jsx("div", {
              onClick: (e2) => {
                e2.preventDefault();
                setShowCard(!showCard);
              },
              className: classnames("toggle-switch", {
                checked: !showCard
              })
            })]
          })
        })
      })]
    })
  });
};
const BankDepositCard = (props) => {
  const {
    account
  } = props;
  return /* @__PURE__ */ jsxs("div", {
    className: "dda-numbers",
    children: [/* @__PURE__ */ jsxs("span", {
      children: [/* @__PURE__ */ jsx("p", {
        className: "dda-number",
        children: formatRoutingNumber(account)
      }), /* @__PURE__ */ jsx("h4", {
        className: "account-module-header",
        children: "Routing"
      })]
    }), /* @__PURE__ */ jsxs("span", {
      children: [/* @__PURE__ */ jsx("p", {
        className: "dda-number",
        children: formatAccountNumber(account)
      }), /* @__PURE__ */ jsx("h4", {
        className: "account-module-header",
        children: "Account"
      })]
    })]
  });
};
const MyCashPage = (props) => {
  var _a;
  const {
    user
  } = props;
  return /* @__PURE__ */ jsx("section", {
    className: "flex-container flex-fill layout-mycash",
    children: /* @__PURE__ */ jsxs("div", {
      className: "balance-content",
      children: [/* @__PURE__ */ jsx("h1", {
        className: "balance-amount",
        children: formatBalance(user)
      }), /* @__PURE__ */ jsx("h2", {
        className: "balance-subtitle",
        children: "Cash Card"
      }), /* @__PURE__ */ jsx(MyCard, __spreadValues2({}, props)), /* @__PURE__ */ jsx("p", {
        className: "physical-card-upsell",
        children: "Get a card in the mail using the mobile\xA0app"
      }), /* @__PURE__ */ jsx("button", {
        className: "button button--white--with-border cash-out disabled",
        children: "Cash Out"
      }), /* @__PURE__ */ jsx("button", {
        className: "button button--white--with-border add-cash hide",
        children: "Add Cash"
      }), /* @__PURE__ */ jsxs("div", {
        className: "dda-display clickable",
        children: [/* @__PURE__ */ jsx("h3", {
          className: "account-module-header",
          children: "Direct Deposit"
        }), (_a = user.accounts) == null ? void 0 : _a.map((account, idx) => /* @__PURE__ */ jsx(BankDepositCard, {
          account
        }, idx))]
      }), /* @__PURE__ */ jsxs("div", {
        className: "limits-overview",
        children: [/* @__PURE__ */ jsx("h3", {
          className: "account-module-header",
          children: "CASH LIMITS"
        }), /* @__PURE__ */ jsxs("div", {
          className: "limit-types flex-container",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "limit-type-section flex-v-center",
            children: [/* @__PURE__ */ jsx("h4", {
              className: "limit-type-title",
              children: "Send"
            }), /* @__PURE__ */ jsx("p", {
              className: "limit-type-text",
              children: "$2,500 per Week"
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "limit-type-section flex-v-center",
            children: [/* @__PURE__ */ jsx("h4", {
              className: "limit-type-title",
              children: "Receive"
            }), /* @__PURE__ */ jsx("p", {
              className: "limit-type-text",
              children: "Unlimited"
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "limit-type-section flex-v-center",
            children: [/* @__PURE__ */ jsx("h4", {
              className: "limit-type-title",
              children: "Add Cash"
            }), /* @__PURE__ */ jsx("p", {
              className: "limit-type-text",
              children: "$2,500 per Week"
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "limit-type-section flex-v-center",
            children: [/* @__PURE__ */ jsx("h4", {
              className: "limit-type-title",
              children: "Cash Out"
            }), /* @__PURE__ */ jsx("p", {
              className: "limit-type-text",
              children: "$25,000 per Week"
            })]
          })]
        })]
      })]
    })
  });
};
const SettingsPage = (props) => {
  var _a, _b;
  const {
    user
  } = props;
  if (!user)
    return null;
  const [setName] = useSetNameMutation();
  const [displayName, setDisplayName] = React.useState((_a = user == null ? void 0 : user.username) != null ? _a : user.name);
  const updateName = React.useCallback(debounce((name) => {
    setName({
      id: user.id,
      name: name.trim()
    });
  }, 500, {
    leading: false,
    trailing: true
  }), []);
  const handleChange = async (e2) => {
    const name = e2.target.value;
    if (isEmpty(name))
      return;
    setDisplayName(name);
    updateName(name);
  };
  return /* @__PURE__ */ jsxs("div", {
    className: "layout-edit-settings flex-container flex-v flex-fill",
    children: [/* @__PURE__ */ jsxs("div", {
      className: "edit-settings-header theme-white theme-bg",
      children: [/* @__PURE__ */ jsxs("div", {
        className: "customer-profile-simple",
        children: [/* @__PURE__ */ jsxs("i", {
          style: {
            backgroundColor: "#FB60C4"
          },
          className: "customer-avatar",
          children: [/* @__PURE__ */ jsx("div", {
            className: "initial-placeholder",
            children: formatInitial(user)
          }), /* @__PURE__ */ jsx("div", {
            className: "add-photo-placeholder",
            children: "Add Photo"
          }), /* @__PURE__ */ jsx("input", {
            type: "file",
            accept: ".jpg, .png, .jpeg, .gif"
          })]
        }), " ", /* @__PURE__ */ jsx("h3", {
          className: "display-name display-name-with-icon",
          children: /* @__PURE__ */ jsx("span", {
            className: "name ",
            children: formatName(user)
          })
        }), /* @__PURE__ */ jsx("h3", {
          className: "cashtag",
          children: /* @__PURE__ */ jsx(Link, {
            to: `/${formatCashTag(user)}`,
            children: formatCashTag(user)
          })
        })]
      }), /* @__PURE__ */ jsxs("a", {
        "data-link-label": "Settings Notifications",
        href: "#",
        className: "notification-prefs",
        children: [/* @__PURE__ */ jsx("span", {
          className: "display-text show-at-sm",
          children: "Notifications"
        }), /* @__PURE__ */ jsx("div", {
          className: "inline-svg hide-at-sm",
          children: /* @__PURE__ */ jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 30 32",
            children: /* @__PURE__ */ jsx("g", {
              fill: "none",
              fillRule: "evenodd",
              children: /* @__PURE__ */ jsx("path", {
                d: "M13.174.725c-7.61.791-8.463 6.797-9.22 12.139-.511 3.607-1.039 7.338-3.462 9.859a1.75 1.75 0 0 0-.347 1.906C.424 25.277 1.292 26 2.001 26h26c.71 0 1.579-.725 1.858-1.375a1.751 1.751 0 0 0-.354-1.908c-2.444-2.521-2.976-6.249-3.491-9.856C25.251 7.516 24.39 1.509 16.717.722M20 28c0 2.499-2.117 4.002-4.634 4.002C12.849 32.002 11 30.499 11 28h9z"
              })
            })
          })
        })]
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: "edit-settings-panel pad",
      children: [/* @__PURE__ */ jsxs("div", {
        className: "config-column profile-items",
        children: [/* @__PURE__ */ jsx("h3", {
          className: "account-module-header",
          children: "Display Name"
        }), /* @__PURE__ */ jsx("div", {
          className: "account-module-container",
          children: /* @__PURE__ */ jsxs("div", {
            className: "inline-editable-field display-name-field settings-display-field",
            children: [/* @__PURE__ */ jsx("div", {
              className: "field fk-field-container",
              children: /* @__PURE__ */ jsx("input", {
                type: "text",
                "aria-label": "Display Name",
                name: "displayName",
                autoComplete: "off",
                spellCheck: "false",
                autoCapitalize: "off",
                id: "display_name",
                placeholder: "Display Name",
                value: displayName,
                onChange: handleChange
              })
            }), /* @__PURE__ */ jsx("div", {
              className: "spinner-container"
            }), /* @__PURE__ */ jsx("a", {
              className: "icon-action-required"
            })]
          })
        }), /* @__PURE__ */ jsx("h3", {
          className: "account-module-header",
          children: "$Cashtag"
        }), /* @__PURE__ */ jsxs("div", {
          className: "account-module-container cashtag",
          children: [/* @__PURE__ */ jsx("div", {
            className: "settings-display-field cashtag has-edit-action",
            children: formatCashTag(user)
          }), /* @__PURE__ */ jsxs("div", {
            className: "settings-display-field toggle-field",
            children: [/* @__PURE__ */ jsx("div", {
              className: "toggle-switch checked"
            }), /* @__PURE__ */ jsx("h4", {
              className: "title",
              children: "Cash.app"
            }), /* @__PURE__ */ jsxs("p", {
              className: "description",
              children: ["Allow others to pay me at", " ", /* @__PURE__ */ jsxs(Link, {
                style: {
                  color: "#00d64f"
                },
                to: `/${formatCashTag(user)}`,
                target: "_blank",
                rel: "noopener noreferrer",
                children: ["cash.app/", formatCashTag(user)]
              })]
            })]
          })]
        }), /* @__PURE__ */ jsx("h3", {
          className: "account-module-header",
          children: "Address"
        }), /* @__PURE__ */ jsx("div", {
          className: "account-module-container address-container",
          children: /* @__PURE__ */ jsx("div", {
            className: "settings-display-field address editable truncate-text has-add-action",
            children: "Add Address"
          })
        }), /* @__PURE__ */ jsxs("div", {
          className: "privacy",
          children: [/* @__PURE__ */ jsx("h3", {
            className: "account-module-header",
            children: "Privacy"
          }), /* @__PURE__ */ jsxs("div", {
            className: "account-module-container",
            children: [/* @__PURE__ */ jsxs("div", {
              className: "settings-display-field toggle-field",
              children: [/* @__PURE__ */ jsx("div", {
                className: "toggle-switch checked"
              }), /* @__PURE__ */ jsx("h4", {
                className: "title",
                children: "Incoming Requests"
              }), /* @__PURE__ */ jsx("p", {
                className: "description",
                children: "Allow others to request money from me"
              })]
            }), /* @__PURE__ */ jsxs("div", {
              className: "deposit-options-list settings-submodule",
              children: [/* @__PURE__ */ jsxs("div", {
                className: "preference-list-item settings-display-field",
                children: [/* @__PURE__ */ jsx("span", {
                  className: "display-text",
                  children: "Allow All"
                }), /* @__PURE__ */ jsx("i", {
                  className: "checkmark show"
                })]
              }), /* @__PURE__ */ jsxs("div", {
                className: "preference-list-item settings-display-field",
                children: [/* @__PURE__ */ jsx("span", {
                  className: "display-text",
                  children: "Contacts Only"
                }), /* @__PURE__ */ jsx("i", {
                  className: "checkmark "
                })]
              })]
            })]
          })]
        })]
      }), /* @__PURE__ */ jsxs("div", {
        className: "config-column funding-items mt-[25px]",
        children: [/* @__PURE__ */ jsx("h3", {
          className: "account-module-header",
          children: "Your Info"
        }), /* @__PURE__ */ jsxs("div", {
          className: "account-module-container aliases",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "settings-display-field truncate-text phone-number",
            children: [formatUserPhoneNumber(user), /* @__PURE__ */ jsx("a", {
              className: "delete-button"
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "settings-display-field truncate-text email-address",
            children: [((_b = user.email) == null ? void 0 : _b.length) && user.email[0].email, /* @__PURE__ */ jsx("a", {
              className: "delete-button"
            })]
          }), /* @__PURE__ */ jsx("div", {
            className: "settings-display-field add-email-or-sms has-add-action",
            children: "Add Phone or Email"
          }), /* @__PURE__ */ jsx("div", {
            className: "settings-display-field download-your-info",
            children: /* @__PURE__ */ jsx(Link, {
              to: "/documents/personal-data",
              target: "_blank",
              rel: "noopener noreferrer",
              title: "Download a copy of your Cash App data",
              "data-link-label": "Download CSV",
              className: "theme-link-color",
              children: "Download Your Info"
            })
          })]
        }), /* @__PURE__ */ jsx("h3", {
          className: "account-module-header",
          children: "Funds"
        }), /* @__PURE__ */ jsx("div", {
          children: /* @__PURE__ */ jsxs("div", {
            className: "account-module-container instruments-container",
            children: [/* @__PURE__ */ jsxs("div", {
              className: "instrument-item settings-display-field settings-instrument-item cash-balance",
              children: [/* @__PURE__ */ jsx("i", {
                className: "instrument-icon",
                children: /* @__PURE__ */ jsx("img", {
                  src: "https://cash-f.squarecdn.com/ember/d418d4260ec383230fefbec17515c05978573c61/assets/images/instrument-balance.svg"
                })
              }), /* @__PURE__ */ jsx("span", {
                className: "instrument-identifier",
                children: "Cash Balance"
              }), /* @__PURE__ */ jsx("span", {
                className: "available-funds ",
                children: formatBalance(user)
              })]
            }), /* @__PURE__ */ jsxs("div", {
              className: "instrument-item settings-display-field settings-instrument-item debit-card",
              children: [/* @__PURE__ */ jsx("i", {
                className: "instrument-icon",
                children: /* @__PURE__ */ jsx("img", {
                  src: "https://cash-images-f.squarecdn.com/static/BofA.png?width=76"
                })
              }), /* @__PURE__ */ jsx("span", {
                className: "instrument-identifier",
                children: "Bank of America"
              })]
            })]
          })
        }), /* @__PURE__ */ jsx("h3", {
          className: "account-module-header mt-[25px]",
          children: "Security"
        }), /* @__PURE__ */ jsxs("div", {
          className: "account-module-container security-lock-container",
          children: [/* @__PURE__ */ jsx("div", {
            className: "theme-link-color settings-display-field change-passcode",
            children: "Change PIN"
          }), /* @__PURE__ */ jsxs("div", {
            className: "settings-display-field toggle-field",
            children: [/* @__PURE__ */ jsx("div", {
              className: "toggle-switch checked"
            }), /* @__PURE__ */ jsx("h4", {
              className: "title",
              children: "Security Lock"
            }), /* @__PURE__ */ jsx("p", {
              className: "description",
              children: "Require a PIN to transfer funds"
            })]
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: "legal-links",
          children: [/* @__PURE__ */ jsxs("a", {
            href: "https://cash.app/legal/tos",
            rel: "noopener noreferrer",
            target: "_blank",
            children: [" ", "Legal"]
          }), /* @__PURE__ */ jsxs("a", {
            href: "https://squareup.com/legal/privacy",
            rel: "noopener noreferrer",
            target: "_blank",
            children: [" ", "Privacy"]
          }), /* @__PURE__ */ jsx("a", {
            href: "/support",
            children: "Support"
          })]
        })]
      })]
    })]
  });
};
const ActivityStatements = () => {
  return /* @__PURE__ */ jsx("div", {
    className: "flyout-menu activity-statement-selector",
    children: /* @__PURE__ */ jsxs("div", {
      className: "scroll-container activity-available-statement-list",
      children: [/* @__PURE__ */ jsx("a", {
        href: "/documents/transaction-history",
        target: "_blank",
        rel: "noopener noreferrer",
        title: "Export CSV",
        "data-link-label": "Download CSV",
        className: "export-csv",
        children: "Export CSV"
      }), /* @__PURE__ */ jsxs("a", {
        href: "/statements/April-2022",
        className: "activity-statement-selector-item",
        children: [" ", "April 2022"]
      }), /* @__PURE__ */ jsxs("a", {
        href: "/statements/March-2022",
        className: "activity-statement-selector-item",
        children: [" ", "March 2022"]
      }), /* @__PURE__ */ jsxs("a", {
        href: "/statements/February-2022",
        className: "activity-statement-selector-item",
        children: [" ", "February 2022"]
      }), /* @__PURE__ */ jsxs("a", {
        href: "/statements/January-2022",
        className: "activity-statement-selector-item",
        children: [" ", "January 2022"]
      }), /* @__PURE__ */ jsxs("a", {
        href: "/statements/December-2021",
        className: "activity-statement-selector-item",
        children: [" ", "December 2021"]
      }), /* @__PURE__ */ jsxs("a", {
        href: "/statements/November-2021",
        className: "activity-statement-selector-item",
        children: [" ", "November 2021"]
      }), /* @__PURE__ */ jsxs("a", {
        href: "/statements/October-2021",
        className: "activity-statement-selector-item",
        children: [" ", "October 2021"]
      }), /* @__PURE__ */ jsxs("a", {
        href: "/statements/September-2021",
        className: "activity-statement-selector-item",
        children: [" ", "September 2021"]
      })]
    })
  });
};
const ActivityHeader = (props) => {
  const {
    setSearchTerm,
    searchTerm
  } = props;
  const [searchActive, setSearchActive] = React.useState(false);
  const [placeholder, setPlaceholder] = React.useState("Search");
  const $ref = React.useRef(null);
  useOutsideClick($ref, () => {
    setSearchActive(false);
    setPlaceholder("Search");
  });
  const handleChange = (e2) => {
    e2.preventDefault();
    setSearchTerm(e2.target.value.trim());
  };
  return /* @__PURE__ */ jsxs("header", {
    className: "activity-header flex-static",
    children: [/* @__PURE__ */ jsxs("div", {
      className: "header-content flex-container flex-h",
      children: [/* @__PURE__ */ jsx("label", {
        htmlFor: "search_term",
        className: "header-icon icon-search"
      }), /* @__PURE__ */ jsx("form", {
        className: "search-bar",
        children: /* @__PURE__ */ jsx("div", {
          className: "field fk-field-container",
          children: /* @__PURE__ */ jsx("input", {
            id: "search_term",
            ref: $ref,
            type: "text",
            "aria-label": "Search",
            name: "searchTerm",
            autoComplete: "off",
            spellCheck: false,
            autoCapitalize: "off",
            onChange: handleChange,
            onClick: () => {
              setSearchActive(true);
              setPlaceholder("Search transactions by name, amount, or note");
            },
            placeholder,
            value: searchTerm
          })
        })
      }), /* @__PURE__ */ jsx("a", {
        href: "#",
        onClick: (e2) => e2.preventDefault(),
        title: "Statements",
        "data-link-label": "Toggle statement selector",
        className: classnames("header-icon icon-csv-download statement-selector-trigger", {
          hidden: searchActive
        }),
        children: /* @__PURE__ */ jsx("span", {
          className: "download-text",
          children: "Statements"
        })
      })]
    }), /* @__PURE__ */ jsx(ActivityStatements, {})]
  });
};
//! moment.js
//! version : 2.29.3
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var hookCallback;
function hooks() {
  return hookCallback.apply(null, arguments);
}
function setHookCallback(callback) {
  hookCallback = callback;
}
function isArray(input) {
  return input instanceof Array || Object.prototype.toString.call(input) === "[object Array]";
}
function isObject(input) {
  return input != null && Object.prototype.toString.call(input) === "[object Object]";
}
function hasOwnProp(a2, b2) {
  return Object.prototype.hasOwnProperty.call(a2, b2);
}
function isObjectEmpty(obj) {
  if (Object.getOwnPropertyNames) {
    return Object.getOwnPropertyNames(obj).length === 0;
  } else {
    var k2;
    for (k2 in obj) {
      if (hasOwnProp(obj, k2)) {
        return false;
      }
    }
    return true;
  }
}
function isUndefined(input) {
  return input === void 0;
}
function isNumber(input) {
  return typeof input === "number" || Object.prototype.toString.call(input) === "[object Number]";
}
function isDate(input) {
  return input instanceof Date || Object.prototype.toString.call(input) === "[object Date]";
}
function map(arr, fn2) {
  var res = [], i2, arrLen = arr.length;
  for (i2 = 0; i2 < arrLen; ++i2) {
    res.push(fn2(arr[i2], i2));
  }
  return res;
}
function extend(a2, b2) {
  for (var i2 in b2) {
    if (hasOwnProp(b2, i2)) {
      a2[i2] = b2[i2];
    }
  }
  if (hasOwnProp(b2, "toString")) {
    a2.toString = b2.toString;
  }
  if (hasOwnProp(b2, "valueOf")) {
    a2.valueOf = b2.valueOf;
  }
  return a2;
}
function createUTC(input, format2, locale2, strict) {
  return createLocalOrUTC(input, format2, locale2, strict, true).utc();
}
function defaultParsingFlags() {
  return {
    empty: false,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: false,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: false,
    userInvalidated: false,
    iso: false,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: false,
    weekdayMismatch: false
  };
}
function getParsingFlags(m2) {
  if (m2._pf == null) {
    m2._pf = defaultParsingFlags();
  }
  return m2._pf;
}
var some;
if (Array.prototype.some) {
  some = Array.prototype.some;
} else {
  some = function(fun) {
    var t2 = Object(this), len = t2.length >>> 0, i2;
    for (i2 = 0; i2 < len; i2++) {
      if (i2 in t2 && fun.call(this, t2[i2], i2, t2)) {
        return true;
      }
    }
    return false;
  };
}
function isValid(m2) {
  if (m2._isValid == null) {
    var flags = getParsingFlags(m2), parsedParts = some.call(flags.parsedDateParts, function(i2) {
      return i2 != null;
    }), isNowValid = !isNaN(m2._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidEra && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);
    if (m2._strict) {
      isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === void 0;
    }
    if (Object.isFrozen == null || !Object.isFrozen(m2)) {
      m2._isValid = isNowValid;
    } else {
      return isNowValid;
    }
  }
  return m2._isValid;
}
function createInvalid(flags) {
  var m2 = createUTC(NaN);
  if (flags != null) {
    extend(getParsingFlags(m2), flags);
  } else {
    getParsingFlags(m2).userInvalidated = true;
  }
  return m2;
}
var momentProperties = hooks.momentProperties = [], updateInProgress = false;
function copyConfig(to2, from2) {
  var i2, prop, val, momentPropertiesLen = momentProperties.length;
  if (!isUndefined(from2._isAMomentObject)) {
    to2._isAMomentObject = from2._isAMomentObject;
  }
  if (!isUndefined(from2._i)) {
    to2._i = from2._i;
  }
  if (!isUndefined(from2._f)) {
    to2._f = from2._f;
  }
  if (!isUndefined(from2._l)) {
    to2._l = from2._l;
  }
  if (!isUndefined(from2._strict)) {
    to2._strict = from2._strict;
  }
  if (!isUndefined(from2._tzm)) {
    to2._tzm = from2._tzm;
  }
  if (!isUndefined(from2._isUTC)) {
    to2._isUTC = from2._isUTC;
  }
  if (!isUndefined(from2._offset)) {
    to2._offset = from2._offset;
  }
  if (!isUndefined(from2._pf)) {
    to2._pf = getParsingFlags(from2);
  }
  if (!isUndefined(from2._locale)) {
    to2._locale = from2._locale;
  }
  if (momentPropertiesLen > 0) {
    for (i2 = 0; i2 < momentPropertiesLen; i2++) {
      prop = momentProperties[i2];
      val = from2[prop];
      if (!isUndefined(val)) {
        to2[prop] = val;
      }
    }
  }
  return to2;
}
function Moment(config) {
  copyConfig(this, config);
  this._d = new Date(config._d != null ? config._d.getTime() : NaN);
  if (!this.isValid()) {
    this._d = new Date(NaN);
  }
  if (updateInProgress === false) {
    updateInProgress = true;
    hooks.updateOffset(this);
    updateInProgress = false;
  }
}
function isMoment(obj) {
  return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
}
function warn(msg) {
  if (hooks.suppressDeprecationWarnings === false && typeof console !== "undefined" && console.warn) {
    console.warn("Deprecation warning: " + msg);
  }
}
function deprecate(msg, fn2) {
  var firstTime = true;
  return extend(function() {
    if (hooks.deprecationHandler != null) {
      hooks.deprecationHandler(null, msg);
    }
    if (firstTime) {
      var args = [], arg, i2, key, argLen = arguments.length;
      for (i2 = 0; i2 < argLen; i2++) {
        arg = "";
        if (typeof arguments[i2] === "object") {
          arg += "\n[" + i2 + "] ";
          for (key in arguments[0]) {
            if (hasOwnProp(arguments[0], key)) {
              arg += key + ": " + arguments[0][key] + ", ";
            }
          }
          arg = arg.slice(0, -2);
        } else {
          arg = arguments[i2];
        }
        args.push(arg);
      }
      warn(msg + "\nArguments: " + Array.prototype.slice.call(args).join("") + "\n" + new Error().stack);
      firstTime = false;
    }
    return fn2.apply(this, arguments);
  }, fn2);
}
var deprecations = {};
function deprecateSimple(name, msg) {
  if (hooks.deprecationHandler != null) {
    hooks.deprecationHandler(name, msg);
  }
  if (!deprecations[name]) {
    warn(msg);
    deprecations[name] = true;
  }
}
hooks.suppressDeprecationWarnings = false;
hooks.deprecationHandler = null;
function isFunction(input) {
  return typeof Function !== "undefined" && input instanceof Function || Object.prototype.toString.call(input) === "[object Function]";
}
function set(config) {
  var prop, i2;
  for (i2 in config) {
    if (hasOwnProp(config, i2)) {
      prop = config[i2];
      if (isFunction(prop)) {
        this[i2] = prop;
      } else {
        this["_" + i2] = prop;
      }
    }
  }
  this._config = config;
  this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
}
function mergeConfigs(parentConfig, childConfig) {
  var res = extend({}, parentConfig), prop;
  for (prop in childConfig) {
    if (hasOwnProp(childConfig, prop)) {
      if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
        res[prop] = {};
        extend(res[prop], parentConfig[prop]);
        extend(res[prop], childConfig[prop]);
      } else if (childConfig[prop] != null) {
        res[prop] = childConfig[prop];
      } else {
        delete res[prop];
      }
    }
  }
  for (prop in parentConfig) {
    if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) {
      res[prop] = extend({}, res[prop]);
    }
  }
  return res;
}
function Locale(config) {
  if (config != null) {
    this.set(config);
  }
}
var keys;
if (Object.keys) {
  keys = Object.keys;
} else {
  keys = function(obj) {
    var i2, res = [];
    for (i2 in obj) {
      if (hasOwnProp(obj, i2)) {
        res.push(i2);
      }
    }
    return res;
  };
}
var defaultCalendar = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function calendar(key, mom, now2) {
  var output = this._calendar[key] || this._calendar["sameElse"];
  return isFunction(output) ? output.call(mom, now2) : output;
}
function zeroFill(number, targetLength, forceSign) {
  var absNumber = "" + Math.abs(number), zerosToFill = targetLength - absNumber.length, sign2 = number >= 0;
  return (sign2 ? forceSign ? "+" : "" : "-") + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
}
var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, formatFunctions = {}, formatTokenFunctions = {};
function addFormatToken(token2, padded, ordinal2, callback) {
  var func = callback;
  if (typeof callback === "string") {
    func = function() {
      return this[callback]();
    };
  }
  if (token2) {
    formatTokenFunctions[token2] = func;
  }
  if (padded) {
    formatTokenFunctions[padded[0]] = function() {
      return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
    };
  }
  if (ordinal2) {
    formatTokenFunctions[ordinal2] = function() {
      return this.localeData().ordinal(func.apply(this, arguments), token2);
    };
  }
}
function removeFormattingTokens(input) {
  if (input.match(/\[[\s\S]/)) {
    return input.replace(/^\[|\]$/g, "");
  }
  return input.replace(/\\/g, "");
}
function makeFormatFunction(format2) {
  var array = format2.match(formattingTokens), i2, length;
  for (i2 = 0, length = array.length; i2 < length; i2++) {
    if (formatTokenFunctions[array[i2]]) {
      array[i2] = formatTokenFunctions[array[i2]];
    } else {
      array[i2] = removeFormattingTokens(array[i2]);
    }
  }
  return function(mom) {
    var output = "", i3;
    for (i3 = 0; i3 < length; i3++) {
      output += isFunction(array[i3]) ? array[i3].call(mom, format2) : array[i3];
    }
    return output;
  };
}
function formatMoment(m2, format2) {
  if (!m2.isValid()) {
    return m2.localeData().invalidDate();
  }
  format2 = expandFormat(format2, m2.localeData());
  formatFunctions[format2] = formatFunctions[format2] || makeFormatFunction(format2);
  return formatFunctions[format2](m2);
}
function expandFormat(format2, locale2) {
  var i2 = 5;
  function replaceLongDateFormatTokens(input) {
    return locale2.longDateFormat(input) || input;
  }
  localFormattingTokens.lastIndex = 0;
  while (i2 >= 0 && localFormattingTokens.test(format2)) {
    format2 = format2.replace(localFormattingTokens, replaceLongDateFormatTokens);
    localFormattingTokens.lastIndex = 0;
    i2 -= 1;
  }
  return format2;
}
var defaultLongDateFormat = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function longDateFormat(key) {
  var format2 = this._longDateFormat[key], formatUpper = this._longDateFormat[key.toUpperCase()];
  if (format2 || !formatUpper) {
    return format2;
  }
  this._longDateFormat[key] = formatUpper.match(formattingTokens).map(function(tok) {
    if (tok === "MMMM" || tok === "MM" || tok === "DD" || tok === "dddd") {
      return tok.slice(1);
    }
    return tok;
  }).join("");
  return this._longDateFormat[key];
}
var defaultInvalidDate = "Invalid date";
function invalidDate() {
  return this._invalidDate;
}
var defaultOrdinal = "%d", defaultDayOfMonthOrdinalParse = /\d{1,2}/;
function ordinal(number) {
  return this._ordinal.replace("%d", number);
}
var defaultRelativeTime = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  w: "a week",
  ww: "%d weeks",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years"
};
function relativeTime(number, withoutSuffix, string, isFuture) {
  var output = this._relativeTime[string];
  return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
}
function pastFuture(diff2, output) {
  var format2 = this._relativeTime[diff2 > 0 ? "future" : "past"];
  return isFunction(format2) ? format2(output) : format2.replace(/%s/i, output);
}
var aliases = {};
function addUnitAlias(unit, shorthand) {
  var lowerCase = unit.toLowerCase();
  aliases[lowerCase] = aliases[lowerCase + "s"] = aliases[shorthand] = unit;
}
function normalizeUnits(units) {
  return typeof units === "string" ? aliases[units] || aliases[units.toLowerCase()] : void 0;
}
function normalizeObjectUnits(inputObject) {
  var normalizedInput = {}, normalizedProp, prop;
  for (prop in inputObject) {
    if (hasOwnProp(inputObject, prop)) {
      normalizedProp = normalizeUnits(prop);
      if (normalizedProp) {
        normalizedInput[normalizedProp] = inputObject[prop];
      }
    }
  }
  return normalizedInput;
}
var priorities = {};
function addUnitPriority(unit, priority) {
  priorities[unit] = priority;
}
function getPrioritizedUnits(unitsObj) {
  var units = [], u2;
  for (u2 in unitsObj) {
    if (hasOwnProp(unitsObj, u2)) {
      units.push({ unit: u2, priority: priorities[u2] });
    }
  }
  units.sort(function(a2, b2) {
    return a2.priority - b2.priority;
  });
  return units;
}
function isLeapYear(year) {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
function absFloor(number) {
  if (number < 0) {
    return Math.ceil(number) || 0;
  } else {
    return Math.floor(number);
  }
}
function toInt(argumentForCoercion) {
  var coercedNumber = +argumentForCoercion, value = 0;
  if (coercedNumber !== 0 && isFinite(coercedNumber)) {
    value = absFloor(coercedNumber);
  }
  return value;
}
function makeGetSet(unit, keepTime) {
  return function(value) {
    if (value != null) {
      set$1(this, unit, value);
      hooks.updateOffset(this, keepTime);
      return this;
    } else {
      return get(this, unit);
    }
  };
}
function get(mom, unit) {
  return mom.isValid() ? mom._d["get" + (mom._isUTC ? "UTC" : "") + unit]() : NaN;
}
function set$1(mom, unit, value) {
  if (mom.isValid() && !isNaN(value)) {
    if (unit === "FullYear" && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
      value = toInt(value);
      mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](value, mom.month(), daysInMonth(value, mom.month()));
    } else {
      mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](value);
    }
  }
}
function stringGet(units) {
  units = normalizeUnits(units);
  if (isFunction(this[units])) {
    return this[units]();
  }
  return this;
}
function stringSet(units, value) {
  if (typeof units === "object") {
    units = normalizeObjectUnits(units);
    var prioritized = getPrioritizedUnits(units), i2, prioritizedLen = prioritized.length;
    for (i2 = 0; i2 < prioritizedLen; i2++) {
      this[prioritized[i2].unit](units[prioritized[i2].unit]);
    }
  } else {
    units = normalizeUnits(units);
    if (isFunction(this[units])) {
      return this[units](value);
    }
  }
  return this;
}
var match1 = /\d/, match2 = /\d\d/, match3 = /\d{3}/, match4 = /\d{4}/, match6 = /[+-]?\d{6}/, match1to2 = /\d\d?/, match3to4 = /\d\d\d\d?/, match5to6 = /\d\d\d\d\d\d?/, match1to3 = /\d{1,3}/, match1to4 = /\d{1,4}/, match1to6 = /[+-]?\d{1,6}/, matchUnsigned = /\d+/, matchSigned = /[+-]?\d+/, matchOffset = /Z|[+-]\d\d:?\d\d/gi, matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, regexes;
regexes = {};
function addRegexToken(token2, regex, strictRegex) {
  regexes[token2] = isFunction(regex) ? regex : function(isStrict, localeData2) {
    return isStrict && strictRegex ? strictRegex : regex;
  };
}
function getParseRegexForToken(token2, config) {
  if (!hasOwnProp(regexes, token2)) {
    return new RegExp(unescapeFormat(token2));
  }
  return regexes[token2](config._strict, config._locale);
}
function unescapeFormat(s2) {
  return regexEscape(s2.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(matched, p1, p2, p3, p4) {
    return p1 || p2 || p3 || p4;
  }));
}
function regexEscape(s2) {
  return s2.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
var tokens = {};
function addParseToken(token2, callback) {
  var i2, func = callback, tokenLen;
  if (typeof token2 === "string") {
    token2 = [token2];
  }
  if (isNumber(callback)) {
    func = function(input, array) {
      array[callback] = toInt(input);
    };
  }
  tokenLen = token2.length;
  for (i2 = 0; i2 < tokenLen; i2++) {
    tokens[token2[i2]] = func;
  }
}
function addWeekParseToken(token2, callback) {
  addParseToken(token2, function(input, array, config, token3) {
    config._w = config._w || {};
    callback(input, config._w, config, token3);
  });
}
function addTimeToArrayFromToken(token2, input, config) {
  if (input != null && hasOwnProp(tokens, token2)) {
    tokens[token2](input, config._a, config, token2);
  }
}
var YEAR = 0, MONTH = 1, DATE = 2, HOUR = 3, MINUTE = 4, SECOND = 5, MILLISECOND = 6, WEEK = 7, WEEKDAY = 8;
function mod(n2, x2) {
  return (n2 % x2 + x2) % x2;
}
var indexOf;
if (Array.prototype.indexOf) {
  indexOf = Array.prototype.indexOf;
} else {
  indexOf = function(o2) {
    var i2;
    for (i2 = 0; i2 < this.length; ++i2) {
      if (this[i2] === o2) {
        return i2;
      }
    }
    return -1;
  };
}
function daysInMonth(year, month) {
  if (isNaN(year) || isNaN(month)) {
    return NaN;
  }
  var modMonth = mod(month, 12);
  year += (month - modMonth) / 12;
  return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
}
addFormatToken("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
addFormatToken("MMM", 0, 0, function(format2) {
  return this.localeData().monthsShort(this, format2);
});
addFormatToken("MMMM", 0, 0, function(format2) {
  return this.localeData().months(this, format2);
});
addUnitAlias("month", "M");
addUnitPriority("month", 8);
addRegexToken("M", match1to2);
addRegexToken("MM", match1to2, match2);
addRegexToken("MMM", function(isStrict, locale2) {
  return locale2.monthsShortRegex(isStrict);
});
addRegexToken("MMMM", function(isStrict, locale2) {
  return locale2.monthsRegex(isStrict);
});
addParseToken(["M", "MM"], function(input, array) {
  array[MONTH] = toInt(input) - 1;
});
addParseToken(["MMM", "MMMM"], function(input, array, config, token2) {
  var month = config._locale.monthsParse(input, token2, config._strict);
  if (month != null) {
    array[MONTH] = month;
  } else {
    getParsingFlags(config).invalidMonth = input;
  }
});
var defaultLocaleMonths = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), defaultLocaleMonthsShort = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, defaultMonthsShortRegex = matchWord, defaultMonthsRegex = matchWord;
function localeMonths(m2, format2) {
  if (!m2) {
    return isArray(this._months) ? this._months : this._months["standalone"];
  }
  return isArray(this._months) ? this._months[m2.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format2) ? "format" : "standalone"][m2.month()];
}
function localeMonthsShort(m2, format2) {
  if (!m2) {
    return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort["standalone"];
  }
  return isArray(this._monthsShort) ? this._monthsShort[m2.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format2) ? "format" : "standalone"][m2.month()];
}
function handleStrictParse(monthName, format2, strict) {
  var i2, ii2, mom, llc = monthName.toLocaleLowerCase();
  if (!this._monthsParse) {
    this._monthsParse = [];
    this._longMonthsParse = [];
    this._shortMonthsParse = [];
    for (i2 = 0; i2 < 12; ++i2) {
      mom = createUTC([2e3, i2]);
      this._shortMonthsParse[i2] = this.monthsShort(mom, "").toLocaleLowerCase();
      this._longMonthsParse[i2] = this.months(mom, "").toLocaleLowerCase();
    }
  }
  if (strict) {
    if (format2 === "MMM") {
      ii2 = indexOf.call(this._shortMonthsParse, llc);
      return ii2 !== -1 ? ii2 : null;
    } else {
      ii2 = indexOf.call(this._longMonthsParse, llc);
      return ii2 !== -1 ? ii2 : null;
    }
  } else {
    if (format2 === "MMM") {
      ii2 = indexOf.call(this._shortMonthsParse, llc);
      if (ii2 !== -1) {
        return ii2;
      }
      ii2 = indexOf.call(this._longMonthsParse, llc);
      return ii2 !== -1 ? ii2 : null;
    } else {
      ii2 = indexOf.call(this._longMonthsParse, llc);
      if (ii2 !== -1) {
        return ii2;
      }
      ii2 = indexOf.call(this._shortMonthsParse, llc);
      return ii2 !== -1 ? ii2 : null;
    }
  }
}
function localeMonthsParse(monthName, format2, strict) {
  var i2, mom, regex;
  if (this._monthsParseExact) {
    return handleStrictParse.call(this, monthName, format2, strict);
  }
  if (!this._monthsParse) {
    this._monthsParse = [];
    this._longMonthsParse = [];
    this._shortMonthsParse = [];
  }
  for (i2 = 0; i2 < 12; i2++) {
    mom = createUTC([2e3, i2]);
    if (strict && !this._longMonthsParse[i2]) {
      this._longMonthsParse[i2] = new RegExp("^" + this.months(mom, "").replace(".", "") + "$", "i");
      this._shortMonthsParse[i2] = new RegExp("^" + this.monthsShort(mom, "").replace(".", "") + "$", "i");
    }
    if (!strict && !this._monthsParse[i2]) {
      regex = "^" + this.months(mom, "") + "|^" + this.monthsShort(mom, "");
      this._monthsParse[i2] = new RegExp(regex.replace(".", ""), "i");
    }
    if (strict && format2 === "MMMM" && this._longMonthsParse[i2].test(monthName)) {
      return i2;
    } else if (strict && format2 === "MMM" && this._shortMonthsParse[i2].test(monthName)) {
      return i2;
    } else if (!strict && this._monthsParse[i2].test(monthName)) {
      return i2;
    }
  }
}
function setMonth(mom, value) {
  var dayOfMonth;
  if (!mom.isValid()) {
    return mom;
  }
  if (typeof value === "string") {
    if (/^\d+$/.test(value)) {
      value = toInt(value);
    } else {
      value = mom.localeData().monthsParse(value);
      if (!isNumber(value)) {
        return mom;
      }
    }
  }
  dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
  mom._d["set" + (mom._isUTC ? "UTC" : "") + "Month"](value, dayOfMonth);
  return mom;
}
function getSetMonth(value) {
  if (value != null) {
    setMonth(this, value);
    hooks.updateOffset(this, true);
    return this;
  } else {
    return get(this, "Month");
  }
}
function getDaysInMonth() {
  return daysInMonth(this.year(), this.month());
}
function monthsShortRegex(isStrict) {
  if (this._monthsParseExact) {
    if (!hasOwnProp(this, "_monthsRegex")) {
      computeMonthsParse.call(this);
    }
    if (isStrict) {
      return this._monthsShortStrictRegex;
    } else {
      return this._monthsShortRegex;
    }
  } else {
    if (!hasOwnProp(this, "_monthsShortRegex")) {
      this._monthsShortRegex = defaultMonthsShortRegex;
    }
    return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
  }
}
function monthsRegex(isStrict) {
  if (this._monthsParseExact) {
    if (!hasOwnProp(this, "_monthsRegex")) {
      computeMonthsParse.call(this);
    }
    if (isStrict) {
      return this._monthsStrictRegex;
    } else {
      return this._monthsRegex;
    }
  } else {
    if (!hasOwnProp(this, "_monthsRegex")) {
      this._monthsRegex = defaultMonthsRegex;
    }
    return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
  }
}
function computeMonthsParse() {
  function cmpLenRev(a2, b2) {
    return b2.length - a2.length;
  }
  var shortPieces = [], longPieces = [], mixedPieces = [], i2, mom;
  for (i2 = 0; i2 < 12; i2++) {
    mom = createUTC([2e3, i2]);
    shortPieces.push(this.monthsShort(mom, ""));
    longPieces.push(this.months(mom, ""));
    mixedPieces.push(this.months(mom, ""));
    mixedPieces.push(this.monthsShort(mom, ""));
  }
  shortPieces.sort(cmpLenRev);
  longPieces.sort(cmpLenRev);
  mixedPieces.sort(cmpLenRev);
  for (i2 = 0; i2 < 12; i2++) {
    shortPieces[i2] = regexEscape(shortPieces[i2]);
    longPieces[i2] = regexEscape(longPieces[i2]);
  }
  for (i2 = 0; i2 < 24; i2++) {
    mixedPieces[i2] = regexEscape(mixedPieces[i2]);
  }
  this._monthsRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
  this._monthsShortRegex = this._monthsRegex;
  this._monthsStrictRegex = new RegExp("^(" + longPieces.join("|") + ")", "i");
  this._monthsShortStrictRegex = new RegExp("^(" + shortPieces.join("|") + ")", "i");
}
addFormatToken("Y", 0, 0, function() {
  var y2 = this.year();
  return y2 <= 9999 ? zeroFill(y2, 4) : "+" + y2;
});
addFormatToken(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
addFormatToken(0, ["YYYY", 4], 0, "year");
addFormatToken(0, ["YYYYY", 5], 0, "year");
addFormatToken(0, ["YYYYYY", 6, true], 0, "year");
addUnitAlias("year", "y");
addUnitPriority("year", 1);
addRegexToken("Y", matchSigned);
addRegexToken("YY", match1to2, match2);
addRegexToken("YYYY", match1to4, match4);
addRegexToken("YYYYY", match1to6, match6);
addRegexToken("YYYYYY", match1to6, match6);
addParseToken(["YYYYY", "YYYYYY"], YEAR);
addParseToken("YYYY", function(input, array) {
  array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
});
addParseToken("YY", function(input, array) {
  array[YEAR] = hooks.parseTwoDigitYear(input);
});
addParseToken("Y", function(input, array) {
  array[YEAR] = parseInt(input, 10);
});
function daysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
}
hooks.parseTwoDigitYear = function(input) {
  return toInt(input) + (toInt(input) > 68 ? 1900 : 2e3);
};
var getSetYear = makeGetSet("FullYear", true);
function getIsLeapYear() {
  return isLeapYear(this.year());
}
function createDate(y2, m2, d2, h2, M2, s2, ms) {
  var date;
  if (y2 < 100 && y2 >= 0) {
    date = new Date(y2 + 400, m2, d2, h2, M2, s2, ms);
    if (isFinite(date.getFullYear())) {
      date.setFullYear(y2);
    }
  } else {
    date = new Date(y2, m2, d2, h2, M2, s2, ms);
  }
  return date;
}
function createUTCDate(y2) {
  var date, args;
  if (y2 < 100 && y2 >= 0) {
    args = Array.prototype.slice.call(arguments);
    args[0] = y2 + 400;
    date = new Date(Date.UTC.apply(null, args));
    if (isFinite(date.getUTCFullYear())) {
      date.setUTCFullYear(y2);
    }
  } else {
    date = new Date(Date.UTC.apply(null, arguments));
  }
  return date;
}
function firstWeekOffset(year, dow, doy) {
  var fwd = 7 + dow - doy, fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
  return -fwdlw + fwd - 1;
}
function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
  var localWeekday = (7 + weekday - dow) % 7, weekOffset = firstWeekOffset(year, dow, doy), dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset, resYear, resDayOfYear;
  if (dayOfYear <= 0) {
    resYear = year - 1;
    resDayOfYear = daysInYear(resYear) + dayOfYear;
  } else if (dayOfYear > daysInYear(year)) {
    resYear = year + 1;
    resDayOfYear = dayOfYear - daysInYear(year);
  } else {
    resYear = year;
    resDayOfYear = dayOfYear;
  }
  return {
    year: resYear,
    dayOfYear: resDayOfYear
  };
}
function weekOfYear(mom, dow, doy) {
  var weekOffset = firstWeekOffset(mom.year(), dow, doy), week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1, resWeek, resYear;
  if (week < 1) {
    resYear = mom.year() - 1;
    resWeek = week + weeksInYear(resYear, dow, doy);
  } else if (week > weeksInYear(mom.year(), dow, doy)) {
    resWeek = week - weeksInYear(mom.year(), dow, doy);
    resYear = mom.year() + 1;
  } else {
    resYear = mom.year();
    resWeek = week;
  }
  return {
    week: resWeek,
    year: resYear
  };
}
function weeksInYear(year, dow, doy) {
  var weekOffset = firstWeekOffset(year, dow, doy), weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
  return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
}
addFormatToken("w", ["ww", 2], "wo", "week");
addFormatToken("W", ["WW", 2], "Wo", "isoWeek");
addUnitAlias("week", "w");
addUnitAlias("isoWeek", "W");
addUnitPriority("week", 5);
addUnitPriority("isoWeek", 5);
addRegexToken("w", match1to2);
addRegexToken("ww", match1to2, match2);
addRegexToken("W", match1to2);
addRegexToken("WW", match1to2, match2);
addWeekParseToken(["w", "ww", "W", "WW"], function(input, week, config, token2) {
  week[token2.substr(0, 1)] = toInt(input);
});
function localeWeek(mom) {
  return weekOfYear(mom, this._week.dow, this._week.doy).week;
}
var defaultLocaleWeek = {
  dow: 0,
  doy: 6
};
function localeFirstDayOfWeek() {
  return this._week.dow;
}
function localeFirstDayOfYear() {
  return this._week.doy;
}
function getSetWeek(input) {
  var week = this.localeData().week(this);
  return input == null ? week : this.add((input - week) * 7, "d");
}
function getSetISOWeek(input) {
  var week = weekOfYear(this, 1, 4).week;
  return input == null ? week : this.add((input - week) * 7, "d");
}
addFormatToken("d", 0, "do", "day");
addFormatToken("dd", 0, 0, function(format2) {
  return this.localeData().weekdaysMin(this, format2);
});
addFormatToken("ddd", 0, 0, function(format2) {
  return this.localeData().weekdaysShort(this, format2);
});
addFormatToken("dddd", 0, 0, function(format2) {
  return this.localeData().weekdays(this, format2);
});
addFormatToken("e", 0, 0, "weekday");
addFormatToken("E", 0, 0, "isoWeekday");
addUnitAlias("day", "d");
addUnitAlias("weekday", "e");
addUnitAlias("isoWeekday", "E");
addUnitPriority("day", 11);
addUnitPriority("weekday", 11);
addUnitPriority("isoWeekday", 11);
addRegexToken("d", match1to2);
addRegexToken("e", match1to2);
addRegexToken("E", match1to2);
addRegexToken("dd", function(isStrict, locale2) {
  return locale2.weekdaysMinRegex(isStrict);
});
addRegexToken("ddd", function(isStrict, locale2) {
  return locale2.weekdaysShortRegex(isStrict);
});
addRegexToken("dddd", function(isStrict, locale2) {
  return locale2.weekdaysRegex(isStrict);
});
addWeekParseToken(["dd", "ddd", "dddd"], function(input, week, config, token2) {
  var weekday = config._locale.weekdaysParse(input, token2, config._strict);
  if (weekday != null) {
    week.d = weekday;
  } else {
    getParsingFlags(config).invalidWeekday = input;
  }
});
addWeekParseToken(["d", "e", "E"], function(input, week, config, token2) {
  week[token2] = toInt(input);
});
function parseWeekday(input, locale2) {
  if (typeof input !== "string") {
    return input;
  }
  if (!isNaN(input)) {
    return parseInt(input, 10);
  }
  input = locale2.weekdaysParse(input);
  if (typeof input === "number") {
    return input;
  }
  return null;
}
function parseIsoWeekday(input, locale2) {
  if (typeof input === "string") {
    return locale2.weekdaysParse(input) % 7 || 7;
  }
  return isNaN(input) ? null : input;
}
function shiftWeekdays(ws, n2) {
  return ws.slice(n2, 7).concat(ws.slice(0, n2));
}
var defaultLocaleWeekdays = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), defaultLocaleWeekdaysShort = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), defaultLocaleWeekdaysMin = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), defaultWeekdaysRegex = matchWord, defaultWeekdaysShortRegex = matchWord, defaultWeekdaysMinRegex = matchWord;
function localeWeekdays(m2, format2) {
  var weekdays = isArray(this._weekdays) ? this._weekdays : this._weekdays[m2 && m2 !== true && this._weekdays.isFormat.test(format2) ? "format" : "standalone"];
  return m2 === true ? shiftWeekdays(weekdays, this._week.dow) : m2 ? weekdays[m2.day()] : weekdays;
}
function localeWeekdaysShort(m2) {
  return m2 === true ? shiftWeekdays(this._weekdaysShort, this._week.dow) : m2 ? this._weekdaysShort[m2.day()] : this._weekdaysShort;
}
function localeWeekdaysMin(m2) {
  return m2 === true ? shiftWeekdays(this._weekdaysMin, this._week.dow) : m2 ? this._weekdaysMin[m2.day()] : this._weekdaysMin;
}
function handleStrictParse$1(weekdayName, format2, strict) {
  var i2, ii2, mom, llc = weekdayName.toLocaleLowerCase();
  if (!this._weekdaysParse) {
    this._weekdaysParse = [];
    this._shortWeekdaysParse = [];
    this._minWeekdaysParse = [];
    for (i2 = 0; i2 < 7; ++i2) {
      mom = createUTC([2e3, 1]).day(i2);
      this._minWeekdaysParse[i2] = this.weekdaysMin(mom, "").toLocaleLowerCase();
      this._shortWeekdaysParse[i2] = this.weekdaysShort(mom, "").toLocaleLowerCase();
      this._weekdaysParse[i2] = this.weekdays(mom, "").toLocaleLowerCase();
    }
  }
  if (strict) {
    if (format2 === "dddd") {
      ii2 = indexOf.call(this._weekdaysParse, llc);
      return ii2 !== -1 ? ii2 : null;
    } else if (format2 === "ddd") {
      ii2 = indexOf.call(this._shortWeekdaysParse, llc);
      return ii2 !== -1 ? ii2 : null;
    } else {
      ii2 = indexOf.call(this._minWeekdaysParse, llc);
      return ii2 !== -1 ? ii2 : null;
    }
  } else {
    if (format2 === "dddd") {
      ii2 = indexOf.call(this._weekdaysParse, llc);
      if (ii2 !== -1) {
        return ii2;
      }
      ii2 = indexOf.call(this._shortWeekdaysParse, llc);
      if (ii2 !== -1) {
        return ii2;
      }
      ii2 = indexOf.call(this._minWeekdaysParse, llc);
      return ii2 !== -1 ? ii2 : null;
    } else if (format2 === "ddd") {
      ii2 = indexOf.call(this._shortWeekdaysParse, llc);
      if (ii2 !== -1) {
        return ii2;
      }
      ii2 = indexOf.call(this._weekdaysParse, llc);
      if (ii2 !== -1) {
        return ii2;
      }
      ii2 = indexOf.call(this._minWeekdaysParse, llc);
      return ii2 !== -1 ? ii2 : null;
    } else {
      ii2 = indexOf.call(this._minWeekdaysParse, llc);
      if (ii2 !== -1) {
        return ii2;
      }
      ii2 = indexOf.call(this._weekdaysParse, llc);
      if (ii2 !== -1) {
        return ii2;
      }
      ii2 = indexOf.call(this._shortWeekdaysParse, llc);
      return ii2 !== -1 ? ii2 : null;
    }
  }
}
function localeWeekdaysParse(weekdayName, format2, strict) {
  var i2, mom, regex;
  if (this._weekdaysParseExact) {
    return handleStrictParse$1.call(this, weekdayName, format2, strict);
  }
  if (!this._weekdaysParse) {
    this._weekdaysParse = [];
    this._minWeekdaysParse = [];
    this._shortWeekdaysParse = [];
    this._fullWeekdaysParse = [];
  }
  for (i2 = 0; i2 < 7; i2++) {
    mom = createUTC([2e3, 1]).day(i2);
    if (strict && !this._fullWeekdaysParse[i2]) {
      this._fullWeekdaysParse[i2] = new RegExp("^" + this.weekdays(mom, "").replace(".", "\\.?") + "$", "i");
      this._shortWeekdaysParse[i2] = new RegExp("^" + this.weekdaysShort(mom, "").replace(".", "\\.?") + "$", "i");
      this._minWeekdaysParse[i2] = new RegExp("^" + this.weekdaysMin(mom, "").replace(".", "\\.?") + "$", "i");
    }
    if (!this._weekdaysParse[i2]) {
      regex = "^" + this.weekdays(mom, "") + "|^" + this.weekdaysShort(mom, "") + "|^" + this.weekdaysMin(mom, "");
      this._weekdaysParse[i2] = new RegExp(regex.replace(".", ""), "i");
    }
    if (strict && format2 === "dddd" && this._fullWeekdaysParse[i2].test(weekdayName)) {
      return i2;
    } else if (strict && format2 === "ddd" && this._shortWeekdaysParse[i2].test(weekdayName)) {
      return i2;
    } else if (strict && format2 === "dd" && this._minWeekdaysParse[i2].test(weekdayName)) {
      return i2;
    } else if (!strict && this._weekdaysParse[i2].test(weekdayName)) {
      return i2;
    }
  }
}
function getSetDayOfWeek(input) {
  if (!this.isValid()) {
    return input != null ? this : NaN;
  }
  var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  if (input != null) {
    input = parseWeekday(input, this.localeData());
    return this.add(input - day, "d");
  } else {
    return day;
  }
}
function getSetLocaleDayOfWeek(input) {
  if (!this.isValid()) {
    return input != null ? this : NaN;
  }
  var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return input == null ? weekday : this.add(input - weekday, "d");
}
function getSetISODayOfWeek(input) {
  if (!this.isValid()) {
    return input != null ? this : NaN;
  }
  if (input != null) {
    var weekday = parseIsoWeekday(input, this.localeData());
    return this.day(this.day() % 7 ? weekday : weekday - 7);
  } else {
    return this.day() || 7;
  }
}
function weekdaysRegex(isStrict) {
  if (this._weekdaysParseExact) {
    if (!hasOwnProp(this, "_weekdaysRegex")) {
      computeWeekdaysParse.call(this);
    }
    if (isStrict) {
      return this._weekdaysStrictRegex;
    } else {
      return this._weekdaysRegex;
    }
  } else {
    if (!hasOwnProp(this, "_weekdaysRegex")) {
      this._weekdaysRegex = defaultWeekdaysRegex;
    }
    return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
  }
}
function weekdaysShortRegex(isStrict) {
  if (this._weekdaysParseExact) {
    if (!hasOwnProp(this, "_weekdaysRegex")) {
      computeWeekdaysParse.call(this);
    }
    if (isStrict) {
      return this._weekdaysShortStrictRegex;
    } else {
      return this._weekdaysShortRegex;
    }
  } else {
    if (!hasOwnProp(this, "_weekdaysShortRegex")) {
      this._weekdaysShortRegex = defaultWeekdaysShortRegex;
    }
    return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
  }
}
function weekdaysMinRegex(isStrict) {
  if (this._weekdaysParseExact) {
    if (!hasOwnProp(this, "_weekdaysRegex")) {
      computeWeekdaysParse.call(this);
    }
    if (isStrict) {
      return this._weekdaysMinStrictRegex;
    } else {
      return this._weekdaysMinRegex;
    }
  } else {
    if (!hasOwnProp(this, "_weekdaysMinRegex")) {
      this._weekdaysMinRegex = defaultWeekdaysMinRegex;
    }
    return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
  }
}
function computeWeekdaysParse() {
  function cmpLenRev(a2, b2) {
    return b2.length - a2.length;
  }
  var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [], i2, mom, minp, shortp, longp;
  for (i2 = 0; i2 < 7; i2++) {
    mom = createUTC([2e3, 1]).day(i2);
    minp = regexEscape(this.weekdaysMin(mom, ""));
    shortp = regexEscape(this.weekdaysShort(mom, ""));
    longp = regexEscape(this.weekdays(mom, ""));
    minPieces.push(minp);
    shortPieces.push(shortp);
    longPieces.push(longp);
    mixedPieces.push(minp);
    mixedPieces.push(shortp);
    mixedPieces.push(longp);
  }
  minPieces.sort(cmpLenRev);
  shortPieces.sort(cmpLenRev);
  longPieces.sort(cmpLenRev);
  mixedPieces.sort(cmpLenRev);
  this._weekdaysRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
  this._weekdaysShortRegex = this._weekdaysRegex;
  this._weekdaysMinRegex = this._weekdaysRegex;
  this._weekdaysStrictRegex = new RegExp("^(" + longPieces.join("|") + ")", "i");
  this._weekdaysShortStrictRegex = new RegExp("^(" + shortPieces.join("|") + ")", "i");
  this._weekdaysMinStrictRegex = new RegExp("^(" + minPieces.join("|") + ")", "i");
}
function hFormat() {
  return this.hours() % 12 || 12;
}
function kFormat() {
  return this.hours() || 24;
}
addFormatToken("H", ["HH", 2], 0, "hour");
addFormatToken("h", ["hh", 2], 0, hFormat);
addFormatToken("k", ["kk", 2], 0, kFormat);
addFormatToken("hmm", 0, 0, function() {
  return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2);
});
addFormatToken("hmmss", 0, 0, function() {
  return "" + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
});
addFormatToken("Hmm", 0, 0, function() {
  return "" + this.hours() + zeroFill(this.minutes(), 2);
});
addFormatToken("Hmmss", 0, 0, function() {
  return "" + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
});
function meridiem(token2, lowercase) {
  addFormatToken(token2, 0, 0, function() {
    return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
  });
}
meridiem("a", true);
meridiem("A", false);
addUnitAlias("hour", "h");
addUnitPriority("hour", 13);
function matchMeridiem(isStrict, locale2) {
  return locale2._meridiemParse;
}
addRegexToken("a", matchMeridiem);
addRegexToken("A", matchMeridiem);
addRegexToken("H", match1to2);
addRegexToken("h", match1to2);
addRegexToken("k", match1to2);
addRegexToken("HH", match1to2, match2);
addRegexToken("hh", match1to2, match2);
addRegexToken("kk", match1to2, match2);
addRegexToken("hmm", match3to4);
addRegexToken("hmmss", match5to6);
addRegexToken("Hmm", match3to4);
addRegexToken("Hmmss", match5to6);
addParseToken(["H", "HH"], HOUR);
addParseToken(["k", "kk"], function(input, array, config) {
  var kInput = toInt(input);
  array[HOUR] = kInput === 24 ? 0 : kInput;
});
addParseToken(["a", "A"], function(input, array, config) {
  config._isPm = config._locale.isPM(input);
  config._meridiem = input;
});
addParseToken(["h", "hh"], function(input, array, config) {
  array[HOUR] = toInt(input);
  getParsingFlags(config).bigHour = true;
});
addParseToken("hmm", function(input, array, config) {
  var pos = input.length - 2;
  array[HOUR] = toInt(input.substr(0, pos));
  array[MINUTE] = toInt(input.substr(pos));
  getParsingFlags(config).bigHour = true;
});
addParseToken("hmmss", function(input, array, config) {
  var pos1 = input.length - 4, pos2 = input.length - 2;
  array[HOUR] = toInt(input.substr(0, pos1));
  array[MINUTE] = toInt(input.substr(pos1, 2));
  array[SECOND] = toInt(input.substr(pos2));
  getParsingFlags(config).bigHour = true;
});
addParseToken("Hmm", function(input, array, config) {
  var pos = input.length - 2;
  array[HOUR] = toInt(input.substr(0, pos));
  array[MINUTE] = toInt(input.substr(pos));
});
addParseToken("Hmmss", function(input, array, config) {
  var pos1 = input.length - 4, pos2 = input.length - 2;
  array[HOUR] = toInt(input.substr(0, pos1));
  array[MINUTE] = toInt(input.substr(pos1, 2));
  array[SECOND] = toInt(input.substr(pos2));
});
function localeIsPM(input) {
  return (input + "").toLowerCase().charAt(0) === "p";
}
var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i, getSetHour = makeGetSet("Hours", true);
function localeMeridiem(hours2, minutes2, isLower) {
  if (hours2 > 11) {
    return isLower ? "pm" : "PM";
  } else {
    return isLower ? "am" : "AM";
  }
}
var baseConfig = {
  calendar: defaultCalendar,
  longDateFormat: defaultLongDateFormat,
  invalidDate: defaultInvalidDate,
  ordinal: defaultOrdinal,
  dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
  relativeTime: defaultRelativeTime,
  months: defaultLocaleMonths,
  monthsShort: defaultLocaleMonthsShort,
  week: defaultLocaleWeek,
  weekdays: defaultLocaleWeekdays,
  weekdaysMin: defaultLocaleWeekdaysMin,
  weekdaysShort: defaultLocaleWeekdaysShort,
  meridiemParse: defaultLocaleMeridiemParse
};
var locales = {}, localeFamilies = {}, globalLocale;
function commonPrefix(arr1, arr2) {
  var i2, minl = Math.min(arr1.length, arr2.length);
  for (i2 = 0; i2 < minl; i2 += 1) {
    if (arr1[i2] !== arr2[i2]) {
      return i2;
    }
  }
  return minl;
}
function normalizeLocale(key) {
  return key ? key.toLowerCase().replace("_", "-") : key;
}
function chooseLocale(names) {
  var i2 = 0, j2, next, locale2, split;
  while (i2 < names.length) {
    split = normalizeLocale(names[i2]).split("-");
    j2 = split.length;
    next = normalizeLocale(names[i2 + 1]);
    next = next ? next.split("-") : null;
    while (j2 > 0) {
      locale2 = loadLocale(split.slice(0, j2).join("-"));
      if (locale2) {
        return locale2;
      }
      if (next && next.length >= j2 && commonPrefix(split, next) >= j2 - 1) {
        break;
      }
      j2--;
    }
    i2++;
  }
  return globalLocale;
}
function isLocaleNameSane(name) {
  return name.match("^[^/\\\\]*$") != null;
}
function loadLocale(name) {
  var oldLocale = null, aliasedRequire;
  if (locales[name] === void 0 && typeof module !== "undefined" && module && module.exports && isLocaleNameSane(name)) {
    try {
      oldLocale = globalLocale._abbr;
      aliasedRequire = require;
      aliasedRequire("./locale/" + name);
      getSetGlobalLocale(oldLocale);
    } catch (e2) {
      locales[name] = null;
    }
  }
  return locales[name];
}
function getSetGlobalLocale(key, values) {
  var data;
  if (key) {
    if (isUndefined(values)) {
      data = getLocale(key);
    } else {
      data = defineLocale(key, values);
    }
    if (data) {
      globalLocale = data;
    } else {
      if (typeof console !== "undefined" && console.warn) {
        console.warn("Locale " + key + " not found. Did you forget to load it?");
      }
    }
  }
  return globalLocale._abbr;
}
function defineLocale(name, config) {
  if (config !== null) {
    var locale2, parentConfig = baseConfig;
    config.abbr = name;
    if (locales[name] != null) {
      deprecateSimple("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.");
      parentConfig = locales[name]._config;
    } else if (config.parentLocale != null) {
      if (locales[config.parentLocale] != null) {
        parentConfig = locales[config.parentLocale]._config;
      } else {
        locale2 = loadLocale(config.parentLocale);
        if (locale2 != null) {
          parentConfig = locale2._config;
        } else {
          if (!localeFamilies[config.parentLocale]) {
            localeFamilies[config.parentLocale] = [];
          }
          localeFamilies[config.parentLocale].push({
            name,
            config
          });
          return null;
        }
      }
    }
    locales[name] = new Locale(mergeConfigs(parentConfig, config));
    if (localeFamilies[name]) {
      localeFamilies[name].forEach(function(x2) {
        defineLocale(x2.name, x2.config);
      });
    }
    getSetGlobalLocale(name);
    return locales[name];
  } else {
    delete locales[name];
    return null;
  }
}
function updateLocale(name, config) {
  if (config != null) {
    var locale2, tmpLocale, parentConfig = baseConfig;
    if (locales[name] != null && locales[name].parentLocale != null) {
      locales[name].set(mergeConfigs(locales[name]._config, config));
    } else {
      tmpLocale = loadLocale(name);
      if (tmpLocale != null) {
        parentConfig = tmpLocale._config;
      }
      config = mergeConfigs(parentConfig, config);
      if (tmpLocale == null) {
        config.abbr = name;
      }
      locale2 = new Locale(config);
      locale2.parentLocale = locales[name];
      locales[name] = locale2;
    }
    getSetGlobalLocale(name);
  } else {
    if (locales[name] != null) {
      if (locales[name].parentLocale != null) {
        locales[name] = locales[name].parentLocale;
        if (name === getSetGlobalLocale()) {
          getSetGlobalLocale(name);
        }
      } else if (locales[name] != null) {
        delete locales[name];
      }
    }
  }
  return locales[name];
}
function getLocale(key) {
  var locale2;
  if (key && key._locale && key._locale._abbr) {
    key = key._locale._abbr;
  }
  if (!key) {
    return globalLocale;
  }
  if (!isArray(key)) {
    locale2 = loadLocale(key);
    if (locale2) {
      return locale2;
    }
    key = [key];
  }
  return chooseLocale(key);
}
function listLocales() {
  return keys(locales);
}
function checkOverflow(m2) {
  var overflow, a2 = m2._a;
  if (a2 && getParsingFlags(m2).overflow === -2) {
    overflow = a2[MONTH] < 0 || a2[MONTH] > 11 ? MONTH : a2[DATE] < 1 || a2[DATE] > daysInMonth(a2[YEAR], a2[MONTH]) ? DATE : a2[HOUR] < 0 || a2[HOUR] > 24 || a2[HOUR] === 24 && (a2[MINUTE] !== 0 || a2[SECOND] !== 0 || a2[MILLISECOND] !== 0) ? HOUR : a2[MINUTE] < 0 || a2[MINUTE] > 59 ? MINUTE : a2[SECOND] < 0 || a2[SECOND] > 59 ? SECOND : a2[MILLISECOND] < 0 || a2[MILLISECOND] > 999 ? MILLISECOND : -1;
    if (getParsingFlags(m2)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
      overflow = DATE;
    }
    if (getParsingFlags(m2)._overflowWeeks && overflow === -1) {
      overflow = WEEK;
    }
    if (getParsingFlags(m2)._overflowWeekday && overflow === -1) {
      overflow = WEEKDAY;
    }
    getParsingFlags(m2).overflow = overflow;
  }
  return m2;
}
var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, tzRegex = /Z|[+-]\d\d(?::?\d\d)?/, isoDates = [
  ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
  ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
  ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
  ["GGGG-[W]WW", /\d{4}-W\d\d/, false],
  ["YYYY-DDD", /\d{4}-\d{3}/],
  ["YYYY-MM", /\d{4}-\d\d/, false],
  ["YYYYYYMMDD", /[+-]\d{10}/],
  ["YYYYMMDD", /\d{8}/],
  ["GGGG[W]WWE", /\d{4}W\d{3}/],
  ["GGGG[W]WW", /\d{4}W\d{2}/, false],
  ["YYYYDDD", /\d{7}/],
  ["YYYYMM", /\d{6}/, false],
  ["YYYY", /\d{4}/, false]
], isoTimes = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], aspNetJsonRegex = /^\/?Date\((-?\d+)/i, rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, obsOffsets = {
  UT: 0,
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function configFromISO(config) {
  var i2, l2, string = config._i, match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string), allowTime, dateFormat, timeFormat, tzFormat, isoDatesLen = isoDates.length, isoTimesLen = isoTimes.length;
  if (match) {
    getParsingFlags(config).iso = true;
    for (i2 = 0, l2 = isoDatesLen; i2 < l2; i2++) {
      if (isoDates[i2][1].exec(match[1])) {
        dateFormat = isoDates[i2][0];
        allowTime = isoDates[i2][2] !== false;
        break;
      }
    }
    if (dateFormat == null) {
      config._isValid = false;
      return;
    }
    if (match[3]) {
      for (i2 = 0, l2 = isoTimesLen; i2 < l2; i2++) {
        if (isoTimes[i2][1].exec(match[3])) {
          timeFormat = (match[2] || " ") + isoTimes[i2][0];
          break;
        }
      }
      if (timeFormat == null) {
        config._isValid = false;
        return;
      }
    }
    if (!allowTime && timeFormat != null) {
      config._isValid = false;
      return;
    }
    if (match[4]) {
      if (tzRegex.exec(match[4])) {
        tzFormat = "Z";
      } else {
        config._isValid = false;
        return;
      }
    }
    config._f = dateFormat + (timeFormat || "") + (tzFormat || "");
    configFromStringAndFormat(config);
  } else {
    config._isValid = false;
  }
}
function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
  var result = [
    untruncateYear(yearStr),
    defaultLocaleMonthsShort.indexOf(monthStr),
    parseInt(dayStr, 10),
    parseInt(hourStr, 10),
    parseInt(minuteStr, 10)
  ];
  if (secondStr) {
    result.push(parseInt(secondStr, 10));
  }
  return result;
}
function untruncateYear(yearStr) {
  var year = parseInt(yearStr, 10);
  if (year <= 49) {
    return 2e3 + year;
  } else if (year <= 999) {
    return 1900 + year;
  }
  return year;
}
function preprocessRFC2822(s2) {
  return s2.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function checkWeekday(weekdayStr, parsedInput, config) {
  if (weekdayStr) {
    var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr), weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
    if (weekdayProvided !== weekdayActual) {
      getParsingFlags(config).weekdayMismatch = true;
      config._isValid = false;
      return false;
    }
  }
  return true;
}
function calculateOffset(obsOffset, militaryOffset, numOffset) {
  if (obsOffset) {
    return obsOffsets[obsOffset];
  } else if (militaryOffset) {
    return 0;
  } else {
    var hm = parseInt(numOffset, 10), m2 = hm % 100, h2 = (hm - m2) / 100;
    return h2 * 60 + m2;
  }
}
function configFromRFC2822(config) {
  var match = rfc2822.exec(preprocessRFC2822(config._i)), parsedArray;
  if (match) {
    parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
    if (!checkWeekday(match[1], parsedArray, config)) {
      return;
    }
    config._a = parsedArray;
    config._tzm = calculateOffset(match[8], match[9], match[10]);
    config._d = createUTCDate.apply(null, config._a);
    config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    getParsingFlags(config).rfc2822 = true;
  } else {
    config._isValid = false;
  }
}
function configFromString(config) {
  var matched = aspNetJsonRegex.exec(config._i);
  if (matched !== null) {
    config._d = new Date(+matched[1]);
    return;
  }
  configFromISO(config);
  if (config._isValid === false) {
    delete config._isValid;
  } else {
    return;
  }
  configFromRFC2822(config);
  if (config._isValid === false) {
    delete config._isValid;
  } else {
    return;
  }
  if (config._strict) {
    config._isValid = false;
  } else {
    hooks.createFromInputFallback(config);
  }
}
hooks.createFromInputFallback = deprecate("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(config) {
  config._d = new Date(config._i + (config._useUTC ? " UTC" : ""));
});
function defaults(a2, b2, c2) {
  if (a2 != null) {
    return a2;
  }
  if (b2 != null) {
    return b2;
  }
  return c2;
}
function currentDateArray(config) {
  var nowValue = new Date(hooks.now());
  if (config._useUTC) {
    return [
      nowValue.getUTCFullYear(),
      nowValue.getUTCMonth(),
      nowValue.getUTCDate()
    ];
  }
  return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
}
function configFromArray(config) {
  var i2, date, input = [], currentDate, expectedWeekday, yearToUse;
  if (config._d) {
    return;
  }
  currentDate = currentDateArray(config);
  if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
    dayOfYearFromWeekInfo(config);
  }
  if (config._dayOfYear != null) {
    yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
    if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
      getParsingFlags(config)._overflowDayOfYear = true;
    }
    date = createUTCDate(yearToUse, 0, config._dayOfYear);
    config._a[MONTH] = date.getUTCMonth();
    config._a[DATE] = date.getUTCDate();
  }
  for (i2 = 0; i2 < 3 && config._a[i2] == null; ++i2) {
    config._a[i2] = input[i2] = currentDate[i2];
  }
  for (; i2 < 7; i2++) {
    config._a[i2] = input[i2] = config._a[i2] == null ? i2 === 2 ? 1 : 0 : config._a[i2];
  }
  if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
    config._nextDay = true;
    config._a[HOUR] = 0;
  }
  config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
  expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();
  if (config._tzm != null) {
    config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
  }
  if (config._nextDay) {
    config._a[HOUR] = 24;
  }
  if (config._w && typeof config._w.d !== "undefined" && config._w.d !== expectedWeekday) {
    getParsingFlags(config).weekdayMismatch = true;
  }
}
function dayOfYearFromWeekInfo(config) {
  var w2, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;
  w2 = config._w;
  if (w2.GG != null || w2.W != null || w2.E != null) {
    dow = 1;
    doy = 4;
    weekYear = defaults(w2.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
    week = defaults(w2.W, 1);
    weekday = defaults(w2.E, 1);
    if (weekday < 1 || weekday > 7) {
      weekdayOverflow = true;
    }
  } else {
    dow = config._locale._week.dow;
    doy = config._locale._week.doy;
    curWeek = weekOfYear(createLocal(), dow, doy);
    weekYear = defaults(w2.gg, config._a[YEAR], curWeek.year);
    week = defaults(w2.w, curWeek.week);
    if (w2.d != null) {
      weekday = w2.d;
      if (weekday < 0 || weekday > 6) {
        weekdayOverflow = true;
      }
    } else if (w2.e != null) {
      weekday = w2.e + dow;
      if (w2.e < 0 || w2.e > 6) {
        weekdayOverflow = true;
      }
    } else {
      weekday = dow;
    }
  }
  if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
    getParsingFlags(config)._overflowWeeks = true;
  } else if (weekdayOverflow != null) {
    getParsingFlags(config)._overflowWeekday = true;
  } else {
    temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
    config._a[YEAR] = temp.year;
    config._dayOfYear = temp.dayOfYear;
  }
}
hooks.ISO_8601 = function() {
};
hooks.RFC_2822 = function() {
};
function configFromStringAndFormat(config) {
  if (config._f === hooks.ISO_8601) {
    configFromISO(config);
    return;
  }
  if (config._f === hooks.RFC_2822) {
    configFromRFC2822(config);
    return;
  }
  config._a = [];
  getParsingFlags(config).empty = true;
  var string = "" + config._i, i2, parsedInput, tokens2, token2, skipped, stringLength = string.length, totalParsedInputLength = 0, era, tokenLen;
  tokens2 = expandFormat(config._f, config._locale).match(formattingTokens) || [];
  tokenLen = tokens2.length;
  for (i2 = 0; i2 < tokenLen; i2++) {
    token2 = tokens2[i2];
    parsedInput = (string.match(getParseRegexForToken(token2, config)) || [])[0];
    if (parsedInput) {
      skipped = string.substr(0, string.indexOf(parsedInput));
      if (skipped.length > 0) {
        getParsingFlags(config).unusedInput.push(skipped);
      }
      string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
      totalParsedInputLength += parsedInput.length;
    }
    if (formatTokenFunctions[token2]) {
      if (parsedInput) {
        getParsingFlags(config).empty = false;
      } else {
        getParsingFlags(config).unusedTokens.push(token2);
      }
      addTimeToArrayFromToken(token2, parsedInput, config);
    } else if (config._strict && !parsedInput) {
      getParsingFlags(config).unusedTokens.push(token2);
    }
  }
  getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
  if (string.length > 0) {
    getParsingFlags(config).unusedInput.push(string);
  }
  if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
    getParsingFlags(config).bigHour = void 0;
  }
  getParsingFlags(config).parsedDateParts = config._a.slice(0);
  getParsingFlags(config).meridiem = config._meridiem;
  config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
  era = getParsingFlags(config).era;
  if (era !== null) {
    config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
  }
  configFromArray(config);
  checkOverflow(config);
}
function meridiemFixWrap(locale2, hour, meridiem2) {
  var isPm;
  if (meridiem2 == null) {
    return hour;
  }
  if (locale2.meridiemHour != null) {
    return locale2.meridiemHour(hour, meridiem2);
  } else if (locale2.isPM != null) {
    isPm = locale2.isPM(meridiem2);
    if (isPm && hour < 12) {
      hour += 12;
    }
    if (!isPm && hour === 12) {
      hour = 0;
    }
    return hour;
  } else {
    return hour;
  }
}
function configFromStringAndArray(config) {
  var tempConfig, bestMoment, scoreToBeat, i2, currentScore, validFormatFound, bestFormatIsValid = false, configfLen = config._f.length;
  if (configfLen === 0) {
    getParsingFlags(config).invalidFormat = true;
    config._d = new Date(NaN);
    return;
  }
  for (i2 = 0; i2 < configfLen; i2++) {
    currentScore = 0;
    validFormatFound = false;
    tempConfig = copyConfig({}, config);
    if (config._useUTC != null) {
      tempConfig._useUTC = config._useUTC;
    }
    tempConfig._f = config._f[i2];
    configFromStringAndFormat(tempConfig);
    if (isValid(tempConfig)) {
      validFormatFound = true;
    }
    currentScore += getParsingFlags(tempConfig).charsLeftOver;
    currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
    getParsingFlags(tempConfig).score = currentScore;
    if (!bestFormatIsValid) {
      if (scoreToBeat == null || currentScore < scoreToBeat || validFormatFound) {
        scoreToBeat = currentScore;
        bestMoment = tempConfig;
        if (validFormatFound) {
          bestFormatIsValid = true;
        }
      }
    } else {
      if (currentScore < scoreToBeat) {
        scoreToBeat = currentScore;
        bestMoment = tempConfig;
      }
    }
  }
  extend(config, bestMoment || tempConfig);
}
function configFromObject(config) {
  if (config._d) {
    return;
  }
  var i2 = normalizeObjectUnits(config._i), dayOrDate = i2.day === void 0 ? i2.date : i2.day;
  config._a = map([i2.year, i2.month, dayOrDate, i2.hour, i2.minute, i2.second, i2.millisecond], function(obj) {
    return obj && parseInt(obj, 10);
  });
  configFromArray(config);
}
function createFromConfig(config) {
  var res = new Moment(checkOverflow(prepareConfig(config)));
  if (res._nextDay) {
    res.add(1, "d");
    res._nextDay = void 0;
  }
  return res;
}
function prepareConfig(config) {
  var input = config._i, format2 = config._f;
  config._locale = config._locale || getLocale(config._l);
  if (input === null || format2 === void 0 && input === "") {
    return createInvalid({ nullInput: true });
  }
  if (typeof input === "string") {
    config._i = input = config._locale.preparse(input);
  }
  if (isMoment(input)) {
    return new Moment(checkOverflow(input));
  } else if (isDate(input)) {
    config._d = input;
  } else if (isArray(format2)) {
    configFromStringAndArray(config);
  } else if (format2) {
    configFromStringAndFormat(config);
  } else {
    configFromInput(config);
  }
  if (!isValid(config)) {
    config._d = null;
  }
  return config;
}
function configFromInput(config) {
  var input = config._i;
  if (isUndefined(input)) {
    config._d = new Date(hooks.now());
  } else if (isDate(input)) {
    config._d = new Date(input.valueOf());
  } else if (typeof input === "string") {
    configFromString(config);
  } else if (isArray(input)) {
    config._a = map(input.slice(0), function(obj) {
      return parseInt(obj, 10);
    });
    configFromArray(config);
  } else if (isObject(input)) {
    configFromObject(config);
  } else if (isNumber(input)) {
    config._d = new Date(input);
  } else {
    hooks.createFromInputFallback(config);
  }
}
function createLocalOrUTC(input, format2, locale2, strict, isUTC) {
  var c2 = {};
  if (format2 === true || format2 === false) {
    strict = format2;
    format2 = void 0;
  }
  if (locale2 === true || locale2 === false) {
    strict = locale2;
    locale2 = void 0;
  }
  if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) {
    input = void 0;
  }
  c2._isAMomentObject = true;
  c2._useUTC = c2._isUTC = isUTC;
  c2._l = locale2;
  c2._i = input;
  c2._f = format2;
  c2._strict = strict;
  return createFromConfig(c2);
}
function createLocal(input, format2, locale2, strict) {
  return createLocalOrUTC(input, format2, locale2, strict, false);
}
var prototypeMin = deprecate("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
  var other = createLocal.apply(null, arguments);
  if (this.isValid() && other.isValid()) {
    return other < this ? this : other;
  } else {
    return createInvalid();
  }
}), prototypeMax = deprecate("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
  var other = createLocal.apply(null, arguments);
  if (this.isValid() && other.isValid()) {
    return other > this ? this : other;
  } else {
    return createInvalid();
  }
});
function pickBy(fn2, moments) {
  var res, i2;
  if (moments.length === 1 && isArray(moments[0])) {
    moments = moments[0];
  }
  if (!moments.length) {
    return createLocal();
  }
  res = moments[0];
  for (i2 = 1; i2 < moments.length; ++i2) {
    if (!moments[i2].isValid() || moments[i2][fn2](res)) {
      res = moments[i2];
    }
  }
  return res;
}
function min() {
  var args = [].slice.call(arguments, 0);
  return pickBy("isBefore", args);
}
function max() {
  var args = [].slice.call(arguments, 0);
  return pickBy("isAfter", args);
}
var now = function() {
  return Date.now ? Date.now() : +new Date();
};
var ordering = [
  "year",
  "quarter",
  "month",
  "week",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
];
function isDurationValid(m2) {
  var key, unitHasDecimal = false, i2, orderLen = ordering.length;
  for (key in m2) {
    if (hasOwnProp(m2, key) && !(indexOf.call(ordering, key) !== -1 && (m2[key] == null || !isNaN(m2[key])))) {
      return false;
    }
  }
  for (i2 = 0; i2 < orderLen; ++i2) {
    if (m2[ordering[i2]]) {
      if (unitHasDecimal) {
        return false;
      }
      if (parseFloat(m2[ordering[i2]]) !== toInt(m2[ordering[i2]])) {
        unitHasDecimal = true;
      }
    }
  }
  return true;
}
function isValid$1() {
  return this._isValid;
}
function createInvalid$1() {
  return createDuration(NaN);
}
function Duration(duration) {
  var normalizedInput = normalizeObjectUnits(duration), years2 = normalizedInput.year || 0, quarters = normalizedInput.quarter || 0, months2 = normalizedInput.month || 0, weeks2 = normalizedInput.week || normalizedInput.isoWeek || 0, days2 = normalizedInput.day || 0, hours2 = normalizedInput.hour || 0, minutes2 = normalizedInput.minute || 0, seconds2 = normalizedInput.second || 0, milliseconds2 = normalizedInput.millisecond || 0;
  this._isValid = isDurationValid(normalizedInput);
  this._milliseconds = +milliseconds2 + seconds2 * 1e3 + minutes2 * 6e4 + hours2 * 1e3 * 60 * 60;
  this._days = +days2 + weeks2 * 7;
  this._months = +months2 + quarters * 3 + years2 * 12;
  this._data = {};
  this._locale = getLocale();
  this._bubble();
}
function isDuration(obj) {
  return obj instanceof Duration;
}
function absRound(number) {
  if (number < 0) {
    return Math.round(-1 * number) * -1;
  } else {
    return Math.round(number);
  }
}
function compareArrays(array1, array2, dontConvert) {
  var len = Math.min(array1.length, array2.length), lengthDiff = Math.abs(array1.length - array2.length), diffs = 0, i2;
  for (i2 = 0; i2 < len; i2++) {
    if (dontConvert && array1[i2] !== array2[i2] || !dontConvert && toInt(array1[i2]) !== toInt(array2[i2])) {
      diffs++;
    }
  }
  return diffs + lengthDiff;
}
function offset(token2, separator) {
  addFormatToken(token2, 0, 0, function() {
    var offset2 = this.utcOffset(), sign2 = "+";
    if (offset2 < 0) {
      offset2 = -offset2;
      sign2 = "-";
    }
    return sign2 + zeroFill(~~(offset2 / 60), 2) + separator + zeroFill(~~offset2 % 60, 2);
  });
}
offset("Z", ":");
offset("ZZ", "");
addRegexToken("Z", matchShortOffset);
addRegexToken("ZZ", matchShortOffset);
addParseToken(["Z", "ZZ"], function(input, array, config) {
  config._useUTC = true;
  config._tzm = offsetFromString(matchShortOffset, input);
});
var chunkOffset = /([\+\-]|\d\d)/gi;
function offsetFromString(matcher, string) {
  var matches2 = (string || "").match(matcher), chunk, parts, minutes2;
  if (matches2 === null) {
    return null;
  }
  chunk = matches2[matches2.length - 1] || [];
  parts = (chunk + "").match(chunkOffset) || ["-", 0, 0];
  minutes2 = +(parts[1] * 60) + toInt(parts[2]);
  return minutes2 === 0 ? 0 : parts[0] === "+" ? minutes2 : -minutes2;
}
function cloneWithOffset(input, model) {
  var res, diff2;
  if (model._isUTC) {
    res = model.clone();
    diff2 = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
    res._d.setTime(res._d.valueOf() + diff2);
    hooks.updateOffset(res, false);
    return res;
  } else {
    return createLocal(input).local();
  }
}
function getDateOffset(m2) {
  return -Math.round(m2._d.getTimezoneOffset());
}
hooks.updateOffset = function() {
};
function getSetOffset(input, keepLocalTime, keepMinutes) {
  var offset2 = this._offset || 0, localAdjust;
  if (!this.isValid()) {
    return input != null ? this : NaN;
  }
  if (input != null) {
    if (typeof input === "string") {
      input = offsetFromString(matchShortOffset, input);
      if (input === null) {
        return this;
      }
    } else if (Math.abs(input) < 16 && !keepMinutes) {
      input = input * 60;
    }
    if (!this._isUTC && keepLocalTime) {
      localAdjust = getDateOffset(this);
    }
    this._offset = input;
    this._isUTC = true;
    if (localAdjust != null) {
      this.add(localAdjust, "m");
    }
    if (offset2 !== input) {
      if (!keepLocalTime || this._changeInProgress) {
        addSubtract(this, createDuration(input - offset2, "m"), 1, false);
      } else if (!this._changeInProgress) {
        this._changeInProgress = true;
        hooks.updateOffset(this, true);
        this._changeInProgress = null;
      }
    }
    return this;
  } else {
    return this._isUTC ? offset2 : getDateOffset(this);
  }
}
function getSetZone(input, keepLocalTime) {
  if (input != null) {
    if (typeof input !== "string") {
      input = -input;
    }
    this.utcOffset(input, keepLocalTime);
    return this;
  } else {
    return -this.utcOffset();
  }
}
function setOffsetToUTC(keepLocalTime) {
  return this.utcOffset(0, keepLocalTime);
}
function setOffsetToLocal(keepLocalTime) {
  if (this._isUTC) {
    this.utcOffset(0, keepLocalTime);
    this._isUTC = false;
    if (keepLocalTime) {
      this.subtract(getDateOffset(this), "m");
    }
  }
  return this;
}
function setOffsetToParsedOffset() {
  if (this._tzm != null) {
    this.utcOffset(this._tzm, false, true);
  } else if (typeof this._i === "string") {
    var tZone = offsetFromString(matchOffset, this._i);
    if (tZone != null) {
      this.utcOffset(tZone);
    } else {
      this.utcOffset(0, true);
    }
  }
  return this;
}
function hasAlignedHourOffset(input) {
  if (!this.isValid()) {
    return false;
  }
  input = input ? createLocal(input).utcOffset() : 0;
  return (this.utcOffset() - input) % 60 === 0;
}
function isDaylightSavingTime() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function isDaylightSavingTimeShifted() {
  if (!isUndefined(this._isDSTShifted)) {
    return this._isDSTShifted;
  }
  var c2 = {}, other;
  copyConfig(c2, this);
  c2 = prepareConfig(c2);
  if (c2._a) {
    other = c2._isUTC ? createUTC(c2._a) : createLocal(c2._a);
    this._isDSTShifted = this.isValid() && compareArrays(c2._a, other.toArray()) > 0;
  } else {
    this._isDSTShifted = false;
  }
  return this._isDSTShifted;
}
function isLocal() {
  return this.isValid() ? !this._isUTC : false;
}
function isUtcOffset() {
  return this.isValid() ? this._isUTC : false;
}
function isUtc() {
  return this.isValid() ? this._isUTC && this._offset === 0 : false;
}
var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function createDuration(input, key) {
  var duration = input, match = null, sign2, ret, diffRes;
  if (isDuration(input)) {
    duration = {
      ms: input._milliseconds,
      d: input._days,
      M: input._months
    };
  } else if (isNumber(input) || !isNaN(+input)) {
    duration = {};
    if (key) {
      duration[key] = +input;
    } else {
      duration.milliseconds = +input;
    }
  } else if (match = aspNetRegex.exec(input)) {
    sign2 = match[1] === "-" ? -1 : 1;
    duration = {
      y: 0,
      d: toInt(match[DATE]) * sign2,
      h: toInt(match[HOUR]) * sign2,
      m: toInt(match[MINUTE]) * sign2,
      s: toInt(match[SECOND]) * sign2,
      ms: toInt(absRound(match[MILLISECOND] * 1e3)) * sign2
    };
  } else if (match = isoRegex.exec(input)) {
    sign2 = match[1] === "-" ? -1 : 1;
    duration = {
      y: parseIso(match[2], sign2),
      M: parseIso(match[3], sign2),
      w: parseIso(match[4], sign2),
      d: parseIso(match[5], sign2),
      h: parseIso(match[6], sign2),
      m: parseIso(match[7], sign2),
      s: parseIso(match[8], sign2)
    };
  } else if (duration == null) {
    duration = {};
  } else if (typeof duration === "object" && ("from" in duration || "to" in duration)) {
    diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));
    duration = {};
    duration.ms = diffRes.milliseconds;
    duration.M = diffRes.months;
  }
  ret = new Duration(duration);
  if (isDuration(input) && hasOwnProp(input, "_locale")) {
    ret._locale = input._locale;
  }
  if (isDuration(input) && hasOwnProp(input, "_isValid")) {
    ret._isValid = input._isValid;
  }
  return ret;
}
createDuration.fn = Duration.prototype;
createDuration.invalid = createInvalid$1;
function parseIso(inp, sign2) {
  var res = inp && parseFloat(inp.replace(",", "."));
  return (isNaN(res) ? 0 : res) * sign2;
}
function positiveMomentsDifference(base, other) {
  var res = {};
  res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
  if (base.clone().add(res.months, "M").isAfter(other)) {
    --res.months;
  }
  res.milliseconds = +other - +base.clone().add(res.months, "M");
  return res;
}
function momentsDifference(base, other) {
  var res;
  if (!(base.isValid() && other.isValid())) {
    return { milliseconds: 0, months: 0 };
  }
  other = cloneWithOffset(other, base);
  if (base.isBefore(other)) {
    res = positiveMomentsDifference(base, other);
  } else {
    res = positiveMomentsDifference(other, base);
    res.milliseconds = -res.milliseconds;
    res.months = -res.months;
  }
  return res;
}
function createAdder(direction, name) {
  return function(val, period) {
    var dur, tmp;
    if (period !== null && !isNaN(+period)) {
      deprecateSimple(name, "moment()." + name + "(period, number) is deprecated. Please use moment()." + name + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.");
      tmp = val;
      val = period;
      period = tmp;
    }
    dur = createDuration(val, period);
    addSubtract(this, dur, direction);
    return this;
  };
}
function addSubtract(mom, duration, isAdding, updateOffset) {
  var milliseconds2 = duration._milliseconds, days2 = absRound(duration._days), months2 = absRound(duration._months);
  if (!mom.isValid()) {
    return;
  }
  updateOffset = updateOffset == null ? true : updateOffset;
  if (months2) {
    setMonth(mom, get(mom, "Month") + months2 * isAdding);
  }
  if (days2) {
    set$1(mom, "Date", get(mom, "Date") + days2 * isAdding);
  }
  if (milliseconds2) {
    mom._d.setTime(mom._d.valueOf() + milliseconds2 * isAdding);
  }
  if (updateOffset) {
    hooks.updateOffset(mom, days2 || months2);
  }
}
var add = createAdder(1, "add"), subtract = createAdder(-1, "subtract");
function isString(input) {
  return typeof input === "string" || input instanceof String;
}
function isMomentInput(input) {
  return isMoment(input) || isDate(input) || isString(input) || isNumber(input) || isNumberOrStringArray(input) || isMomentInputObject(input) || input === null || input === void 0;
}
function isMomentInputObject(input) {
  var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [
    "years",
    "year",
    "y",
    "months",
    "month",
    "M",
    "days",
    "day",
    "d",
    "dates",
    "date",
    "D",
    "hours",
    "hour",
    "h",
    "minutes",
    "minute",
    "m",
    "seconds",
    "second",
    "s",
    "milliseconds",
    "millisecond",
    "ms"
  ], i2, property, propertyLen = properties.length;
  for (i2 = 0; i2 < propertyLen; i2 += 1) {
    property = properties[i2];
    propertyTest = propertyTest || hasOwnProp(input, property);
  }
  return objectTest && propertyTest;
}
function isNumberOrStringArray(input) {
  var arrayTest = isArray(input), dataTypeTest = false;
  if (arrayTest) {
    dataTypeTest = input.filter(function(item) {
      return !isNumber(item) && isString(input);
    }).length === 0;
  }
  return arrayTest && dataTypeTest;
}
function isCalendarSpec(input) {
  var objectTest = isObject(input) && !isObjectEmpty(input), propertyTest = false, properties = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], i2, property;
  for (i2 = 0; i2 < properties.length; i2 += 1) {
    property = properties[i2];
    propertyTest = propertyTest || hasOwnProp(input, property);
  }
  return objectTest && propertyTest;
}
function getCalendarFormat(myMoment, now2) {
  var diff2 = myMoment.diff(now2, "days", true);
  return diff2 < -6 ? "sameElse" : diff2 < -1 ? "lastWeek" : diff2 < 0 ? "lastDay" : diff2 < 1 ? "sameDay" : diff2 < 2 ? "nextDay" : diff2 < 7 ? "nextWeek" : "sameElse";
}
function calendar$1(time, formats) {
  if (arguments.length === 1) {
    if (!arguments[0]) {
      time = void 0;
      formats = void 0;
    } else if (isMomentInput(arguments[0])) {
      time = arguments[0];
      formats = void 0;
    } else if (isCalendarSpec(arguments[0])) {
      formats = arguments[0];
      time = void 0;
    }
  }
  var now2 = time || createLocal(), sod = cloneWithOffset(now2, this).startOf("day"), format2 = hooks.calendarFormat(this, sod) || "sameElse", output = formats && (isFunction(formats[format2]) ? formats[format2].call(this, now2) : formats[format2]);
  return this.format(output || this.localeData().calendar(format2, this, createLocal(now2)));
}
function clone() {
  return new Moment(this);
}
function isAfter(input, units) {
  var localInput = isMoment(input) ? input : createLocal(input);
  if (!(this.isValid() && localInput.isValid())) {
    return false;
  }
  units = normalizeUnits(units) || "millisecond";
  if (units === "millisecond") {
    return this.valueOf() > localInput.valueOf();
  } else {
    return localInput.valueOf() < this.clone().startOf(units).valueOf();
  }
}
function isBefore(input, units) {
  var localInput = isMoment(input) ? input : createLocal(input);
  if (!(this.isValid() && localInput.isValid())) {
    return false;
  }
  units = normalizeUnits(units) || "millisecond";
  if (units === "millisecond") {
    return this.valueOf() < localInput.valueOf();
  } else {
    return this.clone().endOf(units).valueOf() < localInput.valueOf();
  }
}
function isBetween(from2, to2, units, inclusivity) {
  var localFrom = isMoment(from2) ? from2 : createLocal(from2), localTo = isMoment(to2) ? to2 : createLocal(to2);
  if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
    return false;
  }
  inclusivity = inclusivity || "()";
  return (inclusivity[0] === "(" ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ")" ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
}
function isSame(input, units) {
  var localInput = isMoment(input) ? input : createLocal(input), inputMs;
  if (!(this.isValid() && localInput.isValid())) {
    return false;
  }
  units = normalizeUnits(units) || "millisecond";
  if (units === "millisecond") {
    return this.valueOf() === localInput.valueOf();
  } else {
    inputMs = localInput.valueOf();
    return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
  }
}
function isSameOrAfter(input, units) {
  return this.isSame(input, units) || this.isAfter(input, units);
}
function isSameOrBefore(input, units) {
  return this.isSame(input, units) || this.isBefore(input, units);
}
function diff(input, units, asFloat) {
  var that, zoneDelta, output;
  if (!this.isValid()) {
    return NaN;
  }
  that = cloneWithOffset(input, this);
  if (!that.isValid()) {
    return NaN;
  }
  zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
  units = normalizeUnits(units);
  switch (units) {
    case "year":
      output = monthDiff(this, that) / 12;
      break;
    case "month":
      output = monthDiff(this, that);
      break;
    case "quarter":
      output = monthDiff(this, that) / 3;
      break;
    case "second":
      output = (this - that) / 1e3;
      break;
    case "minute":
      output = (this - that) / 6e4;
      break;
    case "hour":
      output = (this - that) / 36e5;
      break;
    case "day":
      output = (this - that - zoneDelta) / 864e5;
      break;
    case "week":
      output = (this - that - zoneDelta) / 6048e5;
      break;
    default:
      output = this - that;
  }
  return asFloat ? output : absFloor(output);
}
function monthDiff(a2, b2) {
  if (a2.date() < b2.date()) {
    return -monthDiff(b2, a2);
  }
  var wholeMonthDiff = (b2.year() - a2.year()) * 12 + (b2.month() - a2.month()), anchor = a2.clone().add(wholeMonthDiff, "months"), anchor2, adjust;
  if (b2 - anchor < 0) {
    anchor2 = a2.clone().add(wholeMonthDiff - 1, "months");
    adjust = (b2 - anchor) / (anchor - anchor2);
  } else {
    anchor2 = a2.clone().add(wholeMonthDiff + 1, "months");
    adjust = (b2 - anchor) / (anchor2 - anchor);
  }
  return -(wholeMonthDiff + adjust) || 0;
}
hooks.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
hooks.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function toString() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function toISOString(keepOffset) {
  if (!this.isValid()) {
    return null;
  }
  var utc = keepOffset !== true, m2 = utc ? this.clone().utc() : this;
  if (m2.year() < 0 || m2.year() > 9999) {
    return formatMoment(m2, utc ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ");
  }
  if (isFunction(Date.prototype.toISOString)) {
    if (utc) {
      return this.toDate().toISOString();
    } else {
      return new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", formatMoment(m2, "Z"));
    }
  }
  return formatMoment(m2, utc ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
}
function inspect() {
  if (!this.isValid()) {
    return "moment.invalid(/* " + this._i + " */)";
  }
  var func = "moment", zone = "", prefix, year, datetime, suffix;
  if (!this.isLocal()) {
    func = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone";
    zone = "Z";
  }
  prefix = "[" + func + '("]';
  year = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY";
  datetime = "-MM-DD[T]HH:mm:ss.SSS";
  suffix = zone + '[")]';
  return this.format(prefix + year + datetime + suffix);
}
function format(inputString) {
  if (!inputString) {
    inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
  }
  var output = formatMoment(this, inputString);
  return this.localeData().postformat(output);
}
function from(time, withoutSuffix) {
  if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
    return createDuration({ to: this, from: time }).locale(this.locale()).humanize(!withoutSuffix);
  } else {
    return this.localeData().invalidDate();
  }
}
function fromNow(withoutSuffix) {
  return this.from(createLocal(), withoutSuffix);
}
function to(time, withoutSuffix) {
  if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
    return createDuration({ from: this, to: time }).locale(this.locale()).humanize(!withoutSuffix);
  } else {
    return this.localeData().invalidDate();
  }
}
function toNow(withoutSuffix) {
  return this.to(createLocal(), withoutSuffix);
}
function locale(key) {
  var newLocaleData;
  if (key === void 0) {
    return this._locale._abbr;
  } else {
    newLocaleData = getLocale(key);
    if (newLocaleData != null) {
      this._locale = newLocaleData;
    }
    return this;
  }
}
var lang = deprecate("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(key) {
  if (key === void 0) {
    return this.localeData();
  } else {
    return this.locale(key);
  }
});
function localeData() {
  return this._locale;
}
var MS_PER_SECOND = 1e3, MS_PER_MINUTE = 60 * MS_PER_SECOND, MS_PER_HOUR = 60 * MS_PER_MINUTE, MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;
function mod$1(dividend, divisor) {
  return (dividend % divisor + divisor) % divisor;
}
function localStartOfDate(y2, m2, d2) {
  if (y2 < 100 && y2 >= 0) {
    return new Date(y2 + 400, m2, d2) - MS_PER_400_YEARS;
  } else {
    return new Date(y2, m2, d2).valueOf();
  }
}
function utcStartOfDate(y2, m2, d2) {
  if (y2 < 100 && y2 >= 0) {
    return Date.UTC(y2 + 400, m2, d2) - MS_PER_400_YEARS;
  } else {
    return Date.UTC(y2, m2, d2);
  }
}
function startOf(units) {
  var time, startOfDate;
  units = normalizeUnits(units);
  if (units === void 0 || units === "millisecond" || !this.isValid()) {
    return this;
  }
  startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
  switch (units) {
    case "year":
      time = startOfDate(this.year(), 0, 1);
      break;
    case "quarter":
      time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
      break;
    case "month":
      time = startOfDate(this.year(), this.month(), 1);
      break;
    case "week":
      time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
      break;
    case "isoWeek":
      time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
      break;
    case "day":
    case "date":
      time = startOfDate(this.year(), this.month(), this.date());
      break;
    case "hour":
      time = this._d.valueOf();
      time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
      break;
    case "minute":
      time = this._d.valueOf();
      time -= mod$1(time, MS_PER_MINUTE);
      break;
    case "second":
      time = this._d.valueOf();
      time -= mod$1(time, MS_PER_SECOND);
      break;
  }
  this._d.setTime(time);
  hooks.updateOffset(this, true);
  return this;
}
function endOf(units) {
  var time, startOfDate;
  units = normalizeUnits(units);
  if (units === void 0 || units === "millisecond" || !this.isValid()) {
    return this;
  }
  startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
  switch (units) {
    case "year":
      time = startOfDate(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
      break;
    case "month":
      time = startOfDate(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
      break;
    case "isoWeek":
      time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
      break;
    case "day":
    case "date":
      time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      time = this._d.valueOf();
      time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
      break;
    case "minute":
      time = this._d.valueOf();
      time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
      break;
    case "second":
      time = this._d.valueOf();
      time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
      break;
  }
  this._d.setTime(time);
  hooks.updateOffset(this, true);
  return this;
}
function valueOf() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function unix() {
  return Math.floor(this.valueOf() / 1e3);
}
function toDate() {
  return new Date(this.valueOf());
}
function toArray() {
  var m2 = this;
  return [
    m2.year(),
    m2.month(),
    m2.date(),
    m2.hour(),
    m2.minute(),
    m2.second(),
    m2.millisecond()
  ];
}
function toObject() {
  var m2 = this;
  return {
    years: m2.year(),
    months: m2.month(),
    date: m2.date(),
    hours: m2.hours(),
    minutes: m2.minutes(),
    seconds: m2.seconds(),
    milliseconds: m2.milliseconds()
  };
}
function toJSON() {
  return this.isValid() ? this.toISOString() : null;
}
function isValid$2() {
  return isValid(this);
}
function parsingFlags() {
  return extend({}, getParsingFlags(this));
}
function invalidAt() {
  return getParsingFlags(this).overflow;
}
function creationData() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
addFormatToken("N", 0, 0, "eraAbbr");
addFormatToken("NN", 0, 0, "eraAbbr");
addFormatToken("NNN", 0, 0, "eraAbbr");
addFormatToken("NNNN", 0, 0, "eraName");
addFormatToken("NNNNN", 0, 0, "eraNarrow");
addFormatToken("y", ["y", 1], "yo", "eraYear");
addFormatToken("y", ["yy", 2], 0, "eraYear");
addFormatToken("y", ["yyy", 3], 0, "eraYear");
addFormatToken("y", ["yyyy", 4], 0, "eraYear");
addRegexToken("N", matchEraAbbr);
addRegexToken("NN", matchEraAbbr);
addRegexToken("NNN", matchEraAbbr);
addRegexToken("NNNN", matchEraName);
addRegexToken("NNNNN", matchEraNarrow);
addParseToken(["N", "NN", "NNN", "NNNN", "NNNNN"], function(input, array, config, token2) {
  var era = config._locale.erasParse(input, token2, config._strict);
  if (era) {
    getParsingFlags(config).era = era;
  } else {
    getParsingFlags(config).invalidEra = input;
  }
});
addRegexToken("y", matchUnsigned);
addRegexToken("yy", matchUnsigned);
addRegexToken("yyy", matchUnsigned);
addRegexToken("yyyy", matchUnsigned);
addRegexToken("yo", matchEraYearOrdinal);
addParseToken(["y", "yy", "yyy", "yyyy"], YEAR);
addParseToken(["yo"], function(input, array, config, token2) {
  var match;
  if (config._locale._eraYearOrdinalRegex) {
    match = input.match(config._locale._eraYearOrdinalRegex);
  }
  if (config._locale.eraYearOrdinalParse) {
    array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
  } else {
    array[YEAR] = parseInt(input, 10);
  }
});
function localeEras(m2, format2) {
  var i2, l2, date, eras = this._eras || getLocale("en")._eras;
  for (i2 = 0, l2 = eras.length; i2 < l2; ++i2) {
    switch (typeof eras[i2].since) {
      case "string":
        date = hooks(eras[i2].since).startOf("day");
        eras[i2].since = date.valueOf();
        break;
    }
    switch (typeof eras[i2].until) {
      case "undefined":
        eras[i2].until = Infinity;
        break;
      case "string":
        date = hooks(eras[i2].until).startOf("day").valueOf();
        eras[i2].until = date.valueOf();
        break;
    }
  }
  return eras;
}
function localeErasParse(eraName, format2, strict) {
  var i2, l2, eras = this.eras(), name, abbr, narrow;
  eraName = eraName.toUpperCase();
  for (i2 = 0, l2 = eras.length; i2 < l2; ++i2) {
    name = eras[i2].name.toUpperCase();
    abbr = eras[i2].abbr.toUpperCase();
    narrow = eras[i2].narrow.toUpperCase();
    if (strict) {
      switch (format2) {
        case "N":
        case "NN":
        case "NNN":
          if (abbr === eraName) {
            return eras[i2];
          }
          break;
        case "NNNN":
          if (name === eraName) {
            return eras[i2];
          }
          break;
        case "NNNNN":
          if (narrow === eraName) {
            return eras[i2];
          }
          break;
      }
    } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
      return eras[i2];
    }
  }
}
function localeErasConvertYear(era, year) {
  var dir = era.since <= era.until ? 1 : -1;
  if (year === void 0) {
    return hooks(era.since).year();
  } else {
    return hooks(era.since).year() + (year - era.offset) * dir;
  }
}
function getEraName() {
  var i2, l2, val, eras = this.localeData().eras();
  for (i2 = 0, l2 = eras.length; i2 < l2; ++i2) {
    val = this.clone().startOf("day").valueOf();
    if (eras[i2].since <= val && val <= eras[i2].until) {
      return eras[i2].name;
    }
    if (eras[i2].until <= val && val <= eras[i2].since) {
      return eras[i2].name;
    }
  }
  return "";
}
function getEraNarrow() {
  var i2, l2, val, eras = this.localeData().eras();
  for (i2 = 0, l2 = eras.length; i2 < l2; ++i2) {
    val = this.clone().startOf("day").valueOf();
    if (eras[i2].since <= val && val <= eras[i2].until) {
      return eras[i2].narrow;
    }
    if (eras[i2].until <= val && val <= eras[i2].since) {
      return eras[i2].narrow;
    }
  }
  return "";
}
function getEraAbbr() {
  var i2, l2, val, eras = this.localeData().eras();
  for (i2 = 0, l2 = eras.length; i2 < l2; ++i2) {
    val = this.clone().startOf("day").valueOf();
    if (eras[i2].since <= val && val <= eras[i2].until) {
      return eras[i2].abbr;
    }
    if (eras[i2].until <= val && val <= eras[i2].since) {
      return eras[i2].abbr;
    }
  }
  return "";
}
function getEraYear() {
  var i2, l2, dir, val, eras = this.localeData().eras();
  for (i2 = 0, l2 = eras.length; i2 < l2; ++i2) {
    dir = eras[i2].since <= eras[i2].until ? 1 : -1;
    val = this.clone().startOf("day").valueOf();
    if (eras[i2].since <= val && val <= eras[i2].until || eras[i2].until <= val && val <= eras[i2].since) {
      return (this.year() - hooks(eras[i2].since).year()) * dir + eras[i2].offset;
    }
  }
  return this.year();
}
function erasNameRegex(isStrict) {
  if (!hasOwnProp(this, "_erasNameRegex")) {
    computeErasParse.call(this);
  }
  return isStrict ? this._erasNameRegex : this._erasRegex;
}
function erasAbbrRegex(isStrict) {
  if (!hasOwnProp(this, "_erasAbbrRegex")) {
    computeErasParse.call(this);
  }
  return isStrict ? this._erasAbbrRegex : this._erasRegex;
}
function erasNarrowRegex(isStrict) {
  if (!hasOwnProp(this, "_erasNarrowRegex")) {
    computeErasParse.call(this);
  }
  return isStrict ? this._erasNarrowRegex : this._erasRegex;
}
function matchEraAbbr(isStrict, locale2) {
  return locale2.erasAbbrRegex(isStrict);
}
function matchEraName(isStrict, locale2) {
  return locale2.erasNameRegex(isStrict);
}
function matchEraNarrow(isStrict, locale2) {
  return locale2.erasNarrowRegex(isStrict);
}
function matchEraYearOrdinal(isStrict, locale2) {
  return locale2._eraYearOrdinalRegex || matchUnsigned;
}
function computeErasParse() {
  var abbrPieces = [], namePieces = [], narrowPieces = [], mixedPieces = [], i2, l2, eras = this.eras();
  for (i2 = 0, l2 = eras.length; i2 < l2; ++i2) {
    namePieces.push(regexEscape(eras[i2].name));
    abbrPieces.push(regexEscape(eras[i2].abbr));
    narrowPieces.push(regexEscape(eras[i2].narrow));
    mixedPieces.push(regexEscape(eras[i2].name));
    mixedPieces.push(regexEscape(eras[i2].abbr));
    mixedPieces.push(regexEscape(eras[i2].narrow));
  }
  this._erasRegex = new RegExp("^(" + mixedPieces.join("|") + ")", "i");
  this._erasNameRegex = new RegExp("^(" + namePieces.join("|") + ")", "i");
  this._erasAbbrRegex = new RegExp("^(" + abbrPieces.join("|") + ")", "i");
  this._erasNarrowRegex = new RegExp("^(" + narrowPieces.join("|") + ")", "i");
}
addFormatToken(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
addFormatToken(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function addWeekYearFormatToken(token2, getter) {
  addFormatToken(0, [token2, token2.length], 0, getter);
}
addWeekYearFormatToken("gggg", "weekYear");
addWeekYearFormatToken("ggggg", "weekYear");
addWeekYearFormatToken("GGGG", "isoWeekYear");
addWeekYearFormatToken("GGGGG", "isoWeekYear");
addUnitAlias("weekYear", "gg");
addUnitAlias("isoWeekYear", "GG");
addUnitPriority("weekYear", 1);
addUnitPriority("isoWeekYear", 1);
addRegexToken("G", matchSigned);
addRegexToken("g", matchSigned);
addRegexToken("GG", match1to2, match2);
addRegexToken("gg", match1to2, match2);
addRegexToken("GGGG", match1to4, match4);
addRegexToken("gggg", match1to4, match4);
addRegexToken("GGGGG", match1to6, match6);
addRegexToken("ggggg", match1to6, match6);
addWeekParseToken(["gggg", "ggggg", "GGGG", "GGGGG"], function(input, week, config, token2) {
  week[token2.substr(0, 2)] = toInt(input);
});
addWeekParseToken(["gg", "GG"], function(input, week, config, token2) {
  week[token2] = hooks.parseTwoDigitYear(input);
});
function getSetWeekYear(input) {
  return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
}
function getSetISOWeekYear(input) {
  return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
}
function getISOWeeksInYear() {
  return weeksInYear(this.year(), 1, 4);
}
function getISOWeeksInISOWeekYear() {
  return weeksInYear(this.isoWeekYear(), 1, 4);
}
function getWeeksInYear() {
  var weekInfo = this.localeData()._week;
  return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
}
function getWeeksInWeekYear() {
  var weekInfo = this.localeData()._week;
  return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
}
function getSetWeekYearHelper(input, week, weekday, dow, doy) {
  var weeksTarget;
  if (input == null) {
    return weekOfYear(this, dow, doy).year;
  } else {
    weeksTarget = weeksInYear(input, dow, doy);
    if (week > weeksTarget) {
      week = weeksTarget;
    }
    return setWeekAll.call(this, input, week, weekday, dow, doy);
  }
}
function setWeekAll(weekYear, week, weekday, dow, doy) {
  var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy), date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
  this.year(date.getUTCFullYear());
  this.month(date.getUTCMonth());
  this.date(date.getUTCDate());
  return this;
}
addFormatToken("Q", 0, "Qo", "quarter");
addUnitAlias("quarter", "Q");
addUnitPriority("quarter", 7);
addRegexToken("Q", match1);
addParseToken("Q", function(input, array) {
  array[MONTH] = (toInt(input) - 1) * 3;
});
function getSetQuarter(input) {
  return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
}
addFormatToken("D", ["DD", 2], "Do", "date");
addUnitAlias("date", "D");
addUnitPriority("date", 9);
addRegexToken("D", match1to2);
addRegexToken("DD", match1to2, match2);
addRegexToken("Do", function(isStrict, locale2) {
  return isStrict ? locale2._dayOfMonthOrdinalParse || locale2._ordinalParse : locale2._dayOfMonthOrdinalParseLenient;
});
addParseToken(["D", "DD"], DATE);
addParseToken("Do", function(input, array) {
  array[DATE] = toInt(input.match(match1to2)[0]);
});
var getSetDayOfMonth = makeGetSet("Date", true);
addFormatToken("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
addUnitAlias("dayOfYear", "DDD");
addUnitPriority("dayOfYear", 4);
addRegexToken("DDD", match1to3);
addRegexToken("DDDD", match3);
addParseToken(["DDD", "DDDD"], function(input, array, config) {
  config._dayOfYear = toInt(input);
});
function getSetDayOfYear(input) {
  var dayOfYear = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
  return input == null ? dayOfYear : this.add(input - dayOfYear, "d");
}
addFormatToken("m", ["mm", 2], 0, "minute");
addUnitAlias("minute", "m");
addUnitPriority("minute", 14);
addRegexToken("m", match1to2);
addRegexToken("mm", match1to2, match2);
addParseToken(["m", "mm"], MINUTE);
var getSetMinute = makeGetSet("Minutes", false);
addFormatToken("s", ["ss", 2], 0, "second");
addUnitAlias("second", "s");
addUnitPriority("second", 15);
addRegexToken("s", match1to2);
addRegexToken("ss", match1to2, match2);
addParseToken(["s", "ss"], SECOND);
var getSetSecond = makeGetSet("Seconds", false);
addFormatToken("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
addFormatToken(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
addFormatToken(0, ["SSS", 3], 0, "millisecond");
addFormatToken(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
addFormatToken(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
addFormatToken(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
addFormatToken(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
addFormatToken(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
addFormatToken(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
addUnitAlias("millisecond", "ms");
addUnitPriority("millisecond", 16);
addRegexToken("S", match1to3, match1);
addRegexToken("SS", match1to3, match2);
addRegexToken("SSS", match1to3, match3);
var token, getSetMillisecond;
for (token = "SSSS"; token.length <= 9; token += "S") {
  addRegexToken(token, matchUnsigned);
}
function parseMs(input, array) {
  array[MILLISECOND] = toInt(("0." + input) * 1e3);
}
for (token = "S"; token.length <= 9; token += "S") {
  addParseToken(token, parseMs);
}
getSetMillisecond = makeGetSet("Milliseconds", false);
addFormatToken("z", 0, 0, "zoneAbbr");
addFormatToken("zz", 0, 0, "zoneName");
function getZoneAbbr() {
  return this._isUTC ? "UTC" : "";
}
function getZoneName() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var proto = Moment.prototype;
proto.add = add;
proto.calendar = calendar$1;
proto.clone = clone;
proto.diff = diff;
proto.endOf = endOf;
proto.format = format;
proto.from = from;
proto.fromNow = fromNow;
proto.to = to;
proto.toNow = toNow;
proto.get = stringGet;
proto.invalidAt = invalidAt;
proto.isAfter = isAfter;
proto.isBefore = isBefore;
proto.isBetween = isBetween;
proto.isSame = isSame;
proto.isSameOrAfter = isSameOrAfter;
proto.isSameOrBefore = isSameOrBefore;
proto.isValid = isValid$2;
proto.lang = lang;
proto.locale = locale;
proto.localeData = localeData;
proto.max = prototypeMax;
proto.min = prototypeMin;
proto.parsingFlags = parsingFlags;
proto.set = stringSet;
proto.startOf = startOf;
proto.subtract = subtract;
proto.toArray = toArray;
proto.toObject = toObject;
proto.toDate = toDate;
proto.toISOString = toISOString;
proto.inspect = inspect;
if (typeof Symbol !== "undefined" && Symbol.for != null) {
  proto[Symbol.for("nodejs.util.inspect.custom")] = function() {
    return "Moment<" + this.format() + ">";
  };
}
proto.toJSON = toJSON;
proto.toString = toString;
proto.unix = unix;
proto.valueOf = valueOf;
proto.creationData = creationData;
proto.eraName = getEraName;
proto.eraNarrow = getEraNarrow;
proto.eraAbbr = getEraAbbr;
proto.eraYear = getEraYear;
proto.year = getSetYear;
proto.isLeapYear = getIsLeapYear;
proto.weekYear = getSetWeekYear;
proto.isoWeekYear = getSetISOWeekYear;
proto.quarter = proto.quarters = getSetQuarter;
proto.month = getSetMonth;
proto.daysInMonth = getDaysInMonth;
proto.week = proto.weeks = getSetWeek;
proto.isoWeek = proto.isoWeeks = getSetISOWeek;
proto.weeksInYear = getWeeksInYear;
proto.weeksInWeekYear = getWeeksInWeekYear;
proto.isoWeeksInYear = getISOWeeksInYear;
proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
proto.date = getSetDayOfMonth;
proto.day = proto.days = getSetDayOfWeek;
proto.weekday = getSetLocaleDayOfWeek;
proto.isoWeekday = getSetISODayOfWeek;
proto.dayOfYear = getSetDayOfYear;
proto.hour = proto.hours = getSetHour;
proto.minute = proto.minutes = getSetMinute;
proto.second = proto.seconds = getSetSecond;
proto.millisecond = proto.milliseconds = getSetMillisecond;
proto.utcOffset = getSetOffset;
proto.utc = setOffsetToUTC;
proto.local = setOffsetToLocal;
proto.parseZone = setOffsetToParsedOffset;
proto.hasAlignedHourOffset = hasAlignedHourOffset;
proto.isDST = isDaylightSavingTime;
proto.isLocal = isLocal;
proto.isUtcOffset = isUtcOffset;
proto.isUtc = isUtc;
proto.isUTC = isUtc;
proto.zoneAbbr = getZoneAbbr;
proto.zoneName = getZoneName;
proto.dates = deprecate("dates accessor is deprecated. Use date instead.", getSetDayOfMonth);
proto.months = deprecate("months accessor is deprecated. Use month instead", getSetMonth);
proto.years = deprecate("years accessor is deprecated. Use year instead", getSetYear);
proto.zone = deprecate("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", getSetZone);
proto.isDSTShifted = deprecate("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", isDaylightSavingTimeShifted);
function createUnix(input) {
  return createLocal(input * 1e3);
}
function createInZone() {
  return createLocal.apply(null, arguments).parseZone();
}
function preParsePostFormat(string) {
  return string;
}
var proto$1 = Locale.prototype;
proto$1.calendar = calendar;
proto$1.longDateFormat = longDateFormat;
proto$1.invalidDate = invalidDate;
proto$1.ordinal = ordinal;
proto$1.preparse = preParsePostFormat;
proto$1.postformat = preParsePostFormat;
proto$1.relativeTime = relativeTime;
proto$1.pastFuture = pastFuture;
proto$1.set = set;
proto$1.eras = localeEras;
proto$1.erasParse = localeErasParse;
proto$1.erasConvertYear = localeErasConvertYear;
proto$1.erasAbbrRegex = erasAbbrRegex;
proto$1.erasNameRegex = erasNameRegex;
proto$1.erasNarrowRegex = erasNarrowRegex;
proto$1.months = localeMonths;
proto$1.monthsShort = localeMonthsShort;
proto$1.monthsParse = localeMonthsParse;
proto$1.monthsRegex = monthsRegex;
proto$1.monthsShortRegex = monthsShortRegex;
proto$1.week = localeWeek;
proto$1.firstDayOfYear = localeFirstDayOfYear;
proto$1.firstDayOfWeek = localeFirstDayOfWeek;
proto$1.weekdays = localeWeekdays;
proto$1.weekdaysMin = localeWeekdaysMin;
proto$1.weekdaysShort = localeWeekdaysShort;
proto$1.weekdaysParse = localeWeekdaysParse;
proto$1.weekdaysRegex = weekdaysRegex;
proto$1.weekdaysShortRegex = weekdaysShortRegex;
proto$1.weekdaysMinRegex = weekdaysMinRegex;
proto$1.isPM = localeIsPM;
proto$1.meridiem = localeMeridiem;
function get$1(format2, index, field, setter) {
  var locale2 = getLocale(), utc = createUTC().set(setter, index);
  return locale2[field](utc, format2);
}
function listMonthsImpl(format2, index, field) {
  if (isNumber(format2)) {
    index = format2;
    format2 = void 0;
  }
  format2 = format2 || "";
  if (index != null) {
    return get$1(format2, index, field, "month");
  }
  var i2, out = [];
  for (i2 = 0; i2 < 12; i2++) {
    out[i2] = get$1(format2, i2, field, "month");
  }
  return out;
}
function listWeekdaysImpl(localeSorted, format2, index, field) {
  if (typeof localeSorted === "boolean") {
    if (isNumber(format2)) {
      index = format2;
      format2 = void 0;
    }
    format2 = format2 || "";
  } else {
    format2 = localeSorted;
    index = format2;
    localeSorted = false;
    if (isNumber(format2)) {
      index = format2;
      format2 = void 0;
    }
    format2 = format2 || "";
  }
  var locale2 = getLocale(), shift = localeSorted ? locale2._week.dow : 0, i2, out = [];
  if (index != null) {
    return get$1(format2, (index + shift) % 7, field, "day");
  }
  for (i2 = 0; i2 < 7; i2++) {
    out[i2] = get$1(format2, (i2 + shift) % 7, field, "day");
  }
  return out;
}
function listMonths(format2, index) {
  return listMonthsImpl(format2, index, "months");
}
function listMonthsShort(format2, index) {
  return listMonthsImpl(format2, index, "monthsShort");
}
function listWeekdays(localeSorted, format2, index) {
  return listWeekdaysImpl(localeSorted, format2, index, "weekdays");
}
function listWeekdaysShort(localeSorted, format2, index) {
  return listWeekdaysImpl(localeSorted, format2, index, "weekdaysShort");
}
function listWeekdaysMin(localeSorted, format2, index) {
  return listWeekdaysImpl(localeSorted, format2, index, "weekdaysMin");
}
getSetGlobalLocale("en", {
  eras: [
    {
      since: "0001-01-01",
      until: Infinity,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD"
    },
    {
      since: "0000-12-31",
      until: -Infinity,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC"
    }
  ],
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function(number) {
    var b2 = number % 10, output = toInt(number % 100 / 10) === 1 ? "th" : b2 === 1 ? "st" : b2 === 2 ? "nd" : b2 === 3 ? "rd" : "th";
    return number + output;
  }
});
hooks.lang = deprecate("moment.lang is deprecated. Use moment.locale instead.", getSetGlobalLocale);
hooks.langData = deprecate("moment.langData is deprecated. Use moment.localeData instead.", getLocale);
var mathAbs = Math.abs;
function abs() {
  var data = this._data;
  this._milliseconds = mathAbs(this._milliseconds);
  this._days = mathAbs(this._days);
  this._months = mathAbs(this._months);
  data.milliseconds = mathAbs(data.milliseconds);
  data.seconds = mathAbs(data.seconds);
  data.minutes = mathAbs(data.minutes);
  data.hours = mathAbs(data.hours);
  data.months = mathAbs(data.months);
  data.years = mathAbs(data.years);
  return this;
}
function addSubtract$1(duration, input, value, direction) {
  var other = createDuration(input, value);
  duration._milliseconds += direction * other._milliseconds;
  duration._days += direction * other._days;
  duration._months += direction * other._months;
  return duration._bubble();
}
function add$1(input, value) {
  return addSubtract$1(this, input, value, 1);
}
function subtract$1(input, value) {
  return addSubtract$1(this, input, value, -1);
}
function absCeil(number) {
  if (number < 0) {
    return Math.floor(number);
  } else {
    return Math.ceil(number);
  }
}
function bubble() {
  var milliseconds2 = this._milliseconds, days2 = this._days, months2 = this._months, data = this._data, seconds2, minutes2, hours2, years2, monthsFromDays;
  if (!(milliseconds2 >= 0 && days2 >= 0 && months2 >= 0 || milliseconds2 <= 0 && days2 <= 0 && months2 <= 0)) {
    milliseconds2 += absCeil(monthsToDays(months2) + days2) * 864e5;
    days2 = 0;
    months2 = 0;
  }
  data.milliseconds = milliseconds2 % 1e3;
  seconds2 = absFloor(milliseconds2 / 1e3);
  data.seconds = seconds2 % 60;
  minutes2 = absFloor(seconds2 / 60);
  data.minutes = minutes2 % 60;
  hours2 = absFloor(minutes2 / 60);
  data.hours = hours2 % 24;
  days2 += absFloor(hours2 / 24);
  monthsFromDays = absFloor(daysToMonths(days2));
  months2 += monthsFromDays;
  days2 -= absCeil(monthsToDays(monthsFromDays));
  years2 = absFloor(months2 / 12);
  months2 %= 12;
  data.days = days2;
  data.months = months2;
  data.years = years2;
  return this;
}
function daysToMonths(days2) {
  return days2 * 4800 / 146097;
}
function monthsToDays(months2) {
  return months2 * 146097 / 4800;
}
function as(units) {
  if (!this.isValid()) {
    return NaN;
  }
  var days2, months2, milliseconds2 = this._milliseconds;
  units = normalizeUnits(units);
  if (units === "month" || units === "quarter" || units === "year") {
    days2 = this._days + milliseconds2 / 864e5;
    months2 = this._months + daysToMonths(days2);
    switch (units) {
      case "month":
        return months2;
      case "quarter":
        return months2 / 3;
      case "year":
        return months2 / 12;
    }
  } else {
    days2 = this._days + Math.round(monthsToDays(this._months));
    switch (units) {
      case "week":
        return days2 / 7 + milliseconds2 / 6048e5;
      case "day":
        return days2 + milliseconds2 / 864e5;
      case "hour":
        return days2 * 24 + milliseconds2 / 36e5;
      case "minute":
        return days2 * 1440 + milliseconds2 / 6e4;
      case "second":
        return days2 * 86400 + milliseconds2 / 1e3;
      case "millisecond":
        return Math.floor(days2 * 864e5) + milliseconds2;
      default:
        throw new Error("Unknown unit " + units);
    }
  }
}
function valueOf$1() {
  if (!this.isValid()) {
    return NaN;
  }
  return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;
}
function makeAs(alias) {
  return function() {
    return this.as(alias);
  };
}
var asMilliseconds = makeAs("ms"), asSeconds = makeAs("s"), asMinutes = makeAs("m"), asHours = makeAs("h"), asDays = makeAs("d"), asWeeks = makeAs("w"), asMonths = makeAs("M"), asQuarters = makeAs("Q"), asYears = makeAs("y");
function clone$1() {
  return createDuration(this);
}
function get$2(units) {
  units = normalizeUnits(units);
  return this.isValid() ? this[units + "s"]() : NaN;
}
function makeGetter(name) {
  return function() {
    return this.isValid() ? this._data[name] : NaN;
  };
}
var milliseconds = makeGetter("milliseconds"), seconds = makeGetter("seconds"), minutes = makeGetter("minutes"), hours = makeGetter("hours"), days = makeGetter("days"), months = makeGetter("months"), years = makeGetter("years");
function weeks() {
  return absFloor(this.days() / 7);
}
var round = Math.round, thresholds = {
  ss: 44,
  s: 45,
  m: 45,
  h: 22,
  d: 26,
  w: null,
  M: 11
};
function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale2) {
  return locale2.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
}
function relativeTime$1(posNegDuration, withoutSuffix, thresholds2, locale2) {
  var duration = createDuration(posNegDuration).abs(), seconds2 = round(duration.as("s")), minutes2 = round(duration.as("m")), hours2 = round(duration.as("h")), days2 = round(duration.as("d")), months2 = round(duration.as("M")), weeks2 = round(duration.as("w")), years2 = round(duration.as("y")), a2 = seconds2 <= thresholds2.ss && ["s", seconds2] || seconds2 < thresholds2.s && ["ss", seconds2] || minutes2 <= 1 && ["m"] || minutes2 < thresholds2.m && ["mm", minutes2] || hours2 <= 1 && ["h"] || hours2 < thresholds2.h && ["hh", hours2] || days2 <= 1 && ["d"] || days2 < thresholds2.d && ["dd", days2];
  if (thresholds2.w != null) {
    a2 = a2 || weeks2 <= 1 && ["w"] || weeks2 < thresholds2.w && ["ww", weeks2];
  }
  a2 = a2 || months2 <= 1 && ["M"] || months2 < thresholds2.M && ["MM", months2] || years2 <= 1 && ["y"] || ["yy", years2];
  a2[2] = withoutSuffix;
  a2[3] = +posNegDuration > 0;
  a2[4] = locale2;
  return substituteTimeAgo.apply(null, a2);
}
function getSetRelativeTimeRounding(roundingFunction) {
  if (roundingFunction === void 0) {
    return round;
  }
  if (typeof roundingFunction === "function") {
    round = roundingFunction;
    return true;
  }
  return false;
}
function getSetRelativeTimeThreshold(threshold, limit) {
  if (thresholds[threshold] === void 0) {
    return false;
  }
  if (limit === void 0) {
    return thresholds[threshold];
  }
  thresholds[threshold] = limit;
  if (threshold === "s") {
    thresholds.ss = limit - 1;
  }
  return true;
}
function humanize(argWithSuffix, argThresholds) {
  if (!this.isValid()) {
    return this.localeData().invalidDate();
  }
  var withSuffix = false, th2 = thresholds, locale2, output;
  if (typeof argWithSuffix === "object") {
    argThresholds = argWithSuffix;
    argWithSuffix = false;
  }
  if (typeof argWithSuffix === "boolean") {
    withSuffix = argWithSuffix;
  }
  if (typeof argThresholds === "object") {
    th2 = Object.assign({}, thresholds, argThresholds);
    if (argThresholds.s != null && argThresholds.ss == null) {
      th2.ss = argThresholds.s - 1;
    }
  }
  locale2 = this.localeData();
  output = relativeTime$1(this, !withSuffix, th2, locale2);
  if (withSuffix) {
    output = locale2.pastFuture(+this, output);
  }
  return locale2.postformat(output);
}
var abs$1 = Math.abs;
function sign(x2) {
  return (x2 > 0) - (x2 < 0) || +x2;
}
function toISOString$1() {
  if (!this.isValid()) {
    return this.localeData().invalidDate();
  }
  var seconds2 = abs$1(this._milliseconds) / 1e3, days2 = abs$1(this._days), months2 = abs$1(this._months), minutes2, hours2, years2, s2, total = this.asSeconds(), totalSign, ymSign, daysSign, hmsSign;
  if (!total) {
    return "P0D";
  }
  minutes2 = absFloor(seconds2 / 60);
  hours2 = absFloor(minutes2 / 60);
  seconds2 %= 60;
  minutes2 %= 60;
  years2 = absFloor(months2 / 12);
  months2 %= 12;
  s2 = seconds2 ? seconds2.toFixed(3).replace(/\.?0+$/, "") : "";
  totalSign = total < 0 ? "-" : "";
  ymSign = sign(this._months) !== sign(total) ? "-" : "";
  daysSign = sign(this._days) !== sign(total) ? "-" : "";
  hmsSign = sign(this._milliseconds) !== sign(total) ? "-" : "";
  return totalSign + "P" + (years2 ? ymSign + years2 + "Y" : "") + (months2 ? ymSign + months2 + "M" : "") + (days2 ? daysSign + days2 + "D" : "") + (hours2 || minutes2 || seconds2 ? "T" : "") + (hours2 ? hmsSign + hours2 + "H" : "") + (minutes2 ? hmsSign + minutes2 + "M" : "") + (seconds2 ? hmsSign + s2 + "S" : "");
}
var proto$2 = Duration.prototype;
proto$2.isValid = isValid$1;
proto$2.abs = abs;
proto$2.add = add$1;
proto$2.subtract = subtract$1;
proto$2.as = as;
proto$2.asMilliseconds = asMilliseconds;
proto$2.asSeconds = asSeconds;
proto$2.asMinutes = asMinutes;
proto$2.asHours = asHours;
proto$2.asDays = asDays;
proto$2.asWeeks = asWeeks;
proto$2.asMonths = asMonths;
proto$2.asQuarters = asQuarters;
proto$2.asYears = asYears;
proto$2.valueOf = valueOf$1;
proto$2._bubble = bubble;
proto$2.clone = clone$1;
proto$2.get = get$2;
proto$2.milliseconds = milliseconds;
proto$2.seconds = seconds;
proto$2.minutes = minutes;
proto$2.hours = hours;
proto$2.days = days;
proto$2.weeks = weeks;
proto$2.months = months;
proto$2.years = years;
proto$2.humanize = humanize;
proto$2.toISOString = toISOString$1;
proto$2.toString = toISOString$1;
proto$2.toJSON = toISOString$1;
proto$2.locale = locale;
proto$2.localeData = localeData;
proto$2.toIsoString = deprecate("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", toISOString$1);
proto$2.lang = lang;
addFormatToken("X", 0, 0, "unix");
addFormatToken("x", 0, 0, "valueOf");
addRegexToken("x", matchSigned);
addRegexToken("X", matchTimestamp);
addParseToken("X", function(input, array, config) {
  config._d = new Date(parseFloat(input) * 1e3);
});
addParseToken("x", function(input, array, config) {
  config._d = new Date(toInt(input));
});
//! moment.js
hooks.version = "2.29.3";
setHookCallback(createLocal);
hooks.fn = proto;
hooks.min = min;
hooks.max = max;
hooks.now = now;
hooks.utc = createUTC;
hooks.unix = createUnix;
hooks.months = listMonths;
hooks.isDate = isDate;
hooks.locale = getSetGlobalLocale;
hooks.invalid = createInvalid;
hooks.duration = createDuration;
hooks.isMoment = isMoment;
hooks.weekdays = listWeekdays;
hooks.parseZone = createInZone;
hooks.localeData = getLocale;
hooks.isDuration = isDuration;
hooks.monthsShort = listMonthsShort;
hooks.weekdaysMin = listWeekdaysMin;
hooks.defineLocale = defineLocale;
hooks.updateLocale = updateLocale;
hooks.locales = listLocales;
hooks.weekdaysShort = listWeekdaysShort;
hooks.normalizeUnits = normalizeUnits;
hooks.relativeTimeRounding = getSetRelativeTimeRounding;
hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
hooks.calendarFormat = getCalendarFormat;
hooks.prototype = proto;
hooks.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  DATE: "YYYY-MM-DD",
  TIME: "HH:mm",
  TIME_SECONDS: "HH:mm:ss",
  TIME_MS: "HH:mm:ss.SSS",
  WEEK: "GGGG-[W]WW",
  MONTH: "YYYY-MM"
};
const FailedIcon = () => /* @__PURE__ */ jsx("div", {
  title: "alert icon",
  className: "inline-svg inline-history-icon inline-history-icon--alert ember-view",
  children: /* @__PURE__ */ jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "12",
    viewBox: "0 0 16 12",
    children: /* @__PURE__ */ jsxs("g", {
      fill: "#999",
      fillRule: "evenodd",
      children: [/* @__PURE__ */ jsx("path", {
        d: "M7.845 2.227L3.377 9.79c-.166.28-.205.21.126.21h8.994c.335 0 .293.073.126-.21L8.155 2.227c-.173-.292-.137-.292-.31 0zm-.86-.508c.56-.95 1.472-.946 2.03 0l4.47 7.562c.56.95.121 1.719-.988 1.719H3.503c-1.106 0-1.546-.773-.987-1.719L6.984 1.72z"
      }), /* @__PURE__ */ jsx("path", {
        d: "M7.5 8h1v1h-1zM7.5 4.5h1V7h-1z"
      })]
    })
  })
});
const TransactionItem = (props) => {
  const {
    transaction
  } = props;
  const user = useAppSelector((state) => state.user);
  if (!(transaction && user))
    return null;
  const {
    sender,
    receiver,
    createdAt,
    value,
    status
  } = transaction;
  const other = sender.cashTag === user.cashTag ? receiver : sender;
  return /* @__PURE__ */ jsxs("div", {
    className: "activity-list-content flex-container flex-h",
    children: [/* @__PURE__ */ jsx(UserAvatar, {
      user: other,
      fontSize: 16
    }), /* @__PURE__ */ jsxs("div", {
      className: "title-and-subtitle",
      children: [/* @__PURE__ */ jsx("div", {
        className: "title truncate-text",
        children: formatName(other)
      }), /* @__PURE__ */ jsxs("div", {
        className: "subtitle truncate-text",
        children: [status === "failed" && /* @__PURE__ */ jsx(FailedIcon, {}), capitalize(status)]
      })]
    }), /* @__PURE__ */ jsx("div", {
      className: "date",
      children: hooks(createdAt).fromNow()
    }), /* @__PURE__ */ jsx("div", {
      className: "action-amount",
      children: /* @__PURE__ */ jsx("span", {
        className: classnames("amount", {
          "amount-treatment-strikethrough": status === "failed"
        }),
        children: formatBalance({
          balance: value
        })
      })
    })]
  });
};
const TransactionList = (props) => {
  const {
    transactions,
    handleClick
  } = props;
  return /* @__PURE__ */ jsxs("div", {
    className: "activity-list-component ember-view",
    children: [/* @__PURE__ */ jsxs("h2", {
      className: "account-module-header activity-title activity-column",
      children: [(transactions == null ? void 0 : transactions.length) ? `${transactions.length} ` : "", "Transactions"]
    }), /* @__PURE__ */ jsx("ul", {
      className: "activity-list",
      children: (transactions == null ? void 0 : transactions.length) === 0 ? /* @__PURE__ */ jsx("div", {
        className: "empty-message-section activity-column",
        children: /* @__PURE__ */ jsx("p", {
          className: "empty-message",
          children: "No results found."
        })
      }) : transactions.map((tx, idx) => /* @__PURE__ */ jsx("li", {
        className: "activity-list-item ember-view",
        onClick: handleClick(idx),
        children: /* @__PURE__ */ jsx(TransactionItem, {
          transaction: tx
        }, tx.id)
      }, tx.id))
    })]
  });
};
const Refunded = () => /* @__PURE__ */ jsxs("p", {
  className: "receipt-status ",
  children: [/* @__PURE__ */ jsx("div", {
    className: "inline-svg receipt-status-icon error ember-view",
    style: {
      backgroundColor: "rgb(248, 64, 73)"
    },
    children: /* @__PURE__ */ jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ jsx("path", {
        fill: "#FFF",
        d: "M7 11h10v2H7z",
        fillRule: "evenodd"
      })
    })
  }), "For your protection, this payment was refunded"]
});
const ReceiptTable = ({
  value,
  id: id2,
  receiver,
  sender
}) => /* @__PURE__ */ jsxs("dl", {
  className: "receipt-table",
  children: [/* @__PURE__ */ jsx("dt", {
    className: "receipt-label",
    children: "Amount"
  }), /* @__PURE__ */ jsx("dd", {
    className: "receipt-value",
    children: formatDollars(value)
  }), /* @__PURE__ */ jsx("dt", {
    className: "receipt-label",
    children: "Identifier"
  }), /* @__PURE__ */ jsxs("dd", {
    className: "receipt-value",
    children: ["#", id2]
  }), /* @__PURE__ */ jsx("dt", {
    className: "receipt-label",
    children: "To"
  }), /* @__PURE__ */ jsx("dd", {
    className: "receipt-value",
    children: formatName(receiver)
  }), /* @__PURE__ */ jsx("dt", {
    className: "receipt-label",
    children: "From"
  }), /* @__PURE__ */ jsx("dd", {
    className: "receipt-value",
    children: formatName(sender)
  })]
});
const TransactionItemModal = React.forwardRef((props, ref) => {
  const {
    transaction
  } = props;
  const user = useAppSelector((state) => state.user);
  if (!(transaction && user))
    return null;
  const {
    sender,
    receiver,
    note,
    createdAt,
    value,
    refunded
  } = transaction;
  const other = sender.cashTag === user.cashTag ? receiver : sender;
  const dir = other.cashTag === sender.cashTag ? "from" : "to";
  return /* @__PURE__ */ jsxs("div", {
    className: "modal-scroller fade-in show actionable ember-view",
    children: [/* @__PURE__ */ jsxs("div", {
      className: "modal-window flex-container flex-v activity-receipt-modal small ember-view",
      children: [/* @__PURE__ */ jsx("div", {
        ref,
        className: "modal-window-content content",
        children: /* @__PURE__ */ jsx("div", {
          className: "receipt-card ember-view",
          children: /* @__PURE__ */ jsxs("div", {
            className: "receipt-card-wrapper",
            children: [/* @__PURE__ */ jsxs("div", {
              className: "customer-profile-simple ember-view",
              children: [/* @__PURE__ */ jsx(UserAvatar, {
                user: other,
                fontSize: 30
              }), /* @__PURE__ */ jsxs("div", {
                className: "profile-name",
                children: [/* @__PURE__ */ jsx("h3", {
                  className: "display-name display-name-with-icon ember-view",
                  children: /* @__PURE__ */ jsx("span", {
                    className: "name ",
                    children: formatName(other)
                  })
                }), /* @__PURE__ */ jsxs("div", {
                  className: "cashtag",
                  children: ["Payment ", dir, " ", formatCashTag(other)]
                })]
              })]
            }), /* @__PURE__ */ jsxs("div", {
              className: "receipt-amount",
              children: [/* @__PURE__ */ jsx("h1", {
                className: "display-amount amount-treatment-faded",
                children: formatDollars(value)
              }), /* @__PURE__ */ jsxs("ul", {
                className: "detail-view-content",
                children: [/* @__PURE__ */ jsx("li", {
                  className: "detail-view-content-item",
                  children: note && `For ${note}`
                }), /* @__PURE__ */ jsx("li", {
                  className: "detail-view-content-item",
                  children: hooks(createdAt).fromNow()
                })]
              })]
            }), refunded && /* @__PURE__ */ jsx(Refunded, {}), /* @__PURE__ */ jsx(ReceiptTable, __spreadValues2({}, transaction))]
          })
        })
      }), /* @__PURE__ */ jsx("div", {
        className: "modal-dialog-action-bar empty "
      }), /* @__PURE__ */ jsx("div", {
        className: "spinner-container ember-view"
      })]
    }), /* @__PURE__ */ jsx("div", {
      className: "sqc-close-button ember-view",
      children: /* @__PURE__ */ jsx("i", {
        className: "sqc-close-button-icon"
      })
    })]
  });
});
const NoTransactions = (props) => {
  const {
    setShowModal
  } = props;
  return /* @__PURE__ */ jsxs("div", {
    className: "activity-no-results flex-container flex-v-center",
    children: [/* @__PURE__ */ jsx("div", {
      className: "inline-svg ember-view",
      children: /* @__PURE__ */ jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 84 84",
        children: [/* @__PURE__ */ jsx("path", {
          d: "M80 42c0 20.949-17.051 38-38 38S4 62.949 4 42 21.051 4 42 4s38 17.051 38 38zm4 0C84 18.842 65.158 0 42 0S0 18.842 0 42s18.842 42 42 42 42-18.842 42-42z"
        }), /* @__PURE__ */ jsx("path", {
          d: "M40 22V46.865l1.075.56 16 8.348 1.85-3.546-16-8.348L44 45.652V22h-4z"
        })]
      })
    }), /* @__PURE__ */ jsx("h3", {
      className: "title",
      children: "No Activity Yet"
    }), /* @__PURE__ */ jsx("a", {
      onClick: () => setShowModal(true),
      className: "initiate-payment",
      children: "Create a Payment"
    })]
  });
};
const Transactions = (props) => {
  const {
    setShowModal,
    searchTerm
  } = props;
  const [selected, setSelected] = React.useState(-1);
  const $modal = React.useRef(null);
  const userId = useAppSelector((state) => {
    var _a;
    return (_a = state.auth) == null ? void 0 : _a.userId;
  });
  const {
    data: allTransactions,
    isLoading
  } = useGetTransactionsQuery({
    userId
  });
  useOutsideClick($modal, () => setSelected(-1));
  const handleClick = (idx) => (e2) => {
    e2.preventDefault();
    setSelected(idx);
  };
  if (isLoading)
    return null;
  const term = searchTerm.toLocaleLowerCase();
  const num = parseInt(searchTerm);
  const transactions = !(searchTerm == null ? void 0 : searchTerm.length) ? allTransactions : allTransactions.filter((x2) => {
    if (num)
      return x2.value <= num;
    return x2.note.toLocaleLowerCase().indexOf(term) !== -1 || x2.receiver.name.toLocaleLowerCase().indexOf(term) !== -1 || x2.sender.name.toLocaleLowerCase().indexOf(term) !== -1;
  });
  return /* @__PURE__ */ jsxs("div", {
    className: "vertical-scroll-container activity-list-container flex-fill ember-view",
    children: [/* @__PURE__ */ jsx("div", {
      className: "activity-list-sections ember-view",
      children: !(allTransactions == null ? void 0 : allTransactions.length) ? /* @__PURE__ */ jsx(NoTransactions, {
        setShowModal
      }) : /* @__PURE__ */ jsx(TransactionList, {
        transactions,
        handleClick
      })
    }), /* @__PURE__ */ jsxs("div", {
      className: "modal-manager ember-view",
      children: [/* @__PURE__ */ jsx("div", {
        className: classnames("modal-overlay", {
          show: selected !== -1
        })
      }), selected !== -1 && /* @__PURE__ */ jsx(TransactionItemModal, {
        ref: $modal,
        transaction: transactions[selected]
      })]
    })]
  });
};
const ActivityPage = (props) => {
  const {
    setShowModal
  } = useSetShowModal();
  const [searchTerm, setSearchTerm] = React.useState("");
  return /* @__PURE__ */ jsxs("section", {
    className: "activity-history",
    children: [/* @__PURE__ */ jsx(ActivityHeader, __spreadValues2({
      searchTerm,
      setSearchTerm
    }, props)), /* @__PURE__ */ jsx(Transactions, __spreadValues2({
      searchTerm,
      setShowModal
    }, props))]
  });
};
var assertString = { exports: {} };
(function(module2, exports2) {
  Object.defineProperty(exports2, "__esModule", {
    value: true
  });
  exports2.default = assertString2;
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof2(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function _typeof2(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  function assertString2(input) {
    var isString2 = typeof input === "string" || input instanceof String;
    if (!isString2) {
      var invalidType = _typeof(input);
      if (input === null)
        invalidType = "null";
      else if (invalidType === "object")
        invalidType = input.constructor.name;
      throw new TypeError("Expected a string but received a ".concat(invalidType));
    }
  }
  module2.exports = exports2.default;
  module2.exports.default = exports2.default;
})(assertString, assertString.exports);
var merge = { exports: {} };
(function(module2, exports2) {
  Object.defineProperty(exports2, "__esModule", {
    value: true
  });
  exports2.default = merge2;
  function merge2() {
    var obj = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var defaults2 = arguments.length > 1 ? arguments[1] : void 0;
    for (var key in defaults2) {
      if (typeof obj[key] === "undefined") {
        obj[key] = defaults2[key];
      }
    }
    return obj;
  }
  module2.exports = exports2.default;
  module2.exports.default = exports2.default;
})(merge, merge.exports);
var isByteLength = { exports: {} };
(function(module2, exports2) {
  Object.defineProperty(exports2, "__esModule", {
    value: true
  });
  exports2.default = isByteLength2;
  var _assertString = _interopRequireDefault(assertString.exports);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof2(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function _typeof2(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  function isByteLength2(str, options) {
    (0, _assertString.default)(str);
    var min2;
    var max2;
    if (_typeof(options) === "object") {
      min2 = options.min || 0;
      max2 = options.max;
    } else {
      min2 = arguments[1];
      max2 = arguments[2];
    }
    var len = encodeURI(str).split(/%..|./).length - 1;
    return len >= min2 && (typeof max2 === "undefined" || len <= max2);
  }
  module2.exports = exports2.default;
  module2.exports.default = exports2.default;
})(isByteLength, isByteLength.exports);
var isEmail$1 = { exports: {} };
var isFQDN = { exports: {} };
(function(module2, exports2) {
  Object.defineProperty(exports2, "__esModule", {
    value: true
  });
  exports2.default = isFQDN2;
  var _assertString = _interopRequireDefault(assertString.exports);
  var _merge = _interopRequireDefault(merge.exports);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var default_fqdn_options = {
    require_tld: true,
    allow_underscores: false,
    allow_trailing_dot: false,
    allow_numeric_tld: false,
    allow_wildcard: false
  };
  function isFQDN2(str, options) {
    (0, _assertString.default)(str);
    options = (0, _merge.default)(options, default_fqdn_options);
    if (options.allow_trailing_dot && str[str.length - 1] === ".") {
      str = str.substring(0, str.length - 1);
    }
    if (options.allow_wildcard === true && str.indexOf("*.") === 0) {
      str = str.substring(2);
    }
    var parts = str.split(".");
    var tld = parts[parts.length - 1];
    if (options.require_tld) {
      if (parts.length < 2) {
        return false;
      }
      if (!/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
        return false;
      }
      if (/\s/.test(tld)) {
        return false;
      }
    }
    if (!options.allow_numeric_tld && /^\d+$/.test(tld)) {
      return false;
    }
    return parts.every(function(part) {
      if (part.length > 63) {
        return false;
      }
      if (!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(part)) {
        return false;
      }
      if (/[\uff01-\uff5e]/.test(part)) {
        return false;
      }
      if (/^-|-$/.test(part)) {
        return false;
      }
      if (!options.allow_underscores && /_/.test(part)) {
        return false;
      }
      return true;
    });
  }
  module2.exports = exports2.default;
  module2.exports.default = exports2.default;
})(isFQDN, isFQDN.exports);
var isIP = { exports: {} };
(function(module2, exports2) {
  Object.defineProperty(exports2, "__esModule", {
    value: true
  });
  exports2.default = isIP2;
  var _assertString = _interopRequireDefault(assertString.exports);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var IPv4SegmentFormat = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])";
  var IPv4AddressFormat = "(".concat(IPv4SegmentFormat, "[.]){3}").concat(IPv4SegmentFormat);
  var IPv4AddressRegExp = new RegExp("^".concat(IPv4AddressFormat, "$"));
  var IPv6SegmentFormat = "(?:[0-9a-fA-F]{1,4})";
  var IPv6AddressRegExp = new RegExp("^(" + "(?:".concat(IPv6SegmentFormat, ":){7}(?:").concat(IPv6SegmentFormat, "|:)|") + "(?:".concat(IPv6SegmentFormat, ":){6}(?:").concat(IPv4AddressFormat, "|:").concat(IPv6SegmentFormat, "|:)|") + "(?:".concat(IPv6SegmentFormat, ":){5}(?::").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,2}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){4}(?:(:").concat(IPv6SegmentFormat, "){0,1}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,3}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){3}(?:(:").concat(IPv6SegmentFormat, "){0,2}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,4}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){2}(?:(:").concat(IPv6SegmentFormat, "){0,3}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,5}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){1}(?:(:").concat(IPv6SegmentFormat, "){0,4}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,6}|:)|") + "(?::((?::".concat(IPv6SegmentFormat, "){0,5}:").concat(IPv4AddressFormat, "|(?::").concat(IPv6SegmentFormat, "){1,7}|:))") + ")(%[0-9a-zA-Z-.:]{1,})?$");
  function isIP2(str) {
    var version = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    (0, _assertString.default)(str);
    version = String(version);
    if (!version) {
      return isIP2(str, 4) || isIP2(str, 6);
    }
    if (version === "4") {
      if (!IPv4AddressRegExp.test(str)) {
        return false;
      }
      var parts = str.split(".").sort(function(a2, b2) {
        return a2 - b2;
      });
      return parts[3] <= 255;
    }
    if (version === "6") {
      return !!IPv6AddressRegExp.test(str);
    }
    return false;
  }
  module2.exports = exports2.default;
  module2.exports.default = exports2.default;
})(isIP, isIP.exports);
(function(module2, exports2) {
  Object.defineProperty(exports2, "__esModule", {
    value: true
  });
  exports2.default = isEmail2;
  var _assertString = _interopRequireDefault(assertString.exports);
  var _merge = _interopRequireDefault(merge.exports);
  var _isByteLength = _interopRequireDefault(isByteLength.exports);
  var _isFQDN = _interopRequireDefault(isFQDN.exports);
  var _isIP = _interopRequireDefault(isIP.exports);
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var default_email_options = {
    allow_display_name: false,
    require_display_name: false,
    allow_utf8_local_part: true,
    require_tld: true,
    blacklisted_chars: "",
    ignore_max_length: false,
    host_blacklist: []
  };
  var splitNameAddress = /^([^\x00-\x1F\x7F-\x9F\cX]+)</i;
  var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
  var gmailUserPart = /^[a-z\d]+$/;
  var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
  var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
  var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
  var defaultMaxEmailLength = 254;
  function validateDisplayName(display_name) {
    var display_name_without_quotes = display_name.replace(/^"(.+)"$/, "$1");
    if (!display_name_without_quotes.trim()) {
      return false;
    }
    var contains_illegal = /[\.";<>]/.test(display_name_without_quotes);
    if (contains_illegal) {
      if (display_name_without_quotes === display_name) {
        return false;
      }
      var all_start_with_back_slash = display_name_without_quotes.split('"').length === display_name_without_quotes.split('\\"').length;
      if (!all_start_with_back_slash) {
        return false;
      }
    }
    return true;
  }
  function isEmail2(str, options) {
    (0, _assertString.default)(str);
    options = (0, _merge.default)(options, default_email_options);
    if (options.require_display_name || options.allow_display_name) {
      var display_email = str.match(splitNameAddress);
      if (display_email) {
        var display_name = display_email[1];
        str = str.replace(display_name, "").replace(/(^<|>$)/g, "");
        if (display_name.endsWith(" ")) {
          display_name = display_name.substr(0, display_name.length - 1);
        }
        if (!validateDisplayName(display_name)) {
          return false;
        }
      } else if (options.require_display_name) {
        return false;
      }
    }
    if (!options.ignore_max_length && str.length > defaultMaxEmailLength) {
      return false;
    }
    var parts = str.split("@");
    var domain = parts.pop();
    var lower_domain = domain.toLowerCase();
    if (options.host_blacklist.includes(lower_domain)) {
      return false;
    }
    var user = parts.join("@");
    if (options.domain_specific_validation && (lower_domain === "gmail.com" || lower_domain === "googlemail.com")) {
      user = user.toLowerCase();
      var username = user.split("+")[0];
      if (!(0, _isByteLength.default)(username.replace(/\./g, ""), {
        min: 6,
        max: 30
      })) {
        return false;
      }
      var _user_parts = username.split(".");
      for (var i2 = 0; i2 < _user_parts.length; i2++) {
        if (!gmailUserPart.test(_user_parts[i2])) {
          return false;
        }
      }
    }
    if (options.ignore_max_length === false && (!(0, _isByteLength.default)(user, {
      max: 64
    }) || !(0, _isByteLength.default)(domain, {
      max: 254
    }))) {
      return false;
    }
    if (!(0, _isFQDN.default)(domain, {
      require_tld: options.require_tld
    })) {
      if (!options.allow_ip_domain) {
        return false;
      }
      if (!(0, _isIP.default)(domain)) {
        if (!domain.startsWith("[") || !domain.endsWith("]")) {
          return false;
        }
        var noBracketdomain = domain.substr(1, domain.length - 2);
        if (noBracketdomain.length === 0 || !(0, _isIP.default)(noBracketdomain)) {
          return false;
        }
      }
    }
    if (user[0] === '"') {
      user = user.slice(1, user.length - 1);
      return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
    }
    var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;
    var user_parts = user.split(".");
    for (var _i = 0; _i < user_parts.length; _i++) {
      if (!pattern.test(user_parts[_i])) {
        return false;
      }
    }
    if (options.blacklisted_chars) {
      if (user.search(new RegExp("[".concat(options.blacklisted_chars, "]+"), "g")) !== -1)
        return false;
    }
    return true;
  }
  module2.exports = exports2.default;
  module2.exports.default = exports2.default;
})(isEmail$1, isEmail$1.exports);
var isEmailValidator = /* @__PURE__ */ getDefaultExportFromCjs(isEmail$1.exports);
function isEmail(value, options) {
  return typeof value === "string" && isEmailValidator(value, options);
}
const testCreds = {
  identifier: "cashappclone1@gmail.com",
  password: "asdf"
};
const TestLogin = (props) => {
  const {
    setInput
  } = props;
  const location = useLocation();
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const handleLogin = async (e2) => {
    var _a, _b;
    e2.preventDefault();
    setInput("");
    for (let i2 = 0; i2 < testCreds.identifier.length; i2++) {
      setInput(testCreds.identifier.slice(0, i2 + 1));
      await sitFor(40);
    }
    await login(testCreds).unwrap();
    navigate(((_b = (_a = location.state) == null ? void 0 : _a.from) == null ? void 0 : _b.pathname) || "/account/activity");
  };
  return /* @__PURE__ */ jsx("button", {
    onClick: handleLogin,
    className: "w-[400px] button theme-button",
    children: "Sign in as test user"
  });
};
const steps = [{
  title: () => /* @__PURE__ */ jsx(Fragment, {
    children: "Sign in to Cash App"
  }),
  invalid: () => /* @__PURE__ */ jsx(Fragment, {
    children: "Invalid email address or SMS number"
  }),
  placeholder: "Email or Mobile Number",
  buttonText: "Request Sign In Code"
}, {
  title: (email) => /* @__PURE__ */ jsxs(Fragment, {
    children: ["Cool! We sent a code to ", /* @__PURE__ */ jsx("span", {
      className: "wrap-together",
      children: email
    })]
  }),
  invalid: (email) => /* @__PURE__ */ jsxs(Fragment, {
    children: ["That doesn't look like the code we sent to ", email]
  }),
  placeholder: "Confirmation Code",
  buttonText: "Sign In"
}];
const cleanPhoneOrEmail = (txt) => txt.replaceAll(/[+ \t()-]/g, "");
const LoginPage = () => {
  const [stepNum, setStepNum] = React.useState(0);
  const [email, setEmail] = React.useState("");
  const [code, setCode] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [showSubmit, setShowSubmit] = React.useState(false);
  const [isInvalid, setIsInvalid] = React.useState(false);
  const [requestLoginCode] = useRequestLoginCodeMutation();
  const [loginPhoneOrEmail] = useLoginMutation();
  const location = useLocation();
  const navigate = useNavigate();
  useTheme(["theme-green"], ["theme-white", "theme-light-gray"]);
  const handleChange = useMemoizedFn((e2) => {
    let txt = cleanPhoneOrEmail(e2.target.value);
    if (isEmail(txt)) {
      !showSubmit && setShowSubmit(true);
    } else if (txt.length > 4 && /^[0-9]+$/.test(txt)) {
      txt = txt.slice(0, txt[0] === "1" ? 11 : 10);
      if (isPhoneNumber(txt))
        !showSubmit && setShowSubmit(true);
      else
        showSubmit && setShowSubmit(false);
      txt = formatPhoneNumber(txt);
    } else {
      showSubmit && setShowSubmit(false);
    }
    isInvalid && setIsInvalid(false);
    setEmail(txt);
  });
  const handleChangeCode = useMemoizedFn((e2) => {
    const txt = e2.target.value.replaceAll("-", "").slice(0, 12);
    let res = "";
    for (let i2 = 0; i2 < txt.length; i2 += 3) {
      if (res.length)
        res += "-";
      res += txt.slice(i2, i2 + 3);
    }
    setCode(res);
  });
  const handleSubmit = useMemoizedFn(async (e2) => {
    e2.preventDefault();
    try {
      if (stepNum === 1 && !showSubmit)
        throw new Error("invalid");
      await handleLogin();
    } catch (err) {
      console.error(err.message);
      setIsInvalid(true);
    }
  });
  const handleLogin = useMemoizedFn(async () => {
    var _a, _b;
    setIsSubmitting(true);
    try {
      if (stepNum === 0) {
        await requestLoginCode({
          identifier: cleanPhoneOrEmail(email)
        }).unwrap();
      } else {
        if (!(code == null ? void 0 : code.length))
          throw new Error("missing code");
        await loginPhoneOrEmail({
          identifier: cleanPhoneOrEmail(email),
          code: code.replaceAll("-", "")
        }).unwrap();
        navigate(((_b = (_a = location.state) == null ? void 0 : _a.from) == null ? void 0 : _b.pathname) || "/account/activity");
      }
      setStepNum(stepNum + 1);
      isInvalid && setIsInvalid(false);
    } catch (err) {
      console.error(err.message);
      !isInvalid && setIsInvalid(true);
    } finally {
      setIsSubmitting(false);
    }
  });
  const PhoneOrEmailInput = () => /* @__PURE__ */ jsx("div", {
    className: classnames("field fk-field-container", {
      "is-invalid": isInvalid
    }),
    children: /* @__PURE__ */ jsx("input", {
      type: "text",
      id: "phoneOrNumber",
      name: "phoneOrNumber",
      "aria-label": steps[stepNum].placeholder,
      autoComplete: "off",
      spellCheck: "false",
      autoCapitalize: "none",
      autoFocus: true,
      className: "!rounded mb-[16px] text-center ember-text-field text-black",
      placeholder: steps[stepNum].placeholder,
      onChange: handleChange,
      value: email
    })
  });
  const CodeInput = () => /* @__PURE__ */ jsx("div", {
    className: "field-container",
    children: /* @__PURE__ */ jsx("div", {
      className: "field",
      children: /* @__PURE__ */ jsx("div", {
        className: "field fk-field-container",
        children: /* @__PURE__ */ jsx("input", {
          type: "tel",
          id: "code",
          name: "code",
          "aria-label": steps[stepNum].placeholder,
          autoComplete: "off",
          spellCheck: "false",
          autoCapitalize: "off",
          autoFocus: true,
          className: "!rounded mb-[16px] text-center ember-text-field text-black",
          placeholder: steps[stepNum].placeholder,
          onChange: handleChangeCode,
          value: code
        })
      })
    })
  });
  return /* @__PURE__ */ jsx("div", {
    className: "!h-[100vh] application-cash",
    children: /* @__PURE__ */ jsxs("section", {
      className: "!h-full layout-login flex-container pad",
      children: [/* @__PURE__ */ jsx("div", {
        className: "w-full pt-[40px]",
        children: /* @__PURE__ */ jsx(TestLogin, {
          setInput: setEmail
        })
      }), /* @__PURE__ */ jsxs("div", {
        className: "login-container flex-container flex-v-center flex-fill",
        children: [/* @__PURE__ */ jsx("h1", {
          className: "step-title flex-static",
          children: isInvalid ? steps[stepNum].invalid(email) : steps[stepNum].title(email)
        }), /* @__PURE__ */ jsxs("form", {
          className: "w-full login-form",
          onSubmit: handleSubmit,
          children: [stepNum === 0 ? /* @__PURE__ */ jsx(PhoneOrEmailInput, {}) : /* @__PURE__ */ jsx(CodeInput, {}), /* @__PURE__ */ jsx("div", {
            className: classnames("alias-submit fade-in immediate mt-[14px]", {
              show: stepNum > 0 || showSubmit
            }),
            children: /* @__PURE__ */ jsxs("div", {
              className: "cta submit-button-component submit-button-with-spinner",
              children: [/* @__PURE__ */ jsx("button", {
                type: "submit",
                "aria-label": steps[stepNum].buttonText,
                className: "button theme-button button--round theme-button",
                children: steps[stepNum].buttonText
              }), /* @__PURE__ */ jsx("div", {
                className: "spinner-container"
              })]
            })
          })]
        }), stepNum > 0 && /* @__PURE__ */ jsx("a", {
          href: "#",
          className: "login-help-link fade-in immediate show",
          children: "Help"
        })]
      })]
    })
  });
};
var Landing = '<script type="text/javascript" nonce="">\n document.documentElement.style.setProperty("--vh", `${window.innerHeight}px`);\n\n<\/script>\n<main classname="landing-page">\n  <section data-chapter="intro">\n    <svg data-intro-logo="" viewBox="0 0 195 44" fill="none" style="opacity: 1; transform: translate(0px, 0px);">\n      <path d="M77.9858 17.353C77.8137 17.4574 77.6088 17.4936 77.4113 17.4547C77.2139 17.4158 77.0381 17.3044 76.9185 17.1425C76.3306 16.2985 75.5417 15.6143 74.6231 15.1515C73.7046 14.6887 72.6852 14.462 71.6571 14.4918C67.6484 14.4918 65.188 17.6636 65.188 22.1935C65.188 26.7233 67.6935 29.9553 71.7022 29.9553C72.744 29.9802 73.775 29.7387 74.6975 29.2538C75.6199 28.7689 76.4034 28.0566 76.9736 27.1843C77.0876 27.0203 77.259 26.9051 77.4539 26.8615C77.6487 26.8179 77.8529 26.849 78.0259 26.9488L79.93 28.0512C80.034 28.1039 80.1254 28.1784 80.198 28.2696C80.2706 28.3609 80.3227 28.4667 80.3507 28.5798C80.3788 28.693 80.3821 28.8109 80.3606 28.9254C80.339 29.04 80.293 29.1486 80.2257 29.2438C79.2948 30.639 78.0248 31.7751 76.5349 32.5455C75.045 33.3159 73.3838 33.6953 71.7072 33.6483C65.2983 33.6483 60.9539 28.9982 60.9539 22.2185C60.9539 15.4388 65.2983 10.8489 71.612 10.8489C73.2607 10.8031 74.8955 11.1619 76.3735 11.8939C77.8514 12.6259 79.1276 13.7088 80.0904 15.048C80.1565 15.1382 80.2035 15.241 80.2283 15.3501C80.2531 15.4591 80.2552 15.5721 80.2345 15.6821C80.2139 15.792 80.1708 15.8965 80.1081 15.9892C80.0454 16.0818 79.9643 16.1605 79.8699 16.2205L77.9858 17.353Z" fill="#00D54B"></path>\n      <path d="M91.996 32.4194V31.4974C90.9938 32.7902 89.5958 33.5919 87.3459 33.5919C84.0187 33.5919 81.7087 31.773 81.7087 28.581C81.7087 24.6074 85.2514 23.9259 87.4361 23.6203C89.7812 23.2795 91.7805 23.1192 91.7805 21.5859C91.7805 20.2279 90.2121 19.8621 88.8843 19.8621C87.36 19.8875 85.8625 20.2666 84.5098 20.9695C84.4159 21.0211 84.3125 21.0531 84.2059 21.0636C84.0993 21.0741 83.9917 21.0628 83.8896 21.0305C83.7874 20.9982 83.693 20.9455 83.6118 20.8755C83.5306 20.8056 83.4645 20.72 83.4174 20.6238L82.7309 19.1907C82.6391 19.005 82.6223 18.7912 82.6839 18.5934C82.7454 18.3956 82.8807 18.2291 83.0616 18.1284C84.9562 17.1198 87.0687 16.5899 89.215 16.585C93.0333 16.585 95.7291 18.1534 95.7291 21.9467V32.4194C95.7291 32.632 95.6446 32.8359 95.4943 32.9863C95.3439 33.1366 95.14 33.2211 94.9274 33.2211H92.8328C92.7246 33.2258 92.6166 33.2086 92.5152 33.1704C92.4139 33.1323 92.3213 33.074 92.2431 32.9991C92.1649 32.9241 92.1027 32.8341 92.0602 32.7345C92.0178 32.6349 91.9959 32.5277 91.996 32.4194V32.4194ZM91.7805 25.1787C91.0439 25.7349 89.686 25.9203 88.2379 26.1808C86.7897 26.4414 85.5871 26.8272 85.5871 28.4007C85.5871 29.8488 86.6344 30.5253 88.1477 30.5253C90.0267 30.5253 91.7805 29.478 91.7805 27.0427V25.1787Z" fill="#00D54B"></path>\n      <path d="M99.1716 29.0738C99.3067 28.9164 99.4976 28.8175 99.7041 28.7979C99.9106 28.7783 100.117 28.8395 100.279 28.9686C101.619 29.9803 103.261 30.51 104.939 30.4718C106.668 30.4718 107.946 29.9156 107.946 28.5627C107.946 27.33 106.773 27.0845 103.937 26.5884C100.93 26.0873 98.0542 25.0852 98.0542 21.6577C98.0542 18.085 101.136 16.5767 104.648 16.5767C106.851 16.5441 109.002 17.2497 110.757 18.581C110.842 18.6481 110.913 18.7319 110.966 18.8274C111.018 18.9228 111.05 19.0278 111.06 19.1361C111.071 19.2444 111.059 19.3537 111.026 19.4572C110.992 19.5608 110.938 19.6565 110.867 19.7386L109.865 20.9161C109.732 21.074 109.544 21.175 109.339 21.1983C109.134 21.2216 108.927 21.1655 108.762 21.0414C107.528 20.1382 106.033 19.66 104.503 19.6784C103.025 19.6784 101.732 20.1094 101.732 21.2769C101.732 22.5747 103.546 22.8202 105.365 23.1309C109.248 23.8074 111.714 24.9148 111.714 28.1418C111.714 31.5291 109.003 33.6237 104.699 33.6237C102.346 33.6956 100.042 32.9441 98.1845 31.4991C98.1011 31.4308 98.0322 31.3467 97.9817 31.2515C97.9313 31.1564 97.9002 31.0521 97.8904 30.9449C97.8806 30.8376 97.8923 30.7295 97.9247 30.6267C97.9571 30.524 98.0096 30.4288 98.0792 30.3466L99.1716 29.0738Z" fill="#00D54B"></path>\n      <path d="M114.094 32.4211V12.0269C114.094 11.8142 114.179 11.6103 114.329 11.4599C114.48 11.3096 114.683 11.2251 114.896 11.2251H117.206C117.419 11.2251 117.623 11.3096 117.773 11.4599C117.923 11.6103 118.008 11.8142 118.008 12.0269V18.992C118.583 18.2245 119.333 17.6057 120.196 17.1873C121.059 16.7689 122.01 16.563 122.969 16.5868C126.386 16.5868 128.39 19.022 128.39 22.4996V32.4211C128.39 32.6337 128.306 32.8377 128.156 32.988C128.005 33.1384 127.801 33.2228 127.589 33.2228H125.279C125.066 33.2228 124.862 33.1384 124.712 32.988C124.561 32.8377 124.477 32.6337 124.477 32.4211V23.4015C124.477 21.6728 123.921 20.1044 121.706 20.1044C119.606 20.1044 118.008 21.5826 118.008 24.0479V32.4261C118.008 32.6387 117.923 32.8427 117.773 32.993C117.623 33.1434 117.419 33.2278 117.206 33.2278H114.896C114.79 33.2285 114.685 33.2081 114.587 33.1677C114.489 33.1273 114.401 33.0679 114.326 32.9927C114.251 32.9176 114.192 32.8284 114.153 32.7302C114.113 32.6321 114.093 32.527 114.094 32.4211V32.4211Z" fill="#00D54B"></path>\n      <path d="M153.81 32.6842L152.147 27.7736H143.738L142.07 32.6842C142.016 32.8423 141.914 32.9796 141.779 33.0767C141.643 33.1738 141.48 33.2258 141.313 33.2254H138.602C138.473 33.2252 138.346 33.1939 138.232 33.1342C138.118 33.0745 138.02 32.9881 137.946 32.8824C137.872 32.7767 137.825 32.6547 137.808 32.5269C137.792 32.3991 137.806 32.2691 137.851 32.1481L145.422 11.7488C145.482 11.5994 145.586 11.4717 145.72 11.3823C145.855 11.2929 146.012 11.246 146.174 11.2477H149.877C150.041 11.2484 150.202 11.299 150.337 11.393C150.472 11.487 150.575 11.6198 150.633 11.7739L158.175 32.1681C158.219 32.2896 158.233 32.42 158.217 32.5482C158.2 32.6764 158.152 32.7987 158.078 32.9045C158.003 33.0103 157.905 33.0966 157.79 33.156C157.675 33.2154 157.547 33.246 157.418 33.2454H154.557C154.389 33.2416 154.227 33.1854 154.093 33.0848C153.959 32.9841 153.86 32.844 153.81 32.6842ZM147.987 14.8004L144.75 24.3511H151.099L147.987 14.8004Z" fill="#00D54B"></path>\n      <path d="M163.982 17.7586V19.0214C164.552 18.2333 165.307 17.5985 166.182 17.1735C167.056 16.7486 168.022 16.5468 168.993 16.5861C173.428 16.5861 176.294 20.254 176.294 25.0595C176.294 29.8649 173.428 33.5779 168.993 33.5779C168.019 33.6148 167.051 33.4087 166.176 32.9784C165.302 32.548 164.548 31.9068 163.982 31.1126V37.762C163.982 37.9746 163.898 38.1786 163.748 38.3289C163.597 38.4793 163.393 38.5638 163.181 38.5638H160.871C160.658 38.5638 160.454 38.4793 160.304 38.3289C160.153 38.1786 160.069 37.9746 160.069 37.762V17.7185C160.069 17.5059 160.153 17.302 160.304 17.1516C160.454 17.0013 160.658 16.9168 160.871 16.9168H163.181C163.289 16.9167 163.397 16.9387 163.497 16.9814C163.597 17.0242 163.687 17.0869 163.762 17.1656C163.837 17.2444 163.895 17.3375 163.933 17.4395C163.971 17.5414 163.988 17.65 163.982 17.7586ZM168.172 30.1756C170.882 30.1756 172.18 27.8605 172.18 25.0595C172.18 22.2584 170.857 20.0035 168.172 20.0035C165.486 20.0035 163.982 22.2534 163.982 25.0595C163.982 27.8655 165.411 30.1756 168.172 30.1756Z" fill="#00D54B"></path>\n      <path d="M182.623 17.7584V19.0212C183.193 18.2338 183.949 17.5994 184.823 17.1745C185.697 16.7497 186.663 16.5475 187.634 16.5859C192.074 16.5859 194.94 20.2538 194.94 25.0592C194.94 29.8647 192.074 33.5777 187.634 33.5777C186.66 33.6137 185.692 33.4072 184.818 32.9769C183.943 32.5467 183.189 31.906 182.623 31.1124V37.7618C182.623 37.9744 182.539 38.1784 182.388 38.3287C182.238 38.4791 182.034 38.5635 181.822 38.5635H179.512C179.299 38.5635 179.095 38.4791 178.945 38.3287C178.794 38.1784 178.71 37.9744 178.71 37.7618V17.7183C178.71 17.5057 178.794 17.3018 178.945 17.1514C179.095 17.0011 179.299 16.9166 179.512 16.9166H181.822C181.931 16.9157 182.038 16.9372 182.139 16.9798C182.239 17.0223 182.33 17.0849 182.405 17.1638C182.48 17.2427 182.538 17.3362 182.576 17.4385C182.613 17.5407 182.629 17.6496 182.623 17.7584V17.7584ZM186.817 30.1753C189.528 30.1753 190.826 27.8603 190.826 25.0592C190.826 22.2582 189.503 20.0033 186.817 20.0033C184.132 20.0033 182.623 22.2532 182.623 25.0592C182.623 27.8653 184.071 30.1753 186.817 30.1753Z" fill="#00D54B"></path>\n      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5341 0.762695C5.06793 0.762695 0.636719 5.19391 0.636719 10.6601V33.8055C0.636719 39.2717 5.06792 43.7029 10.5341 43.7029H33.4495C38.9157 43.7029 43.3469 39.2717 43.3469 33.8055V10.6601C43.3469 5.1939 38.9157 0.762695 33.4495 0.762695H10.5341ZM28.9311 16.7337C27.3008 15.3539 25.235 14.5953 23.0992 14.592C21.3395 14.592 19.5799 15.1752 19.5799 16.794C19.5799 18.2698 21.1466 18.8473 23.0766 19.5587C23.2637 19.6276 23.4543 19.6979 23.6472 19.7703C27.4631 21.0574 30.6053 22.636 30.6053 26.3765C30.6053 30.4388 27.453 33.214 22.2947 33.5307L21.8272 35.7077C21.7392 36.1143 21.3785 36.4037 20.9624 36.4015H17.7197C17.4544 36.395 17.2057 36.2712 17.0406 36.0635C16.8756 35.8557 16.8113 35.5854 16.865 35.3256L17.3678 33.028C15.4207 32.5315 13.6308 31.5509 12.1642 30.1774C11.9943 30.0134 11.8984 29.7875 11.8984 29.5514C11.8984 29.3153 11.9943 29.0894 12.1642 28.9255L13.9641 27.1659C14.3045 26.8311 14.8504 26.8311 15.1908 27.1659C16.8396 28.7389 19.0409 29.6003 21.3194 29.564C23.6673 29.564 25.261 28.5685 25.261 26.9899C25.261 25.5627 23.9543 25.0847 21.4745 24.1777C21.2114 24.0814 20.9351 23.9804 20.6457 23.8728C17.4582 22.7366 14.4417 21.1127 14.4417 17.337C14.4417 12.9681 18.0917 10.8364 22.3953 10.6252L22.8478 8.40808C22.9374 8.00529 23.2949 7.71889 23.7075 7.7193H26.9402C27.2036 7.71846 27.4533 7.83631 27.6201 8.04014C27.7868 8.24397 27.8529 8.51208 27.7999 8.77006L27.2972 11.2486C28.9429 11.7866 30.4679 12.6405 31.7868 13.7624C31.9686 13.9187 32.0768 14.1439 32.0854 14.3835C32.094 14.6231 32.0021 14.8554 31.832 15.0243L30.1528 16.7086C29.8166 17.0394 29.2806 17.0504 28.9311 16.7337Z" fill="#00D54B"></path>\n    </svg>\n    <svg data-eyeball="" data-intro-eyeball="" viewBox="0 0 222.87 126.67" style="opacity: 1; transform: translate(0px, 0px);">\n      <defs>\n        <style>\n         .cls-1 {\n           fill: none;\n         }\n\n         .cls-2 {\n           clip-path: url(#clip-path);\n         }\n\n         .cls-3 {\n           fill: #fff;\n         }\n\n         .cls-4 {}\n\n        </style>\n        <clipPath id="clip-path" data-svg-origin="116.10500532150269 67.58157392501832" style="transform-origin: 0px 0px;" transform="matrix(1,0,0,1,0,0)">\n          <path class="cls-1" d="M215.78,66.13C213.91,72,210.33,77,202.5,85.73l-4.64,5.15a55.26,55.26,0,0,0-3.65,4.43c-4,5.51-20.28,14.09-33.11,18.87a75.45,75.45,0,0,1-12.52,3.26l-6.23,1.09-16,2.76c-9.07,1.64-17.29,1.45-30.33-.14l-12.66-1.62c-1.24-.15-2.09-.22-3.3-.32l-.34,0c-6.09-.47-10.76-1.92-18.49-5.3l-5.63-2.49c-2.38-1-4.35-1.79-6.26-2.41l-.95-.3c-9.56-2.91-29.48-17.64-35.6-26.11l-.73-1c-3.2-4.73-5.35-8-7.39-14.76V64h0l1-3.25c1.8-5.63,5.18-10.5,12.39-18.69l5.95-6.65c1.52-1.73,2.38-2.79,3.23-4,4-5.53,20.26-14.14,33.08-18.94a71.78,71.78,0,0,1,11.21-3L75,8.87l20.1-3.48c9.47-1.71,18-1.43,32,.36L138.1,7.16c1.24.14,2.09.22,3.3.31l.34,0c5.72.45,10.2,1.76,17.15,4.74l7,3.08a66.55,66.55,0,0,0,7.2,2.72c9.56,2.92,29.46,17.7,35.57,26.21l.74,1.06c3.2,4.74,4.82,8.55,6.86,15.35l.65,2.24h0Z"></path>\n        </clipPath>\n      </defs>\n      <g id="Layer_2" data-name="Layer 2">\n        <g id="Layer_1-2" data-name="Layer 1">\n          <g id="eye">\n            <g class="cls-2">\n              <g id="eye-ball">\n                <path id="ball" class="cls-3" d="M216.45,66.12C214.58,72,211,77,203.17,85.73l-4.64,5.15c-1.79,2-2.73,3.15-3.66,4.42-4,5.51-20.27,14.09-33.1,18.87a74.74,74.74,0,0,1-12.52,3.26l-6.23,1.1-16,2.75c-9.08,1.64-17.3,1.45-30.33-.14L84,119.52c-1.24-.14-2.1-.21-3.31-.31l-.33,0c-6.09-.47-10.77-1.91-18.5-5.29l-5.63-2.49c-2.37-1-4.34-1.8-6.25-2.42l-1-.3c-9.57-2.9-29.48-17.63-35.6-26.1l-.74-1.06c-3.2-4.72-5.34-8-7.38-14.75V64h0l1-3.25C8.2,55.14,11.59,50.27,18.8,42.08l5.95-6.66c1.52-1.73,2.37-2.78,3.22-4,4-5.53,20.27-14.15,33.09-18.94a70.69,70.69,0,0,1,11.21-3l3.43-.65L95.8,5.39c9.46-1.72,18-1.44,32,.36l10.92,1.41c1.24.14,2.1.21,3.31.31l.33,0c5.73.44,10.2,1.75,17.15,4.73l7,3.08a68.43,68.43,0,0,0,7.2,2.73c9.56,2.92,29.47,17.7,35.58,26.2L210,45.3c3.19,4.74,4.81,8.56,6.86,15.36l.65,2.23h0Z"></path>\n                <g id="moving" data-svg-origin="160.76499801635742 64.47492106914521" style="transform-origin: 0px 0px;" transform="matrix(1,0,0,1,-32.2986,41.03552)">\n                  <path id="iris" class="cls-4" d="M80.27,9.4l2-.93a61.12,61.12,0,0,1,29.12-7.33h0a61.29,61.29,0,0,1,21.79,4l1.28.31c7.62,1.71,15.67,9.34,21.25,14,3.94,3.28,7.7,9.83,10.31,15,.32.62.64,1.26.94,1.9.67,1.38,1.23,2.6,1.66,3.53A38.59,38.59,0,0,1,171,47.31a61.6,61.6,0,0,1,1.73,10.16q.34,2.64.67,5.61c1.22,11.06-5.09,23.62-6.81,28.05S157,105.22,155.75,107s-14.39,10.37-15.6,11.45-12.76,4.81-14.61,5.34-16.69,1.7-18.81,1.7-18.23-4.91-19.63-5.6-10.46-5.67-12.3-6.58S65,104.16,64.06,103,55,89.55,54.26,88s-2.8-8.47-3.62-10.26-1.31-13.18-1.31-17.17a38.46,38.46,0,0,1,1.79-11.16c1.05-3.5,2.32-10.26,6.78-17.58a65,65,0,0,1,5.39-7.39,62.88,62.88,0,0,1,5.13-5.69C72.44,14.62,76.74,11,80.27,9.4Z"></path>\n                  <g id="pupil" data-svg-origin="189.99499755859375 92.99206634521485" style="transform-origin: 0px 0px;" transform="matrix(1.1,0,0,1.1,-18.9995,-9.29921)">\n                    <path id="Combined-Shape-Copy-2" d="M142.05,74.55l-.33.74a31.89,31.89,0,0,1-1.65,3.31c-.54,1-1,2-1.51,2.92-1.79,3.73-6.68,7-9.74,9.3s-9.49,3.69-12.09,4.22-6.7.35-12.54-.33-11.58-5.44-13.66-6.85-6.13-6.61-6.92-7.48S80,71.72,79.56,71s-1-7.16-1-8.18,1.11-8.8,1.36-9.9A51.82,51.82,0,0,1,83,47c.25-.47.52-.94.79-1.4l.27-.42c.53-.9.94-1.56,1.08-1.73l.52-.6a31.69,31.69,0,0,1,3.24-3.69c.5-.57.91-1,1.09-1.27A23.26,23.26,0,0,1,93.5,35.4a32.73,32.73,0,0,1,10.73-4.69,12.45,12.45,0,0,1,1.31-.41c.9-.17,4.7-.44,5.72-.64a15.88,15.88,0,0,1,3.54.33,31.88,31.88,0,0,1,4.27.69A32.58,32.58,0,0,1,142,50.15a15.92,15.92,0,0,1,1,2.62A32.29,32.29,0,0,1,144,67.45c0,.19,0,.39-.07.58A24.88,24.88,0,0,1,142.05,74.55Z"></path>\n                    <path id="Combined-Shape-Copy-3" class="cls-3" d="M94.84,34.32a10.41,10.41,0,0,1,2.56,1.57l.3.27a10.44,10.44,0,0,1,2.3,3,6.27,6.27,0,0,1,.66,1.59l0,.23a10.26,10.26,0,0,1,.12,5.14h0l.12-.66a6.64,6.64,0,0,1-.15.82,10.58,10.58,0,0,1-1.43,3.25,1.62,1.62,0,0,0-.1.18c-.56,1.17-2.1,2.19-3.06,2.93a6.32,6.32,0,0,1-1.67.78,10.31,10.31,0,0,1-6.14.46l-.3-.08.35.06a5.62,5.62,0,0,1-1.68-.51,10.36,10.36,0,0,1-4.71-3.89.65.65,0,0,0-.09-.11,1.83,1.83,0,0,1-.17-.31,10.24,10.24,0,0,1-1.1-2.65h0a1.28,1.28,0,0,1-.08-.32,10.4,10.4,0,0,1,0-4.61l.12-.47.06-.29A1.39,1.39,0,0,1,81,40.4a10.37,10.37,0,0,1,7.68-6.72l.25-.07.88-.09.26,0c.29,0,.54-.05.66-.08a6.72,6.72,0,0,1,1.33.14,7.72,7.72,0,0,1,1,.19h0l.16,0,.3.06a5.89,5.89,0,0,1,1.2.43Z"></path>\n                  </g>\n                </g>\n              </g>\n            </g>\n          </g>\n          <path id="outer-lid" d="M0,64v1.32c1.64,6.43,2.35,9.88,4.66,13.29C12.55,90.28,19.6,98.7,27.42,103.46l10.17,5.84L40,110.64c8.1,4.48,14.74,7.5,21.19,9.35a49.08,49.08,0,0,0,6.23,1.38l2.7.43,9.19,1.62c15.64,2.78,25.5,3.76,37.56,3,16.77-1.07,31.44-4.29,49.57-10,12.27-3.85,31.79-17.48,41.08-27.79,3.27-3.63,5.91-6.3,8-10.26l1.34-2.51c1.26-2.59,4.4-8.73,4.24-8.35.39-.9.68-.92,1-1.79l.79-1.73-.29-1.14c-1.65-6.45-3.53-11.22-5.84-14.64-7.88-11.7-14.93-20.16-22.74-24.94l-7.67-4.42c-1.73-1-3.41-2-4.51-2.57l-.38-.21c-8.09-4.49-14.73-7.53-21.17-9.38A47.49,47.49,0,0,0,154,5.32l-2.7-.44-9.18-1.62C126.53.47,116.67-.52,104.62.25c-16.76,1.07-31.42,4.3-49.55,10C42.81,14.13,23.3,27.82,14,38.17A54.64,54.64,0,0,0,5.39,51l-.4.85c-1.3,2.86-3.38,8.08-3.45,8.27C1.15,61,.79,61.91.46,62.78L0,64m215.78,2.12C213.91,72,210.33,77,202.5,85.73l-4.64,5.15a55.26,55.26,0,0,0-3.65,4.43c-4,5.51-20.28,14.09-33.11,18.87a75.45,75.45,0,0,1-12.52,3.26l-6.23,1.09-16,2.76c-9.07,1.64-17.29,1.45-30.33-.14l-12.66-1.62c-1.24-.15-2.09-.22-3.3-.32l-.34,0c-6.09-.47-10.76-1.92-18.49-5.3l-5.63-2.49c-2.38-1-4.35-1.79-6.26-2.41l-.95-.3c-9.56-2.91-29.48-17.64-35.6-26.11l-.73-1c-3.2-4.73-5.35-8-7.39-14.76V64h0l1-3.25c1.8-5.63,5.18-10.5,12.39-18.69l5.95-6.65c1.52-1.73,2.38-2.79,3.23-4,4-5.53,20.26-14.14,33.08-18.94a71.78,71.78,0,0,1,11.21-3L75,8.87l20.1-3.48c9.47-1.71,18-1.43,32,.36L138.1,7.16c1.24.14,2.09.22,3.3.31l.34,0c5.72.45,10.2,1.76,17.15,4.74l7,3.08a66.55,66.55,0,0,0,7.2,2.72c9.56,2.92,29.46,17.7,35.57,26.21l.74,1.06c3.2,4.74,4.82,8.55,6.86,15.35l.65,2.24h0Z" data-svg-origin="111.435 63.3327605342865" style="transform-origin: 0px 0px;" transform="matrix(1,0,0,1,0,0)"></path>\n        </g>\n      </g>\n    </svg>\n    <div data-intro-ctas="" style="opacity: 1; transform: translate(0px, 0px);">\n        <a data-button="white" data-login=""\n           id="login-button"\n         classname="login-button"\n         href="javascript: void(0)"> <!-- /cash-clone/account/activity" -->\n        Log In</a>\n      <a data-button="green" data-download="" href="https://click.cash.app/ui6m/bf0fcdc2">Download <br>Cash App</a>\n    </div>\n    <div data-intro-content="" style="opacity: 1; transform: translate(0px, 0px);">\n      <h1>The easiest way to send, spend, bank, and invest</h1>\n    </div>\n    <figure data-intro-scan="" style="opacity: 1; transform: translate(0px, 0px);">\n      <figcaption>\n        <h2>Scan to download Cash App</h2>\n        <svg data-arrow-right="" width="31" height="19" viewBox="0 0 31 19" fill="none">\n          <path d="M29.7111 9.2849L20.4978 1.22725C20.0752 0.857486 19.4363 0.905923 19.0724 1.33299C18.7071 1.76074 18.7536 2.4068 19.1762 2.77656L26.2383 8.95198L1.07242 8.95198C0.514404 8.95198 0.0615234 9.40975 0.0615234 9.97531C0.0615234 10.5409 0.514404 10.9986 1.07242 10.9986L26.4924 10.9986L22.467 14.6355L19.3224 17.1529C18.8851 17.5036 18.8102 18.1469 19.1566 18.5903C19.3561 18.8455 19.652 18.9785 19.9505 18.9785C20.1702 18.9785 20.3913 18.9069 20.5773 18.7575L23.767 16.2005L29.7232 10.8219C29.9402 10.6261 30.0635 10.3451 30.0615 10.0504C30.0588 9.75632 29.9321 9.47729 29.7111 9.2849Z" fill="white"></path>\n        </svg>\n      </figcaption>\n      <img alt="QR Code" src="https://cash-f.squarecdn.com/web/marketing/494a08c25a1d65bf05764a551e818ab0142da7b9/assets/images/home-2021/qr-code.png">\n    </figure>\n    <figure data-intro-rays>\n      <div data-rays-svg="">\n        <svg viewBox="0 0 2484.9 2484.9">\n          <defs>\n            <mask id="a" width="2484.9" height="2484.9" x="0" y="0" maskUnits="userSpaceOnUse">\n              <path fill="#fff" d="M243.98 233.95h1961.93v1960H243.98z"></path>\n            </mask>\n          </defs>\n          <g data-name="Layer 1" mask="url(#a)" opacity="0.3">\n            <path fill="#fff" fill-rule="evenodd" d="M1162.22 1040.44l-61.53-169.06q-1-2.85-3.58-9.72l1.61-.65 3.57 9.79q23.48 65.33 29.73 82.5c2.88 7.92 17 46.68 31.65 86.61zm30.86-8.29l-3.26-23.22 1.49-.21c1.07 7.55 2.18 15.34 3.29 23.17zm42.25-2.54l.9-12.87 1.52.08c-.29 4.26-.59 8.57-.88 12.88zm124.42 58.24l9.33-8 1.42 1.64-9.26 8c-.49-.57-.99-1.11-1.49-1.64zm36.6 58l8.88-3.21L1476 1117l.9 2.12c-31.79 11.5-60.73 22-79.7 28.79-.3-.7-.57-1.41-.85-2.11zm8.22 108l61.41 14.3 155.44 36.22-.82 2.13c-90.25-21-187.55-43.67-193.79-45.27-2.92-.75-11.43-2.78-22.7-5.43.16-.68.31-1.33.46-1.98zm-11.28 34l4.33 2-.72 1.89-4.43-2.09c.27-.65.53-1.24.82-1.86zm-21.77 36.72l8.49 6.42-1.29 1.59c-2.45-1.87-5.29-4-8.43-6.42q.63-.86 1.23-1.65zm-50.93 45.84l17.28 27.59-1.36.82c-5.17-8.28-11.53-18.42-17.29-27.59zm-30.88 15c13 35.69 26.52 72.62 26.52 72.62l37.89 103.76-1.68.64c-21.15-57.83-45.12-123.46-46.49-127.57-1.48-4.43-10.39-28.83-17.74-48.9zM1246 1395.8l1.14 8.07-1.57.19c-.39-2.73-.78-5.44-1.15-8.09zm-67.19-4.75c-2.82 12.07-5.48 23.5-7.84 33.62l-2.06-.43c1.47-6 4.46-18.69 8-33.71zm-69.7-35.41c-26 34.37-47.45 62.73-47.45 62.73s-79.91 105.58-133.93 177L926 1594c62.34-82.45 153-202.39 158-208.62 2.65-3.35 12.18-15.87 23.66-31zm-25.93-25.84c-31.3 27.08-56.62 49-56.62 49l-83.43 72.23-1.47-1.74c57.39-49.7 109.43-94.73 113.52-98.11 3.07-2.54 13.65-11.64 26.74-23 .44.59.86 1.11 1.29 1.62zm-31.9-57.12c-51.45 18.51-137 49.51-137 49.51l-172.38 62.15-.59-1.7 1-.37c22.56-8.14 235.74-85.38 241.73-87.54l66.55-24.14c.25.7.48 1.41.72 2.09zm-8.6-37.93c-36.87 5-95.27 13.12-127.52 17.59l-.25-2 50.91-7.07 76.62-10.69c.1.7.19 1.42.27 2.17zm3.31-62.49c-35.54-8.36-95.44-22.33-137.49-32.13l.42-2 39 9.08 98.58 22.89c-.15.72-.31 1.44-.5 2.16zm13.55-38.78c-56-26.37-169.37-79.49-169.37-79.49l-206-96.79.67-1.67 10.29 4.85c25.87 12.12 269.75 126.34 276.59 129.56 2.58 1.21 41.27 19.3 88.82 41.56zm17.63-29.27l-18.62-14.14 1.24-1.78 18.71 14.14zm-314.68 502.35l.43.51c-51.41 44.51-142.1 123-159.12 137.73-23.48 20.29-227.14 196.3-242.81 209.83l-125.76 108.69-1-1.59s108.3-93.21 121.11-104.28q12.81-11.07 56.27-48.82Q565.82 1774.46 579 1763.07c8.24-7.13 33.6-28.94 52.7-45.44l-.26-.29 130-113 1.54 1.78zm202.77-695.94l-.48-.55 1.78-1.54 58.84 67.68-1.78 1.55-1.21-1.39-.21.19-40.76-47.08-16.25-18.8zm568.7 29.1l-22.71 19.68-74.7 64.93-1.55-1.78 98-85.16 1.55 1.78zm-762.36 235.6l.13-1.86 154.06 11-.14 2-31.31-2.24zm-237.76-17l-1.14-.07q-164.22-11.25-179.93-12.56c-15.72-1.33-134.88-9.84-145.12-10.58q-10.25-.75-55.4-4.28l.46-2.47q143.54 10.13 168.6 12L534 1155.83zm1141.29 82.39c-27.27-2-118.64-8.46-192.18-13.74l.32-2.28 186.16 13.39 6 .43zm87.28 6.43l.33-2.35c52 3.74 109 7.83 122.69 8.83l269.43 19.66 139.56 10.18c-.23 1.25-.35 1.87-.35 1.87s-120-9-134.16-10.08l-62.56-4.41Q1925.68 1259 1911 1258c-14.63-1.06-77.64-5.85-83.53-6.09-2.8-.16-32.87-2.35-65.06-4.72zm-559.28 244.65c1.74-25.16 3-43.24 3.22-45.37.36-3.71 1.57-20.89 2.77-38.5h1.59c-2.3 33.24-4.39 63.81-4.39 63.81s-.53 7.72-1.38 20.06zm-7.13 104.26v1.88h1.7c-2.43 35.25-4.46 64.74-4.63 67.12-.43 6.15-10 144.79-11.35 164.65s-13.43 192.17-14.36 205.42q-.93 13.26-7.44 106.4l-1.48-.11s6.62-91.47 7.38-102.3q.75-10.85 3.22-47.69 8.63-130.83 9.4-142c.78-11.16 4.29-59.21 4.45-63.69s6.88-98.41 7.74-110.59c.27-4.65 2.58-38.66 5.37-79.09zm45-647.59l4.82-69 1.58.08q-3.14 42.55-4.09 56.27c-.16 2.19-.46 6.6-.88 12.68zm9.38-137.26q.36-5.82.77-12.5 8.2-125.13 9.18-137.13c1-12 7.19-102.83 7.74-110.64q.54-7.8 3.13-42.25l2 .13q-7.38 109.4-8.71 128.52l-12.17 174zm524.35-82.2l1.44 1.66-12.83 11.09q-82 70.43-103.59 89.06c-6.58 5.68-30.09 26-59.76 51.74l-1.22-1.41L1762.17 740q3.64-3.18 12.56-11zm65.79-57.42Q1969 559.8 1982.3 548.53c14.29-12.11 121.54-105 130.77-113q9.24-8 50.09-43l1.36 2.09q-129.11 112-151.69 131.56L1842.24 673.6zm-359.11 832.55l105.53 121.9c6.28 7.27 148.06 171 168.36 194.5l209.83 242.82 108.68 125.76-1.59 1S1979 2081.88 1968 2069.07q-11.07-12.81-48.82-56.28-134.18-154.24-145.62-167.42c-11.39-13.19-60.33-70.1-65-75.28s-100.53-116.33-113-130.72c-6.11-7.08-60.86-70.24-115.87-133.74zM842.5 768.71l-92-106.5q-8.57-9.9-51-58.35Q571.14 456.36 559 442.08c-12.08-14.29-105-121.55-113-130.78q-8-9.23-43-50.08l2.1-1.36Q517.15 389 536.68 411.55L752.28 661q70.44 82 89.06 103.59l2.53 2.93zm-324.66 697.1q-102.06 37.25-114 41.41c-14.9 5.18-127.22 45.87-136.88 49.35q-9.66 3.48-52.34 18.63l-.59-2.44q135.24-49.14 158.89-57.67l144-51.93zm1135.69-410.68l-.87-2c36.08-13 173.44-62.75 195.24-70.61l254.1-91.68 131.63-47.46.45 1.85s-113.26 40.53-126.66 45.36Q2094 895.42 2048.5 912q-161.67 59-175.5 64c-13.8 5-73.31 26.22-78.79 28.4s-121.75 43.9-136.82 49.34zm-263 606.37c14.33 39.24 43.52 119.15 48.73 133.48 6.81 18.71 65.89 181 70.43 193.5l36.48 100.22-1.4.51s-31.15-86.26-34.87-96.46q-3.7-10.21-16.45-44.88-45.35-123-49.16-133.53c-3.83-10.51-20.16-55.83-21.84-60-1.38-3.44-23.6-64.71-33.57-92.22zm-343.32-934.95q-9.43-25.72-11.2-30.74c-4-11.36-35.25-96.87-37.93-104.22q-2.67-7.35-14.32-39.88l1.85-.67Q1023.37 654 1029.92 672l19.53 53.67zm15.6 823.86l2.06 1-78.87 168.1c-4.08 8.69-96 204.83-109.21 232.92s-127.67 271.71-136.47 290.45l-70.69 150.44-1.58-1s61-129.2 68.22-144.52q7.2-15.32 31.56-67.49Q854.2 1995 861.61 1979.2c7.41-15.77 39.5-83.63 42.31-90s65.38-139.2 73.48-156.42c4.36-9.29 46.6-99.51 85.41-182.37zm313.46-667.66l1.79 1-37.87 80.85c-.69 1.46-6.71 14.34-15.82 33.81l-1.86-1C1348 943.09 1376.13 883 1376.13 883zm37.17-79.13l112.91-240.3q5.57-11.85 32.58-70.28 82.53-177.27 90.65-194.14c8.13-16.88 68.32-145.4 73.51-156.44q5.19-11 28.27-59.64l2.1 1.37q-72.37 154.81-85.08 181.87T1528.16 564.5q-46.31 97.71-58.41 123.5c-5.17 11-28.86 61.55-54.61 116.52zM514 877.57l-13.8-6.38q-177.27-82.52-194.14-90.65c-16.88-8.13-145.4-68.32-156.44-73.5q-11-5.19-59.64-28.28l1.36-2.09Q246.21 749 273.23 761.74l241.7 113.57zm1255.16 588.92l-29.16-13.76c-8.93-4.2-92.72-43.41-172.82-80.94l.81-2.13 158.74 74.42 43.3 20.31zm170.3 79.91l.83-2.16c8.85 4.15 15.56 7.29 19.29 9l290.46 136.47 150.44 70.69c-.69 1.06-1 1.58-1 1.58s-129.2-61-144.52-68.22q-15.32-7.2-67.49-31.55-185.31-86.34-201.08-93.75c-7.69-3.55-27.68-12.99-46.92-22.06zM679 1284.83l-81.75 11.24q-10.92 1.5-64.55 9.28-163 23.12-178.62 25.08c-15.65 2-134 18.42-144.14 19.82q-10.17 1.39-55.08 7.34l-.06-2.52q142.48-19.93 167.4-23.37l275-37.8q51.69-6.9 81.57-10.92zm1085.9-149.68c-37.08 5.08-81.19 11.08-90.29 12.33-6 .83-49.47 6.88-101.39 14.09l-.27-2.25 88.27-12.22 103.39-14.33zm175.35-24.3l-.28-2.29 203.4-28 138.62-19c0 1.26.05 1.9.05 1.9s-119.21 16.09-133.32 18q-14.11 1.95-62.11 8.69zm-770.47-244.48l-1.82-13q-1.17-8.32-7.23-49.15-18-124.1-19.54-136c-1.53-11.94-14.34-102.08-15.43-109.83q-1.1-7.74-5.72-42l2-.27q15.52 108.52 18.2 127.51t29.44 209.52q.93 6.75 1.78 13zm90.49 642.88l1.8-.22c7.72 54.52 21.3 150.38 21.91 154.74.86 6.1 20.37 143.69 23.14 163.42s26.81 190.76 28.66 203.91q1.85 13.15 14.84 105.62l-1.47.2s-12.54-90.85-14.05-101.6q-1.51-10.75-6.77-47.31-18.76-129.77-20.32-140.84c-1.56-11.07-8.11-58.81-8.89-63.22s-13.73-97.69-15.42-109.78c-1.12-7.96-14.3-100.43-23.43-164.92zm-476.38 276.19c-27.6 36.47-52.29 69.09-59.66 78.81L530.35 2120l-100.42 132.44-1.34-1.34s86.56-113.69 96.78-127.18q10.23-13.49 44.9-59.45 123-163.32 133.5-177.2c10.53-13.88 56-73.58 60.11-79.28 1.4-2 12.75-17 27.52-36.44l-9.2 12.66zm613.43-813.66L1435 922l78.29-103.26 1.67.89L1399 973zm169.36-223.48l81.68-107.75q7.92-10.44 46.48-62 117.59-156.24 129-171.06c11.46-14.82 97-128 104.42-137.73q7.37-9.72 40.06-52.46l1.76 1.77q-103 136.41-121 160.22l-199.2 262.79q-63.41 83.08-81.61 107.06zm189.25 867.11l-1.49 1.83c-34.49-26.17-73.71-56-82.07-62.31-5.83-4.42-47.86-36.19-97.95-74.07l1.42-1.75 85.35 64.6c3.81 2.88 48.02 36.35 94.74 71.7zm195.75 148.27L2122 1892.84l132.46 100.42-1.34 1.33S2139.47 1908 2126 1897.81q-13.49-10.21-59.46-44.89l-116.22-87.54zm-993.82-749.9l-33.76-25.55L682.39 805l1.13-1.62q52.31 39.89 69.27 52.76C769.82 869 895 963.7 959 1012.11zM532.42 692.05q-110.49-83.19-122.84-92.74c-14.82-11.46-128-97-137.73-104.42q-9.72-7.38-52.46-40.06l1.77-1.76q136.41 103 160.21 121L534 689.8zM628.87 1580l-1.36-2.19 58.94-36.58q77.52-47.7 97.9-60.35c11.48-7.13 77.55-48.27 134-83.44l1.06 1.7-232.06 144q-9.37 5.82-55.2 34.74l-3.32 2.08zm-202.29 126c-31.53 19.59-66.06 41.09-71 44.15q-8.71 5.41-47.33 29.11l-1.08-2.27q81.19-50.67 117.83-73.5zM1740.8 888.65c-3.1 1.94-5.27 3.31-6.08 3.86-4.91 3.27-110 68.25-123.58 76.7-9.79 6.07-133.12 82.94-204.85 127.53l-1.11-2 193.57-120.42 140.93-87.68zm74.3-46.06l-1.16-2.1 198.23-123 118.89-73.8.81 1.72s-102.35 63.19-114.46 70.7q-12.11 7.51-53.21 33.2-118.77 74.34-149.1 93.28zm-369.89 726.71l-1.52.91c-14.65-23.36-33.66-53.68-51-81.32l1.55-.93c16.82 26.82 36.69 58.53 50.97 81.34zm56.38 90c21.24 33.91 44.68 71.34 50.29 80.31L1661 1914.26l56.52 90.44-1.26.79s-48.41-77.89-54.16-87.1q-5.76-9.23-25.43-40.47-69.93-110.93-75.85-120.4c-5.92-9.48-31.33-50.42-33.83-54.14-1.22-1.82-13.75-21.87-27-43.1zm-404-642.39l-67.8-108.49 1.47-.85q35.54 57.38 45.07 72.64c2.62 4.2 11.27 18 22.53 36zM952.88 786.62q-20.64-32.8-24-38.3c-6.25-10.28-54.62-87.42-58.77-94.05q-4.14-6.64-22.3-36l1.67-1Q907.83 710 918 726.28l37 59.15zm163.86 861c6.74-29 13.91-59.79 20.7-88.93l2.23.47-20.67 88.93zm-19 81.58l-11.29 53.14 1.12.24c-13.31 57.1-47.35 203.23-53.14 228-7.07 30.22-68.39 292.32-73.1 312.48q-4.73 20.16-37.87 161.85l-1.76-.68s32.83-139.06 36.68-155.55q3.86-16.49 16.83-72.57 45.93-199.21 49.9-216.18c4-17 21.25-90 22.66-96.87s35-149.7 39.36-168.23c.94-3.9 4.87-20.97 10.64-45.63zm197.47-845.84l2 .35c-8.35 35.92-14.42 62-14.94 64.24-.41 1.73-4.28 18.43-10 43.09l-2.08-.36c9.1-38.87 19.11-81.83 25.05-107.32zm35.24-150.75L1381 516.79q3-12.75 17.26-75.53 43.86-190.54 48.3-208.75c4.45-18.2 36.6-156.42 39.38-168.29q2.77-11.88 15.25-64.22l2.33.9q-38.6 166.52-45.39 195.59T1383 517.56q-25 105.2-31.46 132.94c-2.07 8.86-9.71 41.66-19.19 82.43zm-604.66 364.82l-209-48.9q-12.75-3-75.53-17.26Q250.72 987.41 232.51 983c-18.2-4.45-156.42-36.6-168.29-39.38Q52.34 940.82 0 928.34L.9 926q166.52 38.6 195.59 45.39l321.07 75.12q105.2 25 132.94 31.46l75.68 17.62zm1079.28 252l.82-2.12c66.26 15.44 182.81 42.6 204.68 47.71l312.48 73.11L2484.9 1506l-.68 1.76s-139.06-32.83-155.55-36.68q-16.49-3.85-72.57-16.83-199.21-45.93-216.18-49.89c-17-4-90-21.26-96.87-22.67-5.25-1.07-90.11-21-137.98-32.24z">\n            </path>\n          </g>\n        </svg>\n      </div>\n    </figure>\n    <figure data-intro-phone="" style="opacity: 1; transform: translate(0px, 0px);">\n      <img alt="Cash App Screen" data-intro-seq="1" src="https://cash-f.squarecdn.com/web/marketing/494a08c25a1d65bf05764a551e818ab0142da7b9/assets/images/home-2021/intro-seq-1.png" style="opacity: 0;">\n      <img alt="Cash App Screen" data-intro-seq="2" src="https://cash-f.squarecdn.com/web/marketing/494a08c25a1d65bf05764a551e818ab0142da7b9/assets/images/home-2021/intro-seq-2.png" style="opacity: 0;">\n      <img alt="Cash App Screen" data-intro-seq="3" src="https://cash-f.squarecdn.com/web/marketing/494a08c25a1d65bf05764a551e818ab0142da7b9/assets/images/home-2021/intro-seq-3.png" style="opacity: 0;">\n      <img alt="Cash App Screen" data-intro-seq="4" src="https://cash-f.squarecdn.com/web/marketing/494a08c25a1d65bf05764a551e818ab0142da7b9/assets/images/home-2021/intro-seq-4.png" style="opacity: 0;">\n      <img alt="Cash App Screen" data-intro-seq="5" src="https://cash-f.squarecdn.com/web/marketing/494a08c25a1d65bf05764a551e818ab0142da7b9/assets/images/home-2021/intro-seq-5.png" style="opacity: 0.552;">\n      <img alt="Cash App Screen" data-intro-seq="6" src="https://cash-f.squarecdn.com/web/marketing/494a08c25a1d65bf05764a551e818ab0142da7b9/assets/images/home-2021/intro-seq-6.png" style="opacity: 0.448;">\n      <img alt="Cash App Screen" data-intro-seq="7" src="https://cash-f.squarecdn.com/web/marketing/494a08c25a1d65bf05764a551e818ab0142da7b9/assets/images/home-2021/intro-seq-7.png" style="opacity: 0;">\n    </figure>\n    <img alt="Stairs" data-intro-stairs="" src="https://cash-f.squarecdn.com/web/marketing/494a08c25a1d65bf05764a551e818ab0142da7b9/assets/images/home-2021/intro-stairs.png" style="transform: translate(0px, 0px);">\n    <img alt="Cubes" data-intro-cube="" src="https://cash-f.squarecdn.com/web/marketing/494a08c25a1d65bf05764a551e818ab0142da7b9/assets/images/home-2021/intro-cube.png">\n    <svg data-arrow-down="" width="20" viewBox="0 0 15 18" fill="none" style="opacity: 1; transform: translate(0px, 0px);">\n      <path d="M8.41816 17.4216L14.6002 10.353C14.8839 10.0288 14.8467 9.5386 14.5191 9.2594C14.1909 8.97915 13.6952 9.01483 13.4115 9.33902L8.67358 14.7572L8.67358 0.912789C8.67358 0.484668 8.32237 0.137207 7.88846 0.137207C7.45455 0.137207 7.10334 0.484668 7.10334 0.912789L7.10334 14.9522L4.31303 11.8638L2.38164 9.45122C2.1126 9.11565 1.61902 9.05826 1.27881 9.32403C1.08305 9.47708 0.980984 9.70406 0.980984 9.93312C0.980984 10.1017 1.03594 10.2713 1.15057 10.414L3.11232 12.8612L7.23891 17.4309C7.38913 17.5974 7.60477 17.692 7.83089 17.6905C8.05648 17.6884 8.27055 17.5912 8.41816 17.4216Z" fill="#00D54B"></path>\n    </svg>\n  </section>\n  <section data-chapter="tldr">\n    <img alt="Cubes" data-intro-cubes="" src="https://cash-f.squarecdn.com/web/marketing/494a08c25a1d65bf05764a551e818ab0142da7b9/assets/images/home-2021/intro-cubes.png" style="transform: translate(0px, 0px); opacity: 1;">\n    <img alt="Pillar" data-intro-pillar="" src="https://cash-f.squarecdn.com/web/marketing/494a08c25a1d65bf05764a551e818ab0142da7b9/assets/images/home-2021/intro-pillar.png" style="transform: translate(0px, 0px); opacity: 1;">\n    <div data-features="">\n      <div data-feature="send" style="opacity: 1; transform: translate(0px, 0px);">\n        <figure></figure>\n        <h2>Send</h2>\n        <p>Pay anyone, instantly.</p>\n      </div>\n      <div data-feature="spend" style="opacity: 1; transform: translate(0px, 0px);">\n        <figure></figure>\n        <h2>Spend</h2>\n        <p>Design a debit card to match your style.</p>\n      </div>\n      <div data-feature="bank" style="opacity: 1; transform: translate(0px, 0px);">\n        <figure></figure>\n        <h2>Bank</h2>\n        <p>Speed up your <span data-nowrap="">direct deposits.</span><sup>1</sup></p>\n      </div>\n      <div data-feature="invest" style="opacity: 1; transform: translate(0px, 0px);">\n        <figure></figure>\n        <h2>Invest</h2>\n        <p>Buy stocks and bitcoin with as little as $1.<sup>2</sup></p>\n      </div>\n    </div>\n  </section>\n  <section data-chapter="pay">\n    <svg data-chapter-logo="" viewBox="0 0 195 44" fill="none">\n      <path d="M77.9858 17.353C77.8137 17.4574 77.6088 17.4936 77.4113 17.4547C77.2139 17.4158 77.0381 17.3044 76.9185 17.1425C76.3306 16.2985 75.5417 15.6143 74.6231 15.1515C73.7046 14.6887 72.6852 14.462 71.6571 14.4918C67.6484 14.4918 65.188 17.6636 65.188 22.1935C65.188 26.7233 67.6935 29.9553 71.7022 29.9553C72.744 29.9802 73.775 29.7387 74.6975 29.2538C75.6199 28.7689 76.4034 28.0566 76.9736 27.1843C77.0876 27.0203 77.259 26.9051 77.4539 26.8615C77.6487 26.8179 77.8529 26.849 78.0259 26.9488L79.93 28.0512C80.034 28.1039 80.1254 28.1784 80.198 28.2696C80.2706 28.3609 80.3227 28.4667 80.3507 28.5798C80.3788 28.693 80.3821 28.8109 80.3606 28.9254C80.339 29.04 80.293 29.1486 80.2257 29.2438C79.2948 30.639 78.0248 31.7751 76.5349 32.5455C75.045 33.3159 73.3838 33.6953 71.7072 33.6483C65.2983 33.6483 60.9539 28.9982 60.9539 22.2185C60.9539 15.4388 65.2983 10.8489 71.612 10.8489C73.2607 10.8031 74.8955 11.1619 76.3735 11.8939C77.8514 12.6259 79.1276 13.7088 80.0904 15.048C80.1565 15.1382 80.2035 15.241 80.2283 15.3501C80.2531 15.4591 80.2552 15.5721 80.2345 15.6821C80.2139 15.792 80.1708 15.8965 80.1081 15.9892C80.0454 16.0818 79.9643 16.1605 79.8699 16.2205L77.9858 17.353Z" fill="black"></path>\n      <path d="M91.996 32.4194V31.4974C90.9938 32.7902 89.5958 33.5919 87.3459 33.5919C84.0187 33.5919 81.7087 31.773 81.7087 28.581C81.7087 24.6074 85.2514 23.9259 87.4361 23.6203C89.7812 23.2795 91.7805 23.1192 91.7805 21.5859C91.7805 20.2279 90.2121 19.8621 88.8843 19.8621C87.36 19.8875 85.8625 20.2666 84.5098 20.9695C84.4159 21.0211 84.3125 21.0531 84.2059 21.0636C84.0993 21.0741 83.9917 21.0628 83.8896 21.0305C83.7874 20.9982 83.693 20.9455 83.6118 20.8755C83.5306 20.8056 83.4645 20.72 83.4174 20.6238L82.7309 19.1907C82.6391 19.005 82.6223 18.7912 82.6839 18.5934C82.7454 18.3956 82.8807 18.2291 83.0616 18.1284C84.9562 17.1198 87.0687 16.5899 89.215 16.585C93.0333 16.585 95.7291 18.1534 95.7291 21.9467V32.4194C95.7291 32.632 95.6446 32.8359 95.4943 32.9863C95.3439 33.1366 95.14 33.2211 94.9274 33.2211H92.8328C92.7246 33.2258 92.6166 33.2086 92.5152 33.1704C92.4139 33.1323 92.3213 33.074 92.2431 32.9991C92.1649 32.9241 92.1027 32.8341 92.0602 32.7345C92.0178 32.6349 91.9959 32.5277 91.996 32.4194V32.4194ZM91.7805 25.1787C91.0439 25.7349 89.686 25.9203 88.2379 26.1808C86.7897 26.4414 85.5871 26.8272 85.5871 28.4007C85.5871 29.8488 86.6344 30.5253 88.1477 30.5253C90.0267 30.5253 91.7805 29.478 91.7805 27.0427V25.1787Z" fill="black"></path>\n      <path d="M99.1716 29.0738C99.3067 28.9164 99.4976 28.8175 99.7041 28.7979C99.9106 28.7783 100.117 28.8395 100.279 28.9686C101.619 29.9803 103.261 30.51 104.939 30.4718C106.668 30.4718 107.946 29.9156 107.946 28.5627C107.946 27.33 106.773 27.0845 103.937 26.5884C100.93 26.0873 98.0542 25.0852 98.0542 21.6577C98.0542 18.085 101.136 16.5767 104.648 16.5767C106.851 16.5441 109.002 17.2497 110.757 18.581C110.842 18.6481 110.913 18.7319 110.966 18.8274C111.018 18.9228 111.05 19.0278 111.06 19.1361C111.071 19.2444 111.059 19.3537 111.026 19.4572C110.992 19.5608 110.938 19.6565 110.867 19.7386L109.865 20.9161C109.732 21.074 109.544 21.175 109.339 21.1983C109.134 21.2216 108.927 21.1655 108.762 21.0414C107.528 20.1382 106.033 19.66 104.503 19.6784C103.025 19.6784 101.732 20.1094 101.732 21.2769C101.732 22.5747 103.546 22.8202 105.365 23.1309C109.248 23.8074 111.714 24.9148 111.714 28.1418C111.714 31.5291 109.003 33.6237 104.699 33.6237C102.346 33.6956 100.042 32.9441 98.1845 31.4991C98.1011 31.4308 98.0322 31.3467 97.9817 31.2515C97.9313 31.1564 97.9002 31.0521 97.8904 30.9449C97.8806 30.8376 97.8923 30.7295 97.9247 30.6267C97.9571 30.524 98.0096 30.4288 98.0792 30.3466L99.1716 29.0738Z" fill="black"></path>\n      <path d="M114.094 32.4211V12.0269C114.094 11.8142 114.179 11.6103 114.329 11.4599C114.48 11.3096 114.683 11.2251 114.896 11.2251H117.206C117.419 11.2251 117.623 11.3096 117.773 11.4599C117.923 11.6103 118.008 11.8142 118.008 12.0269V18.992C118.583 18.2245 119.333 17.6057 120.196 17.1873C121.059 16.7689 122.01 16.563 122.969 16.5868C126.386 16.5868 128.39 19.022 128.39 22.4996V32.4211C128.39 32.6337 128.306 32.8377 128.156 32.988C128.005 33.1384 127.801 33.2228 127.589 33.2228H125.279C125.066 33.2228 124.862 33.1384 124.712 32.988C124.561 32.8377 124.477 32.6337 124.477 32.4211V23.4015C124.477 21.6728 123.921 20.1044 121.706 20.1044C119.606 20.1044 118.008 21.5826 118.008 24.0479V32.4261C118.008 32.6387 117.923 32.8427 117.773 32.993C117.623 33.1434 117.419 33.2278 117.206 33.2278H114.896C114.79 33.2285 114.685 33.2081 114.587 33.1677C114.489 33.1273 114.401 33.0679 114.326 32.9927C114.251 32.9176 114.192 32.8284 114.153 32.7302C114.113 32.6321 114.093 32.527 114.094 32.4211V32.4211Z" fill="black"></path>\n      <path d="M153.81 32.6842L152.147 27.7736H143.738L142.07 32.6842C142.016 32.8423 141.914 32.9796 141.779 33.0767C141.643 33.1738 141.48 33.2258 141.313 33.2254H138.602C138.473 33.2252 138.346 33.1939 138.232 33.1342C138.118 33.0745 138.02 32.9881 137.946 32.8824C137.872 32.7767 137.825 32.6547 137.808 32.5269C137.792 32.3991 137.806 32.2691 137.851 32.1481L145.422 11.7488C145.482 11.5994 145.586 11.4717 145.72 11.3823C145.855 11.2929 146.012 11.246 146.174 11.2477H149.877C150.041 11.2484 150.202 11.299 150.337 11.393C150.472 11.487 150.575 11.6198 150.633 11.7739L158.175 32.1681C158.219 32.2896 158.233 32.42 158.217 32.5482C158.2 32.6764 158.152 32.7987 158.078 32.9045C158.003 33.0103 157.905 33.0966 157.79 33.156C157.675 33.2154 157.547 33.246 157.418 33.2454H154.557C154.389 33.2416 154.227 33.1854 154.093 33.0848C153.959 32.9841 153.86 32.844 153.81 32.6842ZM147.987 14.8004L144.75 24.3511H151.099L147.987 14.8004Z" fill="black"></path>\n      <path d="M163.982 17.7586V19.0214C164.552 18.2333 165.307 17.5985 166.182 17.1735C167.056 16.7486 168.022 16.5468 168.993 16.5861C173.428 16.5861 176.294 20.254 176.294 25.0595C176.294 29.8649 173.428 33.5779 168.993 33.5779C168.019 33.6148 167.051 33.4087 166.176 32.9784C165.302 32.548 164.548 31.9068 163.982 31.1126V37.762C163.982 37.9746 163.898 38.1786 163.748 38.3289C163.597 38.4793 163.393 38.5638 163.181 38.5638H160.871C160.658 38.5638 160.454 38.4793 160.304 38.3289C160.153 38.1786 160.069 37.9746 160.069 37.762V17.7185C160.069 17.5059 160.153 17.302 160.304 17.1516C160.454 17.0013 160.658 16.9168 160.871 16.9168H163.181C163.289 16.9167 163.397 16.9387 163.497 16.9814C163.597 17.0242 163.687 17.0869 163.762 17.1656C163.837 17.2444 163.895 17.3375 163.933 17.4395C163.971 17.5414 163.988 17.65 163.982 17.7586ZM168.172 30.1756C170.882 30.1756 172.18 27.8605 172.18 25.0595C172.18 22.2584 170.857 20.0035 168.172 20.0035C165.486 20.0035 163.982 22.2534 163.982 25.0595C163.982 27.8655 165.411 30.1756 168.172 30.1756Z" fill="black"></path>\n      <path d="M182.623 17.7584V19.0212C183.193 18.2338 183.949 17.5994 184.823 17.1745C185.697 16.7497 186.663 16.5475 187.634 16.5859C192.074 16.5859 194.94 20.2538 194.94 25.0592C194.94 29.8647 192.074 33.5777 187.634 33.5777C186.66 33.6137 185.692 33.4072 184.818 32.9769C183.943 32.5467 183.189 31.906 182.623 31.1124V37.7618C182.623 37.9744 182.539 38.1784 182.388 38.3287C182.238 38.4791 182.034 38.5635 181.822 38.5635H179.512C179.299 38.5635 179.095 38.4791 178.945 38.3287C178.794 38.1784 178.71 37.9744 178.71 37.7618V17.7183C178.71 17.5057 178.794 17.3018 178.945 17.1514C179.095 17.0011 179.299 16.9166 179.512 16.9166H181.822C181.931 16.9157 182.038 16.9372 182.139 16.9798C182.239 17.0223 182.33 17.0849 182.405 17.1638C182.48 17.2427 182.538 17.3362 182.576 17.4385C182.613 17.5407 182.629 17.6496 182.623 17.7584V17.7584ZM186.817 30.1753C189.528 30.1753 190.826 27.8603 190.826 25.0592C190.826 22.2582 189.503 20.0033 186.817 20.0033C184.132 20.0033 182.623 22.2532 182.623 25.0592C182.623 27.8653 184.071 30.1753 186.817 30.1753Z" fill="black"></path>\n      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5341 0.762695C5.06793 0.762695 0.636719 5.19391 0.636719 10.6601V33.8055C0.636719 39.2717 5.06792 43.7029 10.5341 43.7029H33.4495C38.9157 43.7029 43.3469 39.2717 43.3469 33.8055V10.6601C43.3469 5.1939 38.9157 0.762695 33.4495 0.762695H10.5341ZM28.9311 16.7337C27.3008 15.3539 25.235 14.5953 23.0992 14.592C21.3395 14.592 19.5799 15.1752 19.5799 16.794C19.5799 18.2698 21.1466 18.8473 23.0766 19.5587C23.2637 19.6276 23.4543 19.6979 23.6472 19.7703C27.4631 21.0574 30.6053 22.636 30.6053 26.3765C30.6053 30.4388 27.453 33.214 22.2947 33.5307L21.8272 35.7077C21.7392 36.1143 21.3785 36.4037 20.9624 36.4015H17.7197C17.4544 36.395 17.2057 36.2712 17.0406 36.0635C16.8756 35.8557 16.8113 35.5854 16.865 35.3256L17.3678 33.028C15.4207 32.5315 13.6308 31.5509 12.1642 30.1774C11.9943 30.0134 11.8984 29.7875 11.8984 29.5514C11.8984 29.3153 11.9943 29.0894 12.1642 28.9255L13.9641 27.1659C14.3045 26.8311 14.8504 26.8311 15.1908 27.1659C16.8396 28.7389 19.0409 29.6003 21.3194 29.564C23.6673 29.564 25.261 28.5685 25.261 26.9899C25.261 25.5627 23.9543 25.0847 21.4745 24.1777C21.2114 24.0814 20.9351 23.9804 20.6457 23.8728C17.4582 22.7366 14.4417 21.1127 14.4417 17.337C14.4417 12.9681 18.0917 10.8364 22.3953 10.6252L22.8478 8.40808C22.9374 8.00529 23.2949 7.71889 23.7075 7.7193H26.9402C27.2036 7.71846 27.4533 7.83631 27.6201 8.04014C27.7868 8.24397 27.8529 8.51208 27.7999 8.77006L27.2972 11.2486C28.9429 11.7866 30.4679 12.6405 31.7868 13.7624C31.9686 13.9187 32.0768 14.1439 32.0854 14.3835C32.094 14.6231 32.0021 14.8554 31.832 15.0243L30.1528 16.7086C29.8166 17.0394 29.2806 17.0504 28.9311 16.7337Z" fill="black"></path>\n    </svg>\n    <div data-pay-content="">\n      <h2>Pay anyone, <br>instantly</h2>\n      <p>Send and receive money anytime, anywhere. It\u2019s fast and free, and a $cashtag is all you need to get started.\n      </p>\n    </div>\n    <img alt="Pillar" data-pay-pillar-large="1" src="https://cash-f.squarecdn.com/web/marketing/494a08c25a1d65bf05764a551e818ab0142da7b9/assets/images/home-2021/payments-pillar-large.png" style="transform: translate(0px, 80px);">\n    <a data-button="green" data-chapter-download="" data-pay-download="" href="https://click.cash.app/ui6m/bf0fcdc2">Download <br>Cash App</a>\n    <img alt="Pay Phone" data-pay-phone="" src="https://cash-f.squarecdn.com/web/marketing/494a08c25a1d65bf05764a551e818ab0142da7b9/assets/images/home-2021/pay-phone.png" style="transform: translate(0px, 40px);">\n    <img alt="Column 1" data-pay-column="1" src="https://cash-f.squarecdn.com/web/marketing/494a08c25a1d65bf05764a551e818ab0142da7b9/assets/images/home-2021/payments-column.png" style="transform: translate(0px, 110px);">\n    <img alt="Column 2" data-pay-column="2" src="https://cash-f.squarecdn.com/web/marketing/494a08c25a1d65bf05764a551e818ab0142da7b9/assets/images/home-2021/payments-column.png" style="transform: translate(0px, 100px);">\n    <img alt="Column 3" data-pay-column="3" src="https://cash-f.squarecdn.com/web/marketing/494a08c25a1d65bf05764a551e818ab0142da7b9/assets/images/home-2021/payments-column.png" style="transform: translate(0px, 90px);">\n    <img alt="Column 4" data-pay-pillar-medium="1" src="https://cash-f.squarecdn.com/web/marketing/494a08c25a1d65bf05764a551e818ab0142da7b9/assets/images/home-2021/payments-pillar-medium.png" style="transform: translate(0px, 80px);">\n    <img alt="Column 5" data-pay-pillar-medium="2" src="https://cash-f.squarecdn.com/web/marketing/494a08c25a1d65bf05764a551e818ab0142da7b9/assets/images/home-2021/payments-pillar-medium.png" style="transform: translate(0px, 90px);">\n    <img alt="Column 6" data-pay-pillar-medium="3" src="https://cash-f.squarecdn.com/web/marketing/494a08c25a1d65bf05764a551e818ab0142da7b9/assets/images/home-2021/payments-pillar-medium.png" style="transform: translate(0px, 30px);">\n    <img alt="Column 7" data-pay-pillar-medium="4" src="https://cash-f.squarecdn.com/web/marketing/494a08c25a1d65bf05764a551e818ab0142da7b9/assets/images/home-2021/payments-pillar-medium.png" style="transform: translate(0px, 60px);">\n    <img alt="Column 8" data-pay-pillar-small="1" src="https://cash-f.squarecdn.com/web/marketing/494a08c25a1d65bf05764a551e818ab0142da7b9/assets/images/home-2021/payments-pillar-small.png" style="transform: translate(0px, 65px);">\n  </section>\n  <section data-chapter="spend">\n    <svg data-chapter-logo="" viewBox="0 0 195 44" fill="none">\n      <path d="M77.9858 17.353C77.8137 17.4574 77.6088 17.4936 77.4113 17.4547C77.2139 17.4158 77.0381 17.3044 76.9185 17.1425C76.3306 16.2985 75.5417 15.6143 74.6231 15.1515C73.7046 14.6887 72.6852 14.462 71.6571 14.4918C67.6484 14.4918 65.188 17.6636 65.188 22.1935C65.188 26.7233 67.6935 29.9553 71.7022 29.9553C72.744 29.9802 73.775 29.7387 74.6975 29.2538C75.6199 28.7689 76.4034 28.0566 76.9736 27.1843C77.0876 27.0203 77.259 26.9051 77.4539 26.8615C77.6487 26.8179 77.8529 26.849 78.0259 26.9488L79.93 28.0512C80.034 28.1039 80.1254 28.1784 80.198 28.2696C80.2706 28.3609 80.3227 28.4667 80.3507 28.5798C80.3788 28.693 80.3821 28.8109 80.3606 28.9254C80.339 29.04 80.293 29.1486 80.2257 29.2438C79.2948 30.639 78.0248 31.7751 76.5349 32.5455C75.045 33.3159 73.3838 33.6953 71.7072 33.6483C65.2983 33.6483 60.9539 28.9982 60.9539 22.2185C60.9539 15.4388 65.2983 10.8489 71.612 10.8489C73.2607 10.8031 74.8955 11.1619 76.3735 11.8939C77.8514 12.6259 79.1276 13.7088 80.0904 15.048C80.1565 15.1382 80.2035 15.241 80.2283 15.3501C80.2531 15.4591 80.2552 15.5721 80.2345 15.6821C80.2139 15.792 80.1708 15.8965 80.1081 15.9892C80.0454 16.0818 79.9643 16.1605 79.8699 16.2205L77.9858 17.353Z" fill="#00D54B"></path>\n      <path d="M91.996 32.4194V31.4974C90.9938 32.7902 89.5958 33.5919 87.3459 33.5919C84.0187 33.5919 81.7087 31.773 81.7087 28.581C81.7087 24.6074 85.2514 23.9259 87.4361 23.6203C89.7812 23.2795 91.7805 23.1192 91.7805 21.5859C91.7805 20.2279 90.2121 19.8621 88.8843 19.8621C87.36 19.8875 85.8625 20.2666 84.5098 20.9695C84.4159 21.0211 84.3125 21.0531 84.2059 21.0636C84.0993 21.0741 83.9917 21.0628 83.8896 21.0305C83.7874 20.9982 83.693 20.9455 83.6118 20.8755C83.5306 20.8056 83.4645 20.72 83.4174 20.6238L82.7309 19.1907C82.6391 19.005 82.6223 18.7912 82.6839 18.5934C82.7454 18.3956 82.8807 18.2291 83.0616 18.1284C84.9562 17.1198 87.0687 16.5899 89.215 16.585C93.0333 16.585 95.7291 18.1534 95.7291 21.9467V32.4194C95.7291 32.632 95.6446 32.8359 95.4943 32.9863C95.3439 33.1366 95.14 33.2211 94.9274 33.2211H92.8328C92.7246 33.2258 92.6166 33.2086 92.5152 33.1704C92.4139 33.1323 92.3213 33.074 92.2431 32.9991C92.1649 32.9241 92.1027 32.8341 92.0602 32.7345C92.0178 32.6349 91.9959 32.5277 91.996 32.4194V32.4194ZM91.7805 25.1787C91.0439 25.7349 89.686 25.9203 88.2379 26.1808C86.7897 26.4414 85.5871 26.8272 85.5871 28.4007C85.5871 29.8488 86.6344 30.5253 88.1477 30.5253C90.0267 30.5253 91.7805 29.478 91.7805 27.0427V25.1787Z" fill="#00D54B"></path>\n      <path d="M99.1716 29.0738C99.3067 28.9164 99.4976 28.8175 99.7041 28.7979C99.9106 28.7783 100.117 28.8395 100.279 28.9686C101.619 29.9803 103.261 30.51 104.939 30.4718C106.668 30.4718 107.946 29.9156 107.946 28.5627C107.946 27.33 106.773 27.0845 103.937 26.5884C100.93 26.0873 98.0542 25.0852 98.0542 21.6577C98.0542 18.085 101.136 16.5767 104.648 16.5767C106.851 16.5441 109.002 17.2497 110.757 18.581C110.842 18.6481 110.913 18.7319 110.966 18.8274C111.018 18.9228 111.05 19.0278 111.06 19.1361C111.071 19.2444 111.059 19.3537 111.026 19.4572C110.992 19.5608 110.938 19.6565 110.867 19.7386L109.865 20.9161C109.732 21.074 109.544 21.175 109.339 21.1983C109.134 21.2216 108.927 21.1655 108.762 21.0414C107.528 20.1382 106.033 19.66 104.503 19.6784C103.025 19.6784 101.732 20.1094 101.732 21.2769C101.732 22.5747 103.546 22.8202 105.365 23.1309C109.248 23.8074 111.714 24.9148 111.714 28.1418C111.714 31.5291 109.003 33.6237 104.699 33.6237C102.346 33.6956 100.042 32.9441 98.1845 31.4991C98.1011 31.4308 98.0322 31.3467 97.9817 31.2515C97.9313 31.1564 97.9002 31.0521 97.8904 30.9449C97.8806 30.8376 97.8923 30.7295 97.9247 30.6267C97.9571 30.524 98.0096 30.4288 98.0792 30.3466L99.1716 29.0738Z" fill="#00D54B"></path>\n      <path d="M114.094 32.4211V12.0269C114.094 11.8142 114.179 11.6103 114.329 11.4599C114.48 11.3096 114.683 11.2251 114.896 11.2251H117.206C117.419 11.2251 117.623 11.3096 117.773 11.4599C117.923 11.6103 118.008 11.8142 118.008 12.0269V18.992C118.583 18.2245 119.333 17.6057 120.196 17.1873C121.059 16.7689 122.01 16.563 122.969 16.5868C126.386 16.5868 128.39 19.022 128.39 22.4996V32.4211C128.39 32.6337 128.306 32.8377 128.156 32.988C128.005 33.1384 127.801 33.2228 127.589 33.2228H125.279C125.066 33.2228 124.862 33.1384 124.712 32.988C124.561 32.8377 124.477 32.6337 124.477 32.4211V23.4015C124.477 21.6728 123.921 20.1044 121.706 20.1044C119.606 20.1044 118.008 21.5826 118.008 24.0479V32.4261C118.008 32.6387 117.923 32.8427 117.773 32.993C117.623 33.1434 117.419 33.2278 117.206 33.2278H114.896C114.79 33.2285 114.685 33.2081 114.587 33.1677C114.489 33.1273 114.401 33.0679 114.326 32.9927C114.251 32.9176 114.192 32.8284 114.153 32.7302C114.113 32.6321 114.093 32.527 114.094 32.4211V32.4211Z" fill="#00D54B"></path>\n      <path d="M153.81 32.6842L152.147 27.7736H143.738L142.07 32.6842C142.016 32.8423 141.914 32.9796 141.779 33.0767C141.643 33.1738 141.48 33.2258 141.313 33.2254H138.602C138.473 33.2252 138.346 33.1939 138.232 33.1342C138.118 33.0745 138.02 32.9881 137.946 32.8824C137.872 32.7767 137.825 32.6547 137.808 32.5269C137.792 32.3991 137.806 32.2691 137.851 32.1481L145.422 11.7488C145.482 11.5994 145.586 11.4717 145.72 11.3823C145.855 11.2929 146.012 11.246 146.174 11.2477H149.877C150.041 11.2484 150.202 11.299 150.337 11.393C150.472 11.487 150.575 11.6198 150.633 11.7739L158.175 32.1681C158.219 32.2896 158.233 32.42 158.217 32.5482C158.2 32.6764 158.152 32.7987 158.078 32.9045C158.003 33.0103 157.905 33.0966 157.79 33.156C157.675 33.2154 157.547 33.246 157.418 33.2454H154.557C154.389 33.2416 154.227 33.1854 154.093 33.0848C153.959 32.9841 153.86 32.844 153.81 32.6842ZM147.987 14.8004L144.75 24.3511H151.099L147.987 14.8004Z" fill="#00D54B"></path>\n      <path d="M163.982 17.7586V19.0214C164.552 18.2333 165.307 17.5985 166.182 17.1735C167.056 16.7486 168.022 16.5468 168.993 16.5861C173.428 16.5861 176.294 20.254 176.294 25.0595C176.294 29.8649 173.428 33.5779 168.993 33.5779C168.019 33.6148 167.051 33.4087 166.176 32.9784C165.302 32.548 164.548 31.9068 163.982 31.1126V37.762C163.982 37.9746 163.898 38.1786 163.748 38.3289C163.597 38.4793 163.393 38.5638 163.181 38.5638H160.871C160.658 38.5638 160.454 38.4793 160.304 38.3289C160.153 38.1786 160.069 37.9746 160.069 37.762V17.7185C160.069 17.5059 160.153 17.302 160.304 17.1516C160.454 17.0013 160.658 16.9168 160.871 16.9168H163.181C163.289 16.9167 163.397 16.9387 163.497 16.9814C163.597 17.0242 163.687 17.0869 163.762 17.1656C163.837 17.2444 163.895 17.3375 163.933 17.4395C163.971 17.5414 163.988 17.65 163.982 17.7586ZM168.172 30.1756C170.882 30.1756 172.18 27.8605 172.18 25.0595C172.18 22.2584 170.857 20.0035 168.172 20.0035C165.486 20.0035 163.982 22.2534 163.982 25.0595C163.982 27.8655 165.411 30.1756 168.172 30.1756Z" fill="#00D54B"></path>\n      <path d="M182.623 17.7584V19.0212C183.193 18.2338 183.949 17.5994 184.823 17.1745C185.697 16.7497 186.663 16.5475 187.634 16.5859C192.074 16.5859 194.94 20.2538 194.94 25.0592C194.94 29.8647 192.074 33.5777 187.634 33.5777C186.66 33.6137 185.692 33.4072 184.818 32.9769C183.943 32.5467 183.189 31.906 182.623 31.1124V37.7618C182.623 37.9744 182.539 38.1784 182.388 38.3287C182.238 38.4791 182.034 38.5635 181.822 38.5635H179.512C179.299 38.5635 179.095 38.4791 178.945 38.3287C178.794 38.1784 178.71 37.9744 178.71 37.7618V17.7183C178.71 17.5057 178.794 17.3018 178.945 17.1514C179.095 17.0011 179.299 16.9166 179.512 16.9166H181.822C181.931 16.9157 182.038 16.9372 182.139 16.9798C182.239 17.0223 182.33 17.0849 182.405 17.1638C182.48 17.2427 182.538 17.3362 182.576 17.4385C182.613 17.5407 182.629 17.6496 182.623 17.7584V17.7584ZM186.817 30.1753C189.528 30.1753 190.826 27.8603 190.826 25.0592C190.826 22.2582 189.503 20.0033 186.817 20.0033C184.132 20.0033 182.623 22.2532 182.623 25.0592C182.623 27.8653 184.071 30.1753 186.817 30.1753Z" fill="#00D54B"></path>\n      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5341 0.762695C5.06793 0.762695 0.636719 5.19391 0.636719 10.6601V33.8055C0.636719 39.2717 5.06792 43.7029 10.5341 43.7029H33.4495C38.9157 43.7029 43.3469 39.2717 43.3469 33.8055V10.6601C43.3469 5.1939 38.9157 0.762695 33.4495 0.762695H10.5341ZM28.9311 16.7337C27.3008 15.3539 25.235 14.5953 23.0992 14.592C21.3395 14.592 19.5799 15.1752 19.5799 16.794C19.5799 18.2698 21.1466 18.8473 23.0766 19.5587C23.2637 19.6276 23.4543 19.6979 23.6472 19.7703C27.4631 21.0574 30.6053 22.636 30.6053 26.3765C30.6053 30.4388 27.453 33.214 22.2947 33.5307L21.8272 35.7077C21.7392 36.1143 21.3785 36.4037 20.9624 36.4015H17.7197C17.4544 36.395 17.2057 36.2712 17.0406 36.0635C16.8756 35.8557 16.8113 35.5854 16.865 35.3256L17.3678 33.028C15.4207 32.5315 13.6308 31.5509 12.1642 30.1774C11.9943 30.0134 11.8984 29.7875 11.8984 29.5514C11.8984 29.3153 11.9943 29.0894 12.1642 28.9255L13.9641 27.1659C14.3045 26.8311 14.8504 26.8311 15.1908 27.1659C16.8396 28.7389 19.0409 29.6003 21.3194 29.564C23.6673 29.564 25.261 28.5685 25.261 26.9899C25.261 25.5627 23.9543 25.0847 21.4745 24.1777C21.2114 24.0814 20.9351 23.9804 20.6457 23.8728C17.4582 22.7366 14.4417 21.1127 14.4417 17.337C14.4417 12.9681 18.0917 10.8364 22.3953 10.6252L22.8478 8.40808C22.9374 8.00529 23.2949 7.71889 23.7075 7.7193H26.9402C27.2036 7.71846 27.4533 7.83631 27.6201 8.04014C27.7868 8.24397 27.8529 8.51208 27.7999 8.77006L27.2972 11.2486C28.9429 11.7866 30.4679 12.6405 31.7868 13.7624C31.9686 13.9187 32.0768 14.1439 32.0854 14.3835C32.094 14.6231 32.0021 14.8554 31.832 15.0243L30.1528 16.7086C29.8166 17.0394 29.2806 17.0504 28.9311 16.7337Z" fill="#00D54B"></path>\n    </svg>\n    <a data-button="green" data-chapter-download="" href="https://click.cash.app/ui6m/bf0fcdc2">Download <br>Cash App</a>\n    <div data-spend-content="">\n      <h2>Design a debit card to match your style</h2>\n      <p>Cash Card is the customizable, fee-free debit card. Use it everywhere to earn instant discounts on everyday spending.</p>\n    </div>\n    <img alt="Spend Phone" data-spend-phone="" src="https://cash-f.squarecdn.com/web/marketing/494a08c25a1d65bf05764a551e818ab0142da7b9/assets/images/home-2021/spend-phone.png" style="transform: translate3d(0px, 0px, -30px) rotateY(35deg);">\n    <img alt="Stairs 1" data-spend-stairs-right="" src="https://cash-f.squarecdn.com/web/marketing/494a08c25a1d65bf05764a551e818ab0142da7b9/assets/images/home-2021/boost-stairs-1.png">\n    <img alt="Stairs 2" data-spend-stairs-left="" src="https://cash-f.squarecdn.com/web/marketing/494a08c25a1d65bf05764a551e818ab0142da7b9/assets/images/home-2021/boost-stairs-2.png">\n    <img alt="Burger" data-spend-burger="" data-spend-element="" src="https://cash-f.squarecdn.com/web/marketing/494a08c25a1d65bf05764a551e818ab0142da7b9/assets/images/home-2021/boost-burger.png">\n    <img alt="Coffee" data-spend-coffee="" data-spend-element="" src="https://cash-f.squarecdn.com/web/marketing/494a08c25a1d65bf05764a551e818ab0142da7b9/assets/images/home-2021/boost-coffee.png">\n    <img alt="Hand" data-spend-hand="" data-spend-element="" src="https://cash-f.squarecdn.com/web/marketing/494a08c25a1d65bf05764a551e818ab0142da7b9/assets/images/home-2021/boost-hand.png">\n    <img alt="Shoe" data-spend-shoe="" data-spend-element="" src="https://cash-f.squarecdn.com/web/marketing/494a08c25a1d65bf05764a551e818ab0142da7b9/assets/images/home-2021/boost-shoe.png">\n  </section>\n  <section data-chapter="bank">\n    <svg data-chapter-logo="" viewBox="0 0 195 44" fill="none">\n      <path d="M77.9858 17.353C77.8137 17.4574 77.6088 17.4936 77.4113 17.4547C77.2139 17.4158 77.0381 17.3044 76.9185 17.1425C76.3306 16.2985 75.5417 15.6143 74.6231 15.1515C73.7046 14.6887 72.6852 14.462 71.6571 14.4918C67.6484 14.4918 65.188 17.6636 65.188 22.1935C65.188 26.7233 67.6935 29.9553 71.7022 29.9553C72.744 29.9802 73.775 29.7387 74.6975 29.2538C75.6199 28.7689 76.4034 28.0566 76.9736 27.1843C77.0876 27.0203 77.259 26.9051 77.4539 26.8615C77.6487 26.8179 77.8529 26.849 78.0259 26.9488L79.93 28.0512C80.034 28.1039 80.1254 28.1784 80.198 28.2696C80.2706 28.3609 80.3227 28.4667 80.3507 28.5798C80.3788 28.693 80.3821 28.8109 80.3606 28.9254C80.339 29.04 80.293 29.1486 80.2257 29.2438C79.2948 30.639 78.0248 31.7751 76.5349 32.5455C75.045 33.3159 73.3838 33.6953 71.7072 33.6483C65.2983 33.6483 60.9539 28.9982 60.9539 22.2185C60.9539 15.4388 65.2983 10.8489 71.612 10.8489C73.2607 10.8031 74.8955 11.1619 76.3735 11.8939C77.8514 12.6259 79.1276 13.7088 80.0904 15.048C80.1565 15.1382 80.2035 15.241 80.2283 15.3501C80.2531 15.4591 80.2552 15.5721 80.2345 15.6821C80.2139 15.792 80.1708 15.8965 80.1081 15.9892C80.0454 16.0818 79.9643 16.1605 79.8699 16.2205L77.9858 17.353Z" fill="#00D54B"></path>\n      <path d="M91.996 32.4194V31.4974C90.9938 32.7902 89.5958 33.5919 87.3459 33.5919C84.0187 33.5919 81.7087 31.773 81.7087 28.581C81.7087 24.6074 85.2514 23.9259 87.4361 23.6203C89.7812 23.2795 91.7805 23.1192 91.7805 21.5859C91.7805 20.2279 90.2121 19.8621 88.8843 19.8621C87.36 19.8875 85.8625 20.2666 84.5098 20.9695C84.4159 21.0211 84.3125 21.0531 84.2059 21.0636C84.0993 21.0741 83.9917 21.0628 83.8896 21.0305C83.7874 20.9982 83.693 20.9455 83.6118 20.8755C83.5306 20.8056 83.4645 20.72 83.4174 20.6238L82.7309 19.1907C82.6391 19.005 82.6223 18.7912 82.6839 18.5934C82.7454 18.3956 82.8807 18.2291 83.0616 18.1284C84.9562 17.1198 87.0687 16.5899 89.215 16.585C93.0333 16.585 95.7291 18.1534 95.7291 21.9467V32.4194C95.7291 32.632 95.6446 32.8359 95.4943 32.9863C95.3439 33.1366 95.14 33.2211 94.9274 33.2211H92.8328C92.7246 33.2258 92.6166 33.2086 92.5152 33.1704C92.4139 33.1323 92.3213 33.074 92.2431 32.9991C92.1649 32.9241 92.1027 32.8341 92.0602 32.7345C92.0178 32.6349 91.9959 32.5277 91.996 32.4194V32.4194ZM91.7805 25.1787C91.0439 25.7349 89.686 25.9203 88.2379 26.1808C86.7897 26.4414 85.5871 26.8272 85.5871 28.4007C85.5871 29.8488 86.6344 30.5253 88.1477 30.5253C90.0267 30.5253 91.7805 29.478 91.7805 27.0427V25.1787Z" fill="#00D54B"></path>\n      <path d="M99.1716 29.0738C99.3067 28.9164 99.4976 28.8175 99.7041 28.7979C99.9106 28.7783 100.117 28.8395 100.279 28.9686C101.619 29.9803 103.261 30.51 104.939 30.4718C106.668 30.4718 107.946 29.9156 107.946 28.5627C107.946 27.33 106.773 27.0845 103.937 26.5884C100.93 26.0873 98.0542 25.0852 98.0542 21.6577C98.0542 18.085 101.136 16.5767 104.648 16.5767C106.851 16.5441 109.002 17.2497 110.757 18.581C110.842 18.6481 110.913 18.7319 110.966 18.8274C111.018 18.9228 111.05 19.0278 111.06 19.1361C111.071 19.2444 111.059 19.3537 111.026 19.4572C110.992 19.5608 110.938 19.6565 110.867 19.7386L109.865 20.9161C109.732 21.074 109.544 21.175 109.339 21.1983C109.134 21.2216 108.927 21.1655 108.762 21.0414C107.528 20.1382 106.033 19.66 104.503 19.6784C103.025 19.6784 101.732 20.1094 101.732 21.2769C101.732 22.5747 103.546 22.8202 105.365 23.1309C109.248 23.8074 111.714 24.9148 111.714 28.1418C111.714 31.5291 109.003 33.6237 104.699 33.6237C102.346 33.6956 100.042 32.9441 98.1845 31.4991C98.1011 31.4308 98.0322 31.3467 97.9817 31.2515C97.9313 31.1564 97.9002 31.0521 97.8904 30.9449C97.8806 30.8376 97.8923 30.7295 97.9247 30.6267C97.9571 30.524 98.0096 30.4288 98.0792 30.3466L99.1716 29.0738Z" fill="#00D54B"></path>\n      <path d="M114.094 32.4211V12.0269C114.094 11.8142 114.179 11.6103 114.329 11.4599C114.48 11.3096 114.683 11.2251 114.896 11.2251H117.206C117.419 11.2251 117.623 11.3096 117.773 11.4599C117.923 11.6103 118.008 11.8142 118.008 12.0269V18.992C118.583 18.2245 119.333 17.6057 120.196 17.1873C121.059 16.7689 122.01 16.563 122.969 16.5868C126.386 16.5868 128.39 19.022 128.39 22.4996V32.4211C128.39 32.6337 128.306 32.8377 128.156 32.988C128.005 33.1384 127.801 33.2228 127.589 33.2228H125.279C125.066 33.2228 124.862 33.1384 124.712 32.988C124.561 32.8377 124.477 32.6337 124.477 32.4211V23.4015C124.477 21.6728 123.921 20.1044 121.706 20.1044C119.606 20.1044 118.008 21.5826 118.008 24.0479V32.4261C118.008 32.6387 117.923 32.8427 117.773 32.993C117.623 33.1434 117.419 33.2278 117.206 33.2278H114.896C114.79 33.2285 114.685 33.2081 114.587 33.1677C114.489 33.1273 114.401 33.0679 114.326 32.9927C114.251 32.9176 114.192 32.8284 114.153 32.7302C114.113 32.6321 114.093 32.527 114.094 32.4211V32.4211Z" fill="#00D54B"></path>\n      <path d="M153.81 32.6842L152.147 27.7736H143.738L142.07 32.6842C142.016 32.8423 141.914 32.9796 141.779 33.0767C141.643 33.1738 141.48 33.2258 141.313 33.2254H138.602C138.473 33.2252 138.346 33.1939 138.232 33.1342C138.118 33.0745 138.02 32.9881 137.946 32.8824C137.872 32.7767 137.825 32.6547 137.808 32.5269C137.792 32.3991 137.806 32.2691 137.851 32.1481L145.422 11.7488C145.482 11.5994 145.586 11.4717 145.72 11.3823C145.855 11.2929 146.012 11.246 146.174 11.2477H149.877C150.041 11.2484 150.202 11.299 150.337 11.393C150.472 11.487 150.575 11.6198 150.633 11.7739L158.175 32.1681C158.219 32.2896 158.233 32.42 158.217 32.5482C158.2 32.6764 158.152 32.7987 158.078 32.9045C158.003 33.0103 157.905 33.0966 157.79 33.156C157.675 33.2154 157.547 33.246 157.418 33.2454H154.557C154.389 33.2416 154.227 33.1854 154.093 33.0848C153.959 32.9841 153.86 32.844 153.81 32.6842ZM147.987 14.8004L144.75 24.3511H151.099L147.987 14.8004Z" fill="#00D54B"></path>\n      <path d="M163.982 17.7586V19.0214C164.552 18.2333 165.307 17.5985 166.182 17.1735C167.056 16.7486 168.022 16.5468 168.993 16.5861C173.428 16.5861 176.294 20.254 176.294 25.0595C176.294 29.8649 173.428 33.5779 168.993 33.5779C168.019 33.6148 167.051 33.4087 166.176 32.9784C165.302 32.548 164.548 31.9068 163.982 31.1126V37.762C163.982 37.9746 163.898 38.1786 163.748 38.3289C163.597 38.4793 163.393 38.5638 163.181 38.5638H160.871C160.658 38.5638 160.454 38.4793 160.304 38.3289C160.153 38.1786 160.069 37.9746 160.069 37.762V17.7185C160.069 17.5059 160.153 17.302 160.304 17.1516C160.454 17.0013 160.658 16.9168 160.871 16.9168H163.181C163.289 16.9167 163.397 16.9387 163.497 16.9814C163.597 17.0242 163.687 17.0869 163.762 17.1656C163.837 17.2444 163.895 17.3375 163.933 17.4395C163.971 17.5414 163.988 17.65 163.982 17.7586ZM168.172 30.1756C170.882 30.1756 172.18 27.8605 172.18 25.0595C172.18 22.2584 170.857 20.0035 168.172 20.0035C165.486 20.0035 163.982 22.2534 163.982 25.0595C163.982 27.8655 165.411 30.1756 168.172 30.1756Z" fill="#00D54B"></path>\n      <path d="M182.623 17.7584V19.0212C183.193 18.2338 183.949 17.5994 184.823 17.1745C185.697 16.7497 186.663 16.5475 187.634 16.5859C192.074 16.5859 194.94 20.2538 194.94 25.0592C194.94 29.8647 192.074 33.5777 187.634 33.5777C186.66 33.6137 185.692 33.4072 184.818 32.9769C183.943 32.5467 183.189 31.906 182.623 31.1124V37.7618C182.623 37.9744 182.539 38.1784 182.388 38.3287C182.238 38.4791 182.034 38.5635 181.822 38.5635H179.512C179.299 38.5635 179.095 38.4791 178.945 38.3287C178.794 38.1784 178.71 37.9744 178.71 37.7618V17.7183C178.71 17.5057 178.794 17.3018 178.945 17.1514C179.095 17.0011 179.299 16.9166 179.512 16.9166H181.822C181.931 16.9157 182.038 16.9372 182.139 16.9798C182.239 17.0223 182.33 17.0849 182.405 17.1638C182.48 17.2427 182.538 17.3362 182.576 17.4385C182.613 17.5407 182.629 17.6496 182.623 17.7584V17.7584ZM186.817 30.1753C189.528 30.1753 190.826 27.8603 190.826 25.0592C190.826 22.2582 189.503 20.0033 186.817 20.0033C184.132 20.0033 182.623 22.2532 182.623 25.0592C182.623 27.8653 184.071 30.1753 186.817 30.1753Z" fill="#00D54B"></path>\n      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5341 0.762695C5.06793 0.762695 0.636719 5.19391 0.636719 10.6601V33.8055C0.636719 39.2717 5.06792 43.7029 10.5341 43.7029H33.4495C38.9157 43.7029 43.3469 39.2717 43.3469 33.8055V10.6601C43.3469 5.1939 38.9157 0.762695 33.4495 0.762695H10.5341ZM28.9311 16.7337C27.3008 15.3539 25.235 14.5953 23.0992 14.592C21.3395 14.592 19.5799 15.1752 19.5799 16.794C19.5799 18.2698 21.1466 18.8473 23.0766 19.5587C23.2637 19.6276 23.4543 19.6979 23.6472 19.7703C27.4631 21.0574 30.6053 22.636 30.6053 26.3765C30.6053 30.4388 27.453 33.214 22.2947 33.5307L21.8272 35.7077C21.7392 36.1143 21.3785 36.4037 20.9624 36.4015H17.7197C17.4544 36.395 17.2057 36.2712 17.0406 36.0635C16.8756 35.8557 16.8113 35.5854 16.865 35.3256L17.3678 33.028C15.4207 32.5315 13.6308 31.5509 12.1642 30.1774C11.9943 30.0134 11.8984 29.7875 11.8984 29.5514C11.8984 29.3153 11.9943 29.0894 12.1642 28.9255L13.9641 27.1659C14.3045 26.8311 14.8504 26.8311 15.1908 27.1659C16.8396 28.7389 19.0409 29.6003 21.3194 29.564C23.6673 29.564 25.261 28.5685 25.261 26.9899C25.261 25.5627 23.9543 25.0847 21.4745 24.1777C21.2114 24.0814 20.9351 23.9804 20.6457 23.8728C17.4582 22.7366 14.4417 21.1127 14.4417 17.337C14.4417 12.9681 18.0917 10.8364 22.3953 10.6252L22.8478 8.40808C22.9374 8.00529 23.2949 7.71889 23.7075 7.7193H26.9402C27.2036 7.71846 27.4533 7.83631 27.6201 8.04014C27.7868 8.24397 27.8529 8.51208 27.7999 8.77006L27.2972 11.2486C28.9429 11.7866 30.4679 12.6405 31.7868 13.7624C31.9686 13.9187 32.0768 14.1439 32.0854 14.3835C32.094 14.6231 32.0021 14.8554 31.832 15.0243L30.1528 16.7086C29.8166 17.0394 29.2806 17.0504 28.9311 16.7337Z" fill="#00D54B"></path>\n    </svg>\n    <a data-button="green" data-chapter-download="" href="https://click.cash.app/ui6m/bf0fcdc2">Download <br>Cash App</a>\n    <div data-bank-content="">\n      <h2>Speed up your direct deposits</h2>\n      <p>With a Cash App account, you can receive paychecks up to 2 days early. Plus, ATM withdrawals are free when you have at least $300 coming in each month.<sup>1</sup></p>\n    </div>\n    <img alt="Bank Phone" data-bank-phone="" src="https://cash-f.squarecdn.com/web/marketing/494a08c25a1d65bf05764a551e818ab0142da7b9/assets/images/home-2021/banking-phone.png" style="transform: translate3d(0px, 0px, -30px);">\n    <img alt="Track" data-bank-track="1" src="https://cash-f.squarecdn.com/web/marketing/494a08c25a1d65bf05764a551e818ab0142da7b9/assets/images/home-2021/banking-track-1.png" style="transform: translate3d(0px, 0px, -20px);">\n    <img alt="Ramp" data-bank-ramp="1" src="https://cash-f.squarecdn.com/web/marketing/494a08c25a1d65bf05764a551e818ab0142da7b9/assets/images/home-2021/banking-ramp-1.png" style="transform: translate3d(0px, 0px, -20px);">\n    <img alt="Cubes" data-bank-cubes="1" src="https://cash-f.squarecdn.com/web/marketing/494a08c25a1d65bf05764a551e818ab0142da7b9/assets/images/home-2021/banking-cubes.png" style="transform: translate3d(0px, 0px, -40px);">\n    <img alt="Tube" data-bank-tube="1" src="https://cash-f.squarecdn.com/web/marketing/494a08c25a1d65bf05764a551e818ab0142da7b9/assets/images/home-2021/banking-tube.png" style="transform: translate3d(0px, 0px, -50px);">\n    <img alt="Column" data-bank-column="1" src="https://cash-f.squarecdn.com/web/marketing/494a08c25a1d65bf05764a551e818ab0142da7b9/assets/images/home-2021/banking-column.png" style="transform: translate3d(0px, 0px, -40px);">\n    <img alt="Hole" data-bank-hole="1" src="https://cash-f.squarecdn.com/web/marketing/494a08c25a1d65bf05764a551e818ab0142da7b9/assets/images/home-2021/banking-hole.png" style="transform: translate3d(0px, 0px, -60px);">\n    <img alt="Monster" data-bank-monster="1" src="https://cash-f.squarecdn.com/web/marketing/494a08c25a1d65bf05764a551e818ab0142da7b9/assets/images/home-2021/banking-monster.png" style="transform: translate3d(0px, 0px, -55px);">\n    <img alt="Stairs" data-bank-stairs="1" src="https://cash-f.squarecdn.com/web/marketing/494a08c25a1d65bf05764a551e818ab0142da7b9/assets/images/home-2021/banking-stairs-1.png" style="transform: translate3d(0px, 0px, -40px);">\n  </section>\n  <section data-chapter="invest">\n    <svg data-chapter-logo="" viewBox="0 0 195 44" fill="none">\n      <path d="M77.9858 17.353C77.8137 17.4574 77.6088 17.4936 77.4113 17.4547C77.2139 17.4158 77.0381 17.3044 76.9185 17.1425C76.3306 16.2985 75.5417 15.6143 74.6231 15.1515C73.7046 14.6887 72.6852 14.462 71.6571 14.4918C67.6484 14.4918 65.188 17.6636 65.188 22.1935C65.188 26.7233 67.6935 29.9553 71.7022 29.9553C72.744 29.9802 73.775 29.7387 74.6975 29.2538C75.6199 28.7689 76.4034 28.0566 76.9736 27.1843C77.0876 27.0203 77.259 26.9051 77.4539 26.8615C77.6487 26.8179 77.8529 26.849 78.0259 26.9488L79.93 28.0512C80.034 28.1039 80.1254 28.1784 80.198 28.2696C80.2706 28.3609 80.3227 28.4667 80.3507 28.5798C80.3788 28.693 80.3821 28.8109 80.3606 28.9254C80.339 29.04 80.293 29.1486 80.2257 29.2438C79.2948 30.639 78.0248 31.7751 76.5349 32.5455C75.045 33.3159 73.3838 33.6953 71.7072 33.6483C65.2983 33.6483 60.9539 28.9982 60.9539 22.2185C60.9539 15.4388 65.2983 10.8489 71.612 10.8489C73.2607 10.8031 74.8955 11.1619 76.3735 11.8939C77.8514 12.6259 79.1276 13.7088 80.0904 15.048C80.1565 15.1382 80.2035 15.241 80.2283 15.3501C80.2531 15.4591 80.2552 15.5721 80.2345 15.6821C80.2139 15.792 80.1708 15.8965 80.1081 15.9892C80.0454 16.0818 79.9643 16.1605 79.8699 16.2205L77.9858 17.353Z" fill="white"></path>\n      <path d="M91.996 32.4194V31.4974C90.9938 32.7902 89.5958 33.5919 87.3459 33.5919C84.0187 33.5919 81.7087 31.773 81.7087 28.581C81.7087 24.6074 85.2514 23.9259 87.4361 23.6203C89.7812 23.2795 91.7805 23.1192 91.7805 21.5859C91.7805 20.2279 90.2121 19.8621 88.8843 19.8621C87.36 19.8875 85.8625 20.2666 84.5098 20.9695C84.4159 21.0211 84.3125 21.0531 84.2059 21.0636C84.0993 21.0741 83.9917 21.0628 83.8896 21.0305C83.7874 20.9982 83.693 20.9455 83.6118 20.8755C83.5306 20.8056 83.4645 20.72 83.4174 20.6238L82.7309 19.1907C82.6391 19.005 82.6223 18.7912 82.6839 18.5934C82.7454 18.3956 82.8807 18.2291 83.0616 18.1284C84.9562 17.1198 87.0687 16.5899 89.215 16.585C93.0333 16.585 95.7291 18.1534 95.7291 21.9467V32.4194C95.7291 32.632 95.6446 32.8359 95.4943 32.9863C95.3439 33.1366 95.14 33.2211 94.9274 33.2211H92.8328C92.7246 33.2258 92.6166 33.2086 92.5152 33.1704C92.4139 33.1323 92.3213 33.074 92.2431 32.9991C92.1649 32.9241 92.1027 32.8341 92.0602 32.7345C92.0178 32.6349 91.9959 32.5277 91.996 32.4194V32.4194ZM91.7805 25.1787C91.0439 25.7349 89.686 25.9203 88.2379 26.1808C86.7897 26.4414 85.5871 26.8272 85.5871 28.4007C85.5871 29.8488 86.6344 30.5253 88.1477 30.5253C90.0267 30.5253 91.7805 29.478 91.7805 27.0427V25.1787Z" fill="white"></path>\n      <path d="M99.1716 29.0738C99.3067 28.9164 99.4976 28.8175 99.7041 28.7979C99.9106 28.7783 100.117 28.8395 100.279 28.9686C101.619 29.9803 103.261 30.51 104.939 30.4718C106.668 30.4718 107.946 29.9156 107.946 28.5627C107.946 27.33 106.773 27.0845 103.937 26.5884C100.93 26.0873 98.0542 25.0852 98.0542 21.6577C98.0542 18.085 101.136 16.5767 104.648 16.5767C106.851 16.5441 109.002 17.2497 110.757 18.581C110.842 18.6481 110.913 18.7319 110.966 18.8274C111.018 18.9228 111.05 19.0278 111.06 19.1361C111.071 19.2444 111.059 19.3537 111.026 19.4572C110.992 19.5608 110.938 19.6565 110.867 19.7386L109.865 20.9161C109.732 21.074 109.544 21.175 109.339 21.1983C109.134 21.2216 108.927 21.1655 108.762 21.0414C107.528 20.1382 106.033 19.66 104.503 19.6784C103.025 19.6784 101.732 20.1094 101.732 21.2769C101.732 22.5747 103.546 22.8202 105.365 23.1309C109.248 23.8074 111.714 24.9148 111.714 28.1418C111.714 31.5291 109.003 33.6237 104.699 33.6237C102.346 33.6956 100.042 32.9441 98.1845 31.4991C98.1011 31.4308 98.0322 31.3467 97.9817 31.2515C97.9313 31.1564 97.9002 31.0521 97.8904 30.9449C97.8806 30.8376 97.8923 30.7295 97.9247 30.6267C97.9571 30.524 98.0096 30.4288 98.0792 30.3466L99.1716 29.0738Z" fill="white"></path>\n      <path d="M114.094 32.4211V12.0269C114.094 11.8142 114.179 11.6103 114.329 11.4599C114.48 11.3096 114.683 11.2251 114.896 11.2251H117.206C117.419 11.2251 117.623 11.3096 117.773 11.4599C117.923 11.6103 118.008 11.8142 118.008 12.0269V18.992C118.583 18.2245 119.333 17.6057 120.196 17.1873C121.059 16.7689 122.01 16.563 122.969 16.5868C126.386 16.5868 128.39 19.022 128.39 22.4996V32.4211C128.39 32.6337 128.306 32.8377 128.156 32.988C128.005 33.1384 127.801 33.2228 127.589 33.2228H125.279C125.066 33.2228 124.862 33.1384 124.712 32.988C124.561 32.8377 124.477 32.6337 124.477 32.4211V23.4015C124.477 21.6728 123.921 20.1044 121.706 20.1044C119.606 20.1044 118.008 21.5826 118.008 24.0479V32.4261C118.008 32.6387 117.923 32.8427 117.773 32.993C117.623 33.1434 117.419 33.2278 117.206 33.2278H114.896C114.79 33.2285 114.685 33.2081 114.587 33.1677C114.489 33.1273 114.401 33.0679 114.326 32.9927C114.251 32.9176 114.192 32.8284 114.153 32.7302C114.113 32.6321 114.093 32.527 114.094 32.4211V32.4211Z" fill="white"></path>\n      <path d="M153.81 32.6842L152.147 27.7736H143.738L142.07 32.6842C142.016 32.8423 141.914 32.9796 141.779 33.0767C141.643 33.1738 141.48 33.2258 141.313 33.2254H138.602C138.473 33.2252 138.346 33.1939 138.232 33.1342C138.118 33.0745 138.02 32.9881 137.946 32.8824C137.872 32.7767 137.825 32.6547 137.808 32.5269C137.792 32.3991 137.806 32.2691 137.851 32.1481L145.422 11.7488C145.482 11.5994 145.586 11.4717 145.72 11.3823C145.855 11.2929 146.012 11.246 146.174 11.2477H149.877C150.041 11.2484 150.202 11.299 150.337 11.393C150.472 11.487 150.575 11.6198 150.633 11.7739L158.175 32.1681C158.219 32.2896 158.233 32.42 158.217 32.5482C158.2 32.6764 158.152 32.7987 158.078 32.9045C158.003 33.0103 157.905 33.0966 157.79 33.156C157.675 33.2154 157.547 33.246 157.418 33.2454H154.557C154.389 33.2416 154.227 33.1854 154.093 33.0848C153.959 32.9841 153.86 32.844 153.81 32.6842ZM147.987 14.8004L144.75 24.3511H151.099L147.987 14.8004Z" fill="white"></path>\n      <path d="M163.982 17.7586V19.0214C164.552 18.2333 165.307 17.5985 166.182 17.1735C167.056 16.7486 168.022 16.5468 168.993 16.5861C173.428 16.5861 176.294 20.254 176.294 25.0595C176.294 29.8649 173.428 33.5779 168.993 33.5779C168.019 33.6148 167.051 33.4087 166.176 32.9784C165.302 32.548 164.548 31.9068 163.982 31.1126V37.762C163.982 37.9746 163.898 38.1786 163.748 38.3289C163.597 38.4793 163.393 38.5638 163.181 38.5638H160.871C160.658 38.5638 160.454 38.4793 160.304 38.3289C160.153 38.1786 160.069 37.9746 160.069 37.762V17.7185C160.069 17.5059 160.153 17.302 160.304 17.1516C160.454 17.0013 160.658 16.9168 160.871 16.9168H163.181C163.289 16.9167 163.397 16.9387 163.497 16.9814C163.597 17.0242 163.687 17.0869 163.762 17.1656C163.837 17.2444 163.895 17.3375 163.933 17.4395C163.971 17.5414 163.988 17.65 163.982 17.7586ZM168.172 30.1756C170.882 30.1756 172.18 27.8605 172.18 25.0595C172.18 22.2584 170.857 20.0035 168.172 20.0035C165.486 20.0035 163.982 22.2534 163.982 25.0595C163.982 27.8655 165.411 30.1756 168.172 30.1756Z" fill="white"></path>\n      <path d="M182.623 17.7584V19.0212C183.193 18.2338 183.949 17.5994 184.823 17.1745C185.697 16.7497 186.663 16.5475 187.634 16.5859C192.074 16.5859 194.94 20.2538 194.94 25.0592C194.94 29.8647 192.074 33.5777 187.634 33.5777C186.66 33.6137 185.692 33.4072 184.818 32.9769C183.943 32.5467 183.189 31.906 182.623 31.1124V37.7618C182.623 37.9744 182.539 38.1784 182.388 38.3287C182.238 38.4791 182.034 38.5635 181.822 38.5635H179.512C179.299 38.5635 179.095 38.4791 178.945 38.3287C178.794 38.1784 178.71 37.9744 178.71 37.7618V17.7183C178.71 17.5057 178.794 17.3018 178.945 17.1514C179.095 17.0011 179.299 16.9166 179.512 16.9166H181.822C181.931 16.9157 182.038 16.9372 182.139 16.9798C182.239 17.0223 182.33 17.0849 182.405 17.1638C182.48 17.2427 182.538 17.3362 182.576 17.4385C182.613 17.5407 182.629 17.6496 182.623 17.7584V17.7584ZM186.817 30.1753C189.528 30.1753 190.826 27.8603 190.826 25.0592C190.826 22.2582 189.503 20.0033 186.817 20.0033C184.132 20.0033 182.623 22.2532 182.623 25.0592C182.623 27.8653 184.071 30.1753 186.817 30.1753Z" fill="white"></path>\n      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5341 0.762695C5.06793 0.762695 0.636719 5.19391 0.636719 10.6601V33.8055C0.636719 39.2717 5.06792 43.7029 10.5341 43.7029H33.4495C38.9157 43.7029 43.3469 39.2717 43.3469 33.8055V10.6601C43.3469 5.1939 38.9157 0.762695 33.4495 0.762695H10.5341ZM28.9311 16.7337C27.3008 15.3539 25.235 14.5953 23.0992 14.592C21.3395 14.592 19.5799 15.1752 19.5799 16.794C19.5799 18.2698 21.1466 18.8473 23.0766 19.5587C23.2637 19.6276 23.4543 19.6979 23.6472 19.7703C27.4631 21.0574 30.6053 22.636 30.6053 26.3765C30.6053 30.4388 27.453 33.214 22.2947 33.5307L21.8272 35.7077C21.7392 36.1143 21.3785 36.4037 20.9624 36.4015H17.7197C17.4544 36.395 17.2057 36.2712 17.0406 36.0635C16.8756 35.8557 16.8113 35.5854 16.865 35.3256L17.3678 33.028C15.4207 32.5315 13.6308 31.5509 12.1642 30.1774C11.9943 30.0134 11.8984 29.7875 11.8984 29.5514C11.8984 29.3153 11.9943 29.0894 12.1642 28.9255L13.9641 27.1659C14.3045 26.8311 14.8504 26.8311 15.1908 27.1659C16.8396 28.7389 19.0409 29.6003 21.3194 29.564C23.6673 29.564 25.261 28.5685 25.261 26.9899C25.261 25.5627 23.9543 25.0847 21.4745 24.1777C21.2114 24.0814 20.9351 23.9804 20.6457 23.8728C17.4582 22.7366 14.4417 21.1127 14.4417 17.337C14.4417 12.9681 18.0917 10.8364 22.3953 10.6252L22.8478 8.40808C22.9374 8.00529 23.2949 7.71889 23.7075 7.7193H26.9402C27.2036 7.71846 27.4533 7.83631 27.6201 8.04014C27.7868 8.24397 27.8529 8.51208 27.7999 8.77006L27.2972 11.2486C28.9429 11.7866 30.4679 12.6405 31.7868 13.7624C31.9686 13.9187 32.0768 14.1439 32.0854 14.3835C32.094 14.6231 32.0021 14.8554 31.832 15.0243L30.1528 16.7086C29.8166 17.0394 29.2806 17.0504 28.9311 16.7337Z" fill="white"></path>\n    </svg>\n    <a data-button="black" data-chapter-download="" href="https://click.cash.app/ui6m/bf0fcdc2">Download <br>Cash App</a>\n    <figure data-invest-floor="" style="transform: translate(-50%, 0%) translate3d(0px, 35px, -30px);"></figure>\n    <div data-invest-content="">\n      <h2>Buy stocks and bitcoin with as little as $1</h2>\n      <p>Whether you\u2019re just getting started or already a pro, Cash App makes it easy to invest in stocks and bitcoin.<sup>2</sup></p>\n      <a href="/investing" data-learn-more="">\n        <svg data-arrow-right="" width="13" height="10" viewBox="0 0 31 19" fill="none">\n          <path d="M29.7111 9.2849L20.4978 1.22725C20.0752 0.857486 19.4363 0.905923 19.0724 1.33299C18.7071 1.76074 18.7536 2.4068 19.1762 2.77656L26.2383 8.95198L1.07242 8.95198C0.514404 8.95198 0.0615234 9.40975 0.0615234 9.97531C0.0615234 10.5409 0.514404 10.9986 1.07242 10.9986L26.4924 10.9986L22.467 14.6355L19.3224 17.1529C18.8851 17.5036 18.8102 18.1469 19.1566 18.5903C19.3561 18.8455 19.652 18.9785 19.9505 18.9785C20.1702 18.9785 20.3913 18.9069 20.5773 18.7575L23.767 16.2005L29.7232 10.8219C29.9402 10.6261 30.0635 10.3451 30.0615 10.0504C30.0588 9.75632 29.9321 9.47729 29.7111 9.2849Z" fill="black"></path>\n        </svg>\n        Learn more about <span> investing</span></a>\n    </div>\n    <figure data-invest-phones="" style="transform: translate3d(0px, 0px, -25px);">\n      <img alt="Investing Phone" data-invest-investing-phone="" src="https://cash-f.squarecdn.com/web/marketing/494a08c25a1d65bf05764a551e818ab0142da7b9/assets/images/home-2021/investing-phone.png">\n      <img alt="Bitcoin Phone" data-invest-bitcoin-phone="" src="https://cash-f.squarecdn.com/web/marketing/494a08c25a1d65bf05764a551e818ab0142da7b9/assets/images/home-2021/bitcoin-phone.png">\n    </figure>\n    <figure data-invest-rays="" style="transform: translate(-50%, -50%) translate3d(0px, 0px, -30px);">\n      <div data-rays-svg="">\n        <svg viewBox="0 0 2484.9 2484.9">\n          <defs>\n            <mask id="a" width="2484.9" height="2484.9" x="0" y="0" maskUnits="userSpaceOnUse">\n              <path fill="#fff" d="M243.98 233.95h1961.93v1960H243.98z"></path>\n            </mask>\n          </defs>\n          <g data-name="Layer 1" mask="url(#a)" opacity="0.3">\n            <path fill="#fff" fill-rule="evenodd" d="M1162.22 1040.44l-61.53-169.06q-1-2.85-3.58-9.72l1.61-.65 3.57 9.79q23.48 65.33 29.73 82.5c2.88 7.92 17 46.68 31.65 86.61zm30.86-8.29l-3.26-23.22 1.49-.21c1.07 7.55 2.18 15.34 3.29 23.17zm42.25-2.54l.9-12.87 1.52.08c-.29 4.26-.59 8.57-.88 12.88zm124.42 58.24l9.33-8 1.42 1.64-9.26 8c-.49-.57-.99-1.11-1.49-1.64zm36.6 58l8.88-3.21L1476 1117l.9 2.12c-31.79 11.5-60.73 22-79.7 28.79-.3-.7-.57-1.41-.85-2.11zm8.22 108l61.41 14.3 155.44 36.22-.82 2.13c-90.25-21-187.55-43.67-193.79-45.27-2.92-.75-11.43-2.78-22.7-5.43.16-.68.31-1.33.46-1.98zm-11.28 34l4.33 2-.72 1.89-4.43-2.09c.27-.65.53-1.24.82-1.86zm-21.77 36.72l8.49 6.42-1.29 1.59c-2.45-1.87-5.29-4-8.43-6.42q.63-.86 1.23-1.65zm-50.93 45.84l17.28 27.59-1.36.82c-5.17-8.28-11.53-18.42-17.29-27.59zm-30.88 15c13 35.69 26.52 72.62 26.52 72.62l37.89 103.76-1.68.64c-21.15-57.83-45.12-123.46-46.49-127.57-1.48-4.43-10.39-28.83-17.74-48.9zM1246 1395.8l1.14 8.07-1.57.19c-.39-2.73-.78-5.44-1.15-8.09zm-67.19-4.75c-2.82 12.07-5.48 23.5-7.84 33.62l-2.06-.43c1.47-6 4.46-18.69 8-33.71zm-69.7-35.41c-26 34.37-47.45 62.73-47.45 62.73s-79.91 105.58-133.93 177L926 1594c62.34-82.45 153-202.39 158-208.62 2.65-3.35 12.18-15.87 23.66-31zm-25.93-25.84c-31.3 27.08-56.62 49-56.62 49l-83.43 72.23-1.47-1.74c57.39-49.7 109.43-94.73 113.52-98.11 3.07-2.54 13.65-11.64 26.74-23 .44.59.86 1.11 1.29 1.62zm-31.9-57.12c-51.45 18.51-137 49.51-137 49.51l-172.38 62.15-.59-1.7 1-.37c22.56-8.14 235.74-85.38 241.73-87.54l66.55-24.14c.25.7.48 1.41.72 2.09zm-8.6-37.93c-36.87 5-95.27 13.12-127.52 17.59l-.25-2 50.91-7.07 76.62-10.69c.1.7.19 1.42.27 2.17zm3.31-62.49c-35.54-8.36-95.44-22.33-137.49-32.13l.42-2 39 9.08 98.58 22.89c-.15.72-.31 1.44-.5 2.16zm13.55-38.78c-56-26.37-169.37-79.49-169.37-79.49l-206-96.79.67-1.67 10.29 4.85c25.87 12.12 269.75 126.34 276.59 129.56 2.58 1.21 41.27 19.3 88.82 41.56zm17.63-29.27l-18.62-14.14 1.24-1.78 18.71 14.14zm-314.68 502.35l.43.51c-51.41 44.51-142.1 123-159.12 137.73-23.48 20.29-227.14 196.3-242.81 209.83l-125.76 108.69-1-1.59s108.3-93.21 121.11-104.28q12.81-11.07 56.27-48.82Q565.82 1774.46 579 1763.07c8.24-7.13 33.6-28.94 52.7-45.44l-.26-.29 130-113 1.54 1.78zm202.77-695.94l-.48-.55 1.78-1.54 58.84 67.68-1.78 1.55-1.21-1.39-.21.19-40.76-47.08-16.25-18.8zm568.7 29.1l-22.71 19.68-74.7 64.93-1.55-1.78 98-85.16 1.55 1.78zm-762.36 235.6l.13-1.86 154.06 11-.14 2-31.31-2.24zm-237.76-17l-1.14-.07q-164.22-11.25-179.93-12.56c-15.72-1.33-134.88-9.84-145.12-10.58q-10.25-.75-55.4-4.28l.46-2.47q143.54 10.13 168.6 12L534 1155.83zm1141.29 82.39c-27.27-2-118.64-8.46-192.18-13.74l.32-2.28 186.16 13.39 6 .43zm87.28 6.43l.33-2.35c52 3.74 109 7.83 122.69 8.83l269.43 19.66 139.56 10.18c-.23 1.25-.35 1.87-.35 1.87s-120-9-134.16-10.08l-62.56-4.41Q1925.68 1259 1911 1258c-14.63-1.06-77.64-5.85-83.53-6.09-2.8-.16-32.87-2.35-65.06-4.72zm-559.28 244.65c1.74-25.16 3-43.24 3.22-45.37.36-3.71 1.57-20.89 2.77-38.5h1.59c-2.3 33.24-4.39 63.81-4.39 63.81s-.53 7.72-1.38 20.06zm-7.13 104.26v1.88h1.7c-2.43 35.25-4.46 64.74-4.63 67.12-.43 6.15-10 144.79-11.35 164.65s-13.43 192.17-14.36 205.42q-.93 13.26-7.44 106.4l-1.48-.11s6.62-91.47 7.38-102.3q.75-10.85 3.22-47.69 8.63-130.83 9.4-142c.78-11.16 4.29-59.21 4.45-63.69s6.88-98.41 7.74-110.59c.27-4.65 2.58-38.66 5.37-79.09zm45-647.59l4.82-69 1.58.08q-3.14 42.55-4.09 56.27c-.16 2.19-.46 6.6-.88 12.68zm9.38-137.26q.36-5.82.77-12.5 8.2-125.13 9.18-137.13c1-12 7.19-102.83 7.74-110.64q.54-7.8 3.13-42.25l2 .13q-7.38 109.4-8.71 128.52l-12.17 174zm524.35-82.2l1.44 1.66-12.83 11.09q-82 70.43-103.59 89.06c-6.58 5.68-30.09 26-59.76 51.74l-1.22-1.41L1762.17 740q3.64-3.18 12.56-11zm65.79-57.42Q1969 559.8 1982.3 548.53c14.29-12.11 121.54-105 130.77-113q9.24-8 50.09-43l1.36 2.09q-129.11 112-151.69 131.56L1842.24 673.6zm-359.11 832.55l105.53 121.9c6.28 7.27 148.06 171 168.36 194.5l209.83 242.82 108.68 125.76-1.59 1S1979 2081.88 1968 2069.07q-11.07-12.81-48.82-56.28-134.18-154.24-145.62-167.42c-11.39-13.19-60.33-70.1-65-75.28s-100.53-116.33-113-130.72c-6.11-7.08-60.86-70.24-115.87-133.74zM842.5 768.71l-92-106.5q-8.57-9.9-51-58.35Q571.14 456.36 559 442.08c-12.08-14.29-105-121.55-113-130.78q-8-9.23-43-50.08l2.1-1.36Q517.15 389 536.68 411.55L752.28 661q70.44 82 89.06 103.59l2.53 2.93zm-324.66 697.1q-102.06 37.25-114 41.41c-14.9 5.18-127.22 45.87-136.88 49.35q-9.66 3.48-52.34 18.63l-.59-2.44q135.24-49.14 158.89-57.67l144-51.93zm1135.69-410.68l-.87-2c36.08-13 173.44-62.75 195.24-70.61l254.1-91.68 131.63-47.46.45 1.85s-113.26 40.53-126.66 45.36Q2094 895.42 2048.5 912q-161.67 59-175.5 64c-13.8 5-73.31 26.22-78.79 28.4s-121.75 43.9-136.82 49.34zm-263 606.37c14.33 39.24 43.52 119.15 48.73 133.48 6.81 18.71 65.89 181 70.43 193.5l36.48 100.22-1.4.51s-31.15-86.26-34.87-96.46q-3.7-10.21-16.45-44.88-45.35-123-49.16-133.53c-3.83-10.51-20.16-55.83-21.84-60-1.38-3.44-23.6-64.71-33.57-92.22zm-343.32-934.95q-9.43-25.72-11.2-30.74c-4-11.36-35.25-96.87-37.93-104.22q-2.67-7.35-14.32-39.88l1.85-.67Q1023.37 654 1029.92 672l19.53 53.67zm15.6 823.86l2.06 1-78.87 168.1c-4.08 8.69-96 204.83-109.21 232.92s-127.67 271.71-136.47 290.45l-70.69 150.44-1.58-1s61-129.2 68.22-144.52q7.2-15.32 31.56-67.49Q854.2 1995 861.61 1979.2c7.41-15.77 39.5-83.63 42.31-90s65.38-139.2 73.48-156.42c4.36-9.29 46.6-99.51 85.41-182.37zm313.46-667.66l1.79 1-37.87 80.85c-.69 1.46-6.71 14.34-15.82 33.81l-1.86-1C1348 943.09 1376.13 883 1376.13 883zm37.17-79.13l112.91-240.3q5.57-11.85 32.58-70.28 82.53-177.27 90.65-194.14c8.13-16.88 68.32-145.4 73.51-156.44q5.19-11 28.27-59.64l2.1 1.37q-72.37 154.81-85.08 181.87T1528.16 564.5q-46.31 97.71-58.41 123.5c-5.17 11-28.86 61.55-54.61 116.52zM514 877.57l-13.8-6.38q-177.27-82.52-194.14-90.65c-16.88-8.13-145.4-68.32-156.44-73.5q-11-5.19-59.64-28.28l1.36-2.09Q246.21 749 273.23 761.74l241.7 113.57zm1255.16 588.92l-29.16-13.76c-8.93-4.2-92.72-43.41-172.82-80.94l.81-2.13 158.74 74.42 43.3 20.31zm170.3 79.91l.83-2.16c8.85 4.15 15.56 7.29 19.29 9l290.46 136.47 150.44 70.69c-.69 1.06-1 1.58-1 1.58s-129.2-61-144.52-68.22q-15.32-7.2-67.49-31.55-185.31-86.34-201.08-93.75c-7.69-3.55-27.68-12.99-46.92-22.06zM679 1284.83l-81.75 11.24q-10.92 1.5-64.55 9.28-163 23.12-178.62 25.08c-15.65 2-134 18.42-144.14 19.82q-10.17 1.39-55.08 7.34l-.06-2.52q142.48-19.93 167.4-23.37l275-37.8q51.69-6.9 81.57-10.92zm1085.9-149.68c-37.08 5.08-81.19 11.08-90.29 12.33-6 .83-49.47 6.88-101.39 14.09l-.27-2.25 88.27-12.22 103.39-14.33zm175.35-24.3l-.28-2.29 203.4-28 138.62-19c0 1.26.05 1.9.05 1.9s-119.21 16.09-133.32 18q-14.11 1.95-62.11 8.69zm-770.47-244.48l-1.82-13q-1.17-8.32-7.23-49.15-18-124.1-19.54-136c-1.53-11.94-14.34-102.08-15.43-109.83q-1.1-7.74-5.72-42l2-.27q15.52 108.52 18.2 127.51t29.44 209.52q.93 6.75 1.78 13zm90.49 642.88l1.8-.22c7.72 54.52 21.3 150.38 21.91 154.74.86 6.1 20.37 143.69 23.14 163.42s26.81 190.76 28.66 203.91q1.85 13.15 14.84 105.62l-1.47.2s-12.54-90.85-14.05-101.6q-1.51-10.75-6.77-47.31-18.76-129.77-20.32-140.84c-1.56-11.07-8.11-58.81-8.89-63.22s-13.73-97.69-15.42-109.78c-1.12-7.96-14.3-100.43-23.43-164.92zm-476.38 276.19c-27.6 36.47-52.29 69.09-59.66 78.81L530.35 2120l-100.42 132.44-1.34-1.34s86.56-113.69 96.78-127.18q10.23-13.49 44.9-59.45 123-163.32 133.5-177.2c10.53-13.88 56-73.58 60.11-79.28 1.4-2 12.75-17 27.52-36.44l-9.2 12.66zm613.43-813.66L1435 922l78.29-103.26 1.67.89L1399 973zm169.36-223.48l81.68-107.75q7.92-10.44 46.48-62 117.59-156.24 129-171.06c11.46-14.82 97-128 104.42-137.73q7.37-9.72 40.06-52.46l1.76 1.77q-103 136.41-121 160.22l-199.2 262.79q-63.41 83.08-81.61 107.06zm189.25 867.11l-1.49 1.83c-34.49-26.17-73.71-56-82.07-62.31-5.83-4.42-47.86-36.19-97.95-74.07l1.42-1.75 85.35 64.6c3.81 2.88 48.02 36.35 94.74 71.7zm195.75 148.27L2122 1892.84l132.46 100.42-1.34 1.33S2139.47 1908 2126 1897.81q-13.49-10.21-59.46-44.89l-116.22-87.54zm-993.82-749.9l-33.76-25.55L682.39 805l1.13-1.62q52.31 39.89 69.27 52.76C769.82 869 895 963.7 959 1012.11zM532.42 692.05q-110.49-83.19-122.84-92.74c-14.82-11.46-128-97-137.73-104.42q-9.72-7.38-52.46-40.06l1.77-1.76q136.41 103 160.21 121L534 689.8zM628.87 1580l-1.36-2.19 58.94-36.58q77.52-47.7 97.9-60.35c11.48-7.13 77.55-48.27 134-83.44l1.06 1.7-232.06 144q-9.37 5.82-55.2 34.74l-3.32 2.08zm-202.29 126c-31.53 19.59-66.06 41.09-71 44.15q-8.71 5.41-47.33 29.11l-1.08-2.27q81.19-50.67 117.83-73.5zM1740.8 888.65c-3.1 1.94-5.27 3.31-6.08 3.86-4.91 3.27-110 68.25-123.58 76.7-9.79 6.07-133.12 82.94-204.85 127.53l-1.11-2 193.57-120.42 140.93-87.68zm74.3-46.06l-1.16-2.1 198.23-123 118.89-73.8.81 1.72s-102.35 63.19-114.46 70.7q-12.11 7.51-53.21 33.2-118.77 74.34-149.1 93.28zm-369.89 726.71l-1.52.91c-14.65-23.36-33.66-53.68-51-81.32l1.55-.93c16.82 26.82 36.69 58.53 50.97 81.34zm56.38 90c21.24 33.91 44.68 71.34 50.29 80.31L1661 1914.26l56.52 90.44-1.26.79s-48.41-77.89-54.16-87.1q-5.76-9.23-25.43-40.47-69.93-110.93-75.85-120.4c-5.92-9.48-31.33-50.42-33.83-54.14-1.22-1.82-13.75-21.87-27-43.1zm-404-642.39l-67.8-108.49 1.47-.85q35.54 57.38 45.07 72.64c2.62 4.2 11.27 18 22.53 36zM952.88 786.62q-20.64-32.8-24-38.3c-6.25-10.28-54.62-87.42-58.77-94.05q-4.14-6.64-22.3-36l1.67-1Q907.83 710 918 726.28l37 59.15zm163.86 861c6.74-29 13.91-59.79 20.7-88.93l2.23.47-20.67 88.93zm-19 81.58l-11.29 53.14 1.12.24c-13.31 57.1-47.35 203.23-53.14 228-7.07 30.22-68.39 292.32-73.1 312.48q-4.73 20.16-37.87 161.85l-1.76-.68s32.83-139.06 36.68-155.55q3.86-16.49 16.83-72.57 45.93-199.21 49.9-216.18c4-17 21.25-90 22.66-96.87s35-149.7 39.36-168.23c.94-3.9 4.87-20.97 10.64-45.63zm197.47-845.84l2 .35c-8.35 35.92-14.42 62-14.94 64.24-.41 1.73-4.28 18.43-10 43.09l-2.08-.36c9.1-38.87 19.11-81.83 25.05-107.32zm35.24-150.75L1381 516.79q3-12.75 17.26-75.53 43.86-190.54 48.3-208.75c4.45-18.2 36.6-156.42 39.38-168.29q2.77-11.88 15.25-64.22l2.33.9q-38.6 166.52-45.39 195.59T1383 517.56q-25 105.2-31.46 132.94c-2.07 8.86-9.71 41.66-19.19 82.43zm-604.66 364.82l-209-48.9q-12.75-3-75.53-17.26Q250.72 987.41 232.51 983c-18.2-4.45-156.42-36.6-168.29-39.38Q52.34 940.82 0 928.34L.9 926q166.52 38.6 195.59 45.39l321.07 75.12q105.2 25 132.94 31.46l75.68 17.62zm1079.28 252l.82-2.12c66.26 15.44 182.81 42.6 204.68 47.71l312.48 73.11L2484.9 1506l-.68 1.76s-139.06-32.83-155.55-36.68q-16.49-3.85-72.57-16.83-199.21-45.93-216.18-49.89c-17-4-90-21.26-96.87-22.67-5.25-1.07-90.11-21-137.98-32.24z">\n            </path>\n          </g>\n        </svg>\n      </div>\n    </figure>\n    <img alt="Arrow 1" data-invest-arrow="1" src="https://cash-f.squarecdn.com/ember/ac84f609a323e5e5c472885cde0b1da8bb0a67f1/assets/images/marketing/investing/investing-intro-graph-arrow-1.png" style="transform: translate3d(-50px, 0px, -15px);">\n    <img alt="Arrow 2" data-invest-arrow="2" src="https://cash-f.squarecdn.com/ember/ac84f609a323e5e5c472885cde0b1da8bb0a67f1/assets/images/marketing/investing/investing-intro-graph-arrow-2.png" style="transform: translate3d(-25px, 0px, -30px);">\n    <img alt="Arrow 3" data-invest-arrow="3" src="https://cash-f.squarecdn.com/ember/ac84f609a323e5e5c472885cde0b1da8bb0a67f1/assets/images/marketing/investing/investing-intro-graph-arrow-3.png" style="transform: translate3d(25px, 0px, -30px);">\n  </section>\n  <section data-chapter="security">\n    <figure data-security-content="">\n      <img alt="Security Lock" data-security-image="" src="https://cash-f.squarecdn.com/web/marketing/494a08c25a1d65bf05764a551e818ab0142da7b9/assets/images/home-2021/security.png" style="opacity: 0; transform: scale(0.5, 0.5);">\n      <figcaption>\n        <h2>Your money is your own business</h2>\n        <p>Cash App uses advanced security features to protect millions of people and payments each year.\n          From verification locks to data encryption, we take steps to make sure your money and information are safe.</p>\n        <a data-button="green" data-download="" href="/security">Learn More</a>\n      </figcaption>\n    </figure>\n  </section>\n  <footer data-footer="">\n    <div data-footer-content="">\n      <div data-footer-ctas="">\n        <h2>The easiest way to send, spend, save, and invest</h2>\n        <div data-footer-buttons="">\n          <a data-button="green" data-download="" target="_blank" href="https://click.cash.app/ui6m/bf0fcdc2">Download <br>Cash App</a>\n          <a data-button="white" data-login=""\n             classname="login-button"\n             href="javascript: void(0)"> <!-- /cash-clone/account/activity -->\n            Log In</a>\n        </div>\n        <figure data-footer-scan="">\n          <figcaption>\n            <h3>Scan to download Cash App</h3>\n            <svg data-arrow-right="" width="31" height="19" viewBox="0 0 31 19" fill="none">\n              <path d="M29.7111 9.2849L20.4978 1.22725C20.0752 0.857486 19.4363 0.905923 19.0724 1.33299C18.7071 1.76074 18.7536 2.4068 19.1762 2.77656L26.2383 8.95198L1.07242 8.95198C0.514404 8.95198 0.0615234 9.40975 0.0615234 9.97531C0.0615234 10.5409 0.514404 10.9986 1.07242 10.9986L26.4924 10.9986L22.467 14.6355L19.3224 17.1529C18.8851 17.5036 18.8102 18.1469 19.1566 18.5903C19.3561 18.8455 19.652 18.9785 19.9505 18.9785C20.1702 18.9785 20.3913 18.9069 20.5773 18.7575L23.767 16.2005L29.7232 10.8219C29.9402 10.6261 30.0635 10.3451 30.0615 10.0504C30.0588 9.75632 29.9321 9.47729 29.7111 9.2849Z" fill="white"></path>\n            </svg>\n          </figcaption>\n          <img alt="QR Code" src="https://cash-f.squarecdn.com/web/marketing/494a08c25a1d65bf05764a551e818ab0142da7b9/assets/images/home-2021/qr-code.png">\n        </figure>\n      </div>\n      <div data-learn-more="">\n        <h3>Learn more about Cash App</h3>\n        <ul>\n          <li>\n            <a href="https://cash.app/legal/tos">Legal</a>\n          </li>\n          <li>\n            <a href="https://squareup.com/legal/licenses">Licenses</a>\n          </li>\n          <li>\n            <a href="/security">Security</a>\n          </li>\n          <li>\n            <a href="/careers">Careers</a>\n          </li>\n          <li>\n            <a href="/press">Press</a>\n          </li>\n          <li>\n            <a href="/help">Support</a>\n          </li>\n          <li>\n            <a href="https://status.cash.app/">Status</a>\n          </li>\n        </ul>\n      </div>\n      <div data-social="">\n        <h3>Stay in touch</h3>\n        <ul data-social-list="">\n          <li>\n            <a href="https://twitter.com/cashapp">\n              <svg role="img" width="22" height="17" viewBox="0 0 22 17" fill="none">\n                <title>Twitter Logo</title>\n                <path d="M6.91583 16.9827C14.7834 16.9827 19.0856 10.4648 19.0856 4.8129C19.0856 4.62777 19.0818 4.44347 19.0735 4.26001C19.9087 3.65625 20.6346 2.90281 21.2071 2.04512C20.4407 2.38578 19.616 2.61511 18.7508 2.71851C19.6339 2.18897 20.3119 1.3513 20.6317 0.352687C19.8053 0.842613 18.8901 1.1987 17.9156 1.39091C17.1351 0.559498 16.0239 0.0395508 14.7935 0.0395508C12.4314 0.0395508 10.5159 1.95506 10.5159 4.3163C10.5159 4.65195 10.5534 4.97843 10.6268 5.29156C7.07179 5.11269 3.91958 3.41066 1.81019 0.822599C1.44285 1.45471 1.23103 2.18897 1.23103 2.97244C1.23103 4.4564 1.98614 5.76648 3.13445 6.53285C2.43271 6.51117 1.7735 6.31853 1.19726 5.99789C1.19663 6.01584 1.19663 6.03334 1.19663 6.05252C1.19663 8.12397 2.67099 9.85351 4.6282 10.2455C4.26878 10.3434 3.8906 10.396 3.50033 10.396C3.22513 10.396 2.95703 10.3689 2.69643 10.3188C3.24098 12.0184 4.82 13.2551 6.69215 13.2897C5.2282 14.4371 3.38399 15.1205 1.37967 15.1205C1.03485 15.1205 0.694193 15.1009 0.359375 15.0613C2.25237 16.2747 4.50019 16.9827 6.91605 16.9827" fill="white"></path>\n              </svg>\n            </a>\n          </li>\n          <li>\n            <a href="https://instagram.com/cashapp">\n              <svg role="img" width="21" height="21" viewBox="0 0 21 21" fill="none">\n                <title>Instagram Logo</title>\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.78717 0.602863C7.85251 0.555338 8.19311 0.543457 10.902 0.543457C13.6109 0.543457 13.9515 0.555338 15.0208 0.598903C16.0862 0.646427 16.8109 0.816724 17.4446 1.06227C18.0981 1.31969 18.6565 1.66029 19.2109 2.21474C19.7654 2.7692 20.1099 3.32366 20.3634 3.98108C20.6089 4.6187 20.7792 5.34346 20.8268 6.40484C20.8743 7.47019 20.8862 7.80682 20.8862 10.5197C20.8862 13.2326 20.8743 13.5692 20.8268 14.6345C20.7792 15.6999 20.6089 16.4246 20.3634 17.0583C20.106 17.7118 19.7654 18.2702 19.2109 18.8246C18.6565 19.3791 18.102 19.7237 17.4446 19.9771C16.807 20.2227 16.0822 20.393 15.0208 20.4405C13.9555 20.488 13.6189 20.4999 10.906 20.4999C8.19311 20.4999 7.85647 20.488 6.79113 20.4405C5.72578 20.393 5.00103 20.2227 4.36737 19.9771C3.7139 19.7197 3.15548 19.3791 2.60103 18.8246C2.04657 18.2702 1.70202 17.7157 1.44855 17.0583C1.20301 16.4207 1.03271 15.6959 0.985187 14.6345C0.937662 13.5692 0.925781 13.2286 0.925781 10.5197C0.925781 7.81078 0.937662 7.47019 0.985187 6.4088C1.03271 5.34346 1.20301 4.6187 1.44855 3.98504C1.70598 3.33158 2.04657 2.77316 2.60103 2.2187C3.15548 1.66425 3.70994 1.31969 4.36737 1.06623C5.00103 0.820685 5.72578 0.650388 6.78717 0.602863ZM14.9326 2.40071C13.8791 2.35319 13.5663 2.34131 10.9009 2.34131C8.23558 2.34131 7.92271 2.34923 6.86925 2.40071C5.89499 2.44428 5.36826 2.61062 5.01578 2.74527C4.54845 2.92349 4.21578 3.14131 3.86726 3.48982C3.51875 3.83834 3.30489 4.17101 3.12271 4.63834C2.9841 4.99081 2.82172 5.51755 2.77816 6.4918C2.73063 7.54527 2.71875 7.85814 2.71875 10.5235C2.71875 13.1888 2.73063 13.5017 2.77816 14.5552C2.82172 15.5294 2.98806 16.0562 3.12271 16.4086C3.30093 16.876 3.51875 17.2086 3.86726 17.5571C4.21578 17.9057 4.54845 18.1195 5.01578 18.3017C5.36826 18.4403 5.89499 18.6027 6.86925 18.6463C7.92271 18.6938 8.23558 18.7057 10.9009 18.7057C13.5663 18.7057 13.8791 18.6938 14.9326 18.6463C15.9069 18.6027 16.4336 18.4364 16.7861 18.3017C17.2534 18.1235 17.5861 17.9057 17.9346 17.5571C18.2831 17.2086 18.497 16.876 18.6791 16.4086C18.8178 16.0562 18.9801 15.5294 19.0237 14.5552C19.0712 13.5017 19.0831 13.1888 19.0831 10.5235C19.0831 7.85814 19.0712 7.54527 19.0237 6.4918C18.9801 5.51755 18.8138 4.99081 18.6791 4.63834C18.5009 4.17101 18.2831 3.83834 17.9346 3.48982C17.5861 3.14131 17.2534 2.92745 16.7861 2.74527C16.4336 2.60666 15.9069 2.44428 14.9326 2.40071Z" fill="white"></path>\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.77734 10.5198C5.77734 7.68809 8.07437 5.39502 10.9021 5.39502C13.7298 5.39502 16.0268 7.69205 16.0268 10.5198C16.0268 13.3475 13.7298 15.6445 10.9021 15.6445C8.07437 15.6445 5.77734 13.3515 5.77734 10.5198ZM7.57422 10.5196C7.57422 12.3572 9.06333 13.8463 10.901 13.8463C12.7386 13.8463 14.2277 12.3572 14.2277 10.5196C14.2277 8.68198 12.7386 7.19287 10.901 7.19287C9.06333 7.19287 7.57422 8.68198 7.57422 10.5196Z" fill="white"></path>\n                <path d="M16.2273 6.38915C16.8878 6.38915 17.4233 5.85366 17.4233 5.19311C17.4233 4.53256 16.8878 3.99707 16.2273 3.99707C15.5667 3.99707 15.0312 4.53256 15.0312 5.19311C15.0312 5.85366 15.5667 6.38915 16.2273 6.38915Z" fill="white"></path>\n              </svg>\n            </a>\n          </li>\n          <li>\n            <a href="https://www.twitch.tv/cashapp">\n              <svg role="img" width="20" height="24" viewBox="0 0 20 24" fill="none">\n                <title>Twitch Logo</title>\n                <path d="M4.34904 0.563965L0.253906 4.6591V19.4016H5.16807V23.4967L9.26321 19.4016H12.5393L19.9106 12.0304V0.563965H4.34904ZM18.2725 11.2113L14.9964 14.4874H11.7203L8.8537 17.354V14.4874H5.16807V2.20202H18.2725V11.2113Z" fill="white"></path>\n                <path d="M15.8138 5.06885H14.1758V9.98301H15.8138V5.06885Z" fill="white"></path>\n                <path d="M11.3138 5.06885H9.67578V9.98301H11.3138V5.06885Z" fill="white"></path>\n              </svg>\n            </a>\n          </li>\n          <li>\n            <a href="https://www.tiktok.com/@cashapp">\n              <svg width="18" height="21" viewBox="0 0 18 21" fill="none">\n                <title>Tik Tok Logo</title>\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2177 0.563477C13.547 3.39546 15.1276 5.08387 17.8758 5.26348V8.44871C16.2832 8.60438 14.8881 8.08349 13.2656 7.10158V13.0589C13.2656 20.6268 5.01513 22.9918 1.69818 17.5673C-0.43329 14.0767 0.871936 7.95177 7.7094 7.70629V11.0652C7.18851 11.149 6.63169 11.2807 6.12277 11.4543C4.60201 11.9692 3.73984 12.9332 3.97933 14.6336C4.44035 17.8906 10.4156 18.8546 9.9187 12.4901V0.569464H13.2177V0.563477Z" fill="white"></path>\n              </svg>\n\n            </a>\n          </li>\n          <li>\n            <a href="https://www.linkedin.com/company/cash-app">\n              <svg role="img" width="21" height="21" viewBox="0 0 21 21" fill="none">\n                <title>LinkedIn Logo</title>\n                <path d="M10.1163 8.10498V15.8225V8.10498ZM6.14062 8.10498V15.8225V8.10498Z" fill="white"></path>\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.30624 0.543457C1.36693 0.543457 0.605469 1.30492 0.605469 2.24422V18.7991C0.605469 19.7384 1.36693 20.4999 2.30624 20.4999H18.8611C19.8004 20.4999 20.5619 19.7384 20.5619 18.7991V2.24422C20.5619 1.30492 19.8004 0.543457 18.8611 0.543457H2.30624ZM7.5797 5.92285C7.5797 6.71934 6.93403 7.36502 6.13754 7.36502C5.34105 7.36502 4.69538 6.71934 4.69538 5.92285C4.69538 5.12637 5.34105 4.48069 6.13754 4.48069C6.93403 4.48069 7.5797 5.12637 7.5797 5.92285ZM4.8515 8.10561V15.8231H7.42401V8.10561H4.8515ZM11.3997 15.8231V11.1751C11.5302 10.5324 12.0094 9.97608 12.7667 9.97608C13.7022 9.97608 14.053 10.6777 14.053 11.7301V15.8227H16.6255V11.4182C16.6255 9.04062 15.3782 7.94925 13.6632 7.94925C12.3871 7.94925 11.7254 8.63588 11.3997 9.1392V8.10561H8.8272V15.8231H11.3997Z" fill="white"></path>\n              </svg>\n            </a>\n          </li>\n        </ul>\n      </div>\n      <svg data-eyeball="" data-footer-eyeball="" viewBox="0 0 222.87 126.67">\n        <defs>\n          <style>\n           .cls-1 {\n             fill: none;\n           }\n\n           .cls-2 {\n             clip-path: url(#clip-path);\n           }\n\n           .cls-3 {\n             fill: #fff;\n           }\n\n           .cls-4 {}\n\n          </style>\n          <clipPath id="clip-path" data-svg-origin="116.10500532150269 67.58157392501832" style="transform-origin: 0px 0px;" transform="matrix(1,0,0,1,0,0)">\n            <path class="cls-1" d="M215.78,66.13C213.91,72,210.33,77,202.5,85.73l-4.64,5.15a55.26,55.26,0,0,0-3.65,4.43c-4,5.51-20.28,14.09-33.11,18.87a75.45,75.45,0,0,1-12.52,3.26l-6.23,1.09-16,2.76c-9.07,1.64-17.29,1.45-30.33-.14l-12.66-1.62c-1.24-.15-2.09-.22-3.3-.32l-.34,0c-6.09-.47-10.76-1.92-18.49-5.3l-5.63-2.49c-2.38-1-4.35-1.79-6.26-2.41l-.95-.3c-9.56-2.91-29.48-17.64-35.6-26.11l-.73-1c-3.2-4.73-5.35-8-7.39-14.76V64h0l1-3.25c1.8-5.63,5.18-10.5,12.39-18.69l5.95-6.65c1.52-1.73,2.38-2.79,3.23-4,4-5.53,20.26-14.14,33.08-18.94a71.78,71.78,0,0,1,11.21-3L75,8.87l20.1-3.48c9.47-1.71,18-1.43,32,.36L138.1,7.16c1.24.14,2.09.22,3.3.31l.34,0c5.72.45,10.2,1.76,17.15,4.74l7,3.08a66.55,66.55,0,0,0,7.2,2.72c9.56,2.92,29.46,17.7,35.57,26.21l.74,1.06c3.2,4.74,4.82,8.55,6.86,15.35l.65,2.24h0Z"></path>\n          </clipPath>\n        </defs>\n        <g id="Layer_2" data-name="Layer 2">\n          <g id="Layer_1-2" data-name="Layer 1">\n            <g id="eye">\n              <g class="cls-2">\n                <g id="eye-ball">\n                  <path id="ball" class="cls-3" d="M216.45,66.12C214.58,72,211,77,203.17,85.73l-4.64,5.15c-1.79,2-2.73,3.15-3.66,4.42-4,5.51-20.27,14.09-33.1,18.87a74.74,74.74,0,0,1-12.52,3.26l-6.23,1.1-16,2.75c-9.08,1.64-17.3,1.45-30.33-.14L84,119.52c-1.24-.14-2.1-.21-3.31-.31l-.33,0c-6.09-.47-10.77-1.91-18.5-5.29l-5.63-2.49c-2.37-1-4.34-1.8-6.25-2.42l-1-.3c-9.57-2.9-29.48-17.63-35.6-26.1l-.74-1.06c-3.2-4.72-5.34-8-7.38-14.75V64h0l1-3.25C8.2,55.14,11.59,50.27,18.8,42.08l5.95-6.66c1.52-1.73,2.37-2.78,3.22-4,4-5.53,20.27-14.15,33.09-18.94a70.69,70.69,0,0,1,11.21-3l3.43-.65L95.8,5.39c9.46-1.72,18-1.44,32,.36l10.92,1.41c1.24.14,2.1.21,3.31.31l.33,0c5.73.44,10.2,1.75,17.15,4.73l7,3.08a68.43,68.43,0,0,0,7.2,2.73c9.56,2.92,29.47,17.7,35.58,26.2L210,45.3c3.19,4.74,4.81,8.56,6.86,15.36l.65,2.23h0Z"></path>\n                  <g id="moving" data-svg-origin="160.76499801635742 64.47492106914521" transform="matrix(1,0,0,1,-32.2986,41.03552)" style="transform-origin: 0px 0px;">\n                    <path id="iris" class="cls-4" d="M80.27,9.4l2-.93a61.12,61.12,0,0,1,29.12-7.33h0a61.29,61.29,0,0,1,21.79,4l1.28.31c7.62,1.71,15.67,9.34,21.25,14,3.94,3.28,7.7,9.83,10.31,15,.32.62.64,1.26.94,1.9.67,1.38,1.23,2.6,1.66,3.53A38.59,38.59,0,0,1,171,47.31a61.6,61.6,0,0,1,1.73,10.16q.34,2.64.67,5.61c1.22,11.06-5.09,23.62-6.81,28.05S157,105.22,155.75,107s-14.39,10.37-15.6,11.45-12.76,4.81-14.61,5.34-16.69,1.7-18.81,1.7-18.23-4.91-19.63-5.6-10.46-5.67-12.3-6.58S65,104.16,64.06,103,55,89.55,54.26,88s-2.8-8.47-3.62-10.26-1.31-13.18-1.31-17.17a38.46,38.46,0,0,1,1.79-11.16c1.05-3.5,2.32-10.26,6.78-17.58a65,65,0,0,1,5.39-7.39,62.88,62.88,0,0,1,5.13-5.69C72.44,14.62,76.74,11,80.27,9.4Z"></path>\n                    <g id="pupil" data-svg-origin="189.99499755859375 92.99206634521485" style="transform-origin: 0px 0px;" transform="matrix(1.1,0,0,1.1,-18.9995,-9.29921)">\n                      <path id="Combined-Shape-Copy-2" d="M142.05,74.55l-.33.74a31.89,31.89,0,0,1-1.65,3.31c-.54,1-1,2-1.51,2.92-1.79,3.73-6.68,7-9.74,9.3s-9.49,3.69-12.09,4.22-6.7.35-12.54-.33-11.58-5.44-13.66-6.85-6.13-6.61-6.92-7.48S80,71.72,79.56,71s-1-7.16-1-8.18,1.11-8.8,1.36-9.9A51.82,51.82,0,0,1,83,47c.25-.47.52-.94.79-1.4l.27-.42c.53-.9.94-1.56,1.08-1.73l.52-.6a31.69,31.69,0,0,1,3.24-3.69c.5-.57.91-1,1.09-1.27A23.26,23.26,0,0,1,93.5,35.4a32.73,32.73,0,0,1,10.73-4.69,12.45,12.45,0,0,1,1.31-.41c.9-.17,4.7-.44,5.72-.64a15.88,15.88,0,0,1,3.54.33,31.88,31.88,0,0,1,4.27.69A32.58,32.58,0,0,1,142,50.15a15.92,15.92,0,0,1,1,2.62A32.29,32.29,0,0,1,144,67.45c0,.19,0,.39-.07.58A24.88,24.88,0,0,1,142.05,74.55Z"></path>\n                      <path id="Combined-Shape-Copy-3" class="cls-3" d="M94.84,34.32a10.41,10.41,0,0,1,2.56,1.57l.3.27a10.44,10.44,0,0,1,2.3,3,6.27,6.27,0,0,1,.66,1.59l0,.23a10.26,10.26,0,0,1,.12,5.14h0l.12-.66a6.64,6.64,0,0,1-.15.82,10.58,10.58,0,0,1-1.43,3.25,1.62,1.62,0,0,0-.1.18c-.56,1.17-2.1,2.19-3.06,2.93a6.32,6.32,0,0,1-1.67.78,10.31,10.31,0,0,1-6.14.46l-.3-.08.35.06a5.62,5.62,0,0,1-1.68-.51,10.36,10.36,0,0,1-4.71-3.89.65.65,0,0,0-.09-.11,1.83,1.83,0,0,1-.17-.31,10.24,10.24,0,0,1-1.1-2.65h0a1.28,1.28,0,0,1-.08-.32,10.4,10.4,0,0,1,0-4.61l.12-.47.06-.29A1.39,1.39,0,0,1,81,40.4a10.37,10.37,0,0,1,7.68-6.72l.25-.07.88-.09.26,0c.29,0,.54-.05.66-.08a6.72,6.72,0,0,1,1.33.14,7.72,7.72,0,0,1,1,.19h0l.16,0,.3.06a5.89,5.89,0,0,1,1.2.43Z"></path>\n                    </g>\n                  </g>\n                </g>\n              </g>\n            </g>\n            <path id="outer-lid" d="M0,64v1.32c1.64,6.43,2.35,9.88,4.66,13.29C12.55,90.28,19.6,98.7,27.42,103.46l10.17,5.84L40,110.64c8.1,4.48,14.74,7.5,21.19,9.35a49.08,49.08,0,0,0,6.23,1.38l2.7.43,9.19,1.62c15.64,2.78,25.5,3.76,37.56,3,16.77-1.07,31.44-4.29,49.57-10,12.27-3.85,31.79-17.48,41.08-27.79,3.27-3.63,5.91-6.3,8-10.26l1.34-2.51c1.26-2.59,4.4-8.73,4.24-8.35.39-.9.68-.92,1-1.79l.79-1.73-.29-1.14c-1.65-6.45-3.53-11.22-5.84-14.64-7.88-11.7-14.93-20.16-22.74-24.94l-7.67-4.42c-1.73-1-3.41-2-4.51-2.57l-.38-.21c-8.09-4.49-14.73-7.53-21.17-9.38A47.49,47.49,0,0,0,154,5.32l-2.7-.44-9.18-1.62C126.53.47,116.67-.52,104.62.25c-16.76,1.07-31.42,4.3-49.55,10C42.81,14.13,23.3,27.82,14,38.17A54.64,54.64,0,0,0,5.39,51l-.4.85c-1.3,2.86-3.38,8.08-3.45,8.27C1.15,61,.79,61.91.46,62.78L0,64m215.78,2.12C213.91,72,210.33,77,202.5,85.73l-4.64,5.15a55.26,55.26,0,0,0-3.65,4.43c-4,5.51-20.28,14.09-33.11,18.87a75.45,75.45,0,0,1-12.52,3.26l-6.23,1.09-16,2.76c-9.07,1.64-17.29,1.45-30.33-.14l-12.66-1.62c-1.24-.15-2.09-.22-3.3-.32l-.34,0c-6.09-.47-10.76-1.92-18.49-5.3l-5.63-2.49c-2.38-1-4.35-1.79-6.26-2.41l-.95-.3c-9.56-2.91-29.48-17.64-35.6-26.11l-.73-1c-3.2-4.73-5.35-8-7.39-14.76V64h0l1-3.25c1.8-5.63,5.18-10.5,12.39-18.69l5.95-6.65c1.52-1.73,2.38-2.79,3.23-4,4-5.53,20.26-14.14,33.08-18.94a71.78,71.78,0,0,1,11.21-3L75,8.87l20.1-3.48c9.47-1.71,18-1.43,32,.36L138.1,7.16c1.24.14,2.09.22,3.3.31l.34,0c5.72.45,10.2,1.76,17.15,4.74l7,3.08a66.55,66.55,0,0,0,7.2,2.72c9.56,2.92,29.46,17.7,35.57,26.21l.74,1.06c3.2,4.74,4.82,8.55,6.86,15.35l.65,2.24h0Z" data-svg-origin="111.435 63.3327605342865" style="transform-origin: 0px 0px;" transform="matrix(1,0,0,1,0,0)"></path>\n          </g>\n        </g>\n      </svg>\n      <svg data-footer-logo="" viewBox="0 0 195 44" fill="none">\n        <path d="M77.9858 17.353C77.8137 17.4574 77.6088 17.4936 77.4113 17.4547C77.2139 17.4158 77.0381 17.3044 76.9185 17.1425C76.3306 16.2985 75.5417 15.6143 74.6231 15.1515C73.7046 14.6887 72.6852 14.462 71.6571 14.4918C67.6484 14.4918 65.188 17.6636 65.188 22.1935C65.188 26.7233 67.6935 29.9553 71.7022 29.9553C72.744 29.9802 73.775 29.7387 74.6975 29.2538C75.6199 28.7689 76.4034 28.0566 76.9736 27.1843C77.0876 27.0203 77.259 26.9051 77.4539 26.8615C77.6487 26.8179 77.8529 26.849 78.0259 26.9488L79.93 28.0512C80.034 28.1039 80.1254 28.1784 80.198 28.2696C80.2706 28.3609 80.3227 28.4667 80.3507 28.5798C80.3788 28.693 80.3821 28.8109 80.3606 28.9254C80.339 29.04 80.293 29.1486 80.2257 29.2438C79.2948 30.639 78.0248 31.7751 76.5349 32.5455C75.045 33.3159 73.3838 33.6953 71.7072 33.6483C65.2983 33.6483 60.9539 28.9982 60.9539 22.2185C60.9539 15.4388 65.2983 10.8489 71.612 10.8489C73.2607 10.8031 74.8955 11.1619 76.3735 11.8939C77.8514 12.6259 79.1276 13.7088 80.0904 15.048C80.1565 15.1382 80.2035 15.241 80.2283 15.3501C80.2531 15.4591 80.2552 15.5721 80.2345 15.6821C80.2139 15.792 80.1708 15.8965 80.1081 15.9892C80.0454 16.0818 79.9643 16.1605 79.8699 16.2205L77.9858 17.353Z" fill="#00D54B"></path>\n        <path d="M91.996 32.4194V31.4974C90.9938 32.7902 89.5958 33.5919 87.3459 33.5919C84.0187 33.5919 81.7087 31.773 81.7087 28.581C81.7087 24.6074 85.2514 23.9259 87.4361 23.6203C89.7812 23.2795 91.7805 23.1192 91.7805 21.5859C91.7805 20.2279 90.2121 19.8621 88.8843 19.8621C87.36 19.8875 85.8625 20.2666 84.5098 20.9695C84.4159 21.0211 84.3125 21.0531 84.2059 21.0636C84.0993 21.0741 83.9917 21.0628 83.8896 21.0305C83.7874 20.9982 83.693 20.9455 83.6118 20.8755C83.5306 20.8056 83.4645 20.72 83.4174 20.6238L82.7309 19.1907C82.6391 19.005 82.6223 18.7912 82.6839 18.5934C82.7454 18.3956 82.8807 18.2291 83.0616 18.1284C84.9562 17.1198 87.0687 16.5899 89.215 16.585C93.0333 16.585 95.7291 18.1534 95.7291 21.9467V32.4194C95.7291 32.632 95.6446 32.8359 95.4943 32.9863C95.3439 33.1366 95.14 33.2211 94.9274 33.2211H92.8328C92.7246 33.2258 92.6166 33.2086 92.5152 33.1704C92.4139 33.1323 92.3213 33.074 92.2431 32.9991C92.1649 32.9241 92.1027 32.8341 92.0602 32.7345C92.0178 32.6349 91.9959 32.5277 91.996 32.4194V32.4194ZM91.7805 25.1787C91.0439 25.7349 89.686 25.9203 88.2379 26.1808C86.7897 26.4414 85.5871 26.8272 85.5871 28.4007C85.5871 29.8488 86.6344 30.5253 88.1477 30.5253C90.0267 30.5253 91.7805 29.478 91.7805 27.0427V25.1787Z" fill="#00D54B"></path>\n        <path d="M99.1716 29.0738C99.3067 28.9164 99.4976 28.8175 99.7041 28.7979C99.9106 28.7783 100.117 28.8395 100.279 28.9686C101.619 29.9803 103.261 30.51 104.939 30.4718C106.668 30.4718 107.946 29.9156 107.946 28.5627C107.946 27.33 106.773 27.0845 103.937 26.5884C100.93 26.0873 98.0542 25.0852 98.0542 21.6577C98.0542 18.085 101.136 16.5767 104.648 16.5767C106.851 16.5441 109.002 17.2497 110.757 18.581C110.842 18.6481 110.913 18.7319 110.966 18.8274C111.018 18.9228 111.05 19.0278 111.06 19.1361C111.071 19.2444 111.059 19.3537 111.026 19.4572C110.992 19.5608 110.938 19.6565 110.867 19.7386L109.865 20.9161C109.732 21.074 109.544 21.175 109.339 21.1983C109.134 21.2216 108.927 21.1655 108.762 21.0414C107.528 20.1382 106.033 19.66 104.503 19.6784C103.025 19.6784 101.732 20.1094 101.732 21.2769C101.732 22.5747 103.546 22.8202 105.365 23.1309C109.248 23.8074 111.714 24.9148 111.714 28.1418C111.714 31.5291 109.003 33.6237 104.699 33.6237C102.346 33.6956 100.042 32.9441 98.1845 31.4991C98.1011 31.4308 98.0322 31.3467 97.9817 31.2515C97.9313 31.1564 97.9002 31.0521 97.8904 30.9449C97.8806 30.8376 97.8923 30.7295 97.9247 30.6267C97.9571 30.524 98.0096 30.4288 98.0792 30.3466L99.1716 29.0738Z" fill="#00D54B"></path>\n        <path d="M114.094 32.4211V12.0269C114.094 11.8142 114.179 11.6103 114.329 11.4599C114.48 11.3096 114.683 11.2251 114.896 11.2251H117.206C117.419 11.2251 117.623 11.3096 117.773 11.4599C117.923 11.6103 118.008 11.8142 118.008 12.0269V18.992C118.583 18.2245 119.333 17.6057 120.196 17.1873C121.059 16.7689 122.01 16.563 122.969 16.5868C126.386 16.5868 128.39 19.022 128.39 22.4996V32.4211C128.39 32.6337 128.306 32.8377 128.156 32.988C128.005 33.1384 127.801 33.2228 127.589 33.2228H125.279C125.066 33.2228 124.862 33.1384 124.712 32.988C124.561 32.8377 124.477 32.6337 124.477 32.4211V23.4015C124.477 21.6728 123.921 20.1044 121.706 20.1044C119.606 20.1044 118.008 21.5826 118.008 24.0479V32.4261C118.008 32.6387 117.923 32.8427 117.773 32.993C117.623 33.1434 117.419 33.2278 117.206 33.2278H114.896C114.79 33.2285 114.685 33.2081 114.587 33.1677C114.489 33.1273 114.401 33.0679 114.326 32.9927C114.251 32.9176 114.192 32.8284 114.153 32.7302C114.113 32.6321 114.093 32.527 114.094 32.4211V32.4211Z" fill="#00D54B"></path>\n        <path d="M153.81 32.6842L152.147 27.7736H143.738L142.07 32.6842C142.016 32.8423 141.914 32.9796 141.779 33.0767C141.643 33.1738 141.48 33.2258 141.313 33.2254H138.602C138.473 33.2252 138.346 33.1939 138.232 33.1342C138.118 33.0745 138.02 32.9881 137.946 32.8824C137.872 32.7767 137.825 32.6547 137.808 32.5269C137.792 32.3991 137.806 32.2691 137.851 32.1481L145.422 11.7488C145.482 11.5994 145.586 11.4717 145.72 11.3823C145.855 11.2929 146.012 11.246 146.174 11.2477H149.877C150.041 11.2484 150.202 11.299 150.337 11.393C150.472 11.487 150.575 11.6198 150.633 11.7739L158.175 32.1681C158.219 32.2896 158.233 32.42 158.217 32.5482C158.2 32.6764 158.152 32.7987 158.078 32.9045C158.003 33.0103 157.905 33.0966 157.79 33.156C157.675 33.2154 157.547 33.246 157.418 33.2454H154.557C154.389 33.2416 154.227 33.1854 154.093 33.0848C153.959 32.9841 153.86 32.844 153.81 32.6842ZM147.987 14.8004L144.75 24.3511H151.099L147.987 14.8004Z" fill="#00D54B"></path>\n        <path d="M163.982 17.7586V19.0214C164.552 18.2333 165.307 17.5985 166.182 17.1735C167.056 16.7486 168.022 16.5468 168.993 16.5861C173.428 16.5861 176.294 20.254 176.294 25.0595C176.294 29.8649 173.428 33.5779 168.993 33.5779C168.019 33.6148 167.051 33.4087 166.176 32.9784C165.302 32.548 164.548 31.9068 163.982 31.1126V37.762C163.982 37.9746 163.898 38.1786 163.748 38.3289C163.597 38.4793 163.393 38.5638 163.181 38.5638H160.871C160.658 38.5638 160.454 38.4793 160.304 38.3289C160.153 38.1786 160.069 37.9746 160.069 37.762V17.7185C160.069 17.5059 160.153 17.302 160.304 17.1516C160.454 17.0013 160.658 16.9168 160.871 16.9168H163.181C163.289 16.9167 163.397 16.9387 163.497 16.9814C163.597 17.0242 163.687 17.0869 163.762 17.1656C163.837 17.2444 163.895 17.3375 163.933 17.4395C163.971 17.5414 163.988 17.65 163.982 17.7586ZM168.172 30.1756C170.882 30.1756 172.18 27.8605 172.18 25.0595C172.18 22.2584 170.857 20.0035 168.172 20.0035C165.486 20.0035 163.982 22.2534 163.982 25.0595C163.982 27.8655 165.411 30.1756 168.172 30.1756Z" fill="#00D54B"></path>\n        <path d="M182.623 17.7584V19.0212C183.193 18.2338 183.949 17.5994 184.823 17.1745C185.697 16.7497 186.663 16.5475 187.634 16.5859C192.074 16.5859 194.94 20.2538 194.94 25.0592C194.94 29.8647 192.074 33.5777 187.634 33.5777C186.66 33.6137 185.692 33.4072 184.818 32.9769C183.943 32.5467 183.189 31.906 182.623 31.1124V37.7618C182.623 37.9744 182.539 38.1784 182.388 38.3287C182.238 38.4791 182.034 38.5635 181.822 38.5635H179.512C179.299 38.5635 179.095 38.4791 178.945 38.3287C178.794 38.1784 178.71 37.9744 178.71 37.7618V17.7183C178.71 17.5057 178.794 17.3018 178.945 17.1514C179.095 17.0011 179.299 16.9166 179.512 16.9166H181.822C181.931 16.9157 182.038 16.9372 182.139 16.9798C182.239 17.0223 182.33 17.0849 182.405 17.1638C182.48 17.2427 182.538 17.3362 182.576 17.4385C182.613 17.5407 182.629 17.6496 182.623 17.7584V17.7584ZM186.817 30.1753C189.528 30.1753 190.826 27.8603 190.826 25.0592C190.826 22.2582 189.503 20.0033 186.817 20.0033C184.132 20.0033 182.623 22.2532 182.623 25.0592C182.623 27.8653 184.071 30.1753 186.817 30.1753Z" fill="#00D54B"></path>\n        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5341 0.762695C5.06793 0.762695 0.636719 5.19391 0.636719 10.6601V33.8055C0.636719 39.2717 5.06792 43.7029 10.5341 43.7029H33.4495C38.9157 43.7029 43.3469 39.2717 43.3469 33.8055V10.6601C43.3469 5.1939 38.9157 0.762695 33.4495 0.762695H10.5341ZM28.9311 16.7337C27.3008 15.3539 25.235 14.5953 23.0992 14.592C21.3395 14.592 19.5799 15.1752 19.5799 16.794C19.5799 18.2698 21.1466 18.8473 23.0766 19.5587C23.2637 19.6276 23.4543 19.6979 23.6472 19.7703C27.4631 21.0574 30.6053 22.636 30.6053 26.3765C30.6053 30.4388 27.453 33.214 22.2947 33.5307L21.8272 35.7077C21.7392 36.1143 21.3785 36.4037 20.9624 36.4015H17.7197C17.4544 36.395 17.2057 36.2712 17.0406 36.0635C16.8756 35.8557 16.8113 35.5854 16.865 35.3256L17.3678 33.028C15.4207 32.5315 13.6308 31.5509 12.1642 30.1774C11.9943 30.0134 11.8984 29.7875 11.8984 29.5514C11.8984 29.3153 11.9943 29.0894 12.1642 28.9255L13.9641 27.1659C14.3045 26.8311 14.8504 26.8311 15.1908 27.1659C16.8396 28.7389 19.0409 29.6003 21.3194 29.564C23.6673 29.564 25.261 28.5685 25.261 26.9899C25.261 25.5627 23.9543 25.0847 21.4745 24.1777C21.2114 24.0814 20.9351 23.9804 20.6457 23.8728C17.4582 22.7366 14.4417 21.1127 14.4417 17.337C14.4417 12.9681 18.0917 10.8364 22.3953 10.6252L22.8478 8.40808C22.9374 8.00529 23.2949 7.71889 23.7075 7.7193H26.9402C27.2036 7.71846 27.4533 7.83631 27.6201 8.04014C27.7868 8.24397 27.8529 8.51208 27.7999 8.77006L27.2972 11.2486C28.9429 11.7866 30.4679 12.6405 31.7868 13.7624C31.9686 13.9187 32.0768 14.1439 32.0854 14.3835C32.094 14.6231 32.0021 14.8554 31.832 15.0243L30.1528 16.7086C29.8166 17.0394 29.2806 17.0504 28.9311 16.7337Z" fill="#00D54B"></path>\n      </svg>\n      <div data-legalese="">\n        <p><sup>1</sup><strong>Cash App is a financial platform, not a bank. Banking services provided and debit cards issued by Cash\'s bank partners.</strong></p>\n        <p><sup>2</sup>Brokerage services by Cash App Investing LLC, member <a href="https://www.finra.org" target="_blank" rel="noreferrer">FINRA</a> / <a href="https://www.sipc.org/" target="_blank" rel="noreferrer">SIPC</a>.See our <a href="https://brokercheck.finra.org/firm/summary/144076" target="_blank" rel="noreferrer">BrokerCheck</a>. Investing involves risk; you may lose money. Bitcoin\n          trading is offered by Cash App. Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC.</p>\n      </div>\n      <div data-copyright="">\n        <p></p>\n      </div>\n    </div>\n  </footer>\n</main>\n';
var homeCss = "/cash-clone/assets/home.f97e444b.css?used";
const LandingPage = () => {
  const navigate = useNavigate();
  useTheme(null, ["theme-bg", "theme-green", "theme-light-gray", "theme-white"]);
  React.useLayoutEffect(() => {
    if (!(window && document))
      return;
    document.documentElement.style.setProperty("--vh", `${window.innerHeight}px`);
    const styles = document.createElement("link");
    styles.href = homeCss;
    styles.rel = "stylesheet";
    document.head.appendChild(styles);
    return () => {
      styles.remove();
    };
  }, []);
  React.useEffect(() => {
    setTimeout(() => {
      const loginButtons = document.querySelectorAll("a[href='javascript: void(0)']");
      if (!loginButtons)
        return;
      loginButtons.forEach((btn) => btn.addEventListener("click", (e2) => {
        e2.preventDefault();
        navigate("/login");
      }));
    });
  }, []);
  return /* @__PURE__ */ jsx("div", {
    children: /* @__PURE__ */ jsx("div", {
      dangerouslySetInnerHTML: {
        __html: Landing
      }
    })
  });
};
const Container = () => {
  const loggedIn = useAppSelector((state) => {
    var _a;
    return (_a = state.auth) == null ? void 0 : _a.token;
  });
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const [getUser, {
    data: _2,
    isLoading
  }] = useLazyGetUserByIdQuery();
  React.useEffect(() => {
    const handleGetUser = async (id2) => {
      try {
        await getUser(id2).unwrap();
      } catch (err) {
        console.error("Error fetching user from localStorage id:", JSON.stringify(err, null, 2));
        dispatch(authSlice.actions.unsetAuth());
      }
    };
    if (!loggedIn) {
      const auth = localStorage.getItem("auth");
      if (auth) {
        const parsed = JSON.parse(auth);
        console.debug("DEBUG reading auth from storage: parsed:", JSON.stringify(parsed, null, 2));
        dispatch(authSlice.actions.setAuth(parsed));
        handleGetUser(parsed.user.id);
      }
    }
  }, []);
  const displayLoggedOut = () => /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(Route, {
      path: "/",
      element: /* @__PURE__ */ jsx(LandingPage, {})
    }), /* @__PURE__ */ jsx(Route, {
      path: "/login",
      element: /* @__PURE__ */ jsx(LoginPage, {})
    }), /* @__PURE__ */ jsx(Route, {
      path: "$:cashTag",
      element: /* @__PURE__ */ jsx(PaymentPage, {})
    }), /* @__PURE__ */ jsx(Route, {
      path: "*",
      element: /* @__PURE__ */ jsx(Navigate, {
        to: "/login",
        replace: true,
        state: {
          from: location
        }
      })
    })]
  });
  const displayLoggedIn = () => /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(Route, {
      path: "/",
      element: /* @__PURE__ */ jsx(Navigate, {
        replace: true,
        to: "/account/activity"
      })
    }), /* @__PURE__ */ jsxs(Route, {
      path: "account",
      element: /* @__PURE__ */ jsx(Dashboard, {
        user
      }),
      children: [/* @__PURE__ */ jsx(Route, {
        path: "activity",
        element: /* @__PURE__ */ jsx(ActivityPage, {
          user
        })
      }), /* @__PURE__ */ jsx(Route, {
        path: "mycash",
        element: /* @__PURE__ */ jsx(MyCashPage, {
          user
        })
      }), /* @__PURE__ */ jsx(Route, {
        path: "settings",
        element: /* @__PURE__ */ jsx(SettingsPage, {
          user
        })
      }), /* @__PURE__ */ jsx(Route, {
        path: "*",
        element: /* @__PURE__ */ jsx(Navigate, {
          replace: true,
          to: "/account/activity"
        })
      })]
    }), /* @__PURE__ */ jsx(Route, {
      path: "$:cashTag",
      element: /* @__PURE__ */ jsx(PaymentPage, {})
    }), /* @__PURE__ */ jsx(Route, {
      path: "*",
      element: /* @__PURE__ */ jsx(Navigate, {
        replace: true,
        to: "/account/activity"
      })
    })]
  });
  if (isLoading)
    return null;
  return /* @__PURE__ */ jsx(Routes, {
    children: loggedIn ? displayLoggedIn() : displayLoggedOut()
  });
};
const container = document.getElementById("root");
const root = createRoot(container);
const DebugRouter = ({
  children
}) => {
  useLocation();
  return children;
};
const App = () => {
  return /* @__PURE__ */ jsx(BrowserRouter, {
    basename: "/cash-clone/",
    children: /* @__PURE__ */ jsx(Provider, {
      store,
      children: /* @__PURE__ */ jsx(DebugRouter, {
        children: /* @__PURE__ */ jsx(Container, {})
      })
    })
  });
};
document.addEventListener("DOMContentLoaded", () => {
  document.body.className = "theme-bg theme-green";
});
root.render(/* @__PURE__ */ jsx(App, {}));
//# sourceMappingURL=index.02b27531.js.map
