var Oe = Object.defineProperty;
var ze = (d, e, i) => e in d ? Oe(d, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: i
}) : d[e] = i;
var Y = (d, e, i) => ze(d, typeof e != "symbol" ? e + "" : e, i);
import {
    e as ee,
    r as M,
    p as J,
    N as Ae,
    k as q,
    n as fe,
    Z as _e,
    Y as ge,
    a as Te,
    q as I,
    A as ie,
    v as C,
    B as me,
    s as U,
    l as X,
    j as x,
    _ as ne,
    o as be,
    G as Q,
    a4 as he,
    E as Ee,
    f as ce,
    F as Ne,
    C as Ie,
    D as ye,
    x as $e,
    y as De
} from "./Bop2QIaf.js";
import {
    P as de,
    B as ue,
    d as pe,
    g as We,
    L as He
} from "./CX8efwyP.js";
const Be = Symbol.for("nuxt:client-only"),
    Fe = ee({
        name: "ClientOnly",
        inheritAttrs: !1,
        props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
        setup(d, {
            slots: e,
            attrs: i
        }) {
            const n = M(!1);
            return J(() => {
                n.value = !0
            }), Ae(Be, !0), s => {
                var m;
                if (n.value) return (m = e.default) == null ? void 0 : m.call(e);
                const c = e.fallback || e.placeholder;
                if (c) return c();
                const v = s.fallback || s.placeholder || "",
                    b = s.fallbackTag || s.placeholderTag || "span";
                return q(b, i, v)
            }
        }
    });

function Ye(d) {
    return fe(n => {
        const {
            titleRef: s,
            subTitleRef: c
        } = d, v = d.primaryLinkRef, b = d.secondaryLinkRef, m = d.tertiaryLinkRef;
        n.fromTo([s, c], {
            opacity: 0
        }, {
            opacity: 1,
            duration: .01,
            stagger: .1
        }), n.add(v.motion.transitionIn(), .4), n.add(b.motion.transitionIn(), .6), n.add(m.motion.transitionIn(), .8)
    }, n => {})
}
const Xe = ee({
        __name: "SiteHeader",
        setup(d, {
            expose: e
        }) {
            const i = M(null),
                n = M(null),
                s = M(null),
                c = M(null),
                v = M(null),
                b = M(null),
                {
                    isSitePreloaderDone: m
                } = _e(ge());
            J(() => {
                S(), Te(m, y => {
                    var _;
                    y && ((_ = i.value) == null || _.transitionIn())
                })
            });

            function S() {
                const y = {
                    titleRef: v.value,
                    subTitleRef: b.value,
                    primaryLinkRef: n.value,
                    secondaryLinkRef: s.value,
                    tertiaryLinkRef: c.value
                };
                i.value = Ye(y)
            }
            return e({
                motion: i
            }), (y, _) => (x(), q("div", {
                class: C([y.$style.siteHeader])
            }, [I("h1", {
                ref_key: "titleRef",
                ref: v,
                class: C(["label-01", [y.$style.heading]])
            }, _[0] || (_[0] = [ie(" WRK, "), I("br", null, null, -1), ie("Inc.  ")]), 2), I("p", {
                ref_key: "subTitleRef",
                ref: b,
                class: C(["label-01", [y.$style.paragraph]])
            }, [ie(" Copyright " + me(new Date().getFullYear()), 1), _[1] || (_[1] = I("br", null, null, -1)), _[2] || (_[2] = ie(" All Rights Reserved "))], 2), I("div", {
                class: C([y.$style.linksWrapper])
            }, [U(de, {
                ref_key: "primaryLinkRef",
                ref: n,
                label: "blog",
                "button-type": X(ue).LINK,
                icon: "link",
                class: C([y.$style.link]),
                link: {
                    type: X(pe).EXTERNAL,
                    href: "https://blog.mainfra.me/"
                }
            }, null, 8, ["button-type", "class", "link"]), U(de, {
                ref_key: "secondaryLinkRef",
                ref: s,
                label: "careers",
                "button-type": X(ue).LINK,
                icon: "link",
                class: C([y.$style.link]),
                link: {
                    type: X(pe).EXTERNAL,
                    href: "https://join-mainframe.notion.site/"
                }
            }, null, 8, ["button-type", "class", "link"]), U(de, {
                ref_key: "tertiaryLinkRef",
                ref: c,
                label: "@mainframe",
                "button-type": X(ue).LINK,
                class: C([y.$style.link]),
                link: {
                    type: X(pe).EXTERNAL,
                    href: "https://x.com/mainframe"
                }
            }, null, 8, ["button-type", "class", "link"])], 2)], 2))
        }
    }),
    je = "_siteHeader_1bs6g_9",
    qe = "_heading_1bs6g_18",
    Ue = "_paragraph_1bs6g_24",
    xe = "_linksWrapper_1bs6g_30",
    Ve = "_link_1bs6g_30",
    Ge = {
        siteHeader: je,
        heading: qe,
        paragraph: Ue,
        linksWrapper: xe,
        link: Ve
    },
    Ke = {
        $style: Ge
    },
    Je = ne(Xe, [
        ["__cssModules", Ke]
    ]),
    we = {
        ASSETS_READY: "assetsReady"
    };

