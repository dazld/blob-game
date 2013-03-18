var PIXI = PIXI || {};
PIXI.Point = function (b, c) {
    this.x = b ? b : 0;
    this.y = c ? c : 0
};
PIXI.Point.clone = function () {
    return new PIXI.Point(this.x, this.y)
};
PIXI.Point.constructor = PIXI.Point;
PIXI.Rectangle = function (b, c, f, e) {
    this.x = b ? b : 0;
    this.y = c ? c : 0;
    this.width = f ? f : 0;
    this.height = e ? e : 0
};
PIXI.Rectangle.clone = function () {
    return new PIXI.Rectangle(this.x, this.y, this.width, this.height)
};
PIXI.Rectangle.constructor = PIXI.Rectangle;
window.requestAnimFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (b) {
        window.setTimeout(b, 1E3 / 60)
    }
}();

function HEXtoRGB(b) {
    return [(b >> 16 & 255) / 255, (b >> 8 & 255) / 255, (b & 255) / 255]
}
"function" != typeof Function.prototype.bind && (Function.prototype.bind = function () {
    var b = Array.prototype.slice;
    return function (c) {
        function f() {
            var h = g.concat(b.call(arguments));
            e.apply(this instanceof f ? this : c, h)
        }
        var e = this,
            g = b.call(arguments, 1);
        if ("function" != typeof e) throw new TypeError;
        f.prototype = function j(b) {
            b && (j.prototype = b);
            if (!(this instanceof j)) return new j
        }(e.prototype);
        return f
    }
}());
var AjaxRequest = function () {
    var b = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP"];
    if (window.ActiveXObject) for (var c = 0; c < b.length; c++) try {
                return new ActiveXObject(b[c])
    } catch (f) {} else return window.XMLHttpRequest ? new XMLHttpRequest : !1
};
PIXI.EventTarget = function () {
    var b = {};
    this.addEventListener = function (c, f) {
        void 0 === b[c] && (b[c] = []); - 1 === b[c].indexOf(f) && b[c].push(f)
    };
    this.dispatchEvent = function (c) {
        for (var f in b[c.type]) b[c.type][f](c)
    };
    this.removeEventListener = function (c, f) {
        var e = b[c].indexOf(f); - 1 !== e && b[c].splice(e, 1)
    }
};
(function (b, c) {
    "object" === typeof exports ? module.exports = c(global) : "function" === typeof define && define.amd ? define([], function () {
        return c(b)
    }) : c(b)
})(this, function (b) {
    function c(a) {
        return j = a
    }
    function f() {
        return j = "undefined" !== typeof Float32Array ? Float32Array : Array
    }
    var e = {};
    if ("undefined" != typeof Float32Array) {
        var g = new Float32Array(1),
            h = new Int32Array(g.buffer);
        e.invsqrt = function (a) {
            g[0] = a;
            h[0] = 1597463007 - (h[0] >> 1);
            var d = g[0];
            return d * (1.5 - 0.5 * a * d * d)
        }
    } else e.invsqrt = function (a) {
            return 1 / Math.sqrt(a)
    };
    var j = null;
    f();
    var n = {
        create: function (a) {
            var d = new j(3);
            a ? (d[0] = a[0], d[1] = a[1], d[2] = a[2]) : d[0] = d[1] = d[2] = 0;
            return d
        },
        createFrom: function (a, d, l) {
            var b = new j(3);
            b[0] = a;
            b[1] = d;
            b[2] = l;
            return b
        },
        set: function (a, d) {
            d[0] = a[0];
            d[1] = a[1];
            d[2] = a[2];
            return d
        },
        equal: function (a, d) {
            return a === d || 1E-6 > Math.abs(a[0] - d[0]) && 1E-6 > Math.abs(a[1] - d[1]) && 1E-6 > Math.abs(a[2] - d[2])
        },
        add: function (a, d, l) {
            if (!l || a === l) return a[0] += d[0], a[1] += d[1], a[2] += d[2], a;
            l[0] = a[0] + d[0];
            l[1] = a[1] + d[1];
            l[2] = a[2] + d[2];
            return l
        },
        subtract: function (a,
        d, l) {
            if (!l || a === l) return a[0] -= d[0], a[1] -= d[1], a[2] -= d[2], a;
            l[0] = a[0] - d[0];
            l[1] = a[1] - d[1];
            l[2] = a[2] - d[2];
            return l
        },
        multiply: function (a, d, l) {
            if (!l || a === l) return a[0] *= d[0], a[1] *= d[1], a[2] *= d[2], a;
            l[0] = a[0] * d[0];
            l[1] = a[1] * d[1];
            l[2] = a[2] * d[2];
            return l
        },
        negate: function (a, d) {
            d || (d = a);
            d[0] = -a[0];
            d[1] = -a[1];
            d[2] = -a[2];
            return d
        },
        scale: function (a, d, l) {
            if (!l || a === l) return a[0] *= d, a[1] *= d, a[2] *= d, a;
            l[0] = a[0] * d;
            l[1] = a[1] * d;
            l[2] = a[2] * d;
            return l
        },
        normalize: function (a, d) {
            d || (d = a);
            var l = a[0],
                b = a[1],
                c = a[2],
                e = Math.sqrt(l *
                    l + b * b + c * c);
            if (!e) return d[0] = 0, d[1] = 0, d[2] = 0, d;
            if (1 === e) return d[0] = l, d[1] = b, d[2] = c, d;
            e = 1 / e;
            d[0] = l * e;
            d[1] = b * e;
            d[2] = c * e;
            return d
        },
        cross: function (a, d, l) {
            l || (l = a);
            var b = a[0],
                c = a[1];
            a = a[2];
            var e = d[0],
                k = d[1];
            d = d[2];
            l[0] = c * d - a * k;
            l[1] = a * e - b * d;
            l[2] = b * k - c * e;
            return l
        },
        length: function (a) {
            var d = a[0],
                l = a[1];
            a = a[2];
            return Math.sqrt(d * d + l * l + a * a)
        },
        squaredLength: function (a) {
            var d = a[0],
                l = a[1];
            a = a[2];
            return d * d + l * l + a * a
        },
        dot: function (a, d) {
            return a[0] * d[0] + a[1] * d[1] + a[2] * d[2]
        },
        direction: function (a, d, l) {
            l || (l = a);
            var b =
                a[0] - d[0],
                c = a[1] - d[1];
            a = a[2] - d[2];
            d = Math.sqrt(b * b + c * c + a * a);
            if (!d) return l[0] = 0, l[1] = 0, l[2] = 0, l;
            d = 1 / d;
            l[0] = b * d;
            l[1] = c * d;
            l[2] = a * d;
            return l
        },
        lerp: function (a, d, l, b) {
            b || (b = a);
            b[0] = a[0] + l * (d[0] - a[0]);
            b[1] = a[1] + l * (d[1] - a[1]);
            b[2] = a[2] + l * (d[2] - a[2]);
            return b
        },
        dist: function (a, d) {
            var l = d[0] - a[0],
                b = d[1] - a[1],
                c = d[2] - a[2];
            return Math.sqrt(l * l + b * b + c * c)
        }
    }, q = null,
        p = new j(4);
    n.unproject = function (a, d, l, b, c) {
        c || (c = a);
        q || (q = u.create());
        var e = q;
        p[0] = 2 * (a[0] - b[0]) / b[2] - 1;
        p[1] = 2 * (a[1] - b[1]) / b[3] - 1;
        p[2] = 2 * a[2] - 1;
        p[3] = 1;
        u.multiply(l, d, e);
        if (!u.inverse(e)) return null;
        u.multiplyVec4(e, p);
        if (0 === p[3]) return null;
        c[0] = p[0] / p[3];
        c[1] = p[1] / p[3];
        c[2] = p[2] / p[3];
        return c
    };
    var C = n.createFrom(1, 0, 0),
        D = n.createFrom(0, 1, 0),
        s = n.createFrom(0, 0, 1),
        x = n.create();
    n.rotationTo = function (a, d, l) {
        l || (l = m.create());
        var b = n.dot(a, d);
        if (1 <= b) m.set(E, l);
        else if (-0.999999 > b) n.cross(C, a, x), 1E-6 > n.length(x) && n.cross(D, a, x), 1E-6 > n.length(x) && n.cross(s, a, x), n.normalize(x), m.fromAngleAxis(Math.PI, x, l);
        else {
            var b = Math.sqrt(2 * (1 + b)),
                c = 1 / b;
            n.cross(a,
            d, x);
            l[0] = x[0] * c;
            l[1] = x[1] * c;
            l[2] = x[2] * c;
            l[3] = 0.5 * b;
            m.normalize(l)
        }
        1 < l[3] ? l[3] = 1 : -1 > l[3] && (l[3] = -1);
        return l
    };
    n.str = function (a) {
        return "[" + a[0] + ", " + a[1] + ", " + a[2] + "]"
    };
    var y = {
        create: function (a) {
            var d = new j(9);
            a ? (d[0] = a[0], d[1] = a[1], d[2] = a[2], d[3] = a[3], d[4] = a[4], d[5] = a[5], d[6] = a[6], d[7] = a[7], d[8] = a[8]) : d[0] = d[1] = d[2] = d[3] = d[4] = d[5] = d[6] = d[7] = d[8] = 0;
            return d
        },
        createFrom: function (a, d, l, b, c, e, k, f, G) {
            var t = new j(9);
            t[0] = a;
            t[1] = d;
            t[2] = l;
            t[3] = b;
            t[4] = c;
            t[5] = e;
            t[6] = k;
            t[7] = f;
            t[8] = G;
            return t
        },
        determinant: function (a) {
            var d =
                a[3],
                l = a[4],
                b = a[5],
                c = a[6],
                e = a[7],
                k = a[8];
            return a[0] * (k * l - b * e) + a[1] * (-k * d + b * c) + a[2] * (e * d - l * c)
        },
        inverse: function (a, d) {
            var l = a[0],
                b = a[1],
                c = a[2],
                e = a[3],
                k = a[4],
                f = a[5],
                G = a[6],
                t = a[7],
                g = a[8],
                h = g * k - f * t,
                j = -g * e + f * G,
                m = t * e - k * G,
                r = l * h + b * j + c * m;
            if (!r) return null;
            r = 1 / r;
            d || (d = y.create());
            d[0] = h * r;
            d[1] = (-g * b + c * t) * r;
            d[2] = (f * b - c * k) * r;
            d[3] = j * r;
            d[4] = (g * l - c * G) * r;
            d[5] = (-f * l + c * e) * r;
            d[6] = m * r;
            d[7] = (-t * l + b * G) * r;
            d[8] = (k * l - b * e) * r;
            return d
        },
        multiply: function (a, d, l) {
            l || (l = a);
            var b = a[0],
                c = a[1],
                e = a[2],
                k = a[3],
                f = a[4],
                G = a[5],
                t = a[6],
                g =
                    a[7];
            a = a[8];
            var h = d[0],
                j = d[1],
                m = d[2],
                r = d[3],
                n = d[4],
                v = d[5],
                p = d[6],
                w = d[7];
            d = d[8];
            l[0] = h * b + j * k + m * t;
            l[1] = h * c + j * f + m * g;
            l[2] = h * e + j * G + m * a;
            l[3] = r * b + n * k + v * t;
            l[4] = r * c + n * f + v * g;
            l[5] = r * e + n * G + v * a;
            l[6] = p * b + w * k + d * t;
            l[7] = p * c + w * f + d * g;
            l[8] = p * e + w * G + d * a;
            return l
        },
        multiplyVec2: function (a, d, l) {
            l || (l = d);
            var b = d[0];
            d = d[1];
            l[0] = b * a[0] + d * a[3] + a[6];
            l[1] = b * a[1] + d * a[4] + a[7];
            return l
        },
        multiplyVec3: function (a, d, l) {
            l || (l = d);
            var b = d[0],
                c = d[1];
            d = d[2];
            l[0] = b * a[0] + c * a[3] + d * a[6];
            l[1] = b * a[1] + c * a[4] + d * a[7];
            l[2] = b * a[2] + c * a[5] + d * a[8];
            return l
        },
        set: function (a, d) {
            d[0] = a[0];
            d[1] = a[1];
            d[2] = a[2];
            d[3] = a[3];
            d[4] = a[4];
            d[5] = a[5];
            d[6] = a[6];
            d[7] = a[7];
            d[8] = a[8];
            return d
        },
        equal: function (a, d) {
            return a === d || 1E-6 > Math.abs(a[0] - d[0]) && 1E-6 > Math.abs(a[1] - d[1]) && 1E-6 > Math.abs(a[2] - d[2]) && 1E-6 > Math.abs(a[3] - d[3]) && 1E-6 > Math.abs(a[4] - d[4]) && 1E-6 > Math.abs(a[5] - d[5]) && 1E-6 > Math.abs(a[6] - d[6]) && 1E-6 > Math.abs(a[7] - d[7]) && 1E-6 > Math.abs(a[8] - d[8])
        },
        identity: function (a) {
            a || (a = y.create());
            a[0] = 1;
            a[1] = 0;
            a[2] = 0;
            a[3] = 0;
            a[4] = 1;
            a[5] = 0;
            a[6] = 0;
            a[7] = 0;
            a[8] = 1;
            return a
        },
        transpose: function (a,
        d) {
            if (!d || a === d) {
                var l = a[1],
                    b = a[2],
                    c = a[5];
                a[1] = a[3];
                a[2] = a[6];
                a[3] = l;
                a[5] = a[7];
                a[6] = b;
                a[7] = c;
                return a
            }
            d[0] = a[0];
            d[1] = a[3];
            d[2] = a[6];
            d[3] = a[1];
            d[4] = a[4];
            d[5] = a[7];
            d[6] = a[2];
            d[7] = a[5];
            d[8] = a[8];
            return d
        },
        toMat4: function (a, d) {
            d || (d = u.create());
            d[15] = 1;
            d[14] = 0;
            d[13] = 0;
            d[12] = 0;
            d[11] = 0;
            d[10] = a[8];
            d[9] = a[7];
            d[8] = a[6];
            d[7] = 0;
            d[6] = a[5];
            d[5] = a[4];
            d[4] = a[3];
            d[3] = 0;
            d[2] = a[2];
            d[1] = a[1];
            d[0] = a[0];
            return d
        },
        str: function (a) {
            return "[" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " +
                a[8] + "]"
        }
    }, u = {
            create: function (a) {
                var d = new j(16);
                a && (d[0] = a[0], d[1] = a[1], d[2] = a[2], d[3] = a[3], d[4] = a[4], d[5] = a[5], d[6] = a[6], d[7] = a[7], d[8] = a[8], d[9] = a[9], d[10] = a[10], d[11] = a[11], d[12] = a[12], d[13] = a[13], d[14] = a[14], d[15] = a[15]);
                return d
            },
            createFrom: function (a, d, l, b, c, e, k, f, G, t, g, h, m, n, r, p) {
                var v = new j(16);
                v[0] = a;
                v[1] = d;
                v[2] = l;
                v[3] = b;
                v[4] = c;
                v[5] = e;
                v[6] = k;
                v[7] = f;
                v[8] = G;
                v[9] = t;
                v[10] = g;
                v[11] = h;
                v[12] = m;
                v[13] = n;
                v[14] = r;
                v[15] = p;
                return v
            },
            set: function (a, d) {
                d[0] = a[0];
                d[1] = a[1];
                d[2] = a[2];
                d[3] = a[3];
                d[4] = a[4];
                d[5] = a[5];
                d[6] = a[6];
                d[7] = a[7];
                d[8] = a[8];
                d[9] = a[9];
                d[10] = a[10];
                d[11] = a[11];
                d[12] = a[12];
                d[13] = a[13];
                d[14] = a[14];
                d[15] = a[15];
                return d
            },
            equal: function (a, d) {
                return a === d || 1E-6 > Math.abs(a[0] - d[0]) && 1E-6 > Math.abs(a[1] - d[1]) && 1E-6 > Math.abs(a[2] - d[2]) && 1E-6 > Math.abs(a[3] - d[3]) && 1E-6 > Math.abs(a[4] - d[4]) && 1E-6 > Math.abs(a[5] - d[5]) && 1E-6 > Math.abs(a[6] - d[6]) && 1E-6 > Math.abs(a[7] - d[7]) && 1E-6 > Math.abs(a[8] - d[8]) && 1E-6 > Math.abs(a[9] - d[9]) && 1E-6 > Math.abs(a[10] - d[10]) && 1E-6 > Math.abs(a[11] - d[11]) && 1E-6 > Math.abs(a[12] -
                    d[12]) && 1E-6 > Math.abs(a[13] - d[13]) && 1E-6 > Math.abs(a[14] - d[14]) && 1E-6 > Math.abs(a[15] - d[15])
            },
            identity: function (a) {
                a || (a = u.create());
                a[0] = 1;
                a[1] = 0;
                a[2] = 0;
                a[3] = 0;
                a[4] = 0;
                a[5] = 1;
                a[6] = 0;
                a[7] = 0;
                a[8] = 0;
                a[9] = 0;
                a[10] = 1;
                a[11] = 0;
                a[12] = 0;
                a[13] = 0;
                a[14] = 0;
                a[15] = 1;
                return a
            },
            transpose: function (a, d) {
                if (!d || a === d) {
                    var l = a[1],
                        b = a[2],
                        c = a[3],
                        e = a[6],
                        k = a[7],
                        f = a[11];
                    a[1] = a[4];
                    a[2] = a[8];
                    a[3] = a[12];
                    a[4] = l;
                    a[6] = a[9];
                    a[7] = a[13];
                    a[8] = b;
                    a[9] = e;
                    a[11] = a[14];
                    a[12] = c;
                    a[13] = k;
                    a[14] = f;
                    return a
                }
                d[0] = a[0];
                d[1] = a[4];
                d[2] = a[8];
                d[3] = a[12];
                d[4] = a[1];
                d[5] = a[5];
                d[6] = a[9];
                d[7] = a[13];
                d[8] = a[2];
                d[9] = a[6];
                d[10] = a[10];
                d[11] = a[14];
                d[12] = a[3];
                d[13] = a[7];
                d[14] = a[11];
                d[15] = a[15];
                return d
            },
            determinant: function (a) {
                var d = a[0],
                    l = a[1],
                    b = a[2],
                    c = a[3],
                    e = a[4],
                    k = a[5],
                    f = a[6],
                    g = a[7],
                    t = a[8],
                    h = a[9],
                    j = a[10],
                    m = a[11],
                    n = a[12],
                    r = a[13],
                    p = a[14];
                a = a[15];
                return n * h * f * c - t * r * f * c - n * k * j * c + e * r * j * c + t * k * p * c - e * h * p * c - n * h * b * g + t * r * b * g + n * l * j * g - d * r * j * g - t * l * p * g + d * h * p * g + n * k * b * m - e * r * b * m - n * l * f * m + d * r * f * m + e * l * p * m - d * k * p * m - t * k * b * a + e * h * b * a + t * l * f * a - d * h * f * a - e * l * j * a + d * k * j * a
            },
            inverse: function (a,
            d) {
                d || (d = a);
                var b = a[0],
                    c = a[1],
                    e = a[2],
                    f = a[3],
                    k = a[4],
                    g = a[5],
                    h = a[6],
                    t = a[7],
                    j = a[8],
                    m = a[9],
                    n = a[10],
                    p = a[11],
                    r = a[12],
                    s = a[13],
                    v = a[14],
                    u = a[15],
                    w = b * g - c * k,
                    H = b * h - e * k,
                    z = b * t - f * k,
                    A = c * h - e * g,
                    q = c * t - f * g,
                    x = e * t - f * h,
                    y = j * s - m * r,
                    B = j * v - n * r,
                    C = j * u - p * r,
                    D = m * v - n * s,
                    E = m * u - p * s,
                    I = n * u - p * v,
                    F = w * I - H * E + z * D + A * C - q * B + x * y;
                if (!F) return null;
                F = 1 / F;
                d[0] = (g * I - h * E + t * D) * F;
                d[1] = (-c * I + e * E - f * D) * F;
                d[2] = (s * x - v * q + u * A) * F;
                d[3] = (-m * x + n * q - p * A) * F;
                d[4] = (-k * I + h * C - t * B) * F;
                d[5] = (b * I - e * C + f * B) * F;
                d[6] = (-r * x + v * z - u * H) * F;
                d[7] = (j * x - n * z + p * H) * F;
                d[8] = (k * E - g * C + t * y) * F;
                d[9] =
                    (-b * E + c * C - f * y) * F;
                d[10] = (r * q - s * z + u * w) * F;
                d[11] = (-j * q + m * z - p * w) * F;
                d[12] = (-k * D + g * B - h * y) * F;
                d[13] = (b * D - c * B + e * y) * F;
                d[14] = (-r * A + s * H - v * w) * F;
                d[15] = (j * A - m * H + n * w) * F;
                return d
            },
            toRotationMat: function (a, d) {
                d || (d = u.create());
                d[0] = a[0];
                d[1] = a[1];
                d[2] = a[2];
                d[3] = a[3];
                d[4] = a[4];
                d[5] = a[5];
                d[6] = a[6];
                d[7] = a[7];
                d[8] = a[8];
                d[9] = a[9];
                d[10] = a[10];
                d[11] = a[11];
                d[12] = 0;
                d[13] = 0;
                d[14] = 0;
                d[15] = 1;
                return d
            },
            toMat3: function (a, d) {
                d || (d = y.create());
                d[0] = a[0];
                d[1] = a[1];
                d[2] = a[2];
                d[3] = a[4];
                d[4] = a[5];
                d[5] = a[6];
                d[6] = a[8];
                d[7] = a[9];
                d[8] = a[10];
                return d
            },
            toInverseMat3: function (a, d) {
                var b = a[0],
                    c = a[1],
                    e = a[2],
                    f = a[4],
                    k = a[5],
                    g = a[6],
                    h = a[8],
                    t = a[9],
                    j = a[10],
                    m = j * k - g * t,
                    n = -j * f + g * h,
                    p = t * f - k * h,
                    r = b * m + c * n + e * p;
                if (!r) return null;
                r = 1 / r;
                d || (d = y.create());
                d[0] = m * r;
                d[1] = (-j * c + e * t) * r;
                d[2] = (g * c - e * k) * r;
                d[3] = n * r;
                d[4] = (j * b - e * h) * r;
                d[5] = (-g * b + e * f) * r;
                d[6] = p * r;
                d[7] = (-t * b + c * h) * r;
                d[8] = (k * b - c * f) * r;
                return d
            },
            multiply: function (a, d, b) {
                b || (b = a);
                var c = a[0],
                    e = a[1],
                    f = a[2],
                    k = a[3],
                    g = a[4],
                    h = a[5],
                    t = a[6],
                    j = a[7],
                    m = a[8],
                    n = a[9],
                    p = a[10],
                    r = a[11],
                    s = a[12],
                    v = a[13],
                    u = a[14];
                a = a[15];
                var w = d[0],
                    q = d[1],
                    z = d[2],
                    A = d[3];
                b[0] = w * c + q * g + z * m + A * s;
                b[1] = w * e + q * h + z * n + A * v;
                b[2] = w * f + q * t + z * p + A * u;
                b[3] = w * k + q * j + z * r + A * a;
                w = d[4];
                q = d[5];
                z = d[6];
                A = d[7];
                b[4] = w * c + q * g + z * m + A * s;
                b[5] = w * e + q * h + z * n + A * v;
                b[6] = w * f + q * t + z * p + A * u;
                b[7] = w * k + q * j + z * r + A * a;
                w = d[8];
                q = d[9];
                z = d[10];
                A = d[11];
                b[8] = w * c + q * g + z * m + A * s;
                b[9] = w * e + q * h + z * n + A * v;
                b[10] = w * f + q * t + z * p + A * u;
                b[11] = w * k + q * j + z * r + A * a;
                w = d[12];
                q = d[13];
                z = d[14];
                A = d[15];
                b[12] = w * c + q * g + z * m + A * s;
                b[13] = w * e + q * h + z * n + A * v;
                b[14] = w * f + q * t + z * p + A * u;
                b[15] = w * k + q * j + z * r + A * a;
                return b
            },
            multiplyVec3: function (a, d, b) {
                b || (b = d);
                var c = d[0],
                    e = d[1];
                d = d[2];
                b[0] = a[0] * c + a[4] * e + a[8] * d + a[12];
                b[1] = a[1] * c + a[5] * e + a[9] * d + a[13];
                b[2] = a[2] * c + a[6] * e + a[10] * d + a[14];
                return b
            },
            multiplyVec4: function (a, d, b) {
                b || (b = d);
                var c = d[0],
                    e = d[1],
                    f = d[2];
                d = d[3];
                b[0] = a[0] * c + a[4] * e + a[8] * f + a[12] * d;
                b[1] = a[1] * c + a[5] * e + a[9] * f + a[13] * d;
                b[2] = a[2] * c + a[6] * e + a[10] * f + a[14] * d;
                b[3] = a[3] * c + a[7] * e + a[11] * f + a[15] * d;
                return b
            },
            translate: function (a, d, b) {
                var c = d[0],
                    e = d[1];
                d = d[2];
                var f, k, g, h, j, m, n, p, q, r, s, v;
                if (!b || a === b) return a[12] = a[0] * c + a[4] * e + a[8] * d + a[12], a[13] = a[1] * c + a[5] * e +
                        a[9] * d + a[13], a[14] = a[2] * c + a[6] * e + a[10] * d + a[14], a[15] = a[3] * c + a[7] * e + a[11] * d + a[15], a;
                f = a[0];
                k = a[1];
                g = a[2];
                h = a[3];
                j = a[4];
                m = a[5];
                n = a[6];
                p = a[7];
                q = a[8];
                r = a[9];
                s = a[10];
                v = a[11];
                b[0] = f;
                b[1] = k;
                b[2] = g;
                b[3] = h;
                b[4] = j;
                b[5] = m;
                b[6] = n;
                b[7] = p;
                b[8] = q;
                b[9] = r;
                b[10] = s;
                b[11] = v;
                b[12] = f * c + j * e + q * d + a[12];
                b[13] = k * c + m * e + r * d + a[13];
                b[14] = g * c + n * e + s * d + a[14];
                b[15] = h * c + p * e + v * d + a[15];
                return b
            },
            scale: function (a, d, b) {
                var c = d[0],
                    e = d[1];
                d = d[2];
                if (!b || a === b) return a[0] *= c, a[1] *= c, a[2] *= c, a[3] *= c, a[4] *= e, a[5] *= e, a[6] *= e, a[7] *= e, a[8] *= d, a[9] *=
                        d, a[10] *= d, a[11] *= d, a;
                b[0] = a[0] * c;
                b[1] = a[1] * c;
                b[2] = a[2] * c;
                b[3] = a[3] * c;
                b[4] = a[4] * e;
                b[5] = a[5] * e;
                b[6] = a[6] * e;
                b[7] = a[7] * e;
                b[8] = a[8] * d;
                b[9] = a[9] * d;
                b[10] = a[10] * d;
                b[11] = a[11] * d;
                b[12] = a[12];
                b[13] = a[13];
                b[14] = a[14];
                b[15] = a[15];
                return b
            },
            rotate: function (a, d, b, c) {
                var e = b[0],
                    f = b[1];
                b = b[2];
                var k = Math.sqrt(e * e + f * f + b * b),
                    g, h, j, m, n, p, q, r, s, v, u, w, x, z, A, y, B, C, D, E;
                if (!k) return null;
                1 !== k && (k = 1 / k, e *= k, f *= k, b *= k);
                g = Math.sin(d);
                h = Math.cos(d);
                j = 1 - h;
                d = a[0];
                k = a[1];
                m = a[2];
                n = a[3];
                p = a[4];
                q = a[5];
                r = a[6];
                s = a[7];
                v = a[8];
                u = a[9];
                w =
                    a[10];
                x = a[11];
                z = e * e * j + h;
                A = f * e * j + b * g;
                y = b * e * j - f * g;
                B = e * f * j - b * g;
                C = f * f * j + h;
                D = b * f * j + e * g;
                E = e * b * j + f * g;
                e = f * b * j - e * g;
                f = b * b * j + h;
                c ? a !== c && (c[12] = a[12], c[13] = a[13], c[14] = a[14], c[15] = a[15]) : c = a;
                c[0] = d * z + p * A + v * y;
                c[1] = k * z + q * A + u * y;
                c[2] = m * z + r * A + w * y;
                c[3] = n * z + s * A + x * y;
                c[4] = d * B + p * C + v * D;
                c[5] = k * B + q * C + u * D;
                c[6] = m * B + r * C + w * D;
                c[7] = n * B + s * C + x * D;
                c[8] = d * E + p * e + v * f;
                c[9] = k * E + q * e + u * f;
                c[10] = m * E + r * e + w * f;
                c[11] = n * E + s * e + x * f;
                return c
            },
            rotateX: function (a, d, b) {
                var c = Math.sin(d);
                d = Math.cos(d);
                var e = a[4],
                    f = a[5],
                    k = a[6],
                    g = a[7],
                    h = a[8],
                    j = a[9],
                    m = a[10],
                    n = a[11];
                b ? a !== b && (b[0] = a[0], b[1] = a[1], b[2] = a[2], b[3] = a[3], b[12] = a[12], b[13] = a[13], b[14] = a[14], b[15] = a[15]) : b = a;
                b[4] = e * d + h * c;
                b[5] = f * d + j * c;
                b[6] = k * d + m * c;
                b[7] = g * d + n * c;
                b[8] = e * -c + h * d;
                b[9] = f * -c + j * d;
                b[10] = k * -c + m * d;
                b[11] = g * -c + n * d;
                return b
            },
            rotateY: function (a, d, b) {
                var c = Math.sin(d);
                d = Math.cos(d);
                var e = a[0],
                    f = a[1],
                    k = a[2],
                    g = a[3],
                    h = a[8],
                    j = a[9],
                    m = a[10],
                    n = a[11];
                b ? a !== b && (b[4] = a[4], b[5] = a[5], b[6] = a[6], b[7] = a[7], b[12] = a[12], b[13] = a[13], b[14] = a[14], b[15] = a[15]) : b = a;
                b[0] = e * d + h * -c;
                b[1] = f * d + j * -c;
                b[2] = k * d + m * -c;
                b[3] = g *
                    d + n * -c;
                b[8] = e * c + h * d;
                b[9] = f * c + j * d;
                b[10] = k * c + m * d;
                b[11] = g * c + n * d;
                return b
            },
            rotateZ: function (a, d, b) {
                var c = Math.sin(d);
                d = Math.cos(d);
                var e = a[0],
                    f = a[1],
                    k = a[2],
                    g = a[3],
                    h = a[4],
                    j = a[5],
                    m = a[6],
                    n = a[7];
                b ? a !== b && (b[8] = a[8], b[9] = a[9], b[10] = a[10], b[11] = a[11], b[12] = a[12], b[13] = a[13], b[14] = a[14], b[15] = a[15]) : b = a;
                b[0] = e * d + h * c;
                b[1] = f * d + j * c;
                b[2] = k * d + m * c;
                b[3] = g * d + n * c;
                b[4] = e * -c + h * d;
                b[5] = f * -c + j * d;
                b[6] = k * -c + m * d;
                b[7] = g * -c + n * d;
                return b
            },
            frustum: function (a, d, b, c, e, f, k) {
                k || (k = u.create());
                var g = d - a,
                    h = c - b,
                    j = f - e;
                k[0] = 2 * e / g;
                k[1] = 0;
                k[2] = 0;
                k[3] = 0;
                k[4] = 0;
                k[5] = 2 * e / h;
                k[6] = 0;
                k[7] = 0;
                k[8] = (d + a) / g;
                k[9] = (c + b) / h;
                k[10] = -(f + e) / j;
                k[11] = -1;
                k[12] = 0;
                k[13] = 0;
                k[14] = -(2 * f * e) / j;
                k[15] = 0;
                return k
            },
            perspective: function (a, d, b, c, e) {
                a = b * Math.tan(a * Math.PI / 360);
                d *= a;
                return u.frustum(-d, d, -a, a, b, c, e)
            },
            ortho: function (a, d, b, c, e, f, k) {
                k || (k = u.create());
                var g = d - a,
                    h = c - b,
                    j = f - e;
                k[0] = 2 / g;
                k[1] = 0;
                k[2] = 0;
                k[3] = 0;
                k[4] = 0;
                k[5] = 2 / h;
                k[6] = 0;
                k[7] = 0;
                k[8] = 0;
                k[9] = 0;
                k[10] = -2 / j;
                k[11] = 0;
                k[12] = -(a + d) / g;
                k[13] = -(c + b) / h;
                k[14] = -(f + e) / j;
                k[15] = 1;
                return k
            },
            lookAt: function (a, d, b, c) {
                c ||
                    (c = u.create());
                var e, f, k, g, h, j, m, n, p = a[0],
                    q = a[1];
                a = a[2];
                k = b[0];
                g = b[1];
                f = b[2];
                m = d[0];
                b = d[1];
                e = d[2];
                if (p === m && q === b && a === e) return u.identity(c);
                d = p - m;
                b = q - b;
                m = a - e;
                n = 1 / Math.sqrt(d * d + b * b + m * m);
                d *= n;
                b *= n;
                m *= n;
                e = g * m - f * b;
                f = f * d - k * m;
                k = k * b - g * d;
                (n = Math.sqrt(e * e + f * f + k * k)) ? (n = 1 / n, e *= n, f *= n, k *= n) : k = f = e = 0;
                g = b * k - m * f;
                h = m * e - d * k;
                j = d * f - b * e;
                (n = Math.sqrt(g * g + h * h + j * j)) ? (n = 1 / n, g *= n, h *= n, j *= n) : j = h = g = 0;
                c[0] = e;
                c[1] = g;
                c[2] = d;
                c[3] = 0;
                c[4] = f;
                c[5] = h;
                c[6] = b;
                c[7] = 0;
                c[8] = k;
                c[9] = j;
                c[10] = m;
                c[11] = 0;
                c[12] = -(e * p + f * q + k * a);
                c[13] = -(g * p + h * q +
                    j * a);
                c[14] = -(d * p + b * q + m * a);
                c[15] = 1;
                return c
            },
            fromRotationTranslation: function (a, d, b) {
                b || (b = u.create());
                var c = a[0],
                    e = a[1],
                    f = a[2],
                    k = a[3],
                    g = c + c,
                    h = e + e,
                    j = f + f;
                a = c * g;
                var m = c * h,
                    c = c * j,
                    n = e * h,
                    e = e * j,
                    f = f * j,
                    g = k * g,
                    h = k * h,
                    k = k * j;
                b[0] = 1 - (n + f);
                b[1] = m + k;
                b[2] = c - h;
                b[3] = 0;
                b[4] = m - k;
                b[5] = 1 - (a + f);
                b[6] = e + g;
                b[7] = 0;
                b[8] = c + h;
                b[9] = e - g;
                b[10] = 1 - (a + n);
                b[11] = 0;
                b[12] = d[0];
                b[13] = d[1];
                b[14] = d[2];
                b[15] = 1;
                return b
            },
            str: function (a) {
                return "[" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " +
                    a[10] + ", " + a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + "]"
            }
        }, m = {
            create: function (a) {
                var d = new j(4);
                a ? (d[0] = a[0], d[1] = a[1], d[2] = a[2], d[3] = a[3]) : d[0] = d[1] = d[2] = d[3] = 0;
                return d
            },
            createFrom: function (a, d, b, c) {
                var e = new j(4);
                e[0] = a;
                e[1] = d;
                e[2] = b;
                e[3] = c;
                return e
            },
            set: function (a, d) {
                d[0] = a[0];
                d[1] = a[1];
                d[2] = a[2];
                d[3] = a[3];
                return d
            },
            equal: function (a, d) {
                return a === d || 1E-6 > Math.abs(a[0] - d[0]) && 1E-6 > Math.abs(a[1] - d[1]) && 1E-6 > Math.abs(a[2] - d[2]) && 1E-6 > Math.abs(a[3] - d[3])
            },
            identity: function (a) {
                a || (a = m.create());
                a[0] = 0;
                a[1] = 0;
                a[2] = 0;
                a[3] = 1;
                return a
            }
        }, E = m.identity();
    m.calculateW = function (a, d) {
        var b = a[0],
            c = a[1],
            e = a[2];
        if (!d || a === d) return a[3] = -Math.sqrt(Math.abs(1 - b * b - c * c - e * e)), a;
        d[0] = b;
        d[1] = c;
        d[2] = e;
        d[3] = -Math.sqrt(Math.abs(1 - b * b - c * c - e * e));
        return d
    };
    m.dot = function (a, d) {
        return a[0] * d[0] + a[1] * d[1] + a[2] * d[2] + a[3] * d[3]
    };
    m.inverse = function (a, d) {
        var b = a[0],
            c = a[1],
            e = a[2],
            f = a[3],
            b = (b = b * b + c * c + e * e + f * f) ? 1 / b : 0;
        if (!d || a === d) return a[0] *= -b, a[1] *= -b, a[2] *= -b, a[3] *= b, a;
        d[0] = -a[0] * b;
        d[1] = -a[1] * b;
        d[2] = -a[2] * b;
        d[3] = a[3] * b;
        return d
    };
    m.conjugate = function (a, d) {
        if (!d || a === d) return a[0] *= -1, a[1] *= -1, a[2] *= -1, a;
        d[0] = -a[0];
        d[1] = -a[1];
        d[2] = -a[2];
        d[3] = a[3];
        return d
    };
    m.length = function (a) {
        var d = a[0],
            b = a[1],
            c = a[2];
        a = a[3];
        return Math.sqrt(d * d + b * b + c * c + a * a)
    };
    m.normalize = function (a, d) {
        d || (d = a);
        var b = a[0],
            c = a[1],
            e = a[2],
            f = a[3],
            k = Math.sqrt(b * b + c * c + e * e + f * f);
        if (0 === k) return d[0] = 0, d[1] = 0, d[2] = 0, d[3] = 0, d;
        k = 1 / k;
        d[0] = b * k;
        d[1] = c * k;
        d[2] = e * k;
        d[3] = f * k;
        return d
    };
    m.add = function (a, d, b) {
        if (!b || a === b) return a[0] += d[0], a[1] += d[1], a[2] += d[2], a[3] +=
                d[3], a;
        b[0] = a[0] + d[0];
        b[1] = a[1] + d[1];
        b[2] = a[2] + d[2];
        b[3] = a[3] + d[3];
        return b
    };
    m.multiply = function (a, d, b) {
        b || (b = a);
        var c = a[0],
            e = a[1],
            f = a[2];
        a = a[3];
        var k = d[0],
            g = d[1],
            h = d[2];
        d = d[3];
        b[0] = c * d + a * k + e * h - f * g;
        b[1] = e * d + a * g + f * k - c * h;
        b[2] = f * d + a * h + c * g - e * k;
        b[3] = a * d - c * k - e * g - f * h;
        return b
    };
    m.multiplyVec3 = function (a, d, b) {
        b || (b = d);
        var c = d[0],
            e = d[1],
            f = d[2];
        d = a[0];
        var k = a[1],
            g = a[2];
        a = a[3];
        var h = a * c + k * f - g * e,
            j = a * e + g * c - d * f,
            m = a * f + d * e - k * c,
            c = -d * c - k * e - g * f;
        b[0] = h * a + c * -d + j * -g - m * -k;
        b[1] = j * a + c * -k + m * -d - h * -g;
        b[2] = m * a + c * -g + h * -k - j * -d;
        return b
    };
    m.scale = function (a, d, b) {
        if (!b || a === b) return a[0] *= d, a[1] *= d, a[2] *= d, a[3] *= d, a;
        b[0] = a[0] * d;
        b[1] = a[1] * d;
        b[2] = a[2] * d;
        b[3] = a[3] * d;
        return b
    };
    m.toMat3 = function (a, d) {
        d || (d = y.create());
        var b = a[0],
            c = a[1],
            e = a[2],
            f = a[3],
            k = b + b,
            g = c + c,
            h = e + e,
            j = b * k,
            m = b * g,
            b = b * h,
            n = c * g,
            c = c * h,
            e = e * h,
            k = f * k,
            g = f * g,
            f = f * h;
        d[0] = 1 - (n + e);
        d[1] = m + f;
        d[2] = b - g;
        d[3] = m - f;
        d[4] = 1 - (j + e);
        d[5] = c + k;
        d[6] = b + g;
        d[7] = c - k;
        d[8] = 1 - (j + n);
        return d
    };
    m.toMat4 = function (a, d) {
        d || (d = u.create());
        var b = a[0],
            c = a[1],
            e = a[2],
            f = a[3],
            g = b + b,
            h = c + c,
            j = e + e,
            m = b * g,
            n = b * h,
            b = b *
                j,
            p = c * h,
            c = c * j,
            e = e * j,
            g = f * g,
            h = f * h,
            f = f * j;
        d[0] = 1 - (p + e);
        d[1] = n + f;
        d[2] = b - h;
        d[3] = 0;
        d[4] = n - f;
        d[5] = 1 - (m + e);
        d[6] = c + g;
        d[7] = 0;
        d[8] = b + h;
        d[9] = c - g;
        d[10] = 1 - (m + p);
        d[11] = 0;
        d[12] = 0;
        d[13] = 0;
        d[14] = 0;
        d[15] = 1;
        return d
    };
    m.slerp = function (a, d, b, c) {
        c || (c = a);
        var e = a[0] * d[0] + a[1] * d[1] + a[2] * d[2] + a[3] * d[3],
            f, g;
        if (1 <= Math.abs(e)) return c !== a && (c[0] = a[0], c[1] = a[1], c[2] = a[2], c[3] = a[3]), c;
        f = Math.acos(e);
        g = Math.sqrt(1 - e * e);
        if (0.0010 > Math.abs(g)) return c[0] = 0.5 * a[0] + 0.5 * d[0], c[1] = 0.5 * a[1] + 0.5 * d[1], c[2] = 0.5 * a[2] + 0.5 * d[2], c[3] = 0.5 * a[3] +
                0.5 * d[3], c;
        e = Math.sin((1 - b) * f) / g;
        b = Math.sin(b * f) / g;
        c[0] = a[0] * e + d[0] * b;
        c[1] = a[1] * e + d[1] * b;
        c[2] = a[2] * e + d[2] * b;
        c[3] = a[3] * e + d[3] * b;
        return c
    };
    m.fromRotationMatrix = function (a, d) {
        d || (d = m.create());
        var b = a[0] + a[4] + a[8],
            c;
        if (0 < b) c = Math.sqrt(b + 1), d[3] = 0.5 * c, c = 0.5 / c, d[0] = (a[7] - a[5]) * c, d[1] = (a[2] - a[6]) * c, d[2] = (a[3] - a[1]) * c;
        else {
            c = m.fromRotationMatrix.s_iNext = m.fromRotationMatrix.s_iNext || [1, 2, 0];
            b = 0;
            a[4] > a[0] && (b = 1);
            a[8] > a[3 * b + b] && (b = 2);
            var e = c[b],
                f = c[e];
            c = Math.sqrt(a[3 * b + b] - a[3 * e + e] - a[3 * f + f] + 1);
            d[b] = 0.5 * c;
            c =
                0.5 / c;
            d[3] = (a[3 * f + e] - a[3 * e + f]) * c;
            d[e] = (a[3 * e + b] + a[3 * b + e]) * c;
            d[f] = (a[3 * f + b] + a[3 * b + f]) * c
        }
        return d
    };
    y.toQuat4 = m.fromRotationMatrix;
    var B = y.create();
    m.fromAxes = function (a, b, c, e) {
        B[0] = b[0];
        B[3] = b[1];
        B[6] = b[2];
        B[1] = c[0];
        B[4] = c[1];
        B[7] = c[2];
        B[2] = a[0];
        B[5] = a[1];
        B[8] = a[2];
        return m.fromRotationMatrix(B, e)
    };
    m.identity = function (a) {
        a || (a = m.create());
        a[0] = 0;
        a[1] = 0;
        a[2] = 0;
        a[3] = 1;
        return a
    };
    m.fromAngleAxis = function (a, b, c) {
        c || (c = m.create());
        a *= 0.5;
        var e = Math.sin(a);
        c[3] = Math.cos(a);
        c[0] = e * b[0];
        c[1] = e * b[1];
        c[2] = e * b[2];
        return c
    };
    m.toAngleAxis = function (a, b) {
        b || (b = a);
        var c = a[0] * a[0] + a[1] * a[1] + a[2] * a[2];
        0 < c ? (b[3] = 2 * Math.acos(a[3]), c = e.invsqrt(c), b[0] = a[0] * c, b[1] = a[1] * c, b[2] = a[2] * c) : (b[3] = 0, b[0] = 1, b[1] = 0, b[2] = 0);
        return b
    };
    m.str = function (a) {
        return "[" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + "]"
    };
    var K = {
        create: function (a) {
            var b = new j(2);
            a ? (b[0] = a[0], b[1] = a[1]) : (b[0] = 0, b[1] = 0);
            return b
        },
        createFrom: function (a, b) {
            var c = new j(2);
            c[0] = a;
            c[1] = b;
            return c
        },
        add: function (a, b, c) {
            c || (c = b);
            c[0] = a[0] + b[0];
            c[1] = a[1] + b[1];
            return c
        },
        subtract: function (a,
        b, c) {
            c || (c = b);
            c[0] = a[0] - b[0];
            c[1] = a[1] - b[1];
            return c
        },
        multiply: function (a, b, c) {
            c || (c = b);
            c[0] = a[0] * b[0];
            c[1] = a[1] * b[1];
            return c
        },
        divide: function (a, b, c) {
            c || (c = b);
            c[0] = a[0] / b[0];
            c[1] = a[1] / b[1];
            return c
        },
        scale: function (a, b, c) {
            c || (c = a);
            c[0] = a[0] * b;
            c[1] = a[1] * b;
            return c
        },
        dist: function (a, b) {
            var c = b[0] - a[0],
                e = b[1] - a[1];
            return Math.sqrt(c * c + e * e)
        },
        set: function (a, b) {
            b[0] = a[0];
            b[1] = a[1];
            return b
        },
        equal: function (a, b) {
            return a === b || 1E-6 > Math.abs(a[0] - b[0]) && 1E-6 > Math.abs(a[1] - b[1])
        },
        negate: function (a, b) {
            b || (b = a);
            b[0] = -a[0];
            b[1] = -a[1];
            return b
        },
        normalize: function (a, b) {
            b || (b = a);
            var c = a[0] * a[0] + a[1] * a[1];
            0 < c ? (c = Math.sqrt(c), b[0] = a[0] / c, b[1] = a[1] / c) : b[0] = b[1] = 0;
            return b
        },
        cross: function (a, b, c) {
            a = a[0] * b[1] - a[1] * b[0];
            if (!c) return a;
            c[0] = c[1] = 0;
            c[2] = a;
            return c
        },
        length: function (a) {
            var b = a[0];
            a = a[1];
            return Math.sqrt(b * b + a * a)
        },
        squaredLength: function (a) {
            var b = a[0];
            a = a[1];
            return b * b + a * a
        },
        dot: function (a, b) {
            return a[0] * b[0] + a[1] * b[1]
        },
        direction: function (a, b, c) {
            c || (c = a);
            var e = a[0] - b[0];
            a = a[1] - b[1];
            b = e * e + a * a;
            if (!b) return c[0] =
                    0, c[1] = 0, c[2] = 0, c;
            b = 1 / Math.sqrt(b);
            c[0] = e * b;
            c[1] = a * b;
            return c
        },
        lerp: function (a, b, c, e) {
            e || (e = a);
            e[0] = a[0] + c * (b[0] - a[0]);
            e[1] = a[1] + c * (b[1] - a[1]);
            return e
        },
        str: function (a) {
            return "[" + a[0] + ", " + a[1] + "]"
        }
    }, J = {
            create: function (a) {
                var b = new j(4);
                a ? (b[0] = a[0], b[1] = a[1], b[2] = a[2], b[3] = a[3]) : b[0] = b[1] = b[2] = b[3] = 0;
                return b
            },
            createFrom: function (a, b, c, e) {
                var f = new j(4);
                f[0] = a;
                f[1] = b;
                f[2] = c;
                f[3] = e;
                return f
            },
            set: function (a, b) {
                b[0] = a[0];
                b[1] = a[1];
                b[2] = a[2];
                b[3] = a[3];
                return b
            },
            equal: function (a, b) {
                return a === b || 1E-6 >
                    Math.abs(a[0] - b[0]) && 1E-6 > Math.abs(a[1] - b[1]) && 1E-6 > Math.abs(a[2] - b[2]) && 1E-6 > Math.abs(a[3] - b[3])
            },
            identity: function (a) {
                a || (a = J.create());
                a[0] = 1;
                a[1] = 0;
                a[2] = 0;
                a[3] = 1;
                return a
            },
            transpose: function (a, b) {
                if (!b || a === b) {
                    var c = a[1];
                    a[1] = a[2];
                    a[2] = c;
                    return a
                }
                b[0] = a[0];
                b[1] = a[2];
                b[2] = a[1];
                b[3] = a[3];
                return b
            },
            determinant: function (a) {
                return a[0] * a[3] - a[2] * a[1]
            },
            inverse: function (a, b) {
                b || (b = a);
                var c = a[0],
                    e = a[1],
                    f = a[2],
                    g = a[3],
                    h = c * g - f * e;
                if (!h) return null;
                h = 1 / h;
                b[0] = g * h;
                b[1] = -e * h;
                b[2] = -f * h;
                b[3] = c * h;
                return b
            },
            multiply: function (a,
            b, c) {
                c || (c = a);
                var e = a[0],
                    f = a[1],
                    g = a[2];
                a = a[3];
                c[0] = e * b[0] + f * b[2];
                c[1] = e * b[1] + f * b[3];
                c[2] = g * b[0] + a * b[2];
                c[3] = g * b[1] + a * b[3];
                return c
            },
            rotate: function (a, b, c) {
                c || (c = a);
                var e = a[0],
                    f = a[1],
                    g = a[2];
                a = a[3];
                var h = Math.sin(b);
                b = Math.cos(b);
                c[0] = e * b + f * h;
                c[1] = e * -h + f * b;
                c[2] = g * b + a * h;
                c[3] = g * -h + a * b;
                return c
            },
            multiplyVec2: function (a, b, c) {
                c || (c = b);
                var e = b[0];
                b = b[1];
                c[0] = e * a[0] + b * a[1];
                c[1] = e * a[2] + b * a[3];
                return c
            },
            scale: function (a, b, c) {
                c || (c = a);
                var e = a[1],
                    f = a[2],
                    g = a[3],
                    h = b[0];
                b = b[1];
                c[0] = a[0] * h;
                c[1] = e * b;
                c[2] = f * h;
                c[3] =
                    g * b;
                return c
            },
            str: function (a) {
                return "[" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + "]"
            }
        }, L = {
            create: function (a) {
                var b = new j(4);
                a ? (b[0] = a[0], b[1] = a[1], b[2] = a[2], b[3] = a[3]) : (b[0] = 0, b[1] = 0, b[2] = 0, b[3] = 0);
                return b
            },
            createFrom: function (a, b, c, e) {
                var f = new j(4);
                f[0] = a;
                f[1] = b;
                f[2] = c;
                f[3] = e;
                return f
            },
            add: function (a, b, c) {
                c || (c = b);
                c[0] = a[0] + b[0];
                c[1] = a[1] + b[1];
                c[2] = a[2] + b[2];
                c[3] = a[3] + b[3];
                return c
            },
            subtract: function (a, b, c) {
                c || (c = b);
                c[0] = a[0] - b[0];
                c[1] = a[1] - b[1];
                c[2] = a[2] - b[2];
                c[3] = a[3] - b[3];
                return c
            },
            multiply: function (a,
            b, c) {
                c || (c = b);
                c[0] = a[0] * b[0];
                c[1] = a[1] * b[1];
                c[2] = a[2] * b[2];
                c[3] = a[3] * b[3];
                return c
            },
            divide: function (a, b, c) {
                c || (c = b);
                c[0] = a[0] / b[0];
                c[1] = a[1] / b[1];
                c[2] = a[2] / b[2];
                c[3] = a[3] / b[3];
                return c
            },
            scale: function (a, b, c) {
                c || (c = a);
                c[0] = a[0] * b;
                c[1] = a[1] * b;
                c[2] = a[2] * b;
                c[3] = a[3] * b;
                return c
            },
            set: function (a, b) {
                b[0] = a[0];
                b[1] = a[1];
                b[2] = a[2];
                b[3] = a[3];
                return b
            },
            equal: function (a, b) {
                return a === b || 1E-6 > Math.abs(a[0] - b[0]) && 1E-6 > Math.abs(a[1] - b[1]) && 1E-6 > Math.abs(a[2] - b[2]) && 1E-6 > Math.abs(a[3] - b[3])
            },
            negate: function (a, b) {
                b ||
                    (b = a);
                b[0] = -a[0];
                b[1] = -a[1];
                b[2] = -a[2];
                b[3] = -a[3];
                return b
            },
            length: function (a) {
                var b = a[0],
                    c = a[1],
                    e = a[2];
                a = a[3];
                return Math.sqrt(b * b + c * c + e * e + a * a)
            },
            squaredLength: function (a) {
                var b = a[0],
                    c = a[1],
                    e = a[2];
                a = a[3];
                return b * b + c * c + e * e + a * a
            },
            lerp: function (a, b, c, e) {
                e || (e = a);
                e[0] = a[0] + c * (b[0] - a[0]);
                e[1] = a[1] + c * (b[1] - a[1]);
                e[2] = a[2] + c * (b[2] - a[2]);
                e[3] = a[3] + c * (b[3] - a[3]);
                return e
            },
            str: function (a) {
                return "[" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + "]"
            }
        };
    b && (b.glMatrixArrayType = j, b.MatrixArray = j, b.setMatrixArrayType = c, b.determineMatrixArrayType =
        f, b.glMath = e, b.vec2 = K, b.vec3 = n, b.vec4 = L, b.mat2 = J, b.mat3 = y, b.mat4 = u, b.quat4 = m);
    return {
        glMatrixArrayType: j,
        MatrixArray: j,
        setMatrixArrayType: c,
        determineMatrixArrayType: f,
        glMath: e,
        vec2: K,
        vec3: n,
        vec4: L,
        mat2: J,
        mat3: y,
        mat4: u,
        quat4: m
    }
});
PIXI.shaderFragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying float vColor;", "uniform sampler2D uSampler;", "void main(void) {", "gl_FragColor \x3d texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y));", "gl_FragColor \x3d gl_FragColor * vColor;", "}"];

