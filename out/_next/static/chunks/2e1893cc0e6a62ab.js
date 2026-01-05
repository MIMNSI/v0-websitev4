(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
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
    function o() {
      let [e, o] = (0, l.useState)(!1);
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
                    children: "Call: +91 8412921292",
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
                    onClick: () => o(!e),
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
                      children: "Call: +91 8412921292",
                    }),
                  }),
                ],
              }),
            }),
        ],
      });
    }
    e.s(["default", () => o], 16226);
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
        let o = (0, r.useRef)(null),
          [a, u] = (0, r.useState)(!1);
        return (0, t.jsx)(i.Provider, {
          value: { isMouseEntered: a, setIsMouseEntered: u },
          children: (0, t.jsx)("div", {
            className: (0, n.cn)("flex items-center justify-center", l),
            style: { perspective: "1000px" },
            children: (0, t.jsx)("div", {
              ref: o,
              onMouseEnter: () => {
                u(!0);
              },
              onMouseMove: (e) => {
                if (!o.current) return;
                let {
                    left: t,
                    top: r,
                    width: n,
                    height: i,
                  } = o.current.getBoundingClientRect(),
                  s = (e.clientX - t - n / 2) / 15,
                  l = (e.clientY - r - i / 2) / 15;
                o.current.style.transform = `rotateY(${s}deg) rotateX(${-l}deg)`;
              },
              onMouseLeave: () => {
                o.current &&
                  (u(!1),
                  (o.current.style.transform = "rotateY(0deg) rotateX(0deg)"));
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
      ({ as: e = "div", children: s, className: l, translateZ: o = 0 }) => {
        let a = (0, r.useRef)(null),
          { isMouseEntered: u } = (0, r.useContext)(i) || {};
        return (
          (0, r.useEffect)(() => {
            a.current &&
              (u
                ? (a.current.style.transform = `translateZ(${o}px)`)
                : (a.current.style.transform = "translateZ(0px)"));
          }, [u, o]),
          (0, t.jsx)(e, {
            ref: a,
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
    function o(e) {
      var i;
      let o,
        a =
          ((i = e),
          ((o = t.forwardRef((e, n) => {
            let { children: i, ...o } = e;
            if (
              (l(i) && "function" == typeof s && (i = s(i._payload)),
              t.isValidElement(i))
            ) {
              var a;
              let e,
                s,
                l =
                  ((a = i),
                  (s =
                    (e = Object.getOwnPropertyDescriptor(
                      a.props,
                      "ref"
                    )?.get) &&
                    "isReactWarning" in e &&
                    e.isReactWarning)
                    ? a.ref
                    : (s =
                        (e = Object.getOwnPropertyDescriptor(a, "ref")?.get) &&
                        "isReactWarning" in e &&
                        e.isReactWarning)
                    ? a.props.ref
                    : a.props.ref || a.ref),
                u = (function (e, t) {
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
                })(o, i.props);
              return (
                i.type !== t.Fragment &&
                  (u.ref = n ? (0, r.composeRefs)(n, l) : l),
                t.cloneElement(i, u)
              );
            }
            return t.Children.count(i) > 1 ? t.Children.only(null) : null;
          })).displayName = `${i}.SlotClone`),
          o),
        u = t.forwardRef((e, r) => {
          let { children: i, ...o } = e;
          l(i) && "function" == typeof s && (i = s(i._payload));
          let u = t.Children.toArray(i),
            d = u.find(c);
          if (d) {
            let e = d.props.children,
              i = u.map((r) =>
                r !== d
                  ? r
                  : t.Children.count(e) > 1
                  ? t.Children.only(null)
                  : t.isValidElement(e)
                  ? e.props.children
                  : null
              );
            return (0, n.jsx)(a, {
              ...o,
              ref: r,
              children: t.isValidElement(e)
                ? t.cloneElement(e, void 0, i)
                : null,
            });
          }
          return (0, n.jsx)(a, { ...o, ref: r, children: i });
        });
      return (u.displayName = `${e}.Slot`), u;
    }
    var a = o("Slot"),
      u = Symbol("radix.slottable");
    function c(e) {
      return (
        t.isValidElement(e) &&
        "function" == typeof e.type &&
        "__radixId" in e.type &&
        e.type.__radixId === u
      );
    }
    e.s(["Slot", () => a, "createSlot", () => o]);
  },
  78261,
  (e) => {
    "use strict";
    let t = (0, e.i(27460).default)("LoaderCircle", [
      ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
    ]);
    e.s(["Loader2", () => t], 78261);
  },
  53175,
  (e) => {
    "use strict";
    let t = (0, e.i(27460).default)("Check", [
      ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }],
    ]);
    e.s(["default", () => t]);
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
      o = e.i(19083),
      a = r,
      u = e.i(63513);
    function c(e, t) {
      if ("function" == typeof e) return e(t);
      null != e && (e.current = t);
    }
    class d extends a.Component {
      getSnapshotBeforeUpdate(e) {
        let t = this.props.childRef.current;
        if (t && e.isPresent && !this.props.isPresent) {
          let e = t.offsetParent,
            r = ((0, o.isHTMLElement)(e) && e.offsetWidth) || 0,
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
    function f({ children: e, isPresent: n, anchorX: i, root: s }) {
      let l = (0, a.useId)(),
        o = (0, a.useRef)(null),
        f = (0, a.useRef)({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
        { nonce: h } = (0, a.useContext)(u.MotionConfigContext),
        p = (function (...e) {
          return r.useCallback(
            (function (...e) {
              return (t) => {
                let r = !1,
                  n = e.map((e) => {
                    let n = c(e, t);
                    return r || "function" != typeof n || (r = !0), n;
                  });
                if (r)
                  return () => {
                    for (let t = 0; t < n.length; t++) {
                      let r = n[t];
                      "function" == typeof r ? r() : c(e[t], null);
                    }
                  };
              };
            })(...e),
            e
          );
        })(o, e?.ref);
      return (
        (0, a.useInsertionEffect)(() => {
          let { width: e, height: t, top: r, left: a, right: u } = f.current;
          if (n || !o.current || !e || !t) return;
          let c = "left" === i ? `left: ${a}` : `right: ${u}`;
          o.current.dataset.motionPopId = l;
          let d = document.createElement("style");
          h && (d.nonce = h);
          let p = s ?? document.head;
          return (
            p.appendChild(d),
            d.sheet &&
              d.sheet.insertRule(`
          [data-motion-pop-id="${l}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${t}px !important;
            ${c}px !important;
            top: ${r}px !important;
          }
        `),
            () => {
              p.contains(d) && p.removeChild(d);
            }
          );
        }, [n]),
        (0, t.jsx)(d, {
          isPresent: n,
          childRef: o,
          sizeRef: f,
          children: a.cloneElement(e, { ref: p }),
        })
      );
    }
    let h = ({
      children: e,
      initial: n,
      isPresent: s,
      onExitComplete: o,
      custom: a,
      presenceAffectsLayout: u,
      mode: c,
      anchorX: d,
      root: h,
    }) => {
      let m = (0, i.useConstant)(p),
        x = (0, r.useId)(),
        y = !0,
        g = (0, r.useMemo)(
          () => (
            (y = !1),
            {
              id: x,
              initial: n,
              isPresent: s,
              custom: a,
              onExitComplete: (e) => {
                for (let t of (m.set(e, !0), m.values())) if (!t) return;
                o && o();
              },
              register: (e) => (m.set(e, !1), () => m.delete(e)),
            }
          ),
          [s, m, o]
        );
      return (
        u && y && (g = { ...g }),
        (0, r.useMemo)(() => {
          m.forEach((e, t) => m.set(t, !1));
        }, [s]),
        r.useEffect(() => {
          s || m.size || !o || o();
        }, [s]),
        "popLayout" === c &&
          (e = (0, t.jsx)(f, {
            isPresent: s,
            anchorX: d,
            root: h,
            children: e,
          })),
        (0, t.jsx)(l.PresenceContext.Provider, { value: g, children: e })
      );
    };
    function p() {
      return new Map();
    }
    var m = e.i(28867);
    let x = (e) => e.key || "";
    function y(e) {
      let t = [];
      return (
        r.Children.forEach(e, (e) => {
          (0, r.isValidElement)(e) && t.push(e);
        }),
        t
      );
    }
    let g = ({
      children: e,
      custom: l,
      initial: o = !0,
      onExitComplete: a,
      presenceAffectsLayout: u = !0,
      mode: c = "sync",
      propagate: d = !1,
      anchorX: f = "left",
      root: p,
    }) => {
      let [g, v] = (0, m.usePresence)(d),
        w = (0, r.useMemo)(() => y(e), [e]),
        b = d && !g ? [] : w.map(x),
        N = (0, r.useRef)(!0),
        C = (0, r.useRef)(w),
        R = (0, i.useConstant)(() => new Map()),
        [j, k] = (0, r.useState)(w),
        [E, S] = (0, r.useState)(w);
      (0, s.useIsomorphicLayoutEffect)(() => {
        (N.current = !1), (C.current = w);
        for (let e = 0; e < E.length; e++) {
          let t = x(E[e]);
          b.includes(t) ? R.delete(t) : !0 !== R.get(t) && R.set(t, !1);
        }
      }, [E, b.length, b.join("-")]);
      let M = [];
      if (w !== j) {
        let e = [...w];
        for (let t = 0; t < E.length; t++) {
          let r = E[t],
            n = x(r);
          b.includes(n) || (e.splice(t, 0, r), M.push(r));
        }
        return "wait" === c && M.length && (e = M), S(y(e)), k(w), null;
      }
      let { forceRender: A } = (0, r.useContext)(n.LayoutGroupContext);
      return (0, t.jsx)(t.Fragment, {
        children: E.map((e) => {
          let r = x(e),
            n = (!d || !!g) && (w === E || b.includes(r));
          return (0, t.jsx)(
            h,
            {
              isPresent: n,
              initial: (!N.current || !!o) && void 0,
              custom: l,
              presenceAffectsLayout: u,
              mode: c,
              root: p,
              onExitComplete: n
                ? void 0
                : () => {
                    if (!R.has(r)) return;
                    R.set(r, !0);
                    let e = !0;
                    R.forEach((t) => {
                      t || (e = !1);
                    }),
                      e && (A?.(), S(C.current), d && v?.(), a && a());
                  },
              anchorX: f,
              children: e,
            },
            r
          );
        }),
      });
    };
    e.s(["AnimatePresence", () => g], 14395);
  },
  91376,
  (e) => {
    "use strict";
    var t = e.i(75141),
      r = e.i(15994);
    function n({ className: e, type: n, ...i }) {
      return (0, t.jsx)("input", {
        type: n,
        "data-slot": "input",
        className: (0, r.cn)(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          e
        ),
        ...i,
      });
    }
    e.s(["Input", () => n]);
  },
  35638,
  (e) => {
    "use strict";
    var t = e.i(96592),
      r = e.i(75141);
    function n(e, i = []) {
      let s = [],
        l = () => {
          let r = s.map((e) => t.createContext(e));
          return function (n) {
            let i = n?.[e] || r;
            return t.useMemo(
              () => ({ [`__scope${e}`]: { ...n, [e]: i } }),
              [n, i]
            );
          };
        };
      return (
        (l.scopeName = e),
        [
          function (n, i) {
            let l = t.createContext(i),
              o = s.length;
            s = [...s, i];
            let a = (n) => {
              let { scope: i, children: s, ...a } = n,
                u = i?.[e]?.[o] || l,
                c = t.useMemo(() => a, Object.values(a));
              return (0, r.jsx)(u.Provider, { value: c, children: s });
            };
            return (
              (a.displayName = n + "Provider"),
              [
                a,
                function (r, s) {
                  let a = s?.[e]?.[o] || l,
                    u = t.useContext(a);
                  if (u) return u;
                  if (void 0 !== i) return i;
                  throw Error(`\`${r}\` must be used within \`${n}\``);
                },
              ]
            );
          },
          (function (...e) {
            let r = e[0];
            if (1 === e.length) return r;
            let n = () => {
              let n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
              return function (e) {
                let i = n.reduce((t, { useScope: r, scopeName: n }) => {
                  let i = r(e)[`__scope${n}`];
                  return { ...t, ...i };
                }, {});
                return t.useMemo(() => ({ [`__scope${r.scopeName}`]: i }), [i]);
              };
            };
            return (n.scopeName = r.scopeName), n;
          })(l, ...i),
        ]
      );
    }
    e.s(["createContextScope", () => n]);
  },
  4704,
  31469,
  (e) => {
    "use strict";
    function t(e, r, { checkForDefaultPrevented: n = !0 } = {}) {
      return function (t) {
        if ((e?.(t), !1 === n || !t.defaultPrevented)) return r?.(t);
      };
    }
    "undefined" != typeof window &&
      window.document &&
      window.document.createElement,
      e.s(["composeEventHandlers", () => t], 4704);
    var r = e.i(96592),
      n = globalThis?.document ? r.useLayoutEffect : () => {};
    globalThis?.document && r.useLayoutEffect,
      r[" useEffectEvent ".trim().toString()],
      r[" useInsertionEffect ".trim().toString()];
    var i = r[" useInsertionEffect ".trim().toString()] || n;
    function s({ prop: e, defaultProp: t, onChange: n = () => {}, caller: s }) {
      let [l, o, a] = (function ({ defaultProp: e, onChange: t }) {
          let [n, s] = r.useState(e),
            l = r.useRef(n),
            o = r.useRef(t);
          return (
            i(() => {
              o.current = t;
            }, [t]),
            r.useEffect(() => {
              l.current !== n && (o.current?.(n), (l.current = n));
            }, [n, l]),
            [n, s, o]
          );
        })({ defaultProp: t, onChange: n }),
        u = void 0 !== e,
        c = u ? e : l;
      {
        let t = r.useRef(void 0 !== e);
        r.useEffect(() => {
          let e = t.current;
          if (e !== u) {
            let t = u ? "controlled" : "uncontrolled";
            console.warn(
              `${s} is changing from ${
                e ? "controlled" : "uncontrolled"
              } to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
            );
          }
          t.current = u;
        }, [u, s]);
      }
      return [
        c,
        r.useCallback(
          (t) => {
            if (u) {
              let r = "function" == typeof t ? t(e) : t;
              r !== e && a.current?.(r);
            } else o(t);
          },
          [u, e, o, a]
        ),
      ];
    }
    Symbol("RADIX:SYNC_STATE"), e.s(["useControllableState", () => s], 31469);
  },
  43514,
  (e) => {
    "use strict";
    var t = e.i(96592),
      r = e.i(70946),
      n = globalThis?.document ? t.useLayoutEffect : () => {},
      i = (e) => {
        var i;
        let l,
          o,
          { present: a, children: u } = e,
          c = (function (e) {
            var r, i;
            let [l, o] = t.useState(),
              a = t.useRef(null),
              u = t.useRef(e),
              c = t.useRef("none"),
              [d, f] =
                ((r = e ? "mounted" : "unmounted"),
                (i = {
                  mounted: {
                    UNMOUNT: "unmounted",
                    ANIMATION_OUT: "unmountSuspended",
                  },
                  unmountSuspended: {
                    MOUNT: "mounted",
                    ANIMATION_END: "unmounted",
                  },
                  unmounted: { MOUNT: "mounted" },
                }),
                t.useReducer((e, t) => i[e][t] ?? e, r));
            return (
              t.useEffect(() => {
                let e = s(a.current);
                c.current = "mounted" === d ? e : "none";
              }, [d]),
              n(() => {
                let t = a.current,
                  r = u.current;
                if (r !== e) {
                  let n = c.current,
                    i = s(t);
                  e
                    ? f("MOUNT")
                    : "none" === i || t?.display === "none"
                    ? f("UNMOUNT")
                    : r && n !== i
                    ? f("ANIMATION_OUT")
                    : f("UNMOUNT"),
                    (u.current = e);
                }
              }, [e, f]),
              n(() => {
                if (l) {
                  let e,
                    t = l.ownerDocument.defaultView ?? window,
                    r = (r) => {
                      let n = s(a.current).includes(
                        CSS.escape(r.animationName)
                      );
                      if (
                        r.target === l &&
                        n &&
                        (f("ANIMATION_END"), !u.current)
                      ) {
                        let r = l.style.animationFillMode;
                        (l.style.animationFillMode = "forwards"),
                          (e = t.setTimeout(() => {
                            "forwards" === l.style.animationFillMode &&
                              (l.style.animationFillMode = r);
                          }));
                      }
                    },
                    n = (e) => {
                      e.target === l && (c.current = s(a.current));
                    };
                  return (
                    l.addEventListener("animationstart", n),
                    l.addEventListener("animationcancel", r),
                    l.addEventListener("animationend", r),
                    () => {
                      t.clearTimeout(e),
                        l.removeEventListener("animationstart", n),
                        l.removeEventListener("animationcancel", r),
                        l.removeEventListener("animationend", r);
                    }
                  );
                }
                f("ANIMATION_END");
              }, [l, f]),
              {
                isPresent: ["mounted", "unmountSuspended"].includes(d),
                ref: t.useCallback((e) => {
                  (a.current = e ? getComputedStyle(e) : null), o(e);
                }, []),
              }
            );
          })(a),
          d =
            "function" == typeof u
              ? u({ present: c.isPresent })
              : t.Children.only(u),
          f = (0, r.useComposedRefs)(
            c.ref,
            ((i = d),
            (o =
              (l = Object.getOwnPropertyDescriptor(i.props, "ref")?.get) &&
              "isReactWarning" in l &&
              l.isReactWarning)
              ? i.ref
              : (o =
                  (l = Object.getOwnPropertyDescriptor(i, "ref")?.get) &&
                  "isReactWarning" in l &&
                  l.isReactWarning)
              ? i.props.ref
              : i.props.ref || i.ref)
          );
        return "function" == typeof u || c.isPresent
          ? t.cloneElement(d, { ref: f })
          : null;
      };
    function s(e) {
      return e?.animationName || "none";
    }
    (i.displayName = "Presence"), e.s(["Presence", () => i], 43514);
  },
  84753,
  (e) => {
    "use strict";
    var t = e.i(96592);
    e.i(95915);
    var r = e.i(70946),
      n = e.i(75141),
      i = Symbol("radix.slottable");
    function s(e) {
      return (
        t.isValidElement(e) &&
        "function" == typeof e.type &&
        "__radixId" in e.type &&
        e.type.__radixId === i
      );
    }
    var l = [
      "a",
      "button",
      "div",
      "form",
      "h2",
      "h3",
      "img",
      "input",
      "label",
      "li",
      "nav",
      "ol",
      "p",
      "select",
      "span",
      "svg",
      "ul",
    ].reduce((e, i) => {
      var l, o;
      let a,
        u,
        c,
        d =
          ((o = l = `Primitive.${i}`),
          ((a = t.forwardRef((e, n) => {
            let { children: i, ...s } = e;
            if (t.isValidElement(i)) {
              var l;
              let e,
                o,
                a =
                  ((l = i),
                  (o =
                    (e = Object.getOwnPropertyDescriptor(
                      l.props,
                      "ref"
                    )?.get) &&
                    "isReactWarning" in e &&
                    e.isReactWarning)
                    ? l.ref
                    : (o =
                        (e = Object.getOwnPropertyDescriptor(l, "ref")?.get) &&
                        "isReactWarning" in e &&
                        e.isReactWarning)
                    ? l.props.ref
                    : l.props.ref || l.ref),
                u = (function (e, t) {
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
                })(s, i.props);
              return (
                i.type !== t.Fragment &&
                  (u.ref = n ? (0, r.composeRefs)(n, a) : a),
                t.cloneElement(i, u)
              );
            }
            return t.Children.count(i) > 1 ? t.Children.only(null) : null;
          })).displayName = `${o}.SlotClone`),
          (u = a),
          ((c = t.forwardRef((e, r) => {
            let { children: i, ...l } = e,
              o = t.Children.toArray(i),
              a = o.find(s);
            if (a) {
              let e = a.props.children,
                i = o.map((r) =>
                  r !== a
                    ? r
                    : t.Children.count(e) > 1
                    ? t.Children.only(null)
                    : t.isValidElement(e)
                    ? e.props.children
                    : null
                );
              return (0, n.jsx)(u, {
                ...l,
                ref: r,
                children: t.isValidElement(e)
                  ? t.cloneElement(e, void 0, i)
                  : null,
              });
            }
            return (0, n.jsx)(u, { ...l, ref: r, children: i });
          })).displayName = `${l}.Slot`),
          c),
        f = t.forwardRef((e, t) => {
          let { asChild: r, ...s } = e;
          return (
            "undefined" != typeof window &&
              (window[Symbol.for("radix-ui")] = !0),
            (0, n.jsx)(r ? d : i, { ...s, ref: t })
          );
        });
      return (f.displayName = `Primitive.${i}`), { ...e, [i]: f };
    }, {});
    e.s(["Primitive", () => l], 84753);
  },
  42394,
  (e) => {
    "use strict";
    var t = e.i(96592),
      r = e.i(35638),
      n = e.i(70946),
      i = e.i(75141);
    function s(e) {
      var r;
      let s,
        l =
          ((r = e),
          ((s = t.forwardRef((e, r) => {
            let { children: i, ...s } = e;
            if (t.isValidElement(i)) {
              var l;
              let e,
                o,
                a =
                  ((l = i),
                  (o =
                    (e = Object.getOwnPropertyDescriptor(
                      l.props,
                      "ref"
                    )?.get) &&
                    "isReactWarning" in e &&
                    e.isReactWarning)
                    ? l.ref
                    : (o =
                        (e = Object.getOwnPropertyDescriptor(l, "ref")?.get) &&
                        "isReactWarning" in e &&
                        e.isReactWarning)
                    ? l.props.ref
                    : l.props.ref || l.ref),
                u = (function (e, t) {
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
                })(s, i.props);
              return (
                i.type !== t.Fragment &&
                  (u.ref = r ? (0, n.composeRefs)(r, a) : a),
                t.cloneElement(i, u)
              );
            }
            return t.Children.count(i) > 1 ? t.Children.only(null) : null;
          })).displayName = `${r}.SlotClone`),
          s),
        a = t.forwardRef((e, r) => {
          let { children: n, ...s } = e,
            a = t.Children.toArray(n),
            u = a.find(o);
          if (u) {
            let e = u.props.children,
              n = a.map((r) =>
                r !== u
                  ? r
                  : t.Children.count(e) > 1
                  ? t.Children.only(null)
                  : t.isValidElement(e)
                  ? e.props.children
                  : null
              );
            return (0, i.jsx)(l, {
              ...s,
              ref: r,
              children: t.isValidElement(e)
                ? t.cloneElement(e, void 0, n)
                : null,
            });
          }
          return (0, i.jsx)(l, { ...s, ref: r, children: n });
        });
      return (a.displayName = `${e}.Slot`), a;
    }
    var l = Symbol("radix.slottable");
    function o(e) {
      return (
        t.isValidElement(e) &&
        "function" == typeof e.type &&
        "__radixId" in e.type &&
        e.type.__radixId === l
      );
    }
    function a(e) {
      let l = e + "CollectionProvider",
        [o, a] = (0, r.createContextScope)(l),
        [u, c] = o(l, { collectionRef: { current: null }, itemMap: new Map() }),
        d = (e) => {
          let { scope: r, children: n } = e,
            s = t.default.useRef(null),
            l = t.default.useRef(new Map()).current;
          return (0, i.jsx)(u, {
            scope: r,
            itemMap: l,
            collectionRef: s,
            children: n,
          });
        };
      d.displayName = l;
      let f = e + "CollectionSlot",
        h = s(f),
        p = t.default.forwardRef((e, t) => {
          let { scope: r, children: s } = e,
            l = c(f, r),
            o = (0, n.useComposedRefs)(t, l.collectionRef);
          return (0, i.jsx)(h, { ref: o, children: s });
        });
      p.displayName = f;
      let m = e + "CollectionItemSlot",
        x = "data-radix-collection-item",
        y = s(m),
        g = t.default.forwardRef((e, r) => {
          let { scope: s, children: l, ...o } = e,
            a = t.default.useRef(null),
            u = (0, n.useComposedRefs)(r, a),
            d = c(m, s);
          return (
            t.default.useEffect(
              () => (
                d.itemMap.set(a, { ref: a, ...o }),
                () => void d.itemMap.delete(a)
              )
            ),
            (0, i.jsx)(y, { ...{ [x]: "" }, ref: u, children: l })
          );
        });
      return (
        (g.displayName = m),
        [
          { Provider: d, Slot: p, ItemSlot: g },
          function (r) {
            let n = c(e + "CollectionConsumer", r);
            return t.default.useCallback(() => {
              let e = n.collectionRef.current;
              if (!e) return [];
              let t = Array.from(e.querySelectorAll(`[${x}]`));
              return Array.from(n.itemMap.values()).sort(
                (e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current)
              );
            }, [n.collectionRef, n.itemMap]);
          },
          a,
        ]
      );
    }
    var u = new WeakMap();
    function c(e, t) {
      var r, n;
      let i, s, l;
      if ("at" in Array.prototype) return Array.prototype.at.call(e, t);
      let o =
        ((r = e),
        (n = t),
        (i = r.length),
        (l = (s = d(n)) >= 0 ? s : i + s) < 0 || l >= i ? -1 : l);
      return -1 === o ? void 0 : e[o];
    }
    function d(e) {
      return e != e || 0 === e ? 0 : Math.trunc(e);
    }
    (class e extends Map {
      #e;
      constructor(e) {
        super(e), (this.#e = [...super.keys()]), u.set(this, !0);
      }
      set(e, t) {
        return (
          u.get(this) &&
            (this.has(e) ? (this.#e[this.#e.indexOf(e)] = e) : this.#e.push(e)),
          super.set(e, t),
          this
        );
      }
      insert(e, t, r) {
        let n,
          i = this.has(t),
          s = this.#e.length,
          l = d(e),
          o = l >= 0 ? l : s + l,
          a = o < 0 || o >= s ? -1 : o;
        if (a === this.size || (i && a === this.size - 1) || -1 === a)
          return this.set(t, r), this;
        let u = this.size + +!i;
        l < 0 && o++;
        let c = [...this.#e],
          f = !1;
        for (let e = o; e < u; e++)
          if (o === e) {
            let s = c[e];
            c[e] === t && (s = c[e + 1]),
              i && this.delete(t),
              (n = this.get(s)),
              this.set(t, r);
          } else {
            f || c[e - 1] !== t || (f = !0);
            let r = c[f ? e : e - 1],
              i = n;
            (n = this.get(r)), this.delete(r), this.set(r, i);
          }
        return this;
      }
      with(t, r, n) {
        let i = new e(this);
        return i.insert(t, r, n), i;
      }
      before(e) {
        let t = this.#e.indexOf(e) - 1;
        if (!(t < 0)) return this.entryAt(t);
      }
      setBefore(e, t, r) {
        let n = this.#e.indexOf(e);
        return -1 === n ? this : this.insert(n, t, r);
      }
      after(e) {
        let t = this.#e.indexOf(e);
        if (-1 !== (t = -1 === t || t === this.size - 1 ? -1 : t + 1))
          return this.entryAt(t);
      }
      setAfter(e, t, r) {
        let n = this.#e.indexOf(e);
        return -1 === n ? this : this.insert(n + 1, t, r);
      }
      first() {
        return this.entryAt(0);
      }
      last() {
        return this.entryAt(-1);
      }
      clear() {
        return (this.#e = []), super.clear();
      }
      delete(e) {
        let t = super.delete(e);
        return t && this.#e.splice(this.#e.indexOf(e), 1), t;
      }
      deleteAt(e) {
        let t = this.keyAt(e);
        return void 0 !== t && this.delete(t);
      }
      at(e) {
        let t = c(this.#e, e);
        if (void 0 !== t) return this.get(t);
      }
      entryAt(e) {
        let t = c(this.#e, e);
        if (void 0 !== t) return [t, this.get(t)];
      }
      indexOf(e) {
        return this.#e.indexOf(e);
      }
      keyAt(e) {
        return c(this.#e, e);
      }
      from(e, t) {
        let r = this.indexOf(e);
        if (-1 === r) return;
        let n = r + t;
        return (
          n < 0 && (n = 0), n >= this.size && (n = this.size - 1), this.at(n)
        );
      }
      keyFrom(e, t) {
        let r = this.indexOf(e);
        if (-1 === r) return;
        let n = r + t;
        return (
          n < 0 && (n = 0), n >= this.size && (n = this.size - 1), this.keyAt(n)
        );
      }
      find(e, t) {
        let r = 0;
        for (let n of this) {
          if (Reflect.apply(e, t, [n, r, this])) return n;
          r++;
        }
      }
      findIndex(e, t) {
        let r = 0;
        for (let n of this) {
          if (Reflect.apply(e, t, [n, r, this])) return r;
          r++;
        }
        return -1;
      }
      filter(t, r) {
        let n = [],
          i = 0;
        for (let e of this) Reflect.apply(t, r, [e, i, this]) && n.push(e), i++;
        return new e(n);
      }
      map(t, r) {
        let n = [],
          i = 0;
        for (let e of this)
          n.push([e[0], Reflect.apply(t, r, [e, i, this])]), i++;
        return new e(n);
      }
      reduce(...e) {
        let [t, r] = e,
          n = 0,
          i = r ?? this.at(0);
        for (let r of this)
          (i =
            0 === n && 1 === e.length
              ? r
              : Reflect.apply(t, this, [i, r, n, this])),
            n++;
        return i;
      }
      reduceRight(...e) {
        let [t, r] = e,
          n = r ?? this.at(-1);
        for (let r = this.size - 1; r >= 0; r--) {
          let i = this.at(r);
          n =
            r === this.size - 1 && 1 === e.length
              ? i
              : Reflect.apply(t, this, [n, i, r, this]);
        }
        return n;
      }
      toSorted(t) {
        return new e([...this.entries()].sort(t));
      }
      toReversed() {
        let t = new e();
        for (let e = this.size - 1; e >= 0; e--) {
          let r = this.keyAt(e),
            n = this.get(r);
          t.set(r, n);
        }
        return t;
      }
      toSpliced(...t) {
        let r = [...this.entries()];
        return r.splice(...t), new e(r);
      }
      slice(t, r) {
        let n = new e(),
          i = this.size - 1;
        if (void 0 === t) return n;
        t < 0 && (t += this.size), void 0 !== r && r > 0 && (i = r - 1);
        for (let e = t; e <= i; e++) {
          let t = this.keyAt(e),
            r = this.get(t);
          n.set(t, r);
        }
        return n;
      }
      every(e, t) {
        let r = 0;
        for (let n of this) {
          if (!Reflect.apply(e, t, [n, r, this])) return !1;
          r++;
        }
        return !0;
      }
      some(e, t) {
        let r = 0;
        for (let n of this) {
          if (Reflect.apply(e, t, [n, r, this])) return !0;
          r++;
        }
        return !1;
      }
    }),
      e.s(["createCollection", () => a], 42394);
  },
  42193,
  32659,
  (e) => {
    "use strict";
    var t = e.i(96592),
      r = globalThis?.document ? t.useLayoutEffect : () => {},
      n = t[" useId ".trim().toString()] || (() => void 0),
      i = 0;
    function s(e) {
      let [s, l] = t.useState(n());
      return (
        r(() => {
          e || l((e) => e ?? String(i++));
        }, [e]),
        e || (s ? `radix-${s}` : "")
      );
    }
    e.s(["useId", () => s], 42193), e.i(75141);
    var l = t.createContext(void 0);
    function o(e) {
      let r = t.useContext(l);
      return e || r || "ltr";
    }
    e.s(["useDirection", () => o], 32659);
  },
  8700,
  78938,
  (e) => {
    "use strict";
    var t = e.i(27460);
    let r = (0, t.default)("Phone", [
      [
        "path",
        {
          d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
          key: "foiqr5",
        },
      ],
    ]);
    e.s(["Phone", () => r], 8700);
    let n = (0, t.default)("Mail", [
      [
        "rect",
        { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
      ],
      [
        "path",
        { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" },
      ],
    ]);
    e.s(["Mail", () => n], 78938);
  },
]);
