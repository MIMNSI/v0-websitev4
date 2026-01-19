(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  78261,
  (e) => {
    "use strict";
    let t = (0, e.i(27460).default)("LoaderCircle", [
      ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
    ]);
    e.s(["Loader2", () => t], 78261);
  },
  4301,
  (e) => {
    "use strict";
    var t = e.i(96592),
      r = e.i(70946),
      n = e.i(75141),
      i = Symbol.for("react.lazy"),
      s = t[" use ".trim().toString()];
    function l(e) {
      var t;
      return (
        null != e &&
        "object" == typeof e &&
        "$$typeof" in e &&
        e.$$typeof === i &&
        "_payload" in e &&
        "object" == typeof (t = e._payload) &&
        null !== t &&
        "then" in t
      );
    }
    function a(e) {
      var i;
      let a,
        o =
          ((i = e),
          ((a = t.forwardRef((e, n) => {
            let { children: i, ...a } = e;
            if (
              (l(i) && "function" == typeof s && (i = s(i._payload)),
              t.isValidElement(i))
            ) {
              var o;
              let e,
                s,
                l =
                  ((o = i),
                  (s =
                    (e = Object.getOwnPropertyDescriptor(
                      o.props,
                      "ref"
                    )?.get) &&
                    "isReactWarning" in e &&
                    e.isReactWarning)
                    ? o.ref
                    : (s =
                        (e = Object.getOwnPropertyDescriptor(o, "ref")?.get) &&
                        "isReactWarning" in e &&
                        e.isReactWarning)
                    ? o.props.ref
                    : o.props.ref || o.ref),
                c = (function (e, t) {
                  let r = { ...t };
                  for (let n in t) {
                    let i = e[n],
                      s = t[n];
                    /^on[A-Z]/.test(n)
                      ? i && s
                        ? (r[n] = (...e) => {
                            let t = s(...e);
                            return i(...e), t;
                          })
                        : i && (r[n] = i)
                      : "style" === n
                      ? (r[n] = { ...i, ...s })
                      : "className" === n &&
                        (r[n] = [i, s].filter(Boolean).join(" "));
                  }
                  return { ...e, ...r };
                })(a, i.props);
              return (
                i.type !== t.Fragment &&
                  (c.ref = n ? (0, r.composeRefs)(n, l) : l),
                t.cloneElement(i, c)
              );
            }
            return t.Children.count(i) > 1 ? t.Children.only(null) : null;
          })).displayName = `${i}.SlotClone`),
          a),
        c = t.forwardRef((e, r) => {
          let { children: i, ...a } = e;
          l(i) && "function" == typeof s && (i = s(i._payload));
          let c = t.Children.toArray(i),
            u = c.find(d);
          if (u) {
            let e = u.props.children,
              i = c.map((r) =>
                r !== u
                  ? r
                  : t.Children.count(e) > 1
                  ? t.Children.only(null)
                  : t.isValidElement(e)
                  ? e.props.children
                  : null
              );
            return (0, n.jsx)(o, {
              ...a,
              ref: r,
              children: t.isValidElement(e)
                ? t.cloneElement(e, void 0, i)
                : null,
            });
          }
          return (0, n.jsx)(o, { ...a, ref: r, children: i });
        });
      return (c.displayName = `${e}.Slot`), c;
    }
    var o = a("Slot"),
      c = Symbol("radix.slottable");
    function d(e) {
      return (
        t.isValidElement(e) &&
        "function" == typeof e.type &&
        "__radixId" in e.type &&
        e.type.__radixId === c
      );
    }
    e.s(["Slot", () => o, "createSlot", () => a]);
  },
  29485,
  (e) => {
    "use strict";
    let t, r;
    var n = e.i(75141),
      i = e.i(4301),
      s = e.i(68547);
    let l = (e) => ("boolean" == typeof e ? `${e}` : 0 === e ? "0" : e),
      a = s.clsx;
    var o = e.i(15994);
    let c =
      ((t =
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"),
      (r = {
        variants: {
          variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive:
              "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline:
              "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary:
              "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost:
              "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline",
          },
          size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-sm": "size-8",
            "icon-lg": "size-10",
          },
        },
        defaultVariants: { variant: "default", size: "default" },
      }),
      (e) => {
        var n;
        if ((null == r ? void 0 : r.variants) == null)
          return a(
            t,
            null == e ? void 0 : e.class,
            null == e ? void 0 : e.className
          );
        let { variants: i, defaultVariants: s } = r,
          o = Object.keys(i).map((t) => {
            let r = null == e ? void 0 : e[t],
              n = null == s ? void 0 : s[t];
            if (null === r) return null;
            let a = l(r) || l(n);
            return i[t][a];
          }),
          c =
            e &&
            Object.entries(e).reduce((e, t) => {
              let [r, n] = t;
              return void 0 === n || (e[r] = n), e;
            }, {});
        return a(
          t,
          o,
          null == r || null == (n = r.compoundVariants)
            ? void 0
            : n.reduce((e, t) => {
                let { class: r, className: n, ...i } = t;
                return Object.entries(i).every((e) => {
                  let [t, r] = e;
                  return Array.isArray(r)
                    ? r.includes({ ...s, ...c }[t])
                    : { ...s, ...c }[t] === r;
                })
                  ? [...e, r, n]
                  : e;
              }, []),
          null == e ? void 0 : e.class,
          null == e ? void 0 : e.className
        );
      });
    function d({ className: e, variant: t, size: r, asChild: s = !1, ...l }) {
      let a = s ? i.Slot : "button";
      return (0, n.jsx)(a, {
        "data-slot": "button",
        className: (0, o.cn)(c({ variant: t, size: r, className: e })),
        ...l,
      });
    }
    e.s(["Button", () => d], 29485);
  },
  59939,
  (e) => {
    "use strict";
    let t = (0, e.i(27460).default)("ArrowRight", [
      ["path", { d: "M5 12h14", key: "1ays0h" }],
      ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
    ]);
    e.s(["ArrowRight", () => t], 59939);
  },
  16226,
  (e) => {
    "use strict";
    var t = e.i(75141),
      r = e.i(44455),
      n = e.i(44576),
      i = e.i(59939);
    let s = (0, e.i(27460).default)("Menu", [
      ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
      ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
      ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
    ]);
    var l = e.i(96592);
    function a() {
      let [e, a] = (0, l.useState)(!1);
      return (0, t.jsxs)("header", {
        className: "fixed top-0 left-0 right-0 z-50 px-4 md:px-6 pt-4 md:pt-6",
        children: [
          (0, t.jsx)("div", {
            className:
              "absolute top-0 left-0 right-0 h-full bg-black/70 backdrop-blur-xl [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]",
          }),
          (0, t.jsxs)("div", {
            className:
              "relative z-10 mx-auto max-w-[1400px] flex items-center justify-between gap-4 rounded-full border border-white/10 bg-black/80 backdrop-blur-md px-4 md:px-6 py-3",
            children: [
              (0, t.jsxs)(r.default, {
                href: "/",
                className: "flex items-center gap-2 flex-shrink-0",
                children: [
                  (0, t.jsx)(n.default, {
                    src: "/logos/metashop-logo.svg",
                    alt: "MetaShop",
                    width: 32,
                    height: 32,
                    className: "w-8 h-8",
                  }),
                  (0, t.jsx)("span", {
                    className:
                      "hidden md:inline text-lg md:text-xl font-semibold text-white",
                    children: "MetaShop",
                  }),
                ],
              }),
              (0, t.jsxs)("nav", {
                className: "hidden lg:flex items-center gap-8",
                children: [
                  (0, t.jsx)(r.default, {
                    href: "/",
                    className:
                      "text-sm text-white/90 hover:text-white transition-colors",
                    children: "Home",
                  }),
                  (0, t.jsx)("a", {
                    href: "https://blitzapp.metashopai.com/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "text-sm text-white/90 hover:text-white transition-colors",
                    children: "Blitz",
                  }),
                  (0, t.jsx)(r.default, {
                    href: "/image-to-3d",
                    className:
                      "text-sm text-white/90 hover:text-white transition-colors",
                    children: "Image to 3D",
                  }),
                  (0, t.jsx)(r.default, {
                    href: "/faq",
                    className:
                      "text-sm text-white/90 hover:text-white transition-colors",
                    children: "FAQ",
                  }),
                  (0, t.jsx)(r.default, {
                    href: "/contact",
                    className:
                      "text-sm text-white/90 hover:text-white transition-colors",
                    children: "Contact Us",
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: "flex items-center gap-2 md:gap-3 flex-shrink-0",
                children: [
                  (0, t.jsx)(r.default, {
                    href: "/contact",
                    className:
                      "lg:hidden text-xs md:text-sm text-white/90 hover:text-white transition-colors whitespace-nowrap",
                    children: "Call us",
                  }),
                  (0, t.jsx)("span", {
                    className:
                      "hidden lg:inline text-sm text-white/70 whitespace-nowrap",
                    children: "Call: +91 84 1292 1292",
                  }),
                  (0, t.jsxs)(r.default, {
                    href: "/contact",
                    className:
                      "flex items-center gap-1.5 md:gap-2 bg-[#2dffa7] hover:bg-[#2dffa7]/90 text-black px-3 md:px-4 lg:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-colors whitespace-nowrap",
                    children: [
                      "Book a Demo",
                      (0, t.jsx)(i.ArrowRight, {
                        className: "w-3 h-3 md:w-4 md:h-4",
                      }),
                    ],
                  }),
                  (0, t.jsx)("button", {
                    className: "lg:hidden p-2 text-white",
                    onClick: () => a(!e),
                    children: (0, t.jsx)(s, { className: "w-5 h-5" }),
                  }),
                ],
              }),
            ],
          }),
          e &&
            (0, t.jsx)("div", {
              className:
                "lg:hidden absolute top-20 left-4 right-4 bg-black/95 backdrop-blur-md border border-white/10 rounded-3xl p-6 z-50",
              children: (0, t.jsxs)("nav", {
                className: "flex flex-col gap-4",
                children: [
                  (0, t.jsx)(r.default, {
                    href: "/",
                    className:
                      "text-sm text-white/90 hover:text-white transition-colors py-2",
                    children: "Home",
                  }),
                  (0, t.jsx)("a", {
                    href: "https://blitzapp.metashopai.com/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "text-sm text-white/90 hover:text-white transition-colors py-2",
                    children: "Blitz",
                  }),
                  (0, t.jsx)(r.default, {
                    href: "/image-to-3d",
                    className:
                      "text-sm text-white/90 hover:text-white transition-colors py-2",
                    children: "Image to 3D",
                  }),
                  (0, t.jsx)(r.default, {
                    href: "/faq",
                    className:
                      "text-sm text-white/90 hover:text-white transition-colors py-2",
                    children: "FAQ",
                  }),
                  (0, t.jsx)("div", {
                    className:
                      "border-t border-white/10 pt-4 mt-2 flex flex-col gap-3",
                    children: (0, t.jsx)(r.default, {
                      href: "/contact",
                      className:
                        "text-sm text-white/90 hover:text-white transition-colors",
                      children: "Call: +91 84 1292 1292",
                    }),
                  }),
                ],
              }),
            }),
        ],
      });
    }
    e.s(["default", () => a], 16226);
  },
  2574,
  (e) => {
    "use strict";
    var t = e.i(75141),
      r = e.i(96592),
      n = e.i(15994);
    let i = (0, r.createContext)(void 0);
    e.s([
      "CardBody",
      0,
      ({ children: e, className: r }) =>
        (0, t.jsx)("div", {
          className: (0, n.cn)("h-96 w-full [transform-style:preserve-3d]", r),
          children: e,
        }),
      "CardContainer",
      0,
      ({ children: e, className: s, containerClassName: l }) => {
        let a = (0, r.useRef)(null),
          [o, c] = (0, r.useState)(!1);
        return (0, t.jsx)(i.Provider, {
          value: { isMouseEntered: o, setIsMouseEntered: c },
          children: (0, t.jsx)("div", {
            className: (0, n.cn)("flex items-center justify-center", l),
            style: { perspective: "1000px" },
            children: (0, t.jsx)("div", {
              ref: a,
              onMouseEnter: () => {
                c(!0);
              },
              onMouseMove: (e) => {
                if (!a.current) return;
                let {
                    left: t,
                    top: r,
                    width: n,
                    height: i,
                  } = a.current.getBoundingClientRect(),
                  s = (e.clientX - t - n / 2) / 15,
                  l = (e.clientY - r - i / 2) / 15;
                a.current.style.transform = `rotateY(${s}deg) rotateX(${-l}deg)`;
              },
              onMouseLeave: () => {
                a.current &&
                  (c(!1),
                  (a.current.style.transform = "rotateY(0deg) rotateX(0deg)"));
              },
              className: (0, n.cn)(
                "relative transition-all duration-200 ease-linear",
                s
              ),
              style: { transformStyle: "preserve-3d" },
              children: e,
            }),
          }),
        });
      },
      "CardItem",
      0,
      ({ as: e = "div", children: s, className: l, translateZ: a = 0 }) => {
        let o = (0, r.useRef)(null),
          { isMouseEntered: c } = (0, r.useContext)(i) || {};
        return (
          (0, r.useEffect)(() => {
            o.current &&
              (c
                ? (o.current.style.transform = `translateZ(${a}px)`)
                : (o.current.style.transform = "translateZ(0px)"));
          }, [c, a]),
          (0, t.jsx)(e, {
            ref: o,
            className: (0, n.cn)(
              "transition-transform duration-200 ease-linear",
              l
            ),
            children: s,
          })
        );
      },
    ]);
  },
  14395,
  (e) => {
    "use strict";
    e.i(19443);
    var t = e.i(75141),
      r = e.i(96592),
      n = e.i(41485),
      i = e.i(79890),
      s = e.i(27176),
      l = e.i(89195),
      a = e.i(19083),
      o = r,
      c = e.i(63513);
    function d(e, t) {
      if ("function" == typeof e) return e(t);
      null != e && (e.current = t);
    }
    class u extends o.Component {
      getSnapshotBeforeUpdate(e) {
        let t = this.props.childRef.current;
        if (t && e.isPresent && !this.props.isPresent) {
          let e = t.offsetParent,
            r = ((0, a.isHTMLElement)(e) && e.offsetWidth) || 0,
            n = this.props.sizeRef.current;
          (n.height = t.offsetHeight || 0),
            (n.width = t.offsetWidth || 0),
            (n.top = t.offsetTop),
            (n.left = t.offsetLeft),
            (n.right = r - n.width - n.left);
        }
        return null;
      }
      componentDidUpdate() {}
      render() {
        return this.props.children;
      }
    }
    function h({ children: e, isPresent: n, anchorX: i, root: s }) {
      let l = (0, o.useId)(),
        a = (0, o.useRef)(null),
        h = (0, o.useRef)({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
        { nonce: f } = (0, o.useContext)(c.MotionConfigContext),
        p = (function (...e) {
          return r.useCallback(
            (function (...e) {
              return (t) => {
                let r = !1,
                  n = e.map((e) => {
                    let n = d(e, t);
                    return r || "function" != typeof n || (r = !0), n;
                  });
                if (r)
                  return () => {
                    for (let t = 0; t < n.length; t++) {
                      let r = n[t];
                      "function" == typeof r ? r() : d(e[t], null);
                    }
                  };
              };
            })(...e),
            e
          );
        })(a, e?.ref);
      return (
        (0, o.useInsertionEffect)(() => {
          let { width: e, height: t, top: r, left: o, right: c } = h.current;
          if (n || !a.current || !e || !t) return;
          let d = "left" === i ? `left: ${o}` : `right: ${c}`;
          a.current.dataset.motionPopId = l;
          let u = document.createElement("style");
          f && (u.nonce = f);
          let p = s ?? document.head;
          return (
            p.appendChild(u),
            u.sheet &&
              u.sheet.insertRule(`
          [data-motion-pop-id="${l}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${t}px !important;
            ${d}px !important;
            top: ${r}px !important;
          }
        `),
            () => {
              p.contains(u) && p.removeChild(u);
            }
          );
        }, [n]),
        (0, t.jsx)(u, {
          isPresent: n,
          childRef: a,
          sizeRef: h,
          children: o.cloneElement(e, { ref: p }),
        })
      );
    }
    let f = ({
      children: e,
      initial: n,
      isPresent: s,
      onExitComplete: a,
      custom: o,
      presenceAffectsLayout: c,
      mode: d,
      anchorX: u,
      root: f,
    }) => {
      let m = (0, i.useConstant)(p),
        x = (0, r.useId)(),
        g = !0,
        v = (0, r.useMemo)(
          () => (
            (g = !1),
            {
              id: x,
              initial: n,
              isPresent: s,
              custom: o,
              onExitComplete: (e) => {
                for (let t of (m.set(e, !0), m.values())) if (!t) return;
                a && a();
              },
              register: (e) => (m.set(e, !1), () => m.delete(e)),
            }
          ),
          [s, m, a]
        );
      return (
        c && g && (v = { ...v }),
        (0, r.useMemo)(() => {
          m.forEach((e, t) => m.set(t, !1));
        }, [s]),
        r.useEffect(() => {
          s || m.size || !a || a();
        }, [s]),
        "popLayout" === d &&
          (e = (0, t.jsx)(h, {
            isPresent: s,
            anchorX: u,
            root: f,
            children: e,
          })),
        (0, t.jsx)(l.PresenceContext.Provider, { value: v, children: e })
      );
    };
    function p() {
      return new Map();
    }
    var m = e.i(28867);
    let x = (e) => e.key || "";
    function g(e) {
      let t = [];
      return (
        r.Children.forEach(e, (e) => {
          (0, r.isValidElement)(e) && t.push(e);
        }),
        t
      );
    }
    let v = ({
      children: e,
      custom: l,
      initial: a = !0,
      onExitComplete: o,
      presenceAffectsLayout: c = !0,
      mode: d = "sync",
      propagate: u = !1,
      anchorX: h = "left",
      root: p,
    }) => {
      let [v, y] = (0, m.usePresence)(u),
        b = (0, r.useMemo)(() => g(e), [e]),
        w = u && !v ? [] : b.map(x),
        j = (0, r.useRef)(!0),
        N = (0, r.useRef)(b),
        k = (0, i.useConstant)(() => new Map()),
        [C, R] = (0, r.useState)(b),
        [z, E] = (0, r.useState)(b);
      (0, s.useIsomorphicLayoutEffect)(() => {
        (j.current = !1), (N.current = b);
        for (let e = 0; e < z.length; e++) {
          let t = x(z[e]);
          w.includes(t) ? k.delete(t) : !0 !== k.get(t) && k.set(t, !1);
        }
      }, [z, w.length, w.join("-")]);
      let _ = [];
      if (b !== C) {
        let e = [...b];
        for (let t = 0; t < z.length; t++) {
          let r = z[t],
            n = x(r);
          w.includes(n) || (e.splice(t, 0, r), _.push(r));
        }
        return "wait" === d && _.length && (e = _), E(g(e)), R(b), null;
      }
      let { forceRender: S } = (0, r.useContext)(n.LayoutGroupContext);
      return (0, t.jsx)(t.Fragment, {
        children: z.map((e) => {
          let r = x(e),
            n = (!u || !!v) && (b === z || w.includes(r));
          return (0, t.jsx)(
            f,
            {
              isPresent: n,
              initial: (!j.current || !!a) && void 0,
              custom: l,
              presenceAffectsLayout: c,
              mode: d,
              root: p,
              onExitComplete: n
                ? void 0
                : () => {
                    if (!k.has(r)) return;
                    k.set(r, !0);
                    let e = !0;
                    k.forEach((t) => {
                      t || (e = !1);
                    }),
                      e && (S?.(), E(N.current), u && y?.(), o && o());
                  },
              anchorX: h,
              children: e,
            },
            r
          );
        }),
      });
    };
    e.s(["AnimatePresence", () => v], 14395);
  },
  53175,
  (e) => {
    "use strict";
    let t = (0, e.i(27460).default)("Check", [
      ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }],
    ]);
    e.s(["default", () => t]);
  },
]);
