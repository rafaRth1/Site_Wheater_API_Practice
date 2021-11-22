(self.webpackChunksite_whaterapi = self.webpackChunksite_whaterapi || []).push([
  [826],
  {
    669: (e, t, r) => {
      e.exports = r(609);
    },
    448: (e, t, r) => {
      "use strict";
      var n = r(867),
        o = r(26),
        s = r(372),
        i = r(327),
        a = r(97),
        u = r(109),
        c = r(985),
        f = r(61),
        l = r(655),
        p = r(263);
      e.exports = function (e) {
        return new Promise(function (t, r) {
          var d,
            h = e.data,
            m = e.headers,
            v = e.responseType;
          function y() {
            e.cancelToken && e.cancelToken.unsubscribe(d),
              e.signal && e.signal.removeEventListener("abort", d);
          }
          n.isFormData(h) && delete m["Content-Type"];
          var g = new XMLHttpRequest();
          if (e.auth) {
            var b = e.auth.username || "",
              w = e.auth.password
                ? unescape(encodeURIComponent(e.auth.password))
                : "";
            m.Authorization = "Basic " + btoa(b + ":" + w);
          }
          var x = a(e.baseURL, e.url);
          function E() {
            if (g) {
              var n =
                  "getAllResponseHeaders" in g
                    ? u(g.getAllResponseHeaders())
                    : null,
                s = {
                  data:
                    v && "text" !== v && "json" !== v
                      ? g.response
                      : g.responseText,
                  status: g.status,
                  statusText: g.statusText,
                  headers: n,
                  config: e,
                  request: g,
                };
              o(
                function (e) {
                  t(e), y();
                },
                function (e) {
                  r(e), y();
                },
                s
              ),
                (g = null);
            }
          }
          if (
            (g.open(
              e.method.toUpperCase(),
              i(x, e.params, e.paramsSerializer),
              !0
            ),
            (g.timeout = e.timeout),
            "onloadend" in g
              ? (g.onloadend = E)
              : (g.onreadystatechange = function () {
                  g &&
                    4 === g.readyState &&
                    (0 !== g.status ||
                      (g.responseURL &&
                        0 === g.responseURL.indexOf("file:"))) &&
                    setTimeout(E);
                }),
            (g.onabort = function () {
              g && (r(f("Request aborted", e, "ECONNABORTED", g)), (g = null));
            }),
            (g.onerror = function () {
              r(f("Network Error", e, null, g)), (g = null);
            }),
            (g.ontimeout = function () {
              var t = e.timeout
                  ? "timeout of " + e.timeout + "ms exceeded"
                  : "timeout exceeded",
                n = e.transitional || l.transitional;
              e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                r(
                  f(
                    t,
                    e,
                    n.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED",
                    g
                  )
                ),
                (g = null);
            }),
            n.isStandardBrowserEnv())
          ) {
            var S =
              (e.withCredentials || c(x)) && e.xsrfCookieName
                ? s.read(e.xsrfCookieName)
                : void 0;
            S && (m[e.xsrfHeaderName] = S);
          }
          "setRequestHeader" in g &&
            n.forEach(m, function (e, t) {
              void 0 === h && "content-type" === t.toLowerCase()
                ? delete m[t]
                : g.setRequestHeader(t, e);
            }),
            n.isUndefined(e.withCredentials) ||
              (g.withCredentials = !!e.withCredentials),
            v && "json" !== v && (g.responseType = e.responseType),
            "function" == typeof e.onDownloadProgress &&
              g.addEventListener("progress", e.onDownloadProgress),
            "function" == typeof e.onUploadProgress &&
              g.upload &&
              g.upload.addEventListener("progress", e.onUploadProgress),
            (e.cancelToken || e.signal) &&
              ((d = function (e) {
                g &&
                  (r(!e || (e && e.type) ? new p("canceled") : e),
                  g.abort(),
                  (g = null));
              }),
              e.cancelToken && e.cancelToken.subscribe(d),
              e.signal &&
                (e.signal.aborted
                  ? d()
                  : e.signal.addEventListener("abort", d))),
            h || (h = null),
            g.send(h);
        });
      };
    },
    609: (e, t, r) => {
      "use strict";
      var n = r(867),
        o = r(849),
        s = r(321),
        i = r(185),
        a = (function e(t) {
          var r = new s(t),
            a = o(s.prototype.request, r);
          return (
            n.extend(a, s.prototype, r),
            n.extend(a, r),
            (a.create = function (r) {
              return e(i(t, r));
            }),
            a
          );
        })(r(655));
      (a.Axios = s),
        (a.Cancel = r(263)),
        (a.CancelToken = r(972)),
        (a.isCancel = r(502)),
        (a.VERSION = r(288).version),
        (a.all = function (e) {
          return Promise.all(e);
        }),
        (a.spread = r(713)),
        (a.isAxiosError = r(268)),
        (e.exports = a),
        (e.exports.default = a);
    },
    263: (e) => {
      "use strict";
      function t(e) {
        this.message = e;
      }
      (t.prototype.toString = function () {
        return "Cancel" + (this.message ? ": " + this.message : "");
      }),
        (t.prototype.__CANCEL__ = !0),
        (e.exports = t);
    },
    972: (e, t, r) => {
      "use strict";
      var n = r(263);
      function o(e) {
        if ("function" != typeof e)
          throw new TypeError("executor must be a function.");
        var t;
        this.promise = new Promise(function (e) {
          t = e;
        });
        var r = this;
        this.promise.then(function (e) {
          if (r._listeners) {
            var t,
              n = r._listeners.length;
            for (t = 0; t < n; t++) r._listeners[t](e);
            r._listeners = null;
          }
        }),
          (this.promise.then = function (e) {
            var t,
              n = new Promise(function (e) {
                r.subscribe(e), (t = e);
              }).then(e);
            return (
              (n.cancel = function () {
                r.unsubscribe(t);
              }),
              n
            );
          }),
          e(function (e) {
            r.reason || ((r.reason = new n(e)), t(r.reason));
          });
      }
      (o.prototype.throwIfRequested = function () {
        if (this.reason) throw this.reason;
      }),
        (o.prototype.subscribe = function (e) {
          this.reason
            ? e(this.reason)
            : this._listeners
            ? this._listeners.push(e)
            : (this._listeners = [e]);
        }),
        (o.prototype.unsubscribe = function (e) {
          if (this._listeners) {
            var t = this._listeners.indexOf(e);
            -1 !== t && this._listeners.splice(t, 1);
          }
        }),
        (o.source = function () {
          var e;
          return {
            token: new o(function (t) {
              e = t;
            }),
            cancel: e,
          };
        }),
        (e.exports = o);
    },
    502: (e) => {
      "use strict";
      e.exports = function (e) {
        return !(!e || !e.__CANCEL__);
      };
    },
    321: (e, t, r) => {
      "use strict";
      var n = r(867),
        o = r(327),
        s = r(782),
        i = r(572),
        a = r(185),
        u = r(875),
        c = u.validators;
      function f(e) {
        (this.defaults = e),
          (this.interceptors = { request: new s(), response: new s() });
      }
      (f.prototype.request = function (e) {
        "string" == typeof e
          ? ((e = arguments[1] || {}).url = arguments[0])
          : (e = e || {}),
          (e = a(this.defaults, e)).method
            ? (e.method = e.method.toLowerCase())
            : this.defaults.method
            ? (e.method = this.defaults.method.toLowerCase())
            : (e.method = "get");
        var t = e.transitional;
        void 0 !== t &&
          u.assertOptions(
            t,
            {
              silentJSONParsing: c.transitional(c.boolean),
              forcedJSONParsing: c.transitional(c.boolean),
              clarifyTimeoutError: c.transitional(c.boolean),
            },
            !1
          );
        var r = [],
          n = !0;
        this.interceptors.request.forEach(function (t) {
          ("function" == typeof t.runWhen && !1 === t.runWhen(e)) ||
            ((n = n && t.synchronous), r.unshift(t.fulfilled, t.rejected));
        });
        var o,
          s = [];
        if (
          (this.interceptors.response.forEach(function (e) {
            s.push(e.fulfilled, e.rejected);
          }),
          !n)
        ) {
          var f = [i, void 0];
          for (
            Array.prototype.unshift.apply(f, r),
              f = f.concat(s),
              o = Promise.resolve(e);
            f.length;

          )
            o = o.then(f.shift(), f.shift());
          return o;
        }
        for (var l = e; r.length; ) {
          var p = r.shift(),
            d = r.shift();
          try {
            l = p(l);
          } catch (e) {
            d(e);
            break;
          }
        }
        try {
          o = i(l);
        } catch (e) {
          return Promise.reject(e);
        }
        for (; s.length; ) o = o.then(s.shift(), s.shift());
        return o;
      }),
        (f.prototype.getUri = function (e) {
          return (
            (e = a(this.defaults, e)),
            o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
          );
        }),
        n.forEach(["delete", "get", "head", "options"], function (e) {
          f.prototype[e] = function (t, r) {
            return this.request(
              a(r || {}, { method: e, url: t, data: (r || {}).data })
            );
          };
        }),
        n.forEach(["post", "put", "patch"], function (e) {
          f.prototype[e] = function (t, r, n) {
            return this.request(a(n || {}, { method: e, url: t, data: r }));
          };
        }),
        (e.exports = f);
    },
    782: (e, t, r) => {
      "use strict";
      var n = r(867);
      function o() {
        this.handlers = [];
      }
      (o.prototype.use = function (e, t, r) {
        return (
          this.handlers.push({
            fulfilled: e,
            rejected: t,
            synchronous: !!r && r.synchronous,
            runWhen: r ? r.runWhen : null,
          }),
          this.handlers.length - 1
        );
      }),
        (o.prototype.eject = function (e) {
          this.handlers[e] && (this.handlers[e] = null);
        }),
        (o.prototype.forEach = function (e) {
          n.forEach(this.handlers, function (t) {
            null !== t && e(t);
          });
        }),
        (e.exports = o);
    },
    97: (e, t, r) => {
      "use strict";
      var n = r(793),
        o = r(303);
      e.exports = function (e, t) {
        return e && !n(t) ? o(e, t) : t;
      };
    },
    61: (e, t, r) => {
      "use strict";
      var n = r(481);
      e.exports = function (e, t, r, o, s) {
        var i = new Error(e);
        return n(i, t, r, o, s);
      };
    },
    572: (e, t, r) => {
      "use strict";
      var n = r(867),
        o = r(527),
        s = r(502),
        i = r(655),
        a = r(263);
      function u(e) {
        if (
          (e.cancelToken && e.cancelToken.throwIfRequested(),
          e.signal && e.signal.aborted)
        )
          throw new a("canceled");
      }
      e.exports = function (e) {
        return (
          u(e),
          (e.headers = e.headers || {}),
          (e.data = o.call(e, e.data, e.headers, e.transformRequest)),
          (e.headers = n.merge(
            e.headers.common || {},
            e.headers[e.method] || {},
            e.headers
          )),
          n.forEach(
            ["delete", "get", "head", "post", "put", "patch", "common"],
            function (t) {
              delete e.headers[t];
            }
          ),
          (e.adapter || i.adapter)(e).then(
            function (t) {
              return (
                u(e),
                (t.data = o.call(e, t.data, t.headers, e.transformResponse)),
                t
              );
            },
            function (t) {
              return (
                s(t) ||
                  (u(e),
                  t &&
                    t.response &&
                    (t.response.data = o.call(
                      e,
                      t.response.data,
                      t.response.headers,
                      e.transformResponse
                    ))),
                Promise.reject(t)
              );
            }
          )
        );
      };
    },
    481: (e) => {
      "use strict";
      e.exports = function (e, t, r, n, o) {
        return (
          (e.config = t),
          r && (e.code = r),
          (e.request = n),
          (e.response = o),
          (e.isAxiosError = !0),
          (e.toJSON = function () {
            return {
              message: this.message,
              name: this.name,
              description: this.description,
              number: this.number,
              fileName: this.fileName,
              lineNumber: this.lineNumber,
              columnNumber: this.columnNumber,
              stack: this.stack,
              config: this.config,
              code: this.code,
              status:
                this.response && this.response.status
                  ? this.response.status
                  : null,
            };
          }),
          e
        );
      };
    },
    185: (e, t, r) => {
      "use strict";
      var n = r(867);
      e.exports = function (e, t) {
        t = t || {};
        var r = {};
        function o(e, t) {
          return n.isPlainObject(e) && n.isPlainObject(t)
            ? n.merge(e, t)
            : n.isPlainObject(t)
            ? n.merge({}, t)
            : n.isArray(t)
            ? t.slice()
            : t;
        }
        function s(r) {
          return n.isUndefined(t[r])
            ? n.isUndefined(e[r])
              ? void 0
              : o(void 0, e[r])
            : o(e[r], t[r]);
        }
        function i(e) {
          if (!n.isUndefined(t[e])) return o(void 0, t[e]);
        }
        function a(r) {
          return n.isUndefined(t[r])
            ? n.isUndefined(e[r])
              ? void 0
              : o(void 0, e[r])
            : o(void 0, t[r]);
        }
        function u(r) {
          return r in t ? o(e[r], t[r]) : r in e ? o(void 0, e[r]) : void 0;
        }
        var c = {
          url: i,
          method: i,
          data: i,
          baseURL: a,
          transformRequest: a,
          transformResponse: a,
          paramsSerializer: a,
          timeout: a,
          timeoutMessage: a,
          withCredentials: a,
          adapter: a,
          responseType: a,
          xsrfCookieName: a,
          xsrfHeaderName: a,
          onUploadProgress: a,
          onDownloadProgress: a,
          decompress: a,
          maxContentLength: a,
          maxBodyLength: a,
          transport: a,
          httpAgent: a,
          httpsAgent: a,
          cancelToken: a,
          socketPath: a,
          responseEncoding: a,
          validateStatus: u,
        };
        return (
          n.forEach(Object.keys(e).concat(Object.keys(t)), function (e) {
            var t = c[e] || s,
              o = t(e);
            (n.isUndefined(o) && t !== u) || (r[e] = o);
          }),
          r
        );
      };
    },
    26: (e, t, r) => {
      "use strict";
      var n = r(61);
      e.exports = function (e, t, r) {
        var o = r.config.validateStatus;
        r.status && o && !o(r.status)
          ? t(
              n(
                "Request failed with status code " + r.status,
                r.config,
                null,
                r.request,
                r
              )
            )
          : e(r);
      };
    },
    527: (e, t, r) => {
      "use strict";
      var n = r(867),
        o = r(655);
      e.exports = function (e, t, r) {
        var s = this || o;
        return (
          n.forEach(r, function (r) {
            e = r.call(s, e, t);
          }),
          e
        );
      };
    },
    655: (e, t, r) => {
      "use strict";
      var n = r(867),
        o = r(16),
        s = r(481),
        i = { "Content-Type": "application/x-www-form-urlencoded" };
      function a(e, t) {
        !n.isUndefined(e) &&
          n.isUndefined(e["Content-Type"]) &&
          (e["Content-Type"] = t);
      }
      var u,
        c = {
          transitional: {
            silentJSONParsing: !0,
            forcedJSONParsing: !0,
            clarifyTimeoutError: !1,
          },
          adapter:
            (("undefined" != typeof XMLHttpRequest ||
              ("undefined" != typeof process &&
                "[object process]" ===
                  Object.prototype.toString.call(process))) &&
              (u = r(448)),
            u),
          transformRequest: [
            function (e, t) {
              return (
                o(t, "Accept"),
                o(t, "Content-Type"),
                n.isFormData(e) ||
                n.isArrayBuffer(e) ||
                n.isBuffer(e) ||
                n.isStream(e) ||
                n.isFile(e) ||
                n.isBlob(e)
                  ? e
                  : n.isArrayBufferView(e)
                  ? e.buffer
                  : n.isURLSearchParams(e)
                  ? (a(t, "application/x-www-form-urlencoded;charset=utf-8"),
                    e.toString())
                  : n.isObject(e) ||
                    (t && "application/json" === t["Content-Type"])
                  ? (a(t, "application/json"),
                    (function (e, t, r) {
                      if (n.isString(e))
                        try {
                          return (0, JSON.parse)(e), n.trim(e);
                        } catch (e) {
                          if ("SyntaxError" !== e.name) throw e;
                        }
                      return (0, JSON.stringify)(e);
                    })(e))
                  : e
              );
            },
          ],
          transformResponse: [
            function (e) {
              var t = this.transitional || c.transitional,
                r = t && t.silentJSONParsing,
                o = t && t.forcedJSONParsing,
                i = !r && "json" === this.responseType;
              if (i || (o && n.isString(e) && e.length))
                try {
                  return JSON.parse(e);
                } catch (e) {
                  if (i) {
                    if ("SyntaxError" === e.name)
                      throw s(e, this, "E_JSON_PARSE");
                    throw e;
                  }
                }
              return e;
            },
          ],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          maxBodyLength: -1,
          validateStatus: function (e) {
            return e >= 200 && e < 300;
          },
          headers: { common: { Accept: "application/json, text/plain, */*" } },
        };
      n.forEach(["delete", "get", "head"], function (e) {
        c.headers[e] = {};
      }),
        n.forEach(["post", "put", "patch"], function (e) {
          c.headers[e] = n.merge(i);
        }),
        (e.exports = c);
    },
    288: (e) => {
      e.exports = { version: "0.24.0" };
    },
    849: (e) => {
      "use strict";
      e.exports = function (e, t) {
        return function () {
          for (var r = new Array(arguments.length), n = 0; n < r.length; n++)
            r[n] = arguments[n];
          return e.apply(t, r);
        };
      };
    },
    327: (e, t, r) => {
      "use strict";
      var n = r(867);
      function o(e) {
        return encodeURIComponent(e)
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+")
          .replace(/%5B/gi, "[")
          .replace(/%5D/gi, "]");
      }
      e.exports = function (e, t, r) {
        if (!t) return e;
        var s;
        if (r) s = r(t);
        else if (n.isURLSearchParams(t)) s = t.toString();
        else {
          var i = [];
          n.forEach(t, function (e, t) {
            null != e &&
              (n.isArray(e) ? (t += "[]") : (e = [e]),
              n.forEach(e, function (e) {
                n.isDate(e)
                  ? (e = e.toISOString())
                  : n.isObject(e) && (e = JSON.stringify(e)),
                  i.push(o(t) + "=" + o(e));
              }));
          }),
            (s = i.join("&"));
        }
        if (s) {
          var a = e.indexOf("#");
          -1 !== a && (e = e.slice(0, a)),
            (e += (-1 === e.indexOf("?") ? "?" : "&") + s);
        }
        return e;
      };
    },
    303: (e) => {
      "use strict";
      e.exports = function (e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
      };
    },
    372: (e, t, r) => {
      "use strict";
      var n = r(867);
      e.exports = n.isStandardBrowserEnv()
        ? {
            write: function (e, t, r, o, s, i) {
              var a = [];
              a.push(e + "=" + encodeURIComponent(t)),
                n.isNumber(r) && a.push("expires=" + new Date(r).toGMTString()),
                n.isString(o) && a.push("path=" + o),
                n.isString(s) && a.push("domain=" + s),
                !0 === i && a.push("secure"),
                (document.cookie = a.join("; "));
            },
            read: function (e) {
              var t = document.cookie.match(
                new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
              );
              return t ? decodeURIComponent(t[3]) : null;
            },
            remove: function (e) {
              this.write(e, "", Date.now() - 864e5);
            },
          }
        : {
            write: function () {},
            read: function () {
              return null;
            },
            remove: function () {},
          };
    },
    793: (e) => {
      "use strict";
      e.exports = function (e) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
      };
    },
    268: (e) => {
      "use strict";
      e.exports = function (e) {
        return "object" == typeof e && !0 === e.isAxiosError;
      };
    },
    985: (e, t, r) => {
      "use strict";
      var n = r(867);
      e.exports = n.isStandardBrowserEnv()
        ? (function () {
            var e,
              t = /(msie|trident)/i.test(navigator.userAgent),
              r = document.createElement("a");
            function o(e) {
              var n = e;
              return (
                t && (r.setAttribute("href", n), (n = r.href)),
                r.setAttribute("href", n),
                {
                  href: r.href,
                  protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                  host: r.host,
                  search: r.search ? r.search.replace(/^\?/, "") : "",
                  hash: r.hash ? r.hash.replace(/^#/, "") : "",
                  hostname: r.hostname,
                  port: r.port,
                  pathname:
                    "/" === r.pathname.charAt(0)
                      ? r.pathname
                      : "/" + r.pathname,
                }
              );
            }
            return (
              (e = o(window.location.href)),
              function (t) {
                var r = n.isString(t) ? o(t) : t;
                return r.protocol === e.protocol && r.host === e.host;
              }
            );
          })()
        : function () {
            return !0;
          };
    },
    16: (e, t, r) => {
      "use strict";
      var n = r(867);
      e.exports = function (e, t) {
        n.forEach(e, function (r, n) {
          n !== t &&
            n.toUpperCase() === t.toUpperCase() &&
            ((e[t] = r), delete e[n]);
        });
      };
    },
    109: (e, t, r) => {
      "use strict";
      var n = r(867),
        o = [
          "age",
          "authorization",
          "content-length",
          "content-type",
          "etag",
          "expires",
          "from",
          "host",
          "if-modified-since",
          "if-unmodified-since",
          "last-modified",
          "location",
          "max-forwards",
          "proxy-authorization",
          "referer",
          "retry-after",
          "user-agent",
        ];
      e.exports = function (e) {
        var t,
          r,
          s,
          i = {};
        return e
          ? (n.forEach(e.split("\n"), function (e) {
              if (
                ((s = e.indexOf(":")),
                (t = n.trim(e.substr(0, s)).toLowerCase()),
                (r = n.trim(e.substr(s + 1))),
                t)
              ) {
                if (i[t] && o.indexOf(t) >= 0) return;
                i[t] =
                  "set-cookie" === t
                    ? (i[t] ? i[t] : []).concat([r])
                    : i[t]
                    ? i[t] + ", " + r
                    : r;
              }
            }),
            i)
          : i;
      };
    },
    713: (e) => {
      "use strict";
      e.exports = function (e) {
        return function (t) {
          return e.apply(null, t);
        };
      };
    },
    875: (e, t, r) => {
      "use strict";
      var n = r(288).version,
        o = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(
        function (e, t) {
          o[e] = function (r) {
            return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
          };
        }
      );
      var s = {};
      (o.transitional = function (e, t, r) {
        function o(e, t) {
          return (
            "[Axios v" +
            n +
            "] Transitional option '" +
            e +
            "'" +
            t +
            (r ? ". " + r : "")
          );
        }
        return function (r, n, i) {
          if (!1 === e)
            throw new Error(o(n, " has been removed" + (t ? " in " + t : "")));
          return (
            t &&
              !s[n] &&
              ((s[n] = !0),
              console.warn(
                o(
                  n,
                  " has been deprecated since v" +
                    t +
                    " and will be removed in the near future"
                )
              )),
            !e || e(r, n, i)
          );
        };
      }),
        (e.exports = {
          assertOptions: function (e, t, r) {
            if ("object" != typeof e)
              throw new TypeError("options must be an object");
            for (var n = Object.keys(e), o = n.length; o-- > 0; ) {
              var s = n[o],
                i = t[s];
              if (i) {
                var a = e[s],
                  u = void 0 === a || i(a, s, e);
                if (!0 !== u)
                  throw new TypeError("option " + s + " must be " + u);
              } else if (!0 !== r) throw Error("Unknown option " + s);
            }
          },
          validators: o,
        });
    },
    867: (e, t, r) => {
      "use strict";
      var n = r(849),
        o = Object.prototype.toString;
      function s(e) {
        return "[object Array]" === o.call(e);
      }
      function i(e) {
        return void 0 === e;
      }
      function a(e) {
        return null !== e && "object" == typeof e;
      }
      function u(e) {
        if ("[object Object]" !== o.call(e)) return !1;
        var t = Object.getPrototypeOf(e);
        return null === t || t === Object.prototype;
      }
      function c(e) {
        return "[object Function]" === o.call(e);
      }
      function f(e, t) {
        if (null != e)
          if (("object" != typeof e && (e = [e]), s(e)))
            for (var r = 0, n = e.length; r < n; r++) t.call(null, e[r], r, e);
          else
            for (var o in e)
              Object.prototype.hasOwnProperty.call(e, o) &&
                t.call(null, e[o], o, e);
      }
      e.exports = {
        isArray: s,
        isArrayBuffer: function (e) {
          return "[object ArrayBuffer]" === o.call(e);
        },
        isBuffer: function (e) {
          return (
            null !== e &&
            !i(e) &&
            null !== e.constructor &&
            !i(e.constructor) &&
            "function" == typeof e.constructor.isBuffer &&
            e.constructor.isBuffer(e)
          );
        },
        isFormData: function (e) {
          return "undefined" != typeof FormData && e instanceof FormData;
        },
        isArrayBufferView: function (e) {
          return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
            ? ArrayBuffer.isView(e)
            : e && e.buffer && e.buffer instanceof ArrayBuffer;
        },
        isString: function (e) {
          return "string" == typeof e;
        },
        isNumber: function (e) {
          return "number" == typeof e;
        },
        isObject: a,
        isPlainObject: u,
        isUndefined: i,
        isDate: function (e) {
          return "[object Date]" === o.call(e);
        },
        isFile: function (e) {
          return "[object File]" === o.call(e);
        },
        isBlob: function (e) {
          return "[object Blob]" === o.call(e);
        },
        isFunction: c,
        isStream: function (e) {
          return a(e) && c(e.pipe);
        },
        isURLSearchParams: function (e) {
          return (
            "undefined" != typeof URLSearchParams &&
            e instanceof URLSearchParams
          );
        },
        isStandardBrowserEnv: function () {
          return (
            ("undefined" == typeof navigator ||
              ("ReactNative" !== navigator.product &&
                "NativeScript" !== navigator.product &&
                "NS" !== navigator.product)) &&
            "undefined" != typeof window &&
            "undefined" != typeof document
          );
        },
        forEach: f,
        merge: function e() {
          var t = {};
          function r(r, n) {
            u(t[n]) && u(r)
              ? (t[n] = e(t[n], r))
              : u(r)
              ? (t[n] = e({}, r))
              : s(r)
              ? (t[n] = r.slice())
              : (t[n] = r);
          }
          for (var n = 0, o = arguments.length; n < o; n++) f(arguments[n], r);
          return t;
        },
        extend: function (e, t, r) {
          return (
            f(t, function (t, o) {
              e[o] = r && "function" == typeof t ? n(t, r) : t;
            }),
            e
          );
        },
        trim: function (e) {
          return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
        },
        stripBOM: function (e) {
          return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
        },
      };
    },
    536: (e, t, r) => {
      "use strict";
      r(734);
      var n = r(669),
        o = r.n(n);
      const s = function (e) {
        return (
          (t = void 0),
          (r = void 0),
          (s = function () {
            var t;
            return (function (e, t) {
              var r,
                n,
                o,
                s,
                i = {
                  label: 0,
                  sent: function () {
                    if (1 & o[0]) throw o[1];
                    return o[1];
                  },
                  trys: [],
                  ops: [],
                };
              return (
                (s = { next: a(0), throw: a(1), return: a(2) }),
                "function" == typeof Symbol &&
                  (s[Symbol.iterator] = function () {
                    return this;
                  }),
                s
              );
              function a(s) {
                return function (a) {
                  return (function (s) {
                    if (r)
                      throw new TypeError("Generator is already executing.");
                    for (; i; )
                      try {
                        if (
                          ((r = 1),
                          n &&
                            (o =
                              2 & s[0]
                                ? n.return
                                : s[0]
                                ? n.throw || ((o = n.return) && o.call(n), 0)
                                : n.next) &&
                            !(o = o.call(n, s[1])).done)
                        )
                          return o;
                        switch (
                          ((n = 0), o && (s = [2 & s[0], o.value]), s[0])
                        ) {
                          case 0:
                          case 1:
                            o = s;
                            break;
                          case 4:
                            return i.label++, { value: s[1], done: !1 };
                          case 5:
                            i.label++, (n = s[1]), (s = [0]);
                            continue;
                          case 7:
                            (s = i.ops.pop()), i.trys.pop();
                            continue;
                          default:
                            if (
                              !(
                                (o =
                                  (o = i.trys).length > 0 && o[o.length - 1]) ||
                                (6 !== s[0] && 2 !== s[0])
                              )
                            ) {
                              i = 0;
                              continue;
                            }
                            if (
                              3 === s[0] &&
                              (!o || (s[1] > o[0] && s[1] < o[3]))
                            ) {
                              i.label = s[1];
                              break;
                            }
                            if (6 === s[0] && i.label < o[1]) {
                              (i.label = o[1]), (o = s);
                              break;
                            }
                            if (o && i.label < o[2]) {
                              (i.label = o[2]), i.ops.push(s);
                              break;
                            }
                            o[2] && i.ops.pop(), i.trys.pop();
                            continue;
                        }
                        s = t.call(e, i);
                      } catch (e) {
                        (s = [6, e]), (n = 0);
                      } finally {
                        r = o = 0;
                      }
                    if (5 & s[0]) throw s[1];
                    return { value: s[0] ? s[1] : void 0, done: !0 };
                  })([s, a]);
                };
              }
            })(this, function (r) {
              switch (r.label) {
                case 0:
                  return [
                    4,
                    o().get("/current.json?key=&q=" + e, {
                      baseURL: "http://api.weatherapi.com/v1",
                      params: {
                        key: "29b74c77ae35422f89c21401211410",
                        responseType: "json",
                      },
                    }),
                  ];
                case 1:
                  return (t = r.sent().data), console.log(t), [2];
              }
            });
          }),
          new ((n = void 0) || (n = Promise))(function (e, o) {
            function i(e) {
              try {
                u(s.next(e));
              } catch (e) {
                o(e);
              }
            }
            function a(e) {
              try {
                u(s.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function u(t) {
              var r;
              t.done
                ? e(t.value)
                : ((r = t.value),
                  r instanceof n
                    ? r
                    : new n(function (e) {
                        e(r);
                      })).then(i, a);
            }
            u((s = s.apply(t, r || [])).next());
          })
        );
        var t, r, n, s;
      };
      var i,
        a = document.querySelector(".searching");
      null == (i = document.querySelector(".searching")) ||
        i.addEventListener("keydown", function (e) {
          "Enter" === e.key && s(a.value);
        });
    },
    734: (e, t, r) => {
      "use strict";
      e.exports = r.p + "img/weather-forecast.png";
    },
  },
  (e) => {
    e((e.s = 536));
  },
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFjLGNBS3pERixPQUZNQSxFQUEwQnBFLFNBQVNzRSxjQUFjLGdCQUV2REYsRUFBZ0JuUCxpQkFBaUIsV0FBVyxTQUFDcUosR0FDN0IsVUFBVkEsRUFBRTFKLEtBQ0osRUFBbUJ5UCxFQUFVclIsVyIsInNvdXJjZXMiOlsid2VicGFjazovL3NpdGVfd2hhdGVyYXBpLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzIiwid2VicGFjazovL3NpdGVfd2hhdGVyYXBpLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJ3ZWJwYWNrOi8vc2l0ZV93aGF0ZXJhcGkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzIiwid2VicGFjazovL3NpdGVfd2hhdGVyYXBpLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzIiwid2VicGFjazovL3NpdGVfd2hhdGVyYXBpLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJ3ZWJwYWNrOi8vc2l0ZV93aGF0ZXJhcGkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qcyIsIndlYnBhY2s6Ly9zaXRlX3doYXRlcmFwaS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qcyIsIndlYnBhY2s6Ly9zaXRlX3doYXRlcmFwaS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vc2l0ZV93aGF0ZXJhcGkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvYnVpbGRGdWxsUGF0aC5qcyIsIndlYnBhY2s6Ly9zaXRlX3doYXRlcmFwaS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qcyIsIndlYnBhY2s6Ly9zaXRlX3doYXRlcmFwaS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vc2l0ZV93aGF0ZXJhcGkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZW5oYW5jZUVycm9yLmpzIiwid2VicGFjazovL3NpdGVfd2hhdGVyYXBpLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL21lcmdlQ29uZmlnLmpzIiwid2VicGFjazovL3NpdGVfd2hhdGVyYXBpLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIndlYnBhY2s6Ly9zaXRlX3doYXRlcmFwaS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS90cmFuc2Zvcm1EYXRhLmpzIiwid2VicGFjazovL3NpdGVfd2hhdGVyYXBpLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly9zaXRlX3doYXRlcmFwaS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZW52L2RhdGEuanMiLCJ3ZWJwYWNrOi8vc2l0ZV93aGF0ZXJhcGkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qcyIsIndlYnBhY2s6Ly9zaXRlX3doYXRlcmFwaS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIndlYnBhY2s6Ly9zaXRlX3doYXRlcmFwaS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qcyIsIndlYnBhY2s6Ly9zaXRlX3doYXRlcmFwaS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzIiwid2VicGFjazovL3NpdGVfd2hhdGVyYXBpLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCJ3ZWJwYWNrOi8vc2l0ZV93aGF0ZXJhcGkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBeGlvc0Vycm9yLmpzIiwid2VicGFjazovL3NpdGVfd2hhdGVyYXBpLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIndlYnBhY2s6Ly9zaXRlX3doYXRlcmFwaS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzIiwid2VicGFjazovL3NpdGVfd2hhdGVyYXBpLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyIsIndlYnBhY2s6Ly9zaXRlX3doYXRlcmFwaS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiLCJ3ZWJwYWNrOi8vc2l0ZV93aGF0ZXJhcGkvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvdmFsaWRhdG9yLmpzIiwid2VicGFjazovL3NpdGVfd2hhdGVyYXBpLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly9zaXRlX3doYXRlcmFwaS8uL3NyYy90eXBlc2NyaXB0L2FwaS9yZXF1ZXN0SW5mb3JtYXRpb24udHMiLCJ3ZWJwYWNrOi8vc2l0ZV93aGF0ZXJhcGkvLi9zcmMvdHlwZXNjcmlwdC9zZWFyY2hpbmdJbnB1dC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2F4aW9zJyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgc2V0dGxlID0gcmVxdWlyZSgnLi8uLi9jb3JlL3NldHRsZScpO1xudmFyIGNvb2tpZXMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29va2llcycpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgYnVpbGRGdWxsUGF0aCA9IHJlcXVpcmUoJy4uL2NvcmUvYnVpbGRGdWxsUGF0aCcpO1xudmFyIHBhcnNlSGVhZGVycyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9wYXJzZUhlYWRlcnMnKTtcbnZhciBpc1VSTFNhbWVPcmlnaW4gPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luJyk7XG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuLi9jb3JlL2NyZWF0ZUVycm9yJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLi9kZWZhdWx0cycpO1xudmFyIENhbmNlbCA9IHJlcXVpcmUoJy4uL2NhbmNlbC9DYW5jZWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB4aHJBZGFwdGVyKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hYaHJSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IGNvbmZpZy5kYXRhO1xuICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xuICAgIHZhciByZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgIHZhciBvbkNhbmNlbGVkO1xuICAgIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbi51bnN1YnNjcmliZShvbkNhbmNlbGVkKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZy5zaWduYWwpIHtcbiAgICAgICAgY29uZmlnLnNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKCdhYm9ydCcsIG9uQ2FuY2VsZWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKHJlcXVlc3REYXRhKSkge1xuICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzWydDb250ZW50LVR5cGUnXTsgLy8gTGV0IHRoZSBicm93c2VyIHNldCBpdFxuICAgIH1cblxuICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICB2YXIgdXNlcm5hbWUgPSBjb25maWcuYXV0aC51c2VybmFtZSB8fCAnJztcbiAgICAgIHZhciBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkID8gdW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KGNvbmZpZy5hdXRoLnBhc3N3b3JkKSkgOiAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmFzaWMgJyArIGJ0b2EodXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCk7XG4gICAgfVxuXG4gICAgdmFyIGZ1bGxQYXRoID0gYnVpbGRGdWxsUGF0aChjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gICAgcmVxdWVzdC5vcGVuKGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSwgYnVpbGRVUkwoZnVsbFBhdGgsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKSwgdHJ1ZSk7XG5cbiAgICAvLyBTZXQgdGhlIHJlcXVlc3QgdGltZW91dCBpbiBNU1xuICAgIHJlcXVlc3QudGltZW91dCA9IGNvbmZpZy50aW1lb3V0O1xuXG4gICAgZnVuY3Rpb24gb25sb2FkZW5kKCkge1xuICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIFByZXBhcmUgdGhlIHJlc3BvbnNlXG4gICAgICB2YXIgcmVzcG9uc2VIZWFkZXJzID0gJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgaW4gcmVxdWVzdCA/IHBhcnNlSGVhZGVycyhyZXF1ZXN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSA6IG51bGw7XG4gICAgICB2YXIgcmVzcG9uc2VEYXRhID0gIXJlc3BvbnNlVHlwZSB8fCByZXNwb25zZVR5cGUgPT09ICd0ZXh0JyB8fCAgcmVzcG9uc2VUeXBlID09PSAnanNvbicgP1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVGV4dCA6IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBzZXR0bGUoZnVuY3Rpb24gX3Jlc29sdmUodmFsdWUpIHtcbiAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH0sIGZ1bmN0aW9uIF9yZWplY3QoZXJyKSB7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICBkb25lKCk7XG4gICAgICB9LCByZXNwb25zZSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICgnb25sb2FkZW5kJyBpbiByZXF1ZXN0KSB7XG4gICAgICAvLyBVc2Ugb25sb2FkZW5kIGlmIGF2YWlsYWJsZVxuICAgICAgcmVxdWVzdC5vbmxvYWRlbmQgPSBvbmxvYWRlbmQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIExpc3RlbiBmb3IgcmVhZHkgc3RhdGUgdG8gZW11bGF0ZSBvbmxvYWRlbmRcbiAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0IHx8IHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuICAgICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuICAgICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuICAgICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG4gICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyByZWFkeXN0YXRlIGhhbmRsZXIgaXMgY2FsbGluZyBiZWZvcmUgb25lcnJvciBvciBvbnRpbWVvdXQgaGFuZGxlcnMsXG4gICAgICAgIC8vIHNvIHdlIHNob3VsZCBjYWxsIG9ubG9hZGVuZCBvbiB0aGUgbmV4dCAndGljaydcbiAgICAgICAgc2V0VGltZW91dChvbmxvYWRlbmQpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgYnJvd3NlciByZXF1ZXN0IGNhbmNlbGxhdGlvbiAoYXMgb3Bwb3NlZCB0byBhIG1hbnVhbCBjYW5jZWxsYXRpb24pXG4gICAgcmVxdWVzdC5vbmFib3J0ID0gZnVuY3Rpb24gaGFuZGxlQWJvcnQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ1JlcXVlc3QgYWJvcnRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBjb25maWcsIG51bGwsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB0aW1lb3V0XG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgdmFyIHRpbWVvdXRFcnJvck1lc3NhZ2UgPSBjb25maWcudGltZW91dCA/ICd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCcgOiAndGltZW91dCBleGNlZWRlZCc7XG4gICAgICB2YXIgdHJhbnNpdGlvbmFsID0gY29uZmlnLnRyYW5zaXRpb25hbCB8fCBkZWZhdWx0cy50cmFuc2l0aW9uYWw7XG4gICAgICBpZiAoY29uZmlnLnRpbWVvdXRFcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgdGltZW91dEVycm9yTWVzc2FnZSA9IGNvbmZpZy50aW1lb3V0RXJyb3JNZXNzYWdlO1xuICAgICAgfVxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKFxuICAgICAgICB0aW1lb3V0RXJyb3JNZXNzYWdlLFxuICAgICAgICBjb25maWcsXG4gICAgICAgIHRyYW5zaXRpb25hbC5jbGFyaWZ5VGltZW91dEVycm9yID8gJ0VUSU1FRE9VVCcgOiAnRUNPTk5BQk9SVEVEJyxcbiAgICAgICAgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgLy8gVGhpcyBpcyBvbmx5IGRvbmUgaWYgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gICAgLy8gU3BlY2lmaWNhbGx5IG5vdCBpZiB3ZSdyZSBpbiBhIHdlYiB3b3JrZXIsIG9yIHJlYWN0LW5hdGl2ZS5cbiAgICBpZiAodXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSkge1xuICAgICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgICB2YXIgeHNyZlZhbHVlID0gKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMgfHwgaXNVUkxTYW1lT3JpZ2luKGZ1bGxQYXRoKSkgJiYgY29uZmlnLnhzcmZDb29raWVOYW1lID9cbiAgICAgICAgY29va2llcy5yZWFkKGNvbmZpZy54c3JmQ29va2llTmFtZSkgOlxuICAgICAgICB1bmRlZmluZWQ7XG5cbiAgICAgIGlmICh4c3JmVmFsdWUpIHtcbiAgICAgICAgcmVxdWVzdEhlYWRlcnNbY29uZmlnLnhzcmZIZWFkZXJOYW1lXSA9IHhzcmZWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgaGVhZGVycyB0byB0aGUgcmVxdWVzdFxuICAgIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4gcmVxdWVzdCkge1xuICAgICAgdXRpbHMuZm9yRWFjaChyZXF1ZXN0SGVhZGVycywgZnVuY3Rpb24gc2V0UmVxdWVzdEhlYWRlcih2YWwsIGtleSkge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3REYXRhID09PSAndW5kZWZpbmVkJyAmJiBrZXkudG9Mb3dlckNhc2UoKSA9PT0gJ2NvbnRlbnQtdHlwZScpIHtcbiAgICAgICAgICAvLyBSZW1vdmUgQ29udGVudC1UeXBlIGlmIGRhdGEgaXMgdW5kZWZpbmVkXG4gICAgICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gT3RoZXJ3aXNlIGFkZCBoZWFkZXIgdG8gdGhlIHJlcXVlc3RcbiAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBZGQgd2l0aENyZWRlbnRpYWxzIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcud2l0aENyZWRlbnRpYWxzKSkge1xuICAgICAgcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSAhIWNvbmZpZy53aXRoQ3JlZGVudGlhbHM7XG4gICAgfVxuXG4gICAgLy8gQWRkIHJlc3BvbnNlVHlwZSB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChyZXNwb25zZVR5cGUgJiYgcmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gY29uZmlnLnJlc3BvbnNlVHlwZTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgcHJvZ3Jlc3MgaWYgbmVlZGVkXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25Eb3dubG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgLy8gTm90IGFsbCBicm93c2VycyBzdXBwb3J0IHVwbG9hZCBldmVudHNcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nICYmIHJlcXVlc3QudXBsb2FkKSB7XG4gICAgICByZXF1ZXN0LnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuIHx8IGNvbmZpZy5zaWduYWwpIHtcbiAgICAgIC8vIEhhbmRsZSBjYW5jZWxsYXRpb25cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gICAgICBvbkNhbmNlbGVkID0gZnVuY3Rpb24oY2FuY2VsKSB7XG4gICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZWplY3QoIWNhbmNlbCB8fCAoY2FuY2VsICYmIGNhbmNlbC50eXBlKSA/IG5ldyBDYW5jZWwoJ2NhbmNlbGVkJykgOiBjYW5jZWwpO1xuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfTtcblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuICYmIGNvbmZpZy5jYW5jZWxUb2tlbi5zdWJzY3JpYmUob25DYW5jZWxlZCk7XG4gICAgICBpZiAoY29uZmlnLnNpZ25hbCkge1xuICAgICAgICBjb25maWcuc2lnbmFsLmFib3J0ZWQgPyBvbkNhbmNlbGVkKCkgOiBjb25maWcuc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0Jywgb25DYW5jZWxlZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFyZXF1ZXN0RGF0YSkge1xuICAgICAgcmVxdWVzdERhdGEgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEpO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBBeGlvcyA9IHJlcXVpcmUoJy4vY29yZS9BeGlvcycpO1xudmFyIG1lcmdlQ29uZmlnID0gcmVxdWlyZSgnLi9jb3JlL21lcmdlQ29uZmlnJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqIEByZXR1cm4ge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG4gIHZhciBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuICB2YXIgaW5zdGFuY2UgPSBiaW5kKEF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0LCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGF4aW9zLnByb3RvdHlwZSB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIEF4aW9zLnByb3RvdHlwZSwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCk7XG5cbiAgLy8gRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IGluc3RhbmNlc1xuICBpbnN0YW5jZS5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgICByZXR1cm4gY3JlYXRlSW5zdGFuY2UobWVyZ2VDb25maWcoZGVmYXVsdENvbmZpZywgaW5zdGFuY2VDb25maWcpKTtcbiAgfTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIENyZWF0ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZSB0byBiZSBleHBvcnRlZFxudmFyIGF4aW9zID0gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdHMpO1xuXG4vLyBFeHBvc2UgQXhpb3MgY2xhc3MgdG8gYWxsb3cgY2xhc3MgaW5oZXJpdGFuY2VcbmF4aW9zLkF4aW9zID0gQXhpb3M7XG5cbi8vIEV4cG9zZSBDYW5jZWwgJiBDYW5jZWxUb2tlblxuYXhpb3MuQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsJyk7XG5heGlvcy5DYW5jZWxUb2tlbiA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbFRva2VuJyk7XG5heGlvcy5pc0NhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL2lzQ2FuY2VsJyk7XG5heGlvcy5WRVJTSU9OID0gcmVxdWlyZSgnLi9lbnYvZGF0YScpLnZlcnNpb247XG5cbi8vIEV4cG9zZSBhbGwvc3ByZWFkXG5heGlvcy5hbGwgPSBmdW5jdGlvbiBhbGwocHJvbWlzZXMpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbn07XG5heGlvcy5zcHJlYWQgPSByZXF1aXJlKCcuL2hlbHBlcnMvc3ByZWFkJyk7XG5cbi8vIEV4cG9zZSBpc0F4aW9zRXJyb3JcbmF4aW9zLmlzQXhpb3NFcnJvciA9IHJlcXVpcmUoJy4vaGVscGVycy9pc0F4aW9zRXJyb3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBheGlvcztcblxuLy8gQWxsb3cgdXNlIG9mIGRlZmF1bHQgaW1wb3J0IHN5bnRheCBpbiBUeXBlU2NyaXB0XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gYXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQSBgQ2FuY2VsYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZz19IG1lc3NhZ2UgVGhlIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIENhbmNlbChtZXNzYWdlKSB7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG59XG5cbkNhbmNlbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdDYW5jZWwnICsgKHRoaXMubWVzc2FnZSA/ICc6ICcgKyB0aGlzLm1lc3NhZ2UgOiAnJyk7XG59O1xuXG5DYW5jZWwucHJvdG90eXBlLl9fQ0FOQ0VMX18gPSB0cnVlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIENhbmNlbCA9IHJlcXVpcmUoJy4vQ2FuY2VsJyk7XG5cbi8qKlxuICogQSBgQ2FuY2VsVG9rZW5gIGlzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcXVlc3QgY2FuY2VsbGF0aW9uIG9mIGFuIG9wZXJhdGlvbi5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV4ZWN1dG9yIFRoZSBleGVjdXRvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsVG9rZW4oZXhlY3V0b3IpIHtcbiAgaWYgKHR5cGVvZiBleGVjdXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4ZWN1dG9yIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciByZXNvbHZlUHJvbWlzZTtcblxuICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiBwcm9taXNlRXhlY3V0b3IocmVzb2x2ZSkge1xuICAgIHJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTtcbiAgfSk7XG5cbiAgdmFyIHRva2VuID0gdGhpcztcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuICB0aGlzLnByb21pc2UudGhlbihmdW5jdGlvbihjYW5jZWwpIHtcbiAgICBpZiAoIXRva2VuLl9saXN0ZW5lcnMpIHJldHVybjtcblxuICAgIHZhciBpO1xuICAgIHZhciBsID0gdG9rZW4uX2xpc3RlbmVycy5sZW5ndGg7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICB0b2tlbi5fbGlzdGVuZXJzW2ldKGNhbmNlbCk7XG4gICAgfVxuICAgIHRva2VuLl9saXN0ZW5lcnMgPSBudWxsO1xuICB9KTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuICB0aGlzLnByb21pc2UudGhlbiA9IGZ1bmN0aW9uKG9uZnVsZmlsbGVkKSB7XG4gICAgdmFyIF9yZXNvbHZlO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgICB0b2tlbi5zdWJzY3JpYmUocmVzb2x2ZSk7XG4gICAgICBfcmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgfSkudGhlbihvbmZ1bGZpbGxlZCk7XG5cbiAgICBwcm9taXNlLmNhbmNlbCA9IGZ1bmN0aW9uIHJlamVjdCgpIHtcbiAgICAgIHRva2VuLnVuc3Vic2NyaWJlKF9yZXNvbHZlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH07XG5cbiAgZXhlY3V0b3IoZnVuY3Rpb24gY2FuY2VsKG1lc3NhZ2UpIHtcbiAgICBpZiAodG9rZW4ucmVhc29uKSB7XG4gICAgICAvLyBDYW5jZWxsYXRpb24gaGFzIGFscmVhZHkgYmVlbiByZXF1ZXN0ZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0b2tlbi5yZWFzb24gPSBuZXcgQ2FuY2VsKG1lc3NhZ2UpO1xuICAgIHJlc29sdmVQcm9taXNlKHRva2VuLnJlYXNvbik7XG4gIH0pO1xufVxuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbkNhbmNlbFRva2VuLnByb3RvdHlwZS50aHJvd0lmUmVxdWVzdGVkID0gZnVuY3Rpb24gdGhyb3dJZlJlcXVlc3RlZCgpIHtcbiAgaWYgKHRoaXMucmVhc29uKSB7XG4gICAgdGhyb3cgdGhpcy5yZWFzb247XG4gIH1cbn07XG5cbi8qKlxuICogU3Vic2NyaWJlIHRvIHRoZSBjYW5jZWwgc2lnbmFsXG4gKi9cblxuQ2FuY2VsVG9rZW4ucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIHN1YnNjcmliZShsaXN0ZW5lcikge1xuICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICBsaXN0ZW5lcih0aGlzLnJlYXNvbik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHRoaXMuX2xpc3RlbmVycykge1xuICAgIHRoaXMuX2xpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLl9saXN0ZW5lcnMgPSBbbGlzdGVuZXJdO1xuICB9XG59O1xuXG4vKipcbiAqIFVuc3Vic2NyaWJlIGZyb20gdGhlIGNhbmNlbCBzaWduYWxcbiAqL1xuXG5DYW5jZWxUb2tlbi5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiB1bnN1YnNjcmliZShsaXN0ZW5lcikge1xuICBpZiAoIXRoaXMuX2xpc3RlbmVycykge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgaW5kZXggPSB0aGlzLl9saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XG4gIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICB0aGlzLl9saXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICovXG5DYW5jZWxUb2tlbi5zb3VyY2UgPSBmdW5jdGlvbiBzb3VyY2UoKSB7XG4gIHZhciBjYW5jZWw7XG4gIHZhciB0b2tlbiA9IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XG4gICAgY2FuY2VsID0gYztcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdG9rZW46IHRva2VuLFxuICAgIGNhbmNlbDogY2FuY2VsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbFRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBJbnRlcmNlcHRvck1hbmFnZXIgPSByZXF1aXJlKCcuL0ludGVyY2VwdG9yTWFuYWdlcicpO1xudmFyIGRpc3BhdGNoUmVxdWVzdCA9IHJlcXVpcmUoJy4vZGlzcGF0Y2hSZXF1ZXN0Jyk7XG52YXIgbWVyZ2VDb25maWcgPSByZXF1aXJlKCcuL21lcmdlQ29uZmlnJyk7XG52YXIgdmFsaWRhdG9yID0gcmVxdWlyZSgnLi4vaGVscGVycy92YWxpZGF0b3InKTtcblxudmFyIHZhbGlkYXRvcnMgPSB2YWxpZGF0b3IudmFsaWRhdG9ycztcbi8qKlxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlQ29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIEF4aW9zKGluc3RhbmNlQ29uZmlnKSB7XG4gIHRoaXMuZGVmYXVsdHMgPSBpbnN0YW5jZUNvbmZpZztcbiAgdGhpcy5pbnRlcmNlcHRvcnMgPSB7XG4gICAgcmVxdWVzdDogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpLFxuICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKClcbiAgfTtcbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcbiAqL1xuQXhpb3MucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgLy8gQWxsb3cgZm9yIGF4aW9zKCdleGFtcGxlL3VybCdbLCBjb25maWddKSBhIGxhIGZldGNoIEFQSVxuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25maWcgPSBhcmd1bWVudHNbMV0gfHwge307XG4gICAgY29uZmlnLnVybCA9IGFyZ3VtZW50c1swXTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XG4gIH1cblxuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuXG4gIC8vIFNldCBjb25maWcubWV0aG9kXG4gIGlmIChjb25maWcubWV0aG9kKSB7XG4gICAgY29uZmlnLm1ldGhvZCA9IGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKTtcbiAgfSBlbHNlIGlmICh0aGlzLmRlZmF1bHRzLm1ldGhvZCkge1xuICAgIGNvbmZpZy5tZXRob2QgPSB0aGlzLmRlZmF1bHRzLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZy5tZXRob2QgPSAnZ2V0JztcbiAgfVxuXG4gIHZhciB0cmFuc2l0aW9uYWwgPSBjb25maWcudHJhbnNpdGlvbmFsO1xuXG4gIGlmICh0cmFuc2l0aW9uYWwgIT09IHVuZGVmaW5lZCkge1xuICAgIHZhbGlkYXRvci5hc3NlcnRPcHRpb25zKHRyYW5zaXRpb25hbCwge1xuICAgICAgc2lsZW50SlNPTlBhcnNpbmc6IHZhbGlkYXRvcnMudHJhbnNpdGlvbmFsKHZhbGlkYXRvcnMuYm9vbGVhbiksXG4gICAgICBmb3JjZWRKU09OUGFyc2luZzogdmFsaWRhdG9ycy50cmFuc2l0aW9uYWwodmFsaWRhdG9ycy5ib29sZWFuKSxcbiAgICAgIGNsYXJpZnlUaW1lb3V0RXJyb3I6IHZhbGlkYXRvcnMudHJhbnNpdGlvbmFsKHZhbGlkYXRvcnMuYm9vbGVhbilcbiAgICB9LCBmYWxzZSk7XG4gIH1cblxuICAvLyBmaWx0ZXIgb3V0IHNraXBwZWQgaW50ZXJjZXB0b3JzXG4gIHZhciByZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbiA9IFtdO1xuICB2YXIgc3luY2hyb25vdXNSZXF1ZXN0SW50ZXJjZXB0b3JzID0gdHJ1ZTtcbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdC5mb3JFYWNoKGZ1bmN0aW9uIHVuc2hpZnRSZXF1ZXN0SW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgaWYgKHR5cGVvZiBpbnRlcmNlcHRvci5ydW5XaGVuID09PSAnZnVuY3Rpb24nICYmIGludGVyY2VwdG9yLnJ1bldoZW4oY29uZmlnKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzeW5jaHJvbm91c1JlcXVlc3RJbnRlcmNlcHRvcnMgPSBzeW5jaHJvbm91c1JlcXVlc3RJbnRlcmNlcHRvcnMgJiYgaW50ZXJjZXB0b3Iuc3luY2hyb25vdXM7XG5cbiAgICByZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB2YXIgcmVzcG9uc2VJbnRlcmNlcHRvckNoYWluID0gW107XG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24gcHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgcmVzcG9uc2VJbnRlcmNlcHRvckNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHZhciBwcm9taXNlO1xuXG4gIGlmICghc3luY2hyb25vdXNSZXF1ZXN0SW50ZXJjZXB0b3JzKSB7XG4gICAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdCwgdW5kZWZpbmVkXTtcblxuICAgIEFycmF5LnByb3RvdHlwZS51bnNoaWZ0LmFwcGx5KGNoYWluLCByZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbik7XG4gICAgY2hhaW4gPSBjaGFpbi5jb25jYXQocmVzcG9uc2VJbnRlcmNlcHRvckNoYWluKTtcblxuICAgIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcbiAgICB3aGlsZSAoY2hhaW4ubGVuZ3RoKSB7XG4gICAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cblxuICB2YXIgbmV3Q29uZmlnID0gY29uZmlnO1xuICB3aGlsZSAocmVxdWVzdEludGVyY2VwdG9yQ2hhaW4ubGVuZ3RoKSB7XG4gICAgdmFyIG9uRnVsZmlsbGVkID0gcmVxdWVzdEludGVyY2VwdG9yQ2hhaW4uc2hpZnQoKTtcbiAgICB2YXIgb25SZWplY3RlZCA9IHJlcXVlc3RJbnRlcmNlcHRvckNoYWluLnNoaWZ0KCk7XG4gICAgdHJ5IHtcbiAgICAgIG5ld0NvbmZpZyA9IG9uRnVsZmlsbGVkKG5ld0NvbmZpZyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIG9uUmVqZWN0ZWQoZXJyb3IpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgdHJ5IHtcbiAgICBwcm9taXNlID0gZGlzcGF0Y2hSZXF1ZXN0KG5ld0NvbmZpZyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgfVxuXG4gIHdoaWxlIChyZXNwb25zZUludGVyY2VwdG9yQ2hhaW4ubGVuZ3RoKSB7XG4gICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihyZXNwb25zZUludGVyY2VwdG9yQ2hhaW4uc2hpZnQoKSwgcmVzcG9uc2VJbnRlcmNlcHRvckNoYWluLnNoaWZ0KCkpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuXG5BeGlvcy5wcm90b3R5cGUuZ2V0VXJpID0gZnVuY3Rpb24gZ2V0VXJpKGNvbmZpZykge1xuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuICByZXR1cm4gYnVpbGRVUkwoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLnJlcGxhY2UoL15cXD8vLCAnJyk7XG59O1xuXG4vLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChtZXJnZUNvbmZpZyhjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiAoY29uZmlnIHx8IHt9KS5kYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBkYXRhLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KG1lcmdlQ29uZmlnKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KSk7XG4gIH07XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBeGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBJbnRlcmNlcHRvck1hbmFnZXIoKSB7XG4gIHRoaXMuaGFuZGxlcnMgPSBbXTtcbn1cblxuLyoqXG4gKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVsZmlsbGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHRoZW5gIGZvciBhIGBQcm9taXNlYFxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IEFuIElEIHVzZWQgdG8gcmVtb3ZlIGludGVyY2VwdG9yIGxhdGVyXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gdXNlKGZ1bGZpbGxlZCwgcmVqZWN0ZWQsIG9wdGlvbnMpIHtcbiAgdGhpcy5oYW5kbGVycy5wdXNoKHtcbiAgICBmdWxmaWxsZWQ6IGZ1bGZpbGxlZCxcbiAgICByZWplY3RlZDogcmVqZWN0ZWQsXG4gICAgc3luY2hyb25vdXM6IG9wdGlvbnMgPyBvcHRpb25zLnN5bmNocm9ub3VzIDogZmFsc2UsXG4gICAgcnVuV2hlbjogb3B0aW9ucyA/IG9wdGlvbnMucnVuV2hlbiA6IG51bGxcbiAgfSk7XG4gIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbiBpbnRlcmNlcHRvciBmcm9tIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZCBUaGUgSUQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYHVzZWBcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5lamVjdCA9IGZ1bmN0aW9uIGVqZWN0KGlkKSB7XG4gIGlmICh0aGlzLmhhbmRsZXJzW2lkXSkge1xuICAgIHRoaXMuaGFuZGxlcnNbaWRdID0gbnVsbDtcbiAgfVxufTtcblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSByZWdpc3RlcmVkIGludGVyY2VwdG9yc1xuICpcbiAqIFRoaXMgbWV0aG9kIGlzIHBhcnRpY3VsYXJseSB1c2VmdWwgZm9yIHNraXBwaW5nIG92ZXIgYW55XG4gKiBpbnRlcmNlcHRvcnMgdGhhdCBtYXkgaGF2ZSBiZWNvbWUgYG51bGxgIGNhbGxpbmcgYGVqZWN0YC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCBpbnRlcmNlcHRvclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGZuKSB7XG4gIHV0aWxzLmZvckVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24gZm9yRWFjaEhhbmRsZXIoaCkge1xuICAgIGlmIChoICE9PSBudWxsKSB7XG4gICAgICBmbihoKTtcbiAgICB9XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnRlcmNlcHRvck1hbmFnZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc0Fic29sdXRlVVJMID0gcmVxdWlyZSgnLi4vaGVscGVycy9pc0Fic29sdXRlVVJMJyk7XG52YXIgY29tYmluZVVSTHMgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2NvbWJpbmVVUkxzJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBiYXNlVVJMIHdpdGggdGhlIHJlcXVlc3RlZFVSTCxcbiAqIG9ubHkgd2hlbiB0aGUgcmVxdWVzdGVkVVJMIGlzIG5vdCBhbHJlYWR5IGFuIGFic29sdXRlIFVSTC5cbiAqIElmIHRoZSByZXF1ZXN0VVJMIGlzIGFic29sdXRlLCB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHJlcXVlc3RlZFVSTCB1bnRvdWNoZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVxdWVzdGVkVVJMIEFic29sdXRlIG9yIHJlbGF0aXZlIFVSTCB0byBjb21iaW5lXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgZnVsbCBwYXRoXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRGdWxsUGF0aChiYXNlVVJMLCByZXF1ZXN0ZWRVUkwpIHtcbiAgaWYgKGJhc2VVUkwgJiYgIWlzQWJzb2x1dGVVUkwocmVxdWVzdGVkVVJMKSkge1xuICAgIHJldHVybiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZXF1ZXN0ZWRVUkwpO1xuICB9XG4gIHJldHVybiByZXF1ZXN0ZWRVUkw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW5oYW5jZUVycm9yID0gcmVxdWlyZSgnLi9lbmhhbmNlRXJyb3InKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIG1lc3NhZ2UsIGNvbmZpZywgZXJyb3IgY29kZSwgcmVxdWVzdCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlRXJyb3IobWVzc2FnZSwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHRyYW5zZm9ybURhdGEgPSByZXF1aXJlKCcuL3RyYW5zZm9ybURhdGEnKTtcbnZhciBpc0NhbmNlbCA9IHJlcXVpcmUoJy4uL2NhbmNlbC9pc0NhbmNlbCcpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi4vZGVmYXVsdHMnKTtcbnZhciBDYW5jZWwgPSByZXF1aXJlKCcuLi9jYW5jZWwvQ2FuY2VsJyk7XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuZnVuY3Rpb24gdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpIHtcbiAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgIGNvbmZpZy5jYW5jZWxUb2tlbi50aHJvd0lmUmVxdWVzdGVkKCk7XG4gIH1cblxuICBpZiAoY29uZmlnLnNpZ25hbCAmJiBjb25maWcuc2lnbmFsLmFib3J0ZWQpIHtcbiAgICB0aHJvdyBuZXcgQ2FuY2VsKCdjYW5jZWxlZCcpO1xuICB9XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307XG5cbiAgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEuY2FsbChcbiAgICBjb25maWcsXG4gICAgY29uZmlnLmRhdGEsXG4gICAgY29uZmlnLmhlYWRlcnMsXG4gICAgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3RcbiAgKTtcblxuICAvLyBGbGF0dGVuIGhlYWRlcnNcbiAgY29uZmlnLmhlYWRlcnMgPSB1dGlscy5tZXJnZShcbiAgICBjb25maWcuaGVhZGVycy5jb21tb24gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNbY29uZmlnLm1ldGhvZF0gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNcbiAgKTtcblxuICB1dGlscy5mb3JFYWNoKFxuICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxuICAgIGZ1bmN0aW9uIGNsZWFuSGVhZGVyQ29uZmlnKG1ldGhvZCkge1xuICAgICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XG4gICAgfVxuICApO1xuXG4gIHZhciBhZGFwdGVyID0gY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcjtcblxuICByZXR1cm4gYWRhcHRlcihjb25maWcpLnRoZW4oZnVuY3Rpb24gb25BZGFwdGVyUmVzb2x1dGlvbihyZXNwb25zZSkge1xuICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEuY2FsbChcbiAgICAgIGNvbmZpZyxcbiAgICAgIHJlc3BvbnNlLmRhdGEsXG4gICAgICByZXNwb25zZS5oZWFkZXJzLFxuICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgKTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSwgZnVuY3Rpb24gb25BZGFwdGVyUmVqZWN0aW9uKHJlYXNvbikge1xuICAgIGlmICghaXNDYW5jZWwocmVhc29uKSkge1xuICAgICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgICAgaWYgKHJlYXNvbiAmJiByZWFzb24ucmVzcG9uc2UpIHtcbiAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhLmNhbGwoXG4gICAgICAgICAgY29uZmlnLFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhLFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzLFxuICAgICAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXBkYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBjb25maWcsIGVycm9yIGNvZGUsIGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJvciBUaGUgZXJyb3IgdG8gdXBkYXRlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgZXJyb3IuY29uZmlnID0gY29uZmlnO1xuICBpZiAoY29kZSkge1xuICAgIGVycm9yLmNvZGUgPSBjb2RlO1xuICB9XG5cbiAgZXJyb3IucmVxdWVzdCA9IHJlcXVlc3Q7XG4gIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gIGVycm9yLmlzQXhpb3NFcnJvciA9IHRydWU7XG5cbiAgZXJyb3IudG9KU09OID0gZnVuY3Rpb24gdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBTdGFuZGFyZFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgLy8gTWljcm9zb2Z0XG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgIG51bWJlcjogdGhpcy5udW1iZXIsXG4gICAgICAvLyBNb3ppbGxhXG4gICAgICBmaWxlTmFtZTogdGhpcy5maWxlTmFtZSxcbiAgICAgIGxpbmVOdW1iZXI6IHRoaXMubGluZU51bWJlcixcbiAgICAgIGNvbHVtbk51bWJlcjogdGhpcy5jb2x1bW5OdW1iZXIsXG4gICAgICBzdGFjazogdGhpcy5zdGFjayxcbiAgICAgIC8vIEF4aW9zXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlnLFxuICAgICAgY29kZTogdGhpcy5jb2RlLFxuICAgICAgc3RhdHVzOiB0aGlzLnJlc3BvbnNlICYmIHRoaXMucmVzcG9uc2Uuc3RhdHVzID8gdGhpcy5yZXNwb25zZS5zdGF0dXMgOiBudWxsXG4gICAgfTtcbiAgfTtcbiAgcmV0dXJuIGVycm9yO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBDb25maWctc3BlY2lmaWMgbWVyZ2UtZnVuY3Rpb24gd2hpY2ggY3JlYXRlcyBhIG5ldyBjb25maWctb2JqZWN0XG4gKiBieSBtZXJnaW5nIHR3byBjb25maWd1cmF0aW9uIG9iamVjdHMgdG9nZXRoZXIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzFcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBOZXcgb2JqZWN0IHJlc3VsdGluZyBmcm9tIG1lcmdpbmcgY29uZmlnMiB0byBjb25maWcxXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWVyZ2VDb25maWcoY29uZmlnMSwgY29uZmlnMikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgY29uZmlnMiA9IGNvbmZpZzIgfHwge307XG4gIHZhciBjb25maWcgPSB7fTtcblxuICBmdW5jdGlvbiBnZXRNZXJnZWRWYWx1ZSh0YXJnZXQsIHNvdXJjZSkge1xuICAgIGlmICh1dGlscy5pc1BsYWluT2JqZWN0KHRhcmdldCkgJiYgdXRpbHMuaXNQbGFpbk9iamVjdChzb3VyY2UpKSB7XG4gICAgICByZXR1cm4gdXRpbHMubWVyZ2UodGFyZ2V0LCBzb3VyY2UpO1xuICAgIH0gZWxzZSBpZiAodXRpbHMuaXNQbGFpbk9iamVjdChzb3VyY2UpKSB7XG4gICAgICByZXR1cm4gdXRpbHMubWVyZ2Uoe30sIHNvdXJjZSk7XG4gICAgfSBlbHNlIGlmICh1dGlscy5pc0FycmF5KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiBzb3VyY2Uuc2xpY2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIHNvdXJjZTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICBmdW5jdGlvbiBtZXJnZURlZXBQcm9wZXJ0aWVzKHByb3ApIHtcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZzJbcHJvcF0pKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUoY29uZmlnMVtwcm9wXSwgY29uZmlnMltwcm9wXSk7XG4gICAgfSBlbHNlIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnMVtwcm9wXSkpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGNvbmZpZzFbcHJvcF0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICBmdW5jdGlvbiB2YWx1ZUZyb21Db25maWcyKHByb3ApIHtcbiAgICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZzJbcHJvcF0pKSB7XG4gICAgICByZXR1cm4gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBjb25maWcyW3Byb3BdKTtcbiAgICB9XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgZnVuY3Rpb24gZGVmYXVsdFRvQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcyW3Byb3BdKSkge1xuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMltwcm9wXSk7XG4gICAgfSBlbHNlIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnMVtwcm9wXSkpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGNvbmZpZzFbcHJvcF0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICBmdW5jdGlvbiBtZXJnZURpcmVjdEtleXMocHJvcCkge1xuICAgIGlmIChwcm9wIGluIGNvbmZpZzIpIHtcbiAgICAgIHJldHVybiBnZXRNZXJnZWRWYWx1ZShjb25maWcxW3Byb3BdLCBjb25maWcyW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKHByb3AgaW4gY29uZmlnMSkge1xuICAgICAgcmV0dXJuIGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMVtwcm9wXSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIG1lcmdlTWFwID0ge1xuICAgICd1cmwnOiB2YWx1ZUZyb21Db25maWcyLFxuICAgICdtZXRob2QnOiB2YWx1ZUZyb21Db25maWcyLFxuICAgICdkYXRhJzogdmFsdWVGcm9tQ29uZmlnMixcbiAgICAnYmFzZVVSTCc6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgJ3RyYW5zZm9ybVJlcXVlc3QnOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICd0cmFuc2Zvcm1SZXNwb25zZSc6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgJ3BhcmFtc1NlcmlhbGl6ZXInOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICd0aW1lb3V0JzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICAndGltZW91dE1lc3NhZ2UnOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICd3aXRoQ3JlZGVudGlhbHMnOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICdhZGFwdGVyJzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICAncmVzcG9uc2VUeXBlJzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICAneHNyZkNvb2tpZU5hbWUnOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICd4c3JmSGVhZGVyTmFtZSc6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgJ29uVXBsb2FkUHJvZ3Jlc3MnOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICdvbkRvd25sb2FkUHJvZ3Jlc3MnOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICdkZWNvbXByZXNzJzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICAnbWF4Q29udGVudExlbmd0aCc6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgJ21heEJvZHlMZW5ndGgnOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICd0cmFuc3BvcnQnOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICdodHRwQWdlbnQnOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICdodHRwc0FnZW50JzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICAnY2FuY2VsVG9rZW4nOiBkZWZhdWx0VG9Db25maWcyLFxuICAgICdzb2NrZXRQYXRoJzogZGVmYXVsdFRvQ29uZmlnMixcbiAgICAncmVzcG9uc2VFbmNvZGluZyc6IGRlZmF1bHRUb0NvbmZpZzIsXG4gICAgJ3ZhbGlkYXRlU3RhdHVzJzogbWVyZ2VEaXJlY3RLZXlzXG4gIH07XG5cbiAgdXRpbHMuZm9yRWFjaChPYmplY3Qua2V5cyhjb25maWcxKS5jb25jYXQoT2JqZWN0LmtleXMoY29uZmlnMikpLCBmdW5jdGlvbiBjb21wdXRlQ29uZmlnVmFsdWUocHJvcCkge1xuICAgIHZhciBtZXJnZSA9IG1lcmdlTWFwW3Byb3BdIHx8IG1lcmdlRGVlcFByb3BlcnRpZXM7XG4gICAgdmFyIGNvbmZpZ1ZhbHVlID0gbWVyZ2UocHJvcCk7XG4gICAgKHV0aWxzLmlzVW5kZWZpbmVkKGNvbmZpZ1ZhbHVlKSAmJiBtZXJnZSAhPT0gbWVyZ2VEaXJlY3RLZXlzKSB8fCAoY29uZmlnW3Byb3BdID0gY29uZmlnVmFsdWUpO1xuICB9KTtcblxuICByZXR1cm4gY29uZmlnO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi9jcmVhdGVFcnJvcicpO1xuXG4vKipcbiAqIFJlc29sdmUgb3IgcmVqZWN0IGEgUHJvbWlzZSBiYXNlZCBvbiByZXNwb25zZSBzdGF0dXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSBBIGZ1bmN0aW9uIHRoYXQgcmVzb2x2ZXMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgQSBmdW5jdGlvbiB0aGF0IHJlamVjdHMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge29iamVjdH0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKSB7XG4gIHZhciB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcbiAgaWYgKCFyZXNwb25zZS5zdGF0dXMgfHwgIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QoY3JlYXRlRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgbnVsbCxcbiAgICAgIHJlc3BvbnNlLnJlcXVlc3QsXG4gICAgICByZXNwb25zZVxuICAgICkpO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLy4uL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBiZSB0cmFuc2Zvcm1lZFxuICogQHBhcmFtIHtBcnJheX0gaGVhZGVycyBUaGUgaGVhZGVycyBmb3IgdGhlIHJlcXVlc3Qgb3IgcmVzcG9uc2VcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb259IGZucyBBIHNpbmdsZSBmdW5jdGlvbiBvciBBcnJheSBvZiBmdW5jdGlvbnNcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGRhdGEsIGhlYWRlcnMsIGZucykge1xuICB2YXIgY29udGV4dCA9IHRoaXMgfHwgZGVmYXVsdHM7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICB1dGlscy5mb3JFYWNoKGZucywgZnVuY3Rpb24gdHJhbnNmb3JtKGZuKSB7XG4gICAgZGF0YSA9IGZuLmNhbGwoY29udGV4dCwgZGF0YSwgaGVhZGVycyk7XG4gIH0pO1xuXG4gIHJldHVybiBkYXRhO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIG5vcm1hbGl6ZUhlYWRlck5hbWUgPSByZXF1aXJlKCcuL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZScpO1xudmFyIGVuaGFuY2VFcnJvciA9IHJlcXVpcmUoJy4vY29yZS9lbmhhbmNlRXJyb3InKTtcblxudmFyIERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCB2YWx1ZSkge1xuICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnMpICYmIHV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkge1xuICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFkYXB0ZXIoKSB7XG4gIHZhciBhZGFwdGVyO1xuICBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBicm93c2VycyB1c2UgWEhSIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy94aHInKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXScpIHtcbiAgICAvLyBGb3Igbm9kZSB1c2UgSFRUUCBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMvaHR0cCcpO1xuICB9XG4gIHJldHVybiBhZGFwdGVyO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlTYWZlbHkocmF3VmFsdWUsIHBhcnNlciwgZW5jb2Rlcikge1xuICBpZiAodXRpbHMuaXNTdHJpbmcocmF3VmFsdWUpKSB7XG4gICAgdHJ5IHtcbiAgICAgIChwYXJzZXIgfHwgSlNPTi5wYXJzZSkocmF3VmFsdWUpO1xuICAgICAgcmV0dXJuIHV0aWxzLnRyaW0ocmF3VmFsdWUpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChlLm5hbWUgIT09ICdTeW50YXhFcnJvcicpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gKGVuY29kZXIgfHwgSlNPTi5zdHJpbmdpZnkpKHJhd1ZhbHVlKTtcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuXG4gIHRyYW5zaXRpb25hbDoge1xuICAgIHNpbGVudEpTT05QYXJzaW5nOiB0cnVlLFxuICAgIGZvcmNlZEpTT05QYXJzaW5nOiB0cnVlLFxuICAgIGNsYXJpZnlUaW1lb3V0RXJyb3I6IGZhbHNlXG4gIH0sXG5cbiAgYWRhcHRlcjogZ2V0RGVmYXVsdEFkYXB0ZXIoKSxcblxuICB0cmFuc2Zvcm1SZXF1ZXN0OiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVxdWVzdChkYXRhLCBoZWFkZXJzKSB7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQWNjZXB0Jyk7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQ29udGVudC1UeXBlJyk7XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzU3RyZWFtKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0ZpbGUoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQmxvYihkYXRhKVxuICAgICkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBkYXRhLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc09iamVjdChkYXRhKSB8fCAoaGVhZGVycyAmJiBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9PT0gJ2FwcGxpY2F0aW9uL2pzb24nKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgICByZXR1cm4gc3RyaW5naWZ5U2FmZWx5KGRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgdHJhbnNmb3JtUmVzcG9uc2U6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXNwb25zZShkYXRhKSB7XG4gICAgdmFyIHRyYW5zaXRpb25hbCA9IHRoaXMudHJhbnNpdGlvbmFsIHx8IGRlZmF1bHRzLnRyYW5zaXRpb25hbDtcbiAgICB2YXIgc2lsZW50SlNPTlBhcnNpbmcgPSB0cmFuc2l0aW9uYWwgJiYgdHJhbnNpdGlvbmFsLnNpbGVudEpTT05QYXJzaW5nO1xuICAgIHZhciBmb3JjZWRKU09OUGFyc2luZyA9IHRyYW5zaXRpb25hbCAmJiB0cmFuc2l0aW9uYWwuZm9yY2VkSlNPTlBhcnNpbmc7XG4gICAgdmFyIHN0cmljdEpTT05QYXJzaW5nID0gIXNpbGVudEpTT05QYXJzaW5nICYmIHRoaXMucmVzcG9uc2VUeXBlID09PSAnanNvbic7XG5cbiAgICBpZiAoc3RyaWN0SlNPTlBhcnNpbmcgfHwgKGZvcmNlZEpTT05QYXJzaW5nICYmIHV0aWxzLmlzU3RyaW5nKGRhdGEpICYmIGRhdGEubGVuZ3RoKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChzdHJpY3RKU09OUGFyc2luZykge1xuICAgICAgICAgIGlmIChlLm5hbWUgPT09ICdTeW50YXhFcnJvcicpIHtcbiAgICAgICAgICAgIHRocm93IGVuaGFuY2VFcnJvcihlLCB0aGlzLCAnRV9KU09OX1BBUlNFJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgLyoqXG4gICAqIEEgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgdG8gYWJvcnQgYSByZXF1ZXN0LiBJZiBzZXQgdG8gMCAoZGVmYXVsdCkgYVxuICAgKiB0aW1lb3V0IGlzIG5vdCBjcmVhdGVkLlxuICAgKi9cbiAgdGltZW91dDogMCxcblxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG5cbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG4gIG1heEJvZHlMZW5ndGg6IC0xLFxuXG4gIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiB2YWxpZGF0ZVN0YXR1cyhzdGF0dXMpIHtcbiAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG4gIH0sXG5cbiAgaGVhZGVyczoge1xuICAgIGNvbW1vbjoge1xuICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG4gICAgfVxuICB9XG59O1xuXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHt9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHV0aWxzLm1lcmdlKERFRkFVTFRfQ09OVEVOVF9UWVBFKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRzO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidmVyc2lvblwiOiBcIjAuMjQuMFwiXG59OyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBlbmNvZGUodmFsKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKS5cbiAgICByZXBsYWNlKC8lM0EvZ2ksICc6JykuXG4gICAgcmVwbGFjZSgvJTI0L2csICckJykuXG4gICAgcmVwbGFjZSgvJTJDL2dpLCAnLCcpLlxuICAgIHJlcGxhY2UoLyUyMC9nLCAnKycpLlxuICAgIHJlcGxhY2UoLyU1Qi9naSwgJ1snKS5cbiAgICByZXBsYWNlKC8lNUQvZ2ksICddJyk7XG59XG5cbi8qKlxuICogQnVpbGQgYSBVUkwgYnkgYXBwZW5kaW5nIHBhcmFtcyB0byB0aGUgZW5kXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgYmFzZSBvZiB0aGUgdXJsIChlLmcuLCBodHRwOi8vd3d3Lmdvb2dsZS5jb20pXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gVGhlIHBhcmFtcyB0byBiZSBhcHBlbmRlZFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCB1cmxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZFVSTCh1cmwsIHBhcmFtcywgcGFyYW1zU2VyaWFsaXplcikge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgaWYgKCFwYXJhbXMpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdmFyIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIGlmIChwYXJhbXNTZXJpYWxpemVyKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtc1NlcmlhbGl6ZXIocGFyYW1zKTtcbiAgfSBlbHNlIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhwYXJhbXMpKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtcy50b1N0cmluZygpO1xuICB9IGVsc2Uge1xuICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgdXRpbHMuZm9yRWFjaChwYXJhbXMsIGZ1bmN0aW9uIHNlcmlhbGl6ZSh2YWwsIGtleSkge1xuICAgICAgaWYgKHZhbCA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh1dGlscy5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAga2V5ID0ga2V5ICsgJ1tdJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbCA9IFt2YWxdO1xuICAgICAgfVxuXG4gICAgICB1dGlscy5mb3JFYWNoKHZhbCwgZnVuY3Rpb24gcGFyc2VWYWx1ZSh2KSB7XG4gICAgICAgIGlmICh1dGlscy5pc0RhdGUodikpIHtcbiAgICAgICAgICB2ID0gdi50b0lTT1N0cmluZygpO1xuICAgICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KHYpKSB7XG4gICAgICAgICAgdiA9IEpTT04uc3RyaW5naWZ5KHYpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnRzLnB1c2goZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUodikpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFydHMuam9pbignJicpO1xuICB9XG5cbiAgaWYgKHNlcmlhbGl6ZWRQYXJhbXMpIHtcbiAgICB2YXIgaGFzaG1hcmtJbmRleCA9IHVybC5pbmRleE9mKCcjJyk7XG4gICAgaWYgKGhhc2htYXJrSW5kZXggIT09IC0xKSB7XG4gICAgICB1cmwgPSB1cmwuc2xpY2UoMCwgaGFzaG1hcmtJbmRleCk7XG4gICAgfVxuXG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyBzZXJpYWxpemVkUGFyYW1zO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBzcGVjaWZpZWQgVVJMc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlbGF0aXZlVVJMIFRoZSByZWxhdGl2ZSBVUkxcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBVUkxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xuICByZXR1cm4gcmVsYXRpdmVVUkxcbiAgICA/IGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKVxuICAgIDogYmFzZVVSTDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBzdXBwb3J0IGRvY3VtZW50LmNvb2tpZVxuICAgIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUobmFtZSwgdmFsdWUsIGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKSB7XG4gICAgICAgICAgdmFyIGNvb2tpZSA9IFtdO1xuICAgICAgICAgIGNvb2tpZS5wdXNoKG5hbWUgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcblxuICAgICAgICAgIGlmICh1dGlscy5pc051bWJlcihleHBpcmVzKSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ2V4cGlyZXM9JyArIG5ldyBEYXRlKGV4cGlyZXMpLnRvR01UU3RyaW5nKCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhwYXRoKSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ3BhdGg9JyArIHBhdGgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkb21haW4pKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnZG9tYWluPScgKyBkb21haW4pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzZWN1cmUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdzZWN1cmUnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWUuam9pbignOyAnKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG5hbWUpIHtcbiAgICAgICAgICB2YXIgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cCgnKF58O1xcXFxzKikoJyArIG5hbWUgKyAnKT0oW147XSopJykpO1xuICAgICAgICAgIHJldHVybiAobWF0Y2ggPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbM10pIDogbnVsbCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICAgICAgICAgIHRoaXMud3JpdGUobmFtZSwgJycsIERhdGUubm93KCkgLSA4NjQwMDAwMCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52ICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAgIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUoKSB7fSxcbiAgICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZCgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICAgIH07XG4gICAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQWJzb2x1dGVVUkwodXJsKSB7XG4gIC8vIEEgVVJMIGlzIGNvbnNpZGVyZWQgYWJzb2x1dGUgaWYgaXQgYmVnaW5zIHdpdGggXCI8c2NoZW1lPjovL1wiIG9yIFwiLy9cIiAocHJvdG9jb2wtcmVsYXRpdmUgVVJMKS5cbiAgLy8gUkZDIDM5ODYgZGVmaW5lcyBzY2hlbWUgbmFtZSBhcyBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgYmVnaW5uaW5nIHdpdGggYSBsZXR0ZXIgYW5kIGZvbGxvd2VkXG4gIC8vIGJ5IGFueSBjb21iaW5hdGlvbiBvZiBsZXR0ZXJzLCBkaWdpdHMsIHBsdXMsIHBlcmlvZCwgb3IgaHlwaGVuLlxuICByZXR1cm4gL14oW2Etel1bYS16XFxkXFwrXFwtXFwuXSo6KT9cXC9cXC8vaS50ZXN0KHVybCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgcGF5bG9hZCBpcyBhbiBlcnJvciB0aHJvd24gYnkgQXhpb3NcbiAqXG4gKiBAcGFyYW0geyp9IHBheWxvYWQgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBwYXlsb2FkIGlzIGFuIGVycm9yIHRocm93biBieSBBeGlvcywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBeGlvc0Vycm9yKHBheWxvYWQpIHtcbiAgcmV0dXJuICh0eXBlb2YgcGF5bG9hZCA9PT0gJ29iamVjdCcpICYmIChwYXlsb2FkLmlzQXhpb3NFcnJvciA9PT0gdHJ1ZSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgaGF2ZSBmdWxsIHN1cHBvcnQgb2YgdGhlIEFQSXMgbmVlZGVkIHRvIHRlc3RcbiAgLy8gd2hldGhlciB0aGUgcmVxdWVzdCBVUkwgaXMgb2YgdGhlIHNhbWUgb3JpZ2luIGFzIGN1cnJlbnQgbG9jYXRpb24uXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHZhciBtc2llID0gLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICAgIHZhciB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIHZhciBvcmlnaW5VUkw7XG5cbiAgICAgIC8qKlxuICAgICogUGFyc2UgYSBVUkwgdG8gZGlzY292ZXIgaXQncyBjb21wb25lbnRzXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZFxuICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAqL1xuICAgICAgZnVuY3Rpb24gcmVzb2x2ZVVSTCh1cmwpIHtcbiAgICAgICAgdmFyIGhyZWYgPSB1cmw7XG5cbiAgICAgICAgaWYgKG1zaWUpIHtcbiAgICAgICAgLy8gSUUgbmVlZHMgYXR0cmlidXRlIHNldCB0d2ljZSB0byBub3JtYWxpemUgcHJvcGVydGllc1xuICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICAgICAgICAgIGhyZWYgPSB1cmxQYXJzaW5nTm9kZS5ocmVmO1xuICAgICAgICB9XG5cbiAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG5cbiAgICAgICAgLy8gdXJsUGFyc2luZ05vZGUgcHJvdmlkZXMgdGhlIFVybFV0aWxzIGludGVyZmFjZSAtIGh0dHA6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmx1dGlsc1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhyZWY6IHVybFBhcnNpbmdOb2RlLmhyZWYsXG4gICAgICAgICAgcHJvdG9jb2w6IHVybFBhcnNpbmdOb2RlLnByb3RvY29sID8gdXJsUGFyc2luZ05vZGUucHJvdG9jb2wucmVwbGFjZSgvOiQvLCAnJykgOiAnJyxcbiAgICAgICAgICBob3N0OiB1cmxQYXJzaW5nTm9kZS5ob3N0LFxuICAgICAgICAgIHNlYXJjaDogdXJsUGFyc2luZ05vZGUuc2VhcmNoID8gdXJsUGFyc2luZ05vZGUuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcbiAgICAgICAgICBoYXNoOiB1cmxQYXJzaW5nTm9kZS5oYXNoID8gdXJsUGFyc2luZ05vZGUuaGFzaC5yZXBsYWNlKC9eIy8sICcnKSA6ICcnLFxuICAgICAgICAgIGhvc3RuYW1lOiB1cmxQYXJzaW5nTm9kZS5ob3N0bmFtZSxcbiAgICAgICAgICBwb3J0OiB1cmxQYXJzaW5nTm9kZS5wb3J0LFxuICAgICAgICAgIHBhdGhuYW1lOiAodXJsUGFyc2luZ05vZGUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpID9cbiAgICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lIDpcbiAgICAgICAgICAgICcvJyArIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIG9yaWdpblVSTCA9IHJlc29sdmVVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuXG4gICAgICAvKipcbiAgICAqIERldGVybWluZSBpZiBhIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luIGFzIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RVUkwgVGhlIFVSTCB0byB0ZXN0XG4gICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgKi9cbiAgICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xuICAgICAgICB2YXIgcGFyc2VkID0gKHV0aWxzLmlzU3RyaW5nKHJlcXVlc3RVUkwpKSA/IHJlc29sdmVVUkwocmVxdWVzdFVSTCkgOiByZXF1ZXN0VVJMO1xuICAgICAgICByZXR1cm4gKHBhcnNlZC5wcm90b2NvbCA9PT0gb3JpZ2luVVJMLnByb3RvY29sICYmXG4gICAgICAgICAgICBwYXJzZWQuaG9zdCA9PT0gb3JpZ2luVVJMLmhvc3QpO1xuICAgICAgfTtcbiAgICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnZzICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAgIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH07XG4gICAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsIG5vcm1hbGl6ZWROYW1lKSB7XG4gIHV0aWxzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gcHJvY2Vzc0hlYWRlcih2YWx1ZSwgbmFtZSkge1xuICAgIGlmIChuYW1lICE9PSBub3JtYWxpemVkTmFtZSAmJiBuYW1lLnRvVXBwZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWROYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICBkZWxldGUgaGVhZGVyc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vLyBIZWFkZXJzIHdob3NlIGR1cGxpY2F0ZXMgYXJlIGlnbm9yZWQgYnkgbm9kZVxuLy8gYy5mLiBodHRwczovL25vZGVqcy5vcmcvYXBpL2h0dHAuaHRtbCNodHRwX21lc3NhZ2VfaGVhZGVyc1xudmFyIGlnbm9yZUR1cGxpY2F0ZU9mID0gW1xuICAnYWdlJywgJ2F1dGhvcml6YXRpb24nLCAnY29udGVudC1sZW5ndGgnLCAnY29udGVudC10eXBlJywgJ2V0YWcnLFxuICAnZXhwaXJlcycsICdmcm9tJywgJ2hvc3QnLCAnaWYtbW9kaWZpZWQtc2luY2UnLCAnaWYtdW5tb2RpZmllZC1zaW5jZScsXG4gICdsYXN0LW1vZGlmaWVkJywgJ2xvY2F0aW9uJywgJ21heC1mb3J3YXJkcycsICdwcm94eS1hdXRob3JpemF0aW9uJyxcbiAgJ3JlZmVyZXInLCAncmV0cnktYWZ0ZXInLCAndXNlci1hZ2VudCdcbl07XG5cbi8qKlxuICogUGFyc2UgaGVhZGVycyBpbnRvIGFuIG9iamVjdFxuICpcbiAqIGBgYFxuICogRGF0ZTogV2VkLCAyNyBBdWcgMjAxNCAwODo1ODo0OSBHTVRcbiAqIENvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblxuICogQ29ubmVjdGlvbjoga2VlcC1hbGl2ZVxuICogVHJhbnNmZXItRW5jb2Rpbmc6IGNodW5rZWRcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXJzIEhlYWRlcnMgbmVlZGluZyB0byBiZSBwYXJzZWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IEhlYWRlcnMgcGFyc2VkIGludG8gYW4gb2JqZWN0XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VIZWFkZXJzKGhlYWRlcnMpIHtcbiAgdmFyIHBhcnNlZCA9IHt9O1xuICB2YXIga2V5O1xuICB2YXIgdmFsO1xuICB2YXIgaTtcblxuICBpZiAoIWhlYWRlcnMpIHsgcmV0dXJuIHBhcnNlZDsgfVxuXG4gIHV0aWxzLmZvckVhY2goaGVhZGVycy5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIHBhcnNlcihsaW5lKSB7XG4gICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGtleSA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoMCwgaSkpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cihpICsgMSkpO1xuXG4gICAgaWYgKGtleSkge1xuICAgICAgaWYgKHBhcnNlZFtrZXldICYmIGlnbm9yZUR1cGxpY2F0ZU9mLmluZGV4T2Yoa2V5KSA+PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09ICdzZXQtY29va2llJykge1xuICAgICAgICBwYXJzZWRba2V5XSA9IChwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldIDogW10pLmNvbmNhdChbdmFsXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNwcmVhZChjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcChhcnIpIHtcbiAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkobnVsbCwgYXJyKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBWRVJTSU9OID0gcmVxdWlyZSgnLi4vZW52L2RhdGEnKS52ZXJzaW9uO1xuXG52YXIgdmFsaWRhdG9ycyA9IHt9O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuWydvYmplY3QnLCAnYm9vbGVhbicsICdudW1iZXInLCAnZnVuY3Rpb24nLCAnc3RyaW5nJywgJ3N5bWJvbCddLmZvckVhY2goZnVuY3Rpb24odHlwZSwgaSkge1xuICB2YWxpZGF0b3JzW3R5cGVdID0gZnVuY3Rpb24gdmFsaWRhdG9yKHRoaW5nKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGluZyA9PT0gdHlwZSB8fCAnYScgKyAoaSA8IDEgPyAnbiAnIDogJyAnKSArIHR5cGU7XG4gIH07XG59KTtcblxudmFyIGRlcHJlY2F0ZWRXYXJuaW5ncyA9IHt9O1xuXG4vKipcbiAqIFRyYW5zaXRpb25hbCBvcHRpb24gdmFsaWRhdG9yXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufGJvb2xlYW4/fSB2YWxpZGF0b3IgLSBzZXQgdG8gZmFsc2UgaWYgdGhlIHRyYW5zaXRpb25hbCBvcHRpb24gaGFzIGJlZW4gcmVtb3ZlZFxuICogQHBhcmFtIHtzdHJpbmc/fSB2ZXJzaW9uIC0gZGVwcmVjYXRlZCB2ZXJzaW9uIC8gcmVtb3ZlZCBzaW5jZSB2ZXJzaW9uXG4gKiBAcGFyYW0ge3N0cmluZz99IG1lc3NhZ2UgLSBzb21lIG1lc3NhZ2Ugd2l0aCBhZGRpdGlvbmFsIGluZm9cbiAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAqL1xudmFsaWRhdG9ycy50cmFuc2l0aW9uYWwgPSBmdW5jdGlvbiB0cmFuc2l0aW9uYWwodmFsaWRhdG9yLCB2ZXJzaW9uLCBtZXNzYWdlKSB7XG4gIGZ1bmN0aW9uIGZvcm1hdE1lc3NhZ2Uob3B0LCBkZXNjKSB7XG4gICAgcmV0dXJuICdbQXhpb3MgdicgKyBWRVJTSU9OICsgJ10gVHJhbnNpdGlvbmFsIG9wdGlvbiBcXCcnICsgb3B0ICsgJ1xcJycgKyBkZXNjICsgKG1lc3NhZ2UgPyAnLiAnICsgbWVzc2FnZSA6ICcnKTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSwgb3B0LCBvcHRzKSB7XG4gICAgaWYgKHZhbGlkYXRvciA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihmb3JtYXRNZXNzYWdlKG9wdCwgJyBoYXMgYmVlbiByZW1vdmVkJyArICh2ZXJzaW9uID8gJyBpbiAnICsgdmVyc2lvbiA6ICcnKSkpO1xuICAgIH1cblxuICAgIGlmICh2ZXJzaW9uICYmICFkZXByZWNhdGVkV2FybmluZ3Nbb3B0XSkge1xuICAgICAgZGVwcmVjYXRlZFdhcm5pbmdzW29wdF0gPSB0cnVlO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgZm9ybWF0TWVzc2FnZShcbiAgICAgICAgICBvcHQsXG4gICAgICAgICAgJyBoYXMgYmVlbiBkZXByZWNhdGVkIHNpbmNlIHYnICsgdmVyc2lvbiArICcgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmVhciBmdXR1cmUnXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRvciA/IHZhbGlkYXRvcih2YWx1ZSwgb3B0LCBvcHRzKSA6IHRydWU7XG4gIH07XG59O1xuXG4vKipcbiAqIEFzc2VydCBvYmplY3QncyBwcm9wZXJ0aWVzIHR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge29iamVjdH0gc2NoZW1hXG4gKiBAcGFyYW0ge2Jvb2xlYW4/fSBhbGxvd1Vua25vd25cbiAqL1xuXG5mdW5jdGlvbiBhc3NlcnRPcHRpb25zKG9wdGlvbnMsIHNjaGVtYSwgYWxsb3dVbmtub3duKSB7XG4gIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb25zIG11c3QgYmUgYW4gb2JqZWN0Jyk7XG4gIH1cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvcHRpb25zKTtcbiAgdmFyIGkgPSBrZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSA+IDApIHtcbiAgICB2YXIgb3B0ID0ga2V5c1tpXTtcbiAgICB2YXIgdmFsaWRhdG9yID0gc2NoZW1hW29wdF07XG4gICAgaWYgKHZhbGlkYXRvcikge1xuICAgICAgdmFyIHZhbHVlID0gb3B0aW9uc1tvcHRdO1xuICAgICAgdmFyIHJlc3VsdCA9IHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsaWRhdG9yKHZhbHVlLCBvcHQsIG9wdGlvbnMpO1xuICAgICAgaWYgKHJlc3VsdCAhPT0gdHJ1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb24gJyArIG9wdCArICcgbXVzdCBiZSAnICsgcmVzdWx0KTtcbiAgICAgIH1cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYWxsb3dVbmtub3duICE9PSB0cnVlKSB7XG4gICAgICB0aHJvdyBFcnJvcignVW5rbm93biBvcHRpb24gJyArIG9wdCk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBhc3NlcnRPcHRpb25zOiBhc3NlcnRPcHRpb25zLFxuICB2YWxpZGF0b3JzOiB2YWxpZGF0b3JzXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG5cbi8vIHV0aWxzIGlzIGEgbGlicmFyeSBvZiBnZW5lcmljIGhlbHBlciBmdW5jdGlvbnMgbm9uLXNwZWNpZmljIHRvIGF4aW9zXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQnVmZmVyKHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmICFpc1VuZGVmaW5lZCh2YWwpICYmIHZhbC5jb25zdHJ1Y3RvciAhPT0gbnVsbCAmJiAhaXNVbmRlZmluZWQodmFsLmNvbnN0cnVjdG9yKVxuICAgICYmIHR5cGVvZiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgdmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyKHZhbCk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXIodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGb3JtRGF0YVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEZvcm1EYXRhLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGb3JtRGF0YSh2YWwpIHtcbiAgcmV0dXJuICh0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnKSAmJiAodmFsIGluc3RhbmNlb2YgRm9ybURhdGEpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXJWaWV3KHZhbCkge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcpICYmIChBcnJheUJ1ZmZlci5pc1ZpZXcpKSB7XG4gICAgcmVzdWx0ID0gQXJyYXlCdWZmZXIuaXNWaWV3KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gKHZhbCkgJiYgKHZhbC5idWZmZXIpICYmICh2YWwuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJpbmdcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmluZywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZyc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBOdW1iZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIE51bWJlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcic7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBwbGFpbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgcGxhaW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWwpIHtcbiAgaWYgKHRvU3RyaW5nLmNhbGwodmFsKSAhPT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbCk7XG4gIHJldHVybiBwcm90b3R5cGUgPT09IG51bGwgfHwgcHJvdG90eXBlID09PSBPYmplY3QucHJvdG90eXBlO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRGF0ZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRGF0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRGF0ZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRmlsZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRmlsZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRmlsZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRmlsZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQmxvYlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQmxvYiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQmxvYih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQmxvYl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZ1bmN0aW9uLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmVhbVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyZWFtLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJlYW0odmFsKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWwpICYmIGlzRnVuY3Rpb24odmFsLnBpcGUpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVVJMU2VhcmNoUGFyYW1zKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIFVSTFNlYXJjaFBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsIGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zO1xufVxuXG4vKipcbiAqIFRyaW0gZXhjZXNzIHdoaXRlc3BhY2Ugb2ZmIHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIFN0cmluZyB0byB0cmltXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgU3RyaW5nIGZyZWVkIG9mIGV4Y2VzcyB3aGl0ZXNwYWNlXG4gKi9cbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiBzdHIudHJpbSA/IHN0ci50cmltKCkgOiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcbiAqIG5hdGl2ZXNjcmlwdFxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdOYXRpdmVTY3JpcHQnIG9yICdOUydcbiAqL1xuZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAobmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05hdGl2ZVNjcmlwdCcgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05TJykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIChcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcbiAgKTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGludm9raW5nIGEgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGluZGV4LCBhbmQgY29tcGxldGUgYXJyYXkgZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBrZXksIGFuZCBjb21wbGV0ZSBvYmplY3QgZm9yIGVhY2ggcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayB0byBpbnZva2UgZm9yIGVhY2ggaXRlbVxuICovXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4pIHtcbiAgLy8gRG9uJ3QgYm90aGVyIGlmIG5vIHZhbHVlIHByb3ZpZGVkXG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgb2JqID0gW29ial07XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFycmF5IHZhbHVlc1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBY2NlcHRzIHZhcmFyZ3MgZXhwZWN0aW5nIGVhY2ggYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0LCB0aGVuXG4gKiBpbW11dGFibHkgbWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIGVhY2ggb2JqZWN0IGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBXaGVuIG11bHRpcGxlIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBrZXkgdGhlIGxhdGVyIG9iamVjdCBpblxuICogdGhlIGFyZ3VtZW50cyBsaXN0IHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gbWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAoaXNQbGFpbk9iamVjdChyZXN1bHRba2V5XSkgJiYgaXNQbGFpbk9iamVjdCh2YWwpKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdCh2YWwpKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKHt9LCB2YWwpO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheSh2YWwpKSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbC5zbGljZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5mdW5jdGlvbiBleHRlbmQoYSwgYiwgdGhpc0FyZykge1xuICBmb3JFYWNoKGIsIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHRoaXNBcmcgJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSB2YWw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGE7XG59XG5cbi8qKlxuICogUmVtb3ZlIGJ5dGUgb3JkZXIgbWFya2VyLiBUaGlzIGNhdGNoZXMgRUYgQkIgQkYgKHRoZSBVVEYtOCBCT00pXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnQgd2l0aCBCT01cbiAqIEByZXR1cm4ge3N0cmluZ30gY29udGVudCB2YWx1ZSB3aXRob3V0IEJPTVxuICovXG5mdW5jdGlvbiBzdHJpcEJPTShjb250ZW50KSB7XG4gIGlmIChjb250ZW50LmNoYXJDb2RlQXQoMCkgPT09IDB4RkVGRikge1xuICAgIGNvbnRlbnQgPSBjb250ZW50LnNsaWNlKDEpO1xuICB9XG4gIHJldHVybiBjb250ZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNBcnJheTogaXNBcnJheSxcbiAgaXNBcnJheUJ1ZmZlcjogaXNBcnJheUJ1ZmZlcixcbiAgaXNCdWZmZXI6IGlzQnVmZmVyLFxuICBpc0Zvcm1EYXRhOiBpc0Zvcm1EYXRhLFxuICBpc0FycmF5QnVmZmVyVmlldzogaXNBcnJheUJ1ZmZlclZpZXcsXG4gIGlzU3RyaW5nOiBpc1N0cmluZyxcbiAgaXNOdW1iZXI6IGlzTnVtYmVyLFxuICBpc09iamVjdDogaXNPYmplY3QsXG4gIGlzUGxhaW5PYmplY3Q6IGlzUGxhaW5PYmplY3QsXG4gIGlzVW5kZWZpbmVkOiBpc1VuZGVmaW5lZCxcbiAgaXNEYXRlOiBpc0RhdGUsXG4gIGlzRmlsZTogaXNGaWxlLFxuICBpc0Jsb2I6IGlzQmxvYixcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcbiAgaXNTdHJlYW06IGlzU3RyZWFtLFxuICBpc1VSTFNlYXJjaFBhcmFtczogaXNVUkxTZWFyY2hQYXJhbXMsXG4gIGlzU3RhbmRhcmRCcm93c2VyRW52OiBpc1N0YW5kYXJkQnJvd3NlckVudixcbiAgZm9yRWFjaDogZm9yRWFjaCxcbiAgbWVyZ2U6IG1lcmdlLFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgdHJpbTogdHJpbSxcbiAgc3RyaXBCT006IHN0cmlwQk9NXG59O1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG4vLyBSZXF1ZXN0aW5nIEluZm9ybWF0aW9uIEFQSSB3ZWF0aGVyXG5jb25zdCByZXF1ZXN0SW5mb3JtYXRpb24gPSBhc3luYyAocGxhY2U/OiBTdHJpbmcpID0+IHtcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYC9jdXJyZW50Lmpzb24/a2V5PSZxPSR7cGxhY2V9YCwge1xuICAgIGJhc2VVUkw6IFwiaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MVwiLFxuICAgIHBhcmFtczoge1xuICAgICAga2V5OiBcIjI5Yjc0Yzc3YWUzNTQyMmY4OWMyMTQwMTIxMTQxMFwiLFxuICAgICAgcmVzcG9uc2VUeXBlOiBcImpzb25cIixcbiAgICB9LFxuICB9KTtcblxuICBjb25zb2xlLmxvZyhkYXRhKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3RJbmZvcm1hdGlvbjtcbiIsImltcG9ydCAgcmVxdWVzdEluZm9ybWF0aW9uIGZyb20gXCIuL2FwaS9yZXF1ZXN0SW5mb3JtYXRpb25cIjtcblxuY29uc3Qgc2VhcmNoaW5nOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hpbmdcIik7XG5cbmNvbnN0IGdldFdlYXRoZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHNlYXJjaGluZ0lucHV0OiBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2hpbmdcIik7XG5cbiAgc2VhcmNoaW5nSW5wdXQ/LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgIHJlcXVlc3RJbmZvcm1hdGlvbihzZWFyY2hpbmcudmFsdWUpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5nZXRXZWF0aGVyKCk7XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInV0aWxzIiwic2V0dGxlIiwiY29va2llcyIsImJ1aWxkVVJMIiwiYnVpbGRGdWxsUGF0aCIsInBhcnNlSGVhZGVycyIsImlzVVJMU2FtZU9yaWdpbiIsImNyZWF0ZUVycm9yIiwiZGVmYXVsdHMiLCJDYW5jZWwiLCJjb25maWciLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm9uQ2FuY2VsZWQiLCJyZXF1ZXN0RGF0YSIsImRhdGEiLCJyZXF1ZXN0SGVhZGVycyIsImhlYWRlcnMiLCJyZXNwb25zZVR5cGUiLCJkb25lIiwiY2FuY2VsVG9rZW4iLCJ1bnN1YnNjcmliZSIsInNpZ25hbCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpc0Zvcm1EYXRhIiwicmVxdWVzdCIsIlhNTEh0dHBSZXF1ZXN0IiwiYXV0aCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkF1dGhvcml6YXRpb24iLCJidG9hIiwiZnVsbFBhdGgiLCJiYXNlVVJMIiwidXJsIiwib25sb2FkZW5kIiwicmVzcG9uc2VIZWFkZXJzIiwiZ2V0QWxsUmVzcG9uc2VIZWFkZXJzIiwicmVzcG9uc2UiLCJyZXNwb25zZVRleHQiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwidmFsdWUiLCJlcnIiLCJvcGVuIiwibWV0aG9kIiwidG9VcHBlckNhc2UiLCJwYXJhbXMiLCJwYXJhbXNTZXJpYWxpemVyIiwidGltZW91dCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJyZXNwb25zZVVSTCIsImluZGV4T2YiLCJzZXRUaW1lb3V0Iiwib25hYm9ydCIsIm9uZXJyb3IiLCJvbnRpbWVvdXQiLCJ0aW1lb3V0RXJyb3JNZXNzYWdlIiwidHJhbnNpdGlvbmFsIiwiY2xhcmlmeVRpbWVvdXRFcnJvciIsImlzU3RhbmRhcmRCcm93c2VyRW52IiwieHNyZlZhbHVlIiwid2l0aENyZWRlbnRpYWxzIiwieHNyZkNvb2tpZU5hbWUiLCJyZWFkIiwidW5kZWZpbmVkIiwieHNyZkhlYWRlck5hbWUiLCJmb3JFYWNoIiwidmFsIiwia2V5IiwidG9Mb3dlckNhc2UiLCJzZXRSZXF1ZXN0SGVhZGVyIiwiaXNVbmRlZmluZWQiLCJvbkRvd25sb2FkUHJvZ3Jlc3MiLCJhZGRFdmVudExpc3RlbmVyIiwib25VcGxvYWRQcm9ncmVzcyIsInVwbG9hZCIsImNhbmNlbCIsInR5cGUiLCJhYm9ydCIsInN1YnNjcmliZSIsImFib3J0ZWQiLCJzZW5kIiwiYmluZCIsIkF4aW9zIiwibWVyZ2VDb25maWciLCJheGlvcyIsImNyZWF0ZUluc3RhbmNlIiwiZGVmYXVsdENvbmZpZyIsImNvbnRleHQiLCJpbnN0YW5jZSIsInByb3RvdHlwZSIsImV4dGVuZCIsImNyZWF0ZSIsImluc3RhbmNlQ29uZmlnIiwiQ2FuY2VsVG9rZW4iLCJpc0NhbmNlbCIsIlZFUlNJT04iLCJhbGwiLCJwcm9taXNlcyIsInNwcmVhZCIsImlzQXhpb3NFcnJvciIsIm1lc3NhZ2UiLCJ0aGlzIiwidG9TdHJpbmciLCJfX0NBTkNFTF9fIiwiZXhlY3V0b3IiLCJUeXBlRXJyb3IiLCJyZXNvbHZlUHJvbWlzZSIsInByb21pc2UiLCJ0b2tlbiIsInRoZW4iLCJfbGlzdGVuZXJzIiwiaSIsImwiLCJsZW5ndGgiLCJvbmZ1bGZpbGxlZCIsIl9yZXNvbHZlIiwicmVhc29uIiwidGhyb3dJZlJlcXVlc3RlZCIsImxpc3RlbmVyIiwicHVzaCIsImluZGV4Iiwic3BsaWNlIiwic291cmNlIiwiYyIsIkludGVyY2VwdG9yTWFuYWdlciIsImRpc3BhdGNoUmVxdWVzdCIsInZhbGlkYXRvciIsInZhbGlkYXRvcnMiLCJpbnRlcmNlcHRvcnMiLCJhcmd1bWVudHMiLCJhc3NlcnRPcHRpb25zIiwic2lsZW50SlNPTlBhcnNpbmciLCJib29sZWFuIiwiZm9yY2VkSlNPTlBhcnNpbmciLCJyZXF1ZXN0SW50ZXJjZXB0b3JDaGFpbiIsInN5bmNocm9ub3VzUmVxdWVzdEludGVyY2VwdG9ycyIsImludGVyY2VwdG9yIiwicnVuV2hlbiIsInN5bmNocm9ub3VzIiwidW5zaGlmdCIsImZ1bGZpbGxlZCIsInJlamVjdGVkIiwicmVzcG9uc2VJbnRlcmNlcHRvckNoYWluIiwiY2hhaW4iLCJBcnJheSIsImFwcGx5IiwiY29uY2F0Iiwic2hpZnQiLCJuZXdDb25maWciLCJvbkZ1bGZpbGxlZCIsIm9uUmVqZWN0ZWQiLCJlcnJvciIsImdldFVyaSIsInJlcGxhY2UiLCJoYW5kbGVycyIsInVzZSIsIm9wdGlvbnMiLCJlamVjdCIsImlkIiwiZm4iLCJoIiwiaXNBYnNvbHV0ZVVSTCIsImNvbWJpbmVVUkxzIiwicmVxdWVzdGVkVVJMIiwiZW5oYW5jZUVycm9yIiwiY29kZSIsIkVycm9yIiwidHJhbnNmb3JtRGF0YSIsInRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQiLCJjYWxsIiwidHJhbnNmb3JtUmVxdWVzdCIsIm1lcmdlIiwiY29tbW9uIiwiYWRhcHRlciIsInRyYW5zZm9ybVJlc3BvbnNlIiwidG9KU09OIiwibmFtZSIsImRlc2NyaXB0aW9uIiwibnVtYmVyIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwic3RhY2siLCJjb25maWcxIiwiY29uZmlnMiIsImdldE1lcmdlZFZhbHVlIiwidGFyZ2V0IiwiaXNQbGFpbk9iamVjdCIsImlzQXJyYXkiLCJzbGljZSIsIm1lcmdlRGVlcFByb3BlcnRpZXMiLCJwcm9wIiwidmFsdWVGcm9tQ29uZmlnMiIsImRlZmF1bHRUb0NvbmZpZzIiLCJtZXJnZURpcmVjdEtleXMiLCJtZXJnZU1hcCIsIk9iamVjdCIsImtleXMiLCJjb25maWdWYWx1ZSIsInZhbGlkYXRlU3RhdHVzIiwiZm5zIiwibm9ybWFsaXplSGVhZGVyTmFtZSIsIkRFRkFVTFRfQ09OVEVOVF9UWVBFIiwic2V0Q29udGVudFR5cGVJZlVuc2V0IiwicHJvY2VzcyIsImlzQXJyYXlCdWZmZXIiLCJpc0J1ZmZlciIsImlzU3RyZWFtIiwiaXNGaWxlIiwiaXNCbG9iIiwiaXNBcnJheUJ1ZmZlclZpZXciLCJidWZmZXIiLCJpc1VSTFNlYXJjaFBhcmFtcyIsImlzT2JqZWN0IiwicmF3VmFsdWUiLCJwYXJzZXIiLCJlbmNvZGVyIiwiaXNTdHJpbmciLCJKU09OIiwicGFyc2UiLCJ0cmltIiwiZSIsInN0cmluZ2lmeSIsInN0cmluZ2lmeVNhZmVseSIsInN0cmljdEpTT05QYXJzaW5nIiwibWF4Q29udGVudExlbmd0aCIsIm1heEJvZHlMZW5ndGgiLCJ0aGlzQXJnIiwiYXJncyIsImVuY29kZSIsInNlcmlhbGl6ZWRQYXJhbXMiLCJwYXJ0cyIsInYiLCJpc0RhdGUiLCJ0b0lTT1N0cmluZyIsImpvaW4iLCJoYXNobWFya0luZGV4IiwicmVsYXRpdmVVUkwiLCJ3cml0ZSIsImV4cGlyZXMiLCJwYXRoIiwiZG9tYWluIiwic2VjdXJlIiwiY29va2llIiwiaXNOdW1iZXIiLCJEYXRlIiwidG9HTVRTdHJpbmciLCJkb2N1bWVudCIsIm1hdGNoIiwiUmVnRXhwIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicmVtb3ZlIiwibm93IiwidGVzdCIsInBheWxvYWQiLCJvcmlnaW5VUkwiLCJtc2llIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidXJsUGFyc2luZ05vZGUiLCJjcmVhdGVFbGVtZW50IiwicmVzb2x2ZVVSTCIsImhyZWYiLCJzZXRBdHRyaWJ1dGUiLCJwcm90b2NvbCIsImhvc3QiLCJzZWFyY2giLCJoYXNoIiwiaG9zdG5hbWUiLCJwb3J0IiwicGF0aG5hbWUiLCJjaGFyQXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlcXVlc3RVUkwiLCJwYXJzZWQiLCJub3JtYWxpemVkTmFtZSIsImlnbm9yZUR1cGxpY2F0ZU9mIiwic3BsaXQiLCJsaW5lIiwic3Vic3RyIiwiY2FsbGJhY2siLCJhcnIiLCJ0aGluZyIsImRlcHJlY2F0ZWRXYXJuaW5ncyIsInZlcnNpb24iLCJmb3JtYXRNZXNzYWdlIiwib3B0IiwiZGVzYyIsIm9wdHMiLCJjb25zb2xlIiwid2FybiIsInNjaGVtYSIsImFsbG93VW5rbm93biIsInJlc3VsdCIsImdldFByb3RvdHlwZU9mIiwiaXNGdW5jdGlvbiIsIm9iaiIsImhhc093blByb3BlcnR5IiwiY29uc3RydWN0b3IiLCJGb3JtRGF0YSIsIkFycmF5QnVmZmVyIiwiaXNWaWV3IiwicGlwZSIsIlVSTFNlYXJjaFBhcmFtcyIsInByb2R1Y3QiLCJhc3NpZ25WYWx1ZSIsImEiLCJiIiwic3RyIiwic3RyaXBCT00iLCJjb250ZW50IiwiY2hhckNvZGVBdCIsInBsYWNlIiwibG9nIiwic2VhcmNoaW5nSW5wdXQiLCJzZWFyY2hpbmciLCJxdWVyeVNlbGVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==
