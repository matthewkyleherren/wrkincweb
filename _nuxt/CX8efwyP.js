const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["./DRdxuc-t.js", "./Bop2QIaf.js", "./CDqCh6nc.js", "./D5kxizR0.js", "./DYWLrVrJ.js", "./pRdizhfa.js", "./CvTnkAKf.js"]))) => i.map(i => d[i]);
import {
    a5 as Z,
    e as q,
    r as h,
    a3 as G,
    p as j,
    a6 as we,
    a7 as _e,
    o as le,
    a8 as ge,
    a9 as se,
    aa as ne,
    ab as Le,
    ac as Re,
    f as E,
    ad as ue,
    ae as ie,
    af as Te,
    ag as Se,
    ah as Ee,
    ai as xe,
    aj as Me,
    Y as Be,
    Z as Pe,
    a as Y,
    a4 as re,
    t as F,
    j as x,
    k as P,
    x as z,
    ak as Ae,
    v as S,
    al as Ne,
    am as N,
    _ as K,
    l as y,
    E as O,
    D as ce,
    $ as Ce,
    n as de,
    B as fe,
    y as J,
    q as D,
    A as W,
    s as X
} from "./Bop2QIaf.js";
async function ve(i, e = Z()) {
    const {
        path: d,
        matched: o
    } = e.resolve(i);
    if (!o.length || (e._routePreloaded || (e._routePreloaded = new Set), e._routePreloaded.has(d))) return;
    const r = e._preloadPromises = e._preloadPromises || [];
    if (r.length > 4) return Promise.all(r).then(() => ve(i, e));
    e._routePreloaded.add(d);
    const a = o.map(l => {
        var u;
        return (u = l.components) == null ? void 0 : u.default
    }).filter(l => typeof l == "function");
    for (const l of a) {
        const u = Promise.resolve(l()).catch(() => {}).finally(() => r.splice(r.indexOf(u)));
        r.push(u)
    }
    await Promise.all(r)
}
const Ie = (...i) => i.find(e => e !== void 0);

