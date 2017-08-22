"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// OpenLayers 3. See http://openlayers.org/
// License: https://raw.githubusercontent.com/openlayers/ol3/master/LICENSE.md
// Version: v3.16.0-15-gafa740c

(function () {
  var q,
      aa = this;function ba(a) {
    a.ya = function () {
      return a.ac ? a.ac : a.ac = new a();
    };
  }
  function ca(a) {
    var c = typeof a === "undefined" ? "undefined" : _typeof(a);if ("object" == c) {
      if (a) {
        if (a instanceof Array) return "array";if (a instanceof Object) return c;var d = Object.prototype.toString.call(a);if ("[object Window]" == d) return "object";if ("[object Array]" == d || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";if ("[object Function]" == d || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function";
      } else return "null";
    } else if ("function" == c && "undefined" == typeof a.call) return "object";return c;
  }function da(a) {
    var c = ca(a);return "array" == c || "object" == c && "number" == typeof a.length;
  }function ea(a) {
    return "string" == typeof a;
  }function fa(a) {
    return "number" == typeof a;
  }function ga(a) {
    return "function" == ca(a);
  }function ha(a) {
    var c = typeof a === "undefined" ? "undefined" : _typeof(a);return "object" == c && null != a || "function" == c;
  }function x(a) {
    return a[ia] || (a[ia] = ++ja);
  }var ia = "closure_uid_" + (1E9 * Math.random() >>> 0),
      ja = 0;function ka(a, c, d) {
    return a.call.apply(a.bind, arguments);
  }
  function la(a, c, d) {
    if (!a) throw Error();if (2 < arguments.length) {
      var e = Array.prototype.slice.call(arguments, 2);return function () {
        var d = Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(d, e);return a.apply(c, d);
      };
    }return function () {
      return a.apply(c, arguments);
    };
  }function ma(a, c, d) {
    ma = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ka : la;return ma.apply(null, arguments);
  }
  function B(a, c) {
    var d = a.split("."),
        e = aa;d[0] in e || !e.execScript || e.execScript("var " + d[0]);for (var f; d.length && (f = d.shift());) {
      d.length || void 0 === c ? e[f] ? e = e[f] : e = e[f] = {} : e[f] = c;
    }
  }function F(a, c) {
    function d() {}d.prototype = c.prototype;a.S = c.prototype;a.prototype = new d();a.prototype.constructor = a;a.ue = function (a, d, g) {
      for (var h = Array(arguments.length - 2), k = 2; k < arguments.length; k++) {
        h[k - 2] = arguments[k];
      }return c.prototype[d].apply(a, h);
    };
  };var na;function oa() {}var K = Function("return this")();var pa;var qa = String.prototype.trim ? function (a) {
    return a.trim();
  } : function (a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
  };function ra(a) {
    if (!sa.test(a)) return a;-1 != a.indexOf("&") && (a = a.replace(ta, "&amp;"));-1 != a.indexOf("<") && (a = a.replace(ua, "&lt;"));-1 != a.indexOf(">") && (a = a.replace(va, "&gt;"));-1 != a.indexOf('"') && (a = a.replace(xa, "&quot;"));-1 != a.indexOf("'") && (a = a.replace(ya, "&#39;"));-1 != a.indexOf("\x00") && (a = a.replace(za, "&#0;"));return a;
  }var ta = /&/g,
      ua = /</g,
      va = />/g,
      xa = /"/g,
      ya = /'/g,
      za = /\x00/g,
      sa = /[\x00&<>"']/;
  function Aa(a, c) {
    return a < c ? -1 : a > c ? 1 : 0;
  };function Ba(a, c, d) {
    return Math.min(Math.max(a, c), d);
  }var Ca = function () {
    var a;"cosh" in Math ? a = Math.cosh : a = function (_a) {
      function a(_x) {
        return _a.apply(this, arguments);
      }

      a.toString = function () {
        return _a.toString();
      };

      return a;
    }(function (a) {
      a = Math.exp(a);return (a + 1 / a) / 2;
    });return a;
  }();function Da(a, c) {
    var d = a % c;return 0 > d * c ? d + c : d;
  };function Ea(a) {
    return function (c) {
      if (c) return [Ba(c[0], a[0], a[2]), Ba(c[1], a[1], a[3])];
    };
  }function Fa(a) {
    return a;
  };function Ga(a, c, d) {
    this.center = a;this.resolution = c;this.rotation = d;
  };var Ha = "function" === typeof Object.assign ? Object.assign : function (a, c) {
    if (void 0 === a || null === a) throw new TypeError("Cannot convert undefined or null to object");for (var d = Object(a), e = 1, f = arguments.length; e < f; ++e) {
      var g = arguments[e];if (void 0 !== g && null !== g) for (var h in g) {
        g.hasOwnProperty(h) && (d[h] = g[h]);
      }
    }return d;
  };function Ia(a) {
    for (var c in a) {
      delete a[c];
    }
  }function Ja(a) {
    var c = [],
        d;for (d in a) {
      c.push(a[d]);
    }return c;
  }function Ka(a) {
    for (var c in a) {
      return !1;
    }return !c;
  };var La = "olm_" + (1E4 * Math.random() | 0);function Na(a) {
    function c(c) {
      var e = a.listener,
          f = a.Kb || a.target;a.Mb && L(a);return e.call(f, c);
    }return a.Lb = c;
  }function Oa(a, c, d, e) {
    for (var f, g = 0, h = a.length; g < h; ++g) {
      if (f = a[g], f.listener === c && f.Kb === d) return e && (f.deleteIndex = g), f;
    }
  }function Pa(a, c) {
    var d = a[La];return d ? d[c] : void 0;
  }function Qa(a) {
    var c = a[La];c || (c = a[La] = {});return c;
  }
  function Ra(a, c) {
    var d = Pa(a, c);if (d) {
      for (var e = 0, f = d.length; e < f; ++e) {
        a.removeEventListener(c, d[e].Lb), Ia(d[e]);
      }d.length = 0;if (d = a[La]) delete d[c], 0 === Object.keys(d).length && delete a[La];
    }
  }function Q(a, c, d, e, f) {
    var g = Qa(a),
        h = g[c];h || (h = g[c] = []);(g = Oa(h, d, e, !1)) ? f || (g.Mb = !1) : (g = { Kb: e, Mb: !!f, listener: d, target: a, type: c }, a.addEventListener(c, Na(g)), h.push(g));return g;
  }function Sa(a, c, d, e) {
    return Q(a, c, d, e, !0);
  }function Ta(a, c, d, e) {
    (a = Pa(a, c)) && (d = Oa(a, d, e, !0)) && L(d);
  }
  function L(a) {
    if (a && a.target) {
      a.target.removeEventListener(a.type, a.Lb);var c = Pa(a.target, a.type);if (c) {
        var d = "deleteIndex" in a ? a.deleteIndex : c.indexOf(a);-1 !== d && c.splice(d, 1);0 === c.length && Ra(a.target, a.type);
      }Ia(a);
    }
  }function Ua(a) {
    var c = Qa(a),
        d;for (d in c) {
      Ra(a, d);
    }
  };function Va() {}Va.prototype.ja = !1;function Wa(a) {
    a.ja || (a.ja = !0, a.O());
  }Va.prototype.O = oa;function R(a, c) {
    this.type = a;this.target = c || null;
  }R.prototype.preventDefault = R.prototype.stopPropagation = function () {
    this.Ud = !0;
  };function Xa(a) {
    a.stopPropagation();
  };function Ya() {
    this.M = {};this.A = {};this.s = {};
  }F(Ya, Va);Ya.prototype.addEventListener = function (a, c) {
    var d = this.s[a];d || (d = this.s[a] = []);-1 === d.indexOf(c) && d.push(c);
  };function S(a, c) {
    var d = "string" === typeof c ? new R(c) : c,
        e = d.type;d.target = a;var f = a.s[e],
        g;if (f) {
      e in a.A || (a.A[e] = 0, a.M[e] = 0);++a.A[e];for (var h = 0, k = f.length; h < k; ++h) {
        if (!1 === f[h].call(a, d) || d.Ud) {
          g = !1;break;
        }
      }--a.A[e];if (0 === a.A[e]) {
        d = a.M[e];for (delete a.M[e]; d--;) {
          a.removeEventListener(e, oa);
        }delete a.A[e];
      }return g;
    }
  }Ya.prototype.O = function () {
    Ua(this);
  };
  function Za(a, c) {
    return c ? c in a.s : 0 < Object.keys(a.s).length;
  }Ya.prototype.removeEventListener = function (a, c) {
    var d = this.s[a];if (d) {
      var e = d.indexOf(c);a in this.M ? (d[e] = oa, ++this.M[a]) : (d.splice(e, 1), 0 === d.length && delete this.s[a]);
    }
  };function $a() {
    Ya.call(this);this.g = 0;
  }F($a, Ya);$a.prototype.b = function () {
    ++this.g;S(this, "change");
  };$a.prototype.$ = function (a, c, d) {
    if (Array.isArray(a)) {
      for (var e = a.length, f = Array(e), g = 0; g < e; ++g) {
        f[g] = Q(this, a[g], c, d);
      }return f;
    }return Q(this, a, c, d);
  };$a.prototype.ba = function (a, c, d) {
    if (Array.isArray(a)) for (var e = 0, f = a.length; e < f; ++e) {
      Ta(this, a[e], c, d);
    } else Ta(this, a, c, d);
  };function ab(a, c, d) {
    R.call(this, a);this.key = c;this.oldValue = d;
  }F(ab, R);function T(a) {
    $a.call(this);x(this);this.D = {};void 0 !== a && this.w(a);
  }F(T, $a);var bb = {};function U(a) {
    return bb.hasOwnProperty(a) ? bb[a] : bb[a] = "change:" + a;
  }T.prototype.get = function (a) {
    var c;this.D.hasOwnProperty(a) && (c = this.D[a]);return c;
  };T.prototype.va = function () {
    return Ha({}, this.D);
  };T.prototype.set = function (a, c, d) {
    d ? this.D[a] = c : (d = this.D[a], this.D[a] = c, d !== c && (c = U(a), S(this, new ab(c, a, d)), S(this, new ab("propertychange", a, d))));
  };
  T.prototype.w = function (a, c) {
    for (var d in a) {
      this.set(d, a[d], c);
    }
  };function cb(a, c) {
    return a > c ? 1 : a < c ? -1 : 0;
  }function db(a, c, d) {
    var e = a.length;if (a[0] <= c) return 0;if (!(c <= a[e - 1])) if (0 < d) for (d = 1; d < e; ++d) {
      if (a[d] < c) return d - 1;
    } else if (0 > d) for (d = 1; d < e; ++d) {
      if (a[d] <= c) return d;
    } else for (d = 1; d < e; ++d) {
      if (a[d] == c) return d;if (a[d] < c) return a[d - 1] - c < c - a[d] ? d - 1 : d;
    }return e - 1;
  }function eb(a, c) {
    var d = a.indexOf(c),
        e = -1 < d;e && a.splice(d, 1);return e;
  }function fb(a, c) {
    var d = a.length;if (d !== c.length) return !1;for (var e = 0; e < d; e++) {
      if (a[e] !== c[e]) return !1;
    }return !0;
  }
  function gb(a) {
    var c = hb,
        d = a.length,
        e = Array(a.length),
        f;for (f = 0; f < d; f++) {
      e[f] = { index: f, value: a[f] };
    }e.sort(function (a, d) {
      return c(a.value, d.value) || a.index - d.index;
    });for (f = 0; f < a.length; f++) {
      a[f] = e[f].value;
    }
  };function ib(a) {
    return function (c, d, e) {
      if (void 0 !== c) return c = db(a, c, e), c = Ba(c + d, 0, a.length - 1), a[c];
    };
  }function jb(a, c, d) {
    return function (e, f, g) {
      if (void 0 !== e) return e = Math.max(Math.floor(Math.log(c / e) / Math.log(a) + (0 < g ? 0 : 0 > g ? 1 : .5)) + f, 0), void 0 !== d && (e = Math.min(e, d)), c / Math.pow(a, e);
    };
  };function kb(a) {
    if (void 0 !== a) return 0;
  }function lb(a, c) {
    if (void 0 !== a) return a + c;
  }function mb(a) {
    var c = 2 * Math.PI / a;return function (a, e) {
      if (void 0 !== a) return a = Math.floor((a + e) / c + .5) * c;
    };
  }function nb() {
    var a = 5 * Math.PI / 180;return function (c, d) {
      if (void 0 !== c) return Math.abs(c + d) <= a ? 0 : c + d;
    };
  };function ob(a, c) {
    a[0] += c[0];a[1] += c[1];
  }function pb(a, c) {
    var d = Math.cos(c),
        e = Math.sin(c),
        f = a[1] * d + a[0] * e;a[0] = a[0] * d - a[1] * e;a[1] = f;
  };function qb(a) {
    for (var c = rb(), d = 0, e = a.length; d < e; ++d) {
      sb(c, a[d]);
    }return c;
  }function tb(a, c, d) {
    return d ? (d[0] = a[0] - c, d[1] = a[1] - c, d[2] = a[2] + c, d[3] = a[3] + c, d) : [a[0] - c, a[1] - c, a[2] + c, a[3] + c];
  }function ub(a, c) {
    return c ? (c[0] = a[0], c[1] = a[1], c[2] = a[2], c[3] = a[3], c) : a.slice();
  }function vb(a, c) {
    return a[0] <= c[0] && c[2] <= a[2] && a[1] <= c[1] && c[3] <= a[3];
  }function rb() {
    return [Infinity, Infinity, -Infinity, -Infinity];
  }function wb(a, c, d, e, f) {
    return f ? (f[0] = a, f[1] = c, f[2] = d, f[3] = e, f) : [a, c, d, e];
  }
  function xb(a) {
    var c = a[0];a = a[1];return wb(c, a, c, a, void 0);
  }function yb(a, c) {
    return a[0] == c[0] && a[2] == c[2] && a[1] == c[1] && a[3] == c[3];
  }function sb(a, c) {
    c[0] < a[0] && (a[0] = c[0]);c[0] > a[2] && (a[2] = c[0]);c[1] < a[1] && (a[1] = c[1]);c[1] > a[3] && (a[3] = c[1]);
  }function zb(a) {
    var c = 0;Ab(a) || (c = V(a) * Bb(a));return c;
  }function Cb(a) {
    return [a[0], a[1]];
  }function Db(a) {
    return [(a[0] + a[2]) / 2, (a[1] + a[3]) / 2];
  }
  function Eb(a, c, d, e, f) {
    var g = c * e[0] / 2;e = c * e[1] / 2;c = Math.cos(d);var h = Math.sin(d);d = g * c;g *= h;c *= e;var k = e * h,
        l = a[0],
        m = a[1];a = l - d + k;e = l - d - k;h = l + d - k;d = l + d + k;var k = m - g - c,
        l = m - g + c,
        n = m + g + c,
        g = m + g - c;return wb(Math.min(a, e, h, d), Math.min(k, l, n, g), Math.max(a, e, h, d), Math.max(k, l, n, g), f);
  }function Bb(a) {
    return a[3] - a[1];
  }function Fb(a, c) {
    var d = rb();Gb(a, c) && (d[0] = a[0] > c[0] ? a[0] : c[0], d[1] = a[1] > c[1] ? a[1] : c[1], d[2] = a[2] < c[2] ? a[2] : c[2], d[3] = a[3] < c[3] ? a[3] : c[3]);return d;
  }function Hb(a) {
    return [a[0], a[3]];
  }
  function V(a) {
    return a[2] - a[0];
  }function Gb(a, c) {
    return a[0] <= c[2] && a[2] >= c[0] && a[1] <= c[3] && a[3] >= c[1];
  }function Ab(a) {
    return a[2] < a[0] || a[3] < a[1];
  }function Ib(a, c) {
    var d = (a[2] - a[0]) / 2 * (c - 1),
        e = (a[3] - a[1]) / 2 * (c - 1);a[0] -= d;a[2] += d;a[1] -= e;a[3] += e;
  };function Jb() {
    return !0;
  }function Kb() {
    return !1;
  }; /*
     Latitude/longitude spherical geodesy formulae taken from
     http://www.movable-type.co.uk/scripts/latlong.html
     Licensed under CC-BY-3.0.
     */
  function Lb(a) {
    this.radius = a;
  }function Mb(a, c) {
    var d = a[1] * Math.PI / 180,
        e = c[1] * Math.PI / 180,
        f = (e - d) / 2,
        g = (c[0] - a[0]) * Math.PI / 180 / 2,
        d = Math.sin(f) * Math.sin(f) + Math.sin(g) * Math.sin(g) * Math.cos(d) * Math.cos(e);return 2 * Nb.radius * Math.atan2(Math.sqrt(d), Math.sqrt(1 - d));
  }
  Lb.prototype.offset = function (a, c, d) {
    var e = a[1] * Math.PI / 180;c /= this.radius;var f = Math.asin(Math.sin(e) * Math.cos(c) + Math.cos(e) * Math.sin(c) * Math.cos(d));return [180 * (a[0] * Math.PI / 180 + Math.atan2(Math.sin(d) * Math.sin(c) * Math.cos(e), Math.cos(c) - Math.sin(e) * Math.sin(f))) / Math.PI, 180 * f / Math.PI];
  };var Nb = new Lb(6370997);var Ob = {};Ob.degrees = 2 * Math.PI * Nb.radius / 360;Ob.ft = .3048;Ob.m = 1;Ob["us-ft"] = 1200 / 3937;function Pb(a) {
    this.b = a.code;this.g = a.units;this.h = void 0 !== a.extent ? a.extent : null;this.c = void 0 !== a.global ? a.global : !1;this.a = !(!this.c || !this.h);this.i = void 0 !== a.getPointResolution ? a.getPointResolution : this.s;this.f = null;this.j = a.metersPerUnit;
  }Pb.prototype.C = function () {
    return this.h;
  };function Qb(a) {
    return a.j || Ob[a.g];
  }
  Pb.prototype.s = function (a, c) {
    if ("degrees" == this.g) return a;var d = Rb(this, Sb("EPSG:4326")),
        e = [c[0] - a / 2, c[1], c[0] + a / 2, c[1], c[0], c[1] - a / 2, c[0], c[1] + a / 2],
        e = d(e, e, 2),
        d = (Mb(e.slice(0, 2), e.slice(2, 4)) + Mb(e.slice(4, 6), e.slice(6, 8))) / 2,
        e = Qb(this);void 0 !== e && (d /= e);return d;
  };Pb.prototype.getPointResolution = function (a, c) {
    return this.i(a, c);
  };var Tb = {},
      Ub = {};function Vb(a) {
    Wb(a);a.forEach(function (c) {
      a.forEach(function (a) {
        c !== a && Xb(c, a, Yb);
      });
    });
  }function Zb(a) {
    Tb[a.b] = a;Xb(a, a, Yb);
  }
  function Wb(a) {
    var c = [];a.forEach(function (a) {
      c.push(Zb(a));
    });
  }function $b(a) {
    return a ? "string" === typeof a ? Sb(a) : a : Sb("EPSG:3857");
  }function Xb(a, c, d) {
    a = a.b;c = c.b;a in Ub || (Ub[a] = {});Ub[a][c] = d;
  }function Sb(a) {
    var c;a instanceof Pb ? c = a : "string" === typeof a ? c = Tb[a] : c = null;return c;
  }function ac(a, c) {
    if (a === c) return !0;var d = a.g === c.g;return a.b === c.b ? d : Rb(a, c) === Yb && d;
  }function bc(a, c) {
    var d = Sb(a),
        e = Sb(c);return Rb(d, e);
  }
  function Rb(a, c) {
    var d = a.b,
        e = c.b,
        f;d in Ub && e in Ub[d] && (f = Ub[d][e]);void 0 === f && (f = cc);return f;
  }function cc(a, c) {
    if (void 0 !== c && a !== c) {
      for (var d = 0, e = a.length; d < e; ++d) {
        c[d] = a[d];
      }a = c;
    }return a;
  }function Yb(a, c) {
    var d;if (void 0 !== c) {
      d = 0;for (var e = a.length; d < e; ++d) {
        c[d] = a[d];
      }d = c;
    } else d = a.slice();return d;
  };function dc() {
    T.call(this);this.i = rb();this.j = -1;this.f = {};this.B = this.h = 0;
  }F(dc, T);dc.prototype.C = function (a) {
    if (this.j != this.g) {
      for (var c = this.L, d = this.L.length, e = this.K, f = wb(Infinity, Infinity, -Infinity, -Infinity, this.i), g = 0; g < d; g += e) {
        var h = f,
            k = c[g],
            l = c[g + 1];h[0] = Math.min(h[0], k);h[1] = Math.min(h[1], l);h[2] = Math.max(h[2], k);h[3] = Math.max(h[3], l);
      }this.i = f;this.j = this.g;
    }c = this.i;a ? (a[0] = c[0], a[1] = c[1], a[2] = c[2], a[3] = c[3]) : a = c;return a;
  };function ec(a) {
    this.length = a.length || a;for (var c = 0; c < this.length; c++) {
      this[c] = a[c] || 0;
    }
  }ec.prototype.BYTES_PER_ELEMENT = 4;ec.prototype.set = function (a, c) {
    c = c || 0;for (var d = 0; d < a.length && c + d < this.length; d++) {
      this[c + d] = a[d];
    }
  };ec.prototype.toString = Array.prototype.join;"undefined" == typeof Float32Array && (ec.BYTES_PER_ELEMENT = 4, ec.prototype.BYTES_PER_ELEMENT = ec.prototype.BYTES_PER_ELEMENT, ec.prototype.set = ec.prototype.set, ec.prototype.toString = ec.prototype.toString, B("Float32Array", ec));function fc(a) {
    this.length = a.length || a;for (var c = 0; c < this.length; c++) {
      this[c] = a[c] || 0;
    }
  }fc.prototype.BYTES_PER_ELEMENT = 8;fc.prototype.set = function (a, c) {
    c = c || 0;for (var d = 0; d < a.length && c + d < this.length; d++) {
      this[c + d] = a[d];
    }
  };fc.prototype.toString = Array.prototype.join;if ("undefined" == typeof Float64Array) {
    try {
      fc.BYTES_PER_ELEMENT = 8;
    } catch (a) {}fc.prototype.BYTES_PER_ELEMENT = fc.prototype.BYTES_PER_ELEMENT;fc.prototype.set = fc.prototype.set;fc.prototype.toString = fc.prototype.toString;B("Float64Array", fc);
  };function gc(a, c, d, e, f) {
    a[0] = c;a[1] = d;a[2] = e;a[3] = f;
  };function hc() {
    var a = Array(16);ic(a, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);return a;
  }function jc() {
    var a = Array(16);ic(a, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);return a;
  }function ic(a, c, d, e, f, g, h, k, l, m, n, p, r, t, u, y, A) {
    a[0] = c;a[1] = d;a[2] = e;a[3] = f;a[4] = g;a[5] = h;a[6] = k;a[7] = l;a[8] = m;a[9] = n;a[10] = p;a[11] = r;a[12] = t;a[13] = u;a[14] = y;a[15] = A;
  }function kc(a) {
    a[0] = 1;a[1] = 0;a[2] = 0;a[3] = 0;a[4] = 0;a[5] = 1;a[6] = 0;a[7] = 0;a[8] = 0;a[9] = 0;a[10] = 1;a[11] = 0;a[12] = 0;a[13] = 0;a[14] = 0;a[15] = 1;
  }
  function lc(a, c) {
    var d = a[0],
        e = a[1],
        f = a[2],
        g = a[3],
        h = a[4],
        k = a[5],
        l = a[6],
        m = a[7],
        n = a[8],
        p = a[9],
        r = a[10],
        t = a[11],
        u = a[12],
        y = a[13],
        A = a[14],
        C = a[15],
        w = d * k - e * h,
        v = d * l - f * h,
        D = d * m - g * h,
        E = e * l - f * k,
        H = e * m - g * k,
        G = f * m - g * l,
        O = n * y - p * u,
        z = n * A - r * u,
        I = n * C - t * u,
        N = p * A - r * y,
        J = p * C - t * y,
        P = r * C - t * A,
        M = w * P - v * J + D * N + E * I - H * z + G * O;0 != M && (M = 1 / M, c[0] = (k * P - l * J + m * N) * M, c[1] = (-e * P + f * J - g * N) * M, c[2] = (y * G - A * H + C * E) * M, c[3] = (-p * G + r * H - t * E) * M, c[4] = (-h * P + l * I - m * z) * M, c[5] = (d * P - f * I + g * z) * M, c[6] = (-u * G + A * D - C * v) * M, c[7] = (n * G - r * D + t * v) * M, c[8] = (h * J - k * I + m * O) * M, c[9] = (-d * J + e * I - g * O) * M, c[10] = (u * H - y * D + C * w) * M, c[11] = (-n * H + p * D - t * w) * M, c[12] = (-h * N + k * z - l * O) * M, c[13] = (d * N - e * z + f * O) * M, c[14] = (-u * E + y * v - A * w) * M, c[15] = (n * E - p * v + r * w) * M);
  }function mc(a, c, d) {
    var e = a[1] * c + a[5] * d + 0 * a[9] + a[13],
        f = a[2] * c + a[6] * d + 0 * a[10] + a[14],
        g = a[3] * c + a[7] * d + 0 * a[11] + a[15];a[12] = a[0] * c + a[4] * d + 0 * a[8] + a[12];a[13] = e;a[14] = f;a[15] = g;
  }function nc(a, c, d) {
    ic(a, a[0] * c, a[1] * c, a[2] * c, a[3] * c, a[4] * d, a[5] * d, a[6] * d, a[7] * d, 1 * a[8], 1 * a[9], 1 * a[10], 1 * a[11], a[12], a[13], a[14], a[15]);
  }
  function oc(a, c) {
    var d = a[0],
        e = a[1],
        f = a[2],
        g = a[3],
        h = a[4],
        k = a[5],
        l = a[6],
        m = a[7],
        n = Math.cos(c),
        p = Math.sin(c);a[0] = d * n + h * p;a[1] = e * n + k * p;a[2] = f * n + l * p;a[3] = g * n + m * p;a[4] = d * -p + h * n;a[5] = e * -p + k * n;a[6] = f * -p + l * n;a[7] = g * -p + m * n;
  }new Float64Array(3);new Float64Array(3);new Float64Array(4);new Float64Array(4);new Float64Array(4);new Float64Array(16);function pc(a, c, d, e, f, g) {
    var h = f[0],
        k = f[1],
        l = f[4],
        m = f[5],
        n = f[12];f = f[13];for (var p = g ? g : [], r = 0; c < d; c += e) {
      var t = a[c],
          u = a[c + 1];p[r++] = h * t + l * u + n;p[r++] = k * t + m * u + f;
    }g && p.length != r && (p.length = r);return p;
  };function qc() {
    dc.call(this);this.c = "XY";this.K = 2;this.L = null;
  }F(qc, dc);function rc(a) {
    if ("XY" == a) return 2;if ("XYZ" == a || "XYM" == a) return 3;if ("XYZM" == a) return 4;
  }function sc(a, c) {
    a.B != a.g && (Ia(a.f), a.h = 0, a.B = a.g);if (0 > c || 0 !== a.h && c <= a.h) return a;var d = c.toString();if (a.f.hasOwnProperty(d)) return a.f[d];var e = a.u(c);if (e.L.length < a.L.length) return a.f[d] = e;a.h = c;return a;
  }qc.prototype.u = function () {
    return this;
  };
  qc.prototype.rotate = function (a, c) {
    var d = this.L;if (d) {
      for (var e = d.length, f = this.K, g = d ? d : [], h = Math.cos(a), k = Math.sin(a), l = c[0], m = c[1], n = 0, p = 0; p < e; p += f) {
        var r = d[p] - l,
            t = d[p + 1] - m;g[n++] = l + r * h - t * k;g[n++] = m + r * k + t * h;for (r = p + 2; r < p + f; ++r) {
          g[n++] = d[r];
        }
      }d && g.length != n && (g.length = n);this.b();
    }
  };function tc(a, c, d, e, f, g) {
    for (var h = !1, k = a[d - e], l = a[d - e + 1]; c < d; c += e) {
      var m = a[c],
          n = a[c + 1];l > g != n > g && f < (m - k) * (g - l) / (n - l) + k && (h = !h);k = m;l = n;
    }return h;
  };function uc(a, c, d, e) {
    for (var f = 0, g = a[d - e], h = a[d - e + 1]; c < d; c += e) {
      var k = a[c],
          l = a[c + 1],
          f = f + (k - g) * (l + h),
          g = k,
          h = l;
    }return 0 < f;
  }function vc(a, c, d, e) {
    var f = 0;e = void 0 !== e ? e : !1;var g, h;g = 0;for (h = c.length; g < h; ++g) {
      var k = c[g],
          l = uc(a, f, k, d);if (0 === g ? e && l || !e && !l : e && !l || !e && l) for (var l = a, m = k, n = d; f < m - n;) {
        var p;for (p = 0; p < n; ++p) {
          var r = l[f + p];l[f + p] = l[m - n + p];l[m - n + p] = r;
        }f += n;m -= n;
      }f = k;
    }return f;
  };function wc(a, c) {
    qc.call(this);this.aa = [];this.l = -1;this.o = null;this.v = -1;this.a = null;xc(this, a, c);
  }F(wc, qc);wc.prototype.clone = function () {
    var a = new wc(null);yc(a, this.c, this.L.slice(), this.aa.slice());return a;
  };
  wc.prototype.G = function (a) {
    var c;void 0 !== a ? (c = zc(this).slice(), vc(c, this.aa, this.K, a)) : c = this.L;a = c;c = this.aa;var d = this.K,
        e = 0,
        f = [],
        g = 0,
        h,
        k;h = 0;for (k = c.length; h < k; ++h) {
      for (var l = c[h], m = g++, n = a, p = l, r = d, t = f[g], t = void 0 !== t ? t : [], u = 0; e < p; e += r) {
        t[u++] = n.slice(e, e + r);
      }t.length = u;f[m] = t;e = l;
    }f.length = g;return f;
  };
  function Ac(a) {
    if (a.l != a.g) {
      var c = Db(a.C());var d = zc(a),
          e = a.aa,
          f = a.K,
          g,
          h,
          k,
          l,
          m,
          n = c[1],
          p = [],
          r = e[0];k = d[r - f];m = d[r - f + 1];for (g = 0; g < r; g += f) {
        l = d[g];h = d[g + 1];if (n <= m && h <= n || m <= n && n <= h) k = (n - m) / (h - m) * (l - k) + k, p.push(k);k = l;m = h;
      }r = NaN;m = -Infinity;p.sort(cb);k = p[0];g = 1;for (h = p.length; g < h; ++g) {
        l = p[g];var t = Math.abs(l - k);if (t > m) {
          k = (k + l) / 2;var u;b: if (0 !== e.length && tc(d, 0, e[0], f, k, n)) {
            var y;u = 1;for (y = e.length; u < y; ++u) {
              if (tc(d, e[u - 1], e[u], f, k, n)) {
                u = !1;break b;
              }
            }u = !0;
          } else u = !1;u && (r = k, m = t);
        }k = l;
      }isNaN(r) && (r = c[0]);c = [r, n];a.o = c;a.l = a.g;
    }return a.o;
  }function zc(a) {
    if (a.v != a.g) {
      var c = a.L,
          d;a: {
        d = a.aa;var e = 0,
            f,
            g;f = 0;for (g = d.length; f < g; ++f) {
          var h = d[f],
              e = uc(c, e, h, a.K);if (0 === f) {
            if (!e) {
              d = !1;break a;
            }
          } else if (e) {
            d = !1;break a;
          }e = h;
        }d = !0;
      }d ? a.a = c : (a.a = c.slice(), a.a.length = vc(a.a, a.aa, a.K));a.v = a.g;
    }return a.a;
  }
  wc.prototype.u = function (a) {
    var c = [],
        d = [],
        e = this.L,
        f = this.aa,
        g = this.K;a = Math.sqrt(a);var h = 0,
        k = 0,
        l,
        m;l = 0;for (m = f.length; l < m; ++l) {
      var n = f[l];a: {
        var p = e,
            r = n,
            t = g,
            u = a,
            y = c;if (h != r) {
          var A = u * Math.round(p[h] / u),
              C = u * Math.round(p[h + 1] / u),
              h = h + t;y[k++] = A;y[k++] = C;var w, v;do {
            if (w = u * Math.round(p[h] / u), v = u * Math.round(p[h + 1] / u), h += t, h == r) {
              y[k++] = w;y[k++] = v;break a;
            }
          } while (w == A && v == C);for (; h < r;) {
            var D, E;D = u * Math.round(p[h] / u);E = u * Math.round(p[h + 1] / u);h += t;if (D != w || E != v) {
              var H = w - A,
                  G = v - C,
                  O = D - A,
                  z = E - C;H * z == G * O && (0 > H && O < H || H == O || 0 < H && O > H) && (0 > G && z < G || G == z || 0 < G && z > G) || (y[k++] = w, y[k++] = v, A = w, C = v);w = D;v = E;
            }
          }y[k++] = w;y[k++] = v;
        }
      }d.push(k);h = n;
    }c.length = k;e = new wc(null);yc(e, "XY", c, d);return e;
  };wc.prototype.na = function () {
    return "Polygon";
  };
  function xc(a, c, d) {
    if (c) {
      a: {
        var e = c;if (d) e = rc(d);else {
          for (d = 0; 2 > d; ++d) {
            if (0 === e.length) {
              a.c = "XY";a.K = 2;break a;
            }e = e[0];
          }e = e.length;d = 2 == e ? "XY" : 3 == e ? "XYZ" : 4 == e ? "XYZM" : void 0;
        }a.c = d;a.K = e;
      }a.L || (a.L = []);d = a.L;var e = a.K,
          f = a.aa,
          g = 0,
          f = f ? f : [],
          h = 0,
          k,
          l;k = 0;for (l = c.length; k < l; ++k) {
        var m;m = d;var n = c[k],
            p = e,
            r,
            t;r = 0;for (t = n.length; r < t; ++r) {
          var u = n[r],
              y;for (y = 0; y < p; ++y) {
            m[g++] = u[y];
          }
        }m = g;g = f[h++] = m;
      }f.length = h;a.L.length = 0 === f.length ? 0 : f[f.length - 1];a.b();
    } else yc(a, "XY", null, a.aa);
  }
  function yc(a, c, d, e) {
    a.K = rc(c);a.c = c;a.L = d;a.aa = e;a.b();
  };function W(a) {
    T.call(this);a = a || {};this.c = [0, 0];var c = {};c.center = void 0 !== a.center ? a.center : null;this.j = $b(a.projection);var d,
        e,
        f,
        g = void 0 !== a.minZoom ? a.minZoom : 0;d = void 0 !== a.maxZoom ? a.maxZoom : 28;var h = void 0 !== a.zoomFactor ? a.zoomFactor : 2;if (void 0 !== a.resolutions) d = a.resolutions, e = d[0], f = d[d.length - 1], d = ib(d);else {
      e = $b(a.projection);f = e.C();var k = (f ? Math.max(V(f), Bb(f)) : 360 * Ob.degrees / Qb(e)) / 256 / Math.pow(2, 0),
          l = k / Math.pow(2, 28);e = a.maxResolution;void 0 !== e ? g = 0 : e = k / Math.pow(h, g);f = a.minResolution;
      void 0 === f && (f = void 0 !== a.maxZoom ? void 0 !== a.maxResolution ? e / Math.pow(h, d) : k / Math.pow(h, d) : l);d = g + Math.floor(Math.log(e / f) / Math.log(h));f = e / Math.pow(h, d - g);d = jb(h, e, d - g);
    }this.f = e;this.i = f;this.h = g;g = void 0 !== a.extent ? Ea(a.extent) : Fa;(void 0 !== a.enableRotation ? a.enableRotation : 1) ? (e = a.constrainRotation, e = void 0 === e || !0 === e ? nb() : !1 === e ? lb : fa(e) ? mb(e) : lb) : e = kb;this.a = new Ga(g, d, e);void 0 !== a.resolution ? c.resolution = a.resolution : void 0 !== a.zoom && (c.resolution = this.constrainResolution(this.f, a.zoom - this.h));
    c.rotation = void 0 !== a.rotation ? a.rotation : 0;this.w(c);
  }F(W, T);q = W.prototype;q.constrainResolution = function (a, c, d) {
    return this.a.resolution(a, c || 0, d || 0);
  };q.constrainRotation = function (a, c) {
    return this.a.rotation(a, c || 0);
  };q.X = function () {
    return this.get("center");
  };function Bc(a, c) {
    var d = a.X(),
        e = a.H(),
        f = a.P();return Eb(d, e, f, c);
  }q.H = function () {
    return this.get("resolution");
  };function Cc(a, c) {
    return Math.max(V(a) / c[0], Bb(a) / c[1]);
  }q.P = function () {
    return this.get("rotation");
  };
  q.J = function () {
    var a = this.X(),
        c = this.j,
        d = this.H(),
        e = this.P();return { center: [Math.round(a[0] / d) * d, Math.round(a[1] / d) * d], projection: void 0 !== c ? c : null, resolution: d, rotation: e };
  };q.Qc = function () {
    var a,
        c = this.H();if (void 0 !== c) {
      var d,
          e = 0;do {
        d = this.constrainResolution(this.f, e);if (d == c) {
          a = e;break;
        }++e;
      } while (d > this.i);
    }return void 0 !== a ? this.h + a : a;
  };function Dc(a) {
    return !!a.X() && void 0 !== a.H();
  }
  q.rotate = function (a, c) {
    if (void 0 !== c) {
      var d,
          e = this.X();void 0 !== e && (d = [e[0] - c[0], e[1] - c[1]], pb(d, a - this.P()), ob(d, c));this.la(d);
    }this.set("rotation", a);
  };q.la = function (a) {
    this.set("center", a);
  };function Ec(a, c) {
    a.c[1] += c;
  }function Fc(a, c) {
    a.set("resolution", c);
  }q.be = function (a) {
    a = this.constrainResolution(this.f, a - this.h, 0);Fc(this, a);
  };function Gc(a) {
    return 1 - Math.pow(1 - a, 3);
  }function Hc(a) {
    return 3 * a * a - 2 * a * a * a;
  }function Ic(a) {
    return a;
  };function Jc(a) {
    var c = a.source,
        d = a.start ? a.start : Date.now(),
        e = c[0],
        f = c[1],
        g = void 0 !== a.duration ? a.duration : 1E3,
        h = a.easing ? a.easing : Hc;return function (a, c) {
      if (c.time < d) return c.animate = !0, c.viewHints[0] += 1, !0;if (c.time < d + g) {
        var m = 1 - h((c.time - d) / g),
            n = e - c.viewState.center[0],
            p = f - c.viewState.center[1];c.animate = !0;c.viewState.center[0] += m * n;c.viewState.center[1] += m * p;c.viewHints[0] += 1;return !0;
      }return !1;
    };
  }
  function Kc(a) {
    var c = a.rotation ? a.rotation : 0,
        d = a.start ? a.start : Date.now(),
        e = void 0 !== a.duration ? a.duration : 1E3,
        f = a.easing ? a.easing : Hc,
        g = a.anchor ? a.anchor : null;return function (a, k) {
      if (k.time < d) return k.animate = !0, k.viewHints[0] += 1, !0;if (k.time < d + e) {
        var l = 1 - f((k.time - d) / e),
            l = (c - k.viewState.rotation) * l;k.animate = !0;k.viewState.rotation += l;if (g) {
          var m = k.viewState.center;m[0] -= g[0];m[1] -= g[1];pb(m, l);ob(m, g);
        }k.viewHints[0] += 1;return !0;
      }return !1;
    };
  }
  function Lc(a) {
    var c = a.resolution,
        d = a.start ? a.start : Date.now(),
        e = void 0 !== a.duration ? a.duration : 1E3,
        f = a.easing ? a.easing : Hc;return function (a, h) {
      if (h.time < d) return h.animate = !0, h.viewHints[0] += 1, !0;if (h.time < d + e) {
        var k = 1 - f((h.time - d) / e),
            l = c - h.viewState.resolution;h.animate = !0;h.viewState.resolution += k * l;h.viewHints[0] += 1;return !0;
      }return !1;
    };
  };function Mc(a, c, d, e) {
    this.b = a;this.c = c;this.a = d;this.g = e;
  }function Nc(a, c, d) {
    return a.b <= c && c <= a.c && a.a <= d && d <= a.g;
  }function Oc(a, c) {
    return a.b == c.b && a.a == c.a && a.c == c.c && a.g == c.g;
  }Mc.prototype.ga = function () {
    return this.c - this.b + 1;
  };function Pc(a, c) {
    return a.b <= c.c && a.c >= c.b && a.a <= c.g && a.g >= c.a;
  };function Qc(a) {
    this.a = a.html;this.b = a.tileRanges ? a.tileRanges : null;
  };function Rc(a, c, d) {
    R.call(this, a, d);this.element = c;
  }F(Rc, R);function Sc(a) {
    T.call(this);this.a = a ? a : [];Tc(this);
  }F(Sc, T);q = Sc.prototype;q.clear = function () {
    for (; 0 < this.get("length");) {
      Uc(this, this.get("length") - 1);
    }
  };q.forEach = function (a, c) {
    this.a.forEach(a, c);
  };q.Dd = function () {
    return this.a;
  };q.item = function (a) {
    return this.a[a];
  };q.push = function (a) {
    var c = this.a.length;this.a.splice(c, 0, a);Tc(this);S(this, new Rc("add", a, this));return c;
  };
  q.remove = function (a) {
    var c = this.a,
        d,
        e;d = 0;for (e = c.length; d < e; ++d) {
      if (c[d] === a) return Uc(this, d);
    }
  };function Uc(a, c) {
    var d = a.a[c];a.a.splice(c, 1);Tc(a);S(a, new Rc("remove", d, a));return d;
  }function Tc(a) {
    a.set("length", a.a.length);
  };var Vc = Array.prototype.forEach ? function (a, c, d) {
    Array.prototype.forEach.call(a, c, d);
  } : function (a, c, d) {
    for (var e = a.length, f = ea(a) ? a.split("") : a, g = 0; g < e; g++) {
      g in f && c.call(d, f[g], g, a);
    }
  };function Wc(a) {
    var c = a.length;if (0 < c) {
      for (var d = Array(c), e = 0; e < c; e++) {
        d[e] = a[e];
      }return d;
    }return [];
  }function Xc(a, c, d) {
    return 2 >= arguments.length ? Array.prototype.slice.call(a, c) : Array.prototype.slice.call(a, c, d);
  };function Yc(a) {
    if ("string" !== typeof a) {
      var c = a[0];c != (c | 0) && (c = c + .5 | 0);var d = a[1];d != (d | 0) && (d = d + .5 | 0);var e = a[2];e != (e | 0) && (e = e + .5 | 0);a = "rgba(" + c + "," + d + "," + e + "," + (void 0 === a[3] ? 1 : a[3]) + ")";
    }return a;
  };function Zc(a) {
    return "string" === typeof a || a instanceof CanvasPattern || a instanceof CanvasGradient ? a : Yc(a);
  };var $c;a: {
    var ad = aa.navigator;if (ad) {
      var bd = ad.userAgent;if (bd) {
        $c = bd;break a;
      }
    }$c = "";
  }function cd(a) {
    return -1 != $c.indexOf(a);
  };function dd(a, c) {
    for (var d in a) {
      c.call(void 0, a[d], d, a);
    }
  }var ed = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function fd(a, c) {
    for (var d, e, f = 1; f < arguments.length; f++) {
      e = arguments[f];for (d in e) {
        a[d] = e[d];
      }for (var g = 0; g < ed.length; g++) {
        d = ed[g], Object.prototype.hasOwnProperty.call(e, d) && (a[d] = e[d]);
      }
    }
  };var gd = cd("Opera"),
      hd = cd("Trident") || cd("MSIE"),
      id = cd("Edge"),
      jd = cd("Gecko") && !(-1 != $c.toLowerCase().indexOf("webkit") && !cd("Edge")) && !(cd("Trident") || cd("MSIE")) && !cd("Edge"),
      kd = -1 != $c.toLowerCase().indexOf("webkit") && !cd("Edge");function ld() {
    var a = aa.document;return a ? a.documentMode : void 0;
  }var md;
  a: {
    var nd = "",
        od = function () {
      var a = $c;if (jd) return (/rv\:([^\);]+)(\)|;)/.exec(a)
      );if (id) return (/Edge\/([\d\.]+)/.exec(a)
      );if (hd) return (/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a)
      );if (kd) return (/WebKit\/(\S+)/.exec(a)
      );if (gd) return (/(?:Version)[ \/]?(\S+)/.exec(a)
      );
    }();od && (nd = od ? od[1] : "");if (hd) {
      var pd = ld();if (null != pd && pd > parseFloat(nd)) {
        md = String(pd);break a;
      }
    }md = nd;
  }var qd = {};
  function rd(a) {
    var c;if (!(c = qd[a])) {
      c = 0;for (var d = qa(String(md)).split("."), e = qa(String(a)).split("."), f = Math.max(d.length, e.length), g = 0; 0 == c && g < f; g++) {
        var h = d[g] || "",
            k = e[g] || "",
            l = RegExp("(\\d*)(\\D*)", "g"),
            m = RegExp("(\\d*)(\\D*)", "g");do {
          var n = l.exec(h) || ["", "", ""],
              p = m.exec(k) || ["", "", ""];if (0 == n[0].length && 0 == p[0].length) break;c = Aa(0 == n[1].length ? 0 : parseInt(n[1], 10), 0 == p[1].length ? 0 : parseInt(p[1], 10)) || Aa(0 == n[2].length, 0 == p[2].length) || Aa(n[2], p[2]);
        } while (0 == c);
      }c = qd[a] = 0 <= c;
    }return c;
  }
  var sd = aa.document,
      td = sd && hd ? ld() || ("CSS1Compat" == sd.compatMode ? parseInt(md, 10) : 5) : void 0;var ud = !hd || 9 <= Number(td);!jd && !hd || hd && 9 <= Number(td) || jd && rd("1.9.1");hd && rd("9");function vd(a, c) {
    this.x = void 0 !== a ? a : 0;this.y = void 0 !== c ? c : 0;
  }q = vd.prototype;q.clone = function () {
    return new vd(this.x, this.y);
  };q.ceil = function () {
    this.x = Math.ceil(this.x);this.y = Math.ceil(this.y);return this;
  };q.floor = function () {
    this.x = Math.floor(this.x);this.y = Math.floor(this.y);return this;
  };q.round = function () {
    this.x = Math.round(this.x);this.y = Math.round(this.y);return this;
  };q.scale = function (a, c) {
    var d = fa(c) ? c : a;this.x *= a;this.y *= d;return this;
  };function wd(a, c) {
    this.width = a;this.height = c;
  }q = wd.prototype;q.clone = function () {
    return new wd(this.width, this.height);
  };q.ceil = function () {
    this.width = Math.ceil(this.width);this.height = Math.ceil(this.height);return this;
  };q.floor = function () {
    this.width = Math.floor(this.width);this.height = Math.floor(this.height);return this;
  };q.round = function () {
    this.width = Math.round(this.width);this.height = Math.round(this.height);return this;
  };q.scale = function (a, c) {
    var d = fa(c) ? c : a;this.width *= a;this.height *= d;return this;
  };function xd(a) {
    return a ? new yd(zd(a)) : pa || (pa = new yd());
  }function Ad(a) {
    var c = document;return ea(a) ? c.getElementById(a) : a;
  }function Bd(a, c) {
    dd(c, function (c, e) {
      "style" == e ? a.style.cssText = c : "class" == e ? a.className = c : "for" == e ? a.htmlFor = c : Cd.hasOwnProperty(e) ? a.setAttribute(Cd[e], c) : 0 == e.lastIndexOf("aria-", 0) || 0 == e.lastIndexOf("data-", 0) ? a.setAttribute(e, c) : a[e] = c;
    });
  }
  var Cd = { cellpadding: "cellPadding", cellspacing: "cellSpacing", colspan: "colSpan", frameborder: "frameBorder", height: "height", maxlength: "maxLength", nonce: "nonce", role: "role", rowspan: "rowSpan", type: "type", usemap: "useMap", valign: "vAlign", width: "width" };
  function Dd(a, c, d) {
    var e = arguments,
        f = document,
        g = e[0],
        h = e[1];if (!ud && h && (h.name || h.type)) {
      g = ["<", g];h.name && g.push(' name="', ra(h.name), '"');if (h.type) {
        g.push(' type="', ra(h.type), '"');var k = {};fd(k, h);delete k.type;h = k;
      }g.push(">");g = g.join("");
    }g = f.createElement(g);h && (ea(h) ? g.className = h : "array" == ca(h) ? g.className = h.join(" ") : Bd(g, h));2 < e.length && Ed(f, g, e);return g;
  }
  function Ed(a, c, d) {
    function e(d) {
      d && c.appendChild(ea(d) ? a.createTextNode(d) : d);
    }for (var f = 2; f < d.length; f++) {
      var g = d[f];!da(g) || ha(g) && 0 < g.nodeType ? e(g) : Vc(Fd(g) ? Wc(g) : g, e);
    }
  }function Gd(a) {
    a && a.parentNode && a.parentNode.removeChild(a);
  }function Hd(a, c) {
    var d = c.parentNode;d && d.replaceChild(a, c);
  }
  function Id(a, c) {
    if (!a || !c) return !1;if (a.contains && 1 == c.nodeType) return a == c || a.contains(c);if ("undefined" != typeof a.compareDocumentPosition) return a == c || !!(a.compareDocumentPosition(c) & 16);for (; c && a != c;) {
      c = c.parentNode;
    }return c == a;
  }function zd(a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document;
  }function Fd(a) {
    if (a && "number" == typeof a.length) {
      if (ha(a)) return "function" == typeof a.item || "string" == typeof a.item;if (ga(a)) return "function" == typeof a.item;
    }return !1;
  }
  function yd(a) {
    this.b = a || aa.document || document;
  }yd.prototype.appendChild = function (a, c) {
    a.appendChild(c);
  };function Jd(a, c, d, e) {
    this.top = a;this.right = c;this.bottom = d;this.left = e;
  }q = Jd.prototype;q.ga = function () {
    return this.right - this.left;
  };q.clone = function () {
    return new Jd(this.top, this.right, this.bottom, this.left);
  };q.ceil = function () {
    this.top = Math.ceil(this.top);this.right = Math.ceil(this.right);this.bottom = Math.ceil(this.bottom);this.left = Math.ceil(this.left);return this;
  };
  q.floor = function () {
    this.top = Math.floor(this.top);this.right = Math.floor(this.right);this.bottom = Math.floor(this.bottom);this.left = Math.floor(this.left);return this;
  };q.round = function () {
    this.top = Math.round(this.top);this.right = Math.round(this.right);this.bottom = Math.round(this.bottom);this.left = Math.round(this.left);return this;
  };q.scale = function (a, c) {
    var d = fa(c) ? c : a;this.left *= a;this.right *= a;this.top *= d;this.bottom *= d;return this;
  };function Kd(a, c) {
    var d = zd(a);return d.defaultView && d.defaultView.getComputedStyle && (d = d.defaultView.getComputedStyle(a, null)) ? d[c] || d.getPropertyValue(c) || "" : "";
  }function Ld(a) {
    var c;try {
      c = a.getBoundingClientRect();
    } catch (d) {
      return { left: 0, top: 0, right: 0, bottom: 0 };
    }hd && a.ownerDocument.body && (a = a.ownerDocument, c.left -= a.documentElement.clientLeft + a.body.clientLeft, c.top -= a.documentElement.clientTop + a.body.clientTop);return c;
  }
  function Md(a) {
    var c = Nd;if ("none" != (Kd(a, "display") || (a.currentStyle ? a.currentStyle.display : null) || a.style && a.style.display)) return c(a);var d = a.style,
        e = d.display,
        f = d.visibility,
        g = d.position;d.visibility = "hidden";d.position = "absolute";d.display = "inline";a = c(a);d.display = e;d.position = g;d.visibility = f;return a;
  }function Nd(a) {
    var c = a.offsetWidth,
        d = a.offsetHeight,
        e = kd && !c && !d;return (void 0 === c || e) && a.getBoundingClientRect ? (a = Ld(a), new wd(a.right - a.left, a.bottom - a.top)) : new wd(c, d);
  }
  function Od(a, c) {
    a.style.display = c ? "" : "none";
  }function Pd(a, c, d, e) {
    if (/^\d+px?$/.test(c)) return parseInt(c, 10);var f = a.style[d],
        g = a.runtimeStyle[d];a.runtimeStyle[d] = a.currentStyle[d];a.style[d] = c;c = a.style[e];a.style[d] = f;a.runtimeStyle[d] = g;return c;
  }function Qd(a, c) {
    var d = a.currentStyle ? a.currentStyle[c] : null;return d ? Pd(a, d, "left", "pixelLeft") : 0;
  }var Rd = { thin: 2, medium: 4, thick: 6 };
  function Sd(a, c) {
    if ("none" == (a.currentStyle ? a.currentStyle[c + "Style"] : null)) return 0;var d = a.currentStyle ? a.currentStyle[c + "Width"] : null;return d in Rd ? Rd[d] : Pd(a, d, "left", "pixelLeft");
  };function Td(a, c, d) {
    R.call(this, a);this.map = c;this.frameState = void 0 !== d ? d : null;
  }F(Td, R);function Ud(a) {
    T.call(this);this.element = a.element ? a.element : null;this.a = this.G = null;this.h = [];this.render = a.render ? a.render : oa;a.target && (this.G = Ad(a.target));
  }F(Ud, T);Ud.prototype.O = function () {
    Gd(this.element);Ud.S.O.call(this);
  };Ud.prototype.setMap = function (a) {
    this.a && Gd(this.element);for (var c = 0, d = this.h.length; c < d; ++c) {
      L(this.h[c]);
    }this.h.length = 0;if (this.a = a) (this.G ? this.G : a.j).appendChild(this.element), this.render !== oa && this.h.push(Q(a, "postrender", this.render, this)), a.render();
  };function Vd() {
    this.c = 0;this.g = {};this.a = this.b = null;
  }Vd.prototype.clear = function () {
    this.c = 0;this.g = {};this.a = this.b = null;
  };function Wd(a, c) {
    return a.g.hasOwnProperty(c);
  }function Xd(a, c) {
    for (var d = a.b; d;) {
      c.call(void 0, d.Ga, d.Aa, a), d = d.ka;
    }
  }Vd.prototype.get = function (a) {
    a = this.g[a];if (a === this.a) return a.Ga;a === this.b ? (this.b = this.b.ka, this.b.Ka = null) : (a.ka.Ka = a.Ka, a.Ka.ka = a.ka);a.ka = null;a.Ka = this.a;this.a = this.a.ka = a;return a.Ga;
  };
  function Yd(a) {
    var c = a.b;delete a.g[c.Aa];c.ka && (c.ka.Ka = null);a.b = c.ka;a.b || (a.a = null);--a.c;return c.Ga;
  }Vd.prototype.replace = function (a, c) {
    this.get(a);this.g[a].Ga = c;
  };Vd.prototype.set = function (a, c) {
    var d = { Aa: a, ka: null, Ka: this.a, Ga: c };this.a ? this.a.ka = d : this.b = d;this.a = d;this.g[a] = d;++this.c;
  };function Zd(a) {
    Vd.call(this);this.f = void 0 !== a ? a : 2048;
  }F(Zd, Vd);function $d(a) {
    return a.c > a.f;
  }Zd.prototype.Ha = function (a) {
    for (var c, d; $d(this);) {
      c = this.b.Ga;d = c.T[0].toString();var e;if (e = d in a) c = c.T, e = Nc(a[d], c[1], c[2]);if (e) break;else Wa(Yd(this));
    }
  };function ae(a, c) {
    Ya.call(this);this.T = a;this.state = c;this.b = null;this.key = "";
  }F(ae, Ya);function be(a) {
    S(a, "change");
  }ae.prototype.getKey = function () {
    return x(this).toString();
  };ae.prototype.J = function () {
    return this.state;
  };function ce(a, c) {
    if (Array.isArray(a)) return a;void 0 === c ? c = [a, a] : (c[0] = a, c[1] = a);return c;
  };function ee(a) {
    T.call(this);this.h = Sb(a.projection);this.o = fe(a.attributions);this.I = a.logo;this.N = void 0 !== a.state ? a.state : "ready";this.u = void 0 !== a.wrapX ? a.wrapX : !1;
  }F(ee, T);function fe(a) {
    if ("string" === typeof a) return [new Qc({ html: a })];if (a instanceof Qc) return [a];if (Array.isArray(a)) {
      for (var c = a.length, d = Array(c), e = 0; e < c; e++) {
        var f = a[e];d[e] = "string" === typeof f ? new Qc({ html: f }) : f;
      }return d;
    }return null;
  }ee.prototype.W = oa;ee.prototype.J = function () {
    return this.N;
  };function ge(a) {
    this.minZoom = void 0 !== a.minZoom ? a.minZoom : 0;this.c = a.resolutions;this.maxZoom = this.c.length - 1;this.a = void 0 !== a.origin ? a.origin : null;this.f = null;void 0 !== a.origins && (this.f = a.origins);var c = a.extent;void 0 === c || this.a || this.f || (this.a = Hb(c));this.h = null;void 0 !== a.tileSizes && (this.h = a.tileSizes);this.i = void 0 !== a.tileSize ? a.tileSize : this.h ? null : 256;this.s = void 0 !== c ? c : null;this.b = null;this.g = [0, 0];void 0 !== a.sizes ? this.b = a.sizes.map(function (a) {
      return new Mc(Math.min(0, a[0]), Math.max(a[0] - 1, -1), Math.min(0, a[1]), Math.max(a[1] - 1, -1));
    }, this) : c && he(this, c);
  }var ie = [0, 0, 0];function je(a, c, d, e, f) {
    f = ke(a, c, f);for (c = c[0] - 1; c >= a.minZoom;) {
      if (d.call(null, c, le(a, f, c, e))) return !0;--c;
    }return !1;
  }ge.prototype.C = function () {
    return this.s;
  };ge.prototype.ra = function (a) {
    return this.a ? this.a : this.f[a];
  };ge.prototype.H = function (a) {
    return this.c[a];
  };function me(a, c, d, e) {
    return c[0] < a.maxZoom ? (e = ke(a, c, e), le(a, e, c[0] + 1, d)) : null;
  }
  function ne(a, c, d, e) {
    oe(a, c[0], c[1], d, !1, ie);var f = ie[1],
        g = ie[2];oe(a, c[2], c[3], d, !0, ie);a = ie[1];c = ie[2];void 0 !== e ? (e.b = f, e.c = a, e.a = g, e.g = c) : e = new Mc(f, a, g, c);return e;
  }function le(a, c, d, e) {
    d = a.H(d);return ne(a, c, d, e);
  }function pe(a, c) {
    var d = a.ra(c[0]),
        e = a.H(c[0]),
        f = ce(qe(a, c[0]), a.g);return [d[0] + (c[1] + .5) * f[0] * e, d[1] + (c[2] + .5) * f[1] * e];
  }function ke(a, c, d) {
    var e = a.ra(c[0]),
        f = a.H(c[0]);a = ce(qe(a, c[0]), a.g);var g = e[0] + c[1] * a[0] * f;c = e[1] + c[2] * a[1] * f;return wb(g, c, g + a[0] * f, c + a[1] * f, d);
  }
  function oe(a, c, d, e, f, g) {
    var h = re(a, e),
        k = e / a.H(h),
        l = a.ra(h);a = ce(qe(a, h), a.g);c = k * Math.floor((c - l[0]) / e + (f ? .5 : 0)) / a[0];d = k * Math.floor((d - l[1]) / e + (f ? 0 : .5)) / a[1];f ? (c = Math.ceil(c) - 1, d = Math.ceil(d) - 1) : (c = Math.floor(c), d = Math.floor(d));f = c;void 0 !== g ? (g[0] = h, g[1] = f, g[2] = d) : g = [h, f, d];return g;
  }function se(a, c, d, e) {
    d = a.H(d);return oe(a, c[0], c[1], d, !1, e);
  }function qe(a, c) {
    return a.i ? a.i : a.h[c];
  }function re(a, c, d) {
    c = db(a.c, c, d || 0);return Ba(c, a.minZoom, a.maxZoom);
  }
  function he(a, c) {
    for (var d = a.c.length, e = Array(d), f = a.minZoom; f < d; ++f) {
      e[f] = le(a, c, f);
    }a.b = e;
  }function te(a) {
    var c = a.f;if (!c) {
      for (var c = ue(a), d = ce(256), d = Math.max(V(c) / d[0], Bb(c) / d[1]), e = Array(43), f = 0; 43 > f; ++f) {
        e[f] = d / Math.pow(2, f);
      }c = new ge({ extent: c, origin: Hb(c), resolutions: e, tileSize: void 0 });a.f = c;
    }return c;
  }function ue(a) {
    a = Sb(a);var c = a.C();c || (a = 180 * Ob.degrees / Qb(a), c = wb(-a, -a, a, a));return c;
  };function ve(a) {
    ee.call(this, { attributions: a.attributions, extent: a.extent, logo: a.logo, projection: a.projection, state: a.state, wrapX: a.wrapX });this.B = void 0 !== a.opaque ? a.opaque : !1;this.j = void 0 !== a.tilePixelRatio ? a.tilePixelRatio : 1;this.tileGrid = void 0 !== a.tileGrid ? a.tileGrid : null;this.a = new Zd(a.cacheSize);this.l = [0, 0];this.Aa = "";
  }F(ve, ee);q = ve.prototype;q.gc = function () {
    return $d(this.a);
  };q.Ha = function (a, c) {
    var d = this.Wa(a);d && d.Ha(c);
  };
  function we(a, c, d, e, f) {
    c = a.Wa(c);if (!c) return !1;for (var g = !0, h, k, l = e.b; l <= e.c; ++l) {
      for (var m = e.a; m <= e.g; ++m) {
        h = a.bb(d, l, m), k = !1, Wd(c, h) && (h = c.get(h), (k = 2 === h.J()) && (k = !1 !== f(h))), k || (g = !1);
      }
    }return g;
  }q.rb = function () {
    return 0;
  };q.getKey = function () {
    return this.Aa;
  };q.bb = function (a, c, d) {
    return a + "/" + c + "/" + d;
  };q.tb = function () {
    return this.B;
  };q.ma = function (a) {
    return this.tileGrid ? this.tileGrid : te(a);
  };q.Wa = function (a) {
    var c = this.h;return c && !ac(c, a) ? null : this.a;
  };
  function xe(a, c, d) {
    var e = a.ma(d);d = a.j;c = ce(qe(e, c), a.l);1 == d ? a = c : (a = a.l, void 0 === a && (a = [0, 0]), a[0] = c[0] * d + .5 | 0, a[1] = c[1] * d + .5 | 0);return a;
  }function ye(a, c, d) {
    var e = void 0 !== d ? d : a.h;d = a.ma(e);if (a.u && e.c) {
      var f = c;c = f[0];a = pe(d, f);var e = ue(e),
          g = a[0],
          h = a[1];e[0] <= g && g <= e[2] && e[1] <= h && h <= e[3] ? c = f : (f = V(e), a[0] += f * Math.ceil((e[0] - a[0]) / f), c = se(d, a, c));
    }e = c[0];a = c[1];f = c[2];d = d.minZoom > e || e > d.maxZoom ? !1 : (d = (g = d.C()) ? le(d, g, e) : d.b ? d.b[e] : null) ? Nc(d, a, f) : !0;return d ? c : null;
  }q.nc = oa;
  function ze(a, c) {
    R.call(this, a);this.tile = c;
  }F(ze, R);function Ae(a) {
    a = a ? a : {};this.u = document.createElement("UL");this.j = document.createElement("LI");this.u.appendChild(this.j);Od(this.j, !1);this.i = void 0 !== a.collapsed ? a.collapsed : !0;this.l = void 0 !== a.collapsible ? a.collapsible : !0;this.l || (this.i = !1);var c = void 0 !== a.className ? a.className : "ol-attribution",
        d = void 0 !== a.tipLabel ? a.tipLabel : "Attributions",
        e = void 0 !== a.collapseLabel ? a.collapseLabel : "\xBB";this.v = "string" === typeof e ? Dd("SPAN", {}, e) : e;e = void 0 !== a.label ? a.label : "i";this.B = "string" === typeof e ? Dd("SPAN", {}, e) : e;d = Dd("BUTTON", { type: "button", title: d }, this.l && !this.i ? this.v : this.B);Q(d, "click", this.N, this);c = Dd("DIV", c + " ol-unselectable ol-control" + (this.i && this.l ? " ol-collapsed" : "") + (this.l ? "" : " ol-uncollapsible"), this.u, d);Ud.call(this, { element: c, render: a.render ? a.render : Be, target: a.target });this.o = !0;this.f = {};this.c = {};this.I = {};
  }F(Ae, Ud);
  function Be(a) {
    if (a = a.frameState) {
      var c,
          d,
          e,
          f,
          g,
          h,
          k,
          l,
          m,
          n,
          p,
          r = a.layerStatesArray,
          t = Ha({}, a.attributions),
          u = {},
          y = a.viewState.projection;d = 0;for (c = r.length; d < c; d++) {
        if (h = r[d].layer.Z()) if (n = x(h).toString(), m = h.o) for (e = 0, f = m.length; e < f; e++) {
          if (k = m[e], l = x(k).toString(), !(l in t)) {
            if (g = a.usedTiles[n]) {
              var A = h.ma(y);a: {
                p = k;var C = y;if (p.b) {
                  var w,
                      v,
                      D,
                      E = void 0;for (E in g) {
                    if (E in p.b) {
                      D = g[E];var H;w = 0;for (v = p.b[E].length; w < v; ++w) {
                        H = p.b[E][w];if (Pc(H, D)) {
                          p = !0;break a;
                        }var G = le(A, ue(C), parseInt(E, 10)),
                            O = G.ga();
                        if (D.b < G.b || D.c > G.c) if (Pc(H, new Mc(Da(D.b, O), Da(D.c, O), D.a, D.g)) || D.ga() > O && Pc(H, G)) {
                          p = !0;break a;
                        }
                      }
                    }
                  }p = !1;
                } else p = !0;
              }
            } else p = !1;p ? (l in u && delete u[l], t[l] = k) : u[l] = k;
          }
        }
      }c = [t, u];d = c[0];c = c[1];for (var z in this.f) {
        z in d ? (this.c[z] || (Od(this.f[z], !0), this.c[z] = !0), delete d[z]) : z in c ? (this.c[z] && (Od(this.f[z], !1), delete this.c[z]), delete c[z]) : (Gd(this.f[z]), delete this.f[z], delete this.c[z]);
      }for (z in d) {
        e = document.createElement("LI"), e.innerHTML = d[z].a, this.u.appendChild(e), this.f[z] = e, this.c[z] = !0;
      }for (z in c) {
        e = document.createElement("LI"), e.innerHTML = c[z].a, Od(e, !1), this.u.appendChild(e), this.f[z] = e;
      }z = !Ka(this.c) || !Ka(a.logos);this.o != z && (Od(this.element, z), this.o = z);z && Ka(this.c) ? this.element.classList.add("ol-logo-only") : this.element.classList.remove("ol-logo-only");var I;a = a.logos;z = this.I;for (I in z) {
        I in a || (Gd(z[I]), delete z[I]);
      }for (var N in a) {
        d = a[N], d instanceof HTMLElement && (this.j.appendChild(d), z[N] = d), N in z || (I = new Image(), I.src = N, "" === d ? d = I : (d = Dd("A", { href: d }), d.appendChild(I)), this.j.appendChild(d), z[N] = d);
      }Od(this.j, !Ka(a));
    } else this.o && (Od(this.element, !1), this.o = !1);
  }Ae.prototype.N = function (a) {
    a.preventDefault();this.element.classList.toggle("ol-collapsed");this.i ? Hd(this.v, this.B) : Hd(this.B, this.v);this.i = !this.i;
  };function Ce(a) {
    a = a ? a : {};var c = void 0 !== a.className ? a.className : "ol-rotate",
        d = void 0 !== a.label ? a.label : "\u21E7";this.c = null;"string" === typeof d ? this.c = Dd("SPAN", "ol-compass", d) : (this.c = d, this.c.classList.add("ol-compass"));d = Dd("BUTTON", { "class": c + "-reset", type: "button", title: a.tipLabel ? a.tipLabel : "Reset rotation" }, this.c);Q(d, "click", Ce.prototype.o, this);c = Dd("DIV", c + " ol-unselectable ol-control", d);d = a.render ? a.render : De;this.i = a.resetNorth ? a.resetNorth : void 0;Ud.call(this, { element: c, render: d, target: a.target });
    this.j = void 0 !== a.duration ? a.duration : 250;this.f = void 0 !== a.autoHide ? a.autoHide : !0;this.l = void 0;this.f && this.element.classList.add("ol-hidden");
  }F(Ce, Ud);Ce.prototype.o = function (a) {
    a.preventDefault();if (void 0 !== this.i) this.i();else {
      a = this.a;var c = a.F();if (c) {
        var d = c.P();void 0 !== d && (0 < this.j && (d %= 2 * Math.PI, d < -Math.PI && (d += 2 * Math.PI), d > Math.PI && (d -= 2 * Math.PI), a.ea(Kc({ rotation: d, duration: this.j, easing: Gc }))), c.set("rotation", 0));
      }
    }
  };
  function De(a) {
    if (a = a.frameState) {
      a = a.viewState.rotation;if (a != this.l) {
        var c = "rotate(" + a + "rad)";if (this.f) {
          var d = this.element.classList.contains("ol-hidden");d || 0 !== a ? d && 0 !== a && this.element.classList.remove("ol-hidden") : this.element.classList.add("ol-hidden");
        }this.c.style.msTransform = c;this.c.style.webkitTransform = c;this.c.style.transform = c;
      }this.l = a;
    }
  };function Ee(a) {
    a = a ? a : {};var c = void 0 !== a.className ? a.className : "ol-zoom",
        d = void 0 !== a.delta ? a.delta : 1,
        e = void 0 !== a.zoomOutLabel ? a.zoomOutLabel : "\u2212",
        f = void 0 !== a.zoomOutTipLabel ? a.zoomOutTipLabel : "Zoom out",
        g = Dd("BUTTON", { "class": c + "-in", type: "button", title: void 0 !== a.zoomInTipLabel ? a.zoomInTipLabel : "Zoom in" }, void 0 !== a.zoomInLabel ? a.zoomInLabel : "+");Q(g, "click", Ee.prototype.f.bind(this, d));e = Dd("BUTTON", { "class": c + "-out", type: "button", title: f }, e);Q(e, "click", Ee.prototype.f.bind(this, -d));c = Dd("DIV", c + " ol-unselectable ol-control", g, e);Ud.call(this, { element: c, target: a.target });this.c = void 0 !== a.duration ? a.duration : 250;
  }F(Ee, Ud);Ee.prototype.f = function (a, c) {
    c.preventDefault();var d = this.a,
        e = d.F();if (e) {
      var f = e.H();f && (0 < this.c && d.ea(Lc({ resolution: f, duration: this.c, easing: Gc })), d = e.constrainResolution(f, a), Fc(e, d));
    }
  };function Fe(a) {
    a = a ? a : {};var c = document.createElement("DIV");c.className = void 0 !== a.className ? a.className : "ol-mouse-position";Ud.call(this, { element: c, render: a.render ? a.render : Ge, target: a.target });Q(this, U("projection"), this.u, this);a.coordinateFormat && this.set("coordinateFormat", a.coordinateFormat);if (a.projection) {
      var d = Sb(a.projection);this.set("projection", d);
    }this.v = void 0 !== a.undefinedHTML ? a.undefinedHTML : "";this.j = c.innerHTML;this.i = this.f = this.c = null;
  }F(Fe, Ud);
  function Ge(a) {
    a = a.frameState;a ? this.c != a.viewState.projection && (this.c = a.viewState.projection, this.f = null) : this.c = null;He(this, this.i);
  }Fe.prototype.u = function () {
    this.f = null;
  };Fe.prototype.l = function (a) {
    this.i = Ie(this.a, a);He(this, this.i);
  };Fe.prototype.o = function () {
    He(this, null);this.i = null;
  };Fe.prototype.setMap = function (a) {
    Fe.S.setMap.call(this, a);a && (a = a.a, this.h.push(Q(a, "mousemove", this.l, this), Q(a, "mouseout", this.o, this)));
  };
  function He(a, c) {
    var d = a.v;if (c && a.c) {
      if (!a.f) {
        var e = a.get("projection");a.f = e ? Rb(a.c, e) : cc;
      }if (e = a.a.qa(c)) a.f(e, e), d = (d = a.get("coordinateFormat")) ? d(e) : e.toString();
    }a.j && d == a.j || (a.element.innerHTML = d, a.j = d);
  };var Je;
  function Ke() {
    var a = aa.MessageChannel;"undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !cd("Presto") && (a = function a() {
      var a = document.createElement("IFRAME");a.style.display = "none";a.src = "";document.documentElement.appendChild(a);var c = a.contentWindow,
          a = c.document;a.open();a.write("");a.close();var d = "callImmediate" + Math.random(),
          e = "file:" == c.location.protocol ? "*" : c.location.protocol + "//" + c.location.host,
          a = ma(function (a) {
        if (("*" == e || a.origin == e) && a.data == d) this.port1.onmessage();
      }, this);c.addEventListener("message", a, !1);this.port1 = {};this.port2 = { postMessage: function postMessage() {
          c.postMessage(d, e);
        } };
    });if ("undefined" !== typeof a && !cd("Trident") && !cd("MSIE")) {
      var c = new a(),
          d = {},
          e = d;c.port1.onmessage = function () {
        if (void 0 !== d.next) {
          d = d.next;var a = d.Nb;d.Nb = null;a();
        }
      };return function (a) {
        e.next = { Nb: a };e = e.next;c.port2.postMessage(0);
      };
    }return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function (a) {
      var c = document.createElement("SCRIPT");
      c.onreadystatechange = function () {
        c.onreadystatechange = null;c.parentNode.removeChild(c);c = null;a();a = null;
      };document.documentElement.appendChild(c);
    } : function (a) {
      aa.setTimeout(a, 0);
    };
  };function Le(a, c, d) {
    R.call(this, a);this.b = c;a = d ? d : {};this.buttons = Me(a);this.pressure = Ne(a, this.buttons);this.bubbles = "bubbles" in a ? a.bubbles : !1;this.cancelable = "cancelable" in a ? a.cancelable : !1;this.view = "view" in a ? a.view : null;this.detail = "detail" in a ? a.detail : null;this.screenX = "screenX" in a ? a.screenX : 0;this.screenY = "screenY" in a ? a.screenY : 0;this.clientX = "clientX" in a ? a.clientX : 0;this.clientY = "clientY" in a ? a.clientY : 0;this.button = "button" in a ? a.button : 0;this.relatedTarget = "relatedTarget" in a ? a.relatedTarget : null;this.pointerId = "pointerId" in a ? a.pointerId : 0;this.width = "width" in a ? a.width : 0;this.height = "height" in a ? a.height : 0;this.pointerType = "pointerType" in a ? a.pointerType : "";this.isPrimary = "isPrimary" in a ? a.isPrimary : !1;c.preventDefault && (this.preventDefault = function () {
      c.preventDefault();
    });
  }F(Le, R);function Me(a) {
    if (a.buttons || Oe) a = a.buttons;else switch (a.which) {case 1:
        a = 1;break;case 2:
        a = 4;break;case 3:
        a = 2;break;default:
        a = 0;}return a;
  }function Ne(a, c) {
    var d = 0;a.pressure ? d = a.pressure : d = c ? .5 : 0;return d;
  }
  var Oe = !1;try {
    Oe = 1 === new MouseEvent("click", { buttons: 1 }).buttons;
  } catch (a) {};function Pe(a, c) {
    var d = document.createElement("CANVAS");a && (d.width = a);c && (d.height = c);return d.getContext("2d");
  };var Qe = ["experimental-webgl", "webgl", "webkit-3d", "moz-webgl"];function Re(a, c) {
    var d,
        e,
        f = Qe.length;for (e = 0; e < f; ++e) {
      try {
        if (d = a.getContext(Qe[e], c)) return d;
      } catch (g) {}
    }return null;
  };var Se,
      Te = "undefined" !== typeof navigator ? navigator.userAgent.toLowerCase() : "",
      Ue = -1 !== Te.indexOf("firefox"),
      Ve = -1 !== Te.indexOf("safari") && -1 === Te.indexOf("chrom"),
      We = -1 !== Te.indexOf("macintosh"),
      Xe = K.devicePixelRatio || 1,
      Ye = !1,
      Ze = function () {
    if (!("HTMLCanvasElement" in K)) return !1;try {
      var a = Pe();return a ? (void 0 !== a.setLineDash && (Ye = !0), !0) : !1;
    } catch (c) {
      return !1;
    }
  }(),
      $e = "ontouchstart" in K,
      af = "PointerEvent" in K,
      bf = !!K.navigator.msPointerEnabled,
      cf = !1,
      df = [];
  if ("WebGLRenderingContext" in K) try {
    var ef = Re(document.createElement("CANVAS"), { failIfMajorPerformanceCaveat: !0 });ef && (cf = !0, df = ef.getSupportedExtensions());
  } catch (a) {}Se = cf;na = df;function ff(a, c) {
    this.b = a;this.f = c;
  };function gf(a) {
    ff.call(this, a, { mousedown: this.pd, mousemove: this.qd, mouseup: this.td, mouseover: this.sd, mouseout: this.rd });this.a = a.a;this.c = [];
  }F(gf, ff);function hf(a, c) {
    for (var d = a.c, e = c.clientX, f = c.clientY, g = 0, h = d.length, k; g < h && (k = d[g]); g++) {
      var l = Math.abs(f - k[1]);if (25 >= Math.abs(e - k[0]) && 25 >= l) return !0;
    }return !1;
  }function jf(a) {
    var c = kf(a, a),
        d = c.preventDefault;c.preventDefault = function () {
      a.preventDefault();d();
    };c.pointerId = 1;c.isPrimary = !0;c.pointerType = "mouse";return c;
  }q = gf.prototype;
  q.pd = function (a) {
    if (!hf(this, a)) {
      if (1 .toString() in this.a) {
        var c = jf(a);X(this.b, lf, c, a);delete this.a[1 .toString()];
      }c = jf(a);this.a[1 .toString()] = a;X(this.b, mf, c, a);
    }
  };q.qd = function (a) {
    if (!hf(this, a)) {
      var c = jf(a);X(this.b, nf, c, a);
    }
  };q.td = function (a) {
    if (!hf(this, a)) {
      var c = this.a[1 .toString()];c && c.button === a.button && (c = jf(a), X(this.b, of, c, a), delete this.a[1 .toString()]);
    }
  };q.sd = function (a) {
    if (!hf(this, a)) {
      var c = jf(a);pf(this.b, c, a);
    }
  };q.rd = function (a) {
    if (!hf(this, a)) {
      var c = jf(a);qf(this.b, c, a);
    }
  };function rf(a) {
    ff.call(this, a, { MSPointerDown: this.yd, MSPointerMove: this.zd, MSPointerUp: this.Cd, MSPointerOut: this.Ad, MSPointerOver: this.Bd, MSPointerCancel: this.xd, MSGotPointerCapture: this.vd, MSLostPointerCapture: this.wd });this.a = a.a;this.c = ["", "unavailable", "touch", "pen", "mouse"];
  }F(rf, ff);function sf(a, c) {
    var d = c;fa(c.pointerType) && (d = kf(c, c), d.pointerType = a.c[c.pointerType]);return d;
  }q = rf.prototype;q.yd = function (a) {
    this.a[a.pointerId.toString()] = a;var c = sf(this, a);X(this.b, mf, c, a);
  };
  q.zd = function (a) {
    var c = sf(this, a);X(this.b, nf, c, a);
  };q.Cd = function (a) {
    var c = sf(this, a);X(this.b, of, c, a);delete this.a[a.pointerId.toString()];
  };q.Ad = function (a) {
    var c = sf(this, a);qf(this.b, c, a);
  };q.Bd = function (a) {
    var c = sf(this, a);pf(this.b, c, a);
  };q.xd = function (a) {
    var c = sf(this, a);X(this.b, lf, c, a);delete this.a[a.pointerId.toString()];
  };q.wd = function (a) {
    S(this.b, new Le("lostpointercapture", a, a));
  };q.vd = function (a) {
    S(this.b, new Le("gotpointercapture", a, a));
  };function tf(a) {
    ff.call(this, a, { pointerdown: this.Pd, pointermove: this.Qd, pointerup: this.Td, pointerout: this.Rd, pointerover: this.Sd, pointercancel: this.Od, gotpointercapture: this.Rc, lostpointercapture: this.od });
  }F(tf, ff);q = tf.prototype;q.Pd = function (a) {
    uf(this.b, a);
  };q.Qd = function (a) {
    uf(this.b, a);
  };q.Td = function (a) {
    uf(this.b, a);
  };q.Rd = function (a) {
    uf(this.b, a);
  };q.Sd = function (a) {
    uf(this.b, a);
  };q.Od = function (a) {
    uf(this.b, a);
  };q.od = function (a) {
    uf(this.b, a);
  };q.Rc = function (a) {
    uf(this.b, a);
  };function vf(a, c) {
    ff.call(this, a, { touchstart: this.fe, touchmove: this.ee, touchend: this.de, touchcancel: this.ce });this.a = a.a;this.i = c;this.c = void 0;this.h = 0;this.g = void 0;
  }F(vf, ff);q = vf.prototype;q.kc = function () {
    this.h = 0;this.g = void 0;
  };
  function wf(a, c, d) {
    c = kf(c, d);c.pointerId = d.identifier + 2;c.bubbles = !0;c.cancelable = !0;c.detail = a.h;c.button = 0;c.buttons = 1;c.width = d.webkitRadiusX || d.radiusX || 0;c.height = d.webkitRadiusY || d.radiusY || 0;c.pressure = d.webkitForce || d.force || .5;c.isPrimary = a.c === d.identifier;c.pointerType = "touch";c.clientX = d.clientX;c.clientY = d.clientY;c.screenX = d.screenX;c.screenY = d.screenY;return c;
  }
  function xf(a, c, d) {
    function e() {
      c.preventDefault();
    }var f = Array.prototype.slice.call(c.changedTouches),
        g = f.length,
        h,
        k;for (h = 0; h < g; ++h) {
      k = wf(a, c, f[h]), k.preventDefault = e, d.call(a, c, k);
    }
  }
  q.fe = function (a) {
    var c = a.touches,
        d = Object.keys(this.a),
        e = d.length;if (e >= c.length) {
      var f = [],
          g,
          h,
          k;for (g = 0; g < e; ++g) {
        h = d[g];k = this.a[h];var l;if (!(l = 1 == h)) a: {
          l = c.length;for (var m, n = 0; n < l; n++) {
            if (m = c[n], m.identifier === h - 2) {
              l = !0;break a;
            }
          }l = !1;
        }l || f.push(k.out);
      }for (g = 0; g < f.length; ++g) {
        this.nb(a, f[g]);
      }
    }c = a.changedTouches[0];d = Object.keys(this.a).length;if (0 === d || 1 === d && 1 .toString() in this.a) this.c = c.identifier, void 0 !== this.g && K.clearTimeout(this.g);yf(this, a);this.h++;xf(this, a, this.Nd);
  };
  q.Nd = function (a, c) {
    this.a[c.pointerId] = { target: c.target, out: c, hc: c.target };var d = this.b;c.bubbles = !0;X(d, zf, c, a);d = this.b;c.bubbles = !1;X(d, Af, c, a);X(this.b, mf, c, a);
  };q.ee = function (a) {
    a.preventDefault();xf(this, a, this.ud);
  };q.ud = function (a, c) {
    var d = this.a[c.pointerId];if (d) {
      var e = d.out,
          f = d.hc;X(this.b, nf, c, a);e && f !== c.target && (e.relatedTarget = c.target, c.relatedTarget = f, e.target = f, c.target ? (qf(this.b, e, a), pf(this.b, c, a)) : (c.target = f, c.relatedTarget = null, this.nb(a, c)));d.out = c;d.hc = c.target;
    }
  };
  q.de = function (a) {
    yf(this, a);xf(this, a, this.he);
  };q.he = function (a, c) {
    X(this.b, of, c, a);this.b.out(c, a);var d = this.b;c.bubbles = !1;X(d, Bf, c, a);delete this.a[c.pointerId];c.isPrimary && (this.c = void 0, this.g = K.setTimeout(this.kc.bind(this), 200));
  };q.ce = function (a) {
    xf(this, a, this.nb);
  };q.nb = function (a, c) {
    X(this.b, lf, c, a);this.b.out(c, a);var d = this.b;c.bubbles = !1;X(d, Bf, c, a);delete this.a[c.pointerId];c.isPrimary && (this.c = void 0, this.g = K.setTimeout(this.kc.bind(this), 200));
  };
  function yf(a, c) {
    var d = a.i.c,
        e = c.changedTouches[0];if (a.c === e.identifier) {
      var f = [e.clientX, e.clientY];d.push(f);K.setTimeout(function () {
        eb(d, f);
      }, 2500);
    }
  };function Cf(a) {
    Ya.call(this);this.f = a;this.a = {};this.g = {};this.b = [];af ? Df(this, new tf(this)) : bf ? Df(this, new rf(this)) : (a = new gf(this), Df(this, a), $e && Df(this, new vf(this, a)));a = this.b.length;for (var c, d = 0; d < a; d++) {
      c = this.b[d], Ef(this, Object.keys(c.f));
    }
  }F(Cf, Ya);function Df(a, c) {
    var d = Object.keys(c.f);d && (d.forEach(function (a) {
      var d = c.f[a];d && (this.g[a] = d.bind(c));
    }, a), a.b.push(c));
  }Cf.prototype.c = function (a) {
    var c = this.g[a.type];c && c(a);
  };
  function Ef(a, c) {
    c.forEach(function (a) {
      Q(this.f, a, this.c, this);
    }, a);
  }function Ff(a, c) {
    c.forEach(function (a) {
      Ta(this.f, a, this.c, this);
    }, a);
  }function kf(a, c) {
    for (var d = {}, e, f = 0, g = Gf.length; f < g; f++) {
      e = Gf[f][0], d[e] = a[e] || c[e] || Gf[f][1];
    }return d;
  }Cf.prototype.out = function (a, c) {
    a.bubbles = !0;X(this, Hf, a, c);
  };function qf(a, c, d) {
    a.out(c, d);var e = c.relatedTarget;e && Id(c.target, e) || (c.bubbles = !1, X(a, Bf, c, d));
  }
  function pf(a, c, d) {
    c.bubbles = !0;X(a, zf, c, d);var e = c.relatedTarget;e && Id(c.target, e) || (c.bubbles = !1, X(a, Af, c, d));
  }function X(a, c, d, e) {
    S(a, new Le(c, e, d));
  }function uf(a, c) {
    S(a, new Le(c.type, c, c));
  }Cf.prototype.O = function () {
    for (var a = this.b.length, c, d = 0; d < a; d++) {
      c = this.b[d], Ff(this, Object.keys(c.f));
    }Cf.S.O.call(this);
  };
  var nf = "pointermove",
      mf = "pointerdown",
      of = "pointerup",
      zf = "pointerover",
      Hf = "pointerout",
      Af = "pointerenter",
      Bf = "pointerleave",
      lf = "pointercancel",
      Gf = [["bubbles", !1], ["cancelable", !1], ["view", null], ["detail", null], ["screenX", 0], ["screenY", 0], ["clientX", 0], ["clientY", 0], ["ctrlKey", !1], ["altKey", !1], ["shiftKey", !1], ["metaKey", !1], ["button", 0], ["relatedTarget", null], ["buttons", 0], ["pointerId", 0], ["width", 0], ["height", 0], ["pressure", 0], ["tiltX", 0], ["tiltY", 0], ["pointerType", ""], ["hwTimestamp", 0], ["isPrimary", !1], ["type", ""], ["target", null], ["currentTarget", null], ["which", 0]];function If(a, c, d, e, f) {
    Td.call(this, a, c, f);this.originalEvent = d;this.pixel = Ie(c, d);this.coordinate = c.qa(this.pixel);this.dragging = void 0 !== e ? e : !1;
  }F(If, Td);If.prototype.preventDefault = function () {
    If.S.preventDefault.call(this);this.originalEvent.preventDefault();
  };If.prototype.stopPropagation = function () {
    If.S.stopPropagation.call(this);this.originalEvent.stopPropagation();
  };function Jf(a, c, d, e, f) {
    If.call(this, a, c, d.b, e, f);this.b = d;
  }F(Jf, If);
  function Kf(a) {
    Ya.call(this);this.c = a;this.h = 0;this.i = !1;this.g = [];this.a = null;a = this.c.a;this.D = 0;this.w = {};this.f = new Cf(a);this.b = null;this.j = Q(this.f, mf, this.cd, this);this.l = Q(this.f, nf, this.Vd, this);
  }F(Kf, Ya);function Lf(a, c) {
    var d;d = new Jf(Mf, a.c, c);S(a, d);0 !== a.h ? (K.clearTimeout(a.h), a.h = 0, d = new Jf(Nf, a.c, c), S(a, d)) : a.h = K.setTimeout(function () {
      this.h = 0;var a = new Jf(Of, this.c, c);S(this, a);
    }.bind(a), 250);
  }
  function Pf(a, c) {
    c.type == Qf || c.type == Rf ? delete a.w[c.pointerId] : c.type == Sf && (a.w[c.pointerId] = !0);a.D = Object.keys(a.w).length;
  }q = Kf.prototype;q.$b = function (a) {
    Pf(this, a);var c = new Jf(Qf, this.c, a);S(this, c);!this.i && 0 === a.button && Lf(this, this.a);0 === this.D && (this.g.forEach(L), this.g.length = 0, this.i = !1, this.a = null, Wa(this.b), this.b = null);
  };
  q.cd = function (a) {
    Pf(this, a);var c = new Jf(Sf, this.c, a);S(this, c);this.a = a;0 === this.g.length && (this.b = new Cf(document), this.g.push(Q(this.b, Tf, this.dd, this), Q(this.b, Qf, this.$b, this), Q(this.f, Rf, this.$b, this)));
  };q.dd = function (a) {
    if (a.clientX != this.a.clientX || a.clientY != this.a.clientY) {
      this.i = !0;var c = new Jf(Uf, this.c, a, this.i);S(this, c);
    }a.preventDefault();
  };q.Vd = function (a) {
    S(this, new Jf(a.type, this.c, a, !(!this.a || a.clientX == this.a.clientX && a.clientY == this.a.clientY)));
  };
  q.O = function () {
    this.l && (L(this.l), this.l = null);this.j && (L(this.j), this.j = null);this.g.forEach(L);this.g.length = 0;this.b && (Wa(this.b), this.b = null);this.f && (Wa(this.f), this.f = null);Kf.S.O.call(this);
  };var Of = "singleclick",
      Mf = "click",
      Nf = "dblclick",
      Uf = "pointerdrag",
      Tf = "pointermove",
      Sf = "pointerdown",
      Qf = "pointerup",
      Rf = "pointercancel",
      Vf = { te: Of, ie: Mf, je: Nf, me: Uf, pe: Tf, le: Sf, se: Qf, re: "pointerover", qe: "pointerout", ne: "pointerenter", oe: "pointerleave", ke: Rf };function Wf(a) {
    T.call(this);var c = Ha({}, a);c.opacity = void 0 !== a.opacity ? a.opacity : 1;c.visible = void 0 !== a.visible ? a.visible : !0;c.zIndex = void 0 !== a.zIndex ? a.zIndex : 0;c.maxResolution = void 0 !== a.maxResolution ? a.maxResolution : Infinity;c.minResolution = void 0 !== a.minResolution ? a.minResolution : 0;this.w(c);
  }F(Wf, T);
  function Xf(a) {
    var c = a.get("opacity"),
        d = a.ub(),
        e = a.get("visible"),
        f = a.C(),
        g = a.get("zIndex"),
        h = a.get("maxResolution"),
        k = a.get("minResolution");return { layer: a, opacity: Ba(c, 0, 1), lc: d, visible: e, gb: !0, extent: f, zIndex: g, maxResolution: h, minResolution: Math.max(k, 0) };
  }Wf.prototype.C = function () {
    return this.get("extent");
  };function Yf() {};function Zf(a, c, d, e, f, g) {
    R.call(this, a, c);this.vectorContext = d;this.frameState = e;this.context = f;this.glContext = g;
  }F(Zf, R);function $f(a) {
    var c = Ha({}, a);delete c.source;Wf.call(this, c);this.h = this.c = this.a = null;a.map && this.setMap(a.map);Q(this, U("source"), this.jd, this);this.set("source", a.source ? a.source : null);
  }F($f, Wf);function ag(a, c) {
    return a.visible && c >= a.minResolution && c < a.maxResolution;
  }q = $f.prototype;q.sb = function (a) {
    a = a ? a : [];a.push(Xf(this));return a;
  };q.Z = function () {
    return this.get("source") || null;
  };q.ub = function () {
    var a = this.Z();return a ? a.J() : "undefined";
  };q.Gd = function () {
    this.b();
  };
  q.jd = function () {
    this.h && (L(this.h), this.h = null);var a = this.Z();a && (this.h = Q(a, "change", this.Gd, this));this.b();
  };q.setMap = function (a) {
    this.a && (L(this.a), this.a = null);a || this.b();this.c && (L(this.c), this.c = null);a && (this.a = Q(a, "precompose", function (a) {
      var d = Xf(this);d.gb = !1;d.zIndex = Infinity;a.frameState.layerStatesArray.push(d);a.frameState.layerStates[x(this)] = d;
    }, this), this.c = Q(this, "change", a.render, a), this.b());
  };function bg(a, c, d, e, f) {
    Ya.call(this);this.f = f;this.extent = a;this.h = d;this.resolution = c;this.state = e;
  }F(bg, Ya);function cg(a) {
    S(a, "change");
  }bg.prototype.C = function () {
    return this.extent;
  };bg.prototype.H = function () {
    return this.resolution;
  };bg.prototype.J = function () {
    return this.state;
  };function dg(a, c, d, e, f, g, h, k) {
    kc(a);0 === c && 0 === d || mc(a, c, d);1 == e && 1 == f || nc(a, e, f);0 !== g && oc(a, g);0 === h && 0 === k || mc(a, h, k);return a;
  }function eg(a, c, d) {
    var e = a[1],
        f = a[5],
        g = a[13],
        h = c[0];c = c[1];d[0] = a[0] * h + a[4] * c + a[12];d[1] = e * h + f * c + g;return d;
  };function fg(a) {
    $a.call(this);this.a = a;
  }F(fg, $a);fg.prototype.W = oa;fg.prototype.l = function (a, c, d) {
    return function (e, f) {
      return we(a, c, e, f, function (a) {
        d[e] || (d[e] = {});d[e][a.T.toString()] = a;
      });
    };
  };fg.prototype.U = function (a) {
    2 === a.target.J() && gg(this);
  };function hg(a, c) {
    var d = c.J();2 != d && 3 != d && Q(c, "change", a.U, a);0 == d && (c.load(), d = c.J());return 2 == d;
  }function gg(a) {
    var c = a.a;c.get("visible") && "ready" == c.ub() && a.b();
  }
  function ig(a, c) {
    c.gc() && a.postRenderFunctions.push(function (a, c, f) {
      c = x(a).toString();a.Ha(f.viewState.projection, f.usedTiles[c]);
    }.bind(null, c));
  }function jg(a, c) {
    if (c) {
      var d, e, f;e = 0;for (f = c.length; e < f; ++e) {
        d = c[e], a[x(d).toString()] = d;
      }
    }
  }function kg(a, c) {
    var d = c.I;void 0 !== d && ("string" === typeof d ? a.logos[d] = "" : ha(d) && (a.logos[d.src] = d.href));
  }
  function lg(a, c, d, e) {
    c = x(c).toString();d = d.toString();c in a ? d in a[c] ? (a = a[c][d], e.b < a.b && (a.b = e.b), e.c > a.c && (a.c = e.c), e.a < a.a && (a.a = e.a), e.g > a.g && (a.g = e.g)) : a[c][d] = e : (a[c] = {}, a[c][d] = e);
  }function mg(a, c, d) {
    return [c * (Math.round(a[0] / c) + d[0] % 2 / 2), c * (Math.round(a[1] / c) + d[1] % 2 / 2)];
  }
  function ng(a, c, d, e, f, g, h, k, l, m) {
    var n = x(c).toString();n in a.wantedTiles || (a.wantedTiles[n] = {});var p = a.wantedTiles[n];a = a.tileQueue;var r = d.minZoom,
        t,
        u,
        y,
        A,
        C,
        w;for (w = h; w >= r; --w) {
      for (u = le(d, g, w, u), y = d.H(w), A = u.b; A <= u.c; ++A) {
        for (C = u.a; C <= u.g; ++C) {
          h - w <= k ? (t = og(c, w, A, C, e, f), 0 == t.J() && (p[t.T.toString()] = !0, t.getKey() in a.c || a.g([t, n, pe(d, t.T), y])), void 0 !== l && l.call(m, t)) : c.nc(w, A, C, f);
        }
      }
    }
  };function pg(a) {
    this.j = a.opacity;this.A = a.rotateWithView;this.M = a.rotation;this.Xa = a.scale;this.D = a.snapToPixel;
  }pg.prototype.P = function () {
    return this.M;
  };function qg() {
    this.b = {};this.a = 0;
  }ba(qg);qg.prototype.clear = function () {
    this.b = {};this.a = 0;
  };qg.prototype.get = function (a, c, d) {
    a = c + ":" + a + ":" + (d ? Yc(d) : "null");return a in this.b ? this.b[a] : null;
  };qg.prototype.set = function (a, c, d, e) {
    this.b[c + ":" + a + ":" + (d ? Yc(d) : "null")] = e;++this.a;
  };function rg(a, c) {
    this.s = c;this.c = {};this.A = {};
  }F(rg, Va);function sg(a) {
    var c = a.viewState,
        d = a.coordinateToPixelMatrix;dg(d, a.size[0] / 2, a.size[1] / 2, 1 / c.resolution, -1 / c.resolution, -c.rotation, -c.center[0], -c.center[1]);lc(d, a.pixelToCoordinateMatrix);
  }q = rg.prototype;q.O = function () {
    for (var a in this.c) {
      Wa(this.c[a]);
    }
  };function tg() {
    var a = qg.ya();if (32 < a.a) {
      var c = 0,
          d,
          e;for (d in a.b) {
        e = a.b[d], 0 !== (c++ & 3) || Za(e) || (delete a.b[d], --a.a);
      }
    }
  }
  q.W = function (a, c, d, e, f, g) {
    function h(a, f) {
      var g = x(a).toString(),
          h = c.layerStates[x(f)].gb;if (!(g in c.skippedFeatureUids) || h) return d.call(e, a, h ? f : null);
    }var k,
        l = c.viewState,
        m = l.resolution,
        n = l.projection,
        l = a;if (n.a) {
      var n = n.C(),
          p = V(n),
          r = a[0];if (r < n[0] || r > n[2]) l = [r + p * Math.ceil((n[0] - r) / p), a[1]];
    }n = c.layerStatesArray;for (p = n.length - 1; 0 <= p; --p) {
      var t = n[p],
          r = t.layer;if (ag(t, m) && f.call(g, r) && (t = ug(this, r), r.Z() && (k = t.W(r.Z().u ? l : a, c, h, e)), k)) return k;
    }
  };
  function ug(a, c) {
    var d = x(c).toString();if (d in a.c) return a.c[d];var e = a.Ob(c);a.c[d] = e;a.A[d] = Q(e, "change", a.Xc, a);return e;
  }q.Xc = function () {
    this.s.render();
  };q.zb = oa;q.Xd = function (a, c) {
    for (var d in this.c) {
      if (!(c && d in c.layerStates)) {
        var e = d,
            f = this.c[e];delete this.c[e];L(this.A[e]);delete this.A[e];Wa(f);
      }
    }
  };function vg(a, c) {
    for (var d in a.c) {
      if (!(d in c.layerStates)) {
        c.postRenderFunctions.push(a.Xd.bind(a));break;
      }
    }
  }function hb(a, c) {
    return a.zIndex - c.zIndex;
  };function wg(a, c) {
    this.j = a;this.i = c;this.b = [];this.a = [];this.c = {};
  }wg.prototype.clear = function () {
    this.b.length = 0;this.a.length = 0;Ia(this.c);
  };function xg(a) {
    var c = a.b,
        d = a.a,
        e = c[0];1 == c.length ? (c.length = 0, d.length = 0) : (c[0] = c.pop(), d[0] = d.pop(), yg(a, 0));c = a.i(e);delete a.c[c];return e;
  }wg.prototype.g = function (a) {
    var c = this.j(a);return Infinity != c ? (this.b.push(a), this.a.push(c), this.c[this.i(a)] = !0, zg(this, 0, this.b.length - 1), !0) : !1;
  };
  function yg(a, c) {
    for (var d = a.b, e = a.a, f = d.length, g = d[c], h = e[c], k = c; c < f >> 1;) {
      var l = 2 * c + 1,
          m = 2 * c + 2,
          l = m < f && e[m] < e[l] ? m : l;d[c] = d[l];e[c] = e[l];c = l;
    }d[c] = g;e[c] = h;zg(a, k, c);
  }function zg(a, c, d) {
    var e = a.b;a = a.a;for (var f = e[d], g = a[d]; d > c;) {
      var h = d - 1 >> 1;if (a[h] > g) e[d] = e[h], a[d] = a[h], d = h;else break;
    }e[d] = f;a[d] = g;
  }function Ag(a) {
    var c = a.j,
        d = a.b,
        e = a.a,
        f = 0,
        g = d.length,
        h,
        k,
        l;for (k = 0; k < g; ++k) {
      h = d[k], l = c(h), Infinity == l ? delete a.c[a.i(h)] : (e[f] = l, d[f++] = h);
    }d.length = f;e.length = f;for (c = (a.b.length >> 1) - 1; 0 <= c; c--) {
      yg(a, c);
    }
  };function Bg(a, c) {
    wg.call(this, function (c) {
      return a.apply(null, c);
    }, function (a) {
      return a[0].getKey();
    });this.A = c;this.h = 0;this.f = {};
  }F(Bg, wg);Bg.prototype.g = function (a) {
    var c = Bg.S.g.call(this, a);c && Q(a[0], "change", this.s, this);return c;
  };Bg.prototype.s = function (a) {
    a = a.target;var c = a.J();if (2 === c || 3 === c || 4 === c || 5 === c) Ta(a, "change", this.s, this), a = a.getKey(), a in this.f && (delete this.f[a], --this.h), this.A();
  };function Cg() {
    this.b = [];this.a = this.c = 0;
  }function Dg(a, c) {
    var d = a.a,
        e = .05 - d,
        f = Math.log(.05 / a.a) / -.005;return Jc({ source: c, duration: f, easing: function easing(a) {
        return d * (Math.exp(-.005 * a * f) - 1) / e;
      } });
  };function Eg(a) {
    T.call(this);this.u = null;this.set("active", !0);this.handleEvent = a.handleEvent;
  }F(Eg, T);Eg.prototype.setMap = function (a) {
    this.u = a;
  };function Fg(a, c, d, e, f) {
    if (void 0 !== d) {
      var g = c.P(),
          h = c.X();void 0 !== g && h && f && 0 < f && (a.ea(Kc({ rotation: g, duration: f, easing: Gc })), e && a.ea(Jc({ source: h, duration: f, easing: Gc })));c.rotate(d, e);
    }
  }function Gg(a, c, d, e, f) {
    var g = c.H();d = c.constrainResolution(g, d, 0);Hg(a, c, d, e, f);
  }
  function Hg(a, c, d, e, f) {
    if (d) {
      var g = c.H(),
          h = c.X();void 0 !== g && h && d !== g && f && 0 < f && (a.ea(Lc({ resolution: g, duration: f, easing: Gc })), e && a.ea(Jc({ source: h, duration: f, easing: Gc })));if (e) {
        var k;a = c.X();f = c.H();void 0 !== a && void 0 !== f && (k = [e[0] - d * (e[0] - a[0]) / f, e[1] - d * (e[1] - a[1]) / f]);c.la(k);
      }Fc(c, d);
    }
  };function Ig(a) {
    a = a ? a : {};this.a = a.delta ? a.delta : 1;Eg.call(this, { handleEvent: Jg });this.c = void 0 !== a.duration ? a.duration : 250;
  }F(Ig, Eg);function Jg(a) {
    var c = !1,
        d = a.originalEvent;if (a.type == Nf) {
      var c = a.map,
          e = a.coordinate,
          d = d.shiftKey ? -this.a : this.a,
          f = c.F();Gg(c, f, d, e, this.c);a.preventDefault();c = !0;
    }return !c;
  };function Kg(a) {
    a = a.originalEvent;return a.altKey && !(a.metaKey || a.ctrlKey) && a.shiftKey;
  }function Lg(a) {
    a = a.originalEvent;return 0 == a.button && !(kd && We && a.ctrlKey);
  }function Mg(a) {
    a = a.originalEvent;return !a.altKey && !(a.metaKey || a.ctrlKey) && !a.shiftKey;
  }function Ng(a) {
    a = a.originalEvent;return !a.altKey && !(a.metaKey || a.ctrlKey) && a.shiftKey;
  }function Og(a) {
    a = a.originalEvent.target.tagName;return "INPUT" !== a && "SELECT" !== a && "TEXTAREA" !== a;
  }function Pg(a) {
    return "mouse" == a.b.pointerType;
  };function Qg(a) {
    a = a ? a : {};Eg.call(this, { handleEvent: a.handleEvent ? a.handleEvent : Rg });this.B = a.handleDownEvent ? a.handleDownEvent : Kb;this.G = a.handleDragEvent ? a.handleDragEvent : oa;this.I = a.handleMoveEvent ? a.handleMoveEvent : oa;this.N = a.handleUpEvent ? a.handleUpEvent : Kb;this.f = !1;this.l = {};this.a = [];
  }F(Qg, Eg);function Sg(a) {
    for (var c = a.length, d = 0, e = 0, f = 0; f < c; f++) {
      d += a[f].clientX, e += a[f].clientY;
    }return [d / c, e / c];
  }
  function Rg(a) {
    if (!(a instanceof Jf)) return !0;var c = !1,
        d = a.type;if (d === Sf || d === Uf || d === Qf) d = a.b, a.type == Qf ? delete this.l[d.pointerId] : a.type == Sf ? this.l[d.pointerId] = d : d.pointerId in this.l && (this.l[d.pointerId] = d), this.a = Ja(this.l);this.f && (a.type == Uf ? this.G(a) : a.type == Qf && (this.f = this.N(a)));a.type == Sf ? (this.f = a = this.B(a), c = this.j(a)) : a.type == Tf && this.I(a);return !c;
  }Qg.prototype.j = function (a) {
    return a;
  };function Tg(a) {
    Qg.call(this, { handleDownEvent: Ug, handleDragEvent: Vg, handleUpEvent: Wg });a = a ? a : {};this.c = a.kinetic;this.h = this.i = null;this.v = a.condition ? a.condition : Mg;this.o = !1;
  }F(Tg, Qg);function Vg(a) {
    var c = Sg(this.a);this.c && this.c.b.push(c[0], c[1], Date.now());if (this.h) {
      var d = this.h[0] - c[0],
          e = c[1] - this.h[1];a = a.map;var f = a.F(),
          g = f.J(),
          e = d = [d, e],
          h = g.resolution;e[0] *= h;e[1] *= h;pb(d, g.rotation);ob(d, g.center);d = f.a.center(d);a.render();f.la(d);
    }this.h = c;
  }
  function Wg(a) {
    a = a.map;var c = a.F();if (0 === this.a.length) {
      var d;if (d = !this.o && this.c) if (d = this.c, 6 > d.b.length) d = !1;else {
        var e = Date.now() - 100,
            f = d.b.length - 3;if (d.b[f + 2] < e) d = !1;else {
          for (var g = f - 3; 0 < g && d.b[g + 2] > e;) {
            g -= 3;
          }var e = d.b[f + 2] - d.b[g + 2],
              h = d.b[f] - d.b[g],
              f = d.b[f + 1] - d.b[g + 1];d.c = Math.atan2(f, h);d.a = Math.sqrt(h * h + f * f) / e;d = .05 < d.a;
        }
      }d && (d = (.05 - this.c.a) / -.005, f = this.c.c, g = c.X(), this.i = Dg(this.c, g), a.ea(this.i), g = Xg(a, g), d = a.qa([g[0] - d * Math.cos(f), g[1] - d * Math.sin(f)]), d = c.a.center(d), c.la(d));Ec(c, -1);
      a.render();return !1;
    }this.h = null;return !0;
  }function Ug(a) {
    if (0 < this.a.length && this.v(a)) {
      var c = a.map,
          d = c.F();this.h = null;this.f || Ec(d, 1);c.render();this.i && eb(c.G, this.i) && (d.la(a.frameState.viewState.center), this.i = null);this.c && (a = this.c, a.b.length = 0, a.c = 0, a.a = 0);this.o = 1 < this.a.length;return !0;
    }return !1;
  }Tg.prototype.j = Kb;function Yg(a) {
    a = a ? a : {};Qg.call(this, { handleDownEvent: Zg, handleDragEvent: $g, handleUpEvent: ah });this.h = a.condition ? a.condition : Kg;this.c = void 0;this.i = void 0 !== a.duration ? a.duration : 250;
  }F(Yg, Qg);function $g(a) {
    if (Pg(a)) {
      var c = a.map,
          d = bh(c);a = a.pixel;d = Math.atan2(d[1] / 2 - a[1], a[0] - d[0] / 2);if (void 0 !== this.c) {
        a = d - this.c;var e = c.F(),
            f = e.P();c.render();Fg(c, e, f - a);
      }this.c = d;
    }
  }
  function ah(a) {
    if (!Pg(a)) return !0;a = a.map;var c = a.F();Ec(c, -1);var d = c.P(),
        e = this.i,
        d = c.constrainRotation(d, 0);Fg(a, c, d, void 0, e);return !1;
  }function Zg(a) {
    return Pg(a) && Lg(a) && this.h(a) ? (a = a.map, Ec(a.F(), 1), a.render(), this.c = void 0, !0) : !1;
  }Yg.prototype.j = Kb;function ch(a) {
    this.g = null;this.a = document.createElement("div");this.a.style.position = "absolute";this.a.className = "ol-box " + a;this.c = this.f = this.b = null;
  }F(ch, Va);ch.prototype.O = function () {
    this.setMap(null);
  };function dh(a) {
    var c = a.f,
        d = a.c;a = a.a.style;a.left = Math.min(c[0], d[0]) + "px";a.top = Math.min(c[1], d[1]) + "px";a.width = Math.abs(d[0] - c[0]) + "px";a.height = Math.abs(d[1] - c[1]) + "px";
  }
  ch.prototype.setMap = function (a) {
    if (this.b) {
      this.b.l.removeChild(this.a);var c = this.a.style;c.left = c.top = c.width = c.height = "inherit";
    }(this.b = a) && this.b.l.appendChild(this.a);
  };function eh(a) {
    var c = a.f,
        d = a.c,
        c = [c, [c[0], d[1]], d, [d[0], c[1]]].map(a.b.qa, a.b);c[4] = c[0].slice();a.g ? xc(a.g, [c]) : a.g = new wc([c]);
  }ch.prototype.Y = function () {
    return this.g;
  };function fh(a, c, d) {
    R.call(this, a);this.coordinate = c;this.mapBrowserEvent = d;
  }F(fh, R);function gh(a) {
    Qg.call(this, { handleDownEvent: hh, handleDragEvent: ih, handleUpEvent: jh });a = a ? a : {};this.c = new ch(a.className || "ol-dragbox");this.h = null;this.R = a.condition ? a.condition : Jb;this.v = a.boxEndCondition ? a.boxEndCondition : kh;
  }F(gh, Qg);function kh(a, c, d) {
    a = d[0] - c[0];c = d[1] - c[1];return 64 <= a * a + c * c;
  }
  function ih(a) {
    if (Pg(a)) {
      var c = this.c,
          d = a.pixel;c.f = this.h;c.c = d;eh(c);dh(c);S(this, new fh("boxdrag", a.coordinate, a));
    }
  }gh.prototype.Y = function () {
    return this.c.Y();
  };gh.prototype.o = oa;function jh(a) {
    if (!Pg(a)) return !0;this.c.setMap(null);this.v(a, this.h, a.pixel) && (this.o(a), S(this, new fh("boxend", a.coordinate, a)));return !1;
  }
  function hh(a) {
    if (Pg(a) && Lg(a) && this.R(a)) {
      this.h = a.pixel;this.c.setMap(a.map);var c = this.c,
          d = this.h;c.f = this.h;c.c = d;eh(c);dh(c);S(this, new fh("boxstart", a.coordinate, a));return !0;
    }return !1;
  };function lh(a) {
    a = a ? a : {};var c = a.condition ? a.condition : Ng;this.i = void 0 !== a.duration ? a.duration : 200;this.U = void 0 !== a.out ? a.out : !1;gh.call(this, { condition: c, className: a.className || "ol-dragzoom" });
  }F(lh, gh);
  lh.prototype.o = function () {
    var a = this.u,
        c = a.F(),
        d = bh(a),
        e = this.Y().C();if (this.U) {
      var f = Bc(c, d),
          e = [Xg(a, Cb(e)), Xg(a, [e[2], e[3]])],
          g = wb(Infinity, Infinity, -Infinity, -Infinity, void 0),
          h,
          k;h = 0;for (k = e.length; h < k; ++h) {
        sb(g, e[h]);
      }Ib(f, 1 / Cc(g, d));e = f;
    }d = c.constrainResolution(Cc(e, d));f = c.H();g = c.X();a.ea(Lc({ resolution: f, duration: this.i, easing: Gc }));a.ea(Jc({ source: g, duration: this.i, easing: Gc }));c.la(Db(e));Fc(c, d);
  };function mh(a) {
    Eg.call(this, { handleEvent: nh });a = a || {};this.a = function (a) {
      return Mg(a) && Og(a);
    };this.c = void 0 !== a.condition ? a.condition : this.a;this.f = void 0 !== a.duration ? a.duration : 100;this.h = void 0 !== a.pixelDelta ? a.pixelDelta : 128;
  }F(mh, Eg);
  function nh(a) {
    var c = !1;if ("keydown" == a.type) {
      var d = a.originalEvent.keyCode;if (this.c(a) && (40 == d || 37 == d || 39 == d || 38 == d)) {
        var e = a.map,
            c = e.F(),
            f = c.H() * this.h,
            g = 0,
            h = 0;40 == d ? h = -f : 37 == d ? g = -f : 39 == d ? g = f : h = f;d = [g, h];pb(d, c.P());f = this.f;if (g = c.X()) f && 0 < f && e.ea(Jc({ source: g, duration: f, easing: Ic })), e = c.a.center([g[0] + d[0], g[1] + d[1]]), c.la(e);a.preventDefault();c = !0;
      }
    }return !c;
  };function oh(a) {
    Eg.call(this, { handleEvent: ph });a = a ? a : {};this.c = a.condition ? a.condition : Og;this.a = a.delta ? a.delta : 1;this.f = void 0 !== a.duration ? a.duration : 100;
  }F(oh, Eg);function ph(a) {
    var c = !1;if ("keydown" == a.type || "keypress" == a.type) {
      var d = a.originalEvent.charCode;if (this.c(a) && (43 == d || 45 == d)) {
        c = a.map;d = 43 == d ? this.a : -this.a;c.render();var e = c.F();Gg(c, e, d, void 0, this.f);a.preventDefault();c = !0;
      }
    }return !c;
  };function qh(a) {
    Eg.call(this, { handleEvent: rh });a = a || {};this.a = 0;this.j = void 0 !== a.duration ? a.duration : 250;this.l = void 0 !== a.useAnchor ? a.useAnchor : !0;this.f = null;this.h = this.c = void 0;
  }F(qh, Eg);
  function rh(a) {
    var c = !1;if ("wheel" == a.type || "mousewheel" == a.type) {
      var c = a.map,
          d = a.originalEvent;this.l && (this.f = a.coordinate);var e;"wheel" == a.type ? (e = d.deltaY, Ue && d.deltaMode === K.WheelEvent.DOM_DELTA_PIXEL && (e /= Xe), d.deltaMode === K.WheelEvent.DOM_DELTA_LINE && (e *= 40)) : "mousewheel" == a.type && (e = -d.wheelDeltaY, Ve && (e /= 3));this.a += e;void 0 === this.c && (this.c = Date.now());e = Math.max(80 - (Date.now() - this.c), 0);K.clearTimeout(this.h);this.h = K.setTimeout(this.i.bind(this, c), e);a.preventDefault();c = !0;
    }return !c;
  }
  qh.prototype.i = function (a) {
    var c = Ba(this.a, -1, 1),
        d = a.F();a.render();Gg(a, d, -c, this.f, this.j);this.a = 0;this.f = null;this.h = this.c = void 0;
  };function sh(a) {
    Qg.call(this, { handleDownEvent: th, handleDragEvent: uh, handleUpEvent: vh });a = a || {};this.h = null;this.i = void 0;this.c = !1;this.o = 0;this.R = void 0 !== a.threshold ? a.threshold : .3;this.v = void 0 !== a.duration ? a.duration : 250;
  }F(sh, Qg);
  function uh(a) {
    var c = 0,
        d = this.a[0],
        e = this.a[1],
        d = Math.atan2(e.clientY - d.clientY, e.clientX - d.clientX);void 0 !== this.i && (c = d - this.i, this.o += c, !this.c && Math.abs(this.o) > this.R && (this.c = !0));this.i = d;a = a.map;d = a.a.getBoundingClientRect();e = Sg(this.a);e[0] -= d.left;e[1] -= d.top;this.h = a.qa(e);this.c && (d = a.F(), e = d.P(), a.render(), Fg(a, d, e + c, this.h));
  }
  function vh(a) {
    if (2 > this.a.length) {
      a = a.map;var c = a.F();Ec(c, -1);if (this.c) {
        var d = c.P(),
            e = this.h,
            f = this.v,
            d = c.constrainRotation(d, 0);Fg(a, c, d, e, f);
      }return !1;
    }return !0;
  }function th(a) {
    return 2 <= this.a.length ? (a = a.map, this.h = null, this.i = void 0, this.c = !1, this.o = 0, this.f || Ec(a.F(), 1), a.render(), !0) : !1;
  }sh.prototype.j = Kb;function wh(a) {
    Qg.call(this, { handleDownEvent: xh, handleDragEvent: yh, handleUpEvent: zh });a = a ? a : {};this.h = null;this.o = void 0 !== a.duration ? a.duration : 400;this.c = void 0;this.i = 1;
  }F(wh, Qg);function yh(a) {
    var c = 1,
        d = this.a[0],
        e = this.a[1],
        f = d.clientX - e.clientX,
        d = d.clientY - e.clientY,
        f = Math.sqrt(f * f + d * d);void 0 !== this.c && (c = this.c / f);this.c = f;1 != c && (this.i = c);a = a.map;var f = a.F(),
        d = f.H(),
        e = a.a.getBoundingClientRect(),
        g = Sg(this.a);g[0] -= e.left;g[1] -= e.top;this.h = a.qa(g);a.render();Hg(a, f, d * c, this.h);
  }
  function zh(a) {
    if (2 > this.a.length) {
      a = a.map;var c = a.F();Ec(c, -1);var d = c.H(),
          e = this.h,
          f = this.o,
          d = c.constrainResolution(d, 0, this.i - 1);Hg(a, c, d, e, f);return !1;
    }return !0;
  }function xh(a) {
    return 2 <= this.a.length ? (a = a.map, this.h = null, this.c = void 0, this.i = 1, this.f || Ec(a.F(), 1), a.render(), !0) : !1;
  }wh.prototype.j = Kb;function Ah(a) {
    var c = a || {};a = Ha({}, c);delete a.layers;c = c.layers;Wf.call(this, a);this.c = [];this.a = {};Q(this, U("layers"), this.Zc, this);c ? Array.isArray(c) && (c = new Sc(c.slice())) : c = new Sc();this.set("layers", c);
  }F(Ah, Wf);q = Ah.prototype;q.eb = function () {
    this.get("visible") && this.b();
  };
  q.Zc = function () {
    this.c.forEach(L);this.c.length = 0;var a = Bh(this);this.c.push(Q(a, "add", this.Yc, this), Q(a, "remove", this.$c, this));for (var c in this.a) {
      this.a[c].forEach(L);
    }Ia(this.a);var a = a.a,
        d,
        e;c = 0;for (d = a.length; c < d; c++) {
      e = a[c], this.a[x(e).toString()] = [Q(e, "propertychange", this.eb, this), Q(e, "change", this.eb, this)];
    }this.b();
  };q.Yc = function (a) {
    a = a.element;var c = x(a).toString();this.a[c] = [Q(a, "propertychange", this.eb, this), Q(a, "change", this.eb, this)];this.b();
  };
  q.$c = function (a) {
    a = x(a.element).toString();this.a[a].forEach(L);delete this.a[a];this.b();
  };function Bh(a) {
    return a.get("layers");
  }
  q.sb = function (a) {
    var c = void 0 !== a ? a : [],
        d = c.length;Bh(this).forEach(function (a) {
      a.sb(c);
    });a = Xf(this);var e, f;for (e = c.length; d < e; d++) {
      f = c[d], f.opacity *= a.opacity, f.visible = f.visible && a.visible, f.maxResolution = Math.min(f.maxResolution, a.maxResolution), f.minResolution = Math.max(f.minResolution, a.minResolution), void 0 !== a.extent && (f.extent = void 0 !== f.extent ? Fb(f.extent, a.extent) : a.extent);
    }return c;
  };q.ub = function () {
    return "ready";
  };function Ch(a) {
    Pb.call(this, { code: a, units: "m", extent: Dh, global: !0, worldExtent: Eh });
  }F(Ch, Pb);Ch.prototype.getPointResolution = function (a, c) {
    return a / Ca(c[1] / 6378137);
  };var Fh = 6378137 * Math.PI,
      Dh = [-Fh, -Fh, Fh, Fh],
      Eh = [-180, -85, 180, 85],
      Gh = "EPSG:3857 EPSG:102100 EPSG:102113 EPSG:900913 urn:ogc:def:crs:EPSG:6.18:3:3857 urn:ogc:def:crs:EPSG::3857 http://www.opengis.net/gml/srs/epsg.xml#3857".split(" ").map(function (a) {
    return new Ch(a);
  });
  function Hh(a, c, d) {
    var e = a.length;d = 1 < d ? d : 2;void 0 === c && (2 < d ? c = a.slice() : c = Array(e));for (var f = 0; f < e; f += d) {
      c[f] = 6378137 * Math.PI * a[f] / 180, c[f + 1] = 6378137 * Math.log(Math.tan(Math.PI * (a[f + 1] + 90) / 360));
    }return c;
  }function Ih(a, c, d) {
    var e = a.length;d = 1 < d ? d : 2;void 0 === c && (2 < d ? c = a.slice() : c = Array(e));for (var f = 0; f < e; f += d) {
      c[f] = 180 * a[f] / (6378137 * Math.PI), c[f + 1] = 360 * Math.atan(Math.exp(a[f + 1] / 6378137)) / Math.PI - 90;
    }return c;
  };var Jh = new Lb(6378137);function Kh(a, c) {
    Pb.call(this, { code: a, units: "degrees", extent: Lh, axisOrientation: c, global: !0, metersPerUnit: Mh, worldExtent: Lh });
  }F(Kh, Pb);Kh.prototype.getPointResolution = function (a) {
    return a;
  };
  var Lh = [-180, -90, 180, 90],
      Mh = Math.PI * Jh.radius / 180,
      Nh = [new Kh("CRS:84"), new Kh("EPSG:4326", "neu"), new Kh("urn:ogc:def:crs:EPSG::4326", "neu"), new Kh("urn:ogc:def:crs:EPSG:6.6:4326", "neu"), new Kh("urn:ogc:def:crs:OGC:1.3:CRS84"), new Kh("urn:ogc:def:crs:OGC:2:84"), new Kh("http://www.opengis.net/gml/srs/epsg.xml#4326", "neu"), new Kh("urn:x-ogc:def:crs:EPSG:4326", "neu")];function Oh(a) {
    $f.call(this, a ? a : {});
  }F(Oh, $f);function Ph(a) {
    a = a ? a : {};var c = Ha({}, a);delete c.preload;delete c.useInterimTilesOnError;$f.call(this, c);this.set("preload", void 0 !== a.preload ? a.preload : 0);this.set("useInterimTilesOnError", void 0 !== a.useInterimTilesOnError ? a.useInterimTilesOnError : !0);
  }F(Ph, $f);var Qh = [0, 0, 0, 1],
      Rh = [],
      Sh = [0, 0, 0, 1];function Th(a, c, d, e) {
    0 !== c && (a.translate(d, e), a.rotate(c), a.translate(-d, -e));
  };function Uh(a) {
    a = a || {};this.b = void 0 !== a.color ? a.color : null;this.a = void 0;
  }Uh.prototype.fa = function () {
    return this.b;
  };function Vh() {
    this.a = -1;
  };function Wh() {
    this.a = -1;this.a = 64;this.b = Array(4);this.f = Array(this.a);this.g = this.c = 0;this.b[0] = 1732584193;this.b[1] = 4023233417;this.b[2] = 2562383102;this.b[3] = 271733878;this.g = this.c = 0;
  }F(Wh, Vh);
  function Xh(a, c, d) {
    d || (d = 0);var e = Array(16);if (ea(c)) for (var f = 0; 16 > f; ++f) {
      e[f] = c.charCodeAt(d++) | c.charCodeAt(d++) << 8 | c.charCodeAt(d++) << 16 | c.charCodeAt(d++) << 24;
    } else for (f = 0; 16 > f; ++f) {
      e[f] = c[d++] | c[d++] << 8 | c[d++] << 16 | c[d++] << 24;
    }c = a.b[0];d = a.b[1];var f = a.b[2],
        g = a.b[3],
        h;h = c + (g ^ d & (f ^ g)) + e[0] + 3614090360 & 4294967295;c = d + (h << 7 & 4294967295 | h >>> 25);h = g + (f ^ c & (d ^ f)) + e[1] + 3905402710 & 4294967295;g = c + (h << 12 & 4294967295 | h >>> 20);h = f + (d ^ g & (c ^ d)) + e[2] + 606105819 & 4294967295;f = g + (h << 17 & 4294967295 | h >>> 15);h = d + (c ^ f & (g ^ c)) + e[3] + 3250441966 & 4294967295;d = f + (h << 22 & 4294967295 | h >>> 10);h = c + (g ^ d & (f ^ g)) + e[4] + 4118548399 & 4294967295;c = d + (h << 7 & 4294967295 | h >>> 25);h = g + (f ^ c & (d ^ f)) + e[5] + 1200080426 & 4294967295;g = c + (h << 12 & 4294967295 | h >>> 20);h = f + (d ^ g & (c ^ d)) + e[6] + 2821735955 & 4294967295;f = g + (h << 17 & 4294967295 | h >>> 15);h = d + (c ^ f & (g ^ c)) + e[7] + 4249261313 & 4294967295;d = f + (h << 22 & 4294967295 | h >>> 10);h = c + (g ^ d & (f ^ g)) + e[8] + 1770035416 & 4294967295;c = d + (h << 7 & 4294967295 | h >>> 25);h = g + (f ^ c & (d ^ f)) + e[9] + 2336552879 & 4294967295;g = c + (h << 12 & 4294967295 | h >>> 20);h = f + (d ^ g & (c ^ d)) + e[10] + 4294925233 & 4294967295;f = g + (h << 17 & 4294967295 | h >>> 15);h = d + (c ^ f & (g ^ c)) + e[11] + 2304563134 & 4294967295;d = f + (h << 22 & 4294967295 | h >>> 10);h = c + (g ^ d & (f ^ g)) + e[12] + 1804603682 & 4294967295;c = d + (h << 7 & 4294967295 | h >>> 25);h = g + (f ^ c & (d ^ f)) + e[13] + 4254626195 & 4294967295;g = c + (h << 12 & 4294967295 | h >>> 20);h = f + (d ^ g & (c ^ d)) + e[14] + 2792965006 & 4294967295;f = g + (h << 17 & 4294967295 | h >>> 15);h = d + (c ^ f & (g ^ c)) + e[15] + 1236535329 & 4294967295;d = f + (h << 22 & 4294967295 | h >>> 10);h = c + (f ^ g & (d ^ f)) + e[1] + 4129170786 & 4294967295;c = d + (h << 5 & 4294967295 | h >>> 27);h = g + (d ^ f & (c ^ d)) + e[6] + 3225465664 & 4294967295;g = c + (h << 9 & 4294967295 | h >>> 23);h = f + (c ^ d & (g ^ c)) + e[11] + 643717713 & 4294967295;f = g + (h << 14 & 4294967295 | h >>> 18);h = d + (g ^ c & (f ^ g)) + e[0] + 3921069994 & 4294967295;d = f + (h << 20 & 4294967295 | h >>> 12);h = c + (f ^ g & (d ^ f)) + e[5] + 3593408605 & 4294967295;c = d + (h << 5 & 4294967295 | h >>> 27);h = g + (d ^ f & (c ^ d)) + e[10] + 38016083 & 4294967295;g = c + (h << 9 & 4294967295 | h >>> 23);h = f + (c ^ d & (g ^ c)) + e[15] + 3634488961 & 4294967295;f = g + (h << 14 & 4294967295 | h >>> 18);h = d + (g ^ c & (f ^ g)) + e[4] + 3889429448 & 4294967295;d = f + (h << 20 & 4294967295 | h >>> 12);h = c + (f ^ g & (d ^ f)) + e[9] + 568446438 & 4294967295;c = d + (h << 5 & 4294967295 | h >>> 27);h = g + (d ^ f & (c ^ d)) + e[14] + 3275163606 & 4294967295;g = c + (h << 9 & 4294967295 | h >>> 23);h = f + (c ^ d & (g ^ c)) + e[3] + 4107603335 & 4294967295;f = g + (h << 14 & 4294967295 | h >>> 18);h = d + (g ^ c & (f ^ g)) + e[8] + 1163531501 & 4294967295;d = f + (h << 20 & 4294967295 | h >>> 12);h = c + (f ^ g & (d ^ f)) + e[13] + 2850285829 & 4294967295;c = d + (h << 5 & 4294967295 | h >>> 27);h = g + (d ^ f & (c ^ d)) + e[2] + 4243563512 & 4294967295;g = c + (h << 9 & 4294967295 | h >>> 23);h = f + (c ^ d & (g ^ c)) + e[7] + 1735328473 & 4294967295;f = g + (h << 14 & 4294967295 | h >>> 18);h = d + (g ^ c & (f ^ g)) + e[12] + 2368359562 & 4294967295;d = f + (h << 20 & 4294967295 | h >>> 12);h = c + (d ^ f ^ g) + e[5] + 4294588738 & 4294967295;c = d + (h << 4 & 4294967295 | h >>> 28);h = g + (c ^ d ^ f) + e[8] + 2272392833 & 4294967295;g = c + (h << 11 & 4294967295 | h >>> 21);h = f + (g ^ c ^ d) + e[11] + 1839030562 & 4294967295;f = g + (h << 16 & 4294967295 | h >>> 16);h = d + (f ^ g ^ c) + e[14] + 4259657740 & 4294967295;d = f + (h << 23 & 4294967295 | h >>> 9);h = c + (d ^ f ^ g) + e[1] + 2763975236 & 4294967295;c = d + (h << 4 & 4294967295 | h >>> 28);h = g + (c ^ d ^ f) + e[4] + 1272893353 & 4294967295;g = c + (h << 11 & 4294967295 | h >>> 21);h = f + (g ^ c ^ d) + e[7] + 4139469664 & 4294967295;f = g + (h << 16 & 4294967295 | h >>> 16);h = d + (f ^ g ^ c) + e[10] + 3200236656 & 4294967295;d = f + (h << 23 & 4294967295 | h >>> 9);h = c + (d ^ f ^ g) + e[13] + 681279174 & 4294967295;c = d + (h << 4 & 4294967295 | h >>> 28);h = g + (c ^ d ^ f) + e[0] + 3936430074 & 4294967295;g = c + (h << 11 & 4294967295 | h >>> 21);h = f + (g ^ c ^ d) + e[3] + 3572445317 & 4294967295;f = g + (h << 16 & 4294967295 | h >>> 16);h = d + (f ^ g ^ c) + e[6] + 76029189 & 4294967295;d = f + (h << 23 & 4294967295 | h >>> 9);h = c + (d ^ f ^ g) + e[9] + 3654602809 & 4294967295;c = d + (h << 4 & 4294967295 | h >>> 28);h = g + (c ^ d ^ f) + e[12] + 3873151461 & 4294967295;
    g = c + (h << 11 & 4294967295 | h >>> 21);h = f + (g ^ c ^ d) + e[15] + 530742520 & 4294967295;f = g + (h << 16 & 4294967295 | h >>> 16);h = d + (f ^ g ^ c) + e[2] + 3299628645 & 4294967295;d = f + (h << 23 & 4294967295 | h >>> 9);h = c + (f ^ (d | ~g)) + e[0] + 4096336452 & 4294967295;c = d + (h << 6 & 4294967295 | h >>> 26);h = g + (d ^ (c | ~f)) + e[7] + 1126891415 & 4294967295;g = c + (h << 10 & 4294967295 | h >>> 22);h = f + (c ^ (g | ~d)) + e[14] + 2878612391 & 4294967295;f = g + (h << 15 & 4294967295 | h >>> 17);h = d + (g ^ (f | ~c)) + e[5] + 4237533241 & 4294967295;d = f + (h << 21 & 4294967295 | h >>> 11);h = c + (f ^ (d | ~g)) + e[12] + 1700485571 & 4294967295;c = d + (h << 6 & 4294967295 | h >>> 26);h = g + (d ^ (c | ~f)) + e[3] + 2399980690 & 4294967295;g = c + (h << 10 & 4294967295 | h >>> 22);h = f + (c ^ (g | ~d)) + e[10] + 4293915773 & 4294967295;f = g + (h << 15 & 4294967295 | h >>> 17);h = d + (g ^ (f | ~c)) + e[1] + 2240044497 & 4294967295;d = f + (h << 21 & 4294967295 | h >>> 11);h = c + (f ^ (d | ~g)) + e[8] + 1873313359 & 4294967295;c = d + (h << 6 & 4294967295 | h >>> 26);h = g + (d ^ (c | ~f)) + e[15] + 4264355552 & 4294967295;g = c + (h << 10 & 4294967295 | h >>> 22);h = f + (c ^ (g | ~d)) + e[6] + 2734768916 & 4294967295;f = g + (h << 15 & 4294967295 | h >>> 17);h = d + (g ^ (f | ~c)) + e[13] + 1309151649 & 4294967295;
    d = f + (h << 21 & 4294967295 | h >>> 11);h = c + (f ^ (d | ~g)) + e[4] + 4149444226 & 4294967295;c = d + (h << 6 & 4294967295 | h >>> 26);h = g + (d ^ (c | ~f)) + e[11] + 3174756917 & 4294967295;g = c + (h << 10 & 4294967295 | h >>> 22);h = f + (c ^ (g | ~d)) + e[2] + 718787259 & 4294967295;f = g + (h << 15 & 4294967295 | h >>> 17);h = d + (g ^ (f | ~c)) + e[9] + 3951481745 & 4294967295;a.b[0] = a.b[0] + c & 4294967295;a.b[1] = a.b[1] + (f + (h << 21 & 4294967295 | h >>> 11)) & 4294967295;a.b[2] = a.b[2] + f & 4294967295;a.b[3] = a.b[3] + g & 4294967295;
  }
  function Yh(a, c) {
    var d;void 0 === d && (d = c.length);for (var e = d - a.a, f = a.f, g = a.c, h = 0; h < d;) {
      if (0 == g) for (; h <= e;) {
        Xh(a, c, h), h += a.a;
      }if (ea(c)) for (; h < d;) {
        if (f[g++] = c.charCodeAt(h++), g == a.a) {
          Xh(a, f);g = 0;break;
        }
      } else for (; h < d;) {
        if (f[g++] = c[h++], g == a.a) {
          Xh(a, f);g = 0;break;
        }
      }
    }a.c = g;a.g += d;
  };function Zh(a) {
    a = a || {};this.c = void 0 !== a.color ? a.color : null;this.Ba = a.lineCap;this.b = void 0 !== a.lineDash ? a.lineDash : null;this.Ca = a.lineJoin;this.Da = a.miterLimit;this.g = a.width;this.a = void 0;
  }Zh.prototype.fa = function () {
    return this.c;
  };Zh.prototype.getLineDash = function () {
    return this.b;
  };Zh.prototype.ga = function () {
    return this.g;
  };function $h(a) {
    a = a || {};this.h = this.a = this.f = null;this.c = void 0 !== a.fill ? a.fill : null;this.b = void 0 !== a.stroke ? a.stroke : null;this.g = a.radius;this.w = [0, 0];this.l = this.s = this.i = null;var c = a.atlasManager,
        d,
        e = null,
        f,
        g = 0;this.b && (f = Yc(this.b.fa()), g = this.b.ga(), void 0 === g && (g = 1), e = this.b.getLineDash(), Ye || (e = null));var h = 2 * (this.g + g) + 1;f = { strokeStyle: f, mc: g, size: h, lineDash: e };if (void 0 === c) c = Pe(h, h), this.a = c.canvas, d = h = this.a.width, this.Wb(f, c, 0, 0), this.c ? this.h = this.a : (c = Pe(f.size, f.size), this.h = c.canvas, this.Rb(f, c, 0, 0));else {
      h = Math.round(h);(e = !this.c) && (d = this.Rb.bind(this, f));if (this.b) {
        g = this.b;if (void 0 === g.a) {
          var k = "s" + (g.c ? Yc(g.c) : "-") + "," + (void 0 !== g.Ba ? g.Ba.toString() : "-") + "," + (g.b ? g.b.toString() : "-") + "," + (void 0 !== g.Ca ? g.Ca : "-") + "," + (void 0 !== g.Da ? g.Da.toString() : "-") + "," + (void 0 !== g.g ? g.g.toString() : "-"),
              l = new Wh();Yh(l, k);var m = Array((56 > l.c ? l.a : 2 * l.a) - l.c);m[0] = 128;for (k = 1; k < m.length - 8; ++k) {
            m[k] = 0;
          }for (var n = 8 * l.g, k = m.length - 8; k < m.length; ++k) {
            m[k] = n & 255, n /= 256;
          }Yh(l, m);m = Array(16);for (k = n = 0; 4 > k; ++k) {
            for (var p = 0; 32 > p; p += 8) {
              m[n++] = l.b[k] >>> p & 255;
            }
          }if (8192 >= m.length) l = String.fromCharCode.apply(null, m);else for (l = "", k = 0; k < m.length; k += 8192) {
            l += String.fromCharCode.apply(null, Xc(m, k, k + 8192));
          }g.a = l;
        }g = g.a;
      } else g = "-";this.c ? (l = this.c, void 0 === l.a && (l.a = l.b instanceof CanvasPattern || l.b instanceof CanvasGradient ? x(l.b).toString() : "f" + (l.b ? Yc(l.b) : "-")), l = l.a) : l = "-";this.f && g == this.f[1] && l == this.f[2] && this.g == this.f[3] || (this.f = ["c" + g + l + (void 0 !== this.g ? this.g.toString() : "-"), g, l, this.g]);c = c.add(this.f[0], h, h, this.Wb.bind(this, f), d);this.a = c.image;this.w = [c.offsetX, c.offsetY];d = c.image.width;e ? this.h = c.xe : this.h = this.a;
    }this.i = [h / 2, h / 2];this.s = [h, h];this.l = [d, d];pg.call(this, { opacity: 1, rotateWithView: !1, rotation: 0, scale: 1, snapToPixel: void 0 !== a.snapToPixel ? a.snapToPixel : !0 });
  }F($h, pg);q = $h.prototype;q.Ia = function () {
    return this.c;
  };q.ra = function () {
    return this.w;
  };q.sa = function () {
    return this.b;
  };q.load = oa;q.ge = oa;
  q.Wb = function (a, c, d, e) {
    c.setTransform(1, 0, 0, 1, 0, 0);c.translate(d, e);c.beginPath();c.arc(a.size / 2, a.size / 2, this.g, 0, 2 * Math.PI, !0);this.c && (c.fillStyle = Zc(this.c.fa()), c.fill());this.b && (c.strokeStyle = a.strokeStyle, c.lineWidth = a.mc, a.lineDash && c.setLineDash(a.lineDash), c.stroke());c.closePath();
  };
  q.Rb = function (a, c, d, e) {
    c.setTransform(1, 0, 0, 1, 0, 0);c.translate(d, e);c.beginPath();c.arc(a.size / 2, a.size / 2, this.g, 0, 2 * Math.PI, !0);c.fillStyle = Yc(Qh);c.fill();this.b && (c.strokeStyle = a.strokeStyle, c.lineWidth = a.mc, a.lineDash && c.setLineDash(a.lineDash), c.stroke());c.closePath();
  };function ai(a) {
    a = a || {};this.g = null;this.a = bi;void 0 !== a.geometry && ci(this, a.geometry);this.f = void 0 !== a.fill ? a.fill : null;this.c = void 0 !== a.image ? a.image : null;this.h = void 0 !== a.stroke ? a.stroke : null;this.pa = void 0 !== a.text ? a.text : null;this.b = a.zIndex;
  }ai.prototype.Y = function () {
    return this.g;
  };ai.prototype.Ia = function () {
    return this.f;
  };ai.prototype.sa = function () {
    return this.h;
  };
  function ci(a, c) {
    ga(c) ? a.a = c : "string" === typeof c ? a.a = function (a) {
      return a.get(c);
    } : c ? void 0 !== c && (a.a = function () {
      return c;
    }) : a.a = bi;a.g = c;
  }function di(a) {
    if (!ga(a)) {
      var c;c = Array.isArray(a) ? a : [a];a = function a() {
        return c;
      };
    }return a;
  }var ei = null;function fi() {
    if (!ei) {
      var a = new Uh({ color: "rgba(255,255,255,0.4)" }),
          c = new Zh({ color: "#3399CC", width: 1.25 });ei = [new ai({ image: new $h({ fill: a, stroke: c, radius: 5 }), fill: a, stroke: c })];
    }return ei;
  }function bi(a) {
    return a.Y();
  };function gi(a) {
    a = a ? a : {};var c = Ha({}, a);delete c.style;delete c.renderBuffer;delete c.updateWhileAnimating;delete c.updateWhileInteracting;$f.call(this, c);this.f = void 0 !== a.renderBuffer ? a.renderBuffer : 100;this.j = null;this.i = void 0;c = a.style;this.j = void 0 !== c ? c : fi;this.i = null === c ? void 0 : di(this.j);this.b();this.l = void 0 !== a.updateWhileAnimating ? a.updateWhileAnimating : !1;this.o = void 0 !== a.updateWhileInteracting ? a.updateWhileInteracting : !1;
  }F(gi, $f);function hi(a, c, d, e, f) {
    this.g = a;this.D = c;this.i = d;this.o = e;this.$a = f;this.f = this.b = this.a = this.R = this.$ = this.N = null;this.U = this.ba = this.l = this.B = this.v = this.u = 0;this.ja = !1;this.h = this.ca = 0;this.ua = !1;this.G = 0;this.c = "";this.j = this.M = this.wa = this.va = 0;this.I = this.A = this.s = null;this.w = [];this.Ma = hc();
  }F(hi, Yf);
  function ii(a, c, d) {
    if (a.f) {
      c = pc(c, 0, d, 2, a.o, a.w);d = a.g;var e = a.Ma,
          f = d.globalAlpha;1 != a.l && (d.globalAlpha = f * a.l);var g = a.ca;a.ja && (g += a.$a);var h, k;h = 0;for (k = c.length; h < k; h += 2) {
        var l = c[h] - a.u,
            m = c[h + 1] - a.v;a.ua && (l = Math.round(l), m = Math.round(m));if (0 !== g || 1 != a.h) {
          var n = l + a.u,
              p = m + a.v;dg(e, n, p, a.h, a.h, g, -n, -p);d.setTransform(e[0], e[1], e[4], e[5], e[12], e[13]);
        }d.drawImage(a.f, a.ba, a.U, a.G, a.B, l, m, a.G, a.B);
      }0 === g && 1 == a.h || d.setTransform(1, 0, 0, 1, 0, 0);1 != a.l && (d.globalAlpha = f);
    }
  }
  function ji(a, c, d, e) {
    var f = 0;if (a.I && "" !== a.c) {
      a.s && ki(a, a.s);a.A && li(a, a.A);var g = a.I,
          h = a.g,
          k = a.R;k ? (k.font != g.font && (k.font = h.font = g.font), k.textAlign != g.textAlign && (k.textAlign = h.textAlign = g.textAlign), k.textBaseline != g.textBaseline && (k.textBaseline = h.textBaseline = g.textBaseline)) : (h.font = g.font, h.textAlign = g.textAlign, h.textBaseline = g.textBaseline, a.R = { font: g.font, textAlign: g.textAlign, textBaseline: g.textBaseline });c = pc(c, f, d, e, a.o, a.w);for (g = a.g; f < d; f += e) {
        h = c[f] + a.va;k = c[f + 1] + a.wa;if (0 !== a.M || 1 != a.j) {
          var l = dg(a.Ma, h, k, a.j, a.j, a.M, -h, -k);g.setTransform(l[0], l[1], l[4], l[5], l[12], l[13]);
        }a.A && g.strokeText(a.c, h, k);a.s && g.fillText(a.c, h, k);
      }0 === a.M && 1 == a.j || g.setTransform(1, 0, 0, 1, 0, 0);
    }
  }function mi(a, c, d, e, f, g) {
    var h = a.g;a = pc(c, d, e, f, a.o, a.w);h.moveTo(a[0], a[1]);c = a.length;g && (c -= 2);for (d = 2; d < c; d += 2) {
      h.lineTo(a[d], a[d + 1]);
    }g && h.closePath();return e;
  }function ni(a, c, d, e, f) {
    var g, h;g = 0;for (h = e.length; g < h; ++g) {
      d = mi(a, c, d, e[g], f, !0);
    }return d;
  }q = hi.prototype;
  q.Qb = function (a) {
    if (Gb(this.i, a.C())) {
      if (this.a || this.b) {
        this.a && ki(this, this.a);this.b && li(this, this.b);var c;c = this.o;var d = this.w,
            e = a.L;c = e ? pc(e, 0, e.length, a.K, c, d) : null;d = c[2] - c[0];e = c[3] - c[1];d = Math.sqrt(d * d + e * e);e = this.g;e.beginPath();e.arc(c[0], c[1], d, 0, 2 * Math.PI);this.a && e.fill();this.b && e.stroke();
      }"" !== this.c && ji(this, a.X(), 2, 2);
    }
  };q.Ua = function (a) {
    var c = a.L;a = a.K;this.f && ii(this, c, c.length);"" !== this.c && ji(this, c, c.length, a);
  };
  q.Ta = function (a) {
    var c = a.L;a = a.K;this.f && ii(this, c, c.length);"" !== this.c && ji(this, c, c.length, a);
  };q.Sb = function (a) {
    if (Gb(this.i, a.C())) {
      if (this.b) {
        li(this, this.b);var c = this.g,
            d = a.L;c.beginPath();mi(this, d, 0, d.length, a.K, !1);c.stroke();
      }"" !== this.c && (a = a.Ic(), ji(this, a, 2, 2));
    }
  };
  q.Tb = function (a) {
    var c = a.C();if (Gb(this.i, c)) {
      if (this.b) {
        li(this, this.b);var c = this.g,
            d = a.L,
            e = 0,
            f = a.aa,
            g = a.K;c.beginPath();var h, k;h = 0;for (k = f.length; h < k; ++h) {
          e = mi(this, d, e, f[h], g, !1);
        }c.stroke();
      }"" !== this.c && (a = a.Jc(), ji(this, a, a.length, 2));
    }
  };q.Vb = function (a) {
    if (Gb(this.i, a.C())) {
      if (this.b || this.a) {
        this.a && ki(this, this.a);this.b && li(this, this.b);var c = this.g;c.beginPath();ni(this, zc(a), 0, a.aa, a.K);this.a && c.fill();this.b && c.stroke();
      }"" !== this.c && (a = Ac(a), ji(this, a, 2, 2));
    }
  };
  q.Ub = function (a) {
    if (Gb(this.i, a.C())) {
      if (this.b || this.a) {
        this.a && ki(this, this.a);this.b && li(this, this.b);var c = this.g,
            d = zc(a),
            e = 0,
            f = a.Gc(),
            g = a.K,
            h,
            k;h = 0;for (k = f.length; h < k; ++h) {
          var l = f[h];c.beginPath();e = ni(this, d, e, l, g);this.a && c.fill();this.b && c.stroke();
        }
      }"" !== this.c && (a = a.Hc(), ji(this, a, a.length, 2));
    }
  };function ki(a, c) {
    var d = a.g,
        e = a.N;e ? e.fillStyle != c.fillStyle && (e.fillStyle = d.fillStyle = c.fillStyle) : (d.fillStyle = c.fillStyle, a.N = { fillStyle: c.fillStyle });
  }
  function li(a, c) {
    var d = a.g,
        e = a.$;e ? (e.lineCap != c.lineCap && (e.lineCap = d.lineCap = c.lineCap), Ye && !fb(e.lineDash, c.lineDash) && d.setLineDash(e.lineDash = c.lineDash), e.lineJoin != c.lineJoin && (e.lineJoin = d.lineJoin = c.lineJoin), e.lineWidth != c.lineWidth && (e.lineWidth = d.lineWidth = c.lineWidth), e.miterLimit != c.miterLimit && (e.miterLimit = d.miterLimit = c.miterLimit), e.strokeStyle != c.strokeStyle && (e.strokeStyle = d.strokeStyle = c.strokeStyle)) : (d.lineCap = c.lineCap, Ye && d.setLineDash(c.lineDash), d.lineJoin = c.lineJoin, d.lineWidth = c.lineWidth, d.miterLimit = c.miterLimit, d.strokeStyle = c.strokeStyle, a.$ = { lineCap: c.lineCap, lineDash: c.lineDash, lineJoin: c.lineJoin, lineWidth: c.lineWidth, miterLimit: c.miterLimit, strokeStyle: c.strokeStyle });
  }
  q.Ea = function (a, c) {
    if (a) {
      var d = a.fa();this.a = { fillStyle: Zc(d ? d : Qh) };
    } else this.a = null;if (c) {
      var d = c.fa(),
          e = c.Ba,
          f = c.getLineDash(),
          g = c.Ca,
          h = c.ga(),
          k = c.Da;this.b = { lineCap: void 0 !== e ? e : "round", lineDash: f ? f : Rh, lineJoin: void 0 !== g ? g : "round", lineWidth: this.D * (void 0 !== h ? h : 1), miterLimit: void 0 !== k ? k : 10, strokeStyle: Yc(d ? d : Sh) };
    } else this.b = null;
  };
  q.Fa = function (a) {
    if (a) {
      var c = a.i,
          d = a.a,
          e = a.ra(),
          f = a.s;this.u = c[0];this.v = c[1];this.B = f[1];this.f = d;this.l = a.j;this.ba = e[0];this.U = e[1];this.ja = a.A;this.ca = a.P();this.h = a.Xa;this.ua = a.D;this.G = f[0];
    } else this.f = null;
  };
  q.ta = function (a) {
    if (a) {
      var c = a.Ia();c ? (c = c.fa(), this.s = { fillStyle: Zc(c ? c : Qh) }) : this.s = null;var d = a.sa();if (d) {
        var c = d.fa(),
            e = d.Ba,
            f = d.getLineDash(),
            g = d.Ca,
            h = d.ga(),
            d = d.Da;this.A = { lineCap: void 0 !== e ? e : "round", lineDash: f ? f : Rh, lineJoin: void 0 !== g ? g : "round", lineWidth: void 0 !== h ? h : 1, miterLimit: void 0 !== d ? d : 10, strokeStyle: Yc(c ? c : Sh) };
      } else this.A = null;var c = a.Kc(),
          e = a.Lc(),
          f = a.Mc(),
          g = a.P(),
          h = a.Xa,
          d = a.pa,
          k = a.Nc();a = a.Oc();this.I = { font: void 0 !== c ? c : "10px sans-serif", textAlign: void 0 !== k ? k : "center", textBaseline: void 0 !== a ? a : "middle" };this.c = void 0 !== d ? d : "";this.va = void 0 !== e ? this.D * e : 0;this.wa = void 0 !== f ? this.D * f : 0;this.M = void 0 !== g ? g : 0;this.j = this.D * (void 0 !== h ? h : 1);
    } else this.c = "";
  };function oi(a) {
    fg.call(this, a);this.N = hc();
  }F(oi, fg);
  oi.prototype.i = function (a, c, d) {
    pi(this, "precompose", d, a, void 0);var e = this.c ? this.c.a() : null;if (e) {
      var f = c.extent,
          g = void 0 !== f;if (g) {
        var h = a.pixelRatio,
            k = a.size[0] * h,
            l = a.size[1] * h,
            m = a.viewState.rotation,
            n = Hb(f),
            p = [f[2], f[3]],
            r = [f[2], f[1]],
            f = Cb(f);eg(a.coordinateToPixelMatrix, n, n);eg(a.coordinateToPixelMatrix, p, p);eg(a.coordinateToPixelMatrix, r, r);eg(a.coordinateToPixelMatrix, f, f);d.save();Th(d, -m, k / 2, l / 2);d.beginPath();d.moveTo(n[0] * h, n[1] * h);d.lineTo(p[0] * h, p[1] * h);d.lineTo(r[0] * h, r[1] * h);d.lineTo(f[0] * h, f[1] * h);d.clip();Th(d, m, k / 2, l / 2);
      }h = this.D;k = d.globalAlpha;d.globalAlpha = c.opacity;d.drawImage(e, 0, 0, +e.width, +e.height, Math.round(h[12]), Math.round(h[13]), Math.round(e.width * h[0]), Math.round(e.height * h[5]));d.globalAlpha = k;g && d.restore();
    }pi(this, "postcompose", d, a, void 0);
  };
  function pi(a, c, d, e, f) {
    var g = a.a;if (Za(g, c)) {
      var h = e.size[0] * e.pixelRatio,
          k = e.size[1] * e.pixelRatio,
          l = e.viewState.rotation;Th(d, -l, h / 2, k / 2);a = void 0 !== f ? f : qi(a, e, 0);a = new hi(d, e.pixelRatio, e.extent, a, e.viewState.rotation);S(g, new Zf(c, g, a, e, d, null));Th(d, l, h / 2, k / 2);
    }
  }function qi(a, c, d) {
    var e = c.viewState,
        f = c.pixelRatio;return dg(a.N, f * c.size[0] / 2, f * c.size[1] / 2, f / e.resolution, -f / e.resolution, -e.rotation, -e.center[0] + d, -e.center[1]);
  };var ri = ["Polygon", "LineString", "Image", "Text"];function si(a, c, d) {
    this.ca = a;this.$ = c;this.f = null;this.i = 0;this.resolution = d;this.I = this.G = null;this.a = [];this.c = [];this.ba = hc();this.b = [];this.R = [];this.U = hc();this.ja = hc();
  }F(si, Yf);
  function ti(a, c, d, e, f, g) {
    var h = a.c.length,
        k = a.qb(),
        l = [c[d], c[d + 1]],
        m = [NaN, NaN],
        n = !0,
        p,
        r,
        t;for (p = d + f; p < e; p += f) {
      m[0] = c[p];m[1] = c[p + 1];t = k[1];var u = k[2],
          y = k[3],
          A = m[0],
          C = m[1],
          w = 0;A < k[0] ? w |= 16 : A > u && (w |= 4);C < t ? w |= 8 : C > y && (w |= 2);0 === w && (w = 1);t = w;t !== r ? (n && (a.c[h++] = l[0], a.c[h++] = l[1]), a.c[h++] = m[0], a.c[h++] = m[1], n = !1) : 1 === t ? (a.c[h++] = m[0], a.c[h++] = m[1], n = !1) : n = !0;l[0] = m[0];l[1] = m[1];r = t;
    }p === d + f && (a.c[h++] = l[0], a.c[h++] = l[1]);g && (a.c[h++] = c[d], a.c[h++] = c[d + 1]);return h;
  }
  function ui(a, c) {
    a.G = [0, c, 0];a.a.push(a.G);a.I = [0, c, 0];a.b.push(a.I);
  }
  function vi(a, c, d, e, f, g, h, k, l) {
    var m;m = a.ba;if (e[0] == m[0] && e[1] == m[1] && e[4] == m[4] && e[5] == m[5] && e[12] == m[12] && e[13] == m[13]) m = a.R;else {
      m = pc(a.c, 0, a.c.length, 2, e, a.R);var n = a.ba;n[0] = e[0];n[1] = e[1];n[2] = e[2];n[3] = e[3];n[4] = e[4];n[5] = e[5];n[6] = e[6];n[7] = e[7];n[8] = e[8];n[9] = e[9];n[10] = e[10];n[11] = e[11];n[12] = e[12];n[13] = e[13];n[14] = e[14];n[15] = e[15];
    }e = !Ka(g);var n = 0,
        p = h.length,
        r,
        t,
        u = a.U;a = a.ja;for (var y, A, C, w; n < p;) {
      var v = h[n],
          D,
          E,
          H,
          G;switch (v[0]) {case 0:
          r = v[1];e && g[x(r).toString()] || !r.Y() ? n = v[2] : void 0 === l || Gb(l, r.Y().C()) ? ++n : n = v[2];break;case 1:
          c.beginPath();++n;break;case 2:
          r = v[1];t = m[r];v = m[r + 1];C = m[r + 2] - t;r = m[r + 3] - v;c.arc(t, v, Math.sqrt(C * C + r * r), 0, 2 * Math.PI, !0);++n;break;case 3:
          c.closePath();++n;break;case 4:
          r = v[1];t = v[2];D = v[3];H = v[4] * d;var O = v[5] * d,
              z = v[6];E = v[7];var I = v[8],
              N = v[9];C = v[11];w = v[12];var J = v[13],
              P = v[14];for (v[10] && (C += f); r < t; r += 2) {
            v = m[r] - H;G = m[r + 1] - O;J && (v = Math.round(v), G = Math.round(G));if (1 != w || 0 !== C) {
              var M = v + H,
                  wa = G + O;dg(u, M, wa, w, w, C, -M, -wa);c.transform(u[0], u[1], u[4], u[5], u[12], u[13]);
            }M = c.globalAlpha;1 != E && (c.globalAlpha = M * E);var wa = P + I > D.width ? D.width - I : P,
                de = z + N > D.height ? D.height - N : z;c.drawImage(D, I, N, wa, de, v, G, wa * d, de * d);1 != E && (c.globalAlpha = M);if (1 != w || 0 !== C) lc(u, a), c.transform(a[0], a[1], a[4], a[5], a[12], a[13]);
          }++n;break;case 5:
          r = v[1];t = v[2];H = v[3];O = v[4] * d;z = v[5] * d;C = v[6];w = v[7] * d;D = v[8];for (E = v[9]; r < t; r += 2) {
            v = m[r] + O;G = m[r + 1] + z;if (1 != w || 0 !== C) dg(u, v, G, w, w, C, -v, -G), c.transform(u[0], u[1], u[4], u[5], u[12], u[13]);I = H.split("\n");N = I.length;1 < N ? (J = Math.round(1.5 * c.measureText("M").width), G -= (N - 1) / 2 * J) : J = 0;for (P = 0; P < N; P++) {
              M = I[P], E && c.strokeText(M, v, G), D && c.fillText(M, v, G), G += J;
            }if (1 != w || 0 !== C) lc(u, a), c.transform(a[0], a[1], a[4], a[5], a[12], a[13]);
          }++n;break;case 6:
          if (void 0 !== k && (r = v[1], r = k(r))) return r;++n;break;case 7:
          c.fill();++n;break;case 8:
          r = v[1];t = v[2];v = m[r];G = m[r + 1];C = v + .5 | 0;w = G + .5 | 0;if (C !== y || w !== A) c.moveTo(v, G), y = C, A = w;for (r += 2; r < t; r += 2) {
            if (v = m[r], G = m[r + 1], C = v + .5 | 0, w = G + .5 | 0, C !== y || w !== A) c.lineTo(v, G), y = C, A = w;
          }++n;break;case 9:
          c.fillStyle = v[1];++n;break;case 10:
          y = void 0 !== v[7] ? v[7] : !0;A = v[2];c.strokeStyle = v[1];c.lineWidth = y ? A * d : A;c.lineCap = v[3];c.lineJoin = v[4];c.miterLimit = v[5];Ye && c.setLineDash(v[6]);A = y = NaN;++n;break;case 11:
          c.font = v[1];c.textAlign = v[2];c.textBaseline = v[3];++n;break;case 12:
          c.stroke();++n;break;default:
          ++n;}
    }
  }si.prototype.h = function (a, c, d, e, f) {
    vi(this, a, c, d, e, f, this.a, void 0);
  };
  function wi(a) {
    var c = a.b;c.reverse();var d,
        e = c.length,
        f,
        g,
        h = -1;for (d = 0; d < e; ++d) {
      if (f = c[d], g = f[0], 6 == g) h = d;else if (0 == g) {
        f[2] = d;f = a.b;for (g = d; h < g;) {
          var k = f[h];f[h] = f[g];f[g] = k;++h;--g;
        }h = -1;
      }
    }
  }function xi(a, c) {
    a.G[2] = a.a.length;a.G = null;a.I[2] = a.b.length;a.I = null;var d = [6, c];a.a.push(d);a.b.push(d);
  }si.prototype.hb = oa;si.prototype.qb = function () {
    return this.$;
  };function yi(a, c, d) {
    si.call(this, a, c, d);this.A = this.N = null;this.B = this.v = this.u = this.o = this.M = this.D = this.w = this.l = this.j = this.s = this.g = void 0;
  }
  F(yi, si);yi.prototype.Ua = function (a, c) {
    if (this.A) {
      ui(this, c);var d = a.L,
          e = this.c.length,
          d = ti(this, d, 0, d.length, a.K, !1);this.a.push([4, e, d, this.A, this.g, this.s, this.j, this.l, this.w, this.D, this.M, this.o, this.u, this.v, this.B]);this.b.push([4, e, d, this.N, this.g, this.s, this.j, this.l, this.w, this.D, this.M, this.o, this.u, this.v, this.B]);xi(this, c);
    }
  };
  yi.prototype.Ta = function (a, c) {
    if (this.A) {
      ui(this, c);var d = a.L,
          e = this.c.length,
          d = ti(this, d, 0, d.length, a.K, !1);this.a.push([4, e, d, this.A, this.g, this.s, this.j, this.l, this.w, this.D, this.M, this.o, this.u, this.v, this.B]);this.b.push([4, e, d, this.N, this.g, this.s, this.j, this.l, this.w, this.D, this.M, this.o, this.u, this.v, this.B]);xi(this, c);
    }
  };yi.prototype.hb = function () {
    wi(this);this.s = this.g = void 0;this.A = this.N = null;this.B = this.v = this.o = this.M = this.D = this.w = this.l = this.u = this.j = void 0;
  };
  yi.prototype.Fa = function (a) {
    var c = a.i,
        d = a.s,
        e = a.h,
        f = a.a,
        g = a.ra();this.g = c[0];this.s = c[1];this.N = e;this.A = f;this.j = d[1];this.l = a.j;this.w = g[0];this.D = g[1];this.M = a.A;this.o = a.P();this.u = a.Xa;this.v = a.D;this.B = d[0];
  };function zi(a, c, d) {
    si.call(this, a, c, d);this.g = { Sa: void 0, Na: void 0, Oa: null, Pa: void 0, Qa: void 0, Ra: void 0, vb: 0, strokeStyle: void 0, lineCap: void 0, lineDash: null, lineJoin: void 0, lineWidth: void 0, miterLimit: void 0 };
  }F(zi, si);
  function Ai(a, c, d, e, f) {
    var g = a.c.length;c = ti(a, c, d, e, f, !1);g = [8, g, c];a.a.push(g);a.b.push(g);return e;
  }q = zi.prototype;q.qb = function () {
    this.f || (this.f = ub(this.$), 0 < this.i && tb(this.f, this.resolution * (this.i + 1) / 2, this.f));return this.f;
  };
  function Bi(a) {
    var c = a.g,
        d = c.strokeStyle,
        e = c.lineCap,
        f = c.lineDash,
        g = c.lineJoin,
        h = c.lineWidth,
        k = c.miterLimit;c.Sa == d && c.Na == e && fb(c.Oa, f) && c.Pa == g && c.Qa == h && c.Ra == k || (c.vb != a.c.length && (a.a.push([12]), c.vb = a.c.length), a.a.push([10, d, h, e, g, k, f], [1]), c.Sa = d, c.Na = e, c.Oa = f, c.Pa = g, c.Qa = h, c.Ra = k);
  }
  q.Sb = function (a, c) {
    var d = this.g,
        e = d.lineWidth;void 0 !== d.strokeStyle && void 0 !== e && (Bi(this), ui(this, c), this.b.push([10, d.strokeStyle, d.lineWidth, d.lineCap, d.lineJoin, d.miterLimit, d.lineDash], [1]), d = a.L, Ai(this, d, 0, d.length, a.K), this.b.push([12]), xi(this, c));
  };
  q.Tb = function (a, c) {
    var d = this.g,
        e = d.lineWidth;if (void 0 !== d.strokeStyle && void 0 !== e) {
      Bi(this);ui(this, c);this.b.push([10, d.strokeStyle, d.lineWidth, d.lineCap, d.lineJoin, d.miterLimit, d.lineDash], [1]);var d = a.aa,
          e = a.L,
          f = a.K,
          g = 0,
          h,
          k;h = 0;for (k = d.length; h < k; ++h) {
        g = Ai(this, e, g, d[h], f);
      }this.b.push([12]);xi(this, c);
    }
  };q.hb = function () {
    this.g.vb != this.c.length && this.a.push([12]);wi(this);this.g = null;
  };
  q.Ea = function (a, c) {
    var d = c.fa();this.g.strokeStyle = Yc(d ? d : Sh);d = c.Ba;this.g.lineCap = void 0 !== d ? d : "round";d = c.getLineDash();this.g.lineDash = d ? d : Rh;d = c.Ca;this.g.lineJoin = void 0 !== d ? d : "round";d = c.ga();this.g.lineWidth = void 0 !== d ? d : 1;d = c.Da;this.g.miterLimit = void 0 !== d ? d : 10;this.g.lineWidth > this.i && (this.i = this.g.lineWidth, this.f = null);
  };
  function Ci(a, c, d) {
    si.call(this, a, c, d);this.g = { Pb: void 0, Sa: void 0, Na: void 0, Oa: null, Pa: void 0, Qa: void 0, Ra: void 0, fillStyle: void 0, strokeStyle: void 0, lineCap: void 0, lineDash: null, lineJoin: void 0, lineWidth: void 0, miterLimit: void 0 };
  }F(Ci, si);
  function Di(a, c, d, e, f) {
    var g = a.g,
        h = [1];a.a.push(h);a.b.push(h);var k,
        h = 0;for (k = e.length; h < k; ++h) {
      var l = e[h],
          m = a.c.length;d = ti(a, c, d, l, f, !0);d = [8, m, d];m = [3];a.a.push(d, m);a.b.push(d, m);d = l;
    }c = [7];a.b.push(c);void 0 !== g.fillStyle && a.a.push(c);void 0 !== g.strokeStyle && (g = [12], a.a.push(g), a.b.push(g));return d;
  }q = Ci.prototype;
  q.Qb = function (a, c) {
    var d = this.g,
        e = d.strokeStyle;if (void 0 !== d.fillStyle || void 0 !== e) {
      Ei(this);ui(this, c);this.b.push([9, Yc(Qh)]);void 0 !== d.strokeStyle && this.b.push([10, d.strokeStyle, d.lineWidth, d.lineCap, d.lineJoin, d.miterLimit, d.lineDash]);var f = a.L,
          e = this.c.length;ti(this, f, 0, f.length, a.K, !1);f = [1];e = [2, e];this.a.push(f, e);this.b.push(f, e);e = [7];this.b.push(e);void 0 !== d.fillStyle && this.a.push(e);void 0 !== d.strokeStyle && (d = [12], this.a.push(d), this.b.push(d));xi(this, c);
    }
  };
  q.Vb = function (a, c) {
    var d = this.g,
        e = d.strokeStyle;if (void 0 !== d.fillStyle || void 0 !== e) Ei(this), ui(this, c), this.b.push([9, Yc(Qh)]), void 0 !== d.strokeStyle && this.b.push([10, d.strokeStyle, d.lineWidth, d.lineCap, d.lineJoin, d.miterLimit, d.lineDash]), d = a.aa, e = zc(a), Di(this, e, 0, d, a.K), xi(this, c);
  };
  q.Ub = function (a, c) {
    var d = this.g,
        e = d.strokeStyle;if (void 0 !== d.fillStyle || void 0 !== e) {
      Ei(this);ui(this, c);this.b.push([9, Yc(Qh)]);void 0 !== d.strokeStyle && this.b.push([10, d.strokeStyle, d.lineWidth, d.lineCap, d.lineJoin, d.miterLimit, d.lineDash]);var d = a.Gc(),
          e = zc(a),
          f = a.K,
          g = 0,
          h,
          k;h = 0;for (k = d.length; h < k; ++h) {
        g = Di(this, e, g, d[h], f);
      }xi(this, c);
    }
  };q.hb = function () {
    wi(this);this.g = null;var a = this.ca;if (0 !== a) {
      var c = this.c,
          d,
          e;d = 0;for (e = c.length; d < e; ++d) {
        c[d] = a * Math.round(c[d] / a);
      }
    }
  };
  q.qb = function () {
    this.f || (this.f = ub(this.$), 0 < this.i && tb(this.f, this.resolution * (this.i + 1) / 2, this.f));return this.f;
  };
  q.Ea = function (a, c) {
    var d = this.g;if (a) {
      var e = a.fa();d.fillStyle = Zc(e ? e : Qh);
    } else d.fillStyle = void 0;c ? (e = c.fa(), d.strokeStyle = Yc(e ? e : Sh), e = c.Ba, d.lineCap = void 0 !== e ? e : "round", e = c.getLineDash(), d.lineDash = e ? e.slice() : Rh, e = c.Ca, d.lineJoin = void 0 !== e ? e : "round", e = c.ga(), d.lineWidth = void 0 !== e ? e : 1, e = c.Da, d.miterLimit = void 0 !== e ? e : 10, d.lineWidth > this.i && (this.i = d.lineWidth, this.f = null)) : (d.strokeStyle = void 0, d.lineCap = void 0, d.lineDash = null, d.lineJoin = void 0, d.lineWidth = void 0, d.miterLimit = void 0);
  };
  function Ei(a) {
    var c = a.g,
        d = c.fillStyle,
        e = c.strokeStyle,
        f = c.lineCap,
        g = c.lineDash,
        h = c.lineJoin,
        k = c.lineWidth,
        l = c.miterLimit;void 0 !== d && c.Pb != d && (a.a.push([9, d]), c.Pb = c.fillStyle);void 0 === e || c.Sa == e && c.Na == f && c.Oa == g && c.Pa == h && c.Qa == k && c.Ra == l || (a.a.push([10, e, k, f, h, l, g]), c.Sa = e, c.Na = f, c.Oa = g, c.Pa = h, c.Qa = k, c.Ra = l);
  }function Fi(a, c, d) {
    si.call(this, a, c, d);this.v = this.u = this.o = null;this.A = "";this.M = this.D = this.w = this.l = 0;this.j = this.s = this.g = null;
  }F(Fi, si);
  function Gi(a, c, d, e, f) {
    if ("" !== a.A && a.j && (a.g || a.s)) {
      if (a.g) {
        var g = a.g,
            h = a.o;if (!h || h.fillStyle != g.fillStyle) {
          var k = [9, g.fillStyle];a.a.push(k);a.b.push(k);h ? h.fillStyle = g.fillStyle : a.o = { fillStyle: g.fillStyle };
        }
      }a.s && (g = a.s, h = a.u, h && h.lineCap == g.lineCap && h.lineDash == g.lineDash && h.lineJoin == g.lineJoin && h.lineWidth == g.lineWidth && h.miterLimit == g.miterLimit && h.strokeStyle == g.strokeStyle || (k = [10, g.strokeStyle, g.lineWidth, g.lineCap, g.lineJoin, g.miterLimit, g.lineDash, !1], a.a.push(k), a.b.push(k), h ? (h.lineCap = g.lineCap, h.lineDash = g.lineDash, h.lineJoin = g.lineJoin, h.lineWidth = g.lineWidth, h.miterLimit = g.miterLimit, h.strokeStyle = g.strokeStyle) : a.u = { lineCap: g.lineCap, lineDash: g.lineDash, lineJoin: g.lineJoin, lineWidth: g.lineWidth, miterLimit: g.miterLimit, strokeStyle: g.strokeStyle }));g = a.j;h = a.v;h && h.font == g.font && h.textAlign == g.textAlign && h.textBaseline == g.textBaseline || (k = [11, g.font, g.textAlign, g.textBaseline], a.a.push(k), a.b.push(k), h ? (h.font = g.font, h.textAlign = g.textAlign, h.textBaseline = g.textBaseline) : a.v = { font: g.font, textAlign: g.textAlign, textBaseline: g.textBaseline });ui(a, f);g = a.c.length;c = ti(a, c, 0, d, e, !1);c = [5, g, c, a.A, a.l, a.w, a.D, a.M, !!a.g, !!a.s];a.a.push(c);a.b.push(c);xi(a, f);
    }
  }
  Fi.prototype.ta = function (a) {
    if (a) {
      var c = a.Ia();c ? (c = c.fa(), c = Zc(c ? c : Qh), this.g ? this.g.fillStyle = c : this.g = { fillStyle: c }) : this.g = null;var d = a.sa();if (d) {
        var c = d.fa(),
            e = d.Ba,
            f = d.getLineDash(),
            g = d.Ca,
            h = d.ga(),
            d = d.Da,
            e = void 0 !== e ? e : "round",
            f = f ? f.slice() : Rh,
            g = void 0 !== g ? g : "round",
            h = void 0 !== h ? h : 1,
            d = void 0 !== d ? d : 10,
            c = Yc(c ? c : Sh);if (this.s) {
          var k = this.s;k.lineCap = e;k.lineDash = f;k.lineJoin = g;k.lineWidth = h;k.miterLimit = d;k.strokeStyle = c;
        } else this.s = { lineCap: e, lineDash: f, lineJoin: g, lineWidth: h, miterLimit: d, strokeStyle: c };
      } else this.s = null;var l = a.Kc(),
          c = a.Lc(),
          e = a.Mc(),
          f = a.P(),
          h = a.Xa,
          d = a.pa,
          g = a.Nc(),
          k = a.Oc();a = void 0 !== l ? l : "10px sans-serif";g = void 0 !== g ? g : "center";k = void 0 !== k ? k : "middle";this.j ? (l = this.j, l.font = a, l.textAlign = g, l.textBaseline = k) : this.j = { font: a, textAlign: g, textBaseline: k };this.A = void 0 !== d ? d : "";this.l = void 0 !== c ? c : 0;this.w = void 0 !== e ? e : 0;this.D = void 0 !== f ? f : 0;this.M = void 0 !== h ? h : 1;
    } else this.A = "";
  };function Hi(a, c, d, e) {
    this.A = a;this.g = c;this.j = d;this.f = e;this.a = {};this.i = Pe(1, 1);this.s = hc();
  }
  function Ii(a) {
    for (var c in a.a) {
      var d = a.a[c],
          e;for (e in d) {
        d[e].hb();
      }
    }
  }Hi.prototype.W = function (a, c, d, e, f) {
    var g = this.s;dg(g, .5, .5, 1 / c, -1 / c, -d, -a[0], -a[1]);var h = this.i;h.clearRect(0, 0, 1, 1);var k;void 0 !== this.f && (k = rb(), sb(k, a), tb(k, c * this.f, k));return Ji(this, h, g, d, e, function (a) {
      if (0 < h.getImageData(0, 0, 1, 1).data[3]) {
        if (a = f(a)) return a;h.clearRect(0, 0, 1, 1);
      }
    }, k);
  };
  Hi.prototype.b = function (a, c) {
    var d = void 0 !== a ? a.toString() : "0",
        e = this.a[d];void 0 === e && (e = {}, this.a[d] = e);d = e[c];void 0 === d && (d = new Ki[c](this.A, this.g, this.j), e[c] = d);return d;
  };Hi.prototype.c = function () {
    return Ka(this.a);
  };
  Hi.prototype.h = function (a, c, d, e, f, g) {
    var h = Object.keys(this.a).map(Number);h.sort(cb);var k = this.g,
        l = k[0],
        m = k[1],
        n = k[2],
        k = k[3],
        l = [l, m, l, k, n, k, n, m];pc(l, 0, 8, 2, d, l);a.save();a.beginPath();a.moveTo(l[0], l[1]);a.lineTo(l[2], l[3]);a.lineTo(l[4], l[5]);a.lineTo(l[6], l[7]);a.closePath();a.clip();g = g ? g : ri;for (var p, r, l = 0, m = h.length; l < m; ++l) {
      for (p = this.a[h[l].toString()], n = 0, k = g.length; n < k; ++n) {
        r = p[g[n]], void 0 !== r && r.h(a, c, d, e, f);
      }
    }a.restore();
  };
  function Ji(a, c, d, e, f, g, h) {
    var k = Object.keys(a.a).map(Number);k.sort(function (a, c) {
      return c - a;
    });var l, m, n, p, r;l = 0;for (m = k.length; l < m; ++l) {
      for (p = a.a[k[l].toString()], n = ri.length - 1; 0 <= n; --n) {
        if (r = p[ri[n]], void 0 !== r && (r = vi(r, c, 1, d, e, f, r.b, g, h))) return r;
      }
    }
  }var Ki = { Image: yi, LineString: zi, Polygon: Ci, Text: Fi };function Li(a, c) {
    return x(a) - x(c);
  }function Mi(a, c) {
    var d = .5 * a / c;return d * d;
  }function Ni(a, c, d, e, f, g) {
    var h;(h = d.c) && h.ge(f, g);if (f = (0, d.a)(c)) e = sc(f, e), (0, Oi[e.na()])(a, e, d, c);return !1;
  }
  var Oi = { Point: function Point(a, c, d, e) {
      var f = d.c;if (f) {
        var g = a.b(d.b, "Image");g.Fa(f);g.Ua(c, e);
      }if (f = d.pa) a = a.b(d.b, "Text"), a.ta(f), Gi(a, c.L, 2, 2, e);
    }, LineString: function LineString(a, c, d, e) {
      var f = d.sa();if (f) {
        var g = a.b(d.b, "LineString");g.Ea(null, f);g.Sb(c, e);
      }if (f = d.pa) a = a.b(d.b, "Text"), a.ta(f), Gi(a, c.Ic(), 2, 2, e);
    }, Polygon: function Polygon(a, c, d, e) {
      var f = d.Ia(),
          g = d.sa();if (f || g) {
        var h = a.b(d.b, "Polygon");h.Ea(f, g);h.Vb(c, e);
      }if (f = d.pa) a = a.b(d.b, "Text"), a.ta(f), Gi(a, Ac(c), 2, 2, e);
    }, MultiPoint: function MultiPoint(a, c, d, e) {
      var f = d.c;if (f) {
        var g = a.b(d.b, "Image");g.Fa(f);g.Ta(c, e);
      }if (f = d.pa) a = a.b(d.b, "Text"), a.ta(f), d = c.L, Gi(a, d, d.length, c.K, e);
    }, MultiLineString: function MultiLineString(a, c, d, e) {
      var f = d.sa();if (f) {
        var g = a.b(d.b, "LineString");g.Ea(null, f);g.Tb(c, e);
      }if (f = d.pa) a = a.b(d.b, "Text"), a.ta(f), c = c.Jc(), Gi(a, c, c.length, 2, e);
    }, MultiPolygon: function MultiPolygon(a, c, d, e) {
      var f = d.Ia(),
          g = d.sa();if (g || f) {
        var h = a.b(d.b, "Polygon");h.Ea(f, g);h.Ub(c, e);
      }if (f = d.pa) a = a.b(d.b, "Text"), a.ta(f), c = c.Hc(), Gi(a, c, c.length, 2, e);
    }, GeometryCollection: function GeometryCollection(a, c, d, e) {
      c = c.we();var f, g;f = 0;for (g = c.length; f < g; ++f) {
        (0, Oi[c[f].na()])(a, c[f], d, e);
      }
    }, Circle: function Circle(a, c, d, e) {
      var f = d.Ia(),
          g = d.sa();if (f || g) {
        var h = a.b(d.b, "Polygon");h.Ea(f, g);h.Qb(c, e);
      }if (f = d.pa) a = a.b(d.b, "Text"), a.ta(f), Gi(a, c.X(), 2, 2, e);
    } };var Pi,
      Qi = aa.navigator,
      Ri = aa.chrome,
      Si = -1 < Qi.userAgent.indexOf("OPR"),
      Ti = -1 < Qi.userAgent.indexOf("Edge");Pi = !(!Qi.userAgent.match("CriOS") && null !== Ri && void 0 !== Ri && "Google Inc." === Qi.vendor && 0 == Si && 0 == Ti);function Ui(a, c, d, e) {
    var f;f = bc(c, a)(d, void 0, d.length);d = c.getPointResolution(e, d);c = Qb(c);void 0 !== c && (d *= c);c = Qb(a);void 0 !== c && (d /= c);a = a.getPointResolution(d, f) / d;isFinite(a) && 0 < a && (d /= a);return d;
  }
  function Vi(a, c, d, e) {
    a = d - a;c = e - c;var f = Math.sqrt(a * a + c * c);return [Math.round(d + a / f), Math.round(e + c / f)];
  }
  function Wi(a, c, d, e, f, g, h, k, l, m, n) {
    var p = Pe(Math.round(d * a), Math.round(d * c));if (0 === l.length) return p.canvas;p.scale(d, d);var r = rb();l.forEach(function (a) {
      a = a.extent;a[0] < r[0] && (r[0] = a[0]);a[2] > r[2] && (r[2] = a[2]);a[1] < r[1] && (r[1] = a[1]);a[3] > r[3] && (r[3] = a[3]);
    });var t = Pe(Math.round(d * V(r) / e), Math.round(d * Bb(r) / e)),
        u = d / e;l.forEach(function (a) {
      t.drawImage(a.image, m, m, a.image.width - 2 * m, a.image.height - 2 * m, (a.extent[0] - r[0]) * u, -(a.extent[3] - r[3]) * u, V(a.extent) * u, Bb(a.extent) * u);
    });var y = Hb(h);k.g.forEach(function (a) {
      var c = a.source,
          f = a.target,
          h = c[1][0],
          k = c[1][1],
          l = c[2][0],
          m = c[2][1];a = (f[0][0] - y[0]) / g;var u = -(f[0][1] - y[1]) / g,
          n = (f[1][0] - y[0]) / g,
          z = -(f[1][1] - y[1]) / g,
          I = (f[2][0] - y[0]) / g,
          N = -(f[2][1] - y[1]) / g,
          f = c[0][0],
          c = c[0][1],
          h = h - f,
          k = k - c,
          l = l - f,
          m = m - c;a: {
        h = [[h, k, 0, 0, n - a], [l, m, 0, 0, I - a], [0, 0, h, k, z - u], [0, 0, l, m, N - u]];k = h.length;for (l = 0; l < k; l++) {
          for (var m = l, J = Math.abs(h[l][l]), P = l + 1; P < k; P++) {
            var M = Math.abs(h[P][l]);M > J && (J = M, m = P);
          }if (0 === J) {
            h = null;break a;
          }J = h[m];h[m] = h[l];h[l] = J;for (m = l + 1; m < k; m++) {
            for (J = -h[m][l] / h[l][l], P = l; P < k + 1; P++) {
              h[m][P] = l == P ? 0 : h[m][P] + J * h[l][P];
            }
          }
        }l = Array(k);for (m = k - 1; 0 <= m; m--) {
          for (l[m] = h[m][k] / h[m][m], J = m - 1; 0 <= J; J--) {
            h[J][k] -= h[J][m] * l[m];
          }
        }h = l;
      }h && (p.save(), p.beginPath(), Pi ? (l = (a + n + I) / 3, m = (u + z + N) / 3, k = Vi(l, m, a, u), n = Vi(l, m, n, z), I = Vi(l, m, I, N), p.moveTo(k[0], k[1]), p.lineTo(n[0], n[1]), p.lineTo(I[0], I[1])) : (p.moveTo(a, u), p.lineTo(n, z), p.lineTo(I, N)), p.closePath(), p.clip(), p.transform(h[0], h[2], h[1], h[3], a, u), p.translate(r[0] - f, r[3] - c), p.scale(e / d, -e / d), p.drawImage(t.canvas, 0, 0), p.restore());
    });n && (p.save(), p.strokeStyle = "black", p.lineWidth = 1, k.g.forEach(function (a) {
      var c = a.target;a = (c[0][0] - y[0]) / g;var d = -(c[0][1] - y[1]) / g,
          e = (c[1][0] - y[0]) / g,
          f = -(c[1][1] - y[1]) / g,
          h = (c[2][0] - y[0]) / g,
          c = -(c[2][1] - y[1]) / g;p.beginPath();p.moveTo(a, d);p.lineTo(e, f);p.lineTo(h, c);p.closePath();p.stroke();
    }), p.restore());return p.canvas;
  };function Xi(a, c, d, e, f) {
    this.c = a;this.f = c;var g = {},
        h = bc(this.f, this.c);this.a = function (a) {
      var c = a[0] + "/" + a[1];g[c] || (g[c] = h(a));return g[c];
    };this.h = e;this.A = f * f;this.g = [];this.s = !1;this.j = this.c.a && !!e && !!this.c.C() && V(e) == V(this.c.C());this.b = this.c.C() ? V(this.c.C()) : null;this.i = this.f.C() ? V(this.f.C()) : null;a = Hb(d);c = [d[2], d[3]];e = [d[2], d[1]];d = Cb(d);f = this.a(a);var k = this.a(c),
        l = this.a(e),
        m = this.a(d);Yi(this, a, c, e, d, f, k, l, m, 10);if (this.s) {
      var n = Infinity;this.g.forEach(function (a) {
        n = Math.min(n, a.source[0][0], a.source[1][0], a.source[2][0]);
      });this.g.forEach(function (a) {
        if (Math.max(a.source[0][0], a.source[1][0], a.source[2][0]) - n > this.b / 2) {
          var c = [[a.source[0][0], a.source[0][1]], [a.source[1][0], a.source[1][1]], [a.source[2][0], a.source[2][1]]];c[0][0] - n > this.b / 2 && (c[0][0] -= this.b);c[1][0] - n > this.b / 2 && (c[1][0] -= this.b);c[2][0] - n > this.b / 2 && (c[2][0] -= this.b);Math.max(c[0][0], c[1][0], c[2][0]) - Math.min(c[0][0], c[1][0], c[2][0]) < this.b / 2 && (a.source = c);
        }
      }, this);
    }g = {};
  }
  function Yi(a, c, d, e, f, g, h, k, l, m) {
    var n = qb([g, h, k, l]),
        p = a.b ? V(n) / a.b : null,
        r = a.c.a && .5 < p && 1 > p,
        t = !1;if (0 < m) {
      if (a.f.c && a.i) var u = qb([c, d, e, f]),
          t = t | .25 < V(u) / a.i;!r && a.c.c && p && (t |= .25 < p);
    }if (t || !a.h || Gb(n, a.h)) {
      if (!(t || isFinite(g[0]) && isFinite(g[1]) && isFinite(h[0]) && isFinite(h[1]) && isFinite(k[0]) && isFinite(k[1]) && isFinite(l[0]) && isFinite(l[1]))) if (0 < m) t = !0;else return;if (0 < m && (t || (p = a.a([(c[0] + e[0]) / 2, (c[1] + e[1]) / 2]), n = r ? (Da(g[0], a.b) + Da(k[0], a.b)) / 2 - Da(p[0], a.b) : (g[0] + k[0]) / 2 - p[0], p = (g[1] + k[1]) / 2 - p[1], t = n * n + p * p > a.A), t)) {
        Math.abs(c[0] - e[0]) <= Math.abs(c[1] - e[1]) ? (r = [(d[0] + e[0]) / 2, (d[1] + e[1]) / 2], n = a.a(r), p = [(f[0] + c[0]) / 2, (f[1] + c[1]) / 2], t = a.a(p), Yi(a, c, d, r, p, g, h, n, t, m - 1), Yi(a, p, r, e, f, t, n, k, l, m - 1)) : (r = [(c[0] + d[0]) / 2, (c[1] + d[1]) / 2], n = a.a(r), p = [(e[0] + f[0]) / 2, (e[1] + f[1]) / 2], t = a.a(p), Yi(a, c, r, p, f, g, n, t, l, m - 1), Yi(a, r, d, e, p, n, h, k, t, m - 1));return;
      }if (r) {
        if (!a.j) return;a.s = !0;
      }a.g.push({ source: [g, k, l], target: [c, e, f] });a.g.push({ source: [g, h, k], target: [c, d, e] });
    }
  }
  function Zi(a) {
    var c = rb();a.g.forEach(function (a) {
      a = a.source;sb(c, a[0]);sb(c, a[1]);sb(c, a[2]);
    });return c;
  };function $i(a, c, d, e, f, g) {
    this.w = c;this.l = a.C();var h = c.C(),
        k = h ? Fb(d, h) : d,
        h = Ui(a, c, Db(k), e);this.i = new Xi(a, c, k, this.l, .5 * h);this.c = e;this.b = d;a = Zi(this.i);this.j = (this.ha = g(a, h, f)) ? this.ha.h : 1;this.Za = this.g = null;f = 2;g = [];this.ha && (f = 0, g = this.ha.f);bg.call(this, d, e, this.j, f, g);
  }F($i, bg);$i.prototype.O = function () {
    1 == this.state && (L(this.Za), this.Za = null);$i.S.O.call(this);
  };$i.prototype.a = function () {
    return this.g;
  };
  $i.prototype.Ya = function () {
    var a = this.ha.J();2 == a && (this.g = Wi(V(this.b) / this.c, Bb(this.b) / this.c, this.j, this.ha.H(), 0, this.c, this.b, this.i, [{ extent: this.ha.C(), image: this.ha.a() }], 0));this.state = a;cg(this);
  };$i.prototype.load = function () {
    if (0 == this.state) {
      this.state = 1;cg(this);var a = this.ha.J();2 == a || 3 == a ? this.Ya() : (this.Za = Q(this.ha, "change", function () {
        var a = this.ha.J();if (2 == a || 3 == a) L(this.Za), this.Za = null, this.Ya();
      }, this), this.ha.load());
    }
  };function aj(a) {
    ee.call(this, { attributions: a.attributions, extent: a.extent, logo: a.logo, projection: a.projection, state: a.state });this.a = null;this.j = 0;
  }F(aj, ee);function bj(a, c, d, e, f) {
    var g = a.h;if (g && f && !ac(g, f)) {
      if (a.a) {
        if (a.j == a.g && ac(a.a.w, f) && a.a.H() == d && a.a.h == e && yb(a.a.C(), c)) return a.a;Wa(a.a);a.a = null;
      }a.a = new $i(g, f, c, d, e, function (a) {
        return cj(this, a);
      }.bind(a));a.j = a.g;return a.a;
    }g && (f = g);return cj(a, c);
  }
  aj.prototype.f = function (a) {
    a = a.target;switch (a.J()) {case 1:
        S(this, new dj(ej, a));break;case 2:
        S(this, new dj(fj, a));break;case 3:
        S(this, new dj(gj, a));}
  };function hj(a, c) {
    a.a().src = c;
  }function dj(a, c) {
    R.call(this, a);this.image = c;
  }F(dj, R);var ej = "imageloadstart",
      fj = "imageloadend",
      gj = "imageloaderror";function Y(a) {
    T.call(this);this.h = void 0;this.a = "geometry";this.i = null;this.f = void 0;this.c = null;Q(this, U(this.a), this.cb, this);void 0 !== a && (a instanceof dc || !a ? this.wb(a) : this.w(a));
  }F(Y, T);q = Y.prototype;q.clone = function () {
    var a = new Y(this.va()),
        c = this.a;Ta(a, U(a.a), a.cb, a);a.a = c;Q(a, U(a.a), a.cb, a);a.cb();(c = this.Y()) && a.wb(c.clone());if (c = this.i) a.i = c, a.f = c ? ij(c) : void 0, a.b();return a;
  };q.Y = function () {
    return this.get(this.a);
  };q.xa = function () {
    return this.h;
  };q.Tc = function () {
    this.b();
  };
  q.cb = function () {
    this.c && (L(this.c), this.c = null);var a = this.Y();a && (this.c = Q(a, "change", this.Tc, this));this.b();
  };q.wb = function (a) {
    this.set(this.a, a);
  };q.ae = function (a) {
    this.h = a;this.b();
  };function ij(a) {
    if (!ga(a)) {
      var c;c = Array.isArray(a) ? a : [a];a = function a() {
        return c;
      };
    }return a;
  };function jj(a, c, d) {
    return function (e, f, g) {
      var h = new XMLHttpRequest();h.open("GET", ga(a) ? a(e, f, g) : a, !0);"arraybuffer" == c.na() && (h.responseType = "arraybuffer");h.onload = function () {
        if (200 <= h.status && 300 > h.status) {
          var a = c.na(),
              e;"json" == a || "text" == a ? e = h.responseText : "xml" == a ? (e = h.responseXML, e || (a = h.responseText, e = new DOMParser().parseFromString(a, "application/xml"))) : "arraybuffer" == a && (e = h.response);e && d.call(this, c.ye(e, { featureProjection: g }), c.ze(e));
        }
      }.bind(this);h.send();
    };
  }
  function kj(a, c) {
    return jj(a, c, function (a) {
      this.Hb(a);
    });
  };function lj() {
    return [[-Infinity, -Infinity, Infinity, Infinity]];
  };var mj;
  (function () {
    var a = { Xb: {} };(function () {
      function c(a, d) {
        if (!(this instanceof c)) return new c(a, d);this.mb = Math.max(4, a || 9);this.Eb = Math.max(2, Math.ceil(.4 * this.mb));d && this.Ac(d);this.clear();
      }function d(a, c) {
        a.bbox = e(a, 0, a.children.length, c);
      }function e(a, c, d, e) {
        for (var g = [Infinity, Infinity, -Infinity, -Infinity], h; c < d; c++) {
          h = a.children[c], f(g, a.V ? e(h) : h.bbox);
        }return g;
      }function f(a, c) {
        a[0] = Math.min(a[0], c[0]);a[1] = Math.min(a[1], c[1]);a[2] = Math.max(a[2], c[2]);a[3] = Math.max(a[3], c[3]);
      }function g(a, c) {
        return a.bbox[0] - c.bbox[0];
      }function h(a, c) {
        return a.bbox[1] - c.bbox[1];
      }function k(a) {
        return (a[2] - a[0]) * (a[3] - a[1]);
      }function l(a) {
        return a[2] - a[0] + (a[3] - a[1]);
      }function m(a, c) {
        return a[0] <= c[0] && a[1] <= c[1] && c[2] <= a[2] && c[3] <= a[3];
      }function n(a, c) {
        return c[0] <= a[2] && c[1] <= a[3] && c[2] >= a[0] && c[3] >= a[1];
      }function p(a, c, d, e, f) {
        for (var g = [c, d], h; g.length;) {
          d = g.pop(), c = g.pop(), d - c <= e || (h = c + Math.ceil((d - c) / e / 2) * e, r(a, c, d, h, f), g.push(c, h, h, d));
        }
      }function r(a, c, d, e, f) {
        for (var g, h, k, l, m; d > c;) {
          600 < d - c && (g = d - c + 1, h = e - c + 1, k = Math.log(g), l = .5 * Math.exp(2 * k / 3), m = .5 * Math.sqrt(k * l * (g - l) / g) * (0 > h - g / 2 ? -1 : 1), k = Math.max(c, Math.floor(e - h * l / g + m)), h = Math.min(d, Math.floor(e + (g - h) * l / g + m)), r(a, k, h, e, f));g = a[e];h = c;l = d;t(a, c, e);for (0 < f(a[d], g) && t(a, c, d); h < l;) {
            t(a, h, l);h++;for (l--; 0 > f(a[h], g);) {
              h++;
            }for (; 0 < f(a[l], g);) {
              l--;
            }
          }0 === f(a[c], g) ? t(a, c, l) : (l++, t(a, l, d));l <= e && (c = l + 1);e <= l && (d = l - 1);
        }
      }function t(a, c, d) {
        var e = a[c];a[c] = a[d];a[d] = e;
      }c.prototype = { all: function all() {
          return this.Ab(this.data, []);
        }, search: function search(a) {
          var c = this.data,
              d = [],
              e = this.da;if (!n(a, c.bbox)) return d;
          for (var f = [], g, h, k, l; c;) {
            g = 0;for (h = c.children.length; g < h; g++) {
              k = c.children[g], l = c.V ? e(k) : k.bbox, n(a, l) && (c.V ? d.push(k) : m(a, l) ? this.Ab(k, d) : f.push(k));
            }c = f.pop();
          }return d;
        }, load: function load(a) {
          if (!a || !a.length) return this;if (a.length < this.Eb) {
            for (var c = 0, d = a.length; c < d; c++) {
              this.za(a[c]);
            }return this;
          }a = this.Cb(a.slice(), 0, a.length - 1, 0);this.data.children.length ? this.data.height === a.height ? this.Fb(this.data, a) : (this.data.height < a.height && (c = this.data, this.data = a, a = c), this.Db(a, this.data.height - a.height - 1, !0)) : this.data = a;return this;
        }, za: function za(a) {
          a && this.Db(a, this.data.height - 1);return this;
        }, clear: function clear() {
          this.data = { children: [], height: 1, bbox: [Infinity, Infinity, -Infinity, -Infinity], V: !0 };return this;
        }, remove: function remove(a) {
          if (!a) return this;for (var c = this.data, d = this.da(a), e = [], f = [], g, h, k, l; c || e.length;) {
            c || (c = e.pop(), h = e[e.length - 1], g = f.pop(), l = !0);if (c.V && (k = c.children.indexOf(a), -1 !== k)) {
              c.children.splice(k, 1);e.push(c);this.zc(e);break;
            }l || c.V || !m(c.bbox, d) ? h ? (g++, c = h.children[g], l = !1) : c = null : (e.push(c), f.push(g), g = 0, h = c, c = c.children[0]);
          }return this;
        }, da: function da(a) {
          return a;
        }, ob: function ob(a, c) {
          return a[0] - c[0];
        }, pb: function pb(a, c) {
          return a[1] - c[1];
        }, toJSON: function toJSON() {
          return this.data;
        }, Ab: function Ab(a, c) {
          for (var d = []; a;) {
            a.V ? c.push.apply(c, a.children) : d.push.apply(d, a.children), a = d.pop();
          }return c;
        }, Cb: function Cb(a, c, e, f) {
          var g = e - c + 1,
              h = this.mb,
              k;if (g <= h) return k = { children: a.slice(c, e + 1), height: 1, bbox: null, V: !0 }, d(k, this.da), k;f || (f = Math.ceil(Math.log(g) / Math.log(h)), h = Math.ceil(g / Math.pow(h, f - 1)));k = { children: [],
            height: f, bbox: null, V: !1 };var g = Math.ceil(g / h),
              h = g * Math.ceil(Math.sqrt(h)),
              l,
              m,
              n;for (p(a, c, e, h, this.ob); c <= e; c += h) {
            for (m = Math.min(c + h - 1, e), p(a, c, m, g, this.pb), l = c; l <= m; l += g) {
              n = Math.min(l + g - 1, m), k.children.push(this.Cb(a, l, n, f - 1));
            }
          }d(k, this.da);return k;
        }, yc: function yc(a, c, d, e) {
          for (var f, g, h, l, m, n, p, r;;) {
            e.push(c);if (c.V || e.length - 1 === d) break;p = r = Infinity;f = 0;for (g = c.children.length; f < g; f++) {
              h = c.children[f], m = k(h.bbox), n = h.bbox, n = (Math.max(n[2], a[2]) - Math.min(n[0], a[0])) * (Math.max(n[3], a[3]) - Math.min(n[1], a[1])) - m, n < r ? (r = n, p = m < p ? m : p, l = h) : n === r && m < p && (p = m, l = h);
            }c = l || c.children[0];
          }return c;
        }, Db: function Db(a, c, d) {
          var e = this.da;d = d ? a.bbox : e(a);var e = [],
              g = this.yc(d, this.data, c, e);g.children.push(a);for (f(g.bbox, d); 0 <= c;) {
            if (e[c].children.length > this.mb) this.Bc(e, c), c--;else break;
          }this.vc(d, e, c);
        }, Bc: function Bc(a, c) {
          var e = a[c],
              f = e.children.length,
              g = this.Eb;this.wc(e, g, f);f = this.xc(e, g, f);f = { children: e.children.splice(f, e.children.length - f), height: e.height, bbox: null, V: !1 };e.V && (f.V = !0);d(e, this.da);d(f, this.da);
          c ? a[c - 1].children.push(f) : this.Fb(e, f);
        }, Fb: function Fb(a, c) {
          this.data = { children: [a, c], height: a.height + 1, bbox: null, V: !1 };d(this.data, this.da);
        }, xc: function xc(a, c, d) {
          var f, g, h, l, m, n, p;m = n = Infinity;for (f = c; f <= d - c; f++) {
            g = e(a, 0, f, this.da), h = e(a, f, d, this.da), l = Math.max(0, Math.min(g[2], h[2]) - Math.max(g[0], h[0])) * Math.max(0, Math.min(g[3], h[3]) - Math.max(g[1], h[1])), g = k(g) + k(h), l < m ? (m = l, p = f, n = g < n ? g : n) : l === m && g < n && (n = g, p = f);
          }return p;
        }, wc: function wc(a, c, d) {
          var e = a.V ? this.ob : g,
              f = a.V ? this.pb : h,
              k = this.Bb(a, c, d, e);c = this.Bb(a, c, d, f);k < c && a.children.sort(e);
        }, Bb: function Bb(a, c, d, g) {
          a.children.sort(g);g = this.da;var h = e(a, 0, c, g),
              k = e(a, d - c, d, g),
              m = l(h) + l(k),
              n,
              p;for (n = c; n < d - c; n++) {
            p = a.children[n], f(h, a.V ? g(p) : p.bbox), m += l(h);
          }for (n = d - c - 1; n >= c; n--) {
            p = a.children[n], f(k, a.V ? g(p) : p.bbox), m += l(k);
          }return m;
        }, vc: function vc(a, c, d) {
          for (; 0 <= d; d--) {
            f(c[d].bbox, a);
          }
        }, zc: function zc(a) {
          for (var c = a.length - 1, e; 0 <= c; c--) {
            0 === a[c].children.length ? 0 < c ? (e = a[c - 1].children, e.splice(e.indexOf(a[c]), 1)) : this.clear() : d(a[c], this.da);
          }
        }, Ac: function Ac(a) {
          var c = ["return a", " - b", ";"];this.ob = new Function("a", "b", c.join(a[0]));this.pb = new Function("a", "b", c.join(a[1]));this.da = new Function("a", "return [a" + a.join(", a") + "];");
        } };"undefined" !== typeof a ? a.Xb = c : "undefined" !== typeof self ? self.b = c : window.b = c;
    })();mj = a.Xb;
  })();function nj(a) {
    this.b = mj(a);this.a = {};
  }q = nj.prototype;q.za = function (a, c) {
    var d = [a[0], a[1], a[2], a[3], c];this.b.za(d);this.a[x(c)] = d;
  };q.load = function (a, c) {
    for (var d = Array(c.length), e = 0, f = c.length; e < f; e++) {
      var g = a[e],
          h = c[e],
          g = [g[0], g[1], g[2], g[3], h];d[e] = g;this.a[x(h)] = g;
    }this.b.load(d);
  };q.remove = function (a) {
    a = x(a);var c = this.a[a];delete this.a[a];return null !== this.b.remove(c);
  };function oj(a) {
    return a.b.all().map(function (a) {
      return a[4];
    });
  }
  function pj(a, c) {
    return a.b.search(c).map(function (a) {
      return a[4];
    });
  }function qj(a, c, d, e) {
    return rj(pj(a, c), d, e);
  }function rj(a, c, d) {
    for (var e, f = 0, g = a.length; f < g && !(e = c.call(d, a[f])); f++) {}return e;
  }q.clear = function () {
    this.b.clear();this.a = {};
  };q.C = function () {
    return this.b.data.bbox;
  };function sj(a) {
    a = a || {};ee.call(this, { attributions: a.attributions, logo: a.logo, projection: void 0, state: "ready", wrapX: void 0 !== a.wrapX ? a.wrapX : !0 });this.v = oa;this.R = a.format;this.G = a.url;void 0 !== a.loader ? this.v = a.loader : void 0 !== this.G && (this.v = kj(this.G, this.R));this.U = void 0 !== a.strategy ? a.strategy : lj;var c = void 0 !== a.useSpatialIndex ? a.useSpatialIndex : !0;this.a = c ? new nj() : null;this.B = new nj();this.c = {};this.f = {};this.j = {};this.l = {};this.i = null;var d, e;a.features instanceof Sc ? (d = a.features, e = d.a) : Array.isArray(a.features) && (e = a.features);c || void 0 !== d || (d = new Sc(e));void 0 !== e && tj(this, e);void 0 !== d && uj(this, d);
  }F(sj, ee);q = sj.prototype;q.Gb = function (a) {
    var c = x(a).toString();if (vj(this, c, a)) {
      wj(this, c, a);var d = a.Y();d ? (c = d.C(), this.a && this.a.za(c, a)) : this.c[c] = a;S(this, new xj("addfeature", a));
    }this.b();
  };function wj(a, c, d) {
    a.l[c] = [Q(d, "change", a.Yb, a), Q(d, "propertychange", a.Yb, a)];
  }function vj(a, c, d) {
    var e = !0,
        f = d.xa();void 0 !== f ? f.toString() in a.f ? e = !1 : a.f[f.toString()] = d : a.j[c] = d;return e;
  }q.Hb = function (a) {
    tj(this, a);this.b();
  };
  function tj(a, c) {
    var d,
        e,
        f,
        g,
        h = [],
        k = [],
        l = [];e = 0;for (f = c.length; e < f; e++) {
      g = c[e], d = x(g).toString(), vj(a, d, g) && k.push(g);
    }e = 0;for (f = k.length; e < f; e++) {
      g = k[e];d = x(g).toString();wj(a, d, g);var m = g.Y();m ? (d = m.C(), h.push(d), l.push(g)) : a.c[d] = g;
    }a.a && a.a.load(h, l);e = 0;for (f = k.length; e < f; e++) {
      S(a, new xj("addfeature", k[e]));
    }
  }
  function uj(a, c) {
    var d = !1;Q(a, "addfeature", function (a) {
      d || (d = !0, c.push(a.feature), d = !1);
    });Q(a, "removefeature", function (a) {
      d || (d = !0, c.remove(a.feature), d = !1);
    });Q(c, "add", function (a) {
      d || (a = a.element, d = !0, this.Gb(a), d = !1);
    }, a);Q(c, "remove", function (a) {
      d || (a = a.element, d = !0, this.jc(a), d = !1);
    }, a);a.i = c;
  }
  q.clear = function (a) {
    if (a) {
      for (var c in this.l) {
        this.l[c].forEach(L);
      }this.i || (this.l = {}, this.f = {}, this.j = {});
    } else if (this.a) {
      a = this.yb;rj(oj(this.a), a, this);for (var d in this.c) {
        this.yb(this.c[d]);
      }
    }this.i && this.i.clear();this.a && this.a.clear();this.B.clear();this.c = {};S(this, new xj("clear"));this.b();
  };function yj(a, c, d, e) {
    a.a ? qj(a.a, c, d, e) : a.i && a.i.forEach(d, e);
  }
  q.Jd = function () {
    var a;if (this.i) a = this.i.a;else if (this.a && (a = oj(this.a), !Ka(this.c))) for (var c = a, d = Ja(this.c), e = da(d) ? d : [d], f = e.length, d = 0; d < f; d++) {
      c[c.length] = e[d];
    }return a;
  };q.C = function () {
    return this.a.C();
  };
  q.Yb = function (a) {
    a = a.target;var c = x(a).toString(),
        d = a.Y();if (d) {
      if (d = d.C(), c in this.c) delete this.c[c], this.a && this.a.za(d, a);else {
        if (this.a) {
          var e = this.a,
              f = x(a);yb(e.a[f].slice(0, 4), d) || (e.remove(a), e.za(d, a));
        }
      }
    } else c in this.c || (this.a && this.a.remove(a), this.c[c] = a);d = a.xa();void 0 !== d ? (d = d.toString(), c in this.j ? (delete this.j[c], this.f[d] = a) : this.f[d] !== a && (zj(this, a), this.f[d] = a)) : c in this.j || (zj(this, a), this.j[c] = a);this.b();S(this, new xj("changefeature", a));
  };
  function Aj(a, c, d, e) {
    var f = a.B;c = a.U(c, d);var g, h;g = 0;for (h = c.length; g < h; ++g) {
      var k = c[g];qj(f, k, function (a) {
        return vb(a.extent, k);
      }) || (a.v.call(a, k, d, e), f.za(k, { extent: k.slice() }));
    }
  }q.jc = function (a) {
    var c = x(a).toString();c in this.c ? delete this.c[c] : this.a && this.a.remove(a);this.yb(a);this.b();
  };q.yb = function (a) {
    var c = x(a).toString();this.l[c].forEach(L);delete this.l[c];var d = a.xa();void 0 !== d ? delete this.f[d.toString()] : delete this.j[c];S(this, new xj("removefeature", a));
  };
  function zj(a, c) {
    for (var d in a.f) {
      if (a.f[d] === c) {
        delete a.f[d];break;
      }
    }
  }function xj(a, c) {
    R.call(this, a);this.feature = c;
  }F(xj, R);function Bj(a) {
    oi.call(this, a);this.c = null;this.D = hc();
  }F(Bj, oi);Bj.prototype.W = function (a, c, d, e) {
    var f = this.a;return f.Z().W(a, c.viewState.resolution, c.viewState.rotation, c.skippedFeatureUids, function (a) {
      return d.call(e, a, f);
    });
  };
  Bj.prototype.j = function (a, c) {
    var d = a.pixelRatio,
        e = a.viewState,
        f = e.center,
        g = e.resolution,
        h = this.a.Z(),
        k = a.viewHints,
        l = a.extent;void 0 !== c.extent && (l = Fb(l, c.extent));k[0] || k[1] || Ab(l) || (e = bj(h, l, g, d, e.projection)) && hg(this, e) && (this.c = e);if (this.c) {
      var e = this.c,
          k = e.C(),
          l = e.H(),
          m = e.h,
          g = d * l / (g * m);dg(this.D, d * a.size[0] / 2, d * a.size[1] / 2, g, g, 0, m * (k[0] - f[0]) / l, m * (f[1] - k[3]) / l);jg(a.attributions, e.f);kg(a, h);
    }return !!this.c;
  };function Cj(a) {
    oi.call(this, a);this.h = Pe();this.f = null;this.u = rb();this.v = [0, 0, 0];this.w = hc();
  }F(Cj, oi);
  Cj.prototype.i = function (a, c, d) {
    var e = qi(this, a, 0);pi(this, "precompose", d, a, e);var f = a.pixelRatio,
        g = a.viewState,
        h = g.center,
        k = g.projection,
        l = g.resolution,
        g = g.rotation,
        m = a.size,
        n = Math.round(f * m[0] / 2),
        m = Math.round(f * m[1] / 2),
        f = f / l,
        p = this.a,
        r = p.Z(),
        t = r.rb(k),
        u = r.ma(k),
        p = Za(p, "render"),
        y = d,
        A,
        C,
        w,
        v;if (g || p) y = this.h, A = y.canvas, v = re(u, l), w = xe(r, v, k), v = ce(qe(u, v)), w = w[0] / v[0], l = d.canvas.width * w, C = d.canvas.height * w, v = Math.round(Math.sqrt(l * l + C * C)), A.width != v ? A.width = A.height = v : y.clearRect(0, 0, v, v), A = (v - l) / 2 / w, C = (v - C) / 2 / w, f *= w, n = Math.round(w * (n + A)), m = Math.round(w * (m + C));l = y.globalAlpha;y.globalAlpha = c.opacity;var D = this.f,
        E;c = r.tb(k) && 1 == c.opacity;c || (D.reverse(), E = []);for (var H = 0, G = D.length; H < G; ++H) {
      var O = D[H],
          z = O.T,
          I = ke(u, z, this.u),
          N = z[0],
          J = Cb(ke(u, se(u, h, N, this.v))),
          z = Math.round(V(I) * f),
          P = Math.round(Bb(I) * f),
          M = Math.round((I[0] - J[0]) * f / z) * z + n + Math.round((J[0] - h[0]) * f),
          I = Math.round((J[1] - I[3]) * f / P) * P + m + Math.round((h[1] - J[1]) * f);if (!c) {
        J = [M, I, M + z, I + P];y.save();for (var wa = 0, de = E.length; wa < de; ++wa) {
          var Ma = E[wa];Gb(J, Ma) && (y.beginPath(), y.moveTo(J[0], J[1]), y.lineTo(J[0], J[3]), y.lineTo(J[2], J[3]), y.lineTo(J[2], J[1]), y.moveTo(Ma[0], Ma[1]), y.lineTo(Ma[2], Ma[1]), y.lineTo(Ma[2], Ma[3]), y.lineTo(Ma[0], Ma[3]), y.closePath(), y.clip());
        }E.push(J);
      }N = xe(r, N, k);y.drawImage(O.oa(), t, t, N[0], N[1], M, I, z, P);c || y.restore();
    }p && (k = A - n / w + n, E = C - m / w + m, h = dg(this.w, v / 2 - k, v / 2 - E, f, -f, -g, -h[0] + k / f, -h[1] - E / f), pi(this, "render", y, a, h));(g || p) && d.drawImage(y.canvas, -Math.round(A), -Math.round(C), v / w, v / w);y.globalAlpha = l;pi(this, "postcompose", d, a, e);
  };
  Cj.prototype.j = function (a, c) {
    function d(a) {
      a = a.J();return 2 == a || 4 == a || 3 == a && !t;
    }var e = a.pixelRatio,
        f = a.viewState,
        g = f.projection,
        h = this.a,
        k = h.Z(),
        l = k.ma(g),
        m = re(l, f.resolution, 0),
        n = l.H(m),
        p = f.center;n == f.resolution ? (p = mg(p, n, a.size), f = Eb(p, n, f.rotation, a.size)) : f = a.extent;void 0 !== c.extent && (f = Fb(f, c.extent));if (Ab(f)) return !1;n = ne(l, f, n);p = {};p[m] = {};var r = this.l(k, g, p),
        t = h.get("useInterimTilesOnError"),
        u = rb(),
        y = new Mc(0, 0, 0, 0),
        A,
        C,
        w,
        v;for (w = n.b; w <= n.c; ++w) {
      for (v = n.a; v <= n.g; ++v) {
        A = og(k, m, w, v, e, g), !d(A) && A.b && (A = A.b), d(A) ? p[m][A.T.toString()] = A : (C = je(l, A.T, r, y, u), C || (A = me(l, A.T, y, u)) && r(m + 1, A));
      }
    }r = Object.keys(p).map(Number);r.sort(cb);var u = [],
        D,
        y = 0;for (w = r.length; y < w; ++y) {
      for (D in A = r[y], v = p[A], v) {
        A = v[D], 2 == A.J() && u.push(A);
      }
    }this.f = u;lg(a.usedTiles, k, m, n);ng(a, k, l, e, g, f, m, h.get("preload"));ig(a, k);kg(a, k);return !0;
  };function Dj(a) {
    oi.call(this, a);this.f = !1;this.G = -1;this.B = NaN;this.u = rb();this.h = this.v = null;this.w = Pe();
  }F(Dj, oi);
  Dj.prototype.i = function (a, c, d) {
    var e = a.extent,
        f = a.pixelRatio,
        g = c.gb ? a.skippedFeatureUids : {},
        h = a.viewState,
        k = h.projection,
        h = h.rotation,
        l = k.C(),
        m = this.a.Z(),
        n = qi(this, a, 0);pi(this, "precompose", d, a, n);var p = this.h;if (p && !p.c()) {
      var r;Za(this.a, "render") ? (this.w.canvas.width = d.canvas.width, this.w.canvas.height = d.canvas.height, r = this.w) : r = d;var t = r.globalAlpha;r.globalAlpha = c.opacity;c = a.size[0] * f;var u = a.size[1] * f;Th(r, -h, c / 2, u / 2);p.h(r, f, n, h, g);if (m.u && k.a && !vb(l, e)) {
        for (var k = e[0], m = V(l), y = 0; k < l[0];) {
          --y, n = m * y, n = qi(this, a, n), p.h(r, f, n, h, g), k += m;
        }y = 0;for (k = e[2]; k > l[2];) {
          ++y, n = m * y, n = qi(this, a, n), p.h(r, f, n, h, g), k -= m;
        }n = qi(this, a, 0);
      }Th(r, h, c / 2, u / 2);r != d && (pi(this, "render", r, a, n), d.drawImage(r.canvas, 0, 0));r.globalAlpha = t;
    }pi(this, "postcompose", d, a, n);
  };Dj.prototype.W = function (a, c, d, e) {
    if (this.h) {
      var f = this.a,
          g = {};return this.h.W(a, c.viewState.resolution, c.viewState.rotation, {}, function (a) {
        var c = x(a).toString();if (!(c in g)) return g[c] = !0, d.call(e, a, f);
      });
    }
  };Dj.prototype.I = function () {
    gg(this);
  };
  Dj.prototype.j = function (a) {
    function c(a) {
      var c,
          e = a.f;e ? c = e.call(a, m) : (e = d.i) && (c = e(a, m));if (c) {
        if (c) {
          e = !1;if (Array.isArray(c)) for (var f = 0, g = c.length; f < g; ++f) {
            e = Ni(r, a, c[f], Mi(m, n), this.I, this) || e;
          } else e = Ni(r, a, c, Mi(m, n), this.I, this) || e;a = e;
        } else a = !1;this.f = this.f || a;
      }
    }var d = this.a,
        e = d.Z();jg(a.attributions, e.o);kg(a, e);var f = a.viewHints[0],
        g = a.viewHints[1],
        h = d.l,
        k = d.o;if (!this.f && !h && f || !k && g) return !0;var l = a.extent,
        k = a.viewState,
        f = k.projection,
        m = k.resolution,
        n = a.pixelRatio,
        g = d.g,
        p = d.f,
        h = d.get("renderOrder");
    void 0 === h && (h = Li);l = tb(l, p * m);p = k.projection.C();e.u && k.projection.a && !vb(p, a.extent) && (a = Math.max(V(l) / 2, V(p)), l[0] = p[0] - a, l[2] = p[2] + a);if (!this.f && this.B == m && this.G == g && this.v == h && vb(this.u, l)) return !0;this.h = null;this.f = !1;var r = new Hi(.5 * m / n, l, m, d.f);Aj(e, l, m, f);if (h) {
      var t = [];yj(e, l, function (a) {
        t.push(a);
      }, this);t.sort(h);t.forEach(c, this);
    } else yj(e, l, c, this);Ii(r);this.B = m;this.G = g;this.v = h;this.u = l;this.h = r;return !0;
  };function Ej(a, c) {
    var d = /\{z\}/g,
        e = /\{x\}/g,
        f = /\{y\}/g,
        g = /\{-y\}/g;return function (h) {
      if (h) return a.replace(d, h[0].toString()).replace(e, h[1].toString()).replace(f, function () {
        return (-h[2] - 1).toString();
      }).replace(g, function () {
        var a = c.b ? c.b[h[0]] : null;return (a.g - a.a + 1 + h[2]).toString();
      });
    };
  }function Fj(a, c) {
    for (var d = a.length, e = Array(d), f = 0; f < d; ++f) {
      e[f] = Ej(a[f], c);
    }return Gj(e);
  }function Gj(a) {
    return 1 === a.length ? a[0] : function (c, d, e) {
      if (c) return a[Da((c[1] << c[0]) + c[2], a.length)](c, d, e);
    };
  }function Hj() {};function Ij(a) {
    ve.call(this, { attributions: a.attributions, cacheSize: a.cacheSize, extent: a.extent, logo: a.logo, opaque: a.opaque, projection: a.projection, state: a.state, tileGrid: a.tileGrid, tilePixelRatio: a.tilePixelRatio, wrapX: a.wrapX });this.tileLoadFunction = a.tileLoadFunction;this.tileUrlFunction = this.f ? this.f.bind(this) : Hj;this.urls = null;if (a.urls) {
      var c = a.urls;this.urls = c;var d = c.join("\n");Jj(this, this.f ? this.f.bind(this) : Fj(c, this.tileGrid), d);
    } else if (a.url) {
      var c = a.url,
          d = [],
          e = /\{(\d)-(\d)\}/.exec(c) || /\{([a-z])-([a-z])\}/.exec(c);if (e) {
        var f = e[2].charCodeAt(0),
            g;for (g = e[1].charCodeAt(0); g <= f; ++g) {
          d.push(c.replace(e[0], String.fromCharCode(g)));
        }
      } else d.push(c);d = this.urls = d;Jj(this, this.f ? this.f.bind(this) : Fj(d, this.tileGrid), c);
    }a.tileUrlFunction && Jj(this, a.tileUrlFunction);
  }F(Ij, ve);Ij.prototype.v = function (a) {
    a = a.target;switch (a.J()) {case 1:
        S(this, new ze("tileloadstart", a));break;case 2:
        S(this, new ze("tileloadend", a));break;case 3:
        S(this, new ze("tileloaderror", a));}
  };
  function Jj(a, c, d) {
    a.tileUrlFunction = c;"undefined" !== typeof d ? a.Aa !== d && (a.Aa = d, a.b()) : a.b();
  }Ij.prototype.nc = function (a, c, d) {
    a = this.bb(a, c, d);Wd(this.a, a) && this.a.get(a);
  };function Kj(a, c) {
    rg.call(this, 0, c);this.g = Pe();this.b = this.g.canvas;this.b.style.width = "100%";this.b.style.height = "100%";this.b.className = "ol-unselectable";a.insertBefore(this.b, a.childNodes[0] || null);this.a = !0;this.f = hc();
  }F(Kj, rg);Kj.prototype.Ob = function (a) {
    return a instanceof Oh ? new Bj(a) : a instanceof Ph ? new Cj(a) : a instanceof gi ? new Dj(a) : null;
  };
  function Lj(a, c, d) {
    var e = a.s,
        f = a.g;if (Za(e, c)) {
      var g = d.extent,
          h = d.pixelRatio,
          k = d.viewState.rotation,
          l = d.pixelRatio,
          m = d.viewState,
          n = m.resolution;a = dg(a.f, a.b.width / 2, a.b.height / 2, l / n, -l / n, -m.rotation, -m.center[0], -m.center[1]);g = new hi(f, h, g, a, k);S(e, new Zf(c, e, g, d, f, null));
    }
  }Kj.prototype.na = function () {
    return "canvas";
  };
  Kj.prototype.zb = function (a) {
    if (a) {
      var c = this.g,
          d = a.pixelRatio,
          e = Math.round(a.size[0] * d),
          d = Math.round(a.size[1] * d);this.b.width != e || this.b.height != d ? (this.b.width = e, this.b.height = d) : c.clearRect(0, 0, e, d);var f = a.viewState.rotation;sg(a);Lj(this, "precompose", a);var g = a.layerStatesArray;gb(g);Th(c, f, e / 2, d / 2);var h = a.viewState.resolution,
          k,
          l,
          m,
          n;k = 0;for (l = g.length; k < l; ++k) {
        n = g[k], m = n.layer, m = ug(this, m), ag(n, h) && "ready" == n.lc && m.j(a, n) && m.i(a, n, c);
      }Th(c, -f, e / 2, d / 2);Lj(this, "postcompose", a);this.a || (Od(this.b, !0), this.a = !0);vg(this, a);a.postRenderFunctions.push(tg);
    } else this.a && (Od(this.b, !1), this.a = !1);
  };function Mj(a) {
    this.b = a;
  }function Nj(a) {
    this.b = a;
  }F(Nj, Mj);Nj.prototype.na = function () {
    return 35632;
  };function Oj(a) {
    this.b = a;
  }F(Oj, Mj);Oj.prototype.na = function () {
    return 35633;
  };function Pj() {
    this.b = "precision mediump float;varying vec2 a;varying float b;uniform float k;uniform sampler2D l;void main(void){vec4 texColor=texture2D(l,a);gl_FragColor.rgb=texColor.rgb;float alpha=texColor.a*b*k;if(alpha==0.0){discard;}gl_FragColor.a=alpha;}";
  }F(Pj, Nj);ba(Pj);
  function Qj() {
    this.b = "varying vec2 a;varying float b;attribute vec2 c;attribute vec2 d;attribute vec2 e;attribute float f;attribute float g;uniform mat4 h;uniform mat4 i;uniform mat4 j;void main(void){mat4 offsetMatrix=i;if(g==1.0){offsetMatrix=i*j;}vec4 offsets=offsetMatrix*vec4(e,0.,0.);gl_Position=h*vec4(c,0.,1.)+offsets;a=d;b=f;}";
  }F(Qj, Oj);ba(Qj);
  function Rj(a, c) {
    this.s = a.getUniformLocation(c, "j");this.j = a.getUniformLocation(c, "i");this.h = a.getUniformLocation(c, "k");this.i = a.getUniformLocation(c, "h");this.b = a.getAttribLocation(c, "e");this.a = a.getAttribLocation(c, "f");this.g = a.getAttribLocation(c, "c");this.c = a.getAttribLocation(c, "g");this.f = a.getAttribLocation(c, "d");
  };function Sj(a) {
    this.b = void 0 !== a ? a : [];
  };function Tj(a, c) {
    this.i = a;this.b = c;this.a = {};this.f = {};this.g = {};this.j = this.A = this.h = this.s = null;(this.c = 0 <= na.indexOf("OES_element_index_uint")) && c.getExtension("OES_element_index_uint");Q(this.i, "webglcontextlost", this.Ld, this);Q(this.i, "webglcontextrestored", this.Md, this);
  }F(Tj, Va);
  function Uj(a, c, d) {
    var e = a.b,
        f = d.b,
        g = String(x(d));if (g in a.a) e.bindBuffer(c, a.a[g].buffer);else {
      var h = e.createBuffer();e.bindBuffer(c, h);var k;34962 == c ? k = new Float32Array(f) : 34963 == c && (k = a.c ? new Uint32Array(f) : new Uint16Array(f));e.bufferData(c, k, 35044);a.a[g] = { ve: d, buffer: h };
    }
  }function Vj(a, c) {
    var d = a.b,
        e = String(x(c)),
        f = a.a[e];d.isContextLost() || d.deleteBuffer(f.buffer);delete a.a[e];
  }q = Tj.prototype;
  q.O = function () {
    Ua(this.i);var a = this.b;if (!a.isContextLost()) {
      for (var c in this.a) {
        a.deleteBuffer(this.a[c].buffer);
      }for (c in this.g) {
        a.deleteProgram(this.g[c]);
      }for (c in this.f) {
        a.deleteShader(this.f[c]);
      }a.deleteFramebuffer(this.h);a.deleteRenderbuffer(this.j);a.deleteTexture(this.A);
    }
  };q.Kd = function () {
    return this.b;
  };
  function Wj(a) {
    if (!a.h) {
      var c = a.b,
          d = c.createFramebuffer();c.bindFramebuffer(c.FRAMEBUFFER, d);var e = Xj(c, 1, 1),
          f = c.createRenderbuffer();c.bindRenderbuffer(c.RENDERBUFFER, f);c.renderbufferStorage(c.RENDERBUFFER, c.DEPTH_COMPONENT16, 1, 1);c.framebufferTexture2D(c.FRAMEBUFFER, c.COLOR_ATTACHMENT0, c.TEXTURE_2D, e, 0);c.framebufferRenderbuffer(c.FRAMEBUFFER, c.DEPTH_ATTACHMENT, c.RENDERBUFFER, f);c.bindTexture(c.TEXTURE_2D, null);c.bindRenderbuffer(c.RENDERBUFFER, null);c.bindFramebuffer(c.FRAMEBUFFER, null);a.h = d;
      a.A = e;a.j = f;
    }return a.h;
  }function Yj(a, c) {
    var d = String(x(c));if (d in a.f) return a.f[d];var e = a.b,
        f = e.createShader(c.na());e.shaderSource(f, c.b);e.compileShader(f);return a.f[d] = f;
  }function Zj(a, c, d) {
    var e = x(c) + "/" + x(d);if (e in a.g) return a.g[e];var f = a.b,
        g = f.createProgram();f.attachShader(g, Yj(a, c));f.attachShader(g, Yj(a, d));f.linkProgram(g);return a.g[e] = g;
  }q.Ld = function () {
    Ia(this.a);Ia(this.f);Ia(this.g);this.j = this.A = this.h = this.s = null;
  };q.Md = function () {};
  q.ib = function (a) {
    if (a == this.s) return !1;this.b.useProgram(a);this.s = a;return !0;
  };function ak(a, c, d) {
    var e = a.createTexture();a.bindTexture(a.TEXTURE_2D, e);a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.LINEAR);a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR);void 0 !== c && a.texParameteri(3553, 10242, c);void 0 !== d && a.texParameteri(3553, 10243, d);return e;
  }function Xj(a, c, d) {
    var e = ak(a, void 0, void 0);a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, c, d, 0, a.RGBA, a.UNSIGNED_BYTE, null);return e;
  }
  function bk(a, c) {
    var d = ak(a, 33071, 33071);a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, a.RGBA, a.UNSIGNED_BYTE, c);return d;
  };function ck(a, c) {
    this.o = this.M = void 0;this.A = Db(c);this.D = [];this.i = [];this.v = void 0;this.f = [];this.g = [];this.G = this.B = void 0;this.a = [];this.u = this.j = null;this.I = void 0;this.ua = jc();this.va = jc();this.$ = this.N = void 0;this.wa = jc();this.U = this.ba = this.R = void 0;this.ca = [];this.s = [];this.b = [];this.w = null;this.c = [];this.l = [];this.ja = void 0;
  }F(ck, Yf);
  function dk(a, c) {
    var d = a.w,
        e = a.j,
        f = a.ca,
        g = a.s,
        h = c.b;return function () {
      if (!h.isContextLost()) {
        var a, l;a = 0;for (l = f.length; a < l; ++a) {
          h.deleteTexture(f[a]);
        }a = 0;for (l = g.length; a < l; ++a) {
          h.deleteTexture(g[a]);
        }
      }Vj(c, d);Vj(c, e);
    };
  }
  function ek(a, c, d, e) {
    var f = a.M,
        g = a.o,
        h = a.v,
        k = a.B,
        l = a.G,
        m = a.I,
        n = a.N,
        p = a.$,
        r = a.R ? 1 : 0,
        t = a.ba,
        u = a.U,
        y = a.ja,
        A = Math.cos(t),
        t = Math.sin(t),
        C = a.a.length,
        w = a.b.length,
        v,
        D,
        E,
        H,
        G,
        O;for (v = 0; v < d; v += e) {
      G = c[v] - a.A[0], O = c[v + 1] - a.A[1], D = w / 8, E = -u * f, H = -u * (h - g), a.b[w++] = G, a.b[w++] = O, a.b[w++] = E * A - H * t, a.b[w++] = E * t + H * A, a.b[w++] = n / l, a.b[w++] = (p + h) / k, a.b[w++] = m, a.b[w++] = r, E = u * (y - f), H = -u * (h - g), a.b[w++] = G, a.b[w++] = O, a.b[w++] = E * A - H * t, a.b[w++] = E * t + H * A, a.b[w++] = (n + y) / l, a.b[w++] = (p + h) / k, a.b[w++] = m, a.b[w++] = r, E = u * (y - f), H = u * g, a.b[w++] = G, a.b[w++] = O, a.b[w++] = E * A - H * t, a.b[w++] = E * t + H * A, a.b[w++] = (n + y) / l, a.b[w++] = p / k, a.b[w++] = m, a.b[w++] = r, E = -u * f, H = u * g, a.b[w++] = G, a.b[w++] = O, a.b[w++] = E * A - H * t, a.b[w++] = E * t + H * A, a.b[w++] = n / l, a.b[w++] = p / k, a.b[w++] = m, a.b[w++] = r, a.a[C++] = D, a.a[C++] = D + 1, a.a[C++] = D + 2, a.a[C++] = D, a.a[C++] = D + 2, a.a[C++] = D + 3;
    }
  }ck.prototype.Ta = function (a, c) {
    this.c.push(this.a.length);this.l.push(c);var d = a.L;ek(this, d, d.length, a.K);
  };ck.prototype.Ua = function (a, c) {
    this.c.push(this.a.length);this.l.push(c);var d = a.L;ek(this, d, d.length, a.K);
  };
  function fk(a, c) {
    var d = c.b;a.D.push(a.a.length);a.i.push(a.a.length);a.w = new Sj(a.b);Uj(c, 34962, a.w);a.j = new Sj(a.a);Uj(c, 34963, a.j);var e = {};gk(a.ca, a.f, e, d);gk(a.s, a.g, e, d);a.M = void 0;a.o = void 0;a.v = void 0;a.f = null;a.g = null;a.B = void 0;a.G = void 0;a.a = null;a.I = void 0;a.N = void 0;a.$ = void 0;a.R = void 0;a.ba = void 0;a.U = void 0;a.b = null;a.ja = void 0;
  }function gk(a, c, d, e) {
    var f,
        g,
        h,
        k = c.length;for (h = 0; h < k; ++h) {
      f = c[h], g = x(f).toString(), g in d ? f = d[g] : (f = bk(e, f), d[g] = f), a[h] = f;
    }
  }
  ck.prototype.h = function (a, c, d, e, f, g, h, k, l, m, n) {
    g = a.b;Uj(a, 34962, this.w);Uj(a, 34963, this.j);var p = Pj.ya(),
        r = Qj.ya(),
        r = Zj(a, p, r);this.u ? p = this.u : this.u = p = new Rj(g, r);a.ib(r);g.enableVertexAttribArray(p.g);g.vertexAttribPointer(p.g, 2, 5126, !1, 32, 0);g.enableVertexAttribArray(p.b);g.vertexAttribPointer(p.b, 2, 5126, !1, 32, 8);g.enableVertexAttribArray(p.f);g.vertexAttribPointer(p.f, 2, 5126, !1, 32, 16);g.enableVertexAttribArray(p.a);g.vertexAttribPointer(p.a, 1, 5126, !1, 32, 24);g.enableVertexAttribArray(p.c);g.vertexAttribPointer(p.c, 1, 5126, !1, 32, 28);r = this.wa;dg(r, 0, 0, 2 / (d * f[0]), 2 / (d * f[1]), -e, -(c[0] - this.A[0]), -(c[1] - this.A[1]));c = this.va;d = 2 / f[0];f = 2 / f[1];kc(c);c[0] = d;c[5] = f;c[10] = 1;c[15] = 1;f = this.ua;kc(f);0 !== e && oc(f, -e);g.uniformMatrix4fv(p.i, !1, r);g.uniformMatrix4fv(p.j, !1, c);g.uniformMatrix4fv(p.s, !1, f);g.uniform1f(p.h, h);var t;if (void 0 === l) hk(this, g, a, k, this.ca, this.D);else {
      if (m) a: {
        e = a.c ? 5125 : 5123;a = a.c ? 4 : 2;f = this.c.length - 1;for (h = this.s.length - 1; 0 <= h; --h) {
          for (g.bindTexture(3553, this.s[h]), m = 0 < h ? this.i[h - 1] : 0, c = this.i[h]; 0 <= f && this.c[f] >= m;) {
            t = this.c[f];d = this.l[f];r = x(d).toString();if (void 0 === k[r] && d.Y() && (void 0 === n || Gb(n, d.Y().C())) && (g.clear(g.COLOR_BUFFER_BIT | g.DEPTH_BUFFER_BIT), g.drawElements(4, c - t, e, t * a), c = l(d))) {
              k = c;break a;
            }c = t;f--;
          }
        }k = void 0;
      } else g.clear(g.COLOR_BUFFER_BIT | g.DEPTH_BUFFER_BIT), hk(this, g, a, k, this.s, this.i), k = (k = l(null)) ? k : void 0;t = k;
    }g.disableVertexAttribArray(p.g);g.disableVertexAttribArray(p.b);g.disableVertexAttribArray(p.f);g.disableVertexAttribArray(p.a);g.disableVertexAttribArray(p.c);return t;
  };
  function hk(a, c, d, e, f, g) {
    var h = d.c ? 5125 : 5123;d = d.c ? 4 : 2;if (Ka(e)) {
      var k;a = 0;e = f.length;for (k = 0; a < e; ++a) {
        c.bindTexture(3553, f[a]);var l = g[a];c.drawElements(4, l - k, h, k * d);k = l;
      }
    } else {
      k = 0;var m,
          l = 0;for (m = f.length; l < m; ++l) {
        c.bindTexture(3553, f[l]);for (var n = 0 < l ? g[l - 1] : 0, p = g[l], r = n; k < a.c.length && a.c[k] <= p;) {
          var t = x(a.l[k]).toString();void 0 !== e[t] ? (r !== n && c.drawElements(4, n - r, h, r * d), n = r = k === a.c.length - 1 ? p : a.c[k + 1]) : n = k === a.c.length - 1 ? p : a.c[k + 1];k++;
        }r !== n && c.drawElements(4, n - r, h, r * d);
      }
    }
  }
  ck.prototype.Fa = function (a) {
    var c = a.i,
        d = a.a,
        e = a.l,
        f = a.h,
        g = a.j,
        h = a.ra(),
        k = a.A,
        l = a.P(),
        m = a.s;a = a.Xa;var n;0 === this.f.length ? this.f.push(d) : (n = this.f[this.f.length - 1], x(n) != x(d) && (this.D.push(this.a.length), this.f.push(d)));0 === this.g.length ? this.g.push(f) : (n = this.g[this.g.length - 1], x(n) != x(f) && (this.i.push(this.a.length), this.g.push(f)));this.M = c[0];this.o = c[1];this.v = m[1];this.B = e[1];this.G = e[0];this.I = g;this.N = h[0];this.$ = h[1];this.ba = l;this.R = k;this.U = a;this.ja = m[0];
  };
  function ik(a, c, d) {
    this.f = c;this.i = a;this.g = d;this.a = {};
  }function jk(a, c) {
    var d = [],
        e;for (e in a.a) {
      d.push(dk(a.a[e], c));
    }return function () {
      for (var a = d.length, c, e = 0; e < a; e++) {
        c = d[e].apply(this, arguments);
      }return c;
    };
  }function kk(a, c) {
    for (var d in a.a) {
      fk(a.a[d], c);
    }
  }ik.prototype.b = function (a, c) {
    var d = this.a[c];void 0 === d && (d = new lk[c](this.i, this.f), this.a[c] = d);return d;
  };ik.prototype.c = function () {
    return Ka(this.a);
  };
  ik.prototype.h = function (a, c, d, e, f, g, h, k) {
    var l, m, n;l = 0;for (m = ri.length; l < m; ++l) {
      n = this.a[ri[l]], void 0 !== n && n.h(a, c, d, e, f, g, h, k, void 0, !1);
    }
  };function mk(a, c, d, e, f, g, h, k, l, m) {
    var n = nk,
        p,
        r;for (p = ri.length - 1; 0 <= p; --p) {
      if (r = a.a[ri[p]], void 0 !== r && (r = r.h(c, d, e, f, n, g, h, k, l, !0, m))) return r;
    }
  }
  ik.prototype.W = function (a, c, d, e, f, g, h, k, l, m) {
    var n = c.b;n.bindFramebuffer(n.FRAMEBUFFER, Wj(c));var p;void 0 !== this.g && (p = tb(xb(a), e * this.g));return mk(this, c, a, e, f, h, k, l, function (a) {
      var c = new Uint8Array(4);n.readPixels(0, 0, 1, 1, n.RGBA, n.UNSIGNED_BYTE, c);if (0 < c[3] && (a = m(a))) return a;
    }, p);
  };var lk = { Image: ck },
      nk = [1, 1];function ok(a, c, d, e, f, g, h) {
    this.b = a;this.c = c;this.g = g;this.f = h;this.s = f;this.i = e;this.h = d;this.a = null;
  }F(ok, Yf);ok.prototype.Ua = function (a, c) {
    var d = this.b,
        e = new ik(1, this.g).b(0, "Image");e.Fa(this.a);e.Ua(a, c);fk(e, d);e.h(this.b, this.c, this.h, this.i, this.s, this.f, 1, {}, void 0, !1);dk(e, d)();
  };ok.prototype.Ta = function (a, c) {
    var d = this.b,
        e = new ik(1, this.g).b(0, "Image");e.Fa(this.a);e.Ta(a, c);fk(e, d);e.h(this.b, this.c, this.h, this.i, this.s, this.f, 1, {}, void 0, !1);dk(e, d)();
  };
  ok.prototype.Fa = function (a) {
    this.a = a;
  };function pk() {
    this.b = "precision mediump float;varying vec2 a;uniform float f;uniform sampler2D g;void main(void){vec4 texColor=texture2D(g,a);gl_FragColor.rgb=texColor.rgb;gl_FragColor.a=texColor.a*f;}";
  }F(pk, Nj);ba(pk);function qk() {
    this.b = "varying vec2 a;attribute vec2 b;attribute vec2 c;uniform mat4 d;uniform mat4 e;void main(void){gl_Position=e*vec4(b,0.,1.);a=(d*vec4(c,0.,1.)).st;}";
  }F(qk, Oj);ba(qk);
  function rk(a, c) {
    this.c = a.getUniformLocation(c, "f");this.g = a.getUniformLocation(c, "e");this.h = a.getUniformLocation(c, "d");this.f = a.getUniformLocation(c, "g");this.b = a.getAttribLocation(c, "b");this.a = a.getAttribLocation(c, "c");
  };function sk(a, c) {
    fg.call(this, c);this.f = a;this.R = new Sj([-1, -1, 0, 0, 1, -1, 1, 0, -1, 1, 0, 1, 1, 1, 1, 1]);this.i = this.ia = null;this.j = void 0;this.v = hc();this.N = jc();this.D = null;
  }F(sk, fg);
  function tk(a, c, d) {
    var e = a.f.g;if (void 0 === a.j || a.j != d) {
      c.postRenderFunctions.push(function (a, c, d) {
        a.isContextLost() || (a.deleteFramebuffer(c), a.deleteTexture(d));
      }.bind(null, e, a.i, a.ia));c = Xj(e, d, d);var f = e.createFramebuffer();e.bindFramebuffer(36160, f);e.framebufferTexture2D(36160, 36064, 3553, c, 0);a.ia = c;a.i = f;a.j = d;
    } else e.bindFramebuffer(36160, a.i);
  }
  sk.prototype.ec = function (a, c, d) {
    uk(this, "precompose", d, a);Uj(d, 34962, this.R);var e = d.b,
        f = pk.ya(),
        g = qk.ya(),
        f = Zj(d, f, g);this.D ? g = this.D : this.D = g = new rk(e, f);d.ib(f) && (e.enableVertexAttribArray(g.b), e.vertexAttribPointer(g.b, 2, 5126, !1, 16, 0), e.enableVertexAttribArray(g.a), e.vertexAttribPointer(g.a, 2, 5126, !1, 16, 8), e.uniform1i(g.f, 0));e.uniformMatrix4fv(g.h, !1, this.v);e.uniformMatrix4fv(g.g, !1, this.N);e.uniform1f(g.c, c.opacity);e.bindTexture(3553, this.ia);e.drawArrays(5, 0, 4);uk(this, "postcompose", d, a);
  };
  function uk(a, c, d, e) {
    a = a.a;if (Za(a, c)) {
      var f = e.viewState;S(a, new Zf(c, a, new ok(d, f.center, f.resolution, f.rotation, e.size, e.extent, e.pixelRatio), e, null, d));
    }
  }sk.prototype.o = function () {
    this.i = this.ia = null;this.j = void 0;
  };function vk(a, c) {
    sk.call(this, a, c);this.c = null;
  }F(vk, sk);function wk(a, c) {
    var d = c.a();return bk(a.f.g, d);
  }vk.prototype.W = function (a, c, d, e) {
    var f = this.a;return f.Z().W(a, c.viewState.resolution, c.viewState.rotation, c.skippedFeatureUids, function (a) {
      return d.call(e, a, f);
    });
  };
  vk.prototype.xb = function (a, c) {
    var d = this.f.g,
        e = a.pixelRatio,
        f = a.viewState,
        g = f.center,
        h = f.resolution,
        k = f.rotation,
        l = this.c,
        m = this.ia,
        n = this.a.Z(),
        p = a.viewHints,
        r = a.extent;void 0 !== c.extent && (r = Fb(r, c.extent));p[0] || p[1] || Ab(r) || (f = bj(n, r, h, e, f.projection)) && hg(this, f) && (l = f, m = wk(this, f), this.ia && a.postRenderFunctions.push(function (a, c) {
      a.isContextLost() || a.deleteTexture(c);
    }.bind(null, d, this.ia)));l && (d = this.f.f.i, xk(this, d.width, d.height, e, g, h, k, l.C()), e = this.v, kc(e), nc(e, 1, -1), mc(e, 0, -1), this.c = l, this.ia = m, jg(a.attributions, l.f), kg(a, n));return !0;
  };function xk(a, c, d, e, f, g, h, k) {
    c *= g;d *= g;a = a.N;kc(a);nc(a, 2 * e / c, 2 * e / d);oc(a, -h);mc(a, k[0] - f[0], k[1] - f[1]);nc(a, (k[2] - k[0]) / 2, (k[3] - k[1]) / 2);mc(a, 1, 1);
  };function yk() {
    this.b = "precision mediump float;varying vec2 a;uniform sampler2D e;void main(void){gl_FragColor=texture2D(e,a);}";
  }F(yk, Nj);ba(yk);function zk() {
    this.b = "varying vec2 a;attribute vec2 b;attribute vec2 c;uniform vec4 d;void main(void){gl_Position=vec4(b*d.xy+d.zw,0.,1.);a=c;}";
  }F(zk, Oj);ba(zk);function Ak(a, c) {
    this.c = a.getUniformLocation(c, "e");this.g = a.getUniformLocation(c, "d");this.b = a.getAttribLocation(c, "b");this.a = a.getAttribLocation(c, "c");
  };function Bk(a, c) {
    sk.call(this, a, c);this.G = yk.ya();this.ca = zk.ya();this.c = null;this.B = new Sj([0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0]);this.u = this.h = null;this.w = -1;this.I = [0, 0];
  }F(Bk, sk);Bk.prototype.O = function () {
    Vj(this.f.f, this.B);Bk.S.O.call(this);
  };Bk.prototype.l = function (a, c, d) {
    var e = this.f;return function (f, g) {
      return we(a, c, f, g, function (a) {
        var c = Wd(e.a, a.getKey());c && (d[f] || (d[f] = {}), d[f][a.T.toString()] = a);return c;
      });
    };
  };Bk.prototype.o = function () {
    Bk.S.o.call(this);this.c = null;
  };
  Bk.prototype.xb = function (a, c, d) {
    var e = this.f,
        f = d.b,
        g = a.viewState,
        h = g.projection,
        k = this.a,
        l = k.Z(),
        m = l.ma(h),
        n = re(m, g.resolution),
        p = m.H(n),
        r = xe(l, n, h),
        t = r[0] / ce(qe(m, n), this.I)[0],
        u = p / t,
        y = l.rb(h),
        A = g.center,
        C;p == g.resolution ? (A = mg(A, p, a.size), C = Eb(A, p, g.rotation, a.size)) : C = a.extent;p = ne(m, C, p);if (this.h && Oc(this.h, p) && this.w == l.g) u = this.u;else {
      var w = [p.ga(), p.g - p.a + 1],
          v = Math.pow(2, Math.ceil(Math.log(Math.max(w[0] * r[0], w[1] * r[1])) / Math.LN2)),
          w = u * v,
          D = m.ra(n),
          E = D[0] + p.b * r[0] * u,
          u = D[1] + p.a * r[1] * u,
          u = [E, u, E + w, u + w];tk(this, a, v);f.viewport(0, 0, v, v);f.clearColor(0, 0, 0, 0);f.clear(16384);f.disable(3042);v = Zj(d, this.G, this.ca);d.ib(v);this.c || (this.c = new Ak(f, v));Uj(d, 34962, this.B);f.enableVertexAttribArray(this.c.b);f.vertexAttribPointer(this.c.b, 2, 5126, !1, 16, 0);f.enableVertexAttribArray(this.c.a);f.vertexAttribPointer(this.c.a, 2, 5126, !1, 16, 8);f.uniform1i(this.c.c, 0);d = {};d[n] = {};var H = this.l(l, h, d),
          G = k.get("useInterimTilesOnError"),
          v = !0,
          E = rb(),
          O = new Mc(0, 0, 0, 0),
          z,
          I,
          N;for (I = p.b; I <= p.c; ++I) {
        for (N = p.a; N <= p.g; ++N) {
          D = og(l, n, I, N, t, h);if (void 0 !== c.extent && (z = ke(m, D.T, E), !Gb(z, c.extent))) continue;z = D.J();z = 2 == z || 4 == z || 3 == z && !G;!z && D.b && (D = D.b);z = D.J();if (2 == z) {
            if (Wd(e.a, D.getKey())) {
              d[n][D.T.toString()] = D;continue;
            }
          } else if (4 == z || 3 == z && !G) continue;v = !1;z = je(m, D.T, H, O, E);z || (D = me(m, D.T, O, E)) && H(n + 1, D);
        }
      }c = Object.keys(d).map(Number);c.sort(cb);for (var H = new Float32Array(4), J, P, M, G = 0, O = c.length; G < O; ++G) {
        for (J in P = d[c[G]], P) {
          D = P[J], z = ke(m, D.T, E), I = 2 * (z[2] - z[0]) / w, N = 2 * (z[3] - z[1]) / w, M = 2 * (z[0] - u[0]) / w - 1, z = 2 * (z[1] - u[1]) / w - 1, gc(H, I, N, M, z), f.uniform4fv(this.c.g, H), Ck(e, D, r, y * t), f.drawArrays(5, 0, 4);
        }
      }v ? (this.h = p, this.u = u, this.w = l.g) : (this.u = this.h = null, this.w = -1, a.animate = !0);
    }lg(a.usedTiles, l, n, p);var wa = e.i;ng(a, l, m, t, h, C, n, k.get("preload"), function (a) {
      var c;(c = 2 != a.J() || Wd(e.a, a.getKey())) || (c = a.getKey() in wa.c);c || wa.g([a, pe(m, a.T), m.H(a.T[0]), r, y * t]);
    }, this);ig(a, l);kg(a, l);f = this.v;kc(f);mc(f, (A[0] - u[0]) / (u[2] - u[0]), (A[1] - u[1]) / (u[3] - u[1]));0 !== g.rotation && oc(f, g.rotation);nc(f, a.size[0] * g.resolution / (u[2] - u[0]), a.size[1] * g.resolution / (u[3] - u[1]));mc(f, -.5, -.5);return !0;
  };function Dk(a, c) {
    sk.call(this, a, c);this.h = !1;this.I = -1;this.G = NaN;this.u = rb();this.w = this.c = this.B = null;
  }F(Dk, sk);q = Dk.prototype;q.ec = function (a, c, d) {
    this.w = c;var e = a.viewState,
        f = this.c;f && !f.c() && f.h(d, e.center, e.resolution, e.rotation, a.size, a.pixelRatio, c.opacity, c.gb ? a.skippedFeatureUids : {});
  };q.O = function () {
    var a = this.c;a && (jk(a, this.f.f)(), this.c = null);Dk.S.O.call(this);
  };
  q.W = function (a, c, d, e) {
    if (this.c && this.w) {
      var f = c.viewState,
          g = this.a,
          h = {};return this.c.W(a, this.f.f, f.center, f.resolution, f.rotation, c.size, c.pixelRatio, this.w.opacity, {}, function (a) {
        var c = x(a).toString();if (!(c in h)) return h[c] = !0, d.call(e, a, g);
      });
    }
  };q.fc = function () {
    gg(this);
  };
  q.xb = function (a, c, d) {
    function e(a) {
      var c,
          d = a.f;d ? c = d.call(a, m) : (d = f.i) && (c = d(a, m));if (c) {
        if (c) {
          d = !1;if (Array.isArray(c)) for (var e = 0, g = c.length; e < g; ++e) {
            d = Ni(r, a, c[e], Mi(m, n), this.fc, this) || d;
          } else d = Ni(r, a, c, Mi(m, n), this.fc, this) || d;a = d;
        } else a = !1;this.h = this.h || a;
      }
    }var f = this.a;c = f.Z();jg(a.attributions, c.o);kg(a, c);var g = a.viewHints[0],
        h = a.viewHints[1],
        k = f.l,
        l = f.o;if (!this.h && !k && g || !l && h) return !0;var h = a.extent,
        k = a.viewState,
        g = k.projection,
        m = k.resolution,
        n = a.pixelRatio,
        k = f.g,
        p = f.f,
        l = f.get("renderOrder");
    void 0 === l && (l = Li);h = tb(h, p * m);if (!this.h && this.G == m && this.I == k && this.B == l && vb(this.u, h)) return !0;this.c && a.postRenderFunctions.push(jk(this.c, d));this.h = !1;var r = new ik(.5 * m / n, h, f.f);Aj(c, h, m, g);if (l) {
      var t = [];yj(c, h, function (a) {
        t.push(a);
      }, this);t.sort(l);t.forEach(e, this);
    } else yj(c, h, e, this);kk(r, d);this.G = m;this.I = k;this.B = l;this.u = h;this.c = r;return !0;
  };function Ek(a, c) {
    rg.call(this, 0, c);this.b = document.createElement("CANVAS");this.b.style.width = "100%";this.b.style.height = "100%";this.b.className = "ol-unselectable";a.insertBefore(this.b, a.childNodes[0] || null);this.w = this.D = 0;this.M = Pe();this.j = !0;this.g = Re(this.b, { antialias: !0, depth: !1, failIfMajorPerformanceCaveat: !0, preserveDrawingBuffer: !1, stencil: !0 });this.f = new Tj(this.b, this.g);Q(this.b, "webglcontextlost", this.Hd, this);Q(this.b, "webglcontextrestored", this.Id, this);this.a = new Vd();this.l = null;this.i = new wg(function (a) {
      var c = a[1];a = a[2];var f = c[0] - this.l[0],
          c = c[1] - this.l[1];return 65536 * Math.log(a) + Math.sqrt(f * f + c * c) / a;
    }.bind(this), function (a) {
      return a[0].getKey();
    });this.o = function () {
      if (0 !== this.i.b.length) {
        Ag(this.i);var a = xg(this.i);Ck(this, a[0], a[3], a[4]);
      }return !1;
    }.bind(this);this.h = 0;Fk(this);
  }F(Ek, rg);
  function Ck(a, c, d, e) {
    var f = a.g,
        g = c.getKey();if (Wd(a.a, g)) a = a.a.get(g), f.bindTexture(3553, a.ia), 9729 != a.bc && (f.texParameteri(3553, 10240, 9729), a.bc = 9729), 9729 != a.cc && (f.texParameteri(3553, 10240, 9729), a.cc = 9729);else {
      var h = f.createTexture();f.bindTexture(3553, h);if (0 < e) {
        var k = a.M.canvas,
            l = a.M;a.D !== d[0] || a.w !== d[1] ? (k.width = d[0], k.height = d[1], a.D = d[0], a.w = d[1]) : l.clearRect(0, 0, d[0], d[1]);l.drawImage(c.oa(), e, e, d[0], d[1], 0, 0, d[0], d[1]);f.texImage2D(3553, 0, 6408, 6408, 5121, k);
      } else f.texImage2D(3553, 0, 6408, 6408, 5121, c.oa());f.texParameteri(3553, 10240, 9729);f.texParameteri(3553, 10241, 9729);f.texParameteri(3553, 10242, 33071);f.texParameteri(3553, 10243, 33071);a.a.set(g, { ia: h, bc: 9729, cc: 9729 });
    }
  }q = Ek.prototype;q.Ob = function (a) {
    return a instanceof Oh ? new vk(this, a) : a instanceof Ph ? new Bk(this, a) : a instanceof gi ? new Dk(this, a) : null;
  };function Gk(a, c, d) {
    var e = a.s;if (Za(e, c)) {
      a = a.f;var f = d.viewState;S(e, new Zf(c, e, new ok(a, f.center, f.resolution, f.rotation, d.size, d.extent, d.pixelRatio), d, null, a));
    }
  }
  q.O = function () {
    var a = this.g;a.isContextLost() || Xd(this.a, function (c) {
      c && a.deleteTexture(c.ia);
    });Wa(this.f);Ek.S.O.call(this);
  };q.Ec = function (a, c) {
    for (var d = this.g, e; 1024 < this.a.c - this.h;) {
      if (e = this.a.b.Ga) d.deleteTexture(e.ia);else if (+this.a.b.Aa == c.index) break;else --this.h;Yd(this.a);
    }
  };q.na = function () {
    return "webgl";
  };q.Hd = function (a) {
    a.preventDefault();this.a.clear();this.h = 0;a = this.c;for (var c in a) {
      a[c].o();
    }
  };q.Id = function () {
    Fk(this);this.s.render();
  };
  function Fk(a) {
    a = a.g;a.activeTexture(33984);a.blendFuncSeparate(770, 771, 1, 771);a.disable(2884);a.disable(2929);a.disable(3089);a.disable(2960);
  }
  q.zb = function (a) {
    var c = this.f,
        d = this.g;if (d.isContextLost()) return !1;if (!a) return this.j && (Od(this.b, !1), this.j = !1), !1;this.l = a.focus;this.a.set((-a.index).toString(), null);++this.h;Gk(this, "precompose", a);var e = [],
        f = a.layerStatesArray;gb(f);var g = a.viewState.resolution,
        h,
        k,
        l,
        m;h = 0;for (k = f.length; h < k; ++h) {
      m = f[h], ag(m, g) && "ready" == m.lc && (l = ug(this, m.layer), l.xb(a, m, c) && e.push(m));
    }f = a.size[0] * a.pixelRatio;g = a.size[1] * a.pixelRatio;if (this.b.width != f || this.b.height != g) this.b.width = f, this.b.height = g;d.bindFramebuffer(36160, null);d.clearColor(0, 0, 0, 0);d.clear(16384);d.enable(3042);d.viewport(0, 0, this.b.width, this.b.height);h = 0;for (k = e.length; h < k; ++h) {
      m = e[h], l = ug(this, m.layer), l.ec(a, m, c);
    }this.j || (Od(this.b, !0), this.j = !0);sg(a);1024 < this.a.c - this.h && a.postRenderFunctions.push(this.Ec.bind(this));0 !== this.i.b.length && (a.postRenderFunctions.push(this.o), a.animate = !0);Gk(this, "postcompose", a);vg(this, a);a.postRenderFunctions.push(tg);
  };
  q.W = function (a, c, d, e, f, g) {
    var h;if (this.g.isContextLost()) return !1;var k = c.viewState,
        l = c.layerStatesArray,
        m;for (m = l.length - 1; 0 <= m; --m) {
      h = l[m];var n = h.layer;if (ag(h, k.resolution) && f.call(g, n) && (h = ug(this, n).W(a, c, d, e))) return h;
    }
  };var Hk = ["canvas", "webgl", "dom"];
  function Z(a) {
    T.call(this);var c = Ik(a);this.rc = void 0 !== a.loadTilesWhileAnimating ? a.loadTilesWhileAnimating : !1;this.sc = void 0 !== a.loadTilesWhileInteracting ? a.loadTilesWhileInteracting : !1;this.uc = void 0 !== a.pixelRatio ? a.pixelRatio : Xe;this.tc = c.logos;this.U = function () {
      this.h = void 0;this.Yd.call(this, Date.now());
    }.bind(this);this.pc = hc();this.oc = hc();this.qc = 0;this.c = null;this.Ma = rb();this.v = this.I = null;this.a = document.createElement("DIV");this.a.className = "ol-viewport" + ($e ? " ol-touch" : "");this.a.style.position = "relative";this.a.style.overflow = "hidden";this.a.style.width = "100%";this.a.style.height = "100%";this.a.style.msTouchAction = "none";this.a.style.b = "none";this.l = document.createElement("DIV");this.l.className = "ol-overlaycontainer";this.a.appendChild(this.l);this.j = document.createElement("DIV");this.j.className = "ol-overlaycontainer-stopevent";a = ["click", "dblclick", "mousedown", "touchstart", "mspointerdown", Sf, "mousewheel", "wheel"];for (var d = 0, e = a.length; d < e; ++d) {
      Q(this.j, a[d], Xa);
    }this.a.appendChild(this.j);
    this.ua = new Kf(this);for (var f in Vf) {
      Q(this.ua, Vf[f], this.Zb, this);
    }this.ca = c.keyboardEventTarget;this.i = null;Q(this.a, "wheel", this.Ja, this);Q(this.a, "mousewheel", this.Ja, this);this.o = c.controls;this.u = c.interactions;this.B = c.overlays;this.ic = {};this.R = new c.$d(this.a, this);this.N = null;this.G = [];this.wa = [];this.$a = new Bg(this.Pc.bind(this), this.ld.bind(this));this.Cc = {};Q(this, U("layergroup"), this.Uc, this);Q(this, U("view"), this.md, this);Q(this, U("size"), this.hd, this);Q(this, U("target"), this.kd, this);
    this.w(c.values);this.o.forEach(function (a) {
      a.setMap(this);
    }, this);Q(this.o, "add", function (a) {
      a.element.setMap(this);
    }, this);Q(this.o, "remove", function (a) {
      a.element.setMap(null);
    }, this);this.u.forEach(function (a) {
      a.setMap(this);
    }, this);Q(this.u, "add", function (a) {
      a.element.setMap(this);
    }, this);Q(this.u, "remove", function (a) {
      a.element.setMap(null);
    }, this);this.B.forEach(this.Jb, this);Q(this.B, "add", function (a) {
      this.Jb(a.element);
    }, this);Q(this.B, "remove", function (a) {
      var c = a.element.xa();void 0 !== c && delete this.ic[c.toString()];
      a.element.setMap(null);
    }, this);
  }F(Z, T);q = Z.prototype;q.Dc = function (a) {
    this.o.push(a);
  };q.Ib = function (a) {
    Bh(Jk(this)).push(a);
  };q.Jb = function (a) {
    var c = a.xa();void 0 !== c && (this.ic[c.toString()] = a);a.setMap(this);
  };q.ea = function (a) {
    this.render();Array.prototype.push.apply(this.G, arguments);
  };
  q.O = function () {
    Wa(this.ua);Wa(this.R);Ta(this.a, "wheel", this.Ja, this);Ta(this.a, "mousewheel", this.Ja, this);void 0 !== this.f && (K.removeEventListener("resize", this.f, !1), this.f = void 0);this.h && (K.cancelAnimationFrame(this.h), this.h = void 0);this.set("target", null);Z.S.O.call(this);
  };q.Fc = function (a, c, d, e, f) {
    if (this.c) return a = this.qa(a), this.R.W(a, this.c, c, void 0 !== d ? d : null, void 0 !== e ? e : Jb, void 0 !== f ? f : null);
  };
  function Ie(a, c) {
    var d = a.a.getBoundingClientRect(),
        e = c.changedTouches ? c.changedTouches[0] : c;return [e.clientX - d.left, e.clientY - d.top];
  }q.Va = function () {
    var a = this.get("target");return void 0 !== a ? Ad(a) : null;
  };q.qa = function (a) {
    var c = this.c;return c ? (a = a.slice(), eg(c.pixelToCoordinateMatrix, a, a)) : null;
  };function Jk(a) {
    return a.get("layergroup");
  }q.dc = function () {
    return Bh(Jk(this));
  };function Xg(a, c) {
    var d = a.c;if (d) {
      var e = c.slice(0, 2);return eg(d.coordinateToPixelMatrix, e, e);
    }return null;
  }
  function bh(a) {
    return a.get("size");
  }q.F = function () {
    return this.get("view");
  };q.Pc = function (a, c, d, e) {
    var f = this.c;if (!(f && c in f.wantedTiles && f.wantedTiles[c][a.T.toString()])) return Infinity;a = d[0] - f.focus[0];d = d[1] - f.focus[1];return 65536 * Math.log(e) + Math.sqrt(a * a + d * d) / e;
  };q.Ja = function (a, c) {
    var d = new If(c || a.type, this, a);this.Zb(d);
  };q.Zb = function (a) {
    if (this.c) {
      this.N = a.coordinate;a.frameState = this.c;var c = this.u.a,
          d;if (!1 !== S(this, a)) for (d = c.length - 1; 0 <= d; d--) {
        var e = c[d];if (e.get("active") && !e.handleEvent(a)) break;
      }
    }
  };
  q.gd = function () {
    var a = this.c,
        c = this.$a;if (0 !== c.b.length) {
      var d = 16,
          e = d;if (a) {
        var f = a.viewHints;f[0] && (d = this.rc ? 8 : 0, e = 2);f[1] && (d = this.sc ? 8 : 0, e = 2);
      }if (c.h < d) {
        Ag(c);for (var f = 0, g, h; c.h < d && f < e && 0 < c.b.length;) {
          g = xg(c)[0], h = g.getKey(), 0 !== g.J() || h in c.f || (c.f[h] = !0, ++c.h, ++f, g.load());
        }
      }
    }c = this.wa;d = 0;for (e = c.length; d < e; ++d) {
      c[d](this, a);
    }c.length = 0;
  };q.hd = function () {
    this.render();
  };
  q.kd = function () {
    var a;this.get("target") && (a = this.Va());if (this.i) {
      for (var c = 0, d = this.i.length; c < d; ++c) {
        L(this.i[c]);
      }this.i = null;
    }a ? (a.appendChild(this.a), a = this.ca ? this.ca : a, this.i = [Q(a, "keydown", this.Ja, this), Q(a, "keypress", this.Ja, this)], this.f || (this.f = this.lb.bind(this), K.addEventListener("resize", this.f, !1))) : (Gd(this.a), void 0 !== this.f && (K.removeEventListener("resize", this.f, !1), this.f = void 0));this.lb();
  };q.ld = function () {
    this.render();
  };q.nd = function () {
    this.render();
  };
  q.md = function () {
    this.I && (L(this.I), this.I = null);var a = this.F();a && (this.I = Q(a, "propertychange", this.nd, this));this.render();
  };q.Vc = function () {
    this.render();
  };q.Wc = function () {
    this.render();
  };q.Uc = function () {
    this.v && (this.v.forEach(L), this.v = null);var a = Jk(this);a && (this.v = [Q(a, "propertychange", this.Wc, this), Q(a, "change", this.Vc, this)]);this.render();
  };q.Zd = function () {
    this.h && K.cancelAnimationFrame(this.h);this.U();
  };q.render = function () {
    void 0 === this.h && (this.h = K.requestAnimationFrame(this.U));
  };q.Wd = function (a) {
    return Bh(Jk(this)).remove(a);
  };
  q.Yd = function (a) {
    var c,
        d,
        e,
        f = bh(this),
        g = this.F(),
        h = rb(),
        k = null;if (void 0 !== f && 0 < f[0] && 0 < f[1] && g && Dc(g)) {
      c = this.c ? this.c.viewHints : void 0;void 0 !== c ? (c[0] = g.c[0], c[1] = g.c[1], k = c) : k = g.c.slice();var l = Jk(this).sb(),
          m = {};c = 0;for (d = l.length; c < d; ++c) {
        m[x(l[c].layer)] = l[c];
      }e = g.J();k = { animate: !1, attributions: {}, coordinateToPixelMatrix: this.pc, extent: h, focus: this.N ? this.N : e.center, index: this.qc++, layerStates: m, layerStatesArray: l, logos: Ha({}, this.tc), pixelRatio: this.uc, pixelToCoordinateMatrix: this.oc, postRenderFunctions: [],
        size: f, skippedFeatureUids: this.Cc, tileQueue: this.$a, time: a, usedTiles: {}, viewState: e, viewHints: k, wantedTiles: {} };
    }if (k) {
      a = this.G;c = f = 0;for (d = a.length; c < d; ++c) {
        g = a[c], g(this, k) && (a[f++] = g);
      }a.length = f;k.extent = Eb(e.center, e.resolution, e.rotation, k.size, h);
    }this.c = k;this.R.zb(k);k && (k.animate && this.render(), Array.prototype.push.apply(this.wa, k.postRenderFunctions), 0 !== this.G.length || k.viewHints[0] || k.viewHints[1] || yb(k.extent, this.Ma) || (S(this, new Td("moveend", this, k)), ub(k.extent, this.Ma)));S(this, new Td("postrender", this, k));c = h = this.gd;this && (c = ma(h, this));!ga(aa.setImmediate) || aa.Window && aa.Window.prototype && !cd("Edge") && aa.Window.prototype.setImmediate == aa.setImmediate ? (Je || (Je = Ke()), Je(c)) : aa.setImmediate(c);
  };
  q.lb = function () {
    var a = this.Va();if (a) {
      var c = zd(a),
          d = hd && a.currentStyle,
          e;if (e = d) xd(c), e = !0;if (e && "auto" != d.width && "auto" != d.height && !d.boxSizing) c = Pd(a, d.width, "width", "pixelWidth"), a = Pd(a, d.height, "height", "pixelHeight"), a = new wd(c, a);else {
        d = new wd(a.offsetWidth, a.offsetHeight);if (hd) {
          c = Qd(a, "paddingLeft");e = Qd(a, "paddingRight");var f = Qd(a, "paddingTop"),
              g = Qd(a, "paddingBottom"),
              c = new Jd(f, e, g, c);
        } else c = Kd(a, "paddingLeft"), e = Kd(a, "paddingRight"), f = Kd(a, "paddingTop"), g = Kd(a, "paddingBottom"), c = new Jd(parseFloat(f), parseFloat(e), parseFloat(g), parseFloat(c));!hd || 9 <= Number(td) ? (e = Kd(a, "borderLeftWidth"), f = Kd(a, "borderRightWidth"), g = Kd(a, "borderTopWidth"), a = Kd(a, "borderBottomWidth"), a = new Jd(parseFloat(g), parseFloat(f), parseFloat(a), parseFloat(e))) : (e = Sd(a, "borderLeft"), f = Sd(a, "borderRight"), g = Sd(a, "borderTop"), a = Sd(a, "borderBottom"), a = new Jd(g, f, a, e));a = new wd(d.width - a.left - c.left - c.right - a.right, d.height - a.top - c.top - c.bottom - a.bottom);
      }this.set("size", [a.width, a.height]);
    } else this.set("size", void 0);
  };
  function Ik(a) {
    var c = null;void 0 !== a.keyboardEventTarget && (c = "string" === typeof a.keyboardEventTarget ? document.getElementById(a.keyboardEventTarget) : a.keyboardEventTarget);var d = {},
        e = {};if (void 0 === a.logo || "boolean" === typeof a.logo && a.logo) e["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAHGAAABxgEXwfpGAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAhNQTFRF////AP//AICAgP//AFVVQECA////K1VVSbbbYL/fJ05idsTYJFtbbcjbJllmZszWWMTOIFhoHlNiZszTa9DdUcHNHlNlV8XRIVdiasrUHlZjIVZjaMnVH1RlIFRkH1RkH1ZlasvYasvXVsPQH1VkacnVa8vWIVZjIFRjVMPQa8rXIVVkXsXRsNveIFVkIFZlIVVj3eDeh6GmbMvXH1ZkIFRka8rWbMvXIFVkIFVjIFVkbMvWH1VjbMvWIFVlbcvWIFVla8vVIFVkbMvWbMvVH1VkbMvWIFVlbcvWIFVkbcvVbMvWjNPbIFVkU8LPwMzNIFVkbczWIFVkbsvWbMvXIFVkRnB8bcvW2+TkW8XRIFVkIlZlJVloJlpoKlxrLl9tMmJwOWd0Omh1RXF8TneCT3iDUHiDU8LPVMLPVcLPVcPQVsPPVsPQV8PQWMTQWsTQW8TQXMXSXsXRX4SNX8bSYMfTYcfTYsfTY8jUZcfSZsnUaIqTacrVasrVa8jTa8rWbI2VbMvWbcvWdJObdcvUdszUd8vVeJaee87Yfc3WgJyjhqGnitDYjaarldPZnrK2oNbborW5o9bbo9fbpLa6q9ndrL3ArtndscDDutzfu8fJwN7gwt7gxc/QyuHhy+HizeHi0NfX0+Pj19zb1+Tj2uXk29/e3uLg3+Lh3+bl4uXj4ufl4+fl5Ofl5ufl5ujm5+jmySDnBAAAAFp0Uk5TAAECAgMEBAYHCA0NDg4UGRogIiMmKSssLzU7PkJJT1JTVFliY2hrdHZ3foSFhYeJjY2QkpugqbG1tre5w8zQ09XY3uXn6+zx8vT09vf4+Pj5+fr6/P39/f3+gz7SsAAAAVVJREFUOMtjYKA7EBDnwCPLrObS1BRiLoJLnte6CQy8FLHLCzs2QUG4FjZ5GbcmBDDjxJBXDWxCBrb8aM4zbkIDzpLYnAcE9VXlJSWlZRU13koIeW57mGx5XjoMZEUqwxWYQaQbSzLSkYGfKFSe0QMsX5WbjgY0YS4MBplemI4BdGBW+DQ11eZiymfqQuXZIjqwyadPNoSZ4L+0FVM6e+oGI6g8a9iKNT3o8kVzNkzRg5lgl7p4wyRUL9Yt2jAxVh6mQCogae6GmflI8p0r13VFWTHBQ0rWPW7ahgWVcPm+9cuLoyy4kCJDzCm6d8PSFoh0zvQNC5OjDJhQopPPJqph1doJBUD5tnkbZiUEqaCnB3bTqLTFG1bPn71kw4b+GFdpLElKIzRxxgYgWNYc5SCENVHKeUaltHdXx0dZ8uBI1hJ2UUDgq82CM2MwKeibqAvSO7MCABq0wXEPiqWEAAAAAElFTkSuQmCC"] = "http://openlayers.org/";else {
      var f = a.logo;"string" === typeof f ? e[f] = "" : f instanceof HTMLElement ? e[x(f).toString()] = f : ha(f) && (e[f.src] = f.href);
    }f = a.layers instanceof Ah ? a.layers : new Ah({ layers: a.layers });d.layergroup = f;d.target = a.target;d.view = void 0 !== a.view ? a.view : new W();var f = rg,
        g;void 0 !== a.renderer ? Array.isArray(a.renderer) ? g = a.renderer : "string" === typeof a.renderer && (g = [a.renderer]) : g = Hk;var h, k;h = 0;for (k = g.length; h < k; ++h) {
      var l = g[h];if ("canvas" == l) {
        if (Ze) {
          f = Kj;break;
        }
      } else if ("webgl" == l && Se) {
        f = Ek;break;
      }
    }void 0 !== a.controls ? g = Array.isArray(a.controls) ? new Sc(a.controls.slice()) : a.controls : (g = {}, h = new Sc(), (void 0 !== g.zoom ? g.zoom : 1) && h.push(new Ee(g.zoomOptions)), (void 0 !== g.rotate ? g.rotate : 1) && h.push(new Ce(g.rotateOptions)), (void 0 !== g.attribution ? g.attribution : 1) && h.push(new Ae(g.attributionOptions)), g = h);if (void 0 !== a.interactions) h = Array.isArray(a.interactions) ? new Sc(a.interactions.slice()) : a.interactions;else {
      h = {};k = new Sc();l = new Cg();(void 0 !== h.altShiftDragRotate ? h.altShiftDragRotate : 1) && k.push(new Yg());(void 0 !== h.doubleClickZoom ? h.doubleClickZoom : 1) && k.push(new Ig({ delta: h.zoomDelta, duration: h.zoomDuration }));(void 0 !== h.dragPan ? h.dragPan : 1) && k.push(new Tg({ kinetic: l }));(void 0 !== h.pinchRotate ? h.pinchRotate : 1) && k.push(new sh());(void 0 !== h.pinchZoom ? h.pinchZoom : 1) && k.push(new wh({ duration: h.zoomDuration }));if (void 0 !== h.keyboard ? h.keyboard : 1) k.push(new mh()), k.push(new oh({ delta: h.zoomDelta, duration: h.zoomDuration }));(void 0 !== h.mouseWheelZoom ? h.mouseWheelZoom : 1) && k.push(new qh({ duration: h.zoomDuration }));
      (void 0 !== h.shiftDragZoom ? h.shiftDragZoom : 1) && k.push(new lh({ duration: h.zoomDuration }));h = k;
    }a = void 0 !== a.overlays ? Array.isArray(a.overlays) ? new Sc(a.overlays.slice()) : a.overlays : new Sc();return { controls: g, interactions: h, keyboardEventTarget: c, logos: e, overlays: a, $d: f, values: d };
  }Vb(Gh);Vb(Nh);Nh.forEach(function (a) {
    Gh.forEach(function (c) {
      Xb(a, c, Hh);Xb(c, a, Ih);
    });
  });function Kk(a) {
    T.call(this);this.l = a.id;this.j = void 0 !== a.insertFirst ? a.insertFirst : !0;this.o = void 0 !== a.stopEvent ? a.stopEvent : !0;this.c = document.createElement("DIV");this.c.className = "ol-overlay-container";this.c.style.position = "absolute";this.autoPan = void 0 !== a.autoPan ? a.autoPan : !1;this.h = void 0 !== a.autoPanAnimation ? a.autoPanAnimation : {};this.i = void 0 !== a.autoPanMargin ? a.autoPanMargin : 20;this.a = { ab: "", fb: "", jb: "", kb: "", visible: !0 };this.f = null;Q(this, U("element"), this.Sc, this);Q(this, U("map"), this.ad, this);Q(this, U("offset"), this.bd, this);Q(this, U("position"), this.ed, this);Q(this, U("positioning"), this.fd, this);void 0 !== a.element && this.set("element", a.element);this.set("offset", void 0 !== a.offset ? a.offset : [0, 0]);this.set("positioning", void 0 !== a.positioning ? a.positioning : "top-left");void 0 !== a.position && this.set("position", a.position);
  }F(Kk, T);q = Kk.prototype;q.xa = function () {
    return this.l;
  };q.Sc = function () {
    for (var a = this.c, c; c = a.firstChild;) {
      a.removeChild(c);
    }(a = this.get("element")) && this.c.appendChild(a);
  };
  q.ad = function () {
    this.f && (Gd(this.c), L(this.f), this.f = null);var a = this.get("map");a && (this.f = Q(a, "postrender", this.render, this), Lk(this), a = this.o ? a.j : a.l, this.j ? a.insertBefore(this.c, a.childNodes[0] || null) : a.appendChild(this.c));
  };q.render = function () {
    Lk(this);
  };q.bd = function () {
    Lk(this);
  };
  q.ed = function () {
    Lk(this);if (void 0 !== this.get("position") && this.autoPan) {
      var a = this.get("map");if (void 0 !== a && a.Va()) {
        var c = Mk(a.Va(), bh(a)),
            d = this.get("element"),
            e = d.offsetWidth,
            f = d.currentStyle || K.getComputedStyle(d),
            e = e + (parseInt(f.marginLeft, 10) + parseInt(f.marginRight, 10)),
            f = d.offsetHeight,
            g = d.currentStyle || K.getComputedStyle(d),
            f = f + (parseInt(g.marginTop, 10) + parseInt(g.marginBottom, 10)),
            h = Mk(d, [e, f]),
            d = this.i;vb(c, h) || (e = h[0] - c[0], f = c[2] - h[2], g = h[1] - c[1], h = c[3] - h[3], c = [0, 0], 0 > e ? c[0] = e - d : 0 > f && (c[0] = Math.abs(f) + d), 0 > g ? c[1] = g - d : 0 > h && (c[1] = Math.abs(h) + d), 0 === c[0] && 0 === c[1]) || (d = a.F().X(), e = Xg(a, d), c = [e[0] + c[0], e[1] + c[1]], this.h && (this.h.source = d, a.ea(Jc(this.h))), a.F().la(a.qa(c)));
      }
    }
  };q.fd = function () {
    Lk(this);
  };q.setMap = function (a) {
    this.set("map", a);
  };
  function Mk(a, c) {
    var d = zd(a),
        e = new vd(0, 0),
        f;f = d ? zd(d) : document;var g;(g = !hd || 9 <= Number(td)) || (xd(f), g = !0);a != (g ? f.documentElement : f.body) && (f = Ld(a), g = xd(d).b, d = g.scrollingElement ? g.scrollingElement : kd ? g.body || g.documentElement : g.documentElement, g = g.parentWindow || g.defaultView, d = hd && rd("10") && g.pageYOffset != d.scrollTop ? new vd(d.scrollLeft, d.scrollTop) : new vd(g.pageXOffset || d.scrollLeft, g.pageYOffset || d.scrollTop), e.x = f.left + d.x, e.y = f.top + d.y);return [e.x, e.y, e.x + c[0], e.y + c[1]];
  }
  function Nk(a, c) {
    a.a.visible !== c && (Od(a.c, c), a.a.visible = c);
  }
  function Lk(a) {
    var c = a.get("map"),
        d = a.get("position");if (void 0 !== c && c.c && void 0 !== d) {
      var d = Xg(c, d),
          e = bh(c),
          c = a.c.style,
          f = a.get("offset"),
          g = a.get("positioning"),
          h = f[0],
          f = f[1];if ("bottom-right" == g || "center-right" == g || "top-right" == g) "" !== a.a.fb && (a.a.fb = c.left = ""), h = Math.round(e[0] - d[0] - h) + "px", a.a.jb != h && (a.a.jb = c.right = h);else {
        "" !== a.a.jb && (a.a.jb = c.right = "");if ("bottom-center" == g || "center-center" == g || "top-center" == g) h -= Md(a.c).width / 2;h = Math.round(d[0] + h) + "px";a.a.fb != h && (a.a.fb = c.left = h);
      }if ("bottom-left" == g || "bottom-center" == g || "bottom-right" == g) "" !== a.a.kb && (a.a.kb = c.top = ""), d = Math.round(e[1] - d[1] - f) + "px", a.a.ab != d && (a.a.ab = c.bottom = d);else {
        "" !== a.a.ab && (a.a.ab = c.bottom = "");if ("center-left" == g || "center-center" == g || "center-right" == g) f -= Md(a.c).height / 2;d = Math.round(d[1] + f) + "px";a.a.kb != d && (a.a.kb = c.top = d);
      }Nk(a, !0);
    } else Nk(a, !1);
  };function Ok(a) {
    a = a ? a : {};this.f = void 0 !== a.collapsed ? a.collapsed : !0;this.j = void 0 !== a.collapsible ? a.collapsible : !0;this.j || (this.f = !1);var c = void 0 !== a.className ? a.className : "ol-overviewmap",
        d = void 0 !== a.tipLabel ? a.tipLabel : "Overview map",
        e = void 0 !== a.collapseLabel ? a.collapseLabel : "\xAB";this.o = "string" === typeof e ? Dd("SPAN", {}, e) : e;e = void 0 !== a.label ? a.label : "\xBB";this.u = "string" === typeof e ? Dd("SPAN", {}, e) : e;d = Dd("BUTTON", { type: "button", title: d }, this.j && !this.f ? this.o : this.u);Q(d, "click", this.B, this);e = document.createElement("DIV");e.className = "ol-overviewmap-map";var f = this.c = new Z({ controls: new Sc(), interactions: new Sc(), target: e, view: a.view });a.layers && a.layers.forEach(function (a) {
      f.Ib(a);
    }, this);var g = document.createElement("DIV");g.className = "ol-overviewmap-box";g.style.boxSizing = "border-box";this.l = new Kk({ position: [0, 0], positioning: "bottom-left", element: g });this.c.B.push(this.l);c = Dd("DIV", c + " ol-unselectable ol-control" + (this.f && this.j ? " ol-collapsed" : "") + (this.j ? "" : " ol-uncollapsible"), e, d);Ud.call(this, { element: c, render: a.render ? a.render : Pk, target: a.target });
  }F(Ok, Ud);Ok.prototype.setMap = function (a) {
    var c = this.a;a !== c && (c && (c = c.F()) && Ta(c, U("rotation"), this.i, this), Ok.S.setMap.call(this, a), a && (this.h.push(Q(a, "propertychange", this.v, this)), 0 === this.c.dc().get("length") && (c = Jk(a), this.c.set("layergroup", c)), a = a.F())) && (Q(a, U("rotation"), this.i, this), Dc(a) && (this.c.lb(), Qk(this)));
  };
  Ok.prototype.v = function (a) {
    "view" === a.key && ((a = a.oldValue) && Ta(a, U("rotation"), this.i, this), a = this.a.F(), Q(a, U("rotation"), this.i, this));
  };Ok.prototype.i = function () {
    var a = this.c.F(),
        c = this.a.F().P();a.set("rotation", c);
  };
  function Pk() {
    var a = this.a,
        c = this.c;if (a.c && c.c) {
      var d = bh(a),
          a = Bc(a.F(), d),
          e = bh(c),
          d = Bc(c.F(), e),
          f = Xg(c, Hb(a)),
          g = Xg(c, [a[2], a[1]]),
          c = Math.abs(f[0] - g[0]),
          f = Math.abs(f[1] - g[1]),
          g = e[0],
          e = e[1];c < .1 * g || f < .1 * e || c > .75 * g || f > .75 * e ? Qk(this) : vb(d, a) || (a = this.c, d = this.a.F(), a.F().la(d.X()));
    }Rk(this);
  }
  function Qk(a) {
    var c = a.a;a = a.c;var d = bh(c),
        d = Bc(c.F(), d),
        c = bh(a);a = a.F();Ib(d, 1 / (.1 * Math.pow(2, Math.log(7.5) / Math.LN2 / 2)));var e = d;if (!(e instanceof qc)) {
      var d = e[0],
          f = e[1],
          g = e[2],
          h = e[3],
          d = [d, f, d, h, g, h, g, f, d, f],
          f = new wc(null);yc(f, "XY", d, [d.length]);e = f;
    }var f = {},
        d = void 0 !== f.padding ? f.padding : [0, 0, 0, 0],
        k = void 0 !== f.constrainResolution ? f.constrainResolution : !0,
        g = void 0 !== f.nearest ? f.nearest : !1,
        l;void 0 !== f.minResolution ? l = f.minResolution : void 0 !== f.maxZoom ? l = a.constrainResolution(a.f, f.maxZoom - a.h, 0) : l = 0;for (var m = e.L, h = a.P(), f = Math.cos(-h), h = Math.sin(-h), n = Infinity, p = Infinity, r = -Infinity, t = -Infinity, e = e.K, u = 0, y = m.length; u < y; u += e) {
      var A = m[u] * f - m[u + 1] * h,
          C = m[u] * h + m[u + 1] * f,
          n = Math.min(n, A),
          p = Math.min(p, C),
          r = Math.max(r, A),
          t = Math.max(t, C);
    }c = Cc([n, p, r, t], [c[0] - d[1] - d[3], c[1] - d[0] - d[2]]);c = isNaN(c) ? l : Math.max(c, l);k && (l = a.constrainResolution(c, 0, 0), !g && l < c && (l = a.constrainResolution(l, -1, 0)), c = l);Fc(a, c);h = -h;l = (n + r) / 2 + (d[1] - d[3]) / 2 * c;c = (p + t) / 2 + (d[0] - d[2]) / 2 * c;a.la([l * f - c * h, c * f + l * h]);
  }
  function Rk(a) {
    var c = a.a,
        d = a.c;if (c.c && d.c) {
      var e = bh(c),
          f = c.F(),
          g = d.F();bh(d);var d = f.P(),
          c = a.l,
          h = a.l.get("element"),
          f = Bc(f, e),
          e = g.H(),
          g = Cb(f),
          f = [f[2], f[3]],
          k;if (a = a.a.F().X()) k = [g[0] - a[0], g[1] - a[1]], pb(k, d), ob(k, a);c.set("position", k);h && (h.style.width = Math.abs((g[0] - f[0]) / e) + "px", h.style.height = Math.abs((f[1] - g[1]) / e) + "px");
    }
  }Ok.prototype.B = function (a) {
    a.preventDefault();Sk(this);
  };
  function Sk(a) {
    a.element.classList.toggle("ol-collapsed");a.f ? Hd(a.o, a.u) : Hd(a.u, a.o);a.f = !a.f;var c = a.c;a.f || c.c || (c.lb(), Qk(a), Sa(c, "postrender", function () {
      Rk(this);
    }, a));
  };function Tk(a, c, d, e, f, g, h) {
    bg.call(this, a, c, d, 0, e);this.j = f;this.b = new Image();null !== g && (this.b.crossOrigin = g);this.g = {};this.c = null;this.state = 0;this.i = h;
  }F(Tk, bg);Tk.prototype.a = function (a) {
    if (void 0 !== a) {
      var c;a = x(a);if (a in this.g) return this.g[a];Ka(this.g) ? c = this.b : c = this.b.cloneNode(!1);return this.g[a] = c;
    }return this.b;
  };Tk.prototype.l = function () {
    this.state = 3;this.c.forEach(L);this.c = null;cg(this);
  };
  Tk.prototype.w = function () {
    void 0 === this.resolution && (this.resolution = Bb(this.extent) / this.b.height);this.state = 2;this.c.forEach(L);this.c = null;cg(this);
  };Tk.prototype.load = function () {
    0 == this.state && (this.state = 1, cg(this), this.c = [Sa(this.b, "error", this.l, this), Sa(this.b, "load", this.w, this)], this.i(this, this.j));
  };function Uk(a, c, d, e, f) {
    ae.call(this, a, c);this.h = d;this.a = new Image();null !== e && (this.a.crossOrigin = e);this.c = {};this.f = null;this.i = f;
  }F(Uk, ae);q = Uk.prototype;q.O = function () {
    1 == this.state && Vk(this);this.b && Wa(this.b);this.state = 5;be(this);Uk.S.O.call(this);
  };q.oa = function (a) {
    if (void 0 !== a) {
      var c = x(a);if (c in this.c) return this.c[c];a = Ka(this.c) ? this.a : this.a.cloneNode(!1);return this.c[c] = a;
    }return this.a;
  };q.getKey = function () {
    return this.h;
  };q.Ed = function () {
    this.state = 3;Vk(this);be(this);
  };
  q.Fd = function () {
    this.state = this.a.naturalWidth && this.a.naturalHeight ? 2 : 4;Vk(this);be(this);
  };q.load = function () {
    0 == this.state && (this.state = 1, be(this), this.f = [Sa(this.a, "error", this.Ed, this), Sa(this.a, "load", this.Fd, this)], this.i(this, this.h));
  };function Vk(a) {
    a.f.forEach(L);a.f = null;
  };function Wk(a) {
    a = a ? a : {};Qg.call(this, { handleDownEvent: Xk, handleDragEvent: Yk, handleUpEvent: Zk });this.o = a.condition ? a.condition : Ng;this.c = this.h = void 0;this.i = 0;this.v = void 0 !== a.duration ? a.duration : 400;
  }F(Wk, Qg);
  function Yk(a) {
    if (Pg(a)) {
      var c = a.map,
          d = bh(c),
          e = a.pixel;a = e[0] - d[0] / 2;e = d[1] / 2 - e[1];d = Math.atan2(e, a);a = Math.sqrt(a * a + e * e);e = c.F();c.render();if (void 0 !== this.h) {
        var f = d - this.h;Fg(c, e, e.P() - f);
      }this.h = d;void 0 !== this.c && (d = this.c * (e.H() / a), Hg(c, e, d));void 0 !== this.c && (this.i = this.c / a);this.c = a;
    }
  }
  function Zk(a) {
    if (!Pg(a)) return !0;a = a.map;var c = a.F();Ec(c, -1);var d = this.i - 1,
        e = c.P(),
        e = c.constrainRotation(e, 0);Fg(a, c, e, void 0, void 0);var e = c.H(),
        f = this.v,
        e = c.constrainResolution(e, 0, d);Hg(a, c, e, void 0, f);this.i = 0;return !1;
  }function Xk(a) {
    return Pg(a) && this.o(a) ? (Ec(a.map.F(), 1), this.c = this.h = void 0, !0) : !1;
  };function $k(a, c, d, e, f, g, h, k, l, m, n) {
    ae.call(this, f, 0);this.o = void 0 !== n ? n : !1;this.D = h;this.w = k;this.g = null;this.c = {};this.f = c;this.i = e;this.j = g ? g : f;this.a = [];this.La = null;this.h = 0;g = ke(e, this.j);k = this.i.C();f = this.f.C();g = k ? Fb(g, k) : g;if (0 === zb(g)) this.state = 4;else if ((k = a.C()) && (f ? f = Fb(f, k) : f = k), e = e.H(this.j[0]), e = Ui(a, d, Db(g), e), !isFinite(e) || 0 >= e) this.state = 4;else if (this.l = new Xi(a, d, g, f, e * (void 0 !== m ? m : .5)), 0 === this.l.g.length) this.state = 4;else if (this.h = re(c, e), d = Zi(this.l), f && (a.a ? (d[1] = Ba(d[1], f[1], f[3]), d[3] = Ba(d[3], f[1], f[3])) : d = Fb(d, f)), zb(d)) {
      if (a = le(c, d, this.h), 100 > a.ga() * (a.g - a.a + 1)) {
        for (c = a.b; c <= a.c; c++) {
          for (d = a.a; d <= a.g; d++) {
            (m = l(this.h, c, d, h)) && this.a.push(m);
          }
        }0 === this.a.length && (this.state = 4);
      } else this.state = 3;
    } else this.state = 4;
  }F($k, ae);$k.prototype.O = function () {
    1 == this.state && (this.La.forEach(L), this.La = null);$k.S.O.call(this);
  };$k.prototype.oa = function (a) {
    if (void 0 !== a) {
      var c = x(a);if (c in this.c) return this.c[c];a = Ka(this.c) ? this.g : this.g.cloneNode(!1);return this.c[c] = a;
    }return this.g;
  };
  $k.prototype.Ya = function () {
    var a = [];this.a.forEach(function (c) {
      c && 2 == c.J() && a.push({ extent: ke(this.f, c.T), image: c.oa() });
    }, this);this.a.length = 0;if (0 === a.length) this.state = 3;else {
      var c = this.j[0],
          d = qe(this.i, c),
          e = fa(d) ? d : d[0],
          d = fa(d) ? d : d[1],
          c = this.i.H(c),
          f = this.f.H(this.h),
          g = ke(this.i, this.j);this.g = Wi(e, d, this.D, f, this.f.C(), c, g, this.l, a, this.w, this.o);this.state = 2;
    }be(this);
  };
  $k.prototype.load = function () {
    if (0 == this.state) {
      this.state = 1;be(this);var a = 0;this.La = [];this.a.forEach(function (c) {
        var d = c.J();if (0 == d || 1 == d) {
          a++;var e;e = Q(c, "change", function () {
            var d = c.J();if (2 == d || 3 == d || 4 == d) L(e), a--, 0 === a && (this.La.forEach(L), this.La = null, this.Ya());
          }, this);this.La.push(e);
        }
      }, this);this.a.forEach(function (a) {
        0 == a.J() && a.load();
      });0 === a && K.setTimeout(this.Ya.bind(this), 0);
    }
  };function al(a) {
    Ij.call(this, { attributions: a.attributions, cacheSize: a.cacheSize, extent: a.extent, logo: a.logo, opaque: a.opaque, projection: a.projection, state: a.state, tileGrid: a.tileGrid, tileLoadFunction: a.tileLoadFunction ? a.tileLoadFunction : bl, tilePixelRatio: a.tilePixelRatio, tileUrlFunction: a.tileUrlFunction, url: a.url, urls: a.urls, wrapX: a.wrapX });this.crossOrigin = void 0 !== a.crossOrigin ? a.crossOrigin : null;this.tileClass = void 0 !== a.tileClass ? a.tileClass : Uk;this.c = {};this.i = {};this.G = a.reprojectionErrorThreshold;
  }
  F(al, Ij);q = al.prototype;q.gc = function () {
    if ($d(this.a)) return !0;for (var a in this.c) {
      if ($d(this.c[a])) return !0;
    }return !1;
  };q.Ha = function (a, c) {
    var d = this.Wa(a);this.a.Ha(this.a == d ? c : {});for (var e in this.c) {
      var f = this.c[e];f.Ha(f == d ? c : {});
    }
  };q.rb = function () {
    return 0;
  };q.tb = function (a) {
    return this.h && a && !ac(this.h, a) ? !1 : al.S.tb.call(this, a);
  };q.ma = function (a) {
    var c = this.h;return !this.tileGrid || c && !ac(c, a) ? (c = x(a).toString(), c in this.i || (this.i[c] = te(a)), this.i[c]) : this.tileGrid;
  };
  q.Wa = function (a) {
    var c = this.h;if (!c || ac(c, a)) return this.a;a = x(a).toString();a in this.c || (this.c[a] = new Zd());return this.c[a];
  };function cl(a, c, d, e, f, g, h) {
    c = [c, d, e];f = (d = ye(a, c, g)) ? a.tileUrlFunction(d, f, g) : void 0;f = new a.tileClass(c, void 0 !== f ? 0 : 4, void 0 !== f ? f : "", a.crossOrigin, a.tileLoadFunction);f.key = h;Q(f, "change", a.v, a);return f;
  }
  function og(a, c, d, e, f, g) {
    if (a.h && g && !ac(a.h, g)) {
      f = a.Wa(g);d = [c, d, e];c = a.bb.apply(a, d);if (Wd(f, c)) return f.get(c);var h = a.h;e = a.ma(h);var k = a.ma(g),
          l = ye(a, d, g);a = new $k(h, e, g, k, d, l, a.j, 0, function (a, c, d, e) {
        return dl(this, a, c, d, e, h);
      }.bind(a), a.G, !1);f.set(c, a);return a;
    }return dl(a, c, d, e, f, g);
  }
  function dl(a, c, d, e, f, g) {
    var h,
        k = a.bb(c, d, e),
        l = a.getKey();if (Wd(a.a, k)) {
      if (h = a.a.get(k), h.key != l) {
        var m = h;h.b && h.b.key == l ? (h = h.b, 2 == m.J() && (h.b = m)) : (h = cl(a, c, d, e, f, g, l), 2 == m.J() ? h.b = m : m.b && 2 == m.b.J() && (h.b = m.b, m.b = null));h.b && (h.b.b = null);a.a.replace(k, h);
      }
    } else h = cl(a, c, d, e, f, g, l), a.a.set(k, h);return h;
  }function bl(a, c) {
    a.oa().src = c;
  };function el(a) {
    var c = a.imageExtent,
        d = void 0 !== a.crossOrigin ? a.crossOrigin : null,
        e = void 0 !== a.imageLoadFunction ? a.imageLoadFunction : hj;aj.call(this, { attributions: a.attributions, logo: a.logo, projection: Sb(a.projection) });this.c = new Tk(c, void 0, 1, this.o, a.url, d, e);this.i = a.imageSize ? a.imageSize : null;Q(this.c, "change", this.f, this);
  }F(el, aj);function cj(a, c) {
    return Gb(c, a.c.C()) ? a.c : null;
  }
  el.prototype.f = function (a) {
    if (2 == this.c.J()) {
      var c = this.c.C(),
          d = this.c.a(),
          e,
          f;this.i ? (e = this.i[0], f = this.i[1]) : (e = d.width, f = d.height);c = Math.ceil(V(c) / (Bb(c) / f));if (c != e) {
        var c = Pe(c, f),
            g = c.canvas;c.drawImage(d, 0, 0, e, f, 0, 0, g.width, g.height);this.c.b = g;
      }
    }el.S.f.call(this, a);
  };function fl(a) {
    a = a || {};var c = a.size,
        d = c[0],
        e = c[1],
        f = [],
        g = 256;switch (void 0 !== a.tierSizeCalculation ? a.tierSizeCalculation : "default") {case "default":
        for (; d > g || e > g;) {
          f.push([Math.ceil(d / g), Math.ceil(e / g)]), g += g;
        }break;case "truncated":
        for (; d > g || e > g;) {
          f.push([Math.ceil(d / g), Math.ceil(e / g)]), d >>= 1, e >>= 1;
        }}f.push([1, 1]);f.reverse();for (var g = [1], h = [0], e = 1, d = f.length; e < d; e++) {
      g.push(1 << e), h.push(f[e - 1][0] * f[e - 1][1] + h[e - 1]);
    }g.reverse();var e = void 0 !== a.offset ? a.offset : [0, 0],
        c = [e[0], e[1] + -c[1], e[0] + c[0], e[1]],
        c = new ge({ extent: c, origin: Hb(c), resolutions: g }),
        k = a.url;al.call(this, { attributions: a.attributions, cacheSize: a.cacheSize, crossOrigin: a.crossOrigin, logo: a.logo, reprojectionErrorThreshold: a.reprojectionErrorThreshold, tileClass: gl, tileGrid: c, tileUrlFunction: function tileUrlFunction(a) {
        if (a) {
          var c = a[0],
              d = a[1];a = -a[2] - 1;return k + "TileGroup" + ((d + a * f[c][0] + h[c]) / 256 | 0) + "/" + c + "-" + d + "-" + a + ".jpg";
        }
      } });
  }F(fl, al);function gl(a, c, d, e, f) {
    Uk.call(this, a, c, d, e, f);this.g = {};
  }F(gl, Uk);
  gl.prototype.oa = function (a) {
    var c = void 0 !== a ? x(a).toString() : "";if (c in this.g) return this.g[c];a = gl.S.oa.call(this, a);if (2 == this.state) {
      if (256 == a.width && 256 == a.height) return this.g[c] = a;var d = Pe(256, 256);d.drawImage(a, 0, 0);return this.g[c] = d.canvas;
    }return a;
  };B("ol.animation.rotate", Kc);B("ol.animation.zoom", Lc);B("ol.Collection", Sc);Sc.prototype.getArray = Sc.prototype.Dd;B("ol.control.Control", Ud);Ud.prototype.changed = Ud.prototype.b;B("ol.control.Zoom", Ee);B("ol.control.MousePosition", Fe);B("ol.control.OverviewMap", Ok);B("ol.coordinate.createStringXY", function (a) {
    return function (c) {
      return c ? "{x}, {y}".replace("{x}", c[0].toFixed(a)).replace("{y}", c[1].toFixed(a)) : "";
    };
  });B("ol.extent.getCenter", Db);B("ol.extent.getTopLeft", Hb);B("ol.Feature", Y);
  Y.prototype.clone = Y.prototype.clone;Y.prototype.get = Y.prototype.get;Y.prototype.getId = Y.prototype.xa;Y.prototype.getGeometry = Y.prototype.Y;Y.prototype.setGeometry = Y.prototype.wb;Y.prototype.setId = Y.prototype.ae;Y.prototype.setProperties = Y.prototype.w;B("ol.geom.Polygon", wc);wc.prototype.getCoordinates = wc.prototype.G;B("ol.has.CANVAS", Ze);B("ol.inherits", F);B("ol.interaction.DragPan", Tg);B("ol.interaction.DragRotate", Yg);B("ol.interaction.DragRotateAndZoom", Wk);B("ol.interaction.DragZoom", lh);
  B("ol.interaction.KeyboardPan", mh);B("ol.interaction.KeyboardZoom", oh);B("ol.interaction.MouseWheelZoom", qh);B("ol.interaction.PinchRotate", sh);B("ol.interaction.PinchZoom", wh);Uk.prototype.getImage = Uk.prototype.oa;B("ol.layer.Image", Oh);B("ol.layer.Layer", $f);$f.prototype.changed = $f.prototype.b;$f.prototype.on = $f.prototype.$;$f.prototype.un = $f.prototype.ba;B("ol.layer.Tile", Ph);B("ol.layer.Vector", gi);gi.prototype.getSource = gi.prototype.Z;B("ol.proj.Projection", Pb);B("ol.Map", Z);
  Z.prototype.addControl = Z.prototype.Dc;Z.prototype.addLayer = Z.prototype.Ib;Z.prototype.beforeRender = Z.prototype.ea;Z.prototype.forEachFeatureAtPixel = Z.prototype.Fc;Z.prototype.getLayers = Z.prototype.dc;Z.prototype.getTargetElement = Z.prototype.Va;Z.prototype.getView = Z.prototype.F;Z.prototype.on = Z.prototype.$;Z.prototype.render = Z.prototype.render;Z.prototype.renderSync = Z.prototype.Zd;Z.prototype.removeLayer = Z.prototype.Wd;Z.prototype.un = Z.prototype.ba;B("ol.proj.Projection", Pb);
  B("ol.source.ImageStatic", el);B("ol.source.TileImage", al);B("ol.source.Vector", sj);sj.prototype.addFeature = sj.prototype.Gb;sj.prototype.addFeatures = sj.prototype.Hb;sj.prototype.clear = sj.prototype.clear;sj.prototype.getFeatures = sj.prototype.Jd;sj.prototype.removeFeature = sj.prototype.jc;B("ol.source.Zoomify", fl);B("ol.style.Fill", Uh);B("ol.style.Style", ai);B("ol.style.Stroke", Zh);B("ol.tilegrid.TileGrid", ge);B("ol.View", W);W.prototype.getCenter = W.prototype.X;W.prototype.getProperties = W.prototype.va;
  W.prototype.getRotation = W.prototype.P;W.prototype.getResolution = W.prototype.H;W.prototype.getZoom = W.prototype.Qc;W.prototype.on = W.prototype.$;W.prototype.rotate = W.prototype.rotate;W.prototype.setCenter = W.prototype.la;W.prototype.setZoom = W.prototype.be;W.prototype.un = W.prototype.ba;Tj.prototype.getGL = Tj.prototype.Kd;Tj.prototype.useProgram = Tj.prototype.ib;
})();
//# sourceMappingURL=ol3-dlf.js.map