function Re(d, e, i) {
    return Math.max(d, Math.min(e, i))
}
class Ze {
    advance(e) {
        var b;
        if (!this.isRunning) return;
        let i = !1;
        if (this.lerp) this.value = (n = this.value, s = this.to, c = 60 * this.lerp, v = e, function(m, S, y) {
            return (1 - y) * m + y * S
        }(n, s, 1 - Math.exp(-c * v))), Math.round(this.value) === this.to && (this.value = this.to, i = !0);
        else {
            this.currentTime += e;
            const m = Re(0, this.currentTime / this.duration, 1);
            i = m >= 1;
            const S = i ? 1 : this.easing(m);
            this.value = this.from + (this.to - this.from) * S
        }
        var n, s, c, v;
        (b = this.onUpdate) == null || b.call(this, this.value, i), i && this.stop()
    }
    stop() {
        this.isRunning = !1
    }
    fromTo(e, i, {
        lerp: n = .1,
        duration: s = 1,
        easing: c = m => m,
        onStart: v,
        onUpdate: b
    }) {
        this.from = this.value = e, this.to = i, this.lerp = n, this.duration = s, this.easing = c, this.currentTime = 0, this.isRunning = !0, v == null || v(), this.onUpdate = b
    }
}
class Qe {
    constructor({
        wrapper: e,
        content: i,
        autoResize: n = !0,
        debounce: s = 250
    } = {}) {
        Y(this, "resize", () => {
            this.onWrapperResize(), this.onContentResize()
        });
        Y(this, "onWrapperResize", () => {
            this.wrapper === window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight)
        });
        Y(this, "onContentResize", () => {
            this.wrapper === window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth)
        });
        this.wrapper = e, this.content = i, n && (this.debouncedResize = function(c, v) {
            let b;
            return function() {
                let m = arguments,
                    S = this;
                clearTimeout(b), b = setTimeout(function() {
                    c.apply(S, m)
                }, v)
            }
        }(this.resize, s), this.wrapper === window ? window.addEventListener("resize", this.debouncedResize, !1) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize()
    }
    destroy() {
        var e, i;
        (e = this.wrapperResizeObserver) == null || e.disconnect(), (i = this.contentResizeObserver) == null || i.disconnect(), window.removeEventListener("resize", this.debouncedResize, !1)
    }
    get limit() {
        return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height
        }
    }
}
class Le {
    constructor() {
        this.events = {}
    }
    emit(e, ...i) {
        let n = this.events[e] || [];
        for (let s = 0, c = n.length; s < c; s++) n[s](...i)
    }
    on(e, i) {
        var n;
        return (n = this.events[e]) != null && n.push(i) || (this.events[e] = [i]), () => {
            var s;
            this.events[e] = (s = this.events[e]) == null ? void 0 : s.filter(c => i !== c)
        }
    }
    off(e, i) {
        var n;
        this.events[e] = (n = this.events[e]) == null ? void 0 : n.filter(s => i !== s)
    }
    destroy() {
        this.events = {}
    }
}
const Se = 100 / 6;
class et {
    constructor(e, {
        wheelMultiplier: i = 1,
        touchMultiplier: n = 1
    }) {
        Y(this, "onTouchStart", e => {
            const {
                clientX: i,
                clientY: n
            } = e.targetTouches ? e.targetTouches[0] : e;
            this.touchStart.x = i, this.touchStart.y = n, this.lastDelta = {
                x: 0,
                y: 0
            }, this.emitter.emit("scroll", {
                deltaX: 0,
                deltaY: 0,
                event: e
            })
        });
        Y(this, "onTouchMove", e => {
            const {
                clientX: i,
                clientY: n
            } = e.targetTouches ? e.targetTouches[0] : e, s = -(i - this.touchStart.x) * this.touchMultiplier, c = -(n - this.touchStart.y) * this.touchMultiplier;
            this.touchStart.x = i, this.touchStart.y = n, this.lastDelta = {
                x: s,
                y: c
            }, this.emitter.emit("scroll", {
                deltaX: s,
                deltaY: c,
                event: e
            })
        });
        Y(this, "onTouchEnd", e => {
            this.emitter.emit("scroll", {
                deltaX: this.lastDelta.x,
                deltaY: this.lastDelta.y,
                event: e
            })
        });
        Y(this, "onWheel", e => {
            let {
                deltaX: i,
                deltaY: n,
                deltaMode: s
            } = e;
            i *= s === 1 ? Se : s === 2 ? this.windowWidth : 1, n *= s === 1 ? Se : s === 2 ? this.windowHeight : 1, i *= this.wheelMultiplier, n *= this.wheelMultiplier, this.emitter.emit("scroll", {
                deltaX: i,
                deltaY: n,
                event: e
            })
        });
        Y(this, "onWindowResize", () => {
            this.windowWidth = window.innerWidth, this.windowHeight = window.innerHeight
        });
        this.element = e, this.wheelMultiplier = i, this.touchMultiplier = n, this.touchStart = {
            x: null,
            y: null
        }, this.emitter = new Le, window.addEventListener("resize", this.onWindowResize, !1), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, {
            passive: !1
        }), this.element.addEventListener("touchstart", this.onTouchStart, {
            passive: !1
        }), this.element.addEventListener("touchmove", this.onTouchMove, {
            passive: !1
        }), this.element.addEventListener("touchend", this.onTouchEnd, {
            passive: !1
        })
    }
    on(e, i) {
        return this.emitter.on(e, i)
    }
    destroy() {
        this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize, !1), this.element.removeEventListener("wheel", this.onWheel, {
            passive: !1
        }), this.element.removeEventListener("touchstart", this.onTouchStart, {
            passive: !1
        }), this.element.removeEventListener("touchmove", this.onTouchMove, {
            passive: !1
        }), this.element.removeEventListener("touchend", this.onTouchEnd, {
            passive: !1
        })
    }
}
class tt {
    constructor({
        wrapper: e = window,
        content: i = document.documentElement,
        wheelEventsTarget: n = e,
        eventsTarget: s = n,
        smoothWheel: c = !0,
        syncTouch: v = !1,
        syncTouchLerp: b = .075,
        touchInertiaMultiplier: m = 35,
        duration: S,
        easing: y = R => Math.min(1, 1.001 - Math.pow(2, -10 * R)),
        lerp: _ = !S && .1,
        infinite: z = !1,
        orientation: O = "vertical",
        gestureOrientation: L = "vertical",
        touchMultiplier: o = 1,
        wheelMultiplier: p = 1,
        autoResize: h = !0,
        __experimental__naiveDimensions: E = !1
    } = {}) {
        this.__isSmooth = !1, this.__isScrolling = !1, this.__isStopped = !1, this.__isLocked = !1, this.onVirtualScroll = ({
            deltaX: R,
            deltaY: P,
            event: A
        }) => {
            if (A.ctrlKey) return;
            const W = A.type.includes("touch"),
                j = A.type.includes("wheel");
            if (this.options.syncTouch && W && A.type === "touchstart" && !this.isStopped && !this.isLocked) return void this.reset();
            const V = R === 0 && P === 0,
                G = this.options.gestureOrientation === "vertical" && P === 0 || this.options.gestureOrientation === "horizontal" && R === 0;
            if (V || G) return;
            let $ = A.composedPath();
            if ($ = $.slice(0, $.indexOf(this.rootElement)), $.find(l => {
                    var g, k, u, a, r;
                    return ((g = l.hasAttribute) === null || g === void 0 ? void 0 : g.call(l, "data-lenis-prevent")) || W && ((k = l.hasAttribute) === null || k === void 0 ? void 0 : k.call(l, "data-lenis-prevent-touch")) || j && ((u = l.hasAttribute) === null || u === void 0 ? void 0 : u.call(l, "data-lenis-prevent-wheel")) || ((a = l.classList) === null || a === void 0 ? void 0 : a.contains("lenis")) && !(!((r = l.classList) === null || r === void 0) && r.contains("lenis-stopped"))
                })) return;
            if (this.isStopped || this.isLocked) return void A.preventDefault();
            if (this.isSmooth = this.options.syncTouch && W || this.options.smoothWheel && j, !this.isSmooth) return this.isScrolling = !1, void this.animate.stop();
            A.preventDefault();
            let N = P;
            this.options.gestureOrientation === "both" ? N = Math.abs(P) > Math.abs(R) ? P : R : this.options.gestureOrientation === "horizontal" && (N = R);
            const D = W && this.options.syncTouch,
                t = W && A.type === "touchend" && Math.abs(N) > 5;
            t && (N = this.velocity * this.options.touchInertiaMultiplier), this.scrollTo(this.targetScroll + N, Object.assign({
                programmatic: !1
            }, D ? {
                lerp: t ? this.options.syncTouchLerp : 1
            } : {
                lerp: this.options.lerp,
                duration: this.options.duration,
                easing: this.options.easing
            }))
        }, this.onNativeScroll = () => {
            if (!this.__preventNextScrollEvent && !this.isScrolling) {
                const R = this.animatedScroll;
                this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0, this.direction = Math.sign(this.animatedScroll - R), this.emit()
            }
        }, window.lenisVersion = "1.0.42", e !== document.documentElement && e !== document.body || (e = window), this.options = {
            wrapper: e,
            content: i,
            wheelEventsTarget: n,
            eventsTarget: s,
            smoothWheel: c,
            syncTouch: v,
            syncTouchLerp: b,
            touchInertiaMultiplier: m,
            duration: S,
            easing: y,
            lerp: _,
            infinite: z,
            gestureOrientation: L,
            orientation: O,
            touchMultiplier: o,
            wheelMultiplier: p,
            autoResize: h,
            __experimental__naiveDimensions: E
        }, this.animate = new Ze, this.emitter = new Le, this.dimensions = new Qe({
            wrapper: e,
            content: i,
            autoResize: h
        }), this.toggleClassName("lenis", !0), this.velocity = 0, this.isLocked = !1, this.isStopped = !1, this.isSmooth = v || c, this.isScrolling = !1, this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1), this.virtualScroll = new et(s, {
            touchMultiplier: o,
            wheelMultiplier: p
        }), this.virtualScroll.on("scroll", this.onVirtualScroll)
    }
    destroy() {
        this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, !1), this.virtualScroll.destroy(), this.dimensions.destroy(), this.toggleClassName("lenis", !1), this.toggleClassName("lenis-smooth", !1), this.toggleClassName("lenis-scrolling", !1), this.toggleClassName("lenis-stopped", !1), this.toggleClassName("lenis-locked", !1)
    }
    on(e, i) {
        return this.emitter.on(e, i)
    }
    off(e, i) {
        return this.emitter.off(e, i)
    }
    setScroll(e) {
        this.isHorizontal ? this.rootElement.scrollLeft = e : this.rootElement.scrollTop = e
    }
    resize() {
        this.dimensions.resize()
    }
    emit() {
        this.emitter.emit("scroll", this)
    }
    reset() {
        this.isLocked = !1, this.isScrolling = !1, this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0, this.animate.stop()
    }
    start() {
        this.isStopped && (this.isStopped = !1, this.reset())
    }
    stop() {
        this.isStopped || (this.isStopped = !0, this.animate.stop(), this.reset())
    }
    raf(e) {
        const i = e - (this.time || e);
        this.time = e, this.animate.advance(.001 * i)
    }
    scrollTo(e, {
        offset: i = 0,
        immediate: n = !1,
        lock: s = !1,
        duration: c = this.options.duration,
        easing: v = this.options.easing,
        lerp: b = !c && this.options.lerp,
        onComplete: m,
        force: S = !1,
        programmatic: y = !0
    } = {}) {
        if (!this.isStopped && !this.isLocked || S) {
            if (["top", "left", "start"].includes(e)) e = 0;
            else if (["bottom", "right", "end"].includes(e)) e = this.limit;
            else {
                let _;
                if (typeof e == "string" ? _ = document.querySelector(e) : e != null && e.nodeType && (_ = e), _) {
                    if (this.options.wrapper !== window) {
                        const O = this.options.wrapper.getBoundingClientRect();
                        i -= this.isHorizontal ? O.left : O.top
                    }
                    const z = _.getBoundingClientRect();
                    e = (this.isHorizontal ? z.left : z.top) + this.animatedScroll
                }
            }
            if (typeof e == "number") {
                if (e += i, e = Math.round(e), this.options.infinite ? y && (this.targetScroll = this.animatedScroll = this.scroll) : e = Re(0, e, this.limit), n) return this.animatedScroll = this.targetScroll = e, this.setScroll(this.scroll), this.reset(), void(m == null || m(this));
                if (!y) {
                    if (e === this.targetScroll) return;
                    this.targetScroll = e
                }
                this.animate.fromTo(this.animatedScroll, e, {
                    duration: c,
                    easing: v,
                    lerp: b,
                    onStart: () => {
                        s && (this.isLocked = !0), this.isScrolling = !0
                    },
                    onUpdate: (_, z) => {
                        this.isScrolling = !0, this.velocity = _ - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = _, this.setScroll(this.scroll), y && (this.targetScroll = _), z || this.emit(), z && (this.reset(), this.emit(), m == null || m(this), this.__preventNextScrollEvent = !0, requestAnimationFrame(() => {
                            delete this.__preventNextScrollEvent
                        }))
                    }
                })
            }
        }
    }
    get rootElement() {
        return this.options.wrapper === window ? document.documentElement : this.options.wrapper
    }
    get limit() {
        return this.options.__experimental__naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"]
    }
    get isHorizontal() {
        return this.options.orientation === "horizontal"
    }
    get actualScroll() {
        return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop
    }
    get scroll() {
        return this.options.infinite ? (e = this.animatedScroll, i = this.limit, (e % i + i) % i) : this.animatedScroll;
        var e, i
    }
    get progress() {
        return this.limit === 0 ? 1 : this.scroll / this.limit
    }
    get isSmooth() {
        return this.__isSmooth
    }
    set isSmooth(e) {
        this.__isSmooth !== e && (this.__isSmooth = e, this.toggleClassName("lenis-smooth", e))
    }
    get isScrolling() {
        return this.__isScrolling
    }
    set isScrolling(e) {
        this.__isScrolling !== e && (this.__isScrolling = e, this.toggleClassName("lenis-scrolling", e))
    }
    get isStopped() {
        return this.__isStopped
    }
    set isStopped(e) {
        this.__isStopped !== e && (this.__isStopped = e, this.toggleClassName("lenis-stopped", e))
    }
    get isLocked() {
        return this.__isLocked
    }
    set isLocked(e) {
        this.__isLocked !== e && (this.__isLocked = e, this.toggleClassName("lenis-locked", e))
    }
    get className() {
        let e = "lenis";
        return this.isStopped && (e += " lenis-stopped"), this.isLocked && (e += " lenis-locked"), this.isScrolling && (e += " lenis-scrolling"), this.isSmooth && (e += " lenis-smooth"), e
    }
    toggleClassName(e, i) {
        this.rootElement.classList.toggle(e, i), this.emitter.emit("className change", this)
    }
}

