try {
  var Ay = Object.create
  var fa = Object.defineProperty
  var Ey = Object.getOwnPropertyDescriptor
  var Dy = Object.getOwnPropertyNames
  var vy = Object.getPrototypeOf,
    Cy = Object.prototype.hasOwnProperty
  var sr = ((e) =>
    typeof require < 'u'
      ? require
      : typeof Proxy < 'u'
      ? new Proxy(e, {get: (t, r) => (typeof require < 'u' ? require : t)[r]})
      : e)(function (e) {
    if (typeof require < 'u') return require.apply(this, arguments)
    throw new Error('Dynamic require of "' + e + '" is not supported')
  })
  var Ye = (e, t) => () => (e && (t = e((e = 0))), t)
  var F = (e, t) => () => (t || e((t = {exports: {}}).exports, t), t.exports),
    fi = (e, t) => {
      for (var r in t) fa(e, r, {get: t[r], enumerable: !0})
    },
    xy = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let a of Dy(t))
          !Cy.call(e, a) &&
            a !== r &&
            fa(e, a, {
              get: () => t[a],
              enumerable: !(n = Ey(t, a)) || n.enumerable,
            })
      return e
    }
  var fe = (e, t, r) => (
    (r = e != null ? Ay(vy(e)) : {}),
    xy(
      t || !e || !e.__esModule
        ? fa(r, 'default', {value: e, enumerable: !0})
        : r,
      e
    )
  )
  var l = Ye(() => {})
  var c = Ye(() => {})
  var p = Ye(() => {})
  var m,
    Jr,
    Xe,
    hi,
    ZP,
    eI,
    tI,
    gi,
    rI,
    he,
    lr,
    ma,
    nI,
    aI,
    oI,
    uI,
    mi,
    iI,
    ge,
    Ne,
    sI,
    me,
    lI,
    yi,
    tt,
    cI,
    xe,
    ne,
    pI,
    St = Ye(() => {
      l()
      c()
      p()
      ;(m = __REACT__),
        ({
          Children: Jr,
          Component: Xe,
          Fragment: hi,
          Profiler: ZP,
          PureComponent: eI,
          StrictMode: tI,
          Suspense: gi,
          __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: rI,
          cloneElement: he,
          createContext: lr,
          createElement: ma,
          createFactory: nI,
          createRef: aI,
          forwardRef: oI,
          isValidElement: uI,
          lazy: mi,
          memo: iI,
          useCallback: ge,
          useContext: Ne,
          useDebugValue: sI,
          useEffect: me,
          useImperativeHandle: lI,
          useLayoutEffect: yi,
          useMemo: tt,
          useReducer: cI,
          useRef: xe,
          useState: ne,
          version: pI,
        } = __REACT__)
    })
  var vi = {}
  fi(vi, {
    A: () => wy,
    ActionBar: () => Ea,
    AddonPanel: () => Da,
    Badge: () => By,
    Bar: () => Ty,
    Blockquote: () => _y,
    Button: () => Oy,
    Code: () => va,
    DL: () => Ry,
    Div: () => Py,
    DocumentWrapper: () => Iy,
    ErrorFormatter: () => Ca,
    FlexBar: () => xa,
    Form: () => we,
    H1: () => ky,
    H2: () => Fa,
    H3: () => Sa,
    H4: () => Ny,
    H5: () => jy,
    H6: () => My,
    HR: () => qy,
    IconButton: () => ht,
    IconButtonSkeleton: () => wa,
    Icons: () => Be,
    Img: () => Ly,
    LI: () => $y,
    Link: () => cr,
    ListItem: () => Uy,
    Loader: () => Ba,
    OL: () => zy,
    P: () => Hy,
    Placeholder: () => Gy,
    Pre: () => Wy,
    ResetWrapper: () => Ta,
    ScrollArea: () => Vy,
    Separator: () => Ky,
    Spaced: () => Yy,
    Span: () => Xy,
    StorybookIcon: () => Jy,
    StorybookLogo: () => Qy,
    Symbols: () => Zy,
    SyntaxHighlighter: () => Qr,
    TT: () => e2,
    TabBar: () => t2,
    TabButton: () => r2,
    TabWrapper: () => n2,
    Table: () => a2,
    Tabs: () => o2,
    TabsState: () => _a,
    TooltipLinkList: () => u2,
    TooltipMessage: () => i2,
    TooltipNote: () => Oa,
    UL: () => s2,
    WithTooltip: () => Zr,
    WithTooltipPure: () => Ra,
    Zoom: () => Pa,
    codeCommon: () => wt,
    components: () => Ia,
    createCopyToClipboardFunction: () => l2,
    default: () => Sy,
    getStoryHref: () => ka,
    icons: () => c2,
    interleaveSeparators: () => p2,
    nameSpaceClassNames: () => Na,
    resetComponents: () => d2,
    withReset: () => Bt,
  })
  var Sy,
    wy,
    Ea,
    Da,
    By,
    Ty,
    _y,
    Oy,
    va,
    Ry,
    Py,
    Iy,
    Ca,
    xa,
    we,
    ky,
    Fa,
    Sa,
    Ny,
    jy,
    My,
    qy,
    ht,
    wa,
    Be,
    Ly,
    $y,
    cr,
    Uy,
    Ba,
    zy,
    Hy,
    Gy,
    Wy,
    Ta,
    Vy,
    Ky,
    Yy,
    Xy,
    Jy,
    Qy,
    Zy,
    Qr,
    e2,
    t2,
    r2,
    n2,
    a2,
    o2,
    _a,
    u2,
    i2,
    Oa,
    s2,
    Zr,
    Ra,
    Pa,
    wt,
    Ia,
    l2,
    ka,
    c2,
    p2,
    Na,
    d2,
    Bt,
    pr = Ye(() => {
      l()
      c()
      p()
      ;(Sy = __STORYBOOKCOMPONENTS__),
        ({
          A: wy,
          ActionBar: Ea,
          AddonPanel: Da,
          Badge: By,
          Bar: Ty,
          Blockquote: _y,
          Button: Oy,
          Code: va,
          DL: Ry,
          Div: Py,
          DocumentWrapper: Iy,
          ErrorFormatter: Ca,
          FlexBar: xa,
          Form: we,
          H1: ky,
          H2: Fa,
          H3: Sa,
          H4: Ny,
          H5: jy,
          H6: My,
          HR: qy,
          IconButton: ht,
          IconButtonSkeleton: wa,
          Icons: Be,
          Img: Ly,
          LI: $y,
          Link: cr,
          ListItem: Uy,
          Loader: Ba,
          OL: zy,
          P: Hy,
          Placeholder: Gy,
          Pre: Wy,
          ResetWrapper: Ta,
          ScrollArea: Vy,
          Separator: Ky,
          Spaced: Yy,
          Span: Xy,
          StorybookIcon: Jy,
          StorybookLogo: Qy,
          Symbols: Zy,
          SyntaxHighlighter: Qr,
          TT: e2,
          TabBar: t2,
          TabButton: r2,
          TabWrapper: n2,
          Table: a2,
          Tabs: o2,
          TabsState: _a,
          TooltipLinkList: u2,
          TooltipMessage: i2,
          TooltipNote: Oa,
          UL: s2,
          WithTooltip: Zr,
          WithTooltipPure: Ra,
          Zoom: Pa,
          codeCommon: wt,
          components: Ia,
          createCopyToClipboardFunction: l2,
          getStoryHref: ka,
          icons: c2,
          interleaveSeparators: p2,
          nameSpaceClassNames: Na,
          resetComponents: d2,
          withReset: Bt,
        } = __STORYBOOKCOMPONENTS__)
    })
  var Te,
    dr,
    ja = Ye(() => {
      l()
      c()
      p()
      ;(Te = (e) => `control-${e.replace(/\s+/g, '-')}`),
        (dr = (e) => `set-${e.replace(/\s+/g, '-')}`)
    })
  var XI,
    JI,
    QI,
    ZI,
    Ci,
    e7,
    t7,
    xi,
    r7,
    n7,
    a7,
    o7,
    u7,
    i7,
    f2,
    Fi,
    s7,
    l7,
    c7,
    p7,
    q,
    Ma,
    d7,
    Si,
    f7,
    qa = Ye(() => {
      l()
      c()
      p()
      ;(XI = __STORYBOOKTHEMING__),
        ({
          CacheProvider: JI,
          ClassNames: QI,
          Global: ZI,
          ThemeProvider: Ci,
          background: e7,
          color: t7,
          convert: xi,
          create: r7,
          createCache: n7,
          createGlobal: a7,
          createReset: o7,
          css: u7,
          darken: i7,
          ensure: f2,
          ignoreSsrWarning: Fi,
          isPropValid: s7,
          jsx: l7,
          keyframes: c7,
          lighten: p7,
          styled: q,
          themes: Ma,
          typography: d7,
          useTheme: Si,
          withTheme: f7,
        } = __STORYBOOKTHEMING__)
    })
  var Ya = F((kk, Pi) => {
    l()
    c()
    p()
    function Q2(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
        a[r] = t(e[r], r, e)
      return a
    }
    Pi.exports = Q2
  })
  var ki = F((qk, Ii) => {
    l()
    c()
    p()
    function Z2() {
      ;(this.__data__ = []), (this.size = 0)
    }
    Ii.exports = Z2
  })
  var tn = F((zk, Ni) => {
    l()
    c()
    p()
    function e1(e, t) {
      return e === t || (e !== e && t !== t)
    }
    Ni.exports = e1
  })
  var yr = F((Vk, ji) => {
    l()
    c()
    p()
    var t1 = tn()
    function r1(e, t) {
      for (var r = e.length; r--; ) if (t1(e[r][0], t)) return r
      return -1
    }
    ji.exports = r1
  })
  var qi = F((Jk, Mi) => {
    l()
    c()
    p()
    var n1 = yr(),
      a1 = Array.prototype,
      o1 = a1.splice
    function u1(e) {
      var t = this.__data__,
        r = n1(t, e)
      if (r < 0) return !1
      var n = t.length - 1
      return r == n ? t.pop() : o1.call(t, r, 1), --this.size, !0
    }
    Mi.exports = u1
  })
  var $i = F((tN, Li) => {
    l()
    c()
    p()
    var i1 = yr()
    function s1(e) {
      var t = this.__data__,
        r = i1(t, e)
      return r < 0 ? void 0 : t[r][1]
    }
    Li.exports = s1
  })
  var zi = F((oN, Ui) => {
    l()
    c()
    p()
    var l1 = yr()
    function c1(e) {
      return l1(this.__data__, e) > -1
    }
    Ui.exports = c1
  })
  var Gi = F((lN, Hi) => {
    l()
    c()
    p()
    var p1 = yr()
    function d1(e, t) {
      var r = this.__data__,
        n = p1(r, e)
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this
    }
    Hi.exports = d1
  })
  var br = F((fN, Wi) => {
    l()
    c()
    p()
    var f1 = ki(),
      h1 = qi(),
      g1 = $i(),
      m1 = zi(),
      y1 = Gi()
    function Rt(e) {
      var t = -1,
        r = e == null ? 0 : e.length
      for (this.clear(); ++t < r; ) {
        var n = e[t]
        this.set(n[0], n[1])
      }
    }
    Rt.prototype.clear = f1
    Rt.prototype.delete = h1
    Rt.prototype.get = g1
    Rt.prototype.has = m1
    Rt.prototype.set = y1
    Wi.exports = Rt
  })
  var Ki = F((yN, Vi) => {
    l()
    c()
    p()
    var b1 = br()
    function A1() {
      ;(this.__data__ = new b1()), (this.size = 0)
    }
    Vi.exports = A1
  })
  var Xi = F((DN, Yi) => {
    l()
    c()
    p()
    function E1(e) {
      var t = this.__data__,
        r = t.delete(e)
      return (this.size = t.size), r
    }
    Yi.exports = E1
  })
  var Qi = F((FN, Ji) => {
    l()
    c()
    p()
    function D1(e) {
      return this.__data__.get(e)
    }
    Ji.exports = D1
  })
  var es = F((TN, Zi) => {
    l()
    c()
    p()
    function v1(e) {
      return this.__data__.has(e)
    }
    Zi.exports = v1
  })
  var Xa = F((PN, ts) => {
    l()
    c()
    p()
    var C1 =
      typeof window == 'object' && window && window.Object === Object && window
    ts.exports = C1
  })
  var je = F((jN, rs) => {
    l()
    c()
    p()
    var x1 = Xa(),
      F1 = typeof self == 'object' && self && self.Object === Object && self,
      S1 = x1 || F1 || Function('return this')()
    rs.exports = S1
  })
  var mt = F(($N, ns) => {
    l()
    c()
    p()
    var w1 = je(),
      B1 = w1.Symbol
    ns.exports = B1
  })
  var is = F((GN, us) => {
    l()
    c()
    p()
    var as = mt(),
      os = Object.prototype,
      T1 = os.hasOwnProperty,
      _1 = os.toString,
      Ar = as ? as.toStringTag : void 0
    function O1(e) {
      var t = T1.call(e, Ar),
        r = e[Ar]
      try {
        e[Ar] = void 0
        var n = !0
      } catch {}
      var a = _1.call(e)
      return n && (t ? (e[Ar] = r) : delete e[Ar]), a
    }
    us.exports = O1
  })
  var ls = F((YN, ss) => {
    l()
    c()
    p()
    var R1 = Object.prototype,
      P1 = R1.toString
    function I1(e) {
      return P1.call(e)
    }
    ss.exports = I1
  })
  var yt = F((ZN, ds) => {
    l()
    c()
    p()
    var cs = mt(),
      k1 = is(),
      N1 = ls(),
      j1 = '[object Null]',
      M1 = '[object Undefined]',
      ps = cs ? cs.toStringTag : void 0
    function q1(e) {
      return e == null
        ? e === void 0
          ? M1
          : j1
        : ps && ps in Object(e)
        ? k1(e)
        : N1(e)
    }
    ds.exports = q1
  })
  var Ue = F((nj, fs) => {
    l()
    c()
    p()
    function L1(e) {
      var t = typeof e
      return e != null && (t == 'object' || t == 'function')
    }
    fs.exports = L1
  })
  var Ja = F((ij, hs) => {
    l()
    c()
    p()
    var $1 = yt(),
      U1 = Ue(),
      z1 = '[object AsyncFunction]',
      H1 = '[object Function]',
      G1 = '[object GeneratorFunction]',
      W1 = '[object Proxy]'
    function V1(e) {
      if (!U1(e)) return !1
      var t = $1(e)
      return t == H1 || t == G1 || t == z1 || t == W1
    }
    hs.exports = V1
  })
  var ms = F((pj, gs) => {
    l()
    c()
    p()
    var K1 = je(),
      Y1 = K1['__core-js_shared__']
    gs.exports = Y1
  })
  var As = F((gj, bs) => {
    l()
    c()
    p()
    var Qa = ms(),
      ys = (function () {
        var e = /[^.]+$/.exec((Qa && Qa.keys && Qa.keys.IE_PROTO) || '')
        return e ? 'Symbol(src)_1.' + e : ''
      })()
    function X1(e) {
      return !!ys && ys in e
    }
    bs.exports = X1
  })
  var Za = F((Aj, Es) => {
    l()
    c()
    p()
    var J1 = Function.prototype,
      Q1 = J1.toString
    function Z1(e) {
      if (e != null) {
        try {
          return Q1.call(e)
        } catch {}
        try {
          return e + ''
        } catch {}
      }
      return ''
    }
    Es.exports = Z1
  })
  var vs = F((Cj, Ds) => {
    l()
    c()
    p()
    var eb = Ja(),
      tb = As(),
      rb = Ue(),
      nb = Za(),
      ab = /[\\^$.*+?()[\]{}|]/g,
      ob = /^\[object .+?Constructor\]$/,
      ub = Function.prototype,
      ib = Object.prototype,
      sb = ub.toString,
      lb = ib.hasOwnProperty,
      cb = RegExp(
        '^' +
          sb
            .call(lb)
            .replace(ab, '\\$&')
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              '$1.*?'
            ) +
          '$'
      )
    function pb(e) {
      if (!rb(e) || tb(e)) return !1
      var t = eb(e) ? cb : ob
      return t.test(nb(e))
    }
    Ds.exports = pb
  })
  var xs = F((wj, Cs) => {
    l()
    c()
    p()
    function db(e, t) {
      return e?.[t]
    }
    Cs.exports = db
  })
  var ot = F((Oj, Fs) => {
    l()
    c()
    p()
    var fb = vs(),
      hb = xs()
    function gb(e, t) {
      var r = hb(e, t)
      return fb(r) ? r : void 0
    }
    Fs.exports = gb
  })
  var rn = F((kj, Ss) => {
    l()
    c()
    p()
    var mb = ot(),
      yb = je(),
      bb = mb(yb, 'Map')
    Ss.exports = bb
  })
  var Er = F((qj, ws) => {
    l()
    c()
    p()
    var Ab = ot(),
      Eb = Ab(Object, 'create')
    ws.exports = Eb
  })
  var _s = F((zj, Ts) => {
    l()
    c()
    p()
    var Bs = Er()
    function Db() {
      ;(this.__data__ = Bs ? Bs(null) : {}), (this.size = 0)
    }
    Ts.exports = Db
  })
  var Rs = F((Vj, Os) => {
    l()
    c()
    p()
    function vb(e) {
      var t = this.has(e) && delete this.__data__[e]
      return (this.size -= t ? 1 : 0), t
    }
    Os.exports = vb
  })
  var Is = F((Jj, Ps) => {
    l()
    c()
    p()
    var Cb = Er(),
      xb = '__lodash_hash_undefined__',
      Fb = Object.prototype,
      Sb = Fb.hasOwnProperty
    function wb(e) {
      var t = this.__data__
      if (Cb) {
        var r = t[e]
        return r === xb ? void 0 : r
      }
      return Sb.call(t, e) ? t[e] : void 0
    }
    Ps.exports = wb
  })
  var Ns = F((tM, ks) => {
    l()
    c()
    p()
    var Bb = Er(),
      Tb = Object.prototype,
      _b = Tb.hasOwnProperty
    function Ob(e) {
      var t = this.__data__
      return Bb ? t[e] !== void 0 : _b.call(t, e)
    }
    ks.exports = Ob
  })
  var Ms = F((oM, js) => {
    l()
    c()
    p()
    var Rb = Er(),
      Pb = '__lodash_hash_undefined__'
    function Ib(e, t) {
      var r = this.__data__
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = Rb && t === void 0 ? Pb : t),
        this
      )
    }
    js.exports = Ib
  })
  var Ls = F((lM, qs) => {
    l()
    c()
    p()
    var kb = _s(),
      Nb = Rs(),
      jb = Is(),
      Mb = Ns(),
      qb = Ms()
    function Pt(e) {
      var t = -1,
        r = e == null ? 0 : e.length
      for (this.clear(); ++t < r; ) {
        var n = e[t]
        this.set(n[0], n[1])
      }
    }
    Pt.prototype.clear = kb
    Pt.prototype.delete = Nb
    Pt.prototype.get = jb
    Pt.prototype.has = Mb
    Pt.prototype.set = qb
    qs.exports = Pt
  })
  var zs = F((fM, Us) => {
    l()
    c()
    p()
    var $s = Ls(),
      Lb = br(),
      $b = rn()
    function Ub() {
      ;(this.size = 0),
        (this.__data__ = {
          hash: new $s(),
          map: new ($b || Lb)(),
          string: new $s(),
        })
    }
    Us.exports = Ub
  })
  var Gs = F((yM, Hs) => {
    l()
    c()
    p()
    function zb(e) {
      var t = typeof e
      return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
        ? e !== '__proto__'
        : e === null
    }
    Hs.exports = zb
  })
  var Dr = F((DM, Ws) => {
    l()
    c()
    p()
    var Hb = Gs()
    function Gb(e, t) {
      var r = e.__data__
      return Hb(t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map
    }
    Ws.exports = Gb
  })
  var Ks = F((FM, Vs) => {
    l()
    c()
    p()
    var Wb = Dr()
    function Vb(e) {
      var t = Wb(this, e).delete(e)
      return (this.size -= t ? 1 : 0), t
    }
    Vs.exports = Vb
  })
  var Xs = F((TM, Ys) => {
    l()
    c()
    p()
    var Kb = Dr()
    function Yb(e) {
      return Kb(this, e).get(e)
    }
    Ys.exports = Yb
  })
  var Qs = F((PM, Js) => {
    l()
    c()
    p()
    var Xb = Dr()
    function Jb(e) {
      return Xb(this, e).has(e)
    }
    Js.exports = Jb
  })
  var el = F((jM, Zs) => {
    l()
    c()
    p()
    var Qb = Dr()
    function Zb(e, t) {
      var r = Qb(this, e),
        n = r.size
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this
    }
    Zs.exports = Zb
  })
  var nn = F(($M, tl) => {
    l()
    c()
    p()
    var eA = zs(),
      tA = Ks(),
      rA = Xs(),
      nA = Qs(),
      aA = el()
    function It(e) {
      var t = -1,
        r = e == null ? 0 : e.length
      for (this.clear(); ++t < r; ) {
        var n = e[t]
        this.set(n[0], n[1])
      }
    }
    It.prototype.clear = eA
    It.prototype.delete = tA
    It.prototype.get = rA
    It.prototype.has = nA
    It.prototype.set = aA
    tl.exports = It
  })
  var nl = F((GM, rl) => {
    l()
    c()
    p()
    var oA = br(),
      uA = rn(),
      iA = nn(),
      sA = 200
    function lA(e, t) {
      var r = this.__data__
      if (r instanceof oA) {
        var n = r.__data__
        if (!uA || n.length < sA - 1)
          return n.push([e, t]), (this.size = ++r.size), this
        r = this.__data__ = new iA(n)
      }
      return r.set(e, t), (this.size = r.size), this
    }
    rl.exports = lA
  })
  var an = F((YM, al) => {
    l()
    c()
    p()
    var cA = br(),
      pA = Ki(),
      dA = Xi(),
      fA = Qi(),
      hA = es(),
      gA = nl()
    function kt(e) {
      var t = (this.__data__ = new cA(e))
      this.size = t.size
    }
    kt.prototype.clear = pA
    kt.prototype.delete = dA
    kt.prototype.get = fA
    kt.prototype.has = hA
    kt.prototype.set = gA
    al.exports = kt
  })
  var ul = F((ZM, ol) => {
    l()
    c()
    p()
    var mA = '__lodash_hash_undefined__'
    function yA(e) {
      return this.__data__.set(e, mA), this
    }
    ol.exports = yA
  })
  var sl = F((nq, il) => {
    l()
    c()
    p()
    function bA(e) {
      return this.__data__.has(e)
    }
    il.exports = bA
  })
  var eo = F((iq, ll) => {
    l()
    c()
    p()
    var AA = nn(),
      EA = ul(),
      DA = sl()
    function on(e) {
      var t = -1,
        r = e == null ? 0 : e.length
      for (this.__data__ = new AA(); ++t < r; ) this.add(e[t])
    }
    on.prototype.add = on.prototype.push = EA
    on.prototype.has = DA
    ll.exports = on
  })
  var pl = F((pq, cl) => {
    l()
    c()
    p()
    function vA(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0
      return !1
    }
    cl.exports = vA
  })
  var to = F((gq, dl) => {
    l()
    c()
    p()
    function CA(e, t) {
      return e.has(t)
    }
    dl.exports = CA
  })
  var ro = F((Aq, fl) => {
    l()
    c()
    p()
    var xA = eo(),
      FA = pl(),
      SA = to(),
      wA = 1,
      BA = 2
    function TA(e, t, r, n, a, o) {
      var u = r & wA,
        i = e.length,
        s = t.length
      if (i != s && !(u && s > i)) return !1
      var d = o.get(e),
        y = o.get(t)
      if (d && y) return d == t && y == e
      var A = -1,
        g = !0,
        h = r & BA ? new xA() : void 0
      for (o.set(e, t), o.set(t, e); ++A < i; ) {
        var E = e[A],
          b = t[A]
        if (n) var x = u ? n(b, E, A, t, e, o) : n(E, b, A, e, t, o)
        if (x !== void 0) {
          if (x) continue
          g = !1
          break
        }
        if (h) {
          if (
            !FA(t, function (S, P) {
              if (!SA(h, P) && (E === S || a(E, S, r, n, o))) return h.push(P)
            })
          ) {
            g = !1
            break
          }
        } else if (!(E === b || a(E, b, r, n, o))) {
          g = !1
          break
        }
      }
      return o.delete(e), o.delete(t), g
    }
    fl.exports = TA
  })
  var no = F((Cq, hl) => {
    l()
    c()
    p()
    var _A = je(),
      OA = _A.Uint8Array
    hl.exports = OA
  })
  var ml = F((wq, gl) => {
    l()
    c()
    p()
    function RA(e) {
      var t = -1,
        r = Array(e.size)
      return (
        e.forEach(function (n, a) {
          r[++t] = [a, n]
        }),
        r
      )
    }
    gl.exports = RA
  })
  var un = F((Oq, yl) => {
    l()
    c()
    p()
    function PA(e) {
      var t = -1,
        r = Array(e.size)
      return (
        e.forEach(function (n) {
          r[++t] = n
        }),
        r
      )
    }
    yl.exports = PA
  })
  var vl = F((kq, Dl) => {
    l()
    c()
    p()
    var bl = mt(),
      Al = no(),
      IA = tn(),
      kA = ro(),
      NA = ml(),
      jA = un(),
      MA = 1,
      qA = 2,
      LA = '[object Boolean]',
      $A = '[object Date]',
      UA = '[object Error]',
      zA = '[object Map]',
      HA = '[object Number]',
      GA = '[object RegExp]',
      WA = '[object Set]',
      VA = '[object String]',
      KA = '[object Symbol]',
      YA = '[object ArrayBuffer]',
      XA = '[object DataView]',
      El = bl ? bl.prototype : void 0,
      ao = El ? El.valueOf : void 0
    function JA(e, t, r, n, a, o, u) {
      switch (r) {
        case XA:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1
          ;(e = e.buffer), (t = t.buffer)
        case YA:
          return !(e.byteLength != t.byteLength || !o(new Al(e), new Al(t)))
        case LA:
        case $A:
        case HA:
          return IA(+e, +t)
        case UA:
          return e.name == t.name && e.message == t.message
        case GA:
        case VA:
          return e == t + ''
        case zA:
          var i = NA
        case WA:
          var s = n & MA
          if ((i || (i = jA), e.size != t.size && !s)) return !1
          var d = u.get(e)
          if (d) return d == t
          ;(n |= qA), u.set(e, t)
          var y = kA(i(e), i(t), n, a, o, u)
          return u.delete(e), y
        case KA:
          if (ao) return ao.call(e) == ao.call(t)
      }
      return !1
    }
    Dl.exports = JA
  })
  var sn = F((qq, Cl) => {
    l()
    c()
    p()
    function QA(e, t) {
      for (var r = -1, n = t.length, a = e.length; ++r < n; ) e[a + r] = t[r]
      return e
    }
    Cl.exports = QA
  })
  var ze = F((zq, xl) => {
    l()
    c()
    p()
    var ZA = Array.isArray
    xl.exports = ZA
  })
  var oo = F((Vq, Fl) => {
    l()
    c()
    p()
    var eE = sn(),
      tE = ze()
    function rE(e, t, r) {
      var n = t(e)
      return tE(e) ? n : eE(n, r(e))
    }
    Fl.exports = rE
  })
  var wl = F((Jq, Sl) => {
    l()
    c()
    p()
    function nE(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, a = 0, o = []; ++r < n; ) {
        var u = e[r]
        t(u, r, e) && (o[a++] = u)
      }
      return o
    }
    Sl.exports = nE
  })
  var uo = F((tL, Bl) => {
    l()
    c()
    p()
    function aE() {
      return []
    }
    Bl.exports = aE
  })
  var ln = F((oL, _l) => {
    l()
    c()
    p()
    var oE = wl(),
      uE = uo(),
      iE = Object.prototype,
      sE = iE.propertyIsEnumerable,
      Tl = Object.getOwnPropertySymbols,
      lE = Tl
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                oE(Tl(e), function (t) {
                  return sE.call(e, t)
                }))
          }
        : uE
    _l.exports = lE
  })
  var Rl = F((lL, Ol) => {
    l()
    c()
    p()
    function cE(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r)
      return n
    }
    Ol.exports = cE
  })
  var Qe = F((fL, Pl) => {
    l()
    c()
    p()
    function pE(e) {
      return e != null && typeof e == 'object'
    }
    Pl.exports = pE
  })
  var kl = F((yL, Il) => {
    l()
    c()
    p()
    var dE = yt(),
      fE = Qe(),
      hE = '[object Arguments]'
    function gE(e) {
      return fE(e) && dE(e) == hE
    }
    Il.exports = gE
  })
  var cn = F((DL, Ml) => {
    l()
    c()
    p()
    var Nl = kl(),
      mE = Qe(),
      jl = Object.prototype,
      yE = jl.hasOwnProperty,
      bE = jl.propertyIsEnumerable,
      AE = Nl(
        (function () {
          return arguments
        })()
      )
        ? Nl
        : function (e) {
            return mE(e) && yE.call(e, 'callee') && !bE.call(e, 'callee')
          }
    Ml.exports = AE
  })
  var Ll = F((FL, ql) => {
    l()
    c()
    p()
    function EE() {
      return !1
    }
    ql.exports = EE
  })
  var pn = F((vr, Nt) => {
    l()
    c()
    p()
    var DE = je(),
      vE = Ll(),
      zl = typeof vr == 'object' && vr && !vr.nodeType && vr,
      $l = zl && typeof Nt == 'object' && Nt && !Nt.nodeType && Nt,
      CE = $l && $l.exports === zl,
      Ul = CE ? DE.Buffer : void 0,
      xE = Ul ? Ul.isBuffer : void 0,
      FE = xE || vE
    Nt.exports = FE
  })
  var dn = F((RL, Hl) => {
    l()
    c()
    p()
    var SE = 9007199254740991,
      wE = /^(?:0|[1-9]\d*)$/
    function BE(e, t) {
      var r = typeof e
      return (
        (t = t ?? SE),
        !!t &&
          (r == 'number' || (r != 'symbol' && wE.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      )
    }
    Hl.exports = BE
  })
  var fn = F((NL, Gl) => {
    l()
    c()
    p()
    var TE = 9007199254740991
    function _E(e) {
      return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= TE
    }
    Gl.exports = _E
  })
  var Vl = F((LL, Wl) => {
    l()
    c()
    p()
    var OE = yt(),
      RE = fn(),
      PE = Qe(),
      IE = '[object Arguments]',
      kE = '[object Array]',
      NE = '[object Boolean]',
      jE = '[object Date]',
      ME = '[object Error]',
      qE = '[object Function]',
      LE = '[object Map]',
      $E = '[object Number]',
      UE = '[object Object]',
      zE = '[object RegExp]',
      HE = '[object Set]',
      GE = '[object String]',
      WE = '[object WeakMap]',
      VE = '[object ArrayBuffer]',
      KE = '[object DataView]',
      YE = '[object Float32Array]',
      XE = '[object Float64Array]',
      JE = '[object Int8Array]',
      QE = '[object Int16Array]',
      ZE = '[object Int32Array]',
      eD = '[object Uint8Array]',
      tD = '[object Uint8ClampedArray]',
      rD = '[object Uint16Array]',
      nD = '[object Uint32Array]',
      ce = {}
    ce[YE] =
      ce[XE] =
      ce[JE] =
      ce[QE] =
      ce[ZE] =
      ce[eD] =
      ce[tD] =
      ce[rD] =
      ce[nD] =
        !0
    ce[IE] =
      ce[kE] =
      ce[VE] =
      ce[NE] =
      ce[KE] =
      ce[jE] =
      ce[ME] =
      ce[qE] =
      ce[LE] =
      ce[$E] =
      ce[UE] =
      ce[zE] =
      ce[HE] =
      ce[GE] =
      ce[WE] =
        !1
    function aD(e) {
      return PE(e) && RE(e.length) && !!ce[OE(e)]
    }
    Wl.exports = aD
  })
  var hn = F((HL, Kl) => {
    l()
    c()
    p()
    function oD(e) {
      return function (t) {
        return e(t)
      }
    }
    Kl.exports = oD
  })
  var gn = F((Cr, jt) => {
    l()
    c()
    p()
    var uD = Xa(),
      Yl = typeof Cr == 'object' && Cr && !Cr.nodeType && Cr,
      xr = Yl && typeof jt == 'object' && jt && !jt.nodeType && jt,
      iD = xr && xr.exports === Yl,
      io = iD && uD.process,
      sD = (function () {
        try {
          var e = xr && xr.require && xr.require('util').types
          return e || (io && io.binding && io.binding('util'))
        } catch {}
      })()
    jt.exports = sD
  })
  var so = F((JL, Ql) => {
    l()
    c()
    p()
    var lD = Vl(),
      cD = hn(),
      Xl = gn(),
      Jl = Xl && Xl.isTypedArray,
      pD = Jl ? cD(Jl) : lD
    Ql.exports = pD
  })
  var lo = F((t$, Zl) => {
    l()
    c()
    p()
    var dD = Rl(),
      fD = cn(),
      hD = ze(),
      gD = pn(),
      mD = dn(),
      yD = so(),
      bD = Object.prototype,
      AD = bD.hasOwnProperty
    function ED(e, t) {
      var r = hD(e),
        n = !r && fD(e),
        a = !r && !n && gD(e),
        o = !r && !n && !a && yD(e),
        u = r || n || a || o,
        i = u ? dD(e.length, String) : [],
        s = i.length
      for (var d in e)
        (t || AD.call(e, d)) &&
          !(
            u &&
            (d == 'length' ||
              (a && (d == 'offset' || d == 'parent')) ||
              (o &&
                (d == 'buffer' || d == 'byteLength' || d == 'byteOffset')) ||
              mD(d, s))
          ) &&
          i.push(d)
      return i
    }
    Zl.exports = ED
  })
  var mn = F((o$, ec) => {
    l()
    c()
    p()
    var DD = Object.prototype
    function vD(e) {
      var t = e && e.constructor,
        r = (typeof t == 'function' && t.prototype) || DD
      return e === r
    }
    ec.exports = vD
  })
  var co = F((l$, tc) => {
    l()
    c()
    p()
    function CD(e, t) {
      return function (r) {
        return e(t(r))
      }
    }
    tc.exports = CD
  })
  var nc = F((f$, rc) => {
    l()
    c()
    p()
    var xD = co(),
      FD = xD(Object.keys, Object)
    rc.exports = FD
  })
  var oc = F((y$, ac) => {
    l()
    c()
    p()
    var SD = mn(),
      wD = nc(),
      BD = Object.prototype,
      TD = BD.hasOwnProperty
    function _D(e) {
      if (!SD(e)) return wD(e)
      var t = []
      for (var r in Object(e)) TD.call(e, r) && r != 'constructor' && t.push(r)
      return t
    }
    ac.exports = _D
  })
  var po = F((D$, uc) => {
    l()
    c()
    p()
    var OD = Ja(),
      RD = fn()
    function PD(e) {
      return e != null && RD(e.length) && !OD(e)
    }
    uc.exports = PD
  })
  var Mt = F((F$, ic) => {
    l()
    c()
    p()
    var ID = lo(),
      kD = oc(),
      ND = po()
    function jD(e) {
      return ND(e) ? ID(e) : kD(e)
    }
    ic.exports = jD
  })
  var fo = F((T$, sc) => {
    l()
    c()
    p()
    var MD = oo(),
      qD = ln(),
      LD = Mt()
    function $D(e) {
      return MD(e, LD, qD)
    }
    sc.exports = $D
  })
  var pc = F((P$, cc) => {
    l()
    c()
    p()
    var lc = fo(),
      UD = 1,
      zD = Object.prototype,
      HD = zD.hasOwnProperty
    function GD(e, t, r, n, a, o) {
      var u = r & UD,
        i = lc(e),
        s = i.length,
        d = lc(t),
        y = d.length
      if (s != y && !u) return !1
      for (var A = s; A--; ) {
        var g = i[A]
        if (!(u ? g in t : HD.call(t, g))) return !1
      }
      var h = o.get(e),
        E = o.get(t)
      if (h && E) return h == t && E == e
      var b = !0
      o.set(e, t), o.set(t, e)
      for (var x = u; ++A < s; ) {
        g = i[A]
        var S = e[g],
          P = t[g]
        if (n) var N = u ? n(P, S, g, t, e, o) : n(S, P, g, e, t, o)
        if (!(N === void 0 ? S === P || a(S, P, r, n, o) : N)) {
          b = !1
          break
        }
        x || (x = g == 'constructor')
      }
      if (b && !x) {
        var $ = e.constructor,
          w = t.constructor
        $ != w &&
          'constructor' in e &&
          'constructor' in t &&
          !(
            typeof $ == 'function' &&
            $ instanceof $ &&
            typeof w == 'function' &&
            w instanceof w
          ) &&
          (b = !1)
      }
      return o.delete(e), o.delete(t), b
    }
    cc.exports = GD
  })
  var fc = F((j$, dc) => {
    l()
    c()
    p()
    var WD = ot(),
      VD = je(),
      KD = WD(VD, 'DataView')
    dc.exports = KD
  })
  var gc = F(($$, hc) => {
    l()
    c()
    p()
    var YD = ot(),
      XD = je(),
      JD = YD(XD, 'Promise')
    hc.exports = JD
  })
  var ho = F((G$, mc) => {
    l()
    c()
    p()
    var QD = ot(),
      ZD = je(),
      ev = QD(ZD, 'Set')
    mc.exports = ev
  })
  var bc = F((Y$, yc) => {
    l()
    c()
    p()
    var tv = ot(),
      rv = je(),
      nv = tv(rv, 'WeakMap')
    yc.exports = nv
  })
  var Fr = F((Z$, Fc) => {
    l()
    c()
    p()
    var go = fc(),
      mo = rn(),
      yo = gc(),
      bo = ho(),
      Ao = bc(),
      xc = yt(),
      qt = Za(),
      Ac = '[object Map]',
      av = '[object Object]',
      Ec = '[object Promise]',
      Dc = '[object Set]',
      vc = '[object WeakMap]',
      Cc = '[object DataView]',
      ov = qt(go),
      uv = qt(mo),
      iv = qt(yo),
      sv = qt(bo),
      lv = qt(Ao),
      bt = xc
    ;((go && bt(new go(new ArrayBuffer(1))) != Cc) ||
      (mo && bt(new mo()) != Ac) ||
      (yo && bt(yo.resolve()) != Ec) ||
      (bo && bt(new bo()) != Dc) ||
      (Ao && bt(new Ao()) != vc)) &&
      (bt = function (e) {
        var t = xc(e),
          r = t == av ? e.constructor : void 0,
          n = r ? qt(r) : ''
        if (n)
          switch (n) {
            case ov:
              return Cc
            case uv:
              return Ac
            case iv:
              return Ec
            case sv:
              return Dc
            case lv:
              return vc
          }
        return t
      })
    Fc.exports = bt
  })
  var Pc = F((nU, Rc) => {
    l()
    c()
    p()
    var Eo = an(),
      cv = ro(),
      pv = vl(),
      dv = pc(),
      Sc = Fr(),
      wc = ze(),
      Bc = pn(),
      fv = so(),
      hv = 1,
      Tc = '[object Arguments]',
      _c = '[object Array]',
      yn = '[object Object]',
      gv = Object.prototype,
      Oc = gv.hasOwnProperty
    function mv(e, t, r, n, a, o) {
      var u = wc(e),
        i = wc(t),
        s = u ? _c : Sc(e),
        d = i ? _c : Sc(t)
      ;(s = s == Tc ? yn : s), (d = d == Tc ? yn : d)
      var y = s == yn,
        A = d == yn,
        g = s == d
      if (g && Bc(e)) {
        if (!Bc(t)) return !1
        ;(u = !0), (y = !1)
      }
      if (g && !y)
        return (
          o || (o = new Eo()),
          u || fv(e) ? cv(e, t, r, n, a, o) : pv(e, t, s, r, n, a, o)
        )
      if (!(r & hv)) {
        var h = y && Oc.call(e, '__wrapped__'),
          E = A && Oc.call(t, '__wrapped__')
        if (h || E) {
          var b = h ? e.value() : e,
            x = E ? t.value() : t
          return o || (o = new Eo()), a(b, x, r, n, o)
        }
      }
      return g ? (o || (o = new Eo()), dv(e, t, r, n, a, o)) : !1
    }
    Rc.exports = mv
  })
  var Do = F((iU, Nc) => {
    l()
    c()
    p()
    var yv = Pc(),
      Ic = Qe()
    function kc(e, t, r, n, a) {
      return e === t
        ? !0
        : e == null || t == null || (!Ic(e) && !Ic(t))
        ? e !== e && t !== t
        : yv(e, t, r, n, kc, a)
    }
    Nc.exports = kc
  })
  var Mc = F((pU, jc) => {
    l()
    c()
    p()
    var bv = an(),
      Av = Do(),
      Ev = 1,
      Dv = 2
    function vv(e, t, r, n) {
      var a = r.length,
        o = a,
        u = !n
      if (e == null) return !o
      for (e = Object(e); a--; ) {
        var i = r[a]
        if (u && i[2] ? i[1] !== e[i[0]] : !(i[0] in e)) return !1
      }
      for (; ++a < o; ) {
        i = r[a]
        var s = i[0],
          d = e[s],
          y = i[1]
        if (u && i[2]) {
          if (d === void 0 && !(s in e)) return !1
        } else {
          var A = new bv()
          if (n) var g = n(d, y, s, e, t, A)
          if (!(g === void 0 ? Av(y, d, Ev | Dv, n, A) : g)) return !1
        }
      }
      return !0
    }
    jc.exports = vv
  })
  var vo = F((gU, qc) => {
    l()
    c()
    p()
    var Cv = Ue()
    function xv(e) {
      return e === e && !Cv(e)
    }
    qc.exports = xv
  })
  var $c = F((AU, Lc) => {
    l()
    c()
    p()
    var Fv = vo(),
      Sv = Mt()
    function wv(e) {
      for (var t = Sv(e), r = t.length; r--; ) {
        var n = t[r],
          a = e[n]
        t[r] = [n, a, Fv(a)]
      }
      return t
    }
    Lc.exports = wv
  })
  var Co = F((CU, Uc) => {
    l()
    c()
    p()
    function Bv(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
      }
    }
    Uc.exports = Bv
  })
  var Hc = F((wU, zc) => {
    l()
    c()
    p()
    var Tv = Mc(),
      _v = $c(),
      Ov = Co()
    function Rv(e) {
      var t = _v(e)
      return t.length == 1 && t[0][2]
        ? Ov(t[0][0], t[0][1])
        : function (r) {
            return r === e || Tv(r, e, t)
          }
    }
    zc.exports = Rv
  })
  var Sr = F((OU, Gc) => {
    l()
    c()
    p()
    var Pv = yt(),
      Iv = Qe(),
      kv = '[object Symbol]'
    function Nv(e) {
      return typeof e == 'symbol' || (Iv(e) && Pv(e) == kv)
    }
    Gc.exports = Nv
  })
  var bn = F((kU, Wc) => {
    l()
    c()
    p()
    var jv = ze(),
      Mv = Sr(),
      qv = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      Lv = /^\w*$/
    function $v(e, t) {
      if (jv(e)) return !1
      var r = typeof e
      return r == 'number' ||
        r == 'symbol' ||
        r == 'boolean' ||
        e == null ||
        Mv(e)
        ? !0
        : Lv.test(e) || !qv.test(e) || (t != null && e in Object(t))
    }
    Wc.exports = $v
  })
  var Yc = F((qU, Kc) => {
    l()
    c()
    p()
    var Vc = nn(),
      Uv = 'Expected a function'
    function xo(e, t) {
      if (typeof e != 'function' || (t != null && typeof t != 'function'))
        throw new TypeError(Uv)
      var r = function () {
        var n = arguments,
          a = t ? t.apply(this, n) : n[0],
          o = r.cache
        if (o.has(a)) return o.get(a)
        var u = e.apply(this, n)
        return (r.cache = o.set(a, u) || o), u
      }
      return (r.cache = new (xo.Cache || Vc)()), r
    }
    xo.Cache = Vc
    Kc.exports = xo
  })
  var Jc = F((zU, Xc) => {
    l()
    c()
    p()
    var zv = Yc(),
      Hv = 500
    function Gv(e) {
      var t = zv(e, function (n) {
          return r.size === Hv && r.clear(), n
        }),
        r = t.cache
      return t
    }
    Xc.exports = Gv
  })
  var Zc = F((VU, Qc) => {
    l()
    c()
    p()
    var Wv = Jc(),
      Vv =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      Kv = /\\(\\)?/g,
      Yv = Wv(function (e) {
        var t = []
        return (
          e.charCodeAt(0) === 46 && t.push(''),
          e.replace(Vv, function (r, n, a, o) {
            t.push(a ? o.replace(Kv, '$1') : n || r)
          }),
          t
        )
      })
    Qc.exports = Yv
  })
  var op = F((JU, ap) => {
    l()
    c()
    p()
    var ep = mt(),
      Xv = Ya(),
      Jv = ze(),
      Qv = Sr(),
      Zv = 1 / 0,
      tp = ep ? ep.prototype : void 0,
      rp = tp ? tp.toString : void 0
    function np(e) {
      if (typeof e == 'string') return e
      if (Jv(e)) return Xv(e, np) + ''
      if (Qv(e)) return rp ? rp.call(e) : ''
      var t = e + ''
      return t == '0' && 1 / e == -Zv ? '-0' : t
    }
    ap.exports = np
  })
  var ip = F((tz, up) => {
    l()
    c()
    p()
    var eC = op()
    function tC(e) {
      return e == null ? '' : eC(e)
    }
    up.exports = tC
  })
  var wr = F((oz, sp) => {
    l()
    c()
    p()
    var rC = ze(),
      nC = bn(),
      aC = Zc(),
      oC = ip()
    function uC(e, t) {
      return rC(e) ? e : nC(e, t) ? [e] : aC(oC(e))
    }
    sp.exports = uC
  })
  var Lt = F((lz, lp) => {
    l()
    c()
    p()
    var iC = Sr(),
      sC = 1 / 0
    function lC(e) {
      if (typeof e == 'string' || iC(e)) return e
      var t = e + ''
      return t == '0' && 1 / e == -sC ? '-0' : t
    }
    lp.exports = lC
  })
  var An = F((fz, cp) => {
    l()
    c()
    p()
    var cC = wr(),
      pC = Lt()
    function dC(e, t) {
      t = cC(t, e)
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[pC(t[r++])]
      return r && r == n ? e : void 0
    }
    cp.exports = dC
  })
  var dp = F((yz, pp) => {
    l()
    c()
    p()
    var fC = An()
    function hC(e, t, r) {
      var n = e == null ? void 0 : fC(e, t)
      return n === void 0 ? r : n
    }
    pp.exports = hC
  })
  var hp = F((Dz, fp) => {
    l()
    c()
    p()
    function gC(e, t) {
      return e != null && t in Object(e)
    }
    fp.exports = gC
  })
  var mp = F((Fz, gp) => {
    l()
    c()
    p()
    var mC = wr(),
      yC = cn(),
      bC = ze(),
      AC = dn(),
      EC = fn(),
      DC = Lt()
    function vC(e, t, r) {
      t = mC(t, e)
      for (var n = -1, a = t.length, o = !1; ++n < a; ) {
        var u = DC(t[n])
        if (!(o = e != null && r(e, u))) break
        e = e[u]
      }
      return o || ++n != a
        ? o
        : ((a = e == null ? 0 : e.length),
          !!a && EC(a) && AC(u, a) && (bC(e) || yC(e)))
    }
    gp.exports = vC
  })
  var Fo = F((Tz, yp) => {
    l()
    c()
    p()
    var CC = hp(),
      xC = mp()
    function FC(e, t) {
      return e != null && xC(e, t, CC)
    }
    yp.exports = FC
  })
  var Ap = F((Pz, bp) => {
    l()
    c()
    p()
    var SC = Do(),
      wC = dp(),
      BC = Fo(),
      TC = bn(),
      _C = vo(),
      OC = Co(),
      RC = Lt(),
      PC = 1,
      IC = 2
    function kC(e, t) {
      return TC(e) && _C(t)
        ? OC(RC(e), t)
        : function (r) {
            var n = wC(r, e)
            return n === void 0 && n === t ? BC(r, e) : SC(t, n, PC | IC)
          }
    }
    bp.exports = kC
  })
  var So = F((jz, Ep) => {
    l()
    c()
    p()
    function NC(e) {
      return e
    }
    Ep.exports = NC
  })
  var vp = F(($z, Dp) => {
    l()
    c()
    p()
    function jC(e) {
      return function (t) {
        return t?.[e]
      }
    }
    Dp.exports = jC
  })
  var xp = F((Gz, Cp) => {
    l()
    c()
    p()
    var MC = An()
    function qC(e) {
      return function (t) {
        return MC(t, e)
      }
    }
    Cp.exports = qC
  })
  var Sp = F((Yz, Fp) => {
    l()
    c()
    p()
    var LC = vp(),
      $C = xp(),
      UC = bn(),
      zC = Lt()
    function HC(e) {
      return UC(e) ? LC(zC(e)) : $C(e)
    }
    Fp.exports = HC
  })
  var wo = F((Zz, wp) => {
    l()
    c()
    p()
    var GC = Hc(),
      WC = Ap(),
      VC = So(),
      KC = ze(),
      YC = Sp()
    function XC(e) {
      return typeof e == 'function'
        ? e
        : e == null
        ? VC
        : typeof e == 'object'
        ? KC(e)
          ? WC(e[0], e[1])
          : GC(e)
        : YC(e)
    }
    wp.exports = XC
  })
  var Bo = F((nH, Bp) => {
    l()
    c()
    p()
    var JC = ot(),
      QC = (function () {
        try {
          var e = JC(Object, 'defineProperty')
          return e({}, '', {}), e
        } catch {}
      })()
    Bp.exports = QC
  })
  var En = F((iH, _p) => {
    l()
    c()
    p()
    var Tp = Bo()
    function ZC(e, t, r) {
      t == '__proto__' && Tp
        ? Tp(e, t, {configurable: !0, enumerable: !0, value: r, writable: !0})
        : (e[t] = r)
    }
    _p.exports = ZC
  })
  var Dn = F((pH, Op) => {
    l()
    c()
    p()
    var ex = En(),
      tx = tn(),
      rx = Object.prototype,
      nx = rx.hasOwnProperty
    function ax(e, t, r) {
      var n = e[t]
      ;(!(nx.call(e, t) && tx(n, r)) || (r === void 0 && !(t in e))) &&
        ex(e, t, r)
    }
    Op.exports = ax
  })
  var Ip = F((gH, Pp) => {
    l()
    c()
    p()
    var ox = Dn(),
      ux = wr(),
      ix = dn(),
      Rp = Ue(),
      sx = Lt()
    function lx(e, t, r, n) {
      if (!Rp(e)) return e
      t = ux(t, e)
      for (var a = -1, o = t.length, u = o - 1, i = e; i != null && ++a < o; ) {
        var s = sx(t[a]),
          d = r
        if (s === '__proto__' || s === 'constructor' || s === 'prototype')
          return e
        if (a != u) {
          var y = i[s]
          ;(d = n ? n(y, s, i) : void 0),
            d === void 0 && (d = Rp(y) ? y : ix(t[a + 1]) ? [] : {})
        }
        ox(i, s, d), (i = i[s])
      }
      return e
    }
    Pp.exports = lx
  })
  var To = F((AH, kp) => {
    l()
    c()
    p()
    var cx = An(),
      px = Ip(),
      dx = wr()
    function fx(e, t, r) {
      for (var n = -1, a = t.length, o = {}; ++n < a; ) {
        var u = t[n],
          i = cx(e, u)
        r(i, u) && px(o, dx(u, e), i)
      }
      return o
    }
    kp.exports = fx
  })
  var vn = F((CH, Np) => {
    l()
    c()
    p()
    var hx = co(),
      gx = hx(Object.getPrototypeOf, Object)
    Np.exports = gx
  })
  var _o = F((wH, jp) => {
    l()
    c()
    p()
    var mx = sn(),
      yx = vn(),
      bx = ln(),
      Ax = uo(),
      Ex = Object.getOwnPropertySymbols,
      Dx = Ex
        ? function (e) {
            for (var t = []; e; ) mx(t, bx(e)), (e = yx(e))
            return t
          }
        : Ax
    jp.exports = Dx
  })
  var qp = F((OH, Mp) => {
    l()
    c()
    p()
    function vx(e) {
      var t = []
      if (e != null) for (var r in Object(e)) t.push(r)
      return t
    }
    Mp.exports = vx
  })
  var $p = F((kH, Lp) => {
    l()
    c()
    p()
    var Cx = Ue(),
      xx = mn(),
      Fx = qp(),
      Sx = Object.prototype,
      wx = Sx.hasOwnProperty
    function Bx(e) {
      if (!Cx(e)) return Fx(e)
      var t = xx(e),
        r = []
      for (var n in e)
        (n == 'constructor' && (t || !wx.call(e, n))) || r.push(n)
      return r
    }
    Lp.exports = Bx
  })
  var Cn = F((qH, Up) => {
    l()
    c()
    p()
    var Tx = lo(),
      _x = $p(),
      Ox = po()
    function Rx(e) {
      return Ox(e) ? Tx(e, !0) : _x(e)
    }
    Up.exports = Rx
  })
  var Oo = F((zH, zp) => {
    l()
    c()
    p()
    var Px = oo(),
      Ix = _o(),
      kx = Cn()
    function Nx(e) {
      return Px(e, kx, Ix)
    }
    zp.exports = Nx
  })
  var Ro = F((VH, Hp) => {
    l()
    c()
    p()
    var jx = Ya(),
      Mx = wo(),
      qx = To(),
      Lx = Oo()
    function $x(e, t) {
      if (e == null) return {}
      var r = jx(Lx(e), function (n) {
        return [n]
      })
      return (
        (t = Mx(t)),
        qx(e, r, function (n, a) {
          return t(n, a[0])
        })
      )
    }
    Hp.exports = $x
  })
  var Sn = F((Ad, zo) => {
    l()
    c()
    p()
    ;(function (e) {
      if (typeof Ad == 'object' && typeof zo < 'u') zo.exports = e()
      else if (typeof define == 'function' && define.amd) define([], e)
      else {
        var t
        typeof window < 'u' || typeof window < 'u'
          ? (t = window)
          : typeof self < 'u'
          ? (t = self)
          : (t = this),
          (t.memoizerific = e())
      }
    })(function () {
      var e, t, r
      return (function n(a, o, u) {
        function i(y, A) {
          if (!o[y]) {
            if (!a[y]) {
              var g = typeof sr == 'function' && sr
              if (!A && g) return g(y, !0)
              if (s) return s(y, !0)
              var h = new Error("Cannot find module '" + y + "'")
              throw ((h.code = 'MODULE_NOT_FOUND'), h)
            }
            var E = (o[y] = {exports: {}})
            a[y][0].call(
              E.exports,
              function (b) {
                var x = a[y][1][b]
                return i(x || b)
              },
              E,
              E.exports,
              n,
              a,
              o,
              u
            )
          }
          return o[y].exports
        }
        for (var s = typeof sr == 'function' && sr, d = 0; d < u.length; d++)
          i(u[d])
        return i
      })(
        {
          1: [
            function (n, a, o) {
              a.exports = function (u) {
                if (typeof Map != 'function' || u) {
                  var i = n('./similar')
                  return new i()
                } else return new Map()
              }
            },
            {'./similar': 2},
          ],
          2: [
            function (n, a, o) {
              function u() {
                return (
                  (this.list = []),
                  (this.lastItem = void 0),
                  (this.size = 0),
                  this
                )
              }
              ;(u.prototype.get = function (i) {
                var s
                if (this.lastItem && this.isEqual(this.lastItem.key, i))
                  return this.lastItem.val
                if (((s = this.indexOf(i)), s >= 0))
                  return (this.lastItem = this.list[s]), this.list[s].val
              }),
                (u.prototype.set = function (i, s) {
                  var d
                  return this.lastItem && this.isEqual(this.lastItem.key, i)
                    ? ((this.lastItem.val = s), this)
                    : ((d = this.indexOf(i)),
                      d >= 0
                        ? ((this.lastItem = this.list[d]),
                          (this.list[d].val = s),
                          this)
                        : ((this.lastItem = {key: i, val: s}),
                          this.list.push(this.lastItem),
                          this.size++,
                          this))
                }),
                (u.prototype.delete = function (i) {
                  var s
                  if (
                    (this.lastItem &&
                      this.isEqual(this.lastItem.key, i) &&
                      (this.lastItem = void 0),
                    (s = this.indexOf(i)),
                    s >= 0)
                  )
                    return this.size--, this.list.splice(s, 1)[0]
                }),
                (u.prototype.has = function (i) {
                  var s
                  return this.lastItem && this.isEqual(this.lastItem.key, i)
                    ? !0
                    : ((s = this.indexOf(i)),
                      s >= 0 ? ((this.lastItem = this.list[s]), !0) : !1)
                }),
                (u.prototype.forEach = function (i, s) {
                  var d
                  for (d = 0; d < this.size; d++)
                    i.call(s || this, this.list[d].val, this.list[d].key, this)
                }),
                (u.prototype.indexOf = function (i) {
                  var s
                  for (s = 0; s < this.size; s++)
                    if (this.isEqual(this.list[s].key, i)) return s
                  return -1
                }),
                (u.prototype.isEqual = function (i, s) {
                  return i === s || (i !== i && s !== s)
                }),
                (a.exports = u)
            },
            {},
          ],
          3: [
            function (n, a, o) {
              var u = n('map-or-similar')
              a.exports = function (y) {
                var A = new u(!1),
                  g = []
                return function (h) {
                  var E = function () {
                    var b = A,
                      x,
                      S,
                      P = arguments.length - 1,
                      N = Array(P + 1),
                      $ = !0,
                      w
                    if ((E.numArgs || E.numArgs === 0) && E.numArgs !== P + 1)
                      throw new Error(
                        'Memoizerific functions should always be called with the same number of arguments'
                      )
                    for (w = 0; w < P; w++) {
                      if (
                        ((N[w] = {cacheItem: b, arg: arguments[w]}),
                        b.has(arguments[w]))
                      ) {
                        b = b.get(arguments[w])
                        continue
                      }
                      ;($ = !1),
                        (x = new u(!1)),
                        b.set(arguments[w], x),
                        (b = x)
                    }
                    return (
                      $ &&
                        (b.has(arguments[P])
                          ? (S = b.get(arguments[P]))
                          : ($ = !1)),
                      $ ||
                        ((S = h.apply(null, arguments)),
                        b.set(arguments[P], S)),
                      y > 0 &&
                        ((N[P] = {cacheItem: b, arg: arguments[P]}),
                        $ ? i(g, N) : g.push(N),
                        g.length > y && s(g.shift())),
                      (E.wasMemoized = $),
                      (E.numArgs = P + 1),
                      S
                    )
                  }
                  return (
                    (E.limit = y),
                    (E.wasMemoized = !1),
                    (E.cache = A),
                    (E.lru = g),
                    E
                  )
                }
              }
              function i(y, A) {
                var g = y.length,
                  h = A.length,
                  E,
                  b,
                  x
                for (b = 0; b < g; b++) {
                  for (E = !0, x = 0; x < h; x++)
                    if (!d(y[b][x].arg, A[x].arg)) {
                      E = !1
                      break
                    }
                  if (E) break
                }
                y.push(y.splice(b, 1)[0])
              }
              function s(y) {
                var A = y.length,
                  g = y[A - 1],
                  h,
                  E
                for (
                  g.cacheItem.delete(g.arg), E = A - 2;
                  E >= 0 &&
                  ((g = y[E]), (h = g.cacheItem.get(g.arg)), !h || !h.size);
                  E--
                )
                  g.cacheItem.delete(g.arg)
              }
              function d(y, A) {
                return y === A || (y !== y && A !== A)
              }
            },
            {'map-or-similar': 1},
          ],
        },
        {},
        [3]
      )(3)
    })
  })
  var Dd = F((hG, Ed) => {
    l()
    c()
    p()
    function rS(e, t, r, n) {
      for (var a = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < a; )
        if (t(e[o], o, e)) return o
      return -1
    }
    Ed.exports = rS
  })
  var Cd = F((bG, vd) => {
    l()
    c()
    p()
    function nS(e) {
      return e !== e
    }
    vd.exports = nS
  })
  var Fd = F((vG, xd) => {
    l()
    c()
    p()
    function aS(e, t, r) {
      for (var n = r - 1, a = e.length; ++n < a; ) if (e[n] === t) return n
      return -1
    }
    xd.exports = aS
  })
  var wd = F((SG, Sd) => {
    l()
    c()
    p()
    var oS = Dd(),
      uS = Cd(),
      iS = Fd()
    function sS(e, t, r) {
      return t === t ? iS(e, t, r) : oS(e, uS, r)
    }
    Sd.exports = sS
  })
  var Td = F((_G, Bd) => {
    l()
    c()
    p()
    var lS = wd()
    function cS(e, t) {
      var r = e == null ? 0 : e.length
      return !!r && lS(e, t, 0) > -1
    }
    Bd.exports = cS
  })
  var Od = F((IG, _d) => {
    l()
    c()
    p()
    function pS(e, t, r) {
      for (var n = -1, a = e == null ? 0 : e.length; ++n < a; )
        if (r(t, e[n])) return !0
      return !1
    }
    _d.exports = pS
  })
  var Pd = F((MG, Rd) => {
    l()
    c()
    p()
    function dS() {}
    Rd.exports = dS
  })
  var kd = F((UG, Id) => {
    l()
    c()
    p()
    var Ho = ho(),
      fS = Pd(),
      hS = un(),
      gS = 1 / 0,
      mS =
        Ho && 1 / hS(new Ho([, -0]))[1] == gS
          ? function (e) {
              return new Ho(e)
            }
          : fS
    Id.exports = mS
  })
  var jd = F((WG, Nd) => {
    l()
    c()
    p()
    var yS = eo(),
      bS = Td(),
      AS = Od(),
      ES = to(),
      DS = kd(),
      vS = un(),
      CS = 200
    function xS(e, t, r) {
      var n = -1,
        a = bS,
        o = e.length,
        u = !0,
        i = [],
        s = i
      if (r) (u = !1), (a = AS)
      else if (o >= CS) {
        var d = t ? null : DS(e)
        if (d) return vS(d)
        ;(u = !1), (a = ES), (s = new yS())
      } else s = t ? [] : i
      e: for (; ++n < o; ) {
        var y = e[n],
          A = t ? t(y) : y
        if (((y = r || y !== 0 ? y : 0), u && A === A)) {
          for (var g = s.length; g--; ) if (s[g] === A) continue e
          t && s.push(A), i.push(y)
        } else a(s, A, r) || (s !== i && s.push(A), i.push(y))
      }
      return i
    }
    Nd.exports = xS
  })
  var qd = F((XG, Md) => {
    l()
    c()
    p()
    var FS = jd()
    function SS(e) {
      return e && e.length ? FS(e) : []
    }
    Md.exports = SS
  })
  var $d = F((eW, Ld) => {
    l()
    c()
    p()
    function wS(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e
    }
    Ld.exports = wS
  })
  var Tr = F((aW, Ud) => {
    l()
    c()
    p()
    var BS = Dn(),
      TS = En()
    function _S(e, t, r, n) {
      var a = !r
      r || (r = {})
      for (var o = -1, u = t.length; ++o < u; ) {
        var i = t[o],
          s = n ? n(r[i], e[i], i, r, e) : void 0
        s === void 0 && (s = e[i]), a ? TS(r, i, s) : BS(r, i, s)
      }
      return r
    }
    Ud.exports = _S
  })
  var Hd = F((sW, zd) => {
    l()
    c()
    p()
    var OS = Tr(),
      RS = Mt()
    function PS(e, t) {
      return e && OS(t, RS(t), e)
    }
    zd.exports = PS
  })
  var Wd = F((dW, Gd) => {
    l()
    c()
    p()
    var IS = Tr(),
      kS = Cn()
    function NS(e, t) {
      return e && IS(t, kS(t), e)
    }
    Gd.exports = NS
  })
  var Jd = F((_r, Ut) => {
    l()
    c()
    p()
    var jS = je(),
      Xd = typeof _r == 'object' && _r && !_r.nodeType && _r,
      Vd = Xd && typeof Ut == 'object' && Ut && !Ut.nodeType && Ut,
      MS = Vd && Vd.exports === Xd,
      Kd = MS ? jS.Buffer : void 0,
      Yd = Kd ? Kd.allocUnsafe : void 0
    function qS(e, t) {
      if (t) return e.slice()
      var r = e.length,
        n = Yd ? Yd(r) : new e.constructor(r)
      return e.copy(n), n
    }
    Ut.exports = qS
  })
  var Zd = F((AW, Qd) => {
    l()
    c()
    p()
    function LS(e, t) {
      var r = -1,
        n = e.length
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r]
      return t
    }
    Qd.exports = LS
  })
  var tf = F((CW, ef) => {
    l()
    c()
    p()
    var $S = Tr(),
      US = ln()
    function zS(e, t) {
      return $S(e, US(e), t)
    }
    ef.exports = zS
  })
  var nf = F((wW, rf) => {
    l()
    c()
    p()
    var HS = Tr(),
      GS = _o()
    function WS(e, t) {
      return HS(e, GS(e), t)
    }
    rf.exports = WS
  })
  var of = F((OW, af) => {
    l()
    c()
    p()
    var VS = Object.prototype,
      KS = VS.hasOwnProperty
    function YS(e) {
      var t = e.length,
        r = new e.constructor(t)
      return (
        t &&
          typeof e[0] == 'string' &&
          KS.call(e, 'index') &&
          ((r.index = e.index), (r.input = e.input)),
        r
      )
    }
    af.exports = YS
  })
  var wn = F((kW, sf) => {
    l()
    c()
    p()
    var uf = no()
    function XS(e) {
      var t = new e.constructor(e.byteLength)
      return new uf(t).set(new uf(e)), t
    }
    sf.exports = XS
  })
  var cf = F((qW, lf) => {
    l()
    c()
    p()
    var JS = wn()
    function QS(e, t) {
      var r = t ? JS(e.buffer) : e.buffer
      return new e.constructor(r, e.byteOffset, e.byteLength)
    }
    lf.exports = QS
  })
  var df = F((zW, pf) => {
    l()
    c()
    p()
    var ZS = /\w*$/
    function ew(e) {
      var t = new e.constructor(e.source, ZS.exec(e))
      return (t.lastIndex = e.lastIndex), t
    }
    pf.exports = ew
  })
  var yf = F((VW, mf) => {
    l()
    c()
    p()
    var ff = mt(),
      hf = ff ? ff.prototype : void 0,
      gf = hf ? hf.valueOf : void 0
    function tw(e) {
      return gf ? Object(gf.call(e)) : {}
    }
    mf.exports = tw
  })
  var Af = F((JW, bf) => {
    l()
    c()
    p()
    var rw = wn()
    function nw(e, t) {
      var r = t ? rw(e.buffer) : e.buffer
      return new e.constructor(r, e.byteOffset, e.length)
    }
    bf.exports = nw
  })
  var Df = F((tV, Ef) => {
    l()
    c()
    p()
    var aw = wn(),
      ow = cf(),
      uw = df(),
      iw = yf(),
      sw = Af(),
      lw = '[object Boolean]',
      cw = '[object Date]',
      pw = '[object Map]',
      dw = '[object Number]',
      fw = '[object RegExp]',
      hw = '[object Set]',
      gw = '[object String]',
      mw = '[object Symbol]',
      yw = '[object ArrayBuffer]',
      bw = '[object DataView]',
      Aw = '[object Float32Array]',
      Ew = '[object Float64Array]',
      Dw = '[object Int8Array]',
      vw = '[object Int16Array]',
      Cw = '[object Int32Array]',
      xw = '[object Uint8Array]',
      Fw = '[object Uint8ClampedArray]',
      Sw = '[object Uint16Array]',
      ww = '[object Uint32Array]'
    function Bw(e, t, r) {
      var n = e.constructor
      switch (t) {
        case yw:
          return aw(e)
        case lw:
        case cw:
          return new n(+e)
        case bw:
          return ow(e, r)
        case Aw:
        case Ew:
        case Dw:
        case vw:
        case Cw:
        case xw:
        case Fw:
        case Sw:
        case ww:
          return sw(e, r)
        case pw:
          return new n()
        case dw:
        case gw:
          return new n(e)
        case fw:
          return uw(e)
        case hw:
          return new n()
        case mw:
          return iw(e)
      }
    }
    Ef.exports = Bw
  })
  var xf = F((oV, Cf) => {
    l()
    c()
    p()
    var Tw = Ue(),
      vf = Object.create,
      _w = (function () {
        function e() {}
        return function (t) {
          if (!Tw(t)) return {}
          if (vf) return vf(t)
          e.prototype = t
          var r = new e()
          return (e.prototype = void 0), r
        }
      })()
    Cf.exports = _w
  })
  var Sf = F((lV, Ff) => {
    l()
    c()
    p()
    var Ow = xf(),
      Rw = vn(),
      Pw = mn()
    function Iw(e) {
      return typeof e.constructor == 'function' && !Pw(e) ? Ow(Rw(e)) : {}
    }
    Ff.exports = Iw
  })
  var Bf = F((fV, wf) => {
    l()
    c()
    p()
    var kw = Fr(),
      Nw = Qe(),
      jw = '[object Map]'
    function Mw(e) {
      return Nw(e) && kw(e) == jw
    }
    wf.exports = Mw
  })
  var Rf = F((yV, Of) => {
    l()
    c()
    p()
    var qw = Bf(),
      Lw = hn(),
      Tf = gn(),
      _f = Tf && Tf.isMap,
      $w = _f ? Lw(_f) : qw
    Of.exports = $w
  })
  var If = F((DV, Pf) => {
    l()
    c()
    p()
    var Uw = Fr(),
      zw = Qe(),
      Hw = '[object Set]'
    function Gw(e) {
      return zw(e) && Uw(e) == Hw
    }
    Pf.exports = Gw
  })
  var Mf = F((FV, jf) => {
    l()
    c()
    p()
    var Ww = If(),
      Vw = hn(),
      kf = gn(),
      Nf = kf && kf.isSet,
      Kw = Nf ? Vw(Nf) : Ww
    jf.exports = Kw
  })
  var zf = F((TV, Uf) => {
    l()
    c()
    p()
    var Yw = an(),
      Xw = $d(),
      Jw = Dn(),
      Qw = Hd(),
      Zw = Wd(),
      e5 = Jd(),
      t5 = Zd(),
      r5 = tf(),
      n5 = nf(),
      a5 = fo(),
      o5 = Oo(),
      u5 = Fr(),
      i5 = of(),
      s5 = Df(),
      l5 = Sf(),
      c5 = ze(),
      p5 = pn(),
      d5 = Rf(),
      f5 = Ue(),
      h5 = Mf(),
      g5 = Mt(),
      m5 = Cn(),
      y5 = 1,
      b5 = 2,
      A5 = 4,
      qf = '[object Arguments]',
      E5 = '[object Array]',
      D5 = '[object Boolean]',
      v5 = '[object Date]',
      C5 = '[object Error]',
      Lf = '[object Function]',
      x5 = '[object GeneratorFunction]',
      F5 = '[object Map]',
      S5 = '[object Number]',
      $f = '[object Object]',
      w5 = '[object RegExp]',
      B5 = '[object Set]',
      T5 = '[object String]',
      _5 = '[object Symbol]',
      O5 = '[object WeakMap]',
      R5 = '[object ArrayBuffer]',
      P5 = '[object DataView]',
      I5 = '[object Float32Array]',
      k5 = '[object Float64Array]',
      N5 = '[object Int8Array]',
      j5 = '[object Int16Array]',
      M5 = '[object Int32Array]',
      q5 = '[object Uint8Array]',
      L5 = '[object Uint8ClampedArray]',
      $5 = '[object Uint16Array]',
      U5 = '[object Uint32Array]',
      le = {}
    le[qf] =
      le[E5] =
      le[R5] =
      le[P5] =
      le[D5] =
      le[v5] =
      le[I5] =
      le[k5] =
      le[N5] =
      le[j5] =
      le[M5] =
      le[F5] =
      le[S5] =
      le[$f] =
      le[w5] =
      le[B5] =
      le[T5] =
      le[_5] =
      le[q5] =
      le[L5] =
      le[$5] =
      le[U5] =
        !0
    le[C5] = le[Lf] = le[O5] = !1
    function Bn(e, t, r, n, a, o) {
      var u,
        i = t & y5,
        s = t & b5,
        d = t & A5
      if ((r && (u = a ? r(e, n, a, o) : r(e)), u !== void 0)) return u
      if (!f5(e)) return e
      var y = c5(e)
      if (y) {
        if (((u = i5(e)), !i)) return t5(e, u)
      } else {
        var A = u5(e),
          g = A == Lf || A == x5
        if (p5(e)) return e5(e, i)
        if (A == $f || A == qf || (g && !a)) {
          if (((u = s || g ? {} : l5(e)), !i))
            return s ? n5(e, Zw(u, e)) : r5(e, Qw(u, e))
        } else {
          if (!le[A]) return a ? e : {}
          u = s5(e, A, i)
        }
      }
      o || (o = new Yw())
      var h = o.get(e)
      if (h) return h
      o.set(e, u),
        h5(e)
          ? e.forEach(function (x) {
              u.add(Bn(x, t, r, x, e, o))
            })
          : d5(e) &&
            e.forEach(function (x, S) {
              u.set(S, Bn(x, t, r, S, e, o))
            })
      var E = d ? (s ? o5 : a5) : s ? m5 : g5,
        b = y ? void 0 : E(e)
      return (
        Xw(b || e, function (x, S) {
          b && ((S = x), (x = e[S])), Jw(u, S, Bn(x, t, r, S, e, o))
        }),
        u
      )
    }
    Uf.exports = Bn
  })
  var Gf = F((PV, Hf) => {
    l()
    c()
    p()
    var z5 = zf(),
      H5 = 1,
      G5 = 4
    function W5(e) {
      return z5(e, H5 | G5)
    }
    Hf.exports = W5
  })
  var e0 = F((cK, Zf) => {
    l()
    c()
    p()
    function x3(e) {
      return function (t, r, n) {
        for (var a = -1, o = Object(t), u = n(t), i = u.length; i--; ) {
          var s = u[e ? i : ++a]
          if (r(o[s], s, o) === !1) break
        }
        return t
      }
    }
    Zf.exports = x3
  })
  var r0 = F((hK, t0) => {
    l()
    c()
    p()
    var F3 = e0(),
      S3 = F3()
    t0.exports = S3
  })
  var a0 = F((bK, n0) => {
    l()
    c()
    p()
    var w3 = r0(),
      B3 = Mt()
    function T3(e, t) {
      return e && w3(e, t, B3)
    }
    n0.exports = T3
  })
  var Rn = F((vK, o0) => {
    l()
    c()
    p()
    var _3 = En(),
      O3 = a0(),
      R3 = wo()
    function P3(e, t) {
      var r = {}
      return (
        (t = R3(t, 3)),
        O3(e, function (n, a, o) {
          _3(r, a, t(n, a, o))
        }),
        r
      )
    }
    o0.exports = P3
  })
  var i0 = F((SK, u0) => {
    l()
    c()
    p()
    var I3 = To(),
      k3 = Fo()
    function N3(e, t) {
      return I3(e, t, function (r, n) {
        return k3(e, n)
      })
    }
    u0.exports = N3
  })
  var p0 = F((_K, c0) => {
    l()
    c()
    p()
    var s0 = mt(),
      j3 = cn(),
      M3 = ze(),
      l0 = s0 ? s0.isConcatSpreadable : void 0
    function q3(e) {
      return M3(e) || j3(e) || !!(l0 && e && e[l0])
    }
    c0.exports = q3
  })
  var h0 = F((IK, f0) => {
    l()
    c()
    p()
    var L3 = sn(),
      $3 = p0()
    function d0(e, t, r, n, a) {
      var o = -1,
        u = e.length
      for (r || (r = $3), a || (a = []); ++o < u; ) {
        var i = e[o]
        t > 0 && r(i)
          ? t > 1
            ? d0(i, t - 1, r, n, a)
            : L3(a, i)
          : n || (a[a.length] = i)
      }
      return a
    }
    f0.exports = d0
  })
  var m0 = F((MK, g0) => {
    l()
    c()
    p()
    var U3 = h0()
    function z3(e) {
      var t = e == null ? 0 : e.length
      return t ? U3(e, 1) : []
    }
    g0.exports = z3
  })
  var b0 = F((UK, y0) => {
    l()
    c()
    p()
    function H3(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t)
        case 1:
          return e.call(t, r[0])
        case 2:
          return e.call(t, r[0], r[1])
        case 3:
          return e.call(t, r[0], r[1], r[2])
      }
      return e.apply(t, r)
    }
    y0.exports = H3
  })
  var D0 = F((WK, E0) => {
    l()
    c()
    p()
    var G3 = b0(),
      A0 = Math.max
    function W3(e, t, r) {
      return (
        (t = A0(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, a = -1, o = A0(n.length - t, 0), u = Array(o);
            ++a < o;

          )
            u[a] = n[t + a]
          a = -1
          for (var i = Array(t + 1); ++a < t; ) i[a] = n[a]
          return (i[t] = r(u)), G3(e, this, i)
        }
      )
    }
    E0.exports = W3
  })
  var C0 = F((XK, v0) => {
    l()
    c()
    p()
    function V3(e) {
      return function () {
        return e
      }
    }
    v0.exports = V3
  })
  var S0 = F((eY, F0) => {
    l()
    c()
    p()
    var K3 = C0(),
      x0 = Bo(),
      Y3 = So(),
      X3 = x0
        ? function (e, t) {
            return x0(e, 'toString', {
              configurable: !0,
              enumerable: !1,
              value: K3(t),
              writable: !0,
            })
          }
        : Y3
    F0.exports = X3
  })
  var B0 = F((aY, w0) => {
    l()
    c()
    p()
    var J3 = 800,
      Q3 = 16,
      Z3 = Date.now
    function eB(e) {
      var t = 0,
        r = 0
      return function () {
        var n = Z3(),
          a = Q3 - (n - r)
        if (((r = n), a > 0)) {
          if (++t >= J3) return arguments[0]
        } else t = 0
        return e.apply(void 0, arguments)
      }
    }
    w0.exports = eB
  })
  var _0 = F((sY, T0) => {
    l()
    c()
    p()
    var tB = S0(),
      rB = B0(),
      nB = rB(tB)
    T0.exports = nB
  })
  var R0 = F((dY, O0) => {
    l()
    c()
    p()
    var aB = m0(),
      oB = D0(),
      uB = _0()
    function iB(e) {
      return uB(oB(e, void 0, aB), e + '')
    }
    O0.exports = iB
  })
  var I0 = F((mY, P0) => {
    l()
    c()
    p()
    var sB = i0(),
      lB = R0(),
      cB = lB(function (e, t) {
        return e == null ? {} : sB(e, t)
      })
    P0.exports = cB
  })
  var In = F((EY, L0) => {
    'use strict'
    l()
    c()
    p()
    function Pn(e) {
      return Array.prototype.slice.apply(e)
    }
    var M0 = 'pending',
      k0 = 'resolved',
      N0 = 'rejected'
    function re(e) {
      ;(this.status = M0),
        (this._continuations = []),
        (this._parent = null),
        (this._paused = !1),
        e &&
          e.call(this, this._continueWith.bind(this), this._failWith.bind(this))
    }
    function Pr(e) {
      return e && typeof e.then == 'function'
    }
    function pB(e) {
      return e
    }
    re.prototype = {
      then: function (e, t) {
        var r = re.unresolved()._setParent(this)
        if (this._isRejected()) {
          if (this._paused)
            return (
              this._continuations.push({promise: r, nextFn: e, catchFn: t}), r
            )
          if (t)
            try {
              var n = t(this._error)
              return Pr(n)
                ? (this._chainPromiseData(n, r), r)
                : re.resolve(n)._setParent(this)
            } catch (a) {
              return re.reject(a)._setParent(this)
            }
          return re.reject(this._error)._setParent(this)
        }
        return (
          this._continuations.push({promise: r, nextFn: e, catchFn: t}),
          this._runResolutions(),
          r
        )
      },
      catch: function (e) {
        if (this._isResolved()) return re.resolve(this._data)._setParent(this)
        var t = re.unresolved()._setParent(this)
        return (
          this._continuations.push({promise: t, catchFn: e}),
          this._runRejections(),
          t
        )
      },
      finally: function (e) {
        var t = !1
        function r(n, a) {
          if (!t) {
            ;(t = !0), e || (e = pB)
            var o = e(n)
            return Pr(o)
              ? o.then(function () {
                  if (a) throw a
                  return n
                })
              : n
          }
        }
        return this.then(function (n) {
          return r(n)
        }).catch(function (n) {
          return r(null, n)
        })
      },
      pause: function () {
        return (this._paused = !0), this
      },
      resume: function () {
        var e = this._findFirstPaused()
        return (
          e && ((e._paused = !1), e._runResolutions(), e._runRejections()), this
        )
      },
      _findAncestry: function () {
        return this._continuations.reduce(function (e, t) {
          if (t.promise) {
            var r = {promise: t.promise, children: t.promise._findAncestry()}
            e.push(r)
          }
          return e
        }, [])
      },
      _setParent: function (e) {
        if (this._parent) throw new Error('parent already set')
        return (this._parent = e), this
      },
      _continueWith: function (e) {
        var t = this._findFirstPending()
        t && ((t._data = e), t._setResolved())
      },
      _findFirstPending: function () {
        return this._findFirstAncestor(function (e) {
          return e._isPending && e._isPending()
        })
      },
      _findFirstPaused: function () {
        return this._findFirstAncestor(function (e) {
          return e._paused
        })
      },
      _findFirstAncestor: function (e) {
        for (var t = this, r; t; ) e(t) && (r = t), (t = t._parent)
        return r
      },
      _failWith: function (e) {
        var t = this._findFirstPending()
        t && ((t._error = e), t._setRejected())
      },
      _takeContinuations: function () {
        return this._continuations.splice(0, this._continuations.length)
      },
      _runRejections: function () {
        if (!(this._paused || !this._isRejected())) {
          var e = this._error,
            t = this._takeContinuations(),
            r = this
          t.forEach(function (n) {
            if (n.catchFn)
              try {
                var a = n.catchFn(e)
                r._handleUserFunctionResult(a, n.promise)
              } catch (o) {
                n.promise.reject(o)
              }
            else n.promise.reject(e)
          })
        }
      },
      _runResolutions: function () {
        if (!(this._paused || !this._isResolved() || this._isPending())) {
          var e = this._takeContinuations()
          if (Pr(this._data))
            return this._handleWhenResolvedDataIsPromise(this._data)
          var t = this._data,
            r = this
          e.forEach(function (n) {
            if (n.nextFn)
              try {
                var a = n.nextFn(t)
                r._handleUserFunctionResult(a, n.promise)
              } catch (o) {
                r._handleResolutionError(o, n)
              }
            else n.promise && n.promise.resolve(t)
          })
        }
      },
      _handleResolutionError: function (e, t) {
        if ((this._setRejected(), t.catchFn))
          try {
            t.catchFn(e)
            return
          } catch (r) {
            e = r
          }
        t.promise && t.promise.reject(e)
      },
      _handleWhenResolvedDataIsPromise: function (e) {
        var t = this
        return e
          .then(function (r) {
            ;(t._data = r), t._runResolutions()
          })
          .catch(function (r) {
            ;(t._error = r), t._setRejected(), t._runRejections()
          })
      },
      _handleUserFunctionResult: function (e, t) {
        Pr(e) ? this._chainPromiseData(e, t) : t.resolve(e)
      },
      _chainPromiseData: function (e, t) {
        e.then(function (r) {
          t.resolve(r)
        }).catch(function (r) {
          t.reject(r)
        })
      },
      _setResolved: function () {
        ;(this.status = k0), this._paused || this._runResolutions()
      },
      _setRejected: function () {
        ;(this.status = N0), this._paused || this._runRejections()
      },
      _isPending: function () {
        return this.status === M0
      },
      _isResolved: function () {
        return this.status === k0
      },
      _isRejected: function () {
        return this.status === N0
      },
    }
    re.resolve = function (e) {
      return new re(function (t, r) {
        Pr(e)
          ? e
              .then(function (n) {
                t(n)
              })
              .catch(function (n) {
                r(n)
              })
          : t(e)
      })
    }
    re.reject = function (e) {
      return new re(function (t, r) {
        r(e)
      })
    }
    re.unresolved = function () {
      return new re(function (e, t) {
        ;(this.resolve = e), (this.reject = t)
      })
    }
    re.all = function () {
      var e = Pn(arguments)
      return (
        Array.isArray(e[0]) && (e = e[0]),
        e.length
          ? new re(function (t, r) {
              var n = [],
                a = 0,
                o = function () {
                  a === e.length && t(n)
                },
                u = !1,
                i = function (s) {
                  u || ((u = !0), r(s))
                }
              e.forEach(function (s, d) {
                re.resolve(s)
                  .then(function (y) {
                    ;(n[d] = y), (a += 1), o()
                  })
                  .catch(function (y) {
                    i(y)
                  })
              })
            })
          : re.resolve([])
      )
    }
    function j0(e) {
      return typeof window < 'u' && 'AggregateError' in window
        ? new window.AggregateError(e)
        : {errors: e}
    }
    re.any = function () {
      var e = Pn(arguments)
      return (
        Array.isArray(e[0]) && (e = e[0]),
        e.length
          ? new re(function (t, r) {
              var n = [],
                a = 0,
                o = function () {
                  a === e.length && r(j0(n))
                },
                u = !1,
                i = function (s) {
                  u || ((u = !0), t(s))
                }
              e.forEach(function (s, d) {
                re.resolve(s)
                  .then(function (y) {
                    i(y)
                  })
                  .catch(function (y) {
                    ;(n[d] = y), (a += 1), o()
                  })
              })
            })
          : re.reject(j0([]))
      )
    }
    re.allSettled = function () {
      var e = Pn(arguments)
      return (
        Array.isArray(e[0]) && (e = e[0]),
        e.length
          ? new re(function (t) {
              var r = [],
                n = 0,
                a = function () {
                  ;(n += 1), n === e.length && t(r)
                }
              e.forEach(function (o, u) {
                re.resolve(o)
                  .then(function (i) {
                    ;(r[u] = {status: 'fulfilled', value: i}), a()
                  })
                  .catch(function (i) {
                    ;(r[u] = {status: 'rejected', reason: i}), a()
                  })
              })
            })
          : re.resolve([])
      )
    }
    if (Promise === re)
      throw new Error(
        'Please use SynchronousPromise.installGlobally() to install globally'
      )
    var q0 = Promise
    re.installGlobally = function (e) {
      if (Promise === re) return e
      var t = dB(e)
      return (Promise = re), t
    }
    re.uninstallGlobally = function () {
      Promise === re && (Promise = q0)
    }
    function dB(e) {
      if (typeof e > 'u' || e.__patched) return e
      var t = e
      return (
        (e = function () {
          var r = q0
          t.apply(this, Pn(arguments))
        }),
        (e.__patched = !0),
        e
      )
    }
    L0.exports = {SynchronousPromise: re}
  })
  var Vo = F((RY, U0) => {
    l()
    c()
    p()
    var fB = yt(),
      hB = vn(),
      gB = Qe(),
      mB = '[object Object]',
      yB = Function.prototype,
      bB = Object.prototype,
      $0 = yB.toString,
      AB = bB.hasOwnProperty,
      EB = $0.call(Object)
    function DB(e) {
      if (!gB(e) || fB(e) != mB) return !1
      var t = hB(e)
      if (t === null) return !0
      var r = AB.call(t, 'constructor') && t.constructor
      return typeof r == 'function' && r instanceof r && $0.call(r) == EB
    }
    U0.exports = DB
  })
  var H0 = F((NY, z0) => {
    l()
    c()
    p()
    z0.exports = vB
    function vB(e, t) {
      if (Ko('noDeprecation')) return e
      var r = !1
      function n() {
        if (!r) {
          if (Ko('throwDeprecation')) throw new Error(t)
          Ko('traceDeprecation') ? console.trace(t) : console.warn(t), (r = !0)
        }
        return e.apply(this, arguments)
      }
      return n
    }
    function Ko(e) {
      try {
        if (!window.localStorage) return !1
      } catch {
        return !1
      }
      var t = window.localStorage[e]
      return t == null ? !1 : String(t).toLowerCase() === 'true'
    }
  })
  var J0 = F((rX, X0) => {
    'use strict'
    l()
    c()
    p()
    X0.exports = function () {
      if (
        typeof Symbol != 'function' ||
        typeof Object.getOwnPropertySymbols != 'function'
      )
        return !1
      if (typeof Symbol.iterator == 'symbol') return !0
      var t = {},
        r = Symbol('test'),
        n = Object(r)
      if (
        typeof r == 'string' ||
        Object.prototype.toString.call(r) !== '[object Symbol]' ||
        Object.prototype.toString.call(n) !== '[object Symbol]'
      )
        return !1
      var a = 42
      t[r] = a
      for (r in t) return !1
      if (
        (typeof Object.keys == 'function' && Object.keys(t).length !== 0) ||
        (typeof Object.getOwnPropertyNames == 'function' &&
          Object.getOwnPropertyNames(t).length !== 0)
      )
        return !1
      var o = Object.getOwnPropertySymbols(t)
      if (
        o.length !== 1 ||
        o[0] !== r ||
        !Object.prototype.propertyIsEnumerable.call(t, r)
      )
        return !1
      if (typeof Object.getOwnPropertyDescriptor == 'function') {
        var u = Object.getOwnPropertyDescriptor(t, r)
        if (u.value !== a || u.enumerable !== !0) return !1
      }
      return !0
    }
  })
  var eh = F((uX, Z0) => {
    'use strict'
    l()
    c()
    p()
    var Q0 = typeof Symbol < 'u' && Symbol,
      qB = J0()
    Z0.exports = function () {
      return typeof Q0 != 'function' ||
        typeof Symbol != 'function' ||
        typeof Q0('foo') != 'symbol' ||
        typeof Symbol('bar') != 'symbol'
        ? !1
        : qB()
    }
  })
  var rh = F((cX, th) => {
    'use strict'
    l()
    c()
    p()
    var LB = 'Function.prototype.bind called on incompatible ',
      Qo = Array.prototype.slice,
      $B = Object.prototype.toString,
      UB = '[object Function]'
    th.exports = function (t) {
      var r = this
      if (typeof r != 'function' || $B.call(r) !== UB)
        throw new TypeError(LB + r)
      for (
        var n = Qo.call(arguments, 1),
          a,
          o = function () {
            if (this instanceof a) {
              var y = r.apply(this, n.concat(Qo.call(arguments)))
              return Object(y) === y ? y : this
            } else return r.apply(t, n.concat(Qo.call(arguments)))
          },
          u = Math.max(0, r.length - n.length),
          i = [],
          s = 0;
        s < u;
        s++
      )
        i.push('$' + s)
      if (
        ((a = Function(
          'binder',
          'return function (' +
            i.join(',') +
            '){ return binder.apply(this,arguments); }'
        )(o)),
        r.prototype)
      ) {
        var d = function () {}
        ;(d.prototype = r.prototype),
          (a.prototype = new d()),
          (d.prototype = null)
      }
      return a
    }
  })
  var qn = F((hX, nh) => {
    'use strict'
    l()
    c()
    p()
    var zB = rh()
    nh.exports = Function.prototype.bind || zB
  })
  var oh = F((bX, ah) => {
    'use strict'
    l()
    c()
    p()
    var HB = qn()
    ah.exports = HB.call(Function.call, Object.prototype.hasOwnProperty)
  })
  var Un = F((vX, lh) => {
    'use strict'
    l()
    c()
    p()
    var ee,
      Yt = SyntaxError,
      sh = Function,
      Vt = TypeError,
      Zo = function (e) {
        try {
          return sh('"use strict"; return (' + e + ').constructor;')()
        } catch {}
      },
      Dt = Object.getOwnPropertyDescriptor
    if (Dt)
      try {
        Dt({}, '')
      } catch {
        Dt = null
      }
    var eu = function () {
        throw new Vt()
      },
      GB = Dt
        ? (function () {
            try {
              return arguments.callee, eu
            } catch {
              try {
                return Dt(arguments, 'callee').get
              } catch {
                return eu
              }
            }
          })()
        : eu,
      Gt = eh()(),
      st =
        Object.getPrototypeOf ||
        function (e) {
          return e.__proto__
        },
      Wt = {},
      WB = typeof Uint8Array > 'u' ? ee : st(Uint8Array),
      Kt = {
        '%AggregateError%': typeof AggregateError > 'u' ? ee : AggregateError,
        '%Array%': Array,
        '%ArrayBuffer%': typeof ArrayBuffer > 'u' ? ee : ArrayBuffer,
        '%ArrayIteratorPrototype%': Gt ? st([][Symbol.iterator]()) : ee,
        '%AsyncFromSyncIteratorPrototype%': ee,
        '%AsyncFunction%': Wt,
        '%AsyncGenerator%': Wt,
        '%AsyncGeneratorFunction%': Wt,
        '%AsyncIteratorPrototype%': Wt,
        '%Atomics%': typeof Atomics > 'u' ? ee : Atomics,
        '%BigInt%': typeof BigInt > 'u' ? ee : BigInt,
        '%Boolean%': Boolean,
        '%DataView%': typeof DataView > 'u' ? ee : DataView,
        '%Date%': Date,
        '%decodeURI%': decodeURI,
        '%decodeURIComponent%': decodeURIComponent,
        '%encodeURI%': encodeURI,
        '%encodeURIComponent%': encodeURIComponent,
        '%Error%': Error,
        '%eval%': eval,
        '%EvalError%': EvalError,
        '%Float32Array%': typeof Float32Array > 'u' ? ee : Float32Array,
        '%Float64Array%': typeof Float64Array > 'u' ? ee : Float64Array,
        '%FinalizationRegistry%':
          typeof FinalizationRegistry > 'u' ? ee : FinalizationRegistry,
        '%Function%': sh,
        '%GeneratorFunction%': Wt,
        '%Int8Array%': typeof Int8Array > 'u' ? ee : Int8Array,
        '%Int16Array%': typeof Int16Array > 'u' ? ee : Int16Array,
        '%Int32Array%': typeof Int32Array > 'u' ? ee : Int32Array,
        '%isFinite%': isFinite,
        '%isNaN%': isNaN,
        '%IteratorPrototype%': Gt ? st(st([][Symbol.iterator]())) : ee,
        '%JSON%': typeof JSON == 'object' ? JSON : ee,
        '%Map%': typeof Map > 'u' ? ee : Map,
        '%MapIteratorPrototype%':
          typeof Map > 'u' || !Gt ? ee : st(new Map()[Symbol.iterator]()),
        '%Math%': Math,
        '%Number%': Number,
        '%Object%': Object,
        '%parseFloat%': parseFloat,
        '%parseInt%': parseInt,
        '%Promise%': typeof Promise > 'u' ? ee : Promise,
        '%Proxy%': typeof Proxy > 'u' ? ee : Proxy,
        '%RangeError%': RangeError,
        '%ReferenceError%': ReferenceError,
        '%Reflect%': typeof Reflect > 'u' ? ee : Reflect,
        '%RegExp%': RegExp,
        '%Set%': typeof Set > 'u' ? ee : Set,
        '%SetIteratorPrototype%':
          typeof Set > 'u' || !Gt ? ee : st(new Set()[Symbol.iterator]()),
        '%SharedArrayBuffer%':
          typeof SharedArrayBuffer > 'u' ? ee : SharedArrayBuffer,
        '%String%': String,
        '%StringIteratorPrototype%': Gt ? st(''[Symbol.iterator]()) : ee,
        '%Symbol%': Gt ? Symbol : ee,
        '%SyntaxError%': Yt,
        '%ThrowTypeError%': GB,
        '%TypedArray%': WB,
        '%TypeError%': Vt,
        '%Uint8Array%': typeof Uint8Array > 'u' ? ee : Uint8Array,
        '%Uint8ClampedArray%':
          typeof Uint8ClampedArray > 'u' ? ee : Uint8ClampedArray,
        '%Uint16Array%': typeof Uint16Array > 'u' ? ee : Uint16Array,
        '%Uint32Array%': typeof Uint32Array > 'u' ? ee : Uint32Array,
        '%URIError%': URIError,
        '%WeakMap%': typeof WeakMap > 'u' ? ee : WeakMap,
        '%WeakRef%': typeof WeakRef > 'u' ? ee : WeakRef,
        '%WeakSet%': typeof WeakSet > 'u' ? ee : WeakSet,
      },
      VB = function e(t) {
        var r
        if (t === '%AsyncFunction%') r = Zo('async function () {}')
        else if (t === '%GeneratorFunction%') r = Zo('function* () {}')
        else if (t === '%AsyncGeneratorFunction%')
          r = Zo('async function* () {}')
        else if (t === '%AsyncGenerator%') {
          var n = e('%AsyncGeneratorFunction%')
          n && (r = n.prototype)
        } else if (t === '%AsyncIteratorPrototype%') {
          var a = e('%AsyncGenerator%')
          a && (r = st(a.prototype))
        }
        return (Kt[t] = r), r
      },
      uh = {
        '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
        '%ArrayPrototype%': ['Array', 'prototype'],
        '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
        '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
        '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
        '%ArrayProto_values%': ['Array', 'prototype', 'values'],
        '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
        '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
        '%AsyncGeneratorPrototype%': [
          'AsyncGeneratorFunction',
          'prototype',
          'prototype',
        ],
        '%BooleanPrototype%': ['Boolean', 'prototype'],
        '%DataViewPrototype%': ['DataView', 'prototype'],
        '%DatePrototype%': ['Date', 'prototype'],
        '%ErrorPrototype%': ['Error', 'prototype'],
        '%EvalErrorPrototype%': ['EvalError', 'prototype'],
        '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
        '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
        '%FunctionPrototype%': ['Function', 'prototype'],
        '%Generator%': ['GeneratorFunction', 'prototype'],
        '%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
        '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
        '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
        '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
        '%JSONParse%': ['JSON', 'parse'],
        '%JSONStringify%': ['JSON', 'stringify'],
        '%MapPrototype%': ['Map', 'prototype'],
        '%NumberPrototype%': ['Number', 'prototype'],
        '%ObjectPrototype%': ['Object', 'prototype'],
        '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
        '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
        '%PromisePrototype%': ['Promise', 'prototype'],
        '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
        '%Promise_all%': ['Promise', 'all'],
        '%Promise_reject%': ['Promise', 'reject'],
        '%Promise_resolve%': ['Promise', 'resolve'],
        '%RangeErrorPrototype%': ['RangeError', 'prototype'],
        '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
        '%RegExpPrototype%': ['RegExp', 'prototype'],
        '%SetPrototype%': ['Set', 'prototype'],
        '%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
        '%StringPrototype%': ['String', 'prototype'],
        '%SymbolPrototype%': ['Symbol', 'prototype'],
        '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
        '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
        '%TypeErrorPrototype%': ['TypeError', 'prototype'],
        '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
        '%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
        '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
        '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
        '%URIErrorPrototype%': ['URIError', 'prototype'],
        '%WeakMapPrototype%': ['WeakMap', 'prototype'],
        '%WeakSetPrototype%': ['WeakSet', 'prototype'],
      },
      jr = qn(),
      Ln = oh(),
      KB = jr.call(Function.call, Array.prototype.concat),
      YB = jr.call(Function.apply, Array.prototype.splice),
      ih = jr.call(Function.call, String.prototype.replace),
      $n = jr.call(Function.call, String.prototype.slice),
      XB = jr.call(Function.call, RegExp.prototype.exec),
      JB =
        /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
      QB = /\\(\\)?/g,
      ZB = function (t) {
        var r = $n(t, 0, 1),
          n = $n(t, -1)
        if (r === '%' && n !== '%')
          throw new Yt('invalid intrinsic syntax, expected closing `%`')
        if (n === '%' && r !== '%')
          throw new Yt('invalid intrinsic syntax, expected opening `%`')
        var a = []
        return (
          ih(t, JB, function (o, u, i, s) {
            a[a.length] = i ? ih(s, QB, '$1') : u || o
          }),
          a
        )
      },
      eT = function (t, r) {
        var n = t,
          a
        if ((Ln(uh, n) && ((a = uh[n]), (n = '%' + a[0] + '%')), Ln(Kt, n))) {
          var o = Kt[n]
          if ((o === Wt && (o = VB(n)), typeof o > 'u' && !r))
            throw new Vt(
              'intrinsic ' +
                t +
                ' exists, but is not available. Please file an issue!'
            )
          return {alias: a, name: n, value: o}
        }
        throw new Yt('intrinsic ' + t + ' does not exist!')
      }
    lh.exports = function (t, r) {
      if (typeof t != 'string' || t.length === 0)
        throw new Vt('intrinsic name must be a non-empty string')
      if (arguments.length > 1 && typeof r != 'boolean')
        throw new Vt('"allowMissing" argument must be a boolean')
      if (XB(/^%?[^%]*%?$/, t) === null)
        throw new Yt(
          '`%` may not be present anywhere but at the beginning and end of the intrinsic name'
        )
      var n = ZB(t),
        a = n.length > 0 ? n[0] : '',
        o = eT('%' + a + '%', r),
        u = o.name,
        i = o.value,
        s = !1,
        d = o.alias
      d && ((a = d[0]), YB(n, KB([0, 1], d)))
      for (var y = 1, A = !0; y < n.length; y += 1) {
        var g = n[y],
          h = $n(g, 0, 1),
          E = $n(g, -1)
        if (
          (h === '"' ||
            h === "'" ||
            h === '`' ||
            E === '"' ||
            E === "'" ||
            E === '`') &&
          h !== E
        )
          throw new Yt('property names with quotes must have matching quotes')
        if (
          ((g === 'constructor' || !A) && (s = !0),
          (a += '.' + g),
          (u = '%' + a + '%'),
          Ln(Kt, u))
        )
          i = Kt[u]
        else if (i != null) {
          if (!(g in i)) {
            if (!r)
              throw new Vt(
                'base intrinsic for ' +
                  t +
                  ' exists, but the property is not available.'
              )
            return
          }
          if (Dt && y + 1 >= n.length) {
            var b = Dt(i, g)
            ;(A = !!b),
              A && 'get' in b && !('originalValue' in b.get)
                ? (i = b.get)
                : (i = i[g])
          } else (A = Ln(i, g)), (i = i[g])
          A && !s && (Kt[u] = i)
        }
      }
      return i
    }
  })
  var gh = F((SX, zn) => {
    'use strict'
    l()
    c()
    p()
    var tu = qn(),
      Xt = Un(),
      dh = Xt('%Function.prototype.apply%'),
      fh = Xt('%Function.prototype.call%'),
      hh = Xt('%Reflect.apply%', !0) || tu.call(fh, dh),
      ch = Xt('%Object.getOwnPropertyDescriptor%', !0),
      vt = Xt('%Object.defineProperty%', !0),
      tT = Xt('%Math.max%')
    if (vt)
      try {
        vt({}, 'a', {value: 1})
      } catch {
        vt = null
      }
    zn.exports = function (t) {
      var r = hh(tu, fh, arguments)
      if (ch && vt) {
        var n = ch(r, 'length')
        n.configurable &&
          vt(r, 'length', {value: 1 + tT(0, t.length - (arguments.length - 1))})
      }
      return r
    }
    var ph = function () {
      return hh(tu, dh, arguments)
    }
    vt ? vt(zn.exports, 'apply', {value: ph}) : (zn.exports.apply = ph)
  })
  var Ah = F((_X, bh) => {
    'use strict'
    l()
    c()
    p()
    var mh = Un(),
      yh = gh(),
      rT = yh(mh('String.prototype.indexOf'))
    bh.exports = function (t, r) {
      var n = mh(t, !!r)
      return typeof n == 'function' && rT(t, '.prototype.') > -1 ? yh(n) : n
    }
  })
  var Eh = F(() => {
    l()
    c()
    p()
  })
  var Mh = F((qX, jh) => {
    l()
    c()
    p()
    var pu = typeof Map == 'function' && Map.prototype,
      ru =
        Object.getOwnPropertyDescriptor && pu
          ? Object.getOwnPropertyDescriptor(Map.prototype, 'size')
          : null,
      Gn = pu && ru && typeof ru.get == 'function' ? ru.get : null,
      nT = pu && Map.prototype.forEach,
      du = typeof Set == 'function' && Set.prototype,
      nu =
        Object.getOwnPropertyDescriptor && du
          ? Object.getOwnPropertyDescriptor(Set.prototype, 'size')
          : null,
      Wn = du && nu && typeof nu.get == 'function' ? nu.get : null,
      aT = du && Set.prototype.forEach,
      oT = typeof WeakMap == 'function' && WeakMap.prototype,
      qr = oT ? WeakMap.prototype.has : null,
      uT = typeof WeakSet == 'function' && WeakSet.prototype,
      Lr = uT ? WeakSet.prototype.has : null,
      iT = typeof WeakRef == 'function' && WeakRef.prototype,
      Dh = iT ? WeakRef.prototype.deref : null,
      sT = Boolean.prototype.valueOf,
      lT = Object.prototype.toString,
      cT = Function.prototype.toString,
      pT = String.prototype.match,
      fu = String.prototype.slice,
      ct = String.prototype.replace,
      dT = String.prototype.toUpperCase,
      vh = String.prototype.toLowerCase,
      Oh = RegExp.prototype.test,
      Ch = Array.prototype.concat,
      Ge = Array.prototype.join,
      fT = Array.prototype.slice,
      xh = Math.floor,
      uu = typeof BigInt == 'function' ? BigInt.prototype.valueOf : null,
      au = Object.getOwnPropertySymbols,
      iu =
        typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
          ? Symbol.prototype.toString
          : null,
      Jt = typeof Symbol == 'function' && typeof Symbol.iterator == 'object',
      Se =
        typeof Symbol == 'function' &&
        Symbol.toStringTag &&
        (typeof Symbol.toStringTag === Jt || 'symbol')
          ? Symbol.toStringTag
          : null,
      Rh = Object.prototype.propertyIsEnumerable,
      Fh =
        (typeof Reflect == 'function'
          ? Reflect.getPrototypeOf
          : Object.getPrototypeOf) ||
        ([].__proto__ === Array.prototype
          ? function (e) {
              return e.__proto__
            }
          : null)
    function Sh(e, t) {
      if (
        e === 1 / 0 ||
        e === -1 / 0 ||
        e !== e ||
        (e && e > -1e3 && e < 1e3) ||
        Oh.call(/e/, t)
      )
        return t
      var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g
      if (typeof e == 'number') {
        var n = e < 0 ? -xh(-e) : xh(e)
        if (n !== e) {
          var a = String(n),
            o = fu.call(t, a.length + 1)
          return (
            ct.call(a, r, '$&_') +
            '.' +
            ct.call(ct.call(o, /([0-9]{3})/g, '$&_'), /_$/, '')
          )
        }
      }
      return ct.call(t, r, '$&_')
    }
    var su = Eh(),
      wh = su.custom,
      Bh = Ih(wh) ? wh : null
    jh.exports = function e(t, r, n, a) {
      var o = r || {}
      if (
        lt(o, 'quoteStyle') &&
        o.quoteStyle !== 'single' &&
        o.quoteStyle !== 'double'
      )
        throw new TypeError('option "quoteStyle" must be "single" or "double"')
      if (
        lt(o, 'maxStringLength') &&
        (typeof o.maxStringLength == 'number'
          ? o.maxStringLength < 0 && o.maxStringLength !== 1 / 0
          : o.maxStringLength !== null)
      )
        throw new TypeError(
          'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`'
        )
      var u = lt(o, 'customInspect') ? o.customInspect : !0
      if (typeof u != 'boolean' && u !== 'symbol')
        throw new TypeError(
          'option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`'
        )
      if (
        lt(o, 'indent') &&
        o.indent !== null &&
        o.indent !== '	' &&
        !(parseInt(o.indent, 10) === o.indent && o.indent > 0)
      )
        throw new TypeError(
          'option "indent" must be "\\t", an integer > 0, or `null`'
        )
      if (lt(o, 'numericSeparator') && typeof o.numericSeparator != 'boolean')
        throw new TypeError(
          'option "numericSeparator", if provided, must be `true` or `false`'
        )
      var i = o.numericSeparator
      if (typeof t > 'u') return 'undefined'
      if (t === null) return 'null'
      if (typeof t == 'boolean') return t ? 'true' : 'false'
      if (typeof t == 'string') return Nh(t, o)
      if (typeof t == 'number') {
        if (t === 0) return 1 / 0 / t > 0 ? '0' : '-0'
        var s = String(t)
        return i ? Sh(t, s) : s
      }
      if (typeof t == 'bigint') {
        var d = String(t) + 'n'
        return i ? Sh(t, d) : d
      }
      var y = typeof o.depth > 'u' ? 5 : o.depth
      if ((typeof n > 'u' && (n = 0), n >= y && y > 0 && typeof t == 'object'))
        return lu(t) ? '[Array]' : '[Object]'
      var A = OT(o, n)
      if (typeof a > 'u') a = []
      else if (kh(a, t) >= 0) return '[Circular]'
      function g(X, O, T) {
        if ((O && ((a = fT.call(a)), a.push(O)), T)) {
          var M = {depth: o.depth}
          return (
            lt(o, 'quoteStyle') && (M.quoteStyle = o.quoteStyle),
            e(X, M, n + 1, a)
          )
        }
        return e(X, o, n + 1, a)
      }
      if (typeof t == 'function' && !Th(t)) {
        var h = vT(t),
          E = Hn(t, g)
        return (
          '[Function' +
          (h ? ': ' + h : ' (anonymous)') +
          ']' +
          (E.length > 0 ? ' { ' + Ge.call(E, ', ') + ' }' : '')
        )
      }
      if (Ih(t)) {
        var b = Jt
          ? ct.call(String(t), /^(Symbol\(.*\))_[^)]*$/, '$1')
          : iu.call(t)
        return typeof t == 'object' && !Jt ? Mr(b) : b
      }
      if (BT(t)) {
        for (
          var x = '<' + vh.call(String(t.nodeName)),
            S = t.attributes || [],
            P = 0;
          P < S.length;
          P++
        )
          x += ' ' + S[P].name + '=' + Ph(hT(S[P].value), 'double', o)
        return (
          (x += '>'),
          t.childNodes && t.childNodes.length && (x += '...'),
          (x += '</' + vh.call(String(t.nodeName)) + '>'),
          x
        )
      }
      if (lu(t)) {
        if (t.length === 0) return '[]'
        var N = Hn(t, g)
        return A && !_T(N)
          ? '[' + cu(N, A) + ']'
          : '[ ' + Ge.call(N, ', ') + ' ]'
      }
      if (mT(t)) {
        var $ = Hn(t, g)
        return !('cause' in Error.prototype) &&
          'cause' in t &&
          !Rh.call(t, 'cause')
          ? '{ [' +
              String(t) +
              '] ' +
              Ge.call(Ch.call('[cause]: ' + g(t.cause), $), ', ') +
              ' }'
          : $.length === 0
          ? '[' + String(t) + ']'
          : '{ [' + String(t) + '] ' + Ge.call($, ', ') + ' }'
      }
      if (typeof t == 'object' && u) {
        if (Bh && typeof t[Bh] == 'function' && su) return su(t, {depth: y - n})
        if (u !== 'symbol' && typeof t.inspect == 'function') return t.inspect()
      }
      if (CT(t)) {
        var w = []
        return (
          nT.call(t, function (X, O) {
            w.push(g(O, t, !0) + ' => ' + g(X, t))
          }),
          _h('Map', Gn.call(t), w, A)
        )
      }
      if (ST(t)) {
        var j = []
        return (
          aT.call(t, function (X) {
            j.push(g(X, t))
          }),
          _h('Set', Wn.call(t), j, A)
        )
      }
      if (xT(t)) return ou('WeakMap')
      if (wT(t)) return ou('WeakSet')
      if (FT(t)) return ou('WeakRef')
      if (bT(t)) return Mr(g(Number(t)))
      if (ET(t)) return Mr(g(uu.call(t)))
      if (AT(t)) return Mr(sT.call(t))
      if (yT(t)) return Mr(g(String(t)))
      if (!gT(t) && !Th(t)) {
        var I = Hn(t, g),
          z = Fh
            ? Fh(t) === Object.prototype
            : t instanceof Object || t.constructor === Object,
          K = t instanceof Object ? '' : 'null prototype',
          U =
            !z && Se && Object(t) === t && Se in t
              ? fu.call(pt(t), 8, -1)
              : K
              ? 'Object'
              : '',
          ue =
            z || typeof t.constructor != 'function'
              ? ''
              : t.constructor.name
              ? t.constructor.name + ' '
              : '',
          te =
            ue +
            (U || K
              ? '[' + Ge.call(Ch.call([], U || [], K || []), ': ') + '] '
              : '')
        return I.length === 0
          ? te + '{}'
          : A
          ? te + '{' + cu(I, A) + '}'
          : te + '{ ' + Ge.call(I, ', ') + ' }'
      }
      return String(t)
    }
    function Ph(e, t, r) {
      var n = (r.quoteStyle || t) === 'double' ? '"' : "'"
      return n + e + n
    }
    function hT(e) {
      return ct.call(String(e), /"/g, '&quot;')
    }
    function lu(e) {
      return (
        pt(e) === '[object Array]' &&
        (!Se || !(typeof e == 'object' && Se in e))
      )
    }
    function gT(e) {
      return (
        pt(e) === '[object Date]' && (!Se || !(typeof e == 'object' && Se in e))
      )
    }
    function Th(e) {
      return (
        pt(e) === '[object RegExp]' &&
        (!Se || !(typeof e == 'object' && Se in e))
      )
    }
    function mT(e) {
      return (
        pt(e) === '[object Error]' &&
        (!Se || !(typeof e == 'object' && Se in e))
      )
    }
    function yT(e) {
      return (
        pt(e) === '[object String]' &&
        (!Se || !(typeof e == 'object' && Se in e))
      )
    }
    function bT(e) {
      return (
        pt(e) === '[object Number]' &&
        (!Se || !(typeof e == 'object' && Se in e))
      )
    }
    function AT(e) {
      return (
        pt(e) === '[object Boolean]' &&
        (!Se || !(typeof e == 'object' && Se in e))
      )
    }
    function Ih(e) {
      if (Jt) return e && typeof e == 'object' && e instanceof Symbol
      if (typeof e == 'symbol') return !0
      if (!e || typeof e != 'object' || !iu) return !1
      try {
        return iu.call(e), !0
      } catch {}
      return !1
    }
    function ET(e) {
      if (!e || typeof e != 'object' || !uu) return !1
      try {
        return uu.call(e), !0
      } catch {}
      return !1
    }
    var DT =
      Object.prototype.hasOwnProperty ||
      function (e) {
        return e in this
      }
    function lt(e, t) {
      return DT.call(e, t)
    }
    function pt(e) {
      return lT.call(e)
    }
    function vT(e) {
      if (e.name) return e.name
      var t = pT.call(cT.call(e), /^function\s*([\w$]+)/)
      return t ? t[1] : null
    }
    function kh(e, t) {
      if (e.indexOf) return e.indexOf(t)
      for (var r = 0, n = e.length; r < n; r++) if (e[r] === t) return r
      return -1
    }
    function CT(e) {
      if (!Gn || !e || typeof e != 'object') return !1
      try {
        Gn.call(e)
        try {
          Wn.call(e)
        } catch {
          return !0
        }
        return e instanceof Map
      } catch {}
      return !1
    }
    function xT(e) {
      if (!qr || !e || typeof e != 'object') return !1
      try {
        qr.call(e, qr)
        try {
          Lr.call(e, Lr)
        } catch {
          return !0
        }
        return e instanceof WeakMap
      } catch {}
      return !1
    }
    function FT(e) {
      if (!Dh || !e || typeof e != 'object') return !1
      try {
        return Dh.call(e), !0
      } catch {}
      return !1
    }
    function ST(e) {
      if (!Wn || !e || typeof e != 'object') return !1
      try {
        Wn.call(e)
        try {
          Gn.call(e)
        } catch {
          return !0
        }
        return e instanceof Set
      } catch {}
      return !1
    }
    function wT(e) {
      if (!Lr || !e || typeof e != 'object') return !1
      try {
        Lr.call(e, Lr)
        try {
          qr.call(e, qr)
        } catch {
          return !0
        }
        return e instanceof WeakSet
      } catch {}
      return !1
    }
    function BT(e) {
      return !e || typeof e != 'object'
        ? !1
        : typeof HTMLElement < 'u' && e instanceof HTMLElement
        ? !0
        : typeof e.nodeName == 'string' && typeof e.getAttribute == 'function'
    }
    function Nh(e, t) {
      if (e.length > t.maxStringLength) {
        var r = e.length - t.maxStringLength,
          n = '... ' + r + ' more character' + (r > 1 ? 's' : '')
        return Nh(fu.call(e, 0, t.maxStringLength), t) + n
      }
      var a = ct.call(ct.call(e, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, TT)
      return Ph(a, 'single', t)
    }
    function TT(e) {
      var t = e.charCodeAt(0),
        r = {8: 'b', 9: 't', 10: 'n', 12: 'f', 13: 'r'}[t]
      return r
        ? '\\' + r
        : '\\x' + (t < 16 ? '0' : '') + dT.call(t.toString(16))
    }
    function Mr(e) {
      return 'Object(' + e + ')'
    }
    function ou(e) {
      return e + ' { ? }'
    }
    function _h(e, t, r, n) {
      var a = n ? cu(r, n) : Ge.call(r, ', ')
      return e + ' (' + t + ') {' + a + '}'
    }
    function _T(e) {
      for (var t = 0; t < e.length; t++)
        if (
          kh(
            e[t],
            `
`
          ) >= 0
        )
          return !1
      return !0
    }
    function OT(e, t) {
      var r
      if (e.indent === '	') r = '	'
      else if (typeof e.indent == 'number' && e.indent > 0)
        r = Ge.call(Array(e.indent + 1), ' ')
      else return null
      return {base: r, prev: Ge.call(Array(t + 1), r)}
    }
    function cu(e, t) {
      if (e.length === 0) return ''
      var r =
        `
` +
        t.prev +
        t.base
      return (
        r +
        Ge.call(e, ',' + r) +
        `
` +
        t.prev
      )
    }
    function Hn(e, t) {
      var r = lu(e),
        n = []
      if (r) {
        n.length = e.length
        for (var a = 0; a < e.length; a++) n[a] = lt(e, a) ? t(e[a], e) : ''
      }
      var o = typeof au == 'function' ? au(e) : [],
        u
      if (Jt) {
        u = {}
        for (var i = 0; i < o.length; i++) u['$' + o[i]] = o[i]
      }
      for (var s in e)
        lt(e, s) &&
          ((r && String(Number(s)) === s && s < e.length) ||
            (Jt && u['$' + s] instanceof Symbol) ||
            (Oh.call(/[^\w$]/, s)
              ? n.push(t(s, e) + ': ' + t(e[s], e))
              : n.push(s + ': ' + t(e[s], e))))
      if (typeof au == 'function')
        for (var d = 0; d < o.length; d++)
          Rh.call(e, o[d]) && n.push('[' + t(o[d]) + ']: ' + t(e[o[d]], e))
      return n
    }
  })
  var Lh = F((zX, qh) => {
    'use strict'
    l()
    c()
    p()
    var hu = Un(),
      Qt = Ah(),
      RT = Mh(),
      PT = hu('%TypeError%'),
      Vn = hu('%WeakMap%', !0),
      Kn = hu('%Map%', !0),
      IT = Qt('WeakMap.prototype.get', !0),
      kT = Qt('WeakMap.prototype.set', !0),
      NT = Qt('WeakMap.prototype.has', !0),
      jT = Qt('Map.prototype.get', !0),
      MT = Qt('Map.prototype.set', !0),
      qT = Qt('Map.prototype.has', !0),
      gu = function (e, t) {
        for (var r = e, n; (n = r.next) !== null; r = n)
          if (n.key === t)
            return (r.next = n.next), (n.next = e.next), (e.next = n), n
      },
      LT = function (e, t) {
        var r = gu(e, t)
        return r && r.value
      },
      $T = function (e, t, r) {
        var n = gu(e, t)
        n ? (n.value = r) : (e.next = {key: t, next: e.next, value: r})
      },
      UT = function (e, t) {
        return !!gu(e, t)
      }
    qh.exports = function () {
      var t,
        r,
        n,
        a = {
          assert: function (o) {
            if (!a.has(o))
              throw new PT('Side channel does not contain ' + RT(o))
          },
          get: function (o) {
            if (Vn && o && (typeof o == 'object' || typeof o == 'function')) {
              if (t) return IT(t, o)
            } else if (Kn) {
              if (r) return jT(r, o)
            } else if (n) return LT(n, o)
          },
          has: function (o) {
            if (Vn && o && (typeof o == 'object' || typeof o == 'function')) {
              if (t) return NT(t, o)
            } else if (Kn) {
              if (r) return qT(r, o)
            } else if (n) return UT(n, o)
            return !1
          },
          set: function (o, u) {
            Vn && o && (typeof o == 'object' || typeof o == 'function')
              ? (t || (t = new Vn()), kT(t, o, u))
              : Kn
              ? (r || (r = new Kn()), MT(r, o, u))
              : (n || (n = {key: {}, next: null}), $T(n, o, u))
          },
        }
      return a
    }
  })
  var Yn = F((VX, $h) => {
    'use strict'
    l()
    c()
    p()
    var zT = String.prototype.replace,
      HT = /%20/g,
      mu = {RFC1738: 'RFC1738', RFC3986: 'RFC3986'}
    $h.exports = {
      default: mu.RFC3986,
      formatters: {
        RFC1738: function (e) {
          return zT.call(e, HT, '+')
        },
        RFC3986: function (e) {
          return String(e)
        },
      },
      RFC1738: mu.RFC1738,
      RFC3986: mu.RFC3986,
    }
  })
  var bu = F((JX, zh) => {
    'use strict'
    l()
    c()
    p()
    var GT = Yn(),
      yu = Object.prototype.hasOwnProperty,
      Ct = Array.isArray,
      We = (function () {
        for (var e = [], t = 0; t < 256; ++t)
          e.push('%' + ((t < 16 ? '0' : '') + t.toString(16)).toUpperCase())
        return e
      })(),
      WT = function (t) {
        for (; t.length > 1; ) {
          var r = t.pop(),
            n = r.obj[r.prop]
          if (Ct(n)) {
            for (var a = [], o = 0; o < n.length; ++o)
              typeof n[o] < 'u' && a.push(n[o])
            r.obj[r.prop] = a
          }
        }
      },
      Uh = function (t, r) {
        for (
          var n = r && r.plainObjects ? Object.create(null) : {}, a = 0;
          a < t.length;
          ++a
        )
          typeof t[a] < 'u' && (n[a] = t[a])
        return n
      },
      VT = function e(t, r, n) {
        if (!r) return t
        if (typeof r != 'object') {
          if (Ct(t)) t.push(r)
          else if (t && typeof t == 'object')
            ((n && (n.plainObjects || n.allowPrototypes)) ||
              !yu.call(Object.prototype, r)) &&
              (t[r] = !0)
          else return [t, r]
          return t
        }
        if (!t || typeof t != 'object') return [t].concat(r)
        var a = t
        return (
          Ct(t) && !Ct(r) && (a = Uh(t, n)),
          Ct(t) && Ct(r)
            ? (r.forEach(function (o, u) {
                if (yu.call(t, u)) {
                  var i = t[u]
                  i && typeof i == 'object' && o && typeof o == 'object'
                    ? (t[u] = e(i, o, n))
                    : t.push(o)
                } else t[u] = o
              }),
              t)
            : Object.keys(r).reduce(function (o, u) {
                var i = r[u]
                return yu.call(o, u) ? (o[u] = e(o[u], i, n)) : (o[u] = i), o
              }, a)
        )
      },
      KT = function (t, r) {
        return Object.keys(r).reduce(function (n, a) {
          return (n[a] = r[a]), n
        }, t)
      },
      YT = function (e, t, r) {
        var n = e.replace(/\+/g, ' ')
        if (r === 'iso-8859-1') return n.replace(/%[0-9a-f]{2}/gi, unescape)
        try {
          return decodeURIComponent(n)
        } catch {
          return n
        }
      },
      XT = function (t, r, n, a, o) {
        if (t.length === 0) return t
        var u = t
        if (
          (typeof t == 'symbol'
            ? (u = Symbol.prototype.toString.call(t))
            : typeof t != 'string' && (u = String(t)),
          n === 'iso-8859-1')
        )
          return escape(u).replace(/%u[0-9a-f]{4}/gi, function (y) {
            return '%26%23' + parseInt(y.slice(2), 16) + '%3B'
          })
        for (var i = '', s = 0; s < u.length; ++s) {
          var d = u.charCodeAt(s)
          if (
            d === 45 ||
            d === 46 ||
            d === 95 ||
            d === 126 ||
            (d >= 48 && d <= 57) ||
            (d >= 65 && d <= 90) ||
            (d >= 97 && d <= 122) ||
            (o === GT.RFC1738 && (d === 40 || d === 41))
          ) {
            i += u.charAt(s)
            continue
          }
          if (d < 128) {
            i = i + We[d]
            continue
          }
          if (d < 2048) {
            i = i + (We[192 | (d >> 6)] + We[128 | (d & 63)])
            continue
          }
          if (d < 55296 || d >= 57344) {
            i =
              i +
              (We[224 | (d >> 12)] +
                We[128 | ((d >> 6) & 63)] +
                We[128 | (d & 63)])
            continue
          }
          ;(s += 1),
            (d = 65536 + (((d & 1023) << 10) | (u.charCodeAt(s) & 1023))),
            (i +=
              We[240 | (d >> 18)] +
              We[128 | ((d >> 12) & 63)] +
              We[128 | ((d >> 6) & 63)] +
              We[128 | (d & 63)])
        }
        return i
      },
      JT = function (t) {
        for (
          var r = [{obj: {o: t}, prop: 'o'}], n = [], a = 0;
          a < r.length;
          ++a
        )
          for (
            var o = r[a], u = o.obj[o.prop], i = Object.keys(u), s = 0;
            s < i.length;
            ++s
          ) {
            var d = i[s],
              y = u[d]
            typeof y == 'object' &&
              y !== null &&
              n.indexOf(y) === -1 &&
              (r.push({obj: u, prop: d}), n.push(y))
          }
        return WT(r), t
      },
      QT = function (t) {
        return Object.prototype.toString.call(t) === '[object RegExp]'
      },
      ZT = function (t) {
        return !t || typeof t != 'object'
          ? !1
          : !!(
              t.constructor &&
              t.constructor.isBuffer &&
              t.constructor.isBuffer(t)
            )
      },
      e8 = function (t, r) {
        return [].concat(t, r)
      },
      t8 = function (t, r) {
        if (Ct(t)) {
          for (var n = [], a = 0; a < t.length; a += 1) n.push(r(t[a]))
          return n
        }
        return r(t)
      }
    zh.exports = {
      arrayToObject: Uh,
      assign: KT,
      combine: e8,
      compact: JT,
      decode: YT,
      encode: XT,
      isBuffer: ZT,
      isRegExp: QT,
      maybeMap: t8,
      merge: VT,
    }
  })
  var Yh = F((tJ, Kh) => {
    'use strict'
    l()
    c()
    p()
    var Wh = Lh(),
      Eu = bu(),
      $r = Yn(),
      r8 = Object.prototype.hasOwnProperty,
      Hh = {
        brackets: function (t) {
          return t + '[]'
        },
        comma: 'comma',
        indices: function (t, r) {
          return t + '[' + r + ']'
        },
        repeat: function (t) {
          return t
        },
      },
      et = Array.isArray,
      n8 = String.prototype.split,
      a8 = Array.prototype.push,
      Vh = function (e, t) {
        a8.apply(e, et(t) ? t : [t])
      },
      o8 = Date.prototype.toISOString,
      Gh = $r.default,
      Ce = {
        addQueryPrefix: !1,
        allowDots: !1,
        charset: 'utf-8',
        charsetSentinel: !1,
        delimiter: '&',
        encode: !0,
        encoder: Eu.encode,
        encodeValuesOnly: !1,
        format: Gh,
        formatter: $r.formatters[Gh],
        indices: !1,
        serializeDate: function (t) {
          return o8.call(t)
        },
        skipNulls: !1,
        strictNullHandling: !1,
      },
      u8 = function (t) {
        return (
          typeof t == 'string' ||
          typeof t == 'number' ||
          typeof t == 'boolean' ||
          typeof t == 'symbol' ||
          typeof t == 'bigint'
        )
      },
      Au = {},
      i8 = function e(t, r, n, a, o, u, i, s, d, y, A, g, h, E, b, x) {
        for (
          var S = t, P = x, N = 0, $ = !1;
          (P = P.get(Au)) !== void 0 && !$;

        ) {
          var w = P.get(t)
          if (((N += 1), typeof w < 'u')) {
            if (w === N) throw new RangeError('Cyclic object value')
            $ = !0
          }
          typeof P.get(Au) > 'u' && (N = 0)
        }
        if (
          (typeof s == 'function'
            ? (S = s(r, S))
            : S instanceof Date
            ? (S = A(S))
            : n === 'comma' &&
              et(S) &&
              (S = Eu.maybeMap(S, function (V) {
                return V instanceof Date ? A(V) : V
              })),
          S === null)
        ) {
          if (o) return i && !E ? i(r, Ce.encoder, b, 'key', g) : r
          S = ''
        }
        if (u8(S) || Eu.isBuffer(S)) {
          if (i) {
            var j = E ? r : i(r, Ce.encoder, b, 'key', g)
            if (n === 'comma' && E) {
              for (
                var I = n8.call(String(S), ','), z = '', K = 0;
                K < I.length;
                ++K
              )
                z +=
                  (K === 0 ? '' : ',') + h(i(I[K], Ce.encoder, b, 'value', g))
              return [
                h(j) + (a && et(S) && I.length === 1 ? '[]' : '') + '=' + z,
              ]
            }
            return [h(j) + '=' + h(i(S, Ce.encoder, b, 'value', g))]
          }
          return [h(r) + '=' + h(String(S))]
        }
        var U = []
        if (typeof S > 'u') return U
        var ue
        if (n === 'comma' && et(S))
          ue = [{value: S.length > 0 ? S.join(',') || null : void 0}]
        else if (et(s)) ue = s
        else {
          var te = Object.keys(S)
          ue = d ? te.sort(d) : te
        }
        for (
          var X = a && et(S) && S.length === 1 ? r + '[]' : r, O = 0;
          O < ue.length;
          ++O
        ) {
          var T = ue[O],
            M = typeof T == 'object' && typeof T.value < 'u' ? T.value : S[T]
          if (!(u && M === null)) {
            var G = et(S)
              ? typeof n == 'function'
                ? n(X, T)
                : X
              : X + (y ? '.' + T : '[' + T + ']')
            x.set(t, N)
            var Y = Wh()
            Y.set(Au, x),
              Vh(U, e(M, G, n, a, o, u, i, s, d, y, A, g, h, E, b, Y))
          }
        }
        return U
      },
      s8 = function (t) {
        if (!t) return Ce
        if (
          t.encoder !== null &&
          typeof t.encoder < 'u' &&
          typeof t.encoder != 'function'
        )
          throw new TypeError('Encoder has to be a function.')
        var r = t.charset || Ce.charset
        if (
          typeof t.charset < 'u' &&
          t.charset !== 'utf-8' &&
          t.charset !== 'iso-8859-1'
        )
          throw new TypeError(
            'The charset option must be either utf-8, iso-8859-1, or undefined'
          )
        var n = $r.default
        if (typeof t.format < 'u') {
          if (!r8.call($r.formatters, t.format))
            throw new TypeError('Unknown format option provided.')
          n = t.format
        }
        var a = $r.formatters[n],
          o = Ce.filter
        return (
          (typeof t.filter == 'function' || et(t.filter)) && (o = t.filter),
          {
            addQueryPrefix:
              typeof t.addQueryPrefix == 'boolean'
                ? t.addQueryPrefix
                : Ce.addQueryPrefix,
            allowDots: typeof t.allowDots > 'u' ? Ce.allowDots : !!t.allowDots,
            charset: r,
            charsetSentinel:
              typeof t.charsetSentinel == 'boolean'
                ? t.charsetSentinel
                : Ce.charsetSentinel,
            delimiter: typeof t.delimiter > 'u' ? Ce.delimiter : t.delimiter,
            encode: typeof t.encode == 'boolean' ? t.encode : Ce.encode,
            encoder: typeof t.encoder == 'function' ? t.encoder : Ce.encoder,
            encodeValuesOnly:
              typeof t.encodeValuesOnly == 'boolean'
                ? t.encodeValuesOnly
                : Ce.encodeValuesOnly,
            filter: o,
            format: n,
            formatter: a,
            serializeDate:
              typeof t.serializeDate == 'function'
                ? t.serializeDate
                : Ce.serializeDate,
            skipNulls:
              typeof t.skipNulls == 'boolean' ? t.skipNulls : Ce.skipNulls,
            sort: typeof t.sort == 'function' ? t.sort : null,
            strictNullHandling:
              typeof t.strictNullHandling == 'boolean'
                ? t.strictNullHandling
                : Ce.strictNullHandling,
          }
        )
      }
    Kh.exports = function (e, t) {
      var r = e,
        n = s8(t),
        a,
        o
      typeof n.filter == 'function'
        ? ((o = n.filter), (r = o('', r)))
        : et(n.filter) && ((o = n.filter), (a = o))
      var u = []
      if (typeof r != 'object' || r === null) return ''
      var i
      t && t.arrayFormat in Hh
        ? (i = t.arrayFormat)
        : t && 'indices' in t
        ? (i = t.indices ? 'indices' : 'repeat')
        : (i = 'indices')
      var s = Hh[i]
      if (t && 'commaRoundTrip' in t && typeof t.commaRoundTrip != 'boolean')
        throw new TypeError('`commaRoundTrip` must be a boolean, or absent')
      var d = s === 'comma' && t && t.commaRoundTrip
      a || (a = Object.keys(r)), n.sort && a.sort(n.sort)
      for (var y = Wh(), A = 0; A < a.length; ++A) {
        var g = a[A]
        ;(n.skipNulls && r[g] === null) ||
          Vh(
            u,
            i8(
              r[g],
              g,
              s,
              d,
              n.strictNullHandling,
              n.skipNulls,
              n.encode ? n.encoder : null,
              n.filter,
              n.sort,
              n.allowDots,
              n.serializeDate,
              n.format,
              n.formatter,
              n.encodeValuesOnly,
              n.charset,
              y
            )
          )
      }
      var h = u.join(n.delimiter),
        E = n.addQueryPrefix === !0 ? '?' : ''
      return (
        n.charsetSentinel &&
          (n.charset === 'iso-8859-1'
            ? (E += 'utf8=%26%2310003%3B&')
            : (E += 'utf8=%E2%9C%93&')),
        h.length > 0 ? E + h : ''
      )
    }
  })
  var Qh = F((oJ, Jh) => {
    'use strict'
    l()
    c()
    p()
    var Zt = bu(),
      Du = Object.prototype.hasOwnProperty,
      l8 = Array.isArray,
      Ee = {
        allowDots: !1,
        allowPrototypes: !1,
        allowSparse: !1,
        arrayLimit: 20,
        charset: 'utf-8',
        charsetSentinel: !1,
        comma: !1,
        decoder: Zt.decode,
        delimiter: '&',
        depth: 5,
        ignoreQueryPrefix: !1,
        interpretNumericEntities: !1,
        parameterLimit: 1e3,
        parseArrays: !0,
        plainObjects: !1,
        strictNullHandling: !1,
      },
      c8 = function (e) {
        return e.replace(/&#(\d+);/g, function (t, r) {
          return String.fromCharCode(parseInt(r, 10))
        })
      },
      Xh = function (e, t) {
        return e && typeof e == 'string' && t.comma && e.indexOf(',') > -1
          ? e.split(',')
          : e
      },
      p8 = 'utf8=%26%2310003%3B',
      d8 = 'utf8=%E2%9C%93',
      f8 = function (t, r) {
        var n = {},
          a = r.ignoreQueryPrefix ? t.replace(/^\?/, '') : t,
          o = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit,
          u = a.split(r.delimiter, o),
          i = -1,
          s,
          d = r.charset
        if (r.charsetSentinel)
          for (s = 0; s < u.length; ++s)
            u[s].indexOf('utf8=') === 0 &&
              (u[s] === d8 ? (d = 'utf-8') : u[s] === p8 && (d = 'iso-8859-1'),
              (i = s),
              (s = u.length))
        for (s = 0; s < u.length; ++s)
          if (s !== i) {
            var y = u[s],
              A = y.indexOf(']='),
              g = A === -1 ? y.indexOf('=') : A + 1,
              h,
              E
            g === -1
              ? ((h = r.decoder(y, Ee.decoder, d, 'key')),
                (E = r.strictNullHandling ? null : ''))
              : ((h = r.decoder(y.slice(0, g), Ee.decoder, d, 'key')),
                (E = Zt.maybeMap(Xh(y.slice(g + 1), r), function (b) {
                  return r.decoder(b, Ee.decoder, d, 'value')
                }))),
              E &&
                r.interpretNumericEntities &&
                d === 'iso-8859-1' &&
                (E = c8(E)),
              y.indexOf('[]=') > -1 && (E = l8(E) ? [E] : E),
              Du.call(n, h) ? (n[h] = Zt.combine(n[h], E)) : (n[h] = E)
          }
        return n
      },
      h8 = function (e, t, r, n) {
        for (var a = n ? t : Xh(t, r), o = e.length - 1; o >= 0; --o) {
          var u,
            i = e[o]
          if (i === '[]' && r.parseArrays) u = [].concat(a)
          else {
            u = r.plainObjects ? Object.create(null) : {}
            var s =
                i.charAt(0) === '[' && i.charAt(i.length - 1) === ']'
                  ? i.slice(1, -1)
                  : i,
              d = parseInt(s, 10)
            !r.parseArrays && s === ''
              ? (u = {0: a})
              : !isNaN(d) &&
                i !== s &&
                String(d) === s &&
                d >= 0 &&
                r.parseArrays &&
                d <= r.arrayLimit
              ? ((u = []), (u[d] = a))
              : s !== '__proto__' && (u[s] = a)
          }
          a = u
        }
        return a
      },
      g8 = function (t, r, n, a) {
        if (t) {
          var o = n.allowDots ? t.replace(/\.([^.[]+)/g, '[$1]') : t,
            u = /(\[[^[\]]*])/,
            i = /(\[[^[\]]*])/g,
            s = n.depth > 0 && u.exec(o),
            d = s ? o.slice(0, s.index) : o,
            y = []
          if (d) {
            if (
              !n.plainObjects &&
              Du.call(Object.prototype, d) &&
              !n.allowPrototypes
            )
              return
            y.push(d)
          }
          for (
            var A = 0;
            n.depth > 0 && (s = i.exec(o)) !== null && A < n.depth;

          ) {
            if (
              ((A += 1),
              !n.plainObjects &&
                Du.call(Object.prototype, s[1].slice(1, -1)) &&
                !n.allowPrototypes)
            )
              return
            y.push(s[1])
          }
          return s && y.push('[' + o.slice(s.index) + ']'), h8(y, r, n, a)
        }
      },
      m8 = function (t) {
        if (!t) return Ee
        if (
          t.decoder !== null &&
          t.decoder !== void 0 &&
          typeof t.decoder != 'function'
        )
          throw new TypeError('Decoder has to be a function.')
        if (
          typeof t.charset < 'u' &&
          t.charset !== 'utf-8' &&
          t.charset !== 'iso-8859-1'
        )
          throw new TypeError(
            'The charset option must be either utf-8, iso-8859-1, or undefined'
          )
        var r = typeof t.charset > 'u' ? Ee.charset : t.charset
        return {
          allowDots: typeof t.allowDots > 'u' ? Ee.allowDots : !!t.allowDots,
          allowPrototypes:
            typeof t.allowPrototypes == 'boolean'
              ? t.allowPrototypes
              : Ee.allowPrototypes,
          allowSparse:
            typeof t.allowSparse == 'boolean' ? t.allowSparse : Ee.allowSparse,
          arrayLimit:
            typeof t.arrayLimit == 'number' ? t.arrayLimit : Ee.arrayLimit,
          charset: r,
          charsetSentinel:
            typeof t.charsetSentinel == 'boolean'
              ? t.charsetSentinel
              : Ee.charsetSentinel,
          comma: typeof t.comma == 'boolean' ? t.comma : Ee.comma,
          decoder: typeof t.decoder == 'function' ? t.decoder : Ee.decoder,
          delimiter:
            typeof t.delimiter == 'string' || Zt.isRegExp(t.delimiter)
              ? t.delimiter
              : Ee.delimiter,
          depth:
            typeof t.depth == 'number' || t.depth === !1 ? +t.depth : Ee.depth,
          ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
          interpretNumericEntities:
            typeof t.interpretNumericEntities == 'boolean'
              ? t.interpretNumericEntities
              : Ee.interpretNumericEntities,
          parameterLimit:
            typeof t.parameterLimit == 'number'
              ? t.parameterLimit
              : Ee.parameterLimit,
          parseArrays: t.parseArrays !== !1,
          plainObjects:
            typeof t.plainObjects == 'boolean'
              ? t.plainObjects
              : Ee.plainObjects,
          strictNullHandling:
            typeof t.strictNullHandling == 'boolean'
              ? t.strictNullHandling
              : Ee.strictNullHandling,
        }
      }
    Jh.exports = function (e, t) {
      var r = m8(t)
      if (e === '' || e === null || typeof e > 'u')
        return r.plainObjects ? Object.create(null) : {}
      for (
        var n = typeof e == 'string' ? f8(e, r) : e,
          a = r.plainObjects ? Object.create(null) : {},
          o = Object.keys(n),
          u = 0;
        u < o.length;
        ++u
      ) {
        var i = o[u],
          s = g8(i, n[i], r, typeof e == 'string')
        a = Zt.merge(a, s, r)
      }
      return r.allowSparse === !0 ? a : Zt.compact(a)
    }
  })
  var Xn = F((lJ, Zh) => {
    'use strict'
    l()
    c()
    p()
    var y8 = Yh(),
      b8 = Qh(),
      A8 = Yn()
    Zh.exports = {formats: A8, parse: b8, stringify: y8}
  })
  var Sg = F((hZ, Fg) => {
    l()
    c()
    p()
    ;(function () {
      'use strict'
      function e(u) {
        if (u == null) return !1
        switch (u.type) {
          case 'ArrayExpression':
          case 'AssignmentExpression':
          case 'BinaryExpression':
          case 'CallExpression':
          case 'ConditionalExpression':
          case 'FunctionExpression':
          case 'Identifier':
          case 'Literal':
          case 'LogicalExpression':
          case 'MemberExpression':
          case 'NewExpression':
          case 'ObjectExpression':
          case 'SequenceExpression':
          case 'ThisExpression':
          case 'UnaryExpression':
          case 'UpdateExpression':
            return !0
        }
        return !1
      }
      function t(u) {
        if (u == null) return !1
        switch (u.type) {
          case 'DoWhileStatement':
          case 'ForInStatement':
          case 'ForStatement':
          case 'WhileStatement':
            return !0
        }
        return !1
      }
      function r(u) {
        if (u == null) return !1
        switch (u.type) {
          case 'BlockStatement':
          case 'BreakStatement':
          case 'ContinueStatement':
          case 'DebuggerStatement':
          case 'DoWhileStatement':
          case 'EmptyStatement':
          case 'ExpressionStatement':
          case 'ForInStatement':
          case 'ForStatement':
          case 'IfStatement':
          case 'LabeledStatement':
          case 'ReturnStatement':
          case 'SwitchStatement':
          case 'ThrowStatement':
          case 'TryStatement':
          case 'VariableDeclaration':
          case 'WhileStatement':
          case 'WithStatement':
            return !0
        }
        return !1
      }
      function n(u) {
        return r(u) || (u != null && u.type === 'FunctionDeclaration')
      }
      function a(u) {
        switch (u.type) {
          case 'IfStatement':
            return u.alternate != null ? u.alternate : u.consequent
          case 'LabeledStatement':
          case 'ForStatement':
          case 'ForInStatement':
          case 'WhileStatement':
          case 'WithStatement':
            return u.body
        }
        return null
      }
      function o(u) {
        var i
        if (u.type !== 'IfStatement' || u.alternate == null) return !1
        i = u.consequent
        do {
          if (i.type === 'IfStatement' && i.alternate == null) return !0
          i = a(i)
        } while (i)
        return !1
      }
      Fg.exports = {
        isExpression: e,
        isStatement: r,
        isIterationStatement: t,
        isSourceElement: n,
        isProblematicIfStatement: o,
        trailingStatement: a,
      }
    })()
  })
  var _u = F((bZ, wg) => {
    l()
    c()
    p()
    ;(function () {
      'use strict'
      var e, t, r, n, a, o
      ;(t = {
        NonAsciiIdentifierStart:
          /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
        NonAsciiIdentifierPart:
          /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
      }),
        (e = {
          NonAsciiIdentifierStart:
            /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
          NonAsciiIdentifierPart:
            /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,
        })
      function u(x) {
        return 48 <= x && x <= 57
      }
      function i(x) {
        return (
          (48 <= x && x <= 57) || (97 <= x && x <= 102) || (65 <= x && x <= 70)
        )
      }
      function s(x) {
        return x >= 48 && x <= 55
      }
      r = [
        5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202,
        8239, 8287, 12288, 65279,
      ]
      function d(x) {
        return (
          x === 32 ||
          x === 9 ||
          x === 11 ||
          x === 12 ||
          x === 160 ||
          (x >= 5760 && r.indexOf(x) >= 0)
        )
      }
      function y(x) {
        return x === 10 || x === 13 || x === 8232 || x === 8233
      }
      function A(x) {
        if (x <= 65535) return String.fromCharCode(x)
        var S = String.fromCharCode(Math.floor((x - 65536) / 1024) + 55296),
          P = String.fromCharCode(((x - 65536) % 1024) + 56320)
        return S + P
      }
      for (n = new Array(128), o = 0; o < 128; ++o)
        n[o] =
          (o >= 97 && o <= 122) || (o >= 65 && o <= 90) || o === 36 || o === 95
      for (a = new Array(128), o = 0; o < 128; ++o)
        a[o] =
          (o >= 97 && o <= 122) ||
          (o >= 65 && o <= 90) ||
          (o >= 48 && o <= 57) ||
          o === 36 ||
          o === 95
      function g(x) {
        return x < 128 ? n[x] : t.NonAsciiIdentifierStart.test(A(x))
      }
      function h(x) {
        return x < 128 ? a[x] : t.NonAsciiIdentifierPart.test(A(x))
      }
      function E(x) {
        return x < 128 ? n[x] : e.NonAsciiIdentifierStart.test(A(x))
      }
      function b(x) {
        return x < 128 ? a[x] : e.NonAsciiIdentifierPart.test(A(x))
      }
      wg.exports = {
        isDecimalDigit: u,
        isHexDigit: i,
        isOctalDigit: s,
        isWhiteSpace: d,
        isLineTerminator: y,
        isIdentifierStartES5: g,
        isIdentifierPartES5: h,
        isIdentifierStartES6: E,
        isIdentifierPartES6: b,
      }
    })()
  })
  var Tg = F((vZ, Bg) => {
    l()
    c()
    p()
    ;(function () {
      'use strict'
      var e = _u()
      function t(g) {
        switch (g) {
          case 'implements':
          case 'interface':
          case 'package':
          case 'private':
          case 'protected':
          case 'public':
          case 'static':
          case 'let':
            return !0
          default:
            return !1
        }
      }
      function r(g, h) {
        return !h && g === 'yield' ? !1 : n(g, h)
      }
      function n(g, h) {
        if (h && t(g)) return !0
        switch (g.length) {
          case 2:
            return g === 'if' || g === 'in' || g === 'do'
          case 3:
            return g === 'var' || g === 'for' || g === 'new' || g === 'try'
          case 4:
            return (
              g === 'this' ||
              g === 'else' ||
              g === 'case' ||
              g === 'void' ||
              g === 'with' ||
              g === 'enum'
            )
          case 5:
            return (
              g === 'while' ||
              g === 'break' ||
              g === 'catch' ||
              g === 'throw' ||
              g === 'const' ||
              g === 'yield' ||
              g === 'class' ||
              g === 'super'
            )
          case 6:
            return (
              g === 'return' ||
              g === 'typeof' ||
              g === 'delete' ||
              g === 'switch' ||
              g === 'export' ||
              g === 'import'
            )
          case 7:
            return g === 'default' || g === 'finally' || g === 'extends'
          case 8:
            return g === 'function' || g === 'continue' || g === 'debugger'
          case 10:
            return g === 'instanceof'
          default:
            return !1
        }
      }
      function a(g, h) {
        return g === 'null' || g === 'true' || g === 'false' || r(g, h)
      }
      function o(g, h) {
        return g === 'null' || g === 'true' || g === 'false' || n(g, h)
      }
      function u(g) {
        return g === 'eval' || g === 'arguments'
      }
      function i(g) {
        var h, E, b
        if (
          g.length === 0 ||
          ((b = g.charCodeAt(0)), !e.isIdentifierStartES5(b))
        )
          return !1
        for (h = 1, E = g.length; h < E; ++h)
          if (((b = g.charCodeAt(h)), !e.isIdentifierPartES5(b))) return !1
        return !0
      }
      function s(g, h) {
        return (g - 55296) * 1024 + (h - 56320) + 65536
      }
      function d(g) {
        var h, E, b, x, S
        if (g.length === 0) return !1
        for (S = e.isIdentifierStartES6, h = 0, E = g.length; h < E; ++h) {
          if (((b = g.charCodeAt(h)), 55296 <= b && b <= 56319)) {
            if (
              (++h,
              h >= E || ((x = g.charCodeAt(h)), !(56320 <= x && x <= 57343)))
            )
              return !1
            b = s(b, x)
          }
          if (!S(b)) return !1
          S = e.isIdentifierPartES6
        }
        return !0
      }
      function y(g, h) {
        return i(g) && !a(g, h)
      }
      function A(g, h) {
        return d(g) && !o(g, h)
      }
      Bg.exports = {
        isKeywordES5: r,
        isKeywordES6: n,
        isReservedWordES5: a,
        isReservedWordES6: o,
        isRestrictedWord: u,
        isIdentifierNameES5: i,
        isIdentifierNameES6: d,
        isIdentifierES5: y,
        isIdentifierES6: A,
      }
    })()
  })
  var Ou = F((ea) => {
    l()
    c()
    p()
    ;(function () {
      'use strict'
      ;(ea.ast = Sg()), (ea.code = _u()), (ea.keyword = Tg())
    })()
  })
  var _g = F((_Z, wO) => {
    wO.exports = {
      name: 'doctrine',
      description: 'JSDoc parser',
      homepage: 'https://github.com/eslint/doctrine',
      main: 'lib/doctrine.js',
      version: '3.0.0',
      engines: {node: '>=6.0.0'},
      directories: {lib: './lib'},
      files: ['lib'],
      maintainers: [
        {
          name: 'Nicholas C. Zakas',
          email: 'nicholas+npm@nczconsulting.com',
          web: 'https://www.nczonline.net',
        },
        {
          name: 'Yusuke Suzuki',
          email: 'utatane.tea@gmail.com',
          web: 'https://github.com/Constellation',
        },
      ],
      repository: 'eslint/doctrine',
      devDependencies: {
        coveralls: '^3.0.1',
        dateformat: '^1.0.11',
        eslint: '^1.10.3',
        'eslint-release': '^1.0.0',
        linefix: '^0.1.1',
        mocha: '^3.4.2',
        'npm-license': '^0.3.1',
        nyc: '^10.3.2',
        semver: '^5.0.3',
        shelljs: '^0.5.3',
        'shelljs-nodecli': '^0.1.1',
        should: '^5.0.1',
      },
      license: 'Apache-2.0',
      scripts: {
        pretest: 'npm run lint',
        test: 'nyc mocha',
        coveralls: 'nyc report --reporter=text-lcov | coveralls',
        lint: 'eslint lib/',
        'generate-release': 'eslint-generate-release',
        'generate-alpharelease': 'eslint-generate-prerelease alpha',
        'generate-betarelease': 'eslint-generate-prerelease beta',
        'generate-rcrelease': 'eslint-generate-prerelease rc',
        'publish-release': 'eslint-publish-release',
      },
      dependencies: {esutils: '^2.0.2'},
    }
  })
  var Rg = F((OZ, Og) => {
    l()
    c()
    p()
    function BO(e, t) {
      if (!e) throw new Error(t || 'unknown assertion error')
    }
    Og.exports = BO
  })
  var Ru = F((Hr) => {
    l()
    c()
    p()
    ;(function () {
      'use strict'
      var e
      ;(e = _g().version), (Hr.VERSION = e)
      function t(n) {
        ;(this.name = 'DoctrineError'), (this.message = n)
      }
      ;(t.prototype = (function () {
        var n = function () {}
        return (n.prototype = Error.prototype), new n()
      })()),
        (t.prototype.constructor = t),
        (Hr.DoctrineError = t)
      function r(n) {
        throw new t(n)
      }
      ;(Hr.throwError = r), (Hr.assert = Rg())
    })()
  })
  var Pg = F((Gr) => {
    l()
    c()
    p()
    ;(function () {
      'use strict'
      var e, t, r, n, a, o, u, i, s, d, y, A
      ;(s = Ou()),
        (d = Ru()),
        (e = {
          NullableLiteral: 'NullableLiteral',
          AllLiteral: 'AllLiteral',
          NullLiteral: 'NullLiteral',
          UndefinedLiteral: 'UndefinedLiteral',
          VoidLiteral: 'VoidLiteral',
          UnionType: 'UnionType',
          ArrayType: 'ArrayType',
          RecordType: 'RecordType',
          FieldType: 'FieldType',
          FunctionType: 'FunctionType',
          ParameterType: 'ParameterType',
          RestType: 'RestType',
          NonNullableType: 'NonNullableType',
          OptionalType: 'OptionalType',
          NullableType: 'NullableType',
          NameExpression: 'NameExpression',
          TypeApplication: 'TypeApplication',
          StringLiteralType: 'StringLiteralType',
          NumericLiteralType: 'NumericLiteralType',
          BooleanLiteralType: 'BooleanLiteralType',
        }),
        (t = {
          ILLEGAL: 0,
          DOT_LT: 1,
          REST: 2,
          LT: 3,
          GT: 4,
          LPAREN: 5,
          RPAREN: 6,
          LBRACE: 7,
          RBRACE: 8,
          LBRACK: 9,
          RBRACK: 10,
          COMMA: 11,
          COLON: 12,
          STAR: 13,
          PIPE: 14,
          QUESTION: 15,
          BANG: 16,
          EQUAL: 17,
          NAME: 18,
          STRING: 19,
          NUMBER: 20,
          EOF: 21,
        })
      function g(B) {
        return (
          '><(){}[],:*|?!='.indexOf(String.fromCharCode(B)) === -1 &&
          !s.code.isWhiteSpace(B) &&
          !s.code.isLineTerminator(B)
        )
      }
      function h(B, R, k, _) {
        ;(this._previous = B),
          (this._index = R),
          (this._token = k),
          (this._value = _)
      }
      ;(h.prototype.restore = function () {
        ;(o = this._previous),
          (a = this._index),
          (u = this._token),
          (i = this._value)
      }),
        (h.save = function () {
          return new h(o, a, u, i)
        })
      function E(B, R) {
        return A && (B.range = [R[0] + y, R[1] + y]), B
      }
      function b() {
        var B = r.charAt(a)
        return (a += 1), B
      }
      function x(B) {
        var R,
          k,
          _,
          L = 0
        for (k = B === 'u' ? 4 : 2, R = 0; R < k; ++R)
          if (a < n && s.code.isHexDigit(r.charCodeAt(a)))
            (_ = b()),
              (L = L * 16 + '0123456789abcdef'.indexOf(_.toLowerCase()))
          else return ''
        return String.fromCharCode(L)
      }
      function S() {
        var B = '',
          R,
          k,
          _,
          L,
          H
        for (R = r.charAt(a), ++a; a < n; )
          if (((k = b()), k === R)) {
            R = ''
            break
          } else if (k === '\\')
            if (((k = b()), s.code.isLineTerminator(k.charCodeAt(0))))
              k === '\r' && r.charCodeAt(a) === 10 && ++a
            else
              switch (k) {
                case 'n':
                  B += `
`
                  break
                case 'r':
                  B += '\r'
                  break
                case 't':
                  B += '	'
                  break
                case 'u':
                case 'x':
                  ;(H = a), (L = x(k)), L ? (B += L) : ((a = H), (B += k))
                  break
                case 'b':
                  B += '\b'
                  break
                case 'f':
                  B += '\f'
                  break
                case 'v':
                  B += '\v'
                  break
                default:
                  s.code.isOctalDigit(k.charCodeAt(0))
                    ? ((_ = '01234567'.indexOf(k)),
                      a < n &&
                        s.code.isOctalDigit(r.charCodeAt(a)) &&
                        ((_ = _ * 8 + '01234567'.indexOf(b())),
                        '0123'.indexOf(k) >= 0 &&
                          a < n &&
                          s.code.isOctalDigit(r.charCodeAt(a)) &&
                          (_ = _ * 8 + '01234567'.indexOf(b()))),
                      (B += String.fromCharCode(_)))
                    : (B += k)
                  break
              }
          else {
            if (s.code.isLineTerminator(k.charCodeAt(0))) break
            B += k
          }
        return R !== '' && d.throwError('unexpected quote'), (i = B), t.STRING
      }
      function P() {
        var B, R
        if (((B = ''), (R = r.charCodeAt(a)), R !== 46)) {
          if (((B = b()), (R = r.charCodeAt(a)), B === '0')) {
            if (R === 120 || R === 88) {
              for (
                B += b();
                a < n && ((R = r.charCodeAt(a)), !!s.code.isHexDigit(R));

              )
                B += b()
              return (
                B.length <= 2 && d.throwError('unexpected token'),
                a < n &&
                  ((R = r.charCodeAt(a)),
                  s.code.isIdentifierStartES5(R) &&
                    d.throwError('unexpected token')),
                (i = parseInt(B, 16)),
                t.NUMBER
              )
            }
            if (s.code.isOctalDigit(R)) {
              for (
                B += b();
                a < n && ((R = r.charCodeAt(a)), !!s.code.isOctalDigit(R));

              )
                B += b()
              return (
                a < n &&
                  ((R = r.charCodeAt(a)),
                  (s.code.isIdentifierStartES5(R) ||
                    s.code.isDecimalDigit(R)) &&
                    d.throwError('unexpected token')),
                (i = parseInt(B, 8)),
                t.NUMBER
              )
            }
            s.code.isDecimalDigit(R) && d.throwError('unexpected token')
          }
          for (; a < n && ((R = r.charCodeAt(a)), !!s.code.isDecimalDigit(R)); )
            B += b()
        }
        if (R === 46)
          for (
            B += b();
            a < n && ((R = r.charCodeAt(a)), !!s.code.isDecimalDigit(R));

          )
            B += b()
        if (R === 101 || R === 69)
          if (
            ((B += b()),
            (R = r.charCodeAt(a)),
            (R === 43 || R === 45) && (B += b()),
            (R = r.charCodeAt(a)),
            s.code.isDecimalDigit(R))
          )
            for (
              B += b();
              a < n && ((R = r.charCodeAt(a)), !!s.code.isDecimalDigit(R));

            )
              B += b()
          else d.throwError('unexpected token')
        return (
          a < n &&
            ((R = r.charCodeAt(a)),
            s.code.isIdentifierStartES5(R) && d.throwError('unexpected token')),
          (i = parseFloat(B)),
          t.NUMBER
        )
      }
      function N() {
        var B, R
        for (i = b(); a < n && g(r.charCodeAt(a)); ) {
          if (((B = r.charCodeAt(a)), B === 46)) {
            if (a + 1 >= n) return t.ILLEGAL
            if (((R = r.charCodeAt(a + 1)), R === 60)) break
          }
          i += b()
        }
        return t.NAME
      }
      function $() {
        var B
        for (o = a; a < n && s.code.isWhiteSpace(r.charCodeAt(a)); ) b()
        if (a >= n) return (u = t.EOF), u
        switch (((B = r.charCodeAt(a)), B)) {
          case 39:
          case 34:
            return (u = S()), u
          case 58:
            return b(), (u = t.COLON), u
          case 44:
            return b(), (u = t.COMMA), u
          case 40:
            return b(), (u = t.LPAREN), u
          case 41:
            return b(), (u = t.RPAREN), u
          case 91:
            return b(), (u = t.LBRACK), u
          case 93:
            return b(), (u = t.RBRACK), u
          case 123:
            return b(), (u = t.LBRACE), u
          case 125:
            return b(), (u = t.RBRACE), u
          case 46:
            if (a + 1 < n) {
              if (((B = r.charCodeAt(a + 1)), B === 60))
                return b(), b(), (u = t.DOT_LT), u
              if (B === 46 && a + 2 < n && r.charCodeAt(a + 2) === 46)
                return b(), b(), b(), (u = t.REST), u
              if (s.code.isDecimalDigit(B)) return (u = P()), u
            }
            return (u = t.ILLEGAL), u
          case 60:
            return b(), (u = t.LT), u
          case 62:
            return b(), (u = t.GT), u
          case 42:
            return b(), (u = t.STAR), u
          case 124:
            return b(), (u = t.PIPE), u
          case 63:
            return b(), (u = t.QUESTION), u
          case 33:
            return b(), (u = t.BANG), u
          case 61:
            return b(), (u = t.EQUAL), u
          case 45:
            return (u = P()), u
          default:
            return s.code.isDecimalDigit(B)
              ? ((u = P()), u)
              : (d.assert(g(B)), (u = N()), u)
        }
      }
      function w(B, R) {
        d.assert(u === B, R || 'consumed token not matched'), $()
      }
      function j(B, R) {
        u !== B && d.throwError(R || 'unexpected token'), $()
      }
      function I() {
        var B,
          R = a - 1
        if (
          (w(t.LPAREN, 'UnionType should start with ('),
          (B = []),
          u !== t.RPAREN)
        )
          for (; B.push(V()), u !== t.RPAREN; ) j(t.PIPE)
        return (
          w(t.RPAREN, 'UnionType should end with )'),
          E({type: e.UnionType, elements: B}, [R, o])
        )
      }
      function z() {
        var B,
          R = a - 1,
          k
        for (
          w(t.LBRACK, 'ArrayType should start with ['), B = [];
          u !== t.RBRACK;

        ) {
          if (u === t.REST) {
            ;(k = a - 3),
              w(t.REST),
              B.push(E({type: e.RestType, expression: V()}, [k, o]))
            break
          } else B.push(V())
          u !== t.RBRACK && j(t.COMMA)
        }
        return j(t.RBRACK), E({type: e.ArrayType, elements: B}, [R, o])
      }
      function K() {
        var B = i
        if (u === t.NAME || u === t.STRING) return $(), B
        if (u === t.NUMBER) return w(t.NUMBER), String(B)
        d.throwError('unexpected token')
      }
      function U() {
        var B,
          R = o
        return (
          (B = K()),
          u === t.COLON
            ? (w(t.COLON), E({type: e.FieldType, key: B, value: V()}, [R, o]))
            : E({type: e.FieldType, key: B, value: null}, [R, o])
        )
      }
      function ue() {
        var B,
          R = a - 1,
          k
        if (
          (w(t.LBRACE, 'RecordType should start with {'),
          (B = []),
          u === t.COMMA)
        )
          w(t.COMMA)
        else for (; u !== t.RBRACE; ) B.push(U()), u !== t.RBRACE && j(t.COMMA)
        return (k = a), j(t.RBRACE), E({type: e.RecordType, fields: B}, [R, k])
      }
      function te() {
        var B = i,
          R = a - B.length
        return (
          j(t.NAME),
          u === t.COLON &&
            (B === 'module' || B === 'external' || B === 'event') &&
            (w(t.COLON), (B += ':' + i), j(t.NAME)),
          E({type: e.NameExpression, name: B}, [R, o])
        )
      }
      function X() {
        var B = []
        for (B.push(Q()); u === t.COMMA; ) w(t.COMMA), B.push(Q())
        return B
      }
      function O() {
        var B,
          R,
          k = a - i.length
        return (
          (B = te()),
          u === t.DOT_LT || u === t.LT
            ? ($(),
              (R = X()),
              j(t.GT),
              E({type: e.TypeApplication, expression: B, applications: R}, [
                k,
                o,
              ]))
            : B
        )
      }
      function T() {
        return (
          w(t.COLON, 'ResultType should start with :'),
          u === t.NAME && i === 'void'
            ? (w(t.NAME), {type: e.VoidLiteral})
            : V()
        )
      }
      function M() {
        for (var B = [], R = !1, k, _ = !1, L, H = a - 3, de; u !== t.RPAREN; )
          u === t.REST && (w(t.REST), (_ = !0)),
            (L = o),
            (k = V()),
            k.type === e.NameExpression &&
              u === t.COLON &&
              ((de = o - k.name.length),
              w(t.COLON),
              (k = E({type: e.ParameterType, name: k.name, expression: V()}, [
                de,
                o,
              ]))),
            u === t.EQUAL
              ? (w(t.EQUAL),
                (k = E({type: e.OptionalType, expression: k}, [L, o])),
                (R = !0))
              : R && d.throwError('unexpected token'),
            _ && (k = E({type: e.RestType, expression: k}, [H, o])),
            B.push(k),
            u !== t.RPAREN && j(t.COMMA)
        return B
      }
      function G() {
        var B,
          R,
          k,
          _,
          L,
          H = a - i.length
        return (
          d.assert(
            u === t.NAME && i === 'function',
            "FunctionType should start with 'function'"
          ),
          w(t.NAME),
          j(t.LPAREN),
          (B = !1),
          (k = []),
          (R = null),
          u !== t.RPAREN &&
            (u === t.NAME && (i === 'this' || i === 'new')
              ? ((B = i === 'new'),
                w(t.NAME),
                j(t.COLON),
                (R = O()),
                u === t.COMMA && (w(t.COMMA), (k = M())))
              : (k = M())),
          j(t.RPAREN),
          (_ = null),
          u === t.COLON && (_ = T()),
          (L = E({type: e.FunctionType, params: k, result: _}, [H, o])),
          R && ((L.this = R), B && (L.new = !0)),
          L
        )
      }
      function Y() {
        var B, R
        switch (u) {
          case t.STAR:
            return w(t.STAR), E({type: e.AllLiteral}, [o - 1, o])
          case t.LPAREN:
            return I()
          case t.LBRACK:
            return z()
          case t.LBRACE:
            return ue()
          case t.NAME:
            if (((R = a - i.length), i === 'null'))
              return w(t.NAME), E({type: e.NullLiteral}, [R, o])
            if (i === 'undefined')
              return w(t.NAME), E({type: e.UndefinedLiteral}, [R, o])
            if (i === 'true' || i === 'false')
              return (
                w(t.NAME),
                E({type: e.BooleanLiteralType, value: i === 'true'}, [R, o])
              )
            if (((B = h.save()), i === 'function'))
              try {
                return G()
              } catch {
                B.restore()
              }
            return O()
          case t.STRING:
            return (
              $(),
              E({type: e.StringLiteralType, value: i}, [o - i.length - 2, o])
            )
          case t.NUMBER:
            return (
              $(),
              E({type: e.NumericLiteralType, value: i}, [
                o - String(i).length,
                o,
              ])
            )
          default:
            d.throwError('unexpected token')
        }
      }
      function V() {
        var B, R
        return u === t.QUESTION
          ? ((R = a - 1),
            w(t.QUESTION),
            u === t.COMMA ||
            u === t.EQUAL ||
            u === t.RBRACE ||
            u === t.RPAREN ||
            u === t.PIPE ||
            u === t.EOF ||
            u === t.RBRACK ||
            u === t.GT
              ? E({type: e.NullableLiteral}, [R, o])
              : E({type: e.NullableType, expression: Y(), prefix: !0}, [R, o]))
          : u === t.BANG
          ? ((R = a - 1),
            w(t.BANG),
            E({type: e.NonNullableType, expression: Y(), prefix: !0}, [R, o]))
          : ((R = o),
            (B = Y()),
            u === t.BANG
              ? (w(t.BANG),
                E({type: e.NonNullableType, expression: B, prefix: !1}, [R, o]))
              : u === t.QUESTION
              ? (w(t.QUESTION),
                E({type: e.NullableType, expression: B, prefix: !1}, [R, o]))
              : u === t.LBRACK
              ? (w(t.LBRACK),
                j(
                  t.RBRACK,
                  'expected an array-style type declaration (' + i + '[])'
                ),
                E(
                  {
                    type: e.TypeApplication,
                    expression: E({type: e.NameExpression, name: 'Array'}, [
                      R,
                      o,
                    ]),
                    applications: [B],
                  },
                  [R, o]
                ))
              : B)
      }
      function Q() {
        var B, R
        if (((B = V()), u !== t.PIPE)) return B
        for (R = [B], w(t.PIPE); R.push(V()), u === t.PIPE; ) w(t.PIPE)
        return E({type: e.UnionType, elements: R}, [0, a])
      }
      function se() {
        var B
        return u === t.REST
          ? (w(t.REST), E({type: e.RestType, expression: Q()}, [0, a]))
          : ((B = Q()),
            u === t.EQUAL
              ? (w(t.EQUAL), E({type: e.OptionalType, expression: B}, [0, a]))
              : B)
      }
      function Oe(B, R) {
        var k
        return (
          (r = B),
          (n = r.length),
          (a = 0),
          (o = 0),
          (A = R && R.range),
          (y = (R && R.startIndex) || 0),
          $(),
          (k = Q()),
          R && R.midstream
            ? {expression: k, index: o}
            : (u !== t.EOF && d.throwError('not reach to EOF'), k)
        )
      }
      function Re(B, R) {
        var k
        return (
          (r = B),
          (n = r.length),
          (a = 0),
          (o = 0),
          (A = R && R.range),
          (y = (R && R.startIndex) || 0),
          $(),
          (k = se()),
          R && R.midstream
            ? {expression: k, index: o}
            : (u !== t.EOF && d.throwError('not reach to EOF'), k)
        )
      }
      function J(B, R, k) {
        var _, L, H
        switch (B.type) {
          case e.NullableLiteral:
            _ = '?'
            break
          case e.AllLiteral:
            _ = '*'
            break
          case e.NullLiteral:
            _ = 'null'
            break
          case e.UndefinedLiteral:
            _ = 'undefined'
            break
          case e.VoidLiteral:
            _ = 'void'
            break
          case e.UnionType:
            for (
              k ? (_ = '') : (_ = '('), L = 0, H = B.elements.length;
              L < H;
              ++L
            )
              (_ += J(B.elements[L], R)), L + 1 !== H && (_ += R ? '|' : ' | ')
            k || (_ += ')')
            break
          case e.ArrayType:
            for (_ = '[', L = 0, H = B.elements.length; L < H; ++L)
              (_ += J(B.elements[L], R)), L + 1 !== H && (_ += R ? ',' : ', ')
            _ += ']'
            break
          case e.RecordType:
            for (_ = '{', L = 0, H = B.fields.length; L < H; ++L)
              (_ += J(B.fields[L], R)), L + 1 !== H && (_ += R ? ',' : ', ')
            _ += '}'
            break
          case e.FieldType:
            B.value
              ? (_ = B.key + (R ? ':' : ': ') + J(B.value, R))
              : (_ = B.key)
            break
          case e.FunctionType:
            for (
              _ = R ? 'function(' : 'function (',
                B.this &&
                  (B.new
                    ? (_ += R ? 'new:' : 'new: ')
                    : (_ += R ? 'this:' : 'this: '),
                  (_ += J(B.this, R)),
                  B.params.length !== 0 && (_ += R ? ',' : ', ')),
                L = 0,
                H = B.params.length;
              L < H;
              ++L
            )
              (_ += J(B.params[L], R)), L + 1 !== H && (_ += R ? ',' : ', ')
            ;(_ += ')'), B.result && (_ += (R ? ':' : ': ') + J(B.result, R))
            break
          case e.ParameterType:
            _ = B.name + (R ? ':' : ': ') + J(B.expression, R)
            break
          case e.RestType:
            ;(_ = '...'), B.expression && (_ += J(B.expression, R))
            break
          case e.NonNullableType:
            B.prefix
              ? (_ = '!' + J(B.expression, R))
              : (_ = J(B.expression, R) + '!')
            break
          case e.OptionalType:
            _ = J(B.expression, R) + '='
            break
          case e.NullableType:
            B.prefix
              ? (_ = '?' + J(B.expression, R))
              : (_ = J(B.expression, R) + '?')
            break
          case e.NameExpression:
            _ = B.name
            break
          case e.TypeApplication:
            for (
              _ = J(B.expression, R) + '.<', L = 0, H = B.applications.length;
              L < H;
              ++L
            )
              (_ += J(B.applications[L], R)),
                L + 1 !== H && (_ += R ? ',' : ', ')
            _ += '>'
            break
          case e.StringLiteralType:
            _ = '"' + B.value + '"'
            break
          case e.NumericLiteralType:
            _ = String(B.value)
            break
          case e.BooleanLiteralType:
            _ = String(B.value)
            break
          default:
            d.throwError('Unknown type ' + B.type)
        }
        return _
      }
      function qe(B, R) {
        return R == null && (R = {}), J(B, R.compact, R.topLevel)
      }
      ;(Gr.parseType = Oe),
        (Gr.parseParamType = Re),
        (Gr.stringify = qe),
        (Gr.Syntax = e)
    })()
  })
  var Ig = F((Ve) => {
    l()
    c()
    p()
    ;(function () {
      'use strict'
      var e, t, r, n, a
      ;(n = Ou()), (e = Pg()), (t = Ru())
      function o(w, j, I) {
        return w.slice(j, I)
      }
      a = (function () {
        var w = Object.prototype.hasOwnProperty
        return function (I, z) {
          return w.call(I, z)
        }
      })()
      function u(w) {
        var j = {},
          I
        for (I in w) w.hasOwnProperty(I) && (j[I] = w[I])
        return j
      }
      function i(w) {
        return (
          (w >= 97 && w <= 122) || (w >= 65 && w <= 90) || (w >= 48 && w <= 57)
        )
      }
      function s(w) {
        return w === 'param' || w === 'argument' || w === 'arg'
      }
      function d(w) {
        return w === 'return' || w === 'returns'
      }
      function y(w) {
        return w === 'property' || w === 'prop'
      }
      function A(w) {
        return (
          s(w) ||
          y(w) ||
          w === 'alias' ||
          w === 'this' ||
          w === 'mixes' ||
          w === 'requires'
        )
      }
      function g(w) {
        return A(w) || w === 'const' || w === 'constant'
      }
      function h(w) {
        return y(w) || s(w)
      }
      function E(w) {
        return y(w) || s(w)
      }
      function b(w) {
        return (
          s(w) ||
          d(w) ||
          w === 'define' ||
          w === 'enum' ||
          w === 'implements' ||
          w === 'this' ||
          w === 'type' ||
          w === 'typedef' ||
          y(w)
        )
      }
      function x(w) {
        return (
          b(w) ||
          w === 'throws' ||
          w === 'const' ||
          w === 'constant' ||
          w === 'namespace' ||
          w === 'member' ||
          w === 'var' ||
          w === 'module' ||
          w === 'constructor' ||
          w === 'class' ||
          w === 'extends' ||
          w === 'augments' ||
          w === 'public' ||
          w === 'private' ||
          w === 'protected'
        )
      }
      var S =
          '[ \\f\\t\\v\\u00a0\\u1680\\u180e\\u2000-\\u200a\\u202f\\u205f\\u3000\\ufeff]',
        P =
          '(' +
          S +
          '*(?:\\*' +
          S +
          `?)?)(.+|[\r
\u2028\u2029])`
      function N(w) {
        return w
          .replace(/^\/\*\*?/, '')
          .replace(/\*\/$/, '')
          .replace(new RegExp(P, 'g'), '$2')
          .replace(/\s*$/, '')
      }
      function $(w, j) {
        for (
          var I = w.replace(/^\/\*\*?/, ''), z = 0, K = new RegExp(P, 'g'), U;
          (U = K.exec(I));

        )
          if (((z += U[1].length), U.index + U[0].length > j + z))
            return j + z + w.length - I.length
        return w.replace(/\*\/$/, '').replace(/\s*$/, '').length
      }
      ;(function (w) {
        var j, I, z, K, U, ue, te, X, O
        function T() {
          var k = U.charCodeAt(I)
          return (
            (I += 1),
            n.code.isLineTerminator(k) &&
              !(k === 13 && U.charCodeAt(I) === 10) &&
              (z += 1),
            String.fromCharCode(k)
          )
        }
        function M() {
          var k = ''
          for (T(); I < K && i(U.charCodeAt(I)); ) k += T()
          return k
        }
        function G() {
          var k,
            _,
            L = I
          for (_ = !1; L < K; ) {
            if (
              ((k = U.charCodeAt(L)),
              n.code.isLineTerminator(k) &&
                !(k === 13 && U.charCodeAt(L + 1) === 10))
            )
              _ = !0
            else if (_) {
              if (k === 64) break
              n.code.isWhiteSpace(k) || (_ = !1)
            }
            L += 1
          }
          return L
        }
        function Y(k, _, L) {
          for (var H, de, ae, ie, Ae = !1; I < _; )
            if (((H = U.charCodeAt(I)), n.code.isWhiteSpace(H))) T()
            else if (H === 123) {
              T()
              break
            } else {
              Ae = !0
              break
            }
          if (Ae) return null
          for (de = 1, ae = ''; I < _; )
            if (((H = U.charCodeAt(I)), n.code.isLineTerminator(H))) T()
            else {
              if (H === 125) {
                if (((de -= 1), de === 0)) {
                  T()
                  break
                }
              } else H === 123 && (de += 1)
              ae === '' && (ie = I), (ae += T())
            }
          return de !== 0
            ? t.throwError('Braces are not balanced')
            : E(k)
            ? e.parseParamType(ae, {startIndex: Re(ie), range: L})
            : e.parseType(ae, {startIndex: Re(ie), range: L})
        }
        function V(k) {
          var _
          if (
            !n.code.isIdentifierStartES5(U.charCodeAt(I)) &&
            !U[I].match(/[0-9]/)
          )
            return null
          for (_ = T(); I < k && n.code.isIdentifierPartES5(U.charCodeAt(I)); )
            _ += T()
          return _
        }
        function Q(k) {
          for (
            ;
            I < k &&
            (n.code.isWhiteSpace(U.charCodeAt(I)) ||
              n.code.isLineTerminator(U.charCodeAt(I)));

          )
            T()
        }
        function se(k, _, L) {
          var H = '',
            de,
            ae
          if ((Q(k), I >= k)) return null
          if (U.charCodeAt(I) === 91)
            if (_) (de = !0), (H = T())
            else return null
          if (((H += V(k)), L))
            for (
              U.charCodeAt(I) === 58 &&
                (H === 'module' || H === 'external' || H === 'event') &&
                ((H += T()), (H += V(k))),
                U.charCodeAt(I) === 91 &&
                  U.charCodeAt(I + 1) === 93 &&
                  ((H += T()), (H += T()));
              U.charCodeAt(I) === 46 ||
              U.charCodeAt(I) === 47 ||
              U.charCodeAt(I) === 35 ||
              U.charCodeAt(I) === 45 ||
              U.charCodeAt(I) === 126;

            )
              (H += T()), (H += V(k))
          if (de) {
            if ((Q(k), U.charCodeAt(I) === 61)) {
              ;(H += T()), Q(k)
              for (var ie, Ae = 1; I < k; ) {
                if (
                  ((ie = U.charCodeAt(I)),
                  n.code.isWhiteSpace(ie) &&
                    (ae || (Q(k), (ie = U.charCodeAt(I)))),
                  ie === 39 && (ae ? ae === "'" && (ae = '') : (ae = "'")),
                  ie === 34 && (ae ? ae === '"' && (ae = '') : (ae = '"')),
                  ie === 91)
                )
                  Ae++
                else if (ie === 93 && --Ae === 0) break
                H += T()
              }
            }
            if ((Q(k), I >= k || U.charCodeAt(I) !== 93)) return null
            H += T()
          }
          return H
        }
        function Oe() {
          for (; I < K && U.charCodeAt(I) !== 64; ) T()
          return I >= K ? !1 : (t.assert(U.charCodeAt(I) === 64), !0)
        }
        function Re(k) {
          return U === ue ? k : $(ue, k)
        }
        function J(k, _) {
          ;(this._options = k),
            (this._title = _.toLowerCase()),
            (this._tag = {title: _, description: null}),
            this._options.lineNumbers && (this._tag.lineNumber = z),
            (this._first = I - _.length - 1),
            (this._last = 0),
            (this._extra = {})
        }
        ;(J.prototype.addError = function (_) {
          var L = Array.prototype.slice.call(arguments, 1),
            H = _.replace(/%(\d)/g, function (de, ae) {
              return (
                t.assert(ae < L.length, 'Message reference must be in range'),
                L[ae]
              )
            })
          return (
            this._tag.errors || (this._tag.errors = []),
            O && t.throwError(H),
            this._tag.errors.push(H),
            te
          )
        }),
          (J.prototype.parseType = function () {
            if (b(this._title))
              try {
                if (
                  ((this._tag.type = Y(
                    this._title,
                    this._last,
                    this._options.range
                  )),
                  !this._tag.type &&
                    !s(this._title) &&
                    !d(this._title) &&
                    !this.addError('Missing or invalid tag type'))
                )
                  return !1
              } catch (k) {
                if (((this._tag.type = null), !this.addError(k.message)))
                  return !1
              }
            else if (x(this._title))
              try {
                this._tag.type = Y(this._title, this._last, this._options.range)
              } catch {}
            return !0
          }),
          (J.prototype._parseNamePath = function (k) {
            var _
            return (
              (_ = se(this._last, X && E(this._title), !0)),
              !_ && !k && !this.addError('Missing or invalid tag name')
                ? !1
                : ((this._tag.name = _), !0)
            )
          }),
          (J.prototype.parseNamePath = function () {
            return this._parseNamePath(!1)
          }),
          (J.prototype.parseNamePathOptional = function () {
            return this._parseNamePath(!0)
          }),
          (J.prototype.parseName = function () {
            var k, _
            if (g(this._title))
              if (
                ((this._tag.name = se(
                  this._last,
                  X && E(this._title),
                  h(this._title)
                )),
                this._tag.name)
              )
                (_ = this._tag.name),
                  _.charAt(0) === '[' &&
                    _.charAt(_.length - 1) === ']' &&
                    ((k = _.substring(1, _.length - 1).split('=')),
                    k.length > 1 && (this._tag.default = k.slice(1).join('=')),
                    (this._tag.name = k[0]),
                    this._tag.type &&
                      this._tag.type.type !== 'OptionalType' &&
                      (this._tag.type = {
                        type: 'OptionalType',
                        expression: this._tag.type,
                      }))
              else {
                if (!A(this._title)) return !0
                if (s(this._title) && this._tag.type && this._tag.type.name)
                  (this._extra.name = this._tag.type),
                    (this._tag.name = this._tag.type.name),
                    (this._tag.type = null)
                else if (!this.addError('Missing or invalid tag name'))
                  return !1
              }
            return !0
          }),
          (J.prototype.parseDescription = function () {
            var _ = o(U, I, this._last).trim()
            return (
              _ &&
                (/^-\s+/.test(_) && (_ = _.substring(2)),
                (this._tag.description = _)),
              !0
            )
          }),
          (J.prototype.parseCaption = function () {
            var _ = o(U, I, this._last).trim(),
              L = '<caption>',
              H = '</caption>',
              de = _.indexOf(L),
              ae = _.indexOf(H)
            return (
              de >= 0 && ae >= 0
                ? ((this._tag.caption = _.substring(de + L.length, ae).trim()),
                  (this._tag.description = _.substring(ae + H.length).trim()))
                : (this._tag.description = _),
              !0
            )
          }),
          (J.prototype.parseKind = function () {
            var _, L
            return (
              (L = {
                class: !0,
                constant: !0,
                event: !0,
                external: !0,
                file: !0,
                function: !0,
                member: !0,
                mixin: !0,
                module: !0,
                namespace: !0,
                typedef: !0,
              }),
              (_ = o(U, I, this._last).trim()),
              (this._tag.kind = _),
              !(!a(L, _) && !this.addError("Invalid kind name '%0'", _))
            )
          }),
          (J.prototype.parseAccess = function () {
            var _
            return (
              (_ = o(U, I, this._last).trim()),
              (this._tag.access = _),
              !(
                _ !== 'private' &&
                _ !== 'protected' &&
                _ !== 'public' &&
                !this.addError("Invalid access name '%0'", _)
              )
            )
          }),
          (J.prototype.parseThis = function () {
            var _ = o(U, I, this._last).trim()
            if (_ && _.charAt(0) === '{') {
              var L = this.parseType()
              return (L && this._tag.type.type === 'NameExpression') ||
                this._tag.type.type === 'UnionType'
                ? ((this._tag.name = this._tag.type.name), !0)
                : this.addError('Invalid name for this')
            } else return this.parseNamePath()
          }),
          (J.prototype.parseVariation = function () {
            var _, L
            return (
              (L = o(U, I, this._last).trim()),
              (_ = parseFloat(L, 10)),
              (this._tag.variation = _),
              !(isNaN(_) && !this.addError("Invalid variation '%0'", L))
            )
          }),
          (J.prototype.ensureEnd = function () {
            var k = o(U, I, this._last).trim()
            return !(k && !this.addError("Unknown content '%0'", k))
          }),
          (J.prototype.epilogue = function () {
            var _
            return (
              (_ = this._tag.description),
              !(
                E(this._title) &&
                !this._tag.type &&
                _ &&
                _.charAt(0) === '[' &&
                ((this._tag.type = this._extra.name),
                this._tag.name || (this._tag.name = void 0),
                !X && !this.addError('Missing or invalid tag name'))
              )
            )
          }),
          (j = {
            access: ['parseAccess'],
            alias: ['parseNamePath', 'ensureEnd'],
            augments: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            constructor: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            class: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            extends: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            example: ['parseCaption'],
            deprecated: ['parseDescription'],
            global: ['ensureEnd'],
            inner: ['ensureEnd'],
            instance: ['ensureEnd'],
            kind: ['parseKind'],
            mixes: ['parseNamePath', 'ensureEnd'],
            mixin: ['parseNamePathOptional', 'ensureEnd'],
            member: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            method: ['parseNamePathOptional', 'ensureEnd'],
            module: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            func: ['parseNamePathOptional', 'ensureEnd'],
            function: ['parseNamePathOptional', 'ensureEnd'],
            var: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            name: ['parseNamePath', 'ensureEnd'],
            namespace: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
            private: ['parseType', 'parseDescription'],
            protected: ['parseType', 'parseDescription'],
            public: ['parseType', 'parseDescription'],
            readonly: ['ensureEnd'],
            requires: ['parseNamePath', 'ensureEnd'],
            since: ['parseDescription'],
            static: ['ensureEnd'],
            summary: ['parseDescription'],
            this: ['parseThis', 'ensureEnd'],
            todo: ['parseDescription'],
            typedef: ['parseType', 'parseNamePathOptional'],
            variation: ['parseVariation'],
            version: ['parseDescription'],
          }),
          (J.prototype.parse = function () {
            var _, L, H, de
            if (!this._title && !this.addError('Missing or invalid title'))
              return null
            for (
              this._last = G(this._title),
                this._options.range &&
                  (this._tag.range = [
                    this._first,
                    U.slice(0, this._last).replace(/\s*$/, '').length,
                  ].map(Re)),
                a(j, this._title)
                  ? (H = j[this._title])
                  : (H = [
                      'parseType',
                      'parseName',
                      'parseDescription',
                      'epilogue',
                    ]),
                _ = 0,
                L = H.length;
              _ < L;
              ++_
            )
              if (((de = H[_]), !this[de]())) return null
            return this._tag
          })
        function qe(k) {
          var _, L, H
          if (!Oe()) return null
          for (_ = M(), L = new J(k, _), H = L.parse(); I < L._last; ) T()
          return H
        }
        function B(k) {
          var _ = '',
            L,
            H
          for (H = !0; I < K && ((L = U.charCodeAt(I)), !(H && L === 64)); )
            n.code.isLineTerminator(L)
              ? (H = !0)
              : H && !n.code.isWhiteSpace(L) && (H = !1),
              (_ += T())
          return k ? _ : _.trim()
        }
        function R(k, _) {
          var L = [],
            H,
            de,
            ae,
            ie,
            Ae
          if (
            (_ === void 0 && (_ = {}),
            typeof _.unwrap == 'boolean' && _.unwrap ? (U = N(k)) : (U = k),
            (ue = k),
            _.tags)
          )
            if (Array.isArray(_.tags))
              for (ae = {}, ie = 0, Ae = _.tags.length; ie < Ae; ie++)
                typeof _.tags[ie] == 'string'
                  ? (ae[_.tags[ie]] = !0)
                  : t.throwError('Invalid "tags" parameter: ' + _.tags)
            else t.throwError('Invalid "tags" parameter: ' + _.tags)
          for (
            K = U.length,
              I = 0,
              z = 0,
              te = _.recoverable,
              X = _.sloppy,
              O = _.strict,
              de = B(_.preserveWhitespace);
            (H = qe(_)), !!H;

          )
            (!ae || ae.hasOwnProperty(H.title)) && L.push(H)
          return {description: de, tags: L}
        }
        w.parse = R
      })((r = {})),
        (Ve.version = t.VERSION),
        (Ve.parse = r.parse),
        (Ve.parseType = e.parseType),
        (Ve.parseParamType = e.parseParamType),
        (Ve.unwrapComment = N),
        (Ve.Syntax = u(e.Syntax)),
        (Ve.Error = t.DoctrineError),
        (Ve.type = {
          Syntax: Ve.Syntax,
          parseType: e.parseType,
          parseParamType: e.parseParamType,
          stringify: e.stringify,
        })
    })()
  })
  function xt() {
    return (xt =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t]
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
      }).apply(this, arguments)
  }
  function ju(e, t) {
    if (e == null) return {}
    var r,
      n,
      a = {},
      o = Object.keys(e)
    for (n = 0; n < o.length; n++) t.indexOf((r = o[n])) >= 0 || (a[r] = e[r])
    return a
  }
  function Pu(e) {
    var t = xe(e),
      r = xe(function (n) {
        t.current && t.current(n)
      })
    return (t.current = e), r.current
  }
  function Wg(e, t, r) {
    var n = Pu(r),
      a = ne(function () {
        return e.toHsva(t)
      }),
      o = a[0],
      u = a[1],
      i = xe({color: t, hsva: o})
    me(
      function () {
        if (!e.equal(t, i.current.color)) {
          var d = e.toHsva(t)
          ;(i.current = {hsva: d, color: t}), u(d)
        }
      },
      [t, e]
    ),
      me(
        function () {
          var d
          Hg(o, i.current.hsva) ||
            e.equal((d = e.fromHsva(o)), i.current.color) ||
            ((i.current = {hsva: o, color: d}), n(d))
        },
        [o, e, n]
      )
    var s = ge(function (d) {
      u(function (y) {
        return Object.assign({}, y, d)
      })
    }, [])
    return [o, s]
  }
  var ar,
    Vr,
    Iu,
    Ng,
    jg,
    Mu,
    Kr,
    qu,
    De,
    PO,
    IO,
    ku,
    kO,
    NO,
    jO,
    MO,
    qg,
    Nu,
    na,
    Lg,
    qO,
    ra,
    LO,
    $g,
    Ug,
    zg,
    Hg,
    Gg,
    $O,
    UO,
    zO,
    HO,
    Mg,
    Vg,
    GO,
    WO,
    Kg,
    VO,
    Yg,
    KO,
    Xg,
    YO,
    Jg,
    Qg = Ye(() => {
      l()
      c()
      p()
      St()
      ;(ar = function (e, t, r) {
        return (
          t === void 0 && (t = 0),
          r === void 0 && (r = 1),
          e > r ? r : e < t ? t : e
        )
      }),
        (Vr = function (e) {
          return 'touches' in e
        }),
        (Iu = function (e) {
          return (e && e.ownerDocument.defaultView) || self
        }),
        (Ng = function (e, t, r) {
          var n = e.getBoundingClientRect(),
            a = Vr(t)
              ? (function (o, u) {
                  for (var i = 0; i < o.length; i++)
                    if (o[i].identifier === u) return o[i]
                  return o[0]
                })(t.touches, r)
              : t
          return {
            left: ar((a.pageX - (n.left + Iu(e).pageXOffset)) / n.width),
            top: ar((a.pageY - (n.top + Iu(e).pageYOffset)) / n.height),
          }
        }),
        (jg = function (e) {
          !Vr(e) && e.preventDefault()
        }),
        (Mu = m.memo(function (e) {
          var t = e.onMove,
            r = e.onKey,
            n = ju(e, ['onMove', 'onKey']),
            a = xe(null),
            o = Pu(t),
            u = Pu(r),
            i = xe(null),
            s = xe(!1),
            d = tt(
              function () {
                var h = function (x) {
                    jg(x),
                      (Vr(x) ? x.touches.length > 0 : x.buttons > 0) &&
                      a.current
                        ? o(Ng(a.current, x, i.current))
                        : b(!1)
                  },
                  E = function () {
                    return b(!1)
                  }
                function b(x) {
                  var S = s.current,
                    P = Iu(a.current),
                    N = x ? P.addEventListener : P.removeEventListener
                  N(S ? 'touchmove' : 'mousemove', h),
                    N(S ? 'touchend' : 'mouseup', E)
                }
                return [
                  function (x) {
                    var S = x.nativeEvent,
                      P = a.current
                    if (
                      P &&
                      (jg(S),
                      !(function ($, w) {
                        return w && !Vr($)
                      })(S, s.current) && P)
                    ) {
                      if (Vr(S)) {
                        s.current = !0
                        var N = S.changedTouches || []
                        N.length && (i.current = N[0].identifier)
                      }
                      P.focus(), o(Ng(P, S, i.current)), b(!0)
                    }
                  },
                  function (x) {
                    var S = x.which || x.keyCode
                    S < 37 ||
                      S > 40 ||
                      (x.preventDefault(),
                      u({
                        left: S === 39 ? 0.05 : S === 37 ? -0.05 : 0,
                        top: S === 40 ? 0.05 : S === 38 ? -0.05 : 0,
                      }))
                  },
                  b,
                ]
              },
              [u, o]
            ),
            y = d[0],
            A = d[1],
            g = d[2]
          return (
            me(
              function () {
                return g
              },
              [g]
            ),
            m.createElement(
              'div',
              xt({}, n, {
                onTouchStart: y,
                onMouseDown: y,
                className: 'react-colorful__interactive',
                ref: a,
                onKeyDown: A,
                tabIndex: 0,
                role: 'slider',
              })
            )
          )
        })),
        (Kr = function (e) {
          return e.filter(Boolean).join(' ')
        }),
        (qu = function (e) {
          var t = e.color,
            r = e.left,
            n = e.top,
            a = n === void 0 ? 0.5 : n,
            o = Kr(['react-colorful__pointer', e.className])
          return m.createElement(
            'div',
            {className: o, style: {top: 100 * a + '%', left: 100 * r + '%'}},
            m.createElement('div', {
              className: 'react-colorful__pointer-fill',
              style: {backgroundColor: t},
            })
          )
        }),
        (De = function (e, t, r) {
          return (
            t === void 0 && (t = 0),
            r === void 0 && (r = Math.pow(10, t)),
            Math.round(r * e) / r
          )
        }),
        (PO = {grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI)}),
        (IO = function (e) {
          return $g(ku(e))
        }),
        (ku = function (e) {
          return (
            e[0] === '#' && (e = e.substring(1)),
            e.length < 6
              ? {
                  r: parseInt(e[0] + e[0], 16),
                  g: parseInt(e[1] + e[1], 16),
                  b: parseInt(e[2] + e[2], 16),
                  a:
                    e.length === 4 ? De(parseInt(e[3] + e[3], 16) / 255, 2) : 1,
                }
              : {
                  r: parseInt(e.substring(0, 2), 16),
                  g: parseInt(e.substring(2, 4), 16),
                  b: parseInt(e.substring(4, 6), 16),
                  a:
                    e.length === 8
                      ? De(parseInt(e.substring(6, 8), 16) / 255, 2)
                      : 1,
                }
          )
        }),
        (kO = function (e, t) {
          return t === void 0 && (t = 'deg'), Number(e) * (PO[t] || 1)
        }),
        (NO = function (e) {
          var t =
            /hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(
              e
            )
          return t
            ? jO({
                h: kO(t[1], t[2]),
                s: Number(t[3]),
                l: Number(t[4]),
                a: t[5] === void 0 ? 1 : Number(t[5]) / (t[6] ? 100 : 1),
              })
            : {h: 0, s: 0, v: 0, a: 1}
        }),
        (jO = function (e) {
          var t = e.s,
            r = e.l
          return {
            h: e.h,
            s:
              (t *= (r < 50 ? r : 100 - r) / 100) > 0
                ? ((2 * t) / (r + t)) * 100
                : 0,
            v: r + t,
            a: e.a,
          }
        }),
        (MO = function (e) {
          return LO(Lg(e))
        }),
        (qg = function (e) {
          var t = e.s,
            r = e.v,
            n = e.a,
            a = ((200 - t) * r) / 100
          return {
            h: De(e.h),
            s: De(
              a > 0 && a < 200
                ? ((t * r) / 100 / (a <= 100 ? a : 200 - a)) * 100
                : 0
            ),
            l: De(a / 2),
            a: De(n, 2),
          }
        }),
        (Nu = function (e) {
          var t = qg(e)
          return 'hsl(' + t.h + ', ' + t.s + '%, ' + t.l + '%)'
        }),
        (na = function (e) {
          var t = qg(e)
          return 'hsla(' + t.h + ', ' + t.s + '%, ' + t.l + '%, ' + t.a + ')'
        }),
        (Lg = function (e) {
          var t = e.h,
            r = e.s,
            n = e.v,
            a = e.a
          ;(t = (t / 360) * 6), (r /= 100), (n /= 100)
          var o = Math.floor(t),
            u = n * (1 - r),
            i = n * (1 - (t - o) * r),
            s = n * (1 - (1 - t + o) * r),
            d = o % 6
          return {
            r: De(255 * [n, i, u, u, s, n][d]),
            g: De(255 * [s, n, n, i, u, u][d]),
            b: De(255 * [u, u, s, n, n, i][d]),
            a: De(a, 2),
          }
        }),
        (qO = function (e) {
          var t =
            /rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(
              e
            )
          return t
            ? $g({
                r: Number(t[1]) / (t[2] ? 100 / 255 : 1),
                g: Number(t[3]) / (t[4] ? 100 / 255 : 1),
                b: Number(t[5]) / (t[6] ? 100 / 255 : 1),
                a: t[7] === void 0 ? 1 : Number(t[7]) / (t[8] ? 100 : 1),
              })
            : {h: 0, s: 0, v: 0, a: 1}
        }),
        (ra = function (e) {
          var t = e.toString(16)
          return t.length < 2 ? '0' + t : t
        }),
        (LO = function (e) {
          var t = e.r,
            r = e.g,
            n = e.b,
            a = e.a,
            o = a < 1 ? ra(De(255 * a)) : ''
          return '#' + ra(t) + ra(r) + ra(n) + o
        }),
        ($g = function (e) {
          var t = e.r,
            r = e.g,
            n = e.b,
            a = e.a,
            o = Math.max(t, r, n),
            u = o - Math.min(t, r, n),
            i = u
              ? o === t
                ? (r - n) / u
                : o === r
                ? 2 + (n - t) / u
                : 4 + (t - r) / u
              : 0
          return {
            h: De(60 * (i < 0 ? i + 6 : i)),
            s: De(o ? (u / o) * 100 : 0),
            v: De((o / 255) * 100),
            a,
          }
        }),
        (Ug = m.memo(function (e) {
          var t = e.hue,
            r = e.onChange,
            n = Kr(['react-colorful__hue', e.className])
          return m.createElement(
            'div',
            {className: n},
            m.createElement(
              Mu,
              {
                onMove: function (a) {
                  r({h: 360 * a.left})
                },
                onKey: function (a) {
                  r({h: ar(t + 360 * a.left, 0, 360)})
                },
                'aria-label': 'Hue',
                'aria-valuenow': De(t),
                'aria-valuemax': '360',
                'aria-valuemin': '0',
              },
              m.createElement(qu, {
                className: 'react-colorful__hue-pointer',
                left: t / 360,
                color: Nu({h: t, s: 100, v: 100, a: 1}),
              })
            )
          )
        })),
        (zg = m.memo(function (e) {
          var t = e.hsva,
            r = e.onChange,
            n = {backgroundColor: Nu({h: t.h, s: 100, v: 100, a: 1})}
          return m.createElement(
            'div',
            {className: 'react-colorful__saturation', style: n},
            m.createElement(
              Mu,
              {
                onMove: function (a) {
                  r({s: 100 * a.left, v: 100 - 100 * a.top})
                },
                onKey: function (a) {
                  r({
                    s: ar(t.s + 100 * a.left, 0, 100),
                    v: ar(t.v - 100 * a.top, 0, 100),
                  })
                },
                'aria-label': 'Color',
                'aria-valuetext':
                  'Saturation ' + De(t.s) + '%, Brightness ' + De(t.v) + '%',
              },
              m.createElement(qu, {
                className: 'react-colorful__saturation-pointer',
                top: 1 - t.v / 100,
                left: t.s / 100,
                color: Nu(t),
              })
            )
          )
        })),
        (Hg = function (e, t) {
          if (e === t) return !0
          for (var r in e) if (e[r] !== t[r]) return !1
          return !0
        }),
        (Gg = function (e, t) {
          return e.replace(/\s/g, '') === t.replace(/\s/g, '')
        }),
        ($O = function (e, t) {
          return e.toLowerCase() === t.toLowerCase() || Hg(ku(e), ku(t))
        })
      ;(zO = typeof window < 'u' ? yi : me),
        (HO = function () {
          return (
            UO || (typeof __webpack_nonce__ < 'u' ? __webpack_nonce__ : void 0)
          )
        }),
        (Mg = new Map()),
        (Vg = function (e) {
          zO(function () {
            var t = e.current ? e.current.ownerDocument : document
            if (t !== void 0 && !Mg.has(t)) {
              var r = t.createElement('style')
              ;(r.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`),
                Mg.set(t, r)
              var n = HO()
              n && r.setAttribute('nonce', n), t.head.appendChild(r)
            }
          }, [])
        }),
        (GO = function (e) {
          var t = e.className,
            r = e.colorModel,
            n = e.color,
            a = n === void 0 ? r.defaultColor : n,
            o = e.onChange,
            u = ju(e, ['className', 'colorModel', 'color', 'onChange']),
            i = xe(null)
          Vg(i)
          var s = Wg(r, a, o),
            d = s[0],
            y = s[1],
            A = Kr(['react-colorful', t])
          return m.createElement(
            'div',
            xt({}, u, {ref: i, className: A}),
            m.createElement(zg, {hsva: d, onChange: y}),
            m.createElement(Ug, {
              hue: d.h,
              onChange: y,
              className: 'react-colorful__last-control',
            })
          )
        }),
        (WO = {
          defaultColor: '000',
          toHsva: IO,
          fromHsva: function (e) {
            return MO({h: e.h, s: e.s, v: e.v, a: 1})
          },
          equal: $O,
        }),
        (Kg = function (e) {
          return m.createElement(GO, xt({}, e, {colorModel: WO}))
        }),
        (VO = function (e) {
          var t = e.className,
            r = e.hsva,
            n = e.onChange,
            a = {
              backgroundImage:
                'linear-gradient(90deg, ' +
                na(Object.assign({}, r, {a: 0})) +
                ', ' +
                na(Object.assign({}, r, {a: 1})) +
                ')',
            },
            o = Kr(['react-colorful__alpha', t]),
            u = De(100 * r.a)
          return m.createElement(
            'div',
            {className: o},
            m.createElement('div', {
              className: 'react-colorful__alpha-gradient',
              style: a,
            }),
            m.createElement(
              Mu,
              {
                onMove: function (i) {
                  n({a: i.left})
                },
                onKey: function (i) {
                  n({a: ar(r.a + i.left)})
                },
                'aria-label': 'Alpha',
                'aria-valuetext': u + '%',
                'aria-valuenow': u,
                'aria-valuemin': '0',
                'aria-valuemax': '100',
              },
              m.createElement(qu, {
                className: 'react-colorful__alpha-pointer',
                left: r.a,
                color: na(r),
              })
            )
          )
        }),
        (Yg = function (e) {
          var t = e.className,
            r = e.colorModel,
            n = e.color,
            a = n === void 0 ? r.defaultColor : n,
            o = e.onChange,
            u = ju(e, ['className', 'colorModel', 'color', 'onChange']),
            i = xe(null)
          Vg(i)
          var s = Wg(r, a, o),
            d = s[0],
            y = s[1],
            A = Kr(['react-colorful', t])
          return m.createElement(
            'div',
            xt({}, u, {ref: i, className: A}),
            m.createElement(zg, {hsva: d, onChange: y}),
            m.createElement(Ug, {hue: d.h, onChange: y}),
            m.createElement(VO, {
              hsva: d,
              onChange: y,
              className: 'react-colorful__last-control',
            })
          )
        }),
        (KO = {
          defaultColor: 'hsla(0, 0%, 0%, 1)',
          toHsva: NO,
          fromHsva: na,
          equal: Gg,
        }),
        (Xg = function (e) {
          return m.createElement(Yg, xt({}, e, {colorModel: KO}))
        }),
        (YO = {
          defaultColor: 'rgba(0, 0, 0, 1)',
          toHsva: qO,
          fromHsva: function (e) {
            var t = Lg(e)
            return 'rgba(' + t.r + ', ' + t.g + ', ' + t.b + ', ' + t.a + ')'
          },
          equal: Gg,
        }),
        (Jg = function (e) {
          return m.createElement(Yg, xt({}, e, {colorModel: YO}))
        })
    })
  var em = F((aee, Zg) => {
    'use strict'
    l()
    c()
    p()
    Zg.exports = {
      aliceblue: [240, 248, 255],
      antiquewhite: [250, 235, 215],
      aqua: [0, 255, 255],
      aquamarine: [127, 255, 212],
      azure: [240, 255, 255],
      beige: [245, 245, 220],
      bisque: [255, 228, 196],
      black: [0, 0, 0],
      blanchedalmond: [255, 235, 205],
      blue: [0, 0, 255],
      blueviolet: [138, 43, 226],
      brown: [165, 42, 42],
      burlywood: [222, 184, 135],
      cadetblue: [95, 158, 160],
      chartreuse: [127, 255, 0],
      chocolate: [210, 105, 30],
      coral: [255, 127, 80],
      cornflowerblue: [100, 149, 237],
      cornsilk: [255, 248, 220],
      crimson: [220, 20, 60],
      cyan: [0, 255, 255],
      darkblue: [0, 0, 139],
      darkcyan: [0, 139, 139],
      darkgoldenrod: [184, 134, 11],
      darkgray: [169, 169, 169],
      darkgreen: [0, 100, 0],
      darkgrey: [169, 169, 169],
      darkkhaki: [189, 183, 107],
      darkmagenta: [139, 0, 139],
      darkolivegreen: [85, 107, 47],
      darkorange: [255, 140, 0],
      darkorchid: [153, 50, 204],
      darkred: [139, 0, 0],
      darksalmon: [233, 150, 122],
      darkseagreen: [143, 188, 143],
      darkslateblue: [72, 61, 139],
      darkslategray: [47, 79, 79],
      darkslategrey: [47, 79, 79],
      darkturquoise: [0, 206, 209],
      darkviolet: [148, 0, 211],
      deeppink: [255, 20, 147],
      deepskyblue: [0, 191, 255],
      dimgray: [105, 105, 105],
      dimgrey: [105, 105, 105],
      dodgerblue: [30, 144, 255],
      firebrick: [178, 34, 34],
      floralwhite: [255, 250, 240],
      forestgreen: [34, 139, 34],
      fuchsia: [255, 0, 255],
      gainsboro: [220, 220, 220],
      ghostwhite: [248, 248, 255],
      gold: [255, 215, 0],
      goldenrod: [218, 165, 32],
      gray: [128, 128, 128],
      green: [0, 128, 0],
      greenyellow: [173, 255, 47],
      grey: [128, 128, 128],
      honeydew: [240, 255, 240],
      hotpink: [255, 105, 180],
      indianred: [205, 92, 92],
      indigo: [75, 0, 130],
      ivory: [255, 255, 240],
      khaki: [240, 230, 140],
      lavender: [230, 230, 250],
      lavenderblush: [255, 240, 245],
      lawngreen: [124, 252, 0],
      lemonchiffon: [255, 250, 205],
      lightblue: [173, 216, 230],
      lightcoral: [240, 128, 128],
      lightcyan: [224, 255, 255],
      lightgoldenrodyellow: [250, 250, 210],
      lightgray: [211, 211, 211],
      lightgreen: [144, 238, 144],
      lightgrey: [211, 211, 211],
      lightpink: [255, 182, 193],
      lightsalmon: [255, 160, 122],
      lightseagreen: [32, 178, 170],
      lightskyblue: [135, 206, 250],
      lightslategray: [119, 136, 153],
      lightslategrey: [119, 136, 153],
      lightsteelblue: [176, 196, 222],
      lightyellow: [255, 255, 224],
      lime: [0, 255, 0],
      limegreen: [50, 205, 50],
      linen: [250, 240, 230],
      magenta: [255, 0, 255],
      maroon: [128, 0, 0],
      mediumaquamarine: [102, 205, 170],
      mediumblue: [0, 0, 205],
      mediumorchid: [186, 85, 211],
      mediumpurple: [147, 112, 219],
      mediumseagreen: [60, 179, 113],
      mediumslateblue: [123, 104, 238],
      mediumspringgreen: [0, 250, 154],
      mediumturquoise: [72, 209, 204],
      mediumvioletred: [199, 21, 133],
      midnightblue: [25, 25, 112],
      mintcream: [245, 255, 250],
      mistyrose: [255, 228, 225],
      moccasin: [255, 228, 181],
      navajowhite: [255, 222, 173],
      navy: [0, 0, 128],
      oldlace: [253, 245, 230],
      olive: [128, 128, 0],
      olivedrab: [107, 142, 35],
      orange: [255, 165, 0],
      orangered: [255, 69, 0],
      orchid: [218, 112, 214],
      palegoldenrod: [238, 232, 170],
      palegreen: [152, 251, 152],
      paleturquoise: [175, 238, 238],
      palevioletred: [219, 112, 147],
      papayawhip: [255, 239, 213],
      peachpuff: [255, 218, 185],
      peru: [205, 133, 63],
      pink: [255, 192, 203],
      plum: [221, 160, 221],
      powderblue: [176, 224, 230],
      purple: [128, 0, 128],
      rebeccapurple: [102, 51, 153],
      red: [255, 0, 0],
      rosybrown: [188, 143, 143],
      royalblue: [65, 105, 225],
      saddlebrown: [139, 69, 19],
      salmon: [250, 128, 114],
      sandybrown: [244, 164, 96],
      seagreen: [46, 139, 87],
      seashell: [255, 245, 238],
      sienna: [160, 82, 45],
      silver: [192, 192, 192],
      skyblue: [135, 206, 235],
      slateblue: [106, 90, 205],
      slategray: [112, 128, 144],
      slategrey: [112, 128, 144],
      snow: [255, 250, 250],
      springgreen: [0, 255, 127],
      steelblue: [70, 130, 180],
      tan: [210, 180, 140],
      teal: [0, 128, 128],
      thistle: [216, 191, 216],
      tomato: [255, 99, 71],
      turquoise: [64, 224, 208],
      violet: [238, 130, 238],
      wheat: [245, 222, 179],
      white: [255, 255, 255],
      whitesmoke: [245, 245, 245],
      yellow: [255, 255, 0],
      yellowgreen: [154, 205, 50],
    }
  })
  var Lu = F((see, rm) => {
    l()
    c()
    p()
    var Yr = em(),
      tm = {}
    for (let e of Object.keys(Yr)) tm[Yr[e]] = e
    var W = {
      rgb: {channels: 3, labels: 'rgb'},
      hsl: {channels: 3, labels: 'hsl'},
      hsv: {channels: 3, labels: 'hsv'},
      hwb: {channels: 3, labels: 'hwb'},
      cmyk: {channels: 4, labels: 'cmyk'},
      xyz: {channels: 3, labels: 'xyz'},
      lab: {channels: 3, labels: 'lab'},
      lch: {channels: 3, labels: 'lch'},
      hex: {channels: 1, labels: ['hex']},
      keyword: {channels: 1, labels: ['keyword']},
      ansi16: {channels: 1, labels: ['ansi16']},
      ansi256: {channels: 1, labels: ['ansi256']},
      hcg: {channels: 3, labels: ['h', 'c', 'g']},
      apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
      gray: {channels: 1, labels: ['gray']},
    }
    rm.exports = W
    for (let e of Object.keys(W)) {
      if (!('channels' in W[e]))
        throw new Error('missing channels property: ' + e)
      if (!('labels' in W[e]))
        throw new Error('missing channel labels property: ' + e)
      if (W[e].labels.length !== W[e].channels)
        throw new Error('channel and label counts mismatch: ' + e)
      let {channels: t, labels: r} = W[e]
      delete W[e].channels,
        delete W[e].labels,
        Object.defineProperty(W[e], 'channels', {value: t}),
        Object.defineProperty(W[e], 'labels', {value: r})
    }
    W.rgb.hsl = function (e) {
      let t = e[0] / 255,
        r = e[1] / 255,
        n = e[2] / 255,
        a = Math.min(t, r, n),
        o = Math.max(t, r, n),
        u = o - a,
        i,
        s
      o === a
        ? (i = 0)
        : t === o
        ? (i = (r - n) / u)
        : r === o
        ? (i = 2 + (n - t) / u)
        : n === o && (i = 4 + (t - r) / u),
        (i = Math.min(i * 60, 360)),
        i < 0 && (i += 360)
      let d = (a + o) / 2
      return (
        o === a
          ? (s = 0)
          : d <= 0.5
          ? (s = u / (o + a))
          : (s = u / (2 - o - a)),
        [i, s * 100, d * 100]
      )
    }
    W.rgb.hsv = function (e) {
      let t,
        r,
        n,
        a,
        o,
        u = e[0] / 255,
        i = e[1] / 255,
        s = e[2] / 255,
        d = Math.max(u, i, s),
        y = d - Math.min(u, i, s),
        A = function (g) {
          return (d - g) / 6 / y + 1 / 2
        }
      return (
        y === 0
          ? ((a = 0), (o = 0))
          : ((o = y / d),
            (t = A(u)),
            (r = A(i)),
            (n = A(s)),
            u === d
              ? (a = n - r)
              : i === d
              ? (a = 1 / 3 + t - n)
              : s === d && (a = 2 / 3 + r - t),
            a < 0 ? (a += 1) : a > 1 && (a -= 1)),
        [a * 360, o * 100, d * 100]
      )
    }
    W.rgb.hwb = function (e) {
      let t = e[0],
        r = e[1],
        n = e[2],
        a = W.rgb.hsl(e)[0],
        o = (1 / 255) * Math.min(t, Math.min(r, n))
      return (
        (n = 1 - (1 / 255) * Math.max(t, Math.max(r, n))), [a, o * 100, n * 100]
      )
    }
    W.rgb.cmyk = function (e) {
      let t = e[0] / 255,
        r = e[1] / 255,
        n = e[2] / 255,
        a = Math.min(1 - t, 1 - r, 1 - n),
        o = (1 - t - a) / (1 - a) || 0,
        u = (1 - r - a) / (1 - a) || 0,
        i = (1 - n - a) / (1 - a) || 0
      return [o * 100, u * 100, i * 100, a * 100]
    }
    function XO(e, t) {
      return (e[0] - t[0]) ** 2 + (e[1] - t[1]) ** 2 + (e[2] - t[2]) ** 2
    }
    W.rgb.keyword = function (e) {
      let t = tm[e]
      if (t) return t
      let r = 1 / 0,
        n
      for (let a of Object.keys(Yr)) {
        let o = Yr[a],
          u = XO(e, o)
        u < r && ((r = u), (n = a))
      }
      return n
    }
    W.keyword.rgb = function (e) {
      return Yr[e]
    }
    W.rgb.xyz = function (e) {
      let t = e[0] / 255,
        r = e[1] / 255,
        n = e[2] / 255
      ;(t = t > 0.04045 ? ((t + 0.055) / 1.055) ** 2.4 : t / 12.92),
        (r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92),
        (n = n > 0.04045 ? ((n + 0.055) / 1.055) ** 2.4 : n / 12.92)
      let a = t * 0.4124 + r * 0.3576 + n * 0.1805,
        o = t * 0.2126 + r * 0.7152 + n * 0.0722,
        u = t * 0.0193 + r * 0.1192 + n * 0.9505
      return [a * 100, o * 100, u * 100]
    }
    W.rgb.lab = function (e) {
      let t = W.rgb.xyz(e),
        r = t[0],
        n = t[1],
        a = t[2]
      ;(r /= 95.047),
        (n /= 100),
        (a /= 108.883),
        (r = r > 0.008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116),
        (n = n > 0.008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116),
        (a = a > 0.008856 ? a ** (1 / 3) : 7.787 * a + 16 / 116)
      let o = 116 * n - 16,
        u = 500 * (r - n),
        i = 200 * (n - a)
      return [o, u, i]
    }
    W.hsl.rgb = function (e) {
      let t = e[0] / 360,
        r = e[1] / 100,
        n = e[2] / 100,
        a,
        o,
        u
      if (r === 0) return (u = n * 255), [u, u, u]
      n < 0.5 ? (a = n * (1 + r)) : (a = n + r - n * r)
      let i = 2 * n - a,
        s = [0, 0, 0]
      for (let d = 0; d < 3; d++)
        (o = t + (1 / 3) * -(d - 1)),
          o < 0 && o++,
          o > 1 && o--,
          6 * o < 1
            ? (u = i + (a - i) * 6 * o)
            : 2 * o < 1
            ? (u = a)
            : 3 * o < 2
            ? (u = i + (a - i) * (2 / 3 - o) * 6)
            : (u = i),
          (s[d] = u * 255)
      return s
    }
    W.hsl.hsv = function (e) {
      let t = e[0],
        r = e[1] / 100,
        n = e[2] / 100,
        a = r,
        o = Math.max(n, 0.01)
      ;(n *= 2), (r *= n <= 1 ? n : 2 - n), (a *= o <= 1 ? o : 2 - o)
      let u = (n + r) / 2,
        i = n === 0 ? (2 * a) / (o + a) : (2 * r) / (n + r)
      return [t, i * 100, u * 100]
    }
    W.hsv.rgb = function (e) {
      let t = e[0] / 60,
        r = e[1] / 100,
        n = e[2] / 100,
        a = Math.floor(t) % 6,
        o = t - Math.floor(t),
        u = 255 * n * (1 - r),
        i = 255 * n * (1 - r * o),
        s = 255 * n * (1 - r * (1 - o))
      switch (((n *= 255), a)) {
        case 0:
          return [n, s, u]
        case 1:
          return [i, n, u]
        case 2:
          return [u, n, s]
        case 3:
          return [u, i, n]
        case 4:
          return [s, u, n]
        case 5:
          return [n, u, i]
      }
    }
    W.hsv.hsl = function (e) {
      let t = e[0],
        r = e[1] / 100,
        n = e[2] / 100,
        a = Math.max(n, 0.01),
        o,
        u
      u = (2 - r) * n
      let i = (2 - r) * a
      return (
        (o = r * a),
        (o /= i <= 1 ? i : 2 - i),
        (o = o || 0),
        (u /= 2),
        [t, o * 100, u * 100]
      )
    }
    W.hwb.rgb = function (e) {
      let t = e[0] / 360,
        r = e[1] / 100,
        n = e[2] / 100,
        a = r + n,
        o
      a > 1 && ((r /= a), (n /= a))
      let u = Math.floor(6 * t),
        i = 1 - n
      ;(o = 6 * t - u), u & 1 && (o = 1 - o)
      let s = r + o * (i - r),
        d,
        y,
        A
      switch (u) {
        default:
        case 6:
        case 0:
          ;(d = i), (y = s), (A = r)
          break
        case 1:
          ;(d = s), (y = i), (A = r)
          break
        case 2:
          ;(d = r), (y = i), (A = s)
          break
        case 3:
          ;(d = r), (y = s), (A = i)
          break
        case 4:
          ;(d = s), (y = r), (A = i)
          break
        case 5:
          ;(d = i), (y = r), (A = s)
          break
      }
      return [d * 255, y * 255, A * 255]
    }
    W.cmyk.rgb = function (e) {
      let t = e[0] / 100,
        r = e[1] / 100,
        n = e[2] / 100,
        a = e[3] / 100,
        o = 1 - Math.min(1, t * (1 - a) + a),
        u = 1 - Math.min(1, r * (1 - a) + a),
        i = 1 - Math.min(1, n * (1 - a) + a)
      return [o * 255, u * 255, i * 255]
    }
    W.xyz.rgb = function (e) {
      let t = e[0] / 100,
        r = e[1] / 100,
        n = e[2] / 100,
        a,
        o,
        u
      return (
        (a = t * 3.2406 + r * -1.5372 + n * -0.4986),
        (o = t * -0.9689 + r * 1.8758 + n * 0.0415),
        (u = t * 0.0557 + r * -0.204 + n * 1.057),
        (a = a > 0.0031308 ? 1.055 * a ** (1 / 2.4) - 0.055 : a * 12.92),
        (o = o > 0.0031308 ? 1.055 * o ** (1 / 2.4) - 0.055 : o * 12.92),
        (u = u > 0.0031308 ? 1.055 * u ** (1 / 2.4) - 0.055 : u * 12.92),
        (a = Math.min(Math.max(0, a), 1)),
        (o = Math.min(Math.max(0, o), 1)),
        (u = Math.min(Math.max(0, u), 1)),
        [a * 255, o * 255, u * 255]
      )
    }
    W.xyz.lab = function (e) {
      let t = e[0],
        r = e[1],
        n = e[2]
      ;(t /= 95.047),
        (r /= 100),
        (n /= 108.883),
        (t = t > 0.008856 ? t ** (1 / 3) : 7.787 * t + 16 / 116),
        (r = r > 0.008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116),
        (n = n > 0.008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116)
      let a = 116 * r - 16,
        o = 500 * (t - r),
        u = 200 * (r - n)
      return [a, o, u]
    }
    W.lab.xyz = function (e) {
      let t = e[0],
        r = e[1],
        n = e[2],
        a,
        o,
        u
      ;(o = (t + 16) / 116), (a = r / 500 + o), (u = o - n / 200)
      let i = o ** 3,
        s = a ** 3,
        d = u ** 3
      return (
        (o = i > 0.008856 ? i : (o - 16 / 116) / 7.787),
        (a = s > 0.008856 ? s : (a - 16 / 116) / 7.787),
        (u = d > 0.008856 ? d : (u - 16 / 116) / 7.787),
        (a *= 95.047),
        (o *= 100),
        (u *= 108.883),
        [a, o, u]
      )
    }
    W.lab.lch = function (e) {
      let t = e[0],
        r = e[1],
        n = e[2],
        a
      ;(a = (Math.atan2(n, r) * 360) / 2 / Math.PI), a < 0 && (a += 360)
      let u = Math.sqrt(r * r + n * n)
      return [t, u, a]
    }
    W.lch.lab = function (e) {
      let t = e[0],
        r = e[1],
        a = (e[2] / 360) * 2 * Math.PI,
        o = r * Math.cos(a),
        u = r * Math.sin(a)
      return [t, o, u]
    }
    W.rgb.ansi16 = function (e, t = null) {
      let [r, n, a] = e,
        o = t === null ? W.rgb.hsv(e)[2] : t
      if (((o = Math.round(o / 50)), o === 0)) return 30
      let u =
        30 +
        ((Math.round(a / 255) << 2) |
          (Math.round(n / 255) << 1) |
          Math.round(r / 255))
      return o === 2 && (u += 60), u
    }
    W.hsv.ansi16 = function (e) {
      return W.rgb.ansi16(W.hsv.rgb(e), e[2])
    }
    W.rgb.ansi256 = function (e) {
      let t = e[0],
        r = e[1],
        n = e[2]
      return t === r && r === n
        ? t < 8
          ? 16
          : t > 248
          ? 231
          : Math.round(((t - 8) / 247) * 24) + 232
        : 16 +
            36 * Math.round((t / 255) * 5) +
            6 * Math.round((r / 255) * 5) +
            Math.round((n / 255) * 5)
    }
    W.ansi16.rgb = function (e) {
      let t = e % 10
      if (t === 0 || t === 7)
        return e > 50 && (t += 3.5), (t = (t / 10.5) * 255), [t, t, t]
      let r = (~~(e > 50) + 1) * 0.5,
        n = (t & 1) * r * 255,
        a = ((t >> 1) & 1) * r * 255,
        o = ((t >> 2) & 1) * r * 255
      return [n, a, o]
    }
    W.ansi256.rgb = function (e) {
      if (e >= 232) {
        let o = (e - 232) * 10 + 8
        return [o, o, o]
      }
      e -= 16
      let t,
        r = (Math.floor(e / 36) / 5) * 255,
        n = (Math.floor((t = e % 36) / 6) / 5) * 255,
        a = ((t % 6) / 5) * 255
      return [r, n, a]
    }
    W.rgb.hex = function (e) {
      let r = (
        ((Math.round(e[0]) & 255) << 16) +
        ((Math.round(e[1]) & 255) << 8) +
        (Math.round(e[2]) & 255)
      )
        .toString(16)
        .toUpperCase()
      return '000000'.substring(r.length) + r
    }
    W.hex.rgb = function (e) {
      let t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i)
      if (!t) return [0, 0, 0]
      let r = t[0]
      t[0].length === 3 &&
        (r = r
          .split('')
          .map((i) => i + i)
          .join(''))
      let n = parseInt(r, 16),
        a = (n >> 16) & 255,
        o = (n >> 8) & 255,
        u = n & 255
      return [a, o, u]
    }
    W.rgb.hcg = function (e) {
      let t = e[0] / 255,
        r = e[1] / 255,
        n = e[2] / 255,
        a = Math.max(Math.max(t, r), n),
        o = Math.min(Math.min(t, r), n),
        u = a - o,
        i,
        s
      return (
        u < 1 ? (i = o / (1 - u)) : (i = 0),
        u <= 0
          ? (s = 0)
          : a === t
          ? (s = ((r - n) / u) % 6)
          : a === r
          ? (s = 2 + (n - t) / u)
          : (s = 4 + (t - r) / u),
        (s /= 6),
        (s %= 1),
        [s * 360, u * 100, i * 100]
      )
    }
    W.hsl.hcg = function (e) {
      let t = e[1] / 100,
        r = e[2] / 100,
        n = r < 0.5 ? 2 * t * r : 2 * t * (1 - r),
        a = 0
      return n < 1 && (a = (r - 0.5 * n) / (1 - n)), [e[0], n * 100, a * 100]
    }
    W.hsv.hcg = function (e) {
      let t = e[1] / 100,
        r = e[2] / 100,
        n = t * r,
        a = 0
      return n < 1 && (a = (r - n) / (1 - n)), [e[0], n * 100, a * 100]
    }
    W.hcg.rgb = function (e) {
      let t = e[0] / 360,
        r = e[1] / 100,
        n = e[2] / 100
      if (r === 0) return [n * 255, n * 255, n * 255]
      let a = [0, 0, 0],
        o = (t % 1) * 6,
        u = o % 1,
        i = 1 - u,
        s = 0
      switch (Math.floor(o)) {
        case 0:
          ;(a[0] = 1), (a[1] = u), (a[2] = 0)
          break
        case 1:
          ;(a[0] = i), (a[1] = 1), (a[2] = 0)
          break
        case 2:
          ;(a[0] = 0), (a[1] = 1), (a[2] = u)
          break
        case 3:
          ;(a[0] = 0), (a[1] = i), (a[2] = 1)
          break
        case 4:
          ;(a[0] = u), (a[1] = 0), (a[2] = 1)
          break
        default:
          ;(a[0] = 1), (a[1] = 0), (a[2] = i)
      }
      return (
        (s = (1 - r) * n),
        [(r * a[0] + s) * 255, (r * a[1] + s) * 255, (r * a[2] + s) * 255]
      )
    }
    W.hcg.hsv = function (e) {
      let t = e[1] / 100,
        r = e[2] / 100,
        n = t + r * (1 - t),
        a = 0
      return n > 0 && (a = t / n), [e[0], a * 100, n * 100]
    }
    W.hcg.hsl = function (e) {
      let t = e[1] / 100,
        n = (e[2] / 100) * (1 - t) + 0.5 * t,
        a = 0
      return (
        n > 0 && n < 0.5
          ? (a = t / (2 * n))
          : n >= 0.5 && n < 1 && (a = t / (2 * (1 - n))),
        [e[0], a * 100, n * 100]
      )
    }
    W.hcg.hwb = function (e) {
      let t = e[1] / 100,
        r = e[2] / 100,
        n = t + r * (1 - t)
      return [e[0], (n - t) * 100, (1 - n) * 100]
    }
    W.hwb.hcg = function (e) {
      let t = e[1] / 100,
        n = 1 - e[2] / 100,
        a = n - t,
        o = 0
      return a < 1 && (o = (n - a) / (1 - a)), [e[0], a * 100, o * 100]
    }
    W.apple.rgb = function (e) {
      return [(e[0] / 65535) * 255, (e[1] / 65535) * 255, (e[2] / 65535) * 255]
    }
    W.rgb.apple = function (e) {
      return [(e[0] / 255) * 65535, (e[1] / 255) * 65535, (e[2] / 255) * 65535]
    }
    W.gray.rgb = function (e) {
      return [(e[0] / 100) * 255, (e[0] / 100) * 255, (e[0] / 100) * 255]
    }
    W.gray.hsl = function (e) {
      return [0, 0, e[0]]
    }
    W.gray.hsv = W.gray.hsl
    W.gray.hwb = function (e) {
      return [0, 100, e[0]]
    }
    W.gray.cmyk = function (e) {
      return [0, 0, 0, e[0]]
    }
    W.gray.lab = function (e) {
      return [e[0], 0, 0]
    }
    W.gray.hex = function (e) {
      let t = Math.round((e[0] / 100) * 255) & 255,
        n = ((t << 16) + (t << 8) + t).toString(16).toUpperCase()
      return '000000'.substring(n.length) + n
    }
    W.rgb.gray = function (e) {
      return [((e[0] + e[1] + e[2]) / 3 / 255) * 100]
    }
  })
  var am = F((dee, nm) => {
    l()
    c()
    p()
    var aa = Lu()
    function JO() {
      let e = {},
        t = Object.keys(aa)
      for (let r = t.length, n = 0; n < r; n++)
        e[t[n]] = {distance: -1, parent: null}
      return e
    }
    function QO(e) {
      let t = JO(),
        r = [e]
      for (t[e].distance = 0; r.length; ) {
        let n = r.pop(),
          a = Object.keys(aa[n])
        for (let o = a.length, u = 0; u < o; u++) {
          let i = a[u],
            s = t[i]
          s.distance === -1 &&
            ((s.distance = t[n].distance + 1), (s.parent = n), r.unshift(i))
        }
      }
      return t
    }
    function ZO(e, t) {
      return function (r) {
        return t(e(r))
      }
    }
    function e4(e, t) {
      let r = [t[e].parent, e],
        n = aa[t[e].parent][e],
        a = t[e].parent
      for (; t[a].parent; )
        r.unshift(t[a].parent),
          (n = ZO(aa[t[a].parent][a], n)),
          (a = t[a].parent)
      return (n.conversion = r), n
    }
    nm.exports = function (e) {
      let t = QO(e),
        r = {},
        n = Object.keys(t)
      for (let a = n.length, o = 0; o < a; o++) {
        let u = n[o]
        t[u].parent !== null && (r[u] = e4(u, t))
      }
      return r
    }
  })
  var um = F((mee, om) => {
    l()
    c()
    p()
    var $u = Lu(),
      t4 = am(),
      or = {},
      r4 = Object.keys($u)
    function n4(e) {
      let t = function (...r) {
        let n = r[0]
        return n == null ? n : (n.length > 1 && (r = n), e(r))
      }
      return 'conversion' in e && (t.conversion = e.conversion), t
    }
    function a4(e) {
      let t = function (...r) {
        let n = r[0]
        if (n == null) return n
        n.length > 1 && (r = n)
        let a = e(r)
        if (typeof a == 'object')
          for (let o = a.length, u = 0; u < o; u++) a[u] = Math.round(a[u])
        return a
      }
      return 'conversion' in e && (t.conversion = e.conversion), t
    }
    r4.forEach((e) => {
      ;(or[e] = {}),
        Object.defineProperty(or[e], 'channels', {value: $u[e].channels}),
        Object.defineProperty(or[e], 'labels', {value: $u[e].labels})
      let t = t4(e)
      Object.keys(t).forEach((n) => {
        let a = t[n]
        ;(or[e][n] = a4(a)), (or[e][n].raw = n4(a))
      })
    })
    om.exports = or
  })
  var sm = F((Eee, im) => {
    l()
    c()
    p()
    var o4 = je(),
      u4 = function () {
        return o4.Date.now()
      }
    im.exports = u4
  })
  var cm = F((xee, lm) => {
    l()
    c()
    p()
    var i4 = /\s/
    function s4(e) {
      for (var t = e.length; t-- && i4.test(e.charAt(t)); );
      return t
    }
    lm.exports = s4
  })
  var dm = F((Bee, pm) => {
    l()
    c()
    p()
    var l4 = cm(),
      c4 = /^\s+/
    function p4(e) {
      return e && e.slice(0, l4(e) + 1).replace(c4, '')
    }
    pm.exports = p4
  })
  var mm = F((Ree, gm) => {
    l()
    c()
    p()
    var d4 = dm(),
      fm = Ue(),
      f4 = Sr(),
      hm = 0 / 0,
      h4 = /^[-+]0x[0-9a-f]+$/i,
      g4 = /^0b[01]+$/i,
      m4 = /^0o[0-7]+$/i,
      y4 = parseInt
    function b4(e) {
      if (typeof e == 'number') return e
      if (f4(e)) return hm
      if (fm(e)) {
        var t = typeof e.valueOf == 'function' ? e.valueOf() : e
        e = fm(t) ? t + '' : t
      }
      if (typeof e != 'string') return e === 0 ? e : +e
      e = d4(e)
      var r = g4.test(e)
      return r || m4.test(e) ? y4(e.slice(2), r ? 2 : 8) : h4.test(e) ? hm : +e
    }
    gm.exports = b4
  })
  var Am = F((Nee, bm) => {
    l()
    c()
    p()
    var A4 = Ue(),
      Uu = sm(),
      ym = mm(),
      E4 = 'Expected a function',
      D4 = Math.max,
      v4 = Math.min
    function C4(e, t, r) {
      var n,
        a,
        o,
        u,
        i,
        s,
        d = 0,
        y = !1,
        A = !1,
        g = !0
      if (typeof e != 'function') throw new TypeError(E4)
      ;(t = ym(t) || 0),
        A4(r) &&
          ((y = !!r.leading),
          (A = 'maxWait' in r),
          (o = A ? D4(ym(r.maxWait) || 0, t) : o),
          (g = 'trailing' in r ? !!r.trailing : g))
      function h(j) {
        var I = n,
          z = a
        return (n = a = void 0), (d = j), (u = e.apply(z, I)), u
      }
      function E(j) {
        return (d = j), (i = setTimeout(S, t)), y ? h(j) : u
      }
      function b(j) {
        var I = j - s,
          z = j - d,
          K = t - I
        return A ? v4(K, o - z) : K
      }
      function x(j) {
        var I = j - s,
          z = j - d
        return s === void 0 || I >= t || I < 0 || (A && z >= o)
      }
      function S() {
        var j = Uu()
        if (x(j)) return P(j)
        i = setTimeout(S, b(j))
      }
      function P(j) {
        return (i = void 0), g && n ? h(j) : ((n = a = void 0), u)
      }
      function N() {
        i !== void 0 && clearTimeout(i), (d = 0), (n = s = a = i = void 0)
      }
      function $() {
        return i === void 0 ? u : P(Uu())
      }
      function w() {
        var j = Uu(),
          I = x(j)
        if (((n = arguments), (a = this), (s = j), I)) {
          if (i === void 0) return E(s)
          if (A) return clearTimeout(i), (i = setTimeout(S, t)), h(s)
        }
        return i === void 0 && (i = setTimeout(S, t)), u
      }
      return (w.cancel = N), (w.flush = $), w
    }
    bm.exports = C4
  })
  var Dm = F((Lee, Em) => {
    l()
    c()
    p()
    var x4 = Am(),
      F4 = Ue(),
      S4 = 'Expected a function'
    function w4(e, t, r) {
      var n = !0,
        a = !0
      if (typeof e != 'function') throw new TypeError(S4)
      return (
        F4(r) &&
          ((n = 'leading' in r ? !!r.leading : n),
          (a = 'trailing' in r ? !!r.trailing : a)),
        x4(e, t, {leading: n, maxWait: t, trailing: a})
      )
    }
    Em.exports = w4
  })
  var wm = {}
  fi(wm, {ColorControl: () => Sm, default: () => G4})
  var ke,
    xm,
    B4,
    T4,
    _4,
    O4,
    R4,
    P4,
    I4,
    vm,
    k4,
    N4,
    Fm,
    oa,
    j4,
    M4,
    q4,
    zu,
    L4,
    $4,
    ua,
    Cm,
    ur,
    U4,
    z4,
    ia,
    H4,
    Sm,
    G4,
    Bm = Ye(() => {
      l()
      c()
      p()
      ja()
      St()
      Qg()
      ;(ke = fe(um(), 1)), (xm = fe(Dm(), 1))
      qa()
      pr()
      ;(B4 = q.div({position: 'relative', maxWidth: 250})),
        (T4 = q(Zr)({position: 'absolute', zIndex: 1, top: 4, left: 4})),
        (_4 = q.div({
          width: 200,
          margin: 5,
          '.react-colorful__saturation': {borderRadius: '4px 4px 0 0'},
          '.react-colorful__hue': {
            boxShadow: 'inset 0 0 0 1px rgb(0 0 0 / 5%)',
          },
          '.react-colorful__last-control': {borderRadius: '0 0 4px 4px'},
        })),
        (O4 = q(Oa)(({theme: e}) => ({fontFamily: e.typography.fonts.base}))),
        (R4 = q.div({
          display: 'grid',
          gridTemplateColumns: 'repeat(9, 16px)',
          gap: 6,
          padding: 3,
          marginTop: 5,
          width: 200,
        })),
        (P4 = q.div(({theme: e, active: t}) => ({
          width: 16,
          height: 16,
          boxShadow: t
            ? `${e.appBorderColor} 0 0 0 1px inset, ${e.textMutedColor}50 0 0 0 4px`
            : `${e.appBorderColor} 0 0 0 1px inset`,
          borderRadius: e.appBorderRadius,
        }))),
        (I4 = `url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`),
        (vm = ({value: e, active: t, onClick: r, style: n, ...a}) => {
          let o = `linear-gradient(${e}, ${e}), ${I4}, linear-gradient(#fff, #fff)`
          return m.createElement(P4, {
            ...a,
            active: t,
            onClick: r,
            style: {...n, backgroundImage: o},
          })
        }),
        (k4 = q(we.Input)(({theme: e}) => ({
          width: '100%',
          paddingLeft: 30,
          paddingRight: 30,
          boxSizing: 'border-box',
          fontFamily: e.typography.fonts.base,
        }))),
        (N4 = q(Be)(({theme: e}) => ({
          position: 'absolute',
          zIndex: 1,
          top: 6,
          right: 7,
          width: 20,
          height: 20,
          padding: 4,
          boxSizing: 'border-box',
          cursor: 'pointer',
          color: e.input.color,
        }))),
        (Fm = ((e) => ((e.RGB = 'rgb'), (e.HSL = 'hsl'), (e.HEX = 'hex'), e))(
          Fm || {}
        )),
        (oa = Object.values(Fm)),
        (j4 = /\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/),
        (M4 =
          /^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i),
        (q4 =
          /^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i),
        (zu = /^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i),
        (L4 = /^\s*#?([0-9a-f]{3})\s*$/i),
        ($4 = {hex: Kg, rgb: Jg, hsl: Xg}),
        (ua = {
          hex: 'transparent',
          rgb: 'rgba(0, 0, 0, 0)',
          hsl: 'hsla(0, 0%, 0%, 0)',
        }),
        (Cm = (e) => {
          let t = e?.match(j4)
          if (!t) return [0, 0, 0, 1]
          let [, r, n, a, o = 1] = t
          return [r, n, a, o].map(Number)
        }),
        (ur = (e) => {
          if (!e) return
          let t = !0
          if (M4.test(e)) {
            let [u, i, s, d] = Cm(e),
              [y, A, g] = ke.default.rgb.hsl([u, i, s]) || [0, 0, 0]
            return {
              valid: t,
              value: e,
              keyword: ke.default.rgb.keyword([u, i, s]),
              colorSpace: 'rgb',
              rgb: e,
              hsl: `hsla(${y}, ${A}%, ${g}%, ${d})`,
              hex: `#${ke.default.rgb.hex([u, i, s]).toLowerCase()}`,
            }
          }
          if (q4.test(e)) {
            let [u, i, s, d] = Cm(e),
              [y, A, g] = ke.default.hsl.rgb([u, i, s]) || [0, 0, 0]
            return {
              valid: t,
              value: e,
              keyword: ke.default.hsl.keyword([u, i, s]),
              colorSpace: 'hsl',
              rgb: `rgba(${y}, ${A}, ${g}, ${d})`,
              hsl: e,
              hex: `#${ke.default.hsl.hex([u, i, s]).toLowerCase()}`,
            }
          }
          let r = e.replace('#', ''),
            n = ke.default.keyword.rgb(r) || ke.default.hex.rgb(r),
            a = ke.default.rgb.hsl(n),
            o = e
          if (
            (/[^#a-f0-9]/i.test(e) ? (o = r) : zu.test(e) && (o = `#${r}`),
            o.startsWith('#'))
          )
            t = zu.test(o)
          else
            try {
              ke.default.keyword.hex(o)
            } catch {
              t = !1
            }
          return {
            valid: t,
            value: o,
            keyword: ke.default.rgb.keyword(n),
            colorSpace: 'hex',
            rgb: `rgba(${n[0]}, ${n[1]}, ${n[2]}, 1)`,
            hsl: `hsla(${a[0]}, ${a[1]}%, ${a[2]}%, 1)`,
            hex: o,
          }
        }),
        (U4 = (e, t, r) => {
          if (!e || !t?.valid) return ua[r]
          if (r !== 'hex') return t?.[r] || ua[r]
          if (!t.hex.startsWith('#'))
            try {
              return `#${ke.default.keyword.hex(t.hex)}`
            } catch {
              return ua.hex
            }
          let n = t.hex.match(L4)
          if (!n) return zu.test(t.hex) ? t.hex : ua.hex
          let [a, o, u] = n[1].split('')
          return `#${a}${a}${o}${o}${u}${u}`
        }),
        (z4 = (e, t) => {
          let [r, n] = ne(e || ''),
            [a, o] = ne(() => ur(r)),
            [u, i] = ne(a?.colorSpace || 'hex')
          me(() => {
            let A = e || '',
              g = ur(A)
            n(A), o(g), i(g?.colorSpace || 'hex')
          }, [e])
          let s = tt(() => U4(r, a, u).toLowerCase(), [r, a, u]),
            d = ge(
              (A) => {
                let g = ur(A),
                  h = g?.value || A || ''
                n(h),
                  h === '' && (o(void 0), t(void 0)),
                  g && (o(g), i(g.colorSpace), t(g.value))
              },
              [t]
            ),
            y = ge(() => {
              let A = oa.indexOf(u) + 1
              A >= oa.length && (A = 0), i(oa[A])
              let g = a?.[oa[A]] || ''
              n(g), t(g)
            }, [a, u, t])
          return {
            value: r,
            realValue: s,
            updateValue: d,
            color: a,
            colorSpace: u,
            cycleColorSpace: y,
          }
        }),
        (ia = (e) => e.replace(/\s*/, '').toLowerCase()),
        (H4 = (e, t, r) => {
          let [n, a] = ne(t?.valid ? [t] : [])
          me(() => {
            t === void 0 && a([])
          }, [t])
          let o = tt(
              () =>
                (e || [])
                  .map((i) =>
                    typeof i == 'string'
                      ? ur(i)
                      : i.title
                      ? {...ur(i.color), keyword: i.title}
                      : ur(i.color)
                  )
                  .concat(n)
                  .filter(Boolean)
                  .slice(-27),
              [e, n]
            ),
            u = ge(
              (i) => {
                i?.valid &&
                  (o.some((s) => ia(s[r]) === ia(i[r])) ||
                    a((s) => s.concat(i)))
              },
              [r, o]
            )
          return {presets: o, addPreset: u}
        }),
        (Sm = ({
          name: e,
          value: t,
          onChange: r,
          onFocus: n,
          onBlur: a,
          presetColors: o,
          startOpen: u = !1,
        }) => {
          let i = ge((0, xm.default)(r, 200), [r]),
            {
              value: s,
              realValue: d,
              updateValue: y,
              color: A,
              colorSpace: g,
              cycleColorSpace: h,
            } = z4(t, i),
            {presets: E, addPreset: b} = H4(o, A, g),
            x = $4[g]
          return m.createElement(
            B4,
            null,
            m.createElement(
              T4,
              {
                startOpen: u,
                closeOnOutsideClick: !0,
                onVisibleChange: () => b(A),
                tooltip: m.createElement(
                  _4,
                  null,
                  m.createElement(x, {
                    color: d === 'transparent' ? '#000000' : d,
                    onChange: y,
                    onFocus: n,
                    onBlur: a,
                  }),
                  E.length > 0 &&
                    m.createElement(
                      R4,
                      null,
                      E.map((S, P) =>
                        m.createElement(
                          Zr,
                          {
                            key: `${S.value}-${P}`,
                            hasChrome: !1,
                            tooltip: m.createElement(O4, {
                              note: S.keyword || S.value,
                            }),
                          },
                          m.createElement(vm, {
                            value: S[g],
                            active: A && ia(S[g]) === ia(A[g]),
                            onClick: () => y(S.value),
                          })
                        )
                      )
                    )
                ),
              },
              m.createElement(vm, {value: d, style: {margin: 4}})
            ),
            m.createElement(k4, {
              id: Te(e),
              value: s,
              onChange: (S) => y(S.target.value),
              onFocus: (S) => S.target.select(),
              placeholder: 'Choose color...',
            }),
            s ? m.createElement(N4, {icon: 'markup', onClick: h}) : null
          )
        }),
        (G4 = Sm)
    })
  l()
  c()
  p()
  l()
  c()
  p()
  l()
  c()
  p()
  l()
  c()
  p()
  var ha = 'addon-controls',
    ga = 'controls'
  St()
  l()
  c()
  p()
  var gI = __STORYBOOKAPI__,
    {
      ActiveTabs: mI,
      Consumer: yI,
      ManagerContext: bI,
      Provider: AI,
      addons: ya,
      combineParameters: EI,
      controlOrMetaKey: DI,
      controlOrMetaSymbol: vI,
      eventMatchesShortcut: CI,
      eventToShortcut: xI,
      isMacLike: FI,
      isShortcutTaken: SI,
      keyToSymbol: wI,
      merge: BI,
      mockChannel: TI,
      optionOrAltSymbol: _I,
      shortcutMatchesShortcut: OI,
      shortcutToHumanString: RI,
      types: bi,
      useAddonState: PI,
      useArgTypes: ba,
      useArgs: Ai,
      useChannel: II,
      useGlobalTypes: kI,
      useGlobals: Ei,
      useParameter: Aa,
      useSharedState: NI,
      useStoryPrepared: jI,
      useStorybookApi: MI,
      useStorybookState: Di,
    } = __STORYBOOKAPI__
  pr()
  l()
  c()
  p()
  ja()
  St()
  qa()
  pr()
  l()
  c()
  p()
  l()
  c()
  p()
  function Fe() {
    return (
      (Fe = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t]
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
          }),
      Fe.apply(this, arguments)
    )
  }
  l()
  c()
  p()
  function La(e) {
    if (e === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      )
    return e
  }
  l()
  c()
  p()
  l()
  c()
  p()
  function Je(e, t) {
    return (
      (Je = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (n, a) {
            return (n.__proto__ = a), n
          }),
      Je(e, t)
    )
  }
  function $a(e, t) {
    ;(e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      Je(e, t)
  }
  l()
  c()
  p()
  l()
  c()
  p()
  function fr(e) {
    return (
      (fr = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (r) {
            return r.__proto__ || Object.getPrototypeOf(r)
          }),
      fr(e)
    )
  }
  l()
  c()
  p()
  function Ua(e) {
    return Function.toString.call(e).indexOf('[native code]') !== -1
  }
  l()
  c()
  p()
  l()
  c()
  p()
  function za() {
    if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
      return !1
    if (typeof Proxy == 'function') return !0
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        ),
        !0
      )
    } catch {
      return !1
    }
  }
  function Tt(e, t, r) {
    return (
      za()
        ? (Tt = Reflect.construct.bind())
        : (Tt = function (a, o, u) {
            var i = [null]
            i.push.apply(i, o)
            var s = Function.bind.apply(a, i),
              d = new s()
            return u && Je(d, u.prototype), d
          }),
      Tt.apply(null, arguments)
    )
  }
  function hr(e) {
    var t = typeof Map == 'function' ? new Map() : void 0
    return (
      (hr = function (n) {
        if (n === null || !Ua(n)) return n
        if (typeof n != 'function')
          throw new TypeError(
            'Super expression must either be null or a function'
          )
        if (typeof t < 'u') {
          if (t.has(n)) return t.get(n)
          t.set(n, a)
        }
        function a() {
          return Tt(n, arguments, fr(this).constructor)
        }
        return (
          (a.prototype = Object.create(n.prototype, {
            constructor: {
              value: a,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          Je(a, n)
        )
      }),
      hr(e)
    )
  }
  l()
  c()
  p()
  var _e = (function (e) {
    $a(t, e)
    function t(r) {
      var n
      if (!0)
        n =
          e.call(
            this,
            'An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#' +
              r +
              ' for more information.'
          ) || this
      else for (var a, o, u; u < a; u++);
      return La(n)
    }
    return t
  })(hr(Error))
  function wi(e, t) {
    return e.substr(-t.length) === t
  }
  var h2 = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/
  function Bi(e) {
    if (typeof e != 'string') return e
    var t = e.match(h2)
    return t ? parseFloat(e) : e
  }
  var g2 = function (t) {
      return function (r, n) {
        n === void 0 && (n = '16px')
        var a = r,
          o = n
        if (typeof r == 'string') {
          if (!wi(r, 'px')) throw new _e(69, t, r)
          a = Bi(r)
        }
        if (typeof n == 'string') {
          if (!wi(n, 'px')) throw new _e(70, t, n)
          o = Bi(n)
        }
        if (typeof a == 'string') throw new _e(71, r, t)
        if (typeof o == 'string') throw new _e(72, n, t)
        return '' + a / o + t
      }
    },
    _i = g2,
    yk = _i('em')
  var bk = _i('rem')
  function Ha(e) {
    return Math.round(e * 255)
  }
  function m2(e, t, r) {
    return Ha(e) + ',' + Ha(t) + ',' + Ha(r)
  }
  function gr(e, t, r, n) {
    if ((n === void 0 && (n = m2), t === 0)) return n(r, r, r)
    var a = (((e % 360) + 360) % 360) / 60,
      o = (1 - Math.abs(2 * r - 1)) * t,
      u = o * (1 - Math.abs((a % 2) - 1)),
      i = 0,
      s = 0,
      d = 0
    a >= 0 && a < 1
      ? ((i = o), (s = u))
      : a >= 1 && a < 2
      ? ((i = u), (s = o))
      : a >= 2 && a < 3
      ? ((s = o), (d = u))
      : a >= 3 && a < 4
      ? ((s = u), (d = o))
      : a >= 4 && a < 5
      ? ((i = u), (d = o))
      : a >= 5 && a < 6 && ((i = o), (d = u))
    var y = r - o / 2,
      A = i + y,
      g = s + y,
      h = d + y
    return n(A, g, h)
  }
  var Ti = {
    aliceblue: 'f0f8ff',
    antiquewhite: 'faebd7',
    aqua: '00ffff',
    aquamarine: '7fffd4',
    azure: 'f0ffff',
    beige: 'f5f5dc',
    bisque: 'ffe4c4',
    black: '000',
    blanchedalmond: 'ffebcd',
    blue: '0000ff',
    blueviolet: '8a2be2',
    brown: 'a52a2a',
    burlywood: 'deb887',
    cadetblue: '5f9ea0',
    chartreuse: '7fff00',
    chocolate: 'd2691e',
    coral: 'ff7f50',
    cornflowerblue: '6495ed',
    cornsilk: 'fff8dc',
    crimson: 'dc143c',
    cyan: '00ffff',
    darkblue: '00008b',
    darkcyan: '008b8b',
    darkgoldenrod: 'b8860b',
    darkgray: 'a9a9a9',
    darkgreen: '006400',
    darkgrey: 'a9a9a9',
    darkkhaki: 'bdb76b',
    darkmagenta: '8b008b',
    darkolivegreen: '556b2f',
    darkorange: 'ff8c00',
    darkorchid: '9932cc',
    darkred: '8b0000',
    darksalmon: 'e9967a',
    darkseagreen: '8fbc8f',
    darkslateblue: '483d8b',
    darkslategray: '2f4f4f',
    darkslategrey: '2f4f4f',
    darkturquoise: '00ced1',
    darkviolet: '9400d3',
    deeppink: 'ff1493',
    deepskyblue: '00bfff',
    dimgray: '696969',
    dimgrey: '696969',
    dodgerblue: '1e90ff',
    firebrick: 'b22222',
    floralwhite: 'fffaf0',
    forestgreen: '228b22',
    fuchsia: 'ff00ff',
    gainsboro: 'dcdcdc',
    ghostwhite: 'f8f8ff',
    gold: 'ffd700',
    goldenrod: 'daa520',
    gray: '808080',
    green: '008000',
    greenyellow: 'adff2f',
    grey: '808080',
    honeydew: 'f0fff0',
    hotpink: 'ff69b4',
    indianred: 'cd5c5c',
    indigo: '4b0082',
    ivory: 'fffff0',
    khaki: 'f0e68c',
    lavender: 'e6e6fa',
    lavenderblush: 'fff0f5',
    lawngreen: '7cfc00',
    lemonchiffon: 'fffacd',
    lightblue: 'add8e6',
    lightcoral: 'f08080',
    lightcyan: 'e0ffff',
    lightgoldenrodyellow: 'fafad2',
    lightgray: 'd3d3d3',
    lightgreen: '90ee90',
    lightgrey: 'd3d3d3',
    lightpink: 'ffb6c1',
    lightsalmon: 'ffa07a',
    lightseagreen: '20b2aa',
    lightskyblue: '87cefa',
    lightslategray: '789',
    lightslategrey: '789',
    lightsteelblue: 'b0c4de',
    lightyellow: 'ffffe0',
    lime: '0f0',
    limegreen: '32cd32',
    linen: 'faf0e6',
    magenta: 'f0f',
    maroon: '800000',
    mediumaquamarine: '66cdaa',
    mediumblue: '0000cd',
    mediumorchid: 'ba55d3',
    mediumpurple: '9370db',
    mediumseagreen: '3cb371',
    mediumslateblue: '7b68ee',
    mediumspringgreen: '00fa9a',
    mediumturquoise: '48d1cc',
    mediumvioletred: 'c71585',
    midnightblue: '191970',
    mintcream: 'f5fffa',
    mistyrose: 'ffe4e1',
    moccasin: 'ffe4b5',
    navajowhite: 'ffdead',
    navy: '000080',
    oldlace: 'fdf5e6',
    olive: '808000',
    olivedrab: '6b8e23',
    orange: 'ffa500',
    orangered: 'ff4500',
    orchid: 'da70d6',
    palegoldenrod: 'eee8aa',
    palegreen: '98fb98',
    paleturquoise: 'afeeee',
    palevioletred: 'db7093',
    papayawhip: 'ffefd5',
    peachpuff: 'ffdab9',
    peru: 'cd853f',
    pink: 'ffc0cb',
    plum: 'dda0dd',
    powderblue: 'b0e0e6',
    purple: '800080',
    rebeccapurple: '639',
    red: 'f00',
    rosybrown: 'bc8f8f',
    royalblue: '4169e1',
    saddlebrown: '8b4513',
    salmon: 'fa8072',
    sandybrown: 'f4a460',
    seagreen: '2e8b57',
    seashell: 'fff5ee',
    sienna: 'a0522d',
    silver: 'c0c0c0',
    skyblue: '87ceeb',
    slateblue: '6a5acd',
    slategray: '708090',
    slategrey: '708090',
    snow: 'fffafa',
    springgreen: '00ff7f',
    steelblue: '4682b4',
    tan: 'd2b48c',
    teal: '008080',
    thistle: 'd8bfd8',
    tomato: 'ff6347',
    turquoise: '40e0d0',
    violet: 'ee82ee',
    wheat: 'f5deb3',
    white: 'fff',
    whitesmoke: 'f5f5f5',
    yellow: 'ff0',
    yellowgreen: '9acd32',
  }
  function y2(e) {
    if (typeof e != 'string') return e
    var t = e.toLowerCase()
    return Ti[t] ? '#' + Ti[t] : e
  }
  var b2 = /^#[a-fA-F0-9]{6}$/,
    A2 = /^#[a-fA-F0-9]{8}$/,
    E2 = /^#[a-fA-F0-9]{3}$/,
    D2 = /^#[a-fA-F0-9]{4}$/,
    Ga = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
    v2 =
      /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,
    C2 =
      /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
    x2 =
      /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i
  function _t(e) {
    if (typeof e != 'string') throw new _e(3)
    var t = y2(e)
    if (t.match(b2))
      return {
        red: parseInt('' + t[1] + t[2], 16),
        green: parseInt('' + t[3] + t[4], 16),
        blue: parseInt('' + t[5] + t[6], 16),
      }
    if (t.match(A2)) {
      var r = parseFloat((parseInt('' + t[7] + t[8], 16) / 255).toFixed(2))
      return {
        red: parseInt('' + t[1] + t[2], 16),
        green: parseInt('' + t[3] + t[4], 16),
        blue: parseInt('' + t[5] + t[6], 16),
        alpha: r,
      }
    }
    if (t.match(E2))
      return {
        red: parseInt('' + t[1] + t[1], 16),
        green: parseInt('' + t[2] + t[2], 16),
        blue: parseInt('' + t[3] + t[3], 16),
      }
    if (t.match(D2)) {
      var n = parseFloat((parseInt('' + t[4] + t[4], 16) / 255).toFixed(2))
      return {
        red: parseInt('' + t[1] + t[1], 16),
        green: parseInt('' + t[2] + t[2], 16),
        blue: parseInt('' + t[3] + t[3], 16),
        alpha: n,
      }
    }
    var a = Ga.exec(t)
    if (a)
      return {
        red: parseInt('' + a[1], 10),
        green: parseInt('' + a[2], 10),
        blue: parseInt('' + a[3], 10),
      }
    var o = v2.exec(t.substring(0, 50))
    if (o)
      return {
        red: parseInt('' + o[1], 10),
        green: parseInt('' + o[2], 10),
        blue: parseInt('' + o[3], 10),
        alpha:
          parseFloat('' + o[4]) > 1
            ? parseFloat('' + o[4]) / 100
            : parseFloat('' + o[4]),
      }
    var u = C2.exec(t)
    if (u) {
      var i = parseInt('' + u[1], 10),
        s = parseInt('' + u[2], 10) / 100,
        d = parseInt('' + u[3], 10) / 100,
        y = 'rgb(' + gr(i, s, d) + ')',
        A = Ga.exec(y)
      if (!A) throw new _e(4, t, y)
      return {
        red: parseInt('' + A[1], 10),
        green: parseInt('' + A[2], 10),
        blue: parseInt('' + A[3], 10),
      }
    }
    var g = x2.exec(t.substring(0, 50))
    if (g) {
      var h = parseInt('' + g[1], 10),
        E = parseInt('' + g[2], 10) / 100,
        b = parseInt('' + g[3], 10) / 100,
        x = 'rgb(' + gr(h, E, b) + ')',
        S = Ga.exec(x)
      if (!S) throw new _e(4, t, x)
      return {
        red: parseInt('' + S[1], 10),
        green: parseInt('' + S[2], 10),
        blue: parseInt('' + S[3], 10),
        alpha:
          parseFloat('' + g[4]) > 1
            ? parseFloat('' + g[4]) / 100
            : parseFloat('' + g[4]),
      }
    }
    throw new _e(5)
  }
  function F2(e) {
    var t = e.red / 255,
      r = e.green / 255,
      n = e.blue / 255,
      a = Math.max(t, r, n),
      o = Math.min(t, r, n),
      u = (a + o) / 2
    if (a === o)
      return e.alpha !== void 0
        ? {hue: 0, saturation: 0, lightness: u, alpha: e.alpha}
        : {hue: 0, saturation: 0, lightness: u}
    var i,
      s = a - o,
      d = u > 0.5 ? s / (2 - a - o) : s / (a + o)
    switch (a) {
      case t:
        i = (r - n) / s + (r < n ? 6 : 0)
        break
      case r:
        i = (n - t) / s + 2
        break
      default:
        i = (t - r) / s + 4
        break
    }
    return (
      (i *= 60),
      e.alpha !== void 0
        ? {hue: i, saturation: d, lightness: u, alpha: e.alpha}
        : {hue: i, saturation: d, lightness: u}
    )
  }
  function rt(e) {
    return F2(_t(e))
  }
  var S2 = function (t) {
      return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6]
        ? '#' + t[1] + t[3] + t[5]
        : t
    },
    Va = S2
  function gt(e) {
    var t = e.toString(16)
    return t.length === 1 ? '0' + t : t
  }
  function Wa(e) {
    return gt(Math.round(e * 255))
  }
  function w2(e, t, r) {
    return Va('#' + Wa(e) + Wa(t) + Wa(r))
  }
  function en(e, t, r) {
    return gr(e, t, r, w2)
  }
  function B2(e, t, r) {
    if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number')
      return en(e, t, r)
    if (typeof e == 'object' && t === void 0 && r === void 0)
      return en(e.hue, e.saturation, e.lightness)
    throw new _e(1)
  }
  function T2(e, t, r, n) {
    if (
      typeof e == 'number' &&
      typeof t == 'number' &&
      typeof r == 'number' &&
      typeof n == 'number'
    )
      return n >= 1 ? en(e, t, r) : 'rgba(' + gr(e, t, r) + ',' + n + ')'
    if (typeof e == 'object' && t === void 0 && r === void 0 && n === void 0)
      return e.alpha >= 1
        ? en(e.hue, e.saturation, e.lightness)
        : 'rgba(' + gr(e.hue, e.saturation, e.lightness) + ',' + e.alpha + ')'
    throw new _e(2)
  }
  function Ka(e, t, r) {
    if (typeof e == 'number' && typeof t == 'number' && typeof r == 'number')
      return Va('#' + gt(e) + gt(t) + gt(r))
    if (typeof e == 'object' && t === void 0 && r === void 0)
      return Va('#' + gt(e.red) + gt(e.green) + gt(e.blue))
    throw new _e(6)
  }
  function Le(e, t, r, n) {
    if (typeof e == 'string' && typeof t == 'number') {
      var a = _t(e)
      return 'rgba(' + a.red + ',' + a.green + ',' + a.blue + ',' + t + ')'
    } else {
      if (
        typeof e == 'number' &&
        typeof t == 'number' &&
        typeof r == 'number' &&
        typeof n == 'number'
      )
        return n >= 1
          ? Ka(e, t, r)
          : 'rgba(' + e + ',' + t + ',' + r + ',' + n + ')'
      if (typeof e == 'object' && t === void 0 && r === void 0 && n === void 0)
        return e.alpha >= 1
          ? Ka(e.red, e.green, e.blue)
          : 'rgba(' + e.red + ',' + e.green + ',' + e.blue + ',' + e.alpha + ')'
    }
    throw new _e(7)
  }
  var _2 = function (t) {
      return (
        typeof t.red == 'number' &&
        typeof t.green == 'number' &&
        typeof t.blue == 'number' &&
        (typeof t.alpha != 'number' || typeof t.alpha > 'u')
      )
    },
    O2 = function (t) {
      return (
        typeof t.red == 'number' &&
        typeof t.green == 'number' &&
        typeof t.blue == 'number' &&
        typeof t.alpha == 'number'
      )
    },
    R2 = function (t) {
      return (
        typeof t.hue == 'number' &&
        typeof t.saturation == 'number' &&
        typeof t.lightness == 'number' &&
        (typeof t.alpha != 'number' || typeof t.alpha > 'u')
      )
    },
    P2 = function (t) {
      return (
        typeof t.hue == 'number' &&
        typeof t.saturation == 'number' &&
        typeof t.lightness == 'number' &&
        typeof t.alpha == 'number'
      )
    }
  function nt(e) {
    if (typeof e != 'object') throw new _e(8)
    if (O2(e)) return Le(e)
    if (_2(e)) return Ka(e)
    if (P2(e)) return T2(e)
    if (R2(e)) return B2(e)
    throw new _e(8)
  }
  function Oi(e, t, r) {
    return function () {
      var a = r.concat(Array.prototype.slice.call(arguments))
      return a.length >= t ? e.apply(this, a) : Oi(e, t, a)
    }
  }
  function Pe(e) {
    return Oi(e, e.length, [])
  }
  function I2(e, t) {
    if (t === 'transparent') return t
    var r = rt(t)
    return nt(Fe({}, r, {hue: r.hue + parseFloat(e)}))
  }
  var Ak = Pe(I2)
  function Ot(e, t, r) {
    return Math.max(e, Math.min(t, r))
  }
  function k2(e, t) {
    if (t === 'transparent') return t
    var r = rt(t)
    return nt(Fe({}, r, {lightness: Ot(0, 1, r.lightness - parseFloat(e))}))
  }
  var N2 = Pe(k2),
    $e = N2
  function j2(e, t) {
    if (t === 'transparent') return t
    var r = rt(t)
    return nt(Fe({}, r, {saturation: Ot(0, 1, r.saturation - parseFloat(e))}))
  }
  var Ek = Pe(j2)
  function M2(e, t) {
    if (t === 'transparent') return t
    var r = rt(t)
    return nt(Fe({}, r, {lightness: Ot(0, 1, r.lightness + parseFloat(e))}))
  }
  var q2 = Pe(M2),
    at = q2
  function L2(e, t, r) {
    if (t === 'transparent') return r
    if (r === 'transparent') return t
    if (e === 0) return r
    var n = _t(t),
      a = Fe({}, n, {alpha: typeof n.alpha == 'number' ? n.alpha : 1}),
      o = _t(r),
      u = Fe({}, o, {alpha: typeof o.alpha == 'number' ? o.alpha : 1}),
      i = a.alpha - u.alpha,
      s = parseFloat(e) * 2 - 1,
      d = s * i === -1 ? s : s + i,
      y = 1 + s * i,
      A = (d / y + 1) / 2,
      g = 1 - A,
      h = {
        red: Math.floor(a.red * A + u.red * g),
        green: Math.floor(a.green * A + u.green * g),
        blue: Math.floor(a.blue * A + u.blue * g),
        alpha: a.alpha * parseFloat(e) + u.alpha * (1 - parseFloat(e)),
      }
    return Le(h)
  }
  var $2 = Pe(L2),
    Ri = $2
  function U2(e, t) {
    if (t === 'transparent') return t
    var r = _t(t),
      n = typeof r.alpha == 'number' ? r.alpha : 1,
      a = Fe({}, r, {alpha: Ot(0, 1, (n * 100 + parseFloat(e) * 100) / 100)})
    return Le(a)
  }
  var z2 = Pe(U2),
    mr = z2
  function H2(e, t) {
    if (t === 'transparent') return t
    var r = rt(t)
    return nt(Fe({}, r, {saturation: Ot(0, 1, r.saturation + parseFloat(e))}))
  }
  var Dk = Pe(H2)
  function G2(e, t) {
    return t === 'transparent' ? t : nt(Fe({}, rt(t), {hue: parseFloat(e)}))
  }
  var vk = Pe(G2)
  function W2(e, t) {
    return t === 'transparent'
      ? t
      : nt(Fe({}, rt(t), {lightness: parseFloat(e)}))
  }
  var Ck = Pe(W2)
  function V2(e, t) {
    return t === 'transparent'
      ? t
      : nt(Fe({}, rt(t), {saturation: parseFloat(e)}))
  }
  var xk = Pe(V2)
  function K2(e, t) {
    return t === 'transparent' ? t : Ri(parseFloat(e), 'rgb(0, 0, 0)', t)
  }
  var Fk = Pe(K2)
  function Y2(e, t) {
    return t === 'transparent' ? t : Ri(parseFloat(e), 'rgb(255, 255, 255)', t)
  }
  var Sk = Pe(Y2)
  function X2(e, t) {
    if (t === 'transparent') return t
    var r = _t(t),
      n = typeof r.alpha == 'number' ? r.alpha : 1,
      a = Fe({}, r, {
        alpha: Ot(0, 1, +(n * 100 - parseFloat(e) * 100).toFixed(2) / 100),
      })
    return Le(a)
  }
  var J2 = Pe(X2),
    pe = J2
  l()
  c()
  p()
  var oe = (() => {
    let e
    return (
      typeof window < 'u'
        ? (e = window)
        : typeof globalThis < 'u'
        ? (e = globalThis)
        : typeof window < 'u'
        ? (e = window)
        : typeof self < 'u'
        ? (e = self)
        : (e = {}),
      e
    )
  })()
  var zm = fe(Ro(), 1)
  l()
  c()
  p()
  var Ux = Object.create,
    Wp = Object.defineProperty,
    zx = Object.getOwnPropertyDescriptor,
    Hx = Object.getOwnPropertyNames,
    Gx = Object.getPrototypeOf,
    Wx = Object.prototype.hasOwnProperty,
    Vx = (e, t) => () => (t || e((t = {exports: {}}).exports, t), t.exports),
    Kx = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let a of Hx(t))
          !Wx.call(e, a) &&
            a !== r &&
            Wp(e, a, {
              get: () => t[a],
              enumerable: !(n = zx(t, a)) || n.enumerable,
            })
      return e
    },
    Yx = (e, t, r) => (
      (r = e != null ? Ux(Gx(e)) : {}),
      Kx(
        t || !e || !e.__esModule
          ? Wp(r, 'default', {value: e, enumerable: !0})
          : r,
        e
      )
    ),
    Xx = Vx((e) => {
      Object.defineProperty(e, '__esModule', {value: !0}),
        (e.isEqual = (function () {
          var t = Object.prototype.toString,
            r = Object.getPrototypeOf,
            n = Object.getOwnPropertySymbols
              ? function (a) {
                  return Object.keys(a).concat(Object.getOwnPropertySymbols(a))
                }
              : Object.keys
          return function (a, o) {
            return (function u(i, s, d) {
              var y,
                A,
                g,
                h = t.call(i),
                E = t.call(s)
              if (i === s) return !0
              if (i == null || s == null) return !1
              if (d.indexOf(i) > -1 && d.indexOf(s) > -1) return !0
              if (
                (d.push(i, s),
                h != E ||
                  ((y = n(i)),
                  (A = n(s)),
                  y.length != A.length ||
                    y.some(function (b) {
                      return !u(i[b], s[b], d)
                    })))
              )
                return !1
              switch (h.slice(8, -1)) {
                case 'Symbol':
                  return i.valueOf() == s.valueOf()
                case 'Date':
                case 'Number':
                  return +i == +s || (+i != +i && +s != +s)
                case 'RegExp':
                case 'Function':
                case 'String':
                case 'Boolean':
                  return '' + i == '' + s
                case 'Set':
                case 'Map':
                  ;(y = i.entries()), (A = s.entries())
                  do if (!u((g = y.next()).value, A.next().value, d)) return !1
                  while (!g.done)
                  return !0
                case 'ArrayBuffer':
                  ;(i = new Uint8Array(i)), (s = new Uint8Array(s))
                case 'DataView':
                  ;(i = new Uint8Array(i.buffer)),
                    (s = new Uint8Array(s.buffer))
                case 'Float32Array':
                case 'Float64Array':
                case 'Int8Array':
                case 'Int16Array':
                case 'Int32Array':
                case 'Uint8Array':
                case 'Uint16Array':
                case 'Uint32Array':
                case 'Uint8ClampedArray':
                case 'Arguments':
                case 'Array':
                  if (i.length != s.length) return !1
                  for (g = 0; g < i.length; g++)
                    if (
                      (g in i || g in s) &&
                      (g in i != g in s || !u(i[g], s[g], d))
                    )
                      return !1
                  return !0
                case 'Object':
                  return u(r(i), r(s), d)
                default:
                  return !1
              }
            })(a, o, [])
          }
        })())
    })
  var Gp = Yx(Xx()),
    Vp = (e) => e.map((t) => typeof t < 'u').filter(Boolean).length,
    Jx = (e, t) => {
      let {exists: r, eq: n, neq: a, truthy: o} = e
      if (Vp([r, n, a, o]) > 1)
        throw new Error(
          `Invalid conditional test ${JSON.stringify({
            exists: r,
            eq: n,
            neq: a,
          })}`
        )
      if (typeof n < 'u') return (0, Gp.isEqual)(t, n)
      if (typeof a < 'u') return !(0, Gp.isEqual)(t, a)
      if (typeof r < 'u') {
        let u = typeof t < 'u'
        return r ? u : !u
      }
      return typeof o > 'u' || o ? !!t : !t
    },
    Po = (e, t, r) => {
      if (!e.if) return !0
      let {arg: n, global: a} = e.if
      if (Vp([n, a]) !== 1)
        throw new Error(
          `Invalid conditional value ${JSON.stringify({arg: n, global: a})}`
        )
      let o = n ? t[n] : r[a]
      return Jx(e.if, o)
    }
  l()
  c()
  p()
  var tG = __STORYBOOKCLIENTLOGGER__,
    {
      deprecate: ye,
      logger: Me,
      once: xn,
      pretty: Qx,
    } = __STORYBOOKCLIENTLOGGER__
  l()
  c()
  p()
  St()
  function At() {
    return (
      (At =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
      At.apply(this, arguments)
    )
  }
  var Zx = ['children', 'options'],
    Kp = [
      'allowFullScreen',
      'allowTransparency',
      'autoComplete',
      'autoFocus',
      'autoPlay',
      'cellPadding',
      'cellSpacing',
      'charSet',
      'className',
      'classId',
      'colSpan',
      'contentEditable',
      'contextMenu',
      'crossOrigin',
      'encType',
      'formAction',
      'formEncType',
      'formMethod',
      'formNoValidate',
      'formTarget',
      'frameBorder',
      'hrefLang',
      'inputMode',
      'keyParams',
      'keyType',
      'marginHeight',
      'marginWidth',
      'maxLength',
      'mediaGroup',
      'minLength',
      'noValidate',
      'radioGroup',
      'readOnly',
      'rowSpan',
      'spellCheck',
      'srcDoc',
      'srcLang',
      'srcSet',
      'tabIndex',
      'useMap',
    ].reduce((e, t) => ((e[t.toLowerCase()] = t), e), {for: 'htmlFor'}),
    Yp = {amp: '&', apos: "'", gt: '>', lt: '<', nbsp: '\xA0', quot: '\u201C'},
    eF = ['style', 'script'],
    tF =
      /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,
    rF = /mailto:/i,
    nF = /\n{2,}$/,
    td = /^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,
    aF = /^ *> ?/gm,
    oF = /^ {2,}\n/,
    uF = /^(?:( *[-*_])){3,} *(?:\n *)+\n/,
    rd = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,
    nd = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,
    iF = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
    sF = /^(?:\n *)*\n/,
    lF = /\r\n?/g,
    cF = /^\[\^([^\]]+)](:.*)\n/,
    pF = /^\[\^([^\]]+)]/,
    dF = /\f/g,
    fF = /^\s*?\[(x|\s)\]/,
    ad = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
    od = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,
    Mo =
      /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,
    hF = /&([a-zA-Z]+);/g,
    ud = /^<!--[\s\S]*?(?:-->)/,
    gF = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/,
    qo =
      /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,
    mF = /^\{.*\}$/,
    yF = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
    bF = /^<([^ >]+@[^ >]+)>/,
    AF = /^<([^ >]+:\/[^ >]+)>/,
    EF = /-([a-z])?/gi,
    id = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,
    DF = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,
    vF = /^!\[([^\]]*)\] ?\[([^\]]*)\]/,
    CF = /^\[([^\]]*)\] ?\[([^\]]*)\]/,
    xF = /(\[|\])/g,
    FF = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,
    SF = /\t/g,
    wF = /^ *\| */,
    BF = /(^ *\||\| *$)/g,
    TF = / *$/,
    _F = /^ *:-+: *$/,
    OF = /^ *:-+ *$/,
    RF = /^ *-+: *$/,
    PF =
      /^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,
    IF =
      /^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,
    kF = /^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/,
    NF = /^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,
    jF = /^\\([^0-9A-Za-z\s])/,
    MF =
      /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,
    qF = /^\n+/,
    LF = /^([ \t]*)/,
    $F = /\\([^\\])/g,
    Xp = / *\n+$/,
    UF = /(?:^|\n)( *)$/,
    Lo = '(?:\\d+\\.)',
    $o = '(?:[*+-])'
  function sd(e) {
    return '( *)(' + (e === 1 ? Lo : $o) + ') +'
  }
  var ld = sd(1),
    cd = sd(2)
  function pd(e) {
    return new RegExp('^' + (e === 1 ? ld : cd))
  }
  var zF = pd(1),
    HF = pd(2)
  function dd(e) {
    return new RegExp(
      '^' +
        (e === 1 ? ld : cd) +
        '[^\\n]*(?:\\n(?!\\1' +
        (e === 1 ? Lo : $o) +
        ' )[^\\n]*)*(\\n|$)',
      'gm'
    )
  }
  var fd = dd(1),
    hd = dd(2)
  function gd(e) {
    let t = e === 1 ? Lo : $o
    return new RegExp(
      '^( *)(' +
        t +
        ') [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1' +
        t +
        ' (?!' +
        t +
        ' ))\\n*|\\s*\\n*$)'
    )
  }
  var md = gd(1),
    yd = gd(2)
  function Jp(e, t) {
    let r = t === 1,
      n = r ? md : yd,
      a = r ? fd : hd,
      o = r ? zF : HF
    return {
      t(u, i, s) {
        let d = UF.exec(s)
        return d && (i.o || (!i._ && !i.u)) ? n.exec((u = d[1] + u)) : null
      },
      i: Z.HIGH,
      l(u, i, s) {
        let d = r ? +u[2] : void 0,
          y = u[0]
            .replace(
              nF,
              `
`
            )
            .match(a),
          A = !1
        return {
          p: y.map(function (g, h) {
            let E = o.exec(g)[0].length,
              b = new RegExp('^ {1,' + E + '}', 'gm'),
              x = g.replace(b, '').replace(o, ''),
              S = h === y.length - 1,
              P =
                x.indexOf(`

`) !== -1 ||
                (S && A)
            A = P
            let N = s._,
              $ = s.o,
              w
            ;(s.o = !0),
              P
                ? ((s._ = !1),
                  (w = x.replace(
                    Xp,
                    `

`
                  )))
                : ((s._ = !0), (w = x.replace(Xp, '')))
            let j = i(w, s)
            return (s._ = N), (s.o = $), j
          }),
          m: r,
          g: d,
        }
      },
      h: (u, i, s) =>
        e(
          u.m ? 'ol' : 'ul',
          {key: s.k, start: u.g},
          u.p.map(function (d, y) {
            return e('li', {key: y}, i(d, s))
          })
        ),
    }
  }
  var GF = /^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
    WF = /^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
    bd = [td, rd, nd, ad, od, ud, id, fd, md, hd, yd],
    VF = [...bd, /^[^\n]+(?:  \n|\n{2,})/, Mo, qo]
  function KF(e) {
    return e
      .replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, 'a')
      .replace(/[çÇ]/g, 'c')
      .replace(/[ðÐ]/g, 'd')
      .replace(/[ÈÉÊËéèêë]/g, 'e')
      .replace(/[ÏïÎîÍíÌì]/g, 'i')
      .replace(/[Ññ]/g, 'n')
      .replace(/[øØœŒÕõÔôÓóÒò]/g, 'o')
      .replace(/[ÜüÛûÚúÙù]/g, 'u')
      .replace(/[ŸÿÝý]/g, 'y')
      .replace(/[^a-z0-9- ]/gi, '')
      .replace(/ /gi, '-')
      .toLowerCase()
  }
  function YF(e) {
    return RF.test(e)
      ? 'right'
      : _F.test(e)
      ? 'center'
      : OF.test(e)
      ? 'left'
      : null
  }
  function Qp(e, t, r) {
    let n = r.v
    r.v = !0
    let a = t(e.trim(), r)
    r.v = n
    let o = [[]]
    return (
      a.forEach(function (u, i) {
        u.type === 'tableSeparator'
          ? i !== 0 && i !== a.length - 1 && o.push([])
          : (u.type !== 'text' ||
              (a[i + 1] != null && a[i + 1].type !== 'tableSeparator') ||
              (u.$ = u.$.replace(TF, '')),
            o[o.length - 1].push(u))
      }),
      o
    )
  }
  function XF(e, t, r) {
    r._ = !0
    let n = Qp(e[1], t, r),
      a = e[2].replace(BF, '').split('|').map(YF),
      o = (function (u, i, s) {
        return u
          .trim()
          .split(
            `
`
          )
          .map(function (d) {
            return Qp(d, i, s)
          })
      })(e[3], t, r)
    return (r._ = !1), {S: a, A: o, L: n, type: 'table'}
  }
  function Zp(e, t) {
    return e.S[t] == null ? {} : {textAlign: e.S[t]}
  }
  function ut(e) {
    return function (t, r) {
      return r._ ? e.exec(t) : null
    }
  }
  function it(e) {
    return function (t, r) {
      return r._ || r.u ? e.exec(t) : null
    }
  }
  function Ze(e) {
    return function (t, r) {
      return r._ || r.u ? null : e.exec(t)
    }
  }
  function Br(e) {
    return function (t) {
      return e.exec(t)
    }
  }
  function JF(e, t, r) {
    if (
      t._ ||
      t.u ||
      (r &&
        !r.endsWith(`
`))
    )
      return null
    let n = ''
    e.split(
      `
`
    ).every(
      (o) =>
        !bd.some((u) => u.test(o)) &&
        ((n +=
          o +
          `
`),
        o.trim())
    )
    let a = n.trimEnd()
    return a == '' ? null : [n, a]
  }
  function $t(e) {
    try {
      if (
        decodeURIComponent(e)
          .replace(/[^A-Za-z0-9/:]/g, '')
          .match(/^\s*(javascript|vbscript|data(?!:image)):/i)
      )
        return null
    } catch {
      return null
    }
    return e
  }
  function ed(e) {
    return e.replace($F, '$1')
  }
  function Fn(e, t, r) {
    let n = r._ || !1,
      a = r.u || !1
    ;(r._ = !0), (r.u = !0)
    let o = e(t, r)
    return (r._ = n), (r.u = a), o
  }
  function QF(e, t, r) {
    let n = r._ || !1,
      a = r.u || !1
    ;(r._ = !1), (r.u = !0)
    let o = e(t, r)
    return (r._ = n), (r.u = a), o
  }
  function ZF(e, t, r) {
    return (
      (r._ = !1),
      e(
        t +
          `

`,
        r
      )
    )
  }
  var Io = (e, t, r) => ({$: Fn(t, e[1], r)})
  function ko() {
    return {}
  }
  function No() {
    return null
  }
  function eS(...e) {
    return e.filter(Boolean).join(' ')
  }
  function jo(e, t, r) {
    let n = e,
      a = t.split('.')
    for (; a.length && ((n = n[a[0]]), n !== void 0); ) a.shift()
    return n || r
  }
  var Z
  function tS(e, t = {}) {
    ;(t.overrides = t.overrides || {}),
      (t.slugify = t.slugify || KF),
      (t.namedCodesToUnicode = t.namedCodesToUnicode
        ? At({}, Yp, t.namedCodesToUnicode)
        : Yp)
    let r = t.createElement || ma
    function n(h, E, ...b) {
      let x = jo(t.overrides, `${h}.props`, {})
      return r(
        (function (S, P) {
          let N = jo(P, S)
          return N
            ? typeof N == 'function' || (typeof N == 'object' && 'render' in N)
              ? N
              : jo(P, `${S}.component`, S)
            : S
        })(h, t.overrides),
        At({}, E, x, {className: eS(E?.className, x.className) || void 0}),
        ...b
      )
    }
    function a(h) {
      let E = !1
      t.forceInline ? (E = !0) : t.forceBlock || (E = FF.test(h) === !1)
      let b = y(
        d(
          E
            ? h
            : `${h.trimEnd().replace(qF, '')}

`,
          {_: E}
        )
      )
      for (; typeof b[b.length - 1] == 'string' && !b[b.length - 1].trim(); )
        b.pop()
      if (t.wrapper === null) return b
      let x = t.wrapper || (E ? 'span' : 'div'),
        S
      if (b.length > 1 || t.forceWrapper) S = b
      else {
        if (b.length === 1)
          return (
            (S = b[0]), typeof S == 'string' ? n('span', {key: 'outer'}, S) : S
          )
        S = null
      }
      return ma(x, {key: 'outer'}, S)
    }
    function o(h) {
      let E = h.match(tF)
      return E
        ? E.reduce(function (b, x, S) {
            let P = x.indexOf('=')
            if (P !== -1) {
              let N = (function (I) {
                  return (
                    I.indexOf('-') !== -1 &&
                      I.match(gF) === null &&
                      (I = I.replace(EF, function (z, K) {
                        return K.toUpperCase()
                      })),
                    I
                  )
                })(x.slice(0, P)).trim(),
                $ = (function (I) {
                  let z = I[0]
                  return (z === '"' || z === "'") &&
                    I.length >= 2 &&
                    I[I.length - 1] === z
                    ? I.slice(1, -1)
                    : I
                })(x.slice(P + 1).trim()),
                w = Kp[N] || N,
                j = (b[w] = (function (I, z) {
                  return I === 'style'
                    ? z.split(/;\s?/).reduce(function (K, U) {
                        let ue = U.slice(0, U.indexOf(':'))
                        return (
                          (K[
                            ue.replace(/(-[a-z])/g, (te) => te[1].toUpperCase())
                          ] = U.slice(ue.length + 1).trim()),
                          K
                        )
                      }, {})
                    : I === 'href'
                    ? $t(z)
                    : (z.match(mF) && (z = z.slice(1, z.length - 1)),
                      z === 'true' || (z !== 'false' && z))
                })(N, $))
              typeof j == 'string' &&
                (Mo.test(j) || qo.test(j)) &&
                (b[w] = he(a(j.trim()), {key: S}))
            } else x !== 'style' && (b[Kp[x] || x] = !0)
            return b
          }, {})
        : null
    }
    let u = [],
      i = {},
      s = {
        blockQuote: {
          t: Ze(td),
          i: Z.HIGH,
          l: (h, E, b) => ({$: E(h[0].replace(aF, ''), b)}),
          h: (h, E, b) => n('blockquote', {key: b.k}, E(h.$, b)),
        },
        breakLine: {
          t: Br(oF),
          i: Z.HIGH,
          l: ko,
          h: (h, E, b) => n('br', {key: b.k}),
        },
        breakThematic: {
          t: Ze(uF),
          i: Z.HIGH,
          l: ko,
          h: (h, E, b) => n('hr', {key: b.k}),
        },
        codeBlock: {
          t: Ze(nd),
          i: Z.MAX,
          l: (h) => ({
            $: h[0].replace(/^ {4}/gm, '').replace(/\n+$/, ''),
            M: void 0,
          }),
          h: (h, E, b) =>
            n(
              'pre',
              {key: b.k},
              n('code', At({}, h.I, {className: h.M ? `lang-${h.M}` : ''}), h.$)
            ),
        },
        codeFenced: {
          t: Ze(rd),
          i: Z.MAX,
          l: (h) => ({
            I: o(h[3] || ''),
            $: h[4],
            M: h[2] || void 0,
            type: 'codeBlock',
          }),
        },
        codeInline: {
          t: it(iF),
          i: Z.LOW,
          l: (h) => ({$: h[2]}),
          h: (h, E, b) => n('code', {key: b.k}, h.$),
        },
        footnote: {
          t: Ze(cF),
          i: Z.MAX,
          l: (h) => (u.push({O: h[2], B: h[1]}), {}),
          h: No,
        },
        footnoteReference: {
          t: ut(pF),
          i: Z.HIGH,
          l: (h) => ({$: h[1], R: `#${t.slugify(h[1])}`}),
          h: (h, E, b) =>
            n('a', {key: b.k, href: $t(h.R)}, n('sup', {key: b.k}, h.$)),
        },
        gfmTask: {
          t: ut(fF),
          i: Z.HIGH,
          l: (h) => ({T: h[1].toLowerCase() === 'x'}),
          h: (h, E, b) =>
            n('input', {
              checked: h.T,
              key: b.k,
              readOnly: !0,
              type: 'checkbox',
            }),
        },
        heading: {
          t: Ze(ad),
          i: Z.HIGH,
          l: (h, E, b) => ({
            $: Fn(E, h[2], b),
            j: t.slugify(h[2]),
            C: h[1].length,
          }),
          h: (h, E, b) => n(`h${h.C}`, {id: h.j, key: b.k}, E(h.$, b)),
        },
        headingSetext: {
          t: Ze(od),
          i: Z.MAX,
          l: (h, E, b) => ({
            $: Fn(E, h[1], b),
            C: h[2] === '=' ? 1 : 2,
            type: 'heading',
          }),
        },
        htmlComment: {t: Br(ud), i: Z.HIGH, l: () => ({}), h: No},
        image: {
          t: it(WF),
          i: Z.HIGH,
          l: (h) => ({D: h[1], R: ed(h[2]), N: h[3]}),
          h: (h, E, b) =>
            n('img', {
              key: b.k,
              alt: h.D || void 0,
              title: h.N || void 0,
              src: $t(h.R),
            }),
        },
        link: {
          t: ut(GF),
          i: Z.LOW,
          l: (h, E, b) => ({$: QF(E, h[1], b), R: ed(h[2]), N: h[3]}),
          h: (h, E, b) =>
            n('a', {key: b.k, href: $t(h.R), title: h.N}, E(h.$, b)),
        },
        linkAngleBraceStyleDetector: {
          t: ut(AF),
          i: Z.MAX,
          l: (h) => ({$: [{$: h[1], type: 'text'}], R: h[1], type: 'link'}),
        },
        linkBareUrlDetector: {
          t: (h, E) => (E.Z ? null : ut(yF)(h, E)),
          i: Z.MAX,
          l: (h) => ({
            $: [{$: h[1], type: 'text'}],
            R: h[1],
            N: void 0,
            type: 'link',
          }),
        },
        linkMailtoDetector: {
          t: ut(bF),
          i: Z.MAX,
          l(h) {
            let E = h[1],
              b = h[1]
            return (
              rF.test(b) || (b = 'mailto:' + b),
              {
                $: [{$: E.replace('mailto:', ''), type: 'text'}],
                R: b,
                type: 'link',
              }
            )
          },
        },
        orderedList: Jp(n, 1),
        unorderedList: Jp(n, 2),
        newlineCoalescer: {
          t: Ze(sF),
          i: Z.LOW,
          l: ko,
          h: () => `
`,
        },
        paragraph: {
          t: JF,
          i: Z.LOW,
          l: Io,
          h: (h, E, b) => n('p', {key: b.k}, E(h.$, b)),
        },
        ref: {
          t: ut(DF),
          i: Z.MAX,
          l: (h) => ((i[h[1]] = {R: h[2], N: h[4]}), {}),
          h: No,
        },
        refImage: {
          t: it(vF),
          i: Z.MAX,
          l: (h) => ({D: h[1] || void 0, F: h[2]}),
          h: (h, E, b) =>
            n('img', {key: b.k, alt: h.D, src: $t(i[h.F].R), title: i[h.F].N}),
        },
        refLink: {
          t: ut(CF),
          i: Z.MAX,
          l: (h, E, b) => ({
            $: E(h[1], b),
            P: E(h[0].replace(xF, '\\$1'), b),
            F: h[2],
          }),
          h: (h, E, b) =>
            i[h.F]
              ? n(
                  'a',
                  {key: b.k, href: $t(i[h.F].R), title: i[h.F].N},
                  E(h.$, b)
                )
              : n('span', {key: b.k}, E(h.P, b)),
        },
        table: {
          t: Ze(id),
          i: Z.HIGH,
          l: XF,
          h: (h, E, b) =>
            n(
              'table',
              {key: b.k},
              n(
                'thead',
                null,
                n(
                  'tr',
                  null,
                  h.L.map(function (x, S) {
                    return n('th', {key: S, style: Zp(h, S)}, E(x, b))
                  })
                )
              ),
              n(
                'tbody',
                null,
                h.A.map(function (x, S) {
                  return n(
                    'tr',
                    {key: S},
                    x.map(function (P, N) {
                      return n('td', {key: N, style: Zp(h, N)}, E(P, b))
                    })
                  )
                })
              )
            ),
        },
        tableSeparator: {
          t: function (h, E) {
            return E.v ? wF.exec(h) : null
          },
          i: Z.HIGH,
          l: function () {
            return {type: 'tableSeparator'}
          },
          h: () => ' | ',
        },
        text: {
          t: Br(MF),
          i: Z.MIN,
          l: (h) => ({
            $: h[0].replace(hF, (E, b) =>
              t.namedCodesToUnicode[b] ? t.namedCodesToUnicode[b] : E
            ),
          }),
          h: (h) => h.$,
        },
        textBolded: {
          t: it(PF),
          i: Z.MED,
          l: (h, E, b) => ({$: E(h[2], b)}),
          h: (h, E, b) => n('strong', {key: b.k}, E(h.$, b)),
        },
        textEmphasized: {
          t: it(IF),
          i: Z.LOW,
          l: (h, E, b) => ({$: E(h[2], b)}),
          h: (h, E, b) => n('em', {key: b.k}, E(h.$, b)),
        },
        textEscaped: {
          t: it(jF),
          i: Z.HIGH,
          l: (h) => ({$: h[1], type: 'text'}),
        },
        textMarked: {
          t: it(kF),
          i: Z.LOW,
          l: Io,
          h: (h, E, b) => n('mark', {key: b.k}, E(h.$, b)),
        },
        textStrikethroughed: {
          t: it(NF),
          i: Z.LOW,
          l: Io,
          h: (h, E, b) => n('del', {key: b.k}, E(h.$, b)),
        },
      }
    t.disableParsingRawHTML !== !0 &&
      ((s.htmlBlock = {
        t: Br(Mo),
        i: Z.HIGH,
        l(h, E, b) {
          let [, x] = h[3].match(LF),
            S = new RegExp(`^${x}`, 'gm'),
            P = h[3].replace(S, ''),
            N = (($ = P), VF.some((z) => z.test($)) ? ZF : Fn)
          var $
          let w = h[1].toLowerCase(),
            j = eF.indexOf(w) !== -1
          b.Z = b.Z || w === 'a'
          let I = j ? h[3] : N(E, P, b)
          return (b.Z = !1), {I: o(h[2]), $: I, G: j, H: j ? w : h[1]}
        },
        h: (h, E, b) => n(h.H, At({key: b.k}, h.I), h.G ? h.$ : E(h.$, b)),
      }),
      (s.htmlSelfClosing = {
        t: Br(qo),
        i: Z.HIGH,
        l: (h) => ({I: o(h[2] || ''), H: h[1]}),
        h: (h, E, b) => n(h.H, At({}, h.I, {key: b.k})),
      }))
    let d = (function (h) {
        let E = Object.keys(h)
        function b(x, S) {
          let P = [],
            N = ''
          for (; x; ) {
            let $ = 0
            for (; $ < E.length; ) {
              let w = E[$],
                j = h[w],
                I = j.t(x, S, N)
              if (I) {
                let z = I[0]
                x = x.substring(z.length)
                let K = j.l(I, b, S)
                K.type == null && (K.type = w), P.push(K), (N = z)
                break
              }
              $++
            }
          }
          return P
        }
        return (
          E.sort(function (x, S) {
            let P = h[x].i,
              N = h[S].i
            return P !== N ? P - N : x < S ? -1 : 1
          }),
          function (x, S) {
            return b(
              (function (P) {
                return P.replace(
                  lF,
                  `
`
                )
                  .replace(dF, '')
                  .replace(SF, '    ')
              })(x),
              S
            )
          }
        )
      })(s),
      y =
        ((A = (function (h) {
          return function (E, b, x) {
            return h[E.type].h(E, b, x)
          }
        })(s)),
        function h(E, b = {}) {
          if (Array.isArray(E)) {
            let x = b.k,
              S = [],
              P = !1
            for (let N = 0; N < E.length; N++) {
              b.k = N
              let $ = h(E[N], b),
                w = typeof $ == 'string'
              w && P ? (S[S.length - 1] += $) : $ !== null && S.push($), (P = w)
            }
            return (b.k = x), S
          }
          return A(E, h, b)
        })
    var A
    let g = a(e)
    return u.length
      ? n(
          'div',
          null,
          g,
          n(
            'footer',
            {key: 'footer'},
            u.map(function (h) {
              return n(
                'div',
                {id: t.slugify(h.B), key: h.B},
                h.B,
                y(d(h.O, {_: !0}))
              )
            })
          )
        )
      : g
  }
  ;(function (e) {
    ;(e[(e.MAX = 0)] = 'MAX'),
      (e[(e.HIGH = 1)] = 'HIGH'),
      (e[(e.MED = 2)] = 'MED'),
      (e[(e.LOW = 3)] = 'LOW'),
      (e[(e.MIN = 4)] = 'MIN')
  })(Z || (Z = {}))
  var Uo = (e) => {
    let {children: t, options: r} = e,
      n = (function (a, o) {
        if (a == null) return {}
        var u,
          i,
          s = {},
          d = Object.keys(a)
        for (i = 0; i < d.length; i++)
          o.indexOf((u = d[i])) >= 0 || (s[u] = a[u])
        return s
      })(e, Zx)
    return he(tS(t, r), n)
  }
  var Hm = fe(Sn(), 1),
    Gm = fe(qd(), 1),
    Wm = fe(Gf(), 1)
  l()
  c()
  p()
  l()
  c()
  p()
  l()
  c()
  p()
  l()
  c()
  p()
  l()
  c()
  p()
  l()
  c()
  p()
  var jV = __STORYBOOKCHANNELS__,
    {Channel: Tn} = __STORYBOOKCHANNELS__
  l()
  c()
  p()
  var UV = __STORYBOOKCOREEVENTS__,
    {
      CHANNEL_CREATED: zV,
      CONFIG_ERROR: V5,
      CURRENT_STORY_WAS_SET: K5,
      DOCS_PREPARED: Y5,
      DOCS_RENDERED: X5,
      FORCE_REMOUNT: J5,
      FORCE_RE_RENDER: Go,
      GLOBALS_UPDATED: _n,
      IGNORED_EXCEPTION: HV,
      NAVIGATE_URL: Wf,
      PLAY_FUNCTION_THREW_EXCEPTION: Q5,
      PRELOAD_ENTRIES: Z5,
      PREVIEW_BUILDER_PROGRESS: GV,
      PREVIEW_KEYDOWN: e3,
      REGISTER_SUBSCRIPTION: WV,
      RESET_STORY_ARGS: Or,
      SELECT_STORY: VV,
      SET_CONFIG: KV,
      SET_CURRENT_STORY: t3,
      SET_GLOBALS: r3,
      SET_INDEX: n3,
      SET_STORIES: YV,
      SHARED_STATE_CHANGED: a3,
      SHARED_STATE_SET: o3,
      STORIES_COLLAPSE_ALL: XV,
      STORIES_EXPAND_ALL: JV,
      STORY_ARGS_UPDATED: zt,
      STORY_CHANGED: u3,
      STORY_ERRORED: i3,
      STORY_INDEX_INVALIDATED: s3,
      STORY_MISSING: l3,
      STORY_PREPARED: c3,
      STORY_RENDERED: Vf,
      STORY_RENDER_PHASE_CHANGED: p3,
      STORY_SPECIFIED: d3,
      STORY_THREW_EXCEPTION: f3,
      STORY_UNCHANGED: h3,
      UPDATE_GLOBALS: Kf,
      UPDATE_QUERY_PARAMS: g3,
      UPDATE_STORY_ARGS: Rr,
    } = __STORYBOOKCOREEVENTS__
  var y3 = Object.create,
    Yf = Object.defineProperty,
    b3 = Object.getOwnPropertyDescriptor,
    Xf = Object.getOwnPropertyNames,
    A3 = Object.getPrototypeOf,
    E3 = Object.prototype.hasOwnProperty,
    He = (e, t) =>
      function () {
        return t || (0, e[Xf(e)[0]])((t = {exports: {}}).exports, t), t.exports
      },
    D3 = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let a of Xf(t))
          !E3.call(e, a) &&
            a !== r &&
            Yf(e, a, {
              get: () => t[a],
              enumerable: !(n = b3(t, a)) || n.enumerable,
            })
      return e
    },
    Jf = (e, t, r) => (
      (r = e != null ? y3(A3(e)) : {}),
      D3(
        t || !e || !e.__esModule
          ? Yf(r, 'default', {value: e, enumerable: !0})
          : r,
        e
      )
    )
  function Qf() {
    let e = {setHandler: () => {}, send: () => {}}
    return new Tn({transport: e})
  }
  var v3 = class {
      constructor() {
        ;(this.getChannel = () => {
          if (!this.channel) {
            let e = Qf()
            return this.setChannel(e), e
          }
          return this.channel
        }),
          (this.getServerChannel = () => {
            if (!this.serverChannel)
              throw new Error('Accessing non-existent serverChannel')
            return this.serverChannel
          }),
          (this.ready = () => this.promise),
          (this.hasChannel = () => !!this.channel),
          (this.hasServerChannel = () => !!this.serverChannel),
          (this.setChannel = (e) => {
            ;(this.channel = e), this.resolve()
          }),
          (this.setServerChannel = (e) => {
            this.serverChannel = e
          }),
          (this.promise = new Promise((e) => {
            this.resolve = () => e(this.getChannel())
          }))
      }
    },
    Wo = '__STORYBOOK_ADDONS_PREVIEW'
  function C3() {
    return oe[Wo] || (oe[Wo] = new v3()), oe[Wo]
  }
  var On = C3()
  var W0 = fe(Sn(), 1),
    Ir = fe(Rn(), 1),
    IB = fe(I0(), 1),
    kB = fe(In(), 1)
  l()
  c()
  p()
  function Ht(e) {
    for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r]
    var n = Array.from(typeof e == 'string' ? [e] : e)
    n[n.length - 1] = n[n.length - 1].replace(/\r?\n([\t ]*)$/, '')
    var a = n.reduce(function (i, s) {
      var d = s.match(/\n([\t ]+|(?!\s).)/g)
      return d
        ? i.concat(
            d.map(function (y) {
              var A, g
              return (g =
                (A = y.match(/[\t ]/g)) === null || A === void 0
                  ? void 0
                  : A.length) !== null && g !== void 0
                ? g
                : 0
            })
          )
        : i
    }, [])
    if (a.length) {
      var o = new RegExp(
        `
[	 ]{` +
          Math.min.apply(Math, a) +
          '}',
        'g'
      )
      n = n.map(function (i) {
        return i.replace(
          o,
          `
`
        )
      })
    }
    n[0] = n[0].replace(/^\r?\n/, '')
    var u = n[0]
    return (
      t.forEach(function (i, s) {
        var d = u.match(/(?:^|\n)( *)$/),
          y = d ? d[1] : '',
          A = i
        typeof i == 'string' &&
          i.includes(`
`) &&
          (A = String(i)
            .split(
              `
`
            )
            .map(function (g, h) {
              return h === 0 ? g : '' + y + g
            }).join(`
`)),
          (u += A + n[s + 1])
      }),
      u
    )
  }
  var ve = Ht
  l()
  c()
  p()
  var Mn = fe(Vo(), 1)
  var V0 = fe(H0(), 1)
  var K0 = fe(Ro(), 1)
  var VY = (0, W0.default)(1)((e) =>
    Object.values(e).reduce(
      (t, r) => ((t[r.importPath] = t[r.importPath] || r), t),
      {}
    )
  )
  var KY = Symbol('incompatible')
  var YY = Symbol('Deeply equal')
  var NB = Ht`
CSF .story annotations deprecated; annotate story functions directly:
- StoryFn.story.name => StoryFn.storyName
- StoryFn.story.(parameters|decorators) => StoryFn.(parameters|decorators)
See https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#hoisted-csf-annotations for details and codemod.
`,
    XY = (0, V0.default)(() => {}, NB)
  var Et = (...e) => {
    let t = {},
      r = e.filter(Boolean),
      n = r.reduce(
        (a, o) => (
          Object.entries(o).forEach(([u, i]) => {
            let s = a[u]
            Array.isArray(i) || typeof s > 'u'
              ? (a[u] = i)
              : (0, Mn.default)(i) && (0, Mn.default)(s)
              ? (t[u] = !0)
              : typeof i < 'u' && (a[u] = i)
          }),
          a
        ),
        {}
      )
    return (
      Object.keys(t).forEach((a) => {
        let o = r
          .filter(Boolean)
          .map((u) => u[a])
          .filter((u) => typeof u < 'u')
        o.every((u) => (0, Mn.default)(u))
          ? (n[a] = Et(...o))
          : (n[a] = o[o.length - 1])
      }),
      n
    )
  }
  var Yo = (e, t, r) => {
      let n = typeof e
      switch (n) {
        case 'boolean':
        case 'string':
        case 'number':
        case 'function':
        case 'symbol':
          return {name: n}
      }
      return e
        ? r.has(e)
          ? (Me.warn(Ht`
        We've detected a cycle in arg '${t}'. Args should be JSON-serializable.

        Consider using the mapping feature or fully custom args:
        - Mapping: https://storybook.js.org/docs/react/writing-stories/args#mapping-to-complex-arg-values
        - Custom args: https://storybook.js.org/docs/react/essentials/controls#fully-custom-args
      `),
            {name: 'other', value: 'cyclic object'})
          : (r.add(e),
            Array.isArray(e)
              ? {
                  name: 'array',
                  value:
                    e.length > 0
                      ? Yo(e[0], t, new Set(r))
                      : {name: 'other', value: 'unknown'},
                }
              : {
                  name: 'object',
                  value: (0, Ir.default)(e, (a) => Yo(a, t, new Set(r))),
                })
        : {name: 'object', value: {}}
    },
    jB = (e) => {
      let {id: t, argTypes: r = {}, initialArgs: n = {}} = e,
        a = (0, Ir.default)(n, (u, i) => ({
          name: i,
          type: Yo(u, `${t}.${i}`, new Set()),
        })),
        o = (0, Ir.default)(r, (u, i) => ({name: i}))
      return Et(a, o, r)
    }
  jB.secondPass = !0
  var G0 = (e, t) => (Array.isArray(t) ? t.includes(e) : e.match(t)),
    Nr = (e, t, r) =>
      !t && !r
        ? e
        : e &&
          (0, K0.default)(e, (n, a) => {
            let o = n.name || a
            return (!t || G0(o, t)) && (!r || !G0(o, r))
          }),
    MB = (e, t, r) => {
      let {type: n, options: a} = e
      if (n) {
        if (r.color && r.color.test(t)) {
          let o = n.name
          if (o === 'string') return {control: {type: 'color'}}
          o !== 'enum' &&
            Me.warn(
              `Addon controls: Control of type color only supports string, received "${o}" instead`
            )
        }
        if (r.date && r.date.test(t)) return {control: {type: 'date'}}
        switch (n.name) {
          case 'array':
            return {control: {type: 'object'}}
          case 'boolean':
            return {control: {type: 'boolean'}}
          case 'string':
            return {control: {type: 'text'}}
          case 'number':
            return {control: {type: 'number'}}
          case 'enum': {
            let {value: o} = n
            return {
              control: {type: o?.length <= 5 ? 'radio' : 'select'},
              options: o,
            }
          }
          case 'function':
          case 'symbol':
            return null
          default:
            return {control: {type: a ? 'select' : 'object'}}
        }
      }
    },
    Y0 = (e) => {
      let {
        argTypes: t,
        parameters: {
          __isArgsStory: r,
          controls: {
            include: n = null,
            exclude: a = null,
            matchers: o = {},
          } = {},
        },
      } = e
      if (!r) return t
      let u = Nr(t, n, a),
        i = (0, Ir.default)(u, (s, d) => s?.type && MB(s, d, o))
      return Et(i, u)
    }
  Y0.secondPass = !0
  function Xo(e) {
    return async (t, r, n) => {
      await e.reduceRight(
        (a, o) => async () => o(t, a, n),
        async () => r(n)
      )()
    }
  }
  function kr(e, t) {
    return e.map((r) => r.default?.[t] ?? r[t]).filter(Boolean)
  }
  function kn(e, t, r = {}) {
    return kr(e, t).reduce(
      (n, a) => (r.reverseFileOrder ? [...a, ...n] : [...n, ...a]),
      []
    )
  }
  function Nn(e, t) {
    return Object.assign({}, ...kr(e, t))
  }
  function jn(e, t) {
    return kr(e, t).pop()
  }
  function Jo(e) {
    let t = kn(e, 'argTypesEnhancers'),
      r = kr(e, 'runStep')
    return {
      parameters: Et(...kr(e, 'parameters')),
      decorators: kn(e, 'decorators', {
        reverseFileOrder: !(oe.FEATURES?.legacyDecoratorFileOrder ?? !1),
      }),
      args: Nn(e, 'args'),
      argsEnhancers: kn(e, 'argsEnhancers'),
      argTypes: Nn(e, 'argTypes'),
      argTypesEnhancers: [
        ...t.filter((n) => !n.secondPass),
        ...t.filter((n) => n.secondPass),
      ],
      globals: Nn(e, 'globals'),
      globalTypes: Nn(e, 'globalTypes'),
      loaders: kn(e, 'loaders'),
      render: jn(e, 'render'),
      renderToCanvas: jn(e, 'renderToCanvas'),
      renderToDOM: jn(e, 'renderToDOM'),
      applyDecorators: jn(e, 'applyDecorators'),
      runStep: Xo(r),
    }
  }
  var JY = Jo([])
  var D8 = fe(In(), 1),
    v8 = fe(Xn(), 1)
  l()
  c()
  p()
  var x8 = fe(In(), 1)
  var F8 = fe(Xn(), 1),
    S8 = fe(Vo(), 1),
    rg = He({
      '../../node_modules/entities/lib/maps/entities.json'(e, t) {
        t.exports = {
          Aacute: '\xC1',
          aacute: '\xE1',
          Abreve: '\u0102',
          abreve: '\u0103',
          ac: '\u223E',
          acd: '\u223F',
          acE: '\u223E\u0333',
          Acirc: '\xC2',
          acirc: '\xE2',
          acute: '\xB4',
          Acy: '\u0410',
          acy: '\u0430',
          AElig: '\xC6',
          aelig: '\xE6',
          af: '\u2061',
          Afr: '\u{1D504}',
          afr: '\u{1D51E}',
          Agrave: '\xC0',
          agrave: '\xE0',
          alefsym: '\u2135',
          aleph: '\u2135',
          Alpha: '\u0391',
          alpha: '\u03B1',
          Amacr: '\u0100',
          amacr: '\u0101',
          amalg: '\u2A3F',
          amp: '&',
          AMP: '&',
          andand: '\u2A55',
          And: '\u2A53',
          and: '\u2227',
          andd: '\u2A5C',
          andslope: '\u2A58',
          andv: '\u2A5A',
          ang: '\u2220',
          ange: '\u29A4',
          angle: '\u2220',
          angmsdaa: '\u29A8',
          angmsdab: '\u29A9',
          angmsdac: '\u29AA',
          angmsdad: '\u29AB',
          angmsdae: '\u29AC',
          angmsdaf: '\u29AD',
          angmsdag: '\u29AE',
          angmsdah: '\u29AF',
          angmsd: '\u2221',
          angrt: '\u221F',
          angrtvb: '\u22BE',
          angrtvbd: '\u299D',
          angsph: '\u2222',
          angst: '\xC5',
          angzarr: '\u237C',
          Aogon: '\u0104',
          aogon: '\u0105',
          Aopf: '\u{1D538}',
          aopf: '\u{1D552}',
          apacir: '\u2A6F',
          ap: '\u2248',
          apE: '\u2A70',
          ape: '\u224A',
          apid: '\u224B',
          apos: "'",
          ApplyFunction: '\u2061',
          approx: '\u2248',
          approxeq: '\u224A',
          Aring: '\xC5',
          aring: '\xE5',
          Ascr: '\u{1D49C}',
          ascr: '\u{1D4B6}',
          Assign: '\u2254',
          ast: '*',
          asymp: '\u2248',
          asympeq: '\u224D',
          Atilde: '\xC3',
          atilde: '\xE3',
          Auml: '\xC4',
          auml: '\xE4',
          awconint: '\u2233',
          awint: '\u2A11',
          backcong: '\u224C',
          backepsilon: '\u03F6',
          backprime: '\u2035',
          backsim: '\u223D',
          backsimeq: '\u22CD',
          Backslash: '\u2216',
          Barv: '\u2AE7',
          barvee: '\u22BD',
          barwed: '\u2305',
          Barwed: '\u2306',
          barwedge: '\u2305',
          bbrk: '\u23B5',
          bbrktbrk: '\u23B6',
          bcong: '\u224C',
          Bcy: '\u0411',
          bcy: '\u0431',
          bdquo: '\u201E',
          becaus: '\u2235',
          because: '\u2235',
          Because: '\u2235',
          bemptyv: '\u29B0',
          bepsi: '\u03F6',
          bernou: '\u212C',
          Bernoullis: '\u212C',
          Beta: '\u0392',
          beta: '\u03B2',
          beth: '\u2136',
          between: '\u226C',
          Bfr: '\u{1D505}',
          bfr: '\u{1D51F}',
          bigcap: '\u22C2',
          bigcirc: '\u25EF',
          bigcup: '\u22C3',
          bigodot: '\u2A00',
          bigoplus: '\u2A01',
          bigotimes: '\u2A02',
          bigsqcup: '\u2A06',
          bigstar: '\u2605',
          bigtriangledown: '\u25BD',
          bigtriangleup: '\u25B3',
          biguplus: '\u2A04',
          bigvee: '\u22C1',
          bigwedge: '\u22C0',
          bkarow: '\u290D',
          blacklozenge: '\u29EB',
          blacksquare: '\u25AA',
          blacktriangle: '\u25B4',
          blacktriangledown: '\u25BE',
          blacktriangleleft: '\u25C2',
          blacktriangleright: '\u25B8',
          blank: '\u2423',
          blk12: '\u2592',
          blk14: '\u2591',
          blk34: '\u2593',
          block: '\u2588',
          bne: '=\u20E5',
          bnequiv: '\u2261\u20E5',
          bNot: '\u2AED',
          bnot: '\u2310',
          Bopf: '\u{1D539}',
          bopf: '\u{1D553}',
          bot: '\u22A5',
          bottom: '\u22A5',
          bowtie: '\u22C8',
          boxbox: '\u29C9',
          boxdl: '\u2510',
          boxdL: '\u2555',
          boxDl: '\u2556',
          boxDL: '\u2557',
          boxdr: '\u250C',
          boxdR: '\u2552',
          boxDr: '\u2553',
          boxDR: '\u2554',
          boxh: '\u2500',
          boxH: '\u2550',
          boxhd: '\u252C',
          boxHd: '\u2564',
          boxhD: '\u2565',
          boxHD: '\u2566',
          boxhu: '\u2534',
          boxHu: '\u2567',
          boxhU: '\u2568',
          boxHU: '\u2569',
          boxminus: '\u229F',
          boxplus: '\u229E',
          boxtimes: '\u22A0',
          boxul: '\u2518',
          boxuL: '\u255B',
          boxUl: '\u255C',
          boxUL: '\u255D',
          boxur: '\u2514',
          boxuR: '\u2558',
          boxUr: '\u2559',
          boxUR: '\u255A',
          boxv: '\u2502',
          boxV: '\u2551',
          boxvh: '\u253C',
          boxvH: '\u256A',
          boxVh: '\u256B',
          boxVH: '\u256C',
          boxvl: '\u2524',
          boxvL: '\u2561',
          boxVl: '\u2562',
          boxVL: '\u2563',
          boxvr: '\u251C',
          boxvR: '\u255E',
          boxVr: '\u255F',
          boxVR: '\u2560',
          bprime: '\u2035',
          breve: '\u02D8',
          Breve: '\u02D8',
          brvbar: '\xA6',
          bscr: '\u{1D4B7}',
          Bscr: '\u212C',
          bsemi: '\u204F',
          bsim: '\u223D',
          bsime: '\u22CD',
          bsolb: '\u29C5',
          bsol: '\\',
          bsolhsub: '\u27C8',
          bull: '\u2022',
          bullet: '\u2022',
          bump: '\u224E',
          bumpE: '\u2AAE',
          bumpe: '\u224F',
          Bumpeq: '\u224E',
          bumpeq: '\u224F',
          Cacute: '\u0106',
          cacute: '\u0107',
          capand: '\u2A44',
          capbrcup: '\u2A49',
          capcap: '\u2A4B',
          cap: '\u2229',
          Cap: '\u22D2',
          capcup: '\u2A47',
          capdot: '\u2A40',
          CapitalDifferentialD: '\u2145',
          caps: '\u2229\uFE00',
          caret: '\u2041',
          caron: '\u02C7',
          Cayleys: '\u212D',
          ccaps: '\u2A4D',
          Ccaron: '\u010C',
          ccaron: '\u010D',
          Ccedil: '\xC7',
          ccedil: '\xE7',
          Ccirc: '\u0108',
          ccirc: '\u0109',
          Cconint: '\u2230',
          ccups: '\u2A4C',
          ccupssm: '\u2A50',
          Cdot: '\u010A',
          cdot: '\u010B',
          cedil: '\xB8',
          Cedilla: '\xB8',
          cemptyv: '\u29B2',
          cent: '\xA2',
          centerdot: '\xB7',
          CenterDot: '\xB7',
          cfr: '\u{1D520}',
          Cfr: '\u212D',
          CHcy: '\u0427',
          chcy: '\u0447',
          check: '\u2713',
          checkmark: '\u2713',
          Chi: '\u03A7',
          chi: '\u03C7',
          circ: '\u02C6',
          circeq: '\u2257',
          circlearrowleft: '\u21BA',
          circlearrowright: '\u21BB',
          circledast: '\u229B',
          circledcirc: '\u229A',
          circleddash: '\u229D',
          CircleDot: '\u2299',
          circledR: '\xAE',
          circledS: '\u24C8',
          CircleMinus: '\u2296',
          CirclePlus: '\u2295',
          CircleTimes: '\u2297',
          cir: '\u25CB',
          cirE: '\u29C3',
          cire: '\u2257',
          cirfnint: '\u2A10',
          cirmid: '\u2AEF',
          cirscir: '\u29C2',
          ClockwiseContourIntegral: '\u2232',
          CloseCurlyDoubleQuote: '\u201D',
          CloseCurlyQuote: '\u2019',
          clubs: '\u2663',
          clubsuit: '\u2663',
          colon: ':',
          Colon: '\u2237',
          Colone: '\u2A74',
          colone: '\u2254',
          coloneq: '\u2254',
          comma: ',',
          commat: '@',
          comp: '\u2201',
          compfn: '\u2218',
          complement: '\u2201',
          complexes: '\u2102',
          cong: '\u2245',
          congdot: '\u2A6D',
          Congruent: '\u2261',
          conint: '\u222E',
          Conint: '\u222F',
          ContourIntegral: '\u222E',
          copf: '\u{1D554}',
          Copf: '\u2102',
          coprod: '\u2210',
          Coproduct: '\u2210',
          copy: '\xA9',
          COPY: '\xA9',
          copysr: '\u2117',
          CounterClockwiseContourIntegral: '\u2233',
          crarr: '\u21B5',
          cross: '\u2717',
          Cross: '\u2A2F',
          Cscr: '\u{1D49E}',
          cscr: '\u{1D4B8}',
          csub: '\u2ACF',
          csube: '\u2AD1',
          csup: '\u2AD0',
          csupe: '\u2AD2',
          ctdot: '\u22EF',
          cudarrl: '\u2938',
          cudarrr: '\u2935',
          cuepr: '\u22DE',
          cuesc: '\u22DF',
          cularr: '\u21B6',
          cularrp: '\u293D',
          cupbrcap: '\u2A48',
          cupcap: '\u2A46',
          CupCap: '\u224D',
          cup: '\u222A',
          Cup: '\u22D3',
          cupcup: '\u2A4A',
          cupdot: '\u228D',
          cupor: '\u2A45',
          cups: '\u222A\uFE00',
          curarr: '\u21B7',
          curarrm: '\u293C',
          curlyeqprec: '\u22DE',
          curlyeqsucc: '\u22DF',
          curlyvee: '\u22CE',
          curlywedge: '\u22CF',
          curren: '\xA4',
          curvearrowleft: '\u21B6',
          curvearrowright: '\u21B7',
          cuvee: '\u22CE',
          cuwed: '\u22CF',
          cwconint: '\u2232',
          cwint: '\u2231',
          cylcty: '\u232D',
          dagger: '\u2020',
          Dagger: '\u2021',
          daleth: '\u2138',
          darr: '\u2193',
          Darr: '\u21A1',
          dArr: '\u21D3',
          dash: '\u2010',
          Dashv: '\u2AE4',
          dashv: '\u22A3',
          dbkarow: '\u290F',
          dblac: '\u02DD',
          Dcaron: '\u010E',
          dcaron: '\u010F',
          Dcy: '\u0414',
          dcy: '\u0434',
          ddagger: '\u2021',
          ddarr: '\u21CA',
          DD: '\u2145',
          dd: '\u2146',
          DDotrahd: '\u2911',
          ddotseq: '\u2A77',
          deg: '\xB0',
          Del: '\u2207',
          Delta: '\u0394',
          delta: '\u03B4',
          demptyv: '\u29B1',
          dfisht: '\u297F',
          Dfr: '\u{1D507}',
          dfr: '\u{1D521}',
          dHar: '\u2965',
          dharl: '\u21C3',
          dharr: '\u21C2',
          DiacriticalAcute: '\xB4',
          DiacriticalDot: '\u02D9',
          DiacriticalDoubleAcute: '\u02DD',
          DiacriticalGrave: '`',
          DiacriticalTilde: '\u02DC',
          diam: '\u22C4',
          diamond: '\u22C4',
          Diamond: '\u22C4',
          diamondsuit: '\u2666',
          diams: '\u2666',
          die: '\xA8',
          DifferentialD: '\u2146',
          digamma: '\u03DD',
          disin: '\u22F2',
          div: '\xF7',
          divide: '\xF7',
          divideontimes: '\u22C7',
          divonx: '\u22C7',
          DJcy: '\u0402',
          djcy: '\u0452',
          dlcorn: '\u231E',
          dlcrop: '\u230D',
          dollar: '$',
          Dopf: '\u{1D53B}',
          dopf: '\u{1D555}',
          Dot: '\xA8',
          dot: '\u02D9',
          DotDot: '\u20DC',
          doteq: '\u2250',
          doteqdot: '\u2251',
          DotEqual: '\u2250',
          dotminus: '\u2238',
          dotplus: '\u2214',
          dotsquare: '\u22A1',
          doublebarwedge: '\u2306',
          DoubleContourIntegral: '\u222F',
          DoubleDot: '\xA8',
          DoubleDownArrow: '\u21D3',
          DoubleLeftArrow: '\u21D0',
          DoubleLeftRightArrow: '\u21D4',
          DoubleLeftTee: '\u2AE4',
          DoubleLongLeftArrow: '\u27F8',
          DoubleLongLeftRightArrow: '\u27FA',
          DoubleLongRightArrow: '\u27F9',
          DoubleRightArrow: '\u21D2',
          DoubleRightTee: '\u22A8',
          DoubleUpArrow: '\u21D1',
          DoubleUpDownArrow: '\u21D5',
          DoubleVerticalBar: '\u2225',
          DownArrowBar: '\u2913',
          downarrow: '\u2193',
          DownArrow: '\u2193',
          Downarrow: '\u21D3',
          DownArrowUpArrow: '\u21F5',
          DownBreve: '\u0311',
          downdownarrows: '\u21CA',
          downharpoonleft: '\u21C3',
          downharpoonright: '\u21C2',
          DownLeftRightVector: '\u2950',
          DownLeftTeeVector: '\u295E',
          DownLeftVectorBar: '\u2956',
          DownLeftVector: '\u21BD',
          DownRightTeeVector: '\u295F',
          DownRightVectorBar: '\u2957',
          DownRightVector: '\u21C1',
          DownTeeArrow: '\u21A7',
          DownTee: '\u22A4',
          drbkarow: '\u2910',
          drcorn: '\u231F',
          drcrop: '\u230C',
          Dscr: '\u{1D49F}',
          dscr: '\u{1D4B9}',
          DScy: '\u0405',
          dscy: '\u0455',
          dsol: '\u29F6',
          Dstrok: '\u0110',
          dstrok: '\u0111',
          dtdot: '\u22F1',
          dtri: '\u25BF',
          dtrif: '\u25BE',
          duarr: '\u21F5',
          duhar: '\u296F',
          dwangle: '\u29A6',
          DZcy: '\u040F',
          dzcy: '\u045F',
          dzigrarr: '\u27FF',
          Eacute: '\xC9',
          eacute: '\xE9',
          easter: '\u2A6E',
          Ecaron: '\u011A',
          ecaron: '\u011B',
          Ecirc: '\xCA',
          ecirc: '\xEA',
          ecir: '\u2256',
          ecolon: '\u2255',
          Ecy: '\u042D',
          ecy: '\u044D',
          eDDot: '\u2A77',
          Edot: '\u0116',
          edot: '\u0117',
          eDot: '\u2251',
          ee: '\u2147',
          efDot: '\u2252',
          Efr: '\u{1D508}',
          efr: '\u{1D522}',
          eg: '\u2A9A',
          Egrave: '\xC8',
          egrave: '\xE8',
          egs: '\u2A96',
          egsdot: '\u2A98',
          el: '\u2A99',
          Element: '\u2208',
          elinters: '\u23E7',
          ell: '\u2113',
          els: '\u2A95',
          elsdot: '\u2A97',
          Emacr: '\u0112',
          emacr: '\u0113',
          empty: '\u2205',
          emptyset: '\u2205',
          EmptySmallSquare: '\u25FB',
          emptyv: '\u2205',
          EmptyVerySmallSquare: '\u25AB',
          emsp13: '\u2004',
          emsp14: '\u2005',
          emsp: '\u2003',
          ENG: '\u014A',
          eng: '\u014B',
          ensp: '\u2002',
          Eogon: '\u0118',
          eogon: '\u0119',
          Eopf: '\u{1D53C}',
          eopf: '\u{1D556}',
          epar: '\u22D5',
          eparsl: '\u29E3',
          eplus: '\u2A71',
          epsi: '\u03B5',
          Epsilon: '\u0395',
          epsilon: '\u03B5',
          epsiv: '\u03F5',
          eqcirc: '\u2256',
          eqcolon: '\u2255',
          eqsim: '\u2242',
          eqslantgtr: '\u2A96',
          eqslantless: '\u2A95',
          Equal: '\u2A75',
          equals: '=',
          EqualTilde: '\u2242',
          equest: '\u225F',
          Equilibrium: '\u21CC',
          equiv: '\u2261',
          equivDD: '\u2A78',
          eqvparsl: '\u29E5',
          erarr: '\u2971',
          erDot: '\u2253',
          escr: '\u212F',
          Escr: '\u2130',
          esdot: '\u2250',
          Esim: '\u2A73',
          esim: '\u2242',
          Eta: '\u0397',
          eta: '\u03B7',
          ETH: '\xD0',
          eth: '\xF0',
          Euml: '\xCB',
          euml: '\xEB',
          euro: '\u20AC',
          excl: '!',
          exist: '\u2203',
          Exists: '\u2203',
          expectation: '\u2130',
          exponentiale: '\u2147',
          ExponentialE: '\u2147',
          fallingdotseq: '\u2252',
          Fcy: '\u0424',
          fcy: '\u0444',
          female: '\u2640',
          ffilig: '\uFB03',
          fflig: '\uFB00',
          ffllig: '\uFB04',
          Ffr: '\u{1D509}',
          ffr: '\u{1D523}',
          filig: '\uFB01',
          FilledSmallSquare: '\u25FC',
          FilledVerySmallSquare: '\u25AA',
          fjlig: 'fj',
          flat: '\u266D',
          fllig: '\uFB02',
          fltns: '\u25B1',
          fnof: '\u0192',
          Fopf: '\u{1D53D}',
          fopf: '\u{1D557}',
          forall: '\u2200',
          ForAll: '\u2200',
          fork: '\u22D4',
          forkv: '\u2AD9',
          Fouriertrf: '\u2131',
          fpartint: '\u2A0D',
          frac12: '\xBD',
          frac13: '\u2153',
          frac14: '\xBC',
          frac15: '\u2155',
          frac16: '\u2159',
          frac18: '\u215B',
          frac23: '\u2154',
          frac25: '\u2156',
          frac34: '\xBE',
          frac35: '\u2157',
          frac38: '\u215C',
          frac45: '\u2158',
          frac56: '\u215A',
          frac58: '\u215D',
          frac78: '\u215E',
          frasl: '\u2044',
          frown: '\u2322',
          fscr: '\u{1D4BB}',
          Fscr: '\u2131',
          gacute: '\u01F5',
          Gamma: '\u0393',
          gamma: '\u03B3',
          Gammad: '\u03DC',
          gammad: '\u03DD',
          gap: '\u2A86',
          Gbreve: '\u011E',
          gbreve: '\u011F',
          Gcedil: '\u0122',
          Gcirc: '\u011C',
          gcirc: '\u011D',
          Gcy: '\u0413',
          gcy: '\u0433',
          Gdot: '\u0120',
          gdot: '\u0121',
          ge: '\u2265',
          gE: '\u2267',
          gEl: '\u2A8C',
          gel: '\u22DB',
          geq: '\u2265',
          geqq: '\u2267',
          geqslant: '\u2A7E',
          gescc: '\u2AA9',
          ges: '\u2A7E',
          gesdot: '\u2A80',
          gesdoto: '\u2A82',
          gesdotol: '\u2A84',
          gesl: '\u22DB\uFE00',
          gesles: '\u2A94',
          Gfr: '\u{1D50A}',
          gfr: '\u{1D524}',
          gg: '\u226B',
          Gg: '\u22D9',
          ggg: '\u22D9',
          gimel: '\u2137',
          GJcy: '\u0403',
          gjcy: '\u0453',
          gla: '\u2AA5',
          gl: '\u2277',
          glE: '\u2A92',
          glj: '\u2AA4',
          gnap: '\u2A8A',
          gnapprox: '\u2A8A',
          gne: '\u2A88',
          gnE: '\u2269',
          gneq: '\u2A88',
          gneqq: '\u2269',
          gnsim: '\u22E7',
          Gopf: '\u{1D53E}',
          gopf: '\u{1D558}',
          grave: '`',
          GreaterEqual: '\u2265',
          GreaterEqualLess: '\u22DB',
          GreaterFullEqual: '\u2267',
          GreaterGreater: '\u2AA2',
          GreaterLess: '\u2277',
          GreaterSlantEqual: '\u2A7E',
          GreaterTilde: '\u2273',
          Gscr: '\u{1D4A2}',
          gscr: '\u210A',
          gsim: '\u2273',
          gsime: '\u2A8E',
          gsiml: '\u2A90',
          gtcc: '\u2AA7',
          gtcir: '\u2A7A',
          gt: '>',
          GT: '>',
          Gt: '\u226B',
          gtdot: '\u22D7',
          gtlPar: '\u2995',
          gtquest: '\u2A7C',
          gtrapprox: '\u2A86',
          gtrarr: '\u2978',
          gtrdot: '\u22D7',
          gtreqless: '\u22DB',
          gtreqqless: '\u2A8C',
          gtrless: '\u2277',
          gtrsim: '\u2273',
          gvertneqq: '\u2269\uFE00',
          gvnE: '\u2269\uFE00',
          Hacek: '\u02C7',
          hairsp: '\u200A',
          half: '\xBD',
          hamilt: '\u210B',
          HARDcy: '\u042A',
          hardcy: '\u044A',
          harrcir: '\u2948',
          harr: '\u2194',
          hArr: '\u21D4',
          harrw: '\u21AD',
          Hat: '^',
          hbar: '\u210F',
          Hcirc: '\u0124',
          hcirc: '\u0125',
          hearts: '\u2665',
          heartsuit: '\u2665',
          hellip: '\u2026',
          hercon: '\u22B9',
          hfr: '\u{1D525}',
          Hfr: '\u210C',
          HilbertSpace: '\u210B',
          hksearow: '\u2925',
          hkswarow: '\u2926',
          hoarr: '\u21FF',
          homtht: '\u223B',
          hookleftarrow: '\u21A9',
          hookrightarrow: '\u21AA',
          hopf: '\u{1D559}',
          Hopf: '\u210D',
          horbar: '\u2015',
          HorizontalLine: '\u2500',
          hscr: '\u{1D4BD}',
          Hscr: '\u210B',
          hslash: '\u210F',
          Hstrok: '\u0126',
          hstrok: '\u0127',
          HumpDownHump: '\u224E',
          HumpEqual: '\u224F',
          hybull: '\u2043',
          hyphen: '\u2010',
          Iacute: '\xCD',
          iacute: '\xED',
          ic: '\u2063',
          Icirc: '\xCE',
          icirc: '\xEE',
          Icy: '\u0418',
          icy: '\u0438',
          Idot: '\u0130',
          IEcy: '\u0415',
          iecy: '\u0435',
          iexcl: '\xA1',
          iff: '\u21D4',
          ifr: '\u{1D526}',
          Ifr: '\u2111',
          Igrave: '\xCC',
          igrave: '\xEC',
          ii: '\u2148',
          iiiint: '\u2A0C',
          iiint: '\u222D',
          iinfin: '\u29DC',
          iiota: '\u2129',
          IJlig: '\u0132',
          ijlig: '\u0133',
          Imacr: '\u012A',
          imacr: '\u012B',
          image: '\u2111',
          ImaginaryI: '\u2148',
          imagline: '\u2110',
          imagpart: '\u2111',
          imath: '\u0131',
          Im: '\u2111',
          imof: '\u22B7',
          imped: '\u01B5',
          Implies: '\u21D2',
          incare: '\u2105',
          in: '\u2208',
          infin: '\u221E',
          infintie: '\u29DD',
          inodot: '\u0131',
          intcal: '\u22BA',
          int: '\u222B',
          Int: '\u222C',
          integers: '\u2124',
          Integral: '\u222B',
          intercal: '\u22BA',
          Intersection: '\u22C2',
          intlarhk: '\u2A17',
          intprod: '\u2A3C',
          InvisibleComma: '\u2063',
          InvisibleTimes: '\u2062',
          IOcy: '\u0401',
          iocy: '\u0451',
          Iogon: '\u012E',
          iogon: '\u012F',
          Iopf: '\u{1D540}',
          iopf: '\u{1D55A}',
          Iota: '\u0399',
          iota: '\u03B9',
          iprod: '\u2A3C',
          iquest: '\xBF',
          iscr: '\u{1D4BE}',
          Iscr: '\u2110',
          isin: '\u2208',
          isindot: '\u22F5',
          isinE: '\u22F9',
          isins: '\u22F4',
          isinsv: '\u22F3',
          isinv: '\u2208',
          it: '\u2062',
          Itilde: '\u0128',
          itilde: '\u0129',
          Iukcy: '\u0406',
          iukcy: '\u0456',
          Iuml: '\xCF',
          iuml: '\xEF',
          Jcirc: '\u0134',
          jcirc: '\u0135',
          Jcy: '\u0419',
          jcy: '\u0439',
          Jfr: '\u{1D50D}',
          jfr: '\u{1D527}',
          jmath: '\u0237',
          Jopf: '\u{1D541}',
          jopf: '\u{1D55B}',
          Jscr: '\u{1D4A5}',
          jscr: '\u{1D4BF}',
          Jsercy: '\u0408',
          jsercy: '\u0458',
          Jukcy: '\u0404',
          jukcy: '\u0454',
          Kappa: '\u039A',
          kappa: '\u03BA',
          kappav: '\u03F0',
          Kcedil: '\u0136',
          kcedil: '\u0137',
          Kcy: '\u041A',
          kcy: '\u043A',
          Kfr: '\u{1D50E}',
          kfr: '\u{1D528}',
          kgreen: '\u0138',
          KHcy: '\u0425',
          khcy: '\u0445',
          KJcy: '\u040C',
          kjcy: '\u045C',
          Kopf: '\u{1D542}',
          kopf: '\u{1D55C}',
          Kscr: '\u{1D4A6}',
          kscr: '\u{1D4C0}',
          lAarr: '\u21DA',
          Lacute: '\u0139',
          lacute: '\u013A',
          laemptyv: '\u29B4',
          lagran: '\u2112',
          Lambda: '\u039B',
          lambda: '\u03BB',
          lang: '\u27E8',
          Lang: '\u27EA',
          langd: '\u2991',
          langle: '\u27E8',
          lap: '\u2A85',
          Laplacetrf: '\u2112',
          laquo: '\xAB',
          larrb: '\u21E4',
          larrbfs: '\u291F',
          larr: '\u2190',
          Larr: '\u219E',
          lArr: '\u21D0',
          larrfs: '\u291D',
          larrhk: '\u21A9',
          larrlp: '\u21AB',
          larrpl: '\u2939',
          larrsim: '\u2973',
          larrtl: '\u21A2',
          latail: '\u2919',
          lAtail: '\u291B',
          lat: '\u2AAB',
          late: '\u2AAD',
          lates: '\u2AAD\uFE00',
          lbarr: '\u290C',
          lBarr: '\u290E',
          lbbrk: '\u2772',
          lbrace: '{',
          lbrack: '[',
          lbrke: '\u298B',
          lbrksld: '\u298F',
          lbrkslu: '\u298D',
          Lcaron: '\u013D',
          lcaron: '\u013E',
          Lcedil: '\u013B',
          lcedil: '\u013C',
          lceil: '\u2308',
          lcub: '{',
          Lcy: '\u041B',
          lcy: '\u043B',
          ldca: '\u2936',
          ldquo: '\u201C',
          ldquor: '\u201E',
          ldrdhar: '\u2967',
          ldrushar: '\u294B',
          ldsh: '\u21B2',
          le: '\u2264',
          lE: '\u2266',
          LeftAngleBracket: '\u27E8',
          LeftArrowBar: '\u21E4',
          leftarrow: '\u2190',
          LeftArrow: '\u2190',
          Leftarrow: '\u21D0',
          LeftArrowRightArrow: '\u21C6',
          leftarrowtail: '\u21A2',
          LeftCeiling: '\u2308',
          LeftDoubleBracket: '\u27E6',
          LeftDownTeeVector: '\u2961',
          LeftDownVectorBar: '\u2959',
          LeftDownVector: '\u21C3',
          LeftFloor: '\u230A',
          leftharpoondown: '\u21BD',
          leftharpoonup: '\u21BC',
          leftleftarrows: '\u21C7',
          leftrightarrow: '\u2194',
          LeftRightArrow: '\u2194',
          Leftrightarrow: '\u21D4',
          leftrightarrows: '\u21C6',
          leftrightharpoons: '\u21CB',
          leftrightsquigarrow: '\u21AD',
          LeftRightVector: '\u294E',
          LeftTeeArrow: '\u21A4',
          LeftTee: '\u22A3',
          LeftTeeVector: '\u295A',
          leftthreetimes: '\u22CB',
          LeftTriangleBar: '\u29CF',
          LeftTriangle: '\u22B2',
          LeftTriangleEqual: '\u22B4',
          LeftUpDownVector: '\u2951',
          LeftUpTeeVector: '\u2960',
          LeftUpVectorBar: '\u2958',
          LeftUpVector: '\u21BF',
          LeftVectorBar: '\u2952',
          LeftVector: '\u21BC',
          lEg: '\u2A8B',
          leg: '\u22DA',
          leq: '\u2264',
          leqq: '\u2266',
          leqslant: '\u2A7D',
          lescc: '\u2AA8',
          les: '\u2A7D',
          lesdot: '\u2A7F',
          lesdoto: '\u2A81',
          lesdotor: '\u2A83',
          lesg: '\u22DA\uFE00',
          lesges: '\u2A93',
          lessapprox: '\u2A85',
          lessdot: '\u22D6',
          lesseqgtr: '\u22DA',
          lesseqqgtr: '\u2A8B',
          LessEqualGreater: '\u22DA',
          LessFullEqual: '\u2266',
          LessGreater: '\u2276',
          lessgtr: '\u2276',
          LessLess: '\u2AA1',
          lesssim: '\u2272',
          LessSlantEqual: '\u2A7D',
          LessTilde: '\u2272',
          lfisht: '\u297C',
          lfloor: '\u230A',
          Lfr: '\u{1D50F}',
          lfr: '\u{1D529}',
          lg: '\u2276',
          lgE: '\u2A91',
          lHar: '\u2962',
          lhard: '\u21BD',
          lharu: '\u21BC',
          lharul: '\u296A',
          lhblk: '\u2584',
          LJcy: '\u0409',
          ljcy: '\u0459',
          llarr: '\u21C7',
          ll: '\u226A',
          Ll: '\u22D8',
          llcorner: '\u231E',
          Lleftarrow: '\u21DA',
          llhard: '\u296B',
          lltri: '\u25FA',
          Lmidot: '\u013F',
          lmidot: '\u0140',
          lmoustache: '\u23B0',
          lmoust: '\u23B0',
          lnap: '\u2A89',
          lnapprox: '\u2A89',
          lne: '\u2A87',
          lnE: '\u2268',
          lneq: '\u2A87',
          lneqq: '\u2268',
          lnsim: '\u22E6',
          loang: '\u27EC',
          loarr: '\u21FD',
          lobrk: '\u27E6',
          longleftarrow: '\u27F5',
          LongLeftArrow: '\u27F5',
          Longleftarrow: '\u27F8',
          longleftrightarrow: '\u27F7',
          LongLeftRightArrow: '\u27F7',
          Longleftrightarrow: '\u27FA',
          longmapsto: '\u27FC',
          longrightarrow: '\u27F6',
          LongRightArrow: '\u27F6',
          Longrightarrow: '\u27F9',
          looparrowleft: '\u21AB',
          looparrowright: '\u21AC',
          lopar: '\u2985',
          Lopf: '\u{1D543}',
          lopf: '\u{1D55D}',
          loplus: '\u2A2D',
          lotimes: '\u2A34',
          lowast: '\u2217',
          lowbar: '_',
          LowerLeftArrow: '\u2199',
          LowerRightArrow: '\u2198',
          loz: '\u25CA',
          lozenge: '\u25CA',
          lozf: '\u29EB',
          lpar: '(',
          lparlt: '\u2993',
          lrarr: '\u21C6',
          lrcorner: '\u231F',
          lrhar: '\u21CB',
          lrhard: '\u296D',
          lrm: '\u200E',
          lrtri: '\u22BF',
          lsaquo: '\u2039',
          lscr: '\u{1D4C1}',
          Lscr: '\u2112',
          lsh: '\u21B0',
          Lsh: '\u21B0',
          lsim: '\u2272',
          lsime: '\u2A8D',
          lsimg: '\u2A8F',
          lsqb: '[',
          lsquo: '\u2018',
          lsquor: '\u201A',
          Lstrok: '\u0141',
          lstrok: '\u0142',
          ltcc: '\u2AA6',
          ltcir: '\u2A79',
          lt: '<',
          LT: '<',
          Lt: '\u226A',
          ltdot: '\u22D6',
          lthree: '\u22CB',
          ltimes: '\u22C9',
          ltlarr: '\u2976',
          ltquest: '\u2A7B',
          ltri: '\u25C3',
          ltrie: '\u22B4',
          ltrif: '\u25C2',
          ltrPar: '\u2996',
          lurdshar: '\u294A',
          luruhar: '\u2966',
          lvertneqq: '\u2268\uFE00',
          lvnE: '\u2268\uFE00',
          macr: '\xAF',
          male: '\u2642',
          malt: '\u2720',
          maltese: '\u2720',
          Map: '\u2905',
          map: '\u21A6',
          mapsto: '\u21A6',
          mapstodown: '\u21A7',
          mapstoleft: '\u21A4',
          mapstoup: '\u21A5',
          marker: '\u25AE',
          mcomma: '\u2A29',
          Mcy: '\u041C',
          mcy: '\u043C',
          mdash: '\u2014',
          mDDot: '\u223A',
          measuredangle: '\u2221',
          MediumSpace: '\u205F',
          Mellintrf: '\u2133',
          Mfr: '\u{1D510}',
          mfr: '\u{1D52A}',
          mho: '\u2127',
          micro: '\xB5',
          midast: '*',
          midcir: '\u2AF0',
          mid: '\u2223',
          middot: '\xB7',
          minusb: '\u229F',
          minus: '\u2212',
          minusd: '\u2238',
          minusdu: '\u2A2A',
          MinusPlus: '\u2213',
          mlcp: '\u2ADB',
          mldr: '\u2026',
          mnplus: '\u2213',
          models: '\u22A7',
          Mopf: '\u{1D544}',
          mopf: '\u{1D55E}',
          mp: '\u2213',
          mscr: '\u{1D4C2}',
          Mscr: '\u2133',
          mstpos: '\u223E',
          Mu: '\u039C',
          mu: '\u03BC',
          multimap: '\u22B8',
          mumap: '\u22B8',
          nabla: '\u2207',
          Nacute: '\u0143',
          nacute: '\u0144',
          nang: '\u2220\u20D2',
          nap: '\u2249',
          napE: '\u2A70\u0338',
          napid: '\u224B\u0338',
          napos: '\u0149',
          napprox: '\u2249',
          natural: '\u266E',
          naturals: '\u2115',
          natur: '\u266E',
          nbsp: '\xA0',
          nbump: '\u224E\u0338',
          nbumpe: '\u224F\u0338',
          ncap: '\u2A43',
          Ncaron: '\u0147',
          ncaron: '\u0148',
          Ncedil: '\u0145',
          ncedil: '\u0146',
          ncong: '\u2247',
          ncongdot: '\u2A6D\u0338',
          ncup: '\u2A42',
          Ncy: '\u041D',
          ncy: '\u043D',
          ndash: '\u2013',
          nearhk: '\u2924',
          nearr: '\u2197',
          neArr: '\u21D7',
          nearrow: '\u2197',
          ne: '\u2260',
          nedot: '\u2250\u0338',
          NegativeMediumSpace: '\u200B',
          NegativeThickSpace: '\u200B',
          NegativeThinSpace: '\u200B',
          NegativeVeryThinSpace: '\u200B',
          nequiv: '\u2262',
          nesear: '\u2928',
          nesim: '\u2242\u0338',
          NestedGreaterGreater: '\u226B',
          NestedLessLess: '\u226A',
          NewLine: `
`,
          nexist: '\u2204',
          nexists: '\u2204',
          Nfr: '\u{1D511}',
          nfr: '\u{1D52B}',
          ngE: '\u2267\u0338',
          nge: '\u2271',
          ngeq: '\u2271',
          ngeqq: '\u2267\u0338',
          ngeqslant: '\u2A7E\u0338',
          nges: '\u2A7E\u0338',
          nGg: '\u22D9\u0338',
          ngsim: '\u2275',
          nGt: '\u226B\u20D2',
          ngt: '\u226F',
          ngtr: '\u226F',
          nGtv: '\u226B\u0338',
          nharr: '\u21AE',
          nhArr: '\u21CE',
          nhpar: '\u2AF2',
          ni: '\u220B',
          nis: '\u22FC',
          nisd: '\u22FA',
          niv: '\u220B',
          NJcy: '\u040A',
          njcy: '\u045A',
          nlarr: '\u219A',
          nlArr: '\u21CD',
          nldr: '\u2025',
          nlE: '\u2266\u0338',
          nle: '\u2270',
          nleftarrow: '\u219A',
          nLeftarrow: '\u21CD',
          nleftrightarrow: '\u21AE',
          nLeftrightarrow: '\u21CE',
          nleq: '\u2270',
          nleqq: '\u2266\u0338',
          nleqslant: '\u2A7D\u0338',
          nles: '\u2A7D\u0338',
          nless: '\u226E',
          nLl: '\u22D8\u0338',
          nlsim: '\u2274',
          nLt: '\u226A\u20D2',
          nlt: '\u226E',
          nltri: '\u22EA',
          nltrie: '\u22EC',
          nLtv: '\u226A\u0338',
          nmid: '\u2224',
          NoBreak: '\u2060',
          NonBreakingSpace: '\xA0',
          nopf: '\u{1D55F}',
          Nopf: '\u2115',
          Not: '\u2AEC',
          not: '\xAC',
          NotCongruent: '\u2262',
          NotCupCap: '\u226D',
          NotDoubleVerticalBar: '\u2226',
          NotElement: '\u2209',
          NotEqual: '\u2260',
          NotEqualTilde: '\u2242\u0338',
          NotExists: '\u2204',
          NotGreater: '\u226F',
          NotGreaterEqual: '\u2271',
          NotGreaterFullEqual: '\u2267\u0338',
          NotGreaterGreater: '\u226B\u0338',
          NotGreaterLess: '\u2279',
          NotGreaterSlantEqual: '\u2A7E\u0338',
          NotGreaterTilde: '\u2275',
          NotHumpDownHump: '\u224E\u0338',
          NotHumpEqual: '\u224F\u0338',
          notin: '\u2209',
          notindot: '\u22F5\u0338',
          notinE: '\u22F9\u0338',
          notinva: '\u2209',
          notinvb: '\u22F7',
          notinvc: '\u22F6',
          NotLeftTriangleBar: '\u29CF\u0338',
          NotLeftTriangle: '\u22EA',
          NotLeftTriangleEqual: '\u22EC',
          NotLess: '\u226E',
          NotLessEqual: '\u2270',
          NotLessGreater: '\u2278',
          NotLessLess: '\u226A\u0338',
          NotLessSlantEqual: '\u2A7D\u0338',
          NotLessTilde: '\u2274',
          NotNestedGreaterGreater: '\u2AA2\u0338',
          NotNestedLessLess: '\u2AA1\u0338',
          notni: '\u220C',
          notniva: '\u220C',
          notnivb: '\u22FE',
          notnivc: '\u22FD',
          NotPrecedes: '\u2280',
          NotPrecedesEqual: '\u2AAF\u0338',
          NotPrecedesSlantEqual: '\u22E0',
          NotReverseElement: '\u220C',
          NotRightTriangleBar: '\u29D0\u0338',
          NotRightTriangle: '\u22EB',
          NotRightTriangleEqual: '\u22ED',
          NotSquareSubset: '\u228F\u0338',
          NotSquareSubsetEqual: '\u22E2',
          NotSquareSuperset: '\u2290\u0338',
          NotSquareSupersetEqual: '\u22E3',
          NotSubset: '\u2282\u20D2',
          NotSubsetEqual: '\u2288',
          NotSucceeds: '\u2281',
          NotSucceedsEqual: '\u2AB0\u0338',
          NotSucceedsSlantEqual: '\u22E1',
          NotSucceedsTilde: '\u227F\u0338',
          NotSuperset: '\u2283\u20D2',
          NotSupersetEqual: '\u2289',
          NotTilde: '\u2241',
          NotTildeEqual: '\u2244',
          NotTildeFullEqual: '\u2247',
          NotTildeTilde: '\u2249',
          NotVerticalBar: '\u2224',
          nparallel: '\u2226',
          npar: '\u2226',
          nparsl: '\u2AFD\u20E5',
          npart: '\u2202\u0338',
          npolint: '\u2A14',
          npr: '\u2280',
          nprcue: '\u22E0',
          nprec: '\u2280',
          npreceq: '\u2AAF\u0338',
          npre: '\u2AAF\u0338',
          nrarrc: '\u2933\u0338',
          nrarr: '\u219B',
          nrArr: '\u21CF',
          nrarrw: '\u219D\u0338',
          nrightarrow: '\u219B',
          nRightarrow: '\u21CF',
          nrtri: '\u22EB',
          nrtrie: '\u22ED',
          nsc: '\u2281',
          nsccue: '\u22E1',
          nsce: '\u2AB0\u0338',
          Nscr: '\u{1D4A9}',
          nscr: '\u{1D4C3}',
          nshortmid: '\u2224',
          nshortparallel: '\u2226',
          nsim: '\u2241',
          nsime: '\u2244',
          nsimeq: '\u2244',
          nsmid: '\u2224',
          nspar: '\u2226',
          nsqsube: '\u22E2',
          nsqsupe: '\u22E3',
          nsub: '\u2284',
          nsubE: '\u2AC5\u0338',
          nsube: '\u2288',
          nsubset: '\u2282\u20D2',
          nsubseteq: '\u2288',
          nsubseteqq: '\u2AC5\u0338',
          nsucc: '\u2281',
          nsucceq: '\u2AB0\u0338',
          nsup: '\u2285',
          nsupE: '\u2AC6\u0338',
          nsupe: '\u2289',
          nsupset: '\u2283\u20D2',
          nsupseteq: '\u2289',
          nsupseteqq: '\u2AC6\u0338',
          ntgl: '\u2279',
          Ntilde: '\xD1',
          ntilde: '\xF1',
          ntlg: '\u2278',
          ntriangleleft: '\u22EA',
          ntrianglelefteq: '\u22EC',
          ntriangleright: '\u22EB',
          ntrianglerighteq: '\u22ED',
          Nu: '\u039D',
          nu: '\u03BD',
          num: '#',
          numero: '\u2116',
          numsp: '\u2007',
          nvap: '\u224D\u20D2',
          nvdash: '\u22AC',
          nvDash: '\u22AD',
          nVdash: '\u22AE',
          nVDash: '\u22AF',
          nvge: '\u2265\u20D2',
          nvgt: '>\u20D2',
          nvHarr: '\u2904',
          nvinfin: '\u29DE',
          nvlArr: '\u2902',
          nvle: '\u2264\u20D2',
          nvlt: '<\u20D2',
          nvltrie: '\u22B4\u20D2',
          nvrArr: '\u2903',
          nvrtrie: '\u22B5\u20D2',
          nvsim: '\u223C\u20D2',
          nwarhk: '\u2923',
          nwarr: '\u2196',
          nwArr: '\u21D6',
          nwarrow: '\u2196',
          nwnear: '\u2927',
          Oacute: '\xD3',
          oacute: '\xF3',
          oast: '\u229B',
          Ocirc: '\xD4',
          ocirc: '\xF4',
          ocir: '\u229A',
          Ocy: '\u041E',
          ocy: '\u043E',
          odash: '\u229D',
          Odblac: '\u0150',
          odblac: '\u0151',
          odiv: '\u2A38',
          odot: '\u2299',
          odsold: '\u29BC',
          OElig: '\u0152',
          oelig: '\u0153',
          ofcir: '\u29BF',
          Ofr: '\u{1D512}',
          ofr: '\u{1D52C}',
          ogon: '\u02DB',
          Ograve: '\xD2',
          ograve: '\xF2',
          ogt: '\u29C1',
          ohbar: '\u29B5',
          ohm: '\u03A9',
          oint: '\u222E',
          olarr: '\u21BA',
          olcir: '\u29BE',
          olcross: '\u29BB',
          oline: '\u203E',
          olt: '\u29C0',
          Omacr: '\u014C',
          omacr: '\u014D',
          Omega: '\u03A9',
          omega: '\u03C9',
          Omicron: '\u039F',
          omicron: '\u03BF',
          omid: '\u29B6',
          ominus: '\u2296',
          Oopf: '\u{1D546}',
          oopf: '\u{1D560}',
          opar: '\u29B7',
          OpenCurlyDoubleQuote: '\u201C',
          OpenCurlyQuote: '\u2018',
          operp: '\u29B9',
          oplus: '\u2295',
          orarr: '\u21BB',
          Or: '\u2A54',
          or: '\u2228',
          ord: '\u2A5D',
          order: '\u2134',
          orderof: '\u2134',
          ordf: '\xAA',
          ordm: '\xBA',
          origof: '\u22B6',
          oror: '\u2A56',
          orslope: '\u2A57',
          orv: '\u2A5B',
          oS: '\u24C8',
          Oscr: '\u{1D4AA}',
          oscr: '\u2134',
          Oslash: '\xD8',
          oslash: '\xF8',
          osol: '\u2298',
          Otilde: '\xD5',
          otilde: '\xF5',
          otimesas: '\u2A36',
          Otimes: '\u2A37',
          otimes: '\u2297',
          Ouml: '\xD6',
          ouml: '\xF6',
          ovbar: '\u233D',
          OverBar: '\u203E',
          OverBrace: '\u23DE',
          OverBracket: '\u23B4',
          OverParenthesis: '\u23DC',
          para: '\xB6',
          parallel: '\u2225',
          par: '\u2225',
          parsim: '\u2AF3',
          parsl: '\u2AFD',
          part: '\u2202',
          PartialD: '\u2202',
          Pcy: '\u041F',
          pcy: '\u043F',
          percnt: '%',
          period: '.',
          permil: '\u2030',
          perp: '\u22A5',
          pertenk: '\u2031',
          Pfr: '\u{1D513}',
          pfr: '\u{1D52D}',
          Phi: '\u03A6',
          phi: '\u03C6',
          phiv: '\u03D5',
          phmmat: '\u2133',
          phone: '\u260E',
          Pi: '\u03A0',
          pi: '\u03C0',
          pitchfork: '\u22D4',
          piv: '\u03D6',
          planck: '\u210F',
          planckh: '\u210E',
          plankv: '\u210F',
          plusacir: '\u2A23',
          plusb: '\u229E',
          pluscir: '\u2A22',
          plus: '+',
          plusdo: '\u2214',
          plusdu: '\u2A25',
          pluse: '\u2A72',
          PlusMinus: '\xB1',
          plusmn: '\xB1',
          plussim: '\u2A26',
          plustwo: '\u2A27',
          pm: '\xB1',
          Poincareplane: '\u210C',
          pointint: '\u2A15',
          popf: '\u{1D561}',
          Popf: '\u2119',
          pound: '\xA3',
          prap: '\u2AB7',
          Pr: '\u2ABB',
          pr: '\u227A',
          prcue: '\u227C',
          precapprox: '\u2AB7',
          prec: '\u227A',
          preccurlyeq: '\u227C',
          Precedes: '\u227A',
          PrecedesEqual: '\u2AAF',
          PrecedesSlantEqual: '\u227C',
          PrecedesTilde: '\u227E',
          preceq: '\u2AAF',
          precnapprox: '\u2AB9',
          precneqq: '\u2AB5',
          precnsim: '\u22E8',
          pre: '\u2AAF',
          prE: '\u2AB3',
          precsim: '\u227E',
          prime: '\u2032',
          Prime: '\u2033',
          primes: '\u2119',
          prnap: '\u2AB9',
          prnE: '\u2AB5',
          prnsim: '\u22E8',
          prod: '\u220F',
          Product: '\u220F',
          profalar: '\u232E',
          profline: '\u2312',
          profsurf: '\u2313',
          prop: '\u221D',
          Proportional: '\u221D',
          Proportion: '\u2237',
          propto: '\u221D',
          prsim: '\u227E',
          prurel: '\u22B0',
          Pscr: '\u{1D4AB}',
          pscr: '\u{1D4C5}',
          Psi: '\u03A8',
          psi: '\u03C8',
          puncsp: '\u2008',
          Qfr: '\u{1D514}',
          qfr: '\u{1D52E}',
          qint: '\u2A0C',
          qopf: '\u{1D562}',
          Qopf: '\u211A',
          qprime: '\u2057',
          Qscr: '\u{1D4AC}',
          qscr: '\u{1D4C6}',
          quaternions: '\u210D',
          quatint: '\u2A16',
          quest: '?',
          questeq: '\u225F',
          quot: '"',
          QUOT: '"',
          rAarr: '\u21DB',
          race: '\u223D\u0331',
          Racute: '\u0154',
          racute: '\u0155',
          radic: '\u221A',
          raemptyv: '\u29B3',
          rang: '\u27E9',
          Rang: '\u27EB',
          rangd: '\u2992',
          range: '\u29A5',
          rangle: '\u27E9',
          raquo: '\xBB',
          rarrap: '\u2975',
          rarrb: '\u21E5',
          rarrbfs: '\u2920',
          rarrc: '\u2933',
          rarr: '\u2192',
          Rarr: '\u21A0',
          rArr: '\u21D2',
          rarrfs: '\u291E',
          rarrhk: '\u21AA',
          rarrlp: '\u21AC',
          rarrpl: '\u2945',
          rarrsim: '\u2974',
          Rarrtl: '\u2916',
          rarrtl: '\u21A3',
          rarrw: '\u219D',
          ratail: '\u291A',
          rAtail: '\u291C',
          ratio: '\u2236',
          rationals: '\u211A',
          rbarr: '\u290D',
          rBarr: '\u290F',
          RBarr: '\u2910',
          rbbrk: '\u2773',
          rbrace: '}',
          rbrack: ']',
          rbrke: '\u298C',
          rbrksld: '\u298E',
          rbrkslu: '\u2990',
          Rcaron: '\u0158',
          rcaron: '\u0159',
          Rcedil: '\u0156',
          rcedil: '\u0157',
          rceil: '\u2309',
          rcub: '}',
          Rcy: '\u0420',
          rcy: '\u0440',
          rdca: '\u2937',
          rdldhar: '\u2969',
          rdquo: '\u201D',
          rdquor: '\u201D',
          rdsh: '\u21B3',
          real: '\u211C',
          realine: '\u211B',
          realpart: '\u211C',
          reals: '\u211D',
          Re: '\u211C',
          rect: '\u25AD',
          reg: '\xAE',
          REG: '\xAE',
          ReverseElement: '\u220B',
          ReverseEquilibrium: '\u21CB',
          ReverseUpEquilibrium: '\u296F',
          rfisht: '\u297D',
          rfloor: '\u230B',
          rfr: '\u{1D52F}',
          Rfr: '\u211C',
          rHar: '\u2964',
          rhard: '\u21C1',
          rharu: '\u21C0',
          rharul: '\u296C',
          Rho: '\u03A1',
          rho: '\u03C1',
          rhov: '\u03F1',
          RightAngleBracket: '\u27E9',
          RightArrowBar: '\u21E5',
          rightarrow: '\u2192',
          RightArrow: '\u2192',
          Rightarrow: '\u21D2',
          RightArrowLeftArrow: '\u21C4',
          rightarrowtail: '\u21A3',
          RightCeiling: '\u2309',
          RightDoubleBracket: '\u27E7',
          RightDownTeeVector: '\u295D',
          RightDownVectorBar: '\u2955',
          RightDownVector: '\u21C2',
          RightFloor: '\u230B',
          rightharpoondown: '\u21C1',
          rightharpoonup: '\u21C0',
          rightleftarrows: '\u21C4',
          rightleftharpoons: '\u21CC',
          rightrightarrows: '\u21C9',
          rightsquigarrow: '\u219D',
          RightTeeArrow: '\u21A6',
          RightTee: '\u22A2',
          RightTeeVector: '\u295B',
          rightthreetimes: '\u22CC',
          RightTriangleBar: '\u29D0',
          RightTriangle: '\u22B3',
          RightTriangleEqual: '\u22B5',
          RightUpDownVector: '\u294F',
          RightUpTeeVector: '\u295C',
          RightUpVectorBar: '\u2954',
          RightUpVector: '\u21BE',
          RightVectorBar: '\u2953',
          RightVector: '\u21C0',
          ring: '\u02DA',
          risingdotseq: '\u2253',
          rlarr: '\u21C4',
          rlhar: '\u21CC',
          rlm: '\u200F',
          rmoustache: '\u23B1',
          rmoust: '\u23B1',
          rnmid: '\u2AEE',
          roang: '\u27ED',
          roarr: '\u21FE',
          robrk: '\u27E7',
          ropar: '\u2986',
          ropf: '\u{1D563}',
          Ropf: '\u211D',
          roplus: '\u2A2E',
          rotimes: '\u2A35',
          RoundImplies: '\u2970',
          rpar: ')',
          rpargt: '\u2994',
          rppolint: '\u2A12',
          rrarr: '\u21C9',
          Rrightarrow: '\u21DB',
          rsaquo: '\u203A',
          rscr: '\u{1D4C7}',
          Rscr: '\u211B',
          rsh: '\u21B1',
          Rsh: '\u21B1',
          rsqb: ']',
          rsquo: '\u2019',
          rsquor: '\u2019',
          rthree: '\u22CC',
          rtimes: '\u22CA',
          rtri: '\u25B9',
          rtrie: '\u22B5',
          rtrif: '\u25B8',
          rtriltri: '\u29CE',
          RuleDelayed: '\u29F4',
          ruluhar: '\u2968',
          rx: '\u211E',
          Sacute: '\u015A',
          sacute: '\u015B',
          sbquo: '\u201A',
          scap: '\u2AB8',
          Scaron: '\u0160',
          scaron: '\u0161',
          Sc: '\u2ABC',
          sc: '\u227B',
          sccue: '\u227D',
          sce: '\u2AB0',
          scE: '\u2AB4',
          Scedil: '\u015E',
          scedil: '\u015F',
          Scirc: '\u015C',
          scirc: '\u015D',
          scnap: '\u2ABA',
          scnE: '\u2AB6',
          scnsim: '\u22E9',
          scpolint: '\u2A13',
          scsim: '\u227F',
          Scy: '\u0421',
          scy: '\u0441',
          sdotb: '\u22A1',
          sdot: '\u22C5',
          sdote: '\u2A66',
          searhk: '\u2925',
          searr: '\u2198',
          seArr: '\u21D8',
          searrow: '\u2198',
          sect: '\xA7',
          semi: ';',
          seswar: '\u2929',
          setminus: '\u2216',
          setmn: '\u2216',
          sext: '\u2736',
          Sfr: '\u{1D516}',
          sfr: '\u{1D530}',
          sfrown: '\u2322',
          sharp: '\u266F',
          SHCHcy: '\u0429',
          shchcy: '\u0449',
          SHcy: '\u0428',
          shcy: '\u0448',
          ShortDownArrow: '\u2193',
          ShortLeftArrow: '\u2190',
          shortmid: '\u2223',
          shortparallel: '\u2225',
          ShortRightArrow: '\u2192',
          ShortUpArrow: '\u2191',
          shy: '\xAD',
          Sigma: '\u03A3',
          sigma: '\u03C3',
          sigmaf: '\u03C2',
          sigmav: '\u03C2',
          sim: '\u223C',
          simdot: '\u2A6A',
          sime: '\u2243',
          simeq: '\u2243',
          simg: '\u2A9E',
          simgE: '\u2AA0',
          siml: '\u2A9D',
          simlE: '\u2A9F',
          simne: '\u2246',
          simplus: '\u2A24',
          simrarr: '\u2972',
          slarr: '\u2190',
          SmallCircle: '\u2218',
          smallsetminus: '\u2216',
          smashp: '\u2A33',
          smeparsl: '\u29E4',
          smid: '\u2223',
          smile: '\u2323',
          smt: '\u2AAA',
          smte: '\u2AAC',
          smtes: '\u2AAC\uFE00',
          SOFTcy: '\u042C',
          softcy: '\u044C',
          solbar: '\u233F',
          solb: '\u29C4',
          sol: '/',
          Sopf: '\u{1D54A}',
          sopf: '\u{1D564}',
          spades: '\u2660',
          spadesuit: '\u2660',
          spar: '\u2225',
          sqcap: '\u2293',
          sqcaps: '\u2293\uFE00',
          sqcup: '\u2294',
          sqcups: '\u2294\uFE00',
          Sqrt: '\u221A',
          sqsub: '\u228F',
          sqsube: '\u2291',
          sqsubset: '\u228F',
          sqsubseteq: '\u2291',
          sqsup: '\u2290',
          sqsupe: '\u2292',
          sqsupset: '\u2290',
          sqsupseteq: '\u2292',
          square: '\u25A1',
          Square: '\u25A1',
          SquareIntersection: '\u2293',
          SquareSubset: '\u228F',
          SquareSubsetEqual: '\u2291',
          SquareSuperset: '\u2290',
          SquareSupersetEqual: '\u2292',
          SquareUnion: '\u2294',
          squarf: '\u25AA',
          squ: '\u25A1',
          squf: '\u25AA',
          srarr: '\u2192',
          Sscr: '\u{1D4AE}',
          sscr: '\u{1D4C8}',
          ssetmn: '\u2216',
          ssmile: '\u2323',
          sstarf: '\u22C6',
          Star: '\u22C6',
          star: '\u2606',
          starf: '\u2605',
          straightepsilon: '\u03F5',
          straightphi: '\u03D5',
          strns: '\xAF',
          sub: '\u2282',
          Sub: '\u22D0',
          subdot: '\u2ABD',
          subE: '\u2AC5',
          sube: '\u2286',
          subedot: '\u2AC3',
          submult: '\u2AC1',
          subnE: '\u2ACB',
          subne: '\u228A',
          subplus: '\u2ABF',
          subrarr: '\u2979',
          subset: '\u2282',
          Subset: '\u22D0',
          subseteq: '\u2286',
          subseteqq: '\u2AC5',
          SubsetEqual: '\u2286',
          subsetneq: '\u228A',
          subsetneqq: '\u2ACB',
          subsim: '\u2AC7',
          subsub: '\u2AD5',
          subsup: '\u2AD3',
          succapprox: '\u2AB8',
          succ: '\u227B',
          succcurlyeq: '\u227D',
          Succeeds: '\u227B',
          SucceedsEqual: '\u2AB0',
          SucceedsSlantEqual: '\u227D',
          SucceedsTilde: '\u227F',
          succeq: '\u2AB0',
          succnapprox: '\u2ABA',
          succneqq: '\u2AB6',
          succnsim: '\u22E9',
          succsim: '\u227F',
          SuchThat: '\u220B',
          sum: '\u2211',
          Sum: '\u2211',
          sung: '\u266A',
          sup1: '\xB9',
          sup2: '\xB2',
          sup3: '\xB3',
          sup: '\u2283',
          Sup: '\u22D1',
          supdot: '\u2ABE',
          supdsub: '\u2AD8',
          supE: '\u2AC6',
          supe: '\u2287',
          supedot: '\u2AC4',
          Superset: '\u2283',
          SupersetEqual: '\u2287',
          suphsol: '\u27C9',
          suphsub: '\u2AD7',
          suplarr: '\u297B',
          supmult: '\u2AC2',
          supnE: '\u2ACC',
          supne: '\u228B',
          supplus: '\u2AC0',
          supset: '\u2283',
          Supset: '\u22D1',
          supseteq: '\u2287',
          supseteqq: '\u2AC6',
          supsetneq: '\u228B',
          supsetneqq: '\u2ACC',
          supsim: '\u2AC8',
          supsub: '\u2AD4',
          supsup: '\u2AD6',
          swarhk: '\u2926',
          swarr: '\u2199',
          swArr: '\u21D9',
          swarrow: '\u2199',
          swnwar: '\u292A',
          szlig: '\xDF',
          Tab: '	',
          target: '\u2316',
          Tau: '\u03A4',
          tau: '\u03C4',
          tbrk: '\u23B4',
          Tcaron: '\u0164',
          tcaron: '\u0165',
          Tcedil: '\u0162',
          tcedil: '\u0163',
          Tcy: '\u0422',
          tcy: '\u0442',
          tdot: '\u20DB',
          telrec: '\u2315',
          Tfr: '\u{1D517}',
          tfr: '\u{1D531}',
          there4: '\u2234',
          therefore: '\u2234',
          Therefore: '\u2234',
          Theta: '\u0398',
          theta: '\u03B8',
          thetasym: '\u03D1',
          thetav: '\u03D1',
          thickapprox: '\u2248',
          thicksim: '\u223C',
          ThickSpace: '\u205F\u200A',
          ThinSpace: '\u2009',
          thinsp: '\u2009',
          thkap: '\u2248',
          thksim: '\u223C',
          THORN: '\xDE',
          thorn: '\xFE',
          tilde: '\u02DC',
          Tilde: '\u223C',
          TildeEqual: '\u2243',
          TildeFullEqual: '\u2245',
          TildeTilde: '\u2248',
          timesbar: '\u2A31',
          timesb: '\u22A0',
          times: '\xD7',
          timesd: '\u2A30',
          tint: '\u222D',
          toea: '\u2928',
          topbot: '\u2336',
          topcir: '\u2AF1',
          top: '\u22A4',
          Topf: '\u{1D54B}',
          topf: '\u{1D565}',
          topfork: '\u2ADA',
          tosa: '\u2929',
          tprime: '\u2034',
          trade: '\u2122',
          TRADE: '\u2122',
          triangle: '\u25B5',
          triangledown: '\u25BF',
          triangleleft: '\u25C3',
          trianglelefteq: '\u22B4',
          triangleq: '\u225C',
          triangleright: '\u25B9',
          trianglerighteq: '\u22B5',
          tridot: '\u25EC',
          trie: '\u225C',
          triminus: '\u2A3A',
          TripleDot: '\u20DB',
          triplus: '\u2A39',
          trisb: '\u29CD',
          tritime: '\u2A3B',
          trpezium: '\u23E2',
          Tscr: '\u{1D4AF}',
          tscr: '\u{1D4C9}',
          TScy: '\u0426',
          tscy: '\u0446',
          TSHcy: '\u040B',
          tshcy: '\u045B',
          Tstrok: '\u0166',
          tstrok: '\u0167',
          twixt: '\u226C',
          twoheadleftarrow: '\u219E',
          twoheadrightarrow: '\u21A0',
          Uacute: '\xDA',
          uacute: '\xFA',
          uarr: '\u2191',
          Uarr: '\u219F',
          uArr: '\u21D1',
          Uarrocir: '\u2949',
          Ubrcy: '\u040E',
          ubrcy: '\u045E',
          Ubreve: '\u016C',
          ubreve: '\u016D',
          Ucirc: '\xDB',
          ucirc: '\xFB',
          Ucy: '\u0423',
          ucy: '\u0443',
          udarr: '\u21C5',
          Udblac: '\u0170',
          udblac: '\u0171',
          udhar: '\u296E',
          ufisht: '\u297E',
          Ufr: '\u{1D518}',
          ufr: '\u{1D532}',
          Ugrave: '\xD9',
          ugrave: '\xF9',
          uHar: '\u2963',
          uharl: '\u21BF',
          uharr: '\u21BE',
          uhblk: '\u2580',
          ulcorn: '\u231C',
          ulcorner: '\u231C',
          ulcrop: '\u230F',
          ultri: '\u25F8',
          Umacr: '\u016A',
          umacr: '\u016B',
          uml: '\xA8',
          UnderBar: '_',
          UnderBrace: '\u23DF',
          UnderBracket: '\u23B5',
          UnderParenthesis: '\u23DD',
          Union: '\u22C3',
          UnionPlus: '\u228E',
          Uogon: '\u0172',
          uogon: '\u0173',
          Uopf: '\u{1D54C}',
          uopf: '\u{1D566}',
          UpArrowBar: '\u2912',
          uparrow: '\u2191',
          UpArrow: '\u2191',
          Uparrow: '\u21D1',
          UpArrowDownArrow: '\u21C5',
          updownarrow: '\u2195',
          UpDownArrow: '\u2195',
          Updownarrow: '\u21D5',
          UpEquilibrium: '\u296E',
          upharpoonleft: '\u21BF',
          upharpoonright: '\u21BE',
          uplus: '\u228E',
          UpperLeftArrow: '\u2196',
          UpperRightArrow: '\u2197',
          upsi: '\u03C5',
          Upsi: '\u03D2',
          upsih: '\u03D2',
          Upsilon: '\u03A5',
          upsilon: '\u03C5',
          UpTeeArrow: '\u21A5',
          UpTee: '\u22A5',
          upuparrows: '\u21C8',
          urcorn: '\u231D',
          urcorner: '\u231D',
          urcrop: '\u230E',
          Uring: '\u016E',
          uring: '\u016F',
          urtri: '\u25F9',
          Uscr: '\u{1D4B0}',
          uscr: '\u{1D4CA}',
          utdot: '\u22F0',
          Utilde: '\u0168',
          utilde: '\u0169',
          utri: '\u25B5',
          utrif: '\u25B4',
          uuarr: '\u21C8',
          Uuml: '\xDC',
          uuml: '\xFC',
          uwangle: '\u29A7',
          vangrt: '\u299C',
          varepsilon: '\u03F5',
          varkappa: '\u03F0',
          varnothing: '\u2205',
          varphi: '\u03D5',
          varpi: '\u03D6',
          varpropto: '\u221D',
          varr: '\u2195',
          vArr: '\u21D5',
          varrho: '\u03F1',
          varsigma: '\u03C2',
          varsubsetneq: '\u228A\uFE00',
          varsubsetneqq: '\u2ACB\uFE00',
          varsupsetneq: '\u228B\uFE00',
          varsupsetneqq: '\u2ACC\uFE00',
          vartheta: '\u03D1',
          vartriangleleft: '\u22B2',
          vartriangleright: '\u22B3',
          vBar: '\u2AE8',
          Vbar: '\u2AEB',
          vBarv: '\u2AE9',
          Vcy: '\u0412',
          vcy: '\u0432',
          vdash: '\u22A2',
          vDash: '\u22A8',
          Vdash: '\u22A9',
          VDash: '\u22AB',
          Vdashl: '\u2AE6',
          veebar: '\u22BB',
          vee: '\u2228',
          Vee: '\u22C1',
          veeeq: '\u225A',
          vellip: '\u22EE',
          verbar: '|',
          Verbar: '\u2016',
          vert: '|',
          Vert: '\u2016',
          VerticalBar: '\u2223',
          VerticalLine: '|',
          VerticalSeparator: '\u2758',
          VerticalTilde: '\u2240',
          VeryThinSpace: '\u200A',
          Vfr: '\u{1D519}',
          vfr: '\u{1D533}',
          vltri: '\u22B2',
          vnsub: '\u2282\u20D2',
          vnsup: '\u2283\u20D2',
          Vopf: '\u{1D54D}',
          vopf: '\u{1D567}',
          vprop: '\u221D',
          vrtri: '\u22B3',
          Vscr: '\u{1D4B1}',
          vscr: '\u{1D4CB}',
          vsubnE: '\u2ACB\uFE00',
          vsubne: '\u228A\uFE00',
          vsupnE: '\u2ACC\uFE00',
          vsupne: '\u228B\uFE00',
          Vvdash: '\u22AA',
          vzigzag: '\u299A',
          Wcirc: '\u0174',
          wcirc: '\u0175',
          wedbar: '\u2A5F',
          wedge: '\u2227',
          Wedge: '\u22C0',
          wedgeq: '\u2259',
          weierp: '\u2118',
          Wfr: '\u{1D51A}',
          wfr: '\u{1D534}',
          Wopf: '\u{1D54E}',
          wopf: '\u{1D568}',
          wp: '\u2118',
          wr: '\u2240',
          wreath: '\u2240',
          Wscr: '\u{1D4B2}',
          wscr: '\u{1D4CC}',
          xcap: '\u22C2',
          xcirc: '\u25EF',
          xcup: '\u22C3',
          xdtri: '\u25BD',
          Xfr: '\u{1D51B}',
          xfr: '\u{1D535}',
          xharr: '\u27F7',
          xhArr: '\u27FA',
          Xi: '\u039E',
          xi: '\u03BE',
          xlarr: '\u27F5',
          xlArr: '\u27F8',
          xmap: '\u27FC',
          xnis: '\u22FB',
          xodot: '\u2A00',
          Xopf: '\u{1D54F}',
          xopf: '\u{1D569}',
          xoplus: '\u2A01',
          xotime: '\u2A02',
          xrarr: '\u27F6',
          xrArr: '\u27F9',
          Xscr: '\u{1D4B3}',
          xscr: '\u{1D4CD}',
          xsqcup: '\u2A06',
          xuplus: '\u2A04',
          xutri: '\u25B3',
          xvee: '\u22C1',
          xwedge: '\u22C0',
          Yacute: '\xDD',
          yacute: '\xFD',
          YAcy: '\u042F',
          yacy: '\u044F',
          Ycirc: '\u0176',
          ycirc: '\u0177',
          Ycy: '\u042B',
          ycy: '\u044B',
          yen: '\xA5',
          Yfr: '\u{1D51C}',
          yfr: '\u{1D536}',
          YIcy: '\u0407',
          yicy: '\u0457',
          Yopf: '\u{1D550}',
          yopf: '\u{1D56A}',
          Yscr: '\u{1D4B4}',
          yscr: '\u{1D4CE}',
          YUcy: '\u042E',
          yucy: '\u044E',
          yuml: '\xFF',
          Yuml: '\u0178',
          Zacute: '\u0179',
          zacute: '\u017A',
          Zcaron: '\u017D',
          zcaron: '\u017E',
          Zcy: '\u0417',
          zcy: '\u0437',
          Zdot: '\u017B',
          zdot: '\u017C',
          zeetrf: '\u2128',
          ZeroWidthSpace: '\u200B',
          Zeta: '\u0396',
          zeta: '\u03B6',
          zfr: '\u{1D537}',
          Zfr: '\u2128',
          ZHcy: '\u0416',
          zhcy: '\u0436',
          zigrarr: '\u21DD',
          zopf: '\u{1D56B}',
          Zopf: '\u2124',
          Zscr: '\u{1D4B5}',
          zscr: '\u{1D4CF}',
          zwj: '\u200D',
          zwnj: '\u200C',
        }
      },
    }),
    w8 = He({
      '../../node_modules/entities/lib/maps/legacy.json'(e, t) {
        t.exports = {
          Aacute: '\xC1',
          aacute: '\xE1',
          Acirc: '\xC2',
          acirc: '\xE2',
          acute: '\xB4',
          AElig: '\xC6',
          aelig: '\xE6',
          Agrave: '\xC0',
          agrave: '\xE0',
          amp: '&',
          AMP: '&',
          Aring: '\xC5',
          aring: '\xE5',
          Atilde: '\xC3',
          atilde: '\xE3',
          Auml: '\xC4',
          auml: '\xE4',
          brvbar: '\xA6',
          Ccedil: '\xC7',
          ccedil: '\xE7',
          cedil: '\xB8',
          cent: '\xA2',
          copy: '\xA9',
          COPY: '\xA9',
          curren: '\xA4',
          deg: '\xB0',
          divide: '\xF7',
          Eacute: '\xC9',
          eacute: '\xE9',
          Ecirc: '\xCA',
          ecirc: '\xEA',
          Egrave: '\xC8',
          egrave: '\xE8',
          ETH: '\xD0',
          eth: '\xF0',
          Euml: '\xCB',
          euml: '\xEB',
          frac12: '\xBD',
          frac14: '\xBC',
          frac34: '\xBE',
          gt: '>',
          GT: '>',
          Iacute: '\xCD',
          iacute: '\xED',
          Icirc: '\xCE',
          icirc: '\xEE',
          iexcl: '\xA1',
          Igrave: '\xCC',
          igrave: '\xEC',
          iquest: '\xBF',
          Iuml: '\xCF',
          iuml: '\xEF',
          laquo: '\xAB',
          lt: '<',
          LT: '<',
          macr: '\xAF',
          micro: '\xB5',
          middot: '\xB7',
          nbsp: '\xA0',
          not: '\xAC',
          Ntilde: '\xD1',
          ntilde: '\xF1',
          Oacute: '\xD3',
          oacute: '\xF3',
          Ocirc: '\xD4',
          ocirc: '\xF4',
          Ograve: '\xD2',
          ograve: '\xF2',
          ordf: '\xAA',
          ordm: '\xBA',
          Oslash: '\xD8',
          oslash: '\xF8',
          Otilde: '\xD5',
          otilde: '\xF5',
          Ouml: '\xD6',
          ouml: '\xF6',
          para: '\xB6',
          plusmn: '\xB1',
          pound: '\xA3',
          quot: '"',
          QUOT: '"',
          raquo: '\xBB',
          reg: '\xAE',
          REG: '\xAE',
          sect: '\xA7',
          shy: '\xAD',
          sup1: '\xB9',
          sup2: '\xB2',
          sup3: '\xB3',
          szlig: '\xDF',
          THORN: '\xDE',
          thorn: '\xFE',
          times: '\xD7',
          Uacute: '\xDA',
          uacute: '\xFA',
          Ucirc: '\xDB',
          ucirc: '\xFB',
          Ugrave: '\xD9',
          ugrave: '\xF9',
          uml: '\xA8',
          Uuml: '\xDC',
          uuml: '\xFC',
          Yacute: '\xDD',
          yacute: '\xFD',
          yen: '\xA5',
          yuml: '\xFF',
        }
      },
    }),
    ng = He({
      '../../node_modules/entities/lib/maps/xml.json'(e, t) {
        t.exports = {amp: '&', apos: "'", gt: '>', lt: '<', quot: '"'}
      },
    }),
    B8 = He({
      '../../node_modules/entities/lib/maps/decode.json'(e, t) {
        t.exports = {
          0: 65533,
          128: 8364,
          130: 8218,
          131: 402,
          132: 8222,
          133: 8230,
          134: 8224,
          135: 8225,
          136: 710,
          137: 8240,
          138: 352,
          139: 8249,
          140: 338,
          142: 381,
          145: 8216,
          146: 8217,
          147: 8220,
          148: 8221,
          149: 8226,
          150: 8211,
          151: 8212,
          152: 732,
          153: 8482,
          154: 353,
          155: 8250,
          156: 339,
          158: 382,
          159: 376,
        }
      },
    }),
    T8 = He({
      '../../node_modules/entities/lib/decode_codepoint.js'(e) {
        var t =
          (e && e.__importDefault) ||
          function (o) {
            return o && o.__esModule ? o : {default: o}
          }
        Object.defineProperty(e, '__esModule', {value: !0})
        var r = t(B8()),
          n =
            String.fromCodePoint ||
            function (o) {
              var u = ''
              return (
                o > 65535 &&
                  ((o -= 65536),
                  (u += String.fromCharCode(((o >>> 10) & 1023) | 55296)),
                  (o = 56320 | (o & 1023))),
                (u += String.fromCharCode(o)),
                u
              )
            }
        function a(o) {
          return (o >= 55296 && o <= 57343) || o > 1114111
            ? '\uFFFD'
            : (o in r.default && (o = r.default[o]), n(o))
        }
        e.default = a
      },
    }),
    eg = He({
      '../../node_modules/entities/lib/decode.js'(e) {
        var t =
          (e && e.__importDefault) ||
          function (y) {
            return y && y.__esModule ? y : {default: y}
          }
        Object.defineProperty(e, '__esModule', {value: !0}),
          (e.decodeHTML = e.decodeHTMLStrict = e.decodeXML = void 0)
        var r = t(rg()),
          n = t(w8()),
          a = t(ng()),
          o = t(T8()),
          u = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g
        ;(e.decodeXML = i(a.default)), (e.decodeHTMLStrict = i(r.default))
        function i(y) {
          var A = d(y)
          return function (g) {
            return String(g).replace(u, A)
          }
        }
        var s = function (y, A) {
          return y < A ? 1 : -1
        }
        e.decodeHTML = (function () {
          for (
            var y = Object.keys(n.default).sort(s),
              A = Object.keys(r.default).sort(s),
              g = 0,
              h = 0;
            g < A.length;
            g++
          )
            y[h] === A[g] ? ((A[g] += ';?'), h++) : (A[g] += ';')
          var E = new RegExp(
              '&(?:' + A.join('|') + '|#[xX][\\da-fA-F]+;?|#\\d+;?)',
              'g'
            ),
            b = d(r.default)
          function x(S) {
            return S.substr(-1) !== ';' && (S += ';'), b(S)
          }
          return function (S) {
            return String(S).replace(E, x)
          }
        })()
        function d(y) {
          return function (A) {
            if (A.charAt(1) === '#') {
              var g = A.charAt(2)
              return g === 'X' || g === 'x'
                ? o.default(parseInt(A.substr(3), 16))
                : o.default(parseInt(A.substr(2), 10))
            }
            return y[A.slice(1, -1)] || A
          }
        }
      },
    }),
    tg = He({
      '../../node_modules/entities/lib/encode.js'(e) {
        var t =
          (e && e.__importDefault) ||
          function (P) {
            return P && P.__esModule ? P : {default: P}
          }
        Object.defineProperty(e, '__esModule', {value: !0}),
          (e.escapeUTF8 =
            e.escape =
            e.encodeNonAsciiHTML =
            e.encodeHTML =
            e.encodeXML =
              void 0)
        var r = t(ng()),
          n = s(r.default),
          a = d(n)
        e.encodeXML = S(n)
        var o = t(rg()),
          u = s(o.default),
          i = d(u)
        ;(e.encodeHTML = h(u, i)), (e.encodeNonAsciiHTML = S(u))
        function s(P) {
          return Object.keys(P)
            .sort()
            .reduce(function (N, $) {
              return (N[P[$]] = '&' + $ + ';'), N
            }, {})
        }
        function d(P) {
          for (
            var N = [], $ = [], w = 0, j = Object.keys(P);
            w < j.length;
            w++
          ) {
            var I = j[w]
            I.length === 1 ? N.push('\\' + I) : $.push(I)
          }
          N.sort()
          for (var z = 0; z < N.length - 1; z++) {
            for (
              var K = z;
              K < N.length - 1 &&
              N[K].charCodeAt(1) + 1 === N[K + 1].charCodeAt(1);

            )
              K += 1
            var U = 1 + K - z
            U < 3 || N.splice(z, U, N[z] + '-' + N[K])
          }
          return $.unshift('[' + N.join('') + ']'), new RegExp($.join('|'), 'g')
        }
        var y =
            /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
          A =
            String.prototype.codePointAt != null
              ? function (P) {
                  return P.codePointAt(0)
                }
              : function (P) {
                  return (
                    (P.charCodeAt(0) - 55296) * 1024 +
                    P.charCodeAt(1) -
                    56320 +
                    65536
                  )
                }
        function g(P) {
          return (
            '&#x' +
            (P.length > 1 ? A(P) : P.charCodeAt(0)).toString(16).toUpperCase() +
            ';'
          )
        }
        function h(P, N) {
          return function ($) {
            return $.replace(N, function (w) {
              return P[w]
            }).replace(y, g)
          }
        }
        var E = new RegExp(a.source + '|' + y.source, 'g')
        function b(P) {
          return P.replace(E, g)
        }
        e.escape = b
        function x(P) {
          return P.replace(a, g)
        }
        e.escapeUTF8 = x
        function S(P) {
          return function (N) {
            return N.replace(E, function ($) {
              return P[$] || g($)
            })
          }
        }
      },
    }),
    _8 = He({
      '../../node_modules/entities/lib/index.js'(e) {
        Object.defineProperty(e, '__esModule', {value: !0}),
          (e.decodeXMLStrict =
            e.decodeHTML5Strict =
            e.decodeHTML4Strict =
            e.decodeHTML5 =
            e.decodeHTML4 =
            e.decodeHTMLStrict =
            e.decodeHTML =
            e.decodeXML =
            e.encodeHTML5 =
            e.encodeHTML4 =
            e.escapeUTF8 =
            e.escape =
            e.encodeNonAsciiHTML =
            e.encodeHTML =
            e.encodeXML =
            e.encode =
            e.decodeStrict =
            e.decode =
              void 0)
        var t = eg(),
          r = tg()
        function n(s, d) {
          return (!d || d <= 0 ? t.decodeXML : t.decodeHTML)(s)
        }
        e.decode = n
        function a(s, d) {
          return (!d || d <= 0 ? t.decodeXML : t.decodeHTMLStrict)(s)
        }
        e.decodeStrict = a
        function o(s, d) {
          return (!d || d <= 0 ? r.encodeXML : r.encodeHTML)(s)
        }
        e.encode = o
        var u = tg()
        Object.defineProperty(e, 'encodeXML', {
          enumerable: !0,
          get: function () {
            return u.encodeXML
          },
        }),
          Object.defineProperty(e, 'encodeHTML', {
            enumerable: !0,
            get: function () {
              return u.encodeHTML
            },
          }),
          Object.defineProperty(e, 'encodeNonAsciiHTML', {
            enumerable: !0,
            get: function () {
              return u.encodeNonAsciiHTML
            },
          }),
          Object.defineProperty(e, 'escape', {
            enumerable: !0,
            get: function () {
              return u.escape
            },
          }),
          Object.defineProperty(e, 'escapeUTF8', {
            enumerable: !0,
            get: function () {
              return u.escapeUTF8
            },
          }),
          Object.defineProperty(e, 'encodeHTML4', {
            enumerable: !0,
            get: function () {
              return u.encodeHTML
            },
          }),
          Object.defineProperty(e, 'encodeHTML5', {
            enumerable: !0,
            get: function () {
              return u.encodeHTML
            },
          })
        var i = eg()
        Object.defineProperty(e, 'decodeXML', {
          enumerable: !0,
          get: function () {
            return i.decodeXML
          },
        }),
          Object.defineProperty(e, 'decodeHTML', {
            enumerable: !0,
            get: function () {
              return i.decodeHTML
            },
          }),
          Object.defineProperty(e, 'decodeHTMLStrict', {
            enumerable: !0,
            get: function () {
              return i.decodeHTMLStrict
            },
          }),
          Object.defineProperty(e, 'decodeHTML4', {
            enumerable: !0,
            get: function () {
              return i.decodeHTML
            },
          }),
          Object.defineProperty(e, 'decodeHTML5', {
            enumerable: !0,
            get: function () {
              return i.decodeHTML
            },
          }),
          Object.defineProperty(e, 'decodeHTML4Strict', {
            enumerable: !0,
            get: function () {
              return i.decodeHTMLStrict
            },
          }),
          Object.defineProperty(e, 'decodeHTML5Strict', {
            enumerable: !0,
            get: function () {
              return i.decodeHTMLStrict
            },
          }),
          Object.defineProperty(e, 'decodeXMLStrict', {
            enumerable: !0,
            get: function () {
              return i.decodeXML
            },
          })
      },
    }),
    O8 = He({
      '../../node_modules/ansi-to-html/lib/ansi_to_html.js'(e, t) {
        function r(O, T) {
          if (!(O instanceof T))
            throw new TypeError('Cannot call a class as a function')
        }
        function n(O, T) {
          for (var M = 0; M < T.length; M++) {
            var G = T[M]
            ;(G.enumerable = G.enumerable || !1),
              (G.configurable = !0),
              'value' in G && (G.writable = !0),
              Object.defineProperty(O, G.key, G)
          }
        }
        function a(O, T, M) {
          return T && n(O.prototype, T), M && n(O, M), O
        }
        function o(O) {
          if (typeof Symbol > 'u' || O[Symbol.iterator] == null) {
            if (Array.isArray(O) || (O = u(O))) {
              var T = 0,
                M = function () {}
              return {
                s: M,
                n: function () {
                  return T >= O.length ? {done: !0} : {done: !1, value: O[T++]}
                },
                e: function (se) {
                  throw se
                },
                f: M,
              }
            }
            throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
          }
          var G,
            Y = !0,
            V = !1,
            Q
          return {
            s: function () {
              G = O[Symbol.iterator]()
            },
            n: function () {
              var se = G.next()
              return (Y = se.done), se
            },
            e: function (se) {
              ;(V = !0), (Q = se)
            },
            f: function () {
              try {
                !Y && G.return != null && G.return()
              } finally {
                if (V) throw Q
              }
            },
          }
        }
        function u(O, T) {
          if (O) {
            if (typeof O == 'string') return i(O, T)
            var M = Object.prototype.toString.call(O).slice(8, -1)
            if (
              (M === 'Object' && O.constructor && (M = O.constructor.name),
              M === 'Map' || M === 'Set')
            )
              return Array.from(M)
            if (
              M === 'Arguments' ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(M)
            )
              return i(O, T)
          }
        }
        function i(O, T) {
          ;(T == null || T > O.length) && (T = O.length)
          for (var M = 0, G = new Array(T); M < T; M++) G[M] = O[M]
          return G
        }
        var s = _8(),
          d = {
            fg: '#FFF',
            bg: '#000',
            newline: !1,
            escapeXML: !1,
            stream: !1,
            colors: y(),
          }
        function y() {
          var O = {
            0: '#000',
            1: '#A00',
            2: '#0A0',
            3: '#A50',
            4: '#00A',
            5: '#A0A',
            6: '#0AA',
            7: '#AAA',
            8: '#555',
            9: '#F55',
            10: '#5F5',
            11: '#FF5',
            12: '#55F',
            13: '#F5F',
            14: '#5FF',
            15: '#FFF',
          }
          return (
            P(0, 5).forEach(function (T) {
              P(0, 5).forEach(function (M) {
                P(0, 5).forEach(function (G) {
                  return A(T, M, G, O)
                })
              })
            }),
            P(0, 23).forEach(function (T) {
              var M = T + 232,
                G = g(T * 10 + 8)
              O[M] = '#' + G + G + G
            }),
            O
          )
        }
        function A(O, T, M, G) {
          var Y = 16 + O * 36 + T * 6 + M,
            V = O > 0 ? O * 40 + 55 : 0,
            Q = T > 0 ? T * 40 + 55 : 0,
            se = M > 0 ? M * 40 + 55 : 0
          G[Y] = h([V, Q, se])
        }
        function g(O) {
          for (var T = O.toString(16); T.length < 2; ) T = '0' + T
          return T
        }
        function h(O) {
          var T = [],
            M = o(O),
            G
          try {
            for (M.s(); !(G = M.n()).done; ) {
              var Y = G.value
              T.push(g(Y))
            }
          } catch (V) {
            M.e(V)
          } finally {
            M.f()
          }
          return '#' + T.join('')
        }
        function E(O, T, M, G) {
          var Y
          return (
            T === 'text'
              ? (Y = w(M, G))
              : T === 'display'
              ? (Y = x(O, M, G))
              : T === 'xterm256'
              ? (Y = z(O, G.colors[M]))
              : T === 'rgb' && (Y = b(O, M)),
            Y
          )
        }
        function b(O, T) {
          T = T.substring(2).slice(0, -1)
          var M = +T.substr(0, 2),
            G = T.substring(5).split(';'),
            Y = G.map(function (V) {
              return ('0' + Number(V).toString(16)).substr(-2)
            }).join('')
          return I(O, (M === 38 ? 'color:#' : 'background-color:#') + Y)
        }
        function x(O, T, M) {
          T = parseInt(T, 10)
          var G = {
              '-1': function () {
                return '<br/>'
              },
              0: function () {
                return O.length && S(O)
              },
              1: function () {
                return j(O, 'b')
              },
              3: function () {
                return j(O, 'i')
              },
              4: function () {
                return j(O, 'u')
              },
              8: function () {
                return I(O, 'display:none')
              },
              9: function () {
                return j(O, 'strike')
              },
              22: function () {
                return I(
                  O,
                  'font-weight:normal;text-decoration:none;font-style:normal'
                )
              },
              23: function () {
                return U(O, 'i')
              },
              24: function () {
                return U(O, 'u')
              },
              39: function () {
                return z(O, M.fg)
              },
              49: function () {
                return K(O, M.bg)
              },
              53: function () {
                return I(O, 'text-decoration:overline')
              },
            },
            Y
          return (
            G[T]
              ? (Y = G[T]())
              : 4 < T && T < 7
              ? (Y = j(O, 'blink'))
              : 29 < T && T < 38
              ? (Y = z(O, M.colors[T - 30]))
              : 39 < T && T < 48
              ? (Y = K(O, M.colors[T - 40]))
              : 89 < T && T < 98
              ? (Y = z(O, M.colors[8 + (T - 90)]))
              : 99 < T && T < 108 && (Y = K(O, M.colors[8 + (T - 100)])),
            Y
          )
        }
        function S(O) {
          var T = O.slice(0)
          return (
            (O.length = 0),
            T.reverse()
              .map(function (M) {
                return '</' + M + '>'
              })
              .join('')
          )
        }
        function P(O, T) {
          for (var M = [], G = O; G <= T; G++) M.push(G)
          return M
        }
        function N(O) {
          return function (T) {
            return (O === null || T.category !== O) && O !== 'all'
          }
        }
        function $(O) {
          O = parseInt(O, 10)
          var T = null
          return (
            O === 0
              ? (T = 'all')
              : O === 1
              ? (T = 'bold')
              : 2 < O && O < 5
              ? (T = 'underline')
              : 4 < O && O < 7
              ? (T = 'blink')
              : O === 8
              ? (T = 'hide')
              : O === 9
              ? (T = 'strike')
              : (29 < O && O < 38) || O === 39 || (89 < O && O < 98)
              ? (T = 'foreground-color')
              : ((39 < O && O < 48) || O === 49 || (99 < O && O < 108)) &&
                (T = 'background-color'),
            T
          )
        }
        function w(O, T) {
          return T.escapeXML ? s.encodeXML(O) : O
        }
        function j(O, T, M) {
          return (
            M || (M = ''),
            O.push(T),
            '<'.concat(T).concat(M ? ' style="'.concat(M, '"') : '', '>')
          )
        }
        function I(O, T) {
          return j(O, 'span', T)
        }
        function z(O, T) {
          return j(O, 'span', 'color:' + T)
        }
        function K(O, T) {
          return j(O, 'span', 'background-color:' + T)
        }
        function U(O, T) {
          var M
          if ((O.slice(-1)[0] === T && (M = O.pop()), M)) return '</' + T + '>'
        }
        function ue(O, T, M) {
          var G = !1,
            Y = 3
          function V() {
            return ''
          }
          function Q(ie, Ae) {
            return M('xterm256', Ae), ''
          }
          function se(ie) {
            return T.newline ? M('display', -1) : M('text', ie), ''
          }
          function Oe(ie, Ae) {
            ;(G = !0),
              Ae.trim().length === 0 && (Ae = '0'),
              (Ae = Ae.trimRight(';').split(';'))
            var Xr = o(Ae),
              di
            try {
              for (Xr.s(); !(di = Xr.n()).done; ) {
                var yy = di.value
                M('display', yy)
              }
            } catch (by) {
              Xr.e(by)
            } finally {
              Xr.f()
            }
            return ''
          }
          function Re(ie) {
            return M('text', ie), ''
          }
          function J(ie) {
            return M('rgb', ie), ''
          }
          var qe = [
            {pattern: /^\x08+/, sub: V},
            {pattern: /^\x1b\[[012]?K/, sub: V},
            {pattern: /^\x1b\[\(B/, sub: V},
            {pattern: /^\x1b\[[34]8;2;\d+;\d+;\d+m/, sub: J},
            {pattern: /^\x1b\[38;5;(\d+)m/, sub: Q},
            {pattern: /^\n/, sub: se},
            {pattern: /^\r+\n/, sub: se},
            {pattern: /^\x1b\[((?:\d{1,3};?)+|)m/, sub: Oe},
            {pattern: /^\x1b\[\d?J/, sub: V},
            {pattern: /^\x1b\[\d{0,3};\d{0,3}f/, sub: V},
            {pattern: /^\x1b\[?[\d;]{0,3}/, sub: V},
            {pattern: /^(([^\x1b\x08\r\n])+)/, sub: Re},
          ]
          function B(ie, Ae) {
            ;(Ae > Y && G) || ((G = !1), (O = O.replace(ie.pattern, ie.sub)))
          }
          var R = [],
            k = O,
            _ = k.length
          e: for (; _ > 0; ) {
            for (var L = 0, H = 0, de = qe.length; H < de; L = ++H) {
              var ae = qe[L]
              if ((B(ae, L), O.length !== _)) {
                _ = O.length
                continue e
              }
            }
            if (O.length === _) break
            R.push(0), (_ = O.length)
          }
          return R
        }
        function te(O, T, M) {
          return (
            T !== 'text' &&
              ((O = O.filter(N($(M)))),
              O.push({token: T, data: M, category: $(M)})),
            O
          )
        }
        var X = (function () {
          function O(T) {
            r(this, O),
              (T = T || {}),
              T.colors && (T.colors = Object.assign({}, d.colors, T.colors)),
              (this.options = Object.assign({}, d, T)),
              (this.stack = []),
              (this.stickyStack = [])
          }
          return (
            a(O, [
              {
                key: 'toHtml',
                value: function (T) {
                  var M = this
                  T = typeof T == 'string' ? [T] : T
                  var G = this.stack,
                    Y = this.options,
                    V = []
                  return (
                    this.stickyStack.forEach(function (Q) {
                      var se = E(G, Q.token, Q.data, Y)
                      se && V.push(se)
                    }),
                    ue(T.join(''), Y, function (Q, se) {
                      var Oe = E(G, Q, se, Y)
                      Oe && V.push(Oe),
                        Y.stream && (M.stickyStack = te(M.stickyStack, Q, se))
                    }),
                    G.length && V.push(S(G)),
                    V.join('')
                  )
                },
              },
            ]),
            O
          )
        })()
        t.exports = X
      },
    }),
    _J = new Error('prepareAborted'),
    {AbortController: OJ} = globalThis
  var {fetch: RJ} = oe
  var {history: PJ, document: IJ} = oe
  var R8 = Jf(O8()),
    {document: kJ} = oe
  var P8 = ((e) => (
    (e.MAIN = 'MAIN'),
    (e.NOPREVIEW = 'NOPREVIEW'),
    (e.PREPARING_STORY = 'PREPARING_STORY'),
    (e.PREPARING_DOCS = 'PREPARING_DOCS'),
    (e.ERROR = 'ERROR'),
    e
  ))(P8 || {})
  var NJ = new R8.default({escapeXML: !0})
  var {document: jJ} = oe
  l()
  c()
  p()
  l()
  c()
  p()
  l()
  c()
  p()
  var I8 = Object.create,
    ag = Object.defineProperty,
    k8 = Object.getOwnPropertyDescriptor,
    og = Object.getOwnPropertyNames,
    N8 = Object.getPrototypeOf,
    j8 = Object.prototype.hasOwnProperty,
    Ie = (e, t) =>
      function () {
        return t || (0, e[og(e)[0]])((t = {exports: {}}).exports, t), t.exports
      },
    M8 = (e, t, r, n) => {
      if ((t && typeof t == 'object') || typeof t == 'function')
        for (let a of og(t))
          !j8.call(e, a) &&
            a !== r &&
            ag(e, a, {
              get: () => t[a],
              enumerable: !(n = k8(t, a)) || n.enumerable,
            })
      return e
    },
    Jn = (e, t, r) => (
      (r = e != null ? I8(N8(e)) : {}),
      M8(
        t || !e || !e.__esModule
          ? ag(r, 'default', {value: e, enumerable: !0})
          : r,
        e
      )
    ),
    q8 = [
      'bubbles',
      'cancelBubble',
      'cancelable',
      'composed',
      'currentTarget',
      'defaultPrevented',
      'eventPhase',
      'isTrusted',
      'returnValue',
      'srcElement',
      'target',
      'timeStamp',
      'type',
    ],
    L8 = ['detail']
  function ug(e) {
    let t = q8
      .filter((r) => e[r] !== void 0)
      .reduce((r, n) => ({...r, [n]: e[n]}), {})
    return (
      e instanceof CustomEvent &&
        L8.filter((r) => e[r] !== void 0).forEach((r) => {
          t[r] = e[r]
        }),
      t
    )
  }
  var Dg = fe(Sn(), 1),
    dg = Ie({
      'node_modules/has-symbols/shams.js'(e, t) {
        'use strict'
        t.exports = function () {
          if (
            typeof Symbol != 'function' ||
            typeof Object.getOwnPropertySymbols != 'function'
          )
            return !1
          if (typeof Symbol.iterator == 'symbol') return !0
          var n = {},
            a = Symbol('test'),
            o = Object(a)
          if (
            typeof a == 'string' ||
            Object.prototype.toString.call(a) !== '[object Symbol]' ||
            Object.prototype.toString.call(o) !== '[object Symbol]'
          )
            return !1
          var u = 42
          n[a] = u
          for (a in n) return !1
          if (
            (typeof Object.keys == 'function' && Object.keys(n).length !== 0) ||
            (typeof Object.getOwnPropertyNames == 'function' &&
              Object.getOwnPropertyNames(n).length !== 0)
          )
            return !1
          var i = Object.getOwnPropertySymbols(n)
          if (
            i.length !== 1 ||
            i[0] !== a ||
            !Object.prototype.propertyIsEnumerable.call(n, a)
          )
            return !1
          if (typeof Object.getOwnPropertyDescriptor == 'function') {
            var s = Object.getOwnPropertyDescriptor(n, a)
            if (s.value !== u || s.enumerable !== !0) return !1
          }
          return !0
        }
      },
    }),
    fg = Ie({
      'node_modules/has-symbols/index.js'(e, t) {
        'use strict'
        var r = typeof Symbol < 'u' && Symbol,
          n = dg()
        t.exports = function () {
          return typeof r != 'function' ||
            typeof Symbol != 'function' ||
            typeof r('foo') != 'symbol' ||
            typeof Symbol('bar') != 'symbol'
            ? !1
            : n()
        }
      },
    }),
    $8 = Ie({
      'node_modules/function-bind/implementation.js'(e, t) {
        'use strict'
        var r = 'Function.prototype.bind called on incompatible ',
          n = Array.prototype.slice,
          a = Object.prototype.toString,
          o = '[object Function]'
        t.exports = function (i) {
          var s = this
          if (typeof s != 'function' || a.call(s) !== o)
            throw new TypeError(r + s)
          for (
            var d = n.call(arguments, 1),
              y,
              A = function () {
                if (this instanceof y) {
                  var x = s.apply(this, d.concat(n.call(arguments)))
                  return Object(x) === x ? x : this
                } else return s.apply(i, d.concat(n.call(arguments)))
              },
              g = Math.max(0, s.length - d.length),
              h = [],
              E = 0;
            E < g;
            E++
          )
            h.push('$' + E)
          if (
            ((y = Function(
              'binder',
              'return function (' +
                h.join(',') +
                '){ return binder.apply(this,arguments); }'
            )(A)),
            s.prototype)
          ) {
            var b = function () {}
            ;(b.prototype = s.prototype),
              (y.prototype = new b()),
              (b.prototype = null)
          }
          return y
        }
      },
    }),
    Cu = Ie({
      'node_modules/function-bind/index.js'(e, t) {
        'use strict'
        var r = $8()
        t.exports = Function.prototype.bind || r
      },
    }),
    U8 = Ie({
      'node_modules/has/src/index.js'(e, t) {
        'use strict'
        var r = Cu()
        t.exports = r.call(Function.call, Object.prototype.hasOwnProperty)
      },
    }),
    hg = Ie({
      'node_modules/get-intrinsic/index.js'(e, t) {
        'use strict'
        var r,
          n = SyntaxError,
          a = Function,
          o = TypeError,
          u = function (te) {
            try {
              return a('"use strict"; return (' + te + ').constructor;')()
            } catch {}
          },
          i = Object.getOwnPropertyDescriptor
        if (i)
          try {
            i({}, '')
          } catch {
            i = null
          }
        var s = function () {
            throw new o()
          },
          d = i
            ? (function () {
                try {
                  return arguments.callee, s
                } catch {
                  try {
                    return i(arguments, 'callee').get
                  } catch {
                    return s
                  }
                }
              })()
            : s,
          y = fg()(),
          A =
            Object.getPrototypeOf ||
            function (te) {
              return te.__proto__
            },
          g = {},
          h = typeof Uint8Array > 'u' ? r : A(Uint8Array),
          E = {
            '%AggregateError%':
              typeof AggregateError > 'u' ? r : AggregateError,
            '%Array%': Array,
            '%ArrayBuffer%': typeof ArrayBuffer > 'u' ? r : ArrayBuffer,
            '%ArrayIteratorPrototype%': y ? A([][Symbol.iterator]()) : r,
            '%AsyncFromSyncIteratorPrototype%': r,
            '%AsyncFunction%': g,
            '%AsyncGenerator%': g,
            '%AsyncGeneratorFunction%': g,
            '%AsyncIteratorPrototype%': g,
            '%Atomics%': typeof Atomics > 'u' ? r : Atomics,
            '%BigInt%': typeof BigInt > 'u' ? r : BigInt,
            '%Boolean%': Boolean,
            '%DataView%': typeof DataView > 'u' ? r : DataView,
            '%Date%': Date,
            '%decodeURI%': decodeURI,
            '%decodeURIComponent%': decodeURIComponent,
            '%encodeURI%': encodeURI,
            '%encodeURIComponent%': encodeURIComponent,
            '%Error%': Error,
            '%eval%': eval,
            '%EvalError%': EvalError,
            '%Float32Array%': typeof Float32Array > 'u' ? r : Float32Array,
            '%Float64Array%': typeof Float64Array > 'u' ? r : Float64Array,
            '%FinalizationRegistry%':
              typeof FinalizationRegistry > 'u' ? r : FinalizationRegistry,
            '%Function%': a,
            '%GeneratorFunction%': g,
            '%Int8Array%': typeof Int8Array > 'u' ? r : Int8Array,
            '%Int16Array%': typeof Int16Array > 'u' ? r : Int16Array,
            '%Int32Array%': typeof Int32Array > 'u' ? r : Int32Array,
            '%isFinite%': isFinite,
            '%isNaN%': isNaN,
            '%IteratorPrototype%': y ? A(A([][Symbol.iterator]())) : r,
            '%JSON%': typeof JSON == 'object' ? JSON : r,
            '%Map%': typeof Map > 'u' ? r : Map,
            '%MapIteratorPrototype%':
              typeof Map > 'u' || !y ? r : A(new Map()[Symbol.iterator]()),
            '%Math%': Math,
            '%Number%': Number,
            '%Object%': Object,
            '%parseFloat%': parseFloat,
            '%parseInt%': parseInt,
            '%Promise%': typeof Promise > 'u' ? r : Promise,
            '%Proxy%': typeof Proxy > 'u' ? r : Proxy,
            '%RangeError%': RangeError,
            '%ReferenceError%': ReferenceError,
            '%Reflect%': typeof Reflect > 'u' ? r : Reflect,
            '%RegExp%': RegExp,
            '%Set%': typeof Set > 'u' ? r : Set,
            '%SetIteratorPrototype%':
              typeof Set > 'u' || !y ? r : A(new Set()[Symbol.iterator]()),
            '%SharedArrayBuffer%':
              typeof SharedArrayBuffer > 'u' ? r : SharedArrayBuffer,
            '%String%': String,
            '%StringIteratorPrototype%': y ? A(''[Symbol.iterator]()) : r,
            '%Symbol%': y ? Symbol : r,
            '%SyntaxError%': n,
            '%ThrowTypeError%': d,
            '%TypedArray%': h,
            '%TypeError%': o,
            '%Uint8Array%': typeof Uint8Array > 'u' ? r : Uint8Array,
            '%Uint8ClampedArray%':
              typeof Uint8ClampedArray > 'u' ? r : Uint8ClampedArray,
            '%Uint16Array%': typeof Uint16Array > 'u' ? r : Uint16Array,
            '%Uint32Array%': typeof Uint32Array > 'u' ? r : Uint32Array,
            '%URIError%': URIError,
            '%WeakMap%': typeof WeakMap > 'u' ? r : WeakMap,
            '%WeakRef%': typeof WeakRef > 'u' ? r : WeakRef,
            '%WeakSet%': typeof WeakSet > 'u' ? r : WeakSet,
          },
          b = function te(X) {
            var O
            if (X === '%AsyncFunction%') O = u('async function () {}')
            else if (X === '%GeneratorFunction%') O = u('function* () {}')
            else if (X === '%AsyncGeneratorFunction%')
              O = u('async function* () {}')
            else if (X === '%AsyncGenerator%') {
              var T = te('%AsyncGeneratorFunction%')
              T && (O = T.prototype)
            } else if (X === '%AsyncIteratorPrototype%') {
              var M = te('%AsyncGenerator%')
              M && (O = A(M.prototype))
            }
            return (E[X] = O), O
          },
          x = {
            '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
            '%ArrayPrototype%': ['Array', 'prototype'],
            '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
            '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
            '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
            '%ArrayProto_values%': ['Array', 'prototype', 'values'],
            '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
            '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
            '%AsyncGeneratorPrototype%': [
              'AsyncGeneratorFunction',
              'prototype',
              'prototype',
            ],
            '%BooleanPrototype%': ['Boolean', 'prototype'],
            '%DataViewPrototype%': ['DataView', 'prototype'],
            '%DatePrototype%': ['Date', 'prototype'],
            '%ErrorPrototype%': ['Error', 'prototype'],
            '%EvalErrorPrototype%': ['EvalError', 'prototype'],
            '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
            '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
            '%FunctionPrototype%': ['Function', 'prototype'],
            '%Generator%': ['GeneratorFunction', 'prototype'],
            '%GeneratorPrototype%': [
              'GeneratorFunction',
              'prototype',
              'prototype',
            ],
            '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
            '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
            '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
            '%JSONParse%': ['JSON', 'parse'],
            '%JSONStringify%': ['JSON', 'stringify'],
            '%MapPrototype%': ['Map', 'prototype'],
            '%NumberPrototype%': ['Number', 'prototype'],
            '%ObjectPrototype%': ['Object', 'prototype'],
            '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
            '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
            '%PromisePrototype%': ['Promise', 'prototype'],
            '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
            '%Promise_all%': ['Promise', 'all'],
            '%Promise_reject%': ['Promise', 'reject'],
            '%Promise_resolve%': ['Promise', 'resolve'],
            '%RangeErrorPrototype%': ['RangeError', 'prototype'],
            '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
            '%RegExpPrototype%': ['RegExp', 'prototype'],
            '%SetPrototype%': ['Set', 'prototype'],
            '%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
            '%StringPrototype%': ['String', 'prototype'],
            '%SymbolPrototype%': ['Symbol', 'prototype'],
            '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
            '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
            '%TypeErrorPrototype%': ['TypeError', 'prototype'],
            '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
            '%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
            '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
            '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
            '%URIErrorPrototype%': ['URIError', 'prototype'],
            '%WeakMapPrototype%': ['WeakMap', 'prototype'],
            '%WeakSetPrototype%': ['WeakSet', 'prototype'],
          },
          S = Cu(),
          P = U8(),
          N = S.call(Function.call, Array.prototype.concat),
          $ = S.call(Function.apply, Array.prototype.splice),
          w = S.call(Function.call, String.prototype.replace),
          j = S.call(Function.call, String.prototype.slice),
          I = S.call(Function.call, RegExp.prototype.exec),
          z =
            /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
          K = /\\(\\)?/g,
          U = function (X) {
            var O = j(X, 0, 1),
              T = j(X, -1)
            if (O === '%' && T !== '%')
              throw new n('invalid intrinsic syntax, expected closing `%`')
            if (T === '%' && O !== '%')
              throw new n('invalid intrinsic syntax, expected opening `%`')
            var M = []
            return (
              w(X, z, function (G, Y, V, Q) {
                M[M.length] = V ? w(Q, K, '$1') : Y || G
              }),
              M
            )
          },
          ue = function (X, O) {
            var T = X,
              M
            if ((P(x, T) && ((M = x[T]), (T = '%' + M[0] + '%')), P(E, T))) {
              var G = E[T]
              if ((G === g && (G = b(T)), typeof G > 'u' && !O))
                throw new o(
                  'intrinsic ' +
                    X +
                    ' exists, but is not available. Please file an issue!'
                )
              return {alias: M, name: T, value: G}
            }
            throw new n('intrinsic ' + X + ' does not exist!')
          }
        t.exports = function (X, O) {
          if (typeof X != 'string' || X.length === 0)
            throw new o('intrinsic name must be a non-empty string')
          if (arguments.length > 1 && typeof O != 'boolean')
            throw new o('"allowMissing" argument must be a boolean')
          if (I(/^%?[^%]*%?$/, X) === null)
            throw new n(
              '`%` may not be present anywhere but at the beginning and end of the intrinsic name'
            )
          var T = U(X),
            M = T.length > 0 ? T[0] : '',
            G = ue('%' + M + '%', O),
            Y = G.name,
            V = G.value,
            Q = !1,
            se = G.alias
          se && ((M = se[0]), $(T, N([0, 1], se)))
          for (var Oe = 1, Re = !0; Oe < T.length; Oe += 1) {
            var J = T[Oe],
              qe = j(J, 0, 1),
              B = j(J, -1)
            if (
              (qe === '"' ||
                qe === "'" ||
                qe === '`' ||
                B === '"' ||
                B === "'" ||
                B === '`') &&
              qe !== B
            )
              throw new n(
                'property names with quotes must have matching quotes'
              )
            if (
              ((J === 'constructor' || !Re) && (Q = !0),
              (M += '.' + J),
              (Y = '%' + M + '%'),
              P(E, Y))
            )
              V = E[Y]
            else if (V != null) {
              if (!(J in V)) {
                if (!O)
                  throw new o(
                    'base intrinsic for ' +
                      X +
                      ' exists, but the property is not available.'
                  )
                return
              }
              if (i && Oe + 1 >= T.length) {
                var R = i(V, J)
                ;(Re = !!R),
                  Re && 'get' in R && !('originalValue' in R.get)
                    ? (V = R.get)
                    : (V = V[J])
              } else (Re = P(V, J)), (V = V[J])
              Re && !Q && (E[Y] = V)
            }
          }
          return V
        }
      },
    }),
    z8 = Ie({
      'node_modules/call-bind/index.js'(e, t) {
        'use strict'
        var r = Cu(),
          n = hg(),
          a = n('%Function.prototype.apply%'),
          o = n('%Function.prototype.call%'),
          u = n('%Reflect.apply%', !0) || r.call(o, a),
          i = n('%Object.getOwnPropertyDescriptor%', !0),
          s = n('%Object.defineProperty%', !0),
          d = n('%Math.max%')
        if (s)
          try {
            s({}, 'a', {value: 1})
          } catch {
            s = null
          }
        t.exports = function (g) {
          var h = u(r, o, arguments)
          if (i && s) {
            var E = i(h, 'length')
            E.configurable &&
              s(h, 'length', {
                value: 1 + d(0, g.length - (arguments.length - 1)),
              })
          }
          return h
        }
        var y = function () {
          return u(r, a, arguments)
        }
        s ? s(t.exports, 'apply', {value: y}) : (t.exports.apply = y)
      },
    }),
    H8 = Ie({
      'node_modules/call-bind/callBound.js'(e, t) {
        'use strict'
        var r = hg(),
          n = z8(),
          a = n(r('String.prototype.indexOf'))
        t.exports = function (u, i) {
          var s = r(u, !!i)
          return typeof s == 'function' && a(u, '.prototype.') > -1 ? n(s) : s
        }
      },
    }),
    G8 = Ie({
      'node_modules/has-tostringtag/shams.js'(e, t) {
        'use strict'
        var r = dg()
        t.exports = function () {
          return r() && !!Symbol.toStringTag
        }
      },
    }),
    W8 = Ie({
      'node_modules/is-regex/index.js'(e, t) {
        'use strict'
        var r = H8(),
          n = G8()(),
          a,
          o,
          u,
          i
        n &&
          ((a = r('Object.prototype.hasOwnProperty')),
          (o = r('RegExp.prototype.exec')),
          (u = {}),
          (s = function () {
            throw u
          }),
          (i = {toString: s, valueOf: s}),
          typeof Symbol.toPrimitive == 'symbol' && (i[Symbol.toPrimitive] = s))
        var s,
          d = r('Object.prototype.toString'),
          y = Object.getOwnPropertyDescriptor,
          A = '[object RegExp]'
        t.exports = n
          ? function (h) {
              if (!h || typeof h != 'object') return !1
              var E = y(h, 'lastIndex'),
                b = E && a(E, 'value')
              if (!b) return !1
              try {
                o(h, i)
              } catch (x) {
                return x === u
              }
            }
          : function (h) {
              return !h || (typeof h != 'object' && typeof h != 'function')
                ? !1
                : d(h) === A
            }
      },
    }),
    V8 = Ie({
      'node_modules/is-function/index.js'(e, t) {
        t.exports = n
        var r = Object.prototype.toString
        function n(a) {
          if (!a) return !1
          var o = r.call(a)
          return (
            o === '[object Function]' ||
            (typeof a == 'function' && o !== '[object RegExp]') ||
            (typeof window < 'u' &&
              (a === window.setTimeout ||
                a === window.alert ||
                a === window.confirm ||
                a === window.prompt))
          )
        }
      },
    }),
    K8 = Ie({
      'node_modules/is-symbol/index.js'(e, t) {
        'use strict'
        var r = Object.prototype.toString,
          n = fg()()
        n
          ? ((a = Symbol.prototype.toString),
            (o = /^Symbol\(.*\)$/),
            (u = function (s) {
              return typeof s.valueOf() != 'symbol' ? !1 : o.test(a.call(s))
            }),
            (t.exports = function (s) {
              if (typeof s == 'symbol') return !0
              if (r.call(s) !== '[object Symbol]') return !1
              try {
                return u(s)
              } catch {
                return !1
              }
            }))
          : (t.exports = function (s) {
              return !1
            })
        var a, o, u
      },
    }),
    Y8 = Jn(W8()),
    X8 = Jn(V8()),
    J8 = Jn(K8())
  function Q8(e) {
    return e != null && typeof e == 'object' && Array.isArray(e) === !1
  }
  var Z8 =
      typeof window == 'object' && window && window.Object === Object && window,
    e_ = Z8,
    t_ = typeof self == 'object' && self && self.Object === Object && self,
    r_ = e_ || t_ || Function('return this')(),
    xu = r_,
    n_ = xu.Symbol,
    er = n_,
    gg = Object.prototype,
    a_ = gg.hasOwnProperty,
    o_ = gg.toString,
    Ur = er ? er.toStringTag : void 0
  function u_(e) {
    var t = a_.call(e, Ur),
      r = e[Ur]
    try {
      e[Ur] = void 0
      var n = !0
    } catch {}
    var a = o_.call(e)
    return n && (t ? (e[Ur] = r) : delete e[Ur]), a
  }
  var i_ = u_,
    s_ = Object.prototype,
    l_ = s_.toString
  function c_(e) {
    return l_.call(e)
  }
  var p_ = c_,
    d_ = '[object Null]',
    f_ = '[object Undefined]',
    ig = er ? er.toStringTag : void 0
  function h_(e) {
    return e == null
      ? e === void 0
        ? f_
        : d_
      : ig && ig in Object(e)
      ? i_(e)
      : p_(e)
  }
  var mg = h_
  function g_(e) {
    return e != null && typeof e == 'object'
  }
  var m_ = g_,
    y_ = '[object Symbol]'
  function b_(e) {
    return typeof e == 'symbol' || (m_(e) && mg(e) == y_)
  }
  var Fu = b_
  function A_(e, t) {
    for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
      a[r] = t(e[r], r, e)
    return a
  }
  var E_ = A_,
    D_ = Array.isArray,
    Su = D_,
    v_ = 1 / 0,
    sg = er ? er.prototype : void 0,
    lg = sg ? sg.toString : void 0
  function yg(e) {
    if (typeof e == 'string') return e
    if (Su(e)) return E_(e, yg) + ''
    if (Fu(e)) return lg ? lg.call(e) : ''
    var t = e + ''
    return t == '0' && 1 / e == -v_ ? '-0' : t
  }
  var C_ = yg
  function x_(e) {
    var t = typeof e
    return e != null && (t == 'object' || t == 'function')
  }
  var bg = x_,
    F_ = '[object AsyncFunction]',
    S_ = '[object Function]',
    w_ = '[object GeneratorFunction]',
    B_ = '[object Proxy]'
  function T_(e) {
    if (!bg(e)) return !1
    var t = mg(e)
    return t == S_ || t == w_ || t == F_ || t == B_
  }
  var __ = T_,
    O_ = xu['__core-js_shared__'],
    vu = O_,
    cg = (function () {
      var e = /[^.]+$/.exec((vu && vu.keys && vu.keys.IE_PROTO) || '')
      return e ? 'Symbol(src)_1.' + e : ''
    })()
  function R_(e) {
    return !!cg && cg in e
  }
  var P_ = R_,
    I_ = Function.prototype,
    k_ = I_.toString
  function N_(e) {
    if (e != null) {
      try {
        return k_.call(e)
      } catch {}
      try {
        return e + ''
      } catch {}
    }
    return ''
  }
  var j_ = N_,
    M_ = /[\\^$.*+?()[\]{}|]/g,
    q_ = /^\[object .+?Constructor\]$/,
    L_ = Function.prototype,
    $_ = Object.prototype,
    U_ = L_.toString,
    z_ = $_.hasOwnProperty,
    H_ = RegExp(
      '^' +
        U_.call(z_)
          .replace(M_, '\\$&')
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            '$1.*?'
          ) +
        '$'
    )
  function G_(e) {
    if (!bg(e) || P_(e)) return !1
    var t = __(e) ? H_ : q_
    return t.test(j_(e))
  }
  var W_ = G_
  function V_(e, t) {
    return e?.[t]
  }
  var K_ = V_
  function Y_(e, t) {
    var r = K_(e, t)
    return W_(r) ? r : void 0
  }
  var Ag = Y_
  function X_(e, t) {
    return e === t || (e !== e && t !== t)
  }
  var J_ = X_,
    Q_ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    Z_ = /^\w*$/
  function e6(e, t) {
    if (Su(e)) return !1
    var r = typeof e
    return r == 'number' ||
      r == 'symbol' ||
      r == 'boolean' ||
      e == null ||
      Fu(e)
      ? !0
      : Z_.test(e) || !Q_.test(e) || (t != null && e in Object(t))
  }
  var t6 = e6,
    r6 = Ag(Object, 'create'),
    zr = r6
  function n6() {
    ;(this.__data__ = zr ? zr(null) : {}), (this.size = 0)
  }
  var a6 = n6
  function o6(e) {
    var t = this.has(e) && delete this.__data__[e]
    return (this.size -= t ? 1 : 0), t
  }
  var u6 = o6,
    i6 = '__lodash_hash_undefined__',
    s6 = Object.prototype,
    l6 = s6.hasOwnProperty
  function c6(e) {
    var t = this.__data__
    if (zr) {
      var r = t[e]
      return r === i6 ? void 0 : r
    }
    return l6.call(t, e) ? t[e] : void 0
  }
  var p6 = c6,
    d6 = Object.prototype,
    f6 = d6.hasOwnProperty
  function h6(e) {
    var t = this.__data__
    return zr ? t[e] !== void 0 : f6.call(t, e)
  }
  var g6 = h6,
    m6 = '__lodash_hash_undefined__'
  function y6(e, t) {
    var r = this.__data__
    return (
      (this.size += this.has(e) ? 0 : 1),
      (r[e] = zr && t === void 0 ? m6 : t),
      this
    )
  }
  var b6 = y6
  function tr(e) {
    var t = -1,
      r = e == null ? 0 : e.length
    for (this.clear(); ++t < r; ) {
      var n = e[t]
      this.set(n[0], n[1])
    }
  }
  tr.prototype.clear = a6
  tr.prototype.delete = u6
  tr.prototype.get = p6
  tr.prototype.has = g6
  tr.prototype.set = b6
  var pg = tr
  function A6() {
    ;(this.__data__ = []), (this.size = 0)
  }
  var E6 = A6
  function D6(e, t) {
    for (var r = e.length; r--; ) if (J_(e[r][0], t)) return r
    return -1
  }
  var Qn = D6,
    v6 = Array.prototype,
    C6 = v6.splice
  function x6(e) {
    var t = this.__data__,
      r = Qn(t, e)
    if (r < 0) return !1
    var n = t.length - 1
    return r == n ? t.pop() : C6.call(t, r, 1), --this.size, !0
  }
  var F6 = x6
  function S6(e) {
    var t = this.__data__,
      r = Qn(t, e)
    return r < 0 ? void 0 : t[r][1]
  }
  var w6 = S6
  function B6(e) {
    return Qn(this.__data__, e) > -1
  }
  var T6 = B6
  function _6(e, t) {
    var r = this.__data__,
      n = Qn(r, e)
    return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this
  }
  var O6 = _6
  function rr(e) {
    var t = -1,
      r = e == null ? 0 : e.length
    for (this.clear(); ++t < r; ) {
      var n = e[t]
      this.set(n[0], n[1])
    }
  }
  rr.prototype.clear = E6
  rr.prototype.delete = F6
  rr.prototype.get = w6
  rr.prototype.has = T6
  rr.prototype.set = O6
  var R6 = rr,
    P6 = Ag(xu, 'Map'),
    I6 = P6
  function k6() {
    ;(this.size = 0),
      (this.__data__ = {
        hash: new pg(),
        map: new (I6 || R6)(),
        string: new pg(),
      })
  }
  var N6 = k6
  function j6(e) {
    var t = typeof e
    return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
      ? e !== '__proto__'
      : e === null
  }
  var M6 = j6
  function q6(e, t) {
    var r = e.__data__
    return M6(t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map
  }
  var Zn = q6
  function L6(e) {
    var t = Zn(this, e).delete(e)
    return (this.size -= t ? 1 : 0), t
  }
  var $6 = L6
  function U6(e) {
    return Zn(this, e).get(e)
  }
  var z6 = U6
  function H6(e) {
    return Zn(this, e).has(e)
  }
  var G6 = H6
  function W6(e, t) {
    var r = Zn(this, e),
      n = r.size
    return r.set(e, t), (this.size += r.size == n ? 0 : 1), this
  }
  var V6 = W6
  function nr(e) {
    var t = -1,
      r = e == null ? 0 : e.length
    for (this.clear(); ++t < r; ) {
      var n = e[t]
      this.set(n[0], n[1])
    }
  }
  nr.prototype.clear = N6
  nr.prototype.delete = $6
  nr.prototype.get = z6
  nr.prototype.has = G6
  nr.prototype.set = V6
  var Eg = nr,
    K6 = 'Expected a function'
  function wu(e, t) {
    if (typeof e != 'function' || (t != null && typeof t != 'function'))
      throw new TypeError(K6)
    var r = function () {
      var n = arguments,
        a = t ? t.apply(this, n) : n[0],
        o = r.cache
      if (o.has(a)) return o.get(a)
      var u = e.apply(this, n)
      return (r.cache = o.set(a, u) || o), u
    }
    return (r.cache = new (wu.Cache || Eg)()), r
  }
  wu.Cache = Eg
  var Y6 = wu,
    X6 = 500
  function J6(e) {
    var t = Y6(e, function (n) {
        return r.size === X6 && r.clear(), n
      }),
      r = t.cache
    return t
  }
  var Q6 = J6,
    Z6 =
      /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    eO = /\\(\\)?/g,
    tO = Q6(function (e) {
      var t = []
      return (
        e.charCodeAt(0) === 46 && t.push(''),
        e.replace(Z6, function (r, n, a, o) {
          t.push(a ? o.replace(eO, '$1') : n || r)
        }),
        t
      )
    }),
    rO = tO
  function nO(e) {
    return e == null ? '' : C_(e)
  }
  var aO = nO
  function oO(e, t) {
    return Su(e) ? e : t6(e, t) ? [e] : rO(aO(e))
  }
  var uO = oO,
    iO = 1 / 0
  function sO(e) {
    if (typeof e == 'string' || Fu(e)) return e
    var t = e + ''
    return t == '0' && 1 / e == -iO ? '-0' : t
  }
  var lO = sO
  function cO(e, t) {
    t = uO(t, e)
    for (var r = 0, n = t.length; e != null && r < n; ) e = e[lO(t[r++])]
    return r && r == n ? e : void 0
  }
  var pO = cO
  function dO(e, t, r) {
    var n = e == null ? void 0 : pO(e, t)
    return n === void 0 ? r : n
  }
  var fO = dO,
    Bu = Q8,
    hO = (e) => {
      let t = null,
        r = !1,
        n = !1,
        a = !1,
        o = ''
      if (e.indexOf('//') >= 0 || e.indexOf('/*') >= 0)
        for (let u = 0; u < e.length; u += 1)
          !t && !r && !n && !a
            ? e[u] === '"' || e[u] === "'" || e[u] === '`'
              ? (t = e[u])
              : e[u] === '/' && e[u + 1] === '*'
              ? (r = !0)
              : e[u] === '/' && e[u + 1] === '/'
              ? (n = !0)
              : e[u] === '/' && e[u + 1] !== '/' && (a = !0)
            : (t &&
                ((e[u] === t && e[u - 1] !== '\\') ||
                  (e[u] ===
                    `
` &&
                    t !== '`')) &&
                (t = null),
              a &&
                ((e[u] === '/' && e[u - 1] !== '\\') ||
                  e[u] ===
                    `
`) &&
                (a = !1),
              r && e[u - 1] === '/' && e[u - 2] === '*' && (r = !1),
              n &&
                e[u] ===
                  `
` &&
                (n = !1)),
            !r && !n && (o += e[u])
      else o = e
      return o
    },
    gO = (0, Dg.default)(1e4)((e) => hO(e).replace(/\n\s*/g, '').trim()),
    mO = function (t, r) {
      let n = r.slice(0, r.indexOf('{')),
        a = r.slice(r.indexOf('{'))
      if (n.includes('=>') || n.includes('function')) return r
      let o = n
      return (o = o.replace(t, 'function')), o + a
    },
    yO = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/,
    vg = (e) => e.match(/^[\[\{\"\}].*[\]\}\"]$/)
  function Cg(e) {
    if (!Bu(e)) return e
    let t = e,
      r = !1
    return (
      typeof Event < 'u' && e instanceof Event && ((t = ug(t)), (r = !0)),
      (t = Object.keys(t).reduce((n, a) => {
        try {
          t[a] && t[a].toJSON, (n[a] = t[a])
        } catch {
          r = !0
        }
        return n
      }, {})),
      r ? t : e
    )
  }
  var bO = function (t) {
      let r, n, a, o
      return function (i, s) {
        try {
          if (i === '')
            return (
              (o = []), (r = new Map([[s, '[]']])), (n = new Map()), (a = []), s
            )
          let d = n.get(this) || this
          for (; a.length && d !== a[0]; ) a.shift(), o.pop()
          if (typeof s == 'boolean') return s
          if (s === void 0) return t.allowUndefined ? '_undefined_' : void 0
          if (s === null) return null
          if (typeof s == 'number')
            return s === -1 / 0
              ? '_-Infinity_'
              : s === 1 / 0
              ? '_Infinity_'
              : Number.isNaN(s)
              ? '_NaN_'
              : s
          if (typeof s == 'bigint') return `_bigint_${s.toString()}`
          if (typeof s == 'string')
            return yO.test(s) ? (t.allowDate ? `_date_${s}` : void 0) : s
          if ((0, Y8.default)(s))
            return t.allowRegExp ? `_regexp_${s.flags}|${s.source}` : void 0
          if ((0, X8.default)(s)) {
            if (!t.allowFunction) return
            let {name: A} = s,
              g = s.toString()
            return g.match(
              /(\[native code\]|WEBPACK_IMPORTED_MODULE|__webpack_exports__|__webpack_require__)/
            )
              ? `_function_${A}|${(() => {}).toString()}`
              : `_function_${A}|${gO(mO(i, g))}`
          }
          if ((0, J8.default)(s)) {
            if (!t.allowSymbol) return
            let A = Symbol.keyFor(s)
            return A !== void 0
              ? `_gsymbol_${A}`
              : `_symbol_${s.toString().slice(7, -1)}`
          }
          if (a.length >= t.maxDepth)
            return Array.isArray(s) ? `[Array(${s.length})]` : '[Object]'
          if (s === this) return `_duplicate_${JSON.stringify(o)}`
          if (
            s.constructor &&
            s.constructor.name &&
            s.constructor.name !== 'Object' &&
            !Array.isArray(s) &&
            !t.allowClass
          )
            return
          let y = r.get(s)
          if (!y) {
            let A = Array.isArray(s) ? s : Cg(s)
            if (
              s.constructor &&
              s.constructor.name &&
              s.constructor.name !== 'Object' &&
              !Array.isArray(s) &&
              t.allowClass
            )
              try {
                Object.assign(A, {'_constructor-name_': s.constructor.name})
              } catch {}
            return (
              o.push(i),
              a.unshift(A),
              r.set(s, JSON.stringify(o)),
              s !== A && n.set(s, A),
              A
            )
          }
          return `_duplicate_${y}`
        } catch {
          return
        }
      }
    },
    AO = function reviver(options) {
      let refs = [],
        root
      return function revive(key, value) {
        if (
          (key === '' &&
            ((root = value),
            refs.forEach(({target: e, container: t, replacement: r}) => {
              let n = vg(r) ? JSON.parse(r) : r.split('.')
              n.length === 0 ? (t[e] = root) : (t[e] = fO(root, n))
            })),
          key === '_constructor-name_')
        )
          return value
        if (Bu(value) && value['_constructor-name_'] && options.allowFunction) {
          let e = value['_constructor-name_']
          if (e !== 'Object') {
            let t = new Function(
              `return function ${e.replace(/[^a-zA-Z0-9$_]+/g, '')}(){}`
            )()
            Object.setPrototypeOf(value, new t())
          }
          return delete value['_constructor-name_'], value
        }
        if (
          typeof value == 'string' &&
          value.startsWith('_function_') &&
          options.allowFunction
        ) {
          let [, name, source] = value.match(/_function_([^|]*)\|(.*)/) || [],
            sourceSanitized = source.replace(/[(\(\))|\\| |\]|`]*$/, '')
          if (!options.lazyEval) return eval(`(${sourceSanitized})`)
          let result = (...args) => {
            let f = eval(`(${sourceSanitized})`)
            return f(...args)
          }
          return (
            Object.defineProperty(result, 'toString', {
              value: () => sourceSanitized,
            }),
            Object.defineProperty(result, 'name', {value: name}),
            result
          )
        }
        if (
          typeof value == 'string' &&
          value.startsWith('_regexp_') &&
          options.allowRegExp
        ) {
          let [, e, t] = value.match(/_regexp_([^|]*)\|(.*)/) || []
          return new RegExp(t, e)
        }
        return typeof value == 'string' &&
          value.startsWith('_date_') &&
          options.allowDate
          ? new Date(value.replace('_date_', ''))
          : typeof value == 'string' && value.startsWith('_duplicate_')
          ? (refs.push({
              target: key,
              container: this,
              replacement: value.replace(/^_duplicate_/, ''),
            }),
            null)
          : typeof value == 'string' &&
            value.startsWith('_symbol_') &&
            options.allowSymbol
          ? Symbol(value.replace('_symbol_', ''))
          : typeof value == 'string' &&
            value.startsWith('_gsymbol_') &&
            options.allowSymbol
          ? Symbol.for(value.replace('_gsymbol_', ''))
          : typeof value == 'string' && value === '_-Infinity_'
          ? -1 / 0
          : typeof value == 'string' && value === '_Infinity_'
          ? 1 / 0
          : typeof value == 'string' && value === '_NaN_'
          ? NaN
          : typeof value == 'string' &&
            value.startsWith('_bigint_') &&
            typeof BigInt == 'function'
          ? BigInt(value.replace('_bigint_', ''))
          : value
      }
    },
    xg = {
      maxDepth: 10,
      space: void 0,
      allowFunction: !0,
      allowRegExp: !0,
      allowDate: !0,
      allowClass: !0,
      allowUndefined: !0,
      allowSymbol: !0,
      lazyEval: !0,
    },
    Tu = (e, t = {}) => {
      let r = {...xg, ...t}
      return JSON.stringify(Cg(e), bO(r), t.space)
    },
    EO = () => {
      let e = new Map()
      return function t(r) {
        Bu(r) &&
          Object.entries(r).forEach(([n, a]) => {
            a === '_undefined_'
              ? (r[n] = void 0)
              : e.get(a) || (e.set(a, !0), t(a))
          }),
          Array.isArray(r) &&
            r.forEach((n, a) => {
              n === '_undefined_'
                ? (e.set(n, !0), (r[a] = void 0))
                : e.get(n) || (e.set(n, !0), t(n))
            })
      }
    },
    DO = (e, t = {}) => {
      let r = {...xg, ...t},
        n = JSON.parse(e, AO(r))
      return EO()(n), n
    }
  var vO = fe(Xn(), 1),
    {document: tQ, location: rQ} = oe
  var {FEATURES: gQ} = oe
  l()
  c()
  p()
  var Vm = fe(Rn(), 1)
  l()
  c()
  p()
  var TO = fe(Rn(), 1),
    _O = fe(Ig(), 1)
  var OO = ((e) => (
    (e.JAVASCRIPT = 'JavaScript'),
    (e.FLOW = 'Flow'),
    (e.TYPESCRIPT = 'TypeScript'),
    (e.UNKNOWN = 'Unknown'),
    e
  ))(OO || {})
  var ta = (e) => {
    if (!e) return ''
    if (typeof e == 'string') return e
    throw new Error(`Description: expected string, got: ${JSON.stringify(e)}`)
  }
  var kg = 'storybook/docs',
    KZ = `${kg}/panel`
  var RO = `${kg}/snippet-rendered`,
    Wr = ((e) => (
      (e.AUTO = 'auto'), (e.CODE = 'code'), (e.DYNAMIC = 'dynamic'), e
    ))(Wr || {})
  var W4 = q.div(Bt, ({theme: e}) => ({
      backgroundColor:
        e.base === 'light' ? 'rgba(0,0,0,.01)' : 'rgba(255,255,255,.01)',
      borderRadius: e.appBorderRadius,
      border: `1px dashed ${e.appBorderColor}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      margin: '25px 0 40px',
      color: pe(0.3, e.color.defaultText),
      fontSize: e.typography.size.s2,
    })),
    Ku = (e) =>
      m.createElement(W4, {...e, className: 'docblock-emptyblock sb-unstyled'}),
    V4 = q(Qr)(({theme: e}) => ({
      fontSize: `${e.typography.size.s2 - 1}px`,
      lineHeight: '19px',
      margin: '25px 0 40px',
      borderRadius: e.appBorderRadius,
      boxShadow:
        e.base === 'light'
          ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0'
          : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
      'pre.prismjs': {padding: 20, background: 'inherit'},
    })),
    K4 = q.div(({theme: e}) => ({
      background: e.background.content,
      borderRadius: e.appBorderRadius,
      border: `1px solid ${e.appBorderColor}`,
      boxShadow:
        e.base === 'light'
          ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0'
          : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
      margin: '25px 0 40px',
      padding: '20px 20px 20px 22px',
    })),
    sa = q.div(({theme: e}) => ({
      animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
      background: e.appBorderColor,
      height: 17,
      marginTop: 1,
      width: '60%',
      [`&:first-child${Fi}`]: {margin: 0},
    })),
    Y4 = () =>
      m.createElement(
        K4,
        null,
        m.createElement(sa, null),
        m.createElement(sa, {style: {width: '80%'}}),
        m.createElement(sa, {style: {width: '30%'}}),
        m.createElement(sa, {style: {width: '80%'}})
      ),
    ri = ({
      isLoading: e,
      error: t,
      language: r,
      code: n,
      dark: a,
      format: o,
      ...u
    }) => {
      if (e) return m.createElement(Y4, null)
      if (t) return m.createElement(Ku, null, t)
      let i = m.createElement(
        V4,
        {
          bordered: !0,
          copyable: !0,
          format: o,
          language: r,
          className: 'docblock-source sb-unstyled',
          ...u,
        },
        n
      )
      if (typeof a > 'u') return i
      let s = a ? Ma.dark : Ma.light
      return m.createElement(Ci, {theme: xi(s)}, i)
    }
  ri.defaultProps = {format: !1}
  var be = (e) =>
      `& :where(${e}:not(.sb-anchor, .sb-unstyled, .sb-unstyled ${e}))`,
    ni = 600,
    hte = q.h1(Bt, ({theme: e}) => ({
      color: e.color.defaultText,
      fontSize: e.typography.size.m3,
      fontWeight: e.typography.weight.bold,
      lineHeight: '32px',
      [`@media (min-width: ${ni}px)`]: {
        fontSize: e.typography.size.l1,
        lineHeight: '36px',
        marginBottom: '16px',
      },
    })),
    gte = q.h2(Bt, ({theme: e}) => ({
      fontWeight: e.typography.weight.regular,
      fontSize: e.typography.size.s3,
      lineHeight: '20px',
      borderBottom: 'none',
      marginBottom: 15,
      [`@media (min-width: ${ni}px)`]: {
        fontSize: e.typography.size.m1,
        lineHeight: '28px',
        marginBottom: 24,
      },
      color: pe(0.25, e.color.defaultText),
    })),
    mte = q.div(({theme: e}) => {
      let t = {
          fontFamily: e.typography.fonts.base,
          fontSize: e.typography.size.s3,
          margin: 0,
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
          WebkitOverflowScrolling: 'touch',
        },
        r = {
          margin: '20px 0 8px',
          padding: 0,
          cursor: 'text',
          position: 'relative',
          color: e.color.defaultText,
          '&:first-of-type': {marginTop: 0, paddingTop: 0},
          '&:hover a.anchor': {textDecoration: 'none'},
          '& code': {fontSize: 'inherit'},
        },
        n = {
          lineHeight: 1,
          margin: '0 2px',
          padding: '3px 5px',
          whiteSpace: 'nowrap',
          borderRadius: 3,
          fontSize: e.typography.size.s2 - 1,
          border:
            e.base === 'light'
              ? `1px solid ${e.color.mediumlight}`
              : `1px solid ${e.color.darker}`,
          color:
            e.base === 'light'
              ? pe(0.1, e.color.defaultText)
              : pe(0.3, e.color.defaultText),
          backgroundColor:
            e.base === 'light' ? e.color.lighter : e.color.border,
        }
      return {
        maxWidth: 1e3,
        width: '100%',
        [be('a')]: {
          ...t,
          fontSize: 'inherit',
          lineHeight: '24px',
          color: e.color.secondary,
          textDecoration: 'none',
          '&.absent': {color: '#cc0000'},
          '&.anchor': {
            display: 'block',
            paddingLeft: 30,
            marginLeft: -30,
            cursor: 'pointer',
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
          },
        },
        [be('blockquote')]: {
          ...t,
          margin: '16px 0',
          borderLeft: `4px solid ${e.color.medium}`,
          padding: '0 15px',
          color: e.color.dark,
          '& > :first-of-type': {marginTop: 0},
          '& > :last-child': {marginBottom: 0},
        },
        [be('div')]: t,
        [be('dl')]: {
          ...t,
          margin: '16px 0',
          padding: 0,
          '& dt': {
            fontSize: '14px',
            fontWeight: 'bold',
            fontStyle: 'italic',
            padding: 0,
            margin: '16px 0 4px',
          },
          '& dt:first-of-type': {padding: 0},
          '& dt > :first-of-type': {marginTop: 0},
          '& dt > :last-child': {marginBottom: 0},
          '& dd': {margin: '0 0 16px', padding: '0 15px'},
          '& dd > :first-of-type': {marginTop: 0},
          '& dd > :last-child': {marginBottom: 0},
        },
        [be('h1')]: {
          ...t,
          ...r,
          fontSize: `${e.typography.size.l1}px`,
          fontWeight: e.typography.weight.bold,
        },
        [be('h2')]: {
          ...t,
          ...r,
          fontSize: `${e.typography.size.m2}px`,
          paddingBottom: 4,
          borderBottom: `1px solid ${e.appBorderColor}`,
        },
        [be('h3')]: {
          ...t,
          ...r,
          fontSize: `${e.typography.size.m1}px`,
          fontWeight: e.typography.weight.bold,
        },
        [be('h4')]: {...t, ...r, fontSize: `${e.typography.size.s3}px`},
        [be('h5')]: {...t, ...r, fontSize: `${e.typography.size.s2}px`},
        [be('h6')]: {
          ...t,
          ...r,
          fontSize: `${e.typography.size.s2}px`,
          color: e.color.dark,
        },
        [be('hr')]: {
          border: '0 none',
          borderTop: `1px solid ${e.appBorderColor}`,
          height: 4,
          padding: 0,
        },
        [be('img')]: {maxWidth: '100%'},
        [be('li')]: {
          ...t,
          fontSize: e.typography.size.s2,
          color: e.color.defaultText,
          lineHeight: '24px',
          '& + li': {marginTop: '.25em'},
          '& ul, & ol': {marginTop: '.25em', marginBottom: 0},
          '& code': n,
        },
        [be('ol')]: {
          ...t,
          margin: '16px 0',
          paddingLeft: 30,
          '& :first-of-type': {marginTop: 0},
          '& :last-child': {marginBottom: 0},
        },
        [be('p')]: {
          ...t,
          margin: '16px 0',
          fontSize: e.typography.size.s2,
          lineHeight: '24px',
          color: e.color.defaultText,
          '& code': n,
        },
        [be('pre')]: {
          ...t,
          fontFamily: e.typography.fonts.mono,
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          lineHeight: '18px',
          padding: '11px 1rem',
          whiteSpace: 'pre-wrap',
          color: 'inherit',
          borderRadius: 3,
          margin: '1rem 0',
          '&:not(.prismjs)': {
            background: 'transparent',
            border: 'none',
            borderRadius: 0,
            padding: 0,
            margin: 0,
          },
          '& pre, &.prismjs': {
            padding: 15,
            margin: 0,
            whiteSpace: 'pre-wrap',
            color: 'inherit',
            fontSize: '13px',
            lineHeight: '19px',
            code: {color: 'inherit', fontSize: 'inherit'},
          },
          '& code': {whiteSpace: 'pre'},
          '& code, & tt': {border: 'none'},
        },
        [be('span')]: {
          ...t,
          '&.frame': {
            display: 'block',
            overflow: 'hidden',
            '& > span': {
              border: `1px solid ${e.color.medium}`,
              display: 'block',
              float: 'left',
              overflow: 'hidden',
              margin: '13px 0 0',
              padding: 7,
              width: 'auto',
            },
            '& span img': {display: 'block', float: 'left'},
            '& span span': {
              clear: 'both',
              color: e.color.darkest,
              display: 'block',
              padding: '5px 0 0',
            },
          },
          '&.align-center': {
            display: 'block',
            overflow: 'hidden',
            clear: 'both',
            '& > span': {
              display: 'block',
              overflow: 'hidden',
              margin: '13px auto 0',
              textAlign: 'center',
            },
            '& span img': {margin: '0 auto', textAlign: 'center'},
          },
          '&.align-right': {
            display: 'block',
            overflow: 'hidden',
            clear: 'both',
            '& > span': {
              display: 'block',
              overflow: 'hidden',
              margin: '13px 0 0',
              textAlign: 'right',
            },
            '& span img': {margin: 0, textAlign: 'right'},
          },
          '&.float-left': {
            display: 'block',
            marginRight: 13,
            overflow: 'hidden',
            float: 'left',
            '& span': {margin: '13px 0 0'},
          },
          '&.float-right': {
            display: 'block',
            marginLeft: 13,
            overflow: 'hidden',
            float: 'right',
            '& > span': {
              display: 'block',
              overflow: 'hidden',
              margin: '13px auto 0',
              textAlign: 'right',
            },
          },
        },
        [be('table')]: {
          ...t,
          margin: '16px 0',
          fontSize: e.typography.size.s2,
          lineHeight: '24px',
          padding: 0,
          borderCollapse: 'collapse',
          '& tr': {
            borderTop: `1px solid ${e.appBorderColor}`,
            backgroundColor: e.appContentBg,
            margin: 0,
            padding: 0,
          },
          '& tr:nth-of-type(2n)': {
            backgroundColor:
              e.base === 'dark' ? e.color.darker : e.color.lighter,
          },
          '& tr th': {
            fontWeight: 'bold',
            color: e.color.defaultText,
            border: `1px solid ${e.appBorderColor}`,
            margin: 0,
            padding: '6px 13px',
          },
          '& tr td': {
            border: `1px solid ${e.appBorderColor}`,
            color: e.color.defaultText,
            margin: 0,
            padding: '6px 13px',
          },
          '& tr th :first-of-type, & tr td :first-of-type': {marginTop: 0},
          '& tr th :last-child, & tr td :last-child': {marginBottom: 0},
        },
        [be('ul')]: {
          ...t,
          margin: '16px 0',
          paddingLeft: 30,
          '& :first-of-type': {marginTop: 0},
          '& :last-child': {marginBottom: 0},
          listStyle: 'disc',
        },
      }
    }),
    yte = q.div(({theme: e}) => ({
      background: e.background.content,
      display: 'flex',
      justifyContent: 'center',
      padding: '4rem 20px',
      minHeight: '100vh',
      boxSizing: 'border-box',
      [`@media (min-width: ${ni}px)`]: {},
    }))
  var pa = (e) => ({
      borderRadius: e.appBorderRadius,
      background: e.background.content,
      boxShadow:
        e.base === 'light'
          ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0'
          : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
      border: `1px solid ${e.appBorderColor}`,
    }),
    X4 = ({zoom: e, resetZoom: t}) =>
      m.createElement(
        m.Fragment,
        null,
        m.createElement(
          ht,
          {
            key: 'zoomin',
            onClick: (r) => {
              r.preventDefault(), e(0.8)
            },
            title: 'Zoom in',
          },
          m.createElement(Be, {icon: 'zoom'})
        ),
        m.createElement(
          ht,
          {
            key: 'zoomout',
            onClick: (r) => {
              r.preventDefault(), e(1.25)
            },
            title: 'Zoom out',
          },
          m.createElement(Be, {icon: 'zoomout'})
        ),
        m.createElement(
          ht,
          {
            key: 'zoomreset',
            onClick: (r) => {
              r.preventDefault(), t()
            },
            title: 'Reset zoom',
          },
          m.createElement(Be, {icon: 'zoomreset'})
        )
      ),
    J4 = q(xa)({
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      transition: 'transform .2s linear',
    }),
    Q4 = ({
      isLoading: e,
      storyId: t,
      baseUrl: r,
      zoom: n,
      resetZoom: a,
      ...o
    }) =>
      m.createElement(
        J4,
        {...o},
        m.createElement(
          hi,
          {key: 'left'},
          e
            ? [1, 2, 3].map((u) => m.createElement(wa, {key: u}))
            : m.createElement(X4, {zoom: n, resetZoom: a})
        )
      ),
    Km = lr({scale: 1}),
    {window: Z4} = oe,
    e9 = class extends Xe {
      constructor() {
        super(...arguments), (this.iframe = null)
      }
      componentDidMount() {
        let {id: e} = this.props
        this.iframe = Z4.document.getElementById(e)
      }
      shouldComponentUpdate(e) {
        let {scale: t} = e
        return (
          t !== this.props.scale &&
            this.setIframeBodyStyle({
              width: `${t * 100}%`,
              height: `${t * 100}%`,
              transform: `scale(${1 / t})`,
              transformOrigin: 'top left',
            }),
          !1
        )
      }
      setIframeBodyStyle(e) {
        return Object.assign(this.iframe.contentDocument.body.style, e)
      }
      render() {
        let {
          id: e,
          title: t,
          src: r,
          allowFullScreen: n,
          scale: a,
          ...o
        } = this.props
        return m.createElement('iframe', {
          id: e,
          title: t,
          src: r,
          ...(n ? {allow: 'fullscreen'} : {}),
          loading: 'lazy',
          ...o,
        })
      }
    },
    {PREVIEW_URL: t9} = oe,
    r9 = t9 || 'iframe.html',
    Yu = ({story: e, primary: t}) => `story--${e.id}${t ? '--primary' : ''}`,
    n9 = (e) => {
      let t = xe(),
        [r, n] = ne(!0),
        [a, o] = ne(),
        {
          story: u,
          height: i,
          autoplay: s,
          forceInitialArgs: d,
          renderStoryToElement: y,
        } = e
      me(() => {
        if (!(u && t.current)) return () => {}
        let g = t.current,
          h = y(
            u,
            g,
            {
              showMain: () => {},
              showError: ({title: E, description: b}) =>
                o(new Error(`${E} - ${b}`)),
              showException: (E) => o(E),
            },
            {autoplay: s, forceInitialArgs: d}
          )
        return (
          n(!1),
          () => {
            Promise.resolve().then(() => h())
          }
        )
      }, [s, y, u])
      let A = '<span></span>'
      return a
        ? m.createElement('pre', null, m.createElement(Ca, {error: a}))
        : m.createElement(
            m.Fragment,
            null,
            i
              ? m.createElement(
                  'style',
                  null,
                  `#${Yu(
                    e
                  )} { min-height: ${i}; transform: translateZ(0); overflow: auto }`
                )
              : null,
            r && m.createElement(ai, null),
            m.createElement('div', {
              ref: t,
              id: `${Yu(e)}-inner`,
              'data-name': u.name,
              dangerouslySetInnerHTML: {__html: A},
            })
          )
    },
    a9 = ({story: e, height: t = '500px'}) =>
      m.createElement(
        'div',
        {style: {width: '100%', height: t}},
        m.createElement(Km.Consumer, null, ({scale: r}) =>
          m.createElement(e9, {
            key: 'iframe',
            id: `iframe--${e.id}`,
            title: e.name,
            src: ka(r9, e.id, {viewMode: 'story'}),
            allowFullScreen: !0,
            scale: r,
            style: {width: '100%', height: '100%', border: '0 none'},
          })
        )
      ),
    o9 = (e) => {
      let {inline: t} = e
      return m.createElement(
        'div',
        {
          id: Yu(e),
          className: 'sb-story sb-unstyled',
          'data-story-block': 'true',
        },
        t ? m.createElement(n9, {...e}) : m.createElement(a9, {...e})
      )
    },
    ai = () => m.createElement(Ba, null),
    u9 = q.div(
      ({isColumn: e, columns: t, layout: r}) => ({
        display: e || !t ? 'block' : 'flex',
        position: 'relative',
        flexWrap: 'wrap',
        overflow: 'auto',
        flexDirection: e ? 'column' : 'row',
        '& .innerZoomElementWrapper > *': e
          ? {
              width: r !== 'fullscreen' ? 'calc(100% - 20px)' : '100%',
              display: 'block',
            }
          : {
              maxWidth: r !== 'fullscreen' ? 'calc(100% - 20px)' : '100%',
              display: 'inline-block',
            },
      }),
      ({layout: e = 'padded'}) =>
        e === 'centered' || e === 'padded'
          ? {
              padding: '30px 20px',
              margin: -10,
              '& .innerZoomElementWrapper > *': {
                width: 'auto',
                border: '10px solid transparent!important',
              },
            }
          : {},
      ({layout: e = 'padded'}) =>
        e === 'centered'
          ? {
              display: 'flex',
              justifyContent: 'center',
              justifyItems: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }
          : {},
      ({columns: e}) =>
        e && e > 1
          ? {
              '.innerZoomElementWrapper > *': {
                minWidth: `calc(100% / ${e} - 20px)`,
              },
            }
          : {}
    ),
    Tm = q(ri)(({theme: e}) => ({
      margin: 0,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderBottomLeftRadius: e.appBorderRadius,
      borderBottomRightRadius: e.appBorderRadius,
      border: 'none',
      background:
        e.base === 'light'
          ? 'rgba(0, 0, 0, 0.85)'
          : $e(0.05, e.background.content),
      color: e.color.lightest,
      button: {
        background:
          e.base === 'light'
            ? 'rgba(0, 0, 0, 0.85)'
            : $e(0.05, e.background.content),
      },
    })),
    i9 = q.div(
      ({theme: e, withSource: t, isExpanded: r}) => ({
        position: 'relative',
        overflow: 'hidden',
        margin: '25px 0 40px',
        ...pa(e),
        borderBottomLeftRadius: t && r && 0,
        borderBottomRightRadius: t && r && 0,
        borderBottomWidth: r && 0,
        'h3 + &': {marginTop: '16px'},
      }),
      ({withToolbar: e}) => e && {paddingTop: 40}
    ),
    s9 = (e, t, r) => {
      switch (!0) {
        case !!(e && e.error):
          return {
            source: null,
            actionItem: {
              title: 'No code available',
              className: 'docblock-code-toggle docblock-code-toggle--disabled',
              disabled: !0,
              onClick: () => r(!1),
            },
          }
        case t:
          return {
            source: m.createElement(Tm, {...e, dark: !0}),
            actionItem: {
              title: 'Hide code',
              className: 'docblock-code-toggle docblock-code-toggle--expanded',
              onClick: () => r(!1),
            },
          }
        default:
          return {
            source: m.createElement(Tm, {...e, dark: !0}),
            actionItem: {
              title: 'Show code',
              className: 'docblock-code-toggle',
              onClick: () => r(!0),
            },
          }
      }
    }
  function l9(e) {
    if (Jr.count(e) === 1) {
      let t = e
      if (t.props) return t.props.id
    }
    return null
  }
  var c9 = q(Q4)({position: 'absolute', top: 0, left: 0, right: 0, height: 40}),
    p9 = q.div({overflow: 'hidden', position: 'relative'}),
    Xu = ({
      isLoading: e,
      isColumn: t,
      columns: r,
      children: n,
      withSource: a,
      withToolbar: o = !1,
      isExpanded: u = !1,
      additionalActions: i,
      className: s,
      layout: d = 'padded',
      ...y
    }) => {
      let [A, g] = ne(u),
        {source: h, actionItem: E} = s9(a, A, g),
        [b, x] = ne(1),
        S = [s].concat(['sbdocs', 'sbdocs-preview', 'sb-unstyled']),
        P = a ? [E] : [],
        [N, $] = ne(i ? [...i] : []),
        w = [...P, ...N],
        {window: j} = oe,
        I = ge(async (K) => {
          let {createCopyToClipboardFunction: U} = await Promise.resolve().then(
            () => (pr(), vi)
          )
          U()
        }, []),
        z = (K) => {
          let U = j.getSelection()
          ;(U && U.type === 'Range') ||
            (K.preventDefault(),
            N.filter((ue) => ue.title === 'Copied').length === 0 &&
              I(h.props.code).then(() => {
                $([...N, {title: 'Copied', onClick: () => {}}]),
                  j.setTimeout(
                    () => $(N.filter((ue) => ue.title !== 'Copied')),
                    1500
                  )
              }))
        }
      return m.createElement(
        i9,
        {withSource: a, withToolbar: o, ...y, className: S.join(' ')},
        o &&
          m.createElement(c9, {
            isLoading: e,
            border: !0,
            zoom: (K) => x(b * K),
            resetZoom: () => x(1),
            storyId: l9(n),
            baseUrl: './iframe.html',
          }),
        m.createElement(
          Km.Provider,
          {value: {scale: b}},
          m.createElement(
            p9,
            {className: 'docs-story', onCopyCapture: a && z},
            m.createElement(
              u9,
              {isColumn: t || !Array.isArray(n), columns: r, layout: d},
              m.createElement(
                Pa.Element,
                {scale: b},
                Array.isArray(n)
                  ? n.map((K, U) => m.createElement('div', {key: U}, K))
                  : m.createElement('div', null, n)
              )
            ),
            m.createElement(Ea, {actionItems: w})
          )
        ),
        a && A && h
      )
    },
    d9 = q(Xu)(() => ({'.docs-story': {paddingTop: 32, paddingBottom: 40}})),
    f9 = () =>
      m.createElement(
        d9,
        {isLoading: !0, withToolbar: !0},
        m.createElement(ai, null)
      ),
    h9 = q.table(({theme: e}) => ({
      '&&': {
        borderCollapse: 'collapse',
        borderSpacing: 0,
        border: 'none',
        tr: {border: 'none !important', background: 'none'},
        'td, th': {padding: 0, border: 'none', width: 'auto!important'},
        marginTop: 0,
        marginBottom: 0,
        'th:first-of-type, td:first-of-type': {paddingLeft: 0},
        'th:last-of-type, td:last-of-type': {paddingRight: 0},
        td: {
          paddingTop: 0,
          paddingBottom: 4,
          '&:not(:first-of-type)': {paddingLeft: 10, paddingRight: 0},
        },
        tbody: {boxShadow: 'none', border: 'none'},
        code: wt({theme: e}),
        div: {span: {fontWeight: 'bold'}},
        '& code': {
          margin: 0,
          display: 'inline-block',
          fontSize: e.typography.size.s1,
        },
      },
    })),
    g9 = ({tags: e}) => {
      let t = (e.params || []).filter((o) => o.description),
        r = t.length !== 0,
        n = e.deprecated != null,
        a = e.returns != null && e.returns.description != null
      return !r && !a && !n
        ? null
        : m.createElement(
            m.Fragment,
            null,
            m.createElement(
              h9,
              null,
              m.createElement(
                'tbody',
                null,
                n &&
                  m.createElement(
                    'tr',
                    {key: 'deprecated'},
                    m.createElement(
                      'td',
                      {colSpan: 2},
                      m.createElement('strong', null, 'Deprecated'),
                      ': ',
                      e.deprecated
                    )
                  ),
                r &&
                  t.map((o) =>
                    m.createElement(
                      'tr',
                      {key: o.name},
                      m.createElement(
                        'td',
                        null,
                        m.createElement('code', null, o.name)
                      ),
                      m.createElement('td', null, o.description)
                    )
                  ),
                a &&
                  m.createElement(
                    'tr',
                    {key: 'returns'},
                    m.createElement(
                      'td',
                      null,
                      m.createElement('code', null, 'Returns')
                    ),
                    m.createElement('td', null, e.returns.description)
                  )
              )
            )
          )
    },
    Ju = 8,
    _m = q.div(({isExpanded: e}) => ({
      display: 'flex',
      flexDirection: e ? 'column' : 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      marginBottom: '-4px',
      minWidth: 100,
    })),
    m9 = q.span(wt, ({theme: e, simple: t = !1}) => ({
      flex: '0 0 auto',
      fontFamily: e.typography.fonts.mono,
      fontSize: e.typography.size.s1,
      wordBreak: 'break-word',
      whiteSpace: 'normal',
      maxWidth: '100%',
      margin: 0,
      marginRight: '4px',
      marginBottom: '4px',
      paddingTop: '2px',
      paddingBottom: '2px',
      lineHeight: '13px',
      ...(t && {background: 'transparent', border: '0 none', paddingLeft: 0}),
    })),
    y9 = q.button(({theme: e}) => ({
      fontFamily: e.typography.fonts.mono,
      color: e.color.secondary,
      marginBottom: '4px',
      background: 'none',
      border: 'none',
    })),
    b9 = q.div(wt, ({theme: e}) => ({
      fontFamily: e.typography.fonts.mono,
      color: e.color.secondary,
      fontSize: e.typography.size.s1,
      margin: 0,
      whiteSpace: 'nowrap',
      display: 'flex',
      alignItems: 'center',
    })),
    A9 = q.div(({theme: e, width: t}) => ({
      width: t,
      minWidth: 200,
      maxWidth: 800,
      padding: 15,
      fontFamily: e.typography.fonts.mono,
      fontSize: e.typography.size.s1,
      boxSizing: 'content-box',
      '& code': {padding: '0 !important'},
    })),
    E9 = q(Be)({height: 10, width: 10, minWidth: 10, marginLeft: 4}),
    D9 = () => m.createElement('span', null, '-'),
    Ym = ({text: e, simple: t}) => m.createElement(m9, {simple: t}, e),
    v9 = (0, Hm.default)(1e3)((e) => {
      let t = e.split(/\r?\n/)
      return `${Math.max(...t.map((r) => r.length))}ch`
    }),
    C9 = (e) => {
      if (!e) return [e]
      let t = e.split('|').map((r) => r.trim())
      return (0, Gm.default)(t)
    },
    Om = (e, t = !0) => {
      let r = e
      return (
        t || (r = e.slice(0, Ju)),
        r.map((n) => m.createElement(Ym, {key: n, text: n === '' ? '""' : n}))
      )
    },
    x9 = ({value: e, initialExpandedArgs: t}) => {
      let {summary: r, detail: n} = e,
        [a, o] = ne(!1),
        [u, i] = ne(t || !1)
      if (r == null) return null
      let s = typeof r.toString == 'function' ? r.toString() : r
      if (n == null) {
        if (/[(){}[\]<>]/.test(s)) return m.createElement(Ym, {text: s})
        let d = C9(s),
          y = d.length
        return y > Ju
          ? m.createElement(
              _m,
              {isExpanded: u},
              Om(d, u),
              m.createElement(
                y9,
                {onClick: () => i(!u)},
                u ? 'Show less...' : `Show ${y - Ju} more...`
              )
            )
          : m.createElement(_m, null, Om(d))
      }
      return m.createElement(
        Ra,
        {
          closeOnOutsideClick: !0,
          placement: 'bottom',
          visible: a,
          onVisibleChange: (d) => {
            o(d)
          },
          tooltip: m.createElement(
            A9,
            {width: v9(n)},
            m.createElement(Qr, {language: 'jsx', format: !1}, n)
          ),
        },
        m.createElement(
          b9,
          {className: 'sbdocs-expandable'},
          m.createElement('span', null, s),
          m.createElement(E9, {icon: a ? 'arrowup' : 'arrowdown'})
        )
      )
    },
    Hu = ({value: e, initialExpandedArgs: t}) =>
      e == null
        ? m.createElement(D9, null)
        : m.createElement(x9, {value: e, initialExpandedArgs: t}),
    F9 = q.label(({theme: e}) => ({
      lineHeight: '18px',
      alignItems: 'center',
      marginBottom: 8,
      display: 'inline-block',
      position: 'relative',
      whiteSpace: 'nowrap',
      background: e.boolean.background,
      borderRadius: '3em',
      padding: 1,
      input: {
        appearance: 'none',
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        margin: 0,
        padding: 0,
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        borderRadius: '3em',
        '&:focus': {
          outline: 'none',
          boxShadow: `${e.color.secondary} 0 0 0 1px inset !important`,
        },
      },
      span: {
        textAlign: 'center',
        fontSize: e.typography.size.s1,
        fontWeight: e.typography.weight.bold,
        lineHeight: '1',
        cursor: 'pointer',
        display: 'inline-block',
        padding: '7px 15px',
        transition: 'all 100ms ease-out',
        userSelect: 'none',
        borderRadius: '3em',
        color: pe(0.5, e.color.defaultText),
        background: 'transparent',
        '&:hover': {boxShadow: `${mr(0.3, e.appBorderColor)} 0 0 0 1px inset`},
        '&:active': {
          boxShadow: `${mr(0.05, e.appBorderColor)} 0 0 0 2px inset`,
          color: mr(1, e.appBorderColor),
        },
        '&:first-of-type': {paddingRight: 8},
        '&:last-of-type': {paddingLeft: 8},
      },
      'input:checked ~ span:last-of-type, input:not(:checked) ~ span:first-of-type':
        {
          background: e.boolean.selectedBackground,
          boxShadow:
            e.base === 'light'
              ? `${mr(0.1, e.appBorderColor)} 0 0 2px`
              : `${e.appBorderColor} 0 0 0 1px`,
          color: e.color.defaultText,
          padding: '7px 15px',
        },
    })),
    S9 = (e) => e === 'true',
    w9 = ({name: e, value: t, onChange: r, onBlur: n, onFocus: a}) => {
      let o = ge(() => r(!1), [r])
      if (t === void 0)
        return m.createElement(
          we.Button,
          {id: dr(e), onClick: o},
          'Set boolean'
        )
      let u = Te(e),
        i = typeof t == 'string' ? S9(t) : t
      return m.createElement(
        F9,
        {htmlFor: u, title: i ? 'Change to false' : 'Change to true'},
        m.createElement('input', {
          id: u,
          type: 'checkbox',
          onChange: (s) => r(s.target.checked),
          checked: i,
          name: e,
          onBlur: n,
          onFocus: a,
        }),
        m.createElement('span', null, 'False'),
        m.createElement('span', null, 'True')
      )
    },
    B9 = (e) => {
      let [t, r, n] = e.split('-'),
        a = new Date()
      return (
        a.setFullYear(parseInt(t, 10), parseInt(r, 10) - 1, parseInt(n, 10)), a
      )
    },
    T9 = (e) => {
      let [t, r] = e.split(':'),
        n = new Date()
      return n.setHours(parseInt(t, 10)), n.setMinutes(parseInt(r, 10)), n
    },
    _9 = (e) => {
      let t = new Date(e),
        r = `000${t.getFullYear()}`.slice(-4),
        n = `0${t.getMonth() + 1}`.slice(-2),
        a = `0${t.getDate()}`.slice(-2)
      return `${r}-${n}-${a}`
    },
    O9 = (e) => {
      let t = new Date(e),
        r = `0${t.getHours()}`.slice(-2),
        n = `0${t.getMinutes()}`.slice(-2)
      return `${r}:${n}`
    },
    R9 = q.div(({theme: e}) => ({
      flex: 1,
      display: 'flex',
      input: {
        marginLeft: 10,
        flex: 1,
        height: 32,
        '&::-webkit-calendar-picker-indicator': {
          opacity: 0.5,
          height: 12,
          filter: e.base === 'light' ? void 0 : 'invert(1)',
        },
      },
      'input:first-of-type': {marginLeft: 0, flexGrow: 4},
      'input:last-of-type': {flexGrow: 3},
    })),
    P9 = ({name: e, value: t, onChange: r, onFocus: n, onBlur: a}) => {
      let [o, u] = ne(!0),
        i = xe(),
        s = xe()
      me(() => {
        o !== !1 &&
          (i && i.current && (i.current.value = _9(t)),
          s && s.current && (s.current.value = O9(t)))
      }, [t])
      let d = (g) => {
          let h = B9(g.target.value),
            E = new Date(t)
          E.setFullYear(h.getFullYear(), h.getMonth(), h.getDate())
          let b = E.getTime()
          b && r(b), u(!!b)
        },
        y = (g) => {
          let h = T9(g.target.value),
            E = new Date(t)
          E.setHours(h.getHours()), E.setMinutes(h.getMinutes())
          let b = E.getTime()
          b && r(b), u(!!b)
        },
        A = Te(e)
      return m.createElement(
        R9,
        null,
        m.createElement(we.Input, {
          type: 'date',
          max: '9999-12-31',
          ref: i,
          id: `${A}-date`,
          name: `${A}-date`,
          onChange: d,
          onFocus: n,
          onBlur: a,
        }),
        m.createElement(we.Input, {
          type: 'time',
          id: `${A}-time`,
          name: `${A}-time`,
          ref: s,
          onChange: y,
          onFocus: n,
          onBlur: a,
        }),
        o ? null : m.createElement('div', null, 'invalid')
      )
    },
    I9 = q.label({display: 'flex'}),
    k9 = (e) => {
      let t = parseFloat(e)
      return Number.isNaN(t) ? void 0 : t
    }
  var N9 = ({
      name: e,
      value: t,
      onChange: r,
      min: n,
      max: a,
      step: o,
      onBlur: u,
      onFocus: i,
    }) => {
      let [s, d] = ne(typeof t == 'number' ? t : ''),
        [y, A] = ne(!1),
        [g, h] = ne(null),
        E = ge(
          (S) => {
            d(S.target.value)
            let P = parseFloat(S.target.value)
            Number.isNaN(P)
              ? h(new Error(`'${S.target.value}' is not a number`))
              : (r(P), h(null))
          },
          [r, h]
        ),
        b = ge(() => {
          d('0'), r(0), A(!0)
        }, [A]),
        x = xe(null)
      return (
        me(() => {
          y && x.current && x.current.select()
        }, [y]),
        me(() => {
          s !== (typeof t == 'number' ? t : '') && d(t)
        }, [t]),
        !y && t === void 0
          ? m.createElement(we.Button, {id: dr(e), onClick: b}, 'Set number')
          : m.createElement(
              I9,
              null,
              m.createElement(we.Input, {
                ref: x,
                id: Te(e),
                type: 'number',
                onChange: E,
                size: 'flex',
                placeholder: 'Edit number...',
                value: s,
                valid: g ? 'error' : null,
                autoFocus: y,
                name: e,
                min: n,
                max: a,
                step: o,
                onFocus: i,
                onBlur: u,
              })
            )
      )
    },
    Xm = (e, t) => {
      let r = t && Object.entries(t).find(([n, a]) => a === e)
      return r ? r[0] : void 0
    },
    Qu = (e, t) =>
      e && t
        ? Object.entries(t)
            .filter((r) => e.includes(r[1]))
            .map((r) => r[0])
        : [],
    Jm = (e, t) => e && t && e.map((r) => t[r]),
    j9 = q.div(({isInline: e}) =>
      e
        ? {
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            label: {display: 'inline-flex', marginRight: 15},
          }
        : {label: {display: 'flex'}}
    ),
    M9 = q.span({}),
    q9 = q.label({
      lineHeight: '20px',
      alignItems: 'center',
      marginBottom: 8,
      '&:last-child': {marginBottom: 0},
      input: {margin: 0, marginRight: 6},
    }),
    Rm = ({name: e, options: t, value: r, onChange: n, isInline: a}) => {
      if (!t)
        return (
          Me.warn(`Checkbox with no options: ${e}`),
          m.createElement(m.Fragment, null, '-')
        )
      let o = Qu(r, t),
        [u, i] = ne(o),
        s = (y) => {
          let A = y.target.value,
            g = [...u]
          g.includes(A) ? g.splice(g.indexOf(A), 1) : g.push(A),
            n(Jm(g, t)),
            i(g)
        }
      me(() => {
        i(Qu(r, t))
      }, [r])
      let d = Te(e)
      return m.createElement(
        j9,
        {isInline: a},
        Object.keys(t).map((y, A) => {
          let g = `${d}-${A}`
          return m.createElement(
            q9,
            {key: g, htmlFor: g},
            m.createElement('input', {
              type: 'checkbox',
              id: g,
              name: g,
              value: y,
              onChange: s,
              checked: u?.includes(y),
            }),
            m.createElement(M9, null, y)
          )
        })
      )
    },
    L9 = q.div(({isInline: e}) =>
      e
        ? {
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            label: {display: 'inline-flex', marginRight: 15},
          }
        : {label: {display: 'flex'}}
    ),
    $9 = q.span({}),
    U9 = q.label({
      lineHeight: '20px',
      alignItems: 'center',
      marginBottom: 8,
      '&:last-child': {marginBottom: 0},
      input: {margin: 0, marginRight: 6},
    }),
    Pm = ({name: e, options: t, value: r, onChange: n, isInline: a}) => {
      if (!t)
        return (
          Me.warn(`Radio with no options: ${e}`),
          m.createElement(m.Fragment, null, '-')
        )
      let o = Xm(r, t),
        u = Te(e)
      return m.createElement(
        L9,
        {isInline: a},
        Object.keys(t).map((i, s) => {
          let d = `${u}-${s}`
          return m.createElement(
            U9,
            {key: d, htmlFor: d},
            m.createElement('input', {
              type: 'radio',
              id: d,
              name: d,
              value: i,
              onChange: (y) => n(t[y.currentTarget.value]),
              checked: i === o,
            }),
            m.createElement($9, null, i)
          )
        })
      )
    },
    z9 = {
      appearance: 'none',
      border: '0 none',
      boxSizing: 'inherit',
      display: ' block',
      margin: ' 0',
      background: 'transparent',
      padding: 0,
      fontSize: 'inherit',
      position: 'relative',
    },
    Qm = q.select(({theme: e}) => ({
      ...z9,
      boxSizing: 'border-box',
      position: 'relative',
      padding: '6px 10px',
      width: '100%',
      color: e.input.color || 'inherit',
      background: e.input.background,
      borderRadius: e.input.borderRadius,
      boxShadow: `${e.input.border} 0 0 0 1px inset`,
      fontSize: e.typography.size.s2 - 1,
      lineHeight: '20px',
      '&:focus': {
        boxShadow: `${e.color.secondary} 0 0 0 1px inset`,
        outline: 'none',
      },
      '&[disabled]': {cursor: 'not-allowed', opacity: 0.5},
      '::placeholder': {color: e.textMutedColor},
      '&[multiple]': {
        overflow: 'auto',
        padding: 0,
        option: {
          display: 'block',
          padding: '6px 10px',
          marginLeft: 1,
          marginRight: 1,
        },
      },
    })),
    Zm = q.span(({theme: e}) => ({
      display: 'inline-block',
      lineHeight: 'normal',
      overflow: 'hidden',
      position: 'relative',
      verticalAlign: 'top',
      width: '100%',
      svg: {
        position: 'absolute',
        zIndex: 1,
        pointerEvents: 'none',
        height: '12px',
        marginTop: '-6px',
        right: '12px',
        top: '50%',
        fill: e.textMutedColor,
        path: {fill: e.textMutedColor},
      },
    })),
    Im = 'Choose option...',
    H9 = ({name: e, value: t, options: r, onChange: n}) => {
      let a = (i) => {
          n(r[i.currentTarget.value])
        },
        o = Xm(t, r) || Im,
        u = Te(e)
      return m.createElement(
        Zm,
        null,
        m.createElement(Be, {icon: 'arrowdown'}),
        m.createElement(
          Qm,
          {id: u, value: o, onChange: a},
          m.createElement('option', {key: 'no-selection', disabled: !0}, Im),
          Object.keys(r).map((i) => m.createElement('option', {key: i}, i))
        )
      )
    },
    G9 = ({name: e, value: t, options: r, onChange: n}) => {
      let a = (i) => {
          let s = Array.from(i.currentTarget.options)
            .filter((d) => d.selected)
            .map((d) => d.value)
          n(Jm(s, r))
        },
        o = Qu(t, r),
        u = Te(e)
      return m.createElement(
        Zm,
        null,
        m.createElement(
          Qm,
          {id: u, multiple: !0, value: o, onChange: a},
          Object.keys(r).map((i) => m.createElement('option', {key: i}, i))
        )
      )
    },
    km = (e) => {
      let {name: t, options: r} = e
      return r
        ? e.isMulti
          ? m.createElement(G9, {...e})
          : m.createElement(H9, {...e})
        : (Me.warn(`Select with no options: ${t}`),
          m.createElement(m.Fragment, null, '-'))
    },
    W9 = (e, t) =>
      Array.isArray(e)
        ? e.reduce((r, n) => ((r[t?.[n] || String(n)] = n), r), {})
        : e,
    V9 = {
      check: Rm,
      'inline-check': Rm,
      radio: Pm,
      'inline-radio': Pm,
      select: km,
      'multi-select': km,
    },
    ir = (e) => {
      let {type: t = 'select', labels: r, argType: n} = e,
        a = {
          ...e,
          options: n ? W9(n.options, r) : {},
          isInline: t.includes('inline'),
          isMulti: t.includes('multi'),
        },
        o = V9[t]
      if (o) return m.createElement(o, {...a})
      throw new Error(`Unknown options type: ${t}`)
    },
    oi = 'value',
    K9 = 'key',
    Y9 = 'Error',
    X9 = 'Object',
    J9 = 'Array',
    Q9 = 'String',
    Z9 = 'Number',
    eR = 'Boolean',
    tR = 'Date',
    rR = 'Null',
    nR = 'Undefined',
    aR = 'Function',
    oR = 'Symbol',
    ey = 'ADD_DELTA_TYPE',
    ty = 'REMOVE_DELTA_TYPE',
    ry = 'UPDATE_DELTA_TYPE'
  function ft(e) {
    return e !== null &&
      typeof e == 'object' &&
      !Array.isArray(e) &&
      typeof e[Symbol.iterator] == 'function'
      ? 'Iterable'
      : Object.prototype.toString.call(e).slice(8, -1)
  }
  function ny(e, t) {
    let r = ft(e),
      n = ft(t)
    return (r === 'Function' || n === 'Function') && n !== r
  }
  var ui = class extends Xe {
    constructor(e) {
      super(e),
        (this.state = {inputRefKey: null, inputRefValue: null}),
        (this.refInputValue = this.refInputValue.bind(this)),
        (this.refInputKey = this.refInputKey.bind(this)),
        (this.onKeydown = this.onKeydown.bind(this)),
        (this.onSubmit = this.onSubmit.bind(this))
    }
    componentDidMount() {
      let {inputRefKey: e, inputRefValue: t} = this.state,
        {onlyValue: r} = this.props
      e && typeof e.focus == 'function' && e.focus(),
        r && t && typeof t.focus == 'function' && t.focus(),
        document.addEventListener('keydown', this.onKeydown)
    }
    componentWillUnmount() {
      document.removeEventListener('keydown', this.onKeydown)
    }
    onKeydown(e) {
      e.altKey ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey ||
        e.repeat ||
        ((e.code === 'Enter' || e.key === 'Enter') &&
          (e.preventDefault(), this.onSubmit()),
        (e.code === 'Escape' || e.key === 'Escape') &&
          (e.preventDefault(), this.props.handleCancel()))
    }
    onSubmit() {
      let {
          handleAdd: e,
          onlyValue: t,
          onSubmitValueParser: r,
          keyPath: n,
          deep: a,
        } = this.props,
        {inputRefKey: o, inputRefValue: u} = this.state,
        i = {}
      if (!t) {
        if (!o.value) return
        i.key = o.value
      }
      ;(i.newValue = r(!1, n, a, i.key, u.value)), e(i)
    }
    refInputKey(e) {
      this.state.inputRefKey = e
    }
    refInputValue(e) {
      this.state.inputRefValue = e
    }
    render() {
      let {
          handleCancel: e,
          onlyValue: t,
          addButtonElement: r,
          cancelButtonElement: n,
          inputElementGenerator: a,
          keyPath: o,
          deep: u,
        } = this.props,
        i = he(r, {onClick: this.onSubmit}),
        s = he(n, {onClick: e}),
        d = a(oi, o, u),
        y = he(d, {placeholder: 'Value', ref: this.refInputValue}),
        A = null
      if (!t) {
        let g = a(K9, o, u)
        A = he(g, {placeholder: 'Key', ref: this.refInputKey})
      }
      return m.createElement(
        'span',
        {className: 'rejt-add-value-node'},
        A,
        y,
        s,
        i
      )
    }
  }
  ui.defaultProps = {
    onlyValue: !1,
    addButtonElement: m.createElement('button', null, '+'),
    cancelButtonElement: m.createElement('button', null, 'c'),
  }
  var ay = class extends Xe {
    constructor(e) {
      super(e)
      let t = [...e.keyPath, e.name]
      ;(this.state = {
        data: e.data,
        name: e.name,
        keyPath: t,
        deep: e.deep,
        nextDeep: e.deep + 1,
        collapsed: e.isCollapsed(t, e.deep, e.data),
        addFormVisible: !1,
      }),
        (this.handleCollapseMode = this.handleCollapseMode.bind(this)),
        (this.handleRemoveItem = this.handleRemoveItem.bind(this)),
        (this.handleAddMode = this.handleAddMode.bind(this)),
        (this.handleAddValueAdd = this.handleAddValueAdd.bind(this)),
        (this.handleAddValueCancel = this.handleAddValueCancel.bind(this)),
        (this.handleEditValue = this.handleEditValue.bind(this)),
        (this.onChildUpdate = this.onChildUpdate.bind(this)),
        (this.renderCollapsed = this.renderCollapsed.bind(this)),
        (this.renderNotCollapsed = this.renderNotCollapsed.bind(this))
    }
    static getDerivedStateFromProps(e, t) {
      return e.data !== t.data ? {data: e.data} : null
    }
    onChildUpdate(e, t) {
      let {data: r, keyPath: n} = this.state
      ;(r[e] = t), this.setState({data: r})
      let {onUpdate: a} = this.props,
        o = n.length
      a(n[o - 1], r)
    }
    handleAddMode() {
      this.setState({addFormVisible: !0})
    }
    handleCollapseMode() {
      this.setState((e) => ({collapsed: !e.collapsed}))
    }
    handleRemoveItem(e) {
      return () => {
        let {beforeRemoveAction: t, logger: r} = this.props,
          {data: n, keyPath: a, nextDeep: o} = this.state,
          u = n[e]
        t(e, a, o, u)
          .then(() => {
            let i = {keyPath: a, deep: o, key: e, oldValue: u, type: ty}
            n.splice(e, 1), this.setState({data: n})
            let {onUpdate: s, onDeltaUpdate: d} = this.props
            s(a[a.length - 1], n), d(i)
          })
          .catch(r.error)
      }
    }
    handleAddValueAdd({newValue: e}) {
      let {data: t, keyPath: r, nextDeep: n} = this.state,
        {beforeAddAction: a, logger: o} = this.props
      a(t.length, r, n, e)
        .then(() => {
          let u = [...t, e]
          this.setState({data: u}), this.handleAddValueCancel()
          let {onUpdate: i, onDeltaUpdate: s} = this.props
          i(r[r.length - 1], u),
            s({type: ey, keyPath: r, deep: n, key: u.length - 1, newValue: e})
        })
        .catch(o.error)
    }
    handleAddValueCancel() {
      this.setState({addFormVisible: !1})
    }
    handleEditValue({key: e, value: t}) {
      return new Promise((r, n) => {
        let {beforeUpdateAction: a} = this.props,
          {data: o, keyPath: u, nextDeep: i} = this.state,
          s = o[e]
        a(e, u, i, s, t)
          .then(() => {
            ;(o[e] = t), this.setState({data: o})
            let {onUpdate: d, onDeltaUpdate: y} = this.props
            d(u[u.length - 1], o),
              y({
                type: ry,
                keyPath: u,
                deep: i,
                key: e,
                newValue: t,
                oldValue: s,
              }),
              r(void 0)
          })
          .catch(n)
      })
    }
    renderCollapsed() {
      let {name: e, data: t, keyPath: r, deep: n} = this.state,
        {
          handleRemove: a,
          readOnly: o,
          getStyle: u,
          dataType: i,
          minusMenuElement: s,
        } = this.props,
        {minus: d, collapsed: y} = u(e, t, r, n, i),
        A = o(e, t, r, n, i),
        g = he(s, {onClick: a, className: 'rejt-minus-menu', style: d})
      return m.createElement(
        'span',
        {className: 'rejt-collapsed'},
        m.createElement(
          'span',
          {
            className: 'rejt-collapsed-text',
            style: y,
            onClick: this.handleCollapseMode,
          },
          '[...] ',
          t.length,
          ' ',
          t.length === 1 ? 'item' : 'items'
        ),
        !A && g
      )
    }
    renderNotCollapsed() {
      let {
          name: e,
          data: t,
          keyPath: r,
          deep: n,
          addFormVisible: a,
          nextDeep: o,
        } = this.state,
        {
          isCollapsed: u,
          handleRemove: i,
          onDeltaUpdate: s,
          readOnly: d,
          getStyle: y,
          dataType: A,
          addButtonElement: g,
          cancelButtonElement: h,
          editButtonElement: E,
          inputElementGenerator: b,
          textareaElementGenerator: x,
          minusMenuElement: S,
          plusMenuElement: P,
          beforeRemoveAction: N,
          beforeAddAction: $,
          beforeUpdateAction: w,
          logger: j,
          onSubmitValueParser: I,
        } = this.props,
        {
          minus: z,
          plus: K,
          delimiter: U,
          ul: ue,
          addForm: te,
        } = y(e, t, r, n, A),
        X = d(e, t, r, n, A),
        O = he(P, {
          onClick: this.handleAddMode,
          className: 'rejt-plus-menu',
          style: K,
        }),
        T = he(S, {onClick: i, className: 'rejt-minus-menu', style: z}),
        M = !0,
        G = '[',
        Y = ']'
      return m.createElement(
        'span',
        {className: 'rejt-not-collapsed'},
        m.createElement(
          'span',
          {className: 'rejt-not-collapsed-delimiter', style: U},
          G
        ),
        !a && O,
        m.createElement(
          'ul',
          {className: 'rejt-not-collapsed-list', style: ue},
          t.map((V, Q) =>
            m.createElement(da, {
              key: Q,
              name: `${Q}`,
              data: V,
              keyPath: r,
              deep: o,
              isCollapsed: u,
              handleRemove: this.handleRemoveItem(Q),
              handleUpdateValue: this.handleEditValue,
              onUpdate: this.onChildUpdate,
              onDeltaUpdate: s,
              readOnly: d,
              getStyle: y,
              addButtonElement: g,
              cancelButtonElement: h,
              editButtonElement: E,
              inputElementGenerator: b,
              textareaElementGenerator: x,
              minusMenuElement: S,
              plusMenuElement: P,
              beforeRemoveAction: N,
              beforeAddAction: $,
              beforeUpdateAction: w,
              logger: j,
              onSubmitValueParser: I,
            })
          )
        ),
        !X &&
          a &&
          m.createElement(
            'div',
            {className: 'rejt-add-form', style: te},
            m.createElement(ui, {
              handleAdd: this.handleAddValueAdd,
              handleCancel: this.handleAddValueCancel,
              onlyValue: M,
              addButtonElement: g,
              cancelButtonElement: h,
              inputElementGenerator: b,
              keyPath: r,
              deep: n,
              onSubmitValueParser: I,
            })
          ),
        m.createElement(
          'span',
          {className: 'rejt-not-collapsed-delimiter', style: U},
          Y
        ),
        !X && T
      )
    }
    render() {
      let {name: e, collapsed: t, data: r, keyPath: n, deep: a} = this.state,
        {dataType: o, getStyle: u} = this.props,
        i = t ? this.renderCollapsed() : this.renderNotCollapsed(),
        s = u(e, r, n, a, o)
      return m.createElement(
        'div',
        {className: 'rejt-array-node'},
        m.createElement(
          'span',
          {onClick: this.handleCollapseMode},
          m.createElement(
            'span',
            {className: 'rejt-name', style: s.name},
            e,
            ' :',
            ' '
          )
        ),
        i
      )
    }
  }
  ay.defaultProps = {
    keyPath: [],
    deep: 0,
    minusMenuElement: m.createElement('span', null, ' - '),
    plusMenuElement: m.createElement('span', null, ' + '),
  }
  var oy = class extends Xe {
    constructor(e) {
      super(e)
      let t = [...e.keyPath, e.name]
      ;(this.state = {
        value: e.value,
        name: e.name,
        keyPath: t,
        deep: e.deep,
        editEnabled: !1,
        inputRef: null,
      }),
        (this.handleEditMode = this.handleEditMode.bind(this)),
        (this.refInput = this.refInput.bind(this)),
        (this.handleCancelEdit = this.handleCancelEdit.bind(this)),
        (this.handleEdit = this.handleEdit.bind(this)),
        (this.onKeydown = this.onKeydown.bind(this))
    }
    static getDerivedStateFromProps(e, t) {
      return e.value !== t.value ? {value: e.value} : null
    }
    componentDidUpdate() {
      let {
          editEnabled: e,
          inputRef: t,
          name: r,
          value: n,
          keyPath: a,
          deep: o,
        } = this.state,
        {readOnly: u, dataType: i} = this.props,
        s = u(r, n, a, o, i)
      e && !s && typeof t.focus == 'function' && t.focus()
    }
    componentDidMount() {
      document.addEventListener('keydown', this.onKeydown)
    }
    componentWillUnmount() {
      document.removeEventListener('keydown', this.onKeydown)
    }
    onKeydown(e) {
      e.altKey ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey ||
        e.repeat ||
        ((e.code === 'Enter' || e.key === 'Enter') &&
          (e.preventDefault(), this.handleEdit()),
        (e.code === 'Escape' || e.key === 'Escape') &&
          (e.preventDefault(), this.handleCancelEdit()))
    }
    handleEdit() {
      let {
          handleUpdateValue: e,
          originalValue: t,
          logger: r,
          onSubmitValueParser: n,
          keyPath: a,
        } = this.props,
        {inputRef: o, name: u, deep: i} = this.state
      if (!o) return
      let s = n(!0, a, i, u, o.value)
      e({value: s, key: u})
        .then(() => {
          ny(t, s) || this.handleCancelEdit()
        })
        .catch(r.error)
    }
    handleEditMode() {
      this.setState({editEnabled: !0})
    }
    refInput(e) {
      this.state.inputRef = e
    }
    handleCancelEdit() {
      this.setState({editEnabled: !1})
    }
    render() {
      let {name: e, value: t, editEnabled: r, keyPath: n, deep: a} = this.state,
        {
          handleRemove: o,
          originalValue: u,
          readOnly: i,
          dataType: s,
          getStyle: d,
          editButtonElement: y,
          cancelButtonElement: A,
          textareaElementGenerator: g,
          minusMenuElement: h,
          keyPath: E,
        } = this.props,
        b = d(e, u, n, a, s),
        x = null,
        S = null,
        P = i(e, u, n, a, s)
      if (r && !P) {
        let N = g(oi, E, a, e, u, s),
          $ = he(y, {onClick: this.handleEdit}),
          w = he(A, {onClick: this.handleCancelEdit}),
          j = he(N, {ref: this.refInput, defaultValue: u})
        ;(x = m.createElement(
          'span',
          {className: 'rejt-edit-form', style: b.editForm},
          j,
          ' ',
          w,
          $
        )),
          (S = null)
      } else {
        x = m.createElement(
          'span',
          {
            className: 'rejt-value',
            style: b.value,
            onClick: P ? null : this.handleEditMode,
          },
          t
        )
        let N = he(h, {
          onClick: o,
          className: 'rejt-minus-menu',
          style: b.minus,
        })
        S = P ? null : N
      }
      return m.createElement(
        'li',
        {className: 'rejt-function-value-node', style: b.li},
        m.createElement(
          'span',
          {className: 'rejt-name', style: b.name},
          e,
          ' :',
          ' '
        ),
        x,
        S
      )
    }
  }
  oy.defaultProps = {
    keyPath: [],
    deep: 0,
    handleUpdateValue: () => {},
    editButtonElement: m.createElement('button', null, 'e'),
    cancelButtonElement: m.createElement('button', null, 'c'),
    minusMenuElement: m.createElement('span', null, ' - '),
  }
  var da = class extends Xe {
    constructor(e) {
      super(e),
        (this.state = {
          data: e.data,
          name: e.name,
          keyPath: e.keyPath,
          deep: e.deep,
        })
    }
    static getDerivedStateFromProps(e, t) {
      return e.data !== t.data ? {data: e.data} : null
    }
    render() {
      let {data: e, name: t, keyPath: r, deep: n} = this.state,
        {
          isCollapsed: a,
          handleRemove: o,
          handleUpdateValue: u,
          onUpdate: i,
          onDeltaUpdate: s,
          readOnly: d,
          getStyle: y,
          addButtonElement: A,
          cancelButtonElement: g,
          editButtonElement: h,
          inputElementGenerator: E,
          textareaElementGenerator: b,
          minusMenuElement: x,
          plusMenuElement: S,
          beforeRemoveAction: P,
          beforeAddAction: N,
          beforeUpdateAction: $,
          logger: w,
          onSubmitValueParser: j,
        } = this.props,
        I = () => !0,
        z = ft(e)
      switch (z) {
        case Y9:
          return m.createElement(Zu, {
            data: e,
            name: t,
            isCollapsed: a,
            keyPath: r,
            deep: n,
            handleRemove: o,
            onUpdate: i,
            onDeltaUpdate: s,
            readOnly: I,
            dataType: z,
            getStyle: y,
            addButtonElement: A,
            cancelButtonElement: g,
            editButtonElement: h,
            inputElementGenerator: E,
            textareaElementGenerator: b,
            minusMenuElement: x,
            plusMenuElement: S,
            beforeRemoveAction: P,
            beforeAddAction: N,
            beforeUpdateAction: $,
            logger: w,
            onSubmitValueParser: j,
          })
        case X9:
          return m.createElement(Zu, {
            data: e,
            name: t,
            isCollapsed: a,
            keyPath: r,
            deep: n,
            handleRemove: o,
            onUpdate: i,
            onDeltaUpdate: s,
            readOnly: d,
            dataType: z,
            getStyle: y,
            addButtonElement: A,
            cancelButtonElement: g,
            editButtonElement: h,
            inputElementGenerator: E,
            textareaElementGenerator: b,
            minusMenuElement: x,
            plusMenuElement: S,
            beforeRemoveAction: P,
            beforeAddAction: N,
            beforeUpdateAction: $,
            logger: w,
            onSubmitValueParser: j,
          })
        case J9:
          return m.createElement(ay, {
            data: e,
            name: t,
            isCollapsed: a,
            keyPath: r,
            deep: n,
            handleRemove: o,
            onUpdate: i,
            onDeltaUpdate: s,
            readOnly: d,
            dataType: z,
            getStyle: y,
            addButtonElement: A,
            cancelButtonElement: g,
            editButtonElement: h,
            inputElementGenerator: E,
            textareaElementGenerator: b,
            minusMenuElement: x,
            plusMenuElement: S,
            beforeRemoveAction: P,
            beforeAddAction: N,
            beforeUpdateAction: $,
            logger: w,
            onSubmitValueParser: j,
          })
        case Q9:
          return m.createElement(dt, {
            name: t,
            value: `"${e}"`,
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: u,
            readOnly: d,
            dataType: z,
            getStyle: y,
            cancelButtonElement: g,
            editButtonElement: h,
            inputElementGenerator: E,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: j,
          })
        case Z9:
          return m.createElement(dt, {
            name: t,
            value: e,
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: u,
            readOnly: d,
            dataType: z,
            getStyle: y,
            cancelButtonElement: g,
            editButtonElement: h,
            inputElementGenerator: E,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: j,
          })
        case eR:
          return m.createElement(dt, {
            name: t,
            value: e ? 'true' : 'false',
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: u,
            readOnly: d,
            dataType: z,
            getStyle: y,
            cancelButtonElement: g,
            editButtonElement: h,
            inputElementGenerator: E,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: j,
          })
        case tR:
          return m.createElement(dt, {
            name: t,
            value: e.toISOString(),
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: u,
            readOnly: I,
            dataType: z,
            getStyle: y,
            cancelButtonElement: g,
            editButtonElement: h,
            inputElementGenerator: E,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: j,
          })
        case rR:
          return m.createElement(dt, {
            name: t,
            value: 'null',
            originalValue: 'null',
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: u,
            readOnly: d,
            dataType: z,
            getStyle: y,
            cancelButtonElement: g,
            editButtonElement: h,
            inputElementGenerator: E,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: j,
          })
        case nR:
          return m.createElement(dt, {
            name: t,
            value: 'undefined',
            originalValue: 'undefined',
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: u,
            readOnly: d,
            dataType: z,
            getStyle: y,
            cancelButtonElement: g,
            editButtonElement: h,
            inputElementGenerator: E,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: j,
          })
        case aR:
          return m.createElement(oy, {
            name: t,
            value: e.toString(),
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: u,
            readOnly: d,
            dataType: z,
            getStyle: y,
            cancelButtonElement: g,
            editButtonElement: h,
            textareaElementGenerator: b,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: j,
          })
        case oR:
          return m.createElement(dt, {
            name: t,
            value: e.toString(),
            originalValue: e,
            keyPath: r,
            deep: n,
            handleRemove: o,
            handleUpdateValue: u,
            readOnly: I,
            dataType: z,
            getStyle: y,
            cancelButtonElement: g,
            editButtonElement: h,
            inputElementGenerator: E,
            minusMenuElement: x,
            logger: w,
            onSubmitValueParser: j,
          })
        default:
          return null
      }
    }
  }
  da.defaultProps = {keyPath: [], deep: 0}
  var Zu = class extends Xe {
    constructor(e) {
      super(e)
      let t = e.deep === -1 ? [] : [...e.keyPath, e.name]
      ;(this.state = {
        name: e.name,
        data: e.data,
        keyPath: t,
        deep: e.deep,
        nextDeep: e.deep + 1,
        collapsed: e.isCollapsed(t, e.deep, e.data),
        addFormVisible: !1,
      }),
        (this.handleCollapseMode = this.handleCollapseMode.bind(this)),
        (this.handleRemoveValue = this.handleRemoveValue.bind(this)),
        (this.handleAddMode = this.handleAddMode.bind(this)),
        (this.handleAddValueAdd = this.handleAddValueAdd.bind(this)),
        (this.handleAddValueCancel = this.handleAddValueCancel.bind(this)),
        (this.handleEditValue = this.handleEditValue.bind(this)),
        (this.onChildUpdate = this.onChildUpdate.bind(this)),
        (this.renderCollapsed = this.renderCollapsed.bind(this)),
        (this.renderNotCollapsed = this.renderNotCollapsed.bind(this))
    }
    static getDerivedStateFromProps(e, t) {
      return e.data !== t.data ? {data: e.data} : null
    }
    onChildUpdate(e, t) {
      let {data: r, keyPath: n} = this.state
      ;(r[e] = t), this.setState({data: r})
      let {onUpdate: a} = this.props,
        o = n.length
      a(n[o - 1], r)
    }
    handleAddMode() {
      this.setState({addFormVisible: !0})
    }
    handleAddValueCancel() {
      this.setState({addFormVisible: !1})
    }
    handleAddValueAdd({key: e, newValue: t}) {
      let {data: r, keyPath: n, nextDeep: a} = this.state,
        {beforeAddAction: o, logger: u} = this.props
      o(e, n, a, t)
        .then(() => {
          ;(r[e] = t), this.setState({data: r}), this.handleAddValueCancel()
          let {onUpdate: i, onDeltaUpdate: s} = this.props
          i(n[n.length - 1], r),
            s({type: ey, keyPath: n, deep: a, key: e, newValue: t})
        })
        .catch(u.error)
    }
    handleRemoveValue(e) {
      return () => {
        let {beforeRemoveAction: t, logger: r} = this.props,
          {data: n, keyPath: a, nextDeep: o} = this.state,
          u = n[e]
        t(e, a, o, u)
          .then(() => {
            let i = {keyPath: a, deep: o, key: e, oldValue: u, type: ty}
            delete n[e], this.setState({data: n})
            let {onUpdate: s, onDeltaUpdate: d} = this.props
            s(a[a.length - 1], n), d(i)
          })
          .catch(r.error)
      }
    }
    handleCollapseMode() {
      this.setState((e) => ({collapsed: !e.collapsed}))
    }
    handleEditValue({key: e, value: t}) {
      return new Promise((r, n) => {
        let {beforeUpdateAction: a} = this.props,
          {data: o, keyPath: u, nextDeep: i} = this.state,
          s = o[e]
        a(e, u, i, s, t)
          .then(() => {
            ;(o[e] = t), this.setState({data: o})
            let {onUpdate: d, onDeltaUpdate: y} = this.props
            d(u[u.length - 1], o),
              y({
                type: ry,
                keyPath: u,
                deep: i,
                key: e,
                newValue: t,
                oldValue: s,
              }),
              r()
          })
          .catch(n)
      })
    }
    renderCollapsed() {
      let {name: e, keyPath: t, deep: r, data: n} = this.state,
        {
          handleRemove: a,
          readOnly: o,
          dataType: u,
          getStyle: i,
          minusMenuElement: s,
        } = this.props,
        {minus: d, collapsed: y} = i(e, n, t, r, u),
        A = Object.getOwnPropertyNames(n),
        g = o(e, n, t, r, u),
        h = he(s, {onClick: a, className: 'rejt-minus-menu', style: d})
      return m.createElement(
        'span',
        {className: 'rejt-collapsed'},
        m.createElement(
          'span',
          {
            className: 'rejt-collapsed-text',
            style: y,
            onClick: this.handleCollapseMode,
          },
          '{...}',
          ' ',
          A.length,
          ' ',
          A.length === 1 ? 'key' : 'keys'
        ),
        !g && h
      )
    }
    renderNotCollapsed() {
      let {
          name: e,
          data: t,
          keyPath: r,
          deep: n,
          nextDeep: a,
          addFormVisible: o,
        } = this.state,
        {
          isCollapsed: u,
          handleRemove: i,
          onDeltaUpdate: s,
          readOnly: d,
          getStyle: y,
          dataType: A,
          addButtonElement: g,
          cancelButtonElement: h,
          editButtonElement: E,
          inputElementGenerator: b,
          textareaElementGenerator: x,
          minusMenuElement: S,
          plusMenuElement: P,
          beforeRemoveAction: N,
          beforeAddAction: $,
          beforeUpdateAction: w,
          logger: j,
          onSubmitValueParser: I,
        } = this.props,
        {
          minus: z,
          plus: K,
          addForm: U,
          ul: ue,
          delimiter: te,
        } = y(e, t, r, n, A),
        X = Object.getOwnPropertyNames(t),
        O = d(e, t, r, n, A),
        T = he(P, {
          onClick: this.handleAddMode,
          className: 'rejt-plus-menu',
          style: K,
        }),
        M = he(S, {onClick: i, className: 'rejt-minus-menu', style: z}),
        G = X.map((Q) =>
          m.createElement(da, {
            key: Q,
            name: Q,
            data: t[Q],
            keyPath: r,
            deep: a,
            isCollapsed: u,
            handleRemove: this.handleRemoveValue(Q),
            handleUpdateValue: this.handleEditValue,
            onUpdate: this.onChildUpdate,
            onDeltaUpdate: s,
            readOnly: d,
            getStyle: y,
            addButtonElement: g,
            cancelButtonElement: h,
            editButtonElement: E,
            inputElementGenerator: b,
            textareaElementGenerator: x,
            minusMenuElement: S,
            plusMenuElement: P,
            beforeRemoveAction: N,
            beforeAddAction: $,
            beforeUpdateAction: w,
            logger: j,
            onSubmitValueParser: I,
          })
        ),
        Y = '{',
        V = '}'
      return m.createElement(
        'span',
        {className: 'rejt-not-collapsed'},
        m.createElement(
          'span',
          {className: 'rejt-not-collapsed-delimiter', style: te},
          Y
        ),
        !O && T,
        m.createElement(
          'ul',
          {className: 'rejt-not-collapsed-list', style: ue},
          G
        ),
        !O &&
          o &&
          m.createElement(
            'div',
            {className: 'rejt-add-form', style: U},
            m.createElement(ui, {
              handleAdd: this.handleAddValueAdd,
              handleCancel: this.handleAddValueCancel,
              addButtonElement: g,
              cancelButtonElement: h,
              inputElementGenerator: b,
              keyPath: r,
              deep: n,
              onSubmitValueParser: I,
            })
          ),
        m.createElement(
          'span',
          {className: 'rejt-not-collapsed-delimiter', style: te},
          V
        ),
        !O && M
      )
    }
    render() {
      let {name: e, collapsed: t, data: r, keyPath: n, deep: a} = this.state,
        {getStyle: o, dataType: u} = this.props,
        i = t ? this.renderCollapsed() : this.renderNotCollapsed(),
        s = o(e, r, n, a, u)
      return m.createElement(
        'div',
        {className: 'rejt-object-node'},
        m.createElement(
          'span',
          {onClick: this.handleCollapseMode},
          m.createElement(
            'span',
            {className: 'rejt-name', style: s.name},
            e,
            ' :',
            ' '
          )
        ),
        i
      )
    }
  }
  Zu.defaultProps = {
    keyPath: [],
    deep: 0,
    minusMenuElement: m.createElement('span', null, ' - '),
    plusMenuElement: m.createElement('span', null, ' + '),
  }
  var dt = class extends Xe {
    constructor(e) {
      super(e)
      let t = [...e.keyPath, e.name]
      ;(this.state = {
        value: e.value,
        name: e.name,
        keyPath: t,
        deep: e.deep,
        editEnabled: !1,
        inputRef: null,
      }),
        (this.handleEditMode = this.handleEditMode.bind(this)),
        (this.refInput = this.refInput.bind(this)),
        (this.handleCancelEdit = this.handleCancelEdit.bind(this)),
        (this.handleEdit = this.handleEdit.bind(this)),
        (this.onKeydown = this.onKeydown.bind(this))
    }
    static getDerivedStateFromProps(e, t) {
      return e.value !== t.value ? {value: e.value} : null
    }
    componentDidUpdate() {
      let {
          editEnabled: e,
          inputRef: t,
          name: r,
          value: n,
          keyPath: a,
          deep: o,
        } = this.state,
        {readOnly: u, dataType: i} = this.props,
        s = u(r, n, a, o, i)
      e && !s && typeof t.focus == 'function' && t.focus()
    }
    componentDidMount() {
      document.addEventListener('keydown', this.onKeydown)
    }
    componentWillUnmount() {
      document.removeEventListener('keydown', this.onKeydown)
    }
    onKeydown(e) {
      e.altKey ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey ||
        e.repeat ||
        ((e.code === 'Enter' || e.key === 'Enter') &&
          (e.preventDefault(), this.handleEdit()),
        (e.code === 'Escape' || e.key === 'Escape') &&
          (e.preventDefault(), this.handleCancelEdit()))
    }
    handleEdit() {
      let {
          handleUpdateValue: e,
          originalValue: t,
          logger: r,
          onSubmitValueParser: n,
          keyPath: a,
        } = this.props,
        {inputRef: o, name: u, deep: i} = this.state
      if (!o) return
      let s = n(!0, a, i, u, o.value)
      e({value: s, key: u})
        .then(() => {
          ny(t, s) || this.handleCancelEdit()
        })
        .catch(r.error)
    }
    handleEditMode() {
      this.setState({editEnabled: !0})
    }
    refInput(e) {
      this.state.inputRef = e
    }
    handleCancelEdit() {
      this.setState({editEnabled: !1})
    }
    render() {
      let {name: e, value: t, editEnabled: r, keyPath: n, deep: a} = this.state,
        {
          handleRemove: o,
          originalValue: u,
          readOnly: i,
          dataType: s,
          getStyle: d,
          editButtonElement: y,
          cancelButtonElement: A,
          inputElementGenerator: g,
          minusMenuElement: h,
          keyPath: E,
        } = this.props,
        b = d(e, u, n, a, s),
        x = i(e, u, n, a, s),
        S = r && !x,
        P = g(oi, E, a, e, u, s),
        N = he(y, {onClick: this.handleEdit}),
        $ = he(A, {onClick: this.handleCancelEdit}),
        w = he(P, {ref: this.refInput, defaultValue: JSON.stringify(u)}),
        j = he(h, {onClick: o, className: 'rejt-minus-menu', style: b.minus})
      return m.createElement(
        'li',
        {className: 'rejt-value-node', style: b.li},
        m.createElement(
          'span',
          {className: 'rejt-name', style: b.name},
          e,
          ' : '
        ),
        S
          ? m.createElement(
              'span',
              {className: 'rejt-edit-form', style: b.editForm},
              w,
              ' ',
              $,
              N
            )
          : m.createElement(
              'span',
              {
                className: 'rejt-value',
                style: b.value,
                onClick: x ? null : this.handleEditMode,
              },
              String(t)
            ),
        !x && !S && j
      )
    }
  }
  dt.defaultProps = {
    keyPath: [],
    deep: 0,
    handleUpdateValue: () => Promise.resolve(),
    editButtonElement: m.createElement('button', null, 'e'),
    cancelButtonElement: m.createElement('button', null, 'c'),
    minusMenuElement: m.createElement('span', null, ' - '),
  }
  var uR = {
      minus: {color: 'red'},
      plus: {color: 'green'},
      collapsed: {color: 'grey'},
      delimiter: {},
      ul: {padding: '0px', margin: '0 0 0 25px', listStyle: 'none'},
      name: {color: '#2287CD'},
      addForm: {},
    },
    iR = {
      minus: {color: 'red'},
      plus: {color: 'green'},
      collapsed: {color: 'grey'},
      delimiter: {},
      ul: {padding: '0px', margin: '0 0 0 25px', listStyle: 'none'},
      name: {color: '#2287CD'},
      addForm: {},
    },
    sR = {
      minus: {color: 'red'},
      editForm: {},
      value: {color: '#7bba3d'},
      li: {minHeight: '22px', lineHeight: '22px', outline: '0px'},
      name: {color: '#2287CD'},
    }
  function lR(e) {
    let t = e
    if (t.indexOf('function') === 0) return (0, eval)(`(${t})`)
    try {
      t = JSON.parse(e)
    } catch {}
    return t
  }
  var uy = class extends Xe {
    constructor(e) {
      super(e),
        (this.state = {data: e.data, rootName: e.rootName}),
        (this.onUpdate = this.onUpdate.bind(this)),
        (this.removeRoot = this.removeRoot.bind(this))
    }
    static getDerivedStateFromProps(e, t) {
      return e.data !== t.data || e.rootName !== t.rootName
        ? {data: e.data, rootName: e.rootName}
        : null
    }
    onUpdate(e, t) {
      this.setState({data: t}), this.props.onFullyUpdate(t)
    }
    removeRoot() {
      this.onUpdate(null, null)
    }
    render() {
      let {data: e, rootName: t} = this.state,
        {
          isCollapsed: r,
          onDeltaUpdate: n,
          readOnly: a,
          getStyle: o,
          addButtonElement: u,
          cancelButtonElement: i,
          editButtonElement: s,
          inputElement: d,
          textareaElement: y,
          minusMenuElement: A,
          plusMenuElement: g,
          beforeRemoveAction: h,
          beforeAddAction: E,
          beforeUpdateAction: b,
          logger: x,
          onSubmitValueParser: S,
          fallback: P = null,
        } = this.props,
        N = ft(e),
        $ = a
      ft(a) === 'Boolean' && ($ = () => a)
      let w = d
      d && ft(d) !== 'Function' && (w = () => d)
      let j = y
      return (
        y && ft(y) !== 'Function' && (j = () => y),
        N === 'Object' || N === 'Array'
          ? m.createElement(
              'div',
              {className: 'rejt-tree'},
              m.createElement(da, {
                data: e,
                name: t,
                deep: -1,
                isCollapsed: r,
                onUpdate: this.onUpdate,
                onDeltaUpdate: n,
                readOnly: $,
                getStyle: o,
                addButtonElement: u,
                cancelButtonElement: i,
                editButtonElement: s,
                inputElementGenerator: w,
                textareaElementGenerator: j,
                minusMenuElement: A,
                plusMenuElement: g,
                handleRemove: this.removeRoot,
                beforeRemoveAction: h,
                beforeAddAction: E,
                beforeUpdateAction: b,
                logger: x,
                onSubmitValueParser: S,
              })
            )
          : P
      )
    }
  }
  uy.defaultProps = {
    rootName: 'root',
    isCollapsed: (e, t) => t !== -1,
    getStyle: (e, t, r, n, a) => {
      switch (a) {
        case 'Object':
        case 'Error':
          return uR
        case 'Array':
          return iR
        default:
          return sR
      }
    },
    readOnly: () => !1,
    onFullyUpdate: () => {},
    onDeltaUpdate: () => {},
    beforeRemoveAction: () => Promise.resolve(),
    beforeAddAction: () => Promise.resolve(),
    beforeUpdateAction: () => Promise.resolve(),
    logger: {error: () => {}},
    onSubmitValueParser: (e, t, r, n, a) => lR(a),
    inputElement: () => m.createElement('input', null),
    textareaElement: () => m.createElement('textarea', null),
    fallback: null,
  }
  var {window: cR} = oe,
    pR = q.div(({theme: e}) => ({
      position: 'relative',
      display: 'flex',
      '.rejt-tree': {marginLeft: '1rem', fontSize: '13px'},
      '.rejt-value-node, .rejt-object-node > .rejt-collapsed, .rejt-array-node > .rejt-collapsed, .rejt-object-node > .rejt-not-collapsed, .rejt-array-node > .rejt-not-collapsed':
        {'& > svg': {opacity: 0, transition: 'opacity 0.2s'}},
      '.rejt-value-node:hover, .rejt-object-node:hover > .rejt-collapsed, .rejt-array-node:hover > .rejt-collapsed, .rejt-object-node:hover > .rejt-not-collapsed, .rejt-array-node:hover > .rejt-not-collapsed':
        {'& > svg': {opacity: 1}},
      '.rejt-edit-form button': {display: 'none'},
      '.rejt-add-form': {marginLeft: 10},
      '.rejt-add-value-node': {display: 'inline-flex', alignItems: 'center'},
      '.rejt-name': {lineHeight: '22px'},
      '.rejt-not-collapsed-delimiter': {lineHeight: '22px'},
      '.rejt-plus-menu': {marginLeft: 5},
      '.rejt-object-node > span > *': {position: 'relative', zIndex: 2},
      '.rejt-object-node, .rejt-array-node': {position: 'relative'},
      '.rejt-object-node > span:first-of-type::after, .rejt-array-node > span:first-of-type::after, .rejt-collapsed::before, .rejt-not-collapsed::before':
        {
          content: '""',
          position: 'absolute',
          top: 0,
          display: 'block',
          width: '100%',
          marginLeft: '-1rem',
          padding: '0 4px 0 1rem',
          height: 22,
        },
      '.rejt-collapsed::before, .rejt-not-collapsed::before': {
        zIndex: 1,
        background: 'transparent',
        borderRadius: 4,
        transition: 'background 0.2s',
        pointerEvents: 'none',
        opacity: 0.1,
      },
      '.rejt-object-node:hover, .rejt-array-node:hover': {
        '& > .rejt-collapsed::before, & > .rejt-not-collapsed::before': {
          background: e.color.secondary,
        },
      },
      '.rejt-collapsed::after, .rejt-not-collapsed::after': {
        content: '""',
        position: 'absolute',
        display: 'inline-block',
        pointerEvents: 'none',
        width: 0,
        height: 0,
      },
      '.rejt-collapsed::after': {
        left: -8,
        top: 8,
        borderTop: '3px solid transparent',
        borderBottom: '3px solid transparent',
        borderLeft: '3px solid rgba(153,153,153,0.6)',
      },
      '.rejt-not-collapsed::after': {
        left: -10,
        top: 10,
        borderTop: '3px solid rgba(153,153,153,0.6)',
        borderLeft: '3px solid transparent',
        borderRight: '3px solid transparent',
      },
      '.rejt-value': {
        display: 'inline-block',
        border: '1px solid transparent',
        borderRadius: 4,
        margin: '1px 0',
        padding: '0 4px',
        cursor: 'text',
        color: e.color.defaultText,
      },
      '.rejt-value-node:hover > .rejt-value': {
        background: e.color.lighter,
        borderColor: e.appBorderColor,
      },
    })),
    Gu = q.button(({theme: e, primary: t}) => ({
      border: 0,
      height: 20,
      margin: 1,
      borderRadius: 4,
      background: t ? e.color.secondary : 'transparent',
      color: t ? e.color.lightest : e.color.dark,
      fontWeight: t ? 'bold' : 'normal',
      cursor: 'pointer',
      order: t ? 'initial' : 9,
    })),
    Nm = q(Be)(({theme: e, icon: t, disabled: r}) => ({
      display: 'inline-block',
      verticalAlign: 'middle',
      width: 15,
      height: 15,
      padding: 3,
      marginLeft: 5,
      cursor: r ? 'not-allowed' : 'pointer',
      color: e.textMutedColor,
      '&:hover': r
        ? {}
        : {color: t === 'subtract' ? e.color.negative : e.color.ancillary},
      'svg + &': {marginLeft: 0},
    })),
    jm = q.input(({theme: e, placeholder: t}) => ({
      outline: 0,
      margin: t ? 1 : '1px 0',
      padding: '3px 4px',
      color: e.color.defaultText,
      background: e.background.app,
      border: `1px solid ${e.appBorderColor}`,
      borderRadius: 4,
      lineHeight: '14px',
      width: t === 'Key' ? 80 : 120,
      '&:focus': {border: `1px solid ${e.color.secondary}`},
    })),
    dR = q(ht)(({theme: e}) => ({
      position: 'absolute',
      zIndex: 2,
      top: 2,
      right: 2,
      height: 21,
      padding: '0 3px',
      background: e.background.bar,
      border: `1px solid ${e.appBorderColor}`,
      borderRadius: 3,
      color: e.textMutedColor,
      fontSize: '9px',
      fontWeight: 'bold',
      textDecoration: 'none',
      span: {marginLeft: 3, marginTop: 1},
    })),
    fR = q(we.Textarea)(({theme: e}) => ({
      flex: 1,
      padding: '7px 6px',
      fontFamily: e.typography.fonts.mono,
      fontSize: '12px',
      lineHeight: '18px',
      '&::placeholder': {fontFamily: e.typography.fonts.base, fontSize: '13px'},
      '&:placeholder-shown': {padding: '7px 10px'},
    })),
    hR = {
      bubbles: !0,
      cancelable: !0,
      key: 'Enter',
      code: 'Enter',
      keyCode: 13,
    },
    gR = (e) => {
      e.currentTarget.dispatchEvent(new cR.KeyboardEvent('keydown', hR))
    },
    mR = (e) => {
      e.currentTarget.select()
    },
    yR = (e) => () => ({
      name: {color: e.color.secondary},
      collapsed: {color: e.color.dark},
      ul: {listStyle: 'none', margin: '0 0 0 1rem', padding: 0},
      li: {outline: 0},
    }),
    Mm = ({name: e, value: t, onChange: r}) => {
      let n = Si(),
        a = tt(() => t && (0, Wm.default)(t), [t]),
        o = a != null,
        [u, i] = ne(!o),
        [s, d] = ne(null),
        y = ge(
          (x) => {
            try {
              x && r(JSON.parse(x)), d(void 0)
            } catch (S) {
              d(S)
            }
          },
          [r]
        ),
        [A, g] = ne(!1),
        h = ge(() => {
          r({}), g(!0)
        }, [g]),
        E = xe(null)
      if (
        (me(() => {
          A && E.current && E.current.select()
        }, [A]),
        !o)
      )
        return m.createElement(we.Button, {id: dr(e), onClick: h}, 'Set object')
      let b = m.createElement(fR, {
        ref: E,
        id: Te(e),
        name: e,
        defaultValue: t === null ? '' : JSON.stringify(t, null, 2),
        onBlur: (x) => y(x.target.value),
        placeholder: 'Edit JSON string...',
        autoFocus: A,
        valid: s ? 'error' : null,
      })
      return m.createElement(
        pR,
        null,
        ['Object', 'Array'].includes(ft(a)) &&
          m.createElement(
            dR,
            {
              href: '#',
              onClick: (x) => {
                x.preventDefault(), i((S) => !S)
              },
            },
            m.createElement(Be, {icon: u ? 'eyeclose' : 'eye'}),
            m.createElement('span', null, 'RAW')
          ),
        u
          ? b
          : m.createElement(uy, {
              data: a,
              rootName: e,
              onFullyUpdate: r,
              getStyle: yR(n),
              cancelButtonElement: m.createElement(
                Gu,
                {type: 'button'},
                'Cancel'
              ),
              editButtonElement: m.createElement(Gu, {type: 'submit'}, 'Save'),
              addButtonElement: m.createElement(
                Gu,
                {type: 'submit', primary: !0},
                'Save'
              ),
              plusMenuElement: m.createElement(Nm, {icon: 'add'}),
              minusMenuElement: m.createElement(Nm, {icon: 'subtract'}),
              inputElement: (x, S, P, N) =>
                N
                  ? m.createElement(jm, {onFocus: mR, onBlur: gR})
                  : m.createElement(jm, null),
              fallback: b,
            })
      )
    },
    bR = q.input(({theme: e, min: t, max: r, value: n}) => ({
      '&': {width: '100%', backgroundColor: 'transparent', appearance: 'none'},
      '&::-webkit-slider-runnable-track': {
        background:
          e.base === 'light'
            ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
                ((n - t) / (r - t)) * 100
              }%, 
            ${$e(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${$e(0.02, e.input.background)} 100%)`
            : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
                ((n - t) / (r - t)) * 100
              }%, 
            ${at(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${at(0.02, e.input.background)} 100%)`,
        boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
        borderRadius: 6,
        width: '100%',
        height: 6,
        cursor: 'pointer',
      },
      '&::-webkit-slider-thumb': {
        marginTop: '-6px',
        width: 16,
        height: 16,
        border: `1px solid ${Le(e.appBorderColor, 0.2)}`,
        borderRadius: '50px',
        boxShadow: `0 1px 3px 0px ${Le(e.appBorderColor, 0.2)}`,
        cursor: 'grab',
        appearance: 'none',
        background: `${e.input.background}`,
        transition: 'all 150ms ease-out',
        '&:hover': {
          background: `${$e(0.05, e.input.background)}`,
          transform: 'scale3d(1.1, 1.1, 1.1) translateY(-1px)',
          transition: 'all 50ms ease-out',
        },
        '&:active': {
          background: `${e.input.background}`,
          transform: 'scale3d(1, 1, 1) translateY(0px)',
          cursor: 'grabbing',
        },
      },
      '&:focus': {
        outline: 'none',
        '&::-webkit-slider-runnable-track': {
          borderColor: Le(e.color.secondary, 0.4),
        },
        '&::-webkit-slider-thumb': {
          borderColor: e.color.secondary,
          boxShadow: `0 0px 5px 0px ${e.color.secondary}`,
        },
      },
      '&::-moz-range-track': {
        background:
          e.base === 'light'
            ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
                ((n - t) / (r - t)) * 100
              }%, 
            ${$e(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${$e(0.02, e.input.background)} 100%)`
            : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
                ((n - t) / (r - t)) * 100
              }%, 
            ${at(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${at(0.02, e.input.background)} 100%)`,
        boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
        borderRadius: 6,
        width: '100%',
        height: 6,
        cursor: 'pointer',
        outline: 'none',
      },
      '&::-moz-range-thumb': {
        width: 16,
        height: 16,
        border: `1px solid ${Le(e.appBorderColor, 0.2)}`,
        borderRadius: '50px',
        boxShadow: `0 1px 3px 0px ${Le(e.appBorderColor, 0.2)}`,
        cursor: 'grab',
        background: `${e.input.background}`,
        transition: 'all 150ms ease-out',
        '&:hover': {
          background: `${$e(0.05, e.input.background)}`,
          transform: 'scale3d(1.1, 1.1, 1.1) translateY(-1px)',
          transition: 'all 50ms ease-out',
        },
        '&:active': {
          background: `${e.input.background}`,
          transform: 'scale3d(1, 1, 1) translateY(0px)',
          cursor: 'grabbing',
        },
      },
      '&::-ms-track': {
        background:
          e.base === 'light'
            ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
                ((n - t) / (r - t)) * 100
              }%, 
            ${$e(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${$e(0.02, e.input.background)} 100%)`
            : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${
                ((n - t) / (r - t)) * 100
              }%, 
            ${at(0.02, e.input.background)} ${((n - t) / (r - t)) * 100}%, 
            ${at(0.02, e.input.background)} 100%)`,
        boxShadow: `${e.appBorderColor} 0 0 0 1px inset`,
        color: 'transparent',
        width: '100%',
        height: '6px',
        cursor: 'pointer',
      },
      '&::-ms-fill-lower': {borderRadius: 6},
      '&::-ms-fill-upper': {borderRadius: 6},
      '&::-ms-thumb': {
        width: 16,
        height: 16,
        background: `${e.input.background}`,
        border: `1px solid ${Le(e.appBorderColor, 0.2)}`,
        borderRadius: 50,
        cursor: 'grab',
        marginTop: 0,
      },
      '@supports (-ms-ime-align:auto)': {'input[type=range]': {margin: '0'}},
    })),
    iy = q.span({
      paddingLeft: 5,
      paddingRight: 5,
      fontSize: 12,
      whiteSpace: 'nowrap',
      fontFeatureSettings: 'tnum',
      fontVariantNumeric: 'tabular-nums',
    }),
    AR = q(iy)(({numberOFDecimalsPlaces: e, max: t}) => ({
      width: `${e + t.toString().length * 2 + 3}ch`,
      textAlign: 'right',
      flexShrink: 0,
    })),
    ER = q.div({display: 'flex', alignItems: 'center', width: '100%'})
  function DR(e) {
    let t = e.toString().match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/)
    return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0
  }
  var vR = ({
      name: e,
      value: t,
      onChange: r,
      min: n = 0,
      max: a = 100,
      step: o = 1,
      onBlur: u,
      onFocus: i,
    }) => {
      let s = (A) => {
          r(k9(A.target.value))
        },
        d = t !== void 0,
        y = tt(() => DR(o), [o])
      return m.createElement(
        ER,
        null,
        m.createElement(iy, null, n),
        m.createElement(bR, {
          id: Te(e),
          type: 'range',
          onChange: s,
          name: e,
          value: t,
          min: n,
          max: a,
          step: o,
          onFocus: i,
          onBlur: u,
        }),
        m.createElement(
          AR,
          {numberOFDecimalsPlaces: y, max: a},
          `${d ? t.toFixed(y) : '--'}`,
          ' / ',
          a
        )
      )
    },
    CR = q.label({display: 'flex'}),
    xR = q.div(({isMaxed: e}) => ({
      marginLeft: '0.75rem',
      paddingTop: '0.35rem',
      color: e ? 'red' : void 0,
    })),
    FR = ({
      name: e,
      value: t,
      onChange: r,
      onFocus: n,
      onBlur: a,
      maxLength: o,
    }) => {
      let u = (A) => {
          r(A.target.value)
        },
        [i, s] = ne(!1),
        d = ge(() => {
          r(''), s(!0)
        }, [s])
      if (t === void 0)
        return m.createElement(we.Button, {id: dr(e), onClick: d}, 'Set string')
      let y = typeof t == 'string'
      return m.createElement(
        CR,
        null,
        m.createElement(we.Textarea, {
          id: Te(e),
          maxLength: o,
          onChange: u,
          size: 'flex',
          placeholder: 'Edit string...',
          autoFocus: i,
          valid: y ? null : 'error',
          name: e,
          value: y ? t : '',
          onFocus: n,
          onBlur: a,
        }),
        o &&
          m.createElement(
            xR,
            {isMaxed: t?.length === o},
            t?.length ?? 0,
            ' / ',
            o
          )
      )
    },
    SR = q(we.Input)({padding: 10})
  function wR(e) {
    e.forEach((t) => {
      t.startsWith('blob:') && URL.revokeObjectURL(t)
    })
  }
  var BR = ({onChange: e, name: t, accept: r = 'image/*', value: n}) => {
      let a = xe(null)
      function o(u) {
        if (!u.target.files) return
        let i = Array.from(u.target.files).map((s) => URL.createObjectURL(s))
        e(i), wR(n)
      }
      return (
        me(() => {
          n == null && a.current && (a.current.value = null)
        }, [n, t]),
        m.createElement(SR, {
          ref: a,
          id: Te(t),
          type: 'file',
          name: t,
          multiple: !0,
          onChange: o,
          accept: r,
          size: 'flex',
        })
      )
    },
    TR = mi(() => Promise.resolve().then(() => (Bm(), wm))),
    _R = (e) =>
      m.createElement(
        gi,
        {fallback: m.createElement('div', null)},
        m.createElement(TR, {...e})
      ),
    OR = {
      array: Mm,
      object: Mm,
      boolean: w9,
      color: _R,
      date: P9,
      number: N9,
      check: ir,
      'inline-check': ir,
      radio: ir,
      'inline-radio': ir,
      select: ir,
      'multi-select': ir,
      range: vR,
      text: FR,
      file: BR,
    },
    qm = () => m.createElement(m.Fragment, null, '-'),
    RR = ({row: e, arg: t, updateArgs: r}) => {
      let {key: n, control: a} = e,
        [o, u] = ne(!1),
        [i, s] = ne({value: t})
      me(() => {
        o || s({value: t})
      }, [o, t])
      let d = ge((E) => (s({value: E}), r({[n]: E}), E), [r, n]),
        y = ge(() => u(!1), []),
        A = ge(() => u(!0), [])
      if (!a || a.disable) return m.createElement(qm, null)
      let g = {
          name: n,
          argType: e,
          value: i.value,
          onChange: d,
          onBlur: y,
          onFocus: A,
        },
        h = OR[a.type] || qm
      return m.createElement(h, {...g, ...a, controlType: a.type})
    },
    PR = q.span({fontWeight: 'bold'}),
    IR = q.span(({theme: e}) => ({
      color: e.color.negative,
      fontFamily: e.typography.fonts.mono,
      cursor: 'help',
    })),
    kR = q.div(({theme: e}) => ({
      '&&': {p: {margin: '0 0 10px 0'}, a: {color: e.color.secondary}},
      code: {
        ...wt({theme: e}),
        fontSize: 12,
        fontFamily: e.typography.fonts.mono,
      },
      '& code': {margin: 0, display: 'inline-block'},
      '& pre > code': {whiteSpace: 'pre-wrap'},
    })),
    NR = q.div(({theme: e, hasDescription: t}) => ({
      color:
        e.base === 'light'
          ? pe(0.1, e.color.defaultText)
          : pe(0.2, e.color.defaultText),
      marginTop: t ? 4 : 0,
    })),
    jR = q.div(({theme: e, hasDescription: t}) => ({
      color:
        e.base === 'light'
          ? pe(0.1, e.color.defaultText)
          : pe(0.2, e.color.defaultText),
      marginTop: t ? 12 : 0,
      marginBottom: 12,
    })),
    MR = q.td(({theme: e, expandable: t}) => ({
      paddingLeft: t ? '40px !important' : '20px !important',
    })),
    la = (e) => {
      let {
          row: t,
          updateArgs: r,
          compact: n,
          expandable: a,
          initialExpandedArgs: o,
        } = e,
        {name: u, description: i} = t,
        s = t.table || {},
        d = s.type || t.type,
        y = s.defaultValue || t.defaultValue,
        A = t.type?.required,
        g = i != null && i !== ''
      return m.createElement(
        'tr',
        null,
        m.createElement(
          MR,
          {expandable: a},
          m.createElement(PR, null, u),
          A ? m.createElement(IR, {title: 'Required'}, '*') : null
        ),
        n
          ? null
          : m.createElement(
              'td',
              null,
              g && m.createElement(kR, null, m.createElement(Uo, null, i)),
              s.jsDocTags != null
                ? m.createElement(
                    m.Fragment,
                    null,
                    m.createElement(
                      jR,
                      {hasDescription: g},
                      m.createElement(Hu, {value: d, initialExpandedArgs: o})
                    ),
                    m.createElement(g9, {tags: s.jsDocTags})
                  )
                : m.createElement(
                    NR,
                    {hasDescription: g},
                    m.createElement(Hu, {value: d, initialExpandedArgs: o})
                  )
            ),
        n
          ? null
          : m.createElement(
              'td',
              null,
              m.createElement(Hu, {value: y, initialExpandedArgs: o})
            ),
        r ? m.createElement('td', null, m.createElement(RR, {...e})) : null
      )
    },
    qR = q(Be)(({theme: e}) => ({
      marginRight: 8,
      marginLeft: -10,
      marginTop: -2,
      height: 12,
      width: 12,
      color:
        e.base === 'light'
          ? pe(0.25, e.color.defaultText)
          : pe(0.3, e.color.defaultText),
      border: 'none',
      display: 'inline-block',
    })),
    LR = q.span(({theme: e}) => ({
      display: 'flex',
      lineHeight: '20px',
      alignItems: 'center',
    })),
    $R = q.td(({theme: e}) => ({
      position: 'relative',
      letterSpacing: '0.35em',
      textTransform: 'uppercase',
      fontWeight: e.typography.weight.bold,
      fontSize: e.typography.size.s1 - 1,
      color:
        e.base === 'light'
          ? pe(0.4, e.color.defaultText)
          : pe(0.6, e.color.defaultText),
      background: `${e.background.app} !important`,
      '& ~ td': {background: `${e.background.app} !important`},
    })),
    UR = q.td(({theme: e}) => ({
      position: 'relative',
      fontWeight: e.typography.weight.bold,
      fontSize: e.typography.size.s2 - 1,
      background: e.background.app,
    })),
    zR = q.td(() => ({position: 'relative'})),
    HR = q.tr(({theme: e}) => ({
      '&:hover > td': {
        backgroundColor: `${at(0.005, e.background.app)} !important`,
        boxShadow: `${e.color.mediumlight} 0 - 1px 0 0 inset`,
        cursor: 'row-resize',
      },
    })),
    Lm = q.button(() => ({
      background: 'none',
      border: 'none',
      padding: '0',
      font: 'inherit',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      height: '100%',
      width: '100%',
      color: 'transparent',
      cursor: 'row-resize !important',
    })),
    Wu = ({
      level: e = 'section',
      label: t,
      children: r,
      initialExpanded: n = !0,
      colSpan: a = 3,
    }) => {
      let [o, u] = ne(n),
        i = e === 'subsection' ? UR : $R,
        s = r?.length || 0,
        d = e === 'subsection' ? `${s} item${s !== 1 ? 's' : ''}` : '',
        y = o ? 'arrowdown' : 'arrowright',
        A = `${o ? 'Hide' : 'Show'} ${e === 'subsection' ? s : t} item${
          s !== 1 ? 's' : ''
        }`
      return m.createElement(
        m.Fragment,
        null,
        m.createElement(
          HR,
          {title: A},
          m.createElement(
            i,
            {colSpan: 1},
            m.createElement(Lm, {onClick: (g) => u(!o), tabIndex: 0}, A),
            m.createElement(LR, null, m.createElement(qR, {icon: y}), t)
          ),
          m.createElement(
            zR,
            {colSpan: a - 1},
            m.createElement(
              Lm,
              {onClick: (g) => u(!o), tabIndex: -1, style: {outline: 'none'}},
              A
            ),
            o ? null : d
          )
        ),
        o ? r : null
      )
    },
    GR = q.table(
      ({theme: e, compact: t, inAddonPanel: r}) => ({
        '&&': {
          borderSpacing: 0,
          color: e.color.defaultText,
          'td, th': {
            padding: 0,
            border: 'none',
            verticalAlign: 'top',
            textOverflow: 'ellipsis',
          },
          fontSize: e.typography.size.s2 - 1,
          lineHeight: '20px',
          textAlign: 'left',
          width: '100%',
          marginTop: r ? 0 : 25,
          marginBottom: r ? 0 : 40,
          'thead th:first-of-type, td:first-of-type': {width: '25%'},
          'th:first-of-type, td:first-of-type': {paddingLeft: 20},
          'th:nth-of-type(2), td:nth-of-type(2)': {
            ...(t ? null : {width: '35%'}),
          },
          'td:nth-of-type(3)': {...(t ? null : {width: '15%'})},
          'th:last-of-type, td:last-of-type': {
            paddingRight: 20,
            ...(t ? null : {width: '25%'}),
          },
          th: {
            color:
              e.base === 'light'
                ? pe(0.25, e.color.defaultText)
                : pe(0.45, e.color.defaultText),
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 15,
            paddingRight: 15,
          },
          td: {
            paddingTop: '10px',
            paddingBottom: '10px',
            '&:not(:first-of-type)': {paddingLeft: 15, paddingRight: 15},
            '&:last-of-type': {paddingRight: 20},
          },
          marginLeft: r ? 0 : 1,
          marginRight: r ? 0 : 1,
          tbody: {
            ...(r
              ? null
              : {
                  filter:
                    e.base === 'light'
                      ? 'drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.10))'
                      : 'drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.20))',
                }),
            '> tr > *': {
              background: e.background.content,
              borderTop: `1px solid ${e.appBorderColor}`,
            },
            ...(r
              ? null
              : {
                  '> tr:first-of-type > *': {
                    borderBlockStart: `1px solid ${e.appBorderColor}`,
                  },
                  '> tr:last-of-type > *': {
                    borderBlockEnd: `1px solid ${e.appBorderColor}`,
                  },
                  '> tr > *:first-of-type': {
                    borderInlineStart: `1px solid ${e.appBorderColor}`,
                  },
                  '> tr > *:last-of-type': {
                    borderInlineEnd: `1px solid ${e.appBorderColor}`,
                  },
                  '> tr:first-of-type > td:first-of-type': {
                    borderTopLeftRadius: e.appBorderRadius,
                  },
                  '> tr:first-of-type > td:last-of-type': {
                    borderTopRightRadius: e.appBorderRadius,
                  },
                  '> tr:last-of-type > td:first-of-type': {
                    borderBottomLeftRadius: e.appBorderRadius,
                  },
                  '> tr:last-of-type > td:last-of-type': {
                    borderBottomRightRadius: e.appBorderRadius,
                  },
                }),
          },
        },
      }),
      ({isLoading: e, theme: t}) =>
        e
          ? {
              'th span, td span, td button': {
                display: 'inline',
                backgroundColor: t.appBorderColor,
                animation: `${t.animation.glow} 1.5s ease-in-out infinite`,
                color: 'transparent',
                boxShadow: 'none',
                borderRadius: 0,
              },
            }
          : {}
    ),
    WR = q(ht)(({theme: e}) => ({
      color: e.barTextColor,
      margin: '-4px -12px -4px 0',
    })),
    VR = q.span({display: 'flex', justifyContent: 'space-between'}),
    KR = {
      alpha: (e, t) => e.name.localeCompare(t.name),
      requiredFirst: (e, t) =>
        +!!t.type?.required - +!!e.type?.required ||
        e.name.localeCompare(t.name),
      none: void 0,
    },
    Vu = (e) => ({
      key: e,
      name: 'propertyName',
      description: 'This is a short description',
      control: {type: 'text'},
      table: {
        type: {summary: 'summary'},
        defaultValue: {summary: 'defaultValue'},
      },
    }),
    YR = {rows: {row1: Vu('row1'), row2: Vu('row2'), row3: Vu('row3')}},
    XR = (e, t) => {
      let r = {ungrouped: [], ungroupedSubsections: {}, sections: {}}
      if (!e) return r
      Object.entries(e).forEach(([o, u]) => {
        let {category: i, subcategory: s} = u?.table || {}
        if (i) {
          let d = r.sections[i] || {ungrouped: [], subsections: {}}
          if (!s) d.ungrouped.push({key: o, ...u})
          else {
            let y = d.subsections[s] || []
            y.push({key: o, ...u}), (d.subsections[s] = y)
          }
          r.sections[i] = d
        } else if (s) {
          let d = r.ungroupedSubsections[s] || []
          d.push({key: o, ...u}), (r.ungroupedSubsections[s] = d)
        } else r.ungrouped.push({key: o, ...u})
      })
      let n = KR[t],
        a = (o) =>
          n
            ? Object.keys(o).reduce((u, i) => ({...u, [i]: o[i].sort(n)}), {})
            : o
      return {
        ungrouped: r.ungrouped.sort(n),
        ungroupedSubsections: a(r.ungroupedSubsections),
        sections: Object.keys(r.sections).reduce(
          (o, u) => ({
            ...o,
            [u]: {
              ungrouped: r.sections[u].ungrouped.sort(n),
              subsections: a(r.sections[u].subsections),
            },
          }),
          {}
        ),
      }
    },
    JR = (e, t, r) => {
      try {
        return Po(e, t, r)
      } catch (n) {
        return xn.warn(n.message), !1
      }
    },
    Ft = (e) => {
      if ('error' in e)
        return m.createElement(
          Ku,
          null,
          e.error,
          '\xA0',
          m.createElement(
            cr,
            {
              href: 'http://storybook.js.org/docs/',
              target: '_blank',
              withArrow: !0,
            },
            'Read the docs'
          )
        )
      let {
          updateArgs: t,
          resetArgs: r,
          compact: n,
          inAddonPanel: a,
          initialExpandedArgs: o,
          sort: u = 'none',
        } = e,
        i = 'isLoading' in e,
        {rows: s, args: d, globals: y} = 'rows' in e ? e : YR,
        A = XR(
          (0, zm.default)(
            s,
            (b) => !b?.table?.disable && JR(b, d || {}, y || {})
          ),
          u
        )
      if (
        A.ungrouped.length === 0 &&
        Object.entries(A.sections).length === 0 &&
        Object.entries(A.ungroupedSubsections).length === 0
      )
        return m.createElement(
          Ku,
          null,
          'No inputs found for this component.\xA0',
          m.createElement(
            cr,
            {
              href: 'http://storybook.js.org/docs/',
              target: '_blank',
              withArrow: !0,
            },
            'Read the docs'
          )
        )
      let g = 1
      t && (g += 1), n || (g += 2)
      let h = Object.keys(A.sections).length > 0,
        E = {updateArgs: t, compact: n, inAddonPanel: a, initialExpandedArgs: o}
      return m.createElement(
        Ta,
        null,
        m.createElement(
          GR,
          {
            'aria-hidden': i,
            compact: n,
            inAddonPanel: a,
            isLoading: i,
            className: 'docblock-argstable sb-unstyled',
          },
          m.createElement(
            'thead',
            {className: 'docblock-argstable-head'},
            m.createElement(
              'tr',
              null,
              m.createElement(
                'th',
                null,
                m.createElement('span', null, 'Name')
              ),
              n
                ? null
                : m.createElement(
                    'th',
                    null,
                    m.createElement('span', null, 'Description')
                  ),
              n
                ? null
                : m.createElement(
                    'th',
                    null,
                    m.createElement('span', null, 'Default')
                  ),
              t
                ? m.createElement(
                    'th',
                    null,
                    m.createElement(
                      VR,
                      null,
                      'Control',
                      ' ',
                      !i &&
                        r &&
                        m.createElement(
                          WR,
                          {onClick: () => r(), title: 'Reset controls'},
                          m.createElement(Be, {icon: 'undo', 'aria-hidden': !0})
                        )
                    )
                  )
                : null
            )
          ),
          m.createElement(
            'tbody',
            {className: 'docblock-argstable-body'},
            A.ungrouped.map((b) =>
              m.createElement(la, {
                key: b.key,
                row: b,
                arg: d && d[b.key],
                ...E,
              })
            ),
            Object.entries(A.ungroupedSubsections).map(([b, x]) =>
              m.createElement(
                Wu,
                {key: b, label: b, level: 'subsection', colSpan: g},
                x.map((S) =>
                  m.createElement(la, {
                    key: S.key,
                    row: S,
                    arg: d && d[S.key],
                    expandable: h,
                    ...E,
                  })
                )
              )
            ),
            Object.entries(A.sections).map(([b, x]) =>
              m.createElement(
                Wu,
                {key: b, label: b, level: 'section', colSpan: g},
                x.ungrouped.map((S) =>
                  m.createElement(la, {
                    key: S.key,
                    row: S,
                    arg: d && d[S.key],
                    ...E,
                  })
                ),
                Object.entries(x.subsections).map(([S, P]) =>
                  m.createElement(
                    Wu,
                    {key: S, label: S, level: 'subsection', colSpan: g},
                    P.map((N) =>
                      m.createElement(la, {
                        key: N.key,
                        row: N,
                        arg: d && d[N.key],
                        expandable: h,
                        ...E,
                      })
                    )
                  )
                )
              )
            )
          )
        )
      )
    },
    sy = ({tabs: e, ...t}) => {
      let r = Object.entries(e)
      return r.length === 1
        ? m.createElement(Ft, {...r[0][1], ...t})
        : m.createElement(
            _a,
            null,
            r.map((n) => {
              let [a, o] = n,
                u = `prop_table_div_${a}`
              return m.createElement(
                'div',
                {key: u, id: u, title: a},
                ({active: i}) =>
                  i
                    ? m.createElement(Ft, {key: `prop_table_${a}`, ...o, ...t})
                    : null
              )
            })
          )
    },
    QR = q.div(({theme: e}) => ({
      background: e.background.warning,
      color: e.color.darkest,
      padding: '10px 15px',
      lineHeight: '20px',
      boxShadow: `${e.appBorderColor} 0 -1px 0 0 inset`,
    })),
    ly = () =>
      m.createElement(
        QR,
        null,
        'This story is not configured to handle controls.',
        ' ',
        m.createElement(
          cr,
          {
            href: 'https://storybook.js.org/docs/react/essentials/controls',
            target: '_blank',
            cancel: !1,
            withArrow: !0,
          },
          'Learn how to add controls'
        )
      ),
    bte = q.div(({theme: e}) => ({
      marginRight: 30,
      fontSize: `${e.typography.size.s1}px`,
      color:
        e.base === 'light'
          ? pe(0.4, e.color.defaultText)
          : pe(0.6, e.color.defaultText),
    })),
    Ate = q.div({
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    }),
    Ete = q.div({
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'baseline',
      '&:not(:last-child)': {marginBottom: '1rem'},
    }),
    Dte = q.div(Bt, ({theme: e}) => ({
      ...pa(e),
      margin: '25px 0 40px',
      padding: '30px 20px',
    }))
  var vte = q.div(({theme: e}) => ({
      fontWeight: e.typography.weight.bold,
      color: e.color.defaultText,
    })),
    Cte = q.div(({theme: e}) => ({
      color:
        e.base === 'light'
          ? pe(0.2, e.color.defaultText)
          : pe(0.6, e.color.defaultText),
    })),
    xte = q.div({flex: '0 0 30%', lineHeight: '20px', marginTop: 5}),
    Fte = q.div(({theme: e}) => ({
      flex: 1,
      textAlign: 'center',
      fontFamily: e.typography.fonts.mono,
      fontSize: e.typography.size.s1,
      lineHeight: 1,
      overflow: 'hidden',
      color:
        e.base === 'light'
          ? pe(0.4, e.color.defaultText)
          : pe(0.6, e.color.defaultText),
      '> div': {
        display: 'inline-block',
        overflow: 'hidden',
        maxWidth: '100%',
        textOverflow: 'ellipsis',
      },
      span: {display: 'block', marginTop: 2},
    })),
    Ste = q.div({display: 'flex', flexDirection: 'row'}),
    wte = q.div(({background: e}) => ({
      position: 'relative',
      flex: 1,
      '&::before': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: e,
        content: '""',
      },
    })),
    Bte = q.div(({theme: e}) => ({
      ...pa(e),
      display: 'flex',
      flexDirection: 'row',
      height: 50,
      marginBottom: 5,
      overflow: 'hidden',
      backgroundColor: 'white',
      backgroundImage:
        'repeating-linear-gradient(-45deg, #ccc, #ccc 1px, #fff 1px, #fff 16px)',
      backgroundClip: 'padding-box',
    })),
    Tte = q.div({
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      position: 'relative',
      marginBottom: 30,
    }),
    _te = q.div({flex: 1, display: 'flex', flexDirection: 'row'}),
    Ote = q.div({display: 'flex', alignItems: 'flex-start'}),
    Rte = q.div({flex: '0 0 30%'}),
    Pte = q.div({flex: 1}),
    Ite = q.div(({theme: e}) => ({
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: 20,
      fontWeight: e.typography.weight.bold,
      color:
        e.base === 'light'
          ? pe(0.4, e.color.defaultText)
          : pe(0.6, e.color.defaultText),
    })),
    kte = q.div(({theme: e}) => ({
      fontSize: e.typography.size.s2,
      lineHeight: '20px',
      display: 'flex',
      flexDirection: 'column',
    }))
  var Nte = q.div(({theme: e}) => ({
      fontFamily: e.typography.fonts.base,
      fontSize: e.typography.size.s2,
      color: e.color.defaultText,
      marginLeft: 10,
      lineHeight: 1.2,
    })),
    jte = q.div(({theme: e}) => ({
      ...pa(e),
      overflow: 'hidden',
      height: 40,
      width: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none',
      '> img, > svg': {width: 20, height: 20},
    })),
    Mte = q.div({
      display: 'inline-flex',
      flexDirection: 'row',
      alignItems: 'center',
      flex: '0 1 calc(20% - 10px)',
      minWidth: 120,
      margin: '0px 10px 30px 0',
    }),
    qte = q.div({display: 'flex', flexFlow: 'row wrap'})
  var ZR = (e) => `anchor--${e}`,
    eP = ({storyId: e, children: t}) =>
      m.createElement('div', {id: ZR(e), className: 'sb-anchor'}, t)
  oe &&
    oe.__DOCS_CONTEXT__ === void 0 &&
    ((oe.__DOCS_CONTEXT__ = lr(null)),
    (oe.__DOCS_CONTEXT__.displayName = 'DocsContext'))
  var Ke = oe ? oe.__DOCS_CONTEXT__ : lr(null),
    ii = (e, t) => Ne(Ke).resolveOf(e, t)
  var si = '^',
    tP = (e) =>
      e
        .split('-')
        .map((t) => t.charAt(0).toUpperCase() + t.slice(1))
        .join(''),
    cy = (e) => {
      if (e)
        return typeof e == 'string'
          ? e.includes('-')
            ? tP(e)
            : e
          : e.__docgenInfo && e.__docgenInfo.displayName
          ? e.__docgenInfo.displayName
          : e.name
    }
  function py(e, t) {
    let r = li([e], t)
    return r && r[0]
  }
  function li(e, t) {
    let [r, n] = ne({})
    return (
      me(() => {
        Promise.all(
          e.map(async (a) => {
            let o = await t.loadStory(a)
            n((u) => (u[a] === o ? u : {...u, [a]: o}))
          })
        )
      }),
      e.map((a) => {
        if (r[a]) return r[a]
        try {
          return t.storyById(a)
        } catch {
          return null
        }
      })
    )
  }
  var rP = (e, t) => {
      let r = t.getStoryContext(t.storyById()),
        [n, a] = ne(r.args)
      me(() => {
        let i = (s) => {
          s.storyId === e && a(s.args)
        }
        return t.channel.on(zt, i), () => t.channel.off(zt, i)
      }, [e])
      let o = ge((i) => t.channel.emit(Rr, {storyId: e, updatedArgs: i}), [e]),
        u = ge((i) => t.channel.emit(Or, {storyId: e, argNames: i}), [e])
      return [n, o, u]
    },
    nP = (e) => {
      let t = e.getStoryContext(e.storyById()),
        [r, n] = ne(t.globals)
      return (
        me(() => {
          let a = (o) => {
            n(o.globals)
          }
          return e.channel.on(_n, a), () => e.channel.off(_n, a)
        }, []),
        [r]
      )
    },
    dy = (e, t, r, n) => {
      let {extractArgTypes: a} = t.docs || {}
      if (!a)
        throw new Error(
          'Args unsupported. See Args documentation for your framework.'
        )
      let o = a(e)
      return (o = Nr(o, r, n)), o
    },
    $m = (e) => e && [si].includes(e),
    aP = (e = {}, t) => {
      let {of: r} = e,
        {story: n} = e
      if ($m(r) || $m(n)) return t || null
      if (!r) throw new Error('No component found.')
      return r
    },
    ei = (e, t, r, n, a, o) => ({
      ...e,
      ...(0, Vm.default)(t, (u) => ({rows: dy(u, r, n, a), sort: o})),
    }),
    oP = (e) => {
      let t = Ne(Ke),
        {
          story: r,
          component: n,
          subcomponents: a,
          showComponent: o,
          include: u,
          exclude: i,
          sort: s,
        } = e
      try {
        let d
        switch (r) {
          case si: {
            d = t.storyById().id
            break
          }
          default:
            d = t.storyIdByName(r)
        }
        let y = py(d, t),
          [A, g, h] = rP(d, t),
          [E] = nP(t)
        if (!y)
          return m.createElement(Ft, {
            isLoading: !0,
            updateArgs: g,
            resetArgs: h,
          })
        let b = Nr(y.argTypes, u, i),
          x = cy(n) || 'Story',
          S = {
            [x]: {rows: b, args: A, globals: E, updateArgs: g, resetArgs: h},
          },
          P = b && Object.values(b).find((N) => !!N?.control)
        if (
          (P || ((g = null), (h = null), (S = {})),
          n && (!P || o) && (S = ei(S, {[x]: n}, y.parameters, u, i)),
          a)
        ) {
          if (Array.isArray(a))
            throw new Error(
              'Unexpected subcomponents array. Expected an object whose keys are tab labels and whose values are components.'
            )
          S = ei(S, a, y.parameters, u, i)
        }
        return m.createElement(sy, {tabs: S, sort: s})
      } catch (d) {
        return m.createElement(Ft, {error: d.message})
      }
    },
    Um = (e) => {
      let {components: t, include: r, exclude: n, sort: a, parameters: o} = e,
        u = ei({}, t, o, r, n)
      return m.createElement(sy, {tabs: u, sort: a})
    },
    uP = (e) => {
      ye(ve`The ArgsTable doc block is deprecated. Instead use the ArgTypes doc block for static tables or the Controls doc block for tables with controls.
    
  Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#argstable-block
  `)
      let t = Ne(Ke),
        r,
        n,
        a
      try {
        ;({parameters: r, component: n, subcomponents: a} = t.storyById())
      } catch {
        let {of: h} = e
        if ('of' in e && h === void 0)
          throw new Error(
            'Unexpected `of={undefined}`, did you mistype a CSF file reference?'
          )
        ;({
          projectAnnotations: {parameters: r},
        } = t.resolveOf(h, ['component']))
      }
      let {include: o, exclude: u, components: i, sort: s} = e,
        {story: d} = e,
        y = s || r.controls?.sort,
        A = aP(e, n)
      if (d)
        return m.createElement(oP, {
          ...e,
          component: A,
          subcomponents: a,
          sort: y,
        })
      if (!i && !a) {
        let h
        try {
          h = {rows: dy(A, r, o, u)}
        } catch (E) {
          h = {error: E.message}
        }
        return m.createElement(Ft, {...h, sort: y})
      }
      if (i)
        return m.createElement(Um, {
          ...e,
          components: i,
          sort: y,
          parameters: r,
        })
      let g = cy(A)
      return m.createElement(Um, {
        ...e,
        components: {[g]: A, ...a},
        sort: y,
        parameters: r,
      })
    }
  uP.defaultProps = {of: si}
  function iP(e) {
    return Tu(e)
  }
  var sP = lr({sources: {}}),
    lP = '--unknown--'
  var cP = (e, t) => {
    let r = e ? t.getStoryContext(e) : {args: {}},
      {id: n} = e || {id: 'none'},
      [a, o] = ne(r.args)
    me(() => {
      let s = (d) => {
        d.storyId === n && o(d.args)
      }
      return t.channel.on(zt, s), () => t.channel.off(zt, s)
    }, [n, t.channel])
    let u = ge(
        (s) => t.channel.emit(Rr, {storyId: n, updatedArgs: s}),
        [n, t.channel]
      ),
      i = ge(
        (s) => t.channel.emit(Or, {storyId: n, argNames: s}),
        [n, t.channel]
      )
    return e && [a, u, i]
  }
  function pP(e, t) {
    return e.map((r) => cP(r, t))
  }
  var dP = ((e) => (
      (e.OPEN = 'open'), (e.CLOSED = 'closed'), (e.NONE = 'none'), e
    ))(dP || {}),
    fP = (e) => {
      let t = e.map((r) => r.parameters.docs?.source?.state).filter(Boolean)
      return t.length === 0 ? 'closed' : t[0]
    },
    hP = (e, t, r) => {
      let {sources: n} = r,
        a = n?.[e]
      return a?.[iP(t)] || a?.[lP] || {code: ''}
    },
    gP = ({
      snippet: e,
      storyContext: t,
      typeFromProps: r,
      transformFromProps: n,
    }) => {
      let {__isArgsStory: a} = t.parameters,
        o = t.parameters.docs?.source || {},
        u = r || o.type || Wr.AUTO
      if (o.code !== void 0) return o.code
      let i =
        u === Wr.DYNAMIC || (u === Wr.AUTO && e && a)
          ? e
          : o.originalSource || ''
      return (
        o.transformSource &&
          ye(ve`The \`transformSource\` parameter at \`parameters.docs.source.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `),
        t.parameters.docs?.transformSource &&
          ye(ve`The \`transformSource\` parameter at \`parameters.docs.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `),
        t.parameters.jsx?.transformSource &&
          ye(ve`The \`transformSource\` parameter at \`parameters.jsx.transformSource\` is deprecated, please use \`parameters.docs.source.transform\` instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#source-block
  `),
        (
          n ??
          o.transform ??
          o.transformSource ??
          t.parameters.docs?.transformSource ??
          t.parameters.jsx?.transformSource
        )?.(i, t) || i
      )
    },
    fy = (e, t, r) => {
      let n = e.ids || (e.id ? [e.id] : []),
        a = li(n, t),
        o = a,
        {of: u} = e
      if ('of' in e && u === void 0)
        throw new Error(
          'Unexpected `of={undefined}`, did you mistype a CSF file reference?'
        )
      if (u) o = [t.resolveOf(u, ['story']).story]
      else if (o.length === 0)
        try {
          o = [t.storyById()]
        } catch {}
      let i = pP(o, t)
      if (!a.every(Boolean))
        return {error: 'Oh no! The source is not available.', state: 'none'}
      let s = o[0]?.parameters?.docs?.source || {},
        {code: d} = e,
        y = e.format ?? s.format,
        A = e.language ?? s.language ?? 'jsx',
        g = e.dark ?? s.dark ?? !1
      d ||
        (d = o.map((E, b) => {
          if (!E) return ''
          let [x] = i[b] || [],
            S = t.getStoryContext(E),
            P = e.__forceInitialArgs ? S.initialArgs : x,
            N = hP(E.id, P, r)
          return (
            b === 0 &&
              (y = N.format ?? E.parameters.docs?.source?.format ?? !1),
            gP({
              snippet: N.code,
              storyContext: {...S, args: P},
              typeFromProps: e.type,
              transformFromProps: e.transform,
            })
          )
        }).join(`

`))
      let h = fP(o)
      return d
        ? {code: d, format: y, language: A, dark: g, state: h}
        : {error: 'Oh no! The source is not available.', state: h}
    }
  var hy = (e, t) => {
      let {id: r, of: n, meta: a, story: o} = e
      if ('of' in e && n === void 0)
        throw new Error(
          'Unexpected `of={undefined}`, did you mistype a CSF file reference?'
        )
      if (r)
        return (
          ye(ve`Referencing stories by \`id\` is deprecated, please use \`of\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),
          r
        )
      let {name: u} = e
      return u
        ? (ye(ve`Referencing stories by \`name\` is deprecated, please use \`of\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),
          t.storyIdByName(u))
        : (o &&
            ye(ve`The \`story\` prop is deprecated, please export your stories from CSF files and reference them with \`of={}\`.

      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),
          a && t.referenceMeta(a, !1),
          t.resolveOf(n || o || 'story', ['story']).story.id)
    },
    mP = (e, t, r) => {
      let {parameters: n = {}} = t || {},
        {docs: a = {}} = n,
        o = a.story || {}
      if (a.disable) return null
      let {inlineStories: u, iframeHeight: i} = a
      typeof u < 'u' &&
        ye(ve`The \`docs.inlineStories\` parameter is deprecated, use \`docs.story.inline\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#autodocs-changes'
    `)
      let s = e.inline ?? o.inline ?? u ?? !1
      if (
        (typeof i < 'u' &&
          ye(ve`The \`docs.iframeHeight\` parameter is deprecated, use \`docs.story.iframeHeight\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#autodocs-changes'
    `),
        s)
      ) {
        let y = e.height ?? o.height,
          A = e.autoplay ?? o.autoplay ?? !1
        return {
          story: t,
          inline: !0,
          height: y,
          autoplay: A,
          forceInitialArgs: !!e.__forceInitialArgs,
          primary: !!e.__primary,
          renderStoryToElement: r.renderStoryToElement,
        }
      }
      let d = e.height ?? o.height ?? o.iframeHeight ?? i ?? '100px'
      return {story: t, inline: !1, height: d, primary: !!e.__primary}
    },
    yP = (e = {__forceInitialArgs: !1, __primary: !1}) => {
      let t = Ne(Ke),
        r = hy(e, t),
        n = py(r, t)
      if (!n) return m.createElement(ai, null)
      let a = mP(e, n, t)
      return a ? m.createElement(o9, {...a}) : null
    },
    bP = (
      {withSource: e, mdxSource: t, children: r, layout: n, ...a},
      o,
      u
    ) => {
      let i = Jr.toArray(r)
          .filter((g) => g.props && (g.props.id || g.props.name || g.props.of))
          .map((g) => hy(g.props, o)),
        s = li(i, o),
        d = s.some((g) => !g),
        y = fy(
          {...(t ? {code: decodeURI(t)} : {ids: i}), ...(a.of && {of: a.of})},
          o,
          u
        )
      if (e === 'none') return {isLoading: d, previewProps: a}
      let A = n
      return (
        Jr.forEach(r, (g) => {
          A || (A = g?.props?.parameters?.layout)
        }),
        s.forEach((g) => {
          A ||
            !g ||
            (A = g?.parameters.layout ?? g.parameters.docs?.canvas?.layout)
        }),
        {
          isLoading: d,
          previewProps: {
            ...a,
            layout: A ?? 'padded',
            withSource: y,
            isExpanded: (e || y.state) === 'open',
          },
        }
      )
    },
    AP = (e) => {
      let t = Ne(Ke),
        r = Ne(sP),
        {children: n, of: a, source: o} = e
      if ('of' in e && a === void 0)
        throw new Error(
          'Unexpected `of={undefined}`, did you mistype a CSF file reference?'
        )
      let {isLoading: u, previewProps: i} = bP(e, t, r),
        s,
        d,
        y
      try {
        ;({story: s} = ii(a || 'story', ['story']))
      } catch (x) {
        n || (y = x)
      }
      try {
        d = fy({...o, ...(a && {of: a})}, t, r)
      } catch (x) {
        n || (y = x)
      }
      if (y) throw y
      if (
        (e.withSource &&
          ye(ve`Setting source state with \`withSource\` is deprecated, please use \`sourceState\` with 'hidden', 'shown' or 'none' instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),
        e.mdxSource &&
          ye(ve`Setting source code with \`mdxSource\` is deprecated, please use source={{code: '...'}} instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),
        (e.isColumn !== void 0 || e.columns !== void 0) &&
          ye(ve`\`isColumn\` and \`columns\` props are deprecated as the Canvas block now only supports showing a single story. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),
        n)
      )
        return (
          ye(ve`Passing children to Canvas is deprecated, please use the \`of\` prop instead to reference a story. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
  `),
          u ? m.createElement(f9, null) : m.createElement(Xu, {...i}, n)
        )
      let A =
          e.layout ??
          s.parameters.layout ??
          s.parameters.docs?.canvas?.layout ??
          'padded',
        g = e.withToolbar ?? s.parameters.docs?.canvas?.withToolbar ?? !1,
        h = e.additionalActions ?? s.parameters.docs?.canvas?.additionalActions,
        E = e.sourceState ?? s.parameters.docs?.canvas?.sourceState ?? 'hidden',
        b = e.className ?? s.parameters.docs?.canvas?.className
      return m.createElement(
        Xu,
        {
          withSource: E === 'none' ? void 0 : d,
          isExpanded: E === 'shown',
          withToolbar: g,
          additionalActions: h,
          className: b,
          layout: A,
        },
        m.createElement(yP, {of: a || s.moduleExport, meta: e.meta, ...e.story})
      )
    }
  var {document: gy} = oe
  var EP = ({className: e, children: t, ...r}) => {
    if (typeof e != 'string' && (typeof t != 'string' || !t.match(/[\n\r]/g)))
      return m.createElement(va, null, t)
    let n = e && e.split('-')
    return m.createElement(ri, {
      language: (n && n[1]) || 'plaintext',
      format: !1,
      code: t,
      ...r,
    })
  }
  function ci(e, t) {
    e.channel.emit(Wf, t)
  }
  var ti = Ia.a,
    DP = ({hash: e, children: t}) => {
      let r = Ne(Ke)
      return m.createElement(
        ti,
        {
          href: e,
          target: '_self',
          onClick: (n) => {
            let a = e.substring(1)
            gy.getElementById(a) && ci(r, e)
          },
        },
        t
      )
    },
    vP = (e) => {
      let {href: t, target: r, children: n, ...a} = e,
        o = Ne(Ke)
      if (t) {
        if (t.startsWith('#')) return m.createElement(DP, {hash: t}, n)
        if (r !== '_blank' && !t.startsWith('https://'))
          return m.createElement(
            ti,
            {
              href: t,
              onClick: (u) => {
                u.button === 0 &&
                  !u.altKey &&
                  !u.ctrlKey &&
                  !u.metaKey &&
                  !u.shiftKey &&
                  (u.preventDefault(),
                  ci(o, u.currentTarget.getAttribute('href')))
              },
              target: r,
              ...a,
            },
            n
          )
      }
      return m.createElement(ti, {...e})
    },
    my = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    CP = my.reduce(
      (e, t) => ({
        ...e,
        [t]: q(t)({
          '& svg': {position: 'relative', top: '-0.1em', visibility: 'hidden'},
          '&:hover svg': {visibility: 'visible'},
        }),
      }),
      {}
    ),
    xP = q.a(() => ({
      float: 'left',
      lineHeight: 'inherit',
      paddingRight: '10px',
      marginLeft: '-24px',
      color: 'inherit',
    })),
    FP = ({as: e, id: t, children: r, ...n}) => {
      let a = Ne(Ke),
        o = CP[e],
        u = `#${t}`
      return m.createElement(
        o,
        {id: t, ...n},
        m.createElement(
          xP,
          {
            'aria-hidden': 'true',
            href: u,
            tabIndex: -1,
            target: '_self',
            onClick: (i) => {
              gy.getElementById(t) && ci(a, u)
            },
          },
          m.createElement(Be, {icon: 'link'})
        ),
        r
      )
    },
    pi = (e) => {
      let {as: t, id: r, children: n, ...a} = e
      if (r) return m.createElement(FP, {as: t, id: r, ...a}, n)
      let o = t,
        {as: u, ...i} = e
      return m.createElement(o, {...Na(i, t)})
    },
    SP = my.reduce(
      (e, t) => ({...e, [t]: (r) => m.createElement(pi, {as: t, ...r})}),
      {}
    ),
    wP = (e) => {
      if (!e.children) return null
      if (typeof e.children != 'string')
        throw new Error(ve`The Markdown block only accepts children as a single string, but children were of type: '${typeof e.children}'
        This is often caused by not wrapping the child in a template string.
        
        This is invalid:
        <Markdown>
          # Some heading
          A paragraph
        </Markdown>

        Instead do:
        <Markdown>
        {\`
          # Some heading
          A paragraph
        \`}
        </Markdown>
      `)
      return m.createElement(Uo, {
        ...e,
        options: {
          forceBlock: !0,
          overrides: {code: EP, a: vP, ...SP, ...e?.options?.overrides},
          ...e?.options,
        },
      })
    },
    BP = ((e) => (
      (e.INFO = 'info'),
      (e.NOTES = 'notes'),
      (e.DOCGEN = 'docgen'),
      (e.AUTO = 'auto'),
      e
    ))(BP || {}),
    ca =
      'https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#description-block-parametersnotes-and-parametersinfo',
    TP = (e) => e && (typeof e == 'string' ? e : ta(e.markdown) || ta(e.text)),
    _P = (e) => e && (typeof e == 'string' ? e : ta(e.text)),
    OP = (e) => null,
    RP = (e) => {
      switch (e.type) {
        case 'story':
          return e.story.parameters.docs?.description?.story || null
        case 'meta': {
          let {parameters: t, component: r} = e.preparedMeta
          return (
            t.docs?.description?.component ||
            t.docs?.extractComponentDescription?.(r, {
              component: r,
              parameters: t,
            }) ||
            null
          )
        }
        case 'component': {
          let {
            component: t,
            projectAnnotations: {parameters: r},
          } = e
          return (
            r.docs?.extractComponentDescription?.(t, {
              component: t,
              parameters: r,
            }) || null
          )
        }
        default:
          throw new Error(
            `Unrecognized module type resolved from 'useOf', got: ${e.type}`
          )
      }
    },
    PP = ({type: e, markdown: t, children: r}, {storyById: n}) => {
      let {component: a, parameters: o} = n()
      if (r || t) return r || t
      let {notes: u, info: i, docs: s} = o
      ;(u || i) &&
        ye(
          `Using 'parameters.notes' or 'parameters.info' properties to describe stories is deprecated. See ${ca}`
        )
      let {extractComponentDescription: d = OP, description: y} = s || {},
        A = y?.component
      if (A) return A
      switch (e) {
        case 'info':
          return _P(i)
        case 'notes':
          return TP(u)
        case 'docgen':
        case 'auto':
        default:
          return d(a, {component: a, ...o})
      }
    },
    IP = (e) => {
      let {of: t, type: r, markdown: n, children: a} = e
      if ('of' in e && t === void 0)
        throw new Error(
          'Unexpected `of={undefined}`, did you mistype a CSF file reference?'
        )
      let o = Ne(Ke),
        u = ii(t || 'meta'),
        i
      return (
        r || n || a ? (i = PP(e, o)) : (i = RP(u)),
        r &&
          ye(`Manually specifying description type is deprecated. See ${ca}`),
        n &&
          ye(
            `The 'markdown' prop on the Description block is deprecated. See ${ca}`
          ),
        a &&
          ye(
            `The 'children' prop on the Description block is deprecated. See ${ca}`
          ),
        i ? m.createElement(wP, null, i) : null
      )
    },
    {document: Lte, window: $te} = oe
  var kP = ({children: e, disableAnchor: t}) => {
      if (t || typeof e != 'string') return m.createElement(Sa, null, e)
      let r = e.toLowerCase().replace(/[^a-z0-9]/gi, '-')
      return m.createElement(pi, {as: 'h3', id: r}, e)
    },
    NP = ({
      of: e,
      expanded: t = !0,
      withToolbar: r = !1,
      __forceInitialArgs: n = !1,
      __primary: a = !1,
    }) => {
      let {story: o} = ii(e || 'story', ['story']),
        u = o.parameters.docs?.canvas?.withToolbar ?? r
      return m.createElement(
        eP,
        {storyId: o.id},
        t &&
          m.createElement(
            m.Fragment,
            null,
            m.createElement(kP, null, o.name),
            m.createElement(IP, {of: e})
          ),
        m.createElement(AP, {
          of: e,
          withToolbar: u,
          story: {__forceInitialArgs: n, __primary: a},
          source: {__forceInitialArgs: n},
        })
      )
    }
  var jP = ({children: e, disableAnchor: t, ...r}) => {
      if (t || typeof e != 'string') return m.createElement(Fa, null, e)
      let n = e.toLowerCase().replace(/[^a-z0-9]/gi, '-')
      return m.createElement(pi, {as: 'h2', id: n, ...r}, e)
    },
    MP = q(jP)(({theme: e}) => ({
      fontSize: `${e.typography.size.s2 - 1}px`,
      fontWeight: e.typography.weight.bold,
      lineHeight: '16px',
      letterSpacing: '0.35em',
      textTransform: 'uppercase',
      color: e.textMutedColor,
      border: 0,
      marginBottom: '12px',
      '&:first-of-type': {marginTop: '56px'},
    })),
    qP = ({title: e, includePrimary: t = !0}) => {
      let {componentStories: r} = Ne(Ke),
        n = r().filter((a) => !a.parameters?.docs?.disable)
      return (
        t || (n = n.slice(1)),
        !n || n.length === 0
          ? null
          : m.createElement(
              m.Fragment,
              null,
              m.createElement(MP, null, e),
              n.map(
                (a) =>
                  a &&
                  m.createElement(NP, {
                    key: a.id,
                    of: a.moduleExport,
                    expanded: !0,
                    __forceInitialArgs: !0,
                  })
              )
            )
      )
    }
  qP.defaultProps = {title: 'Stories'}
  var LP = () => {
    let [e, t, r] = Ai(),
      [n] = Ei(),
      a = ba(),
      o = Aa('__isArgsStory', !1),
      {
        expanded: u,
        sort: i,
        presetColors: s,
        hideNoControlsWarning: d = !1,
      } = Aa(ga, {}),
      {path: y} = Di(),
      A = Object.values(a).some((E) => E?.control),
      g = !(A && o) && !d,
      h = Object.entries(a).reduce(
        (E, [b, x]) => (
          x?.control?.type !== 'color' || x?.control?.presetColors
            ? (E[b] = x)
            : (E[b] = {...x, control: {...x.control, presetColors: s}}),
          E
        ),
        {}
      )
    return m.createElement(
      m.Fragment,
      null,
      g && m.createElement(ly, null),
      m.createElement(Ft, {
        key: y,
        compact: !u && A,
        rows: h,
        args: e,
        globals: n,
        updateArgs: t,
        resetArgs: r,
        inAddonPanel: !0,
        sort: i,
      })
    )
  }
  function $P() {
    let e = ba(),
      t = Object.values(e).filter(
        (n) => n?.control && !n?.table?.disable
      ).length,
      r = t === 0 ? '' : ` (${t})`
    return m.createElement(m.Fragment, null, 'Controls', r)
  }
  ya.register(ha, (e) => {
    ya.addPanel(ha, {
      title: m.createElement($P, null),
      id: 'controls',
      type: bi.PANEL,
      paramKey: ga,
      render: ({key: t, active: r}) =>
        !r || !e.getCurrentStoryData()
          ? null
          : m.createElement(Da, {key: t, active: r}, m.createElement(LP, null)),
    })
  })
} catch (e) {
  console.error(
    '[Storybook] One of your manager-entries failed: ' + import.meta.url,
    e
  )
}
//# sourceMappingURL=manager-bundle.js.map
