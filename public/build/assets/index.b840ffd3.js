import {
  r as S,
  R as g,
  a as wy,
  b as Wc,
  s as iw,
  d as ow,
  u as sw,
  e as Nf,
  _ as $e,
  j as G,
  c as I,
  f as he,
  g as lw,
  h as cw,
  i as X,
  k as uw,
  l as Le,
  m as Be,
  n as Lf,
  o as bo,
  p as ii,
  q as _y,
  t as We,
  v as Oy,
  P as fw,
  w as Yr,
  x as ha,
  y as dw,
  z as ae,
  A as je,
  B as Sy,
  C as Ey,
  D as pw,
  E as hn,
  F as $y,
  G as Ay,
  H as Bf,
  I as hw,
  J as Wn,
  T as vw,
  K as mw,
  L as Pp,
  M as Cy,
  N as Ff,
  O as Br,
  Q as ke,
  S as gw,
  U as va,
  V as Gl,
  W as ro,
  X as kp,
  Y as no,
  Z as yw,
  $ as Pn,
  a0 as mi,
  a1 as bw,
  a2 as nt,
  a3 as xw,
  a4 as ww,
  a5 as _w,
  a6 as Ow,
  a7 as Py,
  a8 as ky,
  a9 as Sw,
  aa as kr,
  ab as lt,
  ac as be,
  ad as St,
  ae as Ew,
  af as ut,
  ag as Tp,
  ah as $w,
  ai as Uc,
  aj as Hc,
  ak as Vs,
  al as Aw,
  am as Cw,
  an as Pw,
  ao as kw,
  ap as ao,
  aq as Tw,
  ar as Mw,
  as as In,
  at as Rn,
  au as Dn,
  av as gi,
  aw as Iw,
  ax as Rw,
  ay as Dw,
  az as jw,
  aA as Nw,
} from './FormControlLabel.cbfc49d4.js';
var Ty = { exports: {} },
  My = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ma = S.exports;
function Lw(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Bw = typeof Object.is == 'function' ? Object.is : Lw,
  Fw = ma.useState,
  zw = ma.useEffect,
  Ww = ma.useLayoutEffect,
  Uw = ma.useDebugValue;
function Hw(e, t) {
  var r = t(),
    n = Fw({ inst: { value: r, getSnapshot: t } }),
    a = n[0].inst,
    i = n[1];
  return (
    Ww(
      function () {
        (a.value = r), (a.getSnapshot = t), ql(a) && i({ inst: a });
      },
      [e, r, t]
    ),
    zw(
      function () {
        return (
          ql(a) && i({ inst: a }),
          e(function () {
            ql(a) && i({ inst: a });
          })
        );
      },
      [e]
    ),
    Uw(r),
    r
  );
}
function ql(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !Bw(e, r);
  } catch {
    return !0;
  }
}
function Vw(e, t) {
  return t();
}
var Gw =
  typeof window > 'u' ||
  typeof window.document > 'u' ||
  typeof window.document.createElement > 'u'
    ? Vw
    : Hw;
My.useSyncExternalStore =
  ma.useSyncExternalStore !== void 0 ? ma.useSyncExternalStore : Gw;
(function (e) {
  e.exports = My;
})(Ty);
var Iy = { exports: {} },
  Ry = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gs = S.exports,
  qw = Ty.exports;
function Yw(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Kw = typeof Object.is == 'function' ? Object.is : Yw,
  Xw = qw.useSyncExternalStore,
  Jw = Gs.useRef,
  Zw = Gs.useEffect,
  Qw = Gs.useMemo,
  e_ = Gs.useDebugValue;
Ry.useSyncExternalStoreWithSelector = function (e, t, r, n, a) {
  var i = Jw(null);
  if (i.current === null) {
    var o = { hasValue: !1, value: null };
    i.current = o;
  } else o = i.current;
  i = Qw(
    function () {
      function l(h) {
        if (!c) {
          if (((c = !0), (u = h), (h = n(h)), a !== void 0 && o.hasValue)) {
            var v = o.value;
            if (a(v, h)) return (f = v);
          }
          return (f = h);
        }
        if (((v = f), Kw(u, h))) return v;
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
  var s = Xw(e, i[0], i[1]);
  return (
    Zw(
      function () {
        (o.hasValue = !0), (o.value = s);
      },
      [s]
    ),
    e_(s),
    s
  );
};
(function (e) {
  e.exports = Ry;
})(Iy);
function t_(e) {
  e();
}
let Dy = t_;
const r_ = (e) => (Dy = e),
  n_ = () => Dy,
  fn = g.createContext(null);
function jy() {
  return S.exports.useContext(fn);
}
const a_ = () => {
  throw new Error('uSES not initialized!');
};
let Ny = a_;
const i_ = (e) => {
    Ny = e;
  },
  o_ = (e, t) => e === t;
function s_(e = fn) {
  const t = e === fn ? jy : () => S.exports.useContext(e);
  return function (n, a = o_) {
    const { store: i, subscription: o, getServerState: s } = t(),
      l = Ny(o.addNestedSub, i.getState, s || i.getState, n, a);
    return S.exports.useDebugValue(l), l;
  };
}
const l_ = s_();
var c_ = { exports: {} },
  Ue = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zf = Symbol.for('react.element'),
  Wf = Symbol.for('react.portal'),
  qs = Symbol.for('react.fragment'),
  Ys = Symbol.for('react.strict_mode'),
  Ks = Symbol.for('react.profiler'),
  Xs = Symbol.for('react.provider'),
  Js = Symbol.for('react.context'),
  u_ = Symbol.for('react.server_context'),
  Zs = Symbol.for('react.forward_ref'),
  Qs = Symbol.for('react.suspense'),
  el = Symbol.for('react.suspense_list'),
  tl = Symbol.for('react.memo'),
  rl = Symbol.for('react.lazy'),
  f_ = Symbol.for('react.offscreen'),
  Ly;
Ly = Symbol.for('react.module.reference');
function vr(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case zf:
        switch (((e = e.type), e)) {
          case qs:
          case Ks:
          case Ys:
          case Qs:
          case el:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case u_:
              case Js:
              case Zs:
              case rl:
              case tl:
              case Xs:
                return e;
              default:
                return t;
            }
        }
      case Wf:
        return t;
    }
  }
}
Ue.ContextConsumer = Js;
Ue.ContextProvider = Xs;
Ue.Element = zf;
Ue.ForwardRef = Zs;
Ue.Fragment = qs;
Ue.Lazy = rl;
Ue.Memo = tl;
Ue.Portal = Wf;
Ue.Profiler = Ks;
Ue.StrictMode = Ys;
Ue.Suspense = Qs;
Ue.SuspenseList = el;
Ue.isAsyncMode = function () {
  return !1;
};
Ue.isConcurrentMode = function () {
  return !1;
};
Ue.isContextConsumer = function (e) {
  return vr(e) === Js;
};
Ue.isContextProvider = function (e) {
  return vr(e) === Xs;
};
Ue.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === zf;
};
Ue.isForwardRef = function (e) {
  return vr(e) === Zs;
};
Ue.isFragment = function (e) {
  return vr(e) === qs;
};
Ue.isLazy = function (e) {
  return vr(e) === rl;
};
Ue.isMemo = function (e) {
  return vr(e) === tl;
};
Ue.isPortal = function (e) {
  return vr(e) === Wf;
};
Ue.isProfiler = function (e) {
  return vr(e) === Ks;
};
Ue.isStrictMode = function (e) {
  return vr(e) === Ys;
};
Ue.isSuspense = function (e) {
  return vr(e) === Qs;
};
Ue.isSuspenseList = function (e) {
  return vr(e) === el;
};
Ue.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === qs ||
    e === Ks ||
    e === Ys ||
    e === Qs ||
    e === el ||
    e === f_ ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === rl ||
        e.$$typeof === tl ||
        e.$$typeof === Xs ||
        e.$$typeof === Js ||
        e.$$typeof === Zs ||
        e.$$typeof === Ly ||
        e.getModuleId !== void 0))
  );
};
Ue.typeOf = vr;
(function (e) {
  e.exports = Ue;
})(c_);
function d_() {
  const e = n_();
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
const Mp = { notify() {}, get: () => [] };
function p_(e, t) {
  let r,
    n = Mp;
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
    r || ((r = t ? t.addNestedSub(o) : e.subscribe(o)), (n = d_()));
  }
  function c() {
    r && (r(), (r = void 0), n.clear(), (n = Mp));
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
const h_ =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  v_ = h_ ? S.exports.useLayoutEffect : S.exports.useEffect;
function m_({ store: e, context: t, children: r, serverState: n }) {
  const a = S.exports.useMemo(() => {
      const s = p_(e);
      return {
        store: e,
        subscription: s,
        getServerState: n ? () => n : void 0,
      };
    }, [e, n]),
    i = S.exports.useMemo(() => e.getState(), [e]);
  v_(() => {
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
  const o = t || fn;
  return g.createElement(o.Provider, { value: a }, r);
}
function By(e = fn) {
  const t = e === fn ? jy : () => S.exports.useContext(e);
  return function () {
    const { store: n } = t();
    return n;
  };
}
const g_ = By();
function y_(e = fn) {
  const t = e === fn ? g_ : By(e);
  return function () {
    return t().dispatch;
  };
}
const b_ = y_();
i_(Iy.exports.useSyncExternalStoreWithSelector);
r_(wy.exports.unstable_batchedUpdates);
function xr(e) {
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
function dn(e) {
  return !!e && !!e[et];
}
function Kr(e) {
  return (
    !!e &&
    ((function (t) {
      if (!t || typeof t != 'object') return !1;
      var r = Object.getPrototypeOf(t);
      if (r === null) return !0;
      var n = Object.hasOwnProperty.call(r, 'constructor') && r.constructor;
      return (
        n === Object ||
        (typeof n == 'function' && Function.toString.call(n) === C_)
      );
    })(e) ||
      Array.isArray(e) ||
      !!e[Bp] ||
      !!e.constructor[Bp] ||
      Uf(e) ||
      Hf(e))
  );
}
function jn(e, t, r) {
  r === void 0 && (r = !1),
    Pa(e) === 0
      ? (r ? Object.keys : sa)(e).forEach(function (n) {
          (r && typeof n == 'symbol') || t(n, e[n], e);
        })
      : e.forEach(function (n, a) {
          return t(a, n, e);
        });
}
function Pa(e) {
  var t = e[et];
  return t
    ? t.i > 3
      ? t.i - 4
      : t.i
    : Array.isArray(e)
    ? 1
    : Uf(e)
    ? 2
    : Hf(e)
    ? 3
    : 0;
}
function oa(e, t) {
  return Pa(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function x_(e, t) {
  return Pa(e) === 2 ? e.get(t) : e[t];
}
function Fy(e, t, r) {
  var n = Pa(e);
  n === 2 ? e.set(t, r) : n === 3 ? (e.delete(t), e.add(r)) : (e[t] = r);
}
function zy(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function Uf(e) {
  return $_ && e instanceof Map;
}
function Hf(e) {
  return A_ && e instanceof Set;
}
function wn(e) {
  return e.o || e.t;
}
function Vf(e) {
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  var t = Uy(e);
  delete t[et];
  for (var r = sa(t), n = 0; n < r.length; n++) {
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
function Gf(e, t) {
  return (
    t === void 0 && (t = !1),
    qf(e) ||
      dn(e) ||
      !Kr(e) ||
      (Pa(e) > 1 && (e.set = e.add = e.clear = e.delete = w_),
      Object.freeze(e),
      t &&
        jn(
          e,
          function (r, n) {
            return Gf(n, !0);
          },
          !0
        )),
    e
  );
}
function w_() {
  xr(2);
}
function qf(e) {
  return e == null || typeof e != 'object' || Object.isFrozen(e);
}
function Tr(e) {
  var t = Yc[e];
  return t || xr(18, e), t;
}
function __(e, t) {
  Yc[e] || (Yc[e] = t);
}
function Vc() {
  return yi;
}
function Yl(e, t) {
  t && (Tr('Patches'), (e.u = []), (e.s = []), (e.v = t));
}
function Fo(e) {
  Gc(e), e.p.forEach(O_), (e.p = null);
}
function Gc(e) {
  e === yi && (yi = e.l);
}
function Ip(e) {
  return (yi = { p: [], l: yi, h: e, m: !0, _: 0 });
}
function O_(e) {
  var t = e[et];
  t.i === 0 || t.i === 1 ? t.j() : (t.O = !0);
}
function Kl(e, t) {
  t._ = t.p.length;
  var r = t.p[0],
    n = e !== void 0 && e !== r;
  return (
    t.h.g || Tr('ES5').S(t, e, n),
    n
      ? (r[et].P && (Fo(t), xr(4)),
        Kr(e) && ((e = zo(t, e)), t.l || Wo(t, e)),
        t.u && Tr('Patches').M(r[et].t, e, t.u, t.s))
      : (e = zo(t, r, [])),
    Fo(t),
    t.u && t.v(t.u, t.s),
    e !== Wy ? e : void 0
  );
}
function zo(e, t, r) {
  if (qf(t)) return t;
  var n = t[et];
  if (!n)
    return (
      jn(
        t,
        function (i, o) {
          return Rp(e, n, t, i, o, r);
        },
        !0
      ),
      t
    );
  if (n.A !== e) return t;
  if (!n.P) return Wo(e, n.t, !0), n.t;
  if (!n.I) {
    (n.I = !0), n.A._--;
    var a = n.i === 4 || n.i === 5 ? (n.o = Vf(n.k)) : n.o;
    jn(n.i === 3 ? new Set(a) : a, function (i, o) {
      return Rp(e, n, a, i, o, r);
    }),
      Wo(e, a, !1),
      r && e.u && Tr('Patches').R(n, r, e.u, e.s);
  }
  return n.o;
}
function Rp(e, t, r, n, a, i) {
  if (dn(a)) {
    var o = zo(e, a, i && t && t.i !== 3 && !oa(t.D, n) ? i.concat(n) : void 0);
    if ((Fy(r, n, o), !dn(o))) return;
    e.m = !1;
  }
  if (Kr(a) && !qf(a)) {
    if (!e.h.F && e._ < 1) return;
    zo(e, a), (t && t.A.l) || Wo(e, a);
  }
}
function Wo(e, t, r) {
  r === void 0 && (r = !1), e.h.F && e.m && Gf(t, r);
}
function Xl(e, t) {
  var r = e[et];
  return (r ? wn(r) : e)[t];
}
function Dp(e, t) {
  if (t in e)
    for (var r = Object.getPrototypeOf(e); r; ) {
      var n = Object.getOwnPropertyDescriptor(r, t);
      if (n) return n;
      r = Object.getPrototypeOf(r);
    }
}
function on(e) {
  e.P || ((e.P = !0), e.l && on(e.l));
}
function Jl(e) {
  e.o || (e.o = Vf(e.t));
}
function qc(e, t, r) {
  var n = Uf(t)
    ? Tr('MapSet').N(t, r)
    : Hf(t)
    ? Tr('MapSet').T(t, r)
    : e.g
    ? (function (a, i) {
        var o = Array.isArray(a),
          s = {
            i: o ? 1 : 0,
            A: i ? i.A : Vc(),
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
          c = bi;
        o && ((l = [s]), (c = oi));
        var u = Proxy.revocable(l, c),
          f = u.revoke,
          d = u.proxy;
        return (s.k = d), (s.j = f), d;
      })(t, r)
    : Tr('ES5').J(t, r);
  return (r ? r.A : Vc()).p.push(n), n;
}
function S_(e) {
  return (
    dn(e) || xr(22, e),
    (function t(r) {
      if (!Kr(r)) return r;
      var n,
        a = r[et],
        i = Pa(r);
      if (a) {
        if (!a.P && (a.i < 4 || !Tr('ES5').K(a))) return a.t;
        (a.I = !0), (n = jp(r, i)), (a.I = !1);
      } else n = jp(r, i);
      return (
        jn(n, function (o, s) {
          (a && x_(a.t, o) === s) || Fy(n, o, t(s));
        }),
        i === 3 ? new Set(n) : n
      );
    })(e)
  );
}
function jp(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return Vf(e);
}
function E_() {
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
                return bi.get(l, i);
              },
              set: function (l) {
                var c = this[et];
                bi.set(c, i, l);
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
            n(s) && on(s);
            break;
          case 4:
            r(s) && on(s);
        }
    }
  }
  function r(i) {
    for (var o = i.t, s = i.k, l = sa(s), c = l.length - 1; c >= 0; c--) {
      var u = l[c];
      if (u !== et) {
        var f = o[u];
        if (f === void 0 && !oa(o, u)) return !0;
        var d = s[u],
          h = d && d[et];
        if (h ? h.t !== f : !zy(d, f)) return !0;
      }
    }
    var v = !!o[et];
    return l.length !== sa(o).length + (v ? 0 : 1);
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
  __('ES5', {
    J: function (i, o) {
      var s = Array.isArray(i),
        l = (function (u, f) {
          if (u) {
            for (var d = Array(f.length), h = 0; h < f.length; h++)
              Object.defineProperty(d, '' + h, e(h, !0));
            return d;
          }
          var v = Uy(f);
          delete v[et];
          for (var p = sa(v), m = 0; m < p.length; m++) {
            var y = p[m];
            v[y] = e(y, u || !!v[y].enumerable);
          }
          return Object.create(Object.getPrototypeOf(f), v);
        })(s, i),
        c = {
          i: s ? 5 : 4,
          A: o ? o.A : Vc(),
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
        ? dn(o) && o[et].A === i && t(i.p)
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
                    jn(d, function (x) {
                      x !== et &&
                        (f[x] !== void 0 || oa(f, x)
                          ? h[x] || l(d[x])
                          : ((h[x] = !0), on(u)));
                    }),
                      jn(f, function (x) {
                        d[x] !== void 0 || oa(d, x) || ((h[x] = !1), on(u));
                      });
                  else if (v === 5) {
                    if ((n(u) && (on(u), (h.length = !0)), d.length < f.length))
                      for (var p = d.length; p < f.length; p++) h[p] = !1;
                    else for (var m = f.length; m < d.length; m++) h[m] = !0;
                    for (
                      var y = Math.min(d.length, f.length), _ = 0;
                      _ < y;
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
var Np,
  yi,
  Yf = typeof Symbol < 'u' && typeof Symbol('x') == 'symbol',
  $_ = typeof Map < 'u',
  A_ = typeof Set < 'u',
  Lp = typeof Proxy < 'u' && Proxy.revocable !== void 0 && typeof Reflect < 'u',
  Wy = Yf
    ? Symbol.for('immer-nothing')
    : (((Np = {})['immer-nothing'] = !0), Np),
  Bp = Yf ? Symbol.for('immer-draftable') : '__$immer_draftable',
  et = Yf ? Symbol.for('immer-state') : '__$immer_state',
  C_ = '' + Object.prototype.constructor,
  sa =
    typeof Reflect < 'u' && Reflect.ownKeys
      ? Reflect.ownKeys
      : Object.getOwnPropertySymbols !== void 0
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(
            Object.getOwnPropertySymbols(e)
          );
        }
      : Object.getOwnPropertyNames,
  Uy =
    Object.getOwnPropertyDescriptors ||
    function (e) {
      var t = {};
      return (
        sa(e).forEach(function (r) {
          t[r] = Object.getOwnPropertyDescriptor(e, r);
        }),
        t
      );
    },
  Yc = {},
  bi = {
    get: function (e, t) {
      if (t === et) return e;
      var r = wn(e);
      if (!oa(r, t))
        return (function (a, i, o) {
          var s,
            l = Dp(i, o);
          return l
            ? 'value' in l
              ? l.value
              : (s = l.get) === null || s === void 0
              ? void 0
              : s.call(a.k)
            : void 0;
        })(e, r, t);
      var n = r[t];
      return e.I || !Kr(n)
        ? n
        : n === Xl(e.t, t)
        ? (Jl(e), (e.o[t] = qc(e.A.h, n, e)))
        : n;
    },
    has: function (e, t) {
      return t in wn(e);
    },
    ownKeys: function (e) {
      return Reflect.ownKeys(wn(e));
    },
    set: function (e, t, r) {
      var n = Dp(wn(e), t);
      if (n != null && n.set) return n.set.call(e.k, r), !0;
      if (!e.P) {
        var a = Xl(wn(e), t),
          i = a == null ? void 0 : a[et];
        if (i && i.t === r) return (e.o[t] = r), (e.D[t] = !1), !0;
        if (zy(r, a) && (r !== void 0 || oa(e.t, t))) return !0;
        Jl(e), on(e);
      }
      return (
        (e.o[t] === r && typeof r != 'number' && (r !== void 0 || t in e.o)) ||
        ((e.o[t] = r), (e.D[t] = !0), !0)
      );
    },
    deleteProperty: function (e, t) {
      return (
        Xl(e.t, t) !== void 0 || t in e.t
          ? ((e.D[t] = !1), Jl(e), on(e))
          : delete e.D[t],
        e.o && delete e.o[t],
        !0
      );
    },
    getOwnPropertyDescriptor: function (e, t) {
      var r = wn(e),
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
      xr(11);
    },
    getPrototypeOf: function (e) {
      return Object.getPrototypeOf(e.t);
    },
    setPrototypeOf: function () {
      xr(12);
    },
  },
  oi = {};
jn(bi, function (e, t) {
  oi[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
}),
  (oi.deleteProperty = function (e, t) {
    return oi.set.call(this, e, t, void 0);
  }),
  (oi.set = function (e, t, r) {
    return bi.set.call(this, e[0], t, r, e[0]);
  });
var P_ = (function () {
    function e(r) {
      var n = this;
      (this.g = Lp),
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
                var y = arguments.length, _ = Array(y > 1 ? y - 1 : 0), x = 1;
                x < y;
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
            (typeof i != 'function' && xr(6),
            o !== void 0 && typeof o != 'function' && xr(7),
            Kr(a))
          ) {
            var u = Ip(n),
              f = qc(n, a, void 0),
              d = !0;
            try {
              (c = i(f)), (d = !1);
            } finally {
              d ? Fo(u) : Gc(u);
            }
            return typeof Promise < 'u' && c instanceof Promise
              ? c.then(
                  function (p) {
                    return Yl(u, o), Kl(p, u);
                  },
                  function (p) {
                    throw (Fo(u), p);
                  }
                )
              : (Yl(u, o), Kl(c, u));
          }
          if (!a || typeof a != 'object') {
            if (
              ((c = i(a)) === void 0 && (c = a),
              c === Wy && (c = void 0),
              n.F && Gf(c, !0),
              o)
            ) {
              var h = [],
                v = [];
              Tr('Patches').M(a, c, h, v), o(h, v);
            }
            return c;
          }
          xr(21, a);
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
        Kr(r) || xr(8), dn(r) && (r = S_(r));
        var n = Ip(this),
          a = qc(this, r, void 0);
        return (a[et].C = !0), Gc(n), a;
      }),
      (t.finishDraft = function (r, n) {
        var a = r && r[et],
          i = a.A;
        return Yl(i, n), Kl(void 0, i);
      }),
      (t.setAutoFreeze = function (r) {
        this.F = r;
      }),
      (t.setUseProxies = function (r) {
        r && !Lp && xr(20), (this.g = r);
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
        var o = Tr('Patches').$;
        return dn(r)
          ? o(r, n)
          : this.produce(r, function (s) {
              return o(s, n);
            });
      }),
      e
    );
  })(),
  tr = new P_(),
  Hy = tr.produce;
tr.produceWithPatches.bind(tr);
tr.setAutoFreeze.bind(tr);
tr.setUseProxies.bind(tr);
tr.applyPatches.bind(tr);
tr.createDraft.bind(tr);
tr.finishDraft.bind(tr);
function k_(e, t, r) {
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
function Fp(e, t) {
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
function zp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Fp(Object(r), !0).forEach(function (n) {
          k_(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Fp(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function Mt(e) {
  return (
    'Minified Redux error #' +
    e +
    '; visit https://redux.js.org/Errors?code=' +
    e +
    ' for the full message or use the non-minified dev environment for full errors. '
  );
}
var Wp = (function () {
    return (typeof Symbol == 'function' && Symbol.observable) || '@@observable';
  })(),
  Zl = function () {
    return Math.random().toString(36).substring(7).split('').join('.');
  },
  Uo = {
    INIT: '@@redux/INIT' + Zl(),
    REPLACE: '@@redux/REPLACE' + Zl(),
    PROBE_UNKNOWN_ACTION: function () {
      return '@@redux/PROBE_UNKNOWN_ACTION' + Zl();
    },
  };
function T_(e) {
  if (typeof e != 'object' || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Vy(e, t, r) {
  var n;
  if (
    (typeof t == 'function' && typeof r == 'function') ||
    (typeof r == 'function' && typeof arguments[3] == 'function')
  )
    throw new Error(Mt(0));
  if (
    (typeof t == 'function' && typeof r > 'u' && ((r = t), (t = void 0)),
    typeof r < 'u')
  ) {
    if (typeof r != 'function') throw new Error(Mt(1));
    return r(Vy)(e, t);
  }
  if (typeof e != 'function') throw new Error(Mt(2));
  var a = e,
    i = t,
    o = [],
    s = o,
    l = !1;
  function c() {
    s === o && (s = o.slice());
  }
  function u() {
    if (l) throw new Error(Mt(3));
    return i;
  }
  function f(p) {
    if (typeof p != 'function') throw new Error(Mt(4));
    if (l) throw new Error(Mt(5));
    var m = !0;
    return (
      c(),
      s.push(p),
      function () {
        if (!!m) {
          if (l) throw new Error(Mt(6));
          (m = !1), c();
          var _ = s.indexOf(p);
          s.splice(_, 1), (o = null);
        }
      }
    );
  }
  function d(p) {
    if (!T_(p)) throw new Error(Mt(7));
    if (typeof p.type > 'u') throw new Error(Mt(8));
    if (l) throw new Error(Mt(9));
    try {
      (l = !0), (i = a(i, p));
    } finally {
      l = !1;
    }
    for (var m = (o = s), y = 0; y < m.length; y++) {
      var _ = m[y];
      _();
    }
    return p;
  }
  function h(p) {
    if (typeof p != 'function') throw new Error(Mt(10));
    (a = p), d({ type: Uo.REPLACE });
  }
  function v() {
    var p,
      m = f;
    return (
      (p = {
        subscribe: function (_) {
          if (typeof _ != 'object' || _ === null) throw new Error(Mt(11));
          function x() {
            _.next && _.next(u());
          }
          x();
          var b = m(x);
          return { unsubscribe: b };
        },
      }),
      (p[Wp] = function () {
        return this;
      }),
      p
    );
  }
  return (
    d({ type: Uo.INIT }),
    (n = { dispatch: d, subscribe: f, getState: u, replaceReducer: h }),
    (n[Wp] = v),
    n
  );
}
function M_(e) {
  Object.keys(e).forEach(function (t) {
    var r = e[t],
      n = r(void 0, { type: Uo.INIT });
    if (typeof n > 'u') throw new Error(Mt(12));
    if (typeof r(void 0, { type: Uo.PROBE_UNKNOWN_ACTION() }) > 'u')
      throw new Error(Mt(13));
  });
}
function I_(e) {
  for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
    var a = t[n];
    typeof e[a] == 'function' && (r[a] = e[a]);
  }
  var i = Object.keys(r),
    o;
  try {
    M_(r);
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
      if (typeof m > 'u') throw (c && c.type, new Error(Mt(14)));
      (f[h] = m), (u = u || m !== p);
    }
    return (u = u || i.length !== Object.keys(l).length), u ? f : l;
  };
}
function Ho() {
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
function R_() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function (n) {
    return function () {
      var a = n.apply(void 0, arguments),
        i = function () {
          throw new Error(Mt(15));
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
        (i = Ho.apply(void 0, s)(a.dispatch)),
        zp(zp({}, a), {}, { dispatch: i })
      );
    };
  };
}
function Gy(e) {
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
var qy = Gy();
qy.withExtraArgument = Gy;
const Up = qy;
var D_ =
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
var Vo =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var r = 0, n = t.length, a = e.length; r < n; r++, a++) e[a] = t[r];
      return e;
    },
  j_ = Object.defineProperty,
  Hp = Object.getOwnPropertySymbols,
  N_ = Object.prototype.hasOwnProperty,
  L_ = Object.prototype.propertyIsEnumerable,
  Vp = function (e, t, r) {
    return t in e
      ? j_(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  xi = function (e, t) {
    for (var r in t || (t = {})) N_.call(t, r) && Vp(e, r, t[r]);
    if (Hp)
      for (var n = 0, a = Hp(t); n < a.length; n++) {
        var r = a[n];
        L_.call(t, r) && Vp(e, r, t[r]);
      }
    return e;
  },
  B_ =
    typeof window < 'u' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == 'object'
              ? Ho
              : Ho.apply(null, arguments);
        };
function F_(e) {
  if (typeof e != 'object' || e === null) return !1;
  var t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  for (var r = t; Object.getPrototypeOf(r) !== null; )
    r = Object.getPrototypeOf(r);
  return t === r;
}
var z_ = (function (e) {
  D_(t, e);
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
        ? new (t.bind.apply(t, Vo([void 0], r[0].concat(this))))()
        : new (t.bind.apply(t, Vo([void 0], r.concat(this))))();
    }),
    t
  );
})(Array);
function Kc(e) {
  return Kr(e) ? Hy(e, function () {}) : e;
}
function W_(e) {
  return typeof e == 'boolean';
}
function U_() {
  return function (t) {
    return H_(t);
  };
}
function H_(e) {
  e === void 0 && (e = {});
  var t = e.thunk,
    r = t === void 0 ? !0 : t;
  e.immutableCheck, e.serializableCheck;
  var n = new z_();
  return (
    r && (W_(r) ? n.push(Up) : n.push(Up.withExtraArgument(r.extraArgument))), n
  );
}
var V_ = !0;
function G_(e) {
  var t = U_(),
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
  else if (F_(a)) h = I_(a);
  else
    throw new Error(
      '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
    );
  var v = o;
  typeof v == 'function' && (v = v(t));
  var p = R_.apply(void 0, v),
    m = Ho;
  l && (m = B_(xi({ trace: !V_ }, typeof l == 'object' && l)));
  var y = [p];
  Array.isArray(d) ? (y = Vo([p], d)) : typeof d == 'function' && (y = d(y));
  var _ = m.apply(void 0, y);
  return Vy(h, u, _);
}
function wi(e, t) {
  function r() {
    for (var n = [], a = 0; a < arguments.length; a++) n[a] = arguments[a];
    if (t) {
      var i = t.apply(void 0, n);
      if (!i) throw new Error('prepareAction did not return an object');
      return xi(
        xi({ type: e, payload: i.payload }, 'meta' in i && { meta: i.meta }),
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
function Yy(e) {
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
function q_(e) {
  return typeof e == 'function';
}
function Y_(e, t, r, n) {
  r === void 0 && (r = []);
  var a = typeof t == 'function' ? Yy(t) : [t, r, n],
    i = a[0],
    o = a[1],
    s = a[2],
    l;
  if (q_(e))
    l = function () {
      return Kc(e());
    };
  else {
    var c = Kc(e);
    l = function () {
      return c;
    };
  }
  function u(f, d) {
    f === void 0 && (f = l());
    var h = Vo(
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
          if (dn(v)) {
            var m = v,
              y = p(m, d);
            return y === void 0 ? v : y;
          } else {
            if (Kr(v))
              return Hy(v, function (_) {
                return p(_, d);
              });
            var y = p(v, d);
            if (y === void 0) {
              if (v === null) return v;
              throw Error(
                'A case reducer on a non-draftable value must not return undefined'
              );
            }
            return y;
          }
        return v;
      }, f)
    );
  }
  return (u.getInitialState = l), u;
}
function K_(e, t) {
  return e + '/' + t;
}
function ji(e) {
  var t = e.name;
  if (!t) throw new Error('`name` is a required option for createSlice');
  typeof process < 'u';
  var r =
      typeof e.initialState == 'function' ? e.initialState : Kc(e.initialState),
    n = e.reducers || {},
    a = Object.keys(n),
    i = {},
    o = {},
    s = {};
  a.forEach(function (u) {
    var f = n[u],
      d = K_(t, u),
      h,
      v;
    'reducer' in f ? ((h = f.reducer), (v = f.prepare)) : (h = f),
      (i[u] = h),
      (o[d] = h),
      (s[u] = v ? wi(d, v) : wi(d));
  });
  function l() {
    var u =
        typeof e.extraReducers == 'function'
          ? Yy(e.extraReducers)
          : [e.extraReducers],
      f = u[0],
      d = f === void 0 ? {} : f,
      h = u[1],
      v = h === void 0 ? [] : h,
      p = u[2],
      m = p === void 0 ? void 0 : p,
      y = xi(xi({}, d), o);
    return Y_(r, y, v, m);
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
var Kf = 'listenerMiddleware';
wi(Kf + '/add');
wi(Kf + '/removeAll');
wi(Kf + '/remove');
E_();
const X_ = { open: !window.isMobile },
  Ky = ji({
    name: 'sidebar',
    initialState: X_,
    reducers: {
      toggle: (e) => {
        e.open = !e.open;
      },
    },
  }),
  { toggle: Xy } = Ky.actions,
  Jy = (e) => e.sidebar.open,
  J_ = Ky.reducer,
  Z_ = { value: '' },
  Zy = ji({
    name: 'discount',
    initialState: Z_,
    reducers: {
      changeDiscountRate: (e, t) => {
        e.value = t.payload;
      },
    },
  }),
  { changeDiscountRate: Qy } = Zy.actions,
  eb = (e) => e.discount.value,
  Q_ = Zy.reducer,
  eO = {
    stockId: void 0,
    disableStep: {
      CompanyInfo: !1,
      CheckTenets: !0,
      GrowthRate: !0,
      Assumption: !0,
      Calculation: !0,
    },
  },
  tb = ji({
    name: 'addStock',
    initialState: eO,
    reducers: {
      changeStockId: (e, t) => {
        e.stockId = t.payload;
      },
      changeDisableStep: (e, t) => {
        e.disableStep[t.payload[0]] = t.payload[1];
      },
    },
  }),
  { changeStockId: Xc, changeDisableStep: wt } = tb.actions,
  fr = (e) => e.addStock,
  tO = tb.reducer,
  rO = { mode: 'dark' },
  rb = ji({
    name: 'lightMode',
    initialState: rO,
    reducers: {
      changeMode: (e, t) => {
        e.mode = t.payload;
      },
    },
  }),
  { changeMode: Jc } = rb.actions,
  Xf = (e) => e.lightMode,
  nO = rb.reducer,
  aO = { open: !1, text: '' },
  nb = ji({
    name: 'errorAlert',
    initialState: aO,
    reducers: {
      toggleAlertOpen: (e) => {
        e.open = !e.open;
      },
      changeAlertText: (e, t) => {
        e.text = t.payload;
      },
    },
  }),
  { toggleAlertOpen: ab, changeAlertText: iO } = nb.actions,
  oO = (e) => e.errorAlert,
  sO = nb.reducer,
  lO = G_({
    reducer: {
      sidebar: J_,
      discount: Q_,
      addStock: tO,
      lightMode: nO,
      errorAlert: sO,
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
 */ function ct() {
  return (
    (ct = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    ct.apply(this, arguments)
  );
}
var vt;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(vt || (vt = {}));
const Gp = 'popstate';
function cO(e) {
  e === void 0 && (e = {});
  function t(n, a) {
    let { pathname: i, search: o, hash: s } = n.location;
    return kn(
      '',
      { pathname: i, search: o, hash: s },
      (a.state && a.state.usr) || null,
      (a.state && a.state.key) || 'default'
    );
  }
  function r(n, a) {
    return typeof a == 'string' ? a : _i(a);
  }
  return fO(t, r, null, e);
}
function uO() {
  return Math.random().toString(36).substr(2, 8);
}
function qp(e) {
  return { usr: e.state, key: e.key };
}
function kn(e, t, r, n) {
  return (
    r === void 0 && (r = null),
    ct(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? Xr(t) : t,
      { state: r, key: (t && t.key) || n || uO() }
    )
  );
}
function _i(e) {
  let { pathname: t = '/', search: r = '', hash: n = '' } = e;
  return (
    r && r !== '?' && (t += r.charAt(0) === '?' ? r : '?' + r),
    n && n !== '#' && (t += n.charAt(0) === '#' ? n : '#' + n),
    t
  );
}
function Xr(e) {
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
function fO(e, t, r, n) {
  n === void 0 && (n = {});
  let { window: a = document.defaultView, v5Compat: i = !1 } = n,
    o = a.history,
    s = vt.Pop,
    l = null;
  function c() {
    (s = vt.Pop), l && l({ action: s, location: d.location });
  }
  function u(h, v) {
    s = vt.Push;
    let p = kn(d.location, h, v);
    r && r(p, h);
    let m = qp(p),
      y = d.createHref(p);
    try {
      o.pushState(m, '', y);
    } catch {
      a.location.assign(y);
    }
    i && l && l({ action: s, location: p });
  }
  function f(h, v) {
    s = vt.Replace;
    let p = kn(d.location, h, v);
    r && r(p, h);
    let m = qp(p),
      y = d.createHref(p);
    o.replaceState(m, '', y), i && l && l({ action: s, location: p });
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
        a.addEventListener(Gp, c),
        (l = h),
        () => {
          a.removeEventListener(Gp, c), (l = null);
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
var Rt;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(Rt || (Rt = {}));
function ib(e, t, r) {
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
        ct({}, n, {
          id: o,
          children: n.children ? ib(n.children, i, r) : void 0,
        })
      );
    })
  );
}
function si(e, t, r) {
  r === void 0 && (r = '/');
  let n = typeof t == 'string' ? Xr(t) : t,
    a = sb(n.pathname || '/', r);
  if (a == null) return null;
  let i = ob(e);
  dO(i);
  let o = null;
  for (let s = 0; o == null && s < i.length; ++s) o = wO(i[s], a);
  return o;
}
function ob(e, t, r, n) {
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
      let s = ln([n, o.relativePath]),
        l = r.concat(o);
      a.children &&
        a.children.length > 0 &&
        (De(
          a.index !== !0,
          'Index routes must not have child routes. Please remove ' +
            ('all child routes from route path "' + s + '".')
        ),
        ob(a.children, t, l, s)),
        !(a.path == null && !a.index) &&
          t.push({ path: s, score: bO(s, a.index), routesMeta: l });
    }),
    t
  );
}
function dO(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : xO(
          t.routesMeta.map((n) => n.childrenIndex),
          r.routesMeta.map((n) => n.childrenIndex)
        )
  );
}
const pO = /^:\w+$/,
  hO = 3,
  vO = 2,
  mO = 1,
  gO = 10,
  yO = -2,
  Yp = (e) => e === '*';
function bO(e, t) {
  let r = e.split('/'),
    n = r.length;
  return (
    r.some(Yp) && (n += yO),
    t && (n += vO),
    r
      .filter((a) => !Yp(a))
      .reduce((a, i) => a + (pO.test(i) ? hO : i === '' ? mO : gO), n)
  );
}
function xO(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, a) => n === t[a])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function wO(e, t) {
  let { routesMeta: r } = e,
    n = {},
    a = '/',
    i = [];
  for (let o = 0; o < r.length; ++o) {
    let s = r[o],
      l = o === r.length - 1,
      c = a === '/' ? t : t.slice(a.length) || '/',
      u = Jf(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: l },
        c
      );
    if (!u) return null;
    Object.assign(n, u.params);
    let f = s.route;
    i.push({
      params: n,
      pathname: ln([a, u.pathname]),
      pathnameBase: $O(ln([a, u.pathnameBase])),
      route: f,
    }),
      u.pathnameBase !== '/' && (a = ln([a, u.pathnameBase]));
  }
  return i;
}
function Jf(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, n] = _O(e.path, e.caseSensitive, e.end),
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
      return (c[u] = OO(s[f] || '', u)), c;
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function _O(e, t, r) {
  t === void 0 && (t = !1),
    r === void 0 && (r = !0),
    lb(
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
function OO(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (r) {
    return (
      lb(
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
function sb(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r = t.endsWith('/') ? t.length - 1 : t.length,
    n = e.charAt(r);
  return n && n !== '/' ? null : e.slice(r) || '/';
}
function De(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function lb(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function SO(e, t) {
  t === void 0 && (t = '/');
  let {
    pathname: r,
    search: n = '',
    hash: a = '',
  } = typeof e == 'string' ? Xr(e) : e;
  return {
    pathname: r ? (r.startsWith('/') ? r : EO(r, t)) : t,
    search: AO(n),
    hash: CO(a),
  };
}
function EO(e, t) {
  let r = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((a) => {
      a === '..' ? r.length > 1 && r.pop() : a !== '.' && r.push(a);
    }),
    r.length > 1 ? r.join('/') : '/'
  );
}
function cb(e, t, r, n) {
  n === void 0 && (n = !1);
  let a = typeof e == 'string' ? Xr(e) : ct({}, e),
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
  let l = SO(a, s),
    c = o && o !== '/' && o.endsWith('/'),
    u = (i || o === '.') && r.endsWith('/');
  return !l.pathname.endsWith('/') && (c || u) && (l.pathname += '/'), l;
}
const ln = (e) => e.join('/').replace(/\/\/+/g, '/'),
  $O = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  AO = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  CO = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
class Kp extends Error {}
class PO {
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
    let n = () => r(new Kp('Deferred data aborted'));
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
    if (this.controller.signal.aborted && n instanceof Kp)
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
        return Object.assign(t, { [n]: TO(a) });
      }, {})
    );
  }
}
function kO(e) {
  return e instanceof Promise && e._tracked === !0;
}
function TO(e) {
  if (!kO(e)) return e;
  if (e._error) throw e._error;
  return e._data;
}
class ka {
  constructor(t, r, n) {
    (this.status = t), (this.statusText = r || ''), (this.data = n);
  }
}
function ub(e) {
  return e instanceof ka;
}
const Ql = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  },
  MO = {
    state: 'idle',
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  };
function IO(e) {
  De(
    e.routes.length > 0,
    'You must provide a non-empty routes array to createRouter'
  );
  let t = ib(e.routes),
    r = null,
    n = new Set(),
    a = null,
    i = null,
    o = null,
    s = !1,
    l = si(t, e.history.location, e.basename),
    c = null;
  if (l == null) {
    let { matches: B, route: V, error: q } = eh(t);
    (l = B), (c = { [V.id]: q });
  }
  let u = !l.some((B) => B.route.loader) || e.hydrationData != null,
    f,
    d = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: l,
      initialized: u,
      navigation: Ql,
      restoreScrollPosition: null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || c,
      fetchers: new Map(),
    },
    h = vt.Pop,
    v = !1,
    p,
    m = !1,
    y = !1,
    _ = [],
    x = [],
    b = new Map(),
    w = 0,
    O = -1,
    E = new Map(),
    $ = new Set(),
    A = new Map(),
    P = new Map();
  function C() {
    return (
      (r = e.history.listen((B) => {
        let { action: V, location: q } = B;
        return F(V, q);
      })),
      d.initialized || F(vt.Pop, d.location),
      f
    );
  }
  function T() {
    r && r(), n.clear(), p && p.abort(), d.fetchers.forEach((B, V) => U(V));
  }
  function k(B) {
    return n.add(B), () => n.delete(B);
  }
  function D(B) {
    (d = ct({}, d, B)), n.forEach((V) => V(d));
  }
  function j(B, V) {
    let q =
        d.actionData != null &&
        d.navigation.formMethod != null &&
        d.navigation.state === 'loading',
      te = V.loaderData
        ? { loaderData: tc(d.loaderData, V.loaderData, V.matches || []) }
        : {};
    D(
      ct({}, q ? {} : { actionData: null }, V, te, {
        historyAction: h,
        location: B,
        initialized: !0,
        navigation: Ql,
        revalidation: 'idle',
        restoreScrollPosition: d.navigation.formData
          ? !1
          : ot(B, V.matches || d.matches),
        preventScrollReset: v,
      })
    ),
      m ||
        h === vt.Pop ||
        (h === vt.Push
          ? e.history.push(B, B.state)
          : h === vt.Replace && e.history.replace(B, B.state)),
      (h = vt.Pop),
      (v = !1),
      (m = !1),
      (y = !1),
      (_ = []),
      (x = []);
  }
  async function R(B, V) {
    if (typeof B == 'number') {
      e.history.go(B);
      return;
    }
    let { path: q, submission: te, error: se } = Xp(B, V),
      Ae = kn(d.location, q, V && V.state),
      we = (V && V.replace) === !0 || te != null ? vt.Replace : vt.Push,
      me =
        V && 'preventScrollReset' in V ? V.preventScrollReset === !0 : void 0;
    return await F(we, Ae, {
      submission: te,
      pendingError: se,
      preventScrollReset: me,
      replace: V && V.replace,
    });
  }
  function N() {
    if (
      (it(),
      D({ revalidation: 'loading' }),
      d.navigation.state !== 'submitting')
    ) {
      if (d.navigation.state === 'idle') {
        F(d.historyAction, d.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      F(h || d.historyAction, d.navigation.location, {
        overrideNavigation: d.navigation,
      });
    }
  }
  async function F(B, V, q) {
    p && p.abort(),
      (p = null),
      (h = B),
      (m = (q && q.startUninterruptedRevalidation) === !0),
      Pe(d.location, d.matches),
      (v = (q && q.preventScrollReset) === !0);
    let te = q && q.overrideNavigation,
      se = si(t, V, e.basename);
    if (!se) {
      let { matches: Tt, route: Gt, error: pt } = eh(t);
      de(), j(V, { matches: Tt, loaderData: {}, errors: { [Gt.id]: pt } });
      return;
    }
    if (NO(d.location, V)) {
      j(V, { matches: se });
      return;
    }
    p = new AbortController();
    let Ae = Ha(V, p.signal, q && q.submission),
      we,
      me;
    if (q && q.pendingError) me = { [ta(se).route.id]: q.pendingError };
    else if (q && q.submission) {
      let Tt = await M(Ae, V, q.submission, se, { replace: q.replace });
      if (Tt.shortCircuited) return;
      (we = Tt.pendingActionData),
        (me = Tt.pendingActionError),
        (te = ct({ state: 'loading', location: V }, q.submission));
    }
    let {
      shortCircuited: fe,
      loaderData: xe,
      errors: He,
    } = await Y(Ae, V, se, te, q && q.submission, q && q.replace, we, me);
    fe || ((p = null), j(V, { matches: se, loaderData: xe, errors: He }));
  }
  async function M(B, V, q, te, se) {
    it();
    let Ae = ct({ state: 'submitting', location: V }, q);
    D({ navigation: Ae });
    let we,
      me = ih(te, V);
    if (!me.route.action) we = th(V);
    else if (((we = await Ua('action', B, me)), B.signal.aborted))
      return { shortCircuited: !0 };
    if (la(we)) {
      let fe = ct(
        { state: 'loading', location: kn(d.location, we.location) },
        q
      );
      return await le(we, fe, se && se.replace), { shortCircuited: !0 };
    }
    if (fi(we)) {
      let fe = ta(te, me.route.id);
      return (
        (se && se.replace) !== !0 && (h = vt.Push),
        { pendingActionError: { [fe.route.id]: we.error } }
      );
    }
    if (An(we)) throw new Error('defer() is not supported in actions');
    return { pendingActionData: { [me.route.id]: we.data } };
  }
  async function Y(B, V, q, te, se, Ae, we, me) {
    let fe = te;
    fe ||
      (fe = {
        state: 'loading',
        location: V,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
      });
    let [xe, He] = Jp(d, q, se, V, y, _, x, we, me, A);
    if (
      (de(
        (Qe) =>
          !(q && q.some((Ye) => Ye.route.id === Qe)) ||
          (xe && xe.some((Ye) => Ye.route.id === Qe))
      ),
      xe.length === 0 && He.length === 0)
    )
      return (
        j(V, {
          matches: q,
          loaderData: tc(d.loaderData, {}, q),
          errors: me || null,
          actionData: we || null,
        }),
        { shortCircuited: !0 }
      );
    m ||
      (He.forEach((Qe) => {
        let [Ye] = Qe;
        const At = d.fetchers.get(Ye);
        let Lt = {
          state: 'loading',
          data: At && At.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        };
        d.fetchers.set(Ye, Lt);
      }),
      D(
        ct(
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
      results: Tt,
      loaderResults: Gt,
      fetcherResults: pt,
    } = await Ee(d.matches, xe, He, B);
    if (B.signal.aborted) return { shortCircuited: !0 };
    He.forEach((Qe) => {
      let [Ye] = Qe;
      return b.delete(Ye);
    });
    let gt = rh(Tt);
    if (gt) {
      let Qe = ec(d, gt);
      return await le(gt, Qe, Ae), { shortCircuited: !0 };
    }
    let { loaderData: $r, errors: qt } = Qp(d, q, xe, Gt, me, He, pt, P);
    P.forEach((Qe, Ye) => {
      Qe.subscribe((At) => {
        (At || Qe.done) && P.delete(Ye);
      });
    }),
      L();
    let Yt = J(O);
    return ct(
      { loaderData: $r, errors: qt },
      Yt || He.length > 0 ? { fetchers: new Map(d.fetchers) } : {}
    );
  }
  function Q(B) {
    return d.fetchers.get(B) || MO;
  }
  function ne(B, V, q, te) {
    if (typeof AbortController > 'u')
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    b.has(B) && ee(B);
    let se = si(t, q, e.basename);
    if (!se) {
      oe(B, V, new ka(404, 'Not Found', null));
      return;
    }
    let { path: Ae, submission: we } = Xp(q, te, !0),
      me = ih(se, Ae);
    if (we) {
      ve(B, V, Ae, me, we);
      return;
    }
    A.set(B, [Ae, me]), Se(B, V, Ae, me);
  }
  async function ve(B, V, q, te, se) {
    if ((it(), A.delete(B), !te.route.action)) {
      let { error: Ft } = th(q);
      oe(B, V, Ft);
      return;
    }
    let Ae = d.fetchers.get(B),
      we = ct({ state: 'submitting' }, se, { data: Ae && Ae.data });
    d.fetchers.set(B, we), D({ fetchers: new Map(d.fetchers) });
    let me = new AbortController(),
      fe = Ha(q, me.signal, se);
    b.set(B, me);
    let xe = await Ua('action', fe, te);
    if (fe.signal.aborted) {
      b.get(B) === me && b.delete(B);
      return;
    }
    if (la(xe)) {
      b.delete(B), $.add(B);
      let Ft = ct({ state: 'loading' }, se, { data: void 0 });
      d.fetchers.set(B, Ft), D({ fetchers: new Map(d.fetchers) });
      let Kt = ct(
        { state: 'loading', location: kn(d.location, xe.location) },
        se
      );
      await le(xe, Kt);
      return;
    }
    if (fi(xe)) {
      oe(B, V, xe.error);
      return;
    }
    An(xe) && De(!1, 'defer() is not supported in actions');
    let He = d.navigation.location || d.location,
      Tt = Ha(He, me.signal),
      Gt =
        d.navigation.state !== 'idle'
          ? si(t, d.navigation.location, e.basename)
          : d.matches;
    De(Gt, "Didn't find any matches after fetcher action");
    let pt = ++w;
    E.set(B, pt);
    let gt = ct({ state: 'loading', data: xe.data }, se);
    d.fetchers.set(B, gt);
    let [$r, qt] = Jp(
      d,
      Gt,
      se,
      He,
      y,
      _,
      x,
      { [te.route.id]: xe.data },
      void 0,
      A
    );
    qt
      .filter((Ft) => {
        let [Kt] = Ft;
        return Kt !== B;
      })
      .forEach((Ft) => {
        let [Kt] = Ft,
          qn = d.fetchers.get(Kt),
          Wa = {
            state: 'loading',
            data: qn && qn.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
          };
        d.fetchers.set(Kt, Wa), b.set(Kt, me);
      }),
      D({ fetchers: new Map(d.fetchers) });
    let {
      results: Yt,
      loaderResults: Qe,
      fetcherResults: Ye,
    } = await Ee(d.matches, $r, qt, Tt);
    if (me.signal.aborted) return;
    E.delete(B),
      b.delete(B),
      qt.forEach((Ft) => {
        let [Kt] = Ft;
        return b.delete(Kt);
      });
    let At = rh(Yt);
    if (At) {
      let Ft = ec(d, At);
      await le(At, Ft);
      return;
    }
    let { loaderData: Lt, errors: yt } = Qp(
        d,
        d.matches,
        $r,
        Qe,
        void 0,
        qt,
        Ye,
        P
      ),
      st = {
        state: 'idle',
        data: xe.data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
      };
    d.fetchers.set(B, st);
    let Bt = J(pt);
    d.navigation.state === 'loading' && pt > O
      ? (De(h, 'Expected pending action'),
        p && p.abort(),
        j(d.navigation.location, {
          matches: Gt,
          loaderData: Lt,
          errors: yt,
          fetchers: new Map(d.fetchers),
        }))
      : (D(
          ct(
            { errors: yt, loaderData: tc(d.loaderData, Lt, Gt) },
            Bt ? { fetchers: new Map(d.fetchers) } : {}
          )
        ),
        (y = !1));
  }
  async function Se(B, V, q, te) {
    let se = d.fetchers.get(B),
      Ae = {
        state: 'loading',
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        data: se && se.data,
      };
    d.fetchers.set(B, Ae), D({ fetchers: new Map(d.fetchers) });
    let we = new AbortController(),
      me = Ha(q, we.signal);
    b.set(B, we);
    let fe = await Ua('loader', me, te);
    if (
      (An(fe) && (fe = (await pb(fe, me.signal, !0)) || fe),
      b.get(B) === we && b.delete(B),
      me.signal.aborted)
    )
      return;
    if (la(fe)) {
      let He = ec(d, fe);
      await le(fe, He);
      return;
    }
    if (fi(fe)) {
      let He = ta(d.matches, V);
      d.fetchers.delete(B),
        D({
          fetchers: new Map(d.fetchers),
          errors: { [He.route.id]: fe.error },
        });
      return;
    }
    De(!An(fe), 'Unhandled fetcher deferred data');
    let xe = {
      state: 'idle',
      data: fe.data,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
    };
    d.fetchers.set(B, xe), D({ fetchers: new Map(d.fetchers) });
  }
  async function le(B, V, q) {
    B.revalidate && (y = !0),
      De(V.location, 'Expected a location on the redirect navigation'),
      (p = null);
    let te = q === !0 ? vt.Replace : vt.Push;
    await F(te, V.location, { overrideNavigation: V });
  }
  async function Ee(B, V, q, te) {
    let se = await Promise.all([
        ...V.map((me) => Ua('loader', te, me)),
        ...q.map((me) => {
          let [, fe, xe] = me;
          return Ua('loader', Ha(fe, te.signal), xe);
        }),
      ]),
      Ae = se.slice(0, V.length),
      we = se.slice(V.length);
    return (
      await Promise.all([
        nh(B, V, Ae, te.signal, !1, d.loaderData),
        nh(
          B,
          q.map((me) => {
            let [, , fe] = me;
            return fe;
          }),
          we,
          te.signal,
          !0
        ),
      ]),
      { results: se, loaderResults: Ae, fetcherResults: we }
    );
  }
  function it() {
    (y = !0),
      _.push(...de()),
      A.forEach((B, V) => {
        b.has(V) && (x.push(V), ee(V));
      });
  }
  function oe(B, V, q) {
    let te = ta(d.matches, V);
    U(B), D({ errors: { [te.route.id]: q }, fetchers: new Map(d.fetchers) });
  }
  function U(B) {
    b.has(B) && ee(B),
      A.delete(B),
      E.delete(B),
      $.delete(B),
      d.fetchers.delete(B);
  }
  function ee(B) {
    let V = b.get(B);
    De(V, 'Expected fetch controller: ' + B), V.abort(), b.delete(B);
  }
  function ie(B) {
    for (let V of B) {
      let q = Q(V),
        te = {
          state: 'idle',
          data: q.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        };
      d.fetchers.set(V, te);
    }
  }
  function L() {
    let B = [];
    for (let V of $) {
      let q = d.fetchers.get(V);
      De(q, 'Expected fetcher: ' + V),
        q.state === 'loading' && ($.delete(V), B.push(V));
    }
    ie(B);
  }
  function J(B) {
    let V = [];
    for (let [q, te] of E)
      if (te < B) {
        let se = d.fetchers.get(q);
        De(se, 'Expected fetcher: ' + q),
          se.state === 'loading' && (ee(q), E.delete(q), V.push(q));
      }
    return ie(V), V.length > 0;
  }
  function de(B) {
    let V = [];
    return (
      P.forEach((q, te) => {
        (!B || B(te)) && (q.cancel(), V.push(te), P.delete(te));
      }),
      V
    );
  }
  function ce(B, V, q) {
    if (
      ((a = B), (o = V), (i = q || ((te) => te.key)), !s && d.navigation === Ql)
    ) {
      s = !0;
      let te = ot(d.location, d.matches);
      te != null && D({ restoreScrollPosition: te });
    }
    return () => {
      (a = null), (o = null), (i = null);
    };
  }
  function Pe(B, V) {
    if (a && i && o) {
      let q = V.map((se) => ah(se, d.loaderData)),
        te = i(B, q) || B.key;
      a[te] = o();
    }
  }
  function ot(B, V) {
    if (a && i && o) {
      let q = V.map((Ae) => ah(Ae, d.loaderData)),
        te = i(B, q) || B.key,
        se = a[te];
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
      subscribe: k,
      enableScrollRestoration: ce,
      navigate: R,
      fetch: ne,
      revalidate: N,
      createHref: nl,
      getFetcher: Q,
      deleteFetcher: U,
      dispose: T,
      _internalFetchControllers: b,
      _internalActiveDeferreds: P,
    }),
    f
  );
}
function Xp(e, t, r) {
  r === void 0 && (r = !1);
  let n = typeof e == 'string' ? e : _i(e);
  if (!t || (!('formMethod' in t) && !('formData' in t))) return { path: n };
  if (t.formMethod != null && t.formMethod !== 'get')
    return {
      path: n,
      submission: {
        formMethod: t.formMethod,
        formAction: nl(Xr(n)),
        formEncType:
          (t && t.formEncType) || 'application/x-www-form-urlencoded',
        formData: t.formData,
      },
    };
  if (!t.formData) return { path: n };
  let a = Xr(n);
  try {
    let i = db(t.formData);
    r && a.search && hb(a.search) && i.append('index', ''),
      (a.search = '?' + i);
  } catch {
    return {
      path: n,
      error: new ka(
        400,
        'Bad Request',
        'Cannot submit binary form data using GET'
      ),
    };
  }
  return { path: _i(a) };
}
function ec(e, t) {
  let {
    formMethod: r,
    formAction: n,
    formEncType: a,
    formData: i,
  } = e.navigation;
  return {
    state: 'loading',
    location: kn(e.location, t.location),
    formMethod: r || void 0,
    formAction: n || void 0,
    formEncType: a || void 0,
    formData: i || void 0,
  };
}
function RO(e, t) {
  let r = e;
  if (t) {
    let n = e.findIndex((a) => a.route.id === t);
    n >= 0 && (r = e.slice(0, n));
  }
  return r;
}
function Jp(e, t, r, n, a, i, o, s, l, c) {
  let u = l ? Object.values(l)[0] : s ? Object.values(s)[0] : null,
    f = l ? Object.keys(l)[0] : void 0,
    h = RO(t, f).filter(
      (p, m) =>
        p.route.loader != null &&
        (DO(e.loaderData, e.matches[m], p) ||
          i.some((y) => y === p.route.id) ||
          Zp(e.location, e.matches[m], r, n, p, a, u))
    ),
    v = [];
  return (
    c &&
      c.forEach((p, m) => {
        let [y, _] = p;
        o.includes(m)
          ? v.push([m, y, _])
          : a && Zp(y, _, r, y, _, a, u) && v.push([m, y, _]);
      }),
    [h, v]
  );
}
function DO(e, t, r) {
  let n = !t || r.route.id !== t.route.id,
    a = e[r.route.id] === void 0;
  return n || a;
}
function fb(e, t) {
  let r = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (r && r.endsWith('*') && e.params['*'] !== t.params['*'])
  );
}
function Zp(e, t, r, n, a, i, o) {
  let s = Zc(e),
    l = t.params,
    c = Zc(n),
    u = a.params,
    f = fb(t, a) || s.toString() === c.toString() || s.search !== c.search || i;
  if (a.route.shouldRevalidate) {
    let d = a.route.shouldRevalidate(
      ct({ currentUrl: s, currentParams: l, nextUrl: c, nextParams: u }, r, {
        actionResult: o,
        defaultShouldRevalidate: f,
      })
    );
    if (typeof d == 'boolean') return d;
  }
  return f;
}
async function Ua(e, t, r, n, a) {
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
    (i = Rt.error), (o = u);
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
        type: Rt.redirect,
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
      i === Rt.error
        ? { type: i, error: new ka(u, o.statusText, d), headers: o.headers }
        : { type: Rt.data, data: d, statusCode: o.status, headers: o.headers }
    );
  }
  return i === Rt.error
    ? { type: i, error: o }
    : o instanceof PO
    ? { type: Rt.deferred, deferredData: o }
    : { type: Rt.data, data: o };
}
function Ha(e, t, r) {
  let n = Zc(e).toString(),
    a = { signal: t };
  if (r) {
    let { formMethod: i, formEncType: o, formData: s } = r;
    (a.method = i.toUpperCase()),
      (a.body = o === 'application/x-www-form-urlencoded' ? db(s) : s);
  }
  return new Request(n, a);
}
function db(e) {
  let t = new URLSearchParams();
  for (let [r, n] of e.entries())
    De(
      typeof n == 'string',
      'File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.'
    ),
      t.append(r, n);
  return t;
}
function jO(e, t, r, n, a) {
  let i = {},
    o = null,
    s,
    l = !1,
    c = {};
  return (
    r.forEach((u, f) => {
      let d = t[f].route.id;
      if (
        (De(!la(u), 'Cannot handle redirect results in processLoaderData'),
        fi(u))
      ) {
        let h = ta(e, d),
          v = u.error;
        n && ((v = Object.values(n)[0]), (n = void 0)),
          (o = Object.assign(o || {}, { [h.route.id]: v })),
          l || ((l = !0), (s = ub(u.error) ? u.error.status : 500)),
          u.headers && (c[d] = u.headers);
      } else
        An(u)
          ? (a && a.set(d, u.deferredData), (i[d] = u.deferredData.data))
          : ((i[d] = u.data),
            u.statusCode !== 200 && !l && (s = u.statusCode),
            u.headers && (c[d] = u.headers));
    }),
    n && (o = n),
    { loaderData: i, errors: o, statusCode: s || 200, loaderHeaders: c }
  );
}
function Qp(e, t, r, n, a, i, o, s) {
  let { loaderData: l, errors: c } = jO(t, r, n, a, s);
  for (let u = 0; u < i.length; u++) {
    let [f, , d] = i[u];
    De(
      o !== void 0 && o[u] !== void 0,
      'Did not find corresponding fetcher result'
    );
    let h = o[u];
    if (fi(h)) {
      let v = ta(e.matches, d.route.id);
      (c && c[v.route.id]) || (c = ct({}, c, { [v.route.id]: h.error })),
        e.fetchers.delete(f);
    } else {
      if (la(h)) throw new Error('Unhandled fetcher revalidation redirect');
      if (An(h)) throw new Error('Unhandled fetcher deferred data');
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
function tc(e, t, r) {
  let n = ct({}, t);
  return (
    r.forEach((a) => {
      let i = a.route.id;
      t[i] === void 0 && e[i] !== void 0 && (n[i] = e[i]);
    }),
    n
  );
}
function ta(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((n) => n.route.id === t) + 1) : [...e])
      .reverse()
      .find((n) => n.route.hasErrorBoundary === !0) || e[0]
  );
}
function eh(e) {
  let t = e.find((r) => r.index || r.path === '' || r.path === '/') || {
    id: '__shim-404-route__',
  };
  return {
    matches: [{ params: {}, pathname: '', pathnameBase: '', route: t }],
    route: t,
    error: new ka(404, 'Not Found', null),
  };
}
function th(e) {
  let t = typeof e == 'string' ? e : nl(e);
  return (
    console.warn(
      "You're trying to submit to a route that does not have an action.  To fix this, please add an `action` function to the route for " +
        ('[' + t + ']')
    ),
    {
      type: Rt.error,
      error: new ka(
        405,
        'Method Not Allowed',
        'No action found for [' + t + ']'
      ),
    }
  );
}
function rh(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let r = e[t];
    if (la(r)) return r;
  }
}
function nl(e) {
  return (e.pathname || '') + (e.search || '');
}
function NO(e, t) {
  return (
    e.pathname === t.pathname && e.search === t.search && e.hash !== t.hash
  );
}
function An(e) {
  return e.type === Rt.deferred;
}
function fi(e) {
  return e.type === Rt.error;
}
function la(e) {
  return (e && e.type) === Rt.redirect;
}
async function nh(e, t, r, n, a, i) {
  for (let o = 0; o < r.length; o++) {
    let s = r[o],
      l = t[o],
      c = e.find((f) => f.route.id === l.route.id),
      u = c != null && !fb(c, l) && (i && i[l.route.id]) !== void 0;
    An(s) &&
      (a || u) &&
      (await pb(s, n, a).then((f) => {
        f && (r[o] = f || r[o]);
      }));
  }
}
async function pb(e, t, r) {
  if ((r === void 0 && (r = !1), !(await e.deferredData.resolveData(t)))) {
    if (r)
      try {
        return { type: Rt.data, data: e.deferredData.unwrappedData };
      } catch (a) {
        return { type: Rt.error, error: a };
      }
    return { type: Rt.data, data: e.deferredData.data };
  }
}
function hb(e) {
  return new URLSearchParams(e).getAll('index').some((t) => t === '');
}
function ah(e, t) {
  let { route: r, pathname: n, params: a } = e;
  return { id: r.id, pathname: n, params: a, data: t[r.id], handle: r.handle };
}
function ih(e, t) {
  let r = typeof t == 'string' ? Xr(t).search : t.search;
  return e[e.length - 1].route.index && !hb(r || '')
    ? e.slice(-2)[0]
    : e.slice(-1)[0];
}
function Zc(e) {
  let t =
      typeof window < 'u' && typeof window.location < 'u'
        ? window.location.origin
        : 'unknown://unknown',
    r = typeof e == 'string' ? e : nl(e);
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
function LO(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const BO = typeof Object.is == 'function' ? Object.is : LO,
  { useState: FO, useEffect: zO, useLayoutEffect: WO, useDebugValue: UO } = Wc;
function HO(e, t, r) {
  const n = t(),
    [{ inst: a }, i] = FO({ inst: { value: n, getSnapshot: t } });
  return (
    WO(() => {
      (a.value = n), (a.getSnapshot = t), rc(a) && i({ inst: a });
    }, [e, n, t]),
    zO(
      () => (
        rc(a) && i({ inst: a }),
        e(() => {
          rc(a) && i({ inst: a });
        })
      ),
      [e]
    ),
    UO(n),
    n
  );
}
function rc(e) {
  const t = e.getSnapshot,
    r = e.value;
  try {
    const n = t();
    return !BO(r, n);
  } catch {
    return !0;
  }
}
function VO(e, t, r) {
  return t();
}
const GO =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  qO = !GO,
  YO = qO ? VO : HO,
  KO = 'useSyncExternalStore' in Wc ? ((e) => e.useSyncExternalStore)(Wc) : YO,
  XO = S.exports.createContext(null),
  vb = S.exports.createContext(null),
  al = S.exports.createContext(null),
  Zf = S.exports.createContext(null),
  il = S.exports.createContext(null),
  Un = S.exports.createContext({ outlet: null, matches: [] }),
  mb = S.exports.createContext(null);
function JO(e, t) {
  let { relative: r } = t === void 0 ? {} : t;
  Ta() || De(!1);
  let { basename: n, navigator: a } = S.exports.useContext(Zf),
    { hash: i, pathname: o, search: s } = qo(e, { relative: r }),
    l = o;
  return (
    n !== '/' && (l = o === '/' ? n : ln([n, o])),
    a.createHref({ pathname: l, search: s, hash: i })
  );
}
function Ta() {
  return S.exports.useContext(il) != null;
}
function Ni() {
  return Ta() || De(!1), S.exports.useContext(il).location;
}
function ZO(e) {
  Ta() || De(!1);
  let { pathname: t } = Ni();
  return S.exports.useMemo(() => Jf(e, t), [t, e]);
}
function gb(e) {
  return e.filter(
    (t, r) =>
      r === 0 || (!t.route.index && t.pathnameBase !== e[r - 1].pathnameBase)
  );
}
function yb() {
  Ta() || De(!1);
  let { basename: e, navigator: t } = S.exports.useContext(Zf),
    { matches: r } = S.exports.useContext(Un),
    { pathname: n } = Ni(),
    a = JSON.stringify(gb(r).map((s) => s.pathnameBase)),
    i = S.exports.useRef(!1);
  return (
    S.exports.useEffect(() => {
      i.current = !0;
    }),
    S.exports.useCallback(
      function (s, l) {
        if ((l === void 0 && (l = {}), !i.current)) return;
        if (typeof s == 'number') {
          t.go(s);
          return;
        }
        let c = cb(s, JSON.parse(a), n, l.relative === 'path');
        e !== '/' &&
          (c.pathname = c.pathname === '/' ? e : ln([e, c.pathname])),
          (l.replace ? t.replace : t.push)(c, l.state, l);
      },
      [e, t, a, n]
    )
  );
}
const QO = S.exports.createContext(null);
function eS(e) {
  let t = S.exports.useContext(Un).outlet;
  return t && S.exports.createElement(QO.Provider, { value: e }, t);
}
function Sr() {
  let { matches: e } = S.exports.useContext(Un),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function qo(e, t) {
  let { relative: r } = t === void 0 ? {} : t,
    { matches: n } = S.exports.useContext(Un),
    { pathname: a } = Ni(),
    i = JSON.stringify(gb(n).map((o) => o.pathnameBase));
  return S.exports.useMemo(
    () => cb(e, JSON.parse(i), a, r === 'path'),
    [e, i, a, r]
  );
}
function tS(e, t) {
  Ta() || De(!1);
  let r = S.exports.useContext(al),
    { matches: n } = S.exports.useContext(Un),
    a = n[n.length - 1],
    i = a ? a.params : {};
  a && a.pathname;
  let o = a ? a.pathnameBase : '/';
  a && a.route;
  let s = Ni(),
    l;
  if (t) {
    var c;
    let v = typeof t == 'string' ? Xr(t) : t;
    o === '/' ||
      ((c = v.pathname) == null ? void 0 : c.startsWith(o)) ||
      De(!1),
      (l = v);
  } else l = s;
  let u = l.pathname || '/',
    f = o === '/' ? u : u.slice(o.length) || '/',
    d = si(e, { pathname: f }),
    h = iS(
      d &&
        d.map((v) =>
          Object.assign({}, v, {
            params: Object.assign({}, i, v.params),
            pathname: ln([o, v.pathname]),
            pathnameBase: v.pathnameBase === '/' ? o : ln([o, v.pathnameBase]),
          })
        ),
      n,
      r || void 0
    );
  return t
    ? S.exports.createElement(
        il.Provider,
        {
          value: {
            location: Go(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              l
            ),
            navigationType: vt.Pop,
          },
        },
        h
      )
    : h;
}
function rS() {
  let e = sS(),
    t = ub(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    r = e instanceof Error ? e.stack : null,
    n = 'rgba(200,200,200, 0.5)',
    a = { padding: '0.5rem', backgroundColor: n },
    i = { padding: '2px 4px', backgroundColor: n };
  return S.exports.createElement(
    S.exports.Fragment,
    null,
    S.exports.createElement('h2', null, 'Unhandled Thrown Error!'),
    S.exports.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    r ? S.exports.createElement('pre', { style: a }, r) : null,
    S.exports.createElement('p', null, '\u{1F4BF} Hey developer \u{1F44B}'),
    S.exports.createElement(
      'p',
      null,
      'You can provide a way better UX than this when your app throws errors by providing your own\xA0',
      S.exports.createElement('code', { style: i }, 'errorElement'),
      ' props on\xA0',
      S.exports.createElement('code', { style: i }, '<Route>')
    )
  );
}
class nS extends S.exports.Component {
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
      ? S.exports.createElement(mb.Provider, {
          value: this.state.error,
          children: this.props.component,
        })
      : this.props.children;
  }
}
function aS(e) {
  let { routeContext: t, match: r, children: n } = e,
    a = S.exports.useContext(XO);
  return (
    a && r.route.errorElement && (a._deepestRenderedBoundaryId = r.route.id),
    S.exports.createElement(Un.Provider, { value: t }, n)
  );
}
function iS(e, t, r) {
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
      c = r ? o.route.errorElement || S.exports.createElement(rS, null) : null,
      u = () =>
        S.exports.createElement(
          aS,
          {
            match: o,
            routeContext: { outlet: i, matches: t.concat(n.slice(0, s + 1)) },
          },
          l ? c : o.route.element !== void 0 ? o.route.element : i
        );
    return r && (o.route.errorElement || s === 0)
      ? S.exports.createElement(nS, {
          location: r.location,
          component: c,
          error: l,
          children: u(),
        })
      : u();
  }, null);
}
var Qc;
(function (e) {
  (e.UseLoaderData = 'useLoaderData'),
    (e.UseActionData = 'useActionData'),
    (e.UseRouteError = 'useRouteError'),
    (e.UseNavigation = 'useNavigation'),
    (e.UseRouteLoaderData = 'useRouteLoaderData'),
    (e.UseMatches = 'useMatches'),
    (e.UseRevalidator = 'useRevalidator');
})(Qc || (Qc = {}));
function oS(e) {
  let t = S.exports.useContext(al);
  return t || De(!1), t;
}
function sS() {
  var e;
  let t = S.exports.useContext(mb),
    r = oS(Qc.UseRouteError),
    n = S.exports.useContext(Un),
    a = n.matches[n.matches.length - 1];
  return (
    t ||
    (n || De(!1),
    a.route.id || De(!1),
    (e = r.errors) == null ? void 0 : e[a.route.id])
  );
}
function lS(e) {
  let { fallbackElement: t, router: r } = e,
    n = KO(
      r.subscribe,
      () => r.state,
      () => r.state
    ),
    a = S.exports.useMemo(
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
  return S.exports.createElement(
    vb.Provider,
    { value: { router: r, navigator: a, static: !1, basename: i } },
    S.exports.createElement(
      al.Provider,
      { value: n },
      S.exports.createElement(
        uS,
        {
          basename: r.basename,
          location: r.state.location,
          navigationType: r.state.historyAction,
          navigator: a,
        },
        r.state.initialized ? S.exports.createElement(fS, null) : t
      )
    )
  );
}
function cS(e) {
  return eS(e.context);
}
function Wr(e) {
  De(!1);
}
function uS(e) {
  let {
    basename: t = '/',
    children: r = null,
    location: n,
    navigationType: a = vt.Pop,
    navigator: i,
    static: o = !1,
  } = e;
  Ta() && De(!1);
  let s = t.replace(/^\/*/, '/'),
    l = S.exports.useMemo(
      () => ({ basename: s, navigator: i, static: o }),
      [s, i, o]
    );
  typeof n == 'string' && (n = Xr(n));
  let {
      pathname: c = '/',
      search: u = '',
      hash: f = '',
      state: d = null,
      key: h = 'default',
    } = n,
    v = S.exports.useMemo(() => {
      let p = sb(c, s);
      return p == null
        ? null
        : { pathname: p, search: u, hash: f, state: d, key: h };
    }, [s, c, u, f, d, h]);
  return v == null
    ? null
    : S.exports.createElement(
        Zf.Provider,
        { value: l },
        S.exports.createElement(il.Provider, {
          children: r,
          value: { location: v, navigationType: a },
        })
      );
}
function fS(e) {
  let { children: t, location: r } = e,
    n = S.exports.useContext(vb),
    a = n && !t ? n.router.routes : Yo(t);
  return tS(a, r);
}
var oh;
(function (e) {
  (e[(e.pending = 0)] = 'pending'),
    (e[(e.success = 1)] = 'success'),
    (e[(e.error = 2)] = 'error');
})(oh || (oh = {}));
new Promise(() => {});
function Yo(e, t) {
  t === void 0 && (t = []);
  let r = [];
  return (
    S.exports.Children.forEach(e, (n, a) => {
      if (!S.exports.isValidElement(n)) return;
      if (n.type === S.exports.Fragment) {
        r.push.apply(r, Yo(n.props.children, t));
        return;
      }
      n.type !== Wr && De(!1);
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
      n.props.children && (o.children = Yo(n.props.children, i)), r.push(o);
    }),
    r
  );
}
function bb(e) {
  return e.map((t) => {
    let r = Go({}, t);
    return (
      r.hasErrorBoundary == null &&
        (r.hasErrorBoundary = r.errorElement != null),
      r.children && (r.children = bb(r.children)),
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
 */ function Ko() {
  return (
    (Ko = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Ko.apply(this, arguments)
  );
}
function xb(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    a,
    i;
  for (i = 0; i < n.length; i++)
    (a = n[i]), !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function dS(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function pS(e, t) {
  return e.button === 0 && (!t || t === '_self') && !dS(e);
}
const hS = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
  ],
  vS = [
    'aria-current',
    'caseSensitive',
    'className',
    'end',
    'style',
    'to',
    'children',
  ];
function mS(e, t) {
  var r;
  return IO({
    basename: t == null ? void 0 : t.basename,
    history: cO({ window: t == null ? void 0 : t.window }),
    hydrationData:
      (t == null ? void 0 : t.hydrationData) ||
      ((r = window) == null ? void 0 : r.__staticRouterHydrationData),
    routes: bb(e),
  }).initialize();
}
const Qf = S.exports.forwardRef(function (t, r) {
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
      f = xb(t, hS),
      d = JO(c, { relative: a }),
      h = gS(c, {
        replace: o,
        state: s,
        target: l,
        preventScrollReset: u,
        relative: a,
      });
    function v(p) {
      n && n(p), p.defaultPrevented || h(p);
    }
    return S.exports.createElement(
      'a',
      Ko({}, f, { href: d, onClick: i ? n : v, ref: r, target: l })
    );
  }),
  Yn = S.exports.forwardRef(function (t, r) {
    let {
        'aria-current': n = 'page',
        caseSensitive: a = !1,
        className: i = '',
        end: o = !1,
        style: s,
        to: l,
        children: c,
      } = t,
      u = xb(t, vS),
      f = qo(l),
      d = ZO({ path: f.pathname, end: o, caseSensitive: a }),
      h = S.exports.useContext(al),
      v = h == null ? void 0 : h.navigation.location,
      p = qo(v || ''),
      y =
        S.exports.useMemo(
          () =>
            v
              ? Jf({ path: f.pathname, end: o, caseSensitive: a }, p.pathname)
              : null,
          [v, f.pathname, a, o, p.pathname]
        ) != null,
      _ = d != null,
      x = _ ? n : void 0,
      b;
    typeof i == 'function'
      ? (b = i({ isActive: _, isPending: y }))
      : (b = [i, _ ? 'active' : null, y ? 'pending' : null]
          .filter(Boolean)
          .join(' '));
    let w = typeof s == 'function' ? s({ isActive: _, isPending: y }) : s;
    return S.exports.createElement(
      Qf,
      Ko({}, u, { 'aria-current': x, className: b, ref: r, style: w, to: l }),
      typeof c == 'function' ? c({ isActive: _, isPending: y }) : c
    );
  });
function gS(e, t) {
  let {
      target: r,
      replace: n,
      state: a,
      preventScrollReset: i,
      relative: o,
    } = t === void 0 ? {} : t,
    s = yb(),
    l = Ni(),
    c = qo(e, { relative: o });
  return S.exports.useCallback(
    (u) => {
      if (pS(u, r)) {
        u.preventDefault();
        let f = n !== void 0 ? n : _i(l) === _i(c);
        s(e, { replace: f, state: a, preventScrollReset: i, relative: o });
      }
    },
    [l, s, c, n, a, r, e, i, o]
  );
}
var _e = { exports: {} },
  yS = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  bS = yS,
  xS = bS;
function wb() {}
function _b() {}
_b.resetWarningCache = wb;
var wS = function () {
  function e(n, a, i, o, s, l) {
    if (l !== xS) {
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
    checkPropTypes: _b,
    resetWarningCache: wb,
  };
  return (r.PropTypes = r), r;
};
_e.exports = wS();
function _S(e, t) {
  return () => null;
}
function OS(e, t) {
  return () => null;
}
function SS(e, t, r, n, a) {
  return null;
}
const ES = ['className', 'component'];
function $S(e = {}) {
  const {
      defaultTheme: t,
      defaultClassName: r = 'MuiBox-root',
      generateClassName: n,
      styleFunctionSx: a = ow,
    } = e,
    i = iw('div', {
      shouldForwardProp: (s) => s !== 'theme' && s !== 'sx' && s !== 'as',
    })(a);
  return S.exports.forwardRef(function (l, c) {
    const u = sw(t),
      f = Nf(l),
      { className: d, component: h = 'div' } = f,
      v = $e(f, ES);
    return G.jsx(
      i,
      I({ as: h, ref: c, className: he(d, n ? n(r) : r), theme: u }, v)
    );
  });
}
const AS = lw(),
  CS = AS,
  PS = [
    'className',
    'component',
    'disableGutters',
    'fixed',
    'maxWidth',
    'classes',
  ],
  kS = cw(),
  TS = CS('div', {
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
  MS = (e) => uw({ props: e, name: 'MuiContainer', defaultTheme: kS }),
  IS = (e, t) => {
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
function RS(e = {}) {
  const {
      createStyledComponent: t = TS,
      useThemeProps: r = MS,
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
  return S.exports.forwardRef(function (s, l) {
    const c = r(s),
      {
        className: u,
        component: f = 'div',
        disableGutters: d = !1,
        fixed: h = !1,
        maxWidth: v = 'lg',
      } = c,
      p = $e(c, PS),
      m = I({}, c, { component: f, disableGutters: d, fixed: h, maxWidth: v }),
      y = IS(m, n);
    return G.jsx(
      a,
      I({ as: f, ownerState: m, className: he(y.root, u), ref: l }, p)
    );
  });
}
function sh(e) {
  return typeof e.normalize < 'u'
    ? e.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    : e;
}
function DS(e = {}) {
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
    r && (u = u.toLowerCase()), t && (u = sh(u));
    const f = s.filter((d) => {
      let h = (i || c)(d);
      return (
        r && (h = h.toLowerCase()),
        t && (h = sh(h)),
        a === 'start' ? h.indexOf(u) === 0 : h.indexOf(u) > -1
      );
    });
    return typeof n == 'number' ? f.slice(0, n) : f;
  };
}
function nc(e, t) {
  for (let r = 0; r < e.length; r += 1) if (t(e[r])) return r;
  return -1;
}
const jS = DS(),
  lh = 5;
function NS(e) {
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
      filterOptions: v = jS,
      filterSelectedOptions: p = !1,
      freeSolo: m = !1,
      getOptionDisabled: y,
      getOptionLabel: _ = (H) => {
        var z;
        return (z = H.label) != null ? z : H;
      },
      groupBy: x,
      handleHomeEndKeys: b = !e.freeSolo,
      id: w,
      includeInputInList: O = !1,
      inputValue: E,
      isOptionEqualToValue: $ = (H, z) => H === z,
      multiple: A = !1,
      onChange: P,
      onClose: C,
      onHighlightChange: T,
      onInputChange: k,
      onOpen: D,
      open: j,
      openOnFocus: R = !1,
      options: N,
      readOnly: F = !1,
      selectOnFocus: M = !e.freeSolo,
      value: Y,
    } = e,
    Q = Lf(w);
  let ne = _;
  ne = (H) => {
    const z = _(H);
    return typeof z != 'string' ? String(z) : z;
  };
  const ve = S.exports.useRef(!1),
    Se = S.exports.useRef(!0),
    le = S.exports.useRef(null),
    Ee = S.exports.useRef(null),
    [it, oe] = S.exports.useState(null),
    [U, ee] = S.exports.useState(-1),
    ie = r ? 0 : -1,
    L = S.exports.useRef(ie),
    [J, de] = bo({ controlled: Y, default: l, name: s }),
    [ce, Pe] = bo({ controlled: E, default: '', name: s, state: 'inputValue' }),
    [ot, B] = S.exports.useState(!1),
    V = S.exports.useCallback(
      (H, z) => {
        if (!(A ? J.length < z.length : z !== null) && !i) return;
        let Oe;
        if (A) Oe = '';
        else if (z == null) Oe = '';
        else {
          const Ke = ne(z);
          Oe = typeof Ke == 'string' ? Ke : '';
        }
        ce !== Oe && (Pe(Oe), k && k(H, Oe, 'reset'));
      },
      [ne, ce, A, k, Pe, i, J]
    ),
    q = S.exports.useRef();
  S.exports.useEffect(() => {
    const H = J !== q.current;
    (q.current = J), !(ot && !H) && ((m && !H) || V(null, J));
  }, [J, V, ot, q, m]);
  const [te, se] = bo({ controlled: j, default: !1, name: s, state: 'open' }),
    [Ae, we] = S.exports.useState(!0),
    me = !A && J != null && ce === ne(J),
    fe = te && !F,
    xe = fe
      ? v(
          N.filter(
            (H) => !(p && (A ? J : [J]).some((z) => z !== null && $(H, z)))
          ),
          { inputValue: me && Ae ? '' : ce, getOptionLabel: ne }
        )
      : [],
    He = te && xe.length > 0 && !F,
    Tt = ii((H) => {
      H === -1
        ? le.current.focus()
        : it.querySelector(`[data-tag-index="${H}"]`).focus();
    });
  S.exports.useEffect(() => {
    A && U > J.length - 1 && (ee(-1), Tt(-1));
  }, [J, A, U, Tt]);
  function Gt(H, z) {
    if (!Ee.current || H === -1) return -1;
    let ue = H;
    for (;;) {
      if ((z === 'next' && ue === xe.length) || (z === 'previous' && ue === -1))
        return -1;
      const Oe = Ee.current.querySelector(`[data-option-index="${ue}"]`),
        Ke = d
          ? !1
          : !Oe || Oe.disabled || Oe.getAttribute('aria-disabled') === 'true';
      if ((Oe && !Oe.hasAttribute('tabindex')) || Ke)
        ue += z === 'next' ? 1 : -1;
      else return ue;
    }
  }
  const pt = ii(({ event: H, index: z, reason: ue = 'auto' }) => {
      if (
        ((L.current = z),
        z === -1
          ? le.current.removeAttribute('aria-activedescendant')
          : le.current.setAttribute(
              'aria-activedescendant',
              `${Q}-option-${z}`
            ),
        T && T(H, z === -1 ? null : xe[z], ue),
        !Ee.current)
      )
        return;
      const Oe = Ee.current.querySelector('[role="option"].Mui-focused');
      Oe &&
        (Oe.classList.remove('Mui-focused'),
        Oe.classList.remove('Mui-focusVisible'));
      const Ke = Ee.current.parentElement.querySelector('[role="listbox"]');
      if (!Ke) return;
      if (z === -1) {
        Ke.scrollTop = 0;
        return;
      }
      const Ct = Ee.current.querySelector(`[data-option-index="${z}"]`);
      if (
        !!Ct &&
        (Ct.classList.add('Mui-focused'),
        ue === 'keyboard' && Ct.classList.add('Mui-focusVisible'),
        Ke.scrollHeight > Ke.clientHeight && ue !== 'mouse')
      ) {
        const ht = Ct,
          Ar = Ke.clientHeight + Ke.scrollTop,
          Cp = ht.offsetTop + ht.offsetHeight;
        Cp > Ar
          ? (Ke.scrollTop = Cp - Ke.clientHeight)
          : ht.offsetTop - ht.offsetHeight * (x ? 1.3 : 0) < Ke.scrollTop &&
            (Ke.scrollTop = ht.offsetTop - ht.offsetHeight * (x ? 1.3 : 0));
      }
    }),
    gt = ii(
      ({ event: H, diff: z, direction: ue = 'next', reason: Oe = 'auto' }) => {
        if (!fe) return;
        const Ct = Gt(
          (() => {
            const ht = xe.length - 1;
            if (z === 'reset') return ie;
            if (z === 'start') return 0;
            if (z === 'end') return ht;
            const Ar = L.current + z;
            return Ar < 0
              ? Ar === -1 && O
                ? -1
                : (h && L.current !== -1) || Math.abs(z) > 1
                ? 0
                : ht
              : Ar > ht
              ? Ar === ht + 1 && O
                ? -1
                : h || Math.abs(z) > 1
                ? ht
                : 0
              : Ar;
          })(),
          ue
        );
        if ((pt({ index: Ct, reason: Oe, event: H }), t && z !== 'reset'))
          if (Ct === -1) le.current.value = ce;
          else {
            const ht = ne(xe[Ct]);
            (le.current.value = ht),
              ht.toLowerCase().indexOf(ce.toLowerCase()) === 0 &&
                ce.length > 0 &&
                le.current.setSelectionRange(ce.length, ht.length);
          }
      }
    ),
    $r = S.exports.useCallback(() => {
      if (!fe) return;
      const H = A ? J[0] : J;
      if (xe.length === 0 || H == null) {
        gt({ diff: 'reset' });
        return;
      }
      if (!!Ee.current) {
        if (H != null) {
          const z = xe[L.current];
          if (A && z && nc(J, (Oe) => $(z, Oe)) !== -1) return;
          const ue = nc(xe, (Oe) => $(Oe, H));
          ue === -1 ? gt({ diff: 'reset' }) : pt({ index: ue });
          return;
        }
        if (L.current >= xe.length - 1) {
          pt({ index: xe.length - 1 });
          return;
        }
        pt({ index: L.current });
      }
    }, [xe.length, A ? !1 : J, p, gt, pt, fe, ce, A]),
    qt = ii((H) => {
      _y(Ee, H), H && $r();
    });
  S.exports.useEffect(() => {
    $r();
  }, [$r]);
  const Yt = (H) => {
      te || (se(!0), we(!0), D && D(H));
    },
    Qe = (H, z) => {
      !te || (se(!1), C && C(H, z));
    },
    Ye = (H, z, ue, Oe) => {
      if (A) {
        if (J.length === z.length && J.every((Ke, Ct) => Ke === z[Ct])) return;
      } else if (J === z) return;
      P && P(H, z, ue, Oe), de(z);
    },
    At = S.exports.useRef(!1),
    Lt = (H, z, ue = 'selectOption', Oe = 'options') => {
      let Ke = ue,
        Ct = z;
      if (A) {
        Ct = Array.isArray(J) ? J.slice() : [];
        const ht = nc(Ct, (Ar) => $(z, Ar));
        ht === -1
          ? Ct.push(z)
          : Oe !== 'freeSolo' && (Ct.splice(ht, 1), (Ke = 'removeOption'));
      }
      V(H, Ct),
        Ye(H, Ct, Ke, { option: z }),
        !u && (!H || (!H.ctrlKey && !H.metaKey)) && Qe(H, Ke),
        (a === !0 ||
          (a === 'touch' && At.current) ||
          (a === 'mouse' && !At.current)) &&
          le.current.blur();
    };
  function yt(H, z) {
    if (H === -1) return -1;
    let ue = H;
    for (;;) {
      if ((z === 'next' && ue === J.length) || (z === 'previous' && ue === -1))
        return -1;
      const Oe = it.querySelector(`[data-tag-index="${ue}"]`);
      if (
        !Oe ||
        !Oe.hasAttribute('tabindex') ||
        Oe.disabled ||
        Oe.getAttribute('aria-disabled') === 'true'
      )
        ue += z === 'next' ? 1 : -1;
      else return ue;
    }
  }
  const st = (H, z) => {
      if (!A) return;
      ce === '' && Qe(H, 'toggleInput');
      let ue = U;
      U === -1
        ? ce === '' && z === 'previous' && (ue = J.length - 1)
        : ((ue += z === 'next' ? 1 : -1),
          ue < 0 && (ue = 0),
          ue === J.length && (ue = -1)),
        (ue = yt(ue, z)),
        ee(ue),
        Tt(ue);
    },
    Bt = (H) => {
      (ve.current = !0),
        Pe(''),
        k && k(H, '', 'clear'),
        Ye(H, A ? [] : null, 'clear');
    },
    Ft = (H) => (z) => {
      if (
        (H.onKeyDown && H.onKeyDown(z),
        !z.defaultMuiPrevented &&
          (U !== -1 &&
            ['ArrowLeft', 'ArrowRight'].indexOf(z.key) === -1 &&
            (ee(-1), Tt(-1)),
          z.which !== 229))
      )
        switch (z.key) {
          case 'Home':
            fe &&
              b &&
              (z.preventDefault(),
              gt({
                diff: 'start',
                direction: 'next',
                reason: 'keyboard',
                event: z,
              }));
            break;
          case 'End':
            fe &&
              b &&
              (z.preventDefault(),
              gt({
                diff: 'end',
                direction: 'previous',
                reason: 'keyboard',
                event: z,
              }));
            break;
          case 'PageUp':
            z.preventDefault(),
              gt({
                diff: -lh,
                direction: 'previous',
                reason: 'keyboard',
                event: z,
              }),
              Yt(z);
            break;
          case 'PageDown':
            z.preventDefault(),
              gt({ diff: lh, direction: 'next', reason: 'keyboard', event: z }),
              Yt(z);
            break;
          case 'ArrowDown':
            z.preventDefault(),
              gt({ diff: 1, direction: 'next', reason: 'keyboard', event: z }),
              Yt(z);
            break;
          case 'ArrowUp':
            z.preventDefault(),
              gt({
                diff: -1,
                direction: 'previous',
                reason: 'keyboard',
                event: z,
              }),
              Yt(z);
            break;
          case 'ArrowLeft':
            st(z, 'previous');
            break;
          case 'ArrowRight':
            st(z, 'next');
            break;
          case 'Enter':
            if (L.current !== -1 && fe) {
              const ue = xe[L.current],
                Oe = y ? y(ue) : !1;
              if ((z.preventDefault(), Oe)) return;
              Lt(z, ue, 'selectOption'),
                t &&
                  le.current.setSelectionRange(
                    le.current.value.length,
                    le.current.value.length
                  );
            } else
              m &&
                ce !== '' &&
                me === !1 &&
                (A && z.preventDefault(),
                Lt(z, ce, 'createOption', 'freeSolo'));
            break;
          case 'Escape':
            fe
              ? (z.preventDefault(), z.stopPropagation(), Qe(z, 'escape'))
              : o &&
                (ce !== '' || (A && J.length > 0)) &&
                (z.preventDefault(), z.stopPropagation(), Bt(z));
            break;
          case 'Backspace':
            if (A && !F && ce === '' && J.length > 0) {
              const ue = U === -1 ? J.length - 1 : U,
                Oe = J.slice();
              Oe.splice(ue, 1), Ye(z, Oe, 'removeOption', { option: J[ue] });
            }
            break;
        }
    },
    Kt = (H) => {
      B(!0), R && !ve.current && Yt(H);
    },
    qn = (H) => {
      if (
        Ee.current !== null &&
        Ee.current.parentElement.contains(document.activeElement)
      ) {
        le.current.focus();
        return;
      }
      B(!1),
        (Se.current = !0),
        (ve.current = !1),
        n && L.current !== -1 && fe
          ? Lt(H, xe[L.current], 'blur')
          : n && m && ce !== ''
          ? Lt(H, ce, 'blur', 'freeSolo')
          : i && V(H, J),
        Qe(H, 'blur');
    },
    Wa = (H) => {
      const z = H.target.value;
      ce !== z && (Pe(z), we(!1), k && k(H, z, 'input')),
        z === '' ? !c && !A && Ye(H, null, 'clear') : Yt(H);
    },
    eo = (H) => {
      pt({
        event: H,
        index: Number(H.currentTarget.getAttribute('data-option-index')),
        reason: 'mouse',
      });
    },
    Fe = () => {
      At.current = !0;
    },
    zt = (H) => {
      const z = Number(H.currentTarget.getAttribute('data-option-index'));
      Lt(H, xe[z], 'selectOption'), (At.current = !1);
    },
    en = (H) => (z) => {
      const ue = J.slice();
      ue.splice(H, 1), Ye(z, ue, 'removeOption', { option: J[H] });
    },
    to = (H) => {
      te ? Qe(H, 'toggleInput') : Yt(H);
    },
    rw = (H) => {
      H.target.getAttribute('id') !== Q && H.preventDefault();
    },
    nw = () => {
      le.current.focus(),
        M &&
          Se.current &&
          le.current.selectionEnd - le.current.selectionStart === 0 &&
          le.current.select(),
        (Se.current = !1);
    },
    aw = (H) => {
      (ce === '' || !te) && to(H);
    };
  let Vl = m && ce.length > 0;
  Vl = Vl || (A ? J.length > 0 : J !== null);
  let Ap = xe;
  return (
    x &&
      (Ap = xe.reduce((H, z, ue) => {
        const Oe = x(z);
        return (
          H.length > 0 && H[H.length - 1].group === Oe
            ? H[H.length - 1].options.push(z)
            : H.push({ key: ue, index: ue, group: Oe, options: [z] }),
          H
        );
      }, [])),
    f && ot && qn(),
    {
      getRootProps: (H = {}) =>
        I({ 'aria-owns': He ? `${Q}-listbox` : null }, H, {
          onKeyDown: Ft(H),
          onMouseDown: rw,
          onClick: nw,
        }),
      getInputLabelProps: () => ({ id: `${Q}-label`, htmlFor: Q }),
      getInputProps: () => ({
        id: Q,
        value: ce,
        onBlur: qn,
        onFocus: Kt,
        onChange: Wa,
        onMouseDown: aw,
        'aria-activedescendant': fe ? '' : null,
        'aria-autocomplete': t ? 'both' : 'list',
        'aria-controls': He ? `${Q}-listbox` : void 0,
        'aria-expanded': He,
        autoComplete: 'off',
        ref: le,
        autoCapitalize: 'none',
        spellCheck: 'false',
        role: 'combobox',
      }),
      getClearProps: () => ({ tabIndex: -1, onClick: Bt }),
      getPopupIndicatorProps: () => ({ tabIndex: -1, onClick: to }),
      getTagProps: ({ index: H }) =>
        I(
          { key: H, 'data-tag-index': H, tabIndex: -1 },
          !F && { onDelete: en(H) }
        ),
      getListboxProps: () => ({
        role: 'listbox',
        id: `${Q}-listbox`,
        'aria-labelledby': `${Q}-label`,
        ref: qt,
        onMouseDown: (H) => {
          H.preventDefault();
        },
      }),
      getOptionProps: ({ index: H, option: z }) => {
        const ue = (A ? J : [J]).some((Ke) => Ke != null && $(z, Ke)),
          Oe = y ? y(z) : !1;
        return {
          key: ne(z),
          tabIndex: -1,
          role: 'option',
          id: `${Q}-option-${H}`,
          onMouseOver: eo,
          onClick: zt,
          onTouchStart: Fe,
          'data-option-index': H,
          'aria-disabled': Oe,
          'aria-selected': ue,
        };
      },
      id: Q,
      inputValue: ce,
      value: J,
      dirty: Vl,
      popupOpen: fe,
      focused: ot || U !== -1,
      anchorEl: it,
      setAnchorEl: oe,
      focusedTag: U,
      groupedOptions: Ap,
    }
  );
}
var Ht = 'top',
  dr = 'bottom',
  pr = 'right',
  Vt = 'left',
  ed = 'auto',
  Li = [Ht, dr, pr, Vt],
  ga = 'start',
  Oi = 'end',
  LS = 'clippingParents',
  Ob = 'viewport',
  Va = 'popper',
  BS = 'reference',
  ch = Li.reduce(function (e, t) {
    return e.concat([t + '-' + ga, t + '-' + Oi]);
  }, []),
  Sb = [].concat(Li, [ed]).reduce(function (e, t) {
    return e.concat([t, t + '-' + ga, t + '-' + Oi]);
  }, []),
  FS = 'beforeRead',
  zS = 'read',
  WS = 'afterRead',
  US = 'beforeMain',
  HS = 'main',
  VS = 'afterMain',
  GS = 'beforeWrite',
  qS = 'write',
  YS = 'afterWrite',
  KS = [FS, zS, WS, US, HS, VS, GS, qS, YS];
function Dr(e) {
  return e ? (e.nodeName || '').toLowerCase() : null;
}
function mr(e) {
  if (e == null) return window;
  if (e.toString() !== '[object Window]') {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function Nn(e) {
  var t = mr(e).Element;
  return e instanceof t || e instanceof Element;
}
function cr(e) {
  var t = mr(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function td(e) {
  if (typeof ShadowRoot > 'u') return !1;
  var t = mr(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function XS(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (r) {
    var n = t.styles[r] || {},
      a = t.attributes[r] || {},
      i = t.elements[r];
    !cr(i) ||
      !Dr(i) ||
      (Object.assign(i.style, n),
      Object.keys(a).forEach(function (o) {
        var s = a[o];
        s === !1 ? i.removeAttribute(o) : i.setAttribute(o, s === !0 ? '' : s);
      }));
  });
}
function JS(e) {
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
        !cr(a) ||
          !Dr(a) ||
          (Object.assign(a.style, s),
          Object.keys(i).forEach(function (l) {
            a.removeAttribute(l);
          }));
      });
    }
  );
}
const ZS = {
  name: 'applyStyles',
  enabled: !0,
  phase: 'write',
  fn: XS,
  effect: JS,
  requires: ['computeStyles'],
};
function Mr(e) {
  return e.split('-')[0];
}
var Tn = Math.max,
  Xo = Math.min,
  ya = Math.round;
function eu() {
  var e = navigator.userAgentData;
  return e != null && e.brands
    ? e.brands
        .map(function (t) {
          return t.brand + '/' + t.version;
        })
        .join(' ')
    : navigator.userAgent;
}
function Eb() {
  return !/^((?!chrome|android).)*safari/i.test(eu());
}
function ba(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(),
    a = 1,
    i = 1;
  t &&
    cr(e) &&
    ((a = (e.offsetWidth > 0 && ya(n.width) / e.offsetWidth) || 1),
    (i = (e.offsetHeight > 0 && ya(n.height) / e.offsetHeight) || 1));
  var o = Nn(e) ? mr(e) : window,
    s = o.visualViewport,
    l = !Eb() && r,
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
function rd(e) {
  var t = ba(e),
    r = e.offsetWidth,
    n = e.offsetHeight;
  return (
    Math.abs(t.width - r) <= 1 && (r = t.width),
    Math.abs(t.height - n) <= 1 && (n = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
  );
}
function $b(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (r && td(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n)) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function Jr(e) {
  return mr(e).getComputedStyle(e);
}
function QS(e) {
  return ['table', 'td', 'th'].indexOf(Dr(e)) >= 0;
}
function vn(e) {
  return ((Nn(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function ol(e) {
  return Dr(e) === 'html'
    ? e
    : e.assignedSlot || e.parentNode || (td(e) ? e.host : null) || vn(e);
}
function uh(e) {
  return !cr(e) || Jr(e).position === 'fixed' ? null : e.offsetParent;
}
function eE(e) {
  var t = /firefox/i.test(eu()),
    r = /Trident/i.test(eu());
  if (r && cr(e)) {
    var n = Jr(e);
    if (n.position === 'fixed') return null;
  }
  var a = ol(e);
  for (td(a) && (a = a.host); cr(a) && ['html', 'body'].indexOf(Dr(a)) < 0; ) {
    var i = Jr(a);
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
function Bi(e) {
  for (var t = mr(e), r = uh(e); r && QS(r) && Jr(r).position === 'static'; )
    r = uh(r);
  return r &&
    (Dr(r) === 'html' || (Dr(r) === 'body' && Jr(r).position === 'static'))
    ? t
    : r || eE(e) || t;
}
function nd(e) {
  return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y';
}
function di(e, t, r) {
  return Tn(e, Xo(t, r));
}
function tE(e, t, r) {
  var n = di(e, t, r);
  return n > r ? r : n;
}
function Ab() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Cb(e) {
  return Object.assign({}, Ab(), e);
}
function Pb(e, t) {
  return t.reduce(function (r, n) {
    return (r[n] = e), r;
  }, {});
}
var rE = function (t, r) {
  return (
    (t =
      typeof t == 'function'
        ? t(Object.assign({}, r.rects, { placement: r.placement }))
        : t),
    Cb(typeof t != 'number' ? t : Pb(t, Li))
  );
};
function nE(e) {
  var t,
    r = e.state,
    n = e.name,
    a = e.options,
    i = r.elements.arrow,
    o = r.modifiersData.popperOffsets,
    s = Mr(r.placement),
    l = nd(s),
    c = [Vt, pr].indexOf(s) >= 0,
    u = c ? 'height' : 'width';
  if (!(!i || !o)) {
    var f = rE(a.padding, r),
      d = rd(i),
      h = l === 'y' ? Ht : Vt,
      v = l === 'y' ? dr : pr,
      p =
        r.rects.reference[u] + r.rects.reference[l] - o[l] - r.rects.popper[u],
      m = o[l] - r.rects.reference[l],
      y = Bi(i),
      _ = y ? (l === 'y' ? y.clientHeight || 0 : y.clientWidth || 0) : 0,
      x = p / 2 - m / 2,
      b = f[h],
      w = _ - d[u] - f[v],
      O = _ / 2 - d[u] / 2 + x,
      E = di(b, O, w),
      $ = l;
    r.modifiersData[n] = ((t = {}), (t[$] = E), (t.centerOffset = E - O), t);
  }
}
function aE(e) {
  var t = e.state,
    r = e.options,
    n = r.element,
    a = n === void 0 ? '[data-popper-arrow]' : n;
  a != null &&
    ((typeof a == 'string' && ((a = t.elements.popper.querySelector(a)), !a)) ||
      !$b(t.elements.popper, a) ||
      (t.elements.arrow = a));
}
const iE = {
  name: 'arrow',
  enabled: !0,
  phase: 'main',
  fn: nE,
  effect: aE,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow'],
};
function xa(e) {
  return e.split('-')[1];
}
var oE = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };
function sE(e) {
  var t = e.x,
    r = e.y,
    n = window,
    a = n.devicePixelRatio || 1;
  return { x: ya(t * a) / a || 0, y: ya(r * a) / a || 0 };
}
function fh(e) {
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
  var y = o.hasOwnProperty('x'),
    _ = o.hasOwnProperty('y'),
    x = Vt,
    b = Ht,
    w = window;
  if (c) {
    var O = Bi(r),
      E = 'clientHeight',
      $ = 'clientWidth';
    if (
      (O === mr(r) &&
        ((O = vn(r)),
        Jr(O).position !== 'static' &&
          s === 'absolute' &&
          ((E = 'scrollHeight'), ($ = 'scrollWidth'))),
      (O = O),
      a === Ht || ((a === Vt || a === pr) && i === Oi))
    ) {
      b = dr;
      var A = f && O === w && w.visualViewport ? w.visualViewport.height : O[E];
      (p -= A - n.height), (p *= l ? 1 : -1);
    }
    if (a === Vt || ((a === Ht || a === dr) && i === Oi)) {
      x = pr;
      var P = f && O === w && w.visualViewport ? w.visualViewport.width : O[$];
      (h -= P - n.width), (h *= l ? 1 : -1);
    }
  }
  var C = Object.assign({ position: s }, c && oE),
    T = u === !0 ? sE({ x: h, y: p }) : { x: h, y: p };
  if (((h = T.x), (p = T.y), l)) {
    var k;
    return Object.assign(
      {},
      C,
      ((k = {}),
      (k[b] = _ ? '0' : ''),
      (k[x] = y ? '0' : ''),
      (k.transform =
        (w.devicePixelRatio || 1) <= 1
          ? 'translate(' + h + 'px, ' + p + 'px)'
          : 'translate3d(' + h + 'px, ' + p + 'px, 0)'),
      k)
    );
  }
  return Object.assign(
    {},
    C,
    ((t = {}),
    (t[b] = _ ? p + 'px' : ''),
    (t[x] = y ? h + 'px' : ''),
    (t.transform = ''),
    t)
  );
}
function lE(e) {
  var t = e.state,
    r = e.options,
    n = r.gpuAcceleration,
    a = n === void 0 ? !0 : n,
    i = r.adaptive,
    o = i === void 0 ? !0 : i,
    s = r.roundOffsets,
    l = s === void 0 ? !0 : s,
    c = {
      placement: Mr(t.placement),
      variation: xa(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: a,
      isFixed: t.options.strategy === 'fixed',
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      fh(
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
        fh(
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
const cE = {
  name: 'computeStyles',
  enabled: !0,
  phase: 'beforeWrite',
  fn: lE,
  data: {},
};
var io = { passive: !0 };
function uE(e) {
  var t = e.state,
    r = e.instance,
    n = e.options,
    a = n.scroll,
    i = a === void 0 ? !0 : a,
    o = n.resize,
    s = o === void 0 ? !0 : o,
    l = mr(t.elements.popper),
    c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    i &&
      c.forEach(function (u) {
        u.addEventListener('scroll', r.update, io);
      }),
    s && l.addEventListener('resize', r.update, io),
    function () {
      i &&
        c.forEach(function (u) {
          u.removeEventListener('scroll', r.update, io);
        }),
        s && l.removeEventListener('resize', r.update, io);
    }
  );
}
const fE = {
  name: 'eventListeners',
  enabled: !0,
  phase: 'write',
  fn: function () {},
  effect: uE,
  data: {},
};
var dE = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
function xo(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return dE[t];
  });
}
var pE = { start: 'end', end: 'start' };
function dh(e) {
  return e.replace(/start|end/g, function (t) {
    return pE[t];
  });
}
function ad(e) {
  var t = mr(e),
    r = t.pageXOffset,
    n = t.pageYOffset;
  return { scrollLeft: r, scrollTop: n };
}
function id(e) {
  return ba(vn(e)).left + ad(e).scrollLeft;
}
function hE(e, t) {
  var r = mr(e),
    n = vn(e),
    a = r.visualViewport,
    i = n.clientWidth,
    o = n.clientHeight,
    s = 0,
    l = 0;
  if (a) {
    (i = a.width), (o = a.height);
    var c = Eb();
    (c || (!c && t === 'fixed')) && ((s = a.offsetLeft), (l = a.offsetTop));
  }
  return { width: i, height: o, x: s + id(e), y: l };
}
function vE(e) {
  var t,
    r = vn(e),
    n = ad(e),
    a = (t = e.ownerDocument) == null ? void 0 : t.body,
    i = Tn(
      r.scrollWidth,
      r.clientWidth,
      a ? a.scrollWidth : 0,
      a ? a.clientWidth : 0
    ),
    o = Tn(
      r.scrollHeight,
      r.clientHeight,
      a ? a.scrollHeight : 0,
      a ? a.clientHeight : 0
    ),
    s = -n.scrollLeft + id(e),
    l = -n.scrollTop;
  return (
    Jr(a || r).direction === 'rtl' &&
      (s += Tn(r.clientWidth, a ? a.clientWidth : 0) - i),
    { width: i, height: o, x: s, y: l }
  );
}
function od(e) {
  var t = Jr(e),
    r = t.overflow,
    n = t.overflowX,
    a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + n);
}
function kb(e) {
  return ['html', 'body', '#document'].indexOf(Dr(e)) >= 0
    ? e.ownerDocument.body
    : cr(e) && od(e)
    ? e
    : kb(ol(e));
}
function pi(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = kb(e),
    a = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    i = mr(n),
    o = a ? [i].concat(i.visualViewport || [], od(n) ? n : []) : n,
    s = t.concat(o);
  return a ? s : s.concat(pi(ol(o)));
}
function tu(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function mE(e, t) {
  var r = ba(e, !1, t === 'fixed');
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
function ph(e, t, r) {
  return t === Ob ? tu(hE(e, r)) : Nn(t) ? mE(t, r) : tu(vE(vn(e)));
}
function gE(e) {
  var t = pi(ol(e)),
    r = ['absolute', 'fixed'].indexOf(Jr(e).position) >= 0,
    n = r && cr(e) ? Bi(e) : e;
  return Nn(n)
    ? t.filter(function (a) {
        return Nn(a) && $b(a, n) && Dr(a) !== 'body';
      })
    : [];
}
function yE(e, t, r, n) {
  var a = t === 'clippingParents' ? gE(e) : [].concat(t),
    i = [].concat(a, [r]),
    o = i[0],
    s = i.reduce(function (l, c) {
      var u = ph(e, c, n);
      return (
        (l.top = Tn(u.top, l.top)),
        (l.right = Xo(u.right, l.right)),
        (l.bottom = Xo(u.bottom, l.bottom)),
        (l.left = Tn(u.left, l.left)),
        l
      );
    }, ph(e, o, n));
  return (
    (s.width = s.right - s.left),
    (s.height = s.bottom - s.top),
    (s.x = s.left),
    (s.y = s.top),
    s
  );
}
function Tb(e) {
  var t = e.reference,
    r = e.element,
    n = e.placement,
    a = n ? Mr(n) : null,
    i = n ? xa(n) : null,
    o = t.x + t.width / 2 - r.width / 2,
    s = t.y + t.height / 2 - r.height / 2,
    l;
  switch (a) {
    case Ht:
      l = { x: o, y: t.y - r.height };
      break;
    case dr:
      l = { x: o, y: t.y + t.height };
      break;
    case pr:
      l = { x: t.x + t.width, y: s };
      break;
    case Vt:
      l = { x: t.x - r.width, y: s };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var c = a ? nd(a) : null;
  if (c != null) {
    var u = c === 'y' ? 'height' : 'width';
    switch (i) {
      case ga:
        l[c] = l[c] - (t[u] / 2 - r[u] / 2);
        break;
      case Oi:
        l[c] = l[c] + (t[u] / 2 - r[u] / 2);
        break;
    }
  }
  return l;
}
function Si(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = n === void 0 ? e.placement : n,
    i = r.strategy,
    o = i === void 0 ? e.strategy : i,
    s = r.boundary,
    l = s === void 0 ? LS : s,
    c = r.rootBoundary,
    u = c === void 0 ? Ob : c,
    f = r.elementContext,
    d = f === void 0 ? Va : f,
    h = r.altBoundary,
    v = h === void 0 ? !1 : h,
    p = r.padding,
    m = p === void 0 ? 0 : p,
    y = Cb(typeof m != 'number' ? m : Pb(m, Li)),
    _ = d === Va ? BS : Va,
    x = e.rects.popper,
    b = e.elements[v ? _ : d],
    w = yE(Nn(b) ? b : b.contextElement || vn(e.elements.popper), l, u, o),
    O = ba(e.elements.reference),
    E = Tb({ reference: O, element: x, strategy: 'absolute', placement: a }),
    $ = tu(Object.assign({}, x, E)),
    A = d === Va ? $ : O,
    P = {
      top: w.top - A.top + y.top,
      bottom: A.bottom - w.bottom + y.bottom,
      left: w.left - A.left + y.left,
      right: A.right - w.right + y.right,
    },
    C = e.modifiersData.offset;
  if (d === Va && C) {
    var T = C[a];
    Object.keys(P).forEach(function (k) {
      var D = [pr, dr].indexOf(k) >= 0 ? 1 : -1,
        j = [Ht, dr].indexOf(k) >= 0 ? 'y' : 'x';
      P[k] += T[j] * D;
    });
  }
  return P;
}
function bE(e, t) {
  t === void 0 && (t = {});
  var r = t,
    n = r.placement,
    a = r.boundary,
    i = r.rootBoundary,
    o = r.padding,
    s = r.flipVariations,
    l = r.allowedAutoPlacements,
    c = l === void 0 ? Sb : l,
    u = xa(n),
    f = u
      ? s
        ? ch
        : ch.filter(function (v) {
            return xa(v) === u;
          })
      : Li,
    d = f.filter(function (v) {
      return c.indexOf(v) >= 0;
    });
  d.length === 0 && (d = f);
  var h = d.reduce(function (v, p) {
    return (
      (v[p] = Si(e, { placement: p, boundary: a, rootBoundary: i, padding: o })[
        Mr(p)
      ]),
      v
    );
  }, {});
  return Object.keys(h).sort(function (v, p) {
    return h[v] - h[p];
  });
}
function xE(e) {
  if (Mr(e) === ed) return [];
  var t = xo(e);
  return [dh(e), t, dh(t)];
}
function wE(e) {
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
        y = Mr(m),
        _ = y === m,
        x = l || (_ || !v ? [xo(m)] : xE(m)),
        b = [m].concat(x).reduce(function (Se, le) {
          return Se.concat(
            Mr(le) === ed
              ? bE(t, {
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
        E = new Map(),
        $ = !0,
        A = b[0],
        P = 0;
      P < b.length;
      P++
    ) {
      var C = b[P],
        T = Mr(C),
        k = xa(C) === ga,
        D = [Ht, dr].indexOf(T) >= 0,
        j = D ? 'width' : 'height',
        R = Si(t, {
          placement: C,
          boundary: u,
          rootBoundary: f,
          altBoundary: d,
          padding: c,
        }),
        N = D ? (k ? pr : Vt) : k ? dr : Ht;
      w[j] > O[j] && (N = xo(N));
      var F = xo(N),
        M = [];
      if (
        (i && M.push(R[T] <= 0),
        s && M.push(R[N] <= 0, R[F] <= 0),
        M.every(function (Se) {
          return Se;
        }))
      ) {
        (A = C), ($ = !1);
        break;
      }
      E.set(C, M);
    }
    if ($)
      for (
        var Y = v ? 3 : 1,
          Q = function (le) {
            var Ee = b.find(function (it) {
              var oe = E.get(it);
              if (oe)
                return oe.slice(0, le).every(function (U) {
                  return U;
                });
            });
            if (Ee) return (A = Ee), 'break';
          },
          ne = Y;
        ne > 0;
        ne--
      ) {
        var ve = Q(ne);
        if (ve === 'break') break;
      }
    t.placement !== A &&
      ((t.modifiersData[n]._skip = !0), (t.placement = A), (t.reset = !0));
  }
}
const _E = {
  name: 'flip',
  enabled: !0,
  phase: 'main',
  fn: wE,
  requiresIfExists: ['offset'],
  data: { _skip: !1 },
};
function hh(e, t, r) {
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
function vh(e) {
  return [Ht, pr, dr, Vt].some(function (t) {
    return e[t] >= 0;
  });
}
function OE(e) {
  var t = e.state,
    r = e.name,
    n = t.rects.reference,
    a = t.rects.popper,
    i = t.modifiersData.preventOverflow,
    o = Si(t, { elementContext: 'reference' }),
    s = Si(t, { altBoundary: !0 }),
    l = hh(o, n),
    c = hh(s, a, i),
    u = vh(l),
    f = vh(c);
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
const SE = {
  name: 'hide',
  enabled: !0,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: OE,
};
function EE(e, t, r) {
  var n = Mr(e),
    a = [Vt, Ht].indexOf(n) >= 0 ? -1 : 1,
    i = typeof r == 'function' ? r(Object.assign({}, t, { placement: e })) : r,
    o = i[0],
    s = i[1];
  return (
    (o = o || 0),
    (s = (s || 0) * a),
    [Vt, pr].indexOf(n) >= 0 ? { x: s, y: o } : { x: o, y: s }
  );
}
function $E(e) {
  var t = e.state,
    r = e.options,
    n = e.name,
    a = r.offset,
    i = a === void 0 ? [0, 0] : a,
    o = Sb.reduce(function (u, f) {
      return (u[f] = EE(f, t.rects, i)), u;
    }, {}),
    s = o[t.placement],
    l = s.x,
    c = s.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += l),
    (t.modifiersData.popperOffsets.y += c)),
    (t.modifiersData[n] = o);
}
const AE = {
  name: 'offset',
  enabled: !0,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: $E,
};
function CE(e) {
  var t = e.state,
    r = e.name;
  t.modifiersData[r] = Tb({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: 'absolute',
    placement: t.placement,
  });
}
const PE = {
  name: 'popperOffsets',
  enabled: !0,
  phase: 'read',
  fn: CE,
  data: {},
};
function kE(e) {
  return e === 'x' ? 'y' : 'x';
}
function TE(e) {
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
    m = Si(t, { boundary: l, rootBoundary: c, padding: f, altBoundary: u }),
    y = Mr(t.placement),
    _ = xa(t.placement),
    x = !_,
    b = nd(y),
    w = kE(b),
    O = t.modifiersData.popperOffsets,
    E = t.rects.reference,
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
    T = { x: 0, y: 0 };
  if (!!O) {
    if (i) {
      var k,
        D = b === 'y' ? Ht : Vt,
        j = b === 'y' ? dr : pr,
        R = b === 'y' ? 'height' : 'width',
        N = O[b],
        F = N + m[D],
        M = N - m[j],
        Y = h ? -$[R] / 2 : 0,
        Q = _ === ga ? E[R] : $[R],
        ne = _ === ga ? -$[R] : -E[R],
        ve = t.elements.arrow,
        Se = h && ve ? rd(ve) : { width: 0, height: 0 },
        le = t.modifiersData['arrow#persistent']
          ? t.modifiersData['arrow#persistent'].padding
          : Ab(),
        Ee = le[D],
        it = le[j],
        oe = di(0, E[R], Se[R]),
        U = x ? E[R] / 2 - Y - oe - Ee - P.mainAxis : Q - oe - Ee - P.mainAxis,
        ee = x
          ? -E[R] / 2 + Y + oe + it + P.mainAxis
          : ne + oe + it + P.mainAxis,
        ie = t.elements.arrow && Bi(t.elements.arrow),
        L = ie ? (b === 'y' ? ie.clientTop || 0 : ie.clientLeft || 0) : 0,
        J = (k = C == null ? void 0 : C[b]) != null ? k : 0,
        de = N + U - J - L,
        ce = N + ee - J,
        Pe = di(h ? Xo(F, de) : F, N, h ? Tn(M, ce) : M);
      (O[b] = Pe), (T[b] = Pe - N);
    }
    if (s) {
      var ot,
        B = b === 'x' ? Ht : Vt,
        V = b === 'x' ? dr : pr,
        q = O[w],
        te = w === 'y' ? 'height' : 'width',
        se = q + m[B],
        Ae = q - m[V],
        we = [Ht, Vt].indexOf(y) !== -1,
        me = (ot = C == null ? void 0 : C[w]) != null ? ot : 0,
        fe = we ? se : q - E[te] - $[te] - me + P.altAxis,
        xe = we ? q + E[te] + $[te] - me - P.altAxis : Ae,
        He = h && we ? tE(fe, q, xe) : di(h ? fe : se, q, h ? xe : Ae);
      (O[w] = He), (T[w] = He - q);
    }
    t.modifiersData[n] = T;
  }
}
const ME = {
  name: 'preventOverflow',
  enabled: !0,
  phase: 'main',
  fn: TE,
  requiresIfExists: ['offset'],
};
function IE(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function RE(e) {
  return e === mr(e) || !cr(e) ? ad(e) : IE(e);
}
function DE(e) {
  var t = e.getBoundingClientRect(),
    r = ya(t.width) / e.offsetWidth || 1,
    n = ya(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function jE(e, t, r) {
  r === void 0 && (r = !1);
  var n = cr(t),
    a = cr(t) && DE(t),
    i = vn(t),
    o = ba(e, a, r),
    s = { scrollLeft: 0, scrollTop: 0 },
    l = { x: 0, y: 0 };
  return (
    (n || (!n && !r)) &&
      ((Dr(t) !== 'body' || od(i)) && (s = RE(t)),
      cr(t)
        ? ((l = ba(t, !0)), (l.x += t.clientLeft), (l.y += t.clientTop))
        : i && (l.x = id(i))),
    {
      x: o.left + s.scrollLeft - l.x,
      y: o.top + s.scrollTop - l.y,
      width: o.width,
      height: o.height,
    }
  );
}
function NE(e) {
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
function LE(e) {
  var t = NE(e);
  return KS.reduce(function (r, n) {
    return r.concat(
      t.filter(function (a) {
        return a.phase === n;
      })
    );
  }, []);
}
function BE(e) {
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
function FE(e) {
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
var mh = { placement: 'bottom', modifiers: [], strategy: 'absolute' };
function gh() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == 'function');
  });
}
function zE(e) {
  e === void 0 && (e = {});
  var t = e,
    r = t.defaultModifiers,
    n = r === void 0 ? [] : r,
    a = t.defaultOptions,
    i = a === void 0 ? mh : a;
  return function (s, l, c) {
    c === void 0 && (c = i);
    var u = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, mh, i),
        modifiersData: {},
        elements: { reference: s, popper: l },
        attributes: {},
        styles: {},
      },
      f = [],
      d = !1,
      h = {
        state: u,
        setOptions: function (y) {
          var _ = typeof y == 'function' ? y(u.options) : y;
          p(),
            (u.options = Object.assign({}, i, u.options, _)),
            (u.scrollParents = {
              reference: Nn(s)
                ? pi(s)
                : s.contextElement
                ? pi(s.contextElement)
                : [],
              popper: pi(l),
            });
          var x = LE(FE([].concat(n, u.options.modifiers)));
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
            var y = u.elements,
              _ = y.reference,
              x = y.popper;
            if (!!gh(_, x)) {
              (u.rects = {
                reference: jE(_, Bi(x), u.options.strategy === 'fixed'),
                popper: rd(x),
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
                  E = w.options,
                  $ = E === void 0 ? {} : E,
                  A = w.name;
                typeof O == 'function' &&
                  (u = O({ state: u, options: $, name: A, instance: h }) || u);
              }
            }
          }
        },
        update: BE(function () {
          return new Promise(function (m) {
            h.forceUpdate(), m(u);
          });
        }),
        destroy: function () {
          p(), (d = !0);
        },
      };
    if (!gh(s, l)) return h;
    h.setOptions(c).then(function (m) {
      !d && c.onFirstUpdate && c.onFirstUpdate(m);
    });
    function v() {
      u.orderedModifiers.forEach(function (m) {
        var y = m.name,
          _ = m.options,
          x = _ === void 0 ? {} : _,
          b = m.effect;
        if (typeof b == 'function') {
          var w = b({ state: u, name: y, instance: h, options: x }),
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
var WE = [fE, PE, cE, ZS, AE, _E, ME, iE, SE],
  UE = zE({ defaultModifiers: WE });
function HE(e) {
  return Be('MuiPopperUnstyled', e);
}
We('MuiPopperUnstyled', ['root']);
const VE = [
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
  GE = [
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
function qE(e, t) {
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
function ru(e) {
  return typeof e == 'function' ? e() : e;
}
const YE = () => Le({ root: ['root'] }, HE, {}),
  KE = {},
  XE = S.exports.forwardRef(function (t, r) {
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
        TransitionProps: y,
      } = t,
      _ = $e(t, VE),
      x = S.exports.useRef(null),
      b = Yr(x, r),
      w = S.exports.useRef(null),
      O = Yr(w, m),
      E = S.exports.useRef(O);
    ha(() => {
      E.current = O;
    }, [O]),
      S.exports.useImperativeHandle(m, () => w.current, []);
    const $ = qE(v, c),
      [A, P] = S.exports.useState($);
    S.exports.useEffect(() => {
      w.current && w.current.forceUpdate();
    }),
      ha(() => {
        if (!a || !d) return;
        const j = (F) => {
          P(F.placement);
        };
        ru(a);
        let R = [
          { name: 'preventOverflow', options: { altBoundary: u } },
          { name: 'flip', options: { altBoundary: u } },
          {
            name: 'onUpdate',
            enabled: !0,
            phase: 'afterWrite',
            fn: ({ state: F }) => {
              j(F);
            },
          },
        ];
        f != null && (R = R.concat(f)),
          p && p.modifiers != null && (R = R.concat(p.modifiers));
        const N = UE(
          ru(a),
          x.current,
          I({ placement: $ }, p, { modifiers: R })
        );
        return (
          E.current(N),
          () => {
            N.destroy(), E.current(null);
          }
        );
      }, [a, u, f, d, p, $]);
    const C = { placement: A };
    y !== null && (C.TransitionProps = y);
    const T = YE(),
      k = (n = o != null ? o : s.Root) != null ? n : 'div',
      D = dw({
        elementType: k,
        externalSlotProps: l.root,
        externalForwardedProps: _,
        additionalProps: { role: 'tooltip', ref: b },
        ownerState: I({}, t, h),
        className: T.root,
      });
    return G.jsx(k, I({}, D, { children: typeof i == 'function' ? i(C) : i }));
  }),
  JE = S.exports.forwardRef(function (t, r) {
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
        popperOptions: d = KE,
        popperRef: h,
        style: v,
        transition: p = !1,
      } = t,
      m = $e(t, GE),
      [y, _] = S.exports.useState(!0),
      x = () => {
        _(!1);
      },
      b = () => {
        _(!0);
      };
    if (!l && !u && (!p || y)) return null;
    const w = i || (n ? Oy(ru(n)).body : void 0);
    return G.jsx(fw, {
      disablePortal: s,
      container: w,
      children: G.jsx(
        XE,
        I(
          {
            anchorEl: n,
            direction: o,
            disablePortal: s,
            modifiers: c,
            ref: r,
            open: p ? !y : u,
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
                display: !u && l && (!p || y) ? 'none' : null,
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
  ZE = JE,
  QE = RS({
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
  Mb = QE,
  e$ = Sy(),
  t$ = $S({
    defaultTheme: e$,
    defaultClassName: 'MuiBox-root',
    generateClassName: Ey.generate,
  }),
  Ne = t$,
  r$ = {
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
        Ey.configure(e);
    },
  },
  n$ = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        unstable_ClassNameGenerator: r$,
        capitalize: X,
        createChainedFunction: pw,
        createSvgIcon: hn,
        debounce: $y,
        deprecatedPropType: _S,
        isMuiElement: Ay,
        ownerDocument: Oy,
        ownerWindow: Bf,
        requirePropFactory: OS,
        setRef: _y,
        unstable_useEnhancedEffect: ha,
        unstable_useId: Lf,
        unsupportedProp: SS,
        useControlled: bo,
        useEventCallback: ii,
        useForkRef: Yr,
        useIsFocusVisible: hw,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  a$ = [
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
function i$(e, t, r) {
  const n = t.getBoundingClientRect(),
    a = r && r.getBoundingClientRect(),
    i = Bf(t);
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
function o$(e) {
  return typeof e == 'function' ? e() : e;
}
function oo(e, t, r) {
  const n = o$(r),
    a = i$(e, t, n);
  a && ((t.style.webkitTransform = a), (t.style.transform = a));
}
const s$ = S.exports.forwardRef(function (t, r) {
    const n = Wn(),
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
        onExited: y,
        onExiting: _,
        style: x,
        timeout: b = i,
        TransitionComponent: w = vw,
      } = t,
      O = $e(t, a$),
      E = S.exports.useRef(null),
      $ = Yr(l.ref, E),
      A = Yr($, r),
      P = (M) => (Y) => {
        M && (Y === void 0 ? M(E.current) : M(E.current, Y));
      },
      C = P((M, Y) => {
        oo(u, M, c), mw(M), h && h(M, Y);
      }),
      T = P((M, Y) => {
        const Q = Pp({ timeout: b, style: x, easing: f }, { mode: 'enter' });
        (M.style.webkitTransition = n.transitions.create(
          '-webkit-transform',
          I({}, Q)
        )),
          (M.style.transition = n.transitions.create('transform', I({}, Q))),
          (M.style.webkitTransform = 'none'),
          (M.style.transform = 'none'),
          p && p(M, Y);
      }),
      k = P(v),
      D = P(_),
      j = P((M) => {
        const Y = Pp({ timeout: b, style: x, easing: f }, { mode: 'exit' });
        (M.style.webkitTransition = n.transitions.create(
          '-webkit-transform',
          Y
        )),
          (M.style.transition = n.transitions.create('transform', Y)),
          oo(u, M, c),
          m && m(M);
      }),
      R = P((M) => {
        (M.style.webkitTransition = ''), (M.style.transition = ''), y && y(M);
      }),
      N = (M) => {
        o && o(E.current, M);
      },
      F = S.exports.useCallback(() => {
        E.current && oo(u, E.current, c);
      }, [u, c]);
    return (
      S.exports.useEffect(() => {
        if (d || u === 'down' || u === 'right') return;
        const M = $y(() => {
            E.current && oo(u, E.current, c);
          }),
          Y = Bf(E.current);
        return (
          Y.addEventListener('resize', M),
          () => {
            M.clear(), Y.removeEventListener('resize', M);
          }
        );
      }, [u, d, c]),
      S.exports.useEffect(() => {
        d || F();
      }, [d, F]),
      G.jsx(
        w,
        I(
          {
            nodeRef: E,
            onEnter: C,
            onEntered: k,
            onEntering: T,
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
              S.exports.cloneElement(
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
  l$ = s$;
function c$(e) {
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
const u$ = ['BackdropProps'],
  f$ = [
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
  Ib = (e, t) => {
    const { ownerState: r } = e;
    return [
      t.root,
      (r.variant === 'permanent' || r.variant === 'persistent') && t.docked,
      t.modal,
    ];
  },
  d$ = (e) => {
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
    return Le(a, c$, t);
  },
  p$ = ae(Cy, { name: 'MuiDrawer', slot: 'Root', overridesResolver: Ib })(
    ({ theme: e }) => ({ zIndex: (e.vars || e).zIndex.drawer })
  ),
  yh = ae('div', {
    shouldForwardProp: Ff,
    name: 'MuiDrawer',
    slot: 'Docked',
    skipVariantsResolver: !1,
    overridesResolver: Ib,
  })({ flex: '0 0 auto' }),
  h$ = ae(Br, {
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
  Rb = { left: 'right', right: 'left', top: 'down', bottom: 'up' };
function v$(e) {
  return ['left', 'right'].indexOf(e) !== -1;
}
function m$(e, t) {
  return e.direction === 'rtl' && v$(t) ? Rb[t] : t;
}
const g$ = S.exports.forwardRef(function (t, r) {
    const n = je({ props: t, name: 'MuiDrawer' }),
      a = Wn(),
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
        TransitionComponent: y = l$,
        transitionDuration: _ = i,
        variant: x = 'temporary',
      } = n,
      b = $e(n.ModalProps, u$),
      w = $e(n, f$),
      O = S.exports.useRef(!1);
    S.exports.useEffect(() => {
      O.current = !0;
    }, []);
    const E = m$(a, o),
      A = I({}, n, { anchor: o, elevation: u, open: v, variant: x }, w),
      P = d$(A),
      C = G.jsx(
        h$,
        I({ elevation: x === 'temporary' ? u : 0, square: !0 }, p, {
          className: he(P.paper, p.className),
          ownerState: A,
          children: l,
        })
      );
    if (x === 'permanent')
      return G.jsx(
        yh,
        I({ className: he(P.root, P.docked, c), ownerState: A, ref: r }, w, {
          children: C,
        })
      );
    const T = G.jsx(
      y,
      I({ in: v, direction: Rb[E], timeout: _, appear: O.current }, m, {
        children: C,
      })
    );
    return x === 'persistent'
      ? G.jsx(
          yh,
          I({ className: he(P.root, P.docked, c), ownerState: A, ref: r }, w, {
            children: T,
          })
        )
      : G.jsx(
          p$,
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
            { children: T }
          )
        );
  }),
  y$ = g$;
function b$(e) {
  return Be('MuiDivider', e);
}
const x$ = We('MuiDivider', [
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
  bh = x$,
  w$ = [
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
  _$ = (e) => {
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
      b$,
      n
    );
  },
  O$ = ae('div', {
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
  S$ = ae('span', {
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
  E$ = S.exports.forwardRef(function (t, r) {
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
      v = $e(n, w$),
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
      m = _$(p);
    return G.jsx(
      O$,
      I(
        { as: s, className: he(m.root, o), role: f, ref: r, ownerState: p },
        v,
        {
          children: i
            ? G.jsx(S$, { className: m.wrapper, ownerState: p, children: i })
            : null,
        }
      )
    );
  }),
  ur = E$,
  Er = b_,
  dt = l_,
  $$ = ae(ZE, {
    name: 'MuiPopper',
    slot: 'Root',
    overridesResolver: (e, t) => t.root,
  })({}),
  A$ = S.exports.forwardRef(function (t, r) {
    const n = gw(),
      a = je({ props: t, name: 'MuiPopper' });
    return G.jsx(
      $$,
      I({ direction: n == null ? void 0 : n.direction }, a, { ref: r })
    );
  }),
  Db = A$;
function C$(e) {
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
const P$ = [
    'className',
    'color',
    'component',
    'disableGutters',
    'disableSticky',
    'inset',
  ],
  k$ = (e) => {
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
    return Le(o, C$, t);
  },
  T$ = ae('li', {
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
  M$ = S.exports.forwardRef(function (t, r) {
    const n = je({ props: t, name: 'MuiListSubheader' }),
      {
        className: a,
        color: i = 'default',
        component: o = 'li',
        disableGutters: s = !1,
        disableSticky: l = !1,
        inset: c = !1,
      } = n,
      u = $e(n, P$),
      f = I({}, n, {
        color: i,
        component: o,
        disableGutters: s,
        disableSticky: l,
        inset: c,
      }),
      d = k$(f);
    return G.jsx(
      T$,
      I({ as: o, className: he(d.root, a), ref: r, ownerState: f }, u)
    );
  }),
  I$ = M$;
function R$(e) {
  return Be('MuiIconButton', e);
}
const D$ = We('MuiIconButton', [
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
  j$ = D$,
  N$ = [
    'edge',
    'children',
    'className',
    'color',
    'disabled',
    'disableFocusRipple',
    'size',
  ],
  L$ = (e) => {
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
    return Le(o, R$, t);
  },
  B$ = ae(va, {
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
          [`&.${j$.disabled}`]: {
            backgroundColor: 'transparent',
            color: (e.vars || e).palette.action.disabled,
          },
        }
      )
  ),
  F$ = S.exports.forwardRef(function (t, r) {
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
      f = $e(n, N$),
      d = I({}, n, {
        edge: a,
        color: s,
        disabled: l,
        disableFocusRipple: c,
        size: u,
      }),
      h = L$(d);
    return G.jsx(
      B$,
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
  Or = F$,
  z$ = hn(
    G.jsx('path', {
      d: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z',
    }),
    'Cancel'
  );
function W$(e) {
  return Be('MuiChip', e);
}
const U$ = We('MuiChip', [
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
  Te = U$,
  H$ = [
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
  V$ = (e) => {
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
    return Le(l, W$, t);
  },
  G$ = ae('div', {
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
  q$ = ae('span', {
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
function xh(e) {
  return e.key === 'Backspace' || e.key === 'Delete';
}
const Y$ = S.exports.forwardRef(function (t, r) {
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
        size: y = 'medium',
        variant: _ = 'filled',
      } = n,
      x = $e(n, H$),
      b = S.exports.useRef(null),
      w = Yr(b, r),
      O = (N) => {
        N.stopPropagation(), v && v(N);
      },
      E = (N) => {
        N.currentTarget === N.target && xh(N) && N.preventDefault(), p && p(N);
      },
      $ = (N) => {
        N.currentTarget === N.target &&
          (v && xh(N)
            ? v(N)
            : N.key === 'Escape' && b.current && b.current.blur()),
          m && m(N);
      },
      A = o !== !1 && h ? !0 : o,
      P = A || v ? va : l || 'div',
      C = I({}, n, {
        component: P,
        disabled: u,
        size: y,
        color: s,
        onDelete: !!v,
        clickable: A,
        variant: _,
      }),
      T = V$(C),
      k =
        P === va
          ? I(
              { component: l || 'div', focusVisibleClassName: T.focusVisible },
              v && { disableRipple: !0 }
            )
          : {};
    let D = null;
    v &&
      (D =
        c && S.exports.isValidElement(c)
          ? S.exports.cloneElement(c, {
              className: he(c.props.className, T.deleteIcon),
              onClick: O,
            })
          : G.jsx(z$, { className: he(T.deleteIcon), onClick: O }));
    let j = null;
    a &&
      S.exports.isValidElement(a) &&
      (j = S.exports.cloneElement(a, {
        className: he(T.avatar, a.props.className),
      }));
    let R = null;
    return (
      f &&
        S.exports.isValidElement(f) &&
        (R = S.exports.cloneElement(f, {
          className: he(T.icon, f.props.className),
        })),
      G.jsxs(
        G$,
        I(
          {
            as: P,
            className: he(T.root, i),
            disabled: A && u ? !0 : void 0,
            onClick: h,
            onKeyDown: E,
            onKeyUp: $,
            ref: w,
            ownerState: C,
          },
          k,
          x,
          {
            children: [
              j || R,
              G.jsx(q$, { className: he(T.label), ownerState: C, children: d }),
              D,
            ],
          }
        )
      )
    );
  }),
  K$ = Y$,
  jb = hn(
    G.jsx('path', {
      d: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
    }),
    'Close'
  );
function X$(e) {
  return Be('MuiAutocomplete', e);
}
const J$ = We('MuiAutocomplete', [
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
  Ce = J$;
var wh, _h;
const Z$ = [
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
  Q$ = (e) => {
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
    return Le(u, X$, t);
  },
  eA = ae('div', {
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
        [`& .${Gl.root}`]: {
          paddingBottom: 1,
          '& .MuiInput-input': { padding: '4px 4px 4px 0px' },
        },
        [`& .${Gl.root}.${ro.sizeSmall}`]: {
          [`& .${Gl.input}`]: { padding: '2px 4px 3px 0' },
        },
        [`& .${kp.root}`]: {
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
        [`& .${kp.root}.${ro.sizeSmall}`]: {
          paddingTop: 6,
          paddingBottom: 6,
          paddingLeft: 6,
          [`& .${Ce.input}`]: { padding: '2.5px 4px 2.5px 6px' },
        },
        [`& .${no.root}`]: {
          paddingTop: 19,
          paddingLeft: 8,
          [`.${Ce.hasPopupIcon}&, .${Ce.hasClearIcon}&`]: {
            paddingRight: 26 + 4 + 9,
          },
          [`.${Ce.hasPopupIcon}.${Ce.hasClearIcon}&`]: {
            paddingRight: 52 + 4 + 9,
          },
          [`& .${no.input}`]: { padding: '7px 4px' },
          [`& .${Ce.endAdornment}`]: { right: 9 },
        },
        [`& .${no.root}.${ro.sizeSmall}`]: {
          paddingBottom: 1,
          [`& .${no.input}`]: { padding: '2.5px 4px' },
        },
        [`& .${ro.hiddenLabel}`]: { paddingTop: 8 },
        [`& .${Ce.input}`]: I(
          { flexGrow: 1, textOverflow: 'ellipsis', opacity: 0 },
          e.inputFocused && { opacity: 1 }
        ),
      }
    )
  ),
  tA = ae('div', {
    name: 'MuiAutocomplete',
    slot: 'EndAdornment',
    overridesResolver: (e, t) => t.endAdornment,
  })({ position: 'absolute', right: 0, top: 'calc(50% - 14px)' }),
  rA = ae(Or, {
    name: 'MuiAutocomplete',
    slot: 'ClearIndicator',
    overridesResolver: (e, t) => t.clearIndicator,
  })({ marginRight: -2, padding: 4, visibility: 'hidden' }),
  nA = ae(Or, {
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
  aA = ae(Db, {
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
  iA = ae(Br, {
    name: 'MuiAutocomplete',
    slot: 'Paper',
    overridesResolver: (e, t) => t.paper,
  })(({ theme: e }) => I({}, e.typography.body1, { overflow: 'auto' })),
  oA = ae('div', {
    name: 'MuiAutocomplete',
    slot: 'Loading',
    overridesResolver: (e, t) => t.loading,
  })(({ theme: e }) => ({
    color: (e.vars || e).palette.text.secondary,
    padding: '14px 16px',
  })),
  sA = ae('div', {
    name: 'MuiAutocomplete',
    slot: 'NoOptions',
    overridesResolver: (e, t) => t.noOptions,
  })(({ theme: e }) => ({
    color: (e.vars || e).palette.text.secondary,
    padding: '14px 16px',
  })),
  lA = ae('div', {
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
  cA = ae(I$, {
    name: 'MuiAutocomplete',
    slot: 'GroupLabel',
    overridesResolver: (e, t) => t.groupLabel,
  })(({ theme: e }) => ({
    backgroundColor: (e.vars || e).palette.background.paper,
    top: -8,
  })),
  uA = ae('ul', {
    name: 'MuiAutocomplete',
    slot: 'GroupUl',
    overridesResolver: (e, t) => t.groupUl,
  })({ padding: 0, [`& .${Ce.option}`]: { paddingLeft: 24 } }),
  fA = S.exports.forwardRef(function (t, r) {
    var n, a, i, o;
    const s = je({ props: t, name: 'MuiAutocomplete' }),
      {
        autoComplete: l = !1,
        autoHighlight: c = !1,
        autoSelect: u = !1,
        blurOnSelect: f = !1,
        ChipProps: d,
        className: h,
        clearIcon: v = wh || (wh = G.jsx(jb, { fontSize: 'small' })),
        clearOnBlur: p = !s.freeSolo,
        clearOnEscape: m = !1,
        clearText: y = 'Clear',
        closeText: _ = 'Close',
        componentsProps: x = {},
        defaultValue: b = s.multiple ? [] : null,
        disableClearable: w = !1,
        disableCloseOnSelect: O = !1,
        disabled: E = !1,
        disabledItemsFocusable: $ = !1,
        disableListWrap: A = !1,
        disablePortal: P = !1,
        filterSelectedOptions: C = !1,
        forcePopupIcon: T = 'auto',
        freeSolo: k = !1,
        fullWidth: D = !1,
        getLimitTagsText: j = (Fe) => `+${Fe}`,
        getOptionLabel: R = (Fe) => {
          var zt;
          return (zt = Fe.label) != null ? zt : Fe;
        },
        groupBy: N,
        handleHomeEndKeys: F = !s.freeSolo,
        includeInputInList: M = !1,
        limitTags: Y = -1,
        ListboxComponent: Q = 'ul',
        ListboxProps: ne,
        loading: ve = !1,
        loadingText: Se = 'Loading\u2026',
        multiple: le = !1,
        noOptionsText: Ee = 'No options',
        openOnFocus: it = !1,
        openText: oe = 'Open',
        PaperComponent: U = Br,
        PopperComponent: ee = Db,
        popupIcon: ie = _h || (_h = G.jsx(yw, {})),
        readOnly: L = !1,
        renderGroup: J,
        renderInput: de,
        renderOption: ce,
        renderTags: Pe,
        selectOnFocus: ot = !s.freeSolo,
        size: B = 'medium',
      } = s,
      V = $e(s, Z$),
      {
        getRootProps: q,
        getInputProps: te,
        getInputLabelProps: se,
        getPopupIndicatorProps: Ae,
        getClearProps: we,
        getTagProps: me,
        getListboxProps: fe,
        getOptionProps: xe,
        value: He,
        dirty: Tt,
        id: Gt,
        popupOpen: pt,
        focused: gt,
        focusedTag: $r,
        anchorEl: qt,
        setAnchorEl: Yt,
        inputValue: Qe,
        groupedOptions: Ye,
      } = NS(I({}, s, { componentName: 'Autocomplete' })),
      At = !w && !E && Tt && !L,
      Lt = (!k || T === !0) && T !== !1,
      yt = I({}, s, {
        disablePortal: P,
        focused: gt,
        fullWidth: D,
        hasClearIcon: At,
        hasPopupIcon: Lt,
        inputFocused: $r === -1,
        popupOpen: pt,
        size: B,
      }),
      st = Q$(yt);
    let Bt;
    if (le && He.length > 0) {
      const Fe = (zt) => I({ className: st.tag, disabled: E }, me(zt));
      Pe
        ? (Bt = Pe(He, Fe, yt))
        : (Bt = He.map((zt, en) =>
            G.jsx(K$, I({ label: R(zt), size: B }, Fe({ index: en }), d))
          ));
    }
    if (Y > -1 && Array.isArray(Bt)) {
      const Fe = Bt.length - Y;
      !gt &&
        Fe > 0 &&
        ((Bt = Bt.splice(0, Y)),
        Bt.push(
          G.jsx('span', { className: st.tag, children: j(Fe) }, Bt.length)
        ));
    }
    const Kt =
        J ||
        ((Fe) =>
          G.jsxs(
            'li',
            {
              children: [
                G.jsx(cA, {
                  className: st.groupLabel,
                  ownerState: yt,
                  component: 'div',
                  children: Fe.group,
                }),
                G.jsx(uA, {
                  className: st.groupUl,
                  ownerState: yt,
                  children: Fe.children,
                }),
              ],
            },
            Fe.key
          )),
      Wa = ce || ((Fe, zt) => G.jsx('li', I({}, Fe, { children: R(zt) }))),
      eo = (Fe, zt) => {
        const en = xe({ option: Fe, index: zt });
        return Wa(I({}, en, { className: st.option }), Fe, {
          selected: en['aria-selected'],
          inputValue: Qe,
        });
      };
    return G.jsxs(S.exports.Fragment, {
      children: [
        G.jsx(
          eA,
          I({ ref: r, className: he(st.root, h), ownerState: yt }, q(V), {
            children: de({
              id: Gt,
              disabled: E,
              fullWidth: !0,
              size: B === 'small' ? 'small' : void 0,
              InputLabelProps: se(),
              InputProps: I(
                { ref: Yt, className: st.inputRoot, startAdornment: Bt },
                (At || Lt) && {
                  endAdornment: G.jsxs(tA, {
                    className: st.endAdornment,
                    ownerState: yt,
                    children: [
                      At
                        ? G.jsx(
                            rA,
                            I(
                              {},
                              we(),
                              { 'aria-label': y, title: y, ownerState: yt },
                              x.clearIndicator,
                              {
                                className: he(
                                  st.clearIndicator,
                                  (n = x.clearIndicator) == null
                                    ? void 0
                                    : n.className
                                ),
                                children: v,
                              }
                            )
                          )
                        : null,
                      Lt
                        ? G.jsx(
                            nA,
                            I(
                              {},
                              Ae(),
                              {
                                disabled: E,
                                'aria-label': pt ? _ : oe,
                                title: pt ? _ : oe,
                                ownerState: yt,
                              },
                              x.popupIndicator,
                              {
                                className: he(
                                  st.popupIndicator,
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
                { className: st.input, disabled: E, readOnly: L },
                te()
              ),
            }),
          })
        ),
        qt
          ? G.jsx(
              aA,
              I(
                {
                  as: ee,
                  disablePortal: P,
                  style: { width: qt ? qt.clientWidth : null },
                  ownerState: yt,
                  role: 'presentation',
                  anchorEl: qt,
                  open: pt,
                },
                x.popper,
                {
                  className: he(
                    st.popper,
                    (i = x.popper) == null ? void 0 : i.className
                  ),
                  children: G.jsxs(
                    iA,
                    I({ ownerState: yt, as: U }, x.paper, {
                      className: he(
                        st.paper,
                        (o = x.paper) == null ? void 0 : o.className
                      ),
                      children: [
                        ve && Ye.length === 0
                          ? G.jsx(oA, {
                              className: st.loading,
                              ownerState: yt,
                              children: Se,
                            })
                          : null,
                        Ye.length === 0 && !k && !ve
                          ? G.jsx(sA, {
                              className: st.noOptions,
                              ownerState: yt,
                              role: 'presentation',
                              onMouseDown: (Fe) => {
                                Fe.preventDefault();
                              },
                              children: Ee,
                            })
                          : null,
                        Ye.length > 0
                          ? G.jsx(
                              lA,
                              I(
                                {
                                  as: Q,
                                  className: st.listbox,
                                  ownerState: yt,
                                },
                                fe(),
                                ne,
                                {
                                  children: Ye.map((Fe, zt) =>
                                    N
                                      ? Kt({
                                          key: Fe.key,
                                          group: Fe.group,
                                          children: Fe.options.map((en, to) =>
                                            eo(en, Fe.index + to)
                                          ),
                                        })
                                      : eo(Fe, zt)
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
  dA = fA,
  pA = S.exports.createContext(),
  Oh = pA;
function hA(e) {
  return Be('MuiGrid', e);
}
const vA = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  mA = ['column-reverse', 'column', 'row-reverse', 'row'],
  gA = ['nowrap', 'wrap-reverse', 'wrap'],
  Ga = ['auto', !0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  Ei = We('MuiGrid', [
    'root',
    'container',
    'item',
    'zeroMinWidth',
    ...vA.map((e) => `spacing-xs-${e}`),
    ...mA.map((e) => `direction-xs-${e}`),
    ...gA.map((e) => `wrap-xs-${e}`),
    ...Ga.map((e) => `grid-xs-${e}`),
    ...Ga.map((e) => `grid-sm-${e}`),
    ...Ga.map((e) => `grid-md-${e}`),
    ...Ga.map((e) => `grid-lg-${e}`),
    ...Ga.map((e) => `grid-xl-${e}`),
  ]),
  yA = [
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
function ca(e) {
  const t = parseFloat(e);
  return `${t}${String(e).replace(String(t), '') || 'px'}`;
}
function bA({ theme: e, ownerState: t }) {
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
      const o = Pn({ values: t.columns, breakpoints: e.breakpoints.values }),
        s = typeof o == 'object' ? o[a] : o;
      if (s == null) return n;
      const l = `${Math.round((r / s) * 1e8) / 1e6}%`;
      let c = {};
      if (t.container && t.item && t.columnSpacing !== 0) {
        const u = e.spacing(t.columnSpacing);
        if (u !== '0px') {
          const f = `calc(${l} + ${ca(u)})`;
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
function xA({ theme: e, ownerState: t }) {
  const r = Pn({ values: t.direction, breakpoints: e.breakpoints.values });
  return mi({ theme: e }, r, (n) => {
    const a = { flexDirection: n };
    return (
      n.indexOf('column') === 0 &&
        (a[`& > .${Ei.item}`] = { maxWidth: 'none' }),
      a
    );
  });
}
function Nb({ breakpoints: e, values: t }) {
  let r = '';
  Object.keys(t).forEach((a) => {
    r === '' && t[a] !== 0 && (r = a);
  });
  const n = Object.keys(e).sort((a, i) => e[a] - e[i]);
  return n.slice(0, n.indexOf(r));
}
function wA({ theme: e, ownerState: t }) {
  const { container: r, rowSpacing: n } = t;
  let a = {};
  if (r && n !== 0) {
    const i = Pn({ values: n, breakpoints: e.breakpoints.values });
    let o;
    typeof i == 'object' &&
      (o = Nb({ breakpoints: e.breakpoints.values, values: i })),
      (a = mi({ theme: e }, i, (s, l) => {
        var c;
        const u = e.spacing(s);
        return u !== '0px'
          ? {
              marginTop: `-${ca(u)}`,
              [`& > .${Ei.item}`]: { paddingTop: ca(u) },
            }
          : (c = o) != null && c.includes(l)
          ? {}
          : { marginTop: 0, [`& > .${Ei.item}`]: { paddingTop: 0 } };
      }));
  }
  return a;
}
function _A({ theme: e, ownerState: t }) {
  const { container: r, columnSpacing: n } = t;
  let a = {};
  if (r && n !== 0) {
    const i = Pn({ values: n, breakpoints: e.breakpoints.values });
    let o;
    typeof i == 'object' &&
      (o = Nb({ breakpoints: e.breakpoints.values, values: i })),
      (a = mi({ theme: e }, i, (s, l) => {
        var c;
        const u = e.spacing(s);
        return u !== '0px'
          ? {
              width: `calc(100% + ${ca(u)})`,
              marginLeft: `-${ca(u)}`,
              [`& > .${Ei.item}`]: { paddingLeft: ca(u) },
            }
          : (c = o) != null && c.includes(l)
          ? {}
          : {
              width: '100%',
              marginLeft: 0,
              [`& > .${Ei.item}`]: { paddingLeft: 0 },
            };
      }));
  }
  return a;
}
function OA(e, t, r = {}) {
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
const SA = ae('div', {
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
    n && (u = OA(o, c, t));
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
  xA,
  wA,
  _A,
  bA
);
function EA(e, t) {
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
const $A = (e) => {
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
    r && (c = EA(i, l));
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
    return Le(f, hA, t);
  },
  AA = S.exports.forwardRef(function (t, r) {
    const n = je({ props: t, name: 'MuiGrid' }),
      { breakpoints: a } = Wn(),
      i = Nf(n),
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
      y = $e(i, yA),
      _ = h || v,
      x = l || v,
      b = S.exports.useContext(Oh),
      w = u ? s || 12 : b,
      O = {},
      E = I({}, y);
    a.keys.forEach((P) => {
      y[P] != null && ((O[P] = y[P]), delete E[P]);
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
      A = $A($);
    return G.jsx(Oh.Provider, {
      value: w,
      children: G.jsx(
        SA,
        I({ ownerState: $, className: he(A.root, o), as: c, ref: r }, E)
      ),
    });
  }),
  Z = AA;
var sd = {},
  rt = { exports: {} };
(function (e) {
  function t(r) {
    return r && r.__esModule ? r : { default: r };
  }
  (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
})(rt);
var ac = {};
const CA = bw(n$);
var Sh;
function at() {
  return (
    Sh ||
      ((Sh = 1),
      (function (e) {
        Object.defineProperty(e, '__esModule', { value: !0 }),
          Object.defineProperty(e, 'default', {
            enumerable: !0,
            get: function () {
              return t.createSvgIcon;
            },
          });
        var t = CA;
      })(ac)),
    ac
  );
}
var PA = rt.exports;
Object.defineProperty(sd, '__esModule', { value: !0 });
var Lb = (sd.default = void 0),
  kA = PA(at()),
  TA = nt(),
  MA = (0, kA.default)(
    (0, TA.jsx)('path', { d: 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' }),
    'Menu'
  );
Lb = sd.default = MA;
const Bb = () => {
    const e = Er();
    return g.createElement(Lb, {
      className: 'menu-icon',
      onClick: () => e(Xy()),
      sx: { zIndex: window.isMobile ? 200 : 'auto' },
    });
  },
  IA = ['component', 'direction', 'spacing', 'divider', 'children'];
function RA(e, t) {
  const r = S.exports.Children.toArray(e).filter(Boolean);
  return r.reduce(
    (n, a, i) => (
      n.push(a),
      i < r.length - 1 &&
        n.push(S.exports.cloneElement(t, { key: `separator-${i}` })),
      n
    ),
    []
  );
}
const DA = (e) =>
    ({
      row: 'Left',
      'row-reverse': 'Right',
      column: 'Top',
      'column-reverse': 'Bottom',
    }[e]),
  jA = ({ ownerState: e, theme: t }) => {
    let r = I(
      { display: 'flex', flexDirection: 'column' },
      mi(
        { theme: t },
        Pn({ values: e.direction, breakpoints: t.breakpoints.values }),
        (n) => ({ flexDirection: n })
      )
    );
    if (e.spacing) {
      const n = xw(t),
        a = Object.keys(t.breakpoints.values).reduce(
          (l, c) => (
            ((typeof e.spacing == 'object' && e.spacing[c] != null) ||
              (typeof e.direction == 'object' && e.direction[c] != null)) &&
              (l[c] = !0),
            l
          ),
          {}
        ),
        i = Pn({ values: e.direction, base: a }),
        o = Pn({ values: e.spacing, base: a });
      typeof i == 'object' &&
        Object.keys(i).forEach((l, c, u) => {
          if (!i[l]) {
            const d = c > 0 ? i[u[c - 1]] : 'column';
            i[l] = d;
          }
        }),
        (r = ww(
          r,
          mi({ theme: t }, o, (l, c) => ({
            '& > :not(style) + :not(style)': {
              margin: 0,
              [`margin${DA(c ? i[c] : e.direction)}`]: Ow(n, l),
            },
          }))
        ));
    }
    return (r = _w(t.breakpoints, r)), r;
  },
  NA = ae('div', {
    name: 'MuiStack',
    slot: 'Root',
    overridesResolver: (e, t) => [t.root],
  })(jA),
  LA = S.exports.forwardRef(function (t, r) {
    const n = je({ props: t, name: 'MuiStack' }),
      a = Nf(n),
      {
        component: i = 'div',
        direction: o = 'column',
        spacing: s = 0,
        divider: l,
        children: c,
      } = a,
      u = $e(a, IA),
      f = { direction: o, spacing: s };
    return G.jsx(
      NA,
      I({ as: i, ownerState: f, ref: r }, u, { children: l ? RA(c, l) : c })
    );
  }),
  Fb = LA;
function BA(e) {
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
const FA = [
  'className',
  'color',
  'disableShrink',
  'size',
  'style',
  'thickness',
  'value',
  'variant',
];
let sl = (e) => e,
  Eh,
  $h,
  Ah,
  Ch;
const tn = 44,
  zA = Py(
    Eh ||
      (Eh = sl`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)
  ),
  WA = Py(
    $h ||
      ($h = sl`
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
  UA = (e) => {
    const { classes: t, variant: r, color: n, disableShrink: a } = e,
      i = {
        root: ['root', r, `color${X(n)}`],
        svg: ['svg'],
        circle: ['circle', `circle${X(r)}`, a && 'circleDisableShrink'],
      };
    return Le(i, BA, t);
  },
  HA = ae('span', {
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
      ky(
        Ah ||
          (Ah = sl`
      animation: ${0} 1.4s linear infinite;
    `),
        zA
      )
  ),
  VA = ae('svg', {
    name: 'MuiCircularProgress',
    slot: 'Svg',
    overridesResolver: (e, t) => t.svg,
  })({ display: 'block' }),
  GA = ae('circle', {
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
      ky(
        Ch ||
          (Ch = sl`
      animation: ${0} 1.4s ease-in-out infinite;
    `),
        WA
      )
  ),
  qA = S.exports.forwardRef(function (t, r) {
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
      d = $e(n, FA),
      h = I({}, n, {
        color: i,
        disableShrink: o,
        size: s,
        thickness: c,
        value: u,
        variant: f,
      }),
      v = UA(h),
      p = {},
      m = {},
      y = {};
    if (f === 'determinate') {
      const _ = 2 * Math.PI * ((tn - c) / 2);
      (p.strokeDasharray = _.toFixed(3)),
        (y['aria-valuenow'] = Math.round(u)),
        (p.strokeDashoffset = `${(((100 - u) / 100) * _).toFixed(3)}px`),
        (m.transform = 'rotate(-90deg)');
    }
    return G.jsx(
      HA,
      I(
        {
          className: he(v.root, a),
          style: I({ width: s, height: s }, m, l),
          ownerState: h,
          ref: r,
          role: 'progressbar',
        },
        y,
        d,
        {
          children: G.jsx(VA, {
            className: v.svg,
            ownerState: h,
            viewBox: `${tn / 2} ${tn / 2} ${tn} ${tn}`,
            children: G.jsx(GA, {
              className: v.circle,
              style: p,
              ownerState: h,
              cx: tn,
              cy: tn,
              r: (tn - c) / 2,
              fill: 'none',
              strokeWidth: c,
            }),
          }),
        }
      )
    );
  }),
  YA = qA;
function KA(e) {
  return Be('MuiButtonGroup', e);
}
const XA = We('MuiButtonGroup', [
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
  sn = XA,
  JA = [
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
  ZA = (e, t) => {
    const { ownerState: r } = e;
    return [
      { [`& .${sn.grouped}`]: t.grouped },
      { [`& .${sn.grouped}`]: t[`grouped${X(r.orientation)}`] },
      { [`& .${sn.grouped}`]: t[`grouped${X(r.variant)}`] },
      { [`& .${sn.grouped}`]: t[`grouped${X(r.variant)}${X(r.orientation)}`] },
      { [`& .${sn.grouped}`]: t[`grouped${X(r.variant)}${X(r.color)}`] },
      t.root,
      t[r.variant],
      r.disableElevation === !0 && t.disableElevation,
      r.fullWidth && t.fullWidth,
      r.orientation === 'vertical' && t.vertical,
    ];
  },
  QA = (e) => {
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
    return Le(l, KA, t);
  },
  eC = ae('div', {
    name: 'MuiButtonGroup',
    slot: 'Root',
    overridesResolver: ZA,
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
        [`& .${sn.grouped}`]: I(
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
                  [`&.${sn.disabled}`]: {
                    borderRight: `1px solid ${
                      (e.vars || e).palette.action.disabled
                    }`,
                  },
                },
              t.variant === 'contained' &&
                t.orientation === 'vertical' && {
                  borderBottom: `1px solid ${(e.vars || e).palette.grey[400]}`,
                  [`&.${sn.disabled}`]: {
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
  tC = S.exports.forwardRef(function (t, r) {
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
      m = $e(n, JA),
      y = I({}, n, {
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
      _ = QA(y),
      x = S.exports.useMemo(
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
    return G.jsx(
      eC,
      I(
        {
          as: s,
          role: 'group',
          className: he(_.root, i),
          ref: r,
          ownerState: y,
        },
        m,
        { children: G.jsx(Sw.Provider, { value: x, children: a }) }
      )
    );
  }),
  rC = tC;
var ld = {},
  nC = rt.exports;
Object.defineProperty(ld, '__esModule', { value: !0 });
var zb = (ld.default = void 0),
  aC = nC(at()),
  iC = nt(),
  oC = (0, aC.default)(
    (0, iC.jsx)('path', {
      d: 'M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z',
    }),
    'LightMode'
  );
zb = ld.default = oC;
var cd = {},
  sC = rt.exports;
Object.defineProperty(cd, '__esModule', { value: !0 });
var Wb = (cd.default = void 0),
  lC = sC(at()),
  cC = nt(),
  uC = (0, lC.default)(
    (0, cC.jsx)('path', {
      d: 'M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z',
    }),
    'DarkMode'
  );
Wb = cd.default = uC;
const fC = hn(
  G.jsx('path', {
    d: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
  }),
  'Person'
);
function dC(e) {
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
const pC = [
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
  hC = (e) => {
    const { classes: t, variant: r, colorDefault: n } = e;
    return Le(
      {
        root: ['root', r, n && 'colorDefault'],
        img: ['img'],
        fallback: ['fallback'],
      },
      dC,
      t
    );
  },
  vC = ae('div', {
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
  mC = ae('img', {
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
  gC = ae(fC, {
    name: 'MuiAvatar',
    slot: 'Fallback',
    overridesResolver: (e, t) => t.fallback,
  })({ width: '75%', height: '75%' });
function yC({ crossOrigin: e, referrerPolicy: t, src: r, srcSet: n }) {
  const [a, i] = S.exports.useState(!1);
  return (
    S.exports.useEffect(() => {
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
const bC = S.exports.forwardRef(function (t, r) {
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
      h = $e(n, pC);
    let v = null;
    const p = yC(I({}, l, { src: u, srcSet: f })),
      m = u || f,
      y = m && p !== 'error',
      _ = I({}, n, { colorDefault: !y, component: s, variant: d }),
      x = hC(_);
    return (
      y
        ? (v = G.jsx(
            mC,
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
        : (v = G.jsx(gC, { className: x.fallback })),
      G.jsx(
        vC,
        I({ as: s, ownerState: _, className: he(x.root, o), ref: r }, h, {
          children: v,
        })
      )
    );
  }),
  xC = bC;
function wC(e) {
  return Be('MuiListItemIcon', e);
}
const _C = We('MuiListItemIcon', ['root', 'alignItemsFlexStart']),
  Ph = _C,
  OC = ['className'],
  SC = (e) => {
    const { alignItems: t, classes: r } = e;
    return Le(
      { root: ['root', t === 'flex-start' && 'alignItemsFlexStart'] },
      wC,
      r
    );
  },
  EC = ae('div', {
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
  $C = S.exports.forwardRef(function (t, r) {
    const n = je({ props: t, name: 'MuiListItemIcon' }),
      { className: a } = n,
      i = $e(n, OC),
      o = S.exports.useContext(kr),
      s = I({}, n, { alignItems: o.alignItems }),
      l = SC(s);
    return G.jsx(EC, I({ className: he(l.root, a), ownerState: s, ref: r }, i));
  }),
  li = $C;
function AC(e) {
  return Be('MuiListItemText', e);
}
const CC = We('MuiListItemText', [
    'root',
    'multiline',
    'dense',
    'inset',
    'primary',
    'secondary',
  ]),
  Jo = CC,
  PC = [
    'children',
    'className',
    'disableTypography',
    'inset',
    'primary',
    'primaryTypographyProps',
    'secondary',
    'secondaryTypographyProps',
  ],
  kC = (e) => {
    const { classes: t, inset: r, primary: n, secondary: a, dense: i } = e;
    return Le(
      {
        root: ['root', r && 'inset', i && 'dense', n && a && 'multiline'],
        primary: ['primary'],
        secondary: ['secondary'],
      },
      AC,
      t
    );
  },
  TC = ae('div', {
    name: 'MuiListItemText',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        { [`& .${Jo.primary}`]: t.primary },
        { [`& .${Jo.secondary}`]: t.secondary },
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
  MC = S.exports.forwardRef(function (t, r) {
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
      d = $e(n, PC),
      { dense: h } = S.exports.useContext(kr);
    let v = l != null ? l : a,
      p = u;
    const m = I({}, n, {
        disableTypography: o,
        inset: s,
        primary: !!v,
        secondary: !!p,
        dense: h,
      }),
      y = kC(m);
    return (
      v != null &&
        v.type !== lt &&
        !o &&
        (v = G.jsx(
          lt,
          I(
            {
              variant: h ? 'body2' : 'body1',
              className: y.primary,
              component: 'span',
              display: 'block',
            },
            c,
            { children: v }
          )
        )),
      p != null &&
        p.type !== lt &&
        !o &&
        (p = G.jsx(
          lt,
          I(
            {
              variant: 'body2',
              className: y.secondary,
              color: 'text.secondary',
              display: 'block',
            },
            f,
            { children: p }
          )
        )),
      G.jsxs(
        TC,
        I({ className: he(y.root, i), ownerState: m, ref: r }, d, {
          children: [v, p],
        })
      )
    );
  }),
  IC = MC;
function RC(e) {
  return Be('MuiMenuItem', e);
}
const DC = We('MuiMenuItem', [
    'root',
    'focusVisible',
    'dense',
    'disabled',
    'divider',
    'gutters',
    'selected',
  ]),
  qa = DC,
  jC = [
    'autoFocus',
    'component',
    'dense',
    'divider',
    'disableGutters',
    'focusVisibleClassName',
    'role',
    'tabIndex',
  ],
  NC = (e, t) => {
    const { ownerState: r } = e;
    return [
      t.root,
      r.dense && t.dense,
      r.divider && t.divider,
      !r.disableGutters && t.gutters,
    ];
  },
  LC = (e) => {
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
        RC,
        o
      );
    return I({}, o, l);
  },
  BC = ae(va, {
    shouldForwardProp: (e) => Ff(e) || e === 'classes',
    name: 'MuiMenuItem',
    slot: 'Root',
    overridesResolver: NC,
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
        [`&.${qa.selected}`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
            : ke(e.palette.primary.main, e.palette.action.selectedOpacity),
          [`&.${qa.focusVisible}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
              : ke(
                  e.palette.primary.main,
                  e.palette.action.selectedOpacity +
                    e.palette.action.focusOpacity
                ),
          },
        },
        [`&.${qa.selected}:hover`]: {
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
        [`&.${qa.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette.action.focus,
        },
        [`&.${qa.disabled}`]: {
          opacity: (e.vars || e).palette.action.disabledOpacity,
        },
        [`& + .${bh.root}`]: {
          marginTop: e.spacing(1),
          marginBottom: e.spacing(1),
        },
        [`& + .${bh.inset}`]: { marginLeft: 52 },
        [`& .${Jo.root}`]: { marginTop: 0, marginBottom: 0 },
        [`& .${Jo.inset}`]: { paddingLeft: 36 },
        [`& .${Ph.root}`]: { minWidth: 36 },
      },
      !t.dense && { [e.breakpoints.up('sm')]: { minHeight: 'auto' } },
      t.dense &&
        I(
          { minHeight: 32, paddingTop: 4, paddingBottom: 4 },
          e.typography.body2,
          { [`& .${Ph.root} svg`]: { fontSize: '1.25rem' } }
        )
    )
  ),
  FC = S.exports.forwardRef(function (t, r) {
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
      d = $e(n, jC),
      h = S.exports.useContext(kr),
      v = { dense: o || h.dense || !1, disableGutters: l },
      p = S.exports.useRef(null);
    ha(() => {
      a && p.current && p.current.focus();
    }, [a]);
    const m = I({}, n, { dense: v.dense, divider: s, disableGutters: l }),
      y = LC(n),
      _ = Yr(p, r);
    let x;
    return (
      n.disabled || (x = f !== void 0 ? f : -1),
      G.jsx(kr.Provider, {
        value: v,
        children: G.jsx(
          BC,
          I(
            {
              ref: _,
              role: u,
              tabIndex: x,
              component: i,
              focusVisibleClassName: he(y.focusVisible, c),
            },
            d,
            { ownerState: m, classes: y }
          )
        ),
      })
    );
  }),
  wr = FC;
var ud = {},
  zC = rt.exports;
Object.defineProperty(ud, '__esModule', { value: !0 });
var Ub = (ud.default = void 0),
  WC = zC(at()),
  UC = nt(),
  HC = (0, WC.default)(
    (0, UC.jsx)('path', {
      d: 'm17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z',
    }),
    'Logout'
  );
Ub = ud.default = HC;
var fd = {},
  VC = rt.exports;
Object.defineProperty(fd, '__esModule', { value: !0 });
var Hb = (fd.default = void 0),
  GC = VC(at()),
  qC = nt(),
  YC = (0, GC.default)(
    (0, qC.jsx)('path', {
      d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z',
    }),
    'AccountCircle'
  );
Hb = fd.default = YC;
var dd = {},
  KC = rt.exports;
Object.defineProperty(dd, '__esModule', { value: !0 });
var Vb = (dd.default = void 0),
  XC = KC(at()),
  JC = nt(),
  ZC = (0, XC.default)(
    (0, JC.jsx)('path', {
      d: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z',
    }),
    'Email'
  );
Vb = dd.default = ZC;
var pd = {},
  QC = rt.exports;
Object.defineProperty(pd, '__esModule', { value: !0 });
var Gb = (pd.default = void 0),
  eP = QC(at()),
  kh = nt(),
  tP = (0, eP.default)(
    [
      (0, kh.jsx)('circle', { cx: '10', cy: '8', r: '4' }, '0'),
      (0, kh.jsx)(
        'path',
        {
          d: 'M10.67 13.02c-.22-.01-.44-.02-.67-.02-2.42 0-4.68.67-6.61 1.82-.88.52-1.39 1.5-1.39 2.53V20h9.26c-.79-1.13-1.26-2.51-1.26-4 0-1.07.25-2.07.67-2.98zM20.75 16c0-.22-.03-.42-.06-.63l1.14-1.01-1-1.73-1.45.49c-.32-.27-.68-.48-1.08-.63L18 11h-2l-.3 1.49c-.4.15-.76.36-1.08.63l-1.45-.49-1 1.73 1.14 1.01c-.03.21-.06.41-.06.63s.03.42.06.63l-1.14 1.01 1 1.73 1.45-.49c.32.27.68.48 1.08.63L16 21h2l.3-1.49c.4-.15.76-.36 1.08-.63l1.45.49 1-1.73-1.14-1.01c.03-.21.06-.41.06-.63zM17 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z',
        },
        '1'
      ),
    ],
    'ManageAccounts'
  );
Gb = pd.default = tP;
const qb = ({ avatar: e, sidebar: t }) => {
    const r = Er(),
      { mode: n } = dt(Xf),
      [a, i] = S.exports.useState(!1),
      [o, s] = S.exports.useState();
    S.exports.useEffect(() => {
      be({ method: 'get', url: '/current-user' }, function ({ data: c }) {
        s(c);
      });
    }, []);
    const l = () => {
      window.location.replace('/logout');
    };
    return g.createElement(
      Ne,
      {
        component: 'span',
        sx: { float: t ? 'inherit' : 'right', mt: t ? 2 : 0 },
      },
      g.createElement(
        rC,
        { variant: 'outlined' },
        g.createElement(
          St,
          {
            className: t ? 'sidebar-light-mode' : 'light-mode',
            variant: n === 'light' ? 'contained' : 'outlined',
            onClick: () => r(Jc('light')),
          },
          g.createElement(zb, null)
        ),
        g.createElement(
          St,
          {
            className: t ? 'sidebar-dark-mode' : 'dark-mode',
            onClick: () => r(Jc('dark')),
            variant: n === 'dark' ? 'contained' : 'outlined',
          },
          g.createElement(Wb, null)
        ),
        e &&
          g.createElement(
            g.Fragment,
            null,
            g.createElement(xC, {
              onClick: () => i(!a),
              alt: 'avatar',
              src: '/images/warren-buffett.png',
              className: 'avatar',
              id: 'header-avatar',
            }),
            g.createElement(
              Ew,
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
              g.createElement(
                wr,
                { sx: { cursor: 'default' } },
                g.createElement(
                  li,
                  null,
                  g.createElement(Hb, { fontSize: 'small' })
                ),
                o == null ? void 0 : o.name
              ),
              g.createElement(ur, null),
              g.createElement(
                wr,
                { sx: { cursor: 'default' } },
                g.createElement(
                  li,
                  null,
                  g.createElement(Vb, { fontSize: 'small' })
                ),
                o == null ? void 0 : o.email
              ),
              g.createElement(ur, null),
              g.createElement(
                wr,
                { sx: { cursor: 'default' } },
                g.createElement(
                  li,
                  null,
                  g.createElement(Gb, { fontSize: 'small' })
                ),
                'Role: ',
                o == null ? void 0 : o.role
              ),
              g.createElement(ur, null),
              g.createElement(
                wr,
                { onClick: l },
                g.createElement(
                  li,
                  null,
                  g.createElement(Ub, { fontSize: 'small' })
                ),
                'Logout'
              )
            )
          )
      )
    );
  },
  rP = () => {
    const [e, t] = S.exports.useState(!1),
      [r, n] = S.exports.useState([]),
      a = e && r.length === 0,
      [i, o] = g.useState(null),
      s = yb();
    return (
      S.exports.useEffect(() => {
        !a ||
          (async () =>
            setTimeout(() => {
              be(
                { method: 'get', url: '/stocks-search' },
                function ({ data: l }) {
                  n(l);
                }
              );
            }, 1e3))();
      }, [a]),
      S.exports.useEffect(() => {
        i && (s('/edit-stock/' + i.id), location.reload());
      }, [i, s]),
      g.createElement(
        Z,
        { container: !0, spacing: 2, sx: { position: 'relative' } },
        g.createElement(
          Z,
          { item: !0, xs: 9, sx: { paddingLeft: '0px !important' } },
          g.createElement(
            Fb,
            { direction: 'row' },
            window.isMobile && g.createElement(Bb, null),
            g.createElement(dA, {
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
                g.createElement(ut, {
                  ...l,
                  label: 'Search Stock',
                  InputProps: {
                    ...l.InputProps,
                    endAdornment: g.createElement(
                      g.Fragment,
                      null,
                      a
                        ? g.createElement(YA, { color: 'inherit', size: 20 })
                        : null,
                      l.InputProps.endAdornment
                    ),
                  },
                }),
            })
          )
        ),
        g.createElement(
          Z,
          { item: !0, xs: 3 },
          g.createElement(qb, { avatar: !0 })
        )
      )
    );
  },
  nP = g.memo(rP),
  aP = () =>
    g.createElement(
      g.Fragment,
      null,
      g.createElement(
        Mb,
        { sx: { height: 50, pt: 1 }, maxWidth: !1 },
        g.createElement(nP, null),
        g.createElement(cS, null)
      )
    );
var hd = {},
  iP = rt.exports;
Object.defineProperty(hd, '__esModule', { value: !0 });
var Yb = (hd.default = void 0),
  oP = iP(at()),
  sP = nt(),
  lP = (0, oP.default)(
    (0, sP.jsx)('path', {
      d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z',
    }),
    'AddCircle'
  );
Yb = hd.default = lP;
var vd = {},
  cP = rt.exports;
Object.defineProperty(vd, '__esModule', { value: !0 });
var Kb = (vd.default = void 0),
  uP = cP(at()),
  fP = nt(),
  dP = (0, uP.default)(
    (0, fP.jsx)('path', {
      d: 'M19 5v14H5V5h14m1.1-2H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9zM11 7h6v2h-6V7zm0 4h6v2h-6v-2zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7z',
    }),
    'ListAlt'
  );
Kb = vd.default = dP;
var md = {},
  pP = rt.exports;
Object.defineProperty(md, '__esModule', { value: !0 });
var Xb = (md.default = void 0),
  hP = pP(at()),
  vP = nt(),
  mP = (0, hP.default)(
    (0, vP.jsx)('path', {
      d: 'm16 18 2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z',
    }),
    'TrendingDown'
  );
Xb = md.default = mP;
var gd = {},
  gP = rt.exports;
Object.defineProperty(gd, '__esModule', { value: !0 });
var Jb = (gd.default = void 0),
  yP = gP(at()),
  bP = nt(),
  xP = (0, yP.default)(
    (0, bP.jsx)('path', {
      d: 'M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z',
    }),
    'Assignment'
  );
Jb = gd.default = xP;
var yd = {},
  wP = rt.exports;
Object.defineProperty(yd, '__esModule', { value: !0 });
var Zb = (yd.default = void 0),
  _P = wP(at()),
  OP = nt(),
  SP = (0, _P.default)(
    (0, OP.jsx)('path', { d: 'M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z' }),
    'FormatQuote'
  );
Zb = yd.default = SP;
function EP(e) {
  return Be('MuiListItem', e);
}
const $P = We('MuiListItem', [
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
  Qn = $P;
function AP(e) {
  return Be('MuiListItemButton', e);
}
const CP = We('MuiListItemButton', [
    'root',
    'focusVisible',
    'dense',
    'alignItemsFlexStart',
    'disabled',
    'divider',
    'gutters',
    'selected',
  ]),
  ea = CP,
  PP = [
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
  kP = (e, t) => {
    const { ownerState: r } = e;
    return [
      t.root,
      r.dense && t.dense,
      r.alignItems === 'flex-start' && t.alignItemsFlexStart,
      r.divider && t.divider,
      !r.disableGutters && t.gutters,
    ];
  },
  TP = (e) => {
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
        AP,
        r
      );
    return I({}, r, c);
  },
  MP = ae(va, {
    shouldForwardProp: (e) => Ff(e) || e === 'classes',
    name: 'MuiListItemButton',
    slot: 'Root',
    overridesResolver: kP,
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
        [`&.${ea.selected}`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
            : ke(e.palette.primary.main, e.palette.action.selectedOpacity),
          [`&.${ea.focusVisible}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
              : ke(
                  e.palette.primary.main,
                  e.palette.action.selectedOpacity +
                    e.palette.action.focusOpacity
                ),
          },
        },
        [`&.${ea.selected}:hover`]: {
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
        [`&.${ea.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette.action.focus,
        },
        [`&.${ea.disabled}`]: {
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
  IP = S.exports.forwardRef(function (t, r) {
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
      h = $e(n, PP),
      v = S.exports.useContext(kr),
      p = { dense: l || v.dense || !1, alignItems: a, disableGutters: c },
      m = S.exports.useRef(null);
    ha(() => {
      i && m.current && m.current.focus();
    }, [i]);
    const y = I({}, n, {
        alignItems: a,
        dense: p.dense,
        disableGutters: c,
        divider: u,
        selected: d,
      }),
      _ = TP(y),
      x = Yr(m, r);
    return G.jsx(kr.Provider, {
      value: p,
      children: G.jsx(
        MP,
        I(
          {
            ref: x,
            href: h.href || h.to,
            component: (h.href || h.to) && o === 'div' ? 'a' : o,
            focusVisibleClassName: he(_.focusVisible, f),
            ownerState: y,
          },
          h,
          { classes: _, children: s }
        )
      ),
    });
  }),
  RP = IP;
function DP(e) {
  return Be('MuiListItemSecondaryAction', e);
}
We('MuiListItemSecondaryAction', ['root', 'disableGutters']);
const jP = ['className'],
  NP = (e) => {
    const { disableGutters: t, classes: r } = e;
    return Le({ root: ['root', t && 'disableGutters'] }, DP, r);
  },
  LP = ae('div', {
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
  Qb = S.exports.forwardRef(function (t, r) {
    const n = je({ props: t, name: 'MuiListItemSecondaryAction' }),
      { className: a } = n,
      i = $e(n, jP),
      o = S.exports.useContext(kr),
      s = I({}, n, { disableGutters: o.disableGutters }),
      l = NP(s);
    return G.jsx(LP, I({ className: he(l.root, a), ownerState: s, ref: r }, i));
  });
Qb.muiName = 'ListItemSecondaryAction';
const BP = Qb,
  FP = ['className'],
  zP = [
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
  WP = (e, t) => {
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
  UP = (e) => {
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
      EP,
      n
    );
  },
  HP = ae('div', { name: 'MuiListItem', slot: 'Root', overridesResolver: WP })(
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
        !!t.secondaryAction && { [`& > .${ea.root}`]: { paddingRight: 48 } },
        {
          [`&.${Qn.focusVisible}`]: {
            backgroundColor: (e.vars || e).palette.action.focus,
          },
          [`&.${Qn.selected}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
              : ke(e.palette.primary.main, e.palette.action.selectedOpacity),
            [`&.${Qn.focusVisible}`]: {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
                : ke(
                    e.palette.primary.main,
                    e.palette.action.selectedOpacity +
                      e.palette.action.focusOpacity
                  ),
            },
          },
          [`&.${Qn.disabled}`]: {
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
          [`&.${Qn.selected}:hover`]: {
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
  VP = ae('li', {
    name: 'MuiListItem',
    slot: 'Container',
    overridesResolver: (e, t) => t.container,
  })({ position: 'relative' }),
  GP = S.exports.forwardRef(function (t, r) {
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
        disablePadding: y = !1,
        divider: _ = !1,
        focusVisibleClassName: x,
        secondaryAction: b,
        selected: w = !1,
      } = n,
      O = $e(n.ContainerProps, FP),
      E = $e(n, zP),
      $ = S.exports.useContext(kr),
      A = { dense: v || $.dense || !1, alignItems: a, disableGutters: m },
      P = S.exports.useRef(null);
    ha(() => {
      i && P.current && P.current.focus();
    }, [i]);
    const C = S.exports.Children.toArray(s),
      T = C.length && Ay(C[C.length - 1], ['ListItemSecondaryAction']),
      k = I({}, n, {
        alignItems: a,
        autoFocus: i,
        button: o,
        dense: A.dense,
        disabled: p,
        disableGutters: m,
        disablePadding: y,
        divider: _,
        hasSecondaryAction: T,
        selected: w,
      }),
      D = UP(k),
      j = Yr(P, r),
      R = u.Root || HP,
      N = f.root || {},
      F = I({ className: he(D.root, N.className, l), disabled: p }, E);
    let M = c || 'li';
    return (
      o &&
        ((F.component = c || 'div'),
        (F.focusVisibleClassName = he(Qn.focusVisible, x)),
        (M = va)),
      T
        ? ((M = !F.component && !c ? 'div' : M),
          d === 'li' &&
            (M === 'li'
              ? (M = 'div')
              : F.component === 'li' && (F.component = 'div')),
          G.jsx(kr.Provider, {
            value: A,
            children: G.jsxs(
              VP,
              I(
                { as: d, className: he(D.container, h), ref: j, ownerState: k },
                O,
                {
                  children: [
                    G.jsx(
                      R,
                      I(
                        {},
                        N,
                        !Tp(R) && { as: M, ownerState: I({}, k, N.ownerState) },
                        F,
                        { children: C }
                      )
                    ),
                    C.pop(),
                  ],
                }
              )
            ),
          }))
        : G.jsx(kr.Provider, {
            value: A,
            children: G.jsxs(
              R,
              I(
                {},
                N,
                { as: M, ref: j, ownerState: k },
                !Tp(R) && { ownerState: I({}, k, N.ownerState) },
                F,
                { children: [C, b && G.jsx(BP, { children: b })] }
              )
            ),
          })
    );
  }),
  qP = GP,
  YP = ({ text: e, icon: t }) => {
    const r = dt(Jy);
    return g.createElement(
      qP,
      { disablePadding: !0, sx: { display: 'block' } },
      g.createElement(
        RP,
        {
          sx: {
            minHeight: 48,
            justifyContent: r ? 'initial' : 'center',
            px: 2.5,
          },
        },
        g.createElement(
          li,
          { sx: { minWidth: 0, mr: r ? 3 : 'auto', justifyContent: 'center' } },
          t
        ),
        g.createElement(IC, { primary: e, sx: { opacity: r ? 1 : 0 } })
      )
    );
  },
  Ya = g.memo(YP);
var bd = {},
  KP = rt.exports;
Object.defineProperty(bd, '__esModule', { value: !0 });
var e0 = (bd.default = void 0),
  XP = KP(at()),
  JP = nt(),
  ZP = (0, XP.default)(
    (0, JP.jsx)('path', { d: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' }),
    'Home'
  );
e0 = bd.default = ZP;
const t0 = 240,
  Th = (e) => ({
    width: t0,
    transition: e.transitions.create('width', {
      easing: e.transitions.easing.sharp,
      duration: e.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  }),
  Mh = (e) => ({
    transition: e.transitions.create('width', {
      easing: e.transitions.easing.sharp,
      duration: e.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: window.isMobile ? '0px' : `calc(${e.spacing(7)} + 1px)`,
    [e.breakpoints.up('sm')]: { width: `calc(${e.spacing(8)} + 1px)` },
  }),
  QP = ae(y$, { shouldForwardProp: (e) => e !== 'open' })(
    ({ theme: e, open: t }) => ({
      width: t0,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      position: window.isMobile ? 'absolute' : 'inherit',
      zIndex: 100,
      boxSizing: 'border-box',
      ...(t && { ...Th(e), '& .MuiDrawer-paper': Th(e) }),
      ...(!t && { ...Mh(e), '& .MuiDrawer-paper': Mh(e) }),
    })
  ),
  ic = S.exports.memo($w),
  e2 = () => {
    const e = dt(Jy),
      t = dt(eb),
      r = Er();
    return S.exports.createElement(
      Ne,
      { sx: { display: 'flex' } },
      S.exports.createElement(Ne, {
        component: 'div',
        sx: {
          position: 'fixed',
          width: '100%',
          height: '100%',
          zIndex: 99,
          left: '0px',
          display: window.isMobile && e ? 'block' : 'none',
        },
        onClick: () => r(Xy()),
      }),
      S.exports.createElement(
        QP,
        { variant: 'permanent', open: e },
        S.exports.createElement(
          ic,
          null,
          S.exports.createElement(
            Fb,
            { direction: 'row', spacing: 2, sx: { px: 2.5 } },
            !window.isMobile && S.exports.createElement(Bb, null),
            S.exports.createElement(
              Yn,
              { to: '/', className: 'color-inherit' },
              S.exports.createElement(e0, {
                className: 'home-icon',
                sx: {
                  marginLeft: window.isMobile ? '80px !important' : 'inherit',
                },
              })
            )
          )
        ),
        S.exports.createElement(
          ic,
          null,
          S.exports.createElement(
            Yn,
            {
              to: 'add-stock',
              className: ({ isActive: n }) =>
                n ? 'nav-active nav-link' : 'nav-link',
            },
            S.exports.createElement(Ya, {
              text: 'Add Stock',
              icon: S.exports.createElement(Yb, null),
            })
          ),
          S.exports.createElement(
            Yn,
            {
              to: 'stock-list',
              className: ({ isActive: n }) =>
                n ? 'nav-active nav-link' : 'nav-link',
            },
            S.exports.createElement(Ya, {
              text: 'Stock List',
              icon: S.exports.createElement(Kb, null),
            })
          ),
          S.exports.createElement(
            Yn,
            {
              to: 'discount-rate',
              className: ({ isActive: n }) =>
                n ? 'nav-active nav-link' : 'nav-link',
            },
            S.exports.createElement(Ya, {
              text: `Discount Rate: ${t}%`,
              icon: S.exports.createElement(Xb, null),
            })
          )
        ),
        S.exports.createElement(ur, null),
        S.exports.createElement(
          ic,
          null,
          S.exports.createElement(
            Yn,
            {
              to: 'stock-tenets',
              className: ({ isActive: n }) =>
                n ? 'nav-active nav-link' : 'nav-link',
            },
            S.exports.createElement(Ya, {
              text: 'Stock tenets',
              icon: S.exports.createElement(Jb, null),
            })
          ),
          S.exports.createElement(
            Yn,
            {
              to: 'famous-quotes',
              className: ({ isActive: n }) =>
                n ? 'nav-active nav-link' : 'nav-link',
            },
            S.exports.createElement(Ya, {
              text: 'Famous Quotes',
              icon: S.exports.createElement(Zb, null),
            })
          ),
          S.exports.createElement(
            Ne,
            { component: 'div', sx: { textAlign: 'center' } },
            S.exports.createElement(qb, { sidebar: !0 })
          )
        )
      ),
      S.exports.createElement(aP, null)
    );
  },
  t2 = () => g.createElement(Mb, { maxWidth: !1 }, g.createElement(e2, null));
function r2(e) {
  return Be('MuiAlert', e);
}
const n2 = We('MuiAlert', [
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
  Ih = n2,
  a2 = hn(
    G.jsx('path', {
      d: 'M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z',
    }),
    'SuccessOutlined'
  ),
  i2 = hn(
    G.jsx('path', {
      d: 'M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z',
    }),
    'ReportProblemOutlined'
  ),
  o2 = hn(
    G.jsx('path', {
      d: 'M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z',
    }),
    'ErrorOutline'
  ),
  s2 = hn(
    G.jsx('path', {
      d: 'M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z',
    }),
    'InfoOutlined'
  );
var Rh;
const l2 = [
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
  c2 = (e) => {
    const { variant: t, color: r, severity: n, classes: a } = e,
      i = {
        root: ['root', `${t}${X(r || n)}`, `${t}`],
        icon: ['icon'],
        message: ['message'],
        action: ['action'],
      };
    return Le(i, r2, a);
  },
  u2 = ae(Br, {
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
    const r = e.palette.mode === 'light' ? Uc : Hc,
      n = e.palette.mode === 'light' ? Hc : Uc,
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
          [`& .${Ih.icon}`]: e.vars
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
          [`& .${Ih.icon}`]: e.vars
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
  f2 = ae('div', {
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
  d2 = ae('div', {
    name: 'MuiAlert',
    slot: 'Message',
    overridesResolver: (e, t) => t.message,
  })({ padding: '8px 0', minWidth: 0, overflow: 'auto' }),
  Dh = ae('div', {
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
  jh = {
    success: G.jsx(a2, { fontSize: 'inherit' }),
    warning: G.jsx(i2, { fontSize: 'inherit' }),
    error: G.jsx(o2, { fontSize: 'inherit' }),
    info: G.jsx(s2, { fontSize: 'inherit' }),
  },
  p2 = S.exports.forwardRef(function (t, r) {
    const n = je({ props: t, name: 'MuiAlert' }),
      {
        action: a,
        children: i,
        className: o,
        closeText: s = 'Close',
        color: l,
        icon: c,
        iconMapping: u = jh,
        onClose: f,
        role: d = 'alert',
        severity: h = 'success',
        variant: v = 'standard',
      } = n,
      p = $e(n, l2),
      m = I({}, n, { color: l, severity: h, variant: v }),
      y = c2(m);
    return G.jsxs(
      u2,
      I(
        {
          role: d,
          elevation: 0,
          ownerState: m,
          className: he(y.root, o),
          ref: r,
        },
        p,
        {
          children: [
            c !== !1
              ? G.jsx(f2, {
                  ownerState: m,
                  className: y.icon,
                  children: c || u[h] || jh[h],
                })
              : null,
            G.jsx(d2, { ownerState: m, className: y.message, children: i }),
            a != null
              ? G.jsx(Dh, { ownerState: m, className: y.action, children: a })
              : null,
            a == null && f
              ? G.jsx(Dh, {
                  ownerState: m,
                  className: y.action,
                  children: G.jsx(Or, {
                    size: 'small',
                    'aria-label': s,
                    title: s,
                    color: 'inherit',
                    onClick: f,
                    children: Rh || (Rh = G.jsx(jb, { fontSize: 'small' })),
                  }),
                })
              : null,
          ],
        }
      )
    );
  }),
  r0 = p2;
function h2(e) {
  return Be('MuiAlertTitle', e);
}
We('MuiAlertTitle', ['root']);
const v2 = ['className'],
  m2 = (e) => {
    const { classes: t } = e;
    return Le({ root: ['root'] }, h2, t);
  },
  g2 = ae(lt, {
    name: 'MuiAlertTitle',
    slot: 'Root',
    overridesResolver: (e, t) => t.root,
  })(({ theme: e }) => ({
    fontWeight: e.typography.fontWeightMedium,
    marginTop: -2,
  })),
  y2 = S.exports.forwardRef(function (t, r) {
    const n = je({ props: t, name: 'MuiAlertTitle' }),
      { className: a } = n,
      i = $e(n, v2),
      o = n,
      s = m2(o);
    return G.jsx(
      g2,
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
  n0 = y2;
var xd = {},
  b2 = rt.exports;
Object.defineProperty(xd, '__esModule', { value: !0 });
var Fi = (xd.default = void 0),
  x2 = b2(at()),
  w2 = nt(),
  _2 = (0, x2.default)(
    (0, w2.jsx)('path', {
      d: 'M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
    }),
    'Close'
  );
Fi = xd.default = _2;
const O2 = () =>
    g.createElement(
      r0,
      {
        severity: 'error',
        className: 'alert-box',
        variant: 'filled',
        id: 'guest-alert-box',
      },
      g.createElement(
        n0,
        null,
        'Error',
        g.createElement(Fi, {
          className: 'alert-close-icon',
          onClick: () => {
            document.getElementById('guest-alert-box').style.display = 'none';
          },
        })
      ),
      'Guest is not allowed to perform this action!'
    ),
  S2 = () => {
    const e = Er(),
      { open: t, text: r } = dt(oO);
    return g.createElement(
      r0,
      {
        severity: 'error',
        className: 'alert-box',
        variant: 'filled',
        sx: { display: t ? 'flex!important' : 'none!important' },
      },
      g.createElement(
        n0,
        null,
        'Error',
        g.createElement(Fi, {
          className: 'alert-close-icon',
          onClick: () => e(ab()),
        })
      ),
      r
    );
  },
  E2 = () => {
    const e = Er(),
      t = Vs('(prefers-color-scheme: dark)');
    S.exports.useEffect(() => {
      e(Jc(t ? 'dark' : 'light'));
    }, [t, e]);
    const { mode: r } = dt(Xf),
      n = g.useMemo(
        () => Sy({ palette: { mode: r === 'dark' ? 'dark' : 'light' } }),
        [r]
      );
    return (
      S.exports.useEffect(() => {
        be({ method: 'get', url: '/get-discount-rate' }, function (a) {
          e(Qy(a.data.value));
        });
      }, [e]),
      g.createElement(
        Aw,
        { theme: n },
        g.createElement(Cw, null),
        g.createElement(O2, null),
        g.createElement(S2, null),
        g.createElement(t2, null)
      )
    );
  };
function $2(e) {
  return Be('MuiDialog', e);
}
const A2 = We('MuiDialog', [
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
  oc = A2,
  C2 = S.exports.createContext({}),
  a0 = C2,
  P2 = [
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
  k2 = ae(Pw, {
    name: 'MuiDialog',
    slot: 'Backdrop',
    overrides: (e, t) => t.backdrop,
  })({ zIndex: -1 }),
  T2 = (e) => {
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
    return Le(o, $2, t);
  },
  M2 = ae(Cy, {
    name: 'MuiDialog',
    slot: 'Root',
    overridesResolver: (e, t) => t.root,
  })({ '@media print': { position: 'absolute !important' } }),
  I2 = ae('div', {
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
  R2 = ae(Br, {
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
        [`&.${oc.paperScrollBody}`]: {
          [e.breakpoints.down(Math.max(e.breakpoints.values.xs, 444) + 32 * 2)]:
            { maxWidth: 'calc(100% - 64px)' },
        },
      },
      t.maxWidth &&
        t.maxWidth !== 'xs' && {
          maxWidth: `${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`,
          [`&.${oc.paperScrollBody}`]: {
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
        [`&.${oc.paperScrollBody}`]: { margin: 0, maxWidth: '100%' },
      }
    )
  ),
  D2 = S.exports.forwardRef(function (t, r) {
    const n = je({ props: t, name: 'MuiDialog' }),
      a = Wn(),
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
        onClose: y,
        open: _,
        PaperComponent: x = Br,
        PaperProps: b = {},
        scroll: w = 'paper',
        TransitionComponent: O = kw,
        transitionDuration: E = i,
        TransitionProps: $,
      } = n,
      A = $e(n, P2),
      P = I({}, n, {
        disableEscapeKeyDown: d,
        fullScreen: h,
        fullWidth: v,
        maxWidth: p,
        scroll: w,
      }),
      C = T2(P),
      T = S.exports.useRef(),
      k = (N) => {
        T.current = N.target === N.currentTarget;
      },
      D = (N) => {
        !T.current ||
          ((T.current = null), m && m(N), y && y(N, 'backdropClick'));
      },
      j = Lf(s),
      R = S.exports.useMemo(() => ({ titleId: j }), [j]);
    return G.jsx(
      M2,
      I(
        {
          className: he(C.root, f),
          closeAfterTransition: !0,
          components: { Backdrop: k2 },
          componentsProps: { backdrop: I({ transitionDuration: E, as: l }, c) },
          disableEscapeKeyDown: d,
          onClose: y,
          open: _,
          ref: r,
          onClick: D,
          ownerState: P,
        },
        A,
        {
          children: G.jsx(
            O,
            I({ appear: !0, in: _, timeout: E, role: 'presentation' }, $, {
              children: G.jsx(I2, {
                className: he(C.container),
                onMouseDown: k,
                ownerState: P,
                children: G.jsx(
                  R2,
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
                      children: G.jsx(a0.Provider, { value: R, children: u }),
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
  ll = D2;
function j2(e) {
  return Be('MuiDialogActions', e);
}
We('MuiDialogActions', ['root', 'spacing']);
const N2 = ['className', 'disableSpacing'],
  L2 = (e) => {
    const { classes: t, disableSpacing: r } = e;
    return Le({ root: ['root', !r && 'spacing'] }, j2, t);
  },
  B2 = ae('div', {
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
  F2 = S.exports.forwardRef(function (t, r) {
    const n = je({ props: t, name: 'MuiDialogActions' }),
      { className: a, disableSpacing: i = !1 } = n,
      o = $e(n, N2),
      s = I({}, n, { disableSpacing: i }),
      l = L2(s);
    return G.jsx(B2, I({ className: he(l.root, a), ownerState: s, ref: r }, o));
  }),
  cl = F2;
function z2(e) {
  return Be('MuiDialogContent', e);
}
We('MuiDialogContent', ['root', 'dividers']);
function W2(e) {
  return Be('MuiDialogTitle', e);
}
const U2 = We('MuiDialogTitle', ['root']),
  H2 = U2,
  V2 = ['className', 'dividers'],
  G2 = (e) => {
    const { classes: t, dividers: r } = e;
    return Le({ root: ['root', r && 'dividers'] }, z2, t);
  },
  q2 = ae('div', {
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
        : { [`.${H2.root} + &`]: { paddingTop: 0 } }
    )
  ),
  Y2 = S.exports.forwardRef(function (t, r) {
    const n = je({ props: t, name: 'MuiDialogContent' }),
      { className: a, dividers: i = !1 } = n,
      o = $e(n, V2),
      s = I({}, n, { dividers: i }),
      l = G2(s);
    return G.jsx(q2, I({ className: he(l.root, a), ownerState: s, ref: r }, o));
  }),
  i0 = Y2,
  K2 = ['className', 'id'],
  X2 = (e) => {
    const { classes: t } = e;
    return Le({ root: ['root'] }, W2, t);
  },
  J2 = ae(lt, {
    name: 'MuiDialogTitle',
    slot: 'Root',
    overridesResolver: (e, t) => t.root,
  })({ padding: '16px 24px', flex: '0 0 auto' }),
  Z2 = S.exports.forwardRef(function (t, r) {
    const n = je({ props: t, name: 'MuiDialogTitle' }),
      { className: a, id: i } = n,
      o = $e(n, K2),
      s = n,
      l = X2(s),
      { titleId: c = i } = S.exports.useContext(a0);
    return G.jsx(
      J2,
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
  o0 = Z2,
  Q2 = S.exports.createContext(),
  s0 = Q2;
function ek(e) {
  return Be('MuiTable', e);
}
We('MuiTable', ['root', 'stickyHeader']);
const tk = ['className', 'component', 'padding', 'size', 'stickyHeader'],
  rk = (e) => {
    const { classes: t, stickyHeader: r } = e;
    return Le({ root: ['root', r && 'stickyHeader'] }, ek, t);
  },
  nk = ae('table', {
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
  Nh = 'table',
  ak = S.exports.forwardRef(function (t, r) {
    const n = je({ props: t, name: 'MuiTable' }),
      {
        className: a,
        component: i = Nh,
        padding: o = 'normal',
        size: s = 'medium',
        stickyHeader: l = !1,
      } = n,
      c = $e(n, tk),
      u = I({}, n, { component: i, padding: o, size: s, stickyHeader: l }),
      f = rk(u),
      d = S.exports.useMemo(
        () => ({ padding: o, size: s, stickyHeader: l }),
        [o, s, l]
      );
    return G.jsx(s0.Provider, {
      value: d,
      children: G.jsx(
        nk,
        I(
          {
            as: i,
            role: i === Nh ? null : 'table',
            ref: r,
            className: he(f.root, a),
            ownerState: u,
          },
          c
        )
      ),
    });
  }),
  ul = ak,
  ik = S.exports.createContext(),
  fl = ik;
function ok(e) {
  return Be('MuiTableBody', e);
}
We('MuiTableBody', ['root']);
const sk = ['className', 'component'],
  lk = (e) => {
    const { classes: t } = e;
    return Le({ root: ['root'] }, ok, t);
  },
  ck = ae('tbody', {
    name: 'MuiTableBody',
    slot: 'Root',
    overridesResolver: (e, t) => t.root,
  })({ display: 'table-row-group' }),
  uk = { variant: 'body' },
  Lh = 'tbody',
  fk = S.exports.forwardRef(function (t, r) {
    const n = je({ props: t, name: 'MuiTableBody' }),
      { className: a, component: i = Lh } = n,
      o = $e(n, sk),
      s = I({}, n, { component: i }),
      l = lk(s);
    return G.jsx(fl.Provider, {
      value: uk,
      children: G.jsx(
        ck,
        I(
          {
            className: he(l.root, a),
            as: i,
            ref: r,
            role: i === Lh ? null : 'rowgroup',
            ownerState: s,
          },
          o
        )
      ),
    });
  }),
  dl = fk;
function dk(e) {
  return Be('MuiTableCell', e);
}
const pk = We('MuiTableCell', [
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
  l0 = pk,
  hk = [
    'align',
    'className',
    'component',
    'padding',
    'scope',
    'size',
    'sortDirection',
    'variant',
  ],
  vk = (e) => {
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
    return Le(s, dk, t);
  },
  mk = ae('td', {
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
        ? Hc(ke(e.palette.divider, 1), 0.88)
        : Uc(ke(e.palette.divider, 1), 0.68)
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
        [`&.${l0.paddingCheckbox}`]: {
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
  gk = S.exports.forwardRef(function (t, r) {
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
      d = $e(n, hk),
      h = S.exports.useContext(s0),
      v = S.exports.useContext(fl),
      p = v && v.variant === 'head';
    let m;
    o ? (m = o) : (m = p ? 'th' : 'td');
    let y = l;
    !y && p && (y = 'col');
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
      b = vk(x);
    let w = null;
    return (
      u && (w = u === 'asc' ? 'ascending' : 'descending'),
      G.jsx(
        mk,
        I(
          {
            as: m,
            ref: r,
            className: he(b.root, i),
            'aria-sort': w,
            scope: y,
            ownerState: x,
          },
          d
        )
      )
    );
  }),
  ge = gk;
function yk(e) {
  return Be('MuiTableContainer', e);
}
We('MuiTableContainer', ['root']);
const bk = ['className', 'component'],
  xk = (e) => {
    const { classes: t } = e;
    return Le({ root: ['root'] }, yk, t);
  },
  wk = ae('div', {
    name: 'MuiTableContainer',
    slot: 'Root',
    overridesResolver: (e, t) => t.root,
  })({ width: '100%', overflowX: 'auto' }),
  _k = S.exports.forwardRef(function (t, r) {
    const n = je({ props: t, name: 'MuiTableContainer' }),
      { className: a, component: i = 'div' } = n,
      o = $e(n, bk),
      s = I({}, n, { component: i }),
      l = xk(s);
    return G.jsx(
      wk,
      I({ ref: r, as: i, className: he(l.root, a), ownerState: s }, o)
    );
  }),
  pl = _k;
function Ok(e) {
  return Be('MuiTableHead', e);
}
We('MuiTableHead', ['root']);
const Sk = ['className', 'component'],
  Ek = (e) => {
    const { classes: t } = e;
    return Le({ root: ['root'] }, Ok, t);
  },
  $k = ae('thead', {
    name: 'MuiTableHead',
    slot: 'Root',
    overridesResolver: (e, t) => t.root,
  })({ display: 'table-header-group' }),
  Ak = { variant: 'head' },
  Bh = 'thead',
  Ck = S.exports.forwardRef(function (t, r) {
    const n = je({ props: t, name: 'MuiTableHead' }),
      { className: a, component: i = Bh } = n,
      o = $e(n, Sk),
      s = I({}, n, { component: i }),
      l = Ek(s);
    return G.jsx(fl.Provider, {
      value: Ak,
      children: G.jsx(
        $k,
        I(
          {
            as: i,
            className: he(l.root, a),
            ref: r,
            role: i === Bh ? null : 'rowgroup',
            ownerState: s,
          },
          o
        )
      ),
    });
  }),
  hl = Ck;
function Pk(e) {
  return Be('MuiTableRow', e);
}
const kk = We('MuiTableRow', ['root', 'selected', 'hover', 'head', 'footer']),
  Fh = kk,
  Tk = ['className', 'component', 'hover', 'selected'],
  Mk = (e) => {
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
      Pk,
      t
    );
  },
  Ik = ae('tr', {
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
    [`&.${Fh.hover}:hover`]: {
      backgroundColor: (e.vars || e).palette.action.hover,
    },
    [`&.${Fh.selected}`]: {
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
  zh = 'tr',
  Rk = S.exports.forwardRef(function (t, r) {
    const n = je({ props: t, name: 'MuiTableRow' }),
      { className: a, component: i = zh, hover: o = !1, selected: s = !1 } = n,
      l = $e(n, Tk),
      c = S.exports.useContext(fl),
      u = I({}, n, {
        component: i,
        hover: o,
        selected: s,
        head: c && c.variant === 'head',
        footer: c && c.variant === 'footer',
      }),
      f = Mk(u);
    return G.jsx(
      Ik,
      I(
        {
          as: i,
          ref: r,
          className: he(f.root, a),
          role: i === zh ? null : 'row',
          ownerState: u,
        },
        l
      )
    );
  }),
  Wt = Rk;
var wd = {},
  Dk = rt.exports;
Object.defineProperty(wd, '__esModule', { value: !0 });
var jr = (wd.default = void 0),
  jk = Dk(at()),
  Nk = nt(),
  Lk = (0, jk.default)(
    (0, Nk.jsx)('path', {
      d: 'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z',
    }),
    'AddBox'
  );
jr = wd.default = Lk;
var _d = {},
  Bk = rt.exports;
Object.defineProperty(_d, '__esModule', { value: !0 });
var Zr = (_d.default = void 0),
  Fk = Bk(at()),
  zk = nt(),
  Wk = (0, Fk.default)(
    (0, zk.jsx)('path', {
      d: 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z',
    }),
    'Edit'
  );
Zr = _d.default = Wk;
const Uk = () => {
  const { stockId: e, disableStep: t } = dt(fr),
    [r, n] = S.exports.useState(''),
    [a, i] = S.exports.useState(''),
    [o, s] = S.exports.useState(''),
    l = Er(),
    { editStockId: c } = Sr(),
    [u, f] = S.exports.useState(''),
    [d, h] = S.exports.useState(),
    [v, p] = S.exports.useState(0),
    [m, y] = S.exports.useState('');
  S.exports.useEffect(() => {
    c &&
      be({ method: 'get', url: '/stocks/' + c }, function (x) {
        var w;
        const b = x.data;
        n(b.ticker_symbol),
          i(b.company_name),
          s(b.website),
          f(b.vietstock_crawl_link),
          p(parseFloat(b.current_year_stock_dividend) || 0),
          y((w = b.stock_note) != null ? w : ''),
          l(wt(['CompanyInfo', !0]));
      });
  }, [c, l]);
  const _ = () => {
    e
      ? be(
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
            l(wt(['CompanyInfo', !0]));
          }
        )
      : be(
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
            l(wt(['CompanyInfo', !0])),
              l(wt(['CheckTenets', !1])),
              l(wt(['GrowthRate', !1])),
              l(Xc(x.data)),
              h(void 0);
          },
          function (x) {
            x.response.data.errors && h(x.response.data.errors);
          }
        );
  };
  return g.createElement(
    Ne,
    { sx: { flexGrow: 1, textAlign: 'left', mb: 7, mt: 4 } },
    g.createElement(
      ur,
      null,
      g.createElement(lt, { variant: 'h5' }, 'Step 1: Company Information')
    ),
    g.createElement(
      Z,
      { container: !0, spacing: 2, sx: { mt: 1 } },
      g.createElement(
        Z,
        { item: !0, xs: 12, lg: 3 },
        g.createElement(ut, {
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
      g.createElement(
        Z,
        { item: !0, xs: 12, lg: 5 },
        g.createElement(ut, {
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
      g.createElement(
        Z,
        { item: !0, xs: 12, lg: 4 },
        g.createElement(ut, {
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
    g.createElement(
      Z,
      { container: !0, spacing: 2, sx: { mt: 1 } },
      g.createElement(
        Z,
        { item: !0, xs: 12, lg: 6 },
        g.createElement(ut, {
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
      g.createElement(
        Z,
        { item: !0, xs: 12, lg: 6 },
        g.createElement(ut, {
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
    g.createElement(
      Z,
      { container: !0, spacing: 2, sx: { mt: 3 } },
      g.createElement(
        Z,
        { item: !0, xs: 12, lg: 12 },
        g.createElement(ut, {
          label: 'Stock Note',
          multiline: !0,
          rows: 3,
          fullWidth: !0,
          value: m,
          onChange: (x) => y(x.target.value),
          disabled: t.CompanyInfo,
        })
      )
    ),
    g.createElement(
      Z,
      { container: !0, spacing: 2, sx: { mt: 1 } },
      g.createElement(
        Z,
        { item: !0, xs: 12, lg: 12, sx: { textAlign: 'center' } },
        t.CompanyInfo
          ? g.createElement(
              Or,
              {
                color: 'primary',
                size: 'large',
                onClick: () => l(wt(['CompanyInfo', !1])),
              },
              g.createElement(Zr, { sx: { fontSize: 50 } })
            )
          : g.createElement(
              Or,
              { color: 'primary', size: 'large', onClick: _ },
              g.createElement(jr, { sx: { fontSize: 50 } })
            )
      )
    )
  );
};
var Od = {},
  Hk = rt.exports;
Object.defineProperty(Od, '__esModule', { value: !0 });
var zi = (Od.default = void 0),
  Vk = Hk(at()),
  Gk = nt(),
  qk = (0, Vk.default)(
    (0, Gk.jsx)('path', {
      d: 'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z',
    }),
    'Delete'
  );
zi = Od.default = qk;
var c0 = { exports: {} };
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
})(c0);
const Ze = c0.exports;
function Yk(e) {
  var t = typeof e;
  return e != null && (t == 'object' || t == 'function');
}
var rr = Yk;
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
var Kk = ['viewBox', 'children'],
  Xk = [
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
  Sd = [
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
    if ((S.exports.isValidElement(t) && (a = t.props), !rr(a))) return null;
    var i = {};
    return (
      Object.keys(a).forEach(function (o) {
        (Xk.includes(o) || (n && Kk.includes(o)) || (r && Sd.includes(o))) &&
          (i[o] = a[o]);
      }),
      i
    );
  },
  Zo = function (t, r) {
    if (!t || typeof t == 'function' || typeof t == 'boolean') return null;
    var n = t;
    if ((S.exports.isValidElement(t) && (n = t.props), !rr(n))) return null;
    var a = {};
    return (
      Object.keys(n).forEach(function (i) {
        Sd.includes(i) &&
          (a[i] =
            r ||
            function (o) {
              return n[i](n, o);
            });
      }),
      a
    );
  },
  Jk = function (t, r, n) {
    return function (a) {
      return t(r, n, a), null;
    };
  },
  Qo = function (t, r, n) {
    if (!rr(t) || wo(t) !== 'object') return null;
    var a = null;
    return (
      Object.keys(t).forEach(function (i) {
        var o = t[i];
        Sd.includes(i) &&
          typeof o == 'function' &&
          (a || (a = {}), (a[i] = Jk(o, r, n)));
      }),
      a
    );
  };
function nu() {
  return (
    (nu =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    nu.apply(this, arguments)
  );
}
function Zk(e, t) {
  if (e == null) return {};
  var r = Qk(e, t),
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
function Qk(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    a,
    i;
  for (i = 0; i < n.length; i++)
    (a = n[i]), !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function au(e) {
  var t = e.children,
    r = e.width,
    n = e.height,
    a = e.viewBox,
    i = e.className,
    o = e.style,
    s = Zk(e, ['children', 'width', 'height', 'viewBox', 'className', 'style']),
    l = a || { width: r, height: n, x: 0, y: 0 },
    c = Ze('recharts-surface', i);
  return g.createElement(
    'svg',
    nu({}, ze(s, !0, !0), {
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
    g.createElement('title', null, e.title),
    g.createElement('desc', null, e.desc),
    t
  );
}
function iu() {
  return (
    (iu =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    iu.apply(this, arguments)
  );
}
function eT(e, t) {
  if (e == null) return {};
  var r = tT(e, t),
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
function tT(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    a,
    i;
  for (i = 0; i < n.length; i++)
    (a = n[i]), !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var Dt = g.forwardRef(function (e, t) {
    var r = e.children,
      n = e.className,
      a = eT(e, ['children', 'className']),
      i = Ze('recharts-layer', n);
    return g.createElement('g', iu({ className: i }, ze(a, !0), { ref: t }), r);
  }),
  rT = typeof ao == 'object' && ao && ao.Object === Object && ao,
  u0 = rT,
  nT = u0,
  aT = typeof self == 'object' && self && self.Object === Object && self,
  iT = nT || aT || Function('return this')(),
  Fr = iT,
  oT = Fr,
  sT = oT.Symbol,
  Wi = sT,
  Wh = Wi,
  f0 = Object.prototype,
  lT = f0.hasOwnProperty,
  cT = f0.toString,
  Ka = Wh ? Wh.toStringTag : void 0;
function uT(e) {
  var t = lT.call(e, Ka),
    r = e[Ka];
  try {
    e[Ka] = void 0;
    var n = !0;
  } catch {}
  var a = cT.call(e);
  return n && (t ? (e[Ka] = r) : delete e[Ka]), a;
}
var fT = uT,
  dT = Object.prototype,
  pT = dT.toString;
function hT(e) {
  return pT.call(e);
}
var vT = hT,
  Uh = Wi,
  mT = fT,
  gT = vT,
  yT = '[object Null]',
  bT = '[object Undefined]',
  Hh = Uh ? Uh.toStringTag : void 0;
function xT(e) {
  return e == null
    ? e === void 0
      ? bT
      : yT
    : Hh && Hh in Object(e)
    ? mT(e)
    : gT(e);
}
var mn = xT,
  wT = mn,
  _T = rr,
  OT = '[object AsyncFunction]',
  ST = '[object Function]',
  ET = '[object GeneratorFunction]',
  $T = '[object Proxy]';
function AT(e) {
  if (!_T(e)) return !1;
  var t = wT(e);
  return t == ST || t == ET || t == OT || t == $T;
}
var pe = AT;
function CT() {
  (this.__data__ = []), (this.size = 0);
}
var PT = CT;
function kT(e, t) {
  return e === t || (e !== e && t !== t);
}
var Ed = kT,
  TT = Ed;
function MT(e, t) {
  for (var r = e.length; r--; ) if (TT(e[r][0], t)) return r;
  return -1;
}
var vl = MT,
  IT = vl,
  RT = Array.prototype,
  DT = RT.splice;
function jT(e) {
  var t = this.__data__,
    r = IT(t, e);
  if (r < 0) return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : DT.call(t, r, 1), --this.size, !0;
}
var NT = jT,
  LT = vl;
function BT(e) {
  var t = this.__data__,
    r = LT(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var FT = BT,
  zT = vl;
function WT(e) {
  return zT(this.__data__, e) > -1;
}
var UT = WT,
  HT = vl;
function VT(e, t) {
  var r = this.__data__,
    n = HT(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
}
var GT = VT,
  qT = PT,
  YT = NT,
  KT = FT,
  XT = UT,
  JT = GT;
function Ma(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ma.prototype.clear = qT;
Ma.prototype.delete = YT;
Ma.prototype.get = KT;
Ma.prototype.has = XT;
Ma.prototype.set = JT;
var ml = Ma,
  ZT = ml;
function QT() {
  (this.__data__ = new ZT()), (this.size = 0);
}
var eM = QT;
function tM(e) {
  var t = this.__data__,
    r = t.delete(e);
  return (this.size = t.size), r;
}
var rM = tM;
function nM(e) {
  return this.__data__.get(e);
}
var aM = nM;
function iM(e) {
  return this.__data__.has(e);
}
var oM = iM,
  sM = Fr,
  lM = sM['__core-js_shared__'],
  cM = lM,
  sc = cM,
  Vh = (function () {
    var e = /[^.]+$/.exec((sc && sc.keys && sc.keys.IE_PROTO) || '');
    return e ? 'Symbol(src)_1.' + e : '';
  })();
function uM(e) {
  return !!Vh && Vh in e;
}
var fM = uM,
  dM = Function.prototype,
  pM = dM.toString;
function hM(e) {
  if (e != null) {
    try {
      return pM.call(e);
    } catch {}
    try {
      return e + '';
    } catch {}
  }
  return '';
}
var d0 = hM,
  vM = pe,
  mM = fM,
  gM = rr,
  yM = d0,
  bM = /[\\^$.*+?()[\]{}|]/g,
  xM = /^\[object .+?Constructor\]$/,
  wM = Function.prototype,
  _M = Object.prototype,
  OM = wM.toString,
  SM = _M.hasOwnProperty,
  EM = RegExp(
    '^' +
      OM.call(SM)
        .replace(bM, '\\$&')
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          '$1.*?'
        ) +
      '$'
  );
function $M(e) {
  if (!gM(e) || mM(e)) return !1;
  var t = vM(e) ? EM : xM;
  return t.test(yM(e));
}
var AM = $M;
function CM(e, t) {
  return e == null ? void 0 : e[t];
}
var PM = CM,
  kM = AM,
  TM = PM;
function MM(e, t) {
  var r = TM(e, t);
  return kM(r) ? r : void 0;
}
var Hn = MM,
  IM = Hn,
  RM = Fr,
  DM = IM(RM, 'Map'),
  $d = DM,
  jM = Hn,
  NM = jM(Object, 'create'),
  gl = NM,
  Gh = gl;
function LM() {
  (this.__data__ = Gh ? Gh(null) : {}), (this.size = 0);
}
var BM = LM;
function FM(e) {
  var t = this.has(e) && delete this.__data__[e];
  return (this.size -= t ? 1 : 0), t;
}
var zM = FM,
  WM = gl,
  UM = '__lodash_hash_undefined__',
  HM = Object.prototype,
  VM = HM.hasOwnProperty;
function GM(e) {
  var t = this.__data__;
  if (WM) {
    var r = t[e];
    return r === UM ? void 0 : r;
  }
  return VM.call(t, e) ? t[e] : void 0;
}
var qM = GM,
  YM = gl,
  KM = Object.prototype,
  XM = KM.hasOwnProperty;
function JM(e) {
  var t = this.__data__;
  return YM ? t[e] !== void 0 : XM.call(t, e);
}
var ZM = JM,
  QM = gl,
  eI = '__lodash_hash_undefined__';
function tI(e, t) {
  var r = this.__data__;
  return (
    (this.size += this.has(e) ? 0 : 1),
    (r[e] = QM && t === void 0 ? eI : t),
    this
  );
}
var rI = tI,
  nI = BM,
  aI = zM,
  iI = qM,
  oI = ZM,
  sI = rI;
function Ia(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ia.prototype.clear = nI;
Ia.prototype.delete = aI;
Ia.prototype.get = iI;
Ia.prototype.has = oI;
Ia.prototype.set = sI;
var lI = Ia,
  qh = lI,
  cI = ml,
  uI = $d;
function fI() {
  (this.size = 0),
    (this.__data__ = {
      hash: new qh(),
      map: new (uI || cI)(),
      string: new qh(),
    });
}
var dI = fI;
function pI(e) {
  var t = typeof e;
  return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
    ? e !== '__proto__'
    : e === null;
}
var hI = pI,
  vI = hI;
function mI(e, t) {
  var r = e.__data__;
  return vI(t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map;
}
var yl = mI,
  gI = yl;
function yI(e) {
  var t = gI(this, e).delete(e);
  return (this.size -= t ? 1 : 0), t;
}
var bI = yI,
  xI = yl;
function wI(e) {
  return xI(this, e).get(e);
}
var _I = wI,
  OI = yl;
function SI(e) {
  return OI(this, e).has(e);
}
var EI = SI,
  $I = yl;
function AI(e, t) {
  var r = $I(this, e),
    n = r.size;
  return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
}
var CI = AI,
  PI = dI,
  kI = bI,
  TI = _I,
  MI = EI,
  II = CI;
function Ra(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ra.prototype.clear = PI;
Ra.prototype.delete = kI;
Ra.prototype.get = TI;
Ra.prototype.has = MI;
Ra.prototype.set = II;
var Ad = Ra,
  RI = ml,
  DI = $d,
  jI = Ad,
  NI = 200;
function LI(e, t) {
  var r = this.__data__;
  if (r instanceof RI) {
    var n = r.__data__;
    if (!DI || n.length < NI - 1)
      return n.push([e, t]), (this.size = ++r.size), this;
    r = this.__data__ = new jI(n);
  }
  return r.set(e, t), (this.size = r.size), this;
}
var BI = LI,
  FI = ml,
  zI = eM,
  WI = rM,
  UI = aM,
  HI = oM,
  VI = BI;
function Da(e) {
  var t = (this.__data__ = new FI(e));
  this.size = t.size;
}
Da.prototype.clear = zI;
Da.prototype.delete = WI;
Da.prototype.get = UI;
Da.prototype.has = HI;
Da.prototype.set = VI;
var p0 = Da,
  GI = '__lodash_hash_undefined__';
function qI(e) {
  return this.__data__.set(e, GI), this;
}
var YI = qI;
function KI(e) {
  return this.__data__.has(e);
}
var XI = KI,
  JI = Ad,
  ZI = YI,
  QI = XI;
function es(e) {
  var t = -1,
    r = e == null ? 0 : e.length;
  for (this.__data__ = new JI(); ++t < r; ) this.add(e[t]);
}
es.prototype.add = es.prototype.push = ZI;
es.prototype.has = QI;
var h0 = es;
function eR(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e)) return !0;
  return !1;
}
var v0 = eR;
function tR(e, t) {
  return e.has(t);
}
var m0 = tR,
  rR = h0,
  nR = v0,
  aR = m0,
  iR = 1,
  oR = 2;
function sR(e, t, r, n, a, i) {
  var o = r & iR,
    s = e.length,
    l = t.length;
  if (s != l && !(o && l > s)) return !1;
  var c = i.get(e),
    u = i.get(t);
  if (c && u) return c == t && u == e;
  var f = -1,
    d = !0,
    h = r & oR ? new rR() : void 0;
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
        !nR(t, function (y, _) {
          if (!aR(h, _) && (v === y || a(v, y, r, n, i))) return h.push(_);
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
var g0 = sR,
  lR = Fr,
  cR = lR.Uint8Array,
  uR = cR;
function fR(e) {
  var t = -1,
    r = Array(e.size);
  return (
    e.forEach(function (n, a) {
      r[++t] = [a, n];
    }),
    r
  );
}
var dR = fR;
function pR(e) {
  var t = -1,
    r = Array(e.size);
  return (
    e.forEach(function (n) {
      r[++t] = n;
    }),
    r
  );
}
var Cd = pR,
  Yh = Wi,
  Kh = uR,
  hR = Ed,
  vR = g0,
  mR = dR,
  gR = Cd,
  yR = 1,
  bR = 2,
  xR = '[object Boolean]',
  wR = '[object Date]',
  _R = '[object Error]',
  OR = '[object Map]',
  SR = '[object Number]',
  ER = '[object RegExp]',
  $R = '[object Set]',
  AR = '[object String]',
  CR = '[object Symbol]',
  PR = '[object ArrayBuffer]',
  kR = '[object DataView]',
  Xh = Yh ? Yh.prototype : void 0,
  lc = Xh ? Xh.valueOf : void 0;
function TR(e, t, r, n, a, i, o) {
  switch (r) {
    case kR:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      (e = e.buffer), (t = t.buffer);
    case PR:
      return !(e.byteLength != t.byteLength || !i(new Kh(e), new Kh(t)));
    case xR:
    case wR:
    case SR:
      return hR(+e, +t);
    case _R:
      return e.name == t.name && e.message == t.message;
    case ER:
    case AR:
      return e == t + '';
    case OR:
      var s = mR;
    case $R:
      var l = n & yR;
      if ((s || (s = gR), e.size != t.size && !l)) return !1;
      var c = o.get(e);
      if (c) return c == t;
      (n |= bR), o.set(e, t);
      var u = vR(s(e), s(t), n, a, i, o);
      return o.delete(e), u;
    case CR:
      if (lc) return lc.call(e) == lc.call(t);
  }
  return !1;
}
var MR = TR;
function IR(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; ) e[a + r] = t[r];
  return e;
}
var y0 = IR,
  RR = Array.isArray,
  Me = RR,
  DR = y0,
  jR = Me;
function NR(e, t, r) {
  var n = t(e);
  return jR(e) ? n : DR(n, r(e));
}
var LR = NR;
function BR(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, i = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (i[a++] = o);
  }
  return i;
}
var FR = BR;
function zR() {
  return [];
}
var WR = zR,
  UR = FR,
  HR = WR,
  VR = Object.prototype,
  GR = VR.propertyIsEnumerable,
  Jh = Object.getOwnPropertySymbols,
  qR = Jh
    ? function (e) {
        return e == null
          ? []
          : ((e = Object(e)),
            UR(Jh(e), function (t) {
              return GR.call(e, t);
            }));
      }
    : HR,
  YR = qR;
function KR(e, t) {
  for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
  return n;
}
var XR = KR;
function JR(e) {
  return e != null && typeof e == 'object';
}
var gn = JR,
  ZR = mn,
  QR = gn,
  eD = '[object Arguments]';
function tD(e) {
  return QR(e) && ZR(e) == eD;
}
var rD = tD,
  Zh = rD,
  nD = gn,
  b0 = Object.prototype,
  aD = b0.hasOwnProperty,
  iD = b0.propertyIsEnumerable,
  oD = Zh(
    (function () {
      return arguments;
    })()
  )
    ? Zh
    : function (e) {
        return nD(e) && aD.call(e, 'callee') && !iD.call(e, 'callee');
      },
  Pd = oD,
  ts = { exports: {} };
function sD() {
  return !1;
}
var lD = sD;
(function (e, t) {
  var r = Fr,
    n = lD,
    a = t && !t.nodeType && t,
    i = a && !0 && e && !e.nodeType && e,
    o = i && i.exports === a,
    s = o ? r.Buffer : void 0,
    l = s ? s.isBuffer : void 0,
    c = l || n;
  e.exports = c;
})(ts, ts.exports);
var cD = 9007199254740991,
  uD = /^(?:0|[1-9]\d*)$/;
function fD(e, t) {
  var r = typeof e;
  return (
    (t = t == null ? cD : t),
    !!t &&
      (r == 'number' || (r != 'symbol' && uD.test(e))) &&
      e > -1 &&
      e % 1 == 0 &&
      e < t
  );
}
var kd = fD,
  dD = 9007199254740991;
function pD(e) {
  return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= dD;
}
var Td = pD,
  hD = mn,
  vD = Td,
  mD = gn,
  gD = '[object Arguments]',
  yD = '[object Array]',
  bD = '[object Boolean]',
  xD = '[object Date]',
  wD = '[object Error]',
  _D = '[object Function]',
  OD = '[object Map]',
  SD = '[object Number]',
  ED = '[object Object]',
  $D = '[object RegExp]',
  AD = '[object Set]',
  CD = '[object String]',
  PD = '[object WeakMap]',
  kD = '[object ArrayBuffer]',
  TD = '[object DataView]',
  MD = '[object Float32Array]',
  ID = '[object Float64Array]',
  RD = '[object Int8Array]',
  DD = '[object Int16Array]',
  jD = '[object Int32Array]',
  ND = '[object Uint8Array]',
  LD = '[object Uint8ClampedArray]',
  BD = '[object Uint16Array]',
  FD = '[object Uint32Array]',
  Xe = {};
Xe[MD] =
  Xe[ID] =
  Xe[RD] =
  Xe[DD] =
  Xe[jD] =
  Xe[ND] =
  Xe[LD] =
  Xe[BD] =
  Xe[FD] =
    !0;
Xe[gD] =
  Xe[yD] =
  Xe[kD] =
  Xe[bD] =
  Xe[TD] =
  Xe[xD] =
  Xe[wD] =
  Xe[_D] =
  Xe[OD] =
  Xe[SD] =
  Xe[ED] =
  Xe[$D] =
  Xe[AD] =
  Xe[CD] =
  Xe[PD] =
    !1;
function zD(e) {
  return mD(e) && vD(e.length) && !!Xe[hD(e)];
}
var WD = zD;
function UD(e) {
  return function (t) {
    return e(t);
  };
}
var x0 = UD,
  ou = { exports: {} };
(function (e, t) {
  var r = u0,
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
})(ou, ou.exports);
var HD = WD,
  VD = x0,
  Qh = ou.exports,
  ev = Qh && Qh.isTypedArray,
  GD = ev ? VD(ev) : HD,
  w0 = GD,
  qD = XR,
  YD = Pd,
  KD = Me,
  XD = ts.exports,
  JD = kd,
  ZD = w0,
  QD = Object.prototype,
  ej = QD.hasOwnProperty;
function tj(e, t) {
  var r = KD(e),
    n = !r && YD(e),
    a = !r && !n && XD(e),
    i = !r && !n && !a && ZD(e),
    o = r || n || a || i,
    s = o ? qD(e.length, String) : [],
    l = s.length;
  for (var c in e)
    (t || ej.call(e, c)) &&
      !(
        o &&
        (c == 'length' ||
          (a && (c == 'offset' || c == 'parent')) ||
          (i && (c == 'buffer' || c == 'byteLength' || c == 'byteOffset')) ||
          JD(c, l))
      ) &&
      s.push(c);
  return s;
}
var rj = tj,
  nj = Object.prototype;
function aj(e) {
  var t = e && e.constructor,
    r = (typeof t == 'function' && t.prototype) || nj;
  return e === r;
}
var ij = aj;
function oj(e, t) {
  return function (r) {
    return e(t(r));
  };
}
var sj = oj,
  lj = sj,
  cj = lj(Object.keys, Object),
  uj = cj,
  fj = ij,
  dj = uj,
  pj = Object.prototype,
  hj = pj.hasOwnProperty;
function vj(e) {
  if (!fj(e)) return dj(e);
  var t = [];
  for (var r in Object(e)) hj.call(e, r) && r != 'constructor' && t.push(r);
  return t;
}
var mj = vj,
  gj = pe,
  yj = Td;
function bj(e) {
  return e != null && yj(e.length) && !gj(e);
}
var Ui = bj,
  xj = rj,
  wj = mj,
  _j = Ui;
function Oj(e) {
  return _j(e) ? xj(e) : wj(e);
}
var bl = Oj,
  Sj = LR,
  Ej = YR,
  $j = bl;
function Aj(e) {
  return Sj(e, $j, Ej);
}
var Cj = Aj,
  tv = Cj,
  Pj = 1,
  kj = Object.prototype,
  Tj = kj.hasOwnProperty;
function Mj(e, t, r, n, a, i) {
  var o = r & Pj,
    s = tv(e),
    l = s.length,
    c = tv(t),
    u = c.length;
  if (l != u && !o) return !1;
  for (var f = l; f--; ) {
    var d = s[f];
    if (!(o ? d in t : Tj.call(t, d))) return !1;
  }
  var h = i.get(e),
    v = i.get(t);
  if (h && v) return h == t && v == e;
  var p = !0;
  i.set(e, t), i.set(t, e);
  for (var m = o; ++f < l; ) {
    d = s[f];
    var y = e[d],
      _ = t[d];
    if (n) var x = o ? n(_, y, d, t, e, i) : n(y, _, d, e, t, i);
    if (!(x === void 0 ? y === _ || a(y, _, r, n, i) : x)) {
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
var Ij = Mj,
  Rj = Hn,
  Dj = Fr,
  jj = Rj(Dj, 'DataView'),
  Nj = jj,
  Lj = Hn,
  Bj = Fr,
  Fj = Lj(Bj, 'Promise'),
  zj = Fj,
  Wj = Hn,
  Uj = Fr,
  Hj = Wj(Uj, 'Set'),
  _0 = Hj,
  Vj = Hn,
  Gj = Fr,
  qj = Vj(Gj, 'WeakMap'),
  Yj = qj,
  su = Nj,
  lu = $d,
  cu = zj,
  uu = _0,
  fu = Yj,
  O0 = mn,
  ja = d0,
  rv = '[object Map]',
  Kj = '[object Object]',
  nv = '[object Promise]',
  av = '[object Set]',
  iv = '[object WeakMap]',
  ov = '[object DataView]',
  Xj = ja(su),
  Jj = ja(lu),
  Zj = ja(cu),
  Qj = ja(uu),
  eN = ja(fu),
  _n = O0;
((su && _n(new su(new ArrayBuffer(1))) != ov) ||
  (lu && _n(new lu()) != rv) ||
  (cu && _n(cu.resolve()) != nv) ||
  (uu && _n(new uu()) != av) ||
  (fu && _n(new fu()) != iv)) &&
  (_n = function (e) {
    var t = O0(e),
      r = t == Kj ? e.constructor : void 0,
      n = r ? ja(r) : '';
    if (n)
      switch (n) {
        case Xj:
          return ov;
        case Jj:
          return rv;
        case Zj:
          return nv;
        case Qj:
          return av;
        case eN:
          return iv;
      }
    return t;
  });
var tN = _n,
  cc = p0,
  rN = g0,
  nN = MR,
  aN = Ij,
  sv = tN,
  lv = Me,
  cv = ts.exports,
  iN = w0,
  oN = 1,
  uv = '[object Arguments]',
  fv = '[object Array]',
  so = '[object Object]',
  sN = Object.prototype,
  dv = sN.hasOwnProperty;
function lN(e, t, r, n, a, i) {
  var o = lv(e),
    s = lv(t),
    l = o ? fv : sv(e),
    c = s ? fv : sv(t);
  (l = l == uv ? so : l), (c = c == uv ? so : c);
  var u = l == so,
    f = c == so,
    d = l == c;
  if (d && cv(e)) {
    if (!cv(t)) return !1;
    (o = !0), (u = !1);
  }
  if (d && !u)
    return (
      i || (i = new cc()),
      o || iN(e) ? rN(e, t, r, n, a, i) : nN(e, t, l, r, n, a, i)
    );
  if (!(r & oN)) {
    var h = u && dv.call(e, '__wrapped__'),
      v = f && dv.call(t, '__wrapped__');
    if (h || v) {
      var p = h ? e.value() : e,
        m = v ? t.value() : t;
      return i || (i = new cc()), a(p, m, r, n, i);
    }
  }
  return d ? (i || (i = new cc()), aN(e, t, r, n, a, i)) : !1;
}
var cN = lN,
  uN = cN,
  pv = gn;
function S0(e, t, r, n, a) {
  return e === t
    ? !0
    : e == null || t == null || (!pv(e) && !pv(t))
    ? e !== e && t !== t
    : uN(e, t, r, n, S0, a);
}
var Md = S0,
  fN = p0,
  dN = Md,
  pN = 1,
  hN = 2;
function vN(e, t, r, n) {
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
      var f = new fN();
      if (n) var d = n(c, u, l, e, t, f);
      if (!(d === void 0 ? dN(u, c, pN | hN, n, f) : d)) return !1;
    }
  }
  return !0;
}
var mN = vN,
  gN = rr;
function yN(e) {
  return e === e && !gN(e);
}
var E0 = yN,
  bN = E0,
  xN = bl;
function wN(e) {
  for (var t = xN(e), r = t.length; r--; ) {
    var n = t[r],
      a = e[n];
    t[r] = [n, a, bN(a)];
  }
  return t;
}
var _N = wN;
function ON(e, t) {
  return function (r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var $0 = ON,
  SN = mN,
  EN = _N,
  $N = $0;
function AN(e) {
  var t = EN(e);
  return t.length == 1 && t[0][2]
    ? $N(t[0][0], t[0][1])
    : function (r) {
        return r === e || SN(r, e, t);
      };
}
var CN = AN,
  PN = mn,
  kN = gn,
  TN = '[object Symbol]';
function MN(e) {
  return typeof e == 'symbol' || (kN(e) && PN(e) == TN);
}
var Na = MN,
  IN = Me,
  RN = Na,
  DN = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  jN = /^\w*$/;
function NN(e, t) {
  if (IN(e)) return !1;
  var r = typeof e;
  return r == 'number' || r == 'symbol' || r == 'boolean' || e == null || RN(e)
    ? !0
    : jN.test(e) || !DN.test(e) || (t != null && e in Object(t));
}
var Id = NN,
  A0 = Ad,
  LN = 'Expected a function';
function Rd(e, t) {
  if (typeof e != 'function' || (t != null && typeof t != 'function'))
    throw new TypeError(LN);
  var r = function () {
    var n = arguments,
      a = t ? t.apply(this, n) : n[0],
      i = r.cache;
    if (i.has(a)) return i.get(a);
    var o = e.apply(this, n);
    return (r.cache = i.set(a, o) || i), o;
  };
  return (r.cache = new (Rd.Cache || A0)()), r;
}
Rd.Cache = A0;
var BN = Rd,
  FN = BN,
  zN = 500;
function WN(e) {
  var t = FN(e, function (n) {
      return r.size === zN && r.clear(), n;
    }),
    r = t.cache;
  return t;
}
var UN = WN,
  HN = UN,
  VN =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  GN = /\\(\\)?/g,
  qN = HN(function (e) {
    var t = [];
    return (
      e.charCodeAt(0) === 46 && t.push(''),
      e.replace(VN, function (r, n, a, i) {
        t.push(a ? i.replace(GN, '$1') : n || r);
      }),
      t
    );
  }),
  YN = qN;
function KN(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
    a[r] = t(e[r], r, e);
  return a;
}
var Dd = KN,
  hv = Wi,
  XN = Dd,
  JN = Me,
  ZN = Na,
  QN = 1 / 0,
  vv = hv ? hv.prototype : void 0,
  mv = vv ? vv.toString : void 0;
function C0(e) {
  if (typeof e == 'string') return e;
  if (JN(e)) return XN(e, C0) + '';
  if (ZN(e)) return mv ? mv.call(e) : '';
  var t = e + '';
  return t == '0' && 1 / e == -QN ? '-0' : t;
}
var eL = C0,
  tL = eL;
function rL(e) {
  return e == null ? '' : tL(e);
}
var P0 = rL,
  nL = Me,
  aL = Id,
  iL = YN,
  oL = P0;
function sL(e, t) {
  return nL(e) ? e : aL(e, t) ? [e] : iL(oL(e));
}
var k0 = sL,
  lL = Na,
  cL = 1 / 0;
function uL(e) {
  if (typeof e == 'string' || lL(e)) return e;
  var t = e + '';
  return t == '0' && 1 / e == -cL ? '-0' : t;
}
var xl = uL,
  fL = k0,
  dL = xl;
function pL(e, t) {
  t = fL(t, e);
  for (var r = 0, n = t.length; e != null && r < n; ) e = e[dL(t[r++])];
  return r && r == n ? e : void 0;
}
var jd = pL,
  hL = jd;
function vL(e, t, r) {
  var n = e == null ? void 0 : hL(e, t);
  return n === void 0 ? r : n;
}
var er = vL;
function mL(e, t) {
  return e != null && t in Object(e);
}
var gL = mL,
  yL = k0,
  bL = Pd,
  xL = Me,
  wL = kd,
  _L = Td,
  OL = xl;
function SL(e, t, r) {
  t = yL(t, e);
  for (var n = -1, a = t.length, i = !1; ++n < a; ) {
    var o = OL(t[n]);
    if (!(i = e != null && r(e, o))) break;
    e = e[o];
  }
  return i || ++n != a
    ? i
    : ((a = e == null ? 0 : e.length),
      !!a && _L(a) && wL(o, a) && (xL(e) || bL(e)));
}
var EL = SL,
  $L = gL,
  AL = EL;
function CL(e, t) {
  return e != null && AL(e, t, $L);
}
var PL = CL,
  kL = Md,
  TL = er,
  ML = PL,
  IL = Id,
  RL = E0,
  DL = $0,
  jL = xl,
  NL = 1,
  LL = 2;
function BL(e, t) {
  return IL(e) && RL(t)
    ? DL(jL(e), t)
    : function (r) {
        var n = TL(r, e);
        return n === void 0 && n === t ? ML(r, e) : kL(t, n, NL | LL);
      };
}
var FL = BL;
function zL(e) {
  return e;
}
var La = zL;
function WL(e) {
  return function (t) {
    return t == null ? void 0 : t[e];
  };
}
var UL = WL,
  HL = jd;
function VL(e) {
  return function (t) {
    return HL(t, e);
  };
}
var GL = VL,
  qL = UL,
  YL = GL,
  KL = Id,
  XL = xl;
function JL(e) {
  return KL(e) ? qL(XL(e)) : YL(e);
}
var ZL = JL,
  QL = CN,
  e4 = FL,
  t4 = La,
  r4 = Me,
  n4 = ZL;
function a4(e) {
  return typeof e == 'function'
    ? e
    : e == null
    ? t4
    : typeof e == 'object'
    ? r4(e)
      ? e4(e[0], e[1])
      : QL(e)
    : n4(e);
}
var yn = a4;
function i4(e, t, r, n) {
  for (var a = e.length, i = r + (n ? 1 : -1); n ? i-- : ++i < a; )
    if (t(e[i], i, e)) return i;
  return -1;
}
var T0 = i4;
function o4(e) {
  return e !== e;
}
var s4 = o4;
function l4(e, t, r) {
  for (var n = r - 1, a = e.length; ++n < a; ) if (e[n] === t) return n;
  return -1;
}
var c4 = l4,
  u4 = T0,
  f4 = s4,
  d4 = c4;
function p4(e, t, r) {
  return t === t ? d4(e, t, r) : u4(e, f4, r);
}
var h4 = p4,
  v4 = h4;
function m4(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && v4(e, t, 0) > -1;
}
var g4 = m4;
function y4(e, t, r) {
  for (var n = -1, a = e == null ? 0 : e.length; ++n < a; )
    if (r(t, e[n])) return !0;
  return !1;
}
var b4 = y4;
function x4() {}
var w4 = x4,
  uc = _0,
  _4 = w4,
  O4 = Cd,
  S4 = 1 / 0,
  E4 =
    uc && 1 / O4(new uc([, -0]))[1] == S4
      ? function (e) {
          return new uc(e);
        }
      : _4,
  $4 = E4,
  A4 = h0,
  C4 = g4,
  P4 = b4,
  k4 = m0,
  T4 = $4,
  M4 = Cd,
  I4 = 200;
function R4(e, t, r) {
  var n = -1,
    a = C4,
    i = e.length,
    o = !0,
    s = [],
    l = s;
  if (r) (o = !1), (a = P4);
  else if (i >= I4) {
    var c = t ? null : T4(e);
    if (c) return M4(c);
    (o = !1), (a = k4), (l = new A4());
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
var D4 = R4,
  j4 = yn,
  N4 = D4;
function L4(e, t) {
  return e && e.length ? N4(e, j4(t)) : [];
}
var rs = L4;
function B4(e, t, r) {
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
var F4 = B4,
  z4 = F4;
function W4(e, t, r) {
  var n = e.length;
  return (r = r === void 0 ? n : r), !t && r >= n ? e : z4(e, t, r);
}
var U4 = W4,
  H4 = '\\ud800-\\udfff',
  V4 = '\\u0300-\\u036f',
  G4 = '\\ufe20-\\ufe2f',
  q4 = '\\u20d0-\\u20ff',
  Y4 = V4 + G4 + q4,
  K4 = '\\ufe0e\\ufe0f',
  X4 = '\\u200d',
  J4 = RegExp('[' + X4 + H4 + Y4 + K4 + ']');
function Z4(e) {
  return J4.test(e);
}
var M0 = Z4;
function Q4(e) {
  return e.split('');
}
var e3 = Q4,
  I0 = '\\ud800-\\udfff',
  t3 = '\\u0300-\\u036f',
  r3 = '\\ufe20-\\ufe2f',
  n3 = '\\u20d0-\\u20ff',
  a3 = t3 + r3 + n3,
  i3 = '\\ufe0e\\ufe0f',
  o3 = '[' + I0 + ']',
  du = '[' + a3 + ']',
  pu = '\\ud83c[\\udffb-\\udfff]',
  s3 = '(?:' + du + '|' + pu + ')',
  R0 = '[^' + I0 + ']',
  D0 = '(?:\\ud83c[\\udde6-\\uddff]){2}',
  j0 = '[\\ud800-\\udbff][\\udc00-\\udfff]',
  l3 = '\\u200d',
  N0 = s3 + '?',
  L0 = '[' + i3 + ']?',
  c3 = '(?:' + l3 + '(?:' + [R0, D0, j0].join('|') + ')' + L0 + N0 + ')*',
  u3 = L0 + N0 + c3,
  f3 = '(?:' + [R0 + du + '?', du, D0, j0, o3].join('|') + ')',
  d3 = RegExp(pu + '(?=' + pu + ')|' + f3 + u3, 'g');
function p3(e) {
  return e.match(d3) || [];
}
var h3 = p3,
  v3 = e3,
  m3 = M0,
  g3 = h3;
function y3(e) {
  return m3(e) ? g3(e) : v3(e);
}
var b3 = y3,
  x3 = U4,
  w3 = M0,
  _3 = b3,
  O3 = P0;
function S3(e) {
  return function (t) {
    t = O3(t);
    var r = w3(t) ? _3(t) : void 0,
      n = r ? r[0] : t.charAt(0),
      a = r ? x3(r, 1).join('') : t.slice(1);
    return n[e]() + a;
  };
}
var E3 = S3,
  $3 = E3,
  A3 = $3('toUpperCase'),
  wl = A3;
const hu = Math.PI,
  vu = 2 * hu,
  On = 1e-6,
  C3 = vu - On;
function mu() {
  (this._x0 = this._y0 = this._x1 = this._y1 = null), (this._ = '');
}
function _l() {
  return new mu();
}
mu.prototype = _l.prototype = {
  constructor: mu,
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
    else if (f > On)
      if (!(Math.abs(u * s - l * c) > On) || !a)
        this._ += 'L' + (this._x1 = e) + ',' + (this._y1 = t);
      else {
        var d = r - i,
          h = n - o,
          v = s * s + l * l,
          p = d * d + h * h,
          m = Math.sqrt(v),
          y = Math.sqrt(f),
          _ = a * Math.tan((hu - Math.acos((v + f - p) / (2 * m * y))) / 2),
          x = _ / y,
          b = _ / m;
        Math.abs(x - 1) > On &&
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
      : (Math.abs(this._x1 - l) > On || Math.abs(this._y1 - c) > On) &&
        (this._ += 'L' + l + ',' + c),
      r &&
        (f < 0 && (f = (f % vu) + vu),
        f > C3
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
          : f > On &&
            (this._ +=
              'A' +
              r +
              ',' +
              r +
              ',0,' +
              +(f >= hu) +
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
var ns = Math.PI,
  Ol = 2 * ns;
function Nd(e) {
  return typeof e == 'object' && 'length' in e ? e : Array.from(e);
}
function B0(e) {
  this._context = e;
}
B0.prototype = {
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
function Sl(e) {
  return new B0(e);
}
function F0(e) {
  return e[0];
}
function z0(e) {
  return e[1];
}
function W0(e, t) {
  var r = qe(!0),
    n = null,
    a = Sl,
    i = null;
  (e = typeof e == 'function' ? e : e === void 0 ? F0 : qe(e)),
    (t = typeof t == 'function' ? t : t === void 0 ? z0 : qe(t));
  function o(s) {
    var l,
      c = (s = Nd(s)).length,
      u,
      f = !1,
      d;
    for (n == null && (i = a((d = _l()))), l = 0; l <= c; ++l)
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
function lo(e, t, r) {
  var n = null,
    a = qe(!0),
    i = null,
    o = Sl,
    s = null;
  (e = typeof e == 'function' ? e : e === void 0 ? F0 : qe(+e)),
    (t = typeof t == 'function' ? t : qe(t === void 0 ? 0 : +t)),
    (r = typeof r == 'function' ? r : r === void 0 ? z0 : qe(+r));
  function l(u) {
    var f,
      d,
      h,
      v = (u = Nd(u)).length,
      p,
      m = !1,
      y,
      _ = new Array(v),
      x = new Array(v);
    for (i == null && (s = o((y = _l()))), f = 0; f <= v; ++f) {
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
    if (y) return (s = null), y + '' || null;
  }
  function c() {
    return W0().defined(a).curve(o).context(i);
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
const Ld = {
    draw: function (e, t) {
      var r = Math.sqrt(t / ns);
      e.moveTo(r, 0), e.arc(0, 0, r, 0, Ol);
    },
  },
  P3 = {
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
var U0 = Math.sqrt(1 / 3),
  k3 = U0 * 2;
const T3 = {
  draw: function (e, t) {
    var r = Math.sqrt(t / k3),
      n = r * U0;
    e.moveTo(0, -r),
      e.lineTo(n, 0),
      e.lineTo(0, r),
      e.lineTo(-n, 0),
      e.closePath();
  },
};
var M3 = 0.8908130915292852,
  H0 = Math.sin(ns / 10) / Math.sin((7 * ns) / 10),
  I3 = Math.sin(Ol / 10) * H0,
  R3 = -Math.cos(Ol / 10) * H0;
const D3 = {
    draw: function (e, t) {
      var r = Math.sqrt(t * M3),
        n = I3 * r,
        a = R3 * r;
      e.moveTo(0, -r), e.lineTo(n, a);
      for (var i = 1; i < 5; ++i) {
        var o = (Ol * i) / 5,
          s = Math.cos(o),
          l = Math.sin(o);
        e.lineTo(l * r, -s * r), e.lineTo(s * n - l * a, l * n + s * a);
      }
      e.closePath();
    },
  },
  j3 = {
    draw: function (e, t) {
      var r = Math.sqrt(t),
        n = -r / 2;
      e.rect(n, n, r, r);
    },
  };
var fc = Math.sqrt(3);
const N3 = {
  draw: function (e, t) {
    var r = -Math.sqrt(t / (fc * 3));
    e.moveTo(0, r * 2),
      e.lineTo(-fc * r, -r),
      e.lineTo(fc * r, -r),
      e.closePath();
  },
};
var nr = -0.5,
  ar = Math.sqrt(3) / 2,
  gu = 1 / Math.sqrt(12),
  L3 = (gu / 2 + 1) * 3;
const B3 = {
  draw: function (e, t) {
    var r = Math.sqrt(t / L3),
      n = r / 2,
      a = r * gu,
      i = n,
      o = r * gu + r,
      s = -i,
      l = o;
    e.moveTo(n, a),
      e.lineTo(i, o),
      e.lineTo(s, l),
      e.lineTo(nr * n - ar * a, ar * n + nr * a),
      e.lineTo(nr * i - ar * o, ar * i + nr * o),
      e.lineTo(nr * s - ar * l, ar * s + nr * l),
      e.lineTo(nr * n + ar * a, nr * a - ar * n),
      e.lineTo(nr * i + ar * o, nr * o - ar * i),
      e.lineTo(nr * s + ar * l, nr * l - ar * s),
      e.closePath();
  },
};
function F3(e, t) {
  var r = null;
  (e = typeof e == 'function' ? e : qe(e || Ld)),
    (t = typeof t == 'function' ? t : qe(t === void 0 ? 64 : +t));
  function n() {
    var a;
    if (
      (r || (r = a = _l()),
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
function as() {}
function is(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function V0(e) {
  this._context = e;
}
V0.prototype = {
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
        is(this, this._x1, this._y1);
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
        is(this, e, t);
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
  areaStart: as,
  areaEnd: as,
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
        is(this, e, t);
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
        is(this, e, t);
        break;
    }
    (this._x0 = this._x1),
      (this._x1 = e),
      (this._y0 = this._y1),
      (this._y1 = t);
  },
};
function U3(e) {
  return new q0(e);
}
function Y0(e) {
  this._context = e;
}
Y0.prototype = {
  areaStart: as,
  areaEnd: as,
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
function H3(e) {
  return new Y0(e);
}
function gv(e) {
  return e < 0 ? -1 : 1;
}
function yv(e, t, r) {
  var n = e._x1 - e._x0,
    a = t - e._x1,
    i = (e._y1 - e._y0) / (n || (a < 0 && -0)),
    o = (r - e._y1) / (a || (n < 0 && -0)),
    s = (i * a + o * n) / (n + a);
  return (
    (gv(i) + gv(o)) * Math.min(Math.abs(i), Math.abs(o), 0.5 * Math.abs(s)) || 0
  );
}
function bv(e, t) {
  var r = e._x1 - e._x0;
  return r ? ((3 * (e._y1 - e._y0)) / r - t) / 2 : t;
}
function dc(e, t, r) {
  var n = e._x0,
    a = e._y0,
    i = e._x1,
    o = e._y1,
    s = (i - n) / 3;
  e._context.bezierCurveTo(n + s, a + s * t, i - s, o - s * r, i, o);
}
function os(e) {
  this._context = e;
}
os.prototype = {
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
        dc(this, this._t0, bv(this, this._t0));
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
          (this._point = 3), dc(this, bv(this, (r = yv(this, e, t))), r);
          break;
        default:
          dc(this, this._t0, (r = yv(this, e, t)));
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
function K0(e) {
  this._context = new X0(e);
}
(K0.prototype = Object.create(os.prototype)).point = function (e, t) {
  os.prototype.point.call(this, t, e);
};
function X0(e) {
  this._context = e;
}
X0.prototype = {
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
function V3(e) {
  return new os(e);
}
function G3(e) {
  return new K0(e);
}
function J0(e) {
  this._context = e;
}
J0.prototype = {
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
        for (var n = xv(e), a = xv(t), i = 0, o = 1; o < r; ++i, ++o)
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
function xv(e) {
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
function q3(e) {
  return new J0(e);
}
function El(e, t) {
  (this._context = e), (this._t = t);
}
El.prototype = {
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
function Y3(e) {
  return new El(e, 0.5);
}
function K3(e) {
  return new El(e, 0);
}
function X3(e) {
  return new El(e, 1);
}
function wa(e, t) {
  if ((o = e.length) > 1)
    for (var r = 1, n, a, i = e[t[0]], o, s = i.length; r < o; ++r)
      for (a = i, i = e[t[r]], n = 0; n < s; ++n)
        i[n][1] += i[n][0] = isNaN(a[n][1]) ? a[n][0] : a[n][1];
}
function yu(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function J3(e, t) {
  return e[t];
}
function Z3(e) {
  const t = [];
  return (t.key = e), t;
}
function Q3() {
  var e = qe([]),
    t = yu,
    r = wa,
    n = J3;
  function a(i) {
    var o = Array.from(e.apply(this, arguments), Z3),
      s,
      l = o.length,
      c = -1,
      u;
    for (const f of i)
      for (s = 0, ++c; s < l; ++s)
        (o[s][c] = [0, +n(f, o[s].key, c, i)]).data = f;
    for (s = 0, u = Nd(t(o)); s < l; ++s) o[u[s]].index = s;
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
            i == null ? yu : typeof i == 'function' ? i : qe(Array.from(i))),
          a)
        : t;
    }),
    (a.offset = function (i) {
      return arguments.length ? ((r = i == null ? wa : i), a) : r;
    }),
    a
  );
}
function e5(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, a = 0, i = e[0].length, o; a < i; ++a) {
      for (o = r = 0; r < n; ++r) o += e[r][a][1] || 0;
      if (o) for (r = 0; r < n; ++r) e[r][a][1] /= o;
    }
    wa(e, t);
  }
}
function t5(e, t) {
  if ((a = e.length) > 0) {
    for (var r = 0, n = e[t[0]], a, i = n.length; r < i; ++r) {
      for (var o = 0, s = 0; o < a; ++o) s += e[o][r][1] || 0;
      n[r][1] += n[r][0] = -s / 2;
    }
    wa(e, t);
  }
}
function r5(e, t) {
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
            y = p[n - 1][1] || 0;
          h += m - y;
        }
        (l += f), (c += h * f);
      }
      (a[n - 1][1] += a[n - 1][0] = r), l && (r -= c / l);
    }
    (a[n - 1][1] += a[n - 1][0] = r), wa(e, t);
  }
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
function bu() {
  return (
    (bu =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    bu.apply(this, arguments)
  );
}
function n5(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function wv(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function a5(e, t, r) {
  return t && wv(e.prototype, t), r && wv(e, r), e;
}
function i5(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && xu(e, t);
}
function xu(e, t) {
  return (
    (xu =
      Object.setPrototypeOf ||
      function (n, a) {
        return (n.__proto__ = a), n;
      }),
    xu(e, t)
  );
}
function o5(e) {
  var t = c5();
  return function () {
    var n = ss(e),
      a;
    if (t) {
      var i = ss(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else a = n.apply(this, arguments);
    return s5(this, a);
  };
}
function s5(e, t) {
  return t && (_o(t) === 'object' || typeof t == 'function') ? t : l5(e);
}
function l5(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function c5() {
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
function ss(e) {
  return (
    (ss = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    ss(e)
  );
}
var Z0 = {
    symbolCircle: Ld,
    symbolCross: P3,
    symbolDiamond: T3,
    symbolSquare: j3,
    symbolStar: D3,
    symbolTriangle: N3,
    symbolWye: B3,
  },
  u5 = Math.PI / 180,
  f5 = function (t) {
    var r = 'symbol'.concat(wl(t));
    return Z0[r] || Ld;
  },
  d5 = function (t, r, n) {
    if (r === 'area') return t;
    switch (n) {
      case 'cross':
        return (5 * t * t) / 9;
      case 'diamond':
        return (0.5 * t * t) / Math.sqrt(3);
      case 'square':
        return t * t;
      case 'star': {
        var a = 18 * u5;
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
  Bd = (function (e) {
    i5(r, e);
    var t = o5(r);
    function r() {
      return n5(this, r), t.apply(this, arguments);
    }
    return (
      a5(r, [
        {
          key: 'getPath',
          value: function () {
            var a = this.props,
              i = a.size,
              o = a.sizeType,
              s = a.type,
              l = f5(s),
              c = F3().type(l).size(d5(i, o, s));
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
              ? g.createElement(
                  'path',
                  bu({}, ze(this.props, !0), {
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
  })(S.exports.PureComponent);
Bd.defaultProps = { type: 'circle', size: 64, sizeType: 'area' };
Bd.registerSymbol = function (e, t) {
  Z0['symbol'.concat(wl(e))] = t;
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
function wu() {
  return (
    (wu =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    wu.apply(this, arguments)
  );
}
function _v(e, t) {
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
function p5(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? _v(Object(r), !0).forEach(function (n) {
          _u(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : _v(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function _u(e, t, r) {
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
function h5(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function Ov(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function v5(e, t, r) {
  return t && Ov(e.prototype, t), r && Ov(e, r), e;
}
function m5(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && Ou(e, t);
}
function Ou(e, t) {
  return (
    (Ou =
      Object.setPrototypeOf ||
      function (n, a) {
        return (n.__proto__ = a), n;
      }),
    Ou(e, t)
  );
}
function g5(e) {
  var t = x5();
  return function () {
    var n = ls(e),
      a;
    if (t) {
      var i = ls(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else a = n.apply(this, arguments);
    return y5(this, a);
  };
}
function y5(e, t) {
  return t && (Oo(t) === 'object' || typeof t == 'function') ? t : b5(e);
}
function b5(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function x5() {
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
function ls(e) {
  return (
    (ls = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    ls(e)
  );
}
var ir = 32,
  Fd = (function (e) {
    m5(r, e);
    var t = g5(r);
    function r() {
      return h5(this, r), t.apply(this, arguments);
    }
    return (
      v5(r, [
        {
          key: 'renderIcon',
          value: function (a) {
            var i = this.props.inactiveColor,
              o = ir / 2,
              s = ir / 6,
              l = ir / 3,
              c = a.inactive ? i : a.color;
            if (a.type === 'plainline')
              return g.createElement('line', {
                strokeWidth: 4,
                fill: 'none',
                stroke: c,
                strokeDasharray: a.payload.strokeDasharray,
                x1: 0,
                y1: o,
                x2: ir,
                y2: o,
                className: 'recharts-legend-icon',
              });
            if (a.type === 'line')
              return g.createElement('path', {
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
                  .concat(ir, 'M')
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
              return g.createElement('path', {
                stroke: 'none',
                fill: c,
                d: 'M0,'
                  .concat(ir / 8, 'h')
                  .concat(ir, 'v')
                  .concat((ir * 3) / 4, 'h')
                  .concat(-ir, 'z'),
                className: 'recharts-legend-icon',
              });
            if (g.isValidElement(a.legendIcon)) {
              var u = p5({}, a);
              return delete u.legendIcon, g.cloneElement(a.legendIcon, u);
            }
            return g.createElement(Bd, {
              fill: c,
              cx: o,
              cy: o,
              size: ir,
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
              f = { x: 0, y: 0, width: ir, height: ir },
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
                y = v.formatter || c,
                _ = Ze(
                  ((m = { 'recharts-legend-item': !0 }),
                  _u(m, 'legend-item-'.concat(p), !0),
                  _u(m, 'inactive', v.inactive),
                  m)
                );
              if (v.type === 'none') return null;
              var x = v.inactive ? u : v.color;
              return g.createElement(
                'li',
                wu(
                  { className: _, style: d, key: 'legend-item-'.concat(p) },
                  Qo(a.props, v, p)
                ),
                g.createElement(
                  au,
                  { width: s, height: s, viewBox: f, style: h },
                  a.renderIcon(v)
                ),
                g.createElement(
                  'span',
                  {
                    className: 'recharts-legend-item-text',
                    style: { color: x },
                  },
                  y ? y(v.value, v, p) : v.value
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
            return g.createElement(
              'ul',
              { className: 'recharts-default-legend', style: l },
              this.renderItems()
            );
          },
        },
      ]),
      r
    );
  })(S.exports.PureComponent);
Fd.displayName = 'Legend';
Fd.defaultProps = {
  iconSize: 14,
  layout: 'horizontal',
  align: 'center',
  verticalAlign: 'middle',
  inactiveColor: '#ccc',
};
var w5 = mn,
  _5 = gn,
  O5 = '[object Number]';
function S5(e) {
  return typeof e == 'number' || (_5(e) && w5(e) == O5);
}
var Q0 = S5,
  E5 = Q0;
function $5(e) {
  return E5(e) && e != +e;
}
var $l = $5,
  A5 = mn,
  C5 = Me,
  P5 = gn,
  k5 = '[object String]';
function T5(e) {
  return typeof e == 'string' || (!C5(e) && P5(e) && A5(e) == k5);
}
var Hi = T5,
  sr = function (t) {
    return t === 0 ? 0 : t > 0 ? 1 : -1;
  },
  Cn = function (t) {
    return Hi(t) && t.indexOf('%') === t.length - 1;
  },
  K = function (t) {
    return Q0(t) && !$l(t);
  },
  mt = function (t) {
    return K(t) || Hi(t);
  },
  M5 = 0,
  Al = function (t) {
    var r = ++M5;
    return ''.concat(t || '').concat(r);
  },
  _a = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
      a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
    if (!K(t) && !Hi(t)) return n;
    var i;
    if (Cn(t)) {
      var o = t.indexOf('%');
      i = (r * parseFloat(t.slice(0, o))) / 100;
    } else i = +t;
    return $l(i) && (i = n), a && i > r && (i = r), i;
  },
  rn = function (t) {
    if (!t) return null;
    var r = Object.keys(t);
    return r && r.length ? t[r[0]] : null;
  },
  I5 = function (t) {
    if (!Me(t)) return !1;
    for (var r = t.length, n = {}, a = 0; a < r; a++)
      if (!n[t[a]]) n[t[a]] = !0;
      else return !0;
    return !1;
  },
  Kn = function (t, r) {
    return K(t) && K(r)
      ? function (n) {
          return t + n * (r - t);
        }
      : function () {
          return r;
        };
  };
function Su(e, t, r) {
  return !e || !e.length
    ? null
    : e.find(function (n) {
        return n && (typeof t == 'function' ? t(n) : er(n, t)) === r;
      });
}
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
function Sv(e, t) {
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
function Xn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Sv(Object(r), !0).forEach(function (n) {
          R5(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Sv(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function R5(e, t, r) {
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
function D5(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function Ev(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function j5(e, t, r) {
  return t && Ev(e.prototype, t), r && Ev(e, r), e;
}
function N5(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && Eu(e, t);
}
function Eu(e, t) {
  return (
    (Eu =
      Object.setPrototypeOf ||
      function (n, a) {
        return (n.__proto__ = a), n;
      }),
    Eu(e, t)
  );
}
function L5(e) {
  var t = z5();
  return function () {
    var n = cs(e),
      a;
    if (t) {
      var i = cs(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else a = n.apply(this, arguments);
    return B5(this, a);
  };
}
function B5(e, t) {
  return t && (So(t) === 'object' || typeof t == 'function') ? t : F5(e);
}
function F5(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function z5() {
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
function cs(e) {
  return (
    (cs = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    cs(e)
  );
}
function W5(e, t) {
  if (e == null) return {};
  var r = U5(e, t),
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
function U5(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    a,
    i;
  for (i = 0; i < n.length; i++)
    (a = n[i]), !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function H5(e) {
  return e.value;
}
function V5(e, t) {
  return e === !0 ? rs(t, H5) : pe(e) ? rs(t, e) : t;
}
function G5(e, t) {
  if (g.isValidElement(e)) return g.cloneElement(e, t);
  if (pe(e)) return g.createElement(e, t);
  t.ref;
  var r = W5(t, ['ref']);
  return g.createElement(Fd, r);
}
var $v = 1,
  $i = (function (e) {
    N5(r, e);
    var t = L5(r);
    function r() {
      var n;
      D5(this, r);
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
      j5(
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
              return Xn(Xn({}, d), h);
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
                (Math.abs(l.width - i) > $v || Math.abs(l.height - o) > $v) &&
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
                d = Xn(
                  Xn(
                    {
                      position: 'absolute',
                      width: s || 'auto',
                      height: l || 'auto',
                    },
                    this.getDefaultPosition(c)
                  ),
                  c
                );
              return g.createElement(
                'div',
                {
                  className: 'recharts-legend-wrapper',
                  style: d,
                  ref: function (v) {
                    a.wrapperNode = v;
                  },
                },
                G5(o, Xn(Xn({}, this.props), {}, { payload: V5(u, f) }))
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
  })(S.exports.PureComponent);
$i.displayName = 'Legend';
$i.defaultProps = {
  iconSize: 14,
  layout: 'horizontal',
  align: 'center',
  verticalAlign: 'bottom',
};
function q5(e) {
  return e == null;
}
var ye = q5,
  Y5 = typeof WeakSet == 'function',
  Av = Object.keys;
function zd(e, t) {
  return e === t || (e !== e && t !== t);
}
function Cv(e) {
  return e.constructor === Object || e.constructor == null;
}
function Pv(e) {
  return !!e && typeof e.then == 'function';
}
function kv(e) {
  return !!(e && e.$$typeof);
}
function K5() {
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
var X5 = (function (e) {
  return e
    ? function () {
        return new WeakSet();
      }
    : K5;
})(Y5);
function ex(e) {
  return function (r) {
    var n = e || r;
    return function (i, o, s) {
      s === void 0 && (s = X5());
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
function J5(e, t, r, n) {
  var a = e.length;
  if (t.length !== a) return !1;
  for (; a-- > 0; ) if (!r(e[a], t[a], n)) return !1;
  return !0;
}
function Z5(e, t, r, n) {
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
var Q5 = '_owner',
  eB = Function.prototype.bind.call(
    Function.prototype.call,
    Object.prototype.hasOwnProperty
  );
function Tv(e, t, r, n) {
  var a = Av(e),
    i = a.length;
  if (Av(t).length !== i) return !1;
  if (i)
    for (var o = void 0; i-- > 0; ) {
      if (((o = a[i]), o === Q5)) {
        var s = kv(e),
          l = kv(t);
        if ((s || l) && s !== l) return !1;
      }
      if (!eB(t, o) || !r(e[o], t[o], n)) return !1;
    }
  return !0;
}
function tB(e, t) {
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
function rB(e, t, r, n) {
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
var nB = typeof Map == 'function',
  aB = typeof Set == 'function';
function Cl(e) {
  var t = typeof e == 'function' ? e(r) : r;
  function r(n, a, i) {
    if (n === a) return !0;
    if (n && a && typeof n == 'object' && typeof a == 'object') {
      if (Cv(n) && Cv(a)) return Tv(n, a, t, i);
      var o = Array.isArray(n),
        s = Array.isArray(a);
      return o || s
        ? o === s && J5(n, a, t, i)
        : ((o = n instanceof Date),
          (s = a instanceof Date),
          o || s
            ? o === s && zd(n.getTime(), a.getTime())
            : ((o = n instanceof RegExp),
              (s = a instanceof RegExp),
              o || s
                ? o === s && tB(n, a)
                : Pv(n) || Pv(a)
                ? n === a
                : nB && ((o = n instanceof Map), (s = a instanceof Map), o || s)
                ? o === s && Z5(n, a, t, i)
                : aB && ((o = n instanceof Set), (s = a instanceof Set), o || s)
                ? o === s && rB(n, a, t, i)
                : Tv(n, a, t, i)));
    }
    return n !== n && a !== a;
  }
  return r;
}
var iB = Cl();
Cl(function () {
  return zd;
});
Cl(ex());
Cl(ex(zd));
function Mv(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    r = -1,
    n = function a(i) {
      r < 0 && (r = i), i - r > t ? (e(i), (r = -1)) : requestAnimationFrame(a);
    };
  requestAnimationFrame(n);
}
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
function oB(e) {
  return uB(e) || cB(e) || lB(e) || sB();
}
function sB() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function lB(e, t) {
  if (!!e) {
    if (typeof e == 'string') return Iv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === 'Object' && e.constructor && (r = e.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Iv(e, t);
  }
}
function Iv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function cB(e) {
  if (typeof Symbol < 'u' && Symbol.iterator in Object(e)) return Array.from(e);
}
function uB(e) {
  if (Array.isArray(e)) return e;
}
function fB() {
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
            s = oB(o),
            l = s[0],
            c = s.slice(1);
          if (typeof l == 'number') {
            Mv(a.bind(null, c), l);
            return;
          }
          a(l), Mv(a.bind(null, c));
          return;
        }
        Eo(i) === 'object' && ((e = i), t(e)), typeof i == 'function' && i();
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
function Rv(e, t) {
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
function Oa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Rv(Object(r), !0).forEach(function (n) {
          us(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Rv(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function us(e, t, r) {
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
var dB = ['Webkit', 'Moz', 'O', 'ms'],
  pB = ['-webkit-', '-moz-', '-o-', '-ms-'],
  hB = ['transform', 'transformOrigin', 'transition'],
  vB = function (t, r) {
    return [Object.keys(t), Object.keys(r)].reduce(function (n, a) {
      return n.filter(function (i) {
        return a.includes(i);
      });
    });
  },
  mB = function (t) {
    return t;
  },
  gB = function (t) {
    return t.replace(/([A-Z])/g, function (r) {
      return '-'.concat(r.toLowerCase());
    });
  },
  yB = function (t, r) {
    if (hB.indexOf(t) === -1) return us({}, t, r);
    var n = t === 'transition',
      a = t.replace(/(\w)/, function (o) {
        return o.toUpperCase();
      }),
      i = r;
    return dB.reduce(function (o, s, l) {
      return (
        n &&
          (i = r.replace(
            /(transform|transform-origin)/gim,
            ''.concat(pB[l], '$1')
          )),
        Oa(Oa({}, o), {}, us({}, s + a, i))
      );
    }, {});
  },
  hi = function (t, r) {
    return Object.keys(r).reduce(function (n, a) {
      return Oa(Oa({}, n), {}, us({}, a, t(a, r[a])));
    }, {});
  },
  $u = function (t) {
    return Object.keys(t).reduce(function (r, n) {
      return Oa(Oa({}, r), yB(n, r[n]));
    }, t);
  },
  Dv = function (t, r, n) {
    return t
      .map(function (a) {
        return ''.concat(gB(a), ' ').concat(r, 'ms ').concat(n);
      })
      .join(',');
  };
function bB(e, t) {
  return _B(e) || wB(e, t) || tx(e, t) || xB();
}
function xB() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wB(e, t) {
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
function _B(e) {
  if (Array.isArray(e)) return e;
}
function OB(e) {
  return $B(e) || EB(e) || tx(e) || SB();
}
function SB() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function tx(e, t) {
  if (!!e) {
    if (typeof e == 'string') return Au(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === 'Object' && e.constructor && (r = e.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Au(e, t);
  }
}
function EB(e) {
  if (typeof Symbol < 'u' && Symbol.iterator in Object(e)) return Array.from(e);
}
function $B(e) {
  if (Array.isArray(e)) return Au(e);
}
function Au(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var fs = 1e-4,
  rx = function (t, r) {
    return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
  },
  nx = function (t, r) {
    return t
      .map(function (n, a) {
        return n * Math.pow(r, a);
      })
      .reduce(function (n, a) {
        return n + a;
      });
  },
  jv = function (t, r) {
    return function (n) {
      var a = rx(t, r);
      return nx(a, n);
    };
  },
  AB = function (t, r) {
    return function (n) {
      var a = rx(t, r),
        i = [].concat(
          OB(
            a
              .map(function (o, s) {
                return o * s;
              })
              .slice(1)
          ),
          [0]
        );
      return nx(i, n);
    };
  },
  Nv = function () {
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
              u = bB(c, 4);
            (a = u[0]), (i = u[1]), (o = u[2]), (s = u[3]);
          }
        }
      }
    var f = jv(a, o),
      d = jv(i, s),
      h = AB(a, o),
      v = function (y) {
        return y > 1 ? 1 : y < 0 ? 0 : y;
      },
      p = function (y) {
        for (var _ = y > 1 ? 1 : y, x = _, b = 0; b < 8; ++b) {
          var w = f(x) - _,
            O = h(x);
          if (Math.abs(w - _) < fs || O < fs) return d(x);
          x = v(x - w / O);
        }
        return d(x);
      };
    return (p.isStepper = !1), p;
  },
  CB = function () {
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
        return Math.abs(m - f) < fs && Math.abs(p) < fs ? [f, 0] : [m, p];
      };
    return (l.isStepper = !0), (l.dt = s), l;
  },
  PB = function () {
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
          return Nv(a);
        case 'spring':
          return CB();
        default:
          if (a.split('(')[0] === 'cubic-bezier') return Nv(a);
      }
    return typeof a == 'function' ? a : null;
  };
function Lv(e) {
  return MB(e) || TB(e) || ax(e) || kB();
}
function kB() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function TB(e) {
  if (typeof Symbol < 'u' && Symbol.iterator in Object(e)) return Array.from(e);
}
function MB(e) {
  if (Array.isArray(e)) return Pu(e);
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
function Pt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Bv(Object(r), !0).forEach(function (n) {
          Cu(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Bv(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function Cu(e, t, r) {
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
function IB(e, t) {
  return jB(e) || DB(e, t) || ax(e, t) || RB();
}
function RB() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ax(e, t) {
  if (!!e) {
    if (typeof e == 'string') return Pu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === 'Object' && e.constructor && (r = e.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Pu(e, t);
  }
}
function Pu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function DB(e, t) {
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
function jB(e) {
  if (Array.isArray(e)) return e;
}
var ds = function (t, r, n) {
    return t + (r - t) * n;
  },
  ku = function (t) {
    var r = t.from,
      n = t.to;
    return r !== n;
  },
  NB = function e(t, r, n) {
    var a = hi(function (i, o) {
      if (ku(o)) {
        var s = t(o.from, o.to, o.velocity),
          l = IB(s, 2),
          c = l[0],
          u = l[1];
        return Pt(Pt({}, o), {}, { from: c, velocity: u });
      }
      return o;
    }, r);
    return n < 1
      ? hi(function (i, o) {
          return ku(o)
            ? Pt(
                Pt({}, o),
                {},
                {
                  velocity: ds(o.velocity, a[i].velocity, n),
                  from: ds(o.from, a[i].from, n),
                }
              )
            : o;
        }, r)
      : e(t, a, n - 1);
  };
const LB = function (e, t, r, n, a) {
  var i = vB(e, t),
    o = i.reduce(function (m, y) {
      return Pt(Pt({}, m), {}, Cu({}, y, [e[y], t[y]]));
    }, {}),
    s = i.reduce(function (m, y) {
      return Pt(
        Pt({}, m),
        {},
        Cu({}, y, { from: e[y], velocity: 0, to: t[y] })
      );
    }, {}),
    l = -1,
    c,
    u,
    f = function () {
      return null;
    },
    d = function () {
      return hi(function (y, _) {
        return _.from;
      }, s);
    },
    h = function () {
      return !Object.values(s).filter(ku).length;
    },
    v = function (y) {
      c || (c = y);
      var _ = y - c,
        x = _ / r.dt;
      (s = NB(r, s, x)),
        a(Pt(Pt(Pt({}, e), t), d())),
        (c = y),
        h() || (l = requestAnimationFrame(f));
    },
    p = function (y) {
      u || (u = y);
      var _ = (y - u) / n,
        x = hi(function (w, O) {
          return ds.apply(void 0, Lv(O).concat([r(_)]));
        }, o);
      if ((a(Pt(Pt(Pt({}, e), t), x)), _ < 1)) l = requestAnimationFrame(f);
      else {
        var b = hi(function (w, O) {
          return ds.apply(void 0, Lv(O).concat([r(1)]));
        }, o);
        a(Pt(Pt(Pt({}, e), t), b));
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
function BB(e, t) {
  if (e == null) return {};
  var r = FB(e, t),
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
function FB(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    a,
    i;
  for (i = 0; i < n.length; i++)
    (a = n[i]), !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function pc(e) {
  return HB(e) || UB(e) || WB(e) || zB();
}
function zB() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function WB(e, t) {
  if (!!e) {
    if (typeof e == 'string') return Tu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === 'Object' && e.constructor && (r = e.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Tu(e, t);
  }
}
function UB(e) {
  if (typeof Symbol < 'u' && Symbol.iterator in Object(e)) return Array.from(e);
}
function HB(e) {
  if (Array.isArray(e)) return Tu(e);
}
function Tu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Fv(e, t) {
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
function yr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Fv(Object(r), !0).forEach(function (n) {
          ci(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Fv(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function ci(e, t, r) {
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
function VB(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function zv(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function GB(e, t, r) {
  return t && zv(e.prototype, t), r && zv(e, r), e;
}
function qB(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && Mu(e, t);
}
function Mu(e, t) {
  return (
    (Mu =
      Object.setPrototypeOf ||
      function (n, a) {
        return (n.__proto__ = a), n;
      }),
    Mu(e, t)
  );
}
function YB(e) {
  var t = KB();
  return function () {
    var n = ps(e),
      a;
    if (t) {
      var i = ps(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else a = n.apply(this, arguments);
    return Iu(this, a);
  };
}
function Iu(e, t) {
  return t && ($o(t) === 'object' || typeof t == 'function') ? t : Ru(e);
}
function Ru(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function KB() {
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
var Sa = (function (e) {
  qB(r, e);
  var t = YB(r);
  function r(n, a) {
    var i;
    VB(this, r), (i = t.call(this, n, a));
    var o = i.props,
      s = o.isActive,
      l = o.attributeName,
      c = o.from,
      u = o.to,
      f = o.steps,
      d = o.children;
    if (
      ((i.handleStyleChange = i.handleStyleChange.bind(Ru(i))),
      (i.changeStyle = i.changeStyle.bind(Ru(i))),
      !s)
    )
      return (
        (i.state = { style: {} }),
        typeof d == 'function' && (i.state = { style: u }),
        Iu(i)
      );
    if (f && f.length) i.state = { style: f[0].style };
    else if (c) {
      if (typeof d == 'function') return (i.state = { style: c }), Iu(i);
      i.state = { style: l ? ci({}, l, c) : c };
    } else i.state = { style: {} };
    return i;
  }
  return (
    GB(r, [
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
              var u = { style: l ? ci({}, l, this.props.to) : this.props.to };
              this.state &&
                this.state.style &&
                ((l && this.state.style[l] !== this.props.to) ||
                  (!l && this.state.style !== this.props.to)) &&
                this.setState(u);
              return;
            }
            if (!(iB(a.to, this.props.to) && a.canBegin && a.isActive)) {
              var f = !a.canBegin || !a.isActive;
              this.manager && this.manager.stop(),
                this.stopJSAnimation && this.stopJSAnimation();
              var d = f || c ? this.props.from : a.to;
              if (this.state && this.state.style) {
                var h = { style: l ? ci({}, l, d) : d };
                ((l && this.state.style[l] !== d) ||
                  (!l && this.state.style !== d)) &&
                  this.setState(h);
              }
              this.runAnimation(
                yr(yr({}, this.props), {}, { from: d, begin: 0 })
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
            h = LB(o, s, PB(c), l, this.changeStyle),
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
            h = function (p, m, y) {
              if (y === 0) return p;
              var _ = m.duration,
                x = m.easing,
                b = x === void 0 ? 'ease' : x,
                w = m.style,
                O = m.properties,
                E = m.onAnimationEnd,
                $ = y > 0 ? o[y - 1] : m,
                A = O || Object.keys(w);
              if (typeof b == 'function' || b === 'spring')
                return [].concat(pc(p), [
                  i.runJSAnimation.bind(i, {
                    from: $.style,
                    to: w,
                    duration: _,
                    easing: b,
                  }),
                  _,
                ]);
              var P = Dv(A, _, b),
                C = yr(yr(yr({}, $.style), w), {}, { transition: P });
              return [].concat(pc(p), [C, _, E]).filter(mB);
            };
          return this.manager.start(
            [l].concat(pc(o.reduce(h, [u, Math.max(d, s)])), [a.onAnimationEnd])
          );
        },
      },
      {
        key: 'runAnimation',
        value: function (a) {
          this.manager || (this.manager = fB());
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
          var p = s ? ci({}, s, l) : l,
            m = Dv(Object.keys(p), o, c);
          v.start([u, i, yr(yr({}, p), {}, { transition: m }), o, f]);
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
          var s = BB(a, [
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
            l = S.exports.Children.count(i),
            c = $u(this.state.style);
          if (typeof i == 'function') return i(c);
          if (!o || l === 0) return i;
          var u = function (d) {
            var h = d.props,
              v = h.style,
              p = v === void 0 ? {} : v,
              m = h.className,
              y = S.exports.cloneElement(
                d,
                yr(yr({}, s), {}, { style: yr(yr({}, p), c), className: m })
              );
            return y;
          };
          return l === 1
            ? u(S.exports.Children.only(i))
            : g.createElement(
                'div',
                null,
                S.exports.Children.map(i, function (f) {
                  return u(f);
                })
              );
        },
      },
    ]),
    r
  );
})(S.exports.PureComponent);
Sa.displayName = 'Animate';
Sa.propTypes = {
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
Sa.defaultProps = {
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
var Wv = Wi,
  XB = Pd,
  JB = Me,
  Uv = Wv ? Wv.isConcatSpreadable : void 0;
function ZB(e) {
  return JB(e) || XB(e) || !!(Uv && e && e[Uv]);
}
var QB = ZB,
  e6 = y0,
  t6 = QB;
function ix(e, t, r, n, a) {
  var i = -1,
    o = e.length;
  for (r || (r = t6), a || (a = []); ++i < o; ) {
    var s = e[i];
    t > 0 && r(s)
      ? t > 1
        ? ix(s, t - 1, r, n, a)
        : e6(a, s)
      : n || (a[a.length] = s);
  }
  return a;
}
var ox = ix;
function r6(e) {
  return function (t, r, n) {
    for (var a = -1, i = Object(t), o = n(t), s = o.length; s--; ) {
      var l = o[e ? s : ++a];
      if (r(i[l], l, i) === !1) break;
    }
    return t;
  };
}
var n6 = r6,
  a6 = n6,
  i6 = a6(),
  o6 = i6,
  s6 = o6,
  l6 = bl;
function c6(e, t) {
  return e && s6(e, t, l6);
}
var sx = c6,
  u6 = Ui;
function f6(e, t) {
  return function (r, n) {
    if (r == null) return r;
    if (!u6(r)) return e(r, n);
    for (
      var a = r.length, i = t ? a : -1, o = Object(r);
      (t ? i-- : ++i < a) && n(o[i], i, o) !== !1;

    );
    return r;
  };
}
var d6 = f6,
  p6 = sx,
  h6 = d6,
  v6 = h6(p6),
  Wd = v6,
  m6 = Wd,
  g6 = Ui;
function y6(e, t) {
  var r = -1,
    n = g6(e) ? Array(e.length) : [];
  return (
    m6(e, function (a, i, o) {
      n[++r] = t(a, i, o);
    }),
    n
  );
}
var lx = y6;
function b6(e, t) {
  var r = e.length;
  for (e.sort(t); r--; ) e[r] = e[r].value;
  return e;
}
var x6 = b6,
  Hv = Na;
function w6(e, t) {
  if (e !== t) {
    var r = e !== void 0,
      n = e === null,
      a = e === e,
      i = Hv(e),
      o = t !== void 0,
      s = t === null,
      l = t === t,
      c = Hv(t);
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
var _6 = w6,
  O6 = _6;
function S6(e, t, r) {
  for (
    var n = -1, a = e.criteria, i = t.criteria, o = a.length, s = r.length;
    ++n < o;

  ) {
    var l = O6(a[n], i[n]);
    if (l) {
      if (n >= s) return l;
      var c = r[n];
      return l * (c == 'desc' ? -1 : 1);
    }
  }
  return e.index - t.index;
}
var E6 = S6,
  hc = Dd,
  $6 = jd,
  A6 = yn,
  C6 = lx,
  P6 = x6,
  k6 = x0,
  T6 = E6,
  M6 = La,
  I6 = Me;
function R6(e, t, r) {
  t.length
    ? (t = hc(t, function (i) {
        return I6(i)
          ? function (o) {
              return $6(o, i.length === 1 ? i[0] : i);
            }
          : i;
      }))
    : (t = [M6]);
  var n = -1;
  t = hc(t, k6(A6));
  var a = C6(e, function (i, o, s) {
    var l = hc(t, function (c) {
      return c(i);
    });
    return { criteria: l, index: ++n, value: i };
  });
  return P6(a, function (i, o) {
    return T6(i, o, r);
  });
}
var cx = R6;
function D6(e, t, r) {
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
var j6 = D6,
  N6 = j6,
  Vv = Math.max;
function L6(e, t, r) {
  return (
    (t = Vv(t === void 0 ? e.length - 1 : t, 0)),
    function () {
      for (
        var n = arguments, a = -1, i = Vv(n.length - t, 0), o = Array(i);
        ++a < i;

      )
        o[a] = n[t + a];
      a = -1;
      for (var s = Array(t + 1); ++a < t; ) s[a] = n[a];
      return (s[t] = r(o)), N6(e, this, s);
    }
  );
}
var B6 = L6;
function F6(e) {
  return function () {
    return e;
  };
}
var z6 = F6,
  W6 = Hn,
  U6 = (function () {
    try {
      var e = W6(Object, 'defineProperty');
      return e({}, '', {}), e;
    } catch {}
  })(),
  ux = U6,
  H6 = z6,
  Gv = ux,
  V6 = La,
  G6 = Gv
    ? function (e, t) {
        return Gv(e, 'toString', {
          configurable: !0,
          enumerable: !1,
          value: H6(t),
          writable: !0,
        });
      }
    : V6,
  q6 = G6,
  Y6 = 800,
  K6 = 16,
  X6 = Date.now;
function J6(e) {
  var t = 0,
    r = 0;
  return function () {
    var n = X6(),
      a = K6 - (n - r);
    if (((r = n), a > 0)) {
      if (++t >= Y6) return arguments[0];
    } else t = 0;
    return e.apply(void 0, arguments);
  };
}
var Z6 = J6,
  Q6 = q6,
  eF = Z6,
  tF = eF(Q6),
  rF = tF,
  nF = La,
  aF = B6,
  iF = rF;
function oF(e, t) {
  return iF(aF(e, t, nF), e + '');
}
var sF = oF,
  lF = Ed,
  cF = Ui,
  uF = kd,
  fF = rr;
function dF(e, t, r) {
  if (!fF(r)) return !1;
  var n = typeof t;
  return (n == 'number' ? cF(r) && uF(t, r.length) : n == 'string' && t in r)
    ? lF(r[t], e)
    : !1;
}
var Pl = dF,
  pF = ox,
  hF = cx,
  vF = sF,
  qv = Pl,
  mF = vF(function (e, t) {
    if (e == null) return [];
    var r = t.length;
    return (
      r > 1 && qv(e, t[0], t[1])
        ? (t = [])
        : r > 2 && qv(t[0], t[1], t[2]) && (t = [t[0]]),
      hF(e, pF(t, 1), [])
    );
  }),
  Ud = mF;
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
function gF(e, t) {
  return wF(e) || xF(e, t) || bF(e, t) || yF();
}
function yF() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bF(e, t) {
  if (!!e) {
    if (typeof e == 'string') return Yv(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === 'Object' && e.constructor && (r = e.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Yv(e, t);
  }
}
function Yv(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function xF(e, t) {
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
function wF(e) {
  if (Array.isArray(e)) return e;
}
function Kv(e, t) {
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
function vc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Kv(Object(r), !0).forEach(function (n) {
          _F(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Kv(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function _F(e, t, r) {
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
function OF(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function Xv(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function SF(e, t, r) {
  return t && Xv(e.prototype, t), r && Xv(e, r), e;
}
function EF(e, t) {
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
function $F(e) {
  var t = PF();
  return function () {
    var n = hs(e),
      a;
    if (t) {
      var i = hs(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else a = n.apply(this, arguments);
    return AF(this, a);
  };
}
function AF(e, t) {
  return t && (Ao(t) === 'object' || typeof t == 'function') ? t : CF(e);
}
function CF(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function PF() {
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
function hs(e) {
  return (
    (hs = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    hs(e)
  );
}
function kF(e) {
  return Me(e) && mt(e[0]) && mt(e[1]) ? e.join(' ~ ') : e;
}
var Hd = (function (e) {
  EF(r, e);
  var t = $F(r);
  function r() {
    return OF(this, r), t.apply(this, arguments);
  }
  return (
    SF(r, [
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
              f = (c ? Ud(i, c) : i).map(function (d, h) {
                if (d.type === 'none') return null;
                var v = vc(
                    {
                      display: 'block',
                      paddingTop: 4,
                      paddingBottom: 4,
                      color: d.color || '#000',
                    },
                    l
                  ),
                  p = d.formatter || s || kF,
                  m = d.value,
                  y = d.name;
                if (p && m && y) {
                  var _ = p(m, y, d, h, i);
                  if (Array.isArray(_)) {
                    var x = _,
                      b = gF(x, 2);
                    (m = b[0]), (y = b[1]);
                  } else m = _;
                }
                return g.createElement(
                  'li',
                  {
                    className: 'recharts-tooltip-item',
                    key: 'tooltip-item-'.concat(h),
                    style: v,
                  },
                  mt(y)
                    ? g.createElement(
                        'span',
                        { className: 'recharts-tooltip-item-name' },
                        y
                      )
                    : null,
                  mt(y)
                    ? g.createElement(
                        'span',
                        { className: 'recharts-tooltip-item-separator' },
                        o
                      )
                    : null,
                  g.createElement(
                    'span',
                    { className: 'recharts-tooltip-item-value' },
                    m
                  ),
                  g.createElement(
                    'span',
                    { className: 'recharts-tooltip-item-unit' },
                    d.unit || ''
                  )
                );
              });
            return g.createElement(
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
            d = vc(
              {
                margin: 0,
                padding: 10,
                backgroundColor: '#fff',
                border: '1px solid #ccc',
                whiteSpace: 'nowrap',
              },
              o
            ),
            h = vc({ margin: 0 }, l),
            v = !ye(c),
            p = v ? c : '',
            m = Ze('recharts-default-tooltip', i),
            y = Ze('recharts-tooltip-label', s);
          return (
            v && u && f !== void 0 && f !== null && (p = u(c, f)),
            g.createElement(
              'div',
              { className: m, style: d },
              g.createElement(
                'p',
                { className: y, style: h },
                g.isValidElement(p) ? p : ''.concat(p)
              ),
              this.renderContent()
            )
          );
        },
      },
    ]),
    r
  );
})(S.exports.PureComponent);
Hd.displayName = 'DefaultTooltipContent';
Hd.defaultProps = {
  separator: ' : ',
  contentStyle: {},
  itemStyle: {},
  labelStyle: {},
};
var TF = function () {
    return !(
      typeof window < 'u' &&
      window.document &&
      window.document.createElement &&
      window.setTimeout
    );
  },
  cn = {
    isSsr: TF(),
    get: function (t) {
      return cn[t];
    },
    set: function (t, r) {
      if (typeof t == 'string') cn[t] = r;
      else {
        var n = Object.keys(t);
        n &&
          n.length &&
          n.forEach(function (a) {
            cn[a] = t[a];
          });
      }
    },
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
function Jv(e, t) {
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
function zr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Jv(Object(r), !0).forEach(function (n) {
          ui(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Jv(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function ui(e, t, r) {
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
function MF(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function Zv(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function IF(e, t, r) {
  return t && Zv(e.prototype, t), r && Zv(e, r), e;
}
function RF(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && ju(e, t);
}
function ju(e, t) {
  return (
    (ju =
      Object.setPrototypeOf ||
      function (n, a) {
        return (n.__proto__ = a), n;
      }),
    ju(e, t)
  );
}
function DF(e) {
  var t = LF();
  return function () {
    var n = vs(e),
      a;
    if (t) {
      var i = vs(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else a = n.apply(this, arguments);
    return jF(this, a);
  };
}
function jF(e, t) {
  return t && (Co(t) === 'object' || typeof t == 'function') ? t : NF(e);
}
function NF(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function LF() {
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
function vs(e) {
  return (
    (vs = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    vs(e)
  );
}
var Xa = 'recharts-tooltip-wrapper',
  Qv = 1;
function BF(e) {
  return e.dataKey;
}
function FF(e, t) {
  return e === !0 ? rs(t, BF) : pe(e) ? rs(t, e) : t;
}
function zF(e, t) {
  return g.isValidElement(e)
    ? g.cloneElement(e, t)
    : pe(e)
    ? g.createElement(e, t)
    : g.createElement(Hd, t);
}
var ra = (function (e) {
  RF(r, e);
  var t = DF(r);
  function r() {
    var n;
    MF(this, r);
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
        var y = h[l] - c - v,
          _ = h[l] + v;
        if (d[l]) return _;
        var x = h[l] + c + v,
          b = m[l] + u;
        return x > b ? Math.max(y, m[l]) : Math.max(_, m[l]);
      }),
      n
    );
  }
  return (
    IF(r, [
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
            (Math.abs(l.width - i) > Qv || Math.abs(l.height - o) > Qv) &&
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
            h = FF(
              d,
              f && s && s.length
                ? s.filter(function (k) {
                    return !ye(k.value);
                  })
                : s
            ),
            v = h && h.length,
            p = this.props,
            m = p.content,
            y = p.viewBox,
            _ = p.coordinate,
            x = p.position,
            b = p.active,
            w = p.wrapperStyle,
            O = zr(
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
            E,
            $;
          if (x && K(x.x) && K(x.y)) (E = x.x), ($ = x.y);
          else {
            var A = this.state,
              P = A.boxWidth,
              C = A.boxHeight;
            P > 0 && C > 0 && _
              ? ((E = this.getTranslate({
                  key: 'x',
                  tooltipDimension: P,
                  viewBoxDimension: y.width,
                })),
                ($ = this.getTranslate({
                  key: 'y',
                  tooltipDimension: C,
                  viewBoxDimension: y.height,
                })))
              : (O.visibility = 'hidden');
          }
          (O = zr(
            zr(
              {},
              $u({
                transform: this.props.useTranslate3d
                  ? 'translate3d('.concat(E, 'px, ').concat($, 'px, 0)')
                  : 'translate('.concat(E, 'px, ').concat($, 'px)'),
              })
            ),
            O
          )),
            l &&
              b &&
              (O = zr(
                zr(
                  {},
                  $u({ transition: 'transform '.concat(c, 'ms ').concat(u) })
                ),
                O
              ));
          var T = Ze(
            Xa,
            ((a = {}),
            ui(a, ''.concat(Xa, '-right'), K(E) && _ && K(_.x) && E >= _.x),
            ui(a, ''.concat(Xa, '-left'), K(E) && _ && K(_.x) && E < _.x),
            ui(a, ''.concat(Xa, '-bottom'), K($) && _ && K(_.y) && $ >= _.y),
            ui(a, ''.concat(Xa, '-top'), K($) && _ && K(_.y) && $ < _.y),
            a)
          );
          return g.createElement(
            'div',
            {
              tabIndex: -1,
              role: 'dialog',
              onKeyDown: function (D) {
                D.key === 'Escape' &&
                  i.setState({
                    dismissed: !0,
                    dismissedAtCoordinate: zr(
                      zr({}, i.state.dismissedAtCoordinate),
                      {},
                      { x: i.props.coordinate.x, y: i.props.coordinate.y }
                    ),
                  });
              },
              className: T,
              style: O,
              ref: function (D) {
                i.wrapperNode = D;
              },
            },
            zF(m, zr(zr({}, this.props), {}, { payload: h }))
          );
        },
      },
    ]),
    r
  );
})(S.exports.PureComponent);
ra.displayName = 'Tooltip';
ra.defaultProps = {
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
  isAnimationActive: !cn.isSsr,
  animationEasing: 'ease',
  animationDuration: 400,
  filterNull: !0,
  useTranslate3d: !1,
};
var WF = Fr,
  UF = function () {
    return WF.Date.now();
  },
  HF = UF,
  VF = /\s/;
function GF(e) {
  for (var t = e.length; t-- && VF.test(e.charAt(t)); );
  return t;
}
var qF = GF,
  YF = qF,
  KF = /^\s+/;
function XF(e) {
  return e && e.slice(0, YF(e) + 1).replace(KF, '');
}
var JF = XF,
  ZF = JF,
  em = rr,
  QF = Na,
  tm = 0 / 0,
  ez = /^[-+]0x[0-9a-f]+$/i,
  tz = /^0b[01]+$/i,
  rz = /^0o[0-7]+$/i,
  nz = parseInt;
function az(e) {
  if (typeof e == 'number') return e;
  if (QF(e)) return tm;
  if (em(e)) {
    var t = typeof e.valueOf == 'function' ? e.valueOf() : e;
    e = em(t) ? t + '' : t;
  }
  if (typeof e != 'string') return e === 0 ? e : +e;
  e = ZF(e);
  var r = tz.test(e);
  return r || rz.test(e) ? nz(e.slice(2), r ? 2 : 8) : ez.test(e) ? tm : +e;
}
var fx = az,
  iz = rr,
  mc = HF,
  rm = fx,
  oz = 'Expected a function',
  sz = Math.max,
  lz = Math.min;
function cz(e, t, r) {
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
  if (typeof e != 'function') throw new TypeError(oz);
  (t = rm(t) || 0),
    iz(r) &&
      ((u = !!r.leading),
      (f = 'maxWait' in r),
      (i = f ? sz(rm(r.maxWait) || 0, t) : i),
      (d = 'trailing' in r ? !!r.trailing : d));
  function h(O) {
    var E = n,
      $ = a;
    return (n = a = void 0), (c = O), (o = e.apply($, E)), o;
  }
  function v(O) {
    return (c = O), (s = setTimeout(y, t)), u ? h(O) : o;
  }
  function p(O) {
    var E = O - l,
      $ = O - c,
      A = t - E;
    return f ? lz(A, i - $) : A;
  }
  function m(O) {
    var E = O - l,
      $ = O - c;
    return l === void 0 || E >= t || E < 0 || (f && $ >= i);
  }
  function y() {
    var O = mc();
    if (m(O)) return _(O);
    s = setTimeout(y, p(O));
  }
  function _(O) {
    return (s = void 0), d && n ? h(O) : ((n = a = void 0), o);
  }
  function x() {
    s !== void 0 && clearTimeout(s), (c = 0), (n = l = a = s = void 0);
  }
  function b() {
    return s === void 0 ? o : _(mc());
  }
  function w() {
    var O = mc(),
      E = m(O);
    if (((n = arguments), (a = this), (l = O), E)) {
      if (s === void 0) return v(l);
      if (f) return clearTimeout(s), (s = setTimeout(y, t)), h(l);
    }
    return s === void 0 && (s = setTimeout(y, t)), o;
  }
  return (w.cancel = x), (w.flush = b), w;
}
var dx = cz,
  Nu = function (e, t) {
    return (
      (Nu =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (r, n) {
            r.__proto__ = n;
          }) ||
        function (r, n) {
          for (var a in n)
            Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
        }),
      Nu(e, t)
    );
  };
function uz(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError(
      'Class extends value ' + String(t) + ' is not a constructor or null'
    );
  Nu(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype =
    t === null ? Object.create(t) : ((r.prototype = t.prototype), new r());
}
function fz(e, t) {
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
var co =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
    ? window
    : typeof global < 'u'
    ? global
    : typeof self < 'u'
    ? self
    : {};
function dz(e) {
  var t = typeof e;
  return e != null && (t == 'object' || t == 'function');
}
var Vd = dz,
  pz = typeof co == 'object' && co && co.Object === Object && co,
  hz = pz,
  vz = hz,
  mz = typeof self == 'object' && self && self.Object === Object && self,
  gz = vz || mz || Function('return this')(),
  px = gz,
  yz = px,
  bz = function () {
    return yz.Date.now();
  },
  xz = bz,
  wz = /\s/;
function _z(e) {
  for (var t = e.length; t-- && wz.test(e.charAt(t)); );
  return t;
}
var Oz = _z,
  Sz = Oz,
  Ez = /^\s+/;
function $z(e) {
  return e && e.slice(0, Sz(e) + 1).replace(Ez, '');
}
var Az = $z,
  Cz = px,
  Pz = Cz.Symbol,
  hx = Pz,
  nm = hx,
  vx = Object.prototype,
  kz = vx.hasOwnProperty,
  Tz = vx.toString,
  Ja = nm ? nm.toStringTag : void 0;
function Mz(e) {
  var t = kz.call(e, Ja),
    r = e[Ja];
  try {
    e[Ja] = void 0;
    var n = !0;
  } catch {}
  var a = Tz.call(e);
  return n && (t ? (e[Ja] = r) : delete e[Ja]), a;
}
var Iz = Mz,
  Rz = Object.prototype,
  Dz = Rz.toString;
function jz(e) {
  return Dz.call(e);
}
var Nz = jz,
  am = hx,
  Lz = Iz,
  Bz = Nz,
  Fz = '[object Null]',
  zz = '[object Undefined]',
  im = am ? am.toStringTag : void 0;
function Wz(e) {
  return e == null
    ? e === void 0
      ? zz
      : Fz
    : im && im in Object(e)
    ? Lz(e)
    : Bz(e);
}
var Uz = Wz;
function Hz(e) {
  return e != null && typeof e == 'object';
}
var Vz = Hz,
  Gz = Uz,
  qz = Vz,
  Yz = '[object Symbol]';
function Kz(e) {
  return typeof e == 'symbol' || (qz(e) && Gz(e) == Yz);
}
var Xz = Kz,
  Jz = Az,
  om = Vd,
  Zz = Xz,
  sm = 0 / 0,
  Qz = /^[-+]0x[0-9a-f]+$/i,
  eW = /^0b[01]+$/i,
  tW = /^0o[0-7]+$/i,
  rW = parseInt;
function nW(e) {
  if (typeof e == 'number') return e;
  if (Zz(e)) return sm;
  if (om(e)) {
    var t = typeof e.valueOf == 'function' ? e.valueOf() : e;
    e = om(t) ? t + '' : t;
  }
  if (typeof e != 'string') return e === 0 ? e : +e;
  e = Jz(e);
  var r = eW.test(e);
  return r || tW.test(e) ? rW(e.slice(2), r ? 2 : 8) : Qz.test(e) ? sm : +e;
}
var aW = nW,
  iW = Vd,
  gc = xz,
  lm = aW,
  oW = 'Expected a function',
  sW = Math.max,
  lW = Math.min;
function cW(e, t, r) {
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
  if (typeof e != 'function') throw new TypeError(oW);
  (t = lm(t) || 0),
    iW(r) &&
      ((u = !!r.leading),
      (f = 'maxWait' in r),
      (i = f ? sW(lm(r.maxWait) || 0, t) : i),
      (d = 'trailing' in r ? !!r.trailing : d));
  function h(O) {
    var E = n,
      $ = a;
    return (n = a = void 0), (c = O), (o = e.apply($, E)), o;
  }
  function v(O) {
    return (c = O), (s = setTimeout(y, t)), u ? h(O) : o;
  }
  function p(O) {
    var E = O - l,
      $ = O - c,
      A = t - E;
    return f ? lW(A, i - $) : A;
  }
  function m(O) {
    var E = O - l,
      $ = O - c;
    return l === void 0 || E >= t || E < 0 || (f && $ >= i);
  }
  function y() {
    var O = gc();
    if (m(O)) return _(O);
    s = setTimeout(y, p(O));
  }
  function _(O) {
    return (s = void 0), d && n ? h(O) : ((n = a = void 0), o);
  }
  function x() {
    s !== void 0 && clearTimeout(s), (c = 0), (n = l = a = s = void 0);
  }
  function b() {
    return s === void 0 ? o : _(gc());
  }
  function w() {
    var O = gc(),
      E = m(O);
    if (((n = arguments), (a = this), (l = O), E)) {
      if (s === void 0) return v(l);
      if (f) return clearTimeout(s), (s = setTimeout(y, t)), h(l);
    }
    return s === void 0 && (s = setTimeout(y, t)), o;
  }
  return (w.cancel = x), (w.flush = b), w;
}
var mx = cW,
  uW = mx,
  fW = Vd,
  dW = 'Expected a function';
function pW(e, t, r) {
  var n = !0,
    a = !0;
  if (typeof e != 'function') throw new TypeError(dW);
  return (
    fW(r) &&
      ((n = 'leading' in r ? !!r.leading : n),
      (a = 'trailing' in r ? !!r.trailing : a)),
    uW(e, t, { leading: n, maxWait: t, trailing: a })
  );
}
var hW = pW,
  vW = function (e, t, r, n) {
    switch (t) {
      case 'debounce':
        return mx(e, r, n);
      case 'throttle':
        return hW(e, r, n);
      default:
        return e;
    }
  },
  Lu = function (e) {
    return typeof e == 'function';
  },
  Za = function () {
    return typeof window > 'u';
  },
  cm = function (e) {
    return e instanceof Element || e instanceof HTMLDocument;
  },
  mW = function (e, t, r, n) {
    return function (a) {
      var i = a.width,
        o = a.height;
      t(function (s) {
        return (s.width === i && s.height === o) ||
          (s.width === i && !n) ||
          (s.height === o && !r)
          ? s
          : (e && Lu(e) && e(i, o), { width: i, height: o });
      });
    };
  },
  gW = (function (e) {
    uz(t, e);
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
          if (!Za()) {
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
          if (Za()) return null;
          if (u) return document.querySelector(u);
          if (f && cm(f)) return f;
          if (n.targetRef && cm(n.targetRef.current))
            return n.targetRef.current;
          var d = wy.exports.findDOMNode(n);
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
            var m = mW(p, n.setState.bind(n), d, v);
            c.forEach(function (y) {
              var _ = (y && y.contentRect) || {},
                x = _.width,
                b = _.height,
                w = !n.skipOnMount && !Za();
              w && m({ width: x, height: b }), (n.skipOnMount = !1);
            });
          }
        }),
        (n.getRenderType = function () {
          var c = n.props,
            u = c.render,
            f = c.children;
          return Lu(u)
            ? 'renderProp'
            : Lu(f)
            ? 'childFunction'
            : S.exports.isValidElement(f)
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
        (n.targetRef = S.exports.createRef()),
        (n.observableElement = null),
        Za() ||
          ((n.resizeHandler = vW(n.createResizeHandler, i, s, l)),
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
        Za() ||
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
              var h = fz(u, ['targetRef']);
              return S.exports.cloneElement(d, h);
            }
            return S.exports.cloneElement(d, u);
          case 'childArray':
            return (
              (d = a),
              d.map(function (v) {
                return !!v && S.exports.cloneElement(v, u);
              })
            );
          default:
            return S.exports.createElement(o, null);
        }
      }),
      t
    );
  })(S.exports.PureComponent),
  ua = function (t, r) {
    for (
      var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), i = 2;
      i < n;
      i++
    )
      a[i - 2] = arguments[i];
  };
function Bu() {
  return (
    (Bu =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Bu.apply(this, arguments)
  );
}
function um(e, t) {
  return wW(e) || xW(e, t) || bW(e, t) || yW();
}
function yW() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bW(e, t) {
  if (!!e) {
    if (typeof e == 'string') return fm(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === 'Object' && e.constructor && (r = e.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return fm(e, t);
  }
}
function fm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function xW(e, t) {
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
function wW(e) {
  if (Array.isArray(e)) return e;
}
var _W = S.exports.forwardRef(function (e, t) {
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
      p = S.exports.useState({ containerWidth: -1, containerHeight: -1 }),
      m = um(p, 2),
      y = m[0],
      _ = m[1],
      x = S.exports.useRef(null);
    S.exports.useImperativeHandle(
      t,
      function () {
        return x;
      },
      [x]
    );
    var b = S.exports.useState(!1),
      w = um(b, 2),
      O = w[0],
      E = w[1],
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
            var j = y.containerWidth,
              R = y.containerHeight,
              N = D.containerWidth,
              F = D.containerHeight;
            (N !== j || F !== R) &&
              _({ containerWidth: N, containerHeight: F });
          }
        }
      },
      P = d > 0 ? dx(A, d) : A,
      C = function () {
        var D = y.containerWidth,
          j = y.containerHeight;
        if (D < 0 || j < 0) return null;
        ua(
          Cn(a) || Cn(o),
          `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`,
          a,
          o
        ),
          ua(!r || r > 0, 'The aspect(%s) must be greater than zero.', r);
        var R = Cn(a) ? D : a,
          N = Cn(o) ? j : o;
        return (
          r &&
            r > 0 &&
            (R ? (N = R / r) : N && (R = N * r), c && N > c && (N = c)),
          ua(
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
          S.exports.cloneElement(u, { width: R, height: N })
        );
      };
    S.exports.useEffect(
      function () {
        if (O) {
          var k = $();
          k && _(k);
        }
      },
      [O]
    ),
      S.exports.useEffect(function () {
        E(!0);
      }, []);
    var T = { width: a, height: o, minWidth: s, minHeight: l, maxHeight: c };
    return g.createElement(
      gW,
      { handleWidth: !0, handleHeight: !0, onResize: P, targetRef: x },
      g.createElement(
        'div',
        Bu({}, h != null ? { id: ''.concat(h) } : {}, {
          className: Ze('recharts-responsive-container', v),
          style: T,
          ref: x,
        }),
        C()
      )
    );
  }),
  gx = function (t) {
    return null;
  };
gx.displayName = 'Cell';
var Fu = { exports: {} },
  yc = '('.charCodeAt(0),
  bc = ')'.charCodeAt(0),
  uo = "'".charCodeAt(0),
  xc = '"'.charCodeAt(0),
  wc = '\\'.charCodeAt(0),
  fo = '/'.charCodeAt(0),
  _c = ','.charCodeAt(0),
  Oc = ':'.charCodeAt(0),
  dm = '*'.charCodeAt(0),
  OW = function (e) {
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
        y = '',
        _ = '';
      u < d;

    )
      if (f <= 32) {
        n = u;
        do (n += 1), (f = r.charCodeAt(n));
        while (f <= 32);
        (o = r.slice(u, n)),
          (i = t[t.length - 1]),
          f === bc && v
            ? (_ = o)
            : i && i.type === 'div'
            ? (i.after = o)
            : f === _c || f === Oc || (f === fo && r.charCodeAt(n + 1) !== dm)
            ? (y = o)
            : t.push({ type: 'space', sourceIndex: u, value: o }),
          (u = n);
      } else if (f === uo || f === xc) {
        (n = u),
          (a = f === uo ? "'" : '"'),
          (o = { type: 'string', sourceIndex: u, quote: a });
        do
          if (((s = !1), (n = r.indexOf(a, n + 1)), ~n))
            for (l = n; r.charCodeAt(l - 1) === wc; ) (l -= 1), (s = !s);
          else (r += a), (n = r.length - 1), (o.unclosed = !0);
        while (s);
        (o.value = r.slice(u + 1, n)),
          t.push(o),
          (u = n + 1),
          (f = r.charCodeAt(u));
      } else if (f === fo && r.charCodeAt(u + 1) === dm)
        (o = { type: 'comment', sourceIndex: u }),
          (n = r.indexOf('*/', u)),
          n === -1 && ((o.unclosed = !0), (n = r.length)),
          (o.value = r.slice(u + 2, n)),
          t.push(o),
          (u = n + 2),
          (f = r.charCodeAt(u));
      else if (f === fo || f === _c || f === Oc)
        (o = r[u]),
          t.push({
            type: 'div',
            sourceIndex: u - y.length,
            value: o,
            before: y,
            after: '',
          }),
          (y = ''),
          (u += 1),
          (f = r.charCodeAt(u));
      else if (yc === f) {
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
          m === 'url' && f !== uo && f !== xc)
        ) {
          n -= 1;
          do
            if (((s = !1), (n = r.indexOf(')', n + 1)), ~n))
              for (l = n; r.charCodeAt(l - 1) === wc; ) (l -= 1), (s = !s);
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
      } else if (bc === f && v)
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
        do f === wc && (n += 1), (n += 1), (f = r.charCodeAt(n));
        while (
          n < d &&
          !(
            f <= 32 ||
            f === uo ||
            f === xc ||
            f === _c ||
            f === Oc ||
            f === fo ||
            f === yc ||
            (f === bc && v)
          )
        );
        (o = r.slice(u, n)),
          yc === f
            ? (m = o)
            : t.push({ type: 'word', sourceIndex: u, value: o }),
          (u = n);
      }
    for (u = h.length - 1; u; u -= 1) h[u].unclosed = !0;
    return h[0].nodes;
  },
  SW = function e(t, r, n) {
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
function pm(e, t) {
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
    ? ((a = yx(e.nodes)),
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
function yx(e, t) {
  var r, n;
  if (Array.isArray(e)) {
    for (r = '', n = e.length - 1; ~n; n -= 1) r = pm(e[n], t) + r;
    return r;
  }
  return pm(e, t);
}
var EW = yx,
  Sc,
  hm;
function $W() {
  if (hm) return Sc;
  hm = 1;
  var e = '-'.charCodeAt(0),
    t = '+'.charCodeAt(0),
    r = '.'.charCodeAt(0),
    n = 'e'.charCodeAt(0),
    a = 'E'.charCodeAt(0);
  return (
    (Sc = function (i) {
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
    Sc
  );
}
var AW = OW,
  bx = SW,
  xx = EW;
function pn(e) {
  return this instanceof pn ? ((this.nodes = AW(e)), this) : new pn(e);
}
pn.prototype.toString = function () {
  return Array.isArray(this.nodes) ? xx(this.nodes) : '';
};
pn.prototype.walk = function (e, t) {
  return bx(this.nodes, e, t), this;
};
pn.unit = $W();
pn.walk = bx;
pn.stringify = xx;
var CW = pn;
function PW(e) {
  throw new Error(
    'Could not dynamically require "' +
      e +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
  );
}
var wx = {};
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
      for (var h = [], v = d.pop, p = d.rule, m = 0, y = v.length; m < y; m++)
        h.push([v[m], p[m]]);
      return h;
    }
    function a(d) {
      for (var h = {}, v = d.idx, p = d.goto, m = 0, y = v.length; m < y; m++) {
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
          y = d.state,
          _ = d.mode,
          x = d.goto,
          b = 0,
          w = v.length;
        b < w;
        b++
      ) {
        for (var O = v[b], E = {}, $ = 0; $ < O; $++) {
          var A = p.shift();
          switch (m.shift()) {
            case 2:
              E[A] = [_.shift(), x.shift()];
              break;
            case 0:
              E[A] = y.shift();
              break;
            default:
              E[A] = [3];
          }
        }
        h.push(E);
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
          y = {};
        if (!v && this.state_descriptions_ && this.state_descriptions_[h])
          return [this.state_descriptions_[h]];
        for (var _ in this.table[h])
          if (((_ = +_), _ !== p)) {
            var x = v ? _ : this.describeSymbol(_);
            x && !y[x] && (m.push(x), (y[x] = !0));
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
            var y = p[v];
            (y.value *= -1), (this.$ = y);
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
          y = new Array(128),
          _ = this.table,
          x = 0,
          b = 0;
        this.TERROR;
        var w = this.EOF;
        this.options.errorRecoveryTokenDiscardCount | 0;
        var O = [0, 54],
          E;
        this.__lexer__
          ? (E = this.__lexer__)
          : (E = this.__lexer__ = Object.create(this.lexer));
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
        function A(oe, U) {
          for (var ee in U)
            typeof oe[ee] > 'u' &&
              Object.prototype.hasOwnProperty.call(U, ee) &&
              (oe[ee] = U[ee]);
        }
        A($, this.yy),
          ($.lexer = E),
          ($.parser = this),
          typeof $.parseError == 'function'
            ? (this.parseError = function (U, ee, ie) {
                return (
                  ie || (ie = this.JisonParserError),
                  $.parseError.call(this, U, ee, ie)
                );
              })
            : (this.parseError = this.originalParseError),
          typeof $.quoteName == 'function'
            ? (this.quoteName = function (U) {
                return $.quoteName.call(this, U);
              })
            : (this.quoteName = this.originalQuoteName),
          (this.cleanupAfterParse = function (U, ee, ie) {
            var L;
            if (ee) {
              var J;
              ($.post_parse || this.post_parse) &&
                (J = this.constructParseErrorInfo(null, null, null, !1)),
                $.post_parse &&
                  ((L = $.post_parse.call(this, $, U, J)),
                  typeof L < 'u' && (U = L)),
                this.post_parse &&
                  ((L = this.post_parse.call(this, $, U, J)),
                  typeof L < 'u' && (U = L)),
                J && J.destroy && J.destroy();
            }
            if (this.__reentrant_call_depth > 1) return U;
            if (
              (E.cleanupAfterLex && E.cleanupAfterLex(ie),
              $ &&
                (($.lexer = void 0),
                ($.parser = void 0),
                E.yy === $ && (E.yy = void 0)),
              ($ = void 0),
              (this.parseError = this.originalParseError),
              (this.quoteName = this.originalQuoteName),
              (p.length = 0),
              (m.length = 0),
              (y.length = 0),
              (x = 0),
              !ie)
            ) {
              for (var de = this.__error_infos.length - 1; de >= 0; de--) {
                var ce = this.__error_infos[de];
                ce && typeof ce.destroy == 'function' && ce.destroy();
              }
              this.__error_infos.length = 0;
            }
            return U;
          }),
          (this.constructParseErrorInfo = function (U, ee, ie, L) {
            var J = {
              errStr: U,
              exception: ee,
              text: E.match,
              value: E.yytext,
              token: this.describeSymbol(b) || b,
              token_id: b,
              line: E.yylineno,
              expected: ie,
              recoverable: L,
              state: k,
              action: D,
              new_state: Q,
              symbol_stack: p,
              state_stack: m,
              value_stack: y,
              stack_pointer: x,
              yy: $,
              lexer: E,
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
          var oe = E.lex();
          return typeof oe != 'number' && (oe = v.symbols_[oe] || oe), oe || w;
        }
        function C() {
          var oe = E.fastLex();
          return typeof oe != 'number' && (oe = v.symbols_[oe] || oe), oe || w;
        }
        var T = P,
          k,
          D,
          j,
          R,
          N = { $: !0, _$: void 0, yy: $ },
          F,
          M,
          Y,
          Q,
          ne = !1;
        try {
          if (
            (this.__reentrant_call_depth++,
            E.setInput(h, $),
            typeof E.canIUse == 'function')
          ) {
            var ve = E.canIUse();
            ve.fastLex && typeof C == 'function' && (T = C);
          }
          for (
            y[x] = null,
              m[x] = 0,
              p[x] = 0,
              ++x,
              this.pre_parse && this.pre_parse.call(this, $),
              $.pre_parse && $.pre_parse.call(this, $),
              Q = m[x - 1];
            ;

          ) {
            if (((k = Q), this.defaultActions[k]))
              (D = 2), (Q = this.defaultActions[k]);
            else if (
              (b || (b = T()),
              (R = (_[k] && _[k][b]) || O),
              (Q = R[1]),
              (D = R[0]),
              !D)
            ) {
              var Se,
                le = this.describeSymbol(b) || b,
                Ee = this.collect_expected_token_set(k);
              typeof E.yylineno == 'number'
                ? (Se = 'Parse error on line ' + (E.yylineno + 1) + ': ')
                : (Se = 'Parse error: '),
                typeof E.showPosition == 'function' &&
                  (Se +=
                    `
` +
                    E.showPosition(79 - 10, 10) +
                    `
`),
                Ee.length
                  ? (Se +=
                      'Expecting ' + Ee.join(', ') + ', got unexpected ' + le)
                  : (Se += 'Unexpected ' + le),
                (F = this.constructParseErrorInfo(Se, null, Ee, !1)),
                (j = this.parseError(F.errStr, F, this.JisonParserError)),
                typeof j < 'u' && (ne = j);
              break;
            }
            switch (D) {
              default:
                if (D instanceof Array) {
                  (F = this.constructParseErrorInfo(
                    'Parse Error: multiple actions possible at state: ' +
                      k +
                      ', token: ' +
                      b,
                    null,
                    null,
                    !1
                  )),
                    (j = this.parseError(F.errStr, F, this.JisonParserError)),
                    typeof j < 'u' && (ne = j);
                  break;
                }
                (F = this.constructParseErrorInfo(
                  'Parsing halted. No viable error recovery approach available due to internal system failure.',
                  null,
                  null,
                  !1
                )),
                  (j = this.parseError(F.errStr, F, this.JisonParserError)),
                  typeof j < 'u' && (ne = j);
                break;
              case 1:
                (p[x] = b), (y[x] = E.yytext), (m[x] = Q), ++x, (b = 0);
                continue;
              case 2:
                if (
                  ((Y = this.productions_[Q - 1]),
                  (M = Y[1]),
                  (j = this.performAction.call(N, Q, x - 1, y)),
                  typeof j < 'u')
                ) {
                  ne = j;
                  break;
                }
                x -= M;
                var it = Y[0];
                (p[x] = it),
                  (y[x] = N.$),
                  (Q = _[m[x - 1]][it]),
                  (m[x] = Q),
                  ++x;
                continue;
              case 3:
                x !== -2 && ((ne = !0), x--, typeof y[x] < 'u' && (ne = y[x]));
                break;
            }
            break;
          }
        } catch (oe) {
          if (oe instanceof this.JisonParserError) throw oe;
          if (
            E &&
            typeof E.JisonLexerError == 'function' &&
            oe instanceof E.JisonLexerError
          )
            throw oe;
          (F = this.constructParseErrorInfo(
            'Parsing aborted due to exception.',
            oe,
            null,
            !1
          )),
            (ne = !1),
            (j = this.parseError(F.errStr, F, this.JisonParserError)),
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
          var y = p.exception;
          (this.message = y.message || v), (m = y.stack);
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
        constructLexErrorInfo: function (p, m, y) {
          if (
            ((p = '' + p),
            y == null &&
              (y = !(
                p.indexOf(`
`) > 0 && p.indexOf('^') > 0
              )),
            this.yylloc && y)
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
        parseError: function (p, m, y) {
          if ((y || (y = this.JisonLexerError), this.yy)) {
            if (
              this.yy.parser &&
              typeof this.yy.parser.parseError == 'function'
            )
              return (
                this.yy.parser.parseError.call(this, p, m, y) || this.ERROR
              );
            if (typeof this.yy.parseError == 'function')
              return this.yy.parseError.call(this, p, m, y) || this.ERROR;
          }
          throw new y(p, m);
        },
        yyerror: function (p) {
          var m = '';
          this.yylloc && (m = ' on line ' + (this.yylineno + 1));
          var y = this.constructLexErrorInfo(
              'Lexical error' + m + ': ' + p,
              this.options.lexerErrorsAreRecoverable
            ),
            _ = Array.prototype.slice.call(arguments, 1);
          return (
            _.length && (y.extra_error_attributes = _),
            this.parseError(y.errStr, y, this.JisonLexerError) || this.ERROR
          );
        },
        cleanupAfterLex: function (p) {
          if ((this.setInput('', {}), !p)) {
            for (var m = this.__error_infos.length - 1; m >= 0; m--) {
              var y = this.__error_infos[m];
              y && typeof y.destroy == 'function' && y.destroy();
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
            for (var y = this.rules, _ = 0, x = y.length; _ < x; _++) {
              var b = y[_];
              typeof b == 'number' && (y[_] = y[b]);
            }
            var w = this.conditions;
            for (var O in w) {
              for (
                var E = w[O],
                  $ = E.rules,
                  x = $.length,
                  A = new Array(x + 1),
                  P = new Array(x + 1),
                  _ = 0;
                _ < x;
                _++
              ) {
                var C = $[_],
                  b = y[C];
                (A[_ + 1] = b), (P[_ + 1] = C);
              }
              (E.rules = P), (E.__rule_regexes = A), (E.__rule_count = x);
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
          var y = p.call(this, this._input, m);
          return (
            typeof y != 'string'
              ? y && (this._input = '' + y)
              : (this._input = y),
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
            y = !1;
          if (
            p ===
            `
`
          )
            y = !0;
          else if (p === '\r') {
            y = !0;
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
            y
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
            y = p.split(/(?:\r\n?|\n)/g);
          if (
            ((this._input = p + this._input),
            (this.yytext = this.yytext.substr(0, this.yytext.length - m)),
            (this.yyleng = this.yytext.length),
            (this.offset -= m),
            (this.match = this.match.substr(0, this.match.length - m)),
            (this.matched = this.matched.substr(0, this.matched.length - m)),
            y.length > 1)
          ) {
            (this.yylineno -= y.length - 1),
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
          var y = this.matched.substring(
            0,
            this.matched.length - this.match.length
          );
          p < 0 ? (p = y.length) : p || (p = 20),
            m < 0 ? (m = y.length) : m || (m = 1),
            (y = y.substr(-p * 2 - 2));
          var _ = y.replace(
            /\r\n|\r/g,
            `
`
          ).split(`
`);
          return (
            (_ = _.slice(-m)),
            (y = _.join(`
`)),
            y.length > p && (y = '...' + y.substr(-p)),
            y
          );
        },
        upcomingInput: function (p, m) {
          var y = this.match;
          p < 0 ? (p = y.length + this._input.length) : p || (p = 20),
            m < 0 ? (m = p) : m || (m = 1),
            y.length < p * 2 + 2 && (y += this._input.substring(0, p * 2 + 2));
          var _ = y.replace(
            /\r\n|\r/g,
            `
`
          ).split(`
`);
          return (
            (_ = _.slice(0, m)),
            (y = _.join(`
`)),
            y.length > p && (y = y.substring(0, p) + '...'),
            y
          );
        },
        showPosition: function (p, m) {
          var y = this.pastInput(p).replace(/\s/g, ' '),
            _ = new Array(y.length + 1).join('-');
          return (
            y +
            this.upcomingInput(m).replace(/\s/g, ' ') +
            `
` +
            _ +
            '^'
          );
        },
        deriveLocationInfo: function (p, m, y, _) {
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
                y &&
                ((x.last_line = y.first_line | 0),
                (x.last_column = y.first_column | 0),
                y.range && (x.range[1] = p.range[0] | 0)),
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
        prettyPrintRange: function (p, m, y) {
          p = this.deriveLocationInfo(p, m, y);
          const _ = 3,
            x = 1,
            b = 2;
          var w = this.matched + this._input,
            O = w.split(`
`),
            E = Math.max(1, m ? m.first_line : p.first_line - _),
            $ = Math.max(1, y ? y.last_line : p.last_line + x),
            A = (1 + Math.log10($ | 1)) | 0,
            P = new Array(A).join(' '),
            C = [],
            T = O.slice(E - 1, $ + 1).map(function (N, F) {
              var M = F + E,
                Y = (P + M).substr(-A),
                Q = Y + ': ' + N,
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
                (Q +=
                  `
` +
                  ne +
                  le +
                  Ee),
                  N.trim().length > 0 && C.push(F);
              }
              return (Q = Q.replace(/\t/g, ' ')), Q;
            });
          if (C.length > 2 * b) {
            var k = C[b - 1] + 1,
              D = C[C.length - b] - 1,
              j = new Array(A + 1).join(' ') + '  (...continued...)';
            (j +=
              `
` +
              new Array(A + 1).join('-') +
              '  (---------------)'),
              T.splice(k, D - k + 1, j);
          }
          return T.join(`
`);
        },
        describeYYLLOC: function (p, m) {
          var y = p.first_line,
            _ = p.last_line,
            x = p.first_column,
            b = p.last_column,
            w = _ - y,
            O = b - x,
            E;
          if (
            (w === 0
              ? ((E = 'line ' + y + ', '),
                O <= 1
                  ? (E += 'column ' + x)
                  : (E += 'columns ' + x + ' .. ' + b))
              : (E =
                  'lines ' +
                  y +
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
              ? (E += ' {String Offset: ' + $ + '}')
              : (E += ' {String Offset range: ' + $ + ' .. ' + A + '}');
          }
          return E;
        },
        test_match: function (p, m) {
          var y, _, x, b, w;
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
            (y = this.performAction.call(
              this,
              this.yy,
              m,
              this.conditionStack[this.conditionStack.length - 1]
            )),
            this.done && this._input && (this.done = !1),
            y)
          )
            return y;
          if (this._backtrack) {
            for (var O in x) this[O] = x[O];
            return (this.__currentRuleSet__ = null), !1;
          } else if (this._signaled_error_token)
            return (
              (y = this._signaled_error_token),
              (this._signaled_error_token = !1),
              y
            );
          return !1;
        },
        next: function () {
          if (this.done) return this.clear(), this.EOF;
          this._input || (this.done = !0);
          var p, m, y, _;
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
            var O = x.rules, E = x.__rule_regexes, $ = x.__rule_count, A = 1;
            A <= $;
            A++
          )
            if (
              ((y = this._input.match(E[A])),
              y && (!m || y[0].length > m[0].length))
            ) {
              if (((m = y), (_ = A), this.options.backtrack_lexer)) {
                if (((p = this.test_match(y, O[A])), p !== !1)) return p;
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
              T = this.conditionStack.length;
            return (
              (p =
                this.parseError(w.errStr, w, this.JisonLexerError) ||
                this.ERROR),
              p === this.ERROR &&
                !this.matches &&
                P === this._input &&
                C === this.topState() &&
                T === this.conditionStack.length &&
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
        performAction: function (p, m, y) {
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
  typeof PW < 'u' &&
    ((e.parser = t),
    (e.Parser = t.Parser),
    (e.parse = function () {
      return t.parse.apply(t, arguments);
    }));
})(wx);
var Vi = {},
  zu = { exports: {} },
  Ec = {
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
  kW = function (e, t, r, n) {
    if (!Ec.hasOwnProperty(r)) throw new Error('Cannot convert to ' + r);
    if (!Ec[r].hasOwnProperty(t))
      throw new Error('Cannot convert from ' + t + ' to ' + r);
    var a = Ec[r][t] * e;
    return n !== !1
      ? ((n = Math.pow(10, parseInt(n) || 5)), Math.round(a * n) / n)
      : a;
  };
(function (e, t) {
  Object.defineProperty(t, '__esModule', { value: !0 });
  var r = kW,
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
})(zu, zu.exports);
Object.defineProperty(Vi, '__esModule', { value: !0 });
Vi.flip = Wu;
var TW = zu.exports,
  $c = MW(TW);
function MW(e) {
  return e && e.__esModule ? e : { default: e };
}
function It(e, t) {
  return e.type === 'MathExpression'
    ? NW(e, t)
    : e.type === 'Calc'
    ? It(e.value, t)
    : e;
}
function vm(e, t) {
  return e.type === t.type && e.value === t.value;
}
function Ut(e) {
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
function IW(e, t) {
  var r = (0, $c.default)(e.left, e.right, t),
    n = It(r.left, t),
    a = It(r.right, t);
  return (
    n.type === 'MathExpression' &&
      a.type === 'MathExpression' &&
      ((n.operator === '/' && a.operator === '*') ||
        (n.operator === '-' && a.operator === '+') ||
        (n.operator === '*' && a.operator === '/') ||
        (n.operator === '+' && a.operator === '-')) &&
      (vm(n.right, a.right)
        ? (r = (0, $c.default)(n.left, a.left, t))
        : vm(n.right, a.left) && (r = (0, $c.default)(n.left, a.right, t)),
      (n = It(r.left, t)),
      (a = It(r.right, t))),
    (e.left = n),
    (e.right = a),
    e
  );
}
function Wu(e) {
  return e === '+' ? '-' : '+';
}
function Uu(e) {
  return (
    Ut(e.type)
      ? (e.value = -e.value)
      : e.type == 'MathExpression' &&
        ((e.left = Uu(e.left)), (e.right = Uu(e.right))),
    e
  );
}
function RW(e, t) {
  var r = e,
    n = r.left,
    a = r.right,
    i = r.operator;
  if (n.type === 'CssVariable' || a.type === 'CssVariable') return e;
  if (a.value === 0) return n;
  if (n.value === 0 && i === '+') return a;
  if (n.value === 0 && i === '-') return Uu(a);
  if (
    (n.type === a.type &&
      Ut(n.type) &&
      ((e = Object.assign({}, n)),
      i === '+'
        ? (e.value = n.value + a.value)
        : (e.value = n.value - a.value)),
    Ut(n.type) &&
      (a.operator === '+' || a.operator === '-') &&
      a.type === 'MathExpression')
  ) {
    if (n.type === a.left.type)
      return (
        (e = Object.assign({}, e)),
        (e.left = It(
          { type: 'MathExpression', operator: i, left: n, right: a.left },
          t
        )),
        (e.right = a.right),
        (e.operator = i === '-' ? Wu(a.operator) : a.operator),
        It(e, t)
      );
    if (n.type === a.right.type)
      return (
        (e = Object.assign({}, e)),
        (e.left = It(
          {
            type: 'MathExpression',
            operator: i === '-' ? Wu(a.operator) : a.operator,
            left: n,
            right: a.right,
          },
          t
        )),
        (e.right = a.left),
        It(e, t)
      );
  }
  if (
    n.type === 'MathExpression' &&
    (n.operator === '+' || n.operator === '-') &&
    Ut(a.type)
  ) {
    if (a.type === n.left.type)
      return (
        (e = Object.assign({}, n)),
        (e.left = It(
          { type: 'MathExpression', operator: i, left: n.left, right: a },
          t
        )),
        It(e, t)
      );
    if (a.type === n.right.type)
      return (
        (e = Object.assign({}, n)),
        n.operator === '-'
          ? ((e.right = It(
              {
                type: 'MathExpression',
                operator: i === '-' ? '+' : '-',
                left: a,
                right: n.right,
              },
              t
            )),
            (e.operator = i === '-' ? '-' : '+'))
          : (e.right = It(
              { type: 'MathExpression', operator: i, left: n.right, right: a },
              t
            )),
        e.right.value < 0 &&
          ((e.right.value *= -1),
          (e.operator = e.operator === '-' ? '+' : '-')),
        It(e, t)
      );
  }
  return e;
}
function DW(e, t) {
  if (!Ut(e.right.type)) return e;
  if (e.right.type !== 'Value')
    throw new Error('Cannot divide by "' + e.right.unit + '", number expected');
  if (e.right.value === 0) throw new Error('Cannot divide by zero');
  return e.left.type === 'MathExpression'
    ? Ut(e.left.left.type) && Ut(e.left.right.type)
      ? ((e.left.left.value /= e.right.value),
        (e.left.right.value /= e.right.value),
        It(e.left, t))
      : e
    : Ut(e.left.type)
    ? ((e.left.value /= e.right.value), e.left)
    : e;
}
function jW(e) {
  if (e.left.type === 'MathExpression' && e.right.type === 'Value') {
    if (Ut(e.left.left.type) && Ut(e.left.right.type))
      return (
        (e.left.left.value *= e.right.value),
        (e.left.right.value *= e.right.value),
        e.left
      );
  } else {
    if (Ut(e.left.type) && e.right.type === 'Value')
      return (e.left.value *= e.right.value), e.left;
    if (e.left.type === 'Value' && e.right.type === 'MathExpression') {
      if (Ut(e.right.left.type) && Ut(e.right.right.type))
        return (
          (e.right.left.value *= e.left.value),
          (e.right.right.value *= e.left.value),
          e.right
        );
    } else if (e.left.type === 'Value' && Ut(e.right.type))
      return (e.right.value *= e.left.value), e.right;
  }
  return e;
}
function NW(e, t) {
  switch (((e = IW(e, t)), e.operator)) {
    case '+':
    case '-':
      return RW(e, t);
    case '/':
      return DW(e, t);
    case '*':
      return jW(e);
  }
  return e;
}
Vi.default = It;
var Hu = { exports: {} };
(function (e, t) {
  Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.default = function (o, s, l) {
      var c = i(s, l);
      return s.type === 'MathExpression' && (c = o + '(' + c + ')'), c;
    });
  var r = Vi,
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
})(Hu, Hu.exports);
(function (e, t) {
  Object.defineProperty(t, '__esModule', { value: !0 });
  var r = CW,
    n = c(r),
    a = wx,
    i = Vi,
    o = c(i),
    s = Hu.exports,
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
})(Fu, Fu.exports);
const Ac = Tw(Fu.exports);
function mm(e, t) {
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
function gm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? mm(Object(r), !0).forEach(function (n) {
          LW(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : mm(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function LW(e, t, r) {
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
function ym(e) {
  return WW(e) || zW(e) || FW(e) || BW();
}
function BW() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function FW(e, t) {
  if (!!e) {
    if (typeof e == 'string') return Vu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === 'Object' && e.constructor && (r = e.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Vu(e, t);
  }
}
function zW(e) {
  if (typeof Symbol < 'u' && Symbol.iterator in Object(e)) return Array.from(e);
}
function WW(e) {
  if (Array.isArray(e)) return Vu(e);
}
function Vu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Jn = { widthCache: {}, cacheCount: 0 },
  UW = 2e3,
  HW = {
    position: 'absolute',
    top: '-20000px',
    left: 0,
    padding: 0,
    margin: 0,
    border: 'none',
    whiteSpace: 'pre',
  },
  VW = [
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
  bm = 'recharts_measurement_span';
function GW(e, t) {
  return VW.indexOf(e) >= 0 && t === +t ? ''.concat(t, 'px') : t;
}
function qW(e) {
  var t = e.split(''),
    r = t.reduce(function (n, a) {
      return a === a.toUpperCase()
        ? [].concat(ym(n), ['-', a.toLowerCase()])
        : [].concat(ym(n), [a]);
    }, []);
  return r.join('');
}
var YW = function (t) {
    return Object.keys(t).reduce(function (r, n) {
      return ''.concat(r).concat(qW(n), ':').concat(GW(n, t[n]), ';');
    }, '');
  },
  En = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (t == null || cn.isSsr) return { width: 0, height: 0 };
    var n = ''.concat(t),
      a = YW(r),
      i = ''.concat(n, '-').concat(a);
    if (Jn.widthCache[i]) return Jn.widthCache[i];
    try {
      var o = document.getElementById(bm);
      o ||
        ((o = document.createElement('span')),
        o.setAttribute('id', bm),
        o.setAttribute('aria-hidden', 'true'),
        document.body.appendChild(o));
      var s = gm(gm({}, HW), r);
      Object.keys(s).map(function (u) {
        return (o.style[u] = s[u]), u;
      }),
        (o.textContent = n);
      var l = o.getBoundingClientRect(),
        c = { width: l.width, height: l.height };
      return (
        (Jn.widthCache[i] = c),
        ++Jn.cacheCount > UW && ((Jn.cacheCount = 0), (Jn.widthCache = {})),
        c
      );
    } catch {
      return { width: 0, height: 0 };
    }
  },
  KW = function (t) {
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
  XW = function (t, r) {
    return {
      chartX: Math.round(t.pageX - r.left),
      chartY: Math.round(t.pageY - r.top),
    };
  };
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
function Gu() {
  return (
    (Gu =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Gu.apply(this, arguments)
  );
}
function JW(e, t) {
  if (e == null) return {};
  var r = ZW(e, t),
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
function ZW(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    a,
    i;
  for (i = 0; i < n.length; i++)
    (a = n[i]), !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function QW(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function xm(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function e8(e, t, r) {
  return t && xm(e.prototype, t), r && xm(e, r), e;
}
function t8(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && qu(e, t);
}
function qu(e, t) {
  return (
    (qu =
      Object.setPrototypeOf ||
      function (n, a) {
        return (n.__proto__ = a), n;
      }),
    qu(e, t)
  );
}
function r8(e) {
  var t = i8();
  return function () {
    var n = ms(e),
      a;
    if (t) {
      var i = ms(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else a = n.apply(this, arguments);
    return n8(this, a);
  };
}
function n8(e, t) {
  return t && (Po(t) === 'object' || typeof t == 'function') ? t : a8(e);
}
function a8(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function i8() {
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
function ms(e) {
  return (
    (ms = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    ms(e)
  );
}
function wm(e, t) {
  return c8(e) || l8(e, t) || s8(e, t) || o8();
}
function o8() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function s8(e, t) {
  if (!!e) {
    if (typeof e == 'string') return _m(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === 'Object' && e.constructor && (r = e.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return _m(e, t);
  }
}
function _m(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function l8(e, t) {
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
function c8(e) {
  if (Array.isArray(e)) return e;
}
function Om(e, t) {
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
function Sm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Om(Object(r), !0).forEach(function (n) {
          u8(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Om(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function u8(e, t, r) {
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
var _x = /[ \f\n\r\t\v\u2028\u2029]+/,
  Ox = function (t) {
    try {
      var r = [];
      ye(t.children) ||
        (t.breakAll
          ? (r = t.children.toString().split(''))
          : (r = t.children.toString().split(_x)));
      var n = r.map(function (i) {
          return { word: i, width: En(i, t.style).width };
        }),
        a = t.breakAll ? 0 : En('\xA0', t.style).width;
      return { wordsWithComputedWidth: n, spaceWidth: a };
    } catch {
      return null;
    }
  },
  f8 = function (t, r, n, a, i) {
    var o = K(t.maxLines),
      s = t.children,
      l = function () {
        var C =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        return C.reduce(function (T, k) {
          var D = k.word,
            j = k.width,
            R = T[T.length - 1];
          if (R && (a == null || i || R.width + j + n < a))
            R.words.push(D), (R.width += j + n);
          else {
            var N = { words: [D], width: j };
            T.push(N);
          }
          return T;
        }, []);
      },
      c = l(r),
      u = function (C) {
        return C.reduce(function (T, k) {
          return T.width > k.width ? T : k;
        });
      };
    if (!o) return c;
    for (
      var f = '\u2026',
        d = function (C) {
          var T = s.slice(0, C),
            k = Ox(
              Sm(Sm({}, t), {}, { children: T + f })
            ).wordsWithComputedWidth,
            D = l(k),
            j = D.length > t.maxLines || u(D).width > a;
          return [j, D];
        },
        h = 0,
        v = s.length - 1,
        p = 0,
        m;
      h <= v && p <= s.length - 1;

    ) {
      var y = Math.floor((h + v) / 2),
        _ = y - 1,
        x = d(_),
        b = wm(x, 2),
        w = b[0],
        O = b[1],
        E = d(y),
        $ = wm(E, 1),
        A = $[0];
      if ((!w && !A && (h = y + 1), w && A && (v = y - 1), !w && A)) {
        m = O;
        break;
      }
      p++;
    }
    return m || c;
  },
  Em = function (t) {
    var r = ye(t) ? [] : t.toString().split(_x);
    return [{ words: r }];
  },
  d8 = function (t, r) {
    if ((t.width || t.scaleToFit) && !cn.isSsr) {
      var n, a;
      if (r) {
        var i = Ox(t);
        if (i) {
          var o = i.wordsWithComputedWidth,
            s = i.spaceWidth;
          (n = o), (a = s);
        } else return Em(t.children);
        return f8(t, n, a, t.width, t.scaleToFit);
      }
    }
    return Em(t.children);
  },
  Ai = (function (e) {
    t8(r, e);
    var t = r8(r);
    function r() {
      var n;
      QW(this, r);
      for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
        i[o] = arguments[o];
      return (n = t.call.apply(t, [this].concat(i))), (n.state = {}), n;
    }
    return (
      e8(
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
                p = JW(a, [
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
              if (!mt(p.x) || !mt(p.y)) return null;
              var y = p.x + (K(i) ? i : 0),
                _ = p.y + (K(o) ? o : 0),
                x;
              switch (l) {
                case 'start':
                  x = Ac('calc('.concat(d, ')'));
                  break;
                case 'middle':
                  x = Ac(
                    'calc('
                      .concat((m.length - 1) / 2, ' * -')
                      .concat(f, ' + (')
                      .concat(d, ' / 2))')
                  );
                  break;
                default:
                  x = Ac('calc('.concat(m.length - 1, ' * -').concat(f, ')'));
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
                    'rotate('.concat(u, ', ').concat(y, ', ').concat(_, ')')
                  ),
                b.length && (p.transform = b.join(' ')),
                g.createElement(
                  'text',
                  Gu({}, ze(p, !0), {
                    x: y,
                    y: _,
                    className: Ze('recharts-text', h),
                    textAnchor: s,
                  }),
                  m.map(function (E, $) {
                    return g.createElement(
                      'tspan',
                      { x: y, dy: $ === 0 ? x : f, key: $ },
                      E.words.join(v ? '' : ' ')
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
                  wordsByLines: d8(a, o),
                };
              }
              return null;
            },
          },
        ]
      ),
      r
    );
  })(S.exports.Component);
Ai.defaultProps = {
  x: 0,
  y: 0,
  lineHeight: '1em',
  capHeight: '0.71em',
  scaleToFit: !1,
  textAnchor: 'start',
  verticalAnchor: 'end',
};
function fa(e, t) {
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
function $m(e, t) {
  if (e == null) return {};
  var r = p8(e, t),
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
function p8(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    a,
    i;
  for (i = 0; i < n.length; i++)
    (a = n[i]), !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var Am = {
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
  un = function (t) {
    return typeof t == 'string'
      ? t
      : t
      ? t.displayName || t.name || 'Component'
      : '';
  },
  Cm = null,
  Cc = null,
  Gd = function e(t) {
    if (t === Cm && Me(Cc)) return Cc;
    var r = [];
    return (
      S.exports.Children.forEach(t, function (n) {
        ye(n) ||
          (Mw.exports.isFragment(n)
            ? (r = r.concat(e(n.props.children)))
            : r.push(n));
      }),
      (Cc = r),
      (Cm = t),
      r
    );
  },
  _r = function (t, r) {
    var n = [],
      a = [];
    return (
      Me(r)
        ? (a = r.map(function (i) {
            return un(i);
          }))
        : (a = [un(r)]),
      Gd(t).forEach(function (i) {
        var o = er(i, 'type.displayName') || er(i, 'type.name');
        a.indexOf(o) !== -1 && n.push(i);
      }),
      n
    );
  },
  Ur = function (t, r) {
    var n = _r(t, r);
    return n && n[0];
  },
  Pm = function (t) {
    if (!t || !t.props) return !1;
    var r = t.props,
      n = r.width,
      a = r.height;
    return !(!K(n) || n <= 0 || !K(a) || a <= 0);
  },
  h8 = [
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
  v8 = function (t) {
    return t && t.type && Hi(t.type) && h8.indexOf(t.type) >= 0;
  },
  Sx = function e(t, r) {
    if (t === r) return !0;
    var n = S.exports.Children.count(t);
    if (n !== S.exports.Children.count(r)) return !1;
    if (n === 0) return !0;
    if (n === 1) return km(Me(t) ? t[0] : t, Me(r) ? r[0] : r);
    for (var a = 0; a < n; a++) {
      var i = t[a],
        o = r[a];
      if (Me(i) || Me(o)) {
        if (!e(i, o)) return !1;
      } else if (!km(i, o)) return !1;
    }
    return !0;
  },
  km = function (t, r) {
    if (ye(t) && ye(r)) return !0;
    if (!ye(t) && !ye(r)) {
      var n = t.props || {},
        a = n.children,
        i = $m(n, ['children']),
        o = r.props || {},
        s = o.children,
        l = $m(o, ['children']);
      return a && s ? fa(i, l) && Sx(a, s) : !a && !s ? fa(i, l) : !1;
    }
    return !1;
  },
  Tm = function (t, r) {
    var n = [],
      a = {};
    return (
      Gd(t).forEach(function (i, o) {
        if (v8(i)) n.push(i);
        else if (i) {
          var s = un(i.type),
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
  m8 = function (t) {
    var r = t && t.type;
    return r && Am[r] ? Am[r] : null;
  },
  g8 = function (t, r) {
    return Gd(r).indexOf(t);
  },
  y8 = Md;
function b8(e, t) {
  return y8(e, t);
}
var Ex = b8,
  x8 = Na;
function w8(e, t, r) {
  for (var n = -1, a = e.length; ++n < a; ) {
    var i = e[n],
      o = t(i);
    if (o != null && (s === void 0 ? o === o && !x8(o) : r(o, s)))
      var s = o,
        l = i;
  }
  return l;
}
var $x = w8;
function _8(e, t) {
  return e > t;
}
var O8 = _8,
  S8 = $x,
  E8 = O8,
  $8 = La;
function A8(e) {
  return e && e.length ? S8(e, $8, E8) : void 0;
}
var kl = A8;
function C8(e, t) {
  return e < t;
}
var P8 = C8,
  k8 = $x,
  T8 = P8,
  M8 = La;
function I8(e) {
  return e && e.length ? k8(e, M8, T8) : void 0;
}
var Tl = I8,
  R8 = Dd,
  D8 = yn,
  j8 = lx,
  N8 = Me;
function L8(e, t) {
  var r = N8(e) ? R8 : j8;
  return r(e, D8(t));
}
var B8 = L8,
  F8 = ox,
  z8 = B8;
function W8(e, t) {
  return F8(z8(e, t), 1);
}
var U8 = W8,
  Ba = 1e9,
  H8 = {
    precision: 20,
    rounding: 4,
    toExpNeg: -7,
    toExpPos: 21,
    LN10: '2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286',
  },
  Yd,
  tt = !0,
  hr = '[DecimalError] ',
  Mn = hr + 'Invalid argument: ',
  qd = hr + 'Exponent out of range: ',
  Fa = Math.floor,
  Sn = Math.pow,
  V8 = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
  Zt,
  _t = 1e7,
  Je = 7,
  Ax = 9007199254740991,
  gs = Fa(Ax / Je),
  re = {};
re.absoluteValue = re.abs = function () {
  var e = new this.constructor(this);
  return e.s && (e.s = 1), e;
};
re.comparedTo = re.cmp = function (e) {
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
re.decimalPlaces = re.dp = function () {
  var e = this,
    t = e.d.length - 1,
    r = (t - e.e) * Je;
  if (((t = e.d[t]), t)) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
re.dividedBy = re.div = function (e) {
  return Gr(this, new this.constructor(e));
};
re.dividedToIntegerBy = re.idiv = function (e) {
  var t = this,
    r = t.constructor;
  return Ge(Gr(t, new r(e), 0, 1), r.precision);
};
re.equals = re.eq = function (e) {
  return !this.cmp(e);
};
re.exponent = function () {
  return ft(this);
};
re.greaterThan = re.gt = function (e) {
  return this.cmp(e) > 0;
};
re.greaterThanOrEqualTo = re.gte = function (e) {
  return this.cmp(e) >= 0;
};
re.isInteger = re.isint = function () {
  return this.e > this.d.length - 2;
};
re.isNegative = re.isneg = function () {
  return this.s < 0;
};
re.isPositive = re.ispos = function () {
  return this.s > 0;
};
re.isZero = function () {
  return this.s === 0;
};
re.lessThan = re.lt = function (e) {
  return this.cmp(e) < 0;
};
re.lessThanOrEqualTo = re.lte = function (e) {
  return this.cmp(e) < 1;
};
re.logarithm = re.log = function (e) {
  var t,
    r = this,
    n = r.constructor,
    a = n.precision,
    i = a + 5;
  if (e === void 0) e = new n(10);
  else if (((e = new n(e)), e.s < 1 || e.eq(Zt))) throw Error(hr + 'NaN');
  if (r.s < 1) throw Error(hr + (r.s ? 'NaN' : '-Infinity'));
  return r.eq(Zt)
    ? new n(0)
    : ((tt = !1), (t = Gr(Ci(r, i), Ci(e, i), i)), (tt = !0), Ge(t, a));
};
re.minus = re.sub = function (e) {
  var t = this;
  return (
    (e = new t.constructor(e)), t.s == e.s ? kx(t, e) : Cx(t, ((e.s = -e.s), e))
  );
};
re.modulo = re.mod = function (e) {
  var t,
    r = this,
    n = r.constructor,
    a = n.precision;
  if (((e = new n(e)), !e.s)) throw Error(hr + 'NaN');
  return r.s
    ? ((tt = !1), (t = Gr(r, e, 0, 1).times(e)), (tt = !0), r.minus(t))
    : Ge(new n(r), a);
};
re.naturalExponential = re.exp = function () {
  return Px(this);
};
re.naturalLogarithm = re.ln = function () {
  return Ci(this);
};
re.negated = re.neg = function () {
  var e = new this.constructor(this);
  return (e.s = -e.s || 0), e;
};
re.plus = re.add = function (e) {
  var t = this;
  return (
    (e = new t.constructor(e)), t.s == e.s ? Cx(t, e) : kx(t, ((e.s = -e.s), e))
  );
};
re.precision = re.sd = function (e) {
  var t,
    r,
    n,
    a = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Mn + e);
  if (
    ((t = ft(a) + 1), (n = a.d.length - 1), (r = n * Je + 1), (n = a.d[n]), n)
  ) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = a.d[0]; n >= 10; n /= 10) r++;
  }
  return e && t > r ? t : r;
};
re.squareRoot = re.sqrt = function () {
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
    throw Error(hr + 'NaN');
  }
  for (
    e = ft(s),
      tt = !1,
      a = Math.sqrt(+s),
      a == 0 || a == 1 / 0
        ? ((t = Pr(s.d)),
          (t.length + e) % 2 == 0 && (t += '0'),
          (a = Math.sqrt(t)),
          (e = Fa((e + 1) / 2) - (e < 0 || e % 2)),
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
      (n = i.plus(Gr(s, i, o + 2)).times(0.5)),
      Pr(i.d).slice(0, o) === (t = Pr(n.d)).slice(0, o))
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
re.times = re.mul = function (e) {
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
        (i[a--] = s % _t | 0),
        (t = (s / _t) | 0);
    i[a] = (i[a] + t) % _t | 0;
  }
  for (; !i[--o]; ) i.pop();
  return t ? ++r : i.shift(), (e.d = i), (e.e = r), tt ? Ge(e, f.precision) : e;
};
re.toDecimalPlaces = re.todp = function (e, t) {
  var r = this,
    n = r.constructor;
  return (
    (r = new n(r)),
    e === void 0
      ? r
      : (Nr(e, 0, Ba),
        t === void 0 ? (t = n.rounding) : Nr(t, 0, 8),
        Ge(r, e + ft(r) + 1, t))
  );
};
re.toExponential = function (e, t) {
  var r,
    n = this,
    a = n.constructor;
  return (
    e === void 0
      ? (r = Ln(n, !0))
      : (Nr(e, 0, Ba),
        t === void 0 ? (t = a.rounding) : Nr(t, 0, 8),
        (n = Ge(new a(n), e + 1, t)),
        (r = Ln(n, !0, e + 1))),
    r
  );
};
re.toFixed = function (e, t) {
  var r,
    n,
    a = this,
    i = a.constructor;
  return e === void 0
    ? Ln(a)
    : (Nr(e, 0, Ba),
      t === void 0 ? (t = i.rounding) : Nr(t, 0, 8),
      (n = Ge(new i(a), e + ft(a) + 1, t)),
      (r = Ln(n.abs(), !1, e + ft(n) + 1)),
      a.isneg() && !a.isZero() ? '-' + r : r);
};
re.toInteger = re.toint = function () {
  var e = this,
    t = e.constructor;
  return Ge(new t(e), ft(e) + 1, t.rounding);
};
re.toNumber = function () {
  return +this;
};
re.toPower = re.pow = function (e) {
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
  if (!e.s) return new l(Zt);
  if (((s = new l(s)), !s.s)) {
    if (e.s < 1) throw Error(hr + 'Infinity');
    return s;
  }
  if (s.eq(Zt)) return s;
  if (((n = l.precision), e.eq(Zt))) return Ge(s, n);
  if (((t = e.e), (r = e.d.length - 1), (o = t >= r), (i = s.s), o)) {
    if ((r = u < 0 ? -u : u) <= Ax) {
      for (
        a = new l(Zt), t = Math.ceil(n / Je + 4), tt = !1;
        r % 2 && ((a = a.times(s)), Im(a.d, t)), (r = Fa(r / 2)), r !== 0;

      )
        (s = s.times(s)), Im(s.d, t);
      return (tt = !0), e.s < 0 ? new l(Zt).div(a) : Ge(a, n);
    }
  } else if (i < 0) throw Error(hr + 'NaN');
  return (
    (i = i < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1),
    (s.s = 1),
    (tt = !1),
    (a = e.times(Ci(s, n + c))),
    (tt = !0),
    (a = Px(a)),
    (a.s = i),
    a
  );
};
re.toPrecision = function (e, t) {
  var r,
    n,
    a = this,
    i = a.constructor;
  return (
    e === void 0
      ? ((r = ft(a)), (n = Ln(a, r <= i.toExpNeg || r >= i.toExpPos)))
      : (Nr(e, 1, Ba),
        t === void 0 ? (t = i.rounding) : Nr(t, 0, 8),
        (a = Ge(new i(a), e, t)),
        (r = ft(a)),
        (n = Ln(a, e <= r || r <= i.toExpNeg, e))),
    n
  );
};
re.toSignificantDigits = re.tosd = function (e, t) {
  var r = this,
    n = r.constructor;
  return (
    e === void 0
      ? ((e = n.precision), (t = n.rounding))
      : (Nr(e, 1, Ba), t === void 0 ? (t = n.rounding) : Nr(t, 0, 8)),
    Ge(new n(r), e, t)
  );
};
re.toString =
  re.valueOf =
  re.val =
  re.toJSON =
  re[Symbol.for('nodejs.util.inspect.custom')] =
    function () {
      var e = this,
        t = ft(e),
        r = e.constructor;
      return Ln(e, t <= r.toExpNeg || t >= r.toExpPos);
    };
function Cx(e, t) {
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
    (r = ((l[--i] = l[i] + c[i] + r) / _t) | 0), (l[i] %= _t);
  for (r && (l.unshift(r), ++a), s = l.length; l[--s] == 0; ) l.pop();
  return (t.d = l), (t.e = a), tt ? Ge(t, f) : t;
}
function Nr(e, t, r) {
  if (e !== ~~e || e < t || e > r) throw Error(Mn + e);
}
function Pr(e) {
  var t,
    r,
    n,
    a = e.length - 1,
    i = '',
    o = e[0];
  if (a > 0) {
    for (i += o, t = 1; t < a; t++)
      (n = e[t] + ''), (r = Je - n.length), r && (i += an(r)), (i += n);
    (o = e[t]), (n = o + ''), (r = Je - n.length), r && (i += an(r));
  } else if (o === 0) return '0';
  for (; o % 10 === 0; ) o /= 10;
  return i + o;
}
var Gr = (function () {
  function e(n, a) {
    var i,
      o = 0,
      s = n.length;
    for (n = n.slice(); s--; )
      (i = n[s] * a + o), (n[s] = i % _t | 0), (o = (i / _t) | 0);
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
      (n[i] -= o), (o = n[i] < a[i] ? 1 : 0), (n[i] = o * _t + n[i] - a[i]);
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
      y,
      _,
      x,
      b,
      w,
      O,
      E,
      $,
      A = n.constructor,
      P = n.s == a.s ? 1 : -1,
      C = n.d,
      T = a.d;
    if (!n.s) return new A(n);
    if (!a.s) throw Error(hr + 'Division by zero');
    for (
      l = n.e - a.e,
        E = T.length,
        w = C.length,
        h = new A(P),
        v = h.d = [],
        c = 0;
      T[c] == (C[c] || 0);

    )
      ++c;
    if (
      (T[c] > (C[c] || 0) && --l,
      i == null
        ? (_ = i = A.precision)
        : o
        ? (_ = i + (ft(n) - ft(a)) + 1)
        : (_ = i),
      _ < 0)
    )
      return new A(0);
    if (((_ = (_ / Je + 2) | 0), (c = 0), E == 1))
      for (u = 0, T = T[0], _++; (c < w || u) && _--; c++)
        (x = u * _t + (C[c] || 0)), (v[c] = (x / T) | 0), (u = x % T | 0);
    else {
      for (
        u = (_t / (T[0] + 1)) | 0,
          u > 1 &&
            ((T = e(T, u)), (C = e(C, u)), (E = T.length), (w = C.length)),
          b = E,
          p = C.slice(0, E),
          m = p.length;
        m < E;

      )
        p[m++] = 0;
      ($ = T.slice()), $.unshift(0), (O = T[0]), T[1] >= _t / 2 && ++O;
      do
        (u = 0),
          (s = t(T, p, E, m)),
          s < 0
            ? ((y = p[0]),
              E != m && (y = y * _t + (p[1] || 0)),
              (u = (y / O) | 0),
              u > 1
                ? (u >= _t && (u = _t - 1),
                  (f = e(T, u)),
                  (d = f.length),
                  (m = p.length),
                  (s = t(f, p, d, m)),
                  s == 1 && (u--, r(f, E < d ? $ : T, d)))
                : (u == 0 && (s = u = 1), (f = T.slice())),
              (d = f.length),
              d < m && f.unshift(0),
              r(p, f, m),
              s == -1 &&
                ((m = p.length),
                (s = t(T, p, E, m)),
                s < 1 && (u++, r(p, E < m ? $ : T, m))),
              (m = p.length))
            : s === 0 && (u++, (p = [0])),
          (v[c++] = u),
          s && p[0] ? (p[m++] = C[b] || 0) : ((p = [C[b]]), (m = 1));
      while ((b++ < w || p[0] !== void 0) && _--);
    }
    return v[0] || v.shift(), (h.e = l), Ge(h, o ? i + ft(h) + 1 : i);
  };
})();
function Px(e, t) {
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
  if (ft(e) > 16) throw Error(qd + ft(e));
  if (!e.s) return new u(Zt);
  for (
    t == null ? ((tt = !1), (s = f)) : (s = t), o = new u(0.03125);
    e.abs().gte(0.1);

  )
    (e = e.times(o)), (c += 5);
  for (
    n = ((Math.log(Sn(2, c)) / Math.LN10) * 2 + 5) | 0,
      s += n,
      r = a = i = new u(Zt),
      u.precision = s;
    ;

  ) {
    if (
      ((a = Ge(a.times(e), s)),
      (r = r.times(++l)),
      (o = i.plus(Gr(a, r, s))),
      Pr(o.d).slice(0, s) === Pr(i.d).slice(0, s))
    ) {
      for (; c--; ) i = Ge(i.times(i), s);
      return (u.precision = f), t == null ? ((tt = !0), Ge(i, f)) : i;
    }
    i = o;
  }
}
function ft(e) {
  for (var t = e.e * Je, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function Pc(e, t, r) {
  if (t > e.LN10.sd())
    throw (
      ((tt = !0),
      r && (e.precision = r),
      Error(hr + 'LN10 precision limit exceeded'))
    );
  return Ge(new e(e.LN10), t);
}
function an(e) {
  for (var t = ''; e--; ) t += '0';
  return t;
}
function Ci(e, t) {
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
  if (h.s < 1) throw Error(hr + (h.s ? 'NaN' : '-Infinity'));
  if (h.eq(Zt)) return new p(0);
  if ((t == null ? ((tt = !1), (c = m)) : (c = t), h.eq(10)))
    return t == null && (tt = !0), Pc(p, c);
  if (
    ((c += d),
    (p.precision = c),
    (r = Pr(v)),
    (n = r.charAt(0)),
    (i = ft(h)),
    Math.abs(i) < 15e14)
  ) {
    for (; (n < 7 && n != 1) || (n == 1 && r.charAt(1) > 3); )
      (h = h.times(e)), (r = Pr(h.d)), (n = r.charAt(0)), f++;
    (i = ft(h)),
      n > 1 ? ((h = new p('0.' + r)), i++) : (h = new p(n + '.' + r.slice(1)));
  } else
    return (
      (l = Pc(p, c + 2, m).times(i + '')),
      (h = Ci(new p(n + '.' + r.slice(1)), c - d).plus(l)),
      (p.precision = m),
      t == null ? ((tt = !0), Ge(h, m)) : h
    );
  for (
    s = o = h = Gr(h.minus(Zt), h.plus(Zt), c), u = Ge(h.times(h), c), a = 3;
    ;

  ) {
    if (
      ((o = Ge(o.times(u), c)),
      (l = s.plus(Gr(o, new p(a), c))),
      Pr(l.d).slice(0, c) === Pr(s.d).slice(0, c))
    )
      return (
        (s = s.times(2)),
        i !== 0 && (s = s.plus(Pc(p, c + 2, m).times(i + ''))),
        (s = Gr(s, new p(f), c)),
        (p.precision = m),
        t == null ? ((tt = !0), Ge(s, m)) : s
      );
    (s = l), (a += 2);
  }
}
function Mm(e, t) {
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
      (e.e = Fa(r / Je)),
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
    if ((e.d.push(+t), tt && (e.e > gs || e.e < -gs))) throw Error(qd + r);
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
      ((i = Sn(10, o - a - 1)),
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
                  (n > 0 ? (a > 0 ? c / Sn(10, o - a) : 0) : f[u - 1]) % 10 &
                    1) ||
                r == (e.s < 0 ? 8 : 7))))),
    t < 1 || !f[0])
  )
    return (
      l
        ? ((i = ft(e)),
          (f.length = 1),
          (t = t - i - 1),
          (f[0] = Sn(10, (Je - (t % Je)) % Je)),
          (e.e = Fa(-t / Je) || 0))
        : ((f.length = 1), (f[0] = e.e = e.s = 0)),
      e
    );
  if (
    (n == 0
      ? ((f.length = u), (i = 1), u--)
      : ((f.length = u + 1),
        (i = Sn(10, Je - n)),
        (f[u] = a > 0 ? ((c / Sn(10, o - a)) % Sn(10, a) | 0) * i : 0)),
    l)
  )
    for (;;)
      if (u == 0) {
        (f[0] += i) == _t && ((f[0] = 1), ++e.e);
        break;
      } else {
        if (((f[u] += i), f[u] != _t)) break;
        (f[u--] = 0), (i = 1);
      }
  for (n = f.length; f[--n] === 0; ) f.pop();
  if (tt && (e.e > gs || e.e < -gs)) throw Error(qd + ft(e));
  return e;
}
function kx(e, t) {
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
      for (i = a; i && l[--i] === 0; ) l[i] = _t - 1;
      --l[i], (l[a] += _t);
    }
    l[a] -= f[a];
  }
  for (; l[--s] === 0; ) l.pop();
  for (; l[0] === 0; l.shift()) --n;
  return l[0] ? ((t.d = l), (t.e = n), tt ? Ge(t, h) : t) : new d(0);
}
function Ln(e, t, r) {
  var n,
    a = ft(e),
    i = Pr(e.d),
    o = i.length;
  return (
    t
      ? (r && (n = r - o) > 0
          ? (i = i.charAt(0) + '.' + i.slice(1) + an(n))
          : o > 1 && (i = i.charAt(0) + '.' + i.slice(1)),
        (i = i + (a < 0 ? 'e' : 'e+') + a))
      : a < 0
      ? ((i = '0.' + an(-a - 1) + i), r && (n = r - o) > 0 && (i += an(n)))
      : a >= o
      ? ((i += an(a + 1 - o)),
        r && (n = r - a - 1) > 0 && (i = i + '.' + an(n)))
      : ((n = a + 1) < o && (i = i.slice(0, n) + '.' + i.slice(n)),
        r && (n = r - o) > 0 && (a + 1 === o && (i += '.'), (i += an(n)))),
    e.s < 0 ? '-' + i : i
  );
}
function Im(e, t) {
  if (e.length > t) return (e.length = t), !0;
}
function Tx(e) {
  var t, r, n;
  function a(i) {
    var o = this;
    if (!(o instanceof a)) return new a(i);
    if (((o.constructor = a), i instanceof a)) {
      (o.s = i.s), (o.e = i.e), (o.d = (i = i.d) ? i.slice() : i);
      return;
    }
    if (typeof i == 'number') {
      if (i * 0 !== 0) throw Error(Mn + i);
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
      return Mm(o, i.toString());
    } else if (typeof i != 'string') throw Error(Mn + i);
    if (
      (i.charCodeAt(0) === 45 ? ((i = i.slice(1)), (o.s = -1)) : (o.s = 1),
      V8.test(i))
    )
      Mm(o, i);
    else throw Error(Mn + i);
  }
  if (
    ((a.prototype = re),
    (a.ROUND_UP = 0),
    (a.ROUND_DOWN = 1),
    (a.ROUND_CEIL = 2),
    (a.ROUND_FLOOR = 3),
    (a.ROUND_HALF_UP = 4),
    (a.ROUND_HALF_DOWN = 5),
    (a.ROUND_HALF_EVEN = 6),
    (a.ROUND_HALF_CEIL = 7),
    (a.ROUND_HALF_FLOOR = 8),
    (a.clone = Tx),
    (a.config = a.set = G8),
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
function G8(e) {
  if (!e || typeof e != 'object') throw Error(hr + 'Object expected');
  var t,
    r,
    n,
    a = [
      'precision',
      1,
      Ba,
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
      if (Fa(n) === n && n >= a[t + 1] && n <= a[t + 2]) this[r] = n;
      else throw Error(Mn + r + ': ' + n);
  if ((n = e[(r = 'LN10')]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(Mn + r + ': ' + n);
  return this;
}
var Yd = Tx(H8);
Zt = new Yd(1);
const Ve = Yd;
function q8(e) {
  return J8(e) || X8(e) || K8(e) || Y8();
}
function Y8() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function K8(e, t) {
  if (!!e) {
    if (typeof e == 'string') return Yu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === 'Object' && e.constructor && (r = e.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Yu(e, t);
  }
}
function X8(e) {
  if (typeof Symbol < 'u' && Symbol.iterator in Object(e)) return Array.from(e);
}
function J8(e) {
  if (Array.isArray(e)) return Yu(e);
}
function Yu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Z8 = function (t) {
    return t;
  },
  Mx = { '@@functional/placeholder': !0 },
  Ix = function (t) {
    return t === Mx;
  },
  Rm = function (t) {
    return function r() {
      return arguments.length === 0 ||
        (arguments.length === 1 &&
          Ix(arguments.length <= 0 ? void 0 : arguments[0]))
        ? r
        : t.apply(void 0, arguments);
    };
  },
  Q8 = function e(t, r) {
    return t === 1
      ? r
      : Rm(function () {
          for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
            a[i] = arguments[i];
          var o = a.filter(function (s) {
            return s !== Mx;
          }).length;
          return o >= t
            ? r.apply(void 0, a)
            : e(
                t - o,
                Rm(function () {
                  for (
                    var s = arguments.length, l = new Array(s), c = 0;
                    c < s;
                    c++
                  )
                    l[c] = arguments[c];
                  var u = a.map(function (f) {
                    return Ix(f) ? l.shift() : f;
                  });
                  return r.apply(void 0, q8(u).concat(l));
                })
              );
        });
  },
  Ml = function (t) {
    return Q8(t.length, t);
  },
  Ku = function (t, r) {
    for (var n = [], a = t; a < r; ++a) n[a - t] = a;
    return n;
  },
  e9 = Ml(function (e, t) {
    return Array.isArray(t)
      ? t.map(e)
      : Object.keys(t)
          .map(function (r) {
            return t[r];
          })
          .map(e);
  }),
  t9 = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    if (!r.length) return Z8;
    var a = r.reverse(),
      i = a[0],
      o = a.slice(1);
    return function () {
      return o.reduce(function (s, l) {
        return l(s);
      }, i.apply(void 0, arguments));
    };
  },
  Xu = function (t) {
    return Array.isArray(t) ? t.reverse() : t.split('').reverse.join('');
  },
  Rx = function (t) {
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
function r9(e) {
  var t;
  return (
    e === 0
      ? (t = 1)
      : (t = Math.floor(new Ve(e).abs().log(10).toNumber()) + 1),
    t
  );
}
function n9(e, t, r) {
  for (var n = new Ve(e), a = 0, i = []; n.lt(t) && a < 1e5; )
    i.push(n.toNumber()), (n = n.add(r)), a++;
  return i;
}
var a9 = Ml(function (e, t, r) {
    var n = +e,
      a = +t;
    return n + r * (a - n);
  }),
  i9 = Ml(function (e, t, r) {
    var n = t - +e;
    return (n = n || 1 / 0), (r - e) / n;
  }),
  o9 = Ml(function (e, t, r) {
    var n = t - +e;
    return (n = n || 1 / 0), Math.max(0, Math.min(1, (r - e) / n));
  });
const Il = {
  rangeStep: n9,
  getDigitCount: r9,
  interpolateNumber: a9,
  uninterpolateNumber: i9,
  uninterpolateTruncation: o9,
};
function Ju(e) {
  return c9(e) || l9(e) || Dx(e) || s9();
}
function s9() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function l9(e) {
  if (typeof Symbol < 'u' && Symbol.iterator in Object(e)) return Array.from(e);
}
function c9(e) {
  if (Array.isArray(e)) return Zu(e);
}
function Pi(e, t) {
  return d9(e) || f9(e, t) || Dx(e, t) || u9();
}
function u9() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Dx(e, t) {
  if (!!e) {
    if (typeof e == 'string') return Zu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === 'Object' && e.constructor && (r = e.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Zu(e, t);
  }
}
function Zu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function f9(e, t) {
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
function d9(e) {
  if (Array.isArray(e)) return e;
}
function jx(e) {
  var t = Pi(e, 2),
    r = t[0],
    n = t[1],
    a = r,
    i = n;
  return r > n && ((a = n), (i = r)), [a, i];
}
function Nx(e, t, r) {
  if (e.lte(0)) return new Ve(0);
  var n = Il.getDigitCount(e.toNumber()),
    a = new Ve(10).pow(n),
    i = e.div(a),
    o = n !== 1 ? 0.05 : 0.1,
    s = new Ve(Math.ceil(i.div(o).toNumber())).add(r).mul(o),
    l = s.mul(a);
  return t ? l : new Ve(Math.ceil(l));
}
function p9(e, t, r) {
  var n = 1,
    a = new Ve(e);
  if (!a.isint() && r) {
    var i = Math.abs(e);
    i < 1
      ? ((n = new Ve(10).pow(Il.getDigitCount(e) - 1)),
        (a = new Ve(Math.floor(a.div(n).toNumber())).mul(n)))
      : i > 1 && (a = new Ve(Math.floor(e)));
  } else
    e === 0
      ? (a = new Ve(Math.floor((t - 1) / 2)))
      : r || (a = new Ve(Math.floor(e)));
  var o = Math.floor((t - 1) / 2),
    s = t9(
      e9(function (l) {
        return a.add(new Ve(l - o).mul(n)).toNumber();
      }),
      Ku
    );
  return s(0, t);
}
function Lx(e, t, r, n) {
  var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e) / (r - 1)))
    return { step: new Ve(0), tickMin: new Ve(0), tickMax: new Ve(0) };
  var i = Nx(new Ve(t).sub(e).div(r - 1), n, a),
    o;
  e <= 0 && t >= 0
    ? (o = new Ve(0))
    : ((o = new Ve(e).add(t).div(2)), (o = o.sub(new Ve(o).mod(i))));
  var s = Math.ceil(o.sub(e).div(i).toNumber()),
    l = Math.ceil(new Ve(t).sub(o).div(i).toNumber()),
    c = s + l + 1;
  return c > r
    ? Lx(e, t, r, n, a + 1)
    : (c < r && ((l = t > 0 ? l + (r - c) : l), (s = t > 0 ? s : s + (r - c))),
      {
        step: i,
        tickMin: o.sub(new Ve(s).mul(i)),
        tickMax: o.add(new Ve(l).mul(i)),
      });
}
function h9(e) {
  var t = Pi(e, 2),
    r = t[0],
    n = t[1],
    a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6,
    i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    o = Math.max(a, 2),
    s = jx([r, n]),
    l = Pi(s, 2),
    c = l[0],
    u = l[1];
  if (c === -1 / 0 || u === 1 / 0) {
    var f =
      u === 1 / 0
        ? [c].concat(
            Ju(
              Ku(0, a - 1).map(function () {
                return 1 / 0;
              })
            )
          )
        : [].concat(
            Ju(
              Ku(0, a - 1).map(function () {
                return -1 / 0;
              })
            ),
            [u]
          );
    return r > n ? Xu(f) : f;
  }
  if (c === u) return p9(c, a, i);
  var d = Lx(c, u, o, i),
    h = d.step,
    v = d.tickMin,
    p = d.tickMax,
    m = Il.rangeStep(v, p.add(new Ve(0.1).mul(h)), h);
  return r > n ? Xu(m) : m;
}
function v9(e, t) {
  var r = Pi(e, 2),
    n = r[0],
    a = r[1],
    i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0,
    o = jx([n, a]),
    s = Pi(o, 2),
    l = s[0],
    c = s[1];
  if (l === -1 / 0 || c === 1 / 0) return [n, a];
  if (l === c) return [l];
  var u = Math.max(t, 2),
    f = Nx(new Ve(c).sub(l).div(u - 1), i, 0),
    d = [].concat(
      Ju(Il.rangeStep(new Ve(l), new Ve(c).sub(new Ve(0.99).mul(f)), f)),
      [c]
    );
  return n > a ? Xu(d) : d;
}
var m9 = Rx(h9),
  g9 = Rx(v9);
function Gi(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Kd(e) {
  let t = e,
    r = e;
  e.length === 1 && ((t = (o, s) => e(o) - s), (r = y9(e)));
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
function y9(e) {
  return (t, r) => Gi(e(t), r);
}
function Bx(e) {
  return e === null ? NaN : +e;
}
function* b9(e, t) {
  if (t === void 0) for (let r of e) r != null && (r = +r) >= r && (yield r);
  else {
    let r = -1;
    for (let n of e) (n = t(n, ++r, e)) != null && (n = +n) >= n && (yield n);
  }
}
const x9 = Kd(Gi),
  w9 = x9.right;
Kd(Bx).center;
const qi = w9;
var Qu = Math.sqrt(50),
  ef = Math.sqrt(10),
  tf = Math.sqrt(2);
function rf(e, t, r) {
  var n,
    a = -1,
    i,
    o,
    s;
  if (((t = +t), (e = +e), (r = +r), e === t && r > 0)) return [e];
  if (
    ((n = t < e) && ((i = e), (e = t), (t = i)),
    (s = Fx(e, t, r)) === 0 || !isFinite(s))
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
function Fx(e, t, r) {
  var n = (t - e) / Math.max(0, r),
    a = Math.floor(Math.log(n) / Math.LN10),
    i = n / Math.pow(10, a);
  return a >= 0
    ? (i >= Qu ? 10 : i >= ef ? 5 : i >= tf ? 2 : 1) * Math.pow(10, a)
    : -Math.pow(10, -a) / (i >= Qu ? 10 : i >= ef ? 5 : i >= tf ? 2 : 1);
}
function nf(e, t, r) {
  var n = Math.abs(t - e) / Math.max(0, r),
    a = Math.pow(10, Math.floor(Math.log(n) / Math.LN10)),
    i = n / a;
  return (
    i >= Qu ? (a *= 10) : i >= ef ? (a *= 5) : i >= tf && (a *= 2),
    t < e ? -a : a
  );
}
function Dm(e, t) {
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
function jm(e, t) {
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
function zx(e, t, r = 0, n = e.length - 1, a = Gi) {
  for (; n > r; ) {
    if (n - r > 600) {
      const l = n - r + 1,
        c = t - r + 1,
        u = Math.log(l),
        f = 0.5 * Math.exp((2 * u) / 3),
        d = 0.5 * Math.sqrt((u * f * (l - f)) / l) * (c - l / 2 < 0 ? -1 : 1),
        h = Math.max(r, Math.floor(t - (c * f) / l + d)),
        v = Math.min(n, Math.floor(t + ((l - c) * f) / l + d));
      zx(e, t, h, v, a);
    }
    const i = e[t];
    let o = r,
      s = n;
    for (Qa(e, r, t), a(e[n], i) > 0 && Qa(e, r, n); o < s; ) {
      for (Qa(e, o, s), ++o, --s; a(e[o], i) < 0; ) ++o;
      for (; a(e[s], i) > 0; ) --s;
    }
    a(e[r], i) === 0 ? Qa(e, r, s) : (++s, Qa(e, s, n)),
      s <= t && (r = s + 1),
      t <= s && (n = s - 1);
  }
  return e;
}
function Qa(e, t, r) {
  const n = e[t];
  (e[t] = e[r]), (e[r] = n);
}
function _9(e, t, r) {
  if (((e = Float64Array.from(b9(e, r))), !!(n = e.length))) {
    if ((t = +t) <= 0 || n < 2) return jm(e);
    if (t >= 1) return Dm(e);
    var n,
      a = (n - 1) * t,
      i = Math.floor(a),
      o = Dm(zx(e, i).subarray(0, i + 1)),
      s = jm(e.subarray(i + 1));
    return o + (s - o) * (a - i);
  }
}
function O9(e, t, r = Bx) {
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
function S9(e, t, r) {
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
function gr(e, t) {
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
function Qr(e, t) {
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
const af = Symbol('implicit');
function Xd() {
  var e = new Map(),
    t = [],
    r = [],
    n = af;
  function a(i) {
    var o = i + '',
      s = e.get(o);
    if (!s) {
      if (n !== af) return n;
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
      return Xd(t, r).unknown(n);
    }),
    gr.apply(a, arguments),
    a
  );
}
function ki() {
  var e = Xd().unknown(void 0),
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
    var m = S9(d).map(function (y) {
      return v + i * y;
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
      return ki(t(), [n, a]).round(s).paddingInner(l).paddingOuter(c).align(u);
    }),
    gr.apply(f(), arguments)
  );
}
function Wx(e) {
  var t = e.copy;
  return (
    (e.padding = e.paddingOuter),
    delete e.paddingInner,
    delete e.paddingOuter,
    (e.copy = function () {
      return Wx(t());
    }),
    e
  );
}
function vi() {
  return Wx(ki.apply(null, arguments).paddingInner(1));
}
function Jd(e, t, r) {
  (e.prototype = t.prototype = r), (r.constructor = e);
}
function Ux(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function Yi() {}
var Ti = 0.7,
  ys = 1 / Ti,
  da = '\\s*([+-]?\\d+)\\s*',
  Mi = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*',
  Ir = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
  E9 = /^#([0-9a-f]{3,8})$/,
  $9 = new RegExp('^rgb\\(' + [da, da, da] + '\\)$'),
  A9 = new RegExp('^rgb\\(' + [Ir, Ir, Ir] + '\\)$'),
  C9 = new RegExp('^rgba\\(' + [da, da, da, Mi] + '\\)$'),
  P9 = new RegExp('^rgba\\(' + [Ir, Ir, Ir, Mi] + '\\)$'),
  k9 = new RegExp('^hsl\\(' + [Mi, Ir, Ir] + '\\)$'),
  T9 = new RegExp('^hsla\\(' + [Mi, Ir, Ir, Mi] + '\\)$'),
  Nm = {
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
Jd(Yi, Ii, {
  copy: function (e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable: function () {
    return this.rgb().displayable();
  },
  hex: Lm,
  formatHex: Lm,
  formatHsl: M9,
  formatRgb: Bm,
  toString: Bm,
});
function Lm() {
  return this.rgb().formatHex();
}
function M9() {
  return Hx(this).formatHsl();
}
function Bm() {
  return this.rgb().formatRgb();
}
function Ii(e) {
  var t, r;
  return (
    (e = (e + '').trim().toLowerCase()),
    (t = E9.exec(e))
      ? ((r = t[1].length),
        (t = parseInt(t[1], 16)),
        r === 6
          ? Fm(t)
          : r === 3
          ? new Qt(
              ((t >> 8) & 15) | ((t >> 4) & 240),
              ((t >> 4) & 15) | (t & 240),
              ((t & 15) << 4) | (t & 15),
              1
            )
          : r === 8
          ? po(
              (t >> 24) & 255,
              (t >> 16) & 255,
              (t >> 8) & 255,
              (t & 255) / 255
            )
          : r === 4
          ? po(
              ((t >> 12) & 15) | ((t >> 8) & 240),
              ((t >> 8) & 15) | ((t >> 4) & 240),
              ((t >> 4) & 15) | (t & 240),
              (((t & 15) << 4) | (t & 15)) / 255
            )
          : null)
      : (t = $9.exec(e))
      ? new Qt(t[1], t[2], t[3], 1)
      : (t = A9.exec(e))
      ? new Qt((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, 1)
      : (t = C9.exec(e))
      ? po(t[1], t[2], t[3], t[4])
      : (t = P9.exec(e))
      ? po((t[1] * 255) / 100, (t[2] * 255) / 100, (t[3] * 255) / 100, t[4])
      : (t = k9.exec(e))
      ? Um(t[1], t[2] / 100, t[3] / 100, 1)
      : (t = T9.exec(e))
      ? Um(t[1], t[2] / 100, t[3] / 100, t[4])
      : Nm.hasOwnProperty(e)
      ? Fm(Nm[e])
      : e === 'transparent'
      ? new Qt(NaN, NaN, NaN, 0)
      : null
  );
}
function Fm(e) {
  return new Qt((e >> 16) & 255, (e >> 8) & 255, e & 255, 1);
}
function po(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new Qt(e, t, r, n);
}
function I9(e) {
  return (
    e instanceof Yi || (e = Ii(e)),
    e ? ((e = e.rgb()), new Qt(e.r, e.g, e.b, e.opacity)) : new Qt()
  );
}
function of(e, t, r, n) {
  return arguments.length === 1 ? I9(e) : new Qt(e, t, r, n == null ? 1 : n);
}
function Qt(e, t, r, n) {
  (this.r = +e), (this.g = +t), (this.b = +r), (this.opacity = +n);
}
Jd(
  Qt,
  of,
  Ux(Yi, {
    brighter: function (e) {
      return (
        (e = e == null ? ys : Math.pow(ys, e)),
        new Qt(this.r * e, this.g * e, this.b * e, this.opacity)
      );
    },
    darker: function (e) {
      return (
        (e = e == null ? Ti : Math.pow(Ti, e)),
        new Qt(this.r * e, this.g * e, this.b * e, this.opacity)
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
    hex: zm,
    formatHex: zm,
    formatRgb: Wm,
    toString: Wm,
  })
);
function zm() {
  return '#' + kc(this.r) + kc(this.g) + kc(this.b);
}
function Wm() {
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
function kc(e) {
  return (
    (e = Math.max(0, Math.min(255, Math.round(e) || 0))),
    (e < 16 ? '0' : '') + e.toString(16)
  );
}
function Um(e, t, r, n) {
  return (
    n <= 0
      ? (e = t = r = NaN)
      : r <= 0 || r >= 1
      ? (e = t = NaN)
      : t <= 0 && (e = NaN),
    new Cr(e, t, r, n)
  );
}
function Hx(e) {
  if (e instanceof Cr) return new Cr(e.h, e.s, e.l, e.opacity);
  if ((e instanceof Yi || (e = Ii(e)), !e)) return new Cr();
  if (e instanceof Cr) return e;
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
    new Cr(o, s, l, e.opacity)
  );
}
function R9(e, t, r, n) {
  return arguments.length === 1 ? Hx(e) : new Cr(e, t, r, n == null ? 1 : n);
}
function Cr(e, t, r, n) {
  (this.h = +e), (this.s = +t), (this.l = +r), (this.opacity = +n);
}
Jd(
  Cr,
  R9,
  Ux(Yi, {
    brighter: function (e) {
      return (
        (e = e == null ? ys : Math.pow(ys, e)),
        new Cr(this.h, this.s, this.l * e, this.opacity)
      );
    },
    darker: function (e) {
      return (
        (e = e == null ? Ti : Math.pow(Ti, e)),
        new Cr(this.h, this.s, this.l * e, this.opacity)
      );
    },
    rgb: function () {
      var e = (this.h % 360) + (this.h < 0) * 360,
        t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
        r = this.l,
        n = r + (r < 0.5 ? r : 1 - r) * t,
        a = 2 * r - n;
      return new Qt(
        Tc(e >= 240 ? e - 240 : e + 120, a, n),
        Tc(e, a, n),
        Tc(e < 120 ? e + 240 : e - 120, a, n),
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
function Tc(e, t, r) {
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
const Zd = (e) => () => e;
function D9(e, t) {
  return function (r) {
    return e + r * t;
  };
}
function j9(e, t, r) {
  return (
    (e = Math.pow(e, r)),
    (t = Math.pow(t, r) - e),
    (r = 1 / r),
    function (n) {
      return Math.pow(e + n * t, r);
    }
  );
}
function N9(e) {
  return (e = +e) == 1
    ? Vx
    : function (t, r) {
        return r - t ? j9(t, r, e) : Zd(isNaN(t) ? r : t);
      };
}
function Vx(e, t) {
  var r = t - e;
  return r ? D9(e, r) : Zd(isNaN(e) ? t : e);
}
const Hm = (function e(t) {
  var r = N9(t);
  function n(a, i) {
    var o = r((a = of(a)).r, (i = of(i)).r),
      s = r(a.g, i.g),
      l = r(a.b, i.b),
      c = Vx(a.opacity, i.opacity);
    return function (u) {
      return (
        (a.r = o(u)), (a.g = s(u)), (a.b = l(u)), (a.opacity = c(u)), a + ''
      );
    };
  }
  return (n.gamma = e), n;
})(1);
function L9(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0,
    n = t.slice(),
    a;
  return function (i) {
    for (a = 0; a < r; ++a) n[a] = e[a] * (1 - i) + t[a] * i;
    return n;
  };
}
function B9(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function F9(e, t) {
  var r = t ? t.length : 0,
    n = e ? Math.min(r, e.length) : 0,
    a = new Array(n),
    i = new Array(r),
    o;
  for (o = 0; o < n; ++o) a[o] = za(e[o], t[o]);
  for (; o < r; ++o) i[o] = t[o];
  return function (s) {
    for (o = 0; o < n; ++o) i[o] = a[o](s);
    return i;
  };
}
function z9(e, t) {
  var r = new Date();
  return (
    (e = +e),
    (t = +t),
    function (n) {
      return r.setTime(e * (1 - n) + t * n), r;
    }
  );
}
function bs(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return e * (1 - r) + t * r;
    }
  );
}
function W9(e, t) {
  var r = {},
    n = {},
    a;
  (e === null || typeof e != 'object') && (e = {}),
    (t === null || typeof t != 'object') && (t = {});
  for (a in t) a in e ? (r[a] = za(e[a], t[a])) : (n[a] = t[a]);
  return function (i) {
    for (a in r) n[a] = r[a](i);
    return n;
  };
}
var sf = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
  Mc = new RegExp(sf.source, 'g');
function U9(e) {
  return function () {
    return e;
  };
}
function H9(e) {
  return function (t) {
    return e(t) + '';
  };
}
function V9(e, t) {
  var r = (sf.lastIndex = Mc.lastIndex = 0),
    n,
    a,
    i,
    o = -1,
    s = [],
    l = [];
  for (e = e + '', t = t + ''; (n = sf.exec(e)) && (a = Mc.exec(t)); )
    (i = a.index) > r &&
      ((i = t.slice(r, i)), s[o] ? (s[o] += i) : (s[++o] = i)),
      (n = n[0]) === (a = a[0])
        ? s[o]
          ? (s[o] += a)
          : (s[++o] = a)
        : ((s[++o] = null), l.push({ i: o, x: bs(n, a) })),
      (r = Mc.lastIndex);
  return (
    r < t.length && ((i = t.slice(r)), s[o] ? (s[o] += i) : (s[++o] = i)),
    s.length < 2
      ? l[0]
        ? H9(l[0].x)
        : U9(t)
      : ((t = l.length),
        function (c) {
          for (var u = 0, f; u < t; ++u) s[(f = l[u]).i] = f.x(c);
          return s.join('');
        })
  );
}
function za(e, t) {
  var r = typeof t,
    n;
  return t == null || r === 'boolean'
    ? Zd(t)
    : (r === 'number'
        ? bs
        : r === 'string'
        ? (n = Ii(t))
          ? ((t = n), Hm)
          : V9
        : t instanceof Ii
        ? Hm
        : t instanceof Date
        ? z9
        : B9(t)
        ? L9
        : Array.isArray(t)
        ? F9
        : (typeof t.valueOf != 'function' && typeof t.toString != 'function') ||
          isNaN(t)
        ? W9
        : bs)(e, t);
}
function Qd(e, t) {
  return (
    (e = +e),
    (t = +t),
    function (r) {
      return Math.round(e * (1 - r) + t * r);
    }
  );
}
function G9(e, t) {
  t === void 0 && ((t = e), (e = za));
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
function q9(e) {
  return function () {
    return e;
  };
}
function xs(e) {
  return +e;
}
var Vm = [0, 1];
function Nt(e) {
  return e;
}
function lf(e, t) {
  return (t -= e = +e)
    ? function (r) {
        return (r - e) / t;
      }
    : q9(isNaN(t) ? NaN : 0.5);
}
function Y9(e, t) {
  var r;
  return (
    e > t && ((r = e), (e = t), (t = r)),
    function (n) {
      return Math.max(e, Math.min(t, n));
    }
  );
}
function K9(e, t, r) {
  var n = e[0],
    a = e[1],
    i = t[0],
    o = t[1];
  return (
    a < n ? ((n = lf(a, n)), (i = r(o, i))) : ((n = lf(n, a)), (i = r(i, o))),
    function (s) {
      return i(n(s));
    }
  );
}
function X9(e, t, r) {
  var n = Math.min(e.length, t.length) - 1,
    a = new Array(n),
    i = new Array(n),
    o = -1;
  for (
    e[n] < e[0] && ((e = e.slice().reverse()), (t = t.slice().reverse()));
    ++o < n;

  )
    (a[o] = lf(e[o], e[o + 1])), (i[o] = r(t[o], t[o + 1]));
  return function (s) {
    var l = qi(e, s, 1, n) - 1;
    return i[l](a[l](s));
  };
}
function Ki(e, t) {
  return t
    .domain(e.domain())
    .range(e.range())
    .interpolate(e.interpolate())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function Rl() {
  var e = Vm,
    t = Vm,
    r = za,
    n,
    a,
    i,
    o = Nt,
    s,
    l,
    c;
  function u() {
    var d = Math.min(e.length, t.length);
    return (
      o !== Nt && (o = Y9(e[0], e[d - 1])),
      (s = d > 2 ? X9 : K9),
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
      return o(a((c || (c = s(t, e.map(n), bs)))(d)));
    }),
    (f.domain = function (d) {
      return arguments.length ? ((e = Array.from(d, xs)), u()) : e.slice();
    }),
    (f.range = function (d) {
      return arguments.length ? ((t = Array.from(d)), u()) : t.slice();
    }),
    (f.rangeRound = function (d) {
      return (t = Array.from(d)), (r = Qd), u();
    }),
    (f.clamp = function (d) {
      return arguments.length ? ((o = d ? !0 : Nt), u()) : o !== Nt;
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
function ep() {
  return Rl()(Nt, Nt);
}
function J9(e) {
  return Math.abs((e = Math.round(e))) >= 1e21
    ? e.toLocaleString('en').replace(/,/g, '')
    : e.toString(10);
}
function ws(e, t) {
  if (
    (r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf('e')) < 0
  )
    return null;
  var r,
    n = e.slice(0, r);
  return [n.length > 1 ? n[0] + n.slice(2) : n, +e.slice(r + 1)];
}
function Ea(e) {
  return (e = ws(Math.abs(e))), e ? e[1] : NaN;
}
function Z9(e, t) {
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
function Q9(e) {
  return function (t) {
    return t.replace(/[0-9]/g, function (r) {
      return e[+r];
    });
  };
}
var eU =
  /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function _s(e) {
  if (!(t = eU.exec(e))) throw new Error('invalid format: ' + e);
  var t;
  return new tp({
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
_s.prototype = tp.prototype;
function tp(e) {
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
tp.prototype.toString = function () {
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
function tU(e) {
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
var Gx;
function rU(e, t) {
  var r = ws(e, t);
  if (!r) return e + '';
  var n = r[0],
    a = r[1],
    i = a - (Gx = Math.max(-8, Math.min(8, Math.floor(a / 3))) * 3) + 1,
    o = n.length;
  return i === o
    ? n
    : i > o
    ? n + new Array(i - o + 1).join('0')
    : i > 0
    ? n.slice(0, i) + '.' + n.slice(i)
    : '0.' + new Array(1 - i).join('0') + ws(e, Math.max(0, t + i - 1))[0];
}
function Gm(e, t) {
  var r = ws(e, t);
  if (!r) return e + '';
  var n = r[0],
    a = r[1];
  return a < 0
    ? '0.' + new Array(-a).join('0') + n
    : n.length > a + 1
    ? n.slice(0, a + 1) + '.' + n.slice(a + 1)
    : n + new Array(a - n.length + 2).join('0');
}
const qm = {
  '%': (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + '',
  d: J9,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Gm(e * 100, t),
  r: Gm,
  s: rU,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16),
};
function Ym(e) {
  return e;
}
var Km = Array.prototype.map,
  Xm = [
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
function nU(e) {
  var t =
      e.grouping === void 0 || e.thousands === void 0
        ? Ym
        : Z9(Km.call(e.grouping, Number), e.thousands + ''),
    r = e.currency === void 0 ? '' : e.currency[0] + '',
    n = e.currency === void 0 ? '' : e.currency[1] + '',
    a = e.decimal === void 0 ? '.' : e.decimal + '',
    i = e.numerals === void 0 ? Ym : Q9(Km.call(e.numerals, String)),
    o = e.percent === void 0 ? '%' : e.percent + '',
    s = e.minus === void 0 ? '\u2212' : e.minus + '',
    l = e.nan === void 0 ? 'NaN' : e.nan + '';
  function c(f) {
    f = _s(f);
    var d = f.fill,
      h = f.align,
      v = f.sign,
      p = f.symbol,
      m = f.zero,
      y = f.width,
      _ = f.comma,
      x = f.precision,
      b = f.trim,
      w = f.type;
    w === 'n'
      ? ((_ = !0), (w = 'g'))
      : qm[w] || (x === void 0 && (x = 12), (b = !0), (w = 'g')),
      (m || (d === '0' && h === '=')) && ((m = !0), (d = '0'), (h = '='));
    var O =
        p === '$'
          ? r
          : p === '#' && /[boxX]/.test(w)
          ? '0' + w.toLowerCase()
          : '',
      E = p === '$' ? n : /[%p]/.test(w) ? o : '',
      $ = qm[w],
      A = /[defgprs%]/.test(w);
    x =
      x === void 0
        ? 6
        : /[gprs]/.test(w)
        ? Math.max(1, Math.min(21, x))
        : Math.max(0, Math.min(20, x));
    function P(C) {
      var T = O,
        k = E,
        D,
        j,
        R;
      if (w === 'c') (k = $(C) + k), (C = '');
      else {
        C = +C;
        var N = C < 0 || 1 / C < 0;
        if (
          ((C = isNaN(C) ? l : $(Math.abs(C), x)),
          b && (C = tU(C)),
          N && +C == 0 && v !== '+' && (N = !1),
          (T = (N ? (v === '(' ? v : s) : v === '-' || v === '(' ? '' : v) + T),
          (k =
            (w === 's' ? Xm[8 + Gx / 3] : '') +
            k +
            (N && v === '(' ? ')' : '')),
          A)
        ) {
          for (D = -1, j = C.length; ++D < j; )
            if (((R = C.charCodeAt(D)), 48 > R || R > 57)) {
              (k = (R === 46 ? a + C.slice(D + 1) : C.slice(D)) + k),
                (C = C.slice(0, D));
              break;
            }
        }
      }
      _ && !m && (C = t(C, 1 / 0));
      var F = T.length + C.length + k.length,
        M = F < y ? new Array(y - F + 1).join(d) : '';
      switch (
        (_ && m && ((C = t(M + C, M.length ? y - k.length : 1 / 0)), (M = '')),
        h)
      ) {
        case '<':
          C = T + C + k + M;
          break;
        case '=':
          C = T + M + C + k;
          break;
        case '^':
          C = M.slice(0, (F = M.length >> 1)) + T + C + k + M.slice(F);
          break;
        default:
          C = M + T + C + k;
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
    var h = c(((f = _s(f)), (f.type = 'f'), f)),
      v = Math.max(-8, Math.min(8, Math.floor(Ea(d) / 3))) * 3,
      p = Math.pow(10, -v),
      m = Xm[8 + v / 3];
    return function (y) {
      return h(p * y) + m;
    };
  }
  return { format: c, formatPrefix: u };
}
var ho, rp, qx;
aU({ thousands: ',', grouping: [3], currency: ['$', ''] });
function aU(e) {
  return (ho = nU(e)), (rp = ho.format), (qx = ho.formatPrefix), ho;
}
function iU(e) {
  return Math.max(0, -Ea(Math.abs(e)));
}
function oU(e, t) {
  return Math.max(
    0,
    Math.max(-8, Math.min(8, Math.floor(Ea(t) / 3))) * 3 - Ea(Math.abs(e))
  );
}
function sU(e, t) {
  return (
    (e = Math.abs(e)), (t = Math.abs(t) - e), Math.max(0, Ea(t) - Ea(e)) + 1
  );
}
function Yx(e, t, r, n) {
  var a = nf(e, t, r),
    i;
  switch (((n = _s(n == null ? ',f' : n)), n.type)) {
    case 's': {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return (
        n.precision == null && !isNaN((i = oU(a, o))) && (n.precision = i),
        qx(n, o)
      );
    }
    case '':
    case 'e':
    case 'g':
    case 'p':
    case 'r': {
      n.precision == null &&
        !isNaN((i = sU(a, Math.max(Math.abs(e), Math.abs(t))))) &&
        (n.precision = i - (n.type === 'e'));
      break;
    }
    case 'f':
    case '%': {
      n.precision == null &&
        !isNaN((i = iU(a))) &&
        (n.precision = i - (n.type === '%') * 2);
      break;
    }
  }
  return rp(n);
}
function bn(e) {
  var t = e.domain;
  return (
    (e.ticks = function (r) {
      var n = t();
      return rf(n[0], n[n.length - 1], r == null ? 10 : r);
    }),
    (e.tickFormat = function (r, n) {
      var a = t();
      return Yx(a[0], a[a.length - 1], r == null ? 10 : r, n);
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
        if (((c = Fx(o, s, r)), c === l)) return (n[a] = o), (n[i] = s), t(n);
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
function Os() {
  var e = ep();
  return (
    (e.copy = function () {
      return Ki(e, Os());
    }),
    gr.apply(e, arguments),
    bn(e)
  );
}
function Kx(e) {
  var t;
  function r(n) {
    return n == null || isNaN((n = +n)) ? t : n;
  }
  return (
    (r.invert = r),
    (r.domain = r.range =
      function (n) {
        return arguments.length ? ((e = Array.from(n, xs)), r) : e.slice();
      }),
    (r.unknown = function (n) {
      return arguments.length ? ((t = n), r) : t;
    }),
    (r.copy = function () {
      return Kx(e).unknown(t);
    }),
    (e = arguments.length ? Array.from(e, xs) : [0, 1]),
    bn(r)
  );
}
function Xx(e, t) {
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
function Jm(e) {
  return Math.log(e);
}
function Zm(e) {
  return Math.exp(e);
}
function lU(e) {
  return -Math.log(-e);
}
function cU(e) {
  return -Math.exp(-e);
}
function uU(e) {
  return isFinite(e) ? +('1e' + e) : e < 0 ? 0 : e;
}
function fU(e) {
  return e === 10
    ? uU
    : e === Math.E
    ? Math.exp
    : function (t) {
        return Math.pow(e, t);
      };
}
function dU(e) {
  return e === Math.E
    ? Math.log
    : (e === 10 && Math.log10) ||
        (e === 2 && Math.log2) ||
        ((e = Math.log(e)),
        function (t) {
          return Math.log(t) / e;
        });
}
function Qm(e) {
  return function (t) {
    return -e(-t);
  };
}
function np(e) {
  var t = e(Jm, Zm),
    r = t.domain,
    n = 10,
    a,
    i;
  function o() {
    return (
      (a = dU(n)),
      (i = fU(n)),
      r()[0] < 0 ? ((a = Qm(a)), (i = Qm(i)), e(lU, cU)) : e(Jm, Zm),
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
        y = s == null ? 10 : +s,
        _ = [];
      if (!(n % 1) && h - d < y) {
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
        _.length * 2 < y && (_ = rf(c, u, y));
      } else _ = rf(d, h, Math.min(h - d, y)).map(i);
      return f ? _.reverse() : _;
    }),
    (t.tickFormat = function (s, l) {
      if (
        (l == null && (l = n === 10 ? '.0e' : ','),
        typeof l != 'function' && (l = rp(l)),
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
        Xx(r(), {
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
function Jx() {
  var e = np(Rl()).domain([1, 10]);
  return (
    (e.copy = function () {
      return Ki(e, Jx()).base(e.base());
    }),
    gr.apply(e, arguments),
    e
  );
}
function eg(e) {
  return function (t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function tg(e) {
  return function (t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function ap(e) {
  var t = 1,
    r = e(eg(t), tg(t));
  return (
    (r.constant = function (n) {
      return arguments.length ? e(eg((t = +n)), tg(t)) : t;
    }),
    bn(r)
  );
}
function Zx() {
  var e = ap(Rl());
  return (
    (e.copy = function () {
      return Ki(e, Zx()).constant(e.constant());
    }),
    gr.apply(e, arguments)
  );
}
function rg(e) {
  return function (t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function pU(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function hU(e) {
  return e < 0 ? -e * e : e * e;
}
function ip(e) {
  var t = e(Nt, Nt),
    r = 1;
  function n() {
    return r === 1 ? e(Nt, Nt) : r === 0.5 ? e(pU, hU) : e(rg(r), rg(1 / r));
  }
  return (
    (t.exponent = function (a) {
      return arguments.length ? ((r = +a), n()) : r;
    }),
    bn(t)
  );
}
function op() {
  var e = ip(Rl());
  return (
    (e.copy = function () {
      return Ki(e, op()).exponent(e.exponent());
    }),
    gr.apply(e, arguments),
    e
  );
}
function vU() {
  return op.apply(null, arguments).exponent(0.5);
}
function ng(e) {
  return Math.sign(e) * e * e;
}
function mU(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function Qx() {
  var e = ep(),
    t = [0, 1],
    r = !1,
    n;
  function a(i) {
    var o = mU(e(i));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return (
    (a.invert = function (i) {
      return e.invert(ng(i));
    }),
    (a.domain = function (i) {
      return arguments.length ? (e.domain(i), a) : e.domain();
    }),
    (a.range = function (i) {
      return arguments.length
        ? (e.range((t = Array.from(i, xs)).map(ng)), a)
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
      return Qx(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
    }),
    gr.apply(a, arguments),
    bn(a)
  );
}
function e1() {
  var e = [],
    t = [],
    r = [],
    n;
  function a() {
    var o = 0,
      s = Math.max(1, t.length);
    for (r = new Array(s - 1); ++o < s; ) r[o - 1] = O9(e, o / s);
    return i;
  }
  function i(o) {
    return o == null || isNaN((o = +o)) ? n : t[qi(r, o)];
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
      return e.sort(Gi), a();
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
      return e1().domain(e).range(t).unknown(n);
    }),
    gr.apply(i, arguments)
  );
}
function t1() {
  var e = 0,
    t = 1,
    r = 1,
    n = [0.5],
    a = [0, 1],
    i;
  function o(l) {
    return l != null && l <= l ? a[qi(n, l, 0, r)] : i;
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
      return t1().domain([e, t]).range(a).unknown(i);
    }),
    gr.apply(bn(o), arguments)
  );
}
function r1() {
  var e = [0.5],
    t = [0, 1],
    r,
    n = 1;
  function a(i) {
    return i != null && i <= i ? t[qi(e, i, 0, n)] : r;
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
      return r1().domain(e).range(t).unknown(r);
    }),
    gr.apply(a, arguments)
  );
}
var Ic = new Date(),
  Rc = new Date();
function Et(e, t, r, n) {
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
      return Et(
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
          Ic.setTime(+i), Rc.setTime(+o), e(Ic), e(Rc), Math.floor(r(Ic, Rc))
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
var Ss = Et(
  function () {},
  function (e, t) {
    e.setTime(+e + t);
  },
  function (e, t) {
    return t - e;
  }
);
Ss.every = function (e) {
  return (
    (e = Math.floor(e)),
    !isFinite(e) || !(e > 0)
      ? null
      : e > 1
      ? Et(
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
      : Ss
  );
};
const gU = Ss;
Ss.range;
const Hr = 1e3,
  lr = Hr * 60,
  Vr = lr * 60,
  Bn = Vr * 24,
  sp = Bn * 7,
  ag = Bn * 30,
  Dc = Bn * 365;
var n1 = Et(
  function (e) {
    e.setTime(e - e.getMilliseconds());
  },
  function (e, t) {
    e.setTime(+e + t * Hr);
  },
  function (e, t) {
    return (t - e) / Hr;
  },
  function (e) {
    return e.getUTCSeconds();
  }
);
const na = n1;
n1.range;
var a1 = Et(
  function (e) {
    e.setTime(e - e.getMilliseconds() - e.getSeconds() * Hr);
  },
  function (e, t) {
    e.setTime(+e + t * lr);
  },
  function (e, t) {
    return (t - e) / lr;
  },
  function (e) {
    return e.getMinutes();
  }
);
const i1 = a1;
a1.range;
var o1 = Et(
  function (e) {
    e.setTime(
      e - e.getMilliseconds() - e.getSeconds() * Hr - e.getMinutes() * lr
    );
  },
  function (e, t) {
    e.setTime(+e + t * Vr);
  },
  function (e, t) {
    return (t - e) / Vr;
  },
  function (e) {
    return e.getHours();
  }
);
const s1 = o1;
o1.range;
var l1 = Et(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * lr) / Bn,
  (e) => e.getDate() - 1
);
const Dl = l1;
l1.range;
function Vn(e) {
  return Et(
    function (t) {
      t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)),
        t.setHours(0, 0, 0, 0);
    },
    function (t, r) {
      t.setDate(t.getDate() + r * 7);
    },
    function (t, r) {
      return (
        (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * lr) / sp
      );
    }
  );
}
var jl = Vn(0),
  Es = Vn(1),
  yU = Vn(2),
  bU = Vn(3),
  $a = Vn(4),
  xU = Vn(5),
  wU = Vn(6);
jl.range;
Es.range;
yU.range;
bU.range;
$a.range;
xU.range;
wU.range;
var c1 = Et(
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
const u1 = c1;
c1.range;
var lp = Et(
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
lp.every = function (e) {
  return !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : Et(
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
const Fn = lp;
lp.range;
var f1 = Et(
  function (e) {
    e.setUTCSeconds(0, 0);
  },
  function (e, t) {
    e.setTime(+e + t * lr);
  },
  function (e, t) {
    return (t - e) / lr;
  },
  function (e) {
    return e.getUTCMinutes();
  }
);
const d1 = f1;
f1.range;
var p1 = Et(
  function (e) {
    e.setUTCMinutes(0, 0, 0);
  },
  function (e, t) {
    e.setTime(+e + t * Vr);
  },
  function (e, t) {
    return (t - e) / Vr;
  },
  function (e) {
    return e.getUTCHours();
  }
);
const h1 = p1;
p1.range;
var v1 = Et(
  function (e) {
    e.setUTCHours(0, 0, 0, 0);
  },
  function (e, t) {
    e.setUTCDate(e.getUTCDate() + t);
  },
  function (e, t) {
    return (t - e) / Bn;
  },
  function (e) {
    return e.getUTCDate() - 1;
  }
);
const Nl = v1;
v1.range;
function Gn(e) {
  return Et(
    function (t) {
      t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)),
        t.setUTCHours(0, 0, 0, 0);
    },
    function (t, r) {
      t.setUTCDate(t.getUTCDate() + r * 7);
    },
    function (t, r) {
      return (r - t) / sp;
    }
  );
}
var Ll = Gn(0),
  $s = Gn(1),
  _U = Gn(2),
  OU = Gn(3),
  Aa = Gn(4),
  SU = Gn(5),
  EU = Gn(6);
Ll.range;
$s.range;
_U.range;
OU.range;
Aa.range;
SU.range;
EU.range;
var m1 = Et(
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
const g1 = m1;
m1.range;
var cp = Et(
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
cp.every = function (e) {
  return !isFinite((e = Math.floor(e))) || !(e > 0)
    ? null
    : Et(
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
const zn = cp;
cp.range;
function y1(e, t, r, n, a, i) {
  const o = [
    [na, 1, Hr],
    [na, 5, 5 * Hr],
    [na, 15, 15 * Hr],
    [na, 30, 30 * Hr],
    [i, 1, lr],
    [i, 5, 5 * lr],
    [i, 15, 15 * lr],
    [i, 30, 30 * lr],
    [a, 1, Vr],
    [a, 3, 3 * Vr],
    [a, 6, 6 * Vr],
    [a, 12, 12 * Vr],
    [n, 1, Bn],
    [n, 2, 2 * Bn],
    [r, 1, sp],
    [t, 1, ag],
    [t, 3, 3 * ag],
    [e, 1, Dc],
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
      h = Kd(([, , m]) => m).right(o, d);
    if (h === o.length) return e.every(nf(c / Dc, u / Dc, f));
    if (h === 0) return gU.every(Math.max(nf(c, u, f), 1));
    const [v, p] = o[d / o[h - 1][2] < o[h][2] / d ? h - 1 : h];
    return v.every(p);
  }
  return [s, l];
}
const [$U, AU] = y1(zn, g1, Ll, Nl, h1, d1),
  [CU, PU] = y1(Fn, u1, jl, Dl, s1, i1);
function jc(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Nc(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function ei(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function kU(e) {
  var t = e.dateTime,
    r = e.date,
    n = e.time,
    a = e.periods,
    i = e.days,
    o = e.shortDays,
    s = e.months,
    l = e.shortMonths,
    c = ti(a),
    u = ri(a),
    f = ti(i),
    d = ri(i),
    h = ti(o),
    v = ri(o),
    p = ti(s),
    m = ri(s),
    y = ti(l),
    _ = ri(l),
    x = {
      a: N,
      A: F,
      b: M,
      B: Y,
      c: null,
      d: ug,
      e: ug,
      f: QU,
      g: cH,
      G: fH,
      H: XU,
      I: JU,
      j: ZU,
      L: b1,
      m: eH,
      M: tH,
      p: Q,
      q: ne,
      Q: pg,
      s: hg,
      S: rH,
      u: nH,
      U: aH,
      V: iH,
      w: oH,
      W: sH,
      x: null,
      X: null,
      y: lH,
      Y: uH,
      Z: dH,
      '%': dg,
    },
    b = {
      a: ve,
      A: Se,
      b: le,
      B: Ee,
      c: null,
      d: fg,
      e: fg,
      f: mH,
      g: $H,
      G: CH,
      H: pH,
      I: hH,
      j: vH,
      L: w1,
      m: gH,
      M: yH,
      p: it,
      q: oe,
      Q: pg,
      s: hg,
      S: bH,
      u: xH,
      U: wH,
      V: _H,
      w: OH,
      W: SH,
      x: null,
      X: null,
      y: EH,
      Y: AH,
      Z: PH,
      '%': dg,
    },
    w = {
      a: P,
      A: C,
      b: T,
      B: k,
      c: D,
      d: lg,
      e: lg,
      f: GU,
      g: sg,
      G: og,
      H: cg,
      I: cg,
      j: WU,
      L: VU,
      m: zU,
      M: UU,
      p: A,
      q: FU,
      Q: YU,
      s: KU,
      S: HU,
      u: DU,
      U: jU,
      V: NU,
      w: RU,
      W: LU,
      x: j,
      X: R,
      y: sg,
      Y: og,
      Z: BU,
      '%': qU,
    };
  (x.x = O(r, x)),
    (x.X = O(n, x)),
    (x.c = O(t, x)),
    (b.x = O(r, b)),
    (b.X = O(n, b)),
    (b.c = O(t, b));
  function O(U, ee) {
    return function (ie) {
      var L = [],
        J = -1,
        de = 0,
        ce = U.length,
        Pe,
        ot,
        B;
      for (ie instanceof Date || (ie = new Date(+ie)); ++J < ce; )
        U.charCodeAt(J) === 37 &&
          (L.push(U.slice(de, J)),
          (ot = ig[(Pe = U.charAt(++J))]) != null
            ? (Pe = U.charAt(++J))
            : (ot = Pe === 'e' ? ' ' : '0'),
          (B = ee[Pe]) && (Pe = B(ie, ot)),
          L.push(Pe),
          (de = J + 1));
      return L.push(U.slice(de, J)), L.join('');
    };
  }
  function E(U, ee) {
    return function (ie) {
      var L = ei(1900, void 0, 1),
        J = $(L, U, (ie += ''), 0),
        de,
        ce;
      if (J != ie.length) return null;
      if ('Q' in L) return new Date(L.Q);
      if ('s' in L) return new Date(L.s * 1e3 + ('L' in L ? L.L : 0));
      if (
        (ee && !('Z' in L) && (L.Z = 0),
        'p' in L && (L.H = (L.H % 12) + L.p * 12),
        L.m === void 0 && (L.m = 'q' in L ? L.q : 0),
        'V' in L)
      ) {
        if (L.V < 1 || L.V > 53) return null;
        'w' in L || (L.w = 1),
          'Z' in L
            ? ((de = Nc(ei(L.y, 0, 1))),
              (ce = de.getUTCDay()),
              (de = ce > 4 || ce === 0 ? $s.ceil(de) : $s(de)),
              (de = Nl.offset(de, (L.V - 1) * 7)),
              (L.y = de.getUTCFullYear()),
              (L.m = de.getUTCMonth()),
              (L.d = de.getUTCDate() + ((L.w + 6) % 7)))
            : ((de = jc(ei(L.y, 0, 1))),
              (ce = de.getDay()),
              (de = ce > 4 || ce === 0 ? Es.ceil(de) : Es(de)),
              (de = Dl.offset(de, (L.V - 1) * 7)),
              (L.y = de.getFullYear()),
              (L.m = de.getMonth()),
              (L.d = de.getDate() + ((L.w + 6) % 7)));
      } else
        ('W' in L || 'U' in L) &&
          ('w' in L || (L.w = 'u' in L ? L.u % 7 : 'W' in L ? 1 : 0),
          (ce =
            'Z' in L
              ? Nc(ei(L.y, 0, 1)).getUTCDay()
              : jc(ei(L.y, 0, 1)).getDay()),
          (L.m = 0),
          (L.d =
            'W' in L
              ? ((L.w + 6) % 7) + L.W * 7 - ((ce + 5) % 7)
              : L.w + L.U * 7 - ((ce + 6) % 7)));
      return 'Z' in L
        ? ((L.H += (L.Z / 100) | 0), (L.M += L.Z % 100), Nc(L))
        : jc(L);
    };
  }
  function $(U, ee, ie, L) {
    for (var J = 0, de = ee.length, ce = ie.length, Pe, ot; J < de; ) {
      if (L >= ce) return -1;
      if (((Pe = ee.charCodeAt(J++)), Pe === 37)) {
        if (
          ((Pe = ee.charAt(J++)),
          (ot = w[Pe in ig ? ee.charAt(J++) : Pe]),
          !ot || (L = ot(U, ie, L)) < 0)
        )
          return -1;
      } else if (Pe != ie.charCodeAt(L++)) return -1;
    }
    return L;
  }
  function A(U, ee, ie) {
    var L = c.exec(ee.slice(ie));
    return L ? ((U.p = u.get(L[0].toLowerCase())), ie + L[0].length) : -1;
  }
  function P(U, ee, ie) {
    var L = h.exec(ee.slice(ie));
    return L ? ((U.w = v.get(L[0].toLowerCase())), ie + L[0].length) : -1;
  }
  function C(U, ee, ie) {
    var L = f.exec(ee.slice(ie));
    return L ? ((U.w = d.get(L[0].toLowerCase())), ie + L[0].length) : -1;
  }
  function T(U, ee, ie) {
    var L = y.exec(ee.slice(ie));
    return L ? ((U.m = _.get(L[0].toLowerCase())), ie + L[0].length) : -1;
  }
  function k(U, ee, ie) {
    var L = p.exec(ee.slice(ie));
    return L ? ((U.m = m.get(L[0].toLowerCase())), ie + L[0].length) : -1;
  }
  function D(U, ee, ie) {
    return $(U, t, ee, ie);
  }
  function j(U, ee, ie) {
    return $(U, r, ee, ie);
  }
  function R(U, ee, ie) {
    return $(U, n, ee, ie);
  }
  function N(U) {
    return o[U.getDay()];
  }
  function F(U) {
    return i[U.getDay()];
  }
  function M(U) {
    return l[U.getMonth()];
  }
  function Y(U) {
    return s[U.getMonth()];
  }
  function Q(U) {
    return a[+(U.getHours() >= 12)];
  }
  function ne(U) {
    return 1 + ~~(U.getMonth() / 3);
  }
  function ve(U) {
    return o[U.getUTCDay()];
  }
  function Se(U) {
    return i[U.getUTCDay()];
  }
  function le(U) {
    return l[U.getUTCMonth()];
  }
  function Ee(U) {
    return s[U.getUTCMonth()];
  }
  function it(U) {
    return a[+(U.getUTCHours() >= 12)];
  }
  function oe(U) {
    return 1 + ~~(U.getUTCMonth() / 3);
  }
  return {
    format: function (U) {
      var ee = O((U += ''), x);
      return (
        (ee.toString = function () {
          return U;
        }),
        ee
      );
    },
    parse: function (U) {
      var ee = E((U += ''), !1);
      return (
        (ee.toString = function () {
          return U;
        }),
        ee
      );
    },
    utcFormat: function (U) {
      var ee = O((U += ''), b);
      return (
        (ee.toString = function () {
          return U;
        }),
        ee
      );
    },
    utcParse: function (U) {
      var ee = E((U += ''), !0);
      return (
        (ee.toString = function () {
          return U;
        }),
        ee
      );
    },
  };
}
var ig = { '-': '', _: ' ', 0: '0' },
  $t = /^\s*\d+/,
  TU = /^%/,
  MU = /[\\^$*+?|[\]().{}]/g;
function Ie(e, t, r) {
  var n = e < 0 ? '-' : '',
    a = (n ? -e : e) + '',
    i = a.length;
  return n + (i < r ? new Array(r - i + 1).join(t) + a : a);
}
function IU(e) {
  return e.replace(MU, '\\$&');
}
function ti(e) {
  return new RegExp('^(?:' + e.map(IU).join('|') + ')', 'i');
}
function ri(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function RU(e, t, r) {
  var n = $t.exec(t.slice(r, r + 1));
  return n ? ((e.w = +n[0]), r + n[0].length) : -1;
}
function DU(e, t, r) {
  var n = $t.exec(t.slice(r, r + 1));
  return n ? ((e.u = +n[0]), r + n[0].length) : -1;
}
function jU(e, t, r) {
  var n = $t.exec(t.slice(r, r + 2));
  return n ? ((e.U = +n[0]), r + n[0].length) : -1;
}
function NU(e, t, r) {
  var n = $t.exec(t.slice(r, r + 2));
  return n ? ((e.V = +n[0]), r + n[0].length) : -1;
}
function LU(e, t, r) {
  var n = $t.exec(t.slice(r, r + 2));
  return n ? ((e.W = +n[0]), r + n[0].length) : -1;
}
function og(e, t, r) {
  var n = $t.exec(t.slice(r, r + 4));
  return n ? ((e.y = +n[0]), r + n[0].length) : -1;
}
function sg(e, t, r) {
  var n = $t.exec(t.slice(r, r + 2));
  return n ? ((e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3)), r + n[0].length) : -1;
}
function BU(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n
    ? ((e.Z = n[1] ? 0 : -(n[2] + (n[3] || '00'))), r + n[0].length)
    : -1;
}
function FU(e, t, r) {
  var n = $t.exec(t.slice(r, r + 1));
  return n ? ((e.q = n[0] * 3 - 3), r + n[0].length) : -1;
}
function zU(e, t, r) {
  var n = $t.exec(t.slice(r, r + 2));
  return n ? ((e.m = n[0] - 1), r + n[0].length) : -1;
}
function lg(e, t, r) {
  var n = $t.exec(t.slice(r, r + 2));
  return n ? ((e.d = +n[0]), r + n[0].length) : -1;
}
function WU(e, t, r) {
  var n = $t.exec(t.slice(r, r + 3));
  return n ? ((e.m = 0), (e.d = +n[0]), r + n[0].length) : -1;
}
function cg(e, t, r) {
  var n = $t.exec(t.slice(r, r + 2));
  return n ? ((e.H = +n[0]), r + n[0].length) : -1;
}
function UU(e, t, r) {
  var n = $t.exec(t.slice(r, r + 2));
  return n ? ((e.M = +n[0]), r + n[0].length) : -1;
}
function HU(e, t, r) {
  var n = $t.exec(t.slice(r, r + 2));
  return n ? ((e.S = +n[0]), r + n[0].length) : -1;
}
function VU(e, t, r) {
  var n = $t.exec(t.slice(r, r + 3));
  return n ? ((e.L = +n[0]), r + n[0].length) : -1;
}
function GU(e, t, r) {
  var n = $t.exec(t.slice(r, r + 6));
  return n ? ((e.L = Math.floor(n[0] / 1e3)), r + n[0].length) : -1;
}
function qU(e, t, r) {
  var n = TU.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function YU(e, t, r) {
  var n = $t.exec(t.slice(r));
  return n ? ((e.Q = +n[0]), r + n[0].length) : -1;
}
function KU(e, t, r) {
  var n = $t.exec(t.slice(r));
  return n ? ((e.s = +n[0]), r + n[0].length) : -1;
}
function ug(e, t) {
  return Ie(e.getDate(), t, 2);
}
function XU(e, t) {
  return Ie(e.getHours(), t, 2);
}
function JU(e, t) {
  return Ie(e.getHours() % 12 || 12, t, 2);
}
function ZU(e, t) {
  return Ie(1 + Dl.count(Fn(e), e), t, 3);
}
function b1(e, t) {
  return Ie(e.getMilliseconds(), t, 3);
}
function QU(e, t) {
  return b1(e, t) + '000';
}
function eH(e, t) {
  return Ie(e.getMonth() + 1, t, 2);
}
function tH(e, t) {
  return Ie(e.getMinutes(), t, 2);
}
function rH(e, t) {
  return Ie(e.getSeconds(), t, 2);
}
function nH(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function aH(e, t) {
  return Ie(jl.count(Fn(e) - 1, e), t, 2);
}
function x1(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? $a(e) : $a.ceil(e);
}
function iH(e, t) {
  return (e = x1(e)), Ie($a.count(Fn(e), e) + (Fn(e).getDay() === 4), t, 2);
}
function oH(e) {
  return e.getDay();
}
function sH(e, t) {
  return Ie(Es.count(Fn(e) - 1, e), t, 2);
}
function lH(e, t) {
  return Ie(e.getFullYear() % 100, t, 2);
}
function cH(e, t) {
  return (e = x1(e)), Ie(e.getFullYear() % 100, t, 2);
}
function uH(e, t) {
  return Ie(e.getFullYear() % 1e4, t, 4);
}
function fH(e, t) {
  var r = e.getDay();
  return (
    (e = r >= 4 || r === 0 ? $a(e) : $a.ceil(e)),
    Ie(e.getFullYear() % 1e4, t, 4)
  );
}
function dH(e) {
  var t = e.getTimezoneOffset();
  return (
    (t > 0 ? '-' : ((t *= -1), '+')) +
    Ie((t / 60) | 0, '0', 2) +
    Ie(t % 60, '0', 2)
  );
}
function fg(e, t) {
  return Ie(e.getUTCDate(), t, 2);
}
function pH(e, t) {
  return Ie(e.getUTCHours(), t, 2);
}
function hH(e, t) {
  return Ie(e.getUTCHours() % 12 || 12, t, 2);
}
function vH(e, t) {
  return Ie(1 + Nl.count(zn(e), e), t, 3);
}
function w1(e, t) {
  return Ie(e.getUTCMilliseconds(), t, 3);
}
function mH(e, t) {
  return w1(e, t) + '000';
}
function gH(e, t) {
  return Ie(e.getUTCMonth() + 1, t, 2);
}
function yH(e, t) {
  return Ie(e.getUTCMinutes(), t, 2);
}
function bH(e, t) {
  return Ie(e.getUTCSeconds(), t, 2);
}
function xH(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function wH(e, t) {
  return Ie(Ll.count(zn(e) - 1, e), t, 2);
}
function _1(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Aa(e) : Aa.ceil(e);
}
function _H(e, t) {
  return (e = _1(e)), Ie(Aa.count(zn(e), e) + (zn(e).getUTCDay() === 4), t, 2);
}
function OH(e) {
  return e.getUTCDay();
}
function SH(e, t) {
  return Ie($s.count(zn(e) - 1, e), t, 2);
}
function EH(e, t) {
  return Ie(e.getUTCFullYear() % 100, t, 2);
}
function $H(e, t) {
  return (e = _1(e)), Ie(e.getUTCFullYear() % 100, t, 2);
}
function AH(e, t) {
  return Ie(e.getUTCFullYear() % 1e4, t, 4);
}
function CH(e, t) {
  var r = e.getUTCDay();
  return (
    (e = r >= 4 || r === 0 ? Aa(e) : Aa.ceil(e)),
    Ie(e.getUTCFullYear() % 1e4, t, 4)
  );
}
function PH() {
  return '+0000';
}
function dg() {
  return '%';
}
function pg(e) {
  return +e;
}
function hg(e) {
  return Math.floor(+e / 1e3);
}
var Zn, O1, S1;
kH({
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
function kH(e) {
  return (
    (Zn = kU(e)),
    (O1 = Zn.format),
    Zn.parse,
    (S1 = Zn.utcFormat),
    Zn.utcParse,
    Zn
  );
}
function TH(e) {
  return new Date(e);
}
function MH(e) {
  return e instanceof Date ? +e : +new Date(+e);
}
function up(e, t, r, n, a, i, o, s, l, c) {
  var u = ep(),
    f = u.invert,
    d = u.domain,
    h = c('.%L'),
    v = c(':%S'),
    p = c('%I:%M'),
    m = c('%I %p'),
    y = c('%a %d'),
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
          ? y
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
      return arguments.length ? d(Array.from(O, MH)) : d().map(TH);
    }),
    (u.ticks = function (O) {
      var E = d();
      return e(E[0], E[E.length - 1], O == null ? 10 : O);
    }),
    (u.tickFormat = function (O, E) {
      return E == null ? w : c(E);
    }),
    (u.nice = function (O) {
      var E = d();
      return (
        (!O || typeof O.range != 'function') &&
          (O = t(E[0], E[E.length - 1], O == null ? 10 : O)),
        O ? d(Xx(E, O)) : u
      );
    }),
    (u.copy = function () {
      return Ki(u, up(e, t, r, n, a, i, o, s, l, c));
    }),
    u
  );
}
function IH() {
  return gr.apply(
    up(CU, PU, Fn, u1, jl, Dl, s1, i1, na, O1).domain([
      new Date(2e3, 0, 1),
      new Date(2e3, 0, 2),
    ]),
    arguments
  );
}
function RH() {
  return gr.apply(
    up($U, AU, zn, g1, Ll, Nl, h1, d1, na, S1).domain([
      Date.UTC(2e3, 0, 1),
      Date.UTC(2e3, 0, 2),
    ]),
    arguments
  );
}
function Bl() {
  var e = 0,
    t = 1,
    r,
    n,
    a,
    i,
    o = Nt,
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
    (c.range = u(za)),
    (c.rangeRound = u(Qd)),
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
function xn(e, t) {
  return t
    .domain(e.domain())
    .interpolator(e.interpolator())
    .clamp(e.clamp())
    .unknown(e.unknown());
}
function E1() {
  var e = bn(Bl()(Nt));
  return (
    (e.copy = function () {
      return xn(e, E1());
    }),
    Qr.apply(e, arguments)
  );
}
function $1() {
  var e = np(Bl()).domain([1, 10]);
  return (
    (e.copy = function () {
      return xn(e, $1()).base(e.base());
    }),
    Qr.apply(e, arguments)
  );
}
function A1() {
  var e = ap(Bl());
  return (
    (e.copy = function () {
      return xn(e, A1()).constant(e.constant());
    }),
    Qr.apply(e, arguments)
  );
}
function fp() {
  var e = ip(Bl());
  return (
    (e.copy = function () {
      return xn(e, fp()).exponent(e.exponent());
    }),
    Qr.apply(e, arguments)
  );
}
function DH() {
  return fp.apply(null, arguments).exponent(0.5);
}
function C1() {
  var e = [],
    t = Nt;
  function r(n) {
    if (n != null && !isNaN((n = +n)))
      return t((qi(e, n, 1) - 1) / (e.length - 1));
  }
  return (
    (r.domain = function (n) {
      if (!arguments.length) return e.slice();
      e = [];
      for (let a of n) a != null && !isNaN((a = +a)) && e.push(a);
      return e.sort(Gi), r;
    }),
    (r.interpolator = function (n) {
      return arguments.length ? ((t = n), r) : t;
    }),
    (r.range = function () {
      return e.map((n, a) => t(a / (e.length - 1)));
    }),
    (r.quantiles = function (n) {
      return Array.from({ length: n + 1 }, (a, i) => _9(e, i / n));
    }),
    (r.copy = function () {
      return C1(t).domain(e);
    }),
    Qr.apply(r, arguments)
  );
}
function Fl() {
  var e = 0,
    t = 0.5,
    r = 1,
    n = 1,
    a,
    i,
    o,
    s,
    l,
    c = Nt,
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
      var y, _, x;
      return arguments.length
        ? (([y, _, x] = m), (c = G9(p, [y, _, x])), h)
        : [c(0), c(0.5), c(1)];
    };
  }
  return (
    (h.range = v(za)),
    (h.rangeRound = v(Qd)),
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
function P1() {
  var e = bn(Fl()(Nt));
  return (
    (e.copy = function () {
      return xn(e, P1());
    }),
    Qr.apply(e, arguments)
  );
}
function k1() {
  var e = np(Fl()).domain([0.1, 1, 10]);
  return (
    (e.copy = function () {
      return xn(e, k1()).base(e.base());
    }),
    Qr.apply(e, arguments)
  );
}
function T1() {
  var e = ap(Fl());
  return (
    (e.copy = function () {
      return xn(e, T1()).constant(e.constant());
    }),
    Qr.apply(e, arguments)
  );
}
function dp() {
  var e = ip(Fl());
  return (
    (e.copy = function () {
      return xn(e, dp()).exponent(e.exponent());
    }),
    Qr.apply(e, arguments)
  );
}
function jH() {
  return dp.apply(null, arguments).exponent(0.5);
}
const vg = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      scaleBand: ki,
      scalePoint: vi,
      scaleIdentity: Kx,
      scaleLinear: Os,
      scaleLog: Jx,
      scaleSymlog: Zx,
      scaleOrdinal: Xd,
      scaleImplicit: af,
      scalePow: op,
      scaleSqrt: vU,
      scaleRadial: Qx,
      scaleQuantile: e1,
      scaleQuantize: t1,
      scaleThreshold: r1,
      scaleTime: IH,
      scaleUtc: RH,
      scaleSequential: E1,
      scaleSequentialLog: $1,
      scaleSequentialPow: fp,
      scaleSequentialSqrt: DH,
      scaleSequentialSymlog: A1,
      scaleSequentialQuantile: C1,
      scaleDiverging: P1,
      scaleDivergingLog: k1,
      scaleDivergingPow: dp,
      scaleDivergingSqrt: jH,
      scaleDivergingSymlog: T1,
      tickFormat: Yx,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
);
function mg(e) {
  return FH(e) || BH(e) || LH(e) || NH();
}
function NH() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function LH(e, t) {
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
function BH(e) {
  if (typeof Symbol < 'u' && Symbol.iterator in Object(e)) return Array.from(e);
}
function FH(e) {
  if (Array.isArray(e)) return cf(e);
}
function cf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function gg(e, t) {
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
function jt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? gg(Object(r), !0).forEach(function (n) {
          pa(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : gg(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function pa(e, t, r) {
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
function Lr(e, t, r) {
  return ye(e) || ye(t) ? r : mt(t) ? er(e, t, r) : pe(t) ? t(e) : r;
}
function As(e, t, r, n) {
  var a = U8(e, function (s) {
    return Lr(s, t);
  });
  if (r === 'number') {
    var i = a.filter(function (s) {
      return K(s) || parseFloat(s);
    });
    return i.length ? [Tl(i), kl(i)] : [1 / 0, -1 / 0];
  }
  var o = n
    ? a.filter(function (s) {
        return !ye(s);
      })
    : a;
  return o.map(function (s) {
    return mt(s) || s instanceof Date ? s : '';
  });
}
var zH = function (t) {
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
          if (sr(f - u) !== sr(d - f)) {
            var v = [];
            if (sr(d - f) === sr(l[1] - l[0])) {
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
            var y = [Math.min(f, (h + f) / 2), Math.max(f, (h + f) / 2)];
            if ((t > y[0] && t <= y[1]) || (t >= v[0] && t <= v[1])) {
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
  pp = function (t) {
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
  M1 = function (t) {
    var r = t.children,
      n = t.formattedGraphicalItems,
      a = t.legendWidth,
      i = t.legendContent,
      o = Ur(r, $i.displayName);
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
              color: pp(c),
              value: d || f,
              payload: c.props,
            };
          })),
      jt(
        jt(jt({}, o.props), $i.getWithHeight(o, a)),
        {},
        { payload: s, item: o }
      )
    );
  },
  WH = function (t) {
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
            return un(x.type).indexOf('Bar') >= 0;
          });
        if (m && m.length) {
          var y = m[0].props.barSize,
            _ = m[0].props[p];
          i[_] || (i[_] = []),
            i[_].push({
              item: m[0],
              stackList: m.slice(1),
              barSize: ye(y) ? r : y,
            });
        }
      }
    return i;
  },
  UH = function (t) {
    var r = t.barGap,
      n = t.barCategoryGap,
      a = t.bandSize,
      i = t.sizeList,
      o = i === void 0 ? [] : i,
      s = t.maxBarSize,
      l = o.length;
    if (l < 1) return null;
    var c = _a(r, a, 0, !0),
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
        var w = [].concat(mg(x), [
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
      var m = _a(n, a, 0, !0);
      a - 2 * m - (l - 1) * c <= 0 && (c = 0);
      var y = (a - 2 * m - (l - 1) * c) / l;
      y > 1 && (y >>= 0);
      var _ = s === +s ? Math.min(y, s) : y;
      u = o.reduce(function (x, b, w) {
        var O = [].concat(mg(x), [
          {
            item: b.item,
            position: { offset: m + (y + c) * w + (y - _) / 2, size: _ },
          },
        ]);
        return (
          b.stackList &&
            b.stackList.length &&
            b.stackList.forEach(function (E) {
              O.push({ item: E, position: O[O.length - 1].position });
            }),
          O
        );
      }, []);
    }
    return u;
  },
  HH = function (t, r, n, a) {
    var i = n.children,
      o = n.width,
      s = n.margin,
      l = o - (s.left || 0) - (s.right || 0),
      c = M1({ children: i, legendWidth: l }),
      u = t;
    if (c) {
      var f = a || {},
        d = c.align,
        h = c.verticalAlign,
        v = c.layout;
      (v === 'vertical' || (v === 'horizontal' && h === 'center')) &&
        K(t[d]) &&
        (u = jt(jt({}, t), {}, pa({}, d, u[d] + (f.width || 0)))),
        (v === 'horizontal' || (v === 'vertical' && d === 'center')) &&
          K(t[h]) &&
          (u = jt(jt({}, t), {}, pa({}, h, u[h] + (f.height || 0))));
    }
    return u;
  },
  VH = function (t, r, n) {
    return ye(r)
      ? !0
      : t === 'horizontal'
      ? r === 'yAxis'
      : t === 'vertical' || n === 'x'
      ? r === 'xAxis'
      : n === 'y'
      ? r === 'yAxis'
      : !0;
  },
  I1 = function (t, r, n, a, i) {
    var o = r.props.children,
      s = _r(o, 'ErrorBar').filter(function (c) {
        return VH(a, i, c.props.direction);
      });
    if (s && s.length) {
      var l = s.map(function (c) {
        return c.props.dataKey;
      });
      return t.reduce(
        function (c, u) {
          var f = Lr(u, n, 0),
            d = Me(f) ? [Tl(f), kl(f)] : [f, f],
            h = l.reduce(
              function (v, p) {
                var m = Lr(u, p, 0),
                  y = d[0] - Math.abs(Me(m) ? m[0] : m),
                  _ = d[1] + Math.abs(Me(m) ? m[1] : m);
                return [Math.min(y, v[0]), Math.max(_, v[1])];
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
  GH = function (t, r, n, a, i) {
    var o = r
      .map(function (s) {
        return I1(t, s, n, i, a);
      })
      .filter(function (s) {
        return !ye(s);
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
  R1 = function (t, r, n, a, i) {
    var o = r.map(function (l) {
      var c = l.props.dataKey;
      return (n === 'number' && c && I1(t, l, c, a)) || As(t, c, n, i);
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
  D1 = function (t, r) {
    return (
      (t === 'horizontal' && r === 'xAxis') ||
      (t === 'vertical' && r === 'yAxis') ||
      (t === 'centric' && r === 'angleAxis') ||
      (t === 'radial' && r === 'radiusAxis')
    );
  },
  yg = function (t, r, n) {
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
  nn = function (t, r, n) {
    if (!t) return null;
    var a = t.scale,
      i = t.duplicateDomain,
      o = t.type,
      s = t.range,
      l = t.realScaleType === 'scaleBand' ? a.bandwidth() / 2 : 2,
      c = (r || n) && o === 'category' && a.bandwidth ? a.bandwidth() / l : 0;
    return (
      (c = t.axisType === 'angleAxis' ? sr(s[0] - s[1]) * 2 * c : c),
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
  vo = function (t, r, n) {
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
  qH = function (t, r, n) {
    var a = t.scale,
      i = t.type,
      o = t.layout,
      s = t.axisType;
    if (a === 'auto')
      return o === 'radial' && s === 'radiusAxis'
        ? { scale: ki(), realScaleType: 'band' }
        : o === 'radial' && s === 'angleAxis'
        ? { scale: Os(), realScaleType: 'linear' }
        : i === 'category' &&
          r &&
          (r.indexOf('LineChart') >= 0 ||
            r.indexOf('AreaChart') >= 0 ||
            (r.indexOf('ComposedChart') >= 0 && !n))
        ? { scale: vi(), realScaleType: 'point' }
        : i === 'category'
        ? { scale: ki(), realScaleType: 'band' }
        : { scale: Os(), realScaleType: 'linear' };
    if (Hi(a)) {
      var l = 'scale'.concat(wl(a));
      return { scale: (vg[l] || vi)(), realScaleType: vg[l] ? l : 'point' };
    }
    return pe(a) ? { scale: a } : { scale: vi(), realScaleType: 'point' };
  },
  bg = 1e-4,
  YH = function (t) {
    var r = t.domain();
    if (!(!r || r.length <= 2)) {
      var n = r.length,
        a = t.range(),
        i = Math.min(a[0], a[1]) - bg,
        o = Math.max(a[0], a[1]) + bg,
        s = t(r[0]),
        l = t(r[n - 1]);
      (s < i || s > o || l < i || l > o) && t.domain([r[0], r[n - 1]]);
    }
  },
  KH = function (t, r) {
    if (!t) return null;
    for (var n = 0, a = t.length; n < a; n++)
      if (t[n].item === r) return t[n].position;
    return null;
  },
  XH = function (t, r) {
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
  JH = function (t) {
    var r = t.length;
    if (!(r <= 0))
      for (var n = 0, a = t[0].length; n < a; ++n)
        for (var i = 0, o = 0, s = 0; s < r; ++s) {
          var l = $l(t[s][n][1]) ? t[s][n][0] : t[s][n][1];
          l >= 0
            ? ((t[s][n][0] = i), (t[s][n][1] = i + l), (i = t[s][n][1]))
            : ((t[s][n][0] = o), (t[s][n][1] = o + l), (o = t[s][n][1]));
        }
  },
  ZH = function (t) {
    var r = t.length;
    if (!(r <= 0))
      for (var n = 0, a = t[0].length; n < a; ++n)
        for (var i = 0, o = 0; o < r; ++o) {
          var s = $l(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
          s >= 0
            ? ((t[o][n][0] = i), (t[o][n][1] = i + s), (i = t[o][n][1]))
            : ((t[o][n][0] = 0), (t[o][n][1] = 0));
        }
  },
  QH = {
    sign: JH,
    expand: e5,
    none: wa,
    silhouette: t5,
    wiggle: r5,
    positive: ZH,
  },
  eV = function (t, r, n) {
    var a = r.map(function (o) {
        return o.props.dataKey;
      }),
      i = Q3()
        .keys(a)
        .value(function (o, s) {
          return +Lr(o, s, 0);
        })
        .order(yu)
        .offset(QH[n]);
    return i(t);
  },
  tV = function (t, r, n, a, i, o) {
    if (!t) return null;
    var s = o ? r.reverse() : r,
      l = s.reduce(function (c, u) {
        var f = u.props,
          d = f.stackId,
          h = f.hide;
        if (h) return c;
        var v = u.props[n],
          p = c[v] || { hasStack: !1, stackGroups: {} };
        if (mt(d)) {
          var m = p.stackGroups[d] || {
            numericAxisId: n,
            cateAxisId: a,
            items: [],
          };
          m.items.push(u), (p.hasStack = !0), (p.stackGroups[d] = m);
        } else p.stackGroups[Al('_stackId_')] = { numericAxisId: n, cateAxisId: a, items: [u] };
        return jt(jt({}, c), {}, pa({}, v, p));
      }, {});
    return Object.keys(l).reduce(function (c, u) {
      var f = l[u];
      return (
        f.hasStack &&
          (f.stackGroups = Object.keys(f.stackGroups).reduce(function (d, h) {
            var v = f.stackGroups[h];
            return jt(
              jt({}, d),
              {},
              pa({}, h, {
                numericAxisId: n,
                cateAxisId: a,
                items: v.items,
                stackedData: eV(t, v.items, i),
              })
            );
          }, {})),
        jt(jt({}, c), {}, pa({}, u, f))
      );
    }, {});
  },
  rV = function (t, r) {
    return r === 'number' ? [Tl(t), kl(t)] : t;
  },
  nV = function (t, r) {
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
      var u = m9(c, i, s);
      return t.domain(rV(u, a)), { niceTicks: u };
    }
    if (i && a === 'number') {
      var f = t.domain(),
        d = g9(f, i, s);
      return { niceTicks: d };
    }
    return null;
  },
  xg = function (t) {
    var r = t.axis,
      n = t.ticks,
      a = t.offset,
      i = t.bandSize,
      o = t.entry,
      s = t.index;
    if (r.type === 'category') return n[s] ? n[s].coordinate + a : null;
    var l = Lr(o, r.dataKey, r.domain[s]);
    return ye(l) ? null : r.scale(l) - i / 2 + a;
  },
  aV = function (t) {
    var r = t.numericAxis,
      n = r.scale.domain();
    if (r.type === 'number') {
      var a = Math.min(n[0], n[1]),
        i = Math.max(n[0], n[1]);
      return a <= 0 && i >= 0 ? 0 : i < 0 ? i : a;
    }
    return n[0];
  },
  iV = function (t, r) {
    var n = t.props.stackId;
    if (mt(n)) {
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
  oV = function (t) {
    return t.reduce(
      function (r, n) {
        return [Tl(n.concat([r[0]]).filter(K)), kl(n.concat([r[1]]).filter(K))];
      },
      [1 / 0, -1 / 0]
    );
  },
  j1 = function (t, r, n) {
    return Object.keys(t)
      .reduce(
        function (a, i) {
          var o = t[i],
            s = o.stackedData,
            l = s.reduce(
              function (c, u) {
                var f = oV(u.slice(r, n + 1));
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
  wg = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  _g = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
  N1 = function (t, r, n) {
    if (pe(t)) return t(r, n);
    if (!Me(t)) return r;
    var a = [];
    if (K(t[0])) a[0] = n ? t[0] : Math.min(t[0], r[0]);
    else if (wg.test(t[0])) {
      var i = +wg.exec(t[0])[1];
      a[0] = r[0] - i;
    } else pe(t[0]) ? (a[0] = t[0](r[0])) : (a[0] = r[0]);
    if (K(t[1])) a[1] = n ? t[1] : Math.max(t[1], r[1]);
    else if (_g.test(t[1])) {
      var o = +_g.exec(t[1])[1];
      a[1] = r[1] + o;
    } else pe(t[1]) ? (a[1] = t[1](r[1])) : (a[1] = r[1]);
    return a;
  },
  Cs = function (t, r, n) {
    if (t && t.scale && t.scale.bandwidth) {
      var a = t.scale.bandwidth();
      if (!n || a > 0) return a;
    }
    if (t && r && r.length >= 2) {
      for (
        var i = Ud(r, function (f) {
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
  Og = function (t, r, n) {
    return !t || !t.length || Ex(t, er(n, 'type.defaultProps.domain')) ? r : t;
  },
  L1 = function (t, r) {
    var n = t.props,
      a = n.dataKey,
      i = n.name,
      o = n.unit,
      s = n.formatter,
      l = n.tooltipType,
      c = n.chartType;
    return jt(
      jt({}, ze(t)),
      {},
      {
        dataKey: a,
        unit: o,
        formatter: s,
        name: i || a,
        color: pp(t),
        value: Lr(r, a),
        type: l,
        payload: r,
        chartType: c,
      }
    );
  };
function Sg(e, t) {
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
function Eg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Sg(Object(r), !0).forEach(function (n) {
          sV(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Sg(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function sV(e, t, r) {
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
var Ps = Math.PI / 180,
  lV = function (t) {
    return (t * 180) / Math.PI;
  },
  kt = function (t, r, n, a) {
    return { x: t + Math.cos(-Ps * a) * n, y: r + Math.sin(-Ps * a) * n };
  },
  cV = function (t, r) {
    var n = t.x,
      a = t.y,
      i = r.x,
      o = r.y;
    return Math.sqrt(Math.pow(n - i, 2) + Math.pow(a - o, 2));
  },
  uV = function (t, r) {
    var n = t.x,
      a = t.y,
      i = r.cx,
      o = r.cy,
      s = cV({ x: n, y: a }, { x: i, y: o });
    if (s <= 0) return { radius: s };
    var l = (n - i) / s,
      c = Math.acos(l);
    return (
      a > o && (c = 2 * Math.PI - c),
      { radius: s, angle: lV(c), angleInRadian: c }
    );
  },
  fV = function (t) {
    var r = t.startAngle,
      n = t.endAngle,
      a = Math.floor(r / 360),
      i = Math.floor(n / 360),
      o = Math.min(a, i);
    return { startAngle: r - o * 360, endAngle: n - o * 360 };
  },
  dV = function (t, r) {
    var n = r.startAngle,
      a = r.endAngle,
      i = Math.floor(n / 360),
      o = Math.floor(a / 360),
      s = Math.min(i, o);
    return t + s * 360;
  },
  $g = function (t, r) {
    var n = t.x,
      a = t.y,
      i = uV({ x: n, y: a }, r),
      o = i.radius,
      s = i.angle,
      l = r.innerRadius,
      c = r.outerRadius;
    if (o < l || o > c) return !1;
    if (o === 0) return !0;
    var u = fV(r),
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
    return v ? Eg(Eg({}, r), {}, { radius: o, angle: dV(h, r) }) : null;
  };
function pV(e) {
  return gV(e) || mV(e) || vV(e) || hV();
}
function hV() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vV(e, t) {
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
function mV(e) {
  if (typeof Symbol < 'u' && Symbol.iterator in Object(e)) return Array.from(e);
}
function gV(e) {
  if (Array.isArray(e)) return uf(e);
}
function uf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
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
function bt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ag(Object(r), !0).forEach(function (n) {
          yV(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Ag(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function yV(e, t, r) {
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
function Ri() {
  return (
    (Ri =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Ri.apply(this, arguments)
  );
}
var bV = function (t) {
    var r = t.value,
      n = t.formatter,
      a = ye(t.children) ? r : t.children;
    return pe(n) ? n(a) : a;
  },
  xV = function (t, r) {
    var n = sr(r - t),
      a = Math.min(Math.abs(r - t), 360);
    return n * a;
  },
  wV = function (t, r, n) {
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
      y = xV(h, v),
      _ = y >= 0 ? 1 : -1,
      x,
      b;
    a === 'insideStart'
      ? ((x = h + _ * o), (b = p))
      : a === 'insideEnd'
      ? ((x = v - _ * o), (b = !p))
      : a === 'end' && ((x = v + _ * o), (b = p)),
      (b = y <= 0 ? b : !b);
    var w = kt(c, u, m, x),
      O = kt(c, u, m, x + (b ? 1 : -1) * 359),
      E = 'M'
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
      $ = ye(t.id) ? Al('recharts-radial-line-') : t.id;
    return g.createElement(
      'text',
      Ri({}, n, {
        dominantBaseline: 'central',
        className: Ze('recharts-radial-bar-label', s),
      }),
      g.createElement('defs', null, g.createElement('path', { id: $, d: E })),
      g.createElement('textPath', { xlinkHref: '#'.concat($) }, r)
    );
  },
  _V = function (t) {
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
      var h = kt(o, s, c + n, d),
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
      y = kt(o, s, m, d),
      _ = y.x,
      x = y.y;
    return { x: _, y: x, textAnchor: 'middle', verticalAnchor: 'middle' };
  },
  OV = function (t) {
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
      y = p > 0 ? 'end' : 'start',
      _ = p > 0 ? 'start' : 'end';
    if (i === 'top') {
      var x = {
        x: s + c / 2,
        y: l - f * a,
        textAnchor: 'middle',
        verticalAnchor: h,
      };
      return bt(bt({}, x), n ? { height: Math.max(l - n.y, 0), width: c } : {});
    }
    if (i === 'bottom') {
      var b = {
        x: s + c / 2,
        y: l + u + d,
        textAnchor: 'middle',
        verticalAnchor: v,
      };
      return bt(
        bt({}, b),
        n ? { height: Math.max(n.y + n.height - (l + u), 0), width: c } : {}
      );
    }
    if (i === 'left') {
      var w = {
        x: s - m,
        y: l + u / 2,
        textAnchor: y,
        verticalAnchor: 'middle',
      };
      return bt(
        bt({}, w),
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
      return bt(
        bt({}, O),
        n ? { width: Math.max(n.x + n.width - O.x, 0), height: u } : {}
      );
    }
    var E = n ? { width: c, height: u } : {};
    return i === 'insideLeft'
      ? bt(
          { x: s + m, y: l + u / 2, textAnchor: _, verticalAnchor: 'middle' },
          E
        )
      : i === 'insideRight'
      ? bt(
          {
            x: s + c - m,
            y: l + u / 2,
            textAnchor: y,
            verticalAnchor: 'middle',
          },
          E
        )
      : i === 'insideTop'
      ? bt(
          { x: s + c / 2, y: l + d, textAnchor: 'middle', verticalAnchor: v },
          E
        )
      : i === 'insideBottom'
      ? bt(
          {
            x: s + c / 2,
            y: l + u - d,
            textAnchor: 'middle',
            verticalAnchor: h,
          },
          E
        )
      : i === 'insideTopLeft'
      ? bt({ x: s + m, y: l + d, textAnchor: _, verticalAnchor: v }, E)
      : i === 'insideTopRight'
      ? bt({ x: s + c - m, y: l + d, textAnchor: y, verticalAnchor: v }, E)
      : i === 'insideBottomLeft'
      ? bt({ x: s + m, y: l + u - d, textAnchor: _, verticalAnchor: h }, E)
      : i === 'insideBottomRight'
      ? bt({ x: s + c - m, y: l + u - d, textAnchor: y, verticalAnchor: h }, E)
      : rr(i) && (K(i.x) || Cn(i.x)) && (K(i.y) || Cn(i.y))
      ? bt(
          {
            x: s + _a(i.x, c),
            y: l + _a(i.y, u),
            textAnchor: 'end',
            verticalAnchor: 'end',
          },
          E
        )
      : bt(
          {
            x: s + c / 2,
            y: l + u / 2,
            textAnchor: 'middle',
            verticalAnchor: 'middle',
          },
          E
        );
  },
  SV = function (t) {
    return K(t.cx);
  };
function Ot(e) {
  var t = e.viewBox,
    r = e.position,
    n = e.value,
    a = e.children,
    i = e.content,
    o = e.className,
    s = o === void 0 ? '' : o,
    l = e.textBreakAll;
  if (!t || (ye(n) && ye(a) && !S.exports.isValidElement(i) && !pe(i)))
    return null;
  if (S.exports.isValidElement(i)) return S.exports.cloneElement(i, e);
  var c;
  if (pe(i)) {
    if (((c = S.exports.createElement(i, e)), S.exports.isValidElement(c)))
      return c;
  } else c = bV(e);
  var u = SV(t),
    f = ze(e, !0);
  if (u && (r === 'insideStart' || r === 'insideEnd' || r === 'end'))
    return wV(e, c, f);
  var d = u ? _V(e) : OV(e);
  return g.createElement(
    Ai,
    Ri({ className: Ze('recharts-label', s) }, f, d, { breakAll: l }),
    c
  );
}
Ot.displayName = 'Label';
Ot.defaultProps = { offset: 5 };
var B1 = function (t) {
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
      y = t.clockWise,
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
          clockWise: y,
        }
      : t.viewBox
      ? t.viewBox
      : {};
  },
  EV = function (t, r) {
    return t
      ? t === !0
        ? g.createElement(Ot, { key: 'label-implicit', viewBox: r })
        : mt(t)
        ? g.createElement(Ot, { key: 'label-implicit', viewBox: r, value: t })
        : S.exports.isValidElement(t)
        ? t.type === Ot
          ? S.exports.cloneElement(t, { key: 'label-implicit', viewBox: r })
          : g.createElement(Ot, {
              key: 'label-implicit',
              content: t,
              viewBox: r,
            })
        : pe(t)
        ? g.createElement(Ot, { key: 'label-implicit', content: t, viewBox: r })
        : rr(t)
        ? g.createElement(Ot, Ri({ viewBox: r }, t, { key: 'label-implicit' }))
        : null
      : null;
  },
  $V = function (t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
    if (!t || (!t.children && n && !t.label)) return null;
    var a = t.children,
      i = B1(t),
      o = _r(a, Ot.displayName).map(function (l, c) {
        return S.exports.cloneElement(l, {
          viewBox: r || i,
          key: 'label-'.concat(c),
        });
      });
    if (!n) return o;
    var s = EV(t.label, r || i);
    return [s].concat(pV(o));
  };
Ot.parseViewBox = B1;
Ot.renderCallByParent = $V;
function AV(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var CV = AV;
function PV(e) {
  return IV(e) || MV(e) || TV(e) || kV();
}
function kV() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function TV(e, t) {
  if (!!e) {
    if (typeof e == 'string') return ff(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === 'Object' && e.constructor && (r = e.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return ff(e, t);
  }
}
function MV(e) {
  if (typeof Symbol < 'u' && Symbol.iterator in Object(e)) return Array.from(e);
}
function IV(e) {
  if (Array.isArray(e)) return ff(e);
}
function ff(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
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
function Cg(e, t) {
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
function Pg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Cg(Object(r), !0).forEach(function (n) {
          RV(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Cg(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function RV(e, t, r) {
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
function DV(e, t) {
  if (e == null) return {};
  var r = jV(e, t),
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
function jV(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    a,
    i;
  for (i = 0; i < n.length; i++)
    (a = n[i]), !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
var NV = {
  valueAccessor: function (t) {
    return Me(t.value) ? CV(t.value) : t.value;
  },
};
function qr(e) {
  var t = e.data,
    r = e.valueAccessor,
    n = e.dataKey,
    a = e.clockWise,
    i = e.id,
    o = e.textBreakAll,
    s = DV(e, [
      'data',
      'valueAccessor',
      'dataKey',
      'clockWise',
      'id',
      'textBreakAll',
    ]);
  return !t || !t.length
    ? null
    : g.createElement(
        Dt,
        { className: 'recharts-label-list' },
        t.map(function (l, c) {
          var u = ye(n) ? r(l, c) : Lr(l && l.payload, n),
            f = ye(i) ? {} : { id: ''.concat(i, '-').concat(c) };
          return g.createElement(
            Ot,
            ks({}, ze(l, !0), s, f, {
              parentViewBox: l.parentViewBox,
              index: c,
              value: u,
              textBreakAll: o,
              viewBox: Ot.parseViewBox(
                ye(a) ? l : Pg(Pg({}, l), {}, { clockWise: a })
              ),
              key: 'label-'.concat(c),
            })
          );
        })
      );
}
qr.displayName = 'LabelList';
function LV(e, t) {
  return e
    ? e === !0
      ? g.createElement(qr, { key: 'labelList-implicit', data: t })
      : g.isValidElement(e) || pe(e)
      ? g.createElement(qr, { key: 'labelList-implicit', data: t, content: e })
      : rr(e)
      ? g.createElement(qr, ks({ data: t }, e, { key: 'labelList-implicit' }))
      : null
    : null;
}
function BV(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || (!e.children && r && !e.label)) return null;
  var n = e.children,
    a = _r(n, qr.displayName).map(function (o, s) {
      return S.exports.cloneElement(o, {
        data: t,
        key: 'labelList-'.concat(s),
      });
    });
  if (!r) return a;
  var i = LV(e.label, t);
  return [i].concat(PV(a));
}
qr.renderCallByParent = BV;
qr.defaultProps = NV;
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
function df() {
  return (
    (df =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    df.apply(this, arguments)
  );
}
function FV(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function kg(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function zV(e, t, r) {
  return t && kg(e.prototype, t), r && kg(e, r), e;
}
function WV(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && pf(e, t);
}
function pf(e, t) {
  return (
    (pf =
      Object.setPrototypeOf ||
      function (n, a) {
        return (n.__proto__ = a), n;
      }),
    pf(e, t)
  );
}
function UV(e) {
  var t = GV();
  return function () {
    var n = Ts(e),
      a;
    if (t) {
      var i = Ts(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else a = n.apply(this, arguments);
    return HV(this, a);
  };
}
function HV(e, t) {
  return t && (ko(t) === 'object' || typeof t == 'function') ? t : VV(e);
}
function VV(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function GV() {
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
var qV = function (t, r) {
    var n = sr(r - t),
      a = Math.min(Math.abs(r - t), 359.999);
    return n * a;
  },
  mo = function (t) {
    var r = t.cx,
      n = t.cy,
      a = t.radius,
      i = t.angle,
      o = t.sign,
      s = t.isExternal,
      l = t.cornerRadius,
      c = t.cornerIsExternal,
      u = l * (s ? 1 : -1) + a,
      f = Math.asin(l / u) / Ps,
      d = c ? i : i + o * f,
      h = kt(r, n, u, d),
      v = kt(r, n, a, d),
      p = c ? i - o * f : i,
      m = kt(r, n, u * Math.cos(f * Ps), p);
    return { center: h, circleTangency: v, lineTangency: m, theta: f };
  },
  F1 = function (t) {
    var r = t.cx,
      n = t.cy,
      a = t.innerRadius,
      i = t.outerRadius,
      o = t.startAngle,
      s = t.endAngle,
      l = qV(o, s),
      c = o + l,
      u = kt(r, n, i, o),
      f = kt(r, n, i, c),
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
      var h = kt(r, n, a, o),
        v = kt(r, n, a, c);
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
  YV = function (t) {
    var r = t.cx,
      n = t.cy,
      a = t.innerRadius,
      i = t.outerRadius,
      o = t.cornerRadius,
      s = t.forceCornerRadius,
      l = t.cornerIsExternal,
      c = t.startAngle,
      u = t.endAngle,
      f = sr(u - c),
      d = mo({
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
      m = mo({
        cx: r,
        cy: n,
        radius: i,
        angle: u,
        sign: -f,
        cornerRadius: o,
        cornerIsExternal: l,
      }),
      y = m.circleTangency,
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
        : F1({
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
      .concat(y.x, ',')
      .concat(
        y.y,
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
      var O = mo({
          cx: r,
          cy: n,
          radius: a,
          angle: c,
          sign: f,
          isExternal: !0,
          cornerRadius: o,
          cornerIsExternal: l,
        }),
        E = O.circleTangency,
        $ = O.lineTangency,
        A = O.theta,
        P = mo({
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
        T = P.lineTangency,
        k = P.theta,
        D = l ? Math.abs(c - u) : Math.abs(c - u) - A - k;
      if (D < 0 && o === 0)
        return ''.concat(w, 'L').concat(r, ',').concat(n, 'Z');
      w += 'L'
        .concat(T.x, ',')
        .concat(
          T.y,
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
        .concat(E.x, ',')
        .concat(
          E.y,
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
  z1 = (function (e) {
    WV(r, e);
    var t = UV(r);
    function r() {
      return FV(this, r), t.apply(this, arguments);
    }
    return (
      zV(r, [
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
              y = _a(c, m, 0, !0),
              _;
            return (
              y > 0 && Math.abs(d - h) < 360
                ? (_ = YV({
                    cx: i,
                    cy: o,
                    innerRadius: s,
                    outerRadius: l,
                    cornerRadius: Math.min(y, m / 2),
                    forceCornerRadius: u,
                    cornerIsExternal: f,
                    startAngle: d,
                    endAngle: h,
                  }))
                : (_ = F1({
                    cx: i,
                    cy: o,
                    innerRadius: s,
                    outerRadius: l,
                    startAngle: d,
                    endAngle: h,
                  })),
              g.createElement(
                'path',
                df({}, ze(this.props, !0), { className: p, d: _ })
              )
            );
          },
        },
      ]),
      r
    );
  })(S.exports.PureComponent);
z1.defaultProps = {
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
function hf() {
  return (
    (hf =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    hf.apply(this, arguments)
  );
}
function Tg(e, t) {
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
function Mg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Tg(Object(r), !0).forEach(function (n) {
          KV(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Tg(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function KV(e, t, r) {
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
function XV(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function Ig(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function JV(e, t, r) {
  return t && Ig(e.prototype, t), r && Ig(e, r), e;
}
function ZV(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && vf(e, t);
}
function vf(e, t) {
  return (
    (vf =
      Object.setPrototypeOf ||
      function (n, a) {
        return (n.__proto__ = a), n;
      }),
    vf(e, t)
  );
}
function QV(e) {
  var t = r7();
  return function () {
    var n = Ms(e),
      a;
    if (t) {
      var i = Ms(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else a = n.apply(this, arguments);
    return e7(this, a);
  };
}
function e7(e, t) {
  return t && (To(t) === 'object' || typeof t == 'function') ? t : t7(e);
}
function t7(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function r7() {
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
var Rg = {
    curveBasisClosed: W3,
    curveBasisOpen: U3,
    curveBasis: z3,
    curveLinearClosed: H3,
    curveLinear: Sl,
    curveMonotoneX: V3,
    curveMonotoneY: G3,
    curveNatural: q3,
    curveStep: Y3,
    curveStepAfter: X3,
    curveStepBefore: K3,
  },
  go = function (t) {
    return t.x === +t.x && t.y === +t.y;
  },
  ni = function (t) {
    return t.x;
  },
  ai = function (t) {
    return t.y;
  },
  n7 = function (t, r) {
    if (pe(t)) return t;
    var n = 'curve'.concat(wl(t));
    return n === 'curveMonotone' && r
      ? Rg[''.concat(n).concat(r === 'vertical' ? 'Y' : 'X')]
      : Rg[n] || Sl;
  },
  mf = (function (e) {
    ZV(r, e);
    var t = QV(r);
    function r() {
      return XV(this, r), t.apply(this, arguments);
    }
    return (
      JV(r, [
        {
          key: 'getPath',
          value: function () {
            var a = this.props,
              i = a.type,
              o = a.points,
              s = a.baseLine,
              l = a.layout,
              c = a.connectNulls,
              u = n7(i, l),
              f = c
                ? o.filter(function (p) {
                    return go(p);
                  })
                : o,
              d;
            if (Me(s)) {
              var h = c
                  ? s.filter(function (p) {
                      return go(p);
                    })
                  : s,
                v = f.map(function (p, m) {
                  return Mg(Mg({}, p), {}, { base: h[m] });
                });
              return (
                l === 'vertical'
                  ? (d = lo()
                      .y(ai)
                      .x1(ni)
                      .x0(function (p) {
                        return p.base.x;
                      }))
                  : (d = lo()
                      .x(ni)
                      .y1(ai)
                      .y0(function (p) {
                        return p.base.y;
                      })),
                d.defined(go).curve(u),
                d(v)
              );
            }
            return (
              l === 'vertical' && K(s)
                ? (d = lo().y(ai).x1(ni).x0(s))
                : K(s)
                ? (d = lo().x(ni).y1(ai).y0(s))
                : (d = W0().x(ni).y(ai)),
              d.defined(go).curve(u),
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
            return g.createElement(
              'path',
              hf({}, ze(this.props), Zo(this.props), {
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
  })(S.exports.PureComponent);
mf.defaultProps = { type: 'linear', points: [], connectNulls: !1 };
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
function Is() {
  return (
    (Is =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Is.apply(this, arguments)
  );
}
function a7(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function Dg(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function i7(e, t, r) {
  return t && Dg(e.prototype, t), r && Dg(e, r), e;
}
function o7(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && gf(e, t);
}
function gf(e, t) {
  return (
    (gf =
      Object.setPrototypeOf ||
      function (n, a) {
        return (n.__proto__ = a), n;
      }),
    gf(e, t)
  );
}
function s7(e) {
  var t = u7();
  return function () {
    var n = Rs(e),
      a;
    if (t) {
      var i = Rs(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else a = n.apply(this, arguments);
    return l7(this, a);
  };
}
function l7(e, t) {
  return t && (Mo(t) === 'object' || typeof t == 'function') ? t : c7(e);
}
function c7(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function u7() {
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
function Rs(e) {
  return (
    (Rs = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Rs(e)
  );
}
var jg = function (t, r, n, a, i) {
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
  f7 = function (t, r) {
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
  zl = (function (e) {
    o7(r, e);
    var t = s7(r);
    function r() {
      var n;
      a7(this, r);
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
      i7(r, [
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
              y = h.isAnimationActive,
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
              ? g.createElement(
                  Sa,
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
                      E = b.x,
                      $ = b.y;
                    return g.createElement(
                      Sa,
                      {
                        canBegin: d > 0,
                        from: '0px '.concat(d === -1 ? 1 : d, 'px'),
                        to: ''.concat(d, 'px 0px'),
                        attributeName: 'strokeDasharray',
                        begin: m,
                        duration: p,
                        isActive: y,
                        easing: v,
                      },
                      g.createElement(
                        'path',
                        Is({}, ze(a.props, !0), {
                          className: x,
                          d: jg(E, $, w, O, u),
                          ref: function (P) {
                            a.node = P;
                          },
                        })
                      )
                    );
                  }
                )
              : g.createElement(
                  'path',
                  Is({}, ze(this.props, !0), {
                    className: x,
                    d: jg(o, s, l, c, u),
                  })
                );
          },
        },
      ]),
      r
    );
  })(S.exports.PureComponent);
zl.defaultProps = {
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
function yf() {
  return (
    (yf =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    yf.apply(this, arguments)
  );
}
function d7(e, t) {
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
function p7(e, t, r) {
  return t && Ng(e.prototype, t), r && Ng(e, r), e;
}
function h7(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && bf(e, t);
}
function bf(e, t) {
  return (
    (bf =
      Object.setPrototypeOf ||
      function (n, a) {
        return (n.__proto__ = a), n;
      }),
    bf(e, t)
  );
}
function v7(e) {
  var t = y7();
  return function () {
    var n = Ds(e),
      a;
    if (t) {
      var i = Ds(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else a = n.apply(this, arguments);
    return m7(this, a);
  };
}
function m7(e, t) {
  return t && (Io(t) === 'object' || typeof t == 'function') ? t : g7(e);
}
function g7(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function y7() {
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
function Ds(e) {
  return (
    (Ds = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Ds(e)
  );
}
var W1 = (function (e) {
  h7(r, e);
  var t = v7(r);
  function r() {
    return d7(this, r), t.apply(this, arguments);
  }
  return (
    p7(r, [
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
            ? g.createElement(
                'circle',
                yf({}, ze(this.props), Zo(this.props), {
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
})(S.exports.PureComponent);
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
function xf() {
  return (
    (xf =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    xf.apply(this, arguments)
  );
}
function b7(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function Lg(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function x7(e, t, r) {
  return t && Lg(e.prototype, t), r && Lg(e, r), e;
}
function w7(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && wf(e, t);
}
function wf(e, t) {
  return (
    (wf =
      Object.setPrototypeOf ||
      function (n, a) {
        return (n.__proto__ = a), n;
      }),
    wf(e, t)
  );
}
function _7(e) {
  var t = E7();
  return function () {
    var n = js(e),
      a;
    if (t) {
      var i = js(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else a = n.apply(this, arguments);
    return O7(this, a);
  };
}
function O7(e, t) {
  return t && (Ro(t) === 'object' || typeof t == 'function') ? t : S7(e);
}
function S7(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function E7() {
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
var U1 = (function (e) {
  w7(r, e);
  var t = _7(r);
  function r() {
    return b7(this, r), t.apply(this, arguments);
  }
  return (
    x7(
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
              : g.createElement(
                  'path',
                  xf({}, ze(this.props, !0), {
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
})(S.exports.PureComponent);
U1.defaultProps = { x: 0, y: 0, top: 0, left: 0, width: 0, height: 0 };
var $7 = Math.ceil,
  A7 = Math.max;
function C7(e, t, r, n) {
  for (var a = -1, i = A7($7((t - e) / (r || 1)), 0), o = Array(i); i--; )
    (o[n ? i : ++a] = e), (e += r);
  return o;
}
var P7 = C7,
  k7 = fx,
  Bg = 1 / 0,
  T7 = 17976931348623157e292;
function M7(e) {
  if (!e) return e === 0 ? e : 0;
  if (((e = k7(e)), e === Bg || e === -Bg)) {
    var t = e < 0 ? -1 : 1;
    return t * T7;
  }
  return e === e ? e : 0;
}
var H1 = M7,
  I7 = P7,
  R7 = Pl,
  Lc = H1;
function D7(e) {
  return function (t, r, n) {
    return (
      n && typeof n != 'number' && R7(t, r, n) && (r = n = void 0),
      (t = Lc(t)),
      r === void 0 ? ((r = t), (t = 0)) : (r = Lc(r)),
      (n = n === void 0 ? (t < r ? 1 : -1) : Lc(n)),
      I7(t, r, n, e)
    );
  };
}
var j7 = D7,
  N7 = j7,
  L7 = N7(),
  Ns = L7;
function Fg(e, t) {
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
function zg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Fg(Object(r), !0).forEach(function (n) {
          V1(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Fg(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function V1(e, t, r) {
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
var B7 = ['Webkit', 'Moz', 'O', 'ms'],
  F7 = function (t, r) {
    if (!t) return null;
    var n = t.replace(/(\w)/, function (i) {
        return i.toUpperCase();
      }),
      a = B7.reduce(function (i, o) {
        return zg(zg({}, i), {}, V1({}, o + n, r));
      }, {});
    return (a[t] = r), a;
  };
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
function Ls() {
  return (
    (Ls =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Ls.apply(this, arguments)
  );
}
function Wg(e, t) {
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
function Bc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Wg(Object(r), !0).forEach(function (n) {
          _f(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Wg(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function _f(e, t, r) {
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
function z7(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function Ug(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function W7(e, t, r) {
  return t && Ug(e.prototype, t), r && Ug(e, r), e;
}
function U7(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && Of(e, t);
}
function Of(e, t) {
  return (
    (Of =
      Object.setPrototypeOf ||
      function (n, a) {
        return (n.__proto__ = a), n;
      }),
    Of(e, t)
  );
}
function H7(e) {
  var t = G7();
  return function () {
    var n = Bs(e),
      a;
    if (t) {
      var i = Bs(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else a = n.apply(this, arguments);
    return V7(this, a);
  };
}
function V7(e, t) {
  return t && (Do(t) === 'object' || typeof t == 'function') ? t : Sf(e);
}
function Sf(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function G7() {
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
function Bs(e) {
  return (
    (Bs = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Bs(e)
  );
}
var q7 = function (t) {
    var r = t.data,
      n = t.startIndex,
      a = t.endIndex,
      i = t.x,
      o = t.width,
      s = t.travellerWidth;
    if (!r || !r.length) return {};
    var l = r.length,
      c = vi()
        .domain(Ns(0, l))
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
  Hg = function (t) {
    return t.changedTouches && !!t.changedTouches.length;
  },
  Di = (function (e) {
    U7(r, e);
    var t = H7(r);
    function r(n) {
      var a;
      return (
        z7(this, r),
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
          var o = Hg(i) ? i.changedTouches[0] : i;
          a.setState({
            isTravellerMoving: !1,
            isSlideMoving: !0,
            slideMoveStartX: o.pageX,
          }),
            a.attachDragEndListener();
        }),
        (a.travellerDragStartHandlers = {
          startX: a.handleTravellerDragStart.bind(Sf(a), 'startX'),
          endX: a.handleTravellerDragStart.bind(Sf(a), 'endX'),
        }),
        (a.state = {}),
        a
      );
    }
    return (
      W7(
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
                c = Lr(o[a], l, a);
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
              var y = this.getIndex({ startX: s + m, endX: l + m });
              (y.startIndex !== h || y.endIndex !== v) && p && p(y),
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
              var o = Hg(i) ? i.changedTouches[0] : i;
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
                y = d.gap,
                _ = d.data,
                x = { startX: this.state.startX, endX: this.state.endX },
                b = a.pageX - s;
              b > 0
                ? (b = Math.min(b, h + v - p - f))
                : b < 0 && (b = Math.max(b, h - f)),
                (x[l] = f + b);
              var w = this.getIndex(x),
                O = w.startIndex,
                E = w.endIndex,
                $ = function () {
                  var P = _.length - 1;
                  return (
                    (l === 'startX' && (c > u ? O % y === 0 : E % y === 0)) ||
                    (c < u && E === P) ||
                    (l === 'endX' && (c > u ? E % y === 0 : O % y === 0)) ||
                    (c > u && E === P)
                  );
                };
              this.setState(
                ((i = {}),
                _f(i, l, f + b),
                _f(i, 'brushMoveStartX', a.pageX),
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
              return g.createElement('rect', {
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
                d = S.exports.Children.only(u);
              return d
                ? g.cloneElement(d, {
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
                d = Bc(
                  Bc({}, ze(this.props)),
                  {},
                  { x: f, y: s, width: l, height: c }
                );
              return g.createElement(
                Dt,
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
              return g.createElement('rect', {
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
              return g.createElement(
                Dt,
                { className: 'recharts-brush-texts' },
                g.createElement(
                  Ai,
                  Ls(
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
                g.createElement(
                  Ai,
                  Ls(
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
                y = h.isSlideMoving,
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
                b = g.Children.count(s) === 1,
                w = F7('userSelect', 'none');
              return g.createElement(
                Dt,
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
                (m || y || _ || d) && this.renderText()
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
              return g.createElement(
                g.Fragment,
                null,
                g.createElement('rect', {
                  x: i,
                  y: o,
                  width: s,
                  height: l,
                  fill: c,
                  stroke: 'none',
                }),
                g.createElement('line', {
                  x1: i + 1,
                  y1: u,
                  x2: i + s - 1,
                  y2: u,
                  fill: 'none',
                  stroke: '#fff',
                }),
                g.createElement('line', {
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
                g.isValidElement(a)
                  ? (o = g.cloneElement(a, i))
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
                return Bc(
                  {
                    prevData: o,
                    prevTravellerWidth: c,
                    prevUpdateId: u,
                    prevX: l,
                    prevWidth: s,
                  },
                  o && o.length
                    ? q7({
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
  })(S.exports.PureComponent);
Di.displayName = 'Brush';
Di.defaultProps = {
  height: 40,
  travellerWidth: 5,
  gap: 1,
  fill: '#fff',
  stroke: '#666',
  padding: { top: 1, right: 1, bottom: 1, left: 1 },
  leaveTimeOut: 1e3,
  alwaysShowText: !1,
};
var Y7 = Wd;
function K7(e, t) {
  var r;
  return (
    Y7(e, function (n, a, i) {
      return (r = t(n, a, i)), !r;
    }),
    !!r
  );
}
var X7 = K7,
  J7 = v0,
  Z7 = yn,
  Q7 = X7,
  eG = Me,
  tG = Pl;
function rG(e, t, r) {
  var n = eG(e) ? J7 : Q7;
  return r && tG(e, t, r) && (t = void 0), n(e, Z7(t));
}
var nG = rG,
  Rr = function (t, r) {
    var n = t.alwaysShow,
      a = t.ifOverflow;
    return n && (a = 'extendDomain'), a === r;
  };
function aG(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (!t(e[r], r, e)) return !1;
  return !0;
}
var iG = aG,
  oG = Wd;
function sG(e, t) {
  var r = !0;
  return (
    oG(e, function (n, a, i) {
      return (r = !!t(n, a, i)), r;
    }),
    r
  );
}
var lG = sG,
  cG = iG,
  uG = lG,
  fG = yn,
  dG = Me,
  pG = Pl;
function hG(e, t, r) {
  var n = dG(e) ? cG : uG;
  return r && pG(e, t, r) && (t = void 0), n(e, fG(t));
}
var G1 = hG,
  Vg = ux;
function vG(e, t, r) {
  t == '__proto__' && Vg
    ? Vg(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
    : (e[t] = r);
}
var mG = vG,
  gG = mG,
  yG = sx,
  bG = yn;
function xG(e, t) {
  var r = {};
  return (
    (t = bG(t)),
    yG(e, function (n, a, i) {
      gG(r, a, t(n, a, i));
    }),
    r
  );
}
var wG = xG;
function _G(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function Gg(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function OG(e, t, r) {
  return t && Gg(e.prototype, t), r && Gg(e, r), e;
}
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
function br(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? qg(Object(r), !0).forEach(function (n) {
          hp(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : qg(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function hp(e, t, r) {
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
var SG = function (t, r, n, a, i) {
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
      d = !!Ur(c, 'Bar');
    return u.reduce(function (h, v) {
      var p = r[v],
        m = p.orientation,
        y = p.domain,
        _ = p.padding,
        x = _ === void 0 ? {} : _,
        b = p.mirror,
        w = p.reversed,
        O = ''.concat(m).concat(b ? 'Mirror' : ''),
        E,
        $,
        A,
        P,
        C;
      if (
        p.type === 'number' &&
        (p.padding === 'gap' || p.padding === 'no-gap')
      ) {
        var T = y[1] - y[0],
          k = 1 / 0,
          D = p.categoricalDomain.sort();
        D.forEach(function (Se, le) {
          le > 0 && (k = Math.min((Se || 0) - (D[le - 1] || 0), k));
        });
        var j = k / T,
          R = p.layout === 'vertical' ? n.height : n.width;
        if (
          (p.padding === 'gap' && (E = (j * R) / 2), p.padding === 'no-gap')
        ) {
          var N = _a(t.barCategoryGap, j * R),
            F = (j * R) / 2;
          E = F - N - ((F - N) / R) * N;
        }
      }
      a === 'xAxis'
        ? ($ = [
            n.left + (x.left || 0) + (E || 0),
            n.left + n.width - (x.right || 0) - (E || 0),
          ])
        : a === 'yAxis'
        ? ($ =
            l === 'horizontal'
              ? [n.top + n.height - (x.bottom || 0), n.top + (x.top || 0)]
              : [
                  n.top + (x.top || 0) + (E || 0),
                  n.top + n.height - (x.bottom || 0) - (E || 0),
                ])
        : ($ = p.range),
        w && ($ = [$[1], $[0]]);
      var M = qH(p, i, d),
        Y = M.scale,
        Q = M.realScaleType;
      Y.domain(y).range($), YH(Y);
      var ne = nV(Y, br(br({}, p), {}, { realScaleType: Q }));
      a === 'xAxis'
        ? ((C = (m === 'top' && !b) || (m === 'bottom' && b)),
          (A = n.left),
          (P = f[O] - C * p.height))
        : a === 'yAxis' &&
          ((C = (m === 'left' && !b) || (m === 'right' && b)),
          (A = f[O] - C * p.width),
          (P = n.top));
      var ve = br(
        br(br({}, p), ne),
        {},
        {
          realScaleType: Q,
          x: A,
          y: P,
          scale: Y,
          width: a === 'xAxis' ? n.width : p.width,
          height: a === 'yAxis' ? n.height : p.height,
        }
      );
      return (
        (ve.bandSize = Cs(ve, ne)),
        !p.hide && a === 'xAxis'
          ? (f[O] += (C ? -1 : 1) * ve.height)
          : p.hide || (f[O] += (C ? -1 : 1) * ve.width),
        br(br({}, h), {}, hp({}, v, ve))
      );
    }, {});
  },
  q1 = function (t, r) {
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
  EG = function (t) {
    var r = t.x1,
      n = t.y1,
      a = t.x2,
      i = t.y2;
    return q1({ x: r, y: n }, { x: a, y: i });
  },
  Y1 = (function () {
    function e(t) {
      _G(this, e), (this.scale = void 0), (this.scale = t);
    }
    return (
      OG(
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
Y1.EPS = 1e-4;
var vp = function (t) {
  var r = Object.keys(t).reduce(function (n, a) {
    return br(br({}, n), {}, hp({}, a, Y1.create(t[a])));
  }, {});
  return br(
    br({}, r),
    {},
    {
      apply: function (a) {
        var i =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          o = i.bandAware,
          s = i.position;
        return wG(a, function (l, c) {
          return r[c].apply(l, { bandAware: o, position: s });
        });
      },
      isInRange: function (a) {
        return G1(a, function (i, o) {
          return r[o].isInRange(i);
        });
      },
    }
  );
};
function Yg(e, t) {
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
function Kg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Yg(Object(r), !0).forEach(function (n) {
          $G(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Yg(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function $G(e, t, r) {
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
function AG(e, t) {
  return TG(e) || kG(e, t) || PG(e, t) || CG();
}
function CG() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function PG(e, t) {
  if (!!e) {
    if (typeof e == 'string') return Xg(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === 'Object' && e.constructor && (r = e.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Xg(e, t);
  }
}
function Xg(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function kG(e, t) {
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
function TG(e) {
  if (Array.isArray(e)) return e;
}
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
var MG = function (t, r) {
    var n;
    return (
      g.isValidElement(t)
        ? (n = g.cloneElement(t, r))
        : pe(t)
        ? (n = t(r))
        : (n = g.createElement(
            'line',
            Ef({}, r, { className: 'recharts-reference-line-line' })
          )),
      n
    );
  },
  IG = function (t, r, n, a, i) {
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
      if (Rr(i, 'discard') && !t.y.isInRange(v)) return null;
      var p = [
        { x: s + c, y: v },
        { x: s, y: v },
      ];
      return h === 'left' ? p.reverse() : p;
    }
    if (r) {
      var m = i.x,
        y = i.xAxis.orientation,
        _ = t.x.apply(m, { position: f });
      if (Rr(i, 'discard') && !t.x.isInRange(_)) return null;
      var x = [
        { x: _, y: l + u },
        { x: _, y: l },
      ];
      return y === 'top' ? x.reverse() : x;
    }
    if (a) {
      var b = i.segment,
        w = b.map(function (O) {
          return t.apply(O, { position: f });
        });
      return Rr(i, 'discard') &&
        nG(w, function (O) {
          return !t.isInRange(O);
        })
        ? null
        : w;
    }
    return null;
  };
function mp(e) {
  var t = e.x,
    r = e.y,
    n = e.segment,
    a = e.xAxis,
    i = e.yAxis,
    o = e.shape,
    s = e.className,
    l = e.alwaysShow,
    c = e.clipPathId;
  ua(
    l === void 0,
    'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'
  );
  var u = vp({ x: a.scale, y: i.scale }),
    f = mt(t),
    d = mt(r),
    h = n && n.length === 2,
    v = IG(u, f, d, h, e);
  if (!v) return null;
  var p = AG(v, 2),
    m = p[0],
    y = m.x,
    _ = m.y,
    x = p[1],
    b = x.x,
    w = x.y,
    O = Rr(e, 'hidden') ? 'url(#'.concat(c, ')') : void 0,
    E = Kg(Kg({ clipPath: O }, ze(e, !0)), {}, { x1: y, y1: _, x2: b, y2: w });
  return g.createElement(
    Dt,
    { className: Ze('recharts-reference-line', s) },
    MG(o, E),
    Ot.renderCallByParent(e, EG({ x1: y, y1: _, x2: b, y2: w }))
  );
}
mp.displayName = 'ReferenceLine';
mp.defaultProps = {
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
function Jg(e, t) {
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
function Zg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Jg(Object(r), !0).forEach(function (n) {
          RG(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Jg(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function RG(e, t, r) {
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
var DG = function (t) {
  var r = t.x,
    n = t.y,
    a = t.xAxis,
    i = t.yAxis,
    o = vp({ x: a.scale, y: i.scale }),
    s = o.apply({ x: r, y: n }, { bandAware: !0 });
  return Rr(t, 'discard') && !o.isInRange(s) ? null : s;
};
function Xi(e) {
  var t = e.x,
    r = e.y,
    n = e.r,
    a = e.alwaysShow,
    i = e.clipPathId,
    o = mt(t),
    s = mt(r);
  if (
    (ua(
      a === void 0,
      'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'
    ),
    !o || !s)
  )
    return null;
  var l = DG(e);
  if (!l) return null;
  var c = l.x,
    u = l.y,
    f = e.shape,
    d = e.className,
    h = Rr(e, 'hidden') ? 'url(#'.concat(i, ')') : void 0,
    v = Zg(Zg({ clipPath: h }, ze(e, !0)), {}, { cx: c, cy: u });
  return g.createElement(
    Dt,
    { className: Ze('recharts-reference-dot', d) },
    Xi.renderDot(f, v),
    Ot.renderCallByParent(e, {
      x: c - n,
      y: u - n,
      width: 2 * n,
      height: 2 * n,
    })
  );
}
Xi.displayName = 'ReferenceDot';
Xi.defaultProps = {
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
Xi.renderDot = function (e, t) {
  var r;
  return (
    g.isValidElement(e)
      ? (r = g.cloneElement(e, t))
      : pe(e)
      ? (r = e(t))
      : (r = g.createElement(
          W1,
          $f({}, t, {
            cx: t.cx,
            cy: t.cy,
            className: 'recharts-reference-dot-dot',
          })
        )),
    r
  );
};
function Af() {
  return (
    (Af =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Af.apply(this, arguments)
  );
}
function Qg(e, t) {
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
function ey(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Qg(Object(r), !0).forEach(function (n) {
          jG(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : Qg(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function jG(e, t, r) {
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
var NG = function (t, r, n, a, i) {
  var o = i.x1,
    s = i.x2,
    l = i.y1,
    c = i.y2,
    u = i.xAxis,
    f = i.yAxis;
  if (!u || !f) return null;
  var d = vp({ x: u.scale, y: f.scale }),
    h = {
      x: t ? d.x.apply(o, { position: 'start' }) : d.x.rangeMin,
      y: n ? d.y.apply(l, { position: 'start' }) : d.y.rangeMin,
    },
    v = {
      x: r ? d.x.apply(s, { position: 'end' }) : d.x.rangeMax,
      y: a ? d.y.apply(c, { position: 'end' }) : d.y.rangeMax,
    };
  return Rr(i, 'discard') && (!d.isInRange(h) || !d.isInRange(v))
    ? null
    : q1(h, v);
};
function Ji(e) {
  var t = e.x1,
    r = e.x2,
    n = e.y1,
    a = e.y2,
    i = e.className,
    o = e.alwaysShow,
    s = e.clipPathId;
  ua(
    o === void 0,
    'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'
  );
  var l = mt(t),
    c = mt(r),
    u = mt(n),
    f = mt(a),
    d = e.shape;
  if (!l && !c && !u && !f && !d) return null;
  var h = NG(l, c, u, f, e);
  if (!h && !d) return null;
  var v = Rr(e, 'hidden') ? 'url(#'.concat(s, ')') : void 0;
  return g.createElement(
    Dt,
    { className: Ze('recharts-reference-area', i) },
    Ji.renderRect(d, ey(ey({ clipPath: v }, ze(e, !0)), h)),
    Ot.renderCallByParent(e, h)
  );
}
Ji.displayName = 'ReferenceArea';
Ji.defaultProps = {
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
Ji.renderRect = function (e, t) {
  var r;
  return (
    g.isValidElement(e)
      ? (r = g.cloneElement(e, t))
      : pe(e)
      ? (r = e(t))
      : (r = g.createElement(
          zl,
          Af({}, t, { className: 'recharts-reference-area-rect' })
        )),
    r
  );
};
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
function aa() {
  return (
    (aa =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    aa.apply(this, arguments)
  );
}
function ty(e, t) {
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
      ? ty(Object(r), !0).forEach(function (n) {
          LG(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : ty(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function LG(e, t, r) {
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
function Fc(e, t) {
  if (e == null) return {};
  var r = BG(e, t),
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
function BG(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    a,
    i;
  for (i = 0; i < n.length; i++)
    (a = n[i]), !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function FG(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function ry(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function zG(e, t, r) {
  return t && ry(e.prototype, t), r && ry(e, r), e;
}
function WG(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && Cf(e, t);
}
function Cf(e, t) {
  return (
    (Cf =
      Object.setPrototypeOf ||
      function (n, a) {
        return (n.__proto__ = a), n;
      }),
    Cf(e, t)
  );
}
function UG(e) {
  var t = GG();
  return function () {
    var n = Fs(e),
      a;
    if (t) {
      var i = Fs(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else a = n.apply(this, arguments);
    return HG(this, a);
  };
}
function HG(e, t) {
  return t && (jo(t) === 'object' || typeof t == 'function') ? t : VG(e);
}
function VG(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function GG() {
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
var $n = (function (e) {
  WG(r, e);
  var t = UG(r);
  function r(n) {
    var a;
    return (
      FG(this, r),
      (a = t.call(this, n)),
      (a.layerReference = void 0),
      (a.state = { fontSize: '', letterSpacing: '' }),
      a
    );
  }
  return (
    zG(
      r,
      [
        {
          key: 'shouldComponentUpdate',
          value: function (a, i) {
            var o = a.viewBox,
              s = Fc(a, ['viewBox']),
              l = this.props,
              c = l.viewBox,
              u = Fc(l, ['viewBox']);
            return !fa(o, c) || !fa(s, u) || !fa(i, this.state);
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
              y,
              _,
              x,
              b = d ? -1 : 1,
              w = a.tickSize || f,
              O = K(a.tickCoord) ? a.tickCoord : a.coordinate;
            switch (u) {
              case 'top':
                (v = p = a.coordinate),
                  (y = s + +!d * c),
                  (m = y - b * w),
                  (x = m - b * h),
                  (_ = O);
                break;
              case 'left':
                (m = y = a.coordinate),
                  (p = o + +!d * l),
                  (v = p - b * w),
                  (_ = v - b * h),
                  (x = O);
                break;
              case 'right':
                (m = y = a.coordinate),
                  (p = o + +d * l),
                  (v = p + b * w),
                  (_ = v + b * h),
                  (x = O);
                break;
              default:
                (v = p = a.coordinate),
                  (y = s + +d * c),
                  (m = y + b * w),
                  (x = m + b * h),
                  (_ = O);
                break;
            }
            return {
              line: { x1: v, y1: m, x2: p, y2: y },
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
            return g.createElement(
              'line',
              aa({}, d, {
                className: Ze(
                  'recharts-cartesian-axis-line',
                  er(f, 'className')
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
              y = ze(this.props),
              _ = ze(f),
              x = Re(Re({}, y), {}, { fill: 'none' }, ze(c)),
              b = v.map(function (w, O) {
                var E = s.getTickLineCoord(w),
                  $ = E.line,
                  A = E.tick,
                  P = Re(
                    Re(
                      Re(
                        Re({ textAnchor: p, verticalAnchor: m }, y),
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
                return g.createElement(
                  Dt,
                  aa(
                    {
                      className: 'recharts-cartesian-axis-tick',
                      key: 'tick-'.concat(O),
                    },
                    Qo(s.props, w, O)
                  ),
                  c &&
                    g.createElement(
                      'line',
                      aa({}, x, $, {
                        className: Ze(
                          'recharts-cartesian-axis-tick-line',
                          er(c, 'className')
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
            return g.createElement(
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
              v = Fc(d, ['ticks']),
              p = h;
            return (
              pe(c) && (p = h && h.length > 0 ? c(this.props) : c(v)),
              s <= 0 || l <= 0 || !p || !p.length
                ? null
                : g.createElement(
                    Dt,
                    {
                      className: Ze('recharts-cartesian-axis', u),
                      ref: function (y) {
                        a.layerReference = y;
                      },
                    },
                    o && this.renderAxisLine(),
                    this.renderTicks(
                      p,
                      this.state.fontSize,
                      this.state.letterSpacing
                    ),
                    Ot.renderCallByParent(this.props)
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
              : K(d) || cn.isSsr
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
              y = l.height,
              _ = c === 'top' || c === 'bottom' ? 'width' : 'height',
              x = (o || []).slice(),
              b =
                f && _ === 'width'
                  ? En(f, { fontSize: d, letterSpacing: h })[_]
                  : 0,
              w = x.length,
              O = w >= 2 ? sr(x[1].coordinate - x[0].coordinate) : 1,
              E,
              $;
            if (
              (O === 1
                ? ((E = _ === 'width' ? v : p),
                  ($ = _ === 'width' ? v + m : p + y))
                : ((E = _ === 'width' ? v + m : p + y),
                  ($ = _ === 'width' ? v : p)),
              i)
            ) {
              var A = o[w - 1],
                P = pe(s) ? s(A.value, w - 1) : A.value,
                C = En(P, { fontSize: d, letterSpacing: h })[_] + b,
                T = O * (A.coordinate + (O * C) / 2 - $);
              x[w - 1] = A = Re(
                Re({}, A),
                {},
                { tickCoord: T > 0 ? A.coordinate - T * O : A.coordinate }
              );
              var k =
                O * (A.tickCoord - (O * C) / 2 - E) >= 0 &&
                O * (A.tickCoord + (O * C) / 2 - $) <= 0;
              k &&
                (($ = A.tickCoord - O * (C / 2 + u)),
                (x[w - 1] = Re(Re({}, A), {}, { isShow: !0 })));
            }
            for (var D = i ? w - 1 : w, j = 0; j < D; j++) {
              var R = x[j],
                N = pe(s) ? s(R.value, j) : R.value,
                F = En(N, { fontSize: d, letterSpacing: h })[_] + b;
              if (j === 0) {
                var M = O * (R.coordinate - (O * F) / 2 - E);
                x[j] = R = Re(
                  Re({}, R),
                  {},
                  { tickCoord: M < 0 ? R.coordinate - M * O : R.coordinate }
                );
              } else x[j] = R = Re(Re({}, R), {}, { tickCoord: R.coordinate });
              var Y =
                O * (R.tickCoord - (O * F) / 2 - E) >= 0 &&
                O * (R.tickCoord + (O * F) / 2 - $) <= 0;
              Y &&
                ((E = R.tickCoord + O * (F / 2 + u)),
                (x[j] = Re(Re({}, R), {}, { isShow: !0 })));
            }
            return x.filter(function (Q) {
              return Q.isShow;
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
              y = l === 'top' || l === 'bottom' ? 'width' : 'height',
              _ =
                u && y === 'width'
                  ? En(u, { fontSize: f, letterSpacing: d })[y]
                  : 0,
              x = (i || []).slice(),
              b = x.length,
              w = b >= 2 ? sr(x[1].coordinate - x[0].coordinate) : 1,
              O,
              E;
            w === 1
              ? ((O = y === 'width' ? h : v),
                (E = y === 'width' ? h + p : v + m))
              : ((O = y === 'width' ? h + p : v + m),
                (E = y === 'width' ? h : v));
            for (var $ = b - 1; $ >= 0; $--) {
              var A = x[$],
                P = pe(o) ? o(A.value, b - $ - 1) : A.value,
                C = En(P, { fontSize: f, letterSpacing: d })[y] + _;
              if ($ === b - 1) {
                var T = w * (A.coordinate + (w * C) / 2 - E);
                x[$] = A = Re(
                  Re({}, A),
                  {},
                  { tickCoord: T > 0 ? A.coordinate - T * w : A.coordinate }
                );
              } else x[$] = A = Re(Re({}, A), {}, { tickCoord: A.coordinate });
              var k =
                w * (A.tickCoord - (w * C) / 2 - O) >= 0 &&
                w * (A.tickCoord + (w * C) / 2 - E) <= 0;
              k &&
                ((E = A.tickCoord - w * (C / 2 + c)),
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
              g.isValidElement(a)
                ? (s = g.cloneElement(a, i))
                : pe(a)
                ? (s = a(i))
                : (s = g.createElement(
                    Ai,
                    aa({}, i, {
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
})(S.exports.Component);
$n.displayName = 'CartesianAxis';
$n.defaultProps = {
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
function No(e) {
  return (
    typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
      ? (No = function (r) {
          return typeof r;
        })
      : (No = function (r) {
          return r &&
            typeof Symbol == 'function' &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? 'symbol'
            : typeof r;
        }),
    No(e)
  );
}
function Pf() {
  return (
    (Pf =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Pf.apply(this, arguments)
  );
}
function qG(e, t) {
  if (e == null) return {};
  var r = YG(e, t),
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
function YG(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    a,
    i;
  for (i = 0; i < n.length; i++)
    (a = n[i]), !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function ny(e, t) {
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
function yo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ny(Object(r), !0).forEach(function (n) {
          KG(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : ny(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function KG(e, t, r) {
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
function XG(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function ay(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function JG(e, t, r) {
  return t && ay(e.prototype, t), r && ay(e, r), e;
}
function ZG(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && kf(e, t);
}
function kf(e, t) {
  return (
    (kf =
      Object.setPrototypeOf ||
      function (n, a) {
        return (n.__proto__ = a), n;
      }),
    kf(e, t)
  );
}
function QG(e) {
  var t = rq();
  return function () {
    var n = zs(e),
      a;
    if (t) {
      var i = zs(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else a = n.apply(this, arguments);
    return eq(this, a);
  };
}
function eq(e, t) {
  return t && (No(t) === 'object' || typeof t == 'function') ? t : tq(e);
}
function tq(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function rq() {
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
var gp = (function (e) {
  ZG(r, e);
  var t = QG(r);
  function r() {
    return XG(this, r), t.apply(this, arguments);
  }
  return (
    JG(
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
              var h = yo(
                yo({}, i.props),
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
            return g.createElement(
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
              var h = yo(
                yo({}, i.props),
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
            return g.createElement(
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
              var y = p % i.length;
              return g.createElement('rect', {
                key: 'react-'.concat(p),
                x: Math.round(v + l - l),
                y: c,
                width: m,
                height: f,
                stroke: 'none',
                fill: i[y],
                fillOpacity: s,
                className: 'recharts-cartesian-grid-bg',
              });
            });
            return g.createElement(
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
              var y = p % i.length;
              return g.createElement('rect', {
                key: 'react-'.concat(p),
                y: Math.round(v + c - c),
                x: l,
                height: m,
                width: u,
                stroke: 'none',
                fill: i[y],
                fillOpacity: s,
                className: 'recharts-cartesian-grid-bg',
              });
            });
            return g.createElement(
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
            return g.createElement('rect', {
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
              y = a.chartHeight;
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
                (x = f({ yAxis: v, width: m, height: y, offset: p })),
              (!b || !b.length) &&
                pe(d) &&
                (b = d({ xAxis: h, width: m, height: y, offset: p })),
              g.createElement(
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
            if (g.isValidElement(a)) o = g.cloneElement(a, i);
            else if (pe(a)) o = a(i);
            else {
              var s = i.x1,
                l = i.y1,
                c = i.x2,
                u = i.y2,
                f = i.key,
                d = qG(i, ['x1', 'y1', 'x2', 'y2', 'key']);
              o = g.createElement(
                'line',
                Pf({}, ze(d), {
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
})(S.exports.PureComponent);
gp.displayName = 'CartesianGrid';
gp.defaultProps = {
  horizontal: !0,
  vertical: !0,
  horizontalPoints: [],
  verticalPoints: [],
  stroke: '#ccc',
  fill: 'none',
  verticalFill: [],
  horizontalFill: [],
};
function Ws() {
  return (
    (Ws =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Ws.apply(this, arguments)
  );
}
function nq(e, t) {
  return sq(e) || oq(e, t) || iq(e, t) || aq();
}
function aq() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function iq(e, t) {
  if (!!e) {
    if (typeof e == 'string') return iy(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === 'Object' && e.constructor && (r = e.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return iy(e, t);
  }
}
function iy(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function oq(e, t) {
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
function sq(e) {
  if (Array.isArray(e)) return e;
}
function lq(e, t) {
  if (e == null) return {};
  var r = cq(e, t),
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
function cq(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    a,
    i;
  for (i = 0; i < n.length; i++)
    (a = n[i]), !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function yp(e) {
  var t = e.offset,
    r = e.layout,
    n = e.width,
    a = e.dataKey,
    i = e.data,
    o = e.dataPointFormatter,
    s = e.xAxis,
    l = e.yAxis,
    c = lq(e, [
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
        y = v.value,
        _ = v.errorVal;
      if (!_) return null;
      var x = [],
        b,
        w;
      if (Array.isArray(_)) {
        var O = nq(_, 2);
        (b = O[0]), (w = O[1]);
      } else b = w = _;
      if (r === 'vertical') {
        var E = s.scale,
          $ = m + t,
          A = $ + n,
          P = $ - n,
          C = E(y - b),
          T = E(y + w);
        x.push({ x1: T, y1: A, x2: T, y2: P }),
          x.push({ x1: C, y1: $, x2: T, y2: $ }),
          x.push({ x1: C, y1: A, x2: C, y2: P });
      } else if (r === 'horizontal') {
        var k = l.scale,
          D = p + t,
          j = D - n,
          R = D + n,
          N = k(y - b),
          F = k(y + w);
        x.push({ x1: j, y1: F, x2: R, y2: F }),
          x.push({ x1: D, y1: N, x2: D, y2: F }),
          x.push({ x1: j, y1: N, x2: R, y2: N });
      }
      return g.createElement(
        Dt,
        Ws({ className: 'recharts-errorBar', key: 'bar-'.concat(h) }, u),
        x.map(function (M, Y) {
          return g.createElement('line', Ws({}, M, { key: 'line-'.concat(Y) }));
        })
      );
    });
  return g.createElement(Dt, { className: 'recharts-errorBars' }, f);
}
yp.defaultProps = {
  stroke: 'black',
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: 'horizontal',
};
yp.displayName = 'ErrorBar';
function Lo(e) {
  return (
    typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
      ? (Lo = function (r) {
          return typeof r;
        })
      : (Lo = function (r) {
          return r &&
            typeof Symbol == 'function' &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? 'symbol'
            : typeof r;
        }),
    Lo(e)
  );
}
function uq(e, t) {
  if (e == null) return {};
  var r = fq(e, t),
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
function fq(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    a,
    i;
  for (i = 0; i < n.length; i++)
    (a = n[i]), !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Tf() {
  return (
    (Tf =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    Tf.apply(this, arguments)
  );
}
function oy(e, t) {
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
function xt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? oy(Object(r), !0).forEach(function (n) {
          dq(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : oy(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function dq(e, t, r) {
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
function pq(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function sy(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function hq(e, t, r) {
  return t && sy(e.prototype, t), r && sy(e, r), e;
}
function vq(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && Mf(e, t);
}
function Mf(e, t) {
  return (
    (Mf =
      Object.setPrototypeOf ||
      function (n, a) {
        return (n.__proto__ = a), n;
      }),
    Mf(e, t)
  );
}
function mq(e) {
  var t = bq();
  return function () {
    var n = Us(e),
      a;
    if (t) {
      var i = Us(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else a = n.apply(this, arguments);
    return gq(this, a);
  };
}
function gq(e, t) {
  return t && (Lo(t) === 'object' || typeof t == 'function') ? t : yq(e);
}
function yq(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function bq() {
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
function Us(e) {
  return (
    (Us = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Us(e)
  );
}
var Zi = (function (e) {
  vq(r, e);
  var t = mq(r);
  function r() {
    var n;
    pq(this, r);
    for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return (
      (n = t.call.apply(t, [this].concat(i))),
      (n.state = { isAnimationFinished: !1 }),
      (n.id = Al('recharts-bar-')),
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
    hq(
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
                var u = xt(xt(xt({}, s), l), {}, { index: c });
                return g.createElement(
                  Dt,
                  Tf(
                    { className: 'recharts-bar-rectangle' },
                    Qo(i.props, l, c),
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
            return g.createElement(
              Sa,
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
                  m = o.map(function (y, _) {
                    var x = h && h[_];
                    if (x) {
                      var b = Kn(x.x, y.x),
                        w = Kn(x.y, y.y),
                        O = Kn(x.width, y.width),
                        E = Kn(x.height, y.height);
                      return xt(
                        xt({}, y),
                        {},
                        { x: b(p), y: w(p), width: O(p), height: E(p) }
                      );
                    }
                    if (s === 'horizontal') {
                      var $ = Kn(0, y.height),
                        A = $(p);
                      return xt(
                        xt({}, y),
                        {},
                        { y: y.y + y.height - A, height: A }
                      );
                    }
                    var P = Kn(0, y.width),
                      C = P(p);
                    return xt(xt({}, y), {}, { width: C });
                  });
                return g.createElement(
                  Dt,
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
            return o && i && i.length && (!s || !Ex(s, i))
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
                u = uq(s, ['value', 'background']);
              if (!c) return null;
              var f = xt(
                xt(
                  xt(xt(xt({}, u), {}, { fill: '#eee' }, c), o),
                  Qo(a.props, s, l)
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
              u = _r(c, yp.displayName);
            if (!u) return null;
            var f = l === 'vertical' ? i[0].height / 2 : i[0].width / 2;
            function d(h, v) {
              return { x: h.x, y: h.y, value: h.value, errorVal: Lr(h, v) };
            }
            return u.map(function (h, v) {
              return g.cloneElement(h, {
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
            var y = this.state.isAnimationFinished,
              _ = Ze('recharts-bar', s),
              x = (l && l.allowDataOverflow) || (c && c.allowDataOverflow),
              b = ye(m) ? this.id : m;
            return g.createElement(
              Dt,
              { className: _ },
              x
                ? g.createElement(
                    'defs',
                    null,
                    g.createElement(
                      'clipPath',
                      { id: 'clipPath-'.concat(b) },
                      g.createElement('rect', {
                        x: u,
                        y: f,
                        width: d,
                        height: h,
                      })
                    )
                  )
                : null,
              g.createElement(
                Dt,
                {
                  className: 'recharts-bar-rectangles',
                  clipPath: x ? 'url(#clipPath-'.concat(b, ')') : null,
                },
                p ? this.renderBackground() : null,
                this.renderRectangles()
              ),
              this.renderErrorBar(),
              (!v || y) && qr.renderCallByParent(this.props, o)
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
              g.isValidElement(a)
                ? (o = g.cloneElement(a, i))
                : pe(a)
                ? (o = a(i))
                : (o = g.createElement(zl, i)),
              o
            );
          },
        },
      ]
    ),
    r
  );
})(S.exports.PureComponent);
Zi.displayName = 'Bar';
Zi.defaultProps = {
  xAxisId: 0,
  yAxisId: 0,
  legendType: 'rect',
  minPointSize: 0,
  hide: !1,
  data: [],
  layout: 'vertical',
  isAnimationActive: !cn.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: 'ease',
};
Zi.getComposedData = function (e) {
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
    h = KH(n, r);
  if (!h) return null;
  var v = t.layout,
    p = r.props,
    m = p.dataKey,
    y = p.children,
    _ = p.minPointSize,
    x = v === 'horizontal' ? o : i,
    b = c ? x.scale.domain() : null,
    w = aV({ numericAxis: x }),
    O = _r(y, gx.displayName),
    E = f.map(function ($, A) {
      var P, C, T, k, D, j;
      if (
        (c ? (P = XH(c[u + A], b)) : ((P = Lr($, m)), Me(P) || (P = [w, P])),
        v === 'horizontal')
      ) {
        if (
          ((C = xg({
            axis: i,
            ticks: s,
            bandSize: a,
            offset: h.offset,
            entry: $,
            index: A,
          })),
          (T = o.scale(P[1])),
          (k = h.size),
          (D = o.scale(P[0]) - o.scale(P[1])),
          (j = { x: C, y: o.y, width: k, height: o.height }),
          Math.abs(_) > 0 && Math.abs(D) < Math.abs(_))
        ) {
          var R = sr(D || _) * (Math.abs(_) - Math.abs(D));
          (T -= R), (D += R);
        }
      } else if (
        ((C = i.scale(P[0])),
        (T = xg({
          axis: o,
          ticks: l,
          bandSize: a,
          offset: h.offset,
          entry: $,
          index: A,
        })),
        (k = i.scale(P[1]) - i.scale(P[0])),
        (D = h.size),
        (j = { x: i.x, y: T, width: i.width, height: D }),
        Math.abs(_) > 0 && Math.abs(k) < Math.abs(_))
      ) {
        var N = sr(k || _) * (Math.abs(_) - Math.abs(k));
        k += N;
      }
      return xt(
        xt(
          xt({}, $),
          {},
          {
            x: C,
            y: T,
            width: k,
            height: D,
            value: c ? P : P[1],
            payload: $,
            background: j,
          },
          O && O[A] && O[A].props
        ),
        {},
        {
          tooltipPayload: [L1(r, $)],
          tooltipPosition: { x: C + k / 2, y: T + D / 2 },
        }
      );
    });
  return xt({ data: E, layout: v }, d);
};
var Wl = function () {
  return null;
};
Wl.displayName = 'XAxis';
Wl.defaultProps = {
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
var Ul = function () {
  return null;
};
Ul.displayName = 'YAxis';
Ul.defaultProps = {
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
var xq = yn,
  wq = Ui,
  _q = bl;
function Oq(e) {
  return function (t, r, n) {
    var a = Object(t);
    if (!wq(t)) {
      var i = xq(r);
      (t = _q(t)),
        (r = function (s) {
          return i(a[s], s, a);
        });
    }
    var o = e(t, r, n);
    return o > -1 ? a[i ? t[o] : o] : void 0;
  };
}
var Sq = Oq,
  Eq = H1;
function $q(e) {
  var t = Eq(e),
    r = t % 1;
  return t === t ? (r ? t - r : t) : 0;
}
var Aq = $q,
  Cq = T0,
  Pq = yn,
  kq = Aq,
  Tq = Math.max;
function Mq(e, t, r) {
  var n = e == null ? 0 : e.length;
  if (!n) return -1;
  var a = r == null ? 0 : kq(r);
  return a < 0 && (a = Tq(n + a, 0)), Cq(e, Pq(t), a);
}
var Iq = Mq,
  Rq = Sq,
  Dq = Iq,
  jq = Rq(Dq),
  Nq = jq,
  Lq = dx,
  Bq = rr,
  Fq = 'Expected a function';
function zq(e, t, r) {
  var n = !0,
    a = !0;
  if (typeof e != 'function') throw new TypeError(Fq);
  return (
    Bq(r) &&
      ((n = 'leading' in r ? !!r.leading : n),
      (a = 'trailing' in r ? !!r.trailing : a)),
    Lq(e, t, { leading: n, maxWait: t, trailing: a })
  );
}
var Wq = zq,
  Uq = mn,
  Hq = gn,
  Vq = '[object Boolean]';
function Gq(e) {
  return e === !0 || e === !1 || (Hq(e) && Uq(e) == Vq);
}
var qq = Gq,
  If = function (t, r, n, a, i) {
    var o = _r(t, mp.displayName),
      s = _r(t, Xi.displayName),
      l = o.concat(s),
      c = _r(t, Ji.displayName),
      u = ''.concat(a, 'Id'),
      f = a[0],
      d = r;
    if (
      (l.length &&
        (d = l.reduce(function (p, m) {
          if (
            m.props[u] === n &&
            Rr(m.props, 'extendDomain') &&
            K(m.props[f])
          ) {
            var y = m.props[f];
            return [Math.min(p[0], y), Math.max(p[1], y)];
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
          Rr(m.props, 'extendDomain') &&
          K(m.props[h]) &&
          K(m.props[v])
        ) {
          var y = m.props[h],
            _ = m.props[v];
          return [Math.min(p[0], y, _), Math.max(p[1], y, _)];
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
  K1 = { exports: {} };
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
        y = arguments.length,
        _,
        x;
      if (m.fn) {
        switch ((m.once && this.removeListener(c, m.fn, void 0, !0), y)) {
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
        for (x = 1, _ = new Array(y - 1); x < y; x++) _[x - 1] = arguments[x];
        m.fn.apply(m.context, _);
      } else {
        var b = m.length,
          w;
        for (x = 0; x < b; x++)
          switch (
            (m[x].once && this.removeListener(c, m[x].fn, void 0, !0), y)
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
                for (w = 1, _ = new Array(y - 1); w < y; w++)
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
        for (var p = 0, m = [], y = v.length; p < y; p++)
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
})(K1);
const Yq = K1.exports;
var Xt = new Yq();
Xt.setMaxListeners && Xt.setMaxListeners(10);
var zc = 'recharts.syncMouseEvents';
function Bo(e) {
  return (
    typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
      ? (Bo = function (r) {
          return typeof r;
        })
      : (Bo = function (r) {
          return r &&
            typeof Symbol == 'function' &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? 'symbol'
            : typeof r;
        }),
    Bo(e)
  );
}
function ly(e, t) {
  return Jq(e) || Xq(e, t) || X1(e, t) || Kq();
}
function Kq() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Xq(e, t) {
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
function Jq(e) {
  if (Array.isArray(e)) return e;
}
function ia() {
  return (
    (ia =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }),
    ia.apply(this, arguments)
  );
}
function cy(e, t) {
  if (e == null) return {};
  var r = Zq(e, t),
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
function Zq(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    a,
    i;
  for (i = 0; i < n.length; i++)
    (a = n[i]), !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Qq(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function uy(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function eY(e, t, r) {
  return t && uy(e.prototype, t), r && uy(e, r), e;
}
function tY(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && Rf(e, t);
}
function Rf(e, t) {
  return (
    (Rf =
      Object.setPrototypeOf ||
      function (n, a) {
        return (n.__proto__ = a), n;
      }),
    Rf(e, t)
  );
}
function rY(e) {
  var t = aY();
  return function () {
    var n = Hs(e),
      a;
    if (t) {
      var i = Hs(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else a = n.apply(this, arguments);
    return nY(this, a);
  };
}
function nY(e, t) {
  return t && (Bo(t) === 'object' || typeof t == 'function') ? t : Df(e);
}
function Df(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function aY() {
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
function Hs(e) {
  return (
    (Hs = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    Hs(e)
  );
}
function Ca(e) {
  return sY(e) || oY(e) || X1(e) || iY();
}
function iY() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function X1(e, t) {
  if (!!e) {
    if (typeof e == 'string') return jf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === 'Object' && e.constructor && (r = e.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return jf(e, t);
  }
}
function oY(e) {
  if (typeof Symbol < 'u' && Symbol.iterator in Object(e)) return Array.from(e);
}
function sY(e) {
  if (Array.isArray(e)) return jf(e);
}
function jf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function fy(e, t) {
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
function W(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? fy(Object(r), !0).forEach(function (n) {
          Jt(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : fy(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function Jt(e, t, r) {
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
var lY = { xAxis: ['bottom', 'top'], yAxis: ['left', 'right'] },
  J1 = { x: 0, y: 0 },
  cY = Number.isFinite ? Number.isFinite : isFinite,
  dy =
    typeof requestAnimationFrame == 'function'
      ? requestAnimationFrame
      : typeof setImmediate == 'function'
      ? setImmediate
      : setTimeout,
  py =
    typeof cancelAnimationFrame == 'function'
      ? cancelAnimationFrame
      : typeof clearImmediate == 'function'
      ? clearImmediate
      : clearTimeout,
  uY = function (t, r) {
    return r === 'horizontal'
      ? t.x
      : r === 'vertical'
      ? t.y
      : r === 'centric'
      ? t.angle
      : t.radius;
  },
  fY = function (t, r, n, a) {
    var i = r.find(function (u) {
      return u && u.index === n;
    });
    if (i) {
      if (t === 'horizontal') return { x: i.coordinate, y: a.y };
      if (t === 'vertical') return { x: a.x, y: i.coordinate };
      if (t === 'centric') {
        var o = i.coordinate,
          s = a.radius;
        return W(
          W(W({}, a), kt(a.cx, a.cy, s, o)),
          {},
          { angle: o, radius: s }
        );
      }
      var l = i.coordinate,
        c = a.angle;
      return W(W(W({}, a), kt(a.cx, a.cy, l, c)), {}, { angle: c, radius: l });
    }
    return J1;
  },
  Hl = function (t, r, n) {
    var a = r.graphicalItems,
      i = r.dataStartIndex,
      o = r.dataEndIndex,
      s = (a || []).reduce(function (l, c) {
        var u = c.props.data;
        return u && u.length ? [].concat(Ca(l), Ca(u)) : l;
      }, []);
    return s && s.length > 0
      ? s
      : n && n.props && n.props.data && n.props.data.length > 0
      ? n.props.data
      : t && t.length && K(i) && K(o)
      ? t.slice(i, o + 1)
      : [];
  },
  Z1 = function (t, r, n, a) {
    var i = t.graphicalItems,
      o = t.tooltipAxis,
      s = Hl(r, t);
    return n < 0 || !i || !i.length || n >= s.length
      ? null
      : i.reduce(function (l, c) {
          var u = c.props.hide;
          if (u) return l;
          var f = c.props.data,
            d;
          if (o.dataKey && !o.allowDuplicatedCategory) {
            var h = f === void 0 ? s : f;
            d = Su(h, o.dataKey, a);
          } else d = (f && f[n]) || s[n];
          return d ? [].concat(Ca(l), [L1(c, d)]) : l;
        }, []);
  },
  hy = function (t, r, n, a) {
    var i = a || { x: t.chartX, y: t.chartY },
      o = uY(i, n),
      s = t.orderedTooltipTicks,
      l = t.tooltipAxis,
      c = t.tooltipTicks,
      u = zH(o, s, c, l);
    if (u >= 0 && c) {
      var f = c[u] && c[u].value,
        d = Z1(t, r, u, f),
        h = fY(n, s, u, i);
      return {
        activeTooltipIndex: u,
        activeLabel: f,
        activePayload: d,
        activeCoordinate: h,
      };
    }
    return null;
  },
  dY = function (t, r) {
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
      h = D1(u, i),
      v = n.reduce(function (p, m) {
        var y = m.props,
          _ = y.type,
          x = y.dataKey,
          b = y.allowDataOverflow,
          w = y.allowDuplicatedCategory,
          O = y.scale,
          E = y.ticks,
          $ = m.props[o],
          A = Hl(t.data, {
            graphicalItems: a.filter(function (F) {
              return F.props[o] === $;
            }),
            dataStartIndex: l,
            dataEndIndex: c,
          }),
          P = A.length;
        if (!p[$]) {
          var C, T, k;
          if (x) {
            if (((C = As(A, x, _)), _ === 'category' && h)) {
              var D = I5(C);
              w && D
                ? ((T = C), (C = Ns(0, P)))
                : w ||
                  (C = Og(m.props.domain, C, m).reduce(function (F, M) {
                    return F.indexOf(M) >= 0 ? F : [].concat(Ca(F), [M]);
                  }, []));
            } else if (_ === 'category')
              w
                ? (C = C.filter(function (F) {
                    return F !== '' && !ye(F);
                  }))
                : (C = Og(m.props.domain, C, m).reduce(function (F, M) {
                    return F.indexOf(M) >= 0 || M === '' || ye(M)
                      ? F
                      : [].concat(Ca(F), [M]);
                  }, []));
            else if (_ === 'number') {
              var j = GH(
                A,
                a.filter(function (F) {
                  return F.props[o] === $ && !F.props.hide;
                }),
                x,
                i,
                u
              );
              j && (C = j);
            }
            h && (_ === 'number' || O !== 'auto') && (k = As(A, x, 'category'));
          } else
            h
              ? (C = Ns(0, P))
              : s && s[$] && s[$].hasStack && _ === 'number'
              ? (C = d === 'expand' ? [0, 1] : j1(s[$].stackGroups, l, c))
              : (C = R1(
                  A,
                  a.filter(function (F) {
                    return F.props[o] === $ && !F.props.hide;
                  }),
                  _,
                  u,
                  !0
                ));
          if (_ === 'number')
            (C = If(f, C, $, i, E)),
              m.props.domain && (C = N1(m.props.domain, C, b));
          else if (_ === 'category' && m.props.domain) {
            var R = m.props.domain,
              N = C.every(function (F) {
                return R.indexOf(F) >= 0;
              });
            N && (C = R);
          }
          return W(
            W({}, p),
            {},
            Jt(
              {},
              $,
              W(
                W({}, m.props),
                {},
                {
                  axisType: i,
                  domain: C,
                  categoricalDomain: k,
                  duplicateDomain: T,
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
  pY = function (t, r) {
    var n = r.graphicalItems,
      a = r.Axis,
      i = r.axisType,
      o = r.axisIdKey,
      s = r.stackGroups,
      l = r.dataStartIndex,
      c = r.dataEndIndex,
      u = t.layout,
      f = t.children,
      d = Hl(t.data, { graphicalItems: n, dataStartIndex: l, dataEndIndex: c }),
      h = d.length,
      v = D1(u, i),
      p = -1,
      m = n.reduce(function (y, _) {
        var x = _.props[o];
        if (!y[x]) {
          p++;
          var b;
          return (
            v
              ? (b = Ns(0, h))
              : s && s[x] && s[x].hasStack
              ? ((b = j1(s[x].stackGroups, l, c)), (b = If(f, b, x, i)))
              : ((b = N1(
                  a.defaultProps.domain,
                  R1(
                    d,
                    n.filter(function (w) {
                      return w.props[o] === x && !w.props.hide;
                    }),
                    'number',
                    u
                  ),
                  a.defaultProps.allowDataOverflow
                )),
                (b = If(f, b, x, i))),
            W(
              W({}, y),
              {},
              Jt(
                {},
                x,
                W(
                  W({ axisType: i }, a.defaultProps),
                  {},
                  {
                    hide: !0,
                    orientation: er(lY, ''.concat(i, '.').concat(p % 2), null),
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
        return y;
      }, {});
    return m;
  },
  hY = function (t, r) {
    var n = r.axisType,
      a = n === void 0 ? 'xAxis' : n,
      i = r.AxisComp,
      o = r.graphicalItems,
      s = r.stackGroups,
      l = r.dataStartIndex,
      c = r.dataEndIndex,
      u = t.children,
      f = ''.concat(a, 'Id'),
      d = _r(u, i),
      h = {};
    return (
      d && d.length
        ? (h = dY(t, {
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
          (h = pY(t, {
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
  vY = function (t) {
    var r = rn(t),
      n = nn(r, !1, !0);
    return {
      tooltipTicks: n,
      orderedTooltipTicks: Ud(n, function (a) {
        return a.coordinate;
      }),
      tooltipAxis: r,
      tooltipAxisBandSize: Cs(r, n),
    };
  },
  vy = function (t) {
    var r = t.children,
      n = t.defaultShowTooltip,
      a = Ur(r, Di.displayName),
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
      isTooltipActive: ye(n) ? !1 : n,
    };
  },
  mY = function (t) {
    return !t || !t.length
      ? !1
      : t.some(function (r) {
          var n = un(r && r.type);
          return n && n.indexOf('Bar') >= 0;
        });
  },
  my = function (t) {
    return t === 'horizontal'
      ? { numericAxisName: 'yAxis', cateAxisName: 'xAxis' }
      : t === 'vertical'
      ? { numericAxisName: 'xAxis', cateAxisName: 'yAxis' }
      : t === 'centric'
      ? { numericAxisName: 'radiusAxis', cateAxisName: 'angleAxis' }
      : { numericAxisName: 'angleAxis', cateAxisName: 'radiusAxis' };
  },
  gY = function (t, r) {
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
      h = Ur(f, Di.displayName),
      v = Ur(f, $i.displayName),
      p = Object.keys(l).reduce(
        function (x, b) {
          var w = l[b],
            O = w.orientation;
          return !w.mirror && !w.hide
            ? W(W({}, x), {}, Jt({}, O, x[O] + w.width))
            : x;
        },
        { left: d.left || 0, right: d.right || 0 }
      ),
      m = Object.keys(o).reduce(
        function (x, b) {
          var w = o[b],
            O = w.orientation;
          return !w.mirror && !w.hide
            ? W(W({}, x), {}, Jt({}, O, er(x, ''.concat(O)) + w.height))
            : x;
        },
        { top: d.top || 0, bottom: d.bottom || 0 }
      ),
      y = W(W({}, m), p),
      _ = y.bottom;
    return (
      h && (y.bottom += h.props.height || Di.defaultProps.height),
      v && r && (y = HH(y, a, n, r)),
      W(
        W({ brushBottom: _ }, y),
        {},
        { width: c - y.left - y.right, height: u - y.top - y.bottom }
      )
    );
  },
  yY = function (t) {
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
      v = function (y, _) {
        var x = _.graphicalItems,
          b = _.stackGroups,
          w = _.offset,
          O = _.updateId,
          E = _.dataStartIndex,
          $ = _.dataEndIndex,
          A = y.barSize,
          P = y.layout,
          C = y.barGap,
          T = y.barCategoryGap,
          k = y.maxBarSize,
          D = my(P),
          j = D.numericAxisName,
          R = D.cateAxisName,
          N = mY(x),
          F = N && WH({ barSize: A, stackGroups: b }),
          M = [];
        return (
          x.forEach(function (Y, Q) {
            var ne = Hl(y.data, { dataStartIndex: E, dataEndIndex: $ }, Y),
              ve = Y.props,
              Se = ve.dataKey,
              le = ve.maxBarSize,
              Ee = Y.props[''.concat(j, 'Id')],
              it = Y.props[''.concat(R, 'Id')],
              oe = u.reduce(function (te, se) {
                var Ae,
                  we = _[''.concat(se.axisType, 'Map')],
                  me = Y.props[''.concat(se.axisType, 'Id')],
                  fe = we && we[me];
                return W(
                  W({}, te),
                  {},
                  ((Ae = {}),
                  Jt(Ae, se.axisType, fe),
                  Jt(Ae, ''.concat(se.axisType, 'Ticks'), nn(fe)),
                  Ae)
                );
              }, {}),
              U = oe[R],
              ee = oe[''.concat(R, 'Ticks')],
              ie = b && b[Ee] && b[Ee].hasStack && iV(Y, b[Ee].stackGroups),
              L = un(Y.type).indexOf('Bar') >= 0,
              J = Cs(U, ee),
              de = [];
            if (L) {
              var ce,
                Pe,
                ot = ye(le) ? k : le,
                B =
                  (ce =
                    (Pe = Cs(U, ee, !0)) !== null && Pe !== void 0
                      ? Pe
                      : ot) !== null && ce !== void 0
                    ? ce
                    : 0;
              (de = UH({
                barGap: C,
                barCategoryGap: T,
                bandSize: B !== J ? B : J,
                sizeList: F[it],
                maxBarSize: ot,
              })),
                B !== J &&
                  (de = de.map(function (te) {
                    return W(
                      W({}, te),
                      {},
                      {
                        position: W(
                          W({}, te.position),
                          {},
                          { offset: te.position.offset - B / 2 }
                        ),
                      }
                    );
                  }));
            }
            var V = Y && Y.type && Y.type.getComposedData;
            if (V) {
              var q;
              M.push({
                props: W(
                  W(
                    {},
                    V(
                      W(
                        W({}, oe),
                        {},
                        {
                          displayedData: ne,
                          props: y,
                          dataKey: Se,
                          item: Y,
                          bandSize: J,
                          barPosition: de,
                          offset: w,
                          stackedData: ie,
                          layout: P,
                          dataStartIndex: E,
                          dataEndIndex: $,
                        }
                      )
                    )
                  ),
                  {},
                  ((q = { key: Y.key || 'item-'.concat(Q) }),
                  Jt(q, j, oe[j]),
                  Jt(q, R, oe[R]),
                  Jt(q, 'animationId', O),
                  q)
                ),
                childIndex: g8(Y, y.children),
                item: Y,
              });
            }
          }),
          M
        );
      },
      p = function (y, _) {
        var x = y.props,
          b = y.dataStartIndex,
          w = y.dataEndIndex,
          O = y.updateId;
        if (!Pm({ props: x })) return null;
        var E = x.children,
          $ = x.layout,
          A = x.stackOffset,
          P = x.data,
          C = x.reverseStackOrder,
          T = my($),
          k = T.numericAxisName,
          D = T.cateAxisName,
          j = _r(E, i),
          R = tV(P, j, ''.concat(k, 'Id'), ''.concat(D, 'Id'), A, C),
          N = u.reduce(function (ne, ve) {
            var Se = ''.concat(ve.axisType, 'Map');
            return W(
              W({}, ne),
              {},
              Jt(
                {},
                Se,
                hY(
                  x,
                  W(
                    W({}, ve),
                    {},
                    {
                      graphicalItems: j,
                      stackGroups: ve.axisType === k && R,
                      dataStartIndex: b,
                      dataEndIndex: w,
                    }
                  )
                )
              )
            );
          }, {}),
          F = gY(
            W(W({}, N), {}, { props: x, graphicalItems: j }),
            _ == null ? void 0 : _.legendBBox
          );
        Object.keys(N).forEach(function (ne) {
          N[ne] = d(x, N[ne], F, ne.replace('Map', ''), a);
        });
        var M = N[''.concat(D, 'Map')],
          Y = vY(M),
          Q = v(
            x,
            W(
              W({}, N),
              {},
              {
                dataStartIndex: b,
                dataEndIndex: w,
                updateId: O,
                graphicalItems: j,
                stackGroups: R,
                offset: F,
              }
            )
          );
        return W(
          W(
            {
              formattedGraphicalItems: Q,
              graphicalItems: j,
              offset: F,
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
          tY(_, m);
          var y = rY(_);
          function _(x) {
            var b;
            return (
              Qq(this, _),
              (b = y.call(this, x)),
              (b.uniqueChartId = void 0),
              (b.clipPathId = void 0),
              (b.legendInstance = void 0),
              (b.deferId = void 0),
              (b.container = void 0),
              (b.clearDeferId = function () {
                !ye(b.deferId) && py && py(b.deferId), (b.deferId = null);
              }),
              (b.handleLegendBBoxUpdate = function (w) {
                if (w) {
                  var O = b.state,
                    E = O.dataStartIndex,
                    $ = O.dataEndIndex,
                    A = O.updateId;
                  b.setState(
                    W(
                      { legendBBox: w },
                      p(
                        {
                          props: b.props,
                          dataStartIndex: E,
                          dataEndIndex: $,
                          updateId: A,
                        },
                        W(W({}, b.state), {}, { legendBBox: w })
                      )
                    )
                  );
                }
              }),
              (b.handleReceiveSyncEvent = function (w, O, E) {
                var $ = b.props.syncId;
                $ === w &&
                  O !== b.uniqueChartId &&
                  (b.clearDeferId(),
                  (b.deferId = dy && dy(b.applySyncEvent.bind(Df(b), E))));
              }),
              (b.handleBrushChange = function (w) {
                var O = w.startIndex,
                  E = w.endIndex;
                if (
                  O !== b.state.dataStartIndex ||
                  E !== b.state.dataEndIndex
                ) {
                  var $ = b.state.updateId;
                  b.setState(function () {
                    return W(
                      { dataStartIndex: O, dataEndIndex: E },
                      p(
                        {
                          props: b.props,
                          dataStartIndex: O,
                          dataEndIndex: E,
                          updateId: $,
                        },
                        b.state
                      )
                    );
                  }),
                    b.triggerSyncEvent({ dataStartIndex: O, dataEndIndex: E });
                }
              }),
              (b.handleMouseEnter = function (w) {
                var O = b.props.onMouseEnter,
                  E = b.getMouseInfo(w);
                if (E) {
                  var $ = W(W({}, E), {}, { isTooltipActive: !0 });
                  b.setState($), b.triggerSyncEvent($), pe(O) && O($, w);
                }
              }),
              (b.triggeredAfterMouseMove = function (w) {
                var O = b.props.onMouseMove,
                  E = b.getMouseInfo(w),
                  $ = E
                    ? W(W({}, E), {}, { isTooltipActive: !0 })
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
                  E = { isTooltipActive: !1 };
                b.setState(E),
                  b.triggerSyncEvent(E),
                  pe(O) && O(E, w),
                  b.cancelThrottledTriggerAfterMouseMove();
              }),
              (b.handleOuterEvent = function (w) {
                var O = m8(w),
                  E = er(b.props, ''.concat(O));
                if (O && pe(E)) {
                  var $;
                  /.*touch.*/i.test(O)
                    ? ($ = b.getMouseInfo(w.changedTouches[0]))
                    : ($ = b.getMouseInfo(w));
                  var A = E;
                  A($, w);
                }
              }),
              (b.handleClick = function (w) {
                var O = b.props.onClick,
                  E = b.getMouseInfo(w);
                if (E) {
                  var $ = W(W({}, E), {}, { isTooltipActive: !0 });
                  b.setState($), b.triggerSyncEvent($), pe(O) && O($, w);
                }
              }),
              (b.handleMouseDown = function (w) {
                var O = b.props.onMouseDown;
                if (pe(O)) {
                  var E = b.getMouseInfo(w);
                  O(E, w);
                }
              }),
              (b.handleMouseUp = function (w) {
                var O = b.props.onMouseUp;
                if (pe(O)) {
                  var E = b.getMouseInfo(w);
                  O(E, w);
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
                  E = w.width,
                  $ = w.height,
                  A = w.offset;
                return yg(
                  $n.getTicks(
                    W(
                      W(W({}, $n.defaultProps), O),
                      {},
                      {
                        ticks: nn(O, !0),
                        viewBox: { x: 0, y: 0, width: E, height: $ },
                      }
                    )
                  ),
                  A.left,
                  A.left + A.width
                );
              }),
              (b.horizontalCoordinatesGenerator = function (w) {
                var O = w.yAxis,
                  E = w.width,
                  $ = w.height,
                  A = w.offset;
                return yg(
                  $n.getTicks(
                    W(
                      W(W({}, $n.defaultProps), O),
                      {},
                      {
                        ticks: nn(O, !0),
                        viewBox: { x: 0, y: 0, width: E, height: $ },
                      }
                    )
                  ),
                  A.top,
                  A.top + A.height
                );
              }),
              (b.axesTicksGenerator = function (w) {
                return nn(w, !0);
              }),
              (b.renderCursor = function (w) {
                var O = b.state,
                  E = O.isTooltipActive,
                  $ = O.activeCoordinate,
                  A = O.activePayload,
                  P = O.offset,
                  C = O.activeTooltipIndex,
                  T = b.getTooltipEventType();
                if (
                  !w ||
                  !w.props.cursor ||
                  !E ||
                  !$ ||
                  (a !== 'ScatterChart' && T !== 'axis')
                )
                  return null;
                var k = b.props.layout,
                  D,
                  j = mf;
                if (a === 'ScatterChart') (D = $), (j = U1);
                else if (a === 'BarChart')
                  (D = b.getCursorRectangle()), (j = zl);
                else if (k === 'radial') {
                  var R = b.getCursorPoints(),
                    N = R.cx,
                    F = R.cy,
                    M = R.radius,
                    Y = R.startAngle,
                    Q = R.endAngle;
                  (D = {
                    cx: N,
                    cy: F,
                    startAngle: Y,
                    endAngle: Q,
                    innerRadius: M,
                    outerRadius: M,
                  }),
                    (j = z1);
                } else (D = { points: b.getCursorPoints() }), (j = mf);
                var ne = w.key || '_recharts-cursor',
                  ve = W(
                    W(
                      W(W({ stroke: '#ccc', pointerEvents: 'none' }, P), D),
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
                return S.exports.isValidElement(w.props.cursor)
                  ? S.exports.cloneElement(w.props.cursor, ve)
                  : S.exports.createElement(j, ve);
              }),
              (b.renderPolarAxis = function (w, O, E) {
                var $ = er(w, 'type.axisType'),
                  A = er(b.state, ''.concat($, 'Map')),
                  P = A[w.props[''.concat($, 'Id')]];
                return S.exports.cloneElement(
                  w,
                  W(
                    W({}, P),
                    {},
                    {
                      className: $,
                      key: w.key || ''.concat(O, '-').concat(E),
                      ticks: nn(P, !0),
                    }
                  )
                );
              }),
              (b.renderXAxis = function (w, O, E) {
                var $ = b.state.xAxisMap,
                  A = $[w.props.xAxisId];
                return b.renderAxis(A, w, O, E);
              }),
              (b.renderYAxis = function (w, O, E) {
                var $ = b.state.yAxisMap,
                  A = $[w.props.yAxisId];
                return b.renderAxis(A, w, O, E);
              }),
              (b.renderGrid = function (w) {
                var O = b.state,
                  E = O.xAxisMap,
                  $ = O.yAxisMap,
                  A = O.offset,
                  P = b.props,
                  C = P.width,
                  T = P.height,
                  k = rn(E),
                  D = Nq($, function (N) {
                    return G1(N.domain, cY);
                  }),
                  j = D || rn($),
                  R = w.props || {};
                return S.exports.cloneElement(w, {
                  key: w.key || 'grid',
                  x: K(R.x) ? R.x : A.left,
                  y: K(R.y) ? R.y : A.top,
                  width: K(R.width) ? R.width : A.width,
                  height: K(R.height) ? R.height : A.height,
                  xAxis: k,
                  yAxis: j,
                  offset: A,
                  chartWidth: C,
                  chartHeight: T,
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
                  E = O.radialLines,
                  $ = O.polarAngles,
                  A = O.polarRadius,
                  P = b.state,
                  C = P.radiusAxisMap,
                  T = P.angleAxisMap,
                  k = rn(C),
                  D = rn(T),
                  j = D.cx,
                  R = D.cy,
                  N = D.innerRadius,
                  F = D.outerRadius;
                return S.exports.cloneElement(w, {
                  polarAngles: Me($)
                    ? $
                    : nn(D, !0).map(function (M) {
                        return M.coordinate;
                      }),
                  polarRadius: Me(A)
                    ? A
                    : nn(k, !0).map(function (M) {
                        return M.coordinate;
                      }),
                  cx: j,
                  cy: R,
                  innerRadius: N,
                  outerRadius: F,
                  key: w.key || 'polar-grid',
                  radialLines: E,
                });
              }),
              (b.renderLegend = function () {
                var w = b.state.formattedGraphicalItems,
                  O = b.props,
                  E = O.children,
                  $ = O.width,
                  A = O.height,
                  P = b.props.margin || {},
                  C = $ - (P.left || 0) - (P.right || 0),
                  T = M1({
                    children: E,
                    formattedGraphicalItems: w,
                    legendWidth: C,
                    legendContent: f,
                  });
                if (!T) return null;
                var k = T.item,
                  D = cy(T, ['item']);
                return S.exports.cloneElement(
                  k,
                  W(
                    W({}, D),
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
                  O = Ur(w, ra.displayName);
                if (!O) return null;
                var E = b.state,
                  $ = E.isTooltipActive,
                  A = E.activeCoordinate,
                  P = E.activePayload,
                  C = E.activeLabel,
                  T = E.offset;
                return S.exports.cloneElement(O, {
                  viewBox: W(W({}, T), {}, { x: T.left, y: T.top }),
                  active: $,
                  label: C,
                  payload: $ ? P : [],
                  coordinate: A,
                });
              }),
              (b.renderBrush = function (w) {
                var O = b.props,
                  E = O.margin,
                  $ = O.data,
                  A = b.state,
                  P = A.offset,
                  C = A.dataStartIndex,
                  T = A.dataEndIndex,
                  k = A.updateId;
                return S.exports.cloneElement(w, {
                  key: w.key || '_recharts-brush',
                  onChange: vo(b.handleBrushChange, null, w.props.onChange),
                  data: $,
                  x: K(w.props.x) ? w.props.x : P.left,
                  y: K(w.props.y)
                    ? w.props.y
                    : P.top + P.height + P.brushBottom - (E.bottom || 0),
                  width: K(w.props.width) ? w.props.width : P.width,
                  startIndex: C,
                  endIndex: T,
                  updateId: 'brush-'.concat(k),
                });
              }),
              (b.renderReferenceElement = function (w, O, E) {
                if (!w) return null;
                var $ = Df(b),
                  A = $.clipPathId,
                  P = b.state,
                  C = P.xAxisMap,
                  T = P.yAxisMap,
                  k = P.offset,
                  D = w.props,
                  j = D.xAxisId,
                  R = D.yAxisId;
                return S.exports.cloneElement(w, {
                  key: w.key || ''.concat(O, '-').concat(E),
                  xAxis: C[j],
                  yAxis: T[R],
                  viewBox: {
                    x: k.left,
                    y: k.top,
                    width: k.width,
                    height: k.height,
                  },
                  clipPathId: A,
                });
              }),
              (b.renderActivePoints = function (w) {
                var O = w.item,
                  E = w.activePoint,
                  $ = w.basePoint,
                  A = w.childIndex,
                  P = w.isRange,
                  C = [],
                  T = O.props.key,
                  k = O.item.props,
                  D = k.activeDot,
                  j = k.dataKey,
                  R = W(
                    W(
                      {
                        index: A,
                        dataKey: j,
                        cx: E.x,
                        cy: E.y,
                        r: 4,
                        fill: pp(O.item),
                        strokeWidth: 2,
                        stroke: '#fff',
                        payload: E.payload,
                        value: E.value,
                        key: ''.concat(T, '-activePoint-').concat(A),
                      },
                      ze(D)
                    ),
                    Zo(D)
                  );
                return (
                  C.push(_.renderActiveDot(D, R)),
                  $
                    ? C.push(
                        _.renderActiveDot(
                          D,
                          W(
                            W({}, R),
                            {},
                            {
                              cx: $.x,
                              cy: $.y,
                              key: ''.concat(T, '-basePoint-').concat(A),
                            }
                          )
                        )
                      )
                    : P && C.push(null),
                  C
                );
              }),
              (b.renderGraphicChild = function (w, O, E) {
                var $ = b.filterFormatItem(w, O, E);
                if (!$) return null;
                var A = b.getTooltipEventType(),
                  P = b.state,
                  C = P.isTooltipActive,
                  T = P.tooltipAxis,
                  k = P.activeTooltipIndex,
                  D = P.activeLabel,
                  j = b.props.children,
                  R = Ur(j, ra.displayName),
                  N = $.props,
                  F = N.points,
                  M = N.isRange,
                  Y = N.baseLine,
                  Q = $.item.props,
                  ne = Q.activeDot,
                  ve = Q.hide,
                  Se = !ve && C && R && ne && k >= 0,
                  le = {};
                A !== 'axis' && R && R.props.trigger === 'click'
                  ? (le = {
                      onClick: vo(
                        b.handleItemMouseEnter,
                        null,
                        w.props.onCLick
                      ),
                    })
                  : A !== 'axis' &&
                    (le = {
                      onMouseLeave: vo(
                        b.handleItemMouseLeave,
                        null,
                        w.props.onMouseLeave
                      ),
                      onMouseEnter: vo(
                        b.handleItemMouseEnter,
                        null,
                        w.props.onMouseEnter
                      ),
                    });
                var Ee = S.exports.cloneElement(w, W(W({}, $.props), le));
                function it(ie) {
                  return typeof T.dataKey == 'function'
                    ? T.dataKey(ie.payload)
                    : null;
                }
                if (Se) {
                  var oe, U;
                  if (T.dataKey && !T.allowDuplicatedCategory) {
                    var ee =
                      typeof T.dataKey == 'function'
                        ? it
                        : 'payload.'.concat(T.dataKey.toString());
                    (oe = Su(F, ee, D)), (U = M && Y && Su(Y, ee, D));
                  } else (oe = F[k]), (U = M && Y && Y[k]);
                  if (!ye(oe))
                    return [Ee].concat(
                      Ca(
                        b.renderActivePoints({
                          item: $,
                          activePoint: oe,
                          basePoint: U,
                          childIndex: k,
                          isRange: M,
                        })
                      )
                    );
                }
                return M ? [Ee, null, null] : [Ee, null];
              }),
              (b.renderCustomized = function (w, O, E) {
                return S.exports.cloneElement(
                  w,
                  W(
                    W({ key: 'recharts-customized-'.concat(E) }, b.props),
                    b.state
                  )
                );
              }),
              (b.uniqueChartId = ye(x.id) ? Al('recharts') : x.id),
              (b.clipPathId = ''.concat(b.uniqueChartId, '-clip')),
              x.throttleDelay &&
                (b.triggeredAfterMouseMove = Wq(
                  b.triggeredAfterMouseMove,
                  x.throttleDelay
                )),
              (b.state = {}),
              b
            );
          }
          return (
            eY(_, [
              {
                key: 'componentDidMount',
                value: function () {
                  ye(this.props.syncId) || this.addListener();
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (b) {
                  ye(b.syncId) && !ye(this.props.syncId) && this.addListener(),
                    !ye(b.syncId) &&
                      ye(this.props.syncId) &&
                      this.removeListener();
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  this.clearDeferId(),
                    ye(this.props.syncId) || this.removeListener(),
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
                  var b = Ur(this.props.children, ra.displayName);
                  if (b && qq(b.props.shared)) {
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
                  var w = KW(this.container),
                    O = XW(b, w),
                    E = this.inRange(O.chartX, O.chartY);
                  if (!E) return null;
                  var $ = this.state,
                    A = $.xAxisMap,
                    P = $.yAxisMap,
                    C = this.getTooltipEventType();
                  if (C !== 'axis' && A && P) {
                    var T = rn(A).scale,
                      k = rn(P).scale,
                      D = T && T.invert ? T.invert(O.chartX) : null,
                      j = k && k.invert ? k.invert(O.chartY) : null;
                    return W(W({}, O), {}, { xValue: D, yValue: j });
                  }
                  var R = hy(this.state, this.props.data, this.props.layout, E);
                  return R ? W(W({}, O), R) : null;
                },
              },
              {
                key: 'getCursorRectangle',
                value: function () {
                  var b = this.props.layout,
                    w = this.state,
                    O = w.activeCoordinate,
                    E = w.offset,
                    $ = w.tooltipAxisBandSize,
                    A = $ / 2;
                  return {
                    stroke: 'none',
                    fill: '#ccc',
                    x: b === 'horizontal' ? O.x - A : E.left + 0.5,
                    y: b === 'horizontal' ? E.top + 0.5 : O.y - A,
                    width: b === 'horizontal' ? $ : E.width - 1,
                    height: b === 'horizontal' ? E.height - 1 : $,
                  };
                },
              },
              {
                key: 'getCursorPoints',
                value: function () {
                  var b = this.props.layout,
                    w = this.state,
                    O = w.activeCoordinate,
                    E = w.offset,
                    $,
                    A,
                    P,
                    C;
                  if (b === 'horizontal')
                    ($ = O.x), (P = $), (A = E.top), (C = E.top + E.height);
                  else if (b === 'vertical')
                    (A = O.y), (C = A), ($ = E.left), (P = E.left + E.width);
                  else if (!ye(O.cx) || !ye(O.cy))
                    if (b === 'centric') {
                      var T = O.cx,
                        k = O.cy,
                        D = O.innerRadius,
                        j = O.outerRadius,
                        R = O.angle,
                        N = kt(T, k, D, R),
                        F = kt(T, k, j, R);
                      ($ = N.x), (A = N.y), (P = F.x), (C = F.y);
                    } else {
                      var M = O.cx,
                        Y = O.cy,
                        Q = O.radius,
                        ne = O.startAngle,
                        ve = O.endAngle,
                        Se = kt(M, Y, Q, ne),
                        le = kt(M, Y, Q, ve);
                      return {
                        points: [Se, le],
                        cx: M,
                        cy: Y,
                        radius: Q,
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
                    var E = this.state.offset,
                      $ =
                        b >= E.left &&
                        b <= E.left + E.width &&
                        w >= E.top &&
                        w <= E.top + E.height;
                    return $ ? { x: b, y: w } : null;
                  }
                  var A = this.state,
                    P = A.angleAxisMap,
                    C = A.radiusAxisMap;
                  if (P && C) {
                    var T = rn(P);
                    return $g({ x: b, y: w }, T);
                  }
                  return null;
                },
              },
              {
                key: 'parseEventsOfWrapper',
                value: function () {
                  var b = this.props.children,
                    w = this.getTooltipEventType(),
                    O = Ur(b, ra.displayName),
                    E = {};
                  O &&
                    w === 'axis' &&
                    (O.props.trigger === 'click'
                      ? (E = { onClick: this.handleClick })
                      : (E = {
                          onMouseEnter: this.handleMouseEnter,
                          onMouseMove: this.handleMouseMove,
                          onMouseLeave: this.handleMouseLeave,
                          onTouchMove: this.handleTouchMove,
                          onTouchStart: this.handleTouchStart,
                          onTouchEnd: this.handleTouchEnd,
                        }));
                  var $ = Zo(this.props, this.handleOuterEvent);
                  return W(W({}, $), E);
                },
              },
              {
                key: 'addListener',
                value: function () {
                  Xt.on(zc, this.handleReceiveSyncEvent),
                    Xt.setMaxListeners &&
                      Xt._maxListeners &&
                      Xt.setMaxListeners(Xt._maxListeners + 1);
                },
              },
              {
                key: 'removeListener',
                value: function () {
                  Xt.removeListener(zc, this.handleReceiveSyncEvent),
                    Xt.setMaxListeners &&
                      Xt._maxListeners &&
                      Xt.setMaxListeners(Xt._maxListeners - 1);
                },
              },
              {
                key: 'triggerSyncEvent',
                value: function (b) {
                  var w = this.props.syncId;
                  ye(w) || Xt.emit(zc, w, this.uniqueChartId, b);
                },
              },
              {
                key: 'applySyncEvent',
                value: function (b) {
                  var w = this.props,
                    O = w.layout,
                    E = w.syncMethod,
                    $ = this.state.updateId,
                    A = b.dataStartIndex,
                    P = b.dataEndIndex;
                  if (!ye(b.dataStartIndex) || !ye(b.dataEndIndex))
                    this.setState(
                      W(
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
                  else if (ye(b.activeTooltipIndex)) this.setState(b);
                  else {
                    var C = b.chartX,
                      T = b.chartY,
                      k = b.activeTooltipIndex,
                      D = this.state,
                      j = D.offset,
                      R = D.tooltipTicks;
                    if (!j) return;
                    if (typeof E == 'function') k = E(R, b);
                    else if (E === 'value') {
                      k = -1;
                      for (var N = 0; N < R.length; N++)
                        if (R[N].value === b.activeLabel) {
                          k = N;
                          break;
                        }
                    }
                    var F = W(W({}, j), {}, { x: j.left, y: j.top }),
                      M = Math.min(C, F.x + F.width),
                      Y = Math.min(T, F.y + F.height),
                      Q = R[k] && R[k].value,
                      ne = Z1(this.state, this.props.data, k),
                      ve = R[k]
                        ? {
                            x: O === 'horizontal' ? R[k].coordinate : M,
                            y: O === 'horizontal' ? Y : R[k].coordinate,
                          }
                        : J1;
                    this.setState(
                      W(
                        W({}, b),
                        {},
                        {
                          activeLabel: Q,
                          activeCoordinate: ve,
                          activePayload: ne,
                          activeTooltipIndex: k,
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
                    var E = this.state.formattedGraphicalItems,
                      $ = 0,
                      A = E.length;
                    $ < A;
                    $++
                  ) {
                    var P = E[$];
                    if (
                      P.item === b ||
                      P.props.key === b.key ||
                      (w === un(P.item.type) && O === P.childIndex)
                    )
                      return P;
                  }
                  return null;
                },
              },
              {
                key: 'renderAxis',
                value: function (b, w, O, E) {
                  var $ = this.props,
                    A = $.width,
                    P = $.height;
                  return g.createElement(
                    $n,
                    ia({}, b, {
                      className: 'recharts-'
                        .concat(b.axisType, ' ')
                        .concat(b.axisType),
                      key: w.key || ''.concat(O, '-').concat(E),
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
                    E = w.top,
                    $ = w.height,
                    A = w.width;
                  return g.createElement(
                    'defs',
                    null,
                    g.createElement(
                      'clipPath',
                      { id: b },
                      g.createElement('rect', {
                        x: O,
                        y: E,
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
                        var E = ly(O, 2),
                          $ = E[0],
                          A = E[1];
                        return W(W({}, w), {}, Jt({}, $, A.scale));
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
                        var E = ly(O, 2),
                          $ = E[0],
                          A = E[1];
                        return W(W({}, w), {}, Jt({}, $, A.scale));
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
                    for (var O = 0, E = w.length; O < E; O++) {
                      var $ = w[O],
                        A = $.props,
                        P = $.item,
                        C = un(P.type);
                      if (C === 'Bar') {
                        var T = (A.data || []).find(function (D) {
                          return f7(b, D);
                        });
                        if (T) return { graphicalItem: $, payload: T };
                      } else if (C === 'RadialBar') {
                        var k = (A.data || []).find(function (D) {
                          return $g(b, D);
                        });
                        if (k) return { graphicalItem: $, payload: k };
                      }
                    }
                  return null;
                },
              },
              {
                key: 'render',
                value: function () {
                  var b = this;
                  if (!Pm(this)) return null;
                  var w = this.props,
                    O = w.children,
                    E = w.className,
                    $ = w.width,
                    A = w.height,
                    P = w.style,
                    C = w.compact,
                    T = w.title,
                    k = w.desc,
                    D = cy(w, [
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
                    return g.createElement(
                      au,
                      ia({}, j, { width: $, height: A, title: T, desc: k }),
                      this.renderClipPath(),
                      Tm(O, R)
                    );
                  var N = this.parseEventsOfWrapper();
                  return g.createElement(
                    'div',
                    ia(
                      {
                        className: Ze('recharts-wrapper', E),
                        style: W(
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
                    g.createElement(
                      au,
                      ia({}, j, { width: $, height: A, title: T, desc: k }),
                      this.renderClipPath(),
                      Tm(O, R)
                    ),
                    this.renderLegend(),
                    this.renderTooltip()
                  );
                },
              },
            ]),
            _
          );
        })(S.exports.Component)),
      (r.displayName = a),
      (r.defaultProps = W(
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
      (r.getDerivedStateFromProps = function (m, y) {
        var _ = m.data,
          x = m.children,
          b = m.width,
          w = m.height,
          O = m.layout,
          E = m.stackOffset,
          $ = m.margin;
        if (ye(y.updateId)) {
          var A = vy(m);
          return W(
            W(
              W({}, A),
              {},
              { updateId: 0 },
              p(W(W({ props: m }, A), {}, { updateId: 0 }), y)
            ),
            {},
            {
              prevData: _,
              prevWidth: b,
              prevHeight: w,
              prevLayout: O,
              prevStackOffset: E,
              prevMargin: $,
              prevChildren: x,
            }
          );
        }
        if (
          _ !== y.prevData ||
          b !== y.prevWidth ||
          w !== y.prevHeight ||
          O !== y.prevLayout ||
          E !== y.prevStackOffset ||
          !fa($, y.prevMargin)
        ) {
          var P = vy(m),
            C = {
              chartX: y.chartX,
              chartY: y.chartY,
              isTooltipActive: y.isTooltipActive,
            },
            T = W(W({}, hy(y, _, O)), {}, { updateId: y.updateId + 1 }),
            k = W(W(W({}, P), C), T);
          return W(
            W(W({}, k), p(W({ props: m }, k), y)),
            {},
            {
              prevData: _,
              prevWidth: b,
              prevHeight: w,
              prevLayout: O,
              prevStackOffset: E,
              prevMargin: $,
              prevChildren: x,
            }
          );
        }
        if (!Sx(x, y.prevChildren)) {
          var D = !ye(_),
            j = D ? y.updateId : y.updateId + 1;
          return W(
            W(
              { updateId: j },
              p(W(W({ props: m }, y), {}, { updateId: j }), y)
            ),
            {},
            { prevChildren: x }
          );
        }
        return null;
      }),
      (r.renderActiveDot = function (m, y) {
        var _;
        return (
          S.exports.isValidElement(m)
            ? (_ = S.exports.cloneElement(m, y))
            : pe(m)
            ? (_ = m(y))
            : (_ = g.createElement(W1, y)),
          g.createElement(
            Dt,
            { className: 'recharts-active-dot', key: y.key },
            _
          )
        );
      }),
      n
    );
  },
  bY = yY({
    chartName: 'BarChart',
    GraphicalChild: Zi,
    defaultTooltipEventType: 'axis',
    validateTooltipEventTypes: ['axis', 'item'],
    axisComponents: [
      { axisType: 'xAxis', AxisComp: Wl },
      { axisType: 'yAxis', AxisComp: Ul },
    ],
    formatAxisMap: SG,
  });
const xY = ({ graphData: e, setGraphData: t }) => {
    const { editStockId: r } = Sr(),
      { mode: n } = dt(Xf);
    S.exports.useEffect(() => {
      r &&
        be(
          { method: 'get', url: '/calculated-growth-rates/' + r },
          function (i) {
            i.data.length !== 0 && t(i.data);
          }
        );
    }, [r, t]);
    const a = () => (n === 'dark' ? 'rgb(255,255,255,0.7)' : 'rgb(0,0,0,0.7)');
    return g.createElement(
      g.Fragment,
      null,
      e &&
        g.createElement(
          Ne,
          { component: 'div', sx: { textAlign: 'left', mt: 4 } },
          g.createElement(
            _W,
            { width: '100%', height: 400 },
            g.createElement(
              bY,
              { data: e, margin: { top: 5, right: 30, left: 20, bottom: 5 } },
              g.createElement(gp, { strokeDasharray: '5 5' }),
              g.createElement(Wl, { dataKey: 'year' }),
              g.createElement(
                Ul,
                { dataKey: 'percent', padding: { top: 20, bottom: 20 } },
                g.createElement(Ot, {
                  value: '%',
                  position: 'insideTopLeft',
                  fill: a(),
                })
              ),
              g.createElement(
                Zi,
                { dataKey: 'percent', fill: '#8884d8', isAnimationActive: !1 },
                g.createElement(qr, {
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
  wY = g.memo(xY);
var bp = {},
  _Y = rt.exports;
Object.defineProperty(bp, '__esModule', { value: !0 });
var Qi = (bp.default = void 0),
  OY = _Y(at()),
  SY = nt(),
  EY = (0, OY.default)(
    (0, SY.jsx)('path', {
      d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5.97 4.06L14.09 6l1.41 1.41L16.91 6l1.06 1.06-1.41 1.41 1.41 1.41-1.06 1.06-1.41-1.4-1.41 1.41-1.06-1.06 1.41-1.41-1.41-1.42zm-6.78.66h5v1.5h-5v-1.5zM11.5 16h-2v2H8v-2H6v-1.5h2v-2h1.5v2h2V16zm6.5 1.25h-5v-1.5h5v1.5zm0-2.5h-5v-1.5h5v1.5z',
    }),
    'Calculate'
  );
Qi = bp.default = EY;
const $Y = ({
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
        be({ method: 'delete', url: '/financial-metrics/' + r }, function () {
          t(!1), a(n.filter((s) => s.id !== r));
        });
      };
    return S.exports.createElement(
      ll,
      {
        open: e,
        onClose: i,
        'aria-labelledby': 'alert-dialog-title',
        'aria-describedby': 'alert-dialog-description',
      },
      S.exports.createElement(
        o0,
        { id: 'alert-dialog-title' },
        'Are you really want to delete this year data?'
      ),
      S.exports.createElement(
        cl,
        null,
        S.exports.createElement(St, { onClick: o }, 'Agree'),
        S.exports.createElement(St, { onClick: i }, 'Disagree')
      )
    );
  },
  AY = S.exports.memo($Y),
  CY = ({ years: e }) => {
    const { editStockId: t } = Sr(),
      { stockId: r, disableStep: n } = dt(fr),
      a = Er(),
      [i, o] = S.exports.useState(''),
      [s, l] = S.exports.useState(''),
      [c, u] = S.exports.useState(''),
      [f, d] = S.exports.useState(''),
      [h, v] = S.exports.useState(''),
      [p, m] = S.exports.useState(''),
      [y, _] = S.exports.useState([]),
      [x, b] = S.exports.useState(0),
      [w, O] = S.exports.useState(0),
      [E, $] = S.exports.useState(),
      [A, P] = g.useState(!1),
      [C, T] = g.useState(),
      [k, D] = S.exports.useState({
        year: '',
        EPS: '',
        money_dividend: '',
        stock_dividend: '',
        profit: '',
        ROEA: '',
      }),
      j = () => {
        const M = { ...k };
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
        const Y = y.find((Q) => +Q.year == +i);
        if ((Y && !x) || (x && Y && Y.id !== x)) {
          (M.year = 'This year existed, choose other'), D(M);
          return;
        }
        if ((D(M), r && i && s && h && c && f && p)) {
          const Q = {
            stock_id: r,
            year: +i,
            EPS: +s,
            money_dividend: +c,
            stock_dividend: +f,
            profit: +h,
            ROEA: +p,
          };
          x
            ? be(
                { method: 'put', url: '/financial-metrics/' + x, data: Q },
                function () {
                  const ne = [...y];
                  (ne[y.findIndex((ve) => ve.id === x)] = { id: x, ...Q }),
                    _(ne),
                    R(),
                    b(0),
                    O(0);
                }
              )
            : be(
                { method: 'post', url: '/financial-metrics', data: Q },
                function (ne) {
                  _([...y, { id: +ne.data.id, ...Q }]), R();
                }
              );
        }
      };
    S.exports.useEffect(() => {
      t &&
        be({ method: 'get', url: '/financial-metrics/' + t }, function (M) {
          _(M.data), a(wt(['GrowthRate', !1]));
        });
    }, [t, a]);
    const R = () => {
        o(''), l(''), u(''), d(''), v(''), m('');
      },
      N = () => {
        y.length < 3 &&
          alert('Need at least 3 year records to start calculation'),
          be(
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
      F = (M) => {
        P(!0), T(M);
      };
    return g.createElement(
      g.Fragment,
      null,
      g.createElement(
        lt,
        { variant: 'h5', sx: { textAlign: 'center' } },
        w ? `(Edit Year: ${w})` : ''
      ),
      g.createElement(
        Z,
        { container: !0, spacing: 2 },
        g.createElement(
          Z,
          { item: !0, xs: 12, lg: 4 },
          g.createElement(
            In,
            { fullWidth: !0, error: !!k.year },
            g.createElement(Rn, { id: 'year-label' }, 'Year'),
            g.createElement(
              Dn,
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
              e.map((M) => g.createElement(wr, { value: M, key: M }, M))
            ),
            k.year && g.createElement(gi, null, k.year)
          )
        ),
        g.createElement(
          Z,
          { item: !0, xs: 12, lg: 4 },
          g.createElement(ut, {
            fullWidth: !0,
            label: 'EPS (VND)',
            variant: 'standard',
            disabled: n.GrowthRate,
            name: 'EPS',
            value: s,
            onChange: (M) => l(M.target.value),
            type: 'number',
            error: !!k.EPS,
            helperText: k.EPS,
          })
        ),
        g.createElement(
          Z,
          { item: !0, xs: 12, lg: 4 },
          g.createElement(ut, {
            fullWidth: !0,
            label: 'Money Dividend (VND)',
            variant: 'standard',
            disabled: n.GrowthRate,
            name: 'money_dividend',
            value: c,
            onChange: (M) => u(M.target.value),
            type: 'number',
            error: !!k.money_dividend,
            helperText: k.money_dividend,
          })
        ),
        g.createElement(
          Z,
          { item: !0, xs: 12, lg: 4 },
          g.createElement(ut, {
            fullWidth: !0,
            label: 'Stock Dividend (%)',
            variant: 'standard',
            disabled: n.GrowthRate,
            name: 'stock_dividend',
            value: f,
            onChange: (M) => d(M.target.value),
            type: 'number',
            error: !!k.stock_dividend,
            helperText: k.stock_dividend,
          })
        ),
        g.createElement(
          Z,
          { item: !0, xs: 12, lg: 4 },
          g.createElement(ut, {
            fullWidth: !0,
            label: 'Profit (Billion VND)',
            variant: 'standard',
            disabled: n.GrowthRate,
            name: 'profit',
            value: h,
            onChange: (M) => v(M.target.value),
            type: 'number',
            error: !!k.profit,
            helperText: k.profit,
          })
        ),
        g.createElement(
          Z,
          { item: !0, xs: 12, lg: 4 },
          g.createElement(ut, {
            fullWidth: !0,
            label: 'ROEA',
            variant: 'standard',
            disabled: n.GrowthRate,
            name: 'ROEA',
            value: p,
            onChange: (M) => m(M.target.value),
            type: 'number',
            error: !!k.ROEA,
            helperText: k.ROEA,
          })
        ),
        g.createElement(
          Z,
          { item: !0, xs: 12, sx: { textAlign: 'center' } },
          g.createElement(
            Or,
            {
              color: 'primary',
              size: 'large',
              onClick: j,
              disabled: n.GrowthRate,
            },
            g.createElement(jr, { sx: { fontSize: 50 } })
          )
        )
      ),
      g.createElement(
        pl,
        { component: Br, sx: { mt: 7 } },
        g.createElement(
          ul,
          { sx: { minWidth: 650 } },
          g.createElement(
            hl,
            null,
            g.createElement(
              Wt,
              null,
              g.createElement(ge, null),
              g.createElement(ge, null, 'Year'),
              g.createElement(ge, { align: 'left' }, 'EPS'),
              g.createElement(ge, { align: 'left' }, 'Money Dividend'),
              g.createElement(ge, { align: 'left' }, 'Retained Earning'),
              g.createElement(ge, { align: 'left' }, 'Stock Dividend'),
              g.createElement(ge, { align: 'left' }, 'Profit'),
              g.createElement(ge, { align: 'left' }, 'ROEA')
            )
          ),
          g.createElement(
            dl,
            null,
            y.map((M) =>
              g.createElement(
                Wt,
                {
                  key: M.id,
                  sx: { '&:last-child td, &:last-child th': { border: 0 } },
                },
                g.createElement(
                  ge,
                  { align: 'left' },
                  g.createElement(Zr, {
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
                  g.createElement(zi, {
                    sx: { cursor: 'pointer' },
                    onClick: () => F(M.id),
                  })
                ),
                g.createElement(ge, { align: 'left' }, M.year),
                g.createElement(ge, { align: 'left' }, M.EPS),
                g.createElement(ge, { align: 'left' }, M.money_dividend),
                g.createElement(
                  ge,
                  { align: 'left' },
                  M.EPS - M.money_dividend
                ),
                g.createElement(
                  ge,
                  { align: 'left' },
                  Math.round(M.stock_dividend)
                ),
                g.createElement(ge, { align: 'left' }, Math.round(M.profit)),
                g.createElement(ge, { align: 'left' }, (+M.ROEA).toFixed(2))
              )
            )
          )
        )
      ),
      g.createElement(wY, {
        graphData: E,
        setGraphData: S.exports.useCallback($, [$]),
      }),
      g.createElement(
        Ne,
        { component: 'div', sx: { textAlign: 'center' } },
        g.createElement(
          St,
          {
            variant: 'contained',
            sx: { mt: 4 },
            onClick: N,
            disabled: n.GrowthRate,
          },
          g.createElement(Qi, { sx: { mr: 0.5 } }),
          ' Calculate Growth Rates'
        )
      ),
      g.createElement(AY, {
        open: A,
        setOpen: P,
        id: C,
        tableDatas: y,
        setTableDatas: _,
      })
    );
  },
  PY = ({ years: e }) => {
    const { editStockId: t } = Sr(),
      [r, n] = S.exports.useState(''),
      [a, i] = S.exports.useState(''),
      [o, s] = S.exports.useState(''),
      [l, c] = S.exports.useState(''),
      [u, f] = S.exports.useState(''),
      { stockId: d, disableStep: h } = dt(fr);
    S.exports.useEffect(() => {
      t &&
        be({ method: 'get', url: '/retained-earning/' + t }, function (p) {
          const m = p.data;
          m && (n(m.year_from), i(m.year_to), s(m.value.toString()));
        });
    }, [t]);
    const v = () => {
      c(r ? '' : 'Choose year'),
        f(a ? '' : 'Choose year'),
        +r >= parseInt(a) && c('Choose From Year less than To Year'),
        !l &&
          !u &&
          be(
            {
              method: 'post',
              url: '/calculate-retained-earning',
              data: { stock_id: d, fromYear: r, toYear: a },
            },
            function (p) {
              s(p.data);
            },
            function (p) {
              console.log(p);
            }
          );
    };
    return g.createElement(
      g.Fragment,
      null,
      g.createElement(
        lt,
        { variant: 'h5', sx: { mt: 5 } },
        'Retained earning from ',
        r || '(year)',
        ' to',
        ' ',
        a || '(year)',
        ' : ',
        o
      ),
      g.createElement(
        Z,
        { container: !0, spacing: 0, sx: { textAlign: 'center', mt: 2 } },
        g.createElement(Z, { item: !0, xs: 0, lg: 3 }),
        g.createElement(
          Z,
          { item: !0, xs: 6, lg: 2, sx: { mr: 1, ml: 1 } },
          g.createElement(
            In,
            { fullWidth: !0, error: !!l, sx: { mt: 2 } },
            g.createElement(Rn, { id: 'year-label' }, 'From Year'),
            g.createElement(
              Dn,
              {
                labelId: 'year-label',
                value: r,
                label: 'Year',
                onChange: (p) => n(p.target.value),
                fullWidth: !0,
                variant: 'standard',
                sx: { position: 'relative', mt: 2 },
                disabled: h.GrowthRate,
              },
              e.map((p) => g.createElement(wr, { value: p, key: p }, p))
            ),
            !!l && g.createElement(gi, null, l)
          )
        ),
        g.createElement(
          Z,
          { item: !0, xs: 6, lg: 2, sx: { ml: 1, mr: 1 } },
          g.createElement(
            In,
            { fullWidth: !0, error: !!u, sx: { mt: 2 } },
            g.createElement(Rn, { id: 'year-label' }, 'To Year'),
            g.createElement(
              Dn,
              {
                labelId: 'year-label',
                value: a,
                label: 'Year',
                onChange: (p) => i(p.target.value),
                fullWidth: !0,
                variant: 'standard',
                sx: { position: 'relative', mt: 2 },
                disabled: h.GrowthRate,
              },
              e.map((p) => g.createElement(wr, { value: p, key: p }, p))
            ),
            !!u && g.createElement(gi, null, u)
          )
        ),
        g.createElement(
          Z,
          { item: !0, xs: 6, lg: 2, sx: { textAlign: 'left', ml: 2, mt: 2 } },
          g.createElement(
            St,
            {
              variant: 'contained',
              sx: { mt: 1.5 },
              onClick: v,
              disabled: h.GrowthRate,
            },
            g.createElement(Qi, { sx: { mr: 0.5 } }),
            ' Calculate'
          )
        ),
        g.createElement(Z, { item: !0, xs: 0, lg: 3 })
      )
    );
  },
  kY = ({ years: e }) => {
    const { editStockId: t } = Sr(),
      [r, n] = S.exports.useState(''),
      [a, i] = S.exports.useState(''),
      [o, s] = S.exports.useState(''),
      [l, c] = S.exports.useState(''),
      [u, f] = S.exports.useState(''),
      d = Er(),
      { stockId: h, disableStep: v } = dt(fr);
    S.exports.useEffect(() => {
      t &&
        be({ method: 'get', url: '/chosen-growth-rates/' + t }, function (m) {
          const y = m.data;
          y && (n(y.year_from), i(y.year_to), s(y.value + '%'));
        });
    }, [t]);
    const p = () => {
      c(r ? '' : 'Choose year'),
        f(a ? '' : 'Choose year'),
        +r >= parseInt(a) && c('Choose From Year less than To Year'),
        !l &&
          !u &&
          be(
            {
              method: 'post',
              url: '/calculate-growth-rate-with-chosen-years',
              data: { stock_id: h, fromYear: r, toYear: a },
            },
            function (m) {
              s(m.data + '%'), d(wt(['Assumption', !1]));
            },
            function (m) {
              m.response.status === 404 && (d(ab()), d(iO(m.response.data)));
            }
          );
    };
    return g.createElement(
      Ne,
      { component: 'div', sx: { textAlign: 'center', mt: 5 } },
      g.createElement(
        lt,
        { variant: 'h5' },
        'Decide chosen years to calculate growth rate for this stock.'
      ),
      g.createElement(
        lt,
        { variant: 'h5', sx: { mt: 3 } },
        'Average growth rate from ',
        r || '(year)',
        ' to',
        ' ',
        a || '(year)',
        ' : ',
        o
      ),
      g.createElement(
        Z,
        { container: !0, spacing: 0, sx: { textAlign: 'center', mt: 2 } },
        g.createElement(Z, { item: !0, xs: 0, lg: 3 }),
        g.createElement(
          Z,
          { item: !0, xs: 6, lg: 2, sx: { mr: 1, ml: 1 } },
          g.createElement(
            In,
            { fullWidth: !0, error: !!l, sx: { mt: 2 } },
            g.createElement(Rn, { id: 'year-label' }, 'From Year'),
            g.createElement(
              Dn,
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
              e.map((m) => g.createElement(wr, { value: m, key: m }, m))
            ),
            !!l && g.createElement(gi, null, l)
          )
        ),
        g.createElement(
          Z,
          { item: !0, xs: 6, lg: 2, sx: { ml: 1, mr: 1 } },
          g.createElement(
            In,
            { fullWidth: !0, error: !!u, sx: { mt: 2 } },
            g.createElement(Rn, { id: 'year-label' }, 'To Year'),
            g.createElement(
              Dn,
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
              e.map((m) => g.createElement(wr, { value: m, key: m }, m))
            ),
            !!u && g.createElement(gi, null, u)
          )
        ),
        g.createElement(
          Z,
          { item: !0, xs: 6, lg: 2, sx: { textAlign: 'left', ml: 2, mt: 2 } },
          g.createElement(
            St,
            {
              variant: 'contained',
              sx: { mt: 1.5 },
              onClick: p,
              disabled: v.GrowthRate,
            },
            g.createElement(Qi, { sx: { mr: 0.5 } }),
            ' Calculate'
          )
        ),
        g.createElement(Z, { item: !0, xs: 0, lg: 3 })
      ),
      g.createElement(PY, { years: e })
    );
  },
  TY = () => {
    const { disableStep: e } = dt(fr),
      t = new Date().getFullYear(),
      r = [];
    for (let n = t - 12; n < t; n++) r.push(n);
    return g.createElement(
      Ne,
      {
        sx: { flexGrow: 1, textAlign: 'left', mb: 7 },
        className: e.GrowthRate ? 'disabledText' : '',
      },
      g.createElement(
        ur,
        null,
        g.createElement(lt, { variant: 'h5' }, 'Step 3: Growth rate')
      ),
      g.createElement(CY, { years: S.exports.useMemo(() => r, [r]) }),
      g.createElement(kY, { years: S.exports.useMemo(() => r, [r]) })
    );
  },
  gy = ({ option: e }) => {
    const [t, r] = S.exports.useState(''),
      [n, a] = S.exports.useState(!1),
      [i, o] = S.exports.useState(''),
      [s, l] = S.exports.useState(''),
      [c, u] = S.exports.useState(!1),
      [f, d] = S.exports.useState(''),
      [h, v] = S.exports.useState(!0),
      { stockId: p } = dt(fr),
      { editStockId: m } = Sr(),
      { disableStep: y } = dt(fr);
    S.exports.useEffect(() => {
      m &&
        be(
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
          be({
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
    return g.createElement(
      Z,
      { container: !0, spacing: 0, sx: { textAlign: 'left', mt: 3 } },
      g.createElement(
        Z,
        { item: !0, xs: 2, sx: { borderRight: '1px solid black' } },
        g.createElement(
          lt,
          { variant: 'h6', sx: { position: 'relative', top: 10 } },
          'Option ',
          e
        )
      ),
      g.createElement(
        Z,
        { item: !0, xs: 9 },
        g.createElement(
          Z,
          { container: !0, spacing: 0 },
          g.createElement(
            Z,
            { item: !0, xs: 12, lg: 6 },
            g.createElement(ut, {
              label: 'Growth rate for next 10 years (%)',
              variant: 'standard',
              name: 'next-10',
              type: 'number',
              sx: { width: '90%', ml: 2, bottom: 10 },
              value: t,
              onChange: (x) => r(x.target.value),
              error: n,
              helperText: i,
              disabled: y.Assumption,
            })
          ),
          g.createElement(
            Z,
            { item: !0, xs: 12, lg: 6 },
            g.createElement(ut, {
              label: 'Growth rate for next 10-20 years (%)',
              variant: 'standard',
              name: 'next-10-20',
              type: 'number',
              sx: { width: '90%', ml: 2, bottom: 10 },
              value: s,
              onChange: (x) => l(x.target.value),
              error: c,
              helperText: f,
              disabled: y.Assumption,
            })
          )
        )
      ),
      g.createElement(
        Z,
        { item: !0, xs: 1 },
        g.createElement(
          Or,
          {
            color: 'primary',
            size: 'large',
            onClick: _,
            disabled: y.Assumption,
          },
          g.createElement(jr, { sx: { fontSize: 50 } })
        )
      )
    );
  },
  MY = () => {
    const [e, t] = S.exports.useState(''),
      [r, n] = S.exports.useState(!1),
      { stockId: a, disableStep: i } = dt(fr),
      { editStockId: o } = Sr(),
      s = Er();
    S.exports.useEffect(() => {
      o &&
        be({ method: 'get', url: `/chosen-eps/${o}` }, function (c) {
          const u = c.data;
          t(u.chosen_eps);
        });
    }, [o]);
    const l = () => {
      n(!e),
        be(
          {
            method: 'post',
            url: '/chosen-eps',
            data: { chosen_eps: +e, stock_id: a },
          },
          function () {
            s(wt(['Calculation', !1]));
          }
        );
    };
    return g.createElement(
      Ne,
      { component: 'div' },
      g.createElement(
        lt,
        { variant: 'h6', sx: { mt: 5, display: 'inline-block' } },
        'EPS to calculate stock price:'
      ),
      g.createElement(ut, {
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
      g.createElement(
        Or,
        { color: 'primary', size: 'large', onClick: l, disabled: i.GrowthRate },
        g.createElement(jr, { sx: { fontSize: 50 } })
      )
    );
  },
  IY = () => {
    const { disableStep: e } = dt(fr);
    return g.createElement(
      Ne,
      {
        sx: { flexGrow: 1, textAlign: 'left', mb: 7 },
        className: e.Assumption ? 'disabledText' : '',
      },
      g.createElement(
        ur,
        null,
        g.createElement(lt, { variant: 'h5' }, 'Step 4: Assumption')
      ),
      g.createElement(gy, { option: 1 }),
      g.createElement(gy, { option: 2 }),
      g.createElement(MY, null)
    );
  },
  RY = ({ option: e }) => {
    const [t, r] = S.exports.useState([]);
    return (
      S.exports.useEffect(() => {
        const n = Object.entries(e);
        r(n.filter((a) => Number.isInteger(+a[0])));
      }, [e]),
      g.createElement(
        pl,
        { component: Br, sx: { mt: 4 } },
        g.createElement(
          ul,
          { sx: { minWidth: 650 }, 'aria-label': 'spanning table' },
          g.createElement(
            hl,
            null,
            g.createElement(
              Wt,
              null,
              g.createElement(
                ge,
                { align: 'center', colSpan: 5 },
                g.createElement(lt, { variant: 'h5' }, 'Option: ', e.option)
              )
            ),
            g.createElement(
              Wt,
              null,
              g.createElement(ge, { align: 'left' }, 'Year'),
              g.createElement(ge, { align: 'left' }, 'Discounted Value'),
              g.createElement(ge, { align: 'left' }, 'Future Value'),
              g.createElement(ge, { align: 'left' }, 'Growth Rate'),
              g.createElement(ge, { align: 'left' }, 'Intrinsic Value')
            )
          ),
          g.createElement(
            dl,
            null,
            t.map((n) =>
              g.createElement(
                Wt,
                { key: n[0] },
                g.createElement(ge, { align: 'left' }, n[0]),
                g.createElement(ge, { align: 'left' }, n[1].discounted_value),
                g.createElement(ge, { align: 'left' }, n[1].future_value),
                g.createElement(ge, { align: 'left' }, n[1].growth_rate),
                g.createElement(ge, { align: 'left' }, n[1].intrinsic_value)
              )
            ),
            g.createElement(
              Wt,
              null,
              g.createElement(ge, {
                rowSpan: 4,
                colSpan: 3,
                sx: { border: 'none' },
              }),
              g.createElement(ge, { align: 'left' }, 'Remained Years'),
              g.createElement(
                ge,
                { align: 'left' },
                e.total_remained_years.intrinsic_value
              )
            ),
            g.createElement(
              Wt,
              null,
              g.createElement(ge, { align: 'left' }, 'Total PE'),
              g.createElement(ge, { align: 'left' }, e.total_pe)
            ),
            g.createElement(
              Wt,
              null,
              g.createElement(ge, { align: 'left' }, 'Chosen EPS'),
              g.createElement(ge, { align: 'left' }, e.chosen_eps)
            ),
            g.createElement(
              Wt,
              { sx: { '&:last-child td, &:last-child th': { border: 0 } } },
              g.createElement(ge, { align: 'left' }, 'Intrinsic Price'),
              g.createElement(ge, { align: 'left' }, e.intrinsic_price)
            )
          )
        )
      )
    );
  },
  DY = () => {
    const [e, t] = S.exports.useState([]),
      { stockId: r, disableStep: n } = dt(fr),
      { editStockId: a } = Sr(),
      i = () => {
        be(
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
      S.exports.useEffect(() => {
        a &&
          r &&
          be(
            { method: 'get', url: '/intrinsic-value-calculation/' + r },
            function (o) {
              const s = o.data;
              t(s);
            }
          );
      }, [a, r]),
      g.createElement(
        Ne,
        {
          component: 'div',
          sx: { flexGrow: 1, textAlign: 'left', mb: 7 },
          className: n.Calculation ? 'disabledText' : '',
        },
        g.createElement(
          ur,
          null,
          g.createElement(lt, { variant: 'h5' }, 'Step 5: Calculation')
        ),
        g.createElement(
          Ne,
          { component: 'div', sx: { textAlign: 'center' } },
          g.createElement(
            St,
            {
              variant: 'contained',
              sx: { mt: 4 },
              onClick: i,
              disabled: n.Calculation,
            },
            g.createElement(Qi, { sx: { mr: 0.5 } }),
            'Calculate Intrinsic Stock Value'
          )
        ),
        e.map((o) => g.createElement(RY, { option: o, key: o.option }))
      )
    );
  },
  jY = ({ tenet: e, stockHasTenets: t }) => {
    const { stockId: r, disableStep: n } = dt(fr),
      [a, i] = S.exports.useState(!1),
      { editStockId: o } = Sr(),
      [s, l] = S.exports.useState('');
    S.exports.useEffect(() => {
      if (t && o) {
        const f = t.filter((d) => d.tenet_id === e.id);
        f[0] && f[0].value && i(!0), f[0] && f[0].note && l(f[0].note);
      }
    }, [o, t, e.id]);
    const c = (f) => {
        const d = f.target.getAttribute('name'),
          h = { tenet_id: d ? +d : null, stock_id: r, value: a ? 0 : 1 };
        d &&
          be(
            { method: 'post', url: '/stock-has-tenets', data: h },
            function () {
              i(!a);
            }
          );
      },
      u = () => {
        s &&
          be({
            method: 'post',
            url: '/stock-has-tenets/note',
            data: { note: s, stock_id: r, tenet_id: e.id },
          });
      };
    return g.createElement(
      g.Fragment,
      null,
      g.createElement(
        Z,
        { item: !0, xs: 12, lg: 6 },
        g.createElement(Iw, {
          control: g.createElement(Rw, null),
          label: e.description,
          name: '' + e.id,
          onChange: c,
          checked: a,
          disabled: n.CheckTenets,
          sx: { mt: 2 },
        })
      ),
      g.createElement(
        Z,
        { item: !0, xs: 12, lg: 6 },
        g.createElement(ut, {
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
  NY = ({ tenets: e, type: t, index: r, count: n, stockHasTenets: a }) =>
    g.createElement(
      Z,
      { container: !0 },
      g.createElement(
        Z,
        { item: !0, xs: 2, sx: { position: 'relative' } },
        g.createElement(
          lt,
          { variant: 'body1', className: 'vertical-center' },
          t
        )
      ),
      g.createElement(
        Z,
        { item: !0, xs: 10 },
        g.createElement(
          Z,
          { container: !0 },
          e.map((i) =>
            g.createElement(jY, { key: i.id, tenet: i, stockHasTenets: a })
          )
        )
      ),
      r !== n - 1 && g.createElement(ur, { sx: { width: '100%', mb: 2 } })
    ),
  LY = () => {
    const [e, t] = S.exports.useState(),
      [r, n] = S.exports.useState(),
      { stockId: a, disableStep: i } = dt(fr),
      [o, s] = S.exports.useState(),
      { editStockId: l } = Sr();
    return (
      S.exports.useEffect(() => {
        be({ method: 'get', url: '/tenets' }, function (c) {
          const u = c.data;
          t(u);
        }),
          be({ method: 'get', url: '/tenet-types' }, function (c) {
            const u = c.data;
            n(u);
          });
      }, []),
      S.exports.useEffect(() => {
        a &&
          l &&
          be({ method: 'get', url: '/stock-has-tenets/' + l }, function (c) {
            const u = c.data;
            s(u);
          });
      }, [l, a]),
      g.createElement(
        Ne,
        {
          className: i.CheckTenets ? 'disabledText' : '',
          sx: { flexGrow: 1, textAlign: 'left', mb: 7, mt: 4 },
        },
        g.createElement(
          ur,
          null,
          g.createElement(lt, { variant: 'h5' }, 'Step 2: Check Tenets')
        ),
        e &&
          Object.keys(e).map((c, u) =>
            g.createElement(NY, {
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
  yy = () => {
    const { editStockId: e } = Sr(),
      t = Er();
    return (
      S.exports.useEffect(() => {
        e
          ? (t(Xc(+e)),
            t(wt(['CheckTenets', !1])),
            t(wt(['GrowthRate', !1])),
            t(wt(['Assumption', !1])),
            t(wt(['Calculation', !1])))
          : (t(Xc(void 0)),
            t(wt(['CompanyInfo', !1])),
            t(wt(['CheckTenets', !0])),
            t(wt(['GrowthRate', !0])),
            t(wt(['Assumption', !0])),
            t(wt(['Calculation', !0])));
      }, []),
      g.createElement(
        'div',
        { style: { width: '100%', textAlign: 'center' } },
        g.createElement(Uk, null),
        g.createElement(LY, null),
        g.createElement(TY, null),
        g.createElement(IY, null),
        g.createElement(DY, null)
      )
    );
  },
  BY = () => {
    const [e, t] = S.exports.useState(''),
      [r, n] = S.exports.useState(!1),
      a = dt(eb),
      i = Er();
    S.exports.useEffect(() => {
      t(a);
    }, [a]);
    const o = () => {
      if (!e) {
        n(!0);
        return;
      }
      be(
        { method: 'post', url: '/store-discount-rate', data: { value: e } },
        function (s) {
          const l = s.data;
          i(Qy(l.value));
        }
      );
    };
    return g.createElement(
      Ne,
      { component: 'div', sx: { mt: 3 } },
      g.createElement(ut, {
        variant: 'standard',
        label: 'Enter Discount Rate(%)',
        type: 'number',
        sx: { width: 200 },
        value: e,
        onChange: (s) => t(s.target.value),
        error: r,
      }),
      g.createElement(
        Or,
        { color: 'primary', size: 'large', onClick: o },
        g.createElement(jr, { sx: { fontSize: 50 } })
      )
    );
  },
  by = ({ handleEdit: e, tenet: t, handleDelete: r, total: n }) => {
    const [a, i] = g.useState(''),
      o = [];
    for (let l = 1; l <= n; l++) o.push(l);
    S.exports.useEffect(() => {
      i(t.order.toString());
    }, [t]);
    const s = (l) => {
      i(l.target.value),
        be(
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
    return g.createElement(
      g.Fragment,
      null,
      g.createElement(
        In,
        { sx: { display: 'inline-block' } },
        g.createElement(Rn, { id: 'demo-simple-select-label' }, 'Ord'),
        g.createElement(
          Dn,
          {
            labelId: 'demo-simple-select-label',
            id: 'demo-simple-select',
            value: a,
            label: 'Order',
            onChange: s,
            sx: { width: 70 },
          },
          o && o.map((l) => g.createElement(wr, { value: l, key: l }, l))
        )
      ),
      g.createElement(Zr, {
        sx: { cursor: 'pointer', mt: 2, display: 'inline-block' },
        onClick: () => e(t),
      }),
      g.createElement(zi, {
        sx: { cursor: 'pointer', mt: 2, display: 'inline-block' },
        onClick: () => r(t),
      })
    );
  },
  FY = ({ tenets: e, tenetTypes: t, handleEdit: r, handleDelete: n }) => {
    const a = e[0],
      i = e.slice(1);
    return g.createElement(
      g.Fragment,
      null,
      t &&
        g.createElement(
          Wt,
          null,
          g.createElement(ge, { rowSpan: e.length }, t[a.type]),
          g.createElement(ge, { align: 'left' }, a.description),
          g.createElement(
            ge,
            { align: 'right', sx: { minWidth: 150 } },
            g.createElement(by, {
              handleEdit: r,
              tenet: a,
              handleDelete: n,
              total: e.length,
            })
          )
        ),
      i.map((o) =>
        g.createElement(
          Wt,
          { key: o.id },
          g.createElement(ge, { align: 'left' }, o.description),
          g.createElement(
            ge,
            { align: 'right' },
            g.createElement(by, {
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
var xp = {},
  zY = rt.exports;
Object.defineProperty(xp, '__esModule', { value: !0 });
var wp = (xp.default = void 0),
  WY = zY(at()),
  UY = nt(),
  HY = (0, WY.default)(
    (0, UY.jsx)('path', {
      d: 'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z',
    }),
    'DeleteForever'
  );
wp = xp.default = HY;
const VY = () => {
    const [e, t] = S.exports.useState(!1),
      r = Wn(),
      n = Vs(r.breakpoints.down('md')),
      [a, i] = S.exports.useState(),
      [o, s] = S.exports.useState(''),
      [l, c] = S.exports.useState(!1),
      [u, f] = S.exports.useState(''),
      [d, h] = S.exports.useState(!1),
      [v, p] = S.exports.useState(),
      [m, y] = S.exports.useState(0),
      [_, x] = S.exports.useState({ create: !0, update: !1, delete: !1 });
    S.exports.useEffect(() => {
      be({ method: 'get', url: '/tenet-types' }, function (C) {
        const T = C.data;
        i(T);
      });
    }, []),
      S.exports.useEffect(() => {
        be({ method: 'get', url: '/tenets' }, function (C) {
          const T = C.data;
          p(T);
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
            be(
              {
                method: 'post',
                url: '/tenets',
                data: { type: o, description: u },
              },
              function (C) {
                const T = C.data;
                p(T), t(!1), s(''), f('');
              }
            );
      },
      E = (C) => {
        x({ create: !1, update: !0, delete: !1 }),
          t(!0),
          s(C.type),
          f(C.description),
          y(C.id);
      },
      $ = () => {
        be(
          {
            method: 'put',
            url: '/tenets/' + m,
            data: { type: o, description: u },
          },
          function (C) {
            const T = C.data;
            p(T), t(!1), s(''), f('');
          }
        );
      },
      A = (C) => {
        x({ delete: !0, create: !1, update: !1 }),
          t(!0),
          s(C.type),
          f(C.description),
          y(C.id);
      },
      P = () => {
        be({ method: 'delete', url: '/tenets/' + m }, function (C) {
          const T = C.data;
          p(T), t(!1), s(''), f('');
        });
      };
    return g.createElement(
      'div',
      { style: { width: '100%', textAlign: 'center', marginTop: 40 } },
      g.createElement(lt, { variant: 'h5' }, 'Stock Tenets'),
      g.createElement(
        St,
        {
          variant: 'contained',
          startIcon: g.createElement(jr, null),
          sx: { float: 'right', mr: 4, mb: 3 },
          onClick: b,
        },
        'Create New Tenet'
      ),
      g.createElement(
        pl,
        { component: Br },
        g.createElement(
          ul,
          { sx: { minWidth: 650 } },
          g.createElement(
            hl,
            null,
            g.createElement(
              Wt,
              null,
              g.createElement(ge, null, 'Type'),
              g.createElement(ge, { align: 'left' }, 'Description'),
              g.createElement(ge, { align: 'right' }, 'Action')
            )
          ),
          g.createElement(
            dl,
            null,
            v &&
              Object.keys(v).map((C, T) =>
                g.createElement(FY, {
                  tenetTypes: a,
                  tenets: v[C],
                  key: T,
                  handleEdit: E,
                  handleDelete: A,
                })
              )
          )
        )
      ),
      g.createElement(
        ll,
        {
          fullScreen: n,
          open: e,
          onClose: w,
          'aria-labelledby': 'responsive-dialog-title',
        },
        g.createElement(
          i0,
          null,
          a &&
            Object.keys(a) &&
            g.createElement(
              In,
              { variant: 'standard', sx: { minWidth: 250 } },
              g.createElement(Rn, { id: 'tenet-types' }, 'Tenet Types'),
              g.createElement(
                Dn,
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
                Object.keys(a).map((C, T) =>
                  g.createElement(wr, { value: C, key: T }, a[C])
                )
              )
            ),
          g.createElement(ut, {
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
        g.createElement(
          cl,
          { sx: { mb: 1 } },
          _.delete &&
            g.createElement(
              St,
              {
                variant: 'contained',
                startIcon: g.createElement(wp, null),
                onClick: P,
                color: 'error',
              },
              'Delete'
            ),
          _.create &&
            g.createElement(
              St,
              {
                variant: 'contained',
                startIcon: g.createElement(jr, null),
                onClick: O,
              },
              'Create'
            ),
          _.update &&
            g.createElement(
              St,
              {
                variant: 'contained',
                startIcon: g.createElement(Zr, null),
                onClick: $,
              },
              'Update'
            ),
          g.createElement(Or, { onClick: w }, g.createElement(Fi, null))
        )
      )
    );
  },
  GY = () => {
    const e = Wn(),
      t = Vs(e.breakpoints.down('md')),
      [r, n] = S.exports.useState(!1),
      [a, i] = S.exports.useState(''),
      [o, s] = S.exports.useState(!1),
      [l, c] = S.exports.useState(''),
      [u, f] = S.exports.useState(!1),
      d = () => {
        n(!1);
      },
      [h, v] = S.exports.useState(),
      [p, m] = S.exports.useState({ create: !0, update: !1, delete: !1 }),
      [y, _] = S.exports.useState(0),
      x = () => {
        a || s(!0),
          l || f(!0),
          a &&
            l &&
            be(
              {
                method: 'post',
                url: '/quotes',
                data: { description: a, author: l },
              },
              function (O) {
                const E = O.data;
                v(E), n(!1);
              }
            );
      };
    S.exports.useEffect(() => {
      be({ method: 'get', url: '/quotes' }, function (O) {
        const E = O.data;
        v(E);
      });
    }, []);
    const b = () => {
        be(
          {
            method: 'put',
            url: '/quotes/' + y,
            data: { description: a, author: l },
          },
          function (O) {
            const E = O.data;
            v(E), n(!1);
          }
        );
      },
      w = () => {
        be({ method: 'delete', url: '/quotes/' + y }, function (O) {
          const E = O.data;
          v(E), n(!1);
        });
      };
    return g.createElement(
      'div',
      { style: { width: '100%', textAlign: 'center', marginTop: 40 } },
      g.createElement(lt, { variant: 'h5' }, 'Famous Quotes'),
      g.createElement(
        St,
        {
          variant: 'contained',
          startIcon: g.createElement(jr, null),
          sx: { float: 'right', mr: 4, mb: 3 },
          onClick: () => {
            n(!0), m({ update: !1, create: !0, delete: !1 }), c(''), i('');
          },
        },
        'Create New Quotes'
      ),
      g.createElement(
        Z,
        { container: !0, sx: { textAlign: 'left' } },
        h &&
          h.map((O) =>
            g.createElement(
              g.Fragment,
              { key: O.id },
              g.createElement(
                Z,
                { item: !0, xs: 2, lg: 1, sx: { mt: 3 } },
                g.createElement(Zr, {
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
                g.createElement(zi, {
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
              g.createElement(
                Z,
                { item: !0, xs: 10, lg: 11, sx: { mt: 3, fontSize: '17px' } },
                O.description,
                ' -',
                g.createElement(
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
      g.createElement(
        ll,
        {
          open: r,
          onClose: d,
          fullScreen: t,
          'aria-labelledby': 'responsive-dialog-title',
        },
        g.createElement(
          i0,
          null,
          g.createElement(ut, {
            label: 'Description',
            sx: { width: '100%', mt: 2, minWidth: 500 },
            multiline: !0,
            rows: 4,
            value: a,
            onChange: (O) => i(O.target.value),
            error: o,
            disabled: p.delete,
          }),
          g.createElement(ut, {
            label: 'Author',
            sx: { width: '100%', mt: 2, minWidth: 500 },
            value: l,
            onChange: (O) => c(O.target.value),
            error: u,
            disabled: p.delete,
          })
        ),
        g.createElement(
          cl,
          { sx: { mb: 1 } },
          p.create &&
            g.createElement(
              St,
              {
                variant: 'contained',
                startIcon: g.createElement(jr, null),
                onClick: x,
              },
              'Create New'
            ),
          p.update &&
            g.createElement(
              St,
              {
                variant: 'contained',
                startIcon: g.createElement(Zr, null),
                onClick: b,
              },
              'Update'
            ),
          p.delete &&
            g.createElement(
              St,
              {
                variant: 'contained',
                startIcon: g.createElement(wp, null),
                color: 'error',
                onClick: w,
              },
              'Delete'
            ),
          g.createElement(Or, { onClick: d }, g.createElement(Fi, null))
        )
      )
    );
  };
var qY = cx,
  xy = Me;
function YY(e, t, r, n) {
  return e == null
    ? []
    : (xy(t) || (t = t == null ? [] : [t]),
      (r = n ? void 0 : r),
      xy(r) || (r = r == null ? [] : [r]),
      qY(e, t, r));
}
var KY = YY,
  _p = {},
  XY = rt.exports;
Object.defineProperty(_p, '__esModule', { value: !0 });
var Op = (_p.default = void 0),
  JY = XY(at()),
  ZY = nt(),
  QY = (0, JY.default)(
    (0, ZY.jsx)('path', {
      d: 'M21 7h-6V5h6v2zm-2 3.9c-.32.07-.66.1-1 .1-2.76 0-5-2.24-5-5 0-1.13.37-2.16 1-3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V10.9z',
    }),
    'BookmarkRemove'
  );
Op = _p.default = QY;
var Sp = {},
  eK = rt.exports;
Object.defineProperty(Sp, '__esModule', { value: !0 });
var Q1 = (Sp.default = void 0),
  tK = eK(at()),
  rK = nt(),
  nK = (0, tK.default)(
    (0, rK.jsx)('path', {
      d: 'M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z',
    }),
    'Autorenew'
  );
Q1 = Sp.default = nK;
const aK = () => {
    const [e, t] = S.exports.useState(),
      [r, n] = S.exports.useState(),
      [a, i] = S.exports.useState();
    let o = 1,
      s = 1;
    const [l, c] = S.exports.useState();
    S.exports.useEffect(() => {
      be({ method: 'get', url: '/stocks-for-home' }, function ({ data: p }) {
        c(p.totalTenets), t(p.stocks);
      }),
        be({ method: 'get', url: '/quotes' }, function ({ data: p }) {
          i(p);
        });
    }, []),
      S.exports.useEffect(() => {
        if (e) {
          for (const y of e) y.marginOfSafetyOpt1 = f(y, u(y));
          const p = [...e],
            m = KY(p, ['marginOfSafetyOpt1'], ['desc']);
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
        be(
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
      h = (p, m, y) => (m / (y * (1 + p / 100))).toFixed(2),
      v = (p, m) => {
        be(
          { method: 'patch', url: '/stocks/refresh-market-price/' + p },
          function (y) {
            (r[m].current_market_price = y.data),
              (r[m].marginOfSafetyOpt1 = f(r[m], u(r[m]))),
              n([...r]);
          }
        );
      };
    return g.createElement(
      Ne,
      { sx: { width: '100%', textAlign: 'center', mt: 3 } },
      g.createElement(
        Br,
        {
          elevation: 5,
          sx: { p: 1.5, fontSize: '14px', mt: 2, textAlign: 'left' },
          component: 'div',
        },
        a == null
          ? void 0
          : a.map((p) =>
              g.createElement(
                g.Fragment,
                { key: p.id },
                g.createElement(
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
                g.createElement('br', null)
              )
            )
      ),
      r &&
        r.map((p, m) => {
          var O, E, $, A, P, C, T;
          const y = JSON.parse(p.intrinsic_value_caculations.calculation_step),
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
            g.createElement(
              Dw,
              { className: 'h-stock-card', key: p.id },
              g.createElement(
                jw,
                { sx: { position: 'relative' } },
                g.createElement(
                  Ne,
                  { component: 'div', sx: { textAlign: 'left', mt: 1, mr: 4 } },
                  g.createElement(
                    Ne,
                    { component: 'span', className: 'h-stock-number' },
                    g.createElement('span', null, s++)
                  ),
                  g.createElement(
                    Ne,
                    { component: 'span', className: 'h-company-name' },
                    p.ticker_symbol,
                    ' | ',
                    p.company_name
                  )
                ),
                g.createElement(
                  Ne,
                  { component: 'div', className: 'h-card-btn-group' },
                  g.createElement(
                    Qf,
                    { to: '/edit-stock/' + p.id, className: 'color-inherit' },
                    g.createElement(Zr, null)
                  ),
                  g.createElement(Op, { onClick: () => d(p.id, m) })
                ),
                g.createElement(
                  Z,
                  { container: !0, sx: { mt: 2 } },
                  g.createElement(
                    Z,
                    { item: !0, xs: 6, lg: 3, className: 'h-first-card-row' },
                    g.createElement(
                      Ne,
                      { component: 'span', className: 'h-stock-price' },
                      p.current_market_price
                    ),
                    g.createElement(Q1, {
                      sx: { color: 'rgb(114, 193, 254)', cursor: 'pointer' },
                      onClick: () => v(p.id, m),
                    }),
                    g.createElement(
                      Ne,
                      { component: 'div', sx: { mt: 1 } },
                      +p.current_year_stock_dividend != 0
                        ? 'Current Year Stock Dividend: ' +
                            parseFloat(p.current_year_stock_dividend) +
                            '%'
                        : ''
                    )
                  ),
                  g.createElement(
                    Z,
                    { item: !0, xs: 6, lg: 3, className: 'h-first-card-row' },
                    'Margin Of Safety',
                    g.createElement('br', null),
                    p.marginOfSafetyOpt1,
                    '%',
                    ' ',
                    ((O = y[1]) == null ? void 0 : O.intrinsic_price) &&
                      '| ' +
                        f(p, (E = y[1]) == null ? void 0 : E.intrinsic_price) +
                        '%',
                    g.createElement(
                      Ne,
                      { component: 'div', sx: { mt: 1 } },
                      'Buy 1 Get',
                      g.createElement('br', null),
                      h(
                        +p.current_year_stock_dividend,
                        y[0].intrinsic_price,
                        p.current_market_price
                      ),
                      ' ',
                      (($ = y[1]) == null ? void 0 : $.intrinsic_price) &&
                        '| ' +
                          h(
                            +p.current_year_stock_dividend,
                            y[1].intrinsic_price,
                            p.current_market_price
                          )
                    )
                  ),
                  g.createElement(
                    Z,
                    { item: !0, xs: 6, lg: 3, className: 'h-first-card-row' },
                    'PE',
                    g.createElement('br', null),
                    y[0].total_pe,
                    ' ',
                    y[1] ? '|' : '',
                    ' ',
                    (A = y[1]) == null ? void 0 : A.total_pe
                  ),
                  g.createElement(
                    Z,
                    { item: !0, xs: 6, lg: 3, className: 'h-first-card-row' },
                    'Intrinsic Price',
                    g.createElement('br', null),
                    y[0].intrinsic_price,
                    ' ',
                    y[1] ? '|' : '',
                    ' ',
                    (P = y[1]) == null ? void 0 : P.intrinsic_price
                  )
                ),
                g.createElement(ur, { sx: { my: 2.5 } }),
                g.createElement(
                  Z,
                  { container: !0 },
                  g.createElement(Z, { item: !0, xs: 12 }, 'Growth Assumption'),
                  g.createElement(
                    Z,
                    { item: !0, xs: 12, md: 6 },
                    g.createElement(Ne, { component: 'div' }, 'Option 1'),
                    g.createElement(
                      Z,
                      { container: !0 },
                      g.createElement(
                        Z,
                        { item: !0, xs: 12, md: 6 },
                        g.createElement(
                          Ne,
                          {
                            component: 'div',
                            sx: { textAlign: 'left', mt: 2 },
                          },
                          'Next 10 years:',
                          ' ',
                          p.growth_assumptions.filter((k) => k.option == 1)[0]
                            .next_10_years,
                          '%'
                        )
                      ),
                      g.createElement(
                        Z,
                        { item: !0, xs: 12, md: 6 },
                        g.createElement(
                          Ne,
                          {
                            component: 'div',
                            sx: { textAlign: 'left', mt: 2 },
                          },
                          'Next 10 - 20 years:',
                          ' ',
                          p.growth_assumptions.filter((k) => k.option == 1)[0]
                            .next_10_to_20_years,
                          '%'
                        )
                      )
                    )
                  ),
                  g.createElement(
                    Z,
                    { item: !0, xs: 12, md: 6 },
                    g.createElement(Ne, { component: 'div' }, 'Option 2'),
                    g.createElement(
                      Z,
                      { container: !0 },
                      g.createElement(
                        Z,
                        { item: !0, xs: 12, md: 6 },
                        g.createElement(
                          Ne,
                          {
                            component: 'div',
                            sx: { textAlign: 'left', mt: 2 },
                          },
                          'Next 10 years:',
                          ' ',
                          (C = p.growth_assumptions.filter(
                            (k) => k.option == 2
                          )[0]) == null
                            ? void 0
                            : C.next_10_years,
                          '%'
                        )
                      ),
                      g.createElement(
                        Z,
                        { item: !0, xs: 12, md: 6 },
                        g.createElement(
                          Ne,
                          {
                            component: 'div',
                            sx: { textAlign: 'left', mt: 2 },
                          },
                          'Next 10 - 20 years:',
                          ' ',
                          (T = p.growth_assumptions.filter(
                            (k) => k.option == 2
                          )[0]) == null
                            ? void 0
                            : T.next_10_to_20_years,
                          '%'
                        )
                      )
                    )
                  )
                ),
                g.createElement(ur, { sx: { my: 2.5 } }),
                g.createElement(
                  Z,
                  { container: !0 },
                  g.createElement(
                    Z,
                    { item: !0, xs: 12, md: 3, className: 'h-card-last-row' },
                    'Tenets: ',
                    p.stock_has_tenets.length + '/' + l
                  ),
                  g.createElement(
                    Z,
                    { item: !0, xs: 12, md: 3, className: 'h-card-last-row' },
                    'Dividend Paid:',
                    ' ',
                    _.filter((k) => k.money_dividend).length,
                    '/',
                    p.financial_metrics.length,
                    ' years'
                  ),
                  g.createElement(
                    Z,
                    { item: !0, xs: 12, md: 3, className: 'h-card-last-row' },
                    '5 years ROEA: ',
                    x,
                    '%'
                  ),
                  g.createElement(
                    Z,
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
  or = ae(ge)(() => ({
    [`&.${l0.root}`]: { border: '1px solid rgba(224, 224, 224, 1)' },
  }));
var Ep = {},
  iK = rt.exports;
Object.defineProperty(Ep, '__esModule', { value: !0 });
var ew = (Ep.default = void 0),
  oK = iK(at()),
  sK = nt(),
  lK = (0, oK.default)(
    (0, sK.jsx)('path', {
      d: 'M21 7h-2v2h-2V7h-2V5h2V3h2v2h2v2zm-2 14-7-3-7 3V5c0-1.1.9-2 2-2h7c-.63.84-1 1.87-1 3 0 2.76 2.24 5 5 5 .34 0 .68-.03 1-.1V21z',
    }),
    'BookmarkAdd'
  );
ew = Ep.default = lK;
var $p = {},
  cK = rt.exports;
Object.defineProperty($p, '__esModule', { value: !0 });
var tw = ($p.default = void 0),
  uK = cK(at()),
  fK = nt(),
  dK = (0, uK.default)(
    (0, fK.jsx)('path', {
      d: 'M21.19 21.19 2.81 2.81 1.39 4.22l2.27 2.27C2.61 8.07 2 9.96 2 12c0 5.52 4.48 10 10 10 2.04 0 3.93-.61 5.51-1.66l2.27 2.27 1.41-1.42zm-10.6-4.59-4.24-4.24 1.41-1.41 2.83 2.83.18-.18 1.41 1.41-1.59 1.59zm3-5.84-7.1-7.1C8.07 2.61 9.96 2 12 2c5.52 0 10 4.48 10 10 0 2.04-.61 3.93-1.66 5.51L15 12.17l2.65-2.65-1.41-1.41-2.65 2.65z',
    }),
    'Unpublished'
  );
tw = $p.default = dK;
const pK = () => {
    const [e, t] = g.useState(!1),
      r = Wn(),
      n = Vs(r.breakpoints.down('md')),
      [a, i] = S.exports.useState(),
      [o, s] = S.exports.useState();
    let l = 1;
    const c = () => {
        t(!1);
      },
      u = () => {
        be(
          { method: 'delete', url: '/stocks/' + (o == null ? void 0 : o.id) },
          function () {
            delete a[o.index], t(!1);
          }
        );
      };
    S.exports.useEffect(() => {
      be({ method: 'get', url: '/stocks' }, function ({ data: d }) {
        i(d);
      });
    }, []);
    const f = (d, h, v) => {
      be(
        { method: 'patch', url: '/stocks/status/' + d, data: { status: v } },
        function () {
          (a[h].status = v), i([...a]);
        }
      );
    };
    return g.createElement(
      'div',
      { style: { width: '100%', textAlign: 'center' } },
      g.createElement(
        pl,
        { sx: { mt: 5, mb: 5 } },
        g.createElement(
          ul,
          { stickyHeader: !0, sx: { borderCollapse: 'collapse' } },
          g.createElement(
            hl,
            null,
            g.createElement(
              Wt,
              null,
              g.createElement(or, { align: 'center' }, 'No'),
              g.createElement(or, { align: 'center' }, 'Action'),
              g.createElement(or, { align: 'center' }, 'Symbol'),
              g.createElement(or, { align: 'center' }, 'Name'),
              g.createElement(or, { align: 'center' }, 'Status'),
              g.createElement(or, { align: 'center' }, 'Market Price')
            )
          ),
          g.createElement(
            dl,
            null,
            a == null
              ? void 0
              : a.map((d, h) =>
                  g.createElement(
                    Wt,
                    { key: d.id },
                    g.createElement(or, null, l++),
                    g.createElement(
                      or,
                      null,
                      g.createElement(
                        Qf,
                        {
                          to: `/edit-stock/${d.id}`,
                          style: { color: 'inherit' },
                        },
                        g.createElement(Zr, { sx: { cursor: 'pointer' } })
                      ),
                      g.createElement(zi, {
                        onClick: () => {
                          t(!0),
                            s({ symbol: d.ticker_symbol, id: d.id, index: h });
                        },
                        sx: { cursor: 'pointer' },
                      }),
                      d.status === 'Unfinished'
                        ? g.createElement(tw, { sx: { cursor: 'pointer' } })
                        : d.status === 'Followed'
                        ? g.createElement(Op, {
                            sx: { cursor: 'pointer' },
                            onClick: () => {
                              f(d.id, h, 'Unfollowed');
                            },
                          })
                        : g.createElement(ew, {
                            sx: { cursor: 'pointer' },
                            onClick: () => {
                              f(d.id, h, 'Followed');
                            },
                          })
                    ),
                    g.createElement(or, null, d.ticker_symbol),
                    g.createElement(or, null, d.company_name),
                    g.createElement(or, null, d.status),
                    g.createElement(or, null, d.current_market_price)
                  )
                )
          )
        )
      ),
      g.createElement(
        ll,
        { fullScreen: n, open: e, onClose: c },
        g.createElement(
          o0,
          null,
          'Are you sure want to delete this stock: ',
          o == null ? void 0 : o.symbol
        ),
        g.createElement(
          cl,
          null,
          g.createElement(St, { onClick: u }, 'Agree'),
          g.createElement(St, { onClick: c }, 'Disagree')
        )
      )
    );
  },
  hK = mS(
    Yo(
      g.createElement(
        Wr,
        { path: '/', element: g.createElement(E2, null) },
        g.createElement(Wr, { index: !0, element: g.createElement(aK, null) }),
        g.createElement(Wr, {
          path: 'add-stock',
          element: g.createElement(yy, { key: 'add' }),
        }),
        g.createElement(Wr, {
          path: 'edit-stock/:editStockId',
          element: g.createElement(yy, { key: 'edit' }),
        }),
        g.createElement(Wr, {
          path: 'stock-list',
          element: g.createElement(pK, null),
        }),
        g.createElement(Wr, {
          path: 'discount-rate',
          element: g.createElement(BY, null),
        }),
        g.createElement(Wr, {
          path: 'stock-tenets',
          element: g.createElement(VY, null),
        }),
        g.createElement(Wr, {
          path: 'famous-quotes',
          element: g.createElement(GY, null),
        })
      )
    )
  ),
  vK = Nw(document.getElementById('app'));
vK.render(
  g.createElement(
    g.StrictMode,
    null,
    g.createElement(m_, { store: lO }, g.createElement(lS, { router: hK }))
  )
);