PIXI.xshaderFragmentSrc = ["precision highp float;",
"uniform float width;",
"uniform float height;",
"uniform float blurX;",
"uniform float blurY;",
"uniform sampler2D sampler0;",
"void main() {",
"  vec4 sum = vec4(0.0);",
"  vec2 dim = vec2(width, height);",
"  vec2 blurSize = vec2(blurX, blurY) / dim;",
"  vec2 p = gl_FragCoord.xy / dim;",
"  if (blurX == 0. && blurY == 0.) {",
"    gl_FragColor = texture2D(sampler0, p);",
"    return;",
"  }",
"  sum += texture2D(sampler0, p - 4.0 * blurSize) * 0.05;",
"  sum += texture2D(sampler0, p - 3.0 * blurSize) * 0.09;",
"  sum += texture2D(sampler0, p - 2.0 * blurSize) * 0.12;",
"  sum += texture2D(sampler0, p - 1.0 * blurSize) * 0.15;",
"  sum += texture2D(sampler0, p                 ) * 0.16;",
"  sum += texture2D(sampler0, p + 1.0 * blurSize) * 0.15;",
"  sum += texture2D(sampler0, p + 2.0 * blurSize) * 0.12;",
"  sum += texture2D(sampler0, p + 3.0 * blurSize) * 0.09;",
"  sum += texture2D(sampler0, p + 4.0 * blurSize) * 0.05;",
"  gl_FragColor = sum;",
"}"];


