function a(a, o, e, i, r, s, u) {
    try {
        var t = a[s](u)
          , n = t.value
    } catch (a) {
        return void e(a)
    }
    t.done ? o(n) : Promise.resolve(n).then(i, r)
}
function o(o) {
    return function() {
        var e = this
          , i = arguments;
        return new Promise((function(r, s) {
            var u = o.apply(e, i);
            function t(o) {
                a(u, r, s, t, n, "next", o)
            }
            function n(o) {
                a(u, r, s, t, n, "throw", o)
            }
            t(void 0)
        }
        ))
    }
}
function e(a, o, e) {
    return o in a ? Object.defineProperty(a, o, {
        value: e,
        enumerable: 1,
        configurable: 1,
        writable: 1
    }) : a[o] = e,
    a
}
function i(a, o) {
    return function(a) {
        if (Array.isArray(a))
            return a
    }(a) || function(a, o) {
        var e = null == a ? null : "undefined" != typeof Symbol && a[Symbol.iterator] || a["@@iterator"];
        if (null != e) {
            var i, r, s = [], u = 1, t = 0;
            try {
                for (e = e.call(a); !(u = (i = e.next()).done) && (s.push(i.value),
                !o || s.length !== o); u = 1)
                    ;
            } catch (a) {
                t = 1,
                r = a
            } finally {
                try {
                    u || null == e.return || e.return()
                } finally {
                    if (t)
                        throw r
                }
            }
            return s
        }
    }(a, o) || r(a, o) || function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}
function r(a, o) {
    if (a) {
        if ("string" == typeof a)
            return s(a, o);
        var e = {}.toString.call(a).slice(8, -1);
        return "Object" === e && a.constructor && (e = a.constructor.name),
        "Map" === e || "Set" === e ? Array.from(a) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? s(a, o) : void 0
    }
}
function s(a, o) {
    (null == o || o > a.length) && (o = a.length);
    for (var e = 0, i = Array(o); o > e; e++)
        i[e] = a[e];
    return i
}
function u(a, o) {
    var e = "undefined" != typeof Symbol && a[Symbol.iterator] || a["@@iterator"];
    if (!e) {
        if (Array.isArray(a) || (e = r(a)) || o && a && "number" == typeof a.length) {
            e && (a = e);
            var i = 0
              , s = function() {};
            return {
                s,
                n() {
                    return i < a.length ? {
                        done: 0,
                        value: a[i++]
                    } : {
                        done: 1
                    }
                },
                e(a) {
                    throw a
                },
                f: s
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var u, t = 1, n = 0;
    return {
        s() {
            e = e.call(a)
        },
        n() {
            var a = e.next();
            return t = a.done,
            a
        },
        e(a) {
            n = 1,
            u = a
        },
        f() {
            try {
                t || null == e.return || e.return()
            } finally {
                if (n)
                    throw u
            }
        }
    }
}
var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
!function() {
    var a = function(a) {
        var o, e = Object.prototype, i = e.hasOwnProperty, r = "function" == typeof Symbol ? Symbol : {}, s = r.iterator || "@@iterator", u = r.asyncIterator || "@@asyncIterator", t = r.toStringTag || "@@toStringTag";
        function n(a, o, e) {
            return Object.defineProperty(a, o, {
                value: e,
                enumerable: 1,
                configurable: 1,
                writable: 1
            }),
            a[o]
        }
        try {
            n({}, "")
        } catch (a) {
            n = function(a, o, e) {
                return a[o] = e
            }
        }
        function l(a, o, e, i) {
            var r = o && o.prototype instanceof f ? o : f
              , s = Object.create(r.prototype)
              , u = new O(i || []);
            return s._invoke = function(a, o, e) {
                var i = m;
                return function(r, s) {
                    if (i === d)
                        throw Error("Generator is already running");
                    if (i === b) {
                        if ("throw" === r)
                            throw s;
                        return T()
                    }
                    for (e.method = r,
                    e.arg = s; ; ) {
                        var u = e.delegate;
                        if (u) {
                            var t = E(u, e);
                            if (t) {
                                if (t === g)
                                    continue;
                                return t
                            }
                        }
                        if ("next" === e.method)
                            e.sent = e._sent = e.arg;
                        else if ("throw" === e.method) {
                            if (i === m)
                                throw i = b,
                                e.arg;
                            e.dispatchException(e.arg)
                        } else
                            "return" === e.method && e.abrupt("return", e.arg);
                        i = d;
                        var n = c(a, o, e);
                        if ("normal" === n.type) {
                            if (i = e.done ? b : p,
                            n.arg === g)
                                continue;
                            return {
                                value: n.arg,
                                done: e.done
                            }
                        }
                        "throw" === n.type && (i = b,
                        e.method = "throw",
                        e.arg = n.arg)
                    }
                }
            }(a, e, u),
            s
        }
        function c(a, o, e) {
            try {
                return {
                    type: "normal",
                    arg: a.call(o, e)
                }
            } catch (a) {
                return {
                    type: "throw",
                    arg: a
                }
            }
        }
        a.wrap = l;
        var m = "suspendedStart"
          , p = "suspendedYield"
          , d = "executing"
          , b = "completed"
          , g = {};
        function f() {}
        function v() {}
        function h() {}
        var j = {};
        n(j, s, (function() {
            return this
        }
        ));
        var x = Object.getPrototypeOf
          , z = x && x(x(L([])));
        z && z !== e && i.call(z, s) && (j = z);
        var y = h.prototype = f.prototype = Object.create(j);
        function w(a) {
            ["next", "throw", "return"].forEach((function(o) {
                n(a, o, (function(a) {
                    return this._invoke(o, a)
                }
                ))
            }
            ))
        }
        function q(a, o) {
            function e(r, s, u, t) {
                var n = c(a[r], a, s);
                if ("throw" !== n.type) {
                    var l = n.arg
                      , m = l.value;
                    return m && "object" == typeof m && i.call(m, "__await") ? o.resolve(m.__await).then((function(a) {
                        e("next", a, u, t)
                    }
                    ), (function(a) {
                        e("throw", a, u, t)
                    }
                    )) : o.resolve(m).then((function(a) {
                        l.value = a,
                        u(l)
                    }
                    ), (function(a) {
                        return e("throw", a, u, t)
                    }
                    ))
                }
                t(n.arg)
            }
            var r;
            this._invoke = function(a, i) {
                function s() {
                    return new o((function(o, r) {
                        e(a, i, o, r)
                    }
                    ))
                }
                return r = r ? r.then(s, s) : s()
            }
        }
        function E(a, e) {
            var i = a.iterator[e.method];
            if (i === o) {
                if (e.delegate = null,
                "throw" === e.method) {
                    if (a.iterator.return && (e.method = "return",
                    e.arg = o,
                    E(a, e),
                    "throw" === e.method))
                        return g;
                    e.method = "throw",
                    e.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return g
            }
            var r = c(i, a.iterator, e.arg);
            if ("throw" === r.type)
                return e.method = "throw",
                e.arg = r.arg,
                e.delegate = null,
                g;
            var s = r.arg;
            return s ? s.done ? (e[a.resultName] = s.value,
            e.next = a.nextLoc,
            "return" !== e.method && (e.method = "next",
            e.arg = o),
            e.delegate = null,
            g) : s : (e.method = "throw",
            e.arg = new TypeError("iterator result is not an object"),
            e.delegate = null,
            g)
        }
        function S(a) {
            var o = {
                tryLoc: a[0]
            };
            1 in a && (o.catchLoc = a[1]),
            2 in a && (o.finallyLoc = a[2],
            o.afterLoc = a[3]),
            this.tryEntries.push(o)
        }
        function k(a) {
            var o = a.completion || {};
            o.type = "normal",
            delete o.arg,
            a.completion = o
        }
        function O(a) {
            this.tryEntries = [{
                tryLoc: "root"
            }],
            a.forEach(S, this),
            this.reset(1)
        }
        function L(a) {
            if (a) {
                var e = a[s];
                if (e)
                    return e.call(a);
                if ("function" == typeof a.next)
                    return a;
                if (!isNaN(a.length)) {
                    var r = -1
                      , u = function e() {
                        for (; ++r < a.length; )
                            if (i.call(a, r))
                                return e.value = a[r],
                                e.done = 0,
                                e;
                        return e.value = o,
                        e.done = 1,
                        e
                    };
                    return u.next = u
                }
            }
            return {
                next: T
            }
        }
        function T() {
            return {
                value: o,
                done: 1
            }
        }
        return v.prototype = h,
        n(y, "constructor", h),
        n(h, "constructor", v),
        v.displayName = n(h, t, "GeneratorFunction"),
        a.isGeneratorFunction = function(a) {
            var o = "function" == typeof a && a.constructor;
            return o ? o === v || "GeneratorFunction" === (o.displayName || o.name) : 0
        }
        ,
        a.mark = function(a) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(a, h) : (a.__proto__ = h,
            n(a, t, "GeneratorFunction")),
            a.prototype = Object.create(y),
            a
        }
        ,
        a.awrap = function(a) {
            return {
                __await: a
            }
        }
        ,
        w(q.prototype),
        n(q.prototype, u, (function() {
            return this
        }
        )),
        a.AsyncIterator = q,
        a.async = function(o, e, i, r, s) {
            void 0 === s && (s = Promise);
            var u = new q(l(o, e, i, r),s);
            return a.isGeneratorFunction(e) ? u : u.next().then((function(a) {
                return a.done ? a.value : u.next()
            }
            ))
        }
        ,
        w(y),
        n(y, t, "Generator"),
        n(y, s, (function() {
            return this
        }
        )),
        n(y, "toString", (function() {
            return "[object Generator]"
        }
        )),
        a.keys = function(a) {
            var o = [];
            for (var e in a)
                o.push(e);
            return o.reverse(),
            function e() {
                for (; o.length; ) {
                    var i = o.pop();
                    if (i in a)
                        return e.value = i,
                        e.done = 0,
                        e
                }
                return e.done = 1,
                e
            }
        }
        ,
        a.values = L,
        O.prototype = {
            constructor: O,
            reset(a) {
                if (this.prev = 0,
                this.next = 0,
                this.sent = this._sent = o,
                this.done = 0,
                this.delegate = null,
                this.method = "next",
                this.arg = o,
                this.tryEntries.forEach(k),
                !a)
                    for (var e in this)
                        "t" === e.charAt(0) && i.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = o)
            },
            stop() {
                this.done = 1;
                var a = this.tryEntries[0].completion;
                if ("throw" === a.type)
                    throw a.arg;
                return this.rval
            },
            dispatchException(a) {
                if (this.done)
                    throw a;
                var e = this;
                function r(i, r) {
                    return t.type = "throw",
                    t.arg = a,
                    e.next = i,
                    r && (e.method = "next",
                    e.arg = o),
                    !!r
                }
                for (var s = this.tryEntries.length - 1; s >= 0; --s) {
                    var u = this.tryEntries[s]
                      , t = u.completion;
                    if ("root" === u.tryLoc)
                        return r("end");
                    if (u.tryLoc <= this.prev) {
                        var n = i.call(u, "catchLoc")
                          , l = i.call(u, "finallyLoc");
                        if (n && l) {
                            if (this.prev < u.catchLoc)
                                return r(u.catchLoc, 1);
                            if (this.prev < u.finallyLoc)
                                return r(u.finallyLoc)
                        } else if (n) {
                            if (this.prev < u.catchLoc)
                                return r(u.catchLoc, 1)
                        } else {
                            if (!l)
                                throw Error("try statement without catch or finally");
                            if (this.prev < u.finallyLoc)
                                return r(u.finallyLoc)
                        }
                    }
                }
            },
            abrupt(a, o) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var r = this.tryEntries[e];
                    if (r.tryLoc <= this.prev && i.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                        var s = r;
                        break
                    }
                }
                !s || "break" !== a && "continue" !== a || s.tryLoc > o || o > s.finallyLoc || (s = null);
                var u = s ? s.completion : {};
                return u.type = a,
                u.arg = o,
                s ? (this.method = "next",
                this.next = s.finallyLoc,
                g) : this.complete(u)
            },
            complete(a, o) {
                if ("throw" === a.type)
                    throw a.arg;
                return "break" === a.type || "continue" === a.type ? this.next = a.arg : "return" === a.type ? (this.rval = this.arg = a.arg,
                this.method = "return",
                this.next = "end") : "normal" === a.type && o && (this.next = o),
                g
            },
            finish(a) {
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                    var e = this.tryEntries[o];
                    if (e.finallyLoc === a)
                        return this.complete(e.completion, e.afterLoc),
                        k(e),
                        g
                }
            },
            catch(a) {
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                    var e = this.tryEntries[o];
                    if (e.tryLoc === a) {
                        var i = e.completion;
                        if ("throw" === i.type) {
                            var r = i.arg;
                            k(e)
                        }
                        return r
                    }
                }
                throw Error("illegal catch attempt")
            },
            delegateYield(a, e, i) {
                return this.delegate = {
                    iterator: L(a),
                    resultName: e,
                    nextLoc: i
                },
                "next" === this.method && (this.arg = o),
                g
            }
        },
        a
    }({});
    try {
        regeneratorRuntime = a
    } catch (o) {
        "object" == typeof globalThis ? globalThis.regeneratorRuntime = a : Function("n", "regeneratorRuntime=n")(a)
    }
}();
var n = function(a) {
    return a && a.Math == Math && a
}
  , l = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof t && t) || function() {
    return this
}() || Function("", "return this")()
  , c = {}
  , m = function(a) {
    try {
        return !!a()
    } catch (a) {
        return 1
    }
}
  , p = !m((function() {
    return 7 != Object.defineProperty({}, 1, {
        get() {
            return 7
        }
    })[1]
}
))
  , d = !m((function() {
    var a = function() {}
    .bind();
    return "function" != typeof a || a.hasOwnProperty("prototype")
}
))
  , b = function() {}
.call
  , g = d ? b.bind(b) : function() {
    return b.apply(b, arguments)
}
  , f = {}
  , v = {}.propertyIsEnumerable
  , h = Object.getOwnPropertyDescriptor
  , j = h && !v.call({
    1: 2
}, 1);
f.f = j ? function(a) {
    var o = h(this, a);
    return !!o && o.enumerable
}
: v;
var x, z, y = function(a, o) {
    return {
        enumerable: !(1 & a),
        configurable: !(2 & a),
        writable: !(4 & a),
        value: o
    }
}, w = d, q = Function.prototype, E = q.bind, S = q.call, k = w && E.bind(S, S), O = w ? function(a) {
    return a && k(a)
}
: function(a) {
    return a && function() {
        return S.apply(a, arguments)
    }
}
, L = O, T = L({}.toString), I = L("".slice), A = function(a) {
    return I(T(a), 8, -1)
}, P = O, R = m, _ = A, N = l.Object, C = P("".split), M = R((function() {
    return !N("z").propertyIsEnumerable(0)
}
)) ? function(a) {
    return "String" == _(a) ? C(a, "") : N(a)
}
: N, D = l.TypeError, F = function(a) {
    if (null == a)
        throw D("Can't call method on " + a);
    return a
}, B = M, G = F, $ = function(a) {
    return B(G(a))
}, U = function(a) {
    return "function" == typeof a
}, V = U, W = function(a) {
    return "object" == typeof a ? null !== a : V(a)
}, Y = l, H = U, J = function(a) {
    return H(a) ? a : void 0
}, K = function(a, o) {
    return 2 > arguments.length ? J(Y[a]) : Y[a] && Y[a][o]
}, X = O({}.isPrototypeOf), Q = K("navigator", "userAgent") || "", Z = l, aa = Q, oa = Z.process, ea = Z.Deno, ia = oa && oa.versions || ea && ea.version, ra = ia && ia.v8;
ra && (z = (x = ra.split("."))[0] > 0 && 4 > x[0] ? 1 : +(x[0] + x[1])),
!z && aa && ((x = aa.match(/Edge\/(\d+)/)) && 74 > x[1] || (x = aa.match(/Chrome\/(\d+)/)) && (z = +x[1]));
var sa = z
  , ua = sa
  , ta = !!Object.getOwnPropertySymbols && !m((function() {
    var a = Symbol();
    return !(a + "") || !(Object(a)instanceof Symbol) || !Symbol.sham && ua && 41 > ua
}
))
  , na = ta && !Symbol.sham && "symbol" == typeof Symbol.iterator
  , la = K
  , ca = U
  , ma = X
  , pa = na
  , da = l.Object
  , ba = pa ? function(a) {
    return "symbol" == typeof a
}
: function(a) {
    var o = la("Symbol");
    return ca(o) && ma(o.prototype, da(a))
}
  , ga = l.String
  , fa = function(a) {
    try {
        return ga(a)
    } catch (a) {
        return "Object"
    }
}
  , va = U
  , ha = fa
  , ja = l.TypeError
  , xa = function(a) {
    if (va(a))
        return a;
    throw ja(ha(a) + " is not a function")
}
  , za = xa
  , ya = function(a, o) {
    var e = a[o];
    return null == e ? void 0 : za(e)
}
  , wa = g
  , qa = U
  , Ea = W
  , Sa = l.TypeError
  , ka = {
    exports: {}
}
  , Oa = l
  , La = Object.defineProperty
  , Ta = function(a, o) {
    try {
        La(Oa, a, {
            value: o,
            configurable: 1,
            writable: 1
        })
    } catch (e) {
        Oa[a] = o
    }
    return o
}
  , Ia = Ta
  , Aa = l["__core-js_shared__"] || Ia("__core-js_shared__", {})
  , Pa = Aa;
(ka.exports = function(a, o) {
    return Pa[a] || (Pa[a] = void 0 !== o ? o : {})
}
)("versions", []).push({
    version: "3.20.3",
    mode: "global",
    copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.20.3/LICENSE",
    source: "https://github.com/zloirock/core-js"
});
var Ra = F
  , _a = l.Object
  , Na = function(a) {
    return _a(Ra(a))
}
  , Ca = Na
  , Ma = O({}.hasOwnProperty)
  , Da = Object.hasOwn || function(a, o) {
    return Ma(Ca(a), o)
}
  , Fa = O
  , Ba = 0
  , Ga = Math.random()
  , $a = Fa(1..toString)
  , Ua = function(a) {
    return "Symbol(" + (void 0 === a ? "" : a) + ")_" + $a(++Ba + Ga, 36)
}
  , Va = l
  , Wa = ka.exports
  , Ya = Da
  , Ha = Ua
  , Ja = ta
  , Ka = na
  , Xa = Wa("wks")
  , Qa = Va.Symbol
  , Za = Qa && Qa.for
  , ao = Ka ? Qa : Qa && Qa.withoutSetter || Ha
  , oo = function(a) {
    if (!Ya(Xa, a) || !Ja && "string" != typeof Xa[a]) {
        var o = "Symbol." + a;
        Ja && Ya(Qa, a) ? Xa[a] = Qa[a] : Xa[a] = Ka && Za ? Za(o) : ao(o)
    }
    return Xa[a]
}
  , eo = g
  , io = W
  , ro = ba
  , so = ya
  , uo = oo
  , to = l.TypeError
  , no = uo("toPrimitive")
  , lo = function(a, o) {
    if (!io(a) || ro(a))
        return a;
    var e, i = so(a, no);
    if (i) {
        if (void 0 === o && (o = "default"),
        e = eo(i, a, o),
        !io(e) || ro(e))
            return e;
        throw to("Can't convert object to primitive value")
    }
    return void 0 === o && (o = "number"),
    function(a, o) {
        var e, i;
        if ("string" === o && qa(e = a.toString) && !Ea(i = wa(e, a)))
            return i;
        if (qa(e = a.valueOf) && !Ea(i = wa(e, a)))
            return i;
        if ("string" !== o && qa(e = a.toString) && !Ea(i = wa(e, a)))
            return i;
        throw Sa("Can't convert object to primitive value")
    }(a, o)
}
  , co = lo
  , mo = ba
  , po = function(a) {
    var o = co(a, "string");
    return mo(o) ? o : o + ""
}
  , bo = W
  , go = l.document
  , fo = bo(go) && bo(go.createElement)
  , vo = function(a) {
    return fo ? go.createElement(a) : {}
}
  , ho = vo
  , jo = !p && !m((function() {
    return 7 != Object.defineProperty(ho("div"), "a", {
        get() {
            return 7
        }
    }).a
}
))
  , xo = p
  , zo = g
  , yo = f
  , wo = y
  , qo = $
  , Eo = po
  , So = Da
  , ko = jo
  , Oo = Object.getOwnPropertyDescriptor;
c.f = xo ? Oo : function(a, o) {
    if (a = qo(a),
    o = Eo(o),
    ko)
        try {
            return Oo(a, o)
        } catch (a) {}
    if (So(a, o))
        return wo(!zo(yo.f, a, o), a[o])
}
;
var Lo = {}
  , To = p && m((function() {
    return 42 != Object.defineProperty((function() {}
    ), "prototype", {
        value: 42,
        writable: 0
    }).prototype
}
))
  , Io = l
  , Ao = W
  , Po = Io.String
  , Ro = Io.TypeError
  , _o = function(a) {
    if (Ao(a))
        return a;
    throw Ro(Po(a) + " is not an object")
}
  , No = p
  , Co = jo
  , Mo = To
  , Do = _o
  , Fo = po
  , Bo = l.TypeError
  , Go = Object.defineProperty
  , $o = Object.getOwnPropertyDescriptor;
Lo.f = No ? Mo ? function(a, o, e) {
    if (Do(a),
    o = Fo(o),
    Do(e),
    "function" == typeof a && "prototype" === o && "value"in e && "writable"in e && !e.writable) {
        var i = $o(a, o);
        i && i.writable && (a[o] = e.value,
        e = {
            configurable: "configurable"in e ? e.configurable : i.configurable,
            enumerable: "enumerable"in e ? e.enumerable : i.enumerable,
            writable: 0
        })
    }
    return Go(a, o, e)
}
: Go : function(a, o, e) {
    if (Do(a),
    o = Fo(o),
    Do(e),
    Co)
        try {
            return Go(a, o, e)
        } catch (a) {}
    if ("get"in e || "set"in e)
        throw Bo("Accessors not supported");
    return "value"in e && (a[o] = e.value),
    a
}
;
var Uo = Lo
  , Vo = y
  , Wo = p ? function(a, o, e) {
    return Uo.f(a, o, Vo(1, e))
}
: function(a, o, e) {
    return a[o] = e,
    a
}
  , Yo = {
    exports: {}
}
  , Ho = U
  , Jo = Aa
  , Ko = O(Function.toString);
Ho(Jo.inspectSource) || (Jo.inspectSource = function(a) {
    return Ko(a)
}
);
var Xo, Qo, Zo, ae = Jo.inspectSource, oe = U, ee = ae, ie = l.WeakMap, re = oe(ie) && /native code/.test(ee(ie)), se = ka.exports, ue = Ua, te = se("keys"), ne = function(a) {
    return te[a] || (te[a] = ue(a))
}, le = {}, ce = re, me = l, pe = O, de = W, be = Wo, ge = Da, fe = Aa, ve = ne, he = le, je = me.TypeError, xe = me.WeakMap;
if (ce || fe.state) {
    var ze = fe.state || (fe.state = new xe)
      , ye = pe(ze.get)
      , we = pe(ze.has)
      , qe = pe(ze.set);
    Xo = function(a, o) {
        if (we(ze, a))
            throw new je("Object already initialized");
        return o.facade = a,
        qe(ze, a, o),
        o
    }
    ,
    Qo = function(a) {
        return ye(ze, a) || {}
    }
    ,
    Zo = function(a) {
        return we(ze, a)
    }
} else {
    var Ee = ve("state");
    he[Ee] = 1,
    Xo = function(a, o) {
        if (ge(a, Ee))
            throw new je("Object already initialized");
        return o.facade = a,
        be(a, Ee, o),
        o
    }
    ,
    Qo = function(a) {
        return ge(a, Ee) ? a[Ee] : {}
    }
    ,
    Zo = function(a) {
        return ge(a, Ee)
    }
}
var Se = {
    set: Xo,
    get: Qo,
    has: Zo,
    enforce(a) {
        return Zo(a) ? Qo(a) : Xo(a, {})
    },
    getterFor(a) {
        return function(o) {
            var e;
            if (!de(o) || (e = Qo(o)).type !== a)
                throw je("Incompatible receiver, " + a + " required");
            return e
        }
    }
}
  , ke = p
  , Oe = Function.prototype
  , Le = ke && Object.getOwnPropertyDescriptor
  , Te = Da(Oe, "name")
  , Ie = {
    EXISTS: Te,
    PROPER: Te && 0,
    CONFIGURABLE: Te && (!ke || ke && Le(Oe, "name").configurable)
}
  , Ae = l
  , Pe = U
  , Re = Da
  , _e = Wo
  , Ne = Ta
  , Ce = ae
  , Me = Ie.CONFIGURABLE
  , De = Se.get
  , Fe = Se.enforce
  , Be = (String + "").split("String");
(Yo.exports = function(a, o, e, i) {
    var r, s = i ? !!i.unsafe : 0, u = i ? !!i.enumerable : 0, t = i ? !!i.noTargetGet : 0, n = i && void 0 !== i.name ? i.name : o;
    Pe(e) && ("Symbol(" === (n + "").slice(0, 7) && (n = "[" + (n + "").replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
    (!Re(e, "name") || Me && e.name !== n) && _e(e, "name", n),
    (r = Fe(e)).source || (r.source = Be.join("string" == typeof n ? n : ""))),
    a !== Ae ? (s ? !t && a[o] && (u = 1) : delete a[o],
    u ? a[o] = e : _e(a, o, e)) : u ? a[o] = e : Ne(o, e)
}
)(Function.prototype, "toString", (function() {
    return Pe(this) && De(this).source || Ce(this)
}
));
var Ge = {}
  , $e = Math.ceil
  , Ue = Math.floor
  , Ve = function(a) {
    var o = +a;
    return o != o || 0 === o ? 0 : (o > 0 ? Ue : $e)(o)
}
  , We = Ve
  , Ye = Math.max
  , He = Math.min
  , Je = function(a, o) {
    var e = We(a);
    return 0 > e ? Ye(e + o, 0) : He(e, o)
}
  , Ke = Ve
  , Xe = Math.min
  , Qe = function(a) {
    return a > 0 ? Xe(Ke(a), 9007199254740991) : 0
}
  , Ze = Qe
  , ai = function(a) {
    return Ze(a.length)
}
  , oi = $
  , ei = Je
  , ii = ai
  , ri = function(a) {
    return function(o, e, i) {
        var r, s = oi(o), u = ii(s), t = ei(i, u);
        if (a && e != e) {
            for (; u > t; )
                if ((r = s[t++]) != r)
                    return 1
        } else
            for (; u > t; t++)
                if ((a || t in s) && s[t] === e)
                    return a || t || 0;
        return !a && -1
    }
}
  , si = {
    includes: ri(1),
    indexOf: ri(0)
}
  , ui = Da
  , ti = $
  , ni = si.indexOf
  , li = le
  , ci = O([].push)
  , mi = function(a, o) {
    var e, i = ti(a), r = 0, s = [];
    for (e in i)
        !ui(li, e) && ui(i, e) && ci(s, e);
    for (; o.length > r; )
        ui(i, e = o[r++]) && (~ni(s, e) || ci(s, e));
    return s
}
  , pi = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
  , di = mi
  , bi = pi.concat("length", "prototype");
Ge.f = Object.getOwnPropertyNames || function(a) {
    return di(a, bi)
}
;
var gi = {};
gi.f = Object.getOwnPropertySymbols;
var fi = K
  , vi = Ge
  , hi = gi
  , ji = _o
  , xi = O([].concat)
  , zi = fi("Reflect", "ownKeys") || function(a) {
    var o = vi.f(ji(a))
      , e = hi.f;
    return e ? xi(o, e(a)) : o
}
  , yi = Da
  , wi = zi
  , qi = c
  , Ei = Lo
  , Si = function(a, o, e) {
    for (var i = wi(o), r = Ei.f, s = qi.f, u = 0; u < i.length; u++) {
        var t = i[u];
        yi(a, t) || e && yi(e, t) || r(a, t, s(o, t))
    }
}
  , ki = m
  , Oi = U
  , Li = function(a, o) {
    var e = Ii[Ti(a)];
    return e == Pi ? 1 : e == Ai ? 0 : Oi(o) ? ki(o) : !!o
}
  , Ti = Li.normalize = function(a) {
    return (a + "").replace(/#|\.prototype\./, ".").toLowerCase()
}
  , Ii = Li.data = {}
  , Ai = Li.NATIVE = "N"
  , Pi = Li.POLYFILL = "P"
  , Ri = Li
  , _i = l
  , Ni = c.f
  , Ci = Wo
  , Mi = Yo.exports
  , Di = Ta
  , Fi = Si
  , Bi = Ri
  , Gi = function(a, o) {
    var e, i, r, s, u, t = a.target, n = a.global, l = a.stat;
    if (e = n ? _i : l ? _i[t] || Di(t, {}) : (_i[t] || {}).prototype)
        for (i in o) {
            if (s = o[i],
            r = a.noTargetGet ? (u = Ni(e, i)) && u.value : e[i],
            !Bi(n ? i : t + (l ? "." : "#") + i, a.forced) && void 0 !== r) {
                if (typeof s == typeof r)
                    continue;
                Fi(s, r)
            }
            (a.sham || r && r.sham) && Ci(s, "sham", 1),
            Mi(e, i, s, a)
        }
}
  , $i = {};
$i[oo("toStringTag")] = "z";
var Ui = $i + "" == "[object z]"
  , Vi = l
  , Wi = Ui
  , Yi = U
  , Hi = A
  , Ji = oo("toStringTag")
  , Ki = Vi.Object
  , Xi = "Arguments" == Hi(function() {
    return arguments
}())
  , Qi = Wi ? Hi : function(a) {
    var o, e, i;
    return void 0 === a ? "Undefined" : null === a ? "Null" : "string" == typeof (e = function(a, o) {
        try {
            return a[o]
        } catch (a) {}
    }(o = Ki(a), Ji)) ? e : Xi ? Hi(o) : "Object" == (i = Hi(o)) && Yi(o.callee) ? "Arguments" : i
}
  , Zi = Qi
  , ar = l.String
  , or = function(a) {
    if ("Symbol" === Zi(a))
        throw TypeError("Cannot convert a Symbol value to a string");
    return ar(a)
}
  , er = F
  , ir = or
  , rr = O("".replace)
  , sr = function(a) {
    return function(o) {
        var e = ir(er(o));
        return 1 & a && (e = rr(e, /^[	\n\r                　\u2028\u2029﻿][	\n\r                　\u2028\u2029﻿]*/, "")),
        2 & a && (e = rr(e, /[	\n\r                　\u2028\u2029﻿][	\n\r                　\u2028\u2029﻿]*$/, "")),
        e
    }
}
  , ur = {
    start: sr(1),
    end: sr(2),
    trim: sr(3)
}
  , tr = l
  , nr = m
  , lr = O
  , cr = or
  , mr = ur.trim
  , pr = tr.parseInt
  , dr = tr.Symbol
  , br = dr && dr.iterator
  , gr = /^[+-]?0x/i
  , fr = lr(gr.exec)
  , vr = 8 !== pr("\t\n\v\f\r                　\u2028\u2029\ufeff08") || 22 !== pr("\t\n\v\f\r                　\u2028\u2029\ufeff0x16") || br && !nr((function() {
    pr(Object(br))
}
)) ? function(a, o) {
    var e = mr(cr(a));
    return pr(e, o >>> 0 || (fr(gr, e) ? 16 : 10))
}
: pr;
Gi({
    target: "Number",
    stat: 1,
    forced: Number.parseInt != vr
}, {
    parseInt: vr
});
var hr = l
  , jr = U
  , xr = hr.String
  , zr = hr.TypeError
  , yr = O
  , wr = _o
  , qr = Object.setPrototypeOf || ("__proto__"in {} ? function() {
    var a, o = 0, e = {};
    try {
        (a = yr(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set))(e, []),
        o = e instanceof Array
    } catch (a) {}
    return function(e, i) {
        return wr(e),
        function(a) {
            if ("object" == typeof a || jr(a))
                return a;
            throw zr("Can't set " + xr(a) + " as a prototype")
        }(i),
        o ? a(e, i) : e.__proto__ = i,
        e
    }
}() : void 0)
  , Er = U
  , Sr = W
  , kr = qr
  , Or = function(a, o, e) {
    var i, r;
    return kr && Er(i = o.constructor) && i !== e && Sr(r = i.prototype) && r !== e.prototype && kr(a, r),
    a
}
  , Lr = O(1..valueOf)
  , Tr = p
  , Ir = l
  , Ar = O
  , Pr = Ri
  , Rr = Yo.exports
  , _r = Da
  , Nr = Or
  , Cr = X
  , Mr = ba
  , Dr = lo
  , Fr = m
  , Br = Ge.f
  , Gr = c.f
  , $r = Lo.f
  , Ur = Lr
  , Vr = ur.trim
  , Wr = Ir.Number
  , Yr = Wr.prototype
  , Hr = Ir.TypeError
  , Jr = Ar("".slice)
  , Kr = Ar("".charCodeAt)
  , Xr = function(a) {
    var o = Dr(a, "number");
    return "bigint" == typeof o ? o : Qr(o)
}
  , Qr = function(a) {
    var o, e, i, r, s, u, t, n, l = Dr(a, "number");
    if (Mr(l))
        throw Hr("Cannot convert a Symbol value to a number");
    if ("string" == typeof l && l.length > 2)
        if (l = Vr(l),
        43 === (o = Kr(l, 0)) || 45 === o) {
            if (88 === (e = Kr(l, 2)) || 120 === e)
                return NaN
        } else if (48 === o) {
            switch (Kr(l, 1)) {
            case 66:
            case 98:
                i = 2,
                r = 49;
                break;
            case 79:
            case 111:
                i = 8,
                r = 55;
                break;
            default:
                return +l
            }
            for (u = (s = Jr(l, 2)).length,
            t = 0; u > t; t++)
                if (48 > (n = Kr(s, t)) || n > r)
                    return NaN;
            return parseInt(s, i)
        }
    return +l
};
if (Pr("Number", !Wr(" 0o1") || !Wr("0b1") || Wr("+0x1"))) {
    for (var Zr, as = function(a) {
        var o = 1 > arguments.length ? 0 : Wr(Xr(a))
          , e = this;
        return Cr(Yr, e) && Fr((function() {
            Ur(e)
        }
        )) ? Nr(Object(o), e, as) : o
    }, os = Tr ? Br(Wr) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), es = 0; os.length > es; es++)
        _r(Wr, Zr = os[es]) && !_r(as, Zr) && $r(as, Zr, Gr(Wr, Zr));
    as.prototype = Yr,
    Yr.constructor = as,
    Rr(Ir, "Number", as)
}
var is = xa
  , rs = d
  , ss = O(O.bind)
  , us = function(a, o) {
    return is(a),
    void 0 === o ? a : rs ? ss(a, o) : function() {
        return a.apply(o, arguments)
    }
}
  , ts = A
  , ns = Array.isArray || function(a) {
    return "Array" == ts(a)
}
  , ls = O
  , cs = m
  , ms = U
  , ps = Qi
  , ds = ae
  , bs = function() {}
  , gs = []
  , fs = K("Reflect", "construct")
  , vs = /^\s*(?:class|function)\b/
  , hs = ls(vs.exec)
  , js = !vs.exec(bs)
  , xs = function(a) {
    if (!ms(a))
        return 0;
    try {
        return fs(bs, gs, a),
        1
    } catch (a) {
        return 0
    }
}
  , zs = function(a) {
    if (!ms(a))
        return 0;
    switch (ps(a)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
        return 0
    }
    try {
        return js || !!hs(vs, ds(a))
    } catch (a) {
        return 1
    }
};
zs.sham = 1;
var ys = !fs || cs((function() {
    var a;
    return xs(xs.call) || !xs(Object) || !xs((function() {
        a = 1
    }
    )) || a
}
)) ? zs : xs
  , ws = l
  , qs = ns
  , Es = ys
  , Ss = W
  , ks = oo("species")
  , Os = ws.Array
  , Ls = function(a, o) {
    return new (function(a) {
        var o;
        return qs(a) && (o = a.constructor,
        (Es(o) && (o === Os || qs(o.prototype)) || Ss(o) && null === (o = o[ks])) && (o = void 0)),
        void 0 === o ? Os : o
    }(a))(0 === o ? 0 : o)
}
  , Ts = us
  , Is = M
  , As = Na
  , Ps = ai
  , Rs = Ls
  , _s = O([].push)
  , Ns = function(a) {
    var o = 1 == a
      , e = 2 == a
      , i = 3 == a
      , r = 4 == a
      , s = 6 == a
      , u = 7 == a
      , t = 5 == a || s;
    return function(n, l, c, m) {
        for (var p, d, b = As(n), g = Is(b), f = Ts(l, c), v = Ps(g), h = 0, j = m || Rs, x = o ? j(n, v) : e || u ? j(n, 0) : void 0; v > h; h++)
            if ((t || h in g) && (d = f(p = g[h], h, b),
            a))
                if (o)
                    x[h] = d;
                else if (d)
                    switch (a) {
                    case 3:
                        return 1;
                    case 5:
                        return p;
                    case 6:
                        return h;
                    case 2:
                        _s(x, p)
                    }
                else
                    switch (a) {
                    case 4:
                        return 0;
                    case 7:
                        _s(x, p)
                    }
        return s ? -1 : i || r ? r : x
    }
}
  , Cs = {
    forEach: Ns(0),
    map: Ns(1),
    filter: Ns(2),
    some: Ns(3),
    every: Ns(4),
    find: Ns(5),
    findIndex: Ns(6),
    filterReject: Ns(7)
}
  , Ms = m
  , Ds = sa
  , Fs = oo("species")
  , Bs = function(a) {
    return Ds >= 51 || !Ms((function() {
        var o = [];
        return (o.constructor = {})[Fs] = function() {
            return {
                foo: 1
            }
        }
        ,
        1 !== o[a](Boolean).foo
    }
    ))
}
  , Gs = Cs.filter;
Gi({
    target: "Array",
    proto: 1,
    forced: !Bs("filter")
}, {
    filter(a) {
        return Gs(this, a, arguments.length > 1 ? arguments[1] : void 0)
    }
});
var $s = Qi
  , Us = Ui ? {}.toString : function() {
    return "[object " + $s(this) + "]"
}
  , Vs = Ui
  , Ws = Yo.exports;
Vs || Ws(Object.prototype, "toString", Us, {
    unsafe: 1
});
var Ys, Hs = m, Js = Gi, Ks = M, Xs = $, Qs = O([].join), Zs = Ks != Object, au = !!(Ys = [].join) && Hs((function() {
    Ys.call(null, ",", 1)
}
));
Js({
    target: "Array",
    proto: 1,
    forced: Zs || !au
}, {
    join(a) {
        return Qs(Xs(this), void 0 === a ? "," : a)
    }
});
var ou = _o
  , eu = m
  , iu = l.RegExp
  , ru = eu((function() {
    var a = iu("a", "y");
    return a.lastIndex = 2,
    null != a.exec("abcd")
}
))
  , su = ru || eu((function() {
    return !iu("a", "y").sticky
}
))
  , uu = ru || eu((function() {
    var a = iu("^r", "gy");
    return a.lastIndex = 2,
    null != a.exec("str")
}
))
  , tu = {
    BROKEN_CARET: uu,
    MISSED_STICKY: su,
    UNSUPPORTED_Y: ru
}
  , nu = {}
  , lu = mi
  , cu = pi
  , mu = Object.keys || function(a) {
    return lu(a, cu)
}
  , pu = p
  , du = To
  , bu = Lo
  , gu = _o
  , fu = $
  , vu = mu;
nu.f = pu && !du ? Object.defineProperties : function(a, o) {
    gu(a);
    for (var e, i = fu(o), r = vu(o), s = r.length, u = 0; s > u; )
        bu.f(a, e = r[u++], i[e]);
    return a
}
;
var hu, ju = K("document", "documentElement"), xu = _o, zu = nu, yu = pi, wu = le, qu = ju, Eu = vo, Su = ne("IE_PROTO"), ku = function() {}, Ou = function(a) {
    return "<script>" + a + "<\/script>"
}, Lu = function(a) {
    a.write(Ou("")),
    a.close();
    var o = a.parentWindow.Object;
    return a = null,
    o
}, Tu = function() {
    try {
        hu = new ActiveXObject("htmlfile")
    } catch (a) {}
    var a, o;
    Tu = "undefined" != typeof document ? document.domain && hu ? Lu(hu) : ((o = Eu("iframe")).style.display = "none",
    qu.appendChild(o),
    o.src = "javascript:",
    (a = o.contentWindow.document).open(),
    a.write(Ou("document.F=Object")),
    a.close(),
    a.F) : Lu(hu);
    for (var e = yu.length; e--; )
        delete Tu.prototype[yu[e]];
    return Tu()
};
wu[Su] = 1;
var Iu, Au = Object.create || function(a, o) {
    var e;
    return null !== a ? (ku.prototype = xu(a),
    e = new ku,
    ku.prototype = null,
    e[Su] = a) : e = Tu(),
    void 0 === o ? e : zu.f(e, o)
}
, Pu = m, Ru = l.RegExp, _u = Pu((function() {
    var a = Ru(".", "s");
    return !(a.dotAll && a.exec("\n") && "s" === a.flags)
}
)), Nu = m, Cu = l.RegExp, Mu = Nu((function() {
    var a = Cu("(?<a>b)", "g");
    return "b" !== a.exec("b").groups.a || "bc" !== "b".replace(a, "$<a>c")
}
)), Du = g, Fu = O, Bu = or, Gu = function() {
    var a = ou(this)
      , o = "";
    return a.global && (o += "g"),
    a.ignoreCase && (o += "i"),
    a.multiline && (o += "m"),
    a.dotAll && (o += "s"),
    a.unicode && (o += "u"),
    a.sticky && (o += "y"),
    o
}, $u = tu, Uu = ka.exports, Vu = Au, Wu = Se.get, Yu = _u, Hu = Mu, Ju = Uu("native-string-replace", "".replace), Ku = /t/.exec, Xu = Ku, Qu = Fu("".charAt), Zu = Fu("".indexOf), at = Fu("".replace), ot = Fu("".slice), et = (Iu = /b*/g,
Du(Ku, /a/, "a"),
Du(Ku, Iu, "a"),
0 !== Iu.lastIndex), it = $u.BROKEN_CARET, rt = void 0 !== /()??/.exec("")[1];
(et || rt || it || Yu || Hu) && (Xu = function(a) {
    var o, e, i, r, s, u, t, n = this, l = Wu(n), c = Bu(a), m = l.raw;
    if (m)
        return m.lastIndex = n.lastIndex,
        o = Du(Xu, m, c),
        n.lastIndex = m.lastIndex,
        o;
    var p = l.groups
      , d = it && n.sticky
      , b = Du(Gu, n)
      , g = n.source
      , f = 0
      , v = c;
    if (d && (b = at(b, "y", ""),
    -1 === Zu(b, "g") && (b += "g"),
    v = ot(c, n.lastIndex),
    n.lastIndex > 0 && (!n.multiline || n.multiline && "\n" !== Qu(c, n.lastIndex - 1)) && (g = "(?: " + g + ")",
    v = " " + v,
    f++),
    e = RegExp("^(?:" + g + ")", b)),
    rt && (e = RegExp("^" + g + "$(?!\\s)", b)),
    et && (i = n.lastIndex),
    r = Du(Ku, d ? e : n, v),
    d ? r ? (r.input = ot(r.input, f),
    r[0] = ot(r[0], f),
    r.index = n.lastIndex,
    n.lastIndex += r[0].length) : n.lastIndex = 0 : et && r && (n.lastIndex = n.global ? r.index + r[0].length : i),
    rt && r && r.length > 1 && Du(Ju, r[0], e, (function() {
        for (s = 1; arguments.length - 2 > s; s++)
            void 0 === arguments[s] && (r[s] = void 0)
    }
    )),
    r && p)
        for (r.groups = u = Vu(null),
        s = 0; s < p.length; s++)
            u[(t = p[s])[0]] = r[t[1]];
    return r
}
);
var st = Xu;
Gi({
    target: "RegExp",
    proto: 1,
    forced: /./.exec !== st
}, {
    exec: st
});
var ut = d
  , tt = Function.prototype
  , nt = tt.apply
  , lt = tt.call
  , ct = "object" == typeof Reflect && Reflect.apply || (ut ? lt.bind(nt) : function() {
    return lt.apply(nt, arguments)
}
)
  , mt = O
  , pt = Yo.exports
  , dt = st
  , bt = m
  , gt = oo
  , ft = Wo
  , vt = gt("species")
  , ht = RegExp.prototype
  , jt = function(a, o, e, i) {
    var r = gt(a)
      , s = !bt((function() {
        var o = {};
        return o[r] = function() {
            return 7
        }
        ,
        7 != ""[a](o)
    }
    ))
      , u = s && !bt((function() {
        var o = 0
          , e = /a/;
        return "split" === a && ((e = {}).constructor = {},
        e.constructor[vt] = function() {
            return e
        }
        ,
        e.flags = "",
        e[r] = /./[r]),
        e.exec = function() {
            return o = 1,
            null
        }
        ,
        e[r](""),
        !o
    }
    ));
    if (!s || !u || e) {
        var t = mt(/./[r])
          , n = o(r, ""[a], (function(a, o, e, i, r) {
            var u = mt(a)
              , n = o.exec;
            return n === dt || n === ht.exec ? s && !r ? {
                done: 1,
                value: t(o, e, i)
            } : {
                done: 1,
                value: u(e, o, i)
            } : {
                done: 0
            }
        }
        ));
        pt(String.prototype, a, n[0]),
        pt(ht, r, n[1])
    }
    i && ft(ht[r], "sham", 1)
}
  , xt = W
  , zt = A
  , yt = oo("match")
  , wt = ys
  , qt = fa
  , Et = l.TypeError
  , St = _o
  , kt = oo("species")
  , Ot = function(a, o) {
    var e, i = St(a).constructor;
    return void 0 === i || null == (e = St(i)[kt]) ? o : function(a) {
        if (wt(a))
            return a;
        throw Et(qt(a) + " is not a constructor")
    }(e)
}
  , Lt = O
  , Tt = Ve
  , It = or
  , At = F
  , Pt = Lt("".charAt)
  , Rt = Lt("".charCodeAt)
  , _t = Lt("".slice)
  , Nt = function(a) {
    return function(o, e) {
        var i, r, s = It(At(o)), u = Tt(e), t = s.length;
        return 0 > u || u >= t ? a ? "" : void 0 : 55296 > (i = Rt(s, u)) || i > 56319 || u + 1 === t || 56320 > (r = Rt(s, u + 1)) || r > 57343 ? a ? Pt(s, u) : i : a ? _t(s, u, u + 2) : r - 56320 + (i - 55296 << 10) + 65536
    }
}
  , Ct = {
    codeAt: Nt(0),
    charAt: Nt(1)
}
  , Mt = Ct.charAt
  , Dt = function(a, o, e) {
    return o + (e ? Mt(a, o).length : 1)
}
  , Ft = po
  , Bt = Lo
  , Gt = y
  , $t = function(a, o, e) {
    var i = Ft(o);
    i in a ? Bt.f(a, i, Gt(0, e)) : a[i] = e
}
  , Ut = Je
  , Vt = ai
  , Wt = $t
  , Yt = l.Array
  , Ht = Math.max
  , Jt = function(a, o, e) {
    for (var i = Vt(a), r = Ut(o, i), s = Ut(void 0 === e ? i : e, i), u = Yt(Ht(s - r, 0)), t = 0; s > r; r++,
    t++)
        Wt(u, t, a[r]);
    return u.length = t,
    u
}
  , Kt = g
  , Xt = _o
  , Qt = U
  , Zt = A
  , an = st
  , on = l.TypeError
  , en = function(a, o) {
    var e = a.exec;
    if (Qt(e)) {
        var i = Kt(e, a, o);
        return null !== i && Xt(i),
        i
    }
    if ("RegExp" === Zt(a))
        return Kt(an, a, o);
    throw on("RegExp#exec called on incompatible receiver")
}
  , rn = ct
  , sn = g
  , un = O
  , tn = jt
  , nn = _o
  , ln = F
  , cn = Ot
  , mn = Dt
  , pn = Qe
  , dn = or
  , bn = ya
  , gn = Jt
  , fn = en
  , vn = st
  , hn = m
  , jn = tu.UNSUPPORTED_Y
  , xn = Math.min
  , zn = [].push
  , yn = un(/./.exec)
  , wn = un(zn)
  , qn = un("".slice)
  , En = !hn((function() {
    var a = /(?:)/
      , o = a.exec;
    a.exec = function() {
        return o.apply(this, arguments)
    }
    ;
    var e = "ab".split(a);
    return 2 !== e.length || "a" !== e[0] || "b" !== e[1]
}
));
tn("split", (function(a, o, e) {
    var i;
    return i = "".split(/.?/).length ? function(a, e) {
        var i, r, s = dn(ln(this)), u = void 0 === e ? 4294967295 : e >>> 0;
        if (0 === u)
            return [];
        if (void 0 === a)
            return [s];
        if (!xt(i = a) || !(void 0 !== (r = i[yt]) ? r : "RegExp" == zt(i)))
            return sn(o, s, a, u);
        for (var t, n, l, c = [], m = (a.ignoreCase ? "i" : "") + (a.multiline ? "m" : "") + (a.unicode ? "u" : "") + (a.sticky ? "y" : ""), p = 0, d = RegExp(a.source, m + "g"); (t = sn(vn, d, s)) && ((n = d.lastIndex) <= p || (wn(c, qn(s, p, t.index)),
        t.length > 1 && t.index < s.length && rn(zn, c, gn(t, 1)),
        l = t[0].length,
        p = n,
        u > c.length)); )
            d.lastIndex === t.index && d.lastIndex++;
        return p === s.length ? !l && yn(d, "") || wn(c, "") : wn(c, qn(s, p)),
        c.length > u ? gn(c, 0, u) : c
    }
    : o,
    [function(o, e) {
        var r = ln(this)
          , s = null == o ? void 0 : bn(o, a);
        return s ? sn(s, o, r, e) : sn(i, dn(r), o, e)
    }
    , function(a, r) {
        var s = nn(this)
          , u = dn(a)
          , t = e(i, s, u, r, i !== o);
        if (t.done)
            return t.value;
        var n = cn(s, RegExp)
          , l = s.unicode
          , c = (s.ignoreCase ? "i" : "") + (s.multiline ? "m" : "") + (s.unicode ? "u" : "") + (jn ? "g" : "y")
          , m = new n(jn ? "^(?:" + s.source + ")" : s,c)
          , p = void 0 === r ? 4294967295 : r >>> 0;
        if (0 === p)
            return [];
        if (0 === u.length)
            return null === fn(m, u) ? [u] : [];
        for (var d = 0, b = 0, g = []; b < u.length; ) {
            m.lastIndex = jn ? 0 : b;
            var f, v = fn(m, jn ? qn(u, b) : u);
            if (null === v || (f = xn(pn(m.lastIndex + (jn ? b : 0)), u.length)) === d)
                b = mn(u, b, l);
            else {
                if (wn(g, qn(u, d, b)),
                g.length === p)
                    return g;
                for (var h = 1; h <= v.length - 1; h++)
                    if (wn(g, v[h]),
                    g.length === p)
                        return g;
                b = d = f
            }
        }
        return wn(g, qn(u, d)),
        g
    }
    ]
}
), !En, jn);
var Sn = l.Promise
  , kn = Yo.exports
  , On = function(a, o, e) {
    for (var i in o)
        kn(a, i, o[i], e);
    return a
}
  , Ln = Lo.f
  , Tn = Da
  , In = oo("toStringTag")
  , An = function(a, o, e) {
    a && !e && (a = a.prototype),
    a && !Tn(a, In) && Ln(a, In, {
        configurable: 1,
        value: o
    })
}
  , Pn = K
  , Rn = Lo
  , _n = p
  , Nn = oo("species")
  , Cn = function(a) {
    var o = Pn(a)
      , e = Rn.f;
    _n && o && !o[Nn] && e(o, Nn, {
        configurable: 1,
        get() {
            return this
        }
    })
}
  , Mn = X
  , Dn = l.TypeError
  , Fn = function(a, o) {
    if (Mn(o, a))
        return a;
    throw Dn("Incorrect invocation")
}
  , Bn = {}
  , Gn = Bn
  , $n = oo("iterator")
  , Un = Array.prototype
  , Vn = function(a) {
    return void 0 !== a && (Gn.Array === a || Un[$n] === a)
}
  , Wn = Qi
  , Yn = ya
  , Hn = Bn
  , Jn = oo("iterator")
  , Kn = function(a) {
    if (null != a)
        return Yn(a, Jn) || Yn(a, "@@iterator") || Hn[Wn(a)]
}
  , Xn = g
  , Qn = xa
  , Zn = _o
  , al = fa
  , ol = Kn
  , el = l.TypeError
  , il = function(a, o) {
    var e = 2 > arguments.length ? ol(a) : o;
    if (Qn(e))
        return Zn(Xn(e, a));
    throw el(al(a) + " is not iterable")
}
  , rl = g
  , sl = _o
  , ul = ya
  , tl = function(a, o, e) {
    var i, r;
    sl(a);
    try {
        if (!(i = ul(a, "return"))) {
            if ("throw" === o)
                throw e;
            return e
        }
        i = rl(i, a)
    } catch (a) {
        r = 1,
        i = a
    }
    if ("throw" === o)
        throw e;
    if (r)
        throw i;
    return sl(i),
    e
}
  , nl = us
  , ll = g
  , cl = _o
  , ml = fa
  , pl = Vn
  , dl = ai
  , bl = X
  , gl = il
  , fl = Kn
  , vl = tl
  , hl = l.TypeError
  , jl = function(a, o) {
    this.stopped = a,
    this.result = o
}
  , xl = jl.prototype
  , zl = function(a, o, e) {
    var i, r, s, u, t, n, l, c = e && e.that, m = !(!e || !e.AS_ENTRIES), p = !(!e || !e.IS_ITERATOR), d = !(!e || !e.INTERRUPTED), b = nl(o, c), g = function(a) {
        return i && vl(i, "normal", a),
        new jl(1,a)
    }, f = function(a) {
        return m ? (cl(a),
        d ? b(a[0], a[1], g) : b(a[0], a[1])) : d ? b(a, g) : b(a)
    };
    if (p)
        i = a;
    else {
        if (!(r = fl(a)))
            throw hl(ml(a) + " is not iterable");
        if (pl(r)) {
            for (s = 0,
            u = dl(a); u > s; s++)
                if ((t = f(a[s])) && bl(xl, t))
                    return t;
            return new jl(0)
        }
        i = gl(a, r)
    }
    for (n = i.next; !(l = ll(n, i)).done; ) {
        try {
            t = f(l.value)
        } catch (a) {
            vl(i, "throw", a)
        }
        if ("object" == typeof t && t && bl(xl, t))
            return t
    }
    return new jl(0)
}
  , yl = oo("iterator")
  , wl = 0;
try {
    var ql = 0
      , El = {
        next() {
            return {
                done: !!ql++
            }
        },
        return() {
            wl = 1
        }
    };
    El[yl] = function() {
        return this
    }
    ,
    Array.from(El, (function() {
        throw 2
    }
    ))
} catch (a) {}
var Sl, kl, Ol, Ll, Tl = function(a, o) {
    if (!o && !wl)
        return 0;
    var e = 0;
    try {
        var i = {};
        i[yl] = function() {
            return {
                next() {
                    return {
                        done: e = 1
                    }
                }
            }
        }
        ,
        a(i)
    } catch (a) {}
    return e
}, Il = O([].slice), Al = /(?:ipad|iphone|ipod).*applewebkit/i.test(Q), Pl = "process" == A(l.process), Rl = l, _l = ct, Nl = us, Cl = U, Ml = Da, Dl = m, Fl = ju, Bl = Il, Gl = vo, $l = Al, Ul = Pl, Vl = Rl.setImmediate, Wl = Rl.clearImmediate, Yl = Rl.process, Hl = Rl.Dispatch, Jl = Rl.Function, Kl = Rl.MessageChannel, Xl = Rl.String, Ql = 0, Zl = {};
try {
    Sl = Rl.location
} catch (a) {}
var ac = function(a) {
    if (Ml(Zl, a)) {
        var o = Zl[a];
        delete Zl[a],
        o()
    }
}
  , oc = function(a) {
    return function() {
        ac(a)
    }
}
  , ec = function(a) {
    ac(a.data)
}
  , ic = function(a) {
    Rl.postMessage(Xl(a), Sl.protocol + "//" + Sl.host)
};
Vl && Wl || (Vl = function(a) {
    var o = Bl(arguments, 1);
    return Zl[++Ql] = function() {
        _l(Cl(a) ? a : Jl(a), void 0, o)
    }
    ,
    kl(Ql),
    Ql
}
,
Wl = function(a) {
    delete Zl[a]
}
,
Ul ? kl = function(a) {
    Yl.nextTick(oc(a))
}
: Hl && Hl.now ? kl = function(a) {
    Hl.now(oc(a))
}
: Kl && !$l ? (Ll = (Ol = new Kl).port2,
Ol.port1.onmessage = ec,
kl = Nl(Ll.postMessage, Ll)) : Rl.addEventListener && Cl(Rl.postMessage) && !Rl.importScripts && Sl && "file:" !== Sl.protocol && !Dl(ic) ? (kl = ic,
Rl.addEventListener("message", ec, 0)) : kl = "onreadystatechange"in Gl("script") ? function(a) {
    Fl.appendChild(Gl("script")).onreadystatechange = function() {
        Fl.removeChild(this),
        ac(a)
    }
}
: function(a) {
    setTimeout(oc(a), 0)
}
);
var rc, sc, uc, tc, nc, lc, cc, mc, pc = {
    set: Vl,
    clear: Wl
}, dc = l, bc = /ipad|iphone|ipod/i.test(Q) && void 0 !== dc.Pebble, gc = /web0s(?!.*chrome)/i.test(Q), fc = l, vc = us, hc = c.f, jc = pc.set, xc = Al, zc = bc, yc = gc, wc = Pl, qc = fc.MutationObserver || fc.WebKitMutationObserver, Ec = fc.document, Sc = fc.process, kc = fc.Promise, Oc = hc(fc, "queueMicrotask"), Lc = Oc && Oc.value;
Lc || (rc = function() {
    var a, o;
    for (wc && (a = Sc.domain) && a.exit(); sc; ) {
        o = sc.fn,
        sc = sc.next;
        try {
            o()
        } catch (a) {
            throw sc ? tc() : uc = void 0,
            a
        }
    }
    uc = void 0,
    a && a.enter()
}
,
xc || wc || yc || !qc || !Ec ? !zc && kc && kc.resolve ? ((cc = kc.resolve(void 0)).constructor = kc,
mc = vc(cc.then, cc),
tc = function() {
    mc(rc)
}
) : wc ? tc = function() {
    Sc.nextTick(rc)
}
: (jc = vc(jc, fc),
tc = function() {
    jc(rc)
}
) : (nc = 1,
lc = Ec.createTextNode(""),
new qc(rc).observe(lc, {
    characterData: 1
}),
tc = function() {
    lc.data = nc = !nc
}
));
var Tc = Lc || function(a) {
    var o = {
        fn: a,
        next: void 0
    };
    uc && (uc.next = o),
    sc || (sc = o,
    tc()),
    uc = o
}
  , Ic = {}
  , Ac = xa
  , Pc = function(a) {
    var o, e;
    this.promise = new a((function(a, i) {
        if (void 0 !== o || void 0 !== e)
            throw TypeError("Bad Promise constructor");
        o = a,
        e = i
    }
    )),
    this.resolve = Ac(o),
    this.reject = Ac(e)
};
Ic.f = function(a) {
    return new Pc(a)
}
;
var Rc = _o
  , _c = W
  , Nc = Ic
  , Cc = l
  , Mc = function() {
    this.head = null,
    this.tail = null
};
Mc.prototype = {
    add(a) {
        var o = {
            item: a,
            next: null
        };
        this.head ? this.tail.next = o : this.head = o,
        this.tail = o
    },
    get() {
        var a = this.head;
        if (a)
            return this.head = a.next,
            this.tail === a && (this.tail = null),
            a.item
    }
};
var Dc, Fc, Bc, Gc, $c = Mc, Uc = "object" == typeof window, Vc = Gi, Wc = l, Yc = K, Hc = g, Jc = Sn, Kc = Yo.exports, Xc = On, Qc = qr, Zc = An, am = Cn, om = xa, em = U, im = W, rm = Fn, sm = ae, um = zl, tm = Tl, nm = Ot, lm = pc.set, cm = Tc, mm = Ic, pm = function(a) {
    try {
        return {
            error: 0,
            value: a()
        }
    } catch (a) {
        return {
            error: 1,
            value: a
        }
    }
}, dm = $c, bm = Se, gm = Ri, fm = Uc, vm = Pl, hm = sa, jm = oo("species"), xm = "Promise", zm = bm.getterFor(xm), ym = bm.set, wm = bm.getterFor(xm), qm = Jc && Jc.prototype, Em = Jc, Sm = qm, km = Wc.TypeError, Om = Wc.document, Lm = Wc.process, Tm = mm.f, Im = Tm, Am = !!(Om && Om.createEvent && Wc.dispatchEvent), Pm = em(Wc.PromiseRejectionEvent), Rm = 0, _m = gm(xm, (function() {
    var a = sm(Em)
      , o = a !== Em + "";
    if (!o && 66 === hm)
        return 1;
    if (hm >= 51 && /native code/.test(a))
        return 0;
    var e = new Em((function(a) {
        a(1)
    }
    ))
      , i = function(a) {
        a((function() {}
        ), (function() {}
        ))
    };
    return (e.constructor = {})[jm] = i,
    (Rm = e.then((function() {}
    ))instanceof i) ? !o && fm && !Pm : 1
}
)), Nm = _m || !tm((function(a) {
    Em.all(a).catch((function() {}
    ))
}
)), Cm = function(a) {
    var o;
    return im(a) && em(o = a.then) ? o : 0
}, Mm = function(a, o) {
    var e, i, r, s = o.value, u = 1 == o.state, t = u ? a.ok : a.fail, n = a.resolve, l = a.reject, c = a.domain;
    try {
        t ? (u || (2 === o.rejection && $m(o),
        o.rejection = 1),
        1 == t ? e = s : (c && c.enter(),
        e = t(s),
        c && (c.exit(),
        r = 1)),
        e === a.promise ? l(km("Promise-chain cycle")) : (i = Cm(e)) ? Hc(i, e, n, l) : n(e)) : l(s)
    } catch (a) {
        c && !r && c.exit(),
        l(a)
    }
}, Dm = function(a, o) {
    a.notified || (a.notified = 1,
    cm((function() {
        for (var e, i = a.reactions; e = i.get(); )
            Mm(e, a);
        a.notified = 0,
        o && !a.rejection && Bm(a)
    }
    )))
}, Fm = function(a, o, e) {
    var i, r;
    Am ? ((i = Om.createEvent("Event")).promise = o,
    i.reason = e,
    i.initEvent(a, 0, 1),
    Wc.dispatchEvent(i)) : i = {
        promise: o,
        reason: e
    },
    !Pm && (r = Wc["on" + a]) ? r(i) : "unhandledrejection" === a && function() {
        var a = Cc.console;
        a && a.error
    }()
}, Bm = function(a) {
    Hc(lm, Wc, (function() {
        var o, e = a.facade, i = a.value;
        if (Gm(a) && (o = pm((function() {
            vm ? Lm.emit("unhandledRejection", i, e) : Fm("unhandledrejection", e, i)
        }
        )),
        a.rejection = vm || Gm(a) ? 2 : 1,
        o.error))
            throw o.value
    }
    ))
}, Gm = function(a) {
    return 1 !== a.rejection && !a.parent
}, $m = function(a) {
    Hc(lm, Wc, (function() {
        var o = a.facade;
        vm ? Lm.emit("rejectionHandled", o) : Fm("rejectionhandled", o, a.value)
    }
    ))
}, Um = function(a, o, e) {
    return function(i) {
        a(o, i, e)
    }
}, Vm = function(a, o, e) {
    a.done || (a.done = 1,
    e && (a = e),
    a.value = o,
    a.state = 2,
    Dm(a, 1))
}, Wm = function(a, o, e) {
    if (!a.done) {
        a.done = 1,
        e && (a = e);
        try {
            if (a.facade === o)
                throw km("Promise can't be resolved itself");
            var i = Cm(o);
            i ? cm((function() {
                var e = {
                    done: 0
                };
                try {
                    Hc(i, o, Um(Wm, e, a), Um(Vm, e, a))
                } catch (o) {
                    Vm(e, o, a)
                }
            }
            )) : (a.value = o,
            a.state = 1,
            Dm(a, 0))
        } catch (o) {
            Vm({
                done: 0
            }, o, a)
        }
    }
};
if (_m && (Em = function(a) {
    rm(this, Sm),
    om(a),
    Hc(Dc, this);
    var o = zm(this);
    try {
        a(Um(Wm, o), Um(Vm, o))
    } catch (a) {
        Vm(o, a)
    }
}
,
Sm = Em.prototype,
(Dc = function() {
    ym(this, {
        type: xm,
        done: 0,
        notified: 0,
        parent: 0,
        reactions: new dm,
        rejection: 0,
        state: 0,
        value: void 0
    })
}
).prototype = Xc(Sm, {
    then(a, o) {
        var e = wm(this)
          , i = Tm(nm(this, Em));
        return e.parent = 1,
        i.ok = em(a) ? a : 1,
        i.fail = em(o) && o,
        i.domain = vm ? Lm.domain : void 0,
        0 == e.state ? e.reactions.add(i) : cm((function() {
            Mm(i, e)
        }
        )),
        i.promise
    },
    catch(a) {
        return this.then(void 0, a)
    }
}),
Fc = function() {
    var a = new Dc
      , o = zm(a);
    this.promise = a,
    this.resolve = Um(Wm, o),
    this.reject = Um(Vm, o)
}
,
mm.f = Tm = function(a) {
    return a === Em || a === Bc ? new Fc(a) : Im(a)
}
,
em(Jc) && qm !== Object.prototype)) {
    Gc = qm.then,
    Rm || (Kc(qm, "then", (function(a, o) {
        var e = this;
        return new Em((function(a, o) {
            Hc(Gc, e, a, o)
        }
        )).then(a, o)
    }
    ), {
        unsafe: 1
    }),
    Kc(qm, "catch", Sm.catch, {
        unsafe: 1
    }));
    try {
        delete qm.constructor
    } catch (a) {}
    Qc && Qc(qm, Sm)
}
Vc({
    global: 1,
    wrap: 1,
    forced: _m
}, {
    Promise: Em
}),
Zc(Em, xm, 0),
am(xm),
Bc = Yc(xm),
Vc({
    target: xm,
    stat: 1,
    forced: _m
}, {
    reject(a) {
        var o = Tm(this);
        return Hc(o.reject, void 0, a),
        o.promise
    }
}),
Vc({
    target: xm,
    stat: 1,
    forced: _m
}, {
    resolve(a) {
        return function(a, o) {
            if (Rc(a),
            _c(o) && o.constructor === a)
                return o;
            var e = Nc.f(a);
            return (0,
            e.resolve)(o),
            e.promise
        }(this, a)
    }
}),
Vc({
    target: xm,
    stat: 1,
    forced: Nm
}, {
    all(a) {
        var o = this
          , e = Tm(o)
          , i = e.resolve
          , r = e.reject
          , s = pm((function() {
            var e = om(o.resolve)
              , s = []
              , u = 0
              , t = 1;
            um(a, (function(a) {
                var n = u++
                  , l = 0;
                t++,
                Hc(e, o, a).then((function(a) {
                    l || (l = 1,
                    s[n] = a,
                    --t || i(s))
                }
                ), r)
            }
            )),
            --t || i(s)
        }
        ));
        return s.error && r(s.value),
        e.promise
    },
    race(a) {
        var o = this
          , e = Tm(o)
          , i = e.reject
          , r = pm((function() {
            var r = om(o.resolve);
            um(a, (function(a) {
                Hc(r, o, a).then(e.resolve, i)
            }
            ))
        }
        ));
        return r.error && i(r.value),
        e.promise
    }
});
var Ym = Gi
  , Hm = K
  , Jm = ct
  , Km = O
  , Xm = m
  , Qm = l.Array
  , Zm = Hm("JSON", "stringify")
  , ap = Km(/./.exec)
  , op = Km("".charAt)
  , ep = Km("".charCodeAt)
  , ip = Km("".replace)
  , rp = Km(1..toString)
  , sp = /^[\uD800-\uDBFF]$/
  , up = /^[\uDC00-\uDFFF]$/
  , tp = function(a, o, e) {
    var i = op(e, o - 1)
      , r = op(e, o + 1);
    return ap(sp, a) && !ap(up, r) || ap(up, a) && !ap(sp, i) ? "\\u" + rp(ep(a, 0), 16) : a
}
  , np = Xm((function() {
    return '"\\udf06\\ud834"' !== Zm("\udf06\ud834") || '"\\udead"' !== Zm("\udead")
}
));
Zm && Ym({
    target: "JSON",
    stat: 1,
    forced: np
}, {
    stringify(a, o, e) {
        for (var i = 0, r = arguments.length, s = Qm(r); r > i; i++)
            s[i] = arguments[i];
        var u = Jm(Zm, null, s);
        return "string" == typeof u ? ip(u, /[\uD800-\uDFFF]/g, tp) : u
    }
});
// var lp = "https://".concat(window.location.hostname).concat("/event");
function cp(a) {
    return mp.apply(this, arguments)
}
function mp() {
    return (mp = o(regeneratorRuntime.mark((function a(o) {
        return regeneratorRuntime.wrap((function(a) {
            for (; ; )
                switch (a.prev = a.next) {
                case 0:
                    return a.prev = 0,
                    a.next = 3,
                    ({});
                    // fetch(lp, {
                    //     method: "POST",
                    //     headers: {
                    //         "Content-Type": "application/json"
                    //     },
                    //     body: JSON.stringify(o)
                    // });
                case 3:
                    a.next = 7;
                    break;
                case 5:
                    a.prev = 5,
                    a.t0 = a.catch(0);
                case 7:
                case "end":
                    return a.stop()
                }
        }
        ), a, null, [[0, 5]])
    }
    )))).apply(this, arguments)
}
function pp(a, o) {
    return dp.apply(this, arguments)
}
function dp() {
    return (dp = o(regeneratorRuntime.mark((function a(o, e) {
        var i, r, s;
        return regeneratorRuntime.wrap((function(a) {
            for (; ; )
                switch (a.prev = a.next) {
                case 0:
                    return s = null !== (i = null !== (r = navigator.userAgent) && void 0 !== r ? r : navigator.vendor) && void 0 !== i ? i : window.opera,
                    a.next = 3,
                    cp({
                        type: "error",
                        ua: s,
                        msg: o,
                        stack: e
                    });
                case 3:
                case "end":
                    return a.stop()
                }
        }
        ), a)
    }
    )))).apply(this, arguments)
}
var bp = Math.imul;
Gi({
    target: "Math",
    stat: 1,
    forced: m((function() {
        return -5 != bp(4294967295, 5) || 2 != bp.length
    }
    ))
}, {
    imul(a, o) {
        var e = 65535
          , i = +a
          , r = +o
          , s = e & i
          , u = e & r;
        return 0 | s * u + ((e & i >>> 16) * u + s * (e & r >>> 16) << 16 >>> 0)
    }
});
var gp = O
  , fp = Na
  , vp = Math.floor
  , hp = gp("".charAt)
  , jp = gp("".replace)
  , xp = gp("".slice)
  , zp = ct
  , yp = g
  , wp = O
  , qp = jt
  , Ep = m
  , Sp = _o
  , kp = U
  , Op = Ve
  , Lp = Qe
  , Tp = or
  , Ip = F
  , Ap = Dt
  , Pp = ya
  , Rp = function(a, o, e, i, r, s) {
    var u = e + a.length
      , t = i.length
      , n = /\$([$&'`]|\d{1,2})/g;
    return void 0 !== r && (r = fp(r),
    n = /\$([$&'`]|\d{1,2}|<[^>]*>)/g),
    jp(s, n, (function(s, n) {
        var l;
        switch (hp(n, 0)) {
        case "$":
            return "$";
        case "&":
            return a;
        case "`":
            return xp(o, 0, e);
        case "'":
            return xp(o, u);
        case "<":
            l = r[xp(n, 1, -1)];
            break;
        default:
            var c = +n;
            if (0 === c)
                return s;
            if (c > t) {
                var m = vp(c / 10);
                return 0 === m || m > t ? s : void 0 === i[m - 1] ? hp(n, 1) : i[m - 1] + hp(n, 1)
            }
            l = i[c - 1]
        }
        return void 0 === l ? "" : l
    }
    ))
}
  , _p = en
  , Np = oo("replace")
  , Cp = Math.max
  , Mp = Math.min
  , Dp = wp([].concat)
  , Fp = wp([].push)
  , Bp = wp("".indexOf)
  , Gp = wp("".slice)
  , $p = /./[Np] ? "" === /./[Np]("a", "$0") : 0
  , Up = !Ep((function() {
    var a = /./;
    return a.exec = function() {
        var a = [];
        return a.groups = {
            a: "7"
        },
        a
    }
    ,
    "7" !== "".replace(a, "$<a>")
}
));
function Vp(a) {
    return new Promise((function(o) {
        return setTimeout(o, 1e3 * a)
    }
    ))
}
function Wp(a) {
    return a.normalize("NFD").replace(/[^\w]/g, "")
}
qp("replace", (function(a, o, e) {
    var i = $p ? "$" : "$0";
    return [function(a, e) {
        var i = Ip(this)
          , r = null == a ? void 0 : Pp(a, Np);
        return r ? yp(r, a, i, e) : yp(o, Tp(i), a, e)
    }
    , function(a, r) {
        var s = Sp(this)
          , u = Tp(a);
        if ("string" == typeof r && -1 === Bp(r, i) && -1 === Bp(r, "$<")) {
            var t = e(o, s, u, r);
            if (t.done)
                return t.value
        }
        var n = kp(r);
        n || (r = Tp(r));
        var l = s.global;
        if (l) {
            var c = s.unicode;
            s.lastIndex = 0
        }
        for (var m = []; ; ) {
            var p = _p(s, u);
            if (null === p)
                break;
            if (Fp(m, p),
            !l)
                break;
            "" === Tp(p[0]) && (s.lastIndex = Ap(u, Lp(s.lastIndex), c))
        }
        for (var d, b = "", g = 0, f = 0; m.length > f; f++) {
            for (var v = Tp((p = m[f])[0]), h = Cp(Mp(Op(p.index), u.length), 0), j = [], x = 1; x < p.length; x++)
                Fp(j, void 0 === (d = p[x]) ? d : d + "");
            var z = p.groups;
            if (n) {
                var y = Dp([v], j, h, u);
                void 0 !== z && Fp(y, z);
                var w = Tp(zp(r, void 0, y))
            } else
                w = Rp(v, u, h, j, z, r);
            g > h || (b += Gp(u, g, h) + w,
            g = h + v.length)
        }
        return b + Gp(u, g)
    }
    ]
}
), !Up || $p);
var Yp = Au
  , Hp = Lo
  , Jp = oo("unscopables")
  , Kp = Array.prototype;
null == Kp[Jp] && Hp.f(Kp, Jp, {
    configurable: 1,
    value: Yp(null)
});
var Xp, Qp, Zp, ad = !m((function() {
    function a() {}
    return a.prototype.constructor = null,
    Object.getPrototypeOf(new a) !== a.prototype
}
)), od = l, ed = Da, id = U, rd = Na, sd = ad, ud = ne("IE_PROTO"), td = od.Object, nd = td.prototype, ld = sd ? td.getPrototypeOf : function(a) {
    var o = rd(a);
    if (ed(o, ud))
        return o[ud];
    var e = o.constructor;
    return id(e) && o instanceof e ? e.prototype : o instanceof td ? nd : null
}
, cd = m, md = U, pd = ld, dd = Yo.exports, bd = oo("iterator"), gd = 0;
[].keys && ("next"in (Zp = [].keys()) ? (Qp = pd(pd(Zp))) !== Object.prototype && (Xp = Qp) : gd = 1);
var fd = null == Xp || cd((function() {
    var a = {};
    return Xp[bd].call(a) !== a
}
));
fd && (Xp = {}),
md(Xp[bd]) || dd(Xp, bd, (function() {
    return this
}
));
var vd = {
    IteratorPrototype: Xp,
    BUGGY_SAFARI_ITERATORS: gd
}
  , hd = vd.IteratorPrototype
  , jd = Au
  , xd = y
  , zd = An
  , yd = Bn
  , wd = function() {
    return this
}
  , qd = Gi
  , Ed = g
  , Sd = Ie
  , kd = U
  , Od = ld
  , Ld = qr
  , Td = An
  , Id = Wo
  , Ad = Yo.exports
  , Pd = Bn
  , Rd = Sd.PROPER
  , _d = Sd.CONFIGURABLE
  , Nd = vd.IteratorPrototype
  , Cd = vd.BUGGY_SAFARI_ITERATORS
  , Md = oo("iterator")
  , Dd = function() {
    return this
}
  , Fd = function(a, o, e, i, r, s, u) {
    !function(a, o, e) {
        var i = o + " Iterator";
        a.prototype = jd(hd, {
            next: xd(1, e)
        }),
        zd(a, i, 0),
        yd[i] = wd
    }(e, o, i);
    var t, n, l, c = function(a) {
        if (a === r && g)
            return g;
        if (!Cd && a in d)
            return d[a];
        switch (a) {
        case "keys":
        case "values":
        case "entries":
            return function() {
                return new e(this,a)
            }
        }
        return function() {
            return new e(this)
        }
    }, m = o + " Iterator", p = 0, d = a.prototype, b = d[Md] || d["@@iterator"] || r && d[r], g = !Cd && b || c(r), f = "Array" == o && d.entries || b;
    if (f && (t = Od(f.call(new a))) !== Object.prototype && t.next && (Od(t) !== Nd && (Ld ? Ld(t, Nd) : kd(t[Md]) || Ad(t, Md, Dd)),
    Td(t, m, 1)),
    Rd && "values" == r && b && "values" !== b.name && (_d ? Id(d, "name", "values") : (p = 1,
    g = function() {
        return Ed(b, this)
    }
    )),
    r)
        if (n = {
            values: c("values"),
            keys: s ? g : c("keys"),
            entries: c("entries")
        },
        u)
            for (l in n)
                (Cd || p || !(l in d)) && Ad(d, l, n[l]);
        else
            qd({
                target: o,
                proto: 1,
                forced: Cd || p
            }, n);
    return d[Md] !== g && Ad(d, Md, g, {
        name: r
    }),
    Pd[o] = g,
    n
}
  , Bd = $
  , Gd = function(a) {
    Kp[Jp][a] = 1
}
  , $d = Bn
  , Ud = Se
  , Vd = Lo.f
  , Wd = Fd
  , Yd = p
  , Hd = Ud.set
  , Jd = Ud.getterFor("Array Iterator")
  , Kd = Wd(Array, "Array", (function(a, o) {
    Hd(this, {
        type: "Array Iterator",
        target: Bd(a),
        index: 0,
        kind: o
    })
}
), (function() {
    var a = Jd(this)
      , o = a.target
      , e = a.kind
      , i = a.index++;
    return o && i < o.length ? "keys" == e ? {
        value: i,
        done: 0
    } : "values" == e ? {
        value: o[i],
        done: 0
    } : {
        value: [i, o[i]],
        done: 0
    } : (a.target = void 0,
    {
        value: void 0,
        done: 1
    })
}
), "values")
  , Xd = $d.Arguments = $d.Array;
if (Gd("keys"),
Gd("values"),
Gd("entries"),
Yd && "values" !== Xd.name)
    try {
        Vd(Xd, "name", {
            value: "values"
        })
    } catch (a) {}
var Qd = {
    exports: {}
}
  , Zd = {}
  , ab = A
  , ob = $
  , eb = Ge.f
  , ib = Jt
  , rb = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
Zd.f = function(a) {
    return rb && "Window" == ab(a) ? function(a) {
        try {
            return eb(a)
        } catch (a) {
            return ib(rb)
        }
    }(a) : eb(ob(a))
}
;
var sb = m((function() {
    if ("function" == typeof ArrayBuffer) {
        var a = new ArrayBuffer(8);
        Object.isExtensible(a) && Object.defineProperty(a, "a", {
            value: 8
        })
    }
}
))
  , ub = W
  , tb = A
  , nb = sb
  , lb = Object.isExtensible
  , cb = m((function() {
    lb(1)
}
)) || nb ? function(a) {
    return ub(a) ? nb && "ArrayBuffer" == tb(a) ? 0 : lb ? lb(a) : 1 : 0
}
: lb
  , mb = !m((function() {
    return Object.isExtensible(Object.preventExtensions({}))
}
))
  , pb = Gi
  , db = O
  , bb = le
  , gb = W
  , fb = Da
  , vb = Lo.f
  , hb = Ge
  , jb = Zd
  , xb = cb
  , zb = mb
  , yb = 0
  , wb = Ua("meta")
  , qb = 0
  , Eb = function(a) {
    vb(a, wb, {
        value: {
            objectID: "O" + qb++,
            weakData: {}
        }
    })
}
  , Sb = Qd.exports = {
    enable() {
        Sb.enable = function() {}
        ,
        yb = 1;
        var a = hb.f
          , o = db([].splice)
          , e = {};
        e[wb] = 1,
        a(e).length && (hb.f = function(e) {
            for (var i = a(e), r = 0, s = i.length; s > r; r++)
                if (i[r] === wb) {
                    o(i, r, 1);
                    break
                }
            return i
        }
        ,
        pb({
            target: "Object",
            stat: 1,
            forced: 1
        }, {
            getOwnPropertyNames: jb.f
        }))
    },
    fastKey(a, o) {
        if (!gb(a))
            return "symbol" == typeof a ? a : ("string" == typeof a ? "S" : "P") + a;
        if (!fb(a, wb)) {
            if (!xb(a))
                return "F";
            if (!o)
                return "E";
            Eb(a)
        }
        return a[wb].objectID
    },
    getWeakData(a, o) {
        if (!fb(a, wb)) {
            if (!xb(a))
                return 1;
            if (!o)
                return 0;
            Eb(a)
        }
        return a[wb].weakData
    },
    onFreeze(a) {
        return zb && yb && xb(a) && !fb(a, wb) && Eb(a),
        a
    }
};
bb[wb] = 1;
var kb = Gi
  , Ob = l
  , Lb = O
  , Tb = Ri
  , Ib = Yo.exports
  , Ab = Qd.exports
  , Pb = zl
  , Rb = Fn
  , _b = U
  , Nb = W
  , Cb = m
  , Mb = Tl
  , Db = An
  , Fb = Or
  , Bb = function(a, o, e) {
    var i = -1 !== a.indexOf("Map")
      , r = -1 !== a.indexOf("Weak")
      , s = i ? "set" : "add"
      , u = Ob[a]
      , t = u && u.prototype
      , n = u
      , l = {}
      , c = function(a) {
        var o = Lb(t[a]);
        Ib(t, a, "add" == a ? function(a) {
            return o(this, 0 === a ? 0 : a),
            this
        }
        : "delete" == a ? function(a) {
            return r && !Nb(a) ? 0 : o(this, 0 === a ? 0 : a)
        }
        : "get" == a ? function(a) {
            return r && !Nb(a) ? void 0 : o(this, 0 === a ? 0 : a)
        }
        : "has" == a ? function(a) {
            return r && !Nb(a) ? 0 : o(this, 0 === a ? 0 : a)
        }
        : function(a, e) {
            return o(this, 0 === a ? 0 : a, e),
            this
        }
        )
    };
    if (Tb(a, !_b(u) || !(r || t.forEach && !Cb((function() {
        (new u).entries().next()
    }
    )))))
        n = e.getConstructor(o, a, i, s),
        Ab.enable();
    else if (Tb(a, 1)) {
        var m = new n
          , p = m[s](r ? {} : -0, 1) != m
          , d = Cb((function() {
            m.has(1)
        }
        ))
          , b = Mb((function(a) {
            new u(a)
        }
        ))
          , g = !r && Cb((function() {
            for (var a = new u, o = 5; o--; )
                a[s](o, o);
            return !a.has(-0)
        }
        ));
        b || ((n = o((function(a, o) {
            Rb(a, t);
            var e = Fb(new u, a, n);
            return null != o && Pb(o, e[s], {
                that: e,
                AS_ENTRIES: i
            }),
            e
        }
        ))).prototype = t,
        t.constructor = n),
        (d || g) && (c("delete"),
        c("has"),
        i && c("get")),
        (g || p) && c(s),
        r && t.clear && delete t.clear
    }
    return l[a] = n,
    kb({
        global: 1,
        forced: n != u
    }, l),
    Db(n, a),
    r || e.setStrong(n, a, i),
    n
}
  , Gb = Lo.f
  , $b = Au
  , Ub = On
  , Vb = us
  , Wb = Fn
  , Yb = zl
  , Hb = Fd
  , Jb = Cn
  , Kb = p
  , Xb = Qd.exports.fastKey
  , Qb = Se.set
  , Zb = Se.getterFor
  , ag = {
    getConstructor(a, o, e, i) {
        var r = a((function(a, r) {
            Wb(a, s),
            Qb(a, {
                type: o,
                index: $b(null),
                first: void 0,
                last: void 0,
                size: 0
            }),
            Kb || (a.size = 0),
            null != r && Yb(r, a[i], {
                that: a,
                AS_ENTRIES: e
            })
        }
        ))
          , s = r.prototype
          , u = Zb(o)
          , t = function(a, o, e) {
            var i, r, s = u(a), t = n(a, o);
            return t ? t.value = e : (s.last = t = {
                index: r = Xb(o, 1),
                key: o,
                value: e,
                previous: i = s.last,
                next: void 0,
                removed: 0
            },
            s.first || (s.first = t),
            i && (i.next = t),
            Kb ? s.size++ : a.size++,
            "F" !== r && (s.index[r] = t)),
            a
        }
          , n = function(a, o) {
            var e, i = u(a), r = Xb(o);
            if ("F" !== r)
                return i.index[r];
            for (e = i.first; e; e = e.next)
                if (e.key == o)
                    return e
        };
        return Ub(s, {
            clear() {
                for (var a = u(this), o = a.index, e = a.first; e; )
                    e.removed = 1,
                    e.previous && (e.previous = e.previous.next = void 0),
                    delete o[e.index],
                    e = e.next;
                a.first = a.last = void 0,
                Kb ? a.size = 0 : this.size = 0
            },
            delete(a) {
                var o = this
                  , e = u(o)
                  , i = n(o, a);
                if (i) {
                    var r = i.next
                      , s = i.previous;
                    delete e.index[i.index],
                    i.removed = 1,
                    s && (s.next = r),
                    r && (r.previous = s),
                    e.first == i && (e.first = r),
                    e.last == i && (e.last = s),
                    Kb ? e.size-- : o.size--
                }
                return !!i
            },
            forEach(a) {
                for (var o, e = u(this), i = Vb(a, arguments.length > 1 ? arguments[1] : void 0); o = o ? o.next : e.first; )
                    for (i(o.value, o.key, this); o && o.removed; )
                        o = o.previous
            },
            has(a) {
                return !!n(this, a)
            }
        }),
        Ub(s, e ? {
            get(a) {
                var o = n(this, a);
                return o && o.value
            },
            set(a, o) {
                return t(this, 0 === a ? 0 : a, o)
            }
        } : {
            add(a) {
                return t(this, a = 0 === a ? 0 : a, a)
            }
        }),
        Kb && Gb(s, "size", {
            get() {
                return u(this).size
            }
        }),
        r
    },
    setStrong(a, o, e) {
        var i = o + " Iterator"
          , r = Zb(o)
          , s = Zb(i);
        Hb(a, o, (function(a, o) {
            Qb(this, {
                type: i,
                target: a,
                state: r(a),
                kind: o,
                last: void 0
            })
        }
        ), (function() {
            for (var a = s(this), o = a.kind, e = a.last; e && e.removed; )
                e = e.previous;
            return a.target && (a.last = e = e ? e.next : a.state.first) ? "keys" == o ? {
                value: e.key,
                done: 0
            } : "values" == o ? {
                value: e.value,
                done: 0
            } : {
                value: [e.key, e.value],
                done: 0
            } : (a.target = void 0,
            {
                value: void 0,
                done: 1
            })
        }
        ), e ? "entries" : "values", !e, 1),
        Jb(o)
    }
};
Bb("Set", (function(a) {
    return function() {
        return a(this, arguments.length ? arguments[0] : void 0)
    }
}
), ag);
var og = Ct.charAt
  , eg = or
  , ig = Se
  , rg = Fd
  , sg = ig.set
  , ug = ig.getterFor("String Iterator");
rg(String, "String", (function(a) {
    sg(this, {
        type: "String Iterator",
        string: eg(a),
        index: 0
    })
}
), (function() {
    var a, o = ug(this), e = o.string, i = o.index;
    return i < e.length ? (a = og(e, i),
    o.index += a.length,
    {
        value: a,
        done: 0
    }) : {
        value: void 0,
        done: 1
    }
}
));
var tg = vo("span").classList
  , ng = tg && tg.constructor && tg.constructor.prototype
  , lg = l
  , cg = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
}
  , mg = ng === Object.prototype ? void 0 : ng
  , pg = Kd
  , dg = Wo
  , bg = oo
  , gg = bg("iterator")
  , fg = bg("toStringTag")
  , vg = pg.values
  , hg = function(a, o) {
    if (a) {
        if (a[gg] !== vg)
            try {
                dg(a, gg, vg)
            } catch (o) {
                a[gg] = vg
            }
        if (a[fg] || dg(a, fg, o),
        cg[o])
            for (var e in pg)
                if (a[e] !== pg[e])
                    try {
                        dg(a, e, pg[e])
                    } catch (o) {
                        a[e] = pg[e]
                    }
    }
};
for (var jg in cg)
    hg(lg[jg] && lg[jg].prototype, jg);
hg(mg, "DOMTokenList"),
Bb("Map", (function(a) {
    return function() {
        return a(this, arguments.length ? arguments[0] : void 0)
    }
}
), ag);
var xg = Na
  , zg = mu;
Gi({
    target: "Object",
    stat: 1,
    forced: m((function() {
        zg(1)
    }
    ))
}, {
    keys(a) {
        return zg(xg(a))
    }
});
var yg, wg, qg = new Set(["aanás", "aarus", "aasto", "ababá", "ababé", "abaci", "abacu", "abacá", "abacé", "abado", "abafa", "abafe", "abafo", "abagi", "abago", "abagá", "abaia", "abais", "abaiô", "abaju", "abajá", "abala", "abale", "abalo", "abama", "abamo", "abana", "abane", "abano", "abaná", "abapo", "abari", "abará", "abaré", "abaso", "abata", "abate", "abati", "abato", "abatu", "abava", "abavi", "abaxi", "abdal", "abdar", "abdas", "abduz", "abebé", "abeci", "abeco", "abecê", "abeda", "abedo", "abedê", "abeis", "abela", "abemo", "abesi", "abeta", "abete", "abeto", "abexi", "abibe", "abica", "abicô", "abida", "abife", "abifo", "abifá", "abigi", "abilo", "abios", "abira", "abisa", "abita", "abite", "abito", "abius", "abião", "ables", "ableu", "ablua", "ablui", "abluo", "abluí", "abnua", "abnue", "abnuo", "abnuí", "aboai", "aboam", "aboar", "aboas", "aboba", "abobe", "abobó", "aboca", "aboce", "aboei", "aboem", "aboes", "abofé", "abohm", "aboia", "aboie", "aboio", "aboiz", "aboja", "aboje", "abojo", "abola", "abole", "aboli", "abolo", "aboma", "abona", "abone", "aboou", "abora", "aboré", "abota", "aboço", "aboís", "abram", "abras", "abrem", "abres", "abreu", "abrev", "abria", "abris", "abriu", "abstê", "abuas", "abube", "abuce", "abuda", "abudo", "abuis", "abuiz", "abula", "abule", "abulo", "abuna", "aburu", "abusa", "abuse", "abuso", "abuta", "abuxó", "abuço", "abuçá", "acaba", "acabe", "acabo", "acace", "acada", "acado", "acaio", "acair", "acaiu", "acaiá", "acaju", "acajá", "acale", "acali", "acalo", "acama", "acana", "acane", "acani", "acapu", "acari", "acaru", "acará", "acasa", "acata", "acate", "acato", "acauã", "acava", "acaxa", "acaço", "acaçá", "acaém", "acaés", "acebe", "acebo", "acebá", "aceca", "aceda", "acede", "acedi", "acedo", "acefe", "aceje", "acejo", "acejá", "acela", "acelo", "acena", "acene", "aceno", "acera", "acere", "aceso", "aceta", "acete", "aceto", "aceva", "aceve", "acevo", "achai", "acham", "achas", "achei", "achem", "aches", "achim", "achis", "achoa", "achoe", "achoo", "achou", "achém", "acibe", "acica", "acida", "acide", "acila", "acile", "acilo", "acime", "acimo", "acioa", "acisa", "aciso", "acles", "aclia", "aclio", "acmes", "acmos", "acmão", "acnas", "acnes", "acoai", "acoam", "acoar", "acoas", "acobu", "acoce", "acoco", "acode", "acoei", "acoem", "acole", "acoli", "acolo", "acone", "aconá", "acoou", "acori", "acote", "acoto", "acotá", "acova", "acove", "acovo", "acral", "acras", "acres", "acrol", "acros", "acroá", "acréu", "actel", "acuai", "acuam", "acuar", "acuas", "acucu", "acuda", "acudi", "acudo", "acuei", "acuem", "acues", "acume", "acumã", "acuna", "acuos", "acuou", "acura", "acuri", "acuro", "acuré", "acusa", "acuse", "acuso", "acuta", "acuti", "acuís", "acéns", "adaba", "adaca", "adace", "adage", "adail", "adali", "adama", "adame", "adamo", "adane", "adano", "adaná", "adaus", "adaís", "adebá", "adege", "adego", "adeja", "adeje", "adejo", "adela", "adele", "adelo", "adema", "adere", "aderi", "adero", "aderá", "adesa", "adeso", "adevã", "adiai", "adiam", "adias", "adiba", "adibe", "adibo", "adica", "adico", "adida", "adido", "adiei", "adiem", "adies", "adila", "adile", "adilo", "adimo", "adiou", "adioé", "adipa", "adira", "adiro", "adirá", "adita", "adite", "adito", "adiva", "adive", "adivo", "adixá", "adião", "adjaz", "adjer", "adjás", "adoai", "adoam", "adoar", "adoas", "adoba", "adobe", "adobo", "adoce", "adoei", "adoem", "adoes", "adogã", "adoli", "adolo", "adoma", "adome", "adomo", "adone", "adono", "adoná", "adoou", "adora", "adore", "adoro", "adota", "adote", "adoto", "adova", "adoxa", "adoxo", "adoça", "adoço", "adqui", "adros", "adsir", "aduai", "aduam", "aduar", "aduas", "aduba", "adube", "adubo", "aduce", "aduci", "aduco", "aduei", "aduem", "adues", "adufa", "adufe", "adufo", "adula", "adule", "adulo", "adume", "adumo", "adumá", "aduna", "adune", "aduno", "aduns", "aduou", "adura", "adure", "aduri", "aduro", "aduza", "aduze", "aduzi", "aduzo", "aduça", "advim", "advém", "advêm", "adéis", "adíon", "aedos", "aerar", "aerva", "aetas", "afaga", "afago", "afala", "afale", "afalo", "afama", "afame", "afamo", "afana", "afane", "afano", "afare", "afaro", "afará", "afaze", "afaço", "afeai", "afear", "afeei", "afefé", "afego", "afegã", "afeia", "afeie", "afeio", "afeou", "afere", "aferi", "afero", "aferá", "afeta", "afete", "afeto", "afiai", "afial", "afiam", "afiar", "afias", "afica", "afico", "afido", "afiei", "afiem", "afies", "afife", "afifo", "afifá", "afila", "afile", "afilo", "afina", "afine", "afino", "afiou", "afira", "afiro", "afita", "afite", "afito", "afixa", "afixe", "afixo", "aflai", "aflam", "aflar", "aflas", "aflei", "aflem", "afles", "aflou", "aflua", "aflui", "afluo", "afluí", "afoba", "afobe", "afobo", "afoco", "afocá", "afofa", "afofe", "afofo", "afoga", "afogo", "afola", "afole", "afolo", "afora", "afore", "aforo", "afose", "afoxé", "afras", "afros", "aftas", "afufo", "afuma", "afume", "afumo", "afune", "afuno", "afuná", "afurá", "afusa", "afuse", "afuso", "afões", "agabe", "agabá", "agacé", "agado", "agadá", "agage", "agaie", "agaio", "agaiá", "agaje", "agajo", "agajá", "agala", "agale", "agalo", "agama", "agame", "agami", "agane", "agano", "aganá", "agara", "agari", "agaré", "agati", "agava", "agave", "agavo", "agaze", "agazo", "agazá", "agaís", "agaús", "agbês", "ageia", "agema", "agere", "agero", "agerá", "agiam", "agiar", "agias", "agido", "agimo", "agina", "agira", "agirá", "agita", "agite", "agito", "aglas", "agmar", "agmas", "agmis", "agnal", "agnas", "agnos", "agoga", "agoge", "agogô", "agome", "agomo", "agomã", "agons", "agori", "agote", "agoto", "agotá", "agoés", "agrai", "agral", "agram", "agrar", "agras", "agraz", "agrei", "agres", "agreu", "agreá", "agror", "agros", "agrou", "agrão", "agrém", "aguai", "aguar", "aguaí", "aguce", "agude", "aguei", "aguem", "agues", "aguou", "aguti", "aguça", "aguço", "aiada", "aiado", "aiaia", "aiais", "aiala", "aiamo", "aiapá", "aiapé", "aiará", "aiava", "aiaçá", "aibis", "aicás", "aidje", "aidos", "aidro", "aieis", "aiemo", "aigue", "ailás", "ailós", "aimol", "ainas", "aines", "ainho", "ainos", "ainsa", "ainus", "aiocá", "aiola", "aioro", "aipim", "aipos", "aipás", "aipés", "airai", "airam", "airar", "airas", "airei", "airem", "aires", "airis", "airol", "airou", "airuã", "airão", "airós", "aisle", "aislo", "aislá", "aitau", "aitás", "aitão", "aiuba", "aiucá", "aiuiú", "aiune", "aiuno", "aiuná", "aiuri", "aiuás", "aiuês", "aival", "aivão", "aixes", "aizoa", "aiões", "ajabó", "ajacu", "ajaez", "ajais", "ajaja", "ajame", "ajamo", "ajana", "ajapá", "ajará", "ajaré", "ajaua", "ajava", "ajeru", "ajipa", "ajobó", "ajoie", "ajoio", "ajoiá", "ajole", "ajuba", "ajuda", "ajude", "ajudo", "ajuga", "ajula", "ajule", "ajulo", "ajupe", "ajupá", "ajuri", "ajuru", "ajuso", "ajóis", "alabo", "alabá", "alabê", "alaco", "alacá", "alada", "alafé", "alaga", "alago", "alaim", "alais", "alaje", "alajo", "alajá", "alali", "alalá", "alamã", "alana", "alano", "alapa", "alape", "alapi", "alapo", "alara", "alare", "alaro", "alasa", "alaso", "alaur", "alaus", "alava", "alavó", "alaze", "alazo", "alazã", "albas", "albis", "albiã", "albor", "albos", "albur", "albói", "alcaz", "alcei", "alcem", "alces", "alcos", "aldel", "aldeã", "aldol", "aleai", "alear", "alede", "aledo", "aledá", "aleei", "alefe", "alega", "alego", "aleia", "aleie", "aleio", "aleis", "alejá", "aleli", "alelo", "alemã", "alena", "aleou", "alepo", "alese", "aleso", "alesá", "aleta", "aleto", "alevá", "alfai", "alfam", "alfar", "alfas", "alfei", "alfem", "alfes", "alfil", "alfim", "alfir", "alfis", "alfol", "alfos", "alfou", "alfoz", "alfre", "alfur", "algal", "algar", "algaz", "alger", "algia", "algol", "algor", "algos", "algur", "alhal", "alhar", "alhas", "alheo", "alheá", "alhos", "alhur", "aliai", "aliam", "alias", "aliei", "aliem", "alies", "aligo", "aligá", "alija", "alije", "alijo", "alila", "alilo", "aliou", "alipa", "alipo", "alisa", "alise", "aliso", "aljus", "aljuz", "almez", "almos", "almuz", "alnas", "alnos", "aloca", "aloco", "alodê", "alofe", "aloja", "aloje", "alojo", "alolo", "alona", "alono", "alons", "alose", "alota", "alote", "aloto", "aloás", "aloés", "alpes", "alpão", "alsol", "alter", "alteá", "altim", "altor", "aluai", "aluam", "aluar", "aluas", "aluco", "aluda", "alude", "aludi", "aludo", "aluei", "aluem", "alues", "alufá", "aluga", "alugo", "aluio", "aluir", "aluiu", "alujá", "alume", "alumo", "alumá", "alune", "aluns", "aluou", "alupe", "alupo", "alupá", "alute", "aluto", "alutá", "aluxe", "aluxo", "aluxá", "aluza", "aluze", "aluzi", "aluzo", "aluía", "aluís", "alvar", "alvas", "alves", "alveá", "alvio", "alvor", "alvão", "alçai", "alçam", "alças", "alçou", "alçuz", "alção", "aléus", "amaca", "amaci", "amado", "amadu", "amaga", "amais", "amali", "amalá", "amalé", "amame", "amamo", "amamu", "amane", "amano", "amaná", "amapá", "amara", "amare", "amaro", "amará", "amate", "amato", "amatá", "amava", "ambel", "ambia", "ambie", "ambil", "ambio", "ambir", "ambis", "ambom", "amboá", "ambre", "ambro", "ambrã", "ambus", "ambuá", "ambuí", "ambão", "ambés", "ameai", "amear", "ameba", "ameei", "ameia", "ameie", "ameio", "ameis", "ameju", "amela", "amelo", "amelê", "amemo", "amena", "ameou", "amete", "ameça", "amial", "amiba", "amibo", "amida", "amide", "amiga", "amigo", "amila", "amilo", "amima", "amime", "amimo", "amina", "amine", "amino", "amins", "amish", "amita", "amite", "amito", "amoie", "amoio", "amoiá", "amoja", "amoje", "amojo", "amola", "amole", "amolo", "amome", "amomo", "amomá", "amone", "amono", "amoná", "amori", "amoro", "amoré", "amota", "amote", "amoto", "amova", "amove", "amovi", "amovo", "ampas", "amuai", "amuam", "amuar", "amuas", "amuca", "amuei", "amuem", "amues", "amuos", "amuou", "amura", "amuri", "amuro", "amurê", "amusa", "amuso", "amuxã", "améns", "amões", "anabi", "anabó", "anaco", "anacá", "anacé", "anafa", "anafe", "anafo", "anago", "anagá", "anaiá", "anajá", "anajé", "aname", "anamo", "anani", "anano", "ananá", "anata", "anate", "anati", "anato", "anauê", "anavi", "ancas", "anceu", "ancha", "anche", "ancho", "ancil", "ancis", "anciã", "ancol", "ancos", "andai", "andam", "andas", "andei", "andem", "andes", "andim", "andoa", "andoe", "andoo", "andor", "andou", "andua", "andus", "andós", "aneai", "anear", "anebo", "anedo", "aneei", "anega", "anego", "aneia", "aneie", "aneio", "anejo", "anela", "anele", "anelo", "anema", "aneou", "anesa", "anete", "aneto", "anexa", "anexe", "anexo", "aneza", "angas", "angaá", "angaú", "angel", "angla", "anglo", "angor", "angul", "angus", "anhos", "anhás", "anias", "aniba", "anibu", "anide", "anido", "anidá", "anila", "anile", "anilo", "anima", "anime", "animi", "animo", "anina", "anine", "anino", "anisa", "anise", "aniso", "anita", "anite", "anixi", "anixo", "anião", "anjão", "anoas", "anoia", "anoja", "anoje", "anojo", "anona", "anori", "anosa", "anoso", "anota", "anote", "anoto", "anove", "anovo", "anová", "ansar", "ansas", "antai", "antal", "antam", "antar", "antas", "antei", "antem", "antia", "antos", "antou", "antre", "antro", "antão", "anuam", "anuas", "anuaí", "anuem", "anuir", "anuis", "anuiu", "anuiá", "anujá", "anula", "anule", "anulo", "anuns", "anuri", "anuro", "anuus", "anuía", "anuís", "anzom", "anãos", "anãze", "anãzo", "anãzá", "anóis", "aoqui", "aorta", "aotos", "aoíta", "apaga", "apago", "apaje", "apajo", "apajá", "apamá", "apana", "apapá", "apara", "apare", "aparo", "apart", "apaís", "apeai", "apear", "apecu", "apede", "apedo", "apedá", "apeei", "apega", "apego", "apeia", "apeie", "apeio", "apeje", "apejo", "apejá", "apela", "apele", "apelo", "apena", "apene", "apeno", "apeou", "apera", "apere", "apero", "aperu", "apeté", "apiaá", "apicu", "apine", "apino", "apiná", "apiol", "apipa", "apipe", "apipo", "apita", "apite", "apito", "apitu", "apitã", "apião", "apoas", "apoda", "apofe", "apoia", "apoie", "apoio", "apois", "apoja", "apoje", "apojo", "apolo", "aporá", "apota", "apraz", "apres", "apreá", "aproa", "aproe", "aproo", "aptai", "aptam", "aptar", "aptas", "aptei", "aptem", "aptes", "aptos", "aptou", "apuai", "apuam", "apuar", "apuas", "apuei", "apuem", "apues", "apuié", "apule", "apuou", "apupa", "apupe", "apupo", "apura", "apure", "apuro", "apuís", "apõem", "apões", "aqueu", "aquém", "arabi", "arabu", "arabá", "araci", "aracu", "arada", "arade", "arado", "arais", "araiá", "araió", "araiú", "arale", "aramo", "aramá", "aranã", "arapu", "arara", "arari", "arati", "aratu", "aratá", "araus", "arauá", "araué", "arava", "aravo", "araxá", "araza", "araçá", "arbim", "arcai", "arcal", "arcam", "arcas", "arcaz", "archa", "arché", "arcou", "arcte", "arcto", "arctá", "arcue", "arcuo", "arcuá", "ardam", "ardas", "ardei", "ardem", "ardes", "ardeu", "ardia", "ardil", "ardis", "ardra", "areai", "arear", "areca", "aredê", "areei", "areie", "areio", "areis", "areja", "areje", "arejo", "arelo", "aremo", "arene", "areno", "areol", "areou", "arepa", "arerê", "aretu", "areão", "arfai", "arfam", "arfar", "arfas", "arfei", "arfem", "arfes", "arfil", "arfir", "arfis", "arfou", "arfur", "argal", "argas", "argau", "argel", "argol", "argos", "argot", "argua", "argue", "argui", "arguo", "argão", "argém", "ariai", "ariam", "ariar", "aribé", "aricu", "aricá", "ariei", "ariem", "arife", "arigó", "arila", "arilo", "arimo", "arimã", "ariná", "ariou", "aripa", "aripe", "aripo", "ariri", "arite", "ariti", "arito", "aritá", "arjoe", "arjoo", "arjoz", "arjoá", "arjão", "armai", "armam", "armas", "armei", "armem", "armes", "armim", "armio", "armou", "armum", "armur", "armão", "arméu", "arnal", "arnaz", "arnis", "arnês", "arocá", "arola", "arolo", "arome", "aromo", "aroto", "arpai", "arpam", "arpar", "arpas", "arpei", "arpem", "arpes", "arpeá", "arpoa", "arpoe", "arpoo", "arpou", "arpua", "arpue", "arpuo", "arpão", "arpéu", "arque", "arqui", "arral", "array", "arraí", "arrer", "arres", "arreu", "arreá", "arria", "arrie", "arrio", "arrió", "arros", "arrue", "arruo", "arruá", "arruí", "arrás", "arses", "arsos", "artro", "artão", "aruaí", "aruaú", "arubé", "aruca", "aruga", "arujo", "arumã", "arupa", "aruru", "arurá", "aruto", "aruás", "arués", "arval", "arvas", "arvoa", "arvoe", "arvoo", "arxai", "arxam", "arxar", "arxas", "arxei", "arxem", "arxes", "arxou", "arzel", "arção", "aréus", "arões", "asada", "asado", "asais", "asamo", "asana", "asara", "asase", "asava", "ascal", "ascos", "ascra", "ascue", "ascuo", "ascás", "aseia", "aseis", "aselo", "asemo", "aseno", "aseus", "asiam", "asida", "asido", "asila", "asile", "asilo", "asimo", "asira", "asmas", "asmos", "asnai", "asnal", "asnam", "asnar", "asnas", "asnei", "asnem", "asnes", "asneá", "asnil", "asnis", "asnos", "asnou", "aspai", "aspam", "aspar", "aspei", "aspem", "aspes", "aspeá", "aspou", "aspra", "aspre", "assai", "assam", "assas", "assaz", "assei", "assem", "asses", "asseá", "assis", "assoa", "assoe", "assoo", "assou", "assue", "assuo", "assuã", "astil", "astim", "astis", "astra", "astre", "asura", "atabi", "ataca", "ataco", "atada", "atado", "atagã", "atais", "atalá", "atame", "atamo", "atamã", "atane", "atano", "ataná", "atapu", "atara", "atará", "atarê", "atava", "ateai", "atear", "ateco", "ateei", "ateia", "ateie", "ateio", "ateis", "atela", "atemo", "ateou", "atero", "aterá", "atesa", "atese", "ateso", "ateus", "ateve", "atibe", "atibo", "atibá", "atice", "atida", "atido", "atile", "atilo", "atina", "atine", "atino", "atins", "atira", "atire", "atiro", "atita", "atite", "atito", "ativa", "ative", "ativo", "atiás", "atiça", "atiço", "atiçu", "atiés", "atled", "atoai", "atoam", "atoar", "atoas", "atobá", "atoei", "atoem", "atoes", "atofã", "atola", "atole", "atolo", "atone", "atoou", "atope", "atopo", "atopá", "atora", "atore", "atori", "atoro", "atotô", "atrai", "atraí", "atril", "atris", "atroa", "atroe", "atroo", "atros", "atuai", "atuam", "atuas", "atubo", "atuei", "atuem", "atues", "atufa", "atufe", "atufo", "atuir", "atuiu", "atuma", "atuns", "atuou", "atupa", "atupi", "atupo", "atura", "ature", "aturo", "aturé", "atuso", "atuía", "atuís", "atxim", "aténs", "atóis", "auaiú", "auari", "auati", "auaçu", "auaís", "audaz", "aueti", "aueto", "aueté", "aufué", "augai", "augam", "augar", "augas", "auges", "augir", "augiu", "augou", "augue", "auiba", "auina", "auiti", "aujos", "aulam", "aulem", "auleu", "aulia", "aulir", "auliu", "aulos", "aunai", "aunam", "aunar", "aunas", "aunei", "aunem", "aunes", "aunou", "aurai", "aural", "auram", "aurar", "auras", "aurei", "aurem", "aures", "auria", "aurir", "auris", "auriu", "aurou", "ausco", "ausia", "ausio", "ausos", "austo", "austá", "ausão", "autua", "autue", "autuo", "auuva", "auxia", "auçás", "aução", "avacá", "avais", "avaiú", "avale", "avalo", "avalá", "avana", "avano", "avant", "avari", "avaro", "avará", "avaré", "avate", "avati", "avato", "avatá", "aveal", "aveio", "avele", "avelo", "avena", "aveus", "avexa", "avexe", "avexo", "aveza", "aveze", "avezo", "aveão", "aviai", "aviam", "aviar", "avias", "avide", "aviei", "aviem", "avier", "avies", "avile", "avilo", "avimo", "avios", "aviou", "avirá", "avisa", "avise", "aviso", "avita", "avito", "avium", "aviva", "avive", "avivo", "aviús", "avoai", "avoam", "avoar", "avoas", "avoca", "avoco", "avoei", "avoem", "avoes", "avoou", "avosa", "avose", "avoso", "avoão", "avéns", "awuna", "axabó", "axexê", "axial", "axina", "axino", "axiri", "axoxô", "axura", "axuás", "azabe", "azada", "azado", "azaga", "azaia", "azais", "azalá", "azamo", "azapa", "azara", "azare", "azaro", "azavá", "azeda", "azede", "azedo", "azegi", "azeis", "azemo", "azera", "azere", "azeri", "azero", "azevá", "aziar", "azias", "azibó", "azida", "azina", "azoai", "azoam", "azoar", "azoas", "azoei", "azoem", "azoes", "azola", "azoma", "azono", "azoou", "azota", "azote", "azoto", "azubo", "azuis", "azula", "azule", "azulo", "azure", "azuro", "azuru", "azurá", "azóis", "açacu", "açalá", "açame", "açamo", "açape", "açapo", "açapá", "açaís", "açobe", "açobo", "açobá", "açoca", "açoda", "açodo", "açora", "açubá", "açuda", "açula", "açule", "açulo", "açumi", "aêneo", "aívas", "aïoli", "aônia", "aônio", "aúnos", "aúste", "baais", "baali", "baaus", "babai", "babal", "babam", "babas", "babau", "babei", "babel", "babem", "baber", "babes", "babeá", "babiá", "bable", "bablá", "babou", "babua", "babul", "babus", "babuí", "babás", "babão", "bacaa", "bacal", "bacar", "bachi", "bacie", "bacio", "bacta", "bacus", "bacão", "badal", "badas", "badil", "badio", "badis", "bador", "badua", "badém", "badés", "badós", "baeco", "baelé", "baenã", "baeta", "bafai", "bafam", "bafar", "bafas", "bafei", "bafem", "bafes", "bafio", "bafos", "bafou", "bafum", "bagai", "bagam", "bagar", "bagas", "bagem", "bages", "bageá", "bagis", "bagoe", "bagoo", "bagos", "bagou", "bagre", "bague", "bagus", "baguá", "bahia", "baiai", "baiam", "baiar", "baias", "baiaú", "baibe", "baico", "baicá", "baiei", "baiem", "baies", "baila", "baile", "bailo", "baios", "baiou", "baire", "bairi", "bairu", "bairã", "baite", "baixa", "baixe", "baixo", "baião", "bajai", "bajam", "bajar", "bajas", "bajei", "bajem", "bajes", "bajeá", "bajia", "bajou", "bajus", "balam", "balar", "balau", "balba", "balbo", "balda", "baldo", "balem", "bales", "baleã", "balga", "balha", "balhe", "balho", "balia", "balim", "balio", "balir", "balis", "baliu", "baloe", "baloo", "balou", "baloá", "balse", "balso", "balta", "balto", "balça", "balço", "bambo", "bambê", "bames", "banam", "banar", "banas", "banca", "banco", "bande", "banem", "banes", "banga", "bango", "bangs", "bangu", "banha", "banhe", "banho", "bania", "banis", "baniu", "banja", "bansá", "banti", "banto", "bantu", "bantá", "banté", "banza", "banzo", "banzé", "baobá", "bapos", "bapta", "bapte", "baraú", "barbe", "barbi", "barbo", "barda", "barde", "bardo", "barga", "bargu", "baria", "baril", "barim", "baris", "barma", "baroa", "barol", "baros", "barra", "barre", "barri", "barro", "barsi", "barsó", "barus", "barém", "basai", "basal", "basam", "basar", "basas", "basca", "basei", "basem", "bases", "baseá", "basic", "basim", "basou", "basso", "bassê", "basta", "baste", "basti", "basto", "basua", "batam", "batas", "batch", "batei", "batel", "batem", "bates", "bateu", "batia", "batim", "batmo", "batos", "batás", "batão", "bauis", "bauma", "baumê", "bauru", "bauás", "bavás", "baxim", "baxis", "baxás", "bazas", "bazos", "bazés", "baças", "baços", "baúle", "baúna", "beabá", "beach", "bebam", "bebas", "bebei", "bebem", "bebes", "bebeu", "bebra", "bebum", "becas", "beche", "becos", "bedel", "bedeá", "bedro", "bedum", "beduí", "bedão", "bedém", "befes", "befás", "begbê", "begue", "begum", "beias", "beice", "beige", "beija", "beije", "beiji", "beijo", "beiju", "beira", "beire", "beiro", "beiru", "beisa", "beiça", "beiço", "bejas", "bejel", "bejes", "bejis", "belau", "belaz", "belde", "beldo", "beldá", "belfa", "belfo", "belga", "belho", "beliz", "belro", "belão", "belém", "belês", "bemas", "bemba", "bembe", "bemol", "benas", "benco", "bencu", "benda", "bendi", "bendé", "bendó", "benga", "benge", "bengo", "benhã", "benim", "benos", "benta", "bento", "benza", "benze", "benzi", "benzo", "bença", "beola", "beque", "beras", "berba", "berbe", "berce", "berda", "beres", "bergo", "berma", "berna", "berne", "berno", "berol", "beroé", "berra", "berre", "berro", "berta", "berus", "berça", "beréu", "berós", "bespa", "bespe", "bessi", "besso", "beste", "besto", "betai", "betal", "betam", "betar", "betas", "betei", "betem", "betes", "betle", "betol", "betom", "betou", "betre", "betsi", "betum", "betus", "betão", "betói", "bevos", "bezar", "bezau", "bezoa", "bezoe", "bezoo", "beéns", "biaba", "biaco", "biais", "biami", "biana", "biari", "biaro", "biata", "bibas", "bibes", "bibis", "bibiá", "bibió", "biblá", "bibos", "bibra", "bibói", "bicai", "bical", "bicam", "bicar", "bicas", "bicha", "biche", "bicou", "bicus", "bicão", "bidas", "bidum", "bidus", "bidão", "bidês", "bidós", "biela", "biene", "bieno", "bifai", "bifam", "bifar", "bifas", "bifei", "bifem", "bifes", "bifou", "bifre", "bifus", "bigas", "bigla", "bigle", "bigue", "bigus", "biguá", "bijou", "bijus", "bijuí", "bilai", "bilam", "bilar", "bilas", "bilei", "bilem", "biles", "bilha", "bilhó", "bilmó", "bilou", "bilra", "bilre", "bilro", "bilva", "bimar", "bimba", "bimbe", "bimbo", "bimes", "bimos", "bimão", "binai", "binam", "binar", "binas", "binda", "binde", "binei", "binem", "bines", "binga", "binha", "biniú", "binou", "bioba", "bioco", "biose", "biota", "bipai", "bipam", "bipar", "bipas", "bipei", "bipem", "bipes", "bipou", "bique", "biras", "birba", "birgo", "biris", "birmã", "birre", "birro", "birus", "birço", "birôs", "bisai", "bisam", "bisar", "bisas", "bisbi", "bisca", "bisco", "bisei", "bisel", "bisem", "bises", "bisga", "bisma", "bisou", "bispa", "bispe", "bisso", "bisão", "bitai", "bitam", "bitar", "bitas", "bitei", "bitem", "bites", "bitou", "bitre", "bitro", "bitrá", "biurá", "bivas", "bixas", "bizas", "bizer", "bizus", "black", "blast", "blasé", "blata", "blaus", "blefa", "blefe", "blefo", "blend", "bleno", "blesa", "bleso", "blini", "blitz", "bloca", "blogs", "bluca", "bluco", "blues", "blufo", "blush", "boaba", "boada", "boado", "boais", "boamo", "boana", "boane", "boara", "boari", "boata", "boava", "boaço", "bobal", "bobam", "bobar", "bobas", "bobaí", "bobei", "bobem", "bobes", "bobeá", "bobos", "bobou", "bobão", "bocai", "bocam", "bocar", "bocei", "bocel", "bocem", "boces", "bocha", "boche", "bocho", "bocim", "bocoa", "bocou", "bocué", "bocão", "bocós", "bodai", "bodam", "bodar", "bodas", "bodei", "bodem", "bodes", "bodis", "bodou", "bodum", "bodão", "bodós", "boeio", "boeis", "boemo", "boeta", "bofai", "bofam", "bofar", "bofas", "bofei", "bofem", "bofes", "bofou", "bofós", "bogai", "bogam", "bogar", "bogas", "bogou", "bogue", "bogum", "bogós", "boiai", "boiam", "boiar", "boias", "boibi", "boice", "boiei", "boiem", "boies", "boiga", "boiil", "boiis", "boimé", "boios", "boiou", "boire", "boiro", "boiru", "boirá", "boita", "boite", "boião", "boiça", "boiço", "boiçu", "bojai", "bojam", "bojar", "bojas", "bojei", "bojem", "bojes", "bojos", "bojou", "bojuí", "bojão", "bolai", "bolam", "bolar", "bolas", "bolbo", "bolce", "bolco", "boldo", "bolei", "bolem", "boles", "boleá", "bolgo", "bolhe", "bolhó", "bolim", "bolis", "bolor", "bolou", "bolse", "bolão", "bolça", "boléu", "bomas", "bombe", "bombo", "bonce", "bonda", "bondi", "bondo", "bonga", "bonge", "bongô", "bonhe", "bonho", "bonhá", "bonjo", "bonza", "bonze", "bonzo", "bonço", "bonçá", "boons", "boope", "boorá", "boque", "boral", "borca", "borco", "borda", "borde", "bordo", "bores", "borga", "borgo", "borla", "borna", "borne", "borno", "bornu", "boroa", "boros", "borra", "borre", "borro", "borás", "bosas", "bosca", "boseá", "bosis", "bosse", "bosso", "bosta", "boste", "bosto", "bosão", "bosós", "botai", "botal", "botam", "botas", "botei", "botem", "botes", "botim", "botió", "botoe", "botoo", "botos", "botou", "botoá", "bouba", "bouce", "bouda", "bouga", "boure", "bouri", "bouro", "bourá", "bouça", "bouço", "boxai", "boxam", "boxar", "boxas", "boxei", "boxem", "boxes", "boxeá", "boxou", "bozum", "bozós", "boçus", "boêla", "boêlo", "braba", "brabe", "brabo", "brada", "brade", "brado", "braga", "braia", "brais", "brajá", "brala", "brama", "brame", "brami", "bramo", "brase", "braso", "braus", "brave", "braça", "brcas", "breai", "break", "breal", "brear", "breba", "breca", "breco", "breda", "bredo", "breei", "brefa", "brefo", "breia", "breie", "breio", "breja", "brema", "breou", "brete", "bretã", "breus", "breva", "breza", "brezo", "brial", "brias", "briba", "brica", "brida", "bride", "brido", "bries", "briga", "brigo", "brins", "briol", "brios", "brise", "briso", "brita", "brite", "brito", "brive", "briza", "broas", "broca", "broco", "broda", "brole", "brolo", "brolá", "broma", "brome", "bromo", "brota", "brote", "broto", "brown", "broxa", "broxe", "broxo", "bruar", "bruaá", "bruco", "brugo", "bruma", "brume", "brumo", "bruna", "brune", "bruni", "bruno", "bruxe", "bruéu", "bríea", "bríon", "buada", "buais", "buala", "buama", "buana", "buano", "buara", "buase", "buava", "buaçu", "bubal", "bubis", "bubos", "bubus", "bubão", "bubãs", "buchu", "bucil", "bucim", "bucis", "bucle", "bucre", "bucus", "bucué", "bucuí", "bucãs", "budas", "budoe", "budoo", "budoá", "budus", "buena", "bueno", "bueta", "buete", "bufai", "bufam", "bufar", "bufas", "bufei", "bufem", "bufes", "bufia", "bufir", "bufiu", "bufos", "bufou", "bufra", "buggy", "bugia", "bugie", "bugio", "bugle", "bugra", "bugre", "buirá", "bujas", "bujis", "bujão", "bujés", "bulai", "bulam", "bular", "bulas", "buldo", "bulei", "bulem", "bules", "bulha", "bulhe", "bulho", "bulia", "bulio", "bulir", "bulis", "buliu", "bulou", "bumba", "bumbe", "bumbo", "bumes", "bunas", "bunce", "bunde", "bundo", "bunga", "bungo", "bunhe", "bunho", "bunhá", "buquê", "burca", "burdo", "burel", "burgo", "burgá", "buril", "buris", "burla", "burle", "burlo", "burna", "burne", "burni", "burnu", "burnó", "buros", "burre", "bursa", "burum", "burus", "burué", "burão", "burço", "burés", "busca", "busco", "busil", "busis", "busos", "busso", "butai", "butam", "butar", "butas", "butau", "butei", "butem", "butes", "butil", "butim", "butir", "butis", "butiá", "butos", "butou", "butre", "butua", "buuno", "buvar", "buvas", "buxal", "buxos", "buzas", "buzia", "buzie", "buzis", "buzos", "buzus", "buços", "buéns", "buíam", "buías", "buída", "buído", "buíge", "buílo", "bytes", "bácis", "bádur", "báfer", "báfia", "bágoa", "bália", "bário", "básio", "básis", "bátis", "bâmbi", "bâmia", "bânia", "bânua", "bécua", "bégua", "bélia", "bélio", "bélis", "bélua", "bélus", "béris", "bérix", "bétel", "bétis", "bênia", "bícia", "bíduo", "bíguo", "bília", "bílis", "bíter", "bítio", "bítis", "bívio", "bóbis", "bócio", "bófia", "bórax", "bóson", "bóton", "bóxer", "bôers", "búfri", "bútea", "búteo", "bútio", "búzio", "caaba", "caacó", "caaeé", "caaia", "caama", "caami", "caapi", "caaxi", "caaçu", "cabal", "cabas", "cabaz", "cabaú", "cabei", "cabem", "cabes", "cabeá", "cabia", "cabis", "cabiú", "cabla", "cable", "cablo", "caboz", "cabre", "cabro", "cabur", "cabus", "cabuí", "cacei", "cacem", "caces", "cacha", "cache", "cachi", "cachu", "cacim", "caciz", "cacre", "cacto", "cacus", "cadai", "cadas", "cades", "cadeá", "cados", "cadoz", "caduê", "caeté", "cafal", "cafeo", "cafiz", "cafra", "cafre", "cafta", "cafua", "cafus", "cafuz", "cagai", "cagam", "cagar", "cagas", "cagom", "cagou", "cagoã", "cague", "cagão", "caiai", "caiam", "caiar", "caias", "caiba", "caibo", "caicó", "caide", "caiei", "caiem", "caies", "caiou", "caipa", "cairi", "cairo", "cairá", "cairé", "caité", "caitó", "caiuá", "caiué", "caixe", "caiçu", "caiçá", "cajus", "cajuá", "cajuí", "cajás", "cajão", "calai", "calam", "calas", "calau", "calca", "calce", "calco", "calei", "calem", "cales", "caleá", "calfe", "calha", "calhe", "calho", "calim", "calis", "caliz", "calme", "calom", "calos", "calou", "calpa", "calpo", "calta", "calua", "calum", "calus", "calve", "calão", "calça", "calço", "camal", "camar", "camau", "camaá", "camba", "cambe", "cambo", "cameá", "camim", "camol", "campa", "campi", "campé", "camuá", "camão", "camés", "canas", "canaz", "cancã", "canda", "cande", "cando", "canez", "caneá", "canga", "cango", "cangu", "canha", "canho", "canis", "canje", "canjo", "canos", "canoé", "cansa", "canse", "canso", "canta", "cante", "canto", "cantá", "canvi", "canvo", "canzo", "canzá", "caoba", "caobi", "caoco", "caori", "capai", "capam", "capar", "capas", "capei", "capem", "capes", "capiá", "capom", "capou", "capro", "capsa", "capso", "capta", "capte", "capto", "caput", "capão", "capôs", "caral", "carda", "carde", "cardi", "cardo", "carel", "careá", "caria", "caril", "caris", "cariz", "carií", "carió", "cariú", "carme", "carmo", "carna", "carno", "caroá", "caroé", "carpe", "carpi", "carpo", "carra", "carri", "carrê", "carte", "carto", "caruá", "carva", "carvi", "carão", "carés", "caréu", "casai", "casam", "casas", "casbá", "casei", "casem", "cases", "caseá", "casou", "cassa", "casse", "casso", "casti", "casto", "casão", "catai", "catam", "catas", "catau", "catch", "catei", "catem", "cates", "cateá", "catim", "catis", "catle", "catou", "catre", "catur", "catuá", "catão", "caubi", "cauim", "cauló", "caumã", "cauna", "caupi", "cauri", "cauré", "causa", "cause", "causo", "cauta", "cauto", "cauxi", "cauás", "cauís", "cavai", "cavam", "cavas", "cavei", "cavem", "caves", "cavie", "cavio", "cavis", "cavou", "cavum", "cavus", "cavão", "caxas", "caxes", "caxim", "caxos", "caxuá", "caxão", "cazol", "caçai", "caçam", "caças", "caçoa", "caçoe", "caçoo", "caçou", "caçuá", "caíam", "caías", "caíba", "caído", "caímo", "caíra", "caíva", "caóis", "caúba", "caúno", "ceada", "ceado", "ceais", "ceamo", "ceara", "ceará", "ceata", "ceava", "cebar", "cebas", "cebos", "cecal", "cecas", "ceceá", "cecos", "cecém", "cecés", "cedam", "cedas", "cedei", "cedem", "cedes", "cedeu", "cedia", "cedém", "ceeis", "ceemo", "cefeu", "cefos", "cegai", "cegam", "cegar", "cegas", "cegou", "cegue", "ceiam", "ceias", "ceiba", "ceibo", "ceiem", "ceies", "ceifa", "ceife", "ceifo", "ceira", "ceita", "ceiva", "ceive", "ceivo", "celas", "celga", "celha", "cello", "celos", "celsa", "celso", "celte", "celve", "celvo", "celvá", "celés", "cemba", "cenes", "cengo", "cenho", "ceniz", "cenos", "cenra", "centi", "ceoma", "ceomo", "ceote", "ceoto", "ceotá", "cepas", "cepos", "ceque", "cerai", "ceram", "cerar", "ceras", "cerca", "cerce", "cerco", "cerda", "cerdo", "cerei", "cerem", "ceres", "cerge", "cergi", "cerja", "cerjo", "cerna", "cerni", "cerno", "cerol", "cerou", "cerra", "cerre", "cerro", "certe", "cerus", "cerva", "cerze", "cerzi", "cerós", "cesos", "cessa", "cesse", "cesso", "cetal", "cetas", "cetil", "cetis", "cetol", "cetos", "cetra", "cevai", "cevam", "cevar", "cevas", "cevei", "cevem", "ceves", "cevou", "cevão", "ceção", "chabu", "chabã", "chabó", "chace", "chada", "chaga", "chago", "chais", "chaiá", "chajá", "chala", "chalo", "chama", "chame", "chamo", "chana", "chans", "chape", "chapo", "chara", "charo", "charu", "chaté", "chaus", "chauá", "chavo", "chaça", "chaço", "chaém", "chebê", "checa", "checo", "cheda", "chede", "chefa", "chega", "chego", "chela", "chena", "chepe", "cheta", "cheto", "chevá", "chiai", "chiam", "chiar", "chias", "chiba", "chibo", "chibé", "chica", "chice", "chico", "chicu", "chiei", "chiem", "chies", "chifu", "chila", "chile", "chili", "chilo", "chima", "chimu", "china", "chine", "chino", "chins", "chiou", "chipa", "chipo", "chips", "chira", "chiru", "chita", "chite", "chito", "chius", "chiuô", "chião", "choca", "choco", "chogó", "chois", "chola", "chole", "cholo", "chona", "chono", "choné", "chopa", "chope", "chopi", "chopp", "chora", "chore", "choro", "chota", "chote", "choti", "choto", "chova", "chove", "chovi", "chovo", "choça", "chuce", "chufa", "chufe", "chufo", "chuis", "chula", "chulo", "chulé", "chuna", "chupa", "chupe", "chupo", "churi", "chuta", "chute", "chuto", "chuxo", "chuás", "chuça", "chuço", "chués", "chãos", "chões", "ciada", "ciado", "ciais", "ciamo", "ciana", "ciano", "ciara", "ciato", "ciava", "cibai", "cibam", "cibar", "cibas", "cibei", "cibem", "ciber", "cibes", "ciboa", "cibou", "cibum", "cicas", "cicia", "cicie", "cicio", "cicla", "cicro", "cides", "cidno", "cidra", "cidró", "cidão", "cidãs", "cieis", "ciemo", "ciena", "ciese", "cifai", "cifam", "cifar", "cifas", "cifei", "cifem", "cifes", "cifos", "cifou", "cifra", "cifre", "cifro", "cifão", "cigas", "cigno", "cilas", "cileu", "cilha", "cilhe", "cilho", "cilos", "cimas", "cimba", "cimbi", "cimbó", "cimno", "cimol", "cimos", "cimue", "cimés", "cinas", "cinca", "cinda", "cinde", "cindi", "cindo", "cines", "cinge", "cingi", "cinja", "cinjo", "cinor", "cinte", "cinze", "cinzo", "cioba", "cioco", "ciona", "ciosa", "cioso", "cioto", "cipoa", "cipoe", "cipoo", "cipós", "ciras", "cirba", "cirna", "cirno", "cirpo", "cirro", "cirso", "cirto", "cirza", "cirze", "cirzo", "cirão", "cisai", "cisam", "cisar", "cisas", "cisca", "cisco", "cisei", "cisel", "cisem", "cises", "cisma", "cisme", "cismo", "cisou", "cispe", "cispo", "cispá", "cisso", "cista", "ciste", "cisão", "citai", "citam", "citas", "citei", "citem", "cites", "citeu", "citna", "citou", "citro", "ciuma", "ciumo", "cizel", "ciões", "ciúro", "clada", "clade", "clado", "clama", "clame", "clamo", "clape", "claus", "clava", "clavo", "clean", "clear", "clena", "clica", "clico", "clida", "clide", "clina", "cline", "clino", "clipo", "clips", "clipá", "clise", "cliso", "clisá", "clita", "cliva", "clive", "clivo", "cloca", "cloco", "clona", "clono", "clora", "clore", "clori", "close", "cloto", "clown", "clusa", "cluso", "cluva", "cnico", "cnute", "coaco", "coada", "coado", "coage", "coagi", "coais", "coaja", "coajo", "coala", "coale", "coamo", "coara", "coará", "coate", "coati", "coato", "coatá", "coava", "coaxa", "coaxe", "coaxi", "coaxo", "cobas", "cobol", "cobos", "cobra", "cobre", "cobri", "cobro", "cobói", "cocal", "cocas", "cocei", "cocem", "coces", "cocha", "coche", "cocho", "cocoa", "cocos", "cocre", "cocta", "cocto", "cocão", "codal", "codas", "codos", "codrá", "codés", "coeis", "coemo", "coera", "coere", "coeri", "coero", "coesa", "coeva", "coevo", "cofap", "cofie", "cofió", "cofos", "cogei", "cogem", "coger", "coges", "cogeu", "cogie", "cogio", "coias", "coibi", "coice", "coifa", "coife", "coifo", "coima", "coime", "coimo", "coina", "coine", "coino", "coins", "coiol", "coipu", "coira", "coiro", "coise", "coiso", "coita", "coite", "coito", "coiós", "cojam", "cojas", "colai", "colam", "colas", "colau", "colco", "colei", "colem", "coles", "coleá", "colga", "colgo", "colha", "colhe", "colhi", "colho", "colim", "colir", "colma", "colme", "colmo", "colom", "color", "colos", "colou", "colpo", "colte", "colto", "coltá", "colvá", "colza", "comam", "comas", "comba", "combe", "combi", "combo", "comei", "comem", "comes", "comeu", "comia", "comil", "comis", "compô", "comua", "comão", "conas", "conca", "conce", "conda", "condi", "condo", "cones", "confa", "conga", "conha", "conho", "conio", "conja", "conos", "conta", "conte", "conto", "conço", "cooba", "coobe", "coobo", "copai", "copal", "copam", "copar", "copei", "copel", "copem", "copes", "copia", "copie", "copio", "copla", "copou", "copra", "copro", "copta", "copte", "copto", "copus", "copão", "coque", "corai", "coram", "coras", "cordo", "corei", "corem", "cores", "coreu", "coreá", "corga", "corgo", "coria", "coril", "corla", "cormo", "corna", "corne", "coroa", "coroe", "coroo", "coros", "corou", "corra", "corre", "corri", "corro", "corré", "corsa", "corso", "corta", "corte", "corti", "corto", "corus", "corva", "corão", "corça", "corço", "cosam", "cosas", "cosca", "cosco", "cosec", "cosei", "cosem", "coser", "coses", "coseu", "cosia", "cospe", "cossa", "cossi", "cosso", "costo", "cotai", "cotam", "cotar", "cotas", "cotei", "cotem", "cotes", "cotia", "cotie", "cotil", "cotim", "cotio", "cotis", "cotom", "cotos", "cotou", "cotra", "cotão", "coube", "couce", "couco", "coulo", "couma", "coupé", "coura", "cousa", "couse", "couso", "couta", "coute", "couto", "couvo", "couvá", "couzo", "couça", "coval", "covas", "cover", "coveá", "covil", "covis", "covos", "covoá", "covus", "covão", "coxal", "coxes", "coxeá", "coxia", "coxim", "coxos", "coxão", "cozam", "cozas", "cozei", "cozem", "cozer", "cozes", "cozeu", "cozia", "coçai", "coçam", "coças", "coçou", "coíba", "coíbe", "coíbo", "craca", "crack", "crada", "crapô", "crato", "crauá", "crava", "crave", "cravo", "crawl", "creca", "creda", "crede", "creek", "creem", "crega", "creia", "creio", "creié", "crejé", "crela", "crele", "crelo", "crema", "creme", "cremo", "crena", "crene", "creno", "crera", "crerá", "creta", "crete", "creto", "creve", "criai", "criam", "crias", "crica", "crico", "crida", "crido", "criei", "criem", "cries", "crila", "crina", "crino", "criou", "criso", "crisá", "crito", "criva", "crive", "crivo", "croas", "croca", "croce", "croco", "croia", "croio", "croma", "crome", "cromo", "crono", "crons", "cross", "crota", "croxa", "cruas", "cruca", "cruda", "crude", "crudo", "cruga", "crume", "cruor", "crupe", "cruro", "cruta", "cruto", "cruza", "cruze", "cruzo", "crués", "cruós", "ctena", "cuaca", "cuada", "cuaga", "cuais", "cuaje", "cuale", "cualo", "cuane", "cuapa", "cuará", "cuati", "cuatá", "cuaxi", "cubai", "cubal", "cubam", "cubar", "cubas", "cubei", "cubem", "cubeo", "cubes", "cubis", "cubié", "cubiú", "cubla", "cubou", "cubra", "cubre", "cubro", "cubus", "cucai", "cucal", "cucam", "cucar", "cucas", "cucho", "cuchê", "cucis", "cucos", "cucou", "cucri", "cucus", "cudas", "cudes", "cudos", "cudus", "cudzu", "cueba", "cuele", "cuena", "cuera", "cufai", "cufam", "cufar", "cufas", "cufei", "cufem", "cufes", "cufou", "cugar", "cugie", "cugio", "cugiá", "cuias", "cuiba", "cuida", "cuide", "cuido", "cuile", "cuilo", "cuilá", "cuini", "cuins", "cuipé", "cuitá", "cuité", "cuitó", "cuião", "cuiús", "cujas", "cujes", "cujie", "cujio", "cujiá", "cujus", "culas", "culco", "culcá", "cules", "culis", "culna", "culpa", "culpe", "culpo", "cumaí", "cumba", "cumbo", "cumbu", "cumbé", "cumes", "cumim", "cumpô", "cumãs", "cunau", "cunca", "cunco", "cunha", "cunhe", "cunho", "cunos", "cunta", "cunto", "cunãs", "cuoze", "cuozo", "cuozá", "cupas", "cupaí", "cupez", "cupio", "cupis", "cupus", "cupão", "cupés", "cuque", "curai", "curam", "curas", "curau", "curca", "curda", "curdo", "curei", "curem", "cures", "curie", "curii", "curis", "curió", "curou", "curra", "curre", "curro", "curry", "cursa", "curse", "curso", "curta", "curte", "curti", "curto", "curul", "curuá", "curva", "curve", "curvo", "curão", "curós", "cusco", "cuscu", "cusma", "cuspa", "cuspe", "cuspi", "cuspo", "cusso", "custa", "custe", "custo", "cutas", "cutes", "cutia", "cutim", "cutiú", "cutra", "cutão", "cuvas", "cuvus", "cuxiú", "cuxus", "cuxás", "cuíca", "cuíce", "cuíne", "cuíra", "cácea", "cádis", "cálix", "cápea", "cápua", "cárus", "cávea", "cávia", "cândi", "cângi", "cânon", "cébio", "cébus", "cécum", "célea", "céleo", "célia", "célio", "cérea", "céreo", "céria", "cério", "céris", "césar", "césio", "cênio", "cênis", "círio", "cível", "cóana", "cóano", "cóbio", "cóbua", "cóbus", "cóchi", "códeo", "códex", "códio", "códon", "códão", "cófea", "cófia", "cógia", "cóleo", "cólia", "cólio", "cólis", "cólua", "cório", "córis", "cóxis", "côdea", "cômea", "cômio", "cúbio", "cúcio", "cúdia", "cúfea", "cúfia", "cúlea", "cúleo", "cúlex", "cúmel", "cúmis", "cúnea", "cúneo", "cúnia", "cúria", "cúter", "cútis", "dabio", "dabom", "dabos", "dabua", "dabus", "dabás", "dacar", "daces", "dacha", "dacma", "dacoa", "dacos", "dacpo", "dadas", "dador", "dadão", "dafne", "dagas", "daime", "dairo", "daião", "dalai", "dalas", "dalgo", "dalém", "damba", "dambe", "dambi", "damos", "dampa", "damui", "damão", "danai", "danam", "danar", "danas", "dance", "danda", "dando", "danei", "danem", "danes", "danou", "dante", "dança", "danço", "danês", "daraf", "darda", "darde", "darei", "darem", "dares", "darga", "daria", "darma", "darto", "darás", "darão", "dassa", "datai", "datal", "datam", "datar", "datas", "datei", "datem", "dates", "datou", "dauma", "davam", "davas", "daves", "daças", "dação", "dbase", "deada", "deado", "debai", "debam", "debar", "debas", "debei", "debem", "debes", "debou", "debye", "decai", "decas", "decaí", "decho", "decil", "decis", "decoa", "decoe", "decoo", "dedai", "dedal", "dedam", "dedar", "dedas", "dedei", "dedem", "dedes", "dedou", "deduz", "dedéu", "degas", "deias", "deilo", "deita", "deite", "deito", "deixa", "deixe", "deixo", "dejua", "delas", "delem", "deles", "delfo", "delia", "delir", "delis", "deliu", "demba", "dembe", "dembo", "demeá", "demos", "demão", "dendi", "dendo", "dendê", "dengo", "dense", "denta", "dento", "depus", "depôs", "depõe", "deque", "deram", "deras", "derby", "derem", "deres", "derma", "derme", "dermo", "deros", "derre", "desai", "desam", "desar", "desas", "desce", "desci", "desdi", "desdo", "desdá", "desei", "desem", "deses", "desma", "desmo", "desnu", "desou", "despe", "despi", "despô", "dessa", "desse", "desso", "desta", "deste", "desvi", "desvã", "desvê", "desça", "desço", "deteu", "detre", "detém", "detêm", "devam", "devas", "devei", "devem", "deves", "deveu", "devia", "devim", "devém", "devêm", "dewar", "deães", "deãos", "deões", "diaba", "diaco", "diafa", "diale", "diana", "diara", "diate", "diaus", "diazo", "dibos", "dibás", "dicai", "dicam", "dicar", "dicaz", "dicha", "dicou", "didal", "didis", "didot", "didás", "dieco", "dieno", "diese", "dieso", "diesá", "difas", "difos", "digam", "digar", "digas", "diger", "digna", "digne", "digno", "dijás", "dilam", "dilas", "dilos", "dilua", "dilui", "diluo", "diluí", "dimal", "dimas", "dimba", "dimeu", "dinar", "dinas", "dinca", "dinda", "dinde", "dindo", "dines", "dinga", "dingo", "dinié", "dinos", "dioga", "diogo", "diola", "dioma", "diona", "diopa", "diore", "diosa", "diose", "dioso", "diote", "dipas", "diple", "diplo", "dipso", "dirca", "direi", "diria", "diros", "dirrã", "dirua", "diruo", "diruí", "dirás", "dirão", "dirém", "disas", "disca", "disco", "disga", "disna", "dispa", "dispo", "disse", "dista", "diste", "disto", "disué", "ditai", "ditam", "ditas", "ditei", "ditem", "dites", "ditou", "ditua", "diuli", "diuti", "divos", "divão", "dixes", "dizei", "dizem", "dizes", "dizia", "dição", "dióis", "diúla", "diúso", "diúta", "djica", "djico", "djins", "djola", "dlins", "doada", "doado", "doais", "doamo", "doara", "doará", "doava", "dobai", "dobam", "dobar", "dobas", "dobei", "dobem", "dobes", "dobla", "doble", "dobou", "dobra", "dobre", "dobro", "docas", "docei", "docto", "docém", "dodol", "dodos", "dodói", "doeis", "doemo", "doera", "doerá", "dogal", "doges", "dogon", "dogre", "dogue", "dogôs", "doilo", "doira", "doire", "doiro", "dojos", "dolim", "dolis", "dolly", "dolor", "dolos", "dolés", "domai", "domam", "domas", "domba", "dombe", "dombo", "domei", "domem", "domes", "domos", "domou", "donas", "donda", "donde", "dondo", "donez", "doneá", "donga", "dongo", "donte", "dopai", "dopam", "dopar", "dopas", "dopei", "dopem", "dopes", "dopou", "doque", "doras", "dorca", "dorco", "dorir", "dorme", "dormi", "dormo", "dorna", "dosai", "dosam", "dosas", "dosei", "dosem", "doses", "doseá", "dosou", "dotai", "dotal", "dotam", "dotas", "dotei", "dotem", "dotes", "dotim", "dotou", "douda", "doudo", "doula", "douló", "douns", "doura", "doure", "douro", "douta", "douto", "doxas", "dozem", "dozão", "doçai", "doçal", "doçam", "doçar", "doçou", "doçus", "doíam", "doías", "doído", "draft", "draga", "drago", "dramo", "drapê", "drena", "drene", "dreno", "drias", "dribo", "drilo", "drink", "drive", "driça", "droca", "drofa", "droga", "drogo", "dromo", "drope", "drops", "drupa", "drusa", "druso", "druvá", "duais", "duala", "dualó", "duana", "dubla", "duble", "dublo", "dubos", "dubus", "dubás", "ducal", "duche", "ducho", "ducos", "ducrá", "ducto", "ducão", "dudas", "duela", "duele", "duelo", "dueta", "duete", "dueça", "dugas", "dugni", "dugão", "duina", "duins", "duipa", "dules", "dulia", "dumas", "dumba", "dumbo", "dumos", "dunam", "dunar", "dundu", "dunfa", "dunga", "dungô", "dunha", "duple", "durai", "dural", "duram", "duras", "duraz", "durbe", "durbo", "durbá", "durei", "durem", "dures", "durex", "durez", "durgá", "durim", "durma", "durmo", "durne", "durol", "durou", "durra", "durus", "durão", "dutos", "dutró", "duvol", "duzam", "duzas", "duzem", "duzes", "duzil", "duzir", "duzis", "duziu", "duzus", "duíta", "dzeta", "dácio", "dália", "dátil", "dâmar", "dânae", "dândi", "dânio", "début", "décor", "délia", "délio", "dérbi", "dévio", "déxia", "dêmia", "díada", "díade", "dídea", "dídia", "dídio", "dífia", "dínio", "díope", "dísel", "díxis", "dólio", "dólmã", "dória", "dório", "dóris", "dóxus", "dônax", "dônia", "dúbia", "dúbio", "dúnia", "dúrio", "dútis", "ealme", "ealmo", "ealmá", "eanto", "earco", "earcá", "ebame", "ebami", "ebani", "ebiri", "ebola", "ebole", "ebome", "ebomi", "ebula", "ebuli", "ecada", "ecado", "ecais", "ecamo", "ecapa", "ecara", "ecato", "ecava", "ecese", "ecfma", "ecler", "ecmas", "ecoai", "ecoam", "ecoas", "ecoei", "ecoem", "ecoes", "ecoou", "ecoto", "ecrãs", "ectal", "ectol", "ectos", "ecubo", "ecuru", "edace", "edade", "edema", "edens", "ederé", "edita", "edite", "edito", "edoma", "edono", "edras", "edros", "edtas", "educa", "educo", "edule", "edulo", "eduto", "eduza", "eduze", "eduzi", "eduzo", "efebo", "efipo", "eflua", "efluo", "efluí", "efuco", "efuns", "efuso", "egbás", "egbés", "egeia", "egesa", "egeus", "egeão", "egipã", "egles", "egros", "eguai", "eguam", "eguar", "eguci", "eguei", "egues", "eguns", "eguou", "eibas", "eicei", "eicem", "eices", "eicha", "eiche", "eichó", "eicos", "eidas", "eidos", "eimai", "eimam", "eimar", "eimas", "eimei", "eimem", "eimes", "eimou", "eiras", "eirol", "eirus", "eirós", "eitas", "eitos", "eivai", "eivam", "eivar", "eivas", "eivei", "eivem", "eives", "eivou", "eivão", "eixai", "eixam", "eixar", "eixas", "eixei", "eixem", "eixes", "eixou", "eixus", "eiçai", "eiçam", "eiçar", "eiças", "eiçou", "ejeta", "ejete", "ejeto", "ejuos", "elada", "elado", "elafá", "elais", "elami", "elamo", "elana", "elano", "elara", "elaus", "elava", "elche", "eleai", "elear", "elebó", "eledá", "eledê", "eleei", "elege", "elegi", "eleia", "eleie", "eleio", "eleja", "elejo", "elemi", "elemo", "elena", "eleou", "elepê", "eleto", "eleus", "eleva", "eleve", "elevo", "elfas", "elfos", "elias", "elida", "elide", "elidi", "elido", "elige", "eligi", "elija", "elijo", "elime", "elina", "eliri", "elixa", "elixe", "elixi", "elixo", "elmos", "elona", "elope", "eluam", "eluas", "eluda", "elude", "eludi", "eludo", "eluem", "elueu", "eluir", "eluiu", "eluro", "eluía", "eluís", "eluôs", "eléis", "emace", "email", "emala", "emale", "emalo", "emamo", "emana", "emane", "emano", "emapu", "emare", "emaro", "emará", "emaça", "emaço", "embaí", "embeu", "embiá", "embiú", "emboá", "embuu", "embuá", "embuí", "embés", "emebé", "emeda", "emede", "emedo", "emeio", "emela", "emele", "emelo", "emens", "emeus", "emexo", "emfim", "emias", "emins", "emita", "emite", "emiti", "emito", "emoco", "emole", "emoli", "emone", "emono", "emoná", "emota", "emoto", "empai", "empam", "empar", "empas", "empei", "empem", "empes", "empeá", "empis", "empoa", "empoe", "empoo", "empou", "empós", "emula", "emule", "emulo", "enalo", "enana", "enano", "enase", "enata", "enate", "enato", "encha", "enche", "enchi", "encho", "enchu", "enchó", "endes", "endez", "endos", "endro", "endua", "enema", "eneve", "enevo", "enevá", "enfeá", "enfia", "enfie", "enfio", "enfue", "enfuo", "enfuá", "engai", "engam", "engar", "engas", "engeá", "engos", "engou", "engra", "engue", "enhos", "enibu", "enino", "enito", "enjoa", "enjoe", "enjoo", "enleá", "enoda", "enode", "enodo", "enogo", "enogá", "enoja", "enoje", "enojo", "enomo", "enone", "enora", "enove", "enovo", "enová", "enque", "enrie", "enrio", "enriá", "enseá", "ensoa", "ensoe", "ensoo", "entas", "enter", "entes", "enteu", "enteá", "entoa", "entoe", "entoo", "entra", "entre", "entro", "envia", "envie", "envio", "envés", "enxie", "enxio", "enxiá", "enxus", "enxuí", "enxós", "enéis", "enéus", "enóis", "eones", "eoípo", "epata", "epeia", "epena", "epile", "epilo", "epilá", "epodo", "epuxa", "epóxi", "equei", "equem", "eques", "equeu", "erada", "erado", "erais", "eramo", "eramá", "erara", "erati", "erato", "erava", "erbia", "eremo", "ereso", "ereta", "ereto", "ergam", "ergas", "ergia", "ergol", "ergue", "ergui", "erica", "erice", "erige", "erigi", "erija", "erijo", "erino", "eripo", "eriça", "eriço", "ermai", "ermal", "ermam", "ermar", "ermas", "ermei", "ermem", "ermes", "ermos", "ermou", "eroca", "eroda", "erode", "erodi", "erodo", "erope", "erose", "eroso", "erosá", "erpes", "errai", "erram", "erras", "errei", "errem", "erres", "error", "errou", "ersas", "erses", "eruca", "eruda", "erudo", "eruga", "eruir", "eruru", "ervai", "erval", "ervam", "ervar", "ervei", "ervem", "erves", "ervoe", "ervoo", "ervou", "ervoá", "ervão", "escoa", "escoe", "escol", "escoo", "eserê", "esfaz", "esfex", "esfez", "esfia", "esfie", "esfio", "esfiz", "esgai", "esgam", "esgar", "esgas", "esgou", "esgue", "esmai", "esmam", "esmar", "esmas", "esmei", "esmem", "esmes", "esmeá", "esmoa", "esmoo", "esmou", "esmoê", "esmoí", "esnue", "esnuo", "esnuá", "espia", "espie", "espim", "espio", "espir", "espoa", "espoe", "espoo", "espru", "espua", "espuo", "espuí", "essas", "esses", "estai", "estas", "estau", "esteá", "estia", "estie", "estil", "estim", "estio", "estol", "estos", "estou", "estra", "estre", "estro", "estua", "estue", "estuo", "estás", "estão", "esvai", "esvaí", "esvão", "etais", "etana", "etano", "eteia", "etemo", "eteno", "etera", "eteus", "ethos", "etila", "etile", "etilo", "etino", "etios", "etita", "etite", "etito", "etmos", "etnos", "etusa", "etutu", "etípe", "etões", "eubeu", "eubás", "eumbo", "eurio", "evada", "evade", "evadi", "evado", "evais", "evale", "evamo", "evara", "evasê", "evava", "evaze", "evazo", "evazá", "eveia", "eveis", "evemo", "eveus", "evigo", "evipa", "evire", "eviro", "evirá", "evita", "evite", "evito", "evoca", "evoco", "evola", "evole", "evolo", "evoés", "exala", "exale", "exalo", "exara", "exare", "exaro", "exiba", "exibe", "exibi", "exibo", "exido", "exige", "exigi", "exija", "exijo", "exila", "exile", "exilo", "exima", "exime", "eximi", "eximo", "exina", "exite", "exitá", "exmas", "exmos", "exora", "exore", "exoro", "expia", "expie", "expio", "expus", "expôs", "expõe", "exste", "exsto", "exstá", "exsua", "exsue", "exsuo", "extar", "exula", "exulo", "exuma", "exume", "exumo", "exões", "eária", "eólia", "eólio", "fabal", "fabas", "fabro", "faces", "faceá", "facha", "fache", "fachi", "facho", "facie", "facos", "fadai", "fadam", "fadar", "fadas", "fadei", "fadem", "fades", "fadim", "fadiá", "fados", "fadou", "fadão", "faece", "fagai", "fagal", "fagam", "fagar", "fagas", "fagia", "fagos", "fagou", "fague", "faiai", "faial", "faiam", "faiar", "faias", "faida", "faido", "faiei", "faiem", "faies", "faina", "faine", "faino", "fains", "faiou", "faire", "fairo", "fairá", "faisã", "faite", "faixe", "faixo", "faião", "fajau", "fajos", "fajãs", "falai", "falam", "falas", "falaz", "falca", "falci", "falco", "falda", "falei", "falem", "fales", "falga", "falgo", "falha", "falhe", "falho", "falia", "falis", "faliu", "faloa", "falos", "falou", "falra", "false", "falta", "falte", "falto", "falua", "faluz", "famas", "fanai", "fanal", "fanam", "fanar", "fanas", "fanca", "fanda", "fando", "fanei", "fanem", "fanes", "faneu", "fanfa", "fanfe", "fanfo", "fanga", "fanha", "fanho", "fanoa", "fanou", "fante", "fanão", "faqui", "farad", "farai", "faram", "farar", "faraz", "farde", "farei", "farel", "farem", "fares", "fareu", "farfã", "faria", "faris", "farme", "farne", "farno", "faros", "farou", "farpe", "farpo", "farre", "farro", "farta", "farte", "farto", "farum", "farás", "farão", "fasca", "fasco", "faseo", "faseá", "fasma", "fasor", "fasta", "faste", "fasto", "fatas", "fates", "fatia", "fatie", "fatio", "fatão", "fauce", "faule", "faulo", "fauno", "fauta", "favai", "faval", "favam", "favar", "favas", "favei", "favem", "faves", "favos", "favou", "favão", "faxar", "faxes", "faxeá", "fazei", "fazem", "fazes", "fazia", "façam", "faças", "faúla", "feace", "feaco", "febeu", "febos", "febra", "fecal", "fecer", "fecha", "feche", "fecho", "fedam", "fedas", "fedei", "fedem", "feder", "fedes", "fedeu", "fedia", "fedra", "feila", "feire", "feiro", "feite", "feito", "feião", "felai", "felam", "felar", "felei", "felem", "feles", "felga", "felix", "felou", "felpa", "felpe", "felpo", "felãs", "feléu", "felôs", "fembe", "fembo", "fembá", "femte", "femto", "fenai", "fenal", "fenam", "fenar", "fenas", "fenda", "fende", "fendi", "fendo", "fenei", "fenem", "fenes", "fenil", "fenim", "fenol", "fenos", "fenou", "fento", "feofó", "feona", "feosa", "feoso", "fepes", "feral", "feraz", "ferem", "feres", "fereu", "ferga", "feria", "ferie", "ferio", "feris", "feriu", "fermi", "feros", "ferpa", "ferra", "ferre", "ferro", "ferry", "ferto", "ferva", "ferve", "fervi", "fervo", "feste", "festo", "fetim", "fetos", "fetus", "feuda", "fevra", "fezes", "feões", "fiado", "fiais", "fiamo", "fiara", "fiará", "fiaus", "fiava", "fiaço", "fibos", "fibro", "ficai", "ficam", "ficas", "ficha", "fiche", "ficho", "fichu", "ficou", "ficta", "ficto", "ficão", "fidas", "fidos", "fidéu", "fieis", "fiemo", "fieza", "fifas", "fifes", "fifis", "fifós", "figai", "figam", "figar", "figas", "figle", "figos", "figou", "figue", "fijás", "filai", "filam", "filar", "filas", "filei", "filem", "files", "filhe", "filia", "filie", "filio", "filma", "filme", "filmo", "filos", "filou", "filão", "fimas", "fimba", "fimbo", "fimia", "fimpi", "finai", "finam", "finar", "finca", "finco", "finda", "finde", "findo", "finei", "finem", "finfa", "finfe", "finfo", "finge", "fingi", "fingo", "finis", "finja", "finjo", "finou", "finta", "finte", "finto", "finês", "fiofó", "fiose", "fiota", "fiote", "fioto", "fique", "firam", "firas", "firma", "firme", "firmo", "firre", "firro", "firrá", "fisal", "fisas", "fises", "fisga", "fisgo", "fisio", "fisma", "fitai", "fitam", "fitar", "fitas", "fitei", "fitem", "fites", "fitol", "fitos", "fitou", "fitão", "fixai", "fixam", "fixas", "fixei", "fixem", "fixes", "fixez", "fixou", "fizer", "fiúsa", "fiúza", "fiúzo", "flaco", "flama", "flame", "flamo", "flana", "flane", "flano", "flape", "flare", "flash", "flata", "flate", "flato", "flava", "flavo", "flebo", "flema", "fleme", "flete", "fleti", "flexo", "flieu", "flime", "flimo", "flimá", "flint", "flipe", "flipo", "flipá", "flita", "flite", "flito", "floco", "flocá", "flogo", "flome", "flore", "flori", "floro", "flosa", "flosô", "flote", "floto", "flotá", "floxo", "flozô", "fluam", "fluas", "fluem", "fluis", "fluiu", "flume", "flush", "fluta", "fluía", "fluís", "flûte", "fobai", "fobam", "fobar", "fobas", "fobei", "fobem", "fobes", "fobou", "fobós", "focai", "focam", "focas", "foceu", "focho", "focou", "focus", "fodam", "fodas", "fodei", "fodem", "foder", "fodes", "fodeu", "foeta", "fofai", "fofam", "fofar", "fofei", "fofem", "fofes", "fofos", "fofou", "fofão", "fogal", "fogar", "fogem", "foges", "foias", "foide", "foila", "foina", "foios", "foito", "foiça", "foiço", "fojos", "folar", "folas", "foles", "foleá", "folga", "folgo", "folhe", "folho", "folie", "folão", "fomas", "fomes", "fomos", "fonas", "fones", "fonia", "fonjo", "fonos", "fonão", "fopas", "foque", "foral", "foram", "foras", "force", "forde", "fordo", "forem", "fores", "foria", "forja", "forje", "forjo", "forma", "forme", "formi", "formo", "forna", "forne", "forni", "foros", "forra", "forre", "forro", "força", "forço", "fosga", "fosia", "fosse", "foste", "foteá", "fotão", "fotãs", "fouce", "foula", "foupa", "fouça", "fouço", "foxim", "foxos", "foyer", "foção", "frado", "fradá", "frago", "frama", "frapê", "freai", "freda", "freei", "frega", "frege", "frego", "freia", "freie", "freio", "freis", "frema", "freme", "fremi", "fremo", "frena", "frene", "freni", "freno", "freon", "freou", "fresa", "frese", "freso", "freta", "frete", "freto", "freve", "frevá", "frial", "friez", "frige", "frigi", "frigo", "frija", "frijo", "frila", "frima", "frimo", "frine", "frino", "frisa", "frise", "friso", "frita", "frite", "frito", "friul", "frixo", "froca", "froco", "frole", "frolo", "frolá", "front", "froto", "frozô", "fruam", "fruas", "fruem", "fruir", "fruis", "fruiu", "fruro", "frute", "fruxu", "fruía", "fruís", "fubas", "fucal", "fucei", "fucem", "fuces", "fucim", "fucos", "fueta", "fufas", "fufus", "fugai", "fugam", "fugar", "fugas", "fugel", "fugia", "fugis", "fugiu", "fugou", "fugue", "fugão", "fuins", "fujam", "fujas", "fujem", "fujes", "fujia", "fujir", "fujis", "fujiu", "fujão", "fular", "fulas", "fulbe", "fulda", "fulge", "fulgi", "fulha", "fulja", "fuljo", "fuloe", "fuloo", "fulos", "fuloá", "fulva", "fulvo", "fulão", "fumai", "fumal", "fumam", "fumas", "fumbo", "fumei", "fumem", "fumes", "fumeá", "fumos", "fumou", "fumão", "funai", "funam", "funar", "funas", "funca", "funce", "funco", "funda", "funde", "fundi", "fundo", "funei", "funel", "funem", "funes", "funfe", "funfo", "funfá", "funga", "funge", "fungu", "funha", "funhe", "funhi", "funho", "funis", "funje", "funou", "funéu", "fuque", "furai", "fural", "furam", "furas", "furca", "furco", "furda", "furei", "furem", "fures", "furil", "furis", "furna", "furoa", "furoe", "furoo", "furou", "furta", "furte", "furto", "furão", "fusai", "fusam", "fusar", "fusas", "fusca", "fusco", "fusei", "fusem", "fuses", "fusgo", "fusgá", "fusor", "fusos", "fusou", "fusta", "fuste", "fusto", "futas", "futes", "futre", "futum", "fuzil", "fuzis", "fuzos", "fuçai", "fuçam", "fuças", "fuçou", "fuões", "fágea", "fájea", "fálum", "fálus", "fário", "fásia", "fátua", "fátuo", "fávio", "fânia", "fânio", "fânti", "fécio", "félea", "féleo", "félis", "fêmeo", "fênix", "fêtão", "fíala", "fíber", "fícea", "fíceo", "fícis", "fícus", "fídia", "fífia", "fílea", "fíleo", "fíler", "fócio", "fódia", "fólio", "fólis", "fóloe", "fóton", "fóvea", "fônix", "fônon", "fúcea", "fúcia", "fúfia", "fúfio", "fúler", "fúlix", "fúmeo", "fúsel", "fúsil", "gabai", "gabam", "gabar", "gabas", "gabei", "gabem", "gabes", "gabie", "gabou", "gabro", "gabão", "gabéu", "gacha", "gacho", "gadar", "gades", "gados", "gadão", "gaeta", "gafai", "gafam", "gafar", "gafas", "gafei", "gafes", "gafou", "gafém", "gagas", "gagau", "gages", "gagos", "gague", "gagão", "gaiai", "gaial", "gaiam", "gaiar", "gaias", "gaiei", "gaiem", "gaies", "gaios", "gaiou", "gaipa", "gaipo", "gairo", "gaite", "gaito", "gaiva", "gaive", "gaivo", "gaiza", "gajai", "gajam", "gajar", "gajas", "gajei", "gajem", "gajes", "gajos", "gajou", "gajão", "galai", "galam", "galar", "galas", "galba", "galbo", "galei", "galem", "galga", "galgo", "galha", "galis", "galoe", "galoo", "galos", "galou", "galoá", "galra", "galre", "galro", "gamai", "gamam", "gamar", "gamas", "gambo", "gambu", "gamei", "gamem", "games", "gamos", "gamou", "gamão", "ganam", "ganas", "ganau", "gance", "ganda", "gando", "ganem", "ganes", "ganfe", "ganfo", "ganfá", "ganga", "gango", "ganha", "ganhe", "ganho", "gania", "ganim", "ganir", "ganis", "ganiu", "ganiz", "ganja", "gansa", "ganta", "gantó", "ganzi", "ganzo", "ganzá", "ganzé", "gança", "ganço", "ganês", "gapes", "gapós", "garau", "garbo", "garde", "gares", "garfa", "garfe", "garfo", "gargá", "gargó", "garis", "garna", "garne", "garni", "garno", "garoa", "garoe", "garoo", "garos", "garre", "garri", "garro", "garua", "garue", "garuo", "garus", "garvo", "garás", "garão", "garço", "gascã", "gaseá", "gasme", "gasmo", "gasmá", "gaspa", "gasta", "gaste", "gasto", "gatai", "gatal", "gatam", "gatar", "gatei", "gatem", "gates", "gateu", "gateá", "gatil", "gatis", "gatou", "gatum", "gatão", "gauda", "gaude", "gaudó", "gauge", "gaulo", "gaura", "gauro", "gauss", "gauza", "gavai", "gavam", "gavar", "gavas", "gavei", "gavem", "gaves", "gavou", "gavão", "gazal", "gazar", "gazas", "gazel", "gazes", "gazeu", "gazeá", "gazia", "gazil", "gazis", "gazos", "gazua", "gazue", "gazuo", "gazão", "gaéis", "geado", "geais", "geamo", "geara", "gearo", "geará", "gease", "geava", "gebai", "gebam", "gebar", "gebas", "gebei", "gebem", "gebes", "gebou", "gebre", "gebro", "gebrá", "gebus", "gecos", "geeis", "geemo", "geena", "geesa", "geiam", "geias", "geiem", "geies", "gelai", "gelam", "gelas", "gelba", "gelda", "gelei", "gelem", "geles", "gelfa", "gelfo", "gelha", "gelma", "gelmo", "gelos", "gelou", "gelva", "gemai", "gemam", "gemar", "gemas", "gemei", "gemem", "gemes", "gemeu", "gemia", "gemie", "gemio", "gemou", "genal", "genas", "gener", "genge", "genia", "genoa", "genol", "genos", "genra", "geode", "geodo", "geosa", "geoso", "gerai", "geram", "geras", "gerbo", "gerei", "gerem", "geres", "geria", "geris", "geriu", "germo", "gerno", "gerou", "gerra", "gerre", "gerém", "gesos", "gessa", "gesse", "gesta", "geste", "getas", "geteu", "getés", "geína", "giaur", "gibas", "gibis", "gibli", "gibos", "gibão", "giclê", "gicló", "gicão", "gidos", "gigas", "giglê", "gigos", "gilas", "gilés", "gimas", "gimbo", "gimel", "gimos", "gimão", "ginco", "gindo", "ginge", "gingo", "ginja", "giota", "gipso", "girai", "giram", "giras", "girei", "girem", "gires", "gireu", "giros", "girou", "girão", "gitas", "giteu", "gizai", "gizam", "gizar", "gizas", "gizei", "gizem", "gizes", "gizou", "glacê", "glans", "glaro", "glaça", "glaço", "gleba", "gleia", "glena", "glete", "glial", "glias", "glide", "glifo", "glino", "globa", "glomo", "glons", "glosa", "glose", "gloso", "glota", "glote", "gluma", "glute", "gluão", "glões", "glúon", "gneto", "gnoma", "gnomo", "gnose", "goana", "goane", "goano", "gobos", "gocha", "gocho", "godas", "godes", "godie", "godio", "godos", "godão", "goele", "goelo", "goesa", "goete", "gofer", "gofos", "gofra", "gofre", "gofro", "gofés", "gogas", "gogós", "goiai", "goiam", "goiar", "goiei", "goiem", "goies", "goios", "goiou", "goita", "goite", "goiti", "goito", "goiva", "goive", "goivo", "goiás", "gojas", "gojos", "golai", "golam", "golar", "golas", "golda", "goldi", "golei", "golem", "goles", "goleá", "golfa", "golga", "golim", "golis", "golos", "golou", "golpo", "golpá", "gomai", "gomal", "gomam", "gomar", "gomas", "gomba", "gombe", "gombô", "gomei", "gomem", "gomes", "gomia", "gomil", "gomis", "gomoe", "gomoo", "gomor", "gomos", "gomou", "gomoá", "gonai", "gonam", "gonar", "gonas", "gonda", "gonde", "gondi", "gondo", "gonei", "gonel", "gonem", "gones", "gongo", "gongá", "gonou", "gonus", "gonzo", "gorai", "goral", "goram", "gorar", "goras", "goraz", "gorca", "gorei", "gorem", "gores", "gorga", "gorgi", "gorja", "gorna", "gorne", "gorni", "gorno", "gorou", "gorra", "gorre", "gorão", "gorós", "gosba", "gosme", "gosmo", "gospe", "gosta", "goste", "gosto", "gotes", "goteá", "gotos", "gotra", "gotri", "gotão", "gouda", "gougo", "gougá", "gouli", "goulo", "goura", "gouro", "gouve", "govar", "govas", "goxos", "gozai", "gozam", "gozas", "gozei", "gozem", "gozes", "gozil", "gozim", "gozos", "gozou", "gozão", "graal", "grabe", "grada", "grado", "grafa", "grafe", "grafo", "graie", "graio", "grais", "graiá", "grajo", "grame", "gramo", "grand", "grane", "grani", "grano", "grans", "grapa", "grava", "grave", "gravi", "gravo", "graxo", "grebe", "grebo", "greco", "greda", "grede", "green", "grege", "greia", "greis", "grejó", "grela", "grele", "grelo", "gremo", "grená", "grepo", "greta", "grete", "greto", "greva", "grias", "grifa", "grife", "grifo", "grijó", "grila", "grile", "grili", "grill", "grilo", "grima", "gripa", "gripo", "grisa", "grise", "griso", "grisu", "grita", "grite", "grito", "griva", "grive", "grivo", "griôs", "grode", "groir", "grole", "grolá", "groló", "groma", "grome", "gromo", "groom", "gropa", "grosa", "grose", "groso", "grota", "grous", "groxo", "grual", "gruam", "gruas", "gruau", "gruda", "grude", "grudo", "gruem", "gruim", "gruir", "gruiu", "gruja", "gruma", "grume", "grumo", "gruna", "grupa", "grupe", "gruía", "gruís", "grâce", "grãos", "gréus", "guaco", "guacá", "guada", "guado", "guaia", "guaie", "guais", "guaió", "guaiú", "guaje", "guaju", "guajá", "guano", "guaná", "guapo", "guare", "guari", "guaro", "guará", "guató", "guaus", "guaxe", "guaxi", "guaxo", "guaze", "guazo", "guazá", "guaçu", "gudes", "gudus", "gueba", "guebo", "guedé", "gueis", "gueja", "gueli", "guera", "guere", "gueri", "gueta", "guete", "gueve", "guexa", "guexo", "gugus", "guiai", "guiam", "guias", "guibo", "guibá", "guica", "guide", "guido", "guidá", "guiei", "guiem", "guies", "guife", "guiga", "guigó", "guina", "guino", "guiné", "guiou", "guipá", "guiri", "guirá", "guisa", "guise", "guiso", "guita", "guiti", "guito", "guize", "guizo", "guizá", "guião", "guiço", "gulag", "gular", "gulas", "gumba", "gumbo", "gumbé", "gumes", "gunas", "gunda", "gunde", "gundi", "gundu", "gunes", "gunfe", "gunfo", "gunfá", "gunga", "gungo", "gunho", "gunji", "guntó", "gural", "guras", "gurbi", "gurca", "gurda", "gurde", "guris", "gurma", "gurna", "gurne", "gurni", "gurno", "guros", "gurra", "gurus", "gusas", "gusla", "gusos", "gusta", "guste", "gutai", "gutam", "gutar", "gutas", "gutei", "gutem", "gutes", "gutos", "gutou", "guvos", "guxes", "guyot", "guzos", "gábia", "gábio", "gáfio", "gájis", "gálax", "gálea", "gáleo", "gália", "gálio", "gáseo", "gázeo", "gázio", "gâmia", "gânia", "gébia", "gélis", "géron", "gêmea", "gíbio", "gídio", "gígia", "gígis", "gília", "gírio", "góbia", "góbio", "gódia", "gônio", "gônis", "gúlua", "gúlue", "habés", "hacas", "hacer", "hacos", "hacus", "hadji", "haida", "haiku", "hajam", "hajas", "hajes", "hajul", "hakka", "halas", "halde", "haler", "halfe", "halma", "halos", "halvá", "hamba", "hamsa", "handa", "hango", "hanha", "hanoa", "hansa", "haoma", "haplo", "hapto", "harda", "haris", "harlo", "harpe", "harpo", "harto", "harão", "harém", "hashi", "hasta", "haura", "haure", "hauri", "hauro", "hauçá", "havei", "havia", "hebro", "hecto", "hedge", "hedra", "hedus", "heire", "helas", "hemal", "hemes", "hemis", "hemos", "henas", "henna", "henry", "henês", "hepas", "hepta", "heras", "herda", "herde", "herdo", "heres", "heril", "heris", "herma", "heroo", "herse", "hertz", "heréu", "hesse", "hetai", "hetam", "hetar", "hetas", "hetei", "hetem", "hetes", "heteu", "hetmã", "hetol", "hetou", "heveu", "hexal", "hexil", "hexis", "hexol", "hezas", "hiais", "hialo", "hiava", "hicas", "hicos", "hicsa", "hicso", "hidno", "hidra", "hidro", "hifal", "hifas", "higgs", "higra", "higro", "hilar", "hilas", "hilos", "hilés", "himba", "hinam", "hinas", "hindi", "hinem", "hines", "hinga", "hingo", "hinia", "hinir", "hinis", "hiniu", "hiper", "hipno", "hipos", "hipta", "hipte", "hirco", "hirpa", "hirpo", "hirta", "hirte", "hirto", "hispe", "hispo", "hispá", "histo", "hobby", "hobos", "hoias", "holas", "holco", "holos", "holão", "homba", "hombo", "homea", "homeo", "homos", "homum", "homus", "homão", "honas", "honga", "hongo", "honor", "honre", "honro", "hopis", "hoplo", "hopos", "horai", "horal", "horam", "horar", "horda", "horei", "hores", "horeu", "horou", "horrá", "horsa", "horte", "horão", "hosco", "hosta", "hoste", "hotes", "houve", "hovas", "hoxas", "https", "huala", "huamã", "huane", "huari", "hubis", "hubos", "hudes", "huela", "huido", "huini", "hulas", "hulha", "humba", "humbe", "humbi", "humbo", "humos", "hunan", "hungo", "hunos", "huras", "huris", "hurra", "husas", "husky", "husma", "hutus", "huíla", "huíos", "hábia", "háden", "hájis", "hálex", "hális", "hálux", "hápax", "hânia", "hânio", "héduo", "hélia", "hélio", "hélix", "hépar", "hépia", "hévea", "híala", "hília", "hímen", "hírax", "híria", "hópea", "hópia", "hósis", "hóssi", "hóvea", "hóyas", "húmea", "húmil", "húmus", "iabás", "iacas", "iacus", "iaera", "iagas", "iagos", "iaguá", "iagês", "iaiás", "ialés", "iamas", "iambe", "iambo", "iamém", "iaméu", "ianam", "iande", "iandu", "ianga", "iansã", "ianvo", "ianôs", "iapas", "iapus", "iaque", "iaras", "iasos", "iasão", "iatal", "iataí", "iates", "iatro", "iatás", "iauma", "iaupê", "iauôs", "iavés", "iaúva", "iaúvo", "ibalé", "ibaró", "ibeji", "ibera", "ibere", "ibero", "ibins", "ibira", "ibiri", "ibiró", "iblas", "iboga", "ibope", "iboza", "ibuns", "icaco", "icala", "icaçu", "icaús", "icbal", "iceis", "icelo", "icemo", "icena", "iceno", "ichão", "ichós", "icica", "icipó", "icles", "icomo", "ictio", "ictos", "icurê", "idate", "ideai", "idear", "ideei", "ideie", "ideio", "ideou", "idios", "idona", "idora", "idose", "idria", "idrol", "iduna", "idões", "iebás", "ieixa", "ieiês", "ienes", "iento", "ieras", "ierés", "ietas", "ietim", "ietos", "ifata", "ifóis", "igabo", "igaci", "igala", "igapé", "igapó", "igara", "igbim", "igbis", "igbos", "igdes", "iglus", "igoga", "iguar", "iguei", "iguis", "iguou", "igupá", "iiabá", "iicaí", "iinxé", "ijebu", "ijexá", "ijoco", "ilada", "ilado", "ilama", "ilamo", "ilara", "ilava", "ilaís", "ileal", "ileis", "ilele", "ilemo", "ilesa", "ilhai", "ilhal", "ilham", "ilhar", "ilhas", "ilhei", "ilhem", "ilhes", "ilhoa", "ilhou", "ilhéu", "ilhós", "iliba", "ilibe", "ilibo", "ilida", "ilide", "ilidi", "ilido", "iliga", "iligo", "ilipé", "ilita", "ilite", "iliza", "iliça", "iliço", "ilota", "iltra", "iluca", "iluda", "ilude", "iludi", "iludo", "ilusa", "iluse", "ilusi", "iluso", "iluta", "ilute", "iluto", "imago", "imala", "imame", "imamo", "imana", "imane", "imano", "imbas", "imboá", "imbuo", "imbus", "imbuá", "imbuí", "imbés", "imemé", "imene", "imida", "imido", "imigo", "imina", "imita", "imite", "imiti", "imito", "imola", "imole", "imolo", "imota", "imote", "imoto", "imova", "imovi", "imovo", "imovê", "impai", "impam", "impas", "impei", "impem", "impes", "impim", "impis", "impol", "impou", "impus", "impôs", "impõe", "imuta", "imute", "imuto", "imãze", "imãzo", "imãzá", "inaiá", "inajá", "inajé", "inala", "inale", "inalo", "inama", "iname", "inamu", "inana", "inane", "inani", "inano", "inaré", "inata", "inato", "inaês", "incas", "incei", "incem", "inces", "incha", "inche", "incho", "incie", "incio", "inciá", "incoa", "incoe", "incoo", "incri", "incro", "incrê", "indas", "indez", "indis", "indjo", "indol", "induz", "inene", "inera", "inere", "ineri", "inero", "inexo", "infla", "infle", "inflo", "ingaí", "inges", "ingos", "ingre", "ingrã", "ingus", "ingué", "ingás", "inhor", "inhás", "inhés", "iniba", "inibe", "inibi", "inibo", "inita", "inite", "iniás", "injou", "inlas", "inlés", "inoma", "inora", "inore", "inoro", "inosa", "inose", "inova", "inove", "inovo", "input", "insta", "inste", "insto", "inter", "intra", "intro", "intua", "intui", "intuo", "intuí", "intãs", "inube", "inuit", "inuma", "inume", "inumo", "invar", "inxus", "inçai", "inçam", "inçar", "inçou", "iobai", "iobam", "iobar", "iobas", "iobei", "iobem", "iobes", "iobou", "iobós", "iodai", "iodam", "iodar", "iodas", "iodei", "iodem", "iodes", "iodol", "iodos", "iodou", "iogas", "iogue", "ioiôs", "iolas", "iolau", "iolca", "iolco", "ioles", "iolis", "iolos", "iones", "ionte", "iopes", "iotas", "ioças", "ipaca", "ipadu", "ipeca", "ipecu", "ipetê", "ipeuí", "ipiti", "ipres", "ipsis", "ipuca", "ipuãs", "irada", "irade", "irais", "iramo", "iramá", "irani", "irara", "irari", "irava", "iraçu", "irdes", "ireis", "iremo", "irena", "irene", "ireno", "irerê", "iriai", "irial", "iriam", "iriar", "irias", "iriei", "iriem", "iries", "iriju", "irina", "irino", "iriou", "irirá", "irisa", "irise", "iriso", "irite", "iriva", "iriza", "irize", "irizo", "irmos", "iroco", "irona", "irone", "irono", "irosa", "iroso", "irpas", "irras", "irrua", "irruo", "irruí", "irrés", "iruns", "iruri", "iruçu", "iróis", "isala", "isara", "isaro", "isbas", "iscai", "iscam", "iscar", "iscas", "iscou", "iseio", "iseis", "isele", "isgas", "isgos", "isios", "islão", "islãs", "ismos", "isoca", "isola", "isole", "isolo", "isque", "issei", "isseu", "istas", "istmo", "istra", "istro", "isuro", "isuso", "itaca", "itana", "itano", "itapu", "itati", "itaus", "itauá", "itaís", "itens", "itera", "itere", "itero", "itobi", "itral", "itrol", "ituna", "ituás", "ituís", "iuane", "iudjá", "iuiús", "iulãs", "iumás", "iupis", "iupuá", "iuris", "iurta", "iurte", "iurás", "ivaol", "ivaís", "iveca", "ivesa", "ivirá", "iviró", "ixião", "ixode", "ixodo", "ixora", "ixíea", "izais", "izgas", "izgos", "izuzo", "iácio", "iásis", "iátio", "içada", "içado", "içais", "içamo", "içara", "içará", "içava", "iódis", "iótio", "iônia", "iônio", "iônis", "iúcas", "iúcea", "iúlos", "iúque", "iúros", "jabes", "jabeá", "jabre", "jabus", "jabás", "jabão", "jabôs", "jacas", "jacer", "jacis", "jacos", "jacra", "jacre", "jacta", "jacte", "jacuá", "jacuí", "jacés", "jades", "jadão", "jadãs", "jaeza", "jaeze", "jaezo", "jaffé", "jagas", "jagaz", "jagra", "jagre", "jaicó", "jaina", "jaios", "jalas", "jalde", "jales", "jalia", "jalne", "jalão", "jaléu", "jamba", "jambi", "jambo", "jambu", "jambé", "jamis", "janai", "janal", "janam", "janar", "janas", "janaú", "janda", "jande", "jandu", "janei", "janem", "janes", "janfa", "janga", "jango", "janja", "janos", "janou", "janta", "jante", "janto", "japas", "japim", "japis", "japiú", "japoa", "japus", "japué", "japuí", "japés", "jaque", "jaquá", "jarda", "jarde", "jardo", "jares", "jaros", "jarus", "jarás", "jaspe", "jasso", "jatam", "jatar", "jataí", "jatem", "jates", "jateá", "jatia", "jatis", "jator", "jatos", "jatou", "jatus", "jatás", "jauna", "jauás", "javas", "javaé", "javra", "javre", "javro", "javés", "jazam", "jazas", "jazei", "jazem", "jazer", "jazes", "jazeu", "jazia", "jaçaí", "jeans", "jebas", "jebus", "jecas", "jecos", "jegra", "jegre", "jeicó", "jeira", "jeite", "jeitá", "jejes", "jejua", "jejue", "jejuo", "jejus", "jejás", "jembé", "jemiá", "jenis", "jeová", "jepiá", "jepió", "jeque", "jequi", "jeros", "jerra", "jerus", "jerês", "jessé", "jesus", "jetas", "jetaí", "jetom", "jeton", "jexás", "jibas", "jibis", "jicás", "jicão", "jiefo", "jievo", "jigas", "jigue", "jihad", "jijus", "jiles", "jilós", "jimba", "jimbe", "jimbo", "jinas", "jinga", "jinge", "jingo", "jinje", "jinós", "jipes", "jipio", "jipis", "jipão", "jique", "jiqui", "jiras", "jirau", "jires", "jiroé", "jisos", "jitaí", "jitis", "jitos", "jitás", "jiçui", "joana", "joane", "jobai", "jobam", "jobar", "jobas", "jobei", "jobem", "jobes", "jobou", "jocos", "joeta", "jogai", "jogam", "jogas", "jogla", "jogou", "jogue", "jogão", "joina", "joios", "joiça", "jolai", "jolam", "jolar", "jolas", "jolca", "jolco", "jolda", "jolei", "jolem", "joles", "jolga", "jolis", "joliz", "jolou", "jomos", "jonas", "jones", "jonga", "jongo", "jonje", "jonjo", "jonjá", "jonos", "jonçu", "jopas", "jorge", "jorim", "jorna", "jorne", "jorra", "jorre", "jorro", "jotas", "jotes", "jouja", "joule", "jouça", "joçal", "joças", "joíba", "joões", "juami", "juana", "juari", "juati", "jubas", "jubaí", "jubeu", "jubão", "jucus", "jucás", "judas", "judeo", "judia", "judie", "judio", "judos", "judum", "jugai", "jugal", "jugam", "jugar", "jugas", "juges", "jugos", "jugou", "jugue", "jugum", "juina", "jujus", "jujás", "julas", "jules", "julga", "julgo", "julos", "jumas", "junas", "jundo", "jundu", "junge", "jungi", "jungo", "junja", "junjo", "junta", "junte", "junto", "junça", "jupiá", "jupuá", "jupão", "juqui", "jurai", "juram", "juras", "jurau", "jurei", "jurem", "jures", "jurgo", "jurgá", "juris", "jurou", "jurus", "jurão", "jusos", "juste", "jusão", "jusãs", "jutas", "jutaí", "jutos", "jutus", "juuna", "juvas", "juíze", "jácea", "jácia", "jácio", "jálea", "jáleo", "jápix", "jânua", "jênia", "jítsu", "jógui", "jósia", "jônia", "jônio", "júlia", "júlio", "júvia", "kanji", "kansa", "karma", "karts", "kebab", "kendo", "khmer", "krach", "kraft", "krill", "kuait", "kyrie", "labor", "labos", "labro", "labão", "labéu", "lacas", "lacei", "lacem", "laces", "laceá", "lacha", "lacmo", "lacni", "lacno", "lacol", "lacra", "lacre", "lacro", "lacta", "lacte", "ladas", "ladeá", "ladim", "ladra", "ladre", "ladro", "ladus", "ladão", "lagar", "lagas", "lages", "lagão", "laias", "laica", "laido", "laija", "lailo", "laima", "laime", "laitu", "laiva", "laive", "laivo", "lajai", "lajam", "lajar", "lajas", "lajei", "lajem", "lajes", "lajou", "lajão", "lalai", "lalam", "lalar", "lalau", "lalei", "lalem", "lales", "lalia", "lalna", "lalou", "lalás", "lamas", "lamba", "lambe", "lambi", "lambo", "lambu", "lamel", "lamis", "lamna", "lampa", "lampe", "lampo", "lamés", "lanai", "lanam", "lanar", "lanas", "lance", "landa", "lande", "landi", "landu", "landô", "lanei", "lanem", "lanes", "langa", "langi", "lango", "lanha", "lanhe", "lanho", "lanou", "lanti", "lança", "lanço", "lapai", "lapam", "lapar", "lapas", "lapei", "lapem", "lapes", "lapeá", "lapim", "lapiá", "lapou", "lapre", "lapsa", "lapuz", "lapão", "laque", "larau", "lardo", "lareá", "larga", "largo", "larim", "laris", "laros", "laroz", "larpa", "larpe", "larpo", "larra", "larro", "larve", "larvo", "laréu", "lasca", "lasco", "laser", "lasis", "lasmó", "lassa", "lasse", "lasso", "latam", "latem", "later", "lates", "lateá", "latia", "latir", "latis", "latiu", "lauda", "lauié", "laulé", "laura", "lauro", "lauta", "lauto", "lauãs", "laués", "lavai", "lavam", "lavas", "lavei", "lavem", "laves", "lavor", "lavou", "lavra", "lavre", "lavro", "laxai", "laxam", "laxar", "laxas", "laxei", "laxem", "laxes", "laxou", "lazos", "lazzo", "lazão", "lazãs", "laçai", "laçam", "laçar", "laças", "laçou", "lação", "laúde", "laúza", "leais", "lebas", "lebus", "lecal", "lecas", "lecos", "lecre", "ledas", "ledes", "ledol", "ledor", "ledos", "ledra", "leeia", "legai", "legam", "legar", "legas", "legba", "legis", "legou", "legra", "legre", "legro", "legue", "legão", "leiam", "leias", "leiga", "leila", "leino", "leira", "leire", "leiro", "leita", "leiva", "leixa", "leixe", "leixo", "leiús", "lelas", "lelos", "lelés", "lemas", "lemba", "lembe", "lembo", "lemes", "lemna", "lemos", "lempa", "lenam", "lenas", "lenca", "lende", "lendo", "lendu", "lenem", "lenes", "leneu", "lenga", "lengo", "lenhe", "lenho", "lenia", "lenir", "lenis", "leniu", "lenão", "leoas", "leoba", "leone", "lepas", "lepes", "lepra", "lepta", "lepto", "leram", "leras", "lerca", "lerda", "lerei", "lerem", "leres", "leria", "lerie", "lermo", "lerna", "leros", "lerpe", "leruê", "lerás", "lerão", "lesai", "lesam", "lesar", "lesas", "lesco", "lesei", "lesem", "leses", "lesim", "lesma", "lesme", "lesmo", "lesos", "lesou", "lesse", "lesta", "leste", "lesto", "leteu", "letos", "letre", "letro", "letão", "letãs", "leuca", "leuco", "leude", "levai", "levam", "levas", "levei", "levem", "leves", "levez", "levie", "levio", "leviá", "levou", "lexia", "lhama", "lhana", "lhano", "liabo", "liada", "liado", "liais", "liame", "liamo", "liana", "liara", "liase", "liava", "liaça", "libai", "libam", "libar", "libas", "libau", "libei", "libem", "libes", "libis", "libou", "libro", "libré", "libua", "libós", "licas", "lices", "liceu", "lichi", "licne", "licra", "licta", "licto", "lidai", "lidam", "lidas", "lidei", "lidem", "lides", "lidou", "lidão", "liemo", "ligai", "ligal", "ligam", "ligas", "ligbi", "ligeu", "light", "ligou", "ligue", "lilis", "limai", "limam", "limar", "limas", "limax", "limba", "limei", "limem", "limes", "limiã", "limos", "limou", "limpa", "limpe", "limpo", "linas", "linco", "lincá", "linde", "linfa", "linfe", "linfo", "linga", "lingo", "links", "linos", "liode", "liopo", "lioto", "lipas", "lipes", "lipos", "lipus", "liral", "liras", "liris", "liros", "lirus", "lirão", "lisas", "lisco", "liscá", "lises", "lisga", "lisim", "lisma", "lisme", "lismo", "lisol", "lispa", "lissa", "lista", "liste", "listo", "litai", "litam", "litar", "litas", "litei", "litem", "lites", "litor", "litou", "litão", "livas", "livel", "lives", "livor", "livos", "livra", "livre", "livro", "lixai", "lixam", "lixas", "lixei", "lixem", "lixes", "lixos", "lixou", "lixão", "lizai", "lizam", "lizar", "lizas", "lizei", "lizem", "lizes", "lizou", "liços", "liões", "loaco", "loada", "loado", "loais", "loamo", "loara", "loasa", "loava", "lobal", "lobar", "lobas", "lobaz", "lobby", "lobão", "locai", "locam", "locar", "locas", "locou", "locro", "locus", "locés", "lodos", "loeis", "loemo", "loena", "loess", "lofas", "lofos", "logar", "logba", "logia", "login", "logon", "logos", "logra", "logre", "logro", "logue", "loias", "loibé", "loios", "loire", "loisa", "loise", "loiso", "loiça", "lolos", "lombe", "lombi", "lomué", "lonas", "lonca", "londo", "lonja", "lopas", "lopes", "lopos", "lopsa", "lopso", "loque", "loral", "loras", "lorca", "lorco", "lorda", "lordo", "lorfa", "lorfo", "lorga", "lorgo", "loros", "lorpa", "lorto", "lorés", "losas", "losma", "losna", "losos", "lotai", "lotam", "lotas", "lotei", "lotem", "lotes", "loteá", "lotis", "lotos", "lotou", "loure", "louro", "louse", "louso", "louva", "louve", "louvo", "loxas", "loões", "luaco", "luada", "luado", "luale", "luana", "luane", "luano", "luaus", "lubas", "lucas", "luche", "lucho", "luchã", "lucmo", "lucos", "lucra", "lucre", "lucro", "lucão", "ludar", "ludas", "ludos", "ludra", "ludro", "lueda", "luena", "lueta", "lufai", "lufam", "lufar", "lufas", "lufei", "lufem", "lufes", "lufou", "lufre", "lugai", "lugam", "lugas", "luges", "lugol", "lugou", "lugre", "lugue", "luias", "luica", "luico", "luita", "luite", "luito", "lulas", "lulos", "lulus", "lulão", "lumbo", "lumes", "lumie", "lumio", "lumpo", "lunas", "lunda", "lundu", "lunel", "lunfa", "lunga", "lungo", "lunil", "lunis", "lupai", "lupam", "lupar", "lupas", "lupaé", "lupei", "lupem", "lupes", "lupos", "lupou", "luque", "lurai", "luram", "lurar", "luras", "lurda", "lurei", "lurem", "lures", "lurgo", "lurou", "lurta", "lusas", "lusco", "luscá", "lusma", "lusme", "lusmi", "lusmo", "lusol", "lusos", "lutai", "lutam", "lutas", "lutei", "lutem", "lutes", "lutos", "lutou", "lutra", "lutsé", "luués", "luvar", "luxai", "luxam", "luxar", "luxas", "luxaz", "luxei", "luxem", "luxes", "luxos", "luxou", "luzam", "luzas", "luzem", "luzes", "luzia", "luzir", "luzis", "luziu", "luziê", "luéea", "luíla", "luíme", "luína", "lycra", "lymes", "lábea", "lábeo", "lábil", "lácio", "lácon", "lágis", "lájea", "lária", "lárix", "lásia", "lásio", "láteo", "látex", "látia", "lâmia", "lâmio", "lânea", "lâneo", "lânio", "lébia", "lécia", "lédea", "légua", "lélia", "léops", "lépis", "lépus", "léria", "léxis", "lêmea", "lêmur", "lênea", "lêneo", "lênoa", "líber", "líbia", "líbio", "líbuo", "lícea", "lícia", "lício", "lídia", "lídio", "líeis", "lígea", "lígeo", "lígia", "lígio", "lílio", "límea", "límeo", "línea", "líneo", "lípia", "lípoa", "líria", "lísia", "lísio", "lítia", "lítio", "lítuo", "lívia", "lízia", "lódão", "lófio", "lógea", "lójia", "lólio", "lópis", "lóqui", "lória", "lório", "lóris", "lósia", "lóteo", "lótur", "lóvia", "lóxia", "lômis", "lúcia", "lúcio", "lúdio", "lúfia", "lúmen", "lúmia", "lúpia", "lúpus", "lúria", "lútea", "lúteo", "lúzio", "maari", "mabas", "maber", "mabiú", "mabré", "mabus", "macau", "macaá", "macaé", "macei", "macem", "maces", "macha", "machê", "macis", "macié", "macla", "macoa", "macrã", "macua", "macus", "mades", "madim", "madis", "madje", "madre", "madãs", "maeio", "maeta", "mafaú", "mafes", "mafie", "mafio", "mafor", "mafra", "mafus", "mafuá", "magal", "magas", "magaí", "magba", "magda", "magie", "magio", "magma", "magno", "magné", "magoa", "magoe", "magoo", "mahdi", "maiai", "maiam", "maiar", "maias", "maiei", "maiem", "maies", "mailo", "maino", "mainá", "maios", "maiou", "maire", "mairu", "mairá", "maita", "maiua", "maião", "majas", "majil", "majis", "majus", "malai", "malam", "malar", "malda", "malde", "maldo", "malei", "malem", "maleá", "malga", "malgo", "malha", "malhe", "malho", "malim", "malis", "malou", "malsã", "malto", "malua", "malva", "malvo", "mamai", "mamal", "mamam", "mamas", "mamba", "mambi", "mambu", "mambê", "mamei", "mamem", "mames", "mamoa", "mamou", "mampa", "mampe", "mampo", "mamua", "mamum", "mamão", "manam", "manao", "manar", "manas", "manau", "manaí", "manca", "manco", "manda", "mande", "mandi", "mando", "mandu", "manei", "manel", "manem", "manes", "maneá", "mango", "mangu", "manho", "manil", "manir", "manis", "maniú", "manja", "manje", "manjo", "manju", "manos", "manou", "mantê", "manua", "manul", "manus", "manuê", "maona", "maore", "maori", "mapeá", "mapia", "mapie", "mapio", "maple", "mapuá", "mapão", "mapés", "maque", "maqui", "marai", "maram", "marar", "marau", "marca", "marco", "marda", "mardo", "marei", "marel", "marem", "mareá", "marfa", "marfe", "marfi", "marfo", "marga", "marge", "margi", "margo", "maria", "marim", "maris", "marií", "mariô", "marja", "marma", "marme", "marmo", "marna", "marno", "maroa", "marou", "marra", "marre", "marro", "marsa", "marso", "marta", "marto", "maruá", "maruí", "marás", "marão", "maréu", "masas", "masca", "masco", "maser", "maseu", "masse", "masso", "masto", "masué", "matai", "matal", "matam", "matas", "matau", "match", "matei", "matem", "mates", "mateá", "matia", "matis", "matiz", "matou", "matsé", "matus", "matué", "matão", "matéu", "maula", "mauné", "mauro", "maurá", "mauzã", "maués", "mauís", "mavos", "mavua", "maxim", "maxis", "mazar", "mazas", "mazes", "mazeu", "mazia", "maçai", "maçal", "maçam", "maçar", "maçom", "maços", "maçou", "mação", "maíça", "maúba", "maújo", "maúlo", "maúça", "meaco", "meada", "meado", "meago", "meais", "meana", "meano", "meapo", "meara", "meari", "meato", "meava", "meaça", "mebou", "mecha", "meche", "mecho", "mecos", "mecru", "medas", "medem", "medes", "media", "medis", "mediu", "medol", "medra", "medre", "medro", "meeis", "megas", "meiam", "meiem", "meies", "meiju", "meira", "meiri", "meiru", "meião", "mejis", "mejês", "melai", "melam", "melar", "melas", "melba", "melca", "melda", "meldo", "melei", "melem", "meles", "melez", "melfa", "melfo", "melga", "melgo", "melhã", "meloa", "melou", "melra", "melro", "membi", "membé", "memes", "memis", "menai", "menam", "menar", "menas", "mende", "mendi", "mendo", "mendã", "menei", "menem", "meneu", "meneá", "menga", "mengo", "menha", "menia", "menim", "menir", "menis", "menou", "mensa", "menso", "mente", "menti", "mento", "menus", "menza", "menês", "meolo", "meoma", "meota", "meote", "meoás", "meras", "merca", "merco", "merda", "mergo", "mergá", "merim", "merió", "merla", "merlo", "merlu", "merma", "merme", "mermo", "merro", "merua", "merus", "meruí", "merém", "mesco", "mescá", "mesna", "mesor", "mesos", "messa", "messe", "messo", "mesta", "mesto", "mesão", "metam", "metas", "metei", "metem", "metes", "meteu", "metia", "metil", "metim", "metis", "metiê", "metol", "metra", "metre", "meuda", "meudo", "meuis", "meuse", "meuás", "meuós", "mexam", "mexas", "mexei", "mexem", "mexes", "mexeu", "mexia", "mexir", "mexão", "mezeu", "mezzo", "mezés", "meçam", "meças", "meões", "meúco", "meúle", "mfeca", "mfiti", "mhari", "miaas", "miada", "miado", "miais", "miama", "miami", "miamo", "miana", "miaos", "miara", "miaro", "miará", "miaus", "miava", "mibas", "mibus", "micar", "micas", "micha", "micho", "michê", "micos", "micra", "micta", "micte", "micto", "midas", "midau", "mideu", "mieis", "mielo", "miemo", "migai", "migam", "migar", "migas", "migdã", "migma", "migou", "migra", "migre", "migro", "migue", "miina", "miite", "mijai", "mijam", "mijar", "mijas", "mijei", "mijem", "mijes", "mijos", "mijou", "mijus", "mijuí", "mijão", "milde", "miles", "mileu", "milos", "milpa", "milus", "milvo", "milão", "mimai", "mimam", "mimas", "mimbi", "mimbo", "mimei", "mimem", "mimes", "mimis", "mimos", "mimou", "minai", "minam", "minar", "minas", "minaz", "mindá", "minei", "minem", "mines", "mineu", "minga", "mingo", "mingu", "minia", "minie", "minis", "minje", "minol", "minor", "minou", "minta", "minto", "minua", "minuo", "minuí", "mioas", "mioca", "miode", "mioga", "miola", "mioma", "miopa", "miose", "mioto", "mique", "miqui", "mirai", "miram", "miras", "mirei", "mirem", "mires", "mirgã", "mirió", "mirmo", "mirou", "miroé", "mirra", "mirre", "mirro", "mirta", "mirto", "miruí", "mirzá", "mirão", "misas", "misco", "miscá", "mises", "misga", "misgo", "misná", "misos", "misse", "missô", "miste", "mitas", "mites", "mitis", "mitra", "mitre", "mitro", "mitua", "mitus", "miuis", "miuns", "miuás", "mivas", "mixai", "mixam", "mixar", "mixas", "mixei", "mixem", "mixer", "mixes", "mixia", "mixió", "mixná", "mixos", "mixou", "mixto", "mizas", "mizeu", "mizos", "miúda", "miúde", "miúfa", "miúlo", "miúra", "miúro", "miúva", "miúça", "mnese", "mnios", "moabi", "moacã", "moada", "moado", "moafa", "moais", "moamo", "mocei", "mocem", "moces", "moceá", "mocha", "moche", "mochi", "mocho", "mocim", "mocoa", "mocsa", "mocuí", "modal", "modem", "modus", "moeca", "moega", "moego", "moeis", "moemo", "moera", "moere", "moerá", "moeso", "moesu", "moeta", "mofai", "mofam", "mofar", "mofas", "mofei", "mofem", "mofes", "mofos", "mofou", "mofti", "mogai", "mogol", "mogor", "mogos", "mogué", "mogão", "mogãs", "mohos", "moica", "moico", "moina", "moine", "moino", "moins", "moios", "moira", "moire", "moiro", "moite", "moito", "moixe", "moião", "mojai", "mojam", "mojar", "mojas", "mojei", "mojem", "mojes", "mojos", "mojou", "molal", "molam", "molar", "molda", "molde", "moldo", "molei", "molem", "moles", "moleá", "molge", "molgo", "molgá", "molha", "molhe", "molho", "molim", "molir", "moliu", "molos", "molua", "momai", "momam", "momar", "momas", "mombe", "momei", "momem", "momes", "momeá", "momos", "momou", "mompé", "monam", "monas", "monca", "monco", "monda", "mondo", "mondé", "monel", "monem", "mones", "monfa", "monfi", "mongi", "mongo", "mongu", "monha", "monho", "monhé", "monia", "monir", "monis", "moniu", "monja", "monjo", "monos", "monox", "monsa", "monso", "monta", "monte", "monto", "monva", "monvo", "moogo", "mopis", "mopla", "moque", "moqui", "moquo", "morai", "moram", "moras", "moraí", "morbo", "morca", "morco", "morda", "morde", "mordi", "mordo", "morei", "morem", "mores", "morfa", "morfe", "morfo", "morga", "morgo", "moria", "moril", "morim", "moris", "mormo", "mormã", "morne", "morou", "morra", "morre", "morri", "morro", "morsa", "morse", "morso", "morte", "morto", "morus", "morxi", "morão", "mosas", "mosbá", "mosco", "mossa", "mosse", "mossi", "mosso", "mosto", "motar", "motas", "motes", "motim", "motis", "motum", "mouco", "moucá", "moufe", "moufo", "moufá", "moule", "moume", "moumo", "moumá", "moure", "mouro", "mouse", "mouta", "mouxe", "movam", "movas", "movei", "movem", "moves", "moveu", "movia", "moxai", "moxam", "moxar", "moxas", "moxei", "moxem", "moxes", "moxou", "moádi", "moáli", "moçai", "moçam", "moçar", "moças", "moços", "moçou", "moção", "moíam", "moías", "moído", "moúos", "muaca", "muaco", "muafa", "muafo", "muaje", "mualo", "muama", "muame", "muana", "muane", "muata", "muave", "mubes", "mubis", "mubus", "mucha", "muche", "mucia", "mucol", "mucor", "mucos", "mucro", "mucum", "mucué", "mucuí", "mudai", "mudam", "mudas", "mudei", "mudem", "mudes", "mudez", "mudir", "mudos", "mudou", "mudra", "mueba", "mueia", "muela", "muele", "mueme", "muemo", "muemá", "muene", "mueno", "muená", "muere", "muezo", "mufas", "mufla", "muflo", "mufti", "mufuí", "mufés", "mugem", "muges", "mugia", "mugir", "mugis", "mugiu", "mugos", "mugre", "mugué", "muieu", "muins", "muios", "muirá", "muiás", "mujam", "mujas", "mujau", "mujem", "mujes", "mujia", "mujil", "mujis", "mulai", "mulas", "mulei", "muleu", "mulgu", "mulim", "mulme", "mulos", "mulsa", "mulso", "multa", "multe", "multi", "multo", "mulua", "mulum", "mulói", "mumba", "mumbo", "mumbé", "mumos", "mumua", "mumus", "munam", "munda", "mundé", "munem", "munes", "munga", "munge", "mungi", "mungo", "mungu", "munha", "munho", "munia", "munir", "munis", "muniu", "munja", "munjo", "munjé", "munsi", "munto", "munãs", "muoco", "muolo", "mupas", "muque", "murai", "muram", "murar", "muras", "murco", "murei", "murem", "mures", "mureá", "muris", "murle", "murou", "murra", "murso", "murta", "murto", "murua", "murum", "murus", "muruí", "murzá", "murça", "musal", "musca", "musco", "musgu", "musgá", "musmé", "mussa", "musse", "mussó", "musta", "musto", "mutel", "mutia", "mutis", "mutoa", "mutom", "mutos", "mutoé", "mutra", "mutre", "mutro", "mutue", "mutum", "mutás", "muuba", "muviú", "muxas", "muxis", "muxos", "muxém", "muádi", "muári", "muâni", "muças", "mução", "muíla", "mvdol", "mácea", "mádia", "mágis", "málus", "mároo", "másea", "máseo", "másio", "máter", "mátri", "mávia", "mébia", "mécia", "mécum", "médon", "médão", "méleo", "mélia", "méloe", "méona", "méone", "méono", "méroe", "mésia", "mésio", "mésis", "méson", "méssu", "mésua", "mévia", "mézio", "mícia", "mício", "mílea", "míleo", "mílio", "mímon", "mínio", "míris", "mísia", "mísio", "mísis", "mítim", "móbil", "mócis", "módio", "mólia", "mólio", "mólis", "móqua", "mórea", "mório", "múchi", "múcua", "múgil", "mújio", "múlea", "múleo", "múlio", "múndi", "múnia", "múnus", "múons", "múrex", "múria", "múzua", "müsli", "naali", "nabal", "nabas", "nabla", "nablo", "nabos", "nacas", "nache", "nacho", "nacos", "nacre", "nacua", "nacus", "nadai", "nadal", "nadam", "nadas", "nadei", "nadem", "nades", "nadim", "nadir", "nados", "nadou", "nafil", "nafir", "nafis", "nafos", "nafta", "nafés", "nagai", "nagam", "nagar", "nagas", "nager", "nagis", "nagoa", "nagor", "nagou", "nague", "nagui", "nagul", "nagão", "nagôs", "naias", "naibe", "naide", "naifa", "naife", "naifo", "naipa", "naipo", "naira", "naire", "nairo", "naixó", "najas", "najis", "najés", "nalas", "nales", "nalga", "nalgo", "nalus", "namas", "namau", "namaz", "nambe", "nambi", "nambu", "nanai", "nanal", "nanam", "nanar", "nanas", "nandi", "nando", "nandu", "nanei", "nanem", "nanes", "nanga", "nanis", "nanja", "nanou", "nanás", "nanós", "napas", "napeu", "naque", "naras", "naraz", "narco", "narda", "nardo", "nargo", "nario", "narlo", "narra", "narre", "narro", "narsa", "narta", "narte", "narus", "narça", "nasce", "nasci", "nases", "nassa", "nasse", "nasso", "nasça", "nasço", "natas", "natil", "natio", "natis", "natos", "natro", "nauai", "nauas", "nauga", "naulo", "nauro", "nauta", "navas", "navaó", "navim", "navém", "naxas", "nazes", "nazis", "naïve", "ndala", "ndaus", "nduas", "ndulu", "nebel", "nebos", "nebri", "necas", "neceá", "necra", "necro", "necto", "nedas", "nedaí", "nedum", "neera", "nefas", "nefro", "negai", "negam", "negas", "negou", "negra", "negue", "negus", "negão", "neido", "nejas", "nelas", "neldo", "neles", "nelma", "nelos", "nemas", "nemba", "nembo", "nemeu", "nenas", "nende", "nendi", "nengo", "nenha", "nenho", "nenos", "nente", "nenês", "nepal", "nepas", "nepos", "neque", "neral", "neras", "neres", "nerol", "neros", "nerto", "nervu", "neseu", "nesga", "nesgo", "nessa", "nesse", "nesta", "neste", "nesto", "netas", "neuma", "neura", "neuri", "neuro", "nevai", "nevam", "nevas", "nevei", "nevem", "neves", "nevoe", "nevoo", "nevou", "nevri", "nevão", "nexos", "neóis", "neões", "ngana", "ngola", "nguta", "nhaca", "nhama", "nhata", "nhati", "nhato", "nhele", "nhimó", "nhoca", "nhole", "nhons", "nhuns", "niaia", "niais", "nialo", "niama", "niboé", "nibus", "nicai", "nicam", "nicar", "nicas", "nicha", "niche", "nicol", "nicou", "nicte", "nicti", "nicto", "nictá", "nicês", "nidai", "nidam", "nidar", "nidas", "nidei", "nidem", "nides", "nidor", "nidou", "nielo", "nifal", "nifes", "nifão", "niger", "nigra", "nilas", "nilgó", "nilie", "nilis", "niliá", "nilos", "nimas", "nimba", "nimbe", "nimbo", "nimpa", "ninai", "ninam", "ninas", "ninei", "ninem", "nines", "ninga", "ninha", "ninhe", "ninis", "ninou", "niopó", "niple", "nipos", "nipto", "nipão", "nipãs", "nique", "nirós", "nisca", "nisco", "nisei", "niseu", "nispo", "nissa", "nisão", "nisãs", "nital", "nitas", "nitos", "nitra", "nitre", "nitri", "nitro", "nival", "nives", "nizas", "nocai", "nocam", "nocar", "nocas", "nocha", "nocou", "nodai", "nodal", "nodam", "nodar", "nodas", "nodei", "nodem", "nodes", "nodoe", "nodoo", "nodos", "nodou", "noema", "noena", "noeno", "noese", "noete", "nogai", "nogal", "nogão", "noias", "noira", "noise", "noiva", "noive", "noivo", "nojai", "nojam", "nojar", "nojas", "nojei", "nojem", "nojes", "nojos", "nojou", "nolas", "nolha", "nomas", "nomeá", "nomia", "nomos", "nonal", "nonas", "nonca", "nonde", "nondo", "nones", "nonga", "nonos", "nooca", "nopal", "nopas", "nopes", "nopra", "noque", "noras", "norbu", "norna", "norsa", "norso", "norça", "nosco", "nosso", "notai", "notal", "notam", "notas", "notei", "notem", "notes", "notou", "notra", "notro", "nouca", "noute", "novai", "noval", "novam", "novar", "novei", "novel", "novem", "noves", "novou", "noxal", "noxas", "nozul", "noéis", "nubas", "nubeu", "nubla", "nuble", "nublo", "nubos", "nucal", "nucas", "nuces", "nudos", "nudás", "nuela", "nuelo", "nueza", "nufes", "nugas", "nugós", "nuitã", "nujol", "nulas", "numas", "numbe", "numbu", "numes", "numos", "nunce", "nundo", "nunes", "nungo", "nunos", "nuper", "nupés", "nurse", "nuruz", "nutai", "nutam", "nutar", "nutas", "nutei", "nutem", "nutes", "nutou", "nutra", "nutre", "nutri", "nutro", "nutum", "nuveá", "nuvol", "nuvre", "nução", "nuéis", "nuíma", "nyhan", "nylon", "nzila", "nábis", "nábão", "nácar", "nágua", "nájir", "nárea", "násea", "náseo", "násia", "násio", "nássi", "násua", "nátia", "návea", "návia", "náxia", "náxio", "názia", "názir", "nâmia", "nânia", "nègre", "nédia", "nédio", "nédji", "néeas", "nélia", "néone", "néons", "néper", "népia", "néria", "nério", "nésea", "néseo", "nênax", "nênia", "nênio", "nígua", "nílio", "nímia", "nímio", "nínji", "níobe", "nírex", "nísio", "níton", "nívea", "níveo", "nóbis", "nócia", "nócio", "nódio", "nódoa", "nória", "nório", "nótea", "nóteo", "nóvea", "nóvio", "nóxio", "nômeo", "nônea", "nônex", "nônio", "núbia", "núbil", "núbio", "núcio", "núfar", "númen", "núria", "núveo", "núxia", "oacás", "oalas", "oanda", "obane", "obans", "obeba", "obera", "obere", "obero", "obesa", "oboaz", "obori", "oboés", "obrai", "obram", "obrar", "obrei", "obrem", "obres", "obrou", "obsia", "obsta", "obste", "obsto", "obtém", "obtêm", "obutu", "obvia", "obvie", "obvim", "obvio", "obvir", "obvém", "obvêm", "ocada", "ocado", "ocaia", "ocais", "ocamo", "ocana", "ocano", "ocapi", "ocara", "ocaso", "ocava", "ocelo", "ochas", "oches", "ocida", "oclua", "ocluo", "ocluí", "ocnas", "ocnos", "ocota", "ocoto", "ocras", "ocrem", "ocres", "ocros", "octal", "octil", "octis", "octãs", "ocuas", "ocumé", "ocupa", "ocupe", "ocupo", "odara", "odedé", "odeia", "odeie", "odeio", "odeom", "odeão", "odiai", "odica", "odico", "odiei", "odila", "odina", "odino", "odiou", "odite", "odito", "odone", "odora", "odore", "odoro", "odres", "odule", "oduns", "odéon", "oenas", "oetas", "ofaié", "ofato", "ofega", "ofego", "ofeso", "ofira", "ofita", "ofite", "ofito", "ofres", "ofurô", "ogada", "ogado", "ogais", "ogamo", "ogana", "ogano", "ogara", "ogava", "ogens", "ogiva", "ogive", "ogivo", "ogodô", "ogoni", "ogras", "ogres", "ogros", "ogudê", "oguei", "oguem", "ogues", "oguim", "oguxó", "ogões", "oiacá", "oiana", "oiapi", "oiara", "oides", "oigai", "oigam", "oigar", "oigas", "oigou", "oigue", "oilas", "oincá", "oirai", "oiram", "oirar", "oiras", "oirei", "oirem", "oires", "oiros", "oirou", "oitis", "oitos", "oitão", "oixos", "oiçam", "oiças", "oiços", "olaba", "olabo", "olace", "olada", "olaia", "olalá", "olans", "olaré", "oleai", "oleal", "olear", "olede", "oleei", "oleia", "oleie", "oleio", "olelé", "oleno", "oleol", "oleou", "oleré", "olgas", "olhai", "olhal", "olham", "olhas", "olhei", "olhem", "olhes", "olhou", "olhão", "olias", "oligo", "olina", "olira", "oliva", "olive", "olivo", "olmos", "olobó", "oloco", "olodé", "oloma", "olori", "oluas", "olubó", "omada", "omado", "omaha", "omaiá", "omalo", "omalá", "omana", "omani", "omano", "omaso", "omata", "ombia", "ombis", "ombos", "ombrã", "ombus", "omelê", "omeme", "omete", "omina", "omine", "omino", "omiri", "omita", "omite", "omiti", "omito", "omiôs", "omnes", "omolu", "omoma", "omuis", "omués", "onaga", "oncos", "ondai", "ondam", "ondar", "ondei", "ondem", "ondes", "ondeá", "ondim", "ondoe", "ondoo", "ondou", "ondoá", "onera", "onere", "onero", "oneta", "onfra", "onfuá", "ongos", "ongue", "onhis", "onhãs", "onica", "onico", "onins", "oniro", "onixe", "onjos", "onoba", "onone", "onças", "oonim", "opaba", "opaca", "opada", "opado", "opais", "opaié", "opamo", "opara", "opava", "opeis", "opelé", "opemo", "opera", "opere", "opero", "opiai", "opiam", "opiar", "opias", "opiei", "opiem", "opies", "opila", "opile", "opilo", "opima", "opimo", "opina", "opine", "opino", "opiou", "oplos", "opomo", "oporá", "opsia", "opsis", "optai", "optam", "optas", "optei", "optem", "optes", "optou", "opóis", "opõem", "opões", "oquei", "oquem", "oques", "oqueá", "oquim", "oquié", "oquás", "oraca", "orada", "orado", "orago", "orais", "oramo", "orana", "orano", "orara", "orará", "orate", "orava", "orbas", "orbos", "orcei", "orcem", "orces", "orcos", "ordos", "oreai", "orear", "oreei", "orega", "oreia", "oreie", "oreio", "oreis", "orela", "oremo", "oreou", "orete", "oreus", "orfno", "orgie", "oribi", "orica", "orida", "orita", "orite", "orixá", "oriza", "oriás", "oriôs", "orjal", "orlai", "orlam", "orlar", "orlas", "orlei", "orlem", "orles", "orleã", "orlom", "orlon", "orlou", "ormuz", "ornai", "ornam", "ornar", "ornas", "ornei", "ornem", "ornes", "orneá", "ornis", "ornou", "oromo", "oropa", "orque", "orqui", "orseu", "ortas", "ortol", "ortos", "oruco", "orupá", "oruzu", "oruás", "orçai", "orçam", "orçar", "orças", "orçaz", "orçou", "osana", "oscas", "osces", "oscos", "osela", "osgas", "osler", "osmas", "osmia", "osmol", "osmos", "osona", "ossas", "ossés", "ostai", "ostar", "ostea", "osteo", "ostes", "ostro", "oteca", "otelo", "otina", "otins", "otita", "otite", "otoba", "otojo", "otoma", "otomi", "otona", "otoni", "otoro", "otose", "ototó", "otões", "ouari", "ouaru", "oudre", "ougai", "ougam", "ougar", "ougou", "ougue", "ougãs", "ourai", "ouram", "ourar", "ouras", "ourei", "oures", "ouros", "ourou", "ourém", "ousai", "ousam", "ousas", "ousei", "ousem", "ouses", "ousia", "ousie", "ousio", "ousou", "outai", "outam", "outar", "outas", "outei", "outem", "outes", "outou", "outus", "outão", "ouvem", "ouves", "ouvia", "ouvis", "ouviu", "ouxes", "ouzes", "ouzos", "ouçam", "ouças", "oução", "ovada", "ovado", "ovais", "ovala", "ovale", "ovamo", "ovara", "ovate", "ovava", "oveis", "ovemo", "oveva", "ovina", "ovino", "oviua", "ovula", "ovule", "ovéns", "oxale", "oxeba", "oxeol", "oxera", "oxeus", "oxida", "oxide", "oxido", "oxilo", "oxima", "oxina", "oxião", "oxoce", "oxono", "oxura", "ozeai", "ozear", "ozeei", "ozeia", "ozeie", "ozeio", "ozena", "ozeou", "ozola", "ozolo", "ozone", "ozono", "ozoná", "ozueu", "oçãim", "oécio", "oéone", "oídio", "oúcos", "paari", "pabas", "pacaa", "pacas", "pacau", "pacaí", "pacho", "pachã", "pacol", "pacte", "pacto", "pactá", "pacus", "pacuã", "pacão", "pacém", "pacés", "padas", "padeu", "padma", "pados", "padro", "padrá", "padus", "padês", "paetê", "pafos", "pafuá", "pagai", "pagas", "pagel", "pagem", "pager", "pageu", "pagou", "pagro", "pague", "pagão", "paica", "pailó", "paina", "pains", "paiol", "paios", "paira", "paire", "pairo", "paiva", "paive", "paivo", "paixa", "paiás", "paião", "pajaú", "pajem", "pajeá", "pajeú", "pajão", "pajés", "palar", "palas", "palaú", "paleo", "pales", "palhe", "palho", "palia", "palie", "palme", "palor", "palos", "palpe", "palpo", "palpá", "palra", "palre", "palro", "palão", "pamas", "pambo", "pamis", "pamoá", "pampo", "panai", "panal", "panam", "panar", "panas", "panco", "pande", "pando", "panei", "panem", "panes", "panga", "pango", "panha", "panhe", "panhi", "panis", "panja", "panje", "panou", "panri", "panró", "panta", "pantó", "panão", "pança", "paolu", "papai", "papal", "papam", "papar", "papas", "papei", "papem", "paper", "papes", "papeá", "papie", "papiá", "papos", "papou", "papua", "papus", "papão", "paqui", "paquã", "paquê", "parai", "paral", "param", "paras", "parau", "parba", "parca", "parde", "parei", "parem", "pares", "parga", "pargo", "paria", "paris", "pariu", "pariá", "parla", "parle", "parlo", "parno", "parnã", "parné", "parol", "parou", "parra", "parre", "parro", "parse", "parta", "parte", "parti", "parto", "parum", "parus", "paruí", "parva", "parvi", "parvu", "parão", "parós", "pasce", "pasci", "pasma", "pasme", "pasmo", "passa", "passe", "passo", "pasta", "paste", "pasto", "pasça", "pasço", "patau", "pataz", "pataí", "patel", "pateá", "patie", "patim", "patis", "patiá", "patos", "patoá", "patum", "patuá", "patão", "patém", "patês", "paual", "pauda", "pauis", "paula", "paule", "paulo", "pause", "pauso", "pauta", "paute", "pauto", "pauxi", "paval", "pavia", "pavoa", "pavol", "pavos", "pavãs", "pavês", "paxaú", "paxás", "pazas", "pazes", "pazeá", "pazão", "paçal", "paços", "paíba", "paúna", "paúra", "peada", "peado", "peais", "peala", "peale", "pealo", "peana", "peane", "peara", "peava", "peaça", "pebas", "pecai", "pecam", "pecas", "pecha", "peche", "pecho", "pecos", "pecou", "pecte", "pecém", "pecói", "pedem", "pedes", "pedia", "pedis", "pediu", "pedos", "pedre", "peeis", "pegai", "pegam", "pegas", "pegma", "pegol", "pegos", "pegou", "pegue", "pegus", "pegão", "peiam", "peias", "peida", "peide", "peido", "peiem", "peies", "peina", "peine", "peino", "peipá", "peita", "peite", "peito", "peitu", "peixa", "peixo", "peiús", "pejai", "pejam", "pejar", "pejas", "pejei", "pejem", "pejes", "pejis", "pejos", "pejou", "pelai", "pelam", "pelar", "pelas", "pelei", "pelem", "peles", "peleu", "peleá", "pelga", "pelia", "pelma", "pelor", "pelou", "pelta", "pelve", "pelão", "pelém", "pemas", "pemba", "pembe", "pemis", "pemom", "pempa", "penai", "penam", "penar", "penas", "penca", "pence", "pencó", "penda", "pende", "pendi", "pendo", "penei", "penem", "penes", "pengó", "penha", "penia", "penol", "penou", "pensa", "pense", "penso", "penão", "peoas", "peona", "peota", "peote", "pepas", "pepel", "peplo", "pepos", "pepsé", "pepés", "peque", "pequi", "peral", "peras", "perau", "perca", "perce", "perco", "perde", "perdi", "peres", "pereá", "peris", "perla", "perle", "perlo", "perma", "perne", "perno", "perns", "perol", "peros", "peroá", "perra", "perro", "perrê", "perue", "perum", "peruo", "perus", "perva", "pervi", "pervo", "pervê", "pesai", "pesam", "pesas", "pesca", "pesei", "pesem", "peses", "pesga", "pesgo", "pesmé", "pesou", "pespe", "pesse", "pesto", "pesão", "petai", "petal", "petam", "petar", "petas", "petei", "petes", "peteá", "petim", "petit", "petiz", "petiá", "petiú", "petou", "petra", "petro", "petum", "petão", "petém", "peuas", "peuis", "peumo", "pevas", "pexes", "pexia", "pexim", "pexão", "pexãs", "pexém", "pezes", "pezão", "peçam", "peças", "peúco", "peúga", "peúle", "peúva", "pfuco", "pfucá", "piaba", "piabe", "piabo", "piaca", "piado", "piadé", "piafo", "piafá", "piafé", "piaga", "piaia", "piais", "piale", "pialo", "pialá", "piamo", "piana", "piapé", "piara", "piará", "piaus", "piauí", "piava", "piaço", "pibós", "picai", "pical", "picam", "picas", "picaú", "picha", "piche", "pichi", "picho", "picle", "picoa", "picou", "picre", "picro", "picta", "picto", "picue", "picul", "picum", "picuo", "picus", "picuá", "picuí", "picão", "pidas", "pidir", "pidão", "pidós", "piega", "piego", "pieis", "piela", "pielo", "piemo", "piese", "pieze", "piezo", "pifai", "pifam", "pifar", "pifas", "pifei", "pifem", "pifes", "pifou", "pifre", "pifão", "pigai", "pigal", "pigam", "pigar", "pigas", "pigeu", "pigia", "pigma", "pigou", "pigra", "pigro", "pigue", "piguá", "piina", "pilai", "pilam", "pilas", "pilau", "pilda", "pilde", "pildo", "pilei", "pilem", "piles", "pilhe", "pilho", "pilim", "pilma", "pilou", "pilra", "pilão", "piléu", "pilós", "pimas", "pimba", "pimbe", "pimbo", "pimpa", "pimpe", "pimpo", "pinai", "pinam", "pinar", "pinas", "pinaz", "pince", "pindi", "pindá", "pindó", "pinei", "pinel", "pinem", "pines", "pinga", "pingo", "pinha", "pinhé", "pinol", "pinou", "pinte", "pinto", "pinça", "pinço", "pinéu", "pioca", "pioia", "pioié", "piola", "piona", "piora", "piore", "pioro", "pioró", "piose", "pipai", "pipal", "pipam", "pipar", "pipas", "pipei", "pipem", "pipes", "pipia", "pipie", "pipio", "pipiu", "pipou", "pipra", "pipão", "pique", "piqui", "piral", "piram", "piras", "piraí", "piraú", "pirca", "pirei", "pirem", "pireu", "pirex", "pirgo", "piria", "piris", "piriz", "pirol", "pirou", "piroá", "pirum", "piruá", "pisai", "pisam", "pisas", "pisca", "pisco", "pisei", "pisem", "pises", "piseu", "pisgo", "pisgá", "pisoa", "pisoe", "pisoo", "pisou", "pissa", "piste", "pisto", "pisão", "pitai", "pitam", "pitar", "pitas", "pitei", "pites", "pitiú", "pitom", "pitos", "pitou", "pitus", "pituá", "pituí", "pitão", "pitém", "pitéu", "piuco", "piuns", "pivas", "pivôs", "pixas", "pixel", "pixeá", "pixuá", "pixés", "pixéu", "pizas", "piões", "piúba", "piúca", "piúgo", "piúna", "piúva", "placê", "plaga", "plana", "plane", "plani", "plano", "plapo", "platô", "pleas", "pleos", "plexo", "plias", "plica", "plico", "plide", "plido", "plidá", "ploce", "plome", "plomo", "plota", "plote", "ploto", "pluga", "pluge", "plugo", "plume", "plumo", "pluri", "plush", "pluto", "pléon", "pnigo", "pnons", "poaia", "poais", "poare", "poaçu", "pobes", "pobla", "pobra", "pocai", "pocam", "pocar", "pocha", "poche", "pocho", "pocou", "podai", "podal", "podam", "podas", "podei", "podem", "podes", "podia", "podoa", "podou", "podrã", "podão", "podói", "poeis", "poejo", "poerá", "poete", "poeto", "pofia", "pofos", "pogas", "poiai", "poial", "poiam", "poiar", "poias", "poido", "poiei", "poiem", "poies", "poilu", "poios", "poiou", "poisa", "poise", "poiso", "poita", "poite", "poito", "poiçá", "pojai", "pojal", "pojam", "pojar", "pojas", "pojei", "pojem", "pojes", "pojou", "pojós", "polas", "polau", "polca", "polco", "polda", "poldo", "polem", "poleá", "polha", "polho", "polia", "polim", "polis", "poliu", "polja", "polje", "polme", "polmo", "polom", "polpe", "polpo", "polua", "polui", "poluo", "polva", "polão", "polés", "pomal", "pomas", "pombe", "pomes", "pomeá", "pomos", "pompo", "ponas", "ponce", "poncã", "poncó", "ponda", "ponde", "pondo", "pones", "ponfo", "ponga", "pongo", "ponha", "ponhe", "ponho", "ponis", "ponjê", "ponom", "poone", "popas", "popes", "popie", "popio", "popiã", "popão", "popôs", "poque", "porei", "porem", "pores", "poria", "porma", "porme", "pornô", "porra", "porro", "porta", "porte", "porto", "porás", "porão", "posai", "posam", "posas", "posca", "posei", "posem", "poses", "posou", "pospô", "possa", "posso", "posta", "poste", "posto", "potas", "potin", "potis", "potos", "potra", "potro", "potum", "potus", "potão", "poula", "poule", "poulo", "poupa", "poupe", "poupo", "pousa", "pouse", "pouso", "pouta", "poute", "pouto", "povoa", "povoe", "povoo", "povão", "poxas", "poçal", "poças", "poóis", "prago", "prais", "prajá", "prama", "prana", "prans", "prase", "prava", "pravo", "praxo", "praxá", "praza", "prazê", "preai", "prear", "predá", "predê", "preei", "prega", "prego", "preia", "preie", "preio", "prelo", "prema", "preme", "premi", "premo", "preou", "prepô", "prese", "preso", "previ", "prevê", "preza", "preze", "prezo", "preás", "prias", "prima", "prime", "primi", "primo", "prino", "prior", "prise", "prita", "priul", "prius", "priva", "prive", "privo", "prião", "proai", "proal", "proam", "proar", "proas", "proba", "probo", "proco", "procá", "proei", "proem", "proes", "profs", "proiz", "prona", "prono", "proou", "propô", "prose", "proso", "proto", "prova", "prove", "provi", "provo", "provê", "proze", "prozo", "prozá", "pruam", "pruca", "pruem", "pruga", "pruir", "pruiu", "pruma", "prume", "pruno", "prura", "prure", "pruri", "pruro", "pruás", "pruía", "pruís", "préon", "príon", "psalo", "psama", "psara", "psaro", "pseca", "psesa", "pseso", "pseta", "pseto", "psica", "psico", "psila", "psilo", "psoas", "psoco", "psofo", "psolo", "psora", "ptena", "ptere", "ptero", "ptise", "ptose", "puada", "puado", "puaia", "puais", "puamo", "puara", "puava", "puaço", "puaçu", "pubai", "pubam", "pubar", "pubas", "pubei", "pubem", "pubes", "pubou", "pucha", "pucho", "pucos", "puctu", "puctó", "pucus", "puder", "pudle", "pudlo", "pudlá", "pudus", "pueis", "puela", "puemo", "puera", "pueri", "pufes", "pufos", "pugna", "pugne", "pugno", "puirá", "puite", "puito", "pujai", "pujam", "pujar", "pujas", "pujei", "pujem", "pujes", "pujou", "pulai", "pulam", "pulas", "pulei", "pulem", "pules", "puleá", "pulgo", "pulha", "pulhe", "pulho", "pulim", "puliz", "pulos", "pulou", "pulpo", "pulsa", "pulse", "pulso", "pulte", "pulto", "pultá", "pulão", "pumas", "pumba", "pumbo", "punam", "punas", "punce", "pundé", "punem", "punes", "punga", "punge", "pungi", "pungo", "punha", "punia", "punis", "puniu", "punja", "punjo", "punks", "punra", "punte", "punto", "puntá", "punus", "punça", "punço", "pupai", "pupal", "pupam", "pupar", "pupas", "pupei", "pupem", "pupes", "pupia", "pupou", "pupus", "pural", "puras", "pureu", "purga", "purgo", "purim", "puris", "puros", "puruí", "purês", "puser", "putal", "putas", "puteá", "putis", "putos", "putto", "puvas", "puvis", "puviá", "puxai", "puxam", "puxas", "puxei", "puxem", "puxes", "puxos", "puxou", "puzos", "puçás", "puíam", "puías", "puída", "puído", "puíra", "puíta", "pàdar", "páder", "pádoa", "pádua", "páfia", "páfio", "págua", "pálea", "pálio", "pális", "pápio", "párea", "pário", "pársi", "páteo", "páter", "páxia", "pânax", "pânus", "péans", "pélio", "péone", "péons", "pépia", "péxis", "pênea", "pênio", "pênis", "pícea", "píceo", "píera", "píere", "píero", "pífia", "pífio", "pígea", "pígeo", "píjin", "pílea", "píleo", "pília", "pílio", "pínea", "píneo", "pínus", "píono", "píons", "píper", "píqua", "pírea", "pírio", "písea", "píseo", "písin", "pítia", "pítio", "pítis", "píton", "píxis", "pódex", "pódon", "pógea", "pólex", "pólio", "pólis", "pólux", "pório", "pótea", "pótia", "póvoa", "púbis", "púgil", "púlex", "quaco", "quada", "quado", "quaga", "qualé", "quara", "quare", "quari", "quark", "quart", "quaró", "quasa", "quati", "quatá", "qubit", "queba", "quebe", "queca", "queci", "quecé", "queda", "quede", "quedo", "queia", "quela", "quele", "quelo", "quemi", "quemo", "quena", "queno", "quepe", "quera", "queri", "quero", "querê", "quete", "queto", "queza", "quiaz", "quiba", "quibe", "quicé", "quido", "quija", "quile", "quili", "quilo", "quime", "quimi", "quimo", "quine", "quino", "quios", "quipo", "quipá", "quipé", "quira", "quire", "quiri", "quiro", "quita", "quite", "quiti", "quito", "quiuí", "quivi", "quixa", "quixó", "quiza", "quiás", "quiço", "quiês", "quote", "quoto", "quáli", "quépi", "rabal", "rabaz", "rabdo", "rabel", "rabeá", "rabie", "rabil", "rabio", "rabis", "rabos", "rabão", "racaú", "raceá", "racha", "rache", "racho", "racle", "racum", "radas", "radia", "radie", "radio", "radão", "rafai", "rafam", "rafar", "rafas", "rafei", "rafem", "rafes", "raffe", "raffo", "raffá", "rafie", "rafio", "rafis", "rafou", "ragas", "ragia", "raglã", "rague", "ragus", "raiai", "raial", "raiam", "raias", "raide", "raiei", "raiem", "raies", "raile", "raiom", "raiou", "raive", "raivó", "raião", "rajai", "rajam", "rajar", "rajas", "rajei", "rajem", "rajes", "rajou", "rajão", "ralai", "ralam", "ralas", "ralei", "ralem", "rales", "raleá", "ralha", "ralhe", "ralho", "ralis", "rally", "ralos", "ralou", "ralão", "ramai", "ramal", "ramam", "ramar", "ramas", "rambo", "ramei", "ramem", "rames", "rameu", "rameá", "ramie", "ramis", "ramno", "ramou", "ranal", "ranas", "ranca", "rance", "randa", "ranes", "ranfe", "ranfo", "ranfá", "ranga", "range", "rangi", "rango", "ranha", "ranhe", "ranho", "ranis", "ranja", "ranjo", "ranus", "ranço", "rapai", "rapam", "rapar", "rapas", "rapei", "rapel", "rapem", "rapes", "rapie", "rapio", "rapou", "rapta", "rapte", "rapto", "rapão", "raque", "rarai", "raram", "rarar", "rarei", "rarem", "rares", "rareá", "rarou", "rasai", "rasam", "rasar", "rasas", "rasca", "rasco", "rasei", "rasem", "rases", "rasga", "rasgo", "rasos", "rasou", "raspa", "raspe", "raspo", "rasta", "raste", "rasão", "ratai", "ratam", "ratan", "ratar", "ratas", "ratei", "ratel", "ratem", "rates", "rateá", "ratim", "ratio", "ratis", "ratou", "ratão", "raudã", "rauli", "rausa", "rause", "rauso", "ravas", "raves", "ravos", "raxas", "razia", "razie", "razio", "razoa", "razoe", "razoo", "raças", "raçoa", "raçoe", "raçoo", "raçor", "raíta", "reage", "reagi", "reaja", "reajo", "reame", "reamo", "reamá", "reata", "reate", "reato", "reavê", "reaça", "rebai", "rebam", "rebar", "rebas", "rebei", "rebel", "rebes", "reboa", "reboe", "reboo", "rebou", "rebém", "recai", "recam", "recar", "recaí", "receá", "rechã", "rechô", "recos", "recou", "recru", "recta", "recto", "recua", "recue", "recuo", "recão", "recém", "redai", "redar", "redei", "reder", "redeu", "redil", "redis", "rediz", "redou", "redox", "redra", "redre", "redro", "reduz", "redás", "redão", "redém", "refaz", "refez", "refia", "refie", "refil", "refio", "refis", "refiz", "refla", "refle", "reflo", "regai", "regal", "regam", "regas", "regei", "regem", "reges", "regeu", "regia", "regma", "regno", "regoa", "regoe", "regoo", "regos", "regou", "regra", "regre", "regro", "regue", "regão", "reica", "reich", "reico", "reida", "reide", "reima", "reina", "reine", "reino", "reira", "reivó", "reixa", "reixe", "reixo", "rejam", "rejas", "rejão", "relai", "relam", "relar", "relas", "relax", "relei", "relem", "releu", "relfa", "relha", "relhe", "relho", "relia", "relou", "reluz", "relve", "relvo", "relão", "relês", "remai", "remal", "remam", "remas", "remei", "remel", "remem", "remes", "remeá", "remia", "remir", "remis", "remiu", "remix", "remoa", "remoo", "remos", "remou", "remoê", "remoí", "remói", "renas", "renda", "rende", "rendi", "rendo", "renga", "renge", "rengo", "renha", "renhe", "renhi", "renho", "renos", "renta", "rento", "renua", "renui", "renuo", "renão", "repas", "repes", "replo", "repta", "repte", "repto", "repus", "repôs", "repõe", "reque", "reriú", "reses", "resgo", "resgá", "resma", "resme", "resmo", "resos", "respe", "respo", "ressa", "resta", "reste", "resto", "retai", "retal", "retam", "retar", "retei", "retes", "reteá", "retor", "retos", "retou", "retre", "retém", "retêm", "reuma", "reuni", "reuse", "reusá", "revel", "revez", "revia", "revim", "revir", "reviu", "revoe", "revoo", "revém", "revêm", "revês", "rexes", "rexio", "reyes", "rezai", "rezam", "rezas", "rezei", "rezem", "rezes", "rezou", "rezão", "reças", "reína", "reúna", "reúne", "reúno", "riais", "riamo", "riana", "riano", "riata", "ribai", "ribam", "ribar", "ribas", "ribei", "ribem", "ribes", "ribou", "ribus", "ribós", "ricei", "ricem", "rices", "ricto", "ricão", "ridas", "rides", "ridor", "ridão", "ridós", "riela", "riete", "rifai", "rifam", "rifar", "rifas", "rifei", "rifem", "rifes", "rifeu", "rifle", "riflo", "riflá", "rifou", "rifte", "rifão", "rigai", "rigam", "rigar", "rigas", "rigol", "rigos", "rigou", "rigue", "rijai", "rijal", "rijam", "rijar", "rijas", "rijei", "rijem", "rijes", "rijos", "rijou", "rijão", "rilai", "rilam", "rilar", "rilas", "rilei", "rilem", "riles", "rilha", "rilhe", "rilho", "rilos", "rilou", "rimai", "rimam", "rimas", "rimei", "rimem", "rimes", "rimos", "rimou", "rinal", "rinas", "rince", "rinco", "rindo", "rinfe", "rinfo", "rinfã", "ringe", "ringi", "rinha", "rinhe", "rinho", "rinja", "rinjo", "rinos", "rinto", "rinça", "rioja", "riola", "ripai", "ripal", "ripam", "ripar", "ripas", "ripei", "ripem", "ripes", "ripeu", "ripia", "ripou", "ripão", "rique", "riram", "riras", "rirei", "rirem", "rires", "riria", "rirmo", "rirás", "rirão", "risca", "risco", "risor", "rissa", "risse", "risso", "riste", "risão", "risãs", "ritas", "ritma", "ritme", "ritão", "rixai", "rixam", "rixar", "rixas", "rixei", "rixem", "rixes", "rixou", "rizai", "rizam", "rizar", "rizas", "rizei", "rizem", "rizes", "rizou", "riçai", "riçam", "riçar", "riçol", "riçou", "riúta", "roais", "roala", "roalo", "roamo", "robaz", "robes", "roble", "robot", "rocal", "rocaz", "rocei", "rocem", "roces", "rocia", "rocie", "rocim", "rocio", "rocle", "roclá", "rocló", "rocão", "rocós", "rodai", "rodal", "rodam", "rodas", "rodei", "rodel", "rodem", "rodes", "rodeá", "rodim", "rodos", "rodou", "rodão", "roeis", "roemo", "roera", "roerá", "rofos", "rogai", "rogal", "rogam", "rogar", "rogas", "rogem", "roges", "rogos", "rogou", "rogue", "roila", "roixo", "rojai", "rojam", "rojar", "rojas", "rojei", "rojem", "rojes", "rojou", "rojão", "rolai", "rolam", "rolas", "rolaz", "rolda", "rolde", "roldo", "rolei", "rolem", "roles", "rolhe", "rolho", "rolis", "rolou", "rolão", "roman", "romar", "romeu", "rompa", "rompe", "rompi", "rompo", "romão", "romãs", "ronca", "ronco", "ronda", "ronde", "rondo", "rondó", "rones", "ronga", "ronge", "rongó", "ronha", "ronim", "ronos", "rontó", "roque", "rorai", "roram", "rorar", "roras", "rorei", "rorem", "rores", "rorou", "rosai", "rosal", "rosam", "rosar", "rosco", "rosei", "rosem", "roses", "rosna", "rosne", "rosno", "rosou", "rosta", "roste", "rosti", "rosão", "rotai", "rotam", "rotar", "rotei", "rotem", "rotes", "roteá", "rotim", "rotor", "rotos", "rotou", "rouba", "roube", "roubo", "rouce", "rouco", "rouge", "round", "roupe", "roupo", "roxas", "roxeá", "roxos", "royal", "roçai", "roçam", "roças", "roçou", "roíam", "roías", "roída", "roído", "ruada", "ruado", "ruais", "ruamo", "ruana", "ruano", "ruara", "ruava", "ruaça", "rubai", "rubim", "rubis", "rublo", "rubor", "rubos", "rubra", "rubás", "rubão", "rucei", "rucem", "ruces", "ruche", "rudas", "rudes", "rudez", "rudos", "rudão", "rueis", "ruela", "ruemo", "rufai", "rufam", "rufar", "rufas", "rufei", "rufem", "rufes", "rufia", "rufie", "rufla", "rufle", "ruflo", "rufol", "rufos", "rufou", "rufão", "rugai", "rugam", "rugar", "rugas", "rugby", "rugem", "ruges", "rugia", "rugis", "rugiu", "rugou", "rugue", "ruide", "ruimo", "ruins", "ruirá", "rujam", "rujas", "rulai", "rulam", "rular", "rulas", "rulei", "rulem", "rules", "rulhe", "rulho", "rulhá", "rulou", "rulul", "rumai", "rumam", "rumar", "rumas", "rumba", "rumbe", "rumbo", "rumei", "rumem", "rumes", "rumie", "rumio", "rumis", "rumiá", "rumou", "rumpi", "runas", "runcó", "rundo", "runfe", "runfo", "runfá", "rungã", "runhe", "runho", "runhá", "runim", "runlé", "runos", "runtó", "ruolz", "rupai", "rupam", "rupar", "rupas", "rupei", "rupem", "rupes", "rupia", "rupou", "rupta", "rupto", "rupul", "rusas", "rusco", "rusga", "rusgo", "rusma", "russa", "russe", "rusta", "ruste", "rusti", "rusto", "rutai", "rutal", "rutam", "rutar", "rutas", "rutei", "rutem", "rutes", "rutim", "rutou", "rutul", "ruçai", "ruçam", "ruçar", "ruças", "ruçou", "ruíam", "ruías", "ruída", "ruído", "ruíra", "ruões", "rábia", "rácio", "rádom", "rádon", "ráfia", "rágio", "rápia", "ráqui", "rátus", "râmeo", "rébus", "récia", "récio", "récua", "rédea", "rédia", "régia", "régie", "régio", "répia", "révoa", "réxia", "rênio", "ríade", "rícia", "rício", "ríeis", "rígel", "rígia", "rígio", "rínia", "rínio", "rípio", "rítio", "ríton", "rívea", "róber", "róbia", "róbor", "róbur", "ródeo", "ródio", "rópia", "rósea", "róseo", "rósia", "rósio", "rótia", "rúbea", "rúbeo", "rúbia", "rúbio", "rúfio", "rúgbi", "rúgio", "rúmen", "rúmex", "rútea", "sabal", "sabei", "sabem", "sabes", "sabeu", "sabia", "sabin", "sabir", "sabiú", "sable", "saboi", "sabra", "sabre", "sabás", "sacai", "sacal", "sacam", "sacas", "sacaí", "saces", "sacha", "sacho", "sachê", "sacia", "sacie", "sacio", "sacis", "sacou", "sacre", "sacta", "sacti", "sacuê", "sacão", "sadal", "sadas", "sades", "sadim", "sadis", "sados", "sadrá", "sadus", "sadão", "saeta", "safai", "safam", "safar", "safas", "safei", "safem", "safer", "safes", "safio", "safos", "safou", "safre", "safus", "safão", "sagai", "sagas", "sages", "sagez", "sagma", "sagos", "sagra", "sagre", "sagro", "sagui", "sagum", "sagus", "saguá", "sagão", "saial", "saiam", "saias", "saiba", "saibo", "saica", "saide", "saiga", "saijé", "saina", "saino", "sains", "sainé", "saipé", "sairi", "sairá", "sairé", "saium", "saivá", "saixê", "saião", "sajum", "sajus", "salaz", "salda", "salde", "saldo", "sales", "salga", "salgo", "salhe", "salho", "salhá", "salmi", "salol", "salos", "salpa", "salse", "salso", "salta", "salte", "salto", "salus", "salva", "salve", "salvo", "salça", "salém", "samas", "samba", "sambe", "sambo", "sameu", "samos", "sampa", "sampo", "sampé", "samur", "samão", "sanai", "sanam", "sanas", "sanca", "sanco", "sande", "sando", "sandá", "sanei", "sanem", "sanes", "saneá", "sanga", "sango", "sanja", "sanje", "sanjo", "sanou", "sansa", "santé", "sanza", "sapai", "sapal", "sapam", "sapar", "sapas", "sapei", "sapem", "sapes", "sapeu", "sapeá", "sapim", "sapos", "sapou", "sapro", "sapus", "sapuá", "sapão", "saque", "saqui", "sarah", "sarai", "saram", "saran", "saras", "sarco", "sarde", "sardo", "sarei", "sarem", "sares", "sarga", "sargo", "saria", "sarin", "saris", "sarja", "sarje", "sarjo", "sarno", "sarné", "saros", "sarou", "saroé", "sarpa", "sarpe", "sarpo", "sarra", "sarre", "sarta", "sarte", "sarto", "sarus", "saruá", "saruê", "sarão", "sarça", "sassa", "sasse", "sasso", "sates", "satis", "satão", "satãs", "saudi", "saudá", "sauim", "sauiá", "sauni", "saupé", "sauro", "saurá", "sauás", "sauís", "saval", "savas", "saviá", "saxes", "saxos", "saxão", "saxãs", "sazoe", "sazoo", "sazos", "sazoá", "sazus", "sazão", "saéis", "saíam", "saías", "saíco", "saído", "saímo", "saíra", "saíta", "saúba", "saúco", "saúda", "saúde", "saúdo", "saúva", "scone", "scope", "score", "scène", "seada", "sebas", "sebel", "sebes", "sebos", "secai", "secal", "secam", "secas", "secie", "secou", "secta", "secto", "sedai", "sedal", "sedam", "sedan", "sedar", "sedas", "sedei", "seder", "sedes", "sedeá", "sedia", "sedie", "sedio", "sedor", "sedou", "seduz", "sedão", "sedém", "seeda", "sefel", "sefia", "segai", "segam", "segar", "segas", "seges", "segna", "segne", "segno", "segou", "segre", "segua", "segue", "segui", "seguo", "segur", "segão", "seibo", "seice", "seide", "seima", "seira", "seisa", "seite", "seito", "seive", "seivo", "seixa", "seixo", "seiça", "sejam", "sejas", "sejos", "selai", "selam", "selas", "selei", "selem", "seles", "selha", "selho", "seloa", "selou", "selão", "semas", "semba", "sembo", "sembê", "semel", "semio", "senal", "senas", "senda", "sendo", "senes", "senga", "sengo", "senho", "senil", "senis", "senos", "senra", "sensu", "senta", "sente", "senti", "sento", "sepos", "sepse", "septa", "septe", "septo", "seque", "seral", "serei", "serem", "seres", "serfo", "seria", "serie", "serio", "seris", "seriú", "serja", "serna", "seroa", "seroe", "seroo", "serpa", "serpe", "serra", "serre", "serro", "sertã", "serve", "servi", "serze", "serzi", "serás", "serão", "serós", "sesgo", "sesma", "sesme", "sesmo", "sessa", "sesse", "sesso", "sesta", "sesto", "setai", "setam", "setar", "setei", "setem", "setes", "seteá", "setia", "setos", "setou", "setra", "sevai", "sevam", "sevar", "sevas", "sevei", "sevem", "seves", "sevou", "sexai", "sexam", "sexar", "sexas", "sexei", "sexem", "sexes", "sexos", "sexou", "sexue", "sexuo", "sexuá", "sezoe", "sezoo", "sezoá", "sezão", "share", "sheik", "short", "shows", "shoyu", "shunt", "siada", "siado", "siais", "sialo", "siame", "siamo", "siara", "siaus", "siava", "sibar", "sibas", "sibes", "sicas", "sicia", "siclo", "sicos", "sicus", "sidas", "sidis", "sidos", "sidra", "sidão", "sieis", "siemo", "siena", "sifle", "siflo", "siflá", "sifão", "sigam", "sigas", "sigeu", "sigle", "siglo", "sigmó", "signa", "signe", "sigro", "silas", "siles", "silfa", "silfo", "silha", "silho", "silos", "silte", "silva", "silve", "silvo", "simas", "simba", "simbi", "simbo", "simum", "simão", "sinai", "sinam", "sinar", "sinas", "sinda", "sindi", "sindo", "sinei", "sinem", "sines", "sineu", "singa", "sinhá", "sinhô", "sinis", "sinos", "sinou", "sinta", "sinto", "sinue", "sinuo", "sinuá", "sinxó", "sinão", "sioba", "siode", "siote", "sioux", "sipai", "sipes", "sipia", "sique", "siras", "sires", "sirfa", "sirfo", "sirga", "sirgo", "siris", "siriú", "sirló", "sirma", "siros", "sirte", "sirva", "sirvo", "sirza", "sirzo", "sisai", "sisal", "sisam", "sisar", "sisas", "sisei", "sisem", "sises", "sisgo", "sisma", "sisme", "sisor", "sisos", "sisou", "sissó", "sisão", "sitar", "sitas", "sites", "sitia", "sitie", "sitio", "sitos", "sitra", "situa", "situe", "situo", "siusi", "sivan", "sivas", "sivom", "sivão", "sizau", "siões", "siúba", "skate", "slack", "slide", "snifa", "snife", "snifo", "snipe", "snobe", "soada", "soado", "soais", "soaje", "soajo", "soala", "soamo", "soara", "soará", "soava", "sobas", "sobem", "sobes", "sobeu", "sobia", "sobie", "sobpé", "sobpô", "sobra", "sobre", "sobro", "socai", "socam", "socas", "soclo", "socol", "socos", "socou", "socoí", "socão", "sodai", "sodam", "sodar", "sodas", "sodei", "sodem", "sodes", "sodou", "sodra", "soeis", "soemo", "soera", "sofia", "sofra", "sofre", "sofri", "sofro", "sofrê", "sofás", "sogai", "sogam", "sogar", "sogas", "sogou", "sogre", "sogue", "soguá", "soila", "soins", "soito", "sojas", "solai", "solam", "solas", "solau", "solaz", "solda", "solde", "soldo", "solei", "solem", "soles", "solfa", "solfe", "solfo", "solha", "solhe", "solho", "solia", "solos", "solou", "solta", "solte", "solto", "solva", "solve", "solvi", "solvo", "solão", "somai", "somam", "soman", "somas", "somei", "somem", "somes", "somiê", "somos", "somou", "sompe", "sompo", "sompá", "sonai", "sonam", "sonas", "sonda", "sonde", "sondo", "sonei", "sonem", "sones", "songa", "sonha", "sonhe", "sonho", "sonos", "sonou", "sonsa", "sonso", "sonto", "sopeá", "sopie", "sopio", "sopiá", "soplo", "sopor", "sopos", "sopra", "sopre", "sopro", "sopão", "sopés", "soqua", "soque", "soqui", "soquo", "sorai", "soral", "soram", "sorar", "soras", "sorbo", "sorda", "sorei", "sorem", "sores", "soreá", "sorga", "sorgo", "sorna", "sorne", "sorni", "sorno", "soror", "soros", "sorou", "sorri", "sorro", "sorta", "sorti", "sorto", "sorva", "sorve", "sorvi", "sorvo", "sorça", "sosas", "sosso", "sotai", "sotam", "sotar", "sotas", "sotaã", "sotei", "sotem", "sotes", "sotia", "sotil", "sotos", "sotou", "soube", "souis", "sousa", "soute", "souto", "soutá", "souza", "souás", "sovai", "sovam", "sovar", "sovas", "sovei", "sovem", "soves", "sovis", "sovou", "sovro", "sovéu", "sozal", "soíam", "soías", "soída", "soído", "soíma", "soões", "spans", "spins", "split", "spray", "squid", "stafe", "staff", "stand", "stato", "steno", "stent", "stick", "stilb", "still", "stock", "stoma", "stops", "stout", "suabe", "suada", "suade", "suadi", "suado", "suais", "suaja", "suajo", "suamo", "suana", "suano", "suara", "suare", "suaro", "suará", "suava", "suazi", "suaço", "suaçu", "subam", "subas", "subia", "subis", "subiu", "subpô", "subus", "sucai", "sucam", "sucar", "sucas", "sucho", "sucie", "sucou", "sucre", "sucto", "sudai", "sudam", "sudar", "sudas", "sudei", "sudem", "sudes", "sudou", "sudra", "sudro", "sudão", "sueda", "suede", "sueis", "suemo", "sueta", "sueto", "sueva", "suevo", "sufis", "suflo", "suflá", "suflê", "sufás", "sugai", "sugam", "sugar", "sugas", "sugou", "sugue", "suias", "suiná", "sujai", "sujam", "sujas", "sujei", "sujem", "sujes", "sujou", "sujão", "sulai", "sulam", "sular", "sulas", "sulca", "sulco", "sulei", "sulem", "sules", "sulfa", "sulfo", "sulia", "sulou", "sulão", "sumam", "sumas", "sumba", "sumbo", "sumia", "sumis", "sumiu", "sumos", "sumés", "sunas", "sundo", "sunes", "sunfa", "sungo", "sunto", "suome", "supra", "supre", "supri", "supro", "supus", "supôs", "supõe", "suqua", "suque", "suqui", "suquo", "sural", "surco", "surde", "surdi", "surfa", "surfo", "surge", "surgi", "surgo", "surim", "suris", "surja", "surjo", "surno", "surnu", "suros", "surra", "surre", "surro", "surta", "surte", "surti", "surto", "surus", "suruí", "surás", "surça", "susos", "sussu", "susta", "suste", "susti", "susto", "susão", "susãs", "sutai", "sutam", "sutar", "sutas", "sutei", "sutem", "sutes", "sutou", "sutra", "suvão", "suxai", "suxam", "suxar", "suxas", "suxei", "suxem", "suxes", "suxou", "suári", "sução", "suída", "suíta", "suíça", "suíço", "suômi", "suões", "svava", "swing", "sácri", "sáfea", "sáfeo", "sáfia", "ságia", "ságio", "sália", "sálio", "sálix", "sápia", "sápio", "sável", "sáxea", "sáxeo", "sâmea", "sâmia", "sâmio", "sândi", "sânie", "sânio", "sécia", "sécio", "sécua", "sédia", "sélio", "sépia", "sépio", "séqui", "sérum", "sésea", "sésia", "séter", "sêmea", "sêmen", "sêmis", "sênio", "sício", "sícon", "sídea", "sídeo", "sífia", "síler", "sílex", "sílis", "símel", "símia", "símil", "sínus", "sírex", "sírio", "sóbio", "sócia", "sólea", "sóleo", "sólio", "sórex", "sória", "sóter", "súber", "súcia", "súcio", "súmea", "súria", "súrio", "súsia", "súsio", "taacã", "tabas", "tabaz", "tabes", "tabla", "taboa", "tabor", "tabun", "tabus", "tabão", "tabós", "tacai", "tacam", "tacar", "tacas", "tacaú", "tacha", "tache", "tacho", "tacis", "tacos", "tacou", "tacta", "tacus", "tacuá", "tacão", "tafiá", "taful", "tagal", "tagaz", "tagba", "tagma", "tagna", "tagra", "taguá", "taibo", "taibu", "taica", "taico", "taifa", "taifó", "taiga", "taina", "taine", "taino", "taipa", "taipe", "taipó", "taira", "taita", "taixi", "taixo", "taiás", "tajal", "tajás", "talai", "talam", "talar", "talas", "talei", "talem", "tales", "talha", "talhe", "talho", "talim", "talis", "talma", "talmi", "talol", "talos", "talou", "talpa", "talão", "tamas", "tamba", "tambi", "tambo", "tambu", "tamis", "tamom", "tamos", "tampa", "tampe", "tampo", "tamuz", "tamão", "tanai", "tanal", "tanam", "tanar", "tanas", "tanau", "tanco", "tancá", "tando", "tanei", "tanem", "tanes", "tange", "tangi", "tanha", "tanho", "tanja", "tanjo", "tanoa", "tanoe", "tanoo", "tanos", "tanou", "tansa", "tanso", "tantã", "taoca", "tapai", "tapam", "tapas", "tapei", "tapem", "tapes", "tapeá", "tapir", "tapiz", "tapiá", "tapií", "tapiú", "tapou", "tapoã", "tapua", "tapui", "tapão", "taque", "taqui", "tarai", "taram", "tarar", "taras", "tarau", "tarca", "tarda", "tarde", "tardo", "tarei", "tarem", "tares", "tareá", "taria", "tarim", "taris", "tarje", "tarjo", "tarol", "tarot", "tarou", "tarpa", "tarre", "tarro", "tarsa", "tarte", "tartã", "tarão", "tarós", "tasca", "tasco", "tasgo", "tasgá", "tasna", "tasto", "tatau", "tataí", "tates", "tateá", "tatos", "tatra", "tatsu", "tatua", "tatue", "tatuo", "tatus", "tatuí", "tatzé", "tatás", "tauná", "taura", "tauro", "tauás", "taués", "tavas", "tavel", "tavuá", "tavão", "taxai", "taxal", "taxam", "taxar", "taxas", "taxei", "taxem", "taxes", "taxia", "taxie", "taxio", "taxou", "taéis", "taúba", "taúva", "tchãs", "teada", "teale", "teame", "teana", "teano", "teara", "tearo", "tease", "teate", "teaça", "teaçu", "tebas", "tebeu", "tecai", "tecal", "tecar", "tecei", "tecem", "teces", "teceu", "tecia", "tecla", "tecle", "teclo", "tecou", "tecto", "tecum", "tecós", "tedas", "tedor", "tedéu", "tefes", "teflã", "tegba", "tegbo", "tegme", "tegui", "tegão", "teiga", "teigo", "teima", "teime", "teimo", "teios", "teipe", "teira", "teiru", "teiró", "teito", "teité", "teixe", "teixo", "teiús", "tejas", "tejos", "tejus", "telai", "telam", "telar", "telei", "telem", "teles", "telex", "telhe", "telho", "telim", "teliz", "telou", "telso", "temam", "temas", "temba", "tembi", "tembé", "temei", "temem", "temes", "temeu", "temia", "temné", "temos", "tempe", "temão", "tenar", "tenaz", "tenca", "tenda", "tende", "tendi", "tendo", "tenes", "tengo", "tenha", "tenho", "tenos", "tenra", "tenro", "tense", "tenta", "tente", "tento", "teoro", "teose", "tepes", "tepor", "teque", "terai", "terbo", "terce", "terei", "terem", "teres", "tereu", "tergo", "teria", "terio", "terlo", "terma", "terme", "terna", "terne", "terol", "teros", "terre", "terro", "tersa", "terso", "terás", "terão", "terém", "tesai", "tesam", "tesar", "tesas", "tesbi", "tescã", "tesei", "tesem", "tesla", "tesno", "tesos", "tesou", "tesse", "testa", "teste", "testo", "tesum", "tetai", "tetam", "tetar", "tetas", "tetei", "tetem", "tetes", "tetim", "tetos", "tetou", "tetro", "tetéu", "teuto", "teutã", "tevet", "tevás", "tevês", "teçam", "teças", "teína", "teúba", "teúda", "teúdo", "tiacé", "tiago", "tiais", "tiana", "tiano", "tiapi", "tiara", "tiatã", "tiaus", "tibai", "tibam", "tibar", "tibas", "tibei", "tibel", "tibem", "tiber", "tibes", "tibet", "tibis", "tibou", "tibum", "tibus", "ticai", "tical", "ticam", "ticar", "ticas", "ticos", "ticou", "ticoá", "ticum", "ticus", "tidas", "tidor", "tidos", "tidão", "tiela", "tiena", "tieta", "tieto", "tietê", "tifas", "tifes", "tifeu", "tiflo", "tifos", "tifão", "tigas", "tigão", "tiito", "tijus", "tijés", "tilai", "tilam", "tilar", "tilas", "tilda", "tilde", "tildo", "tilei", "tilem", "tiles", "tilha", "tilho", "tilim", "tilos", "tilou", "timar", "timas", "timba", "timbu", "timbé", "timbó", "timer", "timia", "timol", "timor", "timos", "timão", "tinam", "tinas", "tinca", "tinem", "tines", "tinga", "tinge", "tingi", "tingo", "tinha", "tinhó", "tinia", "tinir", "tinis", "tiniu", "tinja", "tinjo", "tinor", "tinte", "tinão", "tioca", "tioco", "tiois", "tiona", "tione", "tiotê", "tipas", "tipes", "tipis", "tipió", "tiple", "tipus", "tipão", "tipói", "tique", "tiqui", "tirai", "tiram", "tiras", "tiraz", "tirei", "tirem", "tireo", "tires", "tirou", "tirso", "tirta", "tirão", "tisca", "tisco", "tisio", "tisna", "tisne", "tisno", "tisso", "tissu", "titim", "titio", "titis", "titor", "titos", "titão", "titãs", "tiupá", "tiver", "tizas", "tizio", "tizis", "tiziu", "tição", "tiéns", "tiões", "tiúba", "tiúva", "tlaco", "tlins", "tmema", "tmese", "toaca", "toado", "toais", "toamo", "toana", "toano", "toara", "toava", "tobas", "tobin", "tobiu", "tobós", "tocai", "tocam", "tocas", "toceá", "tocho", "tocis", "tocló", "tocos", "tocou", "toeis", "toemo", "toesa", "toese", "toeso", "toeza", "tofel", "tofes", "tofos", "tofus", "togai", "togam", "togar", "togas", "togou", "togue", "togói", "toice", "toino", "toira", "toire", "toiro", "toita", "toiça", "toiço", "tojal", "tojos", "tolam", "tolar", "tolas", "tolaz", "tolda", "tolde", "tolei", "tolem", "toler", "toles", "toleu", "tolha", "tolhe", "tolhi", "tolho", "tolil", "tolis", "tolos", "tolpe", "tolus", "tolva", "tolão", "tomai", "tomam", "tomas", "tomba", "tombe", "tombo", "tomei", "tomem", "tomes", "tomia", "tomim", "tomos", "tomou", "tomão", "tonai", "tonal", "tonam", "tonar", "tonas", "tonca", "tondo", "tonei", "tonel", "tonem", "toner", "tones", "tonfe", "tonga", "tongo", "tonha", "tonho", "tonia", "tonoa", "tonos", "tonou", "tonse", "tonso", "tonsá", "toona", "topai", "topam", "topas", "topaz", "topei", "topem", "topes", "topeá", "topie", "topio", "topos", "topou", "toque", "toral", "toram", "torar", "toras", "toraí", "torba", "torce", "torci", "torda", "tordo", "torei", "tores", "torga", "torgo", "toris", "torma", "torna", "torne", "torno", "torom", "toros", "torou", "torra", "torre", "torro", "torsa", "torso", "torus", "torva", "torve", "torvo", "torão", "torça", "torço", "torém", "tosai", "tosam", "tosas", "tosei", "tosem", "toses", "tosga", "tosou", "tosse", "tossi", "tosso", "tosta", "toste", "tosto", "tosão", "totós", "touce", "touco", "toupa", "toura", "toure", "touri", "touta", "tovas", "toxia", "toxis", "trace", "trada", "trade", "trado", "traem", "traga", "trago", "traia", "train", "traio", "trais", "traiu", "traja", "traje", "trajo", "trala", "trale", "tralo", "trame", "tramo", "trana", "trane", "trano", "trans", "trapa", "trape", "trara", "trará", "trata", "trate", "trato", "trava", "trave", "travo", "traze", "traça", "traço", "traía", "traís", "treda", "tredo", "trefo", "trela", "treli", "trelo", "trelê", "trema", "treme", "tremi", "tremo", "trene", "trepa", "trepe", "trepo", "trera", "trere", "trero", "treso", "treus", "treva", "triai", "trial", "triam", "triar", "trias", "trica", "tridi", "triei", "triem", "tries", "triga", "trila", "trile", "trilo", "trina", "trine", "trini", "trino", "triol", "trios", "triou", "trips", "tripó", "trise", "triso", "trisá", "trite", "trito", "tritá", "trião", "troai", "troam", "troar", "troas", "trobo", "troca", "troce", "troco", "troei", "troem", "troes", "trofa", "trofo", "troge", "troia", "troie", "troio", "trole", "trona", "trone", "trons", "troou", "trope", "tropo", "trota", "trote", "troto", "trova", "trove", "trovo", "troça", "troço", "truas", "trucá", "truda", "trude", "trudo", "trufe", "trufo", "trupi", "trupo", "trupá", "truxu", "truão", "tróis", "tsela", "tsuas", "tuaca", "tuaiá", "tubai", "tubal", "tubam", "tubar", "tubas", "tubei", "tubel", "tubem", "tubes", "tubim", "tubis", "tubou", "tucho", "tucos", "tucum", "tucus", "tucuí", "tucás", "tucão", "tudel", "tudra", "tudro", "tudum", "tufai", "tufam", "tufar", "tufas", "tufei", "tufem", "tufes", "tufos", "tufou", "tugas", "tugem", "tuges", "tugia", "tugir", "tugis", "tugiu", "tugra", "tugue", "tuias", "tuins", "tuita", "tuiús", "tujam", "tujas", "tujol", "tujus", "tulas", "tules", "tulha", "tulos", "tumbe", "tumbo", "tumor", "tunai", "tunal", "tunam", "tunar", "tunas", "tunco", "tunda", "tunde", "tundo", "tunei", "tunem", "tunes", "tunga", "tungo", "tungu", "tunou", "tupam", "tupia", "tupir", "tupis", "tupiu", "tupla", "tuplo", "tupás", "tupés", "tuque", "turam", "turar", "turas", "turaí", "turba", "turbe", "turbo", "turca", "turdo", "turei", "turem", "tures", "turfa", "turfe", "turge", "turgi", "turia", "turis", "turja", "turjo", "turme", "turmo", "turna", "turnê", "turou", "turra", "turre", "turro", "turus", "turva", "turve", "turvi", "turvo", "tusca", "tusco", "tussa", "tussi", "tusso", "tusta", "tusto", "tutai", "tutam", "tutar", "tutas", "tutei", "tutem", "tutes", "tuteá", "tutia", "tutie", "tutio", "tutou", "tutti", "tutum", "tutus", "tutão", "tuvis", "tuxis", "tuxás", "tuzas", "tuíra", "tuíte", "tuíto", "tweed", "twist", "tácia", "táfio", "táler", "tália", "tálio", "tálus", "tásia", "tásio", "távoa", "táxon", "tâmia", "tâmil", "tâmul", "télia", "télio", "télos", "tésio", "tésis", "tétia", "tétio", "tétis", "tétum", "têmio", "tênea", "tênia", "tênio", "tíade", "tíaso", "tíbio", "tício", "tídia", "tídio", "tífia", "tífis", "tílea", "tília", "tílio", "tíloa", "tímio", "tínea", "tíner", "tírea", "tírio", "tíris", "tócai", "tócia", "tódea", "tódis", "tógua", "tólia", "tópia", "tória", "tório", "tóron", "tózia", "tômio", "tômix", "tônis", "tônus", "túber", "tújis", "túlia", "túnis", "tútsi", "uabuí", "uacos", "uacus", "uacás", "uadas", "uades", "uados", "uafés", "uaicá", "uaimá", "uaina", "uaipi", "uaitá", "uaiua", "uaiás", "uaiôs", "uales", "ualua", "ualás", "uambé", "uamás", "uamói", "uanda", "uanga", "uanhi", "uanhã", "uaniá", "uanás", "uapás", "uapés", "uaqui", "uaris", "uariá", "uarus", "uarás", "uasca", "uassu", "uaupé", "uauri", "uaurá", "uauás", "uauçu", "uaxuá", "uaçaí", "uaíba", "ubaia", "ubari", "ubatã", "ubeba", "ubelê", "uberá", "ubins", "ubira", "ubres", "ubuçu", "ucena", "uceno", "uchas", "uchão", "ucila", "ucimá", "ucola", "ucubu", "ucués", "ucuís", "udana", "udasi", "udina", "udino", "udons", "udora", "uenas", "uerás", "ufana", "ufane", "ufano", "ufuás", "ugabe", "ugada", "ugado", "ugais", "ugara", "ugava", "ugnis", "ugros", "uguei", "uguem", "ugues", "uiais", "uiapé", "uiara", "uiari", "uigur", "uiqué", "uiruu", "uirás", "uivai", "uivam", "uivar", "uivas", "uivei", "uivem", "uives", "uivos", "uivou", "ujará", "ujica", "ulana", "ulano", "ulaus", "ulcas", "uleda", "uleia", "ulemá", "uliia", "ulite", "ulmos", "ulnal", "ulnar", "ulnas", "uloma", "ulons", "ulopa", "ulose", "ulota", "ulrei", "ultas", "ultor", "ultos", "uluas", "uluba", "uluco", "ulufe", "ulula", "ulule", "ululo", "ulvas", "uládi", "umari", "umauá", "umbla", "umblo", "umbos", "umboá", "umbra", "umbro", "umbus", "umbés", "umeri", "umiri", "umões", "unada", "unade", "unado", "unais", "unamo", "unani", "unara", "unaus", "unava", "uncis", "uncos", "undam", "undar", "undas", "undaí", "undei", "undem", "undes", "undos", "undou", "unedo", "uneis", "unela", "unelo", "unemo", "ungem", "unges", "ungia", "ungir", "ungis", "ungiu", "ungui", "ungás", "unhai", "unham", "unhar", "unhei", "unhem", "unhes", "unhou", "unhão", "uniam", "unias", "unido", "unimo", "unioa", "unios", "unira", "unirá", "unjam", "unjas", "unlós", "unona", "untai", "untam", "untas", "untei", "untem", "untes", "untor", "untou", "untué", "unças", "unção", "uongo", "upada", "upado", "upais", "upamo", "upara", "upava", "upeis", "upema", "upemo", "uperu", "upião", "upupa", "uquis", "uraca", "urago", "urais", "urali", "uralo", "urane", "urano", "uraná", "urare", "urari", "urato", "uraçu", "urbes", "urcas", "urcos", "urdam", "urdas", "urdem", "urdes", "urdia", "urdim", "urdir", "urdis", "urdiu", "urdus", "uredo", "ureia", "urgem", "urges", "urgia", "urgir", "urgis", "urgiu", "urias", "urida", "urina", "urine", "urino", "urins", "urjal", "urjam", "urjas", "urose", "urrai", "urram", "urrar", "urras", "urrei", "urrem", "urres", "urros", "urrou", "ursas", "urubá", "urucu", "urumi", "urumã", "urupá", "urupê", "ururi", "urutu", "uruxi", "urzal", "urzes", "usado", "usais", "usamo", "usara", "usará", "usava", "useis", "usemo", "usgas", "usine", "usino", "usita", "usite", "usito", "usmai", "usmam", "usmar", "usmas", "usmei", "usmem", "usmes", "usmou", "usque", "ussas", "ussia", "ustam", "ustas", "ustem", "ustes", "ustir", "ustis", "ustiu", "ustos", "ustão", "usura", "usure", "usuro", "utada", "utado", "utais", "utamo", "utana", "utara", "utata", "utava", "utemo", "utena", "utias", "utota", "utras", "uvada", "uvaia", "uvala", "uvato", "uvaça", "uvaçu", "uveal", "uviar", "uvita", "uvite", "uvona", "uxins", "uxiva", "uxtes", "uágua", "uédis", "uéuas", "uíste", "vaali", "vacai", "vacal", "vacam", "vacar", "vaceu", "vacou", "vacum", "vacus", "vacuá", "vacão", "vades", "vadeu", "vadeá", "vadia", "vadie", "vadio", "vafro", "vagai", "vagal", "vagam", "vagas", "vagem", "vages", "vageá", "vagia", "vagir", "vagis", "vagiu", "vagos", "vagou", "vague", "vaiai", "vaiam", "vaiar", "vaias", "vaiei", "vaiem", "vaies", "vaija", "vaila", "vaiou", "vaipe", "vaira", "vaitá", "vaixá", "vaiús", "vajam", "vajas", "vajés", "valai", "valam", "valar", "valas", "valda", "valdo", "valei", "valem", "vales", "valeu", "valga", "valgo", "valha", "valho", "valia", "valie", "valos", "valou", "valse", "valso", "valva", "valvu", "valão", "vamos", "vampe", "vampi", "vancê", "vande", "vando", "vanga", "vante", "vanza", "vapas", "vapis", "vapuã", "vaque", "varai", "varam", "varar", "varas", "varei", "varem", "vares", "vareá", "varga", "varge", "varia", "varie", "vario", "varis", "variz", "varja", "varli", "varna", "varno", "varoa", "varou", "varra", "varre", "varri", "varro", "varve", "varvo", "varão", "vasal", "vasas", "vasca", "vasco", "vasol", "vassá", "vaste", "vasão", "vatas", "vatel", "vates", "vatus", "vaurá", "vavas", "vazai", "vazam", "vazas", "vazei", "vazem", "vazes", "vazie", "vazou", "veada", "veado", "vebas", "vectã", "vedai", "vedal", "vedam", "vedar", "vedas", "vedei", "vedem", "vedes", "vedor", "vedou", "vedra", "vedro", "veeme", "veiai", "veiam", "veiar", "veiei", "veiem", "veies", "veiga", "veios", "veiou", "veira", "veiro", "vejai", "vejam", "vejas", "velai", "velam", "velar", "velas", "velei", "velem", "veles", "velga", "velon", "velos", "velou", "velta", "vemos", "venal", "vence", "venci", "venda", "vende", "vendi", "vendo", "venha", "venho", "venta", "vente", "vento", "vença", "venço", "vepre", "vepsa", "veras", "veraz", "verbi", "verei", "verem", "veres", "vereá", "verga", "vergo", "vergê", "veria", "veril", "veris", "verna", "verne", "verno", "verpa", "versa", "verse", "verso", "verta", "verte", "verti", "verto", "verve", "verás", "verão", "verça", "verós", "vesco", "vesga", "vesgo", "vessa", "vesse", "vesso", "vesta", "veste", "vesti", "vesto", "vetai", "vetam", "vetas", "vetei", "vetem", "vetes", "vetos", "vetou", "vetão", "vexai", "vexam", "vexar", "vexas", "vexei", "vexem", "vexes", "vexou", "vezai", "vezam", "vezar", "vezas", "vezei", "vezem", "vezer", "vezou", "viada", "viado", "viais", "viaja", "viaje", "viajo", "viana", "viara", "vibal", "vibas", "vibra", "vibre", "vibro", "vicei", "vicem", "vices", "vichi", "vicia", "vicie", "vicio", "vicos", "victa", "victo", "vidai", "vidal", "vidam", "vidar", "videi", "videm", "vides", "videá", "vidma", "vidor", "vidou", "vidra", "vidre", "vidro", "vidão", "viela", "vielo", "viera", "vieza", "vigai", "vigam", "vigar", "vigas", "vigei", "vigem", "viger", "viges", "vigeu", "vigia", "vigie", "vigio", "vigna", "vigou", "vigue", "viias", "viiia", "vijam", "vijas", "vilar", "vileu", "vilie", "vilio", "vilis", "viliá", "villa", "viloa", "vilro", "vilta", "vimai", "vimam", "vimar", "vimas", "vimba", "vimei", "vimem", "vimes", "vimos", "vimou", "vinal", "vinas", "vinca", "vinco", "vinde", "vindo", "vinga", "vingo", "vinha", "vinhe", "vinis", "vintã", "vioco", "viola", "viole", "violo", "virai", "viram", "viras", "virei", "virem", "vires", "virga", "virge", "virgo", "viria", "viris", "virmo", "virol", "virou", "virte", "virás", "virão", "virós", "visai", "visam", "visas", "visco", "viscá", "visei", "visem", "vises", "visgo", "visgá", "visma", "visom", "vison", "visos", "visou", "vispa", "vispe", "vispo", "visse", "vista", "viste", "visto", "vitae", "vitas", "vites", "vitre", "vitro", "vitus", "vivai", "vivam", "vivar", "vivas", "vivaz", "vivei", "vivem", "vives", "viveu", "vivia", "vivió", "viviú", "vivou", "vivre", "vixit", "vixnu", "vizir", "viçai", "viçam", "viçar", "viças", "viçor", "viçou", "viões", "viúva", "viúve", "viúvo", "vldis", "vlemê", "voada", "voado", "voais", "voamo", "voara", "voará", "voata", "voava", "voaço", "vodas", "vodca", "vodka", "vodos", "vodum", "vodus", "voeis", "voeja", "voeje", "voejo", "voemo", "vogai", "vogam", "vogar", "vogas", "vogou", "vogue", "vogul", "voile", "voixa", "voixo", "volar", "volas", "volat", "volco", "volcá", "volos", "volta", "volte", "volto", "volts", "volva", "volve", "volvi", "volvo", "voncê", "vonda", "vorás", "vosco", "voseá", "vossa", "votai", "votam", "votas", "votei", "votem", "votes", "votou", "vouvê", "vovós", "vozeá", "vozão", "vreia", "vrijá", "vriti", "vrídi", "vuapa", "vubas", "vudus", "vulca", "vulco", "vulso", "vulte", "vultá", "vulva", "vumbe", "vumbi", "vumos", "vunai", "vunam", "vunar", "vunas", "vunda", "vunei", "vunem", "vunes", "vungo", "vungá", "vunje", "vunou", "vunza", "vunze", "vunzo", "vurme", "vurmo", "vurmá", "vuvus", "vácea", "váceo", "váeas", "vágil", "válea", "válio", "vális", "vário", "vátio", "vátua", "vélea", "vélia", "vélum", "vério", "vênia", "vícia", "vícoa", "vídia", "vídua", "víeis", "vígil", "vímea", "vínea", "víneo", "vírea", "víreo", "vítex", "vítis", "vítor", "vóbis", "vômer", "water", "watts", "weber", "whist", "white", "xabão", "xabéu", "xacas", "xacos", "xacra", "xador", "xaias", "xaile", "xajás", "xalas", "xales", "xalma", "xamas", "xambá", "xangô", "xante", "xanto", "xantá", "xaorô", "xaque", "xarau", "xarda", "xarel", "xaria", "xarus", "xarás", "xarém", "xaréu", "xates", "xaual", "xauim", "xauás", "xaxim", "xeica", "xelim", "xelma", "xenai", "xenam", "xenar", "xenas", "xenei", "xenem", "xenes", "xenos", "xenou", "xeque", "xeras", "xereu", "xerez", "xerga", "xeros", "xerox", "xerva", "xerém", "xerés", "xetas", "xetra", "xetre", "xetro", "xeura", "xevás", "xexos", "xexés", "xexéu", "xibas", "xibio", "xibiu", "xicos", "xicus", "xifos", "xiita", "xilas", "xilol", "xilos", "ximbo", "ximbé", "ximão", "xinai", "xinam", "xinar", "xinas", "xinei", "xinem", "xines", "xinga", "xingo", "xinje", "xinou", "xintó", "xipos", "xiras", "xiraz", "xiris", "xirua", "xirus", "xirós", "xisto", "xitau", "xixis", "xixás", "xiças", "xocai", "xocam", "xocar", "xocas", "xocou", "xocós", "xodós", "xogum", "xonai", "xonam", "xonar", "xonas", "xonei", "xonem", "xones", "xonou", "xoque", "xorca", "xorda", "xordo", "xosas", "xossa", "xotai", "xotam", "xotar", "xotas", "xotei", "xotem", "xotes", "xotou", "xoxos", "xoxus", "xuatê", "xucra", "xucro", "xurda", "xurde", "xurdi", "xurdo", "xuris", "xurus", "xuxos", "xénon", "xênia", "xênio", "xífio", "xílon", "yocto", "yotta", "yôgas", "zabra", "zabro", "zacas", "zacaí", "zacos", "zacum", "zagal", "zagas", "zagor", "zagre", "zagus", "zagão", "zaida", "zaidi", "zaimo", "zaina", "zaine", "zaino", "zaira", "zaire", "zamas", "zamba", "zambi", "zambo", "zambê", "zampa", "zampe", "zampo", "zanal", "zanas", "zande", "zanga", "zango", "zanho", "zanni", "zante", "zanza", "zanze", "zanzo", "zapes", "zarca", "zarco", "zarga", "zargo", "zarpa", "zarpe", "zarpo", "zarra", "zarro", "zarza", "zarão", "zarés", "zavai", "zavam", "zavar", "zavas", "zavei", "zavem", "zaves", "zavou", "zavra", "zazos", "zebos", "zebre", "zebro", "zebus", "zefir", "zegri", "zelai", "zelam", "zelas", "zelei", "zelem", "zeles", "zelha", "zelos", "zelou", "zenam", "zenas", "zenda", "zende", "zenem", "zenes", "zenir", "zenis", "zeniu", "zepto", "zerai", "zeram", "zeras", "zerbo", "zerei", "zerem", "zeres", "zeros", "zerou", "zesto", "zetas", "zetta", "zeugo", "ziada", "ziado", "ziais", "ziamo", "ziara", "ziava", "zicha", "ziche", "zicho", "zieis", "ziemo", "zilro", "zimbo", "zimos", "zinam", "zinas", "zinca", "zinem", "zines", "zinga", "zingo", "zinha", "zinho", "zinir", "zinis", "ziniu", "zipai", "zipam", "zipar", "zipas", "zipei", "zipem", "zipes", "zipou", "zirbo", "zirra", "zirre", "zirro", "zitos", "zizia", "zizie", "zizio", "zoada", "zoado", "zoais", "zoamo", "zoara", "zoava", "zoeia", "zoeis", "zoemo", "zogas", "zogue", "zoica", "zoico", "zoide", "zoilo", "zoina", "zolas", "zolis", "zomba", "zombe", "zombo", "zomol", "zonai", "zonal", "zonam", "zonar", "zonei", "zonem", "zones", "zoneá", "zonou", "zonza", "zonze", "zonzo", "zoons", "zoose", "zopas", "zopos", "zorne", "zorno", "zornã", "zorra", "zorro", "zorte", "zorto", "zortá", "zotes", "zoupa", "zoupo", "zoura", "zovos", "zuais", "zuate", "zuavo", "zucai", "zucam", "zucar", "zucas", "zuche", "zucos", "zucou", "zuele", "zuelo", "zuelá", "zuirá", "zulai", "zulam", "zular", "zulas", "zulei", "zulem", "zules", "zulos", "zulou", "zulus", "zumba", "zumbe", "zumbi", "zumbo", "zunai", "zunam", "zunar", "zunas", "zunda", "zunei", "zunem", "zunes", "zunga", "zungo", "zungu", "zunhi", "zunia", "zunir", "zunis", "zuniu", "zunou", "zupai", "zupam", "zupar", "zupas", "zupei", "zupem", "zupes", "zupou", "zuque", "zuras", "zurca", "zurpa", "zurra", "zurre", "zurro", "zuruó", "zurza", "zurze", "zurzi", "zurzo", "zuíam", "zuías", "zuída", "zuído", "zâmia", "zãibo", "zínia", "àbeça", "ábaco", "ábaro", "ábato", "ábavo", "ábias", "ábies", "ábiga", "ábrus", "ábsis", "ábsus", "ácade", "ácano", "ácare", "ácaro", "ácave", "ácavo", "ácero", "ácias", "ácies", "ácina", "ácino", "ácios", "ácipe", "áclis", "ácnea", "ácnua", "ácome", "ácope", "ácopo", "ácore", "ácoro", "ácron", "áctia", "áctio", "ádina", "ádine", "ádino", "ádipe", "ádipo", "ádito", "áfaca", "áfios", "áfodo", "áfona", "áfono", "ágamo", "ágapa", "ágape", "ágaro", "ágata", "ágate", "ágena", "ágeno", "ágida", "ágino", "ágios", "áglia", "ágmen", "ágnis", "ágnus", "ágolo", "ágona", "ágono", "ágria", "ágrio", "águam", "águas", "águem", "águes", "álacr", "álalo", "álamo", "álcea", "álcis", "áleas", "álemo", "áleos", "álhia", "áliba", "álibi", "álica", "álico", "álife", "álime", "álios", "álita", "álofo", "álogo", "álpea", "álqua", "álula", "álveo", "ápage", "ápeta", "ápeto", "ápida", "ápios", "ápira", "ápiro", "ápoca", "ápode", "ápodo", "ápona", "ápone", "ápono", "áporo", "ápoto", "ápula", "ápulo", "áquea", "áqueo", "árabo", "árbia", "árbio", "árcio", "árdea", "árgio", "árgon", "árias", "árico", "árida", "ársis", "árula", "áruns", "ásaro", "áscia", "áscio", "áscon", "áscua", "ásias", "ásios", "ásoas", "ásoos", "áspis", "áster", "ástur", "átavo", "átele", "ático", "átila", "átima", "átimo", "átipo", "átona", "átono", "átrio", "áulax", "áurea", "áveis", "ávida", "ávila", "áxeis", "áxica", "áxico", "áxilo", "áxona", "áxone", "ázeas", "ázeos", "áziga", "ázigo", "ázima", "ázimo", "âmios", "âmnio", "ângio", "ânion", "ânodo", "ânulo", "ânuos", "ébano", "ébeno", "ébias", "éblis", "ébria", "ébrio", "ébulo", "écana", "écano", "écica", "écico", "écope", "écran", "écula", "éculo", "édalo", "édias", "édica", "édico", "édipo", "éduos", "éfeta", "éfira", "éfiro", "éfode", "éfodo", "éforo", "égide", "égrio", "éguas", "éguem", "élafo", "élate", "élica", "élico", "élimo", "éneas", "éneos", "énula", "épula", "épura", "équio", "équis", "équos", "équus", "érana", "érano", "érbio", "éreas", "érebo", "éreis", "éreos", "érgio", "érias", "érina", "érion", "ésima", "ésimo", "ésipo", "ésoce", "éssuo", "éster", "ésula", "étego", "étigo", "étimo", "évana", "évano", "êider", "êmero", "êmese", "êmica", "êmico", "êmida", "êmide", "êmulo", "ênica", "ênico", "ênsis", "êuria", "êxaco", "êxuis", "êxule", "íamos", "íbice", "ícaro", "ícios", "ícono", "ícore", "íctis", "íctus", "ídias", "ídola", "ígnea", "ígneo", "íguem", "ígues", "íleon", "íleos", "íleus", "ílias", "ílice", "ílion", "ílios", "ílium", "ímpia", "ínaco", "índri", "índua", "íngea", "íngua", "ínion", "ínios", "ínope", "ínsua", "ínuba", "ínubo", "ínula", "ínvia", "ínvio", "ípida", "írios", "írpex", "ísate", "ísops", "ítaco", "ítalo", "ítame", "ítamo", "íteas", "ítria", "ítrio", "íxalo", "íxias", "óbelo", "óbice", "óbito", "óbolo", "óbulo", "ócimo", "ócios", "ócrea", "óculo", "ódios", "ófrio", "ófris", "óleum", "ómnia", "ópalo", "ópido", "ópios", "órfia", "órfãs", "órgio", "órobo", "ósido", "ósmio", "óstio", "óvalo", "óvana", "óvano", "óveas", "óveos", "óvnis", "úbere", "úbero", "úbias", "úbios", "úmera", "úmero", "úncia", "úncus", "úngue", "únsia", "úraco", "úrase", "úrcea", "úrceo", "úrica", "úrico", "úropo", "úsias", "úsnea", "ússua", "ústia", "úveas", "úvica", "úvico", "úvida", "úvido", "úvula"]), Eg = (e(yg = {
    aanas: "aanás",
    ababa: "ababá",
    ababe: "ababé",
    abaca: "abacá",
    abace: "abacé",
    abaga: "abagá",
    abaio: "abaiô",
    abaja: "abajá",
    abana: "abaná",
    abara: "abará",
    abare: "abaré",
    abebe: "abebé",
    abece: "abecê",
    abede: "abedê",
    abico: "abicô",
    abifa: "abifá",
    abiao: "abião",
    ablui: "abluí",
    abnui: "abnuí",
    abobo: "abobó",
    abofe: "abofé",
    abore: "aboré",
    aboco: "aboço",
    abois: "aboís",
    abste: "abstê",
    abuxo: "abuxó",
    abuco: "abuço",
    abuca: "abuçá",
    acaia: "acaiá",
    acaja: "acajá",
    acara: "acará",
    acaua: "acauã",
    acaco: "acaço",
    acaca: "acaçá",
    acaem: "acaém",
    acaes: "acaés",
    aceba: "acebá",
    aceja: "acejá",
    achem: "achém",
    acmao: "acmão",
    acola: "acolá",
    acona: "aconá",
    acota: "acotá",
    acroa: "acroá",
    acreu: "acréu",
    acuma: "acumã",
    acure: "acuré",
    acuis: "acuís",
    acens: "acéns",
    adana: "adaná",
    adais: "adaís",
    adeba: "adebá",
    adera: "aderá",
    adeva: "adevã",
    adioe: "adioé",
    adira: "adirá",
    adixa: "adixá",
    adiao: "adião",
    adjas: "adjás",
    adoga: "adogã",
    adona: "adoná",
    adoca: "adoça",
    adoco: "adoço",
    aduma: "adumá",
    aduca: "aduça",
    advem: "advém"
}, "advem", "advêm"),
e(yg, "adeis", "adéis"),
e(yg, "adion", "adíon"),
e(yg, "afara", "afará"),
e(yg, "afaco", "afaço"),
e(yg, "afefe", "afefé"),
e(yg, "afega", "afegã"),
e(yg, "afera", "aferá"),
e(yg, "afifa", "afifá"),
e(yg, "aflui", "afluí"),
e(yg, "afoca", "afocá"),
e(yg, "afoxe", "afoxé"),
e(yg, "afuna", "afuná"),
e(yg, "afura", "afurá"),
e(yg, "afoes", "afões"),
e(yg, "agaba", "agabá"),
e(yg, "agace", "agacé"),
e(yg, "agada", "agadá"),
e(yg, "agaia", "agaiá"),
e(yg, "agaja", "agajá"),
e(yg, "agana", "aganá"),
e(yg, "agare", "agaré"),
e(yg, "agaza", "agazá"),
e(yg, "agais", "agaís"),
e(yg, "agaus", "agaús"),
e(yg, "agbes", "agbês"),
e(yg, "agera", "agerá"),
e(yg, "agira", "agirá"),
e(yg, "agogo", "agogô"),
e(yg, "agoma", "agomã"),
e(yg, "agota", "agotá"),
e(yg, "agoes", "agoés"),
e(yg, "agrea", "agreá"),
e(yg, "agrao", "agrão"),
e(yg, "agrem", "agrém"),
e(yg, "aguai", "aguaí"),
e(yg, "aguca", "aguça"),
e(yg, "aguco", "aguço"),
e(yg, "aiapa", "aiapá"),
e(yg, "aiape", "aiapé"),
e(yg, "aiara", "aiará"),
e(yg, "aiaca", "aiaçá"),
e(yg, "aicas", "aicás"),
e(yg, "ailas", "ailás"),
e(yg, "ailos", "ailós"),
e(yg, "aioca", "aiocá"),
e(yg, "aipas", "aipás"),
e(yg, "aipes", "aipés"),
e(yg, "airua", "airuã"),
e(yg, "airao", "airão"),
e(yg, "airos", "airós"),
e(yg, "aisla", "aislá"),
e(yg, "aitas", "aitás"),
e(yg, "aitao", "aitão"),
e(yg, "aiuca", "aiucá"),
e(yg, "aiuiu", "aiuiú"),
e(yg, "aiuna", "aiuná"),
e(yg, "aiuas", "aiuás"),
e(yg, "aiues", "aiuês"),
e(yg, "aivao", "aivão"),
e(yg, "aioes", "aiões"),
e(yg, "ajabo", "ajabó"),
e(yg, "ajapa", "ajapá"),
e(yg, "ajara", "ajará"),
e(yg, "ajare", "ajaré"),
e(yg, "ajobo", "ajobó"),
e(yg, "ajoia", "ajoiá"),
e(yg, "ajupa", "ajupá"),
e(yg, "ajois", "ajóis"),
e(yg, "alaba", "alabá"),
e(yg, "alabe", "alabê"),
e(yg, "alaca", "alacá"),
e(yg, "alafe", "alafé"),
e(yg, "alaja", "alajá"),
e(yg, "alala", "alalá"),
e(yg, "alama", "alamã"),
e(yg, "alavo", "alavó"),
e(yg, "alaza", "alazã"),
e(yg, "albia", "albiã"),
e(yg, "alboi", "albói"),
e(yg, "aldea", "aldeã"),
e(yg, "aleda", "aledá"),
e(yg, "aleja", "alejá"),
e(yg, "alema", "alemã"),
e(yg, "alesa", "alesá"),
e(yg, "aleva", "alevá"),
e(yg, "alhea", "alheá"),
e(yg, "aliga", "aligá"),
e(yg, "alias", "aliás"),
e(yg, "alode", "alodê"),
e(yg, "aloas", "aloás"),
e(yg, "aloes", "aloés"),
e(yg, "alpao", "alpão"),
e(yg, "altea", "alteá"),
e(yg, "alufa", "alufá"),
e(yg, "aluja", "alujá"),
e(yg, "aluma", "alumá"),
e(yg, "alupa", "alupá"),
e(yg, "aluta", "alutá"),
e(yg, "aluxa", "aluxá"),
e(yg, "aluia", "aluía"),
e(yg, "aluis", "aluís"),
e(yg, "alvea", "alveá"),
e(yg, "alvao", "alvão"),
e(yg, "alcai", "alçai"),
e(yg, "alcam", "alçam"),
e(yg, "alcar", "alçar"),
e(yg, "alcas", "alças"),
e(yg, "alcou", "alçou"),
e(yg, "alcuz", "alçuz"),
e(yg, "alcao", "alção"),
e(yg, "aleus", "aléus"),
e(yg, "amala", "amalá"),
e(yg, "amale", "amalé"),
e(yg, "amana", "amaná"),
e(yg, "amapa", "amapá"),
e(yg, "amara", "amará"),
e(yg, "amata", "amatá"),
e(yg, "amboa", "amboá"),
e(yg, "ambra", "ambrã"),
e(yg, "ambua", "ambuá"),
e(yg, "ambui", "ambuí"),
e(yg, "ambao", "ambão"),
e(yg, "ambes", "ambés"),
e(yg, "amele", "amelê"),
e(yg, "ameca", "ameça"),
e(yg, "amoia", "amoiá"),
e(yg, "amoma", "amomá"),
e(yg, "amona", "amoná"),
e(yg, "amore", "amoré"),
e(yg, "amure", "amurê"),
e(yg, "amuxa", "amuxã"),
e(yg, "amens", "améns"),
e(yg, "amoes", "amões"),
e(yg, "anabo", "anabó"),
e(yg, "anaca", "anacá"),
e(yg, "anace", "anacé"),
e(yg, "anaga", "anagá"),
e(yg, "anaia", "anaiá"),
e(yg, "anaja", "anajá"),
e(yg, "anaje", "anajé"),
e(yg, "anana", "ananá"),
e(yg, "anaue", "anauê"),
e(yg, "ancia", "anciã"),
e(yg, "andos", "andós"),
e(yg, "angaa", "angaá"),
e(yg, "angau", "angaú"),
e(yg, "anhas", "anhás"),
e(yg, "anida", "anidá"),
e(yg, "aniao", "anião"),
e(yg, "anjao", "anjão"),
e(yg, "anova", "anová"),
e(yg, "antao", "antão"),
e(yg, "anuai", "anuaí"),
e(yg, "anuia", "anuiá"),
e(yg, "anuja", "anujá"),
e(yg, "anuia", "anuía"),
e(yg, "anuis", "anuís"),
e(yg, "anaos", "anãos"),
e(yg, "anaze", "anãze"),
e(yg, "anazo", "anãzo"),
e(yg, "anaza", "anãzá"),
e(yg, "aneis", "anéis"),
e(yg, "anois", "anóis"),
e(yg, "anoes", "anões"),
e(yg, "aoita", "aoíta"),
e(yg, "apaja", "apajá"),
e(yg, "apama", "apamá"),
e(yg, "apapa", "apapá"),
e(yg, "apais", "apaís"),
e(yg, "apeda", "apedá"),
e(yg, "apeja", "apejá"),
e(yg, "apete", "apeté"),
e(yg, "apiaa", "apiaá"),
e(yg, "apina", "apiná"),
e(yg, "apita", "apitã"),
e(yg, "apiao", "apião"),
e(yg, "apora", "aporá"),
e(yg, "aprea", "apreá"),
e(yg, "apuie", "apuié"),
e(yg, "apuis", "apuís"),
e(yg, "apoem", "apõem"),
e(yg, "apoes", "apões"),
e(yg, "aquem", "aquém"),
e(yg, "araba", "arabá"),
e(yg, "araia", "araiá"),
e(yg, "araio", "araió"),
e(yg, "araiu", "araiú"),
e(yg, "arama", "aramá"),
e(yg, "arana", "aranã"),
e(yg, "arata", "aratá"),
e(yg, "araua", "arauá"),
e(yg, "araue", "araué"),
e(yg, "araxa", "araxá"),
e(yg, "araca", "araçá"),
e(yg, "arche", "arché"),
e(yg, "arcta", "arctá"),
e(yg, "arcua", "arcuá"),
e(yg, "arede", "aredê"),
e(yg, "arere", "arerê"),
e(yg, "areao", "areão"),
e(yg, "argao", "argão"),
e(yg, "argem", "argém"),
e(yg, "aribe", "aribé"),
e(yg, "arica", "aricá"),
e(yg, "arigo", "arigó"),
e(yg, "arima", "arimã"),
e(yg, "arina", "ariná"),
e(yg, "arita", "aritá"),
e(yg, "arjoa", "arjoá"),
e(yg, "arjao", "arjão"),
e(yg, "armao", "armão"),
e(yg, "armeu", "arméu"),
e(yg, "arnes", "arnês"),
e(yg, "aroca", "arocá"),
e(yg, "arpea", "arpeá"),
e(yg, "arpao", "arpão"),
e(yg, "arpeu", "arpéu"),
e(yg, "arrai", "arraí"),
e(yg, "arrea", "arreá"),
e(yg, "arrio", "arrió"),
e(yg, "arrua", "arruá"),
e(yg, "arrui", "arruí"),
e(yg, "arras", "arrás"),
e(yg, "artao", "artão"),
e(yg, "aruai", "aruaí"),
e(yg, "aruau", "aruaú"),
e(yg, "arube", "arubé"),
e(yg, "aruma", "arumã"),
e(yg, "arura", "arurá"),
e(yg, "aruas", "aruás"),
e(yg, "arues", "arués"),
e(yg, "arcao", "arção"),
e(yg, "areus", "aréus"),
e(yg, "aroes", "arões"),
e(yg, "ascas", "ascás"),
e(yg, "asnea", "asneá"),
e(yg, "aspea", "aspeá"),
e(yg, "assea", "asseá"),
e(yg, "assua", "assuã"),
e(yg, "ataga", "atagã"),
e(yg, "atala", "atalá"),
e(yg, "atama", "atamã"),
e(yg, "atana", "ataná"),
e(yg, "atara", "atará"),
e(yg, "atare", "atarê"),
e(yg, "atera", "aterá"),
e(yg, "atiba", "atibá"),
e(yg, "atias", "atiás"),
e(yg, "atica", "atiça"),
e(yg, "atico", "atiço"),
e(yg, "aticu", "atiçu"),
e(yg, "aties", "atiés"),
e(yg, "atoba", "atobá"),
e(yg, "atofa", "atofã"),
e(yg, "atopa", "atopá"),
e(yg, "atoto", "atotô"),
e(yg, "atrai", "atraí"),
e(yg, "atras", "atrás"),
e(yg, "ature", "aturé"),
e(yg, "atuia", "atuía"),
e(yg, "atuis", "atuís"),
e(yg, "atens", "aténs"),
e(yg, "atois", "atóis"),
e(yg, "auaiu", "auaiú"),
e(yg, "auacu", "auaçu"),
e(yg, "auais", "auaís"),
e(yg, "auete", "aueté"),
e(yg, "aufue", "aufué"),
e(yg, "austa", "austá"),
e(yg, "ausao", "ausão"),
e(yg, "aucas", "auçás"),
e(yg, "aucao", "aução"),
e(yg, "avaca", "avacá"),
e(yg, "avaiu", "avaiú"),
e(yg, "avala", "avalá"),
e(yg, "avara", "avará"),
e(yg, "avare", "avaré"),
e(yg, "avata", "avatá"),
e(yg, "avela", "avelã"),
e(yg, "aveao", "aveão"),
e(yg, "avira", "avirá"),
e(yg, "aviao", "avião"),
e(yg, "avius", "aviús"),
e(yg, "avoao", "avoão"),
e(yg, "avens", "avéns"),
e(yg, "axabo", "axabó"),
e(yg, "axexe", "axexê"),
e(yg, "axoxo", "axoxô"),
e(yg, "axuas", "axuás"),
e(yg, "azala", "azalá"),
e(yg, "azava", "azavá"),
e(yg, "azeva", "azevá"),
e(yg, "azibo", "azibó"),
e(yg, "azura", "azurá"),
e(yg, "azois", "azóis"),
e(yg, "acacu", "açacu"),
e(yg, "acala", "açalá"),
e(yg, "acame", "açame"),
e(yg, "acamo", "açamo"),
e(yg, "acape", "açape"),
e(yg, "acapo", "açapo"),
e(yg, "acapa", "açapá"),
e(yg, "acais", "açaís"),
e(yg, "acobe", "açobe"),
e(yg, "acobo", "açobo"),
e(yg, "acoba", "açobá"),
e(yg, "acoca", "açoca"),
e(yg, "acoda", "açoda"),
e(yg, "acodo", "açodo"),
e(yg, "acora", "açora"),
e(yg, "acuba", "açubá"),
e(yg, "acuda", "açuda"),
e(yg, "acude", "açude"),
e(yg, "acula", "açula"),
e(yg, "acule", "açule"),
e(yg, "aculo", "açulo"),
e(yg, "acumi", "açumi"),
e(yg, "acoes", "ações"),
e(yg, "aerea", "aérea"),
e(yg, "aereo", "aéreo"),
e(yg, "aeneo", "aêneo"),
e(yg, "aivas", "aívas"),
e(yg, "aioli", "aïoli"),
e(yg, "aonia", "aônia"),
e(yg, "aonio", "aônio"),
e(yg, "aunos", "aúnos"),
e(yg, "auste", "aúste"),
e(yg, "babea", "babeá"),
e(yg, "babia", "babiá"),
e(yg, "babla", "bablá"),
e(yg, "babui", "babuí"),
e(yg, "babas", "babás"),
e(yg, "babao", "babão"),
e(yg, "bacao", "bacão"),
e(yg, "badem", "badém"),
e(yg, "bades", "badés"),
e(yg, "bados", "badós"),
e(yg, "baele", "baelé"),
e(yg, "baena", "baenã"),
e(yg, "bagea", "bageá"),
e(yg, "bagua", "baguá"),
e(yg, "baiau", "baiaú"),
e(yg, "baica", "baicá"),
e(yg, "baira", "bairã"),
e(yg, "baiao", "baião"),
e(yg, "bajea", "bajeá"),
e(yg, "balea", "baleã"),
e(yg, "baloa", "baloá"),
e(yg, "balao", "balão"),
e(yg, "balca", "balça"),
e(yg, "balco", "balço"),
e(yg, "bambe", "bambê"),
e(yg, "bansa", "bansá"),
e(yg, "banta", "bantá"),
e(yg, "bante", "banté"),
e(yg, "banze", "banzé"),
e(yg, "baoba", "baobá"),
e(yg, "barau", "baraú"),
e(yg, "barso", "barsó"),
e(yg, "barao", "barão"),
e(yg, "barem", "barém"),
e(yg, "basea", "baseá"),
e(yg, "basse", "bassê"),
e(yg, "batas", "batás"),
e(yg, "batao", "batão"),
e(yg, "baume", "baumê"),
e(yg, "bauas", "bauás"),
e(yg, "bavas", "bavás"),
e(yg, "baxas", "baxás"),
e(yg, "bazes", "bazés"),
e(yg, "bacas", "baças"),
e(yg, "bacos", "baços"),
e(yg, "baule", "baúle"),
e(yg, "bauna", "baúna"),
e(yg, "beaba", "beabá"),
e(yg, "bedea", "bedeá"),
e(yg, "bedui", "beduí"),
e(yg, "bedao", "bedão"),
e(yg, "bedem", "bedém"),
e(yg, "befas", "befás"),
e(yg, "begbe", "begbê"),
e(yg, "beica", "beiça"),
e(yg, "beico", "beiço"),
e(yg, "belda", "beldá"),
e(yg, "belao", "belão"),
e(yg, "belem", "belém"),
e(yg, "beles", "belês"),
e(yg, "bende", "bendé"),
e(yg, "bendo", "bendó"),
e(yg, "benha", "benhã"),
e(yg, "benca", "bença"),
e(yg, "beroe", "beroé"),
e(yg, "berca", "berça"),
e(yg, "berco", "berço"),
e(yg, "bereu", "beréu"),
e(yg, "beros", "berós"),
e(yg, "betao", "betão"),
e(yg, "betoi", "betói"),
e(yg, "beens", "beéns"),
e(yg, "bibia", "bibiá"),
e(yg, "bibio", "bibió"),
e(yg, "bibla", "biblá"),
e(yg, "biboi", "bibói"),
e(yg, "bicao", "bicão"),
e(yg, "bidao", "bidão"),
e(yg, "bides", "bidês"),
e(yg, "bidos", "bidós"),
e(yg, "bigua", "biguá"),
e(yg, "bijui", "bijuí"),
e(yg, "bilho", "bilhó"),
e(yg, "bilmo", "bilmó"),
e(yg, "bimao", "bimão"),
e(yg, "biniu", "biniú"),
e(yg, "birma", "birmã"),
e(yg, "birco", "birço"),
e(yg, "biros", "birôs"),
e(yg, "bisao", "bisão"),
e(yg, "bitra", "bitrá"),
e(yg, "biura", "biurá"),
e(yg, "blase", "blasé"),
e(yg, "boaco", "boaço"),
e(yg, "bobai", "bobaí"),
e(yg, "bobea", "bobeá"),
e(yg, "bobao", "bobão"),
e(yg, "bocue", "bocué"),
e(yg, "bocao", "bocão"),
e(yg, "bocos", "bocós"),
e(yg, "bodao", "bodão"),
e(yg, "bodos", "bodós"),
e(yg, "bofos", "bofós"),
e(yg, "bogos", "bogós"),
e(yg, "boime", "boimé"),
e(yg, "boira", "boirá"),
e(yg, "boiao", "boião"),
e(yg, "boica", "boiça"),
e(yg, "boico", "boiço"),
e(yg, "boicu", "boiçu"),
e(yg, "bojui", "bojuí"),
e(yg, "bojao", "bojão"),
e(yg, "bolea", "boleá"),
e(yg, "bolho", "bolhó"),
e(yg, "bolao", "bolão"),
e(yg, "bolca", "bolça"),
e(yg, "boleu", "boléu"),
e(yg, "bongo", "bongô"),
e(yg, "bonha", "bonhá"),
e(yg, "bonco", "bonço"),
e(yg, "bonca", "bonçá"),
e(yg, "bones", "bonés"),
e(yg, "boora", "boorá"),
e(yg, "boras", "borás"),
e(yg, "bosea", "boseá"),
e(yg, "bosao", "bosão"),
e(yg, "bosos", "bosós"),
e(yg, "botio", "botió"),
e(yg, "botoa", "botoá"),
e(yg, "botao", "botão"),
e(yg, "boura", "bourá"),
e(yg, "bouca", "bouça"),
e(yg, "bouco", "bouço"),
e(yg, "boxea", "boxeá"),
e(yg, "bozos", "bozós"),
e(yg, "bocus", "boçus"),
e(yg, "boela", "boêla"),
e(yg, "boelo", "boêlo"),
e(yg, "braja", "brajá"),
e(yg, "braca", "braça"),
e(yg, "braco", "braço"),
e(yg, "breta", "bretã"),
e(yg, "brola", "brolá"),
e(yg, "bruaa", "bruaá"),
e(yg, "brueu", "bruéu"),
e(yg, "briea", "bríea"),
e(yg, "brion", "bríon"),
e(yg, "buacu", "buaçu"),
e(yg, "bubao", "bubão"),
e(yg, "bubas", "bubãs"),
e(yg, "bucue", "bucué"),
e(yg, "bucui", "bucuí"),
e(yg, "bucas", "bucãs"),
e(yg, "budoa", "budoá"),
e(yg, "bufao", "bufão"),
e(yg, "buira", "buirá"),
e(yg, "bujao", "bujão"),
e(yg, "bujes", "bujés"),
e(yg, "bunha", "bunhá"),
e(yg, "buque", "buquê"),
e(yg, "burga", "burgá"),
e(yg, "burno", "burnó"),
e(yg, "burue", "burué"),
e(yg, "burao", "burão"),
e(yg, "burco", "burço"),
e(yg, "bures", "burés"),
e(yg, "butia", "butiá"),
e(yg, "bucos", "buços"),
e(yg, "buens", "buéns"),
e(yg, "buiam", "buíam"),
e(yg, "buias", "buías"),
e(yg, "buida", "buída"),
e(yg, "buido", "buído"),
e(yg, "buige", "buíge"),
e(yg, "builo", "buílo"),
e(yg, "bacis", "bácis"),
e(yg, "badur", "bádur"),
e(yg, "bafer", "báfer"),
e(yg, "bafia", "báfia"),
e(yg, "bagoa", "bágoa"),
e(yg, "balia", "bália"),
e(yg, "bario", "bário"),
e(yg, "basio", "básio"),
e(yg, "basis", "básis"),
e(yg, "batis", "bátis"),
e(yg, "bambi", "bâmbi"),
e(yg, "bamia", "bâmia"),
e(yg, "bania", "bânia"),
e(yg, "banua", "bânua"),
e(yg, "becua", "bécua"),
e(yg, "begua", "bégua"),
e(yg, "belia", "bélia"),
e(yg, "belio", "bélio"),
e(yg, "belis", "bélis"),
e(yg, "belua", "bélua"),
e(yg, "belus", "bélus"),
e(yg, "beris", "béris"),
e(yg, "berix", "bérix"),
e(yg, "betel", "bétel"),
e(yg, "betis", "bétis"),
e(yg, "benia", "bênia"),
e(yg, "bicia", "bícia"),
e(yg, "biduo", "bíduo"),
e(yg, "biguo", "bíguo"),
e(yg, "bilia", "bília"),
e(yg, "bilis", "bílis"),
e(yg, "biter", "bíter"),
e(yg, "bitio", "bítio"),
e(yg, "bitis", "bítis"),
e(yg, "bivio", "bívio"),
e(yg, "bobis", "bóbis"),
e(yg, "bocio", "bócio"),
e(yg, "bofia", "bófia"),
e(yg, "borax", "bórax"),
e(yg, "boson", "bóson"),
e(yg, "boton", "bóton"),
e(yg, "boxer", "bóxer"),
e(yg, "boers", "bôers"),
e(yg, "bonus", "bônus"),
e(yg, "bufri", "búfri"),
e(yg, "butea", "bútea"),
e(yg, "buteo", "búteo"),
e(yg, "butio", "bútio"),
e(yg, "buzio", "búzio"),
e(yg, "caaco", "caacó"),
e(yg, "caaee", "caaeé"),
e(yg, "caacu", "caaçu"),
e(yg, "cabau", "cabaú"),
e(yg, "cabea", "cabeá"),
e(yg, "cabiu", "cabiú"),
e(yg, "cabui", "cabuí"),
e(yg, "cadea", "cadeá"),
e(yg, "cadue", "caduê"),
e(yg, "caete", "caeté"),
e(yg, "cafes", "cafés"),
e(yg, "cagoa", "cagoã"),
e(yg, "cagao", "cagão"),
e(yg, "caico", "caicó"),
e(yg, "caira", "cairá"),
e(yg, "caire", "cairé"),
e(yg, "caite", "caité"),
e(yg, "caito", "caitó"),
e(yg, "caiua", "caiuá"),
e(yg, "caiue", "caiué"),
e(yg, "caicu", "caiçu"),
e(yg, "caica", "caiçá"),
e(yg, "cajua", "cajuá"),
e(yg, "cajui", "cajuí"),
e(yg, "cajas", "cajás"),
e(yg, "cajao", "cajão"),
e(yg, "calea", "caleá"),
e(yg, "calao", "calão"),
e(yg, "calca", "calça"),
e(yg, "calco", "calço"),
e(yg, "camaa", "camaá"),
e(yg, "camea", "cameá"),
e(yg, "campe", "campé"),
e(yg, "camua", "camuá"),
e(yg, "camao", "camão"),
e(yg, "cames", "camés"),
e(yg, "canca", "cancã"),
e(yg, "canea", "caneá"),
e(yg, "canoe", "canoé"),
e(yg, "canta", "cantá"),
e(yg, "canza", "canzá"),
e(yg, "capia", "capiá"),
e(yg, "capao", "capão"),
e(yg, "capos", "capôs"),
e(yg, "carea", "careá"),
e(yg, "carii", "carií"),
e(yg, "cario", "carió"),
e(yg, "cariu", "cariú"),
e(yg, "caroa", "caroá"),
e(yg, "caroe", "caroé"),
e(yg, "carre", "carrê"),
e(yg, "carua", "caruá"),
e(yg, "carao", "carão"),
e(yg, "cares", "carés"),
e(yg, "careu", "caréu"),
e(yg, "casba", "casbá"),
e(yg, "casea", "caseá"),
e(yg, "casao", "casão"),
e(yg, "catea", "cateá"),
e(yg, "catua", "catuá"),
e(yg, "catao", "catão"),
e(yg, "caulo", "cauló"),
e(yg, "cauma", "caumã"),
e(yg, "caure", "cauré"),
e(yg, "cauas", "cauás"),
e(yg, "cauis", "cauís"),
e(yg, "cavao", "cavão"),
e(yg, "caxua", "caxuá"),
e(yg, "caxao", "caxão"),
e(yg, "cacai", "caçai"),
e(yg, "cacam", "caçam"),
e(yg, "cacar", "caçar"),
e(yg, "cacas", "caças"),
e(yg, "cacoa", "caçoa"),
e(yg, "cacoe", "caçoe"),
e(yg, "cacoo", "caçoo"),
e(yg, "cacou", "caçou"),
e(yg, "cacua", "caçuá"),
e(yg, "cacao", "cação"),
e(yg, "caiam", "caíam"),
e(yg, "caias", "caías"),
e(yg, "caiba", "caíba"),
e(yg, "caida", "caída"),
e(yg, "caido", "caído"),
e(yg, "caimo", "caímo"),
e(yg, "caira", "caíra"),
e(yg, "caiva", "caíva"),
e(yg, "caois", "caóis"),
e(yg, "cauba", "caúba"),
e(yg, "cauno", "caúno"),
e(yg, "ceara", "ceará"),
e(yg, "cecea", "ceceá"),
e(yg, "cecem", "cecém"),
e(yg, "ceces", "cecés"),
e(yg, "cedem", "cedém"),
e(yg, "celva", "celvá"),
e(yg, "celes", "celés"),
e(yg, "ceota", "ceotá"),
e(yg, "ceros", "cerós"),
e(yg, "cevao", "cevão"),
e(yg, "cecao", "ceção"),
e(yg, "chaba", "chabã"),
e(yg, "chabo", "chabó"),
e(yg, "chaia", "chaiá"),
e(yg, "chaja", "chajá"),
e(yg, "chale", "chalé"),
e(yg, "chate", "chaté"),
e(yg, "chaua", "chauá"),
e(yg, "chaca", "chaça"),
e(yg, "chaco", "chaço"),
e(yg, "chaem", "chaém"),
e(yg, "chebe", "chebê"),
e(yg, "cheva", "chevá"),
e(yg, "chibe", "chibé"),
e(yg, "chiuo", "chiuô"),
e(yg, "chiao", "chião"),
e(yg, "chogo", "chogó"),
e(yg, "chone", "choné"),
e(yg, "choca", "choça"),
e(yg, "chule", "chulé"),
e(yg, "chuas", "chuás"),
e(yg, "chuca", "chuça"),
e(yg, "chuco", "chuço"),
e(yg, "chues", "chués"),
e(yg, "chaos", "chãos"),
e(yg, "choes", "chões"),
e(yg, "cidro", "cidró"),
e(yg, "cidao", "cidão"),
e(yg, "cidas", "cidãs"),
e(yg, "cifao", "cifão"),
e(yg, "cimbo", "cimbó"),
e(yg, "cimes", "cimés"),
e(yg, "cipos", "cipós"),
e(yg, "cirao", "cirão"),
e(yg, "cispa", "cispá"),
e(yg, "cisao", "cisão"),
e(yg, "cioes", "ciões"),
e(yg, "ciume", "ciúme"),
e(yg, "ciuro", "ciúro"),
e(yg, "clipa", "clipá"),
e(yg, "clisa", "clisá"),
e(yg, "coara", "coará"),
e(yg, "coata", "coatá"),
e(yg, "coboi", "cobói"),
e(yg, "cocao", "cocão"),
e(yg, "codra", "codrá"),
e(yg, "codes", "codés"),
e(yg, "cofio", "cofió"),
e(yg, "coios", "coiós"),
e(yg, "colea", "coleá"),
e(yg, "colta", "coltá"),
e(yg, "colva", "colvá"),
e(yg, "compo", "compô"),
e(yg, "comao", "comão"),
e(yg, "conco", "conço"),
e(yg, "copao", "copão"),
e(yg, "corea", "coreá"),
e(yg, "corre", "corré"),
e(yg, "corao", "corão"),
e(yg, "corca", "corça"),
e(yg, "corco", "corço"),
e(yg, "cotao", "cotão"),
e(yg, "coupe", "coupé"),
e(yg, "couva", "couvá"),
e(yg, "couca", "couça"),
e(yg, "covea", "coveá"),
e(yg, "covoa", "covoá"),
e(yg, "covao", "covão"),
e(yg, "coxea", "coxeá"),
e(yg, "coxao", "coxão"),
e(yg, "cocai", "coçai"),
e(yg, "cocam", "coçam"),
e(yg, "cocar", "coçar"),
e(yg, "cocas", "coças"),
e(yg, "cocou", "coçou"),
e(yg, "coiba", "coíba"),
e(yg, "coibe", "coíbe"),
e(yg, "coibo", "coíbo"),
e(yg, "crapo", "crapô"),
e(yg, "craua", "crauá"),
e(yg, "creie", "creié"),
e(yg, "creje", "crejé"),
e(yg, "crera", "crerá"),
e(yg, "crisa", "crisá"),
e(yg, "crues", "crués"),
e(yg, "cruos", "cruós"),
e(yg, "cuara", "cuará"),
e(yg, "cuata", "cuatá"),
e(yg, "cubie", "cubié"),
e(yg, "cubiu", "cubiú"),
e(yg, "cuche", "cuchê"),
e(yg, "cugia", "cugiá"),
e(yg, "cuila", "cuilá"),
e(yg, "cuipe", "cuipé"),
e(yg, "cuita", "cuitá"),
e(yg, "cuite", "cuité"),
e(yg, "cuito", "cuitó"),
e(yg, "cuiao", "cuião"),
e(yg, "cuius", "cuiús"),
e(yg, "cujia", "cujiá"),
e(yg, "culca", "culcá"),
e(yg, "cumai", "cumaí"),
e(yg, "cumbe", "cumbé"),
e(yg, "cumpo", "cumpô"),
e(yg, "cumas", "cumãs"),
e(yg, "cunas", "cunãs"),
e(yg, "cuoza", "cuozá"),
e(yg, "cupai", "cupaí"),
e(yg, "cupao", "cupão"),
e(yg, "cupes", "cupés"),
e(yg, "curio", "curió"),
e(yg, "curua", "curuá"),
e(yg, "curao", "curão"),
e(yg, "curos", "curós"),
e(yg, "cutiu", "cutiú"),
e(yg, "cutao", "cutão"),
e(yg, "cuxiu", "cuxiú"),
e(yg, "cuxas", "cuxás"),
e(yg, "cuica", "cuíca"),
e(yg, "cuice", "cuíce"),
e(yg, "cuine", "cuíne"),
e(yg, "cuira", "cuíra"),
e(yg, "cacea", "cácea"),
e(yg, "cadis", "cádis"),
e(yg, "calix", "cálix"),
e(yg, "capea", "cápea"),
e(yg, "capua", "cápua"),
e(yg, "carie", "cárie"),
e(yg, "carus", "cárus"),
e(yg, "cavea", "cávea"),
e(yg, "cavia", "cávia"),
e(yg, "candi", "cândi"),
e(yg, "cangi", "cângi"),
e(yg, "canon", "cânon"),
e(yg, "cebio", "cébio"),
e(yg, "cebus", "cébus"),
e(yg, "cecum", "cécum"),
e(yg, "celea", "célea"),
e(yg, "celeo", "céleo"),
e(yg, "celia", "célia"),
e(yg, "celio", "célio"),
e(yg, "cerea", "cérea"),
e(yg, "cereo", "céreo"),
e(yg, "ceria", "céria"),
e(yg, "cerio", "cério"),
e(yg, "ceris", "céris"),
e(yg, "cesar", "césar"),
e(yg, "cesio", "césio"),
e(yg, "cenio", "cênio"),
e(yg, "cenis", "cênis"),
e(yg, "cilio", "cílio"),
e(yg, "cirio", "círio"),
e(yg, "civel", "cível"),
e(yg, "coana", "cóana"),
e(yg, "coano", "cóano"),
e(yg, "cobio", "cóbio"),
e(yg, "cobua", "cóbua"),
e(yg, "cobus", "cóbus"),
e(yg, "cochi", "cóchi"),
e(yg, "codeo", "códeo"),
e(yg, "codex", "códex"),
e(yg, "codio", "códio"),
e(yg, "codon", "códon"),
e(yg, "codao", "códão"),
e(yg, "cofea", "cófea"),
e(yg, "cofia", "cófia"),
e(yg, "cogia", "cógia"),
e(yg, "coleo", "cóleo"),
e(yg, "colia", "cólia"),
e(yg, "colio", "cólio"),
e(yg, "colis", "cólis"),
e(yg, "colon", "cólon"),
e(yg, "colua", "cólua"),
e(yg, "copia", "cópia"),
e(yg, "corio", "cório"),
e(yg, "coris", "córis"),
e(yg, "coxis", "cóxis"),
e(yg, "codea", "côdea"),
e(yg, "comea", "cômea"),
e(yg, "comio", "cômio"),
e(yg, "cubio", "cúbio"),
e(yg, "cucio", "cúcio"),
e(yg, "cudia", "cúdia"),
e(yg, "cufea", "cúfea"),
e(yg, "cufia", "cúfia"),
e(yg, "culea", "cúlea"),
e(yg, "culeo", "cúleo"),
e(yg, "culex", "cúlex"),
e(yg, "cumel", "cúmel"),
e(yg, "cumis", "cúmis"),
e(yg, "cunea", "cúnea"),
e(yg, "cuneo", "cúneo"),
e(yg, "cunia", "cúnia"),
e(yg, "curia", "cúria"),
e(yg, "cuter", "cúter"),
e(yg, "cutis", "cútis"),
e(yg, "dabas", "dabás"),
e(yg, "dadao", "dadão"),
e(yg, "daiao", "daião"),
e(yg, "dalem", "dalém"),
e(yg, "damao", "damão"),
e(yg, "danca", "dança"),
e(yg, "danco", "danço"),
e(yg, "danes", "danês"),
e(yg, "daras", "darás"),
e(yg, "darao", "darão"),
e(yg, "dacas", "daças"),
e(yg, "dacao", "dação"),
e(yg, "decai", "decaí"),
e(yg, "dedao", "dedão"),
e(yg, "dedeu", "dedéu"),
e(yg, "demea", "demeá"),
e(yg, "demao", "demão"),
e(yg, "dende", "dendê"),
e(yg, "depos", "depôs"),
e(yg, "depoe", "depõe"),
e(yg, "desda", "desdá"),
e(yg, "despo", "despô"),
e(yg, "desva", "desvã"),
e(yg, "desve", "desvê"),
e(yg, "desca", "desça"),
e(yg, "desco", "desço"),
e(yg, "detem", "detém"),
e(yg, "detem", "detêm"),
e(yg, "devem", "devém"),
e(yg, "devem", "devêm"),
e(yg, "deaes", "deães"),
e(yg, "deaos", "deãos"),
e(yg, "deoes", "deões"),
e(yg, "dibas", "dibás"),
e(yg, "didas", "didás"),
e(yg, "diesa", "diesá"),
e(yg, "dijas", "dijás"),
e(yg, "dilui", "diluí"),
e(yg, "dinie", "dinié"),
e(yg, "dirra", "dirrã"),
e(yg, "dirui", "diruí"),
e(yg, "diras", "dirás"),
e(yg, "dirao", "dirão"),
e(yg, "direm", "dirém"),
e(yg, "disue", "disué"),
e(yg, "divao", "divão"),
e(yg, "dicao", "dição"),
e(yg, "diois", "dióis"),
e(yg, "diula", "diúla"),
e(yg, "diuso", "diúso"),
e(yg, "diuta", "diúta"),
e(yg, "doara", "doará"),
e(yg, "docem", "docém"),
e(yg, "dodoi", "dodói"),
e(yg, "doera", "doerá"),
e(yg, "dogos", "dogôs"),
e(yg, "doles", "dolés"),
e(yg, "donea", "doneá"),
e(yg, "dosea", "doseá"),
e(yg, "doulo", "douló"),
e(yg, "dozao", "dozão"),
e(yg, "docai", "doçai"),
e(yg, "docal", "doçal"),
e(yg, "docam", "doçam"),
e(yg, "docar", "doçar"),
e(yg, "docou", "doçou"),
e(yg, "docus", "doçus"),
e(yg, "doiam", "doíam"),
e(yg, "doias", "doías"),
e(yg, "doido", "doído"),
e(yg, "drape", "drapê"),
e(yg, "drica", "driça"),
e(yg, "druva", "druvá"),
e(yg, "dualo", "dualó"),
e(yg, "duble", "dublê"),
e(yg, "dubas", "dubás"),
e(yg, "ducra", "ducrá"),
e(yg, "ducao", "ducão"),
e(yg, "dueca", "dueça"),
e(yg, "dugao", "dugão"),
e(yg, "dungo", "dungô"),
e(yg, "durba", "durbá"),
e(yg, "durga", "durgá"),
e(yg, "durao", "durão"),
e(yg, "dutro", "dutró"),
e(yg, "duita", "duíta"),
e(yg, "dacio", "dácio"),
e(yg, "dalia", "dália"),
e(yg, "datil", "dátil"),
e(yg, "damar", "dâmar"),
e(yg, "danae", "dânae"),
e(yg, "dandi", "dândi"),
e(yg, "danio", "dânio"),
e(yg, "debil", "débil"),
e(yg, "debut", "début"),
e(yg, "decor", "décor"),
e(yg, "delia", "délia"),
e(yg, "delio", "délio"),
e(yg, "derbi", "dérbi"),
e(yg, "devio", "dévio"),
e(yg, "dexia", "déxia"),
e(yg, "demia", "dêmia"),
e(yg, "diada", "díada"),
e(yg, "diade", "díade"),
e(yg, "didea", "dídea"),
e(yg, "didia", "dídia"),
e(yg, "didio", "dídio"),
e(yg, "difia", "dífia"),
e(yg, "dinio", "dínio"),
e(yg, "diope", "díope"),
e(yg, "disel", "dísel"),
e(yg, "dixis", "díxis"),
e(yg, "docil", "dócil"),
e(yg, "dolar", "dólar"),
e(yg, "dolio", "dólio"),
e(yg, "dolma", "dólmã"),
e(yg, "doria", "dória"),
e(yg, "dorio", "dório"),
e(yg, "doris", "dóris"),
e(yg, "doxus", "dóxus"),
e(yg, "donax", "dônax"),
e(yg, "donia", "dônia"),
e(yg, "dubia", "dúbia"),
e(yg, "dubio", "dúbio"),
e(yg, "dunia", "dúnia"),
e(yg, "durio", "dúrio"),
e(yg, "dutis", "dútis"),
e(yg, "duzia", "dúzia"),
e(yg, "ealma", "ealmá"),
e(yg, "earca", "earcá"),
e(yg, "ecras", "ecrãs"),
e(yg, "edere", "ederé"),
e(yg, "eflui", "efluí"),
e(yg, "egbas", "egbás"),
e(yg, "egbes", "egbés"),
e(yg, "egeao", "egeão"),
e(yg, "egipa", "egipã"),
e(yg, "eicho", "eichó"),
e(yg, "eiros", "eirós"),
e(yg, "eivao", "eivão"),
e(yg, "eicai", "eiçai"),
e(yg, "eicam", "eiçam"),
e(yg, "eicar", "eiçar"),
e(yg, "eicas", "eiças"),
e(yg, "eicou", "eiçou"),
e(yg, "elafa", "elafá"),
e(yg, "elebo", "elebó"),
e(yg, "eleda", "eledá"),
e(yg, "elede", "eledê"),
e(yg, "elepe", "elepê"),
e(yg, "eluia", "eluía"),
e(yg, "eluis", "eluís"),
e(yg, "eluos", "eluôs"),
e(yg, "eleis", "eléis"),
e(yg, "emara", "emará"),
e(yg, "emaca", "emaça"),
e(yg, "emaco", "emaço"),
e(yg, "embai", "embaí"),
e(yg, "embia", "embiá"),
e(yg, "embiu", "embiú"),
e(yg, "emboa", "emboá"),
e(yg, "embua", "embuá"),
e(yg, "embui", "embuí"),
e(yg, "embes", "embés"),
e(yg, "emebe", "emebé"),
e(yg, "emona", "emoná"),
e(yg, "empea", "empeá"),
e(yg, "empos", "empós"),
e(yg, "encho", "enchó"),
e(yg, "eneva", "enevá"),
e(yg, "enfea", "enfeá"),
e(yg, "enfua", "enfuá"),
e(yg, "engea", "engeá"),
e(yg, "enlea", "enleá"),
e(yg, "enoga", "enogá"),
e(yg, "enova", "enová"),
e(yg, "enria", "enriá"),
e(yg, "ensea", "enseá"),
e(yg, "entea", "enteá"),
e(yg, "entao", "então"),
e(yg, "enves", "envés"),
e(yg, "enxia", "enxiá"),
e(yg, "enxui", "enxuí"),
e(yg, "enxos", "enxós"),
e(yg, "eneis", "enéis"),
e(yg, "eneus", "enéus"),
e(yg, "enois", "enóis"),
e(yg, "eoipo", "eoípo"),
e(yg, "epila", "epilá"),
e(yg, "epoxi", "epóxi"),
e(yg, "erama", "eramá"),
e(yg, "erica", "eriça"),
e(yg, "erico", "eriço"),
e(yg, "erosa", "erosá"),
e(yg, "ervoa", "ervoá"),
e(yg, "ervao", "ervão"),
e(yg, "esere", "eserê"),
e(yg, "esmea", "esmeá"),
e(yg, "esmoe", "esmoê"),
e(yg, "esmoi", "esmoí"),
e(yg, "esnua", "esnuá"),
e(yg, "espui", "espuí"),
e(yg, "estea", "esteá"),
e(yg, "estas", "estás"),
e(yg, "estao", "estão"),
e(yg, "esvai", "esvaí"),
e(yg, "esvao", "esvão"),
e(yg, "etipe", "etípe"),
e(yg, "etoes", "etões"),
e(yg, "eubas", "eubás"),
e(yg, "evase", "evasê"),
e(yg, "evaza", "evazá"),
e(yg, "evira", "evirá"),
e(yg, "evoes", "evoés"),
e(yg, "exita", "exitá"),
e(yg, "expos", "expôs"),
e(yg, "expoe", "expõe"),
e(yg, "exsta", "exstá"),
e(yg, "exoes", "exões"),
e(yg, "earia", "eária"),
e(yg, "eolia", "eólia"),
e(yg, "eolio", "eólio"),
e(yg, "facea", "faceá"),
e(yg, "facao", "facão"),
e(yg, "fadia", "fadiá"),
e(yg, "fadao", "fadão"),
e(yg, "faira", "fairá"),
e(yg, "faisa", "faisã"),
e(yg, "faiao", "faião"),
e(yg, "fajas", "fajãs"),
e(yg, "fanao", "fanão"),
e(yg, "farao", "faraó"),
e(yg, "farfa", "farfã"),
e(yg, "faras", "farás"),
e(yg, "farao", "farão"),
e(yg, "fasea", "faseá"),
e(yg, "fatao", "fatão"),
e(yg, "favao", "favão"),
e(yg, "faxea", "faxeá"),
e(yg, "facam", "façam"),
e(yg, "facas", "faças"),
e(yg, "faula", "faúla"),
e(yg, "feiao", "feião"),
e(yg, "felas", "felãs"),
e(yg, "feleu", "feléu"),
e(yg, "felos", "felôs"),
e(yg, "femba", "fembá"),
e(yg, "feofo", "feofó"),
e(yg, "feoes", "feões"),
e(yg, "fiara", "fiará"),
e(yg, "fiaco", "fiaço"),
e(yg, "ficao", "ficão"),
e(yg, "fideu", "fidéu"),
e(yg, "fifos", "fifós"),
e(yg, "fijas", "fijás"),
e(yg, "filao", "filão"),
e(yg, "fines", "finês"),
e(yg, "fiofo", "fiofó"),
e(yg, "firra", "firrá"),
e(yg, "fitao", "fitão"),
e(yg, "fiusa", "fiúsa"),
e(yg, "fiuza", "fiúza"),
e(yg, "fiuzo", "fiúzo"),
e(yg, "flima", "flimá"),
e(yg, "flipa", "flipá"),
e(yg, "floca", "flocá"),
e(yg, "floso", "flosô"),
e(yg, "flota", "flotá"),
e(yg, "flozo", "flozô"),
e(yg, "fluia", "fluía"),
e(yg, "fluis", "fluís"),
e(yg, "fluor", "flúor"),
e(yg, "flute", "flûte"),
e(yg, "fobos", "fobós"),
e(yg, "fofao", "fofão"),
e(yg, "fogao", "fogão"),
e(yg, "foica", "foiça"),
e(yg, "foico", "foiço"),
e(yg, "folea", "foleá"),
e(yg, "folao", "folão"),
e(yg, "fonao", "fonão"),
e(yg, "forca", "força"),
e(yg, "forco", "forço"),
e(yg, "fotea", "foteá"),
e(yg, "fotao", "fotão"),
e(yg, "fotas", "fotãs"),
e(yg, "fouca", "fouça"),
e(yg, "fouco", "fouço"),
e(yg, "focao", "foção"),
e(yg, "frada", "fradá"),
e(yg, "frape", "frapê"),
e(yg, "freva", "frevá"),
e(yg, "frola", "frolá"),
e(yg, "frozo", "frozô"),
e(yg, "fruia", "fruía"),
e(yg, "fruis", "fruís"),
e(yg, "fugao", "fugão"),
e(yg, "fujao", "fujão"),
e(yg, "fuloa", "fuloá"),
e(yg, "fulao", "fulão"),
e(yg, "fumea", "fumeá"),
e(yg, "fumao", "fumão"),
e(yg, "funfa", "funfá"),
e(yg, "funeu", "funéu"),
e(yg, "furao", "furão"),
e(yg, "fusga", "fusgá"),
e(yg, "fusao", "fusão"),
e(yg, "fuzue", "fuzuê"),
e(yg, "fucai", "fuçai"),
e(yg, "fucam", "fuçam"),
e(yg, "fucar", "fuçar"),
e(yg, "fucas", "fuças"),
e(yg, "fucou", "fuçou"),
e(yg, "fuoes", "fuões"),
e(yg, "facil", "fácil"),
e(yg, "fagea", "fágea"),
e(yg, "fajea", "fájea"),
e(yg, "falum", "fálum"),
e(yg, "falus", "fálus"),
e(yg, "fario", "fário"),
e(yg, "fasia", "fásia"),
e(yg, "fatua", "fátua"),
e(yg, "fatuo", "fátuo"),
e(yg, "favio", "fávio"),
e(yg, "fania", "fânia"),
e(yg, "fanio", "fânio"),
e(yg, "fanti", "fânti"),
e(yg, "fecio", "fécio"),
e(yg, "felea", "félea"),
e(yg, "feleo", "féleo"),
e(yg, "felis", "félis"),
e(yg, "feria", "féria"),
e(yg, "femea", "fêmea"),
e(yg, "femeo", "fêmeo"),
e(yg, "femur", "fêmur"),
e(yg, "fenix", "fênix"),
e(yg, "fetao", "fêtão"),
e(yg, "fiala", "fíala"),
e(yg, "fiber", "fíber"),
e(yg, "ficea", "fícea"),
e(yg, "ficeo", "fíceo"),
e(yg, "ficis", "fícis"),
e(yg, "ficus", "fícus"),
e(yg, "fidia", "fídia"),
e(yg, "fifia", "fífia"),
e(yg, "filea", "fílea"),
e(yg, "fileo", "fíleo"),
e(yg, "filer", "fíler"),
e(yg, "focio", "fócio"),
e(yg, "fodia", "fódia"),
e(yg, "folio", "fólio"),
e(yg, "folis", "fólis"),
e(yg, "foloe", "fóloe"),
e(yg, "forum", "fórum"),
e(yg, "foton", "fóton"),
e(yg, "fovea", "fóvea"),
e(yg, "fonix", "fônix"),
e(yg, "fonon", "fônon"),
e(yg, "fucea", "fúcea"),
e(yg, "fucia", "fúcia"),
e(yg, "fufia", "fúfia"),
e(yg, "fufio", "fúfio"),
e(yg, "fuler", "fúler"),
e(yg, "fulix", "fúlix"),
e(yg, "fumeo", "fúmeo"),
e(yg, "furia", "fúria"),
e(yg, "fusel", "fúsel"),
e(yg, "fusil", "fúsil"),
e(yg, "futil", "fútil"),
e(yg, "gabao", "gabão"),
e(yg, "gabeu", "gabéu"),
e(yg, "gadao", "gadão"),
e(yg, "gafem", "gafém"),
e(yg, "gagao", "gagão"),
e(yg, "gajao", "gajão"),
e(yg, "galoa", "galoá"),
e(yg, "galao", "galão"),
e(yg, "gales", "galês"),
e(yg, "gamba", "gambá"),
e(yg, "gamao", "gamão"),
e(yg, "ganfa", "ganfá"),
e(yg, "ganto", "gantó"),
e(yg, "ganza", "ganzá"),
e(yg, "ganze", "ganzé"),
e(yg, "ganca", "gança"),
e(yg, "ganco", "ganço"),
e(yg, "ganes", "ganês"),
e(yg, "gapos", "gapós"),
e(yg, "garga", "gargá"),
e(yg, "gargo", "gargó"),
e(yg, "garas", "garás"),
e(yg, "garao", "garão"),
e(yg, "garca", "garça"),
e(yg, "garco", "garço"),
e(yg, "gasca", "gascã"),
e(yg, "gasea", "gaseá"),
e(yg, "gasma", "gasmá"),
e(yg, "gatea", "gateá"),
e(yg, "gatao", "gatão"),
e(yg, "gaudo", "gaudó"),
e(yg, "gavao", "gavão"),
e(yg, "gazea", "gazeá"),
e(yg, "gazao", "gazão"),
e(yg, "gaeis", "gaéis"),
e(yg, "geara", "geará"),
e(yg, "gebra", "gebrá"),
e(yg, "gerem", "gerém"),
e(yg, "getes", "getés"),
e(yg, "geina", "geína"),
e(yg, "gibao", "gibão"),
e(yg, "gicle", "giclê"),
e(yg, "giclo", "gicló"),
e(yg, "gicao", "gicão"),
e(yg, "gigle", "giglê"),
e(yg, "giles", "gilés"),
e(yg, "gimao", "gimão"),
e(yg, "girao", "girão"),
e(yg, "glace", "glacê"),
e(yg, "glaca", "glaça"),
e(yg, "glaco", "glaço"),
e(yg, "gluao", "gluão"),
e(yg, "gloes", "glões"),
e(yg, "gluon", "glúon"),
e(yg, "godao", "godão"),
e(yg, "gofes", "gofés"),
e(yg, "gogos", "gogós"),
e(yg, "goias", "goiás"),
e(yg, "golea", "goleá"),
e(yg, "golpa", "golpá"),
e(yg, "gombo", "gombô"),
e(yg, "gomoa", "gomoá"),
e(yg, "gonga", "gongá"),
e(yg, "gorao", "gorão"),
e(yg, "goros", "gorós"),
e(yg, "gotea", "goteá"),
e(yg, "gotao", "gotão"),
e(yg, "gouga", "gougá"),
e(yg, "gozao", "gozão"),
e(yg, "graia", "graiá"),
e(yg, "graca", "graça"),
e(yg, "grejo", "grejó"),
e(yg, "grena", "grená"),
e(yg, "grijo", "grijó"),
e(yg, "grios", "griôs"),
e(yg, "grola", "grolá"),
e(yg, "grolo", "groló"),
e(yg, "gruia", "gruía"),
e(yg, "gruis", "gruís"),
e(yg, "grace", "grâce"),
e(yg, "graos", "grãos"),
e(yg, "greus", "gréus"),
e(yg, "guaca", "guacá"),
e(yg, "guaio", "guaió"),
e(yg, "guaiu", "guaiú"),
e(yg, "guaja", "guajá"),
e(yg, "guana", "guaná"),
e(yg, "guara", "guará"),
e(yg, "guato", "guató"),
e(yg, "guaza", "guazá"),
e(yg, "guacu", "guaçu"),
e(yg, "guede", "guedé"),
e(yg, "guiba", "guibá"),
e(yg, "guida", "guidá"),
e(yg, "guigo", "guigó"),
e(yg, "guine", "guiné"),
e(yg, "guipa", "guipá"),
e(yg, "guira", "guirá"),
e(yg, "guiza", "guizá"),
e(yg, "guiao", "guião"),
e(yg, "guico", "guiço"),
e(yg, "gumbe", "gumbé"),
e(yg, "gunfa", "gunfá"),
e(yg, "gunto", "guntó"),
e(yg, "gabia", "gábia"),
e(yg, "gabio", "gábio"),
e(yg, "gafio", "gáfio"),
e(yg, "gajis", "gájis"),
e(yg, "galax", "gálax"),
e(yg, "galea", "gálea"),
e(yg, "galeo", "gáleo"),
e(yg, "galia", "gália"),
e(yg, "galio", "gálio"),
e(yg, "gaseo", "gáseo"),
e(yg, "gavea", "gávea"),
e(yg, "gazeo", "gázeo"),
e(yg, "gazio", "gázio"),
e(yg, "gamia", "gâmia"),
e(yg, "gania", "gânia"),
e(yg, "gebia", "gébia"),
e(yg, "gelis", "gélis"),
e(yg, "geron", "géron"),
e(yg, "gemea", "gêmea"),
e(yg, "gemeo", "gêmeo"),
e(yg, "genio", "gênio"),
e(yg, "gibio", "gíbio"),
e(yg, "gidio", "gídio"),
e(yg, "gigia", "gígia"),
e(yg, "gigis", "gígis"),
e(yg, "gilia", "gília"),
e(yg, "giria", "gíria"),
e(yg, "girio", "gírio"),
e(yg, "gobia", "góbia"),
e(yg, "gobio", "góbio"),
e(yg, "godia", "gódia"),
e(yg, "gonio", "gônio"),
e(yg, "gonis", "gônis"),
e(yg, "gulua", "gúlua"),
e(yg, "gulue", "gúlue"),
e(yg, "habes", "habés"),
e(yg, "halva", "halvá"),
e(yg, "harao", "harão"),
e(yg, "harem", "harém"),
e(yg, "hauca", "hauçá"),
e(yg, "henes", "henês"),
e(yg, "hereu", "heréu"),
e(yg, "heroi", "herói"),
e(yg, "hetma", "hetmã"),
e(yg, "hiles", "hilés"),
e(yg, "hispa", "hispá"),
e(yg, "holao", "holão"),
e(yg, "homao", "homão"),
e(yg, "horra", "horrá"),
e(yg, "horao", "horão"),
e(yg, "huama", "huamã"),
e(yg, "huila", "huíla"),
e(yg, "huios", "huíos"),
e(yg, "habia", "hábia"),
e(yg, "habil", "hábil"),
e(yg, "haden", "háden"),
e(yg, "hajis", "hájis"),
e(yg, "halex", "hálex"),
e(yg, "halis", "hális"),
e(yg, "halux", "hálux"),
e(yg, "hapax", "hápax"),
e(yg, "hania", "hânia"),
e(yg, "hanio", "hânio"),
e(yg, "heduo", "héduo"),
e(yg, "helia", "hélia"),
e(yg, "helio", "hélio"),
e(yg, "helix", "hélix"),
e(yg, "hepar", "hépar"),
e(yg, "hepia", "hépia"),
e(yg, "hevea", "hévea"),
e(yg, "hiala", "híala"),
e(yg, "hifen", "hífen"),
e(yg, "hilia", "hília"),
e(yg, "himen", "hímen"),
e(yg, "hirax", "hírax"),
e(yg, "hiria", "híria"),
e(yg, "hopea", "hópea"),
e(yg, "hopia", "hópia"),
e(yg, "hosis", "hósis"),
e(yg, "hossi", "hóssi"),
e(yg, "hovea", "hóvea"),
e(yg, "hoyas", "hóyas"),
e(yg, "humea", "húmea"),
e(yg, "humil", "húmil"),
e(yg, "humus", "húmus"),
e(yg, "iabas", "iabás"),
e(yg, "iagua", "iaguá"),
e(yg, "iages", "iagês"),
e(yg, "iaias", "iaiás"),
e(yg, "iales", "ialés"),
e(yg, "iamem", "iamém"),
e(yg, "iameu", "iaméu"),
e(yg, "iansa", "iansã"),
e(yg, "ianos", "ianôs"),
e(yg, "iasao", "iasão"),
e(yg, "iatai", "iataí"),
e(yg, "iatas", "iatás"),
e(yg, "iaupe", "iaupê"),
e(yg, "iauos", "iauôs"),
e(yg, "iaves", "iavés"),
e(yg, "iauva", "iaúva"),
e(yg, "iauvo", "iaúvo"),
e(yg, "ibale", "ibalé"),
e(yg, "ibaro", "ibaró"),
e(yg, "ibiro", "ibiró"),
e(yg, "icacu", "icaçu"),
e(yg, "icaus", "icaús"),
e(yg, "ichao", "ichão"),
e(yg, "ichos", "ichós"),
e(yg, "icipo", "icipó"),
e(yg, "icure", "icurê"),
e(yg, "idoes", "idões"),
e(yg, "iebas", "iebás"),
e(yg, "ieies", "ieiês"),
e(yg, "ieres", "ierés"),
e(yg, "ifois", "ifóis"),
e(yg, "igape", "igapé"),
e(yg, "igapo", "igapó"),
e(yg, "igupa", "igupá"),
e(yg, "iiaba", "iiabá"),
e(yg, "iicai", "iicaí"),
e(yg, "iinxe", "iinxé"),
e(yg, "ijexa", "ijexá"),
e(yg, "ilais", "ilaís"),
e(yg, "ilheu", "ilhéu"),
e(yg, "ilhos", "ilhós"),
e(yg, "ilipe", "ilipé"),
e(yg, "ilica", "iliça"),
e(yg, "ilico", "iliço"),
e(yg, "imboa", "imboá"),
e(yg, "imbua", "imbuá"),
e(yg, "imbui", "imbuí"),
e(yg, "imbes", "imbés"),
e(yg, "imeme", "imemé"),
e(yg, "imove", "imovê"),
e(yg, "impos", "impôs"),
e(yg, "impoe", "impõe"),
e(yg, "imaze", "imãze"),
e(yg, "imazo", "imãzo"),
e(yg, "imaza", "imãzá"),
e(yg, "inaia", "inaiá"),
e(yg, "inaja", "inajá"),
e(yg, "inaje", "inajé"),
e(yg, "inare", "inaré"),
e(yg, "inaes", "inaês"),
e(yg, "incia", "inciá"),
e(yg, "incre", "incrê"),
e(yg, "ingai", "ingaí"),
e(yg, "ingra", "ingrã"),
e(yg, "ingue", "ingué"),
e(yg, "ingas", "ingás"),
e(yg, "inhas", "inhás"),
e(yg, "inhes", "inhés"),
e(yg, "inias", "iniás"),
e(yg, "inles", "inlés"),
e(yg, "intui", "intuí"),
e(yg, "intas", "intãs"),
e(yg, "inves", "invés"),
e(yg, "incai", "inçai"),
e(yg, "incam", "inçam"),
e(yg, "incar", "inçar"),
e(yg, "incou", "inçou"),
e(yg, "iobos", "iobós"),
e(yg, "ioios", "ioiôs"),
e(yg, "iocas", "ioças"),
e(yg, "ipete", "ipetê"),
e(yg, "ipeui", "ipeuí"),
e(yg, "ipuas", "ipuãs"),
e(yg, "irama", "iramá"),
e(yg, "iracu", "iraçu"),
e(yg, "irere", "irerê"),
e(yg, "irira", "irirá"),
e(yg, "irmao", "irmão"),
e(yg, "irmas", "irmãs"),
e(yg, "irrui", "irruí"),
e(yg, "irres", "irrés"),
e(yg, "irucu", "iruçu"),
e(yg, "irois", "iróis"),
e(yg, "islao", "islão"),
e(yg, "islas", "islãs"),
e(yg, "itaua", "itauá"),
e(yg, "itais", "itaís"),
e(yg, "ituas", "ituás"),
e(yg, "ituis", "ituís"),
e(yg, "iudja", "iudjá"),
e(yg, "iuius", "iuiús"),
e(yg, "iulas", "iulãs"),
e(yg, "iumas", "iumás"),
e(yg, "iupua", "iupuá"),
e(yg, "iuras", "iurás"),
e(yg, "ivais", "ivaís"),
e(yg, "ivira", "ivirá"),
e(yg, "iviro", "iviró"),
e(yg, "ixiao", "ixião"),
e(yg, "ixiea", "ixíea"),
e(yg, "iacio", "iácio"),
e(yg, "iasis", "iásis"),
e(yg, "iatio", "iátio"),
e(yg, "icada", "içada"),
e(yg, "icado", "içado"),
e(yg, "icais", "içais"),
e(yg, "icamo", "içamo"),
e(yg, "icara", "içara"),
e(yg, "icara", "içará"),
e(yg, "icava", "içava"),
e(yg, "iodis", "iódis"),
e(yg, "iotio", "iótio"),
e(yg, "ionia", "iônia"),
e(yg, "ionio", "iônio"),
e(yg, "ionis", "iônis"),
e(yg, "iucas", "iúcas"),
e(yg, "iucea", "iúcea"),
e(yg, "iulos", "iúlos"),
e(yg, "iuque", "iúque"),
e(yg, "iuros", "iúros"),
e(yg, "jabea", "jabeá"),
e(yg, "jabas", "jabás"),
e(yg, "jabao", "jabão"),
e(yg, "jabos", "jabôs"),
e(yg, "jacua", "jacuá"),
e(yg, "jacui", "jacuí"),
e(yg, "jaces", "jacés"),
e(yg, "jadao", "jadão"),
e(yg, "jadas", "jadãs"),
e(yg, "jaffe", "jaffé"),
e(yg, "jaico", "jaicó"),
e(yg, "jalao", "jalão"),
e(yg, "jaleu", "jaléu"),
e(yg, "jambe", "jambé"),
e(yg, "janau", "janaú"),
e(yg, "japiu", "japiú"),
e(yg, "japue", "japué"),
e(yg, "japui", "japuí"),
e(yg, "japao", "japão"),
e(yg, "japes", "japés"),
e(yg, "jaqua", "jaquá"),
e(yg, "jaras", "jarás"),
e(yg, "jatai", "jataí"),
e(yg, "jatea", "jateá"),
e(yg, "jatas", "jatás"),
e(yg, "jauas", "jauás"),
e(yg, "javae", "javaé"),
e(yg, "javes", "javés"),
e(yg, "jacai", "jaçaí"),
e(yg, "jeico", "jeicó"),
e(yg, "jeita", "jeitá"),
e(yg, "jejas", "jejás"),
e(yg, "jembe", "jembé"),
e(yg, "jemia", "jemiá"),
e(yg, "jeova", "jeová"),
e(yg, "jepia", "jepiá"),
e(yg, "jepio", "jepió"),
e(yg, "jeres", "jerês"),
e(yg, "jesse", "jessé"),
e(yg, "jetai", "jetaí"),
e(yg, "jexas", "jexás"),
e(yg, "jicas", "jicás"),
e(yg, "jicao", "jicão"),
e(yg, "jilos", "jilós"),
e(yg, "jinos", "jinós"),
e(yg, "jipao", "jipão"),
e(yg, "jiroe", "jiroé"),
e(yg, "jitai", "jitaí"),
e(yg, "jitas", "jitás"),
e(yg, "jicui", "jiçui"),
e(yg, "jogao", "jogão"),
e(yg, "joica", "joiça"),
e(yg, "jonja", "jonjá"),
e(yg, "joncu", "jonçu"),
e(yg, "jouca", "jouça"),
e(yg, "jocal", "joçal"),
e(yg, "jocas", "joças"),
e(yg, "joiba", "joíba"),
e(yg, "jooes", "joões"),
e(yg, "jubai", "jubaí"),
e(yg, "jubao", "jubão"),
e(yg, "jucas", "jucás"),
e(yg, "jujas", "jujás"),
e(yg, "junca", "junça"),
e(yg, "jupia", "jupiá"),
e(yg, "jupua", "jupuá"),
e(yg, "jupao", "jupão"),
e(yg, "jurga", "jurgá"),
e(yg, "jurao", "jurão"),
e(yg, "jusao", "jusão"),
e(yg, "jusas", "jusãs"),
e(yg, "jutai", "jutaí"),
e(yg, "juiza", "juíza"),
e(yg, "juize", "juíze"),
e(yg, "juizo", "juízo"),
e(yg, "jacea", "jácea"),
e(yg, "jacia", "jácia"),
e(yg, "jacio", "jácio"),
e(yg, "jalea", "jálea"),
e(yg, "jaleo", "jáleo"),
e(yg, "japix", "jápix"),
e(yg, "janua", "jânua"),
e(yg, "jenia", "jênia"),
e(yg, "jitsu", "jítsu"),
e(yg, "jogui", "jógui"),
e(yg, "josia", "jósia"),
e(yg, "jonia", "jônia"),
e(yg, "jonio", "jônio"),
e(yg, "julia", "júlia"),
e(yg, "julio", "júlio"),
e(yg, "juvia", "júvia"),
e(yg, "labao", "labão"),
e(yg, "labeu", "labéu"),
e(yg, "lacea", "laceá"),
e(yg, "ladea", "ladeá"),
e(yg, "ladao", "ladão"),
e(yg, "lagao", "lagão"),
e(yg, "lajao", "lajão"),
e(yg, "lalas", "lalás"),
e(yg, "lames", "lamés"),
e(yg, "lando", "landô"),
e(yg, "lanca", "lança"),
e(yg, "lanco", "lanço"),
e(yg, "lapea", "lapeá"),
e(yg, "lapia", "lapiá"),
e(yg, "lapao", "lapão"),
e(yg, "larea", "lareá"),
e(yg, "lareu", "laréu"),
e(yg, "lasmo", "lasmó"),
e(yg, "latea", "lateá"),
e(yg, "latao", "latão"),
e(yg, "lauie", "lauié"),
e(yg, "laule", "laulé"),
e(yg, "lauas", "lauãs"),
e(yg, "laues", "laués"),
e(yg, "lazao", "lazão"),
e(yg, "lazas", "lazãs"),
e(yg, "lacai", "laçai"),
e(yg, "lacam", "laçam"),
e(yg, "lacar", "laçar"),
e(yg, "lacas", "laças"),
e(yg, "lacos", "laços"),
e(yg, "lacou", "laçou"),
e(yg, "lacao", "lação"),
e(yg, "laude", "laúde"),
e(yg, "lauza", "laúza"),
e(yg, "legao", "legão"),
e(yg, "leius", "leiús"),
e(yg, "leles", "lelés"),
e(yg, "lenao", "lenão"),
e(yg, "lenco", "lenço"),
e(yg, "lerue", "leruê"),
e(yg, "leras", "lerás"),
e(yg, "lerao", "lerão"),
e(yg, "lesao", "lesão"),
e(yg, "letao", "letão"),
e(yg, "letas", "letãs"),
e(yg, "levia", "leviá"),
e(yg, "leoes", "leões"),
e(yg, "liaca", "liaça"),
e(yg, "libre", "libré"),
e(yg, "libos", "libós"),
e(yg, "lidao", "lidão"),
e(yg, "lilas", "lilás"),
e(yg, "limia", "limiã"),
e(yg, "limao", "limão"),
e(yg, "linca", "lincá"),
e(yg, "lirao", "lirão"),
e(yg, "lisca", "liscá"),
e(yg, "litao", "litão"),
e(yg, "lixao", "lixão"),
e(yg, "licos", "liços"),
e(yg, "licao", "lição"),
e(yg, "lioes", "liões"),
e(yg, "lobao", "lobão"),
e(yg, "loces", "locés"),
e(yg, "loibe", "loibé"),
e(yg, "loica", "loiça"),
e(yg, "lomue", "lomué"),
e(yg, "lores", "lorés"),
e(yg, "lotea", "loteá"),
e(yg, "louca", "louça"),
e(yg, "locao", "loção"),
e(yg, "looes", "loões"),
e(yg, "lucha", "luchã"),
e(yg, "lucao", "lucão"),
e(yg, "lulao", "lulão"),
e(yg, "lupae", "lupaé"),
e(yg, "lusca", "luscá"),
e(yg, "lutse", "lutsé"),
e(yg, "luues", "luués"),
e(yg, "luzie", "luziê"),
e(yg, "lueea", "luéea"),
e(yg, "luila", "luíla"),
e(yg, "luime", "luíme"),
e(yg, "luina", "luína"),
e(yg, "labea", "lábea"),
e(yg, "labeo", "lábeo"),
e(yg, "labia", "lábia"),
e(yg, "labil", "lábil"),
e(yg, "labio", "lábio"),
e(yg, "lacio", "lácio"),
e(yg, "lacon", "lácon"),
e(yg, "lagis", "lágis"),
e(yg, "lajea", "lájea"),
e(yg, "lapis", "lápis"),
e(yg, "laria", "lária"),
e(yg, "larix", "lárix"),
e(yg, "lasia", "lásia"),
e(yg, "lasio", "lásio"),
e(yg, "lateo", "láteo"),
e(yg, "latex", "látex"),
e(yg, "latia", "látia"),
e(yg, "lamia", "lâmia"),
e(yg, "lamio", "lâmio"),
e(yg, "lanea", "lânea"),
e(yg, "laneo", "lâneo"),
e(yg, "lanio", "lânio"),
e(yg, "lebia", "lébia"),
e(yg, "lecia", "lécia"),
e(yg, "ledea", "lédea"),
e(yg, "legua", "légua"),
e(yg, "lelia", "lélia"),
e(yg, "leops", "léops"),
e(yg, "lepis", "lépis"),
e(yg, "lepus", "lépus"),
e(yg, "leria", "léria"),
e(yg, "lexis", "léxis"),
e(yg, "lemea", "lêmea"),
e(yg, "lemur", "lêmur"),
e(yg, "lenea", "lênea"),
e(yg, "leneo", "lêneo"),
e(yg, "lenoa", "lênoa"),
e(yg, "liber", "líber"),
e(yg, "libia", "líbia"),
e(yg, "libio", "líbio"),
e(yg, "libuo", "líbuo"),
e(yg, "licea", "lícea"),
e(yg, "licia", "lícia"),
e(yg, "licio", "lício"),
e(yg, "lider", "líder"),
e(yg, "lidia", "lídia"),
e(yg, "lidio", "lídio"),
e(yg, "lieis", "líeis"),
e(yg, "ligea", "lígea"),
e(yg, "ligeo", "lígeo"),
e(yg, "ligia", "lígia"),
e(yg, "ligio", "lígio"),
e(yg, "lilio", "lílio"),
e(yg, "limea", "límea"),
e(yg, "limeo", "límeo"),
e(yg, "linea", "línea"),
e(yg, "lineo", "líneo"),
e(yg, "lipia", "lípia"),
e(yg, "lipoa", "lípoa"),
e(yg, "liria", "líria"),
e(yg, "lirio", "lírio"),
e(yg, "lisia", "lísia"),
e(yg, "lisio", "lísio"),
e(yg, "litia", "lítia"),
e(yg, "litio", "lítio"),
e(yg, "lituo", "lítuo"),
e(yg, "livia", "lívia"),
e(yg, "lizia", "lízia"),
e(yg, "lodao", "lódão"),
e(yg, "lofio", "lófio"),
e(yg, "logea", "lógea"),
e(yg, "lojia", "lójia"),
e(yg, "lolio", "lólio"),
e(yg, "lopis", "lópis"),
e(yg, "loqui", "lóqui"),
e(yg, "loria", "lória"),
e(yg, "lorio", "lório"),
e(yg, "loris", "lóris"),
e(yg, "losia", "lósia"),
e(yg, "loteo", "lóteo"),
e(yg, "lotur", "lótur"),
e(yg, "lotus", "lótus"),
e(yg, "lovia", "lóvia"),
e(yg, "loxia", "lóxia"),
e(yg, "lomis", "lômis"),
e(yg, "lucia", "lúcia"),
e(yg, "lucio", "lúcio"),
e(yg, "ludio", "lúdio"),
e(yg, "lufia", "lúfia"),
e(yg, "lumen", "lúmen"),
e(yg, "lumia", "lúmia"),
e(yg, "lupia", "lúpia"),
e(yg, "lupus", "lúpus"),
e(yg, "luria", "lúria"),
e(yg, "lutea", "lútea"),
e(yg, "luteo", "lúteo"),
e(yg, "luzio", "lúzio"),
e(yg, "mabiu", "mabiú"),
e(yg, "mabre", "mabré"),
e(yg, "macaa", "macaá"),
e(yg, "macae", "macaé"),
e(yg, "mache", "machê"),
e(yg, "macie", "macié"),
e(yg, "macra", "macrã"),
e(yg, "madas", "madãs"),
e(yg, "mafau", "mafaú"),
e(yg, "mafua", "mafuá"),
e(yg, "magai", "magaí"),
e(yg, "magne", "magné"),
e(yg, "maina", "mainá"),
e(yg, "maira", "mairá"),
e(yg, "maiao", "maião"),
e(yg, "malea", "maleá"),
e(yg, "malsa", "malsã"),
e(yg, "mambe", "mambê"),
e(yg, "mamae", "mamãe"),
e(yg, "mamao", "mamão"),
e(yg, "manai", "manaí"),
e(yg, "manea", "maneá"),
e(yg, "manha", "manhã"),
e(yg, "maniu", "maniú"),
e(yg, "mante", "mantê"),
e(yg, "manue", "manuê"),
e(yg, "mapea", "mapeá"),
e(yg, "mapua", "mapuá"),
e(yg, "mapao", "mapão"),
e(yg, "mapes", "mapés"),
e(yg, "marea", "mareá"),
e(yg, "marii", "marií"),
e(yg, "mario", "mariô"),
e(yg, "marua", "maruá"),
e(yg, "marui", "maruí"),
e(yg, "maras", "marás"),
e(yg, "marao", "marão"),
e(yg, "mareu", "maréu"),
e(yg, "masue", "masué"),
e(yg, "matea", "mateá"),
e(yg, "matse", "matsé"),
e(yg, "matue", "matué"),
e(yg, "matao", "matão"),
e(yg, "mateu", "matéu"),
e(yg, "maune", "mauné"),
e(yg, "maura", "maurá"),
e(yg, "mauza", "mauzã"),
e(yg, "maues", "maués"),
e(yg, "mauis", "mauís"),
e(yg, "macai", "maçai"),
e(yg, "macal", "maçal"),
e(yg, "macam", "maçam"),
e(yg, "macar", "maçar"),
e(yg, "macom", "maçom"),
e(yg, "macos", "maços"),
e(yg, "macou", "maçou"),
e(yg, "macao", "mação"),
e(yg, "macas", "maçãs"),
e(yg, "maica", "maíça"),
e(yg, "mauba", "maúba"),
e(yg, "maujo", "maújo"),
e(yg, "maulo", "maúlo"),
e(yg, "mauca", "maúça"),
e(yg, "meaca", "meaça"),
e(yg, "meiao", "meião"),
e(yg, "mejes", "mejês"),
e(yg, "melha", "melhã"),
e(yg, "melao", "melão"),
e(yg, "membe", "membé"),
e(yg, "menda", "mendã"),
e(yg, "menea", "meneá"),
e(yg, "menes", "menês"),
e(yg, "meoas", "meoás"),
e(yg, "merce", "mercê"),
e(yg, "merga", "mergá"),
e(yg, "merio", "merió"),
e(yg, "merui", "meruí"),
e(yg, "merem", "merém"),
e(yg, "mesca", "mescá"),
e(yg, "mesao", "mesão"),
e(yg, "metie", "metiê"),
e(yg, "meuas", "meuás"),
e(yg, "meuos", "meuós"),
e(yg, "mexao", "mexão"),
e(yg, "mezes", "mezés"),
e(yg, "mecam", "meçam"),
e(yg, "mecas", "meças"),
e(yg, "meoes", "meões"),
e(yg, "meuco", "meúco"),
e(yg, "meule", "meúle"),
e(yg, "miara", "miará"),
e(yg, "miche", "michê"),
e(yg, "migda", "migdã"),
e(yg, "mijui", "mijuí"),
e(yg, "mijao", "mijão"),
e(yg, "milao", "milão"),
e(yg, "minda", "mindá"),
e(yg, "minui", "minuí"),
e(yg, "mirga", "mirgã"),
e(yg, "mirio", "mirió"),
e(yg, "miroe", "miroé"),
e(yg, "mirui", "miruí"),
e(yg, "mirza", "mirzá"),
e(yg, "mirao", "mirão"),
e(yg, "misca", "miscá"),
e(yg, "misna", "misná"),
e(yg, "misso", "missô"),
e(yg, "miuas", "miuás"),
e(yg, "mixio", "mixió"),
e(yg, "mixna", "mixná"),
e(yg, "miuda", "miúda"),
e(yg, "miude", "miúde"),
e(yg, "miudo", "miúdo"),
e(yg, "miufa", "miúfa"),
e(yg, "miulo", "miúlo"),
e(yg, "miura", "miúra"),
e(yg, "miuro", "miúro"),
e(yg, "miuva", "miúva"),
e(yg, "miuca", "miúça"),
e(yg, "moaca", "moacã"),
e(yg, "mocea", "moceá"),
e(yg, "mocui", "mocuí"),
e(yg, "moera", "moerá"),
e(yg, "mogue", "mogué"),
e(yg, "mogao", "mogão"),
e(yg, "mogas", "mogãs"),
e(yg, "moiao", "moião"),
e(yg, "molea", "moleá"),
e(yg, "molga", "molgá"),
e(yg, "momea", "momeá"),
e(yg, "mompe", "mompé"),
e(yg, "monde", "mondé"),
e(yg, "monhe", "monhé"),
e(yg, "morai", "moraí"),
e(yg, "morma", "mormã"),
e(yg, "morao", "morão"),
e(yg, "mosba", "mosbá"),
e(yg, "mouca", "moucá"),
e(yg, "moufa", "moufá"),
e(yg, "mouma", "moumá"),
e(yg, "moadi", "moádi"),
e(yg, "moali", "moáli"),
e(yg, "mocai", "moçai"),
e(yg, "mocam", "moçam"),
e(yg, "mocar", "moçar"),
e(yg, "mocas", "moças"),
e(yg, "mocos", "moços"),
e(yg, "mocou", "moçou"),
e(yg, "mocao", "moção"),
e(yg, "moiam", "moíam"),
e(yg, "moias", "moías"),
e(yg, "moida", "moída"),
e(yg, "moido", "moído"),
e(yg, "mouos", "moúos"),
e(yg, "mucue", "mucué"),
e(yg, "mucui", "mucuí"),
e(yg, "muema", "muemá"),
e(yg, "muena", "muená"),
e(yg, "mufui", "mufuí"),
e(yg, "mufes", "mufés"),
e(yg, "mugue", "mugué"),
e(yg, "muira", "muirá"),
e(yg, "muias", "muiás"),
e(yg, "muloi", "mulói"),
e(yg, "mumbe", "mumbé"),
e(yg, "munde", "mundé"),
e(yg, "munje", "munjé"),
e(yg, "munas", "munãs"),
e(yg, "murea", "mureá"),
e(yg, "murui", "muruí"),
e(yg, "murza", "murzá"),
e(yg, "murca", "murça"),
e(yg, "musga", "musgá"),
e(yg, "musme", "musmé"),
e(yg, "musso", "mussó"),
e(yg, "mutoe", "mutoé"),
e(yg, "mutas", "mutás"),
e(yg, "muviu", "muviú"),
e(yg, "muxem", "muxém"),
e(yg, "muadi", "muádi"),
e(yg, "muari", "muári"),
e(yg, "muani", "muâni"),
e(yg, "mucas", "muças"),
e(yg, "mucao", "mução"),
e(yg, "muila", "muíla"),
e(yg, "macea", "mácea"),
e(yg, "madia", "mádia"),
e(yg, "mafia", "máfia"),
e(yg, "magis", "mágis"),
e(yg, "magoa", "mágoa"),
e(yg, "malus", "málus"),
e(yg, "maroo", "mároo"),
e(yg, "masea", "másea"),
e(yg, "maseo", "máseo"),
e(yg, "masio", "másio"),
e(yg, "mater", "máter"),
e(yg, "matri", "mátri"),
e(yg, "mavia", "mávia"),
e(yg, "mebia", "mébia"),
e(yg, "mecia", "mécia"),
e(yg, "mecum", "mécum"),
e(yg, "media", "média"),
e(yg, "medio", "médio"),
e(yg, "medon", "médon"),
e(yg, "medao", "médão"),
e(yg, "meleo", "méleo"),
e(yg, "melia", "mélia"),
e(yg, "meloe", "méloe"),
e(yg, "meona", "méona"),
e(yg, "meone", "méone"),
e(yg, "meono", "méono"),
e(yg, "meroe", "méroe"),
e(yg, "mesia", "mésia"),
e(yg, "mesio", "mésio"),
e(yg, "mesis", "mésis"),
e(yg, "meson", "méson"),
e(yg, "messu", "méssu"),
e(yg, "mesua", "mésua"),
e(yg, "mevia", "mévia"),
e(yg, "mezio", "mézio"),
e(yg, "micia", "mícia"),
e(yg, "micio", "mício"),
e(yg, "midia", "mídia"),
e(yg, "milea", "mílea"),
e(yg, "mileo", "míleo"),
e(yg, "milio", "mílio"),
e(yg, "mimon", "mímon"),
e(yg, "minio", "mínio"),
e(yg, "miope", "míope"),
e(yg, "miris", "míris"),
e(yg, "misia", "mísia"),
e(yg, "misio", "mísio"),
e(yg, "misis", "mísis"),
e(yg, "mitim", "mítim"),
e(yg, "mobil", "móbil"),
e(yg, "mocis", "mócis"),
e(yg, "modio", "módio"),
e(yg, "molia", "mólia"),
e(yg, "molio", "mólio"),
e(yg, "molis", "mólis"),
e(yg, "moqua", "móqua"),
e(yg, "morea", "mórea"),
e(yg, "morio", "mório"),
e(yg, "movel", "móvel"),
e(yg, "muchi", "múchi"),
e(yg, "mucua", "múcua"),
e(yg, "mugil", "múgil"),
e(yg, "mujio", "mújio"),
e(yg, "mulea", "múlea"),
e(yg, "muleo", "múleo"),
e(yg, "mulio", "múlio"),
e(yg, "mumia", "múmia"),
e(yg, "mundi", "múndi"),
e(yg, "munia", "múnia"),
e(yg, "munus", "múnus"),
e(yg, "muons", "múons"),
e(yg, "murex", "múrex"),
e(yg, "muria", "múria"),
e(yg, "mutua", "mútua"),
e(yg, "mutuo", "mútuo"),
e(yg, "muzua", "múzua"),
e(yg, "musli", "müsli"),
e(yg, "nafes", "nafés"),
e(yg, "nagao", "nagão"),
e(yg, "nagos", "nagôs"),
e(yg, "naixo", "naixó"),
e(yg, "najes", "najés"),
e(yg, "nanas", "nanás"),
e(yg, "nanos", "nanós"),
e(yg, "narca", "narça"),
e(yg, "nasca", "nasça"),
e(yg, "nasco", "nasço"),
e(yg, "navao", "navaó"),
e(yg, "navem", "navém"),
e(yg, "nacao", "nação"),
e(yg, "naive", "naïve"),
e(yg, "necea", "neceá"),
e(yg, "nedai", "nedaí"),
e(yg, "negao", "negão"),
e(yg, "nenem", "neném"),
e(yg, "nenes", "nenês"),
e(yg, "nevao", "nevão"),
e(yg, "neois", "neóis"),
e(yg, "neoes", "neões"),
e(yg, "nhimo", "nhimó"),
e(yg, "niboe", "niboé"),
e(yg, "nicta", "nictá"),
e(yg, "nices", "nicês"),
e(yg, "nifao", "nifão"),
e(yg, "nilgo", "nilgó"),
e(yg, "nilia", "niliá"),
e(yg, "niopo", "niopó"),
e(yg, "nipao", "nipão"),
e(yg, "nipas", "nipãs"),
e(yg, "niros", "nirós"),
e(yg, "nisao", "nisão"),
e(yg, "nisas", "nisãs"),
e(yg, "nogao", "nogão"),
e(yg, "nomea", "nomeá"),
e(yg, "norca", "norça"),
e(yg, "nocao", "noção"),
e(yg, "noeis", "noéis"),
e(yg, "nudas", "nudás"),
e(yg, "nugos", "nugós"),
e(yg, "nuita", "nuitã"),
e(yg, "nupes", "nupés"),
e(yg, "nuvea", "nuveá"),
e(yg, "nucao", "nução"),
e(yg, "nueis", "nuéis"),
e(yg, "nuima", "nuíma"),
e(yg, "nabis", "nábis"),
e(yg, "nabao", "nábão"),
e(yg, "nacar", "nácar"),
e(yg, "nagua", "nágua"),
e(yg, "najir", "nájir"),
e(yg, "narea", "nárea"),
e(yg, "nasea", "násea"),
e(yg, "naseo", "náseo"),
e(yg, "nasia", "násia"),
e(yg, "nasio", "násio"),
e(yg, "nassi", "nássi"),
e(yg, "nasua", "násua"),
e(yg, "natia", "nátia"),
e(yg, "navea", "návea"),
e(yg, "navia", "návia"),
e(yg, "naxia", "náxia"),
e(yg, "naxio", "náxio"),
e(yg, "nazia", "názia"),
e(yg, "nazir", "názir"),
e(yg, "namia", "nâmia"),
e(yg, "nania", "nânia"),
e(yg, "negre", "nègre"),
e(yg, "nedia", "nédia"),
e(yg, "nedio", "nédio"),
e(yg, "nedji", "nédji"),
e(yg, "neeas", "néeas"),
e(yg, "nelia", "nélia"),
e(yg, "neone", "néone"),
e(yg, "neons", "néons"),
e(yg, "neper", "néper"),
e(yg, "nepia", "népia"),
e(yg, "neria", "néria"),
e(yg, "nerio", "nério"),
e(yg, "nesea", "nésea"),
e(yg, "neseo", "néseo"),
e(yg, "nevoa", "névoa"),
e(yg, "nenax", "nênax"),
e(yg, "nenia", "nênia"),
e(yg, "nenio", "nênio"),
e(yg, "nigua", "nígua"),
e(yg, "nilio", "nílio"),
e(yg, "nimia", "nímia"),
e(yg, "nimio", "nímio"),
e(yg, "ninji", "nínji"),
e(yg, "niobe", "níobe"),
e(yg, "nirex", "nírex"),
e(yg, "nisio", "nísio"),
e(yg, "niton", "níton"),
e(yg, "nivea", "nívea"),
e(yg, "nivel", "nível"),
e(yg, "niveo", "níveo"),
e(yg, "nobis", "nóbis"),
e(yg, "nocia", "nócia"),
e(yg, "nocio", "nócio"),
e(yg, "nodio", "nódio"),
e(yg, "nodoa", "nódoa"),
e(yg, "noria", "nória"),
e(yg, "norio", "nório"),
e(yg, "notea", "nótea"),
e(yg, "noteo", "nóteo"),
e(yg, "novea", "nóvea"),
e(yg, "novio", "nóvio"),
e(yg, "noxio", "nóxio"),
e(yg, "nomeo", "nômeo"),
e(yg, "nonea", "nônea"),
e(yg, "nonex", "nônex"),
e(yg, "nonio", "nônio"),
e(yg, "nubia", "núbia"),
e(yg, "nubil", "núbil"),
e(yg, "nubio", "núbio"),
e(yg, "nucio", "núcio"),
e(yg, "nufar", "núfar"),
e(yg, "numen", "númen"),
e(yg, "nuria", "núria"),
e(yg, "nuveo", "núveo"),
e(yg, "nuxia", "núxia"),
e(yg, "oacas", "oacás"),
e(yg, "oboes", "oboés"),
e(yg, "obtem", "obtém"),
e(yg, "obtem", "obtêm"),
e(yg, "obvem", "obvém"),
e(yg, "obvem", "obvêm"),
e(yg, "oclui", "ocluí"),
e(yg, "octas", "octãs"),
e(yg, "ocume", "ocumé"),
e(yg, "odede", "odedé"),
e(yg, "odeao", "odeão"),
e(yg, "odeon", "odéon"),
e(yg, "ofaie", "ofaié"),
e(yg, "ofuro", "ofurô"),
e(yg, "ogodo", "ogodô"),
e(yg, "ogude", "ogudê"),
e(yg, "oguxo", "oguxó"),
e(yg, "ogoes", "ogões"),
e(yg, "oiaca", "oiacá"),
e(yg, "oinca", "oincá"),
e(yg, "oitao", "oitão"),
e(yg, "oicam", "oiçam"),
e(yg, "oicas", "oiças"),
e(yg, "oicos", "oiços"),
e(yg, "olala", "olalá"),
e(yg, "olare", "olaré"),
e(yg, "olele", "olelé"),
e(yg, "olere", "oleré"),
e(yg, "olhao", "olhão"),
e(yg, "olobo", "olobó"),
e(yg, "olode", "olodé"),
e(yg, "olubo", "olubó"),
e(yg, "omaia", "omaiá"),
e(yg, "omala", "omalá"),
e(yg, "ombra", "ombrã"),
e(yg, "omele", "omelê"),
e(yg, "omios", "omiôs"),
e(yg, "omues", "omués"),
e(yg, "ondea", "ondeá"),
e(yg, "ondoa", "ondoá"),
e(yg, "onfua", "onfuá"),
e(yg, "onhas", "onhãs"),
e(yg, "oncas", "onças"),
e(yg, "opaie", "opaié"),
e(yg, "opele", "opelé"),
e(yg, "opora", "oporá"),
e(yg, "opcao", "opção"),
e(yg, "opois", "opóis"),
e(yg, "opoem", "opõem"),
e(yg, "opoes", "opões"),
e(yg, "oquea", "oqueá"),
e(yg, "oquie", "oquié"),
e(yg, "oquas", "oquás"),
e(yg, "orara", "orará"),
e(yg, "orixa", "orixá"),
e(yg, "orias", "oriás"),
e(yg, "orios", "oriôs"),
e(yg, "orlea", "orleã"),
e(yg, "ornea", "orneá"),
e(yg, "orupa", "orupá"),
e(yg, "oruas", "oruás"),
e(yg, "orcai", "orçai"),
e(yg, "orcam", "orçam"),
e(yg, "orcar", "orçar"),
e(yg, "orcas", "orças"),
e(yg, "orcaz", "orçaz"),
e(yg, "orcou", "orçou"),
e(yg, "osses", "ossés"),
e(yg, "ototo", "ototó"),
e(yg, "otoes", "otões"),
e(yg, "ougas", "ougãs"),
e(yg, "ourem", "ourém"),
e(yg, "outao", "outão"),
e(yg, "oucam", "ouçam"),
e(yg, "oucas", "ouças"),
e(yg, "oucao", "oução"),
e(yg, "ovens", "ovéns"),
e(yg, "oxala", "oxalá"),
e(yg, "oxiao", "oxião"),
e(yg, "ozona", "ozoná"),
e(yg, "oasis", "oásis"),
e(yg, "ocaim", "oçãim"),
e(yg, "oecio", "oécio"),
e(yg, "oeone", "oéone"),
e(yg, "oidio", "oídio"),
e(yg, "oucos", "oúcos"),
e(yg, "pacai", "pacaí"),
e(yg, "pacha", "pachã"),
e(yg, "pacta", "pactá"),
e(yg, "pacua", "pacuã"),
e(yg, "pacao", "pacão"),
e(yg, "pacem", "pacém"),
e(yg, "paces", "pacés"),
e(yg, "padra", "padrá"),
e(yg, "pades", "padês"),
e(yg, "paete", "paetê"),
e(yg, "pafua", "pafuá"),
e(yg, "pagao", "pagão"),
e(yg, "pailo", "pailó"),
e(yg, "paias", "paiás"),
e(yg, "paiao", "paião"),
e(yg, "pajau", "pajaú"),
e(yg, "pajea", "pajeá"),
e(yg, "pajeu", "pajeú"),
e(yg, "pajao", "pajão"),
e(yg, "pajes", "pajés"),
e(yg, "palau", "palaú"),
e(yg, "palpa", "palpá"),
e(yg, "palao", "palão"),
e(yg, "pamoa", "pamoá"),
e(yg, "panro", "panró"),
e(yg, "panto", "pantó"),
e(yg, "panao", "panão"),
e(yg, "panca", "pança"),
e(yg, "papea", "papeá"),
e(yg, "papia", "papiá"),
e(yg, "papao", "papão"),
e(yg, "paqua", "paquã"),
e(yg, "paque", "paquê"),
e(yg, "paria", "pariá"),
e(yg, "parna", "parnã"),
e(yg, "parne", "parné"),
e(yg, "parui", "paruí"),
e(yg, "parao", "parão"),
e(yg, "paros", "parós"),
e(yg, "pasca", "pasça"),
e(yg, "pasco", "pasço"),
e(yg, "patai", "pataí"),
e(yg, "patea", "pateá"),
e(yg, "patia", "patiá"),
e(yg, "patoa", "patoá"),
e(yg, "patua", "patuá"),
e(yg, "patao", "patão"),
e(yg, "patem", "patém"),
e(yg, "pates", "patês"),
e(yg, "pavao", "pavão"),
e(yg, "pavas", "pavãs"),
e(yg, "paves", "pavês"),
e(yg, "paxau", "paxaú"),
e(yg, "paxas", "paxás"),
e(yg, "pazea", "pazeá"),
e(yg, "pazao", "pazão"),
e(yg, "pacal", "paçal"),
e(yg, "pacos", "paços"),
e(yg, "paiba", "paíba"),
e(yg, "pauna", "paúna"),
e(yg, "paura", "paúra"),
e(yg, "peaca", "peaça"),
e(yg, "pecem", "pecém"),
e(yg, "pecoi", "pecói"),
e(yg, "pegao", "pegão"),
e(yg, "peipa", "peipá"),
e(yg, "peius", "peiús"),
e(yg, "pelea", "peleá"),
e(yg, "pelao", "pelão"),
e(yg, "pelem", "pelém"),
e(yg, "penco", "pencó"),
e(yg, "pengo", "pengó"),
e(yg, "penao", "penão"),
e(yg, "pepse", "pepsé"),
e(yg, "pepes", "pepés"),
e(yg, "perea", "pereá"),
e(yg, "peroa", "peroá"),
e(yg, "perre", "perrê"),
e(yg, "perve", "pervê"),
e(yg, "pesme", "pesmé"),
e(yg, "pesao", "pesão"),
e(yg, "petea", "peteá"),
e(yg, "petia", "petiá"),
e(yg, "petiu", "petiú"),
e(yg, "petao", "petão"),
e(yg, "petem", "petém"),
e(yg, "pexao", "pexão"),
e(yg, "pexas", "pexãs"),
e(yg, "pexem", "pexém"),
e(yg, "pezao", "pezão"),
e(yg, "pecam", "peçam"),
e(yg, "pecas", "peças"),
e(yg, "peoes", "peões"),
e(yg, "peuco", "peúco"),
e(yg, "peuga", "peúga"),
e(yg, "peule", "peúle"),
e(yg, "peuva", "peúva"),
e(yg, "pfuca", "pfucá"),
e(yg, "piade", "piadé"),
e(yg, "piafa", "piafá"),
e(yg, "piafe", "piafé"),
e(yg, "piala", "pialá"),
e(yg, "piape", "piapé"),
e(yg, "piara", "piará"),
e(yg, "piaui", "piauí"),
e(yg, "piaco", "piaço"),
e(yg, "pibos", "pibós"),
e(yg, "picau", "picaú"),
e(yg, "picua", "picuá"),
e(yg, "picui", "picuí"),
e(yg, "picao", "picão"),
e(yg, "pidao", "pidão"),
e(yg, "pidos", "pidós"),
e(yg, "pifao", "pifão"),
e(yg, "pigua", "piguá"),
e(yg, "pilao", "pilão"),
e(yg, "pileu", "piléu"),
e(yg, "pilos", "pilós"),
e(yg, "pinda", "pindá"),
e(yg, "pindo", "pindó"),
e(yg, "pinhe", "pinhé"),
e(yg, "pinca", "pinça"),
e(yg, "pinco", "pinço"),
e(yg, "pineu", "pinéu"),
e(yg, "pioie", "pioié"),
e(yg, "pioro", "pioró"),
e(yg, "pipao", "pipão"),
e(yg, "pirai", "piraí"),
e(yg, "pirau", "piraú"),
e(yg, "piroa", "piroá"),
e(yg, "pirua", "piruá"),
e(yg, "pirao", "pirão"),
e(yg, "pisga", "pisgá"),
e(yg, "pisao", "pisão"),
e(yg, "pitiu", "pitiú"),
e(yg, "pitua", "pituá"),
e(yg, "pitui", "pituí"),
e(yg, "pitao", "pitão"),
e(yg, "pitem", "pitém"),
e(yg, "piteu", "pitéu"),
e(yg, "pivos", "pivôs"),
e(yg, "pixea", "pixeá"),
e(yg, "pixua", "pixuá"),
e(yg, "pixes", "pixés"),
e(yg, "pixeu", "pixéu"),
e(yg, "pioes", "piões"),
e(yg, "piuba", "piúba"),
e(yg, "piuca", "piúca"),
e(yg, "piugo", "piúgo"),
e(yg, "piuna", "piúna"),
e(yg, "piuva", "piúva"),
e(yg, "place", "placê"),
e(yg, "plato", "platô"),
e(yg, "plida", "plidá"),
e(yg, "pleon", "pléon"),
e(yg, "poacu", "poaçu"),
e(yg, "podra", "podrã"),
e(yg, "podao", "podão"),
e(yg, "podoi", "podói"),
e(yg, "poera", "poerá"),
e(yg, "poica", "poiçá"),
e(yg, "pojos", "pojós"),
e(yg, "polea", "poleá"),
e(yg, "polao", "polão"),
e(yg, "poles", "polés"),
e(yg, "pomea", "pomeá"),
e(yg, "ponca", "poncã"),
e(yg, "ponco", "poncó"),
e(yg, "ponje", "ponjê"),
e(yg, "popia", "popiã"),
e(yg, "popao", "popão"),
e(yg, "popos", "popôs"),
e(yg, "porno", "pornô"),
e(yg, "poras", "porás"),
e(yg, "porao", "porão"),
e(yg, "porem", "porém"),
e(yg, "pospo", "pospô"),
e(yg, "potao", "potão"),
e(yg, "povao", "povão"),
e(yg, "pocal", "poçal"),
e(yg, "pocas", "poças"),
e(yg, "pocos", "poços"),
e(yg, "pocao", "poção"),
e(yg, "poois", "poóis"),
e(yg, "praja", "prajá"),
e(yg, "praxa", "praxá"),
e(yg, "praze", "prazê"),
e(yg, "praca", "praça"),
e(yg, "preda", "predá"),
e(yg, "prede", "predê"),
e(yg, "prepo", "prepô"),
e(yg, "preve", "prevê"),
e(yg, "preas", "preás"),
e(yg, "preco", "preço"),
e(yg, "priao", "prião"),
e(yg, "proca", "procá"),
e(yg, "propo", "propô"),
e(yg, "prove", "provê"),
e(yg, "proza", "prozá"),
e(yg, "pruas", "pruás"),
e(yg, "pruia", "pruía"),
e(yg, "pruis", "pruís"),
e(yg, "preon", "préon"),
e(yg, "prion", "príon"),
e(yg, "puaco", "puaço"),
e(yg, "puacu", "puaçu"),
e(yg, "pucto", "puctó"),
e(yg, "pudla", "pudlá"),
e(yg, "puira", "puirá"),
e(yg, "pulea", "puleá"),
e(yg, "pulta", "pultá"),
e(yg, "pulao", "pulão"),
e(yg, "punde", "pundé"),
e(yg, "punta", "puntá"),
e(yg, "punca", "punça"),
e(yg, "punco", "punço"),
e(yg, "purui", "puruí"),
e(yg, "pures", "purês"),
e(yg, "putea", "puteá"),
e(yg, "puvia", "puviá"),
e(yg, "puxao", "puxão"),
e(yg, "pucas", "puçás"),
e(yg, "puiam", "puíam"),
e(yg, "puias", "puías"),
e(yg, "puida", "puída"),
e(yg, "puido", "puído"),
e(yg, "puira", "puíra"),
e(yg, "puita", "puíta"),
e(yg, "padar", "pàdar"),
e(yg, "pader", "páder"),
e(yg, "padoa", "pádoa"),
e(yg, "padua", "pádua"),
e(yg, "pafia", "páfia"),
e(yg, "pafio", "páfio"),
e(yg, "pagua", "págua"),
e(yg, "palea", "pálea"),
e(yg, "palio", "pálio"),
e(yg, "palis", "pális"),
e(yg, "papio", "pápio"),
e(yg, "parea", "párea"),
e(yg, "pareo", "páreo"),
e(yg, "pario", "pário"),
e(yg, "parsi", "pársi"),
e(yg, "pateo", "páteo"),
e(yg, "pater", "páter"),
e(yg, "patio", "pátio"),
e(yg, "paxia", "páxia"),
e(yg, "panax", "pânax"),
e(yg, "panus", "pânus"),
e(yg, "peans", "péans"),
e(yg, "pelio", "pélio"),
e(yg, "peone", "péone"),
e(yg, "peons", "péons"),
e(yg, "pepia", "pépia"),
e(yg, "pexis", "péxis"),
e(yg, "penea", "pênea"),
e(yg, "penio", "pênio"),
e(yg, "penis", "pênis"),
e(yg, "picea", "pícea"),
e(yg, "piceo", "píceo"),
e(yg, "piera", "píera"),
e(yg, "piere", "píere"),
e(yg, "piero", "píero"),
e(yg, "pifia", "pífia"),
e(yg, "pifio", "pífio"),
e(yg, "pigea", "pígea"),
e(yg, "pigeo", "pígeo"),
e(yg, "pijin", "píjin"),
e(yg, "pilea", "pílea"),
e(yg, "pileo", "píleo"),
e(yg, "pilia", "pília"),
e(yg, "pilio", "pílio"),
e(yg, "pinea", "pínea"),
e(yg, "pineo", "píneo"),
e(yg, "pinus", "pínus"),
e(yg, "piono", "píono"),
e(yg, "pions", "píons"),
e(yg, "piper", "píper"),
e(yg, "piqua", "píqua"),
e(yg, "pirea", "pírea"),
e(yg, "pirio", "pírio"),
e(yg, "pisea", "písea"),
e(yg, "piseo", "píseo"),
e(yg, "pisin", "písin"),
e(yg, "pitia", "pítia"),
e(yg, "pitio", "pítio"),
e(yg, "pitis", "pítis"),
e(yg, "piton", "píton"),
e(yg, "pixis", "píxis"),
e(yg, "podex", "pódex"),
e(yg, "podio", "pódio"),
e(yg, "podon", "pódon"),
e(yg, "pogea", "pógea"),
e(yg, "polen", "pólen"),
e(yg, "polex", "pólex"),
e(yg, "polio", "pólio"),
e(yg, "polis", "pólis"),
e(yg, "polux", "pólux"),
e(yg, "porio", "pório"),
e(yg, "potea", "pótea"),
e(yg, "potia", "pótia"),
e(yg, "povoa", "póvoa"),
e(yg, "ponei", "pônei"),
e(yg, "pubis", "púbis"),
e(yg, "pugil", "púgil"),
e(yg, "pulex", "púlex"),
e(yg, "quale", "qualé"),
e(yg, "quaro", "quaró"),
e(yg, "quata", "quatá"),
e(yg, "quece", "quecé"),
e(yg, "quere", "querê"),
e(yg, "quice", "quicé"),
e(yg, "quipa", "quipá"),
e(yg, "quipe", "quipé"),
e(yg, "quiui", "quiuí"),
e(yg, "quixo", "quixó"),
e(yg, "quias", "quiás"),
e(yg, "quico", "quiço"),
e(yg, "quica", "quiçá"),
e(yg, "quies", "quiês"),
e(yg, "quali", "quáli"),
e(yg, "quepi", "quépi"),
e(yg, "rabea", "rabeá"),
e(yg, "rabao", "rabão"),
e(yg, "racau", "racaú"),
e(yg, "racea", "raceá"),
e(yg, "radao", "radão"),
e(yg, "raffa", "raffá"),
e(yg, "ragla", "raglã"),
e(yg, "raivo", "raivó"),
e(yg, "raiao", "raião"),
e(yg, "rajao", "rajão"),
e(yg, "ralea", "raleá"),
e(yg, "ralao", "ralão"),
e(yg, "ramea", "rameá"),
e(yg, "ranfa", "ranfá"),
e(yg, "ranco", "ranço"),
e(yg, "rapao", "rapão"),
e(yg, "rarea", "rareá"),
e(yg, "rasao", "rasão"),
e(yg, "ratea", "rateá"),
e(yg, "ratao", "ratão"),
e(yg, "rauda", "raudã"),
e(yg, "razao", "razão"),
e(yg, "racas", "raças"),
e(yg, "racoa", "raçoa"),
e(yg, "racoe", "raçoe"),
e(yg, "racoo", "raçoo"),
e(yg, "racor", "raçor"),
e(yg, "racao", "ração"),
e(yg, "raita", "raíta"),
e(yg, "reama", "reamá"),
e(yg, "reave", "reavê"),
e(yg, "reaca", "reaça"),
e(yg, "rebem", "rebém"),
e(yg, "recai", "recaí"),
e(yg, "recea", "receá"),
e(yg, "recha", "rechã"),
e(yg, "recho", "rechô"),
e(yg, "recao", "recão"),
e(yg, "recem", "recém"),
e(yg, "redas", "redás"),
e(yg, "redao", "redão"),
e(yg, "redem", "redém"),
e(yg, "refem", "refém"),
e(yg, "regao", "regão"),
e(yg, "reivo", "reivó"),
e(yg, "rejao", "rejão"),
e(yg, "relao", "relão"),
e(yg, "reles", "relês"),
e(yg, "remea", "remeá"),
e(yg, "remoe", "remoê"),
e(yg, "remoi", "remoí"),
e(yg, "remoi", "remói"),
e(yg, "renao", "renão"),
e(yg, "repos", "repôs"),
e(yg, "repoe", "repõe"),
e(yg, "reriu", "reriú"),
e(yg, "resga", "resgá"),
e(yg, "retea", "reteá"),
e(yg, "retem", "retém"),
e(yg, "retem", "retêm"),
e(yg, "reusa", "reusá"),
e(yg, "revem", "revém"),
e(yg, "reves", "revés"),
e(yg, "revem", "revêm"),
e(yg, "reves", "revês"),
e(yg, "rezao", "rezão"),
e(yg, "recas", "reças"),
e(yg, "reina", "reína"),
e(yg, "reuna", "reúna"),
e(yg, "reune", "reúne"),
e(yg, "reuno", "reúno"),
e(yg, "reuso", "reúso"),
e(yg, "ribos", "ribós"),
e(yg, "ricao", "ricão"),
e(yg, "ridao", "ridão"),
e(yg, "ridos", "ridós"),
e(yg, "rifla", "riflá"),
e(yg, "rifao", "rifão"),
e(yg, "rijao", "rijão"),
e(yg, "rinfa", "rinfã"),
e(yg, "rinca", "rinça"),
e(yg, "ripao", "ripão"),
e(yg, "riras", "rirás"),
e(yg, "rirao", "rirão"),
e(yg, "risao", "risão"),
e(yg, "risas", "risãs"),
e(yg, "ritao", "ritão"),
e(yg, "ricai", "riçai"),
e(yg, "ricam", "riçam"),
e(yg, "ricar", "riçar"),
e(yg, "ricol", "riçol"),
e(yg, "ricou", "riçou"),
e(yg, "riuta", "riúta"),
e(yg, "robos", "robôs"),
e(yg, "rocla", "roclá"),
e(yg, "roclo", "rocló"),
e(yg, "rocao", "rocão"),
e(yg, "rocos", "rocós"),
e(yg, "rodea", "rodeá"),
e(yg, "rodao", "rodão"),
e(yg, "roera", "roerá"),
e(yg, "rojao", "rojão"),
e(yg, "rolao", "rolão"),
e(yg, "romao", "romão"),
e(yg, "romas", "romãs"),
e(yg, "rondo", "rondó"),
e(yg, "rongo", "rongó"),
e(yg, "ronto", "rontó"),
e(yg, "rosao", "rosão"),
e(yg, "rotea", "roteá"),
e(yg, "roxea", "roxeá"),
e(yg, "rocai", "roçai"),
e(yg, "rocam", "roçam"),
e(yg, "rocar", "roçar"),
e(yg, "rocas", "roças"),
e(yg, "rocou", "roçou"),
e(yg, "roiam", "roíam"),
e(yg, "roias", "roías"),
e(yg, "roida", "roída"),
e(yg, "roido", "roído"),
e(yg, "ruaca", "ruaça"),
e(yg, "rubas", "rubás"),
e(yg, "rubao", "rubão"),
e(yg, "rudao", "rudão"),
e(yg, "rufao", "rufão"),
e(yg, "ruira", "ruirá"),
e(yg, "rulha", "rulhá"),
e(yg, "rumia", "rumiá"),
e(yg, "runco", "runcó"),
e(yg, "runfa", "runfá"),
e(yg, "runga", "rungã"),
e(yg, "runha", "runhá"),
e(yg, "runle", "runlé"),
e(yg, "runto", "runtó"),
e(yg, "rucai", "ruçai"),
e(yg, "rucam", "ruçam"),
e(yg, "rucar", "ruçar"),
e(yg, "rucas", "ruças"),
e(yg, "rucou", "ruçou"),
e(yg, "ruiam", "ruíam"),
e(yg, "ruias", "ruías"),
e(yg, "ruida", "ruída"),
e(yg, "ruido", "ruído"),
e(yg, "ruina", "ruína"),
e(yg, "ruira", "ruíra"),
e(yg, "ruoes", "ruões"),
e(yg, "rabia", "rábia"),
e(yg, "racio", "rácio"),
e(yg, "radio", "rádio"),
e(yg, "radom", "rádom"),
e(yg, "radon", "rádon"),
e(yg, "rafia", "ráfia"),
e(yg, "ragio", "rágio"),
e(yg, "rapia", "rápia"),
e(yg, "raqui", "ráqui"),
e(yg, "ratus", "rátus"),
e(yg, "rameo", "râmeo"),
e(yg, "rebus", "rébus"),
e(yg, "recia", "récia"),
e(yg, "recio", "récio"),
e(yg, "recua", "récua"),
e(yg, "redea", "rédea"),
e(yg, "redia", "rédia"),
e(yg, "regia", "régia"),
e(yg, "regie", "régie"),
e(yg, "regio", "régio"),
e(yg, "regua", "régua"),
e(yg, "repia", "répia"),
e(yg, "revoa", "révoa"),
e(yg, "rexia", "réxia"),
e(yg, "renio", "rênio"),
e(yg, "riade", "ríade"),
e(yg, "ricia", "rícia"),
e(yg, "ricio", "rício"),
e(yg, "rieis", "ríeis"),
e(yg, "rigel", "rígel"),
e(yg, "rigia", "rígia"),
e(yg, "rigio", "rígio"),
e(yg, "rimel", "rímel"),
e(yg, "rinia", "rínia"),
e(yg, "rinio", "rínio"),
e(yg, "ripio", "rípio"),
e(yg, "ritio", "rítio"),
e(yg, "riton", "ríton"),
e(yg, "rivea", "rívea"),
e(yg, "rober", "róber"),
e(yg, "robia", "róbia"),
e(yg, "robor", "róbor"),
e(yg, "robur", "róbur"),
e(yg, "rodeo", "ródeo"),
e(yg, "rodio", "ródio"),
e(yg, "ropia", "rópia"),
e(yg, "rosea", "rósea"),
e(yg, "roseo", "róseo"),
e(yg, "rosia", "rósia"),
e(yg, "rosio", "rósio"),
e(yg, "rotia", "rótia"),
e(yg, "rubea", "rúbea"),
e(yg, "rubeo", "rúbeo"),
e(yg, "rubia", "rúbia"),
e(yg, "rubio", "rúbio"),
e(yg, "rufio", "rúfio"),
e(yg, "rugbi", "rúgbi"),
e(yg, "rugio", "rúgio"),
e(yg, "rumen", "rúmen"),
e(yg, "rumex", "rúmex"),
e(yg, "rutea", "rútea"),
e(yg, "sabia", "sabiá"),
e(yg, "sabiu", "sabiú"),
e(yg, "sabas", "sabás"),
e(yg, "sabao", "sabão"),
e(yg, "sacai", "sacaí"),
e(yg, "sache", "sachê"),
e(yg, "sacue", "sacuê"),
e(yg, "sacao", "sacão"),
e(yg, "sadra", "sadrá"),
e(yg, "sadao", "sadão"),
e(yg, "safao", "safão"),
e(yg, "sagua", "saguá"),
e(yg, "sagao", "sagão"),
e(yg, "saije", "saijé"),
e(yg, "saine", "sainé"),
e(yg, "saipe", "saipé"),
e(yg, "saira", "sairá"),
e(yg, "saire", "sairé"),
e(yg, "saiva", "saivá"),
e(yg, "saixe", "saixê"),
e(yg, "saiao", "saião"),
e(yg, "salha", "salhá"),
e(yg, "salao", "salão"),
e(yg, "salca", "salça"),
e(yg, "salem", "salém"),
e(yg, "sampe", "sampé"),
e(yg, "samao", "samão"),
e(yg, "sanda", "sandá"),
e(yg, "sanea", "saneá"),
e(yg, "sante", "santé"),
e(yg, "sapea", "sapeá"),
e(yg, "sapua", "sapuá"),
e(yg, "sapao", "sapão"),
e(yg, "sarne", "sarné"),
e(yg, "saroe", "saroé"),
e(yg, "sarua", "saruá"),
e(yg, "sarue", "saruê"),
e(yg, "sarao", "sarão"),
e(yg, "sarca", "sarça"),
e(yg, "satao", "satão"),
e(yg, "satas", "satãs"),
e(yg, "sauda", "saudá"),
e(yg, "sauia", "sauiá"),
e(yg, "saupe", "saupé"),
e(yg, "saura", "saurá"),
e(yg, "sauas", "sauás"),
e(yg, "sauis", "sauís"),
e(yg, "savia", "saviá"),
e(yg, "saxao", "saxão"),
e(yg, "saxas", "saxãs"),
e(yg, "sazoa", "sazoá"),
e(yg, "sazao", "sazão"),
e(yg, "saeis", "saéis"),
e(yg, "saiam", "saíam"),
e(yg, "saias", "saías"),
e(yg, "saico", "saíco"),
e(yg, "saida", "saída"),
e(yg, "saido", "saído"),
e(yg, "saimo", "saímo"),
e(yg, "saira", "saíra"),
e(yg, "saita", "saíta"),
e(yg, "sauba", "saúba"),
e(yg, "sauco", "saúco"),
e(yg, "sauda", "saúda"),
e(yg, "saude", "saúde"),
e(yg, "saudo", "saúdo"),
e(yg, "sauva", "saúva"),
e(yg, "scene", "scène"),
e(yg, "sedea", "sedeá"),
e(yg, "sedao", "sedão"),
e(yg, "sedem", "sedém"),
e(yg, "segao", "segão"),
e(yg, "seica", "seiça"),
e(yg, "selao", "selão"),
e(yg, "sembe", "sembê"),
e(yg, "senao", "senão"),
e(yg, "seriu", "seriú"),
e(yg, "serta", "sertã"),
e(yg, "seras", "serás"),
e(yg, "serao", "serão"),
e(yg, "seros", "serós"),
e(yg, "setea", "seteá"),
e(yg, "sexua", "sexuá"),
e(yg, "sezoa", "sezoá"),
e(yg, "sezao", "sezão"),
e(yg, "secao", "seção"),
e(yg, "sidao", "sidão"),
e(yg, "sifla", "siflá"),
e(yg, "sifao", "sifão"),
e(yg, "sigmo", "sigmó"),
e(yg, "simao", "simão"),
e(yg, "sinha", "sinhá"),
e(yg, "sinho", "sinhô"),
e(yg, "sinua", "sinuá"),
e(yg, "sinxo", "sinxó"),
e(yg, "sinao", "sinão"),
e(yg, "siriu", "siriú"),
e(yg, "sirlo", "sirló"),
e(yg, "sisso", "sissó"),
e(yg, "sisao", "sisão"),
e(yg, "sivao", "sivão"),
e(yg, "sioes", "siões"),
e(yg, "siuba", "siúba"),
e(yg, "soara", "soará"),
e(yg, "sobpe", "sobpé"),
e(yg, "sobpo", "sobpô"),
e(yg, "socoi", "socoí"),
e(yg, "socao", "socão"),
e(yg, "sofre", "sofrê"),
e(yg, "sofas", "sofás"),
e(yg, "sogua", "soguá"),
e(yg, "solao", "solão"),
e(yg, "somie", "somiê"),
e(yg, "sompa", "sompá"),
e(yg, "sopea", "sopeá"),
e(yg, "sopia", "sopiá"),
e(yg, "sopao", "sopão"),
e(yg, "sopes", "sopés"),
e(yg, "sorea", "soreá"),
e(yg, "sorca", "sorça"),
e(yg, "sotaa", "sotaã"),
e(yg, "souta", "soutá"),
e(yg, "souas", "souás"),
e(yg, "soveu", "sovéu"),
e(yg, "soiam", "soíam"),
e(yg, "soias", "soías"),
e(yg, "soida", "soída"),
e(yg, "soido", "soído"),
e(yg, "soima", "soíma"),
e(yg, "sooes", "soões"),
e(yg, "suara", "suará"),
e(yg, "suaco", "suaço"),
e(yg, "suacu", "suaçu"),
e(yg, "subpo", "subpô"),
e(yg, "sudao", "sudão"),
e(yg, "sufla", "suflá"),
e(yg, "sufle", "suflê"),
e(yg, "sufas", "sufás"),
e(yg, "suina", "suiná"),
e(yg, "sujao", "sujão"),
e(yg, "sulao", "sulão"),
e(yg, "sumes", "sumés"),
e(yg, "supos", "supôs"),
e(yg, "supoe", "supõe"),
e(yg, "surui", "suruí"),
e(yg, "suras", "surás"),
e(yg, "surca", "surça"),
e(yg, "susao", "susão"),
e(yg, "susas", "susãs"),
e(yg, "sutia", "sutiã"),
e(yg, "suvao", "suvão"),
e(yg, "suari", "suári"),
e(yg, "sucao", "sução"),
e(yg, "suida", "suída"),
e(yg, "suino", "suíno"),
e(yg, "suita", "suíta"),
e(yg, "suite", "suíte"),
e(yg, "suica", "suíça"),
e(yg, "suico", "suíço"),
e(yg, "suomi", "suômi"),
e(yg, "suoes", "suões"),
e(yg, "sabio", "sábio"),
e(yg, "sacri", "sácri"),
e(yg, "safea", "sáfea"),
e(yg, "safeo", "sáfeo"),
e(yg, "safia", "sáfia"),
e(yg, "sagia", "ságia"),
e(yg, "sagio", "ságio"),
e(yg, "salia", "sália"),
e(yg, "salio", "sálio"),
e(yg, "salix", "sálix"),
e(yg, "sapia", "sápia"),
e(yg, "sapio", "sápio"),
e(yg, "savel", "sável"),
e(yg, "saxea", "sáxea"),
e(yg, "saxeo", "sáxeo"),
e(yg, "samea", "sâmea"),
e(yg, "samia", "sâmia"),
e(yg, "samio", "sâmio"),
e(yg, "sandi", "sândi"),
e(yg, "sanie", "sânie"),
e(yg, "sanio", "sânio"),
e(yg, "secia", "sécia"),
e(yg, "secio", "sécio"),
e(yg, "secua", "sécua"),
e(yg, "sedia", "sédia"),
e(yg, "selio", "sélio"),
e(yg, "sepia", "sépia"),
e(yg, "sepio", "sépio"),
e(yg, "sequi", "séqui"),
e(yg, "serie", "série"),
e(yg, "serio", "sério"),
e(yg, "serum", "sérum"),
e(yg, "sesea", "sésea"),
e(yg, "sesia", "sésia"),
e(yg, "seter", "séter"),
e(yg, "semea", "sêmea"),
e(yg, "semen", "sêmen"),
e(yg, "semis", "sêmis"),
e(yg, "senio", "sênio"),
e(yg, "sicio", "sício"),
e(yg, "sicon", "sícon"),
e(yg, "sidea", "sídea"),
e(yg, "sideo", "sídeo"),
e(yg, "sifia", "sífia"),
e(yg, "siler", "síler"),
e(yg, "silex", "sílex"),
e(yg, "silis", "sílis"),
e(yg, "simel", "símel"),
e(yg, "simia", "símia"),
e(yg, "simil", "símil"),
e(yg, "simio", "símio"),
e(yg, "sinus", "sínus"),
e(yg, "sirex", "sírex"),
e(yg, "siria", "síria"),
e(yg, "sirio", "sírio"),
e(yg, "sitio", "sítio"),
e(yg, "sobio", "sóbio"),
e(yg, "socia", "sócia"),
e(yg, "socio", "sócio"),
e(yg, "sodio", "sódio"),
e(yg, "solea", "sólea"),
e(yg, "soleo", "sóleo"),
e(yg, "solio", "sólio"),
e(yg, "sorex", "sórex"),
e(yg, "soria", "sória"),
e(yg, "sosia", "sósia"),
e(yg, "soter", "sóter"),
e(yg, "sotao", "sótão"),
e(yg, "suber", "súber"),
e(yg, "sucia", "súcia"),
e(yg, "sucio", "súcio"),
e(yg, "sumea", "súmea"),
e(yg, "suria", "súria"),
e(yg, "surio", "súrio"),
e(yg, "susia", "súsia"),
e(yg, "susio", "súsio"),
e(yg, "taaca", "taacã"),
e(yg, "tabao", "tabão"),
e(yg, "tabos", "tabós"),
e(yg, "tacau", "tacaú"),
e(yg, "tacua", "tacuá"),
e(yg, "tacao", "tacão"),
e(yg, "tafia", "tafiá"),
e(yg, "tagua", "taguá"),
e(yg, "taifo", "taifó"),
e(yg, "taipo", "taipó"),
e(yg, "taias", "taiás"),
e(yg, "tajas", "tajás"),
e(yg, "talao", "talão"),
e(yg, "tamao", "tamão"),
e(yg, "tanca", "tancá"),
e(yg, "tanta", "tantã"),
e(yg, "tapea", "tapeá"),
e(yg, "tapia", "tapiá"),
e(yg, "tapii", "tapií"),
e(yg, "tapiu", "tapiú"),
e(yg, "tapoa", "tapoã"),
e(yg, "tapao", "tapão"),
e(yg, "tarea", "tareá"),
e(yg, "tarta", "tartã"),
e(yg, "tarao", "tarão"),
e(yg, "taros", "tarós"),
e(yg, "tasga", "tasgá"),
e(yg, "tatai", "tataí"),
e(yg, "tatea", "tateá"),
e(yg, "tatui", "tatuí"),
e(yg, "tatze", "tatzé"),
e(yg, "tatas", "tatás"),
e(yg, "tauna", "tauná"),
e(yg, "tauas", "tauás"),
e(yg, "taues", "taués"),
e(yg, "tavua", "tavuá"),
e(yg, "tavao", "tavão"),
e(yg, "tacas", "taças"),
e(yg, "taeis", "taéis"),
e(yg, "tauba", "taúba"),
e(yg, "tauva", "taúva"),
e(yg, "tchas", "tchãs"),
e(yg, "teaca", "teaça"),
e(yg, "teacu", "teaçu"),
e(yg, "tecos", "tecós"),
e(yg, "tedeu", "tedéu"),
e(yg, "tefla", "teflã"),
e(yg, "tegao", "tegão"),
e(yg, "teiro", "teiró"),
e(yg, "teite", "teité"),
e(yg, "teius", "teiús"),
e(yg, "telao", "telão"),
e(yg, "tembe", "tembé"),
e(yg, "temne", "temné"),
e(yg, "temao", "temão"),
e(yg, "teras", "terás"),
e(yg, "terao", "terão"),
e(yg, "terca", "terça"),
e(yg, "terco", "terço"),
e(yg, "terem", "terém"),
e(yg, "tesca", "tescã"),
e(yg, "tesao", "tesão"),
e(yg, "teteu", "tetéu"),
e(yg, "teuta", "teutã"),
e(yg, "tevas", "tevás"),
e(yg, "teves", "tevês"),
e(yg, "tecam", "teçam"),
e(yg, "tecas", "teças"),
e(yg, "teina", "teína"),
e(yg, "teuba", "teúba"),
e(yg, "teuda", "teúda"),
e(yg, "teudo", "teúdo"),
e(yg, "tiace", "tiacé"),
e(yg, "tiata", "tiatã"),
e(yg, "ticoa", "ticoá"),
e(yg, "tidao", "tidão"),
e(yg, "tiete", "tietê"),
e(yg, "tifao", "tifão"),
e(yg, "tigao", "tigão"),
e(yg, "tijes", "tijés"),
e(yg, "timbe", "timbé"),
e(yg, "timbo", "timbó"),
e(yg, "timao", "timão"),
e(yg, "tinho", "tinhó"),
e(yg, "tinao", "tinão"),
e(yg, "tiote", "tiotê"),
e(yg, "tipio", "tipió"),
e(yg, "tipao", "tipão"),
e(yg, "tipoi", "tipói"),
e(yg, "tirao", "tirão"),
e(yg, "titao", "titão"),
e(yg, "titas", "titãs"),
e(yg, "tiupa", "tiupá"),
e(yg, "ticao", "tição"),
e(yg, "tiens", "tiéns"),
e(yg, "tioes", "tiões"),
e(yg, "tiuba", "tiúba"),
e(yg, "tiuva", "tiúva"),
e(yg, "tobos", "tobós"),
e(yg, "tocea", "toceá"),
e(yg, "toclo", "tocló"),
e(yg, "togoi", "togói"),
e(yg, "toica", "toiça"),
e(yg, "toico", "toiço"),
e(yg, "tolao", "tolão"),
e(yg, "tomao", "tomão"),
e(yg, "tonsa", "tonsá"),
e(yg, "topea", "topeá"),
e(yg, "torai", "toraí"),
e(yg, "torao", "torão"),
e(yg, "torca", "torça"),
e(yg, "torco", "torço"),
e(yg, "torem", "torém"),
e(yg, "tosao", "tosão"),
e(yg, "totos", "totós"),
e(yg, "trara", "trará"),
e(yg, "traca", "traça"),
e(yg, "traco", "traço"),
e(yg, "traia", "traía"),
e(yg, "trais", "traís"),
e(yg, "trele", "trelê"),
e(yg, "treno", "trenó"),
e(yg, "trico", "tricô"),
e(yg, "tripe", "tripé"),
e(yg, "tripo", "tripó"),
e(yg, "trisa", "trisá"),
e(yg, "trita", "tritá"),
e(yg, "triao", "trião"),
e(yg, "troca", "troça"),
e(yg, "troco", "troço"),
e(yg, "truca", "trucá"),
e(yg, "trupa", "trupá"),
e(yg, "truao", "truão"),
e(yg, "trois", "tróis"),
e(yg, "tuaia", "tuaiá"),
e(yg, "tucui", "tucuí"),
e(yg, "tucas", "tucás"),
e(yg, "tucao", "tucão"),
e(yg, "tufao", "tufão"),
e(yg, "tuius", "tuiús"),
e(yg, "tupas", "tupás"),
e(yg, "tupes", "tupés"),
e(yg, "turai", "turaí"),
e(yg, "turne", "turnê"),
e(yg, "tutea", "tuteá"),
e(yg, "tutao", "tutão"),
e(yg, "tuxas", "tuxás"),
e(yg, "tuira", "tuíra"),
e(yg, "tuite", "tuíte"),
e(yg, "tuito", "tuíto"),
e(yg, "tabua", "tábua"),
e(yg, "tacia", "tácia"),
e(yg, "tafio", "táfio"),
e(yg, "taler", "táler"),
e(yg, "talia", "tália"),
e(yg, "talio", "tálio"),
e(yg, "talus", "tálus"),
e(yg, "tasia", "tásia"),
e(yg, "tasio", "tásio"),
e(yg, "tatil", "tátil"),
e(yg, "tavoa", "távoa"),
e(yg, "taxis", "táxis"),
e(yg, "taxon", "táxon"),
e(yg, "tamia", "tâmia"),
e(yg, "tamil", "tâmil"),
e(yg, "tamul", "tâmul"),
e(yg, "tedio", "tédio"),
e(yg, "telia", "télia"),
e(yg, "telio", "télio"),
e(yg, "telos", "télos"),
e(yg, "tesio", "tésio"),
e(yg, "tesis", "tésis"),
e(yg, "tetia", "tétia"),
e(yg, "tetio", "tétio"),
e(yg, "tetis", "tétis"),
e(yg, "tetum", "tétum"),
e(yg, "temio", "têmio"),
e(yg, "tenea", "tênea"),
e(yg, "tenia", "tênia"),
e(yg, "tenio", "tênio"),
e(yg, "tenis", "tênis"),
e(yg, "tenue", "tênue"),
e(yg, "tiade", "tíade"),
e(yg, "tiaso", "tíaso"),
e(yg, "tibia", "tíbia"),
e(yg, "tibio", "tíbio"),
e(yg, "ticio", "tício"),
e(yg, "tidia", "tídia"),
e(yg, "tidio", "tídio"),
e(yg, "tifia", "tífia"),
e(yg, "tifis", "tífis"),
e(yg, "tilea", "tílea"),
e(yg, "tilia", "tília"),
e(yg, "tilio", "tílio"),
e(yg, "tiloa", "tíloa"),
e(yg, "timio", "tímio"),
e(yg, "tinea", "tínea"),
e(yg, "tiner", "tíner"),
e(yg, "tirea", "tírea"),
e(yg, "tirio", "tírio"),
e(yg, "tiris", "tíris"),
e(yg, "tocai", "tócai"),
e(yg, "tocia", "tócia"),
e(yg, "todea", "tódea"),
e(yg, "todis", "tódis"),
e(yg, "togua", "tógua"),
e(yg, "tolia", "tólia"),
e(yg, "topia", "tópia"),
e(yg, "torax", "tórax"),
e(yg, "toria", "tória"),
e(yg, "torio", "tório"),
e(yg, "toron", "tóron"),
e(yg, "tozia", "tózia"),
e(yg, "tomio", "tômio"),
e(yg, "tomix", "tômix"),
e(yg, "tonis", "tônis"),
e(yg, "tonus", "tônus"),
e(yg, "tuber", "túber"),
e(yg, "tujis", "tújis"),
e(yg, "tulia", "túlia"),
e(yg, "tulio", "túlio"),
e(yg, "tunel", "túnel"),
e(yg, "tunis", "túnis"),
e(yg, "tutsi", "tútsi"),
e(yg, "uabui", "uabuí"),
e(yg, "uacas", "uacás"),
e(yg, "uafes", "uafés"),
e(yg, "uaica", "uaicá"),
e(yg, "uaima", "uaimá"),
e(yg, "uaita", "uaitá"),
e(yg, "uaias", "uaiás"),
e(yg, "uaios", "uaiôs"),
e(yg, "ualas", "ualás"),
e(yg, "uambe", "uambé"),
e(yg, "uamas", "uamás"),
e(yg, "uamoi", "uamói"),
e(yg, "uanha", "uanhã"),
e(yg, "uania", "uaniá"),
e(yg, "uanas", "uanás"),
e(yg, "uapas", "uapás"),
e(yg, "uapes", "uapés"),
e(yg, "uaria", "uariá"),
e(yg, "uaras", "uarás"),
e(yg, "uaupe", "uaupé"),
e(yg, "uaura", "uaurá"),
e(yg, "uauas", "uauás"),
e(yg, "uaucu", "uauçu"),
e(yg, "uaxua", "uaxuá"),
e(yg, "uacai", "uaçaí"),
e(yg, "uaiba", "uaíba"),
e(yg, "ubata", "ubatã"),
e(yg, "ubele", "ubelê"),
e(yg, "ubera", "uberá"),
e(yg, "ubucu", "ubuçu"),
e(yg, "uchao", "uchão"),
e(yg, "ucima", "ucimá"),
e(yg, "ucues", "ucués"),
e(yg, "ucuis", "ucuís"),
e(yg, "ueras", "uerás"),
e(yg, "ufuas", "ufuás"),
e(yg, "uiape", "uiapé"),
e(yg, "uique", "uiqué"),
e(yg, "uiras", "uirás"),
e(yg, "ujara", "ujará"),
e(yg, "ulema", "ulemá"),
e(yg, "uladi", "uládi"),
e(yg, "umaua", "umauá"),
e(yg, "umboa", "umboá"),
e(yg, "umbes", "umbés"),
e(yg, "umoes", "umões"),
e(yg, "undai", "undaí"),
e(yg, "ungas", "ungás"),
e(yg, "unhao", "unhão"),
e(yg, "unira", "unirá"),
e(yg, "uniao", "união"),
e(yg, "unlos", "unlós"),
e(yg, "untue", "untué"),
e(yg, "uncas", "unças"),
e(yg, "uncao", "unção"),
e(yg, "upiao", "upião"),
e(yg, "urana", "uraná"),
e(yg, "uracu", "uraçu"),
e(yg, "uruba", "urubá"),
e(yg, "uruma", "urumã"),
e(yg, "urupa", "urupá"),
e(yg, "urupe", "urupê"),
e(yg, "usara", "usará"),
e(yg, "ustao", "ustão"),
e(yg, "uvaca", "uvaça"),
e(yg, "uvacu", "uvaçu"),
e(yg, "uagua", "uágua"),
e(yg, "uedis", "uédis"),
e(yg, "ueuas", "uéuas"),
e(yg, "uiste", "uíste"),
e(yg, "vacua", "vacuá"),
e(yg, "vacao", "vacão"),
e(yg, "vadea", "vadeá"),
e(yg, "vagea", "vageá"),
e(yg, "vagao", "vagão"),
e(yg, "vaita", "vaitá"),
e(yg, "vaixa", "vaixá"),
e(yg, "vaius", "vaiús"),
e(yg, "vajes", "vajés"),
e(yg, "valao", "valão"),
e(yg, "vance", "vancê"),
e(yg, "vapua", "vapuã"),
e(yg, "varea", "vareá"),
e(yg, "varao", "varão"),
e(yg, "vassa", "vassá"),
e(yg, "vasao", "vasão"),
e(yg, "vaura", "vaurá"),
e(yg, "vazao", "vazão"),
e(yg, "vecta", "vectã"),
e(yg, "venca", "vença"),
e(yg, "venco", "venço"),
e(yg, "verea", "vereá"),
e(yg, "verge", "vergê"),
e(yg, "veras", "verás"),
e(yg, "verao", "verão"),
e(yg, "verca", "verça"),
e(yg, "veros", "verós"),
e(yg, "vetao", "vetão"),
e(yg, "videa", "videá"),
e(yg, "vidao", "vidão"),
e(yg, "vilia", "viliá"),
e(yg, "vilao", "vilão"),
e(yg, "vinta", "vintã"),
e(yg, "viras", "virás"),
e(yg, "virao", "virão"),
e(yg, "viros", "virós"),
e(yg, "visca", "viscá"),
e(yg, "visga", "visgá"),
e(yg, "visao", "visão"),
e(yg, "vivio", "vivió"),
e(yg, "viviu", "viviú"),
e(yg, "vicai", "viçai"),
e(yg, "vicam", "viçam"),
e(yg, "vicar", "viçar"),
e(yg, "vicas", "viças"),
e(yg, "vicor", "viçor"),
e(yg, "vicou", "viçou"),
e(yg, "vioes", "viões"),
e(yg, "viuva", "viúva"),
e(yg, "viuve", "viúve"),
e(yg, "viuvo", "viúvo"),
e(yg, "vleme", "vlemê"),
e(yg, "voara", "voará"),
e(yg, "voaco", "voaço"),
e(yg, "voces", "vocês"),
e(yg, "volca", "volcá"),
e(yg, "vonce", "voncê"),
e(yg, "voras", "vorás"),
e(yg, "vosea", "voseá"),
e(yg, "vouve", "vouvê"),
e(yg, "vovos", "vovós"),
e(yg, "vozea", "vozeá"),
e(yg, "vozao", "vozão"),
e(yg, "vrija", "vrijá"),
e(yg, "vridi", "vrídi"),
e(yg, "vulta", "vultá"),
e(yg, "vunga", "vungá"),
e(yg, "vurma", "vurmá"),
e(yg, "vacea", "vácea"),
e(yg, "vaceo", "váceo"),
e(yg, "vacuo", "vácuo"),
e(yg, "vaeas", "váeas"),
e(yg, "vagil", "vágil"),
e(yg, "valea", "válea"),
e(yg, "valio", "válio"),
e(yg, "valis", "vális"),
e(yg, "varia", "vária"),
e(yg, "vario", "vário"),
e(yg, "vatio", "vátio"),
e(yg, "vatua", "vátua"),
e(yg, "velea", "vélea"),
e(yg, "velia", "vélia"),
e(yg, "velum", "vélum"),
e(yg, "verio", "vério"),
e(yg, "venia", "vênia"),
e(yg, "venus", "vênus"),
e(yg, "vicia", "vícia"),
e(yg, "vicio", "vício"),
e(yg, "vicoa", "vícoa"),
e(yg, "video", "vídeo"),
e(yg, "vidia", "vídia"),
e(yg, "vidua", "vídua"),
e(yg, "vieis", "víeis"),
e(yg, "vigil", "vígil"),
e(yg, "vimea", "vímea"),
e(yg, "vinea", "vínea"),
e(yg, "vineo", "víneo"),
e(yg, "virea", "vírea"),
e(yg, "vireo", "víreo"),
e(yg, "virus", "vírus"),
e(yg, "vitex", "vítex"),
e(yg, "vitis", "vítis"),
e(yg, "vitor", "vítor"),
e(yg, "vobis", "vóbis"),
e(yg, "volei", "vôlei"),
e(yg, "vomer", "vômer"),
e(yg, "xabao", "xabão"),
e(yg, "xabeu", "xabéu"),
e(yg, "xajas", "xajás"),
e(yg, "xamba", "xambá"),
e(yg, "xango", "xangô"),
e(yg, "xanta", "xantá"),
e(yg, "xaoro", "xaorô"),
e(yg, "xaras", "xarás"),
e(yg, "xarem", "xarém"),
e(yg, "xareu", "xaréu"),
e(yg, "xauas", "xauás"),
e(yg, "xerem", "xerém"),
e(yg, "xeres", "xerés"),
e(yg, "xevas", "xevás"),
e(yg, "xexes", "xexés"),
e(yg, "xexeu", "xexéu"),
e(yg, "ximbe", "ximbé"),
e(yg, "ximao", "ximão"),
e(yg, "xinto", "xintó"),
e(yg, "xiros", "xirós"),
e(yg, "xixas", "xixás"),
e(yg, "xicas", "xiças"),
e(yg, "xocos", "xocós"),
e(yg, "xodos", "xodós"),
e(yg, "xuate", "xuatê"),
e(yg, "xenon", "xénon"),
e(yg, "xenia", "xênia"),
e(yg, "xenio", "xênio"),
e(yg, "xifio", "xífio"),
e(yg, "xilon", "xílon"),
e(yg, "yogas", "yôgas"),
e(yg, "zacai", "zacaí"),
e(yg, "zagao", "zagão"),
e(yg, "zambe", "zambê"),
e(yg, "zarao", "zarão"),
e(yg, "zares", "zarés"),
e(yg, "zonea", "zoneá"),
e(yg, "zorna", "zornã"),
e(yg, "zorta", "zortá"),
e(yg, "zuela", "zuelá"),
e(yg, "zuira", "zuirá"),
e(yg, "zuruo", "zuruó"),
e(yg, "zuiam", "zuíam"),
e(yg, "zuias", "zuías"),
e(yg, "zuida", "zuída"),
e(yg, "zuido", "zuído"),
e(yg, "zamia", "zâmia"),
e(yg, "zaibo", "zãibo"),
e(yg, "zinia", "zínia"),
e(yg, "ziper", "zíper"),
e(yg, "abeca", "àbeça"),
e(yg, "abaco", "ábaco"),
e(yg, "abaro", "ábaro"),
e(yg, "abato", "ábato"),
e(yg, "abavo", "ábavo"),
e(yg, "abias", "ábias"),
e(yg, "abies", "ábies"),
e(yg, "abiga", "ábiga"),
e(yg, "abrus", "ábrus"),
e(yg, "absis", "ábsis"),
e(yg, "absus", "ábsus"),
e(yg, "acade", "ácade"),
e(yg, "acano", "ácano"),
e(yg, "acare", "ácare"),
e(yg, "acaro", "ácaro"),
e(yg, "acave", "ácave"),
e(yg, "acavo", "ácavo"),
e(yg, "acero", "ácero"),
e(yg, "acias", "ácias"),
e(yg, "acido", "ácido"),
e(yg, "acies", "ácies"),
e(yg, "acina", "ácina"),
e(yg, "acino", "ácino"),
e(yg, "acios", "ácios"),
e(yg, "acipe", "ácipe"),
e(yg, "aclis", "áclis"),
e(yg, "acnea", "ácnea"),
e(yg, "acnua", "ácnua"),
e(yg, "acome", "ácome"),
e(yg, "acope", "ácope"),
e(yg, "acopo", "ácopo"),
e(yg, "acore", "ácore"),
e(yg, "acoro", "ácoro"),
e(yg, "acron", "ácron"),
e(yg, "actia", "áctia"),
e(yg, "actio", "áctio"),
e(yg, "adina", "ádina"),
e(yg, "adine", "ádine"),
e(yg, "adino", "ádino"),
e(yg, "adipe", "ádipe"),
e(yg, "adipo", "ádipo"),
e(yg, "adito", "ádito"),
e(yg, "afaca", "áfaca"),
e(yg, "afios", "áfios"),
e(yg, "afodo", "áfodo"),
e(yg, "afona", "áfona"),
e(yg, "afono", "áfono"),
e(yg, "agamo", "ágamo"),
e(yg, "agapa", "ágapa"),
e(yg, "agape", "ágape"),
e(yg, "agaro", "ágaro"),
e(yg, "agata", "ágata"),
e(yg, "agate", "ágate"),
e(yg, "ageis", "ágeis"),
e(yg, "agena", "ágena"),
e(yg, "ageno", "ágeno"),
e(yg, "agida", "ágida"),
e(yg, "agino", "ágino"),
e(yg, "agios", "ágios"),
e(yg, "aglia", "áglia"),
e(yg, "agmen", "ágmen"),
e(yg, "agnis", "ágnis"),
e(yg, "agnus", "ágnus"),
e(yg, "agolo", "ágolo"),
e(yg, "agona", "ágona"),
e(yg, "agono", "ágono"),
e(yg, "agria", "ágria"),
e(yg, "agrio", "ágrio"),
e(yg, "aguam", "águam"),
e(yg, "aguas", "águas"),
e(yg, "aguem", "águem"),
e(yg, "agues", "águes"),
e(yg, "aguia", "águia"),
e(yg, "alacr", "álacr"),
e(yg, "alalo", "álalo"),
e(yg, "alamo", "álamo"),
e(yg, "album", "álbum"),
e(yg, "alcea", "álcea"),
e(yg, "alcis", "álcis"),
e(yg, "aleas", "áleas"),
e(yg, "alemo", "álemo"),
e(yg, "aleos", "áleos"),
e(yg, "alhia", "álhia"),
e(yg, "aliba", "áliba"),
e(yg, "alibi", "álibi"),
e(yg, "alica", "álica"),
e(yg, "alico", "álico"),
e(yg, "alife", "álife"),
e(yg, "alime", "álime"),
e(yg, "alios", "álios"),
e(yg, "alita", "álita"),
e(yg, "alofo", "álofo"),
e(yg, "alogo", "álogo"),
e(yg, "alpea", "álpea"),
e(yg, "alqua", "álqua"),
e(yg, "alula", "álula"),
e(yg, "alveo", "álveo"),
e(yg, "apage", "ápage"),
e(yg, "apeta", "ápeta"),
e(yg, "apeto", "ápeto"),
e(yg, "apice", "ápice"),
e(yg, "apida", "ápida"),
e(yg, "apios", "ápios"),
e(yg, "apira", "ápira"),
e(yg, "apiro", "ápiro"),
e(yg, "apoca", "ápoca"),
e(yg, "apode", "ápode"),
e(yg, "apodo", "ápodo"),
e(yg, "apona", "ápona"),
e(yg, "apone", "ápone"),
e(yg, "apono", "ápono"),
e(yg, "aporo", "áporo"),
e(yg, "apoto", "ápoto"),
e(yg, "apula", "ápula"),
e(yg, "apulo", "ápulo"),
e(yg, "aquea", "áquea"),
e(yg, "aqueo", "áqueo"),
e(yg, "arabe", "árabe"),
e(yg, "arabo", "árabo"),
e(yg, "arbia", "árbia"),
e(yg, "arbio", "árbio"),
e(yg, "arcio", "árcio"),
e(yg, "ardea", "árdea"),
e(yg, "ardua", "árdua"),
e(yg, "arduo", "árduo"),
e(yg, "areas", "áreas"),
e(yg, "argio", "árgio"),
e(yg, "argon", "árgon"),
e(yg, "arias", "árias"),
e(yg, "arico", "árico"),
e(yg, "arida", "árida"),
e(yg, "arido", "árido"),
e(yg, "aries", "áries"),
e(yg, "arsis", "ársis"),
e(yg, "arula", "árula"),
e(yg, "aruns", "áruns"),
e(yg, "asaro", "ásaro"),
e(yg, "ascia", "áscia"),
e(yg, "ascio", "áscio"),
e(yg, "ascon", "áscon"),
e(yg, "ascua", "áscua"),
e(yg, "asias", "ásias"),
e(yg, "asios", "ásios"),
e(yg, "asoas", "ásoas"),
e(yg, "asoos", "ásoos"),
e(yg, "aspis", "áspis"),
e(yg, "aster", "áster"),
e(yg, "astur", "ástur"),
e(yg, "atavo", "átavo"),
e(yg, "atele", "átele"),
e(yg, "atico", "ático"),
e(yg, "atila", "átila"),
e(yg, "atima", "átima"),
e(yg, "atimo", "átimo"),
e(yg, "atipo", "átipo"),
e(yg, "atomo", "átomo"),
e(yg, "atona", "átona"),
e(yg, "atono", "átono"),
e(yg, "atrio", "átrio"),
e(yg, "audio", "áudio"),
e(yg, "aulax", "áulax"),
e(yg, "aurea", "áurea"),
e(yg, "aureo", "áureo"),
e(yg, "aveis", "áveis"),
e(yg, "avida", "ávida"),
e(yg, "avido", "ávido"),
e(yg, "avila", "ávila"),
e(yg, "axeis", "áxeis"),
e(yg, "axica", "áxica"),
e(yg, "axico", "áxico"),
e(yg, "axilo", "áxilo"),
e(yg, "axona", "áxona"),
e(yg, "axone", "áxone"),
e(yg, "azeas", "ázeas"),
e(yg, "azeos", "ázeos"),
e(yg, "aziga", "áziga"),
e(yg, "azigo", "ázigo"),
e(yg, "azima", "ázima"),
e(yg, "azimo", "ázimo"),
e(yg, "amago", "âmago"),
e(yg, "ambar", "âmbar"),
e(yg, "amios", "âmios"),
e(yg, "amnio", "âmnio"),
e(yg, "angio", "ângio"),
e(yg, "animo", "ânimo"),
e(yg, "anion", "ânion"),
e(yg, "anodo", "ânodo"),
e(yg, "ansia", "ânsia"),
e(yg, "anulo", "ânulo"),
e(yg, "anuos", "ânuos"),
e(yg, "ebano", "ébano"),
e(yg, "ebeno", "ébeno"),
e(yg, "ebias", "ébias"),
e(yg, "eblis", "éblis"),
e(yg, "ebria", "ébria"),
e(yg, "ebrio", "ébrio"),
e(yg, "ebulo", "ébulo"),
e(yg, "ecana", "écana"),
e(yg, "ecano", "écano"),
e(yg, "ecica", "écica"),
e(yg, "ecico", "écico"),
e(yg, "ecope", "écope"),
e(yg, "ecran", "écran"),
e(yg, "ecula", "écula"),
e(yg, "eculo", "éculo"),
e(yg, "edalo", "édalo"),
e(yg, "edias", "édias"),
e(yg, "edica", "édica"),
e(yg, "edico", "édico"),
e(yg, "edipo", "édipo"),
e(yg, "eduos", "éduos"),
e(yg, "efeta", "éfeta"),
e(yg, "efira", "éfira"),
e(yg, "efiro", "éfiro"),
e(yg, "efode", "éfode"),
e(yg, "efodo", "éfodo"),
e(yg, "eforo", "éforo"),
e(yg, "egide", "égide"),
e(yg, "egrio", "égrio"),
e(yg, "eguas", "éguas"),
e(yg, "eguem", "éguem"),
e(yg, "elafo", "élafo"),
e(yg, "elate", "élate"),
e(yg, "elica", "élica"),
e(yg, "elico", "élico"),
e(yg, "elimo", "élimo"),
e(yg, "eneas", "éneas"),
e(yg, "eneos", "éneos"),
e(yg, "enula", "énula"),
e(yg, "epica", "épica"),
e(yg, "epico", "épico"),
e(yg, "epoca", "época"),
e(yg, "epula", "épula"),
e(yg, "epura", "épura"),
e(yg, "equio", "équio"),
e(yg, "equis", "équis"),
e(yg, "equos", "équos"),
e(yg, "equus", "équus"),
e(yg, "erana", "érana"),
e(yg, "erano", "érano"),
e(yg, "erbio", "érbio"),
e(yg, "ereas", "éreas"),
e(yg, "erebo", "érebo"),
e(yg, "ereis", "éreis"),
e(yg, "ereos", "éreos"),
e(yg, "ergio", "érgio"),
e(yg, "erias", "érias"),
e(yg, "erina", "érina"),
e(yg, "erion", "érion"),
e(yg, "esima", "ésima"),
e(yg, "esimo", "ésimo"),
e(yg, "esipo", "ésipo"),
e(yg, "esoce", "ésoce"),
e(yg, "essuo", "éssuo"),
e(yg, "ester", "éster"),
e(yg, "esula", "ésula"),
e(yg, "etego", "étego"),
e(yg, "etica", "ética"),
e(yg, "etico", "ético"),
e(yg, "etigo", "étigo"),
e(yg, "etimo", "étimo"),
e(yg, "evana", "évana"),
e(yg, "evano", "évano"),
e(yg, "eider", "êider"),
e(yg, "emero", "êmero"),
e(yg, "emese", "êmese"),
e(yg, "emica", "êmica"),
e(yg, "emico", "êmico"),
e(yg, "emida", "êmida"),
e(yg, "emide", "êmide"),
e(yg, "emulo", "êmulo"),
e(yg, "enica", "ênica"),
e(yg, "enico", "ênico"),
e(yg, "ensis", "ênsis"),
e(yg, "euria", "êuria"),
e(yg, "exaco", "êxaco"),
e(yg, "exito", "êxito"),
e(yg, "exodo", "êxodo"),
e(yg, "exuis", "êxuis"),
e(yg, "exule", "êxule"),
e(yg, "iamos", "íamos"),
e(yg, "ibice", "íbice"),
e(yg, "icaro", "ícaro"),
e(yg, "icios", "ícios"),
e(yg, "icone", "ícone"),
e(yg, "icono", "ícono"),
e(yg, "icore", "ícore"),
e(yg, "ictis", "íctis"),
e(yg, "ictus", "íctus"),
e(yg, "idias", "ídias"),
e(yg, "idola", "ídola"),
e(yg, "idolo", "ídolo"),
e(yg, "ignea", "ígnea"),
e(yg, "igneo", "ígneo"),
e(yg, "iguem", "íguem"),
e(yg, "igues", "ígues"),
e(yg, "ileon", "íleon"),
e(yg, "ileos", "íleos"),
e(yg, "ileus", "íleus"),
e(yg, "ilias", "ílias"),
e(yg, "ilice", "ílice"),
e(yg, "ilion", "ílion"),
e(yg, "ilios", "ílios"),
e(yg, "ilium", "ílium"),
e(yg, "impar", "ímpar"),
e(yg, "impia", "ímpia"),
e(yg, "impio", "ímpio"),
e(yg, "inaco", "ínaco"),
e(yg, "index", "índex"),
e(yg, "india", "índia"),
e(yg, "indio", "índio"),
e(yg, "indri", "índri"),
e(yg, "indua", "índua"),
e(yg, "ingea", "íngea"),
e(yg, "ingua", "íngua"),
e(yg, "inion", "ínion"),
e(yg, "inios", "ínios"),
e(yg, "inope", "ínope"),
e(yg, "insua", "ínsua"),
e(yg, "inuba", "ínuba"),
e(yg, "inubo", "ínubo"),
e(yg, "inula", "ínula"),
e(yg, "invia", "ínvia"),
e(yg, "invio", "ínvio"),
e(yg, "ipida", "ípida"),
e(yg, "irios", "írios"),
e(yg, "irpex", "írpex"),
e(yg, "isate", "ísate"),
e(yg, "isops", "ísops"),
e(yg, "itaco", "ítaco"),
e(yg, "italo", "ítalo"),
e(yg, "itame", "ítame"),
e(yg, "itamo", "ítamo"),
e(yg, "iteas", "íteas"),
e(yg, "itria", "ítria"),
e(yg, "itrio", "ítrio"),
e(yg, "ixalo", "íxalo"),
e(yg, "ixias", "íxias"),
e(yg, "obelo", "óbelo"),
e(yg, "obice", "óbice"),
e(yg, "obito", "óbito"),
e(yg, "obolo", "óbolo"),
e(yg, "obulo", "óbulo"),
e(yg, "obvio", "óbvio"),
e(yg, "ocimo", "ócimo"),
e(yg, "ocios", "ócios"),
e(yg, "ocrea", "ócrea"),
e(yg, "oculo", "óculo"),
e(yg, "odios", "ódios"),
e(yg, "ofrio", "ófrio"),
e(yg, "ofris", "ófris"),
e(yg, "oleos", "óleos"),
e(yg, "oleum", "óleum"),
e(yg, "omnia", "ómnia"),
e(yg, "opalo", "ópalo"),
e(yg, "opera", "ópera"),
e(yg, "opido", "ópido"),
e(yg, "opios", "ópios"),
e(yg, "orfia", "órfia"),
e(yg, "orfao", "órfão"),
e(yg, "orfas", "órfãs"),
e(yg, "orgio", "órgio"),
e(yg, "orgao", "órgão"),
e(yg, "orobo", "órobo"),
e(yg, "oscar", "óscar"),
e(yg, "osido", "ósido"),
e(yg, "osmio", "ósmio"),
e(yg, "ossea", "óssea"),
e(yg, "osseo", "ósseo"),
e(yg, "ostio", "óstio"),
e(yg, "otica", "ótica"),
e(yg, "otico", "ótico"),
e(yg, "otima", "ótima"),
e(yg, "otimo", "ótimo"),
e(yg, "ovalo", "óvalo"),
e(yg, "ovana", "óvana"),
e(yg, "ovano", "óvano"),
e(yg, "oveas", "óveas"),
e(yg, "oveos", "óveos"),
e(yg, "ovnis", "óvnis"),
e(yg, "ovulo", "óvulo"),
e(yg, "oxido", "óxido"),
e(yg, "omega", "ômega"),
e(yg, "ubere", "úbere"),
e(yg, "ubero", "úbero"),
e(yg, "ubias", "úbias"),
e(yg, "ubios", "úbios"),
e(yg, "umera", "úmera"),
e(yg, "umero", "úmero"),
e(yg, "umida", "úmida"),
e(yg, "umido", "úmido"),
e(yg, "uncia", "úncia"),
e(yg, "uncus", "úncus"),
e(yg, "ungue", "úngue"),
e(yg, "unica", "única"),
e(yg, "unico", "único"),
e(yg, "unsia", "únsia"),
e(yg, "uraco", "úraco"),
e(yg, "urase", "úrase"),
e(yg, "urcea", "úrcea"),
e(yg, "urceo", "úrceo"),
e(yg, "urica", "úrica"),
e(yg, "urico", "úrico"),
e(yg, "uropo", "úropo"),
e(yg, "usias", "úsias"),
e(yg, "usnea", "úsnea"),
e(yg, "ussua", "ússua"),
e(yg, "ustia", "ústia"),
e(yg, "uteis", "úteis"),
e(yg, "utero", "útero"),
e(yg, "uveas", "úveas"),
e(yg, "uvica", "úvica"),
e(yg, "uvico", "úvico"),
e(yg, "uvida", "úvida"),
e(yg, "uvido", "úvido"),
e(yg, "uvula", "úvula"),
yg), Sg = ["lugar", "vinda", "crime", "lenda", "átomo", "lares", "adega", "ágeis", "abada", "retro", "feixe", "bingo", "carga", "tubos", "cisne", "bater", "cílio", "reles", "sonar", "túlio", "capuz", "feira", "caspa", "preto", "tátil", "anais", "crise", "lápis", "tenor", "cafés", "nevar", "repor", "dupla", "pilar", "mexer", "fluir", "poços", "lente", "fauna", "trama", "grama", "regar", "pirar", "lazer", "reais", "baque", "cesto", "pavio", "vagão", "certa", "áureo", "caros", "mares", "ossos", "obras", "celta", "poção", "bruxa", "vivos", "feios", "usada", "vasos", "série", "brisa", "arcar", "bossa", "meigo", "viral", "forte", "malte", "bolso", "hinos", "tinto", "corja", "etnia", "órfão", "porém", "árdua", "ruína", "coral", "perda", "algas", "pelos", "andar", "fumar", "opção", "longa", "úmido", "vozes", "cabra", "símio", "vasta", "totem", "prole", "burra", "capaz", "gente", "renal", "menor", "leito", "potes", "amplo", "libra", "balas", "meias", "bolha", "comer", "vídeo", "lenta", "seção", "rosca", "daqui", "falso", "aliar", "pagam", "denso", "danos", "feroz", "áreas", "hindu", "selos", "pólen", "sódio", "elite", "nossa", "mercê", "lenha", "focar", "fixar", "telão", "valor", "fêmea", "óvulo", "ético", "ondas", "novos", "durar", "feias", "aérea", "vinte", "magna", "medos", "alçar", "altos", "pires", "blusa", "babar", "justo", "rente", "ponte", "orgia", "japão", "horta", "barba", "alvos", "barco", "sacos", "pavor", "seiva", "geral", "tipos", "axila", "atlas", "tanga", "joias", "miolo", "ambas", "secos", "areia", "lombo", "legal", "hotel", "verbo", "piano", "grego", "roçar", "lomba", "chalé", "ácido", "circo", "canal", "pombo", "fórum", "punho", "sopas", "cólon", "reter", "perua", "irmãs", "mambo", "nicho", "cação", "congo", "tosar", "cenas", "bruto", "menos", "estes", "horas", "ponto", "ameno", "parma", "afins", "galês", "dotar", "fibra", "bunda", "frade", "nozes", "dieta", "poema", "lento", "trenó", "fosso", "titia", "lesão", "suíno", "fonte", "dizer", "vício", "pinos", "vírus", "pedra", "lebre", "berço", "praxe", "débil", "quase", "visar", "pecar", "fraca", "exato", "densa", "bicos", "tropa", "podre", "ouvir", "setas", "fluxo", "penta", "farda", "malta", "frota", "ótica", "panda", "sogro", "turco", "tenso", "tocar", "ótimo", "prata", "topar", "treta", "cacau", "pardo", "gesso", "focos", "macio", "bruta", "mista", "carma", "cosmo", "loira", "chuva", "atroz", "carro", "bolos", "visão", "atual", "untar", "ciúme", "pesar", "laudo", "porre", "banir", "abril", "ideia", "flúor", "vagar", "união", "artes", "criar", "casar", "morar", "gerar", "advir", "tênue", "modos", "secar", "ninho", "casco", "jeito", "sagaz", "raiva", "magos", "medir", "monge", "fossa", "lorde", "claro", "aulas", "sacro", "limbo", "gorro", "trigo", "litro", "nulos", "morno", "furor", "modas", "haver", "óssea", "seios", "olhar", "senão", "única", "cedro", "lojas", "pagar", "musgo", "armar", "agudo", "trena", "vanda", "cetim", "almas", "pampa", "casca", "ampla", "faixa", "casal", "ainda", "ginga", "bambu", "idoso", "mapas", "zonas", "fútil", "pausa", "pudim", "fogão", "sabiá", "termo", "nível", "luvas", "lavar", "nomes", "vácuo", "russo", "mania", "bazar", "idosa", "birra", "damas", "terno", "águia", "nariz", "ricos", "valsa", "dosar", "tempo", "trevo", "táxis", "pesco", "anzol", "sexta", "bônus", "jogar", "vocês", "fator", "papel", "ações", "cavar", "coçar", "pedir", "ricas", "palco", "bolsa", "fruta", "sueco", "refém", "belas", "lados", "mamãe", "rever", "tarja", "praga", "cisto", "nisso", "tédio", "parda", "morna", "germe", "nasal", "irmão", "rugir", "busto", "anéis", "moela", "lagoa", "telha", "loiro", "signo", "genes", "calda", "diodo", "tetra", "puxão", "astro", "mágoa", "tumba", "ópera", "ganso", "trair", "vária", "pomba", "sismo", "pisar", "costa", "sadia", "clone", "larva", "cupim", "juros", "foice", "boato", "moura", "finas", "prosa", "acolá", "bravo", "peixe", "neném", "tensa", "barão", "taças", "gelar", "tosco", "tufão", "naves", "lixar", "colar", "pista", "trens", "corpo", "avião", "órgão", "vetar", "tórax", "canoa", "moral", "bacia", "treco", "mudar", "cento", "tribo", "falar", "unida", "anual", "épica", "grupo", "oxalá", "catar", "carpa", "gatas", "terça", "grana", "prato", "ontem", "minha", "certo", "melão", "algoz", "poder", "times", "outra", "garça", "louco", "ninja", "sogra", "grato", "chapa", "frias", "fatos", "adiar", "tábua", "rotas", "pular", "sótão", "pagos", "fungo", "relva", "gueto", "estar", "fobia", "bruxo", "gesto", "lilás", "picar", "praça", "perto", "névoa", "surdo", "vetor", "seara", "manhã", "preço", "polpa", "chato", "vazar", "farsa", "sabor", "gosma", "sósia", "parar", "crepe", "licor", "gatos", "irado", "sigla", "canil", "ápice", "feudo", "crase", "manto", "mosca", "filho", "cesta", "pilha", "corda", "matar", "adeus", "favor", "falsa", "útero", "polar", "faraó", "ídolo", "sigma", "deusa", "mimar", "gêmeo", "posse", "aluna", "álbum", "lindo", "adaga", "humor", "setor", "balde", "diabo", "roupa", "depor", "acaso", "rolos", "terço", "focal", "graça", "ritos", "âmago", "nação", "feita", "honra", "porca", "cervo", "todos", "penal", "banal", "canja", "duros", "ruiva", "ousar", "atuar", "óbvio", "pátio", "nobel", "cloro", "telas", "cofre", "touca", "fêmur", "lenço", "batom", "risos", "ósseo", "rumos", "rolha", "caras", "tecer", "negro", "girar", "bucha", "dunas", "cruel", "úteis", "dorso", "longo", "julho", "tinta", "torto", "perna", "verba", "sushi", "novas", "cegos", "cinta", "polir", "mover", "ambos", "lapso", "fugaz", "notar", "letal", "oeste", "plena", "ditos", "hiena", "galho", "cujos", "museu", "tutor", "pulga", "odiar", "época", "brasa", "visor", "surda", "nisto", "rezar", "domar", "surfe", "tanto", "turma", "coisa", "grega", "móvel", "votar", "hiato", "altar", "jogos", "calor", "fetal", "fotos", "frios", "netos", "basco", "dogma", "ligar", "ômega", "nunca", "fácil", "êxito", "barca", "sinal", "autos", "mitos", "bando", "amido", "bomba", "truco", "parvo", "motos", "gozar", "ursos", "tosca", "gemer", "dardo", "zerar", "palma", "zinco", "meios", "pegar", "altas", "leque", "matos", "virar", "invés", "polos", "treze", "fugir", "milho", "cinza", "mansa", "lince", "malas", "trupe", "cacho", "vulgo", "globo", "cetro", "âmbar", "chata", "pouca", "fiapo", "calma", "laços", "lobos", "garra", "dólar", "golpe", "safra", "tecno", "bicho", "erros", "coxas", "clave", "milha", "boate", "calar", "voraz", "juíza", "ralar", "reúso", "errar", "copas", "manta", "ração", "sarro", "bioma", "opala", "judeu", "magro", "amora", "cupom", "toada", "vilas", "loção", "dados", "super", "bocal", "tênis", "quota", "vital", "dócil", "dueto", "couro", "selim", "índia", "síria", "árduo", "culta", "euros", "doces", "selva", "olhos", "áudio", "linda", "pobre", "casos", "pônei", "antes", "nobre", "lição", "tripé", "pomar", "camas", "ímpio", "santo", "gávea", "mesas", "tripa", "gordo", "trapo", "terra", "ecoar", "ninfa", "rímel", "médio", "tesão", "sanar", "levar", "golfe", "usual", "moita", "lidos", "frear", "gênio", "vezes", "ardor", "folia", "bloco", "laico", "dedos", "metal", "marte", "cargo", "clima", "pódio", "goela", "fruto", "sarau", "cerne", "grata", "rolar", "arder", "ceder", "rombo", "leões", "persa", "rolim", "bacon", "braço", "harpa", "belos", "gases", "parir", "ponta", "ferir", "anjos", "leite", "senso", "exame", "nadar", "nuvem", "sabão", "viril", "cheia", "mesma", "êxodo", "toldo", "meros", "ratos", "ordem", "farpa", "truta", "mídia", "tocha", "verde", "servo", "dúzia", "sacar", "vôlei", "alado", "povos", "raras", "parco", "louça", "pisos", "bamba", "lidar", "furos", "gripe", "lagos", "graxa", "outro", "caqui", "campo", "árabe", "cópia", "menta", "males", "fixos", "optar", "haras", "igual", "arena", "donos", "carta", "redor", "banda", "pedal", "botão", "cacos", "tarso", "ótima", "sacra", "míope", "greve", "atrás", "caldo", "ramos", "assim", "avelã", "dublê", "maior", "feras", "clara", "jurar", "ciclo", "corar", "tonta", "palha", "meter", "juízo", "casta", "duque", "fuzuê", "raiar", "genro", "devir", "praia", "facão", "revés", "micro", "velha", "touro", "moída", "reler", "arroz", "votos", "balão", "mútua", "trono", "negar", "bares", "cabos", "impor", "calvo", "bebia", "zelar", "herói", "angra", "vinho", "vogal", "graus", "drama", "rádio", "pirão", "breve", "agora", "presa", "lerdo", "brega", "pizza", "vacas", "mesmo", "fraco", "valer", "bucal", "maçãs", "sujar", "padre", "teias", "dente", "tricô", "citar", "bulbo", "baita", "subir", "pinho", "ânimo", "prece", "fraga", "jarra", "fatal", "aguda", "xampu", "cueca", "pneus", "missa", "máfia", "linha", "supor", "fiada", "furar", "podar", "turno", "vulto", "túnel", "sanha", "poeta", "limão", "rampa", "vigor", "ânsia", "temor", "razão", "amada", "obter", "latas", "fisco", "tapar", "sorte", "gruta", "teses", "plebe", "corno", "lábia", "beato", "motor", "panos", "curar", "viver", "puxar", "ficar", "vinil", "enfim", "flora", "aroma", "calmo", "fofas", "torta", "prazo", "dever", "vapor", "mirim", "robôs", "finos", "vênus", "corvo", "único", "arame", "guiar", "usina", "sítio", "vazia", "vasto", "mural", "nudez", "pleno", "obeso", "tchau", "eixos", "muito", "molas", "final", "falir", "ervas", "cubos", "retas", "local", "fogos", "banjo", "fedor", "urnas", "jaula", "gerir", "linho", "geada", "lótus", "lírio", "fúria", "ostra", "ávido", "acesa", "salas", "bucho", "tango", "caída", "golfo", "aluno", "dores", "ótico", "salsa", "áries", "remar", "mogno", "polvo", "verme", "miojo", "aonde", "rosto", "ideal", "pompa", "tomar", "duplo", "quina", "urubu", "hábil", "expor", "algum", "ética", "régua", "velho", "redes", "frevo", "porco", "peões", "calva", "atriz", "lisos", "lutar", "rural", "lotar", "imune", "épico", "úmida", "ímpar", "muita", "doido", "jovem", "coeso", "mirar", "musas", "rival", "salmo", "rumor", "aspas", "beber", "nervo", "civil", "miúdo", "delta", "rimar", "bispo", "abade", "culto", "vilão", "vidas", "gotas", "letra", "latim", "credo", "ultra", "caçar", "bonés", "gambá", "sutil", "pudor", "pesos", "então", "ditar", "couve", "múmia", "metro", "esqui", "navio", "extra", "justa", "macia", "bocas", "lábio", "moeda", "placa", "noção", "fuçar", "cheio", "rosas", "achar", "magia", "arcos", "jejum", "socar", "divas", "caber", "aveia", "rasto", "varal", "manga", "santa", "beata", "sutiã", "todas", "fusão", "pinta", "guria", "páreo", "chave", "sutis", "cauda", "natal", "solar", "carne", "clero", "média", "saber", "piada", "senha", "caixa", "deter", "dique", "serva", "líder", "abrir", "raios", "naipe", "latão", "chefe", "vespa", "noite", "etapa", "raros", "clipe", "pluma", "talco", "rouca", "civis", "folha", "óxido", "cinto", "macro", "tonto", "boina", "gaita", "suave", "mútuo", "meiga", "sueca", "índio", "ritmo", "ombro", "texto", "muros", "macho", "aéreo", "conde", "sarda", "misto", "vazão", "rubro", "funil", "lousa", "quiçá", "rigor", "sadio", "disso", "farol", "saída", "longe", "radar", "gorda", "anões", "açude", "festa", "horto", "sujos", "índex", "fardo", "dicas", "picos", "pente", "junco", "salão", "sarna", "somar", "sexto", "patas", "motel", "caule", "tirar", "abono", "loura", "selar", "seita", "fases", "autor", "ducha", "óleos", "jegue", "besta", "bufão", "total", "prado", "féria", "temer", "sauna", "sucos", "clube", "hífen", "cinco", "sunga", "fosco", "palmo", "pouco", "gíria", "idade", "ícone", "doida", "comum", "rocha", "censo", "cárie", "punir", "massa", "burro", "frase", "major", "magra", "sócio", "copos", "mamar", "preta", "aliás", "balsa", "farra", "fosca", "ruivo", "infra", "facas", "ileso", "naval", "filha", "morta", "capim", "trufa", "areal", "tiros", "reger", "grade", "poros", "jarro", "posar", "desde", "fazer", "brava", "leigo", "ninar", "manso", "exata", "suíte", "torpe", "vosso", "pavão", "mundo", "quais", "veias", "forno", "tíbia", "junho", "haste", "veloz", "feliz", "meses", "homem", "botar", "rodar", "dedão", "norma", "unhas", "peste", "óscar", "sábio", "lunar", "sarar", "norte", "opaco", "acima", "febre", "bonde", "murro", "oásis", "zíper", "brejo", "assar", "sumir", "vocal", "rapaz", "vazio", "prumo", "galão", "zebra", "tigre", "árido", "sério"], kg = u(Sg);
try {
    for (kg.s(); !(wg = kg.n()).done; ) {
        var Og = wg.value;
        qg.add(Og)
    }
} catch (a) {
    kg.e(a)
} finally {
    kg.f()
}
var Lg = new Set("abcdefghijklmnopqrstuvwxyz")
  , Tg = {
    games: 0,
    wins: 0,
    curstreak: 0,
    avgtime: 0,
    mintime: 0,
    maxtime: 0,
    maxstreak: 0,
    histo: [0, 0, 0, 0, 0, 0]
}
  , Ig = {
    curday: -1,
    solution: null,
    normSolution: null,
    tries: [],
    invalids: [],
    curRow: -1,
    curTry: null,
    gameOver: 0,
    won: null,
    startTime: 0,
    endTime: 0
}
  , Ag = {
    highContrast: 0
};
function Pg() {
    var a = (new Date);
    return Math.floor((a - new Date(2022,0,30,0,0,0,0)) / 36e5)
}
function Rg(a, o) {
    var e, i = {}, r = u(a);
    try {
        for (r.s(); !(e = r.n()).done; ) {
            var s, t = e.value;
            i[t] = (null !== (s = i[t]) && void 0 !== s ? s : 0) + 1
        }
    } catch (a) {
        r.e(a)
    } finally {
        r.f()
    }
    for (var n = 0; 5 > n; ++n) {
        var l, c = o[n];
        a[n] == c && (i[c] = (null !== (l = i[c]) && void 0 !== l ? l : 0) - 1)
    }
    for (var m = [], p = 0; 5 > p; ++p)
        a[p] == o[p] ? m.push("right") : i[o[p]] > 0 ? (m.push("place"),
        i[o[p]]--) : m.push("wrong");
    return m
}
function _g(a) {
    return Rg(Ig.normSolution, a)
}
function Ng() {
    return function(a, o) {
        for (var e = [], r = [], s = 0; 5 > s; ++s)
            e.push(new Set),
            r.push(null);
        var t, n = new Map, l = u(o);
        try {
            for (l.s(); !(t = l.n()).done; ) {
                for (var c = t.value, m = Rg(a, c), p = {}, d = 0; 5 > d; ++d) {
                    var b, g = c[d];
                    if (null !== r[d] && r[d] !== g)
                        return 0;
                    if (e[d].has(g))
                        return 0;
                    p[g] = (null !== (b = p[g]) && void 0 !== b ? b : 0) + 1
                }
                var f, v = u(n.keys());
                try {
                    for (v.s(); !(f = v.n()).done; ) {
                        var h, j = f.value, x = i(n.get(j), 2), z = x[0], y = x[1], w = null !== (h = p[j]) && void 0 !== h ? h : 0;
                        if (z > w)
                            return 0;
                        if (w > y)
                            return 0
                    }
                } catch (a) {
                    v.e(a)
                } finally {
                    v.f()
                }
                for (var q = {}, E = new Set, S = 0; 5 > S; ++S) {
                    var k, O = c[S];
                    if ("wrong" === m[S])
                        e[S].add(O),
                        q[O] = null !== (k = q[O]) && void 0 !== k ? k : 0,
                        E.add(O);
                    else if ("right" === m[S]) {
                        var L;
                        r[S] = O,
                        q[O] = (null !== (L = q[O]) && void 0 !== L ? L : 0) + 1
                    } else if ("place" === m[S]) {
                        var T;
                        e[S].add(O),
                        q[O] = (null !== (T = q[O]) && void 0 !== T ? T : 0) + 1
                    }
                }
                n.clear();
                for (var I = 0, A = Object.keys(q); I < A.length; I++) {
                    var P = A[I]
                      , R = q[P]
                      , _ = E.has(P) ? R : 5;
                    n.set(P, [R, _])
                }
            }
        } catch (a) {
            l.e(a)
        } finally {
            l.f()
        }
        return 1
    }(Ig.normSolution, Ig.tries)
}
var Cg = _o
  , Mg = tl
  , Dg = us
  , Fg = g
  , Bg = Na
  , Gg = function(a, o, e, i) {
    try {
        return i ? o(Cg(e)[0], e[1]) : o(e)
    } catch (o) {
        Mg(a, "throw", o)
    }
}
  , $g = Vn
  , Ug = ys
  , Vg = ai
  , Wg = $t
  , Yg = il
  , Hg = Kn
  , Jg = l.Array;
Gi({
    target: "Array",
    stat: 1,
    forced: !Tl((function(a) {
        Array.from(a)
    }
    ))
}, {
    from(a) {
        var o = Bg(a)
          , e = Ug(this)
          , i = arguments.length
          , r = i > 1 ? arguments[1] : void 0
          , s = void 0 !== r;
        s && (r = Dg(r, i > 2 ? arguments[2] : void 0));
        var u, t, n, l, c, m, p = Hg(o), d = 0;
        if (!p || this == Jg && $g(p))
            for (u = Vg(o),
            t = e ? new this(u) : Jg(u); u > d; d++)
                m = s ? r(o[d], d) : o[d],
                Wg(t, d, m);
        else
            for (c = (l = Yg(o, p)).next,
            t = e ? new this : []; !(n = Fg(c, l)).done; d++)
                m = s ? Gg(l, r, [n.value, d], 1) : n.value,
                Wg(t, d, m);
        return t.length = d,
        t
    }
});
var Kg = Gi
  , Xg = l
  , Qg = m
  , Zg = ns
  , af = W
  , of = Na
  , ef = ai
  , rf = $t
  , sf = Ls
  , uf = Bs
  , tf = sa
  , nf = oo("isConcatSpreadable")
  , lf = Xg.TypeError
  , cf = tf >= 51 || !Qg((function() {
    var a = [];
    return a[nf] = 0,
    a.concat()[0] !== a
}
))
  , mf = uf("concat")
  , pf = function(a) {
    if (!af(a))
        return 0;
    var o = a[nf];
    return void 0 !== o ? !!o : Zg(a)
};
Kg({
    target: "Array",
    proto: 1,
    forced: !cf || !mf
}, {
    concat(a) {
        var o, e, i, r, s, u = of(this), t = sf(u, 0), n = 0;
        for (o = -1,
        i = arguments.length; i > o; o++)
            if (pf(s = -1 === o ? u : arguments[o])) {
                if (n + (r = ef(s)) > 9007199254740991)
                    throw lf("Maximum allowed index exceeded");
                for (e = 0; r > e; e++,
                n++)
                    e in s && rf(t, n, s[e])
            } else {
                if (n >= 9007199254740991)
                    throw lf("Maximum allowed index exceeded");
                rf(t, n++, s)
            }
        return t.length = n,
        t
    }
});
var df = Ve
  , bf = or
  , gf = F
  , ff = l.RangeError
  , vf = O
  , hf = Qe
  , jf = or
  , xf = F
  , zf = vf((function(a) {
    var o = bf(gf(this))
      , e = ""
      , i = df(a);
    if (0 > i || i == 1 / 0)
        throw ff("Wrong number of repetitions");
    for (; i > 0; (i >>>= 1) && (o += o))
        1 & i && (e += o);
    return e
}
))
  , yf = vf("".slice)
  , wf = Math.ceil
  , qf = function(a) {
    return function(o, e, i) {
        var r, s, u = jf(xf(o)), t = hf(e), n = u.length, l = void 0 === i ? " " : jf(i);
        return t > n && "" != l ? ((s = zf(l, wf((r = t - n) / l.length))).length > r && (s = yf(s, 0, r)),
        a ? u + s : s + u) : u
    }
}
  , Ef = [qf(0), qf(1)][0];
Gi({
    target: "String",
    proto: 1,
    forced: /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(Q)
}, {
    padStart(a) {
        return Ef(this, a, arguments.length > 1 ? arguments[1] : void 0)
    }
});
var Sf, kf, Of = Gi, Lf = l, Tf = g, If = O, Af = U, Pf = W, Rf = (Sf = 0,
(kf = /[ac]/).exec = function() {
    return Sf = 1,
    /./.exec.apply(this, arguments)
}
,
1 == kf.test("abc") && Sf), _f = Lf.Error, Nf = If(/./.test);
function Cf() {
    return document.querySelector("#board .row:nth-child(".concat(Ig.curRow + 1, ")"))
}
function Mf(a) {
    return document.querySelector("#board .row:nth-child(".concat(Ig.curRow + 1, ") .letter:nth-child(").concat(a + 1, ")"))
}
function Df() {
    return document.querySelectorAll("#board .row:nth-child(".concat(Ig.curRow + 1, ") .letter"))
}
function Ff() {
    return document.querySelector("#board .row:nth-child(".concat(Ig.curRow + 1, ") .letter.edit"))
}
function Bf(a, o) {
    a.style.animation = null,
    a.getClientRects(),
    a.style.animation = o
}
Of({
    target: "RegExp",
    proto: 1,
    forced: !Rf
}, {
    test(a) {
        var o = this.exec;
        if (!Af(o))
            return Nf(this, a);
        var e = Tf(o, this, a);
        if (null !== e && !Pf(e))
            throw new _f("RegExp exec method returned something other than an Object or null");
        return !!e
    }
});
var Gf = {
    right: "correta",
    place: "em outro local",
    wrong: "errada"
};
function $f() {
    var a, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, e = u(document.querySelectorAll("#modal > div"));
    try {
        for (e.s(); !(a = e.n()).done; ) {
            var i, r = a.value, s = (null == r ? void 0 : r.id) === o;
            null == r || null === (i = r.classList) || void 0 === i || i.toggle("show", s),
            s && r.focus()
        }
    } catch (a) {
        e.e(a)
    } finally {
        e.f()
    }
}
function Uf(a, o) {
    return Vf.apply(this, arguments)
}
function Vf() {
    return Vf = o(regeneratorRuntime.mark((function a(o, e) {
        var i, r, s = arguments;
        return regeneratorRuntime.wrap((function(a) {
            for (; ; )
                switch (a.prev = a.next) {
                case 0:
                    if (i = s.length > 2 && void 0 !== s[2] ? s[2] : 1,
                    !o.classList.contains(e)) {
                        a.next = 3;
                        break
                    }
                    return a.abrupt("return");
                case 3:
                    if (o.style.animation = null,
                    o.classList.add(e),
                    o.role = "text",
                    r = o.innerText,
                    o.ariaLabel = 'letra "'.concat(r, '" ').concat(Gf[e]),
                    !i) {
                        a.next = 13;
                        break
                    }
                    return a.next = 11,
                    Vp(.3);
                case 11:
                    a.next = 14;
                    break;
                case 13:
                    o.style.animationDuration = "0s";
                case 14:
                case "end":
                    return a.stop()
                }
        }
        ), a)
    }
    ))),
    Vf.apply(this, arguments)
}
function Wf(a) {
    var o = document.getElementById("msg");
    o && (o.innerHTML = a,
    o.focus(),
    o.setAttribute("open", "true"),
    Bf(o, "0.25s linear popup forwards"))
}
function Yf() {
    var a = document.getElementById("msg");
    a && "true" === a.getAttribute("open") && (a.setAttribute("open", 0),
    Bf(a, "0.25s linear popup reverse forwards"))
}
function Hf() {
    return Jf.apply(this, arguments)
}
function Jf() {
    return (Jf = o(regeneratorRuntime.mark((function a() {
        var o, e, i;
        return regeneratorRuntime.wrap((function(a) {
            for (; ; )
                switch (a.prev = a.next) {
                case 0:
                    for (o = Df(),
                    e = 0; e < o.length; ++e)
                        (i = o[e]).classList.add("done"),
                        Bf(i, "0.3s ease-out happy ".concat(.05 * e, "s"));
                    return a.next = 4,
                    Vp(.55);
                case 4:
                case "end":
                    return a.stop()
                }
        }
        ), a)
    }
    )))).apply(this, arguments)
}
function Kf(a, o) {
    var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1
      , i = document.getElementById("kbd_".concat(a));
    i && ("right" === o && (i.classList.remove("place"),
    i.classList.remove("wrong"),
    i.classList.add("right")),
    "place" !== o || i.classList.contains("right") || (i.classList.remove("wrong"),
    i.classList.add("place")),
    "wrong" !== o || i.classList.contains("right") || i.classList.contains("place") || i.classList.add("wrong"),
    e || (i.style.animationDuration = "0s"))
}
var Xf = {}
  , Qf = oo;
Xf.f = Qf;
var Zf = l
  , av = Da
  , ov = Xf
  , ev = Lo.f
  , iv = function(a) {
    var o = Zf.Symbol || (Zf.Symbol = {});
    av(o, a) || ev(o, a, {
        value: ov.f(a)
    })
}
  , rv = Gi
  , sv = l
  , uv = K
  , tv = ct
  , nv = g
  , lv = O
  , cv = p
  , mv = ta
  , pv = m
  , dv = Da
  , bv = ns
  , gv = U
  , fv = W
  , vv = X
  , hv = ba
  , jv = _o
  , xv = Na
  , zv = $
  , yv = po
  , wv = or
  , qv = y
  , Ev = Au
  , Sv = mu
  , kv = Ge
  , Ov = Zd
  , Lv = gi
  , Tv = c
  , Iv = Lo
  , Av = nu
  , Pv = f
  , Rv = Il
  , _v = Yo.exports
  , Nv = ka.exports
  , Cv = le
  , Mv = Ua
  , Dv = oo
  , Fv = Xf
  , Bv = iv
  , Gv = An
  , $v = Se
  , Uv = Cs.forEach
  , Vv = ne("hidden")
  , Wv = Dv("toPrimitive")
  , Yv = $v.set
  , Hv = $v.getterFor("Symbol")
  , Jv = Object.prototype
  , Kv = sv.Symbol
  , Xv = Kv && Kv.prototype
  , Qv = sv.TypeError
  , Zv = sv.QObject
  , ah = uv("JSON", "stringify")
  , oh = Tv.f
  , eh = Iv.f
  , ih = Ov.f
  , rh = Pv.f
  , sh = lv([].push)
  , uh = Nv("symbols")
  , th = Nv("op-symbols")
  , nh = Nv("string-to-symbol-registry")
  , lh = Nv("symbol-to-string-registry")
  , ch = Nv("wks")
  , mh = !Zv || !Zv.prototype || !Zv.prototype.findChild
  , ph = cv && pv((function() {
    return 7 != Ev(eh({}, "a", {
        get() {
            return eh(this, "a", {
                value: 7
            }).a
        }
    })).a
}
)) ? function(a, o, e) {
    var i = oh(Jv, o);
    i && delete Jv[o],
    eh(a, o, e),
    i && a !== Jv && eh(Jv, o, i)
}
: eh
  , dh = function(a, o) {
    var e = uh[a] = Ev(Xv);
    return Yv(e, {
        type: "Symbol",
        tag: a,
        description: o
    }),
    cv || (e.description = o),
    e
}
  , bh = function(a, o, e) {
    a === Jv && bh(th, o, e),
    jv(a);
    var i = yv(o);
    return jv(e),
    dv(uh, i) ? (e.enumerable ? (dv(a, Vv) && a[Vv][i] && (a[Vv][i] = 0),
    e = Ev(e, {
        enumerable: qv(0, 0)
    })) : (dv(a, Vv) || eh(a, Vv, qv(1, {})),
    a[Vv][i] = 1),
    ph(a, i, e)) : eh(a, i, e)
}
  , gh = function(a, o) {
    jv(a);
    var e = zv(o)
      , i = Sv(e).concat(jh(e));
    return Uv(i, (function(o) {
        cv && !nv(fh, e, o) || bh(a, o, e[o])
    }
    )),
    a
}
  , fh = function(a) {
    var o = yv(a)
      , e = nv(rh, this, o);
    return this === Jv && dv(uh, o) && !dv(th, o) ? 0 : e || !dv(this, o) || !dv(uh, o) || dv(this, Vv) && this[Vv][o] ? e : 1
}
  , vh = function(a, o) {
    var e = zv(a)
      , i = yv(o);
    if (e !== Jv || !dv(uh, i) || dv(th, i)) {
        var r = oh(e, i);
        return !r || !dv(uh, i) || dv(e, Vv) && e[Vv][i] || (r.enumerable = 1),
        r
    }
}
  , hh = function(a) {
    var o = ih(zv(a))
      , e = [];
    return Uv(o, (function(a) {
        dv(uh, a) || dv(Cv, a) || sh(e, a)
    }
    )),
    e
}
  , jh = function(a) {
    var o = a === Jv
      , e = ih(o ? th : zv(a))
      , i = [];
    return Uv(e, (function(a) {
        !dv(uh, a) || o && !dv(Jv, a) || sh(i, uh[a])
    }
    )),
    i
};
if (mv || (_v(Xv = (Kv = function() {
    if (vv(Xv, this))
        throw Qv("Symbol is not a constructor");
    var a = arguments.length && void 0 !== arguments[0] ? wv(arguments[0]) : void 0
      , o = Mv(a)
      , e = function(a) {
        this === Jv && nv(e, th, a),
        dv(this, Vv) && dv(this[Vv], o) && (this[Vv][o] = 0),
        ph(this, o, qv(1, a))
    };
    return cv && mh && ph(Jv, o, {
        configurable: 1,
        set: e
    }),
    dh(o, a)
}
).prototype, "toString", (function() {
    return Hv(this).tag
}
)),
_v(Kv, "withoutSetter", (function(a) {
    return dh(Mv(a), a)
}
)),
Pv.f = fh,
Iv.f = bh,
Av.f = gh,
Tv.f = vh,
kv.f = Ov.f = hh,
Lv.f = jh,
Fv.f = function(a) {
    return dh(Dv(a), a)
}
,
cv && (eh(Xv, "description", {
    configurable: 1,
    get() {
        return Hv(this).description
    }
}),
_v(Jv, "propertyIsEnumerable", fh, {
    unsafe: 1
}))),
rv({
    global: 1,
    wrap: 1,
    forced: !mv,
    sham: !mv
}, {
    Symbol: Kv
}),
Uv(Sv(ch), (function(a) {
    Bv(a)
}
)),
rv({
    target: "Symbol",
    stat: 1,
    forced: !mv
}, {
    for(a) {
        var o = wv(a);
        if (dv(nh, o))
            return nh[o];
        var e = Kv(o);
        return nh[o] = e,
        lh[e] = o,
        e
    },
    keyFor(a) {
        if (!hv(a))
            throw Qv(a + " is not a symbol");
        if (dv(lh, a))
            return lh[a]
    },
    useSetter() {
        mh = 1
    },
    useSimple() {
        mh = 0
    }
}),
rv({
    target: "Object",
    stat: 1,
    forced: !mv,
    sham: !cv
}, {
    create(a, o) {
        return void 0 === o ? Ev(a) : gh(Ev(a), o)
    },
    defineProperty: bh,
    defineProperties: gh,
    getOwnPropertyDescriptor: vh
}),
rv({
    target: "Object",
    stat: 1,
    forced: !mv
}, {
    getOwnPropertyNames: hh,
    getOwnPropertySymbols: jh
}),
rv({
    target: "Object",
    stat: 1,
    forced: pv((function() {
        Lv.f(1)
    }
    ))
}, {
    getOwnPropertySymbols(a) {
        return Lv.f(xv(a))
    }
}),
ah && rv({
    target: "JSON",
    stat: 1,
    forced: !mv || pv((function() {
        var a = Kv();
        return "[null]" != ah([a]) || "{}" != ah({
            a
        }) || "{}" != ah(Object(a))
    }
    ))
}, {
    stringify(a, o, e) {
        var i = Rv(arguments)
          , r = o;
        if ((fv(o) || void 0 !== a) && !hv(a))
            return bv(o) || (o = function(a, o) {
                if (gv(r) && (o = nv(r, this, a, o)),
                !hv(o))
                    return o
            }
            ),
            i[1] = o,
            tv(ah, null, i)
    }
}),
!Xv[Wv]) {
    var xh = Xv.valueOf;
    _v(Xv, Wv, (function() {
        return nv(xh, this)
    }
    ))
}
Gv(Kv, "Symbol"),
Cv[Vv] = 1;
var zh = Gi
  , yh = p
  , wh = l
  , qh = O
  , Eh = Da
  , Sh = U
  , kh = X
  , Oh = or
  , Lh = Lo.f
  , Th = Si
  , Ih = wh.Symbol
  , Ah = Ih && Ih.prototype;
if (yh && Sh(Ih) && (!("description"in Ah) || void 0 !== Ih().description)) {
    var Ph = {}
      , Rh = function() {
        var a = 1 > arguments.length || void 0 === arguments[0] ? void 0 : Oh(arguments[0])
          , o = kh(Ah, this) ? new Ih(a) : void 0 === a ? Ih() : Ih(a);
        return "" === a && (Ph[o] = 1),
        o
    };
    Th(Rh, Ih),
    Rh.prototype = Ah,
    Ah.constructor = Rh;
    var _h = Ih("test") + "" == "Symbol(test)"
      , Nh = qh(Ah.toString)
      , Ch = qh(Ah.valueOf)
      , Mh = qh("".replace)
      , Dh = qh("".slice);
    Lh(Ah, "description", {
        configurable: 1,
        get() {
            var a = Ch(this)
              , o = Nh(a);
            if (Eh(Ph, a))
                return "";
            var e = _h ? Dh(o, 7, -1) : Mh(o, /^Symbol\((.*)\)[^)]+$/, "$1");
            return "" === e ? void 0 : e
        }
    }),
    zh({
        global: 1,
        forced: 1
    }, {
        Symbol: Rh
    })
}
iv("iterator");
var Fh = or
  , Bh = W
  , Gh = Wo
  , $h = O("".replace)
  , Uh = Error("zxcasd").stack + ""
  , Vh = /\n\s*at [^:]*:[^\n]*/
  , Wh = Vh.test(Uh)
  , Yh = y
  , Hh = !m((function() {
    var a = Error("a");
    return "stack"in a ? (Object.defineProperty(a, "stack", Yh(1, 7)),
    7 !== a.stack) : 1
}
))
  , Jh = K
  , Kh = Da
  , Xh = Wo
  , Qh = X
  , Zh = qr
  , aj = Si
  , oj = Or
  , ej = function(a, o) {
    return void 0 === a ? 2 > arguments.length ? "" : o : Fh(a)
}
  , ij = function(a, o) {
    Bh(o) && "cause"in o && Gh(a, "cause", o.cause)
}
  , rj = function(a, o) {
    if (Wh && "string" == typeof a)
        for (; o--; )
            a = $h(a, Vh, "");
    return a
}
  , sj = Hh
  , uj = Gi
  , tj = ct
  , nj = function(a, o, e, i) {
    var r = i ? 2 : 1
      , s = a.split(".")
      , u = s[s.length - 1]
      , t = Jh.apply(null, s);
    if (t) {
        var n = t.prototype;
        if (Kh(n, "cause") && delete n.cause,
        !e)
            return t;
        var l = Jh("Error")
          , c = o((function(a, o) {
            var e = ej(i ? o : a, void 0)
              , s = i ? new t(a) : new t;
            return void 0 !== e && Xh(s, "message", e),
            sj && Xh(s, "stack", rj(s.stack, 2)),
            this && Qh(n, this) && oj(s, this, c),
            arguments.length > r && ij(s, arguments[r]),
            s
        }
        ));
        c.prototype = n,
        "Error" !== u && (Zh ? Zh(c, l) : aj(c, l, {
            name: 1
        })),
        aj(c, t);
        try {
            n.name !== u && Xh(n, "name", u),
            n.constructor = c
        } catch (a) {}
        return c
    }
}
  , lj = l.WebAssembly
  , cj = 7 !== Error("e", {
    cause: 7
}).cause
  , mj = function(a, o) {
    var e = {};
    e[a] = nj(a, o, cj),
    uj({
        global: 1,
        forced: cj
    }, e)
}
  , pj = function(a, o) {
    if (lj && lj[a]) {
        var e = {};
        e[a] = nj("WebAssembly." + a, o, cj),
        uj({
            target: "WebAssembly",
            stat: 1,
            forced: cj
        }, e)
    }
};
function dj(a, o, e, i) {
    return new (e || (e = Promise))((function(r, s) {
        function u(a) {
            try {
                n(i.next(a))
            } catch (a) {
                s(a)
            }
        }
        function t(a) {
            try {
                n(i.throw(a))
            } catch (a) {
                s(a)
            }
        }
        function n(a) {
            var o;
            a.done ? r(a.value) : (o = a.value,
            o instanceof e ? o : new e((function(a) {
                a(o)
            }
            ))).then(u, t)
        }
        n((i = i.apply(a, o || [])).next())
    }
    ))
}
function bj(a, o) {
    var e, i, r, s, u = {
        label: 0,
        sent() {
            if (1 & r[0])
                throw r[1];
            return r[1]
        },
        trys: [],
        ops: []
    };
    return s = {
        next: t(0),
        throw: t(1),
        return: t(2)
    },
    "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this
    }
    ),
    s;
    function t(s) {
        return function(t) {
            return function(s) {
                if (e)
                    throw new TypeError("Generator is already executing.");
                for (; u; )
                    try {
                        if (e = 1,
                        i && (r = 2 & s[0] ? i.return : s[0] ? i.throw || ((r = i.return) && r.call(i),
                        0) : i.next) && !(r = r.call(i, s[1])).done)
                            return r;
                        switch (i = 0,
                        r && (s = [2 & s[0], r.value]),
                        s[0]) {
                        case 0:
                        case 1:
                            r = s;
                            break;
                        case 4:
                            return u.label++,
                            {
                                value: s[1],
                                done: 0
                            };
                        case 5:
                            u.label++,
                            i = s[1],
                            s = [0];
                            continue;
                        case 7:
                            s = u.ops.pop(),
                            u.trys.pop();
                            continue;
                        default:
                            if (!((r = (r = u.trys).length > 0 && r[r.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                u = 0;
                                continue
                            }
                            if (3 === s[0] && (!r || s[1] > r[0] && s[1] < r[3])) {
                                u.label = s[1];
                                break
                            }
                            if (6 === s[0] && u.label < r[1]) {
                                u.label = r[1],
                                r = s;
                                break
                            }
                            if (r && u.label < r[2]) {
                                u.label = r[2],
                                u.ops.push(s);
                                break
                            }
                            r[2] && u.ops.pop(),
                            u.trys.pop();
                            continue
                        }
                        s = o.call(a, u)
                    } catch (a) {
                        s = [6, a],
                        i = 0
                    } finally {
                        e = r = 0
                    }
                if (5 & s[0])
                    throw s[1];
                return {
                    value: s[0] ? s[1] : void 0,
                    done: 1
                }
            }([s, t])
        }
    }
}
mj("Error", (function(a) {
    return function(o) {
        return tj(a, this, arguments)
    }
}
)),
mj("EvalError", (function(a) {
    return function(o) {
        return tj(a, this, arguments)
    }
}
)),
mj("RangeError", (function(a) {
    return function(o) {
        return tj(a, this, arguments)
    }
}
)),
mj("ReferenceError", (function(a) {
    return function(o) {
        return tj(a, this, arguments)
    }
}
)),
mj("SyntaxError", (function(a) {
    return function(o) {
        return tj(a, this, arguments)
    }
}
)),
mj("TypeError", (function(a) {
    return function(o) {
        return tj(a, this, arguments)
    }
}
)),
mj("URIError", (function(a) {
    return function(o) {
        return tj(a, this, arguments)
    }
}
)),
pj("CompileError", (function(a) {
    return function(o) {
        return tj(a, this, arguments)
    }
}
)),
pj("LinkError", (function(a) {
    return function(o) {
        return tj(a, this, arguments)
    }
}
)),
pj("RuntimeError", (function(a) {
    return function(o) {
        return tj(a, this, arguments)
    }
}
)),
function() {
    (console.warn || console.log).apply(console, arguments)
}
.bind("[clipboard-polyfill]");
var gj, fj, vj, hj, jj = "undefined" == typeof navigator ? void 0 : navigator, xj = null == jj ? void 0 : jj.clipboard;
null === (gj = null == xj ? void 0 : xj.read) || void 0 === gj || gj.bind(xj),
null === (fj = null == xj ? void 0 : xj.readText) || void 0 === fj || fj.bind(xj);
var zj = (null === (vj = null == xj ? void 0 : xj.write) || void 0 === vj || vj.bind(xj),
null === (hj = null == xj ? void 0 : xj.writeText) || void 0 === hj ? void 0 : hj.bind(xj))
  , yj = "undefined" == typeof window ? void 0 : window
  , wj = (null == yj || yj.ClipboardItem,
yj)
  , qj = function() {
    this.success = 0
};
function Ej(a, o, e) {
    for (var i in a.success = 1,
    o) {
        var r = o[i]
          , s = e.clipboardData;
        s.setData(i, r),
        "text/plain" === i && s.getData(i) !== r && (a.success = 0)
    }
    e.preventDefault()
}
function Sj(a) {
    var o = new qj
      , e = Ej.bind(this, o, a);
    document.addEventListener("copy", e);
    try {
        document.execCommand("copy")
    } finally {
        document.removeEventListener("copy", e)
    }
    return o.success
}
function kj(a, o) {
    Oj(a);
    var e = Sj(o);
    return Lj(),
    e
}
function Oj(a) {
    var o = document.getSelection();
    if (o) {
        var e = document.createRange();
        e.selectNodeContents(a),
        o.removeAllRanges(),
        o.addRange(e)
    }
}
function Lj() {
    var a = document.getSelection();
    a && a.removeAllRanges()
}
function Tj(a) {
    return dj(this, void 0, void 0, (function() {
        return bj(this, (function() {
            if (zj)
                return [2, zj(a)];
            if (!function(a) {
                return dj(this, void 0, void 0, (function() {
                    var o;
                    return bj(this, (function() {
                        if (o = "text/plain"in a,
                        "undefined" == typeof ClipboardEvent && void 0 !== wj.clipboardData && void 0 !== wj.clipboardData.setData) {
                            if (!o)
                                throw Error("No `text/plain` value was specified.");
                            if (e = a["text/plain"],
                            wj.clipboardData.setData("Text", e))
                                return [2, 1];
                            throw Error("Copying failed, possibly because the user rejected it.")
                        }
                        var e;
                        return Sj(a) || navigator.userAgent.indexOf("Edge") > -1 || kj(document.body, a) || function(a) {
                            var o = document.createElement("div");
                            o.setAttribute("style", "-webkit-user-select: text !important"),
                            o.textContent = "temporary element",
                            document.body.appendChild(o);
                            var e = kj(o, a);
                            return document.body.removeChild(o),
                            e
                        }(a) || function(a) {
                            var o = document.createElement("div");
                            o.setAttribute("style", "-webkit-user-select: text !important");
                            var e = o;
                            o.attachShadow && (e = o.attachShadow({
                                mode: "open"
                            }));
                            var i = document.createElement("span");
                            i.innerText = a,
                            e.appendChild(i),
                            document.body.appendChild(o),
                            Oj(i);
                            var r = document.execCommand("copy");
                            return Lj(),
                            document.body.removeChild(o),
                            r
                        }(a["text/plain"]) ? [2, 1] : [2, 0]
                    }
                    ))
                }
                ))
            }((o = a,
            e = {},
            e["text/plain"] = o,
            e)))
                throw Error("writeText() failed");
            var o, e;
            return [2]
        }
        ))
    }
    ))
}
var Ij = null;
function Aj() {
    var a = function(a) {
        return document.getElementById(a)
    };
    $f("stats"),
    a("stats_games").innerText = Tg.games;
    var o = Tg.games > 0 ? Math.round(100 * Tg.wins / Tg.games) : 0;
    a("stats_pct").innerText = "".concat(o, "%"),
    a("stats_streak").innerText = Tg.curstreak,
    a("stats_maxstreak").innerText = Tg.maxstreak;
    var e, i = document.querySelectorAll("#histo .stats_histo"), u = Array.from(Tg.histo);
    u[6] = Tg.games - Tg.wins;
    for (var t = Math.max.apply(Math, [1].concat(function(a) {
        if (Array.isArray(a))
            return s(a)
    }(e = u) || function(a) {
        if ("undefined" != typeof Symbol && null != a[Symbol.iterator] || null != a["@@iterator"])
            return Array.from(a)
    }(e) || r(e) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }())), n = 0; 7 > n; ++n) {
        var l = Math.floor(1e4 * u[n] / t) / 100;
        i[n].style.width = "".concat(l, "%"),
        i[n].innerText = u[n],
        i[n].classList.toggle("dark", 0 == u[n])
    }
    if (Ig.gameOver) {
        if (a("statsnext").style.display = "grid",
        null === Ij) {
            var c = function() {
                var o = new Date
                  , e = "00"/* (23-o.getHours()+"").padStart(2,"0") */
                  , i = (59 - o.getMinutes() + "").padStart(2, "0")
                  , r = (59 - o.getSeconds() + "").padStart(2, "0")
                  , s = a("stats_time");
                s && (s.innerText = "".concat(e, ":").concat(i, ":").concat(r))
            };
            Ij = setInterval(c, 1e3),
            c()
        }
    } else
        a("statsnext").style.display = "none"
}
function Pj(a) {
    return Rj.apply(this, arguments)
}
function Rj() {
    return Rj = o(regeneratorRuntime.mark((function a(o) {
        var e, i, r, s, t, n, l, c, m, p, d;
        return regeneratorRuntime.wrap((function(a) {
            for (; ; )
                switch (a.prev = a.next) {
                case 0:
                    o.stopPropagation(),
                    e = Ig.curRow,
                    i = Ig.won ? e + 1 : "X",
                    r = Ng() ? " *" : "",
                    s = ["joguei ".concat(window.location.href).concat(" #").concat(Ig.curday, " ").concat(i, "/6").concat(r), ""],
                    t = u(Ig.tries);
                    try {
                        for (t.s(); !(n = t.n()).done; ) {
                            l = n.value,
                            c = [],
                            m = u(_g(l));
                            try {
                                for (m.s(); !(p = m.n()).done; )
                                    d = p.value,
                                    c.push({
                                        right: "🟩",
                                        place: "🟨",
                                        wrong: "⬛"
                                    }[d])
                            } catch (a) {
                                m.e(a)
                            } finally {
                                m.f()
                            }
                            s.push(c.join(""))
                        }
                    } catch (a) {
                        t.e(a)
                    } finally {
                        t.f()
                    }
                    return s.push(""),
                    s.push(""),
                    a.next = 11,
                    _j(s.join("\n"));
                case 11:
                    setTimeout(Yf, 2e3);
                case 12:
                case "end":
                    return a.stop()
                }
        }
        ), a)
    }
    ))),
    Rj.apply(this, arguments)
}
function _j(a) {
    return Nj.apply(this, arguments)
}
function Nj() {
    return (Nj = o(regeneratorRuntime.mark((function a(o) {
        return regeneratorRuntime.wrap((function(a) {
            for (; ; )
                switch (a.prev = a.next) {
                case 0:
                    if (window._shared = o,
                    !(Cj() && -1 == navigator.userAgent.toLowerCase().indexOf("firefox") && navigator.share && navigator.canShare && navigator.canShare({
                        text: o
                    }))) {
                        a.next = 11;
                        break
                    }
                    return Wf("compartilhado"),
                    a.prev = 3,
                    a.next = 6,
                    navigator.share({
                        text: o
                    });
                case 6:
                    return a.abrupt("return");
                case 9:
                    a.prev = 9,
                    a.t0 = a.catch(3);
                case 11:
                    Tj(o).then((function() {
                        Wf("copiado para o ctrl+V")
                    }
                    ), (function() {
                        Wf("compartilhamento falhou")
                    }
                    ));
                case 12:
                case "end":
                    return a.stop()
                }
        }
        ), a, null, [[3, 9]])
    }
    )))).apply(this, arguments)
}
function Cj() {
    var a, o;
    if (navigator.userAgentData)
        return navigator.userAgentData.mobile;
    var e = null !== (a = null !== (o = navigator.userAgent) && void 0 !== o ? o : navigator.vendor) && void 0 !== a ? a : window.opera;
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))
}
var Mj = p
  , Dj = g
  , Fj = m
  , Bj = mu
  , Gj = gi
  , $j = f
  , Uj = Na
  , Vj = M
  , Wj = Object.assign
  , Yj = Object.defineProperty
  , Hj = O([].concat)
  , Jj = !Wj || Fj((function() {
    if (Mj && 1 !== Wj({
        b: 1
    }, Wj(Yj({}, "a", {
        enumerable: 1,
        get() {
            Yj(this, "b", {
                value: 3,
                enumerable: 0
            })
        }
    }), {
        b: 2
    })).b)
        return 1;
    var a = {}
      , o = {}
      , e = Symbol()
      , i = "abcdefghijklmnopqrst";
    return a[e] = 7,
    i.split("").forEach((function(a) {
        o[a] = a
    }
    )),
    7 != Wj({}, a)[e] || Bj(Wj({}, o)).join("") != i
}
)) ? function(a, o) {
    for (var e = Uj(a), i = arguments.length, r = 1, s = Gj.f, u = $j.f; i > r; )
        for (var t, n = Vj(arguments[r++]), l = s ? Hj(Bj(n), s(n)) : Bj(n), c = l.length, m = 0; c > m; )
            t = l[m++],
            Mj && !Dj(u, n, t) || (e[t] = n[t]);
    return e
}
: Wj;
function Kj(a, o) {
    if (void 0 !== o) {
        for (var e = 0, i = Object.keys(a); e < i.length; e++)
            delete a[i[e]];
        return Object.assign(a, o)
    }
}
function Xj() {
    window.localStorage.setItem("treco", JSON.stringify({
        state: Ig,
        stats: Tg,
        config: Ag
    }))
}
function Qj() {
    document.getElementById("config_contrast") && (document.getElementById("config_contrast").checked = Ag.highContrast,
    document.body.classList.toggle("high", Ag.highContrast))
}
function Zj() {
    var a;
    Ag.highContrast = !(null === (a = document.getElementById("config_contrast")) || void 0 === a || !a.checked),
    Qj()
}
Gi({
    target: "Object",
    stat: 1,
    forced: Object.assign !== Jj
}, {
    assign: Jj
}),
window.addEventListener("error", (function(a) {
    return pp(a.error.message, a.error.stack)
}
)),
window.addEventListener("unhandledrejection", (function(a) {
    return pp(a.reason.message, "[Promise]")
}
));
var ax = 1
  , ox = ["Genial", "Fantástico", "Extraordinário", "Fenomenal", "Impressionante", "Ufa!"];
function ex() {
    var a, o;
    Ig.tries.length > 0 && 0 === Ig.tries[Ig.tries.length - 1].length && Ig.tries.pop(),
    null === (a = Ff()) || void 0 === a || null === (o = a.classList) || void 0 === o || o.remove("edit"),
    Ig.curRow++;
    var e, i = u(Df());
    try {
        for (i.s(); !(e = i.n()).done; )
            e.value.classList.add("empty")
    } catch (a) {
        i.e(a)
    } finally {
        i.f()
    }
    Mf(0).classList.add("edit"),
    null !== Ig.curTry && Ig.curTry.length > 0 && Ig.tries.push(Ig.curTry),
    Ig.curTry = []
}
function ix(a) {
    Ig.gameOver = 1,
    Ig.won = a,
    Ig.endTime = +new Date,
    Ig.tries.push(Ig.curTry),
    function() {
        Tg.games++,
        1 == Ig.won ? (Tg.wins++,
        Tg.curstreak++,
        Tg.histo[Ig.curRow]++) : Tg.curstreak = 0,
        Tg.maxstreak = Math.max(Tg.maxstreak, Tg.curstreak);
        var a = Ig.startTime && Ig.endTime ? Math.round((Ig.endTime - Ig.startTime) / 1e3) : 0;
        Tg.avgtime || (Tg.avgtime = a),
        Tg.mintime || (Tg.mintime = a),
        Tg.maxtime || (Tg.maxtime = a),
        Tg.avgtime = ((Tg.games - 1) * Tg.avgtime + a) / Tg.games,
        Tg.maxtime = Math.max(Tg.maxtime, a),
        Tg.mintime = Math.max(Tg.mintime, a);
        var o, e = [], i = u(Ig.tries);
        try {
            for (i.s(); !(o = i.n()).done; ) {
                var r = o.value;
                e.push(r.join(""))
            }
        } catch (a) {
            i.e(a)
        } finally {
            i.f()
        }
        cp({
            type: "commit",
            tries: e,
            invalids: Array.from(new Set(Ig.invalids)),
            won: Ig.won,
            day: Ig.curday,
            duration: a,
            stats: Tg
        })
    }(),
    Aj(),
    Xj()
}
function rx() {
    return rx = o(regeneratorRuntime.mark((function a() {
        var o, e, i, r, s, u, t, n;
        return regeneratorRuntime.wrap((function(a) {
            for (; ; )
                switch (a.prev = a.next) {
                case 0:
                    if (o = Ig.curTry.filter((function(a) {
                        return Lg.has(a)
                    }
                    )).join(""),
                    0 != o.length) {
                        a.next = 4;
                        break
                    }
                    return Bf(Cf(), "0.75s ease-in-out rownope"),
                    a.abrupt("return");
                case 4:
                    if (5 == o.length) {
                        a.next = 8;
                        break
                    }
                    return Wf("só palavras com 5 letras"),
                    Bf(Cf(), "0.75s ease-in-out rownope"),
                    a.abrupt("return");
                case 8:
                    if (qg.has(o) || void 0 !== Eg[o]) {
                        a.next = 13;
                        break
                    }
                    return Ig.invalids.push(o),
                    Wf("essa palavra não é válida"),
                    Bf(Cf(), "0.75s ease-in-out rownope"),
                    a.abrupt("return");
                case 13:
                    if (ax = 1,
                    e = Df(),
                    void 0 !== Eg[o])
                        for (i = Eg[o],
                        r = 0; 5 > r; ++r)
                            e[r].innerText = i[r];
                    s = _g(Ig.curTry),
                    u = 0;
                case 18:
                    if (u >= 5) {
                        a.next = 26;
                        break
                    }
                    return (t = e[u]).classList.remove("empty"),
                    a.next = 23,
                    Uf(t, s[u]);
                case 23:
                    ++u,
                    a.next = 18;
                    break;
                case 26:
                    if (o !== Ig.normSolution) {
                        a.next = 35;
                        break
                    }
                    return a.next = 29,
                    Hf();
                case 29:
                    return Wf(ox[Ig.curRow]),
                    a.next = 32,
                    Vp(1);
                case 32:
                    return ix(1),
                    ax = 0,
                    a.abrupt("return");
                case 35:
                    for (n = 0; 5 > n; ++n)
                        Kf(Ig.curTry[n], s[n]);
                    if (5 != Ig.curRow) {
                        a.next = 45;
                        break
                    }
                    return Bf(Cf(), "0.75s ease-in-out rownope"),
                    a.next = 40,
                    Vp(.5);
                case 40:
                    return Wf(Ig.solution),
                    a.next = 43,
                    Vp(1);
                case 43:
                    return ix(0),
                    a.abrupt("return");
                case 45:
                    ex(),
                    Xj(),
                    ax = 0;
                case 48:
                case "end":
                    return a.stop()
                }
        }
        ), a)
    }
    ))),
    rx.apply(this, arguments)
}
function sx() {
    var a, o = Df(), e = Ff(), i = Number.parseInt(null !== (a = null == e ? void 0 : e.getAttribute("treco-pos")) && void 0 !== a ? a : 0);
    e.classList.remove("edit");
    for (var r = 0; 5 > r; ++r) {
        var s = (i + r) % 5;
        if ("" == o[s].innerText)
            return o[s].classList.add("edit"),
            o[s]
    }
    return null
}
function ux(a) {
    if (Ig.gameOver)
        return 0;
    if (ax)
        return 0;
    if (7 == Ig.tries.length)
        return 0;
    if (Yf(),
    a = Wp(a),
    Lg.has(a) && Ig.curTry) {
        var o = Ff();
        if (!o)
            return 0;
        var e = Number.parseInt(o.getAttribute("treco-pos"));
        return Ig.curTry[e] = a,
        o.innerText = a,
        o.focus(),
        Bf(o, "0.15s ease-out type 0s none"),
        sx(),
        1
    }
    if ("backspace" === a) {
        var i, r = null !== (i = Ff()) && void 0 !== i ? i : Mf(4), s = Number.parseInt(r.getAttribute("treco-pos"));
        return null != Ig.curTry[s] ? (r.classList.add("edit"),
        r.focus(),
        r.innerText = "",
        Ig.curTry[s] = null,
        1) : (r = function() {
            var a, o = Df(), e = Ff(), i = Number.parseInt(null !== (a = null == e ? void 0 : e.getAttribute("treco-pos")) && void 0 !== a ? a : 0);
            return 0 == i ? null : (e.classList.remove("edit"),
            o[i - 1].classList.add("edit"),
            o[i - 1])
        }(),
        null !== r && (s = Number.parseInt(r.getAttribute("treco-pos")),
        Ig.curTry[s] = null,
        r.focus(),
        r.innerText = ""),
        1)
    }
    return "space" === a ? (sx(),
    1) : "enter" === a ? (function() {
        rx.apply(this, arguments)
    }(),
    1) : 0
}
function tx(a) {
    var o = document.getElementById("help")
      , e = document.getElementById("stats");
    return document.getElementById("config").classList.contains("show") || o.classList.contains("show") ? (ax = 0,
    $f(),
    a.stopPropagation(),
    void a.preventDefault()) : e.classList.contains("show") ? (null !== Ij && (clearInterval(Ij),
    Ij = null),
    $f(),
    a.stopPropagation(),
    void a.preventDefault()) : Ig.gameOver && !e.classList.contains("show") ? (Aj(),
    a.stopPropagation(),
    void a.preventDefault()) : void 0
}
function nx(a) {
    var o = a.target;
    if (o && o.classList.contains("empty")) {
        var e = Ff();
        e !== o && (e && e.classList.remove("edit"),
        o.classList.add("edit"))
    }
}
function lx(a) {
    $f("help"),
    ax = 1,
    a && a.stopPropagation()
}
function cx(a) {
    Aj(),
    a && a.stopPropagation()
}
function mx(a) {
    $f("config"),
    a && a.stopPropagation()
}
document.addEventListener("readystatechange", (function a() {
    "complete" === document.readyState && (document.removeEventListener("readystatechange", a),
    function() {
        var a, o, e, i = u(document.querySelectorAll("#board .letter"));
        try {
            for (i.s(); !(e = i.n()).done; ) {
                var r = e.value;
                r.tabIndex = 0,
                r.role = "cell"
            }
        } catch (a) {
            i.e(a)
        } finally {
            i.f()
        }
        var s, t = u(document.querySelectorAll("#kbd button"));
        try {
            var n = function() {
                var a = s.value
                  , o = a.id.split("_")[1].toLowerCase();
                a.addEventListener("click", (function(a) {
                    ux(o),
                    a.preventDefault(),
                    a.stopPropagation()
                }
                ))
            };
            for (t.s(); !(s = t.n()).done; )
                n()
        } catch (a) {
            t.e(a)
        } finally {
            t.f()
        }
        window.addEventListener("keydown", (function(a) {
            var o = a.key.toLowerCase();
            "enter" === o && (ux("enter"),
            a.preventDefault(),
            a.stopPropagation()),
            " " === o && (ux("space"),
            a.preventDefault(),
            a.stopPropagation()),
            "escape" === o && tx(a)
        }
        )),
        window.addEventListener("keyup", (function(a) {
            ux(a.key.toLowerCase()) && (a.preventDefault(),
            a.stopPropagation())
        }
        )),
        document.getElementById("prestats_button").addEventListener("click", cx),
        null === (a = document.getElementById("config_button")) || void 0 === a || a.addEventListener("click", mx),
        document.getElementById("how").addEventListener("click", lx),
        document.addEventListener("click", tx),
        document.getElementById("stats_share").addEventListener("click", Pj),
        null === (o = document.getElementById("config_contrast")) || void 0 === o || o.addEventListener("change", Zj);
        var l, c, m, p = u(document.querySelectorAll("a,#config_contrast,label[for='config_contrast'],#config_version"));
        try {
            for (p.s(); !(l = p.n()).done; )
                l.value.addEventListener("click", (function(a) {
                    a.stopPropagation()
                }
                ))
        } catch (a) {
            p.e(a)
        } finally {
            p.f()
        }
        for (var d = document.querySelectorAll("#board div.row"), b = 0; b < d.length; ++b)
            for (var g = d[b].querySelectorAll("div.letter"), f = 0; f < g.length; ++f) {
                var v = g[f];
                v.setAttribute("role", "img"),
                v.setAttribute("aria-label", ""),
                v.setAttribute("aria-live", "polite"),
                v.setAttribute("aria-roledescription", "letra"),
                v.setAttribute("treco-row", b),
                v.setAttribute("treco-pos", f),
                v.addEventListener("click", nx)
            }
        !function() {
            Yf();
            var a, o = u(document.querySelectorAll("#board .row .letter"));
            try {
                for (o.s(); !(a = o.n()).done; ) {
                    var e = a.value;
                    e.classList.remove("right"),
                    e.classList.remove("place"),
                    e.classList.remove("wrong"),
                    e.classList.remove("empty"),
                    e.classList.remove("edit"),
                    e.innerHTML = "",
                    e.style.animationDuration = null
                }
            } catch (a) {
                o.e(a)
            } finally {
                o.f()
            }
            var i, r = u(document.querySelectorAll("#kbd button"));
            try {
                for (r.s(); !(i = r.n()).done; ) {
                    var s = i.value;
                    s.classList.remove("right"),
                    s.classList.remove("place"),
                    s.classList.remove("wrong"),
                    s.style.animationDuration = null
                }
            } catch (a) {
                r.e(a)
            } finally {
                r.f()
            }
        }(),
        null !== (m = JSON.parse(null !== (c = window.localStorage.getItem("treco")) && void 0 !== c ? c : "null")) && (Kj(Ig, m.state),
        Kj(Tg, m.stats),
        Kj(Ag, m.config),
        Ig.invalids || (Ig.invalids = [])),
        Qj(),
        0 !== Tg.games || Ig.curRow > 0 || lx(),
        Pg() !== Ig.curday && (Ig.curday = Pg(),
        Ig.solution = Sg[Ig.curday % Sg.length],
        Ig.normSolution = Wp(Ig.solution),
        Ig.tries = [],
        Ig.invalids = [],
        Ig.curRow = -1,
        Ig.curTry = null,
        Ig.gameOver = 0,
        Ig.won = null,
        Ig.startTime = +new Date,
        Ig.endTime = 0),
        function() {
            if (0 != Ig.tries.length) {
                Ig.tries = Ig.tries.filter((function(a) {
                    return 5 == a.length
                }
                ));
                for (var a = 0; a < Ig.tries.length; ++a) {
                    var o = Ig.tries[a]
                      , e = o.join("");
                    Ig.curRow = a;
                    for (var i = Df(), r = _g(o), s = void 0 !== Eg[e] ? Eg[e] : e, u = 0; 5 > u; ++u) {
                        var t = i[u];
                        t.innerText = s[u],
                        Uf(t, r[u], 0),
                        Kf(o[u], r[u], 0)
                    }
                }
                Ig.gameOver && (Ig.won || Wf(Ig.solution),
                Vp(1).then((function() {
                    document.getElementById("help").classList.contains("show") || Aj()
                }
                )))
            }
        }(),
        Ig.gameOver || ex(),
        ax = 0
    }())
}
));
