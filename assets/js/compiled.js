let WOW;
! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    var n = [],
        i = e.document,
        o = Object.getPrototypeOf,
        r = n.slice,
        s = n.concat,
        a = n.push,
        l = n.indexOf,
        c = {},
        u = c.toString,
        d = c.hasOwnProperty,
        h = d.toString,
        f = h.call(Object),
        p = {},
        g = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        m = function(e) {
            return null != e && e === e.window
        },
        v = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function y(e, t, n) {
        var o, r, s = (n = n || i).createElement("script");
        if (s.text = e, t)
            for (o in v)(r = t[o] || t.getAttribute && t.getAttribute(o)) && s.setAttribute(o, r);
        n.head.appendChild(s).parentNode.removeChild(s)
    }

    function b(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[u.call(e)] || "object" : typeof e
    }
    var w = "3.4.1",
        _ = function(e, t) {
            return new _.fn.init(e, t)
        },
        C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function S(e) {
        var t = !!e && "length" in e && e.length,
            n = b(e);
        return !g(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    _.fn = _.prototype = {
        jquery: w,
        constructor: _,
        length: 0,
        toArray: function() {
            return r.call(this)
        },
        get: function(e) {
            return null == e ? r.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = _.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return _.each(this, e)
        },
        map: function(e) {
            return this.pushStack(_.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(r.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: n.sort,
        splice: n.splice
    }, _.extend = _.fn.extend = function() {
        var e, t, n, i, o, r, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || g(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e) i = e[t], "__proto__" !== t && s !== i && (c && i && (_.isPlainObject(i) || (o = Array.isArray(i))) ? (n = s[t], r = o && !Array.isArray(n) ? [] : o || _.isPlainObject(n) ? n : {}, o = !1, s[t] = _.extend(c, r, i)) : void 0 !== i && (s[t] = i));
        return s
    }, _.extend({
        expando: "jQuery" + (w + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== u.call(e) || (t = o(e)) && ("function" != typeof(n = d.call(t, "constructor") && t.constructor) || h.call(n) !== f))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t) {
            y(e, {
                nonce: t && t.nonce
            })
        },
        each: function(e, t) {
            var n, i = 0;
            if (S(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break; return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(C, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (S(Object(e)) ? _.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : l.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
            return e.length = o, e
        },
        grep: function(e, t, n) {
            for (var i = [], o = 0, r = e.length, s = !n; o < r; o++) !t(e[o], o) !== s && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var i, o, r = 0,
                a = [];
            if (S(e))
                for (i = e.length; r < i; r++) null != (o = t(e[r], r, n)) && a.push(o);
            else
                for (r in e) null != (o = t(e[r], r, n)) && a.push(o);
            return s.apply([], a)
        },
        guid: 1,
        support: p
    }), "function" == typeof Symbol && (_.fn[Symbol.iterator] = n[Symbol.iterator]), _.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        c["[object " + t + "]"] = t.toLowerCase()
    });
    var x = function(e) {
        var t, n, i, o, r, s, a, l, c, u, d, h, f, p, g, m, v, y, b, w = "sizzle" + 1 * new Date,
            _ = e.document,
            C = 0,
            S = 0,
            x = le(),
            T = le(),
            E = le(),
            k = le(),
            O = function(e, t) {
                return e === t && (d = !0), 0
            },
            A = {}.hasOwnProperty,
            D = [],
            P = D.pop,
            L = D.push,
            N = D.push,
            I = D.slice,
            $ = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            M = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            j = "[\\x20\\t\\r\\n\\f]",
            H = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            W = "\\[" + j + "*(" + H + ")(?:" + j + "*([*^$|!~]?=)" + j + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + j + "*\\]",
            R = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            B = new RegExp(j + "+", "g"),
            F = new RegExp("^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$", "g"),
            q = new RegExp("^" + j + "*," + j + "*"),
            V = new RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"),
            X = new RegExp(j + "|>"),
            Y = new RegExp(R),
            U = new RegExp("^" + H + "$"),
            z = {
                ID: new RegExp("^#(" + H + ")"),
                CLASS: new RegExp("^\\.(" + H + ")"),
                TAG: new RegExp("^(" + H + "|[*])"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + R),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + j + "*(even|odd|(([+-]|)(\\d*)n|)" + j + "*(?:([+-]|)" + j + "*(\\d+)|))" + j + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + M + ")$", "i"),
                needsContext: new RegExp("^" + j + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + j + "*((?:-\\d)?\\d*)" + j + "*\\)|)(?=[^-]|$)", "i")
            },
            Q = /HTML$/i,
            K = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\([\\da-f]{1,6}" + j + "?|(" + j + ")|.)", "ig"),
            ne = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            oe = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            re = function() {
                h()
            },
            se = we(function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            N.apply(D = I.call(_.childNodes), _.childNodes), D[_.childNodes.length].nodeType
        } catch (t) {
            N = {
                apply: D.length ? function(e, t) {
                    L.apply(e, I.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }

        function ae(e, t, i, o) {
            var r, a, c, u, d, p, v, y = t && t.ownerDocument,
                C = t ? t.nodeType : 9;
            if (i = i || [], "string" != typeof e || !e || 1 !== C && 9 !== C && 11 !== C) return i;
            if (!o && ((t ? t.ownerDocument || t : _) !== f && h(t), t = t || f, g)) {
                if (11 !== C && (d = J.exec(e)))
                    if (r = d[1]) {
                        if (9 === C) {
                            if (!(c = t.getElementById(r))) return i;
                            if (c.id === r) return i.push(c), i
                        } else if (y && (c = y.getElementById(r)) && b(t, c) && c.id === r) return i.push(c), i
                    } else {
                        if (d[2]) return N.apply(i, t.getElementsByTagName(e)), i;
                        if ((r = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return N.apply(i, t.getElementsByClassName(r)), i
                    }
                if (n.qsa && !k[e + " "] && (!m || !m.test(e)) && (1 !== C || "object" !== t.nodeName.toLowerCase())) {
                    if (v = e, y = t, 1 === C && X.test(e)) {
                        for ((u = t.getAttribute("id")) ? u = u.replace(ie, oe) : t.setAttribute("id", u = w), a = (p = s(e)).length; a--;) p[a] = "#" + u + " " + be(p[a]);
                        v = p.join(","), y = ee.test(e) && ve(t.parentNode) || t
                    }
                    try {
                        return N.apply(i, y.querySelectorAll(v)), i
                    } catch (t) {
                        k(e, !0)
                    } finally {
                        u === w && t.removeAttribute("id")
                    }
                }
            }
            return l(e.replace(F, "$1"), t, i, o)
        }

        function le() {
            var e = [];
            return function t(n, o) {
                return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = o
            }
        }

        function ce(e) {
            return e[w] = !0, e
        }

        function ue(e) {
            var t = f.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function de(e, t) {
            for (var n = e.split("|"), o = n.length; o--;) i.attrHandle[n[o]] = t
        }

        function he(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function fe(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function pe(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function ge(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && se(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function me(e) {
            return ce(function(t) {
                return t = +t, ce(function(n, i) {
                    for (var o, r = e([], n.length, t), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }

        function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = ae.support = {}, r = ae.isXML = function(e) {
                var t = e.namespaceURI,
                    n = (e.ownerDocument || e).documentElement;
                return !Q.test(t || n && n.nodeName || "HTML")
            }, h = ae.setDocument = function(e) {
                var t, o, s = e ? e.ownerDocument || e : _;
                return s !== f && 9 === s.nodeType && s.documentElement && (p = (f = s).documentElement, g = !r(f), _ !== f && (o = f.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", re, !1) : o.attachEvent && o.attachEvent("onunload", re)), n.attributes = ue(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), n.getElementsByTagName = ue(function(e) {
                    return e.appendChild(f.createComment("")), !e.getElementsByTagName("*").length
                }), n.getElementsByClassName = Z.test(f.getElementsByClassName), n.getById = ue(function(e) {
                    return p.appendChild(e).id = w, !f.getElementsByName || !f.getElementsByName(w).length
                }), n.getById ? (i.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, i.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (i.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }, i.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n, i, o, r = t.getElementById(e);
                        if (r) {
                            if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                            for (o = t.getElementsByName(e), i = 0; r = o[i++];)
                                if ((n = r.getAttributeNode("id")) && n.value === e) return [r]
                        }
                        return []
                    }
                }), i.find.TAG = n.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        o = 0,
                        r = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }, i.find.CLASS = n.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
                }, v = [], m = [], (n.qsa = Z.test(f.querySelectorAll)) && (ue(function(e) {
                    p.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + j + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + j + "*(?:value|" + M + ")"), e.querySelectorAll("[id~=" + w + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]")
                }), ue(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = f.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + j + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                })), (n.matchesSelector = Z.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ue(function(e) {
                    n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", R)
                }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = Z.test(p.compareDocumentPosition), b = t || Z.test(p.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, O = t ? function(e, t) {
                    if (e === t) return d = !0, 0;
                    var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === f || e.ownerDocument === _ && b(_, e) ? -1 : t === f || t.ownerDocument === _ && b(_, t) ? 1 : u ? $(u, e) - $(u, t) : 0 : 4 & i ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return d = !0, 0;
                    var n, i = 0,
                        o = e.parentNode,
                        r = t.parentNode,
                        s = [e],
                        a = [t];
                    if (!o || !r) return e === f ? -1 : t === f ? 1 : o ? -1 : r ? 1 : u ? $(u, e) - $(u, t) : 0;
                    if (o === r) return he(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (; s[i] === a[i];) i++;
                    return i ? he(s[i], a[i]) : s[i] === _ ? -1 : a[i] === _ ? 1 : 0
                }), f
            }, ae.matches = function(e, t) {
                return ae(e, null, null, t)
            }, ae.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== f && h(e), n.matchesSelector && g && !k[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
                    var i = y.call(e, t);
                    if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (e) {
                    k(t, !0)
                }
                return 0 < ae(t, f, null, [e]).length
            }, ae.contains = function(e, t) {
                return (e.ownerDocument || e) !== f && h(e), b(e, t)
            }, ae.attr = function(e, t) {
                (e.ownerDocument || e) !== f && h(e);
                var o = i.attrHandle[t.toLowerCase()],
                    r = o && A.call(i.attrHandle, t.toLowerCase()) ? o(e, t, !g) : void 0;
                return void 0 !== r ? r : n.attributes || !g ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, ae.escape = function(e) {
                return (e + "").replace(ie, oe)
            }, ae.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, ae.uniqueSort = function(e) {
                var t, i = [],
                    o = 0,
                    r = 0;
                if (d = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(O), d) {
                    for (; t = e[r++];) t === e[r] && (o = i.push(r));
                    for (; o--;) e.splice(i[o], 1)
                }
                return u = null, e
            }, o = ae.getText = function(e) {
                var t, n = "",
                    i = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
                } else
                    for (; t = e[i++];) n += o(t);
                return n
            }, (i = ae.selectors = {
                cacheLength: 50,
                createPseudo: ce,
                match: z,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return z.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && Y.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = x[e + " "];
                        return t || (t = new RegExp("(^|" + j + ")" + e + "(" + j + "|$)")) && x(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, n) {
                        return function(i) {
                            var o = ae.attr(i, e);
                            return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === n : "!=" === t ? o !== n : "^=" === t ? n && 0 === o.indexOf(n) : "*=" === t ? n && -1 < o.indexOf(n) : "$=" === t ? n && o.slice(-n.length) === n : "~=" === t ? -1 < (" " + o.replace(B, " ") + " ").indexOf(n) : "|=" === t && (o === n || o.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(e, t, n, i, o) {
                        var r = "nth" !== e.slice(0, 3),
                            s = "last" !== e.slice(-4),
                            a = "of-type" === t;
                        return 1 === i && 0 === o ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var c, u, d, h, f, p, g = r !== s ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                v = a && t.nodeName.toLowerCase(),
                                y = !l && !a,
                                b = !1;
                            if (m) {
                                if (r) {
                                    for (; g;) {
                                        for (h = t; h = h[g];)
                                            if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                        p = g = "only" === e && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [s ? m.firstChild : m.lastChild], s && y) {
                                    for (b = (f = (c = (u = (d = (h = m)[w] || (h[w] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === C && c[1]) && c[2], h = f && m.childNodes[f]; h = ++f && h && h[g] || (b = f = 0) || p.pop();)
                                        if (1 === h.nodeType && ++b && h === t) {
                                            u[e] = [C, f, b];
                                            break
                                        }
                                } else if (y && (b = f = (c = (u = (d = (h = t)[w] || (h[w] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === C && c[1]), !1 === b)
                                    for (;
                                        (h = ++f && h && h[g] || (b = f = 0) || p.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && ((u = (d = h[w] || (h[w] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] = [C, b]), h !== t)););
                                return (b -= o) === i || b % i == 0 && 0 <= b / i
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, o = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                        return o[w] ? o(t) : 1 < o.length ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ce(function(e, n) {
                            for (var i, r = o(e, t), s = r.length; s--;) e[i = $(e, r[s])] = !(n[i] = r[s])
                        }) : function(e) {
                            return o(e, 0, n)
                        }) : o
                    }
                },
                pseudos: {
                    not: ce(function(e) {
                        var t = [],
                            n = [],
                            i = a(e.replace(F, "$1"));
                        return i[w] ? ce(function(e, t, n, o) {
                            for (var r, s = i(e, null, o, []), a = e.length; a--;)(r = s[a]) && (e[a] = !(t[a] = r))
                        }) : function(e, o, r) {
                            return t[0] = e, i(t, null, r, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: ce(function(e) {
                        return function(t) {
                            return 0 < ae(e, t).length
                        }
                    }),
                    contains: ce(function(e) {
                        return e = e.replace(te, ne),
                            function(t) {
                                return -1 < (t.textContent || o(t)).indexOf(e)
                            }
                    }),
                    lang: ce(function(e) {
                        return U.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === p
                    },
                    focus: function(e) {
                        return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !i.pseudos.empty(e)
                    },
                    header: function(e) {
                        return G.test(e.nodeName)
                    },
                    input: function(e) {
                        return K.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: me(function() {
                        return [0]
                    }),
                    last: me(function(e, t) {
                        return [t - 1]
                    }),
                    eq: me(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: me(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: me(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: me(function(e, t, n) {
                        for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i;) e.push(i);
                        return e
                    }),
                    gt: me(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }).pseudos.nth = i.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) i.pseudos[t] = fe(t);
        for (t in {
                submit: !0,
                reset: !0
            }) i.pseudos[t] = pe(t);

        function ye() {}

        function be(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function we(e, t, n) {
            var i = t.dir,
                o = t.next,
                r = o || i,
                s = n && "parentNode" === r,
                a = S++;
            return t.first ? function(t, n, o) {
                for (; t = t[i];)
                    if (1 === t.nodeType || s) return e(t, n, o);
                return !1
            } : function(t, n, l) {
                var c, u, d, h = [C, a];
                if (l) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || s) && e(t, n, l)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || s)
                            if (u = (d = t[w] || (t[w] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[i] || t;
                            else {
                                if ((c = u[r]) && c[0] === C && c[1] === a) return h[2] = c[2];
                                if ((u[r] = h)[2] = e(t, n, l)) return !0
                            } return !1
            }
        }

        function _e(e) {
            return 1 < e.length ? function(t, n, i) {
                for (var o = e.length; o--;)
                    if (!e[o](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function Ce(e, t, n, i, o) {
            for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(r = e[a]) && (n && !n(r, i, o) || (s.push(r), c && t.push(a)));
            return s
        }

        function Se(e, t, n, i, o, r) {
            return i && !i[w] && (i = Se(i)), o && !o[w] && (o = Se(o, r)), ce(function(r, s, a, l) {
                var c, u, d, h = [],
                    f = [],
                    p = s.length,
                    g = r || function(e, t, n) {
                        for (var i = 0, o = t.length; i < o; i++) ae(e, t[i], n);
                        return n
                    }(t || "*", a.nodeType ? [a] : a, []),
                    m = !e || !r && t ? g : Ce(g, h, e, a, l),
                    v = n ? o || (r ? e : p || i) ? [] : s : m;
                if (n && n(m, v, a, l), i)
                    for (c = Ce(v, f), i(c, [], a, l), u = c.length; u--;)(d = c[u]) && (v[f[u]] = !(m[f[u]] = d));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (c = [], u = v.length; u--;)(d = v[u]) && c.push(m[u] = d);
                            o(null, v = [], c, l)
                        }
                        for (u = v.length; u--;)(d = v[u]) && -1 < (c = o ? $(r, d) : h[u]) && (r[c] = !(s[c] = d))
                    }
                } else v = Ce(v === s ? v.splice(p, v.length) : v), o ? o(null, s, v, l) : N.apply(s, v)
            })
        }

        function xe(e) {
            for (var t, n, o, r = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, u = we(function(e) {
                    return e === t
                }, a, !0), d = we(function(e) {
                    return -1 < $(t, e)
                }, a, !0), h = [function(e, n, i) {
                    var o = !s && (i || n !== c) || ((t = n).nodeType ? u(e, n, i) : d(e, n, i));
                    return t = null, o
                }]; l < r; l++)
                if (n = i.relative[e[l].type]) h = [we(_e(h), n)];
                else {
                    if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
                        for (o = ++l; o < r && !i.relative[e[o].type]; o++);
                        return Se(1 < l && _e(h), 1 < l && be(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(F, "$1"), n, l < o && xe(e.slice(l, o)), o < r && xe(e = e.slice(o)), o < r && be(e))
                    }
                    h.push(n)
                }
            return _e(h)
        }
        return ye.prototype = i.filters = i.pseudos, i.setFilters = new ye, s = ae.tokenize = function(e, t) {
            var n, o, r, s, a, l, c, u = T[e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (a = e, l = [], c = i.preFilter; a;) {
                for (s in n && !(o = q.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), n = !1, (o = V.exec(a)) && (n = o.shift(), r.push({
                        value: n,
                        type: o[0].replace(F, " ")
                    }), a = a.slice(n.length)), i.filter) !(o = z[s].exec(a)) || c[s] && !(o = c[s](o)) || (n = o.shift(), r.push({
                    value: n,
                    type: s,
                    matches: o
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? ae.error(e) : T(e, l).slice(0)
        }, a = ae.compile = function(e, t) {
            var n, o, r, a, l, u, d = [],
                p = [],
                m = E[e + " "];
            if (!m) {
                for (t || (t = s(e)), n = t.length; n--;)(m = xe(t[n]))[w] ? d.push(m) : p.push(m);
                (m = E(e, (o = p, a = 0 < (r = d).length, l = 0 < o.length, u = function(e, t, n, s, u) {
                    var d, p, m, v = 0,
                        y = "0",
                        b = e && [],
                        w = [],
                        _ = c,
                        S = e || l && i.find.TAG("*", u),
                        x = C += null == _ ? 1 : Math.random() || .1,
                        T = S.length;
                    for (u && (c = t === f || t || u); y !== T && null != (d = S[y]); y++) {
                        if (l && d) {
                            for (p = 0, t || d.ownerDocument === f || (h(d), n = !g); m = o[p++];)
                                if (m(d, t || f, n)) {
                                    s.push(d);
                                    break
                                }
                            u && (C = x)
                        }
                        a && ((d = !m && d) && v--, e && b.push(d))
                    }
                    if (v += y, a && y !== v) {
                        for (p = 0; m = r[p++];) m(b, w, t, n);
                        if (e) {
                            if (0 < v)
                                for (; y--;) b[y] || w[y] || (w[y] = P.call(s));
                            w = Ce(w)
                        }
                        N.apply(s, w), u && !e && 0 < w.length && 1 < v + r.length && ae.uniqueSort(s)
                    }
                    return u && (C = x, c = _), b
                }, a ? ce(u) : u))).selector = e
            }
            return m
        }, l = ae.select = function(e, t, n, o) {
            var r, l, c, u, d, h = "function" == typeof e && e,
                f = !o && s(e = h.selector || e);
            if (n = n || [], 1 === f.length) {
                if (2 < (l = f[0] = f[0].slice(0)).length && "ID" === (c = l[0]).type && 9 === t.nodeType && g && i.relative[l[1].type]) {
                    if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
                    h && (t = t.parentNode), e = e.slice(l.shift().value.length)
                }
                for (r = z.needsContext.test(e) ? 0 : l.length; r-- && (c = l[r], !i.relative[u = c.type]);)
                    if ((d = i.find[u]) && (o = d(c.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) {
                        if (l.splice(r, 1), !(e = o.length && be(l))) return N.apply(n, o), n;
                        break
                    }
            }
            return (h || a(e, f))(o, t, !g, n, !t || ee.test(e) && ve(t.parentNode) || t), n
        }, n.sortStable = w.split("").sort(O).join("") === w, n.detectDuplicates = !!d, h(), n.sortDetached = ue(function(e) {
            return 1 & e.compareDocumentPosition(f.createElement("fieldset"))
        }), ue(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || de("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && ue(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || de("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ue(function(e) {
            return null == e.getAttribute("disabled")
        }) || de(M, function(e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), ae
    }(e);
    _.find = x, _.expr = x.selectors, _.expr[":"] = _.expr.pseudos, _.uniqueSort = _.unique = x.uniqueSort, _.text = x.getText, _.isXMLDoc = x.isXML, _.contains = x.contains, _.escapeSelector = x.escape;
    var T = function(e, t, n) {
            for (var i = [], o = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && _(e).is(n)) break;
                    i.push(e)
                }
            return i
        },
        E = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        k = _.expr.match.needsContext;

    function O(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function D(e, t, n) {
        return g(t) ? _.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        }) : t.nodeType ? _.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? _.grep(e, function(e) {
            return -1 < l.call(t, e) !== n
        }) : _.filter(t, e, n)
    }
    _.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? _.find.matchesSelector(i, e) ? [i] : [] : _.find.matches(e, _.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, _.fn.extend({
        find: function(e) {
            var t, n, i = this.length,
                o = this;
            if ("string" != typeof e) return this.pushStack(_(e).filter(function() {
                for (t = 0; t < i; t++)
                    if (_.contains(o[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) _.find(e, o[t], n);
            return 1 < i ? _.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(D(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(D(this, e || [], !0))
        },
        is: function(e) {
            return !!D(this, "string" == typeof e && k.test(e) ? _(e) : e || [], !1).length
        }
    });
    var P, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (_.fn.init = function(e, t, n) {
        var o, r;
        if (!e) return this;
        if (n = n || P, "string" == typeof e) {
            if (!(o = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || !o[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (o[1]) {
                if (t = t instanceof _ ? t[0] : t, _.merge(this, _.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : i, !0)), A.test(o[1]) && _.isPlainObject(t))
                    for (o in t) g(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
                return this
            }
            return (r = i.getElementById(o[2])) && (this[0] = r, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(_) : _.makeArray(e, this)
    }).prototype = _.fn, P = _(i);
    var N = /^(?:parents|prev(?:Until|All))/,
        I = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function $(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    _.fn.extend({
        has: function(e) {
            var t = _(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (_.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0,
                o = this.length,
                r = [],
                s = "string" != typeof e && _(e);
            if (!k.test(e))
                for (; i < o; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && _.find.matchesSelector(n, e))) {
                            r.push(n);
                            break
                        }
            return this.pushStack(1 < r.length ? _.uniqueSort(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? l.call(_(e), this[0]) : l.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(_.uniqueSort(_.merge(this.get(), _(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), _.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return T(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return T(e, "parentNode", n)
        },
        next: function(e) {
            return $(e, "nextSibling")
        },
        prev: function(e) {
            return $(e, "previousSibling")
        },
        nextAll: function(e) {
            return T(e, "nextSibling")
        },
        prevAll: function(e) {
            return T(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return T(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return T(e, "previousSibling", n)
        },
        siblings: function(e) {
            return E((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return E(e.firstChild)
        },
        contents: function(e) {
            return void 0 !== e.contentDocument ? e.contentDocument : (O(e, "template") && (e = e.content || e), _.merge([], e.childNodes))
        }
    }, function(e, t) {
        _.fn[e] = function(n, i) {
            var o = _.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = _.filter(i, o)), 1 < this.length && (I[e] || _.uniqueSort(o), N.test(e) && o.reverse()), this.pushStack(o)
        }
    });
    var M = /[^\x20\t\r\n\f]+/g;

    function j(e) {
        return e
    }

    function H(e) {
        throw e
    }

    function W(e, t, n, i) {
        var o;
        try {
            e && g(o = e.promise) ? o.call(e).done(t).fail(n) : e && g(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    _.Callbacks = function(e) {
        var t, n;
        e = "string" == typeof e ? (t = e, n = {}, _.each(t.match(M) || [], function(e, t) {
            n[t] = !0
        }), n) : _.extend({}, e);
        var i, o, r, s, a = [],
            l = [],
            c = -1,
            u = function() {
                for (s = s || e.once, r = i = !0; l.length; c = -1)
                    for (o = l.shift(); ++c < a.length;) !1 === a[c].apply(o[0], o[1]) && e.stopOnFalse && (c = a.length, o = !1);
                e.memory || (o = !1), i = !1, s && (a = o ? [] : "")
            },
            d = {
                add: function() {
                    return a && (o && !i && (c = a.length - 1, l.push(o)), function t(n) {
                        _.each(n, function(n, i) {
                            g(i) ? e.unique && d.has(i) || a.push(i) : i && i.length && "string" !== b(i) && t(i)
                        })
                    }(arguments), o && !i && u()), this
                },
                remove: function() {
                    return _.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = _.inArray(t, a, n));) a.splice(n, 1), n <= c && c--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < _.inArray(e, a) : 0 < a.length
                },
                empty: function() {
                    return a && (a = []), this
                },
                disable: function() {
                    return s = l = [], a = o = "", this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return s = l = [], o || i || (a = o = ""), this
                },
                locked: function() {
                    return !!s
                },
                fireWith: function(e, t) {
                    return s || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), i || u()), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return d
    }, _.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", _.Callbacks("memory"), _.Callbacks("memory"), 2],
                    ["resolve", "done", _.Callbacks("once memory"), _.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", _.Callbacks("once memory"), _.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                o = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return o.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return _.Deferred(function(t) {
                            _.each(n, function(n, i) {
                                var o = g(e[i[4]]) && e[i[4]];
                                r[i[1]](function() {
                                    var e = o && o.apply(this, arguments);
                                    e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, o ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, i, o) {
                        var r = 0;

                        function s(t, n, i, o) {
                            return function() {
                                var a = this,
                                    l = arguments,
                                    c = function() {
                                        var e, c;
                                        if (!(t < r)) {
                                            if ((e = i.apply(a, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            c = e && ("object" == typeof e || "function" == typeof e) && e.then, g(c) ? o ? c.call(e, s(r, n, j, o), s(r, n, H, o)) : (r++, c.call(e, s(r, n, j, o), s(r, n, H, o), s(r, n, j, n.notifyWith))) : (i !== j && (a = void 0, l = [e]), (o || n.resolveWith)(a, l))
                                        }
                                    },
                                    u = o ? c : function() {
                                        try {
                                            c()
                                        } catch (e) {
                                            _.Deferred.exceptionHook && _.Deferred.exceptionHook(e, u.stackTrace), r <= t + 1 && (i !== H && (a = void 0, l = [e]), n.rejectWith(a, l))
                                        }
                                    };
                                t ? u() : (_.Deferred.getStackHook && (u.stackTrace = _.Deferred.getStackHook()), e.setTimeout(u))
                            }
                        }
                        return _.Deferred(function(e) {
                            n[0][3].add(s(0, e, g(o) ? o : j, e.notifyWith)), n[1][3].add(s(0, e, g(t) ? t : j)), n[2][3].add(s(0, e, g(i) ? i : H))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? _.extend(e, o) : o
                    }
                },
                r = {};
            return _.each(n, function(e, t) {
                var s = t[2],
                    a = t[5];
                o[t[1]] = s.add, a && s.add(function() {
                    i = a
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), s.add(t[3].fire), r[t[0]] = function() {
                    return r[t[0] + "With"](this === r ? void 0 : this, arguments), this
                }, r[t[0] + "With"] = s.fireWith
            }), o.promise(r), t && t.call(r, r), r
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                i = Array(n),
                o = r.call(arguments),
                s = _.Deferred(),
                a = function(e) {
                    return function(n) {
                        i[e] = this, o[e] = 1 < arguments.length ? r.call(arguments) : n, --t || s.resolveWith(i, o)
                    }
                };
            if (t <= 1 && (W(e, s.done(a(n)).resolve, s.reject, !t), "pending" === s.state() || g(o[n] && o[n].then))) return s.then();
            for (; n--;) W(o[n], a(n), s.reject);
            return s.promise()
        }
    });
    var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    _.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && R.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, _.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    };
    var B = _.Deferred();

    function F() {
        i.removeEventListener("DOMContentLoaded", F), e.removeEventListener("load", F), _.ready()
    }
    _.fn.ready = function(e) {
        return B.then(e).catch(function(e) {
            _.readyException(e)
        }), this
    }, _.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --_.readyWait : _.isReady) || (_.isReady = !0) !== e && 0 < --_.readyWait || B.resolveWith(i, [_])
        }
    }), _.ready.then = B.then, "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? e.setTimeout(_.ready) : (i.addEventListener("DOMContentLoaded", F), e.addEventListener("load", F));
    var q = function(e, t, n, i, o, r, s) {
            var a = 0,
                l = e.length,
                c = null == n;
            if ("object" === b(n))
                for (a in o = !0, n) q(e, t, a, n[a], !0, r, s);
            else if (void 0 !== i && (o = !0, g(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                    return c.call(_(e), n)
                })), t))
                for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
        },
        V = /^-ms-/,
        X = /-([a-z])/g;

    function Y(e, t) {
        return t.toUpperCase()
    }

    function U(e) {
        return e.replace(V, "ms-").replace(X, Y)
    }
    var z = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function Q() {
        this.expando = _.expando + Q.uid++
    }
    Q.uid = 1, Q.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, z(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var i, o = this.cache(e);
            if ("string" == typeof t) o[U(t)] = n;
            else
                for (i in t) o[U(i)] = t[i];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][U(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(U) : (t = U(t)) in i ? [t] : t.match(M) || []).length;
                    for (; n--;) delete i[t[n]]
                }(void 0 === t || _.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !_.isEmptyObject(t)
        }
    };
    var K = new Q,
        G = new Q,
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        J = /[A-Z]/g;

    function ee(e, t, n) {
        var i, o;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                try {
                    n = "true" === (o = n) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : Z.test(o) ? JSON.parse(o) : o)
                } catch (e) {}
                G.set(e, t, n)
            } else n = void 0;
        return n
    }
    _.extend({
        hasData: function(e) {
            return G.hasData(e) || K.hasData(e)
        },
        data: function(e, t, n) {
            return G.access(e, t, n)
        },
        removeData: function(e, t) {
            G.remove(e, t)
        },
        _data: function(e, t, n) {
            return K.access(e, t, n)
        },
        _removeData: function(e, t) {
            K.remove(e, t)
        }
    }), _.fn.extend({
        data: function(e, t) {
            var n, i, o, r = this[0],
                s = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (o = G.get(r), 1 === r.nodeType && !K.get(r, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = U(i.slice(5)), ee(r, i, o[i]));
                    K.set(r, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                G.set(this, e)
            }) : q(this, function(t) {
                var n;
                if (r && void 0 === t) return void 0 !== (n = G.get(r, e)) ? n : void 0 !== (n = ee(r, e)) ? n : void 0;
                this.each(function() {
                    G.set(this, e, t)
                })
            }, null, t, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                G.remove(this, e)
            })
        }
    }), _.extend({
        queue: function(e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = K.get(e, t), n && (!i || Array.isArray(n) ? i = K.access(e, t, _.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = _.queue(e, t),
                i = n.length,
                o = n.shift(),
                r = _._queueHooks(e, t);
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, function() {
                _.dequeue(e, t)
            }, r)), !i && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return K.get(e, n) || K.access(e, n, {
                empty: _.Callbacks("once memory").add(function() {
                    K.remove(e, [t + "queue", n])
                })
            })
        }
    }), _.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? _.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = _.queue(this, e, t);
                _._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && _.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                _.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                o = _.Deferred(),
                r = this,
                s = this.length,
                a = function() {
                    --i || o.resolveWith(r, [r])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = K.get(r[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), o.promise(t)
        }
    });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
        ie = ["Top", "Right", "Bottom", "Left"],
        oe = i.documentElement,
        re = function(e) {
            return _.contains(e.ownerDocument, e)
        },
        se = {
            composed: !0
        };
    oe.getRootNode && (re = function(e) {
        return _.contains(e.ownerDocument, e) || e.getRootNode(se) === e.ownerDocument
    });
    var ae = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && re(e) && "none" === _.css(e, "display")
        },
        le = function(e, t, n, i) {
            var o, r, s = {};
            for (r in t) s[r] = e.style[r], e.style[r] = t[r];
            for (r in o = n.apply(e, i || []), t) e.style[r] = s[r];
            return o
        };

    function ce(e, t, n, i) {
        var o, r, s = 20,
            a = i ? function() {
                return i.cur()
            } : function() {
                return _.css(e, t, "")
            },
            l = a(),
            c = n && n[3] || (_.cssNumber[t] ? "" : "px"),
            u = e.nodeType && (_.cssNumber[t] || "px" !== c && +l) && ne.exec(_.css(e, t));
        if (u && u[3] !== c) {
            for (l /= 2, c = c || u[3], u = +l || 1; s--;) _.style(e, t, u + c), (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0), u /= r;
            u *= 2, _.style(e, t, u + c), n = n || []
        }
        return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o
    }
    var ue = {};

    function de(e, t) {
        for (var n, i, o, r, s, a, l, c = [], u = 0, d = e.length; u < d; u++)(i = e[u]).style && (n = i.style.display, t ? ("none" === n && (c[u] = K.get(i, "display") || null, c[u] || (i.style.display = "")), "" === i.style.display && ae(i) && (c[u] = (l = s = r = void 0, s = (o = i).ownerDocument, a = o.nodeName, (l = ue[a]) || (r = s.body.appendChild(s.createElement(a)), l = _.css(r, "display"), r.parentNode.removeChild(r), "none" === l && (l = "block"), ue[a] = l)))) : "none" !== n && (c[u] = "none", K.set(i, "display", n)));
        for (u = 0; u < d; u++) null != c[u] && (e[u].style.display = c[u]);
        return e
    }
    _.fn.extend({
        show: function() {
            return de(this, !0)
        },
        hide: function() {
            return de(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? _(this).show() : _(this).hide()
            })
        }
    });
    var he = /^(?:checkbox|radio)$/i,
        fe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        pe = /^$|^module$|\/(?:java|ecma)script/i,
        ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function me(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && O(e, t) ? _.merge([e], n) : n
    }

    function ve(e, t) {
        for (var n = 0, i = e.length; n < i; n++) K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"))
    }
    ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
    var ye, be, we = /<|&#?\w+;/;

    function _e(e, t, n, i, o) {
        for (var r, s, a, l, c, u, d = t.createDocumentFragment(), h = [], f = 0, p = e.length; f < p; f++)
            if ((r = e[f]) || 0 === r)
                if ("object" === b(r)) _.merge(h, r.nodeType ? [r] : r);
                else if (we.test(r)) {
            for (s = s || d.appendChild(t.createElement("div")), a = (fe.exec(r) || ["", ""])[1].toLowerCase(), l = ge[a] || ge._default, s.innerHTML = l[1] + _.htmlPrefilter(r) + l[2], u = l[0]; u--;) s = s.lastChild;
            _.merge(h, s.childNodes), (s = d.firstChild).textContent = ""
        } else h.push(t.createTextNode(r));
        for (d.textContent = "", f = 0; r = h[f++];)
            if (i && -1 < _.inArray(r, i)) o && o.push(r);
            else if (c = re(r), s = me(d.appendChild(r), "script"), c && ve(s), n)
            for (u = 0; r = s[u++];) pe.test(r.type || "") && n.push(r);
        return d
    }
    ye = i.createDocumentFragment().appendChild(i.createElement("div")), (be = i.createElement("input")).setAttribute("type", "radio"), be.setAttribute("checked", "checked"), be.setAttribute("name", "t"), ye.appendChild(be), p.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked, ye.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!ye.cloneNode(!0).lastChild.defaultValue;
    var Ce = /^key/,
        Se = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        xe = /^([^.]*)(?:\.(.+)|)/;

    function Te() {
        return !0
    }

    function Ee() {
        return !1
    }

    function ke(e, t) {
        return e === function() {
            try {
                return i.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function Oe(e, t, n, i, o, r) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (i = i || n, n = void 0), t) Oe(e, a, n, i, t[a], r);
            return e
        }
        if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = Ee;
        else if (!o) return e;
        return 1 === r && (s = o, (o = function(e) {
            return _().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = _.guid++)), e.each(function() {
            _.event.add(this, t, o, i, n)
        })
    }

    function Ae(e, t, n) {
        n ? (K.set(e, t, !1), _.event.add(e, t, {
            namespace: !1,
            handler: function(e) {
                var i, o, s = K.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (s.length)(_.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (s = r.call(arguments), K.set(this, t, s), i = n(this, t), this[t](), s !== (o = K.get(this, t)) || i ? K.set(this, t, !1) : o = {}, s !== o) return e.stopImmediatePropagation(), e.preventDefault(), o.value
                } else s.length && (K.set(this, t, {
                    value: _.event.trigger(_.extend(s[0], _.Event.prototype), s.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === K.get(e, t) && _.event.add(e, t, Te)
    }
    _.event = {
        global: {},
        add: function(e, t, n, i, o) {
            var r, s, a, l, c, u, d, h, f, p, g, m = K.get(e);
            if (m)
                for (n.handler && (n = (r = n).handler, o = r.selector), o && _.find.matchesSelector(oe, o), n.guid || (n.guid = _.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function(t) {
                        return void 0 !== _ && _.event.triggered !== t.type ? _.event.dispatch.apply(e, arguments) : void 0
                    }), c = (t = (t || "").match(M) || [""]).length; c--;) f = g = (a = xe.exec(t[c]) || [])[1], p = (a[2] || "").split(".").sort(), f && (d = _.event.special[f] || {}, f = (o ? d.delegateType : d.bindType) || f, d = _.event.special[f] || {}, u = _.extend({
                    type: f,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && _.expr.match.needsContext.test(o),
                    namespace: p.join(".")
                }, r), (h = l[f]) || ((h = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, p, s) || e.addEventListener && e.addEventListener(f, s)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, u) : h.push(u), _.event.global[f] = !0)
        },
        remove: function(e, t, n, i, o) {
            var r, s, a, l, c, u, d, h, f, p, g, m = K.hasData(e) && K.get(e);
            if (m && (l = m.events)) {
                for (c = (t = (t || "").match(M) || [""]).length; c--;)
                    if (f = g = (a = xe.exec(t[c]) || [])[1], p = (a[2] || "").split(".").sort(), f) {
                        for (d = _.event.special[f] || {}, h = l[f = (i ? d.delegateType : d.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = h.length; r--;) u = h[r], !o && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (h.splice(r, 1), u.selector && h.delegateCount--, d.remove && d.remove.call(e, u));
                        s && !h.length && (d.teardown && !1 !== d.teardown.call(e, p, m.handle) || _.removeEvent(e, f, m.handle), delete l[f])
                    } else
                        for (f in l) _.event.remove(e, f + t[c], n, i, !0);
                _.isEmptyObject(l) && K.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, o, r, s, a = _.event.fix(e),
                l = new Array(arguments.length),
                c = (K.get(this, "events") || {})[a.type] || [],
                u = _.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                for (s = _.event.handlers.call(this, a, c), t = 0;
                    (o = s[t++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = o.elem, n = 0;
                        (r = o.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !1 !== r.namespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r, a.data = r.data, void 0 !== (i = ((_.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(e, t) {
            var n, i, o, r, s, a = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (r = [], s = {}, n = 0; n < l; n++) void 0 === s[o = (i = t[n]).selector + " "] && (s[o] = i.needsContext ? -1 < _(o, this).index(c) : _.find(o, this, null, [c]).length), s[o] && r.push(i);
                        r.length && a.push({
                            elem: c,
                            handlers: r
                        })
                    }
            return c = this, l < t.length && a.push({
                elem: c,
                handlers: t.slice(l)
            }), a
        },
        addProp: function(e, t) {
            Object.defineProperty(_.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: g(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[_.expando] ? e : new _.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return he.test(t.type) && t.click && O(t, "input") && Ae(t, "click", Te), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return he.test(t.type) && t.click && O(t, "input") && Ae(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return he.test(t.type) && t.click && O(t, "input") && K.get(t, "click") || O(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, _.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, _.Event = function(e, t) {
        if (!(this instanceof _.Event)) return new _.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Te : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && _.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[_.expando] = !0
    }, _.Event.prototype = {
        constructor: _.Event,
        isDefaultPrevented: Ee,
        isPropagationStopped: Ee,
        isImmediatePropagationStopped: Ee,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Te, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Te, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Te, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, _.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Ce.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Se.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, _.event.addProp), _.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        _.event.special[e] = {
            setup: function() {
                return Ae(this, e, ke), !1
            },
            trigger: function() {
                return Ae(this, e), !0
            },
            delegateType: t
        }
    }), _.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        _.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = e.relatedTarget,
                    o = e.handleObj;
                return i && (i === this || _.contains(this, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), _.fn.extend({
        on: function(e, t, n, i) {
            return Oe(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return Oe(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, _(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each(function() {
                _.event.remove(this, e, n, t)
            })
        }
    });
    var De = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Pe = /<script|<style|<link/i,
        Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Ie(e, t) {
        return O(e, "table") && O(11 !== t.nodeType ? t : t.firstChild, "tr") && _(e).children("tbody")[0] || e
    }

    function $e(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Me(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function je(e, t) {
        var n, i, o, r, s, a, l, c;
        if (1 === t.nodeType) {
            if (K.hasData(e) && (r = K.access(e), s = K.set(t, r), c = r.events))
                for (o in delete s.handle, s.events = {}, c)
                    for (n = 0, i = c[o].length; n < i; n++) _.event.add(t, o, c[o][n]);
            G.hasData(e) && (a = G.access(e), l = _.extend({}, a), G.set(t, l))
        }
    }

    function He(e, t, n, i) {
        t = s.apply([], t);
        var o, r, a, l, c, u, d = 0,
            h = e.length,
            f = h - 1,
            m = t[0],
            v = g(m);
        if (v || 1 < h && "string" == typeof m && !p.checkClone && Le.test(m)) return e.each(function(o) {
            var r = e.eq(o);
            v && (t[0] = m.call(this, o, r.html())), He(r, t, n, i)
        });
        if (h && (r = (o = _e(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === o.childNodes.length && (o = r), r || i)) {
            for (l = (a = _.map(me(o, "script"), $e)).length; d < h; d++) c = o, d !== f && (c = _.clone(c, !0, !0), l && _.merge(a, me(c, "script"))), n.call(e[d], c, d);
            if (l)
                for (u = a[a.length - 1].ownerDocument, _.map(a, Me), d = 0; d < l; d++) c = a[d], pe.test(c.type || "") && !K.access(c, "globalEval") && _.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? _._evalUrl && !c.noModule && _._evalUrl(c.src, {
                    nonce: c.nonce || c.getAttribute("nonce")
                }) : y(c.textContent.replace(Ne, ""), c, u))
        }
        return e
    }

    function We(e, t, n) {
        for (var i, o = t ? _.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || _.cleanData(me(i)), i.parentNode && (n && re(i) && ve(me(i, "script")), i.parentNode.removeChild(i));
        return e
    }
    _.extend({
        htmlPrefilter: function(e) {
            return e.replace(De, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, o, r, s, a, l, c, u = e.cloneNode(!0),
                d = re(e);
            if (!(p.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || _.isXMLDoc(e)))
                for (s = me(u), i = 0, o = (r = me(e)).length; i < o; i++) a = r[i], "input" === (c = (l = s[i]).nodeName.toLowerCase()) && he.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (r = r || me(e), s = s || me(u), i = 0, o = r.length; i < o; i++) je(r[i], s[i]);
                else je(e, u);
            return 0 < (s = me(u, "script")).length && ve(s, !d && me(e, "script")), u
        },
        cleanData: function(e) {
            for (var t, n, i, o = _.event.special, r = 0; void 0 !== (n = e[r]); r++)
                if (z(n)) {
                    if (t = n[K.expando]) {
                        if (t.events)
                            for (i in t.events) o[i] ? _.event.remove(n, i) : _.removeEvent(n, i, t.handle);
                        n[K.expando] = void 0
                    }
                    n[G.expando] && (n[G.expando] = void 0)
                }
        }
    }), _.fn.extend({
        detach: function(e) {
            return We(this, e, !0)
        },
        remove: function(e) {
            return We(this, e)
        },
        text: function(e) {
            return q(this, function(e) {
                return void 0 === e ? _.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return He(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ie(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return He(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Ie(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return He(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return He(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (_.cleanData(me(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return _.clone(this, e, t)
            })
        },
        html: function(e) {
            return q(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Pe.test(e) && !ge[(fe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = _.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (_.cleanData(me(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return He(this, arguments, function(t) {
                var n = this.parentNode;
                _.inArray(this, e) < 0 && (_.cleanData(me(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), _.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        _.fn[e] = function(e) {
            for (var n, i = [], o = _(e), r = o.length - 1, s = 0; s <= r; s++) n = s === r ? this : this.clone(!0), _(o[s])[t](n), a.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Re = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
        Be = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        Fe = new RegExp(ie.join("|"), "i");

    function qe(e, t, n) {
        var i, o, r, s, a = e.style;
        return (n = n || Be(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || re(e) || (s = _.style(e, t)), !p.pixelBoxStyles() && Re.test(s) && Fe.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
    }

    function Ve(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function t() {
            if (u) {
                c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", oe.appendChild(c).appendChild(u);
                var t = e.getComputedStyle(u);
                o = "1%" !== t.top, l = 12 === n(t.marginLeft), u.style.right = "60%", a = 36 === n(t.right), r = 36 === n(t.width), u.style.position = "absolute", s = 12 === n(u.offsetWidth / 3), oe.removeChild(c), u = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }
        var o, r, s, a, l, c = i.createElement("div"),
            u = i.createElement("div");
        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === u.style.backgroundClip, _.extend(p, {
            boxSizingReliable: function() {
                return t(), r
            },
            pixelBoxStyles: function() {
                return t(), a
            },
            pixelPosition: function() {
                return t(), o
            },
            reliableMarginLeft: function() {
                return t(), l
            },
            scrollboxSize: function() {
                return t(), s
            }
        }))
    }();
    var Xe = ["Webkit", "Moz", "ms"],
        Ye = i.createElement("div").style,
        Ue = {};

    function ze(e) {
        return _.cssProps[e] || Ue[e] || (e in Ye ? e : Ue[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = Xe.length; n--;)
                if ((e = Xe[n] + t) in Ye) return e
        }(e) || e)
    }
    var Qe = /^(none|table(?!-c[ea]).+)/,
        Ke = /^--/,
        Ge = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ze = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Je(e, t, n) {
        var i = ne.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function et(e, t, n, i, o, r) {
        var s = "width" === t ? 1 : 0,
            a = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === n && (l += _.css(e, n + ie[s], !0, o)), i ? ("content" === n && (l -= _.css(e, "padding" + ie[s], !0, o)), "margin" !== n && (l -= _.css(e, "border" + ie[s] + "Width", !0, o))) : (l += _.css(e, "padding" + ie[s], !0, o), "padding" !== n ? l += _.css(e, "border" + ie[s] + "Width", !0, o) : a += _.css(e, "border" + ie[s] + "Width", !0, o));
        return !i && 0 <= r && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - .5)) || 0), l
    }

    function tt(e, t, n) {
        var i = Be(e),
            o = (!p.boxSizingReliable() || n) && "border-box" === _.css(e, "boxSizing", !1, i),
            r = o,
            s = qe(e, t, i),
            a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Re.test(s)) {
            if (!n) return s;
            s = "auto"
        }
        return (!p.boxSizingReliable() && o || "auto" === s || !parseFloat(s) && "inline" === _.css(e, "display", !1, i)) && e.getClientRects().length && (o = "border-box" === _.css(e, "boxSizing", !1, i), (r = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + et(e, t, n || (o ? "border" : "content"), r, i, s) + "px"
    }

    function nt(e, t, n, i, o) {
        return new nt.prototype.init(e, t, n, i, o)
    }
    _.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = qe(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, s, a = U(t),
                    l = Ke.test(t),
                    c = e.style;
                if (l || (t = ze(a)), s = _.cssHooks[t] || _.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t];
                "string" == (r = typeof n) && (o = ne.exec(n)) && o[1] && (n = ce(e, t, o), r = "number"), null != n && n == n && ("number" !== r || l || (n += o && o[3] || (_.cssNumber[a] ? "" : "px")), p.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
            }
        },
        css: function(e, t, n, i) {
            var o, r, s, a = U(t);
            return Ke.test(t) || (t = ze(a)), (s = _.cssHooks[t] || _.cssHooks[a]) && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = qe(e, t, i)), "normal" === o && t in Ze && (o = Ze[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
        }
    }), _.each(["height", "width"], function(e, t) {
        _.cssHooks[t] = {
            get: function(e, n, i) {
                if (n) return !Qe.test(_.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, t, i) : le(e, Ge, function() {
                    return tt(e, t, i)
                })
            },
            set: function(e, n, i) {
                var o, r = Be(e),
                    s = !p.scrollboxSize() && "absolute" === r.position,
                    a = (s || i) && "border-box" === _.css(e, "boxSizing", !1, r),
                    l = i ? et(e, t, i, a, r) : 0;
                return a && s && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - et(e, t, "border", !1, r) - .5)), l && (o = ne.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = _.css(e, t)), Je(0, n, l)
            }
        }
    }), _.cssHooks.marginLeft = Ve(p.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(qe(e, "marginLeft")) || e.getBoundingClientRect().left - le(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), _.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        _.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[e + ie[i] + t] = r[i] || r[i - 2] || r[0];
                return o
            }
        }, "margin" !== e && (_.cssHooks[e + t].set = Je)
    }), _.fn.extend({
        css: function(e, t) {
            return q(this, function(e, t, n) {
                var i, o, r = {},
                    s = 0;
                if (Array.isArray(t)) {
                    for (i = Be(e), o = t.length; s < o; s++) r[t[s]] = _.css(e, t[s], !1, i);
                    return r
                }
                return void 0 !== n ? _.style(e, t, n) : _.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((_.Tween = nt).prototype = {
        constructor: nt,
        init: function(e, t, n, i, o, r) {
            this.elem = e, this.prop = n, this.easing = o || _.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (_.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = nt.propHooks[this.prop];
            return e && e.get ? e.get(this) : nt.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = nt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = _.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this
        }
    }).init.prototype = nt.prototype, (nt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = _.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                _.fx.step[e.prop] ? _.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !_.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)] ? e.elem[e.prop] = e.now : _.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = nt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, _.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, _.fx = nt.prototype.init, _.fx.step = {};
    var it, ot, rt, st, at = /^(?:toggle|show|hide)$/,
        lt = /queueHooks$/;

    function ct() {
        ot && (!1 === i.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(ct) : e.setTimeout(ct, _.fx.interval), _.fx.tick())
    }

    function ut() {
        return e.setTimeout(function() {
            it = void 0
        }), it = Date.now()
    }

    function dt(e, t) {
        var n, i = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = ie[i])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }

    function ht(e, t, n) {
        for (var i, o = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), r = 0, s = o.length; r < s; r++)
            if (i = o[r].call(n, t, e)) return i
    }

    function ft(e, t, n) {
        var i, o, r = 0,
            s = ft.prefilters.length,
            a = _.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o) return !1;
                for (var t = it || ut(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), r = 0, s = c.tweens.length; r < s; r++) c.tweens[r].run(i);
                return a.notifyWith(e, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
            },
            c = a.promise({
                elem: e,
                props: _.extend({}, t),
                opts: _.extend(!0, {
                    specialEasing: {},
                    easing: _.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: it || ut(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = _.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; n < i; n++) c.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (function(e, t) {
                var n, i, o, r, s;
                for (n in e)
                    if (o = t[i = U(n)], r = e[n], Array.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (s = _.cssHooks[i]) && "expand" in s)
                        for (n in r = s.expand(r), delete e[i], r) n in e || (e[n] = r[n], t[n] = o);
                    else t[i] = o
            }(u, c.opts.specialEasing); r < s; r++)
            if (i = ft.prefilters[r].call(c, e, u, c.opts)) return g(i.stop) && (_._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
        return _.map(u, ht, c), g(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), _.fx.timer(_.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c
    }
    _.Animation = _.extend(ft, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return ce(n.elem, e, ne.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            g(e) ? (t = e, e = ["*"]) : e = e.match(M);
            for (var n, i = 0, o = e.length; i < o; i++) n = e[i], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var i, o, r, s, a, l, c, u, d = "width" in t || "height" in t,
                h = this,
                f = {},
                p = e.style,
                g = e.nodeType && ae(e),
                m = K.get(e, "fxshow");
            for (i in n.queue || (null == (s = _._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                    s.unqueued || a()
                }), s.unqueued++, h.always(function() {
                    h.always(function() {
                        s.unqueued--, _.queue(e, "fx").length || s.empty.fire()
                    })
                })), t)
                if (o = t[i], at.test(o)) {
                    if (delete t[i], r = r || "toggle" === o, o === (g ? "hide" : "show")) {
                        if ("show" !== o || !m || void 0 === m[i]) continue;
                        g = !0
                    }
                    f[i] = m && m[i] || _.style(e, i)
                }
            if ((l = !_.isEmptyObject(t)) || !_.isEmptyObject(f))
                for (i in d && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = m && m.display) && (c = K.get(e, "display")), "none" === (u = _.css(e, "display")) && (c ? u = c : (de([e], !0), c = e.style.display || c, u = _.css(e, "display"), de([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === _.css(e, "float") && (l || (h.done(function() {
                        p.display = c
                    }), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always(function() {
                        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                    })), l = !1, f) l || (m ? "hidden" in m && (g = m.hidden) : m = K.access(e, "fxshow", {
                    display: c
                }), r && (m.hidden = !g), g && de([e], !0), h.done(function() {
                    for (i in g || de([e]), K.remove(e, "fxshow"), f) _.style(e, i, f[i])
                })), l = ht(g ? m[i] : 0, i, h), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
        }],
        prefilter: function(e, t) {
            t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
        }
    }), _.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? _.extend({}, e) : {
            complete: n || !n && t || g(e) && e,
            duration: e,
            easing: n && t || t && !g(t) && t
        };
        return _.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in _.fx.speeds ? i.duration = _.fx.speeds[i.duration] : i.duration = _.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            g(i.old) && i.old.call(this), i.queue && _.dequeue(this, i.queue)
        }, i
    }, _.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(e, t, n, i) {
            var o = _.isEmptyObject(e),
                r = _.speed(t, n, i),
                s = function() {
                    var t = ft(this, _.extend({}, e), r);
                    (o || K.get(this, "finish")) && t.stop(!0)
                };
            return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
        },
        stop: function(e, t, n) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    o = null != e && e + "queueHooks",
                    r = _.timers,
                    s = K.get(this);
                if (o) s[o] && s[o].stop && i(s[o]);
                else
                    for (o in s) s[o] && s[o].stop && lt.test(o) && i(s[o]);
                for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
                !t && n || _.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"), this.each(function() {
                var t, n = K.get(this),
                    i = n[e + "queue"],
                    o = n[e + "queueHooks"],
                    r = _.timers,
                    s = i ? i.length : 0;
                for (n.finish = !0, _.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }), _.each(["toggle", "show", "hide"], function(e, t) {
        var n = _.fn[t];
        _.fn[t] = function(e, i, o) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(dt(t, !0), e, i, o)
        }
    }), _.each({
        slideDown: dt("show"),
        slideUp: dt("hide"),
        slideToggle: dt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        _.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i)
        }
    }), _.timers = [], _.fx.tick = function() {
        var e, t = 0,
            n = _.timers;
        for (it = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || _.fx.stop(), it = void 0
    }, _.fx.timer = function(e) {
        _.timers.push(e), _.fx.start()
    }, _.fx.interval = 13, _.fx.start = function() {
        ot || (ot = !0, ct())
    }, _.fx.stop = function() {
        ot = null
    }, _.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, _.fn.delay = function(t, n) {
        return t = _.fx && _.fx.speeds[t] || t, n = n || "fx", this.queue(n, function(n, i) {
            var o = e.setTimeout(n, t);
            i.stop = function() {
                e.clearTimeout(o)
            }
        })
    }, rt = i.createElement("input"), st = i.createElement("select").appendChild(i.createElement("option")), rt.type = "checkbox", p.checkOn = "" !== rt.value, p.optSelected = st.selected, (rt = i.createElement("input")).value = "t", rt.type = "radio", p.radioValue = "t" === rt.value;
    var pt, gt = _.expr.attrHandle;
    _.fn.extend({
        attr: function(e, t) {
            return q(this, _.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                _.removeAttr(this, e)
            })
        }
    }), _.extend({
        attr: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? _.prop(e, t, n) : (1 === r && _.isXMLDoc(e) || (o = _.attrHooks[t.toLowerCase()] || (_.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void _.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : null == (i = _.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!p.radioValue && "radio" === t && O(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0,
                o = t && t.match(M);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) e.removeAttribute(n)
        }
    }), pt = {
        set: function(e, t, n) {
            return !1 === t ? _.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, _.each(_.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = gt[t] || _.find.attr;
        gt[t] = function(e, t, i) {
            var o, r, s = t.toLowerCase();
            return i || (r = gt[s], gt[s] = o, o = null != n(e, t, i) ? s : null, gt[s] = r), o
        }
    });
    var mt = /^(?:input|select|textarea|button)$/i,
        vt = /^(?:a|area)$/i;

    function yt(e) {
        return (e.match(M) || []).join(" ")
    }

    function bt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function wt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(M) || []
    }
    _.fn.extend({
        prop: function(e, t) {
            return q(this, _.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[_.propFix[e] || e]
            })
        }
    }), _.extend({
        prop: function(e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && _.isXMLDoc(e) || (t = _.propFix[t] || t, o = _.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = _.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : mt.test(e.nodeName) || vt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), p.optSelected || (_.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        _.propFix[this.toLowerCase()] = this
    }), _.fn.extend({
        addClass: function(e) {
            var t, n, i, o, r, s, a, l = 0;
            if (g(e)) return this.each(function(t) {
                _(this).addClass(e.call(this, t, bt(this)))
            });
            if ((t = wt(e)).length)
                for (; n = this[l++];)
                    if (o = bt(n), i = 1 === n.nodeType && " " + yt(o) + " ") {
                        for (s = 0; r = t[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        o !== (a = yt(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, o, r, s, a, l = 0;
            if (g(e)) return this.each(function(t) {
                _(this).removeClass(e.call(this, t, bt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((t = wt(e)).length)
                for (; n = this[l++];)
                    if (o = bt(n), i = 1 === n.nodeType && " " + yt(o) + " ") {
                        for (s = 0; r = t[s++];)
                            for (; - 1 < i.indexOf(" " + r + " ");) i = i.replace(" " + r + " ", " ");
                        o !== (a = yt(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                i = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function(n) {
                _(this).toggleClass(e.call(this, n, bt(this), t), t)
            }) : this.each(function() {
                var t, o, r, s;
                if (i)
                    for (o = 0, r = _(this), s = wt(e); t = s[o++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else void 0 !== e && "boolean" !== n || ((t = bt(this)) && K.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : K.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && -1 < (" " + yt(bt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var _t = /\r/g;
    _.fn.extend({
        val: function(e) {
            var t, n, i, o = this[0];
            return arguments.length ? (i = g(e), this.each(function(n) {
                var o;
                1 === this.nodeType && (null == (o = i ? e.call(this, n, _(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = _.map(o, function(e) {
                    return null == e ? "" : e + ""
                })), (t = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            })) : o ? (t = _.valHooks[o.type] || _.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof(n = o.value) ? n.replace(_t, "") : null == n ? "" : n : void 0
        }
    }), _.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = _.find.attr(e, "value");
                    return null != t ? t : yt(_.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, o = e.options,
                        r = e.selectedIndex,
                        s = "select-one" === e.type,
                        a = s ? null : [],
                        l = s ? r + 1 : o.length;
                    for (i = r < 0 ? l : s ? r : 0; i < l; i++)
                        if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !O(n.parentNode, "optgroup"))) {
                            if (t = _(n).val(), s) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, i, o = e.options, r = _.makeArray(t), s = o.length; s--;)((i = o[s]).selected = -1 < _.inArray(_.valHooks.option.get(i), r)) && (n = !0);
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }), _.each(["radio", "checkbox"], function() {
        _.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < _.inArray(_(e).val(), t)
            }
        }, p.checkOn || (_.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), p.focusin = "onfocusin" in e;
    var Ct = /^(?:focusinfocus|focusoutblur)$/,
        St = function(e) {
            e.stopPropagation()
        };
    _.extend(_.event, {
        trigger: function(t, n, o, r) {
            var s, a, l, c, u, h, f, p, v = [o || i],
                y = d.call(t, "type") ? t.type : t,
                b = d.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = p = l = o = o || i, 3 !== o.nodeType && 8 !== o.nodeType && !Ct.test(y + _.event.triggered) && (-1 < y.indexOf(".") && (y = (b = y.split(".")).shift(), b.sort()), u = y.indexOf(":") < 0 && "on" + y, (t = t[_.expando] ? t : new _.Event(y, "object" == typeof t && t)).isTrigger = r ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = o), n = null == n ? [t] : _.makeArray(n, [t]), f = _.event.special[y] || {}, r || !f.trigger || !1 !== f.trigger.apply(o, n))) {
                if (!r && !f.noBubble && !m(o)) {
                    for (c = f.delegateType || y, Ct.test(c + y) || (a = a.parentNode); a; a = a.parentNode) v.push(a), l = a;
                    l === (o.ownerDocument || i) && v.push(l.defaultView || l.parentWindow || e)
                }
                for (s = 0;
                    (a = v[s++]) && !t.isPropagationStopped();) p = a, t.type = 1 < s ? c : f.bindType || y, (h = (K.get(a, "events") || {})[t.type] && K.get(a, "handle")) && h.apply(a, n), (h = u && a[u]) && h.apply && z(a) && (t.result = h.apply(a, n), !1 === t.result && t.preventDefault());
                return t.type = y, r || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(v.pop(), n) || !z(o) || u && g(o[y]) && !m(o) && ((l = o[u]) && (o[u] = null), _.event.triggered = y, t.isPropagationStopped() && p.addEventListener(y, St), o[y](), t.isPropagationStopped() && p.removeEventListener(y, St), _.event.triggered = void 0, l && (o[u] = l)), t.result
            }
        },
        simulate: function(e, t, n) {
            var i = _.extend(new _.Event, n, {
                type: e,
                isSimulated: !0
            });
            _.event.trigger(i, null, t)
        }
    }), _.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                _.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return _.event.trigger(e, t, n, !0)
        }
    }), p.focusin || _.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            _.event.simulate(t, e.target, _.event.fix(e))
        };
        _.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    o = K.access(i, t);
                o || i.addEventListener(e, n, !0), K.access(i, t, (o || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    o = K.access(i, t) - 1;
                o ? K.access(i, t, o) : (i.removeEventListener(e, n, !0), K.remove(i, t))
            }
        }
    });
    var xt = e.location,
        Tt = Date.now(),
        Et = /\?/;
    _.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || _.error("Invalid XML: " + t), n
    };
    var kt = /\[\]$/,
        Ot = /\r?\n/g,
        At = /^(?:submit|button|image|reset|file)$/i,
        Dt = /^(?:input|select|textarea|keygen)/i;

    function Pt(e, t, n, i) {
        var o;
        if (Array.isArray(t)) _.each(t, function(t, o) {
            n || kt.test(e) ? i(e, o) : Pt(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
        });
        else if (n || "object" !== b(t)) i(e, t);
        else
            for (o in t) Pt(e + "[" + o + "]", t[o], n, i)
    }
    _.param = function(e, t) {
        var n, i = [],
            o = function(e, t) {
                var n = g(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !_.isPlainObject(e)) _.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (n in e) Pt(n, e[n], t, o);
        return i.join("&")
    }, _.fn.extend({
        serialize: function() {
            return _.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = _.prop(this, "elements");
                return e ? _.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !_(this).is(":disabled") && Dt.test(this.nodeName) && !At.test(e) && (this.checked || !he.test(e))
            }).map(function(e, t) {
                var n = _(this).val();
                return null == n ? null : Array.isArray(n) ? _.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Ot, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Ot, "\r\n")
                }
            }).get()
        }
    });
    var Lt = /%20/g,
        Nt = /#.*$/,
        It = /([?&])_=[^&]*/,
        $t = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Mt = /^(?:GET|HEAD)$/,
        jt = /^\/\//,
        Ht = {},
        Wt = {},
        Rt = "*/".concat("*"),
        Bt = i.createElement("a");

    function Ft(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, o = 0,
                r = t.toLowerCase().match(M) || [];
            if (g(n))
                for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function qt(e, t, n, i) {
        var o = {},
            r = e === Wt;

        function s(a) {
            var l;
            return o[a] = !0, _.each(e[a] || [], function(e, a) {
                var c = a(t, n, i);
                return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (t.dataTypes.unshift(c), s(c), !1)
            }), l
        }
        return s(t.dataTypes[0]) || !o["*"] && s("*")
    }

    function Vt(e, t) {
        var n, i, o = _.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && _.extend(!0, e, i), e
    }
    Bt.href = xt.href, _.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: xt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Rt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": _.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Vt(Vt(e, _.ajaxSettings), t) : Vt(_.ajaxSettings, e)
        },
        ajaxPrefilter: Ft(Ht),
        ajaxTransport: Ft(Wt),
        ajax: function(t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var o, r, s, a, l, c, u, d, h, f, p = _.ajaxSetup({}, n),
                g = p.context || p,
                m = p.context && (g.nodeType || g.jquery) ? _(g) : _.event,
                v = _.Deferred(),
                y = _.Callbacks("once memory"),
                b = p.statusCode || {},
                w = {},
                C = {},
                S = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (u) {
                            if (!a)
                                for (a = {}; t = $t.exec(s);) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = a[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return u ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == u && (e = C[e.toLowerCase()] = C[e.toLowerCase()] || e, w[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == u && (p.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (u) x.always(e[x.status]);
                            else
                                for (t in e) b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || S;
                        return o && o.abort(t), T(0, t), this
                    }
                };
            if (v.promise(x), p.url = ((t || p.url || xt.href) + "").replace(jt, xt.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(M) || [""], null == p.crossDomain) {
                c = i.createElement("a");
                try {
                    c.href = p.url, c.href = c.href, p.crossDomain = Bt.protocol + "//" + Bt.host != c.protocol + "//" + c.host
                } catch (t) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = _.param(p.data, p.traditional)), qt(Ht, p, n, x), u) return x;
            for (h in (d = _.event && p.global) && 0 == _.active++ && _.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Mt.test(p.type), r = p.url.replace(Nt, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Lt, "+")) : (f = p.url.slice(r.length), p.data && (p.processData || "string" == typeof p.data) && (r += (Et.test(r) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (r = r.replace(It, "$1"), f = (Et.test(r) ? "&" : "?") + "_=" + Tt++ + f), p.url = r + f), p.ifModified && (_.lastModified[r] && x.setRequestHeader("If-Modified-Since", _.lastModified[r]), _.etag[r] && x.setRequestHeader("If-None-Match", _.etag[r])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && x.setRequestHeader("Content-Type", p.contentType), x.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : p.accepts["*"]), p.headers) x.setRequestHeader(h, p.headers[h]);
            if (p.beforeSend && (!1 === p.beforeSend.call(g, x, p) || u)) return x.abort();
            if (S = "abort", y.add(p.complete), x.done(p.success), x.fail(p.error), o = qt(Wt, p, n, x)) {
                if (x.readyState = 1, d && m.trigger("ajaxSend", [x, p]), u) return x;
                p.async && 0 < p.timeout && (l = e.setTimeout(function() {
                    x.abort("timeout")
                }, p.timeout));
                try {
                    u = !1, o.send(w, T)
                } catch (t) {
                    if (u) throw t;
                    T(-1, t)
                }
            } else T(-1, "No Transport");

            function T(t, n, i, a) {
                var c, h, f, w, C, S = n;
                u || (u = !0, l && e.clearTimeout(l), o = void 0, s = a || "", x.readyState = 0 < t ? 4 : 0, c = 200 <= t && t < 300 || 304 === t, i && (w = function(e, t, n) {
                    for (var i, o, r, s, a = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (o in a)
                            if (a[o] && a[o].test(i)) {
                                l.unshift(o);
                                break
                            }
                    if (l[0] in n) r = l[0];
                    else {
                        for (o in n) {
                            if (!l[0] || e.converters[o + " " + l[0]]) {
                                r = o;
                                break
                            }
                            s || (s = o)
                        }
                        r = r || s
                    }
                    if (r) return r !== l[0] && l.unshift(r), n[r]
                }(p, x, i)), w = function(e, t, n, i) {
                    var o, r, s, a, l, c = {},
                        u = e.dataTypes.slice();
                    if (u[1])
                        for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                    for (r = u.shift(); r;)
                        if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
                            if ("*" === r) r = l;
                            else if ("*" !== l && l !== r) {
                        if (!(s = c[l + " " + r] || c["* " + r]))
                            for (o in c)
                                if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                    !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], u.unshift(a[1]));
                                    break
                                }
                        if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else try {
                                t = s(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: s ? e : "No conversion from " + l + " to " + r
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(p, w, x, c), c ? (p.ifModified && ((C = x.getResponseHeader("Last-Modified")) && (_.lastModified[r] = C), (C = x.getResponseHeader("etag")) && (_.etag[r] = C)), 204 === t || "HEAD" === p.type ? S = "nocontent" : 304 === t ? S = "notmodified" : (S = w.state, h = w.data, c = !(f = w.error))) : (f = S, !t && S || (S = "error", t < 0 && (t = 0))), x.status = t, x.statusText = (n || S) + "", c ? v.resolveWith(g, [h, S, x]) : v.rejectWith(g, [x, S, f]), x.statusCode(b), b = void 0, d && m.trigger(c ? "ajaxSuccess" : "ajaxError", [x, p, c ? h : f]), y.fireWith(g, [x, S]), d && (m.trigger("ajaxComplete", [x, p]), --_.active || _.event.trigger("ajaxStop")))
            }
            return x
        },
        getJSON: function(e, t, n) {
            return _.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return _.get(e, void 0, t, "script")
        }
    }), _.each(["get", "post"], function(e, t) {
        _[t] = function(e, n, i, o) {
            return g(n) && (o = o || i, i = n, n = void 0), _.ajax(_.extend({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: i
            }, _.isPlainObject(e) && e))
        }
    }), _._evalUrl = function(e, t) {
        return _.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                _.globalEval(e, t)
            }
        })
    }, _.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (g(e) && (e = e.call(this[0])), t = _(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(e) {
            return g(e) ? this.each(function(t) {
                _(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = _(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = g(e);
            return this.each(function(n) {
                _(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                _(this).replaceWith(this.childNodes)
            }), this
        }
    }), _.expr.pseudos.hidden = function(e) {
        return !_.expr.pseudos.visible(e)
    }, _.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, _.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Xt = {
            0: 200,
            1223: 204
        },
        Yt = _.ajaxSettings.xhr();
    p.cors = !!Yt && "withCredentials" in Yt, p.ajax = Yt = !!Yt, _.ajaxTransport(function(t) {
        var n, i;
        if (p.cors || Yt && !t.crossDomain) return {
            send: function(o, r) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (s in t.xhrFields) a[s] = t.xhrFields[s];
                for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) a.setRequestHeader(s, o[s]);
                n = function(e) {
                    return function() {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Xt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), i = a.onerror = a.ontimeout = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                    4 === a.readyState && e.setTimeout(function() {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                } catch (o) {
                    if (n) throw o
                }
            },
            abort: function() {
                n && n()
            }
        }
    }), _.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), _.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return _.globalEval(e), e
            }
        }
    }), _.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), _.ajaxTransport("script", function(e) {
        var t, n;
        if (e.crossDomain || e.scriptAttrs) return {
            send: function(o, r) {
                t = _("<script>").attr(e.scriptAttrs || {}).prop({
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", n = function(e) {
                    t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                }), i.head.appendChild(t[0])
            },
            abort: function() {
                n && n()
            }
        }
    });
    var Ut, zt = [],
        Qt = /(=)\?(?=&|$)|\?\?/;
    _.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = zt.pop() || _.expando + "_" + Tt++;
            return this[e] = !0, e
        }
    }), _.ajaxPrefilter("json jsonp", function(t, n, i) {
        var o, r, s, a = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return o = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Qt, "$1" + o) : !1 !== t.jsonp && (t.url += (Et.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
            return s || _.error(o + " was not called"), s[0]
        }, t.dataTypes[0] = "json", r = e[o], e[o] = function() {
            s = arguments
        }, i.always(function() {
            void 0 === r ? _(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, zt.push(o)), s && g(r) && r(s[0]), s = r = void 0
        }), "script"
    }), p.createHTMLDocument = ((Ut = i.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), _.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (p.createHTMLDocument ? ((o = (t = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href, t.head.appendChild(o)) : t = i), s = !n && [], (r = A.exec(e)) ? [t.createElement(r[1])] : (r = _e([e], t, s), s && s.length && _(s).remove(), _.merge([], r.childNodes)));
        var o, r, s
    }, _.fn.load = function(e, t, n) {
        var i, o, r, s = this,
            a = e.indexOf(" ");
        return -1 < a && (i = yt(e.slice(a)), e = e.slice(0, a)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < s.length && _.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments, s.html(i ? _("<div>").append(_.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, r || [e.responseText, t, e])
            })
        }), this
    }, _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        _.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), _.expr.pseudos.animated = function(e) {
        return _.grep(_.timers, function(t) {
            return e === t.elem
        }).length
    }, _.offset = {
        setOffset: function(e, t, n) {
            var i, o, r, s, a, l, c = _.css(e, "position"),
                u = _(e),
                d = {};
            "static" === c && (e.style.position = "relative"), a = u.offset(), r = _.css(e, "top"), l = _.css(e, "left"), ("absolute" === c || "fixed" === c) && -1 < (r + l).indexOf("auto") ? (s = (i = u.position()).top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), g(t) && (t = t.call(e, n, _.extend({}, a))), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + o), "using" in t ? t.using.call(e, d) : u.css(d)
        }
    }, _.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                _.offset.setOffset(this, e, t)
            });
            var t, n, i = this[0];
            return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, i = this[0],
                    o = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === _.css(i, "position")) t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === _.css(e, "position");) e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((o = _(e).offset()).top += _.css(e, "borderTopWidth", !0), o.left += _.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - o.top - _.css(i, "marginTop", !0),
                    left: t.left - o.left - _.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === _.css(e, "position");) e = e.offsetParent;
                return e || oe
            })
        }
    }), _.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        _.fn[e] = function(i) {
            return q(this, function(e, i, o) {
                var r;
                if (m(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === o) return r ? r[t] : e[i];
                r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o
            }, e, i, arguments.length)
        }
    }), _.each(["top", "left"], function(e, t) {
        _.cssHooks[t] = Ve(p.pixelPosition, function(e, n) {
            if (n) return n = qe(e, t), Re.test(n) ? _(e).position()[t] + "px" : n
        })
    }), _.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        _.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            _.fn[i] = function(o, r) {
                var s = arguments.length && (n || "boolean" != typeof o),
                    a = n || (!0 === o || !0 === r ? "margin" : "border");
                return q(this, function(t, n, o) {
                    var r;
                    return m(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? _.css(t, n, a) : _.style(t, n, o, a)
                }, t, s ? o : void 0, s)
            }
        })
    }), _.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        _.fn[t] = function(e, n) {
            return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), _.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), _.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), _.proxy = function(e, t) {
        var n, i, o;
        if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return i = r.call(arguments, 2), (o = function() {
            return e.apply(t || this, i.concat(r.call(arguments)))
        }).guid = e.guid = e.guid || _.guid++, o
    }, _.holdReady = function(e) {
        e ? _.readyWait++ : _.ready(!0)
    }, _.isArray = Array.isArray, _.parseJSON = JSON.parse, _.nodeName = O, _.isFunction = g, _.isWindow = m, _.camelCase = U, _.type = b, _.now = Date.now, _.isNumeric = function(e) {
        var t = _.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return _
    });
    var Kt = e.jQuery,
        Gt = e.$;
    return _.noConflict = function(t) {
        return e.$ === _ && (e.$ = Gt), t && e.jQuery === _ && (e.jQuery = Kt), _
    }, t || (e.jQuery = e.$ = _), _
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t()
}(this, function() {
    "use strict";

    function e(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }

    function t(e, t) {
        if (1 !== e.nodeType) return [];
        var n = getComputedStyle(e, null);
        return t ? n[t] : n
    }

    function n(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }

    function i(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
            case "HTML":
            case "BODY":
                return e.ownerDocument.body;
            case "#document":
                return e.body
        }
        var o = t(e),
            r = o.overflow,
            s = o.overflowX,
            a = o.overflowY;
        return /(auto|scroll|overlay)/.test(r + a + s) ? e : i(n(e))
    }

    function o(e) {
        return 11 === e ? U : 10 === e ? z : U || z
    }

    function r(e) {
        if (!e) return document.documentElement;
        for (var n = o(10) ? document.body : null, i = e.offsetParent; i === n && e.nextElementSibling;) i = (e = e.nextElementSibling).offsetParent;
        var s = i && i.nodeName;
        return s && "BODY" !== s && "HTML" !== s ? -1 !== ["TD", "TABLE"].indexOf(i.nodeName) && "static" === t(i, "position") ? r(i) : i : e ? e.ownerDocument.documentElement : document.documentElement
    }

    function s(e) {
        return null === e.parentNode ? e : s(e.parentNode)
    }

    function a(e, t) {
        if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? e : t,
            o = n ? t : e,
            l = document.createRange();
        l.setStart(i, 0), l.setEnd(o, 0);
        var c = l.commonAncestorContainer;
        if (e !== c && t !== c || i.contains(o)) return function(e) {
            var t = e.nodeName;
            return "BODY" !== t && ("HTML" === t || r(e.firstElementChild) === e)
        }(c) ? c : r(c);
        var u = s(e);
        return u.host ? a(u.host, t) : a(e, s(t).host)
    }

    function l(e) {
        var t = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
            n = e.nodeName;
        if ("BODY" === n || "HTML" === n) {
            var i = e.ownerDocument.documentElement;
            return (e.ownerDocument.scrollingElement || i)[t]
        }
        return e[t]
    }

    function c(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            i = l(t, "top"),
            o = l(t, "left"),
            r = n ? -1 : 1;
        return e.top += i * r, e.bottom += i * r, e.left += o * r, e.right += o * r, e
    }

    function u(e, t) {
        var n = "x" === t ? "Left" : "Top",
            i = "Left" == n ? "Right" : "Bottom";
        return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + i + "Width"], 10)
    }

    function d(e, t, n, i) {
        return B(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], o(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
    }

    function h(e) {
        var t = e.body,
            n = e.documentElement,
            i = o(10) && getComputedStyle(n);
        return {
            height: d("Height", t, n, i),
            width: d("Width", t, n, i)
        }
    }

    function f(e) {
        return Z({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }

    function p(e) {
        var n = {};
        try {
            if (o(10)) {
                n = e.getBoundingClientRect();
                var i = l(e, "top"),
                    r = l(e, "left");
                n.top += i, n.left += r, n.bottom += i, n.right += r
            } else n = e.getBoundingClientRect()
        } catch (e) {}
        var s = {
                left: n.left,
                top: n.top,
                width: n.right - n.left,
                height: n.bottom - n.top
            },
            a = "HTML" === e.nodeName ? h(e.ownerDocument) : {},
            c = a.width || e.clientWidth || s.right - s.left,
            d = a.height || e.clientHeight || s.bottom - s.top,
            p = e.offsetWidth - c,
            g = e.offsetHeight - d;
        if (p || g) {
            var m = t(e);
            p -= u(m, "x"), g -= u(m, "y"), s.width -= p, s.height -= g
        }
        return f(s)
    }

    function g(e, n) {
        var r = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            s = o(10),
            a = "HTML" === n.nodeName,
            l = p(e),
            u = p(n),
            d = i(e),
            h = t(n),
            g = parseFloat(h.borderTopWidth, 10),
            m = parseFloat(h.borderLeftWidth, 10);
        r && a && (u.top = B(u.top, 0), u.left = B(u.left, 0));
        var v = f({
            top: l.top - u.top - g,
            left: l.left - u.left - m,
            width: l.width,
            height: l.height
        });
        if (v.marginTop = 0, v.marginLeft = 0, !s && a) {
            var y = parseFloat(h.marginTop, 10),
                b = parseFloat(h.marginLeft, 10);
            v.top -= g - y, v.bottom -= g - y, v.left -= m - b, v.right -= m - b, v.marginTop = y, v.marginLeft = b
        }
        return (s && !r ? n.contains(d) : n === d && "BODY" !== d.nodeName) && (v = c(v, n)), v
    }

    function m(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            n = e.ownerDocument.documentElement,
            i = g(e, n),
            o = B(n.clientWidth, window.innerWidth || 0),
            r = B(n.clientHeight, window.innerHeight || 0),
            s = t ? 0 : l(n),
            a = t ? 0 : l(n, "left");
        return f({
            top: s - i.top + i.marginTop,
            left: a - i.left + i.marginLeft,
            width: o,
            height: r
        })
    }

    function v(e) {
        var i = e.nodeName;
        return "BODY" !== i && "HTML" !== i && ("fixed" === t(e, "position") || v(n(e)))
    }

    function y(e) {
        if (!e || !e.parentElement || o()) return document.documentElement;
        for (var n = e.parentElement; n && "none" === t(n, "transform");) n = n.parentElement;
        return n || document.documentElement
    }

    function b(e, t, o, r) {
        var s = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
            l = {
                top: 0,
                left: 0
            },
            c = s ? y(e) : a(e, t);
        if ("viewport" === r) l = m(c, s);
        else {
            var u;
            "scrollParent" === r ? "BODY" === (u = i(n(t))).nodeName && (u = e.ownerDocument.documentElement) : u = "window" === r ? e.ownerDocument.documentElement : r;
            var d = g(u, c, s);
            if ("HTML" !== u.nodeName || v(c)) l = d;
            else {
                var f = h(e.ownerDocument),
                    p = f.height,
                    b = f.width;
                l.top += d.top - d.marginTop, l.bottom = p + d.top, l.left += d.left - d.marginLeft, l.right = b + d.left
            }
        }
        var w = "number" == typeof(o = o || 0);
        return l.left += w ? o : o.left || 0, l.top += w ? o : o.top || 0, l.right -= w ? o : o.right || 0, l.bottom -= w ? o : o.bottom || 0, l
    }

    function w(e) {
        return e.width * e.height
    }

    function _(e, t, n, i, o) {
        var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var s = b(n, i, r, o),
            a = {
                top: {
                    width: s.width,
                    height: t.top - s.top
                },
                right: {
                    width: s.right - t.right,
                    height: s.height
                },
                bottom: {
                    width: s.width,
                    height: s.bottom - t.bottom
                },
                left: {
                    width: t.left - s.left,
                    height: s.height
                }
            },
            l = Object.keys(a).map(function(e) {
                return Z({
                    key: e
                }, a[e], {
                    area: w(a[e])
                })
            }).sort(function(e, t) {
                return t.area - e.area
            }),
            c = l.filter(function(e) {
                var t = e.width,
                    i = e.height;
                return t >= n.clientWidth && i >= n.clientHeight
            }),
            u = 0 < c.length ? c[0].key : l[0].key,
            d = e.split("-")[1];
        return u + (d ? "-" + d : "")
    }

    function C(e, t, n) {
        var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return g(n, i ? y(t) : a(t, n), i)
    }

    function S(e) {
        var t = getComputedStyle(e),
            n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
            i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
        return {
            width: e.offsetWidth + i,
            height: e.offsetHeight + n
        }
    }

    function x(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }

    function T(e, t, n) {
        n = n.split("-")[0];
        var i = S(e),
            o = {
                width: i.width,
                height: i.height
            },
            r = -1 !== ["right", "left"].indexOf(n),
            s = r ? "top" : "left",
            a = r ? "left" : "top",
            l = r ? "height" : "width",
            c = r ? "width" : "height";
        return o[s] = t[s] + t[l] / 2 - i[l] / 2, o[a] = n === a ? t[a] - i[c] : t[x(a)], o
    }

    function E(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function k(t, n, i) {
        return (void 0 === i ? t : t.slice(0, function(e, t, n) {
            if (Array.prototype.findIndex) return e.findIndex(function(e) {
                return e[t] === n
            });
            var i = E(e, function(e) {
                return e[t] === n
            });
            return e.indexOf(i)
        }(t, "name", i))).forEach(function(t) {
            t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var i = t.function || t.fn;
            t.enabled && e(i) && (n.offsets.popper = f(n.offsets.popper), n.offsets.reference = f(n.offsets.reference), n = i(n, t))
        }), n
    }

    function O(e, t) {
        return e.some(function(e) {
            var n = e.name;
            return e.enabled && n === t
        })
    }

    function A(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
            var o = t[i],
                r = o ? "" + o + n : e;
            if (void 0 !== document.body.style[r]) return r
        }
        return null
    }

    function D(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }

    function P(e, t, n, o) {
        n.updateBound = o, D(e).addEventListener("resize", n.updateBound, {
            passive: !0
        });
        var r = i(e);
        return function e(t, n, o, r) {
            var s = "BODY" === t.nodeName,
                a = s ? t.ownerDocument.defaultView : t;
            a.addEventListener(n, o, {
                passive: !0
            }), s || e(i(a.parentNode), n, o, r), r.push(a)
        }(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
    }

    function L() {
        var e, t;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, D(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(e) {
            e.removeEventListener("scroll", t.updateBound)
        }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
    }

    function N(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function I(e, t) {
        Object.keys(t).forEach(function(n) {
            var i = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && N(t[n]) && (i = "px"), e.style[n] = t[n] + i
        })
    }

    function $(e, t, n) {
        var i = E(e, function(e) {
                return e.name === t
            }),
            o = !!i && e.some(function(e) {
                return e.name === n && e.enabled && e.order < i.order
            });
        if (!o) {
            var r = "`" + t + "`";
            console.warn("`" + n + "` modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!")
        }
        return o
    }

    function M(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            n = ee.indexOf(e),
            i = ee.slice(n + 1).concat(ee.slice(0, n));
        return t ? i.reverse() : i
    }

    function j(e, t, n, i) {
        var o = [0, 0],
            r = -1 !== ["right", "left"].indexOf(i),
            s = e.split(/(\+|\-)/).map(function(e) {
                return e.trim()
            }),
            a = s.indexOf(E(s, function(e) {
                return -1 !== e.search(/,|\s/)
            }));
        s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
            c = -1 === a ? [s] : [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))];
        return (c = c.map(function(e, i) {
            var o = (1 === i ? !r : r) ? "height" : "width",
                s = !1;
            return e.reduce(function(e, t) {
                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, s = !0, e) : s ? (e[e.length - 1] += t, s = !1, e) : e.concat(t)
            }, []).map(function(e) {
                return function(e, t, n, i) {
                    var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                        r = +o[1],
                        s = o[2];
                    if (!r) return e;
                    if (0 === s.indexOf("%")) {
                        var a;
                        switch (s) {
                            case "%p":
                                a = n;
                                break;
                            case "%":
                            case "%r":
                            default:
                                a = i
                        }
                        return f(a)[t] / 100 * r
                    }
                    return "vh" === s || "vw" === s ? ("vh" === s ? B(document.documentElement.clientHeight, window.innerHeight || 0) : B(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r : r
                }(e, o, t, n)
            })
        })).forEach(function(e, t) {
            e.forEach(function(n, i) {
                N(n) && (o[t] += n * ("-" === e[i - 1] ? -1 : 1))
            })
        }), o
    }
    for (var H = Math.min, W = Math.round, R = Math.floor, B = Math.max, F = "undefined" != typeof window && "undefined" != typeof document, q = ["Edge", "Trident", "Firefox"], V = 0, X = 0; X < q.length; X += 1)
        if (F && 0 <= navigator.userAgent.indexOf(q[X])) {
            V = 1;
            break
        }
    var Y = F && window.Promise ? function(e) {
            var t = !1;
            return function() {
                t || (t = !0, window.Promise.resolve().then(function() {
                    t = !1, e()
                }))
            }
        } : function(e) {
            var t = !1;
            return function() {
                t || (t = !0, setTimeout(function() {
                    t = !1, e()
                }, V))
            }
        },
        U = F && !(!window.MSInputMethodContext || !document.documentMode),
        z = F && /MSIE 10/.test(navigator.userAgent),
        Q = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        },
        K = function() {
            function e(e, t) {
                for (var n, i = 0; i < t.length; i++)(n = t[i]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        G = function(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        },
        Z = Object.assign || function(e) {
            for (var t, n = 1; n < arguments.length; n++)
                for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        },
        J = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        ee = J.slice(3),
        te = "flip",
        ne = "clockwise",
        ie = "counterclockwise",
        oe = function() {
            function t(n, i) {
                var o = this,
                    r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                Q(this, t), this.scheduleUpdate = function() {
                    return requestAnimationFrame(o.update)
                }, this.update = Y(this.update.bind(this)), this.options = Z({}, t.Defaults, r), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = n && n.jquery ? n[0] : n, this.popper = i && i.jquery ? i[0] : i, this.options.modifiers = {}, Object.keys(Z({}, t.Defaults.modifiers, r.modifiers)).forEach(function(e) {
                    o.options.modifiers[e] = Z({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                    return Z({
                        name: e
                    }, o.options.modifiers[e])
                }).sort(function(e, t) {
                    return e.order - t.order
                }), this.modifiers.forEach(function(t) {
                    t.enabled && e(t.onLoad) && t.onLoad(o.reference, o.popper, o.options, t, o.state)
                }), this.update();
                var s = this.options.eventsEnabled;
                s && this.enableEventListeners(), this.state.eventsEnabled = s
            }
            return K(t, [{
                key: "update",
                value: function() {
                    return function() {
                        if (!this.state.isDestroyed) {
                            var e = {
                                instance: this,
                                styles: {},
                                arrowStyles: {},
                                attributes: {},
                                flipped: !1,
                                offsets: {}
                            };
                            e.offsets.reference = C(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = _(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = T(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = k(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                        }
                    }.call(this)
                }
            }, {
                key: "destroy",
                value: function() {
                    return function() {
                        return this.state.isDestroyed = !0, O(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[A("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                    }.call(this)
                }
            }, {
                key: "enableEventListeners",
                value: function() {
                    return function() {
                        this.state.eventsEnabled || (this.state = P(this.reference, this.options, this.state, this.scheduleUpdate))
                    }.call(this)
                }
            }, {
                key: "disableEventListeners",
                value: function() {
                    return L.call(this)
                }
            }]), t
        }();
    return oe.Utils = ("undefined" == typeof window ? global : window).PopperUtils, oe.placements = J, oe.Defaults = {
        placement: "bottom",
        positionFixed: !1,
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: function(e) {
                    var t = e.placement,
                        n = t.split("-")[0],
                        i = t.split("-")[1];
                    if (i) {
                        var o = e.offsets,
                            r = o.reference,
                            s = o.popper,
                            a = -1 !== ["bottom", "top"].indexOf(n),
                            l = a ? "left" : "top",
                            c = a ? "width" : "height",
                            u = {
                                start: G({}, l, r[l]),
                                end: G({}, l, r[l] + r[c] - s[c])
                            };
                        e.offsets.popper = Z({}, s, u[i])
                    }
                    return e
                }
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: function(e, t) {
                    var n, i = t.offset,
                        o = e.placement,
                        r = e.offsets,
                        s = r.popper,
                        a = r.reference,
                        l = o.split("-")[0];
                    return n = N(+i) ? [+i, 0] : j(i, s, a, l), "left" === l ? (s.top += n[0], s.left -= n[1]) : "right" === l ? (s.top += n[0], s.left += n[1]) : "top" === l ? (s.left += n[0], s.top -= n[1]) : "bottom" === l && (s.left += n[0], s.top += n[1]), e.popper = s, e
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: function(e, t) {
                    var n = t.boundariesElement || r(e.instance.popper);
                    e.instance.reference === n && (n = r(n));
                    var i = A("transform"),
                        o = e.instance.popper.style,
                        s = o.top,
                        a = o.left,
                        l = o[i];
                    o.top = "", o.left = "", o[i] = "";
                    var c = b(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                    o.top = s, o.left = a, o[i] = l, t.boundaries = c;
                    var u = t.priority,
                        d = e.offsets.popper,
                        h = {
                            primary: function(e) {
                                var n = d[e];
                                return d[e] < c[e] && !t.escapeWithReference && (n = B(d[e], c[e])), G({}, e, n)
                            },
                            secondary: function(e) {
                                var n = "right" === e ? "left" : "top",
                                    i = d[n];
                                return d[e] > c[e] && !t.escapeWithReference && (i = H(d[n], c[e] - ("right" === e ? d.width : d.height))), G({}, n, i)
                            }
                        };
                    return u.forEach(function(e) {
                        var t = -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";
                        d = Z({}, d, h[t](e))
                    }), e.offsets.popper = d, e
                },
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: function(e) {
                    var t = e.offsets,
                        n = t.popper,
                        i = t.reference,
                        o = e.placement.split("-")[0],
                        r = R,
                        s = -1 !== ["top", "bottom"].indexOf(o),
                        a = s ? "right" : "bottom",
                        l = s ? "left" : "top",
                        c = s ? "width" : "height";
                    return n[a] < r(i[l]) && (e.offsets.popper[l] = r(i[l]) - n[c]), n[l] > r(i[a]) && (e.offsets.popper[l] = r(i[a])), e
                }
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: function(e, n) {
                    var i;
                    if (!$(e.instance.modifiers, "arrow", "keepTogether")) return e;
                    var o = n.element;
                    if ("string" == typeof o) {
                        if (!(o = e.instance.popper.querySelector(o))) return e
                    } else if (!e.instance.popper.contains(o)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                    var r = e.placement.split("-")[0],
                        s = e.offsets,
                        a = s.popper,
                        l = s.reference,
                        c = -1 !== ["left", "right"].indexOf(r),
                        u = c ? "height" : "width",
                        d = c ? "Top" : "Left",
                        h = d.toLowerCase(),
                        p = c ? "left" : "top",
                        g = c ? "bottom" : "right",
                        m = S(o)[u];
                    l[g] - m < a[h] && (e.offsets.popper[h] -= a[h] - (l[g] - m)), l[h] + m > a[g] && (e.offsets.popper[h] += l[h] + m - a[g]), e.offsets.popper = f(e.offsets.popper);
                    var v = l[h] + l[u] / 2 - m / 2,
                        y = t(e.instance.popper),
                        b = parseFloat(y["margin" + d], 10),
                        w = parseFloat(y["border" + d + "Width"], 10),
                        _ = v - e.offsets.popper[h] - b - w;
                    return _ = B(H(a[u] - m, _), 0), e.arrowElement = o, e.offsets.arrow = (G(i = {}, h, W(_)), G(i, p, ""), i), e
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: function(e, t) {
                    if (O(e.instance.modifiers, "inner")) return e;
                    if (e.flipped && e.placement === e.originalPlacement) return e;
                    var n = b(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                        i = e.placement.split("-")[0],
                        o = x(i),
                        r = e.placement.split("-")[1] || "",
                        s = [];
                    switch (t.behavior) {
                        case te:
                            s = [i, o];
                            break;
                        case ne:
                            s = M(i);
                            break;
                        case ie:
                            s = M(i, !0);
                            break;
                        default:
                            s = t.behavior
                    }
                    return s.forEach(function(a, l) {
                        if (i !== a || s.length === l + 1) return e;
                        i = e.placement.split("-")[0], o = x(i);
                        var c = e.offsets.popper,
                            u = e.offsets.reference,
                            d = R,
                            h = "left" === i && d(c.right) > d(u.left) || "right" === i && d(c.left) < d(u.right) || "top" === i && d(c.bottom) > d(u.top) || "bottom" === i && d(c.top) < d(u.bottom),
                            f = d(c.left) < d(n.left),
                            p = d(c.right) > d(n.right),
                            g = d(c.top) < d(n.top),
                            m = d(c.bottom) > d(n.bottom),
                            v = "left" === i && f || "right" === i && p || "top" === i && g || "bottom" === i && m,
                            y = -1 !== ["top", "bottom"].indexOf(i),
                            b = !!t.flipVariations && (y && "start" === r && f || y && "end" === r && p || !y && "start" === r && g || !y && "end" === r && m);
                        (h || v || b) && (e.flipped = !0, (h || v) && (i = s[l + 1]), b && (r = function(e) {
                            return "end" === e ? "start" : "start" === e ? "end" : e
                        }(r)), e.placement = i + (r ? "-" + r : ""), e.offsets.popper = Z({}, e.offsets.popper, T(e.instance.popper, e.offsets.reference, e.placement)), e = k(e.instance.modifiers, e, "flip"))
                    }), e
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport"
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: function(e) {
                    var t = e.placement,
                        n = t.split("-")[0],
                        i = e.offsets,
                        o = i.popper,
                        r = i.reference,
                        s = -1 !== ["left", "right"].indexOf(n),
                        a = -1 === ["top", "left"].indexOf(n);
                    return o[s ? "left" : "top"] = r[n] - (a ? o[s ? "width" : "height"] : 0), e.placement = x(t), e.offsets.popper = f(o), e
                }
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: function(e) {
                    if (!$(e.instance.modifiers, "hide", "preventOverflow")) return e;
                    var t = e.offsets.reference,
                        n = E(e.instance.modifiers, function(e) {
                            return "preventOverflow" === e.name
                        }).boundaries;
                    if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                        if (!0 === e.hide) return e;
                        e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === e.hide) return e;
                        e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                    }
                    return e
                }
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: function(e, t) {
                    var n = t.x,
                        i = t.y,
                        o = e.offsets.popper,
                        s = E(e.instance.modifiers, function(e) {
                            return "applyStyle" === e.name
                        }).gpuAcceleration;
                    void 0 !== s && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var a, l, c = void 0 === s ? t.gpuAcceleration : s,
                        u = r(e.instance.popper),
                        d = p(u),
                        h = {
                            position: o.position
                        },
                        f = {
                            left: R(o.left),
                            top: W(o.top),
                            bottom: W(o.bottom),
                            right: R(o.right)
                        },
                        g = "bottom" === n ? "top" : "bottom",
                        m = "right" === i ? "left" : "right",
                        v = A("transform");
                    if (l = "bottom" == g ? "HTML" === u.nodeName ? -u.clientHeight + f.bottom : -d.height + f.bottom : f.top, a = "right" == m ? "HTML" === u.nodeName ? -u.clientWidth + f.right : -d.width + f.right : f.left, c && v) h[v] = "translate3d(" + a + "px, " + l + "px, 0)", h[g] = 0, h[m] = 0, h.willChange = "transform";
                    else {
                        var y = "bottom" == g ? -1 : 1,
                            b = "right" == m ? -1 : 1;
                        h[g] = l * y, h[m] = a * b, h.willChange = g + ", " + m
                    }
                    var w = {
                        "x-placement": e.placement
                    };
                    return e.attributes = Z({}, w, e.attributes), e.styles = Z({}, h, e.styles), e.arrowStyles = Z({}, e.offsets.arrow, e.arrowStyles), e
                },
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: function(e) {
                    return I(e.instance.popper, e.styles),
                        function(e, t) {
                            Object.keys(t).forEach(function(n) {
                                !1 === t[n] ? e.removeAttribute(n) : e.setAttribute(n, t[n])
                            })
                        }(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && I(e.arrowElement, e.arrowStyles), e
                },
                onLoad: function(e, t, n, i, o) {
                    var r = C(o, t, e, n.positionFixed),
                        s = _(n.placement, r, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                    return t.setAttribute("x-placement", s), I(t, {
                        position: n.positionFixed ? "fixed" : "absolute"
                    }), n
                },
                gpuAcceleration: void 0
            }
        }
    }, oe
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t((e = e || self).bootstrap = {}, e.jQuery, e.Popper)
}(this, function(e, t, n) {
    "use strict";

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function o(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e
    }

    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function s(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), i.forEach(function(t) {
                r(e, t, n[t])
            })
        }
        return e
    }
    t = t && t.hasOwnProperty("default") ? t.default : t, n = n && n.hasOwnProperty("default") ? n.default : n;
    var a = "transitionend";

    function l(e) {
        var n = this,
            i = !1;
        return t(this).one(c.TRANSITION_END, function() {
            i = !0
        }), setTimeout(function() {
            i || c.triggerTransitionEnd(n)
        }, e), this
    }
    var c = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(e) {
            do {
                e += ~~(1e6 * Math.random())
            } while (document.getElementById(e));
            return e
        },
        getSelectorFromElement: function(e) {
            var t = e.getAttribute("data-target");
            if (!t || "#" === t) {
                var n = e.getAttribute("href");
                t = n && "#" !== n ? n.trim() : ""
            }
            try {
                return document.querySelector(t) ? t : null
            } catch (e) {
                return null
            }
        },
        getTransitionDurationFromElement: function(e) {
            if (!e) return 0;
            var n = t(e).css("transition-duration"),
                i = t(e).css("transition-delay"),
                o = parseFloat(n),
                r = parseFloat(i);
            return o || r ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(n) + parseFloat(i))) : 0
        },
        reflow: function(e) {
            return e.offsetHeight
        },
        triggerTransitionEnd: function(e) {
            t(e).trigger(a)
        },
        supportsTransitionEnd: function() {
            return Boolean(a)
        },
        isElement: function(e) {
            return (e[0] || e).nodeType
        },
        typeCheckConfig: function(e, t, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var o = n[i],
                        r = t[i],
                        s = r && c.isElement(r) ? "element" : (a = r, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                    if (!new RegExp(o).test(s)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".')
                }
            var a
        },
        findShadowRoot: function(e) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof e.getRootNode) {
                var t = e.getRootNode();
                return t instanceof ShadowRoot ? t : null
            }
            return e instanceof ShadowRoot ? e : e.parentNode ? c.findShadowRoot(e.parentNode) : null
        }
    };
    t.fn.emulateTransitionEnd = l, t.event.special[c.TRANSITION_END] = {
        bindType: a,
        delegateType: a,
        handle: function(e) {
            if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
        }
    };
    var u = t.fn.alert,
        d = {
            CLOSE: "close.bs.alert",
            CLOSED: "closed.bs.alert",
            CLICK_DATA_API: "click.bs.alert.data-api"
        },
        h = "alert",
        f = "fade",
        p = "show",
        g = function() {
            function e(e) {
                this._element = e
            }
            var n = e.prototype;
            return n.close = function(e) {
                var t = this._element;
                e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
            }, n.dispose = function() {
                t.removeData(this._element, "bs.alert"), this._element = null
            }, n._getRootElement = function(e) {
                var n = c.getSelectorFromElement(e),
                    i = !1;
                return n && (i = document.querySelector(n)), i || (i = t(e).closest("." + h)[0]), i
            }, n._triggerCloseEvent = function(e) {
                var n = t.Event(d.CLOSE);
                return t(e).trigger(n), n
            }, n._removeElement = function(e) {
                var n = this;
                if (t(e).removeClass(p), t(e).hasClass(f)) {
                    var i = c.getTransitionDurationFromElement(e);
                    t(e).one(c.TRANSITION_END, function(t) {
                        return n._destroyElement(e, t)
                    }).emulateTransitionEnd(i)
                } else this._destroyElement(e)
            }, n._destroyElement = function(e) {
                t(e).detach().trigger(d.CLOSED).remove()
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = t(this),
                        o = i.data("bs.alert");
                    o || (o = new e(this), i.data("bs.alert", o)), "close" === n && o[n](this)
                })
            }, e._handleDismiss = function(e) {
                return function(t) {
                    t && t.preventDefault(), e.close(this)
                }
            }, o(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }]), e
        }();
    t(document).on(d.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g)), t.fn.alert = g._jQueryInterface, t.fn.alert.Constructor = g, t.fn.alert.noConflict = function() {
        return t.fn.alert = u, g._jQueryInterface
    };
    var m = t.fn.button,
        v = "active",
        y = "btn",
        b = "focus",
        w = '[data-toggle^="button"]',
        _ = '[data-toggle="buttons"]',
        C = 'input:not([type="hidden"])',
        S = ".active",
        x = ".btn",
        T = {
            CLICK_DATA_API: "click.bs.button.data-api",
            FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api"
        },
        E = function() {
            function e(e) {
                this._element = e
            }
            var n = e.prototype;
            return n.toggle = function() {
                var e = !0,
                    n = !0,
                    i = t(this._element).closest(_)[0];
                if (i) {
                    var o = this._element.querySelector(C);
                    if (o) {
                        if ("radio" === o.type)
                            if (o.checked && this._element.classList.contains(v)) e = !1;
                            else {
                                var r = i.querySelector(S);
                                r && t(r).removeClass(v)
                            }
                        if (e) {
                            if (o.hasAttribute("disabled") || i.hasAttribute("disabled") || o.classList.contains("disabled") || i.classList.contains("disabled")) return;
                            o.checked = !this._element.classList.contains(v), t(o).trigger("change")
                        }
                        o.focus(), n = !1
                    }
                }
                n && this._element.setAttribute("aria-pressed", !this._element.classList.contains(v)), e && t(this._element).toggleClass(v)
            }, n.dispose = function() {
                t.removeData(this._element, "bs.button"), this._element = null
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = t(this).data("bs.button");
                    i || (i = new e(this), t(this).data("bs.button", i)), "toggle" === n && i[n]()
                })
            }, o(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }]), e
        }();
    t(document).on(T.CLICK_DATA_API, w, function(e) {
        e.preventDefault();
        var n = e.target;
        t(n).hasClass(y) || (n = t(n).closest(x)), E._jQueryInterface.call(t(n), "toggle")
    }).on(T.FOCUS_BLUR_DATA_API, w, function(e) {
        var n = t(e.target).closest(x)[0];
        t(n).toggleClass(b, /^focus(in)?$/.test(e.type))
    }), t.fn.button = E._jQueryInterface, t.fn.button.Constructor = E, t.fn.button.noConflict = function() {
        return t.fn.button = m, E._jQueryInterface
    };
    var k = "carousel",
        O = ".bs.carousel",
        A = t.fn[k],
        D = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        P = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        L = "next",
        N = "prev",
        I = "left",
        $ = "right",
        M = {
            SLIDE: "slide.bs.carousel",
            SLID: "slid.bs.carousel",
            KEYDOWN: "keydown.bs.carousel",
            MOUSEENTER: "mouseenter.bs.carousel",
            MOUSELEAVE: "mouseleave.bs.carousel",
            TOUCHSTART: "touchstart.bs.carousel",
            TOUCHMOVE: "touchmove.bs.carousel",
            TOUCHEND: "touchend.bs.carousel",
            POINTERDOWN: "pointerdown.bs.carousel",
            POINTERUP: "pointerup.bs.carousel",
            DRAG_START: "dragstart.bs.carousel",
            LOAD_DATA_API: "load.bs.carousel.data-api",
            CLICK_DATA_API: "click.bs.carousel.data-api"
        },
        j = "carousel",
        H = "active",
        W = "slide",
        R = "carousel-item-right",
        B = "carousel-item-left",
        F = "carousel-item-next",
        q = "carousel-item-prev",
        V = "pointer-event",
        X = {
            ACTIVE: ".active",
            ACTIVE_ITEM: ".active.carousel-item",
            ITEM: ".carousel-item",
            ITEM_IMG: ".carousel-item img",
            NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
            INDICATORS: ".carousel-indicators",
            DATA_SLIDE: "[data-slide], [data-slide-to]",
            DATA_RIDE: '[data-ride="carousel"]'
        },
        Y = {
            TOUCH: "touch",
            PEN: "pen"
        },
        U = function() {
            function e(e, t) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(X.INDICATORS), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
            }
            var n = e.prototype;
            return n.next = function() {
                this._isSliding || this._slide(L)
            }, n.nextWhenVisible = function() {
                !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
            }, n.prev = function() {
                this._isSliding || this._slide(N)
            }, n.pause = function(e) {
                e || (this._isPaused = !0), this._element.querySelector(X.NEXT_PREV) && (c.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, n.cycle = function(e) {
                e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, n.to = function(e) {
                var n = this;
                this._activeElement = this._element.querySelector(X.ACTIVE_ITEM);
                var i = this._getItemIndex(this._activeElement);
                if (!(e > this._items.length - 1 || e < 0))
                    if (this._isSliding) t(this._element).one(M.SLID, function() {
                        return n.to(e)
                    });
                    else {
                        if (i === e) return this.pause(), void this.cycle();
                        var o = e > i ? L : N;
                        this._slide(o, this._items[e])
                    }
            }, n.dispose = function() {
                t(this._element).off(O), t.removeData(this._element, "bs.carousel"), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, n._getConfig = function(e) {
                return e = s({}, D, e), c.typeCheckConfig(k, e, P), e
            }, n._handleSwipe = function() {
                var e = Math.abs(this.touchDeltaX);
                if (!(e <= 40)) {
                    var t = e / this.touchDeltaX;
                    t > 0 && this.prev(), t < 0 && this.next()
                }
            }, n._addEventListeners = function() {
                var e = this;
                this._config.keyboard && t(this._element).on(M.KEYDOWN, function(t) {
                    return e._keydown(t)
                }), "hover" === this._config.pause && t(this._element).on(M.MOUSEENTER, function(t) {
                    return e.pause(t)
                }).on(M.MOUSELEAVE, function(t) {
                    return e.cycle(t)
                }), this._config.touch && this._addTouchEventListeners()
            }, n._addTouchEventListeners = function() {
                var e = this;
                if (this._touchSupported) {
                    var n = function(t) {
                            e._pointerEvent && Y[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX)
                        },
                        i = function(t) {
                            e._pointerEvent && Y[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function(t) {
                                return e.cycle(t)
                            }, 500 + e._config.interval))
                        };
                    t(this._element.querySelectorAll(X.ITEM_IMG)).on(M.DRAG_START, function(e) {
                        return e.preventDefault()
                    }), this._pointerEvent ? (t(this._element).on(M.POINTERDOWN, function(e) {
                        return n(e)
                    }), t(this._element).on(M.POINTERUP, function(e) {
                        return i(e)
                    }), this._element.classList.add(V)) : (t(this._element).on(M.TOUCHSTART, function(e) {
                        return n(e)
                    }), t(this._element).on(M.TOUCHMOVE, function(t) {
                        return function(t) {
                            t.originalEvent.touches && t.originalEvent.touches.length > 1 ? e.touchDeltaX = 0 : e.touchDeltaX = t.originalEvent.touches[0].clientX - e.touchStartX
                        }(t)
                    }), t(this._element).on(M.TOUCHEND, function(e) {
                        return i(e)
                    }))
                }
            }, n._keydown = function(e) {
                if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                    case 37:
                        e.preventDefault(), this.prev();
                        break;
                    case 39:
                        e.preventDefault(), this.next()
                }
            }, n._getItemIndex = function(e) {
                return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(X.ITEM)) : [], this._items.indexOf(e)
            }, n._getItemByDirection = function(e, t) {
                var n = e === L,
                    i = e === N,
                    o = this._getItemIndex(t),
                    r = this._items.length - 1;
                if ((i && 0 === o || n && o === r) && !this._config.wrap) return t;
                var s = (o + (e === N ? -1 : 1)) % this._items.length;
                return -1 === s ? this._items[this._items.length - 1] : this._items[s]
            }, n._triggerSlideEvent = function(e, n) {
                var i = this._getItemIndex(e),
                    o = this._getItemIndex(this._element.querySelector(X.ACTIVE_ITEM)),
                    r = t.Event(M.SLIDE, {
                        relatedTarget: e,
                        direction: n,
                        from: o,
                        to: i
                    });
                return t(this._element).trigger(r), r
            }, n._setActiveIndicatorElement = function(e) {
                if (this._indicatorsElement) {
                    var n = [].slice.call(this._indicatorsElement.querySelectorAll(X.ACTIVE));
                    t(n).removeClass(H);
                    var i = this._indicatorsElement.children[this._getItemIndex(e)];
                    i && t(i).addClass(H)
                }
            }, n._slide = function(e, n) {
                var i, o, r, s = this,
                    a = this._element.querySelector(X.ACTIVE_ITEM),
                    l = this._getItemIndex(a),
                    u = n || a && this._getItemByDirection(e, a),
                    d = this._getItemIndex(u),
                    h = Boolean(this._interval);
                if (e === L ? (i = B, o = F, r = I) : (i = R, o = q, r = $), u && t(u).hasClass(H)) this._isSliding = !1;
                else if (!this._triggerSlideEvent(u, r).isDefaultPrevented() && a && u) {
                    this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(u);
                    var f = t.Event(M.SLID, {
                        relatedTarget: u,
                        direction: r,
                        from: l,
                        to: d
                    });
                    if (t(this._element).hasClass(W)) {
                        t(u).addClass(o), c.reflow(u), t(a).addClass(i), t(u).addClass(i);
                        var p = parseInt(u.getAttribute("data-interval"), 10);
                        p ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = p) : this._config.interval = this._config.defaultInterval || this._config.interval;
                        var g = c.getTransitionDurationFromElement(a);
                        t(a).one(c.TRANSITION_END, function() {
                            t(u).removeClass(i + " " + o).addClass(H), t(a).removeClass(H + " " + o + " " + i), s._isSliding = !1, setTimeout(function() {
                                return t(s._element).trigger(f)
                            }, 0)
                        }).emulateTransitionEnd(g)
                    } else t(a).removeClass(H), t(u).addClass(H), this._isSliding = !1, t(this._element).trigger(f);
                    h && this.cycle()
                }
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = t(this).data("bs.carousel"),
                        o = s({}, D, t(this).data());
                    "object" == typeof n && (o = s({}, o, n));
                    var r = "string" == typeof n ? n : o.slide;
                    if (i || (i = new e(this, o), t(this).data("bs.carousel", i)), "number" == typeof n) i.to(n);
                    else if ("string" == typeof r) {
                        if (void 0 === i[r]) throw new TypeError('No method named "' + r + '"');
                        i[r]()
                    } else o.interval && o.ride && (i.pause(), i.cycle())
                })
            }, e._dataApiClickHandler = function(n) {
                var i = c.getSelectorFromElement(this);
                if (i) {
                    var o = t(i)[0];
                    if (o && t(o).hasClass(j)) {
                        var r = s({}, t(o).data(), t(this).data()),
                            a = this.getAttribute("data-slide-to");
                        a && (r.interval = !1), e._jQueryInterface.call(t(o), r), a && t(o).data("bs.carousel").to(a), n.preventDefault()
                    }
                }
            }, o(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return D
                }
            }]), e
        }();
    t(document).on(M.CLICK_DATA_API, X.DATA_SLIDE, U._dataApiClickHandler), t(window).on(M.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll(X.DATA_RIDE)), n = 0, i = e.length; n < i; n++) {
            var o = t(e[n]);
            U._jQueryInterface.call(o, o.data())
        }
    }), t.fn[k] = U._jQueryInterface, t.fn[k].Constructor = U, t.fn[k].noConflict = function() {
        return t.fn[k] = A, U._jQueryInterface
    };
    var z = "collapse",
        Q = t.fn[z],
        K = {
            toggle: !0,
            parent: ""
        },
        G = {
            toggle: "boolean",
            parent: "(string|element)"
        },
        Z = {
            SHOW: "show.bs.collapse",
            SHOWN: "shown.bs.collapse",
            HIDE: "hide.bs.collapse",
            HIDDEN: "hidden.bs.collapse",
            CLICK_DATA_API: "click.bs.collapse.data-api"
        },
        J = "show",
        ee = "collapse",
        te = "collapsing",
        ne = "collapsed",
        ie = "width",
        oe = "height",
        re = {
            ACTIVES: ".show, .collapsing",
            DATA_TOGGLE: '[data-toggle="collapse"]'
        },
        se = function() {
            function e(e, t) {
                this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                for (var n = [].slice.call(document.querySelectorAll(re.DATA_TOGGLE)), i = 0, o = n.length; i < o; i++) {
                    var r = n[i],
                        s = c.getSelectorFromElement(r),
                        a = [].slice.call(document.querySelectorAll(s)).filter(function(t) {
                            return t === e
                        });
                    null !== s && a.length > 0 && (this._selector = s, this._triggerArray.push(r))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var n = e.prototype;
            return n.toggle = function() {
                t(this._element).hasClass(J) ? this.hide() : this.show()
            }, n.show = function() {
                var n, i, o = this;
                if (!this._isTransitioning && !t(this._element).hasClass(J) && (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(re.ACTIVES)).filter(function(e) {
                        return "string" == typeof o._config.parent ? e.getAttribute("data-parent") === o._config.parent : e.classList.contains(ee)
                    })).length && (n = null), !(n && (i = t(n).not(this._selector).data("bs.collapse")) && i._isTransitioning))) {
                    var r = t.Event(Z.SHOW);
                    if (t(this._element).trigger(r), !r.isDefaultPrevented()) {
                        n && (e._jQueryInterface.call(t(n).not(this._selector), "hide"), i || t(n).data("bs.collapse", null));
                        var s = this._getDimension();
                        t(this._element).removeClass(ee).addClass(te), this._element.style[s] = 0, this._triggerArray.length && t(this._triggerArray).removeClass(ne).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var a = "scroll" + (s[0].toUpperCase() + s.slice(1)),
                            l = c.getTransitionDurationFromElement(this._element);
                        t(this._element).one(c.TRANSITION_END, function() {
                            t(o._element).removeClass(te).addClass(ee).addClass(J), o._element.style[s] = "", o.setTransitioning(!1), t(o._element).trigger(Z.SHOWN)
                        }).emulateTransitionEnd(l), this._element.style[s] = this._element[a] + "px"
                    }
                }
            }, n.hide = function() {
                var e = this;
                if (!this._isTransitioning && t(this._element).hasClass(J)) {
                    var n = t.Event(Z.HIDE);
                    if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                        var i = this._getDimension();
                        this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", c.reflow(this._element), t(this._element).addClass(te).removeClass(ee).removeClass(J);
                        var o = this._triggerArray.length;
                        if (o > 0)
                            for (var r = 0; r < o; r++) {
                                var s = this._triggerArray[r],
                                    a = c.getSelectorFromElement(s);
                                if (null !== a) t([].slice.call(document.querySelectorAll(a))).hasClass(J) || t(s).addClass(ne).attr("aria-expanded", !1)
                            }
                        this.setTransitioning(!0);
                        this._element.style[i] = "";
                        var l = c.getTransitionDurationFromElement(this._element);
                        t(this._element).one(c.TRANSITION_END, function() {
                            e.setTransitioning(!1), t(e._element).removeClass(te).addClass(ee).trigger(Z.HIDDEN)
                        }).emulateTransitionEnd(l)
                    }
                }
            }, n.setTransitioning = function(e) {
                this._isTransitioning = e
            }, n.dispose = function() {
                t.removeData(this._element, "bs.collapse"), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, n._getConfig = function(e) {
                return (e = s({}, K, e)).toggle = Boolean(e.toggle), c.typeCheckConfig(z, e, G), e
            }, n._getDimension = function() {
                return t(this._element).hasClass(ie) ? ie : oe
            }, n._getParent = function() {
                var n, i = this;
                c.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
                var o = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                    r = [].slice.call(n.querySelectorAll(o));
                return t(r).each(function(t, n) {
                    i._addAriaAndCollapsedClass(e._getTargetFromElement(n), [n])
                }), n
            }, n._addAriaAndCollapsedClass = function(e, n) {
                var i = t(e).hasClass(J);
                n.length && t(n).toggleClass(ne, !i).attr("aria-expanded", i)
            }, e._getTargetFromElement = function(e) {
                var t = c.getSelectorFromElement(e);
                return t ? document.querySelector(t) : null
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = t(this),
                        o = i.data("bs.collapse"),
                        r = s({}, K, i.data(), "object" == typeof n && n ? n : {});
                    if (!o && r.toggle && /show|hide/.test(n) && (r.toggle = !1), o || (o = new e(this, r), i.data("bs.collapse", o)), "string" == typeof n) {
                        if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                        o[n]()
                    }
                })
            }, o(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return K
                }
            }]), e
        }();
    t(document).on(Z.CLICK_DATA_API, re.DATA_TOGGLE, function(e) {
        "A" === e.currentTarget.tagName && e.preventDefault();
        var n = t(this),
            i = c.getSelectorFromElement(this),
            o = [].slice.call(document.querySelectorAll(i));
        t(o).each(function() {
            var e = t(this),
                i = e.data("bs.collapse") ? "toggle" : n.data();
            se._jQueryInterface.call(e, i)
        })
    }), t.fn[z] = se._jQueryInterface, t.fn[z].Constructor = se, t.fn[z].noConflict = function() {
        return t.fn[z] = Q, se._jQueryInterface
    };
    var ae = "dropdown",
        le = t.fn[ae],
        ce = new RegExp("38|40|27"),
        ue = {
            HIDE: "hide.bs.dropdown",
            HIDDEN: "hidden.bs.dropdown",
            SHOW: "show.bs.dropdown",
            SHOWN: "shown.bs.dropdown",
            CLICK: "click.bs.dropdown",
            CLICK_DATA_API: "click.bs.dropdown.data-api",
            KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api",
            KEYUP_DATA_API: "keyup.bs.dropdown.data-api"
        },
        de = "disabled",
        he = "show",
        fe = "dropup",
        pe = "dropright",
        ge = "dropleft",
        me = "dropdown-menu-right",
        ve = "position-static",
        ye = '[data-toggle="dropdown"]',
        be = ".dropdown form",
        we = ".dropdown-menu",
        _e = ".navbar-nav",
        Ce = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        Se = "top-start",
        xe = "top-end",
        Te = "bottom-start",
        Ee = "bottom-end",
        ke = "right-start",
        Oe = "left-start",
        Ae = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic"
        },
        De = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string"
        },
        Pe = function() {
            function e(e, t) {
                this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }
            var i = e.prototype;
            return i.toggle = function() {
                if (!this._element.disabled && !t(this._element).hasClass(de)) {
                    var i = e._getParentFromElement(this._element),
                        o = t(this._menu).hasClass(he);
                    if (e._clearMenus(), !o) {
                        var r = {
                                relatedTarget: this._element
                            },
                            s = t.Event(ue.SHOW, r);
                        if (t(i).trigger(s), !s.isDefaultPrevented()) {
                            if (!this._inNavbar) {
                                if (void 0 === n) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                                var a = this._element;
                                "parent" === this._config.reference ? a = i : c.isElement(this._config.reference) && (a = this._config.reference, void 0 !== this._config.reference.jquery && (a = this._config.reference[0])), "scrollParent" !== this._config.boundary && t(i).addClass(ve), this._popper = new n(a, this._menu, this._getPopperConfig())
                            }
                            "ontouchstart" in document.documentElement && 0 === t(i).closest(_e).length && t(document.body).children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(he), t(i).toggleClass(he).trigger(t.Event(ue.SHOWN, r))
                        }
                    }
                }
            }, i.show = function() {
                if (!(this._element.disabled || t(this._element).hasClass(de) || t(this._menu).hasClass(he))) {
                    var n = {
                            relatedTarget: this._element
                        },
                        i = t.Event(ue.SHOW, n),
                        o = e._getParentFromElement(this._element);
                    t(o).trigger(i), i.isDefaultPrevented() || (t(this._menu).toggleClass(he), t(o).toggleClass(he).trigger(t.Event(ue.SHOWN, n)))
                }
            }, i.hide = function() {
                if (!this._element.disabled && !t(this._element).hasClass(de) && t(this._menu).hasClass(he)) {
                    var n = {
                            relatedTarget: this._element
                        },
                        i = t.Event(ue.HIDE, n),
                        o = e._getParentFromElement(this._element);
                    t(o).trigger(i), i.isDefaultPrevented() || (t(this._menu).toggleClass(he), t(o).toggleClass(he).trigger(t.Event(ue.HIDDEN, n)))
                }
            }, i.dispose = function() {
                t.removeData(this._element, "bs.dropdown"), t(this._element).off(".bs.dropdown"), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
            }, i.update = function() {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, i._addEventListeners = function() {
                var e = this;
                t(this._element).on(ue.CLICK, function(t) {
                    t.preventDefault(), t.stopPropagation(), e.toggle()
                })
            }, i._getConfig = function(e) {
                return e = s({}, this.constructor.Default, t(this._element).data(), e), c.typeCheckConfig(ae, e, this.constructor.DefaultType), e
            }, i._getMenuElement = function() {
                if (!this._menu) {
                    var t = e._getParentFromElement(this._element);
                    t && (this._menu = t.querySelector(we))
                }
                return this._menu
            }, i._getPlacement = function() {
                var e = t(this._element.parentNode),
                    n = Te;
                return e.hasClass(fe) ? (n = Se, t(this._menu).hasClass(me) && (n = xe)) : e.hasClass(pe) ? n = ke : e.hasClass(ge) ? n = Oe : t(this._menu).hasClass(me) && (n = Ee), n
            }, i._detectNavbar = function() {
                return t(this._element).closest(".navbar").length > 0
            }, i._getOffset = function() {
                var e = this,
                    t = {};
                return "function" == typeof this._config.offset ? t.fn = function(t) {
                    return t.offsets = s({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t
                } : t.offset = this._config.offset, t
            }, i._getPopperConfig = function() {
                var e = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                };
                return "static" === this._config.display && (e.modifiers.applyStyle = {
                    enabled: !1
                }), e
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = t(this).data("bs.dropdown");
                    if (i || (i = new e(this, "object" == typeof n ? n : null), t(this).data("bs.dropdown", i)), "string" == typeof n) {
                        if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n]()
                    }
                })
            }, e._clearMenus = function(n) {
                if (!n || 3 !== n.which && ("keyup" !== n.type || 9 === n.which))
                    for (var i = [].slice.call(document.querySelectorAll(ye)), o = 0, r = i.length; o < r; o++) {
                        var s = e._getParentFromElement(i[o]),
                            a = t(i[o]).data("bs.dropdown"),
                            l = {
                                relatedTarget: i[o]
                            };
                        if (n && "click" === n.type && (l.clickEvent = n), a) {
                            var c = a._menu;
                            if (t(s).hasClass(he) && !(n && ("click" === n.type && /input|textarea/i.test(n.target.tagName) || "keyup" === n.type && 9 === n.which) && t.contains(s, n.target))) {
                                var u = t.Event(ue.HIDE, l);
                                t(s).trigger(u), u.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), i[o].setAttribute("aria-expanded", "false"), t(c).removeClass(he), t(s).removeClass(he).trigger(t.Event(ue.HIDDEN, l)))
                            }
                        }
                    }
            }, e._getParentFromElement = function(e) {
                var t, n = c.getSelectorFromElement(e);
                return n && (t = document.querySelector(n)), t || e.parentNode
            }, e._dataApiKeydownHandler = function(n) {
                if ((/input|textarea/i.test(n.target.tagName) ? !(32 === n.which || 27 !== n.which && (40 !== n.which && 38 !== n.which || t(n.target).closest(we).length)) : ce.test(n.which)) && (n.preventDefault(), n.stopPropagation(), !this.disabled && !t(this).hasClass(de))) {
                    var i = e._getParentFromElement(this),
                        o = t(i).hasClass(he);
                    if (o && (!o || 27 !== n.which && 32 !== n.which)) {
                        var r = [].slice.call(i.querySelectorAll(Ce));
                        if (0 !== r.length) {
                            var s = r.indexOf(n.target);
                            38 === n.which && s > 0 && s--, 40 === n.which && s < r.length - 1 && s++, s < 0 && (s = 0), r[s].focus()
                        }
                    } else {
                        if (27 === n.which) {
                            var a = i.querySelector(ye);
                            t(a).trigger("focus")
                        }
                        t(this).trigger("click")
                    }
                }
            }, o(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return Ae
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return De
                }
            }]), e
        }();
    t(document).on(ue.KEYDOWN_DATA_API, ye, Pe._dataApiKeydownHandler).on(ue.KEYDOWN_DATA_API, we, Pe._dataApiKeydownHandler).on(ue.CLICK_DATA_API + " " + ue.KEYUP_DATA_API, Pe._clearMenus).on(ue.CLICK_DATA_API, ye, function(e) {
        e.preventDefault(), e.stopPropagation(), Pe._jQueryInterface.call(t(this), "toggle")
    }).on(ue.CLICK_DATA_API, be, function(e) {
        e.stopPropagation()
    }), t.fn[ae] = Pe._jQueryInterface, t.fn[ae].Constructor = Pe, t.fn[ae].noConflict = function() {
        return t.fn[ae] = le, Pe._jQueryInterface
    };
    var Le = t.fn.modal,
        Ne = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        },
        Ie = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        },
        $e = {
            HIDE: "hide.bs.modal",
            HIDDEN: "hidden.bs.modal",
            SHOW: "show.bs.modal",
            SHOWN: "shown.bs.modal",
            FOCUSIN: "focusin.bs.modal",
            RESIZE: "resize.bs.modal",
            CLICK_DISMISS: "click.dismiss.bs.modal",
            KEYDOWN_DISMISS: "keydown.dismiss.bs.modal",
            MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal",
            MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal",
            CLICK_DATA_API: "click.bs.modal.data-api"
        },
        Me = "modal-dialog-scrollable",
        je = "modal-scrollbar-measure",
        He = "modal-backdrop",
        We = "modal-open",
        Re = "fade",
        Be = "show",
        Fe = {
            DIALOG: ".modal-dialog",
            MODAL_BODY: ".modal-body",
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]',
            FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            STICKY_CONTENT: ".sticky-top"
        },
        qe = function() {
            function e(e, t) {
                this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(Fe.DIALOG), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
            }
            var n = e.prototype;
            return n.toggle = function(e) {
                return this._isShown ? this.hide() : this.show(e)
            }, n.show = function(e) {
                var n = this;
                if (!this._isShown && !this._isTransitioning) {
                    t(this._element).hasClass(Re) && (this._isTransitioning = !0);
                    var i = t.Event($e.SHOW, {
                        relatedTarget: e
                    });
                    t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on($e.CLICK_DISMISS, Fe.DATA_DISMISS, function(e) {
                        return n.hide(e)
                    }), t(this._dialog).on($e.MOUSEDOWN_DISMISS, function() {
                        t(n._element).one($e.MOUSEUP_DISMISS, function(e) {
                            t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function() {
                        return n._showElement(e)
                    }))
                }
            }, n.hide = function(e) {
                var n = this;
                if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
                    var i = t.Event($e.HIDE);
                    if (t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                        this._isShown = !1;
                        var o = t(this._element).hasClass(Re);
                        if (o && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off($e.FOCUSIN), t(this._element).removeClass(Be), t(this._element).off($e.CLICK_DISMISS), t(this._dialog).off($e.MOUSEDOWN_DISMISS), o) {
                            var r = c.getTransitionDurationFromElement(this._element);
                            t(this._element).one(c.TRANSITION_END, function(e) {
                                return n._hideModal(e)
                            }).emulateTransitionEnd(r)
                        } else this._hideModal()
                    }
                }
            }, n.dispose = function() {
                [window, this._element, this._dialog].forEach(function(e) {
                    return t(e).off(".bs.modal")
                }), t(document).off($e.FOCUSIN), t.removeData(this._element, "bs.modal"), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
            }, n.handleUpdate = function() {
                this._adjustDialog()
            }, n._getConfig = function(e) {
                return e = s({}, Ne, e), c.typeCheckConfig("modal", e, Ie), e
            }, n._showElement = function(e) {
                var n = this,
                    i = t(this._element).hasClass(Re);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), t(this._dialog).hasClass(Me) ? this._dialog.querySelector(Fe.MODAL_BODY).scrollTop = 0 : this._element.scrollTop = 0, i && c.reflow(this._element), t(this._element).addClass(Be), this._config.focus && this._enforceFocus();
                var o = t.Event($e.SHOWN, {
                        relatedTarget: e
                    }),
                    r = function() {
                        n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(o)
                    };
                if (i) {
                    var s = c.getTransitionDurationFromElement(this._dialog);
                    t(this._dialog).one(c.TRANSITION_END, r).emulateTransitionEnd(s)
                } else r()
            }, n._enforceFocus = function() {
                var e = this;
                t(document).off($e.FOCUSIN).on($e.FOCUSIN, function(n) {
                    document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus()
                })
            }, n._setEscapeEvent = function() {
                var e = this;
                this._isShown && this._config.keyboard ? t(this._element).on($e.KEYDOWN_DISMISS, function(t) {
                    27 === t.which && (t.preventDefault(), e.hide())
                }) : this._isShown || t(this._element).off($e.KEYDOWN_DISMISS)
            }, n._setResizeEvent = function() {
                var e = this;
                this._isShown ? t(window).on($e.RESIZE, function(t) {
                    return e.handleUpdate(t)
                }) : t(window).off($e.RESIZE)
            }, n._hideModal = function() {
                var e = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function() {
                    t(document.body).removeClass(We), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger($e.HIDDEN)
                })
            }, n._removeBackdrop = function() {
                this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
            }, n._showBackdrop = function(e) {
                var n = this,
                    i = t(this._element).hasClass(Re) ? Re : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = He, i && this._backdrop.classList.add(i), t(this._backdrop).appendTo(document.body), t(this._element).on($e.CLICK_DISMISS, function(e) {
                            n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                        }), i && c.reflow(this._backdrop), t(this._backdrop).addClass(Be), !e) return;
                    if (!i) return void e();
                    var o = c.getTransitionDurationFromElement(this._backdrop);
                    t(this._backdrop).one(c.TRANSITION_END, e).emulateTransitionEnd(o)
                } else if (!this._isShown && this._backdrop) {
                    t(this._backdrop).removeClass(Be);
                    var r = function() {
                        n._removeBackdrop(), e && e()
                    };
                    if (t(this._element).hasClass(Re)) {
                        var s = c.getTransitionDurationFromElement(this._backdrop);
                        t(this._backdrop).one(c.TRANSITION_END, r).emulateTransitionEnd(s)
                    } else r()
                } else e && e()
            }, n._adjustDialog = function() {
                var e = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, n._resetAdjustments = function() {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, n._checkScrollbar = function() {
                var e = document.body.getBoundingClientRect();
                this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, n._setScrollbar = function() {
                var e = this;
                if (this._isBodyOverflowing) {
                    var n = [].slice.call(document.querySelectorAll(Fe.FIXED_CONTENT)),
                        i = [].slice.call(document.querySelectorAll(Fe.STICKY_CONTENT));
                    t(n).each(function(n, i) {
                        var o = i.style.paddingRight,
                            r = t(i).css("padding-right");
                        t(i).data("padding-right", o).css("padding-right", parseFloat(r) + e._scrollbarWidth + "px")
                    }), t(i).each(function(n, i) {
                        var o = i.style.marginRight,
                            r = t(i).css("margin-right");
                        t(i).data("margin-right", o).css("margin-right", parseFloat(r) - e._scrollbarWidth + "px")
                    });
                    var o = document.body.style.paddingRight,
                        r = t(document.body).css("padding-right");
                    t(document.body).data("padding-right", o).css("padding-right", parseFloat(r) + this._scrollbarWidth + "px")
                }
                t(document.body).addClass(We)
            }, n._resetScrollbar = function() {
                var e = [].slice.call(document.querySelectorAll(Fe.FIXED_CONTENT));
                t(e).each(function(e, n) {
                    var i = t(n).data("padding-right");
                    t(n).removeData("padding-right"), n.style.paddingRight = i || ""
                });
                var n = [].slice.call(document.querySelectorAll("" + Fe.STICKY_CONTENT));
                t(n).each(function(e, n) {
                    var i = t(n).data("margin-right");
                    void 0 !== i && t(n).css("margin-right", i).removeData("margin-right")
                });
                var i = t(document.body).data("padding-right");
                t(document.body).removeData("padding-right"), document.body.style.paddingRight = i || ""
            }, n._getScrollbarWidth = function() {
                var e = document.createElement("div");
                e.className = je, document.body.appendChild(e);
                var t = e.getBoundingClientRect().width - e.clientWidth;
                return document.body.removeChild(e), t
            }, e._jQueryInterface = function(n, i) {
                return this.each(function() {
                    var o = t(this).data("bs.modal"),
                        r = s({}, Ne, t(this).data(), "object" == typeof n && n ? n : {});
                    if (o || (o = new e(this, r), t(this).data("bs.modal", o)), "string" == typeof n) {
                        if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                        o[n](i)
                    } else r.show && o.show(i)
                })
            }, o(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return Ne
                }
            }]), e
        }();
    t(document).on($e.CLICK_DATA_API, Fe.DATA_TOGGLE, function(e) {
        var n, i = this,
            o = c.getSelectorFromElement(this);
        o && (n = document.querySelector(o));
        var r = t(n).data("bs.modal") ? "toggle" : s({}, t(n).data(), t(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
        var a = t(n).one($e.SHOW, function(e) {
            e.isDefaultPrevented() || a.one($e.HIDDEN, function() {
                t(i).is(":visible") && i.focus()
            })
        });
        qe._jQueryInterface.call(t(n), r, this)
    }), t.fn.modal = qe._jQueryInterface, t.fn.modal.Constructor = qe, t.fn.modal.noConflict = function() {
        return t.fn.modal = Le, qe._jQueryInterface
    };
    var Ve = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        Xe = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        },
        Ye = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi,
        Ue = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;

    function ze(e, t, n) {
        if (0 === e.length) return e;
        if (n && "function" == typeof n) return n(e);
        for (var i = (new window.DOMParser).parseFromString(e, "text/html"), o = Object.keys(t), r = [].slice.call(i.body.querySelectorAll("*")), s = function(e, n) {
                var i = r[e],
                    s = i.nodeName.toLowerCase();
                if (-1 === o.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
                var a = [].slice.call(i.attributes),
                    l = [].concat(t["*"] || [], t[s] || []);
                a.forEach(function(e) {
                    (function(e, t) {
                        var n = e.nodeName.toLowerCase();
                        if (-1 !== t.indexOf(n)) return -1 === Ve.indexOf(n) || Boolean(e.nodeValue.match(Ye) || e.nodeValue.match(Ue));
                        for (var i = t.filter(function(e) {
                                return e instanceof RegExp
                            }), o = 0, r = i.length; o < r; o++)
                            if (n.match(i[o])) return !0;
                        return !1
                    })(e, l) || i.removeAttribute(e.nodeName)
                })
            }, a = 0, l = r.length; a < l; a++) s(a);
        return i.body.innerHTML
    }
    var Qe = "tooltip",
        Ke = t.fn.tooltip,
        Ge = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        Ze = ["sanitize", "whiteList", "sanitizeFn"],
        Je = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object"
        },
        et = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        },
        tt = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: Xe
        },
        nt = "show",
        it = "out",
        ot = {
            HIDE: "hide.bs.tooltip",
            HIDDEN: "hidden.bs.tooltip",
            SHOW: "show.bs.tooltip",
            SHOWN: "shown.bs.tooltip",
            INSERTED: "inserted.bs.tooltip",
            CLICK: "click.bs.tooltip",
            FOCUSIN: "focusin.bs.tooltip",
            FOCUSOUT: "focusout.bs.tooltip",
            MOUSEENTER: "mouseenter.bs.tooltip",
            MOUSELEAVE: "mouseleave.bs.tooltip"
        },
        rt = "fade",
        st = "show",
        at = ".tooltip-inner",
        lt = ".arrow",
        ct = "hover",
        ut = "focus",
        dt = "click",
        ht = "manual",
        ft = function() {
            function e(e, t) {
                if (void 0 === n) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
            }
            var i = e.prototype;
            return i.enable = function() {
                this._isEnabled = !0
            }, i.disable = function() {
                this._isEnabled = !1
            }, i.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled
            }, i.toggle = function(e) {
                if (this._isEnabled)
                    if (e) {
                        var n = this.constructor.DATA_KEY,
                            i = t(e.currentTarget).data(n);
                        i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                    } else {
                        if (t(this.getTipElement()).hasClass(st)) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, i.dispose = function() {
                clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, i.show = function() {
                var e = this;
                if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
                var i = t.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    t(this.element).trigger(i);
                    var o = c.findShadowRoot(this.element),
                        r = t.contains(null !== o ? o : this.element.ownerDocument.documentElement, this.element);
                    if (i.isDefaultPrevented() || !r) return;
                    var s = this.getTipElement(),
                        a = c.getUID(this.constructor.NAME);
                    s.setAttribute("id", a), this.element.setAttribute("aria-describedby", a), this.setContent(), this.config.animation && t(s).addClass(rt);
                    var l = "function" == typeof this.config.placement ? this.config.placement.call(this, s, this.element) : this.config.placement,
                        u = this._getAttachment(l);
                    this.addAttachmentClass(u);
                    var d = this._getContainer();
                    t(s).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(s).appendTo(d), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, s, {
                        placement: u,
                        modifiers: {
                            offset: this._getOffset(),
                            flip: {
                                behavior: this.config.fallbackPlacement
                            },
                            arrow: {
                                element: lt
                            },
                            preventOverflow: {
                                boundariesElement: this.config.boundary
                            }
                        },
                        onCreate: function(t) {
                            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                        },
                        onUpdate: function(t) {
                            return e._handlePopperPlacementChange(t)
                        }
                    }), t(s).addClass(st), "ontouchstart" in document.documentElement && t(document.body).children().on("mouseover", null, t.noop);
                    var h = function() {
                        e.config.animation && e._fixTransition();
                        var n = e._hoverState;
                        e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), n === it && e._leave(null, e)
                    };
                    if (t(this.tip).hasClass(rt)) {
                        var f = c.getTransitionDurationFromElement(this.tip);
                        t(this.tip).one(c.TRANSITION_END, h).emulateTransitionEnd(f)
                    } else h()
                }
            }, i.hide = function(e) {
                var n = this,
                    i = this.getTipElement(),
                    o = t.Event(this.constructor.Event.HIDE),
                    r = function() {
                        n._hoverState !== nt && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e()
                    };
                if (t(this.element).trigger(o), !o.isDefaultPrevented()) {
                    if (t(i).removeClass(st), "ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), this._activeTrigger[dt] = !1, this._activeTrigger[ut] = !1, this._activeTrigger[ct] = !1, t(this.tip).hasClass(rt)) {
                        var s = c.getTransitionDurationFromElement(i);
                        t(i).one(c.TRANSITION_END, r).emulateTransitionEnd(s)
                    } else r();
                    this._hoverState = ""
                }
            }, i.update = function() {
                null !== this._popper && this._popper.scheduleUpdate()
            }, i.isWithContent = function() {
                return Boolean(this.getTitle())
            }, i.addAttachmentClass = function(e) {
                t(this.getTipElement()).addClass("bs-tooltip-" + e)
            }, i.getTipElement = function() {
                return this.tip = this.tip || t(this.config.template)[0], this.tip
            }, i.setContent = function() {
                var e = this.getTipElement();
                this.setElementContent(t(e.querySelectorAll(at)), this.getTitle()), t(e).removeClass(rt + " " + st)
            }, i.setElementContent = function(e, n) {
                "object" != typeof n || !n.nodeType && !n.jquery ? this.config.html ? (this.config.sanitize && (n = ze(n, this.config.whiteList, this.config.sanitizeFn)), e.html(n)) : e.text(n) : this.config.html ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text())
            }, i.getTitle = function() {
                var e = this.element.getAttribute("data-original-title");
                return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
            }, i._getOffset = function() {
                var e = this,
                    t = {};
                return "function" == typeof this.config.offset ? t.fn = function(t) {
                    return t.offsets = s({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t
                } : t.offset = this.config.offset, t
            }, i._getContainer = function() {
                return !1 === this.config.container ? document.body : c.isElement(this.config.container) ? t(this.config.container) : t(document).find(this.config.container)
            }, i._getAttachment = function(e) {
                return et[e.toUpperCase()]
            }, i._setListeners = function() {
                var e = this;
                this.config.trigger.split(" ").forEach(function(n) {
                    if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function(t) {
                        return e.toggle(t)
                    });
                    else if (n !== ht) {
                        var i = n === ct ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                            o = n === ct ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                        t(e.element).on(i, e.config.selector, function(t) {
                            return e._enter(t)
                        }).on(o, e.config.selector, function(t) {
                            return e._leave(t)
                        })
                    }
                }), t(this.element).closest(".modal").on("hide.bs.modal", function() {
                    e.element && e.hide()
                }), this.config.selector ? this.config = s({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, i._fixTitle = function() {
                var e = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, i._enter = function(e, n) {
                var i = this.constructor.DATA_KEY;
                (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? ut : ct] = !0), t(n.getTipElement()).hasClass(st) || n._hoverState === nt ? n._hoverState = nt : (clearTimeout(n._timeout), n._hoverState = nt, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function() {
                    n._hoverState === nt && n.show()
                }, n.config.delay.show) : n.show())
            }, i._leave = function(e, n) {
                var i = this.constructor.DATA_KEY;
                (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? ut : ct] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = it, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function() {
                    n._hoverState === it && n.hide()
                }, n.config.delay.hide) : n.hide())
            }, i._isWithActiveTrigger = function() {
                for (var e in this._activeTrigger)
                    if (this._activeTrigger[e]) return !0;
                return !1
            }, i._getConfig = function(e) {
                var n = t(this.element).data();
                return Object.keys(n).forEach(function(e) {
                    -1 !== Ze.indexOf(e) && delete n[e]
                }), "number" == typeof(e = s({}, this.constructor.Default, n, "object" == typeof e && e ? e : {})).delay && (e.delay = {
                    show: e.delay,
                    hide: e.delay
                }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), c.typeCheckConfig(Qe, e, this.constructor.DefaultType), e.sanitize && (e.template = ze(e.template, e.whiteList, e.sanitizeFn)), e
            }, i._getDelegateConfig = function() {
                var e = {};
                if (this.config)
                    for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                return e
            }, i._cleanTipClass = function() {
                var e = t(this.getTipElement()),
                    n = e.attr("class").match(Ge);
                null !== n && n.length && e.removeClass(n.join(""))
            }, i._handlePopperPlacementChange = function(e) {
                var t = e.instance;
                this.tip = t.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
            }, i._fixTransition = function() {
                var e = this.getTipElement(),
                    n = this.config.animation;
                null === e.getAttribute("x-placement") && (t(e).removeClass(rt), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = t(this).data("bs.tooltip"),
                        o = "object" == typeof n && n;
                    if ((i || !/dispose|hide/.test(n)) && (i || (i = new e(this, o), t(this).data("bs.tooltip", i)), "string" == typeof n)) {
                        if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n]()
                    }
                })
            }, o(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return tt
                }
            }, {
                key: "NAME",
                get: function() {
                    return Qe
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return "bs.tooltip"
                }
            }, {
                key: "Event",
                get: function() {
                    return ot
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return ".bs.tooltip"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Je
                }
            }]), e
        }();
    t.fn.tooltip = ft._jQueryInterface, t.fn.tooltip.Constructor = ft, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = Ke, ft._jQueryInterface
    };
    var pt = "popover",
        gt = t.fn.popover,
        mt = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        vt = s({}, ft.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }),
        yt = s({}, ft.DefaultType, {
            content: "(string|element|function)"
        }),
        bt = "fade",
        wt = "show",
        _t = ".popover-header",
        Ct = ".popover-body",
        St = {
            HIDE: "hide.bs.popover",
            HIDDEN: "hidden.bs.popover",
            SHOW: "show.bs.popover",
            SHOWN: "shown.bs.popover",
            INSERTED: "inserted.bs.popover",
            CLICK: "click.bs.popover",
            FOCUSIN: "focusin.bs.popover",
            FOCUSOUT: "focusout.bs.popover",
            MOUSEENTER: "mouseenter.bs.popover",
            MOUSELEAVE: "mouseleave.bs.popover"
        },
        xt = function(e) {
            var n, i;

            function r() {
                return e.apply(this, arguments) || this
            }
            i = e, (n = r).prototype = Object.create(i.prototype), n.prototype.constructor = n, n.__proto__ = i;
            var s = r.prototype;
            return s.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }, s.addAttachmentClass = function(e) {
                t(this.getTipElement()).addClass("bs-popover-" + e)
            }, s.getTipElement = function() {
                return this.tip = this.tip || t(this.config.template)[0], this.tip
            }, s.setContent = function() {
                var e = t(this.getTipElement());
                this.setElementContent(e.find(_t), this.getTitle());
                var n = this._getContent();
                "function" == typeof n && (n = n.call(this.element)), this.setElementContent(e.find(Ct), n), e.removeClass(bt + " " + wt)
            }, s._getContent = function() {
                return this.element.getAttribute("data-content") || this.config.content
            }, s._cleanTipClass = function() {
                var e = t(this.getTipElement()),
                    n = e.attr("class").match(mt);
                null !== n && n.length > 0 && e.removeClass(n.join(""))
            }, r._jQueryInterface = function(e) {
                return this.each(function() {
                    var n = t(this).data("bs.popover"),
                        i = "object" == typeof e ? e : null;
                    if ((n || !/dispose|hide/.test(e)) && (n || (n = new r(this, i), t(this).data("bs.popover", n)), "string" == typeof e)) {
                        if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                        n[e]()
                    }
                })
            }, o(r, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return vt
                }
            }, {
                key: "NAME",
                get: function() {
                    return pt
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return "bs.popover"
                }
            }, {
                key: "Event",
                get: function() {
                    return St
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return ".bs.popover"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return yt
                }
            }]), r
        }(ft);
    t.fn.popover = xt._jQueryInterface, t.fn.popover.Constructor = xt, t.fn.popover.noConflict = function() {
        return t.fn.popover = gt, xt._jQueryInterface
    };
    var Tt = "scrollspy",
        Et = t.fn[Tt],
        kt = {
            offset: 10,
            method: "auto",
            target: ""
        },
        Ot = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        },
        At = {
            ACTIVATE: "activate.bs.scrollspy",
            SCROLL: "scroll.bs.scrollspy",
            LOAD_DATA_API: "load.bs.scrollspy.data-api"
        },
        Dt = "dropdown-item",
        Pt = "active",
        Lt = {
            DATA_SPY: '[data-spy="scroll"]',
            ACTIVE: ".active",
            NAV_LIST_GROUP: ".nav, .list-group",
            NAV_LINKS: ".nav-link",
            NAV_ITEMS: ".nav-item",
            LIST_ITEMS: ".list-group-item",
            DROPDOWN: ".dropdown",
            DROPDOWN_ITEMS: ".dropdown-item",
            DROPDOWN_TOGGLE: ".dropdown-toggle"
        },
        Nt = "offset",
        It = "position",
        $t = function() {
            function e(e, n) {
                var i = this;
                this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " " + Lt.NAV_LINKS + "," + this._config.target + " " + Lt.LIST_ITEMS + "," + this._config.target + " " + Lt.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(At.SCROLL, function(e) {
                    return i._process(e)
                }), this.refresh(), this._process()
            }
            var n = e.prototype;
            return n.refresh = function() {
                var e = this,
                    n = this._scrollElement === this._scrollElement.window ? Nt : It,
                    i = "auto" === this._config.method ? n : this._config.method,
                    o = i === It ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(e) {
                    var n, r = c.getSelectorFromElement(e);
                    if (r && (n = document.querySelector(r)), n) {
                        var s = n.getBoundingClientRect();
                        if (s.width || s.height) return [t(n)[i]().top + o, r]
                    }
                    return null
                }).filter(function(e) {
                    return e
                }).sort(function(e, t) {
                    return e[0] - t[0]
                }).forEach(function(t) {
                    e._offsets.push(t[0]), e._targets.push(t[1])
                })
            }, n.dispose = function() {
                t.removeData(this._element, "bs.scrollspy"), t(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, n._getConfig = function(e) {
                if ("string" != typeof(e = s({}, kt, "object" == typeof e && e ? e : {})).target) {
                    var n = t(e.target).attr("id");
                    n || (n = c.getUID(Tt), t(e.target).attr("id", n)), e.target = "#" + n
                }
                return c.typeCheckConfig(Tt, e, Ot), e
            }, n._getScrollTop = function() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, n._getScrollHeight = function() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, n._getOffsetHeight = function() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, n._process = function() {
                var e = this._getScrollTop() + this._config.offset,
                    t = this._getScrollHeight(),
                    n = this._config.offset + t - this._getOffsetHeight();
                if (this._scrollHeight !== t && this.refresh(), e >= n) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                    for (var o = this._offsets.length; o--;) {
                        this._activeTarget !== this._targets[o] && e >= this._offsets[o] && (void 0 === this._offsets[o + 1] || e < this._offsets[o + 1]) && this._activate(this._targets[o])
                    }
                }
            }, n._activate = function(e) {
                this._activeTarget = e, this._clear();
                var n = this._selector.split(",").map(function(t) {
                        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                    }),
                    i = t([].slice.call(document.querySelectorAll(n.join(","))));
                i.hasClass(Dt) ? (i.closest(Lt.DROPDOWN).find(Lt.DROPDOWN_TOGGLE).addClass(Pt), i.addClass(Pt)) : (i.addClass(Pt), i.parents(Lt.NAV_LIST_GROUP).prev(Lt.NAV_LINKS + ", " + Lt.LIST_ITEMS).addClass(Pt), i.parents(Lt.NAV_LIST_GROUP).prev(Lt.NAV_ITEMS).children(Lt.NAV_LINKS).addClass(Pt)), t(this._scrollElement).trigger(At.ACTIVATE, {
                    relatedTarget: e
                })
            }, n._clear = function() {
                [].slice.call(document.querySelectorAll(this._selector)).filter(function(e) {
                    return e.classList.contains(Pt)
                }).forEach(function(e) {
                    return e.classList.remove(Pt)
                })
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = t(this).data("bs.scrollspy");
                    if (i || (i = new e(this, "object" == typeof n && n), t(this).data("bs.scrollspy", i)), "string" == typeof n) {
                        if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n]()
                    }
                })
            }, o(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return kt
                }
            }]), e
        }();
    t(window).on(At.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll(Lt.DATA_SPY)), n = e.length; n--;) {
            var i = t(e[n]);
            $t._jQueryInterface.call(i, i.data())
        }
    }), t.fn[Tt] = $t._jQueryInterface, t.fn[Tt].Constructor = $t, t.fn[Tt].noConflict = function() {
        return t.fn[Tt] = Et, $t._jQueryInterface
    };
    var Mt = t.fn.tab,
        jt = {
            HIDE: "hide.bs.tab",
            HIDDEN: "hidden.bs.tab",
            SHOW: "show.bs.tab",
            SHOWN: "shown.bs.tab",
            CLICK_DATA_API: "click.bs.tab.data-api"
        },
        Ht = "dropdown-menu",
        Wt = "active",
        Rt = "disabled",
        Bt = "fade",
        Ft = "show",
        qt = ".dropdown",
        Vt = ".nav, .list-group",
        Xt = ".active",
        Yt = "> li > .active",
        Ut = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        zt = ".dropdown-toggle",
        Qt = "> .dropdown-menu .active",
        Kt = function() {
            function e(e) {
                this._element = e
            }
            var n = e.prototype;
            return n.show = function() {
                var e = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(Wt) || t(this._element).hasClass(Rt))) {
                    var n, i, o = t(this._element).closest(Vt)[0],
                        r = c.getSelectorFromElement(this._element);
                    if (o) {
                        var s = "UL" === o.nodeName || "OL" === o.nodeName ? Yt : Xt;
                        i = (i = t.makeArray(t(o).find(s)))[i.length - 1]
                    }
                    var a = t.Event(jt.HIDE, {
                            relatedTarget: this._element
                        }),
                        l = t.Event(jt.SHOW, {
                            relatedTarget: i
                        });
                    if (i && t(i).trigger(a), t(this._element).trigger(l), !l.isDefaultPrevented() && !a.isDefaultPrevented()) {
                        r && (n = document.querySelector(r)), this._activate(this._element, o);
                        var u = function() {
                            var n = t.Event(jt.HIDDEN, {
                                    relatedTarget: e._element
                                }),
                                o = t.Event(jt.SHOWN, {
                                    relatedTarget: i
                                });
                            t(i).trigger(n), t(e._element).trigger(o)
                        };
                        n ? this._activate(n, n.parentNode, u) : u()
                    }
                }
            }, n.dispose = function() {
                t.removeData(this._element, "bs.tab"), this._element = null
            }, n._activate = function(e, n, i) {
                var o = this,
                    r = (!n || "UL" !== n.nodeName && "OL" !== n.nodeName ? t(n).children(Xt) : t(n).find(Yt))[0],
                    s = i && r && t(r).hasClass(Bt),
                    a = function() {
                        return o._transitionComplete(e, r, i)
                    };
                if (r && s) {
                    var l = c.getTransitionDurationFromElement(r);
                    t(r).removeClass(Ft).one(c.TRANSITION_END, a).emulateTransitionEnd(l)
                } else a()
            }, n._transitionComplete = function(e, n, i) {
                if (n) {
                    t(n).removeClass(Wt);
                    var o = t(n.parentNode).find(Qt)[0];
                    o && t(o).removeClass(Wt), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                }
                if (t(e).addClass(Wt), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), c.reflow(e), e.classList.contains(Bt) && e.classList.add(Ft), e.parentNode && t(e.parentNode).hasClass(Ht)) {
                    var r = t(e).closest(qt)[0];
                    if (r) {
                        var s = [].slice.call(r.querySelectorAll(zt));
                        t(s).addClass(Wt)
                    }
                    e.setAttribute("aria-expanded", !0)
                }
                i && i()
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = t(this),
                        o = i.data("bs.tab");
                    if (o || (o = new e(this), i.data("bs.tab", o)), "string" == typeof n) {
                        if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                        o[n]()
                    }
                })
            }, o(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }]), e
        }();
    t(document).on(jt.CLICK_DATA_API, Ut, function(e) {
        e.preventDefault(), Kt._jQueryInterface.call(t(this), "show")
    }), t.fn.tab = Kt._jQueryInterface, t.fn.tab.Constructor = Kt, t.fn.tab.noConflict = function() {
        return t.fn.tab = Mt, Kt._jQueryInterface
    };
    var Gt = t.fn.toast,
        Zt = {
            CLICK_DISMISS: "click.dismiss.bs.toast",
            HIDE: "hide.bs.toast",
            HIDDEN: "hidden.bs.toast",
            SHOW: "show.bs.toast",
            SHOWN: "shown.bs.toast"
        },
        Jt = "fade",
        en = "hide",
        tn = "show",
        nn = "showing",
        on = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        rn = {
            animation: !0,
            autohide: !0,
            delay: 500
        },
        sn = '[data-dismiss="toast"]',
        an = function() {
            function e(e, t) {
                this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners()
            }
            var n = e.prototype;
            return n.show = function() {
                var e = this;
                t(this._element).trigger(Zt.SHOW), this._config.animation && this._element.classList.add(Jt);
                var n = function() {
                    e._element.classList.remove(nn), e._element.classList.add(tn), t(e._element).trigger(Zt.SHOWN), e._config.autohide && e.hide()
                };
                if (this._element.classList.remove(en), this._element.classList.add(nn), this._config.animation) {
                    var i = c.getTransitionDurationFromElement(this._element);
                    t(this._element).one(c.TRANSITION_END, n).emulateTransitionEnd(i)
                } else n()
            }, n.hide = function(e) {
                var n = this;
                this._element.classList.contains(tn) && (t(this._element).trigger(Zt.HIDE), e ? this._close() : this._timeout = setTimeout(function() {
                    n._close()
                }, this._config.delay))
            }, n.dispose = function() {
                clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(tn) && this._element.classList.remove(tn), t(this._element).off(Zt.CLICK_DISMISS), t.removeData(this._element, "bs.toast"), this._element = null, this._config = null
            }, n._getConfig = function(e) {
                return e = s({}, rn, t(this._element).data(), "object" == typeof e && e ? e : {}), c.typeCheckConfig("toast", e, this.constructor.DefaultType), e
            }, n._setListeners = function() {
                var e = this;
                t(this._element).on(Zt.CLICK_DISMISS, sn, function() {
                    return e.hide(!0)
                })
            }, n._close = function() {
                var e = this,
                    n = function() {
                        e._element.classList.add(en), t(e._element).trigger(Zt.HIDDEN)
                    };
                if (this._element.classList.remove(tn), this._config.animation) {
                    var i = c.getTransitionDurationFromElement(this._element);
                    t(this._element).one(c.TRANSITION_END, n).emulateTransitionEnd(i)
                } else n()
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = t(this),
                        o = i.data("bs.toast");
                    if (o || (o = new e(this, "object" == typeof n && n), i.data("bs.toast", o)), "string" == typeof n) {
                        if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                        o[n](this)
                    }
                })
            }, o(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return on
                }
            }, {
                key: "Default",
                get: function() {
                    return rn
                }
            }]), e
        }();
    t.fn.toast = an._jQueryInterface, t.fn.toast.Constructor = an, t.fn.toast.noConflict = function() {
            return t.fn.toast = Gt, an._jQueryInterface
        },
        function() {
            if (void 0 === t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var e = t.fn.jquery.split(" ")[0].split(".");
            if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }(), e.Util = c, e.Alert = g, e.Button = E, e.Carousel = U, e.Collapse = se, e.Dropdown = Pe, e.Modal = qe, e.Popover = xt, e.Scrollspy = $t, e.Tab = Kt, e.Toast = an, e.Tooltip = ft, Object.defineProperty(e, "__esModule", {
            value: !0
        })
}), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(e, t, n, i, o) {
            return jQuery.easing[jQuery.easing.def](e, t, n, i, o)
        },
        easeInQuad: function(e, t, n, i, o) {
            return i * (t /= o) * t + n
        },
        easeOutQuad: function(e, t, n, i, o) {
            return -i * (t /= o) * (t - 2) + n
        },
        easeInOutQuad: function(e, t, n, i, o) {
            return (t /= o / 2) < 1 ? i / 2 * t * t + n : -i / 2 * (--t * (t - 2) - 1) + n
        },
        easeInCubic: function(e, t, n, i, o) {
            return i * (t /= o) * t * t + n
        },
        easeOutCubic: function(e, t, n, i, o) {
            return i * ((t = t / o - 1) * t * t + 1) + n
        },
        easeInOutCubic: function(e, t, n, i, o) {
            return (t /= o / 2) < 1 ? i / 2 * t * t * t + n : i / 2 * ((t -= 2) * t * t + 2) + n
        },
        easeInQuart: function(e, t, n, i, o) {
            return i * (t /= o) * t * t * t + n
        },
        easeOutQuart: function(e, t, n, i, o) {
            return -i * ((t = t / o - 1) * t * t * t - 1) + n
        },
        easeInOutQuart: function(e, t, n, i, o) {
            return (t /= o / 2) < 1 ? i / 2 * t * t * t * t + n : -i / 2 * ((t -= 2) * t * t * t - 2) + n
        },
        easeInQuint: function(e, t, n, i, o) {
            return i * (t /= o) * t * t * t * t + n
        },
        easeOutQuint: function(e, t, n, i, o) {
            return i * ((t = t / o - 1) * t * t * t * t + 1) + n
        },
        easeInOutQuint: function(e, t, n, i, o) {
            return (t /= o / 2) < 1 ? i / 2 * t * t * t * t * t + n : i / 2 * ((t -= 2) * t * t * t * t + 2) + n
        },
        easeInSine: function(e, t, n, i, o) {
            return -i * Math.cos(t / o * (Math.PI / 2)) + i + n
        },
        easeOutSine: function(e, t, n, i, o) {
            return i * Math.sin(t / o * (Math.PI / 2)) + n
        },
        easeInOutSine: function(e, t, n, i, o) {
            return -i / 2 * (Math.cos(Math.PI * t / o) - 1) + n
        },
        easeInExpo: function(e, t, n, i, o) {
            return 0 == t ? n : i * Math.pow(2, 10 * (t / o - 1)) + n
        },
        easeOutExpo: function(e, t, n, i, o) {
            return t == o ? n + i : i * (1 - Math.pow(2, -10 * t / o)) + n
        },
        easeInOutExpo: function(e, t, n, i, o) {
            return 0 == t ? n : t == o ? n + i : (t /= o / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + n : i / 2 * (2 - Math.pow(2, -10 * --t)) + n
        },
        easeInCirc: function(e, t, n, i, o) {
            return -i * (Math.sqrt(1 - (t /= o) * t) - 1) + n
        },
        easeOutCirc: function(e, t, n, i, o) {
            return i * Math.sqrt(1 - (t = t / o - 1) * t) + n
        },
        easeInOutCirc: function(e, t, n, i, o) {
            return (t /= o / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + n : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
        },
        easeInElastic: function(e, t, n, i, o) {
            var r = 1.70158,
                s = 0,
                a = i;
            if (0 == t) return n;
            if (1 == (t /= o)) return n + i;
            if (s || (s = .3 * o), a < Math.abs(i)) {
                a = i;
                r = s / 4
            } else r = s / (2 * Math.PI) * Math.asin(i / a);
            return -a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * o - r) * (2 * Math.PI) / s) + n
        },
        easeOutElastic: function(e, t, n, i, o) {
            var r = 1.70158,
                s = 0,
                a = i;
            if (0 == t) return n;
            if (1 == (t /= o)) return n + i;
            if (s || (s = .3 * o), a < Math.abs(i)) {
                a = i;
                r = s / 4
            } else r = s / (2 * Math.PI) * Math.asin(i / a);
            return a * Math.pow(2, -10 * t) * Math.sin((t * o - r) * (2 * Math.PI) / s) + i + n
        },
        easeInOutElastic: function(e, t, n, i, o) {
            var r = 1.70158,
                s = 0,
                a = i;
            if (0 == t) return n;
            if (2 == (t /= o / 2)) return n + i;
            if (s || (s = o * (.3 * 1.5)), a < Math.abs(i)) {
                a = i;
                r = s / 4
            } else r = s / (2 * Math.PI) * Math.asin(i / a);
            return t < 1 ? a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * o - r) * (2 * Math.PI) / s) * -.5 + n : a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * o - r) * (2 * Math.PI) / s) * .5 + i + n
        },
        easeInBack: function(e, t, n, i, o, r) {
            return null == r && (r = 1.70158), i * (t /= o) * t * ((r + 1) * t - r) + n
        },
        easeOutBack: function(e, t, n, i, o, r) {
            return null == r && (r = 1.70158), i * ((t = t / o - 1) * t * ((r + 1) * t + r) + 1) + n
        },
        easeInOutBack: function(e, t, n, i, o, r) {
            return null == r && (r = 1.70158), (t /= o / 2) < 1 ? i / 2 * (t * t * ((1 + (r *= 1.525)) * t - r)) + n : i / 2 * ((t -= 2) * t * ((1 + (r *= 1.525)) * t + r) + 2) + n
        },
        easeInBounce: function(e, t, n, i, o) {
            return i - jQuery.easing.easeOutBounce(e, o - t, 0, i, o) + n
        },
        easeOutBounce: function(e, t, n, i, o) {
            return (t /= o) < 1 / 2.75 ? i * (7.5625 * t * t) + n : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
        },
        easeInOutBounce: function(e, t, n, i, o) {
            return t < o / 2 ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, i, o) + n : .5 * jQuery.easing.easeOutBounce(e, 2 * t - o, 0, i, o) + .5 * i + n
        }
    }), jQuery.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (function(e) {
        function t(e) {
            var t = e.length,
                i = n.type(e);
            return "function" !== i && !n.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
        }
        if (!e.jQuery) {
            var n = function(e, t) {
                return new n.fn.init(e, t)
            };
            n.isWindow = function(e) {
                return null != e && e == e.window
            }, n.type = function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? o[s.call(e)] || "object" : typeof e
            }, n.isArray = Array.isArray || function(e) {
                return "array" === n.type(e)
            }, n.isPlainObject = function(e) {
                var t;
                if (!e || "object" !== n.type(e) || e.nodeType || n.isWindow(e)) return !1;
                try {
                    if (e.constructor && !r.call(e, "constructor") && !r.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (e) {
                    return !1
                }
                for (t in e);
                return void 0 === t || r.call(e, t)
            }, n.each = function(e, n, i) {
                var o = 0,
                    r = e.length,
                    s = t(e);
                if (i) {
                    if (s)
                        for (; r > o && !1 !== n.apply(e[o], i); o++);
                    else
                        for (o in e)
                            if (!1 === n.apply(e[o], i)) break
                } else if (s)
                    for (; r > o && !1 !== n.call(e[o], o, e[o]); o++);
                else
                    for (o in e)
                        if (!1 === n.call(e[o], o, e[o])) break; return e
            }, n.data = function(e, t, o) {
                if (void 0 === o) {
                    var r = (s = e[n.expando]) && i[s];
                    if (void 0 === t) return r;
                    if (r && t in r) return r[t]
                } else if (void 0 !== t) {
                    var s = e[n.expando] || (e[n.expando] = ++n.uuid);
                    return i[s] = i[s] || {}, i[s][t] = o, o
                }
            }, n.removeData = function(e, t) {
                var o = e[n.expando],
                    r = o && i[o];
                r && n.each(t, function(e, t) {
                    delete r[t]
                })
            }, n.extend = function() {
                var e, t, i, o, r, s, a = arguments[0] || {},
                    l = 1,
                    c = arguments.length,
                    u = !1;
                for ("boolean" == typeof a && (u = a, a = arguments[l] || {}, l++), "object" != typeof a && "function" !== n.type(a) && (a = {}), l === c && (a = this, l--); c > l; l++)
                    if (null != (r = arguments[l]))
                        for (o in r) e = a[o], a !== (i = r[o]) && (u && i && (n.isPlainObject(i) || (t = n.isArray(i))) ? (t ? (t = !1, s = e && n.isArray(e) ? e : []) : s = e && n.isPlainObject(e) ? e : {}, a[o] = n.extend(u, s, i)) : void 0 !== i && (a[o] = i));
                return a
            }, n.queue = function(e, i, o) {
                if (e) {
                    i = (i || "fx") + "queue";
                    var r = n.data(e, i);
                    return o ? (!r || n.isArray(o) ? r = n.data(e, i, function(e, n) {
                        var i = n || [];
                        return null != e && (t(Object(e)) ? function(e, t) {
                            for (var n = +t.length, i = 0, o = e.length; n > i;) e[o++] = t[i++];
                            if (n != n)
                                for (; void 0 !== t[i];) e[o++] = t[i++];
                            e.length = o
                        }(i, "string" == typeof e ? [e] : e) : [].push.call(i, e)), i
                    }(o)) : r.push(o), r) : r || []
                }
            }, n.dequeue = function(e, t) {
                n.each(e.nodeType ? [e] : e, function(e, i) {
                    t = t || "fx";
                    var o = n.queue(i, t),
                        r = o.shift();
                    "inprogress" === r && (r = o.shift()), r && ("fx" === t && o.unshift("inprogress"), r.call(i, function() {
                        n.dequeue(i, t)
                    }))
                })
            }, n.fn = n.prototype = {
                init: function(e) {
                    if (e.nodeType) return this[0] = e, this;
                    throw new Error("Not a DOM node.")
                },
                offset: function() {
                    var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                        top: 0,
                        left: 0
                    };
                    return {
                        top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                        left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                    }
                },
                position: function() {
                    function e() {
                        for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position;) e = e.offsetParent;
                        return e || document
                    }
                    var t = this[0],
                        e = e.apply(t),
                        i = this.offset(),
                        o = /^(?:body|html)$/i.test(e.nodeName) ? {
                            top: 0,
                            left: 0
                        } : n(e).offset();
                    return i.top -= parseFloat(t.style.marginTop) || 0, i.left -= parseFloat(t.style.marginLeft) || 0, e.style && (o.top += parseFloat(e.style.borderTopWidth) || 0, o.left += parseFloat(e.style.borderLeftWidth) || 0), {
                        top: i.top - o.top,
                        left: i.left - o.left
                    }
                }
            };
            var i = {};
            n.expando = "velocity" + (new Date).getTime(), n.uuid = 0;
            for (var o = {}, r = o.hasOwnProperty, s = o.toString, a = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < a.length; l++) o["[object " + a[l] + "]"] = a[l].toLowerCase();
            n.fn.init.prototype = n.fn, e.Velocity = {
                Utilities: n
            }
        }
    }(window), function(e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
    }(function() {
        return function(e, t, n, i) {
            function o(e) {
                return f.isWrapped(e) ? e = [].slice.call(e) : f.isNode(e) && (e = [e]), e
            }

            function r(e) {
                var t = u.data(e, "velocity");
                return null === t ? i : t
            }

            function s(e, n, i, o) {
                function r(e, t) {
                    return 1 - 3 * t + 3 * e
                }

                function s(e, t) {
                    return 3 * t - 6 * e
                }

                function a(e) {
                    return 3 * e
                }

                function l(e, t, n) {
                    return ((r(t, n) * e + s(t, n)) * e + a(t)) * e
                }

                function c(e, t, n) {
                    return 3 * r(t, n) * e * e + 2 * s(t, n) * e + a(t)
                }

                function u(t, n) {
                    for (var o = 0; f > o; ++o) {
                        var r = c(n, e, i);
                        if (0 === r) return n;
                        n -= (l(n, e, i) - t) / r
                    }
                    return n
                }

                function d(t, n, o) {
                    var r, s, a = 0;
                    do {
                        (r = l(s = n + (o - n) / 2, e, i) - t) > 0 ? o = s : n = s
                    } while (Math.abs(r) > g && ++a < m);
                    return s
                }

                function h() {
                    C = !0, (e != n || i != o) && function() {
                        for (var t = 0; v > t; ++t) _[t] = l(t * y, e, i)
                    }()
                }
                var f = 4,
                    p = .001,
                    g = 1e-7,
                    m = 10,
                    v = 11,
                    y = 1 / (v - 1),
                    b = "Float32Array" in t;
                if (4 !== arguments.length) return !1;
                for (var w = 0; 4 > w; ++w)
                    if ("number" != typeof arguments[w] || isNaN(arguments[w]) || !isFinite(arguments[w])) return !1;
                e = Math.min(e, 1), i = Math.min(i, 1), e = Math.max(e, 0), i = Math.max(i, 0);
                var _ = b ? new Float32Array(v) : new Array(v),
                    C = !1,
                    S = function(t) {
                        return C || h(), e === n && i === o ? t : 0 === t ? 0 : 1 === t ? 1 : l(function(t) {
                            for (var n = 0, o = 1, r = v - 1; o != r && _[o] <= t; ++o) n += y;
                            var s = n + (t - _[--o]) / (_[o + 1] - _[o]) * y,
                                a = c(s, e, i);
                            return a >= p ? u(t, s) : 0 == a ? s : d(t, n, n + y)
                        }(t), n, o)
                    };
                S.getControlPoints = function() {
                    return [{
                        x: e,
                        y: n
                    }, {
                        x: i,
                        y: o
                    }]
                };
                var x = "generateBezier(" + [e, n, i, o] + ")";
                return S.toString = function() {
                    return x
                }, S
            }

            function a(e, t) {
                var n = e;
                return f.isString(e) ? v.Easings[e] || (n = !1) : n = f.isArray(e) && 1 === e.length ? function(e) {
                    return function(t) {
                        return Math.round(t * e) * (1 / e)
                    }
                }.apply(null, e) : f.isArray(e) && 2 === e.length ? y.apply(null, e.concat([t])) : !(!f.isArray(e) || 4 !== e.length) && s.apply(null, e), !1 === n && (n = v.Easings[v.defaults.easing] ? v.defaults.easing : m), n
            }

            function l(e) {
                if (e) {
                    var t = (new Date).getTime(),
                        n = v.State.calls.length;
                    n > 1e4 && (v.State.calls = function(e) {
                        for (var t = -1, n = e ? e.length : 0, i = []; ++t < n;) {
                            var o = e[t];
                            o && i.push(o)
                        }
                        return i
                    }(v.State.calls));
                    for (var o = 0; n > o; o++)
                        if (v.State.calls[o]) {
                            var s = v.State.calls[o],
                                a = s[0],
                                d = s[2],
                                h = s[3],
                                p = !!h,
                                g = null;
                            h || (h = v.State.calls[o][3] = t - 16);
                            for (var m = Math.min((t - h) / d.duration, 1), y = 0, w = a.length; w > y; y++) {
                                var C = a[y],
                                    S = C.element;
                                if (r(S)) {
                                    var x = !1;
                                    if (d.display !== i && null !== d.display && "none" !== d.display) {
                                        if ("flex" === d.display) {
                                            u.each(["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"], function(e, t) {
                                                b.setPropertyValue(S, "display", t)
                                            })
                                        }
                                        b.setPropertyValue(S, "display", d.display)
                                    }
                                    for (var T in d.visibility !== i && "hidden" !== d.visibility && b.setPropertyValue(S, "visibility", d.visibility), C)
                                        if ("element" !== T) {
                                            var E, k = C[T],
                                                O = f.isString(k.easing) ? v.Easings[k.easing] : k.easing;
                                            if (1 === m) E = k.endValue;
                                            else {
                                                var A = k.endValue - k.startValue;
                                                if (E = k.startValue + A * O(m, d, A), !p && E === k.currentValue) continue
                                            }
                                            if (k.currentValue = E, "tween" === T) g = E;
                                            else {
                                                if (b.Hooks.registered[T]) {
                                                    var D = b.Hooks.getRoot(T),
                                                        P = r(S).rootPropertyValueCache[D];
                                                    P && (k.rootPropertyValue = P)
                                                }
                                                var L = b.setPropertyValue(S, T, k.currentValue + (0 === parseFloat(E) ? "" : k.unitType), k.rootPropertyValue, k.scrollData);
                                                b.Hooks.registered[T] && (r(S).rootPropertyValueCache[D] = b.Normalizations.registered[D] ? b.Normalizations.registered[D]("extract", null, L[1]) : L[1]), "transform" === L[0] && (x = !0)
                                            }
                                        }
                                    d.mobileHA && r(S).transformCache.translate3d === i && (r(S).transformCache.translate3d = "(0px, 0px, 0px)", x = !0), x && b.flushTransformCache(S)
                                }
                            }
                            d.display !== i && "none" !== d.display && (v.State.calls[o][2].display = !1), d.visibility !== i && "hidden" !== d.visibility && (v.State.calls[o][2].visibility = !1), d.progress && d.progress.call(s[1], s[1], m, Math.max(0, h + d.duration - t), h, g), 1 === m && c(o)
                        }
                }
                v.State.isTicking && _(l)
            }

            function c(e, t) {
                if (!v.State.calls[e]) return !1;
                for (var n = v.State.calls[e][0], o = v.State.calls[e][1], s = v.State.calls[e][2], a = v.State.calls[e][4], l = !1, c = 0, d = n.length; d > c; c++) {
                    var h = n[c].element;
                    if (t || s.loop || ("none" === s.display && b.setPropertyValue(h, "display", s.display), "hidden" === s.visibility && b.setPropertyValue(h, "visibility", s.visibility)), !0 !== s.loop && (u.queue(h)[1] === i || !/\.velocityQueueEntryFlag/i.test(u.queue(h)[1])) && r(h)) {
                        r(h).isAnimating = !1, r(h).rootPropertyValueCache = {};
                        var f = !1;
                        u.each(b.Lists.transforms3D, function(e, t) {
                            var n = /^scale/.test(t) ? 1 : 0,
                                o = r(h).transformCache[t];
                            r(h).transformCache[t] !== i && new RegExp("^\\(" + n + "[^.]").test(o) && (f = !0, delete r(h).transformCache[t])
                        }), s.mobileHA && (f = !0, delete r(h).transformCache.translate3d), f && b.flushTransformCache(h), b.Values.removeClass(h, "velocity-animating")
                    }
                    if (!t && s.complete && !s.loop && c === d - 1) try {
                        s.complete.call(o, o)
                    } catch (e) {
                        setTimeout(function() {
                            throw e
                        }, 1)
                    }
                    a && !0 !== s.loop && a(o), r(h) && !0 === s.loop && !t && (u.each(r(h).tweensContainer, function(e, t) {
                        /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360), /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
                    }), v(h, "reverse", {
                        loop: !0,
                        delay: s.delay
                    })), !1 !== s.queue && u.dequeue(h, s.queue)
                }
                v.State.calls[e] = !1;
                for (var p = 0, g = v.State.calls.length; g > p; p++)
                    if (!1 !== v.State.calls[p]) {
                        l = !0;
                        break
                    }!1 === l && (v.State.isTicking = !1, delete v.State.calls, v.State.calls = [])
            }
            var u, d = function() {
                    if (n.documentMode) return n.documentMode;
                    for (var e = 7; e > 4; e--) {
                        var t = n.createElement("div");
                        if (t.innerHTML = "\x3c!--[if IE " + e + "]><span></span><![endif]--\x3e", t.getElementsByTagName("span").length) return t = null, e
                    }
                    return i
                }(),
                h = function() {
                    var e = 0;
                    return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(t) {
                        var n, i = (new Date).getTime();
                        return n = Math.max(0, 16 - (i - e)), e = i + n, setTimeout(function() {
                            t(i + n)
                        }, n)
                    }
                }(),
                f = {
                    isString: function(e) {
                        return "string" == typeof e
                    },
                    isArray: Array.isArray || function(e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    },
                    isFunction: function(e) {
                        return "[object Function]" === Object.prototype.toString.call(e)
                    },
                    isNode: function(e) {
                        return e && e.nodeType
                    },
                    isNodeList: function(e) {
                        return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== i && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0)
                    },
                    isWrapped: function(e) {
                        return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e))
                    },
                    isSVG: function(e) {
                        return t.SVGElement && e instanceof t.SVGElement
                    },
                    isEmptyObject: function(e) {
                        for (var t in e) return !1;
                        return !0
                    }
                },
                p = !1;
            if (e.fn && e.fn.jquery ? (u = e, p = !0) : u = t.Velocity.Utilities, 8 >= d && !p) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
            if (!(7 >= d)) {
                var g = 400,
                    m = "swing",
                    v = {
                        State: {
                            isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                            isAndroid: /Android/i.test(navigator.userAgent),
                            isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                            isChrome: t.chrome,
                            isFirefox: /Firefox/i.test(navigator.userAgent),
                            prefixElement: n.createElement("div"),
                            prefixMatches: {},
                            scrollAnchor: null,
                            scrollPropertyLeft: null,
                            scrollPropertyTop: null,
                            isTicking: !1,
                            calls: []
                        },
                        CSS: {},
                        Utilities: u,
                        Redirects: {},
                        Easings: {},
                        Promise: t.Promise,
                        defaults: {
                            queue: "",
                            duration: g,
                            easing: m,
                            begin: i,
                            complete: i,
                            progress: i,
                            display: i,
                            visibility: i,
                            loop: !1,
                            delay: !1,
                            mobileHA: !0,
                            _cacheValues: !0
                        },
                        init: function(e) {
                            u.data(e, "velocity", {
                                isSVG: f.isSVG(e),
                                isAnimating: !1,
                                computedStyle: null,
                                tweensContainer: null,
                                rootPropertyValueCache: {},
                                transformCache: {}
                            })
                        },
                        hook: null,
                        mock: !1,
                        version: {
                            major: 1,
                            minor: 2,
                            patch: 2
                        },
                        debug: !1
                    };
                t.pageYOffset !== i ? (v.State.scrollAnchor = t, v.State.scrollPropertyLeft = "pageXOffset", v.State.scrollPropertyTop = "pageYOffset") : (v.State.scrollAnchor = n.documentElement || n.body.parentNode || n.body, v.State.scrollPropertyLeft = "scrollLeft", v.State.scrollPropertyTop = "scrollTop");
                var y = function() {
                    function e(e) {
                        return -e.tension * e.x - e.friction * e.v
                    }

                    function t(t, n, i) {
                        var o = {
                            x: t.x + i.dx * n,
                            v: t.v + i.dv * n,
                            tension: t.tension,
                            friction: t.friction
                        };
                        return {
                            dx: o.v,
                            dv: e(o)
                        }
                    }

                    function n(n, i) {
                        var o = {
                                dx: n.v,
                                dv: e(n)
                            },
                            r = t(n, .5 * i, o),
                            s = t(n, .5 * i, r),
                            a = t(n, i, s),
                            l = 1 / 6 * (o.dx + 2 * (r.dx + s.dx) + a.dx),
                            c = 1 / 6 * (o.dv + 2 * (r.dv + s.dv) + a.dv);
                        return n.x = n.x + l * i, n.v = n.v + c * i, n
                    }
                    return function e(t, i, o) {
                        var r, s, a, l = {
                                x: -1,
                                v: 0,
                                tension: null,
                                friction: null
                            },
                            c = [0],
                            u = 0;
                        for (t = parseFloat(t) || 500, i = parseFloat(i) || 20, o = o || null, l.tension = t, l.friction = i, (r = null !== o) ? s = (u = e(t, i)) / o * .016 : s = .016; a = n(a || l, s), c.push(1 + a.x), u += 16, Math.abs(a.x) > 1e-4 && Math.abs(a.v) > 1e-4;);
                        return r ? function(e) {
                            return c[e * (c.length - 1) | 0]
                        } : u
                    }
                }();
                v.Easings = {
                    linear: function(e) {
                        return e
                    },
                    swing: function(e) {
                        return .5 - Math.cos(e * Math.PI) / 2
                    },
                    spring: function(e) {
                        return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
                    }
                }, u.each([
                    ["ease", [.25, .1, .25, 1]],
                    ["ease-in", [.42, 0, 1, 1]],
                    ["ease-out", [0, 0, .58, 1]],
                    ["ease-in-out", [.42, 0, .58, 1]],
                    ["easeInSine", [.47, 0, .745, .715]],
                    ["easeOutSine", [.39, .575, .565, 1]],
                    ["easeInOutSine", [.445, .05, .55, .95]],
                    ["easeInQuad", [.55, .085, .68, .53]],
                    ["easeOutQuad", [.25, .46, .45, .94]],
                    ["easeInOutQuad", [.455, .03, .515, .955]],
                    ["easeInCubic", [.55, .055, .675, .19]],
                    ["easeOutCubic", [.215, .61, .355, 1]],
                    ["easeInOutCubic", [.645, .045, .355, 1]],
                    ["easeInQuart", [.895, .03, .685, .22]],
                    ["easeOutQuart", [.165, .84, .44, 1]],
                    ["easeInOutQuart", [.77, 0, .175, 1]],
                    ["easeInQuint", [.755, .05, .855, .06]],
                    ["easeOutQuint", [.23, 1, .32, 1]],
                    ["easeInOutQuint", [.86, 0, .07, 1]],
                    ["easeInExpo", [.95, .05, .795, .035]],
                    ["easeOutExpo", [.19, 1, .22, 1]],
                    ["easeInOutExpo", [1, 0, 0, 1]],
                    ["easeInCirc", [.6, .04, .98, .335]],
                    ["easeOutCirc", [.075, .82, .165, 1]],
                    ["easeInOutCirc", [.785, .135, .15, .86]]
                ], function(e, t) {
                    v.Easings[t[0]] = s.apply(null, t[1])
                });
                var b = v.CSS = {
                    RegEx: {
                        isHex: /^#([A-f\d]{3}){1,2}$/i,
                        valueUnwrap: /^[A-z]+\((.*)\)$/i,
                        wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                        valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
                    },
                    Lists: {
                        colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                        transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                        transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
                    },
                    Hooks: {
                        templates: {
                            textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                            boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                            clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                            backgroundPosition: ["X Y", "0% 0%"],
                            transformOrigin: ["X Y Z", "50% 50% 0px"],
                            perspectiveOrigin: ["X Y", "50% 50%"]
                        },
                        registered: {},
                        register: function() {
                            for (var e = 0; e < b.Lists.colors.length; e++) {
                                var t = "color" === b.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                                b.Hooks.templates[b.Lists.colors[e]] = ["Red Green Blue Alpha", t]
                            }
                            var n, i, o;
                            if (d)
                                for (n in b.Hooks.templates) {
                                    o = (i = b.Hooks.templates[n])[0].split(" ");
                                    var r = i[1].match(b.RegEx.valueSplit);
                                    "Color" === o[0] && (o.push(o.shift()), r.push(r.shift()), b.Hooks.templates[n] = [o.join(" "), r.join(" ")])
                                }
                            for (n in b.Hooks.templates)
                                for (var e in o = (i = b.Hooks.templates[n])[0].split(" ")) {
                                    var s = n + o[e],
                                        a = e;
                                    b.Hooks.registered[s] = [n, a]
                                }
                        },
                        getRoot: function(e) {
                            var t = b.Hooks.registered[e];
                            return t ? t[0] : e
                        },
                        cleanRootPropertyValue: function(e, t) {
                            return b.RegEx.valueUnwrap.test(t) && (t = t.match(b.RegEx.valueUnwrap)[1]), b.Values.isCSSNullValue(t) && (t = b.Hooks.templates[e][1]), t
                        },
                        extractValue: function(e, t) {
                            var n = b.Hooks.registered[e];
                            if (n) {
                                var i = n[0],
                                    o = n[1];
                                return (t = b.Hooks.cleanRootPropertyValue(i, t)).toString().match(b.RegEx.valueSplit)[o]
                            }
                            return t
                        },
                        injectValue: function(e, t, n) {
                            var i = b.Hooks.registered[e];
                            if (i) {
                                var o, r = i[0],
                                    s = i[1];
                                return (o = (n = b.Hooks.cleanRootPropertyValue(r, n)).toString().match(b.RegEx.valueSplit))[s] = t, o.join(" ")
                            }
                            return n
                        }
                    },
                    Normalizations: {
                        registered: {
                            clip: function(e, t, n) {
                                switch (e) {
                                    case "name":
                                        return "clip";
                                    case "extract":
                                        var i;
                                        return b.RegEx.wrappedValueAlreadyExtracted.test(n) ? i = n : i = (i = n.toString().match(b.RegEx.valueUnwrap)) ? i[1].replace(/,(\s+)?/g, " ") : n, i;
                                    case "inject":
                                        return "rect(" + n + ")"
                                }
                            },
                            blur: function(e, t, n) {
                                switch (e) {
                                    case "name":
                                        return v.State.isFirefox ? "filter" : "-webkit-filter";
                                    case "extract":
                                        var i = parseFloat(n);
                                        if (!i && 0 !== i) {
                                            var o = n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                            i = o ? o[1] : 0
                                        }
                                        return i;
                                    case "inject":
                                        return parseFloat(n) ? "blur(" + n + ")" : "none"
                                }
                            },
                            opacity: function(e, t, n) {
                                if (8 >= d) switch (e) {
                                    case "name":
                                        return "filter";
                                    case "extract":
                                        var i = n.toString().match(/alpha\(opacity=(.*)\)/i);
                                        return i ? i[1] / 100 : 1;
                                    case "inject":
                                        return t.style.zoom = 1, parseFloat(n) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(n), 10) + ")"
                                } else switch (e) {
                                    case "name":
                                        return "opacity";
                                    case "extract":
                                    case "inject":
                                        return n
                                }
                            }
                        },
                        register: function() {
                            9 >= d || v.State.isGingerbread || (b.Lists.transformsBase = b.Lists.transformsBase.concat(b.Lists.transforms3D));
                            for (var e = 0; e < b.Lists.transformsBase.length; e++) ! function() {
                                var t = b.Lists.transformsBase[e];
                                b.Normalizations.registered[t] = function(e, n, o) {
                                    switch (e) {
                                        case "name":
                                            return "transform";
                                        case "extract":
                                            return r(n) === i || r(n).transformCache[t] === i ? /^scale/i.test(t) ? 1 : 0 : r(n).transformCache[t].replace(/[()]/g, "");
                                        case "inject":
                                            var s = !1;
                                            switch (t.substr(0, t.length - 1)) {
                                                case "translate":
                                                    s = !/(%|px|em|rem|vw|vh|\d)$/i.test(o);
                                                    break;
                                                case "scal":
                                                case "scale":
                                                    v.State.isAndroid && r(n).transformCache[t] === i && 1 > o && (o = 1), s = !/(\d)$/i.test(o);
                                                    break;
                                                case "skew":
                                                    s = !/(deg|\d)$/i.test(o);
                                                    break;
                                                case "rotate":
                                                    s = !/(deg|\d)$/i.test(o)
                                            }
                                            return s || (r(n).transformCache[t] = "(" + o + ")"), r(n).transformCache[t]
                                    }
                                }
                            }();
                            for (e = 0; e < b.Lists.colors.length; e++) ! function() {
                                var t = b.Lists.colors[e];
                                b.Normalizations.registered[t] = function(e, n, o) {
                                    switch (e) {
                                        case "name":
                                            return t;
                                        case "extract":
                                            var r;
                                            if (b.RegEx.wrappedValueAlreadyExtracted.test(o)) r = o;
                                            else {
                                                var s, a = {
                                                    black: "rgb(0, 0, 0)",
                                                    blue: "rgb(0, 0, 255)",
                                                    gray: "rgb(128, 128, 128)",
                                                    green: "rgb(0, 128, 0)",
                                                    red: "rgb(255, 0, 0)",
                                                    white: "rgb(255, 255, 255)"
                                                };
                                                /^[A-z]+$/i.test(o) ? s = a[o] !== i ? a[o] : a.black : b.RegEx.isHex.test(o) ? s = "rgb(" + b.Values.hexToRgb(o).join(" ") + ")" : /^rgba?\(/i.test(o) || (s = a.black), r = (s || o).toString().match(b.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                            }
                                            return 8 >= d || 3 !== r.split(" ").length || (r += " 1"), r;
                                        case "inject":
                                            return 8 >= d ? 4 === o.split(" ").length && (o = o.split(/\s+/).slice(0, 3).join(" ")) : 3 === o.split(" ").length && (o += " 1"), (8 >= d ? "rgb" : "rgba") + "(" + o.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                    }
                                }
                            }()
                        }
                    },
                    Names: {
                        camelCase: function(e) {
                            return e.replace(/-(\w)/g, function(e, t) {
                                return t.toUpperCase()
                            })
                        },
                        SVGAttribute: function(e) {
                            var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                            return (d || v.State.isAndroid && !v.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
                        },
                        prefixCheck: function(e) {
                            if (v.State.prefixMatches[e]) return [v.State.prefixMatches[e], !0];
                            for (var t = ["", "Webkit", "Moz", "ms", "O"], n = 0, i = t.length; i > n; n++) {
                                var o;
                                if (o = 0 === n ? e : t[n] + e.replace(/^\w/, function(e) {
                                        return e.toUpperCase()
                                    }), f.isString(v.State.prefixElement.style[o])) return v.State.prefixMatches[e] = o, [o, !0]
                            }
                            return [e, !1]
                        }
                    },
                    Values: {
                        hexToRgb: function(e) {
                            var t;
                            return e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, n, i) {
                                return t + t + n + n + i + i
                            }), (t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e)) ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
                        },
                        isCSSNullValue: function(e) {
                            return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                        },
                        getUnitType: function(e) {
                            return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
                        },
                        getDisplayType: function(e) {
                            var t = e && e.tagName.toString().toLowerCase();
                            return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
                        },
                        addClass: function(e, t) {
                            e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t
                        },
                        removeClass: function(e, t) {
                            e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                        }
                    },
                    getPropertyValue: function(e, n, o, s) {
                        function a(e, n) {
                            function o() {
                                h && b.setPropertyValue(e, "display", "none")
                            }
                            var l = 0;
                            if (8 >= d) l = u.css(e, n);
                            else {
                                var c, h = !1;
                                if (/^(width|height)$/.test(n) && 0 === b.getPropertyValue(e, "display") && (h = !0, b.setPropertyValue(e, "display", b.Values.getDisplayType(e))), !s) {
                                    if ("height" === n && "border-box" !== b.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                        var f = e.offsetHeight - (parseFloat(b.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(b.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(b.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(b.getPropertyValue(e, "paddingBottom")) || 0);
                                        return o(), f
                                    }
                                    if ("width" === n && "border-box" !== b.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                        var p = e.offsetWidth - (parseFloat(b.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(b.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(b.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(b.getPropertyValue(e, "paddingRight")) || 0);
                                        return o(), p
                                    }
                                }
                                c = r(e) === i ? t.getComputedStyle(e, null) : r(e).computedStyle ? r(e).computedStyle : r(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === n && (n = "borderTopColor"), ("" === (l = 9 === d && "filter" === n ? c.getPropertyValue(n) : c[n]) || null === l) && (l = e.style[n]), o()
                            }
                            if ("auto" === l && /^(top|right|bottom|left)$/i.test(n)) {
                                var g = a(e, "position");
                                ("fixed" === g || "absolute" === g && /top|left/i.test(n)) && (l = u(e).position()[n] + "px")
                            }
                            return l
                        }
                        var l;
                        if (b.Hooks.registered[n]) {
                            var c = n,
                                h = b.Hooks.getRoot(c);
                            o === i && (o = b.getPropertyValue(e, b.Names.prefixCheck(h)[0])), b.Normalizations.registered[h] && (o = b.Normalizations.registered[h]("extract", e, o)), l = b.Hooks.extractValue(c, o)
                        } else if (b.Normalizations.registered[n]) {
                            var f, p;
                            "transform" !== (f = b.Normalizations.registered[n]("name", e)) && (p = a(e, b.Names.prefixCheck(f)[0]), b.Values.isCSSNullValue(p) && b.Hooks.templates[n] && (p = b.Hooks.templates[n][1])), l = b.Normalizations.registered[n]("extract", e, p)
                        }
                        if (!/^[\d-]/.test(l))
                            if (r(e) && r(e).isSVG && b.Names.SVGAttribute(n))
                                if (/^(height|width)$/i.test(n)) try {
                                    l = e.getBBox()[n]
                                } catch (e) {
                                    l = 0
                                } else l = e.getAttribute(n);
                                else l = a(e, b.Names.prefixCheck(n)[0]);
                        return b.Values.isCSSNullValue(l) && (l = 0), v.debug >= 2 && console.log("Get " + n + ": " + l), l
                    },
                    setPropertyValue: function(e, n, i, o, s) {
                        var a = n;
                        if ("scroll" === n) s.container ? s.container["scroll" + s.direction] = i : "Left" === s.direction ? t.scrollTo(i, s.alternateValue) : t.scrollTo(s.alternateValue, i);
                        else if (b.Normalizations.registered[n] && "transform" === b.Normalizations.registered[n]("name", e)) b.Normalizations.registered[n]("inject", e, i), a = "transform", i = r(e).transformCache[n];
                        else {
                            if (b.Hooks.registered[n]) {
                                var l = n,
                                    c = b.Hooks.getRoot(n);
                                o = o || b.getPropertyValue(e, c), i = b.Hooks.injectValue(l, i, o), n = c
                            }
                            if (b.Normalizations.registered[n] && (i = b.Normalizations.registered[n]("inject", e, i), n = b.Normalizations.registered[n]("name", e)), a = b.Names.prefixCheck(n)[0], 8 >= d) try {
                                e.style[a] = i
                            } catch (e) {
                                v.debug && console.log("Browser does not support [" + i + "] for [" + a + "]")
                            } else r(e) && r(e).isSVG && b.Names.SVGAttribute(n) ? e.setAttribute(n, i) : e.style[a] = i;
                            v.debug >= 2 && console.log("Set " + n + " (" + a + "): " + i)
                        }
                        return [a, i]
                    },
                    flushTransformCache: function(e) {
                        function t(t) {
                            return parseFloat(b.getPropertyValue(e, t))
                        }
                        var n = "";
                        if ((d || v.State.isAndroid && !v.State.isChrome) && r(e).isSVG) {
                            var i = {
                                translate: [t("translateX"), t("translateY")],
                                skewX: [t("skewX")],
                                skewY: [t("skewY")],
                                scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
                                rotate: [t("rotateZ"), 0, 0]
                            };
                            u.each(r(e).transformCache, function(e) {
                                /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), i[e] && (n += e + "(" + i[e].join(" ") + ") ", delete i[e])
                            })
                        } else {
                            var o, s;
                            u.each(r(e).transformCache, function(t) {
                                return o = r(e).transformCache[t], "transformPerspective" === t ? (s = o, !0) : (9 === d && "rotateZ" === t && (t = "rotate"), void(n += t + o + " "))
                            }), s && (n = "perspective" + s + " " + n)
                        }
                        b.setPropertyValue(e, "transform", n)
                    }
                };
                b.Hooks.register(), b.Normalizations.register(), v.hook = function(e, t, n) {
                    var s = i;
                    return e = o(e), u.each(e, function(e, o) {
                        if (r(o) === i && v.init(o), n === i) s === i && (s = v.CSS.getPropertyValue(o, t));
                        else {
                            var a = v.CSS.setPropertyValue(o, t, n);
                            "transform" === a[0] && v.CSS.flushTransformCache(o), s = a
                        }
                    }), s
                };
                var w = function() {
                    function e() {
                        return d ? k.promise || null : h
                    }

                    function s() {
                        function e(e) {
                            function h(e, t) {
                                var n = i,
                                    o = i,
                                    r = i;
                                return f.isArray(e) ? (n = e[0], !f.isArray(e[1]) && /^[\d-]/.test(e[1]) || f.isFunction(e[1]) || b.RegEx.isHex.test(e[1]) ? r = e[1] : (f.isString(e[1]) && !b.RegEx.isHex.test(e[1]) || f.isArray(e[1])) && (o = t ? e[1] : a(e[1], c.duration), e[2] !== i && (r = e[2]))) : n = e, t || (o = o || c.easing), f.isFunction(n) && (n = n.call(s, x, S)), f.isFunction(r) && (r = r.call(s, x, S)), [n || 0, o, r]
                            }

                            function p(e, t) {
                                var n, i;
                                return i = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(e) {
                                    return n = e, ""
                                }), n || (n = b.Values.getUnitType(e)), [i, n]
                            }

                            function g() {
                                var e = {
                                        myParent: s.parentNode || n.body,
                                        position: b.getPropertyValue(s, "position"),
                                        fontSize: b.getPropertyValue(s, "fontSize")
                                    },
                                    i = e.position === I.lastPosition && e.myParent === I.lastParent,
                                    o = e.fontSize === I.lastFontSize;
                                I.lastParent = e.myParent, I.lastPosition = e.position, I.lastFontSize = e.fontSize;
                                var a = 100,
                                    l = {};
                                if (o && i) l.emToPx = I.lastEmToPx, l.percentToPxWidth = I.lastPercentToPxWidth, l.percentToPxHeight = I.lastPercentToPxHeight;
                                else {
                                    var c = r(s).isSVG ? n.createElementNS("http://www.w3.org/2000/svg", "rect") : n.createElement("div");
                                    v.init(c), e.myParent.appendChild(c), u.each(["overflow", "overflowX", "overflowY"], function(e, t) {
                                        v.CSS.setPropertyValue(c, t, "hidden")
                                    }), v.CSS.setPropertyValue(c, "position", e.position), v.CSS.setPropertyValue(c, "fontSize", e.fontSize), v.CSS.setPropertyValue(c, "boxSizing", "content-box"), u.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(e, t) {
                                        v.CSS.setPropertyValue(c, t, a + "%")
                                    }), v.CSS.setPropertyValue(c, "paddingLeft", a + "em"), l.percentToPxWidth = I.lastPercentToPxWidth = (parseFloat(b.getPropertyValue(c, "width", null, !0)) || 1) / a, l.percentToPxHeight = I.lastPercentToPxHeight = (parseFloat(b.getPropertyValue(c, "height", null, !0)) || 1) / a, l.emToPx = I.lastEmToPx = (parseFloat(b.getPropertyValue(c, "paddingLeft")) || 1) / a, e.myParent.removeChild(c)
                                }
                                return null === I.remToPx && (I.remToPx = parseFloat(b.getPropertyValue(n.body, "fontSize")) || 16), null === I.vwToPx && (I.vwToPx = parseFloat(t.innerWidth) / 100, I.vhToPx = parseFloat(t.innerHeight) / 100), l.remToPx = I.remToPx, l.vwToPx = I.vwToPx, l.vhToPx = I.vhToPx, v.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), s), l
                            }
                            if (c.begin && 0 === x) try {
                                c.begin.call(m, m)
                            } catch (e) {
                                setTimeout(function() {
                                    throw e
                                }, 1)
                            }
                            if ("scroll" === E) {
                                var w, C, T, O = /^x$/i.test(c.axis) ? "Left" : "Top",
                                    A = parseFloat(c.offset) || 0;
                                c.container ? f.isWrapped(c.container) || f.isNode(c.container) ? (c.container = c.container[0] || c.container, T = (w = c.container["scroll" + O]) + u(s).position()[O.toLowerCase()] + A) : c.container = null : (w = v.State.scrollAnchor[v.State["scrollProperty" + O]], C = v.State.scrollAnchor[v.State["scrollProperty" + ("Left" === O ? "Top" : "Left")]], T = u(s).offset()[O.toLowerCase()] + A), d = {
                                    scroll: {
                                        rootPropertyValue: !1,
                                        startValue: w,
                                        currentValue: w,
                                        endValue: T,
                                        unitType: "",
                                        easing: c.easing,
                                        scrollData: {
                                            container: c.container,
                                            direction: O,
                                            alternateValue: C
                                        }
                                    },
                                    element: s
                                }, v.debug && console.log("tweensContainer (scroll): ", d.scroll, s)
                            } else if ("reverse" === E) {
                                if (!r(s).tweensContainer) return void u.dequeue(s, c.queue);
                                "none" === r(s).opts.display && (r(s).opts.display = "auto"), "hidden" === r(s).opts.visibility && (r(s).opts.visibility = "visible"), r(s).opts.loop = !1, r(s).opts.begin = null, r(s).opts.complete = null, _.easing || delete c.easing, _.duration || delete c.duration, c = u.extend({}, r(s).opts, c);
                                var D = u.extend(!0, {}, r(s).tweensContainer);
                                for (var P in D)
                                    if ("element" !== P) {
                                        var L = D[P].startValue;
                                        D[P].startValue = D[P].currentValue = D[P].endValue, D[P].endValue = L, f.isEmptyObject(_) || (D[P].easing = c.easing), v.debug && console.log("reverse tweensContainer (" + P + "): " + JSON.stringify(D[P]), s)
                                    }
                                d = D
                            } else if ("start" === E) {
                                for (var N in r(s).tweensContainer && !0 === r(s).isAnimating && (D = r(s).tweensContainer), u.each(y, function(e, t) {
                                        if (RegExp("^" + b.Lists.colors.join("$|^") + "$").test(e)) {
                                            var n = h(t, !0),
                                                o = n[0],
                                                r = n[1],
                                                s = n[2];
                                            if (b.RegEx.isHex.test(o)) {
                                                for (var a = ["Red", "Green", "Blue"], l = b.Values.hexToRgb(o), c = s ? b.Values.hexToRgb(s) : i, u = 0; u < a.length; u++) {
                                                    var d = [l[u]];
                                                    r && d.push(r), c !== i && d.push(c[u]), y[e + a[u]] = d
                                                }
                                                delete y[e]
                                            }
                                        }
                                    }), y) {
                                    var M = h(y[N]),
                                        j = M[0],
                                        H = M[1],
                                        W = M[2];
                                    N = b.Names.camelCase(N);
                                    var R = b.Hooks.getRoot(N),
                                        B = !1;
                                    if (r(s).isSVG || "tween" === R || !1 !== b.Names.prefixCheck(R)[1] || b.Normalizations.registered[R] !== i) {
                                        (c.display !== i && null !== c.display && "none" !== c.display || c.visibility !== i && "hidden" !== c.visibility) && /opacity|filter/.test(N) && !W && 0 !== j && (W = 0), c._cacheValues && D && D[N] ? (W === i && (W = D[N].endValue + D[N].unitType), B = r(s).rootPropertyValueCache[R]) : b.Hooks.registered[N] ? W === i ? (B = b.getPropertyValue(s, R), W = b.getPropertyValue(s, N, B)) : B = b.Hooks.templates[R][1] : W === i && (W = b.getPropertyValue(s, N));
                                        var F, q, V, X = !1;
                                        if (W = (F = p(N, W))[0], V = F[1], j = (F = p(N, j))[0].replace(/^([+-\/*])=/, function(e, t) {
                                                return X = t, ""
                                            }), q = F[1], W = parseFloat(W) || 0, j = parseFloat(j) || 0, "%" === q && (/^(fontSize|lineHeight)$/.test(N) ? (j /= 100, q = "em") : /^scale/.test(N) ? (j /= 100, q = "") : /(Red|Green|Blue)$/i.test(N) && (j = j / 100 * 255, q = "")), /[\/*]/.test(X)) q = V;
                                        else if (V !== q && 0 !== W)
                                            if (0 === j) q = V;
                                            else {
                                                o = o || g();
                                                var Y = /margin|padding|left|right|width|text|word|letter/i.test(N) || /X$/.test(N) || "x" === N ? "x" : "y";
                                                switch (V) {
                                                    case "%":
                                                        W *= "x" === Y ? o.percentToPxWidth : o.percentToPxHeight;
                                                        break;
                                                    case "px":
                                                        break;
                                                    default:
                                                        W *= o[V + "ToPx"]
                                                }
                                                switch (q) {
                                                    case "%":
                                                        W *= 1 / ("x" === Y ? o.percentToPxWidth : o.percentToPxHeight);
                                                        break;
                                                    case "px":
                                                        break;
                                                    default:
                                                        W *= 1 / o[q + "ToPx"]
                                                }
                                            }
                                        switch (X) {
                                            case "+":
                                                j = W + j;
                                                break;
                                            case "-":
                                                j = W - j;
                                                break;
                                            case "*":
                                                j *= W;
                                                break;
                                            case "/":
                                                j = W / j
                                        }
                                        d[N] = {
                                            rootPropertyValue: B,
                                            startValue: W,
                                            currentValue: W,
                                            endValue: j,
                                            unitType: q,
                                            easing: H
                                        }, v.debug && console.log("tweensContainer (" + N + "): " + JSON.stringify(d[N]), s)
                                    } else v.debug && console.log("Skipping [" + R + "] due to a lack of browser support.")
                                }
                                d.element = s
                            }
                            d.element && (b.Values.addClass(s, "velocity-animating"), $.push(d), "" === c.queue && (r(s).tweensContainer = d, r(s).opts = c), r(s).isAnimating = !0, x === S - 1 ? (v.State.calls.push([$, m, c, null, k.resolver]), !1 === v.State.isTicking && (v.State.isTicking = !0, l())) : x++)
                        }
                        var o, s = this,
                            c = u.extend({}, v.defaults, _),
                            d = {};
                        switch (r(s) === i && v.init(s), parseFloat(c.delay) && !1 !== c.queue && u.queue(s, c.queue, function(e) {
                            v.velocityQueueEntryFlag = !0, r(s).delayTimer = {
                                setTimeout: setTimeout(e, parseFloat(c.delay)),
                                next: e
                            }
                        }), c.duration.toString().toLowerCase()) {
                            case "fast":
                                c.duration = 200;
                                break;
                            case "normal":
                                c.duration = g;
                                break;
                            case "slow":
                                c.duration = 600;
                                break;
                            default:
                                c.duration = parseFloat(c.duration) || 1
                        }!1 !== v.mock && (!0 === v.mock ? c.duration = c.delay = 1 : (c.duration *= parseFloat(v.mock) || 1, c.delay *= parseFloat(v.mock) || 1)), c.easing = a(c.easing, c.duration), c.begin && !f.isFunction(c.begin) && (c.begin = null), c.progress && !f.isFunction(c.progress) && (c.progress = null), c.complete && !f.isFunction(c.complete) && (c.complete = null), c.display !== i && null !== c.display && (c.display = c.display.toString().toLowerCase(), "auto" === c.display && (c.display = v.CSS.Values.getDisplayType(s))), c.visibility !== i && null !== c.visibility && (c.visibility = c.visibility.toString().toLowerCase()), c.mobileHA = c.mobileHA && v.State.isMobile && !v.State.isGingerbread, !1 === c.queue ? c.delay ? setTimeout(e, c.delay) : e() : u.queue(s, c.queue, function(t, n) {
                            return !0 === n ? (k.promise && k.resolver(m), !0) : (v.velocityQueueEntryFlag = !0, void e())
                        }), "" !== c.queue && "fx" !== c.queue || "inprogress" === u.queue(s)[0] || u.dequeue(s)
                    }
                    var d, h, p, m, y, _, C = arguments[0] && (arguments[0].p || u.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || f.isString(arguments[0].properties));
                    if (f.isWrapped(this) ? (d = !1, p = 0, m = this, h = this) : (d = !0, p = 1, m = C ? arguments[0].elements || arguments[0].e : arguments[0]), m = o(m)) {
                        C ? (y = arguments[0].properties || arguments[0].p, _ = arguments[0].options || arguments[0].o) : (y = arguments[p], _ = arguments[p + 1]);
                        var S = m.length,
                            x = 0;
                        if (!/^(stop|finish)$/i.test(y) && !u.isPlainObject(_)) {
                            _ = {};
                            for (var T = p + 1; T < arguments.length; T++) f.isArray(arguments[T]) || !/^(fast|normal|slow)$/i.test(arguments[T]) && !/^\d/.test(arguments[T]) ? f.isString(arguments[T]) || f.isArray(arguments[T]) ? _.easing = arguments[T] : f.isFunction(arguments[T]) && (_.complete = arguments[T]) : _.duration = arguments[T]
                        }
                        var E, k = {
                            promise: null,
                            resolver: null,
                            rejecter: null
                        };
                        switch (d && v.Promise && (k.promise = new v.Promise(function(e, t) {
                            k.resolver = e, k.rejecter = t
                        })), y) {
                            case "scroll":
                                E = "scroll";
                                break;
                            case "reverse":
                                E = "reverse";
                                break;
                            case "finish":
                            case "stop":
                                u.each(m, function(e, t) {
                                    r(t) && r(t).delayTimer && (clearTimeout(r(t).delayTimer.setTimeout), r(t).delayTimer.next && r(t).delayTimer.next(), delete r(t).delayTimer)
                                });
                                var O = [];
                                return u.each(v.State.calls, function(e, t) {
                                    t && u.each(t[1], function(n, o) {
                                        var s = _ === i ? "" : _;
                                        return !0 !== s && t[2].queue !== s && (_ !== i || !1 !== t[2].queue) || void u.each(m, function(n, i) {
                                            i === o && ((!0 === _ || f.isString(_)) && (u.each(u.queue(i, f.isString(_) ? _ : ""), function(e, t) {
                                                f.isFunction(t) && t(null, !0)
                                            }), u.queue(i, f.isString(_) ? _ : "", [])), "stop" === y ? (r(i) && r(i).tweensContainer && !1 !== s && u.each(r(i).tweensContainer, function(e, t) {
                                                t.endValue = t.currentValue
                                            }), O.push(e)) : "finish" === y && (t[2].duration = 1))
                                        })
                                    })
                                }), "stop" === y && (u.each(O, function(e, t) {
                                    c(t, !0)
                                }), k.promise && k.resolver(m)), e();
                            default:
                                if (!u.isPlainObject(y) || f.isEmptyObject(y)) {
                                    if (f.isString(y) && v.Redirects[y]) {
                                        var A = (N = u.extend({}, _)).duration,
                                            D = N.delay || 0;
                                        return !0 === N.backwards && (m = u.extend(!0, [], m).reverse()), u.each(m, function(e, t) {
                                            parseFloat(N.stagger) ? N.delay = D + parseFloat(N.stagger) * e : f.isFunction(N.stagger) && (N.delay = D + N.stagger.call(t, e, S)), N.drag && (N.duration = parseFloat(A) || (/^(callout|transition)/.test(y) ? 1e3 : g), N.duration = Math.max(N.duration * (N.backwards ? 1 - e / S : (e + 1) / S), .75 * N.duration, 200)), v.Redirects[y].call(t, t, N || {}, e, S, m, k.promise ? k : i)
                                        }), e()
                                    }
                                    var P = "Velocity: First argument (" + y + ") was not a property map, a known action, or a registered redirect. Aborting.";
                                    return k.promise ? k.rejecter(new Error(P)) : console.log(P), e()
                                }
                                E = "start"
                        }
                        var L, N, I = {
                                lastParent: null,
                                lastPosition: null,
                                lastFontSize: null,
                                lastPercentToPxWidth: null,
                                lastPercentToPxHeight: null,
                                lastEmToPx: null,
                                remToPx: null,
                                vwToPx: null,
                                vhToPx: null
                            },
                            $ = [];
                        if (u.each(m, function(e, t) {
                                f.isNode(t) && s.call(t)
                            }), (N = u.extend({}, v.defaults, _)).loop = parseInt(N.loop), L = 2 * N.loop - 1, N.loop)
                            for (var M = 0; L > M; M++) {
                                var j = {
                                    delay: N.delay,
                                    progress: N.progress
                                };
                                M === L - 1 && (j.display = N.display, j.visibility = N.visibility, j.complete = N.complete), w(m, "reverse", j)
                            }
                        return e()
                    }
                };
                (v = u.extend(w, v)).animate = w;
                var _ = t.requestAnimationFrame || h;
                return v.State.isMobile || n.hidden === i || n.addEventListener("visibilitychange", function() {
                    n.hidden ? (_ = function(e) {
                        return setTimeout(function() {
                            e(!0)
                        }, 16)
                    }, l()) : _ = t.requestAnimationFrame || h
                }), e.Velocity = v, e !== t && (e.fn.velocity = w, e.fn.velocity.defaults = v.defaults), u.each(["Down", "Up"], function(e, t) {
                    v.Redirects["slide" + t] = function(e, n, o, r, s, a) {
                        var l = u.extend({}, n),
                            c = l.begin,
                            d = l.complete,
                            h = {
                                height: "",
                                marginTop: "",
                                marginBottom: "",
                                paddingTop: "",
                                paddingBottom: ""
                            },
                            f = {};
                        l.display === i && (l.display = "Down" === t ? "inline" === v.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function() {
                            for (var n in c && c.call(s, s), h) {
                                f[n] = e.style[n];
                                var i = v.CSS.getPropertyValue(e, n);
                                h[n] = "Down" === t ? [i, 0] : [0, i]
                            }
                            f.overflow = e.style.overflow, e.style.overflow = "hidden"
                        }, l.complete = function() {
                            for (var t in f) e.style[t] = f[t];
                            d && d.call(s, s), a && a.resolver(s)
                        }, v(e, h, l)
                    }
                }), u.each(["In", "Out"], function(e, t) {
                    v.Redirects["fade" + t] = function(e, n, o, r, s, a) {
                        var l = u.extend({}, n),
                            c = {
                                opacity: "In" === t ? 1 : 0
                            },
                            d = l.complete;
                        l.complete = o !== r - 1 ? l.begin = null : function() {
                            d && d.call(s, s), a && a.resolver(s)
                        }, l.display === i && (l.display = "In" === t ? "auto" : "none"), v(this, c, l)
                    }
                }), v
            }
            jQuery.fn.velocity = jQuery.fn.animate
        }(window.jQuery || window.Zepto || window, window, document)
    })),
    function(e) {
        WOW = function() {
            return {
                init: function() {
                    const t = [],
                        n = e(".wow"),
                        i = 100;
                    let o = 1;

                    function r() {
                        const o = window.innerHeight,
                            r = window.scrollY;
                        n.each(function() {
                            const n = e(this),
                                a = n.index(".wow"),
                                l = n.data("wow-iteration");
                            let c = n.data("wow-duration"),
                                u = n.data("wow-delay"),
                                d = 1e3 * n.css("animation-duration").slice(0, -1);
                            "visible" !== n.css("visibility") && (o + r - i > s(this) && r < s(this) || o + r - i > s(this) + n.height() && r < s(this) + n.height() || o + r === e(document).height() && s(this) + i > e(document).height()) && (u && (u = n.data("wow-delay").slice(0, -1), d += !!n.data("wow-delay") && 1e3 * n.data("wow-delay").slice(0, -1)), c && (c = n.data("wow-duration").slice(0, -1), d = 1e3 * n.css("animation-duration").slice(0, -1) + 1e3 * n.data("wow-duration").slice(0, -1)), setTimeout(() => n.removeClass("animated"), d), n.addClass("animated"), n.css({
                                visibility: "visible",
                                "animation-name": t[a],
                                "animation-iteration-count": l || 1,
                                "animation-duration": c || !1,
                                "animation-delay": !!u && `${u}s`
                            }))
                        })
                    }

                    function s(e) {
                        const t = e.getBoundingClientRect(),
                            n = document.body,
                            i = document.documentElement,
                            o = window.pageYOffset || i.scrollTop || n.scrollTop,
                            r = i.clientTop || n.clientTop || 0,
                            s = t.top + o - r;
                        return Math.round(s)
                    }
                    n.each(function() {
                        const n = e(this);
                        t[n.index(".wow")] = n.css("animation-name"), n.css({
                            visibility: "hidden",
                            "animation-name": "none"
                        })
                    }), e(window).scroll(() => o ? function() {
                        const t = window.innerHeight,
                            n = window.scrollY;
                        e(".wow.animated").each(function() {
                            const o = e(this);
                            (t + n - i > s(this) && n > s(this) + i || t + n - i < s(this) && n < s(this) + i || s(this) + o.height > e(document).height() - i) && (o.removeClass("animated"), o.css({
                                "animation-name": "none",
                                visibility: "hidden"
                            }))
                        }), r(), o--
                    }() : r()), n.each(function() {
                        const n = e(this),
                            i = n.index(".wow"),
                            o = n.data("wow-iteration"),
                            r = n.data("wow-duration");
                        let s = n.data("wow-delay");
                        s = !!s && n.data("wow-delay").slice(0, -1), n.addClass("animated"), n.css({
                            visibility: "visible",
                            "animation-name": t[i],
                            "animation-iteration-count": o || 1,
                            "animation-duration": r || !1,
                            "animation-delay": !!s && `${s}s`
                        })
                    })
                }
            }
        }
    }(jQuery),
    function(e) {
        e(window).on("scroll", function() {
            var t = e(".navbar");
            t.length && (t.offset().top > 50 ? e(".scrolling-navbar").addClass("top-nav-collapse") : e(".scrolling-navbar").removeClass("top-nav-collapse"))
        })
    }(jQuery),
    function(e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define([], function() {
            return e.Waves = t.call(e), e.Waves
        }) : "object" == typeof exports ? module.exports = t.call(e) : e.Waves = t.call(e)
    }("object" == typeof window ? window : this, function() {
        "use strict";
        var e = e || {},
            t = document.querySelectorAll.bind(document),
            n = Object.prototype.toString,
            i = "ontouchstart" in window;

        function o(e) {
            var t = typeof e;
            return "function" === t || "object" === t && !!e
        }

        function r(e) {
            var i, r = n.call(e);
            return "[object String]" === r ? t(e) : o(e) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(r) && e.hasOwnProperty("length") ? e : o(i = e) && i.nodeType > 0 ? [e] : []
        }

        function s(e) {
            var t, n, i = {
                    top: 0,
                    left: 0
                },
                o = e && e.ownerDocument;
            return t = o.documentElement, void 0 !== e.getBoundingClientRect && (i = e.getBoundingClientRect()), n = function(e) {
                return null !== (t = e) && t === t.window ? e : 9 === e.nodeType && e.defaultView;
                var t
            }(o), {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }
        }

        function a(e) {
            var t = "";
            for (var n in e) e.hasOwnProperty(n) && (t += n + ":" + e[n] + ";");
            return t
        }
        var l = {
                duration: 750,
                delay: 200,
                show: function(e, t, n) {
                    if (2 === e.button) return !1;
                    t = t || this;
                    var i = document.createElement("div");
                    i.className = "waves-ripple waves-rippling", t.appendChild(i);
                    var o = s(t),
                        r = 0,
                        c = 0;
                    "touches" in e && e.touches.length ? (r = e.touches[0].pageY - o.top, c = e.touches[0].pageX - o.left) : (r = e.pageY - o.top, c = e.pageX - o.left), c = c >= 0 ? c : 0, r = r >= 0 ? r : 0;
                    var u = "scale(" + t.clientWidth / 100 * 3 + ")",
                        d = "translate(0,0)";
                    n && (d = "translate(" + n.x + "px, " + n.y + "px)"), i.setAttribute("data-hold", Date.now()), i.setAttribute("data-x", c), i.setAttribute("data-y", r), i.setAttribute("data-scale", u), i.setAttribute("data-translate", d);
                    var h = {
                        top: r + "px",
                        left: c + "px"
                    };
                    i.classList.add("waves-notransition"), i.setAttribute("style", a(h)), i.classList.remove("waves-notransition"), h["-webkit-transform"] = u + " " + d, h["-moz-transform"] = u + " " + d, h["-ms-transform"] = u + " " + d, h["-o-transform"] = u + " " + d, h.transform = u + " " + d, h.opacity = "1";
                    var f = "mousemove" === e.type ? 2500 : l.duration;
                    h["-webkit-transition-duration"] = f + "ms", h["-moz-transition-duration"] = f + "ms", h["-o-transition-duration"] = f + "ms", h["transition-duration"] = f + "ms", i.setAttribute("style", a(h))
                },
                hide: function(e, t) {
                    for (var n = (t = t || this).getElementsByClassName("waves-rippling"), o = 0, r = n.length; o < r; o++) u(e, t, n[o]);
                    i && (t.removeEventListener("touchend", l.hide), t.removeEventListener("touchcancel", l.hide)), t.removeEventListener("mouseup", l.hide), t.removeEventListener("mouseleave", l.hide)
                }
            },
            c = {
                input: function(e) {
                    var t = e.parentNode;
                    if ("span" !== t.tagName.toLowerCase() || !t.classList.contains("waves-effect")) {
                        var n = document.createElement("span");
                        n.className = "waves-input-wrapper", t.replaceChild(n, e), n.appendChild(e)
                    }
                },
                img: function(e) {
                    var t = e.parentNode;
                    if ("i" !== t.tagName.toLowerCase() || !t.classList.contains("waves-effect")) {
                        var n = document.createElement("i");
                        t.replaceChild(n, e), n.appendChild(e)
                    }
                }
            };

        function u(e, t, n) {
            if (n) {
                n.classList.remove("waves-rippling");
                var i = n.getAttribute("data-x"),
                    o = n.getAttribute("data-y"),
                    r = n.getAttribute("data-scale"),
                    s = n.getAttribute("data-translate"),
                    c = 350 - (Date.now() - Number(n.getAttribute("data-hold")));
                c < 0 && (c = 0), "mousemove" === e.type && (c = 150);
                var u = "mousemove" === e.type ? 2500 : l.duration;
                setTimeout(function() {
                    var e = {
                        top: o + "px",
                        left: i + "px",
                        opacity: "0",
                        "-webkit-transition-duration": u + "ms",
                        "-moz-transition-duration": u + "ms",
                        "-o-transition-duration": u + "ms",
                        "transition-duration": u + "ms",
                        "-webkit-transform": r + " " + s,
                        "-moz-transform": r + " " + s,
                        "-ms-transform": r + " " + s,
                        "-o-transform": r + " " + s,
                        transform: r + " " + s
                    };
                    n.setAttribute("style", a(e)), setTimeout(function() {
                        try {
                            t.removeChild(n)
                        } catch (e) {
                            return !1
                        }
                    }, u)
                }, c)
            }
        }
        var d = {
            touches: 0,
            allowEvent: function(e) {
                var t = !0;
                return /^(mousedown|mousemove)$/.test(e.type) && d.touches && (t = !1), t
            },
            registerEvent: function(e) {
                var t = e.type;
                "touchstart" === t ? d.touches += 1 : /^(touchend|touchcancel)$/.test(t) && setTimeout(function() {
                    d.touches && (d.touches -= 1)
                }, 500)
            }
        };

        function h(e) {
            var t = function(e) {
                if (!1 === d.allowEvent(e)) return null;
                for (var t = null, n = e.target || e.srcElement; n.parentElement;) {
                    if (!(n instanceof SVGElement) && n.classList.contains("waves-effect")) {
                        t = n;
                        break
                    }
                    n = n.parentElement
                }
                return t
            }(e);
            if (null !== t) {
                if (t.disabled || t.getAttribute("disabled") || t.classList.contains("disabled")) return;
                if (d.registerEvent(e), "touchstart" === e.type && l.delay) {
                    var n = !1,
                        o = setTimeout(function() {
                            o = null, l.show(e, t)
                        }, l.delay),
                        r = function(i) {
                            o && (clearTimeout(o), o = null, l.show(e, t)), n || (n = !0, l.hide(i, t)), a()
                        },
                        s = function(e) {
                            o && (clearTimeout(o), o = null), r(e), a()
                        };
                    t.addEventListener("touchmove", s, !1), t.addEventListener("touchend", r, !1), t.addEventListener("touchcancel", r, !1);
                    var a = function() {
                        t.removeEventListener("touchmove", s), t.removeEventListener("touchend", r), t.removeEventListener("touchcancel", r)
                    }
                } else l.show(e, t), i && (t.addEventListener("touchend", l.hide, !1), t.addEventListener("touchcancel", l.hide, !1)), t.addEventListener("mouseup", l.hide, !1), t.addEventListener("mouseleave", l.hide, !1)
            }
        }
        return e.init = function(e) {
            var t = document.body;
            "duration" in (e = e || {}) && (l.duration = e.duration), "delay" in e && (l.delay = e.delay), i && (t.addEventListener("touchstart", h, !1), t.addEventListener("touchcancel", d.registerEvent, !1), t.addEventListener("touchend", d.registerEvent, !1)), t.addEventListener("mousedown", h, !1)
        }, e.attach = function(e, t) {
            var i, o;
            e = r(e), "[object Array]" === n.call(t) && (t = t.join(" ")), t = t ? " " + t : "";
            for (var s = 0, a = e.length; s < a; s++) o = (i = e[s]).tagName.toLowerCase(), -1 !== ["input", "img"].indexOf(o) && (c[o](i), i = i.parentElement), -1 === i.className.indexOf("waves-effect") && (i.className += " waves-effect" + t)
        }, e.ripple = function(e, t) {
            var n = (e = r(e)).length;
            if ((t = t || {}).wait = t.wait || 0, t.position = t.position || null, n)
                for (var i, o, a, c = {}, u = 0, d = {
                        type: "mousedown",
                        button: 1
                    }, h = function(e, t) {
                        return function() {
                            l.hide(e, t)
                        }
                    }; u < n; u++)
                    if (i = e[u], o = t.position || {
                            x: i.clientWidth / 2,
                            y: i.clientHeight / 2
                        }, a = s(i), c.x = a.left + o.x, c.y = a.top + o.y, d.pageX = c.x, d.pageY = c.y, l.show(d, i), t.wait >= 0 && null !== t.wait) {
                        setTimeout(h({
                            type: "mouseup",
                            button: 1
                        }, i), t.wait)
                    }
        }, e.calm = function(e) {
            for (var t = {
                    type: "mouseup",
                    button: 1
                }, n = 0, i = (e = r(e)).length; n < i; n++) l.hide(t, e[n])
        }, e.displayEffect = function(t) {
            console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"), e.init(t)
        }, e
    }), Waves.attach(".btn:not(.btn-flat), .btn-floating", ["waves-light"]), Waves.attach(".btn-flat", ["waves-effect"]), Waves.attach(".chip", ["waves-effect"]), Waves.attach(".view a .mask", ["waves-light"]), Waves.attach(".waves-light", ["waves-light"]), Waves.attach(".navbar-nav a:not(.navbar-brand), .nav-icons li a, .nav-tabs .nav-item:not(.dropdown)", ["waves-light"]), Waves.attach(".pager li a", ["waves-light"]), Waves.attach(".pagination .page-item .page-link", ["waves-effect"]), Waves.init();
var _this = void 0;
! function(e) {
    var t, n, i = "".concat(["text", "password", "email", "url", "tel", "number", "search", "search-md"].map(function(e) {
            return "input[type=".concat(e, "]")
        }).join(", "), ", textarea"),
        o = function(e) {
            var t = e.siblings("label, i"),
                n = e.val().length,
                i = e.attr("placeholder");
            t["".concat(n || i ? "add" : "remove", "Class")]("active")
        },
        r = function(e) {
            if (e.hasClass("validate")) {
                var t = e.val(),
                    n = !t.length,
                    i = !e[0].validity.badInput;
                if (n && i) e.removeClass("valid").removeClass("invalid");
                else {
                    var o = e.is(":valid"),
                        r = Number(e.attr("length")) || 0;
                    o && (!r || r > t.length) ? e.removeClass("invalid").addClass("valid") : e.removeClass("valid").addClass("invalid")
                }
            }
        },
        s = function() {
            var t = e(_this);
            if (t.val().length) {
                var n = e(".hiddendiv"),
                    i = t.css("font-family"),
                    o = t.css("font-size");
                o && n.css("font-size", o), i && n.css("font-family", i), "off" === t.attr("wrap") && n.css("overflow-wrap", "normal").css("white-space", "pre"), n.text("".concat(t.val(), "\n"));
                var r = n.html().replace(/\n/g, "<br>");
                n.html(r), n.css("width", t.is(":visible") ? t.width() : e(window).width() / 2), t.css("height", n.height())
            }
        };
    e(i).each(function(t, n) {
        var i = e(n),
            r = i.siblings("label, i");
        o(i), n.validity.badInput && r.addClass("active")
    }), e(document).on("focus", i, function(t) {
        e(t.target).siblings("label, i").addClass("active")
    }), e(document).on("blur", i, function(t) {
        var n = e(t.target),
            i = !n.val(),
            o = !t.target.validity.badInput,
            s = void 0 === n.attr("placeholder");
        i && o && s && n.siblings("label, i").removeClass("active"), r(n)
    }), e(document).on("change", i, function(t) {
        var n = e(t.target);
        o(n), r(n)
    }), e("input[autofocus]").siblings("label, i").addClass("active"), e(document).on("reset", function(t) {
        var n = e(t.target);
        n.is("form") && (n.find(i).removeClass("valid").removeClass("invalid").each(function(t, n) {
            var i = e(n),
                o = !i.val(),
                r = !i.attr("placeholder");
            o && r && i.siblings("label, i").removeClass("active")
        }), n.find("select.initialized").each(function(t, n) {
            var i = e(n),
                o = i.siblings("input.select-dropdown"),
                r = i.children("[selected]").val();
            i.val(r), o.val(r)
        }))
    }), (n = e(".md-textarea-auto")).length && (t = window.attachEvent ? function(e, t, n) {
        e.attachEvent("on".concat(t), n)
    } : function(e, t, n) {
        e.addEventListener(t, n, !1)
    }, n.each(function() {
        var e = this;

        function n() {
            e.style.height = "auto", e.style.height = "".concat(e.scrollHeight, "px")
        }

        function i() {
            window.setTimeout(n, 0)
        }
        t(e, "change", n), t(e, "cut", i), t(e, "paste", i), t(e, "drop", i), t(e, "keydown", i), n()
    }));
    var a = e("body");
    if (!e(".hiddendiv").first().length) {
        var l = e('<div class="hiddendiv common"></div>');
        a.append(l)
    }
    e(".materialize-textarea").each(s), a.on("keyup keydown", ".materialize-textarea", s)
}(jQuery);
var loader_path = "../dev/dist/mdb-addons/preloader.html",
    windowLoaded = !1;
$(window).on("load", function() {
        windowLoaded = !0
    }), $(document).ready(function() {
        $("body").attr("aria-busy", !0), $("#preloader-markup").load(loader_path, function() {
            windowLoaded ? ($("#mdb-preloader").fadeOut("slow"), $("body").removeAttr("aria-busy")) : $(window).on("load", function() {
                $("#mdb-preloader").fadeOut("slow"), $("body").removeAttr("aria-busy")
            })
        })
    }),
    function(e) {
        e(document).on("click.card", ".card", function(t) {
            if (e(this).find(".card-reveal").length) {
                var n = e(t.target),
                    i = n.is(".card-reveal .card-title"),
                    o = n.is(".card-reveal .card-title i"),
                    r = n.is(".card .activator"),
                    s = n.is(".card .activator i");
                i || o ? e(this).find(".card-reveal").velocity({
                    translateY: 0
                }, {
                    duration: 225,
                    queue: !1,
                    easing: "easeInOutQuad",
                    complete: function() {
                        e(this).css({
                            display: "none"
                        })
                    }
                }) : (r || s) && e(this).find(".card-reveal").css({
                    display: "block"
                }).velocity("stop", !1).velocity({
                    translateY: "-100%"
                }, {
                    duration: 300,
                    queue: !1,
                    easing: "easeInOutQuad"
                })
            }
        }), e(".rotate-btn").on("click", function() {
            var t = e(this).attr("data-card");
            e("#".concat(t)).toggleClass("flipped")
        }), e(window).on("load", function() {
            var t = e(".front").outerHeight(),
                n = e(".back").outerHeight();
            t > n ? e(".card-wrapper, .back").height(t) : t > n ? e(".card-wrapper, .front").height(n) : e(".card-wrapper").height(n)
        }), e(".card-share > a").on("click", function(t) {
            t.preventDefault(), e(this).toggleClass("share-expanded").parent().find("div").toggleClass("social-reveal-active")
        })
    }(jQuery), $(".map-card").click(function() {
        $(".card-body").toggleClass("closed")
    }),
    function(e) {
        function t() {
            var t = Number(e(this).attr("length")),
                n = Number(e(this).val().length),
                i = n <= t;
            e(this).parent().find('span[class="character-counter"]').html("".concat(n, "/").concat(t)),
                function(e, t) {
                    var n = t.hasClass("invalid");
                    e && n ? t.removeClass("invalid") : e || n || (t.removeClass("valid"), t.addClass("invalid"))
                }(i, e(this))
        }

        function n() {
            e(this).parent().find('span[class="character-counter"]').html("")
        }
        e.fn.characterCounter = function() {
            return this.each(function() {
                var i, o;
                void 0 !== e(this).attr("length") && (e(this).on("input", t), e(this).on("focus", t), e(this).on("blur", n), i = e(this), o = e("<span/>").addClass("character-counter").css("float", "right").css("font-size", "12px").css("height", 1), i.parent().append(o))
            })
        }, e(document).ready(function() {
            e("input, textarea").characterCounter()
        })
    }(jQuery),
    function(e) {
        e(["jquery"], function(e) {
            return function() {
                var t, n, i, o = 0,
                    r = {
                        error: "error",
                        info: "info",
                        success: "success",
                        warning: "warning"
                    },
                    s = {
                        clear: function(n, i) {
                            var o = d();
                            t || a(o);
                            l(n, o, i) || function(n) {
                                for (var i = t.children(), o = i.length - 1; o >= 0; o--) l(e(i[o]), n)
                            }(o)
                        },
                        remove: function(n) {
                            var i = d();
                            t || a(i);
                            if (n && 0 === e(":focus", n).length) return void h(n);
                            t.children().length && t.remove()
                        },
                        error: function(e, t, n) {
                            return u({
                                type: r.error,
                                iconClass: d().iconClasses.error,
                                message: e,
                                optionsOverride: n,
                                title: t
                            })
                        },
                        getContainer: a,
                        info: function(e, t, n) {
                            return u({
                                type: r.info,
                                iconClass: d().iconClasses.info,
                                message: e,
                                optionsOverride: n,
                                title: t
                            })
                        },
                        options: {},
                        subscribe: function(e) {
                            n = e
                        },
                        success: function(e, t, n) {
                            return u({
                                type: r.success,
                                iconClass: d().iconClasses.success,
                                message: e,
                                optionsOverride: n,
                                title: t
                            })
                        },
                        version: "2.1.1",
                        warning: function(e, t, n) {
                            return u({
                                type: r.warning,
                                iconClass: d().iconClasses.warning,
                                message: e,
                                optionsOverride: n,
                                title: t
                            })
                        }
                    };
                return s;

                function a(n, i) {
                    return n || (n = d()), (t = e("#" + n.containerId)).length ? t : (i && (t = function(n) {
                        return (t = e("<div/>").attr("id", n.containerId).addClass(n.positionClass).attr("aria-live", "polite").attr("role", "alert")).appendTo(e(n.target)), t
                    }(n)), t)
                }

                function l(t, n, i) {
                    var o = !(!i || !i.force) && i.force;
                    return !(!t || !o && 0 !== e(":focus", t).length) && (t[n.hideMethod]({
                        duration: n.hideDuration,
                        easing: n.hideEasing,
                        complete: function() {
                            h(t)
                        }
                    }), !0)
                }

                function c(e) {
                    n && n(e)
                }

                function u(n) {
                    var r = d(),
                        s = n.iconClass || r.iconClass;
                    if (void 0 !== n.optionsOverride && (r = e.extend(r, n.optionsOverride), s = n.optionsOverride.iconClass || s), ! function(e, t) {
                            if (e.preventDuplicates) {
                                if (t.message === i) return !0;
                                i = t.message
                            }
                            return !1
                        }(r, n)) {
                        o++, t = a(r, !0);
                        var l = null,
                            u = e("<div/>"),
                            f = e("<div/>"),
                            p = e("<div/>"),
                            g = e("<div/>"),
                            m = e(r.closeHtml),
                            v = {
                                intervalId: null,
                                hideEta: null,
                                maxHideTime: null
                            },
                            y = {
                                toastId: o,
                                state: "visible",
                                startTime: new Date,
                                options: r,
                                map: n
                            };
                        return n.iconClass && u.addClass(r.toastClass).addClass(s), n.title && (f.append(n.title).addClass(r.titleClass), u.append(f)), n.message && (p.append(n.message).addClass(r.messageClass), u.append(p)), r.closeButton && (m.addClass("md-toast-close-button").attr("role", "button"), u.prepend(m)), r.progressBar && (g.addClass("md-toast-progress"), u.prepend(g)), r.newestOnTop ? t.prepend(u) : t.append(u), u.hide(), u[r.showMethod]({
                                duration: r.showDuration,
                                easing: r.showEasing,
                                complete: r.onShown
                            }), r.timeOut > 0 && (l = setTimeout(b, r.timeOut), v.maxHideTime = parseFloat(r.timeOut), v.hideEta = (new Date).getTime() + v.maxHideTime, r.progressBar && (v.intervalId = setInterval(C, 10))),
                            function() {
                                u.hover(_, w), !r.onclick && r.tapToDismiss && u.click(b);
                                r.closeButton && m && m.click(function(e) {
                                    e.stopPropagation ? e.stopPropagation() : void 0 !== e.cancelBubble && !0 !== e.cancelBubble && (e.cancelBubble = !0), b(!0)
                                });
                                r.onclick && u.click(function() {
                                    r.onclick(), b()
                                })
                            }(), c(y), r.debug && console && console.log(y), u
                    }

                    function b(t) {
                        if (!e(":focus", u).length || t) return clearTimeout(v.intervalId), u[r.hideMethod]({
                            duration: r.hideDuration,
                            easing: r.hideEasing,
                            complete: function() {
                                h(u), r.onHidden && "hidden" !== y.state && r.onHidden(), y.state = "hidden", y.endTime = new Date, c(y)
                            }
                        })
                    }

                    function w() {
                        (r.timeOut > 0 || r.extendedTimeOut > 0) && (l = setTimeout(b, r.extendedTimeOut), v.maxHideTime = parseFloat(r.extendedTimeOut), v.hideEta = (new Date).getTime() + v.maxHideTime)
                    }

                    function _() {
                        clearTimeout(l), v.hideEta = 0, u.stop(!0, !0)[r.showMethod]({
                            duration: r.showDuration,
                            easing: r.showEasing
                        })
                    }

                    function C() {
                        var e = (v.hideEta - (new Date).getTime()) / v.maxHideTime * 100;
                        g.width(e + "%")
                    }
                }

                function d() {
                    return e.extend({}, {
                        tapToDismiss: !0,
                        toastClass: "md-toast",
                        containerId: "toast-container",
                        debug: !1,
                        showMethod: "fadeIn",
                        showDuration: 300,
                        showEasing: "swing",
                        onShown: void 0,
                        hideMethod: "fadeOut",
                        hideDuration: 1e3,
                        hideEasing: "swing",
                        onHidden: void 0,
                        extendedTimeOut: 1e3,
                        iconClasses: {
                            error: "md-toast-error",
                            info: "md-toast-info",
                            success: "md-toast-success",
                            warning: "md-toast-warning"
                        },
                        iconClass: "md-toast-info",
                        positionClass: "md-toast-top-right",
                        timeOut: 5e3,
                        titleClass: "md-toast-title",
                        messageClass: "md-toast-message",
                        target: "body",
                        closeHtml: '<button type="button">&times;</button>',
                        newestOnTop: !0,
                        preventDuplicates: !1,
                        progressBar: !1
                    }, s.options)
                }

                function h(e) {
                    t || (t = a()), e.is(":visible") || (e.remove(), e = null, 0 === t.children().length && (t.remove(), i = void 0))
                }
            }()
        })
    }("function" == typeof define && define.amd ? define : function(e, t) {
        "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : window.toastr = t(window.jQuery)
    });
var SMOOTH_SCROLL_DURATION = 700;
$(".smooth-scroll").on("click", "a", function() {
        var e = $(this).attr("href");
        if (void 0 !== e && 0 === e.indexOf("#")) {
            var t = $(this).attr("data-offset") ? $(this).attr("data-offset") : 0,
                n = $(this).parentsUntil(".smooth-scroll").last().parent().attr("data-allow-hashes");
            return $("body,html").animate({
                scrollTop: $(e).offset().top - t
            }, SMOOTH_SCROLL_DURATION), void 0 !== n && !1 !== n && history.replaceState(null, null, e), !1
        }
    }),
    function(e) {
        e.fn.scrollTo = function(t) {
            return e(this).scrollTop(e(this).scrollTop() - e(this).offset().top + e(t).offset().top), this
        }, e.fn.dropdown = function(t) {
            this.each(function() {
                var n = e(this),
                    i = e.extend({}, e.fn.dropdown.defaults, t),
                    o = !1,
                    r = e("#".concat(n.attr("data-activates")));

                function s() {
                    void 0 !== n.data("induration") && (i.inDuration = n.data("inDuration")), void 0 !== n.data("outduration") && (i.outDuration = n.data("outDuration")), void 0 !== n.data("constrainwidth") && (i.constrain_width = n.data("constrainwidth")), void 0 !== n.data("hover") && (i.hover = n.data("hover")), void 0 !== n.data("gutter") && (i.gutter = n.data("gutter")), void 0 !== n.data("beloworigin") && (i.belowOrigin = n.data("beloworigin")), void 0 !== n.data("alignment") && (i.alignment = n.data("alignment"))
                }

                function a(t) {
                    "focus" === t && (o = !0), s(), r.addClass("active"), n.addClass("active"), !0 === i.constrain_width ? r.css("width", n.outerWidth()) : r.css("white-space", "nowrap");
                    var a = window.innerHeight,
                        l = n.innerHeight(),
                        c = n.offset().left,
                        u = n.offset().top - e(window).scrollTop(),
                        d = i.alignment,
                        h = 0,
                        f = 0,
                        p = 0;
                    !0 === i.belowOrigin && (p = l);
                    var g = 0,
                        m = n.parent();
                    if (!m.is("body") && m[0].scrollHeight > m[0].clientHeight && (g = m[0].scrollTop), c + r.innerWidth() > e(window).width() ? d = "right" : c - r.innerWidth() + n.innerWidth() < 0 && (d = "left"), u + r.innerHeight() > a)
                        if (u + l - r.innerHeight() < 0) {
                            var v = a - u - p;
                            r.css("max-height", v)
                        } else p || (p += l), p -= r.innerHeight();
                    if ("left" === d) h = i.gutter, f = n.position().left + h;
                    else if ("right" === d) {
                        f = n.position().left + n.outerWidth() - r.outerWidth() + (h = -i.gutter)
                    }
                    r.css({
                        position: "absolute",
                        top: n.position().top + p + g,
                        left: f
                    }), r.stop(!0, !0).css("opacity", 0).slideDown({
                        queue: !1,
                        duration: i.inDuration,
                        easing: "easeOutCubic",
                        complete: function() {
                            e(this).css("height", "")
                        }
                    }).animate({
                        opacity: 1,
                        scrollTop: 0
                    }, {
                        queue: !1,
                        duration: i.inDuration,
                        easing: "easeOutSine"
                    })
                }

                function l() {
                    o = !1, r.fadeOut(i.outDuration), r.removeClass("active"), n.removeClass("active"), setTimeout(function() {
                        r.css("max-height", "")
                    }, i.outDuration)
                }
                if (s(), n.after(r), i.hover) {
                    var c = !1;
                    n.unbind("click.".concat(n.attr("id"))), n.on("mouseenter", function() {
                        !1 === c && (a(), c = !0)
                    }), n.on("mouseleave", function(t) {
                        var n = t.toElement || t.relatedTarget;
                        e(n).closest(".dropdown-content").is(r) || (r.stop(!0, !0), l(), c = !1)
                    }), r.on("mouseleave", function(t) {
                        var i = t.toElement || t.relatedTarget;
                        e(i).closest(".dropdown-button").is(n) || (r.stop(!0, !0), l(), c = !1)
                    })
                } else n.unbind("click.".concat(n.attr("id"))), n.bind("click.".concat(n.attr("id")), function(t) {
                    o || (n[0] !== t.currentTarget || n.hasClass("active") || 0 !== e(t.target).closest(".dropdown-content").length ? n.hasClass("active") && (l(), e(document).unbind("click.".concat(r.attr("id"), " touchstart.").concat(r.attr("id")))) : (t.preventDefault(), a("click")), r.hasClass("active") && e(document).bind("click.".concat(r.attr("id"), " touchstart.").concat(r.attr("id")), function(t) {
                        r.is(t.target) || n.is(t.target) || n.find(t.target).length || (l(), e(document).unbind("click.".concat(r.attr("id"), " touchstart.").concat(r.attr("id"))))
                    }))
                });
                n.on("open", function(e, t) {
                    a(t)
                }), n.on("close", l)
            })
        }, e.fn.dropdown.defaults = {
            inDuration: 300,
            outDuration: 225,
            constrain_width: !0,
            hover: !1,
            gutter: 0,
            belowOrigin: !1,
            alignment: "left"
        }, e(".dropdown-button").dropdown(), e.fn.mdbDropSearch = function(t) {
            var n = e(this).find("input");
            this.filter(function(t, i) {
                e(i).on("keyup", function() {
                    for (var e = n.closest("div[id]").find("a, li"), t = 0; t < e.length; t++) e.eq(t).html().toUpperCase().indexOf(n.val().toUpperCase()) > -1 ? e.eq(t).css({
                        display: ""
                    }) : e.eq(t).css({
                        display: "none"
                    })
                })
            });
            var i = e.extend({
                color: "#000",
                backgroundColor: "",
                fontSize: ".9rem",
                fontWeight: "400",
                borderRadius: "",
                borderColor: ""
            }, t);
            return this.css({
                color: i.color,
                backgroundColor: i.backgroundColor,
                fontSize: i.fontSize,
                fontWeight: i.fontWeight,
                borderRadius: i.borderRadius,
                border: i.border,
                margin: i.margin
            })
        }
    }(jQuery);
var dropdownSelectors = $(".dropdown, .dropup");

function dropdownEffectData(e) {
    var t = "fadeIn",
        n = "fadeOut",
        i = $(e),
        o = $(".dropdown-menu", e),
        r = i.parents("ul.nav");
    return r.height > 0 && (t = r.data("dropdown-in") || null, n = r.data("dropdown-out") || null), {
        target: e,
        dropdown: i,
        dropdownMenu: o,
        effectIn: o.data("dropdown-in") || t,
        effectOut: o.data("dropdown-out") || n
    }
}

function dropdownEffectStart(e, t) {
    t && (e.dropdown.addClass("dropdown-animating"), e.dropdownMenu.addClass(["animated", t].join(" ")))
}

function dropdownEffectEnd(e, t) {
    e.dropdown.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
        e.dropdown.removeClass("dropdown-animating"), e.dropdownMenu.removeClass(["animated", e.effectIn, e.effectOut].join(" ")), "function" == typeof t && t()
    })
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}
dropdownSelectors.on({
        "show.bs.dropdown": function() {
            var e = dropdownEffectData(this);
            dropdownEffectStart(e, e.effectIn)
        },
        "shown.bs.dropdown": function() {
            var e = dropdownEffectData(this);
            e.effectIn && e.effectOut && dropdownEffectEnd(e)
        },
        "hide.bs.dropdown": function(e) {
            var t = dropdownEffectData(this);
            t.effectOut && (e.preventDefault(), dropdownEffectStart(t, t.effectOut), dropdownEffectEnd(t, function() {
                t.dropdown.removeClass("show"), t.dropdownMenu.removeClass("show")
            }))
        }
    }), $(".multi-level-dropdown .dropdown-submenu > a").on("mouseenter", function(e) {
        var t = $(this);
        $(".multi-level-dropdown .dropdown-submenu .dropdown-menu").removeClass("show"), t.next(".dropdown-menu").addClass("show"), e.stopPropagation()
    }), $(".multi-level-dropdown .dropdown").on("hidden.bs.dropdown", function() {
        $(".multi-level-dropdown .dropdown-menu.show").removeClass("show")
    }),
    function(e) {
        var t = this;
        e(document).ready(function() {
            e(document).on("mouseenter", ".fixed-action-btn", function() {
                var t = e(this);
                n(t)
            }), e(document).on("mouseleave", ".fixed-action-btn", function() {
                var t = e(this);
                i(t)
            }), e(document).on("click", ".fixed-action-btn > a", function() {
                var t = e(this).parent();
                t.hasClass("active") ? n(t) : i(t), t.hasClass("active") ? i(t) : n(t)
            })
        }), e.fn.extend({
            openFAB: function() {
                n(e(this))
            },
            closeFAB: function() {
                i(e(this))
            }
        });
        var n = function(e) {
                var t = e;
                t.hasClass("active") || (t.addClass("active"), document.querySelectorAll("ul .btn-floating").forEach(function(e) {
                    e.classList.add("shown")
                }))
            },
            i = function(e) {
                e.removeClass("active"), document.querySelectorAll("ul .btn-floating").forEach(function(e) {
                    e.classList.remove("shown")
                })
            };
        e(".fixed-action-btn:not(.smooth-scroll) > .btn-floating").on("click", function(o) {
            if (!e(t).hasClass("smooth-scroll")) return o.preventDefault(), r = e(".fixed-action-btn"), (s = r).hasClass("active") ? i(s) : n(s), !1;
            var r, s
        })
    }(jQuery),
    function(e) {
        var t = 240,
            n = 1440,
            i = 300,
            o = 200,
            r = 50,
            s = 200,
            a = "easeOutQuad",
            l = "easeOutCubic",
            c = !0,
            u = !1,
            d = function() {
                function d(h, f) {
                    _classCallCheck(this, d), this.defaults = {
                        MENU_WIDTH: t,
                        edge: "left",
                        closeOnClick: !1,
                        breakpoint: n,
                        timeDurationOpen: i,
                        timeDurationClose: o,
                        timeDurationOverlayOpen: r,
                        timeDurationOverlayClose: s,
                        easingOpen: a,
                        easingClose: l,
                        showOverlay: c,
                        showCloseButton: u
                    }, this.$element = h, this.$elementCloned = h.clone().css({
                        display: "inline-block",
                        lineHeight: "24px"
                    }), this.options = this.assignOptions(f), this.menuOut = !1, this.lastTouchVelocity = {
                        x: {
                            startPosition: 0,
                            startTime: 0,
                            endPosition: 0,
                            endTime: 0
                        }
                    }, this.$body = e("body"), this.$menu = e("#".concat(this.$element.attr("data-activates"))), this.$sidenavOverlay = e("#sidenav-overlay"), this.$dragTarget = e('<div class="drag-target"></div>'), this.$body.append(this.$dragTarget), this.init()
                }
                return _createClass(d, [{
                    key: "init",
                    value: function() {
                        this.setMenuWidth(), this.setMenuTranslation(), this.closeOnClick(), this.openOnClick(), this.bindTouchEvents(), this.showCloseButton(), this.inputOnClick()
                    }
                }, {
                    key: "bindTouchEvents",
                    value: function() {
                        var e = this;
                        this.$dragTarget.on("click", function() {
                            return e.removeMenu()
                        }), this.$elementCloned.on("click", function() {
                            return e.removeMenu()
                        }), this.$dragTarget.on("touchstart", function(t) {
                            e.lastTouchVelocity.x.startPosition = t.touches[0].clientX, e.lastTouchVelocity.x.startTime = Date.now()
                        }), this.$dragTarget.on("touchmove", this.touchmoveEventHandler.bind(this)), this.$dragTarget.on("touchend", this.touchendEventHandler.bind(this))
                    }
                }, {
                    key: "touchmoveEventHandler",
                    value: function(e) {
                        if ("touchmove" === e.type) {
                            var t = e.touches[0],
                                n = t.clientX;
                            Date.now() - this.lastTouchVelocity.x.startTime > 20 && (this.lastTouchVelocity.x.startPosition = t.clientX, this.lastTouchVelocity.x.startTime = Date.now()), this.disableScrolling(), 0 !== this.$sidenavOverlay.length || this.buildSidenavOverlay(), "left" === this.options.edge && (n > this.options.MENU_WIDTH ? n = this.options.MENU_WIDTH : n < 0 && (n = 0)), this.translateSidenavX(n), this.updateOverlayOpacity(n)
                        }
                    }
                }, {
                    key: "panEventHandler",
                    value: function(e) {
                        if ("touch" === e.gesture.pointerType) {
                            var t = e.gesture.center.x;
                            this.disableScrolling(), 0 !== this.$sidenavOverlay.length || this.buildSidenavOverlay(), "left" === this.options.edge && (t > this.options.MENU_WIDTH ? t = this.options.MENU_WIDTH : t < 0 && (t = 0)), this.translateSidenavX(t), this.updateOverlayOpacity(t)
                        }
                    }
                }, {
                    key: "translateSidenavX",
                    value: function(e) {
                        if ("left" === this.options.edge) {
                            var t = e >= this.options.MENU_WIDTH / 2;
                            this.menuOut = t, this.$menu.css("transform", "translateX(".concat(e - this.options.MENU_WIDTH, "px)"))
                        } else {
                            var n = e < window.innerWidth - this.options.MENU_WIDTH / 2;
                            this.menuOut = n;
                            var i = e - this.options.MENU_WIDTH / 2;
                            i < 0 && (i = 0), this.$menu.css("transform", "translateX(".concat(i, "px)"))
                        }
                    }
                }, {
                    key: "updateOverlayOpacity",
                    value: function(e) {
                        var t;
                        t = "left" === this.options.edge ? e / this.options.MENU_WIDTH : Math.abs((e - window.innerWidth) / this.options.MENU_WIDTH), this.$sidenavOverlay.velocity({
                            opacity: t
                        }, {
                            duration: 10,
                            queue: !1,
                            easing: this.options.easingOpen
                        })
                    }
                }, {
                    key: "buildSidenavOverlay",
                    value: function() {
                        var t = this;
                        !0 === this.options.showOverlay && (this.$sidenavOverlay = e('<div id="sidenav-overlay"></div>'), this.$sidenavOverlay.css("opacity", 0).on("click", function() {
                            return t.removeMenu()
                        }), this.$body.append(this.$sidenavOverlay))
                    }
                }, {
                    key: "disableScrolling",
                    value: function() {
                        var e = this.$body.innerWidth();
                        this.$body.css("overflow", "hidden"), this.$body.width(e)
                    }
                }, {
                    key: "touchendEventHandler",
                    value: function(e) {
                        if ("touchend" === e.type) {
                            var t = e.changedTouches[0];
                            this.lastTouchVelocity.x.endTime = Date.now(), this.lastTouchVelocity.x.endPosition = t.clientX;
                            var n = this.calculateTouchVelocityX(),
                                i = t.clientX,
                                o = i - this.options.MENU_WIDTH,
                                r = i - this.options.MENU_WIDTH / 2;
                            o > 0 && (o = 0), r < 0 && (r = 0), "left" === this.options.edge ? (this.menuOut && n <= .3 || n < -.5 ? (0 !== o && this.translateMenuX([0, o], "300"), this.showSidenavOverlay()) : (!this.menuOut || n > .3) && (this.enableScrolling(), this.translateMenuX([-1 * this.options.MENU_WIDTH - 10, o], "200"), this.hideSidenavOverlay()), this.$dragTarget.css({
                                width: "10px",
                                right: "",
                                left: 0
                            })) : this.menuOut && n >= -.3 || n > .5 ? (this.translateMenuX([0, r], "300"), this.showSidenavOverlay(), this.$dragTarget.css({
                                width: "50%",
                                right: "",
                                left: 0
                            })) : (!this.menuOut || n < -.3) && (this.enableScrolling(), this.translateMenuX([this.options.MENU_WIDTH + 10, r], "200"), this.hideSidenavOverlay(), this.$dragTarget.css({
                                width: "10px",
                                right: 0,
                                left: ""
                            }))
                        }
                    }
                }, {
                    key: "calculateTouchVelocityX",
                    value: function() {
                        return Math.abs(this.lastTouchVelocity.x.endPosition - this.lastTouchVelocity.x.startPosition) / Math.abs(this.lastTouchVelocity.x.endTime - this.lastTouchVelocity.x.startTime)
                    }
                }, {
                    key: "panendEventHandler",
                    value: function(e) {
                        if ("touch" === e.gesture.pointerType) {
                            var t = e.gesture.velocityX,
                                n = e.gesture.center.x,
                                i = n - this.options.MENU_WIDTH,
                                o = n - this.options.MENU_WIDTH / 2;
                            i > 0 && (i = 0), o < 0 && (o = 0), "left" === this.options.edge ? (this.menuOut && t <= .3 || t < -.5 ? (0 !== i && this.translateMenuX([0, i], "300"), this.showSidenavOverlay()) : (!this.menuOut || t > .3) && (this.enableScrolling(), this.translateMenuX([-1 * this.options.MENU_WIDTH - 10, i], "200"), this.hideSidenavOverlay()), this.$dragTarget.css({
                                width: "10px",
                                right: "",
                                left: 0
                            })) : this.menuOut && t >= -.3 || t > .5 ? (this.translateMenuX([0, o], "300"), this.showSidenavOverlay(), this.$dragTarget.css({
                                width: "50%",
                                right: "",
                                left: 0
                            })) : (!this.menuOut || t < -.3) && (this.enableScrolling(), this.translateMenuX([this.options.MENU_WIDTH + 10, o], "200"), this.hideSidenavOverlay(), this.$dragTarget.css({
                                width: "10px",
                                right: 0,
                                left: ""
                            }))
                        }
                    }
                }, {
                    key: "translateMenuX",
                    value: function(e, t) {
                        this.$menu.velocity({
                            translateX: e
                        }, {
                            duration: "string" == typeof t ? Number(t) : t,
                            queue: !1,
                            easing: this.options.easingOpen
                        })
                    }
                }, {
                    key: "hideSidenavOverlay",
                    value: function() {
                        this.$sidenavOverlay.velocity({
                            opacity: 0
                        }, {
                            duration: this.options.timeDurationOverlayClose,
                            queue: !1,
                            easing: this.options.easingOpen,
                            complete: function() {
                                e(this).remove()
                            }
                        })
                    }
                }, {
                    key: "showSidenavOverlay",
                    value: function() {
                        this.$sidenavOverlay.velocity({
                            opacity: 1
                        }, {
                            duration: this.options.timeDurationOverlayOpen,
                            queue: !1,
                            easing: this.options.easingOpen
                        })
                    }
                }, {
                    key: "enableScrolling",
                    value: function() {
                        this.$body.css({
                            overflow: "",
                            width: ""
                        })
                    }
                }, {
                    key: "openOnClick",
                    value: function() {
                        var t = this;
                        this.$element.on("click", function(n) {
                            if (n.preventDefault(), !0 === t.menuOut) t.removeMenu();
                            else {
                                t.menuOut = !0, !0 === t.options.showOverlay ? e("#sidenav-overlay").length || (t.$sidenavOverlay = e('<div id="sidenav-overlay"></div>'), t.$body.append(t.$sidenavOverlay)) : t.showCloseButton();
                                var i = [];
                                i = "left" === t.options.edge ? [0, -1 * t.options.MENU_WIDTH] : [0, t.options.MENU_WIDTH], "matrix(1, 0, 0, 1, 0, 0)" !== t.$menu.css("transform") && t.$menu.velocity({
                                    translateX: i
                                }, {
                                    duration: t.options.timeDurationOpen,
                                    queue: !1,
                                    easing: t.options.easingOpen
                                }), t.$sidenavOverlay.on("click", function() {
                                    return t.removeMenu()
                                }), t.$sidenavOverlay.on("touchmove", t.touchmoveEventHandler.bind(t)), t.$menu.on("touchmove", function(e) {
                                    e.preventDefault(), t.$menu.find(".custom-scrollbar").css("padding-bottom", "30px")
                                }), t.menuOut = !0
                            }
                        })
                    }
                }, {
                    key: "closeOnClick",
                    value: function() {
                        var e = this;
                        !0 === this.options.closeOnClick && this.$menu.on("click", "a:not(.collapsible-header)", function() {
                            return e.removeMenu()
                        })
                    }
                }, {
                    key: "showCloseButton",
                    value: function() {
                        !0 === this.options.showCloseButton && (this.$menu.prepend(this.$elementCloned), this.$menu.find(".logo-wrapper").css({
                            borderTop: "1px solid rgba(153,153,153,.3)"
                        }))
                    }
                }, {
                    key: "setMenuTranslation",
                    value: function() {
                        var t = this;
                        "left" === this.options.edge ? (this.$menu.css("transform", "translateX(-100%)"), this.$dragTarget.css({
                            left: 0
                        })) : (this.$menu.addClass("right-aligned").css("transform", "translateX(100%)"), this.$dragTarget.css({
                            right: 0
                        })), this.$menu.hasClass("fixed") && (window.innerWidth > this.options.breakpoint && this.$menu.css("transform", "translateX(0)"), this.$menu.find("input[type=text]").on("touchstart", function() {
                            t.$menu.addClass("transform-fix-input")
                        }), e(window).resize(function() {
                            if (window.innerWidth > t.options.breakpoint) t.$sidenavOverlay.length ? t.removeMenu(!0) : t.$menu.css("transform", "translateX(0%)");
                            else if (!1 === t.menuOut) {
                                var e = "left" === t.options.edge ? "-100" : "100";
                                t.$menu.css("transform", "translateX(".concat(e, "%)"))
                            }
                        }))
                    }
                }, {
                    key: "setMenuWidth",
                    value: function() {
                        var n = e("#".concat(this.$menu.attr("id"))).find("> .sidenav-bg");
                        this.options.MENU_WIDTH !== t && (this.$menu.css("width", this.options.MENU_WIDTH), n.css("width", this.options.MENU_WIDTH))
                    }
                }, {
                    key: "inputOnClick",
                    value: function() {
                        var e = this;
                        this.$menu.find("input[type=text]").on("touchstart", function() {
                            return e.$menu.css("transform", "translateX(0)")
                        })
                    }
                }, {
                    key: "assignOptions",
                    value: function(t) {
                        return e.extend({}, this.defaults, t)
                    }
                }, {
                    key: "removeMenu",
                    value: function(e) {
                        var t = this;
                        this.$body.css({
                            overflow: "",
                            width: ""
                        }), this.$menu.velocity({
                            translateX: "left" === this.options.edge ? "-100%" : "100%"
                        }, {
                            duration: this.options.timeDurationClose,
                            queue: !1,
                            easing: this.options.easingClose,
                            complete: function() {
                                !0 === e && (t.$menu.removeAttr("style"), t.$menu.css("width", t.options.MENU_WIDTH))
                            }
                        }), this.$menu.hasClass("transform-fix-input") && this.$menu.removeClass("transform-fix-input"), this.hideSidenavOverlay(), this.menuOut = !1
                    }
                }]), d
            }();
        e.fn.sideNav = function(t) {
            return this.each(function() {
                new d(e(this), t)
            })
        }
    }(jQuery), $(function() {
        $("#toggle").click(function() {
            $("#slide-out").hasClass("slim") ? ($("#slide-out").removeClass("slim"),$("body").removeClass("nav-slim"), $(".sv-slim-icon").removeClass("fa-angle-double-right").addClass("fa-angle-double-left")) : ($("#slide-out").addClass("slim"), $("body").addClass("nav-slim"), $(".sv-slim-icon").removeClass("fa-angle-double-left").addClass("fa-angle-double-right"))
        })
    }),
    function(e) {
        e.fn.collapsible = function(t) {
            var n = {
                accordion: void 0
            };

            function i(t, n) {
                $panelHeaders = t.find("> li > .collapsible-header"), n.hasClass("active") ? n.parent().addClass("active") : n.parent().removeClass("active"), n.parent().hasClass("active") ? n.siblings(".collapsible-body").stop(!0, !1).slideDown({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function() {
                        e(this).css("height", "")
                    }
                }) : n.siblings(".collapsible-body").stop(!0, !1).slideUp({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function() {
                        e(this).css("height", "")
                    }
                }), $panelHeaders.not(n).removeClass("active").parent().removeClass("active"), $panelHeaders.not(n).parent().children(".collapsible-body").stop(!0, !1).slideUp({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function() {
                        e(this).css("height", "")
                    }
                })
            }

            function o(t) {
                t.hasClass("active") ? t.parent().addClass("active") : t.parent().removeClass("active"), t.parent().hasClass("active") ? t.siblings(".collapsible-body").stop(!0, !1).slideDown({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function() {
                        e(this).css("height", "")
                    }
                }) : t.siblings(".collapsible-body").stop(!0, !1).slideUp({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function() {
                        e(this).css("height", "")
                    }
                })
            }

            function r(e) {
                return s(e).length > 0
            }

            function s(e) {
                return e.closest("li > .collapsible-header")
            }
            return t = e.extend(n, t), this.each(function() {
                var n = e(this),
                    a = e(this).find("> li > .collapsible-header"),
                    l = n.data("collapsible");
                n.off("click.collapse", ".collapsible-header"), a.off("click.collapse"), t.accordion || "accordion" === l || void 0 === l ? ((a = n.find("> li > .collapsible-header")).on("click.collapse", function(t) {
                    var o = e(t.target);
                    r(o) && (o = s(o)), o.toggleClass("active"), i(n, o)
                }), i(n, a.filter(".active").first())) : a.each(function() {
                    e(this).on("click.collapse", function(t) {
                        var n = e(t.target);
                        r(n) && (n = s(n)), n.toggleClass("active"), o(n)
                    }), e(this).hasClass("active") && o(e(this))
                })
            })
        }, e(".collapsible").collapsible()
    }(jQuery),
    function(e) {
        var t, n = "input[type=range]:not(.custom-range):not(.multi-range)",
            i = '<span class="thumb"><span class="value"></span></span>',
            o = !1;
        e(document).on("change", n, function() {
            var t = e(this);
            t.siblings(".thumb").find(".value").html(t.val())
        }), e(document).on("input mousedown touchstart", n, function(r) {
            var s = e(this),
                a = s.siblings(".thumb"),
                l = s.outerWidth();
            if (!a.length && function() {
                    var t = e(i);
                    e(n).after(t)
                }(), a.find(".value").html(s.val()), o = !0, s.addClass("active"), a.hasClass("active") || a.velocity({
                    height: "30px",
                    width: "30px",
                    top: "-20px",
                    marginLeft: "-15px"
                }, {
                    duration: 300,
                    easing: "easeOutExpo"
                }), "input" !== r.type) {
                var c = void 0 === r.pageX || null === r.pageX;
                (t = c ? r.originalEvent.touches[0].pageX - e(this).offset().left : r.pageX - e(this).offset().left) < 0 ? t = 0 : t > l && (t = l), a.addClass("active").css("left", t)
            }
            a.find(".value").html(s.val())
        }), e(document).on("mouseup touchend", ".range-field", function() {
            o = !1, e(this).removeClass("active")
        }), e(document).on("mousemove touchmove", ".range-field", function(t) {
            var i, r = e(this).children(".thumb");
            if (o) {
                r.hasClass("active") || r.velocity({
                    height: "30px",
                    width: "30px",
                    top: "-20px",
                    marginLeft: "-15px"
                }, {
                    duration: 300,
                    easing: "easeOutExpo"
                }), i = void 0 === t.pageX || null === t.pageX ? t.originalEvent.touches[0].pageX - e(this).offset().left : t.pageX - e(this).offset().left;
                var s = e(this).outerWidth();
                i < 0 ? i = 0 : i > s && (i = s), r.addClass("active").css("left", i), r.find(".value").html(r.siblings(n).val())
            }
        }), e(document).on("mouseout touchleave", ".range-field", function() {
            if (!o) {
                var t = e(this).children(".thumb");
                t.hasClass("active") && t.velocity({
                    height: "0",
                    width: "0",
                    top: "10px",
                    marginLeft: "-6px"
                }, {
                    duration: 100
                }), t.removeClass("active")
            }
        })
    }(jQuery),
    function(e) {
        e(document).on("change", '.file-field input[type="file"]', function(t) {
            var n = e(t.target),
                i = n.closest(".file-field").find("input.file-path"),
                o = n[0].files,
                r = [];
            Array.isArray(o) ? o.forEach(function(e) {
                return r.push(e.name)
            }) : Object.keys(o).forEach(function(e) {
                r.push(o[e].name)
            }), i.val(r.join(", ")), i.trigger("change")
        })
    }(jQuery),
    function(e) {
        var t, n = function() {
            function t(n, i) {
                _classCallCheck(this, t), this.$nativeSelect = n, this.defaults = {
                    destroy: !1,
                    nativeID: null,
                    BSsearchIn: !1,
                    BSinputText: !1,
                    fasClasses: "",
                    farClasses: "",
                    fabClasses: "",
                    copyClassesOption: !1,
                    language: {
                        active: !1,
                        pl: {
                            selectAll: "Wybierz wszystko",
                            optionsSelected: "wybranych opcji"
                        },
                        in : {
                            selectAll: "Pilih semuanya",
                            optionsSelected: "opsi yang dipilih"
                        },
                        fr: {
                            selectAll: "Tout choisir",
                            optionsSelected: "options sélectionnées"
                        },
                        ge: {
                            selectAll: "Wähle alles aus",
                            optionsSelected: "ausgewählte Optionen"
                        },
                        ar: {
                            selectAll: "اختر كل شيء",
                            optionsSelected: "الخيارات المحددة"
                        }
                    }
                }, this.options = this.assignOptions(i), this.isMultiple = Boolean(this.$nativeSelect.attr("multiple")), this.isSearchable = Boolean(this.$nativeSelect.attr("searchable")), this.isRequired = Boolean(this.$nativeSelect.attr("required")), this.isEditable = Boolean(this.$nativeSelect.attr("editable")), this.selectAllLabel = Boolean(this.$nativeSelect.attr("selectAllLabel")) ? this.$nativeSelect.attr("selectAllLabel") : "Select all", this.optionsSelectedLabel = Boolean(this.$nativeSelect.attr("optionsSelectedLabel")) ? this.$nativeSelect.attr("optionsSelectedLabel") : "options selected", this.keyboardActiveClass = Boolean(this.$nativeSelect.attr("keyboardActiveClass")) ? this.$nativeSelect.attr("keyboardActiveClass") : "heavy-rain-gradient", this.uuid = null !== this.options.nativeID && "" !== this.options.nativeID && void 0 !== this.options.nativeID && "string" == typeof this.options.nativeID ? this.options.nativeID : this._randomUUID(), this.$selectWrapper = e('<div class="select-wrapper"></div>'), this.$materialOptionsList = e('<ul id="select-options-'.concat(this.uuid, '" class="dropdown-content select-dropdown w-100 ').concat(this.isMultiple ? "multiple-select-dropdown" : "", '"></ul>')), this.$materialSelectInitialOption = n.find("option:selected").text() || n.find("option:first").text() || "", this.$nativeSelectChildren = this.$nativeSelect.children("option, optgroup"), this.$materialSelect = e('<input type="text" class="'.concat(this.options.BSinputText ? "browser-default custom-select multi-bs-select select-dropdown form-control" : "select-dropdown form-control", '" ').concat(!this.options.validate && 'readonly="true"', ' required="').concat(this.options.validate ? "true" : "false", '" ').concat(this.$nativeSelect.is(" :disabled") ? "disabled" : "", ' data-activates="select-options-').concat(this.uuid, '" value=""/>')), this.$dropdownIcon = this.options.BSinputText ? "" : e('<span class="caret">&#9660;</span>'), this.$searchInput = null, this.$toggleAll = e('<li class="select-toggle-all"><span><input type="checkbox" class="form-check-input"><label>'.concat(this.selectAllLabel, "</label></span></li>")), this.$addOptionBtn = e('<i class="select-add-option fas fa-plus"></i>'), this.mainLabel = this.$nativeSelect.next(".mdb-main-label"), this.$validFeedback = e('<div class="valid-feedback">'.concat(this.options.validFeedback || "Good choice", "</div>")), this.$invalidFeedback = e('<div class="invalid-feedback">'.concat(this.options.invalidFeedback || "Bad choice", "</div>")), this.valuesSelected = [], this.keyCodes = {
                    tab: 9,
                    esc: 27,
                    enter: 13,
                    arrowUp: 38,
                    arrowDown: 40
                }, t.mutationObservers = []
            }
            return _createClass(t, [{
                key: "assignOptions",
                value: function(t) {
                    return e.extend({}, this.defaults, t)
                }
            }, {
                key: "init",
                value: function() {
                    if (Boolean(this.$nativeSelect.data("select-id")) && this._removeMaterialWrapper(), this.options.destroy) this.$nativeSelect.data("select-id", null).removeClass("initialized");
                    else {
                        this.options.BSsearchIn || this.options.BSinputText ? this.$selectWrapper.addClass(this.$nativeSelect.attr("class").split(" ").filter(function(e) {
                            return "md-form" !== e
                        }).join(" ")).css({
                            marginTop: "1.5rem",
                            marginBottom: "1.5rem"
                        }) : this.$selectWrapper.addClass(this.$nativeSelect.attr("class")), this.$nativeSelect.data("select-id", this.uuid);
                        var e = this.$materialSelectInitialOption.replace(/"/g, "&quot;").replace(/  +/g, " ").trim();
                        0 === this.mainLabel.length ? this.$materialSelect.val(e) : this.mainLabel.text(), this.renderMaterialSelect(), this.bindEvents(), this.isRequired && this.enableValidation(), this.options.language.active && this.$toggleAll && (this.options.language.pl && this.$toggleAll.find("label").text(this.options.language.pl.selectAll ? this.options.language.pl.selectAll : this.defaults.language.pl.selectAll), this.options.language.fr && this.$toggleAll.find("label").text(this.options.language.fr.selectAll ? this.options.language.fr.selectAll : this.defaults.language.fr.selectAll), this.options.language.ge && this.$toggleAll.find("label").text(this.options.language.ge.selectAll ? this.options.language.ge.selectAll : this.defaults.language.ge.selectAll), this.options.language.ar && this.$toggleAll.find("label").text(this.options.language.ar.selectAll ? this.options.language.ar.selectAll : this.defaults.language.ar.selectAll), this.options.language.in && this.$toggleAll.find("label").text(this.options.language.in.selectAll ? this.options.language.in.selectAll : this.defaults.language.in.selectAll)), this.$materialSelect.hasClass("custom-select") && this.$materialSelect.hasClass("select-dropdown") && this.$materialSelect.css({
                            display: "inline-block",
                            width: "100%",
                            height: "calc(1.5em + .75rem + 2px)",
                            padding: ".375rem 1.75rem .375rem .75rem",
                            fontSize: "1rem",
                            lineHeight: "1.5",
                            backgroundColor: "#fff",
                            border: "1px solid #ced4da"
                        })
                    }
                }
            }, {
                key: "_removeMaterialWrapper",
                value: function() {
                    var t = this.$nativeSelect.data("select-id");
                    this.$nativeSelect.parent().find("span.caret").remove(), this.$nativeSelect.parent().find("input").remove(), this.$nativeSelect.unwrap(), e("ul#select-options-".concat(t)).remove()
                }
            }, {
                key: "renderMaterialSelect",
                value: function() {
                    var e = this;
                    if (this.$nativeSelect.before(this.$selectWrapper), this.appendDropdownIcon(), this.appendValidation(), this.appendMaterialSelect(), this.appendMaterialOptionsList(), this.appendNativeSelect(), this.appendSaveSelectButton(), this.$nativeSelect.is(":disabled") || this.$materialSelect.dropdown({
                            hover: !1,
                            closeOnClick: !1
                        }), !1 !== this.$nativeSelect.data("inherit-tabindex") && this.$materialSelect.attr("tabindex", this.$nativeSelect.attr("tabindex")), this.isMultiple) this.$nativeSelect.find("option:selected:not(:disabled)").each(function(t, n) {
                        var i = n.index;
                        e._toggleSelectedValue(i), e.$materialOptionsList.find("li:not(.optgroup):not(.select-toggle-all)").eq(i).find(":checkbox").prop("checked", !0)
                    });
                    else {
                        var t = this.$nativeSelect.find("option[selected]"),
                            n = t.index();
                        "disabled" !== t.attr("disabled") && n >= 0 && (this._toggleSelectedValue(n), this.$materialOptionsList.find("li").eq(n).addClass("active"))
                    }
                    this.$nativeSelect.addClass("initialized"), this.options.BSinputText && this.mainLabel.css("top", "-7px")
                }
            }, {
                key: "appendDropdownIcon",
                value: function() {
                    this.$nativeSelect.is(":disabled") && this.$dropdownIcon.addClass("disabled"), this.$selectWrapper.append(this.$dropdownIcon)
                }
            }, {
                key: "appendValidation",
                value: function() {
                    this.options.validate && (this.$validFeedback.insertAfter(this.$selectWrapper), this.$invalidFeedback.insertAfter(this.$selectWrapper))
                }
            }, {
                key: "appendMaterialSelect",
                value: function() {
                    this.$selectWrapper.append(this.$materialSelect)
                }
            }, {
                key: "appendMaterialOptionsList",
                value: function() {
                    this.isSearchable && this.appendSearchInputOption(), this.isEditable && this.isSearchable && this.appendAddOptionBtn(), this.buildMaterialOptions(), this.isMultiple && this.appendToggleAllCheckbox(), this.$selectWrapper.append(this.$materialOptionsList)
                }
            }, {
                key: "appendNativeSelect",
                value: function() {
                    this.$nativeSelect.appendTo(this.$selectWrapper)
                }
            }, {
                key: "appendSearchInputOption",
                value: function() {
                    var t = this.$nativeSelect.attr("searchable");
                    this.options.BSsearchIn ? this.$searchInput = e('<span class="search-wrap ml-2"><div class="mt-0"><input type="text" class="search mb-2 w-100 d-block select-default" tabindex="-1" placeholder="'.concat(t, '"></div></span>')) : this.$searchInput = e('<span class="search-wrap ml-2"><div class="md-form mt-0"><input type="text" class="search w-100 d-block" tabindex="-1" placeholder="'.concat(t, '"></div></span>')), this.$materialOptionsList.append(this.$searchInput), this.$searchInput.on("click", function(e) {
                        e.stopPropagation()
                    })
                }
            }, {
                key: "appendAddOptionBtn",
                value: function() {
                    this.$searchInput.append(this.$addOptionBtn), this.$addOptionBtn.on("click", this.addNewOption.bind(this))
                }
            }, {
                key: "addNewOption",
                value: function() {
                    var t = this.$searchInput.find("input").val(),
                        n = e('<option value="'.concat(t.toLowerCase(), '" selected>').concat(t, "</option>")).prop("selected", !0);
                    this.isMultple || this.$nativeSelectChildren.each(function(t, n) {
                        e(n).attr("selected", !1)
                    }), this.$nativeSelect.append(n)
                }
            }, {
                key: "appendToggleAllCheckbox",
                value: function() {
                    var e = this.$materialOptionsList.find("li").first();
                    e.hasClass("disabled") && e.find("input").prop("disabled") ? e.after(this.$toggleAll) : this.$materialOptionsList.find("li").first().before(this.$toggleAll)
                }
            }, {
                key: "appendSaveSelectButton",
                value: function() {
                    this.$selectWrapper.parent().find("button.btn-save").appendTo(this.$materialOptionsList)
                }
            }, {
                key: "buildMaterialOptions",
                value: function() {
                    var t = this;
                    this.$nativeSelectChildren.each(function(n, i) {
                        var o = e(i);
                        if (o.is("option")) t.buildSingleOption(o, t.isMultiple ? "multiple" : "");
                        else if (o.is("optgroup")) {
                            var r = e('<li class="optgroup"><span>'.concat(o.attr("label"), "</span></li>"));
                            t.$materialOptionsList.append(r), o.children("option").each(function(n, i) {
                                t.buildSingleOption(e(i), "optgroup-option")
                            })
                        }
                    })
                }
            }, {
                key: "buildSingleOption",
                value: function(t, n) {
                    var i = t.is(":disabled") ? "disabled" : "",
                        o = "optgroup-option" === n ? "optgroup-option" : "",
                        r = t.data("icon"),
                        s = t.data("fas") ? '<i class="fa-pull-right m-2 fas fa-'.concat(t.data("fas"), " ").concat([...this.options.fasClasses].join(""), '"></i> ') : "",
                        a = t.data("far") ? '<i class="fa-pull-right m-2 far fa-'.concat(t.data("far"), " ").concat([...this.options.farClasses].join(""), '"></i> ') : "",
                        l = t.data("fab") ? '<i class="fa-pull-right m-2 fab fa-'.concat(t.data("fab"), " ").concat([...this.options.fabClasses].join(""), '"></i> ') : "",
                        c = t.attr("class"),
                        u = r ? '<img alt="" src="'.concat(r, '" class="').concat(c, '">') : "",
                        d = this.isMultiple ? '<input type="checkbox" class="form-check-input" '.concat(i, "/><label></label>") : "";
                    this.$materialOptionsList.append(e('<li class="'.concat(i, " ").concat(o, " ").concat(this.options.copyClassesOption ? c : "", ' ">').concat(u, '<span class="filtrable">').concat(d, " ").concat(t.html(), " ").concat(s, " ").concat(a, " ").concat(l, "</span></li>")))
                }
            }, {
                key: "enableValidation",
                value: function() {
                    this.$nativeSelect.css({
                        position: "absolute",
                        top: "1rem",
                        left: "0",
                        height: "0",
                        width: "0",
                        opacity: "0",
                        padding: "0",
                        "pointer-events": "none"
                    }), -1 === this.$nativeSelect.attr("style").indexOf("inline!important") && this.$nativeSelect.attr("style", "".concat(this.$nativeSelect.attr("style"), " display: inline!important;")), this.$nativeSelect.attr("tabindex", -1), this.$nativeSelect.data("inherit-tabindex", !1)
                }
            }, {
                key: "bindEvents",
                value: function() {
                    var n = this,
                        i = new MutationObserver(this._onMutationObserverChange.bind(this));
                    i.observe(this.$nativeSelect.get(0), {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0
                    }), i.customId = this.uuid, i.customStatus = "observing", t.clearMutationObservers(), t.mutationObservers.push(i), this.$nativeSelect.parent().find("button.btn-save").on("click", this._onSaveSelectBtnClick.bind(this)), this.$materialSelect.on("focus", this._onMaterialSelectFocus.bind(this)), this.$materialSelect.on("click", this._onMaterialSelectClick.bind(this)), this.$materialSelect.on("blur", this._onMaterialSelectBlur.bind(this)), this.$materialSelect.on("keydown", this._onMaterialSelectKeydown.bind(this)), this.$toggleAll.on("click", this._onToggleAllClick.bind(this)), this.$materialOptionsList.on("mousedown", this._onEachMaterialOptionMousedown.bind(this)), this.$materialOptionsList.find("li:not(.optgroup)").not(this.$toggleAll).each(function(t, i) {
                        e(i).on("click", n._onEachMaterialOptionClick.bind(n, t, i))
                    }), !this.isMultiple && this.isSearchable && this.$materialOptionsList.find("li").on("click", this._onSingleMaterialOptionClick.bind(this)), this.isSearchable && this.$searchInput.find(".search").on("keyup", this._onSearchInputKeyup.bind(this)), e("html").on("click", this._onHTMLClick.bind(this))
                }
            }, {
                key: "_onMutationObserverChange",
                value: function(n) {
                    n.forEach(function(n) {
                        var i = e(n.target).closest("select");
                        !0 !== i.data("stop-refresh") && ("childList" === n.type || "attributes" === n.type && e(n.target).is("option")) && (t.clearMutationObservers(), i.materialSelect({
                            destroy: !0
                        }), i.materialSelect())
                    })
                }
            }, {
                key: "_onSaveSelectBtnClick",
                value: function() {
                    e("input.multi-bs-select").trigger("close"), this.$materialOptionsList.hide(), this.$materialSelect.removeClass("active")
                }
            }, {
                key: "_onEachMaterialOptionClick",
                value: function(t, n, i) {
                    i.stopPropagation();
                    var o = e(n);
                    if (!o.hasClass("disabled") && !o.hasClass("optgroup")) {
                        var r = !0;
                        if (this.isMultiple) {
                            o.find('input[type="checkbox"]').prop("checked", function(e, t) {
                                return !t
                            });
                            var s = Boolean(this.$nativeSelect.find("optgroup").length),
                                a = this._isToggleAllPresent() ? o.index() - 1 : o.index();
                            r = this.isSearchable && s ? this._toggleSelectedValue(a - o.prevAll(".optgroup").length - 1) : this.isSearchable ? this._toggleSelectedValue(a - 1) : s ? this._toggleSelectedValue(a - o.prevAll(".optgroup").length) : this._toggleSelectedValue(a), this._isToggleAllPresent() && this._updateToggleAllOption(), this.$materialSelect.trigger("focus")
                        } else this.$materialOptionsList.find("li").removeClass("active"), o.toggleClass("active"), this.$materialSelect.val(o.text().replace(/  +/g, " ").trim()), this.$materialSelect.trigger("close");
                        this._selectSingleOption(o), this.$nativeSelect.data("stop-refresh", !0), this.$nativeSelect.find("option").eq(t).prop("selected", r), this.$nativeSelect.removeData("stop-refresh"), this._triggerChangeOnNativeSelect(), this.mainLabel.prev().find("input").hasClass("select-dropdown") && this.mainLabel.prev().find("input.select-dropdown").val().length > 0 && this.mainLabel.addClass("active"), "function" == typeof this.options && this.options(), o.hasClass("li-added") && this.$materialOptionsList.append(this.buildSingleOption(o, ""))
                    }
                }
            }, {
                key: "_escapeKeyboardActiveOptions",
                value: function() {
                    var t = this;
                    this.$materialOptionsList.find("li").each(function(n, i) {
                        e(i).removeClass(t.keyboardActiveClass)
                    })
                }
            }, {
                key: "_triggerChangeOnNativeSelect",
                value: function() {
                    var e = new KeyboardEvent("change", {
                        bubbles: !0,
                        cancelable: !0
                    });
                    this.$nativeSelect.get(0).dispatchEvent(e)
                }
            }, {
                key: "_onMaterialSelectFocus",
                value: function(t) {
                    var n = e(t.target);
                    if (e("ul.select-dropdown").not(this.$materialOptionsList.get(0)).is(":visible") && e("input.select-dropdown").trigger("close"), this.mainLabel.addClass("active"), !this.$materialOptionsList.is(":visible")) {
                        n.trigger("open", ["focus"]);
                        var i = n.val(),
                            o = this.$materialOptionsList.find("li").filter(function() {
                                return e(this).text().toLowerCase() === i.toLowerCase()
                            })[0];
                        this._selectSingleOption(o)
                    }
                    this.isMultiple || this.mainLabel.addClass("active"), e(document).find("input.select-dropdown").each(function(t, n) {
                        return e(n).val().length <= 0
                    }).parent().next(".mdb-main-label").filter(function(t, n) {
                        return e(n).prev().find("input.select-dropdown").val().length <= 0 && !e(n).prev().find("input.select-dropdown").hasClass("active")
                    }).removeClass("active")
                }
            }, {
                key: "_onMaterialSelectClick",
                value: function(e) {
                    this.mainLabel.addClass("active"), e.stopPropagation()
                }
            }, {
                key: "_onMaterialSelectBlur",
                value: function(t) {
                    var n = e(t);
                    this.isMultiple || this.isSearchable || n.trigger("close"), this.$materialOptionsList.find("li.selected").removeClass("selected")
                }
            }, {
                key: "_onSingleMaterialOptionClick",
                value: function() {
                    this.$materialSelect.trigger("close")
                }
            }, {
                key: "_onEachMaterialOptionMousedown",
                value: function(t) {
                    var n = t.target;
                    e(".modal-content").find(this.$materialOptionsList).length && n.scrollHeight > n.offsetHeight && t.preventDefault()
                }
            }, {
                key: "_onHTMLClick",
                value: function(t) {
                    e(t.target).closest("#select-options-".concat(this.uuid)).length || e(t.target).hasClass("mdb-select") || !e("#select-options-".concat(this.uuid)).hasClass("active") || (this.$materialSelect.trigger("close"), !this.$materialSelect.val().length > 0 && this.mainLabel.removeClass("active")), this.isSearchable && null !== this.$searchInput && this.$materialOptionsList.hasClass("active") && this.$materialOptionsList.find(".search-wrap input.search").focus()
                }
            }, {
                key: "_onToggleAllClick",
                value: function(t) {
                    var n = this,
                        i = e(this.$toggleAll).find('input[type="checkbox"]').first(),
                        o = !e(i).prop("checked");
                    e(i).prop("checked", o), this.$materialOptionsList.find("li:not(.optgroup):not(.select-toggle-all)").each(function(t, i) {
                        var r = e(i).find('input[type="checkbox"]');
                        o && r.is(":checked") || !o && !r.is(":checked") || e(i).is(":hidden") || e(i).is(".disabled") || (r.prop("checked", o), n.$nativeSelect.find("option").eq(t).prop("selected", o), o ? e(i).removeClass("active") : e(i).addClass("active"), n._toggleSelectedValue(t), n._selectOption(i), n._setValueToMaterialSelect())
                    }), this.$nativeSelect.data("stop-refresh", !0), this._triggerChangeOnNativeSelect(), this.$nativeSelect.removeData("stop-refresh"), t.stopPropagation()
                }
            }, {
                key: "_onMaterialSelectKeydown",
                value: function(t) {
                    var n = e(t.target),
                        i = t.which === this.keyCodes.tab,
                        o = t.which === this.keyCodes.esc,
                        r = t.which === this.keyCodes.enter,
                        s = r && t.shiftKey,
                        a = t.which === this.keyCodes.arrowUp,
                        l = t.which === this.keyCodes.arrowDown,
                        c = this.$materialOptionsList.is(":visible");
                    i ? this._handleTabKey(n) : !l || c ? r && !c || (t.preventDefault(), s ? this._handleEnterWithShiftKey(n) : r ? this._handleEnterKey(n) : l ? this._handleArrowDownKey() : a ? this._handleArrowUpKey() : o ? this._handleEscKey(n) : this._handleLetterKey(t)) : n.trigger("open")
                }
            }, {
                key: "_handleTabKey",
                value: function(e) {
                    this._handleEscKey(e)
                }
            }, {
                key: "_handleEnterWithShiftKey",
                value: function(e) {
                    this.isMultiple ? this.$toggleAll.trigger("click") : this._handleEnterKey(e)
                }
            }, {
                key: "_handleEnterKey",
                value: function(t) {
                    this.$materialOptionsList.find("li.selected:not(.disabled)").trigger("click").addClass("active"), this.isMultiple || e(t).trigger("close")
                }
            }, {
                key: "_handleArrowDownKey",
                value: function() {
                    var t = this,
                        n = this.$materialOptionsList.find("li:visible").not(".disabled, .select-toggle-all"),
                        i = this.$materialOptionsList.find("li:visible").not(".disabled, .select-toggle-all").first(),
                        o = this.$materialOptionsList.find("li:visible").not(".disabled, .select-toggle-all").last(),
                        r = this.$materialOptionsList.find("li.selected").length > 0,
                        s = r ? this.$materialOptionsList.find("li.selected").first() : i,
                        a = s.next("li:visible:not(.disabled, .select-toggle-all)"),
                        l = a;
                    n.each(function(i, o) {
                        e(o).hasClass(t.keyboardActiveClass) && (a = n.eq(i + 1), l = n.eq(i))
                    });
                    var c = s.is(o) || !r ? s : a;
                    this._selectSingleOption(c), this._escapeKeyboardActiveOptions(), c.find("input").is(":checked") || c.removeClass(this.keyboardActiveClass), l.hasClass("selected") || l.find("input").is(":checked") || !this.isMultiple || l.removeClass("active", this.keyboardActiveClass), c.addClass(this.keyboardActiveClass), c.position() && this.$materialOptionsList.scrollTop(this.$materialOptionsList.scrollTop() + c.position().top)
                }
            }, {
                key: "_handleArrowUpKey",
                value: function() {
                    var t = this,
                        n = this.$materialOptionsList.find("li:visible").not(".disabled, .select-toggle-all"),
                        i = this.$materialOptionsList.find("li:visible").not(".disabled, .select-toggle-all").first(),
                        o = this.$materialOptionsList.find("li:visible").not(".disabled, .select-toggle-all").last(),
                        r = this.$materialOptionsList.find("li.selected").length > 0,
                        s = r ? this.$materialOptionsList.find("li.selected").first() : o,
                        a = s.prev("li:visible:not(.disabled, .select-toggle-all)"),
                        l = a;
                    n.each(function(i, o) {
                        e(o).hasClass(t.keyboardActiveClass) && (a = n.eq(i - 1), l = n.eq(i))
                    });
                    var c = s.is(i) || !r ? s : a;
                    this._selectSingleOption(c), this._escapeKeyboardActiveOptions(), c.find("input").is(":checked") || c.removeClass(this.keyboardActiveClass), l.hasClass("selected") || l.find("input").is(":checked") || !this.isMultiple || l.removeClass("active", this.keyboardActiveClass), c.addClass(this.keyboardActiveClass), c.position() && this.$materialOptionsList.scrollTop(this.$materialOptionsList.scrollTop() + c.position().top)
                }
            }, {
                key: "_handleEscKey",
                value: function(t) {
                    this._escapeKeyboardActiveOptions(), e(t).trigger("close")
                }
            }, {
                key: "_handleLetterKey",
                value: function(t) {
                    var n = this;
                    if (this._escapeKeyboardActiveOptions(), this.isSearchable) {
                        var i = t.which > 46 && t.which < 91,
                            o = t.which > 93 && t.which < 106,
                            r = 8 === t.which;
                        (i || o) && this.$searchInput.find("input").val(t.key).focus(), r && this.$searchInput.find("input").val("").focus()
                    } else {
                        var s = "",
                            a = String.fromCharCode(t.which).toLowerCase(),
                            l = Object.keys(this.keyCodes).map(function(e) {
                                return n.keyCodes[e]
                            });
                        if (a && -1 === l.indexOf(t.which)) {
                            s += a;
                            var c = this.$materialOptionsList.find("li").filter(function(t, n) {
                                return e(n).text().toLowerCase().includes(s)
                            }).first();
                            this.isMultiple || this.$materialOptionsList.find("li").removeClass("active"), c.addClass("active"), this._selectSingleOption(c)
                        }
                    }
                }
            }, {
                key: "_onSearchInputKeyup",
                value: function(t) {
                    var n = e(t.target),
                        i = t.which === this.keyCodes.tab,
                        o = t.which === this.keyCodes.esc,
                        r = t.which === this.keyCodes.enter,
                        s = r && t.shiftKey,
                        a = t.which === this.keyCodes.arrowUp;
                    if (t.which === this.keyCodes.arrowDown || i || o || a) return this.$materialSelect.focus(), void this._handleArrowDownKey();
                    var l = n.closest("ul"),
                        c = n.val(),
                        u = l.find("li span.filtrable"),
                        d = !1;
                    if (u.each(function() {
                            var t = e(this);
                            if ("string" == typeof this.outerHTML) {
                                var n = this.textContent.toLowerCase();
                                n.includes(c.toLowerCase()) ? t.show().parent().show() : t.hide().parent().hide(), n.trim() === c.toLowerCase() && (d = !0)
                            }
                        }), r) return this.isEditable && !d ? void this.addNewOption() : (s && this._handleEnterWithShiftKey(n), void this.$materialSelect.trigger("open"));
                    c && this.isEditable && !d ? this.$addOptionBtn.show() : this.$addOptionBtn.hide(), this._updateToggleAllOption()
                }
            }, {
                key: "_isToggleAllPresent",
                value: function() {
                    return this.$materialOptionsList.find(this.$toggleAll).length
                }
            }, {
                key: "_updateToggleAllOption",
                value: function() {
                    var e = this.$materialOptionsList.find("li").not(".select-toggle-all, .disabled, :hidden").find("[type=checkbox]"),
                        t = e.filter(":checked"),
                        n = this.$toggleAll.find("[type=checkbox]").is(":checked");
                    t.length !== e.length || n ? t.length < e.length && n && this.$toggleAll.find("[type=checkbox]").prop("checked", !1) : this.$toggleAll.find("[type=checkbox]").prop("checked", !0)
                }
            }, {
                key: "_toggleSelectedValue",
                value: function(e) {
                    var t = this.valuesSelected.indexOf(e),
                        n = -1 !== t;
                    return n ? this.valuesSelected.splice(t, 1) : this.valuesSelected.push(e), this.$materialOptionsList.find("li:not(.optgroup):not(.select-toggle-all)").eq(e).toggleClass("active"), this.$nativeSelect.find("option").eq(e).prop("selected", !n), this._setValueToMaterialSelect(), !n
                }
            }, {
                key: "_selectSingleOption",
                value: function(e) {
                    this.$materialOptionsList.find("li.selected").removeClass("selected"), this._selectOption(e)
                }
            }, {
                key: "_selectOption",
                value: function(t) {
                    e(t).addClass("selected")
                }
            }, {
                key: "_setValueToMaterialSelect",
                value: function() {
                    var e = this,
                        t = "",
                        n = this.optionsSelectedLabel,
                        i = this.valuesSelected.length;
                    this.options.language.active && this.$toggleAll && (this.options.language.pl ? n = this.options.language.pl.optionsSelected ? this.options.language.pl.optionsSelected : this.defaults.language.pl.optionsSelected : this.options.language.fr ? n = this.options.language.fr.optionsSelected ? this.options.language.fr.optionsSelected : this.defaults.language.fr.optionsSelected : this.options.language.ge ? n = this.options.language.ge.optionsSelected ? this.options.language.ge.optionsSelected : this.defaults.language.ge.optionsSelected : this.options.language.ar ? n = this.options.language.ar.optionsSelected ? this.options.language.ar.optionsSelected : this.defaults.language.ar.optionsSelected : this.options.language.in && (n = this.options.language.in.optionsSelected ? this.options.language.in.optionsSelected : this.defaults.language.in.optionsSelected)), this.valuesSelected.map(function(n) {
                        return t += ", ".concat(e.$nativeSelect.find("option").eq(n).text().replace(/  +/g, " ").trim())
                    }), 0 === (t = i >= 5 ? "".concat(i, " ").concat(n) : t.substring(2)).length && 0 === this.mainLabel.length && (t = this.$nativeSelect.find("option:disabled").eq(0).text()), t.length > 0 && !this.options.BSinputText ? this.mainLabel.addClass("active ") : this.mainLabel.removeClass("active"), this.options.BSinputText && this.mainLabel.css("top", "-7px"), this.$nativeSelect.siblings("".concat(this.options.BSinputText ? "input.multi-bs-select" : "input.select-dropdown")).val(t)
                }
            }, {
                key: "_randomUUID",
                value: function() {
                    var e = (new Date).getTime();
                    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
                        var n = (e + 16 * Math.random()) % 16 | 0;
                        return e = Math.floor(e / 16), ("x" === t ? n : 3 & n | 8).toString(16)
                    })
                }
            }], [{
                key: "clearMutationObservers",
                value: function() {
                    t.mutationObservers.forEach(function(e) {
                        e.disconnect(), e.customStatus = "stopped"
                    })
                }
            }]), t
        }();
        e.fn.materialSelect = function(t) {
            e(this).not(".browser-default").not(".custom-select").each(function() {
                new n(e(this), t).init()
            })
        }, e.fn.material_select = e.fn.materialSelect, t = e.fn.val, e.fn.val = function(e) {
            if (!arguments.length) return t.call(this);
            if (!0 !== this.data("stop-refresh") && this.hasClass("mdb-select") && this.hasClass("initialized")) {
                n.clearMutationObservers(), this.materialSelect({
                    destroy: !0
                });
                var i = t.call(this, e);
                return this.materialSelect(), i
            }
            return t.call(this, e)
        }
    }(jQuery), $("select").siblings("input.select-dropdown", "input.multi-bs-select").on("mousedown", function(e) {
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (e.clientX >= e.target.clientWidth || e.clientY >= e.target.clientHeight) && e.preventDefault()
    }),
    function(e) {
        var t = 0,
            n = function() {
                function n(i, o) {
                    _classCallCheck(this, n), this.defaults = {
                        topSpacing: t,
                        zIndex: !1,
                        stopper: "#footer",
                        stickyClass: !1,
                        startScrolling: "top",
                        minWidth: !1
                    }, this.$element = i, this.options = this.assignOptions(o), this.$window = e(window), this.stopper = this.options.stopper, this.elementWidth = this.$element.outerWidth(), this.elementHeight = this.$element.outerHeight(!0), this.$placeholder = e('<div class="sticky-placeholder"></div>'), this.scrollTop = 0, this.setPushPoint(), this.setStopperPosition(), this.bindEvents()
                }
                return _createClass(n, [{
                    key: "assignOptions",
                    value: function(t) {
                        return e.extend({}, this.defaults, t)
                    }
                }, {
                    key: "bindEvents",
                    value: function() {
                        this.$window.on("resize", this.handleResize.bind(this)), this.$window.on("scroll", this.init.bind(this))
                    }
                }, {
                    key: "hasZIndex",
                    value: function() {
                        return "number" == typeof this.options.zIndex
                    }
                }, {
                    key: "hasStopper",
                    value: function() {
                        return e(this.options.stopper).length || "number" == typeof this.options.stopper
                    }
                }, {
                    key: "isScreenHeightEnough",
                    value: function() {
                        return this.$element.outerHeight() + this.options.topSpacing < this.$window.height()
                    }
                }, {
                    key: "setStopperPosition",
                    value: function() {
                        "string" == typeof this.options.stopper ? this.stopPoint = e(this.stopper).offset().top - this.options.topSpacing : "number" == typeof this.options.stopper && (this.stopPoint = this.options.stopper)
                    }
                }, {
                    key: "setPushPoint",
                    value: function() {
                        "bottom" !== this.options.startScrolling || this.isScreenHeightEnough() ? this.$pushPoint = this.$element.offset().top - this.options.topSpacing : this.$pushPoint = this.$element.offset().top + this.$element.outerHeight(!0) - this.$window.height()
                    }
                }, {
                    key: "handleResize",
                    value: function() {
                        this.elementWidth = this.$element.outerWidth(), this.elementHeight = this.$element.outerHeight(!0), this.setPushPoint(), this.setStopperPosition(), this.init()
                    }
                }, {
                    key: "init",
                    value: function() {
                        if (this.options.minWidth && this.options.minWidth > this.$window.innerWidth()) return !1;
                        "bottom" !== this.options.startScrolling || this.isScreenHeightEnough() ? this.scrollTop = this.$window.scrollTop() : this.scrollTop = this.$window.scrollTop() + this.$window.height(), this.$pushPoint < this.scrollTop ? (this.appendPlaceholder(), this.stickyStart()) : this.stickyEnd(), this.$window.scrollTop() > this.$pushPoint ? this.stop() : this.stickyEnd()
                    }
                }, {
                    key: "appendPlaceholder",
                    value: function() {
                        this.$element.after(this.$placeholder), this.$placeholder.css({
                            width: this.elementWidth,
                            height: this.elementHeight
                        })
                    }
                }, {
                    key: "stickyStart",
                    value: function() {
                        this.options.stickyClass && this.$element.addClass(this.options.stickyClass), this.$element.get(0).style.overflow = "scroll";
                        var e = this.$element.get(0).scrollHeight;
                        this.$element.get(0).style.overflow = "", this.$element.css({
                            position: "fixed",
                            width: this.elementWidth,
                            height: e
                        }), "bottom" !== this.options.startScrolling || this.isScreenHeightEnough() ? this.$element.css({
                            top: this.options.topSpacing
                        }) : this.$element.css({
                            bottom: 0,
                            top: ""
                        }), this.hasZIndex() && this.$element.css({
                            zIndex: this.options.zIndex
                        })
                    }
                }, {
                    key: "stickyEnd",
                    value: function() {
                        this.options.stickyClass && this.$element.removeClass(this.options.stickyClass), this.$placeholder.remove(), this.$element.css({
                            position: "static",
                            top: t
                        })
                    }
                }, {
                    key: "stop",
                    value: function() {
                        this.stopPoint < e(this.$element).offset().top + this.$element.outerHeight(!0) && this.$element.css({
                            position: "absolute",
                            bottom: 0,
                            top: ""
                        })
                    }
                }]), n
            }();
        e.fn.sticky = function(t) {
            return this.each(function() {
                var i = e(this);
                e(window).on("load", function() {
                    new n(i, t).init()
                })
            })
        }
    }(jQuery),
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.PerfectScrollbar = t()
    }(this, function() {
        "use strict";

        function e(e) {
            return getComputedStyle(e)
        }

        function t(e, t) {
            for (var n in t) {
                var i = t[n];
                "number" == typeof i && (i += "px"), e.style[n] = i
            }
            return e
        }

        function n(e) {
            var t = document.createElement("div");
            return t.className = e, t
        }

        function i(e, t) {
            if (!g) throw new Error("No element matching method supported");
            return g.call(e, t)
        }

        function o(e) {
            e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e)
        }

        function r(e, t) {
            return Array.prototype.filter.call(e.children, function(e) {
                return i(e, t)
            })
        }

        function s(e, t) {
            var n = e.element.classList,
                i = m.state.scrolling(t);
            n.contains(i) ? clearTimeout(v[t]) : n.add(i)
        }

        function a(e, t) {
            v[t] = setTimeout(function() {
                return e.isAlive && e.element.classList.remove(m.state.scrolling(t))
            }, e.settings.scrollingThreshold)
        }

        function l(e, t) {
            s(e, t), a(e, t)
        }

        function c(e) {
            if ("function" == typeof window.CustomEvent) return new CustomEvent(e);
            var t = document.createEvent("CustomEvent");
            return t.initCustomEvent(e, !1, !1, void 0), t
        }

        function u(e) {
            return parseInt(e, 10) || 0
        }

        function d(e) {
            return i(e, "input,[contenteditable]") || i(e, "select,[contenteditable]") || i(e, "textarea,[contenteditable]") || i(e, "button,[contenteditable]")
        }

        function h(e, t) {
            return e.settings.minScrollbarLength && (t = Math.max(t, e.settings.minScrollbarLength)), e.settings.maxScrollbarLength && (t = Math.min(t, e.settings.maxScrollbarLength)), t
        }

        function f(e, n) {
            var i = {
                    width: n.railXWidth
                },
                o = Math.floor(e.scrollTop);
            n.isRtl ? i.left = n.negativeScrollAdjustment + e.scrollLeft + n.containerWidth - n.contentWidth : i.left = e.scrollLeft, n.isScrollbarXUsingBottom ? i.bottom = n.scrollbarXBottom - o : i.top = n.scrollbarXTop + o, t(n.scrollbarXRail, i);
            var r = {
                top: o,
                height: n.railYHeight
            };
            n.isScrollbarYUsingRight ? n.isRtl ? r.right = n.contentWidth - (n.negativeScrollAdjustment + e.scrollLeft) - n.scrollbarYRight - n.scrollbarYOuterWidth : r.right = n.scrollbarYRight - e.scrollLeft : n.isRtl ? r.left = n.negativeScrollAdjustment + e.scrollLeft + 2 * n.containerWidth - n.contentWidth - n.scrollbarYLeft - n.scrollbarYOuterWidth : r.left = n.scrollbarYLeft + e.scrollLeft, t(n.scrollbarYRail, r), t(n.scrollbarX, {
                left: n.scrollbarXLeft,
                width: n.scrollbarXWidth - n.railBorderXWidth
            }), t(n.scrollbarY, {
                top: n.scrollbarYTop,
                height: n.scrollbarYHeight - n.railBorderYWidth
            })
        }

        function p(e, t) {
            function n(t) {
                g[h] = v + b * (t[l] - y), s(e, f), S(e), t.stopPropagation(), t.preventDefault()
            }

            function i() {
                a(e, f), e[p].classList.remove(m.state.clicking), e.event.unbind(e.ownerDocument, "mousemove", n)
            }
            var o = t[0],
                r = t[1],
                l = t[2],
                c = t[3],
                u = t[4],
                d = t[5],
                h = t[6],
                f = t[7],
                p = t[8],
                g = e.element,
                v = null,
                y = null,
                b = null;
            e.event.bind(e[u], "mousedown", function(t) {
                v = g[h], y = t[l], b = (e[r] - e[o]) / (e[c] - e[d]), e.event.bind(e.ownerDocument, "mousemove", n), e.event.once(e.ownerDocument, "mouseup", i), e[p].classList.add(m.state.clicking), t.stopPropagation(), t.preventDefault()
            })
        }
        var g = "undefined" != typeof Element && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector),
            m = {
                main: "ps",
                element: {
                    thumb: function(e) {
                        return "ps__thumb-" + e
                    },
                    rail: function(e) {
                        return "ps__rail-" + e
                    },
                    consuming: "ps__child--consume"
                },
                state: {
                    focus: "ps--focus",
                    clicking: "ps--clicking",
                    active: function(e) {
                        return "ps--active-" + e
                    },
                    scrolling: function(e) {
                        return "ps--scrolling-" + e
                    }
                }
            },
            v = {
                x: null,
                y: null
            },
            y = function(e) {
                this.element = e, this.handlers = {}
            },
            b = {
                isEmpty: {
                    configurable: !0
                }
            };
        y.prototype.bind = function(e, t) {
            void 0 === this.handlers[e] && (this.handlers[e] = []), this.handlers[e].push(t), this.element.addEventListener(e, t, !1)
        }, y.prototype.unbind = function(e, t) {
            var n = this;
            this.handlers[e] = this.handlers[e].filter(function(i) {
                return !(!t || i === t) || (n.element.removeEventListener(e, i, !1), !1)
            })
        }, y.prototype.unbindAll = function() {
            for (var e in this.handlers) this.unbind(e)
        }, b.isEmpty.get = function() {
            var e = this;
            return Object.keys(this.handlers).every(function(t) {
                return 0 === e.handlers[t].length
            })
        }, Object.defineProperties(y.prototype, b);
        var w = function() {
            this.eventElements = []
        };
        w.prototype.eventElement = function(e) {
            var t = this.eventElements.filter(function(t) {
                return t.element === e
            })[0];
            return t || (t = new y(e), this.eventElements.push(t)), t
        }, w.prototype.bind = function(e, t, n) {
            this.eventElement(e).bind(t, n)
        }, w.prototype.unbind = function(e, t, n) {
            var i = this.eventElement(e);
            i.unbind(t, n), i.isEmpty && this.eventElements.splice(this.eventElements.indexOf(i), 1)
        }, w.prototype.unbindAll = function() {
            this.eventElements.forEach(function(e) {
                return e.unbindAll()
            }), this.eventElements = []
        }, w.prototype.once = function(e, t, n) {
            var i = this.eventElement(e),
                o = function(e) {
                    i.unbind(t, o), n(e)
                };
            i.bind(t, o)
        };
        var _ = function(e, t, n, i, o) {
                var r;
                if (void 0 === i && (i = !0), void 0 === o && (o = !1), "top" === t) r = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"];
                else {
                    if ("left" !== t) throw new Error("A proper axis should be provided");
                    r = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"]
                }! function(e, t, n, i, o) {
                    var r = n[0],
                        s = n[1],
                        a = n[2],
                        u = n[3],
                        d = n[4],
                        h = n[5];
                    void 0 === i && (i = !0), void 0 === o && (o = !1);
                    var f = e.element;
                    e.reach[u] = null, f[a] < 1 && (e.reach[u] = "start"), f[a] > e[r] - e[s] - 1 && (e.reach[u] = "end"), t && (f.dispatchEvent(c("ps-scroll-" + u)), t < 0 ? f.dispatchEvent(c("ps-scroll-" + d)) : t > 0 && f.dispatchEvent(c("ps-scroll-" + h)), i && l(e, u)), e.reach[u] && (t || o) && f.dispatchEvent(c("ps-" + u + "-reach-" + e.reach[u]))
                }(e, n, r, i, o)
            },
            C = {
                isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
                supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
                supportsIePointer: "undefined" != typeof navigator && navigator.msMaxTouchPoints,
                isChrome: "undefined" != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent)
            },
            S = function(e) {
                var t = e.element,
                    n = Math.floor(t.scrollTop);
                e.containerWidth = t.clientWidth, e.containerHeight = t.clientHeight, e.contentWidth = t.scrollWidth, e.contentHeight = t.scrollHeight, t.contains(e.scrollbarXRail) || (r(t, m.element.rail("x")).forEach(function(e) {
                    return o(e)
                }), t.appendChild(e.scrollbarXRail)), t.contains(e.scrollbarYRail) || (r(t, m.element.rail("y")).forEach(function(e) {
                    return o(e)
                }), t.appendChild(e.scrollbarYRail)), !e.settings.suppressScrollX && e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth ? (e.scrollbarXActive = !0, e.railXWidth = e.containerWidth - e.railXMarginWidth, e.railXRatio = e.containerWidth / e.railXWidth, e.scrollbarXWidth = h(e, u(e.railXWidth * e.containerWidth / e.contentWidth)), e.scrollbarXLeft = u((e.negativeScrollAdjustment + t.scrollLeft) * (e.railXWidth - e.scrollbarXWidth) / (e.contentWidth - e.containerWidth))) : e.scrollbarXActive = !1, !e.settings.suppressScrollY && e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight ? (e.scrollbarYActive = !0, e.railYHeight = e.containerHeight - e.railYMarginHeight, e.railYRatio = e.containerHeight / e.railYHeight, e.scrollbarYHeight = h(e, u(e.railYHeight * e.containerHeight / e.contentHeight)), e.scrollbarYTop = u(n * (e.railYHeight - e.scrollbarYHeight) / (e.contentHeight - e.containerHeight))) : e.scrollbarYActive = !1, e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth && (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth), e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight && (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight), f(t, e), e.scrollbarXActive ? t.classList.add(m.state.active("x")) : (t.classList.remove(m.state.active("x")), e.scrollbarXWidth = 0, e.scrollbarXLeft = 0, t.scrollLeft = 0), e.scrollbarYActive ? t.classList.add(m.state.active("y")) : (t.classList.remove(m.state.active("y")), e.scrollbarYHeight = 0, e.scrollbarYTop = 0, t.scrollTop = 0)
            },
            x = {
                "click-rail": function(e) {
                    e.event.bind(e.scrollbarY, "mousedown", function(e) {
                        return e.stopPropagation()
                    }), e.event.bind(e.scrollbarYRail, "mousedown", function(t) {
                        var n = t.pageY - window.pageYOffset - e.scrollbarYRail.getBoundingClientRect().top > e.scrollbarYTop ? 1 : -1;
                        e.element.scrollTop += n * e.containerHeight, S(e), t.stopPropagation()
                    }), e.event.bind(e.scrollbarX, "mousedown", function(e) {
                        return e.stopPropagation()
                    }), e.event.bind(e.scrollbarXRail, "mousedown", function(t) {
                        var n = t.pageX - window.pageXOffset - e.scrollbarXRail.getBoundingClientRect().left > e.scrollbarXLeft ? 1 : -1;
                        e.element.scrollLeft += n * e.containerWidth, S(e), t.stopPropagation()
                    })
                },
                "drag-thumb": function(e) {
                    p(e, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x", "scrollbarXRail"]), p(e, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y", "scrollbarYRail"])
                },
                keyboard: function(e) {
                    var t = e.element,
                        n = function() {
                            return i(t, ":hover")
                        },
                        o = function() {
                            return i(e.scrollbarX, ":focus") || i(e.scrollbarY, ":focus")
                        };
                    e.event.bind(e.ownerDocument, "keydown", function(i) {
                        if (!(i.isDefaultPrevented && i.isDefaultPrevented() || i.defaultPrevented) && (n() || o())) {
                            var r = document.activeElement ? document.activeElement : e.ownerDocument.activeElement;
                            if (r) {
                                if ("IFRAME" === r.tagName) r = r.contentDocument.activeElement;
                                else
                                    for (; r.shadowRoot;) r = r.shadowRoot.activeElement;
                                if (d(r)) return
                            }
                            var s = 0,
                                a = 0;
                            switch (i.which) {
                                case 37:
                                    s = i.metaKey ? -e.contentWidth : i.altKey ? -e.containerWidth : -30;
                                    break;
                                case 38:
                                    a = i.metaKey ? e.contentHeight : i.altKey ? e.containerHeight : 30;
                                    break;
                                case 39:
                                    s = i.metaKey ? e.contentWidth : i.altKey ? e.containerWidth : 30;
                                    break;
                                case 40:
                                    a = i.metaKey ? -e.contentHeight : i.altKey ? -e.containerHeight : -30;
                                    break;
                                case 32:
                                    a = i.shiftKey ? e.containerHeight : -e.containerHeight;
                                    break;
                                case 33:
                                    a = e.containerHeight;
                                    break;
                                case 34:
                                    a = -e.containerHeight;
                                    break;
                                case 36:
                                    a = e.contentHeight;
                                    break;
                                case 35:
                                    a = -e.contentHeight;
                                    break;
                                default:
                                    return
                            }
                            e.settings.suppressScrollX && 0 !== s || e.settings.suppressScrollY && 0 !== a || (t.scrollTop -= a, t.scrollLeft += s, S(e), function(n, i) {
                                var o = Math.floor(t.scrollTop);
                                if (0 === n) {
                                    if (!e.scrollbarYActive) return !1;
                                    if (0 === o && i > 0 || o >= e.contentHeight - e.containerHeight && i < 0) return !e.settings.wheelPropagation
                                }
                                var r = t.scrollLeft;
                                if (0 === i) {
                                    if (!e.scrollbarXActive) return !1;
                                    if (0 === r && n < 0 || r >= e.contentWidth - e.containerWidth && n > 0) return !e.settings.wheelPropagation
                                }
                                return !0
                            }(s, a) && i.preventDefault())
                        }
                    })
                },
                wheel: function(t) {
                    function n(t, n, i) {
                        if (!C.isWebKit && o.querySelector("select:focus")) return !0;
                        if (!o.contains(t)) return !1;
                        for (var r = t; r && r !== o;) {
                            if (r.classList.contains(m.element.consuming)) return !0;
                            var s = e(r);
                            if ([s.overflow, s.overflowX, s.overflowY].join("").match(/(scroll|auto)/)) {
                                var a = r.scrollHeight - r.clientHeight;
                                if (a > 0 && !(0 === r.scrollTop && i > 0 || r.scrollTop === a && i < 0)) return !0;
                                var l = r.scrollWidth - r.clientWidth;
                                if (l > 0 && !(0 === r.scrollLeft && n < 0 || r.scrollLeft === l && n > 0)) return !0
                            }
                            r = r.parentNode
                        }
                        return !1
                    }

                    function i(e) {
                        var i = function(e) {
                                var t = e.deltaX,
                                    n = -1 * e.deltaY;
                                return void 0 !== t && void 0 !== n || (t = -1 * e.wheelDeltaX / 6, n = e.wheelDeltaY / 6), e.deltaMode && 1 === e.deltaMode && (t *= 10, n *= 10), t != t && n != n && (t = 0, n = e.wheelDelta), e.shiftKey ? [-n, -t] : [t, n]
                            }(e),
                            r = i[0],
                            s = i[1];
                        if (!n(e.target, r, s)) {
                            var a = !1;
                            t.settings.useBothWheelAxes ? t.scrollbarYActive && !t.scrollbarXActive ? (s ? o.scrollTop -= s * t.settings.wheelSpeed : o.scrollTop += r * t.settings.wheelSpeed, a = !0) : t.scrollbarXActive && !t.scrollbarYActive && (r ? o.scrollLeft += r * t.settings.wheelSpeed : o.scrollLeft -= s * t.settings.wheelSpeed, a = !0) : (o.scrollTop -= s * t.settings.wheelSpeed, o.scrollLeft += r * t.settings.wheelSpeed), S(t), (a = a || function(e, n) {
                                var i = Math.floor(o.scrollTop),
                                    r = 0 === o.scrollTop,
                                    s = i + o.offsetHeight === o.scrollHeight,
                                    a = 0 === o.scrollLeft,
                                    l = o.scrollLeft + o.offsetWidth === o.scrollWidth;
                                return !(Math.abs(n) > Math.abs(e) ? r || s : a || l) || !t.settings.wheelPropagation
                            }(r, s)) && !e.ctrlKey && (e.stopPropagation(), e.preventDefault())
                        }
                    }
                    var o = t.element;
                    void 0 !== window.onwheel ? t.event.bind(o, "wheel", i) : void 0 !== window.onmousewheel && t.event.bind(o, "mousewheel", i)
                },
                touch: function(t) {
                    function n(e, n) {
                        var i = Math.floor(u.scrollTop),
                            o = u.scrollLeft,
                            r = Math.abs(e),
                            s = Math.abs(n);
                        if (s > r) {
                            if (n < 0 && i === t.contentHeight - t.containerHeight || n > 0 && 0 === i) return 0 === window.scrollY && n > 0 && C.isChrome
                        } else if (r > s && (e < 0 && o === t.contentWidth - t.containerWidth || e > 0 && 0 === o)) return !0;
                        return !0
                    }

                    function i(e, n) {
                        u.scrollTop -= n, u.scrollLeft -= e, S(t)
                    }

                    function o(e) {
                        return e.targetTouches ? e.targetTouches[0] : e
                    }

                    function r(e) {
                        return !(e.pointerType && "pen" === e.pointerType && 0 === e.buttons || (!e.targetTouches || 1 !== e.targetTouches.length) && (!e.pointerType || "mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE))
                    }

                    function s(e) {
                        if (r(e)) {
                            var t = o(e);
                            d.pageX = t.pageX, d.pageY = t.pageY, h = (new Date).getTime(), null !== p && clearInterval(p)
                        }
                    }

                    function a(t, n, i) {
                        if (!u.contains(t)) return !1;
                        for (var o = t; o && o !== u;) {
                            if (o.classList.contains(m.element.consuming)) return !0;
                            var r = e(o);
                            if ([r.overflow, r.overflowX, r.overflowY].join("").match(/(scroll|auto)/)) {
                                var s = o.scrollHeight - o.clientHeight;
                                if (s > 0 && !(0 === o.scrollTop && i > 0 || o.scrollTop === s && i < 0)) return !0;
                                var a = o.scrollLeft - o.clientWidth;
                                if (a > 0 && !(0 === o.scrollLeft && n < 0 || o.scrollLeft === a && n > 0)) return !0
                            }
                            o = o.parentNode
                        }
                        return !1
                    }

                    function l(e) {
                        if (r(e)) {
                            var t = o(e),
                                s = {
                                    pageX: t.pageX,
                                    pageY: t.pageY
                                },
                                l = s.pageX - d.pageX,
                                c = s.pageY - d.pageY;
                            if (a(e.target, l, c)) return;
                            i(l, c), d = s;
                            var u = (new Date).getTime(),
                                p = u - h;
                            p > 0 && (f.x = l / p, f.y = c / p, h = u), n(l, c) && e.preventDefault()
                        }
                    }

                    function c() {
                        t.settings.swipeEasing && (clearInterval(p), p = setInterval(function() {
                            t.isInitialized ? clearInterval(p) : f.x || f.y ? Math.abs(f.x) < .01 && Math.abs(f.y) < .01 ? clearInterval(p) : (i(30 * f.x, 30 * f.y), f.x *= .8, f.y *= .8) : clearInterval(p)
                        }, 10))
                    }
                    if (C.supportsTouch || C.supportsIePointer) {
                        var u = t.element,
                            d = {},
                            h = 0,
                            f = {},
                            p = null;
                        C.supportsTouch ? (t.event.bind(u, "touchstart", s), t.event.bind(u, "touchmove", l), t.event.bind(u, "touchend", c)) : C.supportsIePointer && (window.PointerEvent ? (t.event.bind(u, "pointerdown", s), t.event.bind(u, "pointermove", l), t.event.bind(u, "pointerup", c)) : window.MSPointerEvent && (t.event.bind(u, "MSPointerDown", s), t.event.bind(u, "MSPointerMove", l), t.event.bind(u, "MSPointerUp", c)))
                    }
                }
            },
            T = function(i, o) {
                var r = this;
                if (void 0 === o && (o = {}), "string" == typeof i && (i = document.querySelector(i)), !i || !i.nodeName) throw new Error("no element is specified to initialize PerfectScrollbar");
                for (var s in this.element = i, i.classList.add(m.main), this.settings = {
                        handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
                        maxScrollbarLength: null,
                        minScrollbarLength: null,
                        scrollingThreshold: 1e3,
                        scrollXMarginOffset: 0,
                        scrollYMarginOffset: 0,
                        suppressScrollX: !1,
                        suppressScrollY: !1,
                        swipeEasing: !0,
                        useBothWheelAxes: !1,
                        wheelPropagation: !0,
                        wheelSpeed: 1
                    }, o) r.settings[s] = o[s];
                this.containerWidth = null, this.containerHeight = null, this.contentWidth = null, this.contentHeight = null;
                var a = function() {
                        return i.classList.add(m.state.focus)
                    },
                    l = function() {
                        return i.classList.remove(m.state.focus)
                    };
                this.isRtl = "rtl" === e(i).direction, this.isNegativeScroll = function() {
                    var e, t = i.scrollLeft;
                    return i.scrollLeft = -1, e = i.scrollLeft < 0, i.scrollLeft = t, e
                }(), this.negativeScrollAdjustment = this.isNegativeScroll ? i.scrollWidth - i.clientWidth : 0, this.event = new w, this.ownerDocument = i.ownerDocument || document, this.scrollbarXRail = n(m.element.rail("x")), i.appendChild(this.scrollbarXRail), this.scrollbarX = n(m.element.thumb("x")), this.scrollbarXRail.appendChild(this.scrollbarX), this.scrollbarX.setAttribute("tabindex", 0), this.event.bind(this.scrollbarX, "focus", a), this.event.bind(this.scrollbarX, "blur", l), this.scrollbarXActive = null, this.scrollbarXWidth = null, this.scrollbarXLeft = null;
                var c = e(this.scrollbarXRail);
                this.scrollbarXBottom = parseInt(c.bottom, 10), isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = !1, this.scrollbarXTop = u(c.top)) : this.isScrollbarXUsingBottom = !0, this.railBorderXWidth = u(c.borderLeftWidth) + u(c.borderRightWidth), t(this.scrollbarXRail, {
                    display: "block"
                }), this.railXMarginWidth = u(c.marginLeft) + u(c.marginRight), t(this.scrollbarXRail, {
                    display: ""
                }), this.railXWidth = null, this.railXRatio = null, this.scrollbarYRail = n(m.element.rail("y")), i.appendChild(this.scrollbarYRail), this.scrollbarY = n(m.element.thumb("y")), this.scrollbarYRail.appendChild(this.scrollbarY), this.scrollbarY.setAttribute("tabindex", 0), this.event.bind(this.scrollbarY, "focus", a), this.event.bind(this.scrollbarY, "blur", l), this.scrollbarYActive = null, this.scrollbarYHeight = null, this.scrollbarYTop = null;
                var d = e(this.scrollbarYRail);
                this.scrollbarYRight = parseInt(d.right, 10), isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = !1, this.scrollbarYLeft = u(d.left)) : this.isScrollbarYUsingRight = !0, this.scrollbarYOuterWidth = this.isRtl ? function(t) {
                    var n = e(t);
                    return u(n.width) + u(n.paddingLeft) + u(n.paddingRight) + u(n.borderLeftWidth) + u(n.borderRightWidth)
                }(this.scrollbarY) : null, this.railBorderYWidth = u(d.borderTopWidth) + u(d.borderBottomWidth), t(this.scrollbarYRail, {
                    display: "block"
                }), this.railYMarginHeight = u(d.marginTop) + u(d.marginBottom), t(this.scrollbarYRail, {
                    display: ""
                }), this.railYHeight = null, this.railYRatio = null, this.reach = {
                    x: i.scrollLeft <= 0 ? "start" : i.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
                    y: i.scrollTop <= 0 ? "start" : i.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null
                }, this.isAlive = !0, this.settings.handlers.forEach(function(e) {
                    return x[e](r)
                }), this.lastScrollTop = Math.floor(i.scrollTop), this.lastScrollLeft = i.scrollLeft, this.event.bind(this.element, "scroll", function(e) {
                    return r.onScroll(e)
                }), S(this)
            };
        return T.prototype.update = function() {
            this.isAlive && (this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0, t(this.scrollbarXRail, {
                display: "block"
            }), t(this.scrollbarYRail, {
                display: "block"
            }), this.railXMarginWidth = u(e(this.scrollbarXRail).marginLeft) + u(e(this.scrollbarXRail).marginRight), this.railYMarginHeight = u(e(this.scrollbarYRail).marginTop) + u(e(this.scrollbarYRail).marginBottom), t(this.scrollbarXRail, {
                display: "none"
            }), t(this.scrollbarYRail, {
                display: "none"
            }), S(this), _(this, "top", 0, !1, !0), _(this, "left", 0, !1, !0), t(this.scrollbarXRail, {
                display: ""
            }), t(this.scrollbarYRail, {
                display: ""
            }))
        }, T.prototype.onScroll = function(e) {
            this.isAlive && (S(this), _(this, "top", this.element.scrollTop - this.lastScrollTop), _(this, "left", this.element.scrollLeft - this.lastScrollLeft), this.lastScrollTop = Math.floor(this.element.scrollTop), this.lastScrollLeft = this.element.scrollLeft)
        }, T.prototype.destroy = function() {
            this.isAlive && (this.event.unbindAll(), o(this.scrollbarX), o(this.scrollbarY), o(this.scrollbarXRail), o(this.scrollbarYRail), this.removePsClasses(), this.element = null, this.scrollbarX = null, this.scrollbarY = null, this.scrollbarXRail = null, this.scrollbarYRail = null, this.isAlive = !1)
        }, T.prototype.removePsClasses = function() {
            this.element.className = this.element.className.split(" ").filter(function(e) {
                return !e.match(/^ps([-_].+|)$/)
            }).join(" ")
        }, T
    }),
    function(e) {
        var t = {},
            n = "",
            i = "",
            o = "#ced4da",
            r = "1px solid #4285f4",
            s = "1px solid #ced4da",
            a = "0 1px 0 0 #4285f4",
            l = "",
            c = -1,
            u = -45,
            d = function() {
                function d(c, u) {
                    _classCallCheck(this, d), this.defaults = {
                        data: t,
                        dataColor: n,
                        closeColor: i,
                        closeBlurColor: o,
                        inputFocus: r,
                        inputBlur: s,
                        inputFocusShadow: a,
                        inputBlurShadow: l
                    }, this.$input = c, this.options = this.assignOptions(u), this.$clearButton = e(".mdb-autocomplete-clear"), this.$autocompleteWrap = e('<ul class="mdb-autocomplete-wrap"></ul>'), this.init()
                }
                return _createClass(d, [{
                    key: "init",
                    value: function() {
                        this.setData(), this.inputFocus(), this.inputBlur(), this.inputKeyupData(), this.inputLiClick(), this.clearAutocomplete()
                    }
                }, {
                    key: "assignOptions",
                    value: function(t) {
                        return e.extend({}, this.defaults, t)
                    }
                }, {
                    key: "setData",
                    value: function() {
                        Object.keys(this.options.data).length && this.$autocompleteWrap.insertAfter(this.$input)
                    }
                }, {
                    key: "inputFocus",
                    value: function() {
                        var e = this;
                        this.$input.on("focus", function() {
                            e.$input.css("border-bottom", e.options.inputFocus), e.$input.css("box-shadow", e.options.inputFocusShadow)
                        })
                    }
                }, {
                    key: "inputBlur",
                    value: function() {
                        var e = this;
                        this.$input.on("blur", function() {
                            e.$input.css("border-bottom", e.options.inputBlur), e.$input.css("box-shadow", e.options.inputBlurShadow)
                        })
                    }
                }, {
                    key: "inputKeyupData",
                    value: function() {
                        var t = this;
                        this.$input.on("keyup", function(n) {
                            if (13 === n.which) return t.options.data.includes(t.$input.val()) || t.options.data.push(t.$input.val()), t.$autocompleteWrap.find(".selected").trigger("click"), t.$autocompleteWrap.empty(), t.inputBlur(), u = -45, c = -1;
                            var i = t.$input.val();
                            if (t.$autocompleteWrap.empty(), i.length) {
                                for (var o in t.options.data)
                                    if (-1 !== t.options.data[o].toLowerCase().indexOf(i.toLowerCase())) {
                                        var r = e("<li>".concat(t.options.data[o], "</li>"));
                                        t.$autocompleteWrap.append(r)
                                    }
                                var s = t.$autocompleteWrap,
                                    a = t.$autocompleteWrap.find("li"),
                                    l = a.eq(c).outerHeight(),
                                    d = a.eq(c - 1).outerHeight();
                                if (40 === n.which) {
                                    if (c > a.length - 2) return c = -1, a.scrollTop(0), void(u = -45);
                                    c++, u += l, s.scrollTop(u), a.eq(c).addClass("selected")
                                } else 38 === n.which && (c < 1 ? (c = a.length, s.scrollTop(s.prop("scrollHeight")), u = s.prop("scrollHeight") - l) : c--, u -= d, s.scrollTop(u), a.eq(c).addClass("selected"));
                                0 === i.length ? t.$clearButton.css("visibility", "hidden") : t.$clearButton.css("visibility", "visible"), t.$autocompleteWrap.children().css("color", t.options.dataColor)
                            } else t.$clearButton.css("visibility", "hidden")
                        })
                    }
                }, {
                    key: "inputLiClick",
                    value: function() {
                        var t = this;
                        this.$autocompleteWrap.on("click", "li", function(n) {
                            n.preventDefault(), t.$input.val(e(n.target).text()), t.$autocompleteWrap.empty()
                        })
                    }
                }, {
                    key: "clearAutocomplete",
                    value: function() {
                        var t = this;
                        this.$clearButton.on("click", function(n) {
                            c = -1, u = -45, n.preventDefault();
                            var i = e(n.currentTarget);
                            i.parent().find(".mdb-autocomplete").val(""), i.css("visibility", "hidden"), t.$autocompleteWrap.empty(), i.parent().find("label").removeClass("active")
                        })
                    }
                }, {
                    key: "changeSVGcolors",
                    value: function() {
                        var t = this;
                        this.$input.hasClass("mdb-autocomplete") && (this.$input.on("click keyup", function(n) {
                            n.preventDefault(), e(n.target).parent().find(".mdb-autocomplete-clear").find("svg").css("fill", t.options.closeColor)
                        }), this.$input.on("blur", function(n) {
                            n.preventDefault(), e(n.target).parent().find(".mdb-autocomplete-clear").find("svg").css("fill", t.options.closeBlurColor)
                        }))
                    }
                }]), d
            }();
        e.fn.mdbAutocomplete = function(t) {
            return this.each(function() {
                new d(e(this), t)
            })
        }
    }(jQuery),
    function(e) {
        e("body").on("shown.bs.modal", ".modal", function() {
            e(".modal-backdrop").length || ($modal_dialog = e(this).children(".modal-dialog"), $modal_dialog.hasClass("modal-side") && (e(this).addClass("modal-scrolling"), e("body").addClass("scrollable")), $modal_dialog.hasClass("modal-frame") && (e(this).addClass("modal-content-clickable"), e("body").addClass("scrollable")))
        }), e("body").on("hidden.bs.modal", ".modal", function() {
            e("body").removeClass("scrollable")
        })
    }(jQuery),
    function(e) {
        e.fn.mdbTreeview = function() {
            var t = e(this);
            if (t.hasClass("treeview")) {
                var n = t.find(".rotate");
                e.each(n, function(t) {
                    e(n[t]).off("click"), e(n[t]).on("click", function() {
                        var t = e(this);
                        t.siblings(".nested").toggleClass("active"), t.toggleClass("down")
                    })
                })
            }
            if (t.hasClass("treeview-animated")) {
                var i = t.find(".treeview-animated-element"),
                    o = t.find(".closed");
                t.find(".nested").hide(), o.off("click"), o.on("click", function() {
                    var t = e(this),
                        n = t.siblings(".nested"),
                        i = t.children(".fa-angle-right");
                    return t.toggleClass("open"), i.toggleClass("down"), n.hasClass("active") ? n.removeClass("active").slideUp() : n.addClass("active").slideDown(), !1
                }), i.off("click"), i.on("click", function() {
                    var t = e(this);
                    t.hasClass("opened") ? t.removeClass("opened") : (i.removeClass("opened"), t.addClass("opened"))
                })
            }
            if (t.hasClass("treeview-colorful")) {
                var r = t.find(".treeview-colorful-element"),
                    s = t.find(".treeview-colorful-items-header");
                t.find(".nested").hide(), s.off("click"), s.on("click", function() {
                    var t = e(this),
                        n = t.siblings(".nested"),
                        i = t.children(".fa-plus-circle"),
                        o = t.children(".fa-minus-circle");
                    t.toggleClass("open"), i.removeClass("fa-plus-circle"), i.addClass("fa-minus-circle"), o.removeClass("fa-minus-circle"), o.addClass("fa-plus-circle"), n.hasClass("active") ? n.removeClass("active").slideUp() : n.addClass("active").slideDown()
                }), r.off("click"), r.on("click", function() {
                    var t = e(this);
                    t.hasClass("opened") ? r.removeClass("opened") : (r.removeClass("opened"), t.addClass("opened"))
                })
            }
        }
    }(jQuery),
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).bsCustomFileInput = t()
    }(this, function() {
        "use strict";
        var e = {
                CUSTOMFILE: '.custom-file input[type="file"]',
                CUSTOMFILELABEL: ".custom-file-label",
                FORM: "form",
                INPUT: "input"
            },
            t = function(t) {
                var n = "",
                    i = t.parentNode.querySelector(e.CUSTOMFILELABEL);
                return i && (n = i.innerHTML), n
            },
            n = function(e) {
                if (e.childNodes.length > 0)
                    for (var t = [].slice.call(e.childNodes), n = 0; n < t.length; n++) {
                        var i = t[n];
                        if (3 !== i.nodeType) return i
                    }
                return e
            },
            i = function(t) {
                var i = t.bsCustomFileInput.defaultText,
                    o = t.parentNode.querySelector(e.CUSTOMFILELABEL);
                o && (n(o).innerHTML = i)
            },
            o = !!window.File,
            r = function(e) {
                if (e.hasAttribute("multiple") && o) return [].slice.call(e.files).map(function(e) {
                    return e.name
                }).join(", ");
                if (-1 !== e.value.indexOf("fakepath")) {
                    var t = e.value.split("\\");
                    return t[t.length - 1]
                }
                return e.value
            };

        function s() {
            var t = this.parentNode.querySelector(e.CUSTOMFILELABEL);
            if (t) {
                var o = n(t),
                    s = r(this);
                s.length ? o.innerHTML = s : i(this)
            }
        }

        function a() {
            for (var t = [].slice.call(this.querySelectorAll(e.INPUT)).filter(function(e) {
                    return !!e.bsCustomFileInput
                }), n = 0, o = t.length; n < o; n++) i(t[n])
        }
        var l = "reset",
            c = "change";
        return {
            init: function(n, i) {
                void 0 === n && (n = e.CUSTOMFILE), void 0 === i && (i = e.FORM);
                for (var o = [].slice.call(document.querySelectorAll(n)), r = [].slice.call(document.querySelectorAll(i)), u = 0, d = o.length; u < d; u++) {
                    var h = o[u];
                    Object.defineProperty(h, "bsCustomFileInput", {
                        value: {
                            defaultText: t(h)
                        },
                        writable: !0
                    }), s.call(h), h.addEventListener(c, s)
                }
                for (var f = 0, p = r.length; f < p; f++) r[f].addEventListener(l, a), Object.defineProperty(r[f], "bsCustomFileInput", {
                    value: !0,
                    writable: !0
                })
            },
            destroy: function() {
                for (var t = [].slice.call(document.querySelectorAll(e.FORM)).filter(function(e) {
                        return !!e.bsCustomFileInput
                    }), n = [].slice.call(document.querySelectorAll(e.INPUT)).filter(function(e) {
                        return !!e.bsCustomFileInput
                    }), o = 0, r = n.length; o < r; o++) {
                    var u = n[o];
                    i(u), u.bsCustomFileInput = void 0, u.removeEventListener(c, s)
                }
                for (var d = 0, h = t.length; d < h; d++) t[d].removeEventListener(l, a), t[d].bsCustomFileInput = void 0
            }
        }
    }), document.addEventListener("DOMContentLoaded", function() {
        bsCustomFileInput.init()
    });
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
    Prism = function() {
        var e = /\blang(?:uage)?-([\w-]+)\b/i,
            t = 0,
            n = _self.Prism = {
                manual: _self.Prism && _self.Prism.manual,
                disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
                util: {
                    encode: function(e) {
                        return e instanceof i ? new i(e.type, n.util.encode(e.content), e.alias) : "Array" === n.util.type(e) ? e.map(n.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                    },
                    type: function(e) {
                        return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]
                    },
                    objId: function(e) {
                        return e.__id || Object.defineProperty(e, "__id", {
                            value: ++t
                        }), e.__id
                    },
                    clone: function(e, t) {
                        var i = n.util.type(e);
                        switch (t = t || {}, i) {
                            case "Object":
                                if (t[n.util.objId(e)]) return t[n.util.objId(e)];
                                var o = {};
                                for (var r in t[n.util.objId(e)] = o, e) e.hasOwnProperty(r) && (o[r] = n.util.clone(e[r], t));
                                return o;
                            case "Array":
                                if (t[n.util.objId(e)]) return t[n.util.objId(e)];
                                o = [];
                                return t[n.util.objId(e)] = o, e.forEach(function(e, i) {
                                    o[i] = n.util.clone(e, t)
                                }), o
                        }
                        return e
                    }
                },
                languages: {
                    extend: function(e, t) {
                        var i = n.util.clone(n.languages[e]);
                        for (var o in t) i[o] = t[o];
                        return i
                    },
                    insertBefore: function(e, t, i, o) {
                        var r = (o = o || n.languages)[e];
                        if (2 == arguments.length) {
                            for (var s in i = arguments[1]) i.hasOwnProperty(s) && (r[s] = i[s]);
                            return r
                        }
                        var a = {};
                        for (var l in r)
                            if (r.hasOwnProperty(l)) {
                                if (l == t)
                                    for (var s in i) i.hasOwnProperty(s) && (a[s] = i[s]);
                                a[l] = r[l]
                            }
                        return n.languages.DFS(n.languages, function(t, n) {
                            n === o[e] && t != e && (this[t] = a)
                        }), o[e] = a
                    },
                    DFS: function(e, t, i, o) {
                        for (var r in o = o || {}, e) e.hasOwnProperty(r) && (t.call(e, r, e[r], i || r), "Object" !== n.util.type(e[r]) || o[n.util.objId(e[r])] ? "Array" !== n.util.type(e[r]) || o[n.util.objId(e[r])] || (o[n.util.objId(e[r])] = !0, n.languages.DFS(e[r], t, r, o)) : (o[n.util.objId(e[r])] = !0, n.languages.DFS(e[r], t, null, o)))
                    }
                },
                plugins: {},
                highlightAll: function(e, t) {
                    n.highlightAllUnder(document, e, t)
                },
                highlightAllUnder: function(e, t, i) {
                    var o = {
                        callback: i,
                        selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                    };
                    n.hooks.run("before-highlightall", o);
                    for (var r, s = o.elements || e.querySelectorAll(o.selector), a = 0; r = s[a++];) n.highlightElement(r, !0 === t, o.callback)
                },
                highlightElement: function(t, i, o) {
                    for (var r, s, a = t; a && !e.test(a.className);) a = a.parentNode;
                    a && (r = (a.className.match(e) || [, ""])[1].toLowerCase(), s = n.languages[r]), t.className = t.className.replace(e, "").replace(/\s+/g, " ") + " language-" + r, t.parentNode && (a = t.parentNode, /pre/i.test(a.nodeName) && (a.className = a.className.replace(e, "").replace(/\s+/g, " ") + " language-" + r));
                    var l = {
                        element: t,
                        language: r,
                        grammar: s,
                        code: t.textContent
                    };
                    if (n.hooks.run("before-sanity-check", l), !l.code || !l.grammar) return l.code && (n.hooks.run("before-highlight", l), l.element.textContent = l.code, n.hooks.run("after-highlight", l)), void n.hooks.run("complete", l);
                    if (n.hooks.run("before-highlight", l), i && _self.Worker) {
                        var c = new Worker(n.filename);
                        c.onmessage = function(e) {
                            l.highlightedCode = e.data, n.hooks.run("before-insert", l), l.element.innerHTML = l.highlightedCode, o && o.call(l.element), n.hooks.run("after-highlight", l), n.hooks.run("complete", l)
                        }, c.postMessage(JSON.stringify({
                            language: l.language,
                            code: l.code,
                            immediateClose: !0
                        }))
                    } else l.highlightedCode = n.highlight(l.code, l.grammar, l.language), n.hooks.run("before-insert", l), l.element.innerHTML = l.highlightedCode, o && o.call(t), n.hooks.run("after-highlight", l), n.hooks.run("complete", l)
                },
                highlight: function(e, t, o) {
                    var r = {
                        code: e,
                        grammar: t,
                        language: o
                    };
                    return n.hooks.run("before-tokenize", r), r.tokens = n.tokenize(r.code, r.grammar), n.hooks.run("after-tokenize", r), i.stringify(n.util.encode(r.tokens), r.language)
                },
                matchGrammar: function(e, t, i, o, r, s, a) {
                    var l = n.Token;
                    for (var c in i)
                        if (i.hasOwnProperty(c) && i[c]) {
                            if (c == a) return;
                            var u = i[c];
                            u = "Array" === n.util.type(u) ? u : [u];
                            for (var d = 0; d < u.length; ++d) {
                                var h = u[d],
                                    f = h.inside,
                                    p = !!h.lookbehind,
                                    g = !!h.greedy,
                                    m = 0,
                                    v = h.alias;
                                if (g && !h.pattern.global) {
                                    var y = h.pattern.toString().match(/[imuy]*$/)[0];
                                    h.pattern = RegExp(h.pattern.source, y + "g")
                                }
                                h = h.pattern || h;
                                for (var b = o, w = r; b < t.length; w += t[b].length, ++b) {
                                    var _ = t[b];
                                    if (t.length > e.length) return;
                                    if (!(_ instanceof l)) {
                                        if (g && b != t.length - 1) {
                                            if (h.lastIndex = w, !(k = h.exec(e))) break;
                                            for (var C = k.index + (p ? k[1].length : 0), S = k.index + k[0].length, x = b, T = w, E = t.length; x < E && (T < S || !t[x].type && !t[x - 1].greedy); ++x) C >= (T += t[x].length) && (++b, w = T);
                                            if (t[b] instanceof l) continue;
                                            O = x - b, _ = e.slice(w, T), k.index -= w
                                        } else {
                                            h.lastIndex = 0;
                                            var k = h.exec(_),
                                                O = 1
                                        }
                                        if (k) {
                                            p && (m = k[1] ? k[1].length : 0);
                                            S = (C = k.index + m) + (k = k[0].slice(m)).length;
                                            var A = _.slice(0, C),
                                                D = _.slice(S),
                                                P = [b, O];
                                            A && (++b, w += A.length, P.push(A));
                                            var L = new l(c, f ? n.tokenize(k, f) : k, v, k, g);
                                            if (P.push(L), D && P.push(D), Array.prototype.splice.apply(t, P), 1 != O && n.matchGrammar(e, t, i, b, w, !0, c), s) break
                                        } else if (s) break
                                    }
                                }
                            }
                        }
                },
                tokenize: function(e, t, i) {
                    var o = [e],
                        r = t.rest;
                    if (r) {
                        for (var s in r) t[s] = r[s];
                        delete t.rest
                    }
                    return n.matchGrammar(e, o, t, 0, 0, !1), o
                },
                hooks: {
                    all: {},
                    add: function(e, t) {
                        var i = n.hooks.all;
                        i[e] = i[e] || [], i[e].push(t)
                    },
                    run: function(e, t) {
                        var i = n.hooks.all[e];
                        if (i && i.length)
                            for (var o, r = 0; o = i[r++];) o(t)
                    }
                }
            },
            i = n.Token = function(e, t, n, i, o) {
                this.type = e, this.content = t, this.alias = n, this.length = 0 | (i || "").length, this.greedy = !!o
            };
        if (i.stringify = function(e, t, o) {
                if ("string" == typeof e) return e;
                if ("Array" === n.util.type(e)) return e.map(function(n) {
                    return i.stringify(n, t, e)
                }).join("");
                var r = {
                    type: e.type,
                    content: i.stringify(e.content, t, o),
                    tag: "span",
                    classes: ["token", e.type],
                    attributes: {},
                    language: t,
                    parent: o
                };
                if (e.alias) {
                    var s = "Array" === n.util.type(e.alias) ? e.alias : [e.alias];
                    Array.prototype.push.apply(r.classes, s)
                }
                n.hooks.run("wrap", r);
                var a = Object.keys(r.attributes).map(function(e) {
                    return e + '="' + (r.attributes[e] || "").replace(/"/g, "&quot;") + '"'
                }).join(" ");
                return "<" + r.tag + ' class="' + r.classes.join(" ") + '"' + (a ? " " + a : "") + ">" + r.content + "</" + r.tag + ">"
            }, !_self.document) return _self.addEventListener ? (n.disableWorkerMessageHandler || _self.addEventListener("message", function(e) {
            var t = JSON.parse(e.data),
                i = t.language,
                o = t.code,
                r = t.immediateClose;
            _self.postMessage(n.highlight(o, n.languages[i], i)), r && _self.close()
        }, !1), _self.Prism) : _self.Prism;
        var o = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
        return o && (n.filename = o.src, n.manual || o.hasAttribute("data-manual") || ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(n.highlightAll) : window.setTimeout(n.highlightAll, 16) : document.addEventListener("DOMContentLoaded", n.highlightAll))), _self.Prism
    }();

function get_social_counts() {
    var e = window.location.protocol + "//" + window.location.host + window.location.pathname;
    $.ajax({
        type: "GET",
        url: "https://mdbootstrap.com/wp-content/themes/mdbootstrap4/inc/get_social_counts.php?thisurl=" + e,
        dataType: "json",
        success: function(e) {
            var t = 1 * document.getElementById("dom-target-fb").textContent.valueOf() + e.facebook;
            t > 0 ? $("#facebook-span").text(t) : $("#facebook-span").hide()
        }
    })
}

function loadTemplatesBy(e, t) {
    $.post(ajax_object.ajaxurl, {
        action: "ajax_action",
        category: e
    }, function(t) {
        console.log(e), $("#products").html(t)
    })
}
"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism), Prism.languages.markup = {
        comment: /<!--[\s\S]*?-->/,
        prolog: /<\?[\s\S]+?\?>/,
        doctype: /<!DOCTYPE[\s\S]+?>/i,
        cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
        tag: {
            pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,
            greedy: !0,
            inside: {
                tag: {
                    pattern: /^<\/?[^\s>\/]+/i,
                    inside: {
                        punctuation: /^<\/?/,
                        namespace: /^[^\s>\/:]+:/
                    }
                },
                "attr-value": {
                    pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,
                    inside: {
                        punctuation: [/^=/, {
                            pattern: /(^|[^\\])["']/,
                            lookbehind: !0
                        }]
                    }
                },
                punctuation: /\/?>/,
                "attr-name": {
                    pattern: /[^\s>\/]+/,
                    inside: {
                        namespace: /^[^\s>\/:]+:/
                    }
                }
            }
        },
        entity: /&#?[\da-z]{1,8};/i
    }, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.hooks.add("wrap", function(e) {
        "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
    }), Prism.languages.xml = Prism.languages.markup, Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.css = {
        comment: /\/\*[\s\S]*?\*\//,
        atrule: {
            pattern: /@[\w-]+?.*?(?:;|(?=\s*\{))/i,
            inside: {
                rule: /@[\w-]+/
            }
        },
        url: /url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
        selector: /[^{}\s][^{};]*?(?=\s*\{)/,
        string: {
            pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0
        },
        property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
        important: /\B!important\b/i,
        function: /[-a-z0-9]+(?=\()/i,
        punctuation: /[(){};:]/
    }, Prism.languages.css.atrule.inside.rest = Prism.languages.css, Prism.languages.markup && (Prism.languages.insertBefore("markup", "tag", {
        style: {
            pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
            lookbehind: !0,
            inside: Prism.languages.css,
            alias: "language-css",
            greedy: !0
        }
    }), Prism.languages.insertBefore("inside", "attr-value", {
        "style-attr": {
            pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
            inside: {
                "attr-name": {
                    pattern: /^\s*style/i,
                    inside: Prism.languages.markup.tag.inside
                },
                punctuation: /^\s*=\s*['"]|['"]\s*$/,
                "attr-value": {
                    pattern: /.+/i,
                    inside: Prism.languages.css
                }
            },
            alias: "language-css"
        }
    }, Prism.languages.markup.tag)), Prism.languages.clike = {
        comment: [{
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
            lookbehind: !0
        }, {
            pattern: /(^|[^\\:])\/\/.*/,
            lookbehind: !0,
            greedy: !0
        }],
        string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0
        },
        "class-name": {
            pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
            lookbehind: !0,
            inside: {
                punctuation: /[.\\]/
            }
        },
        keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
        boolean: /\b(?:true|false)\b/,
        function: /[a-z0-9_]+(?=\()/i,
        number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
        operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
        punctuation: /[{}[\];(),.:]/
    }, Prism.languages.javascript = Prism.languages.extend("clike", {
        keyword: /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
        number: /\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
        function: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,
        operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
    }), Prism.languages.insertBefore("javascript", "keyword", {
        regex: {
            pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,
            lookbehind: !0,
            greedy: !0
        },
        "function-variable": {
            pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,
            alias: "function"
        },
        constant: /\b[A-Z][A-Z\d_]*\b/
    }), Prism.languages.insertBefore("javascript", "string", {
        "template-string": {
            pattern: /`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,
            greedy: !0,
            inside: {
                interpolation: {
                    pattern: /\${[^}]+}/,
                    inside: {
                        "interpolation-punctuation": {
                            pattern: /^\${|}$/,
                            alias: "punctuation"
                        },
                        rest: null
                    }
                },
                string: /[\s\S]+/
            }
        }
    }), Prism.languages.javascript["template-string"].inside.interpolation.inside.rest = Prism.languages.javascript, Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", {
        script: {
            pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
            lookbehind: !0,
            inside: Prism.languages.javascript,
            alias: "language-javascript",
            greedy: !0
        }
    }), Prism.languages.js = Prism.languages.javascript, Prism.languages["markup-templating"] = {}, Object.defineProperties(Prism.languages["markup-templating"], {
        buildPlaceholders: {
            value: function(e, t, n, i) {
                e.language === t && (e.tokenStack = [], e.code = e.code.replace(n, function(n) {
                    if ("function" == typeof i && !i(n)) return n;
                    for (var o = e.tokenStack.length; - 1 !== e.code.indexOf("___" + t.toUpperCase() + o + "___");) ++o;
                    return e.tokenStack[o] = n, "___" + t.toUpperCase() + o + "___"
                }), e.grammar = Prism.languages.markup)
            }
        },
        tokenizePlaceholders: {
            value: function(e, t) {
                if (e.language === t && e.tokenStack) {
                    e.grammar = Prism.languages[t];
                    var n = 0,
                        i = Object.keys(e.tokenStack),
                        o = function(r) {
                            if (!(n >= i.length))
                                for (var s = 0; s < r.length; s++) {
                                    var a = r[s];
                                    if ("string" == typeof a || a.content && "string" == typeof a.content) {
                                        var l = i[n],
                                            c = e.tokenStack[l],
                                            u = "string" == typeof a ? a : a.content,
                                            d = u.indexOf("___" + t.toUpperCase() + l + "___");
                                        if (d > -1) {
                                            ++n;
                                            var h, f = u.substring(0, d),
                                                p = new Prism.Token(t, Prism.tokenize(c, e.grammar, t), "language-" + t, c),
                                                g = u.substring(d + ("___" + t.toUpperCase() + l + "___").length);
                                            if (f || g ? (h = [f, p, g].filter(function(e) {
                                                    return !!e
                                                }), o(h)) : h = p, "string" == typeof a ? Array.prototype.splice.apply(r, [s, 1].concat(h)) : a.content = h, n >= i.length) break
                                        }
                                    } else a.content && "string" != typeof a.content && o(a.content)
                                }
                        };
                    o(e.tokens)
                }
            }
        }
    }), Prism.languages.json = {
        property: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/i,
        string: {
            pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
            greedy: !0
        },
        number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
        punctuation: /[{}[\]);,]/,
        operator: /:/g,
        boolean: /\b(?:true|false)\b/i,
        null: /\bnull\b/i
    }, Prism.languages.jsonp = Prism.languages.json,
    function(e) {
        e.languages.php = e.languages.extend("clike", {
            keyword: /\b(?:and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,
            constant: /\b[A-Z0-9_]{2,}\b/,
            comment: {
                pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
                lookbehind: !0
            }
        }), e.languages.insertBefore("php", "string", {
            "shell-comment": {
                pattern: /(^|[^\\])#.*/,
                lookbehind: !0,
                alias: "comment"
            }
        }), e.languages.insertBefore("php", "keyword", {
            delimiter: {
                pattern: /\?>|<\?(?:php|=)?/i,
                alias: "important"
            },
            variable: /\$+(?:\w+\b|(?={))/i,
            package: {
                pattern: /(\\|namespace\s+|use\s+)[\w\\]+/,
                lookbehind: !0,
                inside: {
                    punctuation: /\\/
                }
            }
        }), e.languages.insertBefore("php", "operator", {
            property: {
                pattern: /(->)[\w]+/,
                lookbehind: !0
            }
        }), e.languages.insertBefore("php", "string", {
            "nowdoc-string": {
                pattern: /<<<'([^']+)'(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;/,
                greedy: !0,
                alias: "string",
                inside: {
                    delimiter: {
                        pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
                        alias: "symbol",
                        inside: {
                            punctuation: /^<<<'?|[';]$/
                        }
                    }
                }
            },
            "heredoc-string": {
                pattern: /<<<(?:"([^"]+)"(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;|([a-z_]\w*)(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\2;)/i,
                greedy: !0,
                alias: "string",
                inside: {
                    delimiter: {
                        pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
                        alias: "symbol",
                        inside: {
                            punctuation: /^<<<"?|[";]$/
                        }
                    },
                    interpolation: null
                }
            },
            "single-quoted-string": {
                pattern: /'(?:\\[\s\S]|[^\\'])*'/,
                greedy: !0,
                alias: "string"
            },
            "double-quoted-string": {
                pattern: /"(?:\\[\s\S]|[^\\"])*"/,
                greedy: !0,
                alias: "string",
                inside: {
                    interpolation: null
                }
            }
        }), delete e.languages.php.string;
        var t = {
            pattern: /{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[.+?]|->\w+)*)/,
            lookbehind: !0,
            inside: {
                rest: e.languages.php
            }
        };
        e.languages.php["heredoc-string"].inside.interpolation = t, e.languages.php["double-quoted-string"].inside.interpolation = t, e.hooks.add("before-tokenize", function(t) {
            if (/(?:<\?php|<\?)/gi.test(t.code)) {
                e.languages["markup-templating"].buildPlaceholders(t, "php", /(?:<\?php|<\?)[\s\S]*?(?:\?>|$)/gi)
            }
        }), e.hooks.add("after-tokenize", function(t) {
            e.languages["markup-templating"].tokenizePlaceholders(t, "php")
        })
    }(Prism), Prism.languages.typescript = Prism.languages.extend("javascript", {
        keyword: /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|module|declare|constructor|namespace|abstract|require|type)\b/,
        builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console)\b/
    }), Prism.languages.ts = Prism.languages.typescript, Prism.languages.scss = Prism.languages.extend("css", {
        comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
            lookbehind: !0
        },
        atrule: {
            pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
            inside: {
                rule: /@[\w-]+/
            }
        },
        url: /(?:[-a-z]+-)*url(?=\()/i,
        selector: {
            pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|&|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,
            inside: {
                parent: {
                    pattern: /&/,
                    alias: "important"
                },
                placeholder: /%[-\w]+/,
                variable: /\$[-\w]+|#\{\$[-\w]+\}/
            }
        }
    }), Prism.languages.insertBefore("scss", "atrule", {
        keyword: [/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i, {
            pattern: /( +)(?:from|through)(?= )/,
            lookbehind: !0
        }]
    }), Prism.languages.scss.property = {
        pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/i,
        inside: {
            variable: /\$[-\w]+|#\{\$[-\w]+\}/
        }
    }, Prism.languages.insertBefore("scss", "important", {
        variable: /\$[-\w]+|#\{\$[-\w]+\}/
    }), Prism.languages.insertBefore("scss", "function", {
        placeholder: {
            pattern: /%[-\w]+/,
            alias: "selector"
        },
        statement: {
            pattern: /\B!(?:default|optional)\b/i,
            alias: "keyword"
        },
        boolean: /\b(?:true|false)\b/,
        null: /\bnull\b/,
        operator: {
            pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
            lookbehind: !0
        }
    }), Prism.languages.scss.atrule.inside.rest = Prism.languages.scss,
    function() {
        if ("undefined" != typeof self && self.Prism && self.document) {
            var e = /\n(?!$)/g,
                t = function(t) {
                    var i = n(t)["white-space"];
                    if ("pre-wrap" === i || "pre-line" === i) {
                        var o = t.querySelector("code"),
                            r = t.querySelector(".line-numbers-rows"),
                            s = t.querySelector(".line-numbers-sizer"),
                            a = o.textContent.split(e);
                        s || ((s = document.createElement("span")).className = "line-numbers-sizer", o.appendChild(s)), s.style.display = "block", a.forEach(function(e, t) {
                            s.textContent = e || "\n";
                            var n = s.getBoundingClientRect().height;
                            r.children[t].style.height = n + "px"
                        }), s.textContent = "", s.style.display = "none"
                    }
                },
                n = function(e) {
                    return e ? window.getComputedStyle ? getComputedStyle(e) : e.currentStyle || null : null
                };
            window.addEventListener("resize", function() {
                Array.prototype.forEach.call(document.querySelectorAll("pre.line-numbers"), t)
            }), Prism.hooks.add("complete", function(n) {
                if (n.code) {
                    var i = n.element.parentNode,
                        o = /\s*\bline-numbers\b\s*/;
                    if (i && /pre/i.test(i.nodeName) && (o.test(i.className) || o.test(n.element.className)) && !n.element.querySelector(".line-numbers-rows")) {
                        o.test(n.element.className) && (n.element.className = n.element.className.replace(o, " ")), o.test(i.className) || (i.className += " line-numbers");
                        var r, s = n.code.match(e),
                            a = s ? s.length + 1 : 1,
                            l = new Array(a + 1);
                        l = l.join("<span></span>"), (r = document.createElement("span")).setAttribute("aria-hidden", "true"), r.className = "line-numbers-rows", r.innerHTML = l, i.hasAttribute("data-start") && (i.style.counterReset = "linenumber " + (parseInt(i.getAttribute("data-start"), 10) - 1)), n.element.appendChild(r), t(i), Prism.hooks.run("line-numbers", n)
                    }
                }
            }), Prism.hooks.add("line-numbers", function(e) {
                e.plugins = e.plugins || {}, e.plugins.lineNumbers = !0
            }), Prism.plugins.lineNumbers = {
                getLine: function(e, t) {
                    if ("PRE" === e.tagName && e.classList.contains("line-numbers")) {
                        var n = e.querySelector(".line-numbers-rows"),
                            i = parseInt(e.getAttribute("data-start"), 10) || 1,
                            o = i + (n.children.length - 1);
                        t < i && (t = i), t > o && (t = o);
                        var r = t - i;
                        return n.children[r]
                    }
                }
            }
        }
    }(),
    function() {
        if ("undefined" != typeof self && self.Prism && self.document) {
            var e = [],
                t = {},
                n = function() {};
            Prism.plugins.toolbar = {};
            var i = Prism.plugins.toolbar.registerButton = function(n, i) {
                    var o;
                    o = "function" == typeof i ? i : function(e) {
                        var t;
                        return "function" == typeof i.onClick ? ((t = document.createElement("button")).type = "button", t.addEventListener("click", function() {
                            i.onClick.call(this, e)
                        })) : "string" == typeof i.url ? (t = document.createElement("a")).href = i.url : t = document.createElement("span"), t.textContent = i.text, t
                    }, e.push(t[n] = o)
                },
                o = Prism.plugins.toolbar.hook = function(i) {
                    var o = i.element.parentNode;
                    if (o && /pre/i.test(o.nodeName) && !o.parentNode.classList.contains("code-toolbar")) {
                        var r = document.createElement("div");
                        r.classList.add("code-toolbar"), o.parentNode.insertBefore(r, o), r.appendChild(o);
                        var s = document.createElement("div");
                        s.classList.add("toolbar"), document.body.hasAttribute("data-toolbar-order") && (e = document.body.getAttribute("data-toolbar-order").split(",").map(function(e) {
                            return t[e] || n
                        })), e.forEach(function(e) {
                            var t = e(i);
                            if (t) {
                                var n = document.createElement("div");
                                n.classList.add("toolbar-item"), n.appendChild(t), s.appendChild(n)
                            }
                        }), r.appendChild(s)
                    }
                };
            i("label", function(e) {
                var t = e.element.parentNode;
                if (t && /pre/i.test(t.nodeName) && t.hasAttribute("data-label")) {
                    var n, i, o = t.getAttribute("data-label");
                    try {
                        i = document.querySelector("template#" + o)
                    } catch (e) {}
                    return i ? n = i.content : (t.hasAttribute("data-url") ? (n = document.createElement("a")).href = t.getAttribute("data-url") : n = document.createElement("span"), n.textContent = o), n
                }
            }), Prism.hooks.add("complete", o)
        }
    }(),
    function() {
        if (("undefined" == typeof self || self.Prism) && self.document && Function.prototype.bind) {
            var e, t, n = {
                    gradient: {
                        create: (e = {}, t = function(t) {
                            if (e[t]) return e[t];
                            var n = t.match(/^(\b|\B-[a-z]{1,10}-)((?:repeating-)?(?:linear|radial)-gradient)/),
                                i = n && n[1],
                                o = n && n[2],
                                r = t.replace(/^(?:\b|\B-[a-z]{1,10}-)(?:repeating-)?(?:linear|radial)-gradient\(|\)$/g, "").split(/\s*,\s*/);
                            return o.indexOf("linear") >= 0 ? e[t] = function(e, t, n) {
                                var i = "180deg";
                                return /^(?:-?\d*\.?\d+(?:deg|rad)|to\b|top|right|bottom|left)/.test(n[0]) && (i = n.shift()).indexOf("to ") < 0 && (i.indexOf("top") >= 0 ? i = i.indexOf("left") >= 0 ? "to bottom right" : i.indexOf("right") >= 0 ? "to bottom left" : "to bottom" : i.indexOf("bottom") >= 0 ? i = i.indexOf("left") >= 0 ? "to top right" : i.indexOf("right") >= 0 ? "to top left" : "to top" : i.indexOf("left") >= 0 ? i = "to right" : i.indexOf("right") >= 0 ? i = "to left" : e && (i.indexOf("deg") >= 0 ? i = 90 - parseFloat(i) + "deg" : i.indexOf("rad") >= 0 && (i = Math.PI / 2 - parseFloat(i) + "rad"))), t + "(" + i + "," + n.join(",") + ")"
                            }(i, o, r) : o.indexOf("radial") >= 0 ? e[t] = function(e, t, n) {
                                if (n[0].indexOf("at") < 0) {
                                    var i = "center",
                                        o = "ellipse",
                                        r = "farthest-corner";
                                    if (/\bcenter|top|right|bottom|left\b|^\d+/.test(n[0]) && (i = n.shift().replace(/\s*-?\d+(?:rad|deg)\s*/, "")), /\bcircle|ellipse|closest|farthest|contain|cover\b/.test(n[0])) {
                                        var s = n.shift().split(/\s+/);
                                        !s[0] || "circle" !== s[0] && "ellipse" !== s[0] || (o = s.shift()), s[0] && (r = s.shift()), "cover" === r ? r = "farthest-corner" : "contain" === r && (r = "clothest-side")
                                    }
                                    return t + "(" + o + " " + r + " at " + i + "," + n.join(",") + ")"
                                }
                                return t + "(" + n.join(",") + ")"
                            }(0, o, r) : e[t] = o + "(" + r.join(",") + ")"
                        }, function() {
                            new Prism.plugins.Previewer("gradient", function(e) {
                                return this.firstChild.style.backgroundImage = "", this.firstChild.style.backgroundImage = t(e), !!this.firstChild.style.backgroundImage
                            }, "*", function() {
                                this._elt.innerHTML = "<div></div>"
                            })
                        }),
                        tokens: {
                            gradient: {
                                pattern: /(?:\b|\B-[a-z]{1,10}-)(?:repeating-)?(?:linear|radial)-gradient\((?:(?:rgb|hsl)a?\(.+?\)|[^\)])+\)/gi,
                                inside: {
                                    function: /[\w-]+(?=\()/,
                                    punctuation: /[(),]/
                                }
                            }
                        },
                        languages: {
                            css: !0,
                            less: !0,
                            sass: [{
                                lang: "sass",
                                before: "punctuation",
                                inside: "inside",
                                root: Prism.languages.sass && Prism.languages.sass["variable-line"]
                            }, {
                                lang: "sass",
                                before: "punctuation",
                                inside: "inside",
                                root: Prism.languages.sass && Prism.languages.sass["property-line"]
                            }],
                            scss: !0,
                            stylus: [{
                                lang: "stylus",
                                before: "func",
                                inside: "rest",
                                root: Prism.languages.stylus && Prism.languages.stylus["property-declaration"].inside
                            }, {
                                lang: "stylus",
                                before: "func",
                                inside: "rest",
                                root: Prism.languages.stylus && Prism.languages.stylus["variable-declaration"].inside
                            }]
                        }
                    },
                    angle: {
                        create: function() {
                            new Prism.plugins.Previewer("angle", function(e) {
                                var t, n, i = parseFloat(e),
                                    o = e.match(/[a-z]+$/i);
                                if (!i || !o) return !1;
                                switch (o = o[0]) {
                                    case "deg":
                                        t = 360;
                                        break;
                                    case "grad":
                                        t = 400;
                                        break;
                                    case "rad":
                                        t = 2 * Math.PI;
                                        break;
                                    case "turn":
                                        t = 1
                                }
                                return n = 100 * i / t, n %= 100, this[(i < 0 ? "set" : "remove") + "Attribute"]("data-negative", ""), this.querySelector("circle").style.strokeDasharray = Math.abs(n) + ",500", !0
                            }, "*", function() {
                                this._elt.innerHTML = '<svg viewBox="0 0 64 64"><circle r="16" cy="32" cx="32"></circle></svg>'
                            })
                        },
                        tokens: {
                            angle: /(?:\b|\B-|(?=\B\.))\d*\.?\d+(?:deg|g?rad|turn)\b/i
                        },
                        languages: {
                            css: !0,
                            less: !0,
                            markup: {
                                lang: "markup",
                                before: "punctuation",
                                inside: "inside",
                                root: Prism.languages.markup && Prism.languages.markup.tag.inside["attr-value"]
                            },
                            sass: [{
                                lang: "sass",
                                inside: "inside",
                                root: Prism.languages.sass && Prism.languages.sass["property-line"]
                            }, {
                                lang: "sass",
                                before: "operator",
                                inside: "inside",
                                root: Prism.languages.sass && Prism.languages.sass["variable-line"]
                            }],
                            scss: !0,
                            stylus: [{
                                lang: "stylus",
                                before: "func",
                                inside: "rest",
                                root: Prism.languages.stylus && Prism.languages.stylus["property-declaration"].inside
                            }, {
                                lang: "stylus",
                                before: "func",
                                inside: "rest",
                                root: Prism.languages.stylus && Prism.languages.stylus["variable-declaration"].inside
                            }]
                        }
                    },
                    color: {
                        create: function() {
                            new Prism.plugins.Previewer("color", function(e) {
                                return this.style.backgroundColor = "", this.style.backgroundColor = e, !!this.style.backgroundColor
                            })
                        },
                        tokens: {
                            color: {
                                pattern: /\B#(?:[0-9a-f]{3}){1,2}\b|\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B|\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGray|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGray|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGray|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gray|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGray|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGray|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGray|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,
                                inside: {
                                    function: /[\w-]+(?=\()/,
                                    punctuation: /[(),]/
                                }
                            }
                        },
                        languages: {
                            css: !0,
                            less: !0,
                            markup: {
                                lang: "markup",
                                before: "punctuation",
                                inside: "inside",
                                root: Prism.languages.markup && Prism.languages.markup.tag.inside["attr-value"]
                            },
                            sass: [{
                                lang: "sass",
                                before: "punctuation",
                                inside: "inside",
                                root: Prism.languages.sass && Prism.languages.sass["variable-line"]
                            }, {
                                lang: "sass",
                                inside: "inside",
                                root: Prism.languages.sass && Prism.languages.sass["property-line"]
                            }],
                            scss: !0,
                            stylus: [{
                                lang: "stylus",
                                before: "hexcode",
                                inside: "rest",
                                root: Prism.languages.stylus && Prism.languages.stylus["property-declaration"].inside
                            }, {
                                lang: "stylus",
                                before: "hexcode",
                                inside: "rest",
                                root: Prism.languages.stylus && Prism.languages.stylus["variable-declaration"].inside
                            }]
                        }
                    },
                    easing: {
                        create: function() {
                            new Prism.plugins.Previewer("easing", function(e) {
                                var t = (e = {
                                    linear: "0,0,1,1",
                                    ease: ".25,.1,.25,1",
                                    "ease-in": ".42,0,1,1",
                                    "ease-out": "0,0,.58,1",
                                    "ease-in-out": ".42,0,.58,1"
                                }[e] || e).match(/-?\d*\.?\d+/g);
                                if (4 === t.length) {
                                    t = t.map(function(e, t) {
                                        return 100 * (t % 2 ? 1 - e : e)
                                    }), this.querySelector("path").setAttribute("d", "M0,100 C" + t[0] + "," + t[1] + ", " + t[2] + "," + t[3] + ", 100,0");
                                    var n = this.querySelectorAll("line");
                                    return n[0].setAttribute("x2", t[0]), n[0].setAttribute("y2", t[1]), n[1].setAttribute("x2", t[2]), n[1].setAttribute("y2", t[3]), !0
                                }
                                return !1
                            }, "*", function() {
                                this._elt.innerHTML = '<svg viewBox="-20 -20 140 140" width="100" height="100"><defs><marker id="prism-previewer-easing-marker" viewBox="0 0 4 4" refX="2" refY="2" markerUnits="strokeWidth"><circle cx="2" cy="2" r="1.5" /></marker></defs><path d="M0,100 C20,50, 40,30, 100,0" /><line x1="0" y1="100" x2="20" y2="50" marker-start="url(' + location.href + '#prism-previewer-easing-marker)" marker-end="url(' + location.href + '#prism-previewer-easing-marker)" /><line x1="100" y1="0" x2="40" y2="30" marker-start="url(' + location.href + '#prism-previewer-easing-marker)" marker-end="url(' + location.href + '#prism-previewer-easing-marker)" /></svg>'
                            })
                        },
                        tokens: {
                            easing: {
                                pattern: /\bcubic-bezier\((?:-?\d*\.?\d+,\s*){3}-?\d*\.?\d+\)\B|\b(?:linear|ease(?:-in)?(?:-out)?)(?=\s|[;}]|$)/i,
                                inside: {
                                    function: /[\w-]+(?=\()/,
                                    punctuation: /[(),]/
                                }
                            }
                        },
                        languages: {
                            css: !0,
                            less: !0,
                            sass: [{
                                lang: "sass",
                                inside: "inside",
                                before: "punctuation",
                                root: Prism.languages.sass && Prism.languages.sass["variable-line"]
                            }, {
                                lang: "sass",
                                inside: "inside",
                                root: Prism.languages.sass && Prism.languages.sass["property-line"]
                            }],
                            scss: !0,
                            stylus: [{
                                lang: "stylus",
                                before: "hexcode",
                                inside: "rest",
                                root: Prism.languages.stylus && Prism.languages.stylus["property-declaration"].inside
                            }, {
                                lang: "stylus",
                                before: "hexcode",
                                inside: "rest",
                                root: Prism.languages.stylus && Prism.languages.stylus["variable-declaration"].inside
                            }]
                        }
                    },
                    time: {
                        create: function() {
                            new Prism.plugins.Previewer("time", function(e) {
                                var t = parseFloat(e),
                                    n = e.match(/[a-z]+$/i);
                                return !(!t || !n) && (n = n[0], this.querySelector("circle").style.animationDuration = 2 * t + n, !0)
                            }, "*", function() {
                                this._elt.innerHTML = '<svg viewBox="0 0 64 64"><circle r="16" cy="32" cx="32"></circle></svg>'
                            })
                        },
                        tokens: {
                            time: /(?:\b|\B-|(?=\B\.))\d*\.?\d+m?s\b/i
                        },
                        languages: {
                            css: !0,
                            less: !0,
                            markup: {
                                lang: "markup",
                                before: "punctuation",
                                inside: "inside",
                                root: Prism.languages.markup && Prism.languages.markup.tag.inside["attr-value"]
                            },
                            sass: [{
                                lang: "sass",
                                inside: "inside",
                                root: Prism.languages.sass && Prism.languages.sass["property-line"]
                            }, {
                                lang: "sass",
                                before: "operator",
                                inside: "inside",
                                root: Prism.languages.sass && Prism.languages.sass["variable-line"]
                            }],
                            scss: !0,
                            stylus: [{
                                lang: "stylus",
                                before: "hexcode",
                                inside: "rest",
                                root: Prism.languages.stylus && Prism.languages.stylus["property-declaration"].inside
                            }, {
                                lang: "stylus",
                                before: "hexcode",
                                inside: "rest",
                                root: Prism.languages.stylus && Prism.languages.stylus["variable-declaration"].inside
                            }]
                        }
                    }
                },
                i = /(?:^|\s)token(?=$|\s)/,
                o = /(?:^|\s)active(?=$|\s)/g,
                r = /(?:^|\s)flipped(?=$|\s)/g,
                s = function(e, t, n, i) {
                    this._elt = null, this._type = e, this._clsRegexp = RegExp("(?:^|\\s)" + e + "(?=$|\\s)"), this._token = null, this.updater = t, this._mouseout = this.mouseout.bind(this), this.initializer = i;
                    var o = this;
                    n || (n = ["*"]), "Array" !== Prism.util.type(n) && (n = [n]), n.forEach(function(e) {
                        "string" != typeof e && (e = e.lang), s.byLanguages[e] || (s.byLanguages[e] = []), s.byLanguages[e].indexOf(o) < 0 && s.byLanguages[e].push(o)
                    }), s.byType[e] = this
                };
            for (var a in s.prototype.init = function() {
                    this._elt || (this._elt = document.createElement("div"), this._elt.className = "prism-previewer prism-previewer-" + this._type, document.body.appendChild(this._elt), this.initializer && this.initializer())
                }, s.prototype.isDisabled = function(e) {
                    do {
                        if (e.hasAttribute && e.hasAttribute("data-previewers")) return -1 === (e.getAttribute("data-previewers") || "").split(/\s+/).indexOf(this._type)
                    } while (e = e.parentNode);
                    return !1
                }, s.prototype.check = function(e) {
                    if (!i.test(e.className) || !this.isDisabled(e)) {
                        do {
                            if (i.test(e.className) && this._clsRegexp.test(e.className)) break
                        } while (e = e.parentNode);
                        e && e !== this._token && (this._token = e, this.show())
                    }
                }, s.prototype.mouseout = function() {
                    this._token.removeEventListener("mouseout", this._mouseout, !1), this._token = null, this.hide()
                }, s.prototype.show = function() {
                    if (this._elt || this.init(), this._token)
                        if (this.updater.call(this._elt, this._token.textContent)) {
                            this._token.addEventListener("mouseout", this._mouseout, !1);
                            var e = function(e) {
                                var t = 0,
                                    n = 0,
                                    i = e;
                                if (i.parentNode) {
                                    do {
                                        t += i.offsetLeft, n += i.offsetTop
                                    } while ((i = i.offsetParent) && i.nodeType < 9);
                                    i = e;
                                    do {
                                        t -= i.scrollLeft, n -= i.scrollTop
                                    } while ((i = i.parentNode) && !/body/i.test(i.nodeName))
                                }
                                return {
                                    top: n,
                                    right: innerWidth - t - e.offsetWidth,
                                    bottom: innerHeight - n - e.offsetHeight,
                                    left: t
                                }
                            }(this._token);
                            this._elt.className += " active", e.top - this._elt.offsetHeight > 0 ? (this._elt.className = this._elt.className.replace(r, ""), this._elt.style.top = e.top + "px", this._elt.style.bottom = "") : (this._elt.className += " flipped", this._elt.style.bottom = e.bottom + "px", this._elt.style.top = ""), this._elt.style.left = e.left + Math.min(200, this._token.offsetWidth / 2) + "px"
                        } else this.hide()
                }, s.prototype.hide = function() {
                    this._elt.className = this._elt.className.replace(o, "")
                }, s.byLanguages = {}, s.byType = {}, s.initEvents = function(e, t) {
                    var n = [];
                    s.byLanguages[t] && (n = n.concat(s.byLanguages[t])), s.byLanguages["*"] && (n = n.concat(s.byLanguages["*"])), e.addEventListener("mouseover", function(e) {
                        var t = e.target;
                        n.forEach(function(e) {
                            e.check(t)
                        })
                    }, !1)
                }, Prism.plugins.Previewer = s, Prism.hooks.add("before-highlight", function(e) {
                    for (var t in n) {
                        var i = n[t].languages;
                        if (e.language && i[e.language] && !i[e.language].initialized) {
                            var o = i[e.language];
                            "Array" !== Prism.util.type(o) && (o = [o]), o.forEach(function(o) {
                                var r, s, a, l;
                                !0 === o ? (r = "important", s = e.language, o = e.language) : (r = o.before || "important", s = o.inside || o.lang, a = o.root || Prism.languages, l = o.skip, o = e.language), !l && Prism.languages[o] && (Prism.languages.insertBefore(s, r, n[t].tokens, a), e.grammar = Prism.languages[o], i[e.language] = {
                                    initialized: !0
                                })
                            })
                        }
                    }
                }), Prism.hooks.add("after-highlight", function(e) {
                    (s.byLanguages["*"] || s.byLanguages[e.language]) && s.initEvents(e.element, e.language)
                }), n) n[a].create()
        }
    }(),
    function() {
        var e = Object.assign || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            return e
        };

        function t(t) {
            this.defaults = e({}, t)
        }

        function n(e) {
            for (var t = 0, n = 0; n < e.length; ++n) e.charCodeAt(n) == "\t".charCodeAt(0) && (t += 3);
            return e.length + t
        }
        t.prototype = {
            setDefaults: function(t) {
                this.defaults = e(this.defaults, t)
            },
            normalize: function(t, n) {
                for (var i in n = e(this.defaults, n)) {
                    var o = i.replace(/-(\w)/g, function(e, t) {
                        return t.toUpperCase()
                    });
                    "normalize" !== i && "setDefaults" !== o && n[i] && this[o] && (t = this[o].call(this, t, n[i]))
                }
                return t
            },
            leftTrim: function(e) {
                return e.replace(/^\s+/, "")
            },
            rightTrim: function(e) {
                return e.replace(/\s+$/, "")
            },
            tabsToSpaces: function(e, t) {
                return t = 0 | t || 4, e.replace(/\t/g, new Array(++t).join(" "))
            },
            spacesToTabs: function(e, t) {
                return t = 0 | t || 4, e.replace(new RegExp(" {" + t + "}", "g"), "\t")
            },
            removeTrailing: function(e) {
                return e.replace(/\s*?$/gm, "")
            },
            removeInitialLineFeed: function(e) {
                return e.replace(/^(?:\r?\n|\r)/, "")
            },
            removeIndent: function(e) {
                var t = e.match(/^[^\S\n\r]*(?=\S)/gm);
                return t && t[0].length ? (t.sort(function(e, t) {
                    return e.length - t.length
                }), t[0].length ? e.replace(new RegExp("^" + t[0], "gm"), "") : e) : e
            },
            indent: function(e, t) {
                return e.replace(/^[^\S\n\r]*(?=\S)/gm, new Array(++t).join("\t") + "$&")
            },
            breakLines: function(e, t) {
                t = !0 === t ? 80 : 0 | t || 80;
                for (var i = e.split("\n"), o = 0; o < i.length; ++o)
                    if (!(n(i[o]) <= t)) {
                        for (var r = i[o].split(/(\s+)/g), s = 0, a = 0; a < r.length; ++a) {
                            var l = n(r[a]);
                            (s += l) > t && (r[a] = "\n" + r[a], s = l)
                        }
                        i[o] = r.join("")
                    }
                return i.join("\n")
            }
        }, "undefined" != typeof module && module.exports && (module.exports = t), void 0 !== Prism && (Prism.plugins.NormalizeWhitespace = new t({
            "remove-trailing": !0,
            "remove-indent": !0,
            "left-trim": !0,
            "right-trim": !0
        }), Prism.hooks.add("before-sanity-check", function(e) {
            var t = Prism.plugins.NormalizeWhitespace;
            if (!e.settings || !1 !== e.settings["whitespace-normalization"])
                if (e.element && e.element.parentNode || !e.code) {
                    var n = e.element.parentNode,
                        i = /\bno-whitespace-normalization\b/;
                    if (e.code && n && "pre" === n.nodeName.toLowerCase() && !i.test(n.className) && !i.test(e.element.className)) {
                        for (var o = n.childNodes, r = "", s = "", a = !1, l = 0; l < o.length; ++l) {
                            var c = o[l];
                            c == e.element ? a = !0 : "#text" === c.nodeName && (a ? s += c.nodeValue : r += c.nodeValue, n.removeChild(c), --l)
                        }
                        if (e.element.children.length && Prism.plugins.KeepMarkup) {
                            var u = r + e.element.innerHTML + s;
                            e.element.innerHTML = t.normalize(u, e.settings), e.code = e.element.textContent
                        } else e.code = r + e.code + s, e.code = t.normalize(e.code, e.settings)
                    }
                } else e.code = t.normalize(e.code, e.settings)
        }))
    }(),
    function() {
        if ("undefined" != typeof self && self.Prism && self.document)
            if (Prism.plugins.toolbar) {
                var e = window.ClipboardJS || void 0;
                e || "function" != typeof require || (e = require("clipboard"));
                var t = [];
                if (!e) {
                    var n = document.createElement("script"),
                        i = document.querySelector("head");
                    n.onload = function() {
                        if (e = window.ClipboardJS)
                            for (; t.length;) t.pop()()
                    }, n.src = "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js", i.appendChild(n)
                }
                Prism.plugins.toolbar.registerButton("copy-to-clipboard", function(n) {
                    var i = document.createElement("button");
                    return i.innerHTML = '<i class="fa fa-copy mr-1"></i> Copy code', i.classList = "btn-copy-code btn btn-outline-grey btn-sm px-2 waves-effect", e ? o() : t.push(o), i;

                    function o() {
                        var t = new e(i, {
                            text: function() {
                                return n.code
                            }
                        });
                        t.on("success", function() {
                            i.textContent = "Copied!", r()
                        }), t.on("error", function() {
                            i.textContent = "Press Ctrl+C to copy", r()
                        })
                    }

                    function r() {
                        setTimeout(function() {
                            i.innerHTML = '<i class="fa fa-copy mr-1"></i> Copy code'
                        }, 5e3)
                    }
                })
            } else console.warn("Copy to Clipboard plugin loaded before Toolbar plugin.")
    }(), $(function(e) {
        e('.documentation a[href="#"]').click(function(e) {
            e.preventDefault()
        })
    }),
    function(e) {
        "function" == typeof define && define.amd ? define("picker", ["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : this.Picker = e(jQuery)
    }(function(e) {
        var t = e(window),
            n = e(document),
            i = e(document.documentElement),
            o = null != document.documentElement.style.transition;

        function r(t, i, c, d) {
            if (!t) return r;
            var h = !1,
                f = {
                    id: t.id || "P" + Math.abs(~~(Math.random() * new Date)),
                    handlingOpen: !1
                },
                p = c ? e.extend(!0, {}, c.defaults, d) : d || {},
                g = e.extend({}, r.klasses(), p.klass),
                m = e(t),
                v = 2,
                y = function() {
                    return this.start()
                },
                b = y.prototype = {
                    constructor: y,
                    $node: m,
                    start: function() {
                        return f && f.start ? b : (f.methods = {}, f.start = !0, f.open = !1, f.type = t.type, t.autofocus = t == u(), t.readOnly = !p.editable, t.id = t.id || f.id, "text" != t.type && (t.type = "text"), b.component = new c(b, p), b.$root = e('<div class="' + g.picker + '" id="' + t.id + '_root" />'), l(b.$root[0], "hidden", !0), b.$holder = e(w()).appendTo(b.$root), _(), p.formatSubmit && function() {
                            var n;
                            !0 === p.hiddenName ? (n = t.name, t.name = "") : n = (n = ["string" == typeof p.hiddenPrefix ? p.hiddenPrefix : "", "string" == typeof p.hiddenSuffix ? p.hiddenSuffix : "_submit"])[0] + t.name + n[1];
                            b._hidden = e('<input type=hidden name="' + n + '"' + (m.data("value") || t.value ? ' value="' + b.get("select", p.formatSubmit) + '"' : "") + ">")[0], m.on("change." + f.id, function() {
                                b._hidden.value = t.value ? b.get("select", p.formatSubmit) : ""
                            })
                        }(), function() {
                            m.data(i, b).addClass(g.input).val(m.data("value") ? b.get("select", p.format) : t.value).on("focus." + f.id + " click." + f.id, (n = function(e) {
                                e.preventDefault(), b.open()
                            }, o = 100, function() {
                                var e = this,
                                    t = arguments,
                                    i = r && !a;
                                clearTimeout(a), a = setTimeout(function() {
                                    a = null, r || n.apply(e, t)
                                }, o), i && n.apply(e, t)
                            })).on("mousedown", function() {
                                f.handlingOpen = !0;
                                var t = function() {
                                    setTimeout(function() {
                                        e(document).off("mouseup", t), f.handlingOpen = !1
                                    }, 0)
                                };
                                e(document).on("mouseup", t)
                            }), p.editable || m.on("keydown." + f.id, S);
                            var n, o, r, a;
                            l(t, {
                                haspopup: !0,
                                expanded: !1,
                                readonly: !1,
                                owns: t.id + "_root"
                            })
                        }(), p.containerHidden ? e(p.containerHidden).append(b._hidden) : m.after(b._hidden), p.container ? e(p.container).append(b.$root) : m.after(b.$root), b.on({
                            start: b.component.onStart,
                            render: b.component.onRender,
                            stop: b.component.onStop,
                            open: b.component.onOpen,
                            close: b.component.onClose,
                            set: b.component.onSet
                        }).on({
                            start: p.onStart,
                            render: p.onRender,
                            stop: p.onStop,
                            open: p.onOpen,
                            close: p.onClose,
                            set: p.onSet
                        }), h = function(e) {
                            var t;
                            e.currentStyle ? t = e.currentStyle.position : window.getComputedStyle && (t = getComputedStyle(e).position);
                            return "fixed" == t
                        }(b.$holder[0]), t.autofocus && b.open(), b.trigger("start").trigger("render"))
                    },
                    render: function(t) {
                        return t ? (b.$holder = e(w()), _(), b.$root.html(b.$holder)) : b.$root.find("." + g.box).html(b.component.nodes(f.open)), b.trigger("render")
                    },
                    stop: function() {
                        return f.start ? (b.close(), b._hidden && b._hidden.parentNode.removeChild(b._hidden), b.$root.remove(), m.removeClass(g.input).removeData(i), setTimeout(function() {
                            m.off("." + f.id)
                        }, 0), t.type = f.type, t.readOnly = !1, b.trigger("stop"), f.methods = {}, f.start = !1, b) : b
                    },
                    open: function(i) {
                        return v++, f.open ? b : v < 4 && p.editable ? b : (setTimeout(function() {
                            b.$root.addClass(g.opened), l(b.$root[0], "hidden", !1)
                        }, 0), !1 !== i && (f.open = !0, h && e("body").css("overflow", "hidden").css("padding-right", "+=" + a()), h && o ? b.$holder.find("." + g.frame).one("transitionend", function() {
                            b.$holder.eq(0).focus()
                        }) : setTimeout(function() {
                            b.$holder.eq(0).focus()
                        }, 0), n.on("click." + f.id + " focusin." + f.id, function(e) {
                            if (!f.handlingOpen) {
                                var n = s(e, t);
                                e.isSimulated || n == t || n == document || 3 == e.which || b.close(n === b.$holder[0])
                            }
                        }).on("keydown." + f.id, function(n) {
                            var i = n.keyCode,
                                o = b.component.key[i],
                                a = s(n, t);
                            27 == i ? b.close(!0) : a != b.$holder[0] || !o && 13 != i ? e.contains(b.$root[0], a) && 13 == i && (n.preventDefault(), a.click()) : (n.preventDefault(), o ? r._.trigger(b.component.key.go, b, [r._.trigger(o)]) : b.$root.find("." + g.highlighted).hasClass(g.disabled) || (b.set("select", b.component.item.highlight), p.closeOnSelect && b.close(!0)))
                        })), b.trigger("open"))
                    },
                    close: function(i) {
                        return v = 0, i && (p.editable ? (t.click(), f.open = !1) : (b.$holder.off("focus.toOpen").focus(), setTimeout(function() {
                            b.$holder.on("focus.toOpen", C)
                        }, 0))), m.removeClass(g.active), l(t, "expanded", !1), setTimeout(function() {
                            b.$root.removeClass(g.opened + " " + g.focused), l(b.$root[0], "hidden", !0)
                        }, 0), f.open ? (f.open = !1, h && e("body").css("overflow", "").css("padding-right", "-=" + a()), document.activeElement.blur(), n.off("." + f.id), b.trigger("close")) : b
                    },
                    clear: function(e) {
                        return document.activeElement.blur(), b.set("clear", null, e)
                    },
                    set: function(t, n, i) {
                        var o, r, a = e.isPlainObject(t),
                            s = a ? t : {};
                        if (i = a && e.isPlainObject(n) ? n : i || {}, t) {
                            for (o in a || (s[t] = n), s) r = s[o], o in b.component.item && (void 0 === r && (r = null), b.component.set(o, r, i)), "select" != o && "clear" != o || !p.updateInput || m.val("clear" == o ? "" : b.get(o, p.format)).trigger("change");
                            b.render()
                        }
                        return i.muted ? b : b.trigger("set", s)
                    },
                    get: function(e, n) {
                        if (null != f[e = e || "value"]) return f[e];
                        if ("valueSubmit" == e) {
                            if (b._hidden) return b._hidden.value;
                            e = "value"
                        }
                        if ("value" == e) return t.value;
                        if (e in b.component.item) {
                            if ("string" == typeof n) {
                                var i = b.component.get(e);
                                return i ? r._.trigger(b.component.formats.toString, b.component, [n, i]) : ""
                            }
                            return b.component.get(e)
                        }
                    },
                    on: function(t, n, i) {
                        var o, r, a = e.isPlainObject(t),
                            s = a ? t : {};
                        if (t)
                            for (o in a || (s[t] = n), s) r = s[o], i && (o = "_" + o), f.methods[o] = f.methods[o] || [], f.methods[o].push(r);
                        return b
                    },
                    off: function() {
                        var e, t, n = arguments;
                        for (e = 0, namesCount = n.length; e < namesCount; e += 1)(t = n[e]) in f.methods && delete f.methods[t];
                        return b
                    },
                    trigger: function(e, t) {
                        var n = function(e) {
                            var n = f.methods[e];
                            n && n.map(function(e) {
                                r._.trigger(e, b, [t])
                            })
                        };
                        return n("_" + e), n(e), b
                    }
                };

            function w() {
                return r._.node("div", r._.node("div", r._.node("div", r._.node("div", b.component.nodes(f.open), g.box), g.wrap), g.frame), g.holder, 'tabindex="-1"')
            }

            function _() {
                b.$holder.on({
                    keydown: S,
                    "focus.toOpen": C,
                    blur: function() {
                        m.removeClass(g.target)
                    },
                    focusin: function(e) {
                        b.$root.removeClass(g.focused), e.stopPropagation()
                    },
                    "mousedown click": function(n) {
                        var i = s(n, t);
                        i != b.$holder[0] && (n.stopPropagation(), "mousedown" != n.type || e(i).is("input, select, textarea, button, option") || (n.preventDefault(), b.$holder.eq(0).focus()))
                    }
                }).on("click", "[data-pick], [data-nav], [data-clear], [data-close]", function() {
                    var t = e(this),
                        n = t.data(),
                        i = t.hasClass(g.navDisabled) || t.hasClass(g.disabled),
                        o = u();
                    o = o && (o.type || o.href ? o : null), (i || o && !e.contains(b.$root[0], o)) && b.$holder.eq(0).focus(), !i && n.nav ? b.set("highlight", b.component.item.highlight, {
                        nav: n.nav
                    }) : !i && "pick" in n ? (b.set("select", n.pick), p.closeOnSelect && b.close(!0)) : n.clear ? (b.clear(), p.closeOnClear && b.close(!0)) : n.close && b.close(!0)
                })
            }

            function C(e) {
                e.stopPropagation(), m.addClass(g.target), b.$root.addClass(g.focused), b.open()
            }

            function S(e) {
                var t = e.keyCode,
                    n = /^(8|46)$/.test(t);
                if (27 == t) return b.close(!0), !1;
                (32 == t || n || !f.open && b.component.key[t]) && (e.preventDefault(), e.stopPropagation(), n ? b.clear().close() : b.open())
            }
            return new y
        }

        function a() {
            if (i.height() <= t.height()) return 0;
            var n = e('<div style="visibility:hidden;width:100px" />').appendTo("body"),
                o = n[0].offsetWidth;
            n.css("overflow", "scroll");
            var r = e('<div style="width:100%" />').appendTo(n)[0].offsetWidth;
            return n.remove(), o - r
        }

        function s(e, t) {
            var n = [];
            return e.path && (n = e.path), e.originalEvent && e.originalEvent.path && (n = e.originalEvent.path), n && n.length > 0 ? t && n.indexOf(t) >= 0 ? t : n[0] : e.target
        }

        function l(t, n, i) {
            if (e.isPlainObject(n))
                for (var o in n) c(t, o, n[o]);
            else c(t, n, i)
        }

        function c(e, t, n) {
            e.setAttribute(("role" == t ? "" : "aria-") + t, n)
        }

        function u() {
            try {
                return document.activeElement
            } catch (e) {}
        }
        return r.klasses = function(e) {
            return {
                picker: e = e || "picker",
                opened: e + "--opened",
                focused: e + "--focused",
                input: e + "__input",
                active: e + "__input--active",
                target: e + "__input--target",
                holder: e + "__holder",
                frame: e + "__frame",
                wrap: e + "__wrap",
                box: e + "__box"
            }
        }, r._ = {
            group: function(e) {
                for (var t, n = "", i = r._.trigger(e.min, e); i <= r._.trigger(e.max, e, [i]); i += e.i) t = r._.trigger(e.item, e, [i]), n += r._.node(e.node, t[0], t[1], t[2]);
                return n
            },
            node: function(t, n, i, o) {
                return n ? "<" + t + (i = i ? ' class="' + i + '"' : "") + (o = o ? " " + o : "") + ">" + (n = e.isArray(n) ? n.join("") : n) + "</" + t + ">" : ""
            },
            lead: function(e) {
                return (e < 10 ? "0" : "") + e
            },
            trigger: function(e, t, n) {
                return "function" == typeof e ? e.apply(t, n || []) : e
            },
            digits: function(e) {
                return /\d/.test(e[1]) ? 2 : 1
            },
            isDate: function(e) {
                return {}.toString.call(e).indexOf("Date") > -1 && this.isInteger(e.getDate())
            },
            isInteger: function(e) {
                return {}.toString.call(e).indexOf("Number") > -1 && e % 1 == 0
            },
            ariaAttr: function(t, n) {
                e.isPlainObject(t) || (t = {
                    attribute: n
                });
                for (var i in n = "", t) {
                    var o = ("role" == i ? "" : "aria-") + i,
                        r = t[i];
                    n += null == r ? "" : o + '="' + t[i] + '"'
                }
                return n
            }
        }, r.extend = function(t, n) {
            e.fn[t] = function(i, o) {
                var a = this.data(t);
                return "picker" == i ? a : a && "string" == typeof i ? r._.trigger(a[i], a, [o]) : this.each(function() {
                    e(this).data(t) || new r(this, t, n, i)
                })
            }, e.fn[t].defaults = n.defaults
        }, r
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["picker", "jquery"], e) : "object" == typeof exports ? module.exports = e(require("./picker.js"), require("jquery")) : e(Picker, jQuery)
    }(function(e, t) {
        var n, i = e._;

        function o(e, t) {
            var n, i = this,
                o = e.$node[0],
                r = o.value,
                a = e.$node.data("value"),
                s = a || r,
                l = a ? t.formatSubmit : t.format,
                c = function() {
                    return o.currentStyle ? "rtl" == o.currentStyle.direction : "rtl" == getComputedStyle(e.$root[0]).direction
                };
            i.settings = t, i.$node = e.$node, i.queue = {
                min: "measure create",
                max: "measure create",
                now: "now create",
                select: "parse create validate",
                highlight: "parse navigate create validate",
                view: "parse create validate viewset",
                disable: "deactivate",
                enable: "activate"
            }, i.item = {}, i.item.clear = null, i.item.disable = (t.disable || []).slice(0), i.item.enable = -(!0 === (n = i.item.disable)[0] ? n.shift() : -1), i.set("min", t.min).set("max", t.max).set("now"), s ? i.set("select", s, {
                format: l,
                defaultValue: !0
            }) : i.set("select", null).set("highlight", i.item.now), i.key = {
                40: 7,
                38: -7,
                39: function() {
                    return c() ? -1 : 1
                },
                37: function() {
                    return c() ? 1 : -1
                },
                go: function(e) {
                    var t = i.item.highlight,
                        n = new Date(t.year, t.month, t.date + e);
                    i.set("highlight", n, {
                        interval: e
                    }), this.render()
                }
            }, e.on("render", function() {
                e.$root.find("." + t.klass.selectMonth).on("change", function() {
                    var n = this.value;
                    n && (e.set("highlight", [e.get("view").year, n, e.get("highlight").date]), e.$root.find("." + t.klass.selectMonth).trigger("focus"))
                }), e.$root.find("." + t.klass.selectYear).on("change", function() {
                    var n = this.value;
                    n && (e.set("highlight", [n, e.get("view").month, e.get("highlight").date]), e.$root.find("." + t.klass.selectYear).trigger("focus"))
                })
            }, 1).on("open", function() {
                var n = "";
                i.disabled(i.get("now")) && (n = ":not(." + t.klass.buttonToday + ")"), e.$root.find("button" + n + ", select").attr("disabled", !1)
            }, 1).on("close", function() {
                e.$root.find("button, select").attr("disabled", !0)
            }, 1)
        }
        o.prototype.set = function(e, t, n) {
            var i = this,
                o = i.item;
            return null === t ? ("clear" == e && (e = "select"), o[e] = t, i) : (o["enable" == e ? "disable" : "flip" == e ? "enable" : e] = i.queue[e].split(" ").map(function(o) {
                return t = i[o](e, t, n)
            }).pop(), "select" == e ? i.set("highlight", o.select, n) : "highlight" == e ? i.set("view", o.highlight, n) : e.match(/^(flip|min|max|disable|enable)$/) && (o.select && i.disabled(o.select) && i.set("select", o.select, n), o.highlight && i.disabled(o.highlight) && i.set("highlight", o.highlight, n)), i)
        }, o.prototype.get = function(e) {
            return this.item[e]
        }, o.prototype.create = function(e, n, o) {
            var r;
            return (n = void 0 === n ? e : n) == -1 / 0 || n == 1 / 0 ? r = n : t.isPlainObject(n) && i.isInteger(n.pick) ? n = n.obj : t.isArray(n) ? (n = new Date(n[0], n[1], n[2]), n = i.isDate(n) ? n : this.create().obj) : n = i.isInteger(n) || i.isDate(n) ? this.normalize(new Date(n), o) : this.now(e, n, o), {
                year: r || n.getFullYear(),
                month: r || n.getMonth(),
                date: r || n.getDate(),
                day: r || n.getDay(),
                obj: r || n,
                pick: r || n.getTime()
            }
        }, o.prototype.createRange = function(e, n) {
            var o = this,
                r = function(e) {
                    return !0 === e || t.isArray(e) || i.isDate(e) ? o.create(e) : e
                };
            return i.isInteger(e) || (e = r(e)), i.isInteger(n) || (n = r(n)), i.isInteger(e) && t.isPlainObject(n) ? e = [n.year, n.month, n.date + e] : i.isInteger(n) && t.isPlainObject(e) && (n = [e.year, e.month, e.date + n]), {
                from: r(e),
                to: r(n)
            }
        }, o.prototype.withinRange = function(e, t) {
            return e = this.createRange(e.from, e.to), t.pick >= e.from.pick && t.pick <= e.to.pick
        }, o.prototype.overlapRanges = function(e, t) {
            return e = this.createRange(e.from, e.to), t = this.createRange(t.from, t.to), this.withinRange(e, t.from) || this.withinRange(e, t.to) || this.withinRange(t, e.from) || this.withinRange(t, e.to)
        }, o.prototype.now = function(e, t, n) {
            return t = new Date, n && n.rel && t.setDate(t.getDate() + n.rel), this.normalize(t, n)
        }, o.prototype.navigate = function(e, n, i) {
            var o, r, a, s, l = t.isArray(n),
                c = t.isPlainObject(n),
                u = this.item.view;
            if (l || c) {
                for (c ? (r = n.year, a = n.month, s = n.date) : (r = +n[0], a = +n[1], s = +n[2]), i && i.nav && u && u.month !== a && (r = u.year, a = u.month), r = (o = new Date(r, a + (i && i.nav ? i.nav : 0), 1)).getFullYear(), a = o.getMonth(); new Date(r, a, s).getMonth() !== a;) s -= 1;
                n = [r, a, s]
            }
            return n
        }, o.prototype.normalize = function(e) {
            return e.setHours(0, 0, 0, 0), e
        }, o.prototype.measure = function(e, t) {
            return i.isInteger(t) ? t = this.now(e, t, {
                rel: t
            }) : t ? "string" == typeof t && (t = this.parse(e, t)) : t = "min" == e ? -1 / 0 : 1 / 0, t
        }, o.prototype.viewset = function(e, t) {
            return this.create([t.year, t.month, 1])
        }, o.prototype.validate = function(e, n, o) {
            var r, a, s, l, c = this,
                u = n,
                d = o && o.interval ? o.interval : 1,
                h = -1 === c.item.enable,
                f = c.item.min,
                p = c.item.max,
                g = h && c.item.disable.filter(function(e) {
                    if (t.isArray(e)) {
                        var o = c.create(e).pick;
                        o < n.pick ? r = !0 : o > n.pick && (a = !0)
                    }
                    return i.isInteger(e)
                }).length;
            if ((!o || !o.nav && !o.defaultValue) && (!h && c.disabled(n) || h && c.disabled(n) && (g || r || a) || !h && (n.pick <= f.pick || n.pick >= p.pick)))
                for (h && !g && (!a && d > 0 || !r && d < 0) && (d *= -1); c.disabled(n) && (Math.abs(d) > 1 && (n.month < u.month || n.month > u.month) && (n = u, d = d > 0 ? 1 : -1), n.pick <= f.pick ? (s = !0, d = 1, n = c.create([f.year, f.month, f.date + (n.pick === f.pick ? 0 : -1)])) : n.pick >= p.pick && (l = !0, d = -1, n = c.create([p.year, p.month, p.date + (n.pick === p.pick ? 0 : 1)])), !s || !l);) n = c.create([n.year, n.month, n.date + d]);
            return n
        }, o.prototype.disabled = function(e) {
            var n = this,
                o = n.item.disable.filter(function(o) {
                    return i.isInteger(o) ? e.day === (n.settings.firstDay ? o : o - 1) % 7 : t.isArray(o) || i.isDate(o) ? e.pick === n.create(o).pick : t.isPlainObject(o) ? n.withinRange(o, e) : void 0
                });
            return o = o.length && !o.filter(function(e) {
                return t.isArray(e) && "inverted" == e[3] || t.isPlainObject(e) && e.inverted
            }).length, -1 === n.item.enable ? !o : o || e.pick < n.item.min.pick || e.pick > n.item.max.pick
        }, o.prototype.parse = function(e, t, n) {
            var o = this,
                r = {};
            return t && "string" == typeof t ? (n && n.format || ((n = n || {}).format = o.settings.format), o.formats.toArray(n.format).map(function(e) {
                var n = o.formats[e],
                    a = n ? i.trigger(n, o, [t, r]) : e.replace(/^!/, "").length;
                n && (r[e] = t.substr(0, a)), t = t.substr(a)
            }), [r.yyyy || r.yy, +(r.mm || r.m) - 1, r.dd || r.d]) : t
        }, o.prototype.formats = function() {
            function e(e, t, n) {
                var i = e.match(/[^\x00-\x7F]+|\w+/)[0];
                return n.mm || n.m || (n.m = t.indexOf(i) + 1), i.length
            }

            function t(e) {
                return e.match(/\w+/)[0].length
            }
            return {
                d: function(e, t) {
                    return e ? i.digits(e) : t.date
                },
                dd: function(e, t) {
                    return e ? 2 : i.lead(t.date)
                },
                ddd: function(e, n) {
                    return e ? t(e) : this.settings.weekdaysShort[n.day]
                },
                dddd: function(e, n) {
                    return e ? t(e) : this.settings.weekdaysFull[n.day]
                },
                m: function(e, t) {
                    return e ? i.digits(e) : t.month + 1
                },
                mm: function(e, t) {
                    return e ? 2 : i.lead(t.month + 1)
                },
                mmm: function(t, n) {
                    var i = this.settings.monthsShort;
                    return t ? e(t, i, n) : i[n.month]
                },
                mmmm: function(t, n) {
                    var i = this.settings.monthsFull;
                    return t ? e(t, i, n) : i[n.month]
                },
                yy: function(e, t) {
                    return e ? 2 : ("" + t.year).slice(2)
                },
                yyyy: function(e, t) {
                    return e ? 4 : t.year
                },
                toArray: function(e) {
                    return e.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)
                },
                toString: function(e, t) {
                    var n = this;
                    return n.formats.toArray(e).map(function(e) {
                        return i.trigger(n.formats[e], n, [0, t]) || e.replace(/^!/, "")
                    }).join("")
                }
            }
        }(), o.prototype.isDateExact = function(e, n) {
            return i.isInteger(e) && i.isInteger(n) || "boolean" == typeof e && "boolean" == typeof n ? e === n : (i.isDate(e) || t.isArray(e)) && (i.isDate(n) || t.isArray(n)) ? this.create(e).pick === this.create(n).pick : !(!t.isPlainObject(e) || !t.isPlainObject(n)) && (this.isDateExact(e.from, n.from) && this.isDateExact(e.to, n.to))
        }, o.prototype.isDateOverlap = function(e, n) {
            var o = this.settings.firstDay ? 1 : 0;
            return i.isInteger(e) && (i.isDate(n) || t.isArray(n)) ? (e = e % 7 + o) === this.create(n).day + 1 : i.isInteger(n) && (i.isDate(e) || t.isArray(e)) ? (n = n % 7 + o) === this.create(e).day + 1 : !(!t.isPlainObject(e) || !t.isPlainObject(n)) && this.overlapRanges(e, n)
        }, o.prototype.flipEnable = function(e) {
            var t = this.item;
            t.enable = e || (-1 == t.enable ? 1 : -1)
        }, o.prototype.deactivate = function(e, n) {
            var o = this,
                r = o.item.disable.slice(0);
            return "flip" == n ? o.flipEnable() : !1 === n ? (o.flipEnable(1), r = []) : !0 === n ? (o.flipEnable(-1), r = []) : n.map(function(e) {
                for (var n, a = 0; a < r.length; a += 1)
                    if (o.isDateExact(e, r[a])) {
                        n = !0;
                        break
                    }
                n || (i.isInteger(e) || i.isDate(e) || t.isArray(e) || t.isPlainObject(e) && e.from && e.to) && r.push(e)
            }), r
        }, o.prototype.activate = function(e, n) {
            var o = this,
                r = o.item.disable,
                a = r.length;
            return "flip" == n ? o.flipEnable() : !0 === n ? (o.flipEnable(1), r = []) : !1 === n ? (o.flipEnable(-1), r = []) : n.map(function(e) {
                var n, s, l, c;
                for (l = 0; l < a; l += 1) {
                    if (s = r[l], o.isDateExact(s, e)) {
                        n = r[l] = null, c = !0;
                        break
                    }
                    if (o.isDateOverlap(s, e)) {
                        t.isPlainObject(e) ? (e.inverted = !0, n = e) : t.isArray(e) ? (n = e)[3] || n.push("inverted") : i.isDate(e) && (n = [e.getFullYear(), e.getMonth(), e.getDate(), "inverted"]);
                        break
                    }
                }
                if (n)
                    for (l = 0; l < a; l += 1)
                        if (o.isDateExact(r[l], e)) {
                            r[l] = null;
                            break
                        }
                if (c)
                    for (l = 0; l < a; l += 1)
                        if (o.isDateOverlap(r[l], e)) {
                            r[l] = null;
                            break
                        }
                n && r.push(n)
            }), r.filter(function(e) {
                return null != e
            })
        }, o.prototype.nodes = function(e) {
            var t, n, o = this,
                r = o.settings,
                a = o.item,
                s = a.now,
                l = a.select,
                c = a.highlight,
                u = a.view,
                d = a.disable,
                h = a.min,
                f = a.max,
                p = (t = (r.showWeekdaysFull ? r.weekdaysFull : r.weekdaysShort).slice(0), n = r.weekdaysFull.slice(0), r.firstDay && (t.push(t.shift()), n.push(n.shift())), i.node("thead", i.node("tr", i.group({
                    min: 0,
                    max: 6,
                    i: 1,
                    node: "th",
                    item: function(e) {
                        return [t[e], r.klass.weekdays, 'scope=col title="' + n[e] + '"']
                    }
                })))),
                g = function(e) {
                    return i.node("button", " ", r.klass["nav" + (e ? "Next" : "Prev")] + (e && u.year >= f.year && u.month >= f.month || !e && u.year <= h.year && u.month <= h.month ? " " + r.klass.navDisabled : ""), "data-nav=" + (e || -1) + " " + i.ariaAttr({
                        role: "button",
                        controls: o.$node[0].id + "_table"
                    }) + ' title="' + (e ? r.labelMonthNext : r.labelMonthPrev) + '"')
                },
                m = function() {
                    var t = r.showMonthsShort ? r.monthsShort : r.monthsFull;
                    return r.selectMonths ? i.node("select", i.group({
                        min: 0,
                        max: 11,
                        i: 1,
                        node: "option",
                        item: function(e) {
                            return [t[e], 0, "value=" + e + (u.month == e ? " selected" : "") + (u.year == h.year && e < h.month || u.year == f.year && e > f.month ? " disabled" : "")]
                        }
                    }), r.klass.selectMonth, (e ? "" : "disabled") + " " + i.ariaAttr({
                        controls: o.$node[0].id + "_table"
                    }) + ' title="' + r.labelMonthSelect + '"') : i.node("div", t[u.month], r.klass.month)
                },
                v = function() {
                    var t = u.year,
                        n = !0 === r.selectYears ? 5 : ~~(r.selectYears / 2);
                    if (n) {
                        var a = h.year,
                            s = f.year,
                            l = t - n,
                            c = t + n;
                        if (a > l && (c += a - l, l = a), s < c) {
                            var d = l - a,
                                p = c - s;
                            l -= d > p ? p : d, c = s
                        }
                        return i.node("select", i.group({
                            min: l,
                            max: c,
                            i: 1,
                            node: "option",
                            item: function(e) {
                                return [e, 0, "value=" + e + (t == e ? " selected" : "")]
                            }
                        }), r.klass.selectYear, (e ? "" : "disabled") + " " + i.ariaAttr({
                            controls: o.$node[0].id + "_table"
                        }) + ' title="' + r.labelYearSelect + '"')
                    }
                    return i.node("div", t, r.klass.year)
                };
            return i.node("div", (r.selectYears ? v() + m() : m() + v()) + g() + g(1), r.klass.header) + i.node("table", p + i.node("tbody", i.group({
                min: 0,
                max: 5,
                i: 1,
                node: "tr",
                item: function(e) {
                    var t = r.firstDay && 0 === o.create([u.year, u.month, 1]).day ? -7 : 0;
                    return [i.group({
                        min: 7 * e - u.day + t + 1,
                        max: function() {
                            return this.min + 7 - 1
                        },
                        i: 1,
                        node: "td",
                        item: function(e) {
                            e = o.create([u.year, u.month, e + (r.firstDay ? 1 : 0)]);
                            var t, n = l && l.pick == e.pick,
                                a = c && c.pick == e.pick,
                                p = d && o.disabled(e) || e.pick < h.pick || e.pick > f.pick,
                                g = i.trigger(o.formats.toString, o, [r.format, e]);
                            return [i.node("div", e.date, (t = [r.klass.day], t.push(u.month == e.month ? r.klass.infocus : r.klass.outfocus), s.pick == e.pick && t.push(r.klass.now), n && t.push(r.klass.selected), a && t.push(r.klass.highlighted), p && t.push(r.klass.disabled), t.join(" ")), "data-pick=" + e.pick + " " + i.ariaAttr({
                                role: "gridcell",
                                label: g,
                                selected: !(!n || o.$node.val() !== g) || null,
                                activedescendant: !!a || null,
                                disabled: !!p || null
                            })), "", i.ariaAttr({
                                role: "presentation"
                            })]
                        }
                    })]
                }
            })), r.klass.table, 'id="' + o.$node[0].id + '_table" ' + i.ariaAttr({
                role: "grid",
                controls: o.$node[0].id,
                readonly: !0
            })) + i.node("div", i.node("button", r.today, r.klass.buttonToday, "type=button data-pick=" + s.pick + (e && !o.disabled(s) ? "" : " disabled") + " " + i.ariaAttr({
                controls: o.$node[0].id
            })) + i.node("button", r.clear, r.klass.buttonClear, "type=button data-clear=1" + (e ? "" : " disabled") + " " + i.ariaAttr({
                controls: o.$node[0].id
            })) + i.node("button", r.close, r.klass.buttonClose, "type=button data-close=true " + (e ? "" : " disabled") + " " + i.ariaAttr({
                controls: o.$node[0].id
            })), r.klass.footer)
        }, o.defaults = {
            labelMonthNext: "Next month",
            labelMonthPrev: "Previous month",
            labelMonthSelect: "Select a month",
            labelYearSelect: "Select a year",
            monthsFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            weekdaysFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            today: "Today",
            clear: "Clear",
            close: "Close",
            closeOnSelect: !0,
            closeOnClear: !0,
            updateInput: !0,
            format: "d mmmm, yyyy",
            klass: {
                table: (n = e.klasses().picker + "__") + "table",
                header: n + "header",
                navPrev: n + "nav--prev btn btn-flat",
                navNext: n + "nav--next btn btn-flat",
                navDisabled: n + "nav--disabled",
                month: n + "month",
                year: n + "year",
                selectMonth: n + "select--month",
                selectYear: n + "select--year",
                weekdays: n + "weekday",
                day: n + "day",
                disabled: n + "day--disabled",
                selected: n + "day--selected",
                highlighted: n + "day--highlighted",
                now: n + "day--today",
                infocus: n + "day--infocus",
                outfocus: n + "day--outfocus",
                footer: n + "footer",
                buttonClear: n + "button--clear",
                buttonToday: n + "button--today",
                buttonClose: n + "button--close"
            }
        }, e.extend("pickadate", o)
    }), $.extend($.fn.pickadate.defaults, {
        selectMonths: !0,
        selectYears: 15,
        onRender: function() {
            var e = this.$root,
                t = this.get("highlight", "yyyy"),
                n = this.get("highlight", "dd"),
                i = this.get("highlight", "mmm"),
                o = this.get("highlight", "dddd").slice(0, 3),
                r = i.charAt(0).toUpperCase() + i.slice(1);
            e.find(".picker__header").prepend('<div class="picker__date-display"><div class="picker__weekday-display">' + o + ', </div><div class="picker__month-display"><div>' + r + '</div></div><div class="picker__day-display"><div>' + n + '</div></div><div    class="picker__year-display"><div>' + t + "</div></div></div>")
        }
    });