function it() {
    const d = M();

    function e(n) {
        d.value && d.value.raf(n * 1e3)
    }

    function i(n, s, c = n) {
        d.value = new tt({
            wrapper: n || window,
            content: s || document.documentElement,
            eventsTarget: c || window
        }), d.value.on("scroll", he.update), Q.ticker.add(e), Q.ticker.lagSmoothing(0), Q.registerPlugin(he), s && he.scrollerProxy(s, {
            scrollTop(v) {
                return arguments.length && (s.scrollTop = v || 0), s.scrollTop
            },
            scrollHeight: () => s.scrollHeight
        })
    }
    return be(() => {
        Q.ticker.remove(e)
    }), {
        scrollRef: d,
        initSmoothScroll: i
    }
}

function st(d) {
    return fe(n => {
        const {
            borderRef: s
        } = d;
        n.fromTo(s, {
            opacity: 0
        }, {
            opacity: 1,
            duration: .45,
            ease: "power3.out"
        }, .15)
    }, n => {})
}
const nt = ee({
        __name: "FrameBorder",
        emits: Object.values([we.ASSETS_READY]),
        setup(d, {
            expose: e,
            emit: i
        }) {
            const n = i,
                s = M(null);
            M(null);
            const c = ge(),
                {
                    setMainScrollRef: v,
                    destroyMainScroll: b,
                    setFrameHeight: m,
                    setHasUserScrolled: S
                } = c,
                {
                    scrollRef: y,
                    initSmoothScroll: _
                } = it(),
                z = M(null),
                O = M(null),
                L = M(null),
                o = M(null);
            be(() => {
                b()
            }), J(() => {
                p(), _(O.value, o.value, window), y.value && (y.value.on("scroll", () => {
                    S(!0)
                }), v(y.value))
            });

            function p() {
                const t = {
                    borderRef: z.value
                };
                s.value = st(t)
            }
            e({
                motion: s
            });
            const h = M(null),
                E = M(null),
                R = (window == null ? void 0 : window.devicePixelRatio) || 1;

            function P(t) {
                return t * R
            }

            function A(t, l, g = 30) {
                (t[0] > l[0] || t[0] === l[0] && t[1] > l[1]) && ([t, l] = [l, t]);
                const k = l[0] - t[0],
                    u = l[1] - t[1],
                    a = Math.sqrt(k ** 2 + u ** 2),
                    r = Math.atan2(u, k),
                    f = g * 2,
                    w = Math.max(0, a + f);
                return {
                    desiredAngle: r,
                    overshoot: f,
                    length: a,
                    desiredLength: w
                }
            }

            function W(t) {
                t.width = P(window.innerWidth), t.height = P(window.innerHeight)
            }

            function j() {
                const t = document.querySelector("canvas");
                return W(h.value), t
            }

            function V(t, l, g, k, u) {
                const [a, r] = k, f = l - a, w = g - r, T = f - u, K = w - u;
                return t.moveTo(a + u, r), t.lineTo(T, r), t.quadraticCurveTo(f, r, f, r + u), t.lineTo(f, K), t.quadraticCurveTo(f, w, T, w), t.lineTo(a + u, w), t.quadraticCurveTo(a, w, a, K), t.lineTo(a, r + u), t.quadraticCurveTo(a, r, a + u, r), t
            }

            function G(t, l, g = 30, k) {
                let u, a;
                const r = A([0, 0], l, g),
                    f = r.overshoot * Math.cos(r.desiredAngle + Math.PI),
                    w = r.overshoot * Math.sin(r.desiredAngle + Math.PI);
                return t.moveTo(f, w), u = r.desiredLength * Math.cos(r.desiredAngle), a = r.desiredLength * Math.sin(r.desiredAngle), t.lineTo(u, a), u = k - r.desiredLength * Math.cos(r.desiredAngle), t.lineTo(u, a), u = u - (r.desiredLength + r.overshoot) * Math.cos(r.desiredAngle + Math.PI), a = a + (r.desiredLength + r.overshoot) * Math.sin(r.desiredAngle + Math.PI), t.lineTo(u, a), t
            }

            function $(t, l, g = 30, k, u) {
                let a, r;
                const f = A([0, 0], l, g),
                    w = f.overshoot * Math.cos(f.desiredAngle + Math.PI),
                    T = f.overshoot * Math.sin(f.desiredAngle + Math.PI);
                return t.moveTo(w, T), a = f.desiredLength * Math.cos(f.desiredAngle), r = f.desiredLength * Math.sin(f.desiredAngle), t.lineTo(a, r), r = u - f.desiredLength * Math.sin(f.desiredAngle), t.lineTo(a, r), a = w, r = r - (f.desiredLength + f.overshoot) * Math.sin(f.desiredAngle - Math.PI / 2), t.lineTo(a, r), t
            }

            function N(t, l, g, k, u) {
                const a = [P(k), P(u)],
                    r = P(12),
                    f = 1,
                    w = 30,
                    T = 30,
                    K = "#b0aba5",
                    Me = "#958066",
                    Ce = 0,
                    ve = 2;
                let oe = new Path2D;
                oe = V(oe, l, g, a, r), oe.closePath();
                let H = new Path2D;
                H.rect(-100, -100, l + 100, g + 100), H = V(H, l, g, a, r), H.closePath(), t.save();

                function le() {
                    return "filter" in CanvasRenderingContext2D.prototype
                }
                const re = B => (le() && (B.filter = `blur(${T}px)`), B);
                t.fillStyle = K, t.shadowColor = `rgba(47,47,47, ${f/2})`, t.shadowBlur = w, t.shadowOffsetX = 4, t.shadowOffsetY = 12, t.lineWidth = Ce, t.strokeStyle = Me, t.stroke(H, "evenodd"), t.fill(H, "evenodd"), t.fillStyle = K, t.shadowColor = `rgba(47,47,47, ${f/3})`, t.shadowBlur = w * 3, t.shadowOffsetX = 4, t.shadowOffsetY = 12, t.fill(H, "evenodd"), t.fillStyle = K, t.shadowColor = `rgba(47,47,47, ${f/3})`, t.shadowBlur = w / 6, t.shadowOffsetX = 2, t.shadowOffsetY = 6, t.fill(H, "evenodd");
                const te = document.createElement("canvas"),
                    Pe = te.getContext("2d");
                if (te.width = 256, te.height = 256, t.restore(), Pe.drawImage(E.value, 0, 0, 256 * ve, 256 * ve), t.fillStyle = t.createPattern(te, "repeat"), t.fill(H, "evenodd"), le()) {
                    let B = new Path2D;
                    t.fillStyle = "rgba(71,66,61,0.4)", B = G(B, a, T, l), B.closePath(), t = re(t), t.clip(H, "evenodd"), t.fill(B, "evenodd");
                    let F = new Path2D;
                    t.fillStyle = "rgba(71,66,61,0.2)", F = $(F, a, T, l, g), F.closePath(), t = re(t), t.fill(F, "evenodd");
                    let ae = new Path2D;
                    t.fillStyle = "rgba(245,240,245,0.3)", ae = G(ae, a, T, l), F.closePath(), t.translate(l, g), t.scale(-1, -1), t = re(t), t.fill(ae, "evenodd")
                }
                if (!le()) {
                    const B = "image/frameFallback.jpg",
                        F = new Image({
                            src: B
                        });
                    F.src = B, F.onload = () => {
                        t.clip(H, "evenodd"), t.drawImage(F, 0, 0, l, g)
                    }, t.restore()
                }
            }

            function D(t = null) {
                var w;
                let l;
                const g = (w = O.value) == null ? void 0 : w.getBoundingClientRect(),
                    k = g.left,
                    u = g.top;
                t ? (W(t), l = t) : l = j();
                const a = l.getContext("2d"),
                    r = l.width,
                    f = l.height;
                return a.save(), N(a, r, f, k, u), l
            }
            return J(() => {
                var l;
                E.value = new Image, E.value.src = "/image/device-texture.webp", E.value.onload = () => {
                    h.value && D(), n(we.ASSETS_READY)
                }, m((l = L.value) == null ? void 0 : l.getBoundingClientRect().height);
                const t = () => {
                    var g;
                    h.value && (D(h.value), m((g = L.value) == null ? void 0 : g.getBoundingClientRect().height))
                };
                window.addEventListener("resize", t)
            }), (t, l) => (x(), q("div", {
                ref_key: "borderRef",
                ref: z,
                class: C(["abs-fill", [t.$style.frameBorder]])
            }, [I("div", {
                class: C([t.$style.logo])
            }, null, 2), I("canvas", {
                id: "deviceFrame",
                ref_key: "deviceFrame",
                ref: h,
                class: C([t.$style.canvas])
            }, null, 2), I("div", {
                ref_key: "outerRef",
                ref: L,
                class: C(t.$style.outer)
            }, [U(Je, {
                ref: "siteHeaderRef",
                class: C([t.$style.siteHeader])
            }, null, 8, ["class"]), I("div", {
                ref_key: "innerRef",
                ref: O,
                class: C(t.$style.inner)
            }, [I("div", {
                ref_key: "contentRef",
                ref: o,
                class: C([t.$style.content])
            }, [Ee(t.$slots, "default")], 2)], 2)], 2)], 2))
        }
    }),
    ot = "_frameBorder_1h08d_9",
    lt = "_siteHeader_1h08d_16",
    rt = "_outer_1h08d_24",
    at = "_inner_1h08d_32",
    ht = "_canvas_1h08d_42",
    ct = "_logo_1h08d_52",
    dt = {
        frameBorder: ot,
        siteHeader: lt,
        outer: rt,
        inner: at,
        canvas: ht,
        logo: ct
    },
    ut = {
        $style: dt
    },
    pt = ne(nt, [
        ["__cssModules", ut]
    ]),
    se = {
        PRELOADING_COMPLETE: "preloadingComplete",
        TRANSITION_OUT_COMPLETE: "transitionOutComplete"
    },
    mt = {
        PRELOADER_OUT: .01
    };

