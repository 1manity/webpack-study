!function (e) {
    var t = {};

    function r(n) {
        if (t[n]) return  t[n].exports;
        var o = t[n] = {i: n, l: !1, exports: {}};
        return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }

    r.m = e, r.c = t, r.d = function (e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
    }, r.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, r.t = function (e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var o in e) r.d(n, o, function (t) {
            return e[t]
        }.bind(null, o));
        return n
    }, r.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 0)
}([function (e, t, r) {
    "use strict";
    r.r(t);
    var n = ["#f26395", "#62efab", "#ef7658", "#ffe868", "#80e3f7", "#d781f9"];

    function o(e, t) {
        return Math.floor(Math.random() * (t - e) + e)
    }

    var i = document.querySelector("#divContainer"), u = document.querySelector("#divCenter"), a = function (e, t) {
        var r, a = document.createElement("span");
        if (t) {
            var l = (r = o(0, n.length), n[r]);
            a.style.color = l, function (e, t) {
                var r = document.createElement("div");
                r.className = "center", r.style.color = t, r.innerText = e, document.body.appendChild(r), getComputedStyle(r).left, r.style.transform = `translate(${o(-200, 200)}px, ${o(-200, 200)}px)`, r.style.opacity = 0
            }(e, l)
        }
        !function (e) {
            u.innerText = e
        }(e), a.innerText = e, i.appendChild(a)
    };
    var l = !0, c = new class {
        constructor(e = 500) {
            this.duration = e, this.number = 1, this.onNumberCreated = null, this.timerId = null
        }

        start() {
            this.timerId || (this.timerId = setInterval(() => {
                this.onNumberCreated && this.onNumberCreated(this.number, function (e) {
                    if (e < 2) return !1;
                    if (2 === e) return !0;
                    if (e % 2 == 0) return !1;
                    {
                        let t = Math.floor(Math.sqrt(e));
                        for (let r = 3; r <= t; r += 2) if (e % r == 0) return !1;
                        return !0
                    }
                }(this.number)), this.number++
            }, this.duration))
        }

        stop() {
            clearInterval(this.timerId), this.timerId = null
        }
    };
    c.onNumberCreated = function (e, t) {
        a(e, t)
    }, c.start(), window.onclick = function () {
        l ? (c.stop(), l = !1) : (c.start(), l = !0)
    }
}]);