function $e(i) {
    const e = i.componentName || "NuxtLink";

    function d(r, a) {
        if (!r || i.trailingSlash !== "append" && i.trailingSlash !== "remove") return r;
        if (typeof r == "string") return oe(r, i.trailingSlash);
        const l = "path" in r && r.path !== void 0 ? r.path : a(r).path;
        return {
            ...r,
            name: void 0,
            path: oe(l, i.trailingSlash)
        }
    }

    function o(r) {
        const a = Z(),
            l = Ee(),
            u = E(() => !!r.target && r.target !== "_self"),
            f = E(() => {
                const m = r.to || r.href || "";
                return typeof m == "string" && ue(m, {
                    acceptRelative: !0
                })
            }),
            s = ne("RouterLink"),
            n = s && typeof s != "string" ? s.useLink : void 0,
            v = E(() => {
                if (r.external) return !0;
                const m = r.to || r.href || "";
                return typeof m == "object" ? !1 : m === "" || f.value
            }),
            c = E(() => {
                const m = r.to || r.href || "";
                return v.value ? m : d(m, a.resolve)
            }),
            b = v.value || n == null ? void 0 : n({
                ...r,
                to: c
            }),
            p = E(() => {
                var m;
                if (!c.value || f.value) return c.value;
                if (v.value) {
                    const k = typeof c.value == "object" && "path" in c.value ? ie(c.value) : c.value,
                        M = typeof k == "object" ? a.resolve(k).href : k;
                    return d(M, a.resolve)
                }
                return typeof c.value == "object" ? ((m = a.resolve(c.value)) == null ? void 0 : m.href) ?? null : d(Te(l.app.baseURL, c.value), a.resolve)
            });
        return {
            to: c,
            hasTarget: u,
            isAbsoluteUrl: f,
            isExternal: v,
            href: p,
            isActive: (b == null ? void 0 : b.isActive) ?? E(() => c.value === a.currentRoute.value.path),
            isExactActive: (b == null ? void 0 : b.isExactActive) ?? E(() => c.value === a.currentRoute.value.path),
            route: (b == null ? void 0 : b.route) ?? E(() => a.resolve(c.value)),
            async navigate() {
                await Se(p.value, {
                    replace: r.replace,
                    external: v.value || u.value
                })
            }
        }
    }
    return q({
        name: e,
        props: {
            to: {
                type: [String, Object],
                default: void 0,
                required: !1
            },
            href: {
                type: [String, Object],
                default: void 0,
                required: !1
            },
            target: {
                type: String,
                default: void 0,
                required: !1
            },
            rel: {
                type: String,
                default: void 0,
                required: !1
            },
            noRel: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            prefetch: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            prefetchOn: {
                type: [String, Object],
                default: void 0,
                required: !1
            },
            noPrefetch: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            activeClass: {
                type: String,
                default: void 0,
                required: !1
            },
            exactActiveClass: {
                type: String,
                default: void 0,
                required: !1
            },
            prefetchedClass: {
                type: String,
                default: void 0,
                required: !1
            },
            replace: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            ariaCurrentValue: {
                type: String,
                default: void 0,
                required: !1
            },
            external: {
                type: Boolean,
                default: void 0,
                required: !1
            },
            custom: {
                type: Boolean,
                default: void 0,
                required: !1
            }
        },
        useLink: o,
        setup(r, {
            slots: a
        }) {
            const l = Z(),
                {
                    to: u,
                    href: f,
                    navigate: s,
                    isExternal: n,
                    hasTarget: v,
                    isAbsoluteUrl: c
                } = o(r),
                b = h(!1),
                p = h(null),
                m = w => {
                    var L;
                    p.value = r.custom ? (L = w == null ? void 0 : w.$el) == null ? void 0 : L.nextElementSibling : w == null ? void 0 : w.$el
                };

            function k(w) {
                var L, g;
                return !b.value && (typeof r.prefetchOn == "string" ? r.prefetchOn === w : ((L = r.prefetchOn) == null ? void 0 : L[w]) ?? ((g = i.prefetchOn) == null ? void 0 : g[w])) && (r.prefetch ?? i.prefetch) !== !1 && r.noPrefetch !== !0 && r.target !== "_blank" && !qe()
            }
            async function M(w = G()) {
                if (b.value) return;
                b.value = !0;
                const L = typeof u.value == "string" ? u.value : n.value ? ie(u.value) : l.resolve(u.value).fullPath;
                await Promise.all([w.hooks.callHook("link:prefetch", L).catch(() => {}), !n.value && !v.value && ve(u.value, l).catch(() => {})])
            }
            if (k("visibility")) {
                const w = G();
                let L, g = null;
                j(() => {
                    const T = Ve();
                    we(() => {
                        L = _e(() => {
                            var I;
                            (I = p == null ? void 0 : p.value) != null && I.tagName && (g = T.observe(p.value, async () => {
                                g == null || g(), g = null, await M(w)
                            }))
                        })
                    })
                }), le(() => {
                    L && ge(L), g == null || g(), g = null
                })
            }
            return () => {
                var g;
                if (!n.value && !v.value) {
                    const T = {
                        ref: m,
                        to: u.value,
                        activeClass: r.activeClass || i.activeClass,
                        exactActiveClass: r.exactActiveClass || i.exactActiveClass,
                        replace: r.replace,
                        ariaCurrentValue: r.ariaCurrentValue,
                        custom: r.custom
                    };
                    return r.custom || (k("interaction") && (T.onPointerenter = M.bind(null, void 0), T.onFocus = M.bind(null, void 0)), b.value && (T.class = r.prefetchedClass || i.prefetchedClass), T.rel = r.rel || void 0), se(ne("RouterLink"), T, a.default)
                }
                const w = r.target || null,
                    L = Ie(r.noRel ? "" : r.rel, i.externalRelAttribute, c.value || v.value ? "noopener noreferrer" : "") || null;
                return r.custom ? a.default ? a.default({
                    href: f.value,
                    navigate: s,
                    prefetch: M,
                    get route() {
                        if (!f.value) return;
                        const T = new URL(f.value, window.location.href);
                        return {
                            path: T.pathname,
                            fullPath: T.pathname,
                            get query() {
                                return Le(T.search)
                            },
                            hash: T.hash,
                            params: {},
                            name: void 0,
                            matched: [],
                            redirectedFrom: void 0,
                            meta: {},
                            href: f.value
                        }
                    },
                    rel: L,
                    target: w,
                    isExternal: n.value || v.value,
                    isActive: !1,
                    isExactActive: !1
                }) : null : se("a", {
                    ref: p,
                    href: f.value || null,
                    rel: L,
                    target: w
                }, (g = a.default) == null ? void 0 : g.call(a))
            }
        }
    })
}
const Oe = $e(Re);

function oe(i, e) {
    const d = e === "append" ? xe : Me;
    return ue(i) && !i.startsWith("http") ? i : d(i, !0)
}