function ft(d) {
    return fe(n => {
        const {
            progressRef: s
        } = d;
        n.fromTo(s, {
            opacity: 0
        }, {
            opacity: 1,
            ease: "power3.out",
            duration: .5
        }, .07)
    }, n => {
        const {
            sitePreloaderRef: s
        } = d;
        n.to(s, {
            duration: mt.PRELOADER_OUT,
            autoAlpha: 0
        })
    })
}
var ke = {
    exports: {}
};
(function(d) {
    (function() {
        function e(o, p) {
            document.addEventListener ? o.addEventListener("scroll", p, !1) : o.attachEvent("scroll", p)
        }

        function i(o) {
            document.body ? o() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function p() {
                document.removeEventListener("DOMContentLoaded", p), o()
            }) : document.attachEvent("onreadystatechange", function p() {
                (document.readyState == "interactive" || document.readyState == "complete") && (document.detachEvent("onreadystatechange", p), o())
            })
        }

        function n(o) {
            this.g = document.createElement("div"), this.g.setAttribute("aria-hidden", "true"), this.g.appendChild(document.createTextNode(o)), this.h = document.createElement("span"), this.i = document.createElement("span"), this.m = document.createElement("span"), this.j = document.createElement("span"), this.l = -1, this.h.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.i.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.j.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;", this.m.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;", this.h.appendChild(this.m), this.i.appendChild(this.j), this.g.appendChild(this.h), this.g.appendChild(this.i)
        }

        function s(o, p) {
            o.g.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" + p + ";"
        }

        function c(o) {
            var p = o.g.offsetWidth,
                h = p + 100;
            return o.j.style.width = h + "px", o.i.scrollLeft = h, o.h.scrollLeft = o.h.scrollWidth + 100, o.l !== p ? (o.l = p, !0) : !1
        }

        function v(o, p) {
            function h() {
                var R = E;
                c(R) && R.g.parentNode !== null && p(R.l)
            }
            var E = o;
            e(o.h, h), e(o.i, h), c(o)
        }

        function b(o, p, h) {
            p = p || {}, h = h || window, this.family = o, this.style = p.style || "normal", this.weight = p.weight || "normal", this.stretch = p.stretch || "normal", this.context = h
        }
        var m = null,
            S = null,
            y = null,
            _ = null;

        function z(o) {
            return S === null && (O(o) && /Apple/.test(window.navigator.vendor) ? (o = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent), S = !!o && 603 > parseInt(o[1], 10)) : S = !1), S
        }

        function O(o) {
            return _ === null && (_ = !!o.document.fonts), _
        }

        function L(o, p) {
            var h = o.style,
                E = o.weight;
            if (y === null) {
                var R = document.createElement("div");
                try {
                    R.style.font = "condensed 100px sans-serif"
                } catch {}
                y = R.style.font !== ""
            }
            return [h, E, y ? o.stretch : "", "100px", p].join(" ")
        }
        b.prototype.load = function(o, p) {
            var h = this,
                E = o || "BESbswy",
                R = 0,
                P = p || 3e3,
                A = new Date().getTime();
            return new Promise(function(W, j) {
                if (O(h.context) && !z(h.context)) {
                    var V = new Promise(function($, N) {
                            function D() {
                                new Date().getTime() - A >= P ? N(Error("" + P + "ms timeout exceeded")) : h.context.document.fonts.load(L(h, '"' + h.family + '"'), E).then(function(t) {
                                    1 <= t.length ? $() : setTimeout(D, 25)
                                }, N)
                            }
                            D()
                        }),
                        G = new Promise(function($, N) {
                            R = setTimeout(function() {
                                N(Error("" + P + "ms timeout exceeded"))
                            }, P)
                        });
                    Promise.race([G, V]).then(function() {
                        clearTimeout(R), W(h)
                    }, j)
                } else i(function() {
                    function $() {
                        var T;
                        (T = g != -1 && k != -1 || g != -1 && u != -1 || k != -1 && u != -1) && ((T = g != k && g != u && k != u) || (m === null && (T = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), m = !!T && (536 > parseInt(T[1], 10) || parseInt(T[1], 10) === 536 && 11 >= parseInt(T[2], 10))), T = m && (g == a && k == a && u == a || g == r && k == r && u == r || g == f && k == f && u == f)), T = !T), T && (w.parentNode !== null && w.parentNode.removeChild(w), clearTimeout(R), W(h))
                    }

                    function N() {
                        if (new Date().getTime() - A >= P) w.parentNode !== null && w.parentNode.removeChild(w), j(Error("" + P + "ms timeout exceeded"));
                        else {
                            var T = h.context.document.hidden;
                            (T === !0 || T === void 0) && (g = D.g.offsetWidth, k = t.g.offsetWidth, u = l.g.offsetWidth, $()), R = setTimeout(N, 50)
                        }
                    }
                    var D = new n(E),
                        t = new n(E),
                        l = new n(E),
                        g = -1,
                        k = -1,
                        u = -1,
                        a = -1,
                        r = -1,
                        f = -1,
                        w = document.createElement("div");
                    w.dir = "ltr", s(D, L(h, "sans-serif")), s(t, L(h, "serif")), s(l, L(h, "monospace")), w.appendChild(D.g), w.appendChild(t.g), w.appendChild(l.g), h.context.document.body.appendChild(w), a = D.g.offsetWidth, r = t.g.offsetWidth, f = l.g.offsetWidth, N(), v(D, function(T) {
                        g = T, $()
                    }), s(D, L(h, '"' + h.family + '",sans-serif')), v(t, function(T) {
                        k = T, $()
                    }), s(t, L(h, '"' + h.family + '",serif')), v(l, function(T) {
                        u = T, $()
                    }), s(l, L(h, '"' + h.family + '",monospace'))
                })
            })
        }, d.exports = b
    })()
})(ke);
var gt = ke.exports;
const vt = We(gt),
    Z = (d, e) => new Promise(i => {
        new vt(d, e).load().then(() => {
            i()
        }).catch(() => {
            throw i(), new Error(`${d}  with ${e} could not be loaded`)
        })
    }),
    yt = ee({
        __name: "SitePreloader",
        emits: Object.values([se.PRELOADING_COMPLETE, se.TRANSITION_OUT_COMPLETE]),
        setup(d, {
            expose: e,
            emit: i
        }) {
            const n = i,
                s = M(null),
                c = M(null),
                v = M(null),
                b = M(0),
                m = M(0),
                S = ce(() => Math.round((b.value + m.value) * 100 / 1.05));
            async function y() {
                var E, R;
                (E = s.value) == null || E.transitionIn(), await p(), n(se.PRELOADING_COMPLETE), await ((R = s.value) == null ? void 0 : R.transitionOut()), n(se.TRANSITION_OUT_COMPLETE)
            }
            J(async () => {
                h()
            });
            async function _() {
                await Promise.all([Z("PP Neue Montreal", {
                    weight: 400
                }), Z("PP Neue Montreal", {
                    weight: 500
                }), Z("PP Neue Montreal", {
                    weight: 700
                }), Z("ConsolasRegular", {
                    weight: 400
                }), Z("SimpleLLWeb-Bold", {
                    weight: 400
                })]), m.value += .05
            }
            async function z() {
                await Q.to(b, {
                    duration: 1,
                    ease: "steps(8)",
                    value: 1
                })
            }
            const O = ["Loading...", "Initializing...", "Wrapping up...", "Done"],
                L = ce(() => S.value > 25 && S.value < 75 ? O[1] : S.value > 75 && S.value < 100 ? O[2] : S.value >= 100 ? O[3] : O[0]),
                o = ce(() => Math.ceil(S.value / 2));
            async function p() {
                await Promise.all([_(), z()])
            }

            function h() {
                const E = {
                    sitePreloaderRef: c.value,
                    progressRef: v.value
                };
                s.value = ft(E)
            }
            return e({
                motion: s,
                startLoading: y
            }), (E, R) => (x(), q("div", {
                ref_key: "sitePreloaderRef",
                ref: c,
                class: C(["abs-fill", [E.$style.sitePreloader]])
            }, [I("div", {
                class: C(["label-01", [E.$style.status]])
            }, " Status ", 2), I("div", {
                class: C(E.$style.loader)
            }, [I("span", {
                class: C(["label-01", [E.$style.loadingStatus]])
            }, me(L.value), 3), I("div", {
                class: C(E.$style.bar)
            }, [(x(!0), q(Ne, null, Ie(o.value, (P, A) => (x(), q("span", {
                key: `bar-${A}`,
                class: C([E.$style.line])
            }, null, 2))), 128))], 2), I("span", {
                ref_key: "progressRef",
                ref: v,
                class: C(["label-01", [E.$style.progress]])
            }, me(S.value) + "%", 3)], 2)], 2))
        }
    }),
    wt = "_sitePreloader_1l79x_9",
    St = "_status_1l79x_16",
    _t = "_loader_1l79x_20",
    Tt = "_loadingStatus_1l79x_27",
    bt = "_progress_1l79x_31",
    Et = "_bar_1l79x_35",
    Rt = "_line_1l79x_46",
    Lt = {
        sitePreloader: wt,
        status: St,
        loader: _t,
        loadingStatus: Tt,
        progress: bt,
        bar: Et,
        line: Rt
    },
    kt = {
        $style: Lt
    },
    Mt = ne(yt, [
        ["__cssModules", kt]
    ]),
    Ct = ee({
        __name: "default",
        setup(d) {
            const e = ge(),
                {
                    setIsSitePreloaderDone: i,
                    lockMainScroll: n
                } = e,
                {
                    isCustomCursorEnabled: s,
                    isSitePreloaderDone: c,
                    mainScrollRef: v
                } = _e(e),
                b = M(!1),
                m = M(null),
                S = M(null),
                y = M(null);

            function _() {
                i(!0)
            }

            function z() {
                b.value = !0
            }
            async function O() {
                var L, o, p;
                (L = m.value) == null || L.startLoading(), await ((o = S.value) == null ? void 0 : o.motion.transitionIn()), (p = y.value) == null || p.motion.transitionIn()
            }
            return J(() => {
                Te(v, L => {
                    L && n()
                }, {
                    immediate: !0
                })
            }), (L, o) => {
                const p = Fe;
                return x(), q("div", {
                    class: C([L.$style.app, X(s) && L.$style.isCustomCursorEnabled, !X(c) && L.$style.isLoading])
                }, [U(pt, {
                    ref_key: "frameBorderRef",
                    ref: S,
                    onAssetsReady: O
                }, {
                    default: ye(() => [U(p, null, {
                        default: ye(() => [b.value ? De("", !0) : (x(), $e(Mt, {
                            key: 0,
                            ref_key: "sitePreloaderRef",
                            ref: m,
                            class: "abs-fill",
                            onTransitionOutComplete: z,
                            onPreloadingComplete: _
                        }, null, 512))]),
                        _: 1
                    }), U(He, {
                        ref_key: "leadingSectionRef",
                        ref: y,
                        class: C([L.$style.topLeadingSection])
                    }, null, 8, ["class"]), Ee(L.$slots, "default")]),
                    _: 3
                }, 512)], 2)
            }
        }
    }),
    Pt = "_app_1f6y3_13",
    Ot = "_isCustomCursorEnabled_1f6y3_13",
    zt = "_page_1f6y3_19",
    At = "_topLeadingSection_1f6y3_25",
    Nt = {
        app: Pt,
        isCustomCursorEnabled: Ot,
        page: zt,
        topLeadingSection: At
    },
    It = {
        $style: Nt
    },
    Ht = ne(Ct, [
        ["__cssModules", It]
    ]);
export {
    Ht as
    default
};