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
    copyright: "?? 2014-2022 Denis Pushkarev (zloirock.ru)",
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
        return 1 & a && (e = rr(e, /^[	\n\r ???????????????????????????????????????????????\u2028\u2029???][	\n\r ???????????????????????????????????????????????\u2028\u2029???]*/, "")),
        2 & a && (e = rr(e, /[	\n\r ???????????????????????????????????????????????\u2028\u2029???][	\n\r ???????????????????????????????????????????????\u2028\u2029???]*$/, "")),
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
  , vr = 8 !== pr("\t\n\v\f\r ???????????????????????????????????????????????\u2028\u2029\ufeff08") || 22 !== pr("\t\n\v\f\r ???????????????????????????????????????????????\u2028\u2029\ufeff0x16") || br && !nr((function() {
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
var yg, wg, qg = new Set(["aan??s", "aarus", "aasto", "abab??", "abab??", "abaci", "abacu", "abac??", "abac??", "abado", "abafa", "abafe", "abafo", "abagi", "abago", "abag??", "abaia", "abais", "abai??", "abaju", "abaj??", "abala", "abale", "abalo", "abama", "abamo", "abana", "abane", "abano", "aban??", "abapo", "abari", "abar??", "abar??", "abaso", "abata", "abate", "abati", "abato", "abatu", "abava", "abavi", "abaxi", "abdal", "abdar", "abdas", "abduz", "abeb??", "abeci", "abeco", "abec??", "abeda", "abedo", "abed??", "abeis", "abela", "abemo", "abesi", "abeta", "abete", "abeto", "abexi", "abibe", "abica", "abic??", "abida", "abife", "abifo", "abif??", "abigi", "abilo", "abios", "abira", "abisa", "abita", "abite", "abito", "abius", "abi??o", "ables", "ableu", "ablua", "ablui", "abluo", "ablu??", "abnua", "abnue", "abnuo", "abnu??", "aboai", "aboam", "aboar", "aboas", "aboba", "abobe", "abob??", "aboca", "aboce", "aboei", "aboem", "aboes", "abof??", "abohm", "aboia", "aboie", "aboio", "aboiz", "aboja", "aboje", "abojo", "abola", "abole", "aboli", "abolo", "aboma", "abona", "abone", "aboou", "abora", "abor??", "abota", "abo??o", "abo??s", "abram", "abras", "abrem", "abres", "abreu", "abrev", "abria", "abris", "abriu", "abst??", "abuas", "abube", "abuce", "abuda", "abudo", "abuis", "abuiz", "abula", "abule", "abulo", "abuna", "aburu", "abusa", "abuse", "abuso", "abuta", "abux??", "abu??o", "abu????", "acaba", "acabe", "acabo", "acace", "acada", "acado", "acaio", "acair", "acaiu", "acai??", "acaju", "acaj??", "acale", "acali", "acalo", "acama", "acana", "acane", "acani", "acapu", "acari", "acaru", "acar??", "acasa", "acata", "acate", "acato", "acau??", "acava", "acaxa", "aca??o", "aca????", "aca??m", "aca??s", "acebe", "acebo", "aceb??", "aceca", "aceda", "acede", "acedi", "acedo", "acefe", "aceje", "acejo", "acej??", "acela", "acelo", "acena", "acene", "aceno", "acera", "acere", "aceso", "aceta", "acete", "aceto", "aceva", "aceve", "acevo", "achai", "acham", "achas", "achei", "achem", "aches", "achim", "achis", "achoa", "achoe", "achoo", "achou", "ach??m", "acibe", "acica", "acida", "acide", "acila", "acile", "acilo", "acime", "acimo", "acioa", "acisa", "aciso", "acles", "aclia", "aclio", "acmes", "acmos", "acm??o", "acnas", "acnes", "acoai", "acoam", "acoar", "acoas", "acobu", "acoce", "acoco", "acode", "acoei", "acoem", "acole", "acoli", "acolo", "acone", "acon??", "acoou", "acori", "acote", "acoto", "acot??", "acova", "acove", "acovo", "acral", "acras", "acres", "acrol", "acros", "acro??", "acr??u", "actel", "acuai", "acuam", "acuar", "acuas", "acucu", "acuda", "acudi", "acudo", "acuei", "acuem", "acues", "acume", "acum??", "acuna", "acuos", "acuou", "acura", "acuri", "acuro", "acur??", "acusa", "acuse", "acuso", "acuta", "acuti", "acu??s", "ac??ns", "adaba", "adaca", "adace", "adage", "adail", "adali", "adama", "adame", "adamo", "adane", "adano", "adan??", "adaus", "ada??s", "adeb??", "adege", "adego", "adeja", "adeje", "adejo", "adela", "adele", "adelo", "adema", "adere", "aderi", "adero", "ader??", "adesa", "adeso", "adev??", "adiai", "adiam", "adias", "adiba", "adibe", "adibo", "adica", "adico", "adida", "adido", "adiei", "adiem", "adies", "adila", "adile", "adilo", "adimo", "adiou", "adio??", "adipa", "adira", "adiro", "adir??", "adita", "adite", "adito", "adiva", "adive", "adivo", "adix??", "adi??o", "adjaz", "adjer", "adj??s", "adoai", "adoam", "adoar", "adoas", "adoba", "adobe", "adobo", "adoce", "adoei", "adoem", "adoes", "adog??", "adoli", "adolo", "adoma", "adome", "adomo", "adone", "adono", "adon??", "adoou", "adora", "adore", "adoro", "adota", "adote", "adoto", "adova", "adoxa", "adoxo", "ado??a", "ado??o", "adqui", "adros", "adsir", "aduai", "aduam", "aduar", "aduas", "aduba", "adube", "adubo", "aduce", "aduci", "aduco", "aduei", "aduem", "adues", "adufa", "adufe", "adufo", "adula", "adule", "adulo", "adume", "adumo", "adum??", "aduna", "adune", "aduno", "aduns", "aduou", "adura", "adure", "aduri", "aduro", "aduza", "aduze", "aduzi", "aduzo", "adu??a", "advim", "adv??m", "adv??m", "ad??is", "ad??on", "aedos", "aerar", "aerva", "aetas", "afaga", "afago", "afala", "afale", "afalo", "afama", "afame", "afamo", "afana", "afane", "afano", "afare", "afaro", "afar??", "afaze", "afa??o", "afeai", "afear", "afeei", "afef??", "afego", "afeg??", "afeia", "afeie", "afeio", "afeou", "afere", "aferi", "afero", "afer??", "afeta", "afete", "afeto", "afiai", "afial", "afiam", "afiar", "afias", "afica", "afico", "afido", "afiei", "afiem", "afies", "afife", "afifo", "afif??", "afila", "afile", "afilo", "afina", "afine", "afino", "afiou", "afira", "afiro", "afita", "afite", "afito", "afixa", "afixe", "afixo", "aflai", "aflam", "aflar", "aflas", "aflei", "aflem", "afles", "aflou", "aflua", "aflui", "afluo", "aflu??", "afoba", "afobe", "afobo", "afoco", "afoc??", "afofa", "afofe", "afofo", "afoga", "afogo", "afola", "afole", "afolo", "afora", "afore", "aforo", "afose", "afox??", "afras", "afros", "aftas", "afufo", "afuma", "afume", "afumo", "afune", "afuno", "afun??", "afur??", "afusa", "afuse", "afuso", "af??es", "agabe", "agab??", "agac??", "agado", "agad??", "agage", "agaie", "agaio", "agai??", "agaje", "agajo", "agaj??", "agala", "agale", "agalo", "agama", "agame", "agami", "agane", "agano", "agan??", "agara", "agari", "agar??", "agati", "agava", "agave", "agavo", "agaze", "agazo", "agaz??", "aga??s", "aga??s", "agb??s", "ageia", "agema", "agere", "agero", "ager??", "agiam", "agiar", "agias", "agido", "agimo", "agina", "agira", "agir??", "agita", "agite", "agito", "aglas", "agmar", "agmas", "agmis", "agnal", "agnas", "agnos", "agoga", "agoge", "agog??", "agome", "agomo", "agom??", "agons", "agori", "agote", "agoto", "agot??", "ago??s", "agrai", "agral", "agram", "agrar", "agras", "agraz", "agrei", "agres", "agreu", "agre??", "agror", "agros", "agrou", "agr??o", "agr??m", "aguai", "aguar", "agua??", "aguce", "agude", "aguei", "aguem", "agues", "aguou", "aguti", "agu??a", "agu??o", "aiada", "aiado", "aiaia", "aiais", "aiala", "aiamo", "aiap??", "aiap??", "aiar??", "aiava", "aia????", "aibis", "aic??s", "aidje", "aidos", "aidro", "aieis", "aiemo", "aigue", "ail??s", "ail??s", "aimol", "ainas", "aines", "ainho", "ainos", "ainsa", "ainus", "aioc??", "aiola", "aioro", "aipim", "aipos", "aip??s", "aip??s", "airai", "airam", "airar", "airas", "airei", "airem", "aires", "airis", "airol", "airou", "airu??", "air??o", "air??s", "aisle", "aislo", "aisl??", "aitau", "ait??s", "ait??o", "aiuba", "aiuc??", "aiui??", "aiune", "aiuno", "aiun??", "aiuri", "aiu??s", "aiu??s", "aival", "aiv??o", "aixes", "aizoa", "ai??es", "ajab??", "ajacu", "ajaez", "ajais", "ajaja", "ajame", "ajamo", "ajana", "ajap??", "ajar??", "ajar??", "ajaua", "ajava", "ajeru", "ajipa", "ajob??", "ajoie", "ajoio", "ajoi??", "ajole", "ajuba", "ajuda", "ajude", "ajudo", "ajuga", "ajula", "ajule", "ajulo", "ajupe", "ajup??", "ajuri", "ajuru", "ajuso", "aj??is", "alabo", "alab??", "alab??", "alaco", "alac??", "alada", "alaf??", "alaga", "alago", "alaim", "alais", "alaje", "alajo", "alaj??", "alali", "alal??", "alam??", "alana", "alano", "alapa", "alape", "alapi", "alapo", "alara", "alare", "alaro", "alasa", "alaso", "alaur", "alaus", "alava", "alav??", "alaze", "alazo", "alaz??", "albas", "albis", "albi??", "albor", "albos", "albur", "alb??i", "alcaz", "alcei", "alcem", "alces", "alcos", "aldel", "alde??", "aldol", "aleai", "alear", "alede", "aledo", "aled??", "aleei", "alefe", "alega", "alego", "aleia", "aleie", "aleio", "aleis", "alej??", "aleli", "alelo", "alem??", "alena", "aleou", "alepo", "alese", "aleso", "ales??", "aleta", "aleto", "alev??", "alfai", "alfam", "alfar", "alfas", "alfei", "alfem", "alfes", "alfil", "alfim", "alfir", "alfis", "alfol", "alfos", "alfou", "alfoz", "alfre", "alfur", "algal", "algar", "algaz", "alger", "algia", "algol", "algor", "algos", "algur", "alhal", "alhar", "alhas", "alheo", "alhe??", "alhos", "alhur", "aliai", "aliam", "alias", "aliei", "aliem", "alies", "aligo", "alig??", "alija", "alije", "alijo", "alila", "alilo", "aliou", "alipa", "alipo", "alisa", "alise", "aliso", "aljus", "aljuz", "almez", "almos", "almuz", "alnas", "alnos", "aloca", "aloco", "alod??", "alofe", "aloja", "aloje", "alojo", "alolo", "alona", "alono", "alons", "alose", "alota", "alote", "aloto", "alo??s", "alo??s", "alpes", "alp??o", "alsol", "alter", "alte??", "altim", "altor", "aluai", "aluam", "aluar", "aluas", "aluco", "aluda", "alude", "aludi", "aludo", "aluei", "aluem", "alues", "aluf??", "aluga", "alugo", "aluio", "aluir", "aluiu", "aluj??", "alume", "alumo", "alum??", "alune", "aluns", "aluou", "alupe", "alupo", "alup??", "alute", "aluto", "alut??", "aluxe", "aluxo", "alux??", "aluza", "aluze", "aluzi", "aluzo", "alu??a", "alu??s", "alvar", "alvas", "alves", "alve??", "alvio", "alvor", "alv??o", "al??ai", "al??am", "al??as", "al??ou", "al??uz", "al????o", "al??us", "amaca", "amaci", "amado", "amadu", "amaga", "amais", "amali", "amal??", "amal??", "amame", "amamo", "amamu", "amane", "amano", "aman??", "amap??", "amara", "amare", "amaro", "amar??", "amate", "amato", "amat??", "amava", "ambel", "ambia", "ambie", "ambil", "ambio", "ambir", "ambis", "ambom", "ambo??", "ambre", "ambro", "ambr??", "ambus", "ambu??", "ambu??", "amb??o", "amb??s", "ameai", "amear", "ameba", "ameei", "ameia", "ameie", "ameio", "ameis", "ameju", "amela", "amelo", "amel??", "amemo", "amena", "ameou", "amete", "ame??a", "amial", "amiba", "amibo", "amida", "amide", "amiga", "amigo", "amila", "amilo", "amima", "amime", "amimo", "amina", "amine", "amino", "amins", "amish", "amita", "amite", "amito", "amoie", "amoio", "amoi??", "amoja", "amoje", "amojo", "amola", "amole", "amolo", "amome", "amomo", "amom??", "amone", "amono", "amon??", "amori", "amoro", "amor??", "amota", "amote", "amoto", "amova", "amove", "amovi", "amovo", "ampas", "amuai", "amuam", "amuar", "amuas", "amuca", "amuei", "amuem", "amues", "amuos", "amuou", "amura", "amuri", "amuro", "amur??", "amusa", "amuso", "amux??", "am??ns", "am??es", "anabi", "anab??", "anaco", "anac??", "anac??", "anafa", "anafe", "anafo", "anago", "anag??", "anai??", "anaj??", "anaj??", "aname", "anamo", "anani", "anano", "anan??", "anata", "anate", "anati", "anato", "anau??", "anavi", "ancas", "anceu", "ancha", "anche", "ancho", "ancil", "ancis", "anci??", "ancol", "ancos", "andai", "andam", "andas", "andei", "andem", "andes", "andim", "andoa", "andoe", "andoo", "andor", "andou", "andua", "andus", "and??s", "aneai", "anear", "anebo", "anedo", "aneei", "anega", "anego", "aneia", "aneie", "aneio", "anejo", "anela", "anele", "anelo", "anema", "aneou", "anesa", "anete", "aneto", "anexa", "anexe", "anexo", "aneza", "angas", "anga??", "anga??", "angel", "angla", "anglo", "angor", "angul", "angus", "anhos", "anh??s", "anias", "aniba", "anibu", "anide", "anido", "anid??", "anila", "anile", "anilo", "anima", "anime", "animi", "animo", "anina", "anine", "anino", "anisa", "anise", "aniso", "anita", "anite", "anixi", "anixo", "ani??o", "anj??o", "anoas", "anoia", "anoja", "anoje", "anojo", "anona", "anori", "anosa", "anoso", "anota", "anote", "anoto", "anove", "anovo", "anov??", "ansar", "ansas", "antai", "antal", "antam", "antar", "antas", "antei", "antem", "antia", "antos", "antou", "antre", "antro", "ant??o", "anuam", "anuas", "anua??", "anuem", "anuir", "anuis", "anuiu", "anui??", "anuj??", "anula", "anule", "anulo", "anuns", "anuri", "anuro", "anuus", "anu??a", "anu??s", "anzom", "an??os", "an??ze", "an??zo", "an??z??", "an??is", "aoqui", "aorta", "aotos", "ao??ta", "apaga", "apago", "apaje", "apajo", "apaj??", "apam??", "apana", "apap??", "apara", "apare", "aparo", "apart", "apa??s", "apeai", "apear", "apecu", "apede", "apedo", "aped??", "apeei", "apega", "apego", "apeia", "apeie", "apeio", "apeje", "apejo", "apej??", "apela", "apele", "apelo", "apena", "apene", "apeno", "apeou", "apera", "apere", "apero", "aperu", "apet??", "apia??", "apicu", "apine", "apino", "apin??", "apiol", "apipa", "apipe", "apipo", "apita", "apite", "apito", "apitu", "apit??", "api??o", "apoas", "apoda", "apofe", "apoia", "apoie", "apoio", "apois", "apoja", "apoje", "apojo", "apolo", "apor??", "apota", "apraz", "apres", "apre??", "aproa", "aproe", "aproo", "aptai", "aptam", "aptar", "aptas", "aptei", "aptem", "aptes", "aptos", "aptou", "apuai", "apuam", "apuar", "apuas", "apuei", "apuem", "apues", "apui??", "apule", "apuou", "apupa", "apupe", "apupo", "apura", "apure", "apuro", "apu??s", "ap??em", "ap??es", "aqueu", "aqu??m", "arabi", "arabu", "arab??", "araci", "aracu", "arada", "arade", "arado", "arais", "arai??", "arai??", "arai??", "arale", "aramo", "aram??", "aran??", "arapu", "arara", "arari", "arati", "aratu", "arat??", "araus", "arau??", "arau??", "arava", "aravo", "arax??", "araza", "ara????", "arbim", "arcai", "arcal", "arcam", "arcas", "arcaz", "archa", "arch??", "arcou", "arcte", "arcto", "arct??", "arcue", "arcuo", "arcu??", "ardam", "ardas", "ardei", "ardem", "ardes", "ardeu", "ardia", "ardil", "ardis", "ardra", "areai", "arear", "areca", "ared??", "areei", "areie", "areio", "areis", "areja", "areje", "arejo", "arelo", "aremo", "arene", "areno", "areol", "areou", "arepa", "arer??", "aretu", "are??o", "arfai", "arfam", "arfar", "arfas", "arfei", "arfem", "arfes", "arfil", "arfir", "arfis", "arfou", "arfur", "argal", "argas", "argau", "argel", "argol", "argos", "argot", "argua", "argue", "argui", "arguo", "arg??o", "arg??m", "ariai", "ariam", "ariar", "arib??", "aricu", "aric??", "ariei", "ariem", "arife", "arig??", "arila", "arilo", "arimo", "arim??", "arin??", "ariou", "aripa", "aripe", "aripo", "ariri", "arite", "ariti", "arito", "arit??", "arjoe", "arjoo", "arjoz", "arjo??", "arj??o", "armai", "armam", "armas", "armei", "armem", "armes", "armim", "armio", "armou", "armum", "armur", "arm??o", "arm??u", "arnal", "arnaz", "arnis", "arn??s", "aroc??", "arola", "arolo", "arome", "aromo", "aroto", "arpai", "arpam", "arpar", "arpas", "arpei", "arpem", "arpes", "arpe??", "arpoa", "arpoe", "arpoo", "arpou", "arpua", "arpue", "arpuo", "arp??o", "arp??u", "arque", "arqui", "arral", "array", "arra??", "arrer", "arres", "arreu", "arre??", "arria", "arrie", "arrio", "arri??", "arros", "arrue", "arruo", "arru??", "arru??", "arr??s", "arses", "arsos", "artro", "art??o", "arua??", "arua??", "arub??", "aruca", "aruga", "arujo", "arum??", "arupa", "aruru", "arur??", "aruto", "aru??s", "aru??s", "arval", "arvas", "arvoa", "arvoe", "arvoo", "arxai", "arxam", "arxar", "arxas", "arxei", "arxem", "arxes", "arxou", "arzel", "ar????o", "ar??us", "ar??es", "asada", "asado", "asais", "asamo", "asana", "asara", "asase", "asava", "ascal", "ascos", "ascra", "ascue", "ascuo", "asc??s", "aseia", "aseis", "aselo", "asemo", "aseno", "aseus", "asiam", "asida", "asido", "asila", "asile", "asilo", "asimo", "asira", "asmas", "asmos", "asnai", "asnal", "asnam", "asnar", "asnas", "asnei", "asnem", "asnes", "asne??", "asnil", "asnis", "asnos", "asnou", "aspai", "aspam", "aspar", "aspei", "aspem", "aspes", "aspe??", "aspou", "aspra", "aspre", "assai", "assam", "assas", "assaz", "assei", "assem", "asses", "asse??", "assis", "assoa", "assoe", "assoo", "assou", "assue", "assuo", "assu??", "astil", "astim", "astis", "astra", "astre", "asura", "atabi", "ataca", "ataco", "atada", "atado", "atag??", "atais", "atal??", "atame", "atamo", "atam??", "atane", "atano", "atan??", "atapu", "atara", "atar??", "atar??", "atava", "ateai", "atear", "ateco", "ateei", "ateia", "ateie", "ateio", "ateis", "atela", "atemo", "ateou", "atero", "ater??", "atesa", "atese", "ateso", "ateus", "ateve", "atibe", "atibo", "atib??", "atice", "atida", "atido", "atile", "atilo", "atina", "atine", "atino", "atins", "atira", "atire", "atiro", "atita", "atite", "atito", "ativa", "ative", "ativo", "ati??s", "ati??a", "ati??o", "ati??u", "ati??s", "atled", "atoai", "atoam", "atoar", "atoas", "atob??", "atoei", "atoem", "atoes", "atof??", "atola", "atole", "atolo", "atone", "atoou", "atope", "atopo", "atop??", "atora", "atore", "atori", "atoro", "atot??", "atrai", "atra??", "atril", "atris", "atroa", "atroe", "atroo", "atros", "atuai", "atuam", "atuas", "atubo", "atuei", "atuem", "atues", "atufa", "atufe", "atufo", "atuir", "atuiu", "atuma", "atuns", "atuou", "atupa", "atupi", "atupo", "atura", "ature", "aturo", "atur??", "atuso", "atu??a", "atu??s", "atxim", "at??ns", "at??is", "auai??", "auari", "auati", "aua??u", "aua??s", "audaz", "aueti", "aueto", "auet??", "aufu??", "augai", "augam", "augar", "augas", "auges", "augir", "augiu", "augou", "augue", "auiba", "auina", "auiti", "aujos", "aulam", "aulem", "auleu", "aulia", "aulir", "auliu", "aulos", "aunai", "aunam", "aunar", "aunas", "aunei", "aunem", "aunes", "aunou", "aurai", "aural", "auram", "aurar", "auras", "aurei", "aurem", "aures", "auria", "aurir", "auris", "auriu", "aurou", "ausco", "ausia", "ausio", "ausos", "austo", "aust??", "aus??o", "autua", "autue", "autuo", "auuva", "auxia", "au????s", "au????o", "avac??", "avais", "avai??", "avale", "avalo", "aval??", "avana", "avano", "avant", "avari", "avaro", "avar??", "avar??", "avate", "avati", "avato", "avat??", "aveal", "aveio", "avele", "avelo", "avena", "aveus", "avexa", "avexe", "avexo", "aveza", "aveze", "avezo", "ave??o", "aviai", "aviam", "aviar", "avias", "avide", "aviei", "aviem", "avier", "avies", "avile", "avilo", "avimo", "avios", "aviou", "avir??", "avisa", "avise", "aviso", "avita", "avito", "avium", "aviva", "avive", "avivo", "avi??s", "avoai", "avoam", "avoar", "avoas", "avoca", "avoco", "avoei", "avoem", "avoes", "avoou", "avosa", "avose", "avoso", "avo??o", "av??ns", "awuna", "axab??", "axex??", "axial", "axina", "axino", "axiri", "axox??", "axura", "axu??s", "azabe", "azada", "azado", "azaga", "azaia", "azais", "azal??", "azamo", "azapa", "azara", "azare", "azaro", "azav??", "azeda", "azede", "azedo", "azegi", "azeis", "azemo", "azera", "azere", "azeri", "azero", "azev??", "aziar", "azias", "azib??", "azida", "azina", "azoai", "azoam", "azoar", "azoas", "azoei", "azoem", "azoes", "azola", "azoma", "azono", "azoou", "azota", "azote", "azoto", "azubo", "azuis", "azula", "azule", "azulo", "azure", "azuro", "azuru", "azur??", "az??is", "a??acu", "a??al??", "a??ame", "a??amo", "a??ape", "a??apo", "a??ap??", "a??a??s", "a??obe", "a??obo", "a??ob??", "a??oca", "a??oda", "a??odo", "a??ora", "a??ub??", "a??uda", "a??ula", "a??ule", "a??ulo", "a??umi", "a??neo", "a??vas", "a??oli", "a??nia", "a??nio", "a??nos", "a??ste", "baais", "baali", "baaus", "babai", "babal", "babam", "babas", "babau", "babei", "babel", "babem", "baber", "babes", "babe??", "babi??", "bable", "babl??", "babou", "babua", "babul", "babus", "babu??", "bab??s", "bab??o", "bacaa", "bacal", "bacar", "bachi", "bacie", "bacio", "bacta", "bacus", "bac??o", "badal", "badas", "badil", "badio", "badis", "bador", "badua", "bad??m", "bad??s", "bad??s", "baeco", "bael??", "baen??", "baeta", "bafai", "bafam", "bafar", "bafas", "bafei", "bafem", "bafes", "bafio", "bafos", "bafou", "bafum", "bagai", "bagam", "bagar", "bagas", "bagem", "bages", "bage??", "bagis", "bagoe", "bagoo", "bagos", "bagou", "bagre", "bague", "bagus", "bagu??", "bahia", "baiai", "baiam", "baiar", "baias", "baia??", "baibe", "baico", "baic??", "baiei", "baiem", "baies", "baila", "baile", "bailo", "baios", "baiou", "baire", "bairi", "bairu", "bair??", "baite", "baixa", "baixe", "baixo", "bai??o", "bajai", "bajam", "bajar", "bajas", "bajei", "bajem", "bajes", "baje??", "bajia", "bajou", "bajus", "balam", "balar", "balau", "balba", "balbo", "balda", "baldo", "balem", "bales", "bale??", "balga", "balha", "balhe", "balho", "balia", "balim", "balio", "balir", "balis", "baliu", "baloe", "baloo", "balou", "balo??", "balse", "balso", "balta", "balto", "bal??a", "bal??o", "bambo", "bamb??", "bames", "banam", "banar", "banas", "banca", "banco", "bande", "banem", "banes", "banga", "bango", "bangs", "bangu", "banha", "banhe", "banho", "bania", "banis", "baniu", "banja", "bans??", "banti", "banto", "bantu", "bant??", "bant??", "banza", "banzo", "banz??", "baob??", "bapos", "bapta", "bapte", "bara??", "barbe", "barbi", "barbo", "barda", "barde", "bardo", "barga", "bargu", "baria", "baril", "barim", "baris", "barma", "baroa", "barol", "baros", "barra", "barre", "barri", "barro", "barsi", "bars??", "barus", "bar??m", "basai", "basal", "basam", "basar", "basas", "basca", "basei", "basem", "bases", "base??", "basic", "basim", "basou", "basso", "bass??", "basta", "baste", "basti", "basto", "basua", "batam", "batas", "batch", "batei", "batel", "batem", "bates", "bateu", "batia", "batim", "batmo", "batos", "bat??s", "bat??o", "bauis", "bauma", "baum??", "bauru", "bau??s", "bav??s", "baxim", "baxis", "bax??s", "bazas", "bazos", "baz??s", "ba??as", "ba??os", "ba??le", "ba??na", "beab??", "beach", "bebam", "bebas", "bebei", "bebem", "bebes", "bebeu", "bebra", "bebum", "becas", "beche", "becos", "bedel", "bede??", "bedro", "bedum", "bedu??", "bed??o", "bed??m", "befes", "bef??s", "begb??", "begue", "begum", "beias", "beice", "beige", "beija", "beije", "beiji", "beijo", "beiju", "beira", "beire", "beiro", "beiru", "beisa", "bei??a", "bei??o", "bejas", "bejel", "bejes", "bejis", "belau", "belaz", "belde", "beldo", "beld??", "belfa", "belfo", "belga", "belho", "beliz", "belro", "bel??o", "bel??m", "bel??s", "bemas", "bemba", "bembe", "bemol", "benas", "benco", "bencu", "benda", "bendi", "bend??", "bend??", "benga", "benge", "bengo", "benh??", "benim", "benos", "benta", "bento", "benza", "benze", "benzi", "benzo", "ben??a", "beola", "beque", "beras", "berba", "berbe", "berce", "berda", "beres", "bergo", "berma", "berna", "berne", "berno", "berol", "bero??", "berra", "berre", "berro", "berta", "berus", "ber??a", "ber??u", "ber??s", "bespa", "bespe", "bessi", "besso", "beste", "besto", "betai", "betal", "betam", "betar", "betas", "betei", "betem", "betes", "betle", "betol", "betom", "betou", "betre", "betsi", "betum", "betus", "bet??o", "bet??i", "bevos", "bezar", "bezau", "bezoa", "bezoe", "bezoo", "be??ns", "biaba", "biaco", "biais", "biami", "biana", "biari", "biaro", "biata", "bibas", "bibes", "bibis", "bibi??", "bibi??", "bibl??", "bibos", "bibra", "bib??i", "bicai", "bical", "bicam", "bicar", "bicas", "bicha", "biche", "bicou", "bicus", "bic??o", "bidas", "bidum", "bidus", "bid??o", "bid??s", "bid??s", "biela", "biene", "bieno", "bifai", "bifam", "bifar", "bifas", "bifei", "bifem", "bifes", "bifou", "bifre", "bifus", "bigas", "bigla", "bigle", "bigue", "bigus", "bigu??", "bijou", "bijus", "biju??", "bilai", "bilam", "bilar", "bilas", "bilei", "bilem", "biles", "bilha", "bilh??", "bilm??", "bilou", "bilra", "bilre", "bilro", "bilva", "bimar", "bimba", "bimbe", "bimbo", "bimes", "bimos", "bim??o", "binai", "binam", "binar", "binas", "binda", "binde", "binei", "binem", "bines", "binga", "binha", "bini??", "binou", "bioba", "bioco", "biose", "biota", "bipai", "bipam", "bipar", "bipas", "bipei", "bipem", "bipes", "bipou", "bique", "biras", "birba", "birgo", "biris", "birm??", "birre", "birro", "birus", "bir??o", "bir??s", "bisai", "bisam", "bisar", "bisas", "bisbi", "bisca", "bisco", "bisei", "bisel", "bisem", "bises", "bisga", "bisma", "bisou", "bispa", "bispe", "bisso", "bis??o", "bitai", "bitam", "bitar", "bitas", "bitei", "bitem", "bites", "bitou", "bitre", "bitro", "bitr??", "biur??", "bivas", "bixas", "bizas", "bizer", "bizus", "black", "blast", "blas??", "blata", "blaus", "blefa", "blefe", "blefo", "blend", "bleno", "blesa", "bleso", "blini", "blitz", "bloca", "blogs", "bluca", "bluco", "blues", "blufo", "blush", "boaba", "boada", "boado", "boais", "boamo", "boana", "boane", "boara", "boari", "boata", "boava", "boa??o", "bobal", "bobam", "bobar", "bobas", "boba??", "bobei", "bobem", "bobes", "bobe??", "bobos", "bobou", "bob??o", "bocai", "bocam", "bocar", "bocei", "bocel", "bocem", "boces", "bocha", "boche", "bocho", "bocim", "bocoa", "bocou", "bocu??", "boc??o", "boc??s", "bodai", "bodam", "bodar", "bodas", "bodei", "bodem", "bodes", "bodis", "bodou", "bodum", "bod??o", "bod??s", "boeio", "boeis", "boemo", "boeta", "bofai", "bofam", "bofar", "bofas", "bofei", "bofem", "bofes", "bofou", "bof??s", "bogai", "bogam", "bogar", "bogas", "bogou", "bogue", "bogum", "bog??s", "boiai", "boiam", "boiar", "boias", "boibi", "boice", "boiei", "boiem", "boies", "boiga", "boiil", "boiis", "boim??", "boios", "boiou", "boire", "boiro", "boiru", "boir??", "boita", "boite", "boi??o", "boi??a", "boi??o", "boi??u", "bojai", "bojam", "bojar", "bojas", "bojei", "bojem", "bojes", "bojos", "bojou", "boju??", "boj??o", "bolai", "bolam", "bolar", "bolas", "bolbo", "bolce", "bolco", "boldo", "bolei", "bolem", "boles", "bole??", "bolgo", "bolhe", "bolh??", "bolim", "bolis", "bolor", "bolou", "bolse", "bol??o", "bol??a", "bol??u", "bomas", "bombe", "bombo", "bonce", "bonda", "bondi", "bondo", "bonga", "bonge", "bong??", "bonhe", "bonho", "bonh??", "bonjo", "bonza", "bonze", "bonzo", "bon??o", "bon????", "boons", "boope", "boor??", "boque", "boral", "borca", "borco", "borda", "borde", "bordo", "bores", "borga", "borgo", "borla", "borna", "borne", "borno", "bornu", "boroa", "boros", "borra", "borre", "borro", "bor??s", "bosas", "bosca", "bose??", "bosis", "bosse", "bosso", "bosta", "boste", "bosto", "bos??o", "bos??s", "botai", "botal", "botam", "botas", "botei", "botem", "botes", "botim", "boti??", "botoe", "botoo", "botos", "botou", "boto??", "bouba", "bouce", "bouda", "bouga", "boure", "bouri", "bouro", "bour??", "bou??a", "bou??o", "boxai", "boxam", "boxar", "boxas", "boxei", "boxem", "boxes", "boxe??", "boxou", "bozum", "boz??s", "bo??us", "bo??la", "bo??lo", "braba", "brabe", "brabo", "brada", "brade", "brado", "braga", "braia", "brais", "braj??", "brala", "brama", "brame", "brami", "bramo", "brase", "braso", "braus", "brave", "bra??a", "brcas", "breai", "break", "breal", "brear", "breba", "breca", "breco", "breda", "bredo", "breei", "brefa", "brefo", "breia", "breie", "breio", "breja", "brema", "breou", "brete", "bret??", "breus", "breva", "breza", "brezo", "brial", "brias", "briba", "brica", "brida", "bride", "brido", "bries", "briga", "brigo", "brins", "briol", "brios", "brise", "briso", "brita", "brite", "brito", "brive", "briza", "broas", "broca", "broco", "broda", "brole", "brolo", "brol??", "broma", "brome", "bromo", "brota", "brote", "broto", "brown", "broxa", "broxe", "broxo", "bruar", "brua??", "bruco", "brugo", "bruma", "brume", "brumo", "bruna", "brune", "bruni", "bruno", "bruxe", "bru??u", "br??ea", "br??on", "buada", "buais", "buala", "buama", "buana", "buano", "buara", "buase", "buava", "bua??u", "bubal", "bubis", "bubos", "bubus", "bub??o", "bub??s", "buchu", "bucil", "bucim", "bucis", "bucle", "bucre", "bucus", "bucu??", "bucu??", "buc??s", "budas", "budoe", "budoo", "budo??", "budus", "buena", "bueno", "bueta", "buete", "bufai", "bufam", "bufar", "bufas", "bufei", "bufem", "bufes", "bufia", "bufir", "bufiu", "bufos", "bufou", "bufra", "buggy", "bugia", "bugie", "bugio", "bugle", "bugra", "bugre", "buir??", "bujas", "bujis", "buj??o", "buj??s", "bulai", "bulam", "bular", "bulas", "buldo", "bulei", "bulem", "bules", "bulha", "bulhe", "bulho", "bulia", "bulio", "bulir", "bulis", "buliu", "bulou", "bumba", "bumbe", "bumbo", "bumes", "bunas", "bunce", "bunde", "bundo", "bunga", "bungo", "bunhe", "bunho", "bunh??", "buqu??", "burca", "burdo", "burel", "burgo", "burg??", "buril", "buris", "burla", "burle", "burlo", "burna", "burne", "burni", "burnu", "burn??", "buros", "burre", "bursa", "burum", "burus", "buru??", "bur??o", "bur??o", "bur??s", "busca", "busco", "busil", "busis", "busos", "busso", "butai", "butam", "butar", "butas", "butau", "butei", "butem", "butes", "butil", "butim", "butir", "butis", "buti??", "butos", "butou", "butre", "butua", "buuno", "buvar", "buvas", "buxal", "buxos", "buzas", "buzia", "buzie", "buzis", "buzos", "buzus", "bu??os", "bu??ns", "bu??am", "bu??as", "bu??da", "bu??do", "bu??ge", "bu??lo", "bytes", "b??cis", "b??dur", "b??fer", "b??fia", "b??goa", "b??lia", "b??rio", "b??sio", "b??sis", "b??tis", "b??mbi", "b??mia", "b??nia", "b??nua", "b??cua", "b??gua", "b??lia", "b??lio", "b??lis", "b??lua", "b??lus", "b??ris", "b??rix", "b??tel", "b??tis", "b??nia", "b??cia", "b??duo", "b??guo", "b??lia", "b??lis", "b??ter", "b??tio", "b??tis", "b??vio", "b??bis", "b??cio", "b??fia", "b??rax", "b??son", "b??ton", "b??xer", "b??ers", "b??fri", "b??tea", "b??teo", "b??tio", "b??zio", "caaba", "caac??", "caae??", "caaia", "caama", "caami", "caapi", "caaxi", "caa??u", "cabal", "cabas", "cabaz", "caba??", "cabei", "cabem", "cabes", "cabe??", "cabia", "cabis", "cabi??", "cabla", "cable", "cablo", "caboz", "cabre", "cabro", "cabur", "cabus", "cabu??", "cacei", "cacem", "caces", "cacha", "cache", "cachi", "cachu", "cacim", "caciz", "cacre", "cacto", "cacus", "cadai", "cadas", "cades", "cade??", "cados", "cadoz", "cadu??", "caet??", "cafal", "cafeo", "cafiz", "cafra", "cafre", "cafta", "cafua", "cafus", "cafuz", "cagai", "cagam", "cagar", "cagas", "cagom", "cagou", "cago??", "cague", "cag??o", "caiai", "caiam", "caiar", "caias", "caiba", "caibo", "caic??", "caide", "caiei", "caiem", "caies", "caiou", "caipa", "cairi", "cairo", "cair??", "cair??", "cait??", "cait??", "caiu??", "caiu??", "caixe", "cai??u", "cai????", "cajus", "caju??", "caju??", "caj??s", "caj??o", "calai", "calam", "calas", "calau", "calca", "calce", "calco", "calei", "calem", "cales", "cale??", "calfe", "calha", "calhe", "calho", "calim", "calis", "caliz", "calme", "calom", "calos", "calou", "calpa", "calpo", "calta", "calua", "calum", "calus", "calve", "cal??o", "cal??a", "cal??o", "camal", "camar", "camau", "cama??", "camba", "cambe", "cambo", "came??", "camim", "camol", "campa", "campi", "camp??", "camu??", "cam??o", "cam??s", "canas", "canaz", "canc??", "canda", "cande", "cando", "canez", "cane??", "canga", "cango", "cangu", "canha", "canho", "canis", "canje", "canjo", "canos", "cano??", "cansa", "canse", "canso", "canta", "cante", "canto", "cant??", "canvi", "canvo", "canzo", "canz??", "caoba", "caobi", "caoco", "caori", "capai", "capam", "capar", "capas", "capei", "capem", "capes", "capi??", "capom", "capou", "capro", "capsa", "capso", "capta", "capte", "capto", "caput", "cap??o", "cap??s", "caral", "carda", "carde", "cardi", "cardo", "carel", "care??", "caria", "caril", "caris", "cariz", "cari??", "cari??", "cari??", "carme", "carmo", "carna", "carno", "caro??", "caro??", "carpe", "carpi", "carpo", "carra", "carri", "carr??", "carte", "carto", "caru??", "carva", "carvi", "car??o", "car??s", "car??u", "casai", "casam", "casas", "casb??", "casei", "casem", "cases", "case??", "casou", "cassa", "casse", "casso", "casti", "casto", "cas??o", "catai", "catam", "catas", "catau", "catch", "catei", "catem", "cates", "cate??", "catim", "catis", "catle", "catou", "catre", "catur", "catu??", "cat??o", "caubi", "cauim", "caul??", "caum??", "cauna", "caupi", "cauri", "caur??", "causa", "cause", "causo", "cauta", "cauto", "cauxi", "cau??s", "cau??s", "cavai", "cavam", "cavas", "cavei", "cavem", "caves", "cavie", "cavio", "cavis", "cavou", "cavum", "cavus", "cav??o", "caxas", "caxes", "caxim", "caxos", "caxu??", "cax??o", "cazol", "ca??ai", "ca??am", "ca??as", "ca??oa", "ca??oe", "ca??oo", "ca??ou", "ca??u??", "ca??am", "ca??as", "ca??ba", "ca??do", "ca??mo", "ca??ra", "ca??va", "ca??is", "ca??ba", "ca??no", "ceada", "ceado", "ceais", "ceamo", "ceara", "cear??", "ceata", "ceava", "cebar", "cebas", "cebos", "cecal", "cecas", "cece??", "cecos", "cec??m", "cec??s", "cedam", "cedas", "cedei", "cedem", "cedes", "cedeu", "cedia", "ced??m", "ceeis", "ceemo", "cefeu", "cefos", "cegai", "cegam", "cegar", "cegas", "cegou", "cegue", "ceiam", "ceias", "ceiba", "ceibo", "ceiem", "ceies", "ceifa", "ceife", "ceifo", "ceira", "ceita", "ceiva", "ceive", "ceivo", "celas", "celga", "celha", "cello", "celos", "celsa", "celso", "celte", "celve", "celvo", "celv??", "cel??s", "cemba", "cenes", "cengo", "cenho", "ceniz", "cenos", "cenra", "centi", "ceoma", "ceomo", "ceote", "ceoto", "ceot??", "cepas", "cepos", "ceque", "cerai", "ceram", "cerar", "ceras", "cerca", "cerce", "cerco", "cerda", "cerdo", "cerei", "cerem", "ceres", "cerge", "cergi", "cerja", "cerjo", "cerna", "cerni", "cerno", "cerol", "cerou", "cerra", "cerre", "cerro", "certe", "cerus", "cerva", "cerze", "cerzi", "cer??s", "cesos", "cessa", "cesse", "cesso", "cetal", "cetas", "cetil", "cetis", "cetol", "cetos", "cetra", "cevai", "cevam", "cevar", "cevas", "cevei", "cevem", "ceves", "cevou", "cev??o", "ce????o", "chabu", "chab??", "chab??", "chace", "chada", "chaga", "chago", "chais", "chai??", "chaj??", "chala", "chalo", "chama", "chame", "chamo", "chana", "chans", "chape", "chapo", "chara", "charo", "charu", "chat??", "chaus", "chau??", "chavo", "cha??a", "cha??o", "cha??m", "cheb??", "checa", "checo", "cheda", "chede", "chefa", "chega", "chego", "chela", "chena", "chepe", "cheta", "cheto", "chev??", "chiai", "chiam", "chiar", "chias", "chiba", "chibo", "chib??", "chica", "chice", "chico", "chicu", "chiei", "chiem", "chies", "chifu", "chila", "chile", "chili", "chilo", "chima", "chimu", "china", "chine", "chino", "chins", "chiou", "chipa", "chipo", "chips", "chira", "chiru", "chita", "chite", "chito", "chius", "chiu??", "chi??o", "choca", "choco", "chog??", "chois", "chola", "chole", "cholo", "chona", "chono", "chon??", "chopa", "chope", "chopi", "chopp", "chora", "chore", "choro", "chota", "chote", "choti", "choto", "chova", "chove", "chovi", "chovo", "cho??a", "chuce", "chufa", "chufe", "chufo", "chuis", "chula", "chulo", "chul??", "chuna", "chupa", "chupe", "chupo", "churi", "chuta", "chute", "chuto", "chuxo", "chu??s", "chu??a", "chu??o", "chu??s", "ch??os", "ch??es", "ciada", "ciado", "ciais", "ciamo", "ciana", "ciano", "ciara", "ciato", "ciava", "cibai", "cibam", "cibar", "cibas", "cibei", "cibem", "ciber", "cibes", "ciboa", "cibou", "cibum", "cicas", "cicia", "cicie", "cicio", "cicla", "cicro", "cides", "cidno", "cidra", "cidr??", "cid??o", "cid??s", "cieis", "ciemo", "ciena", "ciese", "cifai", "cifam", "cifar", "cifas", "cifei", "cifem", "cifes", "cifos", "cifou", "cifra", "cifre", "cifro", "cif??o", "cigas", "cigno", "cilas", "cileu", "cilha", "cilhe", "cilho", "cilos", "cimas", "cimba", "cimbi", "cimb??", "cimno", "cimol", "cimos", "cimue", "cim??s", "cinas", "cinca", "cinda", "cinde", "cindi", "cindo", "cines", "cinge", "cingi", "cinja", "cinjo", "cinor", "cinte", "cinze", "cinzo", "cioba", "cioco", "ciona", "ciosa", "cioso", "cioto", "cipoa", "cipoe", "cipoo", "cip??s", "ciras", "cirba", "cirna", "cirno", "cirpo", "cirro", "cirso", "cirto", "cirza", "cirze", "cirzo", "cir??o", "cisai", "cisam", "cisar", "cisas", "cisca", "cisco", "cisei", "cisel", "cisem", "cises", "cisma", "cisme", "cismo", "cisou", "cispe", "cispo", "cisp??", "cisso", "cista", "ciste", "cis??o", "citai", "citam", "citas", "citei", "citem", "cites", "citeu", "citna", "citou", "citro", "ciuma", "ciumo", "cizel", "ci??es", "ci??ro", "clada", "clade", "clado", "clama", "clame", "clamo", "clape", "claus", "clava", "clavo", "clean", "clear", "clena", "clica", "clico", "clida", "clide", "clina", "cline", "clino", "clipo", "clips", "clip??", "clise", "cliso", "clis??", "clita", "cliva", "clive", "clivo", "cloca", "cloco", "clona", "clono", "clora", "clore", "clori", "close", "cloto", "clown", "clusa", "cluso", "cluva", "cnico", "cnute", "coaco", "coada", "coado", "coage", "coagi", "coais", "coaja", "coajo", "coala", "coale", "coamo", "coara", "coar??", "coate", "coati", "coato", "coat??", "coava", "coaxa", "coaxe", "coaxi", "coaxo", "cobas", "cobol", "cobos", "cobra", "cobre", "cobri", "cobro", "cob??i", "cocal", "cocas", "cocei", "cocem", "coces", "cocha", "coche", "cocho", "cocoa", "cocos", "cocre", "cocta", "cocto", "coc??o", "codal", "codas", "codos", "codr??", "cod??s", "coeis", "coemo", "coera", "coere", "coeri", "coero", "coesa", "coeva", "coevo", "cofap", "cofie", "cofi??", "cofos", "cogei", "cogem", "coger", "coges", "cogeu", "cogie", "cogio", "coias", "coibi", "coice", "coifa", "coife", "coifo", "coima", "coime", "coimo", "coina", "coine", "coino", "coins", "coiol", "coipu", "coira", "coiro", "coise", "coiso", "coita", "coite", "coito", "coi??s", "cojam", "cojas", "colai", "colam", "colas", "colau", "colco", "colei", "colem", "coles", "cole??", "colga", "colgo", "colha", "colhe", "colhi", "colho", "colim", "colir", "colma", "colme", "colmo", "colom", "color", "colos", "colou", "colpo", "colte", "colto", "colt??", "colv??", "colza", "comam", "comas", "comba", "combe", "combi", "combo", "comei", "comem", "comes", "comeu", "comia", "comil", "comis", "comp??", "comua", "com??o", "conas", "conca", "conce", "conda", "condi", "condo", "cones", "confa", "conga", "conha", "conho", "conio", "conja", "conos", "conta", "conte", "conto", "con??o", "cooba", "coobe", "coobo", "copai", "copal", "copam", "copar", "copei", "copel", "copem", "copes", "copia", "copie", "copio", "copla", "copou", "copra", "copro", "copta", "copte", "copto", "copus", "cop??o", "coque", "corai", "coram", "coras", "cordo", "corei", "corem", "cores", "coreu", "core??", "corga", "corgo", "coria", "coril", "corla", "cormo", "corna", "corne", "coroa", "coroe", "coroo", "coros", "corou", "corra", "corre", "corri", "corro", "corr??", "corsa", "corso", "corta", "corte", "corti", "corto", "corus", "corva", "cor??o", "cor??a", "cor??o", "cosam", "cosas", "cosca", "cosco", "cosec", "cosei", "cosem", "coser", "coses", "coseu", "cosia", "cospe", "cossa", "cossi", "cosso", "costo", "cotai", "cotam", "cotar", "cotas", "cotei", "cotem", "cotes", "cotia", "cotie", "cotil", "cotim", "cotio", "cotis", "cotom", "cotos", "cotou", "cotra", "cot??o", "coube", "couce", "couco", "coulo", "couma", "coup??", "coura", "cousa", "couse", "couso", "couta", "coute", "couto", "couvo", "couv??", "couzo", "cou??a", "coval", "covas", "cover", "cove??", "covil", "covis", "covos", "covo??", "covus", "cov??o", "coxal", "coxes", "coxe??", "coxia", "coxim", "coxos", "cox??o", "cozam", "cozas", "cozei", "cozem", "cozer", "cozes", "cozeu", "cozia", "co??ai", "co??am", "co??as", "co??ou", "co??ba", "co??be", "co??bo", "craca", "crack", "crada", "crap??", "crato", "crau??", "crava", "crave", "cravo", "crawl", "creca", "creda", "crede", "creek", "creem", "crega", "creia", "creio", "crei??", "crej??", "crela", "crele", "crelo", "crema", "creme", "cremo", "crena", "crene", "creno", "crera", "crer??", "creta", "crete", "creto", "creve", "criai", "criam", "crias", "crica", "crico", "crida", "crido", "criei", "criem", "cries", "crila", "crina", "crino", "criou", "criso", "cris??", "crito", "criva", "crive", "crivo", "croas", "croca", "croce", "croco", "croia", "croio", "croma", "crome", "cromo", "crono", "crons", "cross", "crota", "croxa", "cruas", "cruca", "cruda", "crude", "crudo", "cruga", "crume", "cruor", "crupe", "cruro", "cruta", "cruto", "cruza", "cruze", "cruzo", "cru??s", "cru??s", "ctena", "cuaca", "cuada", "cuaga", "cuais", "cuaje", "cuale", "cualo", "cuane", "cuapa", "cuar??", "cuati", "cuat??", "cuaxi", "cubai", "cubal", "cubam", "cubar", "cubas", "cubei", "cubem", "cubeo", "cubes", "cubis", "cubi??", "cubi??", "cubla", "cubou", "cubra", "cubre", "cubro", "cubus", "cucai", "cucal", "cucam", "cucar", "cucas", "cucho", "cuch??", "cucis", "cucos", "cucou", "cucri", "cucus", "cudas", "cudes", "cudos", "cudus", "cudzu", "cueba", "cuele", "cuena", "cuera", "cufai", "cufam", "cufar", "cufas", "cufei", "cufem", "cufes", "cufou", "cugar", "cugie", "cugio", "cugi??", "cuias", "cuiba", "cuida", "cuide", "cuido", "cuile", "cuilo", "cuil??", "cuini", "cuins", "cuip??", "cuit??", "cuit??", "cuit??", "cui??o", "cui??s", "cujas", "cujes", "cujie", "cujio", "cuji??", "cujus", "culas", "culco", "culc??", "cules", "culis", "culna", "culpa", "culpe", "culpo", "cuma??", "cumba", "cumbo", "cumbu", "cumb??", "cumes", "cumim", "cump??", "cum??s", "cunau", "cunca", "cunco", "cunha", "cunhe", "cunho", "cunos", "cunta", "cunto", "cun??s", "cuoze", "cuozo", "cuoz??", "cupas", "cupa??", "cupez", "cupio", "cupis", "cupus", "cup??o", "cup??s", "cuque", "curai", "curam", "curas", "curau", "curca", "curda", "curdo", "curei", "curem", "cures", "curie", "curii", "curis", "curi??", "curou", "curra", "curre", "curro", "curry", "cursa", "curse", "curso", "curta", "curte", "curti", "curto", "curul", "curu??", "curva", "curve", "curvo", "cur??o", "cur??s", "cusco", "cuscu", "cusma", "cuspa", "cuspe", "cuspi", "cuspo", "cusso", "custa", "custe", "custo", "cutas", "cutes", "cutia", "cutim", "cuti??", "cutra", "cut??o", "cuvas", "cuvus", "cuxi??", "cuxus", "cux??s", "cu??ca", "cu??ce", "cu??ne", "cu??ra", "c??cea", "c??dis", "c??lix", "c??pea", "c??pua", "c??rus", "c??vea", "c??via", "c??ndi", "c??ngi", "c??non", "c??bio", "c??bus", "c??cum", "c??lea", "c??leo", "c??lia", "c??lio", "c??rea", "c??reo", "c??ria", "c??rio", "c??ris", "c??sar", "c??sio", "c??nio", "c??nis", "c??rio", "c??vel", "c??ana", "c??ano", "c??bio", "c??bua", "c??bus", "c??chi", "c??deo", "c??dex", "c??dio", "c??don", "c??d??o", "c??fea", "c??fia", "c??gia", "c??leo", "c??lia", "c??lio", "c??lis", "c??lua", "c??rio", "c??ris", "c??xis", "c??dea", "c??mea", "c??mio", "c??bio", "c??cio", "c??dia", "c??fea", "c??fia", "c??lea", "c??leo", "c??lex", "c??mel", "c??mis", "c??nea", "c??neo", "c??nia", "c??ria", "c??ter", "c??tis", "dabio", "dabom", "dabos", "dabua", "dabus", "dab??s", "dacar", "daces", "dacha", "dacma", "dacoa", "dacos", "dacpo", "dadas", "dador", "dad??o", "dafne", "dagas", "daime", "dairo", "dai??o", "dalai", "dalas", "dalgo", "dal??m", "damba", "dambe", "dambi", "damos", "dampa", "damui", "dam??o", "danai", "danam", "danar", "danas", "dance", "danda", "dando", "danei", "danem", "danes", "danou", "dante", "dan??a", "dan??o", "dan??s", "daraf", "darda", "darde", "darei", "darem", "dares", "darga", "daria", "darma", "darto", "dar??s", "dar??o", "dassa", "datai", "datal", "datam", "datar", "datas", "datei", "datem", "dates", "datou", "dauma", "davam", "davas", "daves", "da??as", "da????o", "dbase", "deada", "deado", "debai", "debam", "debar", "debas", "debei", "debem", "debes", "debou", "debye", "decai", "decas", "deca??", "decho", "decil", "decis", "decoa", "decoe", "decoo", "dedai", "dedal", "dedam", "dedar", "dedas", "dedei", "dedem", "dedes", "dedou", "deduz", "ded??u", "degas", "deias", "deilo", "deita", "deite", "deito", "deixa", "deixe", "deixo", "dejua", "delas", "delem", "deles", "delfo", "delia", "delir", "delis", "deliu", "demba", "dembe", "dembo", "deme??", "demos", "dem??o", "dendi", "dendo", "dend??", "dengo", "dense", "denta", "dento", "depus", "dep??s", "dep??e", "deque", "deram", "deras", "derby", "derem", "deres", "derma", "derme", "dermo", "deros", "derre", "desai", "desam", "desar", "desas", "desce", "desci", "desdi", "desdo", "desd??", "desei", "desem", "deses", "desma", "desmo", "desnu", "desou", "despe", "despi", "desp??", "dessa", "desse", "desso", "desta", "deste", "desvi", "desv??", "desv??", "des??a", "des??o", "deteu", "detre", "det??m", "det??m", "devam", "devas", "devei", "devem", "deves", "deveu", "devia", "devim", "dev??m", "dev??m", "dewar", "de??es", "de??os", "de??es", "diaba", "diaco", "diafa", "diale", "diana", "diara", "diate", "diaus", "diazo", "dibos", "dib??s", "dicai", "dicam", "dicar", "dicaz", "dicha", "dicou", "didal", "didis", "didot", "did??s", "dieco", "dieno", "diese", "dieso", "dies??", "difas", "difos", "digam", "digar", "digas", "diger", "digna", "digne", "digno", "dij??s", "dilam", "dilas", "dilos", "dilua", "dilui", "diluo", "dilu??", "dimal", "dimas", "dimba", "dimeu", "dinar", "dinas", "dinca", "dinda", "dinde", "dindo", "dines", "dinga", "dingo", "dini??", "dinos", "dioga", "diogo", "diola", "dioma", "diona", "diopa", "diore", "diosa", "diose", "dioso", "diote", "dipas", "diple", "diplo", "dipso", "dirca", "direi", "diria", "diros", "dirr??", "dirua", "diruo", "diru??", "dir??s", "dir??o", "dir??m", "disas", "disca", "disco", "disga", "disna", "dispa", "dispo", "disse", "dista", "diste", "disto", "disu??", "ditai", "ditam", "ditas", "ditei", "ditem", "dites", "ditou", "ditua", "diuli", "diuti", "divos", "div??o", "dixes", "dizei", "dizem", "dizes", "dizia", "di????o", "di??is", "di??la", "di??so", "di??ta", "djica", "djico", "djins", "djola", "dlins", "doada", "doado", "doais", "doamo", "doara", "doar??", "doava", "dobai", "dobam", "dobar", "dobas", "dobei", "dobem", "dobes", "dobla", "doble", "dobou", "dobra", "dobre", "dobro", "docas", "docei", "docto", "doc??m", "dodol", "dodos", "dod??i", "doeis", "doemo", "doera", "doer??", "dogal", "doges", "dogon", "dogre", "dogue", "dog??s", "doilo", "doira", "doire", "doiro", "dojos", "dolim", "dolis", "dolly", "dolor", "dolos", "dol??s", "domai", "domam", "domas", "domba", "dombe", "dombo", "domei", "domem", "domes", "domos", "domou", "donas", "donda", "donde", "dondo", "donez", "done??", "donga", "dongo", "donte", "dopai", "dopam", "dopar", "dopas", "dopei", "dopem", "dopes", "dopou", "doque", "doras", "dorca", "dorco", "dorir", "dorme", "dormi", "dormo", "dorna", "dosai", "dosam", "dosas", "dosei", "dosem", "doses", "dose??", "dosou", "dotai", "dotal", "dotam", "dotas", "dotei", "dotem", "dotes", "dotim", "dotou", "douda", "doudo", "doula", "doul??", "douns", "doura", "doure", "douro", "douta", "douto", "doxas", "dozem", "doz??o", "do??ai", "do??al", "do??am", "do??ar", "do??ou", "do??us", "do??am", "do??as", "do??do", "draft", "draga", "drago", "dramo", "drap??", "drena", "drene", "dreno", "drias", "dribo", "drilo", "drink", "drive", "dri??a", "droca", "drofa", "droga", "drogo", "dromo", "drope", "drops", "drupa", "drusa", "druso", "druv??", "duais", "duala", "dual??", "duana", "dubla", "duble", "dublo", "dubos", "dubus", "dub??s", "ducal", "duche", "ducho", "ducos", "ducr??", "ducto", "duc??o", "dudas", "duela", "duele", "duelo", "dueta", "duete", "due??a", "dugas", "dugni", "dug??o", "duina", "duins", "duipa", "dules", "dulia", "dumas", "dumba", "dumbo", "dumos", "dunam", "dunar", "dundu", "dunfa", "dunga", "dung??", "dunha", "duple", "durai", "dural", "duram", "duras", "duraz", "durbe", "durbo", "durb??", "durei", "durem", "dures", "durex", "durez", "durg??", "durim", "durma", "durmo", "durne", "durol", "durou", "durra", "durus", "dur??o", "dutos", "dutr??", "duvol", "duzam", "duzas", "duzem", "duzes", "duzil", "duzir", "duzis", "duziu", "duzus", "du??ta", "dzeta", "d??cio", "d??lia", "d??til", "d??mar", "d??nae", "d??ndi", "d??nio", "d??but", "d??cor", "d??lia", "d??lio", "d??rbi", "d??vio", "d??xia", "d??mia", "d??ada", "d??ade", "d??dea", "d??dia", "d??dio", "d??fia", "d??nio", "d??ope", "d??sel", "d??xis", "d??lio", "d??lm??", "d??ria", "d??rio", "d??ris", "d??xus", "d??nax", "d??nia", "d??bia", "d??bio", "d??nia", "d??rio", "d??tis", "ealme", "ealmo", "ealm??", "eanto", "earco", "earc??", "ebame", "ebami", "ebani", "ebiri", "ebola", "ebole", "ebome", "ebomi", "ebula", "ebuli", "ecada", "ecado", "ecais", "ecamo", "ecapa", "ecara", "ecato", "ecava", "ecese", "ecfma", "ecler", "ecmas", "ecoai", "ecoam", "ecoas", "ecoei", "ecoem", "ecoes", "ecoou", "ecoto", "ecr??s", "ectal", "ectol", "ectos", "ecubo", "ecuru", "edace", "edade", "edema", "edens", "eder??", "edita", "edite", "edito", "edoma", "edono", "edras", "edros", "edtas", "educa", "educo", "edule", "edulo", "eduto", "eduza", "eduze", "eduzi", "eduzo", "efebo", "efipo", "eflua", "efluo", "eflu??", "efuco", "efuns", "efuso", "egb??s", "egb??s", "egeia", "egesa", "egeus", "ege??o", "egip??", "egles", "egros", "eguai", "eguam", "eguar", "eguci", "eguei", "egues", "eguns", "eguou", "eibas", "eicei", "eicem", "eices", "eicha", "eiche", "eich??", "eicos", "eidas", "eidos", "eimai", "eimam", "eimar", "eimas", "eimei", "eimem", "eimes", "eimou", "eiras", "eirol", "eirus", "eir??s", "eitas", "eitos", "eivai", "eivam", "eivar", "eivas", "eivei", "eivem", "eives", "eivou", "eiv??o", "eixai", "eixam", "eixar", "eixas", "eixei", "eixem", "eixes", "eixou", "eixus", "ei??ai", "ei??am", "ei??ar", "ei??as", "ei??ou", "ejeta", "ejete", "ejeto", "ejuos", "elada", "elado", "elaf??", "elais", "elami", "elamo", "elana", "elano", "elara", "elaus", "elava", "elche", "eleai", "elear", "eleb??", "eled??", "eled??", "eleei", "elege", "elegi", "eleia", "eleie", "eleio", "eleja", "elejo", "elemi", "elemo", "elena", "eleou", "elep??", "eleto", "eleus", "eleva", "eleve", "elevo", "elfas", "elfos", "elias", "elida", "elide", "elidi", "elido", "elige", "eligi", "elija", "elijo", "elime", "elina", "eliri", "elixa", "elixe", "elixi", "elixo", "elmos", "elona", "elope", "eluam", "eluas", "eluda", "elude", "eludi", "eludo", "eluem", "elueu", "eluir", "eluiu", "eluro", "elu??a", "elu??s", "elu??s", "el??is", "emace", "email", "emala", "emale", "emalo", "emamo", "emana", "emane", "emano", "emapu", "emare", "emaro", "emar??", "ema??a", "ema??o", "emba??", "embeu", "embi??", "embi??", "embo??", "embuu", "embu??", "embu??", "emb??s", "emeb??", "emeda", "emede", "emedo", "emeio", "emela", "emele", "emelo", "emens", "emeus", "emexo", "emfim", "emias", "emins", "emita", "emite", "emiti", "emito", "emoco", "emole", "emoli", "emone", "emono", "emon??", "emota", "emoto", "empai", "empam", "empar", "empas", "empei", "empem", "empes", "empe??", "empis", "empoa", "empoe", "empoo", "empou", "emp??s", "emula", "emule", "emulo", "enalo", "enana", "enano", "enase", "enata", "enate", "enato", "encha", "enche", "enchi", "encho", "enchu", "ench??", "endes", "endez", "endos", "endro", "endua", "enema", "eneve", "enevo", "enev??", "enfe??", "enfia", "enfie", "enfio", "enfue", "enfuo", "enfu??", "engai", "engam", "engar", "engas", "enge??", "engos", "engou", "engra", "engue", "enhos", "enibu", "enino", "enito", "enjoa", "enjoe", "enjoo", "enle??", "enoda", "enode", "enodo", "enogo", "enog??", "enoja", "enoje", "enojo", "enomo", "enone", "enora", "enove", "enovo", "enov??", "enque", "enrie", "enrio", "enri??", "ense??", "ensoa", "ensoe", "ensoo", "entas", "enter", "entes", "enteu", "ente??", "entoa", "entoe", "entoo", "entra", "entre", "entro", "envia", "envie", "envio", "env??s", "enxie", "enxio", "enxi??", "enxus", "enxu??", "enx??s", "en??is", "en??us", "en??is", "eones", "eo??po", "epata", "epeia", "epena", "epile", "epilo", "epil??", "epodo", "epuxa", "ep??xi", "equei", "equem", "eques", "equeu", "erada", "erado", "erais", "eramo", "eram??", "erara", "erati", "erato", "erava", "erbia", "eremo", "ereso", "ereta", "ereto", "ergam", "ergas", "ergia", "ergol", "ergue", "ergui", "erica", "erice", "erige", "erigi", "erija", "erijo", "erino", "eripo", "eri??a", "eri??o", "ermai", "ermal", "ermam", "ermar", "ermas", "ermei", "ermem", "ermes", "ermos", "ermou", "eroca", "eroda", "erode", "erodi", "erodo", "erope", "erose", "eroso", "eros??", "erpes", "errai", "erram", "erras", "errei", "errem", "erres", "error", "errou", "ersas", "erses", "eruca", "eruda", "erudo", "eruga", "eruir", "eruru", "ervai", "erval", "ervam", "ervar", "ervei", "ervem", "erves", "ervoe", "ervoo", "ervou", "ervo??", "erv??o", "escoa", "escoe", "escol", "escoo", "eser??", "esfaz", "esfex", "esfez", "esfia", "esfie", "esfio", "esfiz", "esgai", "esgam", "esgar", "esgas", "esgou", "esgue", "esmai", "esmam", "esmar", "esmas", "esmei", "esmem", "esmes", "esme??", "esmoa", "esmoo", "esmou", "esmo??", "esmo??", "esnue", "esnuo", "esnu??", "espia", "espie", "espim", "espio", "espir", "espoa", "espoe", "espoo", "espru", "espua", "espuo", "espu??", "essas", "esses", "estai", "estas", "estau", "este??", "estia", "estie", "estil", "estim", "estio", "estol", "estos", "estou", "estra", "estre", "estro", "estua", "estue", "estuo", "est??s", "est??o", "esvai", "esva??", "esv??o", "etais", "etana", "etano", "eteia", "etemo", "eteno", "etera", "eteus", "ethos", "etila", "etile", "etilo", "etino", "etios", "etita", "etite", "etito", "etmos", "etnos", "etusa", "etutu", "et??pe", "et??es", "eubeu", "eub??s", "eumbo", "eurio", "evada", "evade", "evadi", "evado", "evais", "evale", "evamo", "evara", "evas??", "evava", "evaze", "evazo", "evaz??", "eveia", "eveis", "evemo", "eveus", "evigo", "evipa", "evire", "eviro", "evir??", "evita", "evite", "evito", "evoca", "evoco", "evola", "evole", "evolo", "evo??s", "exala", "exale", "exalo", "exara", "exare", "exaro", "exiba", "exibe", "exibi", "exibo", "exido", "exige", "exigi", "exija", "exijo", "exila", "exile", "exilo", "exima", "exime", "eximi", "eximo", "exina", "exite", "exit??", "exmas", "exmos", "exora", "exore", "exoro", "expia", "expie", "expio", "expus", "exp??s", "exp??e", "exste", "exsto", "exst??", "exsua", "exsue", "exsuo", "extar", "exula", "exulo", "exuma", "exume", "exumo", "ex??es", "e??ria", "e??lia", "e??lio", "fabal", "fabas", "fabro", "faces", "face??", "facha", "fache", "fachi", "facho", "facie", "facos", "fadai", "fadam", "fadar", "fadas", "fadei", "fadem", "fades", "fadim", "fadi??", "fados", "fadou", "fad??o", "faece", "fagai", "fagal", "fagam", "fagar", "fagas", "fagia", "fagos", "fagou", "fague", "faiai", "faial", "faiam", "faiar", "faias", "faida", "faido", "faiei", "faiem", "faies", "faina", "faine", "faino", "fains", "faiou", "faire", "fairo", "fair??", "fais??", "faite", "faixe", "faixo", "fai??o", "fajau", "fajos", "faj??s", "falai", "falam", "falas", "falaz", "falca", "falci", "falco", "falda", "falei", "falem", "fales", "falga", "falgo", "falha", "falhe", "falho", "falia", "falis", "faliu", "faloa", "falos", "falou", "falra", "false", "falta", "falte", "falto", "falua", "faluz", "famas", "fanai", "fanal", "fanam", "fanar", "fanas", "fanca", "fanda", "fando", "fanei", "fanem", "fanes", "faneu", "fanfa", "fanfe", "fanfo", "fanga", "fanha", "fanho", "fanoa", "fanou", "fante", "fan??o", "faqui", "farad", "farai", "faram", "farar", "faraz", "farde", "farei", "farel", "farem", "fares", "fareu", "farf??", "faria", "faris", "farme", "farne", "farno", "faros", "farou", "farpe", "farpo", "farre", "farro", "farta", "farte", "farto", "farum", "far??s", "far??o", "fasca", "fasco", "faseo", "fase??", "fasma", "fasor", "fasta", "faste", "fasto", "fatas", "fates", "fatia", "fatie", "fatio", "fat??o", "fauce", "faule", "faulo", "fauno", "fauta", "favai", "faval", "favam", "favar", "favas", "favei", "favem", "faves", "favos", "favou", "fav??o", "faxar", "faxes", "faxe??", "fazei", "fazem", "fazes", "fazia", "fa??am", "fa??as", "fa??la", "feace", "feaco", "febeu", "febos", "febra", "fecal", "fecer", "fecha", "feche", "fecho", "fedam", "fedas", "fedei", "fedem", "feder", "fedes", "fedeu", "fedia", "fedra", "feila", "feire", "feiro", "feite", "feito", "fei??o", "felai", "felam", "felar", "felei", "felem", "feles", "felga", "felix", "felou", "felpa", "felpe", "felpo", "fel??s", "fel??u", "fel??s", "fembe", "fembo", "femb??", "femte", "femto", "fenai", "fenal", "fenam", "fenar", "fenas", "fenda", "fende", "fendi", "fendo", "fenei", "fenem", "fenes", "fenil", "fenim", "fenol", "fenos", "fenou", "fento", "feof??", "feona", "feosa", "feoso", "fepes", "feral", "feraz", "ferem", "feres", "fereu", "ferga", "feria", "ferie", "ferio", "feris", "feriu", "fermi", "feros", "ferpa", "ferra", "ferre", "ferro", "ferry", "ferto", "ferva", "ferve", "fervi", "fervo", "feste", "festo", "fetim", "fetos", "fetus", "feuda", "fevra", "fezes", "fe??es", "fiado", "fiais", "fiamo", "fiara", "fiar??", "fiaus", "fiava", "fia??o", "fibos", "fibro", "ficai", "ficam", "ficas", "ficha", "fiche", "ficho", "fichu", "ficou", "ficta", "ficto", "fic??o", "fidas", "fidos", "fid??u", "fieis", "fiemo", "fieza", "fifas", "fifes", "fifis", "fif??s", "figai", "figam", "figar", "figas", "figle", "figos", "figou", "figue", "fij??s", "filai", "filam", "filar", "filas", "filei", "filem", "files", "filhe", "filia", "filie", "filio", "filma", "filme", "filmo", "filos", "filou", "fil??o", "fimas", "fimba", "fimbo", "fimia", "fimpi", "finai", "finam", "finar", "finca", "finco", "finda", "finde", "findo", "finei", "finem", "finfa", "finfe", "finfo", "finge", "fingi", "fingo", "finis", "finja", "finjo", "finou", "finta", "finte", "finto", "fin??s", "fiof??", "fiose", "fiota", "fiote", "fioto", "fique", "firam", "firas", "firma", "firme", "firmo", "firre", "firro", "firr??", "fisal", "fisas", "fises", "fisga", "fisgo", "fisio", "fisma", "fitai", "fitam", "fitar", "fitas", "fitei", "fitem", "fites", "fitol", "fitos", "fitou", "fit??o", "fixai", "fixam", "fixas", "fixei", "fixem", "fixes", "fixez", "fixou", "fizer", "fi??sa", "fi??za", "fi??zo", "flaco", "flama", "flame", "flamo", "flana", "flane", "flano", "flape", "flare", "flash", "flata", "flate", "flato", "flava", "flavo", "flebo", "flema", "fleme", "flete", "fleti", "flexo", "flieu", "flime", "flimo", "flim??", "flint", "flipe", "flipo", "flip??", "flita", "flite", "flito", "floco", "floc??", "flogo", "flome", "flore", "flori", "floro", "flosa", "flos??", "flote", "floto", "flot??", "floxo", "floz??", "fluam", "fluas", "fluem", "fluis", "fluiu", "flume", "flush", "fluta", "flu??a", "flu??s", "fl??te", "fobai", "fobam", "fobar", "fobas", "fobei", "fobem", "fobes", "fobou", "fob??s", "focai", "focam", "focas", "foceu", "focho", "focou", "focus", "fodam", "fodas", "fodei", "fodem", "foder", "fodes", "fodeu", "foeta", "fofai", "fofam", "fofar", "fofei", "fofem", "fofes", "fofos", "fofou", "fof??o", "fogal", "fogar", "fogem", "foges", "foias", "foide", "foila", "foina", "foios", "foito", "foi??a", "foi??o", "fojos", "folar", "folas", "foles", "fole??", "folga", "folgo", "folhe", "folho", "folie", "fol??o", "fomas", "fomes", "fomos", "fonas", "fones", "fonia", "fonjo", "fonos", "fon??o", "fopas", "foque", "foral", "foram", "foras", "force", "forde", "fordo", "forem", "fores", "foria", "forja", "forje", "forjo", "forma", "forme", "formi", "formo", "forna", "forne", "forni", "foros", "forra", "forre", "forro", "for??a", "for??o", "fosga", "fosia", "fosse", "foste", "fote??", "fot??o", "fot??s", "fouce", "foula", "foupa", "fou??a", "fou??o", "foxim", "foxos", "foyer", "fo????o", "frado", "frad??", "frago", "frama", "frap??", "freai", "freda", "freei", "frega", "frege", "frego", "freia", "freie", "freio", "freis", "frema", "freme", "fremi", "fremo", "frena", "frene", "freni", "freno", "freon", "freou", "fresa", "frese", "freso", "freta", "frete", "freto", "freve", "frev??", "frial", "friez", "frige", "frigi", "frigo", "frija", "frijo", "frila", "frima", "frimo", "frine", "frino", "frisa", "frise", "friso", "frita", "frite", "frito", "friul", "frixo", "froca", "froco", "frole", "frolo", "frol??", "front", "froto", "froz??", "fruam", "fruas", "fruem", "fruir", "fruis", "fruiu", "fruro", "frute", "fruxu", "fru??a", "fru??s", "fubas", "fucal", "fucei", "fucem", "fuces", "fucim", "fucos", "fueta", "fufas", "fufus", "fugai", "fugam", "fugar", "fugas", "fugel", "fugia", "fugis", "fugiu", "fugou", "fugue", "fug??o", "fuins", "fujam", "fujas", "fujem", "fujes", "fujia", "fujir", "fujis", "fujiu", "fuj??o", "fular", "fulas", "fulbe", "fulda", "fulge", "fulgi", "fulha", "fulja", "fuljo", "fuloe", "fuloo", "fulos", "fulo??", "fulva", "fulvo", "ful??o", "fumai", "fumal", "fumam", "fumas", "fumbo", "fumei", "fumem", "fumes", "fume??", "fumos", "fumou", "fum??o", "funai", "funam", "funar", "funas", "funca", "funce", "funco", "funda", "funde", "fundi", "fundo", "funei", "funel", "funem", "funes", "funfe", "funfo", "funf??", "funga", "funge", "fungu", "funha", "funhe", "funhi", "funho", "funis", "funje", "funou", "fun??u", "fuque", "furai", "fural", "furam", "furas", "furca", "furco", "furda", "furei", "furem", "fures", "furil", "furis", "furna", "furoa", "furoe", "furoo", "furou", "furta", "furte", "furto", "fur??o", "fusai", "fusam", "fusar", "fusas", "fusca", "fusco", "fusei", "fusem", "fuses", "fusgo", "fusg??", "fusor", "fusos", "fusou", "fusta", "fuste", "fusto", "futas", "futes", "futre", "futum", "fuzil", "fuzis", "fuzos", "fu??ai", "fu??am", "fu??as", "fu??ou", "fu??es", "f??gea", "f??jea", "f??lum", "f??lus", "f??rio", "f??sia", "f??tua", "f??tuo", "f??vio", "f??nia", "f??nio", "f??nti", "f??cio", "f??lea", "f??leo", "f??lis", "f??meo", "f??nix", "f??t??o", "f??ala", "f??ber", "f??cea", "f??ceo", "f??cis", "f??cus", "f??dia", "f??fia", "f??lea", "f??leo", "f??ler", "f??cio", "f??dia", "f??lio", "f??lis", "f??loe", "f??ton", "f??vea", "f??nix", "f??non", "f??cea", "f??cia", "f??fia", "f??fio", "f??ler", "f??lix", "f??meo", "f??sel", "f??sil", "gabai", "gabam", "gabar", "gabas", "gabei", "gabem", "gabes", "gabie", "gabou", "gabro", "gab??o", "gab??u", "gacha", "gacho", "gadar", "gades", "gados", "gad??o", "gaeta", "gafai", "gafam", "gafar", "gafas", "gafei", "gafes", "gafou", "gaf??m", "gagas", "gagau", "gages", "gagos", "gague", "gag??o", "gaiai", "gaial", "gaiam", "gaiar", "gaias", "gaiei", "gaiem", "gaies", "gaios", "gaiou", "gaipa", "gaipo", "gairo", "gaite", "gaito", "gaiva", "gaive", "gaivo", "gaiza", "gajai", "gajam", "gajar", "gajas", "gajei", "gajem", "gajes", "gajos", "gajou", "gaj??o", "galai", "galam", "galar", "galas", "galba", "galbo", "galei", "galem", "galga", "galgo", "galha", "galis", "galoe", "galoo", "galos", "galou", "galo??", "galra", "galre", "galro", "gamai", "gamam", "gamar", "gamas", "gambo", "gambu", "gamei", "gamem", "games", "gamos", "gamou", "gam??o", "ganam", "ganas", "ganau", "gance", "ganda", "gando", "ganem", "ganes", "ganfe", "ganfo", "ganf??", "ganga", "gango", "ganha", "ganhe", "ganho", "gania", "ganim", "ganir", "ganis", "ganiu", "ganiz", "ganja", "gansa", "ganta", "gant??", "ganzi", "ganzo", "ganz??", "ganz??", "gan??a", "gan??o", "gan??s", "gapes", "gap??s", "garau", "garbo", "garde", "gares", "garfa", "garfe", "garfo", "garg??", "garg??", "garis", "garna", "garne", "garni", "garno", "garoa", "garoe", "garoo", "garos", "garre", "garri", "garro", "garua", "garue", "garuo", "garus", "garvo", "gar??s", "gar??o", "gar??o", "gasc??", "gase??", "gasme", "gasmo", "gasm??", "gaspa", "gasta", "gaste", "gasto", "gatai", "gatal", "gatam", "gatar", "gatei", "gatem", "gates", "gateu", "gate??", "gatil", "gatis", "gatou", "gatum", "gat??o", "gauda", "gaude", "gaud??", "gauge", "gaulo", "gaura", "gauro", "gauss", "gauza", "gavai", "gavam", "gavar", "gavas", "gavei", "gavem", "gaves", "gavou", "gav??o", "gazal", "gazar", "gazas", "gazel", "gazes", "gazeu", "gaze??", "gazia", "gazil", "gazis", "gazos", "gazua", "gazue", "gazuo", "gaz??o", "ga??is", "geado", "geais", "geamo", "geara", "gearo", "gear??", "gease", "geava", "gebai", "gebam", "gebar", "gebas", "gebei", "gebem", "gebes", "gebou", "gebre", "gebro", "gebr??", "gebus", "gecos", "geeis", "geemo", "geena", "geesa", "geiam", "geias", "geiem", "geies", "gelai", "gelam", "gelas", "gelba", "gelda", "gelei", "gelem", "geles", "gelfa", "gelfo", "gelha", "gelma", "gelmo", "gelos", "gelou", "gelva", "gemai", "gemam", "gemar", "gemas", "gemei", "gemem", "gemes", "gemeu", "gemia", "gemie", "gemio", "gemou", "genal", "genas", "gener", "genge", "genia", "genoa", "genol", "genos", "genra", "geode", "geodo", "geosa", "geoso", "gerai", "geram", "geras", "gerbo", "gerei", "gerem", "geres", "geria", "geris", "geriu", "germo", "gerno", "gerou", "gerra", "gerre", "ger??m", "gesos", "gessa", "gesse", "gesta", "geste", "getas", "geteu", "get??s", "ge??na", "giaur", "gibas", "gibis", "gibli", "gibos", "gib??o", "gicl??", "gicl??", "gic??o", "gidos", "gigas", "gigl??", "gigos", "gilas", "gil??s", "gimas", "gimbo", "gimel", "gimos", "gim??o", "ginco", "gindo", "ginge", "gingo", "ginja", "giota", "gipso", "girai", "giram", "giras", "girei", "girem", "gires", "gireu", "giros", "girou", "gir??o", "gitas", "giteu", "gizai", "gizam", "gizar", "gizas", "gizei", "gizem", "gizes", "gizou", "glac??", "glans", "glaro", "gla??a", "gla??o", "gleba", "gleia", "glena", "glete", "glial", "glias", "glide", "glifo", "glino", "globa", "glomo", "glons", "glosa", "glose", "gloso", "glota", "glote", "gluma", "glute", "glu??o", "gl??es", "gl??on", "gneto", "gnoma", "gnomo", "gnose", "goana", "goane", "goano", "gobos", "gocha", "gocho", "godas", "godes", "godie", "godio", "godos", "god??o", "goele", "goelo", "goesa", "goete", "gofer", "gofos", "gofra", "gofre", "gofro", "gof??s", "gogas", "gog??s", "goiai", "goiam", "goiar", "goiei", "goiem", "goies", "goios", "goiou", "goita", "goite", "goiti", "goito", "goiva", "goive", "goivo", "goi??s", "gojas", "gojos", "golai", "golam", "golar", "golas", "golda", "goldi", "golei", "golem", "goles", "gole??", "golfa", "golga", "golim", "golis", "golos", "golou", "golpo", "golp??", "gomai", "gomal", "gomam", "gomar", "gomas", "gomba", "gombe", "gomb??", "gomei", "gomem", "gomes", "gomia", "gomil", "gomis", "gomoe", "gomoo", "gomor", "gomos", "gomou", "gomo??", "gonai", "gonam", "gonar", "gonas", "gonda", "gonde", "gondi", "gondo", "gonei", "gonel", "gonem", "gones", "gongo", "gong??", "gonou", "gonus", "gonzo", "gorai", "goral", "goram", "gorar", "goras", "goraz", "gorca", "gorei", "gorem", "gores", "gorga", "gorgi", "gorja", "gorna", "gorne", "gorni", "gorno", "gorou", "gorra", "gorre", "gor??o", "gor??s", "gosba", "gosme", "gosmo", "gospe", "gosta", "goste", "gosto", "gotes", "gote??", "gotos", "gotra", "gotri", "got??o", "gouda", "gougo", "goug??", "gouli", "goulo", "goura", "gouro", "gouve", "govar", "govas", "goxos", "gozai", "gozam", "gozas", "gozei", "gozem", "gozes", "gozil", "gozim", "gozos", "gozou", "goz??o", "graal", "grabe", "grada", "grado", "grafa", "grafe", "grafo", "graie", "graio", "grais", "grai??", "grajo", "grame", "gramo", "grand", "grane", "grani", "grano", "grans", "grapa", "grava", "grave", "gravi", "gravo", "graxo", "grebe", "grebo", "greco", "greda", "grede", "green", "grege", "greia", "greis", "grej??", "grela", "grele", "grelo", "gremo", "gren??", "grepo", "greta", "grete", "greto", "greva", "grias", "grifa", "grife", "grifo", "grij??", "grila", "grile", "grili", "grill", "grilo", "grima", "gripa", "gripo", "grisa", "grise", "griso", "grisu", "grita", "grite", "grito", "griva", "grive", "grivo", "gri??s", "grode", "groir", "grole", "grol??", "grol??", "groma", "grome", "gromo", "groom", "gropa", "grosa", "grose", "groso", "grota", "grous", "groxo", "grual", "gruam", "gruas", "gruau", "gruda", "grude", "grudo", "gruem", "gruim", "gruir", "gruiu", "gruja", "gruma", "grume", "grumo", "gruna", "grupa", "grupe", "gru??a", "gru??s", "gr??ce", "gr??os", "gr??us", "guaco", "guac??", "guada", "guado", "guaia", "guaie", "guais", "guai??", "guai??", "guaje", "guaju", "guaj??", "guano", "guan??", "guapo", "guare", "guari", "guaro", "guar??", "guat??", "guaus", "guaxe", "guaxi", "guaxo", "guaze", "guazo", "guaz??", "gua??u", "gudes", "gudus", "gueba", "guebo", "gued??", "gueis", "gueja", "gueli", "guera", "guere", "gueri", "gueta", "guete", "gueve", "guexa", "guexo", "gugus", "guiai", "guiam", "guias", "guibo", "guib??", "guica", "guide", "guido", "guid??", "guiei", "guiem", "guies", "guife", "guiga", "guig??", "guina", "guino", "guin??", "guiou", "guip??", "guiri", "guir??", "guisa", "guise", "guiso", "guita", "guiti", "guito", "guize", "guizo", "guiz??", "gui??o", "gui??o", "gulag", "gular", "gulas", "gumba", "gumbo", "gumb??", "gumes", "gunas", "gunda", "gunde", "gundi", "gundu", "gunes", "gunfe", "gunfo", "gunf??", "gunga", "gungo", "gunho", "gunji", "gunt??", "gural", "guras", "gurbi", "gurca", "gurda", "gurde", "guris", "gurma", "gurna", "gurne", "gurni", "gurno", "guros", "gurra", "gurus", "gusas", "gusla", "gusos", "gusta", "guste", "gutai", "gutam", "gutar", "gutas", "gutei", "gutem", "gutes", "gutos", "gutou", "guvos", "guxes", "guyot", "guzos", "g??bia", "g??bio", "g??fio", "g??jis", "g??lax", "g??lea", "g??leo", "g??lia", "g??lio", "g??seo", "g??zeo", "g??zio", "g??mia", "g??nia", "g??bia", "g??lis", "g??ron", "g??mea", "g??bio", "g??dio", "g??gia", "g??gis", "g??lia", "g??rio", "g??bia", "g??bio", "g??dia", "g??nio", "g??nis", "g??lua", "g??lue", "hab??s", "hacas", "hacer", "hacos", "hacus", "hadji", "haida", "haiku", "hajam", "hajas", "hajes", "hajul", "hakka", "halas", "halde", "haler", "halfe", "halma", "halos", "halv??", "hamba", "hamsa", "handa", "hango", "hanha", "hanoa", "hansa", "haoma", "haplo", "hapto", "harda", "haris", "harlo", "harpe", "harpo", "harto", "har??o", "har??m", "hashi", "hasta", "haura", "haure", "hauri", "hauro", "hau????", "havei", "havia", "hebro", "hecto", "hedge", "hedra", "hedus", "heire", "helas", "hemal", "hemes", "hemis", "hemos", "henas", "henna", "henry", "hen??s", "hepas", "hepta", "heras", "herda", "herde", "herdo", "heres", "heril", "heris", "herma", "heroo", "herse", "hertz", "her??u", "hesse", "hetai", "hetam", "hetar", "hetas", "hetei", "hetem", "hetes", "heteu", "hetm??", "hetol", "hetou", "heveu", "hexal", "hexil", "hexis", "hexol", "hezas", "hiais", "hialo", "hiava", "hicas", "hicos", "hicsa", "hicso", "hidno", "hidra", "hidro", "hifal", "hifas", "higgs", "higra", "higro", "hilar", "hilas", "hilos", "hil??s", "himba", "hinam", "hinas", "hindi", "hinem", "hines", "hinga", "hingo", "hinia", "hinir", "hinis", "hiniu", "hiper", "hipno", "hipos", "hipta", "hipte", "hirco", "hirpa", "hirpo", "hirta", "hirte", "hirto", "hispe", "hispo", "hisp??", "histo", "hobby", "hobos", "hoias", "holas", "holco", "holos", "hol??o", "homba", "hombo", "homea", "homeo", "homos", "homum", "homus", "hom??o", "honas", "honga", "hongo", "honor", "honre", "honro", "hopis", "hoplo", "hopos", "horai", "horal", "horam", "horar", "horda", "horei", "hores", "horeu", "horou", "horr??", "horsa", "horte", "hor??o", "hosco", "hosta", "hoste", "hotes", "houve", "hovas", "hoxas", "https", "huala", "huam??", "huane", "huari", "hubis", "hubos", "hudes", "huela", "huido", "huini", "hulas", "hulha", "humba", "humbe", "humbi", "humbo", "humos", "hunan", "hungo", "hunos", "huras", "huris", "hurra", "husas", "husky", "husma", "hutus", "hu??la", "hu??os", "h??bia", "h??den", "h??jis", "h??lex", "h??lis", "h??lux", "h??pax", "h??nia", "h??nio", "h??duo", "h??lia", "h??lio", "h??lix", "h??par", "h??pia", "h??vea", "h??ala", "h??lia", "h??men", "h??rax", "h??ria", "h??pea", "h??pia", "h??sis", "h??ssi", "h??vea", "h??yas", "h??mea", "h??mil", "h??mus", "iab??s", "iacas", "iacus", "iaera", "iagas", "iagos", "iagu??", "iag??s", "iai??s", "ial??s", "iamas", "iambe", "iambo", "iam??m", "iam??u", "ianam", "iande", "iandu", "ianga", "ians??", "ianvo", "ian??s", "iapas", "iapus", "iaque", "iaras", "iasos", "ias??o", "iatal", "iata??", "iates", "iatro", "iat??s", "iauma", "iaup??", "iau??s", "iav??s", "ia??va", "ia??vo", "ibal??", "ibar??", "ibeji", "ibera", "ibere", "ibero", "ibins", "ibira", "ibiri", "ibir??", "iblas", "iboga", "ibope", "iboza", "ibuns", "icaco", "icala", "ica??u", "ica??s", "icbal", "iceis", "icelo", "icemo", "icena", "iceno", "ich??o", "ich??s", "icica", "icip??", "icles", "icomo", "ictio", "ictos", "icur??", "idate", "ideai", "idear", "ideei", "ideie", "ideio", "ideou", "idios", "idona", "idora", "idose", "idria", "idrol", "iduna", "id??es", "ieb??s", "ieixa", "iei??s", "ienes", "iento", "ieras", "ier??s", "ietas", "ietim", "ietos", "ifata", "if??is", "igabo", "igaci", "igala", "igap??", "igap??", "igara", "igbim", "igbis", "igbos", "igdes", "iglus", "igoga", "iguar", "iguei", "iguis", "iguou", "igup??", "iiab??", "iica??", "iinx??", "ijebu", "ijex??", "ijoco", "ilada", "ilado", "ilama", "ilamo", "ilara", "ilava", "ila??s", "ileal", "ileis", "ilele", "ilemo", "ilesa", "ilhai", "ilhal", "ilham", "ilhar", "ilhas", "ilhei", "ilhem", "ilhes", "ilhoa", "ilhou", "ilh??u", "ilh??s", "iliba", "ilibe", "ilibo", "ilida", "ilide", "ilidi", "ilido", "iliga", "iligo", "ilip??", "ilita", "ilite", "iliza", "ili??a", "ili??o", "ilota", "iltra", "iluca", "iluda", "ilude", "iludi", "iludo", "ilusa", "iluse", "ilusi", "iluso", "iluta", "ilute", "iluto", "imago", "imala", "imame", "imamo", "imana", "imane", "imano", "imbas", "imbo??", "imbuo", "imbus", "imbu??", "imbu??", "imb??s", "imem??", "imene", "imida", "imido", "imigo", "imina", "imita", "imite", "imiti", "imito", "imola", "imole", "imolo", "imota", "imote", "imoto", "imova", "imovi", "imovo", "imov??", "impai", "impam", "impas", "impei", "impem", "impes", "impim", "impis", "impol", "impou", "impus", "imp??s", "imp??e", "imuta", "imute", "imuto", "im??ze", "im??zo", "im??z??", "inai??", "inaj??", "inaj??", "inala", "inale", "inalo", "inama", "iname", "inamu", "inana", "inane", "inani", "inano", "inar??", "inata", "inato", "ina??s", "incas", "incei", "incem", "inces", "incha", "inche", "incho", "incie", "incio", "inci??", "incoa", "incoe", "incoo", "incri", "incro", "incr??", "indas", "indez", "indis", "indjo", "indol", "induz", "inene", "inera", "inere", "ineri", "inero", "inexo", "infla", "infle", "inflo", "inga??", "inges", "ingos", "ingre", "ingr??", "ingus", "ingu??", "ing??s", "inhor", "inh??s", "inh??s", "iniba", "inibe", "inibi", "inibo", "inita", "inite", "ini??s", "injou", "inlas", "inl??s", "inoma", "inora", "inore", "inoro", "inosa", "inose", "inova", "inove", "inovo", "input", "insta", "inste", "insto", "inter", "intra", "intro", "intua", "intui", "intuo", "intu??", "int??s", "inube", "inuit", "inuma", "inume", "inumo", "invar", "inxus", "in??ai", "in??am", "in??ar", "in??ou", "iobai", "iobam", "iobar", "iobas", "iobei", "iobem", "iobes", "iobou", "iob??s", "iodai", "iodam", "iodar", "iodas", "iodei", "iodem", "iodes", "iodol", "iodos", "iodou", "iogas", "iogue", "ioi??s", "iolas", "iolau", "iolca", "iolco", "ioles", "iolis", "iolos", "iones", "ionte", "iopes", "iotas", "io??as", "ipaca", "ipadu", "ipeca", "ipecu", "ipet??", "ipeu??", "ipiti", "ipres", "ipsis", "ipuca", "ipu??s", "irada", "irade", "irais", "iramo", "iram??", "irani", "irara", "irari", "irava", "ira??u", "irdes", "ireis", "iremo", "irena", "irene", "ireno", "irer??", "iriai", "irial", "iriam", "iriar", "irias", "iriei", "iriem", "iries", "iriju", "irina", "irino", "iriou", "irir??", "irisa", "irise", "iriso", "irite", "iriva", "iriza", "irize", "irizo", "irmos", "iroco", "irona", "irone", "irono", "irosa", "iroso", "irpas", "irras", "irrua", "irruo", "irru??", "irr??s", "iruns", "iruri", "iru??u", "ir??is", "isala", "isara", "isaro", "isbas", "iscai", "iscam", "iscar", "iscas", "iscou", "iseio", "iseis", "isele", "isgas", "isgos", "isios", "isl??o", "isl??s", "ismos", "isoca", "isola", "isole", "isolo", "isque", "issei", "isseu", "istas", "istmo", "istra", "istro", "isuro", "isuso", "itaca", "itana", "itano", "itapu", "itati", "itaus", "itau??", "ita??s", "itens", "itera", "itere", "itero", "itobi", "itral", "itrol", "ituna", "itu??s", "itu??s", "iuane", "iudj??", "iui??s", "iul??s", "ium??s", "iupis", "iupu??", "iuris", "iurta", "iurte", "iur??s", "ivaol", "iva??s", "iveca", "ivesa", "ivir??", "ivir??", "ixi??o", "ixode", "ixodo", "ixora", "ix??ea", "izais", "izgas", "izgos", "izuzo", "i??cio", "i??sis", "i??tio", "i??ada", "i??ado", "i??ais", "i??amo", "i??ara", "i??ar??", "i??ava", "i??dis", "i??tio", "i??nia", "i??nio", "i??nis", "i??cas", "i??cea", "i??los", "i??que", "i??ros", "jabes", "jabe??", "jabre", "jabus", "jab??s", "jab??o", "jab??s", "jacas", "jacer", "jacis", "jacos", "jacra", "jacre", "jacta", "jacte", "jacu??", "jacu??", "jac??s", "jades", "jad??o", "jad??s", "jaeza", "jaeze", "jaezo", "jaff??", "jagas", "jagaz", "jagra", "jagre", "jaic??", "jaina", "jaios", "jalas", "jalde", "jales", "jalia", "jalne", "jal??o", "jal??u", "jamba", "jambi", "jambo", "jambu", "jamb??", "jamis", "janai", "janal", "janam", "janar", "janas", "jana??", "janda", "jande", "jandu", "janei", "janem", "janes", "janfa", "janga", "jango", "janja", "janos", "janou", "janta", "jante", "janto", "japas", "japim", "japis", "japi??", "japoa", "japus", "japu??", "japu??", "jap??s", "jaque", "jaqu??", "jarda", "jarde", "jardo", "jares", "jaros", "jarus", "jar??s", "jaspe", "jasso", "jatam", "jatar", "jata??", "jatem", "jates", "jate??", "jatia", "jatis", "jator", "jatos", "jatou", "jatus", "jat??s", "jauna", "jau??s", "javas", "java??", "javra", "javre", "javro", "jav??s", "jazam", "jazas", "jazei", "jazem", "jazer", "jazes", "jazeu", "jazia", "ja??a??", "jeans", "jebas", "jebus", "jecas", "jecos", "jegra", "jegre", "jeic??", "jeira", "jeite", "jeit??", "jejes", "jejua", "jejue", "jejuo", "jejus", "jej??s", "jemb??", "jemi??", "jenis", "jeov??", "jepi??", "jepi??", "jeque", "jequi", "jeros", "jerra", "jerus", "jer??s", "jess??", "jesus", "jetas", "jeta??", "jetom", "jeton", "jex??s", "jibas", "jibis", "jic??s", "jic??o", "jiefo", "jievo", "jigas", "jigue", "jihad", "jijus", "jiles", "jil??s", "jimba", "jimbe", "jimbo", "jinas", "jinga", "jinge", "jingo", "jinje", "jin??s", "jipes", "jipio", "jipis", "jip??o", "jique", "jiqui", "jiras", "jirau", "jires", "jiro??", "jisos", "jita??", "jitis", "jitos", "jit??s", "ji??ui", "joana", "joane", "jobai", "jobam", "jobar", "jobas", "jobei", "jobem", "jobes", "jobou", "jocos", "joeta", "jogai", "jogam", "jogas", "jogla", "jogou", "jogue", "jog??o", "joina", "joios", "joi??a", "jolai", "jolam", "jolar", "jolas", "jolca", "jolco", "jolda", "jolei", "jolem", "joles", "jolga", "jolis", "joliz", "jolou", "jomos", "jonas", "jones", "jonga", "jongo", "jonje", "jonjo", "jonj??", "jonos", "jon??u", "jopas", "jorge", "jorim", "jorna", "jorne", "jorra", "jorre", "jorro", "jotas", "jotes", "jouja", "joule", "jou??a", "jo??al", "jo??as", "jo??ba", "jo??es", "juami", "juana", "juari", "juati", "jubas", "juba??", "jubeu", "jub??o", "jucus", "juc??s", "judas", "judeo", "judia", "judie", "judio", "judos", "judum", "jugai", "jugal", "jugam", "jugar", "jugas", "juges", "jugos", "jugou", "jugue", "jugum", "juina", "jujus", "juj??s", "julas", "jules", "julga", "julgo", "julos", "jumas", "junas", "jundo", "jundu", "junge", "jungi", "jungo", "junja", "junjo", "junta", "junte", "junto", "jun??a", "jupi??", "jupu??", "jup??o", "juqui", "jurai", "juram", "juras", "jurau", "jurei", "jurem", "jures", "jurgo", "jurg??", "juris", "jurou", "jurus", "jur??o", "jusos", "juste", "jus??o", "jus??s", "jutas", "juta??", "jutos", "jutus", "juuna", "juvas", "ju??ze", "j??cea", "j??cia", "j??cio", "j??lea", "j??leo", "j??pix", "j??nua", "j??nia", "j??tsu", "j??gui", "j??sia", "j??nia", "j??nio", "j??lia", "j??lio", "j??via", "kanji", "kansa", "karma", "karts", "kebab", "kendo", "khmer", "krach", "kraft", "krill", "kuait", "kyrie", "labor", "labos", "labro", "lab??o", "lab??u", "lacas", "lacei", "lacem", "laces", "lace??", "lacha", "lacmo", "lacni", "lacno", "lacol", "lacra", "lacre", "lacro", "lacta", "lacte", "ladas", "lade??", "ladim", "ladra", "ladre", "ladro", "ladus", "lad??o", "lagar", "lagas", "lages", "lag??o", "laias", "laica", "laido", "laija", "lailo", "laima", "laime", "laitu", "laiva", "laive", "laivo", "lajai", "lajam", "lajar", "lajas", "lajei", "lajem", "lajes", "lajou", "laj??o", "lalai", "lalam", "lalar", "lalau", "lalei", "lalem", "lales", "lalia", "lalna", "lalou", "lal??s", "lamas", "lamba", "lambe", "lambi", "lambo", "lambu", "lamel", "lamis", "lamna", "lampa", "lampe", "lampo", "lam??s", "lanai", "lanam", "lanar", "lanas", "lance", "landa", "lande", "landi", "landu", "land??", "lanei", "lanem", "lanes", "langa", "langi", "lango", "lanha", "lanhe", "lanho", "lanou", "lanti", "lan??a", "lan??o", "lapai", "lapam", "lapar", "lapas", "lapei", "lapem", "lapes", "lape??", "lapim", "lapi??", "lapou", "lapre", "lapsa", "lapuz", "lap??o", "laque", "larau", "lardo", "lare??", "larga", "largo", "larim", "laris", "laros", "laroz", "larpa", "larpe", "larpo", "larra", "larro", "larve", "larvo", "lar??u", "lasca", "lasco", "laser", "lasis", "lasm??", "lassa", "lasse", "lasso", "latam", "latem", "later", "lates", "late??", "latia", "latir", "latis", "latiu", "lauda", "laui??", "laul??", "laura", "lauro", "lauta", "lauto", "lau??s", "lau??s", "lavai", "lavam", "lavas", "lavei", "lavem", "laves", "lavor", "lavou", "lavra", "lavre", "lavro", "laxai", "laxam", "laxar", "laxas", "laxei", "laxem", "laxes", "laxou", "lazos", "lazzo", "laz??o", "laz??s", "la??ai", "la??am", "la??ar", "la??as", "la??ou", "la????o", "la??de", "la??za", "leais", "lebas", "lebus", "lecal", "lecas", "lecos", "lecre", "ledas", "ledes", "ledol", "ledor", "ledos", "ledra", "leeia", "legai", "legam", "legar", "legas", "legba", "legis", "legou", "legra", "legre", "legro", "legue", "leg??o", "leiam", "leias", "leiga", "leila", "leino", "leira", "leire", "leiro", "leita", "leiva", "leixa", "leixe", "leixo", "lei??s", "lelas", "lelos", "lel??s", "lemas", "lemba", "lembe", "lembo", "lemes", "lemna", "lemos", "lempa", "lenam", "lenas", "lenca", "lende", "lendo", "lendu", "lenem", "lenes", "leneu", "lenga", "lengo", "lenhe", "lenho", "lenia", "lenir", "lenis", "leniu", "len??o", "leoas", "leoba", "leone", "lepas", "lepes", "lepra", "lepta", "lepto", "leram", "leras", "lerca", "lerda", "lerei", "lerem", "leres", "leria", "lerie", "lermo", "lerna", "leros", "lerpe", "leru??", "ler??s", "ler??o", "lesai", "lesam", "lesar", "lesas", "lesco", "lesei", "lesem", "leses", "lesim", "lesma", "lesme", "lesmo", "lesos", "lesou", "lesse", "lesta", "leste", "lesto", "leteu", "letos", "letre", "letro", "let??o", "let??s", "leuca", "leuco", "leude", "levai", "levam", "levas", "levei", "levem", "leves", "levez", "levie", "levio", "levi??", "levou", "lexia", "lhama", "lhana", "lhano", "liabo", "liada", "liado", "liais", "liame", "liamo", "liana", "liara", "liase", "liava", "lia??a", "libai", "libam", "libar", "libas", "libau", "libei", "libem", "libes", "libis", "libou", "libro", "libr??", "libua", "lib??s", "licas", "lices", "liceu", "lichi", "licne", "licra", "licta", "licto", "lidai", "lidam", "lidas", "lidei", "lidem", "lides", "lidou", "lid??o", "liemo", "ligai", "ligal", "ligam", "ligas", "ligbi", "ligeu", "light", "ligou", "ligue", "lilis", "limai", "limam", "limar", "limas", "limax", "limba", "limei", "limem", "limes", "limi??", "limos", "limou", "limpa", "limpe", "limpo", "linas", "linco", "linc??", "linde", "linfa", "linfe", "linfo", "linga", "lingo", "links", "linos", "liode", "liopo", "lioto", "lipas", "lipes", "lipos", "lipus", "liral", "liras", "liris", "liros", "lirus", "lir??o", "lisas", "lisco", "lisc??", "lises", "lisga", "lisim", "lisma", "lisme", "lismo", "lisol", "lispa", "lissa", "lista", "liste", "listo", "litai", "litam", "litar", "litas", "litei", "litem", "lites", "litor", "litou", "lit??o", "livas", "livel", "lives", "livor", "livos", "livra", "livre", "livro", "lixai", "lixam", "lixas", "lixei", "lixem", "lixes", "lixos", "lixou", "lix??o", "lizai", "lizam", "lizar", "lizas", "lizei", "lizem", "lizes", "lizou", "li??os", "li??es", "loaco", "loada", "loado", "loais", "loamo", "loara", "loasa", "loava", "lobal", "lobar", "lobas", "lobaz", "lobby", "lob??o", "locai", "locam", "locar", "locas", "locou", "locro", "locus", "loc??s", "lodos", "loeis", "loemo", "loena", "loess", "lofas", "lofos", "logar", "logba", "logia", "login", "logon", "logos", "logra", "logre", "logro", "logue", "loias", "loib??", "loios", "loire", "loisa", "loise", "loiso", "loi??a", "lolos", "lombe", "lombi", "lomu??", "lonas", "lonca", "londo", "lonja", "lopas", "lopes", "lopos", "lopsa", "lopso", "loque", "loral", "loras", "lorca", "lorco", "lorda", "lordo", "lorfa", "lorfo", "lorga", "lorgo", "loros", "lorpa", "lorto", "lor??s", "losas", "losma", "losna", "losos", "lotai", "lotam", "lotas", "lotei", "lotem", "lotes", "lote??", "lotis", "lotos", "lotou", "loure", "louro", "louse", "louso", "louva", "louve", "louvo", "loxas", "lo??es", "luaco", "luada", "luado", "luale", "luana", "luane", "luano", "luaus", "lubas", "lucas", "luche", "lucho", "luch??", "lucmo", "lucos", "lucra", "lucre", "lucro", "luc??o", "ludar", "ludas", "ludos", "ludra", "ludro", "lueda", "luena", "lueta", "lufai", "lufam", "lufar", "lufas", "lufei", "lufem", "lufes", "lufou", "lufre", "lugai", "lugam", "lugas", "luges", "lugol", "lugou", "lugre", "lugue", "luias", "luica", "luico", "luita", "luite", "luito", "lulas", "lulos", "lulus", "lul??o", "lumbo", "lumes", "lumie", "lumio", "lumpo", "lunas", "lunda", "lundu", "lunel", "lunfa", "lunga", "lungo", "lunil", "lunis", "lupai", "lupam", "lupar", "lupas", "lupa??", "lupei", "lupem", "lupes", "lupos", "lupou", "luque", "lurai", "luram", "lurar", "luras", "lurda", "lurei", "lurem", "lures", "lurgo", "lurou", "lurta", "lusas", "lusco", "lusc??", "lusma", "lusme", "lusmi", "lusmo", "lusol", "lusos", "lutai", "lutam", "lutas", "lutei", "lutem", "lutes", "lutos", "lutou", "lutra", "luts??", "luu??s", "luvar", "luxai", "luxam", "luxar", "luxas", "luxaz", "luxei", "luxem", "luxes", "luxos", "luxou", "luzam", "luzas", "luzem", "luzes", "luzia", "luzir", "luzis", "luziu", "luzi??", "lu??ea", "lu??la", "lu??me", "lu??na", "lycra", "lymes", "l??bea", "l??beo", "l??bil", "l??cio", "l??con", "l??gis", "l??jea", "l??ria", "l??rix", "l??sia", "l??sio", "l??teo", "l??tex", "l??tia", "l??mia", "l??mio", "l??nea", "l??neo", "l??nio", "l??bia", "l??cia", "l??dea", "l??gua", "l??lia", "l??ops", "l??pis", "l??pus", "l??ria", "l??xis", "l??mea", "l??mur", "l??nea", "l??neo", "l??noa", "l??ber", "l??bia", "l??bio", "l??buo", "l??cea", "l??cia", "l??cio", "l??dia", "l??dio", "l??eis", "l??gea", "l??geo", "l??gia", "l??gio", "l??lio", "l??mea", "l??meo", "l??nea", "l??neo", "l??pia", "l??poa", "l??ria", "l??sia", "l??sio", "l??tia", "l??tio", "l??tuo", "l??via", "l??zia", "l??d??o", "l??fio", "l??gea", "l??jia", "l??lio", "l??pis", "l??qui", "l??ria", "l??rio", "l??ris", "l??sia", "l??teo", "l??tur", "l??via", "l??xia", "l??mis", "l??cia", "l??cio", "l??dio", "l??fia", "l??men", "l??mia", "l??pia", "l??pus", "l??ria", "l??tea", "l??teo", "l??zio", "maari", "mabas", "maber", "mabi??", "mabr??", "mabus", "macau", "maca??", "maca??", "macei", "macem", "maces", "macha", "mach??", "macis", "maci??", "macla", "macoa", "macr??", "macua", "macus", "mades", "madim", "madis", "madje", "madre", "mad??s", "maeio", "maeta", "mafa??", "mafes", "mafie", "mafio", "mafor", "mafra", "mafus", "mafu??", "magal", "magas", "maga??", "magba", "magda", "magie", "magio", "magma", "magno", "magn??", "magoa", "magoe", "magoo", "mahdi", "maiai", "maiam", "maiar", "maias", "maiei", "maiem", "maies", "mailo", "maino", "main??", "maios", "maiou", "maire", "mairu", "mair??", "maita", "maiua", "mai??o", "majas", "majil", "majis", "majus", "malai", "malam", "malar", "malda", "malde", "maldo", "malei", "malem", "male??", "malga", "malgo", "malha", "malhe", "malho", "malim", "malis", "malou", "mals??", "malto", "malua", "malva", "malvo", "mamai", "mamal", "mamam", "mamas", "mamba", "mambi", "mambu", "mamb??", "mamei", "mamem", "mames", "mamoa", "mamou", "mampa", "mampe", "mampo", "mamua", "mamum", "mam??o", "manam", "manao", "manar", "manas", "manau", "mana??", "manca", "manco", "manda", "mande", "mandi", "mando", "mandu", "manei", "manel", "manem", "manes", "mane??", "mango", "mangu", "manho", "manil", "manir", "manis", "mani??", "manja", "manje", "manjo", "manju", "manos", "manou", "mant??", "manua", "manul", "manus", "manu??", "maona", "maore", "maori", "mape??", "mapia", "mapie", "mapio", "maple", "mapu??", "map??o", "map??s", "maque", "maqui", "marai", "maram", "marar", "marau", "marca", "marco", "marda", "mardo", "marei", "marel", "marem", "mare??", "marfa", "marfe", "marfi", "marfo", "marga", "marge", "margi", "margo", "maria", "marim", "maris", "mari??", "mari??", "marja", "marma", "marme", "marmo", "marna", "marno", "maroa", "marou", "marra", "marre", "marro", "marsa", "marso", "marta", "marto", "maru??", "maru??", "mar??s", "mar??o", "mar??u", "masas", "masca", "masco", "maser", "maseu", "masse", "masso", "masto", "masu??", "matai", "matal", "matam", "matas", "matau", "match", "matei", "matem", "mates", "mate??", "matia", "matis", "matiz", "matou", "mats??", "matus", "matu??", "mat??o", "mat??u", "maula", "maun??", "mauro", "maur??", "mauz??", "mau??s", "mau??s", "mavos", "mavua", "maxim", "maxis", "mazar", "mazas", "mazes", "mazeu", "mazia", "ma??ai", "ma??al", "ma??am", "ma??ar", "ma??om", "ma??os", "ma??ou", "ma????o", "ma????a", "ma??ba", "ma??jo", "ma??lo", "ma????a", "meaco", "meada", "meado", "meago", "meais", "meana", "meano", "meapo", "meara", "meari", "meato", "meava", "mea??a", "mebou", "mecha", "meche", "mecho", "mecos", "mecru", "medas", "medem", "medes", "media", "medis", "mediu", "medol", "medra", "medre", "medro", "meeis", "megas", "meiam", "meiem", "meies", "meiju", "meira", "meiri", "meiru", "mei??o", "mejis", "mej??s", "melai", "melam", "melar", "melas", "melba", "melca", "melda", "meldo", "melei", "melem", "meles", "melez", "melfa", "melfo", "melga", "melgo", "melh??", "meloa", "melou", "melra", "melro", "membi", "memb??", "memes", "memis", "menai", "menam", "menar", "menas", "mende", "mendi", "mendo", "mend??", "menei", "menem", "meneu", "mene??", "menga", "mengo", "menha", "menia", "menim", "menir", "menis", "menou", "mensa", "menso", "mente", "menti", "mento", "menus", "menza", "men??s", "meolo", "meoma", "meota", "meote", "meo??s", "meras", "merca", "merco", "merda", "mergo", "merg??", "merim", "meri??", "merla", "merlo", "merlu", "merma", "merme", "mermo", "merro", "merua", "merus", "meru??", "mer??m", "mesco", "mesc??", "mesna", "mesor", "mesos", "messa", "messe", "messo", "mesta", "mesto", "mes??o", "metam", "metas", "metei", "metem", "metes", "meteu", "metia", "metil", "metim", "metis", "meti??", "metol", "metra", "metre", "meuda", "meudo", "meuis", "meuse", "meu??s", "meu??s", "mexam", "mexas", "mexei", "mexem", "mexes", "mexeu", "mexia", "mexir", "mex??o", "mezeu", "mezzo", "mez??s", "me??am", "me??as", "me??es", "me??co", "me??le", "mfeca", "mfiti", "mhari", "miaas", "miada", "miado", "miais", "miama", "miami", "miamo", "miana", "miaos", "miara", "miaro", "miar??", "miaus", "miava", "mibas", "mibus", "micar", "micas", "micha", "micho", "mich??", "micos", "micra", "micta", "micte", "micto", "midas", "midau", "mideu", "mieis", "mielo", "miemo", "migai", "migam", "migar", "migas", "migd??", "migma", "migou", "migra", "migre", "migro", "migue", "miina", "miite", "mijai", "mijam", "mijar", "mijas", "mijei", "mijem", "mijes", "mijos", "mijou", "mijus", "miju??", "mij??o", "milde", "miles", "mileu", "milos", "milpa", "milus", "milvo", "mil??o", "mimai", "mimam", "mimas", "mimbi", "mimbo", "mimei", "mimem", "mimes", "mimis", "mimos", "mimou", "minai", "minam", "minar", "minas", "minaz", "mind??", "minei", "minem", "mines", "mineu", "minga", "mingo", "mingu", "minia", "minie", "minis", "minje", "minol", "minor", "minou", "minta", "minto", "minua", "minuo", "minu??", "mioas", "mioca", "miode", "mioga", "miola", "mioma", "miopa", "miose", "mioto", "mique", "miqui", "mirai", "miram", "miras", "mirei", "mirem", "mires", "mirg??", "miri??", "mirmo", "mirou", "miro??", "mirra", "mirre", "mirro", "mirta", "mirto", "miru??", "mirz??", "mir??o", "misas", "misco", "misc??", "mises", "misga", "misgo", "misn??", "misos", "misse", "miss??", "miste", "mitas", "mites", "mitis", "mitra", "mitre", "mitro", "mitua", "mitus", "miuis", "miuns", "miu??s", "mivas", "mixai", "mixam", "mixar", "mixas", "mixei", "mixem", "mixer", "mixes", "mixia", "mixi??", "mixn??", "mixos", "mixou", "mixto", "mizas", "mizeu", "mizos", "mi??da", "mi??de", "mi??fa", "mi??lo", "mi??ra", "mi??ro", "mi??va", "mi????a", "mnese", "mnios", "moabi", "moac??", "moada", "moado", "moafa", "moais", "moamo", "mocei", "mocem", "moces", "moce??", "mocha", "moche", "mochi", "mocho", "mocim", "mocoa", "mocsa", "mocu??", "modal", "modem", "modus", "moeca", "moega", "moego", "moeis", "moemo", "moera", "moere", "moer??", "moeso", "moesu", "moeta", "mofai", "mofam", "mofar", "mofas", "mofei", "mofem", "mofes", "mofos", "mofou", "mofti", "mogai", "mogol", "mogor", "mogos", "mogu??", "mog??o", "mog??s", "mohos", "moica", "moico", "moina", "moine", "moino", "moins", "moios", "moira", "moire", "moiro", "moite", "moito", "moixe", "moi??o", "mojai", "mojam", "mojar", "mojas", "mojei", "mojem", "mojes", "mojos", "mojou", "molal", "molam", "molar", "molda", "molde", "moldo", "molei", "molem", "moles", "mole??", "molge", "molgo", "molg??", "molha", "molhe", "molho", "molim", "molir", "moliu", "molos", "molua", "momai", "momam", "momar", "momas", "mombe", "momei", "momem", "momes", "mome??", "momos", "momou", "momp??", "monam", "monas", "monca", "monco", "monda", "mondo", "mond??", "monel", "monem", "mones", "monfa", "monfi", "mongi", "mongo", "mongu", "monha", "monho", "monh??", "monia", "monir", "monis", "moniu", "monja", "monjo", "monos", "monox", "monsa", "monso", "monta", "monte", "monto", "monva", "monvo", "moogo", "mopis", "mopla", "moque", "moqui", "moquo", "morai", "moram", "moras", "mora??", "morbo", "morca", "morco", "morda", "morde", "mordi", "mordo", "morei", "morem", "mores", "morfa", "morfe", "morfo", "morga", "morgo", "moria", "moril", "morim", "moris", "mormo", "morm??", "morne", "morou", "morra", "morre", "morri", "morro", "morsa", "morse", "morso", "morte", "morto", "morus", "morxi", "mor??o", "mosas", "mosb??", "mosco", "mossa", "mosse", "mossi", "mosso", "mosto", "motar", "motas", "motes", "motim", "motis", "motum", "mouco", "mouc??", "moufe", "moufo", "mouf??", "moule", "moume", "moumo", "moum??", "moure", "mouro", "mouse", "mouta", "mouxe", "movam", "movas", "movei", "movem", "moves", "moveu", "movia", "moxai", "moxam", "moxar", "moxas", "moxei", "moxem", "moxes", "moxou", "mo??di", "mo??li", "mo??ai", "mo??am", "mo??ar", "mo??as", "mo??os", "mo??ou", "mo????o", "mo??am", "mo??as", "mo??do", "mo??os", "muaca", "muaco", "muafa", "muafo", "muaje", "mualo", "muama", "muame", "muana", "muane", "muata", "muave", "mubes", "mubis", "mubus", "mucha", "muche", "mucia", "mucol", "mucor", "mucos", "mucro", "mucum", "mucu??", "mucu??", "mudai", "mudam", "mudas", "mudei", "mudem", "mudes", "mudez", "mudir", "mudos", "mudou", "mudra", "mueba", "mueia", "muela", "muele", "mueme", "muemo", "muem??", "muene", "mueno", "muen??", "muere", "muezo", "mufas", "mufla", "muflo", "mufti", "mufu??", "muf??s", "mugem", "muges", "mugia", "mugir", "mugis", "mugiu", "mugos", "mugre", "mugu??", "muieu", "muins", "muios", "muir??", "mui??s", "mujam", "mujas", "mujau", "mujem", "mujes", "mujia", "mujil", "mujis", "mulai", "mulas", "mulei", "muleu", "mulgu", "mulim", "mulme", "mulos", "mulsa", "mulso", "multa", "multe", "multi", "multo", "mulua", "mulum", "mul??i", "mumba", "mumbo", "mumb??", "mumos", "mumua", "mumus", "munam", "munda", "mund??", "munem", "munes", "munga", "munge", "mungi", "mungo", "mungu", "munha", "munho", "munia", "munir", "munis", "muniu", "munja", "munjo", "munj??", "munsi", "munto", "mun??s", "muoco", "muolo", "mupas", "muque", "murai", "muram", "murar", "muras", "murco", "murei", "murem", "mures", "mure??", "muris", "murle", "murou", "murra", "murso", "murta", "murto", "murua", "murum", "murus", "muru??", "murz??", "mur??a", "musal", "musca", "musco", "musgu", "musg??", "musm??", "mussa", "musse", "muss??", "musta", "musto", "mutel", "mutia", "mutis", "mutoa", "mutom", "mutos", "muto??", "mutra", "mutre", "mutro", "mutue", "mutum", "mut??s", "muuba", "muvi??", "muxas", "muxis", "muxos", "mux??m", "mu??di", "mu??ri", "mu??ni", "mu??as", "mu????o", "mu??la", "mvdol", "m??cea", "m??dia", "m??gis", "m??lus", "m??roo", "m??sea", "m??seo", "m??sio", "m??ter", "m??tri", "m??via", "m??bia", "m??cia", "m??cum", "m??don", "m??d??o", "m??leo", "m??lia", "m??loe", "m??ona", "m??one", "m??ono", "m??roe", "m??sia", "m??sio", "m??sis", "m??son", "m??ssu", "m??sua", "m??via", "m??zio", "m??cia", "m??cio", "m??lea", "m??leo", "m??lio", "m??mon", "m??nio", "m??ris", "m??sia", "m??sio", "m??sis", "m??tim", "m??bil", "m??cis", "m??dio", "m??lia", "m??lio", "m??lis", "m??qua", "m??rea", "m??rio", "m??chi", "m??cua", "m??gil", "m??jio", "m??lea", "m??leo", "m??lio", "m??ndi", "m??nia", "m??nus", "m??ons", "m??rex", "m??ria", "m??zua", "m??sli", "naali", "nabal", "nabas", "nabla", "nablo", "nabos", "nacas", "nache", "nacho", "nacos", "nacre", "nacua", "nacus", "nadai", "nadal", "nadam", "nadas", "nadei", "nadem", "nades", "nadim", "nadir", "nados", "nadou", "nafil", "nafir", "nafis", "nafos", "nafta", "naf??s", "nagai", "nagam", "nagar", "nagas", "nager", "nagis", "nagoa", "nagor", "nagou", "nague", "nagui", "nagul", "nag??o", "nag??s", "naias", "naibe", "naide", "naifa", "naife", "naifo", "naipa", "naipo", "naira", "naire", "nairo", "naix??", "najas", "najis", "naj??s", "nalas", "nales", "nalga", "nalgo", "nalus", "namas", "namau", "namaz", "nambe", "nambi", "nambu", "nanai", "nanal", "nanam", "nanar", "nanas", "nandi", "nando", "nandu", "nanei", "nanem", "nanes", "nanga", "nanis", "nanja", "nanou", "nan??s", "nan??s", "napas", "napeu", "naque", "naras", "naraz", "narco", "narda", "nardo", "nargo", "nario", "narlo", "narra", "narre", "narro", "narsa", "narta", "narte", "narus", "nar??a", "nasce", "nasci", "nases", "nassa", "nasse", "nasso", "nas??a", "nas??o", "natas", "natil", "natio", "natis", "natos", "natro", "nauai", "nauas", "nauga", "naulo", "nauro", "nauta", "navas", "nava??", "navim", "nav??m", "naxas", "nazes", "nazis", "na??ve", "ndala", "ndaus", "nduas", "ndulu", "nebel", "nebos", "nebri", "necas", "nece??", "necra", "necro", "necto", "nedas", "neda??", "nedum", "neera", "nefas", "nefro", "negai", "negam", "negas", "negou", "negra", "negue", "negus", "neg??o", "neido", "nejas", "nelas", "neldo", "neles", "nelma", "nelos", "nemas", "nemba", "nembo", "nemeu", "nenas", "nende", "nendi", "nengo", "nenha", "nenho", "nenos", "nente", "nen??s", "nepal", "nepas", "nepos", "neque", "neral", "neras", "neres", "nerol", "neros", "nerto", "nervu", "neseu", "nesga", "nesgo", "nessa", "nesse", "nesta", "neste", "nesto", "netas", "neuma", "neura", "neuri", "neuro", "nevai", "nevam", "nevas", "nevei", "nevem", "neves", "nevoe", "nevoo", "nevou", "nevri", "nev??o", "nexos", "ne??is", "ne??es", "ngana", "ngola", "nguta", "nhaca", "nhama", "nhata", "nhati", "nhato", "nhele", "nhim??", "nhoca", "nhole", "nhons", "nhuns", "niaia", "niais", "nialo", "niama", "nibo??", "nibus", "nicai", "nicam", "nicar", "nicas", "nicha", "niche", "nicol", "nicou", "nicte", "nicti", "nicto", "nict??", "nic??s", "nidai", "nidam", "nidar", "nidas", "nidei", "nidem", "nides", "nidor", "nidou", "nielo", "nifal", "nifes", "nif??o", "niger", "nigra", "nilas", "nilg??", "nilie", "nilis", "nili??", "nilos", "nimas", "nimba", "nimbe", "nimbo", "nimpa", "ninai", "ninam", "ninas", "ninei", "ninem", "nines", "ninga", "ninha", "ninhe", "ninis", "ninou", "niop??", "niple", "nipos", "nipto", "nip??o", "nip??s", "nique", "nir??s", "nisca", "nisco", "nisei", "niseu", "nispo", "nissa", "nis??o", "nis??s", "nital", "nitas", "nitos", "nitra", "nitre", "nitri", "nitro", "nival", "nives", "nizas", "nocai", "nocam", "nocar", "nocas", "nocha", "nocou", "nodai", "nodal", "nodam", "nodar", "nodas", "nodei", "nodem", "nodes", "nodoe", "nodoo", "nodos", "nodou", "noema", "noena", "noeno", "noese", "noete", "nogai", "nogal", "nog??o", "noias", "noira", "noise", "noiva", "noive", "noivo", "nojai", "nojam", "nojar", "nojas", "nojei", "nojem", "nojes", "nojos", "nojou", "nolas", "nolha", "nomas", "nome??", "nomia", "nomos", "nonal", "nonas", "nonca", "nonde", "nondo", "nones", "nonga", "nonos", "nooca", "nopal", "nopas", "nopes", "nopra", "noque", "noras", "norbu", "norna", "norsa", "norso", "nor??a", "nosco", "nosso", "notai", "notal", "notam", "notas", "notei", "notem", "notes", "notou", "notra", "notro", "nouca", "noute", "novai", "noval", "novam", "novar", "novei", "novel", "novem", "noves", "novou", "noxal", "noxas", "nozul", "no??is", "nubas", "nubeu", "nubla", "nuble", "nublo", "nubos", "nucal", "nucas", "nuces", "nudos", "nud??s", "nuela", "nuelo", "nueza", "nufes", "nugas", "nug??s", "nuit??", "nujol", "nulas", "numas", "numbe", "numbu", "numes", "numos", "nunce", "nundo", "nunes", "nungo", "nunos", "nuper", "nup??s", "nurse", "nuruz", "nutai", "nutam", "nutar", "nutas", "nutei", "nutem", "nutes", "nutou", "nutra", "nutre", "nutri", "nutro", "nutum", "nuve??", "nuvol", "nuvre", "nu????o", "nu??is", "nu??ma", "nyhan", "nylon", "nzila", "n??bis", "n??b??o", "n??car", "n??gua", "n??jir", "n??rea", "n??sea", "n??seo", "n??sia", "n??sio", "n??ssi", "n??sua", "n??tia", "n??vea", "n??via", "n??xia", "n??xio", "n??zia", "n??zir", "n??mia", "n??nia", "n??gre", "n??dia", "n??dio", "n??dji", "n??eas", "n??lia", "n??one", "n??ons", "n??per", "n??pia", "n??ria", "n??rio", "n??sea", "n??seo", "n??nax", "n??nia", "n??nio", "n??gua", "n??lio", "n??mia", "n??mio", "n??nji", "n??obe", "n??rex", "n??sio", "n??ton", "n??vea", "n??veo", "n??bis", "n??cia", "n??cio", "n??dio", "n??doa", "n??ria", "n??rio", "n??tea", "n??teo", "n??vea", "n??vio", "n??xio", "n??meo", "n??nea", "n??nex", "n??nio", "n??bia", "n??bil", "n??bio", "n??cio", "n??far", "n??men", "n??ria", "n??veo", "n??xia", "oac??s", "oalas", "oanda", "obane", "obans", "obeba", "obera", "obere", "obero", "obesa", "oboaz", "obori", "obo??s", "obrai", "obram", "obrar", "obrei", "obrem", "obres", "obrou", "obsia", "obsta", "obste", "obsto", "obt??m", "obt??m", "obutu", "obvia", "obvie", "obvim", "obvio", "obvir", "obv??m", "obv??m", "ocada", "ocado", "ocaia", "ocais", "ocamo", "ocana", "ocano", "ocapi", "ocara", "ocaso", "ocava", "ocelo", "ochas", "oches", "ocida", "oclua", "ocluo", "oclu??", "ocnas", "ocnos", "ocota", "ocoto", "ocras", "ocrem", "ocres", "ocros", "octal", "octil", "octis", "oct??s", "ocuas", "ocum??", "ocupa", "ocupe", "ocupo", "odara", "oded??", "odeia", "odeie", "odeio", "odeom", "ode??o", "odiai", "odica", "odico", "odiei", "odila", "odina", "odino", "odiou", "odite", "odito", "odone", "odora", "odore", "odoro", "odres", "odule", "oduns", "od??on", "oenas", "oetas", "ofai??", "ofato", "ofega", "ofego", "ofeso", "ofira", "ofita", "ofite", "ofito", "ofres", "ofur??", "ogada", "ogado", "ogais", "ogamo", "ogana", "ogano", "ogara", "ogava", "ogens", "ogiva", "ogive", "ogivo", "ogod??", "ogoni", "ogras", "ogres", "ogros", "ogud??", "oguei", "oguem", "ogues", "oguim", "ogux??", "og??es", "oiac??", "oiana", "oiapi", "oiara", "oides", "oigai", "oigam", "oigar", "oigas", "oigou", "oigue", "oilas", "oinc??", "oirai", "oiram", "oirar", "oiras", "oirei", "oirem", "oires", "oiros", "oirou", "oitis", "oitos", "oit??o", "oixos", "oi??am", "oi??as", "oi??os", "olaba", "olabo", "olace", "olada", "olaia", "olal??", "olans", "olar??", "oleai", "oleal", "olear", "olede", "oleei", "oleia", "oleie", "oleio", "olel??", "oleno", "oleol", "oleou", "oler??", "olgas", "olhai", "olhal", "olham", "olhas", "olhei", "olhem", "olhes", "olhou", "olh??o", "olias", "oligo", "olina", "olira", "oliva", "olive", "olivo", "olmos", "olob??", "oloco", "olod??", "oloma", "olori", "oluas", "olub??", "omada", "omado", "omaha", "omai??", "omalo", "omal??", "omana", "omani", "omano", "omaso", "omata", "ombia", "ombis", "ombos", "ombr??", "ombus", "omel??", "omeme", "omete", "omina", "omine", "omino", "omiri", "omita", "omite", "omiti", "omito", "omi??s", "omnes", "omolu", "omoma", "omuis", "omu??s", "onaga", "oncos", "ondai", "ondam", "ondar", "ondei", "ondem", "ondes", "onde??", "ondim", "ondoe", "ondoo", "ondou", "ondo??", "onera", "onere", "onero", "oneta", "onfra", "onfu??", "ongos", "ongue", "onhis", "onh??s", "onica", "onico", "onins", "oniro", "onixe", "onjos", "onoba", "onone", "on??as", "oonim", "opaba", "opaca", "opada", "opado", "opais", "opai??", "opamo", "opara", "opava", "opeis", "opel??", "opemo", "opera", "opere", "opero", "opiai", "opiam", "opiar", "opias", "opiei", "opiem", "opies", "opila", "opile", "opilo", "opima", "opimo", "opina", "opine", "opino", "opiou", "oplos", "opomo", "opor??", "opsia", "opsis", "optai", "optam", "optas", "optei", "optem", "optes", "optou", "op??is", "op??em", "op??es", "oquei", "oquem", "oques", "oque??", "oquim", "oqui??", "oqu??s", "oraca", "orada", "orado", "orago", "orais", "oramo", "orana", "orano", "orara", "orar??", "orate", "orava", "orbas", "orbos", "orcei", "orcem", "orces", "orcos", "ordos", "oreai", "orear", "oreei", "orega", "oreia", "oreie", "oreio", "oreis", "orela", "oremo", "oreou", "orete", "oreus", "orfno", "orgie", "oribi", "orica", "orida", "orita", "orite", "orix??", "oriza", "ori??s", "ori??s", "orjal", "orlai", "orlam", "orlar", "orlas", "orlei", "orlem", "orles", "orle??", "orlom", "orlon", "orlou", "ormuz", "ornai", "ornam", "ornar", "ornas", "ornei", "ornem", "ornes", "orne??", "ornis", "ornou", "oromo", "oropa", "orque", "orqui", "orseu", "ortas", "ortol", "ortos", "oruco", "orup??", "oruzu", "oru??s", "or??ai", "or??am", "or??ar", "or??as", "or??az", "or??ou", "osana", "oscas", "osces", "oscos", "osela", "osgas", "osler", "osmas", "osmia", "osmol", "osmos", "osona", "ossas", "oss??s", "ostai", "ostar", "ostea", "osteo", "ostes", "ostro", "oteca", "otelo", "otina", "otins", "otita", "otite", "otoba", "otojo", "otoma", "otomi", "otona", "otoni", "otoro", "otose", "otot??", "ot??es", "ouari", "ouaru", "oudre", "ougai", "ougam", "ougar", "ougou", "ougue", "oug??s", "ourai", "ouram", "ourar", "ouras", "ourei", "oures", "ouros", "ourou", "our??m", "ousai", "ousam", "ousas", "ousei", "ousem", "ouses", "ousia", "ousie", "ousio", "ousou", "outai", "outam", "outar", "outas", "outei", "outem", "outes", "outou", "outus", "out??o", "ouvem", "ouves", "ouvia", "ouvis", "ouviu", "ouxes", "ouzes", "ouzos", "ou??am", "ou??as", "ou????o", "ovada", "ovado", "ovais", "ovala", "ovale", "ovamo", "ovara", "ovate", "ovava", "oveis", "ovemo", "oveva", "ovina", "ovino", "oviua", "ovula", "ovule", "ov??ns", "oxale", "oxeba", "oxeol", "oxera", "oxeus", "oxida", "oxide", "oxido", "oxilo", "oxima", "oxina", "oxi??o", "oxoce", "oxono", "oxura", "ozeai", "ozear", "ozeei", "ozeia", "ozeie", "ozeio", "ozena", "ozeou", "ozola", "ozolo", "ozone", "ozono", "ozon??", "ozueu", "o????im", "o??cio", "o??one", "o??dio", "o??cos", "paari", "pabas", "pacaa", "pacas", "pacau", "paca??", "pacho", "pach??", "pacol", "pacte", "pacto", "pact??", "pacus", "pacu??", "pac??o", "pac??m", "pac??s", "padas", "padeu", "padma", "pados", "padro", "padr??", "padus", "pad??s", "paet??", "pafos", "pafu??", "pagai", "pagas", "pagel", "pagem", "pager", "pageu", "pagou", "pagro", "pague", "pag??o", "paica", "pail??", "paina", "pains", "paiol", "paios", "paira", "paire", "pairo", "paiva", "paive", "paivo", "paixa", "pai??s", "pai??o", "paja??", "pajem", "paje??", "paje??", "paj??o", "paj??s", "palar", "palas", "pala??", "paleo", "pales", "palhe", "palho", "palia", "palie", "palme", "palor", "palos", "palpe", "palpo", "palp??", "palra", "palre", "palro", "pal??o", "pamas", "pambo", "pamis", "pamo??", "pampo", "panai", "panal", "panam", "panar", "panas", "panco", "pande", "pando", "panei", "panem", "panes", "panga", "pango", "panha", "panhe", "panhi", "panis", "panja", "panje", "panou", "panri", "panr??", "panta", "pant??", "pan??o", "pan??a", "paolu", "papai", "papal", "papam", "papar", "papas", "papei", "papem", "paper", "papes", "pape??", "papie", "papi??", "papos", "papou", "papua", "papus", "pap??o", "paqui", "paqu??", "paqu??", "parai", "paral", "param", "paras", "parau", "parba", "parca", "parde", "parei", "parem", "pares", "parga", "pargo", "paria", "paris", "pariu", "pari??", "parla", "parle", "parlo", "parno", "parn??", "parn??", "parol", "parou", "parra", "parre", "parro", "parse", "parta", "parte", "parti", "parto", "parum", "parus", "paru??", "parva", "parvi", "parvu", "par??o", "par??s", "pasce", "pasci", "pasma", "pasme", "pasmo", "passa", "passe", "passo", "pasta", "paste", "pasto", "pas??a", "pas??o", "patau", "pataz", "pata??", "patel", "pate??", "patie", "patim", "patis", "pati??", "patos", "pato??", "patum", "patu??", "pat??o", "pat??m", "pat??s", "paual", "pauda", "pauis", "paula", "paule", "paulo", "pause", "pauso", "pauta", "paute", "pauto", "pauxi", "paval", "pavia", "pavoa", "pavol", "pavos", "pav??s", "pav??s", "paxa??", "pax??s", "pazas", "pazes", "paze??", "paz??o", "pa??al", "pa??os", "pa??ba", "pa??na", "pa??ra", "peada", "peado", "peais", "peala", "peale", "pealo", "peana", "peane", "peara", "peava", "pea??a", "pebas", "pecai", "pecam", "pecas", "pecha", "peche", "pecho", "pecos", "pecou", "pecte", "pec??m", "pec??i", "pedem", "pedes", "pedia", "pedis", "pediu", "pedos", "pedre", "peeis", "pegai", "pegam", "pegas", "pegma", "pegol", "pegos", "pegou", "pegue", "pegus", "peg??o", "peiam", "peias", "peida", "peide", "peido", "peiem", "peies", "peina", "peine", "peino", "peip??", "peita", "peite", "peito", "peitu", "peixa", "peixo", "pei??s", "pejai", "pejam", "pejar", "pejas", "pejei", "pejem", "pejes", "pejis", "pejos", "pejou", "pelai", "pelam", "pelar", "pelas", "pelei", "pelem", "peles", "peleu", "pele??", "pelga", "pelia", "pelma", "pelor", "pelou", "pelta", "pelve", "pel??o", "pel??m", "pemas", "pemba", "pembe", "pemis", "pemom", "pempa", "penai", "penam", "penar", "penas", "penca", "pence", "penc??", "penda", "pende", "pendi", "pendo", "penei", "penem", "penes", "peng??", "penha", "penia", "penol", "penou", "pensa", "pense", "penso", "pen??o", "peoas", "peona", "peota", "peote", "pepas", "pepel", "peplo", "pepos", "peps??", "pep??s", "peque", "pequi", "peral", "peras", "perau", "perca", "perce", "perco", "perde", "perdi", "peres", "pere??", "peris", "perla", "perle", "perlo", "perma", "perne", "perno", "perns", "perol", "peros", "pero??", "perra", "perro", "perr??", "perue", "perum", "peruo", "perus", "perva", "pervi", "pervo", "perv??", "pesai", "pesam", "pesas", "pesca", "pesei", "pesem", "peses", "pesga", "pesgo", "pesm??", "pesou", "pespe", "pesse", "pesto", "pes??o", "petai", "petal", "petam", "petar", "petas", "petei", "petes", "pete??", "petim", "petit", "petiz", "peti??", "peti??", "petou", "petra", "petro", "petum", "pet??o", "pet??m", "peuas", "peuis", "peumo", "pevas", "pexes", "pexia", "pexim", "pex??o", "pex??s", "pex??m", "pezes", "pez??o", "pe??am", "pe??as", "pe??co", "pe??ga", "pe??le", "pe??va", "pfuco", "pfuc??", "piaba", "piabe", "piabo", "piaca", "piado", "piad??", "piafo", "piaf??", "piaf??", "piaga", "piaia", "piais", "piale", "pialo", "pial??", "piamo", "piana", "piap??", "piara", "piar??", "piaus", "piau??", "piava", "pia??o", "pib??s", "picai", "pical", "picam", "picas", "pica??", "picha", "piche", "pichi", "picho", "picle", "picoa", "picou", "picre", "picro", "picta", "picto", "picue", "picul", "picum", "picuo", "picus", "picu??", "picu??", "pic??o", "pidas", "pidir", "pid??o", "pid??s", "piega", "piego", "pieis", "piela", "pielo", "piemo", "piese", "pieze", "piezo", "pifai", "pifam", "pifar", "pifas", "pifei", "pifem", "pifes", "pifou", "pifre", "pif??o", "pigai", "pigal", "pigam", "pigar", "pigas", "pigeu", "pigia", "pigma", "pigou", "pigra", "pigro", "pigue", "pigu??", "piina", "pilai", "pilam", "pilas", "pilau", "pilda", "pilde", "pildo", "pilei", "pilem", "piles", "pilhe", "pilho", "pilim", "pilma", "pilou", "pilra", "pil??o", "pil??u", "pil??s", "pimas", "pimba", "pimbe", "pimbo", "pimpa", "pimpe", "pimpo", "pinai", "pinam", "pinar", "pinas", "pinaz", "pince", "pindi", "pind??", "pind??", "pinei", "pinel", "pinem", "pines", "pinga", "pingo", "pinha", "pinh??", "pinol", "pinou", "pinte", "pinto", "pin??a", "pin??o", "pin??u", "pioca", "pioia", "pioi??", "piola", "piona", "piora", "piore", "pioro", "pior??", "piose", "pipai", "pipal", "pipam", "pipar", "pipas", "pipei", "pipem", "pipes", "pipia", "pipie", "pipio", "pipiu", "pipou", "pipra", "pip??o", "pique", "piqui", "piral", "piram", "piras", "pira??", "pira??", "pirca", "pirei", "pirem", "pireu", "pirex", "pirgo", "piria", "piris", "piriz", "pirol", "pirou", "piro??", "pirum", "piru??", "pisai", "pisam", "pisas", "pisca", "pisco", "pisei", "pisem", "pises", "piseu", "pisgo", "pisg??", "pisoa", "pisoe", "pisoo", "pisou", "pissa", "piste", "pisto", "pis??o", "pitai", "pitam", "pitar", "pitas", "pitei", "pites", "piti??", "pitom", "pitos", "pitou", "pitus", "pitu??", "pitu??", "pit??o", "pit??m", "pit??u", "piuco", "piuns", "pivas", "piv??s", "pixas", "pixel", "pixe??", "pixu??", "pix??s", "pix??u", "pizas", "pi??es", "pi??ba", "pi??ca", "pi??go", "pi??na", "pi??va", "plac??", "plaga", "plana", "plane", "plani", "plano", "plapo", "plat??", "pleas", "pleos", "plexo", "plias", "plica", "plico", "plide", "plido", "plid??", "ploce", "plome", "plomo", "plota", "plote", "ploto", "pluga", "pluge", "plugo", "plume", "plumo", "pluri", "plush", "pluto", "pl??on", "pnigo", "pnons", "poaia", "poais", "poare", "poa??u", "pobes", "pobla", "pobra", "pocai", "pocam", "pocar", "pocha", "poche", "pocho", "pocou", "podai", "podal", "podam", "podas", "podei", "podem", "podes", "podia", "podoa", "podou", "podr??", "pod??o", "pod??i", "poeis", "poejo", "poer??", "poete", "poeto", "pofia", "pofos", "pogas", "poiai", "poial", "poiam", "poiar", "poias", "poido", "poiei", "poiem", "poies", "poilu", "poios", "poiou", "poisa", "poise", "poiso", "poita", "poite", "poito", "poi????", "pojai", "pojal", "pojam", "pojar", "pojas", "pojei", "pojem", "pojes", "pojou", "poj??s", "polas", "polau", "polca", "polco", "polda", "poldo", "polem", "pole??", "polha", "polho", "polia", "polim", "polis", "poliu", "polja", "polje", "polme", "polmo", "polom", "polpe", "polpo", "polua", "polui", "poluo", "polva", "pol??o", "pol??s", "pomal", "pomas", "pombe", "pomes", "pome??", "pomos", "pompo", "ponas", "ponce", "ponc??", "ponc??", "ponda", "ponde", "pondo", "pones", "ponfo", "ponga", "pongo", "ponha", "ponhe", "ponho", "ponis", "ponj??", "ponom", "poone", "popas", "popes", "popie", "popio", "popi??", "pop??o", "pop??s", "poque", "porei", "porem", "pores", "poria", "porma", "porme", "porn??", "porra", "porro", "porta", "porte", "porto", "por??s", "por??o", "posai", "posam", "posas", "posca", "posei", "posem", "poses", "posou", "posp??", "possa", "posso", "posta", "poste", "posto", "potas", "potin", "potis", "potos", "potra", "potro", "potum", "potus", "pot??o", "poula", "poule", "poulo", "poupa", "poupe", "poupo", "pousa", "pouse", "pouso", "pouta", "poute", "pouto", "povoa", "povoe", "povoo", "pov??o", "poxas", "po??al", "po??as", "po??is", "prago", "prais", "praj??", "prama", "prana", "prans", "prase", "prava", "pravo", "praxo", "prax??", "praza", "praz??", "preai", "prear", "pred??", "pred??", "preei", "prega", "prego", "preia", "preie", "preio", "prelo", "prema", "preme", "premi", "premo", "preou", "prep??", "prese", "preso", "previ", "prev??", "preza", "preze", "prezo", "pre??s", "prias", "prima", "prime", "primi", "primo", "prino", "prior", "prise", "prita", "priul", "prius", "priva", "prive", "privo", "pri??o", "proai", "proal", "proam", "proar", "proas", "proba", "probo", "proco", "proc??", "proei", "proem", "proes", "profs", "proiz", "prona", "prono", "proou", "prop??", "prose", "proso", "proto", "prova", "prove", "provi", "provo", "prov??", "proze", "prozo", "proz??", "pruam", "pruca", "pruem", "pruga", "pruir", "pruiu", "pruma", "prume", "pruno", "prura", "prure", "pruri", "pruro", "pru??s", "pru??a", "pru??s", "pr??on", "pr??on", "psalo", "psama", "psara", "psaro", "pseca", "psesa", "pseso", "pseta", "pseto", "psica", "psico", "psila", "psilo", "psoas", "psoco", "psofo", "psolo", "psora", "ptena", "ptere", "ptero", "ptise", "ptose", "puada", "puado", "puaia", "puais", "puamo", "puara", "puava", "pua??o", "pua??u", "pubai", "pubam", "pubar", "pubas", "pubei", "pubem", "pubes", "pubou", "pucha", "pucho", "pucos", "puctu", "puct??", "pucus", "puder", "pudle", "pudlo", "pudl??", "pudus", "pueis", "puela", "puemo", "puera", "pueri", "pufes", "pufos", "pugna", "pugne", "pugno", "puir??", "puite", "puito", "pujai", "pujam", "pujar", "pujas", "pujei", "pujem", "pujes", "pujou", "pulai", "pulam", "pulas", "pulei", "pulem", "pules", "pule??", "pulgo", "pulha", "pulhe", "pulho", "pulim", "puliz", "pulos", "pulou", "pulpo", "pulsa", "pulse", "pulso", "pulte", "pulto", "pult??", "pul??o", "pumas", "pumba", "pumbo", "punam", "punas", "punce", "pund??", "punem", "punes", "punga", "punge", "pungi", "pungo", "punha", "punia", "punis", "puniu", "punja", "punjo", "punks", "punra", "punte", "punto", "punt??", "punus", "pun??a", "pun??o", "pupai", "pupal", "pupam", "pupar", "pupas", "pupei", "pupem", "pupes", "pupia", "pupou", "pupus", "pural", "puras", "pureu", "purga", "purgo", "purim", "puris", "puros", "puru??", "pur??s", "puser", "putal", "putas", "pute??", "putis", "putos", "putto", "puvas", "puvis", "puvi??", "puxai", "puxam", "puxas", "puxei", "puxem", "puxes", "puxos", "puxou", "puzos", "pu????s", "pu??am", "pu??as", "pu??da", "pu??do", "pu??ra", "pu??ta", "p??dar", "p??der", "p??doa", "p??dua", "p??fia", "p??fio", "p??gua", "p??lea", "p??lio", "p??lis", "p??pio", "p??rea", "p??rio", "p??rsi", "p??teo", "p??ter", "p??xia", "p??nax", "p??nus", "p??ans", "p??lio", "p??one", "p??ons", "p??pia", "p??xis", "p??nea", "p??nio", "p??nis", "p??cea", "p??ceo", "p??era", "p??ere", "p??ero", "p??fia", "p??fio", "p??gea", "p??geo", "p??jin", "p??lea", "p??leo", "p??lia", "p??lio", "p??nea", "p??neo", "p??nus", "p??ono", "p??ons", "p??per", "p??qua", "p??rea", "p??rio", "p??sea", "p??seo", "p??sin", "p??tia", "p??tio", "p??tis", "p??ton", "p??xis", "p??dex", "p??don", "p??gea", "p??lex", "p??lio", "p??lis", "p??lux", "p??rio", "p??tea", "p??tia", "p??voa", "p??bis", "p??gil", "p??lex", "quaco", "quada", "quado", "quaga", "qual??", "quara", "quare", "quari", "quark", "quart", "quar??", "quasa", "quati", "quat??", "qubit", "queba", "quebe", "queca", "queci", "quec??", "queda", "quede", "quedo", "queia", "quela", "quele", "quelo", "quemi", "quemo", "quena", "queno", "quepe", "quera", "queri", "quero", "quer??", "quete", "queto", "queza", "quiaz", "quiba", "quibe", "quic??", "quido", "quija", "quile", "quili", "quilo", "quime", "quimi", "quimo", "quine", "quino", "quios", "quipo", "quip??", "quip??", "quira", "quire", "quiri", "quiro", "quita", "quite", "quiti", "quito", "quiu??", "quivi", "quixa", "quix??", "quiza", "qui??s", "qui??o", "qui??s", "quote", "quoto", "qu??li", "qu??pi", "rabal", "rabaz", "rabdo", "rabel", "rabe??", "rabie", "rabil", "rabio", "rabis", "rabos", "rab??o", "raca??", "race??", "racha", "rache", "racho", "racle", "racum", "radas", "radia", "radie", "radio", "rad??o", "rafai", "rafam", "rafar", "rafas", "rafei", "rafem", "rafes", "raffe", "raffo", "raff??", "rafie", "rafio", "rafis", "rafou", "ragas", "ragia", "ragl??", "rague", "ragus", "raiai", "raial", "raiam", "raias", "raide", "raiei", "raiem", "raies", "raile", "raiom", "raiou", "raive", "raiv??", "rai??o", "rajai", "rajam", "rajar", "rajas", "rajei", "rajem", "rajes", "rajou", "raj??o", "ralai", "ralam", "ralas", "ralei", "ralem", "rales", "rale??", "ralha", "ralhe", "ralho", "ralis", "rally", "ralos", "ralou", "ral??o", "ramai", "ramal", "ramam", "ramar", "ramas", "rambo", "ramei", "ramem", "rames", "rameu", "rame??", "ramie", "ramis", "ramno", "ramou", "ranal", "ranas", "ranca", "rance", "randa", "ranes", "ranfe", "ranfo", "ranf??", "ranga", "range", "rangi", "rango", "ranha", "ranhe", "ranho", "ranis", "ranja", "ranjo", "ranus", "ran??o", "rapai", "rapam", "rapar", "rapas", "rapei", "rapel", "rapem", "rapes", "rapie", "rapio", "rapou", "rapta", "rapte", "rapto", "rap??o", "raque", "rarai", "raram", "rarar", "rarei", "rarem", "rares", "rare??", "rarou", "rasai", "rasam", "rasar", "rasas", "rasca", "rasco", "rasei", "rasem", "rases", "rasga", "rasgo", "rasos", "rasou", "raspa", "raspe", "raspo", "rasta", "raste", "ras??o", "ratai", "ratam", "ratan", "ratar", "ratas", "ratei", "ratel", "ratem", "rates", "rate??", "ratim", "ratio", "ratis", "ratou", "rat??o", "raud??", "rauli", "rausa", "rause", "rauso", "ravas", "raves", "ravos", "raxas", "razia", "razie", "razio", "razoa", "razoe", "razoo", "ra??as", "ra??oa", "ra??oe", "ra??oo", "ra??or", "ra??ta", "reage", "reagi", "reaja", "reajo", "reame", "reamo", "ream??", "reata", "reate", "reato", "reav??", "rea??a", "rebai", "rebam", "rebar", "rebas", "rebei", "rebel", "rebes", "reboa", "reboe", "reboo", "rebou", "reb??m", "recai", "recam", "recar", "reca??", "rece??", "rech??", "rech??", "recos", "recou", "recru", "recta", "recto", "recua", "recue", "recuo", "rec??o", "rec??m", "redai", "redar", "redei", "reder", "redeu", "redil", "redis", "rediz", "redou", "redox", "redra", "redre", "redro", "reduz", "red??s", "red??o", "red??m", "refaz", "refez", "refia", "refie", "refil", "refio", "refis", "refiz", "refla", "refle", "reflo", "regai", "regal", "regam", "regas", "regei", "regem", "reges", "regeu", "regia", "regma", "regno", "regoa", "regoe", "regoo", "regos", "regou", "regra", "regre", "regro", "regue", "reg??o", "reica", "reich", "reico", "reida", "reide", "reima", "reina", "reine", "reino", "reira", "reiv??", "reixa", "reixe", "reixo", "rejam", "rejas", "rej??o", "relai", "relam", "relar", "relas", "relax", "relei", "relem", "releu", "relfa", "relha", "relhe", "relho", "relia", "relou", "reluz", "relve", "relvo", "rel??o", "rel??s", "remai", "remal", "remam", "remas", "remei", "remel", "remem", "remes", "reme??", "remia", "remir", "remis", "remiu", "remix", "remoa", "remoo", "remos", "remou", "remo??", "remo??", "rem??i", "renas", "renda", "rende", "rendi", "rendo", "renga", "renge", "rengo", "renha", "renhe", "renhi", "renho", "renos", "renta", "rento", "renua", "renui", "renuo", "ren??o", "repas", "repes", "replo", "repta", "repte", "repto", "repus", "rep??s", "rep??e", "reque", "reri??", "reses", "resgo", "resg??", "resma", "resme", "resmo", "resos", "respe", "respo", "ressa", "resta", "reste", "resto", "retai", "retal", "retam", "retar", "retei", "retes", "rete??", "retor", "retos", "retou", "retre", "ret??m", "ret??m", "reuma", "reuni", "reuse", "reus??", "revel", "revez", "revia", "revim", "revir", "reviu", "revoe", "revoo", "rev??m", "rev??m", "rev??s", "rexes", "rexio", "reyes", "rezai", "rezam", "rezas", "rezei", "rezem", "rezes", "rezou", "rez??o", "re??as", "re??na", "re??na", "re??ne", "re??no", "riais", "riamo", "riana", "riano", "riata", "ribai", "ribam", "ribar", "ribas", "ribei", "ribem", "ribes", "ribou", "ribus", "rib??s", "ricei", "ricem", "rices", "ricto", "ric??o", "ridas", "rides", "ridor", "rid??o", "rid??s", "riela", "riete", "rifai", "rifam", "rifar", "rifas", "rifei", "rifem", "rifes", "rifeu", "rifle", "riflo", "rifl??", "rifou", "rifte", "rif??o", "rigai", "rigam", "rigar", "rigas", "rigol", "rigos", "rigou", "rigue", "rijai", "rijal", "rijam", "rijar", "rijas", "rijei", "rijem", "rijes", "rijos", "rijou", "rij??o", "rilai", "rilam", "rilar", "rilas", "rilei", "rilem", "riles", "rilha", "rilhe", "rilho", "rilos", "rilou", "rimai", "rimam", "rimas", "rimei", "rimem", "rimes", "rimos", "rimou", "rinal", "rinas", "rince", "rinco", "rindo", "rinfe", "rinfo", "rinf??", "ringe", "ringi", "rinha", "rinhe", "rinho", "rinja", "rinjo", "rinos", "rinto", "rin??a", "rioja", "riola", "ripai", "ripal", "ripam", "ripar", "ripas", "ripei", "ripem", "ripes", "ripeu", "ripia", "ripou", "rip??o", "rique", "riram", "riras", "rirei", "rirem", "rires", "riria", "rirmo", "rir??s", "rir??o", "risca", "risco", "risor", "rissa", "risse", "risso", "riste", "ris??o", "ris??s", "ritas", "ritma", "ritme", "rit??o", "rixai", "rixam", "rixar", "rixas", "rixei", "rixem", "rixes", "rixou", "rizai", "rizam", "rizar", "rizas", "rizei", "rizem", "rizes", "rizou", "ri??ai", "ri??am", "ri??ar", "ri??ol", "ri??ou", "ri??ta", "roais", "roala", "roalo", "roamo", "robaz", "robes", "roble", "robot", "rocal", "rocaz", "rocei", "rocem", "roces", "rocia", "rocie", "rocim", "rocio", "rocle", "rocl??", "rocl??", "roc??o", "roc??s", "rodai", "rodal", "rodam", "rodas", "rodei", "rodel", "rodem", "rodes", "rode??", "rodim", "rodos", "rodou", "rod??o", "roeis", "roemo", "roera", "roer??", "rofos", "rogai", "rogal", "rogam", "rogar", "rogas", "rogem", "roges", "rogos", "rogou", "rogue", "roila", "roixo", "rojai", "rojam", "rojar", "rojas", "rojei", "rojem", "rojes", "rojou", "roj??o", "rolai", "rolam", "rolas", "rolaz", "rolda", "rolde", "roldo", "rolei", "rolem", "roles", "rolhe", "rolho", "rolis", "rolou", "rol??o", "roman", "romar", "romeu", "rompa", "rompe", "rompi", "rompo", "rom??o", "rom??s", "ronca", "ronco", "ronda", "ronde", "rondo", "rond??", "rones", "ronga", "ronge", "rong??", "ronha", "ronim", "ronos", "ront??", "roque", "rorai", "roram", "rorar", "roras", "rorei", "rorem", "rores", "rorou", "rosai", "rosal", "rosam", "rosar", "rosco", "rosei", "rosem", "roses", "rosna", "rosne", "rosno", "rosou", "rosta", "roste", "rosti", "ros??o", "rotai", "rotam", "rotar", "rotei", "rotem", "rotes", "rote??", "rotim", "rotor", "rotos", "rotou", "rouba", "roube", "roubo", "rouce", "rouco", "rouge", "round", "roupe", "roupo", "roxas", "roxe??", "roxos", "royal", "ro??ai", "ro??am", "ro??as", "ro??ou", "ro??am", "ro??as", "ro??da", "ro??do", "ruada", "ruado", "ruais", "ruamo", "ruana", "ruano", "ruara", "ruava", "rua??a", "rubai", "rubim", "rubis", "rublo", "rubor", "rubos", "rubra", "rub??s", "rub??o", "rucei", "rucem", "ruces", "ruche", "rudas", "rudes", "rudez", "rudos", "rud??o", "rueis", "ruela", "ruemo", "rufai", "rufam", "rufar", "rufas", "rufei", "rufem", "rufes", "rufia", "rufie", "rufla", "rufle", "ruflo", "rufol", "rufos", "rufou", "ruf??o", "rugai", "rugam", "rugar", "rugas", "rugby", "rugem", "ruges", "rugia", "rugis", "rugiu", "rugou", "rugue", "ruide", "ruimo", "ruins", "ruir??", "rujam", "rujas", "rulai", "rulam", "rular", "rulas", "rulei", "rulem", "rules", "rulhe", "rulho", "rulh??", "rulou", "rulul", "rumai", "rumam", "rumar", "rumas", "rumba", "rumbe", "rumbo", "rumei", "rumem", "rumes", "rumie", "rumio", "rumis", "rumi??", "rumou", "rumpi", "runas", "runc??", "rundo", "runfe", "runfo", "runf??", "rung??", "runhe", "runho", "runh??", "runim", "runl??", "runos", "runt??", "ruolz", "rupai", "rupam", "rupar", "rupas", "rupei", "rupem", "rupes", "rupia", "rupou", "rupta", "rupto", "rupul", "rusas", "rusco", "rusga", "rusgo", "rusma", "russa", "russe", "rusta", "ruste", "rusti", "rusto", "rutai", "rutal", "rutam", "rutar", "rutas", "rutei", "rutem", "rutes", "rutim", "rutou", "rutul", "ru??ai", "ru??am", "ru??ar", "ru??as", "ru??ou", "ru??am", "ru??as", "ru??da", "ru??do", "ru??ra", "ru??es", "r??bia", "r??cio", "r??dom", "r??don", "r??fia", "r??gio", "r??pia", "r??qui", "r??tus", "r??meo", "r??bus", "r??cia", "r??cio", "r??cua", "r??dea", "r??dia", "r??gia", "r??gie", "r??gio", "r??pia", "r??voa", "r??xia", "r??nio", "r??ade", "r??cia", "r??cio", "r??eis", "r??gel", "r??gia", "r??gio", "r??nia", "r??nio", "r??pio", "r??tio", "r??ton", "r??vea", "r??ber", "r??bia", "r??bor", "r??bur", "r??deo", "r??dio", "r??pia", "r??sea", "r??seo", "r??sia", "r??sio", "r??tia", "r??bea", "r??beo", "r??bia", "r??bio", "r??fio", "r??gbi", "r??gio", "r??men", "r??mex", "r??tea", "sabal", "sabei", "sabem", "sabes", "sabeu", "sabia", "sabin", "sabir", "sabi??", "sable", "saboi", "sabra", "sabre", "sab??s", "sacai", "sacal", "sacam", "sacas", "saca??", "saces", "sacha", "sacho", "sach??", "sacia", "sacie", "sacio", "sacis", "sacou", "sacre", "sacta", "sacti", "sacu??", "sac??o", "sadal", "sadas", "sades", "sadim", "sadis", "sados", "sadr??", "sadus", "sad??o", "saeta", "safai", "safam", "safar", "safas", "safei", "safem", "safer", "safes", "safio", "safos", "safou", "safre", "safus", "saf??o", "sagai", "sagas", "sages", "sagez", "sagma", "sagos", "sagra", "sagre", "sagro", "sagui", "sagum", "sagus", "sagu??", "sag??o", "saial", "saiam", "saias", "saiba", "saibo", "saica", "saide", "saiga", "saij??", "saina", "saino", "sains", "sain??", "saip??", "sairi", "sair??", "sair??", "saium", "saiv??", "saix??", "sai??o", "sajum", "sajus", "salaz", "salda", "salde", "saldo", "sales", "salga", "salgo", "salhe", "salho", "salh??", "salmi", "salol", "salos", "salpa", "salse", "salso", "salta", "salte", "salto", "salus", "salva", "salve", "salvo", "sal??a", "sal??m", "samas", "samba", "sambe", "sambo", "sameu", "samos", "sampa", "sampo", "samp??", "samur", "sam??o", "sanai", "sanam", "sanas", "sanca", "sanco", "sande", "sando", "sand??", "sanei", "sanem", "sanes", "sane??", "sanga", "sango", "sanja", "sanje", "sanjo", "sanou", "sansa", "sant??", "sanza", "sapai", "sapal", "sapam", "sapar", "sapas", "sapei", "sapem", "sapes", "sapeu", "sape??", "sapim", "sapos", "sapou", "sapro", "sapus", "sapu??", "sap??o", "saque", "saqui", "sarah", "sarai", "saram", "saran", "saras", "sarco", "sarde", "sardo", "sarei", "sarem", "sares", "sarga", "sargo", "saria", "sarin", "saris", "sarja", "sarje", "sarjo", "sarno", "sarn??", "saros", "sarou", "saro??", "sarpa", "sarpe", "sarpo", "sarra", "sarre", "sarta", "sarte", "sarto", "sarus", "saru??", "saru??", "sar??o", "sar??a", "sassa", "sasse", "sasso", "sates", "satis", "sat??o", "sat??s", "saudi", "saud??", "sauim", "saui??", "sauni", "saup??", "sauro", "saur??", "sau??s", "sau??s", "saval", "savas", "savi??", "saxes", "saxos", "sax??o", "sax??s", "sazoe", "sazoo", "sazos", "sazo??", "sazus", "saz??o", "sa??is", "sa??am", "sa??as", "sa??co", "sa??do", "sa??mo", "sa??ra", "sa??ta", "sa??ba", "sa??co", "sa??da", "sa??de", "sa??do", "sa??va", "scone", "scope", "score", "sc??ne", "seada", "sebas", "sebel", "sebes", "sebos", "secai", "secal", "secam", "secas", "secie", "secou", "secta", "secto", "sedai", "sedal", "sedam", "sedan", "sedar", "sedas", "sedei", "seder", "sedes", "sede??", "sedia", "sedie", "sedio", "sedor", "sedou", "seduz", "sed??o", "sed??m", "seeda", "sefel", "sefia", "segai", "segam", "segar", "segas", "seges", "segna", "segne", "segno", "segou", "segre", "segua", "segue", "segui", "seguo", "segur", "seg??o", "seibo", "seice", "seide", "seima", "seira", "seisa", "seite", "seito", "seive", "seivo", "seixa", "seixo", "sei??a", "sejam", "sejas", "sejos", "selai", "selam", "selas", "selei", "selem", "seles", "selha", "selho", "seloa", "selou", "sel??o", "semas", "semba", "sembo", "semb??", "semel", "semio", "senal", "senas", "senda", "sendo", "senes", "senga", "sengo", "senho", "senil", "senis", "senos", "senra", "sensu", "senta", "sente", "senti", "sento", "sepos", "sepse", "septa", "septe", "septo", "seque", "seral", "serei", "serem", "seres", "serfo", "seria", "serie", "serio", "seris", "seri??", "serja", "serna", "seroa", "seroe", "seroo", "serpa", "serpe", "serra", "serre", "serro", "sert??", "serve", "servi", "serze", "serzi", "ser??s", "ser??o", "ser??s", "sesgo", "sesma", "sesme", "sesmo", "sessa", "sesse", "sesso", "sesta", "sesto", "setai", "setam", "setar", "setei", "setem", "setes", "sete??", "setia", "setos", "setou", "setra", "sevai", "sevam", "sevar", "sevas", "sevei", "sevem", "seves", "sevou", "sexai", "sexam", "sexar", "sexas", "sexei", "sexem", "sexes", "sexos", "sexou", "sexue", "sexuo", "sexu??", "sezoe", "sezoo", "sezo??", "sez??o", "share", "sheik", "short", "shows", "shoyu", "shunt", "siada", "siado", "siais", "sialo", "siame", "siamo", "siara", "siaus", "siava", "sibar", "sibas", "sibes", "sicas", "sicia", "siclo", "sicos", "sicus", "sidas", "sidis", "sidos", "sidra", "sid??o", "sieis", "siemo", "siena", "sifle", "siflo", "sifl??", "sif??o", "sigam", "sigas", "sigeu", "sigle", "siglo", "sigm??", "signa", "signe", "sigro", "silas", "siles", "silfa", "silfo", "silha", "silho", "silos", "silte", "silva", "silve", "silvo", "simas", "simba", "simbi", "simbo", "simum", "sim??o", "sinai", "sinam", "sinar", "sinas", "sinda", "sindi", "sindo", "sinei", "sinem", "sines", "sineu", "singa", "sinh??", "sinh??", "sinis", "sinos", "sinou", "sinta", "sinto", "sinue", "sinuo", "sinu??", "sinx??", "sin??o", "sioba", "siode", "siote", "sioux", "sipai", "sipes", "sipia", "sique", "siras", "sires", "sirfa", "sirfo", "sirga", "sirgo", "siris", "siri??", "sirl??", "sirma", "siros", "sirte", "sirva", "sirvo", "sirza", "sirzo", "sisai", "sisal", "sisam", "sisar", "sisas", "sisei", "sisem", "sises", "sisgo", "sisma", "sisme", "sisor", "sisos", "sisou", "siss??", "sis??o", "sitar", "sitas", "sites", "sitia", "sitie", "sitio", "sitos", "sitra", "situa", "situe", "situo", "siusi", "sivan", "sivas", "sivom", "siv??o", "sizau", "si??es", "si??ba", "skate", "slack", "slide", "snifa", "snife", "snifo", "snipe", "snobe", "soada", "soado", "soais", "soaje", "soajo", "soala", "soamo", "soara", "soar??", "soava", "sobas", "sobem", "sobes", "sobeu", "sobia", "sobie", "sobp??", "sobp??", "sobra", "sobre", "sobro", "socai", "socam", "socas", "soclo", "socol", "socos", "socou", "soco??", "soc??o", "sodai", "sodam", "sodar", "sodas", "sodei", "sodem", "sodes", "sodou", "sodra", "soeis", "soemo", "soera", "sofia", "sofra", "sofre", "sofri", "sofro", "sofr??", "sof??s", "sogai", "sogam", "sogar", "sogas", "sogou", "sogre", "sogue", "sogu??", "soila", "soins", "soito", "sojas", "solai", "solam", "solas", "solau", "solaz", "solda", "solde", "soldo", "solei", "solem", "soles", "solfa", "solfe", "solfo", "solha", "solhe", "solho", "solia", "solos", "solou", "solta", "solte", "solto", "solva", "solve", "solvi", "solvo", "sol??o", "somai", "somam", "soman", "somas", "somei", "somem", "somes", "somi??", "somos", "somou", "sompe", "sompo", "somp??", "sonai", "sonam", "sonas", "sonda", "sonde", "sondo", "sonei", "sonem", "sones", "songa", "sonha", "sonhe", "sonho", "sonos", "sonou", "sonsa", "sonso", "sonto", "sope??", "sopie", "sopio", "sopi??", "soplo", "sopor", "sopos", "sopra", "sopre", "sopro", "sop??o", "sop??s", "soqua", "soque", "soqui", "soquo", "sorai", "soral", "soram", "sorar", "soras", "sorbo", "sorda", "sorei", "sorem", "sores", "sore??", "sorga", "sorgo", "sorna", "sorne", "sorni", "sorno", "soror", "soros", "sorou", "sorri", "sorro", "sorta", "sorti", "sorto", "sorva", "sorve", "sorvi", "sorvo", "sor??a", "sosas", "sosso", "sotai", "sotam", "sotar", "sotas", "sota??", "sotei", "sotem", "sotes", "sotia", "sotil", "sotos", "sotou", "soube", "souis", "sousa", "soute", "souto", "sout??", "souza", "sou??s", "sovai", "sovam", "sovar", "sovas", "sovei", "sovem", "soves", "sovis", "sovou", "sovro", "sov??u", "sozal", "so??am", "so??as", "so??da", "so??do", "so??ma", "so??es", "spans", "spins", "split", "spray", "squid", "stafe", "staff", "stand", "stato", "steno", "stent", "stick", "stilb", "still", "stock", "stoma", "stops", "stout", "suabe", "suada", "suade", "suadi", "suado", "suais", "suaja", "suajo", "suamo", "suana", "suano", "suara", "suare", "suaro", "suar??", "suava", "suazi", "sua??o", "sua??u", "subam", "subas", "subia", "subis", "subiu", "subp??", "subus", "sucai", "sucam", "sucar", "sucas", "sucho", "sucie", "sucou", "sucre", "sucto", "sudai", "sudam", "sudar", "sudas", "sudei", "sudem", "sudes", "sudou", "sudra", "sudro", "sud??o", "sueda", "suede", "sueis", "suemo", "sueta", "sueto", "sueva", "suevo", "sufis", "suflo", "sufl??", "sufl??", "suf??s", "sugai", "sugam", "sugar", "sugas", "sugou", "sugue", "suias", "suin??", "sujai", "sujam", "sujas", "sujei", "sujem", "sujes", "sujou", "suj??o", "sulai", "sulam", "sular", "sulas", "sulca", "sulco", "sulei", "sulem", "sules", "sulfa", "sulfo", "sulia", "sulou", "sul??o", "sumam", "sumas", "sumba", "sumbo", "sumia", "sumis", "sumiu", "sumos", "sum??s", "sunas", "sundo", "sunes", "sunfa", "sungo", "sunto", "suome", "supra", "supre", "supri", "supro", "supus", "sup??s", "sup??e", "suqua", "suque", "suqui", "suquo", "sural", "surco", "surde", "surdi", "surfa", "surfo", "surge", "surgi", "surgo", "surim", "suris", "surja", "surjo", "surno", "surnu", "suros", "surra", "surre", "surro", "surta", "surte", "surti", "surto", "surus", "suru??", "sur??s", "sur??a", "susos", "sussu", "susta", "suste", "susti", "susto", "sus??o", "sus??s", "sutai", "sutam", "sutar", "sutas", "sutei", "sutem", "sutes", "sutou", "sutra", "suv??o", "suxai", "suxam", "suxar", "suxas", "suxei", "suxem", "suxes", "suxou", "su??ri", "su????o", "su??da", "su??ta", "su????a", "su????o", "su??mi", "su??es", "svava", "swing", "s??cri", "s??fea", "s??feo", "s??fia", "s??gia", "s??gio", "s??lia", "s??lio", "s??lix", "s??pia", "s??pio", "s??vel", "s??xea", "s??xeo", "s??mea", "s??mia", "s??mio", "s??ndi", "s??nie", "s??nio", "s??cia", "s??cio", "s??cua", "s??dia", "s??lio", "s??pia", "s??pio", "s??qui", "s??rum", "s??sea", "s??sia", "s??ter", "s??mea", "s??men", "s??mis", "s??nio", "s??cio", "s??con", "s??dea", "s??deo", "s??fia", "s??ler", "s??lex", "s??lis", "s??mel", "s??mia", "s??mil", "s??nus", "s??rex", "s??rio", "s??bio", "s??cia", "s??lea", "s??leo", "s??lio", "s??rex", "s??ria", "s??ter", "s??ber", "s??cia", "s??cio", "s??mea", "s??ria", "s??rio", "s??sia", "s??sio", "taac??", "tabas", "tabaz", "tabes", "tabla", "taboa", "tabor", "tabun", "tabus", "tab??o", "tab??s", "tacai", "tacam", "tacar", "tacas", "taca??", "tacha", "tache", "tacho", "tacis", "tacos", "tacou", "tacta", "tacus", "tacu??", "tac??o", "tafi??", "taful", "tagal", "tagaz", "tagba", "tagma", "tagna", "tagra", "tagu??", "taibo", "taibu", "taica", "taico", "taifa", "taif??", "taiga", "taina", "taine", "taino", "taipa", "taipe", "taip??", "taira", "taita", "taixi", "taixo", "tai??s", "tajal", "taj??s", "talai", "talam", "talar", "talas", "talei", "talem", "tales", "talha", "talhe", "talho", "talim", "talis", "talma", "talmi", "talol", "talos", "talou", "talpa", "tal??o", "tamas", "tamba", "tambi", "tambo", "tambu", "tamis", "tamom", "tamos", "tampa", "tampe", "tampo", "tamuz", "tam??o", "tanai", "tanal", "tanam", "tanar", "tanas", "tanau", "tanco", "tanc??", "tando", "tanei", "tanem", "tanes", "tange", "tangi", "tanha", "tanho", "tanja", "tanjo", "tanoa", "tanoe", "tanoo", "tanos", "tanou", "tansa", "tanso", "tant??", "taoca", "tapai", "tapam", "tapas", "tapei", "tapem", "tapes", "tape??", "tapir", "tapiz", "tapi??", "tapi??", "tapi??", "tapou", "tapo??", "tapua", "tapui", "tap??o", "taque", "taqui", "tarai", "taram", "tarar", "taras", "tarau", "tarca", "tarda", "tarde", "tardo", "tarei", "tarem", "tares", "tare??", "taria", "tarim", "taris", "tarje", "tarjo", "tarol", "tarot", "tarou", "tarpa", "tarre", "tarro", "tarsa", "tarte", "tart??", "tar??o", "tar??s", "tasca", "tasco", "tasgo", "tasg??", "tasna", "tasto", "tatau", "tata??", "tates", "tate??", "tatos", "tatra", "tatsu", "tatua", "tatue", "tatuo", "tatus", "tatu??", "tatz??", "tat??s", "taun??", "taura", "tauro", "tau??s", "tau??s", "tavas", "tavel", "tavu??", "tav??o", "taxai", "taxal", "taxam", "taxar", "taxas", "taxei", "taxem", "taxes", "taxia", "taxie", "taxio", "taxou", "ta??is", "ta??ba", "ta??va", "tch??s", "teada", "teale", "teame", "teana", "teano", "teara", "tearo", "tease", "teate", "tea??a", "tea??u", "tebas", "tebeu", "tecai", "tecal", "tecar", "tecei", "tecem", "teces", "teceu", "tecia", "tecla", "tecle", "teclo", "tecou", "tecto", "tecum", "tec??s", "tedas", "tedor", "ted??u", "tefes", "tefl??", "tegba", "tegbo", "tegme", "tegui", "teg??o", "teiga", "teigo", "teima", "teime", "teimo", "teios", "teipe", "teira", "teiru", "teir??", "teito", "teit??", "teixe", "teixo", "tei??s", "tejas", "tejos", "tejus", "telai", "telam", "telar", "telei", "telem", "teles", "telex", "telhe", "telho", "telim", "teliz", "telou", "telso", "temam", "temas", "temba", "tembi", "temb??", "temei", "temem", "temes", "temeu", "temia", "temn??", "temos", "tempe", "tem??o", "tenar", "tenaz", "tenca", "tenda", "tende", "tendi", "tendo", "tenes", "tengo", "tenha", "tenho", "tenos", "tenra", "tenro", "tense", "tenta", "tente", "tento", "teoro", "teose", "tepes", "tepor", "teque", "terai", "terbo", "terce", "terei", "terem", "teres", "tereu", "tergo", "teria", "terio", "terlo", "terma", "terme", "terna", "terne", "terol", "teros", "terre", "terro", "tersa", "terso", "ter??s", "ter??o", "ter??m", "tesai", "tesam", "tesar", "tesas", "tesbi", "tesc??", "tesei", "tesem", "tesla", "tesno", "tesos", "tesou", "tesse", "testa", "teste", "testo", "tesum", "tetai", "tetam", "tetar", "tetas", "tetei", "tetem", "tetes", "tetim", "tetos", "tetou", "tetro", "tet??u", "teuto", "teut??", "tevet", "tev??s", "tev??s", "te??am", "te??as", "te??na", "te??ba", "te??da", "te??do", "tiac??", "tiago", "tiais", "tiana", "tiano", "tiapi", "tiara", "tiat??", "tiaus", "tibai", "tibam", "tibar", "tibas", "tibei", "tibel", "tibem", "tiber", "tibes", "tibet", "tibis", "tibou", "tibum", "tibus", "ticai", "tical", "ticam", "ticar", "ticas", "ticos", "ticou", "tico??", "ticum", "ticus", "tidas", "tidor", "tidos", "tid??o", "tiela", "tiena", "tieta", "tieto", "tiet??", "tifas", "tifes", "tifeu", "tiflo", "tifos", "tif??o", "tigas", "tig??o", "tiito", "tijus", "tij??s", "tilai", "tilam", "tilar", "tilas", "tilda", "tilde", "tildo", "tilei", "tilem", "tiles", "tilha", "tilho", "tilim", "tilos", "tilou", "timar", "timas", "timba", "timbu", "timb??", "timb??", "timer", "timia", "timol", "timor", "timos", "tim??o", "tinam", "tinas", "tinca", "tinem", "tines", "tinga", "tinge", "tingi", "tingo", "tinha", "tinh??", "tinia", "tinir", "tinis", "tiniu", "tinja", "tinjo", "tinor", "tinte", "tin??o", "tioca", "tioco", "tiois", "tiona", "tione", "tiot??", "tipas", "tipes", "tipis", "tipi??", "tiple", "tipus", "tip??o", "tip??i", "tique", "tiqui", "tirai", "tiram", "tiras", "tiraz", "tirei", "tirem", "tireo", "tires", "tirou", "tirso", "tirta", "tir??o", "tisca", "tisco", "tisio", "tisna", "tisne", "tisno", "tisso", "tissu", "titim", "titio", "titis", "titor", "titos", "tit??o", "tit??s", "tiup??", "tiver", "tizas", "tizio", "tizis", "tiziu", "ti????o", "ti??ns", "ti??es", "ti??ba", "ti??va", "tlaco", "tlins", "tmema", "tmese", "toaca", "toado", "toais", "toamo", "toana", "toano", "toara", "toava", "tobas", "tobin", "tobiu", "tob??s", "tocai", "tocam", "tocas", "toce??", "tocho", "tocis", "tocl??", "tocos", "tocou", "toeis", "toemo", "toesa", "toese", "toeso", "toeza", "tofel", "tofes", "tofos", "tofus", "togai", "togam", "togar", "togas", "togou", "togue", "tog??i", "toice", "toino", "toira", "toire", "toiro", "toita", "toi??a", "toi??o", "tojal", "tojos", "tolam", "tolar", "tolas", "tolaz", "tolda", "tolde", "tolei", "tolem", "toler", "toles", "toleu", "tolha", "tolhe", "tolhi", "tolho", "tolil", "tolis", "tolos", "tolpe", "tolus", "tolva", "tol??o", "tomai", "tomam", "tomas", "tomba", "tombe", "tombo", "tomei", "tomem", "tomes", "tomia", "tomim", "tomos", "tomou", "tom??o", "tonai", "tonal", "tonam", "tonar", "tonas", "tonca", "tondo", "tonei", "tonel", "tonem", "toner", "tones", "tonfe", "tonga", "tongo", "tonha", "tonho", "tonia", "tonoa", "tonos", "tonou", "tonse", "tonso", "tons??", "toona", "topai", "topam", "topas", "topaz", "topei", "topem", "topes", "tope??", "topie", "topio", "topos", "topou", "toque", "toral", "toram", "torar", "toras", "tora??", "torba", "torce", "torci", "torda", "tordo", "torei", "tores", "torga", "torgo", "toris", "torma", "torna", "torne", "torno", "torom", "toros", "torou", "torra", "torre", "torro", "torsa", "torso", "torus", "torva", "torve", "torvo", "tor??o", "tor??a", "tor??o", "tor??m", "tosai", "tosam", "tosas", "tosei", "tosem", "toses", "tosga", "tosou", "tosse", "tossi", "tosso", "tosta", "toste", "tosto", "tos??o", "tot??s", "touce", "touco", "toupa", "toura", "toure", "touri", "touta", "tovas", "toxia", "toxis", "trace", "trada", "trade", "trado", "traem", "traga", "trago", "traia", "train", "traio", "trais", "traiu", "traja", "traje", "trajo", "trala", "trale", "tralo", "trame", "tramo", "trana", "trane", "trano", "trans", "trapa", "trape", "trara", "trar??", "trata", "trate", "trato", "trava", "trave", "travo", "traze", "tra??a", "tra??o", "tra??a", "tra??s", "treda", "tredo", "trefo", "trela", "treli", "trelo", "trel??", "trema", "treme", "tremi", "tremo", "trene", "trepa", "trepe", "trepo", "trera", "trere", "trero", "treso", "treus", "treva", "triai", "trial", "triam", "triar", "trias", "trica", "tridi", "triei", "triem", "tries", "triga", "trila", "trile", "trilo", "trina", "trine", "trini", "trino", "triol", "trios", "triou", "trips", "trip??", "trise", "triso", "tris??", "trite", "trito", "trit??", "tri??o", "troai", "troam", "troar", "troas", "trobo", "troca", "troce", "troco", "troei", "troem", "troes", "trofa", "trofo", "troge", "troia", "troie", "troio", "trole", "trona", "trone", "trons", "troou", "trope", "tropo", "trota", "trote", "troto", "trova", "trove", "trovo", "tro??a", "tro??o", "truas", "truc??", "truda", "trude", "trudo", "trufe", "trufo", "trupi", "trupo", "trup??", "truxu", "tru??o", "tr??is", "tsela", "tsuas", "tuaca", "tuai??", "tubai", "tubal", "tubam", "tubar", "tubas", "tubei", "tubel", "tubem", "tubes", "tubim", "tubis", "tubou", "tucho", "tucos", "tucum", "tucus", "tucu??", "tuc??s", "tuc??o", "tudel", "tudra", "tudro", "tudum", "tufai", "tufam", "tufar", "tufas", "tufei", "tufem", "tufes", "tufos", "tufou", "tugas", "tugem", "tuges", "tugia", "tugir", "tugis", "tugiu", "tugra", "tugue", "tuias", "tuins", "tuita", "tui??s", "tujam", "tujas", "tujol", "tujus", "tulas", "tules", "tulha", "tulos", "tumbe", "tumbo", "tumor", "tunai", "tunal", "tunam", "tunar", "tunas", "tunco", "tunda", "tunde", "tundo", "tunei", "tunem", "tunes", "tunga", "tungo", "tungu", "tunou", "tupam", "tupia", "tupir", "tupis", "tupiu", "tupla", "tuplo", "tup??s", "tup??s", "tuque", "turam", "turar", "turas", "tura??", "turba", "turbe", "turbo", "turca", "turdo", "turei", "turem", "tures", "turfa", "turfe", "turge", "turgi", "turia", "turis", "turja", "turjo", "turme", "turmo", "turna", "turn??", "turou", "turra", "turre", "turro", "turus", "turva", "turve", "turvi", "turvo", "tusca", "tusco", "tussa", "tussi", "tusso", "tusta", "tusto", "tutai", "tutam", "tutar", "tutas", "tutei", "tutem", "tutes", "tute??", "tutia", "tutie", "tutio", "tutou", "tutti", "tutum", "tutus", "tut??o", "tuvis", "tuxis", "tux??s", "tuzas", "tu??ra", "tu??te", "tu??to", "tweed", "twist", "t??cia", "t??fio", "t??ler", "t??lia", "t??lio", "t??lus", "t??sia", "t??sio", "t??voa", "t??xon", "t??mia", "t??mil", "t??mul", "t??lia", "t??lio", "t??los", "t??sio", "t??sis", "t??tia", "t??tio", "t??tis", "t??tum", "t??mio", "t??nea", "t??nia", "t??nio", "t??ade", "t??aso", "t??bio", "t??cio", "t??dia", "t??dio", "t??fia", "t??fis", "t??lea", "t??lia", "t??lio", "t??loa", "t??mio", "t??nea", "t??ner", "t??rea", "t??rio", "t??ris", "t??cai", "t??cia", "t??dea", "t??dis", "t??gua", "t??lia", "t??pia", "t??ria", "t??rio", "t??ron", "t??zia", "t??mio", "t??mix", "t??nis", "t??nus", "t??ber", "t??jis", "t??lia", "t??nis", "t??tsi", "uabu??", "uacos", "uacus", "uac??s", "uadas", "uades", "uados", "uaf??s", "uaic??", "uaim??", "uaina", "uaipi", "uait??", "uaiua", "uai??s", "uai??s", "uales", "ualua", "ual??s", "uamb??", "uam??s", "uam??i", "uanda", "uanga", "uanhi", "uanh??", "uani??", "uan??s", "uap??s", "uap??s", "uaqui", "uaris", "uari??", "uarus", "uar??s", "uasca", "uassu", "uaup??", "uauri", "uaur??", "uau??s", "uau??u", "uaxu??", "ua??a??", "ua??ba", "ubaia", "ubari", "ubat??", "ubeba", "ubel??", "uber??", "ubins", "ubira", "ubres", "ubu??u", "ucena", "uceno", "uchas", "uch??o", "ucila", "ucim??", "ucola", "ucubu", "ucu??s", "ucu??s", "udana", "udasi", "udina", "udino", "udons", "udora", "uenas", "uer??s", "ufana", "ufane", "ufano", "ufu??s", "ugabe", "ugada", "ugado", "ugais", "ugara", "ugava", "ugnis", "ugros", "uguei", "uguem", "ugues", "uiais", "uiap??", "uiara", "uiari", "uigur", "uiqu??", "uiruu", "uir??s", "uivai", "uivam", "uivar", "uivas", "uivei", "uivem", "uives", "uivos", "uivou", "ujar??", "ujica", "ulana", "ulano", "ulaus", "ulcas", "uleda", "uleia", "ulem??", "uliia", "ulite", "ulmos", "ulnal", "ulnar", "ulnas", "uloma", "ulons", "ulopa", "ulose", "ulota", "ulrei", "ultas", "ultor", "ultos", "uluas", "uluba", "uluco", "ulufe", "ulula", "ulule", "ululo", "ulvas", "ul??di", "umari", "umau??", "umbla", "umblo", "umbos", "umbo??", "umbra", "umbro", "umbus", "umb??s", "umeri", "umiri", "um??es", "unada", "unade", "unado", "unais", "unamo", "unani", "unara", "unaus", "unava", "uncis", "uncos", "undam", "undar", "undas", "unda??", "undei", "undem", "undes", "undos", "undou", "unedo", "uneis", "unela", "unelo", "unemo", "ungem", "unges", "ungia", "ungir", "ungis", "ungiu", "ungui", "ung??s", "unhai", "unham", "unhar", "unhei", "unhem", "unhes", "unhou", "unh??o", "uniam", "unias", "unido", "unimo", "unioa", "unios", "unira", "unir??", "unjam", "unjas", "unl??s", "unona", "untai", "untam", "untas", "untei", "untem", "untes", "untor", "untou", "untu??", "un??as", "un????o", "uongo", "upada", "upado", "upais", "upamo", "upara", "upava", "upeis", "upema", "upemo", "uperu", "upi??o", "upupa", "uquis", "uraca", "urago", "urais", "urali", "uralo", "urane", "urano", "uran??", "urare", "urari", "urato", "ura??u", "urbes", "urcas", "urcos", "urdam", "urdas", "urdem", "urdes", "urdia", "urdim", "urdir", "urdis", "urdiu", "urdus", "uredo", "ureia", "urgem", "urges", "urgia", "urgir", "urgis", "urgiu", "urias", "urida", "urina", "urine", "urino", "urins", "urjal", "urjam", "urjas", "urose", "urrai", "urram", "urrar", "urras", "urrei", "urrem", "urres", "urros", "urrou", "ursas", "urub??", "urucu", "urumi", "urum??", "urup??", "urup??", "ururi", "urutu", "uruxi", "urzal", "urzes", "usado", "usais", "usamo", "usara", "usar??", "usava", "useis", "usemo", "usgas", "usine", "usino", "usita", "usite", "usito", "usmai", "usmam", "usmar", "usmas", "usmei", "usmem", "usmes", "usmou", "usque", "ussas", "ussia", "ustam", "ustas", "ustem", "ustes", "ustir", "ustis", "ustiu", "ustos", "ust??o", "usura", "usure", "usuro", "utada", "utado", "utais", "utamo", "utana", "utara", "utata", "utava", "utemo", "utena", "utias", "utota", "utras", "uvada", "uvaia", "uvala", "uvato", "uva??a", "uva??u", "uveal", "uviar", "uvita", "uvite", "uvona", "uxins", "uxiva", "uxtes", "u??gua", "u??dis", "u??uas", "u??ste", "vaali", "vacai", "vacal", "vacam", "vacar", "vaceu", "vacou", "vacum", "vacus", "vacu??", "vac??o", "vades", "vadeu", "vade??", "vadia", "vadie", "vadio", "vafro", "vagai", "vagal", "vagam", "vagas", "vagem", "vages", "vage??", "vagia", "vagir", "vagis", "vagiu", "vagos", "vagou", "vague", "vaiai", "vaiam", "vaiar", "vaias", "vaiei", "vaiem", "vaies", "vaija", "vaila", "vaiou", "vaipe", "vaira", "vait??", "vaix??", "vai??s", "vajam", "vajas", "vaj??s", "valai", "valam", "valar", "valas", "valda", "valdo", "valei", "valem", "vales", "valeu", "valga", "valgo", "valha", "valho", "valia", "valie", "valos", "valou", "valse", "valso", "valva", "valvu", "val??o", "vamos", "vampe", "vampi", "vanc??", "vande", "vando", "vanga", "vante", "vanza", "vapas", "vapis", "vapu??", "vaque", "varai", "varam", "varar", "varas", "varei", "varem", "vares", "vare??", "varga", "varge", "varia", "varie", "vario", "varis", "variz", "varja", "varli", "varna", "varno", "varoa", "varou", "varra", "varre", "varri", "varro", "varve", "varvo", "var??o", "vasal", "vasas", "vasca", "vasco", "vasol", "vass??", "vaste", "vas??o", "vatas", "vatel", "vates", "vatus", "vaur??", "vavas", "vazai", "vazam", "vazas", "vazei", "vazem", "vazes", "vazie", "vazou", "veada", "veado", "vebas", "vect??", "vedai", "vedal", "vedam", "vedar", "vedas", "vedei", "vedem", "vedes", "vedor", "vedou", "vedra", "vedro", "veeme", "veiai", "veiam", "veiar", "veiei", "veiem", "veies", "veiga", "veios", "veiou", "veira", "veiro", "vejai", "vejam", "vejas", "velai", "velam", "velar", "velas", "velei", "velem", "veles", "velga", "velon", "velos", "velou", "velta", "vemos", "venal", "vence", "venci", "venda", "vende", "vendi", "vendo", "venha", "venho", "venta", "vente", "vento", "ven??a", "ven??o", "vepre", "vepsa", "veras", "veraz", "verbi", "verei", "verem", "veres", "vere??", "verga", "vergo", "verg??", "veria", "veril", "veris", "verna", "verne", "verno", "verpa", "versa", "verse", "verso", "verta", "verte", "verti", "verto", "verve", "ver??s", "ver??o", "ver??a", "ver??s", "vesco", "vesga", "vesgo", "vessa", "vesse", "vesso", "vesta", "veste", "vesti", "vesto", "vetai", "vetam", "vetas", "vetei", "vetem", "vetes", "vetos", "vetou", "vet??o", "vexai", "vexam", "vexar", "vexas", "vexei", "vexem", "vexes", "vexou", "vezai", "vezam", "vezar", "vezas", "vezei", "vezem", "vezer", "vezou", "viada", "viado", "viais", "viaja", "viaje", "viajo", "viana", "viara", "vibal", "vibas", "vibra", "vibre", "vibro", "vicei", "vicem", "vices", "vichi", "vicia", "vicie", "vicio", "vicos", "victa", "victo", "vidai", "vidal", "vidam", "vidar", "videi", "videm", "vides", "vide??", "vidma", "vidor", "vidou", "vidra", "vidre", "vidro", "vid??o", "viela", "vielo", "viera", "vieza", "vigai", "vigam", "vigar", "vigas", "vigei", "vigem", "viger", "viges", "vigeu", "vigia", "vigie", "vigio", "vigna", "vigou", "vigue", "viias", "viiia", "vijam", "vijas", "vilar", "vileu", "vilie", "vilio", "vilis", "vili??", "villa", "viloa", "vilro", "vilta", "vimai", "vimam", "vimar", "vimas", "vimba", "vimei", "vimem", "vimes", "vimos", "vimou", "vinal", "vinas", "vinca", "vinco", "vinde", "vindo", "vinga", "vingo", "vinha", "vinhe", "vinis", "vint??", "vioco", "viola", "viole", "violo", "virai", "viram", "viras", "virei", "virem", "vires", "virga", "virge", "virgo", "viria", "viris", "virmo", "virol", "virou", "virte", "vir??s", "vir??o", "vir??s", "visai", "visam", "visas", "visco", "visc??", "visei", "visem", "vises", "visgo", "visg??", "visma", "visom", "vison", "visos", "visou", "vispa", "vispe", "vispo", "visse", "vista", "viste", "visto", "vitae", "vitas", "vites", "vitre", "vitro", "vitus", "vivai", "vivam", "vivar", "vivas", "vivaz", "vivei", "vivem", "vives", "viveu", "vivia", "vivi??", "vivi??", "vivou", "vivre", "vixit", "vixnu", "vizir", "vi??ai", "vi??am", "vi??ar", "vi??as", "vi??or", "vi??ou", "vi??es", "vi??va", "vi??ve", "vi??vo", "vldis", "vlem??", "voada", "voado", "voais", "voamo", "voara", "voar??", "voata", "voava", "voa??o", "vodas", "vodca", "vodka", "vodos", "vodum", "vodus", "voeis", "voeja", "voeje", "voejo", "voemo", "vogai", "vogam", "vogar", "vogas", "vogou", "vogue", "vogul", "voile", "voixa", "voixo", "volar", "volas", "volat", "volco", "volc??", "volos", "volta", "volte", "volto", "volts", "volva", "volve", "volvi", "volvo", "vonc??", "vonda", "vor??s", "vosco", "vose??", "vossa", "votai", "votam", "votas", "votei", "votem", "votes", "votou", "vouv??", "vov??s", "voze??", "voz??o", "vreia", "vrij??", "vriti", "vr??di", "vuapa", "vubas", "vudus", "vulca", "vulco", "vulso", "vulte", "vult??", "vulva", "vumbe", "vumbi", "vumos", "vunai", "vunam", "vunar", "vunas", "vunda", "vunei", "vunem", "vunes", "vungo", "vung??", "vunje", "vunou", "vunza", "vunze", "vunzo", "vurme", "vurmo", "vurm??", "vuvus", "v??cea", "v??ceo", "v??eas", "v??gil", "v??lea", "v??lio", "v??lis", "v??rio", "v??tio", "v??tua", "v??lea", "v??lia", "v??lum", "v??rio", "v??nia", "v??cia", "v??coa", "v??dia", "v??dua", "v??eis", "v??gil", "v??mea", "v??nea", "v??neo", "v??rea", "v??reo", "v??tex", "v??tis", "v??tor", "v??bis", "v??mer", "water", "watts", "weber", "whist", "white", "xab??o", "xab??u", "xacas", "xacos", "xacra", "xador", "xaias", "xaile", "xaj??s", "xalas", "xales", "xalma", "xamas", "xamb??", "xang??", "xante", "xanto", "xant??", "xaor??", "xaque", "xarau", "xarda", "xarel", "xaria", "xarus", "xar??s", "xar??m", "xar??u", "xates", "xaual", "xauim", "xau??s", "xaxim", "xeica", "xelim", "xelma", "xenai", "xenam", "xenar", "xenas", "xenei", "xenem", "xenes", "xenos", "xenou", "xeque", "xeras", "xereu", "xerez", "xerga", "xeros", "xerox", "xerva", "xer??m", "xer??s", "xetas", "xetra", "xetre", "xetro", "xeura", "xev??s", "xexos", "xex??s", "xex??u", "xibas", "xibio", "xibiu", "xicos", "xicus", "xifos", "xiita", "xilas", "xilol", "xilos", "ximbo", "ximb??", "xim??o", "xinai", "xinam", "xinar", "xinas", "xinei", "xinem", "xines", "xinga", "xingo", "xinje", "xinou", "xint??", "xipos", "xiras", "xiraz", "xiris", "xirua", "xirus", "xir??s", "xisto", "xitau", "xixis", "xix??s", "xi??as", "xocai", "xocam", "xocar", "xocas", "xocou", "xoc??s", "xod??s", "xogum", "xonai", "xonam", "xonar", "xonas", "xonei", "xonem", "xones", "xonou", "xoque", "xorca", "xorda", "xordo", "xosas", "xossa", "xotai", "xotam", "xotar", "xotas", "xotei", "xotem", "xotes", "xotou", "xoxos", "xoxus", "xuat??", "xucra", "xucro", "xurda", "xurde", "xurdi", "xurdo", "xuris", "xurus", "xuxos", "x??non", "x??nia", "x??nio", "x??fio", "x??lon", "yocto", "yotta", "y??gas", "zabra", "zabro", "zacas", "zaca??", "zacos", "zacum", "zagal", "zagas", "zagor", "zagre", "zagus", "zag??o", "zaida", "zaidi", "zaimo", "zaina", "zaine", "zaino", "zaira", "zaire", "zamas", "zamba", "zambi", "zambo", "zamb??", "zampa", "zampe", "zampo", "zanal", "zanas", "zande", "zanga", "zango", "zanho", "zanni", "zante", "zanza", "zanze", "zanzo", "zapes", "zarca", "zarco", "zarga", "zargo", "zarpa", "zarpe", "zarpo", "zarra", "zarro", "zarza", "zar??o", "zar??s", "zavai", "zavam", "zavar", "zavas", "zavei", "zavem", "zaves", "zavou", "zavra", "zazos", "zebos", "zebre", "zebro", "zebus", "zefir", "zegri", "zelai", "zelam", "zelas", "zelei", "zelem", "zeles", "zelha", "zelos", "zelou", "zenam", "zenas", "zenda", "zende", "zenem", "zenes", "zenir", "zenis", "zeniu", "zepto", "zerai", "zeram", "zeras", "zerbo", "zerei", "zerem", "zeres", "zeros", "zerou", "zesto", "zetas", "zetta", "zeugo", "ziada", "ziado", "ziais", "ziamo", "ziara", "ziava", "zicha", "ziche", "zicho", "zieis", "ziemo", "zilro", "zimbo", "zimos", "zinam", "zinas", "zinca", "zinem", "zines", "zinga", "zingo", "zinha", "zinho", "zinir", "zinis", "ziniu", "zipai", "zipam", "zipar", "zipas", "zipei", "zipem", "zipes", "zipou", "zirbo", "zirra", "zirre", "zirro", "zitos", "zizia", "zizie", "zizio", "zoada", "zoado", "zoais", "zoamo", "zoara", "zoava", "zoeia", "zoeis", "zoemo", "zogas", "zogue", "zoica", "zoico", "zoide", "zoilo", "zoina", "zolas", "zolis", "zomba", "zombe", "zombo", "zomol", "zonai", "zonal", "zonam", "zonar", "zonei", "zonem", "zones", "zone??", "zonou", "zonza", "zonze", "zonzo", "zoons", "zoose", "zopas", "zopos", "zorne", "zorno", "zorn??", "zorra", "zorro", "zorte", "zorto", "zort??", "zotes", "zoupa", "zoupo", "zoura", "zovos", "zuais", "zuate", "zuavo", "zucai", "zucam", "zucar", "zucas", "zuche", "zucos", "zucou", "zuele", "zuelo", "zuel??", "zuir??", "zulai", "zulam", "zular", "zulas", "zulei", "zulem", "zules", "zulos", "zulou", "zulus", "zumba", "zumbe", "zumbi", "zumbo", "zunai", "zunam", "zunar", "zunas", "zunda", "zunei", "zunem", "zunes", "zunga", "zungo", "zungu", "zunhi", "zunia", "zunir", "zunis", "zuniu", "zunou", "zupai", "zupam", "zupar", "zupas", "zupei", "zupem", "zupes", "zupou", "zuque", "zuras", "zurca", "zurpa", "zurra", "zurre", "zurro", "zuru??", "zurza", "zurze", "zurzi", "zurzo", "zu??am", "zu??as", "zu??da", "zu??do", "z??mia", "z??ibo", "z??nia", "??be??a", "??baco", "??baro", "??bato", "??bavo", "??bias", "??bies", "??biga", "??brus", "??bsis", "??bsus", "??cade", "??cano", "??care", "??caro", "??cave", "??cavo", "??cero", "??cias", "??cies", "??cina", "??cino", "??cios", "??cipe", "??clis", "??cnea", "??cnua", "??come", "??cope", "??copo", "??core", "??coro", "??cron", "??ctia", "??ctio", "??dina", "??dine", "??dino", "??dipe", "??dipo", "??dito", "??faca", "??fios", "??fodo", "??fona", "??fono", "??gamo", "??gapa", "??gape", "??garo", "??gata", "??gate", "??gena", "??geno", "??gida", "??gino", "??gios", "??glia", "??gmen", "??gnis", "??gnus", "??golo", "??gona", "??gono", "??gria", "??grio", "??guam", "??guas", "??guem", "??gues", "??lacr", "??lalo", "??lamo", "??lcea", "??lcis", "??leas", "??lemo", "??leos", "??lhia", "??liba", "??libi", "??lica", "??lico", "??life", "??lime", "??lios", "??lita", "??lofo", "??logo", "??lpea", "??lqua", "??lula", "??lveo", "??page", "??peta", "??peto", "??pida", "??pios", "??pira", "??piro", "??poca", "??pode", "??podo", "??pona", "??pone", "??pono", "??poro", "??poto", "??pula", "??pulo", "??quea", "??queo", "??rabo", "??rbia", "??rbio", "??rcio", "??rdea", "??rgio", "??rgon", "??rias", "??rico", "??rida", "??rsis", "??rula", "??runs", "??saro", "??scia", "??scio", "??scon", "??scua", "??sias", "??sios", "??soas", "??soos", "??spis", "??ster", "??stur", "??tavo", "??tele", "??tico", "??tila", "??tima", "??timo", "??tipo", "??tona", "??tono", "??trio", "??ulax", "??urea", "??veis", "??vida", "??vila", "??xeis", "??xica", "??xico", "??xilo", "??xona", "??xone", "??zeas", "??zeos", "??ziga", "??zigo", "??zima", "??zimo", "??mios", "??mnio", "??ngio", "??nion", "??nodo", "??nulo", "??nuos", "??bano", "??beno", "??bias", "??blis", "??bria", "??brio", "??bulo", "??cana", "??cano", "??cica", "??cico", "??cope", "??cran", "??cula", "??culo", "??dalo", "??dias", "??dica", "??dico", "??dipo", "??duos", "??feta", "??fira", "??firo", "??fode", "??fodo", "??foro", "??gide", "??grio", "??guas", "??guem", "??lafo", "??late", "??lica", "??lico", "??limo", "??neas", "??neos", "??nula", "??pula", "??pura", "??quio", "??quis", "??quos", "??quus", "??rana", "??rano", "??rbio", "??reas", "??rebo", "??reis", "??reos", "??rgio", "??rias", "??rina", "??rion", "??sima", "??simo", "??sipo", "??soce", "??ssuo", "??ster", "??sula", "??tego", "??tigo", "??timo", "??vana", "??vano", "??ider", "??mero", "??mese", "??mica", "??mico", "??mida", "??mide", "??mulo", "??nica", "??nico", "??nsis", "??uria", "??xaco", "??xuis", "??xule", "??amos", "??bice", "??caro", "??cios", "??cono", "??core", "??ctis", "??ctus", "??dias", "??dola", "??gnea", "??gneo", "??guem", "??gues", "??leon", "??leos", "??leus", "??lias", "??lice", "??lion", "??lios", "??lium", "??mpia", "??naco", "??ndri", "??ndua", "??ngea", "??ngua", "??nion", "??nios", "??nope", "??nsua", "??nuba", "??nubo", "??nula", "??nvia", "??nvio", "??pida", "??rios", "??rpex", "??sate", "??sops", "??taco", "??talo", "??tame", "??tamo", "??teas", "??tria", "??trio", "??xalo", "??xias", "??belo", "??bice", "??bito", "??bolo", "??bulo", "??cimo", "??cios", "??crea", "??culo", "??dios", "??frio", "??fris", "??leum", "??mnia", "??palo", "??pido", "??pios", "??rfia", "??rf??s", "??rgio", "??robo", "??sido", "??smio", "??stio", "??valo", "??vana", "??vano", "??veas", "??veos", "??vnis", "??bere", "??bero", "??bias", "??bios", "??mera", "??mero", "??ncia", "??ncus", "??ngue", "??nsia", "??raco", "??rase", "??rcea", "??rceo", "??rica", "??rico", "??ropo", "??sias", "??snea", "??ssua", "??stia", "??veas", "??vica", "??vico", "??vida", "??vido", "??vula"]), Eg = (e(yg = {
    aanas: "aan??s",
    ababa: "abab??",
    ababe: "abab??",
    abaca: "abac??",
    abace: "abac??",
    abaga: "abag??",
    abaio: "abai??",
    abaja: "abaj??",
    abana: "aban??",
    abara: "abar??",
    abare: "abar??",
    abebe: "abeb??",
    abece: "abec??",
    abede: "abed??",
    abico: "abic??",
    abifa: "abif??",
    abiao: "abi??o",
    ablui: "ablu??",
    abnui: "abnu??",
    abobo: "abob??",
    abofe: "abof??",
    abore: "abor??",
    aboco: "abo??o",
    abois: "abo??s",
    abste: "abst??",
    abuxo: "abux??",
    abuco: "abu??o",
    abuca: "abu????",
    acaia: "acai??",
    acaja: "acaj??",
    acara: "acar??",
    acaua: "acau??",
    acaco: "aca??o",
    acaca: "aca????",
    acaem: "aca??m",
    acaes: "aca??s",
    aceba: "aceb??",
    aceja: "acej??",
    achem: "ach??m",
    acmao: "acm??o",
    acola: "acol??",
    acona: "acon??",
    acota: "acot??",
    acroa: "acro??",
    acreu: "acr??u",
    acuma: "acum??",
    acure: "acur??",
    acuis: "acu??s",
    acens: "ac??ns",
    adana: "adan??",
    adais: "ada??s",
    adeba: "adeb??",
    adera: "ader??",
    adeva: "adev??",
    adioe: "adio??",
    adira: "adir??",
    adixa: "adix??",
    adiao: "adi??o",
    adjas: "adj??s",
    adoga: "adog??",
    adona: "adon??",
    adoca: "ado??a",
    adoco: "ado??o",
    aduma: "adum??",
    aduca: "adu??a",
    advem: "adv??m"
}, "advem", "adv??m"),
e(yg, "adeis", "ad??is"),
e(yg, "adion", "ad??on"),
e(yg, "afara", "afar??"),
e(yg, "afaco", "afa??o"),
e(yg, "afefe", "afef??"),
e(yg, "afega", "afeg??"),
e(yg, "afera", "afer??"),
e(yg, "afifa", "afif??"),
e(yg, "aflui", "aflu??"),
e(yg, "afoca", "afoc??"),
e(yg, "afoxe", "afox??"),
e(yg, "afuna", "afun??"),
e(yg, "afura", "afur??"),
e(yg, "afoes", "af??es"),
e(yg, "agaba", "agab??"),
e(yg, "agace", "agac??"),
e(yg, "agada", "agad??"),
e(yg, "agaia", "agai??"),
e(yg, "agaja", "agaj??"),
e(yg, "agana", "agan??"),
e(yg, "agare", "agar??"),
e(yg, "agaza", "agaz??"),
e(yg, "agais", "aga??s"),
e(yg, "agaus", "aga??s"),
e(yg, "agbes", "agb??s"),
e(yg, "agera", "ager??"),
e(yg, "agira", "agir??"),
e(yg, "agogo", "agog??"),
e(yg, "agoma", "agom??"),
e(yg, "agota", "agot??"),
e(yg, "agoes", "ago??s"),
e(yg, "agrea", "agre??"),
e(yg, "agrao", "agr??o"),
e(yg, "agrem", "agr??m"),
e(yg, "aguai", "agua??"),
e(yg, "aguca", "agu??a"),
e(yg, "aguco", "agu??o"),
e(yg, "aiapa", "aiap??"),
e(yg, "aiape", "aiap??"),
e(yg, "aiara", "aiar??"),
e(yg, "aiaca", "aia????"),
e(yg, "aicas", "aic??s"),
e(yg, "ailas", "ail??s"),
e(yg, "ailos", "ail??s"),
e(yg, "aioca", "aioc??"),
e(yg, "aipas", "aip??s"),
e(yg, "aipes", "aip??s"),
e(yg, "airua", "airu??"),
e(yg, "airao", "air??o"),
e(yg, "airos", "air??s"),
e(yg, "aisla", "aisl??"),
e(yg, "aitas", "ait??s"),
e(yg, "aitao", "ait??o"),
e(yg, "aiuca", "aiuc??"),
e(yg, "aiuiu", "aiui??"),
e(yg, "aiuna", "aiun??"),
e(yg, "aiuas", "aiu??s"),
e(yg, "aiues", "aiu??s"),
e(yg, "aivao", "aiv??o"),
e(yg, "aioes", "ai??es"),
e(yg, "ajabo", "ajab??"),
e(yg, "ajapa", "ajap??"),
e(yg, "ajara", "ajar??"),
e(yg, "ajare", "ajar??"),
e(yg, "ajobo", "ajob??"),
e(yg, "ajoia", "ajoi??"),
e(yg, "ajupa", "ajup??"),
e(yg, "ajois", "aj??is"),
e(yg, "alaba", "alab??"),
e(yg, "alabe", "alab??"),
e(yg, "alaca", "alac??"),
e(yg, "alafe", "alaf??"),
e(yg, "alaja", "alaj??"),
e(yg, "alala", "alal??"),
e(yg, "alama", "alam??"),
e(yg, "alavo", "alav??"),
e(yg, "alaza", "alaz??"),
e(yg, "albia", "albi??"),
e(yg, "alboi", "alb??i"),
e(yg, "aldea", "alde??"),
e(yg, "aleda", "aled??"),
e(yg, "aleja", "alej??"),
e(yg, "alema", "alem??"),
e(yg, "alesa", "ales??"),
e(yg, "aleva", "alev??"),
e(yg, "alhea", "alhe??"),
e(yg, "aliga", "alig??"),
e(yg, "alias", "ali??s"),
e(yg, "alode", "alod??"),
e(yg, "aloas", "alo??s"),
e(yg, "aloes", "alo??s"),
e(yg, "alpao", "alp??o"),
e(yg, "altea", "alte??"),
e(yg, "alufa", "aluf??"),
e(yg, "aluja", "aluj??"),
e(yg, "aluma", "alum??"),
e(yg, "alupa", "alup??"),
e(yg, "aluta", "alut??"),
e(yg, "aluxa", "alux??"),
e(yg, "aluia", "alu??a"),
e(yg, "aluis", "alu??s"),
e(yg, "alvea", "alve??"),
e(yg, "alvao", "alv??o"),
e(yg, "alcai", "al??ai"),
e(yg, "alcam", "al??am"),
e(yg, "alcar", "al??ar"),
e(yg, "alcas", "al??as"),
e(yg, "alcou", "al??ou"),
e(yg, "alcuz", "al??uz"),
e(yg, "alcao", "al????o"),
e(yg, "aleus", "al??us"),
e(yg, "amala", "amal??"),
e(yg, "amale", "amal??"),
e(yg, "amana", "aman??"),
e(yg, "amapa", "amap??"),
e(yg, "amara", "amar??"),
e(yg, "amata", "amat??"),
e(yg, "amboa", "ambo??"),
e(yg, "ambra", "ambr??"),
e(yg, "ambua", "ambu??"),
e(yg, "ambui", "ambu??"),
e(yg, "ambao", "amb??o"),
e(yg, "ambes", "amb??s"),
e(yg, "amele", "amel??"),
e(yg, "ameca", "ame??a"),
e(yg, "amoia", "amoi??"),
e(yg, "amoma", "amom??"),
e(yg, "amona", "amon??"),
e(yg, "amore", "amor??"),
e(yg, "amure", "amur??"),
e(yg, "amuxa", "amux??"),
e(yg, "amens", "am??ns"),
e(yg, "amoes", "am??es"),
e(yg, "anabo", "anab??"),
e(yg, "anaca", "anac??"),
e(yg, "anace", "anac??"),
e(yg, "anaga", "anag??"),
e(yg, "anaia", "anai??"),
e(yg, "anaja", "anaj??"),
e(yg, "anaje", "anaj??"),
e(yg, "anana", "anan??"),
e(yg, "anaue", "anau??"),
e(yg, "ancia", "anci??"),
e(yg, "andos", "and??s"),
e(yg, "angaa", "anga??"),
e(yg, "angau", "anga??"),
e(yg, "anhas", "anh??s"),
e(yg, "anida", "anid??"),
e(yg, "aniao", "ani??o"),
e(yg, "anjao", "anj??o"),
e(yg, "anova", "anov??"),
e(yg, "antao", "ant??o"),
e(yg, "anuai", "anua??"),
e(yg, "anuia", "anui??"),
e(yg, "anuja", "anuj??"),
e(yg, "anuia", "anu??a"),
e(yg, "anuis", "anu??s"),
e(yg, "anaos", "an??os"),
e(yg, "anaze", "an??ze"),
e(yg, "anazo", "an??zo"),
e(yg, "anaza", "an??z??"),
e(yg, "aneis", "an??is"),
e(yg, "anois", "an??is"),
e(yg, "anoes", "an??es"),
e(yg, "aoita", "ao??ta"),
e(yg, "apaja", "apaj??"),
e(yg, "apama", "apam??"),
e(yg, "apapa", "apap??"),
e(yg, "apais", "apa??s"),
e(yg, "apeda", "aped??"),
e(yg, "apeja", "apej??"),
e(yg, "apete", "apet??"),
e(yg, "apiaa", "apia??"),
e(yg, "apina", "apin??"),
e(yg, "apita", "apit??"),
e(yg, "apiao", "api??o"),
e(yg, "apora", "apor??"),
e(yg, "aprea", "apre??"),
e(yg, "apuie", "apui??"),
e(yg, "apuis", "apu??s"),
e(yg, "apoem", "ap??em"),
e(yg, "apoes", "ap??es"),
e(yg, "aquem", "aqu??m"),
e(yg, "araba", "arab??"),
e(yg, "araia", "arai??"),
e(yg, "araio", "arai??"),
e(yg, "araiu", "arai??"),
e(yg, "arama", "aram??"),
e(yg, "arana", "aran??"),
e(yg, "arata", "arat??"),
e(yg, "araua", "arau??"),
e(yg, "araue", "arau??"),
e(yg, "araxa", "arax??"),
e(yg, "araca", "ara????"),
e(yg, "arche", "arch??"),
e(yg, "arcta", "arct??"),
e(yg, "arcua", "arcu??"),
e(yg, "arede", "ared??"),
e(yg, "arere", "arer??"),
e(yg, "areao", "are??o"),
e(yg, "argao", "arg??o"),
e(yg, "argem", "arg??m"),
e(yg, "aribe", "arib??"),
e(yg, "arica", "aric??"),
e(yg, "arigo", "arig??"),
e(yg, "arima", "arim??"),
e(yg, "arina", "arin??"),
e(yg, "arita", "arit??"),
e(yg, "arjoa", "arjo??"),
e(yg, "arjao", "arj??o"),
e(yg, "armao", "arm??o"),
e(yg, "armeu", "arm??u"),
e(yg, "arnes", "arn??s"),
e(yg, "aroca", "aroc??"),
e(yg, "arpea", "arpe??"),
e(yg, "arpao", "arp??o"),
e(yg, "arpeu", "arp??u"),
e(yg, "arrai", "arra??"),
e(yg, "arrea", "arre??"),
e(yg, "arrio", "arri??"),
e(yg, "arrua", "arru??"),
e(yg, "arrui", "arru??"),
e(yg, "arras", "arr??s"),
e(yg, "artao", "art??o"),
e(yg, "aruai", "arua??"),
e(yg, "aruau", "arua??"),
e(yg, "arube", "arub??"),
e(yg, "aruma", "arum??"),
e(yg, "arura", "arur??"),
e(yg, "aruas", "aru??s"),
e(yg, "arues", "aru??s"),
e(yg, "arcao", "ar????o"),
e(yg, "areus", "ar??us"),
e(yg, "aroes", "ar??es"),
e(yg, "ascas", "asc??s"),
e(yg, "asnea", "asne??"),
e(yg, "aspea", "aspe??"),
e(yg, "assea", "asse??"),
e(yg, "assua", "assu??"),
e(yg, "ataga", "atag??"),
e(yg, "atala", "atal??"),
e(yg, "atama", "atam??"),
e(yg, "atana", "atan??"),
e(yg, "atara", "atar??"),
e(yg, "atare", "atar??"),
e(yg, "atera", "ater??"),
e(yg, "atiba", "atib??"),
e(yg, "atias", "ati??s"),
e(yg, "atica", "ati??a"),
e(yg, "atico", "ati??o"),
e(yg, "aticu", "ati??u"),
e(yg, "aties", "ati??s"),
e(yg, "atoba", "atob??"),
e(yg, "atofa", "atof??"),
e(yg, "atopa", "atop??"),
e(yg, "atoto", "atot??"),
e(yg, "atrai", "atra??"),
e(yg, "atras", "atr??s"),
e(yg, "ature", "atur??"),
e(yg, "atuia", "atu??a"),
e(yg, "atuis", "atu??s"),
e(yg, "atens", "at??ns"),
e(yg, "atois", "at??is"),
e(yg, "auaiu", "auai??"),
e(yg, "auacu", "aua??u"),
e(yg, "auais", "aua??s"),
e(yg, "auete", "auet??"),
e(yg, "aufue", "aufu??"),
e(yg, "austa", "aust??"),
e(yg, "ausao", "aus??o"),
e(yg, "aucas", "au????s"),
e(yg, "aucao", "au????o"),
e(yg, "avaca", "avac??"),
e(yg, "avaiu", "avai??"),
e(yg, "avala", "aval??"),
e(yg, "avara", "avar??"),
e(yg, "avare", "avar??"),
e(yg, "avata", "avat??"),
e(yg, "avela", "avel??"),
e(yg, "aveao", "ave??o"),
e(yg, "avira", "avir??"),
e(yg, "aviao", "avi??o"),
e(yg, "avius", "avi??s"),
e(yg, "avoao", "avo??o"),
e(yg, "avens", "av??ns"),
e(yg, "axabo", "axab??"),
e(yg, "axexe", "axex??"),
e(yg, "axoxo", "axox??"),
e(yg, "axuas", "axu??s"),
e(yg, "azala", "azal??"),
e(yg, "azava", "azav??"),
e(yg, "azeva", "azev??"),
e(yg, "azibo", "azib??"),
e(yg, "azura", "azur??"),
e(yg, "azois", "az??is"),
e(yg, "acacu", "a??acu"),
e(yg, "acala", "a??al??"),
e(yg, "acame", "a??ame"),
e(yg, "acamo", "a??amo"),
e(yg, "acape", "a??ape"),
e(yg, "acapo", "a??apo"),
e(yg, "acapa", "a??ap??"),
e(yg, "acais", "a??a??s"),
e(yg, "acobe", "a??obe"),
e(yg, "acobo", "a??obo"),
e(yg, "acoba", "a??ob??"),
e(yg, "acoca", "a??oca"),
e(yg, "acoda", "a??oda"),
e(yg, "acodo", "a??odo"),
e(yg, "acora", "a??ora"),
e(yg, "acuba", "a??ub??"),
e(yg, "acuda", "a??uda"),
e(yg, "acude", "a??ude"),
e(yg, "acula", "a??ula"),
e(yg, "acule", "a??ule"),
e(yg, "aculo", "a??ulo"),
e(yg, "acumi", "a??umi"),
e(yg, "acoes", "a????es"),
e(yg, "aerea", "a??rea"),
e(yg, "aereo", "a??reo"),
e(yg, "aeneo", "a??neo"),
e(yg, "aivas", "a??vas"),
e(yg, "aioli", "a??oli"),
e(yg, "aonia", "a??nia"),
e(yg, "aonio", "a??nio"),
e(yg, "aunos", "a??nos"),
e(yg, "auste", "a??ste"),
e(yg, "babea", "babe??"),
e(yg, "babia", "babi??"),
e(yg, "babla", "babl??"),
e(yg, "babui", "babu??"),
e(yg, "babas", "bab??s"),
e(yg, "babao", "bab??o"),
e(yg, "bacao", "bac??o"),
e(yg, "badem", "bad??m"),
e(yg, "bades", "bad??s"),
e(yg, "bados", "bad??s"),
e(yg, "baele", "bael??"),
e(yg, "baena", "baen??"),
e(yg, "bagea", "bage??"),
e(yg, "bagua", "bagu??"),
e(yg, "baiau", "baia??"),
e(yg, "baica", "baic??"),
e(yg, "baira", "bair??"),
e(yg, "baiao", "bai??o"),
e(yg, "bajea", "baje??"),
e(yg, "balea", "bale??"),
e(yg, "baloa", "balo??"),
e(yg, "balao", "bal??o"),
e(yg, "balca", "bal??a"),
e(yg, "balco", "bal??o"),
e(yg, "bambe", "bamb??"),
e(yg, "bansa", "bans??"),
e(yg, "banta", "bant??"),
e(yg, "bante", "bant??"),
e(yg, "banze", "banz??"),
e(yg, "baoba", "baob??"),
e(yg, "barau", "bara??"),
e(yg, "barso", "bars??"),
e(yg, "barao", "bar??o"),
e(yg, "barem", "bar??m"),
e(yg, "basea", "base??"),
e(yg, "basse", "bass??"),
e(yg, "batas", "bat??s"),
e(yg, "batao", "bat??o"),
e(yg, "baume", "baum??"),
e(yg, "bauas", "bau??s"),
e(yg, "bavas", "bav??s"),
e(yg, "baxas", "bax??s"),
e(yg, "bazes", "baz??s"),
e(yg, "bacas", "ba??as"),
e(yg, "bacos", "ba??os"),
e(yg, "baule", "ba??le"),
e(yg, "bauna", "ba??na"),
e(yg, "beaba", "beab??"),
e(yg, "bedea", "bede??"),
e(yg, "bedui", "bedu??"),
e(yg, "bedao", "bed??o"),
e(yg, "bedem", "bed??m"),
e(yg, "befas", "bef??s"),
e(yg, "begbe", "begb??"),
e(yg, "beica", "bei??a"),
e(yg, "beico", "bei??o"),
e(yg, "belda", "beld??"),
e(yg, "belao", "bel??o"),
e(yg, "belem", "bel??m"),
e(yg, "beles", "bel??s"),
e(yg, "bende", "bend??"),
e(yg, "bendo", "bend??"),
e(yg, "benha", "benh??"),
e(yg, "benca", "ben??a"),
e(yg, "beroe", "bero??"),
e(yg, "berca", "ber??a"),
e(yg, "berco", "ber??o"),
e(yg, "bereu", "ber??u"),
e(yg, "beros", "ber??s"),
e(yg, "betao", "bet??o"),
e(yg, "betoi", "bet??i"),
e(yg, "beens", "be??ns"),
e(yg, "bibia", "bibi??"),
e(yg, "bibio", "bibi??"),
e(yg, "bibla", "bibl??"),
e(yg, "biboi", "bib??i"),
e(yg, "bicao", "bic??o"),
e(yg, "bidao", "bid??o"),
e(yg, "bides", "bid??s"),
e(yg, "bidos", "bid??s"),
e(yg, "bigua", "bigu??"),
e(yg, "bijui", "biju??"),
e(yg, "bilho", "bilh??"),
e(yg, "bilmo", "bilm??"),
e(yg, "bimao", "bim??o"),
e(yg, "biniu", "bini??"),
e(yg, "birma", "birm??"),
e(yg, "birco", "bir??o"),
e(yg, "biros", "bir??s"),
e(yg, "bisao", "bis??o"),
e(yg, "bitra", "bitr??"),
e(yg, "biura", "biur??"),
e(yg, "blase", "blas??"),
e(yg, "boaco", "boa??o"),
e(yg, "bobai", "boba??"),
e(yg, "bobea", "bobe??"),
e(yg, "bobao", "bob??o"),
e(yg, "bocue", "bocu??"),
e(yg, "bocao", "boc??o"),
e(yg, "bocos", "boc??s"),
e(yg, "bodao", "bod??o"),
e(yg, "bodos", "bod??s"),
e(yg, "bofos", "bof??s"),
e(yg, "bogos", "bog??s"),
e(yg, "boime", "boim??"),
e(yg, "boira", "boir??"),
e(yg, "boiao", "boi??o"),
e(yg, "boica", "boi??a"),
e(yg, "boico", "boi??o"),
e(yg, "boicu", "boi??u"),
e(yg, "bojui", "boju??"),
e(yg, "bojao", "boj??o"),
e(yg, "bolea", "bole??"),
e(yg, "bolho", "bolh??"),
e(yg, "bolao", "bol??o"),
e(yg, "bolca", "bol??a"),
e(yg, "boleu", "bol??u"),
e(yg, "bongo", "bong??"),
e(yg, "bonha", "bonh??"),
e(yg, "bonco", "bon??o"),
e(yg, "bonca", "bon????"),
e(yg, "bones", "bon??s"),
e(yg, "boora", "boor??"),
e(yg, "boras", "bor??s"),
e(yg, "bosea", "bose??"),
e(yg, "bosao", "bos??o"),
e(yg, "bosos", "bos??s"),
e(yg, "botio", "boti??"),
e(yg, "botoa", "boto??"),
e(yg, "botao", "bot??o"),
e(yg, "boura", "bour??"),
e(yg, "bouca", "bou??a"),
e(yg, "bouco", "bou??o"),
e(yg, "boxea", "boxe??"),
e(yg, "bozos", "boz??s"),
e(yg, "bocus", "bo??us"),
e(yg, "boela", "bo??la"),
e(yg, "boelo", "bo??lo"),
e(yg, "braja", "braj??"),
e(yg, "braca", "bra??a"),
e(yg, "braco", "bra??o"),
e(yg, "breta", "bret??"),
e(yg, "brola", "brol??"),
e(yg, "bruaa", "brua??"),
e(yg, "brueu", "bru??u"),
e(yg, "briea", "br??ea"),
e(yg, "brion", "br??on"),
e(yg, "buacu", "bua??u"),
e(yg, "bubao", "bub??o"),
e(yg, "bubas", "bub??s"),
e(yg, "bucue", "bucu??"),
e(yg, "bucui", "bucu??"),
e(yg, "bucas", "buc??s"),
e(yg, "budoa", "budo??"),
e(yg, "bufao", "buf??o"),
e(yg, "buira", "buir??"),
e(yg, "bujao", "buj??o"),
e(yg, "bujes", "buj??s"),
e(yg, "bunha", "bunh??"),
e(yg, "buque", "buqu??"),
e(yg, "burga", "burg??"),
e(yg, "burno", "burn??"),
e(yg, "burue", "buru??"),
e(yg, "burao", "bur??o"),
e(yg, "burco", "bur??o"),
e(yg, "bures", "bur??s"),
e(yg, "butia", "buti??"),
e(yg, "bucos", "bu??os"),
e(yg, "buens", "bu??ns"),
e(yg, "buiam", "bu??am"),
e(yg, "buias", "bu??as"),
e(yg, "buida", "bu??da"),
e(yg, "buido", "bu??do"),
e(yg, "buige", "bu??ge"),
e(yg, "builo", "bu??lo"),
e(yg, "bacis", "b??cis"),
e(yg, "badur", "b??dur"),
e(yg, "bafer", "b??fer"),
e(yg, "bafia", "b??fia"),
e(yg, "bagoa", "b??goa"),
e(yg, "balia", "b??lia"),
e(yg, "bario", "b??rio"),
e(yg, "basio", "b??sio"),
e(yg, "basis", "b??sis"),
e(yg, "batis", "b??tis"),
e(yg, "bambi", "b??mbi"),
e(yg, "bamia", "b??mia"),
e(yg, "bania", "b??nia"),
e(yg, "banua", "b??nua"),
e(yg, "becua", "b??cua"),
e(yg, "begua", "b??gua"),
e(yg, "belia", "b??lia"),
e(yg, "belio", "b??lio"),
e(yg, "belis", "b??lis"),
e(yg, "belua", "b??lua"),
e(yg, "belus", "b??lus"),
e(yg, "beris", "b??ris"),
e(yg, "berix", "b??rix"),
e(yg, "betel", "b??tel"),
e(yg, "betis", "b??tis"),
e(yg, "benia", "b??nia"),
e(yg, "bicia", "b??cia"),
e(yg, "biduo", "b??duo"),
e(yg, "biguo", "b??guo"),
e(yg, "bilia", "b??lia"),
e(yg, "bilis", "b??lis"),
e(yg, "biter", "b??ter"),
e(yg, "bitio", "b??tio"),
e(yg, "bitis", "b??tis"),
e(yg, "bivio", "b??vio"),
e(yg, "bobis", "b??bis"),
e(yg, "bocio", "b??cio"),
e(yg, "bofia", "b??fia"),
e(yg, "borax", "b??rax"),
e(yg, "boson", "b??son"),
e(yg, "boton", "b??ton"),
e(yg, "boxer", "b??xer"),
e(yg, "boers", "b??ers"),
e(yg, "bonus", "b??nus"),
e(yg, "bufri", "b??fri"),
e(yg, "butea", "b??tea"),
e(yg, "buteo", "b??teo"),
e(yg, "butio", "b??tio"),
e(yg, "buzio", "b??zio"),
e(yg, "caaco", "caac??"),
e(yg, "caaee", "caae??"),
e(yg, "caacu", "caa??u"),
e(yg, "cabau", "caba??"),
e(yg, "cabea", "cabe??"),
e(yg, "cabiu", "cabi??"),
e(yg, "cabui", "cabu??"),
e(yg, "cadea", "cade??"),
e(yg, "cadue", "cadu??"),
e(yg, "caete", "caet??"),
e(yg, "cafes", "caf??s"),
e(yg, "cagoa", "cago??"),
e(yg, "cagao", "cag??o"),
e(yg, "caico", "caic??"),
e(yg, "caira", "cair??"),
e(yg, "caire", "cair??"),
e(yg, "caite", "cait??"),
e(yg, "caito", "cait??"),
e(yg, "caiua", "caiu??"),
e(yg, "caiue", "caiu??"),
e(yg, "caicu", "cai??u"),
e(yg, "caica", "cai????"),
e(yg, "cajua", "caju??"),
e(yg, "cajui", "caju??"),
e(yg, "cajas", "caj??s"),
e(yg, "cajao", "caj??o"),
e(yg, "calea", "cale??"),
e(yg, "calao", "cal??o"),
e(yg, "calca", "cal??a"),
e(yg, "calco", "cal??o"),
e(yg, "camaa", "cama??"),
e(yg, "camea", "came??"),
e(yg, "campe", "camp??"),
e(yg, "camua", "camu??"),
e(yg, "camao", "cam??o"),
e(yg, "cames", "cam??s"),
e(yg, "canca", "canc??"),
e(yg, "canea", "cane??"),
e(yg, "canoe", "cano??"),
e(yg, "canta", "cant??"),
e(yg, "canza", "canz??"),
e(yg, "capia", "capi??"),
e(yg, "capao", "cap??o"),
e(yg, "capos", "cap??s"),
e(yg, "carea", "care??"),
e(yg, "carii", "cari??"),
e(yg, "cario", "cari??"),
e(yg, "cariu", "cari??"),
e(yg, "caroa", "caro??"),
e(yg, "caroe", "caro??"),
e(yg, "carre", "carr??"),
e(yg, "carua", "caru??"),
e(yg, "carao", "car??o"),
e(yg, "cares", "car??s"),
e(yg, "careu", "car??u"),
e(yg, "casba", "casb??"),
e(yg, "casea", "case??"),
e(yg, "casao", "cas??o"),
e(yg, "catea", "cate??"),
e(yg, "catua", "catu??"),
e(yg, "catao", "cat??o"),
e(yg, "caulo", "caul??"),
e(yg, "cauma", "caum??"),
e(yg, "caure", "caur??"),
e(yg, "cauas", "cau??s"),
e(yg, "cauis", "cau??s"),
e(yg, "cavao", "cav??o"),
e(yg, "caxua", "caxu??"),
e(yg, "caxao", "cax??o"),
e(yg, "cacai", "ca??ai"),
e(yg, "cacam", "ca??am"),
e(yg, "cacar", "ca??ar"),
e(yg, "cacas", "ca??as"),
e(yg, "cacoa", "ca??oa"),
e(yg, "cacoe", "ca??oe"),
e(yg, "cacoo", "ca??oo"),
e(yg, "cacou", "ca??ou"),
e(yg, "cacua", "ca??u??"),
e(yg, "cacao", "ca????o"),
e(yg, "caiam", "ca??am"),
e(yg, "caias", "ca??as"),
e(yg, "caiba", "ca??ba"),
e(yg, "caida", "ca??da"),
e(yg, "caido", "ca??do"),
e(yg, "caimo", "ca??mo"),
e(yg, "caira", "ca??ra"),
e(yg, "caiva", "ca??va"),
e(yg, "caois", "ca??is"),
e(yg, "cauba", "ca??ba"),
e(yg, "cauno", "ca??no"),
e(yg, "ceara", "cear??"),
e(yg, "cecea", "cece??"),
e(yg, "cecem", "cec??m"),
e(yg, "ceces", "cec??s"),
e(yg, "cedem", "ced??m"),
e(yg, "celva", "celv??"),
e(yg, "celes", "cel??s"),
e(yg, "ceota", "ceot??"),
e(yg, "ceros", "cer??s"),
e(yg, "cevao", "cev??o"),
e(yg, "cecao", "ce????o"),
e(yg, "chaba", "chab??"),
e(yg, "chabo", "chab??"),
e(yg, "chaia", "chai??"),
e(yg, "chaja", "chaj??"),
e(yg, "chale", "chal??"),
e(yg, "chate", "chat??"),
e(yg, "chaua", "chau??"),
e(yg, "chaca", "cha??a"),
e(yg, "chaco", "cha??o"),
e(yg, "chaem", "cha??m"),
e(yg, "chebe", "cheb??"),
e(yg, "cheva", "chev??"),
e(yg, "chibe", "chib??"),
e(yg, "chiuo", "chiu??"),
e(yg, "chiao", "chi??o"),
e(yg, "chogo", "chog??"),
e(yg, "chone", "chon??"),
e(yg, "choca", "cho??a"),
e(yg, "chule", "chul??"),
e(yg, "chuas", "chu??s"),
e(yg, "chuca", "chu??a"),
e(yg, "chuco", "chu??o"),
e(yg, "chues", "chu??s"),
e(yg, "chaos", "ch??os"),
e(yg, "choes", "ch??es"),
e(yg, "cidro", "cidr??"),
e(yg, "cidao", "cid??o"),
e(yg, "cidas", "cid??s"),
e(yg, "cifao", "cif??o"),
e(yg, "cimbo", "cimb??"),
e(yg, "cimes", "cim??s"),
e(yg, "cipos", "cip??s"),
e(yg, "cirao", "cir??o"),
e(yg, "cispa", "cisp??"),
e(yg, "cisao", "cis??o"),
e(yg, "cioes", "ci??es"),
e(yg, "ciume", "ci??me"),
e(yg, "ciuro", "ci??ro"),
e(yg, "clipa", "clip??"),
e(yg, "clisa", "clis??"),
e(yg, "coara", "coar??"),
e(yg, "coata", "coat??"),
e(yg, "coboi", "cob??i"),
e(yg, "cocao", "coc??o"),
e(yg, "codra", "codr??"),
e(yg, "codes", "cod??s"),
e(yg, "cofio", "cofi??"),
e(yg, "coios", "coi??s"),
e(yg, "colea", "cole??"),
e(yg, "colta", "colt??"),
e(yg, "colva", "colv??"),
e(yg, "compo", "comp??"),
e(yg, "comao", "com??o"),
e(yg, "conco", "con??o"),
e(yg, "copao", "cop??o"),
e(yg, "corea", "core??"),
e(yg, "corre", "corr??"),
e(yg, "corao", "cor??o"),
e(yg, "corca", "cor??a"),
e(yg, "corco", "cor??o"),
e(yg, "cotao", "cot??o"),
e(yg, "coupe", "coup??"),
e(yg, "couva", "couv??"),
e(yg, "couca", "cou??a"),
e(yg, "covea", "cove??"),
e(yg, "covoa", "covo??"),
e(yg, "covao", "cov??o"),
e(yg, "coxea", "coxe??"),
e(yg, "coxao", "cox??o"),
e(yg, "cocai", "co??ai"),
e(yg, "cocam", "co??am"),
e(yg, "cocar", "co??ar"),
e(yg, "cocas", "co??as"),
e(yg, "cocou", "co??ou"),
e(yg, "coiba", "co??ba"),
e(yg, "coibe", "co??be"),
e(yg, "coibo", "co??bo"),
e(yg, "crapo", "crap??"),
e(yg, "craua", "crau??"),
e(yg, "creie", "crei??"),
e(yg, "creje", "crej??"),
e(yg, "crera", "crer??"),
e(yg, "crisa", "cris??"),
e(yg, "crues", "cru??s"),
e(yg, "cruos", "cru??s"),
e(yg, "cuara", "cuar??"),
e(yg, "cuata", "cuat??"),
e(yg, "cubie", "cubi??"),
e(yg, "cubiu", "cubi??"),
e(yg, "cuche", "cuch??"),
e(yg, "cugia", "cugi??"),
e(yg, "cuila", "cuil??"),
e(yg, "cuipe", "cuip??"),
e(yg, "cuita", "cuit??"),
e(yg, "cuite", "cuit??"),
e(yg, "cuito", "cuit??"),
e(yg, "cuiao", "cui??o"),
e(yg, "cuius", "cui??s"),
e(yg, "cujia", "cuji??"),
e(yg, "culca", "culc??"),
e(yg, "cumai", "cuma??"),
e(yg, "cumbe", "cumb??"),
e(yg, "cumpo", "cump??"),
e(yg, "cumas", "cum??s"),
e(yg, "cunas", "cun??s"),
e(yg, "cuoza", "cuoz??"),
e(yg, "cupai", "cupa??"),
e(yg, "cupao", "cup??o"),
e(yg, "cupes", "cup??s"),
e(yg, "curio", "curi??"),
e(yg, "curua", "curu??"),
e(yg, "curao", "cur??o"),
e(yg, "curos", "cur??s"),
e(yg, "cutiu", "cuti??"),
e(yg, "cutao", "cut??o"),
e(yg, "cuxiu", "cuxi??"),
e(yg, "cuxas", "cux??s"),
e(yg, "cuica", "cu??ca"),
e(yg, "cuice", "cu??ce"),
e(yg, "cuine", "cu??ne"),
e(yg, "cuira", "cu??ra"),
e(yg, "cacea", "c??cea"),
e(yg, "cadis", "c??dis"),
e(yg, "calix", "c??lix"),
e(yg, "capea", "c??pea"),
e(yg, "capua", "c??pua"),
e(yg, "carie", "c??rie"),
e(yg, "carus", "c??rus"),
e(yg, "cavea", "c??vea"),
e(yg, "cavia", "c??via"),
e(yg, "candi", "c??ndi"),
e(yg, "cangi", "c??ngi"),
e(yg, "canon", "c??non"),
e(yg, "cebio", "c??bio"),
e(yg, "cebus", "c??bus"),
e(yg, "cecum", "c??cum"),
e(yg, "celea", "c??lea"),
e(yg, "celeo", "c??leo"),
e(yg, "celia", "c??lia"),
e(yg, "celio", "c??lio"),
e(yg, "cerea", "c??rea"),
e(yg, "cereo", "c??reo"),
e(yg, "ceria", "c??ria"),
e(yg, "cerio", "c??rio"),
e(yg, "ceris", "c??ris"),
e(yg, "cesar", "c??sar"),
e(yg, "cesio", "c??sio"),
e(yg, "cenio", "c??nio"),
e(yg, "cenis", "c??nis"),
e(yg, "cilio", "c??lio"),
e(yg, "cirio", "c??rio"),
e(yg, "civel", "c??vel"),
e(yg, "coana", "c??ana"),
e(yg, "coano", "c??ano"),
e(yg, "cobio", "c??bio"),
e(yg, "cobua", "c??bua"),
e(yg, "cobus", "c??bus"),
e(yg, "cochi", "c??chi"),
e(yg, "codeo", "c??deo"),
e(yg, "codex", "c??dex"),
e(yg, "codio", "c??dio"),
e(yg, "codon", "c??don"),
e(yg, "codao", "c??d??o"),
e(yg, "cofea", "c??fea"),
e(yg, "cofia", "c??fia"),
e(yg, "cogia", "c??gia"),
e(yg, "coleo", "c??leo"),
e(yg, "colia", "c??lia"),
e(yg, "colio", "c??lio"),
e(yg, "colis", "c??lis"),
e(yg, "colon", "c??lon"),
e(yg, "colua", "c??lua"),
e(yg, "copia", "c??pia"),
e(yg, "corio", "c??rio"),
e(yg, "coris", "c??ris"),
e(yg, "coxis", "c??xis"),
e(yg, "codea", "c??dea"),
e(yg, "comea", "c??mea"),
e(yg, "comio", "c??mio"),
e(yg, "cubio", "c??bio"),
e(yg, "cucio", "c??cio"),
e(yg, "cudia", "c??dia"),
e(yg, "cufea", "c??fea"),
e(yg, "cufia", "c??fia"),
e(yg, "culea", "c??lea"),
e(yg, "culeo", "c??leo"),
e(yg, "culex", "c??lex"),
e(yg, "cumel", "c??mel"),
e(yg, "cumis", "c??mis"),
e(yg, "cunea", "c??nea"),
e(yg, "cuneo", "c??neo"),
e(yg, "cunia", "c??nia"),
e(yg, "curia", "c??ria"),
e(yg, "cuter", "c??ter"),
e(yg, "cutis", "c??tis"),
e(yg, "dabas", "dab??s"),
e(yg, "dadao", "dad??o"),
e(yg, "daiao", "dai??o"),
e(yg, "dalem", "dal??m"),
e(yg, "damao", "dam??o"),
e(yg, "danca", "dan??a"),
e(yg, "danco", "dan??o"),
e(yg, "danes", "dan??s"),
e(yg, "daras", "dar??s"),
e(yg, "darao", "dar??o"),
e(yg, "dacas", "da??as"),
e(yg, "dacao", "da????o"),
e(yg, "decai", "deca??"),
e(yg, "dedao", "ded??o"),
e(yg, "dedeu", "ded??u"),
e(yg, "demea", "deme??"),
e(yg, "demao", "dem??o"),
e(yg, "dende", "dend??"),
e(yg, "depos", "dep??s"),
e(yg, "depoe", "dep??e"),
e(yg, "desda", "desd??"),
e(yg, "despo", "desp??"),
e(yg, "desva", "desv??"),
e(yg, "desve", "desv??"),
e(yg, "desca", "des??a"),
e(yg, "desco", "des??o"),
e(yg, "detem", "det??m"),
e(yg, "detem", "det??m"),
e(yg, "devem", "dev??m"),
e(yg, "devem", "dev??m"),
e(yg, "deaes", "de??es"),
e(yg, "deaos", "de??os"),
e(yg, "deoes", "de??es"),
e(yg, "dibas", "dib??s"),
e(yg, "didas", "did??s"),
e(yg, "diesa", "dies??"),
e(yg, "dijas", "dij??s"),
e(yg, "dilui", "dilu??"),
e(yg, "dinie", "dini??"),
e(yg, "dirra", "dirr??"),
e(yg, "dirui", "diru??"),
e(yg, "diras", "dir??s"),
e(yg, "dirao", "dir??o"),
e(yg, "direm", "dir??m"),
e(yg, "disue", "disu??"),
e(yg, "divao", "div??o"),
e(yg, "dicao", "di????o"),
e(yg, "diois", "di??is"),
e(yg, "diula", "di??la"),
e(yg, "diuso", "di??so"),
e(yg, "diuta", "di??ta"),
e(yg, "doara", "doar??"),
e(yg, "docem", "doc??m"),
e(yg, "dodoi", "dod??i"),
e(yg, "doera", "doer??"),
e(yg, "dogos", "dog??s"),
e(yg, "doles", "dol??s"),
e(yg, "donea", "done??"),
e(yg, "dosea", "dose??"),
e(yg, "doulo", "doul??"),
e(yg, "dozao", "doz??o"),
e(yg, "docai", "do??ai"),
e(yg, "docal", "do??al"),
e(yg, "docam", "do??am"),
e(yg, "docar", "do??ar"),
e(yg, "docou", "do??ou"),
e(yg, "docus", "do??us"),
e(yg, "doiam", "do??am"),
e(yg, "doias", "do??as"),
e(yg, "doido", "do??do"),
e(yg, "drape", "drap??"),
e(yg, "drica", "dri??a"),
e(yg, "druva", "druv??"),
e(yg, "dualo", "dual??"),
e(yg, "duble", "dubl??"),
e(yg, "dubas", "dub??s"),
e(yg, "ducra", "ducr??"),
e(yg, "ducao", "duc??o"),
e(yg, "dueca", "due??a"),
e(yg, "dugao", "dug??o"),
e(yg, "dungo", "dung??"),
e(yg, "durba", "durb??"),
e(yg, "durga", "durg??"),
e(yg, "durao", "dur??o"),
e(yg, "dutro", "dutr??"),
e(yg, "duita", "du??ta"),
e(yg, "dacio", "d??cio"),
e(yg, "dalia", "d??lia"),
e(yg, "datil", "d??til"),
e(yg, "damar", "d??mar"),
e(yg, "danae", "d??nae"),
e(yg, "dandi", "d??ndi"),
e(yg, "danio", "d??nio"),
e(yg, "debil", "d??bil"),
e(yg, "debut", "d??but"),
e(yg, "decor", "d??cor"),
e(yg, "delia", "d??lia"),
e(yg, "delio", "d??lio"),
e(yg, "derbi", "d??rbi"),
e(yg, "devio", "d??vio"),
e(yg, "dexia", "d??xia"),
e(yg, "demia", "d??mia"),
e(yg, "diada", "d??ada"),
e(yg, "diade", "d??ade"),
e(yg, "didea", "d??dea"),
e(yg, "didia", "d??dia"),
e(yg, "didio", "d??dio"),
e(yg, "difia", "d??fia"),
e(yg, "dinio", "d??nio"),
e(yg, "diope", "d??ope"),
e(yg, "disel", "d??sel"),
e(yg, "dixis", "d??xis"),
e(yg, "docil", "d??cil"),
e(yg, "dolar", "d??lar"),
e(yg, "dolio", "d??lio"),
e(yg, "dolma", "d??lm??"),
e(yg, "doria", "d??ria"),
e(yg, "dorio", "d??rio"),
e(yg, "doris", "d??ris"),
e(yg, "doxus", "d??xus"),
e(yg, "donax", "d??nax"),
e(yg, "donia", "d??nia"),
e(yg, "dubia", "d??bia"),
e(yg, "dubio", "d??bio"),
e(yg, "dunia", "d??nia"),
e(yg, "durio", "d??rio"),
e(yg, "dutis", "d??tis"),
e(yg, "duzia", "d??zia"),
e(yg, "ealma", "ealm??"),
e(yg, "earca", "earc??"),
e(yg, "ecras", "ecr??s"),
e(yg, "edere", "eder??"),
e(yg, "eflui", "eflu??"),
e(yg, "egbas", "egb??s"),
e(yg, "egbes", "egb??s"),
e(yg, "egeao", "ege??o"),
e(yg, "egipa", "egip??"),
e(yg, "eicho", "eich??"),
e(yg, "eiros", "eir??s"),
e(yg, "eivao", "eiv??o"),
e(yg, "eicai", "ei??ai"),
e(yg, "eicam", "ei??am"),
e(yg, "eicar", "ei??ar"),
e(yg, "eicas", "ei??as"),
e(yg, "eicou", "ei??ou"),
e(yg, "elafa", "elaf??"),
e(yg, "elebo", "eleb??"),
e(yg, "eleda", "eled??"),
e(yg, "elede", "eled??"),
e(yg, "elepe", "elep??"),
e(yg, "eluia", "elu??a"),
e(yg, "eluis", "elu??s"),
e(yg, "eluos", "elu??s"),
e(yg, "eleis", "el??is"),
e(yg, "emara", "emar??"),
e(yg, "emaca", "ema??a"),
e(yg, "emaco", "ema??o"),
e(yg, "embai", "emba??"),
e(yg, "embia", "embi??"),
e(yg, "embiu", "embi??"),
e(yg, "emboa", "embo??"),
e(yg, "embua", "embu??"),
e(yg, "embui", "embu??"),
e(yg, "embes", "emb??s"),
e(yg, "emebe", "emeb??"),
e(yg, "emona", "emon??"),
e(yg, "empea", "empe??"),
e(yg, "empos", "emp??s"),
e(yg, "encho", "ench??"),
e(yg, "eneva", "enev??"),
e(yg, "enfea", "enfe??"),
e(yg, "enfua", "enfu??"),
e(yg, "engea", "enge??"),
e(yg, "enlea", "enle??"),
e(yg, "enoga", "enog??"),
e(yg, "enova", "enov??"),
e(yg, "enria", "enri??"),
e(yg, "ensea", "ense??"),
e(yg, "entea", "ente??"),
e(yg, "entao", "ent??o"),
e(yg, "enves", "env??s"),
e(yg, "enxia", "enxi??"),
e(yg, "enxui", "enxu??"),
e(yg, "enxos", "enx??s"),
e(yg, "eneis", "en??is"),
e(yg, "eneus", "en??us"),
e(yg, "enois", "en??is"),
e(yg, "eoipo", "eo??po"),
e(yg, "epila", "epil??"),
e(yg, "epoxi", "ep??xi"),
e(yg, "erama", "eram??"),
e(yg, "erica", "eri??a"),
e(yg, "erico", "eri??o"),
e(yg, "erosa", "eros??"),
e(yg, "ervoa", "ervo??"),
e(yg, "ervao", "erv??o"),
e(yg, "esere", "eser??"),
e(yg, "esmea", "esme??"),
e(yg, "esmoe", "esmo??"),
e(yg, "esmoi", "esmo??"),
e(yg, "esnua", "esnu??"),
e(yg, "espui", "espu??"),
e(yg, "estea", "este??"),
e(yg, "estas", "est??s"),
e(yg, "estao", "est??o"),
e(yg, "esvai", "esva??"),
e(yg, "esvao", "esv??o"),
e(yg, "etipe", "et??pe"),
e(yg, "etoes", "et??es"),
e(yg, "eubas", "eub??s"),
e(yg, "evase", "evas??"),
e(yg, "evaza", "evaz??"),
e(yg, "evira", "evir??"),
e(yg, "evoes", "evo??s"),
e(yg, "exita", "exit??"),
e(yg, "expos", "exp??s"),
e(yg, "expoe", "exp??e"),
e(yg, "exsta", "exst??"),
e(yg, "exoes", "ex??es"),
e(yg, "earia", "e??ria"),
e(yg, "eolia", "e??lia"),
e(yg, "eolio", "e??lio"),
e(yg, "facea", "face??"),
e(yg, "facao", "fac??o"),
e(yg, "fadia", "fadi??"),
e(yg, "fadao", "fad??o"),
e(yg, "faira", "fair??"),
e(yg, "faisa", "fais??"),
e(yg, "faiao", "fai??o"),
e(yg, "fajas", "faj??s"),
e(yg, "fanao", "fan??o"),
e(yg, "farao", "fara??"),
e(yg, "farfa", "farf??"),
e(yg, "faras", "far??s"),
e(yg, "farao", "far??o"),
e(yg, "fasea", "fase??"),
e(yg, "fatao", "fat??o"),
e(yg, "favao", "fav??o"),
e(yg, "faxea", "faxe??"),
e(yg, "facam", "fa??am"),
e(yg, "facas", "fa??as"),
e(yg, "faula", "fa??la"),
e(yg, "feiao", "fei??o"),
e(yg, "felas", "fel??s"),
e(yg, "feleu", "fel??u"),
e(yg, "felos", "fel??s"),
e(yg, "femba", "femb??"),
e(yg, "feofo", "feof??"),
e(yg, "feoes", "fe??es"),
e(yg, "fiara", "fiar??"),
e(yg, "fiaco", "fia??o"),
e(yg, "ficao", "fic??o"),
e(yg, "fideu", "fid??u"),
e(yg, "fifos", "fif??s"),
e(yg, "fijas", "fij??s"),
e(yg, "filao", "fil??o"),
e(yg, "fines", "fin??s"),
e(yg, "fiofo", "fiof??"),
e(yg, "firra", "firr??"),
e(yg, "fitao", "fit??o"),
e(yg, "fiusa", "fi??sa"),
e(yg, "fiuza", "fi??za"),
e(yg, "fiuzo", "fi??zo"),
e(yg, "flima", "flim??"),
e(yg, "flipa", "flip??"),
e(yg, "floca", "floc??"),
e(yg, "floso", "flos??"),
e(yg, "flota", "flot??"),
e(yg, "flozo", "floz??"),
e(yg, "fluia", "flu??a"),
e(yg, "fluis", "flu??s"),
e(yg, "fluor", "fl??or"),
e(yg, "flute", "fl??te"),
e(yg, "fobos", "fob??s"),
e(yg, "fofao", "fof??o"),
e(yg, "fogao", "fog??o"),
e(yg, "foica", "foi??a"),
e(yg, "foico", "foi??o"),
e(yg, "folea", "fole??"),
e(yg, "folao", "fol??o"),
e(yg, "fonao", "fon??o"),
e(yg, "forca", "for??a"),
e(yg, "forco", "for??o"),
e(yg, "fotea", "fote??"),
e(yg, "fotao", "fot??o"),
e(yg, "fotas", "fot??s"),
e(yg, "fouca", "fou??a"),
e(yg, "fouco", "fou??o"),
e(yg, "focao", "fo????o"),
e(yg, "frada", "frad??"),
e(yg, "frape", "frap??"),
e(yg, "freva", "frev??"),
e(yg, "frola", "frol??"),
e(yg, "frozo", "froz??"),
e(yg, "fruia", "fru??a"),
e(yg, "fruis", "fru??s"),
e(yg, "fugao", "fug??o"),
e(yg, "fujao", "fuj??o"),
e(yg, "fuloa", "fulo??"),
e(yg, "fulao", "ful??o"),
e(yg, "fumea", "fume??"),
e(yg, "fumao", "fum??o"),
e(yg, "funfa", "funf??"),
e(yg, "funeu", "fun??u"),
e(yg, "furao", "fur??o"),
e(yg, "fusga", "fusg??"),
e(yg, "fusao", "fus??o"),
e(yg, "fuzue", "fuzu??"),
e(yg, "fucai", "fu??ai"),
e(yg, "fucam", "fu??am"),
e(yg, "fucar", "fu??ar"),
e(yg, "fucas", "fu??as"),
e(yg, "fucou", "fu??ou"),
e(yg, "fuoes", "fu??es"),
e(yg, "facil", "f??cil"),
e(yg, "fagea", "f??gea"),
e(yg, "fajea", "f??jea"),
e(yg, "falum", "f??lum"),
e(yg, "falus", "f??lus"),
e(yg, "fario", "f??rio"),
e(yg, "fasia", "f??sia"),
e(yg, "fatua", "f??tua"),
e(yg, "fatuo", "f??tuo"),
e(yg, "favio", "f??vio"),
e(yg, "fania", "f??nia"),
e(yg, "fanio", "f??nio"),
e(yg, "fanti", "f??nti"),
e(yg, "fecio", "f??cio"),
e(yg, "felea", "f??lea"),
e(yg, "feleo", "f??leo"),
e(yg, "felis", "f??lis"),
e(yg, "feria", "f??ria"),
e(yg, "femea", "f??mea"),
e(yg, "femeo", "f??meo"),
e(yg, "femur", "f??mur"),
e(yg, "fenix", "f??nix"),
e(yg, "fetao", "f??t??o"),
e(yg, "fiala", "f??ala"),
e(yg, "fiber", "f??ber"),
e(yg, "ficea", "f??cea"),
e(yg, "ficeo", "f??ceo"),
e(yg, "ficis", "f??cis"),
e(yg, "ficus", "f??cus"),
e(yg, "fidia", "f??dia"),
e(yg, "fifia", "f??fia"),
e(yg, "filea", "f??lea"),
e(yg, "fileo", "f??leo"),
e(yg, "filer", "f??ler"),
e(yg, "focio", "f??cio"),
e(yg, "fodia", "f??dia"),
e(yg, "folio", "f??lio"),
e(yg, "folis", "f??lis"),
e(yg, "foloe", "f??loe"),
e(yg, "forum", "f??rum"),
e(yg, "foton", "f??ton"),
e(yg, "fovea", "f??vea"),
e(yg, "fonix", "f??nix"),
e(yg, "fonon", "f??non"),
e(yg, "fucea", "f??cea"),
e(yg, "fucia", "f??cia"),
e(yg, "fufia", "f??fia"),
e(yg, "fufio", "f??fio"),
e(yg, "fuler", "f??ler"),
e(yg, "fulix", "f??lix"),
e(yg, "fumeo", "f??meo"),
e(yg, "furia", "f??ria"),
e(yg, "fusel", "f??sel"),
e(yg, "fusil", "f??sil"),
e(yg, "futil", "f??til"),
e(yg, "gabao", "gab??o"),
e(yg, "gabeu", "gab??u"),
e(yg, "gadao", "gad??o"),
e(yg, "gafem", "gaf??m"),
e(yg, "gagao", "gag??o"),
e(yg, "gajao", "gaj??o"),
e(yg, "galoa", "galo??"),
e(yg, "galao", "gal??o"),
e(yg, "gales", "gal??s"),
e(yg, "gamba", "gamb??"),
e(yg, "gamao", "gam??o"),
e(yg, "ganfa", "ganf??"),
e(yg, "ganto", "gant??"),
e(yg, "ganza", "ganz??"),
e(yg, "ganze", "ganz??"),
e(yg, "ganca", "gan??a"),
e(yg, "ganco", "gan??o"),
e(yg, "ganes", "gan??s"),
e(yg, "gapos", "gap??s"),
e(yg, "garga", "garg??"),
e(yg, "gargo", "garg??"),
e(yg, "garas", "gar??s"),
e(yg, "garao", "gar??o"),
e(yg, "garca", "gar??a"),
e(yg, "garco", "gar??o"),
e(yg, "gasca", "gasc??"),
e(yg, "gasea", "gase??"),
e(yg, "gasma", "gasm??"),
e(yg, "gatea", "gate??"),
e(yg, "gatao", "gat??o"),
e(yg, "gaudo", "gaud??"),
e(yg, "gavao", "gav??o"),
e(yg, "gazea", "gaze??"),
e(yg, "gazao", "gaz??o"),
e(yg, "gaeis", "ga??is"),
e(yg, "geara", "gear??"),
e(yg, "gebra", "gebr??"),
e(yg, "gerem", "ger??m"),
e(yg, "getes", "get??s"),
e(yg, "geina", "ge??na"),
e(yg, "gibao", "gib??o"),
e(yg, "gicle", "gicl??"),
e(yg, "giclo", "gicl??"),
e(yg, "gicao", "gic??o"),
e(yg, "gigle", "gigl??"),
e(yg, "giles", "gil??s"),
e(yg, "gimao", "gim??o"),
e(yg, "girao", "gir??o"),
e(yg, "glace", "glac??"),
e(yg, "glaca", "gla??a"),
e(yg, "glaco", "gla??o"),
e(yg, "gluao", "glu??o"),
e(yg, "gloes", "gl??es"),
e(yg, "gluon", "gl??on"),
e(yg, "godao", "god??o"),
e(yg, "gofes", "gof??s"),
e(yg, "gogos", "gog??s"),
e(yg, "goias", "goi??s"),
e(yg, "golea", "gole??"),
e(yg, "golpa", "golp??"),
e(yg, "gombo", "gomb??"),
e(yg, "gomoa", "gomo??"),
e(yg, "gonga", "gong??"),
e(yg, "gorao", "gor??o"),
e(yg, "goros", "gor??s"),
e(yg, "gotea", "gote??"),
e(yg, "gotao", "got??o"),
e(yg, "gouga", "goug??"),
e(yg, "gozao", "goz??o"),
e(yg, "graia", "grai??"),
e(yg, "graca", "gra??a"),
e(yg, "grejo", "grej??"),
e(yg, "grena", "gren??"),
e(yg, "grijo", "grij??"),
e(yg, "grios", "gri??s"),
e(yg, "grola", "grol??"),
e(yg, "grolo", "grol??"),
e(yg, "gruia", "gru??a"),
e(yg, "gruis", "gru??s"),
e(yg, "grace", "gr??ce"),
e(yg, "graos", "gr??os"),
e(yg, "greus", "gr??us"),
e(yg, "guaca", "guac??"),
e(yg, "guaio", "guai??"),
e(yg, "guaiu", "guai??"),
e(yg, "guaja", "guaj??"),
e(yg, "guana", "guan??"),
e(yg, "guara", "guar??"),
e(yg, "guato", "guat??"),
e(yg, "guaza", "guaz??"),
e(yg, "guacu", "gua??u"),
e(yg, "guede", "gued??"),
e(yg, "guiba", "guib??"),
e(yg, "guida", "guid??"),
e(yg, "guigo", "guig??"),
e(yg, "guine", "guin??"),
e(yg, "guipa", "guip??"),
e(yg, "guira", "guir??"),
e(yg, "guiza", "guiz??"),
e(yg, "guiao", "gui??o"),
e(yg, "guico", "gui??o"),
e(yg, "gumbe", "gumb??"),
e(yg, "gunfa", "gunf??"),
e(yg, "gunto", "gunt??"),
e(yg, "gabia", "g??bia"),
e(yg, "gabio", "g??bio"),
e(yg, "gafio", "g??fio"),
e(yg, "gajis", "g??jis"),
e(yg, "galax", "g??lax"),
e(yg, "galea", "g??lea"),
e(yg, "galeo", "g??leo"),
e(yg, "galia", "g??lia"),
e(yg, "galio", "g??lio"),
e(yg, "gaseo", "g??seo"),
e(yg, "gavea", "g??vea"),
e(yg, "gazeo", "g??zeo"),
e(yg, "gazio", "g??zio"),
e(yg, "gamia", "g??mia"),
e(yg, "gania", "g??nia"),
e(yg, "gebia", "g??bia"),
e(yg, "gelis", "g??lis"),
e(yg, "geron", "g??ron"),
e(yg, "gemea", "g??mea"),
e(yg, "gemeo", "g??meo"),
e(yg, "genio", "g??nio"),
e(yg, "gibio", "g??bio"),
e(yg, "gidio", "g??dio"),
e(yg, "gigia", "g??gia"),
e(yg, "gigis", "g??gis"),
e(yg, "gilia", "g??lia"),
e(yg, "giria", "g??ria"),
e(yg, "girio", "g??rio"),
e(yg, "gobia", "g??bia"),
e(yg, "gobio", "g??bio"),
e(yg, "godia", "g??dia"),
e(yg, "gonio", "g??nio"),
e(yg, "gonis", "g??nis"),
e(yg, "gulua", "g??lua"),
e(yg, "gulue", "g??lue"),
e(yg, "habes", "hab??s"),
e(yg, "halva", "halv??"),
e(yg, "harao", "har??o"),
e(yg, "harem", "har??m"),
e(yg, "hauca", "hau????"),
e(yg, "henes", "hen??s"),
e(yg, "hereu", "her??u"),
e(yg, "heroi", "her??i"),
e(yg, "hetma", "hetm??"),
e(yg, "hiles", "hil??s"),
e(yg, "hispa", "hisp??"),
e(yg, "holao", "hol??o"),
e(yg, "homao", "hom??o"),
e(yg, "horra", "horr??"),
e(yg, "horao", "hor??o"),
e(yg, "huama", "huam??"),
e(yg, "huila", "hu??la"),
e(yg, "huios", "hu??os"),
e(yg, "habia", "h??bia"),
e(yg, "habil", "h??bil"),
e(yg, "haden", "h??den"),
e(yg, "hajis", "h??jis"),
e(yg, "halex", "h??lex"),
e(yg, "halis", "h??lis"),
e(yg, "halux", "h??lux"),
e(yg, "hapax", "h??pax"),
e(yg, "hania", "h??nia"),
e(yg, "hanio", "h??nio"),
e(yg, "heduo", "h??duo"),
e(yg, "helia", "h??lia"),
e(yg, "helio", "h??lio"),
e(yg, "helix", "h??lix"),
e(yg, "hepar", "h??par"),
e(yg, "hepia", "h??pia"),
e(yg, "hevea", "h??vea"),
e(yg, "hiala", "h??ala"),
e(yg, "hifen", "h??fen"),
e(yg, "hilia", "h??lia"),
e(yg, "himen", "h??men"),
e(yg, "hirax", "h??rax"),
e(yg, "hiria", "h??ria"),
e(yg, "hopea", "h??pea"),
e(yg, "hopia", "h??pia"),
e(yg, "hosis", "h??sis"),
e(yg, "hossi", "h??ssi"),
e(yg, "hovea", "h??vea"),
e(yg, "hoyas", "h??yas"),
e(yg, "humea", "h??mea"),
e(yg, "humil", "h??mil"),
e(yg, "humus", "h??mus"),
e(yg, "iabas", "iab??s"),
e(yg, "iagua", "iagu??"),
e(yg, "iages", "iag??s"),
e(yg, "iaias", "iai??s"),
e(yg, "iales", "ial??s"),
e(yg, "iamem", "iam??m"),
e(yg, "iameu", "iam??u"),
e(yg, "iansa", "ians??"),
e(yg, "ianos", "ian??s"),
e(yg, "iasao", "ias??o"),
e(yg, "iatai", "iata??"),
e(yg, "iatas", "iat??s"),
e(yg, "iaupe", "iaup??"),
e(yg, "iauos", "iau??s"),
e(yg, "iaves", "iav??s"),
e(yg, "iauva", "ia??va"),
e(yg, "iauvo", "ia??vo"),
e(yg, "ibale", "ibal??"),
e(yg, "ibaro", "ibar??"),
e(yg, "ibiro", "ibir??"),
e(yg, "icacu", "ica??u"),
e(yg, "icaus", "ica??s"),
e(yg, "ichao", "ich??o"),
e(yg, "ichos", "ich??s"),
e(yg, "icipo", "icip??"),
e(yg, "icure", "icur??"),
e(yg, "idoes", "id??es"),
e(yg, "iebas", "ieb??s"),
e(yg, "ieies", "iei??s"),
e(yg, "ieres", "ier??s"),
e(yg, "ifois", "if??is"),
e(yg, "igape", "igap??"),
e(yg, "igapo", "igap??"),
e(yg, "igupa", "igup??"),
e(yg, "iiaba", "iiab??"),
e(yg, "iicai", "iica??"),
e(yg, "iinxe", "iinx??"),
e(yg, "ijexa", "ijex??"),
e(yg, "ilais", "ila??s"),
e(yg, "ilheu", "ilh??u"),
e(yg, "ilhos", "ilh??s"),
e(yg, "ilipe", "ilip??"),
e(yg, "ilica", "ili??a"),
e(yg, "ilico", "ili??o"),
e(yg, "imboa", "imbo??"),
e(yg, "imbua", "imbu??"),
e(yg, "imbui", "imbu??"),
e(yg, "imbes", "imb??s"),
e(yg, "imeme", "imem??"),
e(yg, "imove", "imov??"),
e(yg, "impos", "imp??s"),
e(yg, "impoe", "imp??e"),
e(yg, "imaze", "im??ze"),
e(yg, "imazo", "im??zo"),
e(yg, "imaza", "im??z??"),
e(yg, "inaia", "inai??"),
e(yg, "inaja", "inaj??"),
e(yg, "inaje", "inaj??"),
e(yg, "inare", "inar??"),
e(yg, "inaes", "ina??s"),
e(yg, "incia", "inci??"),
e(yg, "incre", "incr??"),
e(yg, "ingai", "inga??"),
e(yg, "ingra", "ingr??"),
e(yg, "ingue", "ingu??"),
e(yg, "ingas", "ing??s"),
e(yg, "inhas", "inh??s"),
e(yg, "inhes", "inh??s"),
e(yg, "inias", "ini??s"),
e(yg, "inles", "inl??s"),
e(yg, "intui", "intu??"),
e(yg, "intas", "int??s"),
e(yg, "inves", "inv??s"),
e(yg, "incai", "in??ai"),
e(yg, "incam", "in??am"),
e(yg, "incar", "in??ar"),
e(yg, "incou", "in??ou"),
e(yg, "iobos", "iob??s"),
e(yg, "ioios", "ioi??s"),
e(yg, "iocas", "io??as"),
e(yg, "ipete", "ipet??"),
e(yg, "ipeui", "ipeu??"),
e(yg, "ipuas", "ipu??s"),
e(yg, "irama", "iram??"),
e(yg, "iracu", "ira??u"),
e(yg, "irere", "irer??"),
e(yg, "irira", "irir??"),
e(yg, "irmao", "irm??o"),
e(yg, "irmas", "irm??s"),
e(yg, "irrui", "irru??"),
e(yg, "irres", "irr??s"),
e(yg, "irucu", "iru??u"),
e(yg, "irois", "ir??is"),
e(yg, "islao", "isl??o"),
e(yg, "islas", "isl??s"),
e(yg, "itaua", "itau??"),
e(yg, "itais", "ita??s"),
e(yg, "ituas", "itu??s"),
e(yg, "ituis", "itu??s"),
e(yg, "iudja", "iudj??"),
e(yg, "iuius", "iui??s"),
e(yg, "iulas", "iul??s"),
e(yg, "iumas", "ium??s"),
e(yg, "iupua", "iupu??"),
e(yg, "iuras", "iur??s"),
e(yg, "ivais", "iva??s"),
e(yg, "ivira", "ivir??"),
e(yg, "iviro", "ivir??"),
e(yg, "ixiao", "ixi??o"),
e(yg, "ixiea", "ix??ea"),
e(yg, "iacio", "i??cio"),
e(yg, "iasis", "i??sis"),
e(yg, "iatio", "i??tio"),
e(yg, "icada", "i??ada"),
e(yg, "icado", "i??ado"),
e(yg, "icais", "i??ais"),
e(yg, "icamo", "i??amo"),
e(yg, "icara", "i??ara"),
e(yg, "icara", "i??ar??"),
e(yg, "icava", "i??ava"),
e(yg, "iodis", "i??dis"),
e(yg, "iotio", "i??tio"),
e(yg, "ionia", "i??nia"),
e(yg, "ionio", "i??nio"),
e(yg, "ionis", "i??nis"),
e(yg, "iucas", "i??cas"),
e(yg, "iucea", "i??cea"),
e(yg, "iulos", "i??los"),
e(yg, "iuque", "i??que"),
e(yg, "iuros", "i??ros"),
e(yg, "jabea", "jabe??"),
e(yg, "jabas", "jab??s"),
e(yg, "jabao", "jab??o"),
e(yg, "jabos", "jab??s"),
e(yg, "jacua", "jacu??"),
e(yg, "jacui", "jacu??"),
e(yg, "jaces", "jac??s"),
e(yg, "jadao", "jad??o"),
e(yg, "jadas", "jad??s"),
e(yg, "jaffe", "jaff??"),
e(yg, "jaico", "jaic??"),
e(yg, "jalao", "jal??o"),
e(yg, "jaleu", "jal??u"),
e(yg, "jambe", "jamb??"),
e(yg, "janau", "jana??"),
e(yg, "japiu", "japi??"),
e(yg, "japue", "japu??"),
e(yg, "japui", "japu??"),
e(yg, "japao", "jap??o"),
e(yg, "japes", "jap??s"),
e(yg, "jaqua", "jaqu??"),
e(yg, "jaras", "jar??s"),
e(yg, "jatai", "jata??"),
e(yg, "jatea", "jate??"),
e(yg, "jatas", "jat??s"),
e(yg, "jauas", "jau??s"),
e(yg, "javae", "java??"),
e(yg, "javes", "jav??s"),
e(yg, "jacai", "ja??a??"),
e(yg, "jeico", "jeic??"),
e(yg, "jeita", "jeit??"),
e(yg, "jejas", "jej??s"),
e(yg, "jembe", "jemb??"),
e(yg, "jemia", "jemi??"),
e(yg, "jeova", "jeov??"),
e(yg, "jepia", "jepi??"),
e(yg, "jepio", "jepi??"),
e(yg, "jeres", "jer??s"),
e(yg, "jesse", "jess??"),
e(yg, "jetai", "jeta??"),
e(yg, "jexas", "jex??s"),
e(yg, "jicas", "jic??s"),
e(yg, "jicao", "jic??o"),
e(yg, "jilos", "jil??s"),
e(yg, "jinos", "jin??s"),
e(yg, "jipao", "jip??o"),
e(yg, "jiroe", "jiro??"),
e(yg, "jitai", "jita??"),
e(yg, "jitas", "jit??s"),
e(yg, "jicui", "ji??ui"),
e(yg, "jogao", "jog??o"),
e(yg, "joica", "joi??a"),
e(yg, "jonja", "jonj??"),
e(yg, "joncu", "jon??u"),
e(yg, "jouca", "jou??a"),
e(yg, "jocal", "jo??al"),
e(yg, "jocas", "jo??as"),
e(yg, "joiba", "jo??ba"),
e(yg, "jooes", "jo??es"),
e(yg, "jubai", "juba??"),
e(yg, "jubao", "jub??o"),
e(yg, "jucas", "juc??s"),
e(yg, "jujas", "juj??s"),
e(yg, "junca", "jun??a"),
e(yg, "jupia", "jupi??"),
e(yg, "jupua", "jupu??"),
e(yg, "jupao", "jup??o"),
e(yg, "jurga", "jurg??"),
e(yg, "jurao", "jur??o"),
e(yg, "jusao", "jus??o"),
e(yg, "jusas", "jus??s"),
e(yg, "jutai", "juta??"),
e(yg, "juiza", "ju??za"),
e(yg, "juize", "ju??ze"),
e(yg, "juizo", "ju??zo"),
e(yg, "jacea", "j??cea"),
e(yg, "jacia", "j??cia"),
e(yg, "jacio", "j??cio"),
e(yg, "jalea", "j??lea"),
e(yg, "jaleo", "j??leo"),
e(yg, "japix", "j??pix"),
e(yg, "janua", "j??nua"),
e(yg, "jenia", "j??nia"),
e(yg, "jitsu", "j??tsu"),
e(yg, "jogui", "j??gui"),
e(yg, "josia", "j??sia"),
e(yg, "jonia", "j??nia"),
e(yg, "jonio", "j??nio"),
e(yg, "julia", "j??lia"),
e(yg, "julio", "j??lio"),
e(yg, "juvia", "j??via"),
e(yg, "labao", "lab??o"),
e(yg, "labeu", "lab??u"),
e(yg, "lacea", "lace??"),
e(yg, "ladea", "lade??"),
e(yg, "ladao", "lad??o"),
e(yg, "lagao", "lag??o"),
e(yg, "lajao", "laj??o"),
e(yg, "lalas", "lal??s"),
e(yg, "lames", "lam??s"),
e(yg, "lando", "land??"),
e(yg, "lanca", "lan??a"),
e(yg, "lanco", "lan??o"),
e(yg, "lapea", "lape??"),
e(yg, "lapia", "lapi??"),
e(yg, "lapao", "lap??o"),
e(yg, "larea", "lare??"),
e(yg, "lareu", "lar??u"),
e(yg, "lasmo", "lasm??"),
e(yg, "latea", "late??"),
e(yg, "latao", "lat??o"),
e(yg, "lauie", "laui??"),
e(yg, "laule", "laul??"),
e(yg, "lauas", "lau??s"),
e(yg, "laues", "lau??s"),
e(yg, "lazao", "laz??o"),
e(yg, "lazas", "laz??s"),
e(yg, "lacai", "la??ai"),
e(yg, "lacam", "la??am"),
e(yg, "lacar", "la??ar"),
e(yg, "lacas", "la??as"),
e(yg, "lacos", "la??os"),
e(yg, "lacou", "la??ou"),
e(yg, "lacao", "la????o"),
e(yg, "laude", "la??de"),
e(yg, "lauza", "la??za"),
e(yg, "legao", "leg??o"),
e(yg, "leius", "lei??s"),
e(yg, "leles", "lel??s"),
e(yg, "lenao", "len??o"),
e(yg, "lenco", "len??o"),
e(yg, "lerue", "leru??"),
e(yg, "leras", "ler??s"),
e(yg, "lerao", "ler??o"),
e(yg, "lesao", "les??o"),
e(yg, "letao", "let??o"),
e(yg, "letas", "let??s"),
e(yg, "levia", "levi??"),
e(yg, "leoes", "le??es"),
e(yg, "liaca", "lia??a"),
e(yg, "libre", "libr??"),
e(yg, "libos", "lib??s"),
e(yg, "lidao", "lid??o"),
e(yg, "lilas", "lil??s"),
e(yg, "limia", "limi??"),
e(yg, "limao", "lim??o"),
e(yg, "linca", "linc??"),
e(yg, "lirao", "lir??o"),
e(yg, "lisca", "lisc??"),
e(yg, "litao", "lit??o"),
e(yg, "lixao", "lix??o"),
e(yg, "licos", "li??os"),
e(yg, "licao", "li????o"),
e(yg, "lioes", "li??es"),
e(yg, "lobao", "lob??o"),
e(yg, "loces", "loc??s"),
e(yg, "loibe", "loib??"),
e(yg, "loica", "loi??a"),
e(yg, "lomue", "lomu??"),
e(yg, "lores", "lor??s"),
e(yg, "lotea", "lote??"),
e(yg, "louca", "lou??a"),
e(yg, "locao", "lo????o"),
e(yg, "looes", "lo??es"),
e(yg, "lucha", "luch??"),
e(yg, "lucao", "luc??o"),
e(yg, "lulao", "lul??o"),
e(yg, "lupae", "lupa??"),
e(yg, "lusca", "lusc??"),
e(yg, "lutse", "luts??"),
e(yg, "luues", "luu??s"),
e(yg, "luzie", "luzi??"),
e(yg, "lueea", "lu??ea"),
e(yg, "luila", "lu??la"),
e(yg, "luime", "lu??me"),
e(yg, "luina", "lu??na"),
e(yg, "labea", "l??bea"),
e(yg, "labeo", "l??beo"),
e(yg, "labia", "l??bia"),
e(yg, "labil", "l??bil"),
e(yg, "labio", "l??bio"),
e(yg, "lacio", "l??cio"),
e(yg, "lacon", "l??con"),
e(yg, "lagis", "l??gis"),
e(yg, "lajea", "l??jea"),
e(yg, "lapis", "l??pis"),
e(yg, "laria", "l??ria"),
e(yg, "larix", "l??rix"),
e(yg, "lasia", "l??sia"),
e(yg, "lasio", "l??sio"),
e(yg, "lateo", "l??teo"),
e(yg, "latex", "l??tex"),
e(yg, "latia", "l??tia"),
e(yg, "lamia", "l??mia"),
e(yg, "lamio", "l??mio"),
e(yg, "lanea", "l??nea"),
e(yg, "laneo", "l??neo"),
e(yg, "lanio", "l??nio"),
e(yg, "lebia", "l??bia"),
e(yg, "lecia", "l??cia"),
e(yg, "ledea", "l??dea"),
e(yg, "legua", "l??gua"),
e(yg, "lelia", "l??lia"),
e(yg, "leops", "l??ops"),
e(yg, "lepis", "l??pis"),
e(yg, "lepus", "l??pus"),
e(yg, "leria", "l??ria"),
e(yg, "lexis", "l??xis"),
e(yg, "lemea", "l??mea"),
e(yg, "lemur", "l??mur"),
e(yg, "lenea", "l??nea"),
e(yg, "leneo", "l??neo"),
e(yg, "lenoa", "l??noa"),
e(yg, "liber", "l??ber"),
e(yg, "libia", "l??bia"),
e(yg, "libio", "l??bio"),
e(yg, "libuo", "l??buo"),
e(yg, "licea", "l??cea"),
e(yg, "licia", "l??cia"),
e(yg, "licio", "l??cio"),
e(yg, "lider", "l??der"),
e(yg, "lidia", "l??dia"),
e(yg, "lidio", "l??dio"),
e(yg, "lieis", "l??eis"),
e(yg, "ligea", "l??gea"),
e(yg, "ligeo", "l??geo"),
e(yg, "ligia", "l??gia"),
e(yg, "ligio", "l??gio"),
e(yg, "lilio", "l??lio"),
e(yg, "limea", "l??mea"),
e(yg, "limeo", "l??meo"),
e(yg, "linea", "l??nea"),
e(yg, "lineo", "l??neo"),
e(yg, "lipia", "l??pia"),
e(yg, "lipoa", "l??poa"),
e(yg, "liria", "l??ria"),
e(yg, "lirio", "l??rio"),
e(yg, "lisia", "l??sia"),
e(yg, "lisio", "l??sio"),
e(yg, "litia", "l??tia"),
e(yg, "litio", "l??tio"),
e(yg, "lituo", "l??tuo"),
e(yg, "livia", "l??via"),
e(yg, "lizia", "l??zia"),
e(yg, "lodao", "l??d??o"),
e(yg, "lofio", "l??fio"),
e(yg, "logea", "l??gea"),
e(yg, "lojia", "l??jia"),
e(yg, "lolio", "l??lio"),
e(yg, "lopis", "l??pis"),
e(yg, "loqui", "l??qui"),
e(yg, "loria", "l??ria"),
e(yg, "lorio", "l??rio"),
e(yg, "loris", "l??ris"),
e(yg, "losia", "l??sia"),
e(yg, "loteo", "l??teo"),
e(yg, "lotur", "l??tur"),
e(yg, "lotus", "l??tus"),
e(yg, "lovia", "l??via"),
e(yg, "loxia", "l??xia"),
e(yg, "lomis", "l??mis"),
e(yg, "lucia", "l??cia"),
e(yg, "lucio", "l??cio"),
e(yg, "ludio", "l??dio"),
e(yg, "lufia", "l??fia"),
e(yg, "lumen", "l??men"),
e(yg, "lumia", "l??mia"),
e(yg, "lupia", "l??pia"),
e(yg, "lupus", "l??pus"),
e(yg, "luria", "l??ria"),
e(yg, "lutea", "l??tea"),
e(yg, "luteo", "l??teo"),
e(yg, "luzio", "l??zio"),
e(yg, "mabiu", "mabi??"),
e(yg, "mabre", "mabr??"),
e(yg, "macaa", "maca??"),
e(yg, "macae", "maca??"),
e(yg, "mache", "mach??"),
e(yg, "macie", "maci??"),
e(yg, "macra", "macr??"),
e(yg, "madas", "mad??s"),
e(yg, "mafau", "mafa??"),
e(yg, "mafua", "mafu??"),
e(yg, "magai", "maga??"),
e(yg, "magne", "magn??"),
e(yg, "maina", "main??"),
e(yg, "maira", "mair??"),
e(yg, "maiao", "mai??o"),
e(yg, "malea", "male??"),
e(yg, "malsa", "mals??"),
e(yg, "mambe", "mamb??"),
e(yg, "mamae", "mam??e"),
e(yg, "mamao", "mam??o"),
e(yg, "manai", "mana??"),
e(yg, "manea", "mane??"),
e(yg, "manha", "manh??"),
e(yg, "maniu", "mani??"),
e(yg, "mante", "mant??"),
e(yg, "manue", "manu??"),
e(yg, "mapea", "mape??"),
e(yg, "mapua", "mapu??"),
e(yg, "mapao", "map??o"),
e(yg, "mapes", "map??s"),
e(yg, "marea", "mare??"),
e(yg, "marii", "mari??"),
e(yg, "mario", "mari??"),
e(yg, "marua", "maru??"),
e(yg, "marui", "maru??"),
e(yg, "maras", "mar??s"),
e(yg, "marao", "mar??o"),
e(yg, "mareu", "mar??u"),
e(yg, "masue", "masu??"),
e(yg, "matea", "mate??"),
e(yg, "matse", "mats??"),
e(yg, "matue", "matu??"),
e(yg, "matao", "mat??o"),
e(yg, "mateu", "mat??u"),
e(yg, "maune", "maun??"),
e(yg, "maura", "maur??"),
e(yg, "mauza", "mauz??"),
e(yg, "maues", "mau??s"),
e(yg, "mauis", "mau??s"),
e(yg, "macai", "ma??ai"),
e(yg, "macal", "ma??al"),
e(yg, "macam", "ma??am"),
e(yg, "macar", "ma??ar"),
e(yg, "macom", "ma??om"),
e(yg, "macos", "ma??os"),
e(yg, "macou", "ma??ou"),
e(yg, "macao", "ma????o"),
e(yg, "macas", "ma????s"),
e(yg, "maica", "ma????a"),
e(yg, "mauba", "ma??ba"),
e(yg, "maujo", "ma??jo"),
e(yg, "maulo", "ma??lo"),
e(yg, "mauca", "ma????a"),
e(yg, "meaca", "mea??a"),
e(yg, "meiao", "mei??o"),
e(yg, "mejes", "mej??s"),
e(yg, "melha", "melh??"),
e(yg, "melao", "mel??o"),
e(yg, "membe", "memb??"),
e(yg, "menda", "mend??"),
e(yg, "menea", "mene??"),
e(yg, "menes", "men??s"),
e(yg, "meoas", "meo??s"),
e(yg, "merce", "merc??"),
e(yg, "merga", "merg??"),
e(yg, "merio", "meri??"),
e(yg, "merui", "meru??"),
e(yg, "merem", "mer??m"),
e(yg, "mesca", "mesc??"),
e(yg, "mesao", "mes??o"),
e(yg, "metie", "meti??"),
e(yg, "meuas", "meu??s"),
e(yg, "meuos", "meu??s"),
e(yg, "mexao", "mex??o"),
e(yg, "mezes", "mez??s"),
e(yg, "mecam", "me??am"),
e(yg, "mecas", "me??as"),
e(yg, "meoes", "me??es"),
e(yg, "meuco", "me??co"),
e(yg, "meule", "me??le"),
e(yg, "miara", "miar??"),
e(yg, "miche", "mich??"),
e(yg, "migda", "migd??"),
e(yg, "mijui", "miju??"),
e(yg, "mijao", "mij??o"),
e(yg, "milao", "mil??o"),
e(yg, "minda", "mind??"),
e(yg, "minui", "minu??"),
e(yg, "mirga", "mirg??"),
e(yg, "mirio", "miri??"),
e(yg, "miroe", "miro??"),
e(yg, "mirui", "miru??"),
e(yg, "mirza", "mirz??"),
e(yg, "mirao", "mir??o"),
e(yg, "misca", "misc??"),
e(yg, "misna", "misn??"),
e(yg, "misso", "miss??"),
e(yg, "miuas", "miu??s"),
e(yg, "mixio", "mixi??"),
e(yg, "mixna", "mixn??"),
e(yg, "miuda", "mi??da"),
e(yg, "miude", "mi??de"),
e(yg, "miudo", "mi??do"),
e(yg, "miufa", "mi??fa"),
e(yg, "miulo", "mi??lo"),
e(yg, "miura", "mi??ra"),
e(yg, "miuro", "mi??ro"),
e(yg, "miuva", "mi??va"),
e(yg, "miuca", "mi????a"),
e(yg, "moaca", "moac??"),
e(yg, "mocea", "moce??"),
e(yg, "mocui", "mocu??"),
e(yg, "moera", "moer??"),
e(yg, "mogue", "mogu??"),
e(yg, "mogao", "mog??o"),
e(yg, "mogas", "mog??s"),
e(yg, "moiao", "moi??o"),
e(yg, "molea", "mole??"),
e(yg, "molga", "molg??"),
e(yg, "momea", "mome??"),
e(yg, "mompe", "momp??"),
e(yg, "monde", "mond??"),
e(yg, "monhe", "monh??"),
e(yg, "morai", "mora??"),
e(yg, "morma", "morm??"),
e(yg, "morao", "mor??o"),
e(yg, "mosba", "mosb??"),
e(yg, "mouca", "mouc??"),
e(yg, "moufa", "mouf??"),
e(yg, "mouma", "moum??"),
e(yg, "moadi", "mo??di"),
e(yg, "moali", "mo??li"),
e(yg, "mocai", "mo??ai"),
e(yg, "mocam", "mo??am"),
e(yg, "mocar", "mo??ar"),
e(yg, "mocas", "mo??as"),
e(yg, "mocos", "mo??os"),
e(yg, "mocou", "mo??ou"),
e(yg, "mocao", "mo????o"),
e(yg, "moiam", "mo??am"),
e(yg, "moias", "mo??as"),
e(yg, "moida", "mo??da"),
e(yg, "moido", "mo??do"),
e(yg, "mouos", "mo??os"),
e(yg, "mucue", "mucu??"),
e(yg, "mucui", "mucu??"),
e(yg, "muema", "muem??"),
e(yg, "muena", "muen??"),
e(yg, "mufui", "mufu??"),
e(yg, "mufes", "muf??s"),
e(yg, "mugue", "mugu??"),
e(yg, "muira", "muir??"),
e(yg, "muias", "mui??s"),
e(yg, "muloi", "mul??i"),
e(yg, "mumbe", "mumb??"),
e(yg, "munde", "mund??"),
e(yg, "munje", "munj??"),
e(yg, "munas", "mun??s"),
e(yg, "murea", "mure??"),
e(yg, "murui", "muru??"),
e(yg, "murza", "murz??"),
e(yg, "murca", "mur??a"),
e(yg, "musga", "musg??"),
e(yg, "musme", "musm??"),
e(yg, "musso", "muss??"),
e(yg, "mutoe", "muto??"),
e(yg, "mutas", "mut??s"),
e(yg, "muviu", "muvi??"),
e(yg, "muxem", "mux??m"),
e(yg, "muadi", "mu??di"),
e(yg, "muari", "mu??ri"),
e(yg, "muani", "mu??ni"),
e(yg, "mucas", "mu??as"),
e(yg, "mucao", "mu????o"),
e(yg, "muila", "mu??la"),
e(yg, "macea", "m??cea"),
e(yg, "madia", "m??dia"),
e(yg, "mafia", "m??fia"),
e(yg, "magis", "m??gis"),
e(yg, "magoa", "m??goa"),
e(yg, "malus", "m??lus"),
e(yg, "maroo", "m??roo"),
e(yg, "masea", "m??sea"),
e(yg, "maseo", "m??seo"),
e(yg, "masio", "m??sio"),
e(yg, "mater", "m??ter"),
e(yg, "matri", "m??tri"),
e(yg, "mavia", "m??via"),
e(yg, "mebia", "m??bia"),
e(yg, "mecia", "m??cia"),
e(yg, "mecum", "m??cum"),
e(yg, "media", "m??dia"),
e(yg, "medio", "m??dio"),
e(yg, "medon", "m??don"),
e(yg, "medao", "m??d??o"),
e(yg, "meleo", "m??leo"),
e(yg, "melia", "m??lia"),
e(yg, "meloe", "m??loe"),
e(yg, "meona", "m??ona"),
e(yg, "meone", "m??one"),
e(yg, "meono", "m??ono"),
e(yg, "meroe", "m??roe"),
e(yg, "mesia", "m??sia"),
e(yg, "mesio", "m??sio"),
e(yg, "mesis", "m??sis"),
e(yg, "meson", "m??son"),
e(yg, "messu", "m??ssu"),
e(yg, "mesua", "m??sua"),
e(yg, "mevia", "m??via"),
e(yg, "mezio", "m??zio"),
e(yg, "micia", "m??cia"),
e(yg, "micio", "m??cio"),
e(yg, "midia", "m??dia"),
e(yg, "milea", "m??lea"),
e(yg, "mileo", "m??leo"),
e(yg, "milio", "m??lio"),
e(yg, "mimon", "m??mon"),
e(yg, "minio", "m??nio"),
e(yg, "miope", "m??ope"),
e(yg, "miris", "m??ris"),
e(yg, "misia", "m??sia"),
e(yg, "misio", "m??sio"),
e(yg, "misis", "m??sis"),
e(yg, "mitim", "m??tim"),
e(yg, "mobil", "m??bil"),
e(yg, "mocis", "m??cis"),
e(yg, "modio", "m??dio"),
e(yg, "molia", "m??lia"),
e(yg, "molio", "m??lio"),
e(yg, "molis", "m??lis"),
e(yg, "moqua", "m??qua"),
e(yg, "morea", "m??rea"),
e(yg, "morio", "m??rio"),
e(yg, "movel", "m??vel"),
e(yg, "muchi", "m??chi"),
e(yg, "mucua", "m??cua"),
e(yg, "mugil", "m??gil"),
e(yg, "mujio", "m??jio"),
e(yg, "mulea", "m??lea"),
e(yg, "muleo", "m??leo"),
e(yg, "mulio", "m??lio"),
e(yg, "mumia", "m??mia"),
e(yg, "mundi", "m??ndi"),
e(yg, "munia", "m??nia"),
e(yg, "munus", "m??nus"),
e(yg, "muons", "m??ons"),
e(yg, "murex", "m??rex"),
e(yg, "muria", "m??ria"),
e(yg, "mutua", "m??tua"),
e(yg, "mutuo", "m??tuo"),
e(yg, "muzua", "m??zua"),
e(yg, "musli", "m??sli"),
e(yg, "nafes", "naf??s"),
e(yg, "nagao", "nag??o"),
e(yg, "nagos", "nag??s"),
e(yg, "naixo", "naix??"),
e(yg, "najes", "naj??s"),
e(yg, "nanas", "nan??s"),
e(yg, "nanos", "nan??s"),
e(yg, "narca", "nar??a"),
e(yg, "nasca", "nas??a"),
e(yg, "nasco", "nas??o"),
e(yg, "navao", "nava??"),
e(yg, "navem", "nav??m"),
e(yg, "nacao", "na????o"),
e(yg, "naive", "na??ve"),
e(yg, "necea", "nece??"),
e(yg, "nedai", "neda??"),
e(yg, "negao", "neg??o"),
e(yg, "nenem", "nen??m"),
e(yg, "nenes", "nen??s"),
e(yg, "nevao", "nev??o"),
e(yg, "neois", "ne??is"),
e(yg, "neoes", "ne??es"),
e(yg, "nhimo", "nhim??"),
e(yg, "niboe", "nibo??"),
e(yg, "nicta", "nict??"),
e(yg, "nices", "nic??s"),
e(yg, "nifao", "nif??o"),
e(yg, "nilgo", "nilg??"),
e(yg, "nilia", "nili??"),
e(yg, "niopo", "niop??"),
e(yg, "nipao", "nip??o"),
e(yg, "nipas", "nip??s"),
e(yg, "niros", "nir??s"),
e(yg, "nisao", "nis??o"),
e(yg, "nisas", "nis??s"),
e(yg, "nogao", "nog??o"),
e(yg, "nomea", "nome??"),
e(yg, "norca", "nor??a"),
e(yg, "nocao", "no????o"),
e(yg, "noeis", "no??is"),
e(yg, "nudas", "nud??s"),
e(yg, "nugos", "nug??s"),
e(yg, "nuita", "nuit??"),
e(yg, "nupes", "nup??s"),
e(yg, "nuvea", "nuve??"),
e(yg, "nucao", "nu????o"),
e(yg, "nueis", "nu??is"),
e(yg, "nuima", "nu??ma"),
e(yg, "nabis", "n??bis"),
e(yg, "nabao", "n??b??o"),
e(yg, "nacar", "n??car"),
e(yg, "nagua", "n??gua"),
e(yg, "najir", "n??jir"),
e(yg, "narea", "n??rea"),
e(yg, "nasea", "n??sea"),
e(yg, "naseo", "n??seo"),
e(yg, "nasia", "n??sia"),
e(yg, "nasio", "n??sio"),
e(yg, "nassi", "n??ssi"),
e(yg, "nasua", "n??sua"),
e(yg, "natia", "n??tia"),
e(yg, "navea", "n??vea"),
e(yg, "navia", "n??via"),
e(yg, "naxia", "n??xia"),
e(yg, "naxio", "n??xio"),
e(yg, "nazia", "n??zia"),
e(yg, "nazir", "n??zir"),
e(yg, "namia", "n??mia"),
e(yg, "nania", "n??nia"),
e(yg, "negre", "n??gre"),
e(yg, "nedia", "n??dia"),
e(yg, "nedio", "n??dio"),
e(yg, "nedji", "n??dji"),
e(yg, "neeas", "n??eas"),
e(yg, "nelia", "n??lia"),
e(yg, "neone", "n??one"),
e(yg, "neons", "n??ons"),
e(yg, "neper", "n??per"),
e(yg, "nepia", "n??pia"),
e(yg, "neria", "n??ria"),
e(yg, "nerio", "n??rio"),
e(yg, "nesea", "n??sea"),
e(yg, "neseo", "n??seo"),
e(yg, "nevoa", "n??voa"),
e(yg, "nenax", "n??nax"),
e(yg, "nenia", "n??nia"),
e(yg, "nenio", "n??nio"),
e(yg, "nigua", "n??gua"),
e(yg, "nilio", "n??lio"),
e(yg, "nimia", "n??mia"),
e(yg, "nimio", "n??mio"),
e(yg, "ninji", "n??nji"),
e(yg, "niobe", "n??obe"),
e(yg, "nirex", "n??rex"),
e(yg, "nisio", "n??sio"),
e(yg, "niton", "n??ton"),
e(yg, "nivea", "n??vea"),
e(yg, "nivel", "n??vel"),
e(yg, "niveo", "n??veo"),
e(yg, "nobis", "n??bis"),
e(yg, "nocia", "n??cia"),
e(yg, "nocio", "n??cio"),
e(yg, "nodio", "n??dio"),
e(yg, "nodoa", "n??doa"),
e(yg, "noria", "n??ria"),
e(yg, "norio", "n??rio"),
e(yg, "notea", "n??tea"),
e(yg, "noteo", "n??teo"),
e(yg, "novea", "n??vea"),
e(yg, "novio", "n??vio"),
e(yg, "noxio", "n??xio"),
e(yg, "nomeo", "n??meo"),
e(yg, "nonea", "n??nea"),
e(yg, "nonex", "n??nex"),
e(yg, "nonio", "n??nio"),
e(yg, "nubia", "n??bia"),
e(yg, "nubil", "n??bil"),
e(yg, "nubio", "n??bio"),
e(yg, "nucio", "n??cio"),
e(yg, "nufar", "n??far"),
e(yg, "numen", "n??men"),
e(yg, "nuria", "n??ria"),
e(yg, "nuveo", "n??veo"),
e(yg, "nuxia", "n??xia"),
e(yg, "oacas", "oac??s"),
e(yg, "oboes", "obo??s"),
e(yg, "obtem", "obt??m"),
e(yg, "obtem", "obt??m"),
e(yg, "obvem", "obv??m"),
e(yg, "obvem", "obv??m"),
e(yg, "oclui", "oclu??"),
e(yg, "octas", "oct??s"),
e(yg, "ocume", "ocum??"),
e(yg, "odede", "oded??"),
e(yg, "odeao", "ode??o"),
e(yg, "odeon", "od??on"),
e(yg, "ofaie", "ofai??"),
e(yg, "ofuro", "ofur??"),
e(yg, "ogodo", "ogod??"),
e(yg, "ogude", "ogud??"),
e(yg, "oguxo", "ogux??"),
e(yg, "ogoes", "og??es"),
e(yg, "oiaca", "oiac??"),
e(yg, "oinca", "oinc??"),
e(yg, "oitao", "oit??o"),
e(yg, "oicam", "oi??am"),
e(yg, "oicas", "oi??as"),
e(yg, "oicos", "oi??os"),
e(yg, "olala", "olal??"),
e(yg, "olare", "olar??"),
e(yg, "olele", "olel??"),
e(yg, "olere", "oler??"),
e(yg, "olhao", "olh??o"),
e(yg, "olobo", "olob??"),
e(yg, "olode", "olod??"),
e(yg, "olubo", "olub??"),
e(yg, "omaia", "omai??"),
e(yg, "omala", "omal??"),
e(yg, "ombra", "ombr??"),
e(yg, "omele", "omel??"),
e(yg, "omios", "omi??s"),
e(yg, "omues", "omu??s"),
e(yg, "ondea", "onde??"),
e(yg, "ondoa", "ondo??"),
e(yg, "onfua", "onfu??"),
e(yg, "onhas", "onh??s"),
e(yg, "oncas", "on??as"),
e(yg, "opaie", "opai??"),
e(yg, "opele", "opel??"),
e(yg, "opora", "opor??"),
e(yg, "opcao", "op????o"),
e(yg, "opois", "op??is"),
e(yg, "opoem", "op??em"),
e(yg, "opoes", "op??es"),
e(yg, "oquea", "oque??"),
e(yg, "oquie", "oqui??"),
e(yg, "oquas", "oqu??s"),
e(yg, "orara", "orar??"),
e(yg, "orixa", "orix??"),
e(yg, "orias", "ori??s"),
e(yg, "orios", "ori??s"),
e(yg, "orlea", "orle??"),
e(yg, "ornea", "orne??"),
e(yg, "orupa", "orup??"),
e(yg, "oruas", "oru??s"),
e(yg, "orcai", "or??ai"),
e(yg, "orcam", "or??am"),
e(yg, "orcar", "or??ar"),
e(yg, "orcas", "or??as"),
e(yg, "orcaz", "or??az"),
e(yg, "orcou", "or??ou"),
e(yg, "osses", "oss??s"),
e(yg, "ototo", "otot??"),
e(yg, "otoes", "ot??es"),
e(yg, "ougas", "oug??s"),
e(yg, "ourem", "our??m"),
e(yg, "outao", "out??o"),
e(yg, "oucam", "ou??am"),
e(yg, "oucas", "ou??as"),
e(yg, "oucao", "ou????o"),
e(yg, "ovens", "ov??ns"),
e(yg, "oxala", "oxal??"),
e(yg, "oxiao", "oxi??o"),
e(yg, "ozona", "ozon??"),
e(yg, "oasis", "o??sis"),
e(yg, "ocaim", "o????im"),
e(yg, "oecio", "o??cio"),
e(yg, "oeone", "o??one"),
e(yg, "oidio", "o??dio"),
e(yg, "oucos", "o??cos"),
e(yg, "pacai", "paca??"),
e(yg, "pacha", "pach??"),
e(yg, "pacta", "pact??"),
e(yg, "pacua", "pacu??"),
e(yg, "pacao", "pac??o"),
e(yg, "pacem", "pac??m"),
e(yg, "paces", "pac??s"),
e(yg, "padra", "padr??"),
e(yg, "pades", "pad??s"),
e(yg, "paete", "paet??"),
e(yg, "pafua", "pafu??"),
e(yg, "pagao", "pag??o"),
e(yg, "pailo", "pail??"),
e(yg, "paias", "pai??s"),
e(yg, "paiao", "pai??o"),
e(yg, "pajau", "paja??"),
e(yg, "pajea", "paje??"),
e(yg, "pajeu", "paje??"),
e(yg, "pajao", "paj??o"),
e(yg, "pajes", "paj??s"),
e(yg, "palau", "pala??"),
e(yg, "palpa", "palp??"),
e(yg, "palao", "pal??o"),
e(yg, "pamoa", "pamo??"),
e(yg, "panro", "panr??"),
e(yg, "panto", "pant??"),
e(yg, "panao", "pan??o"),
e(yg, "panca", "pan??a"),
e(yg, "papea", "pape??"),
e(yg, "papia", "papi??"),
e(yg, "papao", "pap??o"),
e(yg, "paqua", "paqu??"),
e(yg, "paque", "paqu??"),
e(yg, "paria", "pari??"),
e(yg, "parna", "parn??"),
e(yg, "parne", "parn??"),
e(yg, "parui", "paru??"),
e(yg, "parao", "par??o"),
e(yg, "paros", "par??s"),
e(yg, "pasca", "pas??a"),
e(yg, "pasco", "pas??o"),
e(yg, "patai", "pata??"),
e(yg, "patea", "pate??"),
e(yg, "patia", "pati??"),
e(yg, "patoa", "pato??"),
e(yg, "patua", "patu??"),
e(yg, "patao", "pat??o"),
e(yg, "patem", "pat??m"),
e(yg, "pates", "pat??s"),
e(yg, "pavao", "pav??o"),
e(yg, "pavas", "pav??s"),
e(yg, "paves", "pav??s"),
e(yg, "paxau", "paxa??"),
e(yg, "paxas", "pax??s"),
e(yg, "pazea", "paze??"),
e(yg, "pazao", "paz??o"),
e(yg, "pacal", "pa??al"),
e(yg, "pacos", "pa??os"),
e(yg, "paiba", "pa??ba"),
e(yg, "pauna", "pa??na"),
e(yg, "paura", "pa??ra"),
e(yg, "peaca", "pea??a"),
e(yg, "pecem", "pec??m"),
e(yg, "pecoi", "pec??i"),
e(yg, "pegao", "peg??o"),
e(yg, "peipa", "peip??"),
e(yg, "peius", "pei??s"),
e(yg, "pelea", "pele??"),
e(yg, "pelao", "pel??o"),
e(yg, "pelem", "pel??m"),
e(yg, "penco", "penc??"),
e(yg, "pengo", "peng??"),
e(yg, "penao", "pen??o"),
e(yg, "pepse", "peps??"),
e(yg, "pepes", "pep??s"),
e(yg, "perea", "pere??"),
e(yg, "peroa", "pero??"),
e(yg, "perre", "perr??"),
e(yg, "perve", "perv??"),
e(yg, "pesme", "pesm??"),
e(yg, "pesao", "pes??o"),
e(yg, "petea", "pete??"),
e(yg, "petia", "peti??"),
e(yg, "petiu", "peti??"),
e(yg, "petao", "pet??o"),
e(yg, "petem", "pet??m"),
e(yg, "pexao", "pex??o"),
e(yg, "pexas", "pex??s"),
e(yg, "pexem", "pex??m"),
e(yg, "pezao", "pez??o"),
e(yg, "pecam", "pe??am"),
e(yg, "pecas", "pe??as"),
e(yg, "peoes", "pe??es"),
e(yg, "peuco", "pe??co"),
e(yg, "peuga", "pe??ga"),
e(yg, "peule", "pe??le"),
e(yg, "peuva", "pe??va"),
e(yg, "pfuca", "pfuc??"),
e(yg, "piade", "piad??"),
e(yg, "piafa", "piaf??"),
e(yg, "piafe", "piaf??"),
e(yg, "piala", "pial??"),
e(yg, "piape", "piap??"),
e(yg, "piara", "piar??"),
e(yg, "piaui", "piau??"),
e(yg, "piaco", "pia??o"),
e(yg, "pibos", "pib??s"),
e(yg, "picau", "pica??"),
e(yg, "picua", "picu??"),
e(yg, "picui", "picu??"),
e(yg, "picao", "pic??o"),
e(yg, "pidao", "pid??o"),
e(yg, "pidos", "pid??s"),
e(yg, "pifao", "pif??o"),
e(yg, "pigua", "pigu??"),
e(yg, "pilao", "pil??o"),
e(yg, "pileu", "pil??u"),
e(yg, "pilos", "pil??s"),
e(yg, "pinda", "pind??"),
e(yg, "pindo", "pind??"),
e(yg, "pinhe", "pinh??"),
e(yg, "pinca", "pin??a"),
e(yg, "pinco", "pin??o"),
e(yg, "pineu", "pin??u"),
e(yg, "pioie", "pioi??"),
e(yg, "pioro", "pior??"),
e(yg, "pipao", "pip??o"),
e(yg, "pirai", "pira??"),
e(yg, "pirau", "pira??"),
e(yg, "piroa", "piro??"),
e(yg, "pirua", "piru??"),
e(yg, "pirao", "pir??o"),
e(yg, "pisga", "pisg??"),
e(yg, "pisao", "pis??o"),
e(yg, "pitiu", "piti??"),
e(yg, "pitua", "pitu??"),
e(yg, "pitui", "pitu??"),
e(yg, "pitao", "pit??o"),
e(yg, "pitem", "pit??m"),
e(yg, "piteu", "pit??u"),
e(yg, "pivos", "piv??s"),
e(yg, "pixea", "pixe??"),
e(yg, "pixua", "pixu??"),
e(yg, "pixes", "pix??s"),
e(yg, "pixeu", "pix??u"),
e(yg, "pioes", "pi??es"),
e(yg, "piuba", "pi??ba"),
e(yg, "piuca", "pi??ca"),
e(yg, "piugo", "pi??go"),
e(yg, "piuna", "pi??na"),
e(yg, "piuva", "pi??va"),
e(yg, "place", "plac??"),
e(yg, "plato", "plat??"),
e(yg, "plida", "plid??"),
e(yg, "pleon", "pl??on"),
e(yg, "poacu", "poa??u"),
e(yg, "podra", "podr??"),
e(yg, "podao", "pod??o"),
e(yg, "podoi", "pod??i"),
e(yg, "poera", "poer??"),
e(yg, "poica", "poi????"),
e(yg, "pojos", "poj??s"),
e(yg, "polea", "pole??"),
e(yg, "polao", "pol??o"),
e(yg, "poles", "pol??s"),
e(yg, "pomea", "pome??"),
e(yg, "ponca", "ponc??"),
e(yg, "ponco", "ponc??"),
e(yg, "ponje", "ponj??"),
e(yg, "popia", "popi??"),
e(yg, "popao", "pop??o"),
e(yg, "popos", "pop??s"),
e(yg, "porno", "porn??"),
e(yg, "poras", "por??s"),
e(yg, "porao", "por??o"),
e(yg, "porem", "por??m"),
e(yg, "pospo", "posp??"),
e(yg, "potao", "pot??o"),
e(yg, "povao", "pov??o"),
e(yg, "pocal", "po??al"),
e(yg, "pocas", "po??as"),
e(yg, "pocos", "po??os"),
e(yg, "pocao", "po????o"),
e(yg, "poois", "po??is"),
e(yg, "praja", "praj??"),
e(yg, "praxa", "prax??"),
e(yg, "praze", "praz??"),
e(yg, "praca", "pra??a"),
e(yg, "preda", "pred??"),
e(yg, "prede", "pred??"),
e(yg, "prepo", "prep??"),
e(yg, "preve", "prev??"),
e(yg, "preas", "pre??s"),
e(yg, "preco", "pre??o"),
e(yg, "priao", "pri??o"),
e(yg, "proca", "proc??"),
e(yg, "propo", "prop??"),
e(yg, "prove", "prov??"),
e(yg, "proza", "proz??"),
e(yg, "pruas", "pru??s"),
e(yg, "pruia", "pru??a"),
e(yg, "pruis", "pru??s"),
e(yg, "preon", "pr??on"),
e(yg, "prion", "pr??on"),
e(yg, "puaco", "pua??o"),
e(yg, "puacu", "pua??u"),
e(yg, "pucto", "puct??"),
e(yg, "pudla", "pudl??"),
e(yg, "puira", "puir??"),
e(yg, "pulea", "pule??"),
e(yg, "pulta", "pult??"),
e(yg, "pulao", "pul??o"),
e(yg, "punde", "pund??"),
e(yg, "punta", "punt??"),
e(yg, "punca", "pun??a"),
e(yg, "punco", "pun??o"),
e(yg, "purui", "puru??"),
e(yg, "pures", "pur??s"),
e(yg, "putea", "pute??"),
e(yg, "puvia", "puvi??"),
e(yg, "puxao", "pux??o"),
e(yg, "pucas", "pu????s"),
e(yg, "puiam", "pu??am"),
e(yg, "puias", "pu??as"),
e(yg, "puida", "pu??da"),
e(yg, "puido", "pu??do"),
e(yg, "puira", "pu??ra"),
e(yg, "puita", "pu??ta"),
e(yg, "padar", "p??dar"),
e(yg, "pader", "p??der"),
e(yg, "padoa", "p??doa"),
e(yg, "padua", "p??dua"),
e(yg, "pafia", "p??fia"),
e(yg, "pafio", "p??fio"),
e(yg, "pagua", "p??gua"),
e(yg, "palea", "p??lea"),
e(yg, "palio", "p??lio"),
e(yg, "palis", "p??lis"),
e(yg, "papio", "p??pio"),
e(yg, "parea", "p??rea"),
e(yg, "pareo", "p??reo"),
e(yg, "pario", "p??rio"),
e(yg, "parsi", "p??rsi"),
e(yg, "pateo", "p??teo"),
e(yg, "pater", "p??ter"),
e(yg, "patio", "p??tio"),
e(yg, "paxia", "p??xia"),
e(yg, "panax", "p??nax"),
e(yg, "panus", "p??nus"),
e(yg, "peans", "p??ans"),
e(yg, "pelio", "p??lio"),
e(yg, "peone", "p??one"),
e(yg, "peons", "p??ons"),
e(yg, "pepia", "p??pia"),
e(yg, "pexis", "p??xis"),
e(yg, "penea", "p??nea"),
e(yg, "penio", "p??nio"),
e(yg, "penis", "p??nis"),
e(yg, "picea", "p??cea"),
e(yg, "piceo", "p??ceo"),
e(yg, "piera", "p??era"),
e(yg, "piere", "p??ere"),
e(yg, "piero", "p??ero"),
e(yg, "pifia", "p??fia"),
e(yg, "pifio", "p??fio"),
e(yg, "pigea", "p??gea"),
e(yg, "pigeo", "p??geo"),
e(yg, "pijin", "p??jin"),
e(yg, "pilea", "p??lea"),
e(yg, "pileo", "p??leo"),
e(yg, "pilia", "p??lia"),
e(yg, "pilio", "p??lio"),
e(yg, "pinea", "p??nea"),
e(yg, "pineo", "p??neo"),
e(yg, "pinus", "p??nus"),
e(yg, "piono", "p??ono"),
e(yg, "pions", "p??ons"),
e(yg, "piper", "p??per"),
e(yg, "piqua", "p??qua"),
e(yg, "pirea", "p??rea"),
e(yg, "pirio", "p??rio"),
e(yg, "pisea", "p??sea"),
e(yg, "piseo", "p??seo"),
e(yg, "pisin", "p??sin"),
e(yg, "pitia", "p??tia"),
e(yg, "pitio", "p??tio"),
e(yg, "pitis", "p??tis"),
e(yg, "piton", "p??ton"),
e(yg, "pixis", "p??xis"),
e(yg, "podex", "p??dex"),
e(yg, "podio", "p??dio"),
e(yg, "podon", "p??don"),
e(yg, "pogea", "p??gea"),
e(yg, "polen", "p??len"),
e(yg, "polex", "p??lex"),
e(yg, "polio", "p??lio"),
e(yg, "polis", "p??lis"),
e(yg, "polux", "p??lux"),
e(yg, "porio", "p??rio"),
e(yg, "potea", "p??tea"),
e(yg, "potia", "p??tia"),
e(yg, "povoa", "p??voa"),
e(yg, "ponei", "p??nei"),
e(yg, "pubis", "p??bis"),
e(yg, "pugil", "p??gil"),
e(yg, "pulex", "p??lex"),
e(yg, "quale", "qual??"),
e(yg, "quaro", "quar??"),
e(yg, "quata", "quat??"),
e(yg, "quece", "quec??"),
e(yg, "quere", "quer??"),
e(yg, "quice", "quic??"),
e(yg, "quipa", "quip??"),
e(yg, "quipe", "quip??"),
e(yg, "quiui", "quiu??"),
e(yg, "quixo", "quix??"),
e(yg, "quias", "qui??s"),
e(yg, "quico", "qui??o"),
e(yg, "quica", "qui????"),
e(yg, "quies", "qui??s"),
e(yg, "quali", "qu??li"),
e(yg, "quepi", "qu??pi"),
e(yg, "rabea", "rabe??"),
e(yg, "rabao", "rab??o"),
e(yg, "racau", "raca??"),
e(yg, "racea", "race??"),
e(yg, "radao", "rad??o"),
e(yg, "raffa", "raff??"),
e(yg, "ragla", "ragl??"),
e(yg, "raivo", "raiv??"),
e(yg, "raiao", "rai??o"),
e(yg, "rajao", "raj??o"),
e(yg, "ralea", "rale??"),
e(yg, "ralao", "ral??o"),
e(yg, "ramea", "rame??"),
e(yg, "ranfa", "ranf??"),
e(yg, "ranco", "ran??o"),
e(yg, "rapao", "rap??o"),
e(yg, "rarea", "rare??"),
e(yg, "rasao", "ras??o"),
e(yg, "ratea", "rate??"),
e(yg, "ratao", "rat??o"),
e(yg, "rauda", "raud??"),
e(yg, "razao", "raz??o"),
e(yg, "racas", "ra??as"),
e(yg, "racoa", "ra??oa"),
e(yg, "racoe", "ra??oe"),
e(yg, "racoo", "ra??oo"),
e(yg, "racor", "ra??or"),
e(yg, "racao", "ra????o"),
e(yg, "raita", "ra??ta"),
e(yg, "reama", "ream??"),
e(yg, "reave", "reav??"),
e(yg, "reaca", "rea??a"),
e(yg, "rebem", "reb??m"),
e(yg, "recai", "reca??"),
e(yg, "recea", "rece??"),
e(yg, "recha", "rech??"),
e(yg, "recho", "rech??"),
e(yg, "recao", "rec??o"),
e(yg, "recem", "rec??m"),
e(yg, "redas", "red??s"),
e(yg, "redao", "red??o"),
e(yg, "redem", "red??m"),
e(yg, "refem", "ref??m"),
e(yg, "regao", "reg??o"),
e(yg, "reivo", "reiv??"),
e(yg, "rejao", "rej??o"),
e(yg, "relao", "rel??o"),
e(yg, "reles", "rel??s"),
e(yg, "remea", "reme??"),
e(yg, "remoe", "remo??"),
e(yg, "remoi", "remo??"),
e(yg, "remoi", "rem??i"),
e(yg, "renao", "ren??o"),
e(yg, "repos", "rep??s"),
e(yg, "repoe", "rep??e"),
e(yg, "reriu", "reri??"),
e(yg, "resga", "resg??"),
e(yg, "retea", "rete??"),
e(yg, "retem", "ret??m"),
e(yg, "retem", "ret??m"),
e(yg, "reusa", "reus??"),
e(yg, "revem", "rev??m"),
e(yg, "reves", "rev??s"),
e(yg, "revem", "rev??m"),
e(yg, "reves", "rev??s"),
e(yg, "rezao", "rez??o"),
e(yg, "recas", "re??as"),
e(yg, "reina", "re??na"),
e(yg, "reuna", "re??na"),
e(yg, "reune", "re??ne"),
e(yg, "reuno", "re??no"),
e(yg, "reuso", "re??so"),
e(yg, "ribos", "rib??s"),
e(yg, "ricao", "ric??o"),
e(yg, "ridao", "rid??o"),
e(yg, "ridos", "rid??s"),
e(yg, "rifla", "rifl??"),
e(yg, "rifao", "rif??o"),
e(yg, "rijao", "rij??o"),
e(yg, "rinfa", "rinf??"),
e(yg, "rinca", "rin??a"),
e(yg, "ripao", "rip??o"),
e(yg, "riras", "rir??s"),
e(yg, "rirao", "rir??o"),
e(yg, "risao", "ris??o"),
e(yg, "risas", "ris??s"),
e(yg, "ritao", "rit??o"),
e(yg, "ricai", "ri??ai"),
e(yg, "ricam", "ri??am"),
e(yg, "ricar", "ri??ar"),
e(yg, "ricol", "ri??ol"),
e(yg, "ricou", "ri??ou"),
e(yg, "riuta", "ri??ta"),
e(yg, "robos", "rob??s"),
e(yg, "rocla", "rocl??"),
e(yg, "roclo", "rocl??"),
e(yg, "rocao", "roc??o"),
e(yg, "rocos", "roc??s"),
e(yg, "rodea", "rode??"),
e(yg, "rodao", "rod??o"),
e(yg, "roera", "roer??"),
e(yg, "rojao", "roj??o"),
e(yg, "rolao", "rol??o"),
e(yg, "romao", "rom??o"),
e(yg, "romas", "rom??s"),
e(yg, "rondo", "rond??"),
e(yg, "rongo", "rong??"),
e(yg, "ronto", "ront??"),
e(yg, "rosao", "ros??o"),
e(yg, "rotea", "rote??"),
e(yg, "roxea", "roxe??"),
e(yg, "rocai", "ro??ai"),
e(yg, "rocam", "ro??am"),
e(yg, "rocar", "ro??ar"),
e(yg, "rocas", "ro??as"),
e(yg, "rocou", "ro??ou"),
e(yg, "roiam", "ro??am"),
e(yg, "roias", "ro??as"),
e(yg, "roida", "ro??da"),
e(yg, "roido", "ro??do"),
e(yg, "ruaca", "rua??a"),
e(yg, "rubas", "rub??s"),
e(yg, "rubao", "rub??o"),
e(yg, "rudao", "rud??o"),
e(yg, "rufao", "ruf??o"),
e(yg, "ruira", "ruir??"),
e(yg, "rulha", "rulh??"),
e(yg, "rumia", "rumi??"),
e(yg, "runco", "runc??"),
e(yg, "runfa", "runf??"),
e(yg, "runga", "rung??"),
e(yg, "runha", "runh??"),
e(yg, "runle", "runl??"),
e(yg, "runto", "runt??"),
e(yg, "rucai", "ru??ai"),
e(yg, "rucam", "ru??am"),
e(yg, "rucar", "ru??ar"),
e(yg, "rucas", "ru??as"),
e(yg, "rucou", "ru??ou"),
e(yg, "ruiam", "ru??am"),
e(yg, "ruias", "ru??as"),
e(yg, "ruida", "ru??da"),
e(yg, "ruido", "ru??do"),
e(yg, "ruina", "ru??na"),
e(yg, "ruira", "ru??ra"),
e(yg, "ruoes", "ru??es"),
e(yg, "rabia", "r??bia"),
e(yg, "racio", "r??cio"),
e(yg, "radio", "r??dio"),
e(yg, "radom", "r??dom"),
e(yg, "radon", "r??don"),
e(yg, "rafia", "r??fia"),
e(yg, "ragio", "r??gio"),
e(yg, "rapia", "r??pia"),
e(yg, "raqui", "r??qui"),
e(yg, "ratus", "r??tus"),
e(yg, "rameo", "r??meo"),
e(yg, "rebus", "r??bus"),
e(yg, "recia", "r??cia"),
e(yg, "recio", "r??cio"),
e(yg, "recua", "r??cua"),
e(yg, "redea", "r??dea"),
e(yg, "redia", "r??dia"),
e(yg, "regia", "r??gia"),
e(yg, "regie", "r??gie"),
e(yg, "regio", "r??gio"),
e(yg, "regua", "r??gua"),
e(yg, "repia", "r??pia"),
e(yg, "revoa", "r??voa"),
e(yg, "rexia", "r??xia"),
e(yg, "renio", "r??nio"),
e(yg, "riade", "r??ade"),
e(yg, "ricia", "r??cia"),
e(yg, "ricio", "r??cio"),
e(yg, "rieis", "r??eis"),
e(yg, "rigel", "r??gel"),
e(yg, "rigia", "r??gia"),
e(yg, "rigio", "r??gio"),
e(yg, "rimel", "r??mel"),
e(yg, "rinia", "r??nia"),
e(yg, "rinio", "r??nio"),
e(yg, "ripio", "r??pio"),
e(yg, "ritio", "r??tio"),
e(yg, "riton", "r??ton"),
e(yg, "rivea", "r??vea"),
e(yg, "rober", "r??ber"),
e(yg, "robia", "r??bia"),
e(yg, "robor", "r??bor"),
e(yg, "robur", "r??bur"),
e(yg, "rodeo", "r??deo"),
e(yg, "rodio", "r??dio"),
e(yg, "ropia", "r??pia"),
e(yg, "rosea", "r??sea"),
e(yg, "roseo", "r??seo"),
e(yg, "rosia", "r??sia"),
e(yg, "rosio", "r??sio"),
e(yg, "rotia", "r??tia"),
e(yg, "rubea", "r??bea"),
e(yg, "rubeo", "r??beo"),
e(yg, "rubia", "r??bia"),
e(yg, "rubio", "r??bio"),
e(yg, "rufio", "r??fio"),
e(yg, "rugbi", "r??gbi"),
e(yg, "rugio", "r??gio"),
e(yg, "rumen", "r??men"),
e(yg, "rumex", "r??mex"),
e(yg, "rutea", "r??tea"),
e(yg, "sabia", "sabi??"),
e(yg, "sabiu", "sabi??"),
e(yg, "sabas", "sab??s"),
e(yg, "sabao", "sab??o"),
e(yg, "sacai", "saca??"),
e(yg, "sache", "sach??"),
e(yg, "sacue", "sacu??"),
e(yg, "sacao", "sac??o"),
e(yg, "sadra", "sadr??"),
e(yg, "sadao", "sad??o"),
e(yg, "safao", "saf??o"),
e(yg, "sagua", "sagu??"),
e(yg, "sagao", "sag??o"),
e(yg, "saije", "saij??"),
e(yg, "saine", "sain??"),
e(yg, "saipe", "saip??"),
e(yg, "saira", "sair??"),
e(yg, "saire", "sair??"),
e(yg, "saiva", "saiv??"),
e(yg, "saixe", "saix??"),
e(yg, "saiao", "sai??o"),
e(yg, "salha", "salh??"),
e(yg, "salao", "sal??o"),
e(yg, "salca", "sal??a"),
e(yg, "salem", "sal??m"),
e(yg, "sampe", "samp??"),
e(yg, "samao", "sam??o"),
e(yg, "sanda", "sand??"),
e(yg, "sanea", "sane??"),
e(yg, "sante", "sant??"),
e(yg, "sapea", "sape??"),
e(yg, "sapua", "sapu??"),
e(yg, "sapao", "sap??o"),
e(yg, "sarne", "sarn??"),
e(yg, "saroe", "saro??"),
e(yg, "sarua", "saru??"),
e(yg, "sarue", "saru??"),
e(yg, "sarao", "sar??o"),
e(yg, "sarca", "sar??a"),
e(yg, "satao", "sat??o"),
e(yg, "satas", "sat??s"),
e(yg, "sauda", "saud??"),
e(yg, "sauia", "saui??"),
e(yg, "saupe", "saup??"),
e(yg, "saura", "saur??"),
e(yg, "sauas", "sau??s"),
e(yg, "sauis", "sau??s"),
e(yg, "savia", "savi??"),
e(yg, "saxao", "sax??o"),
e(yg, "saxas", "sax??s"),
e(yg, "sazoa", "sazo??"),
e(yg, "sazao", "saz??o"),
e(yg, "saeis", "sa??is"),
e(yg, "saiam", "sa??am"),
e(yg, "saias", "sa??as"),
e(yg, "saico", "sa??co"),
e(yg, "saida", "sa??da"),
e(yg, "saido", "sa??do"),
e(yg, "saimo", "sa??mo"),
e(yg, "saira", "sa??ra"),
e(yg, "saita", "sa??ta"),
e(yg, "sauba", "sa??ba"),
e(yg, "sauco", "sa??co"),
e(yg, "sauda", "sa??da"),
e(yg, "saude", "sa??de"),
e(yg, "saudo", "sa??do"),
e(yg, "sauva", "sa??va"),
e(yg, "scene", "sc??ne"),
e(yg, "sedea", "sede??"),
e(yg, "sedao", "sed??o"),
e(yg, "sedem", "sed??m"),
e(yg, "segao", "seg??o"),
e(yg, "seica", "sei??a"),
e(yg, "selao", "sel??o"),
e(yg, "sembe", "semb??"),
e(yg, "senao", "sen??o"),
e(yg, "seriu", "seri??"),
e(yg, "serta", "sert??"),
e(yg, "seras", "ser??s"),
e(yg, "serao", "ser??o"),
e(yg, "seros", "ser??s"),
e(yg, "setea", "sete??"),
e(yg, "sexua", "sexu??"),
e(yg, "sezoa", "sezo??"),
e(yg, "sezao", "sez??o"),
e(yg, "secao", "se????o"),
e(yg, "sidao", "sid??o"),
e(yg, "sifla", "sifl??"),
e(yg, "sifao", "sif??o"),
e(yg, "sigmo", "sigm??"),
e(yg, "simao", "sim??o"),
e(yg, "sinha", "sinh??"),
e(yg, "sinho", "sinh??"),
e(yg, "sinua", "sinu??"),
e(yg, "sinxo", "sinx??"),
e(yg, "sinao", "sin??o"),
e(yg, "siriu", "siri??"),
e(yg, "sirlo", "sirl??"),
e(yg, "sisso", "siss??"),
e(yg, "sisao", "sis??o"),
e(yg, "sivao", "siv??o"),
e(yg, "sioes", "si??es"),
e(yg, "siuba", "si??ba"),
e(yg, "soara", "soar??"),
e(yg, "sobpe", "sobp??"),
e(yg, "sobpo", "sobp??"),
e(yg, "socoi", "soco??"),
e(yg, "socao", "soc??o"),
e(yg, "sofre", "sofr??"),
e(yg, "sofas", "sof??s"),
e(yg, "sogua", "sogu??"),
e(yg, "solao", "sol??o"),
e(yg, "somie", "somi??"),
e(yg, "sompa", "somp??"),
e(yg, "sopea", "sope??"),
e(yg, "sopia", "sopi??"),
e(yg, "sopao", "sop??o"),
e(yg, "sopes", "sop??s"),
e(yg, "sorea", "sore??"),
e(yg, "sorca", "sor??a"),
e(yg, "sotaa", "sota??"),
e(yg, "souta", "sout??"),
e(yg, "souas", "sou??s"),
e(yg, "soveu", "sov??u"),
e(yg, "soiam", "so??am"),
e(yg, "soias", "so??as"),
e(yg, "soida", "so??da"),
e(yg, "soido", "so??do"),
e(yg, "soima", "so??ma"),
e(yg, "sooes", "so??es"),
e(yg, "suara", "suar??"),
e(yg, "suaco", "sua??o"),
e(yg, "suacu", "sua??u"),
e(yg, "subpo", "subp??"),
e(yg, "sudao", "sud??o"),
e(yg, "sufla", "sufl??"),
e(yg, "sufle", "sufl??"),
e(yg, "sufas", "suf??s"),
e(yg, "suina", "suin??"),
e(yg, "sujao", "suj??o"),
e(yg, "sulao", "sul??o"),
e(yg, "sumes", "sum??s"),
e(yg, "supos", "sup??s"),
e(yg, "supoe", "sup??e"),
e(yg, "surui", "suru??"),
e(yg, "suras", "sur??s"),
e(yg, "surca", "sur??a"),
e(yg, "susao", "sus??o"),
e(yg, "susas", "sus??s"),
e(yg, "sutia", "suti??"),
e(yg, "suvao", "suv??o"),
e(yg, "suari", "su??ri"),
e(yg, "sucao", "su????o"),
e(yg, "suida", "su??da"),
e(yg, "suino", "su??no"),
e(yg, "suita", "su??ta"),
e(yg, "suite", "su??te"),
e(yg, "suica", "su????a"),
e(yg, "suico", "su????o"),
e(yg, "suomi", "su??mi"),
e(yg, "suoes", "su??es"),
e(yg, "sabio", "s??bio"),
e(yg, "sacri", "s??cri"),
e(yg, "safea", "s??fea"),
e(yg, "safeo", "s??feo"),
e(yg, "safia", "s??fia"),
e(yg, "sagia", "s??gia"),
e(yg, "sagio", "s??gio"),
e(yg, "salia", "s??lia"),
e(yg, "salio", "s??lio"),
e(yg, "salix", "s??lix"),
e(yg, "sapia", "s??pia"),
e(yg, "sapio", "s??pio"),
e(yg, "savel", "s??vel"),
e(yg, "saxea", "s??xea"),
e(yg, "saxeo", "s??xeo"),
e(yg, "samea", "s??mea"),
e(yg, "samia", "s??mia"),
e(yg, "samio", "s??mio"),
e(yg, "sandi", "s??ndi"),
e(yg, "sanie", "s??nie"),
e(yg, "sanio", "s??nio"),
e(yg, "secia", "s??cia"),
e(yg, "secio", "s??cio"),
e(yg, "secua", "s??cua"),
e(yg, "sedia", "s??dia"),
e(yg, "selio", "s??lio"),
e(yg, "sepia", "s??pia"),
e(yg, "sepio", "s??pio"),
e(yg, "sequi", "s??qui"),
e(yg, "serie", "s??rie"),
e(yg, "serio", "s??rio"),
e(yg, "serum", "s??rum"),
e(yg, "sesea", "s??sea"),
e(yg, "sesia", "s??sia"),
e(yg, "seter", "s??ter"),
e(yg, "semea", "s??mea"),
e(yg, "semen", "s??men"),
e(yg, "semis", "s??mis"),
e(yg, "senio", "s??nio"),
e(yg, "sicio", "s??cio"),
e(yg, "sicon", "s??con"),
e(yg, "sidea", "s??dea"),
e(yg, "sideo", "s??deo"),
e(yg, "sifia", "s??fia"),
e(yg, "siler", "s??ler"),
e(yg, "silex", "s??lex"),
e(yg, "silis", "s??lis"),
e(yg, "simel", "s??mel"),
e(yg, "simia", "s??mia"),
e(yg, "simil", "s??mil"),
e(yg, "simio", "s??mio"),
e(yg, "sinus", "s??nus"),
e(yg, "sirex", "s??rex"),
e(yg, "siria", "s??ria"),
e(yg, "sirio", "s??rio"),
e(yg, "sitio", "s??tio"),
e(yg, "sobio", "s??bio"),
e(yg, "socia", "s??cia"),
e(yg, "socio", "s??cio"),
e(yg, "sodio", "s??dio"),
e(yg, "solea", "s??lea"),
e(yg, "soleo", "s??leo"),
e(yg, "solio", "s??lio"),
e(yg, "sorex", "s??rex"),
e(yg, "soria", "s??ria"),
e(yg, "sosia", "s??sia"),
e(yg, "soter", "s??ter"),
e(yg, "sotao", "s??t??o"),
e(yg, "suber", "s??ber"),
e(yg, "sucia", "s??cia"),
e(yg, "sucio", "s??cio"),
e(yg, "sumea", "s??mea"),
e(yg, "suria", "s??ria"),
e(yg, "surio", "s??rio"),
e(yg, "susia", "s??sia"),
e(yg, "susio", "s??sio"),
e(yg, "taaca", "taac??"),
e(yg, "tabao", "tab??o"),
e(yg, "tabos", "tab??s"),
e(yg, "tacau", "taca??"),
e(yg, "tacua", "tacu??"),
e(yg, "tacao", "tac??o"),
e(yg, "tafia", "tafi??"),
e(yg, "tagua", "tagu??"),
e(yg, "taifo", "taif??"),
e(yg, "taipo", "taip??"),
e(yg, "taias", "tai??s"),
e(yg, "tajas", "taj??s"),
e(yg, "talao", "tal??o"),
e(yg, "tamao", "tam??o"),
e(yg, "tanca", "tanc??"),
e(yg, "tanta", "tant??"),
e(yg, "tapea", "tape??"),
e(yg, "tapia", "tapi??"),
e(yg, "tapii", "tapi??"),
e(yg, "tapiu", "tapi??"),
e(yg, "tapoa", "tapo??"),
e(yg, "tapao", "tap??o"),
e(yg, "tarea", "tare??"),
e(yg, "tarta", "tart??"),
e(yg, "tarao", "tar??o"),
e(yg, "taros", "tar??s"),
e(yg, "tasga", "tasg??"),
e(yg, "tatai", "tata??"),
e(yg, "tatea", "tate??"),
e(yg, "tatui", "tatu??"),
e(yg, "tatze", "tatz??"),
e(yg, "tatas", "tat??s"),
e(yg, "tauna", "taun??"),
e(yg, "tauas", "tau??s"),
e(yg, "taues", "tau??s"),
e(yg, "tavua", "tavu??"),
e(yg, "tavao", "tav??o"),
e(yg, "tacas", "ta??as"),
e(yg, "taeis", "ta??is"),
e(yg, "tauba", "ta??ba"),
e(yg, "tauva", "ta??va"),
e(yg, "tchas", "tch??s"),
e(yg, "teaca", "tea??a"),
e(yg, "teacu", "tea??u"),
e(yg, "tecos", "tec??s"),
e(yg, "tedeu", "ted??u"),
e(yg, "tefla", "tefl??"),
e(yg, "tegao", "teg??o"),
e(yg, "teiro", "teir??"),
e(yg, "teite", "teit??"),
e(yg, "teius", "tei??s"),
e(yg, "telao", "tel??o"),
e(yg, "tembe", "temb??"),
e(yg, "temne", "temn??"),
e(yg, "temao", "tem??o"),
e(yg, "teras", "ter??s"),
e(yg, "terao", "ter??o"),
e(yg, "terca", "ter??a"),
e(yg, "terco", "ter??o"),
e(yg, "terem", "ter??m"),
e(yg, "tesca", "tesc??"),
e(yg, "tesao", "tes??o"),
e(yg, "teteu", "tet??u"),
e(yg, "teuta", "teut??"),
e(yg, "tevas", "tev??s"),
e(yg, "teves", "tev??s"),
e(yg, "tecam", "te??am"),
e(yg, "tecas", "te??as"),
e(yg, "teina", "te??na"),
e(yg, "teuba", "te??ba"),
e(yg, "teuda", "te??da"),
e(yg, "teudo", "te??do"),
e(yg, "tiace", "tiac??"),
e(yg, "tiata", "tiat??"),
e(yg, "ticoa", "tico??"),
e(yg, "tidao", "tid??o"),
e(yg, "tiete", "tiet??"),
e(yg, "tifao", "tif??o"),
e(yg, "tigao", "tig??o"),
e(yg, "tijes", "tij??s"),
e(yg, "timbe", "timb??"),
e(yg, "timbo", "timb??"),
e(yg, "timao", "tim??o"),
e(yg, "tinho", "tinh??"),
e(yg, "tinao", "tin??o"),
e(yg, "tiote", "tiot??"),
e(yg, "tipio", "tipi??"),
e(yg, "tipao", "tip??o"),
e(yg, "tipoi", "tip??i"),
e(yg, "tirao", "tir??o"),
e(yg, "titao", "tit??o"),
e(yg, "titas", "tit??s"),
e(yg, "tiupa", "tiup??"),
e(yg, "ticao", "ti????o"),
e(yg, "tiens", "ti??ns"),
e(yg, "tioes", "ti??es"),
e(yg, "tiuba", "ti??ba"),
e(yg, "tiuva", "ti??va"),
e(yg, "tobos", "tob??s"),
e(yg, "tocea", "toce??"),
e(yg, "toclo", "tocl??"),
e(yg, "togoi", "tog??i"),
e(yg, "toica", "toi??a"),
e(yg, "toico", "toi??o"),
e(yg, "tolao", "tol??o"),
e(yg, "tomao", "tom??o"),
e(yg, "tonsa", "tons??"),
e(yg, "topea", "tope??"),
e(yg, "torai", "tora??"),
e(yg, "torao", "tor??o"),
e(yg, "torca", "tor??a"),
e(yg, "torco", "tor??o"),
e(yg, "torem", "tor??m"),
e(yg, "tosao", "tos??o"),
e(yg, "totos", "tot??s"),
e(yg, "trara", "trar??"),
e(yg, "traca", "tra??a"),
e(yg, "traco", "tra??o"),
e(yg, "traia", "tra??a"),
e(yg, "trais", "tra??s"),
e(yg, "trele", "trel??"),
e(yg, "treno", "tren??"),
e(yg, "trico", "tric??"),
e(yg, "tripe", "trip??"),
e(yg, "tripo", "trip??"),
e(yg, "trisa", "tris??"),
e(yg, "trita", "trit??"),
e(yg, "triao", "tri??o"),
e(yg, "troca", "tro??a"),
e(yg, "troco", "tro??o"),
e(yg, "truca", "truc??"),
e(yg, "trupa", "trup??"),
e(yg, "truao", "tru??o"),
e(yg, "trois", "tr??is"),
e(yg, "tuaia", "tuai??"),
e(yg, "tucui", "tucu??"),
e(yg, "tucas", "tuc??s"),
e(yg, "tucao", "tuc??o"),
e(yg, "tufao", "tuf??o"),
e(yg, "tuius", "tui??s"),
e(yg, "tupas", "tup??s"),
e(yg, "tupes", "tup??s"),
e(yg, "turai", "tura??"),
e(yg, "turne", "turn??"),
e(yg, "tutea", "tute??"),
e(yg, "tutao", "tut??o"),
e(yg, "tuxas", "tux??s"),
e(yg, "tuira", "tu??ra"),
e(yg, "tuite", "tu??te"),
e(yg, "tuito", "tu??to"),
e(yg, "tabua", "t??bua"),
e(yg, "tacia", "t??cia"),
e(yg, "tafio", "t??fio"),
e(yg, "taler", "t??ler"),
e(yg, "talia", "t??lia"),
e(yg, "talio", "t??lio"),
e(yg, "talus", "t??lus"),
e(yg, "tasia", "t??sia"),
e(yg, "tasio", "t??sio"),
e(yg, "tatil", "t??til"),
e(yg, "tavoa", "t??voa"),
e(yg, "taxis", "t??xis"),
e(yg, "taxon", "t??xon"),
e(yg, "tamia", "t??mia"),
e(yg, "tamil", "t??mil"),
e(yg, "tamul", "t??mul"),
e(yg, "tedio", "t??dio"),
e(yg, "telia", "t??lia"),
e(yg, "telio", "t??lio"),
e(yg, "telos", "t??los"),
e(yg, "tesio", "t??sio"),
e(yg, "tesis", "t??sis"),
e(yg, "tetia", "t??tia"),
e(yg, "tetio", "t??tio"),
e(yg, "tetis", "t??tis"),
e(yg, "tetum", "t??tum"),
e(yg, "temio", "t??mio"),
e(yg, "tenea", "t??nea"),
e(yg, "tenia", "t??nia"),
e(yg, "tenio", "t??nio"),
e(yg, "tenis", "t??nis"),
e(yg, "tenue", "t??nue"),
e(yg, "tiade", "t??ade"),
e(yg, "tiaso", "t??aso"),
e(yg, "tibia", "t??bia"),
e(yg, "tibio", "t??bio"),
e(yg, "ticio", "t??cio"),
e(yg, "tidia", "t??dia"),
e(yg, "tidio", "t??dio"),
e(yg, "tifia", "t??fia"),
e(yg, "tifis", "t??fis"),
e(yg, "tilea", "t??lea"),
e(yg, "tilia", "t??lia"),
e(yg, "tilio", "t??lio"),
e(yg, "tiloa", "t??loa"),
e(yg, "timio", "t??mio"),
e(yg, "tinea", "t??nea"),
e(yg, "tiner", "t??ner"),
e(yg, "tirea", "t??rea"),
e(yg, "tirio", "t??rio"),
e(yg, "tiris", "t??ris"),
e(yg, "tocai", "t??cai"),
e(yg, "tocia", "t??cia"),
e(yg, "todea", "t??dea"),
e(yg, "todis", "t??dis"),
e(yg, "togua", "t??gua"),
e(yg, "tolia", "t??lia"),
e(yg, "topia", "t??pia"),
e(yg, "torax", "t??rax"),
e(yg, "toria", "t??ria"),
e(yg, "torio", "t??rio"),
e(yg, "toron", "t??ron"),
e(yg, "tozia", "t??zia"),
e(yg, "tomio", "t??mio"),
e(yg, "tomix", "t??mix"),
e(yg, "tonis", "t??nis"),
e(yg, "tonus", "t??nus"),
e(yg, "tuber", "t??ber"),
e(yg, "tujis", "t??jis"),
e(yg, "tulia", "t??lia"),
e(yg, "tulio", "t??lio"),
e(yg, "tunel", "t??nel"),
e(yg, "tunis", "t??nis"),
e(yg, "tutsi", "t??tsi"),
e(yg, "uabui", "uabu??"),
e(yg, "uacas", "uac??s"),
e(yg, "uafes", "uaf??s"),
e(yg, "uaica", "uaic??"),
e(yg, "uaima", "uaim??"),
e(yg, "uaita", "uait??"),
e(yg, "uaias", "uai??s"),
e(yg, "uaios", "uai??s"),
e(yg, "ualas", "ual??s"),
e(yg, "uambe", "uamb??"),
e(yg, "uamas", "uam??s"),
e(yg, "uamoi", "uam??i"),
e(yg, "uanha", "uanh??"),
e(yg, "uania", "uani??"),
e(yg, "uanas", "uan??s"),
e(yg, "uapas", "uap??s"),
e(yg, "uapes", "uap??s"),
e(yg, "uaria", "uari??"),
e(yg, "uaras", "uar??s"),
e(yg, "uaupe", "uaup??"),
e(yg, "uaura", "uaur??"),
e(yg, "uauas", "uau??s"),
e(yg, "uaucu", "uau??u"),
e(yg, "uaxua", "uaxu??"),
e(yg, "uacai", "ua??a??"),
e(yg, "uaiba", "ua??ba"),
e(yg, "ubata", "ubat??"),
e(yg, "ubele", "ubel??"),
e(yg, "ubera", "uber??"),
e(yg, "ubucu", "ubu??u"),
e(yg, "uchao", "uch??o"),
e(yg, "ucima", "ucim??"),
e(yg, "ucues", "ucu??s"),
e(yg, "ucuis", "ucu??s"),
e(yg, "ueras", "uer??s"),
e(yg, "ufuas", "ufu??s"),
e(yg, "uiape", "uiap??"),
e(yg, "uique", "uiqu??"),
e(yg, "uiras", "uir??s"),
e(yg, "ujara", "ujar??"),
e(yg, "ulema", "ulem??"),
e(yg, "uladi", "ul??di"),
e(yg, "umaua", "umau??"),
e(yg, "umboa", "umbo??"),
e(yg, "umbes", "umb??s"),
e(yg, "umoes", "um??es"),
e(yg, "undai", "unda??"),
e(yg, "ungas", "ung??s"),
e(yg, "unhao", "unh??o"),
e(yg, "unira", "unir??"),
e(yg, "uniao", "uni??o"),
e(yg, "unlos", "unl??s"),
e(yg, "untue", "untu??"),
e(yg, "uncas", "un??as"),
e(yg, "uncao", "un????o"),
e(yg, "upiao", "upi??o"),
e(yg, "urana", "uran??"),
e(yg, "uracu", "ura??u"),
e(yg, "uruba", "urub??"),
e(yg, "uruma", "urum??"),
e(yg, "urupa", "urup??"),
e(yg, "urupe", "urup??"),
e(yg, "usara", "usar??"),
e(yg, "ustao", "ust??o"),
e(yg, "uvaca", "uva??a"),
e(yg, "uvacu", "uva??u"),
e(yg, "uagua", "u??gua"),
e(yg, "uedis", "u??dis"),
e(yg, "ueuas", "u??uas"),
e(yg, "uiste", "u??ste"),
e(yg, "vacua", "vacu??"),
e(yg, "vacao", "vac??o"),
e(yg, "vadea", "vade??"),
e(yg, "vagea", "vage??"),
e(yg, "vagao", "vag??o"),
e(yg, "vaita", "vait??"),
e(yg, "vaixa", "vaix??"),
e(yg, "vaius", "vai??s"),
e(yg, "vajes", "vaj??s"),
e(yg, "valao", "val??o"),
e(yg, "vance", "vanc??"),
e(yg, "vapua", "vapu??"),
e(yg, "varea", "vare??"),
e(yg, "varao", "var??o"),
e(yg, "vassa", "vass??"),
e(yg, "vasao", "vas??o"),
e(yg, "vaura", "vaur??"),
e(yg, "vazao", "vaz??o"),
e(yg, "vecta", "vect??"),
e(yg, "venca", "ven??a"),
e(yg, "venco", "ven??o"),
e(yg, "verea", "vere??"),
e(yg, "verge", "verg??"),
e(yg, "veras", "ver??s"),
e(yg, "verao", "ver??o"),
e(yg, "verca", "ver??a"),
e(yg, "veros", "ver??s"),
e(yg, "vetao", "vet??o"),
e(yg, "videa", "vide??"),
e(yg, "vidao", "vid??o"),
e(yg, "vilia", "vili??"),
e(yg, "vilao", "vil??o"),
e(yg, "vinta", "vint??"),
e(yg, "viras", "vir??s"),
e(yg, "virao", "vir??o"),
e(yg, "viros", "vir??s"),
e(yg, "visca", "visc??"),
e(yg, "visga", "visg??"),
e(yg, "visao", "vis??o"),
e(yg, "vivio", "vivi??"),
e(yg, "viviu", "vivi??"),
e(yg, "vicai", "vi??ai"),
e(yg, "vicam", "vi??am"),
e(yg, "vicar", "vi??ar"),
e(yg, "vicas", "vi??as"),
e(yg, "vicor", "vi??or"),
e(yg, "vicou", "vi??ou"),
e(yg, "vioes", "vi??es"),
e(yg, "viuva", "vi??va"),
e(yg, "viuve", "vi??ve"),
e(yg, "viuvo", "vi??vo"),
e(yg, "vleme", "vlem??"),
e(yg, "voara", "voar??"),
e(yg, "voaco", "voa??o"),
e(yg, "voces", "voc??s"),
e(yg, "volca", "volc??"),
e(yg, "vonce", "vonc??"),
e(yg, "voras", "vor??s"),
e(yg, "vosea", "vose??"),
e(yg, "vouve", "vouv??"),
e(yg, "vovos", "vov??s"),
e(yg, "vozea", "voze??"),
e(yg, "vozao", "voz??o"),
e(yg, "vrija", "vrij??"),
e(yg, "vridi", "vr??di"),
e(yg, "vulta", "vult??"),
e(yg, "vunga", "vung??"),
e(yg, "vurma", "vurm??"),
e(yg, "vacea", "v??cea"),
e(yg, "vaceo", "v??ceo"),
e(yg, "vacuo", "v??cuo"),
e(yg, "vaeas", "v??eas"),
e(yg, "vagil", "v??gil"),
e(yg, "valea", "v??lea"),
e(yg, "valio", "v??lio"),
e(yg, "valis", "v??lis"),
e(yg, "varia", "v??ria"),
e(yg, "vario", "v??rio"),
e(yg, "vatio", "v??tio"),
e(yg, "vatua", "v??tua"),
e(yg, "velea", "v??lea"),
e(yg, "velia", "v??lia"),
e(yg, "velum", "v??lum"),
e(yg, "verio", "v??rio"),
e(yg, "venia", "v??nia"),
e(yg, "venus", "v??nus"),
e(yg, "vicia", "v??cia"),
e(yg, "vicio", "v??cio"),
e(yg, "vicoa", "v??coa"),
e(yg, "video", "v??deo"),
e(yg, "vidia", "v??dia"),
e(yg, "vidua", "v??dua"),
e(yg, "vieis", "v??eis"),
e(yg, "vigil", "v??gil"),
e(yg, "vimea", "v??mea"),
e(yg, "vinea", "v??nea"),
e(yg, "vineo", "v??neo"),
e(yg, "virea", "v??rea"),
e(yg, "vireo", "v??reo"),
e(yg, "virus", "v??rus"),
e(yg, "vitex", "v??tex"),
e(yg, "vitis", "v??tis"),
e(yg, "vitor", "v??tor"),
e(yg, "vobis", "v??bis"),
e(yg, "volei", "v??lei"),
e(yg, "vomer", "v??mer"),
e(yg, "xabao", "xab??o"),
e(yg, "xabeu", "xab??u"),
e(yg, "xajas", "xaj??s"),
e(yg, "xamba", "xamb??"),
e(yg, "xango", "xang??"),
e(yg, "xanta", "xant??"),
e(yg, "xaoro", "xaor??"),
e(yg, "xaras", "xar??s"),
e(yg, "xarem", "xar??m"),
e(yg, "xareu", "xar??u"),
e(yg, "xauas", "xau??s"),
e(yg, "xerem", "xer??m"),
e(yg, "xeres", "xer??s"),
e(yg, "xevas", "xev??s"),
e(yg, "xexes", "xex??s"),
e(yg, "xexeu", "xex??u"),
e(yg, "ximbe", "ximb??"),
e(yg, "ximao", "xim??o"),
e(yg, "xinto", "xint??"),
e(yg, "xiros", "xir??s"),
e(yg, "xixas", "xix??s"),
e(yg, "xicas", "xi??as"),
e(yg, "xocos", "xoc??s"),
e(yg, "xodos", "xod??s"),
e(yg, "xuate", "xuat??"),
e(yg, "xenon", "x??non"),
e(yg, "xenia", "x??nia"),
e(yg, "xenio", "x??nio"),
e(yg, "xifio", "x??fio"),
e(yg, "xilon", "x??lon"),
e(yg, "yogas", "y??gas"),
e(yg, "zacai", "zaca??"),
e(yg, "zagao", "zag??o"),
e(yg, "zambe", "zamb??"),
e(yg, "zarao", "zar??o"),
e(yg, "zares", "zar??s"),
e(yg, "zonea", "zone??"),
e(yg, "zorna", "zorn??"),
e(yg, "zorta", "zort??"),
e(yg, "zuela", "zuel??"),
e(yg, "zuira", "zuir??"),
e(yg, "zuruo", "zuru??"),
e(yg, "zuiam", "zu??am"),
e(yg, "zuias", "zu??as"),
e(yg, "zuida", "zu??da"),
e(yg, "zuido", "zu??do"),
e(yg, "zamia", "z??mia"),
e(yg, "zaibo", "z??ibo"),
e(yg, "zinia", "z??nia"),
e(yg, "ziper", "z??per"),
e(yg, "abeca", "??be??a"),
e(yg, "abaco", "??baco"),
e(yg, "abaro", "??baro"),
e(yg, "abato", "??bato"),
e(yg, "abavo", "??bavo"),
e(yg, "abias", "??bias"),
e(yg, "abies", "??bies"),
e(yg, "abiga", "??biga"),
e(yg, "abrus", "??brus"),
e(yg, "absis", "??bsis"),
e(yg, "absus", "??bsus"),
e(yg, "acade", "??cade"),
e(yg, "acano", "??cano"),
e(yg, "acare", "??care"),
e(yg, "acaro", "??caro"),
e(yg, "acave", "??cave"),
e(yg, "acavo", "??cavo"),
e(yg, "acero", "??cero"),
e(yg, "acias", "??cias"),
e(yg, "acido", "??cido"),
e(yg, "acies", "??cies"),
e(yg, "acina", "??cina"),
e(yg, "acino", "??cino"),
e(yg, "acios", "??cios"),
e(yg, "acipe", "??cipe"),
e(yg, "aclis", "??clis"),
e(yg, "acnea", "??cnea"),
e(yg, "acnua", "??cnua"),
e(yg, "acome", "??come"),
e(yg, "acope", "??cope"),
e(yg, "acopo", "??copo"),
e(yg, "acore", "??core"),
e(yg, "acoro", "??coro"),
e(yg, "acron", "??cron"),
e(yg, "actia", "??ctia"),
e(yg, "actio", "??ctio"),
e(yg, "adina", "??dina"),
e(yg, "adine", "??dine"),
e(yg, "adino", "??dino"),
e(yg, "adipe", "??dipe"),
e(yg, "adipo", "??dipo"),
e(yg, "adito", "??dito"),
e(yg, "afaca", "??faca"),
e(yg, "afios", "??fios"),
e(yg, "afodo", "??fodo"),
e(yg, "afona", "??fona"),
e(yg, "afono", "??fono"),
e(yg, "agamo", "??gamo"),
e(yg, "agapa", "??gapa"),
e(yg, "agape", "??gape"),
e(yg, "agaro", "??garo"),
e(yg, "agata", "??gata"),
e(yg, "agate", "??gate"),
e(yg, "ageis", "??geis"),
e(yg, "agena", "??gena"),
e(yg, "ageno", "??geno"),
e(yg, "agida", "??gida"),
e(yg, "agino", "??gino"),
e(yg, "agios", "??gios"),
e(yg, "aglia", "??glia"),
e(yg, "agmen", "??gmen"),
e(yg, "agnis", "??gnis"),
e(yg, "agnus", "??gnus"),
e(yg, "agolo", "??golo"),
e(yg, "agona", "??gona"),
e(yg, "agono", "??gono"),
e(yg, "agria", "??gria"),
e(yg, "agrio", "??grio"),
e(yg, "aguam", "??guam"),
e(yg, "aguas", "??guas"),
e(yg, "aguem", "??guem"),
e(yg, "agues", "??gues"),
e(yg, "aguia", "??guia"),
e(yg, "alacr", "??lacr"),
e(yg, "alalo", "??lalo"),
e(yg, "alamo", "??lamo"),
e(yg, "album", "??lbum"),
e(yg, "alcea", "??lcea"),
e(yg, "alcis", "??lcis"),
e(yg, "aleas", "??leas"),
e(yg, "alemo", "??lemo"),
e(yg, "aleos", "??leos"),
e(yg, "alhia", "??lhia"),
e(yg, "aliba", "??liba"),
e(yg, "alibi", "??libi"),
e(yg, "alica", "??lica"),
e(yg, "alico", "??lico"),
e(yg, "alife", "??life"),
e(yg, "alime", "??lime"),
e(yg, "alios", "??lios"),
e(yg, "alita", "??lita"),
e(yg, "alofo", "??lofo"),
e(yg, "alogo", "??logo"),
e(yg, "alpea", "??lpea"),
e(yg, "alqua", "??lqua"),
e(yg, "alula", "??lula"),
e(yg, "alveo", "??lveo"),
e(yg, "apage", "??page"),
e(yg, "apeta", "??peta"),
e(yg, "apeto", "??peto"),
e(yg, "apice", "??pice"),
e(yg, "apida", "??pida"),
e(yg, "apios", "??pios"),
e(yg, "apira", "??pira"),
e(yg, "apiro", "??piro"),
e(yg, "apoca", "??poca"),
e(yg, "apode", "??pode"),
e(yg, "apodo", "??podo"),
e(yg, "apona", "??pona"),
e(yg, "apone", "??pone"),
e(yg, "apono", "??pono"),
e(yg, "aporo", "??poro"),
e(yg, "apoto", "??poto"),
e(yg, "apula", "??pula"),
e(yg, "apulo", "??pulo"),
e(yg, "aquea", "??quea"),
e(yg, "aqueo", "??queo"),
e(yg, "arabe", "??rabe"),
e(yg, "arabo", "??rabo"),
e(yg, "arbia", "??rbia"),
e(yg, "arbio", "??rbio"),
e(yg, "arcio", "??rcio"),
e(yg, "ardea", "??rdea"),
e(yg, "ardua", "??rdua"),
e(yg, "arduo", "??rduo"),
e(yg, "areas", "??reas"),
e(yg, "argio", "??rgio"),
e(yg, "argon", "??rgon"),
e(yg, "arias", "??rias"),
e(yg, "arico", "??rico"),
e(yg, "arida", "??rida"),
e(yg, "arido", "??rido"),
e(yg, "aries", "??ries"),
e(yg, "arsis", "??rsis"),
e(yg, "arula", "??rula"),
e(yg, "aruns", "??runs"),
e(yg, "asaro", "??saro"),
e(yg, "ascia", "??scia"),
e(yg, "ascio", "??scio"),
e(yg, "ascon", "??scon"),
e(yg, "ascua", "??scua"),
e(yg, "asias", "??sias"),
e(yg, "asios", "??sios"),
e(yg, "asoas", "??soas"),
e(yg, "asoos", "??soos"),
e(yg, "aspis", "??spis"),
e(yg, "aster", "??ster"),
e(yg, "astur", "??stur"),
e(yg, "atavo", "??tavo"),
e(yg, "atele", "??tele"),
e(yg, "atico", "??tico"),
e(yg, "atila", "??tila"),
e(yg, "atima", "??tima"),
e(yg, "atimo", "??timo"),
e(yg, "atipo", "??tipo"),
e(yg, "atomo", "??tomo"),
e(yg, "atona", "??tona"),
e(yg, "atono", "??tono"),
e(yg, "atrio", "??trio"),
e(yg, "audio", "??udio"),
e(yg, "aulax", "??ulax"),
e(yg, "aurea", "??urea"),
e(yg, "aureo", "??ureo"),
e(yg, "aveis", "??veis"),
e(yg, "avida", "??vida"),
e(yg, "avido", "??vido"),
e(yg, "avila", "??vila"),
e(yg, "axeis", "??xeis"),
e(yg, "axica", "??xica"),
e(yg, "axico", "??xico"),
e(yg, "axilo", "??xilo"),
e(yg, "axona", "??xona"),
e(yg, "axone", "??xone"),
e(yg, "azeas", "??zeas"),
e(yg, "azeos", "??zeos"),
e(yg, "aziga", "??ziga"),
e(yg, "azigo", "??zigo"),
e(yg, "azima", "??zima"),
e(yg, "azimo", "??zimo"),
e(yg, "amago", "??mago"),
e(yg, "ambar", "??mbar"),
e(yg, "amios", "??mios"),
e(yg, "amnio", "??mnio"),
e(yg, "angio", "??ngio"),
e(yg, "animo", "??nimo"),
e(yg, "anion", "??nion"),
e(yg, "anodo", "??nodo"),
e(yg, "ansia", "??nsia"),
e(yg, "anulo", "??nulo"),
e(yg, "anuos", "??nuos"),
e(yg, "ebano", "??bano"),
e(yg, "ebeno", "??beno"),
e(yg, "ebias", "??bias"),
e(yg, "eblis", "??blis"),
e(yg, "ebria", "??bria"),
e(yg, "ebrio", "??brio"),
e(yg, "ebulo", "??bulo"),
e(yg, "ecana", "??cana"),
e(yg, "ecano", "??cano"),
e(yg, "ecica", "??cica"),
e(yg, "ecico", "??cico"),
e(yg, "ecope", "??cope"),
e(yg, "ecran", "??cran"),
e(yg, "ecula", "??cula"),
e(yg, "eculo", "??culo"),
e(yg, "edalo", "??dalo"),
e(yg, "edias", "??dias"),
e(yg, "edica", "??dica"),
e(yg, "edico", "??dico"),
e(yg, "edipo", "??dipo"),
e(yg, "eduos", "??duos"),
e(yg, "efeta", "??feta"),
e(yg, "efira", "??fira"),
e(yg, "efiro", "??firo"),
e(yg, "efode", "??fode"),
e(yg, "efodo", "??fodo"),
e(yg, "eforo", "??foro"),
e(yg, "egide", "??gide"),
e(yg, "egrio", "??grio"),
e(yg, "eguas", "??guas"),
e(yg, "eguem", "??guem"),
e(yg, "elafo", "??lafo"),
e(yg, "elate", "??late"),
e(yg, "elica", "??lica"),
e(yg, "elico", "??lico"),
e(yg, "elimo", "??limo"),
e(yg, "eneas", "??neas"),
e(yg, "eneos", "??neos"),
e(yg, "enula", "??nula"),
e(yg, "epica", "??pica"),
e(yg, "epico", "??pico"),
e(yg, "epoca", "??poca"),
e(yg, "epula", "??pula"),
e(yg, "epura", "??pura"),
e(yg, "equio", "??quio"),
e(yg, "equis", "??quis"),
e(yg, "equos", "??quos"),
e(yg, "equus", "??quus"),
e(yg, "erana", "??rana"),
e(yg, "erano", "??rano"),
e(yg, "erbio", "??rbio"),
e(yg, "ereas", "??reas"),
e(yg, "erebo", "??rebo"),
e(yg, "ereis", "??reis"),
e(yg, "ereos", "??reos"),
e(yg, "ergio", "??rgio"),
e(yg, "erias", "??rias"),
e(yg, "erina", "??rina"),
e(yg, "erion", "??rion"),
e(yg, "esima", "??sima"),
e(yg, "esimo", "??simo"),
e(yg, "esipo", "??sipo"),
e(yg, "esoce", "??soce"),
e(yg, "essuo", "??ssuo"),
e(yg, "ester", "??ster"),
e(yg, "esula", "??sula"),
e(yg, "etego", "??tego"),
e(yg, "etica", "??tica"),
e(yg, "etico", "??tico"),
e(yg, "etigo", "??tigo"),
e(yg, "etimo", "??timo"),
e(yg, "evana", "??vana"),
e(yg, "evano", "??vano"),
e(yg, "eider", "??ider"),
e(yg, "emero", "??mero"),
e(yg, "emese", "??mese"),
e(yg, "emica", "??mica"),
e(yg, "emico", "??mico"),
e(yg, "emida", "??mida"),
e(yg, "emide", "??mide"),
e(yg, "emulo", "??mulo"),
e(yg, "enica", "??nica"),
e(yg, "enico", "??nico"),
e(yg, "ensis", "??nsis"),
e(yg, "euria", "??uria"),
e(yg, "exaco", "??xaco"),
e(yg, "exito", "??xito"),
e(yg, "exodo", "??xodo"),
e(yg, "exuis", "??xuis"),
e(yg, "exule", "??xule"),
e(yg, "iamos", "??amos"),
e(yg, "ibice", "??bice"),
e(yg, "icaro", "??caro"),
e(yg, "icios", "??cios"),
e(yg, "icone", "??cone"),
e(yg, "icono", "??cono"),
e(yg, "icore", "??core"),
e(yg, "ictis", "??ctis"),
e(yg, "ictus", "??ctus"),
e(yg, "idias", "??dias"),
e(yg, "idola", "??dola"),
e(yg, "idolo", "??dolo"),
e(yg, "ignea", "??gnea"),
e(yg, "igneo", "??gneo"),
e(yg, "iguem", "??guem"),
e(yg, "igues", "??gues"),
e(yg, "ileon", "??leon"),
e(yg, "ileos", "??leos"),
e(yg, "ileus", "??leus"),
e(yg, "ilias", "??lias"),
e(yg, "ilice", "??lice"),
e(yg, "ilion", "??lion"),
e(yg, "ilios", "??lios"),
e(yg, "ilium", "??lium"),
e(yg, "impar", "??mpar"),
e(yg, "impia", "??mpia"),
e(yg, "impio", "??mpio"),
e(yg, "inaco", "??naco"),
e(yg, "index", "??ndex"),
e(yg, "india", "??ndia"),
e(yg, "indio", "??ndio"),
e(yg, "indri", "??ndri"),
e(yg, "indua", "??ndua"),
e(yg, "ingea", "??ngea"),
e(yg, "ingua", "??ngua"),
e(yg, "inion", "??nion"),
e(yg, "inios", "??nios"),
e(yg, "inope", "??nope"),
e(yg, "insua", "??nsua"),
e(yg, "inuba", "??nuba"),
e(yg, "inubo", "??nubo"),
e(yg, "inula", "??nula"),
e(yg, "invia", "??nvia"),
e(yg, "invio", "??nvio"),
e(yg, "ipida", "??pida"),
e(yg, "irios", "??rios"),
e(yg, "irpex", "??rpex"),
e(yg, "isate", "??sate"),
e(yg, "isops", "??sops"),
e(yg, "itaco", "??taco"),
e(yg, "italo", "??talo"),
e(yg, "itame", "??tame"),
e(yg, "itamo", "??tamo"),
e(yg, "iteas", "??teas"),
e(yg, "itria", "??tria"),
e(yg, "itrio", "??trio"),
e(yg, "ixalo", "??xalo"),
e(yg, "ixias", "??xias"),
e(yg, "obelo", "??belo"),
e(yg, "obice", "??bice"),
e(yg, "obito", "??bito"),
e(yg, "obolo", "??bolo"),
e(yg, "obulo", "??bulo"),
e(yg, "obvio", "??bvio"),
e(yg, "ocimo", "??cimo"),
e(yg, "ocios", "??cios"),
e(yg, "ocrea", "??crea"),
e(yg, "oculo", "??culo"),
e(yg, "odios", "??dios"),
e(yg, "ofrio", "??frio"),
e(yg, "ofris", "??fris"),
e(yg, "oleos", "??leos"),
e(yg, "oleum", "??leum"),
e(yg, "omnia", "??mnia"),
e(yg, "opalo", "??palo"),
e(yg, "opera", "??pera"),
e(yg, "opido", "??pido"),
e(yg, "opios", "??pios"),
e(yg, "orfia", "??rfia"),
e(yg, "orfao", "??rf??o"),
e(yg, "orfas", "??rf??s"),
e(yg, "orgio", "??rgio"),
e(yg, "orgao", "??rg??o"),
e(yg, "orobo", "??robo"),
e(yg, "oscar", "??scar"),
e(yg, "osido", "??sido"),
e(yg, "osmio", "??smio"),
e(yg, "ossea", "??ssea"),
e(yg, "osseo", "??sseo"),
e(yg, "ostio", "??stio"),
e(yg, "otica", "??tica"),
e(yg, "otico", "??tico"),
e(yg, "otima", "??tima"),
e(yg, "otimo", "??timo"),
e(yg, "ovalo", "??valo"),
e(yg, "ovana", "??vana"),
e(yg, "ovano", "??vano"),
e(yg, "oveas", "??veas"),
e(yg, "oveos", "??veos"),
e(yg, "ovnis", "??vnis"),
e(yg, "ovulo", "??vulo"),
e(yg, "oxido", "??xido"),
e(yg, "omega", "??mega"),
e(yg, "ubere", "??bere"),
e(yg, "ubero", "??bero"),
e(yg, "ubias", "??bias"),
e(yg, "ubios", "??bios"),
e(yg, "umera", "??mera"),
e(yg, "umero", "??mero"),
e(yg, "umida", "??mida"),
e(yg, "umido", "??mido"),
e(yg, "uncia", "??ncia"),
e(yg, "uncus", "??ncus"),
e(yg, "ungue", "??ngue"),
e(yg, "unica", "??nica"),
e(yg, "unico", "??nico"),
e(yg, "unsia", "??nsia"),
e(yg, "uraco", "??raco"),
e(yg, "urase", "??rase"),
e(yg, "urcea", "??rcea"),
e(yg, "urceo", "??rceo"),
e(yg, "urica", "??rica"),
e(yg, "urico", "??rico"),
e(yg, "uropo", "??ropo"),
e(yg, "usias", "??sias"),
e(yg, "usnea", "??snea"),
e(yg, "ussua", "??ssua"),
e(yg, "ustia", "??stia"),
e(yg, "uteis", "??teis"),
e(yg, "utero", "??tero"),
e(yg, "uveas", "??veas"),
e(yg, "uvica", "??vica"),
e(yg, "uvico", "??vico"),
e(yg, "uvida", "??vida"),
e(yg, "uvido", "??vido"),
e(yg, "uvula", "??vula"),
yg), Sg = ["lugar", "vinda", "crime", "lenda", "??tomo", "lares", "adega", "??geis", "abada", "retro", "feixe", "bingo", "carga", "tubos", "cisne", "bater", "c??lio", "reles", "sonar", "t??lio", "capuz", "feira", "caspa", "preto", "t??til", "anais", "crise", "l??pis", "tenor", "caf??s", "nevar", "repor", "dupla", "pilar", "mexer", "fluir", "po??os", "lente", "fauna", "trama", "grama", "regar", "pirar", "lazer", "reais", "baque", "cesto", "pavio", "vag??o", "certa", "??ureo", "caros", "mares", "ossos", "obras", "celta", "po????o", "bruxa", "vivos", "feios", "usada", "vasos", "s??rie", "brisa", "arcar", "bossa", "meigo", "viral", "forte", "malte", "bolso", "hinos", "tinto", "corja", "etnia", "??rf??o", "por??m", "??rdua", "ru??na", "coral", "perda", "algas", "pelos", "andar", "fumar", "op????o", "longa", "??mido", "vozes", "cabra", "s??mio", "vasta", "totem", "prole", "burra", "capaz", "gente", "renal", "menor", "leito", "potes", "amplo", "libra", "balas", "meias", "bolha", "comer", "v??deo", "lenta", "se????o", "rosca", "daqui", "falso", "aliar", "pagam", "denso", "danos", "feroz", "??reas", "hindu", "selos", "p??len", "s??dio", "elite", "nossa", "merc??", "lenha", "focar", "fixar", "tel??o", "valor", "f??mea", "??vulo", "??tico", "ondas", "novos", "durar", "feias", "a??rea", "vinte", "magna", "medos", "al??ar", "altos", "pires", "blusa", "babar", "justo", "rente", "ponte", "orgia", "jap??o", "horta", "barba", "alvos", "barco", "sacos", "pavor", "seiva", "geral", "tipos", "axila", "atlas", "tanga", "joias", "miolo", "ambas", "secos", "areia", "lombo", "legal", "hotel", "verbo", "piano", "grego", "ro??ar", "lomba", "chal??", "??cido", "circo", "canal", "pombo", "f??rum", "punho", "sopas", "c??lon", "reter", "perua", "irm??s", "mambo", "nicho", "ca????o", "congo", "tosar", "cenas", "bruto", "menos", "estes", "horas", "ponto", "ameno", "parma", "afins", "gal??s", "dotar", "fibra", "bunda", "frade", "nozes", "dieta", "poema", "lento", "tren??", "fosso", "titia", "les??o", "su??no", "fonte", "dizer", "v??cio", "pinos", "v??rus", "pedra", "lebre", "ber??o", "praxe", "d??bil", "quase", "visar", "pecar", "fraca", "exato", "densa", "bicos", "tropa", "podre", "ouvir", "setas", "fluxo", "penta", "farda", "malta", "frota", "??tica", "panda", "sogro", "turco", "tenso", "tocar", "??timo", "prata", "topar", "treta", "cacau", "pardo", "gesso", "focos", "macio", "bruta", "mista", "carma", "cosmo", "loira", "chuva", "atroz", "carro", "bolos", "vis??o", "atual", "untar", "ci??me", "pesar", "laudo", "porre", "banir", "abril", "ideia", "fl??or", "vagar", "uni??o", "artes", "criar", "casar", "morar", "gerar", "advir", "t??nue", "modos", "secar", "ninho", "casco", "jeito", "sagaz", "raiva", "magos", "medir", "monge", "fossa", "lorde", "claro", "aulas", "sacro", "limbo", "gorro", "trigo", "litro", "nulos", "morno", "furor", "modas", "haver", "??ssea", "seios", "olhar", "sen??o", "??nica", "cedro", "lojas", "pagar", "musgo", "armar", "agudo", "trena", "vanda", "cetim", "almas", "pampa", "casca", "ampla", "faixa", "casal", "ainda", "ginga", "bambu", "idoso", "mapas", "zonas", "f??til", "pausa", "pudim", "fog??o", "sabi??", "termo", "n??vel", "luvas", "lavar", "nomes", "v??cuo", "russo", "mania", "bazar", "idosa", "birra", "damas", "terno", "??guia", "nariz", "ricos", "valsa", "dosar", "tempo", "trevo", "t??xis", "pesco", "anzol", "sexta", "b??nus", "jogar", "voc??s", "fator", "papel", "a????es", "cavar", "co??ar", "pedir", "ricas", "palco", "bolsa", "fruta", "sueco", "ref??m", "belas", "lados", "mam??e", "rever", "tarja", "praga", "cisto", "nisso", "t??dio", "parda", "morna", "germe", "nasal", "irm??o", "rugir", "busto", "an??is", "moela", "lagoa", "telha", "loiro", "signo", "genes", "calda", "diodo", "tetra", "pux??o", "astro", "m??goa", "tumba", "??pera", "ganso", "trair", "v??ria", "pomba", "sismo", "pisar", "costa", "sadia", "clone", "larva", "cupim", "juros", "foice", "boato", "moura", "finas", "prosa", "acol??", "bravo", "peixe", "nen??m", "tensa", "bar??o", "ta??as", "gelar", "tosco", "tuf??o", "naves", "lixar", "colar", "pista", "trens", "corpo", "avi??o", "??rg??o", "vetar", "t??rax", "canoa", "moral", "bacia", "treco", "mudar", "cento", "tribo", "falar", "unida", "anual", "??pica", "grupo", "oxal??", "catar", "carpa", "gatas", "ter??a", "grana", "prato", "ontem", "minha", "certo", "mel??o", "algoz", "poder", "times", "outra", "gar??a", "louco", "ninja", "sogra", "grato", "chapa", "frias", "fatos", "adiar", "t??bua", "rotas", "pular", "s??t??o", "pagos", "fungo", "relva", "gueto", "estar", "fobia", "bruxo", "gesto", "lil??s", "picar", "pra??a", "perto", "n??voa", "surdo", "vetor", "seara", "manh??", "pre??o", "polpa", "chato", "vazar", "farsa", "sabor", "gosma", "s??sia", "parar", "crepe", "licor", "gatos", "irado", "sigla", "canil", "??pice", "feudo", "crase", "manto", "mosca", "filho", "cesta", "pilha", "corda", "matar", "adeus", "favor", "falsa", "??tero", "polar", "fara??", "??dolo", "sigma", "deusa", "mimar", "g??meo", "posse", "aluna", "??lbum", "lindo", "adaga", "humor", "setor", "balde", "diabo", "roupa", "depor", "acaso", "rolos", "ter??o", "focal", "gra??a", "ritos", "??mago", "na????o", "feita", "honra", "porca", "cervo", "todos", "penal", "banal", "canja", "duros", "ruiva", "ousar", "atuar", "??bvio", "p??tio", "nobel", "cloro", "telas", "cofre", "touca", "f??mur", "len??o", "batom", "risos", "??sseo", "rumos", "rolha", "caras", "tecer", "negro", "girar", "bucha", "dunas", "cruel", "??teis", "dorso", "longo", "julho", "tinta", "torto", "perna", "verba", "sushi", "novas", "cegos", "cinta", "polir", "mover", "ambos", "lapso", "fugaz", "notar", "letal", "oeste", "plena", "ditos", "hiena", "galho", "cujos", "museu", "tutor", "pulga", "odiar", "??poca", "brasa", "visor", "surda", "nisto", "rezar", "domar", "surfe", "tanto", "turma", "coisa", "grega", "m??vel", "votar", "hiato", "altar", "jogos", "calor", "fetal", "fotos", "frios", "netos", "basco", "dogma", "ligar", "??mega", "nunca", "f??cil", "??xito", "barca", "sinal", "autos", "mitos", "bando", "amido", "bomba", "truco", "parvo", "motos", "gozar", "ursos", "tosca", "gemer", "dardo", "zerar", "palma", "zinco", "meios", "pegar", "altas", "leque", "matos", "virar", "inv??s", "polos", "treze", "fugir", "milho", "cinza", "mansa", "lince", "malas", "trupe", "cacho", "vulgo", "globo", "cetro", "??mbar", "chata", "pouca", "fiapo", "calma", "la??os", "lobos", "garra", "d??lar", "golpe", "safra", "tecno", "bicho", "erros", "coxas", "clave", "milha", "boate", "calar", "voraz", "ju??za", "ralar", "re??so", "errar", "copas", "manta", "ra????o", "sarro", "bioma", "opala", "judeu", "magro", "amora", "cupom", "toada", "vilas", "lo????o", "dados", "super", "bocal", "t??nis", "quota", "vital", "d??cil", "dueto", "couro", "selim", "??ndia", "s??ria", "??rduo", "culta", "euros", "doces", "selva", "olhos", "??udio", "linda", "pobre", "casos", "p??nei", "antes", "nobre", "li????o", "trip??", "pomar", "camas", "??mpio", "santo", "g??vea", "mesas", "tripa", "gordo", "trapo", "terra", "ecoar", "ninfa", "r??mel", "m??dio", "tes??o", "sanar", "levar", "golfe", "usual", "moita", "lidos", "frear", "g??nio", "vezes", "ardor", "folia", "bloco", "laico", "dedos", "metal", "marte", "cargo", "clima", "p??dio", "goela", "fruto", "sarau", "cerne", "grata", "rolar", "arder", "ceder", "rombo", "le??es", "persa", "rolim", "bacon", "bra??o", "harpa", "belos", "gases", "parir", "ponta", "ferir", "anjos", "leite", "senso", "exame", "nadar", "nuvem", "sab??o", "viril", "cheia", "mesma", "??xodo", "toldo", "meros", "ratos", "ordem", "farpa", "truta", "m??dia", "tocha", "verde", "servo", "d??zia", "sacar", "v??lei", "alado", "povos", "raras", "parco", "lou??a", "pisos", "bamba", "lidar", "furos", "gripe", "lagos", "graxa", "outro", "caqui", "campo", "??rabe", "c??pia", "menta", "males", "fixos", "optar", "haras", "igual", "arena", "donos", "carta", "redor", "banda", "pedal", "bot??o", "cacos", "tarso", "??tima", "sacra", "m??ope", "greve", "atr??s", "caldo", "ramos", "assim", "avel??", "dubl??", "maior", "feras", "clara", "jurar", "ciclo", "corar", "tonta", "palha", "meter", "ju??zo", "casta", "duque", "fuzu??", "raiar", "genro", "devir", "praia", "fac??o", "rev??s", "micro", "velha", "touro", "mo??da", "reler", "arroz", "votos", "bal??o", "m??tua", "trono", "negar", "bares", "cabos", "impor", "calvo", "bebia", "zelar", "her??i", "angra", "vinho", "vogal", "graus", "drama", "r??dio", "pir??o", "breve", "agora", "presa", "lerdo", "brega", "pizza", "vacas", "mesmo", "fraco", "valer", "bucal", "ma????s", "sujar", "padre", "teias", "dente", "tric??", "citar", "bulbo", "baita", "subir", "pinho", "??nimo", "prece", "fraga", "jarra", "fatal", "aguda", "xampu", "cueca", "pneus", "missa", "m??fia", "linha", "supor", "fiada", "furar", "podar", "turno", "vulto", "t??nel", "sanha", "poeta", "lim??o", "rampa", "vigor", "??nsia", "temor", "raz??o", "amada", "obter", "latas", "fisco", "tapar", "sorte", "gruta", "teses", "plebe", "corno", "l??bia", "beato", "motor", "panos", "curar", "viver", "puxar", "ficar", "vinil", "enfim", "flora", "aroma", "calmo", "fofas", "torta", "prazo", "dever", "vapor", "mirim", "rob??s", "finos", "v??nus", "corvo", "??nico", "arame", "guiar", "usina", "s??tio", "vazia", "vasto", "mural", "nudez", "pleno", "obeso", "tchau", "eixos", "muito", "molas", "final", "falir", "ervas", "cubos", "retas", "local", "fogos", "banjo", "fedor", "urnas", "jaula", "gerir", "linho", "geada", "l??tus", "l??rio", "f??ria", "ostra", "??vido", "acesa", "salas", "bucho", "tango", "ca??da", "golfo", "aluno", "dores", "??tico", "salsa", "??ries", "remar", "mogno", "polvo", "verme", "miojo", "aonde", "rosto", "ideal", "pompa", "tomar", "duplo", "quina", "urubu", "h??bil", "expor", "algum", "??tica", "r??gua", "velho", "redes", "frevo", "porco", "pe??es", "calva", "atriz", "lisos", "lutar", "rural", "lotar", "imune", "??pico", "??mida", "??mpar", "muita", "doido", "jovem", "coeso", "mirar", "musas", "rival", "salmo", "rumor", "aspas", "beber", "nervo", "civil", "mi??do", "delta", "rimar", "bispo", "abade", "culto", "vil??o", "vidas", "gotas", "letra", "latim", "credo", "ultra", "ca??ar", "bon??s", "gamb??", "sutil", "pudor", "pesos", "ent??o", "ditar", "couve", "m??mia", "metro", "esqui", "navio", "extra", "justa", "macia", "bocas", "l??bio", "moeda", "placa", "no????o", "fu??ar", "cheio", "rosas", "achar", "magia", "arcos", "jejum", "socar", "divas", "caber", "aveia", "rasto", "varal", "manga", "santa", "beata", "suti??", "todas", "fus??o", "pinta", "guria", "p??reo", "chave", "sutis", "cauda", "natal", "solar", "carne", "clero", "m??dia", "saber", "piada", "senha", "caixa", "deter", "dique", "serva", "l??der", "abrir", "raios", "naipe", "lat??o", "chefe", "vespa", "noite", "etapa", "raros", "clipe", "pluma", "talco", "rouca", "civis", "folha", "??xido", "cinto", "macro", "tonto", "boina", "gaita", "suave", "m??tuo", "meiga", "sueca", "??ndio", "ritmo", "ombro", "texto", "muros", "macho", "a??reo", "conde", "sarda", "misto", "vaz??o", "rubro", "funil", "lousa", "qui????", "rigor", "sadio", "disso", "farol", "sa??da", "longe", "radar", "gorda", "an??es", "a??ude", "festa", "horto", "sujos", "??ndex", "fardo", "dicas", "picos", "pente", "junco", "sal??o", "sarna", "somar", "sexto", "patas", "motel", "caule", "tirar", "abono", "loura", "selar", "seita", "fases", "autor", "ducha", "??leos", "jegue", "besta", "buf??o", "total", "prado", "f??ria", "temer", "sauna", "sucos", "clube", "h??fen", "cinco", "sunga", "fosco", "palmo", "pouco", "g??ria", "idade", "??cone", "doida", "comum", "rocha", "censo", "c??rie", "punir", "massa", "burro", "frase", "major", "magra", "s??cio", "copos", "mamar", "preta", "ali??s", "balsa", "farra", "fosca", "ruivo", "infra", "facas", "ileso", "naval", "filha", "morta", "capim", "trufa", "areal", "tiros", "reger", "grade", "poros", "jarro", "posar", "desde", "fazer", "brava", "leigo", "ninar", "manso", "exata", "su??te", "torpe", "vosso", "pav??o", "mundo", "quais", "veias", "forno", "t??bia", "junho", "haste", "veloz", "feliz", "meses", "homem", "botar", "rodar", "ded??o", "norma", "unhas", "peste", "??scar", "s??bio", "lunar", "sarar", "norte", "opaco", "acima", "febre", "bonde", "murro", "o??sis", "z??per", "brejo", "assar", "sumir", "vocal", "rapaz", "vazio", "prumo", "gal??o", "zebra", "tigre", "??rido", "s??rio"], kg = u(Sg);
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
                                        right: "????",
                                        place: "????",
                                        wrong: "???"
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
  , ox = ["Genial", "Fant??stico", "Extraordin??rio", "Fenomenal", "Impressionante", "Ufa!"];
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
                    return Wf("s?? palavras com 5 letras"),
                    Bf(Cf(), "0.75s ease-in-out rownope"),
                    a.abrupt("return");
                case 8:
                    if (qg.has(o) || void 0 !== Eg[o]) {
                        a.next = 13;
                        break
                    }
                    return Ig.invalids.push(o),
                    Wf("essa palavra n??o ?? v??lida"),
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
