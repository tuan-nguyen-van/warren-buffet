import {
  m as h,
  t as C,
  z as b,
  c as u,
  r as i,
  A,
  _ as E,
  j as S,
  f as v,
  l as y,
  aj as M,
  R as t,
  B as I,
  ak as T,
  al as k,
  ax as R,
  ay as G,
  aa as g,
  ae as x,
  av as P,
  aw as j,
  ac as w,
  ab as B,
  az as L,
} from './FormControlLabel.7b665b70.js';
function W(a) {
  return h('MuiCardActions', a);
}
C('MuiCardActions', ['root', 'spacing']);
const z = ['disableSpacing', 'className'],
  U = (a) => {
    const { classes: e, disableSpacing: r } = a;
    return y({ root: ['root', !r && 'spacing'] }, W, e);
  },
  _ = b('div', {
    name: 'MuiCardActions',
    slot: 'Root',
    overridesResolver: (a, e) => {
      const { ownerState: r } = a;
      return [e.root, !r.disableSpacing && e.spacing];
    },
  })(({ ownerState: a }) =>
    u(
      { display: 'flex', alignItems: 'center', padding: 8 },
      !a.disableSpacing && { '& > :not(:first-of-type)': { marginLeft: 8 } }
    )
  ),
  $ = i.exports.forwardRef(function (e, r) {
    const o = A({ props: e, name: 'MuiCardActions' }),
      { disableSpacing: c = !1, className: n } = o,
      m = E(o, z),
      l = u({}, o, { disableSpacing: c }),
      d = U(l);
    return S.exports.jsx(
      _,
      u({ className: v(d.root, n), ownerState: l, ref: r }, m)
    );
  }),
  N = $,
  F = () => {
    const a = M('(prefers-color-scheme: dark)'),
      [e, r] = i.exports.useState({
        email: '',
        password: '',
        rememberMe: !1,
        signInAsGuest: !1,
      }),
      [o, c] = i.exports.useState({ email: '', password: '' }),
      [n, m] = i.exports.useState(),
      l = t.useMemo(() => I({ palette: { mode: a ? 'dark' : 'light' } }), [a]),
      d = () => {
        const s = { ...o };
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(
          e.email
        )
          ? (s.email = '')
          : (s.email = 'Please enter correct email address'),
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*\-?~`]).{8,}$/.test(
            e.password
          )
            ? (s.password = '')
            : (s.password =
                'Please enter correct password with at least 1 lowercase,1 uppercase, 1 digit and 1 special characters'),
          c(s),
          !s.email &&
            !s.password &&
            B(
              {
                method: 'post',
                url: '/login',
                data: {
                  email: e.email,
                  password: e.password,
                  remember: e.rememberMe,
                },
              },
              function () {
                setTimeout(() => {
                  window.location.replace('/');
                }, 100);
              },
              function (f) {
                m(f.response.data.errors);
              }
            );
      };
    return t.createElement(
      T,
      { theme: l },
      t.createElement(k, null),
      t.createElement(
        R,
        {
          variant: 'outlined',
          sx: { maxWidth: 400, mx: 'auto', mt: 10, textAlign: 'center' },
        },
        t.createElement(
          G,
          null,
          t.createElement(
            g,
            { sx: { fontSize: 25 }, color: 'text.secondary', gutterBottom: !0 },
            'Sign In'
          ),
          t.createElement(x, {
            label: 'Email',
            variant: 'outlined',
            fullWidth: !0,
            sx: { mt: 3 },
            value: e.signInAsGuest ? 'guest@gmail.com' : e.email,
            onChange: (s) => r({ ...e, email: s.target.value }),
            error: !!o.email,
            helperText: o.email,
          }),
          t.createElement(x, {
            label: 'Password',
            variant: 'outlined',
            fullWidth: !0,
            sx: { mt: 3 },
            type: 'password',
            value: e.signInAsGuest ? 'Password!@#' : e.password,
            onChange: (s) => r({ ...e, password: s.target.value }),
            error: !!o.password,
            helperText: o.password,
          }),
          t.createElement(P, {
            control: t.createElement(j, null),
            label: 'Remember me',
            sx: { mt: 2, ml: -7 },
            checked: e.signInAsGuest ? !1 : e.rememberMe,
            onChange: () => r({ ...e, rememberMe: !e.rememberMe }),
            disabled: e.signInAsGuest,
          }),
          t.createElement(
            w,
            {
              variant: e.signInAsGuest ? 'contained' : 'outlined',
              sx: { mt: 2, float: 'right' },
              onClick: () => {
                r({
                  ...e,
                  signInAsGuest: !0,
                  email: 'guest@gmail.com',
                  password: 'Password1@#',
                });
              },
            },
            'Sign in as Guest'
          ),
          n &&
            Object.keys(n).map((s, p) =>
              t.createElement(
                g,
                {
                  variant: 'body1',
                  gutterBottom: !0,
                  sx: { textAlign: 'left', color: 'error.main' },
                  key: p,
                },
                s + ' : ' + n[s]
              )
            )
        ),
        t.createElement(
          N,
          null,
          t.createElement(
            w,
            { variant: 'contained', fullWidth: !0, sx: { mb: 2 }, onClick: d },
            'Sign in'
          )
        )
      )
    );
  },
  D = L(document.getElementById('login'));
D.render(t.createElement(t.StrictMode, null, t.createElement(F, null)));