PIXI.shaderVertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "attribute float aColor;", "uniform mat4 uMVMatrix;", "varying vec2 vTextureCoord;", "varying float vColor;", "void main(void) {", "gl_Position \x3d uMVMatrix * vec4(aVertexPosition, 1.0, 1.0);", "vTextureCoord \x3d aTextureCoord;", "vColor \x3d aColor;", "}"];
PIXI.xshaderVertexSrc = ["attribute vec2 position;",
"void main(void) {",
"  gl_Position = vec4(position, 0, 1);",
"}"];
PIXI.CompileVertexShader = function (b, c) {
    for (var f = "", e = 0; e < c.length; e++) f += c[e];

    e = b.createShader(b.VERTEX_SHADER);
    b.shaderSource(e, f);
    b.compileShader(e);
    return !b.getShaderParameter(e, b.COMPILE_STATUS) ? (alert(b.getShaderInfoLog(e)), null) : e
};
PIXI.CompileFragmentShader = function (b, c) {
    for (var f = "", e = 0; e < c.length; e++) f += c[e];

    e = b.createShader(b.FRAGMENT_SHADER);
    b.shaderSource(e, f);
    b.compileShader(e);
    return !b.getShaderParameter(e, b.COMPILE_STATUS) ? (alert(b.getShaderInfoLog(e)), null) : e
};
PIXI._defaultFrame = new PIXI.Rectangle(0, 0, 1, 1);
PIXI.WebGLRenderer = function (b, c) {
    this.width = b ? b : 800;
    this.height = c ? c : 600;
    this.view = document.createElement("canvas");
    this.view.width = this.width;
    this.view.height = this.height;
    this.view.background = "#FF0000";
    var f = this;
    this.view.addEventListener("webglcontextlost", function (b) {
        f.handleContextLost(b)
    }, !1);
    this.view.addEventListener("webglcontextrestored", function (b) {
        f.handleContextRestored(b)
    }, !1);
    this.batchs = [];
    try {
        this.gl = this.view.getContext("experimental-webgl", {
            alpha: !1
        })
    } catch (e) {
        throw Error(" This browser does not support webGL. Try using the canvas renderer" +
            this);
    }
    this.initShaders();
    var g = this.gl;
    this.batch = new PIXI.WebGLBatch(g);
    g.disable(g.DEPTH_TEST);
    g.enable(g.BLEND);
    g.colorMask(!0, !0, !0, !1);
    this.projectionMatrix = mat4.create();
    this.resize(this.width, this.height);
    this.contextLost = !1
};
PIXI.WebGLRenderer.constructor = PIXI.WebGLRenderer;
PIXI.WebGLRenderer.prototype.initShaders = function () {
    var b = this.gl,
        c = PIXI.CompileFragmentShader(b, PIXI.shaderFragmentSrc),
        f = PIXI.CompileVertexShader(b, PIXI.shaderVertexSrc),
        e = this.shaderProgram = b.createProgram();
    b.attachShader(e, f);
    b.attachShader(e, c);
    b.linkProgram(e);
    b.getProgramParameter(e, b.LINK_STATUS) || alert("Could not initialise shaders");
    b.useProgram(e);
    e.vertexPositionAttribute = b.getAttribLocation(e, "aVertexPosition");
    b.enableVertexAttribArray(e.vertexPositionAttribute);
    e.textureCoordAttribute =
        b.getAttribLocation(e, "aTextureCoord");
    b.enableVertexAttribArray(e.textureCoordAttribute);
    e.colorAttribute = b.getAttribLocation(e, "aColor");
    b.enableVertexAttribArray(e.colorAttribute);
    e.mvMatrixUniform = b.getUniformLocation(e, "uMVMatrix");
    e.samplerUniform = b.getUniformLocation(e, "uSampler");
    PIXI.shaderProgram = this.shaderProgram
};
PIXI.WebGLRenderer.prototype.checkVisibility = function (b, c) {
    for (var f = b.children, e = 0; e < f.length; e++) {
        var g = f[e],
            h = g.visible && c;
        g.textureChange && (g.textureChange = !1, h && (this.removeDisplayObject(g), this.addDisplayObject(g)));
        g.cacheVisible != h && (g.cacheVisible = h, g.cacheVisible ? this.addDisplayObject(g) : this.removeDisplayObject(g));
        0 < g.children.length && this.checkVisibility(g, h)
    }
};
PIXI.WebGLRenderer.prototype.render = function (b) {
    if (!this.contextLost) {
        for (var c = 0; c < b.__childrenRemoved.length; c++) this.removeDisplayObject(b.__childrenRemoved[c]);
        for (c = 0; c < PIXI.texturesToUpdate.length; c++) this.updateTexture(PIXI.texturesToUpdate[c]);
        b.__childrenRemoved = [];
        b.__childrenAdded = [];
        PIXI.texturesToUpdate = [];
        this.checkVisibility(b, !0);
        b.updateTransform();
        c = this.gl;
        c.clear(c.COLOR_BUFFER_BIT);
        c.clearColor(b.backgroundColorSplit[0], b.backgroundColorSplit[1], b.backgroundColorSplit[2], 1);
        c.blendFunc(c.ONE,
        c.ONE_MINUS_SRC_ALPHA);
        c.uniformMatrix4fv(this.shaderProgram.mvMatrixUniform, !1, this.projectionMatrix);
        for (c = 0; c < this.batchs.length; c++) b = this.batchs[c], b instanceof PIXI.WebGLBatch ? this.batchs[c].render() : b instanceof PIXI.Strip && b.visible && this.renderStrip(b)
    }
};
PIXI.WebGLRenderer.prototype.updateTexture = function (b) {
    var c = this.gl;
    b._glTexture || (b._glTexture = c.createTexture());
    b.hasLoaded && (c.bindTexture(c.TEXTURE_2D, b._glTexture), c.pixelStorei(c.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0), c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, c.RGBA, c.UNSIGNED_BYTE, b.source), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, c.LINEAR), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, c.LINEAR), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, c.CLAMP_TO_EDGE), c.texParameteri(c.TEXTURE_2D,
    c.TEXTURE_WRAP_T, c.CLAMP_TO_EDGE), c.bindTexture(c.TEXTURE_2D, null));
    this.refreshBatchs = !0
};
PIXI.WebGLRenderer.prototype.addDisplayObject = function (b) {
    if (b.stage && !b.__inWebGL && (b.batch = null, b.renderable)) {
        b.__inWebGL = !0;
        var c = b;
        do {
            if (0 == c.childIndex) c = c.parent;
            else for (c = c.parent.children[c.childIndex - 1]; 0 != c.children.length;) c = c.children[c.children.length - 1];
            if (c == b.stage) break
        } while (!c.renderable || !c.__inWebGL);
        var f = b;
        do {
            if (0 == f.children.length) {
                for (; f.childIndex == f.parent.children.length - 1;) if (f = f.parent, f == b.stage) {
                        f = null;
                        break
                    }
                f && (f = f.parent.children[f.childIndex + 1])
            } else f = f.children[0];
            if (!f) break
        } while (!f.renderable || !f.__inWebGL);
        if (b instanceof PIXI.Sprite) {
            var e;
            if (c instanceof PIXI.Sprite) {
                if ((e = c.batch) && e.texture == b.texture.baseTexture && e.blendMode == b.blendMode) {
                    e.insertAfter(b, c);
                    return
                }
            } else e = c;
            if (f && f instanceof PIXI.Sprite && (c = f.batch)) {
                if (c.texture == b.texture.baseTexture && c.blendMode == b.blendMode) {
                    c.insertBefore(b, f);
                    return
                }
                if (c == e) {
                    f = e.split(f);
                    c = PIXI._getBatch(this.gl);
                    e = this.batchs.indexOf(e);
                    c.init(b);
                    this.batchs.splice(e + 1, 0, c, f);
                    return
                }
            }
            c = PIXI._getBatch(this.gl);
            c.init(b);
            e ? (e = this.batchs.indexOf(e), this.batchs.splice(e + 1, 0, c)) : this.batchs.push(c)
        } else b instanceof PIXI.Strip && (this.initStrip(b), this.batchs.push(b));
        this.batchUpdate = !0
    }
};
PIXI.WebGLRenderer.prototype.removeDisplayObject = function (b) {
    b.cacheVisible = !1;
    if (b.renderable) {
        b.__inWebGL = !1;
        var c;
        if (b instanceof PIXI.Sprite) {
            var f = b.batch;
            if (!f) return;
            f.remove(b);
            0 == f.size && (c = f)
        } else c = b;
        c && (b = this.batchs.indexOf(c), -1 != b && (!(0 == b || b == this.batchs.length - 1) && this.batchs[b - 1] instanceof PIXI.WebGLBatch && this.batchs[b + 1] instanceof PIXI.WebGLBatch && this.batchs[b - 1].texture == this.batchs[b + 1].texture && this.batchs[b - 1].blendMode == this.batchs[b + 1].blendMode ? (this.batchs[b - 1].merge(this.batchs[b +
            1]), c instanceof PIXI.WebGLBatch && PIXI._returnBatch(c), PIXI._returnBatch(this.batchs[b + 1]), this.batchs.splice(b, 2)) : (this.batchs.splice(b, 1), c instanceof PIXI.WebGLBatch && PIXI._returnBatch(c))))
    }
};
PIXI.WebGLRenderer.prototype.resize = function (b, c) {
    this.width = b;
    this.height = c;
    this.view.width = b;
    this.view.height = c;
    this.gl.viewport(0, 0, this.width, this.height);
    mat4.identity(this.projectionMatrix);
    mat4.scale(this.projectionMatrix, [2 / this.width, -2 / this.height, 1]);
    mat4.translate(this.projectionMatrix, [-this.width / 2, -this.height / 2, 0])
};
PIXI.WebGLRenderer.prototype.initStrip = function (b) {
    var c = this.gl;
    b._vertexBuffer = c.createBuffer();
    b._indexBuffer = c.createBuffer();
    b._uvBuffer = c.createBuffer();
    b._colorBuffer = c.createBuffer();
    c.bindBuffer(c.ARRAY_BUFFER, b._vertexBuffer);
    c.bufferData(c.ARRAY_BUFFER, b.verticies, c.DYNAMIC_DRAW);
    c.bindBuffer(c.ARRAY_BUFFER, b._uvBuffer);
    c.bufferData(c.ARRAY_BUFFER, b.uvs, c.STATIC_DRAW);
    c.bindBuffer(c.ARRAY_BUFFER, b._colorBuffer);
    c.bufferData(c.ARRAY_BUFFER, b.colors, c.STATIC_DRAW);
    c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,
    b._indexBuffer);
    c.bufferData(c.ELEMENT_ARRAY_BUFFER, b.indices, c.STATIC_DRAW)
};
PIXI.WebGLRenderer.prototype.renderStrip = function (b) {
    var c = this.gl,
        f = this.shaderProgram,
        e = mat3.toMat4(b.worldTransform);
    mat4.transpose(e);
    mat4.multiply(this.projectionMatrix, e, e);
    c.uniformMatrix4fv(this.shaderProgram.mvMatrixUniform, !1, e);
    b.blendMode == PIXI.blendModes.NORMAL ? c.blendFunc(c.ONE, c.ONE_MINUS_SRC_ALPHA) : c.blendFunc(c.ONE, c.ONE_MINUS_SRC_COLOR);
    b.dirty ? (b.dirty = !1, c.bindBuffer(c.ARRAY_BUFFER, b._vertexBuffer), c.bufferData(c.ARRAY_BUFFER, b.verticies, c.STATIC_DRAW), c.vertexAttribPointer(f.vertexPositionAttribute,
    2, c.FLOAT, !1, 0, 0), c.bindBuffer(c.ARRAY_BUFFER, b._uvBuffer), c.bufferData(c.ARRAY_BUFFER, b.uvs, c.STATIC_DRAW), c.vertexAttribPointer(f.textureCoordAttribute, 2, c.FLOAT, !1, 0, 0), c.activeTexture(c.TEXTURE0), c.bindTexture(c.TEXTURE_2D, b.texture.baseTexture._glTexture), c.bindBuffer(c.ARRAY_BUFFER, b._colorBuffer), c.bufferData(c.ARRAY_BUFFER, b.colors, c.STATIC_DRAW), c.vertexAttribPointer(f.colorAttribute, 1, c.FLOAT, !1, 0, 0), c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, b._indexBuffer), c.bufferData(c.ELEMENT_ARRAY_BUFFER,
    b.indices, c.STATIC_DRAW)) : (c.bindBuffer(c.ARRAY_BUFFER, b._vertexBuffer), c.bufferSubData(c.ARRAY_BUFFER, 0, b.verticies), c.vertexAttribPointer(f.vertexPositionAttribute, 2, c.FLOAT, !1, 0, 0), c.bindBuffer(c.ARRAY_BUFFER, b._uvBuffer), c.vertexAttribPointer(f.textureCoordAttribute, 2, c.FLOAT, !1, 0, 0), c.activeTexture(c.TEXTURE0), c.bindTexture(c.TEXTURE_2D, b.texture.baseTexture._glTexture), c.bindBuffer(c.ARRAY_BUFFER, b._colorBuffer), c.vertexAttribPointer(f.colorAttribute, 1, c.FLOAT, !1, 0, 0), c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,
    b._indexBuffer));
    c.drawElements(c.TRIANGLE_STRIP, b.indices.length, c.UNSIGNED_SHORT, 0);
    c.uniformMatrix4fv(this.shaderProgram.mvMatrixUniform, !1, this.projectionMatrix)
};
PIXI.WebGLRenderer.prototype.handleContextLost = function (b) {
    b.preventDefault();
    this.contextLost = !0
};
PIXI.WebGLRenderer.prototype.handleContextRestored = function () {
    this.gl = this.view.getContext("experimental-webgl", {
        alpha: !0
    });
    this.initShaders();
    for (var b = 0; b < PIXI.TextureCache.length; b++) this.updateTexture(PIXI.TextureCache[b]);
    for (b = 0; b < this.batchs.length; b++) this.batchs[b].restoreLostContext(this.gl), this.batchs[b].dirty = !0;
    PIXI._restoreBatchs(this.gl);
    this.contextLost = !1
};
PIXI._batchs = [];
PIXI._getBatch = function (b) {
    return 0 == PIXI._batchs.length ? new PIXI.WebGLBatch(b) : PIXI._batchs.pop()
};
PIXI._returnBatch = function (b) {
    b.clean();
    PIXI._batchs.push(b)
};
PIXI._restoreBatchs = function (b) {
    for (var c = 0; c < PIXI._batchs.length; c++) PIXI._batchs[c].restoreLostContext(b)
};
PIXI.WebGLBatch = function (b) {
    this.gl = b;
    this.size = 0;
    this.vertexBuffer = b.createBuffer();
    this.indexBuffer = b.createBuffer();
    this.uvBuffer = b.createBuffer();
    this.colorBuffer = b.createBuffer();
    this.blendMode = PIXI.blendModes.NORMAL;
    this.dynamicSize = 1
};
PIXI.WebGLBatch.constructor = PIXI.WebGLBatch;
PIXI.WebGLBatch.prototype.clean = function () {
    this.verticies = [];
    this.uvs = [];
    this.indices = [];
    this.colors = [];
    this.dynamicSize = 1;
    this.last = this.texture = null;
    this.size = 0;
    this.head;
    this.tail
};
PIXI.WebGLBatch.prototype.restoreLostContext = function (b) {
    this.gl = b;
    this.vertexBuffer = b.createBuffer();
    this.indexBuffer = b.createBuffer();
    this.uvBuffer = b.createBuffer();
    this.colorBuffer = b.createBuffer()
};
PIXI.WebGLBatch.prototype.init = function (b) {
    b.batch = this;
    this.dirty = !0;
    this.blendMode = b.blendMode;
    this.texture = b.texture.baseTexture;
    this.tail = this.head = b;
    this.size = 1;
    this.growBatch()
};
PIXI.WebGLBatch.prototype.insertBefore = function (b, c) {
    this.size++;
    b.batch = this;
    this.dirty = !0;
    var f = c.__prev;
    c.__prev = b;
    b.__next = c;
    f ? (b.__prev = f, f.__next = b) : this.head = b
};
PIXI.WebGLBatch.prototype.insertAfter = function (b, c) {
    this.size++;
    b.batch = this;
    this.dirty = !0;
    var f = c.__next;
    c.__next = b;
    b.__prev = c;
    f ? (b.__next = f, f.__prev = b) : this.tail = b
};
PIXI.WebGLBatch.prototype.remove = function (b) {
    this.size--;
    0 == this.size ? (b.batch = null, b.__prev = null, b.__next = null) : (b.__prev ? b.__prev.__next = b.__next : (this.head = b.__next, this.head.__prev = null), b.__next ? b.__next.__prev = b.__prev : (this.tail = b.__prev, this.tail.__next = null), b.batch = null, b.__next = null, b.__prev = null, this.dirty = !0)
};
PIXI.WebGLBatch.prototype.split = function (b) {
    this.dirty = !0;
    var c = new PIXI.WebGLBatch(this.gl);
    c.init(b);
    c.tail = this.tail;
    this.tail = b.__prev;
    this.tail.__next = null;
    b.__prev = null;
    for (var f = 0; b;) f++, b.batch = c, b = b.__next;
    c.size = f;
    this.size -= f;
    return c
};
PIXI.WebGLBatch.prototype.merge = function (b) {
    this.dirty = !0;
    this.tail.__next = b.head;
    b.head.__prev = this.tail;
    this.size += b.size;
    this.tail = b.tail;
    for (b = b.head; b;) b.batch = this, b = b.__next
};
PIXI.WebGLBatch.prototype.growBatch = function () {
    var b = this.gl;
    this.dynamicSize = 1 == this.size ? 1 : 1.5 * this.size;
    this.verticies = new Float32Array(8 * this.dynamicSize);
    b.bindBuffer(b.ARRAY_BUFFER, this.vertexBuffer);
    b.bufferData(b.ARRAY_BUFFER, this.verticies, b.DYNAMIC_DRAW);
    this.uvs = new Float32Array(8 * this.dynamicSize);
    b.bindBuffer(b.ARRAY_BUFFER, this.uvBuffer);
    b.bufferData(b.ARRAY_BUFFER, this.uvs, b.DYNAMIC_DRAW);
    this.dirtyUVS = !0;
    this.colors = new Float32Array(4 * this.dynamicSize);
    b.bindBuffer(b.ARRAY_BUFFER,
    this.colorBuffer);
    b.bufferData(b.ARRAY_BUFFER, this.colors, b.DYNAMIC_DRAW);
    this.dirtyColors = !0;
    this.indices = new Uint16Array(6 * this.dynamicSize);
    for (var c = this.indices.length / 6, f = 0; f < c; f++) {
        var e = 6 * f,
            g = 4 * f;
        this.indices[e + 0] = g + 0;
        this.indices[e + 1] = g + 1;
        this.indices[e + 2] = g + 2;
        this.indices[e + 3] = g + 0;
        this.indices[e + 4] = g + 2;
        this.indices[e + 5] = g + 3
    }
    b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
    b.bufferData(b.ELEMENT_ARRAY_BUFFER, this.indices, b.STATIC_DRAW)
};
PIXI.WebGLBatch.prototype.refresh = function () {
    this.dynamicSize < this.size && this.growBatch();
    for (var b = 0, c, f = this.head; f;) {
        c = 8 * b;
        var e = f.texture,
            g = e.frame,
            h = e.baseTexture.width,
            e = e.baseTexture.height;
        this.uvs[c + 0] = g.x / h;
        this.uvs[c + 1] = g.y / e;
        this.uvs[c + 2] = (g.x + g.width) / h;
        this.uvs[c + 3] = g.y / e;
        this.uvs[c + 4] = (g.x + g.width) / h;
        this.uvs[c + 5] = (g.y + g.height) / e;
        this.uvs[c + 6] = g.x / h;
        this.uvs[c + 7] = (g.y + g.height) / e;
        f.updateFrame = !1;
        colorIndex = 4 * b;
        this.colors[colorIndex] = this.colors[colorIndex + 1] = this.colors[colorIndex +
            2] = this.colors[colorIndex + 3] = f.worldAlpha;
        f = f.__next;
        b++
    }
    this.dirtyColors = this.dirtyUVS = !0
};
PIXI.WebGLBatch.prototype.update = function () {
    for (var b, c, f, e, g, h, j, n, q, p, C, D = 0, s = this.head; s;) c = s.width, f = s.height, e = s.anchor.x - s.texture.trim.x, g = s.anchor.y - s.texture.trim.y, h = c * (1 - e), c *= -e, e = f * (1 - g), g = f * -g, f = 8 * D, b = s.worldTransform, j = b[0], n = b[3], q = b[1], p = b[4], C = b[2], b = b[5], this.verticies[f + 0] = j * c + q * g + C, this.verticies[f + 1] = p * g + n * c + b, this.verticies[f + 2] = j * h + q * g + C, this.verticies[f + 3] = p * g + n * h + b, this.verticies[f + 4] = j * h + q * e + C, this.verticies[f + 5] = p * e + n * h + b, this.verticies[f + 6] = j * c + q * e + C, this.verticies[f +
            7] = p * e + n * c + b, s.updateFrame && (this.dirtyUVS = !0, e = s.texture, h = e.frame, c = e.baseTexture.width, e = e.baseTexture.height, this.uvs[f + 0] = h.x / c, this.uvs[f + 1] = h.y / e, this.uvs[f + 2] = (h.x + h.width) / c, this.uvs[f + 3] = h.y / e, this.uvs[f + 4] = (h.x + h.width) / c, this.uvs[f + 5] = (h.y + h.height) / e, this.uvs[f + 6] = h.x / c, this.uvs[f + 7] = (h.y + h.height) / e, s.updateFrame = !1), s.cacheAlpha != s.worldAlpha && (s.cacheAlpha = s.worldAlpha, h = 4 * D, this.colors[h] = this.colors[h + 1] = this.colors[h + 2] = this.colors[h + 3] = s.worldAlpha, this.dirtyColors = !0), D++, s = s.__next
};
PIXI.WebGLBatch.prototype.render = function () {
    this.dirty && (this.refresh(), this.dirty = !1);
    if (0 != this.size) {
        this.update();
        var b = this.gl;
        this.blendMode == PIXI.blendModes.NORMAL ? b.blendFunc(b.ONE, b.ONE_MINUS_SRC_ALPHA) : b.blendFunc(b.ONE, b.ONE_MINUS_SRC_COLOR);
        var c = PIXI.shaderProgram;
        b.bindBuffer(b.ARRAY_BUFFER, this.vertexBuffer);
        b.bufferSubData(b.ARRAY_BUFFER, 0, this.verticies);
        b.vertexAttribPointer(c.vertexPositionAttribute, 2, b.FLOAT, !1, 0, 0);
        b.bindBuffer(b.ARRAY_BUFFER, this.uvBuffer);
        this.dirtyUVS && (this.dirtyUVS = !1, b.bufferSubData(b.ARRAY_BUFFER, 0, this.uvs));
        b.vertexAttribPointer(c.textureCoordAttribute, 2, b.FLOAT, !1, 0, 0);
        b.activeTexture(b.TEXTURE0);
        b.bindTexture(b.TEXTURE_2D, this.texture._glTexture);
        b.bindBuffer(b.ARRAY_BUFFER, this.colorBuffer);
        this.dirtyColors && (this.dirtyColors = !1, b.bufferSubData(b.ARRAY_BUFFER, 0, this.colors));
        b.vertexAttribPointer(c.colorAttribute, 1, b.FLOAT, !1, 0, 0);
        b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        b.drawElements(b.TRIANGLES, 6 * this.size, b.UNSIGNED_SHORT, 0)
    }
};
PIXI.CanvasRenderer = function (b, c) {
    this.width = b ? b : 800;
    this.height = c ? c : 600;
    this.refresh = !0;
    this.view = document.createElement("canvas");
    this.view.width = this.width;
    this.view.height = this.height;
    this.count = 0;
    this.context = this.view.getContext("2d")
};
PIXI.CanvasRenderer.constructor = PIXI.CanvasRenderer;
PIXI.CanvasRenderer.prototype.render = function (b) {
    b.__childrenAdded = [];
    b.__childrenRemoved = [];
    PIXI.texturesToUpdate = [];
    this.context.setTransform(1, 0, 0, 1, 0, 0);
    b.updateTransform();
    this.context.setTransform(1, 0, 0, 1, 0, 0);
    this.view.style.backgroundColor != b.backgroundColorString && (this.view.style.backgroundColor = b.backgroundColorString);
    this.context.clearRect(0, 0, this.width, this.height);
    this.renderDisplayObject(b)
};
PIXI.CanvasRenderer.prototype.resize = function (b, c) {
    this.width = b;
    this.height = c;
    this.view.width = b;
    this.view.height = c
};
PIXI.CanvasRenderer.prototype.renderDisplayObject = function (b) {
    var c = b.worldTransform,
        f = this.context;
    f.globalCompositeOperation = "source-over";
    if (b.visible) {
        if (b instanceof PIXI.Sprite) {
            var e = b.texture.frame;
            e && (f.globalAlpha = b.worldAlpha, f.setTransform(c[0], c[3], c[1], c[4], c[2], c[5]), f.drawImage(b.texture.baseTexture.source, e.x, e.y, e.width, e.height, (b.anchor.x - b.texture.trim.x) * -e.width, (b.anchor.y - b.texture.trim.y) * -e.height, b.width, b.height))
        } else b instanceof PIXI.Strip && (f.setTransform(c[0], c[3],
            c[1], c[4], c[2], c[5]), this.renderStrip(b));
        for (c = 0; c < b.children.length; c++) this.renderDisplayObject(b.children[c])
    }
};
PIXI.CanvasRenderer.prototype.renderStripFlat = function (b) {
    var c = this.context;
    b = b.verticies;
    var f = b.length / 2;
    this.count++;
    c.beginPath();
    for (var e = 1; e < f - 2; e++) {
        var g = 2 * e,
            h = b[g + 2],
            j = b[g + 4],
            n = b[g + 3],
            q = b[g + 5];
        c.moveTo(b[g], b[g + 1]);
        c.lineTo(h, n);
        c.lineTo(j, q)
    }
    c.fillStyle = "#FF0000";
    c.fill();
    c.closePath()
};
PIXI.CanvasRenderer.prototype.renderStrip = function (b) {
    var c = this.context,
        f = b.verticies,
        e = b.uvs,
        g = f.length / 2;
    this.count++;
    for (var h = 1; h < g - 2; h++) {
        var j = 2 * h,
            n = f[j],
            q = f[j + 2],
            p = f[j + 4],
            C = f[j + 1],
            D = f[j + 3],
            s = f[j + 5],
            x = e[j] * b.texture.width,
            y = e[j + 2] * b.texture.width,
            u = e[j + 4] * b.texture.width,
            m = e[j + 1] * b.texture.height,
            E = e[j + 3] * b.texture.height,
            j = e[j + 5] * b.texture.height;
        c.save();
        c.beginPath();
        c.moveTo(n, C);
        c.lineTo(q, D);
        c.lineTo(p, s);
        c.closePath();
        c.clip();
        var B = x * E + m * u + y * j - E * u - m * y - x * j;
        c.transform((n * E + m * p + q * j - E *
            p - m * q - n * j) / B, (C * E + m * s + D * j - E * s - m * D - C * j) / B, (x * q + n * u + y * p - q * u - n * y - x * p) / B, (x * D + C * u + y * s - D * u - C * y - x * s) / B, (x * E * p + m * q * u + n * y * j - n * E * u - m * y * p - x * q * j) / B, (x * E * s + m * D * u + C * y * j - C * E * u - m * y * s - x * D * j) / B);
        c.drawImage(b.texture.baseTexture.source, 0, 0);
        c.restore()
    }
};
PIXI.DisplayObject = function () {
    this.position = new PIXI.Point;
    this.scale = new PIXI.Point(1, 1);
    this.rotation = 0;
    this.alpha = 1;
    this.visible = !0;
    this.cacheVisible = !1;
    this.stage = this.parent = null;
    this.worldAlpha = 1;
    this.color = [];
    this.worldTransform = mat3.identity();
    this.localTransform = mat3.identity();
    this.dynamic = !0;
    this._sr = 0;
    this._cr = 1;
    this.renderable = !1
};
PIXI.DisplayObject.constructor = PIXI.DisplayObject;
PIXI.DisplayObject.prototype.updateTransform = function () {
    this.rotation != this.rotationCache && (this.rotationCach = this.rotation, this._sr = Math.sin(this.rotation), this._cr = Math.cos(this.rotation));
    this.localTransform[0] = this._cr * this.scale.x;
    this.localTransform[1] = -this._sr * this.scale.y;
    this.localTransform[3] = this._sr * this.scale.x;
    this.localTransform[4] = this._cr * this.scale.y;
    this.localTransform[2] = this.position.x;
    this.localTransform[5] = this.position.y;
    mat3.multiply(this.localTransform, this.parent.worldTransform,
    this.worldTransform);
    this.worldAlpha = this.alpha * this.parent.worldAlpha
};
PIXI.DisplayObjectContainer = function () {
    PIXI.DisplayObject.call(this);
    this.children = [];
    this.renderable = !1
};
PIXI.DisplayObjectContainer.constructor = PIXI.DisplayObjectContainer;
PIXI.DisplayObjectContainer.prototype = Object.create(PIXI.DisplayObject.prototype);
PIXI.DisplayObjectContainer.prototype.addChild = function (b) {
    void 0 != b.parent && b.parent.removeChild(b);
    b.parent = this;
    b.childIndex = this.children.length;
    this.children.push(b);
    this.stage && this.stage.__addChild(b)
};
PIXI.DisplayObjectContainer.prototype.addChildAt = function (b, c) {
    if (0 <= c && c <= this.children.length) {
        void 0 != b.parent && b.parent.removeChild(b);
        c == this.children.length ? this.children.push(b) : this.children.splice(c, 0, b);
        b.parent = this;
        b.childIndex = c;
        for (var f = this.children.length, e = c; e < f; e++) this.children[e].childIndex = e;
        this.stage && this.stage.__addChild(b)
    } else throw Error(b + " The index " + c + " supplied is out of bounds " + this.children.length);
};
PIXI.DisplayObjectContainer.prototype.removeChild = function (b) {
    var c = this.children.indexOf(b);
    if (-1 !== c) {
        this.stage && this.stage.__removeChild(b);
        b.parent = void 0;
        this.children.splice(c, 1);
        b = c;
        for (c = this.children.length; b < c; b++) this.children[b].childIndex -= 1
    } else throw Error(b + " The supplied DisplayObject must be a child of the caller " + this);
};
PIXI.DisplayObjectContainer.prototype.updateTransform = function () {
    if (this.visible) {
        PIXI.DisplayObject.prototype.updateTransform.call(this);
        for (var b = 0, c = this.children.length; b < c; b++) this.children[b].updateTransform()
    }
};
PIXI.Stage = function (b) {
    PIXI.DisplayObjectContainer.call(this);
    this.worldTransform = mat3.identity();
    this.__childrenAdded = [];
    this.__childrenRemoved = [];
    this.childIndex = 0;
    this.stage = this;
    this.setBackgroundColor(b)
};
PIXI.Stage.constructor = PIXI.Stage;
PIXI.Stage.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
PIXI.Stage.prototype.updateTransform = function () {
    this.worldAlpha = 1;
    for (var b = 0, c = this.children.length; b < c; b++) this.children[b].updateTransform()
};
PIXI.Stage.prototype.setBackgroundColor = function (b) {
    this.backgroundColor = b ? b : 0;
    this.backgroundColorSplit = HEXtoRGB(this.backgroundColor);
    this.backgroundColorString = "#" + this.backgroundColor.toString(16)
};
PIXI.Stage.prototype.__addChild = function (b) {
    b.stage = this;
    if (b.children) for (var c = 0; c < b.children.length; c++) this.__addChild(b.children[c])
};
PIXI.Stage.prototype.__removeChild = function (b) {
    this.__childrenRemoved.push(b);
    b.stage = void 0;
    if (b.children) for (var c = 0, f = b.children.length; c < f; c++) this.__removeChild(b.children[c])
};
PIXI.blendModes = {};
PIXI.blendModes.NORMAL = 0;
PIXI.blendModes.SCREEN = 1;
PIXI.Sprite = function (b) {
    PIXI.DisplayObjectContainer.call(this);
    this.anchor = new PIXI.Point;
    this.texture = b;
    this.blendMode = PIXI.blendModes.NORMAL;
    this.height = this.width = 1;
    b.baseTexture.hasLoaded ? (this.width = this.texture.frame.width, this.height = this.texture.frame.height, this.updateFrame = !0) : (this.onTextureUpdateBind = this.onTextureUpdate.bind(this), this.texture.addEventListener("update", this.onTextureUpdateBind));
    this.renderable = !0
};
PIXI.Sprite.constructor = PIXI.Sprite;
PIXI.Sprite.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
PIXI.Sprite.prototype.setTexture = function (b) {
    this.texture.baseTexture != b.baseTexture && (this.textureChange = !0);
    this.texture = b;
    this.width = b.frame.width;
    this.height = b.frame.height;
    this.updateFrame = !0
};
PIXI.Sprite.prototype.onTextureUpdate = function () {
    this.width = this.texture.frame.width;
    this.height = this.texture.frame.height;
    this.updateFrame = !0
};
PIXI.Sprite.fromFrame = function (b) {
    var c = PIXI.TextureCache[b];
    if (!c) throw Error("The frameId '" + b + "' does not exist in the texture cache" + this);
    return new PIXI.Sprite(c)
};
PIXI.Sprite.fromImage = function (b) {
    b = PIXI.Texture.fromImage(b);
    return new PIXI.Sprite(b)
};
PIXI.Strip = function (b, c, f) {
    PIXI.DisplayObjectContainer.call(this);
    this.texture = b;
    this.blendMode = PIXI.blendModes.NORMAL;
    try {
        this.uvs = new Float32Array([0, 1, 1, 1, 1, 0, 0, 1]), this.verticies = new Float32Array([0, 0, 0, 0, 0, 0, 0, 0, 0]), this.colors = new Float32Array([1, 1, 1, 1]), this.indices = new Uint16Array([0, 1, 2, 3])
    } catch (e) {
        this.uvs = [0, 1, 1, 1, 1, 0, 0, 1], this.verticies = [0, 0, 0, 0, 0, 0, 0, 0, 0], this.colors = [1, 1, 1, 1], this.indices = [0, 1, 2, 3]
    }
    this.width = c;
    this.height = f;
    b.baseTexture.hasLoaded ? (this.width = this.texture.frame.width,
    this.height = this.texture.frame.height, this.updateFrame = !0) : (this.onTextureUpdateBind = this.onTextureUpdate.bind(this), this.texture.addEventListener("update", this.onTextureUpdateBind));
    this.renderable = !0
};
PIXI.Strip.constructor = PIXI.Strip;
PIXI.Strip.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
PIXI.Strip.prototype.setTexture = function (b) {
    this.texture = b;
    this.width = b.frame.width;
    this.height = b.frame.height;
    this.updateFrame = !0
};
PIXI.Strip.prototype.onTextureUpdate = function () {
    this.updateFrame = !0
};
PIXI.Rope = function (b, c) {
    PIXI.Strip.call(this, b);
    this.points = c;
    try {
        this.verticies = new Float32Array(4 * c.length), this.uvs = new Float32Array(4 * c.length), this.colors = new Float32Array(2 * c.length), this.indices = new Uint16Array(2 * c.length)
    } catch (f) {
        this.verticies = verticies, this.uvs = uvs, this.colors = colors, this.indices = indices
    }
    this.refresh()
};
PIXI.Rope.constructor = PIXI.Rope;
PIXI.Rope.prototype = Object.create(PIXI.Strip.prototype);
PIXI.Rope.prototype.refresh = function () {
    var b = this.points;
    if (!(1 > b.length)) {
        var c = this.uvs,
            f = this.indices,
            e = this.colors;
        this.count -= 0.2;
        c[0] = 0;
        c[1] = 1;
        c[2] = 0;
        c[3] = 1;
        e[0] = 1;
        e[1] = 1;
        f[0] = 0;
        f[1] = 1;
        for (var b = b.length, g = 1; g < b; g++) {
            var h = 4 * g,
                j = g / (b - 1);
            c[h] = j;
            c[h + 1] = 0;
            c[h + 2] = j;
            c[h + 3] = 1;
            h = 2 * g;
            e[h] = 1;
            e[h + 1] = 1;
            h = 2 * g;
            f[h] = h;
            f[h + 1] = h + 1
        }
    }
};
PIXI.Rope.prototype.updateTransform = function () {
    var b = this.points;
    if (!(1 > b.length)) {
        var c = this.verticies,
            f = b[0],
            e, g = e = 0,
            h = b[0];
        this.count -= 0.2;
        c[0] = h.x + e;
        c[1] = h.y + g;
        c[2] = h.x - e;
        c[3] = h.y - g;
        for (var j = b.length, n = 1; n < j; n++) {
            var h = b[n],
                q = 4 * n;
            e = n < b.length - 1 ? b[n + 1] : h;
            g = -(e.x - f.x);
            e = e.y - f.y;
            var f = Math.sqrt(e * e + g * g),
                p = this.texture.height / 2;
            e /= f;
            g /= f;
            e *= p;
            g *= p;
            c[q] = h.x + e;
            c[q + 1] = h.y + g;
            c[q + 2] = h.x - e;
            c[q + 3] = h.y - g;
            f = h
        }
        PIXI.DisplayObjectContainer.prototype.updateTransform.call(this)
    }
};
PIXI.Rope.prototype.setTexture = function (b) {
    this.texture = b;
    this.updateFrame = !0
};
PIXI.MovieClip = function (b) {
    PIXI.Sprite.call(this, b[0]);
    this.textures = b;
    this.currentFrame = 0;
    this.animationSpeed = 1
};
PIXI.MovieClip.constructor = PIXI.MovieClip;
PIXI.MovieClip.prototype = Object.create(PIXI.Sprite.prototype);
PIXI.MovieClip.prototype.stop = function () {
    this.playing = !1
};
PIXI.MovieClip.prototype.play = function () {
    this.playing = !0
};
PIXI.MovieClip.prototype.gotoAndStop = function (b) {
    this.playing = !1;
    this.currentFrame = b;
    this.setTexture(this.textures[(this.currentFrame + 0.5 | 0) % this.textures.length])
};
PIXI.MovieClip.prototype.gotoAndPlay = function (b) {
    this.currentFrame = b;
    this.playing = !0
};
PIXI.MovieClip.prototype.updateTransform = function () {
    PIXI.Sprite.prototype.updateTransform.call(this);
    this.playing && (this.currentFrame += this.animationSpeed, this.setTexture(this.textures[(this.currentFrame + 0.5 | 0) % this.textures.length]))
};
PIXI.BaseTextureCache = {};
PIXI.texturesToUpdate = [];
PIXI.BaseTexture = function (b) {
    PIXI.EventTarget.call(this);
    this.height = this.width = 100;
    this.source = b;
    if (this.source instanceof Image) if (this.source.complete) this.hasLoaded = !0, this.width = this.source.width, this.height = this.source.height, PIXI.texturesToUpdate.push(this);
        else {
            var c = this;
            this.source.onload = function () {
                c.hasLoaded = !0;
                c.width = c.source.width;
                c.height = c.source.height;
                PIXI.texturesToUpdate.push(c);
                c.dispatchEvent({
                    type: "loaded",
                    content: c
                })
            }
        } else this.hasLoaded = !0, this.width = this.source.width, this.height =
                this.source.height, PIXI.texturesToUpdate.push(this)
};
PIXI.BaseTexture.constructor = PIXI.BaseTexture;
PIXI.BaseTexture.prototype.fromImage = function () {};
PIXI.TextureCache = {};
PIXI.FrameCache = {};
PIXI.Texture = function (b, c) {
    PIXI.EventTarget.call(this);
    c || (this.noFrame = !0, c = new PIXI.Rectangle(0, 0, 1, 1));
    this.trim = new PIXI.Point;
    this.baseTexture = b;
    this.frame = c;
    this.scope = this;
    if (b.hasLoaded) this.noFrame && (c = new PIXI.Rectangle(0, 0, b.width, b.height)), this.setFrame(c);
    else {
        var f = this;
        b.addEventListener("loaded", function () {
            f.onBaseTextureLoaded()
        })
    }
};
PIXI.Texture.constructor = PIXI.Texture;
PIXI.Texture.prototype.onBaseTextureLoaded = function () {
    var b = this.baseTexture;
    b.removeEventListener("loaded", this.onLoaded);
    this.noFrame && (this.frame = new PIXI.Rectangle(0, 0, b.width, b.height));
    this.noFrame = !1;
    this.width = this.frame.width;
    this.height = this.frame.height;
    this.scope.dispatchEvent({
        type: "update",
        content: this
    })
};
PIXI.Texture.prototype.setFrame = function (b) {
    this.frame = b;
    this.width = b.width;
    this.height = b.height
};
PIXI.Texture.fromImage = function (b) {
    var c = PIXI.TextureCache[b];
    c || (c = PIXI.BaseTextureCache[b], c || (c = new Image, c.src = b, c = new PIXI.BaseTexture(c), PIXI.BaseTextureCache[b] = c), c = new PIXI.Texture(c), PIXI.TextureCache[b] = c);
    return c
};
PIXI.Texture.fromFrame = function (b) {
    var c = PIXI.TextureCache[b];
    if (!c) throw Error("The frameId '" + b + "' does not exist in the texture cache " + this);
    return c
};
PIXI.Texture.fromCanvas = function (b) {
    var c = PIXI.TextureCache[b];
    c || (c = PIXI.BaseTextureCache[b], c || (c = new PIXI.BaseTexture(b), PIXI.BaseTextureCache[b] = c), c = new PIXI.Texture(c), PIXI.TextureCache[b] = c);
    return c
};
PIXI.Texture.addTextureToCache = function (b, c) {
    PIXI.TextureCache[c] = b
};
PIXI.Texture.removeTextureFromCache = function (b) {
    PIXI.TextureCache[b] = texture
};
PIXI.autoDetectRenderer = function (b, c) {
    b || (b = 800);
    c || (c = 600);
    var f;
    try {
        f = !! window.WebGLRenderingContext && !! document.createElement("canvas").getContext("experimental-webgl")
    } catch (e) {
        f = !1
    }
    return f ? new PIXI.WebGLRenderer(b, c) : new PIXI.CanvasRenderer(b, c)
};
PIXI.SpriteSheetLoader = function (b) {
    PIXI.EventTarget.call(this);
    this.url = b;
    this.baseUrl = b.replace(/[^\/]*$/, "");
    this.texture;
    this.frames = {}
};
PIXI.SpriteSheetLoader.constructor = PIXI.SpriteSheetLoader;
PIXI.SpriteSheetLoader.prototype.load = function () {
    this.ajaxRequest = new AjaxRequest;
    var b = this;
    this.ajaxRequest.onreadystatechange = function () {
        b.onLoaded()
    };
    this.ajaxRequest.open("GET", this.url, !0);
    this.ajaxRequest.send(null)
};
PIXI.SpriteSheetLoader.prototype.onLoaded = function () {
    if (4 == this.ajaxRequest.readyState && (200 == this.ajaxRequest.status || -1 == window.location.href.indexOf("http"))) {
        var b = eval("(" + this.ajaxRequest.responseText + ")");
        this.texture = PIXI.Texture.fromImage(this.baseUrl + b.meta.image).baseTexture;
        var b = b.frames,
            c;
        for (c in b) {
            var f = b[c].frame;
            PIXI.TextureCache[c] = new PIXI.Texture(this.texture, {
                x: f.x,
                y: f.y,
                width: f.w,
                height: f.h
            });
            b[c].trimmed && (PIXI.TextureCache[c].realSize = b[c].spriteSourceSize, PIXI.TextureCache[c].trim.x =
                0)
        }
        if (this.texture.hasLoaded) this.dispatchEvent({
                type: "loaded",
                content: this
            });
        else {
            var e = this;
            this.texture.addEventListener("loaded", function () {
                e.dispatchEvent({
                    type: "loaded",
                    content: e
                })
            })
        }
    }
};
PIXI.AssetLoader = function (b) {
    PIXI.EventTarget.call(this);
    this.assetURLs = b;
    this.assets = []
};
PIXI.AssetLoader.constructor = PIXI.AssetLoader;
PIXI.AssetLoader.prototype.load = function () {
    this.loadCount = this.assetURLs.length;
    for (var b = ["jpeg", "jpg", "png", "gif"], c = ["json"], f = 0; f < this.assetURLs.length; f++) {
        for (var e = this.assetURLs[f], g = e.split(".").pop().toLowerCase(), h = null, j = 0; j < b.length; j++) if (g == b[j]) {
                h = "img";
                break
            }
        if ("img" != h) for (j = 0; j < c.length; j++) if (g == c[j]) {
                    h = "atlas";
                    break
                }
        if ("img" == h) if (e = PIXI.Texture.fromImage(e), e.hasLoaded) this.loadCount--;
            else {
                var n = this;
                e.baseTexture.addEventListener("loaded", function () {
                    n.onAssetLoaded()
                });
                this.assets.push(e)
            } else if ("atlas" ==
            h) e = new PIXI.SpriteSheetLoader(e), this.assets.push(e), n = this, e.addEventListener("loaded", function () {
                n.onAssetLoaded()
            }), e.load();
        else throw Error(e + " is an unsupported file type " + this);
    }
};
PIXI.AssetLoader.prototype.onAssetLoaded = function () {
    this.loadCount--;
    this.dispatchEvent({
        type: "onProgress",
        content: this
    });
    if (this.onProgress) this.onProgress();
    if (0 == this.loadCount && (this.dispatchEvent({
        type: "onComplete",
        content: this
    }), this.onComplete)) this.onComplete()
};