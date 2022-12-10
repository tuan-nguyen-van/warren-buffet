import {
  r as E,
  R as y,
  a as xy,
  b as Fc,
  s as aw,
  d as iw,
  u as ow,
  e as jf,
  _ as $e,
  j as L,
  c as I,
  f as he,
  g as sw,
  h as lw,
  i as X,
  k as cw,
  l as Le,
  m as Be,
  n as Nf,
  o as mo,
  p as ti,
  q as wy,
  t as We,
  v as _y,
  P as uw,
  w as qr,
  x as ua,
  y as fw,
  z as ae,
  A as je,
  B as Oy,
  C as Sy,
  D as dw,
  E as pn,
  F as Ey,
  G as $y,
  H as Lf,
  I as pw,
  J as Ln,
  T as hw,
  K as vw,
  L as Cp,
  M as Ay,
  N as Bf,
  O as jr,
  Q as ke,
  S as mw,
  U as fa,
  V as Hl,
  W as Qi,
  X as Pp,
  Y as eo,
  Z as gw,
  $ as Cn,
  a0 as di,
  a1 as yw,
  a2 as bw,
  a3 as xw,
  a4 as ww,
  a5 as _w,
  a6 as Cy,
  a7 as Py,
  a8 as Ow,
  a9 as Ar,
  aa as ct,
  ab as xe,
  ac as Ct,
  ad as Sw,
  ae as lt,
  af as kp,
  ag as Ew,
  ah as zc,
  ai as Wc,
  aj as Ws,
  ak as $w,
  al as Aw,
  am as Cw,
  an as Pw,
  ao as to,
  ap as kw,
  aq as Tw,
  ar as pi,
  as as hi,
  at as vi,
  au as Uc,
  av as Mw,
  aw as Iw,
  ax as Rw,
  ay as Dw,
  az as jw,
} from './FormControlLabel.7b665b70.js';
var ky = { exports: {} },
  Ty = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var da = E.exports;
function Nw(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Lw = typeof Object.is == 'function' ? Object.is : Nw,
  Bw = da.useState,
  Fw = da.useEffect,
  zw = da.useLayoutEffect,
  Ww = da.useDebugValue;
function Uw(e, t) {
  var r = t(),
    n = Bw({ inst: { value: r, getSnapshot: t } }),
    a = n[0].inst,
    i = n[1];
  return (
    zw(
      function () {
        (a.value = r), (a.getSnapshot = t), Vl(a) && i({ inst: a });
      },
      [e, r, t]
    ),
    Fw(
      function () {
        return (
          Vl(a) && i({ inst: a }),
          e(function () {
            Vl(a) && i({ inst: a });
          })
        );
      },
      [e]
    ),
    Ww(r),
    r
  );
}
function Vl(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !Lw(e, r);
  } catch {
    return !0;
  }
}
function Hw(e, t) {
  return t();
}
var Vw =
  typeof window > 'u' ||
  typeof window.document > 'u' ||
  typeof window.document.createElement > 'u'
    ? Hw
    : Uw;
Ty.useSyncExternalStore =
  da.useSyncExternalStore !== void 0 ? da.useSyncExternalStore : Vw;
(function (e) {
  e.exports = Ty;
})(ky);
var My = { exports: {} },
  Iy = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Us = E.exports,
  Gw = ky.exports;
function qw(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Yw = typeof Object.is == 'function' ? Object.is : qw,
  Kw = Gw.useSyncExternalStore,
  Xw = Us.useRef,
  Jw = Us.useEffect,
  Zw = Us.useMemo,
  Qw = Us.useDebugValue;
Iy.useSyncExternalStoreWithSelector = function (e, t, r, n, a) {
  var i = Xw(null);
  if (i.current === null) {
    var o = { hasValue: !1, value: null };
    i.current = o;
  } else o = i.current;
  i = Zw(
    function () {
      function l(h) {
        if (!c) {
          if (((c = !0), (u = h), (h = n(h)), a !== void 0 && o.hasValue)) {
            var v = o.value;
            if (a(v, h)) return (f = v);
          }
          return (f = h);
        }
        if (((v = f), Yw(u, h))) return v;
        var p = n(h);
        return a !== void 0 && a(v, p) ? v : ((u = h), (f = p));
      }
      var c = !1,
        u,
        f,
        d = r === void 0 ? null : r;
      return [
        function () {
          return l(t());
        },
        d === null
          ? void 0
          : function () {
              return l(d());
            },
      ];
    },
    [t, r, n, a]
  );
  var s = Kw(e, i[0], i[1]);
  return (
    Jw(
      function () {
        (o.hasValue = !0), (o.value = s);
      },
      [s]
    ),
    Qw(s),
    s
  );
};
(function (e) {
  e.exports = Iy;
})(My);
function e_(e) {
  e();
}
let Ry = e_;
const t_ = (e) => (Ry = e),
  r_ = () => Ry,
  un = y.createContext(null);
function Dy() {
  return E.exports.useContext(un);
}
const n_ = () => {
  throw new Error('uSES not initialized!');
};
let jy = n_;
const a_ = (e) => {
    jy = e;
  },
  i_ = (e, t) => e === t;
function o_(e = un) {
  const t = e === un ? Dy : () => E.exports.useContext(e);
  return function (n, a = i_) {
    const { store: i, subscription: o, getServerState: s } = t(),
      l = jy(o.addNestedSub, i.getState, s || i.getState, n, a);
    return E.exports.useDebugValue(l), l;
  };
}
const s_ = o_();
var l_ = { exports: {} },
  Ue = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ff = Symbol.for('react.element'),
  zf = Symbol.for('react.portal'),
  Hs = Symbol.for('react.fragment'),
  Vs = Symbol.for('react.strict_mode'),
  Gs = Symbol.for('react.profiler'),
  qs = Symbol.for('react.provider'),
  Ys = Symbol.for('react.context'),
  c_ = Symbol.for('react.server_context'),
  Ks = Symbol.for('react.forward_ref'),
  Xs = Symbol.for('react.suspense'),
  Js = Symbol.for('react.suspense_list'),
  Zs = Symbol.for('react.memo'),
  Qs = Symbol.for('react.lazy'),
  u_ = Symbol.for('react.offscreen'),
  Ny;
Ny = Symbol.for('react.module.reference');
function pr(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ff:
        switch (((e = e.type), e)) {
          case Hs:
          case Gs:
          case Vs:
          case Xs:
          case Js:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case c_:
              case Ys:
              case Ks:
              case Qs:
              case Zs:
              case qs:
                return e;
              default:
                return t;
            }
        }
      case zf:
        return t;
    }
  }
}
Ue.ContextConsumer = Ys;
Ue.ContextProvider = qs;
Ue.Element = Ff;
Ue.ForwardRef = Ks;
Ue.Fragment = Hs;
Ue.Lazy = Qs;
Ue.Memo = Zs;
Ue.Portal = zf;
Ue.Profiler = Gs;
Ue.StrictMode = Vs;
Ue.Suspense = Xs;
Ue.SuspenseList = Js;
Ue.isAsyncMode = function () {
  return !1;
};
Ue.isConcurrentMode = function () {
  return !1;
};
Ue.isContextConsumer = function (e) {
  return pr(e) === Ys;
};
Ue.isContextProvider = function (e) {
  return pr(e) === qs;
};
Ue.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Ff;
};
Ue.isForwardRef = function (e) {
  return pr(e) === Ks;
};
Ue.isFragment = function (e) {
  return pr(e) === Hs;
};
Ue.isLazy = function (e) {
  return pr(e) === Qs;
};
Ue.isMemo = function (e) {
  return pr(e) === Zs;
};
Ue.isPortal = function (e) {
  return pr(e) === zf;
};
Ue.isProfiler = function (e) {
  return pr(e) === Gs;
};
Ue.isStrictMode = function (e) {
  return pr(e) === Vs;
};
Ue.isSuspense = function (e) {
  return pr(e) === Xs;
};
Ue.isSuspenseList = function (e) {
  return pr(e) === Js;
};
Ue.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Hs ||
    e === Gs ||
    e === Vs ||
    e === Xs ||
    e === Js ||
    e === u_ ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === Qs ||
        e.$$typeof === Zs ||
        e.$$typeof === qs ||
        e.$$typeof === Ys ||
        e.$$typeof === Ks ||
        e.$$typeof === Ny ||
        e.getModuleId !== void 0))
  );
};
Ue.typeOf = pr;
(function (e) {
  e.exports = Ue;
})(l_);
function f_() {
  const e = r_();
  let t = null,
    r = null;
  return {
    clear() {
      (t = null), (r = null);
    },
    notify() {
      e(() => {
        let n = t;
        for (; n; ) n.callback(), (n = n.next);
      });
    },
    get() {
      let n = [],
        a = t;
      for (; a; ) n.push(a), (a = a.next);
      return n;
    },
    subscribe(n) {
      let a = !0,
        i = (r = { callback: n, next: null, prev: r });
      return (
        i.prev ? (i.prev.next = i) : (t = i),
        function () {
          !a ||
            t === null ||
            ((a = !1),
            i.next ? (i.next.prev = i.prev) : (r = i.prev),
            i.prev ? (i.prev.next = i.next) : (t = i.next));
        }
      );
    },
  };
}
const Tp = { notify() {}, get: () => [] };
function d_(e, t) {
  let r,
    n = Tp;
  function a(f) {
    return l(), n.subscribe(f);
  }
  function i() {
    n.notify();
  }
  function o() {
    u.onStateChange && u.onStateChange();
  }
  function s() {
    return Boolean(r);
  }
  function l() {
    r || ((r = t ? t.addNestedSub(o) : e.subscribe(o)), (n = f_()));
  }
  function c() {
    r && (r(), (r = void 0), n.clear(), (n = Tp));
  }
  const u = {
    addNestedSub: a,
    notifyNestedSubs: i,
    handleChangeWrapper: o,
    isSubscribed: s,
    trySubscribe: l,
    tryUnsubscribe: c,
    getListeners: () => n,
  };
  return u;
}
const p_ =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  h_ = p_ ? E.exports.useLayoutEffect : E.exports.useEffect;
function v_({ store: e, context: t, children: r, serverState: n }) {
  const a = E.exports.useMemo(() => {
      const s = d_(e);
      return {
        store: e,
        subscription: s,
        getServerState: n ? () => n : void 0,
      };
    }, [e, n]),
    i = E.exports.useMemo(() => e.getState(), [e]);
  h_(() => {
    const { subscription: s } = a;
    return (
      (s.onStateChange = s.notifyNestedSubs),
      s.trySubscribe(),
      i !== e.getState() && s.notifyNestedSubs(),
      () => {
        s.tryUnsubscribe(), (s.onStateChange = void 0);
      }
    );
  }, [a, i]);
  const o = t || un;
  return y.createElement(o.Provider, { value: a }, r);
}
function Ly(e = un) {
  const t = e === un ? Dy : () => E.exports.useContext(e);
  return function () {
    const { store: n } = t();
    return n;
  };
}
const m_ = Ly();
function g_(e = un) {
  const t = e === un ? m_ : Ly(e);
  return function () {
    return t().dispatch;
  };
}
const y_ = g_();
a_(My.exports.useSyncExternalStoreWithSelector);
t_(xy.exports.unstable_batchedUpdates);
function yr(e) {
  for (
    var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
    n < t;
    n++
  )
    r[n - 1] = arguments[n];
  throw Error(
    '[Immer] minified error nr: ' +
      e +
      (r.length
        ? ' ' +
          r
            .map(function (a) {
              return "'" + a + "'";
            })
            .join(',')
        : '') +
      '. Find the full error at: https://bit.ly/3cXEKWf'
  );
}
function fn(e) {
  return !!e && !!e[et];
}
function Yr(e) {
  return (
    !!e &&
    ((function (t) {
      if (!t || typeof t != 'object') return !1;
      var r = Object.getPrototypeOf(t);
      if (r === null) return !0;
      var n = Object.hasOwnProperty.call(r, 'constructor') && r.constructor;
      return (
        n === Object ||
        (typeof n == 'function' && Function.toString.call(n) === A_)
      );
    })(e) ||
      Array.isArray(e) ||
      !!e[Lp] ||
      !!e.constructor[Lp] ||
      Wf(e) ||
      Uf(e))
  );
}
function Mn(e, t, r) {
  r === void 0 && (r = !1),
    Ea(e) === 0
      ? (r ? Object.keys : na)(e).forEach(function (n) {
          (r && typeof n == 'symbol') || t(n, e[n], e);
        })
      : e.forEach(function (n, a) {
          return t(a, n, e);
        });
}
function Ea(e) {
  var t = e[et];
  return t
    ? t.i > 3
      ? t.i - 4
      : t.i
    : Array.isArray(e)
    ? 1
    : Wf(e)
    ? 2
    : Uf(e)
    ? 3
    : 0;
}
function ra(e, t) {
  return Ea(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function b_(e, t) {
  return Ea(e) === 2 ? e.get(t) : e[t];
}
function By(e, t, r) {
  var n = Ea(e);
  n === 2 ? e.set(t, r) : n === 3 ? (e.delete(t), e.add(r)) : (e[t] = r);
}
function Fy(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function Wf(e) {
  return E_ && e instanceof Map;
}
function Uf(e) {
  return $_ && e instanceof Set;
}
function xn(e) {
  return e.o || e.t;
}
function Hf(e) {
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  var t = Wy(e);
  delete t[et];
  for (var r = na(t), n = 0; n < r.length; n++) {
    var a = r[n],
      i = t[a];
    i.writable === !1 && ((i.writable = !0), (i.configurable = !0)),
      (i.get || i.set) &&
        (t[a] = {
          configurable: !0,
          writable: !0,
          enumerable: i.enumerable,
          value: e[a],
        });
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function Vf(e, t) {
  return (
    t === void 0 && (t = !1),
    Gf(e) ||
      fn(e) ||
      !Yr(e) ||
      (Ea(e) > 1 && (e.set = e.add = e.clear = e.delete = x_),
      Object.freeze(e),
      t &&
        Mn(
          e,
          function (r, n) {
            return Vf(n, !0);
          },
          !0
        )),
    e
  );
}
function x_() {
  yr(2);
}
function Gf(e) {
  return e == null || typeof e != 'object' || Object.isFrozen(e);
}
function Cr(e) {
  var t = qc[e];
  return t || yr(18, e), t;
}
function w_(e, t) {
  qc[e] || (qc[e] = t);
}
function Hc() {
  return mi;
}
function Gl(e, t) {
  t && (Cr('Patches'), (e.u = []), (e.s = []), (e.v = t));
}
function No(e) {
  Vc(e), e.p.forEach(__), (e.p = null);
}
function Vc(e) {
  e === mi && (mi = e.l);
}
function Mp(e) {
  return (mi = { p: [], l: mi, h: e, m: !0, _: 0 });
}
function __(e) {
  var t = e[et];
  t.i === 0 || t.i === 1 ? t.j() : (t.O = !0);
}
function ql(e, t) {
  t._ = t.p.length;
  var r = t.p[0],
    n = e !== void 0 && e !== r;
  return (
    t.h.g || Cr('ES5').S(t, e, n),
    n
      ? (r[et].P && (No(t), yr(4)),
        Yr(e) && ((e = Lo(t, e)), t.l || Bo(t, e)),
        t.u && Cr('Patches').M(r[et].t, e, t.u, t.s))
      : (e = Lo(t, r, [])),
    No(t),
    t.u && t.v(t.u, t.s),
    e !== zy ? e : void 0
  );
}
function Lo(e, t, r) {
  if (Gf(t)) return t;
  var n = t[et];
  if (!n)
    return (
      Mn(
        t,
        function (i, o) {
          return Ip(e, n, t, i, o, r);
        },
        !0
      ),
      t
    );
  if (n.A !== e) return t;
  if (!n.P) return Bo(e, n.t, !0), n.t;
  if (!n.I) {
    (n.I = !0), n.A._--;
    var a = n.i === 4 || n.i === 5 ? (n.o = Hf(n.k)) : n.o;
    Mn(n.i === 3 ? new Set(a) : a, function (i, o) {
      return Ip(e, n, a, i, o, r);
    }),
      Bo(e, a, !1),
      r && e.u && Cr('Patches').R(n, r, e.u, e.s);
  }
  return n.o;
}
function Ip(e, t, r, n, a, i) {
  if (fn(a)) {
    var o = Lo(e, a, i && t && t.i !== 3 && !ra(t.D, n) ? i.concat(n) : void 0);
    if ((By(r, n, o), !fn(o))) return;
    e.m = !1;
  }
  if (Yr(a) && !Gf(a)) {
    if (!e.h.F && e._ < 1) return;
    Lo(e, a), (t && t.A.l) || Bo(e, a);
  }
}
function Bo(e, t, r) {
  r === void 0 && (r = !1), e.h.F && e.m && Vf(t, r);
}
function Yl(e, t) {
  var r = e[et];
  return (r ? xn(r) : e)[t];
}
function Rp(e, t) {
  if (t in e)
    for (var r = Object.getPrototypeOf(e); r; ) {
      var n = Object.getOwnPropertyDescriptor(r, t);
      if (n) return n;
      r = Object.getPrototypeOf(r);
    }
}
function an(e) {
  e.P || ((e.P = !0), e.l && an(e.l));
}
function Kl(e) {
  e.o || (e.o = Hf(e.t));
}
function Gc(e, t, r) {
  var n = Wf(t)
    ? Cr('MapSet').N(t, r)
    : Uf(t)
    ? Cr('MapSet').T(t, r)
    : e.g
    ? (function (a, i) {
        var o = Array.isArray(a),
          s = {
            i: o ? 1 : 0,
            A: i ? i.A : Hc(),
            P: !1,
            I: !1,
            D: {},
            l: i,
            t: a,
            k: null,
            o: null,
            j: null,
            C: !1,
          },
          l = s,
          c = gi;
        o && ((l = [s]), (c = ri));
        var u = Proxy.revocable(l, c),
          f = u.revoke,
          d = u.proxy;
        return (s.k = d), (s.j = f), d;
      })(t, r)
    : Cr('ES5').J(t, r);
  return (r ? r.A : Hc()).p.push(n), n;
}
function O_(e) {
  return (
    fn(e) || yr(22, e),
    (function t(r) {
      if (!Yr(r)) return r;
      var n,
        a = r[et],
        i = Ea(r);
      if (a) {
        if (!a.P && (a.i < 4 || !Cr('ES5').K(a))) return a.t;
        (a.I = !0), (n = Dp(r, i)), (a.I = !1);
      } else n = Dp(r, i);
      return (
        Mn(n, function (o, s) {
          (a && b_(a.t, o) === s) || By(n, o, t(s));
        }),
        i === 3 ? new Set(n) : n
      );
    })(e)
  );
}
function Dp(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return Hf(e);
}
function S_() {
  function e(i, o) {
    var s = a[i];
    return (
      s
        ? (s.enumerable = o)
        : (a[i] = s =
            {
              configurable: !0,
              enumerable: o,
              get: function () {
                var l = this[et];
                return gi.get(l, i);
              },
              set: function (l) {
                var c = this[et];
                gi.set(c, i, l);
              },
            }),
      s
    );
  }
  function t(i) {
    for (var o = i.length - 1; o >= 0; o--) {
      var s = i[o][et];
      if (!s.P)
        switch (s.i) {
          case 5:
            n(s) && an(s);
            break;
          case 4:
            r(s) && an(s);
        }
    }
  }
  function r(i) {
    for (var o = i.t, s = i.k, l = na(s), c = l.length - 1; c >= 0; c--) {
      var u = l[c];
      if (u !== et) {
        var f = o[u];
        if (f === void 0 && !ra(o, u)) return !0;
        var d = s[u],
          h = d && d[et];
        if (h ? h.t !== f : !Fy(d, f)) return !0;
      }
    }
    var v = !!o[et];
    return l.length !== na(o).length + (v ? 0 : 1);
  }
  function n(i) {
    var o = i.k;
    if (o.length !== i.t.length) return !0;
    var s = Object.getOwnPropertyDescriptor(o, o.length - 1);
    if (s && !s.get) return !0;
    for (var l = 0; l < o.length; l++) if (!o.hasOwnProperty(l)) return !0;
    return !1;
  }
  var a = {};
  w_('ES5', {
    J: function (i, o) {
      var s = Array.isArray(i),
        l = (function (u, f) {
          if (u) {
            for (var d = Array(f.length), h = 0; h < f.length; h++)
              Object.defineProperty(d, '' + h, e(h, !0));
            return d;
          }
          var v = Wy(f);
          delete v[et];
          for (var p = na(v), m = 0; m < p.length; m++) {
            var g = p[m];
            v[g] = e(g, u || !!v[g].enumerable);
          }
          return Object.create(Object.getPrototypeOf(f), v);
        })(s, i),
        c = {
          i: s ? 5 : 4,
          A: o ? o.A : Hc(),
          P: !1,
          I: !1,
          D: {},
          l: o,
          t: i,
          k: l,
          o: null,
          O: !1,
          C: !1,
        };
      return Object.defineProperty(l, et, { value: c, writable: !0 }), l;
    },
    S: function (i, o, s) {
      s
        ? fn(o) && o[et].A === i && t(i.p)
        : (i.u &&
            (function l(c) {
              if (c && typeof c == 'object') {
                var u = c[et];
                if (u) {
                  var f = u.t,
                    d = u.k,
                    h = u.D,
                    v = u.i;
                  if (v === 4)
                    Mn(d, function (x) {
                      x !== et &&
                        (f[x] !== void 0 || ra(f, x)
                          ? h[x] || l(d[x])
                          : ((h[x] = !0), an(u)));
                    }),
                      Mn(f, function (x) {
                        d[x] !== void 0 || ra(d, x) || ((h[x] = !1), an(u));
                      });
                  else if (v === 5) {
                    if ((n(u) && (an(u), (h.length = !0)), d.length < f.length))
                      for (var p = d.length; p < f.length; p++) h[p] = !1;
                    else for (var m = f.length; m < d.length; m++) h[m] = !0;
                    for (
                      var g = Math.min(d.length, f.length), _ = 0;
                      _ < g;
                      _++
                    )
                      d.hasOwnProperty(_) || (h[_] = !0),
                        h[_] === void 0 && l(d[_]);
                  }
                }
              }
            })(i.p[0]),
          t(i.p));
    },
    K: function (i) {
      return i.i === 4 ? r(i) : n(i);
    },
  });
}
var jp,
  mi,
  qf = typeof Symbol < 'u' && typeof Symbol('x') == 'symbol',
  E_ = typeof Map < 'u',
  $_ = typeof Set < 'u',
  Np = typeof Proxy < 'u' && Proxy.revocable !== void 0 && typeof Reflect < 'u',
  zy = qf
    ? Symbol.for('immer-nothing')
    : (((jp = {})['immer-nothing'] = !0), jp),
  Lp = qf ? Symbol.for('immer-draftable') : '__$immer_draftable',
  et = qf ? Symbol.for('immer-state') : '__$immer_state',
  A_ = '' + Object.prototype.constructor,
  na =
    typeof Reflect < 'u' && Reflect.ownKeys
      ? Reflect.ownKeys
      : Object.getOwnPropertySymbols !== void 0
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(
            Object.getOwnPropertySymbols(e)
          );
        }
      : Object.getOwnPropertyNames,
  Wy =
    Object.getOwnPropertyDescriptors ||
    function (e) {
      var t = {};
      return (
        na(e).forEach(function (r) {
          t[r] = Object.getOwnPropertyDescriptor(e, r);
        }),
        t
      );
    },
  qc = {},
  gi = {
    get: function (e, t) {
      if (t === et) return e;
      var r = xn(e);
      if (!ra(r, t))
        return (function (a, i, o) {
          var s,
            l = Rp(i, o);
          return l
            ? 'value' in l
              ? l.value
              : (s = l.get) === null || s === void 0
              ? void 0
              : s.call(a.k)
            : void 0;
        })(e, r, t);
      var n = r[t];
      return e.I || !Yr(n)
        ? n
        : n === Yl(e.t, t)
        ? (Kl(e), (e.o[t] = Gc(e.A.h, n, e)))
        : n;
    },
    has: function (e, t) {
      return t in xn(e);
    },
    ownKeys: function (e) {
      return Reflect.ownKeys(xn(e));
    },
    set: function (e, t, r) {
      var n = Rp(xn(e), t);
      if (n != null && n.set) return n.set.call(e.k, r), !0;
      if (!e.P) {
        var a = Yl(xn(e), t),
          i = a == null ? void 0 : a[et];
        if (i && i.t === r) return (e.o[t] = r), (e.D[t] = !1), !0;
        if (Fy(r, a) && (r !== void 0 || ra(e.t, t))) return !0;
        Kl(e), an(e);
      }
      return (
        (e.o[t] === r && typeof r != 'number' && (r !== void 0 || t in e.o)) ||
        ((e.o[t] = r), (e.D[t] = !0), !0)
      );
    },
    deleteProperty: function (e, t) {
      return (
        Yl(e.t, t) !== void 0 || t in e.t
          ? ((e.D[t] = !1), Kl(e), an(e))
          : delete e.D[t],
        e.o && delete e.o[t],
        !0
      );
    },
    getOwnPropertyDescriptor: function (e, t) {
      var r = xn(e),
        n = Reflect.getOwnPropertyDescriptor(r, t);
      return (
        n && {
          writable: !0,
          configurable: e.i !== 1 || t !== 'length',
          enumerable: n.enumerable,
          value: r[t],
        }
      );
    },
    defineProperty: function () {
      yr(11);
    },
    getPrototypeOf: function (e) {
      return Object.getPrototypeOf(e.t);
    },
    setPrototypeOf: function () {
      yr(12);
    },
  },
  ri = {};
Mn(gi, function (e, t) {
  ri[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
}),
  (ri.deleteProperty = function (e, t) {
    return ri.set.call(this, e, t, void 0);
  }),
  (ri.set = function (e, t, r) {
    return gi.set.call(this, e[0], t, r, e[0]);
  });
var C_ = (function () {
    function e(r) {
      var n = this;
      (this.g = Np),
        (this.F = !0),
        (this.produce = function (a, i, o) {
          if (typeof a == 'function' && typeof i != 'function') {
            var s = i;
            i = a;
            var l = n;
            return function (p) {
              var m = this;
              p === void 0 && (p = s);
              for (
                var g = arguments.length, _ = Array(g > 1 ? g - 1 : 0), x = 1;
                x < g;
                x++
              )
                _[x - 1] = arguments[x];
              return l.produce(p, function (b) {
                var w;
                return (w = i).call.apply(w, [m, b].concat(_));
              });
            };
          }
          var c;
          if (
            (typeof i != 'function' && yr(6),
            o !== void 0 && typeof o != 'function' && yr(7),
            Yr(a))
          ) {
            var u = Mp(n),
              f = Gc(n, a, void 0),
              d = !0;
            try {
              (c = i(f)), (d = !1);
            } finally {
              d ? No(u) : Vc(u);
            }
            return typeof Promise < 'u' && c instanceof Promise
              ? c.then(
                  function (p) {
                    return Gl(u, o), ql(p, u);
                  },
                  function (p) {
                    throw (No(u), p);
                  }
                )
              : (Gl(u, o), ql(c, u));
          }
          if (!a || typeof a != 'object') {
            if (
              ((c = i(a)) === void 0 && (c = a),
              c === zy && (c = void 0),
              n.F && Vf(c, !0),
              o)
            ) {
              var h = [],
                v = [];
              Cr('Patches').M(a, c, h, v), o(h, v);
            }
            return c;
          }
          yr(21, a);
        }),
        (this.produceWithPatches = function (a, i) {
          if (typeof a == 'function')
            return function (c) {
              for (
                var u = arguments.length, f = Array(u > 1 ? u - 1 : 0), d = 1;
                d < u;
                d++
              )
                f[d - 1] = arguments[d];
              return n.produceWithPatches(c, function (h) {
                return a.apply(void 0, [h].concat(f));
              });
            };
          var o,
            s,
            l = n.produce(a, i, function (c, u) {
              (o = c), (s = u);
            });
          return typeof Promise < 'u' && l instanceof Promise
            ? l.then(function (c) {
                return [c, o, s];
              })
            : [l, o, s];
        }),
        typeof (r == null ? void 0 : r.useProxies) == 'boolean' &&
          this.setUseProxies(r.useProxies),
        typeof (r == null ? void 0 : r.autoFreeze) == 'boolean' &&
          this.setAutoFreeze(r.autoFreeze);
    }
    var t = e.prototype;
    return (
      (t.createDraft = function (r) {
        Yr(r) || yr(8), fn(r) && (r = O_(r));
        var n = Mp(this),
          a = Gc(this, r, void 0);
        return (a[et].C = !0), Vc(n), a;
      }),
      (t.finishDraft = function (r, n) {
        var a = r && r[et],
          i = a.A;
        return Gl(i, n), ql(void 0, i);
      }),
      (t.setAutoFreeze = function (r) {
        this.F = r;
      }),
      (t.setUseProxies = function (r) {
        r && !Np && yr(20), (this.g = r);
      }),
      (t.applyPatches = function (r, n) {
        var a;
        for (a = n.length - 1; a >= 0; a--) {
          var i = n[a];
          if (i.path.length === 0 && i.op === 'replace') {
            r = i.value;
            break;
          }
        }
        a > -1 && (n = n.slice(a + 1));
        var o = Cr('Patches').$;
        return fn(r)
          ? o(r, n)
          : this.produce(r, function (s) {
              return o(s, n);
            });
      }),
      e
    );
  })(),
  er = new C_(),
  Uy = er.produce;
er.produceWithPatches.bind(er);
er.setAutoFreeze.bind(er);
er.setUseProxies.bind(er);
er.applyPatches.bind(er);
er.createDraft.bind(er);
er.finishDraft.bind(er);
function P_(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Bp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Fp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Bp(Object(r), !0).forEach(function (n) {
          P_(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Bp(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function Tt(e) {
  return (
    'Minified Redux error #' +
    e +
    '; visit https://redux.js.org/Errors?code=' +
    e +
    ' for the full message or use the non-minified dev environment for full errors. '
  );
}
var zp = (function () {
    return (typeof Symbol == 'function' && Symbol.observable) || '@@observable';
  })(),
  Xl = function () {
    return Math.random().toString(36).substring(7).split('').join('.');
  },
  Fo = {
    INIT: '@@redux/INIT' + Xl(),
    REPLACE: '@@redux/REPLACE' + Xl(),
    PROBE_UNKNOWN_ACTION: function () {
      return '@@redux/PROBE_UNKNOWN_ACTION' + Xl();
    },
  };
function k_(e) {
  if (typeof e != 'object' || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Hy(e, t, r) {
  var n;
  if (
    (typeof t == 'function' && typeof r == 'function') ||
    (typeof r == 'function' && typeof arguments[3] == 'function')
  )
    throw new Error(Tt(0));
  if (
    (typeof t == 'function' && typeof r > 'u' && ((r = t), (t = void 0)),
    typeof r < 'u')
  ) {
    if (typeof r != 'function') throw new Error(Tt(1));
    return r(Hy)(e, t);
  }
  if (typeof e != 'function') throw new Error(Tt(2));
  var a = e,
    i = t,
    o = [],
    s = o,
    l = !1;
  function c() {
    s === o && (s = o.slice());
  }
  function u() {
    if (l) throw new Error(Tt(3));
    return i;
  }
  function f(p) {
    if (typeof p != 'function') throw new Error(Tt(4));
    if (l) throw new Error(Tt(5));
    var m = !0;
    return (
      c(),
      s.push(p),
      function () {
        if (!!m) {
          if (l) throw new Error(Tt(6));
          (m = !1), c();
          var _ = s.indexOf(p);
          s.splice(_, 1), (o = null);
        }
      }
    );
  }
  function d(p) {
    if (!k_(p)) throw new Error(Tt(7));
    if (typeof p.type > 'u') throw new Error(Tt(8));
    if (l) throw new Error(Tt(9));
    try {
      (l = !0), (i = a(i, p));
    } finally {
      l = !1;
    }
    for (var m = (o = s), g = 0; g < m.length; g++) {
      var _ = m[g];
      _();
    }
    return p;
  }
  function h(p) {
    if (typeof p != 'function') throw new Error(Tt(10));
    (a = p), d({ type: Fo.REPLACE });
  }
  function v() {
    var p,
      m = f;
    return (
      (p = {
        subscribe: function (_) {
          if (typeof _ != 'object' || _ === null) throw new Error(Tt(11));
          function x() {
            _.next && _.next(u());
          }
          x();
          var b = m(x);
          return { unsubscribe: b };
        },
      }),
      (p[zp] = function () {
        return this;
      }),
      p
    );
  }
  return (
    d({ type: Fo.INIT }),
    (n = { dispatch: d, subscribe: f, getState: u, replaceReducer: h }),
    (n[zp] = v),
    n
  );
}
function T_(e) {
  Object.keys(e).forEach(function (t) {
    var r = e[t],
      n = r(void 0, { type: Fo.INIT });
    if (typeof n > 'u') throw new Error(Tt(12));
    if (typeof r(void 0, { type: Fo.PROBE_UNKNOWN_ACTION() }) > 'u')
      throw new Error(Tt(13));
  });
}
function M_(e) {
  for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
    var a = t[n];
    typeof e[a] == 'function' && (r[a] = e[a]);
  }
  var i = Object.keys(r),
    o;
  try {
    T_(r);
  } catch (s) {
    o = s;
  }
  return function (l, c) {
    if ((l === void 0 && (l = {}), o)) throw o;
    for (var u = !1, f = {}, d = 0; d < i.length; d++) {
      var h = i[d],
        v = r[h],
        p = l[h],
        m = v(p, c);
      if (typeof m > 'u') throw (c && c.type, new Error(Tt(14)));
      (f[h] = m), (u = u || m !== p);
    }
    return (u = u || i.length !== Object.keys(l).length), u ? f : l;
  };
}
function zo() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return t.length === 0
    ? function (n) {
        return n;
      }
    : t.length === 1
    ? t[0]
    : t.reduce(function (n, a) {
        return function () {
          return n(a.apply(void 0, arguments));
        };
      });
}
function I_() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function (n) {
    return function () {
      var a = n.apply(void 0, arguments),
        i = function () {
          throw new Error(Tt(15));
        },
        o = {
          getState: a.getState,
          dispatch: function () {
            return i.apply(void 0, arguments);
          },
        },
        s = t.map(function (l) {
          return l(o);
        });
      return (
        (i = zo.apply(void 0, s)(a.dispatch)),
        Fp(Fp({}, a), {}, { dispatch: i })
      );
    };
  };
}
function Vy(e) {
  var t = function (n) {
    var a = n.dispatch,
      i = n.getState;
    return function (o) {
      return function (s) {
        return typeof s == 'function' ? s(a, i, e) : o(s);
      };
    };
  };
  return t;
}
var Gy = Vy();
Gy.withExtraArgument = Vy;
const Wp = Gy;
var R_ =
  (globalThis && globalThis.__extends) ||
  (function () {
    var e = function (t, r) {
      return (
        (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (n, a) {
              n.__proto__ = a;
            }) ||
          function (n, a) {
            for (var i in a)
              Object.prototype.hasOwnProperty.call(a, i) && (n[i] = a[i]);
          }),
        e(t, r)
      );
    };
    return function (t, r) {
      if (typeof r != 'function' && r !== null)
        throw new TypeError(
          'Class extends value ' + String(r) + ' is not a constructor or null'
        );
      e(t, r);
      function n() {
        this.constructor = t;
      }
      t.prototype =
        r === null ? Object.create(r) : ((n.prototype = r.prototype), new n());
    };
  })();
globalThis && globalThis.__generator;
var Wo =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var r = 0, n = t.length, a = e.length; r < n; r++, a++) e[a] = t[r];
      return e;
    },
  D_ = Object.defineProperty,
  Up = Object.getOwnPropertySymbols,
  j_ = Object.prototype.hasOwnProperty,
  N_ = Object.prototype.propertyIsEnumerable,
  Hp = function (e, t, r) {
    return t in e
      ? D_(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  yi = function (e, t) {
    for (var r in t || (t = {})) j_.call(t, r) && Hp(e, r, t[r]);
    if (Up)
      for (var n = 0, a = Up(t); n < a.length; n++) {
        var r = a[n];
        N_.call(t, r) && Hp(e, r, t[r]);
      }
    return e;
  },
  L_ =
    typeof window < 'u' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == 'object'
              ? zo
              : zo.apply(null, arguments);
        };
function B_(e) {
  if (typeof e != 'object' || e === null) return !1;
  var t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  for (var r = t; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
var F_ = (function (e) {
  R_(t, e);
  function t() {
    for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
    var a = e.apply(this, r) || this;
    return Object.setPrototypeOf(a, t.prototype), a;
  }
  return (
    Object.defineProperty(t, Symbol.species, {
      get: function () {
        return t;
      },
      enumerable: !1,
      configurable: !0,
    }),
    (t.prototype.concat = function () {
      for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
      return e.prototype.concat.apply(this, r);
    }),
    (t.prototype.prepend = function () {
      for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
      return r.length === 1 && Array.isArray(r[0])
        ? new (t.bind.apply(t, Wo([void 0], r[0].concat(this))))()
        : new (t.bind.apply(t, Wo([void 0], r.concat(this))))();
    }),
    t
  );
})(Array);
function Yc(e) {
  return Yr(e) ? Uy(e, function () {}) : e;
}
function z_(e) {
  return typeof e == 'boolean';
}
function W_() {
  return function (t) {
    return U_(t);
  };
}
function U_(e) {
  e === void 0 && (e = {});
  var t = e.thunk,
    r = t === void 0 ? !0 : t;
  e.immutableCheck, e.serializableCheck;
  var n = new F_();
  return (
    r && (z_(r) ? n.push(Wp) : n.push(Wp.withExtraArgument(r.extraArgument))), n
  );
}
var H_ = !0;
function V_(e) {
  var t = W_(),
    r = e || {},
    n = r.reducer,
    a = n === void 0 ? void 0 : n,
    i = r.middleware,
    o = i === void 0 ? t() : i,
    s = r.devTools,
    l = s === void 0 ? !0 : s,
    c = r.preloadedState,
    u = c === void 0 ? void 0 : c,
    f = r.enhancers,
    d = f === void 0 ? void 0 : f,
    h;
  if (typeof a == 'function') h = a;
  else if (B_(a)) h = M_(a);
  else
    throw new Error(
      '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
    );
  var v = o;
  typeof v == 'function' && (v = v(t));
  var p = I_.apply(void 0, v),
    m = zo;
  l && (m = L_(yi({ trace: !H_ }, typeof l == 'object' && l)));
  var g = [p];
  Array.isArray(d) ? (g = Wo([p], d)) : typeof d == 'function' && (g = d(g));
  var _ = m.apply(void 0, g);
  return Hy(h, u, _);
}
function bi(e, t) {
  function r() {
    for (var n = [], a = 0; a < arguments.length; a++) n[a] = arguments[a];
    if (t) {
      var i = t.apply(void 0, n);
      if (!i) throw new Error('prepareAction did not return an object');
      return yi(
        yi({ type: e, payload: i.payload }, 'meta' in i && { meta: i.meta }),
        'error' in i && { error: i.error }
      );
    }
    return { type: e, payload: n[0] };
  }
  return (
    (r.toString = function () {
      return '' + e;
    }),
    (r.type = e),
    (r.match = function (n) {
      return n.type === e;
    }),
    r
  );
}
function qy(e) {
  var t = {},
    r = [],
    n,
    a = {
      addCase: function (i, o) {
        var s = typeof i == 'string' ? i : i.type;
        if (s in t)
          throw new Error(
            'addCase cannot be called with two reducers for the same action type'
          );
        return (t[s] = o), a;
      },
      addMatcher: function (i, o) {
        return r.push({ matcher: i, reducer: o }), a;
      },
      addDefaultCase: function (i) {
        return (n = i), a;
      },
    };
  return e(a), [t, r, n];
}
function G_(e) {
  return typeof e == 'function';
}
function q_(e, t, r, n) {
  r === void 0 && (r = []);
  var a = typeof t == 'function' ? qy(t) : [t, r, n],
    i = a[0],
    o = a[1],
    s = a[2],
    l;
  if (G_(e))
    l = function () {
      return Yc(e());
    };
  else {
    var c = Yc(e);
    l = function () {
      return c;
    };
  }
  function u(f, d) {
    f === void 0 && (f = l());
    var h = Wo(
      [i[d.type]],
      o
        .filter(function (v) {
          var p = v.matcher;
          return p(d);
        })
        .map(function (v) {
          var p = v.reducer;
          return p;
        })
    );
    return (
      h.filter(function (v) {
        return !!v;
      }).length === 0 && (h = [s]),
      h.reduce(function (v, p) {
        if (p)
          if (fn(v)) {
            var m = v,
              g = p(m, d);
            return g === void 0 ? v : g;
          } else {
            if (Yr(v))
              return Uy(v, function (_) {
                return p(_, d);
              });
            var g = p(v, d);
            if (g === void 0) {
              if (v === null) return v;
              throw Error(
                'A case reducer on a non-draftable value must not return undefined'
              );
            }
            return g;
          }
        return v;
      }, f)
    );
  }
  return (u.getInitialState = l), u;
}
function Y_(e, t) {
  return e + '/' + t;
}
function Ri(e) {
  var t = e.name;
  if (!t) throw new Error('`name` is a required option for createSlice');
  typeof process < 'u';
  var r =
      typeof e.initialState == 'function' ? e.initialState : Yc(e.initialState),
    n = e.reducers || {},
    a = Object.keys(n),
    i = {},
    o = {},
    s = {};
  a.forEach(function (u) {
    var f = n[u],
      d = Y_(t, u),
      h,
      v;
    'reducer' in f ? ((h = f.reducer), (v = f.prepare)) : (h = f),
      (i[u] = h),
      (o[d] = h),
      (s[u] = v ? bi(d, v) : bi(d));
  });
  function l() {
    var u =
        typeof e.extraReducers == 'function'
          ? qy(e.extraReducers)
          : [e.extraReducers],
      f = u[0],
      d = f === void 0 ? {} : f,
      h = u[1],
      v = h === void 0 ? [] : h,
      p = u[2],
      m = p === void 0 ? void 0 : p,
      g = yi(yi({}, d), o);
    return q_(r, g, v, m);
  }
  var c;
  return {
    name: t,
    reducer: function (u, f) {
      return c || (c = l()), c(u, f);
    },
    actions: s,
    caseReducers: i,
    getInitialState: function () {
      return c || (c = l()), c.getInitialState();
    },
  };
}
var Yf = 'listenerMiddleware';
bi(Yf + '/add');
bi(Yf + '/removeAll');
bi(Yf + '/remove');
S_();
const K_ = { open: !window.isMobile },
  Yy = Ri({
    name: 'sidebar',
    initialState: K_,
    reducers: {
      toggle: (e) => {
        e.open = !e.open;
      },
    },
  }),
  { toggle: Ky } = Yy.actions,
  Xy = (e) => e.sidebar.open,
  X_ = Yy.reducer,
  J_ = { value: '' },
  Jy = Ri({
    name: 'discount',
    initialState: J_,
    reducers: {
      changeDiscountRate: (e, t) => {
        e.value = t.payload;
      },
    },
  }),
  { changeDiscountRate: Zy } = Jy.actions,
  Qy = (e) => e.discount.value,
  Z_ = Jy.reducer,
  Q_ = {
    stockId: void 0,
    disableStep: {
      CompanyInfo: !1,
      CheckTenets: !0,
      GrowthRate: !0,
      Assumption: !0,
      Calculation: !0,
    },
  },
  eb = Ri({
    name: 'addStock',
    initialState: Q_,
    reducers: {
      changeStockId: (e, t) => {
        e.stockId = t.payload;
      },
      changeDisableStep: (e, t) => {
        e.disableStep[t.payload[0]] = t.payload[1];
      },
    },
  }),
  { changeStockId: Kc, changeDisableStep: xt } = eb.actions,
  xr = (e) => e.addStock,
  eO = eb.reducer,
  tO = { mode: 'dark' },
  tb = Ri({
    name: 'lightMode',
    initialState: tO,
    reducers: {
      changeMode: (e, t) => {
        e.mode = t.payload;
      },
    },
  }),
  { changeMode: Xc } = tb.actions,
  Kf = (e) => e.lightMode,
  rO = tb.reducer,
  nO = { open: !1, text: '' },
  rb = Ri({
    name: 'errorAlert',
    initialState: nO,
    reducers: {
      toggleAlertOpen: (e) => {
        e.open = !e.open;
      },
      changeAlertText: (e, t) => {
        e.text = t.payload;
      },
    },
  }),
  { toggleAlertOpen: nb, changeAlertText: aO } = rb.actions,
  iO = (e) => e.errorAlert,
  oO = rb.reducer,
  sO = V_({
    reducer: {
      sidebar: X_,
      discount: Z_,
      addStock: eO,
      lightMode: rO,
      errorAlert: oO,
    },
  });
/**
 * @remix-run/router v1.0.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function st() {
  return (
    (st = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    st.apply(this, arguments)
  );
}
var pt;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(pt || (pt = {}));
const Vp = 'popstate';
function lO(e) {
  e === void 0 && (e = {});
  function t(n, a) {
    let { pathname: i, search: o, hash: s } = n.location;
    return Pn(
      '',
      { pathname: i, search: o, hash: s },
      (a.state && a.state.usr) || null,
      (a.state && a.state.key) || 'default'
    );
  }
  function r(n, a) {
    return typeof a == 'string' ? a : xi(a);
  }
  return uO(t, r, null, e);
}
function cO() {
  return Math.random().toString(36).substr(2, 8);
}
function Gp(e) {
  return { usr: e.state, key: e.key };
}
function Pn(e, t, r, n) {
  return (
    r === void 0 && (r = null),
    st(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? Kr(t) : t,
      { state: r, key: (t && t.key) || n || cO() }
    )
  );
}
function xi(e) {
  let { pathname: t = '/', search: r = '', hash: n = '' } = e;
  return (
    r && r !== '?' && (t += r.charAt(0) === '?' ? r : '?' + r),
    n && n !== '#' && (t += n.charAt(0) === '#' ? n : '#' + n),
    t
  );
}
function Kr(e) {
  let t = {};
  if (e) {
    let r = e.indexOf('#');
    r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)));
    let n = e.indexOf('?');
    n >= 0 && ((t.search = e.substr(n)), (e = e.substr(0, n))),
      e && (t.pathname = e);
  }
  return t;
}
function uO(e, t, r, n) {
  n === void 0 && (n = {});
  let { window: a = document.defaultView, v5Compat: i = !1 } = n,
    o = a.history,
    s = pt.Pop,
    l = null;
  function c() {
    (s = pt.Pop), l && l({ action: s, location: d.location });
  }
  function u(h, v) {
    s = pt.Push;
    let p = Pn(d.location, h, v);
    r && r(p, h);
    let m = Gp(p),
      g = d.createHref(p);
    try {
      o.pushState(m, '', g);
    } catch {
      a.location.assign(g);
    }
    i && l && l({ action: s, location: p });
  }
  function f(h, v) {
    s = pt.Replace;
    let p = Pn(d.location, h, v);
    r && r(p, h);
    let m = Gp(p),
      g = d.createHref(p);
    o.replaceState(m, '', g), i && l && l({ action: s, location: p });
  }
  let d = {
    get action() {
      return s;
    },
    get location() {
      return e(a, o);
    },
    listen(h) {
      if (l) throw new Error('A history only accepts one active listener');
      return (
        a.addEventListener(Vp, c),
        (l = h),
        () => {
          a.removeEventListener(Vp, c), (l = null);
        }
      );
    },
    createHref(h) {
      return t(a, h);
    },
    push: u,
    replace: f,
    go(h) {
      return o.go(h);
    },
  };
  return d;
}
var It;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(It || (It = {}));
function ab(e, t, r) {
  return (
    t === void 0 && (t = []),
    r === void 0 && (r = new Set()),
    e.map((n, a) => {
      let i = [...t, a],
        o = typeof n.id == 'string' ? n.id : i.join('-');
      return (
        De(
          !r.has(o),
          'Found a route id collision on id "' +
            o +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        r.add(o),
        st({}, n, {
          id: o,
          children: n.children ? ab(n.children, i, r) : void 0,
        })
      );
    })
  );
}
function ni(e, t, r) {
  r === void 0 && (r = '/');
  let n = typeof t == 'string' ? Kr(t) : t,
    a = ob(n.pathname || '/', r);
  if (a == null) return null;
  let i = ib(e);
  fO(i);
  let o = null;
  for (let s = 0; o == null && s < i.length; ++s) o = xO(i[s], a);
  return o;
}
function ib(e, t, r, n) {
  return (
    t === void 0 && (t = []),
    r === void 0 && (r = []),
    n === void 0 && (n = ''),
    e.forEach((a, i) => {
      let o = {
        relativePath: a.path || '',
        caseSensitive: a.caseSensitive === !0,
        childrenIndex: i,
        route: a,
      };
      o.relativePath.startsWith('/') &&
        (De(
          o.relativePath.startsWith(n),
          'Absolute route path "' +
            o.relativePath +
            '" nested under path ' +
            ('"' + n + '" is not valid. An absolute child route path ') +
            'must start with the combined path of all its parent routes.'
        ),
        (o.relativePath = o.relativePath.slice(n.length)));
      let s = sn([n, o.relativePath]),
        l = r.concat(o);
      a.children &&
        a.children.length > 0 &&
        (De(
          a.index !== !0,
          'Index routes must not have child routes. Please remove ' +
            ('all child routes from route path "' + s + '".')
        ),
        ib(a.children, t, l, s)),
        !(a.path == null && !a.index) &&
          t.push({ path: s, score: yO(s, a.index), routesMeta: l });
    }),
    t
  );
}
function fO(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : bO(
          t.routesMeta.map((n) => n.childrenIndex),
          r.routesMeta.map((n) => n.childrenIndex)
        )
  );
}
const dO = /^:\w+$/,
  pO = 3,
  hO = 2,
  vO = 1,
  mO = 10,
  gO = -2,
  qp = (e) => e === '*';
function yO(e, t) {
  let r = e.split('/'),
    n = r.length;
  return (
    r.some(qp) && (n += gO),
    t && (n += hO),
    r
      .filter((a) => !qp(a))
      .reduce((a, i) => a + (dO.test(i) ? pO : i === '' ? vO : mO), n)
  );
}
function bO(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, a) => n === t[a])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function xO(e, t) {
  let { routesMeta: r } = e,
    n = {},
    a = '/',
    i = [];
  for (let o = 0; o < r.length; ++o) {
    let s = r[o],
      l = o === r.length - 1,
      c = a === '/' ? t : t.slice(a.length) || '/',
      u = Xf(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: l },
        c
      );
    if (!u) return null;
    Object.assign(n, u.params);
    let f = s.route;
    i.push({
      params: n,
      pathname: sn([a, u.pathname]),
      pathnameBase: EO(sn([a, u.pathnameBase])),
      route: f,
    }),
      u.pathnameBase !== '/' && (a = sn([a, u.pathnameBase]));
  }
  return i;
}
function Xf(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, n] = wO(e.path, e.caseSensitive, e.end),
    a = t.match(r);
  if (!a) return null;
  let i = a[0],
    o = i.replace(/(.)\/+$/, '$1'),
    s = a.slice(1);
  return {
    params: n.reduce((c, u, f) => {
      if (u === '*') {
        let d = s[f] || '';
        o = i.slice(0, i.length - d.length).replace(/(.)\/+$/, '$1');
      }
      return (c[u] = _O(s[f] || '', u)), c;
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function wO(e, t, r) {
  t === void 0 && (t = !1),
    r === void 0 && (r = !0),
    sb(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    );
  let n = [],
    a =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
        .replace(/:(\w+)/g, (o, s) => (n.push(s), '([^\\/]+)'));
  return (
    e.endsWith('*')
      ? (n.push('*'),
        (a += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : (a += r ? '\\/*$' : '(?:(?=[@.~-]|%[0-9A-F]{2})|\\b|\\/|$)'),
    [new RegExp(a, t ? void 0 : 'i'), n]
  );
}
function _O(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (r) {
    return (
      sb(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (' due to a bad percent encoding (' + r + ').')
      ),
      e
    );
  }
}
function ob(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r = t.endsWith('/') ? t.length - 1 : t.length,
    n = e.charAt(r);
  return n && n !== '/' ? null : e.slice(r) || '/';
}
function De(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function sb(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function OO(e, t) {
  t === void 0 && (t = '/');
  let {
    pathname: r,
    search: n = '',
    hash: a = '',
  } = typeof e == 'string' ? Kr(e) : e;
  return {
    pathname: r ? (r.startsWith('/') ? r : SO(r, t)) : t,
    search: $O(n),
    hash: AO(a),
  };
}
function SO(e, t) {
  let r = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((a) => {
      a === '..' ? r.length > 1 && r.pop() : a !== '.' && r.push(a);
    }),
    r.length > 1 ? r.join('/') : '/'
  );
}
function lb(e, t, r, n) {
  n === void 0 && (n = !1);
  let a = typeof e == 'string' ? Kr(e) : st({}, e),
    i = e === '' || a.pathname === '',
    o = i ? '/' : a.pathname,
    s;
  if (n || o == null) s = r;
  else {
    let f = t.length - 1;
    if (o.startsWith('..')) {
      let d = o.split('/');
      for (; d[0] === '..'; ) d.shift(), (f -= 1);
      a.pathname = d.join('/');
    }
    s = f >= 0 ? t[f] : '/';
  }
  let l = OO(a, s),
    c = o && o !== '/' && o.endsWith('/'),
    u = (i || o === '.') && r.endsWith('/');
  return !l.pathname.endsWith('/') && (c || u) && (l.pathname += '/'), l;
}
const sn = (e) => e.join('/').replace(/\/\/+/g, '/'),
  EO = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  $O = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  AO = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
class Yp extends Error {}
class CO {
  constructor(t) {
    (this.pendingKeys = new Set()),
      (this.subscriber = void 0),
      De(
        t && typeof t == 'object' && !Array.isArray(t),
        'defer() only accepts plain objects'
      );
    let r;
    (this.abortPromise = new Promise((a, i) => (r = i))),
      (this.controller = new AbortController());
    let n = () => r(new Yp('Deferred data aborted'));
    (this.unlistenAbortSignal = () =>
      this.controller.signal.removeEventListener('abort', n)),
      this.controller.signal.addEventListener('abort', n),
      (this.data = Object.entries(t).reduce((a, i) => {
        let [o, s] = i;
        return Object.assign(a, { [o]: this.trackPromise(o, s) });
      }, {}));
  }
  trackPromise(t, r) {
    if (!(r instanceof Promise)) return r;
    this.pendingKeys.add(t);
    let n = Promise.race([r, this.abortPromise]).then(
      (a) => this.onSettle(n, t, null, a),
      (a) => this.onSettle(n, t, a)
    );
    return (
      n.catch(() => {}),
      Object.defineProperty(n, '_tracked', { get: () => !0 }),
      n
    );
  }
  onSettle(t, r, n, a) {
    if (this.controller.signal.aborted && n instanceof Yp)
      return (
        this.unlistenAbortSignal(),
        Object.defineProperty(t, '_error', { get: () => n }),
        Promise.reject(n)
      );
    this.pendingKeys.delete(r), this.done && this.unlistenAbortSignal();
    const i = this.subscriber;
    return n
      ? (Object.defineProperty(t, '_error', { get: () => n }),
        i && i(!1),
        Promise.reject(n))
      : (Object.defineProperty(t, '_data', { get: () => a }), i && i(!1), a);
  }
  subscribe(t) {
    this.subscriber = t;
  }
  cancel() {
    this.controller.abort(),
      this.pendingKeys.forEach((r, n) => this.pendingKeys.delete(n));
    let t = this.subscriber;
    t && t(!0);
  }
  async resolveData(t) {
    let r = !1;
    if (!this.done) {
      let n = () => this.cancel();
      t.addEventListener('abort', n),
        (r = await new Promise((a) => {
          this.subscribe((i) => {
            t.removeEventListener('abort', n), (i || this.done) && a(i);
          });
        }));
    }
    return r;
  }
  get done() {
    return this.pendingKeys.size === 0;
  }
  get unwrappedData() {
    return (
      De(
        this.data !== null && this.done,
        'Can only unwrap data on initialized and settled deferreds'
      ),
      Object.entries(this.data).reduce((t, r) => {
        let [n, a] = r;
        return Object.assign(t, { [n]: kO(a) });
      }, {})
    );
  }
}
function PO(e) {
  return e instanceof Promise && e._tracked === !0;
}
function kO(e) {
  if (!PO(e)) return e;
  if (e._error) throw e._error;
  return e._data;
}
class $a {
  constructor(t, r, n) {
    (this.status = t), (this.statusText = r || ''), (this.data = n);
  }
}
function cb(e) {
  return e instanceof $a;
}
const Jl = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  },
  TO = {
    state: 'idle',
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  };
function MO(e) {
  De(
    e.routes.length > 0,
    'You must provide a non-empty routes array to createRouter'
  );
  let t = ab(e.routes),
    r = null,
    n = new Set(),
    a = null,
    i = null,
    o = null,
    s = !1,
    l = ni(t, e.history.location, e.basename),
    c = null;
  if (l == null) {
    let { matches: F, route: G, error: q } = Qp(t);
    (l = F), (c = { [G.id]: q });
  }
  let u = !l.some((F) => F.route.loader) || e.hydrationData != null,
    f,
    d = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: l,
      initialized: u,
      navigation: Jl,
      restoreScrollPosition: null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || c,
      fetchers: new Map(),
    },
    h = pt.Pop,
    v = !1,
    p,
    m = !1,
    g = !1,
    _ = [],
    x = [],
    b = new Map(),
    w = 0,
    O = -1,
    S = new Map(),
    $ = new Set(),
    A = new Map(),
    P = new Map();
  function C() {
    return (
      (r = e.history.listen((F) => {
        let { action: G, location: q } = F;
        return z(G, q);
      })),
      d.initialized || z(pt.Pop, d.location),
      f
    );
  }
  function k() {
    r && r(), n.clear(), p && p.abort(), d.fetchers.forEach((F, G) => H(G));
  }
  function T(F) {
    return n.add(F), () => n.delete(F);
  }
  function D(F) {
    (d = st({}, d, F)), n.forEach((G) => G(d));
  }
  function j(F, G) {
    let q =
        d.actionData != null &&
        d.navigation.formMethod != null &&
        d.navigation.state === 'loading',
      ee = G.loaderData
        ? { loaderData: Ql(d.loaderData, G.loaderData, G.matches || []) }
        : {};
    D(
      st({}, q ? {} : { actionData: null }, G, ee, {
        historyAction: h,
        location: F,
        initialized: !0,
        navigation: Jl,
        revalidation: 'idle',
        restoreScrollPosition: d.navigation.formData
          ? !1
          : it(F, G.matches || d.matches),
        preventScrollReset: v,
      })
    ),
      m ||
        h === pt.Pop ||
        (h === pt.Push
          ? e.history.push(F, F.state)
          : h === pt.Replace && e.history.replace(F, F.state)),
      (h = pt.Pop),
      (v = !1),
      (m = !1),
      (g = !1),
      (_ = []),
      (x = []);
  }
  async function R(F, G) {
    if (typeof F == 'number') {
      e.history.go(F);
      return;
    }
    let { path: q, submission: ee, error: se } = Kp(F, G),
      Ae = Pn(d.location, q, G && G.state),
      we = (G && G.replace) === !0 || ee != null ? pt.Replace : pt.Push,
      me =
        G && 'preventScrollReset' in G ? G.preventScrollReset === !0 : void 0;
    return await z(we, Ae, {
      submission: ee,
      pendingError: se,
      preventScrollReset: me,
      replace: G && G.replace,
    });
  }
  function N() {
    if (
      (at(),
      D({ revalidation: 'loading' }),
      d.navigation.state !== 'submitting')
    ) {
      if (d.navigation.state === 'idle') {
        z(d.historyAction, d.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      z(h || d.historyAction, d.navigation.location, {
        overrideNavigation: d.navigation,
      });
    }
  }
  async function z(F, G, q) {
    p && p.abort(),
      (p = null),
      (h = F),
      (m = (q && q.startUninterruptedRevalidation) === !0),
      Pe(d.location, d.matches),
      (v = (q && q.preventScrollReset) === !0);
    let ee = q && q.overrideNavigation,
      se = ni(t, G, e.basename);
    if (!se) {
      let { matches: kt, route: Vt, error: ft } = Qp(t);
      de(), j(G, { matches: kt, loaderData: {}, errors: { [Vt.id]: ft } });
      return;
    }
    if (jO(d.location, G)) {
      j(G, { matches: se });
      return;
    }
    p = new AbortController();
    let Ae = Fa(G, p.signal, q && q.submission),
      we,
      me;
    if (q && q.pendingError) me = { [Jn(se).route.id]: q.pendingError };
    else if (q && q.submission) {
      let kt = await M(Ae, G, q.submission, se, { replace: q.replace });
      if (kt.shortCircuited) return;
      (we = kt.pendingActionData),
        (me = kt.pendingActionError),
        (ee = st({ state: 'loading', location: G }, q.submission));
    }
    let {
      shortCircuited: fe,
      loaderData: ye,
      errors: He,
    } = await Y(Ae, G, se, ee, q && q.submission, q && q.replace, we, me);
    fe || ((p = null), j(G, { matches: se, loaderData: ye, errors: He }));
  }
  async function M(F, G, q, ee, se) {
    at();
    let Ae = st({ state: 'submitting', location: G }, q);
    D({ navigation: Ae });
    let we,
      me = ah(ee, G);
    if (!me.route.action) we = eh(G);
    else if (((we = await Ba('action', F, me)), F.signal.aborted))
      return { shortCircuited: !0 };
    if (aa(we)) {
      let fe = st(
        { state: 'loading', location: Pn(d.location, we.location) },
        q
      );
      return await le(we, fe, se && se.replace), { shortCircuited: !0 };
    }
    if (si(we)) {
      let fe = Jn(ee, me.route.id);
      return (
        (se && se.replace) !== !0 && (h = pt.Push),
        { pendingActionError: { [fe.route.id]: we.error } }
      );
    }
    if ($n(we)) throw new Error('defer() is not supported in actions');
    return { pendingActionData: { [me.route.id]: we.data } };
  }
  async function Y(F, G, q, ee, se, Ae, we, me) {
    let fe = ee;
    fe ||
      (fe = {
        state: 'loading',
        location: G,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
      });
    let [ye, He] = Xp(d, q, se, G, g, _, x, we, me, A);
    if (
      (de(
        (Qe) =>
          !(q && q.some((Ye) => Ye.route.id === Qe)) ||
          (ye && ye.some((Ye) => Ye.route.id === Qe))
      ),
      ye.length === 0 && He.length === 0)
    )
      return (
        j(G, {
          matches: q,
          loaderData: Ql(d.loaderData, {}, q),
          errors: me || null,
          actionData: we || null,
        }),
        { shortCircuited: !0 }
      );
    m ||
      (He.forEach((Qe) => {
        let [Ye] = Qe;
        const Et = d.fetchers.get(Ye);
        let Nt = {
          state: 'loading',
          data: Et && Et.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        };
        d.fetchers.set(Ye, Nt);
      }),
      D(
        st(
          { navigation: fe, actionData: we || d.actionData || null },
          He.length > 0 ? { fetchers: new Map(d.fetchers) } : {}
        )
      )),
      (O = ++w),
      He.forEach((Qe) => {
        let [Ye] = Qe;
        return b.set(Ye, p);
      });
    let {
      results: kt,
      loaderResults: Vt,
      fetcherResults: ft,
    } = await Ee(d.matches, ye, He, F);
    if (F.signal.aborted) return { shortCircuited: !0 };
    He.forEach((Qe) => {
      let [Ye] = Qe;
      return b.delete(Ye);
    });
    let mt = th(kt);
    if (mt) {
      let Qe = Zl(d, mt);
      return await le(mt, Qe, Ae), { shortCircuited: !0 };
    }
    let { loaderData: Or, errors: Gt } = Zp(d, q, ye, Vt, me, He, ft, P);
    P.forEach((Qe, Ye) => {
      Qe.subscribe((Et) => {
        (Et || Qe.done) && P.delete(Ye);
      });
    }),
      B();
    let qt = J(O);
    return st(
      { loaderData: Or, errors: Gt },
      qt || He.length > 0 ? { fetchers: new Map(d.fetchers) } : {}
    );
  }
  function Z(F) {
    return d.fetchers.get(F) || TO;
  }
  function ne(F, G, q, ee) {
    if (typeof AbortController > 'u')
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    b.has(F) && Q(F);
    let se = ni(t, q, e.basename);
    if (!se) {
      oe(F, G, new $a(404, 'Not Found', null));
      return;
    }
    let { path: Ae, submission: we } = Kp(q, ee, !0),
      me = ah(se, Ae);
    if (we) {
      ve(F, G, Ae, me, we);
      return;
    }
    A.set(F, [Ae, me]), Se(F, G, Ae, me);
  }
  async function ve(F, G, q, ee, se) {
    if ((at(), A.delete(F), !ee.route.action)) {
      let { error: Bt } = eh(q);
      oe(F, G, Bt);
      return;
    }
    let Ae = d.fetchers.get(F),
      we = st({ state: 'submitting' }, se, { data: Ae && Ae.data });
    d.fetchers.set(F, we), D({ fetchers: new Map(d.fetchers) });
    let me = new AbortController(),
      fe = Fa(q, me.signal, se);
    b.set(F, me);
    let ye = await Ba('action', fe, ee);
    if (fe.signal.aborted) {
      b.get(F) === me && b.delete(F);
      return;
    }
    if (aa(ye)) {
      b.delete(F), $.add(F);
      let Bt = st({ state: 'loading' }, se, { data: void 0 });
      d.fetchers.set(F, Bt), D({ fetchers: new Map(d.fetchers) });
      let Yt = st(
        { state: 'loading', location: Pn(d.location, ye.location) },
        se
      );
      await le(ye, Yt);
      return;
    }
    if (si(ye)) {
      oe(F, G, ye.error);
      return;
    }
    $n(ye) && De(!1, 'defer() is not supported in actions');
    let He = d.navigation.location || d.location,
      kt = Fa(He, me.signal),
      Vt =
        d.navigation.state !== 'idle'
          ? ni(t, d.navigation.location, e.basename)
          : d.matches;
    De(Vt, "Didn't find any matches after fetcher action");
    let ft = ++w;
    S.set(F, ft);
    let mt = st({ state: 'loading', data: ye.data }, se);
    d.fetchers.set(F, mt);
    let [Or, Gt] = Xp(
      d,
      Vt,
      se,
      He,
      g,
      _,
      x,
      { [ee.route.id]: ye.data },
      void 0,
      A
    );
    Gt.filter((Bt) => {
      let [Yt] = Bt;
      return Yt !== F;
    }).forEach((Bt) => {
      let [Yt] = Bt,
        Un = d.fetchers.get(Yt),
        La = {
          state: 'loading',
          data: Un && Un.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        };
      d.fetchers.set(Yt, La), b.set(Yt, me);
    }),
      D({ fetchers: new Map(d.fetchers) });
    let {
      results: qt,
      loaderResults: Qe,
      fetcherResults: Ye,
    } = await Ee(d.matches, Or, Gt, kt);
    if (me.signal.aborted) return;
    S.delete(F),
      b.delete(F),
      Gt.forEach((Bt) => {
        let [Yt] = Bt;
        return b.delete(Yt);
      });
    let Et = th(qt);
    if (Et) {
      let Bt = Zl(d, Et);
      await le(Et, Bt);
      return;
    }
    let { loaderData: Nt, errors: gt } = Zp(
        d,
        d.matches,
        Or,
        Qe,
        void 0,
        Gt,
        Ye,
        P
      ),
      ot = {
        state: 'idle',
        data: ye.data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
      };
    d.fetchers.set(F, ot);
    let Lt = J(ft);
    d.navigation.state === 'loading' && ft > O
      ? (De(h, 'Expected pending action'),
        p && p.abort(),
        j(d.navigation.location, {
          matches: Vt,
          loaderData: Nt,
          errors: gt,
          fetchers: new Map(d.fetchers),
        }))
      : (D(
          st(
            { errors: gt, loaderData: Ql(d.loaderData, Nt, Vt) },
            Lt ? { fetchers: new Map(d.fetchers) } : {}
          )
        ),
        (g = !1));
  }
  async function Se(F, G, q, ee) {
    let se = d.fetchers.get(F),
      Ae = {
        state: 'loading',
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        data: se && se.data,
      };
    d.fetchers.set(F, Ae), D({ fetchers: new Map(d.fetchers) });
    let we = new AbortController(),
      me = Fa(q, we.signal);
    b.set(F, we);
    let fe = await Ba('loader', me, ee);
    if (
      ($n(fe) && (fe = (await db(fe, me.signal, !0)) || fe),
      b.get(F) === we && b.delete(F),
      me.signal.aborted)
    )
      return;
    if (aa(fe)) {
      let He = Zl(d, fe);
      await le(fe, He);
      return;
    }
    if (si(fe)) {
      let He = Jn(d.matches, G);
      d.fetchers.delete(F),
        D({
          fetchers: new Map(d.fetchers),
          errors: { [He.route.id]: fe.error },
        });
      return;
    }
    De(!$n(fe), 'Unhandled fetcher deferred data');
    let ye = {
      state: 'idle',
      data: fe.data,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
    };
    d.fetchers.set(F, ye), D({ fetchers: new Map(d.fetchers) });
  }
  async function le(F, G, q) {
    F.revalidate && (g = !0),
      De(G.location, 'Expected a location on the redirect navigation'),
      (p = null);
    let ee = q === !0 ? pt.Replace : pt.Push;
    await z(ee, G.location, { overrideNavigation: G });
  }
  async function Ee(F, G, q, ee) {
    let se = await Promise.all([
        ...G.map((me) => Ba('loader', ee, me)),
        ...q.map((me) => {
          let [, fe, ye] = me;
          return Ba('loader', Fa(fe, ee.signal), ye);
        }),
      ]),
      Ae = se.slice(0, G.length),
      we = se.slice(G.length);
    return (
      await Promise.all([
        rh(F, G, Ae, ee.signal, !1, d.loaderData),
        rh(
          F,
          q.map((me) => {
            let [, , fe] = me;
            return fe;
          }),
          we,
          ee.signal,
          !0
        ),
      ]),
      { results: se, loaderResults: Ae, fetcherResults: we }
    );
  }
  function at() {
    (g = !0),
      _.push(...de()),
      A.forEach((F, G) => {
        b.has(G) && (x.push(G), Q(G));
      });
  }
  function oe(F, G, q) {
    let ee = Jn(d.matches, G);
    H(F), D({ errors: { [ee.route.id]: q }, fetchers: new Map(d.fetchers) });
  }
  function H(F) {
    b.has(F) && Q(F),
      A.delete(F),
      S.delete(F),
      $.delete(F),
      d.fetchers.delete(F);
  }
  function Q(F) {
    let G = b.get(F);
    De(G, 'Expected fetch controller: ' + F), G.abort(), b.delete(F);
  }
  function ie(F) {
    for (let G of F) {
      let q = Z(G),
        ee = {
          state: 'idle',
          data: q.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        };
      d.fetchers.set(G, ee);
    }
  }
  function B() {
    let F = [];
    for (let G of $) {
      let q = d.fetchers.get(G);
      De(q, 'Expected fetcher: ' + G),
        q.state === 'loading' && ($.delete(G), F.push(G));
    }
    ie(F);
  }
  function J(F) {
    let G = [];
    for (let [q, ee] of S)
      if (ee < F) {
        let se = d.fetchers.get(q);
        De(se, 'Expected fetcher: ' + q),
          se.state === 'loading' && (Q(q), S.delete(q), G.push(q));
      }
    return ie(G), G.length > 0;
  }
  function de(F) {
    let G = [];
    return (
      P.forEach((q, ee) => {
        (!F || F(ee)) && (q.cancel(), G.push(ee), P.delete(ee));
      }),
      G
    );
  }
  function ce(F, G, q) {
    if (
      ((a = F), (o = G), (i = q || ((ee) => ee.key)), !s && d.navigation === Jl)
    ) {
      s = !0;
      let ee = it(d.location, d.matches);
      ee != null && D({ restoreScrollPosition: ee });
    }
    return () => {
      (a = null), (o = null), (i = null);
    };
  }
  function Pe(F, G) {
    if (a && i && o) {
      let q = G.map((se) => nh(se, d.loaderData)),
        ee = i(F, q) || F.key;
      a[ee] = o();
    }
  }
  function it(F, G) {
    if (a && i && o) {
      let q = G.map((Ae) => nh(Ae, d.loaderData)),
        ee = i(F, q) || F.key,
        se = a[ee];
      if (typeof se == 'number') return se;
    }
    return null;
  }
  return (
    (f = {
      get basename() {
        return e.basename;
      },
      get state() {
        return d;
      },
      get routes() {
        return t;
      },
      initialize: C,
      subscribe: T,
      enableScrollRestoration: ce,
      navigate: R,
      fetch: ne,
      revalidate: N,
      createHref: el,
      getFetcher: Z,
      deleteFetcher: H,
      dispose: k,
      _internalFetchControllers: b,
      _internalActiveDeferreds: P,
    }),
    f
  );
}
function Kp(e, t, r) {
  r === void 0 && (r = !1);
  let n = typeof e == 'string' ? e : xi(e);
  if (!t || (!('formMethod' in t) && !('formData' in t))) return { path: n };
  if (t.formMethod != null && t.formMethod !== 'get')
    return {
      path: n,
      submission: {
        formMethod: t.formMethod,
        formAction: el(Kr(n)),
        formEncType:
          (t && t.formEncType) || 'application/x-www-form-urlencoded',
        formData: t.formData,
      },
    };
  if (!t.formData) return { path: n };
  let a = Kr(n);
  try {
    let i = fb(t.formData);
    r && a.search && pb(a.search) && i.append('index', ''),
      (a.search = '?' + i);
  } catch {
    return {
      path: n,
      error: new $a(
        400,
        'Bad Request',
        'Cannot submit binary form data using GET'
      ),
    };
  }
  return { path: xi(a) };
}
function Zl(e, t) {
  let {
    formMethod: r,
    formAction: n,
    formEncType: a,
    formData: i,
  } = e.navigation;
  return {
    state: 'loading',
    location: Pn(e.location, t.location),
    formMethod: r || void 0,
    formAction: n || void 0,
    formEncType: a || void 0,
    formData: i || void 0,
  };
}
function IO(e, t) {
  let r = e;
  if (t) {
    let n = e.findIndex((a) => a.route.id === t);
    n >= 0 && (r = e.slice(0, n));
  }
  return r;
}
function Xp(e, t, r, n, a, i, o, s, l, c) {
  let u = l ? Object.values(l)[0] : s ? Object.values(s)[0] : null,
    f = l ? Object.keys(l)[0] : void 0,
    h = IO(t, f).filter(
      (p, m) =>
        p.route.loader != null &&
        (RO(e.loaderData, e.matches[m], p) ||
          i.some((g) => g === p.route.id) ||
          Jp(e.location, e.matches[m], r, n, p, a, u))
    ),
    v = [];
  return (
    c &&
      c.forEach((p, m) => {
        let [g, _] = p;
        o.includes(m)
          ? v.push([m, g, _])
          : a && Jp(g, _, r, g, _, a, u) && v.push([m, g, _]);
      }),
    [h, v]
  );
}
function RO(e, t, r) {
  let n = !t || r.route.id !== t.route.id,
    a = e[r.route.id] === void 0;
  return n || a;
}
function ub(e, t) {
  let r = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (r && r.endsWith('*') && e.params['*'] !== t.params['*'])
  );
}
function Jp(e, t, r, n, a, i, o) {
  let s = Jc(e),
    l = t.params,
    c = Jc(n),
    u = a.params,
    f = ub(t, a) || s.toString() === c.toString() || s.search !== c.search || i;
  if (a.route.shouldRevalidate) {
    let d = a.route.shouldRevalidate(
      st({ currentUrl: s, currentParams: l, nextUrl: c, nextParams: u }, r, {
        actionResult: o,
        defaultShouldRevalidate: f,
      })
    );
    if (typeof d == 'boolean') return d;
  }
  return f;
}
async function Ba(e, t, r, n, a) {
  n === void 0 && (n = !1), a === void 0 && (a = !1);
  let i,
    o,
    s,
    l = new Promise((u, f) => (s = f)),
    c = () => s();
  t.signal.addEventListener('abort', c);
  try {
    let u = r.route[e];
    De(
      u,
      'Could not find the ' + e + ' to run on the "' + r.route.id + '" route'
    ),
      (o = await Promise.race([u({ request: t, params: r.params }), l]));
  } catch (u) {
    (i = It.error), (o = u);
  } finally {
    t.signal.removeEventListener('abort', c);
  }
  if (o instanceof Response) {
    let u = o.status,
      f = o.headers.get('Location');
    if (a) throw o;
    if (u >= 300 && u <= 399 && f != null) {
      if (n) throw o;
      return {
        type: It.redirect,
        status: u,
        location: f,
        revalidate: o.headers.get('X-Remix-Revalidate') !== null,
      };
    }
    let d,
      h = o.headers.get('Content-Type');
    return (
      h && h.startsWith('application/json')
        ? (d = await o.json())
        : (d = await o.text()),
      i === It.error
        ? { type: i, error: new $a(u, o.statusText, d), headers: o.headers }
        : { type: It.data, data: d, statusCode: o.status, headers: o.headers }
    );
  }
  return i === It.error
    ? { type: i, error: o }
    : o instanceof CO
    ? { type: It.deferred, deferredData: o }
    : { type: It.data, data: o };
}
function Fa(e, t, r) {
  let n = Jc(e).toString(),
    a = { signal: t };
  if (r) {
    let { formMethod: i, formEncType: o, formData: s } = r;
    (a.method = i.toUpperCase()),
      (a.body = o === 'application/x-www-form-urlencoded' ? fb(s) : s);
  }
  return new Request(n, a);
}
function fb(e) {
  let t = new URLSearchParams();
  for (let [r, n] of e.entries())
    De(
      typeof n == 'string',
      'File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.'
    ),
      t.append(r, n);
  return t;
}
function DO(e, t, r, n, a) {
  let i = {},
    o = null,
    s,
    l = !1,
    c = {};
  return (
    r.forEach((u, f) => {
      let d = t[f].route.id;
      if (
        (De(!aa(u), 'Cannot handle redirect results in processLoaderData'),
        si(u))
      ) {
        let h = Jn(e, d),
          v = u.error;
        n && ((v = Object.values(n)[0]), (n = void 0)),
          (o = Object.assign(o || {}, { [h.route.id]: v })),
          l || ((l = !0), (s = cb(u.error) ? u.error.status : 500)),
          u.headers && (c[d] = u.headers);
      } else
        $n(u)
          ? (a && a.set(d, u.deferredData), (i[d] = u.deferredData.data))
          : ((i[d] = u.data),
            u.statusCode !== 200 && !l && (s = u.statusCode),
            u.headers && (c[d] = u.headers));
    }),
    n && (o = n),
    { loaderData: i, errors: o, statusCode: s || 200, loaderHeaders: c }
  );
}
function Zp(e, t, r, n, a, i, o, s) {
  let { loaderData: l, errors: c } = DO(t, r, n, a, s);
  for (let u = 0; u < i.length; u++) {
    let [f, , d] = i[u];
    De(
      o !== void 0 && o[u] !== void 0,
      'Did not find corresponding fetcher result'
    );
    let h = o[u];
    if (si(h)) {
      let v = Jn(e.matches, d.route.id);
      (c && c[v.route.id]) || (c = st({}, c, { [v.route.id]: h.error })),
        e.fetchers.delete(f);
    } else {
      if (aa(h)) throw new Error('Unhandled fetcher revalidation redirect');
      if ($n(h)) throw new Error('Unhandled fetcher deferred data');
      {
        let v = {
          state: 'idle',
          data: h.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        };
        e.fetchers.set(f, v);
      }
    }
  }
  return { loaderData: l, errors: c };
}
function Ql(e, t, r) {
  let n = st({}, t);
  return (
    r.forEach((a) => {
      let i = a.route.id;
      t[i] === void 0 && e[i] !== void 0 && (n[i] = e[i]);
    }),
    n
  );
}
function Jn(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((n) => n.route.id === t) + 1) : [...e])
      .reverse()
      .find((n) => n.route.hasErrorBoundary === !0) || e[0]
  );
}
function Qp(e) {
  let t = e.find((r) => r.index || r.path === '' || r.path === '/') || {
    id: '__shim-404-route__',
  };
  return {
    matches: [{ params: {}, pathname: '', pathnameBase: '', route: t }],
    route: t,
    error: new $a(404, 'Not Found', null),
  };
}
function eh(e) {
  let t = typeof e == 'string' ? e : el(e);
  return (
    console.warn(
      "You're trying to submit to a route that does not have an action.  To fix this, please add an `action` function to the route for " +
        ('[' + t + ']')
    ),
    {
      type: It.error,
      error: new $a(
        405,
        'Method Not Allowed',
        'No action found for [' + t + ']'
      ),
    }
  );
}
function th(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let r = e[t];
    if (aa(r)) return r;
  }
}
function el(e) {
  return (e.pathname || '') + (e.search || '');
}
function jO(e, t) {
  return (
    e.pathname === t.pathname && e.search === t.search && e.hash !== t.hash
  );
}
function $n(e) {
  return e.type === It.deferred;
}
function si(e) {
  return e.type === It.error;
}
function aa(e) {
  return (e && e.type) === It.redirect;
}
async function rh(e, t, r, n, a, i) {
  for (let o = 0; o < r.length; o++) {
    let s = r[o],
      l = t[o],
      c = e.find((f) => f.route.id === l.route.id),
      u = c != null && !ub(c, l) && (i && i[l.route.id]) !== void 0;
    $n(s) &&
      (a || u) &&
      (await db(s, n, a).then((f) => {
        f && (r[o] = f || r[o]);
      }));
  }
}
async function db(e, t, r) {
  if ((r === void 0 && (r = !1), !(await e.deferredData.resolveData(t)))) {
    if (r)
      try {
        return { type: It.data, data: e.deferredData.unwrappedData };
      } catch (a) {
        return { type: It.error, error: a };
      }
    return { type: It.data, data: e.deferredData.data };
  }
}
function pb(e) {
  return new URLSearchParams(e).getAll('index').some((t) => t === '');
}
function nh(e, t) {
  let { route: r, pathname: n, params: a } = e;
  return { id: r.id, pathname: n, params: a, data: t[r.id], handle: r.handle };
}
function ah(e, t) {
  let r = typeof t == 'string' ? Kr(t).search : t.search;
  return e[e.length - 1].route.index && !pb(r || '')
    ? e.slice(-2)[0]
    : e.slice(-1)[0];
}
function Jc(e) {
  let t =
      typeof window < 'u' && typeof window.location < 'u'
        ? window.location.origin
        : 'unknown://unknown',
    r = typeof e == 'string' ? e : el(e);
  return new URL(r, t);
}
/**
 * React Router v6.4.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Uo() {
  return (
    (Uo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Uo.apply(this, arguments)
  );
}
function NO(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const LO = typeof Object.is == 'function' ? Object.is : NO,
  { useState: BO, useEffect: FO, useLayoutEffect: zO, useDebugValue: WO } = Fc;
function UO(e, t, r) {
  const n = t(),
    [{ inst: a }, i] = BO({ inst: { value: n, getSnapshot: t } });
  return (
    zO(() => {
      (a.value = n), (a.getSnapshot = t), ec(a) && i({ inst: a });
    }, [e, n, t]),
    FO(
      () => (
        ec(a) && i({ inst: a }),
        e(() => {
          ec(a) && i({ inst: a });
        })
      ),
      [e]
    ),
    WO(n),
    n
  );
}
function ec(e) {
  const t = e.getSnapshot,
    r = e.value;
  try {
    const n = t();
    return !LO(r, n);
  } catch {
    return !0;
  }
}
function HO(e, t, r) {
  return t();
}
const VO =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  GO = !VO,
  qO = GO ? HO : UO,
  YO = 'useSyncExternalStore' in Fc ? ((e) => e.useSyncExternalStore)(Fc) : qO,
  KO = E.exports.createContext(null),
  hb = E.exports.createContext(null),
  tl = E.exports.createContext(null),
  Jf = E.exports.createContext(null),
  rl = E.exports.createContext(null),
  Bn = E.exports.createContext({ outlet: null, matches: [] }),
  vb = E.exports.createContext(null);
function XO(e, t) {
  let { relative: r } = t === void 0 ? {} : t;
  Aa() || De(!1);
  let { basename: n, navigator: a } = E.exports.useContext(Jf),
    { hash: i, pathname: o, search: s } = Ho(e, { relative: r }),
    l = o;
  return (
    n !== '/' && (l = o === '/' ? n : sn([n, o])),
    a.createHref({ pathname: l, search: s, hash: i })
  );
}
function Aa() {
  return E.exports.useContext(rl) != null;
}
function Di() {
  return Aa() || De(!1), E.exports.useContext(rl).location;
}
function JO(e) {
  Aa() || De(!1);
  let { pathname: t } = Di();
  return E.exports.useMemo(() => Xf(e, t), [t, e]);
}
function mb(e) {
  return e.filter(
    (t, r) =>
      r === 0 || (!t.route.index && t.pathnameBase !== e[r - 1].pathnameBase)
  );
}
function gb() {
  Aa() || De(!1);
  let { basename: e, navigator: t } = E.exports.useContext(Jf),
    { matches: r } = E.exports.useContext(Bn),
    { pathname: n } = Di(),
    a = JSON.stringify(mb(r).map((s) => s.pathnameBase)),
    i = E.exports.useRef(!1);
  return (
    E.exports.useEffect(() => {
      i.current = !0;
    }),
    E.exports.useCallback(
      function (s, l) {
        if ((l === void 0 && (l = {}), !i.current)) return;
        if (typeof s == 'number') {
          t.go(s);
          return;
        }
        let c = lb(s, JSON.parse(a), n, l.relative === 'path');
        e !== '/' &&
          (c.pathname = c.pathname === '/' ? e : sn([e, c.pathname])),
          (l.replace ? t.replace : t.push)(c, l.state, l);
      },
      [e, t, a, n]
    )
  );
}
const ZO = E.exports.createContext(null);
function QO(e) {
  let t = E.exports.useContext(Bn).outlet;
  return t && E.exports.createElement(ZO.Provider, { value: e }, t);
}
function Nr() {
  let { matches: e } = E.exports.useContext(Bn),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Ho(e, t) {
  let { relative: r } = t === void 0 ? {} : t,
    { matches: n } = E.exports.useContext(Bn),
    { pathname: a } = Di(),
    i = JSON.stringify(mb(n).map((o) => o.pathnameBase));
  return E.exports.useMemo(
    () => lb(e, JSON.parse(i), a, r === 'path'),
    [e, i, a, r]
  );
}
function eS(e, t) {
  Aa() || De(!1);
  let r = E.exports.useContext(tl),
    { matches: n } = E.exports.useContext(Bn),
    a = n[n.length - 1],
    i = a ? a.params : {};
  a && a.pathname;
  let o = a ? a.pathnameBase : '/';
  a && a.route;
  let s = Di(),
    l;
  if (t) {
    var c;
    let v = typeof t == 'string' ? Kr(t) : t;
    o === '/' ||
      ((c = v.pathname) == null ? void 0 : c.startsWith(o)) ||
      De(!1),
      (l = v);
  } else l = s;
  let u = l.pathname || '/',
    f = o === '/' ? u : u.slice(o.length) || '/',
    d = ni(e, { pathname: f }),
    h = aS(
      d &&
        d.map((v) =>
          Object.assign({}, v, {
            params: Object.assign({}, i, v.params),
            pathname: sn([o, v.pathname]),
            pathnameBase: v.pathnameBase === '/' ? o : sn([o, v.pathnameBase]),
          })
        ),
      n,
      r || void 0
    );
  return t
    ? E.exports.createElement(
        rl.Provider,
        {
          value: {
            location: Uo(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              l
            ),
            navigationType: pt.Pop,
          },
        },
        h
      )
    : h;
}
function tS() {
  let e = oS(),
    t = cb(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    r = e instanceof Error ? e.stack : null,
    n = 'rgba(200,200,200, 0.5)',
    a = { padding: '0.5rem', backgroundColor: n },
    i = { padding: '2px 4px', backgroundColor: n };
  return E.exports.createElement(
    E.exports.Fragment,
    null,
    E.exports.createElement('h2', null, 'Unhandled Thrown Error!'),
    E.exports.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    r ? E.exports.createElement('pre', { style: a }, r) : null,
    E.exports.createElement('p', null, '\u{1F4BF} Hey developer \u{1F44B}'),
    E.exports.createElement(
      'p',
      null,
      'You can provide a way better UX than this when your app throws errors by providing your own\xA0',
      E.exports.createElement('code', { style: i }, 'errorElement'),
      ' props on\xA0',
      E.exports.createElement('code', { style: i }, '<Route>')
    )
  );
}
class rS extends E.exports.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, r) {
    return r.location !== t.location
      ? { error: t.error, location: t.location }
      : { error: t.error || r.error, location: r.location };
  }
  componentDidCatch(t, r) {
    console.error(
      'React Router caught the following error during render',
      t,
      r
    );
  }
  render() {
    return this.state.error
      ? E.exports.createElement(vb.Provider, {
          value: this.state.error,
          children: this.props.component,
        })
      : this.props.children;
  }
}
function nS(e) {
  let { routeContext: t, match: r, children: n } = e,
    a = E.exports.useContext(KO);
  return (
    a && r.route.errorElement && (a._deepestRenderedBoundaryId = r.route.id),
    E.exports.createElement(Bn.Provider, { value: t }, n)
  );
}
function aS(e, t, r) {
  if ((t === void 0 && (t = []), e == null))
    if (r != null && r.errors) e = r.matches;
    else return null;
  let n = e,
    a = r == null ? void 0 : r.errors;
  if (a != null) {
    let i = n.findIndex(
      (o) => o.route.id && (a == null ? void 0 : a[o.route.id])
    );
    i >= 0 || De(!1), (n = n.slice(0, Math.min(n.length, i + 1)));
  }
  return n.reduceRight((i, o, s) => {
    let l = o.route.id ? (a == null ? void 0 : a[o.route.id]) : null,
      c = r ? o.route.errorElement || E.exports.createElement(tS, null) : null,
      u = () =>
        E.exports.createElement(
          nS,
          {
            match: o,
            routeContext: { outlet: i, matches: t.concat(n.slice(0, s + 1)) },
          },
          l ? c : o.route.element !== void 0 ? o.route.element : i
        );
    return r && (o.route.errorElement || s === 0)
      ? E.exports.createElement(rS, {
          location: r.location,
          component: c,
          error: l,
          children: u(),
        })
      : u();
  }, null);
}
var Zc;
(function (e) {
  (e.UseLoaderData = 'useLoaderData'),
    (e.UseActionData = 'useActionData'),
    (e.UseRouteError = 'useRouteError'),
    (e.UseNavigation = 'useNavigation'),
    (e.UseRouteLoaderData = 'useRouteLoaderData'),
    (e.UseMatches = 'useMatches'),
    (e.UseRevalidator = 'useRevalidator');
})(Zc || (Zc = {}));
function iS(e) {
  let t = E.exports.useContext(tl);
  return t || De(!1), t;
}
function oS() {
  var e;
  let t = E.exports.useContext(vb),
    r = iS(Zc.UseRouteError),
    n = E.exports.useContext(Bn),
    a = n.matches[n.matches.length - 1];
  return (
    t ||
    (n || De(!1),
    a.route.id || De(!1),
    (e = r.errors) == null ? void 0 : e[a.route.id])
  );
}
function sS(e) {
  let { fallbackElement: t, router: r } = e,
    n = YO(
      r.subscribe,
      () => r.state,
      () => r.state
    ),
    a = E.exports.useMemo(
      () => ({
        createHref: r.createHref,
        go: (o) => r.navigate(o),
        push: (o, s, l) =>
          r.navigate(o, {
            state: s,
            preventScrollReset: l == null ? void 0 : l.preventScrollReset,
          }),
        replace: (o, s, l) =>
          r.navigate(o, {
            replace: !0,
            state: s,
            preventScrollReset: l == null ? void 0 : l.preventScrollReset,
          }),
      }),
      [r]
    ),
    i = r.basename || '/';
  return E.exports.createElement(
    hb.Provider,
    { value: { router: r, navigator: a, static: !1, basename: i } },
    E.exports.createElement(
      tl.Provider,
      { value: n },
      E.exports.createElement(
        cS,
        {
          basename: r.basename,
          location: r.state.location,
          navigationType: r.state.historyAction,
          navigator: a,
        },
        r.state.initialized ? E.exports.createElement(uS, null) : t
      )
    )
  );
}
function lS(e) {
  return QO(e.context);
}
function Fr(e) {
  De(!1);
}
function cS(e) {
  let {
    basename: t = '/',
    children: r = null,
    location: n,
    navigationType: a = pt.Pop,
    navigator: i,
    static: o = !1,
  } = e;
  Aa() && De(!1);
  let s = t.replace(/^\/*/, '/'),
    l = E.exports.useMemo(
      () => ({ basename: s, navigator: i, static: o }),
      [s, i, o]
    );
  typeof n == 'string' && (n = Kr(n));
  let {
      pathname: c = '/',
      search: u = '',
      hash: f = '',
      state: d = null,
      key: h = 'default',
    } = n,
    v = E.exports.useMemo(() => {
      let p = ob(c, s);
      return p == null
        ? null
        : { pathname: p, search: u, hash: f, state: d, key: h };
    }, [s, c, u, f, d, h]);
  return v == null
    ? null
    : E.exports.createElement(
        Jf.Provider,
        { value: l },
        E.exports.createElement(rl.Provider, {
          children: r,
          value: { location: v, navigationType: a },
        })
      );
}
function uS(e) {
  let { children: t, location: r } = e,
    n = E.exports.useContext(hb),
    a = n && !t ? n.router.routes : Vo(t);
  return eS(a, r);
}
var ih;
(function (e) {
  (e[(e.pending = 0)] = 'pending'),
    (e[(e.success = 1)] = 'success'),
    (e[(e.error = 2)] = 'error');
})(ih || (ih = {}));
new Promise(() => {});
function Vo(e, t) {
  t === void 0 && (t = []);
  let r = [];
  return (
    E.exports.Children.forEach(e, (n, a) => {
      if (!E.exports.isValidElement(n)) return;
      if (n.type === E.exports.Fragment) {
        r.push.apply(r, Vo(n.props.children, t));
        return;
      }
      n.type !== Fr && De(!1);
      let i = [...t, a],
        o = {
          id: n.props.id || i.join('-'),
          caseSensitive: n.props.caseSensitive,
          element: n.props.element,
          index: n.props.index,
          path: n.props.path,
          loader: n.props.loader,
          action: n.props.action,
          errorElement: n.props.errorElement,
          hasErrorBoundary: n.props.errorElement != null,
          shouldRevalidate: n.props.shouldRevalidate,
          handle: n.props.handle,
        };
      n.props.children && (o.children = Vo(n.props.children, i)), r.push(o);
    }),
    r
  );
}
function yb(e) {
  return e.map((t) => {
    let r = Uo({}, t);
    return (
      r.hasErrorBoundary == null &&
        (r.hasErrorBoundary = r.errorElement != null),
      r.children && (r.children = yb(r.children)),
      r
    );
  });
}
/**
 * React Router DOM v6.4.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Go() {
  return (
    (Go = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Go.apply(this, arguments)
  );
}
function bb(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    a,
    i;
  for (i = 0; i < n.length; i++)
    (a = n[i]), !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function fS(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function dS(e, t) {
  return e.button === 0 && (!t || t === '_self') && !fS(e);
}
const pS = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
  ],
  hS = [
    'aria-current',
    'caseSensitive',
    'className',
    'end',
    'style',
    'to',
    'children',
  ];
function vS(e, t) {
  var r;
  return MO({
    basename: t == null ? void 0 : t.basename,
    history: lO({ window: t == null ? void 0 : t.window }),
    hydrationData:
      (t == null ? void 0 : t.hydrationData) ||
      ((r = window) == null ? void 0 : r.__staticRouterHydrationData),
    routes: yb(e),
  }).initialize();
}
const Zf = E.exports.forwardRef(function (t, r) {
    let {
        onClick: n,
        relative: a,
        reloadDocument: i,
        replace: o,
        state: s,
        target: l,
        to: c,
        preventScrollReset: u,
      } = t,
      f = bb(t, pS),
      d = XO(c, { relative: a }),
      h = mS(c, {
        replace: o,
        state: s,
        target: l,
        preventScrollReset: u,
        relative: a,
      });
    function v(p) {
      n && n(p), p.defaultPrevented || h(p);
    }
    return E.exports.createElement(
      'a',
      Go({}, f, { href: d, onClick: i ? n : v, ref: r, target: l })
    );
  }),
  Hn = E.exports.forwardRef(function (t, r) {
    let {
        'aria-current': n = 'page',
        caseSensitive: a = !1,
        className: i = '',
        end: o = !1,
        style: s,
        to: l,
        children: c,
      } = t,
      u = bb(t, hS),
      f = Ho(l),
      d = JO({ path: f.pathname, end: o, caseSensitive: a }),
      h = E.exports.useContext(tl),
      v = h == null ? void 0 : h.navigation.location,
      p = Ho(v || ''),
      g =
        E.exports.useMemo(
          () =>
            v
              ? Xf({ path: f.pathname, end: o, caseSensitive: a }, p.pathname)
              : null,
          [v, f.pathname, a, o, p.pathname]
        ) != null,
      _ = d != null,
      x = _ ? n : void 0,
      b;
    typeof i == 'function'
      ? (b = i({ isActive: _, isPending: g }))
      : (b = [i, _ ? 'active' : null, g ? 'pending' : null]
          .filter(Boolean)
          .join(' '));
    let w = typeof s == 'function' ? s({ isActive: _, isPending: g }) : s;
    return E.exports.createElement(
      Zf,
      Go({}, u, { 'aria-current': x, className: b, ref: r, style: w, to: l }),
      typeof c == 'function' ? c({ isActive: _, isPending: g }) : c
    );
  });
function mS(e, t) {
  let {
      target: r,
      replace: n,
      state: a,
      preventScrollReset: i,
      relative: o,
    } = t === void 0 ? {} : t,
    s = gb(),
    l = Di(),
    c = Ho(e, { relative: o });
  return E.exports.useCallback(
    (u) => {
      if (dS(u, r)) {
        u.preventDefault();
        let f = n !== void 0 ? n : xi(l) === xi(c);
        s(e, { replace: f, state: a, preventScrollReset: i, relative: o });
      }
    },
    [l, s, c, n, a, r, e, i, o]
  );
}
var _e = { exports: {} },
  gS = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  yS = gS,
  bS = yS;
function xb() {}
function wb() {}
wb.resetWarningCache = xb;
var xS = function () {
  function e(n, a, i, o, s, l) {
    if (l !== bS) {
      var c = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
      );
      throw ((c.name = 'Invariant Violation'), c);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var r = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: wb,
    resetWarningCache: xb,
  };
  return (r.PropTypes = r), r;
};
_e.exports = xS();
function wS(e, t) {
  return () => null;
}
function _S(e, t) {
  return () => null;
}
function OS(e, t, r, n, a) {
  return null;
}
const SS = ['className', 'component'];
function ES(e = {}) {
  const {
      defaultTheme: t,
      defaultClassName: r = 'MuiBox-root',
      generateClassName: n,
      styleFunctionSx: a = iw,
    } = e,
    i = aw('div', {
      shouldForwardProp: (s) => s !== 'theme' && s !== 'sx' && s !== 'as',
    })(a);
  return E.exports.forwardRef(function (l, c) {
    const u = ow(t),
      f = jf(l),
      { className: d, component: h = 'div' } = f,
      v = $e(f, SS);
    return L.exports.jsx(
      i,
      I({ as: h, ref: c, className: he(d, n ? n(r) : r), theme: u }, v)
    );
  });
}
const $S = sw(),
  AS = $S,
  CS = [
    'className',
    'component',
    'disableGutters',
    'fixed',
    'maxWidth',
    'classes',
  ],
  PS = lw(),
  kS = AS('div', {
    name: 'MuiContainer',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        t[`maxWidth${X(String(r.maxWidth))}`],
        r.fixed && t.fixed,
        r.disableGutters && t.disableGutters,
      ];
    },
  }),
  TS = (e) => cw({ props: e, name: 'MuiContainer', defaultTheme: PS }),
  MS = (e, t) => {
    const r = (l) => Be(t, l),
      { classes: n, fixed: a, disableGutters: i, maxWidth: o } = e,
      s = {
        root: [
          'root',
          o && `maxWidth${X(String(o))}`,
          a && 'fixed',
          i && 'disableGutters',
        ],
      };
    return Le(s, r, n);
  };
function IS(e = {}) {
  const {
      createStyledComponent: t = kS,
      useThemeProps: r = TS,
      componentName: n = 'MuiContainer',
    } = e,
    a = t(
      ({ theme: o, ownerState: s }) =>
        I(
          {
            width: '100%',
            marginLeft: 'auto',
            boxSizing: 'border-box',
            marginRight: 'auto',
            display: 'block',
          },
          !s.disableGutters && {
            paddingLeft: o.spacing(2),
            paddingRight: o.spacing(2),
            [o.breakpoints.up('sm')]: {
              paddingLeft: o.spacing(3),
              paddingRight: o.spacing(3),
            },
          }
        ),
      ({ theme: o, ownerState: s }) =>
        s.fixed &&
        Object.keys(o.breakpoints.values).reduce((l, c) => {
          const u = c,
            f = o.breakpoints.values[u];
          return (
            f !== 0 &&
              (l[o.breakpoints.up(u)] = {
                maxWidth: `${f}${o.breakpoints.unit}`,
              }),
            l
          );
        }, {}),
      ({ theme: o, ownerState: s }) =>
        I(
          {},
          s.maxWidth === 'xs' && {
            [o.breakpoints.up('xs')]: {
              maxWidth: Math.max(o.breakpoints.values.xs, 444),
            },
          },
          s.maxWidth &&
            s.maxWidth !== 'xs' && {
              [o.breakpoints.up(s.maxWidth)]: {
                maxWidth: `${o.breakpoints.values[s.maxWidth]}${
                  o.breakpoints.unit
                }`,
              },
            }
        )
    );
  return E.exports.forwardRef(function (s, l) {
    const c = r(s),
      {
        className: u,
        component: f = 'div',
        disableGutters: d = !1,
        fixed: h = !1,
        maxWidth: v = 'lg',
      } = c,
      p = $e(c, CS),
      m = I({}, c, { component: f, disableGutters: d, fixed: h, maxWidth: v }),
      g = MS(m, n);
    return L.exports.jsx(
      a,
      I({ as: f, ownerState: m, className: he(g.root, u), ref: l }, p)
    );
  });
}
function oh(e) {
  return typeof e.normalize < 'u'
    ? e.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    : e;
}
function RS(e = {}) {
  const {
    ignoreAccents: t = !0,
    ignoreCase: r = !0,
    limit: n,
    matchFrom: a = 'any',
    stringify: i,
    trim: o = !1,
  } = e;
  return (s, { inputValue: l, getOptionLabel: c }) => {
    let u = o ? l.trim() : l;
    r && (u = u.toLowerCase()), t && (u = oh(u));
    const f = s.filter((d) => {
      let h = (i || c)(d);
      return (
        r && (h = h.toLowerCase()),
        t && (h = oh(h)),
        a === 'start' ? h.indexOf(u) === 0 : h.indexOf(u) > -1
      );
    });
    return typeof n == 'number' ? f.slice(0, n) : f;
  };
}
function tc(e, t) {
  for (let r = 0; r < e.length; r += 1) if (t(e[r])) return r;
  return -1;
}
const DS = RS(),
  sh = 5;
function jS(e) {
  const {
      autoComplete: t = !1,
      autoHighlight: r = !1,
      autoSelect: n = !1,
      blurOnSelect: a = !1,
      clearOnBlur: i = !e.freeSolo,
      clearOnEscape: o = !1,
      componentName: s = 'useAutocomplete',
      defaultValue: l = e.multiple ? [] : null,
      disableClearable: c = !1,
      disableCloseOnSelect: u = !1,
      disabled: f,
      disabledItemsFocusable: d = !1,
      disableListWrap: h = !1,
      filterOptions: v = DS,
      filterSelectedOptions: p = !1,
      freeSolo: m = !1,
      getOptionDisabled: g,
      getOptionLabel: _ = (V) => {
        var W;
        return (W = V.label) != null ? W : V;
      },
      groupBy: x,
      handleHomeEndKeys: b = !e.freeSolo,
      id: w,
      includeInputInList: O = !1,
      inputValue: S,
      isOptionEqualToValue: $ = (V, W) => V === W,
      multiple: A = !1,
      onChange: P,
      onClose: C,
      onHighlightChange: k,
      onInputChange: T,
      onOpen: D,
      open: j,
      openOnFocus: R = !1,
      options: N,
      readOnly: z = !1,
      selectOnFocus: M = !e.freeSolo,
      value: Y,
    } = e,
    Z = Nf(w);
  let ne = _;
  ne = (V) => {
    const W = _(V);
    return typeof W != 'string' ? String(W) : W;
  };
  const ve = E.exports.useRef(!1),
    Se = E.exports.useRef(!0),
    le = E.exports.useRef(null),
    Ee = E.exports.useRef(null),
    [at, oe] = E.exports.useState(null),
    [H, Q] = E.exports.useState(-1),
    ie = r ? 0 : -1,
    B = E.exports.useRef(ie),
    [J, de] = mo({ controlled: Y, default: l, name: s }),
    [ce, Pe] = mo({ controlled: S, default: '', name: s, state: 'inputValue' }),
    [it, F] = E.exports.useState(!1),
    G = E.exports.useCallback(
      (V, W) => {
        if (!(A ? J.length < W.length : W !== null) && !i) return;
        let Oe;
        if (A) Oe = '';
        else if (W == null) Oe = '';
        else {
          const Ke = ne(W);
          Oe = typeof Ke == 'string' ? Ke : '';
        }
        ce !== Oe && (Pe(Oe), T && T(V, Oe, 'reset'));
      },
      [ne, ce, A, T, Pe, i, J]
    ),
    q = E.exports.useRef();
  E.exports.useEffect(() => {
    const V = J !== q.current;
    (q.current = J), !(it && !V) && ((m && !V) || G(null, J));
  }, [J, G, it, q, m]);
  const [ee, se] = mo({ controlled: j, default: !1, name: s, state: 'open' }),
    [Ae, we] = E.exports.useState(!0),
    me = !A && J != null && ce === ne(J),
    fe = ee && !z,
    ye = fe
      ? v(
          N.filter(
            (V) => !(p && (A ? J : [J]).some((W) => W !== null && $(V, W)))
          ),
          { inputValue: me && Ae ? '' : ce, getOptionLabel: ne }
        )
      : [],
    He = ee && ye.length > 0 && !z,
    kt = ti((V) => {
      V === -1
        ? le.current.focus()
        : at.querySelector(`[data-tag-index="${V}"]`).focus();
    });
  E.exports.useEffect(() => {
    A && H > J.length - 1 && (Q(-1), kt(-1));
  }, [J, A, H, kt]);
  function Vt(V, W) {
    if (!Ee.current || V === -1) return -1;
    let ue = V;
    for (;;) {
      if ((W === 'next' && ue === ye.length) || (W === 'previous' && ue === -1))
        return -1;
      const Oe = Ee.current.querySelector(`[data-option-index="${ue}"]`),
        Ke = d
          ? !1
          : !Oe || Oe.disabled || Oe.getAttribute('aria-disabled') === 'true';
      if ((Oe && !Oe.hasAttribute('tabindex')) || Ke)
        ue += W === 'next' ? 1 : -1;
      else return ue;
    }
  }
  const ft = ti(({ event: V, index: W, reason: ue = 'auto' }) => {
      if (
        ((B.current = W),
        W === -1
          ? le.current.removeAttribute('aria-activedescendant')
          : le.current.setAttribute(
              'aria-activedescendant',
              `${Z}-option-${W}`
            ),
        k && k(V, W === -1 ? null : ye[W], ue),
        !Ee.current)
      )
        return;
      const Oe = Ee.current.querySelector('[role="option"].Mui-focused');
      Oe &&
        (Oe.classList.remove('Mui-focused'),
        Oe.classList.remove('Mui-focusVisible'));
      const Ke = Ee.current.parentElement.querySelector('[role="listbox"]');
      if (!Ke) return;
      if (W === -1) {
        Ke.scrollTop = 0;
        return;
      }
      const $t = Ee.current.querySelector(`[data-option-index="${W}"]`);
      if (
        !!$t &&
        ($t.classList.add('Mui-focused'),
        ue === 'keyboard' && $t.classList.add('Mui-focusVisible'),
        Ke.scrollHeight > Ke.clientHeight && ue !== 'mouse')
      ) {
        const dt = $t,
          Sr = Ke.clientHeight + Ke.scrollTop,
          Ap = dt.offsetTop + dt.offsetHeight;
        Ap > Sr
          ? (Ke.scrollTop = Ap - Ke.clientHeight)
          : dt.offsetTop - dt.offsetHeight * (x ? 1.3 : 0) < Ke.scrollTop &&
            (Ke.scrollTop = dt.offsetTop - dt.offsetHeight * (x ? 1.3 : 0));
      }
    }),
    mt = ti(
      ({ event: V, diff: W, direction: ue = 'next', reason: Oe = 'auto' }) => {
        if (!fe) return;
        const $t = Vt(
          (() => {
            const dt = ye.length - 1;
            if (W === 'reset') return ie;
            if (W === 'start') return 0;
            if (W === 'end') return dt;
            const Sr = B.current + W;
            return Sr < 0
              ? Sr === -1 && O
                ? -1
                : (h && B.current !== -1) || Math.abs(W) > 1
                ? 0
                : dt
              : Sr > dt
              ? Sr === dt + 1 && O
                ? -1
                : h || Math.abs(W) > 1
                ? dt
                : 0
              : Sr;
          })(),
          ue
        );
        if ((ft({ index: $t, reason: Oe, event: V }), t && W !== 'reset'))
          if ($t === -1) le.current.value = ce;
          else {
            const dt = ne(ye[$t]);
            (le.current.value = dt),
              dt.toLowerCase().indexOf(ce.toLowerCase()) === 0 &&
                ce.length > 0 &&
                le.current.setSelectionRange(ce.length, dt.length);
          }
      }
    ),
    Or = E.exports.useCallback(() => {
      if (!fe) return;
      const V = A ? J[0] : J;
      if (ye.length === 0 || V == null) {
        mt({ diff: 'reset' });
        return;
      }
      if (!!Ee.current) {
        if (V != null) {
          const W = ye[B.current];
          if (A && W && tc(J, (Oe) => $(W, Oe)) !== -1) return;
          const ue = tc(ye, (Oe) => $(Oe, V));
          ue === -1 ? mt({ diff: 'reset' }) : ft({ index: ue });
          return;
        }
        if (B.current >= ye.length - 1) {
          ft({ index: ye.length - 1 });
          return;
        }
        ft({ index: B.current });
      }
    }, [ye.length, A ? !1 : J, p, mt, ft, fe, ce, A]),
    Gt = ti((V) => {
      wy(Ee, V), V && Or();
    });
  E.exports.useEffect(() => {
    Or();
  }, [Or]);
  const qt = (V) => {
      ee || (se(!0), we(!0), D && D(V));
    },
    Qe = (V, W) => {
      !ee || (se(!1), C && C(V, W));
    },
    Ye = (V, W, ue, Oe) => {
      if (A) {
        if (J.length === W.length && J.every((Ke, $t) => Ke === W[$t])) return;
      } else if (J === W) return;
      P && P(V, W, ue, Oe), de(W);
    },
    Et = E.exports.useRef(!1),
    Nt = (V, W, ue = 'selectOption', Oe = 'options') => {
      let Ke = ue,
        $t = W;
      if (A) {
        $t = Array.isArray(J) ? J.slice() : [];
        const dt = tc($t, (Sr) => $(W, Sr));
        dt === -1
          ? $t.push(W)
          : Oe !== 'freeSolo' && ($t.splice(dt, 1), (Ke = 'removeOption'));
      }
      G(V, $t),
        Ye(V, $t, Ke, { option: W }),
        !u && (!V || (!V.ctrlKey && !V.metaKey)) && Qe(V, Ke),
        (a === !0 ||
          (a === 'touch' && Et.current) ||
          (a === 'mouse' && !Et.current)) &&
          le.current.blur();
    };
  function gt(V, W) {
    if (V === -1) return -1;
    let ue = V;
    for (;;) {
      if ((W === 'next' && ue === J.length) || (W === 'previous' && ue === -1))
        return -1;
      const Oe = at.querySelector(`[data-tag-index="${ue}"]`);
      if (
        !Oe ||
        !Oe.hasAttribute('tabindex') ||
        Oe.disabled ||
        Oe.getAttribute('aria-disabled') === 'true'
      )
        ue += W === 'next' ? 1 : -1;
      else return ue;
    }
  }
  const ot = (V, W) => {
      if (!A) return;
      ce === '' && Qe(V, 'toggleInput');
      let ue = H;
      H === -1
        ? ce === '' && W === 'previous' && (ue = J.length - 1)
        : ((ue += W === 'next' ? 1 : -1),
          ue < 0 && (ue = 0),
          ue === J.length && (ue = -1)),
        (ue = gt(ue, W)),
        Q(ue),
        kt(ue);
    },
    Lt = (V) => {
      (ve.current = !0),
        Pe(''),
        T && T(V, '', 'clear'),
        Ye(V, A ? [] : null, 'clear');
    },
    Bt = (V) => (W) => {
      if (
        (V.onKeyDown && V.onKeyDown(W),
        !W.defaultMuiPrevented &&
          (H !== -1 &&
            ['ArrowLeft', 'ArrowRight'].indexOf(W.key) === -1 &&
            (Q(-1), kt(-1)),
          W.which !== 229))
      )
        switch (W.key) {
          case 'Home':
            fe &&
              b &&
              (W.preventDefault(),
              mt({
                diff: 'start',
                direction: 'next',
                reason: 'keyboard',
                event: W,
              }));
            break;
          case 'End':
            fe &&
              b &&
              (W.preventDefault(),
              mt({
                diff: 'end',
                direction: 'previous',
                reason: 'keyboard',
                event: W,
              }));
            break;
          case 'PageUp':
            W.preventDefault(),
              mt({
                diff: -sh,
                direction: 'previous',
                reason: 'keyboard',
                event: W,
              }),
              qt(W);
            break;
          case 'PageDown':
            W.preventDefault(),
              mt({ diff: sh, direction: 'next', reason: 'keyboard', event: W }),
              qt(W);
            break;
          case 'ArrowDown':
            W.preventDefault(),
              mt({ diff: 1, direction: 'next', reason: 'keyboard', event: W }),
              qt(W);
            break;
          case 'ArrowUp':
            W.preventDefault(),
              mt({
                diff: -1,
                direction: 'previous',
                reason: 'keyboard',
                event: W,
              }),
              qt(W);
            break;
          case 'ArrowLeft':
            ot(W, 'previous');
            break;
          case 'ArrowRight':
            ot(W, 'next');
            break;
          case 'Enter':
            if (B.current !== -1 && fe) {
              const ue = ye[B.current],
                Oe = g ? g(ue) : !1;
              if ((W.preventDefault(), Oe)) return;
              Nt(W, ue, 'selectOption'),
                t &&
                  le.current.setSelectionRange(
                    le.current.value.length,
                    le.current.value.length
                  );
            } else
              m &&
                ce !== '' &&
                me === !1 &&
                (A && W.preventDefault(),
                Nt(W, ce, 'createOption', 'freeSolo'));
            break;
          case 'Escape':
            fe
              ? (W.preventDefault(), W.stopPropagation(), Qe(W, 'escape'))
              : o &&
                (ce !== '' || (A && J.length > 0)) &&
                (W.preventDefault(), W.stopPropagation(), Lt(W));
            break;
          case 'Backspace':
            if (A && !z && ce === '' && J.length > 0) {
              const ue = H === -1 ? J.length - 1 : H,
                Oe = J.slice();
              Oe.splice(ue, 1), Ye(W, Oe, 'removeOption', { option: J[ue] });
            }
            break;
        }
    },
    Yt = (V) => {
      F(!0), R && !ve.current && qt(V);
    },
    Un = (V) => {
      if (
        Ee.current !== null &&
        Ee.current.parentElement.contains(document.activeElement)
      ) {
        le.current.focus();
        return;
      }
      F(!1),
        (Se.current = !0),
        (ve.current = !1),
        n && B.current !== -1 && fe
          ? Nt(V, ye[B.current], 'blur')
          : n && m && ce !== ''
          ? Nt(V, ce, 'blur', 'freeSolo')
          : i && G(V, J),
        Qe(V, 'blur');
    },
    La = (V) => {
      const W = V.target.value;
      ce !== W && (Pe(W), we(!1), T && T(V, W, 'input')),
        W === '' ? !c && !A && Ye(V, null, 'clear') : qt(V);
    },
    Ji = (V) => {
      ft({
        event: V,
        index: Number(V.currentTarget.getAttribute('data-option-index')),
        reason: 'mouse',
      });
    },
    Fe = () => {
      Et.current = !0;
    },
    Ft = (V) => {
      const W = Number(V.currentTarget.getAttribute('data-option-index'));
      Nt(V, ye[W], 'selectOption'), (Et.current = !1);
    },
    Qr = (V) => (W) => {
      const ue = J.slice();
      ue.splice(V, 1), Ye(W, ue, 'removeOption', { option: J[V] });
    },
    Zi = (V) => {
      ee ? Qe(V, 'toggleInput') : qt(V);
    },
    tw = (V) => {
      V.target.getAttribute('id') !== Z && V.preventDefault();
    },
    rw = () => {
      le.current.focus(),
        M &&
          Se.current &&
          le.current.selectionEnd - le.current.selectionStart === 0 &&
          le.current.select(),
        (Se.current = !1);
    },
    nw = (V) => {
      (ce === '' || !ee) && Zi(V);
    };
  let Ul = m && ce.length > 0;
  Ul = Ul || (A ? J.length > 0 : J !== null);
  let $p = ye;
  return (
    x &&
      ($p = ye.reduce((V, W, ue) => {
        const Oe = x(W);
        return (
          V.length > 0 && V[V.length - 1].group === Oe
            ? V[V.length - 1].options.push(W)
            : V.push({ key: ue, index: ue, group: Oe, options: [W] }),
          V
        );
      }, [])),
    f && it && Un(),
    {
      getRootProps: (V = {}) =>
        I({ 'aria-owns': He ? `${Z}-listbox` : null }, V, {
          onKeyDown: Bt(V),
          onMouseDown: tw,
          onClick: rw,
        }),
      getInputLabelProps: () => ({ id: `${Z}-label`, htmlFor: Z }),
      getInputProps: () => ({
        id: Z,
        value: ce,
        onBlur: Un,
        onFocus: Yt,
        onChange: La,
        onMouseDown: nw,
        'aria-activedescendant': fe ? '' : null,
        'aria-autocomplete': t ? 'both' : 'list',
        'aria-controls': He ? `${Z}-listbox` : void 0,
        'aria-expanded': He,
        autoComplete: 'off',
        ref: le,
        autoCapitalize: 'none',
        spellCheck: 'false',
        role: 'combobox',
      }),
      getClearProps: () => ({ tabIndex: -1, onClick: Lt }),
      getPopupIndicatorProps: () => ({ tabIndex: -1, onClick: Zi }),
      getTagProps: ({ index: V }) =>
        I(
          { key: V, 'data-tag-index': V, tabIndex: -1 },
          !z && { onDelete: Qr(V) }
        ),
      getListboxProps: () => ({
        role: 'listbox',
        id: `${Z}-listbox`,
        'aria-labelledby': `${Z}-label`,
        ref: Gt,
        onMouseDown: (V) => {
          V.preventDefault();
        },
      }),
      getOptionProps: ({ index: V, option: W }) => {
        const ue = (A ? J : [J]).some((Ke) => Ke != null && $(W, Ke)),
          Oe = g ? g(W) : !1;
        return {
          key: ne(W),
          tabIndex: -1,
          role: 'option',
          id: `${Z}-option-${V}`,
          onMouseOver: Ji,
          onClick: Ft,
          onTouchStart: Fe,
          'data-option-index': V,
          'aria-disabled': Oe,
          'aria-selected': ue,
        };
      },
      id: Z,
      inputValue: ce,
      value: J,
      dirty: Ul,
      popupOpen: fe,
      focused: it || H !== -1,
      anchorEl: at,
      setAnchorEl: oe,
      focusedTag: H,
      groupedOptions: $p,
    }
  );
}
var Ut = 'top',
  ur = 'bottom',
  fr = 'right',
  Ht = 'left',
  Qf = 'auto',
  ji = [Ut, ur, fr, Ht],
  pa = 'start',
  wi = 'end',
  NS = 'clippingParents',
  _b = 'viewport',
  za = 'popper',
  LS = 'reference',
  lh = ji.reduce(function (e, t) {
    return e.concat([t + '-' + pa, t + '-' + wi]);
  }, []),
  Ob = [].concat(ji, [Qf]).reduce(function (e, t) {
    return e.concat([t, t + '-' + pa, t + '-' + wi]);
  }, []),
  BS = 'beforeRead',
  FS = 'read',
  zS = 'afterRead',
  WS = 'beforeMain',
  US = 'main',
  HS = 'afterMain',
  VS = 'beforeWrite',
  GS = 'write',
  qS = 'afterWrite',
  YS = [BS, FS, zS, WS, US, HS, VS, GS, qS];
function Mr(e) {
  return e ? (e.nodeName || '').toLowerCase() : null;
}
function hr(e) {
  if (e == null) return window;
  if (e.toString() !== '[object Window]') {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function In(e) {
  var t = hr(e).Element;
  return e instanceof t || e instanceof Element;
}
function lr(e) {
  var t = hr(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function ed(e) {
  if (typeof ShadowRoot > 'u') return !1;
  var t = hr(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function KS(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (r) {
    var n = t.styles[r] || {},
      a = t.attributes[r] || {},
      i = t.elements[r];
    !lr(i) ||
      !Mr(i) ||
      (Object.assign(i.style, n),
      Object.keys(a).forEach(function (o) {
        var s = a[o];
        s === !1 ? i.removeAttribute(o) : i.setAttribute(o, s === !0 ? '' : s);
      }));
  });
}
function XS(e) {
  var t = e.state,
    r = {
      popper: {
        position: t.options.strategy,
        left: '0',
        top: '0',
        margin: '0',
      },
      arrow: { position: 'absolute' },
      reference: {},
    };
  return (
    Object.assign(t.elements.popper.style, r.popper),
    (t.styles = r),
    t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow),
    function () {
      Object.keys(t.elements).forEach(function (n) {
        var a = t.elements[n],
          i = t.attributes[n] || {},
          o = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]),
          s = o.reduce(function (l, c) {
            return (l[c] = ''), l;
          }, {});
        !lr(a) ||
          !Mr(a) ||
          (Object.assign(a.style, s),
          Object.keys(i).forEach(function (l) {
            a.removeAttribute(l);
          }));
      });
    }
  );
}
const JS = {
  name: 'applyStyles',
  enabled: !0,
  phase: 'write',
  fn: KS,
  effect: XS,
  requires: ['computeStyles'],
};
function Pr(e) {
  return e.split('-')[0];
}
var kn = Math.max,
  qo = Math.min,
  ha = Math.round;
function Qc() {
  var e = navigator.userAgentData;
  return e != null && e.brands
    ? e.brands
        .map(function (t) {
          return t.brand + '/' + t.version;
        })
        .join(' ')
    : navigator.userAgent;
}
function Sb() {
  return !/^((?!chrome|android).)*safari/i.test(Qc());
}
function va(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(),
    a = 1,
    i = 1;
  t &&
    lr(e) &&
    ((a = (e.offsetWidth > 0 && ha(n.width) / e.offsetWidth) || 1),
    (i = (e.offsetHeight > 0 && ha(n.height) / e.offsetHeight) || 1));
  var o = In(e) ? hr(e) : window,
    s = o.visualViewport,
    l = !Sb() && r,
    c = (n.left + (l && s ? s.offsetLeft : 0)) / a,
    u = (n.top + (l && s ? s.offsetTop : 0)) / i,
    f = n.width / a,
    d = n.height / i;
  return {
    width: f,
    height: d,
    top: u,
    right: c + f,
    bottom: u + d,
    left: c,
    x: c,
    y: u,
  };
}
function td(e) {
  var t = va(e),
    r = e.offsetWidth,
    n = e.offsetHeight;
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
  );
}
function Eb(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && ed(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n)) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function Xr(e) {
  return hr(e).getComputedStyle(e);
}
function ZS(e) {
  return ['table', 'td', 'th'].indexOf(Mr(e)) >= 0;
}
function hn(e) {
  return ((In(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function nl(e) {
  return Mr(e) === 'html'
    ? e
    : e.assignedSlot || e.parentNode || (ed(e) ? e.host : null) || hn(e);
}
function ch(e) {
  return !lr(e) || Xr(e).position === 'fixed' ? null : e.offsetParent;
}
function QS(e) {
  var t = /firefox/i.test(Qc()),
    r = /Trident/i.test(Qc());
  if (r && lr(e)) {
    var n = Xr(e);
    if (n.position === 'fixed') return null;
  }
  var a = nl(e);
  for (ed(a) && (a = a.host); lr(a) && ['html', 'body'].indexOf(Mr(a)) < 0; ) {
    var i = Xr(a);
    if (
      i.transform !== 'none' ||
      i.perspective !== 'none' ||
      i.contain === 'paint' ||
      ['transform', 'perspective'].indexOf(i.willChange) !== -1 ||
      (t && i.willChange === 'filter') ||
      (t && i.filter && i.filter !== 'none')
    )
      return a;
    a = a.parentNode;
  }
  return null;
}
function Ni(e) {
  for (var t = hr(e), r = ch(e); r && ZS(r) && Xr(r).position === 'static'; )
    r = ch(r);
  return r &&
    (Mr(r) === 'html' || (Mr(r) === 'body' && Xr(r).position === 'static'))
    ? t
    : r || QS(e) || t;
}
function rd(e) {
  return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y';
}
function li(e, t, r) {
  return kn(e, qo(t, r));
}
function eE(e, t, r) {
  var n = li(e, t, r);
  return n > r ? r : n;
}
function $b() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Ab(e) {
  return Object.assign({}, $b(), e);
}
function Cb(e, t) {
  return t.reduce(function (r, n) {
    return (r[n] = e), r;
  }, {});
}
var tE = function (t, r) {
  return (
    (t =
      typeof t == 'function'
        ? t(Object.assign({}, r.rects, { placement: r.placement }))
        : t),
    Ab(typeof t != 'number' ? t : Cb(t, ji))
  );
};
function rE(e) {
  var t,
    r = e.state,
    n = e.name,
    a = e.options,
    i = r.elements.arrow,
    o = r.modifiersData.popperOffsets,
    s = Pr(r.placement),
    l = rd(s),
    c = [Ht, fr].indexOf(s) >= 0,
    u = c ? 'height' : 'width';
  if (!(!i || !o)) {
    var f = tE(a.padding, r),
      d = td(i),
      h = l === 'y' ? Ut : Ht,
      v = l === 'y' ? ur : fr,
      p =
        r.rects.reference[u] + r.rects.reference[l] - o[l] - r.rects.popper[u],
      m = o[l] - r.rects.reference[l],
      g = Ni(i),
      _ = g ? (l === 'y' ? g.clientHeight || 0 : g.clientWidth || 0) : 0,
      x = p / 2 - m / 2,
      b = f[h],
      w = _ - d[u] - f[v],
      O = _ / 2 - d[u] / 2 + x,
      S = li(b, O, w),
      $ = l;
    r.modifiersData[n] = ((t = {}), (t[$] = S), (t.centerOffset = S - O), t);
  }
}
function nE(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    a = n === void 0 ? '[data-popper-arrow]' : n;
  a != null &&
    ((typeof a == 'string' && ((a = t.elements.popper.querySelector(a)), !a)) ||
      !Eb(t.elements.popper, a) ||
      (t.elements.arrow = a));
}
const aE = {
  name: 'arrow',
  enabled: !0,
  phase: 'main',
  fn: rE,
  effect: nE,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow'],
};
function ma(e) {
  return e.split('-')[1];
}
var iE = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };
function oE(e) {
  var t = e.x,
    r = e.y,
    n = window,
    a = n.devicePixelRatio || 1;
  return { x: ha(t * a) / a || 0, y: ha(r * a) / a || 0 };
}
function uh(e) {
  var t,
    r = e.popper,
    n = e.popperRect,
    a = e.placement,
    i = e.variation,
    o = e.offsets,
    s = e.position,
    l = e.gpuAcceleration,
    c = e.adaptive,
    u = e.roundOffsets,
    f = e.isFixed,
    d = o.x,
    h = d === void 0 ? 0 : d,
    v = o.y,
    p = v === void 0 ? 0 : v,
    m = typeof u == 'function' ? u({ x: h, y: p }) : { x: h, y: p };
  (h = m.x), (p = m.y);
  var g = o.hasOwnProperty('x'),
    _ = o.hasOwnProperty('y'),
    x = Ht,
    b = Ut,
    w = window;
  if (c) {
    var O = Ni(r),
      S = 'clientHeight',
      $ = 'clientWidth';
    if (
      (O === hr(r) &&
        ((O = hn(r)),
        Xr(O).position !== 'static' &&
          s === 'absolute' &&
          ((S = 'scrollHeight'), ($ = 'scrollWidth'))),
      (O = O),
      a === Ut || ((a === Ht || a === fr) && i === wi))
    ) {
      b = ur;
      var A = f && O === w && w.visualViewport ? w.visualViewport.height : O[S];
      (p -= A - n.height), (p *= l ? 1 : -1);
    }
    if (a === Ht || ((a === Ut || a === ur) && i === wi)) {
      x = fr;
      var P = f && O === w && w.visualViewport ? w.visualViewport.width : O[$];
      (h -= P - n.width), (h *= l ? 1 : -1);
    }
  }
  var C = Object.assign({ position: s }, c && iE),
    k = u === !0 ? oE({ x: h, y: p }) : { x: h, y: p };
  if (((h = k.x), (p = k.y), l)) {
    var T;
    return Object.assign(
      {},
      C,
      ((T = {}),
      (T[b] = _ ? '0' : ''),
      (T[x] = g ? '0' : ''),
      (T.transform =
        (w.devicePixelRatio || 1) <= 1
          ? 'translate(' + h + 'px, ' + p + 'px)'
          : 'translate3d(' + h + 'px, ' + p + 'px, 0)'),
      T)
    );
  }
  return Object.assign(
    {},
    C,
    ((t = {}),
    (t[b] = _ ? p + 'px' : ''),
    (t[x] = g ? h + 'px' : ''),
    (t.transform = ''),
    t)
  );
}
function sE(e) {
  var t = e.state,
    r = e.options,
    n = r.gpuAcceleration,
    a = n === void 0 ? !0 : n,
    i = r.adaptive,
    o = i === void 0 ? !0 : i,
    s = r.roundOffsets,
    l = s === void 0 ? !0 : s,
    c = {
      placement: Pr(t.placement),
      variation: ma(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: a,
      isFixed: t.options.strategy === 'fixed',
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      uh(
        Object.assign({}, c, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: o,
          roundOffsets: l,
        })
      )
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        uh(
          Object.assign({}, c, {
            offsets: t.modifiersData.arrow,
            position: 'absolute',
            adaptive: !1,
            roundOffsets: l,
          })
        )
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      'data-popper-placement': t.placement,
    }));
}
const lE = {
  name: 'computeStyles',
  enabled: !0,
  phase: 'beforeWrite',
  fn: sE,
  data: {},
};
var ro = { passive: !0 };
function cE(e) {
  var t = e.state,
    r = e.instance,
    n = e.options,
    a = n.scroll,
    i = a === void 0 ? !0 : a,
    o = n.resize,
    s = o === void 0 ? !0 : o,
    l = hr(t.elements.popper),
    c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    i &&
      c.forEach(function (u) {
        u.addEventListener('scroll', r.update, ro);
      }),
    s && l.addEventListener('resize', r.update, ro),
    function () {
      i &&
        c.forEach(function (u) {
          u.removeEventListener('scroll', r.update, ro);
        }),
        s && l.removeEventListener('resize', r.update, ro);
    }
  );
}
const uE = {
  name: 'eventListeners',
  enabled: !0,
  phase: 'write',
  fn: function () {},
  effect: cE,
  data: {},
};
var fE = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
function go(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return fE[t];
  });
}
var dE = { start: 'end', end: 'start' };
function fh(e) {
  return e.replace(/start|end/g, function (t) {
    return dE[t];
  });
}
function nd(e) {
  var t = hr(e),
    r = t.pageXOffset,
    n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function ad(e) {
  return va(hn(e)).left + nd(e).scrollLeft;
}
function pE(e, t) {
  var r = hr(e),
    n = hn(e),
    a = r.visualViewport,
    i = n.clientWidth,
    o = n.clientHeight,
    s = 0,
    l = 0;
  if (a) {
    (i = a.width), (o = a.height);
    var c = Sb();
    (c || (!c && t === 'fixed')) && ((s = a.offsetLeft), (l = a.offsetTop));
  }
  return { width: i, height: o, x: s + ad(e), y: l };
}
function hE(e) {
  var t,
    r = hn(e),
    n = nd(e),
    a = (t = e.ownerDocument) == null ? void 0 : t.body,
    i = kn(
      r.scrollWidth,
      r.clientWidth,
      a ? a.scrollWidth : 0,
      a ? a.clientWidth : 0
    ),
    o = kn(
      r.scrollHeight,
      r.clientHeight,
      a ? a.scrollHeight : 0,
      a ? a.clientHeight : 0
    ),
    s = -n.scrollLeft + ad(e),
    l = -n.scrollTop;
  return (
    Xr(a || r).direction === 'rtl' &&
      (s += kn(r.clientWidth, a ? a.clientWidth : 0) - i),
    { width: i, height: o, x: s, y: l }
  );
}
function id(e) {
  var t = Xr(e),
    r = t.overflow,
    n = t.overflowX,
    a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + n);
}
function Pb(e) {
  return ['html', 'body', '#document'].indexOf(Mr(e)) >= 0
    ? e.ownerDocument.body
    : lr(e) && id(e)
    ? e
    : Pb(nl(e));
}
function ci(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = Pb(e),
    a = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    i = hr(n),
    o = a ? [i].concat(i.visualViewport || [], id(n) ? n : []) : n,
    s = t.concat(o);
  return a ? s : s.concat(ci(nl(o)));
}
function eu(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function vE(e, t) {
  var r = va(e, !1, t === 'fixed');
  return (
    (r.top = r.top + e.clientTop),
    (r.left = r.left + e.clientLeft),
    (r.bottom = r.top + e.clientHeight),
    (r.right = r.left + e.clientWidth),
    (r.width = e.clientWidth),
    (r.height = e.clientHeight),
    (r.x = r.left),
    (r.y = r.top),
    r
  );
}
function dh(e, t, r) {
  return t === _b ? eu(pE(e, r)) : In(t) ? vE(t, r) : eu(hE(hn(e)));
}
function mE(e) {
  var t = ci(nl(e)),
    r = ['absolute', 'fixed'].indexOf(Xr(e).position) >= 0,
    n = r && lr(e) ? Ni(e) : e;
  return In(n)
    ? t.filter(function (a) {
        return In(a) && Eb(a, n) && Mr(a) !== 'body';
      })
    : [];
}
function gE(e, t, r, n) {
  var a = t === 'clippingParents' ? mE(e) : [].concat(t),
    i = [].concat(a, [r]),
    o = i[0],
    s = i.reduce(function (l, c) {
      var u = dh(e, c, n);
      return (
        (l.top = kn(u.top, l.top)),
        (l.right = qo(u.right, l.right)),
        (l.bottom = qo(u.bottom, l.bottom)),
        (l.left = kn(u.left, l.left)),
        l
      );
    }, dh(e, o, n));
  return (
    (s.width = s.right - s.left),
    (s.height = s.bottom - s.top),
    (s.x = s.left),
    (s.y = s.top),
    s
  );
}
function kb(e) {
  var t = e.reference,
    r = e.element,
    n = e.placement,
    a = n ? Pr(n) : null,
    i = n ? ma(n) : null,
    o = t.x + t.width / 2 - r.width / 2,
    s = t.y + t.height / 2 - r.height / 2,
    l;
  switch (a) {
    case Ut:
      l = { x: o, y: t.y - r.height };
      break;
    case ur:
      l = { x: o, y: t.y + t.height };
      break;
    case fr:
      l = { x: t.x + t.width, y: s };
      break;
    case Ht:
      l = { x: t.x - r.width, y: s };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var c = a ? rd(a) : null;
  if (c != null) {
    var u = c === 'y' ? 'height' : 'width';
    switch (i) {
      case pa:
        l[c] = l[c] - (t[u] / 2 - r[u] / 2);
        break;
      case wi:
        l[c] = l[c] + (t[u] / 2 - r[u] / 2);
        break;
    }
  }
  return l;
}
function _i(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = n === void 0 ? e.placement : n,
    i = r.strategy,
    o = i === void 0 ? e.strategy : i,
    s = r.boundary,
    l = s === void 0 ? NS : s,
    c = r.rootBoundary,
    u = c === void 0 ? _b : c,
    f = r.elementContext,
    d = f === void 0 ? za : f,
    h = r.altBoundary,
    v = h === void 0 ? !1 : h,
    p = r.padding,
    m = p === void 0 ? 0 : p,
    g = Ab(typeof m != 'number' ? m : Cb(m, ji)),
    _ = d === za ? LS : za,
    x = e.rects.popper,
    b = e.elements[v ? _ : d],
    w = gE(In(b) ? b : b.contextElement || hn(e.elements.popper), l, u, o),
    O = va(e.elements.reference),
    S = kb({ reference: O, element: x, strategy: 'absolute', placement: a }),
    $ = eu(Object.assign({}, x, S)),
    A = d === za ? $ : O,
    P = {
      top: w.top - A.top + g.top,
      bottom: A.bottom - w.bottom + g.bottom,
      left: w.left - A.left + g.left,
      right: A.right - w.right + g.right,
    },
    C = e.modifiersData.offset;
  if (d === za && C) {
    var k = C[a];
    Object.keys(P).forEach(function (T) {
      var D = [fr, ur].indexOf(T) >= 0 ? 1 : -1,
        j = [Ut, ur].indexOf(T) >= 0 ? 'y' : 'x';
      P[T] += k[j] * D;
    });
  }
  return P;
}
function yE(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = r.boundary,
    i = r.rootBoundary,
    o = r.padding,
    s = r.flipVariations,
    l = r.allowedAutoPlacements,
    c = l === void 0 ? Ob : l,
    u = ma(n),
    f = u
      ? s
        ? lh
        : lh.filter(function (v) {
            return ma(v) === u;
          })
      : ji,
    d = f.filter(function (v) {
      return c.indexOf(v) >= 0;
    });
  d.length === 0 && (d = f);
  var h = d.reduce(function (v, p) {
    return (
      (v[p] = _i(e, { placement: p, boundary: a, rootBoundary: i, padding: o })[
        Pr(p)
      ]),
      v
    );
  }, {});
  return Object.keys(h).sort(function (v, p) {
    return h[v] - h[p];
  });
}
function bE(e) {
  if (Pr(e) === Qf) return [];
  var t = go(e);
  return [fh(e), t, fh(t)];
}
function xE(e) {
  var t = e.state,
    r = e.options,
    n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (
      var a = r.mainAxis,
        i = a === void 0 ? !0 : a,
        o = r.altAxis,
        s = o === void 0 ? !0 : o,
        l = r.fallbackPlacements,
        c = r.padding,
        u = r.boundary,
        f = r.rootBoundary,
        d = r.altBoundary,
        h = r.flipVariations,
        v = h === void 0 ? !0 : h,
        p = r.allowedAutoPlacements,
        m = t.options.placement,
        g = Pr(m),
        _ = g === m,
        x = l || (_ || !v ? [go(m)] : bE(m)),
        b = [m].concat(x).reduce(function (Se, le) {
          return Se.concat(
            Pr(le) === Qf
              ? yE(t, {
                  placement: le,
                  boundary: u,
                  rootBoundary: f,
                  padding: c,
                  flipVariations: v,
                  allowedAutoPlacements: p,
                })
              : le
          );
        }, []),
        w = t.rects.reference,
        O = t.rects.popper,
        S = new Map(),
        $ = !0,
        A = b[0],
        P = 0;
      P < b.length;
      P++
    ) {
      var C = b[P],
        k = Pr(C),
        T = ma(C) === pa,
        D = [Ut, ur].indexOf(k) >= 0,
        j = D ? 'width' : 'height',
        R = _i(t, {
          placement: C,
          boundary: u,
          rootBoundary: f,
          altBoundary: d,
          padding: c,
        }),
        N = D ? (T ? fr : Ht) : T ? ur : Ut;
      w[j] > O[j] && (N = go(N));
      var z = go(N),
        M = [];
      if (
        (i && M.push(R[k] <= 0),
        s && M.push(R[N] <= 0, R[z] <= 0),
        M.every(function (Se) {
          return Se;
        }))
      ) {
        (A = C), ($ = !1);
        break;
      }
      S.set(C, M);
    }
    if ($)
      for (
        var Y = v ? 3 : 1,
          Z = function (le) {
            var Ee = b.find(function (at) {
              var oe = S.get(at);
              if (oe)
                return oe.slice(0, le).every(function (H) {
                  return H;
                });
            });
            if (Ee) return (A = Ee), 'break';
          },
          ne = Y;
        ne > 0;
        ne--
      ) {
        var ve = Z(ne);
        if (ve === 'break') break;
      }
    t.placement !== A &&
      ((t.modifiersData[n]._skip = !0), (t.placement = A), (t.reset = !0));
  }
}
const wE = {
  name: 'flip',
  enabled: !0,
  phase: 'main',
  fn: xE,
  requiresIfExists: ['offset'],
  data: { _skip: !1 },
};
function ph(e, t, r) {
  return (
    r === void 0 && (r = { x: 0, y: 0 }),
    {
      top: e.top - t.height - r.y,
      right: e.right - t.width + r.x,
      bottom: e.bottom - t.height + r.y,
      left: e.left - t.width - r.x,
    }
  );
}
function hh(e) {
  return [Ut, fr, ur, Ht].some(function (t) {
    return e[t] >= 0;
  });
}
function _E(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    a = t.rects.popper,
    i = t.modifiersData.preventOverflow,
    o = _i(t, { elementContext: 'reference' }),
    s = _i(t, { altBoundary: !0 }),
    l = ph(o, n),
    c = ph(s, a, i),
    u = hh(l),
    f = hh(c);
  (t.modifiersData[r] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: c,
    isReferenceHidden: u,
    hasPopperEscaped: f,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      'data-popper-reference-hidden': u,
      'data-popper-escaped': f,
    }));
}
const OE = {
  name: 'hide',
  enabled: !0,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: _E,
};
function SE(e, t, r) {
  var n = Pr(e),
    a = [Ht, Ut].indexOf(n) >= 0 ? -1 : 1,
    i = typeof r == 'function' ? r(Object.assign({}, t, { placement: e })) : r,
    o = i[0],
    s = i[1];
  return (
    (o = o || 0),
    (s = (s || 0) * a),
    [Ht, fr].indexOf(n) >= 0 ? { x: s, y: o } : { x: o, y: s }
  );
}
function EE(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    a = r.offset,
    i = a === void 0 ? [0, 0] : a,
    o = Ob.reduce(function (u, f) {
      return (u[f] = SE(f, t.rects, i)), u;
    }, {}),
    s = o[t.placement],
    l = s.x,
    c = s.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += l),
    (t.modifiersData.popperOffsets.y += c)),
    (t.modifiersData[n] = o);
}
const $E = {
  name: 'offset',
  enabled: !0,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: EE,
};
function AE(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = kb({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: 'absolute',
    placement: t.placement,
  });
}
const CE = {
  name: 'popperOffsets',
  enabled: !0,
  phase: 'read',
  fn: AE,
  data: {},
};
function PE(e) {
  return e === 'x' ? 'y' : 'x';
}
function kE(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    a = r.mainAxis,
    i = a === void 0 ? !0 : a,
    o = r.altAxis,
    s = o === void 0 ? !1 : o,
    l = r.boundary,
    c = r.rootBoundary,
    u = r.altBoundary,
    f = r.padding,
    d = r.tether,
    h = d === void 0 ? !0 : d,
    v = r.tetherOffset,
    p = v === void 0 ? 0 : v,
    m = _i(t, { boundary: l, rootBoundary: c, padding: f, altBoundary: u }),
    g = Pr(t.placement),
    _ = ma(t.placement),
    x = !_,
    b = rd(g),
    w = PE(b),
    O = t.modifiersData.popperOffsets,
    S = t.rects.reference,
    $ = t.rects.popper,
    A =
      typeof p == 'function'
        ? p(Object.assign({}, t.rects, { placement: t.placement }))
        : p,
    P =
      typeof A == 'number'
        ? { mainAxis: A, altAxis: A }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, A),
    C = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    k = { x: 0, y: 0 };
  if (!!O) {
    if (i) {
      var T,
        D = b === 'y' ? Ut : Ht,
        j = b === 'y' ? ur : fr,
        R = b === 'y' ? 'height' : 'width',
        N = O[b],
        z = N + m[D],
        M = N - m[j],
        Y = h ? -$[R] / 2 : 0,
        Z = _ === pa ? S[R] : $[R],
        ne = _ === pa ? -$[R] : -S[R],
        ve = t.elements.arrow,
        Se = h && ve ? td(ve) : { width: 0, height: 0 },
        le = t.modifiersData['arrow#persistent']
          ? t.modifiersData['arrow#persistent'].padding
          : $b(),
        Ee = le[D],
        at = le[j],
        oe = li(0, S[R], Se[R]),
        H = x ? S[R] / 2 - Y - oe - Ee - P.mainAxis : Z - oe - Ee - P.mainAxis,
        Q = x
          ? -S[R] / 2 + Y + oe + at + P.mainAxis
          : ne + oe + at + P.mainAxis,
        ie = t.elements.arrow && Ni(t.elements.arrow),
        B = ie ? (b === 'y' ? ie.clientTop || 0 : ie.clientLeft || 0) : 0,
        J = (T = C == null ? void 0 : C[b]) != null ? T : 0,
        de = N + H - J - B,
        ce = N + Q - J,
        Pe = li(h ? qo(z, de) : z, N, h ? kn(M, ce) : M);
      (O[b] = Pe), (k[b] = Pe - N);
    }
    if (s) {
      var it,
        F = b === 'x' ? Ut : Ht,
        G = b === 'x' ? ur : fr,
        q = O[w],
        ee = w === 'y' ? 'height' : 'width',
        se = q + m[F],
        Ae = q - m[G],
        we = [Ut, Ht].indexOf(g) !== -1,
        me = (it = C == null ? void 0 : C[w]) != null ? it : 0,
        fe = we ? se : q - S[ee] - $[ee] - me + P.altAxis,
        ye = we ? q + S[ee] + $[ee] - me - P.altAxis : Ae,
        He = h && we ? eE(fe, q, ye) : li(h ? fe : se, q, h ? ye : Ae);
      (O[w] = He), (k[w] = He - q);
    }
    t.modifiersData[n] = k;
  }
}
const TE = {
  name: 'preventOverflow',
  enabled: !0,
  phase: 'main',
  fn: kE,
  requiresIfExists: ['offset'],
};
function ME(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function IE(e) {
  return e === hr(e) || !lr(e) ? nd(e) : ME(e);
}
function RE(e) {
  var t = e.getBoundingClientRect(),
    r = ha(t.width) / e.offsetWidth || 1,
    n = ha(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function DE(e, t, r) {
  r === void 0 && (r = !1);
  var n = lr(t),
    a = lr(t) && RE(t),
    i = hn(t),
    o = va(e, a, r),
    s = { scrollLeft: 0, scrollTop: 0 },
    l = { x: 0, y: 0 };
  return (
    (n || (!n && !r)) &&
      ((Mr(t) !== 'body' || id(i)) && (s = IE(t)),
      lr(t)
        ? ((l = va(t, !0)), (l.x += t.clientLeft), (l.y += t.clientTop))
        : i && (l.x = ad(i))),
    {
      x: o.left + s.scrollLeft - l.x,
      y: o.top + s.scrollTop - l.y,
      width: o.width,
      height: o.height,
    }
  );
}
function jE(e) {
  var t = new Map(),
    r = new Set(),
    n = [];
  e.forEach(function (i) {
    t.set(i.name, i);
  });
  function a(i) {
    r.add(i.name);
    var o = [].concat(i.requires || [], i.requiresIfExists || []);
    o.forEach(function (s) {
      if (!r.has(s)) {
        var l = t.get(s);
        l && a(l);
      }
    }),
      n.push(i);
  }
  return (
    e.forEach(function (i) {
      r.has(i.name) || a(i);
    }),
    n
  );
}
function NE(e) {
  var t = jE(e);
  return YS.reduce(function (r, n) {
    return r.concat(
      t.filter(function (a) {
        return a.phase === n;
      })
    );
  }, []);
}
function LE(e) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (r) {
          Promise.resolve().then(function () {
            (t = void 0), r(e());
          });
        })),
      t
    );
  };
}
function BE(e) {
  var t = e.reduce(function (r, n) {
    var a = r[n.name];
    return (
      (r[n.name] = a
        ? Object.assign({}, a, n, {
            options: Object.assign({}, a.options, n.options),
            data: Object.assign({}, a.data, n.data),
          })
        : n),
      r
    );
  }, {});
  return Object.keys(t).map(function (r) {
    return t[r];
  });
}
var vh = { placement: 'bottom', modifiers: [], strategy: 'absolute' };
function mh() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == 'function');
  });
}
function FE(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    a = t.defaultOptions,
    i = a === void 0 ? vh : a;
  return function (s, l, c) {
    c === void 0 && (c = i);
    var u = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, vh, i),
        modifiersData: {},
        elements: { reference: s, popper: l },
        attributes: {},
        styles: {},
      },
      f = [],
      d = !1,
      h = {
        state: u,
        setOptions: function (g) {
          var _ = typeof g == 'function' ? g(u.options) : g;
          p(),
            (u.options = Object.assign({}, i, u.options, _)),
            (u.scrollParents = {
              reference: In(s)
                ? ci(s)
                : s.contextElement
                ? ci(s.contextElement)
                : [],
              popper: ci(l),
            });
          var x = NE(BE([].concat(n, u.options.modifiers)));
          return (
            (u.orderedModifiers = x.filter(function (b) {
              return b.enabled;
            })),
            v(),
            h.update()
          );
        },
        forceUpdate: function () {
          if (!d) {
            var g = u.elements,
              _ = g.reference,
              x = g.popper;
            if (!!mh(_, x)) {
              (u.rects = {
                reference: DE(_, Ni(x), u.options.strategy === 'fixed'),
                popper: td(x),
              }),
                (u.reset = !1),
                (u.placement = u.options.placement),
                u.orderedModifiers.forEach(function (P) {
                  return (u.modifiersData[P.name] = Object.assign({}, P.data));
                });
              for (var b = 0; b < u.orderedModifiers.length; b++) {
                if (u.reset === !0) {
                  (u.reset = !1), (b = -1);
                  continue;
                }
                var w = u.orderedModifiers[b],
                  O = w.fn,
                  S = w.options,
                  $ = S === void 0 ? {} : S,
                  A = w.name;
                typeof O == 'function' &&
                  (u = O({ state: u, options: $, name: A, instance: h }) || u);
              }
            }
          }
        },
        update: LE(function () {
          return new Promise(function (m) {
            h.forceUpdate(), m(u);
          });
        }),
        destroy: function () {
          p(), (d = !0);
        },
      };
    if (!mh(s, l)) return h;
    h.setOptions(c).then(function (m) {
      !d && c.onFirstUpdate && c.onFirstUpdate(m);
    });
    function v() {
      u.orderedModifiers.forEach(function (m) {
        var g = m.name,
          _ = m.options,
          x = _ === void 0 ? {} : _,
          b = m.effect;
        if (typeof b == 'function') {
          var w = b({ state: u, name: g, instance: h, options: x }),
            O = function () {};
          f.push(w || O);
        }
      });
    }
    function p() {
      f.forEach(function (m) {
        return m();
      }),
        (f = []);
    }
    return h;
  };
}
var zE = [uE, CE, lE, JS, $E, wE, TE, aE, OE],
  WE = FE({ defaultModifiers: zE });
function UE(e) {
  return Be('MuiPopperUnstyled', e);
}
We('MuiPopperUnstyled', ['root']);
const HE = [
    'anchorEl',
    'children',
    'component',
    'components',
    'componentsProps',
    'direction',
    'disablePortal',
    'modifiers',
    'open',
    'ownerState',
    'placement',
    'popperOptions',
    'popperRef',
    'TransitionProps',
  ],
  VE = [
    'anchorEl',
    'children',
    'container',
    'direction',
    'disablePortal',
    'keepMounted',
    'modifiers',
    'open',
    'placement',
    'popperOptions',
    'popperRef',
    'style',
    'transition',
  ];
function GE(e, t) {
  if (t === 'ltr') return e;
  switch (e) {
    case 'bottom-end':
      return 'bottom-start';
    case 'bottom-start':
      return 'bottom-end';
    case 'top-end':
      return 'top-start';
    case 'top-start':
      return 'top-end';
    default:
      return e;
  }
}
function tu(e) {
  return typeof e == 'function' ? e() : e;
}
const qE = () => Le({ root: ['root'] }, UE, {}),
  YE = {},
  KE = E.exports.forwardRef(function (t, r) {
    var n;
    const {
        anchorEl: a,
        children: i,
        component: o,
        components: s = {},
        componentsProps: l = {},
        direction: c,
        disablePortal: u,
        modifiers: f,
        open: d,
        ownerState: h,
        placement: v,
        popperOptions: p,
        popperRef: m,
        TransitionProps: g,
      } = t,
      _ = $e(t, HE),
      x = E.exports.useRef(null),
      b = qr(x, r),
      w = E.exports.useRef(null),
      O = qr(w, m),
      S = E.exports.useRef(O);
    ua(() => {
      S.current = O;
    }, [O]),
      E.exports.useImperativeHandle(m, () => w.current, []);
    const $ = GE(v, c),
      [A, P] = E.exports.useState($);
    E.exports.useEffect(() => {
      w.current && w.current.forceUpdate();
    }),
      ua(() => {
        if (!a || !d) return;
        const j = (z) => {
          P(z.placement);
        };
        tu(a);
        let R = [
          { name: 'preventOverflow', options: { altBoundary: u } },
          { name: 'flip', options: { altBoundary: u } },
          {
            name: 'onUpdate',
            enabled: !0,
            phase: 'afterWrite',
            fn: ({ state: z }) => {
              j(z);
            },
          },
        ];
        f != null && (R = R.concat(f)),
          p && p.modifiers != null && (R = R.concat(p.modifiers));
        const N = WE(
          tu(a),
          x.current,
          I({ placement: $ }, p, { modifiers: R })
        );
        return (
          S.current(N),
          () => {
            N.destroy(), S.current(null);
          }
        );
      }, [a, u, f, d, p, $]);
    const C = { placement: A };
    g !== null && (C.TransitionProps = g);
    const k = qE(),
      T = (n = o != null ? o : s.Root) != null ? n : 'div',
      D = fw({
        elementType: T,
        externalSlotProps: l.root,
        externalForwardedProps: _,
        additionalProps: { role: 'tooltip', ref: b },
        ownerState: I({}, t, h),
        className: k.root,
      });
    return L.exports.jsx(
      T,
      I({}, D, { children: typeof i == 'function' ? i(C) : i })
    );
  }),
  XE = E.exports.forwardRef(function (t, r) {
    const {
        anchorEl: n,
        children: a,
        container: i,
        direction: o = 'ltr',
        disablePortal: s = !1,
        keepMounted: l = !1,
        modifiers: c,
        open: u,
        placement: f = 'bottom',
        popperOptions: d = YE,
        popperRef: h,
        style: v,
        transition: p = !1,
      } = t,
      m = $e(t, VE),
      [g, _] = E.exports.useState(!0),
      x = () => {
        _(!1);
      },
      b = () => {
        _(!0);
      };
    if (!l && !u && (!p || g)) return null;
    const w = i || (n ? _y(tu(n)).body : void 0);
    return L.exports.jsx(uw, {
      disablePortal: s,
      container: w,
      children: L.exports.jsx(
        KE,
        I(
          {
            anchorEl: n,
            direction: o,
            disablePortal: s,
            modifiers: c,
            ref: r,
            open: p ? !g : u,
            placement: f,
            popperOptions: d,
            popperRef: h,
          },
          m,
          {
            style: I(
              {
                position: 'fixed',
                top: 0,
                left: 0,
                display: !u && l && (!p || g) ? 'none' : null,
              },
              v
            ),
            TransitionProps: p ? { in: u, onEnter: x, onExited: b } : null,
            children: a,
          }
        )
      ),
    });
  }),
  JE = XE,
  ZE = IS({
    createStyledComponent: ae('div', {
      name: 'MuiContainer',
      slot: 'Root',
      overridesResolver: (e, t) => {
        const { ownerState: r } = e;
        return [
          t.root,
          t[`maxWidth${X(String(r.maxWidth))}`],
          r.fixed && t.fixed,
          r.disableGutters && t.disableGutters,
        ];
      },
    }),
    useThemeProps: (e) => je({ props: e, name: 'MuiContainer' }),
  }),
  Tb = ZE,
  QE = Oy(),
  e$ = ES({
    defaultTheme: QE,
    defaultClassName: 'MuiBox-root',
    generateClassName: Sy.generate,
  }),
  Ne = e$,
  t$ = {
    configure: (e) => {
      console.warn(
        [
          'MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.',
          '',
          "You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead",
          '',
          'The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401',
          '',
          'The updated documentation: https://mui.com/guides/classname-generator/',
        ].join(`
`)
      ),
        Sy.configure(e);
    },
  },
  r$ = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        unstable_ClassNameGenerator: t$,
        capitalize: X,
        createChainedFunction: dw,
        createSvgIcon: pn,
        debounce: Ey,
        deprecatedPropType: wS,
        isMuiElement: $y,
        ownerDocument: _y,
        ownerWindow: Lf,
        requirePropFactory: _S,
        setRef: wy,
        unstable_useEnhancedEffect: ua,
        unstable_useId: Nf,
        unsupportedProp: OS,
        useControlled: mo,
        useEventCallback: ti,
        useForkRef: qr,
        useIsFocusVisible: pw,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  n$ = [
    'addEndListener',
    'appear',
    'children',
    'container',
    'direction',
    'easing',
    'in',
    'onEnter',
    'onEntered',
    'onEntering',
    'onExit',
    'onExited',
    'onExiting',
    'style',
    'timeout',
    'TransitionComponent',
  ];
function a$(e, t, r) {
  const n = t.getBoundingClientRect(),
    a = r && r.getBoundingClientRect(),
    i = Lf(t);
  let o;
  if (t.fakeTransform) o = t.fakeTransform;
  else {
    const c = i.getComputedStyle(t);
    o =
      c.getPropertyValue('-webkit-transform') ||
      c.getPropertyValue('transform');
  }
  let s = 0,
    l = 0;
  if (o && o !== 'none' && typeof o == 'string') {
    const c = o.split('(')[1].split(')')[0].split(',');
    (s = parseInt(c[4], 10)), (l = parseInt(c[5], 10));
  }
  return e === 'left'
    ? a
      ? `translateX(${a.right + s - n.left}px)`
      : `translateX(${i.innerWidth + s - n.left}px)`
    : e === 'right'
    ? a
      ? `translateX(-${n.right - a.left - s}px)`
      : `translateX(-${n.left + n.width - s}px)`
    : e === 'up'
    ? a
      ? `translateY(${a.bottom + l - n.top}px)`
      : `translateY(${i.innerHeight + l - n.top}px)`
    : a
    ? `translateY(-${n.top - a.top + n.height - l}px)`
    : `translateY(-${n.top + n.height - l}px)`;
}
function i$(e) {
  return typeof e == 'function' ? e() : e;
}
function no(e, t, r) {
  const n = i$(r),
    a = a$(e, t, n);
  a && ((t.style.webkitTransform = a), (t.style.transform = a));
}
const o$ = E.exports.forwardRef(function (t, r) {
    const n = Ln(),
      a = {
        enter: n.transitions.easing.easeOut,
        exit: n.transitions.easing.sharp,
      },
      i = {
        enter: n.transitions.duration.enteringScreen,
        exit: n.transitions.duration.leavingScreen,
      },
      {
        addEndListener: o,
        appear: s = !0,
        children: l,
        container: c,
        direction: u = 'down',
        easing: f = a,
        in: d,
        onEnter: h,
        onEntered: v,
        onEntering: p,
        onExit: m,
        onExited: g,
        onExiting: _,
        style: x,
        timeout: b = i,
        TransitionComponent: w = hw,
      } = t,
      O = $e(t, n$),
      S = E.exports.useRef(null),
      $ = qr(l.ref, S),
      A = qr($, r),
      P = (M) => (Y) => {
        M && (Y === void 0 ? M(S.current) : M(S.current, Y));
      },
      C = P((M, Y) => {
        no(u, M, c), vw(M), h && h(M, Y);
      }),
      k = P((M, Y) => {
        const Z = Cp({ timeout: b, style: x, easing: f }, { mode: 'enter' });
        (M.style.webkitTransition = n.transitions.create(
          '-webkit-transform',
          I({}, Z)
        )),
          (M.style.transition = n.transitions.create('transform', I({}, Z))),
          (M.style.webkitTransform = 'none'),
          (M.style.transform = 'none'),
          p && p(M, Y);
      }),
      T = P(v),
      D = P(_),
      j = P((M) => {
        const Y = Cp({ timeout: b, style: x, easing: f }, { mode: 'exit' });
        (M.style.webkitTransition = n.transitions.create(
          '-webkit-transform',
          Y
        )),
          (M.style.transition = n.transitions.create('transform', Y)),
          no(u, M, c),
          m && m(M);
      }),
      R = P((M) => {
        (M.style.webkitTransition = ''), (M.style.transition = ''), g && g(M);
      }),
      N = (M) => {
        o && o(S.current, M);
      },
      z = E.exports.useCallback(() => {
        S.current && no(u, S.current, c);
      }, [u, c]);
    return (
      E.exports.useEffect(() => {
        if (d || u === 'down' || u === 'right') return;
        const M = Ey(() => {
            S.current && no(u, S.current, c);
          }),
          Y = Lf(S.current);
        return (
          Y.addEventListener('resize', M),
          () => {
            M.clear(), Y.removeEventListener('resize', M);
          }
        );
      }, [u, d, c]),
      E.exports.useEffect(() => {
        d || z();
      }, [d, z]),
      L.exports.jsx(
        w,
        I(
          {
            nodeRef: S,
            onEnter: C,
            onEntered: T,
            onEntering: k,
            onExit: j,
            onExited: R,
            onExiting: D,
            addEndListener: N,
            appear: s,
            in: d,
            timeout: b,
          },
          O,
          {
            children: (M, Y) =>
              E.exports.cloneElement(
                l,
                I(
                  {
                    ref: A,
                    style: I(
                      { visibility: M === 'exited' && !d ? 'hidden' : void 0 },
                      x,
                      l.props.style
                    ),
                  },
                  Y
                )
              ),
          }
        )
      )
    );
  }),
  s$ = o$;
function l$(e) {
  return Be('MuiDrawer', e);
}
We('MuiDrawer', [
  'root',
  'docked',
  'paper',
  'paperAnchorLeft',
  'paperAnchorRight',
  'paperAnchorTop',
  'paperAnchorBottom',
  'paperAnchorDockedLeft',
  'paperAnchorDockedRight',
  'paperAnchorDockedTop',
  'paperAnchorDockedBottom',
  'modal',
]);
const c$ = ['BackdropProps'],
  u$ = [
    'anchor',
    'BackdropProps',
    'children',
    'className',
    'elevation',
    'hideBackdrop',
    'ModalProps',
    'onClose',
    'open',
    'PaperProps',
    'SlideProps',
    'TransitionComponent',
    'transitionDuration',
    'variant',
  ],
  Mb = (e, t) => {
    const { ownerState: r } = e;
    return [
      t.root,
      (r.variant === 'permanent' || r.variant === 'persistent') && t.docked,
      t.modal,
    ];
  },
  f$ = (e) => {
    const { classes: t, anchor: r, variant: n } = e,
      a = {
        root: ['root'],
        docked: [(n === 'permanent' || n === 'persistent') && 'docked'],
        modal: ['modal'],
        paper: [
          'paper',
          `paperAnchor${X(r)}`,
          n !== 'temporary' && `paperAnchorDocked${X(r)}`,
        ],
      };
    return Le(a, l$, t);
  },
  d$ = ae(Ay, { name: 'MuiDrawer', slot: 'Root', overridesResolver: Mb })(
    ({ theme: e }) => ({ zIndex: (e.vars || e).zIndex.drawer })
  ),
  gh = ae('div', {
    shouldForwardProp: Bf,
    name: 'MuiDrawer',
    slot: 'Docked',
    skipVariantsResolver: !1,
    overridesResolver: Mb,
  })({ flex: '0 0 auto' }),
  p$ = ae(jr, {
    name: 'MuiDrawer',
    slot: 'Paper',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.paper,
        t[`paperAnchor${X(r.anchor)}`],
        r.variant !== 'temporary' && t[`paperAnchorDocked${X(r.anchor)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    I(
      {
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        flex: '1 0 auto',
        zIndex: (e.vars || e).zIndex.drawer,
        WebkitOverflowScrolling: 'touch',
        position: 'fixed',
        top: 0,
        outline: 0,
      },
      t.anchor === 'left' && { left: 0 },
      t.anchor === 'top' && {
        top: 0,
        left: 0,
        right: 0,
        height: 'auto',
        maxHeight: '100%',
      },
      t.anchor === 'right' && { right: 0 },
      t.anchor === 'bottom' && {
        top: 'auto',
        left: 0,
        bottom: 0,
        right: 0,
        height: 'auto',
        maxHeight: '100%',
      },
      t.anchor === 'left' &&
        t.variant !== 'temporary' && {
          borderRight: `1px solid ${(e.vars || e).palette.divider}`,
        },
      t.anchor === 'top' &&
        t.variant !== 'temporary' && {
          borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
        },
      t.anchor === 'right' &&
        t.variant !== 'temporary' && {
          borderLeft: `1px solid ${(e.vars || e).palette.divider}`,
        },
      t.anchor === 'bottom' &&
        t.variant !== 'temporary' && {
          borderTop: `1px solid ${(e.vars || e).palette.divider}`,
        }
    )
  ),
  Ib = { left: 'right', right: 'left', top: 'down', bottom: 'up' };
function h$(e) {
  return ['left', 'right'].indexOf(e) !== -1;
}
function v$(e, t) {
  return e.direction === 'rtl' && h$(t) ? Ib[t] : t;
}
const m$ = E.exports.forwardRef(function (t, r) {
    const n = je({ props: t, name: 'MuiDrawer' }),
      a = Ln(),
      i = {
        enter: a.transitions.duration.enteringScreen,
        exit: a.transitions.duration.leavingScreen,
      },
      {
        anchor: o = 'left',
        BackdropProps: s,
        children: l,
        className: c,
        elevation: u = 16,
        hideBackdrop: f = !1,
        ModalProps: { BackdropProps: d } = {},
        onClose: h,
        open: v = !1,
        PaperProps: p = {},
        SlideProps: m,
        TransitionComponent: g = s$,
        transitionDuration: _ = i,
        variant: x = 'temporary',
      } = n,
      b = $e(n.ModalProps, c$),
      w = $e(n, u$),
      O = E.exports.useRef(!1);
    E.exports.useEffect(() => {
      O.current = !0;
    }, []);
    const S = v$(a, o),
      A = I({}, n, { anchor: o, elevation: u, open: v, variant: x }, w),
      P = f$(A),
      C = L.exports.jsx(
        p$,
        I({ elevation: x === 'temporary' ? u : 0, square: !0 }, p, {
          className: he(P.paper, p.className),
          ownerState: A,
          children: l,
        })
      );
    if (x === 'permanent')
      return L.exports.jsx(
        gh,
        I({ className: he(P.root, P.docked, c), ownerState: A, ref: r }, w, {
          children: C,
        })
      );
    const k = L.exports.jsx(
      g,
      I({ in: v, direction: Ib[S], timeout: _, appear: O.current }, m, {
        children: C,
      })
    );
    return x === 'persistent'
      ? L.exports.jsx(
          gh,
          I({ className: he(P.root, P.docked, c), ownerState: A, ref: r }, w, {
            children: k,
          })
        )
      : L.exports.jsx(
          d$,
          I(
            {
              BackdropProps: I({}, s, d, { transitionDuration: _ }),
              className: he(P.root, P.modal, c),
              open: v,
              ownerState: A,
              onClose: h,
              hideBackdrop: f,
              ref: r,
            },
            w,
            b,
            { children: k }
          )
        );
  }),
  g$ = m$;
function y$(e) {
  return Be('MuiDivider', e);
}
const b$ = We('MuiDivider', [
    'root',
    'absolute',
    'fullWidth',
    'inset',
    'middle',
    'flexItem',
    'light',
    'vertical',
    'withChildren',
    'withChildrenVertical',
    'textAlignRight',
    'textAlignLeft',
    'wrapper',
    'wrapperVertical',
  ]),
  yh = b$,
  x$ = [
    'absolute',
    'children',
    'className',
    'component',
    'flexItem',
    'light',
    'orientation',
    'role',
    'textAlign',
    'variant',
  ],
  w$ = (e) => {
    const {
      absolute: t,
      children: r,
      classes: n,
      flexItem: a,
      light: i,
      orientation: o,
      textAlign: s,
      variant: l,
    } = e;
    return Le(
      {
        root: [
          'root',
          t && 'absolute',
          l,
          i && 'light',
          o === 'vertical' && 'vertical',
          a && 'flexItem',
          r && 'withChildren',
          r && o === 'vertical' && 'withChildrenVertical',
          s === 'right' && o !== 'vertical' && 'textAlignRight',
          s === 'left' && o !== 'vertical' && 'textAlignLeft',
        ],
        wrapper: ['wrapper', o === 'vertical' && 'wrapperVertical'],
      },
      y$,
      n
    );
  },
  _$ = ae('div', {
    name: 'MuiDivider',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        r.absolute && t.absolute,
        t[r.variant],
        r.light && t.light,
        r.orientation === 'vertical' && t.vertical,
        r.flexItem && t.flexItem,
        r.children && t.withChildren,
        r.children && r.orientation === 'vertical' && t.withChildrenVertical,
        r.textAlign === 'right' &&
          r.orientation !== 'vertical' &&
          t.textAlignRight,
        r.textAlign === 'left' &&
          r.orientation !== 'vertical' &&
          t.textAlignLeft,
      ];
    },
  })(
    ({ theme: e, ownerState: t }) =>
      I(
        {
          margin: 0,
          flexShrink: 0,
          borderWidth: 0,
          borderStyle: 'solid',
          borderColor: (e.vars || e).palette.divider,
          borderBottomWidth: 'thin',
        },
        t.absolute && {
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
        },
        t.light && {
          borderColor: e.vars
            ? `rgba(${e.vars.palette.dividerChannel} / 0.08)`
            : ke(e.palette.divider, 0.08),
        },
        t.variant === 'inset' && { marginLeft: 72 },
        t.variant === 'middle' &&
          t.orientation === 'horizontal' && {
            marginLeft: e.spacing(2),
            marginRight: e.spacing(2),
          },
        t.variant === 'middle' &&
          t.orientation === 'vertical' && {
            marginTop: e.spacing(1),
            marginBottom: e.spacing(1),
          },
        t.orientation === 'vertical' && {
          height: '100%',
          borderBottomWidth: 0,
          borderRightWidth: 'thin',
        },
        t.flexItem && { alignSelf: 'stretch', height: 'auto' }
      ),
    ({ theme: e, ownerState: t }) =>
      I(
        {},
        t.children && {
          display: 'flex',
          whiteSpace: 'nowrap',
          textAlign: 'center',
          border: 0,
          '&::before, &::after': {
            position: 'relative',
            width: '100%',
            borderTop: `thin solid ${(e.vars || e).palette.divider}`,
            top: '50%',
            content: '""',
            transform: 'translateY(50%)',
          },
        }
      ),
    ({ theme: e, ownerState: t }) =>
      I(
        {},
        t.children &&
          t.orientation === 'vertical' && {
            flexDirection: 'column',
            '&::before, &::after': {
              height: '100%',
              top: '0%',
              left: '50%',
              borderTop: 0,
              borderLeft: `thin solid ${(e.vars || e).palette.divider}`,
              transform: 'translateX(0%)',
            },
          }
      ),
    ({ ownerState: e }) =>
      I(
        {},
        e.textAlign === 'right' &&
          e.orientation !== 'vertical' && {
            '&::before': { width: '90%' },
            '&::after': { width: '10%' },
          },
        e.textAlign === 'left' &&
          e.orientation !== 'vertical' && {
            '&::before': { width: '10%' },
            '&::after': { width: '90%' },
          }
      )
  ),
  O$ = ae('span', {
    name: 'MuiDivider',
    slot: 'Wrapper',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.wrapper, r.orientation === 'vertical' && t.wrapperVertical];
    },
  })(({ theme: e, ownerState: t }) =>
    I(
      {
        display: 'inline-block',
        paddingLeft: `calc(${e.spacing(1)} * 1.2)`,
        paddingRight: `calc(${e.spacing(1)} * 1.2)`,
      },
      t.orientation === 'vertical' && {
        paddingTop: `calc(${e.spacing(1)} * 1.2)`,
        paddingBottom: `calc(${e.spacing(1)} * 1.2)`,
      }
    )
  ),
  S$ = E.exports.forwardRef(function (t, r) {
    const n = je({ props: t, name: 'MuiDivider' }),
      {
        absolute: a = !1,
        children: i,
        className: o,
        component: s = i ? 'div' : 'hr',
        flexItem: l = !1,
        light: c = !1,
        orientation: u = 'horizontal',
        role: f = s !== 'hr' ? 'separator' : void 0,
        textAlign: d = 'center',
        variant: h = 'fullWidth',
      } = n,
      v = $e(n, x$),
      p = I({}, n, {
        absolute: a,
        component: s,
        flexItem: l,
        light: c,
        orientation: u,
        role: f,
        textAlign: d,
        variant: h,
      }),
      m = w$(p);
    return L.exports.jsx(
      _$,
      I(
        { as: s, className: he(m.root, o), role: f, ref: r, ownerState: p },
        v,
        {
          children: i
            ? L.exports.jsx(O$, {
                className: m.wrapper,
                ownerState: p,
                children: i,
              })
            : null,
        }
      )
    );
  }),
  cr = S$,
  _r = y_,
  vt = s_,
  E$ = ae(JE, {
    name: 'MuiPopper',
    slot: 'Root',
    overridesResolver: (e, t) => t.root,
  })({}),
  $$ = E.exports.forwardRef(function (t, r) {
    const n = mw(),
      a = je({ props: t, name: 'MuiPopper' });
    return L.exports.jsx(
      E$,
      I({ direction: n == null ? void 0 : n.direction }, a, { ref: r })
    );
  }),
  Rb = $$;
function A$(e) {
  return Be('MuiListSubheader', e);
}
We('MuiListSubheader', [
  'root',
  'colorPrimary',
  'colorInherit',
  'gutters',
  'inset',
  'sticky',
]);
const C$ = [
    'className',
    'color',
    'component',
    'disableGutters',
    'disableSticky',
    'inset',
  ],
  P$ = (e) => {
    const {
        classes: t,
        color: r,
        disableGutters: n,
        inset: a,
        disableSticky: i,
      } = e,
      o = {
        root: [
          'root',
          r !== 'default' && `color${X(r)}`,
          !n && 'gutters',
          a && 'inset',
          !i && 'sticky',
        ],
      };
    return Le(o, A$, t);
  },
  k$ = ae('li', {
    name: 'MuiListSubheader',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        r.color !== 'default' && t[`color${X(r.color)}`],
        !r.disableGutters && t.gutters,
        r.inset && t.inset,
        !r.disableSticky && t.sticky,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    I(
      {
        boxSizing: 'border-box',
        lineHeight: '48px',
        listStyle: 'none',
        color: (e.vars || e).palette.text.secondary,
        fontFamily: e.typography.fontFamily,
        fontWeight: e.typography.fontWeightMedium,
        fontSize: e.typography.pxToRem(14),
      },
      t.color === 'primary' && { color: (e.vars || e).palette.primary.main },
      t.color === 'inherit' && { color: 'inherit' },
      !t.disableGutters && { paddingLeft: 16, paddingRight: 16 },
      t.inset && { paddingLeft: 72 },
      !t.disableSticky && {
        position: 'sticky',
        top: 0,
        zIndex: 1,
        backgroundColor: (e.vars || e).palette.background.paper,
      }
    )
  ),
  T$ = E.exports.forwardRef(function (t, r) {
    const n = je({ props: t, name: 'MuiListSubheader' }),
      {
        className: a,
        color: i = 'default',
        component: o = 'li',
        disableGutters: s = !1,
        disableSticky: l = !1,
        inset: c = !1,
      } = n,
      u = $e(n, C$),
      f = I({}, n, {
        color: i,
        component: o,
        disableGutters: s,
        disableSticky: l,
        inset: c,
      }),
      d = P$(f);
    return L.exports.jsx(
      k$,
      I({ as: o, className: he(d.root, a), ref: r, ownerState: f }, u)
    );
  }),
  M$ = T$;
function I$(e) {
  return Be('MuiIconButton', e);
}
const R$ = We('MuiIconButton', [
    'root',
    'disabled',
    'colorInherit',
    'colorPrimary',
    'colorSecondary',
    'edgeStart',
    'edgeEnd',
    'sizeSmall',
    'sizeMedium',
    'sizeLarge',
  ]),
  D$ = R$,
  j$ = [
    'edge',
    'children',
    'className',
    'color',
    'disabled',
    'disableFocusRipple',
    'size',
  ],
  N$ = (e) => {
    const { classes: t, disabled: r, color: n, edge: a, size: i } = e,
      o = {
        root: [
          'root',
          r && 'disabled',
          n !== 'default' && `color${X(n)}`,
          a && `edge${X(a)}`,
          `size${X(i)}`,
        ],
      };
    return Le(o, I$, t);
  },
  L$ = ae(fa, {
    name: 'MuiIconButton',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        r.color !== 'default' && t[`color${X(r.color)}`],
        r.edge && t[`edge${X(r.edge)}`],
        t[`size${X(r.size)}`],
      ];
    },
  })(
    ({ theme: e, ownerState: t }) =>
      I(
        {
          textAlign: 'center',
          flex: '0 0 auto',
          fontSize: e.typography.pxToRem(24),
          padding: 8,
          borderRadius: '50%',
          overflow: 'visible',
          color: (e.vars || e).palette.action.active,
          transition: e.transitions.create('background-color', {
            duration: e.transitions.duration.shortest,
          }),
        },
        !t.disableRipple && {
          '&:hover': {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`
              : ke(e.palette.action.active, e.palette.action.hoverOpacity),
            '@media (hover: none)': { backgroundColor: 'transparent' },
          },
        },
        t.edge === 'start' && { marginLeft: t.size === 'small' ? -3 : -12 },
        t.edge === 'end' && { marginRight: t.size === 'small' ? -3 : -12 }
      ),
    ({ theme: e, ownerState: t }) =>
      I(
        {},
        t.color === 'inherit' && { color: 'inherit' },
        t.color !== 'inherit' &&
          t.color !== 'default' &&
          I(
            { color: (e.vars || e).palette[t.color].main },
            !t.disableRipple && {
              '&:hover': {
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                      e.vars.palette.action.hoverOpacity
                    })`
                  : ke(e.palette[t.color].main, e.palette.action.hoverOpacity),
                '@media (hover: none)': { backgroundColor: 'transparent' },
              },
            }
          ),
        t.size === 'small' && {
          padding: 5,
          fontSize: e.typography.pxToRem(18),
        },
        t.size === 'large' && {
          padding: 12,
          fontSize: e.typography.pxToRem(28),
        },
        {
          [`&.${D$.disabled}`]: {
            backgroundColor: 'transparent',
            color: (e.vars || e).palette.action.disabled,
          },
        }
      )
  ),
  B$ = E.exports.forwardRef(function (t, r) {
    const n = je({ props: t, name: 'MuiIconButton' }),
      {
        edge: a = !1,
        children: i,
        className: o,
        color: s = 'default',
        disabled: l = !1,
        disableFocusRipple: c = !1,
        size: u = 'medium',
      } = n,
      f = $e(n, j$),
      d = I({}, n, {
        edge: a,
        color: s,
        disabled: l,
        disableFocusRipple: c,
        size: u,
      }),
      h = N$(d);
    return L.exports.jsx(
      L$,
      I(
        {
          className: he(h.root, o),
          centerRipple: !0,
          focusRipple: !c,
          disabled: l,
          ref: r,
          ownerState: d,
        },
        f,
        { children: i }
      )
    );
  }),
  wr = B$,
  F$ = pn(
    L.exports.jsx('path', {
      d: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z',
    }),
    'Cancel'
  );
function z$(e) {
  return Be('MuiChip', e);
}
const W$ = We('MuiChip', [
    'root',
    'sizeSmall',
    'sizeMedium',
    'colorPrimary',
    'colorSecondary',
    'disabled',
    'clickable',
    'clickableColorPrimary',
    'clickableColorSecondary',
    'deletable',
    'deletableColorPrimary',
    'deletableColorSecondary',
    'outlined',
    'filled',
    'outlinedPrimary',
    'outlinedSecondary',
    'filledPrimary',
    'filledSecondary',
    'avatar',
    'avatarSmall',
    'avatarMedium',
    'avatarColorPrimary',
    'avatarColorSecondary',
    'icon',
    'iconSmall',
    'iconMedium',
    'iconColorPrimary',
    'iconColorSecondary',
    'label',
    'labelSmall',
    'labelMedium',
    'deleteIcon',
    'deleteIconSmall',
    'deleteIconMedium',
    'deleteIconColorPrimary',
    'deleteIconColorSecondary',
    'deleteIconOutlinedColorPrimary',
    'deleteIconOutlinedColorSecondary',
    'deleteIconFilledColorPrimary',
    'deleteIconFilledColorSecondary',
    'focusVisible',
  ]),
  Te = W$,
  U$ = [
    'avatar',
    'className',
    'clickable',
    'color',
    'component',
    'deleteIcon',
    'disabled',
    'icon',
    'label',
    'onClick',
    'onDelete',
    'onKeyDown',
    'onKeyUp',
    'size',
    'variant',
  ],
  H$ = (e) => {
    const {
        classes: t,
        disabled: r,
        size: n,
        color: a,
        onDelete: i,
        clickable: o,
        variant: s,
      } = e,
      l = {
        root: [
          'root',
          s,
          r && 'disabled',
          `size${X(n)}`,
          `color${X(a)}`,
          o && 'clickable',
          o && `clickableColor${X(a)}`,
          i && 'deletable',
          i && `deletableColor${X(a)}`,
          `${s}${X(a)}`,
        ],
        label: ['label', `label${X(n)}`],
        avatar: ['avatar', `avatar${X(n)}`, `avatarColor${X(a)}`],
        icon: ['icon', `icon${X(n)}`, `iconColor${X(a)}`],
        deleteIcon: [
          'deleteIcon',
          `deleteIcon${X(n)}`,
          `deleteIconColor${X(a)}`,
          `deleteIcon${X(s)}Color${X(a)}`,
        ],
      };
    return Le(l, z$, t);
  },
  V$ = ae('div', {
    name: 'MuiChip',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e,
        { color: n, clickable: a, onDelete: i, size: o, variant: s } = r;
      return [
        { [`& .${Te.avatar}`]: t.avatar },
        { [`& .${Te.avatar}`]: t[`avatar${X(o)}`] },
        { [`& .${Te.avatar}`]: t[`avatarColor${X(n)}`] },
        { [`& .${Te.icon}`]: t.icon },
        { [`& .${Te.icon}`]: t[`icon${X(o)}`] },
        { [`& .${Te.icon}`]: t[`iconColor${X(n)}`] },
        { [`& .${Te.deleteIcon}`]: t.deleteIcon },
        { [`& .${Te.deleteIcon}`]: t[`deleteIcon${X(o)}`] },
        { [`& .${Te.deleteIcon}`]: t[`deleteIconColor${X(n)}`] },
        { [`& .${Te.deleteIcon}`]: t[`deleteIcon${X(s)}Color${X(n)}`] },
        t.root,
        t[`size${X(o)}`],
        t[`color${X(n)}`],
        a && t.clickable,
        a && n !== 'default' && t[`clickableColor${X(n)})`],
        i && t.deletable,
        i && n !== 'default' && t[`deletableColor${X(n)}`],
        t[s],
        t[`${s}${X(n)}`],
      ];
    },
  })(
    ({ theme: e, ownerState: t }) => {
      const r = ke(e.palette.text.primary, 0.26),
        n =
          e.palette.mode === 'light'
            ? e.palette.grey[700]
            : e.palette.grey[300];
      return I(
        {
          maxWidth: '100%',
          fontFamily: e.typography.fontFamily,
          fontSize: e.typography.pxToRem(13),
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 32,
          color: (e.vars || e).palette.text.primary,
          backgroundColor: (e.vars || e).palette.action.selected,
          borderRadius: 32 / 2,
          whiteSpace: 'nowrap',
          transition: e.transitions.create(['background-color', 'box-shadow']),
          cursor: 'default',
          outline: 0,
          textDecoration: 'none',
          border: 0,
          padding: 0,
          verticalAlign: 'middle',
          boxSizing: 'border-box',
          [`&.${Te.disabled}`]: {
            opacity: (e.vars || e).palette.action.disabledOpacity,
            pointerEvents: 'none',
          },
          [`& .${Te.avatar}`]: {
            marginLeft: 5,
            marginRight: -6,
            width: 24,
            height: 24,
            color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : n,
            fontSize: e.typography.pxToRem(12),
          },
          [`& .${Te.avatarColorPrimary}`]: {
            color: (e.vars || e).palette.primary.contrastText,
            backgroundColor: (e.vars || e).palette.primary.dark,
          },
          [`& .${Te.avatarColorSecondary}`]: {
            color: (e.vars || e).palette.secondary.contrastText,
            backgroundColor: (e.vars || e).palette.secondary.dark,
          },
          [`& .${Te.avatarSmall}`]: {
            marginLeft: 4,
            marginRight: -4,
            width: 18,
            height: 18,
            fontSize: e.typography.pxToRem(10),
          },
          [`& .${Te.icon}`]: I(
            {
              color: e.vars ? e.vars.palette.Chip.defaultIconColor : n,
              marginLeft: 5,
              marginRight: -6,
            },
            t.size === 'small' && {
              fontSize: 18,
              marginLeft: 4,
              marginRight: -4,
            },
            t.color !== 'default' && { color: 'inherit' }
          ),
          [`& .${Te.deleteIcon}`]: I(
            {
              WebkitTapHighlightColor: 'transparent',
              color: e.vars
                ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)`
                : r,
              fontSize: 22,
              cursor: 'pointer',
              margin: '0 5px 0 -6px',
              '&:hover': {
                color: e.vars
                  ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)`
                  : ke(r, 0.4),
              },
            },
            t.size === 'small' && {
              fontSize: 16,
              marginRight: 4,
              marginLeft: -4,
            },
            t.color !== 'default' && {
              color: e.vars
                ? `rgba(${e.vars.palette[t.color].contrastTextChannel} / 0.7)`
                : ke(e.palette[t.color].contrastText, 0.7),
              '&:hover, &:active': {
                color: (e.vars || e).palette[t.color].contrastText,
              },
            }
          ),
        },
        t.size === 'small' && { height: 24 },
        t.color !== 'default' && {
          backgroundColor: (e.vars || e).palette[t.color].main,
          color: (e.vars || e).palette[t.color].contrastText,
        },
        t.onDelete && {
          [`&.${Te.focusVisible}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${
                  e.vars.palette.action.selectedOpacity +
                  e.vars.palette.action.focusOpacity
                }))`
              : ke(
                  e.palette.action.selected,
                  e.palette.action.selectedOpacity +
                    e.palette.action.focusOpacity
                ),
          },
        },
        t.onDelete &&
          t.color !== 'default' && {
            [`&.${Te.focusVisible}`]: {
              backgroundColor: (e.vars || e).palette[t.color].dark,
            },
          }
      );
    },
    ({ theme: e, ownerState: t }) =>
      I(
        {},
        t.clickable && {
          userSelect: 'none',
          WebkitTapHighlightColor: 'transparent',
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${
                  e.vars.palette.action.selectedOpacity +
                  e.vars.palette.action.hoverOpacity
                }))`
              : ke(
                  e.palette.action.selected,
                  e.palette.action.selectedOpacity +
                    e.palette.action.hoverOpacity
                ),
          },
          [`&.${Te.focusVisible}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${
                  e.vars.palette.action.selectedOpacity +
                  e.vars.palette.action.focusOpacity
                }))`
              : ke(
                  e.palette.action.selected,
                  e.palette.action.selectedOpacity +
                    e.palette.action.focusOpacity
                ),
          },
          '&:active': { boxShadow: (e.vars || e).shadows[1] },
        },
        t.clickable &&
          t.color !== 'default' && {
            [`&:hover, &.${Te.focusVisible}`]: {
              backgroundColor: (e.vars || e).palette[t.color].dark,
            },
          }
      ),
    ({ theme: e, ownerState: t }) =>
      I(
        {},
        t.variant === 'outlined' && {
          backgroundColor: 'transparent',
          border: e.vars
            ? `1px solid ${e.vars.palette.Chip.defaultBorder}`
            : `1px solid ${
                e.palette.mode === 'light'
                  ? e.palette.grey[400]
                  : e.palette.grey[700]
              }`,
          [`&.${Te.clickable}:hover`]: {
            backgroundColor: (e.vars || e).palette.action.hover,
          },
          [`&.${Te.focusVisible}`]: {
            backgroundColor: (e.vars || e).palette.action.focus,
          },
          [`& .${Te.avatar}`]: { marginLeft: 4 },
          [`& .${Te.avatarSmall}`]: { marginLeft: 2 },
          [`& .${Te.icon}`]: { marginLeft: 4 },
          [`& .${Te.iconSmall}`]: { marginLeft: 2 },
          [`& .${Te.deleteIcon}`]: { marginRight: 5 },
          [`& .${Te.deleteIconSmall}`]: { marginRight: 3 },
        },
        t.variant === 'outlined' &&
          t.color !== 'default' && {
            color: (e.vars || e).palette[t.color].main,
            border: `1px solid ${
              e.vars
                ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)`
                : ke(e.palette[t.color].main, 0.7)
            }`,
            [`&.${Te.clickable}:hover`]: {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                    e.vars.palette.action.hoverOpacity
                  })`
                : ke(e.palette[t.color].main, e.palette.action.hoverOpacity),
            },
            [`&.${Te.focusVisible}`]: {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                    e.vars.palette.action.focusOpacity
                  })`
                : ke(e.palette[t.color].main, e.palette.action.focusOpacity),
            },
            [`& .${Te.deleteIcon}`]: {
              color: e.vars
                ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)`
                : ke(e.palette[t.color].main, 0.7),
              '&:hover, &:active': {
                color: (e.vars || e).palette[t.color].main,
              },
            },
          }
      )
  ),
  G$ = ae('span', {
    name: 'MuiChip',
    slot: 'Label',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e,
        { size: n } = r;
      return [t.label, t[`label${X(n)}`]];
    },
  })(({ ownerState: e }) =>
    I(
      {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        paddingLeft: 12,
        paddingRight: 12,
        whiteSpace: 'nowrap',
      },
      e.size === 'small' && { paddingLeft: 8, paddingRight: 8 }
    )
  );
function bh(e) {
  return e.key === 'Backspace' || e.key === 'Delete';
}
const q$ = E.exports.forwardRef(function (t, r) {
    const n = je({ props: t, name: 'MuiChip' }),
      {
        avatar: a,
        className: i,
        clickable: o,
        color: s = 'default',
        component: l,
        deleteIcon: c,
        disabled: u = !1,
        icon: f,
        label: d,
        onClick: h,
        onDelete: v,
        onKeyDown: p,
        onKeyUp: m,
        size: g = 'medium',
        variant: _ = 'filled',
      } = n,
      x = $e(n, U$),
      b = E.exports.useRef(null),
      w = qr(b, r),
      O = (N) => {
        N.stopPropagation(), v && v(N);
      },
      S = (N) => {
        N.currentTarget === N.target && bh(N) && N.preventDefault(), p && p(N);
      },
      $ = (N) => {
        N.currentTarget === N.target &&
          (v && bh(N)
            ? v(N)
            : N.key === 'Escape' && b.current && b.current.blur()),
          m && m(N);
      },
      A = o !== !1 && h ? !0 : o,
      P = A || v ? fa : l || 'div',
      C = I({}, n, {
        component: P,
        disabled: u,
        size: g,
        color: s,
        onDelete: !!v,
        clickable: A,
        variant: _,
      }),
      k = H$(C),
      T =
        P === fa
          ? I(
              { component: l || 'div', focusVisibleClassName: k.focusVisible },
              v && { disableRipple: !0 }
            )
          : {};
    let D = null;
    v &&
      (D =
        c && E.exports.isValidElement(c)
          ? E.exports.cloneElement(c, {
              className: he(c.props.className, k.deleteIcon),
              onClick: O,
            })
          : L.exports.jsx(F$, { className: he(k.deleteIcon), onClick: O }));
    let j = null;
    a &&
      E.exports.isValidElement(a) &&
      (j = E.exports.cloneElement(a, {
        className: he(k.avatar, a.props.className),
      }));
    let R = null;
    return (
      f &&
        E.exports.isValidElement(f) &&
        (R = E.exports.cloneElement(f, {
          className: he(k.icon, f.props.className),
        })),
      L.exports.jsxs(
        V$,
        I(
          {
            as: P,
            className: he(k.root, i),
            disabled: A && u ? !0 : void 0,
            onClick: h,
            onKeyDown: S,
            onKeyUp: $,
            ref: w,
            ownerState: C,
          },
          T,
          x,
          {
            children: [
              j || R,
              L.exports.jsx(G$, {
                className: he(k.label),
                ownerState: C,
                children: d,
              }),
              D,
            ],
          }
        )
      )
    );
  }),
  Y$ = q$,
  Db = pn(
    L.exports.jsx('path', {
      d: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
    }),
    'Close'
  );
function K$(e) {
  return Be('MuiAutocomplete', e);
}
const X$ = We('MuiAutocomplete', [
    'root',
    'fullWidth',
    'focused',
    'focusVisible',
    'tag',
    'tagSizeSmall',
    'tagSizeMedium',
    'hasPopupIcon',
    'hasClearIcon',
    'inputRoot',
    'input',
    'inputFocused',
    'endAdornment',
    'clearIndicator',
    'popupIndicator',
    'popupIndicatorOpen',
    'popper',
    'popperDisablePortal',
    'paper',
    'listbox',
    'loading',
    'noOptions',
    'option',
    'groupLabel',
    'groupUl',
  ]),
  Ce = X$;
var xh, wh;
const J$ = [
    'autoComplete',
    'autoHighlight',
    'autoSelect',
    'blurOnSelect',
    'ChipProps',
    'className',
    'clearIcon',
    'clearOnBlur',
    'clearOnEscape',
    'clearText',
    'closeText',
    'componentsProps',
    'defaultValue',
    'disableClearable',
    'disableCloseOnSelect',
    'disabled',
    'disabledItemsFocusable',
    'disableListWrap',
    'disablePortal',
    'filterOptions',
    'filterSelectedOptions',
    'forcePopupIcon',
    'freeSolo',
    'fullWidth',
    'getLimitTagsText',
    'getOptionDisabled',
    'getOptionLabel',
    'isOptionEqualToValue',
    'groupBy',
    'handleHomeEndKeys',
    'id',
    'includeInputInList',
    'inputValue',
    'limitTags',
    'ListboxComponent',
    'ListboxProps',
    'loading',
    'loadingText',
    'multiple',
    'noOptionsText',
    'onChange',
    'onClose',
    'onHighlightChange',
    'onInputChange',
    'onOpen',
    'open',
    'openOnFocus',
    'openText',
    'options',
    'PaperComponent',
    'PopperComponent',
    'popupIcon',
    'readOnly',
    'renderGroup',
    'renderInput',
    'renderOption',
    'renderTags',
    'selectOnFocus',
    'size',
    'value',
  ],
  Z$ = (e) => {
    const {
        classes: t,
        disablePortal: r,
        focused: n,
        fullWidth: a,
        hasClearIcon: i,
        hasPopupIcon: o,
        inputFocused: s,
        popupOpen: l,
        size: c,
      } = e,
      u = {
        root: [
          'root',
          n && 'focused',
          a && 'fullWidth',
          i && 'hasClearIcon',
          o && 'hasPopupIcon',
        ],
        inputRoot: ['inputRoot'],
        input: ['input', s && 'inputFocused'],
        tag: ['tag', `tagSize${X(c)}`],
        endAdornment: ['endAdornment'],
        clearIndicator: ['clearIndicator'],
        popupIndicator: ['popupIndicator', l && 'popupIndicatorOpen'],
        popper: ['popper', r && 'popperDisablePortal'],
        paper: ['paper'],
        listbox: ['listbox'],
        loading: ['loading'],
        noOptions: ['noOptions'],
        option: ['option'],
        groupLabel: ['groupLabel'],
        groupUl: ['groupUl'],
      };
    return Le(u, K$, t);
  },
  Q$ = ae('div', {
    name: 'MuiAutocomplete',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e,
        {
          fullWidth: n,
          hasClearIcon: a,
          hasPopupIcon: i,
          inputFocused: o,
          size: s,
        } = r;
      return [
        { [`& .${Ce.tag}`]: t.tag },
        { [`& .${Ce.tag}`]: t[`tagSize${X(s)}`] },
        { [`& .${Ce.inputRoot}`]: t.inputRoot },
        { [`& .${Ce.input}`]: t.input },
        { [`& .${Ce.input}`]: o && t.inputFocused },
        t.root,
        n && t.fullWidth,
        i && t.hasPopupIcon,
        a && t.hasClearIcon,
      ];
    },
  })(({ ownerState: e }) =>
    I(
      {
        [`&.${Ce.focused} .${Ce.clearIndicator}`]: { visibility: 'visible' },
        '@media (pointer: fine)': {
          [`&:hover .${Ce.clearIndicator}`]: { visibility: 'visible' },
        },
      },
      e.fullWidth && { width: '100%' },
      {
        [`& .${Ce.tag}`]: I(
          { margin: 3, maxWidth: 'calc(100% - 6px)' },
          e.size === 'small' && { margin: 2, maxWidth: 'calc(100% - 4px)' }
        ),
        [`& .${Ce.inputRoot}`]: {
          flexWrap: 'wrap',
          [`.${Ce.hasPopupIcon}&, .${Ce.hasClearIcon}&`]: {
            paddingRight: 26 + 4,
          },
          [`.${Ce.hasPopupIcon}.${Ce.hasClearIcon}&`]: { paddingRight: 52 + 4 },
          [`& .${Ce.input}`]: { width: 0, minWidth: 30 },
        },
        [`& .${Hl.root}`]: {
          paddingBottom: 1,
          '& .MuiInput-input': { padding: '4px 4px 4px 0px' },
        },
        [`& .${Hl.root}.${Qi.sizeSmall}`]: {
          [`& .${Hl.input}`]: { padding: '2px 4px 3px 0' },
        },
        [`& .${Pp.root}`]: {
          padding: 9,
          [`.${Ce.hasPopupIcon}&, .${Ce.hasClearIcon}&`]: {
            paddingRight: 26 + 4 + 9,
          },
          [`.${Ce.hasPopupIcon}.${Ce.hasClearIcon}&`]: {
            paddingRight: 52 + 4 + 9,
          },
          [`& .${Ce.input}`]: { padding: '7.5px 4px 7.5px 6px' },
          [`& .${Ce.endAdornment}`]: { right: 9 },
        },
        [`& .${Pp.root}.${Qi.sizeSmall}`]: {
          paddingTop: 6,
          paddingBottom: 6,
          paddingLeft: 6,
          [`& .${Ce.input}`]: { padding: '2.5px 4px 2.5px 6px' },
        },
        [`& .${eo.root}`]: {
          paddingTop: 19,
          paddingLeft: 8,
          [`.${Ce.hasPopupIcon}&, .${Ce.hasClearIcon}&`]: {
            paddingRight: 26 + 4 + 9,
          },
          [`.${Ce.hasPopupIcon}.${Ce.hasClearIcon}&`]: {
            paddingRight: 52 + 4 + 9,
          },
          [`& .${eo.input}`]: { padding: '7px 4px' },
          [`& .${Ce.endAdornment}`]: { right: 9 },
        },
        [`& .${eo.root}.${Qi.sizeSmall}`]: {
          paddingBottom: 1,
          [`& .${eo.input}`]: { padding: '2.5px 4px' },
        },
        [`& .${Qi.hiddenLabel}`]: { paddingTop: 8 },
        [`& .${Ce.input}`]: I(
          { flexGrow: 1, textOverflow: 'ellipsis', opacity: 0 },
          e.inputFocused && { opacity: 1 }
        ),
      }
    )
  ),
  eA = ae('div', {
    name: 'MuiAutocomplete',
    slot: 'EndAdornment',
    overridesResolver: (e, t) => t.endAdornment,
  })({ position: 'absolute', right: 0, top: 'calc(50% - 14px)' }),
  tA = ae(wr, {
    name: 'MuiAutocomplete',
    slot: 'ClearIndicator',
    overridesResolver: (e, t) => t.clearIndicator,
  })({ marginRight: -2, padding: 4, visibility: 'hidden' }),
  rA = ae(wr, {
    name: 'MuiAutocomplete',
    slot: 'PopupIndicator',
    overridesResolver: ({ ownerState: e }, t) =>
      I({}, t.popupIndicator, e.popupOpen && t.popupIndicatorOpen),
  })(({ ownerState: e }) =>
    I(
      { padding: 2, marginRight: -2 },
      e.popupOpen && { transform: 'rotate(180deg)' }
    )
  ),
  nA = ae(Rb, {
    name: 'MuiAutocomplete',
    slot: 'Popper',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        { [`& .${Ce.option}`]: t.option },
        t.popper,
        r.disablePortal && t.popperDisablePortal,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    I(
      { zIndex: (e.vars || e).zIndex.modal },
      t.disablePortal && { position: 'absolute' }
    )
  ),
  aA = ae(jr, {
    name: 'MuiAutocomplete',
    slot: 'Paper',
    overridesResolver: (e, t) => t.paper,
  })(({ theme: e }) => I({}, e.typography.body1, { overflow: 'auto' })),
  iA = ae('div', {
    name: 'MuiAutocomplete',
    slot: 'Loading',
    overridesResolver: (e, t) => t.loading,
  })(({ theme: e }) => ({
    color: (e.vars || e).palette.text.secondary,
    padding: '14px 16px',
  })),
  oA = ae('div', {
    name: 'MuiAutocomplete',
    slot: 'NoOptions',
    overridesResolver: (e, t) => t.noOptions,
  })(({ theme: e }) => ({
    color: (e.vars || e).palette.text.secondary,
    padding: '14px 16px',
  })),
  sA = ae('div', {
    name: 'MuiAutocomplete',
    slot: 'Listbox',
    overridesResolver: (e, t) => t.listbox,
  })(({ theme: e }) => ({
    listStyle: 'none',
    margin: 0,
    padding: '8px 0',
    maxHeight: '40vh',
    overflow: 'auto',
    [`& .${Ce.option}`]: {
      minHeight: 48,
      display: 'flex',
      overflow: 'hidden',
      justifyContent: 'flex-start',
      alignItems: 'center',
      cursor: 'pointer',
      paddingTop: 6,
      boxSizing: 'border-box',
      outline: '0',
      WebkitTapHighlightColor: 'transparent',
      paddingBottom: 6,
      paddingLeft: 16,
      paddingRight: 16,
      [e.breakpoints.up('sm')]: { minHeight: 'auto' },
      [`&.${Ce.focused}`]: {
        backgroundColor: (e.vars || e).palette.action.hover,
        '@media (hover: none)': { backgroundColor: 'transparent' },
      },
      '&[aria-disabled="true"]': {
        opacity: (e.vars || e).palette.action.disabledOpacity,
        pointerEvents: 'none',
      },
      [`&.${Ce.focusVisible}`]: {
        backgroundColor: (e.vars || e).palette.action.focus,
      },
      '&[aria-selected="true"]': {
        backgroundColor: e.vars
          ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
          : ke(e.palette.primary.main, e.palette.action.selectedOpacity),
        [`&.${Ce.focused}`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
            : ke(
                e.palette.primary.main,
                e.palette.action.selectedOpacity + e.palette.action.hoverOpacity
              ),
          '@media (hover: none)': {
            backgroundColor: (e.vars || e).palette.action.selected,
          },
        },
        [`&.${Ce.focusVisible}`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
            : ke(
                e.palette.primary.main,
                e.palette.action.selectedOpacity + e.palette.action.focusOpacity
              ),
        },
      },
    },
  })),
  lA = ae(M$, {
    name: 'MuiAutocomplete',
    slot: 'GroupLabel',
    overridesResolver: (e, t) => t.groupLabel,
  })(({ theme: e }) => ({
    backgroundColor: (e.vars || e).palette.background.paper,
    top: -8,
  })),
  cA = ae('ul', {
    name: 'MuiAutocomplete',
    slot: 'GroupUl',
    overridesResolver: (e, t) => t.groupUl,
  })({ padding: 0, [`& .${Ce.option}`]: { paddingLeft: 24 } }),
  uA = E.exports.forwardRef(function (t, r) {
    var n, a, i, o;
    const s = je({ props: t, name: 'MuiAutocomplete' }),
      {
        autoComplete: l = !1,
        autoHighlight: c = !1,
        autoSelect: u = !1,
        blurOnSelect: f = !1,
        ChipProps: d,
        className: h,
        clearIcon: v = xh || (xh = L.exports.jsx(Db, { fontSize: 'small' })),
        clearOnBlur: p = !s.freeSolo,
        clearOnEscape: m = !1,
        clearText: g = 'Clear',
        closeText: _ = 'Close',
        componentsProps: x = {},
        defaultValue: b = s.multiple ? [] : null,
        disableClearable: w = !1,
        disableCloseOnSelect: O = !1,
        disabled: S = !1,
        disabledItemsFocusable: $ = !1,
        disableListWrap: A = !1,
        disablePortal: P = !1,
        filterSelectedOptions: C = !1,
        forcePopupIcon: k = 'auto',
        freeSolo: T = !1,
        fullWidth: D = !1,
        getLimitTagsText: j = (Fe) => `+${Fe}`,
        getOptionLabel: R = (Fe) => {
          var Ft;
          return (Ft = Fe.label) != null ? Ft : Fe;
        },
        groupBy: N,
        handleHomeEndKeys: z = !s.freeSolo,
        includeInputInList: M = !1,
        limitTags: Y = -1,
        ListboxComponent: Z = 'ul',
        ListboxProps: ne,
        loading: ve = !1,
        loadingText: Se = 'Loading\u2026',
        multiple: le = !1,
        noOptionsText: Ee = 'No options',
        openOnFocus: at = !1,
        openText: oe = 'Open',
        PaperComponent: H = jr,
        PopperComponent: Q = Rb,
        popupIcon: ie = wh || (wh = L.exports.jsx(gw, {})),
        readOnly: B = !1,
        renderGroup: J,
        renderInput: de,
        renderOption: ce,
        renderTags: Pe,
        selectOnFocus: it = !s.freeSolo,
        size: F = 'medium',
      } = s,
      G = $e(s, J$),
      {
        getRootProps: q,
        getInputProps: ee,
        getInputLabelProps: se,
        getPopupIndicatorProps: Ae,
        getClearProps: we,
        getTagProps: me,
        getListboxProps: fe,
        getOptionProps: ye,
        value: He,
        dirty: kt,
        id: Vt,
        popupOpen: ft,
        focused: mt,
        focusedTag: Or,
        anchorEl: Gt,
        setAnchorEl: qt,
        inputValue: Qe,
        groupedOptions: Ye,
      } = jS(I({}, s, { componentName: 'Autocomplete' })),
      Et = !w && !S && kt && !B,
      Nt = (!T || k === !0) && k !== !1,
      gt = I({}, s, {
        disablePortal: P,
        focused: mt,
        fullWidth: D,
        hasClearIcon: Et,
        hasPopupIcon: Nt,
        inputFocused: Or === -1,
        popupOpen: ft,
        size: F,
      }),
      ot = Z$(gt);
    let Lt;
    if (le && He.length > 0) {
      const Fe = (Ft) => I({ className: ot.tag, disabled: S }, me(Ft));
      Pe
        ? (Lt = Pe(He, Fe, gt))
        : (Lt = He.map((Ft, Qr) =>
            L.exports.jsx(
              Y$,
              I({ label: R(Ft), size: F }, Fe({ index: Qr }), d)
            )
          ));
    }
    if (Y > -1 && Array.isArray(Lt)) {
      const Fe = Lt.length - Y;
      !mt &&
        Fe > 0 &&
        ((Lt = Lt.splice(0, Y)),
        Lt.push(
          L.exports.jsx(
            'span',
            { className: ot.tag, children: j(Fe) },
            Lt.length
          )
        ));
    }
    const Yt =
        J ||
        ((Fe) =>
          L.exports.jsxs(
            'li',
            {
              children: [
                L.exports.jsx(lA, {
                  className: ot.groupLabel,
                  ownerState: gt,
                  component: 'div',
                  children: Fe.group,
                }),
                L.exports.jsx(cA, {
                  className: ot.groupUl,
                  ownerState: gt,
                  children: Fe.children,
                }),
              ],
            },
            Fe.key
          )),
      La =
        ce || ((Fe, Ft) => L.exports.jsx('li', I({}, Fe, { children: R(Ft) }))),
      Ji = (Fe, Ft) => {
        const Qr = ye({ option: Fe, index: Ft });
        return La(I({}, Qr, { className: ot.option }), Fe, {
          selected: Qr['aria-selected'],
          inputValue: Qe,
        });
      };
    return L.exports.jsxs(E.exports.Fragment, {
      children: [
        L.exports.jsx(
          Q$,
          I({ ref: r, className: he(ot.root, h), ownerState: gt }, q(G), {
            children: de({
              id: Vt,
              disabled: S,
              fullWidth: !0,
              size: F === 'small' ? 'small' : void 0,
              InputLabelProps: se(),
              InputProps: I(
                { ref: qt, className: ot.inputRoot, startAdornment: Lt },
                (Et || Nt) && {
                  endAdornment: L.exports.jsxs(eA, {
                    className: ot.endAdornment,
                    ownerState: gt,
                    children: [
                      Et
                        ? L.exports.jsx(
                            tA,
                            I(
                              {},
                              we(),
                              { 'aria-label': g, title: g, ownerState: gt },
                              x.clearIndicator,
                              {
                                className: he(
                                  ot.clearIndicator,
                                  (n = x.clearIndicator) == null
                                    ? void 0
                                    : n.className
                                ),
                                children: v,
                              }
                            )
                          )
                        : null,
                      Nt
                        ? L.exports.jsx(
                            rA,
                            I(
                              {},
                              Ae(),
                              {
                                disabled: S,
                                'aria-label': ft ? _ : oe,
                                title: ft ? _ : oe,
                                ownerState: gt,
                              },
                              x.popupIndicator,
                              {
                                className: he(
                                  ot.popupIndicator,
                                  (a = x.popupIndicator) == null
                                    ? void 0
                                    : a.className
                                ),
                                children: ie,
                              }
                            )
                          )
                        : null,
                    ],
                  }),
                }
              ),
              inputProps: I(
                { className: ot.input, disabled: S, readOnly: B },
                ee()
              ),
            }),
          })
        ),
        Gt
          ? L.exports.jsx(
              nA,
              I(
                {
                  as: Q,
                  disablePortal: P,
                  style: { width: Gt ? Gt.clientWidth : null },
                  ownerState: gt,
                  role: 'presentation',
                  anchorEl: Gt,
                  open: ft,
                },
                x.popper,
                {
                  className: he(
                    ot.popper,
                    (i = x.popper) == null ? void 0 : i.className
                  ),
                  children: L.exports.jsxs(
                    aA,
                    I({ ownerState: gt, as: H }, x.paper, {
                      className: he(
                        ot.paper,
                        (o = x.paper) == null ? void 0 : o.className
                      ),
                      children: [
                        ve && Ye.length === 0
                          ? L.exports.jsx(iA, {
                              className: ot.loading,
                              ownerState: gt,
                              children: Se,
                            })
                          : null,
                        Ye.length === 0 && !T && !ve
                          ? L.exports.jsx(oA, {
                              className: ot.noOptions,
                              ownerState: gt,
                              role: 'presentation',
                              onMouseDown: (Fe) => {
                                Fe.preventDefault();
                              },
                              children: Ee,
                            })
                          : null,
                        Ye.length > 0
                          ? L.exports.jsx(
                              sA,
                              I(
                                {
                                  as: Z,
                                  className: ot.listbox,
                                  ownerState: gt,
                                },
                                fe(),
                                ne,
                                {
                                  children: Ye.map((Fe, Ft) =>
                                    N
                                      ? Yt({
                                          key: Fe.key,
                                          group: Fe.group,
                                          children: Fe.options.map((Qr, Zi) =>
                                            Ji(Qr, Fe.index + Zi)
                                          ),
                                        })
                                      : Ji(Fe, Ft)
                                  ),
                                }
                              )
                            )
                          : null,
                      ],
                    })
                  ),
                }
              )
            )
          : null,
      ],
    });
  }),
  fA = uA,
  dA = E.exports.createContext(),
  _h = dA;
function pA(e) {
  return Be('MuiGrid', e);
}
const hA = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  vA = ['column-reverse', 'column', 'row-reverse', 'row'],
  mA = ['nowrap', 'wrap-reverse', 'wrap'],
  Wa = ['auto', !0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  Oi = We('MuiGrid', [
    'root',
    'container',
    'item',
    'zeroMinWidth',
    ...hA.map((e) => `spacing-xs-${e}`),
    ...vA.map((e) => `direction-xs-${e}`),
    ...mA.map((e) => `wrap-xs-${e}`),
    ...Wa.map((e) => `grid-xs-${e}`),
    ...Wa.map((e) => `grid-sm-${e}`),
    ...Wa.map((e) => `grid-md-${e}`),
    ...Wa.map((e) => `grid-lg-${e}`),
    ...Wa.map((e) => `grid-xl-${e}`),
  ]),
  gA = [
    'className',
    'columns',
    'columnSpacing',
    'component',
    'container',
    'direction',
    'item',
    'rowSpacing',
    'spacing',
    'wrap',
    'zeroMinWidth',
  ];
function ia(e) {
  const t = parseFloat(e);
  return `${t}${String(e).replace(String(t), '') || 'px'}`;
}
function yA({ theme: e, ownerState: t }) {
  let r;
  return e.breakpoints.keys.reduce((n, a) => {
    let i = {};
    if ((t[a] && (r = t[a]), !r)) return n;
    if (r === !0) i = { flexBasis: 0, flexGrow: 1, maxWidth: '100%' };
    else if (r === 'auto')
      i = {
        flexBasis: 'auto',
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: 'none',
        width: 'auto',
      };
    else {
      const o = Cn({ values: t.columns, breakpoints: e.breakpoints.values }),
        s = typeof o == 'object' ? o[a] : o;
      if (s == null) return n;
      const l = `${Math.round((r / s) * 1e8) / 1e6}%`;
      let c = {};
      if (t.container && t.item && t.columnSpacing !== 0) {
        const u = e.spacing(t.columnSpacing);
        if (u !== '0px') {
          const f = `calc(${l} + ${ia(u)})`;
          c = { flexBasis: f, maxWidth: f };
        }
      }
      i = I({ flexBasis: l, flexGrow: 0, maxWidth: l }, c);
    }
    return (
      e.breakpoints.values[a] === 0
        ? Object.assign(n, i)
        : (n[e.breakpoints.up(a)] = i),
      n
    );
  }, {});
}
function bA({ theme: e, ownerState: t }) {
  const r = Cn({ values: t.direction, breakpoints: e.breakpoints.values });
  return di({ theme: e }, r, (n) => {
    const a = { flexDirection: n };
    return (
      n.indexOf('column') === 0 &&
        (a[`& > .${Oi.item}`] = { maxWidth: 'none' }),
      a
    );
  });
}
function jb({ breakpoints: e, values: t }) {
  let r = '';
  Object.keys(t).forEach((a) => {
    r === '' && t[a] !== 0 && (r = a);
  });
  const n = Object.keys(e).sort((a, i) => e[a] - e[i]);
  return n.slice(0, n.indexOf(r));
}
function xA({ theme: e, ownerState: t }) {
  const { container: r, rowSpacing: n } = t;
  let a = {};
  if (r && n !== 0) {
    const i = Cn({ values: n, breakpoints: e.breakpoints.values });
    let o;
    typeof i == 'object' &&
      (o = jb({ breakpoints: e.breakpoints.values, values: i })),
      (a = di({ theme: e }, i, (s, l) => {
        var c;
        const u = e.spacing(s);
        return u !== '0px'
          ? {
              marginTop: `-${ia(u)}`,
              [`& > .${Oi.item}`]: { paddingTop: ia(u) },
            }
          : (c = o) != null && c.includes(l)
          ? {}
          : { marginTop: 0, [`& > .${Oi.item}`]: { paddingTop: 0 } };
      }));
  }
  return a;
}
function wA({ theme: e, ownerState: t }) {
  const { container: r, columnSpacing: n } = t;
  let a = {};
  if (r && n !== 0) {
    const i = Cn({ values: n, breakpoints: e.breakpoints.values });
    let o;
    typeof i == 'object' &&
      (o = jb({ breakpoints: e.breakpoints.values, values: i })),
      (a = di({ theme: e }, i, (s, l) => {
        var c;
        const u = e.spacing(s);
        return u !== '0px'
          ? {
              width: `calc(100% + ${ia(u)})`,
              marginLeft: `-${ia(u)}`,
              [`& > .${Oi.item}`]: { paddingLeft: ia(u) },
            }
          : (c = o) != null && c.includes(l)
          ? {}
          : {
              width: '100%',
              marginLeft: 0,
              [`& > .${Oi.item}`]: { paddingLeft: 0 },
            };
      }));
  }
  return a;
}
function _A(e, t, r = {}) {
  if (!e || e <= 0) return [];
  if (
    (typeof e == 'string' && !Number.isNaN(Number(e))) ||
    typeof e == 'number'
  )
    return [r[`spacing-xs-${String(e)}`]];
  const n = [];
  return (
    t.forEach((a) => {
      const i = e[a];
      Number(i) > 0 && n.push(r[`spacing-${a}-${String(i)}`]);
    }),
    n
  );
}
const OA = ae('div', {
  name: 'MuiGrid',
  slot: 'Root',
  overridesResolver: (e, t) => {
    const { ownerState: r } = e,
      {
        container: n,
        direction: a,
        item: i,
        spacing: o,
        wrap: s,
        zeroMinWidth: l,
        breakpoints: c,
      } = r;
    let u = [];
    n && (u = _A(o, c, t));
    const f = [];
    return (
      c.forEach((d) => {
        const h = r[d];
        h && f.push(t[`grid-${d}-${String(h)}`]);
      }),
      [
        t.root,
        n && t.container,
        i && t.item,
        l && t.zeroMinWidth,
        ...u,
        a !== 'row' && t[`direction-xs-${String(a)}`],
        s !== 'wrap' && t[`wrap-xs-${String(s)}`],
        ...f,
      ]
    );
  },
})(
  ({ ownerState: e }) =>
    I(
      { boxSizing: 'border-box' },
      e.container && { display: 'flex', flexWrap: 'wrap', width: '100%' },
      e.item && { margin: 0 },
      e.zeroMinWidth && { minWidth: 0 },
      e.wrap !== 'wrap' && { flexWrap: e.wrap }
    ),
  bA,
  xA,
  wA,
  yA
);
function SA(e, t) {
  if (!e || e <= 0) return [];
  if (
    (typeof e == 'string' && !Number.isNaN(Number(e))) ||
    typeof e == 'number'
  )
    return [`spacing-xs-${String(e)}`];
  const r = [];
  return (
    t.forEach((n) => {
      const a = e[n];
      if (Number(a) > 0) {
        const i = `spacing-${n}-${String(a)}`;
        r.push(i);
      }
    }),
    r
  );
}
const EA = (e) => {
    const {
      classes: t,
      container: r,
      direction: n,
      item: a,
      spacing: i,
      wrap: o,
      zeroMinWidth: s,
      breakpoints: l,
    } = e;
    let c = [];
    r && (c = SA(i, l));
    const u = [];
    l.forEach((d) => {
      const h = e[d];
      h && u.push(`grid-${d}-${String(h)}`);
    });
    const f = {
      root: [
        'root',
        r && 'container',
        a && 'item',
        s && 'zeroMinWidth',
        ...c,
        n !== 'row' && `direction-xs-${String(n)}`,
        o !== 'wrap' && `wrap-xs-${String(o)}`,
        ...u,
      ],
    };
    return Le(f, pA, t);
  },
  $A = E.exports.forwardRef(function (t, r) {
    const n = je({ props: t, name: 'MuiGrid' }),
      { breakpoints: a } = Ln(),
      i = jf(n),
      {
        className: o,
        columns: s,
        columnSpacing: l,
        component: c = 'div',
        container: u = !1,
        direction: f = 'row',
        item: d = !1,
        rowSpacing: h,
        spacing: v = 0,
        wrap: p = 'wrap',
        zeroMinWidth: m = !1,
      } = i,
      g = $e(i, gA),
      _ = h || v,
      x = l || v,
      b = E.exports.useContext(_h),
      w = u ? s || 12 : b,
      O = {},
      S = I({}, g);
    a.keys.forEach((P) => {
      g[P] != null && ((O[P] = g[P]), delete S[P]);
    });
    const $ = I(
        {},
        i,
        {
          columns: w,
          container: u,
          direction: f,
          item: d,
          rowSpacing: _,
          columnSpacing: x,
          wrap: p,
          zeroMinWidth: m,
          spacing: v,
        },
        O,
        { breakpoints: a.keys }
      ),
      A = EA($);
    return L.exports.jsx(_h.Provider, {
      value: w,
      children: L.exports.jsx(
        OA,
        I({ ownerState: $, className: he(A.root, o), as: c, ref: r }, S)
      ),
    });
  }),
  re = $A;
var od = {},
  rt = { exports: {} };
(function (e) {
  function t(r) {
    return r && r.__esModule ? r : { default: r };
  }
  (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
})(rt);
var rc = {};
const AA = yw(r$);
var Oh;
function nt() {
  return (
    Oh ||
      ((Oh = 1),
      (function (e) {
        Object.defineProperty(e, '__esModule', { value: !0 }),
          Object.defineProperty(e, 'default', {
            enumerable: !0,
            get: function () {
              return t.createSvgIcon;
            },
          });
        var t = AA;
      })(rc)),
    rc
  );
}
var CA = rt.exports;
Object.defineProperty(od, '__esModule', { value: !0 });
var Nb = (od.default = void 0),
  PA = CA(nt()),
  kA = L.exports,
  TA = (0, PA.default)(
    (0, kA.jsx)('path', { d: 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' }),
    'Menu'
  );
Nb = od.default = TA;
const Lb = () => {
    const e = _r();
    return y.createElement(Nb, {
      className: 'menu-icon',
      onClick: () => e(Ky()),
      sx: { zIndex: window.isMobile ? 200 : 'auto' },
    });
  },
  MA = ['component', 'direction', 'spacing', 'divider', 'children'];
function IA(e, t) {
  const r = E.exports.Children.toArray(e).filter(Boolean);
  return r.reduce(
    (n, a, i) => (
      n.push(a),
      i < r.length - 1 &&
        n.push(E.exports.cloneElement(t, { key: `separator-${i}` })),
      n
    ),
    []
  );
}
const RA = (e) =>
    ({
      row: 'Left',
      'row-reverse': 'Right',
      column: 'Top',
      'column-reverse': 'Bottom',
    }[e]),
  DA = ({ ownerState: e, theme: t }) => {
    let r = I(
      { display: 'flex', flexDirection: 'column' },
      di(
        { theme: t },
        Cn({ values: e.direction, breakpoints: t.breakpoints.values }),
        (n) => ({ flexDirection: n })
      )
    );
    if (e.spacing) {
      const n = bw(t),
        a = Object.keys(t.breakpoints.values).reduce(
          (l, c) => (
            ((typeof e.spacing == 'object' && e.spacing[c] != null) ||
              (typeof e.direction == 'object' && e.direction[c] != null)) &&
              (l[c] = !0),
            l
          ),
          {}
        ),
        i = Cn({ values: e.direction, base: a }),
        o = Cn({ values: e.spacing, base: a });
      typeof i == 'object' &&
        Object.keys(i).forEach((l, c, u) => {
          if (!i[l]) {
            const d = c > 0 ? i[u[c - 1]] : 'column';
            i[l] = d;
          }
        }),
        (r = xw(
          r,
          di({ theme: t }, o, (l, c) => ({
            '& > :not(style) + :not(style)': {
              margin: 0,
              [`margin${RA(c ? i[c] : e.direction)}`]: _w(n, l),
            },
          }))
        ));
    }
    return (r = ww(t.breakpoints, r)), r;
  },
  jA = ae('div', {
    name: 'MuiStack',
    slot: 'Root',
    overridesResolver: (e, t) => [t.root],
  })(DA),
  NA = E.exports.forwardRef(function (t, r) {
    const n = je({ props: t, name: 'MuiStack' }),
      a = jf(n),
      {
        component: i = 'div',
        direction: o = 'column',
        spacing: s = 0,
        divider: l,
        children: c,
      } = a,
      u = $e(a, MA),
      f = { direction: o, spacing: s };
    return L.exports.jsx(
      jA,
      I({ as: i, ownerState: f, ref: r }, u, { children: l ? IA(c, l) : c })
    );
  }),
  Bb = NA;
function LA(e) {
  return Be('MuiCircularProgress', e);
}
We('MuiCircularProgress', [
  'root',
  'determinate',
  'indeterminate',
  'colorPrimary',
  'colorSecondary',
  'svg',
  'circle',
  'circleDeterminate',
  'circleIndeterminate',
  'circleDisableShrink',
]);
const BA = [
  'className',
  'color',
  'disableShrink',
  'size',
  'style',
  'thickness',
  'value',
  'variant',
];
let al = (e) => e,
  Sh,
  Eh,
  $h,
  Ah;
const en = 44,
  FA = Cy(
    Sh ||
      (Sh = al`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)
  ),
  zA = Cy(
    Eh ||
      (Eh = al`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)
  ),
  WA = (e) => {
    const { classes: t, variant: r, color: n, disableShrink: a } = e,
      i = {
        root: ['root', r, `color${X(n)}`],
        svg: ['svg'],
        circle: ['circle', `circle${X(r)}`, a && 'circleDisableShrink'],
      };
    return Le(i, LA, t);
  },
  UA = ae('span', {
    name: 'MuiCircularProgress',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.root, t[r.variant], t[`color${X(r.color)}`]];
    },
  })(
    ({ ownerState: e, theme: t }) =>
      I(
        { display: 'inline-block' },
        e.variant === 'determinate' && {
          transition: t.transitions.create('transform'),
        },
        e.color !== 'inherit' && { color: (t.vars || t).palette[e.color].main }
      ),
    ({ ownerState: e }) =>
      e.variant === 'indeterminate' &&
      Py(
        $h ||
          ($h = al`
      animation: ${0} 1.4s linear infinite;
    `),
        FA
      )
  ),
  HA = ae('svg', {
    name: 'MuiCircularProgress',
    slot: 'Svg',
    overridesResolver: (e, t) => t.svg,
  })({ display: 'block' }),
  VA = ae('circle', {
    name: 'MuiCircularProgress',
    slot: 'Circle',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.circle,
        t[`circle${X(r.variant)}`],
        r.disableShrink && t.circleDisableShrink,
      ];
    },
  })(
    ({ ownerState: e, theme: t }) =>
      I(
        { stroke: 'currentColor' },
        e.variant === 'determinate' && {
          transition: t.transitions.create('stroke-dashoffset'),
        },
        e.variant === 'indeterminate' && {
          strokeDasharray: '80px, 200px',
          strokeDashoffset: 0,
        }
      ),
    ({ ownerState: e }) =>
      e.variant === 'indeterminate' &&
      !e.disableShrink &&
      Py(
        Ah ||
          (Ah = al`
      animation: ${0} 1.4s ease-in-out infinite;
    `),
        zA
      )
  ),
  GA = E.exports.forwardRef(function (t, r) {
    const n = je({ props: t, name: 'MuiCircularProgress' }),
      {
        className: a,
        color: i = 'primary',
        disableShrink: o = !1,
        size: s = 40,
        style: l,
        thickness: c = 3.6,
        value: u = 0,
        variant: f = 'indeterminate',
      } = n,
      d = $e(n, BA),
      h = I({}, n, {
        color: i,
        disableShrink: o,
        size: s,
        thickness: c,
        value: u,
        variant: f,
      }),
      v = WA(h),
      p = {},
      m = {},
      g = {};
    if (f === 'determinate') {
      const _ = 2 * Math.PI * ((en - c) / 2);
      (p.strokeDasharray = _.toFixed(3)),
        (g['aria-valuenow'] = Math.round(u)),
        (p.strokeDashoffset = `${(((100 - u) / 100) * _).toFixed(3)}px`),
        (m.transform = 'rotate(-90deg)');
    }
    return L.exports.jsx(
      UA,
      I(
        {
          className: he(v.root, a),
          style: I({ width: s, height: s }, m, l),
          ownerState: h,
          ref: r,
          role: 'progressbar',
        },
        g,
        d,
        {
          children: L.exports.jsx(HA, {
            className: v.svg,
            ownerState: h,
            viewBox: `${en / 2} ${en / 2} ${en} ${en}`,
            children: L.exports.jsx(VA, {
              className: v.circle,
              style: p,
              ownerState: h,
              cx: en,
              cy: en,
              r: (en - c) / 2,
              fill: 'none',
              strokeWidth: c,
            }),
          }),
        }
      )
    );
  }),
  qA = GA;
function YA(e) {
  return Be('MuiButtonGroup', e);
}
const KA = We('MuiButtonGroup', [
    'root',
    'contained',
    'outlined',
    'text',
    'disableElevation',
    'disabled',
    'fullWidth',
    'vertical',
    'grouped',
    'groupedHorizontal',
    'groupedVertical',
    'groupedText',
    'groupedTextHorizontal',
    'groupedTextVertical',
    'groupedTextPrimary',
    'groupedTextSecondary',
    'groupedOutlined',
    'groupedOutlinedHorizontal',
    'groupedOutlinedVertical',
    'groupedOutlinedPrimary',
    'groupedOutlinedSecondary',
    'groupedContained',
    'groupedContainedHorizontal',
    'groupedContainedVertical',
    'groupedContainedPrimary',
    'groupedContainedSecondary',
  ]),
  on = KA,
  XA = [
    'children',
    'className',
    'color',
    'component',
    'disabled',
    'disableElevation',
    'disableFocusRipple',
    'disableRipple',
    'fullWidth',
    'orientation',
    'size',
    'variant',
  ],
  JA = (e, t) => {
    const { ownerState: r } = e;
    return [
      { [`& .${on.grouped}`]: t.grouped },
      { [`& .${on.grouped}`]: t[`grouped${X(r.orientation)}`] },
      { [`& .${on.grouped}`]: t[`grouped${X(r.variant)}`] },
      { [`& .${on.grouped}`]: t[`grouped${X(r.variant)}${X(r.orientation)}`] },
      { [`& .${on.grouped}`]: t[`grouped${X(r.variant)}${X(r.color)}`] },
      t.root,
      t[r.variant],
      r.disableElevation === !0 && t.disableElevation,
      r.fullWidth && t.fullWidth,
      r.orientation === 'vertical' && t.vertical,
    ];
  },
  ZA = (e) => {
    const {
        classes: t,
        color: r,
        disabled: n,
        disableElevation: a,
        fullWidth: i,
        orientation: o,
        variant: s,
      } = e,
      l = {
        root: [
          'root',
          s,
          o === 'vertical' && 'vertical',
          i && 'fullWidth',
          a && 'disableElevation',
        ],
        grouped: [
          'grouped',
          `grouped${X(o)}`,
          `grouped${X(s)}`,
          `grouped${X(s)}${X(o)}`,
          `grouped${X(s)}${X(r)}`,
          n && 'disabled',
        ],
      };
    return Le(l, YA, t);
  },
  QA = ae('div', {
    name: 'MuiButtonGroup',
    slot: 'Root',
    overridesResolver: JA,
  })(({ theme: e, ownerState: t }) =>
    I(
      {
        display: 'inline-flex',
        borderRadius: (e.vars || e).shape.borderRadius,
      },
      t.variant === 'contained' && { boxShadow: (e.vars || e).shadows[2] },
      t.disableElevation && { boxShadow: 'none' },
      t.fullWidth && { width: '100%' },
      t.orientation === 'vertical' && { flexDirection: 'column' },
      {
        [`& .${on.grouped}`]: I(
          {
            minWidth: 40,
            '&:not(:first-of-type)': I(
              {},
              t.orientation === 'horizontal' && {
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
              },
              t.orientation === 'vertical' && {
                borderTopRightRadius: 0,
                borderTopLeftRadius: 0,
              },
              t.variant === 'outlined' &&
                t.orientation === 'horizontal' && { marginLeft: -1 },
              t.variant === 'outlined' &&
                t.orientation === 'vertical' && { marginTop: -1 }
            ),
            '&:not(:last-of-type)': I(
              {},
              t.orientation === 'horizontal' && {
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
              },
              t.orientation === 'vertical' && {
                borderBottomRightRadius: 0,
                borderBottomLeftRadius: 0,
              },
              t.variant === 'text' &&
                t.orientation === 'horizontal' && {
                  borderRight: e.vars
                    ? `1px solid rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
                    : `1px solid ${
                        e.palette.mode === 'light'
                          ? 'rgba(0, 0, 0, 0.23)'
                          : 'rgba(255, 255, 255, 0.23)'
                      }`,
                },
              t.variant === 'text' &&
                t.orientation === 'vertical' && {
                  borderBottom: e.vars
                    ? `1px solid rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)`
                    : `1px solid ${
                        e.palette.mode === 'light'
                          ? 'rgba(0, 0, 0, 0.23)'
                          : 'rgba(255, 255, 255, 0.23)'
                      }`,
                },
              t.variant === 'text' &&
                t.color !== 'inherit' && {
                  borderColor: e.vars
                    ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`
                    : ke(e.palette[t.color].main, 0.5),
                },
              t.variant === 'outlined' &&
                t.orientation === 'horizontal' && {
                  borderRightColor: 'transparent',
                },
              t.variant === 'outlined' &&
                t.orientation === 'vertical' && {
                  borderBottomColor: 'transparent',
                },
              t.variant === 'contained' &&
                t.orientation === 'horizontal' && {
                  borderRight: `1px solid ${(e.vars || e).palette.grey[400]}`,
                  [`&.${on.disabled}`]: {
                    borderRight: `1px solid ${
                      (e.vars || e).palette.action.disabled
                    }`,
                  },
                },
              t.variant === 'contained' &&
                t.orientation === 'vertical' && {
                  borderBottom: `1px solid ${(e.vars || e).palette.grey[400]}`,
                  [`&.${on.disabled}`]: {
                    borderBottom: `1px solid ${
                      (e.vars || e).palette.action.disabled
                    }`,
                  },
                },
              t.variant === 'contained' &&
                t.color !== 'inherit' && {
                  borderColor: (e.vars || e).palette[t.color].dark,
                },
              {
                '&:hover': I(
                  {},
                  t.variant === 'outlined' &&
                    t.orientation === 'horizontal' && {
                      borderRightColor: 'currentColor',
                    },
                  t.variant === 'outlined' &&
                    t.orientation === 'vertical' && {
                      borderBottomColor: 'currentColor',
                    }
                ),
              }
            ),
            '&:hover': I(
              {},
              t.variant === 'contained' && { boxShadow: 'none' }
            ),
          },
          t.variant === 'contained' && { boxShadow: 'none' }
        ),
      }
    )
  ),
  eC = E.exports.forwardRef(function (t, r) {
    const n = je({ props: t, name: 'MuiButtonGroup' }),
      {
        children: a,
        className: i,
        color: o = 'primary',
        component: s = 'div',
        disabled: l = !1,
        disableElevation: c = !1,
        disableFocusRipple: u = !1,
        disableRipple: f = !1,
        fullWidth: d = !1,
        orientation: h = 'horizontal',
        size: v = 'medium',
        variant: p = 'outlined',
      } = n,
      m = $e(n, XA),
      g = I({}, n, {
        color: o,
        component: s,
        disabled: l,
        disableElevation: c,
        disableFocusRipple: u,
        disableRipple: f,
        fullWidth: d,
        orientation: h,
        size: v,
        variant: p,
      }),
      _ = ZA(g),
      x = E.exports.useMemo(
        () => ({
          className: _.grouped,
          color: o,
          disabled: l,
          disableElevation: c,
          disableFocusRipple: u,
          disableRipple: f,
          fullWidth: d,
          size: v,
          variant: p,
        }),
        [o, l, c, u, f, d, v, p, _.grouped]
      );
    return L.exports.jsx(
      QA,
      I(
        {
          as: s,
          role: 'group',
          className: he(_.root, i),
          ref: r,
          ownerState: g,
        },
        m,
        { children: L.exports.jsx(Ow.Provider, { value: x, children: a }) }
      )
    );
  }),
  tC = eC;
var sd = {},
  rC = rt.exports;
Object.defineProperty(sd, '__esModule', { value: !0 });
var Fb = (sd.default = void 0),
  nC = rC(nt()),
  aC = L.exports,
  iC = (0, nC.default)(
    (0, aC.jsx)('path', {
      d: 'M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z',
    }),
    'LightMode'
  );
Fb = sd.default = iC;
var ld = {},
  oC = rt.exports;
Object.defineProperty(ld, '__esModule', { value: !0 });
var zb = (ld.default = void 0),
  sC = oC(nt()),
  lC = L.exports,
  cC = (0, sC.default)(
    (0, lC.jsx)('path', {
      d: 'M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z',
    }),
    'DarkMode'
  );
zb = ld.default = cC;
const uC = pn(
  L.exports.jsx('path', {
    d: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
  }),
  'Person'
);
function fC(e) {
  return Be('MuiAvatar', e);
}
We('MuiAvatar', [
  'root',
  'colorDefault',
  'circular',
  'rounded',
  'square',
  'img',
  'fallback',
]);
const dC = [
    'alt',
    'children',
    'className',
    'component',
    'imgProps',
    'sizes',
    'src',
    'srcSet',
    'variant',
  ],
  pC = (e) => {
    const { classes: t, variant: r, colorDefault: n } = e;
    return Le(
      {
        root: ['root', r, n && 'colorDefault'],
        img: ['img'],
        fallback: ['fallback'],
      },
      fC,
      t
    );
  },
  hC = ae('div', {
    name: 'MuiAvatar',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.root, t[r.variant], r.colorDefault && t.colorDefault];
    },
  })(({ theme: e, ownerState: t }) =>
    I(
      {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        width: 40,
        height: 40,
        fontFamily: e.typography.fontFamily,
        fontSize: e.typography.pxToRem(20),
        lineHeight: 1,
        borderRadius: '50%',
        overflow: 'hidden',
        userSelect: 'none',
      },
      t.variant === 'rounded' && {
        borderRadius: (e.vars || e).shape.borderRadius,
      },
      t.variant === 'square' && { borderRadius: 0 },
      t.colorDefault &&
        I(
          { color: (e.vars || e).palette.background.default },
          e.vars
            ? { backgroundColor: e.vars.palette.Avatar.defaultBg }
            : {
                backgroundColor:
                  e.palette.mode === 'light'
                    ? e.palette.grey[400]
                    : e.palette.grey[600],
              }
        )
    )
  ),
  vC = ae('img', {
    name: 'MuiAvatar',
    slot: 'Img',
    overridesResolver: (e, t) => t.img,
  })({
    width: '100%',
    height: '100%',
    textAlign: 'center',
    objectFit: 'cover',
    color: 'transparent',
    textIndent: 1e4,
  }),
  mC = ae(uC, {
    name: 'MuiAvatar',
    slot: 'Fallback',
    overridesResolver: (e, t) => t.fallback,
  })({ width: '75%', height: '75%' });
function gC({ crossOrigin: e, referrerPolicy: t, src: r, srcSet: n }) {
  const [a, i] = E.exports.useState(!1);
  return (
    E.exports.useEffect(() => {
      if (!r && !n) return;
      i(!1);
      let o = !0;
      const s = new Image();
      return (
        (s.onload = () => {
          !o || i('loaded');
        }),
        (s.onerror = () => {
          !o || i('error');
        }),
        (s.crossOrigin = e),
        (s.referrerPolicy = t),
        (s.src = r),
        n && (s.srcset = n),
        () => {
          o = !1;
        }
      );
    }, [e, t, r, n]),
    a
  );
}
const yC = E.exports.forwardRef(function (t, r) {
    const n = je({ props: t, name: 'MuiAvatar' }),
      {
        alt: a,
        children: i,
        className: o,
        component: s = 'div',
        imgProps: l,
        sizes: c,
        src: u,
        srcSet: f,
        variant: d = 'circular',
      } = n,
      h = $e(n, dC);
    let v = null;
    const p = gC(I({}, l, { src: u, srcSet: f })),
      m = u || f,
      g = m && p !== 'error',
      _ = I({}, n, { colorDefault: !g, component: s, variant: d }),
      x = pC(_);
    return (
      g
        ? (v = L.exports.jsx(
            vC,
            I(
              {
                alt: a,
                src: u,
                srcSet: f,
                sizes: c,
                ownerState: _,
                className: x.img,
              },
              l
            )
          ))
        : i != null
        ? (v = i)
        : m && a
        ? (v = a[0])
        : (v = L.exports.jsx(mC, { className: x.fallback })),
      L.exports.jsx(
        hC,
        I({ as: s, ownerState: _, className: he(x.root, o), ref: r }, h, {
          children: v,
        })
      )
    );
  }),
  bC = yC;
function xC(e) {
  return Be('MuiListItemIcon', e);
}
const wC = We('MuiListItemIcon', ['root', 'alignItemsFlexStart']),
  Ch = wC,
  _C = ['className'],
  OC = (e) => {
    const { alignItems: t, classes: r } = e;
    return Le(
      { root: ['root', t === 'flex-start' && 'alignItemsFlexStart'] },
      xC,
      r
    );
  },
  SC = ae('div', {
    name: 'MuiListItemIcon',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.root, r.alignItems === 'flex-start' && t.alignItemsFlexStart];
    },
  })(({ theme: e, ownerState: t }) =>
    I(
      {
        minWidth: 56,
        color: (e.vars || e).palette.action.active,
        flexShrink: 0,
        display: 'inline-flex',
      },
      t.alignItems === 'flex-start' && { marginTop: 8 }
    )
  ),
  EC = E.exports.forwardRef(function (t, r) {
    const n = je({ props: t, name: 'MuiListItemIcon' }),
      { className: a } = n,
      i = $e(n, _C),
      o = E.exports.useContext(Ar),
      s = I({}, n, { alignItems: o.alignItems }),
      l = OC(s);
    return L.exports.jsx(
      SC,
      I({ className: he(l.root, a), ownerState: s, ref: r }, i)
    );
  }),
  ai = EC;
function $C(e) {
  return Be('MuiListItemText', e);
}
const AC = We('MuiListItemText', [
    'root',
    'multiline',
    'dense',
    'inset',
    'primary',
    'secondary',
  ]),
  Yo = AC,
  CC = [
    'children',
    'className',
    'disableTypography',
    'inset',
    'primary',
    'primaryTypographyProps',
    'secondary',
    'secondaryTypographyProps',
  ],
  PC = (e) => {
    const { classes: t, inset: r, primary: n, secondary: a, dense: i } = e;
    return Le(
      {
        root: ['root', r && 'inset', i && 'dense', n && a && 'multiline'],
        primary: ['primary'],
        secondary: ['secondary'],
      },
      $C,
      t
    );
  },
  kC = ae('div', {
    name: 'MuiListItemText',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        { [`& .${Yo.primary}`]: t.primary },
        { [`& .${Yo.secondary}`]: t.secondary },
        t.root,
        r.inset && t.inset,
        r.primary && r.secondary && t.multiline,
        r.dense && t.dense,
      ];
    },
  })(({ ownerState: e }) =>
    I(
      { flex: '1 1 auto', minWidth: 0, marginTop: 4, marginBottom: 4 },
      e.primary && e.secondary && { marginTop: 6, marginBottom: 6 },
      e.inset && { paddingLeft: 56 }
    )
  ),
  TC = E.exports.forwardRef(function (t, r) {
    const n = je({ props: t, name: 'MuiListItemText' }),
      {
        children: a,
        className: i,
        disableTypography: o = !1,
        inset: s = !1,
        primary: l,
        primaryTypographyProps: c,
        secondary: u,
        secondaryTypographyProps: f,
      } = n,
      d = $e(n, CC),
      { dense: h } = E.exports.useContext(Ar);
    let v = l != null ? l : a,
      p = u;
    const m = I({}, n, {
        disableTypography: o,
        inset: s,
        primary: !!v,
        secondary: !!p,
        dense: h,
      }),
      g = PC(m);
    return (
      v != null &&
        v.type !== ct &&
        !o &&
        (v = L.exports.jsx(
          ct,
          I(
            {
              variant: h ? 'body2' : 'body1',
              className: g.primary,
              component: 'span',
              display: 'block',
            },
            c,
            { children: v }
          )
        )),
      p != null &&
        p.type !== ct &&
        !o &&
        (p = L.exports.jsx(
          ct,
          I(
            {
              variant: 'body2',
              className: g.secondary,
              color: 'text.secondary',
              display: 'block',
            },
            f,
            { children: p }
          )
        )),
      L.exports.jsxs(
        kC,
        I({ className: he(g.root, i), ownerState: m, ref: r }, d, {
          children: [v, p],
        })
      )
    );
  }),
  MC = TC;
function IC(e) {
  return Be('MuiMenuItem', e);
}
const RC = We('MuiMenuItem', [
    'root',
    'focusVisible',
    'dense',
    'disabled',
    'divider',
    'gutters',
    'selected',
  ]),
  Ua = RC,
  DC = [
    'autoFocus',
    'component',
    'dense',
    'divider',
    'disableGutters',
    'focusVisibleClassName',
    'role',
    'tabIndex',
  ],
  jC = (e, t) => {
    const { ownerState: r } = e;
    return [
      t.root,
      r.dense && t.dense,
      r.divider && t.divider,
      !r.disableGutters && t.gutters,
    ];
  },
  NC = (e) => {
    const {
        disabled: t,
        dense: r,
        divider: n,
        disableGutters: a,
        selected: i,
        classes: o,
      } = e,
      l = Le(
        {
          root: [
            'root',
            r && 'dense',
            t && 'disabled',
            !a && 'gutters',
            n && 'divider',
            i && 'selected',
          ],
        },
        IC,
        o
      );
    return I({}, o, l);
  },
  LC = ae(fa, {
    shouldForwardProp: (e) => Bf(e) || e === 'classes',
    name: 'MuiMenuItem',
    slot: 'Root',
    overridesResolver: jC,
  })(({ theme: e, ownerState: t }) =>
    I(
      {},
      e.typography.body1,
      {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'relative',
        textDecoration: 'none',
        minHeight: 48,
        paddingTop: 6,
        paddingBottom: 6,
        boxSizing: 'border-box',
        whiteSpace: 'nowrap',
      },
      !t.disableGutters && { paddingLeft: 16, paddingRight: 16 },
      t.divider && {
        borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
        backgroundClip: 'padding-box',
      },
      {
        '&:hover': {
          textDecoration: 'none',
          backgroundColor: (e.vars || e).palette.action.hover,
          '@media (hover: none)': { backgroundColor: 'transparent' },
        },
        [`&.${Ua.selected}`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
            : ke(e.palette.primary.main, e.palette.action.selectedOpacity),
          [`&.${Ua.focusVisible}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
              : ke(
                  e.palette.primary.main,
                  e.palette.action.selectedOpacity +
                    e.palette.action.focusOpacity
                ),
          },
        },
        [`&.${Ua.selected}:hover`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
            : ke(
                e.palette.primary.main,
                e.palette.action.selectedOpacity + e.palette.action.hoverOpacity
              ),
          '@media (hover: none)': {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
              : ke(e.palette.primary.main, e.palette.action.selectedOpacity),
          },
        },
        [`&.${Ua.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette.action.focus,
        },
        [`&.${Ua.disabled}`]: {
          opacity: (e.vars || e).palette.action.disabledOpacity,
        },
        [`& + .${yh.root}`]: {
          marginTop: e.spacing(1),
          marginBottom: e.spacing(1),
        },
        [`& + .${yh.inset}`]: { marginLeft: 52 },
        [`& .${Yo.root}`]: { marginTop: 0, marginBottom: 0 },
        [`& .${Yo.inset}`]: { paddingLeft: 36 },
        [`& .${Ch.root}`]: { minWidth: 36 },
      },
      !t.dense && { [e.breakpoints.up('sm')]: { minHeight: 'auto' } },
      t.dense &&
        I(
          { minHeight: 32, paddingTop: 4, paddingBottom: 4 },
          e.typography.body2,
          { [`& .${Ch.root} svg`]: { fontSize: '1.25rem' } }
        )
    )
  ),
  BC = E.exports.forwardRef(function (t, r) {
    const n = je({ props: t, name: 'MuiMenuItem' }),
      {
        autoFocus: a = !1,
        component: i = 'li',
        dense: o = !1,
        divider: s = !1,
        disableGutters: l = !1,
        focusVisibleClassName: c,
        role: u = 'menuitem',
        tabIndex: f,
      } = n,
      d = $e(n, DC),
      h = E.exports.useContext(Ar),
      v = { dense: o || h.dense || !1, disableGutters: l },
      p = E.exports.useRef(null);
    ua(() => {
      a && p.current && p.current.focus();
    }, [a]);
    const m = I({}, n, { dense: v.dense, divider: s, disableGutters: l }),
      g = NC(n),
      _ = qr(p, r);
    let x;
    return (
      n.disabled || (x = f !== void 0 ? f : -1),
      L.exports.jsx(Ar.Provider, {
        value: v,
        children: L.exports.jsx(
          LC,
          I(
            {
              ref: _,
              role: u,
              tabIndex: x,
              component: i,
              focusVisibleClassName: he(g.focusVisible, c),
            },
            d,
            { ownerState: m, classes: g }
          )
        ),
      })
    );
  }),
  zr = BC;
var cd = {},
  FC = rt.exports;
Object.defineProperty(cd, '__esModule', { value: !0 });
var Wb = (cd.default = void 0),
  zC = FC(nt()),
  WC = L.exports,
  UC = (0, zC.default)(
    (0, WC.jsx)('path', {
      d: 'm17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z',
    }),
    'Logout'
  );
Wb = cd.default = UC;
var ud = {},
  HC = rt.exports;
Object.defineProperty(ud, '__esModule', { value: !0 });
var Ub = (ud.default = void 0),
  VC = HC(nt()),
  GC = L.exports,
  qC = (0, VC.default)(
    (0, GC.jsx)('path', {
      d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z',
    }),
    'AccountCircle'
  );
Ub = ud.default = qC;
var fd = {},
  YC = rt.exports;
Object.defineProperty(fd, '__esModule', { value: !0 });
var Hb = (fd.default = void 0),
  KC = YC(nt()),
  XC = L.exports,
  JC = (0, KC.default)(
    (0, XC.jsx)('path', {
      d: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z',
    }),
    'Email'
  );
Hb = fd.default = JC;
var dd = {},
  ZC = rt.exports;
Object.defineProperty(dd, '__esModule', { value: !0 });
var Vb = (dd.default = void 0),
  QC = ZC(nt()),
  Ph = L.exports,
  eP = (0, QC.default)(
    [
      (0, Ph.jsx)('circle', { cx: '10', cy: '8', r: '4' }, '0'),
      (0, Ph.jsx)(
        'path',
        {
          d: 'M10.67 13.02c-.22-.01-.44-.02-.67-.02-2.42 0-4.68.67-6.61 1.82-.88.52-1.39 1.5-1.39 2.53V20h9.26c-.79-1.13-1.26-2.51-1.26-4 0-1.07.25-2.07.67-2.98zM20.75 16c0-.22-.03-.42-.06-.63l1.14-1.01-1-1.73-1.45.49c-.32-.27-.68-.48-1.08-.63L18 11h-2l-.3 1.49c-.4.15-.76.36-1.08.63l-1.45-.49-1 1.73 1.14 1.01c-.03.21-.06.41-.06.63s.03.42.06.63l-1.14 1.01 1 1.73 1.45-.49c.32.27.68.48 1.08.63L16 21h2l.3-1.49c.4-.15.76-.36 1.08-.63l1.45.49 1-1.73-1.14-1.01c.03-.21.06-.41.06-.63zM17 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z',
        },
        '1'
      ),
    ],
    'ManageAccounts'
  );
Vb = dd.default = eP;
const Gb = ({ avatar: e, sidebar: t }) => {
    const r = _r(),
      { mode: n } = vt(Kf),
      [a, i] = E.exports.useState(!1),
      [o, s] = E.exports.useState();
    E.exports.useEffect(() => {
      xe({ method: 'get', url: '/current-user' }, function ({ data: c }) {
        s(c);
      });
    }, []);
    const l = () => {
      window.location.replace('/logout');
    };
    return y.createElement(
      Ne,
      {
        component: 'span',
        sx: { float: t ? 'inherit' : 'right', mt: t ? 2 : 0 },
      },
      y.createElement(
        tC,
        { variant: 'outlined' },
        y.createElement(
          Ct,
          {
            className: t ? 'sidebar-light-mode' : 'light-mode',
            variant: n === 'light' ? 'contained' : 'outlined',
            onClick: () => r(Xc('light')),
          },
          y.createElement(Fb, null)
        ),
        y.createElement(
          Ct,
          {
            className: t ? 'sidebar-dark-mode' : 'dark-mode',
            onClick: () => r(Xc('dark')),
            variant: n === 'dark' ? 'contained' : 'outlined',
          },
          y.createElement(zb, null)
        ),
        e &&
          y.createElement(
            y.Fragment,
            null,
            y.createElement(bC, {
              onClick: () => i(!a),
              alt: 'avatar',
              src: '/images/warren-buffett.png',
              className: 'avatar',
              id: 'header-avatar',
            }),
            y.createElement(
              Sw,
              {
                anchorEl: document.getElementById('header-avatar'),
                id: 'account-menu',
                open: a,
                onClose: () => i(!1),
                PaperProps: {
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                },
                transformOrigin: { horizontal: 'right', vertical: 'top' },
                anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
              },
              y.createElement(
                zr,
                { sx: { cursor: 'default' } },
                y.createElement(
                  ai,
                  null,
                  y.createElement(Ub, { fontSize: 'small' })
                ),
                o == null ? void 0 : o.name
              ),
              y.createElement(cr, null),
              y.createElement(
                zr,
                { sx: { cursor: 'default' } },
                y.createElement(
                  ai,
                  null,
                  y.createElement(Hb, { fontSize: 'small' })
                ),
                o == null ? void 0 : o.email
              ),
              y.createElement(cr, null),
              y.createElement(
                zr,
                { sx: { cursor: 'default' } },
                y.createElement(
                  ai,
                  null,
                  y.createElement(Vb, { fontSize: 'small' })
                ),
                'Role: ',
                o == null ? void 0 : o.role
              ),
              y.createElement(cr, null),
              y.createElement(
                zr,
                { onClick: l },
                y.createElement(
                  ai,
                  null,
                  y.createElement(Wb, { fontSize: 'small' })
                ),
                'Logout'
              )
            )
          )
      )
    );
  },
  tP = () => {
    const [e, t] = E.exports.useState(!1),
      [r, n] = E.exports.useState([]),
      a = e && r.length === 0,
      [i, o] = y.useState(null),
      s = gb();
    return (
      E.exports.useEffect(() => {
        !a ||
          (async () =>
            setTimeout(() => {
              xe(
                { method: 'get', url: '/stocks-search' },
                function ({ data: l }) {
                  n(l);
                }
              );
            }, 1e3))();
      }, [a]),
      E.exports.useEffect(() => {
        i && (s('/edit-stock/' + i.id), location.reload());
      }, [i, s]),
      y.createElement(
        re,
        { container: !0, spacing: 2, sx: { position: 'relative' } },
        y.createElement(
          re,
          { item: !0, xs: 9, sx: { paddingLeft: '0px !important' } },
          y.createElement(
            Bb,
            { direction: 'row' },
            window.isMobile && y.createElement(Lb, null),
            y.createElement(fA, {
              size: 'small',
              fullWidth: !0,
              id: 'asynchronous-demo',
              sx: { ml: window.isMobile ? 1 : 2, maxWidth: 600 },
              open: e,
              onOpen: () => {
                t(!0);
              },
              onClose: () => {
                t(!1);
              },
              isOptionEqualToValue: (l, c) => l.title === c.title,
              getOptionLabel: (l) => l.title,
              options: r,
              loading: a,
              value: i,
              onChange: (l, c) => {
                o(c);
              },
              renderInput: (l) =>
                y.createElement(lt, {
                  ...l,
                  label: 'Search Stock',
                  InputProps: {
                    ...l.InputProps,
                    endAdornment: y.createElement(
                      y.Fragment,
                      null,
                      a
                        ? y.createElement(qA, { color: 'inherit', size: 20 })
                        : null,
                      l.InputProps.endAdornment
                    ),
                  },
                }),
            })
          )
        ),
        y.createElement(
          re,
          { item: !0, xs: 3 },
          y.createElement(Gb, { avatar: !0 })
        )
      )
    );
  },
  rP = y.memo(tP),
  nP = () =>
    y.createElement(
      y.Fragment,
      null,
      y.createElement(
        Tb,
        { sx: { height: 50, pt: 1 }, maxWidth: !1 },
        y.createElement(rP, null),
        y.createElement(lS, null)
      )
    );
var pd = {},
  aP = rt.exports;
Object.defineProperty(pd, '__esModule', { value: !0 });
var qb = (pd.default = void 0),
  iP = aP(nt()),
  oP = L.exports,
  sP = (0, iP.default)(
    (0, oP.jsx)('path', {
      d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z',
    }),
    'AddCircle'
  );
qb = pd.default = sP;
var hd = {},
  lP = rt.exports;
Object.defineProperty(hd, '__esModule', { value: !0 });
var Yb = (hd.default = void 0),
  cP = lP(nt()),
  uP = L.exports,
  fP = (0, cP.default)(
    (0, uP.jsx)('path', {
      d: 'M19 5v14H5V5h14m1.1-2H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9zM11 7h6v2h-6V7zm0 4h6v2h-6v-2zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7z',
    }),
    'ListAlt'
  );
Yb = hd.default = fP;
var vd = {},
  dP = rt.exports;
Object.defineProperty(vd, '__esModule', { value: !0 });
var Kb = (vd.default = void 0),
  pP = dP(nt()),
  hP = L.exports,
  vP = (0, pP.default)(
    (0, hP.jsx)('path', {
      d: 'm16 18 2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z',
    }),
    'TrendingDown'
  );
Kb = vd.default = vP;
var md = {},
  mP = rt.exports;
Object.defineProperty(md, '__esModule', { value: !0 });
var Xb = (md.default = void 0),
  gP = mP(nt()),
  yP = L.exports,
  bP = (0, gP.default)(
    (0, yP.jsx)('path', {
      d: 'M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z',
    }),
    'Assignment'
  );
Xb = md.default = bP;
var gd = {},
  xP = rt.exports;
Object.defineProperty(gd, '__esModule', { value: !0 });
var Jb = (gd.default = void 0),
  wP = xP(nt()),
  _P = L.exports,
  OP = (0, wP.default)(
    (0, _P.jsx)('path', { d: 'M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z' }),
    'FormatQuote'
  );
Jb = gd.default = OP;
function SP(e) {
  return Be('MuiListItem', e);
}
const EP = We('MuiListItem', [
    'root',
    'container',
    'focusVisible',
    'dense',
    'alignItemsFlexStart',
    'disabled',
    'divider',
    'gutters',
    'padding',
    'button',
    'secondaryAction',
    'selected',
  ]),
  Kn = EP;
function $P(e) {
  return Be('MuiListItemButton', e);
}
const AP = We('MuiListItemButton', [
    'root',
    'focusVisible',
    'dense',
    'alignItemsFlexStart',
    'disabled',
    'divider',
    'gutters',
    'selected',
  ]),
  Xn = AP,
  CP = [
    'alignItems',
    'autoFocus',
    'component',
    'children',
    'dense',
    'disableGutters',
    'divider',
    'focusVisibleClassName',
    'selected',
  ],
  PP = (e, t) => {
    const { ownerState: r } = e;
    return [
      t.root,
      r.dense && t.dense,
      r.alignItems === 'flex-start' && t.alignItemsFlexStart,
      r.divider && t.divider,
      !r.disableGutters && t.gutters,
    ];
  },
  kP = (e) => {
    const {
        alignItems: t,
        classes: r,
        dense: n,
        disabled: a,
        disableGutters: i,
        divider: o,
        selected: s,
      } = e,
      c = Le(
        {
          root: [
            'root',
            n && 'dense',
            !i && 'gutters',
            o && 'divider',
            a && 'disabled',
            t === 'flex-start' && 'alignItemsFlexStart',
            s && 'selected',
          ],
        },
        $P,
        r
      );
    return I({}, r, c);
  },
  TP = ae(fa, {
    shouldForwardProp: (e) => Bf(e) || e === 'classes',
    name: 'MuiListItemButton',
    slot: 'Root',
    overridesResolver: PP,
  })(({ theme: e, ownerState: t }) =>
    I(
      {
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'relative',
        textDecoration: 'none',
        minWidth: 0,
        boxSizing: 'border-box',
        textAlign: 'left',
        paddingTop: 8,
        paddingBottom: 8,
        transition: e.transitions.create('background-color', {
          duration: e.transitions.duration.shortest,
        }),
        '&:hover': {
          textDecoration: 'none',
          backgroundColor: (e.vars || e).palette.action.hover,
          '@media (hover: none)': { backgroundColor: 'transparent' },
        },
        [`&.${Xn.selected}`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
            : ke(e.palette.primary.main, e.palette.action.selectedOpacity),
          [`&.${Xn.focusVisible}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
              : ke(
                  e.palette.primary.main,
                  e.palette.action.selectedOpacity +
                    e.palette.action.focusOpacity
                ),
          },
        },
        [`&.${Xn.selected}:hover`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
            : ke(
                e.palette.primary.main,
                e.palette.action.selectedOpacity + e.palette.action.hoverOpacity
              ),
          '@media (hover: none)': {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
              : ke(e.palette.primary.main, e.palette.action.selectedOpacity),
          },
        },
        [`&.${Xn.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette.action.focus,
        },
        [`&.${Xn.disabled}`]: {
          opacity: (e.vars || e).palette.action.disabledOpacity,
        },
      },
      t.divider && {
        borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
        backgroundClip: 'padding-box',
      },
      t.alignItems === 'flex-start' && { alignItems: 'flex-start' },
      !t.disableGutters && { paddingLeft: 16, paddingRight: 16 },
      t.dense && { paddingTop: 4, paddingBottom: 4 }
    )
  ),
  MP = E.exports.forwardRef(function (t, r) {
    const n = je({ props: t, name: 'MuiListItemButton' }),
      {
        alignItems: a = 'center',
        autoFocus: i = !1,
        component: o = 'div',
        children: s,
        dense: l = !1,
        disableGutters: c = !1,
        divider: u = !1,
        focusVisibleClassName: f,
        selected: d = !1,
      } = n,
      h = $e(n, CP),
      v = E.exports.useContext(Ar),
      p = { dense: l || v.dense || !1, alignItems: a, disableGutters: c },
      m = E.exports.useRef(null);
    ua(() => {
      i && m.current && m.current.focus();
    }, [i]);
    const g = I({}, n, {
        alignItems: a,
        dense: p.dense,
        disableGutters: c,
        divider: u,
        selected: d,
      }),
      _ = kP(g),
      x = qr(m, r);
    return L.exports.jsx(Ar.Provider, {
      value: p,
      children: L.exports.jsx(
        TP,
        I(
          {
            ref: x,
            href: h.href || h.to,
            component: (h.href || h.to) && o === 'div' ? 'a' : o,
            focusVisibleClassName: he(_.focusVisible, f),
            ownerState: g,
          },
          h,
          { classes: _, children: s }
        )
      ),
    });
  }),
  IP = MP;
function RP(e) {
  return Be('MuiListItemSecondaryAction', e);
}
We('MuiListItemSecondaryAction', ['root', 'disableGutters']);
const DP = ['className'],
  jP = (e) => {
    const { disableGutters: t, classes: r } = e;
    return Le({ root: ['root', t && 'disableGutters'] }, RP, r);
  },
  NP = ae('div', {
    name: 'MuiListItemSecondaryAction',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.root, r.disableGutters && t.disableGutters];
    },
  })(({ ownerState: e }) =>
    I(
      {
        position: 'absolute',
        right: 16,
        top: '50%',
        transform: 'translateY(-50%)',
      },
      e.disableGutters && { right: 0 }
    )
  ),
  Zb = E.exports.forwardRef(function (t, r) {
    const n = je({ props: t, name: 'MuiListItemSecondaryAction' }),
      { className: a } = n,
      i = $e(n, DP),
      o = E.exports.useContext(Ar),
      s = I({}, n, { disableGutters: o.disableGutters }),
      l = jP(s);
    return L.exports.jsx(
      NP,
      I({ className: he(l.root, a), ownerState: s, ref: r }, i)
    );
  });
Zb.muiName = 'ListItemSecondaryAction';
const LP = Zb,
  BP = ['className'],
  FP = [
    'alignItems',
    'autoFocus',
    'button',
    'children',
    'className',
    'component',
    'components',
    'componentsProps',
    'ContainerComponent',
    'ContainerProps',
    'dense',
    'disabled',
    'disableGutters',
    'disablePadding',
    'divider',
    'focusVisibleClassName',
    'secondaryAction',
    'selected',
  ],
  zP = (e, t) => {
    const { ownerState: r } = e;
    return [
      t.root,
      r.dense && t.dense,
      r.alignItems === 'flex-start' && t.alignItemsFlexStart,
      r.divider && t.divider,
      !r.disableGutters && t.gutters,
      !r.disablePadding && t.padding,
      r.button && t.button,
      r.hasSecondaryAction && t.secondaryAction,
    ];
  },
  WP = (e) => {
    const {
      alignItems: t,
      button: r,
      classes: n,
      dense: a,
      disabled: i,
      disableGutters: o,
      disablePadding: s,
      divider: l,
      hasSecondaryAction: c,
      selected: u,
    } = e;
    return Le(
      {
        root: [
          'root',
          a && 'dense',
          !o && 'gutters',
          !s && 'padding',
          l && 'divider',
          i && 'disabled',
          r && 'button',
          t === 'flex-start' && 'alignItemsFlexStart',
          c && 'secondaryAction',
          u && 'selected',
        ],
        container: ['container'],
      },
      SP,
      n
    );
  },
  UP = ae('div', { name: 'MuiListItem', slot: 'Root', overridesResolver: zP })(
    ({ theme: e, ownerState: t }) =>
      I(
        {
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          position: 'relative',
          textDecoration: 'none',
          width: '100%',
          boxSizing: 'border-box',
          textAlign: 'left',
        },
        !t.disablePadding &&
          I(
            { paddingTop: 8, paddingBottom: 8 },
            t.dense && { paddingTop: 4, paddingBottom: 4 },
            !t.disableGutters && { paddingLeft: 16, paddingRight: 16 },
            !!t.secondaryAction && { paddingRight: 48 }
          ),
        !!t.secondaryAction && { [`& > .${Xn.root}`]: { paddingRight: 48 } },
        {
          [`&.${Kn.focusVisible}`]: {
            backgroundColor: (e.vars || e).palette.action.focus,
          },
          [`&.${Kn.selected}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
              : ke(e.palette.primary.main, e.palette.action.selectedOpacity),
            [`&.${Kn.focusVisible}`]: {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
                : ke(
                    e.palette.primary.main,
                    e.palette.action.selectedOpacity +
                      e.palette.action.focusOpacity
                  ),
            },
          },
          [`&.${Kn.disabled}`]: {
            opacity: (e.vars || e).palette.action.disabledOpacity,
          },
        },
        t.alignItems === 'flex-start' && { alignItems: 'flex-start' },
        t.divider && {
          borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
          backgroundClip: 'padding-box',
        },
        t.button && {
          transition: e.transitions.create('background-color', {
            duration: e.transitions.duration.shortest,
          }),
          '&:hover': {
            textDecoration: 'none',
            backgroundColor: (e.vars || e).palette.action.hover,
            '@media (hover: none)': { backgroundColor: 'transparent' },
          },
          [`&.${Kn.selected}:hover`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
              : ke(
                  e.palette.primary.main,
                  e.palette.action.selectedOpacity +
                    e.palette.action.hoverOpacity
                ),
            '@media (hover: none)': {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
                : ke(e.palette.primary.main, e.palette.action.selectedOpacity),
            },
          },
        },
        t.hasSecondaryAction && { paddingRight: 48 }
      )
  ),
  HP = ae('li', {
    name: 'MuiListItem',
    slot: 'Container',
    overridesResolver: (e, t) => t.container,
  })({ position: 'relative' }),
  VP = E.exports.forwardRef(function (t, r) {
    const n = je({ props: t, name: 'MuiListItem' }),
      {
        alignItems: a = 'center',
        autoFocus: i = !1,
        button: o = !1,
        children: s,
        className: l,
        component: c,
        components: u = {},
        componentsProps: f = {},
        ContainerComponent: d = 'li',
        ContainerProps: { className: h } = {},
        dense: v = !1,
        disabled: p = !1,
        disableGutters: m = !1,
        disablePadding: g = !1,
        divider: _ = !1,
        focusVisibleClassName: x,
        secondaryAction: b,
        selected: w = !1,
      } = n,
      O = $e(n.ContainerProps, BP),
      S = $e(n, FP),
      $ = E.exports.useContext(Ar),
      A = { dense: v || $.dense || !1, alignItems: a, disableGutters: m },
      P = E.exports.useRef(null);
    ua(() => {
      i && P.current && P.current.focus();
    }, [i]);
    const C = E.exports.Children.toArray(s),
      k = C.length && $y(C[C.length - 1], ['ListItemSecondaryAction']),
      T = I({}, n, {
        alignItems: a,
        autoFocus: i,
        button: o,
        dense: A.dense,
        disabled: p,
        disableGutters: m,
        disablePadding: g,
        divider: _,
        hasSecondaryAction: k,
        selected: w,
      }),
      D = WP(T),
      j = qr(P, r),
      R = u.Root || UP,
      N = f.root || {},
      z = I({ className: he(D.root, N.className, l), disabled: p }, S);
    let M = c || 'li';
    return (
      o &&
        ((z.component = c || 'div'),
        (z.focusVisibleClassName = he(Kn.focusVisible, x)),
        (M = fa)),
      k
        ? ((M = !z.component && !c ? 'div' : M),
          d === 'li' &&
            (M === 'li'
              ? (M = 'div')
              : z.component === 'li' && (z.component = 'div')),
          L.exports.jsx(Ar.Provider, {
            value: A,
            children: L.exports.jsxs(
              HP,
              I(
                { as: d, className: he(D.container, h), ref: j, ownerState: T },
                O,
                {
                  children: [
                    L.exports.jsx(
                      R,
                      I(
                        {},
                        N,
                        !kp(R) && { as: M, ownerState: I({}, T, N.ownerState) },
                        z,
                        { children: C }
                      )
                    ),
                    C.pop(),
                  ],
                }
              )
            ),
          }))
        : L.exports.jsx(Ar.Provider, {
            value: A,
            children: L.exports.jsxs(
              R,
              I(
                {},
                N,
                { as: M, ref: j, ownerState: T },
                !kp(R) && { ownerState: I({}, T, N.ownerState) },
                z,
                { children: [C, b && L.exports.jsx(LP, { children: b })] }
              )
            ),
          })
    );
  }),
  GP = VP,
  qP = ({ text: e, icon: t }) => {
    const r = vt(Xy);
    return y.createElement(
      GP,
      { disablePadding: !0, sx: { display: 'block' } },
      y.createElement(
        IP,
        {
          sx: {
            minHeight: 48,
            justifyContent: r ? 'initial' : 'center',
            px: 2.5,
          },
        },
        y.createElement(
          ai,
          { sx: { minWidth: 0, mr: r ? 3 : 'auto', justifyContent: 'center' } },
          t
        ),
        y.createElement(MC, { primary: e, sx: { opacity: r ? 1 : 0 } })
      )
    );
  },
  Ha = y.memo(qP);
var yd = {},
  YP = rt.exports;
Object.defineProperty(yd, '__esModule', { value: !0 });
var Qb = (yd.default = void 0),
  KP = YP(nt()),
  XP = L.exports,
  JP = (0, KP.default)(
    (0, XP.jsx)('path', { d: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' }),
    'Home'
  );
Qb = yd.default = JP;
const e0 = 240,
  kh = (e) => ({
    width: e0,
    transition: e.transitions.create('width', {
      easing: e.transitions.easing.sharp,
      duration: e.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  }),
  Th = (e) => ({
    transition: e.transitions.create('width', {
      easing: e.transitions.easing.sharp,
      duration: e.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: window.isMobile ? '0px' : `calc(${e.spacing(7)} + 1px)`,
    [e.breakpoints.up('sm')]: { width: `calc(${e.spacing(8)} + 1px)` },
  }),
  ZP = ae(g$, { shouldForwardProp: (e) => e !== 'open' })(
    ({ theme: e, open: t }) => ({
      width: e0,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      position: window.isMobile ? 'absolute' : 'inherit',
      zIndex: 100,
      boxSizing: 'border-box',
      ...(t && { ...kh(e), '& .MuiDrawer-paper': kh(e) }),
      ...(!t && { ...Th(e), '& .MuiDrawer-paper': Th(e) }),
    })
  ),
  nc = E.exports.memo(Ew),
  QP = () => {
    const e = vt(Xy),
      t = vt(Qy),
      r = _r();
    return E.exports.createElement(
      Ne,
      { sx: { display: 'flex' } },
      E.exports.createElement(Ne, {
        component: 'div',
        sx: {
          position: 'fixed',
          width: '100%',
          height: '100%',
          zIndex: 99,
          left: '0px',
          display: window.isMobile && e ? 'block' : 'none',
        },
        onClick: () => r(Ky()),
      }),
      E.exports.createElement(
        ZP,
        { variant: 'permanent', open: e },
        E.exports.createElement(
          nc,
          null,
          E.exports.createElement(
            Bb,
            { direction: 'row', spacing: 2, sx: { px: 2.5 } },
            !window.isMobile && E.exports.createElement(Lb, null),
            E.exports.createElement(
              Hn,
              { to: '/', className: 'color-inherit' },
              E.exports.createElement(Qb, {
                className: 'home-icon',
                sx: {
                  marginLeft: window.isMobile ? '80px !important' : 'inherit',
                },
              })
            )
          )
        ),
        E.exports.createElement(
          nc,
          null,
          E.exports.createElement(
            Hn,
            {
              to: 'add-stock',
              className: ({ isActive: n }) =>
                n ? 'nav-active nav-link' : 'nav-link',
            },
            E.exports.createElement(Ha, {
              text: 'Add Stock',
              icon: E.exports.createElement(qb, null),
            })
          ),
          E.exports.createElement(
            Hn,
            {
              to: 'stock-list',
              className: ({ isActive: n }) =>
                n ? 'nav-active nav-link' : 'nav-link',
            },
            E.exports.createElement(Ha, {
              text: 'Stock List',
              icon: E.exports.createElement(Yb, null),
            })
          ),
          E.exports.createElement(
            Hn,
            {
              to: 'discount-rate',
              className: ({ isActive: n }) =>
                n ? 'nav-active nav-link' : 'nav-link',
            },
            E.exports.createElement(Ha, {
              text: `Discount Rate: ${t}%`,
              icon: E.exports.createElement(Kb, null),
            })
          )
        ),
        E.exports.createElement(cr, null),
        E.exports.createElement(
          nc,
          null,
          E.exports.createElement(
            Hn,
            {
              to: 'stock-tenets',
              className: ({ isActive: n }) =>
                n ? 'nav-active nav-link' : 'nav-link',
            },
            E.exports.createElement(Ha, {
              text: 'Stock tenets',
              icon: E.exports.createElement(Xb, null),
            })
          ),
          E.exports.createElement(
            Hn,
            {
              to: 'famous-quotes',
              className: ({ isActive: n }) =>
                n ? 'nav-active nav-link' : 'nav-link',
            },
            E.exports.createElement(Ha, {
              text: 'Famous Quotes',
              icon: E.exports.createElement(Jb, null),
            })
          ),
          E.exports.createElement(
            Ne,
            { component: 'div', sx: { textAlign: 'center' } },
            E.exports.createElement(Gb, { sidebar: !0 })
          )
        )
      ),
      E.exports.createElement(nP, null)
    );
  },
  e2 = () => y.createElement(Tb, { maxWidth: !1 }, y.createElement(QP, null));
function t2(e) {
  return Be('MuiAlert', e);
}
const r2 = We('MuiAlert', [
    'root',
    'action',
    'icon',
    'message',
    'filled',
    'filledSuccess',
    'filledInfo',
    'filledWarning',
    'filledError',
    'outlined',
    'outlinedSuccess',
    'outlinedInfo',
    'outlinedWarning',
    'outlinedError',
    'standard',
    'standardSuccess',
    'standardInfo',
    'standardWarning',
    'standardError',
  ]),
  Mh = r2,
  n2 = pn(
    L.exports.jsx('path', {
      d: 'M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z',
    }),
    'SuccessOutlined'
  ),
  a2 = pn(
    L.exports.jsx('path', {
      d: 'M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z',
    }),
    'ReportProblemOutlined'
  ),
  i2 = pn(
    L.exports.jsx('path', {
      d: 'M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
    }),
    'ErrorOutline'
  ),
  o2 = pn(
    L.exports.jsx('path', {
      d: 'M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z',
    }),
    'InfoOutlined'
  );
var Ih;
const s2 = [
    'action',
    'children',
    'className',
    'closeText',
    'color',
    'icon',
    'iconMapping',
    'onClose',
    'role',
    'severity',
    'variant',
  ],
  l2 = (e) => {
    const { variant: t, color: r, severity: n, classes: a } = e,
      i = {
        root: ['root', `${t}${X(r || n)}`, `${t}`],
        icon: ['icon'],
        message: ['message'],
        action: ['action'],
      };
    return Le(i, t2, a);
  },
  c2 = ae(jr, {
    name: 'MuiAlert',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        t[r.variant],
        t[`${r.variant}${X(r.color || r.severity)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) => {
    const r = e.palette.mode === 'light' ? zc : Wc,
      n = e.palette.mode === 'light' ? Wc : zc,
      a = t.color || t.severity;
    return I(
      {},
      e.typography.body2,
      { backgroundColor: 'transparent', display: 'flex', padding: '6px 16px' },
      a &&
        t.variant === 'standard' && {
          color: e.vars
            ? e.vars.palette.Alert[`${a}Color`]
            : r(e.palette[a].light, 0.6),
          backgroundColor: e.vars
            ? e.vars.palette.Alert[`${a}StandardBg`]
            : n(e.palette[a].light, 0.9),
          [`& .${Mh.icon}`]: e.vars
            ? { color: e.vars.palette.Alert[`${a}IconColor`] }
            : {
                color:
                  e.palette.mode === 'dark'
                    ? e.palette[a].main
                    : e.palette[a].light,
              },
        },
      a &&
        t.variant === 'outlined' && {
          color: e.vars
            ? e.vars.palette.Alert[`${a}Color`]
            : r(e.palette[a].light, 0.6),
          border: `1px solid ${(e.vars || e).palette[a].light}`,
          [`& .${Mh.icon}`]: e.vars
            ? { color: e.vars.palette.Alert[`${a}IconColor`] }
            : {
                color:
                  e.palette.mode === 'dark'
                    ? e.palette[a].main
                    : e.palette[a].light,
              },
        },
      a &&
        t.variant === 'filled' &&
        I(
          { fontWeight: e.typography.fontWeightMedium },
          e.vars
            ? {
                color: e.vars.palette.Alert[`${a}FilledColor`],
                backgroundColor: e.vars.palette.Alert[`${a}FilledBg`],
              }
            : {
                backgroundColor:
                  e.palette.mode === 'dark'
                    ? e.palette[a].dark
                    : e.palette[a].main,
                color: e.palette.getContrastText(
                  e.palette.mode === 'dark'
                    ? e.palette[a].dark
                    : e.palette[a].main
                ),
              }
        )
    );
  }),
  u2 = ae('div', {
    name: 'MuiAlert',
    slot: 'Icon',
    overridesResolver: (e, t) => t.icon,
  })({
    marginRight: 12,
    padding: '7px 0',
    display: 'flex',
    fontSize: 22,
    opacity: 0.9,
  }),
  f2 = ae('div', {
    name: 'MuiAlert',
    slot: 'Message',
    overridesResolver: (e, t) => t.message,
  })({ padding: '8px 0', minWidth: 0, overflow: 'auto' }),
  Rh = ae('div', {
    name: 'MuiAlert',
    slot: 'Action',
    overridesResolver: (e, t) => t.action,
  })({
    display: 'flex',
    alignItems: 'flex-start',
    padding: '4px 0 0 16px',
    marginLeft: 'auto',
    marginRight: -8,
  }),
  Dh = {
    success: L.exports.jsx(n2, { fontSize: 'inherit' }),
    warning: L.exports.jsx(a2, { fontSize: 'inherit' }),
    error: L.exports.jsx(i2, { fontSize: 'inherit' }),
    info: L.exports.jsx(o2, { fontSize: 'inherit' }),
  },
  d2 = E.exports.forwardRef(function (t, r) {
    const n = je({ props: t, name: 'MuiAlert' }),
      {
        action: a,
        children: i,
        className: o,
        closeText: s = 'Close',
        color: l,
        icon: c,
        iconMapping: u = Dh,
        onClose: f,
        role: d = 'alert',
        severity: h = 'success',
        variant: v = 'standard',
      } = n,
      p = $e(n, s2),
      m = I({}, n, { color: l, severity: h, variant: v }),
      g = l2(m);
    return L.exports.jsxs(
      c2,
      I(
        {
          role: d,
          elevation: 0,
          ownerState: m,
          className: he(g.root, o),
          ref: r,
        },
        p,
        {
          children: [
            c !== !1
              ? L.exports.jsx(u2, {
                  ownerState: m,
                  className: g.icon,
                  children: c || u[h] || Dh[h],
                })
              : null,
            L.exports.jsx(f2, {
              ownerState: m,
              className: g.message,
              children: i,
            }),
            a != null
              ? L.exports.jsx(Rh, {
                  ownerState: m,
                  className: g.action,
                  children: a,
                })
              : null,
            a == null && f
              ? L.exports.jsx(Rh, {
                  ownerState: m,
                  className: g.action,
                  children: L.exports.jsx(wr, {
                    size: 'small',
                    'aria-label': s,
                    title: s,
                    color: 'inherit',
                    onClick: f,
                    children:
                      Ih || (Ih = L.exports.jsx(Db, { fontSize: 'small' })),
                  }),
                })
              : null,
          ],
        }
      )
    );
  }),
  t0 = d2;
function p2(e) {
  return Be('MuiAlertTitle', e);
}
We('MuiAlertTitle', ['root']);
const h2 = ['className'],
  v2 = (e) => {
    const { classes: t } = e;
    return Le({ root: ['root'] }, p2, t);
  },
  m2 = ae(ct, {
    name: 'MuiAlertTitle',
    slot: 'Root',
    overridesResolver: (e, t) => t.root,
  })(({ theme: e }) => ({
    fontWeight: e.typography.fontWeightMedium,
    marginTop: -2,
  })),
  g2 = E.exports.forwardRef(function (t, r) {
    const n = je({ props: t, name: 'MuiAlertTitle' }),
      { className: a } = n,
      i = $e(n, h2),
      o = n,
      s = v2(o);
    return L.exports.jsx(
      m2,
      I(
        {
          gutterBottom: !0,
          component: 'div',
          ownerState: o,
          ref: r,
          className: he(s.root, a),
        },
        i
      )
    );
  }),
  r0 = g2;
var bd = {},
  y2 = rt.exports;
Object.defineProperty(bd, '__esModule', { value: !0 });
var Li = (bd.default = void 0),
  b2 = y2(nt()),
  x2 = L.exports,
  w2 = (0, b2.default)(
    (0, x2.jsx)('path', {
      d: 'M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
    }),
    'Close'
  );
Li = bd.default = w2;
const _2 = () =>
    y.createElement(
      t0,
      {
        severity: 'error',
        className: 'alert-box',
        variant: 'filled',
        id: 'guest-alert-box',
      },
      y.createElement(
        r0,
        null,
        'Error',
        y.createElement(Li, {
          className: 'alert-close-icon',
          onClick: () => {
            document.getElementById('guest-alert-box').style.display = 'none';
          },
        })
      ),
      'Guest is not allowed to perform this action!'
    ),
  O2 = () => {
    const e = _r(),
      { open: t, text: r } = vt(iO);
    return y.createElement(
      t0,
      {
        severity: 'error',
        className: 'alert-box',
        variant: 'filled',
        sx: { display: t ? 'flex!important' : 'none!important' },
      },
      y.createElement(
        r0,
        null,
        'Error',
        y.createElement(Li, {
          className: 'alert-close-icon',
          onClick: () => e(nb()),
        })
      ),
      r
    );
  },
  S2 = () => {
    const e = _r(),
      t = Ws('(prefers-color-scheme: dark)');
    E.exports.useEffect(() => {
      e(Xc(t ? 'dark' : 'light'));
    }, [t, e]);
    const { mode: r } = vt(Kf),
      n = y.useMemo(
        () => Oy({ palette: { mode: r === 'dark' ? 'dark' : 'light' } }),
        [r]
      );
    return (
      E.exports.useEffect(() => {
        xe({ method: 'get', url: '/get-discount-rate' }, function (a) {
          e(Zy(a.data.value));
        });
      }, [e]),
      y.createElement(
        $w,
        { theme: n },
        y.createElement(Aw, null),
        y.createElement(_2, null),
        y.createElement(O2, null),
        y.createElement(e2, null)
      )
    );
  };
function E2(e) {
  return Be('MuiDialog', e);
}
const $2 = We('MuiDialog', [
    'root',
    'scrollPaper',
    'scrollBody',
    'container',
    'paper',
    'paperScrollPaper',
    'paperScrollBody',
    'paperWidthFalse',
    'paperWidthXs',
    'paperWidthSm',
    'paperWidthMd',
    'paperWidthLg',
    'paperWidthXl',
    'paperFullWidth',
    'paperFullScreen',
  ]),
  ac = $2,
  A2 = E.exports.createContext({}),
  n0 = A2,
  C2 = [
    'aria-describedby',
    'aria-labelledby',
    'BackdropComponent',
    'BackdropProps',
    'children',
    'className',
    'disableEscapeKeyDown',
    'fullScreen',
    'fullWidth',
    'maxWidth',
    'onBackdropClick',
    'onClose',
    'open',
    'PaperComponent',
    'PaperProps',
    'scroll',
    'TransitionComponent',
    'transitionDuration',
    'TransitionProps',
  ],
  P2 = ae(Cw, {
    name: 'MuiDialog',
    slot: 'Backdrop',
    overrides: (e, t) => t.backdrop,
  })({ zIndex: -1 }),
  k2 = (e) => {
    const {
        classes: t,
        scroll: r,
        maxWidth: n,
        fullWidth: a,
        fullScreen: i,
      } = e,
      o = {
        root: ['root'],
        container: ['container', `scroll${X(r)}`],
        paper: [
          'paper',
          `paperScroll${X(r)}`,
          `paperWidth${X(String(n))}`,
          a && 'paperFullWidth',
          i && 'paperFullScreen',
        ],
      };
    return Le(o, E2, t);
  },
  T2 = ae(Ay, {
    name: 'MuiDialog',
    slot: 'Root',
    overridesResolver: (e, t) => t.root,
  })({ '@media print': { position: 'absolute !important' } }),
  M2 = ae('div', {
    name: 'MuiDialog',
    slot: 'Container',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.container, t[`scroll${X(r.scroll)}`]];
    },
  })(({ ownerState: e }) =>
    I(
      { height: '100%', '@media print': { height: 'auto' }, outline: 0 },
      e.scroll === 'paper' && {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      e.scroll === 'body' && {
        overflowY: 'auto',
        overflowX: 'hidden',
        textAlign: 'center',
        '&:after': {
          content: '""',
          display: 'inline-block',
          verticalAlign: 'middle',
          height: '100%',
          width: '0',
        },
      }
    )
  ),
  I2 = ae(jr, {
    name: 'MuiDialog',
    slot: 'Paper',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.paper,
        t[`scrollPaper${X(r.scroll)}`],
        t[`paperWidth${X(String(r.maxWidth))}`],
        r.fullWidth && t.paperFullWidth,
        r.fullScreen && t.paperFullScreen,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    I(
      {
        margin: 32,
        position: 'relative',
        overflowY: 'auto',
        '@media print': { overflowY: 'visible', boxShadow: 'none' },
      },
      t.scroll === 'paper' && {
        display: 'flex',
        flexDirection: 'column',
        maxHeight: 'calc(100% - 64px)',
      },
      t.scroll === 'body' && {
        display: 'inline-block',
        verticalAlign: 'middle',
        textAlign: 'left',
      },
      !t.maxWidth && { maxWidth: 'calc(100% - 64px)' },
      t.maxWidth === 'xs' && {
        maxWidth:
          e.breakpoints.unit === 'px'
            ? Math.max(e.breakpoints.values.xs, 444)
            : `${e.breakpoints.values.xs}${e.breakpoints.unit}`,
        [`&.${ac.paperScrollBody}`]: {
          [e.breakpoints.down(Math.max(e.breakpoints.values.xs, 444) + 32 * 2)]:
            { maxWidth: 'calc(100% - 64px)' },
        },
      },
      t.maxWidth &&
        t.maxWidth !== 'xs' && {
          maxWidth: `${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`,
          [`&.${ac.paperScrollBody}`]: {
            [e.breakpoints.down(e.breakpoints.values[t.maxWidth] + 32 * 2)]: {
              maxWidth: 'calc(100% - 64px)',
            },
          },
        },
      t.fullWidth && { width: 'calc(100% - 64px)' },
      t.fullScreen && {
        margin: 0,
        width: '100%',
        maxWidth: '100%',
        height: '100%',
        maxHeight: 'none',
        borderRadius: 0,
        [`&.${ac.paperScrollBody}`]: { margin: 0, maxWidth: '100%' },
      }
    )
  ),
  R2 = E.exports.forwardRef(function (t, r) {
    const n = je({ props: t, name: 'MuiDialog' }),
      a = Ln(),
      i = {
        enter: a.transitions.duration.enteringScreen,
        exit: a.transitions.duration.leavingScreen,
      },
      {
        'aria-describedby': o,
        'aria-labelledby': s,
        BackdropComponent: l,
        BackdropProps: c,
        children: u,
        className: f,
        disableEscapeKeyDown: d = !1,
        fullScreen: h = !1,
        fullWidth: v = !1,
        maxWidth: p = 'sm',
        onBackdropClick: m,
        onClose: g,
        open: _,
        PaperComponent: x = jr,
        PaperProps: b = {},
        scroll: w = 'paper',
        TransitionComponent: O = Pw,
        transitionDuration: S = i,
        TransitionProps: $,
      } = n,
      A = $e(n, C2),
      P = I({}, n, {
        disableEscapeKeyDown: d,
        fullScreen: h,
        fullWidth: v,
        maxWidth: p,
        scroll: w,
      }),
      C = k2(P),
      k = E.exports.useRef(),
      T = (N) => {
        k.current = N.target === N.currentTarget;
      },
      D = (N) => {
        !k.current ||
          ((k.current = null), m && m(N), g && g(N, 'backdropClick'));
      },
      j = Nf(s),
      R = E.exports.useMemo(() => ({ titleId: j }), [j]);
    return L.exports.jsx(
      T2,
      I(
        {
          className: he(C.root, f),
          closeAfterTransition: !0,
          components: { Backdrop: P2 },
          componentsProps: { backdrop: I({ transitionDuration: S, as: l }, c) },
          disableEscapeKeyDown: d,
          onClose: g,
          open: _,
          ref: r,
          onClick: D,
          ownerState: P,
        },
        A,
        {
          children: L.exports.jsx(
            O,
            I({ appear: !0, in: _, timeout: S, role: 'presentation' }, $, {
              children: L.exports.jsx(M2, {
                className: he(C.container),
                onMouseDown: T,
                ownerState: P,
                children: L.exports.jsx(
                  I2,
                  I(
                    {
                      as: x,
                      elevation: 24,
                      role: 'dialog',
                      'aria-describedby': o,
                      'aria-labelledby': j,
                    },
                    b,
                    {
                      className: he(C.paper, b.className),
                      ownerState: P,
                      children: L.exports.jsx(n0.Provider, {
                        value: R,
                        children: u,
                      }),
                    }
                  )
                ),
              }),
            })
          ),
        }
      )
    );
  }),
  il = R2;
function D2(e) {
  return Be('MuiDialogActions', e);
}
We('MuiDialogActions', ['root', 'spacing']);
const j2 = ['className', 'disableSpacing'],
  N2 = (e) => {
    const { classes: t, disableSpacing: r } = e;
    return Le({ root: ['root', !r && 'spacing'] }, D2, t);
  },
  L2 = ae('div', {
    name: 'MuiDialogActions',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.root, !r.disableSpacing && t.spacing];
    },
  })(({ ownerState: e }) =>
    I(
      {
        display: 'flex',
        alignItems: 'center',
        padding: 8,
        justifyContent: 'flex-end',
        flex: '0 0 auto',
      },
      !e.disableSpacing && { '& > :not(:first-of-type)': { marginLeft: 8 } }
    )
  ),
  B2 = E.exports.forwardRef(function (t, r) {
    const n = je({ props: t, name: 'MuiDialogActions' }),
      { className: a, disableSpacing: i = !1 } = n,
      o = $e(n, j2),
      s = I({}, n, { disableSpacing: i }),
      l = N2(s);
    return L.exports.jsx(
      L2,
      I({ className: he(l.root, a), ownerState: s, ref: r }, o)
    );
  }),
  ol = B2;
function F2(e) {
  return Be('MuiDialogContent', e);
}
We('MuiDialogContent', ['root', 'dividers']);
function z2(e) {
  return Be('MuiDialogTitle', e);
}
const W2 = We('MuiDialogTitle', ['root']),
  U2 = W2,
  H2 = ['className', 'dividers'],
  V2 = (e) => {
    const { classes: t, dividers: r } = e;
    return Le({ root: ['root', r && 'dividers'] }, F2, t);
  },
  G2 = ae('div', {
    name: 'MuiDialogContent',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.root, r.dividers && t.dividers];
    },
  })(({ theme: e, ownerState: t }) =>
    I(
      {
        flex: '1 1 auto',
        WebkitOverflowScrolling: 'touch',
        overflowY: 'auto',
        padding: '20px 24px',
      },
      t.dividers
        ? {
            padding: '16px 24px',
            borderTop: `1px solid ${(e.vars || e).palette.divider}`,
            borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
          }
        : { [`.${U2.root} + &`]: { paddingTop: 0 } }
    )
  ),
  q2 = E.exports.forwardRef(function (t, r) {
    const n = je({ props: t, name: 'MuiDialogContent' }),
      { className: a, dividers: i = !1 } = n,
      o = $e(n, H2),
      s = I({}, n, { dividers: i }),
      l = V2(s);
    return L.exports.jsx(
      G2,
      I({ className: he(l.root, a), ownerState: s, ref: r }, o)
    );
  }),
  a0 = q2,
  Y2 = ['className', 'id'],
  K2 = (e) => {
    const { classes: t } = e;
    return Le({ root: ['root'] }, z2, t);
  },
  X2 = ae(ct, {
    name: 'MuiDialogTitle',
    slot: 'Root',
    overridesResolver: (e, t) => t.root,
  })({ padding: '16px 24px', flex: '0 0 auto' }),
  J2 = E.exports.forwardRef(function (t, r) {
    const n = je({ props: t, name: 'MuiDialogTitle' }),
      { className: a, id: i } = n,
      o = $e(n, Y2),
      s = n,
      l = K2(s),
      { titleId: c = i } = E.exports.useContext(n0);
    return L.exports.jsx(
      X2,
      I(
        {
          component: 'h2',
          className: he(l.root, a),
          ownerState: s,
          ref: r,
          variant: 'h6',
          id: c,
        },
        o
      )
    );
  }),
  i0 = J2,
  Z2 = E.exports.createContext(),
  o0 = Z2;
function Q2(e) {
  return Be('MuiTable', e);
}
We('MuiTable', ['root', 'stickyHeader']);
const ek = ['className', 'component', 'padding', 'size', 'stickyHeader'],
  tk = (e) => {
    const { classes: t, stickyHeader: r } = e;
    return Le({ root: ['root', r && 'stickyHeader'] }, Q2, t);
  },
  rk = ae('table', {
    name: 'MuiTable',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.root, r.stickyHeader && t.stickyHeader];
    },
  })(({ theme: e, ownerState: t }) =>
    I(
      {
        display: 'table',
        width: '100%',
        borderCollapse: 'collapse',
        borderSpacing: 0,
        '& caption': I({}, e.typography.body2, {
          padding: e.spacing(2),
          color: (e.vars || e).palette.text.secondary,
          textAlign: 'left',
          captionSide: 'bottom',
        }),
      },
      t.stickyHeader && { borderCollapse: 'separate' }
    )
  ),
  jh = 'table',
  nk = E.exports.forwardRef(function (t, r) {
    const n = je({ props: t, name: 'MuiTable' }),
      {
        className: a,
        component: i = jh,
        padding: o = 'normal',
        size: s = 'medium',
        stickyHeader: l = !1,
      } = n,
      c = $e(n, ek),
      u = I({}, n, { component: i, padding: o, size: s, stickyHeader: l }),
      f = tk(u),
      d = E.exports.useMemo(
        () => ({ padding: o, size: s, stickyHeader: l }),
        [o, s, l]
      );
    return L.exports.jsx(o0.Provider, {
      value: d,
      children: L.exports.jsx(
        rk,
        I(
          {
            as: i,
            role: i === jh ? null : 'table',
            ref: r,
            className: he(f.root, a),
            ownerState: u,
          },
          c
        )
      ),
    });
  }),
  sl = nk,
  ak = E.exports.createContext(),
  ll = ak;
function ik(e) {
  return Be('MuiTableBody', e);
}
We('MuiTableBody', ['root']);
const ok = ['className', 'component'],
  sk = (e) => {
    const { classes: t } = e;
    return Le({ root: ['root'] }, ik, t);
  },
  lk = ae('tbody', {
    name: 'MuiTableBody',
    slot: 'Root',
    overridesResolver: (e, t) => t.root,
  })({ display: 'table-row-group' }),
  ck = { variant: 'body' },
  Nh = 'tbody',
  uk = E.exports.forwardRef(function (t, r) {
    const n = je({ props: t, name: 'MuiTableBody' }),
      { className: a, component: i = Nh } = n,
      o = $e(n, ok),
      s = I({}, n, { component: i }),
      l = sk(s);
    return L.exports.jsx(ll.Provider, {
      value: ck,
      children: L.exports.jsx(
        lk,
        I(
          {
            className: he(l.root, a),
            as: i,
            ref: r,
            role: i === Nh ? null : 'rowgroup',
            ownerState: s,
          },
          o
        )
      ),
    });
  }),
  cl = uk;
function fk(e) {
  return Be('MuiTableCell', e);
}
const dk = We('MuiTableCell', [
    'root',
    'head',
    'body',
    'footer',
    'sizeSmall',
    'sizeMedium',
    'paddingCheckbox',
    'paddingNone',
    'alignLeft',
    'alignCenter',
    'alignRight',
    'alignJustify',
    'stickyHeader',
  ]),
  s0 = dk,
  pk = [
    'align',
    'className',
    'component',
    'padding',
    'scope',
    'size',
    'sortDirection',
    'variant',
  ],
  hk = (e) => {
    const {
        classes: t,
        variant: r,
        align: n,
        padding: a,
        size: i,
        stickyHeader: o,
      } = e,
      s = {
        root: [
          'root',
          r,
          o && 'stickyHeader',
          n !== 'inherit' && `align${X(n)}`,
          a !== 'normal' && `padding${X(a)}`,
          `size${X(i)}`,
        ],
      };
    return Le(s, fk, t);
  },
  vk = ae('td', {
    name: 'MuiTableCell',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        t[r.variant],
        t[`size${X(r.size)}`],
        r.padding !== 'normal' && t[`padding${X(r.padding)}`],
        r.align !== 'inherit' && t[`align${X(r.align)}`],
        r.stickyHeader && t.stickyHeader,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    I(
      {},
      e.typography.body2,
      {
        display: 'table-cell',
        verticalAlign: 'inherit',
        borderBottom: e.vars
          ? `1px solid ${e.vars.palette.TableCell.border}`
          : `1px solid
    ${
      e.palette.mode === 'light'
        ? Wc(ke(e.palette.divider, 1), 0.88)
        : zc(ke(e.palette.divider, 1), 0.68)
    }`,
        textAlign: 'left',
        padding: 16,
      },
      t.variant === 'head' && {
        color: (e.vars || e).palette.text.primary,
        lineHeight: e.typography.pxToRem(24),
        fontWeight: e.typography.fontWeightMedium,
      },
      t.variant === 'body' && { color: (e.vars || e).palette.text.primary },
      t.variant === 'footer' && {
        color: (e.vars || e).palette.text.secondary,
        lineHeight: e.typography.pxToRem(21),
        fontSize: e.typography.pxToRem(12),
      },
      t.size === 'small' && {
        padding: '6px 16px',
        [`&.${s0.paddingCheckbox}`]: {
          width: 24,
          padding: '0 12px 0 16px',
          '& > *': { padding: 0 },
        },
      },
      t.padding === 'checkbox' && { width: 48, padding: '0 0 0 4px' },
      t.padding === 'none' && { padding: 0 },
      t.align === 'left' && { textAlign: 'left' },
      t.align === 'center' && { textAlign: 'center' },
      t.align === 'right' && {
        textAlign: 'right',
        flexDirection: 'row-reverse',
      },
      t.align === 'justify' && { textAlign: 'justify' },
      t.stickyHeader && {
        position: 'sticky',
        top: 0,
        zIndex: 2,
        backgroundColor: (e.vars || e).palette.background.default,
      }
    )
  ),
  mk = E.exports.forwardRef(function (t, r) {
    const n = je({ props: t, name: 'MuiTableCell' }),
      {
        align: a = 'inherit',
        className: i,
        component: o,
        padding: s,
        scope: l,
        size: c,
        sortDirection: u,
        variant: f,
      } = n,
      d = $e(n, pk),
      h = E.exports.useContext(o0),
      v = E.exports.useContext(ll),
      p = v && v.variant === 'head';
    let m;
    o ? (m = o) : (m = p ? 'th' : 'td');
    let g = l;
    !g && p && (g = 'col');
    const _ = f || (v && v.variant),
      x = I({}, n, {
        align: a,
        component: m,
        padding: s || (h && h.padding ? h.padding : 'normal'),
        size: c || (h && h.size ? h.size : 'medium'),
        sortDirection: u,
        stickyHeader: _ === 'head' && h && h.stickyHeader,
        variant: _,
      }),
      b = hk(x);
    let w = null;
    return (
      u && (w = u === 'asc' ? 'ascending' : 'descending'),
      L.exports.jsx(
        vk,
        I(
          {
            as: m,
            ref: r,
            className: he(b.root, i),
            'aria-sort': w,
            scope: g,
            ownerState: x,
          },
          d
        )
      )
    );
  }),
  be = mk;
function gk(e) {
  return Be('MuiTableContainer', e);
}
We('MuiTableContainer', ['root']);
const yk = ['className', 'component'],
  bk = (e) => {
    const { classes: t } = e;
    return Le({ root: ['root'] }, gk, t);
  },
  xk = ae('div', {
    name: 'MuiTableContainer',
    slot: 'Root',
    overridesResolver: (e, t) => t.root,
  })({ width: '100%', overflowX: 'auto' }),
  wk = E.exports.forwardRef(function (t, r) {
    const n = je({ props: t, name: 'MuiTableContainer' }),
      { className: a, component: i = 'div' } = n,
      o = $e(n, yk),
      s = I({}, n, { component: i }),
      l = bk(s);
    return L.exports.jsx(
      xk,
      I({ ref: r, as: i, className: he(l.root, a), ownerState: s }, o)
    );
  }),
  ul = wk;
function _k(e) {
  return Be('MuiTableHead', e);
}
We('MuiTableHead', ['root']);
const Ok = ['className', 'component'],
  Sk = (e) => {
    const { classes: t } = e;
    return Le({ root: ['root'] }, _k, t);
  },
  Ek = ae('thead', {
    name: 'MuiTableHead',
    slot: 'Root',
    overridesResolver: (e, t) => t.root,
  })({ display: 'table-header-group' }),
  $k = { variant: 'head' },
  Lh = 'thead',
  Ak = E.exports.forwardRef(function (t, r) {
    const n = je({ props: t, name: 'MuiTableHead' }),
      { className: a, component: i = Lh } = n,
      o = $e(n, Ok),
      s = I({}, n, { component: i }),
      l = Sk(s);
    return L.exports.jsx(ll.Provider, {
      value: $k,
      children: L.exports.jsx(
        Ek,
        I(
          {
            as: i,
            className: he(l.root, a),
            ref: r,
            role: i === Lh ? null : 'rowgroup',
            ownerState: s,
          },
          o
        )
      ),
    });
  }),
  fl = Ak;
function Ck(e) {
  return Be('MuiTableRow', e);
}
const Pk = We('MuiTableRow', ['root', 'selected', 'hover', 'head', 'footer']),
  Bh = Pk,
  kk = ['className', 'component', 'hover', 'selected'],
  Tk = (e) => {
    const { classes: t, selected: r, hover: n, head: a, footer: i } = e;
    return Le(
      {
        root: [
          'root',
          r && 'selected',
          n && 'hover',
          a && 'head',
          i && 'footer',
        ],
      },
      Ck,
      t
    );
  },
  Mk = ae('tr', {
    name: 'MuiTableRow',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.root, r.head && t.head, r.footer && t.footer];
    },
  })(({ theme: e }) => ({
    color: 'inherit',
    display: 'table-row',
    verticalAlign: 'middle',
    outline: 0,
    [`&.${Bh.hover}:hover`]: {
      backgroundColor: (e.vars || e).palette.action.hover,
    },
    [`&.${Bh.selected}`]: {
      backgroundColor: e.vars
        ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
        : ke(e.palette.primary.main, e.palette.action.selectedOpacity),
      '&:hover': {
        backgroundColor: e.vars
          ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
          : ke(
              e.palette.primary.main,
              e.palette.action.selectedOpacity + e.palette.action.hoverOpacity
            ),
      },
    },
  })),
  Fh = 'tr',
  Ik = E.exports.forwardRef(function (t, r) {
    const n = je({ props: t, name: 'MuiTableRow' }),
      { className: a, component: i = Fh, hover: o = !1, selected: s = !1 } = n,
      l = $e(n, kk),
      c = E.exports.useContext(ll),
      u = I({}, n, {
        component: i,
        hover: o,
        selected: s,
        head: c && c.variant === 'head',
        footer: c && c.variant === 'footer',
      }),
      f = Tk(u);
    return L.exports.jsx(
      Mk,
      I(
        {
          as: i,
          ref: r,
          className: he(f.root, a),
          role: i === Fh ? null : 'row',
          ownerState: u,
        },
        l
      )
    );
  }),
  zt = Ik;
var xd = {},
  Rk = rt.exports;
Object.defineProperty(xd, '__esModule', { value: !0 });
var Ir = (xd.default = void 0),
  Dk = Rk(nt()),
  jk = L.exports,
  Nk = (0, Dk.default)(
    (0, jk.jsx)('path', {
      d: 'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z',
    }),
    'AddBox'
  );
Ir = xd.default = Nk;
var wd = {},
  Lk = rt.exports;
Object.defineProperty(wd, '__esModule', { value: !0 });
var Jr = (wd.default = void 0),
  Bk = Lk(nt()),
  Fk = L.exports,
  zk = (0, Bk.default)(
    (0, Fk.jsx)('path', {
      d: 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z',
    }),
    'Edit'
  );
Jr = wd.default = zk;
const Wk = () => {
  const { stockId: e, disableStep: t } = vt(xr),
    [r, n] = E.exports.useState(''),
    [a, i] = E.exports.useState(''),
    [o, s] = E.exports.useState(''),
    l = _r(),
    { editStockId: c } = Nr(),
    [u, f] = E.exports.useState(''),
    [d, h] = E.exports.useState(),
    [v, p] = E.exports.useState(0),
    [m, g] = E.exports.useState('');
  E.exports.useEffect(() => {
    c &&
      xe({ method: 'get', url: '/stocks/' + c }, function (x) {
        const b = x.data;
        n(b.ticker_symbol),
          i(b.company_name),
          s(b.website),
          f(b.vietstock_crawl_link),
          p(parseFloat(b.current_year_stock_dividend) || 0),
          g(b.stock_note),
          l(xt(['CompanyInfo', !0]));
      });
  }, [c, l]);
  const _ = () => {
    e
      ? xe(
          {
            method: 'put',
            url: '/stocks/' + e,
            data: {
              ticker_symbol: r,
              company_name: a,
              website: o,
              vietstock_crawl_link: u,
              current_year_stock_dividend: v,
              stock_note: m,
            },
          },
          function () {
            l(xt(['CompanyInfo', !0]));
          }
        )
      : xe(
          {
            method: 'post',
            url: '/stocks',
            data: {
              ticker_symbol: r.toUpperCase(),
              company_name: a,
              website: o,
              vietstock_crawl_link: u,
              current_year_stock_dividend: v,
              stock_note: m,
            },
          },
          function (x) {
            l(xt(['CompanyInfo', !0])),
              l(xt(['CheckTenets', !1])),
              l(xt(['GrowthRate', !1])),
              l(Kc(x.data)),
              h(void 0);
          },
          function (x) {
            x.response.data.errors && h(x.response.data.errors);
          }
        );
  };
  return y.createElement(
    Ne,
    { sx: { flexGrow: 1, textAlign: 'left', mb: 7, mt: 4 } },
    y.createElement(
      cr,
      null,
      y.createElement(ct, { variant: 'h5' }, 'Step 1: Company Information')
    ),
    y.createElement(
      re,
      { container: !0, spacing: 2, sx: { mt: 1 } },
      y.createElement(
        re,
        { item: !0, xs: 12, lg: 3 },
        y.createElement(lt, {
          fullWidth: !0,
          label: 'Ticker Symbol',
          variant: 'standard',
          value: r,
          onChange: (x) => n(x.target.value),
          disabled: t.CompanyInfo,
          error: !!(d != null && d.ticker_symbol),
          helperText:
            d != null && d.ticker_symbol
              ? d == null
                ? void 0
                : d.ticker_symbol[0]
              : '',
        })
      ),
      y.createElement(
        re,
        { item: !0, xs: 12, lg: 5 },
        y.createElement(lt, {
          fullWidth: !0,
          label: 'Company Name',
          variant: 'standard',
          value: a,
          onChange: (x) => i(x.target.value),
          disabled: t.CompanyInfo,
          error: !!(d != null && d.company_name),
          helperText:
            d != null && d.company_name
              ? d == null
                ? void 0
                : d.company_name[0]
              : '',
        })
      ),
      y.createElement(
        re,
        { item: !0, xs: 12, lg: 4 },
        y.createElement(lt, {
          fullWidth: !0,
          label: 'Current Year Stock Dividend (%)',
          variant: 'standard',
          value: v,
          onChange: (x) => p(+x.target.value),
          disabled: t.CompanyInfo,
          type: 'number',
        })
      )
    ),
    y.createElement(
      re,
      { container: !0, spacing: 2, sx: { mt: 1 } },
      y.createElement(
        re,
        { item: !0, xs: 12, lg: 6 },
        y.createElement(lt, {
          fullWidth: !0,
          label: 'Website',
          variant: 'standard',
          value: o,
          onChange: (x) => s(x.target.value),
          disabled: t.CompanyInfo,
          error: !!(d != null && d.website),
          helperText:
            d != null && d.website ? (d == null ? void 0 : d.website[0]) : '',
        })
      ),
      y.createElement(
        re,
        { item: !0, xs: 12, lg: 6 },
        y.createElement(lt, {
          fullWidth: !0,
          label: 'Vietstock crawl link',
          variant: 'standard',
          value: u,
          onChange: (x) => f(x.target.value),
          disabled: t.CompanyInfo,
          error: !!(d != null && d.vietstock_crawl_link),
          helperText:
            d != null && d.vietstock_crawl_link
              ? d == null
                ? void 0
                : d.vietstock_crawl_link[0]
              : '',
        })
      )
    ),
    y.createElement(
      re,
      { container: !0, spacing: 2, sx: { mt: 3 } },
      y.createElement(
        re,
        { item: !0, xs: 12, lg: 12 },
        y.createElement(lt, {
          label: 'Stock Note',
          multiline: !0,
          rows: 3,
          fullWidth: !0,
          value: m,
          onChange: (x) => g(x.target.value),
          disabled: t.CompanyInfo,
        })
      )
    ),
    y.createElement(
      re,
      { container: !0, spacing: 2, sx: { mt: 1 } },
      y.createElement(
        re,
        { item: !0, xs: 12, lg: 12, sx: { textAlign: 'center' } },
        t.CompanyInfo
          ? y.createElement(
              wr,
              {
                color: 'primary',
                size: 'large',
                onClick: () => l(xt(['CompanyInfo', !1])),
              },
              y.createElement(Jr, { sx: { fontSize: 50 } })
            )
          : y.createElement(
              wr,
              { color: 'primary', size: 'large', onClick: _ },
              y.createElement(Ir, { sx: { fontSize: 50 } })
            )
      )
    )
  );
};
var _d = {},
  Uk = rt.exports;
Object.defineProperty(_d, '__esModule', { value: !0 });
var Bi = (_d.default = void 0),
  Hk = Uk(nt()),
  Vk = L.exports,
  Gk = (0, Hk.default)(
    (0, Vk.jsx)('path', {
      d: 'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z',
    }),
    'Delete'
  );
Bi = _d.default = Gk;
var l0 = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function r() {
      for (var n = [], a = 0; a < arguments.length; a++) {
        var i = arguments[a];
        if (!!i) {
          var o = typeof i;
          if (o === 'string' || o === 'number') n.push(i);
          else if (Array.isArray(i)) {
            if (i.length) {
              var s = r.apply(null, i);
              s && n.push(s);
            }
          } else if (o === 'object') {
            if (
              i.toString !== Object.prototype.toString &&
              !i.toString.toString().includes('[native code]')
            ) {
              n.push(i.toString());
              continue;
            }
            for (var l in i) t.call(i, l) && i[l] && n.push(l);
          }
        }
      }
      return n.join(' ');
    }
    e.exports ? ((r.default = r), (e.exports = r)) : (window.classNames = r);
  })();
})(l0);
const Ze = l0.exports;
function qk(e) {
  var t = typeof e;
  return e != null && (t == 'object' || t == 'function');
}
var tr = qk;
function yo(e) {
  return (
    typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
      ? (yo = function (r) {
          return typeof r;
        })
      : (yo = function (r) {
          return r &&
            typeof Symbol == 'function' &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? 'symbol'
            : typeof r;
        }),
    yo(e)
  );
}
var Yk = ['viewBox', 'children'],
  Kk = [
    'aria-activedescendant',
    'aria-atomic',
    'aria-autocomplete',
    'aria-busy',
    'aria-checked',
    'aria-colcount',
    'aria-colindex',
    'aria-colspan',
    'aria-controls',
    'aria-current',
    'aria-describedby',
    'aria-details',
    'aria-disabled',
    'aria-errormessage',
    'aria-expanded',
    'aria-flowto',
    'aria-haspopup',
    'aria-hidden',
    'aria-invalid',
    'aria-keyshortcuts',
    'aria-label',
    'aria-labelledby',
    'aria-level',
    'aria-live',
    'aria-modal',
    'aria-multiline',
    'aria-multiselectable',
    'aria-orientation',
    'aria-owns',
    'aria-placeholder',
    'aria-posinset',
    'aria-pressed',
    'aria-readonly',
    'aria-relevant',
    'aria-required',
    'aria-roledescription',
    'aria-rowcount',
    'aria-rowindex',
    'aria-rowspan',
    'aria-selected',
    'aria-setsize',
    'aria-sort',
    'aria-valuemax',
    'aria-valuemin',
    'aria-valuenow',
    'aria-valuetext',
    'className',
    'color',
    'height',
    'id',
    'lang',
    'max',
    'media',
    'method',
    'min',
    'name',
    'style',
    'target',
    'type',
    'width',
    'role',
    'tabIndex',
    'accentHeight',
    'accumulate',
    'additive',
    'alignmentBaseline',
    'allowReorder',
    'alphabetic',
    'amplitude',
    'arabicForm',
    'ascent',
    'attributeName',
    'attributeType',
    'autoReverse',
    'azimuth',
    'baseFrequency',
    'baselineShift',
    'baseProfile',
    'bbox',
    'begin',
    'bias',
    'by',
    'calcMode',
    'capHeight',
    'clip',
    'clipPath',
    'clipPathUnits',
    'clipRule',
    'colorInterpolation',
    'colorInterpolationFilters',
    'colorProfile',
    'colorRendering',
    'contentScriptType',
    'contentStyleType',
    'cursor',
    'cx',
    'cy',
    'd',
    'decelerate',
    'descent',
    'diffuseConstant',
    'direction',
    'display',
    'divisor',
    'dominantBaseline',
    'dur',
    'dx',
    'dy',
    'edgeMode',
    'elevation',
    'enableBackground',
    'end',
    'exponent',
    'externalResourcesRequired',
    'fill',
    'fillOpacity',
    'fillRule',
    'filter',
    'filterRes',
    'filterUnits',
    'floodColor',
    'floodOpacity',
    'focusable',
    'fontFamily',
    'fontSize',
    'fontSizeAdjust',
    'fontStretch',
    'fontStyle',
    'fontVariant',
    'fontWeight',
    'format',
    'from',
    'fx',
    'fy',
    'g1',
    'g2',
    'glyphName',
    'glyphOrientationHorizontal',
    'glyphOrientationVertical',
    'glyphRef',
    'gradientTransform',
    'gradientUnits',
    'hanging',
    'horizAdvX',
    'horizOriginX',
    'href',
    'ideographic',
    'imageRendering',
    'in2',
    'in',
    'intercept',
    'k1',
    'k2',
    'k3',
    'k4',
    'k',
    'kernelMatrix',
    'kernelUnitLength',
    'kerning',
    'keyPoints',
    'keySplines',
    'keyTimes',
    'lengthAdjust',
    'letterSpacing',
    'lightingColor',
    'limitingConeAngle',
    'local',
    'markerEnd',
    'markerHeight',
    'markerMid',
    'markerStart',
    'markerUnits',
    'markerWidth',
    'mask',
    'maskContentUnits',
    'maskUnits',
    'mathematical',
    'mode',
    'numOctaves',
    'offset',
    'opacity',
    'operator',
    'order',
    'orient',
    'orientation',
    'origin',
    'overflow',
    'overlinePosition',
    'overlineThickness',
    'paintOrder',
    'panose1',
    'pathLength',
    'patternContentUnits',
    'patternTransform',
    'patternUnits',
    'pointerEvents',
    'points',
    'pointsAtX',
    'pointsAtY',
    'pointsAtZ',
    'preserveAlpha',
    'preserveAspectRatio',
    'primitiveUnits',
    'r',
    'radius',
    'refX',
    'refY',
    'renderingIntent',
    'repeatCount',
    'repeatDur',
    'requiredExtensions',
    'requiredFeatures',
    'restart',
    'result',
    'rotate',
    'rx',
    'ry',
    'seed',
    'shapeRendering',
    'slope',
    'spacing',
    'specularConstant',
    'specularExponent',
    'speed',
    'spreadMethod',
    'startOffset',
    'stdDeviation',
    'stemh',
    'stemv',
    'stitchTiles',
    'stopColor',
    'stopOpacity',
    'strikethroughPosition',
    'strikethroughThickness',
    'string',
    'stroke',
    'strokeDasharray',
    'strokeDashoffset',
    'strokeLinecap',
    'strokeLinejoin',
    'strokeMiterlimit',
    'strokeOpacity',
    'strokeWidth',
    'surfaceScale',
    'systemLanguage',
    'tableValues',
    'targetX',
    'targetY',
    'textAnchor',
    'textDecoration',
    'textLength',
    'textRendering',
    'to',
    'transform',
    'u1',
    'u2',
    'underlinePosition',
    'underlineThickness',
    'unicode',
    'unicodeBidi',
    'unicodeRange',
    'unitsPerEm',
    'vAlphabetic',
    'values',
    'vectorEffect',
    'version',
    'vertAdvY',
    'vertOriginX',
    'vertOriginY',
    'vHanging',
    'vIdeographic',
    'viewTarget',
    'visibility',
    'vMathematical',
    'widths',
    'wordSpacing',
    'writingMode',
    'x1',
    'x2',
    'x',
    'xChannelSelector',
    'xHeight',
    'xlinkActuate',
    'xlinkArcrole',
    'xlinkHref',
    'xlinkRole',
    'xlinkShow',
    'xlinkTitle',
    'xlinkType',
    'xmlBase',
    'xmlLang',
    'xmlns',
    'xmlnsXlink',
    'xmlSpace',
    'y1',
    'y2',
    'y',
    'yChannelSelector',
    'z',
    'zoomAndPan',
    'ref',
    'key',
    'angle',
  ],
  Od = [
    'dangerouslySetInnerHTML',
    'onCopy',
    'onCopyCapture',
    'onCut',
    'onCutCapture',
    'onPaste',
    'onPasteCapture',
    'onCompositionEnd',
    'onCompositionEndCapture',
    'onCompositionStart',
    'onCompositionStartCapture',
    'onCompositionUpdate',
    'onCompositionUpdateCapture',
    'onFocus',
    'onFocusCapture',
    'onBlur',
    'onBlurCapture',
    'onChange',
    'onChangeCapture',
    'onBeforeInput',
    'onBeforeInputCapture',
    'onInput',
    'onInputCapture',
    'onReset',
    'onResetCapture',
    'onSubmit',
    'onSubmitCapture',
    'onInvalid',
    'onInvalidCapture',
    'onLoad',
    'onLoadCapture',
    'onError',
    'onErrorCapture',
    'onKeyDown',
    'onKeyDownCapture',
    'onKeyPress',
    'onKeyPressCapture',
    'onKeyUp',
    'onKeyUpCapture',
    'onAbort',
    'onAbortCapture',
    'onCanPlay',
    'onCanPlayCapture',
    'onCanPlayThrough',
    'onCanPlayThroughCapture',
    'onDurationChange',
    'onDurationChangeCapture',
    'onEmptied',
    'onEmptiedCapture',
    'onEncrypted',
    'onEncryptedCapture',
    'onEnded',
    'onEndedCapture',
    'onLoadedData',
    'onLoadedDataCapture',
    'onLoadedMetadata',
    'onLoadedMetadataCapture',
    'onLoadStart',
    'onLoadStartCapture',
    'onPause',
    'onPauseCapture',
    'onPlay',
    'onPlayCapture',
    'onPlaying',
    'onPlayingCapture',
    'onProgress',
    'onProgressCapture',
    'onRateChange',
    'onRateChangeCapture',
    'onSeeked',
    'onSeekedCapture',
    'onSeeking',
    'onSeekingCapture',
    'onStalled',
    'onStalledCapture',
    'onSuspend',
    'onSuspendCapture',
    'onTimeUpdate',
    'onTimeUpdateCapture',
    'onVolumeChange',
    'onVolumeChangeCapture',
    'onWaiting',
    'onWaitingCapture',
    'onAuxClick',
    'onAuxClickCapture',
    'onClick',
    'onClickCapture',
    'onContextMenu',
    'onContextMenuCapture',
    'onDoubleClick',
    'onDoubleClickCapture',
    'onDrag',
    'onDragCapture',
    'onDragEnd',
    'onDragEndCapture',
    'onDragEnter',
    'onDragEnterCapture',
    'onDragExit',
    'onDragExitCapture',
    'onDragLeave',
    'onDragLeaveCapture',
    'onDragOver',
    'onDragOverCapture',
    'onDragStart',
    'onDragStartCapture',
    'onDrop',
    'onDropCapture',
    'onMouseDown',
    'onMouseDownCapture',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseMoveCapture',
    'onMouseOut',
    'onMouseOutCapture',
    'onMouseOver',
    'onMouseOverCapture',
    'onMouseUp',
    'onMouseUpCapture',
    'onSelect',
    'onSelectCapture',
    'onTouchCancel',
    'onTouchCancelCapture',
    'onTouchEnd',
    'onTouchEndCapture',
    'onTouchMove',
    'onTouchMoveCapture',
    'onTouchStart',
    'onTouchStartCapture',
    'onPointerDown',
    'onPointerDownCapture',
    'onPointerMove',
    'onPointerMoveCapture',
    'onPointerUp',
    'onPointerUpCapture',
    'onPointerCancel',
    'onPointerCancelCapture',
    'onPointerEnter',
    'onPointerEnterCapture',
    'onPointerLeave',
    'onPointerLeaveCapture',
    'onPointerOver',
    'onPointerOverCapture',
    'onPointerOut',
    'onPointerOutCapture',
    'onGotPointerCapture',
    'onGotPointerCaptureCapture',
    'onLostPointerCapture',
    'onLostPointerCaptureCapture',
    'onScroll',
    'onScrollCapture',
    'onWheel',
    'onWheelCapture',
    'onAnimationStart',
    'onAnimationStartCapture',
    'onAnimationEnd',
    'onAnimationEndCapture',
    'onAnimationIteration',
    'onAnimationIterationCapture',
    'onTransitionEnd',
    'onTransitionEndCapture',
  ],
  ze = function (t, r, n) {
    if (!t || typeof t == 'function' || typeof t == 'boolean') return null;
    var a = t;
    if ((E.exports.isValidElement(t) && (a = t.props), !tr(a))) return null;
    var i = {};
    return (
      Object.keys(a).forEach(function (o) {
        (Kk.includes(o) || (n && Yk.includes(o)) || (r && Od.includes(o))) &&
          (i[o] = a[o]);
      }),
      i
    );
  },
  Ko = function (t, r) {
    if (!t || typeof t == 'function' || typeof t == 'boolean') return null;
    var n = t;
    if ((E.exports.isValidElement(t) && (n = t.props), !tr(n))) return null;
    var a = {};
    return (
      Object.keys(n).forEach(function (i) {
        Od.includes(i) &&
          (a[i] =
            r ||
            function (o) {
              return n[i](n, o);
            });
      }),
      a
    );
  },
  Xk = function (t, r, n) {
    return function (a) {
      return t(r, n, a), null;
    };
  },
  Xo = function (t, r, n) {
    if (!tr(t) || yo(t) !== 'object') return null;
    var a = null;
    return (
      Object.keys(t).forEach(function (i) {
        var o = t[i];
        Od.includes(i) &&
          typeof o == 'function' &&
          (a || (a = {}), (a[i] = Xk(o, r, n)));
      }),
      a
    );
  };
function ru() {
  return (
    (ru =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    ru.apply(this, arguments)
  );
}
function Jk(e, t) {
  if (e == null) return {};
  var r = Zk(e, t),
    n,
    a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      (n = i[a]),
        !(t.indexOf(n) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function Zk(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    a,
    i;
  for (i = 0; i < n.length; i++)
    (a = n[i]), !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function nu(e) {
  var t = e.children,
    r = e.width,
    n = e.height,
    a = e.viewBox,
    i = e.className,
    o = e.style,
    s = Jk(e, ['children', 'width', 'height', 'viewBox', 'className', 'style']),
    l = a || { width: r, height: n, x: 0, y: 0 },
    c = Ze('recharts-surface', i);
  return y.createElement(
    'svg',
    ru({}, ze(s, !0, !0), {
      className: c,
      width: r,
      height: n,
      style: o,
      viewBox: ''
        .concat(l.x, ' ')
        .concat(l.y, ' ')
        .concat(l.width, ' ')
        .concat(l.height),
      version: '1.1',
    }),
    y.createElement('title', null, e.title),
    y.createElement('desc', null, e.desc),
    t
  );
}
function au() {
  return (
    (au =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    au.apply(this, arguments)
  );
}
function Qk(e, t) {
  if (e == null) return {};
  var r = eT(e, t),
    n,
    a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      (n = i[a]),
        !(t.indexOf(n) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function eT(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    a,
    i;
  for (i = 0; i < n.length; i++)
    (a = n[i]), !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var Rt = y.forwardRef(function (e, t) {
    var r = e.children,
      n = e.className,
      a = Qk(e, ['children', 'className']),
      i = Ze('recharts-layer', n);
    return y.createElement('g', au({ className: i }, ze(a, !0), { ref: t }), r);
  }),
  tT = typeof to == 'object' && to && to.Object === Object && to,
  c0 = tT,
  rT = c0,
  nT = typeof self == 'object' && self && self.Object === Object && self,
  aT = rT || nT || Function('return this')(),
  Lr = aT,
  iT = Lr,
  oT = iT.Symbol,
  Fi = oT,
  zh = Fi,
  u0 = Object.prototype,
  sT = u0.hasOwnProperty,
  lT = u0.toString,
  Va = zh ? zh.toStringTag : void 0;
function cT(e) {
  var t = sT.call(e, Va),
    r = e[Va];
  try {
    e[Va] = void 0;
    var n = !0;
  } catch {}
  var a = lT.call(e);
  return n && (t ? (e[Va] = r) : delete e[Va]), a;
}
var uT = cT,
  fT = Object.prototype,
  dT = fT.toString;
function pT(e) {
  return dT.call(e);
}
var hT = pT,
  Wh = Fi,
  vT = uT,
  mT = hT,
  gT = '[object Null]',
  yT = '[object Undefined]',
  Uh = Wh ? Wh.toStringTag : void 0;
function bT(e) {
  return e == null
    ? e === void 0
      ? yT
      : gT
    : Uh && Uh in Object(e)
    ? vT(e)
    : mT(e);
}
var vn = bT,
  xT = vn,
  wT = tr,
  _T = '[object AsyncFunction]',
  OT = '[object Function]',
  ST = '[object GeneratorFunction]',
  ET = '[object Proxy]';
function $T(e) {
  if (!wT(e)) return !1;
  var t = xT(e);
  return t == OT || t == ST || t == _T || t == ET;
}
var pe = $T;
function AT() {
  (this.__data__ = []), (this.size = 0);
}
var CT = AT;
function PT(e, t) {
  return e === t || (e !== e && t !== t);
}
var Sd = PT,
  kT = Sd;
function TT(e, t) {
  for (var r = e.length; r--; ) if (kT(e[r][0], t)) return r;
  return -1;
}
var dl = TT,
  MT = dl,
  IT = Array.prototype,
  RT = IT.splice;
function DT(e) {
  var t = this.__data__,
    r = MT(t, e);
  if (r < 0) return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : RT.call(t, r, 1), --this.size, !0;
}
var jT = DT,
  NT = dl;
function LT(e) {
  var t = this.__data__,
    r = NT(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var BT = LT,
  FT = dl;
function zT(e) {
  return FT(this.__data__, e) > -1;
}
var WT = zT,
  UT = dl;
function HT(e, t) {
  var r = this.__data__,
    n = UT(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
}
var VT = HT,
  GT = CT,
  qT = jT,
  YT = BT,
  KT = WT,
  XT = VT;
function Ca(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ca.prototype.clear = GT;
Ca.prototype.delete = qT;
Ca.prototype.get = YT;
Ca.prototype.has = KT;
Ca.prototype.set = XT;
var pl = Ca,
  JT = pl;
function ZT() {
  (this.__data__ = new JT()), (this.size = 0);
}
var QT = ZT;
function eM(e) {
  var t = this.__data__,
    r = t.delete(e);
  return (this.size = t.size), r;
}
var tM = eM;
function rM(e) {
  return this.__data__.get(e);
}
var nM = rM;
function aM(e) {
  return this.__data__.has(e);
}
var iM = aM,
  oM = Lr,
  sM = oM['__core-js_shared__'],
  lM = sM,
  ic = lM,
  Hh = (function () {
    var e = /[^.]+$/.exec((ic && ic.keys && ic.keys.IE_PROTO) || '');
    return e ? 'Symbol(src)_1.' + e : '';
  })();
function cM(e) {
  return !!Hh && Hh in e;
}
var uM = cM,
  fM = Function.prototype,
  dM = fM.toString;
function pM(e) {
  if (e != null) {
    try {
      return dM.call(e);
    } catch {}
    try {
      return e + '';
    } catch {}
  }
  return '';
}
var f0 = pM,
  hM = pe,
  vM = uM,
  mM = tr,
  gM = f0,
  yM = /[\\^$.*+?()[\]{}|]/g,
  bM = /^\[object .+?Constructor\]$/,
  xM = Function.prototype,
  wM = Object.prototype,
  _M = xM.toString,
  OM = wM.hasOwnProperty,
  SM = RegExp(
    '^' +
      _M
        .call(OM)
        .replace(yM, '\\$&')
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          '$1.*?'
        ) +
      '$'
  );
function EM(e) {
  if (!mM(e) || vM(e)) return !1;
  var t = hM(e) ? SM : bM;
  return t.test(gM(e));
}
var $M = EM;
function AM(e, t) {
  return e == null ? void 0 : e[t];
}
var CM = AM,
  PM = $M,
  kM = CM;
function TM(e, t) {
  var r = kM(e, t);
  return PM(r) ? r : void 0;
}
var Fn = TM,
  MM = Fn,
  IM = Lr,
  RM = MM(IM, 'Map'),
  Ed = RM,
  DM = Fn,
  jM = DM(Object, 'create'),
  hl = jM,
  Vh = hl;
function NM() {
  (this.__data__ = Vh ? Vh(null) : {}), (this.size = 0);
}
var LM = NM;
function BM(e) {
  var t = this.has(e) && delete this.__data__[e];
  return (this.size -= t ? 1 : 0), t;
}
var FM = BM,
  zM = hl,
  WM = '__lodash_hash_undefined__',
  UM = Object.prototype,
  HM = UM.hasOwnProperty;
function VM(e) {
  var t = this.__data__;
  if (zM) {
    var r = t[e];
    return r === WM ? void 0 : r;
  }
  return HM.call(t, e) ? t[e] : void 0;
}
var GM = VM,
  qM = hl,
  YM = Object.prototype,
  KM = YM.hasOwnProperty;
function XM(e) {
  var t = this.__data__;
  return qM ? t[e] !== void 0 : KM.call(t, e);
}
var JM = XM,
  ZM = hl,
  QM = '__lodash_hash_undefined__';
function eI(e, t) {
  var r = this.__data__;
  return (
    (this.size += this.has(e) ? 0 : 1),
    (r[e] = ZM && t === void 0 ? QM : t),
    this
  );
}
var tI = eI,
  rI = LM,
  nI = FM,
  aI = GM,
  iI = JM,
  oI = tI;
function Pa(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Pa.prototype.clear = rI;
Pa.prototype.delete = nI;
Pa.prototype.get = aI;
Pa.prototype.has = iI;
Pa.prototype.set = oI;
var sI = Pa,
  Gh = sI,
  lI = pl,
  cI = Ed;
function uI() {
  (this.size = 0),
    (this.__data__ = {
      hash: new Gh(),
      map: new (cI || lI)(),
      string: new Gh(),
    });
}
var fI = uI;
function dI(e) {
  var t = typeof e;
  return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
    ? e !== '__proto__'
    : e === null;
}
var pI = dI,
  hI = pI;
function vI(e, t) {
  var r = e.__data__;
  return hI(t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map;
}
var vl = vI,
  mI = vl;
function gI(e) {
  var t = mI(this, e).delete(e);
  return (this.size -= t ? 1 : 0), t;
}
var yI = gI,
  bI = vl;
function xI(e) {
  return bI(this, e).get(e);
}
var wI = xI,
  _I = vl;
function OI(e) {
  return _I(this, e).has(e);
}
var SI = OI,
  EI = vl;
function $I(e, t) {
  var r = EI(this, e),
    n = r.size;
  return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
}
var AI = $I,
  CI = fI,
  PI = yI,
  kI = wI,
  TI = SI,
  MI = AI;
function ka(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ka.prototype.clear = CI;
ka.prototype.delete = PI;
ka.prototype.get = kI;
ka.prototype.has = TI;
ka.prototype.set = MI;
var $d = ka,
  II = pl,
  RI = Ed,
  DI = $d,
  jI = 200;
function NI(e, t) {
  var r = this.__data__;
  if (r instanceof II) {
    var n = r.__data__;
    if (!RI || n.length < jI - 1)
      return n.push([e, t]), (this.size = ++r.size), this;
    r = this.__data__ = new DI(n);
  }
  return r.set(e, t), (this.size = r.size), this;
}
var LI = NI,
  BI = pl,
  FI = QT,
  zI = tM,
  WI = nM,
  UI = iM,
  HI = LI;
function Ta(e) {
  var t = (this.__data__ = new BI(e));
  this.size = t.size;
}
Ta.prototype.clear = FI;
Ta.prototype.delete = zI;
Ta.prototype.get = WI;
Ta.prototype.has = UI;
Ta.prototype.set = HI;
var d0 = Ta,
  VI = '__lodash_hash_undefined__';
function GI(e) {
  return this.__data__.set(e, VI), this;
}
var qI = GI;
function YI(e) {
  return this.__data__.has(e);
}
var KI = YI,
  XI = $d,
  JI = qI,
  ZI = KI;
function Jo(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.__data__ = new XI(); ++t < r; ) this.add(e[t]);
}
Jo.prototype.add = Jo.prototype.push = JI;
Jo.prototype.has = ZI;
var p0 = Jo;
function QI(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e)) return !0;
  return !1;
}
var h0 = QI;
function eR(e, t) {
  return e.has(t);
}
var v0 = eR,
  tR = p0,
  rR = h0,
  nR = v0,
  aR = 1,
  iR = 2;
function oR(e, t, r, n, a, i) {
  var o = r & aR,
    s = e.length,
    l = t.length;
  if (s != l && !(o && l > s)) return !1;
  var c = i.get(e),
    u = i.get(t);
  if (c && u) return c == t && u == e;
  var f = -1,
    d = !0,
    h = r & iR ? new tR() : void 0;
  for (i.set(e, t), i.set(t, e); ++f < s; ) {
    var v = e[f],
      p = t[f];
    if (n) var m = o ? n(p, v, f, t, e, i) : n(v, p, f, e, t, i);
    if (m !== void 0) {
      if (m) continue;
      d = !1;
      break;
    }
    if (h) {
      if (
        !rR(t, function (g, _) {
          if (!nR(h, _) && (v === g || a(v, g, r, n, i))) return h.push(_);
        })
      ) {
        d = !1;
        break;
      }
    } else if (!(v === p || a(v, p, r, n, i))) {
      d = !1;
      break;
    }
  }
  return i.delete(e), i.delete(t), d;
}
var m0 = oR,
  sR = Lr,
  lR = sR.Uint8Array,
  cR = lR;
function uR(e) {
  var t = -1,
    r = Array(e.size);
  return (
    e.forEach(function (n, a) {
      r[++t] = [a, n];
    }),
    r
  );
}
var fR = uR;
function dR(e) {
  var t = -1,
    r = Array(e.size);
  return (
    e.forEach(function (n) {
      r[++t] = n;
    }),
    r
  );
}
var Ad = dR,
  qh = Fi,
  Yh = cR,
  pR = Sd,
  hR = m0,
  vR = fR,
  mR = Ad,
  gR = 1,
  yR = 2,
  bR = '[object Boolean]',
  xR = '[object Date]',
  wR = '[object Error]',
  _R = '[object Map]',
  OR = '[object Number]',
  SR = '[object RegExp]',
  ER = '[object Set]',
  $R = '[object String]',
  AR = '[object Symbol]',
  CR = '[object ArrayBuffer]',
  PR = '[object DataView]',
  Kh = qh ? qh.prototype : void 0,
  oc = Kh ? Kh.valueOf : void 0;
function kR(e, t, r, n, a, i, o) {
  switch (r) {
    case PR:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      (e = e.buffer), (t = t.buffer);
    case CR:
      return !(e.byteLength != t.byteLength || !i(new Yh(e), new Yh(t)));
    case bR:
    case xR:
    case OR:
      return pR(+e, +t);
    case wR:
      return e.name == t.name && e.message == t.message;
    case SR:
    case $R:
      return e == t + '';
    case _R:
      var s = vR;
    case ER:
      var l = n & gR;
      if ((s || (s = mR), e.size != t.size && !l)) return !1;
      var c = o.get(e);
      if (c) return c == t;
      (n |= yR), o.set(e, t);
      var u = hR(s(e), s(t), n, a, i, o);
      return o.delete(e), u;
    case AR:
      if (oc) return oc.call(e) == oc.call(t);
  }
  return !1;
}
var TR = kR;
function MR(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; ) e[a + r] = t[r];
  return e;
}
var g0 = MR,
  IR = Array.isArray,
  Me = IR,
  RR = g0,
  DR = Me;
function jR(e, t, r) {
  var n = t(e);
  return DR(e) ? n : RR(n, r(e));
}
var NR = jR;
function LR(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, i = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (i[a++] = o);
  }
  return i;
}
var BR = LR;
function FR() {
  return [];
}
var zR = FR,
  WR = BR,
  UR = zR,
  HR = Object.prototype,
  VR = HR.propertyIsEnumerable,
  Xh = Object.getOwnPropertySymbols,
  GR = Xh
    ? function (e) {
        return e == null
          ? []
          : ((e = Object(e)),
            WR(Xh(e), function (t) {
              return VR.call(e, t);
            }));
      }
    : UR,
  qR = GR;
function YR(e, t) {
  for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
  return n;
}
var KR = YR;
function XR(e) {
  return e != null && typeof e == 'object';
}
var mn = XR,
  JR = vn,
  ZR = mn,
  QR = '[object Arguments]';
function eD(e) {
  return ZR(e) && JR(e) == QR;
}
var tD = eD,
  Jh = tD,
  rD = mn,
  y0 = Object.prototype,
  nD = y0.hasOwnProperty,
  aD = y0.propertyIsEnumerable,
  iD = Jh(
    (function () {
      return arguments;
    })()
  )
    ? Jh
    : function (e) {
        return rD(e) && nD.call(e, 'callee') && !aD.call(e, 'callee');
      },
  Cd = iD,
  Zo = { exports: {} };
function oD() {
  return !1;
}
var sD = oD;
(function (e, t) {
  var r = Lr,
    n = sD,
    a = t && !t.nodeType && t,
    i = a && !0 && e && !e.nodeType && e,
    o = i && i.exports === a,
    s = o ? r.Buffer : void 0,
    l = s ? s.isBuffer : void 0,
    c = l || n;
  e.exports = c;
})(Zo, Zo.exports);
var lD = 9007199254740991,
  cD = /^(?:0|[1-9]\d*)$/;
function uD(e, t) {
  var r = typeof e;
  return (
    (t = t == null ? lD : t),
    !!t &&
      (r == 'number' || (r != 'symbol' && cD.test(e))) &&
      e > -1 &&
      e % 1 == 0 &&
      e < t
  );
}
var Pd = uD,
  fD = 9007199254740991;
function dD(e) {
  return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= fD;
}
var kd = dD,
  pD = vn,
  hD = kd,
  vD = mn,
  mD = '[object Arguments]',
  gD = '[object Array]',
  yD = '[object Boolean]',
  bD = '[object Date]',
  xD = '[object Error]',
  wD = '[object Function]',
  _D = '[object Map]',
  OD = '[object Number]',
  SD = '[object Object]',
  ED = '[object RegExp]',
  $D = '[object Set]',
  AD = '[object String]',
  CD = '[object WeakMap]',
  PD = '[object ArrayBuffer]',
  kD = '[object DataView]',
  TD = '[object Float32Array]',
  MD = '[object Float64Array]',
  ID = '[object Int8Array]',
  RD = '[object Int16Array]',
  DD = '[object Int32Array]',
  jD = '[object Uint8Array]',
  ND = '[object Uint8ClampedArray]',
  LD = '[object Uint16Array]',
  BD = '[object Uint32Array]',
  Xe = {};
Xe[TD] =
  Xe[MD] =
  Xe[ID] =
  Xe[RD] =
  Xe[DD] =
  Xe[jD] =
  Xe[ND] =
  Xe[LD] =
  Xe[BD] =
    !0;
Xe[mD] =
  Xe[gD] =
  Xe[PD] =
  Xe[yD] =
  Xe[kD] =
  Xe[bD] =
  Xe[xD] =
  Xe[wD] =
  Xe[_D] =
  Xe[OD] =
  Xe[SD] =
  Xe[ED] =
  Xe[$D] =
  Xe[AD] =
  Xe[CD] =
    !1;
function FD(e) {
  return vD(e) && hD(e.length) && !!Xe[pD(e)];
}
var zD = FD;
function WD(e) {
  return function (t) {
    return e(t);
  };
}
var b0 = WD,
  iu = { exports: {} };
(function (e, t) {
  var r = c0,
    n = t && !t.nodeType && t,
    a = n && !0 && e && !e.nodeType && e,
    i = a && a.exports === n,
    o = i && r.process,
    s = (function () {
      try {
        var l = a && a.require && a.require('util').types;
        return l || (o && o.binding && o.binding('util'));
      } catch {}
    })();
  e.exports = s;
})(iu, iu.exports);
var UD = zD,
  HD = b0,
  Zh = iu.exports,
  Qh = Zh && Zh.isTypedArray,
  VD = Qh ? HD(Qh) : UD,
  x0 = VD,
  GD = KR,
  qD = Cd,
  YD = Me,
  KD = Zo.exports,
  XD = Pd,
  JD = x0,
  ZD = Object.prototype,
  QD = ZD.hasOwnProperty;
function ej(e, t) {
  var r = YD(e),
    n = !r && qD(e),
    a = !r && !n && KD(e),
    i = !r && !n && !a && JD(e),
    o = r || n || a || i,
    s = o ? GD(e.length, String) : [],
    l = s.length;
  for (var c in e)
    (t || QD.call(e, c)) &&
      !(
        o &&
        (c == 'length' ||
          (a && (c == 'offset' || c == 'parent')) ||
          (i && (c == 'buffer' || c == 'byteLength' || c == 'byteOffset')) ||
          XD(c, l))
      ) &&
      s.push(c);
  return s;
}
var tj = ej,
  rj = Object.prototype;
function nj(e) {
  var t = e && e.constructor,
    r = (typeof t == 'function' && t.prototype) || rj;
  return e === r;
}
var aj = nj;
function ij(e, t) {
  return function (r) {
    return e(t(r));
  };
}
var oj = ij,
  sj = oj,
  lj = sj(Object.keys, Object),
  cj = lj,
  uj = aj,
  fj = cj,
  dj = Object.prototype,
  pj = dj.hasOwnProperty;
function hj(e) {
  if (!uj(e)) return fj(e);
  var t = [];
  for (var r in Object(e)) pj.call(e, r) && r != 'constructor' && t.push(r);
  return t;
}
var vj = hj,
  mj = pe,
  gj = kd;
function yj(e) {
  return e != null && gj(e.length) && !mj(e);
}
var zi = yj,
  bj = tj,
  xj = vj,
  wj = zi;
function _j(e) {
  return wj(e) ? bj(e) : xj(e);
}
var ml = _j,
  Oj = NR,
  Sj = qR,
  Ej = ml;
function $j(e) {
  return Oj(e, Ej, Sj);
}
var Aj = $j,
  ev = Aj,
  Cj = 1,
  Pj = Object.prototype,
  kj = Pj.hasOwnProperty;
function Tj(e, t, r, n, a, i) {
  var o = r & Cj,
    s = ev(e),
    l = s.length,
    c = ev(t),
    u = c.length;
  if (l != u && !o) return !1;
  for (var f = l; f--; ) {
    var d = s[f];
    if (!(o ? d in t : kj.call(t, d))) return !1;
  }
  var h = i.get(e),
    v = i.get(t);
  if (h && v) return h == t && v == e;
  var p = !0;
  i.set(e, t), i.set(t, e);
  for (var m = o; ++f < l; ) {
    d = s[f];
    var g = e[d],
      _ = t[d];
    if (n) var x = o ? n(_, g, d, t, e, i) : n(g, _, d, e, t, i);
    if (!(x === void 0 ? g === _ || a(g, _, r, n, i) : x)) {
      p = !1;
      break;
    }
    m || (m = d == 'constructor');
  }
  if (p && !m) {
    var b = e.constructor,
      w = t.constructor;
    b != w &&
      'constructor' in e &&
      'constructor' in t &&
      !(
        typeof b == 'function' &&
        b instanceof b &&
        typeof w == 'function' &&
        w instanceof w
      ) &&
      (p = !1);
  }
  return i.delete(e), i.delete(t), p;
}
var Mj = Tj,
  Ij = Fn,
  Rj = Lr,
  Dj = Ij(Rj, 'DataView'),
  jj = Dj,
  Nj = Fn,
  Lj = Lr,
  Bj = Nj(Lj, 'Promise'),
  Fj = Bj,
  zj = Fn,
  Wj = Lr,
  Uj = zj(Wj, 'Set'),
  w0 = Uj,
  Hj = Fn,
  Vj = Lr,
  Gj = Hj(Vj, 'WeakMap'),
  qj = Gj,
  ou = jj,
  su = Ed,
  lu = Fj,
  cu = w0,
  uu = qj,
  _0 = vn,
  Ma = f0,
  tv = '[object Map]',
  Yj = '[object Object]',
  rv = '[object Promise]',
  nv = '[object Set]',
  av = '[object WeakMap]',
  iv = '[object DataView]',
  Kj = Ma(ou),
  Xj = Ma(su),
  Jj = Ma(lu),
  Zj = Ma(cu),
  Qj = Ma(uu),
  wn = _0;
((ou && wn(new ou(new ArrayBuffer(1))) != iv) ||
  (su && wn(new su()) != tv) ||
  (lu && wn(lu.resolve()) != rv) ||
  (cu && wn(new cu()) != nv) ||
  (uu && wn(new uu()) != av)) &&
  (wn = function (e) {
    var t = _0(e),
      r = t == Yj ? e.constructor : void 0,
      n = r ? Ma(r) : '';
    if (n)
      switch (n) {
        case Kj:
          return iv;
        case Xj:
          return tv;
        case Jj:
          return rv;
        case Zj:
          return nv;
        case Qj:
          return av;
      }
    return t;
  });
var eN = wn,
  sc = d0,
  tN = m0,
  rN = TR,
  nN = Mj,
  ov = eN,
  sv = Me,
  lv = Zo.exports,
  aN = x0,
  iN = 1,
  cv = '[object Arguments]',
  uv = '[object Array]',
  ao = '[object Object]',
  oN = Object.prototype,
  fv = oN.hasOwnProperty;
function sN(e, t, r, n, a, i) {
  var o = sv(e),
    s = sv(t),
    l = o ? uv : ov(e),
    c = s ? uv : ov(t);
  (l = l == cv ? ao : l), (c = c == cv ? ao : c);
  var u = l == ao,
    f = c == ao,
    d = l == c;
  if (d && lv(e)) {
    if (!lv(t)) return !1;
    (o = !0), (u = !1);
  }
  if (d && !u)
    return (
      i || (i = new sc()),
      o || aN(e) ? tN(e, t, r, n, a, i) : rN(e, t, l, r, n, a, i)
    );
  if (!(r & iN)) {
    var h = u && fv.call(e, '__wrapped__'),
      v = f && fv.call(t, '__wrapped__');
    if (h || v) {
      var p = h ? e.value() : e,
        m = v ? t.value() : t;
      return i || (i = new sc()), a(p, m, r, n, i);
    }
  }
  return d ? (i || (i = new sc()), nN(e, t, r, n, a, i)) : !1;
}
var lN = sN,
  cN = lN,
  dv = mn;
function O0(e, t, r, n, a) {
  return e === t
    ? !0
    : e == null || t == null || (!dv(e) && !dv(t))
    ? e !== e && t !== t
    : cN(e, t, r, n, O0, a);
}
var Td = O0,
  uN = d0,
  fN = Td,
  dN = 1,
  pN = 2;
function hN(e, t, r, n) {
  var a = r.length,
    i = a,
    o = !n;
  if (e == null) return !i;
  for (e = Object(e); a--; ) {
    var s = r[a];
    if (o && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
  }
  for (; ++a < i; ) {
    s = r[a];
    var l = s[0],
      c = e[l],
      u = s[1];
    if (o && s[2]) {
      if (c === void 0 && !(l in e)) return !1;
    } else {
      var f = new uN();
      if (n) var d = n(c, u, l, e, t, f);
      if (!(d === void 0 ? fN(u, c, dN | pN, n, f) : d)) return !1;
    }
  }
  return !0;
}
var vN = hN,
  mN = tr;
function gN(e) {
  return e === e && !mN(e);
}
var S0 = gN,
  yN = S0,
  bN = ml;
function xN(e) {
  for (var t = bN(e), r = t.length; r--; ) {
    var n = t[r],
      a = e[n];
    t[r] = [n, a, yN(a)];
  }
  return t;
}
var wN = xN;
function _N(e, t) {
  return function (r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var E0 = _N,
  ON = vN,
  SN = wN,
  EN = E0;
function $N(e) {
  var t = SN(e);
  return t.length == 1 && t[0][2]
    ? EN(t[0][0], t[0][1])
    : function (r) {
        return r === e || ON(r, e, t);
      };
}
var AN = $N,
  CN = vn,
  PN = mn,
  kN = '[object Symbol]';
function TN(e) {
  return typeof e == 'symbol' || (PN(e) && CN(e) == kN);
}
var Ia = TN,
  MN = Me,
  IN = Ia,
  RN = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  DN = /^\w*$/;
function jN(e, t) {
  if (MN(e)) return !1;
  var r = typeof e;
  return r == 'number' || r == 'symbol' || r == 'boolean' || e == null || IN(e)
    ? !0
    : DN.test(e) || !RN.test(e) || (t != null && e in Object(t));
}
var Md = jN,
  $0 = $d,
  NN = 'Expected a function';
function Id(e, t) {
  if (typeof e != 'function' || (t != null && typeof t != 'function'))
    throw new TypeError(NN);
  var r = function () {
    var n = arguments,
      a = t ? t.apply(this, n) : n[0],
      i = r.cache;
    if (i.has(a)) return i.get(a);
    var o = e.apply(this, n);
    return (r.cache = i.set(a, o) || i), o;
  };
  return (r.cache = new (Id.Cache || $0)()), r;
}
Id.Cache = $0;
var LN = Id,
  BN = LN,
  FN = 500;
function zN(e) {
  var t = BN(e, function (n) {
      return r.size === FN && r.clear(), n;
    }),
    r = t.cache;
  return t;
}
var WN = zN,
  UN = WN,
  HN =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  VN = /\\(\\)?/g,
  GN = UN(function (e) {
    var t = [];
    return (
      e.charCodeAt(0) === 46 && t.push(''),
      e.replace(HN, function (r, n, a, i) {
        t.push(a ? i.replace(VN, '$1') : n || r);
      }),
      t
    );
  }),
  qN = GN;
function YN(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
    a[r] = t(e[r], r, e);
  return a;
}
var Rd = YN,
  pv = Fi,
  KN = Rd,
  XN = Me,
  JN = Ia,
  ZN = 1 / 0,
  hv = pv ? pv.prototype : void 0,
  vv = hv ? hv.toString : void 0;
function A0(e) {
  if (typeof e == 'string') return e;
  if (XN(e)) return KN(e, A0) + '';
  if (JN(e)) return vv ? vv.call(e) : '';
  var t = e + '';
  return t == '0' && 1 / e == -ZN ? '-0' : t;
}
var QN = A0,
  eL = QN;
function tL(e) {
  return e == null ? '' : eL(e);
}
var C0 = tL,
  rL = Me,
  nL = Md,
  aL = qN,
  iL = C0;
function oL(e, t) {
  return rL(e) ? e : nL(e, t) ? [e] : aL(iL(e));
}
var P0 = oL,
  sL = Ia,
  lL = 1 / 0;
function cL(e) {
  if (typeof e == 'string' || sL(e)) return e;
  var t = e + '';
  return t == '0' && 1 / e == -lL ? '-0' : t;
}
var gl = cL,
  uL = P0,
  fL = gl;
function dL(e, t) {
  t = uL(t, e);
  for (var r = 0, n = t.length; e != null && r < n; ) e = e[fL(t[r++])];
  return r && r == n ? e : void 0;
}
var Dd = dL,
  pL = Dd;
function hL(e, t, r) {
  var n = e == null ? void 0 : pL(e, t);
  return n === void 0 ? r : n;
}
var Qt = hL;
function vL(e, t) {
  return e != null && t in Object(e);
}
var mL = vL,
  gL = P0,
  yL = Cd,
  bL = Me,
  xL = Pd,
  wL = kd,
  _L = gl;
function OL(e, t, r) {
  t = gL(t, e);
  for (var n = -1, a = t.length, i = !1; ++n < a; ) {
    var o = _L(t[n]);
    if (!(i = e != null && r(e, o))) break;
    e = e[o];
  }
  return i || ++n != a
    ? i
    : ((a = e == null ? 0 : e.length),
      !!a && wL(a) && xL(o, a) && (bL(e) || yL(e)));
}
var SL = OL,
  EL = mL,
  $L = SL;
function AL(e, t) {
  return e != null && $L(e, t, EL);
}
var CL = AL,
  PL = Td,
  kL = Qt,
  TL = CL,
  ML = Md,
  IL = S0,
  RL = E0,
  DL = gl,
  jL = 1,
  NL = 2;
function LL(e, t) {
  return ML(e) && IL(t)
    ? RL(DL(e), t)
    : function (r) {
        var n = kL(r, e);
        return n === void 0 && n === t ? TL(r, e) : PL(t, n, jL | NL);
      };
}
var BL = LL;
function FL(e) {
  return e;
}
var Ra = FL;
function zL(e) {
  return function (t) {
    return t == null ? void 0 : t[e];
  };
}
var WL = zL,
  UL = Dd;
function HL(e) {
  return function (t) {
    return UL(t, e);
  };
}
var VL = HL,
  GL = WL,
  qL = VL,
  YL = Md,
  KL = gl;
function XL(e) {
  return YL(e) ? GL(KL(e)) : qL(e);
}
var JL = XL,
  ZL = AN,
  QL = BL,
  e4 = Ra,
  t4 = Me,
  r4 = JL;
function n4(e) {
  return typeof e == 'function'
    ? e
    : e == null
    ? e4
    : typeof e == 'object'
    ? t4(e)
      ? QL(e[0], e[1])
      : ZL(e)
    : r4(e);
}
var gn = n4;
function a4(e, t, r, n) {
  for (var a = e.length, i = r + (n ? 1 : -1); n ? i-- : ++i < a; )
    if (t(e[i], i, e)) return i;
  return -1;
}
var k0 = a4;
function i4(e) {
  return e !== e;
}
var o4 = i4;
function s4(e, t, r) {
  for (var n = r - 1, a = e.length; ++n < a; ) if (e[n] === t) return n;
  return -1;
}
var l4 = s4,
  c4 = k0,
  u4 = o4,
  f4 = l4;
function d4(e, t, r) {
  return t === t ? f4(e, t, r) : c4(e, u4, r);
}
var p4 = d4,
  h4 = p4;
function v4(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && h4(e, t, 0) > -1;
}
var m4 = v4;
function g4(e, t, r) {
  for (var n = -1, a = e == null ? 0 : e.length; ++n < a; )
    if (r(t, e[n])) return !0;
  return !1;
}
var y4 = g4;
function b4() {}
var x4 = b4,
  lc = w0,
  w4 = x4,
  _4 = Ad,
  O4 = 1 / 0,
  S4 =
    lc && 1 / _4(new lc([, -0]))[1] == O4
      ? function (e) {
          return new lc(e);
        }
      : w4,
  E4 = S4,
  $4 = p0,
  A4 = m4,
  C4 = y4,
  P4 = v0,
  k4 = E4,
  T4 = Ad,
  M4 = 200;
function I4(e, t, r) {
  var n = -1,
    a = A4,
    i = e.length,
    o = !0,
    s = [],
    l = s;
  if (r) (o = !1), (a = C4);
  else if (i >= M4) {
    var c = t ? null : k4(e);
    if (c) return T4(c);
    (o = !1), (a = P4), (l = new $4());
  } else l = t ? [] : s;
  e: for (; ++n < i; ) {
    var u = e[n],
      f = t ? t(u) : u;
    if (((u = r || u !== 0 ? u : 0), o && f === f)) {
      for (var d = l.length; d--; ) if (l[d] === f) continue e;
      t && l.push(f), s.push(u);
    } else a(l, f, r) || (l !== s && l.push(f), s.push(u));
  }
  return s;
}
var R4 = I4,
  D4 = gn,
  j4 = R4;
function N4(e, t) {
  return e && e.length ? j4(e, D4(t)) : [];
}
var Qo = N4;
function L4(e, t, r) {
  var n = -1,
    a = e.length;
  t < 0 && (t = -t > a ? 0 : a + t),
    (r = r > a ? a : r),
    r < 0 && (r += a),
    (a = t > r ? 0 : (r - t) >>> 0),
    (t >>>= 0);
  for (var i = Array(a); ++n < a; ) i[n] = e[n + t];
  return i;
}
var B4 = L4,
  F4 = B4;
function z4(e, t, r) {
  var n = e.length;
  return (r = r === void 0 ? n : r), !t && r >= n ? e : F4(e, t, r);
}
var W4 = z4,
  U4 = '\\ud800-\\udfff',
  H4 = '\\u0300-\\u036f',
  V4 = '\\ufe20-\\ufe2f',
  G4 = '\\u20d0-\\u20ff',
  q4 = H4 + V4 + G4,
  Y4 = '\\ufe0e\\ufe0f',
  K4 = '\\u200d',
  X4 = RegExp('[' + K4 + U4 + q4 + Y4 + ']');
function J4(e) {
  return X4.test(e);
}
var T0 = J4;
function Z4(e) {
  return e.split('');
}
var Q4 = Z4,
  M0 = '\\ud800-\\udfff',
  e3 = '\\u0300-\\u036f',
  t3 = '\\ufe20-\\ufe2f',
  r3 = '\\u20d0-\\u20ff',
  n3 = e3 + t3 + r3,
  a3 = '\\ufe0e\\ufe0f',
  i3 = '[' + M0 + ']',
  fu = '[' + n3 + ']',
  du = '\\ud83c[\\udffb-\\udfff]',
  o3 = '(?:' + fu + '|' + du + ')',
  I0 = '[^' + M0 + ']',
  R0 = '(?:\\ud83c[\\udde6-\\uddff]){2}',
  D0 = '[\\ud800-\\udbff][\\udc00-\\udfff]',
  s3 = '\\u200d',
  j0 = o3 + '?',
  N0 = '[' + a3 + ']?',
  l3 = '(?:' + s3 + '(?:' + [I0, R0, D0].join('|') + ')' + N0 + j0 + ')*',
  c3 = N0 + j0 + l3,
  u3 = '(?:' + [I0 + fu + '?', fu, R0, D0, i3].join('|') + ')',
  f3 = RegExp(du + '(?=' + du + ')|' + u3 + c3, 'g');
function d3(e) {
  return e.match(f3) || [];
}
var p3 = d3,
  h3 = Q4,
  v3 = T0,
  m3 = p3;
function g3(e) {
  return v3(e) ? m3(e) : h3(e);
}
var y3 = g3,
  b3 = W4,
  x3 = T0,
  w3 = y3,
  _3 = C0;
function O3(e) {
  return function (t) {
    t = _3(t);
    var r = x3(t) ? w3(t) : void 0,
      n = r ? r[0] : t.charAt(0),
      a = r ? b3(r, 1).join('') : t.slice(1);
    return n[e]() + a;
  };
}
var S3 = O3,
  E3 = S3,
  $3 = E3('toUpperCase'),
  yl = $3;
const pu = Math.PI,
  hu = 2 * pu,
  _n = 1e-6,
  A3 = hu - _n;
function vu() {
  (this._x0 = this._y0 = this._x1 = this._y1 = null), (this._ = '');
}
function bl() {
  return new vu();
}
vu.prototype = bl.prototype = {
  constructor: vu,
  moveTo: function (e, t) {
    this._ +=
      'M' + (this._x0 = this._x1 = +e) + ',' + (this._y0 = this._y1 = +t);
  },
  closePath: function () {
    this._x1 !== null &&
      ((this._x1 = this._x0), (this._y1 = this._y0), (this._ += 'Z'));
  },
  lineTo: function (e, t) {
    this._ += 'L' + (this._x1 = +e) + ',' + (this._y1 = +t);
  },
  quadraticCurveTo: function (e, t, r, n) {
    this._ +=
      'Q' + +e + ',' + +t + ',' + (this._x1 = +r) + ',' + (this._y1 = +n);
  },
  bezierCurveTo: function (e, t, r, n, a, i) {
    this._ +=
      'C' +
      +e +
      ',' +
      +t +
      ',' +
      +r +
      ',' +
      +n +
      ',' +
      (this._x1 = +a) +
      ',' +
      (this._y1 = +i);
  },
  arcTo: function (e, t, r, n, a) {
    (e = +e), (t = +t), (r = +r), (n = +n), (a = +a);
    var i = this._x1,
      o = this._y1,
      s = r - e,
      l = n - t,
      c = i - e,
      u = o - t,
      f = c * c + u * u;
    if (a < 0) throw new Error('negative radius: ' + a);
    if (this._x1 === null)
      this._ += 'M' + (this._x1 = e) + ',' + (this._y1 = t);
    else if (f > _n)
      if (!(Math.abs(u * s - l * c) > _n) || !a)
        this._ += 'L' + (this._x1 = e) + ',' + (this._y1 = t);
      else {
        var d = r - i,
          h = n - o,
          v = s * s + l * l,
          p = d * d + h * h,
          m = Math.sqrt(v),
          g = Math.sqrt(f),
          _ = a * Math.tan((pu - Math.acos((v + f - p) / (2 * m * g))) / 2),
          x = _ / g,
          b = _ / m;
        Math.abs(x - 1) > _n &&
          (this._ += 'L' + (e + x * c) + ',' + (t + x * u)),
          (this._ +=
            'A' +
            a +
            ',' +
            a +
            ',0,0,' +
            +(u * d > c * h) +
            ',' +
            (this._x1 = e + b * s) +
            ',' +
            (this._y1 = t + b * l));
      }
  },
  arc: function (e, t, r, n, a, i) {
    (e = +e), (t = +t), (r = +r), (i = !!i);
    var o = r * Math.cos(n),
      s = r * Math.sin(n),
      l = e + o,
      c = t + s,
      u = 1 ^ i,
      f = i ? n - a : a - n;
    if (r < 0) throw new Error('negative radius: ' + r);
    this._x1 === null
      ? (this._ += 'M' + l + ',' + c)
      : (Math.abs(this._x1 - l) > _n || Math.abs(this._y1 - c) > _n) &&
        (this._ += 'L' + l + ',' + c),
      r &&
        (f < 0 && (f = (f % hu) + hu),
        f > A3
          ? (this._ +=
              'A' +
              r +
              ',' +
              r +
              ',0,1,' +
              u +
              ',' +
              (e - o) +
              ',' +
              (t - s) +
              'A' +
              r +
              ',' +
              r +
              ',0,1,' +
              u +
              ',' +
              (this._x1 = l) +
              ',' +
              (this._y1 = c))
          : f > _n &&
            (this._ +=
              'A' +
              r +
              ',' +
              r +
              ',0,' +
              +(f >= pu) +
              ',' +
              u +
              ',' +
              (this._x1 = e + r * Math.cos(a)) +
              ',' +
              (this._y1 = t + r * Math.sin(a))));
  },
  rect: function (e, t, r, n) {
    this._ +=
      'M' +
      (this._x0 = this._x1 = +e) +
      ',' +
      (this._y0 = this._y1 = +t) +
      'h' +
      +r +
      'v' +
      +n +
      'h' +
      -r +
      'Z';
  },
  toString: function () {
    return this._;
  },
};
function qe(e) {
  return function () {
    return e;
  };
}
var es = Math.PI,
  xl = 2 * es;
function jd(e) {
  return typeof e == 'object' && 'length' in e ? e : Array.from(e);
}
function L0(e) {
  this._context = e;
}
L0.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    (this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        (this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(e, t);
        break;
    }
  },
};
function wl(e) {
  return new L0(e);
}
function B0(e) {
  return e[0];
}
function F0(e) {
  return e[1];
}
function z0(e, t) {
  var r = qe(!0),
    n = null,
    a = wl,
    i = null;
  (e = typeof e == 'function' ? e : e === void 0 ? B0 : qe(e)),
    (t = typeof t == 'function' ? t : t === void 0 ? F0 : qe(t));
  function o(s) {
    var l,
      c = (s = jd(s)).length,
      u,
      f = !1,
      d;
    for (n == null && (i = a((d = bl()))), l = 0; l <= c; ++l)
      !(l < c && r((u = s[l]), l, s)) === f &&
        ((f = !f) ? i.lineStart() : i.lineEnd()),
        f && i.point(+e(u, l, s), +t(u, l, s));
    if (d) return (i = null), d + '' || null;
  }
  return (
    (o.x = function (s) {
      return arguments.length
        ? ((e = typeof s == 'function' ? s : qe(+s)), o)
        : e;
    }),
    (o.y = function (s) {
      return arguments.length
        ? ((t = typeof s == 'function' ? s : qe(+s)), o)
        : t;
    }),
    (o.defined = function (s) {
      return arguments.length
        ? ((r = typeof s == 'function' ? s : qe(!!s)), o)
        : r;
    }),
    (o.curve = function (s) {
      return arguments.length ? ((a = s), n != null && (i = a(n)), o) : a;
    }),
    (o.context = function (s) {
      return arguments.length
        ? (s == null ? (n = i = null) : (i = a((n = s))), o)
        : n;
    }),
    o
  );
}
function io(e, t, r) {
  var n = null,
    a = qe(!0),
    i = null,
    o = wl,
    s = null;
  (e = typeof e == 'function' ? e : e === void 0 ? B0 : qe(+e)),
    (t = typeof t == 'function' ? t : qe(t === void 0 ? 0 : +t)),
    (r = typeof r == 'function' ? r : r === void 0 ? F0 : qe(+r));
  function l(u) {
    var f,
      d,
      h,
      v = (u = jd(u)).length,
      p,
      m = !1,
      g,
      _ = new Array(v),
      x = new Array(v);
    for (i == null && (s = o((g = bl()))), f = 0; f <= v; ++f) {
      if (!(f < v && a((p = u[f]), f, u)) === m)
        if ((m = !m)) (d = f), s.areaStart(), s.lineStart();
        else {
          for (s.lineEnd(), s.lineStart(), h = f - 1; h >= d; --h)
            s.point(_[h], x[h]);
          s.lineEnd(), s.areaEnd();
        }
      m &&
        ((_[f] = +e(p, f, u)),
        (x[f] = +t(p, f, u)),
        s.point(n ? +n(p, f, u) : _[f], r ? +r(p, f, u) : x[f]));
    }
    if (g) return (s = null), g + '' || null;
  }
  function c() {
    return z0().defined(a).curve(o).context(i);
  }
  return (
    (l.x = function (u) {
      return arguments.length
        ? ((e = typeof u == 'function' ? u : qe(+u)), (n = null), l)
        : e;
    }),
    (l.x0 = function (u) {
      return arguments.length
        ? ((e = typeof u == 'function' ? u : qe(+u)), l)
        : e;
    }),
    (l.x1 = function (u) {
      return arguments.length
        ? ((n = u == null ? null : typeof u == 'function' ? u : qe(+u)), l)
        : n;
    }),
    (l.y = function (u) {
      return arguments.length
        ? ((t = typeof u == 'function' ? u : qe(+u)), (r = null), l)
        : t;
    }),
    (l.y0 = function (u) {
      return arguments.length
        ? ((t = typeof u == 'function' ? u : qe(+u)), l)
        : t;
    }),
    (l.y1 = function (u) {
      return arguments.length
        ? ((r = u == null ? null : typeof u == 'function' ? u : qe(+u)), l)
        : r;
    }),
    (l.lineX0 = l.lineY0 =
      function () {
        return c().x(e).y(t);
      }),
    (l.lineY1 = function () {
      return c().x(e).y(r);
    }),
    (l.lineX1 = function () {
      return c().x(n).y(t);
    }),
    (l.defined = function (u) {
      return arguments.length
        ? ((a = typeof u == 'function' ? u : qe(!!u)), l)
        : a;
    }),
    (l.curve = function (u) {
      return arguments.length ? ((o = u), i != null && (s = o(i)), l) : o;
    }),
    (l.context = function (u) {
      return arguments.length
        ? (u == null ? (i = s = null) : (s = o((i = u))), l)
        : i;
    }),
    l
  );
}
const Nd = {
    draw: function (e, t) {
      var r = Math.sqrt(t / es);
      e.moveTo(r, 0), e.arc(0, 0, r, 0, xl);
    },
  },
  C3 = {
    draw: function (e, t) {
      var r = Math.sqrt(t / 5) / 2;
      e.moveTo(-3 * r, -r),
        e.lineTo(-r, -r),
        e.lineTo(-r, -3 * r),
        e.lineTo(r, -3 * r),
        e.lineTo(r, -r),
        e.lineTo(3 * r, -r),
        e.lineTo(3 * r, r),
        e.lineTo(r, r),
        e.lineTo(r, 3 * r),
        e.lineTo(-r, 3 * r),
        e.lineTo(-r, r),
        e.lineTo(-3 * r, r),
        e.closePath();
    },
  };
var W0 = Math.sqrt(1 / 3),
  P3 = W0 * 2;
const k3 = {
  draw: function (e, t) {
    var r = Math.sqrt(t / P3),
      n = r * W0;
    e.moveTo(0, -r),
      e.lineTo(n, 0),
      e.lineTo(0, r),
      e.lineTo(-n, 0),
      e.closePath();
  },
};
var T3 = 0.8908130915292852,
  U0 = Math.sin(es / 10) / Math.sin((7 * es) / 10),
  M3 = Math.sin(xl / 10) * U0,
  I3 = -Math.cos(xl / 10) * U0;
const R3 = {
    draw: function (e, t) {
      var r = Math.sqrt(t * T3),
        n = M3 * r,
        a = I3 * r;
      e.moveTo(0, -r), e.lineTo(n, a);
      for (var i = 1; i < 5; ++i) {
        var o = (xl * i) / 5,
          s = Math.cos(o),
          l = Math.sin(o);
        e.lineTo(l * r, -s * r), e.lineTo(s * n - l * a, l * n + s * a);
      }
      e.closePath();
    },
  },
  D3 = {
    draw: function (e, t) {
      var r = Math.sqrt(t),
        n = -r / 2;
      e.rect(n, n, r, r);
    },
  };
var cc = Math.sqrt(3);
const j3 = {
  draw: function (e, t) {
    var r = -Math.sqrt(t / (cc * 3));
    e.moveTo(0, r * 2),
      e.lineTo(-cc * r, -r),
      e.lineTo(cc * r, -r),
      e.closePath();
  },
};
var rr = -0.5,
  nr = Math.sqrt(3) / 2,
  mu = 1 / Math.sqrt(12),
  N3 = (mu / 2 + 1) * 3;
const L3 = {
  draw: function (e, t) {
    var r = Math.sqrt(t / N3),
      n = r / 2,
      a = r * mu,
      i = n,
      o = r * mu + r,
      s = -i,
      l = o;
    e.moveTo(n, a),
      e.lineTo(i, o),
      e.lineTo(s, l),
      e.lineTo(rr * n - nr * a, nr * n + rr * a),
      e.lineTo(rr * i - nr * o, nr * i + rr * o),
      e.lineTo(rr * s - nr * l, nr * s + rr * l),
      e.lineTo(rr * n + nr * a, rr * a - nr * n),
      e.lineTo(rr * i + nr * o, rr * o - nr * i),
      e.lineTo(rr * s + nr * l, rr * l - nr * s),
      e.closePath();
  },
};
function B3(e, t) {
  var r = null;
  (e = typeof e == 'function' ? e : qe(e || Nd)),
    (t = typeof t == 'function' ? t : qe(t === void 0 ? 64 : +t));
  function n() {
    var a;
    if (
      (r || (r = a = bl()),
      e.apply(this, arguments).draw(r, +t.apply(this, arguments)),
      a)
    )
      return (r = null), a + '' || null;
  }
  return (
    (n.type = function (a) {
      return arguments.length
        ? ((e = typeof a == 'function' ? a : qe(a)), n)
        : e;
    }),
    (n.size = function (a) {
      return arguments.length
        ? ((t = typeof a == 'function' ? a : qe(+a)), n)
        : t;
    }),
    (n.context = function (a) {
      return arguments.length ? ((r = a == null ? null : a), n) : r;
    }),
    n
  );
}
function ts() {}
function rs(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function H0(e) {
  this._context = e;
}
H0.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
  },
  lineEnd: function () {
    switch (this._point) {
      case 3:
        rs(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        (this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        (this._point = 3),
          this._context.lineTo(
            (5 * this._x0 + this._x1) / 6,
            (5 * this._y0 + this._y1) / 6
          );
      default:
        rs(this, e, t);
        break;
    }
    (this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t);
  },
};
function F3(e) {
  return new H0(e);
}
function V0(e) {
  this._context = e;
}
V0.prototype = {
  areaStart: ts,
  areaEnd: ts,
  lineStart: function () {
    (this._x0 =
      this._x1 =
      this._x2 =
      this._x3 =
      this._x4 =
      this._y0 =
      this._y1 =
      this._y2 =
      this._y3 =
      this._y4 =
        NaN),
      (this._point = 0);
  },
  lineEnd: function () {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo(
          (this._x2 + 2 * this._x3) / 3,
          (this._y2 + 2 * this._y3) / 3
        ),
          this._context.lineTo(
            (this._x3 + 2 * this._x2) / 3,
            (this._y3 + 2 * this._y2) / 3
          ),
          this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2),
          this.point(this._x3, this._y3),
          this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        (this._point = 1), (this._x2 = e), (this._y2 = t);
        break;
      case 1:
        (this._point = 2), (this._x3 = e), (this._y3 = t);
        break;
      case 2:
        (this._point = 3),
          (this._x4 = e),
          (this._y4 = t),
          this._context.moveTo(
            (this._x0 + 4 * this._x1 + e) / 6,
            (this._y0 + 4 * this._y1 + t) / 6
          );
        break;
      default:
        rs(this, e, t);
        break;
    }
    (this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t);
  },
};
function z3(e) {
  return new V0(e);
}
function G0(e) {
  this._context = e;
}
G0.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
  },
  lineEnd: function () {
    (this._line || (this._line !== 0 && this._point === 3)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var r = (this._x0 + 4 * this._x1 + e) / 6,
          n = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
        break;
      case 3:
        this._point = 4;
      default:
        rs(this, e, t);
        break;
    }
    (this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t);
  },
};
function W3(e) {
  return new G0(e);
}
function q0(e) {
  this._context = e;
}
q0.prototype = {
  areaStart: ts,
  areaEnd: ts,
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    this._point && this._context.closePath();
  },
  point: function (e, t) {
    (e = +e),
      (t = +t),
      this._point
        ? this._context.lineTo(e, t)
        : ((this._point = 1), this._context.moveTo(e, t));
  },
};
function U3(e) {
  return new q0(e);
}
function mv(e) {
  return e < 0 ? -1 : 1;
}
function gv(e, t, r) {
  var n = e._x1 - e._x0,
    a = t - e._x1,
    i = (e._y1 - e._y0) / (n || (a < 0 && -0)),
    o = (r - e._y1) / (a || (n < 0 && -0)),
    s = (i * a + o * n) / (n + a);
  return (
    (mv(i) + mv(o)) * Math.min(Math.abs(i), Math.abs(o), 0.5 * Math.abs(s)) || 0
  );
}
function yv(e, t) {
  var r = e._x1 - e._x0;
  return r ? ((3 * (e._y1 - e._y0)) / r - t) / 2 : t;
}
function uc(e, t, r) {
  var n = e._x0,
    a = e._y0,
    i = e._x1,
    o = e._y1,
    s = (i - n) / 3;
  e._context.bezierCurveTo(n + s, a + s * t, i - s, o - s * r, i, o);
}
function ns(e) {
  this._context = e;
}
ns.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
      (this._point = 0);
  },
  lineEnd: function () {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        uc(this, this._t0, yv(this, this._t0));
        break;
    }
    (this._line || (this._line !== 0 && this._point === 1)) &&
      this._context.closePath(),
      (this._line = 1 - this._line);
  },
  point: function (e, t) {
    var r = NaN;
    if (((e = +e), (t = +t), !(e === this._x1 && t === this._y1))) {
      switch (this._point) {
        case 0:
          (this._point = 1),
            this._line
              ? this._context.lineTo(e, t)
              : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          (this._point = 3), uc(this, yv(this, (r = gv(this, e, t))), r);
          break;
        default:
          uc(this, this._t0, (r = gv(this, e, t)));
          break;
      }
      (this._x0 = this._x1),
        (this._x1 = e),
        (this._y0 = this._y1),
        (this._y1 = t),
        (this._t0 = r);
    }
  },
};
function Y0(e) {
  this._context = new K0(e);
}
(Y0.prototype = Object.create(ns.prototype)).point = function (e, t) {
  ns.prototype.point.call(this, t, e);
};
function K0(e) {
  this._context = e;
}
K0.prototype = {
  moveTo: function (e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function () {
    this._context.closePath();
  },
  lineTo: function (e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function (e, t, r, n, a, i) {
    this._context.bezierCurveTo(t, e, n, r, i, a);
  },
};
function H3(e) {
  return new ns(e);
}
function V3(e) {
  return new Y0(e);
}
function X0(e) {
  this._context = e;
}
X0.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x = []), (this._y = []);
  },
  lineEnd: function () {
    var e = this._x,
      t = this._y,
      r = e.length;
    if (r)
      if (
        (this._line
          ? this._context.lineTo(e[0], t[0])
          : this._context.moveTo(e[0], t[0]),
        r === 2)
      )
        this._context.lineTo(e[1], t[1]);
      else
        for (var n = bv(e), a = bv(t), i = 0, o = 1; o < r; ++i, ++o)
          this._context.bezierCurveTo(
            n[0][i],
            a[0][i],
            n[1][i],
            a[1][i],
            e[o],
            t[o]
          );
    (this._line || (this._line !== 0 && r === 1)) && this._context.closePath(),
      (this._line = 1 - this._line),
      (this._x = this._y = null);
  },
  point: function (e, t) {
    this._x.push(+e), this._y.push(+t);
  },
};
function bv(e) {
  var t,
    r = e.length - 1,
    n,
    a = new Array(r),
    i = new Array(r),
    o = new Array(r);
  for (a[0] = 0, i[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t)
    (a[t] = 1), (i[t] = 4), (o[t] = 4 * e[t] + 2 * e[t + 1]);
  for (
    a[r - 1] = 2, i[r - 1] = 7, o[r - 1] = 8 * e[r - 1] + e[r], t = 1;
    t < r;
    ++t
  )
    (n = a[t] / i[t - 1]), (i[t] -= n), (o[t] -= n * o[t - 1]);
  for (a[r - 1] = o[r - 1] / i[r - 1], t = r - 2; t >= 0; --t)
    a[t] = (o[t] - a[t + 1]) / i[t];
  for (i[r - 1] = (e[r] + a[r - 1]) / 2, t = 0; t < r - 1; ++t)
    i[t] = 2 * e[t + 1] - a[t + 1];
  return [a, i];
}
function G3(e) {
  return new X0(e);
}
function _l(e, t) {
  (this._context = e), (this._t = t);
}
_l.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    (this._x = this._y = NaN), (this._point = 0);
  },
  lineEnd: function () {
    0 < this._t &&
      this._t < 1 &&
      this._point === 2 &&
      this._context.lineTo(this._x, this._y),
      (this._line || (this._line !== 0 && this._point === 1)) &&
        this._context.closePath(),
      this._line >= 0 &&
        ((this._t = 1 - this._t), (this._line = 1 - this._line));
  },
  point: function (e, t) {
    switch (((e = +e), (t = +t), this._point)) {
      case 0:
        (this._point = 1),
          this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, t), this._context.lineTo(e, t);
        else {
          var r = this._x * (1 - this._t) + e * this._t;
          this._context.lineTo(r, this._y), this._context.lineTo(r, t);
        }
        break;
      }
    }
    (this._x = e), (this._y = t);
  },
};
function q3(e) {
  return new _l(e, 0.5);
}
function Y3(e) {
  return new _l(e, 0);
}
function K3(e) {
  return new _l(e, 1);
}
function ga(e, t) {
  if ((o = e.length) > 1)
    for (var r = 1, n, a, i = e[t[0]], o, s = i.length; r < o; ++r)
      for (a = i, i = e[t[r]], n = 0; n < s; ++n)
        i[n][1] += i[n][0] = isNaN(a[n][1]) ? a[n][0] : a[n][1];
}
function gu(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function X3(e, t) {
  return e[t];
}
function J3(e) {
  const t = [];
  return (t.key = e), t;
}
function Z3() {
  var e = qe([]),
    t = gu,
    r = ga,
    n = X3;
  function a(i) {
    var o = Array.from(e.apply(this, arguments), J3),
      s,
      l = o.length,
      c = -1,
      u;
    for (const f of i)
      for (s = 0, ++c; s < l; ++s)
        (o[s][c] = [0, +n(f, o[s].key, c, i)]).data = f;
    for (s = 0, u = jd(t(o)); s < l; ++s) o[u[s]].index = s;
    return r(o, u), o;
  }
  return (
    (a.keys = function (i) {
      return arguments.length
        ? ((e = typeof i == 'function' ? i : qe(Array.from(i))), a)
        : e;
    }),
    (a.value = function (i) {
      return arguments.length
        ? ((n = typeof i == 'function' ? i : qe(+i)), a)
        : n;
    }),
    (a.order = function (i) {
      return arguments.length
        ? ((t =
            i == null ? gu : typeof i == 'function' ? i : qe(Array.from(i))),
          a)
        : t;
    }),
    (a.offset = function (i) {
      return arguments.length ? ((r = i == null ? ga : i), a) : r;
    }),
    a
  );
}
function Q3(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, a = 0, i = e[0].length, o; a < i; ++a) {
      for (o = r = 0; r < n; ++r) o += e[r][a][1] || 0;
      if (o) for (r = 0; r < n; ++r) e[r][a][1] /= o;
    }
    ga(e, t);
  }
}
function e5(e, t) {
  if ((a = e.length) > 0) {
    for (var r = 0, n = e[t[0]], a, i = n.length; r < i; ++r) {
      for (var o = 0, s = 0; o < a; ++o) s += e[o][r][1] || 0;
      n[r][1] += n[r][0] = -s / 2;
    }
    ga(e, t);
  }
}
function t5(e, t) {
  if (!(!((o = e.length) > 0) || !((i = (a = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, a, i, o; n < i; ++n) {
      for (var s = 0, l = 0, c = 0; s < o; ++s) {
        for (
          var u = e[t[s]],
            f = u[n][1] || 0,
            d = u[n - 1][1] || 0,
            h = (f - d) / 2,
            v = 0;
          v < s;
          ++v
        ) {
          var p = e[t[v]],
            m = p[n][1] || 0,
            g = p[n - 1][1] || 0;
          h += m - g;
        }
        (l += f), (c += h * f);
      }
      (a[n - 1][1] += a[n - 1][0] = r), l && (r -= c / l);
    }
    (a[n - 1][1] += a[n - 1][0] = r), ga(e, t);
  }
}
function bo(e) {
  return (
    typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
      ? (bo = function (r) {
          return typeof r;
        })
      : (bo = function (r) {
          return r &&
            typeof Symbol == 'function' &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? 'symbol'
            : typeof r;
        }),
    bo(e)
  );
}
function yu() {
  return (
    (yu =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    yu.apply(this, arguments)
  );
}
function r5(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function xv(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function n5(e, t, r) {
  return t && xv(e.prototype, t), r && xv(e, r), e;
}
function a5(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && bu(e, t);
}
function bu(e, t) {
  return (
    (bu =
      Object.setPrototypeOf ||
      function (n, a) {
        return (n.__proto__ = a), n;
      }),
    bu(e, t)
  );
}
function i5(e) {
  var t = l5();
  return function () {
    var n = as(e),
      a;
    if (t) {
      var i = as(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else a = n.apply(this, arguments);
    return o5(this, a);
  };
}
function o5(e, t) {
  return t && (bo(t) === 'object' || typeof t == 'function') ? t : s5(e);
}
function s5(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function l5() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function as(e) {
  return (
    (as = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    as(e)
  );
}
var J0 = {
    symbolCircle: Nd,
    symbolCross: C3,
    symbolDiamond: k3,
    symbolSquare: D3,
    symbolStar: R3,
    symbolTriangle: j3,
    symbolWye: L3,
  },
  c5 = Math.PI / 180,
  u5 = function (t) {
    var r = 'symbol'.concat(yl(t));
    return J0[r] || Nd;
  },
  f5 = function (t, r, n) {
    if (r === 'area') return t;
    switch (n) {
      case 'cross':
        return (5 * t * t) / 9;
      case 'diamond':
        return (0.5 * t * t) / Math.sqrt(3);
      case 'square':
        return t * t;
      case 'star': {
        var a = 18 * c5;
        return (
          1.25 *
          t *
          t *
          (Math.tan(a) - Math.tan(a * 2) * Math.pow(Math.tan(a), 2))
        );
      }
      case 'triangle':
        return (Math.sqrt(3) * t * t) / 4;
      case 'wye':
        return ((21 - 10 * Math.sqrt(3)) * t * t) / 8;
      default:
        return (Math.PI * t * t) / 4;
    }
  },
  Ld = (function (e) {
    a5(r, e);
    var t = i5(r);
    function r() {
      return r5(this, r), t.apply(this, arguments);
    }
    return (
      n5(r, [
        {
          key: 'getPath',
          value: function () {
            var a = this.props,
              i = a.size,
              o = a.sizeType,
              s = a.type,
              l = u5(s),
              c = B3().type(l).size(f5(i, o, s));
            return c();
          },
        },
        {
          key: 'render',
          value: function () {
            var a = this.props,
              i = a.className,
              o = a.cx,
              s = a.cy,
              l = a.size;
            return o === +o && s === +s && l === +l
              ? y.createElement(
                  'path',
                  yu({}, ze(this.props, !0), {
                    className: Ze('recharts-symbols', i),
                    transform: 'translate('.concat(o, ', ').concat(s, ')'),
                    d: this.getPath(),
                  })
                )
              : null;
          },
        },
      ]),
      r
    );
  })(E.exports.PureComponent);
Ld.defaultProps = { type: 'circle', size: 64, sizeType: 'area' };
Ld.registerSymbol = function (e, t) {
  J0['symbol'.concat(yl(e))] = t;
};
function xo(e) {
  return (
    typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
      ? (xo = function (r) {
          return typeof r;
        })
      : (xo = function (r) {
          return r &&
            typeof Symbol == 'function' &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? 'symbol'
            : typeof r;
        }),
    xo(e)
  );
}
function xu() {
  return (
    (xu =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    xu.apply(this, arguments)
  );
}
function wv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function d5(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? wv(Object(r), !0).forEach(function (n) {
          wu(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : wv(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function wu(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function p5(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function _v(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function h5(e, t, r) {
  return t && _v(e.prototype, t), r && _v(e, r), e;
}
function v5(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && _u(e, t);
}
function _u(e, t) {
  return (
    (_u =
      Object.setPrototypeOf ||
      function (n, a) {
        return (n.__proto__ = a), n;
      }),
    _u(e, t)
  );
}
function m5(e) {
  var t = b5();
  return function () {
    var n = is(e),
      a;
    if (t) {
      var i = is(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else a = n.apply(this, arguments);
    return g5(this, a);
  };
}
function g5(e, t) {
  return t && (xo(t) === 'object' || typeof t == 'function') ? t : y5(e);
}
function y5(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function b5() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function is(e) {
  return (
    (is = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    is(e)
  );
}
var ar = 32,
  Bd = (function (e) {
    v5(r, e);
    var t = m5(r);
    function r() {
      return p5(this, r), t.apply(this, arguments);
    }
    return (
      h5(r, [
        {
          key: 'renderIcon',
          value: function (a) {
            var i = this.props.inactiveColor,
              o = ar / 2,
              s = ar / 6,
              l = ar / 3,
              c = a.inactive ? i : a.color;
            if (a.type === 'plainline')
              return y.createElement('line', {
                strokeWidth: 4,
                fill: 'none',
                stroke: c,
                strokeDasharray: a.payload.strokeDasharray,
                x1: 0,
                y1: o,
                x2: ar,
                y2: o,
                className: 'recharts-legend-icon',
              });
            if (a.type === 'line')
              return y.createElement('path', {
                strokeWidth: 4,
                fill: 'none',
                stroke: c,
                d: 'M0,'
                  .concat(o, 'h')
                  .concat(
                    l,
                    `
            A`
                  )
                  .concat(s, ',')
                  .concat(s, ',0,1,1,')
                  .concat(2 * l, ',')
                  .concat(
                    o,
                    `
            H`
                  )
                  .concat(ar, 'M')
                  .concat(2 * l, ',')
                  .concat(
                    o,
                    `
            A`
                  )
                  .concat(s, ',')
                  .concat(s, ',0,1,1,')
                  .concat(l, ',')
                  .concat(o),
                className: 'recharts-legend-icon',
              });
            if (a.type === 'rect')
              return y.createElement('path', {
                stroke: 'none',
                fill: c,
                d: 'M0,'
                  .concat(ar / 8, 'h')
                  .concat(ar, 'v')
                  .concat((ar * 3) / 4, 'h')
                  .concat(-ar, 'z'),
                className: 'recharts-legend-icon',
              });
            if (y.isValidElement(a.legendIcon)) {
              var u = d5({}, a);
              return delete u.legendIcon, y.cloneElement(a.legendIcon, u);
            }
            return y.createElement(Ld, {
              fill: c,
              cx: o,
              cy: o,
              size: ar,
              sizeType: 'diameter',
              type: a.type,
            });
          },
        },
        {
          key: 'renderItems',
          value: function () {
            var a = this,
              i = this.props,
              o = i.payload,
              s = i.iconSize,
              l = i.layout,
              c = i.formatter,
              u = i.inactiveColor,
              f = { x: 0, y: 0, width: ar, height: ar },
              d = {
                display: l === 'horizontal' ? 'inline-block' : 'block',
                marginRight: 10,
              },
              h = {
                display: 'inline-block',
                verticalAlign: 'middle',
                marginRight: 4,
              };
            return o.map(function (v, p) {
              var m,
                g = v.formatter || c,
                _ = Ze(
                  ((m = { 'recharts-legend-item': !0 }),
                  wu(m, 'legend-item-'.concat(p), !0),
                  wu(m, 'inactive', v.inactive),
                  m)
                );
              if (v.type === 'none') return null;
              var x = v.inactive ? u : v.color;
              return y.createElement(
                'li',
                xu(
                  { className: _, style: d, key: 'legend-item-'.concat(p) },
                  Xo(a.props, v, p)
                ),
                y.createElement(
                  nu,
                  { width: s, height: s, viewBox: f, style: h },
                  a.renderIcon(v)
                ),
                y.createElement(
                  'span',
                  {
                    className: 'recharts-legend-item-text',
                    style: { color: x },
                  },
                  g ? g(v.value, v, p) : v.value
                )
              );
            });
          },
        },
        {
          key: 'render',
          value: function () {
            var a = this.props,
              i = a.payload,
              o = a.layout,
              s = a.align;
            if (!i || !i.length) return null;
            var l = {
              padding: 0,
              margin: 0,
              textAlign: o === 'horizontal' ? s : 'left',
            };
            return y.createElement(
              'ul',
              { className: 'recharts-default-legend', style: l },
              this.renderItems()
            );
          },
        },
      ]),
      r
    );
  })(E.exports.PureComponent);
Bd.displayName = 'Legend';
Bd.defaultProps = {
  iconSize: 14,
  layout: 'horizontal',
  align: 'center',
  verticalAlign: 'middle',
  inactiveColor: '#ccc',
};
var x5 = vn,
  w5 = mn,
  _5 = '[object Number]';
function O5(e) {
  return typeof e == 'number' || (w5(e) && x5(e) == _5);
}
var Z0 = O5,
  S5 = Z0;
function E5(e) {
  return S5(e) && e != +e;
}
var Ol = E5,
  $5 = vn,
  A5 = Me,
  C5 = mn,
  P5 = '[object String]';
function k5(e) {
  return typeof e == 'string' || (!A5(e) && C5(e) && $5(e) == P5);
}
var Wi = k5,
  or = function (t) {
    return t === 0 ? 0 : t > 0 ? 1 : -1;
  },
  An = function (t) {
    return Wi(t) && t.indexOf('%') === t.length - 1;
  },
  K = function (t) {
    return Z0(t) && !Ol(t);
  },
  ht = function (t) {
    return K(t) || Wi(t);
  },
  T5 = 0,
  Sl = function (t) {
    var r = ++T5;
    return ''.concat(t || '').concat(r);
  },
  ya = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
      a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
    if (!K(t) && !Wi(t)) return n;
    var i;
    if (An(t)) {
      var o = t.indexOf('%');
      i = (r * parseFloat(t.slice(0, o))) / 100;
    } else i = +t;
    return Ol(i) && (i = n), a && i > r && (i = r), i;
  },
  tn = function (t) {
    if (!t) return null;
    var r = Object.keys(t);
    return r && r.length ? t[r[0]] : null;
  },
  M5 = function (t) {
    if (!Me(t)) return !1;
    for (var r = t.length, n = {}, a = 0; a < r; a++)
      if (!n[t[a]]) n[t[a]] = !0;
      else return !0;
    return !1;
  },
  Vn = function (t, r) {
    return K(t) && K(r)
      ? function (n) {
          return t + n * (r - t);
        }
      : function () {
          return r;
        };
  };
function Ou(e, t, r) {
  return !e || !e.length
    ? null
    : e.find(function (n) {
        return n && (typeof t == 'function' ? t(n) : Qt(n, t)) === r;
      });
}
function wo(e) {
  return (
    typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
      ? (wo = function (r) {
          return typeof r;
        })
      : (wo = function (r) {
          return r &&
            typeof Symbol == 'function' &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? 'symbol'
            : typeof r;
        }),
    wo(e)
  );
}
function Ov(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Gn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ov(Object(r), !0).forEach(function (n) {
          I5(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Ov(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function I5(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function R5(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function Sv(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function D5(e, t, r) {
  return t && Sv(e.prototype, t), r && Sv(e, r), e;
}
function j5(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && Su(e, t);
}
function Su(e, t) {
  return (
    (Su =
      Object.setPrototypeOf ||
      function (n, a) {
        return (n.__proto__ = a), n;
      }),
    Su(e, t)
  );
}
function N5(e) {
  var t = F5();
  return function () {
    var n = os(e),
      a;
    if (t) {
      var i = os(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else a = n.apply(this, arguments);
    return L5(this, a);
  };
}
function L5(e, t) {
  return t && (wo(t) === 'object' || typeof t == 'function') ? t : B5(e);
}
function B5(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function F5() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function os(e) {
  return (
    (os = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    os(e)
  );
}
function z5(e, t) {
  if (e == null) return {};
  var r = W5(e, t),
    n,
    a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      (n = i[a]),
        !(t.indexOf(n) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function W5(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    a,
    i;
  for (i = 0; i < n.length; i++)
    (a = n[i]), !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function U5(e) {
  return e.value;
}
function H5(e, t) {
  return e === !0 ? Qo(t, U5) : pe(e) ? Qo(t, e) : t;
}
function V5(e, t) {
  if (y.isValidElement(e)) return y.cloneElement(e, t);
  if (pe(e)) return y.createElement(e, t);
  t.ref;
  var r = z5(t, ['ref']);
  return y.createElement(Bd, r);
}
var Ev = 1,
  Si = (function (e) {
    j5(r, e);
    var t = N5(r);
    function r() {
      var n;
      R5(this, r);
      for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
        i[o] = arguments[o];
      return (
        (n = t.call.apply(t, [this].concat(i))),
        (n.wrapperNode = void 0),
        (n.state = { boxWidth: -1, boxHeight: -1 }),
        n
      );
    }
    return (
      D5(
        r,
        [
          {
            key: 'componentDidMount',
            value: function () {
              this.updateBBox();
            },
          },
          {
            key: 'componentDidUpdate',
            value: function () {
              this.updateBBox();
            },
          },
          {
            key: 'getBBox',
            value: function () {
              return this.wrapperNode && this.wrapperNode.getBoundingClientRect
                ? this.wrapperNode.getBoundingClientRect()
                : null;
            },
          },
          {
            key: 'getBBoxSnapshot',
            value: function () {
              var a = this.state,
                i = a.boxWidth,
                o = a.boxHeight;
              return i >= 0 && o >= 0 ? { width: i, height: o } : null;
            },
          },
          {
            key: 'getDefaultPosition',
            value: function (a) {
              var i = this.props,
                o = i.layout,
                s = i.align,
                l = i.verticalAlign,
                c = i.margin,
                u = i.chartWidth,
                f = i.chartHeight,
                d,
                h;
              if (
                !a ||
                ((a.left === void 0 || a.left === null) &&
                  (a.right === void 0 || a.right === null))
              )
                if (s === 'center' && o === 'vertical') {
                  var v = this.getBBoxSnapshot() || { width: 0 };
                  d = { left: ((u || 0) - v.width) / 2 };
                } else
                  d =
                    s === 'right'
                      ? { right: (c && c.right) || 0 }
                      : { left: (c && c.left) || 0 };
              if (
                !a ||
                ((a.top === void 0 || a.top === null) &&
                  (a.bottom === void 0 || a.bottom === null))
              )
                if (l === 'middle') {
                  var p = this.getBBoxSnapshot() || { height: 0 };
                  h = { top: ((f || 0) - p.height) / 2 };
                } else
                  h =
                    l === 'bottom'
                      ? { bottom: (c && c.bottom) || 0 }
                      : { top: (c && c.top) || 0 };
              return Gn(Gn({}, d), h);
            },
          },
          {
            key: 'updateBBox',
            value: function () {
              var a = this.state,
                i = a.boxWidth,
                o = a.boxHeight,
                s = this.props.onBBoxUpdate;
              if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
                var l = this.wrapperNode.getBoundingClientRect();
                (Math.abs(l.width - i) > Ev || Math.abs(l.height - o) > Ev) &&
                  this.setState(
                    { boxWidth: l.width, boxHeight: l.height },
                    function () {
                      s && s(l);
                    }
                  );
              } else
                (i !== -1 || o !== -1) &&
                  this.setState({ boxWidth: -1, boxHeight: -1 }, function () {
                    s && s(null);
                  });
            },
          },
          {
            key: 'render',
            value: function () {
              var a = this,
                i = this.props,
                o = i.content,
                s = i.width,
                l = i.height,
                c = i.wrapperStyle,
                u = i.payloadUniqBy,
                f = i.payload,
                d = Gn(
                  Gn(
                    {
                      position: 'absolute',
                      width: s || 'auto',
                      height: l || 'auto',
                    },
                    this.getDefaultPosition(c)
                  ),
                  c
                );
              return y.createElement(
                'div',
                {
                  className: 'recharts-legend-wrapper',
                  style: d,
                  ref: function (v) {
                    a.wrapperNode = v;
                  },
                },
                V5(o, Gn(Gn({}, this.props), {}, { payload: H5(u, f) }))
              );
            },
          },
        ],
        [
          {
            key: 'getWithHeight',
            value: function (a, i) {
              var o = a.props.layout;
              return o === 'vertical' && K(a.props.height)
                ? { height: a.props.height }
                : o === 'horizontal'
                ? { width: a.props.width || i }
                : null;
            },
          },
        ]
      ),
      r
    );
  })(E.exports.PureComponent);
Si.displayName = 'Legend';
Si.defaultProps = {
  iconSize: 14,
  layout: 'horizontal',
  align: 'center',
  verticalAlign: 'bottom',
};
function G5(e) {
  return e == null;
}
var ge = G5,
  q5 = typeof WeakSet == 'function',
  $v = Object.keys;
function Fd(e, t) {
  return e === t || (e !== e && t !== t);
}
function Av(e) {
  return e.constructor === Object || e.constructor == null;
}
function Cv(e) {
  return !!e && typeof e.then == 'function';
}
function Pv(e) {
  return !!(e && e.$$typeof);
}
function Y5() {
  var e = [];
  return {
    add: function (t) {
      e.push(t);
    },
    has: function (t) {
      return e.indexOf(t) !== -1;
    },
  };
}
var K5 = (function (e) {
  return e
    ? function () {
        return new WeakSet();
      }
    : Y5;
})(q5);
function Q0(e) {
  return function (r) {
    var n = e || r;
    return function (i, o, s) {
      s === void 0 && (s = K5());
      var l = !!i && typeof i == 'object',
        c = !!o && typeof o == 'object';
      if (l || c) {
        var u = l && s.has(i),
          f = c && s.has(o);
        if (u || f) return u && f;
        l && s.add(i), c && s.add(o);
      }
      return n(i, o, s);
    };
  };
}
function X5(e, t, r, n) {
  var a = e.length;
  if (t.length !== a) return !1;
  for (; a-- > 0; ) if (!r(e[a], t[a], n)) return !1;
  return !0;
}
function J5(e, t, r, n) {
  var a = e.size === t.size;
  if (a && e.size) {
    var i = {};
    e.forEach(function (o, s) {
      if (a) {
        var l = !1,
          c = 0;
        t.forEach(function (u, f) {
          !l && !i[c] && ((l = r(s, f, n) && r(o, u, n)), l && (i[c] = !0)),
            c++;
        }),
          (a = l);
      }
    });
  }
  return a;
}
var Z5 = '_owner',
  Q5 = Function.prototype.bind.call(
    Function.prototype.call,
    Object.prototype.hasOwnProperty
  );
function kv(e, t, r, n) {
  var a = $v(e),
    i = a.length;
  if ($v(t).length !== i) return !1;
  if (i)
    for (var o = void 0; i-- > 0; ) {
      if (((o = a[i]), o === Z5)) {
        var s = Pv(e),
          l = Pv(t);
        if ((s || l) && s !== l) return !1;
      }
      if (!Q5(t, o) || !r(e[o], t[o], n)) return !1;
    }
  return !0;
}
function eB(e, t) {
  return (
    e.source === t.source &&
    e.global === t.global &&
    e.ignoreCase === t.ignoreCase &&
    e.multiline === t.multiline &&
    e.unicode === t.unicode &&
    e.sticky === t.sticky &&
    e.lastIndex === t.lastIndex
  );
}
function tB(e, t, r, n) {
  var a = e.size === t.size;
  if (a && e.size) {
    var i = {};
    e.forEach(function (o) {
      if (a) {
        var s = !1,
          l = 0;
        t.forEach(function (c) {
          !s && !i[l] && ((s = r(o, c, n)), s && (i[l] = !0)), l++;
        }),
          (a = s);
      }
    });
  }
  return a;
}
var rB = typeof Map == 'function',
  nB = typeof Set == 'function';
function El(e) {
  var t = typeof e == 'function' ? e(r) : r;
  function r(n, a, i) {
    if (n === a) return !0;
    if (n && a && typeof n == 'object' && typeof a == 'object') {
      if (Av(n) && Av(a)) return kv(n, a, t, i);
      var o = Array.isArray(n),
        s = Array.isArray(a);
      return o || s
        ? o === s && X5(n, a, t, i)
        : ((o = n instanceof Date),
          (s = a instanceof Date),
          o || s
            ? o === s && Fd(n.getTime(), a.getTime())
            : ((o = n instanceof RegExp),
              (s = a instanceof RegExp),
              o || s
                ? o === s && eB(n, a)
                : Cv(n) || Cv(a)
                ? n === a
                : rB && ((o = n instanceof Map), (s = a instanceof Map), o || s)
                ? o === s && J5(n, a, t, i)
                : nB && ((o = n instanceof Set), (s = a instanceof Set), o || s)
                ? o === s && tB(n, a, t, i)
                : kv(n, a, t, i)));
    }
    return n !== n && a !== a;
  }
  return r;
}
var aB = El();
El(function () {
  return Fd;
});
El(Q0());
El(Q0(Fd));
function Tv(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    r = -1,
    n = function a(i) {
      r < 0 && (r = i), i - r > t ? (e(i), (r = -1)) : requestAnimationFrame(a);
    };
  requestAnimationFrame(n);
}
function _o(e) {
  return (
    typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
      ? (_o = function (r) {
          return typeof r;
        })
      : (_o = function (r) {
          return r &&
            typeof Symbol == 'function' &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? 'symbol'
            : typeof r;
        }),
    _o(e)
  );
}
function iB(e) {
  return cB(e) || lB(e) || sB(e) || oB();
}
function oB() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function sB(e, t) {
  if (!!e) {
    if (typeof e == 'string') return Mv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === 'Object' && e.constructor && (r = e.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Mv(e, t);
  }
}
function Mv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function lB(e) {
  if (typeof Symbol < 'u' && Symbol.iterator in Object(e)) return Array.from(e);
}
function cB(e) {
  if (Array.isArray(e)) return e;
}
function uB() {
  var e = {},
    t = function () {
      return null;
    },
    r = !1,
    n = function a(i) {
      if (!r) {
        if (Array.isArray(i)) {
          if (!i.length) return;
          var o = i,
            s = iB(o),
            l = s[0],
            c = s.slice(1);
          if (typeof l == 'number') {
            Tv(a.bind(null, c), l);
            return;
          }
          a(l), Tv(a.bind(null, c));
          return;
        }
        _o(i) === 'object' && ((e = i), t(e)), typeof i == 'function' && i();
      }
    };
  return {
    stop: function () {
      r = !0;
    },
    start: function (i) {
      (r = !1), n(i);
    },
    subscribe: function (i) {
      return (
        (t = i),
        function () {
          t = function () {
            return null;
          };
        }
      );
    },
  };
}
function Iv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function ba(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Iv(Object(r), !0).forEach(function (n) {
          ss(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Iv(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function ss(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var fB = ['Webkit', 'Moz', 'O', 'ms'],
  dB = ['-webkit-', '-moz-', '-o-', '-ms-'],
  pB = ['transform', 'transformOrigin', 'transition'],
  hB = function (t, r) {
    return [Object.keys(t), Object.keys(r)].reduce(function (n, a) {
      return n.filter(function (i) {
        return a.includes(i);
      });
    });
  },
  vB = function (t) {
    return t;
  },
  mB = function (t) {
    return t.replace(/([A-Z])/g, function (r) {
      return '-'.concat(r.toLowerCase());
    });
  },
  gB = function (t, r) {
    if (pB.indexOf(t) === -1) return ss({}, t, r);
    var n = t === 'transition',
      a = t.replace(/(\w)/, function (o) {
        return o.toUpperCase();
      }),
      i = r;
    return fB.reduce(function (o, s, l) {
      return (
        n &&
          (i = r.replace(
            /(transform|transform-origin)/gim,
            ''.concat(dB[l], '$1')
          )),
        ba(ba({}, o), {}, ss({}, s + a, i))
      );
    }, {});
  },
  ui = function (t, r) {
    return Object.keys(r).reduce(function (n, a) {
      return ba(ba({}, n), {}, ss({}, a, t(a, r[a])));
    }, {});
  },
  Eu = function (t) {
    return Object.keys(t).reduce(function (r, n) {
      return ba(ba({}, r), gB(n, r[n]));
    }, t);
  },
  Rv = function (t, r, n) {
    return t
      .map(function (a) {
        return ''.concat(mB(a), ' ').concat(r, 'ms ').concat(n);
      })
      .join(',');
  };
function yB(e, t) {
  return wB(e) || xB(e, t) || ex(e, t) || bB();
}
function bB() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xB(e, t) {
  if (!(typeof Symbol > 'u' || !(Symbol.iterator in Object(e)))) {
    var r = [],
      n = !0,
      a = !1,
      i = void 0;
    try {
      for (
        var o = e[Symbol.iterator](), s;
        !(n = (s = o.next()).done) && (r.push(s.value), !(t && r.length === t));
        n = !0
      );
    } catch (l) {
      (a = !0), (i = l);
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (a) throw i;
      }
    }
    return r;
  }
}
function wB(e) {
  if (Array.isArray(e)) return e;
}
function _B(e) {
  return EB(e) || SB(e) || ex(e) || OB();
}
function OB() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ex(e, t) {
  if (!!e) {
    if (typeof e == 'string') return $u(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === 'Object' && e.constructor && (r = e.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return $u(e, t);
  }
}
function SB(e) {
  if (typeof Symbol < 'u' && Symbol.iterator in Object(e)) return Array.from(e);
}
function EB(e) {
  if (Array.isArray(e)) return $u(e);
}
function $u(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var ls = 1e-4,
  tx = function (t, r) {
    return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
  },
  rx = function (t, r) {
    return t
      .map(function (n, a) {
        return n * Math.pow(r, a);
      })
      .reduce(function (n, a) {
        return n + a;
      });
  },
  Dv = function (t, r) {
    return function (n) {
      var a = tx(t, r);
      return rx(a, n);
    };
  },
  $B = function (t, r) {
    return function (n) {
      var a = tx(t, r),
        i = [].concat(
          _B(
            a
              .map(function (o, s) {
                return o * s;
              })
              .slice(1)
          ),
          [0]
        );
      return rx(i, n);
    };
  },
  jv = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    var a = r[0],
      i = r[1],
      o = r[2],
      s = r[3];
    if (r.length === 1)
      switch (r[0]) {
        case 'linear':
          (a = 0), (i = 0), (o = 1), (s = 1);
          break;
        case 'ease':
          (a = 0.25), (i = 0.1), (o = 0.25), (s = 1);
          break;
        case 'ease-in':
          (a = 0.42), (i = 0), (o = 1), (s = 1);
          break;
        case 'ease-out':
          (a = 0.42), (i = 0), (o = 0.58), (s = 1);
          break;
        case 'ease-in-out':
          (a = 0), (i = 0), (o = 0.58), (s = 1);
          break;
        default: {
          var l = r[0].split('(');
          if (
            l[0] === 'cubic-bezier' &&
            l[1].split(')')[0].split(',').length === 4
          ) {
            var c = l[1]
                .split(')')[0]
                .split(',')
                .map(function (m) {
                  return parseFloat(m);
                }),
              u = yB(c, 4);
            (a = u[0]), (i = u[1]), (o = u[2]), (s = u[3]);
          }
        }
      }
    var f = Dv(a, o),
      d = Dv(i, s),
      h = $B(a, o),
      v = function (g) {
        return g > 1 ? 1 : g < 0 ? 0 : g;
      },
      p = function (g) {
        for (var _ = g > 1 ? 1 : g, x = _, b = 0; b < 8; ++b) {
          var w = f(x) - _,
            O = h(x);
          if (Math.abs(w - _) < ls || O < ls) return d(x);
          x = v(x - w / O);
        }
        return d(x);
      };
    return (p.isStepper = !1), p;
  },
  AB = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = t.stiff,
      n = r === void 0 ? 100 : r,
      a = t.damping,
      i = a === void 0 ? 8 : a,
      o = t.dt,
      s = o === void 0 ? 17 : o,
      l = function (u, f, d) {
        var h = -(u - f) * n,
          v = d * i,
          p = d + ((h - v) * s) / 1e3,
          m = (d * s) / 1e3 + u;
        return Math.abs(m - f) < ls && Math.abs(p) < ls ? [f, 0] : [m, p];
      };
    return (l.isStepper = !0), (l.dt = s), l;
  },
  CB = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    var a = r[0];
    if (typeof a == 'string')
      switch (a) {
        case 'ease':
        case 'ease-in-out':
        case 'ease-out':
        case 'ease-in':
        case 'linear':
          return jv(a);
        case 'spring':
          return AB();
        default:
          if (a.split('(')[0] === 'cubic-bezier') return jv(a);
      }
    return typeof a == 'function' ? a : null;
  };
function Nv(e) {
  return TB(e) || kB(e) || nx(e) || PB();
}
function PB() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function kB(e) {
  if (typeof Symbol < 'u' && Symbol.iterator in Object(e)) return Array.from(e);
}
function TB(e) {
  if (Array.isArray(e)) return Cu(e);
}
function Lv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function At(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Lv(Object(r), !0).forEach(function (n) {
          Au(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Lv(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function Au(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function MB(e, t) {
  return DB(e) || RB(e, t) || nx(e, t) || IB();
}
function IB() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nx(e, t) {
  if (!!e) {
    if (typeof e == 'string') return Cu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === 'Object' && e.constructor && (r = e.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Cu(e, t);
  }
}
function Cu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function RB(e, t) {
  if (!(typeof Symbol > 'u' || !(Symbol.iterator in Object(e)))) {
    var r = [],
      n = !0,
      a = !1,
      i = void 0;
    try {
      for (
        var o = e[Symbol.iterator](), s;
        !(n = (s = o.next()).done) && (r.push(s.value), !(t && r.length === t));
        n = !0
      );
    } catch (l) {
      (a = !0), (i = l);
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (a) throw i;
      }
    }
    return r;
  }
}
function DB(e) {
  if (Array.isArray(e)) return e;
}
var cs = function (t, r, n) {
    return t + (r - t) * n;
  },
  Pu = function (t) {
    var r = t.from,
      n = t.to;
    return r !== n;
  },
  jB = function e(t, r, n) {
    var a = ui(function (i, o) {
      if (Pu(o)) {
        var s = t(o.from, o.to, o.velocity),
          l = MB(s, 2),
          c = l[0],
          u = l[1];
        return At(At({}, o), {}, { from: c, velocity: u });
      }
      return o;
    }, r);
    return n < 1
      ? ui(function (i, o) {
          return Pu(o)
            ? At(
                At({}, o),
                {},
                {
                  velocity: cs(o.velocity, a[i].velocity, n),
                  from: cs(o.from, a[i].from, n),
                }
              )
            : o;
        }, r)
      : e(t, a, n - 1);
  };
const NB = function (e, t, r, n, a) {
  var i = hB(e, t),
    o = i.reduce(function (m, g) {
      return At(At({}, m), {}, Au({}, g, [e[g], t[g]]));
    }, {}),
    s = i.reduce(function (m, g) {
      return At(
        At({}, m),
        {},
        Au({}, g, { from: e[g], velocity: 0, to: t[g] })
      );
    }, {}),
    l = -1,
    c,
    u,
    f = function () {
      return null;
    },
    d = function () {
      return ui(function (g, _) {
        return _.from;
      }, s);
    },
    h = function () {
      return !Object.values(s).filter(Pu).length;
    },
    v = function (g) {
      c || (c = g);
      var _ = g - c,
        x = _ / r.dt;
      (s = jB(r, s, x)),
        a(At(At(At({}, e), t), d())),
        (c = g),
        h() || (l = requestAnimationFrame(f));
    },
    p = function (g) {
      u || (u = g);
      var _ = (g - u) / n,
        x = ui(function (w, O) {
          return cs.apply(void 0, Nv(O).concat([r(_)]));
        }, o);
      if ((a(At(At(At({}, e), t), x)), _ < 1)) l = requestAnimationFrame(f);
      else {
        var b = ui(function (w, O) {
          return cs.apply(void 0, Nv(O).concat([r(1)]));
        }, o);
        a(At(At(At({}, e), t), b));
      }
    };
  return (
    (f = r.isStepper ? v : p),
    function () {
      return (
        requestAnimationFrame(f),
        function () {
          cancelAnimationFrame(l);
        }
      );
    }
  );
};
function Oo(e) {
  return (
    typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
      ? (Oo = function (r) {
          return typeof r;
        })
      : (Oo = function (r) {
          return r &&
            typeof Symbol == 'function' &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? 'symbol'
            : typeof r;
        }),
    Oo(e)
  );
}
function LB(e, t) {
  if (e == null) return {};
  var r = BB(e, t),
    n,
    a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      (n = i[a]),
        !(t.indexOf(n) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function BB(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    a,
    i;
  for (i = 0; i < n.length; i++)
    (a = n[i]), !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function fc(e) {
  return UB(e) || WB(e) || zB(e) || FB();
}
function FB() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zB(e, t) {
  if (!!e) {
    if (typeof e == 'string') return ku(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === 'Object' && e.constructor && (r = e.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return ku(e, t);
  }
}
function WB(e) {
  if (typeof Symbol < 'u' && Symbol.iterator in Object(e)) return Array.from(e);
}
function UB(e) {
  if (Array.isArray(e)) return ku(e);
}
function ku(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Bv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function mr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Bv(Object(r), !0).forEach(function (n) {
          ii(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Bv(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function ii(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function HB(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function Fv(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function VB(e, t, r) {
  return t && Fv(e.prototype, t), r && Fv(e, r), e;
}
function GB(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && Tu(e, t);
}
function Tu(e, t) {
  return (
    (Tu =
      Object.setPrototypeOf ||
      function (n, a) {
        return (n.__proto__ = a), n;
      }),
    Tu(e, t)
  );
}
function qB(e) {
  var t = YB();
  return function () {
    var n = us(e),
      a;
    if (t) {
      var i = us(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else a = n.apply(this, arguments);
    return Mu(this, a);
  };
}
function Mu(e, t) {
  return t && (Oo(t) === 'object' || typeof t == 'function') ? t : Iu(e);
}
function Iu(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function YB() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function us(e) {
  return (
    (us = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    us(e)
  );
}
var xa = (function (e) {
  GB(r, e);
  var t = qB(r);
  function r(n, a) {
    var i;
    HB(this, r), (i = t.call(this, n, a));
    var o = i.props,
      s = o.isActive,
      l = o.attributeName,
      c = o.from,
      u = o.to,
      f = o.steps,
      d = o.children;
    if (
      ((i.handleStyleChange = i.handleStyleChange.bind(Iu(i))),
      (i.changeStyle = i.changeStyle.bind(Iu(i))),
      !s)
    )
      return (
        (i.state = { style: {} }),
        typeof d == 'function' && (i.state = { style: u }),
        Mu(i)
      );
    if (f && f.length) i.state = { style: f[0].style };
    else if (c) {
      if (typeof d == 'function') return (i.state = { style: c }), Mu(i);
      i.state = { style: l ? ii({}, l, c) : c };
    } else i.state = { style: {} };
    return i;
  }
  return (
    VB(r, [
      {
        key: 'componentDidMount',
        value: function () {
          var a = this.props,
            i = a.isActive,
            o = a.canBegin;
          (this.mounted = !0), !(!i || !o) && this.runAnimation(this.props);
        },
      },
      {
        key: 'componentDidUpdate',
        value: function (a) {
          var i = this.props,
            o = i.isActive,
            s = i.canBegin,
            l = i.attributeName,
            c = i.shouldReAnimate;
          if (!!s) {
            if (!o) {
              var u = { style: l ? ii({}, l, this.props.to) : this.props.to };
              this.state &&
                this.state.style &&
                ((l && this.state.style[l] !== this.props.to) ||
                  (!l && this.state.style !== this.props.to)) &&
                this.setState(u);
              return;
            }
            if (!(aB(a.to, this.props.to) && a.canBegin && a.isActive)) {
              var f = !a.canBegin || !a.isActive;
              this.manager && this.manager.stop(),
                this.stopJSAnimation && this.stopJSAnimation();
              var d = f || c ? this.props.from : a.to;
              if (this.state && this.state.style) {
                var h = { style: l ? ii({}, l, d) : d };
                ((l && this.state.style[l] !== d) ||
                  (!l && this.state.style !== d)) &&
                  this.setState(h);
              }
              this.runAnimation(
                mr(mr({}, this.props), {}, { from: d, begin: 0 })
              );
            }
          }
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          (this.mounted = !1),
            this.unSubscribe && this.unSubscribe(),
            this.manager && (this.manager.stop(), (this.manager = null)),
            this.stopJSAnimation && this.stopJSAnimation();
        },
      },
      {
        key: 'runJSAnimation',
        value: function (a) {
          var i = this,
            o = a.from,
            s = a.to,
            l = a.duration,
            c = a.easing,
            u = a.begin,
            f = a.onAnimationEnd,
            d = a.onAnimationStart,
            h = NB(o, s, CB(c), l, this.changeStyle),
            v = function () {
              i.stopJSAnimation = h();
            };
          this.manager.start([d, u, v, l, f]);
        },
      },
      {
        key: 'runStepAnimation',
        value: function (a) {
          var i = this,
            o = a.steps,
            s = a.begin,
            l = a.onAnimationStart,
            c = o[0],
            u = c.style,
            f = c.duration,
            d = f === void 0 ? 0 : f,
            h = function (p, m, g) {
              if (g === 0) return p;
              var _ = m.duration,
                x = m.easing,
                b = x === void 0 ? 'ease' : x,
                w = m.style,
                O = m.properties,
                S = m.onAnimationEnd,
                $ = g > 0 ? o[g - 1] : m,
                A = O || Object.keys(w);
              if (typeof b == 'function' || b === 'spring')
                return [].concat(fc(p), [
                  i.runJSAnimation.bind(i, {
                    from: $.style,
                    to: w,
                    duration: _,
                    easing: b,
                  }),
                  _,
                ]);
              var P = Rv(A, _, b),
                C = mr(mr(mr({}, $.style), w), {}, { transition: P });
              return [].concat(fc(p), [C, _, S]).filter(vB);
            };
          return this.manager.start(
            [l].concat(fc(o.reduce(h, [u, Math.max(d, s)])), [a.onAnimationEnd])
          );
        },
      },
      {
        key: 'runAnimation',
        value: function (a) {
          this.manager || (this.manager = uB());
          var i = a.begin,
            o = a.duration,
            s = a.attributeName,
            l = a.to,
            c = a.easing,
            u = a.onAnimationStart,
            f = a.onAnimationEnd,
            d = a.steps,
            h = a.children,
            v = this.manager;
          if (
            ((this.unSubscribe = v.subscribe(this.handleStyleChange)),
            typeof c == 'function' || typeof h == 'function' || c === 'spring')
          ) {
            this.runJSAnimation(a);
            return;
          }
          if (d.length > 1) {
            this.runStepAnimation(a);
            return;
          }
          var p = s ? ii({}, s, l) : l,
            m = Rv(Object.keys(p), o, c);
          v.start([u, i, mr(mr({}, p), {}, { transition: m }), o, f]);
        },
      },
      {
        key: 'handleStyleChange',
        value: function (a) {
          this.changeStyle(a);
        },
      },
      {
        key: 'changeStyle',
        value: function (a) {
          this.mounted && this.setState({ style: a });
        },
      },
      {
        key: 'render',
        value: function () {
          var a = this.props,
            i = a.children;
          a.begin, a.duration, a.attributeName, a.easing;
          var o = a.isActive;
          a.steps,
            a.from,
            a.to,
            a.canBegin,
            a.onAnimationEnd,
            a.shouldReAnimate,
            a.onAnimationReStart;
          var s = LB(a, [
              'children',
              'begin',
              'duration',
              'attributeName',
              'easing',
              'isActive',
              'steps',
              'from',
              'to',
              'canBegin',
              'onAnimationEnd',
              'shouldReAnimate',
              'onAnimationReStart',
            ]),
            l = E.exports.Children.count(i),
            c = Eu(this.state.style);
          if (typeof i == 'function') return i(c);
          if (!o || l === 0) return i;
          var u = function (d) {
            var h = d.props,
              v = h.style,
              p = v === void 0 ? {} : v,
              m = h.className,
              g = E.exports.cloneElement(
                d,
                mr(mr({}, s), {}, { style: mr(mr({}, p), c), className: m })
              );
            return g;
          };
          return l === 1
            ? u(E.exports.Children.only(i))
            : y.createElement(
                'div',
                null,
                E.exports.Children.map(i, function (f) {
                  return u(f);
                })
              );
        },
      },
    ]),
    r
  );
})(E.exports.PureComponent);
xa.displayName = 'Animate';
xa.propTypes = {
  from: _e.exports.oneOfType([_e.exports.object, _e.exports.string]),
  to: _e.exports.oneOfType([_e.exports.object, _e.exports.string]),
  attributeName: _e.exports.string,
  duration: _e.exports.number,
  begin: _e.exports.number,
  easing: _e.exports.oneOfType([_e.exports.string, _e.exports.func]),
  steps: _e.exports.arrayOf(
    _e.exports.shape({
      duration: _e.exports.number.isRequired,
      style: _e.exports.object.isRequired,
      easing: _e.exports.oneOfType([
        _e.exports.oneOf([
          'ease',
          'ease-in',
          'ease-out',
          'ease-in-out',
          'linear',
        ]),
        _e.exports.func,
      ]),
      properties: _e.exports.arrayOf('string'),
      onAnimationEnd: _e.exports.func,
    })
  ),
  children: _e.exports.oneOfType([_e.exports.node, _e.exports.func]),
  isActive: _e.exports.bool,
  canBegin: _e.exports.bool,
  onAnimationEnd: _e.exports.func,
  shouldReAnimate: _e.exports.bool,
  onAnimationStart: _e.exports.func,
  onAnimationReStart: _e.exports.func,
};
xa.defaultProps = {
  begin: 0,
  duration: 1e3,
  from: '',
  to: '',
  attributeName: '',
  easing: 'ease',
  isActive: !0,
  canBegin: !0,
  steps: [],
  onAnimationEnd: function () {},
  onAnimationStart: function () {},
};
Number.isFinite === void 0 &&
  (Number.isFinite = function (e) {
    return typeof e == 'number' && isFinite(e);
  });
_e.exports.object, _e.exports.object, _e.exports.object, _e.exports.element;
_e.exports.object,
  _e.exports.object,
  _e.exports.object,
  _e.exports.oneOfType([_e.exports.array, _e.exports.element]),
  _e.exports.any;
var zv = Fi,
  KB = Cd,
  XB = Me,
  Wv = zv ? zv.isConcatSpreadable : void 0;
function JB(e) {
  return XB(e) || KB(e) || !!(Wv && e && e[Wv]);
}
var ZB = JB,
  QB = g0,
  e6 = ZB;
function ax(e, t, r, n, a) {
  var i = -1,
    o = e.length;
  for (r || (r = e6), a || (a = []); ++i < o; ) {
    var s = e[i];
    t > 0 && r(s)
      ? t > 1
        ? ax(s, t - 1, r, n, a)
        : QB(a, s)
      : n || (a[a.length] = s);
  }
  return a;
}
var ix = ax;
function t6(e) {
  return function (t, r, n) {
    for (var a = -1, i = Object(t), o = n(t), s = o.length; s--; ) {
      var l = o[e ? s : ++a];
      if (r(i[l], l, i) === !1) break;
    }
    return t;
  };
}
var r6 = t6,
  n6 = r6,
  a6 = n6(),
  i6 = a6,
  o6 = i6,
  s6 = ml;
function l6(e, t) {
  return e && o6(e, t, s6);
}
var ox = l6,
  c6 = zi;
function u6(e, t) {
  return function (r, n) {
    if (r == null) return r;
    if (!c6(r)) return e(r, n);
    for (
      var a = r.length, i = t ? a : -1, o = Object(r);
      (t ? i-- : ++i < a) && n(o[i], i, o) !== !1;

    );
    return r;
  };
}
var f6 = u6,
  d6 = ox,
  p6 = f6,
  h6 = p6(d6),
  zd = h6,
  v6 = zd,
  m6 = zi;
function g6(e, t) {
  var r = -1,
    n = m6(e) ? Array(e.length) : [];
  return (
    v6(e, function (a, i, o) {
      n[++r] = t(a, i, o);
    }),
    n
  );
}
var sx = g6;
function y6(e, t) {
  var r = e.length;
  for (e.sort(t); r--; ) e[r] = e[r].value;
  return e;
}
var b6 = y6,
  Uv = Ia;
function x6(e, t) {
  if (e !== t) {
    var r = e !== void 0,
      n = e === null,
      a = e === e,
      i = Uv(e),
      o = t !== void 0,
      s = t === null,
      l = t === t,
      c = Uv(t);
    if (
      (!s && !c && !i && e > t) ||
      (i && o && l && !s && !c) ||
      (n && o && l) ||
      (!r && l) ||
      !a
    )
      return 1;
    if (
      (!n && !i && !c && e < t) ||
      (c && r && a && !n && !i) ||
      (s && r && a) ||
      (!o && a) ||
      !l
    )
      return -1;
  }
  return 0;
}
var w6 = x6,
  _6 = w6;
function O6(e, t, r) {
  for (
    var n = -1, a = e.criteria, i = t.criteria, o = a.length, s = r.length;
    ++n < o;

  ) {
    var l = _6(a[n], i[n]);
    if (l) {
      if (n >= s) return l;
      var c = r[n];
      return l * (c == 'desc' ? -1 : 1);
    }
  }
  return e.index - t.index;
}
var S6 = O6,
  dc = Rd,
  E6 = Dd,
  $6 = gn,
  A6 = sx,
  C6 = b6,
  P6 = b0,
  k6 = S6,
  T6 = Ra,
  M6 = Me;
function I6(e, t, r) {
  t.length
    ? (t = dc(t, function (i) {
        return M6(i)
          ? function (o) {
              return E6(o, i.length === 1 ? i[0] : i);
            }
          : i;
      }))
    : (t = [T6]);
  var n = -1;
  t = dc(t, P6($6));
  var a = A6(e, function (i, o, s) {
    var l = dc(t, function (c) {
      return c(i);
    });
    return { criteria: l, index: ++n, value: i };
  });
  return C6(a, function (i, o) {
    return k6(i, o, r);
  });
}
var lx = I6;
function R6(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
var D6 = R6,
  j6 = D6,
  Hv = Math.max;
function N6(e, t, r) {
  return (
    (t = Hv(t === void 0 ? e.length - 1 : t, 0)),
    function () {
      for (
        var n = arguments, a = -1, i = Hv(n.length - t, 0), o = Array(i);
        ++a < i;

      )
        o[a] = n[t + a];
      a = -1;
      for (var s = Array(t + 1); ++a < t; ) s[a] = n[a];
      return (s[t] = r(o)), j6(e, this, s);
    }
  );
}
var L6 = N6;
function B6(e) {
  return function () {
    return e;
  };
}
var F6 = B6,
  z6 = Fn,
  W6 = (function () {
    try {
      var e = z6(Object, 'defineProperty');
      return e({}, '', {}), e;
    } catch {}
  })(),
  cx = W6,
  U6 = F6,
  Vv = cx,
  H6 = Ra,
  V6 = Vv
    ? function (e, t) {
        return Vv(e, 'toString', {
          configurable: !0,
          enumerable: !1,
          value: U6(t),
          writable: !0,
        });
      }
    : H6,
  G6 = V6,
  q6 = 800,
  Y6 = 16,
  K6 = Date.now;
function X6(e) {
  var t = 0,
    r = 0;
  return function () {
    var n = K6(),
      a = Y6 - (n - r);
    if (((r = n), a > 0)) {
      if (++t >= q6) return arguments[0];
    } else t = 0;
    return e.apply(void 0, arguments);
  };
}
var J6 = X6,
  Z6 = G6,
  Q6 = J6,
  eF = Q6(Z6),
  tF = eF,
  rF = Ra,
  nF = L6,
  aF = tF;
function iF(e, t) {
  return aF(nF(e, t, rF), e + '');
}
var oF = iF,
  sF = Sd,
  lF = zi,
  cF = Pd,
  uF = tr;
function fF(e, t, r) {
  if (!uF(r)) return !1;
  var n = typeof t;
  return (n == 'number' ? lF(r) && cF(t, r.length) : n == 'string' && t in r)
    ? sF(r[t], e)
    : !1;
}
var $l = fF,
  dF = ix,
  pF = lx,
  hF = oF,
  Gv = $l,
  vF = hF(function (e, t) {
    if (e == null) return [];
    var r = t.length;
    return (
      r > 1 && Gv(e, t[0], t[1])
        ? (t = [])
        : r > 2 && Gv(t[0], t[1], t[2]) && (t = [t[0]]),
      pF(e, dF(t, 1), [])
    );
  }),
  Wd = vF;
function So(e) {
  return (
    typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
      ? (So = function (r) {
          return typeof r;
        })
      : (So = function (r) {
          return r &&
            typeof Symbol == 'function' &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? 'symbol'
            : typeof r;
        }),
    So(e)
  );
}
function mF(e, t) {
  return xF(e) || bF(e, t) || yF(e, t) || gF();
}
function gF() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function yF(e, t) {
  if (!!e) {
    if (typeof e == 'string') return qv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === 'Object' && e.constructor && (r = e.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return qv(e, t);
  }
}
function qv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function bF(e, t) {
  if (!(typeof Symbol > 'u' || !(Symbol.iterator in Object(e)))) {
    var r = [],
      n = !0,
      a = !1,
      i = void 0;
    try {
      for (
        var o = e[Symbol.iterator](), s;
        !(n = (s = o.next()).done) && (r.push(s.value), !(t && r.length === t));
        n = !0
      );
    } catch (l) {
      (a = !0), (i = l);
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (a) throw i;
      }
    }
    return r;
  }
}
function xF(e) {
  if (Array.isArray(e)) return e;
}
function Yv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function pc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Yv(Object(r), !0).forEach(function (n) {
          wF(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Yv(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function wF(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function _F(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function Kv(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function OF(e, t, r) {
  return t && Kv(e.prototype, t), r && Kv(e, r), e;
}
function SF(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && Ru(e, t);
}
function Ru(e, t) {
  return (
    (Ru =
      Object.setPrototypeOf ||
      function (n, a) {
        return (n.__proto__ = a), n;
      }),
    Ru(e, t)
  );
}
function EF(e) {
  var t = CF();
  return function () {
    var n = fs(e),
      a;
    if (t) {
      var i = fs(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else a = n.apply(this, arguments);
    return $F(this, a);
  };
}
function $F(e, t) {
  return t && (So(t) === 'object' || typeof t == 'function') ? t : AF(e);
}
function AF(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function CF() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function fs(e) {
  return (
    (fs = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    fs(e)
  );
}
function PF(e) {
  return Me(e) && ht(e[0]) && ht(e[1]) ? e.join(' ~ ') : e;
}
var Ud = (function (e) {
  SF(r, e);
  var t = EF(r);
  function r() {
    return _F(this, r), t.apply(this, arguments);
  }
  return (
    OF(r, [
      {
        key: 'renderContent',
        value: function () {
          var a = this.props,
            i = a.payload,
            o = a.separator,
            s = a.formatter,
            l = a.itemStyle,
            c = a.itemSorter;
          if (i && i.length) {
            var u = { padding: 0, margin: 0 },
              f = (c ? Wd(i, c) : i).map(function (d, h) {
                if (d.type === 'none') return null;
                var v = pc(
                    {
                      display: 'block',
                      paddingTop: 4,
                      paddingBottom: 4,
                      color: d.color || '#000',
                    },
                    l
                  ),
                  p = d.formatter || s || PF,
                  m = d.value,
                  g = d.name;
                if (p && m && g) {
                  var _ = p(m, g, d, h, i);
                  if (Array.isArray(_)) {
                    var x = _,
                      b = mF(x, 2);
                    (m = b[0]), (g = b[1]);
                  } else m = _;
                }
                return y.createElement(
                  'li',
                  {
                    className: 'recharts-tooltip-item',
                    key: 'tooltip-item-'.concat(h),
                    style: v,
                  },
                  ht(g)
                    ? y.createElement(
                        'span',
                        { className: 'recharts-tooltip-item-name' },
                        g
                      )
                    : null,
                  ht(g)
                    ? y.createElement(
                        'span',
                        { className: 'recharts-tooltip-item-separator' },
                        o
                      )
                    : null,
                  y.createElement(
                    'span',
                    { className: 'recharts-tooltip-item-value' },
                    m
                  ),
                  y.createElement(
                    'span',
                    { className: 'recharts-tooltip-item-unit' },
                    d.unit || ''
                  )
                );
              });
            return y.createElement(
              'ul',
              { className: 'recharts-tooltip-item-list', style: u },
              f
            );
          }
          return null;
        },
      },
      {
        key: 'render',
        value: function () {
          var a = this.props,
            i = a.wrapperClassName,
            o = a.contentStyle,
            s = a.labelClassName,
            l = a.labelStyle,
            c = a.label,
            u = a.labelFormatter,
            f = a.payload,
            d = pc(
              {
                margin: 0,
                padding: 10,
                backgroundColor: '#fff',
                border: '1px solid #ccc',
                whiteSpace: 'nowrap',
              },
              o
            ),
            h = pc({ margin: 0 }, l),
            v = !ge(c),
            p = v ? c : '',
            m = Ze('recharts-default-tooltip', i),
            g = Ze('recharts-tooltip-label', s);
          return (
            v && u && f !== void 0 && f !== null && (p = u(c, f)),
            y.createElement(
              'div',
              { className: m, style: d },
              y.createElement(
                'p',
                { className: g, style: h },
                y.isValidElement(p) ? p : ''.concat(p)
              ),
              this.renderContent()
            )
          );
        },
      },
    ]),
    r
  );
})(E.exports.PureComponent);
Ud.displayName = 'DefaultTooltipContent';
Ud.defaultProps = {
  separator: ' : ',
  contentStyle: {},
  itemStyle: {},
  labelStyle: {},
};
var kF = function () {
    return !(
      typeof window < 'u' &&
      window.document &&
      window.document.createElement &&
      window.setTimeout
    );
  },
  ln = {
    isSsr: kF(),
    get: function (t) {
      return ln[t];
    },
    set: function (t, r) {
      if (typeof t == 'string') ln[t] = r;
      else {
        var n = Object.keys(t);
        n &&
          n.length &&
          n.forEach(function (a) {
            ln[a] = t[a];
          });
      }
    },
  };
function Eo(e) {
  return (
    typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
      ? (Eo = function (r) {
          return typeof r;
        })
      : (Eo = function (r) {
          return r &&
            typeof Symbol == 'function' &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? 'symbol'
            : typeof r;
        }),
    Eo(e)
  );
}
function Xv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Br(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Xv(Object(r), !0).forEach(function (n) {
          oi(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Xv(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function oi(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function TF(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function Jv(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function MF(e, t, r) {
  return t && Jv(e.prototype, t), r && Jv(e, r), e;
}
function IF(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && Du(e, t);
}
function Du(e, t) {
  return (
    (Du =
      Object.setPrototypeOf ||
      function (n, a) {
        return (n.__proto__ = a), n;
      }),
    Du(e, t)
  );
}
function RF(e) {
  var t = NF();
  return function () {
    var n = ds(e),
      a;
    if (t) {
      var i = ds(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else a = n.apply(this, arguments);
    return DF(this, a);
  };
}
function DF(e, t) {
  return t && (Eo(t) === 'object' || typeof t == 'function') ? t : jF(e);
}
function jF(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function NF() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function ds(e) {
  return (
    (ds = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    ds(e)
  );
}
var Ga = 'recharts-tooltip-wrapper',
  Zv = 1;
function LF(e) {
  return e.dataKey;
}
function BF(e, t) {
  return e === !0 ? Qo(t, LF) : pe(e) ? Qo(t, e) : t;
}
function FF(e, t) {
  return y.isValidElement(e)
    ? y.cloneElement(e, t)
    : pe(e)
    ? y.createElement(e, t)
    : y.createElement(Ud, t);
}
var Zn = (function (e) {
  IF(r, e);
  var t = RF(r);
  function r() {
    var n;
    TF(this, r);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return (
      (n = t.call.apply(t, [this].concat(i))),
      (n.state = {
        boxWidth: -1,
        boxHeight: -1,
        dismissed: !1,
        dismissedAtCoordinate: { x: 0, y: 0 },
      }),
      (n.wrapperNode = void 0),
      (n.getTranslate = function (s) {
        var l = s.key,
          c = s.tooltipDimension,
          u = s.viewBoxDimension,
          f = n.props,
          d = f.allowEscapeViewBox,
          h = f.coordinate,
          v = f.offset,
          p = f.position,
          m = f.viewBox;
        if (p && K(p[l])) return p[l];
        var g = h[l] - c - v,
          _ = h[l] + v;
        if (d[l]) return _;
        var x = h[l] + c + v,
          b = m[l] + u;
        return x > b ? Math.max(g, m[l]) : Math.max(_, m[l]);
      }),
      n
    );
  }
  return (
    MF(r, [
      {
        key: 'componentDidMount',
        value: function () {
          this.updateBBox();
        },
      },
      {
        key: 'componentDidUpdate',
        value: function () {
          this.updateBBox();
        },
      },
      {
        key: 'updateBBox',
        value: function () {
          var a = this.state,
            i = a.boxWidth,
            o = a.boxHeight,
            s = a.dismissed;
          if (
            (s
              ? (this.wrapperNode.blur(),
                (this.props.coordinate.x !==
                  this.state.dismissedAtCoordinate.x ||
                  this.props.coordinate.y !==
                    this.state.dismissedAtCoordinate.y) &&
                  this.setState({ dismissed: !1 }))
              : this.wrapperNode.focus({ preventScroll: !0 }),
            this.wrapperNode && this.wrapperNode.getBoundingClientRect)
          ) {
            var l = this.wrapperNode.getBoundingClientRect();
            (Math.abs(l.width - i) > Zv || Math.abs(l.height - o) > Zv) &&
              this.setState({ boxWidth: l.width, boxHeight: l.height });
          } else
            (i !== -1 || o !== -1) &&
              this.setState({ boxWidth: -1, boxHeight: -1 });
        },
      },
      {
        key: 'render',
        value: function () {
          var a,
            i = this,
            o = this.props,
            s = o.payload,
            l = o.isAnimationActive,
            c = o.animationDuration,
            u = o.animationEasing,
            f = o.filterNull,
            d = o.payloadUniqBy,
            h = BF(
              d,
              f && s && s.length
                ? s.filter(function (T) {
                    return !ge(T.value);
                  })
                : s
            ),
            v = h && h.length,
            p = this.props,
            m = p.content,
            g = p.viewBox,
            _ = p.coordinate,
            x = p.position,
            b = p.active,
            w = p.wrapperStyle,
            O = Br(
              {
                pointerEvents: 'none',
                visibility:
                  !this.state.dismissed && b && v ? 'visible' : 'hidden',
                position: 'absolute',
                top: 0,
                left: 0,
              },
              w
            ),
            S,
            $;
          if (x && K(x.x) && K(x.y)) (S = x.x), ($ = x.y);
          else {
            var A = this.state,
              P = A.boxWidth,
              C = A.boxHeight;
            P > 0 && C > 0 && _
              ? ((S = this.getTranslate({
                  key: 'x',
                  tooltipDimension: P,
                  viewBoxDimension: g.width,
                })),
                ($ = this.getTranslate({
                  key: 'y',
                  tooltipDimension: C,
                  viewBoxDimension: g.height,
                })))
              : (O.visibility = 'hidden');
          }
          (O = Br(
            Br(
              {},
              Eu({
                transform: this.props.useTranslate3d
                  ? 'translate3d('.concat(S, 'px, ').concat($, 'px, 0)')
                  : 'translate('.concat(S, 'px, ').concat($, 'px)'),
              })
            ),
            O
          )),
            l &&
              b &&
              (O = Br(
                Br(
                  {},
                  Eu({ transition: 'transform '.concat(c, 'ms ').concat(u) })
                ),
                O
              ));
          var k = Ze(
            Ga,
            ((a = {}),
            oi(a, ''.concat(Ga, '-right'), K(S) && _ && K(_.x) && S >= _.x),
            oi(a, ''.concat(Ga, '-left'), K(S) && _ && K(_.x) && S < _.x),
            oi(a, ''.concat(Ga, '-bottom'), K($) && _ && K(_.y) && $ >= _.y),
            oi(a, ''.concat(Ga, '-top'), K($) && _ && K(_.y) && $ < _.y),
            a)
          );
          return y.createElement(
            'div',
            {
              tabIndex: -1,
              role: 'dialog',
              onKeyDown: function (D) {
                D.key === 'Escape' &&
                  i.setState({
                    dismissed: !0,
                    dismissedAtCoordinate: Br(
                      Br({}, i.state.dismissedAtCoordinate),
                      {},
                      { x: i.props.coordinate.x, y: i.props.coordinate.y }
                    ),
                  });
              },
              className: k,
              style: O,
              ref: function (D) {
                i.wrapperNode = D;
              },
            },
            FF(m, Br(Br({}, this.props), {}, { payload: h }))
          );
        },
      },
    ]),
    r
  );
})(E.exports.PureComponent);
Zn.displayName = 'Tooltip';
Zn.defaultProps = {
  active: !1,
  allowEscapeViewBox: { x: !1, y: !1 },
  offset: 10,
  viewBox: { x1: 0, x2: 0, y1: 0, y2: 0 },
  coordinate: { x: 0, y: 0 },
  cursorStyle: {},
  separator: ' : ',
  wrapperStyle: {},
  contentStyle: {},
  itemStyle: {},
  labelStyle: {},
  cursor: !0,
  trigger: 'hover',
  isAnimationActive: !ln.isSsr,
  animationEasing: 'ease',
  animationDuration: 400,
  filterNull: !0,
  useTranslate3d: !1,
};
var zF = Lr,
  WF = function () {
    return zF.Date.now();
  },
  UF = WF,
  HF = /\s/;
function VF(e) {
  for (var t = e.length; t-- && HF.test(e.charAt(t)); );
  return t;
}
var GF = VF,
  qF = GF,
  YF = /^\s+/;
function KF(e) {
  return e && e.slice(0, qF(e) + 1).replace(YF, '');
}
var XF = KF,
  JF = XF,
  Qv = tr,
  ZF = Ia,
  em = 0 / 0,
  QF = /^[-+]0x[0-9a-f]+$/i,
  ez = /^0b[01]+$/i,
  tz = /^0o[0-7]+$/i,
  rz = parseInt;
function nz(e) {
  if (typeof e == 'number') return e;
  if (ZF(e)) return em;
  if (Qv(e)) {
    var t = typeof e.valueOf == 'function' ? e.valueOf() : e;
    e = Qv(t) ? t + '' : t;
  }
  if (typeof e != 'string') return e === 0 ? e : +e;
  e = JF(e);
  var r = ez.test(e);
  return r || tz.test(e) ? rz(e.slice(2), r ? 2 : 8) : QF.test(e) ? em : +e;
}
var ux = nz,
  az = tr,
  hc = UF,
  tm = ux,
  iz = 'Expected a function',
  oz = Math.max,
  sz = Math.min;
function lz(e, t, r) {
  var n,
    a,
    i,
    o,
    s,
    l,
    c = 0,
    u = !1,
    f = !1,
    d = !0;
  if (typeof e != 'function') throw new TypeError(iz);
  (t = tm(t) || 0),
    az(r) &&
      ((u = !!r.leading),
      (f = 'maxWait' in r),
      (i = f ? oz(tm(r.maxWait) || 0, t) : i),
      (d = 'trailing' in r ? !!r.trailing : d));
  function h(O) {
    var S = n,
      $ = a;
    return (n = a = void 0), (c = O), (o = e.apply($, S)), o;
  }
  function v(O) {
    return (c = O), (s = setTimeout(g, t)), u ? h(O) : o;
  }
  function p(O) {
    var S = O - l,
      $ = O - c,
      A = t - S;
    return f ? sz(A, i - $) : A;
  }
  function m(O) {
    var S = O - l,
      $ = O - c;
    return l === void 0 || S >= t || S < 0 || (f && $ >= i);
  }
  function g() {
    var O = hc();
    if (m(O)) return _(O);
    s = setTimeout(g, p(O));
  }
  function _(O) {
    return (s = void 0), d && n ? h(O) : ((n = a = void 0), o);
  }
  function x() {
    s !== void 0 && clearTimeout(s), (c = 0), (n = l = a = s = void 0);
  }
  function b() {
    return s === void 0 ? o : _(hc());
  }
  function w() {
    var O = hc(),
      S = m(O);
    if (((n = arguments), (a = this), (l = O), S)) {
      if (s === void 0) return v(l);
      if (f) return clearTimeout(s), (s = setTimeout(g, t)), h(l);
    }
    return s === void 0 && (s = setTimeout(g, t)), o;
  }
  return (w.cancel = x), (w.flush = b), w;
}
var fx = lz,
  ju = function (e, t) {
    return (
      (ju =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (r, n) {
            r.__proto__ = n;
          }) ||
        function (r, n) {
          for (var a in n)
            Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
        }),
      ju(e, t)
    );
  };
function cz(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError(
      'Class extends value ' + String(t) + ' is not a constructor or null'
    );
  ju(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype =
    t === null ? Object.create(t) : ((r.prototype = t.prototype), new r());
}
function uz(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[a]) &&
        (r[n[a]] = e[n[a]]);
  return r;
}
var oo =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
    ? window
    : typeof global < 'u'
    ? global
    : typeof self < 'u'
    ? self
    : {};
function fz(e) {
  var t = typeof e;
  return e != null && (t == 'object' || t == 'function');
}
var Hd = fz,
  dz = typeof oo == 'object' && oo && oo.Object === Object && oo,
  pz = dz,
  hz = pz,
  vz = typeof self == 'object' && self && self.Object === Object && self,
  mz = hz || vz || Function('return this')(),
  dx = mz,
  gz = dx,
  yz = function () {
    return gz.Date.now();
  },
  bz = yz,
  xz = /\s/;
function wz(e) {
  for (var t = e.length; t-- && xz.test(e.charAt(t)); );
  return t;
}
var _z = wz,
  Oz = _z,
  Sz = /^\s+/;
function Ez(e) {
  return e && e.slice(0, Oz(e) + 1).replace(Sz, '');
}
var $z = Ez,
  Az = dx,
  Cz = Az.Symbol,
  px = Cz,
  rm = px,
  hx = Object.prototype,
  Pz = hx.hasOwnProperty,
  kz = hx.toString,
  qa = rm ? rm.toStringTag : void 0;
function Tz(e) {
  var t = Pz.call(e, qa),
    r = e[qa];
  try {
    e[qa] = void 0;
    var n = !0;
  } catch {}
  var a = kz.call(e);
  return n && (t ? (e[qa] = r) : delete e[qa]), a;
}
var Mz = Tz,
  Iz = Object.prototype,
  Rz = Iz.toString;
function Dz(e) {
  return Rz.call(e);
}
var jz = Dz,
  nm = px,
  Nz = Mz,
  Lz = jz,
  Bz = '[object Null]',
  Fz = '[object Undefined]',
  am = nm ? nm.toStringTag : void 0;
function zz(e) {
  return e == null
    ? e === void 0
      ? Fz
      : Bz
    : am && am in Object(e)
    ? Nz(e)
    : Lz(e);
}
var Wz = zz;
function Uz(e) {
  return e != null && typeof e == 'object';
}
var Hz = Uz,
  Vz = Wz,
  Gz = Hz,
  qz = '[object Symbol]';
function Yz(e) {
  return typeof e == 'symbol' || (Gz(e) && Vz(e) == qz);
}
var Kz = Yz,
  Xz = $z,
  im = Hd,
  Jz = Kz,
  om = 0 / 0,
  Zz = /^[-+]0x[0-9a-f]+$/i,
  Qz = /^0b[01]+$/i,
  eW = /^0o[0-7]+$/i,
  tW = parseInt;
function rW(e) {
  if (typeof e == 'number') return e;
  if (Jz(e)) return om;
  if (im(e)) {
    var t = typeof e.valueOf == 'function' ? e.valueOf() : e;
    e = im(t) ? t + '' : t;
  }
  if (typeof e != 'string') return e === 0 ? e : +e;
  e = Xz(e);
  var r = Qz.test(e);
  return r || eW.test(e) ? tW(e.slice(2), r ? 2 : 8) : Zz.test(e) ? om : +e;
}
var nW = rW,
  aW = Hd,
  vc = bz,
  sm = nW,
  iW = 'Expected a function',
  oW = Math.max,
  sW = Math.min;
function lW(e, t, r) {
  var n,
    a,
    i,
    o,
    s,
    l,
    c = 0,
    u = !1,
    f = !1,
    d = !0;
  if (typeof e != 'function') throw new TypeError(iW);
  (t = sm(t) || 0),
    aW(r) &&
      ((u = !!r.leading),
      (f = 'maxWait' in r),
      (i = f ? oW(sm(r.maxWait) || 0, t) : i),
      (d = 'trailing' in r ? !!r.trailing : d));
  function h(O) {
    var S = n,
      $ = a;
    return (n = a = void 0), (c = O), (o = e.apply($, S)), o;
  }
  function v(O) {
    return (c = O), (s = setTimeout(g, t)), u ? h(O) : o;
  }
  function p(O) {
    var S = O - l,
      $ = O - c,
      A = t - S;
    return f ? sW(A, i - $) : A;
  }
  function m(O) {
    var S = O - l,
      $ = O - c;
    return l === void 0 || S >= t || S < 0 || (f && $ >= i);
  }
  function g() {
    var O = vc();
    if (m(O)) return _(O);
    s = setTimeout(g, p(O));
  }
  function _(O) {
    return (s = void 0), d && n ? h(O) : ((n = a = void 0), o);
  }
  function x() {
    s !== void 0 && clearTimeout(s), (c = 0), (n = l = a = s = void 0);
  }
  function b() {
    return s === void 0 ? o : _(vc());
  }
  function w() {
    var O = vc(),
      S = m(O);
    if (((n = arguments), (a = this), (l = O), S)) {
      if (s === void 0) return v(l);
      if (f) return clearTimeout(s), (s = setTimeout(g, t)), h(l);
    }
    return s === void 0 && (s = setTimeout(g, t)), o;
  }
  return (w.cancel = x), (w.flush = b), w;
}
var vx = lW,
  cW = vx,
  uW = Hd,
  fW = 'Expected a function';
function dW(e, t, r) {
  var n = !0,
    a = !0;
  if (typeof e != 'function') throw new TypeError(fW);
  return (
    uW(r) &&
      ((n = 'leading' in r ? !!r.leading : n),
      (a = 'trailing' in r ? !!r.trailing : a)),
    cW(e, t, { leading: n, maxWait: t, trailing: a })
  );
}
var pW = dW,
  hW = function (e, t, r, n) {
    switch (t) {
      case 'debounce':
        return vx(e, r, n);
      case 'throttle':
        return pW(e, r, n);
      default:
        return e;
    }
  },
  Nu = function (e) {
    return typeof e == 'function';
  },
  Ya = function () {
    return typeof window > 'u';
  },
  lm = function (e) {
    return e instanceof Element || e instanceof HTMLDocument;
  },
  vW = function (e, t, r, n) {
    return function (a) {
      var i = a.width,
        o = a.height;
      t(function (s) {
        return (s.width === i && s.height === o) ||
          (s.width === i && !n) ||
          (s.height === o && !r)
          ? s
          : (e && Nu(e) && e(i, o), { width: i, height: o });
      });
    };
  },
  mW = (function (e) {
    cz(t, e);
    function t(r) {
      var n = e.call(this, r) || this;
      (n.cancelHandler = function () {
        n.resizeHandler &&
          n.resizeHandler.cancel &&
          (n.resizeHandler.cancel(), (n.resizeHandler = null));
      }),
        (n.attachObserver = function () {
          var c = n.props,
            u = c.targetRef,
            f = c.observerOptions;
          if (!Ya()) {
            u && u.current && (n.targetRef.current = u.current);
            var d = n.getElement();
            !d ||
              (n.observableElement && n.observableElement === d) ||
              ((n.observableElement = d), n.resizeObserver.observe(d, f));
          }
        }),
        (n.getElement = function () {
          var c = n.props,
            u = c.querySelector,
            f = c.targetDomEl;
          if (Ya()) return null;
          if (u) return document.querySelector(u);
          if (f && lm(f)) return f;
          if (n.targetRef && lm(n.targetRef.current))
            return n.targetRef.current;
          var d = xy.exports.findDOMNode(n);
          if (!d) return null;
          var h = n.getRenderType();
          switch (h) {
            case 'renderProp':
              return d;
            case 'childFunction':
              return d;
            case 'child':
              return d;
            case 'childArray':
              return d;
            default:
              return d.parentElement;
          }
        }),
        (n.createResizeHandler = function (c) {
          var u = n.props,
            f = u.handleWidth,
            d = f === void 0 ? !0 : f,
            h = u.handleHeight,
            v = h === void 0 ? !0 : h,
            p = u.onResize;
          if (!(!d && !v)) {
            var m = vW(p, n.setState.bind(n), d, v);
            c.forEach(function (g) {
              var _ = (g && g.contentRect) || {},
                x = _.width,
                b = _.height,
                w = !n.skipOnMount && !Ya();
              w && m({ width: x, height: b }), (n.skipOnMount = !1);
            });
          }
        }),
        (n.getRenderType = function () {
          var c = n.props,
            u = c.render,
            f = c.children;
          return Nu(u)
            ? 'renderProp'
            : Nu(f)
            ? 'childFunction'
            : E.exports.isValidElement(f)
            ? 'child'
            : Array.isArray(f)
            ? 'childArray'
            : 'parent';
        });
      var a = r.skipOnMount,
        i = r.refreshMode,
        o = r.refreshRate,
        s = o === void 0 ? 1e3 : o,
        l = r.refreshOptions;
      return (
        (n.state = { width: void 0, height: void 0 }),
        (n.skipOnMount = a),
        (n.targetRef = E.exports.createRef()),
        (n.observableElement = null),
        Ya() ||
          ((n.resizeHandler = hW(n.createResizeHandler, i, s, l)),
          (n.resizeObserver = new window.ResizeObserver(n.resizeHandler))),
        n
      );
    }
    return (
      (t.prototype.componentDidMount = function () {
        this.attachObserver();
      }),
      (t.prototype.componentDidUpdate = function () {
        this.attachObserver();
      }),
      (t.prototype.componentWillUnmount = function () {
        Ya() ||
          ((this.observableElement = null),
          this.resizeObserver.disconnect(),
          this.cancelHandler());
      }),
      (t.prototype.render = function () {
        var r = this.props,
          n = r.render,
          a = r.children,
          i = r.nodeType,
          o = i === void 0 ? 'div' : i,
          s = this.state,
          l = s.width,
          c = s.height,
          u = { width: l, height: c, targetRef: this.targetRef },
          f = this.getRenderType(),
          d;
        switch (f) {
          case 'renderProp':
            return n && n(u);
          case 'childFunction':
            return (d = a), d(u);
          case 'child':
            if (((d = a), d.type && typeof d.type == 'string')) {
              u.targetRef;
              var h = uz(u, ['targetRef']);
              return E.exports.cloneElement(d, h);
            }
            return E.exports.cloneElement(d, u);
          case 'childArray':
            return (
              (d = a),
              d.map(function (v) {
                return !!v && E.exports.cloneElement(v, u);
              })
            );
          default:
            return E.exports.createElement(o, null);
        }
      }),
      t
    );
  })(E.exports.PureComponent),
  oa = function (t, r) {
    for (
      var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), i = 2;
      i < n;
      i++
    )
      a[i - 2] = arguments[i];
  };
function Lu() {
  return (
    (Lu =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Lu.apply(this, arguments)
  );
}
function cm(e, t) {
  return xW(e) || bW(e, t) || yW(e, t) || gW();
}
function gW() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function yW(e, t) {
  if (!!e) {
    if (typeof e == 'string') return um(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === 'Object' && e.constructor && (r = e.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return um(e, t);
  }
}
function um(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function bW(e, t) {
  if (!(typeof Symbol > 'u' || !(Symbol.iterator in Object(e)))) {
    var r = [],
      n = !0,
      a = !1,
      i = void 0;
    try {
      for (
        var o = e[Symbol.iterator](), s;
        !(n = (s = o.next()).done) && (r.push(s.value), !(t && r.length === t));
        n = !0
      );
    } catch (l) {
      (a = !0), (i = l);
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (a) throw i;
      }
    }
    return r;
  }
}
function xW(e) {
  if (Array.isArray(e)) return e;
}
var wW = E.exports.forwardRef(function (e, t) {
    var r = e.aspect,
      n = e.width,
      a = n === void 0 ? '100%' : n,
      i = e.height,
      o = i === void 0 ? '100%' : i,
      s = e.minWidth,
      l = e.minHeight,
      c = e.maxHeight,
      u = e.children,
      f = e.debounce,
      d = f === void 0 ? 0 : f,
      h = e.id,
      v = e.className,
      p = E.exports.useState({ containerWidth: -1, containerHeight: -1 }),
      m = cm(p, 2),
      g = m[0],
      _ = m[1],
      x = E.exports.useRef(null);
    E.exports.useImperativeHandle(
      t,
      function () {
        return x;
      },
      [x]
    );
    var b = E.exports.useState(!1),
      w = cm(b, 2),
      O = w[0],
      S = w[1],
      $ = function () {
        return x.current
          ? {
              containerWidth: x.current.clientWidth,
              containerHeight: x.current.clientHeight,
            }
          : null;
      },
      A = function () {
        if (!!O) {
          var D = $();
          if (D) {
            var j = g.containerWidth,
              R = g.containerHeight,
              N = D.containerWidth,
              z = D.containerHeight;
            (N !== j || z !== R) &&
              _({ containerWidth: N, containerHeight: z });
          }
        }
      },
      P = d > 0 ? fx(A, d) : A,
      C = function () {
        var D = g.containerWidth,
          j = g.containerHeight;
        if (D < 0 || j < 0) return null;
        oa(
          An(a) || An(o),
          `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`,
          a,
          o
        ),
          oa(!r || r > 0, 'The aspect(%s) must be greater than zero.', r);
        var R = An(a) ? D : a,
          N = An(o) ? j : o;
        return (
          r &&
            r > 0 &&
            (R ? (N = R / r) : N && (R = N * r), c && N > c && (N = c)),
          oa(
            R > 0 || N > 0,
            `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,
            R,
            N,
            a,
            o,
            s,
            l,
            r
          ),
          E.exports.cloneElement(u, { width: R, height: N })
        );
      };
    E.exports.useEffect(
      function () {
        if (O) {
          var T = $();
          T && _(T);
        }
      },
      [O]
    ),
      E.exports.useEffect(function () {
        S(!0);
      }, []);
    var k = { width: a, height: o, minWidth: s, minHeight: l, maxHeight: c };
    return y.createElement(
      mW,
      { handleWidth: !0, handleHeight: !0, onResize: P, targetRef: x },
      y.createElement(
        'div',
        Lu({}, h != null ? { id: ''.concat(h) } : {}, {
          className: Ze('recharts-responsive-container', v),
          style: k,
          ref: x,
        }),
        C()
      )
    );
  }),
  mx = function (t) {
    return null;
  };
mx.displayName = 'Cell';
var Bu = { exports: {} },
  mc = '('.charCodeAt(0),
  gc = ')'.charCodeAt(0),
  so = "'".charCodeAt(0),
  yc = '"'.charCodeAt(0),
  bc = '\\'.charCodeAt(0),
  lo = '/'.charCodeAt(0),
  xc = ','.charCodeAt(0),
  wc = ':'.charCodeAt(0),
  fm = '*'.charCodeAt(0),
  _W = function (e) {
    for (
      var t = [],
        r = e,
        n,
        a,
        i,
        o,
        s,
        l,
        c,
        u = 0,
        f = r.charCodeAt(u),
        d = r.length,
        h = [{ nodes: t }],
        v = 0,
        p,
        m = '',
        g = '',
        _ = '';
      u < d;

    )
      if (f <= 32) {
        n = u;
        do (n += 1), (f = r.charCodeAt(n));
        while (f <= 32);
        (o = r.slice(u, n)),
          (i = t[t.length - 1]),
          f === gc && v
            ? (_ = o)
            : i && i.type === 'div'
            ? (i.after = o)
            : f === xc || f === wc || (f === lo && r.charCodeAt(n + 1) !== fm)
            ? (g = o)
            : t.push({ type: 'space', sourceIndex: u, value: o }),
          (u = n);
      } else if (f === so || f === yc) {
        (n = u),
          (a = f === so ? "'" : '"'),
          (o = { type: 'string', sourceIndex: u, quote: a });
        do
          if (((s = !1), (n = r.indexOf(a, n + 1)), ~n))
            for (l = n; r.charCodeAt(l - 1) === bc; ) (l -= 1), (s = !s);
          else (r += a), (n = r.length - 1), (o.unclosed = !0);
        while (s);
        (o.value = r.slice(u + 1, n)),
          t.push(o),
          (u = n + 1),
          (f = r.charCodeAt(u));
      } else if (f === lo && r.charCodeAt(u + 1) === fm)
        (o = { type: 'comment', sourceIndex: u }),
          (n = r.indexOf('*/', u)),
          n === -1 && ((o.unclosed = !0), (n = r.length)),
          (o.value = r.slice(u + 2, n)),
          t.push(o),
          (u = n + 2),
          (f = r.charCodeAt(u));
      else if (f === lo || f === xc || f === wc)
        (o = r[u]),
          t.push({
            type: 'div',
            sourceIndex: u - g.length,
            value: o,
            before: g,
            after: '',
          }),
          (g = ''),
          (u += 1),
          (f = r.charCodeAt(u));
      else if (mc === f) {
        n = u;
        do (n += 1), (f = r.charCodeAt(n));
        while (f <= 32);
        if (
          ((o = {
            type: 'function',
            sourceIndex: u - m.length,
            value: m,
            before: r.slice(u + 1, n),
          }),
          (u = n),
          m === 'url' && f !== so && f !== yc)
        ) {
          n -= 1;
          do
            if (((s = !1), (n = r.indexOf(')', n + 1)), ~n))
              for (l = n; r.charCodeAt(l - 1) === bc; ) (l -= 1), (s = !s);
            else (r += ')'), (n = r.length - 1), (o.unclosed = !0);
          while (s);
          c = n;
          do (c -= 1), (f = r.charCodeAt(c));
          while (f <= 32);
          u !== c + 1
            ? (o.nodes = [
                { type: 'word', sourceIndex: u, value: r.slice(u, c + 1) },
              ])
            : (o.nodes = []),
            o.unclosed && c + 1 !== n
              ? ((o.after = ''),
                o.nodes.push({
                  type: 'space',
                  sourceIndex: c + 1,
                  value: r.slice(c + 1, n),
                }))
              : (o.after = r.slice(c + 1, n)),
            (u = n + 1),
            (f = r.charCodeAt(u)),
            t.push(o);
        } else
          (v += 1),
            (o.after = ''),
            t.push(o),
            h.push(o),
            (t = o.nodes = []),
            (p = o);
        m = '';
      } else if (gc === f && v)
        (u += 1),
          (f = r.charCodeAt(u)),
          (p.after = _),
          (_ = ''),
          (v -= 1),
          h.pop(),
          (p = h[v]),
          (t = p.nodes);
      else {
        n = u;
        do f === bc && (n += 1), (n += 1), (f = r.charCodeAt(n));
        while (
          n < d &&
          !(
            f <= 32 ||
            f === so ||
            f === yc ||
            f === xc ||
            f === wc ||
            f === lo ||
            f === mc ||
            (f === gc && v)
          )
        );
        (o = r.slice(u, n)),
          mc === f
            ? (m = o)
            : t.push({ type: 'word', sourceIndex: u, value: o }),
          (u = n);
      }
    for (u = h.length - 1; u; u -= 1) h[u].unclosed = !0;
    return h[0].nodes;
  },
  OW = function e(t, r, n) {
    var a, i, o, s;
    for (a = 0, i = t.length; a < i; a += 1)
      (o = t[a]),
        n || (s = r(o, a, t)),
        s !== !1 &&
          o.type === 'function' &&
          Array.isArray(o.nodes) &&
          e(o.nodes, r, n),
        n && r(o, a, t);
  };
function dm(e, t) {
  var r = e.type,
    n = e.value,
    a,
    i;
  return t && (i = t(e)) !== void 0
    ? i
    : r === 'word' || r === 'space'
    ? n
    : r === 'string'
    ? ((a = e.quote || ''), a + n + (e.unclosed ? '' : a))
    : r === 'comment'
    ? '/*' + n + (e.unclosed ? '' : '*/')
    : r === 'div'
    ? (e.before || '') + n + (e.after || '')
    : Array.isArray(e.nodes)
    ? ((a = gx(e.nodes)),
      r !== 'function'
        ? a
        : n +
          '(' +
          (e.before || '') +
          a +
          (e.after || '') +
          (e.unclosed ? '' : ')'))
    : n;
}
function gx(e, t) {
  var r, n;
  if (Array.isArray(e)) {
    for (r = '', n = e.length - 1; ~n; n -= 1) r = dm(e[n], t) + r;
    return r;
  }
  return dm(e, t);
}
var SW = gx,
  _c,
  pm;
function EW() {
  if (pm) return _c;
  pm = 1;
  var e = '-'.charCodeAt(0),
    t = '+'.charCodeAt(0),
    r = '.'.charCodeAt(0),
    n = 'e'.charCodeAt(0),
    a = 'E'.charCodeAt(0);
  return (
    (_c = function (i) {
      for (var o = 0, s = i.length, l = !1, c = -1, u = !1, f; o < s; ) {
        if (((f = i.charCodeAt(o)), f >= 48 && f <= 57)) u = !0;
        else if (f === n || f === a) {
          if (c > -1) break;
          c = o;
        } else if (f === r) {
          if (l) break;
          l = !0;
        } else if (f === t || f === e) {
          if (o !== 0) break;
        } else break;
        o += 1;
      }
      return (
        c + 1 === o && o--, u ? { number: i.slice(0, o), unit: i.slice(o) } : !1
      );
    }),
    _c
  );
}
var $W = _W,
  yx = OW,
  bx = SW;
function dn(e) {
  return this instanceof dn ? ((this.nodes = $W(e)), this) : new dn(e);
}
dn.prototype.toString = function () {
  return Array.isArray(this.nodes) ? bx(this.nodes) : '';
};
dn.prototype.walk = function (e, t) {
  return yx(this.nodes, e, t), this;
};
dn.unit = EW();
dn.walk = yx;
dn.stringify = bx;
var AW = dn;
function CW(e) {
  throw new Error(
    'Could not dynamically require "' +
      e +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
  );
}
var xx = {};
(function (e) {
  var t = (function () {
    function r(d, h) {
      Object.defineProperty(this, 'name', {
        enumerable: !1,
        writable: !1,
        value: 'JisonParserError',
      }),
        d == null && (d = '???'),
        Object.defineProperty(this, 'message', {
          enumerable: !1,
          writable: !0,
          value: d,
        }),
        (this.hash = h);
      var v;
      if (h && h.exception instanceof Error) {
        var p = h.exception;
        (this.message = p.message || d), (v = p.stack);
      }
      v ||
        (Error.hasOwnProperty('captureStackTrace')
          ? Error.captureStackTrace(this, this.constructor)
          : (v = new Error(d).stack)),
        v &&
          Object.defineProperty(this, 'stack', {
            enumerable: !1,
            writable: !1,
            value: v,
          });
    }
    typeof Object.setPrototypeOf == 'function'
      ? Object.setPrototypeOf(r.prototype, Error.prototype)
      : (r.prototype = Object.create(Error.prototype)),
      (r.prototype.constructor = r),
      (r.prototype.name = 'JisonParserError');
    function n(d) {
      for (var h = [], v = d.pop, p = d.rule, m = 0, g = v.length; m < g; m++)
        h.push([v[m], p[m]]);
      return h;
    }
    function a(d) {
      for (var h = {}, v = d.idx, p = d.goto, m = 0, g = v.length; m < g; m++) {
        var _ = v[m];
        h[_] = p[m];
      }
      return h;
    }
    function i(d) {
      for (
        var h = [],
          v = d.len,
          p = d.symbol,
          m = d.type,
          g = d.state,
          _ = d.mode,
          x = d.goto,
          b = 0,
          w = v.length;
        b < w;
        b++
      ) {
        for (var O = v[b], S = {}, $ = 0; $ < O; $++) {
          var A = p.shift();
          switch (m.shift()) {
            case 2:
              S[A] = [_.shift(), x.shift()];
              break;
            case 0:
              S[A] = g.shift();
              break;
            default:
              S[A] = [3];
          }
        }
        h.push(S);
      }
      return h;
    }
    function o(d, h, v) {
      v = v || 0;
      for (var p = 0; p < h; p++) this.push(d), (d += v);
    }
    function s(d, h) {
      for (d = this.length - d, h += d; d < h; d++) this.push(this[d]);
    }
    function l(d) {
      for (var h = [], v = 0, p = d.length; v < p; v++) {
        var m = d[v];
        typeof m == 'function' ? (v++, m.apply(h, d[v])) : h.push(m);
      }
      return h;
    }
    var c = {
      trace: function () {},
      JisonParserError: r,
      yy: {},
      options: {
        type: 'lalr',
        hasPartialLrUpgradeOnConflict: !0,
        errorRecoveryTokenDiscardCount: 3,
      },
      symbols_: {
        $accept: 0,
        $end: 1,
        ADD: 3,
        ANGLE: 16,
        CHS: 22,
        COMMA: 14,
        CSS_CPROP: 13,
        CSS_VAR: 12,
        DIV: 6,
        EMS: 20,
        EOF: 1,
        EXS: 21,
        FREQ: 18,
        LENGTH: 15,
        LPAREN: 7,
        MUL: 5,
        NESTED_CALC: 9,
        NUMBER: 11,
        PERCENTAGE: 28,
        PREFIX: 10,
        REMS: 23,
        RES: 19,
        RPAREN: 8,
        SUB: 4,
        TIME: 17,
        VHS: 24,
        VMAXS: 27,
        VMINS: 26,
        VWS: 25,
        css_value: 33,
        css_variable: 32,
        error: 2,
        expression: 29,
        math_expression: 30,
        value: 31,
      },
      terminals_: {
        1: 'EOF',
        2: 'error',
        3: 'ADD',
        4: 'SUB',
        5: 'MUL',
        6: 'DIV',
        7: 'LPAREN',
        8: 'RPAREN',
        9: 'NESTED_CALC',
        10: 'PREFIX',
        11: 'NUMBER',
        12: 'CSS_VAR',
        13: 'CSS_CPROP',
        14: 'COMMA',
        15: 'LENGTH',
        16: 'ANGLE',
        17: 'TIME',
        18: 'FREQ',
        19: 'RES',
        20: 'EMS',
        21: 'EXS',
        22: 'CHS',
        23: 'REMS',
        24: 'VHS',
        25: 'VWS',
        26: 'VMINS',
        27: 'VMAXS',
        28: 'PERCENTAGE',
      },
      TERROR: 2,
      EOF: 1,
      originalQuoteName: null,
      originalParseError: null,
      cleanupAfterParse: null,
      constructParseErrorInfo: null,
      yyMergeLocationInfo: null,
      __reentrant_call_depth: 0,
      __error_infos: [],
      __error_recovery_infos: [],
      quoteName: function (h) {
        return '"' + h + '"';
      },
      getSymbolName: function (h) {
        if (this.terminals_[h]) return this.terminals_[h];
        var v = this.symbols_;
        for (var p in v) if (v[p] === h) return p;
        return null;
      },
      describeSymbol: function (h) {
        if (
          h !== this.EOF &&
          this.terminal_descriptions_ &&
          this.terminal_descriptions_[h]
        )
          return this.terminal_descriptions_[h];
        if (h === this.EOF) return 'end of input';
        var v = this.getSymbolName(h);
        return v ? this.quoteName(v) : null;
      },
      collect_expected_token_set: function (h, v) {
        var p = this.TERROR,
          m = [],
          g = {};
        if (!v && this.state_descriptions_ && this.state_descriptions_[h])
          return [this.state_descriptions_[h]];
        for (var _ in this.table[h])
          if (((_ = +_), _ !== p)) {
            var x = v ? _ : this.describeSymbol(_);
            x && !g[x] && (m.push(x), (g[x] = !0));
          }
        return m;
      },
      productions_: n({
        pop: l([29, o, [30, 10], 31, 31, 32, 32, o, [33, 15]]),
        rule: l([2, o, [3, 5], 4, 7, o, [1, 4], 2, 4, 6, o, [1, 14], 2]),
      }),
      performAction: function (h, v, p) {
        var m = this.yy;
        switch ((m.parser, m.lexer, h)) {
          case 0:
            this.$ = p[v - 1];
            break;
          case 1:
            return (this.$ = p[v - 1]), p[v - 1];
          case 2:
          case 3:
          case 4:
          case 5:
            this.$ = {
              type: 'MathExpression',
              operator: p[v - 1],
              left: p[v - 2],
              right: p[v],
            };
            break;
          case 6:
            this.$ = p[v - 1];
            break;
          case 7:
            this.$ = { type: 'Calc', value: p[v - 1] };
            break;
          case 8:
            this.$ = { type: 'Calc', value: p[v - 1], prefix: p[v - 5] };
            break;
          case 9:
          case 10:
          case 11:
            this.$ = p[v];
            break;
          case 12:
            this.$ = { type: 'Value', value: parseFloat(p[v]) };
            break;
          case 13:
            this.$ = { type: 'Value', value: parseFloat(p[v]) * -1 };
            break;
          case 14:
            this.$ = { type: 'CssVariable', value: p[v - 1] };
            break;
          case 15:
            this.$ = {
              type: 'CssVariable',
              value: p[v - 3],
              fallback: p[v - 1],
            };
            break;
          case 16:
            this.$ = {
              type: 'LengthValue',
              value: parseFloat(p[v]),
              unit: /[a-z]+/.exec(p[v])[0],
            };
            break;
          case 17:
            this.$ = {
              type: 'AngleValue',
              value: parseFloat(p[v]),
              unit: /[a-z]+/.exec(p[v])[0],
            };
            break;
          case 18:
            this.$ = {
              type: 'TimeValue',
              value: parseFloat(p[v]),
              unit: /[a-z]+/.exec(p[v])[0],
            };
            break;
          case 19:
            this.$ = {
              type: 'FrequencyValue',
              value: parseFloat(p[v]),
              unit: /[a-z]+/.exec(p[v])[0],
            };
            break;
          case 20:
            this.$ = {
              type: 'ResolutionValue',
              value: parseFloat(p[v]),
              unit: /[a-z]+/.exec(p[v])[0],
            };
            break;
          case 21:
            this.$ = { type: 'EmValue', value: parseFloat(p[v]), unit: 'em' };
            break;
          case 22:
            this.$ = { type: 'ExValue', value: parseFloat(p[v]), unit: 'ex' };
            break;
          case 23:
            this.$ = { type: 'ChValue', value: parseFloat(p[v]), unit: 'ch' };
            break;
          case 24:
            this.$ = { type: 'RemValue', value: parseFloat(p[v]), unit: 'rem' };
            break;
          case 25:
            this.$ = { type: 'VhValue', value: parseFloat(p[v]), unit: 'vh' };
            break;
          case 26:
            this.$ = { type: 'VwValue', value: parseFloat(p[v]), unit: 'vw' };
            break;
          case 27:
            this.$ = {
              type: 'VminValue',
              value: parseFloat(p[v]),
              unit: 'vmin',
            };
            break;
          case 28:
            this.$ = {
              type: 'VmaxValue',
              value: parseFloat(p[v]),
              unit: 'vmax',
            };
            break;
          case 29:
            this.$ = {
              type: 'PercentageValue',
              value: parseFloat(p[v]),
              unit: '%',
            };
            break;
          case 30:
            var g = p[v];
            (g.value *= -1), (this.$ = g);
            break;
        }
      },
      table: i({
        len: l([
          24,
          1,
          5,
          23,
          1,
          18,
          o,
          [0, 3],
          1,
          o,
          [0, 16],
          o,
          [23, 4],
          s,
          [28, 3],
          0,
          0,
          16,
          1,
          6,
          6,
          o,
          [0, 3],
          5,
          1,
          2,
          s,
          [37, 3],
          s,
          [20, 3],
          5,
          0,
          0,
        ]),
        symbol: l([
          4,
          7,
          9,
          11,
          12,
          o,
          [15, 19, 1],
          1,
          1,
          o,
          [3, 4, 1],
          s,
          [30, 19],
          s,
          [29, 4],
          7,
          4,
          10,
          11,
          s,
          [22, 14],
          s,
          [19, 3],
          s,
          [43, 22],
          s,
          [23, 69],
          s,
          [139, 4],
          8,
          s,
          [51, 24],
          4,
          s,
          [138, 15],
          13,
          s,
          [186, 5],
          8,
          s,
          [6, 6],
          s,
          [5, 5],
          9,
          8,
          14,
          s,
          [159, 47],
          s,
          [60, 10],
        ]),
        type: l([
          o,
          [2, 19],
          o,
          [0, 5],
          1,
          o,
          [2, 24],
          o,
          [0, 4],
          s,
          [22, 19],
          s,
          [43, 42],
          s,
          [23, 70],
          s,
          [28, 25],
          s,
          [45, 25],
          s,
          [113, 54],
        ]),
        state: l([
          1,
          2,
          8,
          6,
          7,
          30,
          s,
          [4, 3],
          33,
          37,
          s,
          [5, 3],
          38,
          s,
          [4, 3],
          39,
          s,
          [4, 3],
          40,
          s,
          [4, 3],
          42,
          s,
          [21, 4],
          50,
          s,
          [5, 3],
          51,
          s,
          [4, 3],
        ]),
        mode: l([o, [1, 179], o, [2, 3], s, [5, 5], s, [6, 4], o, [1, 57]]),
        goto: l([
          5,
          3,
          4,
          24,
          o,
          [9, 15, 1],
          o,
          [25, 5, 1],
          s,
          [24, 19],
          31,
          35,
          32,
          34,
          s,
          [18, 14],
          36,
          s,
          [38, 19],
          s,
          [19, 57],
          s,
          [118, 4],
          41,
          s,
          [24, 19],
          43,
          35,
          s,
          [16, 14],
          44,
          o,
          [2, 3],
          28,
          29,
          2,
          o,
          [3, 3],
          28,
          29,
          3,
          s,
          [53, 4],
          o,
          [45, 5, 1],
          s,
          [100, 42],
          52,
          s,
          [5, 4],
          53,
        ]),
      }),
      defaultActions: a({
        idx: l([6, 7, 8, o, [10, 16, 1], 33, 34, 39, 40, 41, 45, 47, 52, 53]),
        goto: l([
          9,
          10,
          11,
          o,
          [16, 14, 1],
          12,
          1,
          30,
          13,
          o,
          [4, 4, 1],
          14,
          15,
          8,
        ]),
      }),
      parseError: function (h, v, p) {
        if (v.recoverable)
          typeof this.trace == 'function' && this.trace(h), v.destroy();
        else
          throw (
            (typeof this.trace == 'function' && this.trace(h),
            p || (p = this.JisonParserError),
            new p(h, v))
          );
      },
      parse: function (h) {
        var v = this,
          p = new Array(128),
          m = new Array(128),
          g = new Array(128),
          _ = this.table,
          x = 0,
          b = 0;
        this.TERROR;
        var w = this.EOF;
        this.options.errorRecoveryTokenDiscardCount | 0;
        var O = [0, 54],
          S;
        this.__lexer__
          ? (S = this.__lexer__)
          : (S = this.__lexer__ = Object.create(this.lexer));
        var $ = {
          parseError: void 0,
          quoteName: void 0,
          lexer: void 0,
          parser: void 0,
          pre_parse: void 0,
          post_parse: void 0,
          pre_lex: void 0,
          post_lex: void 0,
        };
        typeof assert != 'function' || assert,
          (this.yyGetSharedState = function () {
            return $;
          });
        function A(oe, H) {
          for (var Q in H)
            typeof oe[Q] > 'u' &&
              Object.prototype.hasOwnProperty.call(H, Q) &&
              (oe[Q] = H[Q]);
        }
        A($, this.yy),
          ($.lexer = S),
          ($.parser = this),
          typeof $.parseError == 'function'
            ? (this.parseError = function (H, Q, ie) {
                return (
                  ie || (ie = this.JisonParserError),
                  $.parseError.call(this, H, Q, ie)
                );
              })
            : (this.parseError = this.originalParseError),
          typeof $.quoteName == 'function'
            ? (this.quoteName = function (H) {
                return $.quoteName.call(this, H);
              })
            : (this.quoteName = this.originalQuoteName),
          (this.cleanupAfterParse = function (H, Q, ie) {
            var B;
            if (Q) {
              var J;
              ($.post_parse || this.post_parse) &&
                (J = this.constructParseErrorInfo(null, null, null, !1)),
                $.post_parse &&
                  ((B = $.post_parse.call(this, $, H, J)),
                  typeof B < 'u' && (H = B)),
                this.post_parse &&
                  ((B = this.post_parse.call(this, $, H, J)),
                  typeof B < 'u' && (H = B)),
                J && J.destroy && J.destroy();
            }
            if (this.__reentrant_call_depth > 1) return H;
            if (
              (S.cleanupAfterLex && S.cleanupAfterLex(ie),
              $ &&
                (($.lexer = void 0),
                ($.parser = void 0),
                S.yy === $ && (S.yy = void 0)),
              ($ = void 0),
              (this.parseError = this.originalParseError),
              (this.quoteName = this.originalQuoteName),
              (p.length = 0),
              (m.length = 0),
              (g.length = 0),
              (x = 0),
              !ie)
            ) {
              for (var de = this.__error_infos.length - 1; de >= 0; de--) {
                var ce = this.__error_infos[de];
                ce && typeof ce.destroy == 'function' && ce.destroy();
              }
              this.__error_infos.length = 0;
            }
            return H;
          }),
          (this.constructParseErrorInfo = function (H, Q, ie, B) {
            var J = {
              errStr: H,
              exception: Q,
              text: S.match,
              value: S.yytext,
              token: this.describeSymbol(b) || b,
              token_id: b,
              line: S.yylineno,
              expected: ie,
              recoverable: B,
              state: T,
              action: D,
              new_state: Z,
              symbol_stack: p,
              state_stack: m,
              value_stack: g,
              stack_pointer: x,
              yy: $,
              lexer: S,
              parser: this,
              destroy: function () {
                var ce = !!this.recoverable;
                for (var Pe in this)
                  this.hasOwnProperty(Pe) &&
                    typeof Pe == 'object' &&
                    (this[Pe] = void 0);
                this.recoverable = ce;
              },
            };
            return this.__error_infos.push(J), J;
          });
        function P() {
          var oe = S.lex();
          return typeof oe != 'number' && (oe = v.symbols_[oe] || oe), oe || w;
        }
        function C() {
          var oe = S.fastLex();
          return typeof oe != 'number' && (oe = v.symbols_[oe] || oe), oe || w;
        }
        var k = P,
          T,
          D,
          j,
          R,
          N = { $: !0, _$: void 0, yy: $ },
          z,
          M,
          Y,
          Z,
          ne = !1;
        try {
          if (
            (this.__reentrant_call_depth++,
            S.setInput(h, $),
            typeof S.canIUse == 'function')
          ) {
            var ve = S.canIUse();
            ve.fastLex && typeof C == 'function' && (k = C);
          }
          for (
            g[x] = null,
              m[x] = 0,
              p[x] = 0,
              ++x,
              this.pre_parse && this.pre_parse.call(this, $),
              $.pre_parse && $.pre_parse.call(this, $),
              Z = m[x - 1];
            ;

          ) {
            if (((T = Z), this.defaultActions[T]))
              (D = 2), (Z = this.defaultActions[T]);
            else if (
              (b || (b = k()),
              (R = (_[T] && _[T][b]) || O),
              (Z = R[1]),
              (D = R[0]),
              !D)
            ) {
              var Se,
                le = this.describeSymbol(b) || b,
                Ee = this.collect_expected_token_set(T);
              typeof S.yylineno == 'number'
                ? (Se = 'Parse error on line ' + (S.yylineno + 1) + ': ')
                : (Se = 'Parse error: '),
                typeof S.showPosition == 'function' &&
                  (Se +=
                    `
` +
                    S.showPosition(79 - 10, 10) +
                    `
`),
                Ee.length
                  ? (Se +=
                      'Expecting ' + Ee.join(', ') + ', got unexpected ' + le)
                  : (Se += 'Unexpected ' + le),
                (z = this.constructParseErrorInfo(Se, null, Ee, !1)),
                (j = this.parseError(z.errStr, z, this.JisonParserError)),
                typeof j < 'u' && (ne = j);
              break;
            }
            switch (D) {
              default:
                if (D instanceof Array) {
                  (z = this.constructParseErrorInfo(
                    'Parse Error: multiple actions possible at state: ' +
                      T +
                      ', token: ' +
                      b,
                    null,
                    null,
                    !1
                  )),
                    (j = this.parseError(z.errStr, z, this.JisonParserError)),
                    typeof j < 'u' && (ne = j);
                  break;
                }
                (z = this.constructParseErrorInfo(
                  'Parsing halted. No viable error recovery approach available due to internal system failure.',
                  null,
                  null,
                  !1
                )),
                  (j = this.parseError(z.errStr, z, this.JisonParserError)),
                  typeof j < 'u' && (ne = j);
                break;
              case 1:
                (p[x] = b), (g[x] = S.yytext), (m[x] = Z), ++x, (b = 0);
                continue;
              case 2:
                if (
                  ((Y = this.productions_[Z - 1]),
                  (M = Y[1]),
                  (j = this.performAction.call(N, Z, x - 1, g)),
                  typeof j < 'u')
                ) {
                  ne = j;
                  break;
                }
                x -= M;
                var at = Y[0];
                (p[x] = at),
                  (g[x] = N.$),
                  (Z = _[m[x - 1]][at]),
                  (m[x] = Z),
                  ++x;
                continue;
              case 3:
                x !== -2 && ((ne = !0), x--, typeof g[x] < 'u' && (ne = g[x]));
                break;
            }
            break;
          }
        } catch (oe) {
          if (oe instanceof this.JisonParserError) throw oe;
          if (
            S &&
            typeof S.JisonLexerError == 'function' &&
            oe instanceof S.JisonLexerError
          )
            throw oe;
          (z = this.constructParseErrorInfo(
            'Parsing aborted due to exception.',
            oe,
            null,
            !1
          )),
            (ne = !1),
            (j = this.parseError(z.errStr, z, this.JisonParserError)),
            typeof j < 'u' && (ne = j);
        } finally {
          (ne = this.cleanupAfterParse(ne, !0, !0)),
            this.__reentrant_call_depth--;
        }
        return ne;
      },
    };
    (c.originalParseError = c.parseError), (c.originalQuoteName = c.quoteName);
    var u = (function () {
      function d(v, p) {
        Object.defineProperty(this, 'name', {
          enumerable: !1,
          writable: !1,
          value: 'JisonLexerError',
        }),
          v == null && (v = '???'),
          Object.defineProperty(this, 'message', {
            enumerable: !1,
            writable: !0,
            value: v,
          }),
          (this.hash = p);
        var m;
        if (p && p.exception instanceof Error) {
          var g = p.exception;
          (this.message = g.message || v), (m = g.stack);
        }
        m ||
          (Error.hasOwnProperty('captureStackTrace')
            ? Error.captureStackTrace(this, this.constructor)
            : (m = new Error(v).stack)),
          m &&
            Object.defineProperty(this, 'stack', {
              enumerable: !1,
              writable: !1,
              value: m,
            });
      }
      typeof Object.setPrototypeOf == 'function'
        ? Object.setPrototypeOf(d.prototype, Error.prototype)
        : (d.prototype = Object.create(Error.prototype)),
        (d.prototype.constructor = d),
        (d.prototype.name = 'JisonLexerError');
      var h = {
        EOF: 1,
        ERROR: 2,
        __currentRuleSet__: null,
        __error_infos: [],
        __decompressed: !1,
        done: !1,
        _backtrack: !1,
        _input: '',
        _more: !1,
        _signaled_error_token: !1,
        conditionStack: [],
        match: '',
        matched: '',
        matches: !1,
        yytext: '',
        offset: 0,
        yyleng: 0,
        yylineno: 0,
        yylloc: null,
        constructLexErrorInfo: function (p, m, g) {
          if (
            ((p = '' + p),
            g == null &&
              (g = !(
                p.indexOf(`
`) > 0 && p.indexOf('^') > 0
              )),
            this.yylloc && g)
          ) {
            if (typeof this.prettyPrintRange == 'function')
              this.prettyPrintRange(this.yylloc),
                /\n\s*$/.test(p) ||
                  (p += `
`),
                (p +=
                  `
  Erroneous area:
` + this.prettyPrintRange(this.yylloc));
            else if (typeof this.showPosition == 'function') {
              var _ = this.showPosition();
              _ &&
                (p.length &&
                p[p.length - 1] !==
                  `
` &&
                _[0] !==
                  `
`
                  ? (p +=
                      `
` + _)
                  : (p += _));
            }
          }
          var x = {
            errStr: p,
            recoverable: !!m,
            text: this.match,
            token: null,
            line: this.yylineno,
            loc: this.yylloc,
            yy: this.yy,
            lexer: this,
            destroy: function () {
              var w = !!this.recoverable;
              for (var O in this)
                this.hasOwnProperty(O) &&
                  typeof O == 'object' &&
                  (this[O] = void 0);
              this.recoverable = w;
            },
          };
          return this.__error_infos.push(x), x;
        },
        parseError: function (p, m, g) {
          if ((g || (g = this.JisonLexerError), this.yy)) {
            if (
              this.yy.parser &&
              typeof this.yy.parser.parseError == 'function'
            )
              return (
                this.yy.parser.parseError.call(this, p, m, g) || this.ERROR
              );
            if (typeof this.yy.parseError == 'function')
              return this.yy.parseError.call(this, p, m, g) || this.ERROR;
          }
          throw new g(p, m);
        },
        yyerror: function (p) {
          var m = '';
          this.yylloc && (m = ' on line ' + (this.yylineno + 1));
          var g = this.constructLexErrorInfo(
              'Lexical error' + m + ': ' + p,
              this.options.lexerErrorsAreRecoverable
            ),
            _ = Array.prototype.slice.call(arguments, 1);
          return (
            _.length && (g.extra_error_attributes = _),
            this.parseError(g.errStr, g, this.JisonLexerError) || this.ERROR
          );
        },
        cleanupAfterLex: function (p) {
          if ((this.setInput('', {}), !p)) {
            for (var m = this.__error_infos.length - 1; m >= 0; m--) {
              var g = this.__error_infos[m];
              g && typeof g.destroy == 'function' && g.destroy();
            }
            this.__error_infos.length = 0;
          }
          return this;
        },
        clear: function () {
          (this.yytext = ''),
            (this.yyleng = 0),
            (this.match = ''),
            (this.matches = !1),
            (this._more = !1),
            (this._backtrack = !1);
          var p = this.yylloc ? this.yylloc.last_column : 0;
          this.yylloc = {
            first_line: this.yylineno + 1,
            first_column: p,
            last_line: this.yylineno + 1,
            last_column: p,
            range: [this.offset, this.offset],
          };
        },
        setInput: function (p, m) {
          if (((this.yy = m || this.yy || {}), !this.__decompressed)) {
            for (var g = this.rules, _ = 0, x = g.length; _ < x; _++) {
              var b = g[_];
              typeof b == 'number' && (g[_] = g[b]);
            }
            var w = this.conditions;
            for (var O in w) {
              for (
                var S = w[O],
                  $ = S.rules,
                  x = $.length,
                  A = new Array(x + 1),
                  P = new Array(x + 1),
                  _ = 0;
                _ < x;
                _++
              ) {
                var C = $[_],
                  b = g[C];
                (A[_ + 1] = b), (P[_ + 1] = C);
              }
              (S.rules = P), (S.__rule_regexes = A), (S.__rule_count = x);
            }
            this.__decompressed = !0;
          }
          return (
            (this._input = p || ''),
            this.clear(),
            (this._signaled_error_token = !1),
            (this.done = !1),
            (this.yylineno = 0),
            (this.matched = ''),
            (this.conditionStack = ['INITIAL']),
            (this.__currentRuleSet__ = null),
            (this.yylloc = {
              first_line: 1,
              first_column: 0,
              last_line: 1,
              last_column: 0,
              range: [0, 0],
            }),
            (this.offset = 0),
            this
          );
        },
        editRemainingInput: function (p, m) {
          var g = p.call(this, this._input, m);
          return (
            typeof g != 'string'
              ? g && (this._input = '' + g)
              : (this._input = g),
            this
          );
        },
        input: function () {
          if (!this._input) return null;
          var p = this._input[0];
          (this.yytext += p),
            this.yyleng++,
            this.offset++,
            (this.match += p),
            (this.matched += p);
          var m = 1,
            g = !1;
          if (
            p ===
            `
`
          )
            g = !0;
          else if (p === '\r') {
            g = !0;
            var _ = this._input[1];
            _ ===
              `
` &&
              (m++,
              (p += _),
              (this.yytext += _),
              this.yyleng++,
              this.offset++,
              (this.match += _),
              (this.matched += _),
              this.yylloc.range[1]++);
          }
          return (
            g
              ? (this.yylineno++,
                this.yylloc.last_line++,
                (this.yylloc.last_column = 0))
              : this.yylloc.last_column++,
            this.yylloc.range[1]++,
            (this._input = this._input.slice(m)),
            p
          );
        },
        unput: function (p) {
          var m = p.length,
            g = p.split(/(?:\r\n?|\n)/g);
          if (
            ((this._input = p + this._input),
            (this.yytext = this.yytext.substr(0, this.yytext.length - m)),
            (this.yyleng = this.yytext.length),
            (this.offset -= m),
            (this.match = this.match.substr(0, this.match.length - m)),
            (this.matched = this.matched.substr(0, this.matched.length - m)),
            g.length > 1)
          ) {
            (this.yylineno -= g.length - 1),
              (this.yylloc.last_line = this.yylineno + 1);
            var _ = this.match,
              x = _.split(/(?:\r\n?|\n)/g);
            x.length === 1 &&
              ((_ = this.matched), (x = _.split(/(?:\r\n?|\n)/g))),
              (this.yylloc.last_column = x[x.length - 1].length);
          } else this.yylloc.last_column -= m;
          return (
            (this.yylloc.range[1] = this.yylloc.range[0] + this.yyleng),
            (this.done = !1),
            this
          );
        },
        more: function () {
          return (this._more = !0), this;
        },
        reject: function () {
          if (this.options.backtrack_lexer) this._backtrack = !0;
          else {
            var p = '';
            this.yylloc && (p = ' on line ' + (this.yylineno + 1));
            var m = this.constructLexErrorInfo(
              'Lexical error' +
                p +
                ': You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).',
              !1
            );
            this._signaled_error_token =
              this.parseError(m.errStr, m, this.JisonLexerError) || this.ERROR;
          }
          return this;
        },
        less: function (p) {
          return this.unput(this.match.slice(p));
        },
        pastInput: function (p, m) {
          var g = this.matched.substring(
            0,
            this.matched.length - this.match.length
          );
          p < 0 ? (p = g.length) : p || (p = 20),
            m < 0 ? (m = g.length) : m || (m = 1),
            (g = g.substr(-p * 2 - 2));
          var _ = g.replace(
            /\r\n|\r/g,
            `
`
          ).split(`
`);
          return (
            (_ = _.slice(-m)),
            (g = _.join(`
`)),
            g.length > p && (g = '...' + g.substr(-p)),
            g
          );
        },
        upcomingInput: function (p, m) {
          var g = this.match;
          p < 0 ? (p = g.length + this._input.length) : p || (p = 20),
            m < 0 ? (m = p) : m || (m = 1),
            g.length < p * 2 + 2 && (g += this._input.substring(0, p * 2 + 2));
          var _ = g.replace(
            /\r\n|\r/g,
            `
`
          ).split(`
`);
          return (
            (_ = _.slice(0, m)),
            (g = _.join(`
`)),
            g.length > p && (g = g.substring(0, p) + '...'),
            g
          );
        },
        showPosition: function (p, m) {
          var g = this.pastInput(p).replace(/\s/g, ' '),
            _ = new Array(g.length + 1).join('-');
          return (
            g +
            this.upcomingInput(m).replace(/\s/g, ' ') +
            `
` +
            _ +
            '^'
          );
        },
        deriveLocationInfo: function (p, m, g, _) {
          var x = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0,
            range: [0, 0],
          };
          return (
            p &&
              ((x.first_line = p.first_line | 0),
              (x.last_line = p.last_line | 0),
              (x.first_column = p.first_column | 0),
              (x.last_column = p.last_column | 0),
              p.range &&
                ((x.range[0] = p.range[0] | 0), (x.range[1] = p.range[1] | 0))),
            (x.first_line <= 0 || x.last_line < x.first_line) &&
              (x.first_line <= 0 &&
                m &&
                ((x.first_line = m.last_line | 0),
                (x.first_column = m.last_column | 0),
                m.range && (x.range[0] = p.range[1] | 0)),
              (x.last_line <= 0 || x.last_line < x.first_line) &&
                g &&
                ((x.last_line = g.first_line | 0),
                (x.last_column = g.first_column | 0),
                g.range && (x.range[1] = p.range[0] | 0)),
              x.first_line <= 0 &&
                _ &&
                (x.last_line <= 0 || _.last_line <= x.last_line) &&
                ((x.first_line = _.first_line | 0),
                (x.first_column = _.first_column | 0),
                _.range && (x.range[0] = _.range[0] | 0)),
              x.last_line <= 0 &&
                _ &&
                (x.first_line <= 0 || _.first_line >= x.first_line) &&
                ((x.last_line = _.last_line | 0),
                (x.last_column = _.last_column | 0),
                _.range && (x.range[1] = _.range[1] | 0))),
            x.last_line <= 0 &&
              (x.first_line <= 0
                ? ((x.first_line = this.yylloc.first_line),
                  (x.last_line = this.yylloc.last_line),
                  (x.first_column = this.yylloc.first_column),
                  (x.last_column = this.yylloc.last_column),
                  (x.range[0] = this.yylloc.range[0]),
                  (x.range[1] = this.yylloc.range[1]))
                : ((x.last_line = this.yylloc.last_line),
                  (x.last_column = this.yylloc.last_column),
                  (x.range[1] = this.yylloc.range[1]))),
            x.first_line <= 0 &&
              ((x.first_line = x.last_line),
              (x.first_column = 0),
              (x.range[1] = x.range[0])),
            x.first_column < 0 && (x.first_column = 0),
            x.last_column < 0 &&
              (x.last_column = x.first_column > 0 ? x.first_column : 80),
            x
          );
        },
        prettyPrintRange: function (p, m, g) {
          p = this.deriveLocationInfo(p, m, g);
          const _ = 3,
            x = 1,
            b = 2;
          var w = this.matched + this._input,
            O = w.split(`
`),
            S = Math.max(1, m ? m.first_line : p.first_line - _),
            $ = Math.max(1, g ? g.last_line : p.last_line + x),
            A = (1 + Math.log10($ | 1)) | 0,
            P = new Array(A).join(' '),
            C = [],
            k = O.slice(S - 1, $ + 1).map(function (N, z) {
              var M = z + S,
                Y = (P + M).substr(-A),
                Z = Y + ': ' + N,
                ne = new Array(A + 1).join('^'),
                ve = 2 + 1,
                Se = 0;
              if (
                (M === p.first_line
                  ? ((ve += p.first_column),
                    (Se = Math.max(
                      2,
                      (M === p.last_line ? p.last_column : N.length) -
                        p.first_column +
                        1
                    )))
                  : M === p.last_line
                  ? (Se = Math.max(2, p.last_column + 1))
                  : M > p.first_line &&
                    M < p.last_line &&
                    (Se = Math.max(2, N.length + 1)),
                Se)
              ) {
                var le = new Array(ve).join('.'),
                  Ee = new Array(Se).join('^');
                (Z +=
                  `
` +
                  ne +
                  le +
                  Ee),
                  N.trim().length > 0 && C.push(z);
              }
              return (Z = Z.replace(/\t/g, ' ')), Z;
            });
          if (C.length > 2 * b) {
            var T = C[b - 1] + 1,
              D = C[C.length - b] - 1,
              j = new Array(A + 1).join(' ') + '  (...continued...)';
            (j +=
              `
` +
              new Array(A + 1).join('-') +
              '  (---------------)'),
              k.splice(T, D - T + 1, j);
          }
          return k.join(`
`);
        },
        describeYYLLOC: function (p, m) {
          var g = p.first_line,
            _ = p.last_line,
            x = p.first_column,
            b = p.last_column,
            w = _ - g,
            O = b - x,
            S;
          if (
            (w === 0
              ? ((S = 'line ' + g + ', '),
                O <= 1
                  ? (S += 'column ' + x)
                  : (S += 'columns ' + x + ' .. ' + b))
              : (S =
                  'lines ' +
                  g +
                  '(column ' +
                  x +
                  ') .. ' +
                  _ +
                  '(column ' +
                  b +
                  ')'),
            p.range && m)
          ) {
            var $ = p.range[0],
              A = p.range[1] - 1;
            A <= $
              ? (S += ' {String Offset: ' + $ + '}')
              : (S += ' {String Offset range: ' + $ + ' .. ' + A + '}');
          }
          return S;
        },
        test_match: function (p, m) {
          var g, _, x, b, w;
          if (
            (this.options.backtrack_lexer &&
              (x = {
                yylineno: this.yylineno,
                yylloc: {
                  first_line: this.yylloc.first_line,
                  last_line: this.yylloc.last_line,
                  first_column: this.yylloc.first_column,
                  last_column: this.yylloc.last_column,
                  range: this.yylloc.range.slice(0),
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done,
              }),
            (b = p[0]),
            (w = b.length),
            (_ = b.split(/(?:\r\n?|\n)/g)),
            _.length > 1
              ? ((this.yylineno += _.length - 1),
                (this.yylloc.last_line = this.yylineno + 1),
                (this.yylloc.last_column = _[_.length - 1].length))
              : (this.yylloc.last_column += w),
            (this.yytext += b),
            (this.match += b),
            (this.matched += b),
            (this.matches = p),
            (this.yyleng = this.yytext.length),
            (this.yylloc.range[1] += w),
            (this.offset += w),
            (this._more = !1),
            (this._backtrack = !1),
            (this._input = this._input.slice(w)),
            (g = this.performAction.call(
              this,
              this.yy,
              m,
              this.conditionStack[this.conditionStack.length - 1]
            )),
            this.done && this._input && (this.done = !1),
            g)
          )
            return g;
          if (this._backtrack) {
            for (var O in x) this[O] = x[O];
            return (this.__currentRuleSet__ = null), !1;
          } else if (this._signaled_error_token)
            return (
              (g = this._signaled_error_token),
              (this._signaled_error_token = !1),
              g
            );
          return !1;
        },
        next: function () {
          if (this.done) return this.clear(), this.EOF;
          this._input || (this.done = !0);
          var p, m, g, _;
          this._more || this.clear();
          var x = this.__currentRuleSet__;
          if (
            !x &&
            ((x = this.__currentRuleSet__ = this._currentRules()),
            !x || !x.rules)
          ) {
            var b = '';
            this.options.trackPosition &&
              (b = ' on line ' + (this.yylineno + 1));
            var w = this.constructLexErrorInfo(
              'Internal lexer engine error' +
                b +
                ': The lex grammar programmer pushed a non-existing condition name "' +
                this.topState() +
                '"; this is a fatal error and should be reported to the application programmer team!',
              !1
            );
            return (
              this.parseError(w.errStr, w, this.JisonLexerError) || this.ERROR
            );
          }
          for (
            var O = x.rules, S = x.__rule_regexes, $ = x.__rule_count, A = 1;
            A <= $;
            A++
          )
            if (
              ((g = this._input.match(S[A])),
              g && (!m || g[0].length > m[0].length))
            ) {
              if (((m = g), (_ = A), this.options.backtrack_lexer)) {
                if (((p = this.test_match(g, O[A])), p !== !1)) return p;
                if (this._backtrack) {
                  m = void 0;
                  continue;
                } else return !1;
              } else if (!this.options.flex) break;
            }
          if (m) return (p = this.test_match(m, O[_])), p !== !1 ? p : !1;
          if (this._input) {
            var b = '';
            this.options.trackPosition &&
              (b = ' on line ' + (this.yylineno + 1));
            var w = this.constructLexErrorInfo(
                'Lexical error' + b + ': Unrecognized text.',
                this.options.lexerErrorsAreRecoverable
              ),
              P = this._input,
              C = this.topState(),
              k = this.conditionStack.length;
            return (
              (p =
                this.parseError(w.errStr, w, this.JisonLexerError) ||
                this.ERROR),
              p === this.ERROR &&
                !this.matches &&
                P === this._input &&
                C === this.topState() &&
                k === this.conditionStack.length &&
                this.input(),
              p
            );
          } else return (this.done = !0), this.clear(), this.EOF;
        },
        lex: function () {
          var p;
          for (
            typeof this.pre_lex == 'function' &&
              (p = this.pre_lex.call(this, 0)),
              typeof this.options.pre_lex == 'function' &&
                (p = this.options.pre_lex.call(this, p) || p),
              this.yy &&
                typeof this.yy.pre_lex == 'function' &&
                (p = this.yy.pre_lex.call(this, p) || p);
            !p;

          )
            p = this.next();
          return (
            this.yy &&
              typeof this.yy.post_lex == 'function' &&
              (p = this.yy.post_lex.call(this, p) || p),
            typeof this.options.post_lex == 'function' &&
              (p = this.options.post_lex.call(this, p) || p),
            typeof this.post_lex == 'function' &&
              (p = this.post_lex.call(this, p) || p),
            p
          );
        },
        fastLex: function () {
          for (var p; !p; ) p = this.next();
          return p;
        },
        canIUse: function () {
          var p = {
            fastLex:
              !(
                typeof this.pre_lex == 'function' ||
                typeof this.options.pre_lex == 'function' ||
                (this.yy && typeof this.yy.pre_lex == 'function') ||
                (this.yy && typeof this.yy.post_lex == 'function') ||
                typeof this.options.post_lex == 'function' ||
                typeof this.post_lex == 'function'
              ) && typeof this.fastLex == 'function',
          };
          return p;
        },
        begin: function (p) {
          return this.pushState(p);
        },
        pushState: function (p) {
          return (
            this.conditionStack.push(p), (this.__currentRuleSet__ = null), this
          );
        },
        popState: function () {
          var p = this.conditionStack.length - 1;
          return p > 0
            ? ((this.__currentRuleSet__ = null), this.conditionStack.pop())
            : this.conditionStack[0];
        },
        topState: function (p) {
          return (
            (p = this.conditionStack.length - 1 - Math.abs(p || 0)),
            p >= 0 ? this.conditionStack[p] : 'INITIAL'
          );
        },
        _currentRules: function () {
          return this.conditionStack.length &&
            this.conditionStack[this.conditionStack.length - 1]
            ? this.conditions[
                this.conditionStack[this.conditionStack.length - 1]
              ]
            : this.conditions.INITIAL;
        },
        stateStackSize: function () {
          return this.conditionStack.length;
        },
        options: { trackPosition: !0 },
        JisonLexerError: d,
        performAction: function (p, m, g) {
          switch (m) {
            case 1:
              break;
            default:
              return this.simpleCaseActionClusters[m];
          }
        },
        simpleCaseActionClusters: {
          0: 13,
          2: 5,
          3: 6,
          4: 3,
          5: 4,
          6: 15,
          7: 15,
          8: 15,
          9: 15,
          10: 15,
          11: 15,
          12: 16,
          13: 16,
          14: 16,
          15: 16,
          16: 17,
          17: 17,
          18: 18,
          19: 18,
          20: 19,
          21: 19,
          22: 19,
          23: 20,
          24: 21,
          25: 22,
          26: 23,
          27: 25,
          28: 24,
          29: 26,
          30: 27,
          31: 28,
          32: 11,
          33: 9,
          34: 12,
          35: 10,
          36: 7,
          37: 8,
          38: 14,
          39: 1,
        },
        rules: [
          /^(?:(--[\d\-A-Za-z]*))/,
          /^(?:\s+)/,
          /^(?:\*)/,
          /^(?:\/)/,
          /^(?:\+)/,
          /^(?:-)/,
          /^(?:(\d+(\.\d*)?|\.\d+)px\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)cm\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)mm\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)in\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)pt\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)pc\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)deg\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)grad\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)rad\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)turn\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)s\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)ms\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)Hz\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)kHz\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)dpi\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)dpcm\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)dppx\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)em\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)ex\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)ch\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)rem\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)vw\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)vh\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)vmin\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)vmax\b)/,
          /^(?:(\d+(\.\d*)?|\.\d+)%)/,
          /^(?:(\d+(\.\d*)?|\.\d+)\b)/,
          /^(?:(calc))/,
          /^(?:(var))/,
          /^(?:([a-z]+))/,
          /^(?:\()/,
          /^(?:\))/,
          /^(?:,)/,
          /^(?:$)/,
        ],
        conditions: {
          INITIAL: {
            rules: [
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
              19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
              35, 36, 37, 38, 39,
            ],
            inclusive: !0,
          },
        },
      };
      return h;
    })();
    c.lexer = u;
    function f() {
      this.yy = {};
    }
    return (f.prototype = c), (c.Parser = f), new f();
  })();
  typeof CW < 'u' &&
    ((e.parser = t),
    (e.Parser = t.Parser),
    (e.parse = function () {
      return t.parse.apply(t, arguments);
    }));
})(xx);
var Ui = {},
  Fu = { exports: {} },
  Oc = {
    px: { px: 1, cm: 96 / 2.54, mm: 96 / 25.4, in: 96, pt: 96 / 72, pc: 16 },
    cm: {
      px: 2.54 / 96,
      cm: 1,
      mm: 0.1,
      in: 2.54,
      pt: 2.54 / 72,
      pc: 2.54 / 6,
    },
    mm: { px: 25.4 / 96, cm: 10, mm: 1, in: 25.4, pt: 25.4 / 72, pc: 25.4 / 6 },
    in: {
      px: 1 / 96,
      cm: 1 / 2.54,
      mm: 1 / 25.4,
      in: 1,
      pt: 1 / 72,
      pc: 1 / 6,
    },
    pt: { px: 0.75, cm: 72 / 2.54, mm: 72 / 25.4, in: 72, pt: 1, pc: 12 },
    pc: { px: 6 / 96, cm: 6 / 2.54, mm: 6 / 25.4, in: 6, pt: 6 / 72, pc: 1 },
    deg: { deg: 1, grad: 0.9, rad: 180 / Math.PI, turn: 360 },
    grad: { deg: 400 / 360, grad: 1, rad: 200 / Math.PI, turn: 400 },
    rad: { deg: Math.PI / 180, grad: Math.PI / 200, rad: 1, turn: Math.PI * 2 },
    turn: { deg: 1 / 360, grad: 1 / 400, rad: 0.5 / Math.PI, turn: 1 },
    s: { s: 1, ms: 1 / 1e3 },
    ms: { s: 1e3, ms: 1 },
    Hz: { Hz: 1, kHz: 1e3 },
    kHz: { Hz: 1 / 1e3, kHz: 1 },
    dpi: { dpi: 1, dpcm: 1 / 2.54, dppx: 1 / 96 },
    dpcm: { dpi: 2.54, dpcm: 1, dppx: 2.54 / 96 },
    dppx: { dpi: 96, dpcm: 96 / 2.54, dppx: 1 },
  },
  PW = function (e, t, r, n) {
    if (!Oc.hasOwnProperty(r)) throw new Error('Cannot convert to ' + r);
    if (!Oc[r].hasOwnProperty(t))
      throw new Error('Cannot convert from ' + t + ' to ' + r);
    var a = Oc[r][t] * e;
    return n !== !1
      ? ((n = Math.pow(10, parseInt(n) || 5)), Math.round(a * n) / n)
      : a;
  };
(function (e, t) {
  Object.defineProperty(t, '__esModule', { value: !0 });
  var r = PW,
    n = a(r);
  function a(s) {
    return s && s.__esModule ? s : { default: s };
  }
  function i(s, l, c) {
    switch (s.type) {
      case 'LengthValue':
      case 'AngleValue':
      case 'TimeValue':
      case 'FrequencyValue':
      case 'ResolutionValue':
        return o(s, l, c);
      default:
        return { left: s, right: l };
    }
  }
  function o(s, l, c) {
    return (
      l.type === s.type &&
        (l = {
          type: s.type,
          value: (0, n.default)(l.value, l.unit, s.unit, c),
          unit: s.unit,
        }),
      { left: s, right: l }
    );
  }
  (t.default = i), (e.exports = t.default);
})(Fu, Fu.exports);
Object.defineProperty(Ui, '__esModule', { value: !0 });
Ui.flip = zu;
var kW = Fu.exports,
  Sc = TW(kW);
function TW(e) {
  return e && e.__esModule ? e : { default: e };
}
function Mt(e, t) {
  return e.type === 'MathExpression'
    ? jW(e, t)
    : e.type === 'Calc'
    ? Mt(e.value, t)
    : e;
}
function hm(e, t) {
  return e.type === t.type && e.value === t.value;
}
function Wt(e) {
  switch (e) {
    case 'LengthValue':
    case 'AngleValue':
    case 'TimeValue':
    case 'FrequencyValue':
    case 'ResolutionValue':
    case 'EmValue':
    case 'ExValue':
    case 'ChValue':
    case 'RemValue':
    case 'VhValue':
    case 'VwValue':
    case 'VminValue':
    case 'VmaxValue':
    case 'PercentageValue':
    case 'Value':
      return !0;
  }
  return !1;
}
function MW(e, t) {
  var r = (0, Sc.default)(e.left, e.right, t),
    n = Mt(r.left, t),
    a = Mt(r.right, t);
  return (
    n.type === 'MathExpression' &&
      a.type === 'MathExpression' &&
      ((n.operator === '/' && a.operator === '*') ||
        (n.operator === '-' && a.operator === '+') ||
        (n.operator === '*' && a.operator === '/') ||
        (n.operator === '+' && a.operator === '-')) &&
      (hm(n.right, a.right)
        ? (r = (0, Sc.default)(n.left, a.left, t))
        : hm(n.right, a.left) && (r = (0, Sc.default)(n.left, a.right, t)),
      (n = Mt(r.left, t)),
      (a = Mt(r.right, t))),
    (e.left = n),
    (e.right = a),
    e
  );
}
function zu(e) {
  return e === '+' ? '-' : '+';
}
function Wu(e) {
  return (
    Wt(e.type)
      ? (e.value = -e.value)
      : e.type == 'MathExpression' &&
        ((e.left = Wu(e.left)), (e.right = Wu(e.right))),
    e
  );
}
function IW(e, t) {
  var r = e,
    n = r.left,
    a = r.right,
    i = r.operator;
  if (n.type === 'CssVariable' || a.type === 'CssVariable') return e;
  if (a.value === 0) return n;
  if (n.value === 0 && i === '+') return a;
  if (n.value === 0 && i === '-') return Wu(a);
  if (
    (n.type === a.type &&
      Wt(n.type) &&
      ((e = Object.assign({}, n)),
      i === '+'
        ? (e.value = n.value + a.value)
        : (e.value = n.value - a.value)),
    Wt(n.type) &&
      (a.operator === '+' || a.operator === '-') &&
      a.type === 'MathExpression')
  ) {
    if (n.type === a.left.type)
      return (
        (e = Object.assign({}, e)),
        (e.left = Mt(
          { type: 'MathExpression', operator: i, left: n, right: a.left },
          t
        )),
        (e.right = a.right),
        (e.operator = i === '-' ? zu(a.operator) : a.operator),
        Mt(e, t)
      );
    if (n.type === a.right.type)
      return (
        (e = Object.assign({}, e)),
        (e.left = Mt(
          {
            type: 'MathExpression',
            operator: i === '-' ? zu(a.operator) : a.operator,
            left: n,
            right: a.right,
          },
          t
        )),
        (e.right = a.left),
        Mt(e, t)
      );
  }
  if (
    n.type === 'MathExpression' &&
    (n.operator === '+' || n.operator === '-') &&
    Wt(a.type)
  ) {
    if (a.type === n.left.type)
      return (
        (e = Object.assign({}, n)),
        (e.left = Mt(
          { type: 'MathExpression', operator: i, left: n.left, right: a },
          t
        )),
        Mt(e, t)
      );
    if (a.type === n.right.type)
      return (
        (e = Object.assign({}, n)),
        n.operator === '-'
          ? ((e.right = Mt(
              {
                type: 'MathExpression',
                operator: i === '-' ? '+' : '-',
                left: a,
                right: n.right,
              },
              t
            )),
            (e.operator = i === '-' ? '-' : '+'))
          : (e.right = Mt(
              { type: 'MathExpression', operator: i, left: n.right, right: a },
              t
            )),
        e.right.value < 0 &&
          ((e.right.value *= -1),
          (e.operator = e.operator === '-' ? '+' : '-')),
        Mt(e, t)
      );
  }
  return e;
}
function RW(e, t) {
  if (!Wt(e.right.type)) return e;
  if (e.right.type !== 'Value')
    throw new Error('Cannot divide by "' + e.right.unit + '", number expected');
  if (e.right.value === 0) throw new Error('Cannot divide by zero');
  return e.left.type === 'MathExpression'
    ? Wt(e.left.left.type) && Wt(e.left.right.type)
      ? ((e.left.left.value /= e.right.value),
        (e.left.right.value /= e.right.value),
        Mt(e.left, t))
      : e
    : Wt(e.left.type)
    ? ((e.left.value /= e.right.value), e.left)
    : e;
}
function DW(e) {
  if (e.left.type === 'MathExpression' && e.right.type === 'Value') {
    if (Wt(e.left.left.type) && Wt(e.left.right.type))
      return (
        (e.left.left.value *= e.right.value),
        (e.left.right.value *= e.right.value),
        e.left
      );
  } else {
    if (Wt(e.left.type) && e.right.type === 'Value')
      return (e.left.value *= e.right.value), e.left;
    if (e.left.type === 'Value' && e.right.type === 'MathExpression') {
      if (Wt(e.right.left.type) && Wt(e.right.right.type))
        return (
          (e.right.left.value *= e.left.value),
          (e.right.right.value *= e.left.value),
          e.right
        );
    } else if (e.left.type === 'Value' && Wt(e.right.type))
      return (e.right.value *= e.left.value), e.right;
  }
  return e;
}
function jW(e, t) {
  switch (((e = MW(e, t)), e.operator)) {
    case '+':
    case '-':
      return IW(e, t);
    case '/':
      return RW(e, t);
    case '*':
      return DW(e);
  }
  return e;
}
Ui.default = Mt;
var Uu = { exports: {} };
(function (e, t) {
  Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.default = function (o, s, l) {
      var c = i(s, l);
      return s.type === 'MathExpression' && (c = o + '(' + c + ')'), c;
    });
  var r = Ui,
    n = { '*': 0, '/': 0, '+': 1, '-': 1 };
  function a(o, s) {
    if (s !== !1) {
      var l = Math.pow(10, s);
      return Math.round(o * l) / l;
    }
    return o;
  }
  function i(o, s) {
    switch (o.type) {
      case 'MathExpression': {
        var l = o.left,
          c = o.right,
          u = o.operator,
          f = '';
        return (
          l.type === 'MathExpression' && n[u] < n[l.operator]
            ? (f += '(' + i(l, s) + ')')
            : (f += i(l, s)),
          (f += ' ' + o.operator + ' '),
          c.type === 'MathExpression' && n[u] < n[c.operator]
            ? (f += '(' + i(c, s) + ')')
            : (c.type === 'MathExpression' &&
                u === '-' &&
                ['+', '-'].includes(c.operator) &&
                (c.operator = (0, r.flip)(c.operator)),
              (f += i(c, s))),
          f
        );
      }
      case 'Value':
        return a(o.value, s);
      case 'CssVariable':
        return o.fallback
          ? 'var(' + o.value + ', ' + i(o.fallback, s) + ')'
          : 'var(' + o.value + ')';
      case 'Calc':
        return o.prefix
          ? '-' + o.prefix + '-calc(' + i(o.value, s) + ')'
          : 'calc(' + i(o.value, s) + ')';
      default:
        return a(o.value, s) + o.unit;
    }
  }
  e.exports = t.default;
})(Uu, Uu.exports);
(function (e, t) {
  Object.defineProperty(t, '__esModule', { value: !0 });
  var r = AW,
    n = c(r),
    a = xx,
    i = Ui,
    o = c(i),
    s = Uu.exports,
    l = c(s);
  function c(f) {
    return f && f.__esModule ? f : { default: f };
  }
  var u = /((?:\-[a-z]+\-)?calc)/;
  (t.default = function (f) {
    var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 5;
    return (0, n.default)(f)
      .walk(function (h) {
        if (!(h.type !== 'function' || !u.test(h.value))) {
          var v = n.default.stringify(h.nodes);
          if (!(v.indexOf('constant') >= 0 || v.indexOf('env') >= 0)) {
            var p = a.parser.parse(v),
              m = (0, o.default)(p, d);
            (h.type = 'word'), (h.value = (0, l.default)(h.value, m, d));
          }
        }
      }, !0)
      .toString();
  }),
    (e.exports = t.default);
})(Bu, Bu.exports);
const Ec = kw(Bu.exports);
function vm(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function mm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? vm(Object(r), !0).forEach(function (n) {
          NW(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : vm(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function NW(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function gm(e) {
  return zW(e) || FW(e) || BW(e) || LW();
}
function LW() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function BW(e, t) {
  if (!!e) {
    if (typeof e == 'string') return Hu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === 'Object' && e.constructor && (r = e.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Hu(e, t);
  }
}
function FW(e) {
  if (typeof Symbol < 'u' && Symbol.iterator in Object(e)) return Array.from(e);
}
function zW(e) {
  if (Array.isArray(e)) return Hu(e);
}
function Hu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var qn = { widthCache: {}, cacheCount: 0 },
  WW = 2e3,
  UW = {
    position: 'absolute',
    top: '-20000px',
    left: 0,
    padding: 0,
    margin: 0,
    border: 'none',
    whiteSpace: 'pre',
  },
  HW = [
    'minWidth',
    'maxWidth',
    'width',
    'minHeight',
    'maxHeight',
    'height',
    'top',
    'left',
    'fontSize',
    'lineHeight',
    'padding',
    'margin',
    'paddingLeft',
    'paddingRight',
    'paddingTop',
    'paddingBottom',
    'marginLeft',
    'marginRight',
    'marginTop',
    'marginBottom',
  ],
  ym = 'recharts_measurement_span';
function VW(e, t) {
  return HW.indexOf(e) >= 0 && t === +t ? ''.concat(t, 'px') : t;
}
function GW(e) {
  var t = e.split(''),
    r = t.reduce(function (n, a) {
      return a === a.toUpperCase()
        ? [].concat(gm(n), ['-', a.toLowerCase()])
        : [].concat(gm(n), [a]);
    }, []);
  return r.join('');
}
var qW = function (t) {
    return Object.keys(t).reduce(function (r, n) {
      return ''.concat(r).concat(GW(n), ':').concat(VW(n, t[n]), ';');
    }, '');
  },
  Sn = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (t == null || ln.isSsr) return { width: 0, height: 0 };
    var n = ''.concat(t),
      a = qW(r),
      i = ''.concat(n, '-').concat(a);
    if (qn.widthCache[i]) return qn.widthCache[i];
    try {
      var o = document.getElementById(ym);
      o ||
        ((o = document.createElement('span')),
        o.setAttribute('id', ym),
        o.setAttribute('aria-hidden', 'true'),
        document.body.appendChild(o));
      var s = mm(mm({}, UW), r);
      Object.keys(s).map(function (u) {
        return (o.style[u] = s[u]), u;
      }),
        (o.textContent = n);
      var l = o.getBoundingClientRect(),
        c = { width: l.width, height: l.height };
      return (
        (qn.widthCache[i] = c),
        ++qn.cacheCount > WW && ((qn.cacheCount = 0), (qn.widthCache = {})),
        c
      );
    } catch {
      return { width: 0, height: 0 };
    }
  },
  YW = function (t) {
    var r = t.ownerDocument.documentElement,
      n = { top: 0, left: 0 };
    return (
      typeof t.getBoundingClientRect < 'u' && (n = t.getBoundingClientRect()),
      {
        top: n.top + window.pageYOffset - r.clientTop,
        left: n.left + window.pageXOffset - r.clientLeft,
      }
    );
  },
  KW = function (t, r) {
    return {
      chartX: Math.round(t.pageX - r.left),
      chartY: Math.round(t.pageY - r.top),
    };
  };
function $o(e) {
  return (
    typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
      ? ($o = function (r) {
          return typeof r;
        })
      : ($o = function (r) {
          return r &&
            typeof Symbol == 'function' &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? 'symbol'
            : typeof r;
        }),
    $o(e)
  );
}
function Vu() {
  return (
    (Vu =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Vu.apply(this, arguments)
  );
}
function XW(e, t) {
  if (e == null) return {};
  var r = JW(e, t),
    n,
    a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      (n = i[a]),
        !(t.indexOf(n) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function JW(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    a,
    i;
  for (i = 0; i < n.length; i++)
    (a = n[i]), !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function ZW(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function bm(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function QW(e, t, r) {
  return t && bm(e.prototype, t), r && bm(e, r), e;
}
function e8(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && Gu(e, t);
}
function Gu(e, t) {
  return (
    (Gu =
      Object.setPrototypeOf ||
      function (n, a) {
        return (n.__proto__ = a), n;
      }),
    Gu(e, t)
  );
}
function t8(e) {
  var t = a8();
  return function () {
    var n = ps(e),
      a;
    if (t) {
      var i = ps(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else a = n.apply(this, arguments);
    return r8(this, a);
  };
}
function r8(e, t) {
  return t && ($o(t) === 'object' || typeof t == 'function') ? t : n8(e);
}
function n8(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function a8() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function ps(e) {
  return (
    (ps = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    ps(e)
  );
}
function xm(e, t) {
  return l8(e) || s8(e, t) || o8(e, t) || i8();
}
function i8() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function o8(e, t) {
  if (!!e) {
    if (typeof e == 'string') return wm(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === 'Object' && e.constructor && (r = e.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return wm(e, t);
  }
}
function wm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function s8(e, t) {
  if (!(typeof Symbol > 'u' || !(Symbol.iterator in Object(e)))) {
    var r = [],
      n = !0,
      a = !1,
      i = void 0;
    try {
      for (
        var o = e[Symbol.iterator](), s;
        !(n = (s = o.next()).done) && (r.push(s.value), !(t && r.length === t));
        n = !0
      );
    } catch (l) {
      (a = !0), (i = l);
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (a) throw i;
      }
    }
    return r;
  }
}
function l8(e) {
  if (Array.isArray(e)) return e;
}
function _m(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Om(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? _m(Object(r), !0).forEach(function (n) {
          c8(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : _m(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function c8(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var wx = /[ \f\n\r\t\v\u2028\u2029]+/,
  _x = function (t) {
    try {
      var r = [];
      ge(t.children) ||
        (t.breakAll
          ? (r = t.children.toString().split(''))
          : (r = t.children.toString().split(wx)));
      var n = r.map(function (i) {
          return { word: i, width: Sn(i, t.style).width };
        }),
        a = t.breakAll ? 0 : Sn('\xA0', t.style).width;
      return { wordsWithComputedWidth: n, spaceWidth: a };
    } catch {
      return null;
    }
  },
  u8 = function (t, r, n, a, i) {
    var o = K(t.maxLines),
      s = t.children,
      l = function () {
        var C =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        return C.reduce(function (k, T) {
          var D = T.word,
            j = T.width,
            R = k[k.length - 1];
          if (R && (a == null || i || R.width + j + n < a))
            R.words.push(D), (R.width += j + n);
          else {
            var N = { words: [D], width: j };
            k.push(N);
          }
          return k;
        }, []);
      },
      c = l(r),
      u = function (C) {
        return C.reduce(function (k, T) {
          return k.width > T.width ? k : T;
        });
      };
    if (!o) return c;
    for (
      var f = '\u2026',
        d = function (C) {
          var k = s.slice(0, C),
            T = _x(
              Om(Om({}, t), {}, { children: k + f })
            ).wordsWithComputedWidth,
            D = l(T),
            j = D.length > t.maxLines || u(D).width > a;
          return [j, D];
        },
        h = 0,
        v = s.length - 1,
        p = 0,
        m;
      h <= v && p <= s.length - 1;

    ) {
      var g = Math.floor((h + v) / 2),
        _ = g - 1,
        x = d(_),
        b = xm(x, 2),
        w = b[0],
        O = b[1],
        S = d(g),
        $ = xm(S, 1),
        A = $[0];
      if ((!w && !A && (h = g + 1), w && A && (v = g - 1), !w && A)) {
        m = O;
        break;
      }
      p++;
    }
    return m || c;
  },
  Sm = function (t) {
    var r = ge(t) ? [] : t.toString().split(wx);
    return [{ words: r }];
  },
  f8 = function (t, r) {
    if ((t.width || t.scaleToFit) && !ln.isSsr) {
      var n, a;
      if (r) {
        var i = _x(t);
        if (i) {
          var o = i.wordsWithComputedWidth,
            s = i.spaceWidth;
          (n = o), (a = s);
        } else return Sm(t.children);
        return u8(t, n, a, t.width, t.scaleToFit);
      }
    }
    return Sm(t.children);
  },
  Ei = (function (e) {
    e8(r, e);
    var t = t8(r);
    function r() {
      var n;
      ZW(this, r);
      for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
        i[o] = arguments[o];
      return (n = t.call.apply(t, [this].concat(i))), (n.state = {}), n;
    }
    return (
      QW(
        r,
        [
          {
            key: 'render',
            value: function () {
              var a = this.props,
                i = a.dx,
                o = a.dy,
                s = a.textAnchor,
                l = a.verticalAnchor,
                c = a.scaleToFit,
                u = a.angle,
                f = a.lineHeight,
                d = a.capHeight,
                h = a.className,
                v = a.breakAll,
                p = XW(a, [
                  'dx',
                  'dy',
                  'textAnchor',
                  'verticalAnchor',
                  'scaleToFit',
                  'angle',
                  'lineHeight',
                  'capHeight',
                  'className',
                  'breakAll',
                ]),
                m = this.state.wordsByLines;
              if (!ht(p.x) || !ht(p.y)) return null;
              var g = p.x + (K(i) ? i : 0),
                _ = p.y + (K(o) ? o : 0),
                x;
              switch (l) {
                case 'start':
                  x = Ec('calc('.concat(d, ')'));
                  break;
                case 'middle':
                  x = Ec(
                    'calc('
                      .concat((m.length - 1) / 2, ' * -')
                      .concat(f, ' + (')
                      .concat(d, ' / 2))')
                  );
                  break;
                default:
                  x = Ec('calc('.concat(m.length - 1, ' * -').concat(f, ')'));
                  break;
              }
              var b = [];
              if (c) {
                var w = m[0].width,
                  O = this.props.width;
                b.push('scale('.concat((K(O) ? O / w : 1) / w, ')'));
              }
              return (
                u &&
                  b.push(
                    'rotate('.concat(u, ', ').concat(g, ', ').concat(_, ')')
                  ),
                b.length && (p.transform = b.join(' ')),
                y.createElement(
                  'text',
                  Vu({}, ze(p, !0), {
                    x: g,
                    y: _,
                    className: Ze('recharts-text', h),
                    textAnchor: s,
                  }),
                  m.map(function (S, $) {
                    return y.createElement(
                      'tspan',
                      { x: g, dy: $ === 0 ? x : f, key: $ },
                      S.words.join(v ? '' : ' ')
                    );
                  })
                )
              );
            },
          },
        ],
        [
          {
            key: 'getDerivedStateFromProps',
            value: function (a, i) {
              if (
                a.width !== i.prevWidth ||
                a.scaleToFit !== i.prevScaleToFit ||
                a.children !== i.prevChildren ||
                a.style !== i.prevStyle ||
                a.breakAll !== i.prevBreakAll
              ) {
                var o =
                  a.children !== i.prevChildren ||
                  a.style !== i.prevStyle ||
                  a.breakAll !== i.prevBreakAll;
                return {
                  prevWidth: a.width,
                  prevScaleToFit: a.scaleToFit,
                  prevChildren: a.children,
                  prevStyle: a.style,
                  wordsByLines: f8(a, o),
                };
              }
              return null;
            },
          },
        ]
      ),
      r
    );
  })(E.exports.Component);
Ei.defaultProps = {
  x: 0,
  y: 0,
  lineHeight: '1em',
  capHeight: '0.71em',
  scaleToFit: !1,
  textAnchor: 'start',
  verticalAnchor: 'end',
};
function sa(e, t) {
  for (var r in e)
    if (
      {}.hasOwnProperty.call(e, r) &&
      (!{}.hasOwnProperty.call(t, r) || e[r] !== t[r])
    )
      return !1;
  for (var n in t)
    if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e, n))
      return !1;
  return !0;
}
function Em(e, t) {
  if (e == null) return {};
  var r = d8(e, t),
    n,
    a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      (n = i[a]),
        !(t.indexOf(n) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function d8(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    a,
    i;
  for (i = 0; i < n.length; i++)
    (a = n[i]), !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var $m = {
    click: 'onClick',
    mousedown: 'onMouseDown',
    mouseup: 'onMouseUp',
    mouseover: 'onMouseOver',
    mousemove: 'onMouseMove',
    mouseout: 'onMouseOut',
    mouseenter: 'onMouseEnter',
    mouseleave: 'onMouseLeave',
    touchcancel: 'onTouchCancel',
    touchend: 'onTouchEnd',
    touchmove: 'onTouchMove',
    touchstart: 'onTouchStart',
  },
  cn = function (t) {
    return typeof t == 'string'
      ? t
      : t
      ? t.displayName || t.name || 'Component'
      : '';
  },
  Am = null,
  $c = null,
  Vd = function e(t) {
    if (t === Am && Me($c)) return $c;
    var r = [];
    return (
      E.exports.Children.forEach(t, function (n) {
        ge(n) ||
          (Tw.exports.isFragment(n)
            ? (r = r.concat(e(n.props.children)))
            : r.push(n));
      }),
      ($c = r),
      (Am = t),
      r
    );
  },
  br = function (t, r) {
    var n = [],
      a = [];
    return (
      Me(r)
        ? (a = r.map(function (i) {
            return cn(i);
          }))
        : (a = [cn(r)]),
      Vd(t).forEach(function (i) {
        var o = Qt(i, 'type.displayName') || Qt(i, 'type.name');
        a.indexOf(o) !== -1 && n.push(i);
      }),
      n
    );
  },
  Wr = function (t, r) {
    var n = br(t, r);
    return n && n[0];
  },
  Cm = function (t) {
    if (!t || !t.props) return !1;
    var r = t.props,
      n = r.width,
      a = r.height;
    return !(!K(n) || n <= 0 || !K(a) || a <= 0);
  },
  p8 = [
    'a',
    'altGlyph',
    'altGlyphDef',
    'altGlyphItem',
    'animate',
    'animateColor',
    'animateMotion',
    'animateTransform',
    'circle',
    'clipPath',
    'color-profile',
    'cursor',
    'defs',
    'desc',
    'ellipse',
    'feBlend',
    'feColormatrix',
    'feComponentTransfer',
    'feComposite',
    'feConvolveMatrix',
    'feDiffuseLighting',
    'feDisplacementMap',
    'feDistantLight',
    'feFlood',
    'feFuncA',
    'feFuncB',
    'feFuncG',
    'feFuncR',
    'feGaussianBlur',
    'feImage',
    'feMerge',
    'feMergeNode',
    'feMorphology',
    'feOffset',
    'fePointLight',
    'feSpecularLighting',
    'feSpotLight',
    'feTile',
    'feTurbulence',
    'filter',
    'font',
    'font-face',
    'font-face-format',
    'font-face-name',
    'font-face-url',
    'foreignObject',
    'g',
    'glyph',
    'glyphRef',
    'hkern',
    'image',
    'line',
    'lineGradient',
    'marker',
    'mask',
    'metadata',
    'missing-glyph',
    'mpath',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'script',
    'set',
    'stop',
    'style',
    'svg',
    'switch',
    'symbol',
    'text',
    'textPath',
    'title',
    'tref',
    'tspan',
    'use',
    'view',
    'vkern',
  ],
  h8 = function (t) {
    return t && t.type && Wi(t.type) && p8.indexOf(t.type) >= 0;
  },
  Ox = function e(t, r) {
    if (t === r) return !0;
    var n = E.exports.Children.count(t);
    if (n !== E.exports.Children.count(r)) return !1;
    if (n === 0) return !0;
    if (n === 1) return Pm(Me(t) ? t[0] : t, Me(r) ? r[0] : r);
    for (var a = 0; a < n; a++) {
      var i = t[a],
        o = r[a];
      if (Me(i) || Me(o)) {
        if (!e(i, o)) return !1;
      } else if (!Pm(i, o)) return !1;
    }
    return !0;
  },
  Pm = function (t, r) {
    if (ge(t) && ge(r)) return !0;
    if (!ge(t) && !ge(r)) {
      var n = t.props || {},
        a = n.children,
        i = Em(n, ['children']),
        o = r.props || {},
        s = o.children,
        l = Em(o, ['children']);
      return a && s ? sa(i, l) && Ox(a, s) : !a && !s ? sa(i, l) : !1;
    }
    return !1;
  },
  km = function (t, r) {
    var n = [],
      a = {};
    return (
      Vd(t).forEach(function (i, o) {
        if (h8(i)) n.push(i);
        else if (i) {
          var s = cn(i.type),
            l = r[s] || {},
            c = l.handler,
            u = l.once;
          if (c && (!u || !a[s])) {
            var f = c(i, s, o);
            n.push(f), (a[s] = !0);
          }
        }
      }),
      n
    );
  },
  v8 = function (t) {
    var r = t && t.type;
    return r && $m[r] ? $m[r] : null;
  },
  m8 = function (t, r) {
    return Vd(r).indexOf(t);
  },
  g8 = Td;
function y8(e, t) {
  return g8(e, t);
}
var Sx = y8,
  b8 = Ia;
function x8(e, t, r) {
  for (var n = -1, a = e.length; ++n < a; ) {
    var i = e[n],
      o = t(i);
    if (o != null && (s === void 0 ? o === o && !b8(o) : r(o, s)))
      var s = o,
        l = i;
  }
  return l;
}
var Ex = x8;
function w8(e, t) {
  return e > t;
}
var _8 = w8,
  O8 = Ex,
  S8 = _8,
  E8 = Ra;
function $8(e) {
  return e && e.length ? O8(e, E8, S8) : void 0;
}
var Al = $8;
function A8(e, t) {
  return e < t;
}
var C8 = A8,
  P8 = Ex,
  k8 = C8,
  T8 = Ra;
function M8(e) {
  return e && e.length ? P8(e, T8, k8) : void 0;
}
var Cl = M8,
  I8 = Rd,
  R8 = gn,
  D8 = sx,
  j8 = Me;
function N8(e, t) {
  var r = j8(e) ? I8 : D8;
  return r(e, R8(t));
}
var L8 = N8,
  B8 = ix,
  F8 = L8;
function z8(e, t) {
  return B8(F8(e, t), 1);
}
var W8 = z8,
  Da = 1e9,
  U8 = {
    precision: 20,
    rounding: 4,
    toExpNeg: -7,
    toExpPos: 21,
    LN10: '2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286',
  },
  qd,
  tt = !0,
  dr = '[DecimalError] ',
  Tn = dr + 'Invalid argument: ',
  Gd = dr + 'Exponent out of range: ',
  ja = Math.floor,
  On = Math.pow,
  H8 = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
  Jt,
  wt = 1e7,
  Je = 7,
  $x = 9007199254740991,
  hs = ja($x / Je),
  te = {};
te.absoluteValue = te.abs = function () {
  var e = new this.constructor(this);
  return e.s && (e.s = 1), e;
};
te.comparedTo = te.cmp = function (e) {
  var t,
    r,
    n,
    a,
    i = this;
  if (((e = new i.constructor(e)), i.s !== e.s)) return i.s || -e.s;
  if (i.e !== e.e) return (i.e > e.e) ^ (i.s < 0) ? 1 : -1;
  for (n = i.d.length, a = e.d.length, t = 0, r = n < a ? n : a; t < r; ++t)
    if (i.d[t] !== e.d[t]) return (i.d[t] > e.d[t]) ^ (i.s < 0) ? 1 : -1;
  return n === a ? 0 : (n > a) ^ (i.s < 0) ? 1 : -1;
};
te.decimalPlaces = te.dp = function () {
  var e = this,
    t = e.d.length - 1,
    r = (t - e.e) * Je;
  if (((t = e.d[t]), t)) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
te.dividedBy = te.div = function (e) {
  return Vr(this, new this.constructor(e));
};
te.dividedToIntegerBy = te.idiv = function (e) {
  var t = this,
    r = t.constructor;
  return Ge(Vr(t, new r(e), 0, 1), r.precision);
};
te.equals = te.eq = function (e) {
  return !this.cmp(e);
};
te.exponent = function () {
  return ut(this);
};
te.greaterThan = te.gt = function (e) {
  return this.cmp(e) > 0;
};
te.greaterThanOrEqualTo = te.gte = function (e) {
  return this.cmp(e) >= 0;
};
te.isInteger = te.isint = function () {
  return this.e > this.d.length - 2;
};
te.isNegative = te.isneg = function () {
  return this.s < 0;
};
te.isPositive = te.ispos = function () {
  return this.s > 0;
};
te.isZero = function () {
  return this.s === 0;
};
te.lessThan = te.lt = function (e) {
  return this.cmp(e) < 0;
};
te.lessThanOrEqualTo = te.lte = function (e) {
  return this.cmp(e) < 1;
};
te.logarithm = te.log = function (e) {
  var t,
    r = this,
    n = r.constructor,
    a = n.precision,
    i = a + 5;
  if (e === void 0) e = new n(10);
  else if (((e = new n(e)), e.s < 1 || e.eq(Jt))) throw Error(dr + 'NaN');
  if (r.s < 1) throw Error(dr + (r.s ? 'NaN' : '-Infinity'));
  return r.eq(Jt)
    ? new n(0)
    : ((tt = !1), (t = Vr($i(r, i), $i(e, i), i)), (tt = !0), Ge(t, a));
};
te.minus = te.sub = function (e) {
  var t = this;
  return (
    (e = new t.constructor(e)), t.s == e.s ? Px(t, e) : Ax(t, ((e.s = -e.s), e))
  );
};
te.modulo = te.mod = function (e) {
  var t,
    r = this,
    n = r.constructor,
    a = n.precision;
  if (((e = new n(e)), !e.s)) throw Error(dr + 'NaN');
  return r.s
    ? ((tt = !1), (t = Vr(r, e, 0, 1).times(e)), (tt = !0), r.minus(t))
    : Ge(new n(r), a);
};
te.naturalExponential = te.exp = function () {
  return Cx(this);
};
te.naturalLogarithm = te.ln = function () {
  return $i(this);
};
te.negated = te.neg = function () {
  var e = new this.constructor(this);
  return (e.s = -e.s || 0), e;
};
te.plus = te.add = function (e) {
  var t = this;
  return (
    (e = new t.constructor(e)), t.s == e.s ? Ax(t, e) : Px(t, ((e.s = -e.s), e))
  );
};
te.precision = te.sd = function (e) {
  var t,
    r,
    n,
    a = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Tn + e);
  if (
    ((t = ut(a) + 1), (n = a.d.length - 1), (r = n * Je + 1), (n = a.d[n]), n)
  ) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = a.d[0]; n >= 10; n /= 10) r++;
  }
  return e && t > r ? t : r;
};
te.squareRoot = te.sqrt = function () {
  var e,
    t,
    r,
    n,
    a,
    i,
    o,
    s = this,
    l = s.constructor;
  if (s.s < 1) {
    if (!s.s) return new l(0);
    throw Error(dr + 'NaN');
  }
  for (
    e = ut(s),
      tt = !1,
      a = Math.sqrt(+s),
      a == 0 || a == 1 / 0
        ? ((t = $r(s.d)),
          (t.length + e) % 2 == 0 && (t += '0'),
          (a = Math.sqrt(t)),
          (e = ja((e + 1) / 2) - (e < 0 || e % 2)),
          a == 1 / 0
            ? (t = '5e' + e)
            : ((t = a.toExponential()),
              (t = t.slice(0, t.indexOf('e') + 1) + e)),
          (n = new l(t)))
        : (n = new l(a.toString())),
      r = l.precision,
      a = o = r + 3;
    ;

  )
    if (
      ((i = n),
      (n = i.plus(Vr(s, i, o + 2)).times(0.5)),
      $r(i.d).slice(0, o) === (t = $r(n.d)).slice(0, o))
    ) {
      if (((t = t.slice(o - 3, o + 1)), a == o && t == '4999')) {
        if ((Ge(i, r + 1, 0), i.times(i).eq(s))) {
          n = i;
          break;
        }
      } else if (t != '9999') break;
      o += 4;
    }
  return (tt = !0), Ge(n, r);
};
te.times = te.mul = function (e) {
  var t,
    r,
    n,
    a,
    i,
    o,
    s,
    l,
    c,
    u = this,
    f = u.constructor,
    d = u.d,
    h = (e = new f(e)).d;
  if (!u.s || !e.s) return new f(0);
  for (
    e.s *= u.s,
      r = u.e + e.e,
      l = d.length,
      c = h.length,
      l < c && ((i = d), (d = h), (h = i), (o = l), (l = c), (c = o)),
      i = [],
      o = l + c,
      n = o;
    n--;

  )
    i.push(0);
  for (n = c; --n >= 0; ) {
    for (t = 0, a = l + n; a > n; )
      (s = i[a] + h[n] * d[a - n - 1] + t),
        (i[a--] = s % wt | 0),
        (t = (s / wt) | 0);
    i[a] = (i[a] + t) % wt | 0;
  }
  for (; !i[--o]; ) i.pop();
  return t ? ++r : i.shift(), (e.d = i), (e.e = r), tt ? Ge(e, f.precision) : e;
};
te.toDecimalPlaces = te.todp = function (e, t) {
  var r = this,
    n = r.constructor;
  return (
    (r = new n(r)),
    e === void 0
      ? r
      : (Rr(e, 0, Da),
        t === void 0 ? (t = n.rounding) : Rr(t, 0, 8),
        Ge(r, e + ut(r) + 1, t))
  );
};
te.toExponential = function (e, t) {
  var r,
    n = this,
    a = n.constructor;
  return (
    e === void 0
      ? (r = Rn(n, !0))
      : (Rr(e, 0, Da),
        t === void 0 ? (t = a.rounding) : Rr(t, 0, 8),
        (n = Ge(new a(n), e + 1, t)),
        (r = Rn(n, !0, e + 1))),
    r
  );
};
te.toFixed = function (e, t) {
  var r,
    n,
    a = this,
    i = a.constructor;
  return e === void 0
    ? Rn(a)
    : (Rr(e, 0, Da),
      t === void 0 ? (t = i.rounding) : Rr(t, 0, 8),
      (n = Ge(new i(a), e + ut(a) + 1, t)),
      (r = Rn(n.abs(), !1, e + ut(n) + 1)),
      a.isneg() && !a.isZero() ? '-' + r : r);
};
te.toInteger = te.toint = function () {
  var e = this,
    t = e.constructor;
  return Ge(new t(e), ut(e) + 1, t.rounding);
};
te.toNumber = function () {
  return +this;
};
te.toPower = te.pow = function (e) {
  var t,
    r,
    n,
    a,
    i,
    o,
    s = this,
    l = s.constructor,
    c = 12,
    u = +(e = new l(e));
  if (!e.s) return new l(Jt);
  if (((s = new l(s)), !s.s)) {
    if (e.s < 1) throw Error(dr + 'Infinity');
    return s;
  }
  if (s.eq(Jt)) return s;
  if (((n = l.precision), e.eq(Jt))) return Ge(s, n);
  if (((t = e.e), (r = e.d.length - 1), (o = t >= r), (i = s.s), o)) {
    if ((r = u < 0 ? -u : u) <= $x) {
      for (
        a = new l(Jt), t = Math.ceil(n / Je + 4), tt = !1;
        r % 2 && ((a = a.times(s)), Mm(a.d, t)), (r = ja(r / 2)), r !== 0;

      )
        (s = s.times(s)), Mm(s.d, t);
      return (tt = !0), e.s < 0 ? new l(Jt).div(a) : Ge(a, n);
    }
  } else if (i < 0) throw Error(dr + 'NaN');
  return (
    (i = i < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1),
    (s.s = 1),
    (tt = !1),
    (a = e.times($i(s, n + c))),
    (tt = !0),
    (a = Cx(a)),
    (a.s = i),
    a
  );
};
te.toPrecision = function (e, t) {
  var r,
    n,
    a = this,
    i = a.constructor;
  return (
    e === void 0
      ? ((r = ut(a)), (n = Rn(a, r <= i.toExpNeg || r >= i.toExpPos)))
      : (Rr(e, 1, Da),
        t === void 0 ? (t = i.rounding) : Rr(t, 0, 8),
        (a = Ge(new i(a), e, t)),
        (r = ut(a)),
        (n = Rn(a, e <= r || r <= i.toExpNeg, e))),
    n
  );
};
te.toSignificantDigits = te.tosd = function (e, t) {
  var r = this,
    n = r.constructor;
  return (
    e === void 0
      ? ((e = n.precision), (t = n.rounding))
      : (Rr(e, 1, Da), t === void 0 ? (t = n.rounding) : Rr(t, 0, 8)),
    Ge(new n(r), e, t)
  );
};
te.toString =
  te.valueOf =
  te.val =
  te.toJSON =
  te[Symbol.for('nodejs.util.inspect.custom')] =
    function () {
      var e = this,
        t = ut(e),
        r = e.constructor;
      return Rn(e, t <= r.toExpNeg || t >= r.toExpPos);
    };
function Ax(e, t) {
  var r,
    n,
    a,
    i,
    o,
    s,
    l,
    c,
    u = e.constructor,
    f = u.precision;
  if (!e.s || !t.s) return t.s || (t = new u(e)), tt ? Ge(t, f) : t;
  if (
    ((l = e.d),
    (c = t.d),
    (o = e.e),
    (a = t.e),
    (l = l.slice()),
    (i = o - a),
    i)
  ) {
    for (
      i < 0
        ? ((n = l), (i = -i), (s = c.length))
        : ((n = c), (a = o), (s = l.length)),
        o = Math.ceil(f / Je),
        s = o > s ? o + 1 : s + 1,
        i > s && ((i = s), (n.length = 1)),
        n.reverse();
      i--;

    )
      n.push(0);
    n.reverse();
  }
  for (
    s = l.length,
      i = c.length,
      s - i < 0 && ((i = s), (n = c), (c = l), (l = n)),
      r = 0;
    i;

  )
    (r = ((l[--i] = l[i] + c[i] + r) / wt) | 0), (l[i] %= wt);
  for (r && (l.unshift(r), ++a), s = l.length; l[--s] == 0; ) l.pop();
  return (t.d = l), (t.e = a), tt ? Ge(t, f) : t;
}
function Rr(e, t, r) {
  if (e !== ~~e || e < t || e > r) throw Error(Tn + e);
}
function $r(e) {
  var t,
    r,
    n,
    a = e.length - 1,
    i = '',
    o = e[0];
  if (a > 0) {
    for (i += o, t = 1; t < a; t++)
      (n = e[t] + ''), (r = Je - n.length), r && (i += nn(r)), (i += n);
    (o = e[t]), (n = o + ''), (r = Je - n.length), r && (i += nn(r));
  } else if (o === 0) return '0';
  for (; o % 10 === 0; ) o /= 10;
  return i + o;
}
var Vr = (function () {
  function e(n, a) {
    var i,
      o = 0,
      s = n.length;
    for (n = n.slice(); s--; )
      (i = n[s] * a + o), (n[s] = i % wt | 0), (o = (i / wt) | 0);
    return o && n.unshift(o), n;
  }
  function t(n, a, i, o) {
    var s, l;
    if (i != o) l = i > o ? 1 : -1;
    else
      for (s = l = 0; s < i; s++)
        if (n[s] != a[s]) {
          l = n[s] > a[s] ? 1 : -1;
          break;
        }
    return l;
  }
  function r(n, a, i) {
    for (var o = 0; i--; )
      (n[i] -= o), (o = n[i] < a[i] ? 1 : 0), (n[i] = o * wt + n[i] - a[i]);
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function (n, a, i, o) {
    var s,
      l,
      c,
      u,
      f,
      d,
      h,
      v,
      p,
      m,
      g,
      _,
      x,
      b,
      w,
      O,
      S,
      $,
      A = n.constructor,
      P = n.s == a.s ? 1 : -1,
      C = n.d,
      k = a.d;
    if (!n.s) return new A(n);
    if (!a.s) throw Error(dr + 'Division by zero');
    for (
      l = n.e - a.e,
        S = k.length,
        w = C.length,
        h = new A(P),
        v = h.d = [],
        c = 0;
      k[c] == (C[c] || 0);

    )
      ++c;
    if (
      (k[c] > (C[c] || 0) && --l,
      i == null
        ? (_ = i = A.precision)
        : o
        ? (_ = i + (ut(n) - ut(a)) + 1)
        : (_ = i),
      _ < 0)
    )
      return new A(0);
    if (((_ = (_ / Je + 2) | 0), (c = 0), S == 1))
      for (u = 0, k = k[0], _++; (c < w || u) && _--; c++)
        (x = u * wt + (C[c] || 0)), (v[c] = (x / k) | 0), (u = x % k | 0);
    else {
      for (
        u = (wt / (k[0] + 1)) | 0,
          u > 1 &&
            ((k = e(k, u)), (C = e(C, u)), (S = k.length), (w = C.length)),
          b = S,
          p = C.slice(0, S),
          m = p.length;
        m < S;

      )
        p[m++] = 0;
      ($ = k.slice()), $.unshift(0), (O = k[0]), k[1] >= wt / 2 && ++O;
      do
        (u = 0),
          (s = t(k, p, S, m)),
          s < 0
            ? ((g = p[0]),
              S != m && (g = g * wt + (p[1] || 0)),
              (u = (g / O) | 0),
              u > 1
                ? (u >= wt && (u = wt - 1),
                  (f = e(k, u)),
                  (d = f.length),
                  (m = p.length),
                  (s = t(f, p, d, m)),
                  s == 1 && (u--, r(f, S < d ? $ : k, d)))
                : (u == 0 && (s = u = 1), (f = k.slice())),
              (d = f.length),
              d < m && f.unshift(0),
              r(p, f, m),
              s == -1 &&
                ((m = p.length),
                (s = t(k, p, S, m)),
                s < 1 && (u++, r(p, S < m ? $ : k, m))),
              (m = p.length))
            : s === 0 && (u++, (p = [0])),
          (v[c++] = u),
          s && p[0] ? (p[m++] = C[b] || 0) : ((p = [C[b]]), (m = 1));
      while ((b++ < w || p[0] !== void 0) && _--);
    }
    return v[0] || v.shift(), (h.e = l), Ge(h, o ? i + ut(h) + 1 : i);
  };
})();
function Cx(e, t) {
  var r,
    n,
    a,
    i,
    o,
    s,
    l = 0,
    c = 0,
    u = e.constructor,
    f = u.precision;
  if (ut(e) > 16) throw Error(Gd + ut(e));
  if (!e.s) return new u(Jt);
  for (
    t == null ? ((tt = !1), (s = f)) : (s = t), o = new u(0.03125);
    e.abs().gte(0.1);

  )
    (e = e.times(o)), (c += 5);
  for (
    n = ((Math.log(On(2, c)) / Math.LN10) * 2 + 5) | 0,
      s += n,
      r = a = i = new u(Jt),
      u.precision = s;
    ;

  ) {
    if (
      ((a = Ge(a.times(e), s)),
      (r = r.times(++l)),
      (o = i.plus(Vr(a, r, s))),
      $r(o.d).slice(0, s) === $r(i.d).slice(0, s))
    ) {
      for (; c--; ) i = Ge(i.times(i), s);
      return (u.precision = f), t == null ? ((tt = !0), Ge(i, f)) : i;
    }
    i = o;
  }
}
function ut(e) {
  for (var t = e.e * Je, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function Ac(e, t, r) {
  if (t > e.LN10.sd())
    throw (
      ((tt = !0),
      r && (e.precision = r),
      Error(dr + 'LN10 precision limit exceeded'))
    );
  return Ge(new e(e.LN10), t);
}
function nn(e) {
  for (var t = ''; e--; ) t += '0';
  return t;
}
function $i(e, t) {
  var r,
    n,
    a,
    i,
    o,
    s,
    l,
    c,
    u,
    f = 1,
    d = 10,
    h = e,
    v = h.d,
    p = h.constructor,
    m = p.precision;
  if (h.s < 1) throw Error(dr + (h.s ? 'NaN' : '-Infinity'));
  if (h.eq(Jt)) return new p(0);
  if ((t == null ? ((tt = !1), (c = m)) : (c = t), h.eq(10)))
    return t == null && (tt = !0), Ac(p, c);
  if (
    ((c += d),
    (p.precision = c),
    (r = $r(v)),
    (n = r.charAt(0)),
    (i = ut(h)),
    Math.abs(i) < 15e14)
  ) {
    for (; (n < 7 && n != 1) || (n == 1 && r.charAt(1) > 3); )
      (h = h.times(e)), (r = $r(h.d)), (n = r.charAt(0)), f++;
    (i = ut(h)),
      n > 1 ? ((h = new p('0.' + r)), i++) : (h = new p(n + '.' + r.slice(1)));
  } else
    return (
      (l = Ac(p, c + 2, m).times(i + '')),
      (h = $i(new p(n + '.' + r.slice(1)), c - d).plus(l)),
      (p.precision = m),
      t == null ? ((tt = !0), Ge(h, m)) : h
    );
  for (
    s = o = h = Vr(h.minus(Jt), h.plus(Jt), c), u = Ge(h.times(h), c), a = 3;
    ;

  ) {
    if (
      ((o = Ge(o.times(u), c)),
      (l = s.plus(Vr(o, new p(a), c))),
      $r(l.d).slice(0, c) === $r(s.d).slice(0, c))
    )
      return (
        (s = s.times(2)),
        i !== 0 && (s = s.plus(Ac(p, c + 2, m).times(i + ''))),
        (s = Vr(s, new p(f), c)),
        (p.precision = m),
        t == null ? ((tt = !0), Ge(s, m)) : s
      );
    (s = l), (a += 2);
  }
}
function Tm(e, t) {
  var r, n, a;
  for (
    (r = t.indexOf('.')) > -1 && (t = t.replace('.', '')),
      (n = t.search(/e/i)) > 0
        ? (r < 0 && (r = n), (r += +t.slice(n + 1)), (t = t.substring(0, n)))
        : r < 0 && (r = t.length),
      n = 0;
    t.charCodeAt(n) === 48;

  )
    ++n;
  for (a = t.length; t.charCodeAt(a - 1) === 48; ) --a;
  if (((t = t.slice(n, a)), t)) {
    if (
      ((a -= n),
      (r = r - n - 1),
      (e.e = ja(r / Je)),
      (e.d = []),
      (n = (r + 1) % Je),
      r < 0 && (n += Je),
      n < a)
    ) {
      for (n && e.d.push(+t.slice(0, n)), a -= Je; n < a; )
        e.d.push(+t.slice(n, (n += Je)));
      (t = t.slice(n)), (n = Je - t.length);
    } else n -= a;
    for (; n--; ) t += '0';
    if ((e.d.push(+t), tt && (e.e > hs || e.e < -hs))) throw Error(Gd + r);
  } else (e.s = 0), (e.e = 0), (e.d = [0]);
  return e;
}
function Ge(e, t, r) {
  var n,
    a,
    i,
    o,
    s,
    l,
    c,
    u,
    f = e.d;
  for (o = 1, i = f[0]; i >= 10; i /= 10) o++;
  if (((n = t - o), n < 0)) (n += Je), (a = t), (c = f[(u = 0)]);
  else {
    if (((u = Math.ceil((n + 1) / Je)), (i = f.length), u >= i)) return e;
    for (c = i = f[u], o = 1; i >= 10; i /= 10) o++;
    (n %= Je), (a = n - Je + o);
  }
  if (
    (r !== void 0 &&
      ((i = On(10, o - a - 1)),
      (s = (c / i) % 10 | 0),
      (l = t < 0 || f[u + 1] !== void 0 || c % i),
      (l =
        r < 4
          ? (s || l) && (r == 0 || r == (e.s < 0 ? 3 : 2))
          : s > 5 ||
            (s == 5 &&
              (r == 4 ||
                l ||
                (r == 6 &&
                  (n > 0 ? (a > 0 ? c / On(10, o - a) : 0) : f[u - 1]) % 10 &
                    1) ||
                r == (e.s < 0 ? 8 : 7))))),
    t < 1 || !f[0])
  )
    return (
      l
        ? ((i = ut(e)),
          (f.length = 1),
          (t = t - i - 1),
          (f[0] = On(10, (Je - (t % Je)) % Je)),
          (e.e = ja(-t / Je) || 0))
        : ((f.length = 1), (f[0] = e.e = e.s = 0)),
      e
    );
  if (
    (n == 0
      ? ((f.length = u), (i = 1), u--)
      : ((f.length = u + 1),
        (i = On(10, Je - n)),
        (f[u] = a > 0 ? ((c / On(10, o - a)) % On(10, a) | 0) * i : 0)),
    l)
  )
    for (;;)
      if (u == 0) {
        (f[0] += i) == wt && ((f[0] = 1), ++e.e);
        break;
      } else {
        if (((f[u] += i), f[u] != wt)) break;
        (f[u--] = 0), (i = 1);
      }
  for (n = f.length; f[--n] === 0; ) f.pop();
  if (tt && (e.e > hs || e.e < -hs)) throw Error(Gd + ut(e));
  return e;
}
function Px(e, t) {
  var r,
    n,
    a,
    i,
    o,
    s,
    l,
    c,
    u,
    f,
    d = e.constructor,
    h = d.precision;
  if (!e.s || !t.s)
    return t.s ? (t.s = -t.s) : (t = new d(e)), tt ? Ge(t, h) : t;
  if (
    ((l = e.d),
    (f = t.d),
    (n = t.e),
    (c = e.e),
    (l = l.slice()),
    (o = c - n),
    o)
  ) {
    for (
      u = o < 0,
        u
          ? ((r = l), (o = -o), (s = f.length))
          : ((r = f), (n = c), (s = l.length)),
        a = Math.max(Math.ceil(h / Je), s) + 2,
        o > a && ((o = a), (r.length = 1)),
        r.reverse(),
        a = o;
      a--;

    )
      r.push(0);
    r.reverse();
  } else {
    for (a = l.length, s = f.length, u = a < s, u && (s = a), a = 0; a < s; a++)
      if (l[a] != f[a]) {
        u = l[a] < f[a];
        break;
      }
    o = 0;
  }
  for (
    u && ((r = l), (l = f), (f = r), (t.s = -t.s)),
      s = l.length,
      a = f.length - s;
    a > 0;
    --a
  )
    l[s++] = 0;
  for (a = f.length; a > o; ) {
    if (l[--a] < f[a]) {
      for (i = a; i && l[--i] === 0; ) l[i] = wt - 1;
      --l[i], (l[a] += wt);
    }
    l[a] -= f[a];
  }
  for (; l[--s] === 0; ) l.pop();
  for (; l[0] === 0; l.shift()) --n;
  return l[0] ? ((t.d = l), (t.e = n), tt ? Ge(t, h) : t) : new d(0);
}
function Rn(e, t, r) {
  var n,
    a = ut(e),
    i = $r(e.d),
    o = i.length;
  return (
    t
      ? (r && (n = r - o) > 0
          ? (i = i.charAt(0) + '.' + i.slice(1) + nn(n))
          : o > 1 && (i = i.charAt(0) + '.' + i.slice(1)),
        (i = i + (a < 0 ? 'e' : 'e+') + a))
      : a < 0
      ? ((i = '0.' + nn(-a - 1) + i), r && (n = r - o) > 0 && (i += nn(n)))
      : a >= o
      ? ((i += nn(a + 1 - o)),
        r && (n = r - a - 1) > 0 && (i = i + '.' + nn(n)))
      : ((n = a + 1) < o && (i = i.slice(0, n) + '.' + i.slice(n)),
        r && (n = r - o) > 0 && (a + 1 === o && (i += '.'), (i += nn(n)))),
    e.s < 0 ? '-' + i : i
  );
}
function Mm(e, t) {
  if (e.length > t) return (e.length = t), !0;
}
function kx(e) {
  var t, r, n;
  function a(i) {
    var o = this;
    if (!(o instanceof a)) return new a(i);
    if (((o.constructor = a), i instanceof a)) {
      (o.s = i.s), (o.e = i.e), (o.d = (i = i.d) ? i.slice() : i);
      return;
    }
    if (typeof i == 'number') {
      if (i * 0 !== 0) throw Error(Tn + i);
      if (i > 0) o.s = 1;
      else if (i < 0) (i = -i), (o.s = -1);
      else {
        (o.s = 0), (o.e = 0), (o.d = [0]);
        return;
      }
      if (i === ~~i && i < 1e7) {
        (o.e = 0), (o.d = [i]);
        return;
      }
      return Tm(o, i.toString());
    } else if (typeof i != 'string') throw Error(Tn + i);
    if (
      (i.charCodeAt(0) === 45 ? ((i = i.slice(1)), (o.s = -1)) : (o.s = 1),
      H8.test(i))
    )
      Tm(o, i);
    else throw Error(Tn + i);
  }
  if (
    ((a.prototype = te),
    (a.ROUND_UP = 0),
    (a.ROUND_DOWN = 1),
    (a.ROUND_CEIL = 2),
    (a.ROUND_FLOOR = 3),
    (a.ROUND_HALF_UP = 4),
    (a.ROUND_HALF_DOWN = 5),
    (a.ROUND_HALF_EVEN = 6),
    (a.ROUND_HALF_CEIL = 7),
    (a.ROUND_HALF_FLOOR = 8),
    (a.clone = kx),
    (a.config = a.set = V8),
    e === void 0 && (e = {}),
    e)
  )
    for (
      n = ['precision', 'rounding', 'toExpNeg', 'toExpPos', 'LN10'], t = 0;
      t < n.length;

    )
      e.hasOwnProperty((r = n[t++])) || (e[r] = this[r]);
  return a.config(e), a;
}
function V8(e) {
  if (!e || typeof e != 'object') throw Error(dr + 'Object expected');
  var t,
    r,
    n,
    a = [
      'precision',
      1,
      Da,
      'rounding',
      0,
      8,
      'toExpNeg',
      -1 / 0,
      0,
      'toExpPos',
      0,
      1 / 0,
    ];
  for (t = 0; t < a.length; t += 3)
    if ((n = e[(r = a[t])]) !== void 0)
      if (ja(n) === n && n >= a[t + 1] && n <= a[t + 2]) this[r] = n;
      else throw Error(Tn + r + ': ' + n);
  if ((n = e[(r = 'LN10')]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(Tn + r + ': ' + n);
  return this;
}
var qd = kx(U8);
Jt = new qd(1);
const Ve = qd;
function G8(e) {
  return X8(e) || K8(e) || Y8(e) || q8();
}
function q8() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Y8(e, t) {
  if (!!e) {
    if (typeof e == 'string') return qu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === 'Object' && e.constructor && (r = e.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return qu(e, t);
  }
}
function K8(e) {
  if (typeof Symbol < 'u' && Symbol.iterator in Object(e)) return Array.from(e);
}
function X8(e) {
  if (Array.isArray(e)) return qu(e);
}
function qu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var J8 = function (t) {
    return t;
  },
  Tx = { '@@functional/placeholder': !0 },
  Mx = function (t) {
    return t === Tx;
  },
  Im = function (t) {
    return function r() {
      return arguments.length === 0 ||
        (arguments.length === 1 &&
          Mx(arguments.length <= 0 ? void 0 : arguments[0]))
        ? r
        : t.apply(void 0, arguments);
    };
  },
  Z8 = function e(t, r) {
    return t === 1
      ? r
      : Im(function () {
          for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
            a[i] = arguments[i];
          var o = a.filter(function (s) {
            return s !== Tx;
          }).length;
          return o >= t
            ? r.apply(void 0, a)
            : e(
                t - o,
                Im(function () {
                  for (
                    var s = arguments.length, l = new Array(s), c = 0;
                    c < s;
                    c++
                  )
                    l[c] = arguments[c];
                  var u = a.map(function (f) {
                    return Mx(f) ? l.shift() : f;
                  });
                  return r.apply(void 0, G8(u).concat(l));
                })
              );
        });
  },
  Pl = function (t) {
    return Z8(t.length, t);
  },
  Yu = function (t, r) {
    for (var n = [], a = t; a < r; ++a) n[a - t] = a;
    return n;
  },
  Q8 = Pl(function (e, t) {
    return Array.isArray(t)
      ? t.map(e)
      : Object.keys(t)
          .map(function (r) {
            return t[r];
          })
          .map(e);
  }),
  e9 = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    if (!r.length) return J8;
    var a = r.reverse(),
      i = a[0],
      o = a.slice(1);
    return function () {
      return o.reduce(function (s, l) {
        return l(s);
      }, i.apply(void 0, arguments));
    };
  },
  Ku = function (t) {
    return Array.isArray(t) ? t.reverse() : t.split('').reverse.join('');
  },
  Ix = function (t) {
    var r = null,
      n = null;
    return function () {
      for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
        i[o] = arguments[o];
      return (
        (r &&
          i.every(function (s, l) {
            return s === r[l];
          })) ||
          ((r = i), (n = t.apply(void 0, i))),
        n
      );
    };
  };
function t9(e) {
  var t;
  return (
    e === 0
      ? (t = 1)
      : (t = Math.floor(new Ve(e).abs().log(10).toNumber()) + 1),
    t
  );
}
function r9(e, t, r) {
  for (var n = new Ve(e), a = 0, i = []; n.lt(t) && a < 1e5; )
    i.push(n.toNumber()), (n = n.add(r)), a++;
  return i;
}
var n9 = Pl(function (e, t, r) {
    var n = +e,
      a = +t;
    return n + r * (a - n);
  }),
  a9 = Pl(function (e, t, r) {
    var n = t - +e;
    return (n = n || 1 / 0), (r - e) / n;
  }),
  i9 = Pl(function (e, t, r) {
    var n = t - +e;
    return (n = n || 1 / 0), Math.max(0, Math.min(1, (r - e) / n));
  });
const kl = {
  rangeStep: r9,
  getDigitCount: t9,
  interpolateNumber: n9,
  uninterpolateNumber: a9,
  uninterpolateTruncation: i9,
};
function Xu(e) {
  return l9(e) || s9(e) || Rx(e) || o9();
}
function o9() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function s9(e) {
  if (typeof Symbol < 'u' && Symbol.iterator in Object(e)) return Array.from(e);
}
function l9(e) {
  if (Array.isArray(e)) return Ju(e);
}
function Ai(e, t) {
  return f9(e) || u9(e, t) || Rx(e, t) || c9();
}
function c9() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Rx(e, t) {
  if (!!e) {
    if (typeof e == 'string') return Ju(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === 'Object' && e.constructor && (r = e.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Ju(e, t);
  }
}
function Ju(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function u9(e, t) {
  if (!(typeof Symbol > 'u' || !(Symbol.iterator in Object(e)))) {
    var r = [],
      n = !0,
      a = !1,
      i = void 0;
    try {
      for (
        var o = e[Symbol.iterator](), s;
        !(n = (s = o.next()).done) && (r.push(s.value), !(t && r.length === t));
        n = !0
      );
    } catch (l) {
      (a = !0), (i = l);
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (a) throw i;
      }
    }
    return r;
  }
}
function f9(e) {
  if (Array.isArray(e)) return e;
}
function Dx(e) {
  var t = Ai(e, 2),
    r = t[0],
    n = t[1],
    a = r,
    i = n;
  return r > n && ((a = n), (i = r)), [a, i];
}
function jx(e, t, r) {
  if (e.lte(0)) return new Ve(0);
  var n = kl.getDigitCount(e.toNumber()),
    a = new Ve(10).pow(n),
    i = e.div(a),
    o = n !== 1 ? 0.05 : 0.1,
    s = new Ve(Math.ceil(i.div(o).toNumber())).add(r).mul(o),
    l = s.mul(a);
  return t ? l : new Ve(Math.ceil(l));
}
function d9(e, t, r) {
  var n = 1,
    a = new Ve(e);
  if (!a.isint() && r) {
    var i = Math.abs(e);
    i < 1
      ? ((n = new Ve(10).pow(kl.getDigitCount(e) - 1)),
        (a = new Ve(Math.floor(a.div(n).toNumber())).mul(n)))
      : i > 1 && (a = new Ve(Math.floor(e)));
  } else
    e === 0
      ? (a = new Ve(Math.floor((t - 1) / 2)))
      : r || (a = new Ve(Math.floor(e)));
  var o = Math.floor((t - 1) / 2),
    s = e9(
      Q8(function (l) {
        return a.add(new Ve(l - o).mul(n)).toNumber();
      }),
      Yu
    );
  return s(0, t);
}
function Nx(e, t, r, n) {
  var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e) / (r - 1)))
    return { step: new Ve(0), tickMin: new Ve(0), tickMax: new Ve(0) };
  var i = jx(new Ve(t).sub(e).div(r - 1), n, a),
    o;
  e <= 0 && t >= 0
    ? (o = new Ve(0))
    : ((o = new Ve(e).add(t).div(2)), (o = o.sub(new Ve(o).mod(i))));
  var s = Math.ceil(o.sub(e).div(i).toNumber()),
    l = Math.ceil(new Ve(t).sub(o).div(i).toNumber()),
    c = s + l + 1;
  return c > r
    ? Nx(e, t, r, n, a + 1)
    : (c < r && ((l = t > 0 ? l + (r - c) : l), (s = t > 0 ? s : s + (r - c))),
      {
        step: i,
        tickMin: o.sub(new Ve(s).mul(i)),
        tickMax: o.add(new Ve(l).mul(i)),
      });
}
function p9(e) {
  var t = Ai(e, 2),
    r = t[0],
    n = t[1],
    a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6,
    i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    o = Math.max(a, 2),
    s = Dx([r, n]),
    l = Ai(s, 2),
    c = l[0],
    u = l[1];
  if (c === -1 / 0 || u === 1 / 0) {
    var f =
      u === 1 / 0
        ? [c].concat(
            Xu(
              Yu(0, a - 1).map(function () {
                return 1 / 0;
              })
            )
          )
        : [].concat(
            Xu(
              Yu(0, a - 1).map(function () {
                return -1 / 0;
              })
            ),
            [u]
          );
    return r > n ? Ku(f) : f;
  }
  if (c === u) return d9(c, a, i);
  var d = Nx(c, u, o, i),
    h = d.step,
    v = d.tickMin,
    p = d.tickMax,
    m = kl.rangeStep(v, p.add(new Ve(0.1).mul(h)), h);
  return r > n ? Ku(m) : m;
}
function h9(e, t) {
  var r = Ai(e, 2),
    n = r[0],
    a = r[1],
    i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    o = Dx([n, a]),
    s = Ai(o, 2),
    l = s[0],
    c = s[1];
  if (l === -1 / 0 || c === 1 / 0) return [n, a];
  if (l === c) return [l];
  var u = Math.max(t, 2),
    f = jx(new Ve(c).sub(l).div(u - 1), i, 0),
    d = [].concat(
      Xu(kl.rangeStep(new Ve(l), new Ve(c).sub(new Ve(0.99).mul(f)), f)),
      [c]
    );
  return n > a ? Ku(d) : d;
}
var v9 = Ix(p9),
  m9 = Ix(h9);
function Hi(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Yd(e) {
  let t = e,
    r = e;
  e.length === 1 && ((t = (o, s) => e(o) - s), (r = g9(e)));
  function n(o, s, l, c) {
    for (l == null && (l = 0), c == null && (c = o.length); l < c; ) {
      const u = (l + c) >>> 1;
      r(o[u], s) < 0 ? (l = u + 1) : (c = u);
    }
    return l;
  }
  function a(o, s, l, c) {
    for (l == null && (l = 0), c == null && (c = o.length); l < c; ) {
      const u = (l + c) >>> 1;
      r(o[u], s) > 0 ? (c = u) : (l = u + 1);
    }
    return l;
  }
  function i(o, s, l, c) {
    l == null && (l = 0), c == null && (c = o.length);
    const u = n(o, s, l, c - 1);
    return u > l && t(o[u - 1], s) > -t(o[u], s) ? u - 1 : u;
  }
  return { left: n, center: i, right: a };
}
function g9(e) {
  return (t, r) => Hi(e(t), r);
}
function Lx(e) {
  return e === null ? NaN : +e;
}
function* y9(e, t) {
  if (t === void 0) for (let r of e) r != null && (r = +r) >= r && (yield r);
  else {
    let r = -1;
    for (let n of e) (n = t(n, ++r, e)) != null && (n = +n) >= n && (yield n);
  }
}
const b9 = Yd(Hi),
  x9 = b9.right;
Yd(Lx).center;
const Vi = x9;
var Zu = Math.sqrt(50),
  Qu = Math.sqrt(10),
  ef = Math.sqrt(2);
function tf(e, t, r) {
  var n,
    a = -1,
    i,
    o,
    s;
  if (((t = +t), (e = +e), (r = +r), e === t && r > 0)) return [e];
  if (
    ((n = t < e) && ((i = e), (e = t), (t = i)),
    (s = Bx(e, t, r)) === 0 || !isFinite(s))
  )
    return [];
  if (s > 0) {
    let l = Math.round(e / s),
      c = Math.round(t / s);
    for (
      l * s < e && ++l, c * s > t && --c, o = new Array((i = c - l + 1));
      ++a < i;

    )
      o[a] = (l + a) * s;
  } else {
    s = -s;
    let l = Math.round(e * s),
      c = Math.round(t * s);
    for (
      l / s < e && ++l, c / s > t && --c, o = new Array((i = c - l + 1));
      ++a < i;

    )
      o[a] = (l + a) / s;
  }
  return n && o.reverse(), o;
}
function Bx(e, t, r) {
  var n = (t - e) / Math.max(0, r),
    a = Math.floor(Math.log(n) / Math.LN10),
    i = n / Math.pow(10, a);
  return a >= 0
    ? (i >= Zu ? 10 : i >= Qu ? 5 : i >= ef ? 2 : 1) * Math.pow(10, a)
    : -Math.pow(10, -a) / (i >= Zu ? 10 : i >= Qu ? 5 : i >= ef ? 2 : 1);
}
function rf(e, t, r) {
  var n = Math.abs(t - e) / Math.max(0, r),
    a = Math.pow(10, Math.floor(Math.log(n) / Math.LN10)),
    i = n / a;
  return (
    i >= Zu ? (a *= 10) : i >= Qu ? (a *= 5) : i >= ef && (a *= 2),
    t < e ? -a : a
  );
}
function Rm(e, t) {
  let r;
  if (t === void 0)
    for (const n of e)
      n != null && (r < n || (r === void 0 && n >= n)) && (r = n);
  else {
    let n = -1;
    for (let a of e)
      (a = t(a, ++n, e)) != null &&
        (r < a || (r === void 0 && a >= a)) &&
        (r = a);
  }
  return r;
}
function Dm(e, t) {
  let r;
  if (t === void 0)
    for (const n of e)
      n != null && (r > n || (r === void 0 && n >= n)) && (r = n);
  else {
    let n = -1;
    for (let a of e)
      (a = t(a, ++n, e)) != null &&
        (r > a || (r === void 0 && a >= a)) &&
        (r = a);
  }
  return r;
}
function Fx(e, t, r = 0, n = e.length - 1, a = Hi) {
  for (; n > r; ) {
    if (n - r > 600) {
      const l = n - r + 1,
        c = t - r + 1,
        u = Math.log(l),
        f = 0.5 * Math.exp((2 * u) / 3),
        d = 0.5 * Math.sqrt((u * f * (l - f)) / l) * (c - l / 2 < 0 ? -1 : 1),
        h = Math.max(r, Math.floor(t - (c * f) / l + d)),
        v = Math.min(n, Math.floor(t + ((l - c) * f) / l + d));
      Fx(e, t, h, v, a);
    }
    const i = e[t];
    let o = r,
      s = n;
    for (Ka(e, r, t), a(e[n], i) > 0 && Ka(e, r, n); o < s; ) {
      for (Ka(e, o, s), ++o, --s; a(e[o], i) < 0; ) ++o;
      for (; a(e[s], i) > 0; ) --s;
    }
    a(e[r], i) === 0 ? Ka(e, r, s) : (++s, Ka(e, s, n)),
      s <= t && (r = s + 1),
      t <= s && (n = s - 1);
  }
  return e;
}
function Ka(e, t, r) {
  const n = e[t];
  (e[t] = e[r]), (e[r] = n);
}
function w9(e, t, r) {
  if (((e = Float64Array.from(y9(e, r))), !!(n = e.length))) {
    if ((t = +t) <= 0 || n < 2) return Dm(e);
    if (t >= 1) return Rm(e);
    var n,
      a = (n - 1) * t,
      i = Math.floor(a),
      o = Rm(Fx(e, i).subarray(0, i + 1)),
      s = Dm(e.subarray(i + 1));
    return o + (s - o) * (a - i);
  }
}
function _9(e, t, r = Lx) {
  if (!!(n = e.length)) {
    if ((t = +t) <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n,
      a = (n - 1) * t,
      i = Math.floor(a),
      o = +r(e[i], i, e),
      s = +r(e[i + 1], i + 1, e);
    return o + (s - o) * (a - i);
  }
}
function O9(e, t, r) {
  (e = +e),
    (t = +t),
    (r = (a = arguments.length) < 2 ? ((t = e), (e = 0), 1) : a < 3 ? 1 : +r);
  for (
    var n = -1, a = Math.max(0, Math.ceil((t - e) / r)) | 0, i = new Array(a);
    ++n < a;

  )
    i[n] = e + n * r;
  return i;
}
function vr(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function Zr(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e == 'function' ? this.interpolator(e) : this.range(e);
      break;
    }
    default: {
      this.domain(e),
        typeof t == 'function' ? this.interpolator(t) : this.range(t);
      break;
    }
  }
  return this;
}
const nf = Symbol('implicit');
function Kd() {
  var e = new Map(),
    t = [],
    r = [],
    n = nf;
  function a(i) {
    var o = i + '',
      s = e.get(o);
    if (!s) {
      if (n !== nf) return n;
      e.set(o, (s = t.push(i)));
    }
    return r[(s - 1) % r.length];
  }
  return (
    (a.domain = function (i) {
      if (!arguments.length) return t.slice();
      (t = []), (e = new Map());
      for (const o of i) {
        const s = o + '';
        e.has(s) || e.set(s, t.push(o));
      }
      return a;
    }),
    (a.range = function (i) {
      return arguments.length ? ((r = Array.from(i)), a) : r.slice();
    }),
    (a.unknown = function (i) {
      return arguments.length ? ((n = i), a) : n;
    }),
    (a.copy = function () {
      return Kd(t, r).unknown(n);
    }),
    vr.apply(a, arguments),
    a
  );
}
function Ci() {
  var e = Kd().unknown(void 0),
    t = e.domain,
    r = e.range,
    n = 0,
    a = 1,
    i,
    o,
    s = !1,
    l = 0,
    c = 0,
    u = 0.5;
  delete e.unknown;
  function f() {
    var d = t().length,
      h = a < n,
      v = h ? a : n,
      p = h ? n : a;
    (i = (p - v) / Math.max(1, d - l + c * 2)),
      s && (i = Math.floor(i)),
      (v += (p - v - i * (d - l)) * u),
      (o = i * (1 - l)),
      s && ((v = Math.round(v)), (o = Math.round(o)));
    var m = O9(d).map(function (g) {
      return v + i * g;
    });
    return r(h ? m.reverse() : m);
  }
  return (
    (e.domain = function (d) {
      return arguments.length ? (t(d), f()) : t();
    }),
    (e.range = function (d) {
      return arguments.length
        ? (([n, a] = d), (n = +n), (a = +a), f())
        : [n, a];
    }),
    (e.rangeRound = function (d) {
      return ([n, a] = d), (n = +n), (a = +a), (s = !0), f();
    }),
    (e.bandwidth = function () {
      return o;
    }),
    (e.step = function () {
      return i;
    }),
    (e.round = function (d) {
      return arguments.length ? ((s = !!d), f()) : s;
    }),
    (e.padding = function (d) {
      return arguments.length ? ((l = Math.min(1, (c = +d))), f()) : l;
    }),
    (e.paddingInner = function (d) {
      return arguments.length ? ((l = Math.min(1, d)), f()) : l;
    }),
    (e.paddingOuter = function (d) {
      return arguments.length ? ((c = +d), f()) : c;
    }),
    (e.align = function (d) {
      return arguments.length ? ((u = Math.max(0, Math.min(1, d))), f()) : u;
    }),
    (e.copy = function () {
      return Ci(t(), [n, a]).round(s).paddingInner(l).paddingOuter(c).align(u);
    }),
    vr.apply(f(), arguments)
  );
}
function zx(e) {
  var t = e.copy;
  return (
    (e.padding = e.paddingOuter),
    delete e.paddingInner,
    delete e.paddingOuter,
    (e.copy = function () {
      return zx(t());
    }),
    e
  );
}
function fi() {
  return zx(Ci.apply(null, arguments).paddingInner(1));
}
function Xd(e, t, r) {
  (e.prototype = t.prototype = r), (r.constructor = e);
}
function Wx(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function Gi() {}
var Pi = 0.7,
  vs = 1 / Pi,
  la = '\\s*([+-]?\\d+)\\s*',
  ki = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*',
  kr = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
  S9 = /^#([0-9a-f]{3,8})$/,
  E9 = new RegExp('^rgb\\(' + [la, la, la] + '\\)$'),
  $9 = new RegExp('^rgb\\(' + [kr, kr, kr] + '\\)$'),
  A9 = new RegExp('^rgba\\(' + [la, la, la, ki] + '\\)$'),
  C9 = new RegExp('^rgba\\(' + [kr, kr, kr, ki] + '\\)$'),
  P9 = new RegExp('^hsl\\(' + [ki, kr, kr] + '\\)$'),
  k9 = new RegExp('^hsla\\(' + [ki, kr, kr, ki] + '\\)$'),
  jm = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  };
Xd(Gi, Ti, {
  copy: function (e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable: function () {
    return this.rgb().displayable();
  },
  hex: Nm,
  formatHex: Nm,
  formatHsl: T9,
  formatRgb: Lm,
  toString: Lm,
});
function Nm() {
  return this.rgb().formatHex();
}
function T9() {
  return Ux(this).formatHsl();
}
function Lm() {
  return this.rgb().formatRgb();
}
function Ti(e) {
  var t, r;
  return (
    (e = (e + '').trim().toLowerCase()),
    (t = S9.exec(e))
      ? ((r = t[1].length),
        (t = parseInt(t[1], 16)),
        r === 6
          ? Bm(t)
          : r === 3
          ? new Zt(
              ((t >> 8) & 15) | ((t >> 4) & 240),
              ((t >> 4) & 15) | (t & 240),
              ((t & 15) << 4) | (t & 15),
              1
            )
          : r === 8
          ? co(
              (t >> 24) & 255,
              (t >> 16) & 255,
              (t >> 8) & 255,
              (t & 255) / 255
            )
          : r === 4
          ? co(
              ((t >> 12) & 15) | ((t >> 8) & 240),
              ((t >> 8) & 15) | ((t >> 4) & 240),
              ((t >> 4) & 15) | (t & 240),
              (((t & 15) << 4) | (t & 15)) / 255
            )
          : null)
      : (t = E9.exec(e))
      ? new Zt(t[1], t[2], t[3], 1)
      : (t = $9.exec(e))
      ? new Zt((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, 1)
      : (t = A9.exec(e))
      ? co(t[1], t[2], t[3], t[4])
      : (t = C9.exec(e))
      ? co((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, t[4])
      : (t = P9.exec(e))
      ? Wm(t[1], t[2] / 100, t[3] / 100, 1)
      : (t = k9.exec(e))
      ? Wm(t[1], t[2] / 100, t[3] / 100, t[4])
      : jm.hasOwnProperty(e)
      ? Bm(jm[e])
      : e === 'transparent'
      ? new Zt(NaN, NaN, NaN, 0)
      : null
  );
}
function Bm(e) {
  return new Zt((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
}
function co(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new Zt(e, t, r, n);
}
function M9(e) {
  return (
    e instanceof Gi || (e = Ti(e)),
    e ? ((e = e.rgb()), new Zt(e.r, e.g, e.b, e.opacity)) : new Zt()
  );
}
function af(e, t, r, n) {
  return arguments.length === 1 ? M9(e) : new Zt(e, t, r, n == null ? 1 : n);
}
function Zt(e, t, r, n) {
  (this.r = +e), (this.g = +t), (this.b = +r), (this.opacity = +n);
}
Xd(
  Zt,
  af,
  Wx(Gi, {
    brighter: function (e) {
      return (
        (e = e == null ? vs : Math.pow(vs, e)),
        new Zt(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    darker: function (e) {
      return (
        (e = e == null ? Pi : Math.pow(Pi, e)),
        new Zt(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    rgb: function () {
      return this;
    },
    displayable: function () {
      return (
        -0.5 <= this.r &&
        this.r < 255.5 &&
        -0.5 <= this.g &&
        this.g < 255.5 &&
        -0.5 <= this.b &&
        this.b < 255.5 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    hex: Fm,
    formatHex: Fm,
    formatRgb: zm,
    toString: zm,
  })
);
function Fm() {
  return '#' + Cc(this.r) + Cc(this.g) + Cc(this.b);
}
function zm() {
  var e = this.opacity;
  return (
    (e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e))),
    (e === 1 ? 'rgb(' : 'rgba(') +
      Math.max(0, Math.min(255, Math.round(this.r) || 0)) +
      ', ' +
      Math.max(0, Math.min(255, Math.round(this.g) || 0)) +
      ', ' +
      Math.max(0, Math.min(255, Math.round(this.b) || 0)) +
      (e === 1 ? ')' : ', ' + e + ')')
  );
}
function Cc(e) {
  return (
    (e = Math.max(0, Math.min(255, Math.round(e) || 0))),
    (e < 16 ? '0' : '') + e.toString(16)
  );
}
function Wm(e, t, r, n) {
  return (
    n <= 0
      ? (e = t = r = NaN)
      : r <= 0 || r >= 1
      ? (e = t = NaN)
      : t <= 0 && (e = NaN),
    new Er(e, t, r, n)
  );
}
function Ux(e) {
  if (e instanceof Er) return new Er(e.h, e.s, e.l, e.opacity);
  if ((e instanceof Gi || (e = Ti(e)), !e)) return new Er();
  if (e instanceof Er) return e;
  e = e.rgb();
  var t = e.r / 255,
    r = e.g / 255,
    n = e.b / 255,
    a = Math.min(t, r, n),
    i = Math.max(t, r, n),
    o = NaN,
    s = i - a,
    l = (i + a) / 2;
  return (
    s
      ? (t === i
          ? (o = (r - n) / s + (r < n) * 6)
          : r === i
          ? (o = (n - t) / s + 2)
          : (o = (t - r) / s + 4),
        (s /= l < 0.5 ? i + a : 2 - i - a),
        (o *= 60))
      : (s = l > 0 && l < 1 ? 0 : o),
    new Er(o, s, l, e.opacity)
  );
}
function I9(e, t, r, n) {
  return arguments.length === 1 ? Ux(e) : new Er(e, t, r, n == null ? 1 : n);
}
function Er(e, t, r, n) {
  (this.h = +e), (this.s = +t), (this.l = +r), (this.opacity = +n);
}
Xd(
  Er,
  I9,
  Wx(Gi, {
    brighter: function (e) {
      return (
        (e = e == null ? vs : Math.pow(vs, e)),
        new Er(this.h, this.s, this.l * e, this.opacity)
      );
    },
    darker: function (e) {
      return (
        (e = e == null ? Pi : Math.pow(Pi, e)),
        new Er(this.h, this.s, this.l * e, this.opacity)
      );
    },
    rgb: function () {
      var e = (this.h % 360) + (this.h < 0) * 360,
        t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
        r = this.l,
        n = r + (r < 0.5 ? r : 1 - r) * t,
        a = 2 * r - n;
      return new Zt(
        Pc(e >= 240 ? e - 240 : e + 120, a, n),
        Pc(e, a, n),
        Pc(e < 120 ? e + 240 : e - 120, a, n),
        this.opacity
      );
    },
    displayable: function () {
      return (
        ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
        0 <= this.l &&
        this.l <= 1 &&
        0 <= this.opacity &&
        this.opacity <= 1
      );
    },
    formatHsl: function () {
      var e = this.opacity;
      return (
        (e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e))),
        (e === 1 ? 'hsl(' : 'hsla(') +
          (this.h || 0) +
          ', ' +
          (this.s || 0) * 100 +
          '%, ' +
          (this.l || 0) * 100 +
          '%' +
          (e === 1 ? ')' : ', ' + e + ')')
      );
    },
  })
);
function Pc(e, t, r) {
  return (
    (e < 60
      ? t + ((r - t) * e) / 60
      : e < 180
      ? r
      : e < 240
      ? t + ((r - t) * (240 - e)) / 60
      : t) * 255
  );
}
const Jd = (e) => () => e;
function R9(e, t) {
  return function (r) {
    return e + r * t;
  };
}
function D9(e, t, r) {
  return (
    (e = Math.pow(e, r)),
    (t = Math.pow(t, r) - e),
    (r = 1 / r),
    function (n) {
      return Math.pow(e + n * t, r);
    }
  );
}
function j9(e) {
  return (e = +e) == 1
    ? Hx
    : function (t, r) {
        return r - t ? D9(t, r, e) : Jd(isNaN(t) ? r : t);
      };
}
function Hx(e, t) {
  var r = t - e;
  return r ? R9(e, r) : Jd(isNaN(e) ? t : e);
}
const Um = (function e(t) {
  var r = j9(t);
  function n(a, i) {
    var o = r((a = af(a)).r, (i = af(i)).r),
      s = r(a.g, i.g),
      l = r(a.b, i.b),
      c = Hx(a.opacity, i.opacity);
    return function (u) {
      return (
        (a.r = o(u)), (a.g = s(u)), (a.b = l(u)), (a.opacity = c(u)), a + ''
      );
    };
  }
  return (n.gamma = e), n;
})(1);
function N9(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0,
    n = t.slice(),
    a;
  return function (i) {
    for (a = 0; a < r; ++a) n[a] = e[a] * (1 - i) + t[a] * i;
    return n;
  };
}
function L9(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function B9(e, t) {
  var r = t ? t.length : 0,
    n = e ? Math.min(r, e.length) : 0,
    a = new Array(n),
    i = new Array(r),
    o;
  for (o = 0; o < n; ++o) a[o] = Na(e[o], t[o]);
  for (; o < r; ++o) i[o] = t[o];
  return function (s) {
    for (o = 0; o < n; ++o) i[o] = a[o](s);
    return i;
  };
}
function F9(e, t) {
  var r = new Date();
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return r.setTime(e * (1 - n) + t * n), r;
    }
  );
}
function ms(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return e * (1 - r) + t * r;
    }
  );
}
function z9(e, t) {
  var r = {},
    n = {},
    a;
  (e === null || typeof e != 'object') && (e = {}),
    (t === null || typeof t != 'object') && (t = {});
  for (a in t) a in e ? (r[a] = Na(e[a], t[a])) : (n[a] = t[a]);
  return function (i) {
    for (a in r) n[a] = r[a](i);
    return n;
  };
}
var of = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  kc = new RegExp(of.source, 'g');
function W9(e) {
  return function () {
    return e;
  };
}
function U9(e) {
  return function (t) {
    return e(t) + '';
  };
}
function H9(e, t) {
  var r = (of.lastIndex = kc.lastIndex = 0),
    n,
    a,
    i,
    o = -1,
    s = [],
    l = [];
  for (e = e + '', t = t + ''; (n = of.exec(e)) && (a = kc.exec(t)); )
    (i = a.index) > r &&
      ((i = t.slice(r, i)), s[o] ? (s[o] += i) : (s[++o] = i)),
      (n = n[0]) === (a = a[0])
        ? s[o]
          ? (s[o] += a)
          : (s[++o] = a)
        : ((s[++o] = null), l.push({ i: o, x: ms(n, a) })),
      (r = kc.lastIndex);
  return (
    r < t.length && ((i = t.slice(r)), s[o] ? (s[o] += i) : (s[++o] = i)),
    s.length < 2
      ? l[0]
        ? U9(l[0].x)
        : W9(t)
      : ((t = l.length),
        function (c) {
          for (var u = 0, f; u < t; ++u) s[(f = l[u]).i] = f.x(c);
          return s.join('');
        })
  );
}
function Na(e, t) {
  var r = typeof t,
    n;
  return t == null || r === 'boolean'
    ? Jd(t)
    : (r === 'number'
        ? ms
        : r === 'string'
        ? (n = Ti(t))
          ? ((t = n), Um)
          : H9
        : t instanceof Ti
        ? Um
        : t instanceof Date
        ? F9
        : L9(t)
        ? N9
        : Array.isArray(t)
        ? B9
        : (typeof t.valueOf != 'function' && typeof t.toString != 'function') ||
          isNaN(t)
        ? z9
        : ms)(e, t);
}
function Zd(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return Math.round(e * (1 - r) + t * r);
    }
  );
}
function V9(e, t) {
  t === void 0 && ((t = e), (e = Na));
  for (
    var r = 0, n = t.length - 1, a = t[0], i = new Array(n < 0 ? 0 : n);
    r < n;

  )
    i[r] = e(a, (a = t[++r]));
  return function (o) {
    var s = Math.max(0, Math.min(n - 1, Math.floor((o *= n))));
    return i[s](o - s);
  };
}
function G9(e) {
  return function () {
    return e;
  };
}
function gs(e) {
  return +e;
}
var Hm = [0, 1];
function jt(e) {
  return e;
}
function sf(e, t) {
  return (t -= e = +e)
    ? function (r) {
        return (r - e) / t;
      }
    : G9(isNaN(t) ? NaN : 0.5);
}
function q9(e, t) {
  var r;
  return (
    e > t && ((r = e), (e = t), (t = r)),
    function (n) {
      return Math.max(e, Math.min(t, n));
    }
  );
}
function Y9(e, t, r) {
  var n = e[0],
    a = e[1],
    i = t[0],
    o = t[1];
  return (
    a < n ? ((n = sf(a, n)), (i = r(o, i))) : ((n = sf(n, a)), (i = r(i, o))),
    function (s) {
      return i(n(s));
    }
  );
}
function K9(e, t, r) {
  var n = Math.min(e.length, t.length) - 1,
    a = new Array(n),
    i = new Array(n),
    o = -1;
  for (
    e[n] < e[0] && ((e = e.slice().reverse()), (t = t.slice().reverse()));
    ++o < n;

  )
    (a[o] = sf(e[o], e[o + 1])), (i[o] = r(t[o], t[o + 1]));
  return function (s) {
    var l = Vi(e, s, 1, n) - 1;
    return i[l](a[l](s));
  };
}
function qi(e, t) {
  return t
    .domain(e.domain())
    .range(e.range())
    .interpolate(e.interpolate())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function Tl() {
  var e = Hm,
    t = Hm,
    r = Na,
    n,
    a,
    i,
    o = jt,
    s,
    l,
    c;
  function u() {
    var d = Math.min(e.length, t.length);
    return (
      o !== jt && (o = q9(e[0], e[d - 1])),
      (s = d > 2 ? K9 : Y9),
      (l = c = null),
      f
    );
  }
  function f(d) {
    return d == null || isNaN((d = +d))
      ? i
      : (l || (l = s(e.map(n), t, r)))(n(o(d)));
  }
  return (
    (f.invert = function (d) {
      return o(a((c || (c = s(t, e.map(n), ms)))(d)));
    }),
    (f.domain = function (d) {
      return arguments.length ? ((e = Array.from(d, gs)), u()) : e.slice();
    }),
    (f.range = function (d) {
      return arguments.length ? ((t = Array.from(d)), u()) : t.slice();
    }),
    (f.rangeRound = function (d) {
      return (t = Array.from(d)), (r = Zd), u();
    }),
    (f.clamp = function (d) {
      return arguments.length ? ((o = d ? !0 : jt), u()) : o !== jt;
    }),
    (f.interpolate = function (d) {
      return arguments.length ? ((r = d), u()) : r;
    }),
    (f.unknown = function (d) {
      return arguments.length ? ((i = d), f) : i;
    }),
    function (d, h) {
      return (n = d), (a = h), u();
    }
  );
}
function Qd() {
  return Tl()(jt, jt);
}
function X9(e) {
  return Math.abs((e = Math.round(e))) >= 1e21
    ? e.toLocaleString('en').replace(/,/g, '')
    : e.toString(10);
}
function ys(e, t) {
  if (
    (r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf('e')) < 0
  )
    return null;
  var r,
    n = e.slice(0, r);
  return [n.length > 1 ? n[0] + n.slice(2) : n, +e.slice(r + 1)];
}
function wa(e) {
  return (e = ys(Math.abs(e))), e ? e[1] : NaN;
}
function J9(e, t) {
  return function (r, n) {
    for (
      var a = r.length, i = [], o = 0, s = e[0], l = 0;
      a > 0 &&
      s > 0 &&
      (l + s + 1 > n && (s = Math.max(1, n - l)),
      i.push(r.substring((a -= s), a + s)),
      !((l += s + 1) > n));

    )
      s = e[(o = (o + 1) % e.length)];
    return i.reverse().join(t);
  };
}
function Z9(e) {
  return function (t) {
    return t.replace(/[0-9]/g, function (r) {
      return e[+r];
    });
  };
}
var Q9 =
  /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function bs(e) {
  if (!(t = Q9.exec(e))) throw new Error('invalid format: ' + e);
  var t;
  return new ep({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10],
  });
}
bs.prototype = ep.prototype;
function ep(e) {
  (this.fill = e.fill === void 0 ? ' ' : e.fill + ''),
    (this.align = e.align === void 0 ? '>' : e.align + ''),
    (this.sign = e.sign === void 0 ? '-' : e.sign + ''),
    (this.symbol = e.symbol === void 0 ? '' : e.symbol + ''),
    (this.zero = !!e.zero),
    (this.width = e.width === void 0 ? void 0 : +e.width),
    (this.comma = !!e.comma),
    (this.precision = e.precision === void 0 ? void 0 : +e.precision),
    (this.trim = !!e.trim),
    (this.type = e.type === void 0 ? '' : e.type + '');
}
ep.prototype.toString = function () {
  return (
    this.fill +
    this.align +
    this.sign +
    this.symbol +
    (this.zero ? '0' : '') +
    (this.width === void 0 ? '' : Math.max(1, this.width | 0)) +
    (this.comma ? ',' : '') +
    (this.precision === void 0 ? '' : '.' + Math.max(0, this.precision | 0)) +
    (this.trim ? '~' : '') +
    this.type
  );
};
function eU(e) {
  e: for (var t = e.length, r = 1, n = -1, a; r < t; ++r)
    switch (e[r]) {
      case '.':
        n = a = r;
        break;
      case '0':
        n === 0 && (n = r), (a = r);
        break;
      default:
        if (!+e[r]) break e;
        n > 0 && (n = 0);
        break;
    }
  return n > 0 ? e.slice(0, n) + e.slice(a + 1) : e;
}
var Vx;
function tU(e, t) {
  var r = ys(e, t);
  if (!r) return e + '';
  var n = r[0],
    a = r[1],
    i = a - (Vx = Math.max(-8, Math.min(8, Math.floor(a / 3))) * 3) + 1,
    o = n.length;
  return i === o
    ? n
    : i > o
    ? n + new Array(i - o + 1).join('0')
    : i > 0
    ? n.slice(0, i) + '.' + n.slice(i)
    : '0.' + new Array(1 - i).join('0') + ys(e, Math.max(0, t + i - 1))[0];
}
function Vm(e, t) {
  var r = ys(e, t);
  if (!r) return e + '';
  var n = r[0],
    a = r[1];
  return a < 0
    ? '0.' + new Array(-a).join('0') + n
    : n.length > a + 1
    ? n.slice(0, a + 1) + '.' + n.slice(a + 1)
    : n + new Array(a - n.length + 2).join('0');
}
const Gm = {
  '%': (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + '',
  d: X9,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Vm(e * 100, t),
  r: Vm,
  s: tU,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16),
};
function qm(e) {
  return e;
}
var Ym = Array.prototype.map,
  Km = [
    'y',
    'z',
    'a',
    'f',
    'p',
    'n',
    '\xB5',
    'm',
    '',
    'k',
    'M',
    'G',
    'T',
    'P',
    'E',
    'Z',
    'Y',
  ];
function rU(e) {
  var t =
      e.grouping === void 0 || e.thousands === void 0
        ? qm
        : J9(Ym.call(e.grouping, Number), e.thousands + ''),
    r = e.currency === void 0 ? '' : e.currency[0] + '',
    n = e.currency === void 0 ? '' : e.currency[1] + '',
    a = e.decimal === void 0 ? '.' : e.decimal + '',
    i = e.numerals === void 0 ? qm : Z9(Ym.call(e.numerals, String)),
    o = e.percent === void 0 ? '%' : e.percent + '',
    s = e.minus === void 0 ? '\u2212' : e.minus + '',
    l = e.nan === void 0 ? 'NaN' : e.nan + '';
  function c(f) {
    f = bs(f);
    var d = f.fill,
      h = f.align,
      v = f.sign,
      p = f.symbol,
      m = f.zero,
      g = f.width,
      _ = f.comma,
      x = f.precision,
      b = f.trim,
      w = f.type;
    w === 'n'
      ? ((_ = !0), (w = 'g'))
      : Gm[w] || (x === void 0 && (x = 12), (b = !0), (w = 'g')),
      (m || (d === '0' && h === '=')) && ((m = !0), (d = '0'), (h = '='));
    var O =
        p === '$'
          ? r
          : p === '#' && /[boxX]/.test(w)
          ? '0' + w.toLowerCase()
          : '',
      S = p === '$' ? n : /[%p]/.test(w) ? o : '',
      $ = Gm[w],
      A = /[defgprs%]/.test(w);
    x =
      x === void 0
        ? 6
        : /[gprs]/.test(w)
        ? Math.max(1, Math.min(21, x))
        : Math.max(0, Math.min(20, x));
    function P(C) {
      var k = O,
        T = S,
        D,
        j,
        R;
      if (w === 'c') (T = $(C) + T), (C = '');
      else {
        C = +C;
        var N = C < 0 || 1 / C < 0;
        if (
          ((C = isNaN(C) ? l : $(Math.abs(C), x)),
          b && (C = eU(C)),
          N && +C == 0 && v !== '+' && (N = !1),
          (k = (N ? (v === '(' ? v : s) : v === '-' || v === '(' ? '' : v) + k),
          (T =
            (w === 's' ? Km[8 + Vx / 3] : '') +
            T +
            (N && v === '(' ? ')' : '')),
          A)
        ) {
          for (D = -1, j = C.length; ++D < j; )
            if (((R = C.charCodeAt(D)), 48 > R || R > 57)) {
              (T = (R === 46 ? a + C.slice(D + 1) : C.slice(D)) + T),
                (C = C.slice(0, D));
              break;
            }
        }
      }
      _ && !m && (C = t(C, 1 / 0));
      var z = k.length + C.length + T.length,
        M = z < g ? new Array(g - z + 1).join(d) : '';
      switch (
        (_ && m && ((C = t(M + C, M.length ? g - T.length : 1 / 0)), (M = '')),
        h)
      ) {
        case '<':
          C = k + C + T + M;
          break;
        case '=':
          C = k + M + C + T;
          break;
        case '^':
          C = M.slice(0, (z = M.length >> 1)) + k + C + T + M.slice(z);
          break;
        default:
          C = M + k + C + T;
          break;
      }
      return i(C);
    }
    return (
      (P.toString = function () {
        return f + '';
      }),
      P
    );
  }
  function u(f, d) {
    var h = c(((f = bs(f)), (f.type = 'f'), f)),
      v = Math.max(-8, Math.min(8, Math.floor(wa(d) / 3))) * 3,
      p = Math.pow(10, -v),
      m = Km[8 + v / 3];
    return function (g) {
      return h(p * g) + m;
    };
  }
  return { format: c, formatPrefix: u };
}
var uo, tp, Gx;
nU({ thousands: ',', grouping: [3], currency: ['$', ''] });
function nU(e) {
  return (uo = rU(e)), (tp = uo.format), (Gx = uo.formatPrefix), uo;
}
function aU(e) {
  return Math.max(0, -wa(Math.abs(e)));
}
function iU(e, t) {
  return Math.max(
    0,
    Math.max(-8, Math.min(8, Math.floor(wa(t) / 3))) * 3 - wa(Math.abs(e))
  );
}
function oU(e, t) {
  return (
    (e = Math.abs(e)), (t = Math.abs(t) - e), Math.max(0, wa(t) - wa(e)) + 1
  );
}
function qx(e, t, r, n) {
  var a = rf(e, t, r),
    i;
  switch (((n = bs(n == null ? ',f' : n)), n.type)) {
    case 's': {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return (
        n.precision == null && !isNaN((i = iU(a, o))) && (n.precision = i),
        Gx(n, o)
      );
    }
    case '':
    case 'e':
    case 'g':
    case 'p':
    case 'r': {
      n.precision == null &&
        !isNaN((i = oU(a, Math.max(Math.abs(e), Math.abs(t))))) &&
        (n.precision = i - (n.type === 'e'));
      break;
    }
    case 'f':
    case '%': {
      n.precision == null &&
        !isNaN((i = aU(a))) &&
        (n.precision = i - (n.type === '%') * 2);
      break;
    }
  }
  return tp(n);
}
function yn(e) {
  var t = e.domain;
  return (
    (e.ticks = function (r) {
      var n = t();
      return tf(n[0], n[n.length - 1], r == null ? 10 : r);
    }),
    (e.tickFormat = function (r, n) {
      var a = t();
      return qx(a[0], a[a.length - 1], r == null ? 10 : r, n);
    }),
    (e.nice = function (r) {
      r == null && (r = 10);
      var n = t(),
        a = 0,
        i = n.length - 1,
        o = n[a],
        s = n[i],
        l,
        c,
        u = 10;
      for (
        s < o && ((c = o), (o = s), (s = c), (c = a), (a = i), (i = c));
        u-- > 0;

      ) {
        if (((c = Bx(o, s, r)), c === l)) return (n[a] = o), (n[i] = s), t(n);
        if (c > 0) (o = Math.floor(o / c) * c), (s = Math.ceil(s / c) * c);
        else if (c < 0) (o = Math.ceil(o * c) / c), (s = Math.floor(s * c) / c);
        else break;
        l = c;
      }
      return e;
    }),
    e
  );
}
function xs() {
  var e = Qd();
  return (
    (e.copy = function () {
      return qi(e, xs());
    }),
    vr.apply(e, arguments),
    yn(e)
  );
}
function Yx(e) {
  var t;
  function r(n) {
    return n == null || isNaN((n = +n)) ? t : n;
  }
  return (
    (r.invert = r),
    (r.domain = r.range =
      function (n) {
        return arguments.length ? ((e = Array.from(n, gs)), r) : e.slice();
      }),
    (r.unknown = function (n) {
      return arguments.length ? ((t = n), r) : t;
    }),
    (r.copy = function () {
      return Yx(e).unknown(t);
    }),
    (e = arguments.length ? Array.from(e, gs) : [0, 1]),
    yn(r)
  );
}
function Kx(e, t) {
  e = e.slice();
  var r = 0,
    n = e.length - 1,
    a = e[r],
    i = e[n],
    o;
  return (
    i < a && ((o = r), (r = n), (n = o), (o = a), (a = i), (i = o)),
    (e[r] = t.floor(a)),
    (e[n] = t.ceil(i)),
    e
  );
}
function Xm(e) {
  return Math.log(e);
}
function Jm(e) {
  return Math.exp(e);
}
function sU(e) {
  return -Math.log(-e);
}
function lU(e) {
  return -Math.exp(-e);
}
function cU(e) {
  return isFinite(e) ? +('1e' + e) : e < 0 ? 0 : e;
}
function uU(e) {
  return e === 10
    ? cU
    : e === Math.E
    ? Math.exp
    : function (t) {
        return Math.pow(e, t);
      };
}
function fU(e) {
  return e === Math.E
    ? Math.log
    : (e === 10 && Math.log10) ||
        (e === 2 && Math.log2) ||
        ((e = Math.log(e)),
        function (t) {
          return Math.log(t) / e;
        });
}
function Zm(e) {
  return function (t) {
    return -e(-t);
  };
}
function rp(e) {
  var t = e(Xm, Jm),
    r = t.domain,
    n = 10,
    a,
    i;
  function o() {
    return (
      (a = fU(n)),
      (i = uU(n)),
      r()[0] < 0 ? ((a = Zm(a)), (i = Zm(i)), e(sU, lU)) : e(Xm, Jm),
      t
    );
  }
  return (
    (t.base = function (s) {
      return arguments.length ? ((n = +s), o()) : n;
    }),
    (t.domain = function (s) {
      return arguments.length ? (r(s), o()) : r();
    }),
    (t.ticks = function (s) {
      var l = r(),
        c = l[0],
        u = l[l.length - 1],
        f;
      (f = u < c) && ((d = c), (c = u), (u = d));
      var d = a(c),
        h = a(u),
        v,
        p,
        m,
        g = s == null ? 10 : +s,
        _ = [];
      if (!(n % 1) && h - d < g) {
        if (((d = Math.floor(d)), (h = Math.ceil(h)), c > 0)) {
          for (; d <= h; ++d)
            for (p = 1, v = i(d); p < n; ++p)
              if (((m = v * p), !(m < c))) {
                if (m > u) break;
                _.push(m);
              }
        } else
          for (; d <= h; ++d)
            for (p = n - 1, v = i(d); p >= 1; --p)
              if (((m = v * p), !(m < c))) {
                if (m > u) break;
                _.push(m);
              }
        _.length * 2 < g && (_ = tf(c, u, g));
      } else _ = tf(d, h, Math.min(h - d, g)).map(i);
      return f ? _.reverse() : _;
    }),
    (t.tickFormat = function (s, l) {
      if (
        (l == null && (l = n === 10 ? '.0e' : ','),
        typeof l != 'function' && (l = tp(l)),
        s === 1 / 0)
      )
        return l;
      s == null && (s = 10);
      var c = Math.max(1, (n * s) / t.ticks().length);
      return function (u) {
        var f = u / i(Math.round(a(u)));
        return f * n < n - 0.5 && (f *= n), f <= c ? l(u) : '';
      };
    }),
    (t.nice = function () {
      return r(
        Kx(r(), {
          floor: function (s) {
            return i(Math.floor(a(s)));
          },
          ceil: function (s) {
            return i(Math.ceil(a(s)));
          },
        })
      );
    }),
    t
  );
}
function Xx() {
  var e = rp(Tl()).domain([1, 10]);
  return (
    (e.copy = function () {
      return qi(e, Xx()).base(e.base());
    }),
    vr.apply(e, arguments),
    e
  );
}
function Qm(e) {
  return function (t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function eg(e) {
  return function (t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function np(e) {
  var t = 1,
    r = e(Qm(t), eg(t));
  return (
    (r.constant = function (n) {
      return arguments.length ? e(Qm((t = +n)), eg(t)) : t;
    }),
    yn(r)
  );
}
function Jx() {
  var e = np(Tl());
  return (
    (e.copy = function () {
      return qi(e, Jx()).constant(e.constant());
    }),
    vr.apply(e, arguments)
  );
}
function tg(e) {
  return function (t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function dU(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function pU(e) {
  return e < 0 ? -e * e : e * e;
}
function ap(e) {
  var t = e(jt, jt),
    r = 1;
  function n() {
    return r === 1 ? e(jt, jt) : r === 0.5 ? e(dU, pU) : e(tg(r), tg(1 / r));
  }
  return (
    (t.exponent = function (a) {
      return arguments.length ? ((r = +a), n()) : r;
    }),
    yn(t)
  );
}
function ip() {
  var e = ap(Tl());
  return (
    (e.copy = function () {
      return qi(e, ip()).exponent(e.exponent());
    }),
    vr.apply(e, arguments),
    e
  );
}
function hU() {
  return ip.apply(null, arguments).exponent(0.5);
}
function rg(e) {
  return Math.sign(e) * e * e;
}
function vU(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function Zx() {
  var e = Qd(),
    t = [0, 1],
    r = !1,
    n;
  function a(i) {
    var o = vU(e(i));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return (
    (a.invert = function (i) {
      return e.invert(rg(i));
    }),
    (a.domain = function (i) {
      return arguments.length ? (e.domain(i), a) : e.domain();
    }),
    (a.range = function (i) {
      return arguments.length
        ? (e.range((t = Array.from(i, gs)).map(rg)), a)
        : t.slice();
    }),
    (a.rangeRound = function (i) {
      return a.range(i).round(!0);
    }),
    (a.round = function (i) {
      return arguments.length ? ((r = !!i), a) : r;
    }),
    (a.clamp = function (i) {
      return arguments.length ? (e.clamp(i), a) : e.clamp();
    }),
    (a.unknown = function (i) {
      return arguments.length ? ((n = i), a) : n;
    }),
    (a.copy = function () {
      return Zx(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
    }),
    vr.apply(a, arguments),
    yn(a)
  );
}
function Qx() {
  var e = [],
    t = [],
    r = [],
    n;
  function a() {
    var o = 0,
      s = Math.max(1, t.length);
    for (r = new Array(s - 1); ++o < s; ) r[o - 1] = _9(e, o / s);
    return i;
  }
  function i(o) {
    return o == null || isNaN((o = +o)) ? n : t[Vi(r, o)];
  }
  return (
    (i.invertExtent = function (o) {
      var s = t.indexOf(o);
      return s < 0
        ? [NaN, NaN]
        : [s > 0 ? r[s - 1] : e[0], s < r.length ? r[s] : e[e.length - 1]];
    }),
    (i.domain = function (o) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let s of o) s != null && !isNaN((s = +s)) && e.push(s);
      return e.sort(Hi), a();
    }),
    (i.range = function (o) {
      return arguments.length ? ((t = Array.from(o)), a()) : t.slice();
    }),
    (i.unknown = function (o) {
      return arguments.length ? ((n = o), i) : n;
    }),
    (i.quantiles = function () {
      return r.slice();
    }),
    (i.copy = function () {
      return Qx().domain(e).range(t).unknown(n);
    }),
    vr.apply(i, arguments)
  );
}
function e1() {
  var e = 0,
    t = 1,
    r = 1,
    n = [0.5],
    a = [0, 1],
    i;
  function o(l) {
    return l != null && l <= l ? a[Vi(n, l, 0, r)] : i;
  }
  function s() {
    var l = -1;
    for (n = new Array(r); ++l < r; )
      n[l] = ((l + 1) * t - (l - r) * e) / (r + 1);
    return o;
  }
  return (
    (o.domain = function (l) {
      return arguments.length
        ? (([e, t] = l), (e = +e), (t = +t), s())
        : [e, t];
    }),
    (o.range = function (l) {
      return arguments.length
        ? ((r = (a = Array.from(l)).length - 1), s())
        : a.slice();
    }),
    (o.invertExtent = function (l) {
      var c = a.indexOf(l);
      return c < 0
        ? [NaN, NaN]
        : c < 1
        ? [e, n[0]]
        : c >= r
        ? [n[r - 1], t]
        : [n[c - 1], n[c]];
    }),
    (o.unknown = function (l) {
      return arguments.length && (i = l), o;
    }),
    (o.thresholds = function () {
      return n.slice();
    }),
    (o.copy = function () {
      return e1().domain([e, t]).range(a).unknown(i);
    }),
    vr.apply(yn(o), arguments)
  );
}
function t1() {
  var e = [0.5],
    t = [0, 1],
    r,
    n = 1;
  function a(i) {
    return i != null && i <= i ? t[Vi(e, i, 0, n)] : r;
  }
  return (
    (a.domain = function (i) {
      return arguments.length
        ? ((e = Array.from(i)), (n = Math.min(e.length, t.length - 1)), a)
        : e.slice();
    }),
    (a.range = function (i) {
      return arguments.length
        ? ((t = Array.from(i)), (n = Math.min(e.length, t.length - 1)), a)
        : t.slice();
    }),
    (a.invertExtent = function (i) {
      var o = t.indexOf(i);
      return [e[o - 1], e[o]];
    }),
    (a.unknown = function (i) {
      return arguments.length ? ((r = i), a) : r;
    }),
    (a.copy = function () {
      return t1().domain(e).range(t).unknown(r);
    }),
    vr.apply(a, arguments)
  );
}
var Tc = new Date(),
  Mc = new Date();
function Ot(e, t, r, n) {
  function a(i) {
    return e((i = arguments.length === 0 ? new Date() : new Date(+i))), i;
  }
  return (
    (a.floor = function (i) {
      return e((i = new Date(+i))), i;
    }),
    (a.ceil = function (i) {
      return e((i = new Date(i - 1))), t(i, 1), e(i), i;
    }),
    (a.round = function (i) {
      var o = a(i),
        s = a.ceil(i);
      return i - o < s - i ? o : s;
    }),
    (a.offset = function (i, o) {
      return t((i = new Date(+i)), o == null ? 1 : Math.floor(o)), i;
    }),
    (a.range = function (i, o, s) {
      var l = [],
        c;
      if (
        ((i = a.ceil(i)),
        (s = s == null ? 1 : Math.floor(s)),
        !(i < o) || !(s > 0))
      )
        return l;
      do l.push((c = new Date(+i))), t(i, s), e(i);
      while (c < i && i < o);
      return l;
    }),
    (a.filter = function (i) {
      return Ot(
        function (o) {
          if (o >= o) for (; e(o), !i(o); ) o.setTime(o - 1);
        },
        function (o, s) {
          if (o >= o)
            if (s < 0) for (; ++s <= 0; ) for (; t(o, -1), !i(o); );
            else for (; --s >= 0; ) for (; t(o, 1), !i(o); );
        }
      );
    }),
    r &&
      ((a.count = function (i, o) {
        return (
          Tc.setTime(+i), Mc.setTime(+o), e(Tc), e(Mc), Math.floor(r(Tc, Mc))
        );
      }),
      (a.every = function (i) {
        return (
          (i = Math.floor(i)),
          !isFinite(i) || !(i > 0)
            ? null
            : i > 1
            ? a.filter(
                n
                  ? function (o) {
                      return n(o) % i === 0;
                    }
                  : function (o) {
                      return a.count(0, o) % i === 0;
                    }
              )
            : a
        );
      })),
    a
  );
}
var ws = Ot(
  function () {},
  function (e, t) {
    e.setTime(+e + t);
  },
  function (e, t) {
    return t - e;
  }
);
ws.every = function (e) {
  return (
    (e = Math.floor(e)),
    !isFinite(e) || !(e > 0)
      ? null
      : e > 1
      ? Ot(
          function (t) {
            t.setTime(Math.floor(t / e) * e);
          },
          function (t, r) {
            t.setTime(+t + r * e);
          },
          function (t, r) {
            return (r - t) / e;
          }
        )
      : ws
  );
};
const mU = ws;
ws.range;
const Ur = 1e3,
  sr = Ur * 60,
  Hr = sr * 60,
  Dn = Hr * 24,
  op = Dn * 7,
  ng = Dn * 30,
  Ic = Dn * 365;
var r1 = Ot(
  function (e) {
    e.setTime(e - e.getMilliseconds());
  },
  function (e, t) {
    e.setTime(+e + t * Ur);
  },
  function (e, t) {
    return (t - e) / Ur;
  },
  function (e) {
    return e.getUTCSeconds();
  }
);
const Qn = r1;
r1.range;
var n1 = Ot(
  function (e) {
    e.setTime(e - e.getMilliseconds() - e.getSeconds() * Ur);
  },
  function (e, t) {
    e.setTime(+e + t * sr);
  },
  function (e, t) {
    return (t - e) / sr;
  },
  function (e) {
    return e.getMinutes();
  }
);
const a1 = n1;
n1.range;
var i1 = Ot(
  function (e) {
    e.setTime(
      e - e.getMilliseconds() - e.getSeconds() * Ur - e.getMinutes() * sr
    );
  },
  function (e, t) {
    e.setTime(+e + t * Hr);
  },
  function (e, t) {
    return (t - e) / Hr;
  },
  function (e) {
    return e.getHours();
  }
);
const o1 = i1;
i1.range;
var s1 = Ot(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * sr) / Dn,
  (e) => e.getDate() - 1
);
const Ml = s1;
s1.range;
function zn(e) {
  return Ot(
    function (t) {
      t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)),
        t.setHours(0, 0, 0, 0);
    },
    function (t, r) {
      t.setDate(t.getDate() + r * 7);
    },
    function (t, r) {
      return (
        (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * sr) / op
      );
    }
  );
}
var Il = zn(0),
  _s = zn(1),
  gU = zn(2),
  yU = zn(3),
  _a = zn(4),
  bU = zn(5),
  xU = zn(6);
Il.range;
_s.range;
gU.range;
yU.range;
_a.range;
bU.range;
xU.range;
var l1 = Ot(
  function (e) {
    e.setDate(1), e.setHours(0, 0, 0, 0);
  },
  function (e, t) {
    e.setMonth(e.getMonth() + t);
  },
  function (e, t) {
    return (
      t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12
    );
  },
  function (e) {
    return e.getMonth();
  }
);
const c1 = l1;
l1.range;
var sp = Ot(
  function (e) {
    e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
  },
  function (e, t) {
    e.setFullYear(e.getFullYear() + t);
  },
  function (e, t) {
    return t.getFullYear() - e.getFullYear();
  },
  function (e) {
    return e.getFullYear();
  }
);
sp.every = function (e) {
  return !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : Ot(
        function (t) {
          t.setFullYear(Math.floor(t.getFullYear() / e) * e),
            t.setMonth(0, 1),
            t.setHours(0, 0, 0, 0);
        },
        function (t, r) {
          t.setFullYear(t.getFullYear() + r * e);
        }
      );
};
const jn = sp;
sp.range;
var u1 = Ot(
  function (e) {
    e.setUTCSeconds(0, 0);
  },
  function (e, t) {
    e.setTime(+e + t * sr);
  },
  function (e, t) {
    return (t - e) / sr;
  },
  function (e) {
    return e.getUTCMinutes();
  }
);
const f1 = u1;
u1.range;
var d1 = Ot(
  function (e) {
    e.setUTCMinutes(0, 0, 0);
  },
  function (e, t) {
    e.setTime(+e + t * Hr);
  },
  function (e, t) {
    return (t - e) / Hr;
  },
  function (e) {
    return e.getUTCHours();
  }
);
const p1 = d1;
d1.range;
var h1 = Ot(
  function (e) {
    e.setUTCHours(0, 0, 0, 0);
  },
  function (e, t) {
    e.setUTCDate(e.getUTCDate() + t);
  },
  function (e, t) {
    return (t - e) / Dn;
  },
  function (e) {
    return e.getUTCDate() - 1;
  }
);
const Rl = h1;
h1.range;
function Wn(e) {
  return Ot(
    function (t) {
      t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)),
        t.setUTCHours(0, 0, 0, 0);
    },
    function (t, r) {
      t.setUTCDate(t.getUTCDate() + r * 7);
    },
    function (t, r) {
      return (r - t) / op;
    }
  );
}
var Dl = Wn(0),
  Os = Wn(1),
  wU = Wn(2),
  _U = Wn(3),
  Oa = Wn(4),
  OU = Wn(5),
  SU = Wn(6);
Dl.range;
Os.range;
wU.range;
_U.range;
Oa.range;
OU.range;
SU.range;
var v1 = Ot(
  function (e) {
    e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
  },
  function (e, t) {
    e.setUTCMonth(e.getUTCMonth() + t);
  },
  function (e, t) {
    return (
      t.getUTCMonth() -
      e.getUTCMonth() +
      (t.getUTCFullYear() - e.getUTCFullYear()) * 12
    );
  },
  function (e) {
    return e.getUTCMonth();
  }
);
const m1 = v1;
v1.range;
var lp = Ot(
  function (e) {
    e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
  },
  function (e, t) {
    e.setUTCFullYear(e.getUTCFullYear() + t);
  },
  function (e, t) {
    return t.getUTCFullYear() - e.getUTCFullYear();
  },
  function (e) {
    return e.getUTCFullYear();
  }
);
lp.every = function (e) {
  return !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : Ot(
        function (t) {
          t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e),
            t.setUTCMonth(0, 1),
            t.setUTCHours(0, 0, 0, 0);
        },
        function (t, r) {
          t.setUTCFullYear(t.getUTCFullYear() + r * e);
        }
      );
};
const Nn = lp;
lp.range;
function g1(e, t, r, n, a, i) {
  const o = [
    [Qn, 1, Ur],
    [Qn, 5, 5 * Ur],
    [Qn, 15, 15 * Ur],
    [Qn, 30, 30 * Ur],
    [i, 1, sr],
    [i, 5, 5 * sr],
    [i, 15, 15 * sr],
    [i, 30, 30 * sr],
    [a, 1, Hr],
    [a, 3, 3 * Hr],
    [a, 6, 6 * Hr],
    [a, 12, 12 * Hr],
    [n, 1, Dn],
    [n, 2, 2 * Dn],
    [r, 1, op],
    [t, 1, ng],
    [t, 3, 3 * ng],
    [e, 1, Ic],
  ];
  function s(c, u, f) {
    const d = u < c;
    d && ([c, u] = [u, c]);
    const h = f && typeof f.range == 'function' ? f : l(c, u, f),
      v = h ? h.range(c, +u + 1) : [];
    return d ? v.reverse() : v;
  }
  function l(c, u, f) {
    const d = Math.abs(u - c) / f,
      h = Yd(([, , m]) => m).right(o, d);
    if (h === o.length) return e.every(rf(c / Ic, u / Ic, f));
    if (h === 0) return mU.every(Math.max(rf(c, u, f), 1));
    const [v, p] = o[d / o[h - 1][2] < o[h][2] / d ? h - 1 : h];
    return v.every(p);
  }
  return [s, l];
}
const [EU, $U] = g1(Nn, m1, Dl, Rl, p1, f1),
  [AU, CU] = g1(jn, c1, Il, Ml, o1, a1);
function Rc(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Dc(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Xa(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function PU(e) {
  var t = e.dateTime,
    r = e.date,
    n = e.time,
    a = e.periods,
    i = e.days,
    o = e.shortDays,
    s = e.months,
    l = e.shortMonths,
    c = Ja(a),
    u = Za(a),
    f = Ja(i),
    d = Za(i),
    h = Ja(o),
    v = Za(o),
    p = Ja(s),
    m = Za(s),
    g = Ja(l),
    _ = Za(l),
    x = {
      a: N,
      A: z,
      b: M,
      B: Y,
      c: null,
      d: cg,
      e: cg,
      f: ZU,
      g: lH,
      G: uH,
      H: KU,
      I: XU,
      j: JU,
      L: y1,
      m: QU,
      M: eH,
      p: Z,
      q: ne,
      Q: dg,
      s: pg,
      S: tH,
      u: rH,
      U: nH,
      V: aH,
      w: iH,
      W: oH,
      x: null,
      X: null,
      y: sH,
      Y: cH,
      Z: fH,
      '%': fg,
    },
    b = {
      a: ve,
      A: Se,
      b: le,
      B: Ee,
      c: null,
      d: ug,
      e: ug,
      f: vH,
      g: EH,
      G: AH,
      H: dH,
      I: pH,
      j: hH,
      L: x1,
      m: mH,
      M: gH,
      p: at,
      q: oe,
      Q: dg,
      s: pg,
      S: yH,
      u: bH,
      U: xH,
      V: wH,
      w: _H,
      W: OH,
      x: null,
      X: null,
      y: SH,
      Y: $H,
      Z: CH,
      '%': fg,
    },
    w = {
      a: P,
      A: C,
      b: k,
      B: T,
      c: D,
      d: sg,
      e: sg,
      f: VU,
      g: og,
      G: ig,
      H: lg,
      I: lg,
      j: zU,
      L: HU,
      m: FU,
      M: WU,
      p: A,
      q: BU,
      Q: qU,
      s: YU,
      S: UU,
      u: RU,
      U: DU,
      V: jU,
      w: IU,
      W: NU,
      x: j,
      X: R,
      y: og,
      Y: ig,
      Z: LU,
      '%': GU,
    };
  (x.x = O(r, x)),
    (x.X = O(n, x)),
    (x.c = O(t, x)),
    (b.x = O(r, b)),
    (b.X = O(n, b)),
    (b.c = O(t, b));
  function O(H, Q) {
    return function (ie) {
      var B = [],
        J = -1,
        de = 0,
        ce = H.length,
        Pe,
        it,
        F;
      for (ie instanceof Date || (ie = new Date(+ie)); ++J < ce; )
        H.charCodeAt(J) === 37 &&
          (B.push(H.slice(de, J)),
          (it = ag[(Pe = H.charAt(++J))]) != null
            ? (Pe = H.charAt(++J))
            : (it = Pe === 'e' ? ' ' : '0'),
          (F = Q[Pe]) && (Pe = F(ie, it)),
          B.push(Pe),
          (de = J + 1));
      return B.push(H.slice(de, J)), B.join('');
    };
  }
  function S(H, Q) {
    return function (ie) {
      var B = Xa(1900, void 0, 1),
        J = $(B, H, (ie += ''), 0),
        de,
        ce;
      if (J != ie.length) return null;
      if ('Q' in B) return new Date(B.Q);
      if ('s' in B) return new Date(B.s * 1e3 + ('L' in B ? B.L : 0));
      if (
        (Q && !('Z' in B) && (B.Z = 0),
        'p' in B && (B.H = (B.H % 12) + B.p * 12),
        B.m === void 0 && (B.m = 'q' in B ? B.q : 0),
        'V' in B)
      ) {
        if (B.V < 1 || B.V > 53) return null;
        'w' in B || (B.w = 1),
          'Z' in B
            ? ((de = Dc(Xa(B.y, 0, 1))),
              (ce = de.getUTCDay()),
              (de = ce > 4 || ce === 0 ? Os.ceil(de) : Os(de)),
              (de = Rl.offset(de, (B.V - 1) * 7)),
              (B.y = de.getUTCFullYear()),
              (B.m = de.getUTCMonth()),
              (B.d = de.getUTCDate() + ((B.w + 6) % 7)))
            : ((de = Rc(Xa(B.y, 0, 1))),
              (ce = de.getDay()),
              (de = ce > 4 || ce === 0 ? _s.ceil(de) : _s(de)),
              (de = Ml.offset(de, (B.V - 1) * 7)),
              (B.y = de.getFullYear()),
              (B.m = de.getMonth()),
              (B.d = de.getDate() + ((B.w + 6) % 7)));
      } else
        ('W' in B || 'U' in B) &&
          ('w' in B || (B.w = 'u' in B ? B.u % 7 : 'W' in B ? 1 : 0),
          (ce =
            'Z' in B
              ? Dc(Xa(B.y, 0, 1)).getUTCDay()
              : Rc(Xa(B.y, 0, 1)).getDay()),
          (B.m = 0),
          (B.d =
            'W' in B
              ? ((B.w + 6) % 7) + B.W * 7 - ((ce + 5) % 7)
              : B.w + B.U * 7 - ((ce + 6) % 7)));
      return 'Z' in B
        ? ((B.H += (B.Z / 100) | 0), (B.M += B.Z % 100), Dc(B))
        : Rc(B);
    };
  }
  function $(H, Q, ie, B) {
    for (var J = 0, de = Q.length, ce = ie.length, Pe, it; J < de; ) {
      if (B >= ce) return -1;
      if (((Pe = Q.charCodeAt(J++)), Pe === 37)) {
        if (
          ((Pe = Q.charAt(J++)),
          (it = w[Pe in ag ? Q.charAt(J++) : Pe]),
          !it || (B = it(H, ie, B)) < 0)
        )
          return -1;
      } else if (Pe != ie.charCodeAt(B++)) return -1;
    }
    return B;
  }
  function A(H, Q, ie) {
    var B = c.exec(Q.slice(ie));
    return B ? ((H.p = u.get(B[0].toLowerCase())), ie + B[0].length) : -1;
  }
  function P(H, Q, ie) {
    var B = h.exec(Q.slice(ie));
    return B ? ((H.w = v.get(B[0].toLowerCase())), ie + B[0].length) : -1;
  }
  function C(H, Q, ie) {
    var B = f.exec(Q.slice(ie));
    return B ? ((H.w = d.get(B[0].toLowerCase())), ie + B[0].length) : -1;
  }
  function k(H, Q, ie) {
    var B = g.exec(Q.slice(ie));
    return B ? ((H.m = _.get(B[0].toLowerCase())), ie + B[0].length) : -1;
  }
  function T(H, Q, ie) {
    var B = p.exec(Q.slice(ie));
    return B ? ((H.m = m.get(B[0].toLowerCase())), ie + B[0].length) : -1;
  }
  function D(H, Q, ie) {
    return $(H, t, Q, ie);
  }
  function j(H, Q, ie) {
    return $(H, r, Q, ie);
  }
  function R(H, Q, ie) {
    return $(H, n, Q, ie);
  }
  function N(H) {
    return o[H.getDay()];
  }
  function z(H) {
    return i[H.getDay()];
  }
  function M(H) {
    return l[H.getMonth()];
  }
  function Y(H) {
    return s[H.getMonth()];
  }
  function Z(H) {
    return a[+(H.getHours() >= 12)];
  }
  function ne(H) {
    return 1 + ~~(H.getMonth() / 3);
  }
  function ve(H) {
    return o[H.getUTCDay()];
  }
  function Se(H) {
    return i[H.getUTCDay()];
  }
  function le(H) {
    return l[H.getUTCMonth()];
  }
  function Ee(H) {
    return s[H.getUTCMonth()];
  }
  function at(H) {
    return a[+(H.getUTCHours() >= 12)];
  }
  function oe(H) {
    return 1 + ~~(H.getUTCMonth() / 3);
  }
  return {
    format: function (H) {
      var Q = O((H += ''), x);
      return (
        (Q.toString = function () {
          return H;
        }),
        Q
      );
    },
    parse: function (H) {
      var Q = S((H += ''), !1);
      return (
        (Q.toString = function () {
          return H;
        }),
        Q
      );
    },
    utcFormat: function (H) {
      var Q = O((H += ''), b);
      return (
        (Q.toString = function () {
          return H;
        }),
        Q
      );
    },
    utcParse: function (H) {
      var Q = S((H += ''), !0);
      return (
        (Q.toString = function () {
          return H;
        }),
        Q
      );
    },
  };
}
var ag = { '-': '', _: ' ', 0: '0' },
  St = /^\s*\d+/,
  kU = /^%/,
  TU = /[\\^$*+?|[\]().{}]/g;
function Ie(e, t, r) {
  var n = e < 0 ? '-' : '',
    a = (n ? -e : e) + '',
    i = a.length;
  return n + (i < r ? new Array(r - i + 1).join(t) + a : a);
}
function MU(e) {
  return e.replace(TU, '\\$&');
}
function Ja(e) {
  return new RegExp('^(?:' + e.map(MU).join('|') + ')', 'i');
}
function Za(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function IU(e, t, r) {
  var n = St.exec(t.slice(r, r + 1));
  return n ? ((e.w = +n[0]), r + n[0].length) : -1;
}
function RU(e, t, r) {
  var n = St.exec(t.slice(r, r + 1));
  return n ? ((e.u = +n[0]), r + n[0].length) : -1;
}
function DU(e, t, r) {
  var n = St.exec(t.slice(r, r + 2));
  return n ? ((e.U = +n[0]), r + n[0].length) : -1;
}
function jU(e, t, r) {
  var n = St.exec(t.slice(r, r + 2));
  return n ? ((e.V = +n[0]), r + n[0].length) : -1;
}
function NU(e, t, r) {
  var n = St.exec(t.slice(r, r + 2));
  return n ? ((e.W = +n[0]), r + n[0].length) : -1;
}
function ig(e, t, r) {
  var n = St.exec(t.slice(r, r + 4));
  return n ? ((e.y = +n[0]), r + n[0].length) : -1;
}
function og(e, t, r) {
  var n = St.exec(t.slice(r, r + 2));
  return n ? ((e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3)), r + n[0].length) : -1;
}
function LU(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n
    ? ((e.Z = n[1] ? 0 : -(n[2] + (n[3] || '00'))), r + n[0].length)
    : -1;
}
function BU(e, t, r) {
  var n = St.exec(t.slice(r, r + 1));
  return n ? ((e.q = n[0] * 3 - 3), r + n[0].length) : -1;
}
function FU(e, t, r) {
  var n = St.exec(t.slice(r, r + 2));
  return n ? ((e.m = n[0] - 1), r + n[0].length) : -1;
}
function sg(e, t, r) {
  var n = St.exec(t.slice(r, r + 2));
  return n ? ((e.d = +n[0]), r + n[0].length) : -1;
}
function zU(e, t, r) {
  var n = St.exec(t.slice(r, r + 3));
  return n ? ((e.m = 0), (e.d = +n[0]), r + n[0].length) : -1;
}
function lg(e, t, r) {
  var n = St.exec(t.slice(r, r + 2));
  return n ? ((e.H = +n[0]), r + n[0].length) : -1;
}
function WU(e, t, r) {
  var n = St.exec(t.slice(r, r + 2));
  return n ? ((e.M = +n[0]), r + n[0].length) : -1;
}
function UU(e, t, r) {
  var n = St.exec(t.slice(r, r + 2));
  return n ? ((e.S = +n[0]), r + n[0].length) : -1;
}
function HU(e, t, r) {
  var n = St.exec(t.slice(r, r + 3));
  return n ? ((e.L = +n[0]), r + n[0].length) : -1;
}
function VU(e, t, r) {
  var n = St.exec(t.slice(r, r + 6));
  return n ? ((e.L = Math.floor(n[0] / 1e3)), r + n[0].length) : -1;
}
function GU(e, t, r) {
  var n = kU.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function qU(e, t, r) {
  var n = St.exec(t.slice(r));
  return n ? ((e.Q = +n[0]), r + n[0].length) : -1;
}
function YU(e, t, r) {
  var n = St.exec(t.slice(r));
  return n ? ((e.s = +n[0]), r + n[0].length) : -1;
}
function cg(e, t) {
  return Ie(e.getDate(), t, 2);
}
function KU(e, t) {
  return Ie(e.getHours(), t, 2);
}
function XU(e, t) {
  return Ie(e.getHours() % 12 || 12, t, 2);
}
function JU(e, t) {
  return Ie(1 + Ml.count(jn(e), e), t, 3);
}
function y1(e, t) {
  return Ie(e.getMilliseconds(), t, 3);
}
function ZU(e, t) {
  return y1(e, t) + '000';
}
function QU(e, t) {
  return Ie(e.getMonth() + 1, t, 2);
}
function eH(e, t) {
  return Ie(e.getMinutes(), t, 2);
}
function tH(e, t) {
  return Ie(e.getSeconds(), t, 2);
}
function rH(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function nH(e, t) {
  return Ie(Il.count(jn(e) - 1, e), t, 2);
}
function b1(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? _a(e) : _a.ceil(e);
}
function aH(e, t) {
  return (e = b1(e)), Ie(_a.count(jn(e), e) + (jn(e).getDay() === 4), t, 2);
}
function iH(e) {
  return e.getDay();
}
function oH(e, t) {
  return Ie(_s.count(jn(e) - 1, e), t, 2);
}
function sH(e, t) {
  return Ie(e.getFullYear() % 100, t, 2);
}
function lH(e, t) {
  return (e = b1(e)), Ie(e.getFullYear() % 100, t, 2);
}
function cH(e, t) {
  return Ie(e.getFullYear() % 1e4, t, 4);
}
function uH(e, t) {
  var r = e.getDay();
  return (
    (e = r >= 4 || r === 0 ? _a(e) : _a.ceil(e)),
    Ie(e.getFullYear() % 1e4, t, 4)
  );
}
function fH(e) {
  var t = e.getTimezoneOffset();
  return (
    (t > 0 ? '-' : ((t *= -1), '+')) +
    Ie((t / 60) | 0, '0', 2) +
    Ie(t % 60, '0', 2)
  );
}
function ug(e, t) {
  return Ie(e.getUTCDate(), t, 2);
}
function dH(e, t) {
  return Ie(e.getUTCHours(), t, 2);
}
function pH(e, t) {
  return Ie(e.getUTCHours() % 12 || 12, t, 2);
}
function hH(e, t) {
  return Ie(1 + Rl.count(Nn(e), e), t, 3);
}
function x1(e, t) {
  return Ie(e.getUTCMilliseconds(), t, 3);
}
function vH(e, t) {
  return x1(e, t) + '000';
}
function mH(e, t) {
  return Ie(e.getUTCMonth() + 1, t, 2);
}
function gH(e, t) {
  return Ie(e.getUTCMinutes(), t, 2);
}
function yH(e, t) {
  return Ie(e.getUTCSeconds(), t, 2);
}
function bH(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function xH(e, t) {
  return Ie(Dl.count(Nn(e) - 1, e), t, 2);
}
function w1(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Oa(e) : Oa.ceil(e);
}
function wH(e, t) {
  return (e = w1(e)), Ie(Oa.count(Nn(e), e) + (Nn(e).getUTCDay() === 4), t, 2);
}
function _H(e) {
  return e.getUTCDay();
}
function OH(e, t) {
  return Ie(Os.count(Nn(e) - 1, e), t, 2);
}
function SH(e, t) {
  return Ie(e.getUTCFullYear() % 100, t, 2);
}
function EH(e, t) {
  return (e = w1(e)), Ie(e.getUTCFullYear() % 100, t, 2);
}
function $H(e, t) {
  return Ie(e.getUTCFullYear() % 1e4, t, 4);
}
function AH(e, t) {
  var r = e.getUTCDay();
  return (
    (e = r >= 4 || r === 0 ? Oa(e) : Oa.ceil(e)),
    Ie(e.getUTCFullYear() % 1e4, t, 4)
  );
}
function CH() {
  return '+0000';
}
function fg() {
  return '%';
}
function dg(e) {
  return +e;
}
function pg(e) {
  return Math.floor(+e / 1e3);
}
var Yn, _1, O1;
PH({
  dateTime: '%x, %X',
  date: '%-m/%-d/%Y',
  time: '%-I:%M:%S %p',
  periods: ['AM', 'PM'],
  days: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  shortMonths: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
});
function PH(e) {
  return (
    (Yn = PU(e)),
    (_1 = Yn.format),
    Yn.parse,
    (O1 = Yn.utcFormat),
    Yn.utcParse,
    Yn
  );
}
function kH(e) {
  return new Date(e);
}
function TH(e) {
  return e instanceof Date ? +e : +new Date(+e);
}
function cp(e, t, r, n, a, i, o, s, l, c) {
  var u = Qd(),
    f = u.invert,
    d = u.domain,
    h = c('.%L'),
    v = c(':%S'),
    p = c('%I:%M'),
    m = c('%I %p'),
    g = c('%a %d'),
    _ = c('%b %d'),
    x = c('%B'),
    b = c('%Y');
  function w(O) {
    return (
      l(O) < O
        ? h
        : s(O) < O
        ? v
        : o(O) < O
        ? p
        : i(O) < O
        ? m
        : n(O) < O
        ? a(O) < O
          ? g
          : _
        : r(O) < O
        ? x
        : b
    )(O);
  }
  return (
    (u.invert = function (O) {
      return new Date(f(O));
    }),
    (u.domain = function (O) {
      return arguments.length ? d(Array.from(O, TH)) : d().map(kH);
    }),
    (u.ticks = function (O) {
      var S = d();
      return e(S[0], S[S.length - 1], O == null ? 10 : O);
    }),
    (u.tickFormat = function (O, S) {
      return S == null ? w : c(S);
    }),
    (u.nice = function (O) {
      var S = d();
      return (
        (!O || typeof O.range != 'function') &&
          (O = t(S[0], S[S.length - 1], O == null ? 10 : O)),
        O ? d(Kx(S, O)) : u
      );
    }),
    (u.copy = function () {
      return qi(u, cp(e, t, r, n, a, i, o, s, l, c));
    }),
    u
  );
}
function MH() {
  return vr.apply(
    cp(AU, CU, jn, c1, Il, Ml, o1, a1, Qn, _1).domain([
      new Date(2e3, 0, 1),
      new Date(2e3, 0, 2),
    ]),
    arguments
  );
}
function IH() {
  return vr.apply(
    cp(EU, $U, Nn, m1, Dl, Rl, p1, f1, Qn, O1).domain([
      Date.UTC(2e3, 0, 1),
      Date.UTC(2e3, 0, 2),
    ]),
    arguments
  );
}
function jl() {
  var e = 0,
    t = 1,
    r,
    n,
    a,
    i,
    o = jt,
    s = !1,
    l;
  function c(f) {
    return f == null || isNaN((f = +f))
      ? l
      : o(
          a === 0
            ? 0.5
            : ((f = (i(f) - r) * a), s ? Math.max(0, Math.min(1, f)) : f)
        );
  }
  (c.domain = function (f) {
    return arguments.length
      ? (([e, t] = f),
        (r = i((e = +e))),
        (n = i((t = +t))),
        (a = r === n ? 0 : 1 / (n - r)),
        c)
      : [e, t];
  }),
    (c.clamp = function (f) {
      return arguments.length ? ((s = !!f), c) : s;
    }),
    (c.interpolator = function (f) {
      return arguments.length ? ((o = f), c) : o;
    });
  function u(f) {
    return function (d) {
      var h, v;
      return arguments.length ? (([h, v] = d), (o = f(h, v)), c) : [o(0), o(1)];
    };
  }
  return (
    (c.range = u(Na)),
    (c.rangeRound = u(Zd)),
    (c.unknown = function (f) {
      return arguments.length ? ((l = f), c) : l;
    }),
    function (f) {
      return (
        (i = f), (r = f(e)), (n = f(t)), (a = r === n ? 0 : 1 / (n - r)), c
      );
    }
  );
}
function bn(e, t) {
  return t
    .domain(e.domain())
    .interpolator(e.interpolator())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function S1() {
  var e = yn(jl()(jt));
  return (
    (e.copy = function () {
      return bn(e, S1());
    }),
    Zr.apply(e, arguments)
  );
}
function E1() {
  var e = rp(jl()).domain([1, 10]);
  return (
    (e.copy = function () {
      return bn(e, E1()).base(e.base());
    }),
    Zr.apply(e, arguments)
  );
}
function $1() {
  var e = np(jl());
  return (
    (e.copy = function () {
      return bn(e, $1()).constant(e.constant());
    }),
    Zr.apply(e, arguments)
  );
}
function up() {
  var e = ap(jl());
  return (
    (e.copy = function () {
      return bn(e, up()).exponent(e.exponent());
    }),
    Zr.apply(e, arguments)
  );
}
function RH() {
  return up.apply(null, arguments).exponent(0.5);
}
function A1() {
  var e = [],
    t = jt;
  function r(n) {
    if (n != null && !isNaN((n = +n)))
      return t((Vi(e, n, 1) - 1) / (e.length - 1));
  }
  return (
    (r.domain = function (n) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let a of n) a != null && !isNaN((a = +a)) && e.push(a);
      return e.sort(Hi), r;
    }),
    (r.interpolator = function (n) {
      return arguments.length ? ((t = n), r) : t;
    }),
    (r.range = function () {
      return e.map((n, a) => t(a / (e.length - 1)));
    }),
    (r.quantiles = function (n) {
      return Array.from({ length: n + 1 }, (a, i) => w9(e, i / n));
    }),
    (r.copy = function () {
      return A1(t).domain(e);
    }),
    Zr.apply(r, arguments)
  );
}
function Nl() {
  var e = 0,
    t = 0.5,
    r = 1,
    n = 1,
    a,
    i,
    o,
    s,
    l,
    c = jt,
    u,
    f = !1,
    d;
  function h(p) {
    return isNaN((p = +p))
      ? d
      : ((p = 0.5 + ((p = +u(p)) - i) * (n * p < n * i ? s : l)),
        c(f ? Math.max(0, Math.min(1, p)) : p));
  }
  (h.domain = function (p) {
    return arguments.length
      ? (([e, t, r] = p),
        (a = u((e = +e))),
        (i = u((t = +t))),
        (o = u((r = +r))),
        (s = a === i ? 0 : 0.5 / (i - a)),
        (l = i === o ? 0 : 0.5 / (o - i)),
        (n = i < a ? -1 : 1),
        h)
      : [e, t, r];
  }),
    (h.clamp = function (p) {
      return arguments.length ? ((f = !!p), h) : f;
    }),
    (h.interpolator = function (p) {
      return arguments.length ? ((c = p), h) : c;
    });
  function v(p) {
    return function (m) {
      var g, _, x;
      return arguments.length
        ? (([g, _, x] = m), (c = V9(p, [g, _, x])), h)
        : [c(0), c(0.5), c(1)];
    };
  }
  return (
    (h.range = v(Na)),
    (h.rangeRound = v(Zd)),
    (h.unknown = function (p) {
      return arguments.length ? ((d = p), h) : d;
    }),
    function (p) {
      return (
        (u = p),
        (a = p(e)),
        (i = p(t)),
        (o = p(r)),
        (s = a === i ? 0 : 0.5 / (i - a)),
        (l = i === o ? 0 : 0.5 / (o - i)),
        (n = i < a ? -1 : 1),
        h
      );
    }
  );
}
function C1() {
  var e = yn(Nl()(jt));
  return (
    (e.copy = function () {
      return bn(e, C1());
    }),
    Zr.apply(e, arguments)
  );
}
function P1() {
  var e = rp(Nl()).domain([0.1, 1, 10]);
  return (
    (e.copy = function () {
      return bn(e, P1()).base(e.base());
    }),
    Zr.apply(e, arguments)
  );
}
function k1() {
  var e = np(Nl());
  return (
    (e.copy = function () {
      return bn(e, k1()).constant(e.constant());
    }),
    Zr.apply(e, arguments)
  );
}
function fp() {
  var e = ap(Nl());
  return (
    (e.copy = function () {
      return bn(e, fp()).exponent(e.exponent());
    }),
    Zr.apply(e, arguments)
  );
}
function DH() {
  return fp.apply(null, arguments).exponent(0.5);
}
const hg = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      scaleBand: Ci,
      scalePoint: fi,
      scaleIdentity: Yx,
      scaleLinear: xs,
      scaleLog: Xx,
      scaleSymlog: Jx,
      scaleOrdinal: Kd,
      scaleImplicit: nf,
      scalePow: ip,
      scaleSqrt: hU,
      scaleRadial: Zx,
      scaleQuantile: Qx,
      scaleQuantize: e1,
      scaleThreshold: t1,
      scaleTime: MH,
      scaleUtc: IH,
      scaleSequential: S1,
      scaleSequentialLog: E1,
      scaleSequentialPow: up,
      scaleSequentialSqrt: RH,
      scaleSequentialSymlog: $1,
      scaleSequentialQuantile: A1,
      scaleDiverging: C1,
      scaleDivergingLog: P1,
      scaleDivergingPow: fp,
      scaleDivergingSqrt: DH,
      scaleDivergingSymlog: k1,
      tickFormat: qx,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
function vg(e) {
  return BH(e) || LH(e) || NH(e) || jH();
}
function jH() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function NH(e, t) {
  if (!!e) {
    if (typeof e == 'string') return lf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === 'Object' && e.constructor && (r = e.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return lf(e, t);
  }
}
function LH(e) {
  if (typeof Symbol < 'u' && Symbol.iterator in Object(e)) return Array.from(e);
}
function BH(e) {
  if (Array.isArray(e)) return lf(e);
}
function lf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function mg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Dt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? mg(Object(r), !0).forEach(function (n) {
          ca(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : mg(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function ca(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Dr(e, t, r) {
  return ge(e) || ge(t) ? r : ht(t) ? Qt(e, t, r) : pe(t) ? t(e) : r;
}
function Ss(e, t, r, n) {
  var a = W8(e, function (s) {
    return Dr(s, t);
  });
  if (r === 'number') {
    var i = a.filter(function (s) {
      return K(s) || parseFloat(s);
    });
    return i.length ? [Cl(i), Al(i)] : [1 / 0, -1 / 0];
  }
  var o = n
    ? a.filter(function (s) {
        return !ge(s);
      })
    : a;
  return o.map(function (s) {
    return ht(s) || s instanceof Date ? s : '';
  });
}
var FH = function (t) {
    var r,
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
      a = arguments.length > 2 ? arguments[2] : void 0,
      i = arguments.length > 3 ? arguments[3] : void 0,
      o = -1,
      s = (r = n == null ? void 0 : n.length) !== null && r !== void 0 ? r : 0;
    if (s > 1) {
      if (
        i &&
        i.axisType === 'angleAxis' &&
        Math.abs(Math.abs(i.range[1] - i.range[0]) - 360) <= 1e-6
      )
        for (var l = i.range, c = 0; c < s; c++) {
          var u = c > 0 ? a[c - 1].coordinate : a[s - 1].coordinate,
            f = a[c].coordinate,
            d = c >= s - 1 ? a[0].coordinate : a[c + 1].coordinate,
            h = void 0;
          if (or(f - u) !== or(d - f)) {
            var v = [];
            if (or(d - f) === or(l[1] - l[0])) {
              h = d;
              var p = f + l[1] - l[0];
              (v[0] = Math.min(p, (p + u) / 2)),
                (v[1] = Math.max(p, (p + u) / 2));
            } else {
              h = u;
              var m = d + l[1] - l[0];
              (v[0] = Math.min(f, (m + f) / 2)),
                (v[1] = Math.max(f, (m + f) / 2));
            }
            var g = [Math.min(f, (h + f) / 2), Math.max(f, (h + f) / 2)];
            if ((t > g[0] && t <= g[1]) || (t >= v[0] && t <= v[1])) {
              o = a[c].index;
              break;
            }
          } else {
            var _ = Math.min(u, d),
              x = Math.max(u, d);
            if (t > (_ + f) / 2 && t <= (x + f) / 2) {
              o = a[c].index;
              break;
            }
          }
        }
      else
        for (var b = 0; b < s; b++)
          if (
            (b === 0 && t <= (n[b].coordinate + n[b + 1].coordinate) / 2) ||
            (b > 0 &&
              b < s - 1 &&
              t > (n[b].coordinate + n[b - 1].coordinate) / 2 &&
              t <= (n[b].coordinate + n[b + 1].coordinate) / 2) ||
            (b === s - 1 && t > (n[b].coordinate + n[b - 1].coordinate) / 2)
          ) {
            o = n[b].index;
            break;
          }
    } else o = 0;
    return o;
  },
  dp = function (t) {
    var r = t,
      n = r.type.displayName,
      a = t.props,
      i = a.stroke,
      o = a.fill,
      s;
    switch (n) {
      case 'Line':
        s = i;
        break;
      case 'Area':
      case 'Radar':
        s = i && i !== 'none' ? i : o;
        break;
      default:
        s = o;
        break;
    }
    return s;
  },
  T1 = function (t) {
    var r = t.children,
      n = t.formattedGraphicalItems,
      a = t.legendWidth,
      i = t.legendContent,
      o = Wr(r, Si.displayName);
    if (!o) return null;
    var s;
    return (
      o.props && o.props.payload
        ? (s = o.props && o.props.payload)
        : i === 'children'
        ? (s = (n || []).reduce(function (l, c) {
            var u = c.item,
              f = c.props,
              d = f.sectors || f.data || [];
            return l.concat(
              d.map(function (h) {
                return {
                  type: o.props.iconType || u.props.legendType,
                  value: h.name,
                  color: h.fill,
                  payload: h,
                };
              })
            );
          }, []))
        : (s = (n || []).map(function (l) {
            var c = l.item,
              u = c.props,
              f = u.dataKey,
              d = u.name,
              h = u.legendType,
              v = u.hide;
            return {
              inactive: v,
              dataKey: f,
              type: o.props.iconType || h || 'square',
              color: dp(c),
              value: d || f,
              payload: c.props,
            };
          })),
      Dt(
        Dt(Dt({}, o.props), Si.getWithHeight(o, a)),
        {},
        { payload: s, item: o }
      )
    );
  },
  zH = function (t) {
    var r = t.barSize,
      n = t.stackGroups,
      a = n === void 0 ? {} : n;
    if (!a) return {};
    for (var i = {}, o = Object.keys(a), s = 0, l = o.length; s < l; s++)
      for (
        var c = a[o[s]].stackGroups, u = Object.keys(c), f = 0, d = u.length;
        f < d;
        f++
      ) {
        var h = c[u[f]],
          v = h.items,
          p = h.cateAxisId,
          m = v.filter(function (x) {
            return cn(x.type).indexOf('Bar') >= 0;
          });
        if (m && m.length) {
          var g = m[0].props.barSize,
            _ = m[0].props[p];
          i[_] || (i[_] = []),
            i[_].push({
              item: m[0],
              stackList: m.slice(1),
              barSize: ge(g) ? r : g,
            });
        }
      }
    return i;
  },
  WH = function (t) {
    var r = t.barGap,
      n = t.barCategoryGap,
      a = t.bandSize,
      i = t.sizeList,
      o = i === void 0 ? [] : i,
      s = t.maxBarSize,
      l = o.length;
    if (l < 1) return null;
    var c = ya(r, a, 0, !0),
      u;
    if (o[0].barSize === +o[0].barSize) {
      var f = !1,
        d = a / l,
        h = o.reduce(function (x, b) {
          return x + b.barSize || 0;
        }, 0);
      (h += (l - 1) * c),
        h >= a && ((h -= (l - 1) * c), (c = 0)),
        h >= a && d > 0 && ((f = !0), (d *= 0.9), (h = l * d));
      var v = ((a - h) / 2) >> 0,
        p = { offset: v - c, size: 0 };
      u = o.reduce(function (x, b) {
        var w = [].concat(vg(x), [
          {
            item: b.item,
            position: {
              offset: p.offset + p.size + c,
              size: f ? d : b.barSize,
            },
          },
        ]);
        return (
          (p = w[w.length - 1].position),
          b.stackList &&
            b.stackList.length &&
            b.stackList.forEach(function (O) {
              w.push({ item: O, position: p });
            }),
          w
        );
      }, []);
    } else {
      var m = ya(n, a, 0, !0);
      a - 2 * m - (l - 1) * c <= 0 && (c = 0);
      var g = (a - 2 * m - (l - 1) * c) / l;
      g > 1 && (g >>= 0);
      var _ = s === +s ? Math.min(g, s) : g;
      u = o.reduce(function (x, b, w) {
        var O = [].concat(vg(x), [
          {
            item: b.item,
            position: { offset: m + (g + c) * w + (g - _) / 2, size: _ },
          },
        ]);
        return (
          b.stackList &&
            b.stackList.length &&
            b.stackList.forEach(function (S) {
              O.push({ item: S, position: O[O.length - 1].position });
            }),
          O
        );
      }, []);
    }
    return u;
  },
  UH = function (t, r, n, a) {
    var i = n.children,
      o = n.width,
      s = n.margin,
      l = o - (s.left || 0) - (s.right || 0),
      c = T1({ children: i, legendWidth: l }),
      u = t;
    if (c) {
      var f = a || {},
        d = c.align,
        h = c.verticalAlign,
        v = c.layout;
      (v === 'vertical' || (v === 'horizontal' && h === 'center')) &&
        K(t[d]) &&
        (u = Dt(Dt({}, t), {}, ca({}, d, u[d] + (f.width || 0)))),
        (v === 'horizontal' || (v === 'vertical' && d === 'center')) &&
          K(t[h]) &&
          (u = Dt(Dt({}, t), {}, ca({}, h, u[h] + (f.height || 0))));
    }
    return u;
  },
  HH = function (t, r, n) {
    return ge(r)
      ? !0
      : t === 'horizontal'
      ? r === 'yAxis'
      : t === 'vertical' || n === 'x'
      ? r === 'xAxis'
      : n === 'y'
      ? r === 'yAxis'
      : !0;
  },
  M1 = function (t, r, n, a, i) {
    var o = r.props.children,
      s = br(o, 'ErrorBar').filter(function (c) {
        return HH(a, i, c.props.direction);
      });
    if (s && s.length) {
      var l = s.map(function (c) {
        return c.props.dataKey;
      });
      return t.reduce(
        function (c, u) {
          var f = Dr(u, n, 0),
            d = Me(f) ? [Cl(f), Al(f)] : [f, f],
            h = l.reduce(
              function (v, p) {
                var m = Dr(u, p, 0),
                  g = d[0] - Math.abs(Me(m) ? m[0] : m),
                  _ = d[1] + Math.abs(Me(m) ? m[1] : m);
                return [Math.min(g, v[0]), Math.max(_, v[1])];
              },
              [1 / 0, -1 / 0]
            );
          return [Math.min(h[0], c[0]), Math.max(h[1], c[1])];
        },
        [1 / 0, -1 / 0]
      );
    }
    return null;
  },
  VH = function (t, r, n, a, i) {
    var o = r
      .map(function (s) {
        return M1(t, s, n, i, a);
      })
      .filter(function (s) {
        return !ge(s);
      });
    return o && o.length
      ? o.reduce(
          function (s, l) {
            return [Math.min(s[0], l[0]), Math.max(s[1], l[1])];
          },
          [1 / 0, -1 / 0]
        )
      : null;
  },
  I1 = function (t, r, n, a, i) {
    var o = r.map(function (l) {
      var c = l.props.dataKey;
      return (n === 'number' && c && M1(t, l, c, a)) || Ss(t, c, n, i);
    });
    if (n === 'number')
      return o.reduce(
        function (l, c) {
          return [Math.min(l[0], c[0]), Math.max(l[1], c[1])];
        },
        [1 / 0, -1 / 0]
      );
    var s = {};
    return o.reduce(function (l, c) {
      for (var u = 0, f = c.length; u < f; u++)
        s[c[u]] || ((s[c[u]] = !0), l.push(c[u]));
      return l;
    }, []);
  },
  R1 = function (t, r) {
    return (
      (t === 'horizontal' && r === 'xAxis') ||
      (t === 'vertical' && r === 'yAxis') ||
      (t === 'centric' && r === 'angleAxis') ||
      (t === 'radial' && r === 'radiusAxis')
    );
  },
  gg = function (t, r, n) {
    var a,
      i,
      o = t.map(function (s) {
        return (
          s.coordinate === r && (a = !0),
          s.coordinate === n && (i = !0),
          s.coordinate
        );
      });
    return a || o.push(r), i || o.push(n), o;
  },
  rn = function (t, r, n) {
    if (!t) return null;
    var a = t.scale,
      i = t.duplicateDomain,
      o = t.type,
      s = t.range,
      l = t.realScaleType === 'scaleBand' ? a.bandwidth() / 2 : 2,
      c = (r || n) && o === 'category' && a.bandwidth ? a.bandwidth() / l : 0;
    return (
      (c = t.axisType === 'angleAxis' ? or(s[0] - s[1]) * 2 * c : c),
      r && (t.ticks || t.niceTicks)
        ? (t.ticks || t.niceTicks).map(function (u) {
            var f = i ? i.indexOf(u) : u;
            return { coordinate: a(f) + c, value: u, offset: c };
          })
        : t.isCategorical && t.categoricalDomain
        ? t.categoricalDomain.map(function (u, f) {
            return { coordinate: a(u) + c, value: u, index: f, offset: c };
          })
        : a.ticks && !n
        ? a.ticks(t.tickCount).map(function (u) {
            return { coordinate: a(u) + c, value: u, offset: c };
          })
        : a.domain().map(function (u, f) {
            return {
              coordinate: a(u) + c,
              value: i ? i[u] : u,
              index: f,
              offset: c,
            };
          })
    );
  },
  fo = function (t, r, n) {
    var a;
    return (
      pe(n) ? (a = n) : pe(r) && (a = r),
      pe(t) || a
        ? function (i, o, s, l) {
            pe(t) && t(i, o, s, l), pe(a) && a(i, o, s, l);
          }
        : null
    );
  },
  GH = function (t, r, n) {
    var a = t.scale,
      i = t.type,
      o = t.layout,
      s = t.axisType;
    if (a === 'auto')
      return o === 'radial' && s === 'radiusAxis'
        ? { scale: Ci(), realScaleType: 'band' }
        : o === 'radial' && s === 'angleAxis'
        ? { scale: xs(), realScaleType: 'linear' }
        : i === 'category' &&
          r &&
          (r.indexOf('LineChart') >= 0 ||
            r.indexOf('AreaChart') >= 0 ||
            (r.indexOf('ComposedChart') >= 0 && !n))
        ? { scale: fi(), realScaleType: 'point' }
        : i === 'category'
        ? { scale: Ci(), realScaleType: 'band' }
        : { scale: xs(), realScaleType: 'linear' };
    if (Wi(a)) {
      var l = 'scale'.concat(yl(a));
      return { scale: (hg[l] || fi)(), realScaleType: hg[l] ? l : 'point' };
    }
    return pe(a) ? { scale: a } : { scale: fi(), realScaleType: 'point' };
  },
  yg = 1e-4,
  qH = function (t) {
    var r = t.domain();
    if (!(!r || r.length <= 2)) {
      var n = r.length,
        a = t.range(),
        i = Math.min(a[0], a[1]) - yg,
        o = Math.max(a[0], a[1]) + yg,
        s = t(r[0]),
        l = t(r[n - 1]);
      (s < i || s > o || l < i || l > o) && t.domain([r[0], r[n - 1]]);
    }
  },
  YH = function (t, r) {
    if (!t) return null;
    for (var n = 0, a = t.length; n < a; n++)
      if (t[n].item === r) return t[n].position;
    return null;
  },
  KH = function (t, r) {
    if (!r || r.length !== 2 || !K(r[0]) || !K(r[1])) return t;
    var n = Math.min(r[0], r[1]),
      a = Math.max(r[0], r[1]),
      i = [t[0], t[1]];
    return (
      (!K(t[0]) || t[0] < n) && (i[0] = n),
      (!K(t[1]) || t[1] > a) && (i[1] = a),
      i[0] > a && (i[0] = a),
      i[1] < n && (i[1] = n),
      i
    );
  },
  XH = function (t) {
    var r = t.length;
    if (!(r <= 0))
      for (var n = 0, a = t[0].length; n < a; ++n)
        for (var i = 0, o = 0, s = 0; s < r; ++s) {
          var l = Ol(t[s][n][1]) ? t[s][n][0] : t[s][n][1];
          l >= 0
            ? ((t[s][n][0] = i), (t[s][n][1] = i + l), (i = t[s][n][1]))
            : ((t[s][n][0] = o), (t[s][n][1] = o + l), (o = t[s][n][1]));
        }
  },
  JH = function (t) {
    var r = t.length;
    if (!(r <= 0))
      for (var n = 0, a = t[0].length; n < a; ++n)
        for (var i = 0, o = 0; o < r; ++o) {
          var s = Ol(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
          s >= 0
            ? ((t[o][n][0] = i), (t[o][n][1] = i + s), (i = t[o][n][1]))
            : ((t[o][n][0] = 0), (t[o][n][1] = 0));
        }
  },
  ZH = {
    sign: XH,
    expand: Q3,
    none: ga,
    silhouette: e5,
    wiggle: t5,
    positive: JH,
  },
  QH = function (t, r, n) {
    var a = r.map(function (o) {
        return o.props.dataKey;
      }),
      i = Z3()
        .keys(a)
        .value(function (o, s) {
          return +Dr(o, s, 0);
        })
        .order(gu)
        .offset(ZH[n]);
    return i(t);
  },
  eV = function (t, r, n, a, i, o) {
    if (!t) return null;
    var s = o ? r.reverse() : r,
      l = s.reduce(function (c, u) {
        var f = u.props,
          d = f.stackId,
          h = f.hide;
        if (h) return c;
        var v = u.props[n],
          p = c[v] || { hasStack: !1, stackGroups: {} };
        if (ht(d)) {
          var m = p.stackGroups[d] || {
            numericAxisId: n,
            cateAxisId: a,
            items: [],
          };
          m.items.push(u), (p.hasStack = !0), (p.stackGroups[d] = m);
        } else p.stackGroups[Sl('_stackId_')] = { numericAxisId: n, cateAxisId: a, items: [u] };
        return Dt(Dt({}, c), {}, ca({}, v, p));
      }, {});
    return Object.keys(l).reduce(function (c, u) {
      var f = l[u];
      return (
        f.hasStack &&
          (f.stackGroups = Object.keys(f.stackGroups).reduce(function (d, h) {
            var v = f.stackGroups[h];
            return Dt(
              Dt({}, d),
              {},
              ca({}, h, {
                numericAxisId: n,
                cateAxisId: a,
                items: v.items,
                stackedData: QH(t, v.items, i),
              })
            );
          }, {})),
        Dt(Dt({}, c), {}, ca({}, u, f))
      );
    }, {});
  },
  tV = function (t, r) {
    return r === 'number' ? [Cl(t), Al(t)] : t;
  },
  rV = function (t, r) {
    var n = r.realScaleType,
      a = r.type,
      i = r.tickCount,
      o = r.originalDomain,
      s = r.allowDecimals,
      l = n || r.scale;
    if (l !== 'auto' && l !== 'linear') return null;
    if (i && a === 'number' && o && (o[0] === 'auto' || o[1] === 'auto')) {
      var c = t.domain();
      if (!c.length) return null;
      var u = v9(c, i, s);
      return t.domain(tV(u, a)), { niceTicks: u };
    }
    if (i && a === 'number') {
      var f = t.domain(),
        d = m9(f, i, s);
      return { niceTicks: d };
    }
    return null;
  },
  bg = function (t) {
    var r = t.axis,
      n = t.ticks,
      a = t.offset,
      i = t.bandSize,
      o = t.entry,
      s = t.index;
    if (r.type === 'category') return n[s] ? n[s].coordinate + a : null;
    var l = Dr(o, r.dataKey, r.domain[s]);
    return ge(l) ? null : r.scale(l) - i / 2 + a;
  },
  nV = function (t) {
    var r = t.numericAxis,
      n = r.scale.domain();
    if (r.type === 'number') {
      var a = Math.min(n[0], n[1]),
        i = Math.max(n[0], n[1]);
      return a <= 0 && i >= 0 ? 0 : i < 0 ? i : a;
    }
    return n[0];
  },
  aV = function (t, r) {
    var n = t.props.stackId;
    if (ht(n)) {
      var a = r[n];
      if (a && a.items.length) {
        for (var i = -1, o = 0, s = a.items.length; o < s; o++)
          if (a.items[o] === t) {
            i = o;
            break;
          }
        return i >= 0 ? a.stackedData[i] : null;
      }
    }
    return null;
  },
  iV = function (t) {
    return t.reduce(
      function (r, n) {
        return [Cl(n.concat([r[0]]).filter(K)), Al(n.concat([r[1]]).filter(K))];
      },
      [1 / 0, -1 / 0]
    );
  },
  D1 = function (t, r, n) {
    return Object.keys(t)
      .reduce(
        function (a, i) {
          var o = t[i],
            s = o.stackedData,
            l = s.reduce(
              function (c, u) {
                var f = iV(u.slice(r, n + 1));
                return [Math.min(c[0], f[0]), Math.max(c[1], f[1])];
              },
              [1 / 0, -1 / 0]
            );
          return [Math.min(l[0], a[0]), Math.max(l[1], a[1])];
        },
        [1 / 0, -1 / 0]
      )
      .map(function (a) {
        return a === 1 / 0 || a === -1 / 0 ? 0 : a;
      });
  },
  xg = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  wg = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  j1 = function (t, r, n) {
    if (pe(t)) return t(r, n);
    if (!Me(t)) return r;
    var a = [];
    if (K(t[0])) a[0] = n ? t[0] : Math.min(t[0], r[0]);
    else if (xg.test(t[0])) {
      var i = +xg.exec(t[0])[1];
      a[0] = r[0] - i;
    } else pe(t[0]) ? (a[0] = t[0](r[0])) : (a[0] = r[0]);
    if (K(t[1])) a[1] = n ? t[1] : Math.max(t[1], r[1]);
    else if (wg.test(t[1])) {
      var o = +wg.exec(t[1])[1];
      a[1] = r[1] + o;
    } else pe(t[1]) ? (a[1] = t[1](r[1])) : (a[1] = r[1]);
    return a;
  },
  Es = function (t, r, n) {
    if (t && t.scale && t.scale.bandwidth) {
      var a = t.scale.bandwidth();
      if (!n || a > 0) return a;
    }
    if (t && r && r.length >= 2) {
      for (
        var i = Wd(r, function (f) {
            return f.coordinate;
          }),
          o = 1 / 0,
          s = 1,
          l = i.length;
        s < l;
        s++
      ) {
        var c = i[s],
          u = i[s - 1];
        o = Math.min((c.coordinate || 0) - (u.coordinate || 0), o);
      }
      return o === 1 / 0 ? 0 : o;
    }
    return n ? void 0 : 0;
  },
  _g = function (t, r, n) {
    return !t || !t.length || Sx(t, Qt(n, 'type.defaultProps.domain')) ? r : t;
  },
  N1 = function (t, r) {
    var n = t.props,
      a = n.dataKey,
      i = n.name,
      o = n.unit,
      s = n.formatter,
      l = n.tooltipType,
      c = n.chartType;
    return Dt(
      Dt({}, ze(t)),
      {},
      {
        dataKey: a,
        unit: o,
        formatter: s,
        name: i || a,
        color: dp(t),
        value: Dr(r, a),
        type: l,
        payload: r,
        chartType: c,
      }
    );
  };
function Og(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Sg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Og(Object(r), !0).forEach(function (n) {
          oV(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Og(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function oV(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var $s = Math.PI / 180,
  sV = function (t) {
    return (t * 180) / Math.PI;
  },
  Pt = function (t, r, n, a) {
    return { x: t + Math.cos(-$s * a) * n, y: r + Math.sin(-$s * a) * n };
  },
  lV = function (t, r) {
    var n = t.x,
      a = t.y,
      i = r.x,
      o = r.y;
    return Math.sqrt(Math.pow(n - i, 2) + Math.pow(a - o, 2));
  },
  cV = function (t, r) {
    var n = t.x,
      a = t.y,
      i = r.cx,
      o = r.cy,
      s = lV({ x: n, y: a }, { x: i, y: o });
    if (s <= 0) return { radius: s };
    var l = (n - i) / s,
      c = Math.acos(l);
    return (
      a > o && (c = 2 * Math.PI - c),
      { radius: s, angle: sV(c), angleInRadian: c }
    );
  },
  uV = function (t) {
    var r = t.startAngle,
      n = t.endAngle,
      a = Math.floor(r / 360),
      i = Math.floor(n / 360),
      o = Math.min(a, i);
    return { startAngle: r - o * 360, endAngle: n - o * 360 };
  },
  fV = function (t, r) {
    var n = r.startAngle,
      a = r.endAngle,
      i = Math.floor(n / 360),
      o = Math.floor(a / 360),
      s = Math.min(i, o);
    return t + s * 360;
  },
  Eg = function (t, r) {
    var n = t.x,
      a = t.y,
      i = cV({ x: n, y: a }, r),
      o = i.radius,
      s = i.angle,
      l = r.innerRadius,
      c = r.outerRadius;
    if (o < l || o > c) return !1;
    if (o === 0) return !0;
    var u = uV(r),
      f = u.startAngle,
      d = u.endAngle,
      h = s,
      v;
    if (f <= d) {
      for (; h > d; ) h -= 360;
      for (; h < f; ) h += 360;
      v = h >= f && h <= d;
    } else {
      for (; h > f; ) h -= 360;
      for (; h < d; ) h += 360;
      v = h >= d && h <= f;
    }
    return v ? Sg(Sg({}, r), {}, { radius: o, angle: fV(h, r) }) : null;
  };
function dV(e) {
  return mV(e) || vV(e) || hV(e) || pV();
}
function pV() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hV(e, t) {
  if (!!e) {
    if (typeof e == 'string') return cf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === 'Object' && e.constructor && (r = e.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return cf(e, t);
  }
}
function vV(e) {
  if (typeof Symbol < 'u' && Symbol.iterator in Object(e)) return Array.from(e);
}
function mV(e) {
  if (Array.isArray(e)) return cf(e);
}
function cf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function $g(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function yt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? $g(Object(r), !0).forEach(function (n) {
          gV(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : $g(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function gV(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Mi() {
  return (
    (Mi =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Mi.apply(this, arguments)
  );
}
var yV = function (t) {
    var r = t.value,
      n = t.formatter,
      a = ge(t.children) ? r : t.children;
    return pe(n) ? n(a) : a;
  },
  bV = function (t, r) {
    var n = or(r - t),
      a = Math.min(Math.abs(r - t), 360);
    return n * a;
  },
  xV = function (t, r, n) {
    var a = t.position,
      i = t.viewBox,
      o = t.offset,
      s = t.className,
      l = i,
      c = l.cx,
      u = l.cy,
      f = l.innerRadius,
      d = l.outerRadius,
      h = l.startAngle,
      v = l.endAngle,
      p = l.clockWise,
      m = (f + d) / 2,
      g = bV(h, v),
      _ = g >= 0 ? 1 : -1,
      x,
      b;
    a === 'insideStart'
      ? ((x = h + _ * o), (b = p))
      : a === 'insideEnd'
      ? ((x = v - _ * o), (b = !p))
      : a === 'end' && ((x = v + _ * o), (b = p)),
      (b = g <= 0 ? b : !b);
    var w = Pt(c, u, m, x),
      O = Pt(c, u, m, x + (b ? 1 : -1) * 359),
      S = 'M'
        .concat(w.x, ',')
        .concat(
          w.y,
          `
    A`
        )
        .concat(m, ',')
        .concat(m, ',0,1,')
        .concat(
          b ? 0 : 1,
          `,
    `
        )
        .concat(O.x, ',')
        .concat(O.y),
      $ = ge(t.id) ? Sl('recharts-radial-line-') : t.id;
    return y.createElement(
      'text',
      Mi({}, n, {
        dominantBaseline: 'central',
        className: Ze('recharts-radial-bar-label', s),
      }),
      y.createElement('defs', null, y.createElement('path', { id: $, d: S })),
      y.createElement('textPath', { xlinkHref: '#'.concat($) }, r)
    );
  },
  wV = function (t) {
    var r = t.viewBox,
      n = t.offset,
      a = t.position,
      i = r,
      o = i.cx,
      s = i.cy,
      l = i.innerRadius,
      c = i.outerRadius,
      u = i.startAngle,
      f = i.endAngle,
      d = (u + f) / 2;
    if (a === 'outside') {
      var h = Pt(o, s, c + n, d),
        v = h.x,
        p = h.y;
      return {
        x: v,
        y: p,
        textAnchor: v >= o ? 'start' : 'end',
        verticalAnchor: 'middle',
      };
    }
    if (a === 'center')
      return { x: o, y: s, textAnchor: 'middle', verticalAnchor: 'middle' };
    if (a === 'centerTop')
      return { x: o, y: s, textAnchor: 'middle', verticalAnchor: 'start' };
    if (a === 'centerBottom')
      return { x: o, y: s, textAnchor: 'middle', verticalAnchor: 'end' };
    var m = (l + c) / 2,
      g = Pt(o, s, m, d),
      _ = g.x,
      x = g.y;
    return { x: _, y: x, textAnchor: 'middle', verticalAnchor: 'middle' };
  },
  _V = function (t) {
    var r = t.viewBox,
      n = t.parentViewBox,
      a = t.offset,
      i = t.position,
      o = r,
      s = o.x,
      l = o.y,
      c = o.width,
      u = o.height,
      f = u >= 0 ? 1 : -1,
      d = f * a,
      h = f > 0 ? 'end' : 'start',
      v = f > 0 ? 'start' : 'end',
      p = c >= 0 ? 1 : -1,
      m = p * a,
      g = p > 0 ? 'end' : 'start',
      _ = p > 0 ? 'start' : 'end';
    if (i === 'top') {
      var x = {
        x: s + c / 2,
        y: l - f * a,
        textAnchor: 'middle',
        verticalAnchor: h,
      };
      return yt(yt({}, x), n ? { height: Math.max(l - n.y, 0), width: c } : {});
    }
    if (i === 'bottom') {
      var b = {
        x: s + c / 2,
        y: l + u + d,
        textAnchor: 'middle',
        verticalAnchor: v,
      };
      return yt(
        yt({}, b),
        n ? { height: Math.max(n.y + n.height - (l + u), 0), width: c } : {}
      );
    }
    if (i === 'left') {
      var w = {
        x: s - m,
        y: l + u / 2,
        textAnchor: g,
        verticalAnchor: 'middle',
      };
      return yt(
        yt({}, w),
        n ? { width: Math.max(w.x - n.x, 0), height: u } : {}
      );
    }
    if (i === 'right') {
      var O = {
        x: s + c + m,
        y: l + u / 2,
        textAnchor: _,
        verticalAnchor: 'middle',
      };
      return yt(
        yt({}, O),
        n ? { width: Math.max(n.x + n.width - O.x, 0), height: u } : {}
      );
    }
    var S = n ? { width: c, height: u } : {};
    return i === 'insideLeft'
      ? yt(
          { x: s + m, y: l + u / 2, textAnchor: _, verticalAnchor: 'middle' },
          S
        )
      : i === 'insideRight'
      ? yt(
          {
            x: s + c - m,
            y: l + u / 2,
            textAnchor: g,
            verticalAnchor: 'middle',
          },
          S
        )
      : i === 'insideTop'
      ? yt(
          { x: s + c / 2, y: l + d, textAnchor: 'middle', verticalAnchor: v },
          S
        )
      : i === 'insideBottom'
      ? yt(
          {
            x: s + c / 2,
            y: l + u - d,
            textAnchor: 'middle',
            verticalAnchor: h,
          },
          S
        )
      : i === 'insideTopLeft'
      ? yt({ x: s + m, y: l + d, textAnchor: _, verticalAnchor: v }, S)
      : i === 'insideTopRight'
      ? yt({ x: s + c - m, y: l + d, textAnchor: g, verticalAnchor: v }, S)
      : i === 'insideBottomLeft'
      ? yt({ x: s + m, y: l + u - d, textAnchor: _, verticalAnchor: h }, S)
      : i === 'insideBottomRight'
      ? yt({ x: s + c - m, y: l + u - d, textAnchor: g, verticalAnchor: h }, S)
      : tr(i) && (K(i.x) || An(i.x)) && (K(i.y) || An(i.y))
      ? yt(
          {
            x: s + ya(i.x, c),
            y: l + ya(i.y, u),
            textAnchor: 'end',
            verticalAnchor: 'end',
          },
          S
        )
      : yt(
          {
            x: s + c / 2,
            y: l + u / 2,
            textAnchor: 'middle',
            verticalAnchor: 'middle',
          },
          S
        );
  },
  OV = function (t) {
    return K(t.cx);
  };
function _t(e) {
  var t = e.viewBox,
    r = e.position,
    n = e.value,
    a = e.children,
    i = e.content,
    o = e.className,
    s = o === void 0 ? '' : o,
    l = e.textBreakAll;
  if (!t || (ge(n) && ge(a) && !E.exports.isValidElement(i) && !pe(i)))
    return null;
  if (E.exports.isValidElement(i)) return E.exports.cloneElement(i, e);
  var c;
  if (pe(i)) {
    if (((c = E.exports.createElement(i, e)), E.exports.isValidElement(c)))
      return c;
  } else c = yV(e);
  var u = OV(t),
    f = ze(e, !0);
  if (u && (r === 'insideStart' || r === 'insideEnd' || r === 'end'))
    return xV(e, c, f);
  var d = u ? wV(e) : _V(e);
  return y.createElement(
    Ei,
    Mi({ className: Ze('recharts-label', s) }, f, d, { breakAll: l }),
    c
  );
}
_t.displayName = 'Label';
_t.defaultProps = { offset: 5 };
var L1 = function (t) {
    var r = t.cx,
      n = t.cy,
      a = t.angle,
      i = t.startAngle,
      o = t.endAngle,
      s = t.r,
      l = t.radius,
      c = t.innerRadius,
      u = t.outerRadius,
      f = t.x,
      d = t.y,
      h = t.top,
      v = t.left,
      p = t.width,
      m = t.height,
      g = t.clockWise,
      _ = t.labelViewBox;
    if (_) return _;
    if (K(p) && K(m)) {
      if (K(f) && K(d)) return { x: f, y: d, width: p, height: m };
      if (K(h) && K(v)) return { x: h, y: v, width: p, height: m };
    }
    return K(f) && K(d)
      ? { x: f, y: d, width: 0, height: 0 }
      : K(r) && K(n)
      ? {
          cx: r,
          cy: n,
          startAngle: i || a || 0,
          endAngle: o || a || 0,
          innerRadius: c || 0,
          outerRadius: u || l || s || 0,
          clockWise: g,
        }
      : t.viewBox
      ? t.viewBox
      : {};
  },
  SV = function (t, r) {
    return t
      ? t === !0
        ? y.createElement(_t, { key: 'label-implicit', viewBox: r })
        : ht(t)
        ? y.createElement(_t, { key: 'label-implicit', viewBox: r, value: t })
        : E.exports.isValidElement(t)
        ? t.type === _t
          ? E.exports.cloneElement(t, { key: 'label-implicit', viewBox: r })
          : y.createElement(_t, {
              key: 'label-implicit',
              content: t,
              viewBox: r,
            })
        : pe(t)
        ? y.createElement(_t, { key: 'label-implicit', content: t, viewBox: r })
        : tr(t)
        ? y.createElement(_t, Mi({ viewBox: r }, t, { key: 'label-implicit' }))
        : null
      : null;
  },
  EV = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
    if (!t || (!t.children && n && !t.label)) return null;
    var a = t.children,
      i = L1(t),
      o = br(a, _t.displayName).map(function (l, c) {
        return E.exports.cloneElement(l, {
          viewBox: r || i,
          key: 'label-'.concat(c),
        });
      });
    if (!n) return o;
    var s = SV(t.label, r || i);
    return [s].concat(dV(o));
  };
_t.parseViewBox = L1;
_t.renderCallByParent = EV;
function $V(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var AV = $V;
function CV(e) {
  return MV(e) || TV(e) || kV(e) || PV();
}
function PV() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function kV(e, t) {
  if (!!e) {
    if (typeof e == 'string') return uf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === 'Object' && e.constructor && (r = e.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return uf(e, t);
  }
}
function TV(e) {
  if (typeof Symbol < 'u' && Symbol.iterator in Object(e)) return Array.from(e);
}
function MV(e) {
  if (Array.isArray(e)) return uf(e);
}
function uf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function As() {
  return (
    (As =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    As.apply(this, arguments)
  );
}
function Ag(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Cg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ag(Object(r), !0).forEach(function (n) {
          IV(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Ag(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function IV(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function RV(e, t) {
  if (e == null) return {};
  var r = DV(e, t),
    n,
    a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      (n = i[a]),
        !(t.indexOf(n) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function DV(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    a,
    i;
  for (i = 0; i < n.length; i++)
    (a = n[i]), !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var jV = {
  valueAccessor: function (t) {
    return Me(t.value) ? AV(t.value) : t.value;
  },
};
function Gr(e) {
  var t = e.data,
    r = e.valueAccessor,
    n = e.dataKey,
    a = e.clockWise,
    i = e.id,
    o = e.textBreakAll,
    s = RV(e, [
      'data',
      'valueAccessor',
      'dataKey',
      'clockWise',
      'id',
      'textBreakAll',
    ]);
  return !t || !t.length
    ? null
    : y.createElement(
        Rt,
        { className: 'recharts-label-list' },
        t.map(function (l, c) {
          var u = ge(n) ? r(l, c) : Dr(l && l.payload, n),
            f = ge(i) ? {} : { id: ''.concat(i, '-').concat(c) };
          return y.createElement(
            _t,
            As({}, ze(l, !0), s, f, {
              parentViewBox: l.parentViewBox,
              index: c,
              value: u,
              textBreakAll: o,
              viewBox: _t.parseViewBox(
                ge(a) ? l : Cg(Cg({}, l), {}, { clockWise: a })
              ),
              key: 'label-'.concat(c),
            })
          );
        })
      );
}
Gr.displayName = 'LabelList';
function NV(e, t) {
  return e
    ? e === !0
      ? y.createElement(Gr, { key: 'labelList-implicit', data: t })
      : y.isValidElement(e) || pe(e)
      ? y.createElement(Gr, { key: 'labelList-implicit', data: t, content: e })
      : tr(e)
      ? y.createElement(Gr, As({ data: t }, e, { key: 'labelList-implicit' }))
      : null
    : null;
}
function LV(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || (!e.children && r && !e.label)) return null;
  var n = e.children,
    a = br(n, Gr.displayName).map(function (o, s) {
      return E.exports.cloneElement(o, {
        data: t,
        key: 'labelList-'.concat(s),
      });
    });
  if (!r) return a;
  var i = NV(e.label, t);
  return [i].concat(CV(a));
}
Gr.renderCallByParent = LV;
Gr.defaultProps = jV;
function Ao(e) {
  return (
    typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
      ? (Ao = function (r) {
          return typeof r;
        })
      : (Ao = function (r) {
          return r &&
            typeof Symbol == 'function' &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? 'symbol'
            : typeof r;
        }),
    Ao(e)
  );
}
function ff() {
  return (
    (ff =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    ff.apply(this, arguments)
  );
}
function BV(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function Pg(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function FV(e, t, r) {
  return t && Pg(e.prototype, t), r && Pg(e, r), e;
}
function zV(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && df(e, t);
}
function df(e, t) {
  return (
    (df =
      Object.setPrototypeOf ||
      function (n, a) {
        return (n.__proto__ = a), n;
      }),
    df(e, t)
  );
}
function WV(e) {
  var t = VV();
  return function () {
    var n = Cs(e),
      a;
    if (t) {
      var i = Cs(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else a = n.apply(this, arguments);
    return UV(this, a);
  };
}
function UV(e, t) {
  return t && (Ao(t) === 'object' || typeof t == 'function') ? t : HV(e);
}
function HV(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function VV() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Cs(e) {
  return (
    (Cs = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Cs(e)
  );
}
var GV = function (t, r) {
    var n = or(r - t),
      a = Math.min(Math.abs(r - t), 359.999);
    return n * a;
  },
  po = function (t) {
    var r = t.cx,
      n = t.cy,
      a = t.radius,
      i = t.angle,
      o = t.sign,
      s = t.isExternal,
      l = t.cornerRadius,
      c = t.cornerIsExternal,
      u = l * (s ? 1 : -1) + a,
      f = Math.asin(l / u) / $s,
      d = c ? i : i + o * f,
      h = Pt(r, n, u, d),
      v = Pt(r, n, a, d),
      p = c ? i - o * f : i,
      m = Pt(r, n, u * Math.cos(f * $s), p);
    return { center: h, circleTangency: v, lineTangency: m, theta: f };
  },
  B1 = function (t) {
    var r = t.cx,
      n = t.cy,
      a = t.innerRadius,
      i = t.outerRadius,
      o = t.startAngle,
      s = t.endAngle,
      l = GV(o, s),
      c = o + l,
      u = Pt(r, n, i, o),
      f = Pt(r, n, i, c),
      d = 'M '
        .concat(u.x, ',')
        .concat(
          u.y,
          `
    A `
        )
        .concat(i, ',')
        .concat(
          i,
          `,0,
    `
        )
        .concat(+(Math.abs(l) > 180), ',')
        .concat(
          +(o > c),
          `,
    `
        )
        .concat(f.x, ',')
        .concat(
          f.y,
          `
  `
        );
    if (a > 0) {
      var h = Pt(r, n, a, o),
        v = Pt(r, n, a, c);
      d += 'L '
        .concat(v.x, ',')
        .concat(
          v.y,
          `
            A `
        )
        .concat(a, ',')
        .concat(
          a,
          `,0,
            `
        )
        .concat(+(Math.abs(l) > 180), ',')
        .concat(
          +(o <= c),
          `,
            `
        )
        .concat(h.x, ',')
        .concat(h.y, ' Z');
    } else d += 'L '.concat(r, ',').concat(n, ' Z');
    return d;
  },
  qV = function (t) {
    var r = t.cx,
      n = t.cy,
      a = t.innerRadius,
      i = t.outerRadius,
      o = t.cornerRadius,
      s = t.forceCornerRadius,
      l = t.cornerIsExternal,
      c = t.startAngle,
      u = t.endAngle,
      f = or(u - c),
      d = po({
        cx: r,
        cy: n,
        radius: i,
        angle: c,
        sign: f,
        cornerRadius: o,
        cornerIsExternal: l,
      }),
      h = d.circleTangency,
      v = d.lineTangency,
      p = d.theta,
      m = po({
        cx: r,
        cy: n,
        radius: i,
        angle: u,
        sign: -f,
        cornerRadius: o,
        cornerIsExternal: l,
      }),
      g = m.circleTangency,
      _ = m.lineTangency,
      x = m.theta,
      b = l ? Math.abs(c - u) : Math.abs(c - u) - p - x;
    if (b < 0)
      return s
        ? 'M '
            .concat(v.x, ',')
            .concat(
              v.y,
              `
        a`
            )
            .concat(o, ',')
            .concat(o, ',0,0,1,')
            .concat(
              o * 2,
              `,0
        a`
            )
            .concat(o, ',')
            .concat(o, ',0,0,1,')
            .concat(
              -o * 2,
              `,0
      `
            )
        : B1({
            cx: r,
            cy: n,
            innerRadius: a,
            outerRadius: i,
            startAngle: c,
            endAngle: u,
          });
    var w = 'M '
      .concat(v.x, ',')
      .concat(
        v.y,
        `
    A`
      )
      .concat(o, ',')
      .concat(o, ',0,0,')
      .concat(+(f < 0), ',')
      .concat(h.x, ',')
      .concat(
        h.y,
        `
    A`
      )
      .concat(i, ',')
      .concat(i, ',0,')
      .concat(+(b > 180), ',')
      .concat(+(f < 0), ',')
      .concat(g.x, ',')
      .concat(
        g.y,
        `
    A`
      )
      .concat(o, ',')
      .concat(o, ',0,0,')
      .concat(+(f < 0), ',')
      .concat(_.x, ',')
      .concat(
        _.y,
        `
  `
      );
    if (a > 0) {
      var O = po({
          cx: r,
          cy: n,
          radius: a,
          angle: c,
          sign: f,
          isExternal: !0,
          cornerRadius: o,
          cornerIsExternal: l,
        }),
        S = O.circleTangency,
        $ = O.lineTangency,
        A = O.theta,
        P = po({
          cx: r,
          cy: n,
          radius: a,
          angle: u,
          sign: -f,
          isExternal: !0,
          cornerRadius: o,
          cornerIsExternal: l,
        }),
        C = P.circleTangency,
        k = P.lineTangency,
        T = P.theta,
        D = l ? Math.abs(c - u) : Math.abs(c - u) - A - T;
      if (D < 0 && o === 0)
        return ''.concat(w, 'L').concat(r, ',').concat(n, 'Z');
      w += 'L'
        .concat(k.x, ',')
        .concat(
          k.y,
          `
      A`
        )
        .concat(o, ',')
        .concat(o, ',0,0,')
        .concat(+(f < 0), ',')
        .concat(C.x, ',')
        .concat(
          C.y,
          `
      A`
        )
        .concat(a, ',')
        .concat(a, ',0,')
        .concat(+(D > 180), ',')
        .concat(+(f > 0), ',')
        .concat(S.x, ',')
        .concat(
          S.y,
          `
      A`
        )
        .concat(o, ',')
        .concat(o, ',0,0,')
        .concat(+(f < 0), ',')
        .concat($.x, ',')
        .concat($.y, 'Z');
    } else w += 'L'.concat(r, ',').concat(n, 'Z');
    return w;
  },
  F1 = (function (e) {
    zV(r, e);
    var t = WV(r);
    function r() {
      return BV(this, r), t.apply(this, arguments);
    }
    return (
      FV(r, [
        {
          key: 'render',
          value: function () {
            var a = this.props,
              i = a.cx,
              o = a.cy,
              s = a.innerRadius,
              l = a.outerRadius,
              c = a.cornerRadius,
              u = a.forceCornerRadius,
              f = a.cornerIsExternal,
              d = a.startAngle,
              h = a.endAngle,
              v = a.className;
            if (l < s || d === h) return null;
            var p = Ze('recharts-sector', v),
              m = l - s,
              g = ya(c, m, 0, !0),
              _;
            return (
              g > 0 && Math.abs(d - h) < 360
                ? (_ = qV({
                    cx: i,
                    cy: o,
                    innerRadius: s,
                    outerRadius: l,
                    cornerRadius: Math.min(g, m / 2),
                    forceCornerRadius: u,
                    cornerIsExternal: f,
                    startAngle: d,
                    endAngle: h,
                  }))
                : (_ = B1({
                    cx: i,
                    cy: o,
                    innerRadius: s,
                    outerRadius: l,
                    startAngle: d,
                    endAngle: h,
                  })),
              y.createElement(
                'path',
                ff({}, ze(this.props, !0), { className: p, d: _ })
              )
            );
          },
        },
      ]),
      r
    );
  })(E.exports.PureComponent);
F1.defaultProps = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1,
};
function Co(e) {
  return (
    typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
      ? (Co = function (r) {
          return typeof r;
        })
      : (Co = function (r) {
          return r &&
            typeof Symbol == 'function' &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? 'symbol'
            : typeof r;
        }),
    Co(e)
  );
}
function pf() {
  return (
    (pf =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    pf.apply(this, arguments)
  );
}
function kg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Tg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? kg(Object(r), !0).forEach(function (n) {
          YV(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : kg(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function YV(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function KV(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function Mg(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function XV(e, t, r) {
  return t && Mg(e.prototype, t), r && Mg(e, r), e;
}
function JV(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && hf(e, t);
}
function hf(e, t) {
  return (
    (hf =
      Object.setPrototypeOf ||
      function (n, a) {
        return (n.__proto__ = a), n;
      }),
    hf(e, t)
  );
}
function ZV(e) {
  var t = t7();
  return function () {
    var n = Ps(e),
      a;
    if (t) {
      var i = Ps(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else a = n.apply(this, arguments);
    return QV(this, a);
  };
}
function QV(e, t) {
  return t && (Co(t) === 'object' || typeof t == 'function') ? t : e7(e);
}
function e7(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function t7() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Ps(e) {
  return (
    (Ps = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Ps(e)
  );
}
var Ig = {
    curveBasisClosed: z3,
    curveBasisOpen: W3,
    curveBasis: F3,
    curveLinearClosed: U3,
    curveLinear: wl,
    curveMonotoneX: H3,
    curveMonotoneY: V3,
    curveNatural: G3,
    curveStep: q3,
    curveStepAfter: K3,
    curveStepBefore: Y3,
  },
  ho = function (t) {
    return t.x === +t.x && t.y === +t.y;
  },
  Qa = function (t) {
    return t.x;
  },
  ei = function (t) {
    return t.y;
  },
  r7 = function (t, r) {
    if (pe(t)) return t;
    var n = 'curve'.concat(yl(t));
    return n === 'curveMonotone' && r
      ? Ig[''.concat(n).concat(r === 'vertical' ? 'Y' : 'X')]
      : Ig[n] || wl;
  },
  vf = (function (e) {
    JV(r, e);
    var t = ZV(r);
    function r() {
      return KV(this, r), t.apply(this, arguments);
    }
    return (
      XV(r, [
        {
          key: 'getPath',
          value: function () {
            var a = this.props,
              i = a.type,
              o = a.points,
              s = a.baseLine,
              l = a.layout,
              c = a.connectNulls,
              u = r7(i, l),
              f = c
                ? o.filter(function (p) {
                    return ho(p);
                  })
                : o,
              d;
            if (Me(s)) {
              var h = c
                  ? s.filter(function (p) {
                      return ho(p);
                    })
                  : s,
                v = f.map(function (p, m) {
                  return Tg(Tg({}, p), {}, { base: h[m] });
                });
              return (
                l === 'vertical'
                  ? (d = io()
                      .y(ei)
                      .x1(Qa)
                      .x0(function (p) {
                        return p.base.x;
                      }))
                  : (d = io()
                      .x(Qa)
                      .y1(ei)
                      .y0(function (p) {
                        return p.base.y;
                      })),
                d.defined(ho).curve(u),
                d(v)
              );
            }
            return (
              l === 'vertical' && K(s)
                ? (d = io().y(ei).x1(Qa).x0(s))
                : K(s)
                ? (d = io().x(Qa).y1(ei).y0(s))
                : (d = z0().x(Qa).y(ei)),
              d.defined(ho).curve(u),
              d(f)
            );
          },
        },
        {
          key: 'render',
          value: function () {
            var a = this.props,
              i = a.className,
              o = a.points,
              s = a.path,
              l = a.pathRef;
            if ((!o || !o.length) && !s) return null;
            var c = o && o.length ? this.getPath() : s;
            return y.createElement(
              'path',
              pf({}, ze(this.props), Ko(this.props), {
                className: Ze('recharts-curve', i),
                d: c,
                ref: l,
              })
            );
          },
        },
      ]),
      r
    );
  })(E.exports.PureComponent);
vf.defaultProps = { type: 'linear', points: [], connectNulls: !1 };
function Po(e) {
  return (
    typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
      ? (Po = function (r) {
          return typeof r;
        })
      : (Po = function (r) {
          return r &&
            typeof Symbol == 'function' &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? 'symbol'
            : typeof r;
        }),
    Po(e)
  );
}
function ks() {
  return (
    (ks =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    ks.apply(this, arguments)
  );
}
function n7(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function Rg(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function a7(e, t, r) {
  return t && Rg(e.prototype, t), r && Rg(e, r), e;
}
function i7(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && mf(e, t);
}
function mf(e, t) {
  return (
    (mf =
      Object.setPrototypeOf ||
      function (n, a) {
        return (n.__proto__ = a), n;
      }),
    mf(e, t)
  );
}
function o7(e) {
  var t = c7();
  return function () {
    var n = Ts(e),
      a;
    if (t) {
      var i = Ts(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else a = n.apply(this, arguments);
    return s7(this, a);
  };
}
function s7(e, t) {
  return t && (Po(t) === 'object' || typeof t == 'function') ? t : l7(e);
}
function l7(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function c7() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Ts(e) {
  return (
    (Ts = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Ts(e)
  );
}
var Dg = function (t, r, n, a, i) {
    var o = Math.min(Math.abs(n) / 2, Math.abs(a) / 2),
      s = a >= 0 ? 1 : -1,
      l = n >= 0 ? 1 : -1,
      c = (a >= 0 && n >= 0) || (a < 0 && n < 0) ? 1 : 0,
      u;
    if (o > 0 && i instanceof Array) {
      for (var f = [0, 0, 0, 0], d = 0, h = 4; d < h; d++)
        f[d] = i[d] > o ? o : i[d];
      (u = 'M'.concat(t, ',').concat(r + s * f[0])),
        f[0] > 0 &&
          (u += 'A '
            .concat(f[0], ',')
            .concat(f[0], ',0,0,')
            .concat(c, ',')
            .concat(t + l * f[0], ',')
            .concat(r)),
        (u += 'L '.concat(t + n - l * f[1], ',').concat(r)),
        f[1] > 0 &&
          (u += 'A '
            .concat(f[1], ',')
            .concat(f[1], ',0,0,')
            .concat(
              c,
              `,
        `
            )
            .concat(t + n, ',')
            .concat(r + s * f[1])),
        (u += 'L '.concat(t + n, ',').concat(r + a - s * f[2])),
        f[2] > 0 &&
          (u += 'A '
            .concat(f[2], ',')
            .concat(f[2], ',0,0,')
            .concat(
              c,
              `,
        `
            )
            .concat(t + n - l * f[2], ',')
            .concat(r + a)),
        (u += 'L '.concat(t + l * f[3], ',').concat(r + a)),
        f[3] > 0 &&
          (u += 'A '
            .concat(f[3], ',')
            .concat(f[3], ',0,0,')
            .concat(
              c,
              `,
        `
            )
            .concat(t, ',')
            .concat(r + a - s * f[3])),
        (u += 'Z');
    } else if (o > 0 && i === +i && i > 0) {
      var v = Math.min(o, i);
      u = 'M '
        .concat(t, ',')
        .concat(
          r + s * v,
          `
            A `
        )
        .concat(v, ',')
        .concat(v, ',0,0,')
        .concat(c, ',')
        .concat(t + l * v, ',')
        .concat(
          r,
          `
            L `
        )
        .concat(t + n - l * v, ',')
        .concat(
          r,
          `
            A `
        )
        .concat(v, ',')
        .concat(v, ',0,0,')
        .concat(c, ',')
        .concat(t + n, ',')
        .concat(
          r + s * v,
          `
            L `
        )
        .concat(t + n, ',')
        .concat(
          r + a - s * v,
          `
            A `
        )
        .concat(v, ',')
        .concat(v, ',0,0,')
        .concat(c, ',')
        .concat(t + n - l * v, ',')
        .concat(
          r + a,
          `
            L `
        )
        .concat(t + l * v, ',')
        .concat(
          r + a,
          `
            A `
        )
        .concat(v, ',')
        .concat(v, ',0,0,')
        .concat(c, ',')
        .concat(t, ',')
        .concat(r + a - s * v, ' Z');
    } else
      u = 'M '
        .concat(t, ',')
        .concat(r, ' h ')
        .concat(n, ' v ')
        .concat(a, ' h ')
        .concat(-n, ' Z');
    return u;
  },
  u7 = function (t, r) {
    if (!t || !r) return !1;
    var n = t.x,
      a = t.y,
      i = r.x,
      o = r.y,
      s = r.width,
      l = r.height;
    if (Math.abs(s) > 0 && Math.abs(l) > 0) {
      var c = Math.min(i, i + s),
        u = Math.max(i, i + s),
        f = Math.min(o, o + l),
        d = Math.max(o, o + l);
      return n >= c && n <= u && a >= f && a <= d;
    }
    return !1;
  },
  Ll = (function (e) {
    i7(r, e);
    var t = o7(r);
    function r() {
      var n;
      n7(this, r);
      for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
        i[o] = arguments[o];
      return (
        (n = t.call.apply(t, [this].concat(i))),
        (n.state = { totalLength: -1 }),
        (n.node = void 0),
        n
      );
    }
    return (
      a7(r, [
        {
          key: 'componentDidMount',
          value: function () {
            if (this.node && this.node.getTotalLength)
              try {
                var a = this.node.getTotalLength();
                a && this.setState({ totalLength: a });
              } catch {}
          },
        },
        {
          key: 'render',
          value: function () {
            var a = this,
              i = this.props,
              o = i.x,
              s = i.y,
              l = i.width,
              c = i.height,
              u = i.radius,
              f = i.className,
              d = this.state.totalLength,
              h = this.props,
              v = h.animationEasing,
              p = h.animationDuration,
              m = h.animationBegin,
              g = h.isAnimationActive,
              _ = h.isUpdateAnimationActive;
            if (
              o !== +o ||
              s !== +s ||
              l !== +l ||
              c !== +c ||
              l === 0 ||
              c === 0
            )
              return null;
            var x = Ze('recharts-rectangle', f);
            return _
              ? y.createElement(
                  xa,
                  {
                    canBegin: d > 0,
                    from: { width: l, height: c, x: o, y: s },
                    to: { width: l, height: c, x: o, y: s },
                    duration: p,
                    animationEasing: v,
                    isActive: _,
                  },
                  function (b) {
                    var w = b.width,
                      O = b.height,
                      S = b.x,
                      $ = b.y;
                    return y.createElement(
                      xa,
                      {
                        canBegin: d > 0,
                        from: '0px '.concat(d === -1 ? 1 : d, 'px'),
                        to: ''.concat(d, 'px 0px'),
                        attributeName: 'strokeDasharray',
                        begin: m,
                        duration: p,
                        isActive: g,
                        easing: v,
                      },
                      y.createElement(
                        'path',
                        ks({}, ze(a.props, !0), {
                          className: x,
                          d: Dg(S, $, w, O, u),
                          ref: function (P) {
                            a.node = P;
                          },
                        })
                      )
                    );
                  }
                )
              : y.createElement(
                  'path',
                  ks({}, ze(this.props, !0), {
                    className: x,
                    d: Dg(o, s, l, c, u),
                  })
                );
          },
        },
      ]),
      r
    );
  })(E.exports.PureComponent);
Ll.defaultProps = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  radius: 0,
  isAnimationActive: !1,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: 'ease',
};
function ko(e) {
  return (
    typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
      ? (ko = function (r) {
          return typeof r;
        })
      : (ko = function (r) {
          return r &&
            typeof Symbol == 'function' &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? 'symbol'
            : typeof r;
        }),
    ko(e)
  );
}
function gf() {
  return (
    (gf =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    gf.apply(this, arguments)
  );
}
function f7(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function jg(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function d7(e, t, r) {
  return t && jg(e.prototype, t), r && jg(e, r), e;
}
function p7(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && yf(e, t);
}
function yf(e, t) {
  return (
    (yf =
      Object.setPrototypeOf ||
      function (n, a) {
        return (n.__proto__ = a), n;
      }),
    yf(e, t)
  );
}
function h7(e) {
  var t = g7();
  return function () {
    var n = Ms(e),
      a;
    if (t) {
      var i = Ms(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else a = n.apply(this, arguments);
    return v7(this, a);
  };
}
function v7(e, t) {
  return t && (ko(t) === 'object' || typeof t == 'function') ? t : m7(e);
}
function m7(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function g7() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Ms(e) {
  return (
    (Ms = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Ms(e)
  );
}
var z1 = (function (e) {
  p7(r, e);
  var t = h7(r);
  function r() {
    return f7(this, r), t.apply(this, arguments);
  }
  return (
    d7(r, [
      {
        key: 'render',
        value: function () {
          var a = this.props,
            i = a.cx,
            o = a.cy,
            s = a.r,
            l = a.className,
            c = Ze('recharts-dot', l);
          return i === +i && o === +o && s === +s
            ? y.createElement(
                'circle',
                gf({}, ze(this.props), Ko(this.props), {
                  className: c,
                  cx: i,
                  cy: o,
                  r: s,
                })
              )
            : null;
        },
      },
    ]),
    r
  );
})(E.exports.PureComponent);
function To(e) {
  return (
    typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
      ? (To = function (r) {
          return typeof r;
        })
      : (To = function (r) {
          return r &&
            typeof Symbol == 'function' &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? 'symbol'
            : typeof r;
        }),
    To(e)
  );
}
function bf() {
  return (
    (bf =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    bf.apply(this, arguments)
  );
}
function y7(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function Ng(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function b7(e, t, r) {
  return t && Ng(e.prototype, t), r && Ng(e, r), e;
}
function x7(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && xf(e, t);
}
function xf(e, t) {
  return (
    (xf =
      Object.setPrototypeOf ||
      function (n, a) {
        return (n.__proto__ = a), n;
      }),
    xf(e, t)
  );
}
function w7(e) {
  var t = S7();
  return function () {
    var n = Is(e),
      a;
    if (t) {
      var i = Is(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else a = n.apply(this, arguments);
    return _7(this, a);
  };
}
function _7(e, t) {
  return t && (To(t) === 'object' || typeof t == 'function') ? t : O7(e);
}
function O7(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function S7() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Is(e) {
  return (
    (Is = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Is(e)
  );
}
var W1 = (function (e) {
  x7(r, e);
  var t = w7(r);
  function r() {
    return y7(this, r), t.apply(this, arguments);
  }
  return (
    b7(
      r,
      [
        {
          key: 'render',
          value: function () {
            var a = this.props,
              i = a.x,
              o = a.y,
              s = a.width,
              l = a.height,
              c = a.top,
              u = a.left,
              f = a.className;
            return !K(i) || !K(o) || !K(s) || !K(l) || !K(c) || !K(u)
              ? null
              : y.createElement(
                  'path',
                  bf({}, ze(this.props, !0), {
                    className: Ze('recharts-cross', f),
                    d: r.getPath(i, o, s, l, c, u),
                  })
                );
          },
        },
      ],
      [
        {
          key: 'getPath',
          value: function (a, i, o, s, l, c) {
            return 'M'
              .concat(a, ',')
              .concat(l, 'v')
              .concat(s, 'M')
              .concat(c, ',')
              .concat(i, 'h')
              .concat(o);
          },
        },
      ]
    ),
    r
  );
})(E.exports.PureComponent);
W1.defaultProps = { x: 0, y: 0, top: 0, left: 0, width: 0, height: 0 };
var E7 = Math.ceil,
  $7 = Math.max;
function A7(e, t, r, n) {
  for (var a = -1, i = $7(E7((t - e) / (r || 1)), 0), o = Array(i); i--; )
    (o[n ? i : ++a] = e), (e += r);
  return o;
}
var C7 = A7,
  P7 = ux,
  Lg = 1 / 0,
  k7 = 17976931348623157e292;
function T7(e) {
  if (!e) return e === 0 ? e : 0;
  if (((e = P7(e)), e === Lg || e === -Lg)) {
    var t = e < 0 ? -1 : 1;
    return t * k7;
  }
  return e === e ? e : 0;
}
var U1 = T7,
  M7 = C7,
  I7 = $l,
  jc = U1;
function R7(e) {
  return function (t, r, n) {
    return (
      n && typeof n != 'number' && I7(t, r, n) && (r = n = void 0),
      (t = jc(t)),
      r === void 0 ? ((r = t), (t = 0)) : (r = jc(r)),
      (n = n === void 0 ? (t < r ? 1 : -1) : jc(n)),
      M7(t, r, n, e)
    );
  };
}
var D7 = R7,
  j7 = D7,
  N7 = j7(),
  Rs = N7;
function Bg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Fg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Bg(Object(r), !0).forEach(function (n) {
          H1(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Bg(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function H1(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var L7 = ['Webkit', 'Moz', 'O', 'ms'],
  B7 = function (t, r) {
    if (!t) return null;
    var n = t.replace(/(\w)/, function (i) {
        return i.toUpperCase();
      }),
      a = L7.reduce(function (i, o) {
        return Fg(Fg({}, i), {}, H1({}, o + n, r));
      }, {});
    return (a[t] = r), a;
  };
function Mo(e) {
  return (
    typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
      ? (Mo = function (r) {
          return typeof r;
        })
      : (Mo = function (r) {
          return r &&
            typeof Symbol == 'function' &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? 'symbol'
            : typeof r;
        }),
    Mo(e)
  );
}
function Ds() {
  return (
    (Ds =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Ds.apply(this, arguments)
  );
}
function zg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Nc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? zg(Object(r), !0).forEach(function (n) {
          wf(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : zg(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function wf(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function F7(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function Wg(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function z7(e, t, r) {
  return t && Wg(e.prototype, t), r && Wg(e, r), e;
}
function W7(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && _f(e, t);
}
function _f(e, t) {
  return (
    (_f =
      Object.setPrototypeOf ||
      function (n, a) {
        return (n.__proto__ = a), n;
      }),
    _f(e, t)
  );
}
function U7(e) {
  var t = V7();
  return function () {
    var n = js(e),
      a;
    if (t) {
      var i = js(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else a = n.apply(this, arguments);
    return H7(this, a);
  };
}
function H7(e, t) {
  return t && (Mo(t) === 'object' || typeof t == 'function') ? t : Of(e);
}
function Of(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function V7() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function js(e) {
  return (
    (js = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    js(e)
  );
}
var G7 = function (t) {
    var r = t.data,
      n = t.startIndex,
      a = t.endIndex,
      i = t.x,
      o = t.width,
      s = t.travellerWidth;
    if (!r || !r.length) return {};
    var l = r.length,
      c = fi()
        .domain(Rs(0, l))
        .range([i, i + o - s]),
      u = c.domain().map(function (f) {
        return c(f);
      });
    return {
      isTextActive: !1,
      isSlideMoving: !1,
      isTravellerMoving: !1,
      startX: c(n),
      endX: c(a),
      scale: c,
      scaleValues: u,
    };
  },
  Ug = function (t) {
    return t.changedTouches && !!t.changedTouches.length;
  },
  Ii = (function (e) {
    W7(r, e);
    var t = U7(r);
    function r(n) {
      var a;
      return (
        F7(this, r),
        (a = t.call(this, n)),
        (a.leaveTimer = void 0),
        (a.travellerDragStartHandlers = void 0),
        (a.handleDrag = function (i) {
          a.leaveTimer && (clearTimeout(a.leaveTimer), (a.leaveTimer = null)),
            a.state.isTravellerMoving
              ? a.handleTravellerMove(i)
              : a.state.isSlideMoving && a.handleSlideDrag(i);
        }),
        (a.handleTouchMove = function (i) {
          i.changedTouches != null &&
            i.changedTouches.length > 0 &&
            a.handleDrag(i.changedTouches[0]);
        }),
        (a.handleDragEnd = function () {
          a.setState({ isTravellerMoving: !1, isSlideMoving: !1 }),
            a.detachDragEndListener();
        }),
        (a.handleLeaveWrapper = function () {
          (a.state.isTravellerMoving || a.state.isSlideMoving) &&
            (a.leaveTimer = window.setTimeout(
              a.handleDragEnd,
              a.props.leaveTimeOut
            ));
        }),
        (a.handleEnterSlideOrTraveller = function () {
          a.setState({ isTextActive: !0 });
        }),
        (a.handleLeaveSlideOrTraveller = function () {
          a.setState({ isTextActive: !1 });
        }),
        (a.handleSlideDragStart = function (i) {
          var o = Ug(i) ? i.changedTouches[0] : i;
          a.setState({
            isTravellerMoving: !1,
            isSlideMoving: !0,
            slideMoveStartX: o.pageX,
          }),
            a.attachDragEndListener();
        }),
        (a.travellerDragStartHandlers = {
          startX: a.handleTravellerDragStart.bind(Of(a), 'startX'),
          endX: a.handleTravellerDragStart.bind(Of(a), 'endX'),
        }),
        (a.state = {}),
        a
      );
    }
    return (
      z7(
        r,
        [
          {
            key: 'componentWillUnmount',
            value: function () {
              this.leaveTimer &&
                (clearTimeout(this.leaveTimer), (this.leaveTimer = null)),
                this.detachDragEndListener();
            },
          },
          {
            key: 'getIndex',
            value: function (a) {
              var i = a.startX,
                o = a.endX,
                s = this.state.scaleValues,
                l = this.props,
                c = l.gap,
                u = l.data,
                f = u.length - 1,
                d = Math.min(i, o),
                h = Math.max(i, o),
                v = r.getIndexInRange(s, d),
                p = r.getIndexInRange(s, h);
              return {
                startIndex: v - (v % c),
                endIndex: p === f ? f : p - (p % c),
              };
            },
          },
          {
            key: 'getTextOfTick',
            value: function (a) {
              var i = this.props,
                o = i.data,
                s = i.tickFormatter,
                l = i.dataKey,
                c = Dr(o[a], l, a);
              return pe(s) ? s(c, a) : c;
            },
          },
          {
            key: 'attachDragEndListener',
            value: function () {
              window.addEventListener('mouseup', this.handleDragEnd, !0),
                window.addEventListener('touchend', this.handleDragEnd, !0);
            },
          },
          {
            key: 'detachDragEndListener',
            value: function () {
              window.removeEventListener('mouseup', this.handleDragEnd, !0),
                window.removeEventListener('touchend', this.handleDragEnd, !0);
            },
          },
          {
            key: 'handleSlideDrag',
            value: function (a) {
              var i = this.state,
                o = i.slideMoveStartX,
                s = i.startX,
                l = i.endX,
                c = this.props,
                u = c.x,
                f = c.width,
                d = c.travellerWidth,
                h = c.startIndex,
                v = c.endIndex,
                p = c.onChange,
                m = a.pageX - o;
              m > 0
                ? (m = Math.min(m, u + f - d - l, u + f - d - s))
                : m < 0 && (m = Math.max(m, u - s, u - l));
              var g = this.getIndex({ startX: s + m, endX: l + m });
              (g.startIndex !== h || g.endIndex !== v) && p && p(g),
                this.setState({
                  startX: s + m,
                  endX: l + m,
                  slideMoveStartX: a.pageX,
                });
            },
          },
          {
            key: 'handleTravellerDragStart',
            value: function (a, i) {
              var o = Ug(i) ? i.changedTouches[0] : i;
              this.setState({
                isSlideMoving: !1,
                isTravellerMoving: !0,
                movingTravellerId: a,
                brushMoveStartX: o.pageX,
              }),
                this.attachDragEndListener();
            },
          },
          {
            key: 'handleTravellerMove',
            value: function (a) {
              var i,
                o = this.state,
                s = o.brushMoveStartX,
                l = o.movingTravellerId,
                c = o.endX,
                u = o.startX,
                f = this.state[l],
                d = this.props,
                h = d.x,
                v = d.width,
                p = d.travellerWidth,
                m = d.onChange,
                g = d.gap,
                _ = d.data,
                x = { startX: this.state.startX, endX: this.state.endX },
                b = a.pageX - s;
              b > 0
                ? (b = Math.min(b, h + v - p - f))
                : b < 0 && (b = Math.max(b, h - f)),
                (x[l] = f + b);
              var w = this.getIndex(x),
                O = w.startIndex,
                S = w.endIndex,
                $ = function () {
                  var P = _.length - 1;
                  return (
                    (l === 'startX' && (c > u ? O % g === 0 : S % g === 0)) ||
                    (c < u && S === P) ||
                    (l === 'endX' && (c > u ? S % g === 0 : O % g === 0)) ||
                    (c > u && S === P)
                  );
                };
              this.setState(
                ((i = {}),
                wf(i, l, f + b),
                wf(i, 'brushMoveStartX', a.pageX),
                i),
                function () {
                  m && $() && m(w);
                }
              );
            },
          },
          {
            key: 'renderBackground',
            value: function () {
              var a = this.props,
                i = a.x,
                o = a.y,
                s = a.width,
                l = a.height,
                c = a.fill,
                u = a.stroke;
              return y.createElement('rect', {
                stroke: u,
                fill: c,
                x: i,
                y: o,
                width: s,
                height: l,
              });
            },
          },
          {
            key: 'renderPanorama',
            value: function () {
              var a = this.props,
                i = a.x,
                o = a.y,
                s = a.width,
                l = a.height,
                c = a.data,
                u = a.children,
                f = a.padding,
                d = E.exports.Children.only(u);
              return d
                ? y.cloneElement(d, {
                    x: i,
                    y: o,
                    width: s,
                    height: l,
                    margin: f,
                    compact: !0,
                    data: c,
                  })
                : null;
            },
          },
          {
            key: 'renderTravellerLayer',
            value: function (a, i) {
              var o = this.props,
                s = o.y,
                l = o.travellerWidth,
                c = o.height,
                u = o.traveller,
                f = Math.max(a, this.props.x),
                d = Nc(
                  Nc({}, ze(this.props)),
                  {},
                  { x: f, y: s, width: l, height: c }
                );
              return y.createElement(
                Rt,
                {
                  className: 'recharts-brush-traveller',
                  onMouseEnter: this.handleEnterSlideOrTraveller,
                  onMouseLeave: this.handleLeaveSlideOrTraveller,
                  onMouseDown: this.travellerDragStartHandlers[i],
                  onTouchStart: this.travellerDragStartHandlers[i],
                  style: { cursor: 'col-resize' },
                },
                r.renderTraveller(u, d)
              );
            },
          },
          {
            key: 'renderSlide',
            value: function (a, i) {
              var o = this.props,
                s = o.y,
                l = o.height,
                c = o.stroke,
                u = o.travellerWidth,
                f = Math.min(a, i) + u,
                d = Math.max(Math.abs(i - a) - u, 0);
              return y.createElement('rect', {
                className: 'recharts-brush-slide',
                onMouseEnter: this.handleEnterSlideOrTraveller,
                onMouseLeave: this.handleLeaveSlideOrTraveller,
                onMouseDown: this.handleSlideDragStart,
                onTouchStart: this.handleSlideDragStart,
                style: { cursor: 'move' },
                stroke: 'none',
                fill: c,
                fillOpacity: 0.2,
                x: f,
                y: s,
                width: d,
                height: l,
              });
            },
          },
          {
            key: 'renderText',
            value: function () {
              var a = this.props,
                i = a.startIndex,
                o = a.endIndex,
                s = a.y,
                l = a.height,
                c = a.travellerWidth,
                u = a.stroke,
                f = this.state,
                d = f.startX,
                h = f.endX,
                v = 5,
                p = { pointerEvents: 'none', fill: u };
              return y.createElement(
                Rt,
                { className: 'recharts-brush-texts' },
                y.createElement(
                  Ei,
                  Ds(
                    {
                      textAnchor: 'end',
                      verticalAnchor: 'middle',
                      x: Math.min(d, h) - v,
                      y: s + l / 2,
                    },
                    p
                  ),
                  this.getTextOfTick(i)
                ),
                y.createElement(
                  Ei,
                  Ds(
                    {
                      textAnchor: 'start',
                      verticalAnchor: 'middle',
                      x: Math.max(d, h) + c + v,
                      y: s + l / 2,
                    },
                    p
                  ),
                  this.getTextOfTick(o)
                )
              );
            },
          },
          {
            key: 'render',
            value: function () {
              var a = this.props,
                i = a.data,
                o = a.className,
                s = a.children,
                l = a.x,
                c = a.y,
                u = a.width,
                f = a.height,
                d = a.alwaysShowText,
                h = this.state,
                v = h.startX,
                p = h.endX,
                m = h.isTextActive,
                g = h.isSlideMoving,
                _ = h.isTravellerMoving;
              if (
                !i ||
                !i.length ||
                !K(l) ||
                !K(c) ||
                !K(u) ||
                !K(f) ||
                u <= 0 ||
                f <= 0
              )
                return null;
              var x = Ze('recharts-brush', o),
                b = y.Children.count(s) === 1,
                w = B7('userSelect', 'none');
              return y.createElement(
                Rt,
                {
                  className: x,
                  onMouseMove: this.handleDrag,
                  onMouseLeave: this.handleLeaveWrapper,
                  onTouchMove: this.handleTouchMove,
                  style: w,
                },
                this.renderBackground(),
                b && this.renderPanorama(),
                this.renderSlide(v, p),
                this.renderTravellerLayer(v, 'startX'),
                this.renderTravellerLayer(p, 'endX'),
                (m || g || _ || d) && this.renderText()
              );
            },
          },
        ],
        [
          {
            key: 'renderDefaultTraveller',
            value: function (a) {
              var i = a.x,
                o = a.y,
                s = a.width,
                l = a.height,
                c = a.stroke,
                u = Math.floor(o + l / 2) - 1;
              return y.createElement(
                y.Fragment,
                null,
                y.createElement('rect', {
                  x: i,
                  y: o,
                  width: s,
                  height: l,
                  fill: c,
                  stroke: 'none',
                }),
                y.createElement('line', {
                  x1: i + 1,
                  y1: u,
                  x2: i + s - 1,
                  y2: u,
                  fill: 'none',
                  stroke: '#fff',
                }),
                y.createElement('line', {
                  x1: i + 1,
                  y1: u + 2,
                  x2: i + s - 1,
                  y2: u + 2,
                  fill: 'none',
                  stroke: '#fff',
                })
              );
            },
          },
          {
            key: 'renderTraveller',
            value: function (a, i) {
              var o;
              return (
                y.isValidElement(a)
                  ? (o = y.cloneElement(a, i))
                  : pe(a)
                  ? (o = a(i))
                  : (o = r.renderDefaultTraveller(i)),
                o
              );
            },
          },
          {
            key: 'getDerivedStateFromProps',
            value: function (a, i) {
              var o = a.data,
                s = a.width,
                l = a.x,
                c = a.travellerWidth,
                u = a.updateId,
                f = a.startIndex,
                d = a.endIndex;
              if (o !== i.prevData || u !== i.prevUpdateId)
                return Nc(
                  {
                    prevData: o,
                    prevTravellerWidth: c,
                    prevUpdateId: u,
                    prevX: l,
                    prevWidth: s,
                  },
                  o && o.length
                    ? G7({
                        data: o,
                        width: s,
                        x: l,
                        travellerWidth: c,
                        startIndex: f,
                        endIndex: d,
                      })
                    : { scale: null, scaleValues: null }
                );
              if (
                i.scale &&
                (s !== i.prevWidth ||
                  l !== i.prevX ||
                  c !== i.prevTravellerWidth)
              ) {
                i.scale.range([l, l + s - c]);
                var h = i.scale.domain().map(function (v) {
                  return i.scale(v);
                });
                return {
                  prevData: o,
                  prevTravellerWidth: c,
                  prevUpdateId: u,
                  prevX: l,
                  prevWidth: s,
                  startX: i.scale(a.startIndex),
                  endX: i.scale(a.endIndex),
                  scaleValues: h,
                };
              }
              return null;
            },
          },
          {
            key: 'getIndexInRange',
            value: function (a, i) {
              for (var o = a.length, s = 0, l = o - 1; l - s > 1; ) {
                var c = Math.floor((s + l) / 2);
                a[c] > i ? (l = c) : (s = c);
              }
              return i >= a[l] ? l : s;
            },
          },
        ]
      ),
      r
    );
  })(E.exports.PureComponent);
Ii.displayName = 'Brush';
Ii.defaultProps = {
  height: 40,
  travellerWidth: 5,
  gap: 1,
  fill: '#fff',
  stroke: '#666',
  padding: { top: 1, right: 1, bottom: 1, left: 1 },
  leaveTimeOut: 1e3,
  alwaysShowText: !1,
};
var q7 = zd;
function Y7(e, t) {
  var r;
  return (
    q7(e, function (n, a, i) {
      return (r = t(n, a, i)), !r;
    }),
    !!r
  );
}
var K7 = Y7,
  X7 = h0,
  J7 = gn,
  Z7 = K7,
  Q7 = Me,
  eG = $l;
function tG(e, t, r) {
  var n = Q7(e) ? X7 : Z7;
  return r && eG(e, t, r) && (t = void 0), n(e, J7(t));
}
var rG = tG,
  Tr = function (t, r) {
    var n = t.alwaysShow,
      a = t.ifOverflow;
    return n && (a = 'extendDomain'), a === r;
  };
function nG(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (!t(e[r], r, e)) return !1;
  return !0;
}
var aG = nG,
  iG = zd;
function oG(e, t) {
  var r = !0;
  return (
    iG(e, function (n, a, i) {
      return (r = !!t(n, a, i)), r;
    }),
    r
  );
}
var sG = oG,
  lG = aG,
  cG = sG,
  uG = gn,
  fG = Me,
  dG = $l;
function pG(e, t, r) {
  var n = fG(e) ? lG : cG;
  return r && dG(e, t, r) && (t = void 0), n(e, uG(t));
}
var V1 = pG,
  Hg = cx;
function hG(e, t, r) {
  t == '__proto__' && Hg
    ? Hg(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
    : (e[t] = r);
}
var vG = hG,
  mG = vG,
  gG = ox,
  yG = gn;
function bG(e, t) {
  var r = {};
  return (
    (t = yG(t)),
    gG(e, function (n, a, i) {
      mG(r, a, t(n, a, i));
    }),
    r
  );
}
var xG = bG;
function wG(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function Vg(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function _G(e, t, r) {
  return t && Vg(e.prototype, t), r && Vg(e, r), e;
}
function Gg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function gr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Gg(Object(r), !0).forEach(function (n) {
          pp(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Gg(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function pp(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var OG = function (t, r, n, a, i) {
    var o = t.width,
      s = t.height,
      l = t.layout,
      c = t.children,
      u = Object.keys(r),
      f = {
        left: n.left,
        leftMirror: n.left,
        right: o - n.right,
        rightMirror: o - n.right,
        top: n.top,
        topMirror: n.top,
        bottom: s - n.bottom,
        bottomMirror: s - n.bottom,
      },
      d = !!Wr(c, 'Bar');
    return u.reduce(function (h, v) {
      var p = r[v],
        m = p.orientation,
        g = p.domain,
        _ = p.padding,
        x = _ === void 0 ? {} : _,
        b = p.mirror,
        w = p.reversed,
        O = ''.concat(m).concat(b ? 'Mirror' : ''),
        S,
        $,
        A,
        P,
        C;
      if (
        p.type === 'number' &&
        (p.padding === 'gap' || p.padding === 'no-gap')
      ) {
        var k = g[1] - g[0],
          T = 1 / 0,
          D = p.categoricalDomain.sort();
        D.forEach(function (Se, le) {
          le > 0 && (T = Math.min((Se || 0) - (D[le - 1] || 0), T));
        });
        var j = T / k,
          R = p.layout === 'vertical' ? n.height : n.width;
        if (
          (p.padding === 'gap' && (S = (j * R) / 2), p.padding === 'no-gap')
        ) {
          var N = ya(t.barCategoryGap, j * R),
            z = (j * R) / 2;
          S = z - N - ((z - N) / R) * N;
        }
      }
      a === 'xAxis'
        ? ($ = [
            n.left + (x.left || 0) + (S || 0),
            n.left + n.width - (x.right || 0) - (S || 0),
          ])
        : a === 'yAxis'
        ? ($ =
            l === 'horizontal'
              ? [n.top + n.height - (x.bottom || 0), n.top + (x.top || 0)]
              : [
                  n.top + (x.top || 0) + (S || 0),
                  n.top + n.height - (x.bottom || 0) - (S || 0),
                ])
        : ($ = p.range),
        w && ($ = [$[1], $[0]]);
      var M = GH(p, i, d),
        Y = M.scale,
        Z = M.realScaleType;
      Y.domain(g).range($), qH(Y);
      var ne = rV(Y, gr(gr({}, p), {}, { realScaleType: Z }));
      a === 'xAxis'
        ? ((C = (m === 'top' && !b) || (m === 'bottom' && b)),
          (A = n.left),
          (P = f[O] - C * p.height))
        : a === 'yAxis' &&
          ((C = (m === 'left' && !b) || (m === 'right' && b)),
          (A = f[O] - C * p.width),
          (P = n.top));
      var ve = gr(
        gr(gr({}, p), ne),
        {},
        {
          realScaleType: Z,
          x: A,
          y: P,
          scale: Y,
          width: a === 'xAxis' ? n.width : p.width,
          height: a === 'yAxis' ? n.height : p.height,
        }
      );
      return (
        (ve.bandSize = Es(ve, ne)),
        !p.hide && a === 'xAxis'
          ? (f[O] += (C ? -1 : 1) * ve.height)
          : p.hide || (f[O] += (C ? -1 : 1) * ve.width),
        gr(gr({}, h), {}, pp({}, v, ve))
      );
    }, {});
  },
  G1 = function (t, r) {
    var n = t.x,
      a = t.y,
      i = r.x,
      o = r.y;
    return {
      x: Math.min(n, i),
      y: Math.min(a, o),
      width: Math.abs(i - n),
      height: Math.abs(o - a),
    };
  },
  SG = function (t) {
    var r = t.x1,
      n = t.y1,
      a = t.x2,
      i = t.y2;
    return G1({ x: r, y: n }, { x: a, y: i });
  },
  q1 = (function () {
    function e(t) {
      wG(this, e), (this.scale = void 0), (this.scale = t);
    }
    return (
      _G(
        e,
        [
          {
            key: 'domain',
            get: function () {
              return this.scale.domain;
            },
          },
          {
            key: 'range',
            get: function () {
              return this.scale.range;
            },
          },
          {
            key: 'rangeMin',
            get: function () {
              return this.range()[0];
            },
          },
          {
            key: 'rangeMax',
            get: function () {
              return this.range()[1];
            },
          },
          {
            key: 'bandwidth',
            get: function () {
              return this.scale.bandwidth;
            },
          },
          {
            key: 'apply',
            value: function (r) {
              var n =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {},
                a = n.bandAware,
                i = n.position;
              if (r !== void 0) {
                if (i)
                  switch (i) {
                    case 'start':
                      return this.scale(r);
                    case 'middle': {
                      var o = this.bandwidth ? this.bandwidth() / 2 : 0;
                      return this.scale(r) + o;
                    }
                    case 'end': {
                      var s = this.bandwidth ? this.bandwidth() : 0;
                      return this.scale(r) + s;
                    }
                    default:
                      return this.scale(r);
                  }
                if (a) {
                  var l = this.bandwidth ? this.bandwidth() / 2 : 0;
                  return this.scale(r) + l;
                }
                return this.scale(r);
              }
            },
          },
          {
            key: 'isInRange',
            value: function (r) {
              var n = this.range(),
                a = n[0],
                i = n[n.length - 1];
              return a <= i ? r >= a && r <= i : r >= i && r <= a;
            },
          },
        ],
        [
          {
            key: 'create',
            value: function (r) {
              return new e(r);
            },
          },
        ]
      ),
      e
    );
  })();
q1.EPS = 1e-4;
var hp = function (t) {
  var r = Object.keys(t).reduce(function (n, a) {
    return gr(gr({}, n), {}, pp({}, a, q1.create(t[a])));
  }, {});
  return gr(
    gr({}, r),
    {},
    {
      apply: function (a) {
        var i =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          o = i.bandAware,
          s = i.position;
        return xG(a, function (l, c) {
          return r[c].apply(l, { bandAware: o, position: s });
        });
      },
      isInRange: function (a) {
        return V1(a, function (i, o) {
          return r[o].isInRange(i);
        });
      },
    }
  );
};
function qg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Yg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? qg(Object(r), !0).forEach(function (n) {
          EG(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : qg(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function EG(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function $G(e, t) {
  return kG(e) || PG(e, t) || CG(e, t) || AG();
}
function AG() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function CG(e, t) {
  if (!!e) {
    if (typeof e == 'string') return Kg(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === 'Object' && e.constructor && (r = e.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Kg(e, t);
  }
}
function Kg(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function PG(e, t) {
  if (!(typeof Symbol > 'u' || !(Symbol.iterator in Object(e)))) {
    var r = [],
      n = !0,
      a = !1,
      i = void 0;
    try {
      for (
        var o = e[Symbol.iterator](), s;
        !(n = (s = o.next()).done) && (r.push(s.value), !(t && r.length === t));
        n = !0
      );
    } catch (l) {
      (a = !0), (i = l);
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (a) throw i;
      }
    }
    return r;
  }
}
function kG(e) {
  if (Array.isArray(e)) return e;
}
function Sf() {
  return (
    (Sf =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Sf.apply(this, arguments)
  );
}
var TG = function (t, r) {
    var n;
    return (
      y.isValidElement(t)
        ? (n = y.cloneElement(t, r))
        : pe(t)
        ? (n = t(r))
        : (n = y.createElement(
            'line',
            Sf({}, r, { className: 'recharts-reference-line-line' })
          )),
      n
    );
  },
  MG = function (t, r, n, a, i) {
    var o = i.viewBox,
      s = o.x,
      l = o.y,
      c = o.width,
      u = o.height,
      f = i.position;
    if (n) {
      var d = i.y,
        h = i.yAxis.orientation,
        v = t.y.apply(d, { position: f });
      if (Tr(i, 'discard') && !t.y.isInRange(v)) return null;
      var p = [
        { x: s + c, y: v },
        { x: s, y: v },
      ];
      return h === 'left' ? p.reverse() : p;
    }
    if (r) {
      var m = i.x,
        g = i.xAxis.orientation,
        _ = t.x.apply(m, { position: f });
      if (Tr(i, 'discard') && !t.x.isInRange(_)) return null;
      var x = [
        { x: _, y: l + u },
        { x: _, y: l },
      ];
      return g === 'top' ? x.reverse() : x;
    }
    if (a) {
      var b = i.segment,
        w = b.map(function (O) {
          return t.apply(O, { position: f });
        });
      return Tr(i, 'discard') &&
        rG(w, function (O) {
          return !t.isInRange(O);
        })
        ? null
        : w;
    }
    return null;
  };
function vp(e) {
  var t = e.x,
    r = e.y,
    n = e.segment,
    a = e.xAxis,
    i = e.yAxis,
    o = e.shape,
    s = e.className,
    l = e.alwaysShow,
    c = e.clipPathId;
  oa(
    l === void 0,
    'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'
  );
  var u = hp({ x: a.scale, y: i.scale }),
    f = ht(t),
    d = ht(r),
    h = n && n.length === 2,
    v = MG(u, f, d, h, e);
  if (!v) return null;
  var p = $G(v, 2),
    m = p[0],
    g = m.x,
    _ = m.y,
    x = p[1],
    b = x.x,
    w = x.y,
    O = Tr(e, 'hidden') ? 'url(#'.concat(c, ')') : void 0,
    S = Yg(Yg({ clipPath: O }, ze(e, !0)), {}, { x1: g, y1: _, x2: b, y2: w });
  return y.createElement(
    Rt,
    { className: Ze('recharts-reference-line', s) },
    TG(o, S),
    _t.renderCallByParent(e, SG({ x1: g, y1: _, x2: b, y2: w }))
  );
}
vp.displayName = 'ReferenceLine';
vp.defaultProps = {
  isFront: !1,
  ifOverflow: 'discard',
  xAxisId: 0,
  yAxisId: 0,
  fill: 'none',
  stroke: '#ccc',
  fillOpacity: 1,
  strokeWidth: 1,
  position: 'middle',
};
function Ef() {
  return (
    (Ef =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Ef.apply(this, arguments)
  );
}
function Xg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Jg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Xg(Object(r), !0).forEach(function (n) {
          IG(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Xg(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function IG(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var RG = function (t) {
  var r = t.x,
    n = t.y,
    a = t.xAxis,
    i = t.yAxis,
    o = hp({ x: a.scale, y: i.scale }),
    s = o.apply({ x: r, y: n }, { bandAware: !0 });
  return Tr(t, 'discard') && !o.isInRange(s) ? null : s;
};
function Yi(e) {
  var t = e.x,
    r = e.y,
    n = e.r,
    a = e.alwaysShow,
    i = e.clipPathId,
    o = ht(t),
    s = ht(r);
  if (
    (oa(
      a === void 0,
      'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'
    ),
    !o || !s)
  )
    return null;
  var l = RG(e);
  if (!l) return null;
  var c = l.x,
    u = l.y,
    f = e.shape,
    d = e.className,
    h = Tr(e, 'hidden') ? 'url(#'.concat(i, ')') : void 0,
    v = Jg(Jg({ clipPath: h }, ze(e, !0)), {}, { cx: c, cy: u });
  return y.createElement(
    Rt,
    { className: Ze('recharts-reference-dot', d) },
    Yi.renderDot(f, v),
    _t.renderCallByParent(e, {
      x: c - n,
      y: u - n,
      width: 2 * n,
      height: 2 * n,
    })
  );
}
Yi.displayName = 'ReferenceDot';
Yi.defaultProps = {
  isFront: !1,
  ifOverflow: 'discard',
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: '#fff',
  stroke: '#ccc',
  fillOpacity: 1,
  strokeWidth: 1,
};
Yi.renderDot = function (e, t) {
  var r;
  return (
    y.isValidElement(e)
      ? (r = y.cloneElement(e, t))
      : pe(e)
      ? (r = e(t))
      : (r = y.createElement(
          z1,
          Ef({}, t, {
            cx: t.cx,
            cy: t.cy,
            className: 'recharts-reference-dot-dot',
          })
        )),
    r
  );
};
function $f() {
  return (
    ($f =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    $f.apply(this, arguments)
  );
}
function Zg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Qg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Zg(Object(r), !0).forEach(function (n) {
          DG(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Zg(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function DG(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var jG = function (t, r, n, a, i) {
  var o = i.x1,
    s = i.x2,
    l = i.y1,
    c = i.y2,
    u = i.xAxis,
    f = i.yAxis;
  if (!u || !f) return null;
  var d = hp({ x: u.scale, y: f.scale }),
    h = {
      x: t ? d.x.apply(o, { position: 'start' }) : d.x.rangeMin,
      y: n ? d.y.apply(l, { position: 'start' }) : d.y.rangeMin,
    },
    v = {
      x: r ? d.x.apply(s, { position: 'end' }) : d.x.rangeMax,
      y: a ? d.y.apply(c, { position: 'end' }) : d.y.rangeMax,
    };
  return Tr(i, 'discard') && (!d.isInRange(h) || !d.isInRange(v))
    ? null
    : G1(h, v);
};
function Ki(e) {
  var t = e.x1,
    r = e.x2,
    n = e.y1,
    a = e.y2,
    i = e.className,
    o = e.alwaysShow,
    s = e.clipPathId;
  oa(
    o === void 0,
    'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'
  );
  var l = ht(t),
    c = ht(r),
    u = ht(n),
    f = ht(a),
    d = e.shape;
  if (!l && !c && !u && !f && !d) return null;
  var h = jG(l, c, u, f, e);
  if (!h && !d) return null;
  var v = Tr(e, 'hidden') ? 'url(#'.concat(s, ')') : void 0;
  return y.createElement(
    Rt,
    { className: Ze('recharts-reference-area', i) },
    Ki.renderRect(d, Qg(Qg({ clipPath: v }, ze(e, !0)), h)),
    _t.renderCallByParent(e, h)
  );
}
Ki.displayName = 'ReferenceArea';
Ki.defaultProps = {
  isFront: !1,
  ifOverflow: 'discard',
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: '#ccc',
  fillOpacity: 0.5,
  stroke: 'none',
  strokeWidth: 1,
};
Ki.renderRect = function (e, t) {
  var r;
  return (
    y.isValidElement(e)
      ? (r = y.cloneElement(e, t))
      : pe(e)
      ? (r = e(t))
      : (r = y.createElement(
          Ll,
          $f({}, t, { className: 'recharts-reference-area-rect' })
        )),
    r
  );
};
function Io(e) {
  return (
    typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
      ? (Io = function (r) {
          return typeof r;
        })
      : (Io = function (r) {
          return r &&
            typeof Symbol == 'function' &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? 'symbol'
            : typeof r;
        }),
    Io(e)
  );
}
function ea() {
  return (
    (ea =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    ea.apply(this, arguments)
  );
}
function ey(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Re(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ey(Object(r), !0).forEach(function (n) {
          NG(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : ey(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function NG(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function Lc(e, t) {
  if (e == null) return {};
  var r = LG(e, t),
    n,
    a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      (n = i[a]),
        !(t.indexOf(n) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function LG(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    a,
    i;
  for (i = 0; i < n.length; i++)
    (a = n[i]), !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function BG(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function ty(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function FG(e, t, r) {
  return t && ty(e.prototype, t), r && ty(e, r), e;
}
function zG(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && Af(e, t);
}
function Af(e, t) {
  return (
    (Af =
      Object.setPrototypeOf ||
      function (n, a) {
        return (n.__proto__ = a), n;
      }),
    Af(e, t)
  );
}
function WG(e) {
  var t = VG();
  return function () {
    var n = Ns(e),
      a;
    if (t) {
      var i = Ns(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else a = n.apply(this, arguments);
    return UG(this, a);
  };
}
function UG(e, t) {
  return t && (Io(t) === 'object' || typeof t == 'function') ? t : HG(e);
}
function HG(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function VG() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Ns(e) {
  return (
    (Ns = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Ns(e)
  );
}
var En = (function (e) {
  zG(r, e);
  var t = WG(r);
  function r(n) {
    var a;
    return (
      BG(this, r),
      (a = t.call(this, n)),
      (a.layerReference = void 0),
      (a.state = { fontSize: '', letterSpacing: '' }),
      a
    );
  }
  return (
    FG(
      r,
      [
        {
          key: 'shouldComponentUpdate',
          value: function (a, i) {
            var o = a.viewBox,
              s = Lc(a, ['viewBox']),
              l = this.props,
              c = l.viewBox,
              u = Lc(l, ['viewBox']);
            return !sa(o, c) || !sa(s, u) || !sa(i, this.state);
          },
        },
        {
          key: 'componentDidMount',
          value: function () {
            var a = this.layerReference;
            if (!!a) {
              var i = a.getElementsByClassName(
                'recharts-cartesian-axis-tick-value'
              )[0];
              i &&
                this.setState({
                  fontSize: window.getComputedStyle(i).fontSize,
                  letterSpacing: window.getComputedStyle(i).letterSpacing,
                });
            }
          },
        },
        {
          key: 'getTickLineCoord',
          value: function (a) {
            var i = this.props,
              o = i.x,
              s = i.y,
              l = i.width,
              c = i.height,
              u = i.orientation,
              f = i.tickSize,
              d = i.mirror,
              h = i.tickMargin,
              v,
              p,
              m,
              g,
              _,
              x,
              b = d ? -1 : 1,
              w = a.tickSize || f,
              O = K(a.tickCoord) ? a.tickCoord : a.coordinate;
            switch (u) {
              case 'top':
                (v = p = a.coordinate),
                  (g = s + +!d * c),
                  (m = g - b * w),
                  (x = m - b * h),
                  (_ = O);
                break;
              case 'left':
                (m = g = a.coordinate),
                  (p = o + +!d * l),
                  (v = p - b * w),
                  (_ = v - b * h),
                  (x = O);
                break;
              case 'right':
                (m = g = a.coordinate),
                  (p = o + +d * l),
                  (v = p + b * w),
                  (_ = v + b * h),
                  (x = O);
                break;
              default:
                (v = p = a.coordinate),
                  (g = s + +d * c),
                  (m = g + b * w),
                  (x = m + b * h),
                  (_ = O);
                break;
            }
            return {
              line: { x1: v, y1: m, x2: p, y2: g },
              tick: { x: _, y: x },
            };
          },
        },
        {
          key: 'getTickTextAnchor',
          value: function () {
            var a = this.props,
              i = a.orientation,
              o = a.mirror,
              s;
            switch (i) {
              case 'left':
                s = o ? 'start' : 'end';
                break;
              case 'right':
                s = o ? 'end' : 'start';
                break;
              default:
                s = 'middle';
                break;
            }
            return s;
          },
        },
        {
          key: 'getTickVerticalAnchor',
          value: function () {
            var a = this.props,
              i = a.orientation,
              o = a.mirror,
              s = 'end';
            switch (i) {
              case 'left':
              case 'right':
                s = 'middle';
                break;
              case 'top':
                s = o ? 'start' : 'end';
                break;
              default:
                s = o ? 'end' : 'start';
                break;
            }
            return s;
          },
        },
        {
          key: 'renderAxisLine',
          value: function () {
            var a = this.props,
              i = a.x,
              o = a.y,
              s = a.width,
              l = a.height,
              c = a.orientation,
              u = a.mirror,
              f = a.axisLine,
              d = Re(Re(Re({}, ze(this.props)), ze(f)), {}, { fill: 'none' });
            if (c === 'top' || c === 'bottom') {
              var h = +((c === 'top' && !u) || (c === 'bottom' && u));
              d = Re(
                Re({}, d),
                {},
                { x1: i, y1: o + h * l, x2: i + s, y2: o + h * l }
              );
            } else {
              var v = +((c === 'left' && !u) || (c === 'right' && u));
              d = Re(
                Re({}, d),
                {},
                { x1: i + v * s, y1: o, x2: i + v * s, y2: o + l }
              );
            }
            return y.createElement(
              'line',
              ea({}, d, {
                className: Ze(
                  'recharts-cartesian-axis-line',
                  Qt(f, 'className')
                ),
              })
            );
          },
        },
        {
          key: 'renderTicks',
          value: function (a, i, o) {
            var s = this,
              l = this.props,
              c = l.tickLine,
              u = l.stroke,
              f = l.tick,
              d = l.tickFormatter,
              h = l.unit,
              v = r.getTicks(Re(Re({}, this.props), {}, { ticks: a }), i, o),
              p = this.getTickTextAnchor(),
              m = this.getTickVerticalAnchor(),
              g = ze(this.props),
              _ = ze(f),
              x = Re(Re({}, g), {}, { fill: 'none' }, ze(c)),
              b = v.map(function (w, O) {
                var S = s.getTickLineCoord(w),
                  $ = S.line,
                  A = S.tick,
                  P = Re(
                    Re(
                      Re(
                        Re({ textAnchor: p, verticalAnchor: m }, g),
                        {},
                        { stroke: 'none', fill: u },
                        _
                      ),
                      A
                    ),
                    {},
                    {
                      index: O,
                      payload: w,
                      visibleTicksCount: v.length,
                      tickFormatter: d,
                    }
                  );
                return y.createElement(
                  Rt,
                  ea(
                    {
                      className: 'recharts-cartesian-axis-tick',
                      key: 'tick-'.concat(O),
                    },
                    Xo(s.props, w, O)
                  ),
                  c &&
                    y.createElement(
                      'line',
                      ea({}, x, $, {
                        className: Ze(
                          'recharts-cartesian-axis-tick-line',
                          Qt(c, 'className')
                        ),
                      })
                    ),
                  f &&
                    r.renderTickItem(
                      f,
                      P,
                      ''.concat(pe(d) ? d(w.value, O) : w.value).concat(h || '')
                    )
                );
              });
            return y.createElement(
              'g',
              { className: 'recharts-cartesian-axis-ticks' },
              b
            );
          },
        },
        {
          key: 'render',
          value: function () {
            var a = this,
              i = this.props,
              o = i.axisLine,
              s = i.width,
              l = i.height,
              c = i.ticksGenerator,
              u = i.className,
              f = i.hide;
            if (f) return null;
            var d = this.props,
              h = d.ticks,
              v = Lc(d, ['ticks']),
              p = h;
            return (
              pe(c) && (p = h && h.length > 0 ? c(this.props) : c(v)),
              s <= 0 || l <= 0 || !p || !p.length
                ? null
                : y.createElement(
                    Rt,
                    {
                      className: Ze('recharts-cartesian-axis', u),
                      ref: function (g) {
                        a.layerReference = g;
                      },
                    },
                    o && this.renderAxisLine(),
                    this.renderTicks(
                      p,
                      this.state.fontSize,
                      this.state.letterSpacing
                    ),
                    _t.renderCallByParent(this.props)
                  )
            );
          },
        },
      ],
      [
        {
          key: 'getTicks',
          value: function (a, i, o) {
            var s = a.tick,
              l = a.ticks,
              c = a.viewBox,
              u = a.minTickGap,
              f = a.orientation,
              d = a.interval,
              h = a.tickFormatter,
              v = a.unit;
            return !l || !l.length || !s
              ? []
              : K(d) || ln.isSsr
              ? r.getNumberIntervalTicks(
                  l,
                  typeof d == 'number' && K(d) ? d : 0
                )
              : d === 'preserveStartEnd'
              ? r.getTicksStart(
                  {
                    ticks: l,
                    tickFormatter: h,
                    viewBox: c,
                    orientation: f,
                    minTickGap: u,
                    unit: v,
                    fontSize: i,
                    letterSpacing: o,
                  },
                  !0
                )
              : d === 'preserveStart'
              ? r.getTicksStart({
                  ticks: l,
                  tickFormatter: h,
                  viewBox: c,
                  orientation: f,
                  minTickGap: u,
                  unit: v,
                  fontSize: i,
                  letterSpacing: o,
                })
              : r.getTicksEnd({
                  ticks: l,
                  tickFormatter: h,
                  viewBox: c,
                  orientation: f,
                  minTickGap: u,
                  unit: v,
                  fontSize: i,
                  letterSpacing: o,
                });
          },
        },
        {
          key: 'getNumberIntervalTicks',
          value: function (a, i) {
            return a.filter(function (o, s) {
              return s % (i + 1) === 0;
            });
          },
        },
        {
          key: 'getTicksStart',
          value: function (a, i) {
            var o = a.ticks,
              s = a.tickFormatter,
              l = a.viewBox,
              c = a.orientation,
              u = a.minTickGap,
              f = a.unit,
              d = a.fontSize,
              h = a.letterSpacing,
              v = l.x,
              p = l.y,
              m = l.width,
              g = l.height,
              _ = c === 'top' || c === 'bottom' ? 'width' : 'height',
              x = (o || []).slice(),
              b =
                f && _ === 'width'
                  ? Sn(f, { fontSize: d, letterSpacing: h })[_]
                  : 0,
              w = x.length,
              O = w >= 2 ? or(x[1].coordinate - x[0].coordinate) : 1,
              S,
              $;
            if (
              (O === 1
                ? ((S = _ === 'width' ? v : p),
                  ($ = _ === 'width' ? v + m : p + g))
                : ((S = _ === 'width' ? v + m : p + g),
                  ($ = _ === 'width' ? v : p)),
              i)
            ) {
              var A = o[w - 1],
                P = pe(s) ? s(A.value, w - 1) : A.value,
                C = Sn(P, { fontSize: d, letterSpacing: h })[_] + b,
                k = O * (A.coordinate + (O * C) / 2 - $);
              x[w - 1] = A = Re(
                Re({}, A),
                {},
                { tickCoord: k > 0 ? A.coordinate - k * O : A.coordinate }
              );
              var T =
                O * (A.tickCoord - (O * C) / 2 - S) >= 0 &&
                O * (A.tickCoord + (O * C) / 2 - $) <= 0;
              T &&
                (($ = A.tickCoord - O * (C / 2 + u)),
                (x[w - 1] = Re(Re({}, A), {}, { isShow: !0 })));
            }
            for (var D = i ? w - 1 : w, j = 0; j < D; j++) {
              var R = x[j],
                N = pe(s) ? s(R.value, j) : R.value,
                z = Sn(N, { fontSize: d, letterSpacing: h })[_] + b;
              if (j === 0) {
                var M = O * (R.coordinate - (O * z) / 2 - S);
                x[j] = R = Re(
                  Re({}, R),
                  {},
                  { tickCoord: M < 0 ? R.coordinate - M * O : R.coordinate }
                );
              } else x[j] = R = Re(Re({}, R), {}, { tickCoord: R.coordinate });
              var Y =
                O * (R.tickCoord - (O * z) / 2 - S) >= 0 &&
                O * (R.tickCoord + (O * z) / 2 - $) <= 0;
              Y &&
                ((S = R.tickCoord + O * (z / 2 + u)),
                (x[j] = Re(Re({}, R), {}, { isShow: !0 })));
            }
            return x.filter(function (Z) {
              return Z.isShow;
            });
          },
        },
        {
          key: 'getTicksEnd',
          value: function (a) {
            var i = a.ticks,
              o = a.tickFormatter,
              s = a.viewBox,
              l = a.orientation,
              c = a.minTickGap,
              u = a.unit,
              f = a.fontSize,
              d = a.letterSpacing,
              h = s.x,
              v = s.y,
              p = s.width,
              m = s.height,
              g = l === 'top' || l === 'bottom' ? 'width' : 'height',
              _ =
                u && g === 'width'
                  ? Sn(u, { fontSize: f, letterSpacing: d })[g]
                  : 0,
              x = (i || []).slice(),
              b = x.length,
              w = b >= 2 ? or(x[1].coordinate - x[0].coordinate) : 1,
              O,
              S;
            w === 1
              ? ((O = g === 'width' ? h : v),
                (S = g === 'width' ? h + p : v + m))
              : ((O = g === 'width' ? h + p : v + m),
                (S = g === 'width' ? h : v));
            for (var $ = b - 1; $ >= 0; $--) {
              var A = x[$],
                P = pe(o) ? o(A.value, b - $ - 1) : A.value,
                C = Sn(P, { fontSize: f, letterSpacing: d })[g] + _;
              if ($ === b - 1) {
                var k = w * (A.coordinate + (w * C) / 2 - S);
                x[$] = A = Re(
                  Re({}, A),
                  {},
                  { tickCoord: k > 0 ? A.coordinate - k * w : A.coordinate }
                );
              } else x[$] = A = Re(Re({}, A), {}, { tickCoord: A.coordinate });
              var T =
                w * (A.tickCoord - (w * C) / 2 - O) >= 0 &&
                w * (A.tickCoord + (w * C) / 2 - S) <= 0;
              T &&
                ((S = A.tickCoord - w * (C / 2 + c)),
                (x[$] = Re(Re({}, A), {}, { isShow: !0 })));
            }
            return x.filter(function (D) {
              return D.isShow;
            });
          },
        },
        {
          key: 'renderTickItem',
          value: function (a, i, o) {
            var s;
            return (
              y.isValidElement(a)
                ? (s = y.cloneElement(a, i))
                : pe(a)
                ? (s = a(i))
                : (s = y.createElement(
                    Ei,
                    ea({}, i, {
                      className: 'recharts-cartesian-axis-tick-value',
                    }),
                    o
                  )),
              s
            );
          },
        },
      ]
    ),
    r
  );
})(E.exports.Component);
En.displayName = 'CartesianAxis';
En.defaultProps = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: { x: 0, y: 0, width: 0, height: 0 },
  orientation: 'bottom',
  ticks: [],
  stroke: '#666',
  tickLine: !0,
  axisLine: !0,
  tick: !0,
  mirror: !1,
  minTickGap: 5,
  tickSize: 6,
  tickMargin: 2,
  interval: 'preserveEnd',
};
function Ro(e) {
  return (
    typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
      ? (Ro = function (r) {
          return typeof r;
        })
      : (Ro = function (r) {
          return r &&
            typeof Symbol == 'function' &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? 'symbol'
            : typeof r;
        }),
    Ro(e)
  );
}
function Cf() {
  return (
    (Cf =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Cf.apply(this, arguments)
  );
}
function GG(e, t) {
  if (e == null) return {};
  var r = qG(e, t),
    n,
    a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      (n = i[a]),
        !(t.indexOf(n) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function qG(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    a,
    i;
  for (i = 0; i < n.length; i++)
    (a = n[i]), !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function ry(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function vo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ry(Object(r), !0).forEach(function (n) {
          YG(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : ry(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function YG(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function KG(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function ny(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function XG(e, t, r) {
  return t && ny(e.prototype, t), r && ny(e, r), e;
}
function JG(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && Pf(e, t);
}
function Pf(e, t) {
  return (
    (Pf =
      Object.setPrototypeOf ||
      function (n, a) {
        return (n.__proto__ = a), n;
      }),
    Pf(e, t)
  );
}
function ZG(e) {
  var t = tq();
  return function () {
    var n = Ls(e),
      a;
    if (t) {
      var i = Ls(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else a = n.apply(this, arguments);
    return QG(this, a);
  };
}
function QG(e, t) {
  return t && (Ro(t) === 'object' || typeof t == 'function') ? t : eq(e);
}
function eq(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function tq() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Ls(e) {
  return (
    (Ls = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Ls(e)
  );
}
var mp = (function (e) {
  JG(r, e);
  var t = ZG(r);
  function r() {
    return KG(this, r), t.apply(this, arguments);
  }
  return (
    XG(
      r,
      [
        {
          key: 'renderHorizontal',
          value: function (a) {
            var i = this,
              o = this.props,
              s = o.x,
              l = o.width,
              c = o.horizontal;
            if (!a || !a.length) return null;
            var u = a.map(function (f, d) {
              var h = vo(
                vo({}, i.props),
                {},
                {
                  x1: s,
                  y1: f,
                  x2: s + l,
                  y2: f,
                  key: 'line-'.concat(d),
                  index: d,
                }
              );
              return r.renderLineItem(c, h);
            });
            return y.createElement(
              'g',
              { className: 'recharts-cartesian-grid-horizontal' },
              u
            );
          },
        },
        {
          key: 'renderVertical',
          value: function (a) {
            var i = this,
              o = this.props,
              s = o.y,
              l = o.height,
              c = o.vertical;
            if (!a || !a.length) return null;
            var u = a.map(function (f, d) {
              var h = vo(
                vo({}, i.props),
                {},
                {
                  x1: f,
                  y1: s,
                  x2: f,
                  y2: s + l,
                  key: 'line-'.concat(d),
                  index: d,
                }
              );
              return r.renderLineItem(c, h);
            });
            return y.createElement(
              'g',
              { className: 'recharts-cartesian-grid-vertical' },
              u
            );
          },
        },
        {
          key: 'renderVerticalStripes',
          value: function (a) {
            var i = this.props.verticalFill;
            if (!i || !i.length) return null;
            var o = this.props,
              s = o.fillOpacity,
              l = o.x,
              c = o.y,
              u = o.width,
              f = o.height,
              d = a.slice().sort(function (v, p) {
                return v - p;
              });
            l !== d[0] && d.unshift(0);
            var h = d.map(function (v, p) {
              var m = d[p + 1] ? d[p + 1] - v : l + u - v;
              if (m <= 0) return null;
              var g = p % i.length;
              return y.createElement('rect', {
                key: 'react-'.concat(p),
                x: Math.round(v + l - l),
                y: c,
                width: m,
                height: f,
                stroke: 'none',
                fill: i[g],
                fillOpacity: s,
                className: 'recharts-cartesian-grid-bg',
              });
            });
            return y.createElement(
              'g',
              { className: 'recharts-cartesian-gridstripes-vertical' },
              h
            );
          },
        },
        {
          key: 'renderHorizontalStripes',
          value: function (a) {
            var i = this.props.horizontalFill;
            if (!i || !i.length) return null;
            var o = this.props,
              s = o.fillOpacity,
              l = o.x,
              c = o.y,
              u = o.width,
              f = o.height,
              d = a.slice().sort(function (v, p) {
                return v - p;
              });
            c !== d[0] && d.unshift(0);
            var h = d.map(function (v, p) {
              var m = d[p + 1] ? d[p + 1] - v : c + f - v;
              if (m <= 0) return null;
              var g = p % i.length;
              return y.createElement('rect', {
                key: 'react-'.concat(p),
                y: Math.round(v + c - c),
                x: l,
                height: m,
                width: u,
                stroke: 'none',
                fill: i[g],
                fillOpacity: s,
                className: 'recharts-cartesian-grid-bg',
              });
            });
            return y.createElement(
              'g',
              { className: 'recharts-cartesian-gridstripes-horizontal' },
              h
            );
          },
        },
        {
          key: 'renderBackground',
          value: function () {
            var a = this.props.fill;
            if (!a || a === 'none') return null;
            var i = this.props,
              o = i.fillOpacity,
              s = i.x,
              l = i.y,
              c = i.width,
              u = i.height;
            return y.createElement('rect', {
              x: s,
              y: l,
              width: c,
              height: u,
              stroke: 'none',
              fill: a,
              fillOpacity: o,
              className: 'recharts-cartesian-grid-bg',
            });
          },
        },
        {
          key: 'render',
          value: function () {
            var a = this.props,
              i = a.x,
              o = a.y,
              s = a.width,
              l = a.height,
              c = a.horizontal,
              u = a.vertical,
              f = a.horizontalCoordinatesGenerator,
              d = a.verticalCoordinatesGenerator,
              h = a.xAxis,
              v = a.yAxis,
              p = a.offset,
              m = a.chartWidth,
              g = a.chartHeight;
            if (
              !K(s) ||
              s <= 0 ||
              !K(l) ||
              l <= 0 ||
              !K(i) ||
              i !== +i ||
              !K(o) ||
              o !== +o
            )
              return null;
            var _ = this.props,
              x = _.horizontalPoints,
              b = _.verticalPoints;
            return (
              (!x || !x.length) &&
                pe(f) &&
                (x = f({ yAxis: v, width: m, height: g, offset: p })),
              (!b || !b.length) &&
                pe(d) &&
                (b = d({ xAxis: h, width: m, height: g, offset: p })),
              y.createElement(
                'g',
                { className: 'recharts-cartesian-grid' },
                this.renderBackground(),
                c && this.renderHorizontal(x),
                u && this.renderVertical(b),
                c && this.renderHorizontalStripes(x),
                u && this.renderVerticalStripes(b)
              )
            );
          },
        },
      ],
      [
        {
          key: 'renderLineItem',
          value: function (a, i) {
            var o;
            if (y.isValidElement(a)) o = y.cloneElement(a, i);
            else if (pe(a)) o = a(i);
            else {
              var s = i.x1,
                l = i.y1,
                c = i.x2,
                u = i.y2,
                f = i.key,
                d = GG(i, ['x1', 'y1', 'x2', 'y2', 'key']);
              o = y.createElement(
                'line',
                Cf({}, ze(d), {
                  x1: s,
                  y1: l,
                  x2: c,
                  y2: u,
                  fill: 'none',
                  key: f,
                })
              );
            }
            return o;
          },
        },
      ]
    ),
    r
  );
})(E.exports.PureComponent);
mp.displayName = 'CartesianGrid';
mp.defaultProps = {
  horizontal: !0,
  vertical: !0,
  horizontalPoints: [],
  verticalPoints: [],
  stroke: '#ccc',
  fill: 'none',
  verticalFill: [],
  horizontalFill: [],
};
function Bs() {
  return (
    (Bs =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Bs.apply(this, arguments)
  );
}
function rq(e, t) {
  return oq(e) || iq(e, t) || aq(e, t) || nq();
}
function nq() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function aq(e, t) {
  if (!!e) {
    if (typeof e == 'string') return ay(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === 'Object' && e.constructor && (r = e.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return ay(e, t);
  }
}
function ay(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function iq(e, t) {
  if (!(typeof Symbol > 'u' || !(Symbol.iterator in Object(e)))) {
    var r = [],
      n = !0,
      a = !1,
      i = void 0;
    try {
      for (
        var o = e[Symbol.iterator](), s;
        !(n = (s = o.next()).done) && (r.push(s.value), !(t && r.length === t));
        n = !0
      );
    } catch (l) {
      (a = !0), (i = l);
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (a) throw i;
      }
    }
    return r;
  }
}
function oq(e) {
  if (Array.isArray(e)) return e;
}
function sq(e, t) {
  if (e == null) return {};
  var r = lq(e, t),
    n,
    a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      (n = i[a]),
        !(t.indexOf(n) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function lq(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    a,
    i;
  for (i = 0; i < n.length; i++)
    (a = n[i]), !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function gp(e) {
  var t = e.offset,
    r = e.layout,
    n = e.width,
    a = e.dataKey,
    i = e.data,
    o = e.dataPointFormatter,
    s = e.xAxis,
    l = e.yAxis,
    c = sq(e, [
      'offset',
      'layout',
      'width',
      'dataKey',
      'data',
      'dataPointFormatter',
      'xAxis',
      'yAxis',
    ]),
    u = ze(c),
    f = i.map(function (d, h) {
      var v = o(d, a),
        p = v.x,
        m = v.y,
        g = v.value,
        _ = v.errorVal;
      if (!_) return null;
      var x = [],
        b,
        w;
      if (Array.isArray(_)) {
        var O = rq(_, 2);
        (b = O[0]), (w = O[1]);
      } else b = w = _;
      if (r === 'vertical') {
        var S = s.scale,
          $ = m + t,
          A = $ + n,
          P = $ - n,
          C = S(g - b),
          k = S(g + w);
        x.push({ x1: k, y1: A, x2: k, y2: P }),
          x.push({ x1: C, y1: $, x2: k, y2: $ }),
          x.push({ x1: C, y1: A, x2: C, y2: P });
      } else if (r === 'horizontal') {
        var T = l.scale,
          D = p + t,
          j = D - n,
          R = D + n,
          N = T(g - b),
          z = T(g + w);
        x.push({ x1: j, y1: z, x2: R, y2: z }),
          x.push({ x1: D, y1: N, x2: D, y2: z }),
          x.push({ x1: j, y1: N, x2: R, y2: N });
      }
      return y.createElement(
        Rt,
        Bs({ className: 'recharts-errorBar', key: 'bar-'.concat(h) }, u),
        x.map(function (M, Y) {
          return y.createElement('line', Bs({}, M, { key: 'line-'.concat(Y) }));
        })
      );
    });
  return y.createElement(Rt, { className: 'recharts-errorBars' }, f);
}
gp.defaultProps = {
  stroke: 'black',
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: 'horizontal',
};
gp.displayName = 'ErrorBar';
function Do(e) {
  return (
    typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
      ? (Do = function (r) {
          return typeof r;
        })
      : (Do = function (r) {
          return r &&
            typeof Symbol == 'function' &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? 'symbol'
            : typeof r;
        }),
    Do(e)
  );
}
function cq(e, t) {
  if (e == null) return {};
  var r = uq(e, t),
    n,
    a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      (n = i[a]),
        !(t.indexOf(n) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function uq(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    a,
    i;
  for (i = 0; i < n.length; i++)
    (a = n[i]), !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function kf() {
  return (
    (kf =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    kf.apply(this, arguments)
  );
}
function iy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function bt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? iy(Object(r), !0).forEach(function (n) {
          fq(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : iy(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function fq(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function dq(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function oy(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function pq(e, t, r) {
  return t && oy(e.prototype, t), r && oy(e, r), e;
}
function hq(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && Tf(e, t);
}
function Tf(e, t) {
  return (
    (Tf =
      Object.setPrototypeOf ||
      function (n, a) {
        return (n.__proto__ = a), n;
      }),
    Tf(e, t)
  );
}
function vq(e) {
  var t = yq();
  return function () {
    var n = Fs(e),
      a;
    if (t) {
      var i = Fs(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else a = n.apply(this, arguments);
    return mq(this, a);
  };
}
function mq(e, t) {
  return t && (Do(t) === 'object' || typeof t == 'function') ? t : gq(e);
}
function gq(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function yq() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Fs(e) {
  return (
    (Fs = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Fs(e)
  );
}
var Xi = (function (e) {
  hq(r, e);
  var t = vq(r);
  function r() {
    var n;
    dq(this, r);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return (
      (n = t.call.apply(t, [this].concat(i))),
      (n.state = { isAnimationFinished: !1 }),
      (n.id = Sl('recharts-bar-')),
      (n.handleAnimationEnd = function () {
        var s = n.props.onAnimationEnd;
        n.setState({ isAnimationFinished: !0 }), s && s();
      }),
      (n.handleAnimationStart = function () {
        var s = n.props.onAnimationStart;
        n.setState({ isAnimationFinished: !1 }), s && s();
      }),
      n
    );
  }
  return (
    pq(
      r,
      [
        {
          key: 'renderRectanglesStatically',
          value: function (a) {
            var i = this,
              o = this.props.shape,
              s = ze(this.props);
            return (
              a &&
              a.map(function (l, c) {
                var u = bt(bt(bt({}, s), l), {}, { index: c });
                return y.createElement(
                  Rt,
                  kf(
                    { className: 'recharts-bar-rectangle' },
                    Xo(i.props, l, c),
                    { key: 'rectangle-'.concat(c) }
                  ),
                  r.renderRectangle(o, u)
                );
              })
            );
          },
        },
        {
          key: 'renderRectanglesWithAnimation',
          value: function () {
            var a = this,
              i = this.props,
              o = i.data,
              s = i.layout,
              l = i.isAnimationActive,
              c = i.animationBegin,
              u = i.animationDuration,
              f = i.animationEasing,
              d = i.animationId,
              h = this.state.prevData;
            return y.createElement(
              xa,
              {
                begin: c,
                duration: u,
                isActive: l,
                easing: f,
                from: { t: 0 },
                to: { t: 1 },
                key: 'bar-'.concat(d),
                onAnimationEnd: this.handleAnimationEnd,
                onAnimationStart: this.handleAnimationStart,
              },
              function (v) {
                var p = v.t,
                  m = o.map(function (g, _) {
                    var x = h && h[_];
                    if (x) {
                      var b = Vn(x.x, g.x),
                        w = Vn(x.y, g.y),
                        O = Vn(x.width, g.width),
                        S = Vn(x.height, g.height);
                      return bt(
                        bt({}, g),
                        {},
                        { x: b(p), y: w(p), width: O(p), height: S(p) }
                      );
                    }
                    if (s === 'horizontal') {
                      var $ = Vn(0, g.height),
                        A = $(p);
                      return bt(
                        bt({}, g),
                        {},
                        { y: g.y + g.height - A, height: A }
                      );
                    }
                    var P = Vn(0, g.width),
                      C = P(p);
                    return bt(bt({}, g), {}, { width: C });
                  });
                return y.createElement(
                  Rt,
                  null,
                  a.renderRectanglesStatically(m)
                );
              }
            );
          },
        },
        {
          key: 'renderRectangles',
          value: function () {
            var a = this.props,
              i = a.data,
              o = a.isAnimationActive,
              s = this.state.prevData;
            return o && i && i.length && (!s || !Sx(s, i))
              ? this.renderRectanglesWithAnimation()
              : this.renderRectanglesStatically(i);
          },
        },
        {
          key: 'renderBackground',
          value: function () {
            var a = this,
              i = this.props.data,
              o = ze(this.props.background);
            return i.map(function (s, l) {
              s.value;
              var c = s.background,
                u = cq(s, ['value', 'background']);
              if (!c) return null;
              var f = bt(
                bt(
                  bt(bt(bt({}, u), {}, { fill: '#eee' }, c), o),
                  Xo(a.props, s, l)
                ),
                {},
                {
                  index: l,
                  key: 'background-bar-'.concat(l),
                  className: 'recharts-bar-background-rectangle',
                }
              );
              return r.renderRectangle(a.props.background, f);
            });
          },
        },
        {
          key: 'renderErrorBar',
          value: function () {
            if (this.props.isAnimationActive && !this.state.isAnimationFinished)
              return null;
            var a = this.props,
              i = a.data,
              o = a.xAxis,
              s = a.yAxis,
              l = a.layout,
              c = a.children,
              u = br(c, gp.displayName);
            if (!u) return null;
            var f = l === 'vertical' ? i[0].height / 2 : i[0].width / 2;
            function d(h, v) {
              return { x: h.x, y: h.y, value: h.value, errorVal: Dr(h, v) };
            }
            return u.map(function (h, v) {
              return y.cloneElement(h, {
                key: 'error-bar-'.concat(v),
                data: i,
                xAxis: o,
                yAxis: s,
                layout: l,
                offset: f,
                dataPointFormatter: d,
              });
            });
          },
        },
        {
          key: 'render',
          value: function () {
            var a = this.props,
              i = a.hide,
              o = a.data,
              s = a.className,
              l = a.xAxis,
              c = a.yAxis,
              u = a.left,
              f = a.top,
              d = a.width,
              h = a.height,
              v = a.isAnimationActive,
              p = a.background,
              m = a.id;
            if (i || !o || !o.length) return null;
            var g = this.state.isAnimationFinished,
              _ = Ze('recharts-bar', s),
              x = (l && l.allowDataOverflow) || (c && c.allowDataOverflow),
              b = ge(m) ? this.id : m;
            return y.createElement(
              Rt,
              { className: _ },
              x
                ? y.createElement(
                    'defs',
                    null,
                    y.createElement(
                      'clipPath',
                      { id: 'clipPath-'.concat(b) },
                      y.createElement('rect', {
                        x: u,
                        y: f,
                        width: d,
                        height: h,
                      })
                    )
                  )
                : null,
              y.createElement(
                Rt,
                {
                  className: 'recharts-bar-rectangles',
                  clipPath: x ? 'url(#clipPath-'.concat(b, ')') : null,
                },
                p ? this.renderBackground() : null,
                this.renderRectangles()
              ),
              this.renderErrorBar(),
              (!v || g) && Gr.renderCallByParent(this.props, o)
            );
          },
        },
      ],
      [
        {
          key: 'getDerivedStateFromProps',
          value: function (a, i) {
            return a.animationId !== i.prevAnimationId
              ? {
                  prevAnimationId: a.animationId,
                  curData: a.data,
                  prevData: i.curData,
                }
              : a.data !== i.curData
              ? { curData: a.data }
              : null;
          },
        },
        {
          key: 'renderRectangle',
          value: function (a, i) {
            var o;
            return (
              y.isValidElement(a)
                ? (o = y.cloneElement(a, i))
                : pe(a)
                ? (o = a(i))
                : (o = y.createElement(Ll, i)),
              o
            );
          },
        },
      ]
    ),
    r
  );
})(E.exports.PureComponent);
Xi.displayName = 'Bar';
Xi.defaultProps = {
  xAxisId: 0,
  yAxisId: 0,
  legendType: 'rect',
  minPointSize: 0,
  hide: !1,
  data: [],
  layout: 'vertical',
  isAnimationActive: !ln.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: 'ease',
};
Xi.getComposedData = function (e) {
  var t = e.props,
    r = e.item,
    n = e.barPosition,
    a = e.bandSize,
    i = e.xAxis,
    o = e.yAxis,
    s = e.xAxisTicks,
    l = e.yAxisTicks,
    c = e.stackedData,
    u = e.dataStartIndex,
    f = e.displayedData,
    d = e.offset,
    h = YH(n, r);
  if (!h) return null;
  var v = t.layout,
    p = r.props,
    m = p.dataKey,
    g = p.children,
    _ = p.minPointSize,
    x = v === 'horizontal' ? o : i,
    b = c ? x.scale.domain() : null,
    w = nV({ numericAxis: x }),
    O = br(g, mx.displayName),
    S = f.map(function ($, A) {
      var P, C, k, T, D, j;
      if (
        (c ? (P = KH(c[u + A], b)) : ((P = Dr($, m)), Me(P) || (P = [w, P])),
        v === 'horizontal')
      ) {
        if (
          ((C = bg({
            axis: i,
            ticks: s,
            bandSize: a,
            offset: h.offset,
            entry: $,
            index: A,
          })),
          (k = o.scale(P[1])),
          (T = h.size),
          (D = o.scale(P[0]) - o.scale(P[1])),
          (j = { x: C, y: o.y, width: T, height: o.height }),
          Math.abs(_) > 0 && Math.abs(D) < Math.abs(_))
        ) {
          var R = or(D || _) * (Math.abs(_) - Math.abs(D));
          (k -= R), (D += R);
        }
      } else if (
        ((C = i.scale(P[0])),
        (k = bg({
          axis: o,
          ticks: l,
          bandSize: a,
          offset: h.offset,
          entry: $,
          index: A,
        })),
        (T = i.scale(P[1]) - i.scale(P[0])),
        (D = h.size),
        (j = { x: i.x, y: k, width: i.width, height: D }),
        Math.abs(_) > 0 && Math.abs(T) < Math.abs(_))
      ) {
        var N = or(T || _) * (Math.abs(_) - Math.abs(T));
        T += N;
      }
      return bt(
        bt(
          bt({}, $),
          {},
          {
            x: C,
            y: k,
            width: T,
            height: D,
            value: c ? P : P[1],
            payload: $,
            background: j,
          },
          O && O[A] && O[A].props
        ),
        {},
        {
          tooltipPayload: [N1(r, $)],
          tooltipPosition: { x: C + T / 2, y: k + D / 2 },
        }
      );
    });
  return bt({ data: S, layout: v }, d);
};
var Bl = function () {
  return null;
};
Bl.displayName = 'XAxis';
Bl.defaultProps = {
  allowDecimals: !0,
  hide: !1,
  orientation: 'bottom',
  width: 0,
  height: 30,
  mirror: !1,
  xAxisId: 0,
  tickCount: 5,
  type: 'category',
  domain: [0, 'auto'],
  padding: { left: 0, right: 0 },
  allowDataOverflow: !1,
  scale: 'auto',
  reversed: !1,
  allowDuplicatedCategory: !0,
};
var Fl = function () {
  return null;
};
Fl.displayName = 'YAxis';
Fl.defaultProps = {
  allowDuplicatedCategory: !0,
  allowDecimals: !0,
  hide: !1,
  orientation: 'left',
  width: 60,
  height: 0,
  mirror: !1,
  yAxisId: 0,
  tickCount: 5,
  type: 'number',
  domain: [0, 'auto'],
  padding: { top: 0, bottom: 0 },
  allowDataOverflow: !1,
  scale: 'auto',
  reversed: !1,
};
var bq = gn,
  xq = zi,
  wq = ml;
function _q(e) {
  return function (t, r, n) {
    var a = Object(t);
    if (!xq(t)) {
      var i = bq(r);
      (t = wq(t)),
        (r = function (s) {
          return i(a[s], s, a);
        });
    }
    var o = e(t, r, n);
    return o > -1 ? a[i ? t[o] : o] : void 0;
  };
}
var Oq = _q,
  Sq = U1;
function Eq(e) {
  var t = Sq(e),
    r = t % 1;
  return t === t ? (r ? t - r : t) : 0;
}
var $q = Eq,
  Aq = k0,
  Cq = gn,
  Pq = $q,
  kq = Math.max;
function Tq(e, t, r) {
  var n = e == null ? 0 : e.length;
  if (!n) return -1;
  var a = r == null ? 0 : Pq(r);
  return a < 0 && (a = kq(n + a, 0)), Aq(e, Cq(t), a);
}
var Mq = Tq,
  Iq = Oq,
  Rq = Mq,
  Dq = Iq(Rq),
  jq = Dq,
  Nq = fx,
  Lq = tr,
  Bq = 'Expected a function';
function Fq(e, t, r) {
  var n = !0,
    a = !0;
  if (typeof e != 'function') throw new TypeError(Bq);
  return (
    Lq(r) &&
      ((n = 'leading' in r ? !!r.leading : n),
      (a = 'trailing' in r ? !!r.trailing : a)),
    Nq(e, t, { leading: n, maxWait: t, trailing: a })
  );
}
var zq = Fq,
  Wq = vn,
  Uq = mn,
  Hq = '[object Boolean]';
function Vq(e) {
  return e === !0 || e === !1 || (Uq(e) && Wq(e) == Hq);
}
var Gq = Vq,
  Mf = function (t, r, n, a, i) {
    var o = br(t, vp.displayName),
      s = br(t, Yi.displayName),
      l = o.concat(s),
      c = br(t, Ki.displayName),
      u = ''.concat(a, 'Id'),
      f = a[0],
      d = r;
    if (
      (l.length &&
        (d = l.reduce(function (p, m) {
          if (
            m.props[u] === n &&
            Tr(m.props, 'extendDomain') &&
            K(m.props[f])
          ) {
            var g = m.props[f];
            return [Math.min(p[0], g), Math.max(p[1], g)];
          }
          return p;
        }, d)),
      c.length)
    ) {
      var h = ''.concat(f, '1'),
        v = ''.concat(f, '2');
      d = c.reduce(function (p, m) {
        if (
          m.props[u] === n &&
          Tr(m.props, 'extendDomain') &&
          K(m.props[h]) &&
          K(m.props[v])
        ) {
          var g = m.props[h],
            _ = m.props[v];
          return [Math.min(p[0], g, _), Math.max(p[1], g, _)];
        }
        return p;
      }, d);
    }
    return (
      i &&
        i.length &&
        (d = i.reduce(function (p, m) {
          return K(m) ? [Math.min(p[0], m), Math.max(p[1], m)] : p;
        }, d)),
      d
    );
  },
  Y1 = { exports: {} };
(function (e) {
  var t = Object.prototype.hasOwnProperty,
    r = '~';
  function n() {}
  Object.create &&
    ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1));
  function a(l, c, u) {
    (this.fn = l), (this.context = c), (this.once = u || !1);
  }
  function i(l, c, u, f, d) {
    if (typeof u != 'function')
      throw new TypeError('The listener must be a function');
    var h = new a(u, f || l, d),
      v = r ? r + c : c;
    return (
      l._events[v]
        ? l._events[v].fn
          ? (l._events[v] = [l._events[v], h])
          : l._events[v].push(h)
        : ((l._events[v] = h), l._eventsCount++),
      l
    );
  }
  function o(l, c) {
    --l._eventsCount === 0 ? (l._events = new n()) : delete l._events[c];
  }
  function s() {
    (this._events = new n()), (this._eventsCount = 0);
  }
  (s.prototype.eventNames = function () {
    var c = [],
      u,
      f;
    if (this._eventsCount === 0) return c;
    for (f in (u = this._events)) t.call(u, f) && c.push(r ? f.slice(1) : f);
    return Object.getOwnPropertySymbols
      ? c.concat(Object.getOwnPropertySymbols(u))
      : c;
  }),
    (s.prototype.listeners = function (c) {
      var u = r ? r + c : c,
        f = this._events[u];
      if (!f) return [];
      if (f.fn) return [f.fn];
      for (var d = 0, h = f.length, v = new Array(h); d < h; d++)
        v[d] = f[d].fn;
      return v;
    }),
    (s.prototype.listenerCount = function (c) {
      var u = r ? r + c : c,
        f = this._events[u];
      return f ? (f.fn ? 1 : f.length) : 0;
    }),
    (s.prototype.emit = function (c, u, f, d, h, v) {
      var p = r ? r + c : c;
      if (!this._events[p]) return !1;
      var m = this._events[p],
        g = arguments.length,
        _,
        x;
      if (m.fn) {
        switch ((m.once && this.removeListener(c, m.fn, void 0, !0), g)) {
          case 1:
            return m.fn.call(m.context), !0;
          case 2:
            return m.fn.call(m.context, u), !0;
          case 3:
            return m.fn.call(m.context, u, f), !0;
          case 4:
            return m.fn.call(m.context, u, f, d), !0;
          case 5:
            return m.fn.call(m.context, u, f, d, h), !0;
          case 6:
            return m.fn.call(m.context, u, f, d, h, v), !0;
        }
        for (x = 1, _ = new Array(g - 1); x < g; x++) _[x - 1] = arguments[x];
        m.fn.apply(m.context, _);
      } else {
        var b = m.length,
          w;
        for (x = 0; x < b; x++)
          switch (
            (m[x].once && this.removeListener(c, m[x].fn, void 0, !0), g)
          ) {
            case 1:
              m[x].fn.call(m[x].context);
              break;
            case 2:
              m[x].fn.call(m[x].context, u);
              break;
            case 3:
              m[x].fn.call(m[x].context, u, f);
              break;
            case 4:
              m[x].fn.call(m[x].context, u, f, d);
              break;
            default:
              if (!_)
                for (w = 1, _ = new Array(g - 1); w < g; w++)
                  _[w - 1] = arguments[w];
              m[x].fn.apply(m[x].context, _);
          }
      }
      return !0;
    }),
    (s.prototype.on = function (c, u, f) {
      return i(this, c, u, f, !1);
    }),
    (s.prototype.once = function (c, u, f) {
      return i(this, c, u, f, !0);
    }),
    (s.prototype.removeListener = function (c, u, f, d) {
      var h = r ? r + c : c;
      if (!this._events[h]) return this;
      if (!u) return o(this, h), this;
      var v = this._events[h];
      if (v.fn)
        v.fn === u && (!d || v.once) && (!f || v.context === f) && o(this, h);
      else {
        for (var p = 0, m = [], g = v.length; p < g; p++)
          (v[p].fn !== u || (d && !v[p].once) || (f && v[p].context !== f)) &&
            m.push(v[p]);
        m.length ? (this._events[h] = m.length === 1 ? m[0] : m) : o(this, h);
      }
      return this;
    }),
    (s.prototype.removeAllListeners = function (c) {
      var u;
      return (
        c
          ? ((u = r ? r + c : c), this._events[u] && o(this, u))
          : ((this._events = new n()), (this._eventsCount = 0)),
        this
      );
    }),
    (s.prototype.off = s.prototype.removeListener),
    (s.prototype.addListener = s.prototype.on),
    (s.prefixed = r),
    (s.EventEmitter = s),
    (e.exports = s);
})(Y1);
const qq = Y1.exports;
var Kt = new qq();
Kt.setMaxListeners && Kt.setMaxListeners(10);
var Bc = 'recharts.syncMouseEvents';
function jo(e) {
  return (
    typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
      ? (jo = function (r) {
          return typeof r;
        })
      : (jo = function (r) {
          return r &&
            typeof Symbol == 'function' &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? 'symbol'
            : typeof r;
        }),
    jo(e)
  );
}
function sy(e, t) {
  return Xq(e) || Kq(e, t) || K1(e, t) || Yq();
}
function Yq() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Kq(e, t) {
  if (!(typeof Symbol > 'u' || !(Symbol.iterator in Object(e)))) {
    var r = [],
      n = !0,
      a = !1,
      i = void 0;
    try {
      for (
        var o = e[Symbol.iterator](), s;
        !(n = (s = o.next()).done) && (r.push(s.value), !(t && r.length === t));
        n = !0
      );
    } catch (l) {
      (a = !0), (i = l);
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (a) throw i;
      }
    }
    return r;
  }
}
function Xq(e) {
  if (Array.isArray(e)) return e;
}
function ta() {
  return (
    (ta =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    ta.apply(this, arguments)
  );
}
function ly(e, t) {
  if (e == null) return {};
  var r = Jq(e, t),
    n,
    a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      (n = i[a]),
        !(t.indexOf(n) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function Jq(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    a,
    i;
  for (i = 0; i < n.length; i++)
    (a = n[i]), !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Zq(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function cy(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function Qq(e, t, r) {
  return t && cy(e.prototype, t), r && cy(e, r), e;
}
function eY(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && If(e, t);
}
function If(e, t) {
  return (
    (If =
      Object.setPrototypeOf ||
      function (n, a) {
        return (n.__proto__ = a), n;
      }),
    If(e, t)
  );
}
function tY(e) {
  var t = nY();
  return function () {
    var n = zs(e),
      a;
    if (t) {
      var i = zs(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else a = n.apply(this, arguments);
    return rY(this, a);
  };
}
function rY(e, t) {
  return t && (jo(t) === 'object' || typeof t == 'function') ? t : Rf(e);
}
function Rf(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function nY() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function zs(e) {
  return (
    (zs = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    zs(e)
  );
}
function Sa(e) {
  return oY(e) || iY(e) || K1(e) || aY();
}
function aY() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function K1(e, t) {
  if (!!e) {
    if (typeof e == 'string') return Df(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === 'Object' && e.constructor && (r = e.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Df(e, t);
  }
}
function iY(e) {
  if (typeof Symbol < 'u' && Symbol.iterator in Object(e)) return Array.from(e);
}
function oY(e) {
  if (Array.isArray(e)) return Df(e);
}
function Df(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function uy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function U(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? uy(Object(r), !0).forEach(function (n) {
          Xt(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : uy(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function Xt(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
var sY = { xAxis: ['bottom', 'top'], yAxis: ['left', 'right'] },
  X1 = { x: 0, y: 0 },
  lY = Number.isFinite ? Number.isFinite : isFinite,
  fy =
    typeof requestAnimationFrame == 'function'
      ? requestAnimationFrame
      : typeof setImmediate == 'function'
      ? setImmediate
      : setTimeout,
  dy =
    typeof cancelAnimationFrame == 'function'
      ? cancelAnimationFrame
      : typeof clearImmediate == 'function'
      ? clearImmediate
      : clearTimeout,
  cY = function (t, r) {
    return r === 'horizontal'
      ? t.x
      : r === 'vertical'
      ? t.y
      : r === 'centric'
      ? t.angle
      : t.radius;
  },
  uY = function (t, r, n, a) {
    var i = r.find(function (u) {
      return u && u.index === n;
    });
    if (i) {
      if (t === 'horizontal') return { x: i.coordinate, y: a.y };
      if (t === 'vertical') return { x: a.x, y: i.coordinate };
      if (t === 'centric') {
        var o = i.coordinate,
          s = a.radius;
        return U(
          U(U({}, a), Pt(a.cx, a.cy, s, o)),
          {},
          { angle: o, radius: s }
        );
      }
      var l = i.coordinate,
        c = a.angle;
      return U(U(U({}, a), Pt(a.cx, a.cy, l, c)), {}, { angle: c, radius: l });
    }
    return X1;
  },
  zl = function (t, r, n) {
    var a = r.graphicalItems,
      i = r.dataStartIndex,
      o = r.dataEndIndex,
      s = (a || []).reduce(function (l, c) {
        var u = c.props.data;
        return u && u.length ? [].concat(Sa(l), Sa(u)) : l;
      }, []);
    return s && s.length > 0
      ? s
      : n && n.props && n.props.data && n.props.data.length > 0
      ? n.props.data
      : t && t.length && K(i) && K(o)
      ? t.slice(i, o + 1)
      : [];
  },
  J1 = function (t, r, n, a) {
    var i = t.graphicalItems,
      o = t.tooltipAxis,
      s = zl(r, t);
    return n < 0 || !i || !i.length || n >= s.length
      ? null
      : i.reduce(function (l, c) {
          var u = c.props.hide;
          if (u) return l;
          var f = c.props.data,
            d;
          if (o.dataKey && !o.allowDuplicatedCategory) {
            var h = f === void 0 ? s : f;
            d = Ou(h, o.dataKey, a);
          } else d = (f && f[n]) || s[n];
          return d ? [].concat(Sa(l), [N1(c, d)]) : l;
        }, []);
  },
  py = function (t, r, n, a) {
    var i = a || { x: t.chartX, y: t.chartY },
      o = cY(i, n),
      s = t.orderedTooltipTicks,
      l = t.tooltipAxis,
      c = t.tooltipTicks,
      u = FH(o, s, c, l);
    if (u >= 0 && c) {
      var f = c[u] && c[u].value,
        d = J1(t, r, u, f),
        h = uY(n, s, u, i);
      return {
        activeTooltipIndex: u,
        activeLabel: f,
        activePayload: d,
        activeCoordinate: h,
      };
    }
    return null;
  },
  fY = function (t, r) {
    var n = r.axes,
      a = r.graphicalItems,
      i = r.axisType,
      o = r.axisIdKey,
      s = r.stackGroups,
      l = r.dataStartIndex,
      c = r.dataEndIndex,
      u = t.layout,
      f = t.children,
      d = t.stackOffset,
      h = R1(u, i),
      v = n.reduce(function (p, m) {
        var g = m.props,
          _ = g.type,
          x = g.dataKey,
          b = g.allowDataOverflow,
          w = g.allowDuplicatedCategory,
          O = g.scale,
          S = g.ticks,
          $ = m.props[o],
          A = zl(t.data, {
            graphicalItems: a.filter(function (z) {
              return z.props[o] === $;
            }),
            dataStartIndex: l,
            dataEndIndex: c,
          }),
          P = A.length;
        if (!p[$]) {
          var C, k, T;
          if (x) {
            if (((C = Ss(A, x, _)), _ === 'category' && h)) {
              var D = M5(C);
              w && D
                ? ((k = C), (C = Rs(0, P)))
                : w ||
                  (C = _g(m.props.domain, C, m).reduce(function (z, M) {
                    return z.indexOf(M) >= 0 ? z : [].concat(Sa(z), [M]);
                  }, []));
            } else if (_ === 'category')
              w
                ? (C = C.filter(function (z) {
                    return z !== '' && !ge(z);
                  }))
                : (C = _g(m.props.domain, C, m).reduce(function (z, M) {
                    return z.indexOf(M) >= 0 || M === '' || ge(M)
                      ? z
                      : [].concat(Sa(z), [M]);
                  }, []));
            else if (_ === 'number') {
              var j = VH(
                A,
                a.filter(function (z) {
                  return z.props[o] === $ && !z.props.hide;
                }),
                x,
                i,
                u
              );
              j && (C = j);
            }
            h && (_ === 'number' || O !== 'auto') && (T = Ss(A, x, 'category'));
          } else
            h
              ? (C = Rs(0, P))
              : s && s[$] && s[$].hasStack && _ === 'number'
              ? (C = d === 'expand' ? [0, 1] : D1(s[$].stackGroups, l, c))
              : (C = I1(
                  A,
                  a.filter(function (z) {
                    return z.props[o] === $ && !z.props.hide;
                  }),
                  _,
                  u,
                  !0
                ));
          if (_ === 'number')
            (C = Mf(f, C, $, i, S)),
              m.props.domain && (C = j1(m.props.domain, C, b));
          else if (_ === 'category' && m.props.domain) {
            var R = m.props.domain,
              N = C.every(function (z) {
                return R.indexOf(z) >= 0;
              });
            N && (C = R);
          }
          return U(
            U({}, p),
            {},
            Xt(
              {},
              $,
              U(
                U({}, m.props),
                {},
                {
                  axisType: i,
                  domain: C,
                  categoricalDomain: T,
                  duplicateDomain: k,
                  originalDomain: m.props.domain,
                  isCategorical: h,
                  layout: u,
                }
              )
            )
          );
        }
        return p;
      }, {});
    return v;
  },
  dY = function (t, r) {
    var n = r.graphicalItems,
      a = r.Axis,
      i = r.axisType,
      o = r.axisIdKey,
      s = r.stackGroups,
      l = r.dataStartIndex,
      c = r.dataEndIndex,
      u = t.layout,
      f = t.children,
      d = zl(t.data, { graphicalItems: n, dataStartIndex: l, dataEndIndex: c }),
      h = d.length,
      v = R1(u, i),
      p = -1,
      m = n.reduce(function (g, _) {
        var x = _.props[o];
        if (!g[x]) {
          p++;
          var b;
          return (
            v
              ? (b = Rs(0, h))
              : s && s[x] && s[x].hasStack
              ? ((b = D1(s[x].stackGroups, l, c)), (b = Mf(f, b, x, i)))
              : ((b = j1(
                  a.defaultProps.domain,
                  I1(
                    d,
                    n.filter(function (w) {
                      return w.props[o] === x && !w.props.hide;
                    }),
                    'number',
                    u
                  ),
                  a.defaultProps.allowDataOverflow
                )),
                (b = Mf(f, b, x, i))),
            U(
              U({}, g),
              {},
              Xt(
                {},
                x,
                U(
                  U({ axisType: i }, a.defaultProps),
                  {},
                  {
                    hide: !0,
                    orientation: Qt(sY, ''.concat(i, '.').concat(p % 2), null),
                    domain: b,
                    originalDomain: a.defaultProps.domain,
                    isCategorical: v,
                    layout: u,
                  }
                )
              )
            )
          );
        }
        return g;
      }, {});
    return m;
  },
  pY = function (t, r) {
    var n = r.axisType,
      a = n === void 0 ? 'xAxis' : n,
      i = r.AxisComp,
      o = r.graphicalItems,
      s = r.stackGroups,
      l = r.dataStartIndex,
      c = r.dataEndIndex,
      u = t.children,
      f = ''.concat(a, 'Id'),
      d = br(u, i),
      h = {};
    return (
      d && d.length
        ? (h = fY(t, {
            axes: d,
            graphicalItems: o,
            axisType: a,
            axisIdKey: f,
            stackGroups: s,
            dataStartIndex: l,
            dataEndIndex: c,
          }))
        : o &&
          o.length &&
          (h = dY(t, {
            Axis: i,
            graphicalItems: o,
            axisType: a,
            axisIdKey: f,
            stackGroups: s,
            dataStartIndex: l,
            dataEndIndex: c,
          })),
      h
    );
  },
  hY = function (t) {
    var r = tn(t),
      n = rn(r, !1, !0);
    return {
      tooltipTicks: n,
      orderedTooltipTicks: Wd(n, function (a) {
        return a.coordinate;
      }),
      tooltipAxis: r,
      tooltipAxisBandSize: Es(r, n),
    };
  },
  hy = function (t) {
    var r = t.children,
      n = t.defaultShowTooltip,
      a = Wr(r, Ii.displayName),
      i = (a && a.props && a.props.startIndex) || 0,
      o =
        (a && a.props && a.props.endIndex) ||
        (t.data && t.data.length - 1) ||
        0;
    return {
      chartX: 0,
      chartY: 0,
      dataStartIndex: i,
      dataEndIndex: o,
      activeTooltipIndex: -1,
      isTooltipActive: ge(n) ? !1 : n,
    };
  },
  vY = function (t) {
    return !t || !t.length
      ? !1
      : t.some(function (r) {
          var n = cn(r && r.type);
          return n && n.indexOf('Bar') >= 0;
        });
  },
  vy = function (t) {
    return t === 'horizontal'
      ? { numericAxisName: 'yAxis', cateAxisName: 'xAxis' }
      : t === 'vertical'
      ? { numericAxisName: 'xAxis', cateAxisName: 'yAxis' }
      : t === 'centric'
      ? { numericAxisName: 'radiusAxis', cateAxisName: 'angleAxis' }
      : { numericAxisName: 'angleAxis', cateAxisName: 'radiusAxis' };
  },
  mY = function (t, r) {
    var n = t.props,
      a = t.graphicalItems,
      i = t.xAxisMap,
      o = i === void 0 ? {} : i,
      s = t.yAxisMap,
      l = s === void 0 ? {} : s,
      c = n.width,
      u = n.height,
      f = n.children,
      d = n.margin || {},
      h = Wr(f, Ii.displayName),
      v = Wr(f, Si.displayName),
      p = Object.keys(l).reduce(
        function (x, b) {
          var w = l[b],
            O = w.orientation;
          return !w.mirror && !w.hide
            ? U(U({}, x), {}, Xt({}, O, x[O] + w.width))
            : x;
        },
        { left: d.left || 0, right: d.right || 0 }
      ),
      m = Object.keys(o).reduce(
        function (x, b) {
          var w = o[b],
            O = w.orientation;
          return !w.mirror && !w.hide
            ? U(U({}, x), {}, Xt({}, O, Qt(x, ''.concat(O)) + w.height))
            : x;
        },
        { top: d.top || 0, bottom: d.bottom || 0 }
      ),
      g = U(U({}, m), p),
      _ = g.bottom;
    return (
      h && (g.bottom += h.props.height || Ii.defaultProps.height),
      v && r && (g = UH(g, a, n, r)),
      U(
        U({ brushBottom: _ }, g),
        {},
        { width: c - g.left - g.right, height: u - g.top - g.bottom }
      )
    );
  },
  gY = function (t) {
    var r,
      n,
      a = t.chartName,
      i = t.GraphicalChild,
      o = t.defaultTooltipEventType,
      s = o === void 0 ? 'axis' : o,
      l = t.validateTooltipEventTypes,
      c = l === void 0 ? ['axis'] : l,
      u = t.axisComponents,
      f = t.legendContent,
      d = t.formatAxisMap,
      h = t.defaultProps,
      v = function (g, _) {
        var x = _.graphicalItems,
          b = _.stackGroups,
          w = _.offset,
          O = _.updateId,
          S = _.dataStartIndex,
          $ = _.dataEndIndex,
          A = g.barSize,
          P = g.layout,
          C = g.barGap,
          k = g.barCategoryGap,
          T = g.maxBarSize,
          D = vy(P),
          j = D.numericAxisName,
          R = D.cateAxisName,
          N = vY(x),
          z = N && zH({ barSize: A, stackGroups: b }),
          M = [];
        return (
          x.forEach(function (Y, Z) {
            var ne = zl(g.data, { dataStartIndex: S, dataEndIndex: $ }, Y),
              ve = Y.props,
              Se = ve.dataKey,
              le = ve.maxBarSize,
              Ee = Y.props[''.concat(j, 'Id')],
              at = Y.props[''.concat(R, 'Id')],
              oe = u.reduce(function (ee, se) {
                var Ae,
                  we = _[''.concat(se.axisType, 'Map')],
                  me = Y.props[''.concat(se.axisType, 'Id')],
                  fe = we && we[me];
                return U(
                  U({}, ee),
                  {},
                  ((Ae = {}),
                  Xt(Ae, se.axisType, fe),
                  Xt(Ae, ''.concat(se.axisType, 'Ticks'), rn(fe)),
                  Ae)
                );
              }, {}),
              H = oe[R],
              Q = oe[''.concat(R, 'Ticks')],
              ie = b && b[Ee] && b[Ee].hasStack && aV(Y, b[Ee].stackGroups),
              B = cn(Y.type).indexOf('Bar') >= 0,
              J = Es(H, Q),
              de = [];
            if (B) {
              var ce,
                Pe,
                it = ge(le) ? T : le,
                F =
                  (ce =
                    (Pe = Es(H, Q, !0)) !== null && Pe !== void 0 ? Pe : it) !==
                    null && ce !== void 0
                    ? ce
                    : 0;
              (de = WH({
                barGap: C,
                barCategoryGap: k,
                bandSize: F !== J ? F : J,
                sizeList: z[at],
                maxBarSize: it,
              })),
                F !== J &&
                  (de = de.map(function (ee) {
                    return U(
                      U({}, ee),
                      {},
                      {
                        position: U(
                          U({}, ee.position),
                          {},
                          { offset: ee.position.offset - F / 2 }
                        ),
                      }
                    );
                  }));
            }
            var G = Y && Y.type && Y.type.getComposedData;
            if (G) {
              var q;
              M.push({
                props: U(
                  U(
                    {},
                    G(
                      U(
                        U({}, oe),
                        {},
                        {
                          displayedData: ne,
                          props: g,
                          dataKey: Se,
                          item: Y,
                          bandSize: J,
                          barPosition: de,
                          offset: w,
                          stackedData: ie,
                          layout: P,
                          dataStartIndex: S,
                          dataEndIndex: $,
                        }
                      )
                    )
                  ),
                  {},
                  ((q = { key: Y.key || 'item-'.concat(Z) }),
                  Xt(q, j, oe[j]),
                  Xt(q, R, oe[R]),
                  Xt(q, 'animationId', O),
                  q)
                ),
                childIndex: m8(Y, g.children),
                item: Y,
              });
            }
          }),
          M
        );
      },
      p = function (g, _) {
        var x = g.props,
          b = g.dataStartIndex,
          w = g.dataEndIndex,
          O = g.updateId;
        if (!Cm({ props: x })) return null;
        var S = x.children,
          $ = x.layout,
          A = x.stackOffset,
          P = x.data,
          C = x.reverseStackOrder,
          k = vy($),
          T = k.numericAxisName,
          D = k.cateAxisName,
          j = br(S, i),
          R = eV(P, j, ''.concat(T, 'Id'), ''.concat(D, 'Id'), A, C),
          N = u.reduce(function (ne, ve) {
            var Se = ''.concat(ve.axisType, 'Map');
            return U(
              U({}, ne),
              {},
              Xt(
                {},
                Se,
                pY(
                  x,
                  U(
                    U({}, ve),
                    {},
                    {
                      graphicalItems: j,
                      stackGroups: ve.axisType === T && R,
                      dataStartIndex: b,
                      dataEndIndex: w,
                    }
                  )
                )
              )
            );
          }, {}),
          z = mY(
            U(U({}, N), {}, { props: x, graphicalItems: j }),
            _ == null ? void 0 : _.legendBBox
          );
        Object.keys(N).forEach(function (ne) {
          N[ne] = d(x, N[ne], z, ne.replace('Map', ''), a);
        });
        var M = N[''.concat(D, 'Map')],
          Y = hY(M),
          Z = v(
            x,
            U(
              U({}, N),
              {},
              {
                dataStartIndex: b,
                dataEndIndex: w,
                updateId: O,
                graphicalItems: j,
                stackGroups: R,
                offset: z,
              }
            )
          );
        return U(
          U(
            {
              formattedGraphicalItems: Z,
              graphicalItems: j,
              offset: z,
              stackGroups: R,
            },
            Y
          ),
          N
        );
      };
    return (
      (n = r =
        (function (m) {
          eY(_, m);
          var g = tY(_);
          function _(x) {
            var b;
            return (
              Zq(this, _),
              (b = g.call(this, x)),
              (b.uniqueChartId = void 0),
              (b.clipPathId = void 0),
              (b.legendInstance = void 0),
              (b.deferId = void 0),
              (b.container = void 0),
              (b.clearDeferId = function () {
                !ge(b.deferId) && dy && dy(b.deferId), (b.deferId = null);
              }),
              (b.handleLegendBBoxUpdate = function (w) {
                if (w) {
                  var O = b.state,
                    S = O.dataStartIndex,
                    $ = O.dataEndIndex,
                    A = O.updateId;
                  b.setState(
                    U(
                      { legendBBox: w },
                      p(
                        {
                          props: b.props,
                          dataStartIndex: S,
                          dataEndIndex: $,
                          updateId: A,
                        },
                        U(U({}, b.state), {}, { legendBBox: w })
                      )
                    )
                  );
                }
              }),
              (b.handleReceiveSyncEvent = function (w, O, S) {
                var $ = b.props.syncId;
                $ === w &&
                  O !== b.uniqueChartId &&
                  (b.clearDeferId(),
                  (b.deferId = fy && fy(b.applySyncEvent.bind(Rf(b), S))));
              }),
              (b.handleBrushChange = function (w) {
                var O = w.startIndex,
                  S = w.endIndex;
                if (
                  O !== b.state.dataStartIndex ||
                  S !== b.state.dataEndIndex
                ) {
                  var $ = b.state.updateId;
                  b.setState(function () {
                    return U(
                      { dataStartIndex: O, dataEndIndex: S },
                      p(
                        {
                          props: b.props,
                          dataStartIndex: O,
                          dataEndIndex: S,
                          updateId: $,
                        },
                        b.state
                      )
                    );
                  }),
                    b.triggerSyncEvent({ dataStartIndex: O, dataEndIndex: S });
                }
              }),
              (b.handleMouseEnter = function (w) {
                var O = b.props.onMouseEnter,
                  S = b.getMouseInfo(w);
                if (S) {
                  var $ = U(U({}, S), {}, { isTooltipActive: !0 });
                  b.setState($), b.triggerSyncEvent($), pe(O) && O($, w);
                }
              }),
              (b.triggeredAfterMouseMove = function (w) {
                var O = b.props.onMouseMove,
                  S = b.getMouseInfo(w),
                  $ = S
                    ? U(U({}, S), {}, { isTooltipActive: !0 })
                    : { isTooltipActive: !1 };
                b.setState($), b.triggerSyncEvent($), pe(O) && O($, w);
              }),
              (b.handleItemMouseEnter = function (w) {
                b.setState(function () {
                  return {
                    isTooltipActive: !0,
                    activeItem: w,
                    activePayload: w.tooltipPayload,
                    activeCoordinate: w.tooltipPosition || { x: w.cx, y: w.cy },
                  };
                });
              }),
              (b.handleItemMouseLeave = function () {
                b.setState(function () {
                  return { isTooltipActive: !1 };
                });
              }),
              (b.handleMouseMove = function (w) {
                w && pe(w.persist) && w.persist(), b.triggeredAfterMouseMove(w);
              }),
              (b.handleMouseLeave = function (w) {
                var O = b.props.onMouseLeave,
                  S = { isTooltipActive: !1 };
                b.setState(S),
                  b.triggerSyncEvent(S),
                  pe(O) && O(S, w),
                  b.cancelThrottledTriggerAfterMouseMove();
              }),
              (b.handleOuterEvent = function (w) {
                var O = v8(w),
                  S = Qt(b.props, ''.concat(O));
                if (O && pe(S)) {
                  var $;
                  /.*touch.*/i.test(O)
                    ? ($ = b.getMouseInfo(w.changedTouches[0]))
                    : ($ = b.getMouseInfo(w));
                  var A = S;
                  A($, w);
                }
              }),
              (b.handleClick = function (w) {
                var O = b.props.onClick,
                  S = b.getMouseInfo(w);
                if (S) {
                  var $ = U(U({}, S), {}, { isTooltipActive: !0 });
                  b.setState($), b.triggerSyncEvent($), pe(O) && O($, w);
                }
              }),
              (b.handleMouseDown = function (w) {
                var O = b.props.onMouseDown;
                if (pe(O)) {
                  var S = b.getMouseInfo(w);
                  O(S, w);
                }
              }),
              (b.handleMouseUp = function (w) {
                var O = b.props.onMouseUp;
                if (pe(O)) {
                  var S = b.getMouseInfo(w);
                  O(S, w);
                }
              }),
              (b.handleTouchMove = function (w) {
                w.changedTouches != null &&
                  w.changedTouches.length > 0 &&
                  b.handleMouseMove(w.changedTouches[0]);
              }),
              (b.handleTouchStart = function (w) {
                w.changedTouches != null &&
                  w.changedTouches.length > 0 &&
                  b.handleMouseDown(w.changedTouches[0]);
              }),
              (b.handleTouchEnd = function (w) {
                w.changedTouches != null &&
                  w.changedTouches.length > 0 &&
                  b.handleMouseUp(w.changedTouches[0]);
              }),
              (b.verticalCoordinatesGenerator = function (w) {
                var O = w.xAxis,
                  S = w.width,
                  $ = w.height,
                  A = w.offset;
                return gg(
                  En.getTicks(
                    U(
                      U(U({}, En.defaultProps), O),
                      {},
                      {
                        ticks: rn(O, !0),
                        viewBox: { x: 0, y: 0, width: S, height: $ },
                      }
                    )
                  ),
                  A.left,
                  A.left + A.width
                );
              }),
              (b.horizontalCoordinatesGenerator = function (w) {
                var O = w.yAxis,
                  S = w.width,
                  $ = w.height,
                  A = w.offset;
                return gg(
                  En.getTicks(
                    U(
                      U(U({}, En.defaultProps), O),
                      {},
                      {
                        ticks: rn(O, !0),
                        viewBox: { x: 0, y: 0, width: S, height: $ },
                      }
                    )
                  ),
                  A.top,
                  A.top + A.height
                );
              }),
              (b.axesTicksGenerator = function (w) {
                return rn(w, !0);
              }),
              (b.renderCursor = function (w) {
                var O = b.state,
                  S = O.isTooltipActive,
                  $ = O.activeCoordinate,
                  A = O.activePayload,
                  P = O.offset,
                  C = O.activeTooltipIndex,
                  k = b.getTooltipEventType();
                if (
                  !w ||
                  !w.props.cursor ||
                  !S ||
                  !$ ||
                  (a !== 'ScatterChart' && k !== 'axis')
                )
                  return null;
                var T = b.props.layout,
                  D,
                  j = vf;
                if (a === 'ScatterChart') (D = $), (j = W1);
                else if (a === 'BarChart')
                  (D = b.getCursorRectangle()), (j = Ll);
                else if (T === 'radial') {
                  var R = b.getCursorPoints(),
                    N = R.cx,
                    z = R.cy,
                    M = R.radius,
                    Y = R.startAngle,
                    Z = R.endAngle;
                  (D = {
                    cx: N,
                    cy: z,
                    startAngle: Y,
                    endAngle: Z,
                    innerRadius: M,
                    outerRadius: M,
                  }),
                    (j = F1);
                } else (D = { points: b.getCursorPoints() }), (j = vf);
                var ne = w.key || '_recharts-cursor',
                  ve = U(
                    U(
                      U(U({ stroke: '#ccc', pointerEvents: 'none' }, P), D),
                      ze(w.props.cursor)
                    ),
                    {},
                    {
                      payload: A,
                      payloadIndex: C,
                      key: ne,
                      className: 'recharts-tooltip-cursor',
                    }
                  );
                return E.exports.isValidElement(w.props.cursor)
                  ? E.exports.cloneElement(w.props.cursor, ve)
                  : E.exports.createElement(j, ve);
              }),
              (b.renderPolarAxis = function (w, O, S) {
                var $ = Qt(w, 'type.axisType'),
                  A = Qt(b.state, ''.concat($, 'Map')),
                  P = A[w.props[''.concat($, 'Id')]];
                return E.exports.cloneElement(
                  w,
                  U(
                    U({}, P),
                    {},
                    {
                      className: $,
                      key: w.key || ''.concat(O, '-').concat(S),
                      ticks: rn(P, !0),
                    }
                  )
                );
              }),
              (b.renderXAxis = function (w, O, S) {
                var $ = b.state.xAxisMap,
                  A = $[w.props.xAxisId];
                return b.renderAxis(A, w, O, S);
              }),
              (b.renderYAxis = function (w, O, S) {
                var $ = b.state.yAxisMap,
                  A = $[w.props.yAxisId];
                return b.renderAxis(A, w, O, S);
              }),
              (b.renderGrid = function (w) {
                var O = b.state,
                  S = O.xAxisMap,
                  $ = O.yAxisMap,
                  A = O.offset,
                  P = b.props,
                  C = P.width,
                  k = P.height,
                  T = tn(S),
                  D = jq($, function (N) {
                    return V1(N.domain, lY);
                  }),
                  j = D || tn($),
                  R = w.props || {};
                return E.exports.cloneElement(w, {
                  key: w.key || 'grid',
                  x: K(R.x) ? R.x : A.left,
                  y: K(R.y) ? R.y : A.top,
                  width: K(R.width) ? R.width : A.width,
                  height: K(R.height) ? R.height : A.height,
                  xAxis: T,
                  yAxis: j,
                  offset: A,
                  chartWidth: C,
                  chartHeight: k,
                  verticalCoordinatesGenerator:
                    R.verticalCoordinatesGenerator ||
                    b.verticalCoordinatesGenerator,
                  horizontalCoordinatesGenerator:
                    R.horizontalCoordinatesGenerator ||
                    b.horizontalCoordinatesGenerator,
                });
              }),
              (b.renderPolarGrid = function (w) {
                var O = w.props,
                  S = O.radialLines,
                  $ = O.polarAngles,
                  A = O.polarRadius,
                  P = b.state,
                  C = P.radiusAxisMap,
                  k = P.angleAxisMap,
                  T = tn(C),
                  D = tn(k),
                  j = D.cx,
                  R = D.cy,
                  N = D.innerRadius,
                  z = D.outerRadius;
                return E.exports.cloneElement(w, {
                  polarAngles: Me($)
                    ? $
                    : rn(D, !0).map(function (M) {
                        return M.coordinate;
                      }),
                  polarRadius: Me(A)
                    ? A
                    : rn(T, !0).map(function (M) {
                        return M.coordinate;
                      }),
                  cx: j,
                  cy: R,
                  innerRadius: N,
                  outerRadius: z,
                  key: w.key || 'polar-grid',
                  radialLines: S,
                });
              }),
              (b.renderLegend = function () {
                var w = b.state.formattedGraphicalItems,
                  O = b.props,
                  S = O.children,
                  $ = O.width,
                  A = O.height,
                  P = b.props.margin || {},
                  C = $ - (P.left || 0) - (P.right || 0),
                  k = T1({
                    children: S,
                    formattedGraphicalItems: w,
                    legendWidth: C,
                    legendContent: f,
                  });
                if (!k) return null;
                var T = k.item,
                  D = ly(k, ['item']);
                return E.exports.cloneElement(
                  T,
                  U(
                    U({}, D),
                    {},
                    {
                      chartWidth: $,
                      chartHeight: A,
                      margin: P,
                      ref: function (R) {
                        b.legendInstance = R;
                      },
                      onBBoxUpdate: b.handleLegendBBoxUpdate,
                    }
                  )
                );
              }),
              (b.renderTooltip = function () {
                var w = b.props.children,
                  O = Wr(w, Zn.displayName);
                if (!O) return null;
                var S = b.state,
                  $ = S.isTooltipActive,
                  A = S.activeCoordinate,
                  P = S.activePayload,
                  C = S.activeLabel,
                  k = S.offset;
                return E.exports.cloneElement(O, {
                  viewBox: U(U({}, k), {}, { x: k.left, y: k.top }),
                  active: $,
                  label: C,
                  payload: $ ? P : [],
                  coordinate: A,
                });
              }),
              (b.renderBrush = function (w) {
                var O = b.props,
                  S = O.margin,
                  $ = O.data,
                  A = b.state,
                  P = A.offset,
                  C = A.dataStartIndex,
                  k = A.dataEndIndex,
                  T = A.updateId;
                return E.exports.cloneElement(w, {
                  key: w.key || '_recharts-brush',
                  onChange: fo(b.handleBrushChange, null, w.props.onChange),
                  data: $,
                  x: K(w.props.x) ? w.props.x : P.left,
                  y: K(w.props.y)
                    ? w.props.y
                    : P.top + P.height + P.brushBottom - (S.bottom || 0),
                  width: K(w.props.width) ? w.props.width : P.width,
                  startIndex: C,
                  endIndex: k,
                  updateId: 'brush-'.concat(T),
                });
              }),
              (b.renderReferenceElement = function (w, O, S) {
                if (!w) return null;
                var $ = Rf(b),
                  A = $.clipPathId,
                  P = b.state,
                  C = P.xAxisMap,
                  k = P.yAxisMap,
                  T = P.offset,
                  D = w.props,
                  j = D.xAxisId,
                  R = D.yAxisId;
                return E.exports.cloneElement(w, {
                  key: w.key || ''.concat(O, '-').concat(S),
                  xAxis: C[j],
                  yAxis: k[R],
                  viewBox: {
                    x: T.left,
                    y: T.top,
                    width: T.width,
                    height: T.height,
                  },
                  clipPathId: A,
                });
              }),
              (b.renderActivePoints = function (w) {
                var O = w.item,
                  S = w.activePoint,
                  $ = w.basePoint,
                  A = w.childIndex,
                  P = w.isRange,
                  C = [],
                  k = O.props.key,
                  T = O.item.props,
                  D = T.activeDot,
                  j = T.dataKey,
                  R = U(
                    U(
                      {
                        index: A,
                        dataKey: j,
                        cx: S.x,
                        cy: S.y,
                        r: 4,
                        fill: dp(O.item),
                        strokeWidth: 2,
                        stroke: '#fff',
                        payload: S.payload,
                        value: S.value,
                        key: ''.concat(k, '-activePoint-').concat(A),
                      },
                      ze(D)
                    ),
                    Ko(D)
                  );
                return (
                  C.push(_.renderActiveDot(D, R)),
                  $
                    ? C.push(
                        _.renderActiveDot(
                          D,
                          U(
                            U({}, R),
                            {},
                            {
                              cx: $.x,
                              cy: $.y,
                              key: ''.concat(k, '-basePoint-').concat(A),
                            }
                          )
                        )
                      )
                    : P && C.push(null),
                  C
                );
              }),
              (b.renderGraphicChild = function (w, O, S) {
                var $ = b.filterFormatItem(w, O, S);
                if (!$) return null;
                var A = b.getTooltipEventType(),
                  P = b.state,
                  C = P.isTooltipActive,
                  k = P.tooltipAxis,
                  T = P.activeTooltipIndex,
                  D = P.activeLabel,
                  j = b.props.children,
                  R = Wr(j, Zn.displayName),
                  N = $.props,
                  z = N.points,
                  M = N.isRange,
                  Y = N.baseLine,
                  Z = $.item.props,
                  ne = Z.activeDot,
                  ve = Z.hide,
                  Se = !ve && C && R && ne && T >= 0,
                  le = {};
                A !== 'axis' && R && R.props.trigger === 'click'
                  ? (le = {
                      onClick: fo(
                        b.handleItemMouseEnter,
                        null,
                        w.props.onCLick
                      ),
                    })
                  : A !== 'axis' &&
                    (le = {
                      onMouseLeave: fo(
                        b.handleItemMouseLeave,
                        null,
                        w.props.onMouseLeave
                      ),
                      onMouseEnter: fo(
                        b.handleItemMouseEnter,
                        null,
                        w.props.onMouseEnter
                      ),
                    });
                var Ee = E.exports.cloneElement(w, U(U({}, $.props), le));
                function at(ie) {
                  return typeof k.dataKey == 'function'
                    ? k.dataKey(ie.payload)
                    : null;
                }
                if (Se) {
                  var oe, H;
                  if (k.dataKey && !k.allowDuplicatedCategory) {
                    var Q =
                      typeof k.dataKey == 'function'
                        ? at
                        : 'payload.'.concat(k.dataKey.toString());
                    (oe = Ou(z, Q, D)), (H = M && Y && Ou(Y, Q, D));
                  } else (oe = z[T]), (H = M && Y && Y[T]);
                  if (!ge(oe))
                    return [Ee].concat(
                      Sa(
                        b.renderActivePoints({
                          item: $,
                          activePoint: oe,
                          basePoint: H,
                          childIndex: T,
                          isRange: M,
                        })
                      )
                    );
                }
                return M ? [Ee, null, null] : [Ee, null];
              }),
              (b.renderCustomized = function (w, O, S) {
                return E.exports.cloneElement(
                  w,
                  U(
                    U({ key: 'recharts-customized-'.concat(S) }, b.props),
                    b.state
                  )
                );
              }),
              (b.uniqueChartId = ge(x.id) ? Sl('recharts') : x.id),
              (b.clipPathId = ''.concat(b.uniqueChartId, '-clip')),
              x.throttleDelay &&
                (b.triggeredAfterMouseMove = zq(
                  b.triggeredAfterMouseMove,
                  x.throttleDelay
                )),
              (b.state = {}),
              b
            );
          }
          return (
            Qq(_, [
              {
                key: 'componentDidMount',
                value: function () {
                  ge(this.props.syncId) || this.addListener();
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (b) {
                  ge(b.syncId) && !ge(this.props.syncId) && this.addListener(),
                    !ge(b.syncId) &&
                      ge(this.props.syncId) &&
                      this.removeListener();
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this.clearDeferId(),
                    ge(this.props.syncId) || this.removeListener(),
                    this.cancelThrottledTriggerAfterMouseMove();
                },
              },
              {
                key: 'cancelThrottledTriggerAfterMouseMove',
                value: function () {
                  typeof this.triggeredAfterMouseMove.cancel == 'function' &&
                    this.triggeredAfterMouseMove.cancel();
                },
              },
              {
                key: 'getTooltipEventType',
                value: function () {
                  var b = Wr(this.props.children, Zn.displayName);
                  if (b && Gq(b.props.shared)) {
                    var w = b.props.shared ? 'axis' : 'item';
                    return c.indexOf(w) >= 0 ? w : s;
                  }
                  return s;
                },
              },
              {
                key: 'getMouseInfo',
                value: function (b) {
                  if (!this.container) return null;
                  var w = YW(this.container),
                    O = KW(b, w),
                    S = this.inRange(O.chartX, O.chartY);
                  if (!S) return null;
                  var $ = this.state,
                    A = $.xAxisMap,
                    P = $.yAxisMap,
                    C = this.getTooltipEventType();
                  if (C !== 'axis' && A && P) {
                    var k = tn(A).scale,
                      T = tn(P).scale,
                      D = k && k.invert ? k.invert(O.chartX) : null,
                      j = T && T.invert ? T.invert(O.chartY) : null;
                    return U(U({}, O), {}, { xValue: D, yValue: j });
                  }
                  var R = py(this.state, this.props.data, this.props.layout, S);
                  return R ? U(U({}, O), R) : null;
                },
              },
              {
                key: 'getCursorRectangle',
                value: function () {
                  var b = this.props.layout,
                    w = this.state,
                    O = w.activeCoordinate,
                    S = w.offset,
                    $ = w.tooltipAxisBandSize,
                    A = $ / 2;
                  return {
                    stroke: 'none',
                    fill: '#ccc',
                    x: b === 'horizontal' ? O.x - A : S.left + 0.5,
                    y: b === 'horizontal' ? S.top + 0.5 : O.y - A,
                    width: b === 'horizontal' ? $ : S.width - 1,
                    height: b === 'horizontal' ? S.height - 1 : $,
                  };
                },
              },
              {
                key: 'getCursorPoints',
                value: function () {
                  var b = this.props.layout,
                    w = this.state,
                    O = w.activeCoordinate,
                    S = w.offset,
                    $,
                    A,
                    P,
                    C;
                  if (b === 'horizontal')
                    ($ = O.x), (P = $), (A = S.top), (C = S.top + S.height);
                  else if (b === 'vertical')
                    (A = O.y), (C = A), ($ = S.left), (P = S.left + S.width);
                  else if (!ge(O.cx) || !ge(O.cy))
                    if (b === 'centric') {
                      var k = O.cx,
                        T = O.cy,
                        D = O.innerRadius,
                        j = O.outerRadius,
                        R = O.angle,
                        N = Pt(k, T, D, R),
                        z = Pt(k, T, j, R);
                      ($ = N.x), (A = N.y), (P = z.x), (C = z.y);
                    } else {
                      var M = O.cx,
                        Y = O.cy,
                        Z = O.radius,
                        ne = O.startAngle,
                        ve = O.endAngle,
                        Se = Pt(M, Y, Z, ne),
                        le = Pt(M, Y, Z, ve);
                      return {
                        points: [Se, le],
                        cx: M,
                        cy: Y,
                        radius: Z,
                        startAngle: ne,
                        endAngle: ve,
                      };
                    }
                  return [
                    { x: $, y: A },
                    { x: P, y: C },
                  ];
                },
              },
              {
                key: 'inRange',
                value: function (b, w) {
                  var O = this.props.layout;
                  if (O === 'horizontal' || O === 'vertical') {
                    var S = this.state.offset,
                      $ =
                        b >= S.left &&
                        b <= S.left + S.width &&
                        w >= S.top &&
                        w <= S.top + S.height;
                    return $ ? { x: b, y: w } : null;
                  }
                  var A = this.state,
                    P = A.angleAxisMap,
                    C = A.radiusAxisMap;
                  if (P && C) {
                    var k = tn(P);
                    return Eg({ x: b, y: w }, k);
                  }
                  return null;
                },
              },
              {
                key: 'parseEventsOfWrapper',
                value: function () {
                  var b = this.props.children,
                    w = this.getTooltipEventType(),
                    O = Wr(b, Zn.displayName),
                    S = {};
                  O &&
                    w === 'axis' &&
                    (O.props.trigger === 'click'
                      ? (S = { onClick: this.handleClick })
                      : (S = {
                          onMouseEnter: this.handleMouseEnter,
                          onMouseMove: this.handleMouseMove,
                          onMouseLeave: this.handleMouseLeave,
                          onTouchMove: this.handleTouchMove,
                          onTouchStart: this.handleTouchStart,
                          onTouchEnd: this.handleTouchEnd,
                        }));
                  var $ = Ko(this.props, this.handleOuterEvent);
                  return U(U({}, $), S);
                },
              },
              {
                key: 'addListener',
                value: function () {
                  Kt.on(Bc, this.handleReceiveSyncEvent),
                    Kt.setMaxListeners &&
                      Kt._maxListeners &&
                      Kt.setMaxListeners(Kt._maxListeners + 1);
                },
              },
              {
                key: 'removeListener',
                value: function () {
                  Kt.removeListener(Bc, this.handleReceiveSyncEvent),
                    Kt.setMaxListeners &&
                      Kt._maxListeners &&
                      Kt.setMaxListeners(Kt._maxListeners - 1);
                },
              },
              {
                key: 'triggerSyncEvent',
                value: function (b) {
                  var w = this.props.syncId;
                  ge(w) || Kt.emit(Bc, w, this.uniqueChartId, b);
                },
              },
              {
                key: 'applySyncEvent',
                value: function (b) {
                  var w = this.props,
                    O = w.layout,
                    S = w.syncMethod,
                    $ = this.state.updateId,
                    A = b.dataStartIndex,
                    P = b.dataEndIndex;
                  if (!ge(b.dataStartIndex) || !ge(b.dataEndIndex))
                    this.setState(
                      U(
                        { dataStartIndex: A, dataEndIndex: P },
                        p(
                          {
                            props: this.props,
                            dataStartIndex: A,
                            dataEndIndex: P,
                            updateId: $,
                          },
                          this.state
                        )
                      )
                    );
                  else if (ge(b.activeTooltipIndex)) this.setState(b);
                  else {
                    var C = b.chartX,
                      k = b.chartY,
                      T = b.activeTooltipIndex,
                      D = this.state,
                      j = D.offset,
                      R = D.tooltipTicks;
                    if (!j) return;
                    if (typeof S == 'function') T = S(R, b);
                    else if (S === 'value') {
                      T = -1;
                      for (var N = 0; N < R.length; N++)
                        if (R[N].value === b.activeLabel) {
                          T = N;
                          break;
                        }
                    }
                    var z = U(U({}, j), {}, { x: j.left, y: j.top }),
                      M = Math.min(C, z.x + z.width),
                      Y = Math.min(k, z.y + z.height),
                      Z = R[T] && R[T].value,
                      ne = J1(this.state, this.props.data, T),
                      ve = R[T]
                        ? {
                            x: O === 'horizontal' ? R[T].coordinate : M,
                            y: O === 'horizontal' ? Y : R[T].coordinate,
                          }
                        : X1;
                    this.setState(
                      U(
                        U({}, b),
                        {},
                        {
                          activeLabel: Z,
                          activeCoordinate: ve,
                          activePayload: ne,
                          activeTooltipIndex: T,
                        }
                      )
                    );
                  }
                },
              },
              {
                key: 'filterFormatItem',
                value: function (b, w, O) {
                  for (
                    var S = this.state.formattedGraphicalItems,
                      $ = 0,
                      A = S.length;
                    $ < A;
                    $++
                  ) {
                    var P = S[$];
                    if (
                      P.item === b ||
                      P.props.key === b.key ||
                      (w === cn(P.item.type) && O === P.childIndex)
                    )
                      return P;
                  }
                  return null;
                },
              },
              {
                key: 'renderAxis',
                value: function (b, w, O, S) {
                  var $ = this.props,
                    A = $.width,
                    P = $.height;
                  return y.createElement(
                    En,
                    ta({}, b, {
                      className: 'recharts-'
                        .concat(b.axisType, ' ')
                        .concat(b.axisType),
                      key: w.key || ''.concat(O, '-').concat(S),
                      viewBox: { x: 0, y: 0, width: A, height: P },
                      ticksGenerator: this.axesTicksGenerator,
                    })
                  );
                },
              },
              {
                key: 'renderClipPath',
                value: function () {
                  var b = this.clipPathId,
                    w = this.state.offset,
                    O = w.left,
                    S = w.top,
                    $ = w.height,
                    A = w.width;
                  return y.createElement(
                    'defs',
                    null,
                    y.createElement(
                      'clipPath',
                      { id: b },
                      y.createElement('rect', {
                        x: O,
                        y: S,
                        height: $,
                        width: A,
                      })
                    )
                  );
                },
              },
              {
                key: 'getXScales',
                value: function () {
                  var b = this.state.xAxisMap;
                  return b
                    ? Object.entries(b).reduce(function (w, O) {
                        var S = sy(O, 2),
                          $ = S[0],
                          A = S[1];
                        return U(U({}, w), {}, Xt({}, $, A.scale));
                      }, {})
                    : null;
                },
              },
              {
                key: 'getYScales',
                value: function () {
                  var b = this.state.yAxisMap;
                  return b
                    ? Object.entries(b).reduce(function (w, O) {
                        var S = sy(O, 2),
                          $ = S[0],
                          A = S[1];
                        return U(U({}, w), {}, Xt({}, $, A.scale));
                      }, {})
                    : null;
                },
              },
              {
                key: 'getXScaleByAxisId',
                value: function (b) {
                  var w, O;
                  return (w = this.state.xAxisMap) === null ||
                    w === void 0 ||
                    (O = w[b]) === null ||
                    O === void 0
                    ? void 0
                    : O.scale;
                },
              },
              {
                key: 'getYScaleByAxisId',
                value: function (b) {
                  var w, O;
                  return (w = this.state.yAxisMap) === null ||
                    w === void 0 ||
                    (O = w[b]) === null ||
                    O === void 0
                    ? void 0
                    : O.scale;
                },
              },
              {
                key: 'getItemByXY',
                value: function (b) {
                  var w = this.state.formattedGraphicalItems;
                  if (w && w.length)
                    for (var O = 0, S = w.length; O < S; O++) {
                      var $ = w[O],
                        A = $.props,
                        P = $.item,
                        C = cn(P.type);
                      if (C === 'Bar') {
                        var k = (A.data || []).find(function (D) {
                          return u7(b, D);
                        });
                        if (k) return { graphicalItem: $, payload: k };
                      } else if (C === 'RadialBar') {
                        var T = (A.data || []).find(function (D) {
                          return Eg(b, D);
                        });
                        if (T) return { graphicalItem: $, payload: T };
                      }
                    }
                  return null;
                },
              },
              {
                key: 'render',
                value: function () {
                  var b = this;
                  if (!Cm(this)) return null;
                  var w = this.props,
                    O = w.children,
                    S = w.className,
                    $ = w.width,
                    A = w.height,
                    P = w.style,
                    C = w.compact,
                    k = w.title,
                    T = w.desc,
                    D = ly(w, [
                      'children',
                      'className',
                      'width',
                      'height',
                      'style',
                      'compact',
                      'title',
                      'desc',
                    ]),
                    j = ze(D),
                    R = {
                      CartesianGrid: { handler: this.renderGrid, once: !0 },
                      ReferenceArea: { handler: this.renderReferenceElement },
                      ReferenceLine: { handler: this.renderReferenceElement },
                      ReferenceDot: { handler: this.renderReferenceElement },
                      XAxis: { handler: this.renderXAxis },
                      YAxis: { handler: this.renderYAxis },
                      Brush: { handler: this.renderBrush, once: !0 },
                      Bar: { handler: this.renderGraphicChild },
                      Line: { handler: this.renderGraphicChild },
                      Area: { handler: this.renderGraphicChild },
                      Radar: { handler: this.renderGraphicChild },
                      RadialBar: { handler: this.renderGraphicChild },
                      Scatter: { handler: this.renderGraphicChild },
                      Pie: { handler: this.renderGraphicChild },
                      Funnel: { handler: this.renderGraphicChild },
                      Tooltip: { handler: this.renderCursor, once: !0 },
                      PolarGrid: { handler: this.renderPolarGrid, once: !0 },
                      PolarAngleAxis: { handler: this.renderPolarAxis },
                      PolarRadiusAxis: { handler: this.renderPolarAxis },
                      Customized: { handler: this.renderCustomized },
                    };
                  if (C)
                    return y.createElement(
                      nu,
                      ta({}, j, { width: $, height: A, title: k, desc: T }),
                      this.renderClipPath(),
                      km(O, R)
                    );
                  var N = this.parseEventsOfWrapper();
                  return y.createElement(
                    'div',
                    ta(
                      {
                        className: Ze('recharts-wrapper', S),
                        style: U(
                          {
                            position: 'relative',
                            cursor: 'default',
                            width: $,
                            height: A,
                          },
                          P
                        ),
                      },
                      N,
                      {
                        ref: function (M) {
                          b.container = M;
                        },
                      }
                    ),
                    y.createElement(
                      nu,
                      ta({}, j, { width: $, height: A, title: k, desc: T }),
                      this.renderClipPath(),
                      km(O, R)
                    ),
                    this.renderLegend(),
                    this.renderTooltip()
                  );
                },
              },
            ]),
            _
          );
        })(E.exports.Component)),
      (r.displayName = a),
      (r.defaultProps = U(
        {
          layout: 'horizontal',
          stackOffset: 'none',
          barCategoryGap: '10%',
          barGap: 4,
          margin: { top: 5, right: 5, bottom: 5, left: 5 },
          reverseStackOrder: !1,
          syncMethod: 'index',
        },
        h
      )),
      (r.getDerivedStateFromProps = function (m, g) {
        var _ = m.data,
          x = m.children,
          b = m.width,
          w = m.height,
          O = m.layout,
          S = m.stackOffset,
          $ = m.margin;
        if (ge(g.updateId)) {
          var A = hy(m);
          return U(
            U(
              U({}, A),
              {},
              { updateId: 0 },
              p(U(U({ props: m }, A), {}, { updateId: 0 }), g)
            ),
            {},
            {
              prevData: _,
              prevWidth: b,
              prevHeight: w,
              prevLayout: O,
              prevStackOffset: S,
              prevMargin: $,
              prevChildren: x,
            }
          );
        }
        if (
          _ !== g.prevData ||
          b !== g.prevWidth ||
          w !== g.prevHeight ||
          O !== g.prevLayout ||
          S !== g.prevStackOffset ||
          !sa($, g.prevMargin)
        ) {
          var P = hy(m),
            C = {
              chartX: g.chartX,
              chartY: g.chartY,
              isTooltipActive: g.isTooltipActive,
            },
            k = U(U({}, py(g, _, O)), {}, { updateId: g.updateId + 1 }),
            T = U(U(U({}, P), C), k);
          return U(
            U(U({}, T), p(U({ props: m }, T), g)),
            {},
            {
              prevData: _,
              prevWidth: b,
              prevHeight: w,
              prevLayout: O,
              prevStackOffset: S,
              prevMargin: $,
              prevChildren: x,
            }
          );
        }
        if (!Ox(x, g.prevChildren)) {
          var D = !ge(_),
            j = D ? g.updateId : g.updateId + 1;
          return U(
            U(
              { updateId: j },
              p(U(U({ props: m }, g), {}, { updateId: j }), g)
            ),
            {},
            { prevChildren: x }
          );
        }
        return null;
      }),
      (r.renderActiveDot = function (m, g) {
        var _;
        return (
          E.exports.isValidElement(m)
            ? (_ = E.exports.cloneElement(m, g))
            : pe(m)
            ? (_ = m(g))
            : (_ = y.createElement(z1, g)),
          y.createElement(
            Rt,
            { className: 'recharts-active-dot', key: g.key },
            _
          )
        );
      }),
      n
    );
  },
  yY = gY({
    chartName: 'BarChart',
    GraphicalChild: Xi,
    defaultTooltipEventType: 'axis',
    validateTooltipEventTypes: ['axis', 'item'],
    axisComponents: [
      { axisType: 'xAxis', AxisComp: Bl },
      { axisType: 'yAxis', AxisComp: Fl },
    ],
    formatAxisMap: OG,
  });
const bY = ({ graphData: e, setGraphData: t }) => {
    const { editStockId: r } = Nr(),
      { mode: n } = vt(Kf);
    E.exports.useEffect(() => {
      r &&
        xe(
          { method: 'get', url: '/calculated-growth-rates/' + r },
          function (i) {
            i.data.length !== 0 && t(i.data);
          }
        );
    }, [r, t]);
    const a = () => (n === 'dark' ? 'rgb(255,255,255,0.7)' : 'rgb(0,0,0,0.7)');
    return y.createElement(
      y.Fragment,
      null,
      e &&
        y.createElement(
          Ne,
          { component: 'div', sx: { textAlign: 'left', mt: 4 } },
          y.createElement(
            wW,
            { width: '100%', height: 400 },
            y.createElement(
              yY,
              { data: e, margin: { top: 5, right: 30, left: 20, bottom: 5 } },
              y.createElement(mp, { strokeDasharray: '5 5' }),
              y.createElement(Bl, { dataKey: 'year' }),
              y.createElement(
                Fl,
                { dataKey: 'percent', padding: { top: 20, bottom: 20 } },
                y.createElement(_t, {
                  value: '%',
                  position: 'insideTopLeft',
                  fill: a(),
                })
              ),
              y.createElement(
                Xi,
                { dataKey: 'percent', fill: '#8884d8', isAnimationActive: !1 },
                y.createElement(Gr, {
                  dataKey: 'percent',
                  position: 'top',
                  fill: a(),
                })
              )
            )
          )
        )
    );
  },
  xY = y.memo(bY);
var yp = {},
  wY = rt.exports;
Object.defineProperty(yp, '__esModule', { value: !0 });
var Wl = (yp.default = void 0),
  _Y = wY(nt()),
  OY = L.exports,
  SY = (0, _Y.default)(
    (0, OY.jsx)('path', {
      d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5.97 4.06L14.09 6l1.41 1.41L16.91 6l1.06 1.06-1.41 1.41 1.41 1.41-1.06 1.06-1.41-1.4-1.41 1.41-1.06-1.06 1.41-1.41-1.41-1.42zm-6.78.66h5v1.5h-5v-1.5zM11.5 16h-2v2H8v-2H6v-1.5h2v-2h1.5v2h2V16zm6.5 1.25h-5v-1.5h5v1.5zm0-2.5h-5v-1.5h5v1.5z',
    }),
    'Calculate'
  );
Wl = yp.default = SY;
const EY = ({
    open: e,
    setOpen: t,
    id: r,
    tableDatas: n,
    setTableDatas: a,
  }) => {
    const i = () => {
        t(!1);
      },
      o = () => {
        xe({ method: 'delete', url: '/financial-metrics/' + r }, function () {
          t(!1), a(n.filter((s) => s.id !== r));
        });
      };
    return E.exports.createElement(
      il,
      {
        open: e,
        onClose: i,
        'aria-labelledby': 'alert-dialog-title',
        'aria-describedby': 'alert-dialog-description',
      },
      E.exports.createElement(
        i0,
        { id: 'alert-dialog-title' },
        'Are you really want to delete this year data?'
      ),
      E.exports.createElement(
        ol,
        null,
        E.exports.createElement(Ct, { onClick: o }, 'Agree'),
        E.exports.createElement(Ct, { onClick: i }, 'Disagree')
      )
    );
  },
  $Y = E.exports.memo(EY),
  AY = ({ years: e }) => {
    const { editStockId: t } = Nr(),
      { stockId: r, disableStep: n } = vt(xr),
      a = _r(),
      [i, o] = E.exports.useState(''),
      [s, l] = E.exports.useState(''),
      [c, u] = E.exports.useState(''),
      [f, d] = E.exports.useState(''),
      [h, v] = E.exports.useState(''),
      [p, m] = E.exports.useState(''),
      [g, _] = E.exports.useState([]),
      [x, b] = E.exports.useState(0),
      [w, O] = E.exports.useState(0),
      [S, $] = E.exports.useState(),
      [A, P] = y.useState(!1),
      [C, k] = y.useState(),
      [T, D] = E.exports.useState({
        year: '',
        EPS: '',
        money_dividend: '',
        stock_dividend: '',
        profit: '',
        ROEA: '',
      }),
      j = () => {
        const M = { ...T };
        i ? (M.year = '') : (M.year = 'Select year'),
          s ? (M.EPS = '') : (M.EPS = 'Enter EPS'),
          h ? (M.profit = '') : (M.profit = 'Enter Profit'),
          c
            ? (M.money_dividend = '')
            : (M.money_dividend = 'Enter Money Dividend'),
          f
            ? (M.stock_dividend = '')
            : (M.stock_dividend = 'Enter Stock Dividend'),
          p ? (M.ROEA = '') : (M.ROEA = 'Enter ROEA');
        const Y = g.find((Z) => +Z.year == +i);
        if ((Y && !x) || (x && Y && Y.id !== x)) {
          (M.year = 'This year existed, choose other'), D(M);
          return;
        }
        if ((D(M), r && i && s && h && c && f && p)) {
          const Z = {
            stock_id: r,
            year: +i,
            EPS: +s,
            money_dividend: +c,
            stock_dividend: +f,
            profit: +h,
            ROEA: +p,
          };
          x
            ? xe(
                { method: 'put', url: '/financial-metrics/' + x, data: Z },
                function () {
                  const ne = [...g];
                  (ne[g.findIndex((ve) => ve.id === x)] = { id: x, ...Z }),
                    _(ne),
                    R(),
                    b(0),
                    O(0);
                }
              )
            : xe(
                { method: 'post', url: '/financial-metrics', data: Z },
                function (ne) {
                  _([...g, { id: +ne.data.id, ...Z }]), R();
                }
              );
        }
      };
    E.exports.useEffect(() => {
      t &&
        xe({ method: 'get', url: '/financial-metrics/' + t }, function (M) {
          _(M.data), a(xt(['GrowthRate', !1]));
        });
    }, [t, a]);
    const R = () => {
        o(''), l(''), u(''), d(''), v(''), m('');
      },
      N = () => {
        g.length < 3 &&
          alert('Need at least 3 year records to start calculation'),
          xe(
            {
              method: 'post',
              url: '/calculate-growth-rates',
              data: { stock_id: r },
            },
            function (M) {
              M.data.length !== 0 && $(M.data);
            }
          );
      },
      z = (M) => {
        P(!0), k(M);
      };
    return y.createElement(
      y.Fragment,
      null,
      y.createElement(
        ct,
        { variant: 'h5', sx: { textAlign: 'center' } },
        w ? `(Edit Year: ${w})` : ''
      ),
      y.createElement(
        re,
        { container: !0, spacing: 2 },
        y.createElement(
          re,
          { item: !0, xs: 12, lg: 4 },
          y.createElement(
            pi,
            { fullWidth: !0, error: !!T.year },
            y.createElement(hi, { id: 'year-label' }, 'Year'),
            y.createElement(
              vi,
              {
                labelId: 'year-label',
                value: i,
                label: 'Year',
                onChange: (M) => o(M.target.value),
                fullWidth: !0,
                variant: 'standard',
                disabled: n.GrowthRate,
                sx: { position: 'relative', mt: 2 },
              },
              e.map((M) => y.createElement(zr, { value: M, key: M }, M))
            ),
            T.year && y.createElement(Uc, null, T.year)
          )
        ),
        y.createElement(
          re,
          { item: !0, xs: 12, lg: 4 },
          y.createElement(lt, {
            fullWidth: !0,
            label: 'EPS (VND)',
            variant: 'standard',
            disabled: n.GrowthRate,
            name: 'EPS',
            value: s,
            onChange: (M) => l(M.target.value),
            type: 'number',
            error: !!T.EPS,
            helperText: T.EPS,
          })
        ),
        y.createElement(
          re,
          { item: !0, xs: 12, lg: 4 },
          y.createElement(lt, {
            fullWidth: !0,
            label: 'Money Dividend (VND)',
            variant: 'standard',
            disabled: n.GrowthRate,
            name: 'money_dividend',
            value: c,
            onChange: (M) => u(M.target.value),
            type: 'number',
            error: !!T.money_dividend,
            helperText: T.money_dividend,
          })
        ),
        y.createElement(
          re,
          { item: !0, xs: 12, lg: 4 },
          y.createElement(lt, {
            fullWidth: !0,
            label: 'Stock Dividend (%)',
            variant: 'standard',
            disabled: n.GrowthRate,
            name: 'stock_dividend',
            value: f,
            onChange: (M) => d(M.target.value),
            type: 'number',
            error: !!T.stock_dividend,
            helperText: T.stock_dividend,
          })
        ),
        y.createElement(
          re,
          { item: !0, xs: 12, lg: 4 },
          y.createElement(lt, {
            fullWidth: !0,
            label: 'Profit (Billion VND)',
            variant: 'standard',
            disabled: n.GrowthRate,
            name: 'profit',
            value: h,
            onChange: (M) => v(M.target.value),
            type: 'number',
            error: !!T.profit,
            helperText: T.profit,
          })
        ),
        y.createElement(
          re,
          { item: !0, xs: 12, lg: 4 },
          y.createElement(lt, {
            fullWidth: !0,
            label: 'ROEA',
            variant: 'standard',
            disabled: n.GrowthRate,
            name: 'ROEA',
            value: p,
            onChange: (M) => m(M.target.value),
            type: 'number',
            error: !!T.ROEA,
            helperText: T.ROEA,
          })
        ),
        y.createElement(
          re,
          { item: !0, xs: 12, sx: { textAlign: 'center' } },
          y.createElement(
            wr,
            {
              color: 'primary',
              size: 'large',
              onClick: j,
              disabled: n.GrowthRate,
            },
            y.createElement(Ir, { sx: { fontSize: 50 } })
          )
        )
      ),
      y.createElement(
        ul,
        { component: jr, sx: { mt: 7 } },
        y.createElement(
          sl,
          { sx: { minWidth: 650 } },
          y.createElement(
            fl,
            null,
            y.createElement(
              zt,
              null,
              y.createElement(be, null),
              y.createElement(be, null, 'Year'),
              y.createElement(be, { align: 'left' }, 'EPS'),
              y.createElement(be, { align: 'left' }, 'Money Dividend'),
              y.createElement(be, { align: 'left' }, 'Stock Dividend'),
              y.createElement(be, { align: 'left' }, 'Profit'),
              y.createElement(be, { align: 'left' }, 'ROEA')
            )
          ),
          y.createElement(
            cl,
            null,
            g.map((M) =>
              y.createElement(
                zt,
                {
                  key: M.id,
                  sx: { '&:last-child td, &:last-child th': { border: 0 } },
                },
                y.createElement(
                  be,
                  { align: 'left' },
                  y.createElement(Jr, {
                    sx: { cursor: 'pointer' },
                    onClick: () => {
                      o(M.year.toString()),
                        l(M.EPS.toString()),
                        u(M.money_dividend.toString()),
                        d(M.stock_dividend.toString()),
                        v(M.profit.toString()),
                        m(M.ROEA.toString()),
                        O(M.year),
                        b(M.id);
                    },
                  }),
                  y.createElement(Bi, {
                    sx: { cursor: 'pointer' },
                    onClick: () => z(M.id),
                  })
                ),
                y.createElement(be, { align: 'left' }, M.year),
                y.createElement(be, { align: 'left' }, M.EPS),
                y.createElement(be, { align: 'left' }, M.money_dividend),
                y.createElement(
                  be,
                  { align: 'left' },
                  Math.round(M.stock_dividend)
                ),
                y.createElement(be, { align: 'left' }, Math.round(M.profit)),
                y.createElement(be, { align: 'left' }, (+M.ROEA).toFixed(2))
              )
            )
          )
        )
      ),
      y.createElement(xY, {
        graphData: S,
        setGraphData: E.exports.useCallback($, [$]),
      }),
      y.createElement(
        Ne,
        { component: 'div', sx: { textAlign: 'center' } },
        y.createElement(
          Ct,
          {
            variant: 'contained',
            sx: { mt: 4 },
            onClick: N,
            disabled: n.GrowthRate,
          },
          y.createElement(Wl, { sx: { mr: 0.5 } }),
          ' Calculate Growth Rates'
        )
      ),
      y.createElement($Y, {
        open: A,
        setOpen: P,
        id: C,
        tableDatas: g,
        setTableDatas: _,
      })
    );
  },
  CY = ({ years: e }) => {
    const { editStockId: t } = Nr(),
      [r, n] = E.exports.useState(''),
      [a, i] = E.exports.useState(''),
      [o, s] = E.exports.useState(''),
      [l, c] = E.exports.useState(''),
      [u, f] = E.exports.useState(''),
      d = _r(),
      { stockId: h, disableStep: v } = vt(xr);
    E.exports.useEffect(() => {
      t &&
        xe({ method: 'get', url: '/chosen-growth-rates/' + t }, function (m) {
          const g = m.data;
          g && (n(g.year_from), i(g.year_to), s(g.value + '%'));
        });
    }, [t]);
    const p = () => {
      c(r ? '' : 'Choose year'),
        f(a ? '' : 'Choose year'),
        +r >= parseInt(a) && c('Choose From Year less than To Year'),
        !l &&
          !u &&
          xe(
            {
              method: 'post',
              url: '/calculate-growth-rate-with-chosen-years',
              data: { stock_id: h, fromYear: r, toYear: a },
            },
            function (m) {
              s(m.data + '%'), d(xt(['Assumption', !1]));
            },
            function (m) {
              m.response.status === 404 && (d(nb()), d(aO(m.response.data)));
            }
          );
    };
    return y.createElement(
      Ne,
      { component: 'div', sx: { textAlign: 'center', mt: 5 } },
      y.createElement(
        ct,
        { variant: 'h5' },
        'Decide chosen years to calculate growth rate for this stock.'
      ),
      y.createElement(
        ct,
        { variant: 'h5', sx: { mt: 3 } },
        'Average growth rate from ',
        r || '(year)',
        ' to',
        ' ',
        a || '(year)',
        ' : ',
        o
      ),
      y.createElement(
        re,
        { container: !0, spacing: 0, sx: { textAlign: 'center', mt: 2 } },
        y.createElement(re, { item: !0, xs: 0, lg: 3 }),
        y.createElement(
          re,
          { item: !0, xs: 6, lg: 2, sx: { mr: 1, ml: 1 } },
          y.createElement(
            pi,
            { fullWidth: !0, error: !!l, sx: { mt: 2 } },
            y.createElement(hi, { id: 'year-label' }, 'From Year'),
            y.createElement(
              vi,
              {
                labelId: 'year-label',
                value: r,
                label: 'Year',
                onChange: (m) => n(m.target.value),
                fullWidth: !0,
                variant: 'standard',
                sx: { position: 'relative', mt: 2 },
                disabled: v.GrowthRate,
              },
              e.map((m) => y.createElement(zr, { value: m, key: m }, m))
            ),
            !!l && y.createElement(Uc, null, l)
          )
        ),
        y.createElement(
          re,
          { item: !0, xs: 6, lg: 2, sx: { ml: 1, mr: 1 } },
          y.createElement(
            pi,
            { fullWidth: !0, error: !!u, sx: { mt: 2 } },
            y.createElement(hi, { id: 'year-label' }, 'To Year'),
            y.createElement(
              vi,
              {
                labelId: 'year-label',
                value: a,
                label: 'Year',
                onChange: (m) => i(m.target.value),
                fullWidth: !0,
                variant: 'standard',
                sx: { position: 'relative', mt: 2 },
                disabled: v.GrowthRate,
              },
              e.map((m) => y.createElement(zr, { value: m, key: m }, m))
            ),
            !!u && y.createElement(Uc, null, u)
          )
        ),
        y.createElement(
          re,
          { item: !0, xs: 6, lg: 2, sx: { textAlign: 'left', ml: 2, mt: 2 } },
          y.createElement(
            Ct,
            {
              variant: 'contained',
              sx: { mt: 1.5 },
              onClick: p,
              disabled: v.GrowthRate,
            },
            y.createElement(Wl, { sx: { mr: 0.5 } }),
            ' Calculate'
          )
        ),
        y.createElement(re, { item: !0, xs: 0, lg: 3 })
      )
    );
  },
  PY = () => {
    const { disableStep: e } = vt(xr),
      t = new Date().getFullYear(),
      r = [];
    for (let n = t - 12; n < t; n++) r.push(n);
    return y.createElement(
      Ne,
      {
        sx: { flexGrow: 1, textAlign: 'left', mb: 7 },
        className: e.GrowthRate ? 'disabledText' : '',
      },
      y.createElement(
        cr,
        null,
        y.createElement(ct, { variant: 'h5' }, 'Step 3: Growth rate')
      ),
      y.createElement(AY, { years: E.exports.useMemo(() => r, [r]) }),
      y.createElement(CY, { years: E.exports.useMemo(() => r, [r]) })
    );
  },
  my = ({ option: e }) => {
    const [t, r] = E.exports.useState(''),
      [n, a] = E.exports.useState(!1),
      [i, o] = E.exports.useState(''),
      [s, l] = E.exports.useState(''),
      [c, u] = E.exports.useState(!1),
      [f, d] = E.exports.useState(''),
      [h, v] = E.exports.useState(!0),
      { stockId: p } = vt(xr),
      { editStockId: m } = Nr(),
      { disableStep: g } = vt(xr);
    E.exports.useEffect(() => {
      m &&
        xe(
          {
            method: 'get',
            url: `/growth_assumptions?stock_id=${m}&option=${e}`,
          },
          function (x) {
            const b = x.data;
            b && (r(b.next_10_years), l(b.next_10_to_20_years));
          }
        );
    }, [m, e]);
    const _ = () => {
      t ? (a(!1), o(''), v(!0)) : (a(!0), o('Enter growth rate'), v(!1)),
        s ? (u(!1), d(''), v(!0)) : (u(!0), d('Enter growth rate'), v(!1)),
        h &&
          xe({
            method: 'post',
            url: '/growth_assumptions',
            data: {
              stock_id: p,
              next_10_years: t,
              next_10_to_20_years: s,
              option: e,
            },
          });
    };
    return y.createElement(
      re,
      { container: !0, spacing: 0, sx: { textAlign: 'left', mt: 3 } },
      y.createElement(
        re,
        { item: !0, xs: 2, sx: { borderRight: '1px solid black' } },
        y.createElement(
          ct,
          { variant: 'h6', sx: { position: 'relative', top: 10 } },
          'Option ',
          e
        )
      ),
      y.createElement(
        re,
        { item: !0, xs: 9 },
        y.createElement(
          re,
          { container: !0, spacing: 0 },
          y.createElement(
            re,
            { item: !0, xs: 12, lg: 6 },
            y.createElement(lt, {
              label: 'Growth rate for next 10 years (%)',
              variant: 'standard',
              name: 'next-10',
              type: 'number',
              sx: { width: '90%', ml: 2, bottom: 10 },
              value: t,
              onChange: (x) => r(x.target.value),
              error: n,
              helperText: i,
              disabled: g.Assumption,
            })
          ),
          y.createElement(
            re,
            { item: !0, xs: 12, lg: 6 },
            y.createElement(lt, {
              label: 'Growth rate for next 10-20 years (%)',
              variant: 'standard',
              name: 'next-10-20',
              type: 'number',
              sx: { width: '90%', ml: 2, bottom: 10 },
              value: s,
              onChange: (x) => l(x.target.value),
              error: c,
              helperText: f,
              disabled: g.Assumption,
            })
          )
        )
      ),
      y.createElement(
        re,
        { item: !0, xs: 1 },
        y.createElement(
          wr,
          {
            color: 'primary',
            size: 'large',
            onClick: _,
            disabled: g.Assumption,
          },
          y.createElement(Ir, { sx: { fontSize: 50 } })
        )
      )
    );
  },
  kY = () => {
    const [e, t] = E.exports.useState(''),
      [r, n] = E.exports.useState(!1),
      { stockId: a, disableStep: i } = vt(xr),
      { editStockId: o } = Nr(),
      s = _r();
    E.exports.useEffect(() => {
      o &&
        xe({ method: 'get', url: `/chosen-eps/${o}` }, function (c) {
          const u = c.data;
          t(u.chosen_eps);
        });
    }, [o]);
    const l = () => {
      n(!e),
        xe(
          {
            method: 'post',
            url: '/chosen-eps',
            data: { chosen_eps: +e, stock_id: a },
          },
          function () {
            s(xt(['Calculation', !1]));
          }
        );
    };
    return y.createElement(
      Ne,
      { component: 'div' },
      y.createElement(
        ct,
        { variant: 'h6', sx: { mt: 5, display: 'inline-block' } },
        'EPS to calculate stock price:'
      ),
      y.createElement(lt, {
        variant: 'standard',
        name: 'next-10-20',
        type: 'number',
        sx: { width: '100px', mt: 4, ml: 2 },
        value: e,
        onChange: (c) => t(c.target.value),
        error: r,
        helperText: r ? 'Enter EPS' : '',
        disabled: i.GrowthRate,
      }),
      y.createElement(
        wr,
        { color: 'primary', size: 'large', onClick: l, disabled: i.GrowthRate },
        y.createElement(Ir, { sx: { fontSize: 50 } })
      )
    );
  },
  TY = () => {
    const { disableStep: e } = vt(xr);
    return y.createElement(
      Ne,
      {
        sx: { flexGrow: 1, textAlign: 'left', mb: 7 },
        className: e.Assumption ? 'disabledText' : '',
      },
      y.createElement(
        cr,
        null,
        y.createElement(ct, { variant: 'h5' }, 'Step 4: Assumption')
      ),
      y.createElement(my, { option: 1 }),
      y.createElement(my, { option: 2 }),
      y.createElement(kY, null)
    );
  },
  MY = ({ option: e }) => {
    const [t, r] = E.exports.useState([]);
    return (
      E.exports.useEffect(() => {
        const n = Object.entries(e);
        r(n.filter((a) => Number.isInteger(+a[0])));
      }, [e]),
      y.createElement(
        ul,
        { component: jr, sx: { mt: 4 } },
        y.createElement(
          sl,
          { sx: { minWidth: 650 }, 'aria-label': 'spanning table' },
          y.createElement(
            fl,
            null,
            y.createElement(
              zt,
              null,
              y.createElement(
                be,
                { align: 'center', colSpan: 5 },
                y.createElement(ct, { variant: 'h5' }, 'Option: ', e.option)
              )
            ),
            y.createElement(
              zt,
              null,
              y.createElement(be, { align: 'left' }, 'Year'),
              y.createElement(be, { align: 'left' }, 'Discounted Value'),
              y.createElement(be, { align: 'left' }, 'Future Value'),
              y.createElement(be, { align: 'left' }, 'Growth Rate'),
              y.createElement(be, { align: 'left' }, 'Intrinsic Value')
            )
          ),
          y.createElement(
            cl,
            null,
            t.map((n) =>
              y.createElement(
                zt,
                { key: n[0] },
                y.createElement(be, { align: 'left' }, n[0]),
                y.createElement(be, { align: 'left' }, n[1].discounted_value),
                y.createElement(be, { align: 'left' }, n[1].future_value),
                y.createElement(be, { align: 'left' }, n[1].growth_rate),
                y.createElement(be, { align: 'left' }, n[1].intrinsic_value)
              )
            ),
            y.createElement(
              zt,
              null,
              y.createElement(be, {
                rowSpan: 4,
                colSpan: 3,
                sx: { border: 'none' },
              }),
              y.createElement(be, { align: 'left' }, 'Remained Years'),
              y.createElement(
                be,
                { align: 'left' },
                e.total_remained_years.intrinsic_value
              )
            ),
            y.createElement(
              zt,
              null,
              y.createElement(be, { align: 'left' }, 'Total PE'),
              y.createElement(be, { align: 'left' }, e.total_pe)
            ),
            y.createElement(
              zt,
              null,
              y.createElement(be, { align: 'left' }, 'Chosen EPS'),
              y.createElement(be, { align: 'left' }, e.chosen_eps)
            ),
            y.createElement(
              zt,
              { sx: { '&:last-child td, &:last-child th': { border: 0 } } },
              y.createElement(be, { align: 'left' }, 'Intrinsic Price'),
              y.createElement(be, { align: 'left' }, e.intrinsic_price)
            )
          )
        )
      )
    );
  },
  IY = () => {
    const [e, t] = E.exports.useState([]),
      { stockId: r, disableStep: n } = vt(xr),
      { editStockId: a } = Nr(),
      i = () => {
        xe(
          {
            method: 'post',
            url: '/calculate-intrinsic-value',
            data: { stockId: r },
          },
          function (o) {
            const s = o.data;
            t(s);
          }
        );
      };
    return (
      E.exports.useEffect(() => {
        a &&
          r &&
          xe(
            { method: 'get', url: '/intrinsic-value-calculation/' + r },
            function (o) {
              const s = o.data;
              t(s);
            }
          );
      }, [a, r]),
      y.createElement(
        Ne,
        {
          component: 'div',
          sx: { flexGrow: 1, textAlign: 'left', mb: 7 },
          className: n.Calculation ? 'disabledText' : '',
        },
        y.createElement(
          cr,
          null,
          y.createElement(ct, { variant: 'h5' }, 'Step 5: Calculation')
        ),
        y.createElement(
          Ne,
          { component: 'div', sx: { textAlign: 'center' } },
          y.createElement(
            Ct,
            {
              variant: 'contained',
              sx: { mt: 4 },
              onClick: i,
              disabled: n.Calculation,
            },
            y.createElement(Wl, { sx: { mr: 0.5 } }),
            'Calculate Intrinsic Stock Value'
          )
        ),
        e.map((o) => y.createElement(MY, { option: o, key: o.option }))
      )
    );
  },
  RY = ({ tenet: e, stockHasTenets: t }) => {
    const { stockId: r, disableStep: n } = vt(xr),
      [a, i] = E.exports.useState(!1),
      { editStockId: o } = Nr(),
      [s, l] = E.exports.useState('');
    E.exports.useEffect(() => {
      if (t && o) {
        const f = t.filter((d) => d.tenet_id === e.id);
        f[0] && f[0].value && i(!0), f[0] && f[0].note && l(f[0].note);
      }
    }, [o, t, e.id]);
    const c = (f) => {
        const d = f.target.getAttribute('name'),
          h = { tenet_id: d ? +d : null, stock_id: r, value: a ? 0 : 1 };
        d &&
          xe(
            { method: 'post', url: '/stock-has-tenets', data: h },
            function () {
              i(!a);
            }
          );
      },
      u = () => {
        s &&
          xe({
            method: 'post',
            url: '/stock-has-tenets/note',
            data: { note: s, stock_id: r, tenet_id: e.id },
          });
      };
    return y.createElement(
      y.Fragment,
      null,
      y.createElement(
        re,
        { item: !0, xs: 12, lg: 6 },
        y.createElement(Mw, {
          control: y.createElement(Iw, null),
          label: e.description,
          name: '' + e.id,
          onChange: c,
          checked: a,
          disabled: n.CheckTenets,
          sx: { mt: 2 },
        })
      ),
      y.createElement(
        re,
        { item: !0, xs: 12, lg: 6 },
        y.createElement(lt, {
          label: 'Note',
          multiline: !0,
          rows: 1,
          fullWidth: !0,
          sx: { my: 2 },
          disabled: n.CheckTenets,
          name: '' + e.id,
          onBlur: u,
          value: s,
          onChange: (f) => l(f.target.value),
        })
      )
    );
  },
  DY = ({ tenets: e, type: t, index: r, count: n, stockHasTenets: a }) =>
    y.createElement(
      re,
      { container: !0 },
      y.createElement(
        re,
        { item: !0, xs: 2, sx: { position: 'relative' } },
        y.createElement(
          ct,
          { variant: 'body1', className: 'vertical-center' },
          t
        )
      ),
      y.createElement(
        re,
        { item: !0, xs: 10 },
        y.createElement(
          re,
          { container: !0 },
          e.map((i) =>
            y.createElement(RY, { key: i.id, tenet: i, stockHasTenets: a })
          )
        )
      ),
      r !== n - 1 && y.createElement(cr, { sx: { width: '100%', mb: 2 } })
    ),
  jY = () => {
    const [e, t] = E.exports.useState(),
      [r, n] = E.exports.useState(),
      { stockId: a, disableStep: i } = vt(xr),
      [o, s] = E.exports.useState(),
      { editStockId: l } = Nr();
    return (
      E.exports.useEffect(() => {
        xe({ method: 'get', url: '/tenets' }, function (c) {
          const u = c.data;
          t(u);
        }),
          xe({ method: 'get', url: '/tenet-types' }, function (c) {
            const u = c.data;
            n(u);
          });
      }, []),
      E.exports.useEffect(() => {
        a &&
          l &&
          xe({ method: 'get', url: '/stock-has-tenets/' + l }, function (c) {
            const u = c.data;
            s(u);
          });
      }, [l, a]),
      y.createElement(
        Ne,
        {
          className: i.CheckTenets ? 'disabledText' : '',
          sx: { flexGrow: 1, textAlign: 'left', mb: 7, mt: 4 },
        },
        y.createElement(
          cr,
          null,
          y.createElement(ct, { variant: 'h5' }, 'Step 2: Check Tenets')
        ),
        e &&
          Object.keys(e).map((c, u) =>
            y.createElement(DY, {
              tenets: e[c],
              type: r ? r[c] : '',
              index: u,
              count: Object.keys(e).length,
              key: u,
              stockHasTenets: o,
            })
          )
      )
    );
  },
  gy = () => {
    const { editStockId: e } = Nr(),
      t = _r();
    return (
      E.exports.useEffect(() => {
        e
          ? (t(Kc(+e)),
            t(xt(['CheckTenets', !1])),
            t(xt(['GrowthRate', !1])),
            t(xt(['Assumption', !1])),
            t(xt(['Calculation', !1])))
          : (t(Kc(void 0)),
            t(xt(['CompanyInfo', !1])),
            t(xt(['CheckTenets', !0])),
            t(xt(['GrowthRate', !0])),
            t(xt(['Assumption', !0])),
            t(xt(['Calculation', !0])));
      }, []),
      y.createElement(
        'div',
        { style: { width: '100%', textAlign: 'center' } },
        y.createElement(Wk, null),
        y.createElement(jY, null),
        y.createElement(PY, null),
        y.createElement(TY, null),
        y.createElement(IY, null)
      )
    );
  },
  NY = () => {
    const [e, t] = E.exports.useState(''),
      [r, n] = E.exports.useState(!1),
      a = vt(Qy),
      i = _r();
    E.exports.useEffect(() => {
      t(a);
    }, [a]);
    const o = () => {
      if (!e) {
        n(!0);
        return;
      }
      xe(
        { method: 'post', url: '/store-discount-rate', data: { value: e } },
        function (s) {
          const l = s.data;
          i(Zy(l.value));
        }
      );
    };
    return y.createElement(
      Ne,
      { component: 'div', sx: { mt: 3 } },
      y.createElement(lt, {
        variant: 'standard',
        label: 'Enter Discount Rate(%)',
        type: 'number',
        sx: { width: 200 },
        value: e,
        onChange: (s) => t(s.target.value),
        error: r,
      }),
      y.createElement(
        wr,
        { color: 'primary', size: 'large', onClick: o },
        y.createElement(Ir, { sx: { fontSize: 50 } })
      )
    );
  },
  yy = ({ handleEdit: e, tenet: t, handleDelete: r, total: n }) => {
    const [a, i] = y.useState(''),
      o = [];
    for (let l = 1; l <= n; l++) o.push(l);
    E.exports.useEffect(() => {
      i(t.order.toString());
    }, [t]);
    const s = (l) => {
      i(l.target.value),
        xe(
          {
            url: '/tenet/change-order/' + t.id,
            method: 'patch',
            data: { order: l.target.value },
          },
          function () {
            window.location.reload();
          }
        );
    };
    return y.createElement(
      y.Fragment,
      null,
      y.createElement(
        pi,
        { sx: { display: 'inline-block' } },
        y.createElement(hi, { id: 'demo-simple-select-label' }, 'Ord'),
        y.createElement(
          vi,
          {
            labelId: 'demo-simple-select-label',
            id: 'demo-simple-select',
            value: a,
            label: 'Order',
            onChange: s,
            sx: { width: 70 },
          },
          o && o.map((l) => y.createElement(zr, { value: l, key: l }, l))
        )
      ),
      y.createElement(Jr, {
        sx: { cursor: 'pointer', mt: 2, display: 'inline-block' },
        onClick: () => e(t),
      }),
      y.createElement(Bi, {
        sx: { cursor: 'pointer', mt: 2, display: 'inline-block' },
        onClick: () => r(t),
      })
    );
  },
  LY = ({ tenets: e, tenetTypes: t, handleEdit: r, handleDelete: n }) => {
    const a = e[0],
      i = e.slice(1);
    return y.createElement(
      y.Fragment,
      null,
      t &&
        y.createElement(
          zt,
          null,
          y.createElement(be, { rowSpan: e.length }, t[a.type]),
          y.createElement(be, { align: 'left' }, a.description),
          y.createElement(
            be,
            { align: 'right', sx: { minWidth: 150 } },
            y.createElement(yy, {
              handleEdit: r,
              tenet: a,
              handleDelete: n,
              total: e.length,
            })
          )
        ),
      i.map((o) =>
        y.createElement(
          zt,
          { key: o.id },
          y.createElement(be, { align: 'left' }, o.description),
          y.createElement(
            be,
            { align: 'right' },
            y.createElement(yy, {
              handleEdit: r,
              tenet: o,
              handleDelete: n,
              total: e.length,
            })
          )
        )
      )
    );
  };
var bp = {},
  BY = rt.exports;
Object.defineProperty(bp, '__esModule', { value: !0 });
var xp = (bp.default = void 0),
  FY = BY(nt()),
  zY = L.exports,
  WY = (0, FY.default)(
    (0, zY.jsx)('path', {
      d: 'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z',
    }),
    'DeleteForever'
  );
xp = bp.default = WY;
const UY = () => {
    const [e, t] = E.exports.useState(!1),
      r = Ln(),
      n = Ws(r.breakpoints.down('md')),
      [a, i] = E.exports.useState(),
      [o, s] = E.exports.useState(''),
      [l, c] = E.exports.useState(!1),
      [u, f] = E.exports.useState(''),
      [d, h] = E.exports.useState(!1),
      [v, p] = E.exports.useState(),
      [m, g] = E.exports.useState(0),
      [_, x] = E.exports.useState({ create: !0, update: !1, delete: !1 });
    E.exports.useEffect(() => {
      xe({ method: 'get', url: '/tenet-types' }, function (C) {
        const k = C.data;
        i(k);
      });
    }, []),
      E.exports.useEffect(() => {
        xe({ method: 'get', url: '/tenets' }, function (C) {
          const k = C.data;
          p(k);
        });
      }, []);
    const b = () => {
        t(!0), x({ create: !0, update: !1, delete: !1 });
      },
      w = () => {
        t(!1);
      },
      O = () => {
        c(!o),
          h(!u),
          o &&
            u &&
            xe(
              {
                method: 'post',
                url: '/tenets',
                data: { type: o, description: u },
              },
              function (C) {
                const k = C.data;
                p(k), t(!1), s(''), f('');
              }
            );
      },
      S = (C) => {
        x({ create: !1, update: !0, delete: !1 }),
          t(!0),
          s(C.type),
          f(C.description),
          g(C.id);
      },
      $ = () => {
        xe(
          {
            method: 'put',
            url: '/tenets/' + m,
            data: { type: o, description: u },
          },
          function (C) {
            const k = C.data;
            p(k), t(!1), s(''), f('');
          }
        );
      },
      A = (C) => {
        x({ delete: !0, create: !1, update: !1 }),
          t(!0),
          s(C.type),
          f(C.description),
          g(C.id);
      },
      P = () => {
        xe({ method: 'delete', url: '/tenets/' + m }, function (C) {
          const k = C.data;
          p(k), t(!1), s(''), f('');
        });
      };
    return y.createElement(
      'div',
      { style: { width: '100%', textAlign: 'center', marginTop: 40 } },
      y.createElement(ct, { variant: 'h5' }, 'Stock Tenets'),
      y.createElement(
        Ct,
        {
          variant: 'contained',
          startIcon: y.createElement(Ir, null),
          sx: { float: 'right', mr: 4, mb: 3 },
          onClick: b,
        },
        'Create New Tenet'
      ),
      y.createElement(
        ul,
        { component: jr },
        y.createElement(
          sl,
          { sx: { minWidth: 650 } },
          y.createElement(
            fl,
            null,
            y.createElement(
              zt,
              null,
              y.createElement(be, null, 'Type'),
              y.createElement(be, { align: 'left' }, 'Description'),
              y.createElement(be, { align: 'right' }, 'Action')
            )
          ),
          y.createElement(
            cl,
            null,
            v &&
              Object.keys(v).map((C, k) =>
                y.createElement(LY, {
                  tenetTypes: a,
                  tenets: v[C],
                  key: k,
                  handleEdit: S,
                  handleDelete: A,
                })
              )
          )
        )
      ),
      y.createElement(
        il,
        {
          fullScreen: n,
          open: e,
          onClose: w,
          'aria-labelledby': 'responsive-dialog-title',
        },
        y.createElement(
          a0,
          null,
          a &&
            Object.keys(a) &&
            y.createElement(
              pi,
              { variant: 'standard', sx: { minWidth: 250 } },
              y.createElement(hi, { id: 'tenet-types' }, 'Tenet Types'),
              y.createElement(
                vi,
                {
                  labelId: 'tenet-types',
                  id: 'tenet-types',
                  label: 'Tenet Types',
                  defaultValue: '',
                  value: o,
                  onChange: (C) => s(C.target.value),
                  error: l,
                  disabled: _.delete,
                },
                Object.keys(a).map((C, k) =>
                  y.createElement(zr, { value: C, key: k }, a[C])
                )
              )
            ),
          y.createElement(lt, {
            label: 'Tenet Description',
            sx: { width: '100%', mt: 2, minWidth: 350 },
            multiline: !0,
            rows: 4,
            value: u,
            onChange: (C) => f(C.target.value),
            error: d,
            disabled: _.delete,
          })
        ),
        y.createElement(
          ol,
          { sx: { mb: 1 } },
          _.delete &&
            y.createElement(
              Ct,
              {
                variant: 'contained',
                startIcon: y.createElement(xp, null),
                onClick: P,
                color: 'error',
              },
              'Delete'
            ),
          _.create &&
            y.createElement(
              Ct,
              {
                variant: 'contained',
                startIcon: y.createElement(Ir, null),
                onClick: O,
              },
              'Create'
            ),
          _.update &&
            y.createElement(
              Ct,
              {
                variant: 'contained',
                startIcon: y.createElement(Jr, null),
                onClick: $,
              },
              'Update'
            ),
          y.createElement(wr, { onClick: w }, y.createElement(Li, null))
        )
      )
    );
  },
  HY = () => {
    const e = Ln(),
      t = Ws(e.breakpoints.down('md')),
      [r, n] = E.exports.useState(!1),
      [a, i] = E.exports.useState(''),
      [o, s] = E.exports.useState(!1),
      [l, c] = E.exports.useState(''),
      [u, f] = E.exports.useState(!1),
      d = () => {
        n(!1);
      },
      [h, v] = E.exports.useState(),
      [p, m] = E.exports.useState({ create: !0, update: !1, delete: !1 }),
      [g, _] = E.exports.useState(0),
      x = () => {
        a || s(!0),
          l || f(!0),
          a &&
            l &&
            xe(
              {
                method: 'post',
                url: '/quotes',
                data: { description: a, author: l },
              },
              function (O) {
                const S = O.data;
                v(S), n(!1);
              }
            );
      };
    E.exports.useEffect(() => {
      xe({ method: 'get', url: '/quotes' }, function (O) {
        const S = O.data;
        v(S);
      });
    }, []);
    const b = () => {
        xe(
          {
            method: 'put',
            url: '/quotes/' + g,
            data: { description: a, author: l },
          },
          function (O) {
            const S = O.data;
            v(S), n(!1);
          }
        );
      },
      w = () => {
        xe({ method: 'delete', url: '/quotes/' + g }, function (O) {
          const S = O.data;
          v(S), n(!1);
        });
      };
    return y.createElement(
      'div',
      { style: { width: '100%', textAlign: 'center', marginTop: 40 } },
      y.createElement(ct, { variant: 'h5' }, 'Famous Quotes'),
      y.createElement(
        Ct,
        {
          variant: 'contained',
          startIcon: y.createElement(Ir, null),
          sx: { float: 'right', mr: 4, mb: 3 },
          onClick: () => {
            n(!0), m({ update: !1, create: !0, delete: !1 }), c(''), i('');
          },
        },
        'Create New Quotes'
      ),
      y.createElement(
        re,
        { container: !0, sx: { textAlign: 'left' } },
        h &&
          h.map((O) =>
            y.createElement(
              y.Fragment,
              { key: O.id },
              y.createElement(
                re,
                { item: !0, xs: 2, lg: 1, sx: { mt: 3 } },
                y.createElement(Jr, {
                  sx: { cursor: 'pointer' },
                  onClick: () => {
                    n(!0),
                      m({ update: !0, create: !1, delete: !1 }),
                      _(O.id),
                      c(O.author),
                      i(O.description);
                  },
                }),
                ' ',
                y.createElement(Bi, {
                  sx: { cursor: 'pointer' },
                  onClick: () => {
                    n(!0),
                      m({ update: !1, create: !1, delete: !0 }),
                      _(O.id),
                      c(O.author),
                      i(O.description);
                  },
                })
              ),
              y.createElement(
                re,
                { item: !0, xs: 10, lg: 11, sx: { mt: 3, fontSize: '17px' } },
                O.description,
                ' -',
                y.createElement(
                  'span',
                  { style: { fontStyle: 'italic' } },
                  ` ${O.author} `
                ),
                ' ',
                '-'
              )
            )
          )
      ),
      y.createElement(
        il,
        {
          open: r,
          onClose: d,
          fullScreen: t,
          'aria-labelledby': 'responsive-dialog-title',
        },
        y.createElement(
          a0,
          null,
          y.createElement(lt, {
            label: 'Description',
            sx: { width: '100%', mt: 2, minWidth: 500 },
            multiline: !0,
            rows: 4,
            value: a,
            onChange: (O) => i(O.target.value),
            error: o,
            disabled: p.delete,
          }),
          y.createElement(lt, {
            label: 'Author',
            sx: { width: '100%', mt: 2, minWidth: 500 },
            value: l,
            onChange: (O) => c(O.target.value),
            error: u,
            disabled: p.delete,
          })
        ),
        y.createElement(
          ol,
          { sx: { mb: 1 } },
          p.create &&
            y.createElement(
              Ct,
              {
                variant: 'contained',
                startIcon: y.createElement(Ir, null),
                onClick: x,
              },
              'Create New'
            ),
          p.update &&
            y.createElement(
              Ct,
              {
                variant: 'contained',
                startIcon: y.createElement(Jr, null),
                onClick: b,
              },
              'Update'
            ),
          p.delete &&
            y.createElement(
              Ct,
              {
                variant: 'contained',
                startIcon: y.createElement(xp, null),
                color: 'error',
                onClick: w,
              },
              'Delete'
            ),
          y.createElement(wr, { onClick: d }, y.createElement(Li, null))
        )
      )
    );
  };
var VY = lx,
  by = Me;
function GY(e, t, r, n) {
  return e == null
    ? []
    : (by(t) || (t = t == null ? [] : [t]),
      (r = n ? void 0 : r),
      by(r) || (r = r == null ? [] : [r]),
      VY(e, t, r));
}
var qY = GY,
  wp = {},
  YY = rt.exports;
Object.defineProperty(wp, '__esModule', { value: !0 });
var _p = (wp.default = void 0),
  KY = YY(nt()),
  XY = L.exports,
  JY = (0, KY.default)(
    (0, XY.jsx)('path', {
      d: 'M21 7h-6V5h6v2zm-2 3.9c-.32.07-.66.1-1 .1-2.76 0-5-2.24-5-5 0-1.13.37-2.16 1-3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V10.9z',
    }),
    'BookmarkRemove'
  );
_p = wp.default = JY;
var Op = {},
  ZY = rt.exports;
Object.defineProperty(Op, '__esModule', { value: !0 });
var Z1 = (Op.default = void 0),
  QY = ZY(nt()),
  eK = L.exports,
  tK = (0, QY.default)(
    (0, eK.jsx)('path', {
      d: 'M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z',
    }),
    'Autorenew'
  );
Z1 = Op.default = tK;
const rK = () => {
    const [e, t] = E.exports.useState(),
      [r, n] = E.exports.useState(),
      [a, i] = E.exports.useState();
    let o = 1,
      s = 1;
    const [l, c] = E.exports.useState();
    E.exports.useEffect(() => {
      xe({ method: 'get', url: '/stocks-for-home' }, function ({ data: p }) {
        c(p.totalTenets), t(p.stocks);
      }),
        xe({ method: 'get', url: '/quotes' }, function ({ data: p }) {
          i(p);
        });
    }, []),
      E.exports.useEffect(() => {
        if (e) {
          for (const g of e) g.marginOfSafetyOpt1 = f(g, u(g));
          const p = [...e],
            m = qY(p, ['marginOfSafetyOpt1'], ['desc']);
          n([...m]);
        }
      }, [e]);
    const u = (p) =>
        JSON.parse(p.intrinsic_value_caculations.calculation_step)[0]
          .intrinsic_price,
      f = (p, m) =>
        Math.round(
          ((m -
            p.current_market_price *
              (1 + Number(p.current_year_stock_dividend) / 100)) *
            100) /
            m
        ),
      d = (p, m) => {
        xe(
          {
            method: 'patch',
            url: '/stocks/status/' + p,
            data: { status: 'Unfollowed' },
          },
          function () {
            r == null || r.splice(m, 1), n([...r]);
          }
        );
      },
      h = (p, m, g) => (m / (g * (1 + p / 100))).toFixed(2),
      v = (p, m) => {
        xe(
          { method: 'patch', url: '/stocks/refresh-market-price/' + p },
          function (g) {
            (r[m].current_market_price = g.data),
              (r[m].marginOfSafetyOpt1 = f(r[m], u(r[m]))),
              n([...r]);
          }
        );
      };
    return y.createElement(
      Ne,
      { sx: { width: '100%', textAlign: 'center', mt: 3 } },
      y.createElement(
        jr,
        {
          elevation: 5,
          sx: { p: 1.5, fontSize: '14px', mt: 2, textAlign: 'left' },
          component: 'div',
        },
        a == null
          ? void 0
          : a.map((p) =>
              y.createElement(
                y.Fragment,
                { key: p.id },
                y.createElement(
                  Ne,
                  { component: 'span', key: p.id, sx: { lineHeight: 2 } },
                  o++,
                  '. ',
                  p.description,
                  ' - ',
                  p.author,
                  ' -',
                  ' '
                ),
                y.createElement('br', null)
              )
            )
      ),
      r &&
        r.map((p, m) => {
          var O, S, $, A, P, C, k;
          const g = JSON.parse(p.intrinsic_value_caculations.calculation_step),
            _ = p.financial_metrics;
          let x = 0,
            b = 0,
            w = 0;
          for (; w < 5 && w < p.financial_metrics.length; w++)
            (x += Number(p.financial_metrics[w].ROEA)),
              (b += p.financial_metrics[w].money_dividend);
          return (
            (x = +(x / w).toFixed(1)),
            (b = Math.round(b / w)),
            y.createElement(
              Rw,
              { className: 'h-stock-card', key: p.id },
              y.createElement(
                Dw,
                { sx: { position: 'relative' } },
                y.createElement(
                  Ne,
                  { component: 'div', sx: { textAlign: 'left', mt: 1, mr: 4 } },
                  y.createElement(
                    Ne,
                    { component: 'span', className: 'h-stock-number' },
                    y.createElement('span', null, s++)
                  ),
                  y.createElement(
                    Ne,
                    { component: 'span', className: 'h-company-name' },
                    p.ticker_symbol,
                    ' | ',
                    p.company_name
                  )
                ),
                y.createElement(
                  Ne,
                  { component: 'div', className: 'h-card-btn-group' },
                  y.createElement(
                    Zf,
                    { to: '/edit-stock/' + p.id, className: 'color-inherit' },
                    y.createElement(Jr, null)
                  ),
                  y.createElement(_p, { onClick: () => d(p.id, m) })
                ),
                y.createElement(
                  re,
                  { container: !0, sx: { mt: 2 } },
                  y.createElement(
                    re,
                    { item: !0, xs: 6, lg: 3, className: 'h-first-card-row' },
                    y.createElement(
                      Ne,
                      { component: 'span', className: 'h-stock-price' },
                      p.current_market_price
                    ),
                    y.createElement(Z1, {
                      sx: { color: 'rgb(114, 193, 254)', cursor: 'pointer' },
                      onClick: () => v(p.id, m),
                    }),
                    y.createElement(
                      Ne,
                      { component: 'div', sx: { mt: 1 } },
                      +p.current_year_stock_dividend != 0
                        ? 'Current Year Stock Dividend: ' +
                            parseFloat(p.current_year_stock_dividend) +
                            '%'
                        : ''
                    )
                  ),
                  y.createElement(
                    re,
                    { item: !0, xs: 6, lg: 3, className: 'h-first-card-row' },
                    'Margin Of Safety',
                    y.createElement('br', null),
                    p.marginOfSafetyOpt1,
                    '%',
                    ' ',
                    ((O = g[1]) == null ? void 0 : O.intrinsic_price) &&
                      '| ' +
                        f(p, (S = g[1]) == null ? void 0 : S.intrinsic_price) +
                        '%',
                    y.createElement(
                      Ne,
                      { component: 'div', sx: { mt: 1 } },
                      'Buy 1 Get',
                      y.createElement('br', null),
                      h(
                        +p.current_year_stock_dividend,
                        g[0].intrinsic_price,
                        p.current_market_price
                      ),
                      ' ',
                      (($ = g[1]) == null ? void 0 : $.intrinsic_price) &&
                        '| ' +
                          h(
                            +p.current_year_stock_dividend,
                            g[1].intrinsic_price,
                            p.current_market_price
                          )
                    )
                  ),
                  y.createElement(
                    re,
                    { item: !0, xs: 6, lg: 3, className: 'h-first-card-row' },
                    'PE',
                    y.createElement('br', null),
                    g[0].total_pe,
                    ' ',
                    g[1] ? '|' : '',
                    ' ',
                    (A = g[1]) == null ? void 0 : A.total_pe
                  ),
                  y.createElement(
                    re,
                    { item: !0, xs: 6, lg: 3, className: 'h-first-card-row' },
                    'Intrinsic Price',
                    y.createElement('br', null),
                    g[0].intrinsic_price,
                    ' ',
                    g[1] ? '|' : '',
                    ' ',
                    (P = g[1]) == null ? void 0 : P.intrinsic_price
                  )
                ),
                y.createElement(cr, { sx: { my: 2.5 } }),
                y.createElement(
                  re,
                  { container: !0 },
                  y.createElement(
                    re,
                    { item: !0, xs: 12 },
                    'Growth Assumption'
                  ),
                  y.createElement(
                    re,
                    { item: !0, xs: 12, md: 6 },
                    y.createElement(Ne, { component: 'div' }, 'Option 1'),
                    y.createElement(
                      re,
                      { container: !0 },
                      y.createElement(
                        re,
                        { item: !0, xs: 12, md: 6 },
                        y.createElement(
                          Ne,
                          {
                            component: 'div',
                            sx: { textAlign: 'left', mt: 2 },
                          },
                          'Next 10 years:',
                          ' ',
                          p.growth_assumptions[0].next_10_years,
                          '%'
                        )
                      ),
                      y.createElement(
                        re,
                        { item: !0, xs: 12, md: 6 },
                        y.createElement(
                          Ne,
                          {
                            component: 'div',
                            sx: { textAlign: 'left', mt: 2 },
                          },
                          'Next 10 - 20 years:',
                          ' ',
                          p.growth_assumptions[0].next_10_to_20_years,
                          '%'
                        )
                      )
                    )
                  ),
                  y.createElement(
                    re,
                    { item: !0, xs: 12, md: 6 },
                    y.createElement(Ne, { component: 'div' }, 'Option 2'),
                    y.createElement(
                      re,
                      { container: !0 },
                      y.createElement(
                        re,
                        { item: !0, xs: 12, md: 6 },
                        y.createElement(
                          Ne,
                          {
                            component: 'div',
                            sx: { textAlign: 'left', mt: 2 },
                          },
                          'Next 10 years:',
                          ' ',
                          (C = p.growth_assumptions[1]) == null
                            ? void 0
                            : C.next_10_years,
                          '%'
                        )
                      ),
                      y.createElement(
                        re,
                        { item: !0, xs: 12, md: 6 },
                        y.createElement(
                          Ne,
                          {
                            component: 'div',
                            sx: { textAlign: 'left', mt: 2 },
                          },
                          'Next 10 - 20 years:',
                          ' ',
                          (k = p.growth_assumptions[1]) == null
                            ? void 0
                            : k.next_10_to_20_years,
                          '%'
                        )
                      )
                    )
                  )
                ),
                y.createElement(cr, { sx: { my: 2.5 } }),
                y.createElement(
                  re,
                  { container: !0 },
                  y.createElement(
                    re,
                    { item: !0, xs: 12, md: 3, className: 'h-card-last-row' },
                    'Tenets: ',
                    p.stock_has_tenets.length + '/' + l
                  ),
                  y.createElement(
                    re,
                    { item: !0, xs: 12, md: 3, className: 'h-card-last-row' },
                    'Dividend Paid:',
                    ' ',
                    _.filter((T) => T.money_dividend).length,
                    '/',
                    p.financial_metrics.length,
                    ' years'
                  ),
                  y.createElement(
                    re,
                    { item: !0, xs: 12, md: 3, className: 'h-card-last-row' },
                    '5 years ROEA: ',
                    x,
                    '%'
                  ),
                  y.createElement(
                    re,
                    { item: !0, xs: 12, md: 3, className: 'h-card-last-row' },
                    '5 years average dividend: ',
                    b
                  )
                )
              )
            )
          );
        })
    );
  },
  ir = ae(be)(() => ({
    [`&.${s0.root}`]: { border: '1px solid rgba(224, 224, 224, 1)' },
  }));
var Sp = {},
  nK = rt.exports;
Object.defineProperty(Sp, '__esModule', { value: !0 });
var Q1 = (Sp.default = void 0),
  aK = nK(nt()),
  iK = L.exports,
  oK = (0, aK.default)(
    (0, iK.jsx)('path', {
      d: 'M21 7h-2v2h-2V7h-2V5h2V3h2v2h2v2zm-2 14-7-3-7 3V5c0-1.1.9-2 2-2h7c-.63.84-1 1.87-1 3 0 2.76 2.24 5 5 5 .34 0 .68-.03 1-.1V21z',
    }),
    'BookmarkAdd'
  );
Q1 = Sp.default = oK;
var Ep = {},
  sK = rt.exports;
Object.defineProperty(Ep, '__esModule', { value: !0 });
var ew = (Ep.default = void 0),
  lK = sK(nt()),
  cK = L.exports,
  uK = (0, lK.default)(
    (0, cK.jsx)('path', {
      d: 'M21.19 21.19 2.81 2.81 1.39 4.22l2.27 2.27C2.61 8.07 2 9.96 2 12c0 5.52 4.48 10 10 10 2.04 0 3.93-.61 5.51-1.66l2.27 2.27 1.41-1.42zm-10.6-4.59-4.24-4.24 1.41-1.41 2.83 2.83.18-.18 1.41 1.41-1.59 1.59zm3-5.84-7.1-7.1C8.07 2.61 9.96 2 12 2c5.52 0 10 4.48 10 10 0 2.04-.61 3.93-1.66 5.51L15 12.17l2.65-2.65-1.41-1.41-2.65 2.65z',
    }),
    'Unpublished'
  );
ew = Ep.default = uK;
const fK = () => {
    const [e, t] = y.useState(!1),
      r = Ln(),
      n = Ws(r.breakpoints.down('md')),
      [a, i] = E.exports.useState(),
      [o, s] = E.exports.useState();
    let l = 1;
    const c = () => {
        t(!1);
      },
      u = () => {
        xe(
          { method: 'delete', url: '/stocks/' + (o == null ? void 0 : o.id) },
          function () {
            delete a[o.index], t(!1);
          }
        );
      };
    E.exports.useEffect(() => {
      xe({ method: 'get', url: '/stocks' }, function ({ data: d }) {
        i(d);
      });
    }, []);
    const f = (d, h, v) => {
      xe(
        { method: 'patch', url: '/stocks/status/' + d, data: { status: v } },
        function () {
          (a[h].status = v), i([...a]);
        }
      );
    };
    return y.createElement(
      'div',
      { style: { width: '100%', textAlign: 'center' } },
      y.createElement(
        ul,
        { sx: { mt: 5, mb: 5 } },
        y.createElement(
          sl,
          { stickyHeader: !0, sx: { borderCollapse: 'collapse' } },
          y.createElement(
            fl,
            null,
            y.createElement(
              zt,
              null,
              y.createElement(ir, { align: 'center' }, 'No'),
              y.createElement(ir, { align: 'center' }, 'Action'),
              y.createElement(ir, { align: 'center' }, 'Symbol'),
              y.createElement(ir, { align: 'center' }, 'Name'),
              y.createElement(ir, { align: 'center' }, 'Status'),
              y.createElement(ir, { align: 'center' }, 'Market Price')
            )
          ),
          y.createElement(
            cl,
            null,
            a == null
              ? void 0
              : a.map((d, h) =>
                  y.createElement(
                    zt,
                    { key: d.id },
                    y.createElement(ir, null, l++),
                    y.createElement(
                      ir,
                      null,
                      y.createElement(
                        Zf,
                        {
                          to: `/edit-stock/${d.id}`,
                          style: { color: 'inherit' },
                        },
                        y.createElement(Jr, { sx: { cursor: 'pointer' } })
                      ),
                      y.createElement(Bi, {
                        onClick: () => {
                          t(!0),
                            s({ symbol: d.ticker_symbol, id: d.id, index: h });
                        },
                        sx: { cursor: 'pointer' },
                      }),
                      d.status === 'Unfinished'
                        ? y.createElement(ew, { sx: { cursor: 'pointer' } })
                        : d.status === 'Followed'
                        ? y.createElement(_p, {
                            sx: { cursor: 'pointer' },
                            onClick: () => {
                              f(d.id, h, 'Unfollowed');
                            },
                          })
                        : y.createElement(Q1, {
                            sx: { cursor: 'pointer' },
                            onClick: () => {
                              f(d.id, h, 'Followed');
                            },
                          })
                    ),
                    y.createElement(ir, null, d.ticker_symbol),
                    y.createElement(ir, null, d.company_name),
                    y.createElement(ir, null, d.status),
                    y.createElement(ir, null, d.current_market_price)
                  )
                )
          )
        )
      ),
      y.createElement(
        il,
        { fullScreen: n, open: e, onClose: c },
        y.createElement(
          i0,
          null,
          'Are you sure want to delete this stock: ',
          o == null ? void 0 : o.symbol
        ),
        y.createElement(
          ol,
          null,
          y.createElement(Ct, { onClick: u }, 'Agree'),
          y.createElement(Ct, { onClick: c }, 'Disagree')
        )
      )
    );
  },
  dK = vS(
    Vo(
      y.createElement(
        Fr,
        { path: '/', element: y.createElement(S2, null) },
        y.createElement(Fr, { index: !0, element: y.createElement(rK, null) }),
        y.createElement(Fr, {
          path: 'add-stock',
          element: y.createElement(gy, { key: 'add' }),
        }),
        y.createElement(Fr, {
          path: 'edit-stock/:editStockId',
          element: y.createElement(gy, { key: 'edit' }),
        }),
        y.createElement(Fr, {
          path: 'stock-list',
          element: y.createElement(fK, null),
        }),
        y.createElement(Fr, {
          path: 'discount-rate',
          element: y.createElement(NY, null),
        }),
        y.createElement(Fr, {
          path: 'stock-tenets',
          element: y.createElement(UY, null),
        }),
        y.createElement(Fr, {
          path: 'famous-quotes',
          element: y.createElement(HY, null),
        })
      )
    )
  ),
  pK = jw(document.getElementById('app'));
pK.render(
  y.createElement(
    y.StrictMode,
    null,
    y.createElement(v_, { store: sO }, y.createElement(sS, { router: dK }))
  )
);
