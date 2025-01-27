!(function (e) {
    var t = {};
    function r(n) {
        if (t[n]) return t[n].exports;
        var s = (t[n] = { i: n, l: !1, exports: {} });
        return e[n].call(s.exports, s, s.exports, r), (s.l = !0), s.exports;
    }
    (r.m = e),
        (r.c = t),
        (r.d = function (e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
        }),
        (r.r = function (e) {
            "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
                Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (r.t = function (e, t) {
            if ((1 & t && (e = r(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (
                (r.r(n),
                    Object.defineProperty(n, "default", { enumerable: !0, value: e }),
                    2 & t && "string" != typeof e)
            )
                for (var s in e)
                    r.d(
                        n,
                        s,
                        function (t) {
                            return e[t];
                        }.bind(null, s)
                    );
            return n;
        }),
        (r.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                        return e.default;
                    }
                    : function () {
                        return e;
                    };
            return r.d(t, "a", t), t;
        }),
        (r.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (r.p = "/_compiled/"),
        r((r.s = 422));
})({
    422: function (e, t, r) {
        e.exports = r(423);
    },
    423: function (e, t, r) {
        var n;
        /*! picturefill - v3.0.2 - 2016-02-12
         * https://scottjehl.github.io/picturefill/
         * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
         */
        /*! Gecko-Picture - v1.0
         * https://github.com/scottjehl/picturefill/tree/3.0/src/plugins/gecko-picture
         * Firefox's early picture implementation (prior to FF41) is static and does
         * not react to viewport changes. This tiny module fixes this.
         */
        /*! picturefill - v3.0.2 - 2016-02-12
         * https://scottjehl.github.io/picturefill/
         * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
         */
        /*! Gecko-Picture - v1.0
         * https://github.com/scottjehl/picturefill/tree/3.0/src/plugins/gecko-picture
         * Firefox's early picture implementation (prior to FF41) is static and does
         * not react to viewport changes. This tiny module fixes this.
         */
        !(function (e) {
            var t,
                r,
                n,
                s,
                i,
                c,
                a,
                u = navigator.userAgent;
            e.HTMLPictureElement &&
                /ecko/.test(u) &&
                u.match(/rv\:(\d+)/) &&
                RegExp.$1 < 45 &&
                addEventListener(
                    "resize",
                    ((r = document.createElement("source")),
                        (n = function (e) {
                            var t,
                                n,
                                s = e.parentNode;
                            "PICTURE" === s.nodeName.toUpperCase()
                                ? ((t = r.cloneNode()),
                                    s.insertBefore(t, s.firstElementChild),
                                    setTimeout(function () {
                                        s.removeChild(t);
                                    }))
                                : (!e._pfLastSize || e.offsetWidth > e._pfLastSize) &&
                                ((e._pfLastSize = e.offsetWidth),
                                    (n = e.sizes),
                                    (e.sizes += ",100vw"),
                                    setTimeout(function () {
                                        e.sizes = n;
                                    }));
                        }),
                        (s = function () {
                            var e,
                                t = document.querySelectorAll(
                                    "picture > img, img[srcset][sizes]"
                                );
                            for (e = 0; e < t.length; e++) n(t[e]);
                        }),
                        (i = function () {
                            clearTimeout(t), (t = setTimeout(s, 99));
                        }),
                        (c = e.matchMedia && matchMedia("(orientation: landscape)")),
                        (a = function () {
                            i(), c && c.addListener && c.addListener(i);
                        }),
                        (r.srcset =
                            "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),
                        /^[c|i]|d$/.test(document.readyState || "")
                            ? a()
                            : document.addEventListener("DOMContentLoaded", a),
                        i)
                );
        })(window),
            /*! Picturefill - v3.0.2
             * http://scottjehl.github.io/picturefill
             * Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt;
             *  License: MIT
             */
            (function (s, i, c) {
                "use strict";
                var a, u, o;
                i.createElement("picture");
                var l = {},
                    f = !1,
                    d = function () { },
                    p = i.createElement("img"),
                    m = p.getAttribute,
                    A = p.setAttribute,
                    h = p.removeAttribute,
                    g = i.documentElement,
                    v = {},
                    w = { algorithm: "" },
                    S = navigator.userAgent,
                    y =
                        /rident/.test(S) ||
                        (/ecko/.test(S) && S.match(/rv\:(\d+)/) && RegExp.$1 > 35),
                    x = "currentSrc",
                    b = /\s+\+?\d+(e\d+)?w/,
                    E = /(\([^)]+\))?\s*(.+)/,
                    z = s.picturefillCFG,
                    T = "font-size:100%!important;",
                    C = !0,
                    M = {},
                    R = {},
                    P = s.devicePixelRatio,
                    L = { px: 1, in: 96 },
                    D = i.createElement("a"),
                    B = !1,
                    I = /^[ \t\n\r\u000c]+/,
                    U = /^[, \t\n\r\u000c]+/,
                    $ = /^[^ \t\n\r\u000c]+/,
                    k = /[,]+$/,
                    O = /^\d+$/,
                    W = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
                    Q = function (e, t, r, n) {
                        e.addEventListener
                            ? e.addEventListener(t, r, n || !1)
                            : e.attachEvent && e.attachEvent("on" + t, r);
                    },
                    j = function (e) {
                        var t = {};
                        return function (r) {
                            return r in t || (t[r] = e(r)), t[r];
                        };
                    };
                function _(e) {
                    return (
                        " " === e || "\t" === e || "\n" === e || "\f" === e || "\r" === e
                    );
                }
                var G,
                    H,
                    F,
                    N,
                    q,
                    V,
                    K,
                    J,
                    X,
                    Y,
                    Z,
                    ee,
                    te,
                    re,
                    ne,
                    se,
                    ie = ((G = /^([\d\.]+)(em|vw|px)$/),
                        (H = j(function (e) {
                            return (
                                "return " +
                                (function () {
                                    for (var e = arguments, t = 0, r = e[0]; ++t in e;)
                                        r = r.replace(e[t], e[++t]);
                                    return r;
                                })(
                                    (e || "").toLowerCase(),
                                    /\band\b/g,
                                    "&&",
                                    /,/g,
                                    "||",
                                    /min-([a-z-\s]+):/g,
                                    "e.$1>=",
                                    /max-([a-z-\s]+):/g,
                                    "e.$1<=",
                                    /calc([^)]+)/g,
                                    "($1)",
                                    /(\d+[\.]*[\d]*)([a-z]+)/g,
                                    "($1 * e.$2)",
                                    /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,
                                    ""
                                ) +
                                ";"
                            );
                        })),
                        function (e, t) {
                            var r;
                            if (!(e in M))
                                if (((M[e] = !1), t && (r = e.match(G)))) M[e] = r[1] * L[r[2]];
                                else
                                    try {
                                        M[e] = new Function("e", H(e))(L);
                                    } catch (e) { }
                            return M[e];
                        }),
                    ce = function (e, t) {
                        return (
                            e.w
                                ? ((e.cWidth = l.calcListLength(t || "100vw")),
                                    (e.res = e.w / e.cWidth))
                                : (e.res = e.d),
                            e
                        );
                    },
                    ae = function (e) {
                        if (f) {
                            var t,
                                r,
                                n,
                                s = e || {};
                            if (
                                (s.elements &&
                                    1 === s.elements.nodeType &&
                                    ("IMG" === s.elements.nodeName.toUpperCase()
                                        ? (s.elements = [s.elements])
                                        : ((s.context = s.elements), (s.elements = null))),
                                    (n = (t =
                                        s.elements ||
                                        l.qsa(
                                            s.context || i,
                                            s.reevaluate || s.reselect ? l.sel : l.selShort
                                        )).length))
                            ) {
                                for (l.setupRun(s), B = !0, r = 0; r < n; r++)
                                    l.fillImg(t[r], s);
                                l.teardownRun(s);
                            }
                        }
                    };
                function ue(e, t) {
                    return e.res - t.res;
                }
                function oe(e, t) {
                    var r, n, s;
                    if (e && t)
                        for (s = l.parseSet(t), e = l.makeUrl(e), r = 0; r < s.length; r++)
                            if (e === l.makeUrl(s[r].url)) {
                                n = s[r];
                                break;
                            }
                    return n;
                }
                s.console && console.warn,
                    x in p || (x = "src"),
                    (v["image/jpeg"] = !0),
                    (v["image/gif"] = !0),
                    (v["image/png"] = !0),
                    (v["image/svg+xml"] = i.implementation.hasFeature(
                        "http://www.w3.org/TR/SVG11/feature#Image",
                        "1.1"
                    )),
                    (l.ns = ("pf" + new Date().getTime()).substr(0, 9)),
                    (l.supSrcset = "srcset" in p),
                    (l.supSizes = "sizes" in p),
                    (l.supPicture = !!s.HTMLPictureElement),
                    l.supSrcset &&
                    l.supPicture &&
                    !l.supSizes &&
                    ((F = i.createElement("img")),
                        (p.srcset = "data:,a"),
                        (F.src = "data:,a"),
                        (l.supSrcset = p.complete === F.complete),
                        (l.supPicture = l.supSrcset && l.supPicture)),
                    l.supSrcset && !l.supSizes
                        ? ((N =
                            "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),
                            (q = i.createElement("img")),
                            (V = function () {
                                2 === q.width && (l.supSizes = !0),
                                    (u = l.supSrcset && !l.supSizes),
                                    (f = !0),
                                    setTimeout(ae);
                            }),
                            (q.onload = V),
                            (q.onerror = V),
                            q.setAttribute("sizes", "9px"),
                            (q.srcset =
                                N +
                                " 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w"),
                            (q.src = N))
                        : (f = !0),
                    (l.selShort = "picture>img,img[srcset]"),
                    (l.sel = l.selShort),
                    (l.cfg = w),
                    (l.DPR = P || 1),
                    (l.u = L),
                    (l.types = v),
                    (l.setSize = d),
                    (l.makeUrl = j(function (e) {
                        return (D.href = e), D.href;
                    })),
                    (l.qsa = function (e, t) {
                        return "querySelector" in e ? e.querySelectorAll(t) : [];
                    }),
                    (l.matchesMedia = function () {
                        return (
                            s.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches
                                ? (l.matchesMedia = function (e) {
                                    return !e || matchMedia(e).matches;
                                })
                                : (l.matchesMedia = l.mMQ),
                            l.matchesMedia.apply(this, arguments)
                        );
                    }),
                    (l.mMQ = function (e) {
                        return !e || ie(e);
                    }),
                    (l.calcLength = function (e) {
                        var t = ie(e, !0) || !1;
                        return t < 0 && (t = !1), t;
                    }),
                    (l.supportsType = function (e) {
                        return !e || v[e];
                    }),
                    (l.parseSize = j(function (e) {
                        var t = (e || "").match(E);
                        return { media: t && t[1], length: t && t[2] };
                    })),
                    (l.parseSet = function (e) {
                        return (
                            e.cands ||
                            (e.cands = (function (e, t) {
                                function r(t) {
                                    var r,
                                        n = t.exec(e.substring(o));
                                    if (n) return (r = n[0]), (o += r.length), r;
                                }
                                var n,
                                    s,
                                    i,
                                    c,
                                    a,
                                    u = e.length,
                                    o = 0,
                                    l = [];
                                function f() {
                                    var e,
                                        r,
                                        i,
                                        c,
                                        a,
                                        u,
                                        o,
                                        f,
                                        d,
                                        p = !1,
                                        m = {};
                                    for (c = 0; c < s.length; c++)
                                        (u = (a = s[c])[a.length - 1]),
                                            (o = a.substring(0, a.length - 1)),
                                            (f = parseInt(o, 10)),
                                            (d = parseFloat(o)),
                                            O.test(o) && "w" === u
                                                ? ((e || r) && (p = !0), 0 === f ? (p = !0) : (e = f))
                                                : W.test(o) && "x" === u
                                                    ? ((e || r || i) && (p = !0),
                                                        d < 0 ? (p = !0) : (r = d))
                                                    : O.test(o) && "h" === u
                                                        ? ((i || r) && (p = !0), 0 === f ? (p = !0) : (i = f))
                                                        : (p = !0);
                                    p ||
                                        ((m.url = n),
                                            e && (m.w = e),
                                            r && (m.d = r),
                                            i && (m.h = i),
                                            i || r || e || (m.d = 1),
                                            1 === m.d && (t.has1x = !0),
                                            (m.set = t),
                                            l.push(m));
                                }
                                function d() {
                                    for (r(I), i = "", c = "in descriptor"; ;) {
                                        if (((a = e.charAt(o)), "in descriptor" === c))
                                            if (_(a))
                                                i && (s.push(i), (i = ""), (c = "after descriptor"));
                                            else {
                                                if ("," === a)
                                                    return (o += 1), i && s.push(i), void f();
                                                if ("(" === a) (i += a), (c = "in parens");
                                                else {
                                                    if ("" === a) return i && s.push(i), void f();
                                                    i += a;
                                                }
                                            }
                                        else if ("in parens" === c)
                                            if (")" === a) (i += a), (c = "in descriptor");
                                            else {
                                                if ("" === a) return s.push(i), void f();
                                                i += a;
                                            }
                                        else if ("after descriptor" === c)
                                            if (_(a));
                                            else {
                                                if ("" === a) return void f();
                                                (c = "in descriptor"), (o -= 1);
                                            }
                                        o += 1;
                                    }
                                }
                                for (; ;) {
                                    if ((r(U), o >= u)) return l;
                                    (n = r($)),
                                        (s = []),
                                        "," === n.slice(-1) ? ((n = n.replace(k, "")), f()) : d();
                                }
                            })(e.srcset, e)),
                            e.cands
                        );
                    }),
                    (l.getEmValue = function () {
                        var e;
                        if (!a && (e = i.body)) {
                            var t = i.createElement("div"),
                                r = g.style.cssText,
                                n = e.style.cssText;
                            (t.style.cssText =
                                "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)"),
                                (g.style.cssText = T),
                                (e.style.cssText = T),
                                e.appendChild(t),
                                (a = t.offsetWidth),
                                e.removeChild(t),
                                (a = parseFloat(a, 10)),
                                (g.style.cssText = r),
                                (e.style.cssText = n);
                        }
                        return a || 16;
                    }),
                    (l.calcListLength = function (e) {
                        if (!(e in R) || w.uT) {
                            var t = l.calcLength(
                                (function (e) {
                                    var t,
                                        r,
                                        n,
                                        s,
                                        i,
                                        c,
                                        a,
                                        u = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,
                                        o = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
                                    for (
                                        n = (r = (function (e) {
                                            var t,
                                                r = "",
                                                n = [],
                                                s = [],
                                                i = 0,
                                                c = 0,
                                                a = !1;
                                            function u() {
                                                r && (n.push(r), (r = ""));
                                            }
                                            function o() {
                                                n[0] && (s.push(n), (n = []));
                                            }
                                            for (; ;) {
                                                if ("" === (t = e.charAt(c))) return u(), o(), s;
                                                if (a) {
                                                    if ("*" === t && "/" === e[c + 1]) {
                                                        (a = !1), (c += 2), u();
                                                        continue;
                                                    }
                                                    c += 1;
                                                } else {
                                                    if (_(t)) {
                                                        if ((e.charAt(c - 1) && _(e.charAt(c - 1))) || !r) {
                                                            c += 1;
                                                            continue;
                                                        }
                                                        if (0 === i) {
                                                            u(), (c += 1);
                                                            continue;
                                                        }
                                                        t = " ";
                                                    } else if ("(" === t) i += 1;
                                                    else if (")" === t) i -= 1;
                                                    else {
                                                        if ("," === t) {
                                                            u(), o(), (c += 1);
                                                            continue;
                                                        }
                                                        if ("/" === t && "*" === e.charAt(c + 1)) {
                                                            (a = !0), (c += 2);
                                                            continue;
                                                        }
                                                    }
                                                    (r += t), (c += 1);
                                                }
                                            }
                                        })(e)).length,
                                        t = 0;
                                        t < n;
                                        t++
                                    )
                                        if (
                                            ((i = (s = r[t])[s.length - 1]),
                                                (a = i),
                                                (u.test(a) && parseFloat(a) >= 0) ||
                                                o.test(a) ||
                                                "0" === a ||
                                                "-0" === a ||
                                                "+0" === a)
                                        ) {
                                            if (((c = i), s.pop(), 0 === s.length)) return c;
                                            if (((s = s.join(" ")), l.matchesMedia(s))) return c;
                                        }
                                    return "100vw";
                                })(e)
                            );
                            R[e] = t || L.width;
                        }
                        return R[e];
                    }),
                    (l.setRes = function (e) {
                        var t;
                        if (e)
                            for (var r = 0, n = (t = l.parseSet(e)).length; r < n; r++)
                                ce(t[r], e.sizes);
                        return t;
                    }),
                    (l.setRes.res = ce),
                    (l.applySetCandidate = function (e, t) {
                        if (e.length) {
                            var r,
                                n,
                                s,
                                i,
                                c,
                                a,
                                u,
                                o,
                                f,
                                d,
                                p,
                                m,
                                A,
                                h,
                                g,
                                v,
                                S = t[l.ns],
                                b = l.DPR;
                            if (
                                ((a = S.curSrc || t[x]),
                                    (u =
                                        S.curCan ||
                                        (function (e, t, r) {
                                            var n;
                                            return (
                                                !r && t && (r = (r = e[l.ns].sets) && r[r.length - 1]),
                                                (n = oe(t, r)) &&
                                                ((t = l.makeUrl(t)),
                                                    (e[l.ns].curSrc = t),
                                                    (e[l.ns].curCan = n),
                                                    n.res || ce(n, n.set.sizes)),
                                                n
                                            );
                                        })(t, a, e[0].set)) &&
                                    u.set === e[0].set &&
                                    ((f = y && !t.complete && u.res - 0.1 > b) ||
                                        ((u.cached = !0), u.res >= b && (c = u))),
                                    !c)
                            )
                                for (e.sort(ue), c = e[(i = e.length) - 1], n = 0; n < i; n++)
                                    if ((r = e[n]).res >= b) {
                                        c =
                                            e[(s = n - 1)] &&
                                                (f || a !== l.makeUrl(r.url)) &&
                                                ((d = e[s].res),
                                                    (p = r.res),
                                                    (m = b),
                                                    (A = e[s].cached),
                                                    (h = void 0),
                                                    (g = void 0),
                                                    (v = void 0),
                                                    "saveData" === w.algorithm
                                                        ? d > 2.7
                                                            ? (v = m + 1)
                                                            : ((g = (p - m) * (h = Math.pow(d - 0.6, 1.5))),
                                                                A && (g += 0.1 * h),
                                                                (v = d + g))
                                                        : (v = m > 1 ? Math.sqrt(d * p) : d),
                                                    v > m)
                                                ? e[s]
                                                : r;
                                        break;
                                    }
                            c &&
                                ((o = l.makeUrl(c.url)),
                                    (S.curSrc = o),
                                    (S.curCan = c),
                                    o !== a && l.setSrc(t, c),
                                    l.setSize(t));
                        }
                    }),
                    (l.setSrc = function (e, t) {
                        var r;
                        (e.src = t.url),
                            "image/svg+xml" === t.set.type &&
                            ((r = e.style.width),
                                (e.style.width = e.offsetWidth + 1 + "px"),
                                e.offsetWidth + 1 && (e.style.width = r));
                    }),
                    (l.getSet = function (e) {
                        var t,
                            r,
                            n,
                            s = !1,
                            i = e[l.ns].sets;
                        for (t = 0; t < i.length && !s; t++)
                            if (
                                (r = i[t]).srcset &&
                                l.matchesMedia(r.media) &&
                                (n = l.supportsType(r.type))
                            ) {
                                "pending" === n && (r = n), (s = r);
                                break;
                            }
                        return s;
                    }),
                    (l.parseSets = function (e, t, r) {
                        var n,
                            s,
                            i,
                            c,
                            a = t && "PICTURE" === t.nodeName.toUpperCase(),
                            o = e[l.ns];
                        (void 0 === o.src || r.src) &&
                            ((o.src = m.call(e, "src")),
                                o.src ? A.call(e, "data-pfsrc", o.src) : h.call(e, "data-pfsrc")),
                            (void 0 === o.srcset || r.srcset || !l.supSrcset || e.srcset) &&
                            ((n = m.call(e, "srcset")), (o.srcset = n), (c = !0)),
                            (o.sets = []),
                            a &&
                            ((o.pic = !0),
                                (function (e, t) {
                                    var r,
                                        n,
                                        s,
                                        i,
                                        c = e.getElementsByTagName("source");
                                    for (r = 0, n = c.length; r < n; r++)
                                        ((s = c[r])[l.ns] = !0),
                                            (i = s.getAttribute("srcset")) &&
                                            t.push({
                                                srcset: i,
                                                media: s.getAttribute("media"),
                                                type: s.getAttribute("type"),
                                                sizes: s.getAttribute("sizes")
                                            });
                                })(t, o.sets)),
                            o.srcset
                                ? ((s = { srcset: o.srcset, sizes: m.call(e, "sizes") }),
                                    o.sets.push(s),
                                    (i = (u || o.src) && b.test(o.srcset || "")) ||
                                    !o.src ||
                                    oe(o.src, s) ||
                                    s.has1x ||
                                    ((s.srcset += ", " + o.src),
                                        s.cands.push({ url: o.src, d: 1, set: s })))
                                : o.src && o.sets.push({ srcset: o.src, sizes: null }),
                            (o.curCan = null),
                            (o.curSrc = void 0),
                            (o.supported = !(a || (s && !l.supSrcset) || (i && !l.supSizes))),
                            c &&
                            l.supSrcset &&
                            !o.supported &&
                            (n
                                ? (A.call(e, "data-pfsrcset", n), (e.srcset = ""))
                                : h.call(e, "data-pfsrcset")),
                            o.supported &&
                            !o.srcset &&
                            ((!o.src && e.src) || e.src !== l.makeUrl(o.src)) &&
                            (null === o.src ? e.removeAttribute("src") : (e.src = o.src)),
                            (o.parsed = !0);
                    }),
                    (l.fillImg = function (e, t) {
                        var r,
                            n,
                            s,
                            i,
                            c,
                            a = t.reselect || t.reevaluate;
                        (e[l.ns] || (e[l.ns] = {}), (r = e[l.ns]), a || r.evaled !== o) &&
                            ((r.parsed && !t.reevaluate) || l.parseSets(e, e.parentNode, t),
                                r.supported
                                    ? (r.evaled = o)
                                    : ((n = e),
                                        (i = l.getSet(n)),
                                        (c = !1),
                                        "pending" !== i &&
                                        ((c = o),
                                            i && ((s = l.setRes(i)), l.applySetCandidate(s, n))),
                                        (n[l.ns].evaled = c)));
                    }),
                    (l.setupRun = function () {
                        (B && !C && P === s.devicePixelRatio) ||
                            ((C = !1),
                                (P = s.devicePixelRatio),
                                (M = {}),
                                (R = {}),
                                (l.DPR = P || 1),
                                (L.width = Math.max(s.innerWidth || 0, g.clientWidth)),
                                (L.height = Math.max(s.innerHeight || 0, g.clientHeight)),
                                (L.vw = L.width / 100),
                                (L.vh = L.height / 100),
                                (o = [L.height, L.width, P].join("-")),
                                (L.em = l.getEmValue()),
                                (L.rem = L.em));
                    }),
                    l.supPicture
                        ? ((ae = d), (l.fillImg = d))
                        : ((te = s.attachEvent ? /d$|^c/ : /d$|^c|^i/),
                            (re = function () {
                                var e = i.readyState || "";
                                (ne = setTimeout(re, "loading" === e ? 200 : 999)),
                                    i.body &&
                                    (l.fillImgs(), (K = K || te.test(e)) && clearTimeout(ne));
                            }),
                            (ne = setTimeout(re, i.body ? 9 : 99)),
                            (se = g.clientHeight),
                            Q(
                                s,
                                "resize",
                                ((J = function () {
                                    (C =
                                        Math.max(s.innerWidth || 0, g.clientWidth) !== L.width ||
                                        g.clientHeight !== se),
                                        (se = g.clientHeight),
                                        C && l.fillImgs();
                                }),
                                    (X = 99),
                                    (ee = function () {
                                        var e = new Date() - Z;
                                        e < X ? (Y = setTimeout(ee, X - e)) : ((Y = null), J());
                                    }),
                                    function () {
                                        (Z = new Date()), Y || (Y = setTimeout(ee, X));
                                    })
                            ),
                            Q(i, "readystatechange", re)),
                    (l.picturefill = ae),
                    (l.fillImgs = ae),
                    (l.teardownRun = d),
                    (ae._ = l),
                    (s.picturefillCFG = {
                        pf: l,
                        push: function (e) {
                            var t = e.shift();
                            "function" == typeof l[t]
                                ? l[t].apply(l, e)
                                : ((w[t] = e[0]), B && l.fillImgs({ reselect: !0 }));
                        }
                    });
                for (; z && z.length;) s.picturefillCFG.push(z.shift());
                (s.picturefill = ae),
                    "object" == typeof e.exports
                        ? (e.exports = ae)
                        : void 0 ===
                        (n = function () {
                            return ae;
                        }.call(t, r, t, e)) || (e.exports = n),
                    l.supPicture ||
                    (v["image/webp"] = (function (e, t) {
                        var r = new s.Image();
                        return (
                            (r.onerror = function () {
                                (v[e] = !1), ae();
                            }),
                            (r.onload = function () {
                                (v[e] = 1 === r.width), ae();
                            }),
                            (r.src = t),
                            "pending"
                        );
                    })(
                        "image/webp",
                        "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="
                    ));
            })(window, document);
    }
});
