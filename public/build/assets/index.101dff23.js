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
  ak as M,
  R as s,
  B as I,
  al as T,
  am as R,
  ay as k,
  az as G,
  ab as g,
  af as w,
  aw as P,
  ax as L,
  ad as x,
  ac as B,
  aA as U,
} from './FormControlLabel.f917e857.js';
function j(a) {
  return h('MuiCardActions', a);
}
C('MuiCardActions', ['root', 'spacing']);
const W = ['disableSpacing', 'className'],
  z = (a) => {
    const { classes: e, disableSpacing: r } = a;
    return y({ root: ['root', !r && 'spacing'] }, j, e);
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
      m = E(o, W),
      l = u({}, o, { disableSpacing: c }),
      d = z(l);
    return S.jsx(_, u({ className: v(d.root, n), ownerState: l, ref: r }, m));
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
      l = s.useMemo(() => I({ palette: { mode: a ? 'dark' : 'light' } }), [a]),
      d = () => {
        const t = { ...o };
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(
          e.email
        )
          ? (t.email = '')
          : (t.email = 'Please enter correct email address'),
          /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*\-?~`]).{8,}$/.test(
            e.password
          )
            ? (t.password = '')
            : (t.password =
                'Please enter correct password with at least 1 lowercase,1 uppercase, 1 digit and 1 special characters'),
          c(t),
          !t.email &&
            !t.password &&
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
                  window.previousURL.includes('/login')
                    ? window.location.replace('/')
                    : window.location.replace(window.previousURL);
                }, 100);
              },
              function (f) {
                m(f.response.data.errors);
              }
            );
      };
    return s.createElement(
      T,
      { theme: l },
      s.createElement(R, null),
      s.createElement(
        k,
        {
          variant: 'outlined',
          sx: { maxWidth: 400, mx: 'auto', mt: 10, textAlign: 'center' },
        },
        s.createElement(
          G,
          null,
          s.createElement(
            g,
            { sx: { fontSize: 25 }, color: 'text.secondary', gutterBottom: !0 },
            'Sign In'
          ),
          s.createElement(w, {
            label: 'Email',
            variant: 'outlined',
            fullWidth: !0,
            sx: { mt: 3 },
            value: e.signInAsGuest ? 'guest@gmail.com' : e.email,
            onChange: (t) => r({ ...e, email: t.target.value }),
            error: !!o.email,
            helperText: o.email,
          }),
          s.createElement(w, {
            label: 'Password',
            variant: 'outlined',
            fullWidth: !0,
            sx: { mt: 3 },
            type: 'password',
            value: e.signInAsGuest ? 'Password!@#' : e.password,
            onChange: (t) => r({ ...e, password: t.target.value }),
            error: !!o.password,
            helperText: o.password,
          }),
          s.createElement(P, {
            control: s.createElement(L, null),
            label: 'Remember me',
            sx: { mt: 2, ml: -7 },
            checked: e.signInAsGuest ? !1 : e.rememberMe,
            onChange: () => r({ ...e, rememberMe: !e.rememberMe }),
            disabled: e.signInAsGuest,
          }),
          s.createElement(
            x,
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
            Object.keys(n).map((t, p) =>
              s.createElement(
                g,
                {
                  variant: 'body1',
                  gutterBottom: !0,
                  sx: { textAlign: 'left', color: 'error.main' },
                  key: p,
                },
                t + ' : ' + n[t]
              )
            )
        ),
        s.createElement(
          N,
          null,
          s.createElement(
            x,
            { variant: 'contained', fullWidth: !0, sx: { mb: 2 }, onClick: d },
            'Sign in'
          )
        )
      )
    );
  },
  D = U(document.getElementById('login'));
D.render(s.createElement(s.StrictMode, null, s.createElement(F, null)));