function Ve() {
    const i = G();
    if (i._observer) return i._observer;
    let e = null;
    const d = new Map,
        o = (a, l) => (e || (e = new IntersectionObserver(u => {
            for (const f of u) {
                const s = d.get(f.target);
                (f.isIntersecting || f.intersectionRatio > 0) && s && s()
            }
        })), d.set(a, l), e.observe(a), () => {
            d.delete(a), e.unobserve(a), d.size === 0 && (e.disconnect(), e = null)
        });
    return i._observer = {
        observe: o
    }
}

function qe() {
    const i = navigator.connection;
    return !!(i && (i.saveData || /2g/.test(i.effectiveType)))
}
const ae = {
    start: "33% bottom",
    end: "bottom top"
};

function je(i, e) {
    const d = Be(),
        {
            isSitePreloaderDone: o,
            mainScrollRef: r
        } = Pe(d),
        a = h(null),
        l = h(null),
        u = h(!1);
    le(() => {
        var n, v;
        (n = a.value) == null || n.kill(), (v = l.value) == null || v.kill()
    }), Y(o, () => {
        o.value && f(), (e != null && e.start || e != null && e.end) && s()
    }, {
        immediate: !0
    });

    function f() {
        var n;
        a.value = re.create({
            trigger: i,
            ...ae,
            ...e,
            scroller: (n = r.value) == null ? void 0 : n.rootElement,
            onEnter: () => {
                e != null && e.onEnter && e.onEnter(), !(e != null && e.start) && !(e != null && e.end) && (u.value = !0)
            },
            onEnterBack: () => {
                e != null && e.onEnterBack && e.onEnterBack(), !(e != null && e.start) && !(e != null && e.end) && (u.value = !0)
            },
            onLeave: () => {
                e != null && e.onLeave && e.onLeave(), !(e != null && e.start) && !(e != null && e.end) && (u.value = !1)
            },
            onLeaveBack: () => {
                e != null && e.onLeaveBack && e.onLeaveBack(), !(e != null && e.start) && !(e != null && e.end) && (u.value = !1)
            }
        })
    }

    function s() {
        l.value = re.create({
            trigger: i,
            ...ae,
            onEnter: () => {
                u.value = !0
            },
            onEnterBack: () => {
                u.value = !0
            },
            onLeave: () => {
                u.value = !1
            },
            onLeaveBack: () => {
                u.value = !1
            }
        })
    }
    return {
        isInView: u
    }
}
const De = (i, e, d) => {
        const o = i[e];
        return o ? typeof o == "function" ? o() : Promise.resolve(o) : new Promise((r, a) => {
            (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(a.bind(null, new Error("Unknown variable dynamic import: " + e + (e.split("/").length !== d ? ". Note that variables only represent file names one level deep." : ""))))
        })
    },
    We = q({
        __name: "Icon",
        props: {
            name: {},
            isKeepingColors: {
                type: Boolean
            }
        },
        setup(i) {
            const e = i,
                {
                    name: d
                } = F(e),
                o = E(() => Ne(() => De(Object.assign({
                    "../../../assets/svg/card-logo.svg": () => N(() => import("./DRdxuc-t.js"), __vite__mapDeps([0, 1]), import.meta.url),
                    "../../../assets/svg/checkmark.svg": () => N(() => import("./CDqCh6nc.js"), __vite__mapDeps([2, 1]), import.meta.url),
                    "../../../assets/svg/line-stack.svg": () => N(() => import("./D5kxizR0.js"), __vite__mapDeps([3, 1]), import.meta.url),
                    "../../../assets/svg/link.svg": () => N(() => import("./DYWLrVrJ.js"), __vite__mapDeps([4, 1]), import.meta.url),
                    "../../../assets/svg/loader.svg": () => N(() => import("./pRdizhfa.js"), __vite__mapDeps([5, 1]), import.meta.url),
                    "../../../assets/svg/plane.svg": () => N(() => import("./CvTnkAKf.js"), __vite__mapDeps([6, 1]), import.meta.url)
                }), `../../../assets/svg/${d.value}.svg`, 6)));
            return (r, a) => (x(), P("span", {
                class: S([r.$style.icon, {
                    [r.$style.isKeepingColors]: r.isKeepingColors
                }])
            }, [(x(), z(Ae(o.value)))], 2))
        }
    }),
    ze = "_icon_16kk5_9",
    Fe = "_isKeepingColors_16kk5_21",
    Ke = {
        icon: ze,
        isKeepingColors: Fe
    },
    Ue = {
        $style: Ke
    },
    Xe = K(We, [
        ["__cssModules", Ue]
    ]);
var He = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function Ze(i) {
    return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i
}
var me = {
    exports: {}
};
/*!
 * Bowser - a browser detector
 * https://github.com/ded/bowser
 * MIT License | (c) Dustin Diaz 2015
 */
(function(i) {
    (function(e, d, o) {
        i.exports ? i.exports = o() : e[d] = o()
    })(He, "bowser", function() {
        var e = !0;

        function d(s) {
            function n($) {
                var A = s.match($);
                return A && A.length > 1 && A[1] || ""
            }

            function v($) {
                var A = s.match($);
                return A && A.length > 1 && A[2] || ""
            }
            var c = n(/(ipod|iphone|ipad)/i).toLowerCase(),
                b = /like android/i.test(s),
                p = !b && /android/i.test(s),
                m = /nexus\s*[0-6]\s*/i.test(s),
                k = !m && /nexus\s*[0-9]+/i.test(s),
                M = /CrOS/.test(s),
                w = /silk/i.test(s),
                L = /sailfish/i.test(s),
                g = /tizen/i.test(s),
                T = /(web|hpw)(o|0)s/i.test(s),
                I = /windows phone/i.test(s),
                pe = !I && /windows/i.test(s),
                he = !c && !w && /macintosh/i.test(s),
                be = !p && !L && !g && !T && /linux/i.test(s),
                U = v(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
                _ = n(/version\/(\d+(\.\d+)?)/i),
                Q = /tablet/i.test(s) && !/tablet pc/i.test(s),
                ee = !Q && /[^-]mobi/i.test(s),
                ye = /xbox/i.test(s),
                t;
            /opera/i.test(s) ? t = {
                name: "Opera",
                opera: e,
                version: _ || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
            } : /opr\/|opios/i.test(s) ? t = {
                name: "Opera",
                opera: e,
                version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || _
            } : /SamsungBrowser/i.test(s) ? t = {
                name: "Samsung Internet for Android",
                samsungBrowser: e,
                version: _ || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
            } : /Whale/i.test(s) ? t = {
                name: "NAVER Whale browser",
                whale: e,
                version: n(/(?:whale)[\s\/](\d+(?:\.\d+)+)/i)
            } : /MZBrowser/i.test(s) ? t = {
                name: "MZ Browser",
                mzbrowser: e,
                version: n(/(?:MZBrowser)[\s\/](\d+(?:\.\d+)+)/i)
            } : /coast/i.test(s) ? t = {
                name: "Opera Coast",
                coast: e,
                version: _ || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
            } : /focus/i.test(s) ? t = {
                name: "Focus",
                focus: e,
                version: n(/(?:focus)[\s\/](\d+(?:\.\d+)+)/i)
            } : /yabrowser/i.test(s) ? t = {
                name: "Yandex Browser",
                yandexbrowser: e,
                version: _ || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
            } : /ucbrowser/i.test(s) ? t = {
                name: "UC Browser",
                ucbrowser: e,
                version: n(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
            } : /mxios/i.test(s) ? t = {
                name: "Maxthon",
                maxthon: e,
                version: n(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
            } : /epiphany/i.test(s) ? t = {
                name: "Epiphany",
                epiphany: e,
                version: n(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
            } : /puffin/i.test(s) ? t = {
                name: "Puffin",
                puffin: e,
                version: n(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
            } : /sleipnir/i.test(s) ? t = {
                name: "Sleipnir",
                sleipnir: e,
                version: n(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
            } : /k-meleon/i.test(s) ? t = {
                name: "K-Meleon",
                kMeleon: e,
                version: n(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
            } : I ? (t = {
                name: "Windows Phone",
                osname: "Windows Phone",
                windowsphone: e
            }, U ? (t.msedge = e, t.version = U) : (t.msie = e, t.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(s) ? t = {
                name: "Internet Explorer",
                msie: e,
                version: n(/(?:msie |rv:)(\d+(\.\d+)?)/i)
            } : M ? t = {
                name: "Chrome",
                osname: "Chrome OS",
                chromeos: e,
                chromeBook: e,
                chrome: e,
                version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
            } : /edg([ea]|ios)/i.test(s) ? t = {
                name: "Microsoft Edge",
                msedge: e,
                version: U
            } : /vivaldi/i.test(s) ? t = {
                name: "Vivaldi",
                vivaldi: e,
                version: n(/vivaldi\/(\d+(\.\d+)?)/i) || _
            } : L ? t = {
                name: "Sailfish",
                osname: "Sailfish OS",
                sailfish: e,
                version: n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
            } : /seamonkey\//i.test(s) ? t = {
                name: "SeaMonkey",
                seamonkey: e,
                version: n(/seamonkey\/(\d+(\.\d+)?)/i)
            } : /firefox|iceweasel|fxios/i.test(s) ? (t = {
                name: "Firefox",
                firefox: e,
                version: n(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
            }, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(s) && (t.firefoxos = e, t.osname = "Firefox OS")) : w ? t = {
                name: "Amazon Silk",
                silk: e,
                version: n(/silk\/(\d+(\.\d+)?)/i)
            } : /phantom/i.test(s) ? t = {
                name: "PhantomJS",
                phantom: e,
                version: n(/phantomjs\/(\d+(\.\d+)?)/i)
            } : /slimerjs/i.test(s) ? t = {
                name: "SlimerJS",
                slimer: e,
                version: n(/slimerjs\/(\d+(\.\d+)?)/i)
            } : /blackberry|\bbb\d+/i.test(s) || /rim\stablet/i.test(s) ? t = {
                name: "BlackBerry",
                osname: "BlackBerry OS",
                blackberry: e,
                version: _ || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
            } : T ? (t = {
                name: "WebOS",
                osname: "WebOS",
                webos: e,
                version: _ || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
            }, /touchpad\//i.test(s) && (t.touchpad = e)) : /bada/i.test(s) ? t = {
                name: "Bada",
                osname: "Bada",
                bada: e,
                version: n(/dolfin\/(\d+(\.\d+)?)/i)
            } : g ? t = {
                name: "Tizen",
                osname: "Tizen",
                tizen: e,
                version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || _
            } : /qupzilla/i.test(s) ? t = {
                name: "QupZilla",
                qupzilla: e,
                version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || _
            } : /chromium/i.test(s) ? t = {
                name: "Chromium",
                chromium: e,
                version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || _
            } : /chrome|crios|crmo/i.test(s) ? t = {
                name: "Chrome",
                chrome: e,
                version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
            } : p ? t = {
                name: "Android",
                version: _
            } : /safari|applewebkit/i.test(s) ? (t = {
                name: "Safari",
                safari: e
            }, _ && (t.version = _)) : c ? (t = {
                name: c == "iphone" ? "iPhone" : c == "ipad" ? "iPad" : "iPod"
            }, _ && (t.version = _)) : /googlebot/i.test(s) ? t = {
                name: "Googlebot",
                googlebot: e,
                version: n(/googlebot\/(\d+(\.\d+))/i) || _
            } : t = {
                name: n(/^(.*)\/(.*) /),
                version: v(/^(.*)\/(.*) /)
            }, !t.msedge && /(apple)?webkit/i.test(s) ? (/(apple)?webkit\/537\.36/i.test(s) ? (t.name = t.name || "Blink", t.blink = e) : (t.name = t.name || "Webkit", t.webkit = e), !t.version && _ && (t.version = _)) : !t.opera && /gecko\//i.test(s) && (t.name = t.name || "Gecko", t.gecko = e, t.version = t.version || n(/gecko\/(\d+(\.\d+)?)/i)), !t.windowsphone && (p || t.silk) ? (t.android = e, t.osname = "Android") : !t.windowsphone && c ? (t[c] = e, t.ios = e, t.osname = "iOS") : he ? (t.mac = e, t.osname = "macOS") : ye ? (t.xbox = e, t.osname = "Xbox") : pe ? (t.windows = e, t.osname = "Windows") : be && (t.linux = e, t.osname = "Linux");

            function ke($) {
                switch ($) {
                    case "NT":
                        return "NT";
                    case "XP":
                        return "XP";
                    case "NT 5.0":
                        return "2000";
                    case "NT 5.1":
                        return "XP";
                    case "NT 5.2":
                        return "2003";
                    case "NT 6.0":
                        return "Vista";
                    case "NT 6.1":
                        return "7";
                    case "NT 6.2":
                        return "8";
                    case "NT 6.3":
                        return "8.1";
                    case "NT 10.0":
                        return "10";
                    default:
                        return
                }
            }
            var R = "";
            t.windows ? R = ke(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : t.windowsphone ? R = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : t.mac ? (R = n(/Mac OS X (\d+([_\.\s]\d+)*)/i), R = R.replace(/[_\s]/g, ".")) : c ? (R = n(/os (\d+([_\s]\d+)*) like mac os x/i), R = R.replace(/[_\s]/g, ".")) : p ? R = n(/android[ \/-](\d+(\.\d+)*)/i) : t.webos ? R = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : t.blackberry ? R = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : t.bada ? R = n(/bada\/(\d+(\.\d+)*)/i) : t.tizen && (R = n(/tizen[\/\s](\d+(\.\d+)*)/i)), R && (t.osversion = R);
            var te = !t.windows && R.split(".")[0];
            return Q || k || c == "ipad" || p && (te == 3 || te >= 4 && !ee) || t.silk ? t.tablet = e : (ee || c == "iphone" || c == "ipod" || p || m || t.blackberry || t.webos || t.bada) && (t.mobile = e), t.msedge || t.msie && t.version >= 10 || t.yandexbrowser && t.version >= 15 || t.vivaldi && t.version >= 1 || t.chrome && t.version >= 20 || t.samsungBrowser && t.version >= 4 || t.whale && l([t.version, "1.0"]) === 1 || t.mzbrowser && l([t.version, "6.0"]) === 1 || t.focus && l([t.version, "1.0"]) === 1 || t.firefox && t.version >= 20 || t.safari && t.version >= 6 || t.opera && t.version >= 10 || t.ios && t.osversion && t.osversion.split(".")[0] >= 6 || t.blackberry && t.version >= 10.1 || t.chromium && t.version >= 20 ? t.a = e : t.msie && t.version < 10 || t.chrome && t.version < 20 || t.firefox && t.version < 20 || t.safari && t.version < 6 || t.opera && t.version < 10 || t.ios && t.osversion && t.osversion.split(".")[0] < 6 || t.chromium && t.version < 20 ? t.c = e : t.x = e, t
        }
        var o = d(typeof navigator < "u" && navigator.userAgent || "");
        o.test = function(s) {
            for (var n = 0; n < s.length; ++n) {
                var v = s[n];
                if (typeof v == "string" && v in o) return !0
            }
            return !1
        };

        function r(s) {
            return s.split(".").length
        }

        function a(s, n) {
            var v = [],
                c;
            if (Array.prototype.map) return Array.prototype.map.call(s, n);
            for (c = 0; c < s.length; c++) v.push(n(s[c]));
            return v
        }

        function l(s) {
            for (var n = Math.max(r(s[0]), r(s[1])), v = a(s, function(c) {
                    var b = n - r(c);
                    return c = c + new Array(b + 1).join(".0"), a(c.split("."), function(p) {
                        return new Array(20 - p.length).join("0") + p
                    }).reverse()
                }); --n >= 0;) {
                if (v[0][n] > v[1][n]) return 1;
                if (v[0][n] === v[1][n]) {
                    if (n === 0) return 0
                } else return -1
            }
        }

        function u(s, n, v) {
            var c = o;
            typeof n == "string" && (v = n, n = void 0), n === void 0 && (n = !1), v && (c = d(v));
            var b = "" + c.version;
            for (var p in s)
                if (s.hasOwnProperty(p) && c[p]) {
                    if (typeof s[p] != "string") throw new Error("Browser version in the minVersion map should be a string: " + p + ": " + String(s));
                    return l([b, s[p]]) < 0
                } return n
        }

        function f(s, n, v) {
            return !u(s, n, v)
        }
        return o.isUnsupportedBrowser = u, o.compareVersions = l, o.check = f, o._detect = d, o.detect = d, o
    })
})(me);
var Ge = me.exports;
const V = Ze(Ge);

function Ye() {
    const i = h(V.mobile || V.tablet),
        e = h(!i.value),
        d = h(V.tablet),
        o = h(V.mobile),
        r = h(V.safari),
        a = h(!1),
        l = h(!1),
        u = h(!0);
    return j(() => {
        a.value = window.devicePixelRatio > 1, l.value = window.innerHeight > window.innerWidth, u.value = window.innerWidth > window.innerHeight
    }), {
        isTouch: i,
        isDesktop: e,
        isTablet: d,
        isMobile: o,
        isSafari: r,
        isRetina: a,
        isPortrait: l,
        isLandscape: u
    }
}
var B = (i => (i.ACTION = "button-type-action", i.SUBMIT = "button-type-submit", i.LINK = "button-type-link", i.INLINE = "button-type-inline", i))(B || {}),
    C = (i => (i.INTERNAL = "link-type-internal", i.EXTERNAL = "link-type-external", i))(C || {});

function Je(i, e) {
    const d = E(() => i.value === B.ACTION),
        o = E(() => i.value === B.SUBMIT),
        r = E(() => {
            var l;
            return i.value === B.LINK && ((l = e == null ? void 0 : e.value) == null ? void 0 : l.type) === C.INTERNAL
        }),
        a = E(() => {
            var l;
            return i.value === B.LINK && ((l = e == null ? void 0 : e.value) == null ? void 0 : l.type) === C.EXTERNAL
        });
    return {
        isActionButton: d,
        isSubmitButton: o,
        isInternalLink: r,
        isExternalLink: a
    }
}
const Qe = ["href"],
    et = q({
        __name: "ButtonRenderer",
        props: {
            buttonType: {},
            label: {},
            link: {}
        },
        setup(i) {
            const e = i,
                {
                    buttonType: d,
                    link: o
                } = F(e),
                {
                    isActionButton: r,
                    isSubmitButton: a,
                    isInternalLink: l,
                    isExternalLink: u
                } = Je(d, o);
            return (f, s) => {
                var v, c;
                const n = Oe;
                return y(r) ? (x(), P("button", {
                    key: 0,
                    type: "button",
                    class: S(["button", [f.$style.buttonRenderer]])
                }, [O(f.$slots, "default")], 2)) : y(a) ? (x(), P("button", {
                    key: 1,
                    type: "submit",
                    class: S(["button", [f.$style.buttonRenderer]])
                }, [O(f.$slots, "default")], 2)) : y(l) ? (x(), z(n, {
                    key: 2,
                    class: S(["button", [f.$style.buttonRenderer]]),
                    to: (v = y(o)) == null ? void 0 : v.href
                }, {
                    default: ce(() => [O(f.$slots, "default")]),
                    _: 3
                }, 8, ["to", "class"])) : y(u) ? (x(), P("a", {
                    key: 3,
                    class: S(["button", [f.$style.buttonRenderer]]),
                    href: (c = y(o)) == null ? void 0 : c.href,
                    target: "_blank"
                }, [O(f.$slots, "default")], 10, Qe)) : (x(), P("span", {
                    key: 4,
                    class: S(["button", [f.$style.buttonRenderer]])
                }, [O(f.$slots, "default")], 2))
            }
        }
    }),
    tt = {},
    st = {
        $style: tt
    },
    nt = K(et, [
        ["__cssModules", st]
    ]);

function it(i, e, d) {
    const o = h(!1),
        {
            isDesktop: r
        } = Ye();
    j(() => {
        (d == null ? void 0 : d.value) === B.INLINE && e && Y(e, () => {
            o.value = e.value
        }, {
            immediate: !0
        }), Y(o, u => {
            var f, s;
            u ? (f = i.value) == null || f.transitionMouseEnter() : (s = i.value) == null || s.transitionMouseLeave()
        }, {
            immediate: !0
        })
    });

    function a() {
        r && (o.value = !0)
    }

    function l() {
        r && (o.value = !1)
    }
    return {
        handleMouseEnter: a,
        handleMouseLeave: l,
        isHovered: o
    }
}

function rt(i) {
    const e = l => {
            const u = i.buttonRef.$el;
            l.fromTo(u, {
                opacity: 0
            }, {
                opacity: 1,
                duration: .01
            })
        },
        d = l => {},
        a = Ce([{
            name: "transitionMouseEnter",
            setupFunction: l => {}
        }, {
            name: "transitionMouseLeave",
            setupFunction: l => {}
        }]);
    return {
        ...de(e, d),
        transitionMouseEnter: a.transitionMouseEnter,
        transitionMouseLeave: a.transitionMouseLeave
    }
}
const ot = q({
        __name: "PrimaryLink",
        props: {
            buttonType: {},
            isHoveredInParent: {
                type: Boolean
            },
            link: {},
            icon: {},
            label: {}
        },
        setup(i, {
            expose: e
        }) {
            const d = i,
                {
                    buttonType: o,
                    link: r,
                    isHoveredInParent: a,
                    icon: l,
                    label: u
                } = F(d),
                f = h(null),
                s = h(null),
                n = h(null),
                v = h();
            j(() => {
                c()
            });

            function c() {
                const k = {
                    buttonRef: n.value
                };
                f.value = rt(k)
            }
            const {
                handleMouseEnter: b,
                handleMouseLeave: p,
                isHovered: m
            } = it(f, a, o);
            return e({
                motion: f
            }), (k, M) => (x(), z(nt, {
                ref_key: "buttonRef",
                ref: n,
                "button-type": y(o),
                link: y(r),
                class: S([k.$style.primaryLink, {
                    [k.$style.isHovered]: y(m)
                }]),
                onMouseenter: y(b),
                onMouseleave: y(p)
            }, {
                default: ce(() => [y(u) ? (x(), P("span", {
                    key: 0,
                    ref_key: "title",
                    ref: s,
                    class: "label-02"
                }, fe(y(u)), 513)) : J("", !0), y(l) ? (x(), z(Xe, {
                    key: 1,
                    ref_key: "iconRef",
                    ref: v,
                    name: y(l),
                    class: S([k.$style.icon])
                }, null, 8, ["name", "class"])) : J("", !0)]),
                _: 1
            }, 8, ["button-type", "link", "class", "onMouseenter", "onMouseleave"]))
        }
    }),
    at = "_primaryLink_1y6d4_9",
    lt = "_icon_1y6d4_15",
    ut = {
        primaryLink: at,
        icon: lt
    },
    ct = {
        $style: ut
    },
    H = K(ot, [
        ["__cssModules", ct]
    ]);

function dt(i) {
    return de(o => {
        const {
            titleRef: r,
            subTitleRef: a
        } = i, l = i.primaryLinkRef, u = i.secondaryLinkRef, f = i.tertiaryLinkRef;
        o.fromTo([r, a], {
            opacity: 0
        }, {
            opacity: 1,
            duration: .01,
            stagger: .2
        }), l && o.add(l.motion.transitionIn(), .2), u && o.add(u.motion.transitionIn(), .4), f && o.add(f.motion.transitionIn(), .6)
    }, o => {})
}
const ft = q({
        __name: "LeadingSection",
        props: {
            isLinkVisible: {
                type: Boolean
            },
            isTransitioningWithScrollTrigger: {
                type: Boolean
            }
        },
        setup(i, {
            expose: e
        }) {
            const d = i,
                o = h(null),
                r = h(null),
                a = h(null),
                l = h(null),
                u = h(null),
                f = h(null),
                s = h(null),
                n = h(null),
                v = h(!1),
                {
                    isLinkVisible: c,
                    isTransitioningWithScrollTrigger: b
                } = F(d);
            j(() => {
                p(), b.value && (n.value = je(r.value, {
                    start: "top bottom",
                    onEnter: () => {
                        var m;
                        v.value || ((m = o.value) == null || m.transitionIn(), v.value = !0)
                    }
                }))
            });

            function p() {
                const m = {
                    titleRef: a.value,
                    subTitleRef: l.value,
                    primaryLinkRef: u.value,
                    secondaryLinkRef: f.value,
                    tertiaryLinkRef: s.value
                };
                o.value = dt(m)
            }
            return e({
                motion: o
            }), (m, k) => (x(), P("div", {
                ref_key: "mainElementRef",
                ref: r,
                class: S([m.$style.leadingSection])
            }, [D("h1", {
                ref_key: "titleRef",
                ref: a,
                class: S(["label-01", [m.$style.heading]])
            }, k[0] || (k[0] = [W("WRK,"), D("br", null, null, -1), W("Inc.")]), 2), D("p", {
                ref_key: "subTitleRef",
                ref: l,
                class: S(["label-01", [m.$style.paragraph]])
            }, [W("Copyright 2025"), k[1] || (k[1] = D("br", null, null, -1)), k[2] || (k[2] = W("All Rights Reserved"))], 2), y(c) ? (x(), P("div", {
                key: 0,
                class: S([m.$style.linksWrapper])
            }, [X(H, {
                ref_key: "primaryLinkRef",
                ref: u,
                label: "work",
                "button-type": y(B).LINK,
                icon: "link",
                class: S([m.$style.link]),
                link: {
                    type: y(C).EXTERNAL,
                    href: "#"
                }
            }, null, 8, ["button-type", "class", "link"]), X(H, {
                ref_key: "secondaryLinkRef",
                ref: f,
                label: "studio",
                "button-type": y(B).LINK,
                icon: "link",
                class: S([m.$style.link]),
                link: {
                    type: y(C).EXTERNAL,
                    href: "#"
                }
            }, null, 8, ["button-type", "class", "link"]), X(H, {
                ref_key: "tertiaryLinkRef",
                ref: s,
                label: "@wrk",
                "button-type": y(B).LINK,
                class: S([m.$style.link]),
                link: {
                    type: y(C).EXTERNAL,
                    href: "#"
                }
            }, null, 8, ["button-type", "class", "link"])], 2)) : J("", !0)], 2))
        }
    }),
    vt = "_leadingSection_l3e9k_9",
    mt = "_heading_l3e9k_16",
    pt = "_paragraph_l3e9k_20",
    ht = "_linksWrapper_l3e9k_25",
    bt = "_link_l3e9k_25",
    yt = {
        leadingSection: vt,
        heading: mt,
        paragraph: pt,
        linksWrapper: ht,
        link: bt
    },
    kt = {
        $style: yt
    },
    _t = K(ft, [
        ["__cssModules", kt]
    ]);
export {
    B,
    Xe as I,
    _t as L,
    H as P,
    Ye as a,
    it as b,
    He as c,
    C as d,
    Ze as g,
    je as u
};
