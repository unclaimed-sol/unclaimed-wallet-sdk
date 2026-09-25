// Generated from openapi/analysis.yaml (SHA-256 0e18daa15475b07b16f28962b15406b9e94e0bc37640c6d6e32bdef7f21eaf4f). Do not edit.
var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// ../colosseum-browser-sdk/node_modules/ajv-formats/dist/formats.js
var require_formats = __commonJS({
  "../colosseum-browser-sdk/node_modules/ajv-formats/dist/formats.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.formatNames = exports.fastFormats = exports.fullFormats = void 0;
    function fmtDef(validate, compare) {
      return { validate, compare };
    }
    exports.fullFormats = {
      // date: http://tools.ietf.org/html/rfc3339#section-5.6
      date: fmtDef(date, compareDate),
      // date-time: http://tools.ietf.org/html/rfc3339#section-5.6
      time: fmtDef(getTime(true), compareTime),
      "date-time": fmtDef(getDateTime(true), compareDateTime),
      "iso-time": fmtDef(getTime(), compareIsoTime),
      "iso-date-time": fmtDef(getDateTime(), compareIsoDateTime),
      // duration: https://tools.ietf.org/html/rfc3339#appendix-A
      duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,
      uri,
      "uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
      // uri-template: https://tools.ietf.org/html/rfc6570
      "uri-template": /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
      // For the source: https://gist.github.com/dperini/729294
      // For test cases: https://mathiasbynens.be/demo/url-regex
      url: /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu,
      email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
      hostname: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
      // optimized https://www.safaribooksonline.com/library/view/regular-expressions-cookbook/9780596802837/ch07s16.html
      ipv4: /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/,
      ipv6: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,
      regex,
      // uuid: http://tools.ietf.org/html/rfc4122
      uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
      // JSON-pointer: https://tools.ietf.org/html/rfc6901
      // uri fragment: https://tools.ietf.org/html/rfc3986#appendix-A
      "json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/,
      "json-pointer-uri-fragment": /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
      // relative JSON-pointer: http://tools.ietf.org/html/draft-luff-relative-json-pointer-00
      "relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,
      // the following formats are used by the openapi specification: https://spec.openapis.org/oas/v3.0.0#data-types
      // byte: https://github.com/miguelmota/is-base64
      byte,
      // signed 32 bit integer
      int32: { type: "number", validate: validateInt32 },
      // signed 64 bit integer
      int64: { type: "number", validate: validateInt64 },
      // C-type float
      float: { type: "number", validate: validateNumber },
      // C-type double
      double: { type: "number", validate: validateNumber },
      // hint to the UI to hide input strings
      password: true,
      // unchecked string payload
      binary: true
    };
    exports.fastFormats = {
      ...exports.fullFormats,
      date: fmtDef(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, compareDate),
      time: fmtDef(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, compareTime),
      "date-time": fmtDef(/^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, compareDateTime),
      "iso-time": fmtDef(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, compareIsoTime),
      "iso-date-time": fmtDef(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, compareIsoDateTime),
      // uri: https://github.com/mafintosh/is-my-json-valid/blob/master/formats.js
      uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
      "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
      // email (sources from jsen validator):
      // http://stackoverflow.com/questions/201323/using-a-regular-expression-to-validate-an-email-address#answer-8829363
      // http://www.w3.org/TR/html5/forms.html#valid-e-mail-address (search for 'wilful violation')
      email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i
    };
    exports.formatNames = Object.keys(exports.fullFormats);
    function isLeapYear(year) {
      return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    }
    var DATE = /^(\d\d\d\d)-(\d\d)-(\d\d)$/;
    var DAYS = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function date(str) {
      const matches = DATE.exec(str);
      if (!matches)
        return false;
      const year = +matches[1];
      const month = +matches[2];
      const day = +matches[3];
      return month >= 1 && month <= 12 && day >= 1 && day <= (month === 2 && isLeapYear(year) ? 29 : DAYS[month]);
    }
    function compareDate(d1, d2) {
      if (!(d1 && d2))
        return void 0;
      if (d1 > d2)
        return 1;
      if (d1 < d2)
        return -1;
      return 0;
    }
    var TIME = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
    function getTime(strictTimeZone) {
      return function time(str) {
        const matches = TIME.exec(str);
        if (!matches)
          return false;
        const hr = +matches[1];
        const min = +matches[2];
        const sec = +matches[3];
        const tz = matches[4];
        const tzSign = matches[5] === "-" ? -1 : 1;
        const tzH = +(matches[6] || 0);
        const tzM = +(matches[7] || 0);
        if (tzH > 23 || tzM > 59 || strictTimeZone && !tz)
          return false;
        if (hr <= 23 && min <= 59 && sec < 60)
          return true;
        const utcMin = min - tzM * tzSign;
        const utcHr = hr - tzH * tzSign - (utcMin < 0 ? 1 : 0);
        return (utcHr === 23 || utcHr === -1) && (utcMin === 59 || utcMin === -1) && sec < 61;
      };
    }
    function compareTime(s1, s2) {
      if (!(s1 && s2))
        return void 0;
      const t1 = (/* @__PURE__ */ new Date("2020-01-01T" + s1)).valueOf();
      const t2 = (/* @__PURE__ */ new Date("2020-01-01T" + s2)).valueOf();
      if (!(t1 && t2))
        return void 0;
      return t1 - t2;
    }
    function compareIsoTime(t1, t2) {
      if (!(t1 && t2))
        return void 0;
      const a1 = TIME.exec(t1);
      const a2 = TIME.exec(t2);
      if (!(a1 && a2))
        return void 0;
      t1 = a1[1] + a1[2] + a1[3];
      t2 = a2[1] + a2[2] + a2[3];
      if (t1 > t2)
        return 1;
      if (t1 < t2)
        return -1;
      return 0;
    }
    var DATE_TIME_SEPARATOR = /t|\s/i;
    function getDateTime(strictTimeZone) {
      const time = getTime(strictTimeZone);
      return function date_time(str) {
        const dateTime = str.split(DATE_TIME_SEPARATOR);
        return dateTime.length === 2 && date(dateTime[0]) && time(dateTime[1]);
      };
    }
    function compareDateTime(dt1, dt2) {
      if (!(dt1 && dt2))
        return void 0;
      const d1 = new Date(dt1).valueOf();
      const d2 = new Date(dt2).valueOf();
      if (!(d1 && d2))
        return void 0;
      return d1 - d2;
    }
    function compareIsoDateTime(dt1, dt2) {
      if (!(dt1 && dt2))
        return void 0;
      const [d1, t1] = dt1.split(DATE_TIME_SEPARATOR);
      const [d2, t2] = dt2.split(DATE_TIME_SEPARATOR);
      const res = compareDate(d1, d2);
      if (res === void 0)
        return void 0;
      return res || compareTime(t1, t2);
    }
    var NOT_URI_FRAGMENT = /\/|:/;
    var URI = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
    function uri(str) {
      return NOT_URI_FRAGMENT.test(str) && URI.test(str);
    }
    var BYTE = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
    function byte(str) {
      BYTE.lastIndex = 0;
      return BYTE.test(str);
    }
    var MIN_INT32 = -(2 ** 31);
    var MAX_INT32 = 2 ** 31 - 1;
    function validateInt32(value) {
      return Number.isInteger(value) && value <= MAX_INT32 && value >= MIN_INT32;
    }
    function validateInt64(value) {
      return Number.isInteger(value);
    }
    function validateNumber() {
      return true;
    }
    var Z_ANCHOR = /[^\\]\\Z/;
    function regex(str) {
      if (Z_ANCHOR.test(str))
        return false;
      try {
        new RegExp(str);
        return true;
      } catch (e) {
        return false;
      }
    }
  }
});

// ../colosseum-browser-sdk/node_modules/fast-deep-equal/index.js
var require_fast_deep_equal = __commonJS({
  "../colosseum-browser-sdk/node_modules/fast-deep-equal/index.js"(exports, module) {
    "use strict";
    module.exports = function equal(a, b) {
      if (a === b) return true;
      if (a && b && typeof a == "object" && typeof b == "object") {
        if (a.constructor !== b.constructor) return false;
        var length, i, keys;
        if (Array.isArray(a)) {
          length = a.length;
          if (length != b.length) return false;
          for (i = length; i-- !== 0; )
            if (!equal(a[i], b[i])) return false;
          return true;
        }
        if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;
        for (i = length; i-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        for (i = length; i-- !== 0; ) {
          var key = keys[i];
          if (!equal(a[key], b[key])) return false;
        }
        return true;
      }
      return a !== a && b !== b;
    };
  }
});

// ../colosseum-browser-sdk/node_modules/ajv/dist/runtime/equal.js
var require_equal = __commonJS({
  "../colosseum-browser-sdk/node_modules/ajv/dist/runtime/equal.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var equal = require_fast_deep_equal();
    equal.code = 'require("ajv/dist/runtime/equal").default';
    exports.default = equal;
  }
});

// ../colosseum-browser-sdk/node_modules/ajv/dist/runtime/ucs2length.js
var require_ucs2length = __commonJS({
  "../colosseum-browser-sdk/node_modules/ajv/dist/runtime/ucs2length.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function ucs2length(str) {
      const len = str.length;
      let length = 0;
      let pos = 0;
      let value;
      while (pos < len) {
        length++;
        value = str.charCodeAt(pos++);
        if (value >= 55296 && value <= 56319 && pos < len) {
          value = str.charCodeAt(pos);
          if ((value & 64512) === 56320)
            pos++;
        }
      }
      return length;
    }
    exports.default = ucs2length;
    ucs2length.code = 'require("ajv/dist/runtime/ucs2length").default';
  }
});

// validate.js
var validateRequest = validate20;
var schema32 = { "type": "object", "additionalProperties": false, "required": ["wallet"], "properties": { "wallet": { "$ref": "#/components/schemas/Base58" }, "mode": { "type": "string", "enum": ["safe"], "default": "safe", "description": "Only safe analysis is available. Max requests are refused: 403 without capability, 422 with capability. Never silently downgraded." }, "includeAirdrops": { "type": "boolean", "default": false, "description": "Preview: must be false; true returns 422 `airdrops_not_available`.", "const": false }, "sellAndCloseMaxUsd": { "type": "string", "default": "1.00", "pattern": "^(?:[1-9](?:\\.\\d{1,6})?|10(?:\\.0{1,6})?)$", "description": "Accepted for v1 compatibility. Preview never returns an executable sell." }, "limit": { "type": "integer", "minimum": 1, "maximum": 200, "default": 20 }, "cursor": { "type": ["string", "null"], "description": "Opaque `nextCursor` from a prior page. Omit or null for the first page.", "pattern": "^ucur_[A-Za-z0-9_-]{43}$" } } };
var pattern4 = new RegExp("^[1-9A-HJ-NP-Za-km-z]{32,44}$", "u");
var pattern5 = new RegExp("^(?:[1-9](?:\\.\\d{1,6})?|10(?:\\.0{1,6})?)$", "u");
var pattern6 = new RegExp("^ucur_[A-Za-z0-9_-]{43}$", "u");
function validate21(data, { instancePath = "", parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {}) {
  let vErrors = null;
  let errors = 0;
  const evaluated0 = validate21.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = void 0;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = void 0;
  }
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.wallet === void 0 && (missing0 = "wallet")) {
        validate21.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        const _errs1 = errors;
        for (const key0 in data) {
          if (!(key0 === "wallet" || key0 === "mode" || key0 === "includeAirdrops" || key0 === "sellAndCloseMaxUsd" || key0 === "limit" || key0 === "cursor")) {
            validate21.errors = [{ instancePath, schemaPath: "#/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
            return false;
            break;
          }
        }
        if (_errs1 === errors) {
          if (data.wallet !== void 0) {
            let data0 = data.wallet;
            const _errs2 = errors;
            const _errs3 = errors;
            if (errors === _errs3) {
              if (typeof data0 === "string") {
                if (!pattern4.test(data0)) {
                  validate21.errors = [{ instancePath: instancePath + "/wallet", schemaPath: "#/components/schemas/Base58/pattern", keyword: "pattern", params: { pattern: "^[1-9A-HJ-NP-Za-km-z]{32,44}$" }, message: 'must match pattern "^[1-9A-HJ-NP-Za-km-z]{32,44}$"' }];
                  return false;
                }
              } else {
                validate21.errors = [{ instancePath: instancePath + "/wallet", schemaPath: "#/components/schemas/Base58/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                return false;
              }
            }
            var valid0 = _errs2 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.mode !== void 0) {
              let data1 = data.mode;
              const _errs5 = errors;
              if (typeof data1 !== "string") {
                validate21.errors = [{ instancePath: instancePath + "/mode", schemaPath: "#/properties/mode/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                return false;
              }
              if (!(data1 === "safe")) {
                validate21.errors = [{ instancePath: instancePath + "/mode", schemaPath: "#/properties/mode/enum", keyword: "enum", params: { allowedValues: schema32.properties.mode.enum }, message: "must be equal to one of the allowed values" }];
                return false;
              }
              var valid0 = _errs5 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.includeAirdrops !== void 0) {
                let data2 = data.includeAirdrops;
                const _errs7 = errors;
                if (typeof data2 !== "boolean") {
                  validate21.errors = [{ instancePath: instancePath + "/includeAirdrops", schemaPath: "#/properties/includeAirdrops/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }];
                  return false;
                }
                if (false !== data2) {
                  validate21.errors = [{ instancePath: instancePath + "/includeAirdrops", schemaPath: "#/properties/includeAirdrops/const", keyword: "const", params: { allowedValue: false }, message: "must be equal to constant" }];
                  return false;
                }
                var valid0 = _errs7 === errors;
              } else {
                var valid0 = true;
              }
              if (valid0) {
                if (data.sellAndCloseMaxUsd !== void 0) {
                  let data3 = data.sellAndCloseMaxUsd;
                  const _errs9 = errors;
                  if (errors === _errs9) {
                    if (typeof data3 === "string") {
                      if (!pattern5.test(data3)) {
                        validate21.errors = [{ instancePath: instancePath + "/sellAndCloseMaxUsd", schemaPath: "#/properties/sellAndCloseMaxUsd/pattern", keyword: "pattern", params: { pattern: "^(?:[1-9](?:\\.\\d{1,6})?|10(?:\\.0{1,6})?)$" }, message: 'must match pattern "^(?:[1-9](?:\\.\\d{1,6})?|10(?:\\.0{1,6})?)$"' }];
                        return false;
                      }
                    } else {
                      validate21.errors = [{ instancePath: instancePath + "/sellAndCloseMaxUsd", schemaPath: "#/properties/sellAndCloseMaxUsd/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                      return false;
                    }
                  }
                  var valid0 = _errs9 === errors;
                } else {
                  var valid0 = true;
                }
                if (valid0) {
                  if (data.limit !== void 0) {
                    let data4 = data.limit;
                    const _errs11 = errors;
                    if (!(typeof data4 == "number" && (!(data4 % 1) && !isNaN(data4)))) {
                      validate21.errors = [{ instancePath: instancePath + "/limit", schemaPath: "#/properties/limit/type", keyword: "type", params: { type: "integer" }, message: "must be integer" }];
                      return false;
                    }
                    if (errors === _errs11) {
                      if (typeof data4 == "number") {
                        if (data4 > 200 || isNaN(data4)) {
                          validate21.errors = [{ instancePath: instancePath + "/limit", schemaPath: "#/properties/limit/maximum", keyword: "maximum", params: { comparison: "<=", limit: 200 }, message: "must be <= 200" }];
                          return false;
                        } else {
                          if (data4 < 1 || isNaN(data4)) {
                            validate21.errors = [{ instancePath: instancePath + "/limit", schemaPath: "#/properties/limit/minimum", keyword: "minimum", params: { comparison: ">=", limit: 1 }, message: "must be >= 1" }];
                            return false;
                          }
                        }
                      }
                    }
                    var valid0 = _errs11 === errors;
                  } else {
                    var valid0 = true;
                  }
                  if (valid0) {
                    if (data.cursor !== void 0) {
                      let data5 = data.cursor;
                      const _errs13 = errors;
                      if (typeof data5 !== "string" && data5 !== null) {
                        validate21.errors = [{ instancePath: instancePath + "/cursor", schemaPath: "#/properties/cursor/type", keyword: "type", params: { type: schema32.properties.cursor.type }, message: "must be string,null" }];
                        return false;
                      }
                      if (errors === _errs13) {
                        if (typeof data5 === "string") {
                          if (!pattern6.test(data5)) {
                            validate21.errors = [{ instancePath: instancePath + "/cursor", schemaPath: "#/properties/cursor/pattern", keyword: "pattern", params: { pattern: "^ucur_[A-Za-z0-9_-]{43}$" }, message: 'must match pattern "^ucur_[A-Za-z0-9_-]{43}$"' }];
                            return false;
                          }
                        }
                      }
                      var valid0 = _errs13 === errors;
                    } else {
                      var valid0 = true;
                    }
                  }
                }
              }
            }
          }
        }
      }
    } else {
      validate21.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate21.errors = vErrors;
  return errors === 0;
}
validate21.evaluated = { "props": true, "dynamicProps": false, "dynamicItems": false };
function validate20(data, { instancePath = "", parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  const evaluated0 = validate20.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = void 0;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = void 0;
  }
  if (!validate21(data, { instancePath, parentData, parentDataProperty, rootData, dynamicAnchors })) {
    vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);
    errors = vErrors.length;
  }
  validate20.errors = vErrors;
  return errors === 0;
}
validate20.evaluated = { "props": true, "dynamicProps": false, "dynamicItems": false };
var validateResponse = validate23;
var schema35 = { "type": "object", "required": ["requestId", "apiVersion", "rulesetVersion", "assetIntelligenceRulesetVersion", "analyzedAt", "complete", "data", "billing"], "properties": { "requestId": { "type": "string" }, "apiVersion": { "type": "string", "enum": ["v1-preview"] }, "rulesetVersion": { "type": "string" }, "assetIntelligenceRulesetVersion": { "type": "null", "description": "Preview: always null; no Asset Intelligence is served." }, "analyzedAt": { "type": "string", "format": "date-time" }, "complete": { "type": "boolean", "enum": [true], "description": "Always true on a 200. Incomplete pages are refused, not served." }, "data": { "type": "object", "required": ["wallet", "mode", "summary", "pagination", "items", "airdrops", "executionSession", "limits"], "properties": { "wallet": { "$ref": "#/components/schemas/Base58" }, "mode": { "type": "string", "enum": ["safe"] }, "summary": { "type": "object", "description": "Presentation-only, current page plus first-page wallet modules. Never a whole-wallet total while `hasMore` is true.", "required": ["scope", "analyzedAssetAccounts", "opportunityCount", "protectedAssetCount", "totalsByAsset", "estimatedNetValueUsd"], "properties": { "scope": { "type": "string", "enum": ["page"] }, "analyzedAssetAccounts": { "type": "integer" }, "opportunityCount": { "type": "integer" }, "protectedAssetCount": { "type": "integer" }, "totalsByAsset": { "type": "array", "items": { "type": "object", "required": ["asset", "decimals", "grossBaseUnits", "serviceFeeBaseUnits", "netBaseUnits"], "properties": { "asset": { "type": "string" }, "mint": { "$ref": "#/components/schemas/Base58" }, "decimals": { "type": "integer" }, "grossBaseUnits": { "$ref": "#/components/schemas/IntegerString" }, "serviceFeeBaseUnits": { "$ref": "#/components/schemas/IntegerString" }, "netBaseUnits": { "$ref": "#/components/schemas/IntegerString" } } } }, "estimatedNetValueUsd": { "type": ["string", "null"], "description": "Null whenever any required price input is missing or stale." } } }, "pagination": { "type": "object", "required": ["returned", "hasMore", "nextCursor", "walletModulesIncluded", "expiresAt"], "properties": { "returned": { "type": "integer", "description": "Raw token accounts analyzed on this page, including those with no opportunity." }, "hasMore": { "type": "boolean" }, "nextCursor": { "type": ["string", "null"] }, "walletModulesIncluded": { "type": "boolean", "description": "True only on the first page." }, "expiresAt": { "type": "string", "format": "date-time", "description": "Shared snapshot and cursor expiry. Session lifetime is shared when enabled." } } }, "items": { "type": "array", "items": { "$ref": "#/components/schemas/WalletItem" } }, "airdrops": { "type": "null" }, "executionSession": { "oneOf": [{ "type": "null" }, { "$ref": "#/components/schemas/ExecutionSession" }], "description": "Issued only when execution preview is enabled. Shares snapshot expiry." }, "limits": { "type": "object", "required": ["maxRawTokenAccounts", "pageLimitMax"], "properties": { "maxRawTokenAccounts": { "type": "integer", "enum": [400], "description": "Preview cap, enforced before enrichment." }, "pageLimitMax": { "type": "integer", "enum": [200] } } } }, "allOf": [{ "if": { "properties": { "items": { "contains": { "properties": { "opportunity": { "properties": { "executionSupported": { "const": true } }, "required": ["executionSupported"] } }, "required": ["opportunity"] } } } }, "then": { "properties": { "executionSession": { "$ref": "#/components/schemas/ExecutionSession" } } } }] }, "billing": { "$ref": "#/components/schemas/Billing" } } };
var formats0 = require_formats().fastFormats["date-time"];
var pattern9 = new RegExp("^[0-9]+$", "u");
var schema42 = { "type": "object", "description": "One discriminated item. Preview omits `discardEvidence` and `classification.reputation` entirely rather than nulling them.", "required": ["id", "kind", "source", "classification", "opportunity"], "properties": { "id": { "type": "string" }, "kind": { "type": "string", "enum": ["token_account", "excess_lamports"] }, "source": { "type": "string", "enum": ["spl_token", "token_2022", "excess_lamports"], "description": "For disappeared or unsupported accounts, the platform retains the source from its address-bound frozen inventory. It never supplies missing current account facts from that snapshot." }, "targetAccount": { "$ref": "#/components/schemas/Base58", "description": "Exact target of an excess-lamports item. No current token balance is inferred from frozen inventory." }, "alternativeGroupId": { "type": "string", "description": "Present on every excess-lamports item for a token account and on the token-account item for the same account. The two are alternatives, never additive." }, "asset": { "type": "object", "required": ["mint", "assetType", "decimals"], "properties": { "mint": { "$ref": "#/components/schemas/Base58" }, "assetType": { "type": "string", "enum": ["fungible", "token_account_collectible", "unknown"] }, "symbol": { "type": ["string", "null"] }, "decimals": { "type": "integer" } } }, "account": { "type": "object", "required": ["address", "program", "balanceBaseUnits", "rentLamports"], "additionalProperties": false, "properties": { "address": { "$ref": "#/components/schemas/Base58" }, "program": { "type": "string", "enum": ["spl_token", "token_2022"] }, "balanceBaseUnits": { "$ref": "#/components/schemas/IntegerString" }, "rentLamports": { "$ref": "#/components/schemas/IntegerString" } } }, "classification": { "type": "object", "required": ["disposition", "confidence", "reviewRequired", "reasons", "protections"], "properties": { "disposition": { "type": "string", "enum": ["closeable_empty", "withdrawable", "protected", "review_only", "no_op"], "description": "Safe analysis only. Max-mode burn candidates are unavailable. Sell candidates are returned as `review_only`." }, "confidence": { "type": "string", "enum": ["known", "high", "low"] }, "reviewRequired": { "type": "boolean" }, "reasons": { "type": "array", "items": { "type": "string", "enum": ["zero_balance", "priced_dust_within_policy", "sell_not_supported_in_preview", "above_dust_threshold", "above_net_rent", "frozen", "collectible", "lp_or_position_shaped", "receipt_token_policy", "dangerous_token_2022_extension", "account_missing", "unsupported_account", "positive_wsol", "unpriced", "completed_no_sell_route", "unsupported_signer", "non_positive_net", "excess_above_rent_exempt_minimum"] } }, "protections": { "type": "array", "items": { "type": "string", "enum": ["frozen", "collectible", "lp_position", "receipt_token", "token_2022_extension", "unpriced", "account_state"] } } } }, "market": { "type": "object", "description": "Present on fungible token-account items.", "required": ["quoteStatus", "sellRouteAvailable", "executableQuoteUsd", "quotedAt"], "properties": { "quoteStatus": { "type": "string", "enum": ["complete", "unavailable"] }, "sellRouteAvailable": { "type": ["boolean", "null"], "description": "Null when a route was not requested; false only for a completed no-route lookup." }, "executableQuoteUsd": { "oneOf": [{ "type": "null" }, { "$ref": "#/components/schemas/DecimalUsd" }] }, "quotedAt": { "type": ["string", "null"], "format": "date-time" } }, "allOf": [{ "if": { "properties": { "quoteStatus": { "const": "unavailable" } } }, "then": { "properties": { "sellRouteAvailable": { "const": null }, "executableQuoteUsd": { "const": null }, "quotedAt": { "const": null } } }, "else": { "properties": { "sellRouteAvailable": { "type": "boolean" }, "quotedAt": { "type": "string", "format": "date-time" } } } }, { "if": { "properties": { "sellRouteAvailable": { "const": false } } }, "then": { "properties": { "executableQuoteUsd": { "const": null } } } }] }, "opportunity": { "oneOf": [{ "$ref": "#/components/schemas/BurnAndCloseOpportunity" }, { "$ref": "#/components/schemas/RecoverExcessLamportsOpportunity" }, { "$ref": "#/components/schemas/NoActionOpportunity" }], "discriminator": { "propertyName": "action", "mapping": { "burn_and_close": "#/components/schemas/BurnAndCloseOpportunity", "recover_excess_lamports": "#/components/schemas/RecoverExcessLamportsOpportunity", "none": "#/components/schemas/NoActionOpportunity" } } } }, "allOf": [{ "if": { "properties": { "kind": { "const": "excess_lamports" } } }, "then": { "required": ["targetAccount", "alternativeGroupId"], "not": { "required": ["account"] }, "properties": { "source": { "const": "excess_lamports" }, "classification": { "properties": { "disposition": { "const": "withdrawable" }, "confidence": { "const": "known" }, "reviewRequired": { "const": true }, "reasons": { "const": ["excess_above_rent_exempt_minimum"] }, "protections": { "maxItems": 0 } } }, "opportunity": { "properties": { "action": { "const": "recover_excess_lamports" } } } } }, "else": { "not": { "required": ["targetAccount"] }, "properties": { "source": { "enum": ["spl_token", "token_2022"] }, "classification": { "properties": { "disposition": { "enum": ["closeable_empty", "protected", "review_only", "no_op"] }, "reasons": { "not": { "contains": { "const": "excess_above_rent_exempt_minimum" } } } } }, "opportunity": { "properties": { "action": { "enum": ["none", "burn_and_close"] } } } } } }, { "if": { "required": ["account"], "properties": { "account": { "properties": { "program": { "const": "spl_token" } } } } }, "then": { "properties": { "source": { "const": "spl_token" } } } }, { "if": { "required": ["account"], "properties": { "account": { "properties": { "program": { "const": "token_2022" } } } } }, "then": { "properties": { "source": { "const": "token_2022" } } } }, { "if": { "required": ["market"] }, "then": { "required": ["account", "asset"], "properties": { "kind": { "const": "token_account" }, "asset": { "properties": { "assetType": { "const": "fungible" } } } } } }, { "if": { "properties": { "opportunity": { "properties": { "action": { "const": "burn_and_close" } } } } }, "then": { "required": ["account", "asset"], "properties": { "kind": { "const": "token_account" }, "source": { "enum": ["spl_token", "token_2022"] }, "classification": { "properties": { "disposition": { "enum": ["closeable_empty"] }, "reviewRequired": { "const": true }, "protections": { "maxItems": 0 } } } } } }, { "if": { "properties": { "classification": { "properties": { "disposition": { "const": "closeable_empty" } } } } }, "then": { "required": ["account", "asset"], "properties": { "account": { "properties": { "balanceBaseUnits": { "const": "0" } } }, "opportunity": { "properties": { "action": { "const": "burn_and_close" }, "reviewedBalanceBaseUnits": { "const": "0" } } } } } }, { "if": { "properties": { "classification": { "properties": { "reasons": { "contains": { "enum": ["account_missing", "unsupported_account"] } } } } } }, "then": { "properties": { "classification": { "properties": { "disposition": { "const": "protected" }, "protections": { "contains": { "const": "account_state" } } } }, "opportunity": { "properties": { "action": { "const": "none" } } } }, "not": { "required": ["market"] } } }] };
var schema57 = { "type": "object", "description": "Protected, review-only, and no-op items. Never executable.", "required": ["action", "destructive", "executionSupported", "valueComponents", "estimated"], "properties": { "action": { "type": "string", "enum": ["none"] }, "destructive": { "type": "boolean", "enum": [false] }, "executionSupported": { "type": "boolean", "enum": [false] }, "valueComponents": { "type": "array", "maxItems": 0 }, "estimated": { "type": "boolean", "enum": [true] } } };
var func0 = require_equal().default;
var pattern17 = new RegExp("^[0-9]+\\.[0-9]{6}$", "u");
var schema49 = { "type": "object", "description": "Preview downgrade (contract section 6): executes on the existing\non-chain instruction, which burns whatever balance is present when the\ntransaction runs. Every instance is destructive and carries the\nconsent text, including accounts reviewed as empty.\n", "required": ["action", "destructive", "executionSupported", "consent", "reviewedBalanceBaseUnits", "valueComponents", "costs", "estimatedNetValueUsd", "estimated"], "properties": { "action": { "type": "string", "enum": ["burn_and_close"] }, "destructive": { "type": "boolean", "enum": [true] }, "executionSupported": { "type": "boolean", "description": "True only when the execution preview is enabled and this action is supported." }, "consent": { "type": "string", "minLength": 1, "description": "Exact text the integration must show before signing. States the reviewed balance and that execution burns whatever balance is present when the transaction runs; for `assumed_worthless` items also that no price was available." }, "reviewedBalanceBaseUnits": { "$ref": "#/components/schemas/IntegerString", "description": "The balance the user is reviewing. Zero for empty-account close." }, "valueComponents": { "type": "array", "minItems": 1, "items": { "allOf": [{ "$ref": "#/components/schemas/ValueComponent" }, { "properties": { "source": { "const": "token_account_close" } } }] } }, "costs": { "$ref": "#/components/schemas/OpportunityCosts" }, "estimatedNetValueUsd": { "type": ["string", "null"] }, "estimated": { "type": "boolean", "enum": [true] } } };
var func2 = require_ucs2length().default;
var schema51 = { "type": "object", "required": ["source", "gross", "serviceFee", "netAfterServiceFee"], "properties": { "source": { "type": "string", "enum": ["token_account_close", "excess_lamports"] }, "gross": { "$ref": "#/components/schemas/Amount" }, "serviceFee": { "$ref": "#/components/schemas/Amount" }, "netAfterServiceFee": { "$ref": "#/components/schemas/Amount" } } };
function validate28(data, { instancePath = "", parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {}) {
  let vErrors = null;
  let errors = 0;
  const evaluated0 = validate28.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = void 0;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = void 0;
  }
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.asset === void 0 && (missing0 = "asset") || data.decimals === void 0 && (missing0 = "decimals") || data.baseUnits === void 0 && (missing0 = "baseUnits")) {
        validate28.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        if (data.asset !== void 0) {
          const _errs1 = errors;
          if (typeof data.asset !== "string") {
            validate28.errors = [{ instancePath: instancePath + "/asset", schemaPath: "#/properties/asset/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
            return false;
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.mint !== void 0) {
            let data1 = data.mint;
            const _errs3 = errors;
            const _errs4 = errors;
            if (errors === _errs4) {
              if (typeof data1 === "string") {
                if (!pattern4.test(data1)) {
                  validate28.errors = [{ instancePath: instancePath + "/mint", schemaPath: "#/components/schemas/Base58/pattern", keyword: "pattern", params: { pattern: "^[1-9A-HJ-NP-Za-km-z]{32,44}$" }, message: 'must match pattern "^[1-9A-HJ-NP-Za-km-z]{32,44}$"' }];
                  return false;
                }
              } else {
                validate28.errors = [{ instancePath: instancePath + "/mint", schemaPath: "#/components/schemas/Base58/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                return false;
              }
            }
            var valid0 = _errs3 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.decimals !== void 0) {
              let data2 = data.decimals;
              const _errs6 = errors;
              if (!(typeof data2 == "number" && (!(data2 % 1) && !isNaN(data2)))) {
                validate28.errors = [{ instancePath: instancePath + "/decimals", schemaPath: "#/properties/decimals/type", keyword: "type", params: { type: "integer" }, message: "must be integer" }];
                return false;
              }
              if (errors === _errs6) {
                if (typeof data2 == "number") {
                  if (data2 > 18 || isNaN(data2)) {
                    validate28.errors = [{ instancePath: instancePath + "/decimals", schemaPath: "#/properties/decimals/maximum", keyword: "maximum", params: { comparison: "<=", limit: 18 }, message: "must be <= 18" }];
                    return false;
                  } else {
                    if (data2 < 0 || isNaN(data2)) {
                      validate28.errors = [{ instancePath: instancePath + "/decimals", schemaPath: "#/properties/decimals/minimum", keyword: "minimum", params: { comparison: ">=", limit: 0 }, message: "must be >= 0" }];
                      return false;
                    }
                  }
                }
              }
              var valid0 = _errs6 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.baseUnits !== void 0) {
                let data3 = data.baseUnits;
                const _errs8 = errors;
                const _errs9 = errors;
                if (errors === _errs9) {
                  if (typeof data3 === "string") {
                    if (!pattern9.test(data3)) {
                      validate28.errors = [{ instancePath: instancePath + "/baseUnits", schemaPath: "#/components/schemas/IntegerString/pattern", keyword: "pattern", params: { pattern: "^[0-9]+$" }, message: 'must match pattern "^[0-9]+$"' }];
                      return false;
                    }
                  } else {
                    validate28.errors = [{ instancePath: instancePath + "/baseUnits", schemaPath: "#/components/schemas/IntegerString/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                    return false;
                  }
                }
                var valid0 = _errs8 === errors;
              } else {
                var valid0 = true;
              }
            }
          }
        }
      }
    } else {
      validate28.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate28.errors = vErrors;
  return errors === 0;
}
validate28.evaluated = { "props": { "asset": true, "mint": true, "decimals": true, "baseUnits": true }, "dynamicProps": false, "dynamicItems": false };
function validate27(data, { instancePath = "", parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {}) {
  let vErrors = null;
  let errors = 0;
  const evaluated0 = validate27.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = void 0;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = void 0;
  }
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.source === void 0 && (missing0 = "source") || data.gross === void 0 && (missing0 = "gross") || data.serviceFee === void 0 && (missing0 = "serviceFee") || data.netAfterServiceFee === void 0 && (missing0 = "netAfterServiceFee")) {
        validate27.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        if (data.source !== void 0) {
          let data0 = data.source;
          const _errs1 = errors;
          if (typeof data0 !== "string") {
            validate27.errors = [{ instancePath: instancePath + "/source", schemaPath: "#/properties/source/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
            return false;
          }
          if (!(data0 === "token_account_close" || data0 === "excess_lamports")) {
            validate27.errors = [{ instancePath: instancePath + "/source", schemaPath: "#/properties/source/enum", keyword: "enum", params: { allowedValues: schema51.properties.source.enum }, message: "must be equal to one of the allowed values" }];
            return false;
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.gross !== void 0) {
            const _errs3 = errors;
            if (!validate28(data.gross, { instancePath: instancePath + "/gross", parentData: data, parentDataProperty: "gross", rootData, dynamicAnchors })) {
              vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
              errors = vErrors.length;
            }
            var valid0 = _errs3 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.serviceFee !== void 0) {
              const _errs4 = errors;
              if (!validate28(data.serviceFee, { instancePath: instancePath + "/serviceFee", parentData: data, parentDataProperty: "serviceFee", rootData, dynamicAnchors })) {
                vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
                errors = vErrors.length;
              }
              var valid0 = _errs4 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.netAfterServiceFee !== void 0) {
                const _errs5 = errors;
                if (!validate28(data.netAfterServiceFee, { instancePath: instancePath + "/netAfterServiceFee", parentData: data, parentDataProperty: "netAfterServiceFee", rootData, dynamicAnchors })) {
                  vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
                  errors = vErrors.length;
                }
                var valid0 = _errs5 === errors;
              } else {
                var valid0 = true;
              }
            }
          }
        }
      }
    } else {
      validate27.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate27.errors = vErrors;
  return errors === 0;
}
validate27.evaluated = { "props": { "source": true, "gross": true, "serviceFee": true, "netAfterServiceFee": true }, "dynamicProps": false, "dynamicItems": false };
var schema55 = { "type": "object", "required": ["scope", "oneTimeSetup", "estimatedNetworkFee", "nativeFundingRequired"], "properties": { "scope": { "type": "string", "enum": ["standalone_estimate"] }, "oneTimeSetup": { "$ref": "#/components/schemas/Amount" }, "estimatedNetworkFee": { "$ref": "#/components/schemas/Amount" }, "nativeFundingRequired": { "$ref": "#/components/schemas/Amount" } } };
function validate33(data, { instancePath = "", parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {}) {
  let vErrors = null;
  let errors = 0;
  const evaluated0 = validate33.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = void 0;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = void 0;
  }
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.scope === void 0 && (missing0 = "scope") || data.oneTimeSetup === void 0 && (missing0 = "oneTimeSetup") || data.estimatedNetworkFee === void 0 && (missing0 = "estimatedNetworkFee") || data.nativeFundingRequired === void 0 && (missing0 = "nativeFundingRequired")) {
        validate33.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        if (data.scope !== void 0) {
          let data0 = data.scope;
          const _errs1 = errors;
          if (typeof data0 !== "string") {
            validate33.errors = [{ instancePath: instancePath + "/scope", schemaPath: "#/properties/scope/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
            return false;
          }
          if (!(data0 === "standalone_estimate")) {
            validate33.errors = [{ instancePath: instancePath + "/scope", schemaPath: "#/properties/scope/enum", keyword: "enum", params: { allowedValues: schema55.properties.scope.enum }, message: "must be equal to one of the allowed values" }];
            return false;
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.oneTimeSetup !== void 0) {
            const _errs3 = errors;
            if (!validate28(data.oneTimeSetup, { instancePath: instancePath + "/oneTimeSetup", parentData: data, parentDataProperty: "oneTimeSetup", rootData, dynamicAnchors })) {
              vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
              errors = vErrors.length;
            }
            var valid0 = _errs3 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.estimatedNetworkFee !== void 0) {
              const _errs4 = errors;
              if (!validate28(data.estimatedNetworkFee, { instancePath: instancePath + "/estimatedNetworkFee", parentData: data, parentDataProperty: "estimatedNetworkFee", rootData, dynamicAnchors })) {
                vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
                errors = vErrors.length;
              }
              var valid0 = _errs4 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.nativeFundingRequired !== void 0) {
                const _errs5 = errors;
                if (!validate28(data.nativeFundingRequired, { instancePath: instancePath + "/nativeFundingRequired", parentData: data, parentDataProperty: "nativeFundingRequired", rootData, dynamicAnchors })) {
                  vErrors = vErrors === null ? validate28.errors : vErrors.concat(validate28.errors);
                  errors = vErrors.length;
                }
                var valid0 = _errs5 === errors;
              } else {
                var valid0 = true;
              }
            }
          }
        }
      }
    } else {
      validate33.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate33.errors = vErrors;
  return errors === 0;
}
validate33.evaluated = { "props": { "scope": true, "oneTimeSetup": true, "estimatedNetworkFee": true, "nativeFundingRequired": true }, "dynamicProps": false, "dynamicItems": false };
function validate26(data, { instancePath = "", parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {}) {
  let vErrors = null;
  let errors = 0;
  const evaluated0 = validate26.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = void 0;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = void 0;
  }
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.action === void 0 && (missing0 = "action") || data.destructive === void 0 && (missing0 = "destructive") || data.executionSupported === void 0 && (missing0 = "executionSupported") || data.consent === void 0 && (missing0 = "consent") || data.reviewedBalanceBaseUnits === void 0 && (missing0 = "reviewedBalanceBaseUnits") || data.valueComponents === void 0 && (missing0 = "valueComponents") || data.costs === void 0 && (missing0 = "costs") || data.estimatedNetValueUsd === void 0 && (missing0 = "estimatedNetValueUsd") || data.estimated === void 0 && (missing0 = "estimated")) {
        validate26.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        if (data.action !== void 0) {
          let data0 = data.action;
          const _errs1 = errors;
          if (typeof data0 !== "string") {
            validate26.errors = [{ instancePath: instancePath + "/action", schemaPath: "#/properties/action/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
            return false;
          }
          if (!(data0 === "burn_and_close")) {
            validate26.errors = [{ instancePath: instancePath + "/action", schemaPath: "#/properties/action/enum", keyword: "enum", params: { allowedValues: schema49.properties.action.enum }, message: "must be equal to one of the allowed values" }];
            return false;
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.destructive !== void 0) {
            let data1 = data.destructive;
            const _errs3 = errors;
            if (typeof data1 !== "boolean") {
              validate26.errors = [{ instancePath: instancePath + "/destructive", schemaPath: "#/properties/destructive/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }];
              return false;
            }
            if (!(data1 === true)) {
              validate26.errors = [{ instancePath: instancePath + "/destructive", schemaPath: "#/properties/destructive/enum", keyword: "enum", params: { allowedValues: schema49.properties.destructive.enum }, message: "must be equal to one of the allowed values" }];
              return false;
            }
            var valid0 = _errs3 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.executionSupported !== void 0) {
              const _errs5 = errors;
              if (typeof data.executionSupported !== "boolean") {
                validate26.errors = [{ instancePath: instancePath + "/executionSupported", schemaPath: "#/properties/executionSupported/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }];
                return false;
              }
              var valid0 = _errs5 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.consent !== void 0) {
                let data3 = data.consent;
                const _errs7 = errors;
                if (errors === _errs7) {
                  if (typeof data3 === "string") {
                    if (func2(data3) < 1) {
                      validate26.errors = [{ instancePath: instancePath + "/consent", schemaPath: "#/properties/consent/minLength", keyword: "minLength", params: { limit: 1 }, message: "must NOT have fewer than 1 characters" }];
                      return false;
                    }
                  } else {
                    validate26.errors = [{ instancePath: instancePath + "/consent", schemaPath: "#/properties/consent/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                    return false;
                  }
                }
                var valid0 = _errs7 === errors;
              } else {
                var valid0 = true;
              }
              if (valid0) {
                if (data.reviewedBalanceBaseUnits !== void 0) {
                  let data4 = data.reviewedBalanceBaseUnits;
                  const _errs9 = errors;
                  const _errs10 = errors;
                  if (errors === _errs10) {
                    if (typeof data4 === "string") {
                      if (!pattern9.test(data4)) {
                        validate26.errors = [{ instancePath: instancePath + "/reviewedBalanceBaseUnits", schemaPath: "#/components/schemas/IntegerString/pattern", keyword: "pattern", params: { pattern: "^[0-9]+$" }, message: 'must match pattern "^[0-9]+$"' }];
                        return false;
                      }
                    } else {
                      validate26.errors = [{ instancePath: instancePath + "/reviewedBalanceBaseUnits", schemaPath: "#/components/schemas/IntegerString/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                      return false;
                    }
                  }
                  var valid0 = _errs9 === errors;
                } else {
                  var valid0 = true;
                }
                if (valid0) {
                  if (data.valueComponents !== void 0) {
                    let data5 = data.valueComponents;
                    const _errs12 = errors;
                    if (errors === _errs12) {
                      if (Array.isArray(data5)) {
                        if (data5.length < 1) {
                          validate26.errors = [{ instancePath: instancePath + "/valueComponents", schemaPath: "#/properties/valueComponents/minItems", keyword: "minItems", params: { limit: 1 }, message: "must NOT have fewer than 1 items" }];
                          return false;
                        } else {
                          var valid2 = true;
                          const len0 = data5.length;
                          for (let i0 = 0; i0 < len0; i0++) {
                            let data6 = data5[i0];
                            const _errs14 = errors;
                            const _errs15 = errors;
                            if (!validate27(data6, { instancePath: instancePath + "/valueComponents/" + i0, parentData: data5, parentDataProperty: i0, rootData, dynamicAnchors })) {
                              vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
                              errors = vErrors.length;
                            }
                            var valid3 = _errs15 === errors;
                            if (valid3) {
                              const _errs16 = errors;
                              if (data6 && typeof data6 == "object" && !Array.isArray(data6)) {
                                if (data6.source !== void 0) {
                                  if ("token_account_close" !== data6.source) {
                                    validate26.errors = [{ instancePath: instancePath + "/valueComponents/" + i0 + "/source", schemaPath: "#/properties/valueComponents/items/allOf/1/properties/source/const", keyword: "const", params: { allowedValue: "token_account_close" }, message: "must be equal to constant" }];
                                    return false;
                                  }
                                }
                              }
                              var valid3 = _errs16 === errors;
                            }
                            var valid2 = _errs14 === errors;
                            if (!valid2) {
                              break;
                            }
                          }
                        }
                      } else {
                        validate26.errors = [{ instancePath: instancePath + "/valueComponents", schemaPath: "#/properties/valueComponents/type", keyword: "type", params: { type: "array" }, message: "must be array" }];
                        return false;
                      }
                    }
                    var valid0 = _errs12 === errors;
                  } else {
                    var valid0 = true;
                  }
                  if (valid0) {
                    if (data.costs !== void 0) {
                      const _errs18 = errors;
                      if (!validate33(data.costs, { instancePath: instancePath + "/costs", parentData: data, parentDataProperty: "costs", rootData, dynamicAnchors })) {
                        vErrors = vErrors === null ? validate33.errors : vErrors.concat(validate33.errors);
                        errors = vErrors.length;
                      }
                      var valid0 = _errs18 === errors;
                    } else {
                      var valid0 = true;
                    }
                    if (valid0) {
                      if (data.estimatedNetValueUsd !== void 0) {
                        let data9 = data.estimatedNetValueUsd;
                        const _errs19 = errors;
                        if (typeof data9 !== "string" && data9 !== null) {
                          validate26.errors = [{ instancePath: instancePath + "/estimatedNetValueUsd", schemaPath: "#/properties/estimatedNetValueUsd/type", keyword: "type", params: { type: schema49.properties.estimatedNetValueUsd.type }, message: "must be string,null" }];
                          return false;
                        }
                        var valid0 = _errs19 === errors;
                      } else {
                        var valid0 = true;
                      }
                      if (valid0) {
                        if (data.estimated !== void 0) {
                          let data10 = data.estimated;
                          const _errs21 = errors;
                          if (typeof data10 !== "boolean") {
                            validate26.errors = [{ instancePath: instancePath + "/estimated", schemaPath: "#/properties/estimated/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }];
                            return false;
                          }
                          if (!(data10 === true)) {
                            validate26.errors = [{ instancePath: instancePath + "/estimated", schemaPath: "#/properties/estimated/enum", keyword: "enum", params: { allowedValues: schema49.properties.estimated.enum }, message: "must be equal to one of the allowed values" }];
                            return false;
                          }
                          var valid0 = _errs21 === errors;
                        } else {
                          var valid0 = true;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    } else {
      validate26.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate26.errors = vErrors;
  return errors === 0;
}
validate26.evaluated = { "props": { "action": true, "destructive": true, "executionSupported": true, "consent": true, "reviewedBalanceBaseUnits": true, "valueComponents": true, "costs": true, "estimatedNetValueUsd": true, "estimated": true }, "dynamicProps": false, "dynamicItems": false };
var schema56 = { "type": "object", "required": ["action", "destructive", "executionSupported", "valueComponents", "costs", "estimatedNetValueUsd", "estimated"], "properties": { "action": { "type": "string", "enum": ["recover_excess_lamports"] }, "destructive": { "type": "boolean", "enum": [false] }, "executionSupported": { "type": "boolean", "description": "True only when the execution preview is enabled and this action is supported." }, "valueComponents": { "type": "array", "minItems": 1, "items": { "allOf": [{ "$ref": "#/components/schemas/ValueComponent" }, { "properties": { "source": { "const": "excess_lamports" } } }] } }, "costs": { "type": "null", "description": "Null while the analysis adapter supplies no network/funding estimate. Never infer zero cost." }, "estimatedNetValueUsd": { "type": "null", "description": "No USD valuation is supplied by this analysis adapter." }, "estimated": { "type": "boolean", "enum": [true] } } };
function validate39(data, { instancePath = "", parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {}) {
  let vErrors = null;
  let errors = 0;
  const evaluated0 = validate39.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = void 0;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = void 0;
  }
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.action === void 0 && (missing0 = "action") || data.destructive === void 0 && (missing0 = "destructive") || data.executionSupported === void 0 && (missing0 = "executionSupported") || data.valueComponents === void 0 && (missing0 = "valueComponents") || data.costs === void 0 && (missing0 = "costs") || data.estimatedNetValueUsd === void 0 && (missing0 = "estimatedNetValueUsd") || data.estimated === void 0 && (missing0 = "estimated")) {
        validate39.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        if (data.action !== void 0) {
          let data0 = data.action;
          const _errs1 = errors;
          if (typeof data0 !== "string") {
            validate39.errors = [{ instancePath: instancePath + "/action", schemaPath: "#/properties/action/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
            return false;
          }
          if (!(data0 === "recover_excess_lamports")) {
            validate39.errors = [{ instancePath: instancePath + "/action", schemaPath: "#/properties/action/enum", keyword: "enum", params: { allowedValues: schema56.properties.action.enum }, message: "must be equal to one of the allowed values" }];
            return false;
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.destructive !== void 0) {
            let data1 = data.destructive;
            const _errs3 = errors;
            if (typeof data1 !== "boolean") {
              validate39.errors = [{ instancePath: instancePath + "/destructive", schemaPath: "#/properties/destructive/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }];
              return false;
            }
            if (!(data1 === false)) {
              validate39.errors = [{ instancePath: instancePath + "/destructive", schemaPath: "#/properties/destructive/enum", keyword: "enum", params: { allowedValues: schema56.properties.destructive.enum }, message: "must be equal to one of the allowed values" }];
              return false;
            }
            var valid0 = _errs3 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.executionSupported !== void 0) {
              const _errs5 = errors;
              if (typeof data.executionSupported !== "boolean") {
                validate39.errors = [{ instancePath: instancePath + "/executionSupported", schemaPath: "#/properties/executionSupported/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }];
                return false;
              }
              var valid0 = _errs5 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.valueComponents !== void 0) {
                let data3 = data.valueComponents;
                const _errs7 = errors;
                if (errors === _errs7) {
                  if (Array.isArray(data3)) {
                    if (data3.length < 1) {
                      validate39.errors = [{ instancePath: instancePath + "/valueComponents", schemaPath: "#/properties/valueComponents/minItems", keyword: "minItems", params: { limit: 1 }, message: "must NOT have fewer than 1 items" }];
                      return false;
                    } else {
                      var valid1 = true;
                      const len0 = data3.length;
                      for (let i0 = 0; i0 < len0; i0++) {
                        let data4 = data3[i0];
                        const _errs9 = errors;
                        const _errs10 = errors;
                        if (!validate27(data4, { instancePath: instancePath + "/valueComponents/" + i0, parentData: data3, parentDataProperty: i0, rootData, dynamicAnchors })) {
                          vErrors = vErrors === null ? validate27.errors : vErrors.concat(validate27.errors);
                          errors = vErrors.length;
                        }
                        var valid2 = _errs10 === errors;
                        if (valid2) {
                          const _errs11 = errors;
                          if (data4 && typeof data4 == "object" && !Array.isArray(data4)) {
                            if (data4.source !== void 0) {
                              if ("excess_lamports" !== data4.source) {
                                validate39.errors = [{ instancePath: instancePath + "/valueComponents/" + i0 + "/source", schemaPath: "#/properties/valueComponents/items/allOf/1/properties/source/const", keyword: "const", params: { allowedValue: "excess_lamports" }, message: "must be equal to constant" }];
                                return false;
                              }
                            }
                          }
                          var valid2 = _errs11 === errors;
                        }
                        var valid1 = _errs9 === errors;
                        if (!valid1) {
                          break;
                        }
                      }
                    }
                  } else {
                    validate39.errors = [{ instancePath: instancePath + "/valueComponents", schemaPath: "#/properties/valueComponents/type", keyword: "type", params: { type: "array" }, message: "must be array" }];
                    return false;
                  }
                }
                var valid0 = _errs7 === errors;
              } else {
                var valid0 = true;
              }
              if (valid0) {
                if (data.costs !== void 0) {
                  const _errs13 = errors;
                  if (data.costs !== null) {
                    validate39.errors = [{ instancePath: instancePath + "/costs", schemaPath: "#/properties/costs/type", keyword: "type", params: { type: "null" }, message: "must be null" }];
                    return false;
                  }
                  var valid0 = _errs13 === errors;
                } else {
                  var valid0 = true;
                }
                if (valid0) {
                  if (data.estimatedNetValueUsd !== void 0) {
                    const _errs15 = errors;
                    if (data.estimatedNetValueUsd !== null) {
                      validate39.errors = [{ instancePath: instancePath + "/estimatedNetValueUsd", schemaPath: "#/properties/estimatedNetValueUsd/type", keyword: "type", params: { type: "null" }, message: "must be null" }];
                      return false;
                    }
                    var valid0 = _errs15 === errors;
                  } else {
                    var valid0 = true;
                  }
                  if (valid0) {
                    if (data.estimated !== void 0) {
                      let data8 = data.estimated;
                      const _errs17 = errors;
                      if (typeof data8 !== "boolean") {
                        validate39.errors = [{ instancePath: instancePath + "/estimated", schemaPath: "#/properties/estimated/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }];
                        return false;
                      }
                      if (!(data8 === true)) {
                        validate39.errors = [{ instancePath: instancePath + "/estimated", schemaPath: "#/properties/estimated/enum", keyword: "enum", params: { allowedValues: schema56.properties.estimated.enum }, message: "must be equal to one of the allowed values" }];
                        return false;
                      }
                      var valid0 = _errs17 === errors;
                    } else {
                      var valid0 = true;
                    }
                  }
                }
              }
            }
          }
        }
      }
    } else {
      validate39.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate39.errors = vErrors;
  return errors === 0;
}
validate39.evaluated = { "props": { "action": true, "destructive": true, "executionSupported": true, "valueComponents": true, "costs": true, "estimatedNetValueUsd": true, "estimated": true }, "dynamicProps": false, "dynamicItems": false };
function validate25(data, { instancePath = "", parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {}) {
  let vErrors = null;
  let errors = 0;
  const evaluated0 = validate25.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = void 0;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = void 0;
  }
  const _errs1 = errors;
  const _errs2 = errors;
  let valid1 = true;
  const _errs3 = errors;
  if (data && typeof data == "object" && !Array.isArray(data)) {
    if (data.kind !== void 0) {
      if ("excess_lamports" !== data.kind) {
        const err0 = {};
        if (vErrors === null) {
          vErrors = [err0];
        } else {
          vErrors.push(err0);
        }
        errors++;
      }
    }
  }
  var _valid0 = _errs3 === errors;
  errors = _errs2;
  if (vErrors !== null) {
    if (_errs2) {
      vErrors.length = _errs2;
    } else {
      vErrors = null;
    }
  }
  let ifClause0;
  if (_valid0) {
    const _errs5 = errors;
    const _errs6 = errors;
    const _errs7 = errors;
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.account === void 0 && (missing0 = "account")) {
        const err1 = {};
        if (vErrors === null) {
          vErrors = [err1];
        } else {
          vErrors.push(err1);
        }
        errors++;
      }
    }
    var valid3 = _errs7 === errors;
    if (valid3) {
      validate25.errors = [{ instancePath, schemaPath: "#/allOf/0/then/not", keyword: "not", params: {}, message: "must NOT be valid" }];
      return false;
    } else {
      errors = _errs6;
      if (vErrors !== null) {
        if (_errs6) {
          vErrors.length = _errs6;
        } else {
          vErrors = null;
        }
      }
    }
    if (errors === _errs5) {
      if (data && typeof data == "object" && !Array.isArray(data)) {
        let missing1;
        if (data.targetAccount === void 0 && (missing1 = "targetAccount") || data.alternativeGroupId === void 0 && (missing1 = "alternativeGroupId")) {
          validate25.errors = [{ instancePath, schemaPath: "#/allOf/0/then/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" }];
          return false;
        } else {
          if (data.source !== void 0) {
            const _errs8 = errors;
            if ("excess_lamports" !== data.source) {
              validate25.errors = [{ instancePath: instancePath + "/source", schemaPath: "#/allOf/0/then/properties/source/const", keyword: "const", params: { allowedValue: "excess_lamports" }, message: "must be equal to constant" }];
              return false;
            }
            var valid4 = _errs8 === errors;
          } else {
            var valid4 = true;
          }
          if (valid4) {
            if (data.classification !== void 0) {
              let data2 = data.classification;
              const _errs9 = errors;
              if (data2 && typeof data2 == "object" && !Array.isArray(data2)) {
                if (data2.disposition !== void 0) {
                  const _errs10 = errors;
                  if ("withdrawable" !== data2.disposition) {
                    validate25.errors = [{ instancePath: instancePath + "/classification/disposition", schemaPath: "#/allOf/0/then/properties/classification/properties/disposition/const", keyword: "const", params: { allowedValue: "withdrawable" }, message: "must be equal to constant" }];
                    return false;
                  }
                  var valid5 = _errs10 === errors;
                } else {
                  var valid5 = true;
                }
                if (valid5) {
                  if (data2.confidence !== void 0) {
                    const _errs11 = errors;
                    if ("known" !== data2.confidence) {
                      validate25.errors = [{ instancePath: instancePath + "/classification/confidence", schemaPath: "#/allOf/0/then/properties/classification/properties/confidence/const", keyword: "const", params: { allowedValue: "known" }, message: "must be equal to constant" }];
                      return false;
                    }
                    var valid5 = _errs11 === errors;
                  } else {
                    var valid5 = true;
                  }
                  if (valid5) {
                    if (data2.reviewRequired !== void 0) {
                      const _errs12 = errors;
                      if (true !== data2.reviewRequired) {
                        validate25.errors = [{ instancePath: instancePath + "/classification/reviewRequired", schemaPath: "#/allOf/0/then/properties/classification/properties/reviewRequired/const", keyword: "const", params: { allowedValue: true }, message: "must be equal to constant" }];
                        return false;
                      }
                      var valid5 = _errs12 === errors;
                    } else {
                      var valid5 = true;
                    }
                    if (valid5) {
                      if (data2.reasons !== void 0) {
                        const _errs13 = errors;
                        if (!func0(data2.reasons, schema42.allOf[0].then.properties.classification.properties.reasons.const)) {
                          validate25.errors = [{ instancePath: instancePath + "/classification/reasons", schemaPath: "#/allOf/0/then/properties/classification/properties/reasons/const", keyword: "const", params: { allowedValue: schema42.allOf[0].then.properties.classification.properties.reasons.const }, message: "must be equal to constant" }];
                          return false;
                        }
                        var valid5 = _errs13 === errors;
                      } else {
                        var valid5 = true;
                      }
                      if (valid5) {
                        if (data2.protections !== void 0) {
                          let data7 = data2.protections;
                          const _errs14 = errors;
                          if (Array.isArray(data7)) {
                            if (data7.length > 0) {
                              validate25.errors = [{ instancePath: instancePath + "/classification/protections", schemaPath: "#/allOf/0/then/properties/classification/properties/protections/maxItems", keyword: "maxItems", params: { limit: 0 }, message: "must NOT have more than 0 items" }];
                              return false;
                            }
                          }
                          var valid5 = _errs14 === errors;
                        } else {
                          var valid5 = true;
                        }
                      }
                    }
                  }
                }
              }
              var valid4 = _errs9 === errors;
            } else {
              var valid4 = true;
            }
            if (valid4) {
              if (data.opportunity !== void 0) {
                let data8 = data.opportunity;
                const _errs15 = errors;
                if (data8 && typeof data8 == "object" && !Array.isArray(data8)) {
                  if (data8.action !== void 0) {
                    if ("recover_excess_lamports" !== data8.action) {
                      validate25.errors = [{ instancePath: instancePath + "/opportunity/action", schemaPath: "#/allOf/0/then/properties/opportunity/properties/action/const", keyword: "const", params: { allowedValue: "recover_excess_lamports" }, message: "must be equal to constant" }];
                      return false;
                    }
                  }
                }
                var valid4 = _errs15 === errors;
              } else {
                var valid4 = true;
              }
            }
          }
        }
      }
    }
    var _valid0 = _errs5 === errors;
    valid1 = _valid0;
    if (valid1) {
      var props0 = {};
      props0.source = true;
      props0.classification = true;
      props0.opportunity = true;
      props0.kind = true;
    }
    ifClause0 = "then";
  } else {
    const _errs17 = errors;
    const _errs18 = errors;
    const _errs19 = errors;
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing2;
      if (data.targetAccount === void 0 && (missing2 = "targetAccount")) {
        const err2 = {};
        if (vErrors === null) {
          vErrors = [err2];
        } else {
          vErrors.push(err2);
        }
        errors++;
      }
    }
    var valid7 = _errs19 === errors;
    if (valid7) {
      validate25.errors = [{ instancePath, schemaPath: "#/allOf/0/else/not", keyword: "not", params: {}, message: "must NOT be valid" }];
      return false;
    } else {
      errors = _errs18;
      if (vErrors !== null) {
        if (_errs18) {
          vErrors.length = _errs18;
        } else {
          vErrors = null;
        }
      }
    }
    if (errors === _errs17) {
      if (data && typeof data == "object" && !Array.isArray(data)) {
        if (data.source !== void 0) {
          let data10 = data.source;
          const _errs20 = errors;
          if (!(data10 === "spl_token" || data10 === "token_2022")) {
            validate25.errors = [{ instancePath: instancePath + "/source", schemaPath: "#/allOf/0/else/properties/source/enum", keyword: "enum", params: { allowedValues: schema42.allOf[0].else.properties.source.enum }, message: "must be equal to one of the allowed values" }];
            return false;
          }
          var valid8 = _errs20 === errors;
        } else {
          var valid8 = true;
        }
        if (valid8) {
          if (data.classification !== void 0) {
            let data11 = data.classification;
            const _errs21 = errors;
            if (data11 && typeof data11 == "object" && !Array.isArray(data11)) {
              if (data11.disposition !== void 0) {
                let data12 = data11.disposition;
                const _errs22 = errors;
                if (!(data12 === "closeable_empty" || data12 === "protected" || data12 === "review_only" || data12 === "no_op")) {
                  validate25.errors = [{ instancePath: instancePath + "/classification/disposition", schemaPath: "#/allOf/0/else/properties/classification/properties/disposition/enum", keyword: "enum", params: { allowedValues: schema42.allOf[0].else.properties.classification.properties.disposition.enum }, message: "must be equal to one of the allowed values" }];
                  return false;
                }
                var valid9 = _errs22 === errors;
              } else {
                var valid9 = true;
              }
              if (valid9) {
                if (data11.reasons !== void 0) {
                  let data13 = data11.reasons;
                  const _errs23 = errors;
                  const _errs24 = errors;
                  const _errs25 = errors;
                  if (Array.isArray(data13)) {
                    const _errs26 = errors;
                    const len0 = data13.length;
                    for (let i0 = 0; i0 < len0; i0++) {
                      const _errs27 = errors;
                      if ("excess_above_rent_exempt_minimum" !== data13[i0]) {
                        const err3 = {};
                        if (vErrors === null) {
                          vErrors = [err3];
                        } else {
                          vErrors.push(err3);
                        }
                        errors++;
                      }
                      var valid11 = _errs27 === errors;
                      if (valid11) {
                        break;
                      }
                    }
                    if (!valid11) {
                      const err4 = {};
                      if (vErrors === null) {
                        vErrors = [err4];
                      } else {
                        vErrors.push(err4);
                      }
                      errors++;
                    } else {
                      errors = _errs26;
                      if (vErrors !== null) {
                        if (_errs26) {
                          vErrors.length = _errs26;
                        } else {
                          vErrors = null;
                        }
                      }
                    }
                  }
                  var valid10 = _errs25 === errors;
                  if (valid10) {
                    validate25.errors = [{ instancePath: instancePath + "/classification/reasons", schemaPath: "#/allOf/0/else/properties/classification/properties/reasons/not", keyword: "not", params: {}, message: "must NOT be valid" }];
                    return false;
                  } else {
                    errors = _errs24;
                    if (vErrors !== null) {
                      if (_errs24) {
                        vErrors.length = _errs24;
                      } else {
                        vErrors = null;
                      }
                    }
                  }
                  var valid9 = _errs23 === errors;
                } else {
                  var valid9 = true;
                }
              }
            }
            var valid8 = _errs21 === errors;
          } else {
            var valid8 = true;
          }
          if (valid8) {
            if (data.opportunity !== void 0) {
              let data15 = data.opportunity;
              const _errs28 = errors;
              if (data15 && typeof data15 == "object" && !Array.isArray(data15)) {
                if (data15.action !== void 0) {
                  let data16 = data15.action;
                  if (!(data16 === "none" || data16 === "burn_and_close")) {
                    validate25.errors = [{ instancePath: instancePath + "/opportunity/action", schemaPath: "#/allOf/0/else/properties/opportunity/properties/action/enum", keyword: "enum", params: { allowedValues: schema42.allOf[0].else.properties.opportunity.properties.action.enum }, message: "must be equal to one of the allowed values" }];
                    return false;
                  }
                }
              }
              var valid8 = _errs28 === errors;
            } else {
              var valid8 = true;
            }
          }
        }
      }
    }
    var _valid0 = _errs17 === errors;
    valid1 = _valid0;
    if (valid1) {
      if (props0 !== true) {
        props0 = props0 || {};
        props0.source = true;
        props0.classification = true;
        props0.opportunity = true;
      }
    }
    ifClause0 = "else";
  }
  if (!valid1) {
    const err5 = { instancePath, schemaPath: "#/allOf/0/if", keyword: "if", params: { failingKeyword: ifClause0 }, message: 'must match "' + ifClause0 + '" schema' };
    if (vErrors === null) {
      vErrors = [err5];
    } else {
      vErrors.push(err5);
    }
    errors++;
    validate25.errors = vErrors;
    return false;
  }
  var valid0 = _errs1 === errors;
  if (valid0) {
    const _errs30 = errors;
    const _errs31 = errors;
    let valid13 = true;
    const _errs32 = errors;
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing3;
      if (data.account === void 0 && (missing3 = "account")) {
        const err6 = {};
        if (vErrors === null) {
          vErrors = [err6];
        } else {
          vErrors.push(err6);
        }
        errors++;
      } else {
        if (data.account !== void 0) {
          let data17 = data.account;
          if (data17 && typeof data17 == "object" && !Array.isArray(data17)) {
            if (data17.program !== void 0) {
              if ("spl_token" !== data17.program) {
                const err7 = {};
                if (vErrors === null) {
                  vErrors = [err7];
                } else {
                  vErrors.push(err7);
                }
                errors++;
              }
            }
          }
        }
      }
    }
    var _valid1 = _errs32 === errors;
    errors = _errs31;
    if (vErrors !== null) {
      if (_errs31) {
        vErrors.length = _errs31;
      } else {
        vErrors = null;
      }
    }
    if (_valid1) {
      const _errs35 = errors;
      if (data && typeof data == "object" && !Array.isArray(data)) {
        if (data.source !== void 0) {
          if ("spl_token" !== data.source) {
            validate25.errors = [{ instancePath: instancePath + "/source", schemaPath: "#/allOf/1/then/properties/source/const", keyword: "const", params: { allowedValue: "spl_token" }, message: "must be equal to constant" }];
            return false;
          }
        }
      }
      var _valid1 = _errs35 === errors;
      valid13 = _valid1;
      if (valid13) {
        var props1 = {};
        props1.source = true;
        props1.account = true;
      }
    }
    if (!valid13) {
      const err8 = { instancePath, schemaPath: "#/allOf/1/if", keyword: "if", params: { failingKeyword: "then" }, message: 'must match "then" schema' };
      if (vErrors === null) {
        vErrors = [err8];
      } else {
        vErrors.push(err8);
      }
      errors++;
      validate25.errors = vErrors;
      return false;
    }
    var valid0 = _errs30 === errors;
    if (valid0) {
      if (props0 !== true && props1 !== void 0) {
        if (props1 === true) {
          props0 = true;
        } else {
          props0 = props0 || {};
          Object.assign(props0, props1);
        }
      }
      const _errs37 = errors;
      const _errs38 = errors;
      let valid17 = true;
      const _errs39 = errors;
      if (data && typeof data == "object" && !Array.isArray(data)) {
        let missing4;
        if (data.account === void 0 && (missing4 = "account")) {
          const err9 = {};
          if (vErrors === null) {
            vErrors = [err9];
          } else {
            vErrors.push(err9);
          }
          errors++;
        } else {
          if (data.account !== void 0) {
            let data20 = data.account;
            if (data20 && typeof data20 == "object" && !Array.isArray(data20)) {
              if (data20.program !== void 0) {
                if ("token_2022" !== data20.program) {
                  const err10 = {};
                  if (vErrors === null) {
                    vErrors = [err10];
                  } else {
                    vErrors.push(err10);
                  }
                  errors++;
                }
              }
            }
          }
        }
      }
      var _valid2 = _errs39 === errors;
      errors = _errs38;
      if (vErrors !== null) {
        if (_errs38) {
          vErrors.length = _errs38;
        } else {
          vErrors = null;
        }
      }
      if (_valid2) {
        const _errs42 = errors;
        if (data && typeof data == "object" && !Array.isArray(data)) {
          if (data.source !== void 0) {
            if ("token_2022" !== data.source) {
              validate25.errors = [{ instancePath: instancePath + "/source", schemaPath: "#/allOf/2/then/properties/source/const", keyword: "const", params: { allowedValue: "token_2022" }, message: "must be equal to constant" }];
              return false;
            }
          }
        }
        var _valid2 = _errs42 === errors;
        valid17 = _valid2;
        if (valid17) {
          var props2 = {};
          props2.source = true;
          props2.account = true;
        }
      }
      if (!valid17) {
        const err11 = { instancePath, schemaPath: "#/allOf/2/if", keyword: "if", params: { failingKeyword: "then" }, message: 'must match "then" schema' };
        if (vErrors === null) {
          vErrors = [err11];
        } else {
          vErrors.push(err11);
        }
        errors++;
        validate25.errors = vErrors;
        return false;
      }
      var valid0 = _errs37 === errors;
      if (valid0) {
        if (props0 !== true && props2 !== void 0) {
          if (props2 === true) {
            props0 = true;
          } else {
            props0 = props0 || {};
            Object.assign(props0, props2);
          }
        }
        const _errs44 = errors;
        const _errs45 = errors;
        let valid21 = true;
        const _errs46 = errors;
        if (data && typeof data == "object" && !Array.isArray(data)) {
          let missing5;
          if (data.market === void 0 && (missing5 = "market")) {
            const err12 = {};
            if (vErrors === null) {
              vErrors = [err12];
            } else {
              vErrors.push(err12);
            }
            errors++;
          }
        }
        var _valid3 = _errs46 === errors;
        errors = _errs45;
        if (vErrors !== null) {
          if (_errs45) {
            vErrors.length = _errs45;
          } else {
            vErrors = null;
          }
        }
        if (_valid3) {
          const _errs47 = errors;
          if (data && typeof data == "object" && !Array.isArray(data)) {
            let missing6;
            if (data.account === void 0 && (missing6 = "account") || data.asset === void 0 && (missing6 = "asset")) {
              validate25.errors = [{ instancePath, schemaPath: "#/allOf/3/then/required", keyword: "required", params: { missingProperty: missing6 }, message: "must have required property '" + missing6 + "'" }];
              return false;
            } else {
              if (data.kind !== void 0) {
                const _errs48 = errors;
                if ("token_account" !== data.kind) {
                  validate25.errors = [{ instancePath: instancePath + "/kind", schemaPath: "#/allOf/3/then/properties/kind/const", keyword: "const", params: { allowedValue: "token_account" }, message: "must be equal to constant" }];
                  return false;
                }
                var valid22 = _errs48 === errors;
              } else {
                var valid22 = true;
              }
              if (valid22) {
                if (data.asset !== void 0) {
                  let data24 = data.asset;
                  const _errs49 = errors;
                  if (data24 && typeof data24 == "object" && !Array.isArray(data24)) {
                    if (data24.assetType !== void 0) {
                      if ("fungible" !== data24.assetType) {
                        validate25.errors = [{ instancePath: instancePath + "/asset/assetType", schemaPath: "#/allOf/3/then/properties/asset/properties/assetType/const", keyword: "const", params: { allowedValue: "fungible" }, message: "must be equal to constant" }];
                        return false;
                      }
                    }
                  }
                  var valid22 = _errs49 === errors;
                } else {
                  var valid22 = true;
                }
              }
            }
          }
          var _valid3 = _errs47 === errors;
          valid21 = _valid3;
          if (valid21) {
            var props3 = {};
            props3.kind = true;
            props3.asset = true;
          }
        }
        if (!valid21) {
          const err13 = { instancePath, schemaPath: "#/allOf/3/if", keyword: "if", params: { failingKeyword: "then" }, message: 'must match "then" schema' };
          if (vErrors === null) {
            vErrors = [err13];
          } else {
            vErrors.push(err13);
          }
          errors++;
          validate25.errors = vErrors;
          return false;
        }
        var valid0 = _errs44 === errors;
        if (valid0) {
          if (props0 !== true && props3 !== void 0) {
            if (props3 === true) {
              props0 = true;
            } else {
              props0 = props0 || {};
              Object.assign(props0, props3);
            }
          }
          const _errs51 = errors;
          const _errs52 = errors;
          let valid24 = true;
          const _errs53 = errors;
          if (data && typeof data == "object" && !Array.isArray(data)) {
            if (data.opportunity !== void 0) {
              let data26 = data.opportunity;
              if (data26 && typeof data26 == "object" && !Array.isArray(data26)) {
                if (data26.action !== void 0) {
                  if ("burn_and_close" !== data26.action) {
                    const err14 = {};
                    if (vErrors === null) {
                      vErrors = [err14];
                    } else {
                      vErrors.push(err14);
                    }
                    errors++;
                  }
                }
              }
            }
          }
          var _valid4 = _errs53 === errors;
          errors = _errs52;
          if (vErrors !== null) {
            if (_errs52) {
              vErrors.length = _errs52;
            } else {
              vErrors = null;
            }
          }
          if (_valid4) {
            const _errs56 = errors;
            if (data && typeof data == "object" && !Array.isArray(data)) {
              let missing7;
              if (data.account === void 0 && (missing7 = "account") || data.asset === void 0 && (missing7 = "asset")) {
                validate25.errors = [{ instancePath, schemaPath: "#/allOf/4/then/required", keyword: "required", params: { missingProperty: missing7 }, message: "must have required property '" + missing7 + "'" }];
                return false;
              } else {
                if (data.kind !== void 0) {
                  const _errs57 = errors;
                  if ("token_account" !== data.kind) {
                    validate25.errors = [{ instancePath: instancePath + "/kind", schemaPath: "#/allOf/4/then/properties/kind/const", keyword: "const", params: { allowedValue: "token_account" }, message: "must be equal to constant" }];
                    return false;
                  }
                  var valid27 = _errs57 === errors;
                } else {
                  var valid27 = true;
                }
                if (valid27) {
                  if (data.source !== void 0) {
                    let data29 = data.source;
                    const _errs58 = errors;
                    if (!(data29 === "spl_token" || data29 === "token_2022")) {
                      validate25.errors = [{ instancePath: instancePath + "/source", schemaPath: "#/allOf/4/then/properties/source/enum", keyword: "enum", params: { allowedValues: schema42.allOf[4].then.properties.source.enum }, message: "must be equal to one of the allowed values" }];
                      return false;
                    }
                    var valid27 = _errs58 === errors;
                  } else {
                    var valid27 = true;
                  }
                  if (valid27) {
                    if (data.classification !== void 0) {
                      let data30 = data.classification;
                      const _errs59 = errors;
                      if (data30 && typeof data30 == "object" && !Array.isArray(data30)) {
                        if (data30.disposition !== void 0) {
                          const _errs60 = errors;
                          if (!(data30.disposition === "closeable_empty")) {
                            validate25.errors = [{ instancePath: instancePath + "/classification/disposition", schemaPath: "#/allOf/4/then/properties/classification/properties/disposition/enum", keyword: "enum", params: { allowedValues: schema42.allOf[4].then.properties.classification.properties.disposition.enum }, message: "must be equal to one of the allowed values" }];
                            return false;
                          }
                          var valid28 = _errs60 === errors;
                        } else {
                          var valid28 = true;
                        }
                        if (valid28) {
                          if (data30.reviewRequired !== void 0) {
                            const _errs61 = errors;
                            if (true !== data30.reviewRequired) {
                              validate25.errors = [{ instancePath: instancePath + "/classification/reviewRequired", schemaPath: "#/allOf/4/then/properties/classification/properties/reviewRequired/const", keyword: "const", params: { allowedValue: true }, message: "must be equal to constant" }];
                              return false;
                            }
                            var valid28 = _errs61 === errors;
                          } else {
                            var valid28 = true;
                          }
                          if (valid28) {
                            if (data30.protections !== void 0) {
                              let data33 = data30.protections;
                              const _errs62 = errors;
                              if (Array.isArray(data33)) {
                                if (data33.length > 0) {
                                  validate25.errors = [{ instancePath: instancePath + "/classification/protections", schemaPath: "#/allOf/4/then/properties/classification/properties/protections/maxItems", keyword: "maxItems", params: { limit: 0 }, message: "must NOT have more than 0 items" }];
                                  return false;
                                }
                              }
                              var valid28 = _errs62 === errors;
                            } else {
                              var valid28 = true;
                            }
                          }
                        }
                      }
                      var valid27 = _errs59 === errors;
                    } else {
                      var valid27 = true;
                    }
                  }
                }
              }
            }
            var _valid4 = _errs56 === errors;
            valid24 = _valid4;
            if (valid24) {
              var props4 = {};
              props4.kind = true;
              props4.source = true;
              props4.classification = true;
              props4.opportunity = true;
            }
          }
          if (!valid24) {
            const err15 = { instancePath, schemaPath: "#/allOf/4/if", keyword: "if", params: { failingKeyword: "then" }, message: 'must match "then" schema' };
            if (vErrors === null) {
              vErrors = [err15];
            } else {
              vErrors.push(err15);
            }
            errors++;
            validate25.errors = vErrors;
            return false;
          }
          var valid0 = _errs51 === errors;
          if (valid0) {
            if (props0 !== true && props4 !== void 0) {
              if (props4 === true) {
                props0 = true;
              } else {
                props0 = props0 || {};
                Object.assign(props0, props4);
              }
            }
            const _errs63 = errors;
            const _errs64 = errors;
            let valid29 = true;
            const _errs65 = errors;
            if (data && typeof data == "object" && !Array.isArray(data)) {
              if (data.classification !== void 0) {
                let data34 = data.classification;
                if (data34 && typeof data34 == "object" && !Array.isArray(data34)) {
                  if (data34.disposition !== void 0) {
                    if ("closeable_empty" !== data34.disposition) {
                      const err16 = {};
                      if (vErrors === null) {
                        vErrors = [err16];
                      } else {
                        vErrors.push(err16);
                      }
                      errors++;
                    }
                  }
                }
              }
            }
            var _valid5 = _errs65 === errors;
            errors = _errs64;
            if (vErrors !== null) {
              if (_errs64) {
                vErrors.length = _errs64;
              } else {
                vErrors = null;
              }
            }
            if (_valid5) {
              const _errs68 = errors;
              if (data && typeof data == "object" && !Array.isArray(data)) {
                let missing8;
                if (data.account === void 0 && (missing8 = "account") || data.asset === void 0 && (missing8 = "asset")) {
                  validate25.errors = [{ instancePath, schemaPath: "#/allOf/5/then/required", keyword: "required", params: { missingProperty: missing8 }, message: "must have required property '" + missing8 + "'" }];
                  return false;
                } else {
                  if (data.account !== void 0) {
                    let data36 = data.account;
                    const _errs69 = errors;
                    if (data36 && typeof data36 == "object" && !Array.isArray(data36)) {
                      if (data36.balanceBaseUnits !== void 0) {
                        if ("0" !== data36.balanceBaseUnits) {
                          validate25.errors = [{ instancePath: instancePath + "/account/balanceBaseUnits", schemaPath: "#/allOf/5/then/properties/account/properties/balanceBaseUnits/const", keyword: "const", params: { allowedValue: "0" }, message: "must be equal to constant" }];
                          return false;
                        }
                      }
                    }
                    var valid32 = _errs69 === errors;
                  } else {
                    var valid32 = true;
                  }
                  if (valid32) {
                    if (data.opportunity !== void 0) {
                      let data38 = data.opportunity;
                      const _errs71 = errors;
                      if (data38 && typeof data38 == "object" && !Array.isArray(data38)) {
                        if (data38.action !== void 0) {
                          const _errs72 = errors;
                          if ("burn_and_close" !== data38.action) {
                            validate25.errors = [{ instancePath: instancePath + "/opportunity/action", schemaPath: "#/allOf/5/then/properties/opportunity/properties/action/const", keyword: "const", params: { allowedValue: "burn_and_close" }, message: "must be equal to constant" }];
                            return false;
                          }
                          var valid34 = _errs72 === errors;
                        } else {
                          var valid34 = true;
                        }
                        if (valid34) {
                          if (data38.reviewedBalanceBaseUnits !== void 0) {
                            const _errs73 = errors;
                            if ("0" !== data38.reviewedBalanceBaseUnits) {
                              validate25.errors = [{ instancePath: instancePath + "/opportunity/reviewedBalanceBaseUnits", schemaPath: "#/allOf/5/then/properties/opportunity/properties/reviewedBalanceBaseUnits/const", keyword: "const", params: { allowedValue: "0" }, message: "must be equal to constant" }];
                              return false;
                            }
                            var valid34 = _errs73 === errors;
                          } else {
                            var valid34 = true;
                          }
                        }
                      }
                      var valid32 = _errs71 === errors;
                    } else {
                      var valid32 = true;
                    }
                  }
                }
              }
              var _valid5 = _errs68 === errors;
              valid29 = _valid5;
              if (valid29) {
                var props5 = {};
                props5.account = true;
                props5.opportunity = true;
                props5.classification = true;
              }
            }
            if (!valid29) {
              const err17 = { instancePath, schemaPath: "#/allOf/5/if", keyword: "if", params: { failingKeyword: "then" }, message: 'must match "then" schema' };
              if (vErrors === null) {
                vErrors = [err17];
              } else {
                vErrors.push(err17);
              }
              errors++;
              validate25.errors = vErrors;
              return false;
            }
            var valid0 = _errs63 === errors;
            if (valid0) {
              if (props0 !== true && props5 !== void 0) {
                if (props5 === true) {
                  props0 = true;
                } else {
                  props0 = props0 || {};
                  Object.assign(props0, props5);
                }
              }
              const _errs74 = errors;
              const _errs75 = errors;
              let valid35 = true;
              const _errs76 = errors;
              if (data && typeof data == "object" && !Array.isArray(data)) {
                if (data.classification !== void 0) {
                  let data41 = data.classification;
                  if (data41 && typeof data41 == "object" && !Array.isArray(data41)) {
                    if (data41.reasons !== void 0) {
                      let data42 = data41.reasons;
                      if (Array.isArray(data42)) {
                        const _errs79 = errors;
                        const len1 = data42.length;
                        for (let i1 = 0; i1 < len1; i1++) {
                          let data43 = data42[i1];
                          const _errs80 = errors;
                          if (!(data43 === "account_missing" || data43 === "unsupported_account")) {
                            const err18 = {};
                            if (vErrors === null) {
                              vErrors = [err18];
                            } else {
                              vErrors.push(err18);
                            }
                            errors++;
                          }
                          var valid38 = _errs80 === errors;
                          if (valid38) {
                            break;
                          }
                        }
                        if (!valid38) {
                          const err19 = {};
                          if (vErrors === null) {
                            vErrors = [err19];
                          } else {
                            vErrors.push(err19);
                          }
                          errors++;
                        } else {
                          errors = _errs79;
                          if (vErrors !== null) {
                            if (_errs79) {
                              vErrors.length = _errs79;
                            } else {
                              vErrors = null;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              var _valid6 = _errs76 === errors;
              errors = _errs75;
              if (vErrors !== null) {
                if (_errs75) {
                  vErrors.length = _errs75;
                } else {
                  vErrors = null;
                }
              }
              if (_valid6) {
                const _errs81 = errors;
                const _errs82 = errors;
                const _errs83 = errors;
                if (data && typeof data == "object" && !Array.isArray(data)) {
                  let missing9;
                  if (data.market === void 0 && (missing9 = "market")) {
                    const err20 = {};
                    if (vErrors === null) {
                      vErrors = [err20];
                    } else {
                      vErrors.push(err20);
                    }
                    errors++;
                  }
                }
                var valid39 = _errs83 === errors;
                if (valid39) {
                  validate25.errors = [{ instancePath, schemaPath: "#/allOf/6/then/not", keyword: "not", params: {}, message: "must NOT be valid" }];
                  return false;
                } else {
                  errors = _errs82;
                  if (vErrors !== null) {
                    if (_errs82) {
                      vErrors.length = _errs82;
                    } else {
                      vErrors = null;
                    }
                  }
                }
                if (errors === _errs81) {
                  if (data && typeof data == "object" && !Array.isArray(data)) {
                    if (data.classification !== void 0) {
                      let data44 = data.classification;
                      const _errs84 = errors;
                      if (data44 && typeof data44 == "object" && !Array.isArray(data44)) {
                        if (data44.disposition !== void 0) {
                          const _errs85 = errors;
                          if ("protected" !== data44.disposition) {
                            validate25.errors = [{ instancePath: instancePath + "/classification/disposition", schemaPath: "#/allOf/6/then/properties/classification/properties/disposition/const", keyword: "const", params: { allowedValue: "protected" }, message: "must be equal to constant" }];
                            return false;
                          }
                          var valid41 = _errs85 === errors;
                        } else {
                          var valid41 = true;
                        }
                        if (valid41) {
                          if (data44.protections !== void 0) {
                            let data46 = data44.protections;
                            const _errs86 = errors;
                            if (Array.isArray(data46)) {
                              const _errs87 = errors;
                              const len2 = data46.length;
                              for (let i2 = 0; i2 < len2; i2++) {
                                const _errs88 = errors;
                                if ("account_state" !== data46[i2]) {
                                  const err21 = { instancePath: instancePath + "/classification/protections/" + i2, schemaPath: "#/allOf/6/then/properties/classification/properties/protections/contains/const", keyword: "const", params: { allowedValue: "account_state" }, message: "must be equal to constant" };
                                  if (vErrors === null) {
                                    vErrors = [err21];
                                  } else {
                                    vErrors.push(err21);
                                  }
                                  errors++;
                                }
                                var valid42 = _errs88 === errors;
                                if (valid42) {
                                  break;
                                }
                              }
                              if (!valid42) {
                                validate25.errors = [{ instancePath: instancePath + "/classification/protections", schemaPath: "#/allOf/6/then/properties/classification/properties/protections/contains", keyword: "contains", params: { minContains: 1 }, message: "must contain at least 1 valid item(s)" }];
                                return false;
                              } else {
                                errors = _errs87;
                                if (vErrors !== null) {
                                  if (_errs87) {
                                    vErrors.length = _errs87;
                                  } else {
                                    vErrors = null;
                                  }
                                }
                              }
                            }
                            var valid41 = _errs86 === errors;
                          } else {
                            var valid41 = true;
                          }
                        }
                      }
                      var valid40 = _errs84 === errors;
                    } else {
                      var valid40 = true;
                    }
                    if (valid40) {
                      if (data.opportunity !== void 0) {
                        let data48 = data.opportunity;
                        const _errs89 = errors;
                        if (data48 && typeof data48 == "object" && !Array.isArray(data48)) {
                          if (data48.action !== void 0) {
                            if ("none" !== data48.action) {
                              validate25.errors = [{ instancePath: instancePath + "/opportunity/action", schemaPath: "#/allOf/6/then/properties/opportunity/properties/action/const", keyword: "const", params: { allowedValue: "none" }, message: "must be equal to constant" }];
                              return false;
                            }
                          }
                        }
                        var valid40 = _errs89 === errors;
                      } else {
                        var valid40 = true;
                      }
                    }
                  }
                }
                var _valid6 = _errs81 === errors;
                valid35 = _valid6;
                if (valid35) {
                  var props6 = {};
                  props6.classification = true;
                  props6.opportunity = true;
                }
              }
              if (!valid35) {
                const err22 = { instancePath, schemaPath: "#/allOf/6/if", keyword: "if", params: { failingKeyword: "then" }, message: 'must match "then" schema' };
                if (vErrors === null) {
                  vErrors = [err22];
                } else {
                  vErrors.push(err22);
                }
                errors++;
                validate25.errors = vErrors;
                return false;
              }
              var valid0 = _errs74 === errors;
              if (valid0) {
                if (props0 !== true && props6 !== void 0) {
                  if (props6 === true) {
                    props0 = true;
                  } else {
                    props0 = props0 || {};
                    Object.assign(props0, props6);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing10;
      if (data.id === void 0 && (missing10 = "id") || data.kind === void 0 && (missing10 = "kind") || data.source === void 0 && (missing10 = "source") || data.classification === void 0 && (missing10 = "classification") || data.opportunity === void 0 && (missing10 = "opportunity")) {
        validate25.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing10 }, message: "must have required property '" + missing10 + "'" }];
        return false;
      } else {
        if (props0 !== true) {
          props0 = props0 || {};
          props0.id = true;
          props0.kind = true;
          props0.source = true;
          props0.targetAccount = true;
          props0.alternativeGroupId = true;
          props0.asset = true;
          props0.account = true;
          props0.classification = true;
          props0.market = true;
          props0.opportunity = true;
        }
        if (data.id !== void 0) {
          const _errs91 = errors;
          if (typeof data.id !== "string") {
            validate25.errors = [{ instancePath: instancePath + "/id", schemaPath: "#/properties/id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
            return false;
          }
          var valid44 = _errs91 === errors;
        } else {
          var valid44 = true;
        }
        if (valid44) {
          if (data.kind !== void 0) {
            let data51 = data.kind;
            const _errs93 = errors;
            if (typeof data51 !== "string") {
              validate25.errors = [{ instancePath: instancePath + "/kind", schemaPath: "#/properties/kind/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            if (!(data51 === "token_account" || data51 === "excess_lamports")) {
              validate25.errors = [{ instancePath: instancePath + "/kind", schemaPath: "#/properties/kind/enum", keyword: "enum", params: { allowedValues: schema42.properties.kind.enum }, message: "must be equal to one of the allowed values" }];
              return false;
            }
            var valid44 = _errs93 === errors;
          } else {
            var valid44 = true;
          }
          if (valid44) {
            if (data.source !== void 0) {
              let data52 = data.source;
              const _errs95 = errors;
              if (typeof data52 !== "string") {
                validate25.errors = [{ instancePath: instancePath + "/source", schemaPath: "#/properties/source/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                return false;
              }
              if (!(data52 === "spl_token" || data52 === "token_2022" || data52 === "excess_lamports")) {
                validate25.errors = [{ instancePath: instancePath + "/source", schemaPath: "#/properties/source/enum", keyword: "enum", params: { allowedValues: schema42.properties.source.enum }, message: "must be equal to one of the allowed values" }];
                return false;
              }
              var valid44 = _errs95 === errors;
            } else {
              var valid44 = true;
            }
            if (valid44) {
              if (data.targetAccount !== void 0) {
                let data53 = data.targetAccount;
                const _errs97 = errors;
                const _errs98 = errors;
                if (errors === _errs98) {
                  if (typeof data53 === "string") {
                    if (!pattern4.test(data53)) {
                      validate25.errors = [{ instancePath: instancePath + "/targetAccount", schemaPath: "#/components/schemas/Base58/pattern", keyword: "pattern", params: { pattern: "^[1-9A-HJ-NP-Za-km-z]{32,44}$" }, message: 'must match pattern "^[1-9A-HJ-NP-Za-km-z]{32,44}$"' }];
                      return false;
                    }
                  } else {
                    validate25.errors = [{ instancePath: instancePath + "/targetAccount", schemaPath: "#/components/schemas/Base58/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                    return false;
                  }
                }
                var valid44 = _errs97 === errors;
              } else {
                var valid44 = true;
              }
              if (valid44) {
                if (data.alternativeGroupId !== void 0) {
                  const _errs100 = errors;
                  if (typeof data.alternativeGroupId !== "string") {
                    validate25.errors = [{ instancePath: instancePath + "/alternativeGroupId", schemaPath: "#/properties/alternativeGroupId/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                    return false;
                  }
                  var valid44 = _errs100 === errors;
                } else {
                  var valid44 = true;
                }
                if (valid44) {
                  if (data.asset !== void 0) {
                    let data55 = data.asset;
                    const _errs102 = errors;
                    if (errors === _errs102) {
                      if (data55 && typeof data55 == "object" && !Array.isArray(data55)) {
                        let missing11;
                        if (data55.mint === void 0 && (missing11 = "mint") || data55.assetType === void 0 && (missing11 = "assetType") || data55.decimals === void 0 && (missing11 = "decimals")) {
                          validate25.errors = [{ instancePath: instancePath + "/asset", schemaPath: "#/properties/asset/required", keyword: "required", params: { missingProperty: missing11 }, message: "must have required property '" + missing11 + "'" }];
                          return false;
                        } else {
                          if (data55.mint !== void 0) {
                            let data56 = data55.mint;
                            const _errs104 = errors;
                            const _errs105 = errors;
                            if (errors === _errs105) {
                              if (typeof data56 === "string") {
                                if (!pattern4.test(data56)) {
                                  validate25.errors = [{ instancePath: instancePath + "/asset/mint", schemaPath: "#/components/schemas/Base58/pattern", keyword: "pattern", params: { pattern: "^[1-9A-HJ-NP-Za-km-z]{32,44}$" }, message: 'must match pattern "^[1-9A-HJ-NP-Za-km-z]{32,44}$"' }];
                                  return false;
                                }
                              } else {
                                validate25.errors = [{ instancePath: instancePath + "/asset/mint", schemaPath: "#/components/schemas/Base58/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                return false;
                              }
                            }
                            var valid46 = _errs104 === errors;
                          } else {
                            var valid46 = true;
                          }
                          if (valid46) {
                            if (data55.assetType !== void 0) {
                              let data57 = data55.assetType;
                              const _errs107 = errors;
                              if (typeof data57 !== "string") {
                                validate25.errors = [{ instancePath: instancePath + "/asset/assetType", schemaPath: "#/properties/asset/properties/assetType/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                return false;
                              }
                              if (!(data57 === "fungible" || data57 === "token_account_collectible" || data57 === "unknown")) {
                                validate25.errors = [{ instancePath: instancePath + "/asset/assetType", schemaPath: "#/properties/asset/properties/assetType/enum", keyword: "enum", params: { allowedValues: schema42.properties.asset.properties.assetType.enum }, message: "must be equal to one of the allowed values" }];
                                return false;
                              }
                              var valid46 = _errs107 === errors;
                            } else {
                              var valid46 = true;
                            }
                            if (valid46) {
                              if (data55.symbol !== void 0) {
                                let data58 = data55.symbol;
                                const _errs109 = errors;
                                if (typeof data58 !== "string" && data58 !== null) {
                                  validate25.errors = [{ instancePath: instancePath + "/asset/symbol", schemaPath: "#/properties/asset/properties/symbol/type", keyword: "type", params: { type: schema42.properties.asset.properties.symbol.type }, message: "must be string,null" }];
                                  return false;
                                }
                                var valid46 = _errs109 === errors;
                              } else {
                                var valid46 = true;
                              }
                              if (valid46) {
                                if (data55.decimals !== void 0) {
                                  let data59 = data55.decimals;
                                  const _errs111 = errors;
                                  if (!(typeof data59 == "number" && (!(data59 % 1) && !isNaN(data59)))) {
                                    validate25.errors = [{ instancePath: instancePath + "/asset/decimals", schemaPath: "#/properties/asset/properties/decimals/type", keyword: "type", params: { type: "integer" }, message: "must be integer" }];
                                    return false;
                                  }
                                  var valid46 = _errs111 === errors;
                                } else {
                                  var valid46 = true;
                                }
                              }
                            }
                          }
                        }
                      } else {
                        validate25.errors = [{ instancePath: instancePath + "/asset", schemaPath: "#/properties/asset/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                        return false;
                      }
                    }
                    var valid44 = _errs102 === errors;
                  } else {
                    var valid44 = true;
                  }
                  if (valid44) {
                    if (data.account !== void 0) {
                      let data60 = data.account;
                      const _errs113 = errors;
                      if (errors === _errs113) {
                        if (data60 && typeof data60 == "object" && !Array.isArray(data60)) {
                          let missing12;
                          if (data60.address === void 0 && (missing12 = "address") || data60.program === void 0 && (missing12 = "program") || data60.balanceBaseUnits === void 0 && (missing12 = "balanceBaseUnits") || data60.rentLamports === void 0 && (missing12 = "rentLamports")) {
                            validate25.errors = [{ instancePath: instancePath + "/account", schemaPath: "#/properties/account/required", keyword: "required", params: { missingProperty: missing12 }, message: "must have required property '" + missing12 + "'" }];
                            return false;
                          } else {
                            const _errs115 = errors;
                            for (const key0 in data60) {
                              if (!(key0 === "address" || key0 === "program" || key0 === "balanceBaseUnits" || key0 === "rentLamports")) {
                                validate25.errors = [{ instancePath: instancePath + "/account", schemaPath: "#/properties/account/additionalProperties", keyword: "additionalProperties", params: { additionalProperty: key0 }, message: "must NOT have additional properties" }];
                                return false;
                                break;
                              }
                            }
                            if (_errs115 === errors) {
                              if (data60.address !== void 0) {
                                let data61 = data60.address;
                                const _errs116 = errors;
                                const _errs117 = errors;
                                if (errors === _errs117) {
                                  if (typeof data61 === "string") {
                                    if (!pattern4.test(data61)) {
                                      validate25.errors = [{ instancePath: instancePath + "/account/address", schemaPath: "#/components/schemas/Base58/pattern", keyword: "pattern", params: { pattern: "^[1-9A-HJ-NP-Za-km-z]{32,44}$" }, message: 'must match pattern "^[1-9A-HJ-NP-Za-km-z]{32,44}$"' }];
                                      return false;
                                    }
                                  } else {
                                    validate25.errors = [{ instancePath: instancePath + "/account/address", schemaPath: "#/components/schemas/Base58/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                    return false;
                                  }
                                }
                                var valid48 = _errs116 === errors;
                              } else {
                                var valid48 = true;
                              }
                              if (valid48) {
                                if (data60.program !== void 0) {
                                  let data62 = data60.program;
                                  const _errs119 = errors;
                                  if (typeof data62 !== "string") {
                                    validate25.errors = [{ instancePath: instancePath + "/account/program", schemaPath: "#/properties/account/properties/program/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                    return false;
                                  }
                                  if (!(data62 === "spl_token" || data62 === "token_2022")) {
                                    validate25.errors = [{ instancePath: instancePath + "/account/program", schemaPath: "#/properties/account/properties/program/enum", keyword: "enum", params: { allowedValues: schema42.properties.account.properties.program.enum }, message: "must be equal to one of the allowed values" }];
                                    return false;
                                  }
                                  var valid48 = _errs119 === errors;
                                } else {
                                  var valid48 = true;
                                }
                                if (valid48) {
                                  if (data60.balanceBaseUnits !== void 0) {
                                    let data63 = data60.balanceBaseUnits;
                                    const _errs121 = errors;
                                    const _errs122 = errors;
                                    if (errors === _errs122) {
                                      if (typeof data63 === "string") {
                                        if (!pattern9.test(data63)) {
                                          validate25.errors = [{ instancePath: instancePath + "/account/balanceBaseUnits", schemaPath: "#/components/schemas/IntegerString/pattern", keyword: "pattern", params: { pattern: "^[0-9]+$" }, message: 'must match pattern "^[0-9]+$"' }];
                                          return false;
                                        }
                                      } else {
                                        validate25.errors = [{ instancePath: instancePath + "/account/balanceBaseUnits", schemaPath: "#/components/schemas/IntegerString/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                        return false;
                                      }
                                    }
                                    var valid48 = _errs121 === errors;
                                  } else {
                                    var valid48 = true;
                                  }
                                  if (valid48) {
                                    if (data60.rentLamports !== void 0) {
                                      let data64 = data60.rentLamports;
                                      const _errs124 = errors;
                                      const _errs125 = errors;
                                      if (errors === _errs125) {
                                        if (typeof data64 === "string") {
                                          if (!pattern9.test(data64)) {
                                            validate25.errors = [{ instancePath: instancePath + "/account/rentLamports", schemaPath: "#/components/schemas/IntegerString/pattern", keyword: "pattern", params: { pattern: "^[0-9]+$" }, message: 'must match pattern "^[0-9]+$"' }];
                                            return false;
                                          }
                                        } else {
                                          validate25.errors = [{ instancePath: instancePath + "/account/rentLamports", schemaPath: "#/components/schemas/IntegerString/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                          return false;
                                        }
                                      }
                                      var valid48 = _errs124 === errors;
                                    } else {
                                      var valid48 = true;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        } else {
                          validate25.errors = [{ instancePath: instancePath + "/account", schemaPath: "#/properties/account/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                          return false;
                        }
                      }
                      var valid44 = _errs113 === errors;
                    } else {
                      var valid44 = true;
                    }
                    if (valid44) {
                      if (data.classification !== void 0) {
                        let data65 = data.classification;
                        const _errs127 = errors;
                        if (errors === _errs127) {
                          if (data65 && typeof data65 == "object" && !Array.isArray(data65)) {
                            let missing13;
                            if (data65.disposition === void 0 && (missing13 = "disposition") || data65.confidence === void 0 && (missing13 = "confidence") || data65.reviewRequired === void 0 && (missing13 = "reviewRequired") || data65.reasons === void 0 && (missing13 = "reasons") || data65.protections === void 0 && (missing13 = "protections")) {
                              validate25.errors = [{ instancePath: instancePath + "/classification", schemaPath: "#/properties/classification/required", keyword: "required", params: { missingProperty: missing13 }, message: "must have required property '" + missing13 + "'" }];
                              return false;
                            } else {
                              if (data65.disposition !== void 0) {
                                let data66 = data65.disposition;
                                const _errs129 = errors;
                                if (typeof data66 !== "string") {
                                  validate25.errors = [{ instancePath: instancePath + "/classification/disposition", schemaPath: "#/properties/classification/properties/disposition/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                  return false;
                                }
                                if (!(data66 === "closeable_empty" || data66 === "withdrawable" || data66 === "protected" || data66 === "review_only" || data66 === "no_op")) {
                                  validate25.errors = [{ instancePath: instancePath + "/classification/disposition", schemaPath: "#/properties/classification/properties/disposition/enum", keyword: "enum", params: { allowedValues: schema42.properties.classification.properties.disposition.enum }, message: "must be equal to one of the allowed values" }];
                                  return false;
                                }
                                var valid52 = _errs129 === errors;
                              } else {
                                var valid52 = true;
                              }
                              if (valid52) {
                                if (data65.confidence !== void 0) {
                                  let data67 = data65.confidence;
                                  const _errs131 = errors;
                                  if (typeof data67 !== "string") {
                                    validate25.errors = [{ instancePath: instancePath + "/classification/confidence", schemaPath: "#/properties/classification/properties/confidence/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                    return false;
                                  }
                                  if (!(data67 === "known" || data67 === "high" || data67 === "low")) {
                                    validate25.errors = [{ instancePath: instancePath + "/classification/confidence", schemaPath: "#/properties/classification/properties/confidence/enum", keyword: "enum", params: { allowedValues: schema42.properties.classification.properties.confidence.enum }, message: "must be equal to one of the allowed values" }];
                                    return false;
                                  }
                                  var valid52 = _errs131 === errors;
                                } else {
                                  var valid52 = true;
                                }
                                if (valid52) {
                                  if (data65.reviewRequired !== void 0) {
                                    const _errs133 = errors;
                                    if (typeof data65.reviewRequired !== "boolean") {
                                      validate25.errors = [{ instancePath: instancePath + "/classification/reviewRequired", schemaPath: "#/properties/classification/properties/reviewRequired/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }];
                                      return false;
                                    }
                                    var valid52 = _errs133 === errors;
                                  } else {
                                    var valid52 = true;
                                  }
                                  if (valid52) {
                                    if (data65.reasons !== void 0) {
                                      let data69 = data65.reasons;
                                      const _errs135 = errors;
                                      if (errors === _errs135) {
                                        if (Array.isArray(data69)) {
                                          var valid53 = true;
                                          const len3 = data69.length;
                                          for (let i3 = 0; i3 < len3; i3++) {
                                            let data70 = data69[i3];
                                            const _errs137 = errors;
                                            if (typeof data70 !== "string") {
                                              validate25.errors = [{ instancePath: instancePath + "/classification/reasons/" + i3, schemaPath: "#/properties/classification/properties/reasons/items/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                              return false;
                                            }
                                            if (!(data70 === "zero_balance" || data70 === "priced_dust_within_policy" || data70 === "sell_not_supported_in_preview" || data70 === "above_dust_threshold" || data70 === "above_net_rent" || data70 === "frozen" || data70 === "collectible" || data70 === "lp_or_position_shaped" || data70 === "receipt_token_policy" || data70 === "dangerous_token_2022_extension" || data70 === "account_missing" || data70 === "unsupported_account" || data70 === "positive_wsol" || data70 === "unpriced" || data70 === "completed_no_sell_route" || data70 === "unsupported_signer" || data70 === "non_positive_net" || data70 === "excess_above_rent_exempt_minimum")) {
                                              validate25.errors = [{ instancePath: instancePath + "/classification/reasons/" + i3, schemaPath: "#/properties/classification/properties/reasons/items/enum", keyword: "enum", params: { allowedValues: schema42.properties.classification.properties.reasons.items.enum }, message: "must be equal to one of the allowed values" }];
                                              return false;
                                            }
                                            var valid53 = _errs137 === errors;
                                            if (!valid53) {
                                              break;
                                            }
                                          }
                                        } else {
                                          validate25.errors = [{ instancePath: instancePath + "/classification/reasons", schemaPath: "#/properties/classification/properties/reasons/type", keyword: "type", params: { type: "array" }, message: "must be array" }];
                                          return false;
                                        }
                                      }
                                      var valid52 = _errs135 === errors;
                                    } else {
                                      var valid52 = true;
                                    }
                                    if (valid52) {
                                      if (data65.protections !== void 0) {
                                        let data71 = data65.protections;
                                        const _errs139 = errors;
                                        if (errors === _errs139) {
                                          if (Array.isArray(data71)) {
                                            var valid54 = true;
                                            const len4 = data71.length;
                                            for (let i4 = 0; i4 < len4; i4++) {
                                              let data72 = data71[i4];
                                              const _errs141 = errors;
                                              if (typeof data72 !== "string") {
                                                validate25.errors = [{ instancePath: instancePath + "/classification/protections/" + i4, schemaPath: "#/properties/classification/properties/protections/items/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                                return false;
                                              }
                                              if (!(data72 === "frozen" || data72 === "collectible" || data72 === "lp_position" || data72 === "receipt_token" || data72 === "token_2022_extension" || data72 === "unpriced" || data72 === "account_state")) {
                                                validate25.errors = [{ instancePath: instancePath + "/classification/protections/" + i4, schemaPath: "#/properties/classification/properties/protections/items/enum", keyword: "enum", params: { allowedValues: schema42.properties.classification.properties.protections.items.enum }, message: "must be equal to one of the allowed values" }];
                                                return false;
                                              }
                                              var valid54 = _errs141 === errors;
                                              if (!valid54) {
                                                break;
                                              }
                                            }
                                          } else {
                                            validate25.errors = [{ instancePath: instancePath + "/classification/protections", schemaPath: "#/properties/classification/properties/protections/type", keyword: "type", params: { type: "array" }, message: "must be array" }];
                                            return false;
                                          }
                                        }
                                        var valid52 = _errs139 === errors;
                                      } else {
                                        var valid52 = true;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          } else {
                            validate25.errors = [{ instancePath: instancePath + "/classification", schemaPath: "#/properties/classification/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                            return false;
                          }
                        }
                        var valid44 = _errs127 === errors;
                      } else {
                        var valid44 = true;
                      }
                      if (valid44) {
                        if (data.market !== void 0) {
                          let data73 = data.market;
                          const _errs143 = errors;
                          const _errs145 = errors;
                          const _errs146 = errors;
                          let valid56 = true;
                          const _errs147 = errors;
                          if (data73 && typeof data73 == "object" && !Array.isArray(data73)) {
                            if (data73.quoteStatus !== void 0) {
                              if ("unavailable" !== data73.quoteStatus) {
                                const err23 = {};
                                if (vErrors === null) {
                                  vErrors = [err23];
                                } else {
                                  vErrors.push(err23);
                                }
                                errors++;
                              }
                            }
                          }
                          var _valid7 = _errs147 === errors;
                          errors = _errs146;
                          if (vErrors !== null) {
                            if (_errs146) {
                              vErrors.length = _errs146;
                            } else {
                              vErrors = null;
                            }
                          }
                          let ifClause1;
                          if (_valid7) {
                            const _errs149 = errors;
                            if (data73 && typeof data73 == "object" && !Array.isArray(data73)) {
                              if (data73.sellRouteAvailable !== void 0) {
                                const _errs150 = errors;
                                if (null !== data73.sellRouteAvailable) {
                                  validate25.errors = [{ instancePath: instancePath + "/market/sellRouteAvailable", schemaPath: "#/properties/market/allOf/0/then/properties/sellRouteAvailable/const", keyword: "const", params: { allowedValue: schema42.properties.market.allOf[0].then.properties.sellRouteAvailable.const }, message: "must be equal to constant" }];
                                  return false;
                                }
                                var valid58 = _errs150 === errors;
                              } else {
                                var valid58 = true;
                              }
                              if (valid58) {
                                if (data73.executableQuoteUsd !== void 0) {
                                  const _errs151 = errors;
                                  if (null !== data73.executableQuoteUsd) {
                                    validate25.errors = [{ instancePath: instancePath + "/market/executableQuoteUsd", schemaPath: "#/properties/market/allOf/0/then/properties/executableQuoteUsd/const", keyword: "const", params: { allowedValue: schema42.properties.market.allOf[0].then.properties.executableQuoteUsd.const }, message: "must be equal to constant" }];
                                    return false;
                                  }
                                  var valid58 = _errs151 === errors;
                                } else {
                                  var valid58 = true;
                                }
                                if (valid58) {
                                  if (data73.quotedAt !== void 0) {
                                    const _errs152 = errors;
                                    if (null !== data73.quotedAt) {
                                      validate25.errors = [{ instancePath: instancePath + "/market/quotedAt", schemaPath: "#/properties/market/allOf/0/then/properties/quotedAt/const", keyword: "const", params: { allowedValue: schema42.properties.market.allOf[0].then.properties.quotedAt.const }, message: "must be equal to constant" }];
                                      return false;
                                    }
                                    var valid58 = _errs152 === errors;
                                  } else {
                                    var valid58 = true;
                                  }
                                }
                              }
                            }
                            var _valid7 = _errs149 === errors;
                            valid56 = _valid7;
                            if (valid56) {
                              var props7 = {};
                              props7.sellRouteAvailable = true;
                              props7.executableQuoteUsd = true;
                              props7.quotedAt = true;
                              props7.quoteStatus = true;
                            }
                            ifClause1 = "then";
                          } else {
                            const _errs153 = errors;
                            if (data73 && typeof data73 == "object" && !Array.isArray(data73)) {
                              if (data73.sellRouteAvailable !== void 0) {
                                const _errs154 = errors;
                                if (typeof data73.sellRouteAvailable !== "boolean") {
                                  validate25.errors = [{ instancePath: instancePath + "/market/sellRouteAvailable", schemaPath: "#/properties/market/allOf/0/else/properties/sellRouteAvailable/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }];
                                  return false;
                                }
                                var valid59 = _errs154 === errors;
                              } else {
                                var valid59 = true;
                              }
                              if (valid59) {
                                if (data73.quotedAt !== void 0) {
                                  let data79 = data73.quotedAt;
                                  const _errs156 = errors;
                                  if (errors === _errs156) {
                                    if (errors === _errs156) {
                                      if (typeof data79 === "string") {
                                        if (!formats0.validate.test(data79)) {
                                          validate25.errors = [{ instancePath: instancePath + "/market/quotedAt", schemaPath: "#/properties/market/allOf/0/else/properties/quotedAt/format", keyword: "format", params: { format: "date-time" }, message: 'must match format "date-time"' }];
                                          return false;
                                        }
                                      } else {
                                        validate25.errors = [{ instancePath: instancePath + "/market/quotedAt", schemaPath: "#/properties/market/allOf/0/else/properties/quotedAt/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                        return false;
                                      }
                                    }
                                  }
                                  var valid59 = _errs156 === errors;
                                } else {
                                  var valid59 = true;
                                }
                              }
                            }
                            var _valid7 = _errs153 === errors;
                            valid56 = _valid7;
                            if (valid56) {
                              if (props7 !== true) {
                                props7 = props7 || {};
                                props7.sellRouteAvailable = true;
                                props7.quotedAt = true;
                              }
                            }
                            ifClause1 = "else";
                          }
                          if (!valid56) {
                            const err24 = { instancePath: instancePath + "/market", schemaPath: "#/properties/market/allOf/0/if", keyword: "if", params: { failingKeyword: ifClause1 }, message: 'must match "' + ifClause1 + '" schema' };
                            if (vErrors === null) {
                              vErrors = [err24];
                            } else {
                              vErrors.push(err24);
                            }
                            errors++;
                            validate25.errors = vErrors;
                            return false;
                          }
                          var valid55 = _errs145 === errors;
                          if (valid55) {
                            const _errs158 = errors;
                            const _errs159 = errors;
                            let valid60 = true;
                            const _errs160 = errors;
                            if (data73 && typeof data73 == "object" && !Array.isArray(data73)) {
                              if (data73.sellRouteAvailable !== void 0) {
                                if (false !== data73.sellRouteAvailable) {
                                  const err25 = {};
                                  if (vErrors === null) {
                                    vErrors = [err25];
                                  } else {
                                    vErrors.push(err25);
                                  }
                                  errors++;
                                }
                              }
                            }
                            var _valid8 = _errs160 === errors;
                            errors = _errs159;
                            if (vErrors !== null) {
                              if (_errs159) {
                                vErrors.length = _errs159;
                              } else {
                                vErrors = null;
                              }
                            }
                            if (_valid8) {
                              const _errs162 = errors;
                              if (data73 && typeof data73 == "object" && !Array.isArray(data73)) {
                                if (data73.executableQuoteUsd !== void 0) {
                                  if (null !== data73.executableQuoteUsd) {
                                    validate25.errors = [{ instancePath: instancePath + "/market/executableQuoteUsd", schemaPath: "#/properties/market/allOf/1/then/properties/executableQuoteUsd/const", keyword: "const", params: { allowedValue: schema42.properties.market.allOf[1].then.properties.executableQuoteUsd.const }, message: "must be equal to constant" }];
                                    return false;
                                  }
                                }
                              }
                              var _valid8 = _errs162 === errors;
                              valid60 = _valid8;
                              if (valid60) {
                                var props8 = {};
                                props8.executableQuoteUsd = true;
                                props8.sellRouteAvailable = true;
                              }
                            }
                            if (!valid60) {
                              const err26 = { instancePath: instancePath + "/market", schemaPath: "#/properties/market/allOf/1/if", keyword: "if", params: { failingKeyword: "then" }, message: 'must match "then" schema' };
                              if (vErrors === null) {
                                vErrors = [err26];
                              } else {
                                vErrors.push(err26);
                              }
                              errors++;
                              validate25.errors = vErrors;
                              return false;
                            }
                            var valid55 = _errs158 === errors;
                            if (valid55) {
                              if (props7 !== true && props8 !== void 0) {
                                if (props8 === true) {
                                  props7 = true;
                                } else {
                                  props7 = props7 || {};
                                  Object.assign(props7, props8);
                                }
                              }
                            }
                          }
                          if (errors === _errs143) {
                            if (data73 && typeof data73 == "object" && !Array.isArray(data73)) {
                              let missing14;
                              if (data73.quoteStatus === void 0 && (missing14 = "quoteStatus") || data73.sellRouteAvailable === void 0 && (missing14 = "sellRouteAvailable") || data73.executableQuoteUsd === void 0 && (missing14 = "executableQuoteUsd") || data73.quotedAt === void 0 && (missing14 = "quotedAt")) {
                                validate25.errors = [{ instancePath: instancePath + "/market", schemaPath: "#/properties/market/required", keyword: "required", params: { missingProperty: missing14 }, message: "must have required property '" + missing14 + "'" }];
                                return false;
                              } else {
                                if (props7 !== true) {
                                  props7 = props7 || {};
                                  props7.quoteStatus = true;
                                  props7.sellRouteAvailable = true;
                                  props7.executableQuoteUsd = true;
                                  props7.quotedAt = true;
                                }
                                if (data73.quoteStatus !== void 0) {
                                  let data82 = data73.quoteStatus;
                                  const _errs164 = errors;
                                  if (typeof data82 !== "string") {
                                    validate25.errors = [{ instancePath: instancePath + "/market/quoteStatus", schemaPath: "#/properties/market/properties/quoteStatus/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                    return false;
                                  }
                                  if (!(data82 === "complete" || data82 === "unavailable")) {
                                    validate25.errors = [{ instancePath: instancePath + "/market/quoteStatus", schemaPath: "#/properties/market/properties/quoteStatus/enum", keyword: "enum", params: { allowedValues: schema42.properties.market.properties.quoteStatus.enum }, message: "must be equal to one of the allowed values" }];
                                    return false;
                                  }
                                  var valid63 = _errs164 === errors;
                                } else {
                                  var valid63 = true;
                                }
                                if (valid63) {
                                  if (data73.sellRouteAvailable !== void 0) {
                                    let data83 = data73.sellRouteAvailable;
                                    const _errs166 = errors;
                                    if (typeof data83 !== "boolean" && data83 !== null) {
                                      validate25.errors = [{ instancePath: instancePath + "/market/sellRouteAvailable", schemaPath: "#/properties/market/properties/sellRouteAvailable/type", keyword: "type", params: { type: schema42.properties.market.properties.sellRouteAvailable.type }, message: "must be boolean,null" }];
                                      return false;
                                    }
                                    var valid63 = _errs166 === errors;
                                  } else {
                                    var valid63 = true;
                                  }
                                  if (valid63) {
                                    if (data73.executableQuoteUsd !== void 0) {
                                      let data84 = data73.executableQuoteUsd;
                                      const _errs168 = errors;
                                      const _errs169 = errors;
                                      let valid64 = false;
                                      let passing0 = null;
                                      const _errs170 = errors;
                                      if (data84 !== null) {
                                        const err27 = { instancePath: instancePath + "/market/executableQuoteUsd", schemaPath: "#/properties/market/properties/executableQuoteUsd/oneOf/0/type", keyword: "type", params: { type: "null" }, message: "must be null" };
                                        if (vErrors === null) {
                                          vErrors = [err27];
                                        } else {
                                          vErrors.push(err27);
                                        }
                                        errors++;
                                      }
                                      var _valid9 = _errs170 === errors;
                                      if (_valid9) {
                                        valid64 = true;
                                        passing0 = 0;
                                      }
                                      const _errs172 = errors;
                                      const _errs173 = errors;
                                      if (errors === _errs173) {
                                        if (typeof data84 === "string") {
                                          if (!pattern17.test(data84)) {
                                            const err28 = { instancePath: instancePath + "/market/executableQuoteUsd", schemaPath: "#/components/schemas/DecimalUsd/pattern", keyword: "pattern", params: { pattern: "^[0-9]+\\.[0-9]{6}$" }, message: 'must match pattern "^[0-9]+\\.[0-9]{6}$"' };
                                            if (vErrors === null) {
                                              vErrors = [err28];
                                            } else {
                                              vErrors.push(err28);
                                            }
                                            errors++;
                                          }
                                        } else {
                                          const err29 = { instancePath: instancePath + "/market/executableQuoteUsd", schemaPath: "#/components/schemas/DecimalUsd/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                                          if (vErrors === null) {
                                            vErrors = [err29];
                                          } else {
                                            vErrors.push(err29);
                                          }
                                          errors++;
                                        }
                                      }
                                      var _valid9 = _errs172 === errors;
                                      if (_valid9 && valid64) {
                                        valid64 = false;
                                        passing0 = [passing0, 1];
                                      } else {
                                        if (_valid9) {
                                          valid64 = true;
                                          passing0 = 1;
                                        }
                                      }
                                      if (!valid64) {
                                        const err30 = { instancePath: instancePath + "/market/executableQuoteUsd", schemaPath: "#/properties/market/properties/executableQuoteUsd/oneOf", keyword: "oneOf", params: { passingSchemas: passing0 }, message: "must match exactly one schema in oneOf" };
                                        if (vErrors === null) {
                                          vErrors = [err30];
                                        } else {
                                          vErrors.push(err30);
                                        }
                                        errors++;
                                        validate25.errors = vErrors;
                                        return false;
                                      } else {
                                        errors = _errs169;
                                        if (vErrors !== null) {
                                          if (_errs169) {
                                            vErrors.length = _errs169;
                                          } else {
                                            vErrors = null;
                                          }
                                        }
                                      }
                                      var valid63 = _errs168 === errors;
                                    } else {
                                      var valid63 = true;
                                    }
                                    if (valid63) {
                                      if (data73.quotedAt !== void 0) {
                                        let data85 = data73.quotedAt;
                                        const _errs175 = errors;
                                        if (typeof data85 !== "string" && data85 !== null) {
                                          validate25.errors = [{ instancePath: instancePath + "/market/quotedAt", schemaPath: "#/properties/market/properties/quotedAt/type", keyword: "type", params: { type: schema42.properties.market.properties.quotedAt.type }, message: "must be string,null" }];
                                          return false;
                                        }
                                        if (errors === _errs175) {
                                          if (errors === _errs175) {
                                            if (typeof data85 === "string") {
                                              if (!formats0.validate.test(data85)) {
                                                validate25.errors = [{ instancePath: instancePath + "/market/quotedAt", schemaPath: "#/properties/market/properties/quotedAt/format", keyword: "format", params: { format: "date-time" }, message: 'must match format "date-time"' }];
                                                return false;
                                              }
                                            }
                                          }
                                        }
                                        var valid63 = _errs175 === errors;
                                      } else {
                                        var valid63 = true;
                                      }
                                    }
                                  }
                                }
                              }
                            } else {
                              validate25.errors = [{ instancePath: instancePath + "/market", schemaPath: "#/properties/market/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                              return false;
                            }
                          }
                          var valid44 = _errs143 === errors;
                        } else {
                          var valid44 = true;
                        }
                        if (valid44) {
                          if (data.opportunity !== void 0) {
                            let data86 = data.opportunity;
                            const _errs177 = errors;
                            const _errs178 = errors;
                            let valid66 = false;
                            let passing1 = null;
                            const _errs179 = errors;
                            if (!validate26(data86, { instancePath: instancePath + "/opportunity", parentData: data, parentDataProperty: "opportunity", rootData, dynamicAnchors })) {
                              vErrors = vErrors === null ? validate26.errors : vErrors.concat(validate26.errors);
                              errors = vErrors.length;
                            }
                            var _valid10 = _errs179 === errors;
                            if (_valid10) {
                              valid66 = true;
                              passing1 = 0;
                              var props9 = {};
                              props9.action = true;
                              props9.destructive = true;
                              props9.executionSupported = true;
                              props9.consent = true;
                              props9.reviewedBalanceBaseUnits = true;
                              props9.valueComponents = true;
                              props9.costs = true;
                              props9.estimatedNetValueUsd = true;
                              props9.estimated = true;
                            }
                            const _errs180 = errors;
                            if (!validate39(data86, { instancePath: instancePath + "/opportunity", parentData: data, parentDataProperty: "opportunity", rootData, dynamicAnchors })) {
                              vErrors = vErrors === null ? validate39.errors : vErrors.concat(validate39.errors);
                              errors = vErrors.length;
                            }
                            var _valid10 = _errs180 === errors;
                            if (_valid10 && valid66) {
                              valid66 = false;
                              passing1 = [passing1, 1];
                            } else {
                              if (_valid10) {
                                valid66 = true;
                                passing1 = 1;
                                if (props9 !== true) {
                                  props9 = props9 || {};
                                  props9.action = true;
                                  props9.destructive = true;
                                  props9.executionSupported = true;
                                  props9.valueComponents = true;
                                  props9.costs = true;
                                  props9.estimatedNetValueUsd = true;
                                  props9.estimated = true;
                                }
                              }
                              const _errs181 = errors;
                              const _errs182 = errors;
                              if (errors === _errs182) {
                                if (data86 && typeof data86 == "object" && !Array.isArray(data86)) {
                                  let missing15;
                                  if (data86.action === void 0 && (missing15 = "action") || data86.destructive === void 0 && (missing15 = "destructive") || data86.executionSupported === void 0 && (missing15 = "executionSupported") || data86.valueComponents === void 0 && (missing15 = "valueComponents") || data86.estimated === void 0 && (missing15 = "estimated")) {
                                    const err31 = { instancePath: instancePath + "/opportunity", schemaPath: "#/components/schemas/NoActionOpportunity/required", keyword: "required", params: { missingProperty: missing15 }, message: "must have required property '" + missing15 + "'" };
                                    if (vErrors === null) {
                                      vErrors = [err31];
                                    } else {
                                      vErrors.push(err31);
                                    }
                                    errors++;
                                  } else {
                                    if (data86.action !== void 0) {
                                      let data87 = data86.action;
                                      const _errs184 = errors;
                                      if (typeof data87 !== "string") {
                                        const err32 = { instancePath: instancePath + "/opportunity/action", schemaPath: "#/components/schemas/NoActionOpportunity/properties/action/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                                        if (vErrors === null) {
                                          vErrors = [err32];
                                        } else {
                                          vErrors.push(err32);
                                        }
                                        errors++;
                                      }
                                      if (!(data87 === "none")) {
                                        const err33 = { instancePath: instancePath + "/opportunity/action", schemaPath: "#/components/schemas/NoActionOpportunity/properties/action/enum", keyword: "enum", params: { allowedValues: schema57.properties.action.enum }, message: "must be equal to one of the allowed values" };
                                        if (vErrors === null) {
                                          vErrors = [err33];
                                        } else {
                                          vErrors.push(err33);
                                        }
                                        errors++;
                                      }
                                      var valid68 = _errs184 === errors;
                                    } else {
                                      var valid68 = true;
                                    }
                                    if (valid68) {
                                      if (data86.destructive !== void 0) {
                                        let data88 = data86.destructive;
                                        const _errs186 = errors;
                                        if (typeof data88 !== "boolean") {
                                          const err34 = { instancePath: instancePath + "/opportunity/destructive", schemaPath: "#/components/schemas/NoActionOpportunity/properties/destructive/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" };
                                          if (vErrors === null) {
                                            vErrors = [err34];
                                          } else {
                                            vErrors.push(err34);
                                          }
                                          errors++;
                                        }
                                        if (!(data88 === false)) {
                                          const err35 = { instancePath: instancePath + "/opportunity/destructive", schemaPath: "#/components/schemas/NoActionOpportunity/properties/destructive/enum", keyword: "enum", params: { allowedValues: schema57.properties.destructive.enum }, message: "must be equal to one of the allowed values" };
                                          if (vErrors === null) {
                                            vErrors = [err35];
                                          } else {
                                            vErrors.push(err35);
                                          }
                                          errors++;
                                        }
                                        var valid68 = _errs186 === errors;
                                      } else {
                                        var valid68 = true;
                                      }
                                      if (valid68) {
                                        if (data86.executionSupported !== void 0) {
                                          let data89 = data86.executionSupported;
                                          const _errs188 = errors;
                                          if (typeof data89 !== "boolean") {
                                            const err36 = { instancePath: instancePath + "/opportunity/executionSupported", schemaPath: "#/components/schemas/NoActionOpportunity/properties/executionSupported/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" };
                                            if (vErrors === null) {
                                              vErrors = [err36];
                                            } else {
                                              vErrors.push(err36);
                                            }
                                            errors++;
                                          }
                                          if (!(data89 === false)) {
                                            const err37 = { instancePath: instancePath + "/opportunity/executionSupported", schemaPath: "#/components/schemas/NoActionOpportunity/properties/executionSupported/enum", keyword: "enum", params: { allowedValues: schema57.properties.executionSupported.enum }, message: "must be equal to one of the allowed values" };
                                            if (vErrors === null) {
                                              vErrors = [err37];
                                            } else {
                                              vErrors.push(err37);
                                            }
                                            errors++;
                                          }
                                          var valid68 = _errs188 === errors;
                                        } else {
                                          var valid68 = true;
                                        }
                                        if (valid68) {
                                          if (data86.valueComponents !== void 0) {
                                            let data90 = data86.valueComponents;
                                            const _errs190 = errors;
                                            if (errors === _errs190) {
                                              if (Array.isArray(data90)) {
                                                if (data90.length > 0) {
                                                  const err38 = { instancePath: instancePath + "/opportunity/valueComponents", schemaPath: "#/components/schemas/NoActionOpportunity/properties/valueComponents/maxItems", keyword: "maxItems", params: { limit: 0 }, message: "must NOT have more than 0 items" };
                                                  if (vErrors === null) {
                                                    vErrors = [err38];
                                                  } else {
                                                    vErrors.push(err38);
                                                  }
                                                  errors++;
                                                }
                                              } else {
                                                const err39 = { instancePath: instancePath + "/opportunity/valueComponents", schemaPath: "#/components/schemas/NoActionOpportunity/properties/valueComponents/type", keyword: "type", params: { type: "array" }, message: "must be array" };
                                                if (vErrors === null) {
                                                  vErrors = [err39];
                                                } else {
                                                  vErrors.push(err39);
                                                }
                                                errors++;
                                              }
                                            }
                                            var valid68 = _errs190 === errors;
                                          } else {
                                            var valid68 = true;
                                          }
                                          if (valid68) {
                                            if (data86.estimated !== void 0) {
                                              let data91 = data86.estimated;
                                              const _errs192 = errors;
                                              if (typeof data91 !== "boolean") {
                                                const err40 = { instancePath: instancePath + "/opportunity/estimated", schemaPath: "#/components/schemas/NoActionOpportunity/properties/estimated/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" };
                                                if (vErrors === null) {
                                                  vErrors = [err40];
                                                } else {
                                                  vErrors.push(err40);
                                                }
                                                errors++;
                                              }
                                              if (!(data91 === true)) {
                                                const err41 = { instancePath: instancePath + "/opportunity/estimated", schemaPath: "#/components/schemas/NoActionOpportunity/properties/estimated/enum", keyword: "enum", params: { allowedValues: schema57.properties.estimated.enum }, message: "must be equal to one of the allowed values" };
                                                if (vErrors === null) {
                                                  vErrors = [err41];
                                                } else {
                                                  vErrors.push(err41);
                                                }
                                                errors++;
                                              }
                                              var valid68 = _errs192 === errors;
                                            } else {
                                              var valid68 = true;
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                } else {
                                  const err42 = { instancePath: instancePath + "/opportunity", schemaPath: "#/components/schemas/NoActionOpportunity/type", keyword: "type", params: { type: "object" }, message: "must be object" };
                                  if (vErrors === null) {
                                    vErrors = [err42];
                                  } else {
                                    vErrors.push(err42);
                                  }
                                  errors++;
                                }
                              }
                              var _valid10 = _errs181 === errors;
                              if (_valid10 && valid66) {
                                valid66 = false;
                                passing1 = [passing1, 2];
                              } else {
                                if (_valid10) {
                                  valid66 = true;
                                  passing1 = 2;
                                  if (props9 !== true) {
                                    props9 = props9 || {};
                                    props9.action = true;
                                    props9.destructive = true;
                                    props9.executionSupported = true;
                                    props9.valueComponents = true;
                                    props9.estimated = true;
                                  }
                                }
                              }
                            }
                            if (!valid66) {
                              const err43 = { instancePath: instancePath + "/opportunity", schemaPath: "#/properties/opportunity/oneOf", keyword: "oneOf", params: { passingSchemas: passing1 }, message: "must match exactly one schema in oneOf" };
                              if (vErrors === null) {
                                vErrors = [err43];
                              } else {
                                vErrors.push(err43);
                              }
                              errors++;
                              validate25.errors = vErrors;
                              return false;
                            } else {
                              errors = _errs178;
                              if (vErrors !== null) {
                                if (_errs178) {
                                  vErrors.length = _errs178;
                                } else {
                                  vErrors = null;
                                }
                              }
                            }
                            var valid44 = _errs177 === errors;
                          } else {
                            var valid44 = true;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    } else {
      validate25.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate25.errors = vErrors;
  evaluated0.props = props0;
  return errors === 0;
}
validate25.evaluated = { "dynamicProps": true, "dynamicItems": false };
var schema59 = { "type": "object", "description": "Preview: `mode` is always `metered_preview`. `chargedUsd` is the list\nprice recorded for this complete response and is invoiceable by manual\ninvoice only. `balanceRemainingUsd` is always null because no prepaid\nbalance exists in the preview.\n", "required": ["mode", "currency", "billableUnits", "baseChargeUsd", "addOnChargeUsd", "chargedUsd", "balanceRemainingUsd"], "properties": { "mode": { "type": "string", "enum": ["metered_preview"] }, "currency": { "type": "string", "enum": ["USD"] }, "billableUnits": { "type": "integer", "minimum": 1 }, "baseChargeUsd": { "$ref": "#/components/schemas/DecimalUsd" }, "addOnChargeUsd": { "$ref": "#/components/schemas/DecimalUsd" }, "chargedUsd": { "$ref": "#/components/schemas/DecimalUsd" }, "balanceRemainingUsd": { "type": "null" } } };
function validate43(data, { instancePath = "", parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {}) {
  let vErrors = null;
  let errors = 0;
  const evaluated0 = validate43.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = void 0;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = void 0;
  }
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.mode === void 0 && (missing0 = "mode") || data.currency === void 0 && (missing0 = "currency") || data.billableUnits === void 0 && (missing0 = "billableUnits") || data.baseChargeUsd === void 0 && (missing0 = "baseChargeUsd") || data.addOnChargeUsd === void 0 && (missing0 = "addOnChargeUsd") || data.chargedUsd === void 0 && (missing0 = "chargedUsd") || data.balanceRemainingUsd === void 0 && (missing0 = "balanceRemainingUsd")) {
        validate43.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        if (data.mode !== void 0) {
          let data0 = data.mode;
          const _errs1 = errors;
          if (typeof data0 !== "string") {
            validate43.errors = [{ instancePath: instancePath + "/mode", schemaPath: "#/properties/mode/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
            return false;
          }
          if (!(data0 === "metered_preview")) {
            validate43.errors = [{ instancePath: instancePath + "/mode", schemaPath: "#/properties/mode/enum", keyword: "enum", params: { allowedValues: schema59.properties.mode.enum }, message: "must be equal to one of the allowed values" }];
            return false;
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.currency !== void 0) {
            let data1 = data.currency;
            const _errs3 = errors;
            if (typeof data1 !== "string") {
              validate43.errors = [{ instancePath: instancePath + "/currency", schemaPath: "#/properties/currency/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            if (!(data1 === "USD")) {
              validate43.errors = [{ instancePath: instancePath + "/currency", schemaPath: "#/properties/currency/enum", keyword: "enum", params: { allowedValues: schema59.properties.currency.enum }, message: "must be equal to one of the allowed values" }];
              return false;
            }
            var valid0 = _errs3 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.billableUnits !== void 0) {
              let data2 = data.billableUnits;
              const _errs5 = errors;
              if (!(typeof data2 == "number" && (!(data2 % 1) && !isNaN(data2)))) {
                validate43.errors = [{ instancePath: instancePath + "/billableUnits", schemaPath: "#/properties/billableUnits/type", keyword: "type", params: { type: "integer" }, message: "must be integer" }];
                return false;
              }
              if (errors === _errs5) {
                if (typeof data2 == "number") {
                  if (data2 < 1 || isNaN(data2)) {
                    validate43.errors = [{ instancePath: instancePath + "/billableUnits", schemaPath: "#/properties/billableUnits/minimum", keyword: "minimum", params: { comparison: ">=", limit: 1 }, message: "must be >= 1" }];
                    return false;
                  }
                }
              }
              var valid0 = _errs5 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.baseChargeUsd !== void 0) {
                let data3 = data.baseChargeUsd;
                const _errs7 = errors;
                const _errs8 = errors;
                if (errors === _errs8) {
                  if (typeof data3 === "string") {
                    if (!pattern17.test(data3)) {
                      validate43.errors = [{ instancePath: instancePath + "/baseChargeUsd", schemaPath: "#/components/schemas/DecimalUsd/pattern", keyword: "pattern", params: { pattern: "^[0-9]+\\.[0-9]{6}$" }, message: 'must match pattern "^[0-9]+\\.[0-9]{6}$"' }];
                      return false;
                    }
                  } else {
                    validate43.errors = [{ instancePath: instancePath + "/baseChargeUsd", schemaPath: "#/components/schemas/DecimalUsd/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                    return false;
                  }
                }
                var valid0 = _errs7 === errors;
              } else {
                var valid0 = true;
              }
              if (valid0) {
                if (data.addOnChargeUsd !== void 0) {
                  let data4 = data.addOnChargeUsd;
                  const _errs10 = errors;
                  const _errs11 = errors;
                  if (errors === _errs11) {
                    if (typeof data4 === "string") {
                      if (!pattern17.test(data4)) {
                        validate43.errors = [{ instancePath: instancePath + "/addOnChargeUsd", schemaPath: "#/components/schemas/DecimalUsd/pattern", keyword: "pattern", params: { pattern: "^[0-9]+\\.[0-9]{6}$" }, message: 'must match pattern "^[0-9]+\\.[0-9]{6}$"' }];
                        return false;
                      }
                    } else {
                      validate43.errors = [{ instancePath: instancePath + "/addOnChargeUsd", schemaPath: "#/components/schemas/DecimalUsd/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                      return false;
                    }
                  }
                  var valid0 = _errs10 === errors;
                } else {
                  var valid0 = true;
                }
                if (valid0) {
                  if (data.chargedUsd !== void 0) {
                    let data5 = data.chargedUsd;
                    const _errs13 = errors;
                    const _errs14 = errors;
                    if (errors === _errs14) {
                      if (typeof data5 === "string") {
                        if (!pattern17.test(data5)) {
                          validate43.errors = [{ instancePath: instancePath + "/chargedUsd", schemaPath: "#/components/schemas/DecimalUsd/pattern", keyword: "pattern", params: { pattern: "^[0-9]+\\.[0-9]{6}$" }, message: 'must match pattern "^[0-9]+\\.[0-9]{6}$"' }];
                          return false;
                        }
                      } else {
                        validate43.errors = [{ instancePath: instancePath + "/chargedUsd", schemaPath: "#/components/schemas/DecimalUsd/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                        return false;
                      }
                    }
                    var valid0 = _errs13 === errors;
                  } else {
                    var valid0 = true;
                  }
                  if (valid0) {
                    if (data.balanceRemainingUsd !== void 0) {
                      const _errs16 = errors;
                      if (data.balanceRemainingUsd !== null) {
                        validate43.errors = [{ instancePath: instancePath + "/balanceRemainingUsd", schemaPath: "#/properties/balanceRemainingUsd/type", keyword: "type", params: { type: "null" }, message: "must be null" }];
                        return false;
                      }
                      var valid0 = _errs16 === errors;
                    } else {
                      var valid0 = true;
                    }
                  }
                }
              }
            }
          }
        }
      }
    } else {
      validate43.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate43.errors = vErrors;
  return errors === 0;
}
validate43.evaluated = { "props": { "mode": true, "currency": true, "billableUnits": true, "baseChargeUsd": true, "addOnChargeUsd": true, "chargedUsd": true, "balanceRemainingUsd": true }, "dynamicProps": false, "dynamicItems": false };
function validate24(data, { instancePath = "", parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {}) {
  let vErrors = null;
  let errors = 0;
  const evaluated0 = validate24.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = void 0;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = void 0;
  }
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.requestId === void 0 && (missing0 = "requestId") || data.apiVersion === void 0 && (missing0 = "apiVersion") || data.rulesetVersion === void 0 && (missing0 = "rulesetVersion") || data.assetIntelligenceRulesetVersion === void 0 && (missing0 = "assetIntelligenceRulesetVersion") || data.analyzedAt === void 0 && (missing0 = "analyzedAt") || data.complete === void 0 && (missing0 = "complete") || data.data === void 0 && (missing0 = "data") || data.billing === void 0 && (missing0 = "billing")) {
        validate24.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        if (data.requestId !== void 0) {
          const _errs1 = errors;
          if (typeof data.requestId !== "string") {
            validate24.errors = [{ instancePath: instancePath + "/requestId", schemaPath: "#/properties/requestId/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
            return false;
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.apiVersion !== void 0) {
            let data1 = data.apiVersion;
            const _errs3 = errors;
            if (typeof data1 !== "string") {
              validate24.errors = [{ instancePath: instancePath + "/apiVersion", schemaPath: "#/properties/apiVersion/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            if (!(data1 === "v1-preview")) {
              validate24.errors = [{ instancePath: instancePath + "/apiVersion", schemaPath: "#/properties/apiVersion/enum", keyword: "enum", params: { allowedValues: schema35.properties.apiVersion.enum }, message: "must be equal to one of the allowed values" }];
              return false;
            }
            var valid0 = _errs3 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.rulesetVersion !== void 0) {
              const _errs5 = errors;
              if (typeof data.rulesetVersion !== "string") {
                validate24.errors = [{ instancePath: instancePath + "/rulesetVersion", schemaPath: "#/properties/rulesetVersion/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                return false;
              }
              var valid0 = _errs5 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.assetIntelligenceRulesetVersion !== void 0) {
                const _errs7 = errors;
                if (data.assetIntelligenceRulesetVersion !== null) {
                  validate24.errors = [{ instancePath: instancePath + "/assetIntelligenceRulesetVersion", schemaPath: "#/properties/assetIntelligenceRulesetVersion/type", keyword: "type", params: { type: "null" }, message: "must be null" }];
                  return false;
                }
                var valid0 = _errs7 === errors;
              } else {
                var valid0 = true;
              }
              if (valid0) {
                if (data.analyzedAt !== void 0) {
                  let data4 = data.analyzedAt;
                  const _errs9 = errors;
                  if (errors === _errs9) {
                    if (errors === _errs9) {
                      if (typeof data4 === "string") {
                        if (!formats0.validate.test(data4)) {
                          validate24.errors = [{ instancePath: instancePath + "/analyzedAt", schemaPath: "#/properties/analyzedAt/format", keyword: "format", params: { format: "date-time" }, message: 'must match format "date-time"' }];
                          return false;
                        }
                      } else {
                        validate24.errors = [{ instancePath: instancePath + "/analyzedAt", schemaPath: "#/properties/analyzedAt/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                        return false;
                      }
                    }
                  }
                  var valid0 = _errs9 === errors;
                } else {
                  var valid0 = true;
                }
                if (valid0) {
                  if (data.complete !== void 0) {
                    let data5 = data.complete;
                    const _errs11 = errors;
                    if (typeof data5 !== "boolean") {
                      validate24.errors = [{ instancePath: instancePath + "/complete", schemaPath: "#/properties/complete/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }];
                      return false;
                    }
                    if (!(data5 === true)) {
                      validate24.errors = [{ instancePath: instancePath + "/complete", schemaPath: "#/properties/complete/enum", keyword: "enum", params: { allowedValues: schema35.properties.complete.enum }, message: "must be equal to one of the allowed values" }];
                      return false;
                    }
                    var valid0 = _errs11 === errors;
                  } else {
                    var valid0 = true;
                  }
                  if (valid0) {
                    if (data.data !== void 0) {
                      let data6 = data.data;
                      const _errs13 = errors;
                      const _errs16 = errors;
                      let valid2 = true;
                      const _errs17 = errors;
                      if (data6 && typeof data6 == "object" && !Array.isArray(data6)) {
                        if (data6.items !== void 0) {
                          let data7 = data6.items;
                          if (Array.isArray(data7)) {
                            const _errs19 = errors;
                            const len0 = data7.length;
                            for (let i0 = 0; i0 < len0; i0++) {
                              let data8 = data7[i0];
                              const _errs20 = errors;
                              if (data8 && typeof data8 == "object" && !Array.isArray(data8)) {
                                let missing1;
                                if (data8.opportunity === void 0 && (missing1 = "opportunity")) {
                                  const err0 = {};
                                  if (vErrors === null) {
                                    vErrors = [err0];
                                  } else {
                                    vErrors.push(err0);
                                  }
                                  errors++;
                                } else {
                                  if (data8.opportunity !== void 0) {
                                    let data9 = data8.opportunity;
                                    if (data9 && typeof data9 == "object" && !Array.isArray(data9)) {
                                      let missing2;
                                      if (data9.executionSupported === void 0 && (missing2 = "executionSupported")) {
                                        const err1 = {};
                                        if (vErrors === null) {
                                          vErrors = [err1];
                                        } else {
                                          vErrors.push(err1);
                                        }
                                        errors++;
                                      } else {
                                        if (data9.executionSupported !== void 0) {
                                          if (true !== data9.executionSupported) {
                                            const err2 = {};
                                            if (vErrors === null) {
                                              vErrors = [err2];
                                            } else {
                                              vErrors.push(err2);
                                            }
                                            errors++;
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              var valid4 = _errs20 === errors;
                              if (valid4) {
                                break;
                              }
                            }
                            if (!valid4) {
                              const err3 = {};
                              if (vErrors === null) {
                                vErrors = [err3];
                              } else {
                                vErrors.push(err3);
                              }
                              errors++;
                            } else {
                              errors = _errs19;
                              if (vErrors !== null) {
                                if (_errs19) {
                                  vErrors.length = _errs19;
                                } else {
                                  vErrors = null;
                                }
                              }
                            }
                          }
                        }
                      }
                      var _valid0 = _errs17 === errors;
                      errors = _errs16;
                      if (vErrors !== null) {
                        if (_errs16) {
                          vErrors.length = _errs16;
                        } else {
                          vErrors = null;
                        }
                      }
                      if (_valid0) {
                        const _errs23 = errors;
                        if (data6 && typeof data6 == "object" && !Array.isArray(data6)) {
                          if (data6.executionSession !== void 0) {
                            let data11 = data6.executionSession;
                            const _errs25 = errors;
                            if (errors === _errs25) {
                              if (data11 && typeof data11 == "object" && !Array.isArray(data11)) {
                                let missing3;
                                if (data11.id === void 0 && (missing3 = "id") || data11.token === void 0 && (missing3 = "token") || data11.expiresAt === void 0 && (missing3 = "expiresAt")) {
                                  validate24.errors = [{ instancePath: instancePath + "/data/executionSession", schemaPath: "#/components/schemas/ExecutionSession/required", keyword: "required", params: { missingProperty: missing3 }, message: "must have required property '" + missing3 + "'" }];
                                  return false;
                                } else {
                                  if (data11.id !== void 0) {
                                    const _errs27 = errors;
                                    if (typeof data11.id !== "string") {
                                      validate24.errors = [{ instancePath: instancePath + "/data/executionSession/id", schemaPath: "#/components/schemas/ExecutionSession/properties/id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                      return false;
                                    }
                                    var valid9 = _errs27 === errors;
                                  } else {
                                    var valid9 = true;
                                  }
                                  if (valid9) {
                                    if (data11.token !== void 0) {
                                      const _errs29 = errors;
                                      if (typeof data11.token !== "string") {
                                        validate24.errors = [{ instancePath: instancePath + "/data/executionSession/token", schemaPath: "#/components/schemas/ExecutionSession/properties/token/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                        return false;
                                      }
                                      var valid9 = _errs29 === errors;
                                    } else {
                                      var valid9 = true;
                                    }
                                    if (valid9) {
                                      if (data11.expiresAt !== void 0) {
                                        let data14 = data11.expiresAt;
                                        const _errs31 = errors;
                                        if (errors === _errs31) {
                                          if (errors === _errs31) {
                                            if (typeof data14 === "string") {
                                              if (!formats0.validate.test(data14)) {
                                                validate24.errors = [{ instancePath: instancePath + "/data/executionSession/expiresAt", schemaPath: "#/components/schemas/ExecutionSession/properties/expiresAt/format", keyword: "format", params: { format: "date-time" }, message: 'must match format "date-time"' }];
                                                return false;
                                              }
                                            } else {
                                              validate24.errors = [{ instancePath: instancePath + "/data/executionSession/expiresAt", schemaPath: "#/components/schemas/ExecutionSession/properties/expiresAt/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                              return false;
                                            }
                                          }
                                        }
                                        var valid9 = _errs31 === errors;
                                      } else {
                                        var valid9 = true;
                                      }
                                    }
                                  }
                                }
                              } else {
                                validate24.errors = [{ instancePath: instancePath + "/data/executionSession", schemaPath: "#/components/schemas/ExecutionSession/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                                return false;
                              }
                            }
                          }
                        }
                        var _valid0 = _errs23 === errors;
                        valid2 = _valid0;
                        if (valid2) {
                          var props0 = {};
                          props0.executionSession = true;
                          props0.items = true;
                        }
                      }
                      if (!valid2) {
                        const err4 = { instancePath: instancePath + "/data", schemaPath: "#/properties/data/allOf/0/if", keyword: "if", params: { failingKeyword: "then" }, message: 'must match "then" schema' };
                        if (vErrors === null) {
                          vErrors = [err4];
                        } else {
                          vErrors.push(err4);
                        }
                        errors++;
                        validate24.errors = vErrors;
                        return false;
                      }
                      if (errors === _errs13) {
                        if (data6 && typeof data6 == "object" && !Array.isArray(data6)) {
                          let missing4;
                          if (data6.wallet === void 0 && (missing4 = "wallet") || data6.mode === void 0 && (missing4 = "mode") || data6.summary === void 0 && (missing4 = "summary") || data6.pagination === void 0 && (missing4 = "pagination") || data6.items === void 0 && (missing4 = "items") || data6.airdrops === void 0 && (missing4 = "airdrops") || data6.executionSession === void 0 && (missing4 = "executionSession") || data6.limits === void 0 && (missing4 = "limits")) {
                            validate24.errors = [{ instancePath: instancePath + "/data", schemaPath: "#/properties/data/required", keyword: "required", params: { missingProperty: missing4 }, message: "must have required property '" + missing4 + "'" }];
                            return false;
                          } else {
                            if (props0 !== true) {
                              props0 = props0 || {};
                              props0.wallet = true;
                              props0.mode = true;
                              props0.summary = true;
                              props0.pagination = true;
                              props0.items = true;
                              props0.airdrops = true;
                              props0.executionSession = true;
                              props0.limits = true;
                            }
                            if (data6.wallet !== void 0) {
                              let data15 = data6.wallet;
                              const _errs33 = errors;
                              const _errs34 = errors;
                              if (errors === _errs34) {
                                if (typeof data15 === "string") {
                                  if (!pattern4.test(data15)) {
                                    validate24.errors = [{ instancePath: instancePath + "/data/wallet", schemaPath: "#/components/schemas/Base58/pattern", keyword: "pattern", params: { pattern: "^[1-9A-HJ-NP-Za-km-z]{32,44}$" }, message: 'must match pattern "^[1-9A-HJ-NP-Za-km-z]{32,44}$"' }];
                                    return false;
                                  }
                                } else {
                                  validate24.errors = [{ instancePath: instancePath + "/data/wallet", schemaPath: "#/components/schemas/Base58/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                  return false;
                                }
                              }
                              var valid10 = _errs33 === errors;
                            } else {
                              var valid10 = true;
                            }
                            if (valid10) {
                              if (data6.mode !== void 0) {
                                let data16 = data6.mode;
                                const _errs36 = errors;
                                if (typeof data16 !== "string") {
                                  validate24.errors = [{ instancePath: instancePath + "/data/mode", schemaPath: "#/properties/data/properties/mode/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                  return false;
                                }
                                if (!(data16 === "safe")) {
                                  validate24.errors = [{ instancePath: instancePath + "/data/mode", schemaPath: "#/properties/data/properties/mode/enum", keyword: "enum", params: { allowedValues: schema35.properties.data.properties.mode.enum }, message: "must be equal to one of the allowed values" }];
                                  return false;
                                }
                                var valid10 = _errs36 === errors;
                              } else {
                                var valid10 = true;
                              }
                              if (valid10) {
                                if (data6.summary !== void 0) {
                                  let data17 = data6.summary;
                                  const _errs38 = errors;
                                  if (errors === _errs38) {
                                    if (data17 && typeof data17 == "object" && !Array.isArray(data17)) {
                                      let missing5;
                                      if (data17.scope === void 0 && (missing5 = "scope") || data17.analyzedAssetAccounts === void 0 && (missing5 = "analyzedAssetAccounts") || data17.opportunityCount === void 0 && (missing5 = "opportunityCount") || data17.protectedAssetCount === void 0 && (missing5 = "protectedAssetCount") || data17.totalsByAsset === void 0 && (missing5 = "totalsByAsset") || data17.estimatedNetValueUsd === void 0 && (missing5 = "estimatedNetValueUsd")) {
                                        validate24.errors = [{ instancePath: instancePath + "/data/summary", schemaPath: "#/properties/data/properties/summary/required", keyword: "required", params: { missingProperty: missing5 }, message: "must have required property '" + missing5 + "'" }];
                                        return false;
                                      } else {
                                        if (data17.scope !== void 0) {
                                          let data18 = data17.scope;
                                          const _errs40 = errors;
                                          if (typeof data18 !== "string") {
                                            validate24.errors = [{ instancePath: instancePath + "/data/summary/scope", schemaPath: "#/properties/data/properties/summary/properties/scope/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                            return false;
                                          }
                                          if (!(data18 === "page")) {
                                            validate24.errors = [{ instancePath: instancePath + "/data/summary/scope", schemaPath: "#/properties/data/properties/summary/properties/scope/enum", keyword: "enum", params: { allowedValues: schema35.properties.data.properties.summary.properties.scope.enum }, message: "must be equal to one of the allowed values" }];
                                            return false;
                                          }
                                          var valid12 = _errs40 === errors;
                                        } else {
                                          var valid12 = true;
                                        }
                                        if (valid12) {
                                          if (data17.analyzedAssetAccounts !== void 0) {
                                            let data19 = data17.analyzedAssetAccounts;
                                            const _errs42 = errors;
                                            if (!(typeof data19 == "number" && (!(data19 % 1) && !isNaN(data19)))) {
                                              validate24.errors = [{ instancePath: instancePath + "/data/summary/analyzedAssetAccounts", schemaPath: "#/properties/data/properties/summary/properties/analyzedAssetAccounts/type", keyword: "type", params: { type: "integer" }, message: "must be integer" }];
                                              return false;
                                            }
                                            var valid12 = _errs42 === errors;
                                          } else {
                                            var valid12 = true;
                                          }
                                          if (valid12) {
                                            if (data17.opportunityCount !== void 0) {
                                              let data20 = data17.opportunityCount;
                                              const _errs44 = errors;
                                              if (!(typeof data20 == "number" && (!(data20 % 1) && !isNaN(data20)))) {
                                                validate24.errors = [{ instancePath: instancePath + "/data/summary/opportunityCount", schemaPath: "#/properties/data/properties/summary/properties/opportunityCount/type", keyword: "type", params: { type: "integer" }, message: "must be integer" }];
                                                return false;
                                              }
                                              var valid12 = _errs44 === errors;
                                            } else {
                                              var valid12 = true;
                                            }
                                            if (valid12) {
                                              if (data17.protectedAssetCount !== void 0) {
                                                let data21 = data17.protectedAssetCount;
                                                const _errs46 = errors;
                                                if (!(typeof data21 == "number" && (!(data21 % 1) && !isNaN(data21)))) {
                                                  validate24.errors = [{ instancePath: instancePath + "/data/summary/protectedAssetCount", schemaPath: "#/properties/data/properties/summary/properties/protectedAssetCount/type", keyword: "type", params: { type: "integer" }, message: "must be integer" }];
                                                  return false;
                                                }
                                                var valid12 = _errs46 === errors;
                                              } else {
                                                var valid12 = true;
                                              }
                                              if (valid12) {
                                                if (data17.totalsByAsset !== void 0) {
                                                  let data22 = data17.totalsByAsset;
                                                  const _errs48 = errors;
                                                  if (errors === _errs48) {
                                                    if (Array.isArray(data22)) {
                                                      var valid13 = true;
                                                      const len1 = data22.length;
                                                      for (let i1 = 0; i1 < len1; i1++) {
                                                        let data23 = data22[i1];
                                                        const _errs50 = errors;
                                                        if (errors === _errs50) {
                                                          if (data23 && typeof data23 == "object" && !Array.isArray(data23)) {
                                                            let missing6;
                                                            if (data23.asset === void 0 && (missing6 = "asset") || data23.decimals === void 0 && (missing6 = "decimals") || data23.grossBaseUnits === void 0 && (missing6 = "grossBaseUnits") || data23.serviceFeeBaseUnits === void 0 && (missing6 = "serviceFeeBaseUnits") || data23.netBaseUnits === void 0 && (missing6 = "netBaseUnits")) {
                                                              validate24.errors = [{ instancePath: instancePath + "/data/summary/totalsByAsset/" + i1, schemaPath: "#/properties/data/properties/summary/properties/totalsByAsset/items/required", keyword: "required", params: { missingProperty: missing6 }, message: "must have required property '" + missing6 + "'" }];
                                                              return false;
                                                            } else {
                                                              if (data23.asset !== void 0) {
                                                                const _errs52 = errors;
                                                                if (typeof data23.asset !== "string") {
                                                                  validate24.errors = [{ instancePath: instancePath + "/data/summary/totalsByAsset/" + i1 + "/asset", schemaPath: "#/properties/data/properties/summary/properties/totalsByAsset/items/properties/asset/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                                                  return false;
                                                                }
                                                                var valid14 = _errs52 === errors;
                                                              } else {
                                                                var valid14 = true;
                                                              }
                                                              if (valid14) {
                                                                if (data23.mint !== void 0) {
                                                                  let data25 = data23.mint;
                                                                  const _errs54 = errors;
                                                                  const _errs55 = errors;
                                                                  if (errors === _errs55) {
                                                                    if (typeof data25 === "string") {
                                                                      if (!pattern4.test(data25)) {
                                                                        validate24.errors = [{ instancePath: instancePath + "/data/summary/totalsByAsset/" + i1 + "/mint", schemaPath: "#/components/schemas/Base58/pattern", keyword: "pattern", params: { pattern: "^[1-9A-HJ-NP-Za-km-z]{32,44}$" }, message: 'must match pattern "^[1-9A-HJ-NP-Za-km-z]{32,44}$"' }];
                                                                        return false;
                                                                      }
                                                                    } else {
                                                                      validate24.errors = [{ instancePath: instancePath + "/data/summary/totalsByAsset/" + i1 + "/mint", schemaPath: "#/components/schemas/Base58/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                                                      return false;
                                                                    }
                                                                  }
                                                                  var valid14 = _errs54 === errors;
                                                                } else {
                                                                  var valid14 = true;
                                                                }
                                                                if (valid14) {
                                                                  if (data23.decimals !== void 0) {
                                                                    let data26 = data23.decimals;
                                                                    const _errs57 = errors;
                                                                    if (!(typeof data26 == "number" && (!(data26 % 1) && !isNaN(data26)))) {
                                                                      validate24.errors = [{ instancePath: instancePath + "/data/summary/totalsByAsset/" + i1 + "/decimals", schemaPath: "#/properties/data/properties/summary/properties/totalsByAsset/items/properties/decimals/type", keyword: "type", params: { type: "integer" }, message: "must be integer" }];
                                                                      return false;
                                                                    }
                                                                    var valid14 = _errs57 === errors;
                                                                  } else {
                                                                    var valid14 = true;
                                                                  }
                                                                  if (valid14) {
                                                                    if (data23.grossBaseUnits !== void 0) {
                                                                      let data27 = data23.grossBaseUnits;
                                                                      const _errs59 = errors;
                                                                      const _errs60 = errors;
                                                                      if (errors === _errs60) {
                                                                        if (typeof data27 === "string") {
                                                                          if (!pattern9.test(data27)) {
                                                                            validate24.errors = [{ instancePath: instancePath + "/data/summary/totalsByAsset/" + i1 + "/grossBaseUnits", schemaPath: "#/components/schemas/IntegerString/pattern", keyword: "pattern", params: { pattern: "^[0-9]+$" }, message: 'must match pattern "^[0-9]+$"' }];
                                                                            return false;
                                                                          }
                                                                        } else {
                                                                          validate24.errors = [{ instancePath: instancePath + "/data/summary/totalsByAsset/" + i1 + "/grossBaseUnits", schemaPath: "#/components/schemas/IntegerString/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                                                          return false;
                                                                        }
                                                                      }
                                                                      var valid14 = _errs59 === errors;
                                                                    } else {
                                                                      var valid14 = true;
                                                                    }
                                                                    if (valid14) {
                                                                      if (data23.serviceFeeBaseUnits !== void 0) {
                                                                        let data28 = data23.serviceFeeBaseUnits;
                                                                        const _errs62 = errors;
                                                                        const _errs63 = errors;
                                                                        if (errors === _errs63) {
                                                                          if (typeof data28 === "string") {
                                                                            if (!pattern9.test(data28)) {
                                                                              validate24.errors = [{ instancePath: instancePath + "/data/summary/totalsByAsset/" + i1 + "/serviceFeeBaseUnits", schemaPath: "#/components/schemas/IntegerString/pattern", keyword: "pattern", params: { pattern: "^[0-9]+$" }, message: 'must match pattern "^[0-9]+$"' }];
                                                                              return false;
                                                                            }
                                                                          } else {
                                                                            validate24.errors = [{ instancePath: instancePath + "/data/summary/totalsByAsset/" + i1 + "/serviceFeeBaseUnits", schemaPath: "#/components/schemas/IntegerString/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                                                            return false;
                                                                          }
                                                                        }
                                                                        var valid14 = _errs62 === errors;
                                                                      } else {
                                                                        var valid14 = true;
                                                                      }
                                                                      if (valid14) {
                                                                        if (data23.netBaseUnits !== void 0) {
                                                                          let data29 = data23.netBaseUnits;
                                                                          const _errs65 = errors;
                                                                          const _errs66 = errors;
                                                                          if (errors === _errs66) {
                                                                            if (typeof data29 === "string") {
                                                                              if (!pattern9.test(data29)) {
                                                                                validate24.errors = [{ instancePath: instancePath + "/data/summary/totalsByAsset/" + i1 + "/netBaseUnits", schemaPath: "#/components/schemas/IntegerString/pattern", keyword: "pattern", params: { pattern: "^[0-9]+$" }, message: 'must match pattern "^[0-9]+$"' }];
                                                                                return false;
                                                                              }
                                                                            } else {
                                                                              validate24.errors = [{ instancePath: instancePath + "/data/summary/totalsByAsset/" + i1 + "/netBaseUnits", schemaPath: "#/components/schemas/IntegerString/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                                                              return false;
                                                                            }
                                                                          }
                                                                          var valid14 = _errs65 === errors;
                                                                        } else {
                                                                          var valid14 = true;
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          } else {
                                                            validate24.errors = [{ instancePath: instancePath + "/data/summary/totalsByAsset/" + i1, schemaPath: "#/properties/data/properties/summary/properties/totalsByAsset/items/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                                                            return false;
                                                          }
                                                        }
                                                        var valid13 = _errs50 === errors;
                                                        if (!valid13) {
                                                          break;
                                                        }
                                                      }
                                                    } else {
                                                      validate24.errors = [{ instancePath: instancePath + "/data/summary/totalsByAsset", schemaPath: "#/properties/data/properties/summary/properties/totalsByAsset/type", keyword: "type", params: { type: "array" }, message: "must be array" }];
                                                      return false;
                                                    }
                                                  }
                                                  var valid12 = _errs48 === errors;
                                                } else {
                                                  var valid12 = true;
                                                }
                                                if (valid12) {
                                                  if (data17.estimatedNetValueUsd !== void 0) {
                                                    let data30 = data17.estimatedNetValueUsd;
                                                    const _errs68 = errors;
                                                    if (typeof data30 !== "string" && data30 !== null) {
                                                      validate24.errors = [{ instancePath: instancePath + "/data/summary/estimatedNetValueUsd", schemaPath: "#/properties/data/properties/summary/properties/estimatedNetValueUsd/type", keyword: "type", params: { type: schema35.properties.data.properties.summary.properties.estimatedNetValueUsd.type }, message: "must be string,null" }];
                                                      return false;
                                                    }
                                                    var valid12 = _errs68 === errors;
                                                  } else {
                                                    var valid12 = true;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    } else {
                                      validate24.errors = [{ instancePath: instancePath + "/data/summary", schemaPath: "#/properties/data/properties/summary/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                                      return false;
                                    }
                                  }
                                  var valid10 = _errs38 === errors;
                                } else {
                                  var valid10 = true;
                                }
                                if (valid10) {
                                  if (data6.pagination !== void 0) {
                                    let data31 = data6.pagination;
                                    const _errs70 = errors;
                                    if (errors === _errs70) {
                                      if (data31 && typeof data31 == "object" && !Array.isArray(data31)) {
                                        let missing7;
                                        if (data31.returned === void 0 && (missing7 = "returned") || data31.hasMore === void 0 && (missing7 = "hasMore") || data31.nextCursor === void 0 && (missing7 = "nextCursor") || data31.walletModulesIncluded === void 0 && (missing7 = "walletModulesIncluded") || data31.expiresAt === void 0 && (missing7 = "expiresAt")) {
                                          validate24.errors = [{ instancePath: instancePath + "/data/pagination", schemaPath: "#/properties/data/properties/pagination/required", keyword: "required", params: { missingProperty: missing7 }, message: "must have required property '" + missing7 + "'" }];
                                          return false;
                                        } else {
                                          if (data31.returned !== void 0) {
                                            let data32 = data31.returned;
                                            const _errs72 = errors;
                                            if (!(typeof data32 == "number" && (!(data32 % 1) && !isNaN(data32)))) {
                                              validate24.errors = [{ instancePath: instancePath + "/data/pagination/returned", schemaPath: "#/properties/data/properties/pagination/properties/returned/type", keyword: "type", params: { type: "integer" }, message: "must be integer" }];
                                              return false;
                                            }
                                            var valid19 = _errs72 === errors;
                                          } else {
                                            var valid19 = true;
                                          }
                                          if (valid19) {
                                            if (data31.hasMore !== void 0) {
                                              const _errs74 = errors;
                                              if (typeof data31.hasMore !== "boolean") {
                                                validate24.errors = [{ instancePath: instancePath + "/data/pagination/hasMore", schemaPath: "#/properties/data/properties/pagination/properties/hasMore/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }];
                                                return false;
                                              }
                                              var valid19 = _errs74 === errors;
                                            } else {
                                              var valid19 = true;
                                            }
                                            if (valid19) {
                                              if (data31.nextCursor !== void 0) {
                                                let data34 = data31.nextCursor;
                                                const _errs76 = errors;
                                                if (typeof data34 !== "string" && data34 !== null) {
                                                  validate24.errors = [{ instancePath: instancePath + "/data/pagination/nextCursor", schemaPath: "#/properties/data/properties/pagination/properties/nextCursor/type", keyword: "type", params: { type: schema35.properties.data.properties.pagination.properties.nextCursor.type }, message: "must be string,null" }];
                                                  return false;
                                                }
                                                var valid19 = _errs76 === errors;
                                              } else {
                                                var valid19 = true;
                                              }
                                              if (valid19) {
                                                if (data31.walletModulesIncluded !== void 0) {
                                                  const _errs78 = errors;
                                                  if (typeof data31.walletModulesIncluded !== "boolean") {
                                                    validate24.errors = [{ instancePath: instancePath + "/data/pagination/walletModulesIncluded", schemaPath: "#/properties/data/properties/pagination/properties/walletModulesIncluded/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }];
                                                    return false;
                                                  }
                                                  var valid19 = _errs78 === errors;
                                                } else {
                                                  var valid19 = true;
                                                }
                                                if (valid19) {
                                                  if (data31.expiresAt !== void 0) {
                                                    let data36 = data31.expiresAt;
                                                    const _errs80 = errors;
                                                    if (errors === _errs80) {
                                                      if (errors === _errs80) {
                                                        if (typeof data36 === "string") {
                                                          if (!formats0.validate.test(data36)) {
                                                            validate24.errors = [{ instancePath: instancePath + "/data/pagination/expiresAt", schemaPath: "#/properties/data/properties/pagination/properties/expiresAt/format", keyword: "format", params: { format: "date-time" }, message: 'must match format "date-time"' }];
                                                            return false;
                                                          }
                                                        } else {
                                                          validate24.errors = [{ instancePath: instancePath + "/data/pagination/expiresAt", schemaPath: "#/properties/data/properties/pagination/properties/expiresAt/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                                          return false;
                                                        }
                                                      }
                                                    }
                                                    var valid19 = _errs80 === errors;
                                                  } else {
                                                    var valid19 = true;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      } else {
                                        validate24.errors = [{ instancePath: instancePath + "/data/pagination", schemaPath: "#/properties/data/properties/pagination/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                                        return false;
                                      }
                                    }
                                    var valid10 = _errs70 === errors;
                                  } else {
                                    var valid10 = true;
                                  }
                                  if (valid10) {
                                    if (data6.items !== void 0) {
                                      let data37 = data6.items;
                                      const _errs82 = errors;
                                      if (errors === _errs82) {
                                        if (Array.isArray(data37)) {
                                          var valid20 = true;
                                          const len2 = data37.length;
                                          for (let i2 = 0; i2 < len2; i2++) {
                                            const _errs84 = errors;
                                            if (!validate25(data37[i2], { instancePath: instancePath + "/data/items/" + i2, parentData: data37, parentDataProperty: i2, rootData, dynamicAnchors })) {
                                              vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
                                              errors = vErrors.length;
                                            }
                                            var valid20 = _errs84 === errors;
                                            if (!valid20) {
                                              break;
                                            }
                                          }
                                        } else {
                                          validate24.errors = [{ instancePath: instancePath + "/data/items", schemaPath: "#/properties/data/properties/items/type", keyword: "type", params: { type: "array" }, message: "must be array" }];
                                          return false;
                                        }
                                      }
                                      var valid10 = _errs82 === errors;
                                    } else {
                                      var valid10 = true;
                                    }
                                    if (valid10) {
                                      if (data6.airdrops !== void 0) {
                                        const _errs85 = errors;
                                        if (data6.airdrops !== null) {
                                          validate24.errors = [{ instancePath: instancePath + "/data/airdrops", schemaPath: "#/properties/data/properties/airdrops/type", keyword: "type", params: { type: "null" }, message: "must be null" }];
                                          return false;
                                        }
                                        var valid10 = _errs85 === errors;
                                      } else {
                                        var valid10 = true;
                                      }
                                      if (valid10) {
                                        if (data6.executionSession !== void 0) {
                                          let data40 = data6.executionSession;
                                          const _errs87 = errors;
                                          const _errs88 = errors;
                                          let valid21 = false;
                                          let passing0 = null;
                                          const _errs89 = errors;
                                          if (data40 !== null) {
                                            const err5 = { instancePath: instancePath + "/data/executionSession", schemaPath: "#/properties/data/properties/executionSession/oneOf/0/type", keyword: "type", params: { type: "null" }, message: "must be null" };
                                            if (vErrors === null) {
                                              vErrors = [err5];
                                            } else {
                                              vErrors.push(err5);
                                            }
                                            errors++;
                                          }
                                          var _valid1 = _errs89 === errors;
                                          if (_valid1) {
                                            valid21 = true;
                                            passing0 = 0;
                                          }
                                          const _errs91 = errors;
                                          const _errs92 = errors;
                                          if (errors === _errs92) {
                                            if (data40 && typeof data40 == "object" && !Array.isArray(data40)) {
                                              let missing8;
                                              if (data40.id === void 0 && (missing8 = "id") || data40.token === void 0 && (missing8 = "token") || data40.expiresAt === void 0 && (missing8 = "expiresAt")) {
                                                const err6 = { instancePath: instancePath + "/data/executionSession", schemaPath: "#/components/schemas/ExecutionSession/required", keyword: "required", params: { missingProperty: missing8 }, message: "must have required property '" + missing8 + "'" };
                                                if (vErrors === null) {
                                                  vErrors = [err6];
                                                } else {
                                                  vErrors.push(err6);
                                                }
                                                errors++;
                                              } else {
                                                if (data40.id !== void 0) {
                                                  const _errs94 = errors;
                                                  if (typeof data40.id !== "string") {
                                                    const err7 = { instancePath: instancePath + "/data/executionSession/id", schemaPath: "#/components/schemas/ExecutionSession/properties/id/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                                                    if (vErrors === null) {
                                                      vErrors = [err7];
                                                    } else {
                                                      vErrors.push(err7);
                                                    }
                                                    errors++;
                                                  }
                                                  var valid23 = _errs94 === errors;
                                                } else {
                                                  var valid23 = true;
                                                }
                                                if (valid23) {
                                                  if (data40.token !== void 0) {
                                                    const _errs96 = errors;
                                                    if (typeof data40.token !== "string") {
                                                      const err8 = { instancePath: instancePath + "/data/executionSession/token", schemaPath: "#/components/schemas/ExecutionSession/properties/token/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                                                      if (vErrors === null) {
                                                        vErrors = [err8];
                                                      } else {
                                                        vErrors.push(err8);
                                                      }
                                                      errors++;
                                                    }
                                                    var valid23 = _errs96 === errors;
                                                  } else {
                                                    var valid23 = true;
                                                  }
                                                  if (valid23) {
                                                    if (data40.expiresAt !== void 0) {
                                                      let data43 = data40.expiresAt;
                                                      const _errs98 = errors;
                                                      if (errors === _errs98) {
                                                        if (errors === _errs98) {
                                                          if (typeof data43 === "string") {
                                                            if (!formats0.validate.test(data43)) {
                                                              const err9 = { instancePath: instancePath + "/data/executionSession/expiresAt", schemaPath: "#/components/schemas/ExecutionSession/properties/expiresAt/format", keyword: "format", params: { format: "date-time" }, message: 'must match format "date-time"' };
                                                              if (vErrors === null) {
                                                                vErrors = [err9];
                                                              } else {
                                                                vErrors.push(err9);
                                                              }
                                                              errors++;
                                                            }
                                                          } else {
                                                            const err10 = { instancePath: instancePath + "/data/executionSession/expiresAt", schemaPath: "#/components/schemas/ExecutionSession/properties/expiresAt/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                                                            if (vErrors === null) {
                                                              vErrors = [err10];
                                                            } else {
                                                              vErrors.push(err10);
                                                            }
                                                            errors++;
                                                          }
                                                        }
                                                      }
                                                      var valid23 = _errs98 === errors;
                                                    } else {
                                                      var valid23 = true;
                                                    }
                                                  }
                                                }
                                              }
                                            } else {
                                              const err11 = { instancePath: instancePath + "/data/executionSession", schemaPath: "#/components/schemas/ExecutionSession/type", keyword: "type", params: { type: "object" }, message: "must be object" };
                                              if (vErrors === null) {
                                                vErrors = [err11];
                                              } else {
                                                vErrors.push(err11);
                                              }
                                              errors++;
                                            }
                                          }
                                          var _valid1 = _errs91 === errors;
                                          if (_valid1 && valid21) {
                                            valid21 = false;
                                            passing0 = [passing0, 1];
                                          } else {
                                            if (_valid1) {
                                              valid21 = true;
                                              passing0 = 1;
                                              var props2 = {};
                                              props2.id = true;
                                              props2.token = true;
                                              props2.expiresAt = true;
                                            }
                                          }
                                          if (!valid21) {
                                            const err12 = { instancePath: instancePath + "/data/executionSession", schemaPath: "#/properties/data/properties/executionSession/oneOf", keyword: "oneOf", params: { passingSchemas: passing0 }, message: "must match exactly one schema in oneOf" };
                                            if (vErrors === null) {
                                              vErrors = [err12];
                                            } else {
                                              vErrors.push(err12);
                                            }
                                            errors++;
                                            validate24.errors = vErrors;
                                            return false;
                                          } else {
                                            errors = _errs88;
                                            if (vErrors !== null) {
                                              if (_errs88) {
                                                vErrors.length = _errs88;
                                              } else {
                                                vErrors = null;
                                              }
                                            }
                                          }
                                          var valid10 = _errs87 === errors;
                                        } else {
                                          var valid10 = true;
                                        }
                                        if (valid10) {
                                          if (data6.limits !== void 0) {
                                            let data44 = data6.limits;
                                            const _errs100 = errors;
                                            if (errors === _errs100) {
                                              if (data44 && typeof data44 == "object" && !Array.isArray(data44)) {
                                                let missing9;
                                                if (data44.maxRawTokenAccounts === void 0 && (missing9 = "maxRawTokenAccounts") || data44.pageLimitMax === void 0 && (missing9 = "pageLimitMax")) {
                                                  validate24.errors = [{ instancePath: instancePath + "/data/limits", schemaPath: "#/properties/data/properties/limits/required", keyword: "required", params: { missingProperty: missing9 }, message: "must have required property '" + missing9 + "'" }];
                                                  return false;
                                                } else {
                                                  if (data44.maxRawTokenAccounts !== void 0) {
                                                    let data45 = data44.maxRawTokenAccounts;
                                                    const _errs102 = errors;
                                                    if (!(typeof data45 == "number" && (!(data45 % 1) && !isNaN(data45)))) {
                                                      validate24.errors = [{ instancePath: instancePath + "/data/limits/maxRawTokenAccounts", schemaPath: "#/properties/data/properties/limits/properties/maxRawTokenAccounts/type", keyword: "type", params: { type: "integer" }, message: "must be integer" }];
                                                      return false;
                                                    }
                                                    if (!(data45 === 400)) {
                                                      validate24.errors = [{ instancePath: instancePath + "/data/limits/maxRawTokenAccounts", schemaPath: "#/properties/data/properties/limits/properties/maxRawTokenAccounts/enum", keyword: "enum", params: { allowedValues: schema35.properties.data.properties.limits.properties.maxRawTokenAccounts.enum }, message: "must be equal to one of the allowed values" }];
                                                      return false;
                                                    }
                                                    var valid24 = _errs102 === errors;
                                                  } else {
                                                    var valid24 = true;
                                                  }
                                                  if (valid24) {
                                                    if (data44.pageLimitMax !== void 0) {
                                                      let data46 = data44.pageLimitMax;
                                                      const _errs104 = errors;
                                                      if (!(typeof data46 == "number" && (!(data46 % 1) && !isNaN(data46)))) {
                                                        validate24.errors = [{ instancePath: instancePath + "/data/limits/pageLimitMax", schemaPath: "#/properties/data/properties/limits/properties/pageLimitMax/type", keyword: "type", params: { type: "integer" }, message: "must be integer" }];
                                                        return false;
                                                      }
                                                      if (!(data46 === 200)) {
                                                        validate24.errors = [{ instancePath: instancePath + "/data/limits/pageLimitMax", schemaPath: "#/properties/data/properties/limits/properties/pageLimitMax/enum", keyword: "enum", params: { allowedValues: schema35.properties.data.properties.limits.properties.pageLimitMax.enum }, message: "must be equal to one of the allowed values" }];
                                                        return false;
                                                      }
                                                      var valid24 = _errs104 === errors;
                                                    } else {
                                                      var valid24 = true;
                                                    }
                                                  }
                                                }
                                              } else {
                                                validate24.errors = [{ instancePath: instancePath + "/data/limits", schemaPath: "#/properties/data/properties/limits/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                                                return false;
                                              }
                                            }
                                            var valid10 = _errs100 === errors;
                                          } else {
                                            var valid10 = true;
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        } else {
                          validate24.errors = [{ instancePath: instancePath + "/data", schemaPath: "#/properties/data/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                          return false;
                        }
                      }
                      var valid0 = _errs13 === errors;
                    } else {
                      var valid0 = true;
                    }
                    if (valid0) {
                      if (data.billing !== void 0) {
                        const _errs106 = errors;
                        if (!validate43(data.billing, { instancePath: instancePath + "/billing", parentData: data, parentDataProperty: "billing", rootData, dynamicAnchors })) {
                          vErrors = vErrors === null ? validate43.errors : vErrors.concat(validate43.errors);
                          errors = vErrors.length;
                        }
                        var valid0 = _errs106 === errors;
                      } else {
                        var valid0 = true;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    } else {
      validate24.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate24.errors = vErrors;
  return errors === 0;
}
validate24.evaluated = { "props": { "requestId": true, "apiVersion": true, "rulesetVersion": true, "assetIntelligenceRulesetVersion": true, "analyzedAt": true, "complete": true, "data": true, "billing": true }, "dynamicProps": false, "dynamicItems": false };
function validate23(data, { instancePath = "", parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  const evaluated0 = validate23.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = void 0;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = void 0;
  }
  if (!validate24(data, { instancePath, parentData, parentDataProperty, rootData, dynamicAnchors })) {
    vErrors = vErrors === null ? validate24.errors : vErrors.concat(validate24.errors);
    errors = vErrors.length;
  }
  validate23.errors = vErrors;
  return errors === 0;
}
validate23.evaluated = { "props": { "requestId": true, "apiVersion": true, "rulesetVersion": true, "assetIntelligenceRulesetVersion": true, "analyzedAt": true, "complete": true, "data": true, "billing": true }, "dynamicProps": false, "dynamicItems": false };
var validateError = validate46;
var schema64 = { "type": "object", "required": ["requestId", "error"], "properties": { "requestId": { "type": "string" }, "error": { "type": "object", "required": ["code", "message", "retryable"], "properties": { "code": { "type": "string", "enum": ["unauthorized", "key_revoked", "mode_not_permitted", "mode_not_available", "idempotency_key_reused", "request_in_progress", "snapshot_expired", "request_too_large", "invalid_wallet", "cursor_mismatch", "airdrops_not_available", "wallet_too_large", "module_limit_exceeded", "rate_limited", "internal_error", "invalid_idempotency_key", "platform_unavailable", "platform_failure_recorded", "invalid_request", "incomplete", "upstream_unavailable", "deadline_exceeded", "session_mismatch", "session_expired", "item_not_in_session", "execution_in_progress", "invalid_receipt", "receipt_mismatch", "receipt_expired", "invalid_signature", "credit_admission_paused"] }, "message": { "type": "string" }, "retryable": { "type": "boolean" }, "details": { "type": "object", "additionalProperties": true, "description": "Never contains upstream URLs, credentials, raw RPC messages, or provider names." } } } } };
function validate46(data, { instancePath = "", parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  const evaluated0 = validate46.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = void 0;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = void 0;
  }
  const _errs0 = errors;
  if (errors === _errs0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.requestId === void 0 && (missing0 = "requestId") || data.error === void 0 && (missing0 = "error")) {
        validate46.errors = [{ instancePath, schemaPath: "#/components/schemas/ErrorEnvelope/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        if (data.requestId !== void 0) {
          const _errs2 = errors;
          if (typeof data.requestId !== "string") {
            validate46.errors = [{ instancePath: instancePath + "/requestId", schemaPath: "#/components/schemas/ErrorEnvelope/properties/requestId/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
            return false;
          }
          var valid1 = _errs2 === errors;
        } else {
          var valid1 = true;
        }
        if (valid1) {
          if (data.error !== void 0) {
            let data1 = data.error;
            const _errs4 = errors;
            if (errors === _errs4) {
              if (data1 && typeof data1 == "object" && !Array.isArray(data1)) {
                let missing1;
                if (data1.code === void 0 && (missing1 = "code") || data1.message === void 0 && (missing1 = "message") || data1.retryable === void 0 && (missing1 = "retryable")) {
                  validate46.errors = [{ instancePath: instancePath + "/error", schemaPath: "#/components/schemas/ErrorEnvelope/properties/error/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" }];
                  return false;
                } else {
                  if (data1.code !== void 0) {
                    let data2 = data1.code;
                    const _errs6 = errors;
                    if (typeof data2 !== "string") {
                      validate46.errors = [{ instancePath: instancePath + "/error/code", schemaPath: "#/components/schemas/ErrorEnvelope/properties/error/properties/code/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                      return false;
                    }
                    if (!(data2 === "unauthorized" || data2 === "key_revoked" || data2 === "mode_not_permitted" || data2 === "mode_not_available" || data2 === "idempotency_key_reused" || data2 === "request_in_progress" || data2 === "snapshot_expired" || data2 === "request_too_large" || data2 === "invalid_wallet" || data2 === "cursor_mismatch" || data2 === "airdrops_not_available" || data2 === "wallet_too_large" || data2 === "module_limit_exceeded" || data2 === "rate_limited" || data2 === "internal_error" || data2 === "invalid_idempotency_key" || data2 === "platform_unavailable" || data2 === "platform_failure_recorded" || data2 === "invalid_request" || data2 === "incomplete" || data2 === "upstream_unavailable" || data2 === "deadline_exceeded" || data2 === "session_mismatch" || data2 === "session_expired" || data2 === "item_not_in_session" || data2 === "execution_in_progress" || data2 === "invalid_receipt" || data2 === "receipt_mismatch" || data2 === "receipt_expired" || data2 === "invalid_signature" || data2 === "credit_admission_paused")) {
                      validate46.errors = [{ instancePath: instancePath + "/error/code", schemaPath: "#/components/schemas/ErrorEnvelope/properties/error/properties/code/enum", keyword: "enum", params: { allowedValues: schema64.properties.error.properties.code.enum }, message: "must be equal to one of the allowed values" }];
                      return false;
                    }
                    var valid2 = _errs6 === errors;
                  } else {
                    var valid2 = true;
                  }
                  if (valid2) {
                    if (data1.message !== void 0) {
                      const _errs8 = errors;
                      if (typeof data1.message !== "string") {
                        validate46.errors = [{ instancePath: instancePath + "/error/message", schemaPath: "#/components/schemas/ErrorEnvelope/properties/error/properties/message/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                        return false;
                      }
                      var valid2 = _errs8 === errors;
                    } else {
                      var valid2 = true;
                    }
                    if (valid2) {
                      if (data1.retryable !== void 0) {
                        const _errs10 = errors;
                        if (typeof data1.retryable !== "boolean") {
                          validate46.errors = [{ instancePath: instancePath + "/error/retryable", schemaPath: "#/components/schemas/ErrorEnvelope/properties/error/properties/retryable/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }];
                          return false;
                        }
                        var valid2 = _errs10 === errors;
                      } else {
                        var valid2 = true;
                      }
                      if (valid2) {
                        if (data1.details !== void 0) {
                          let data5 = data1.details;
                          const _errs12 = errors;
                          if (errors === _errs12) {
                            if (data5 && typeof data5 == "object" && !Array.isArray(data5)) {
                            } else {
                              validate46.errors = [{ instancePath: instancePath + "/error/details", schemaPath: "#/components/schemas/ErrorEnvelope/properties/error/properties/details/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                              return false;
                            }
                          }
                          var valid2 = _errs12 === errors;
                        } else {
                          var valid2 = true;
                        }
                      }
                    }
                  }
                }
              } else {
                validate46.errors = [{ instancePath: instancePath + "/error", schemaPath: "#/components/schemas/ErrorEnvelope/properties/error/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                return false;
              }
            }
            var valid1 = _errs4 === errors;
          } else {
            var valid1 = true;
          }
        }
      }
    } else {
      validate46.errors = [{ instancePath, schemaPath: "#/components/schemas/ErrorEnvelope/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate46.errors = vErrors;
  return errors === 0;
}
validate46.evaluated = { "props": { "requestId": true, "error": true }, "dynamicProps": false, "dynamicItems": false };
var validateBuild = validate47;
var schema66 = { "type": "object", "required": ["requestId", "analysisRequestId", "apiVersion", "analysisRulesetVersion", "rulesetVersion", "builtAt", "transactions", "items", "plan", "executionReceipt", "warnings"], "properties": { "requestId": { "type": "string" }, "analysisRequestId": { "type": "string" }, "apiVersion": { "type": "string", "enum": ["v1-preview"] }, "analysisRulesetVersion": { "type": "string" }, "rulesetVersion": { "type": "string", "description": "Ruleset applied by this fresh build. May narrow", "never loosen": null, "the analyzed action.": null }, "builtAt": { "type": "string", "format": "date-time" }, "transactions": { "type": "array", "maxItems": 20, "items": { "type": "object", "required": ["id", "itemIds", "format", "submission", "unsignedTransaction", "lastValidBlockHeight", "estimatedNetworkFee"], "properties": { "id": { "type": "string" }, "itemIds": { "type": "array", "items": { "type": "string" } }, "format": { "type": "string", "enum": ["solana_legacy_base64"] }, "submission": { "type": "string", "enum": ["direct_solana"] }, "unsignedTransaction": { "type": "string", "description": "Base64. Unsigned. Contains placeholder signature slots." }, "lastValidBlockHeight": { "$ref": "#/components/schemas/IntegerString" }, "estimatedNetworkFee": { "$ref": "#/components/schemas/Amount" } } } }, "items": { "type": "array", "items": { "oneOf": [{ "$ref": "#/components/schemas/BuiltItem" }, { "$ref": "#/components/schemas/NotBuiltItem" }], "discriminator": { "propertyName": "status", "mapping": { "built": "#/components/schemas/BuiltItem", "changed": "#/components/schemas/NotBuiltItem", "rejected": "#/components/schemas/NotBuiltItem" } } } }, "plan": { "type": "object", "required": ["transactionCount", "estimatedTotalTransactionCount", "currentStageCosts", "costs", "estimatedNetValueUsd", "valuation"], "properties": { "transactionCount": { "type": "integer" }, "estimatedTotalTransactionCount": { "type": "integer", "description": "Equal to `transactionCount` for every preview action." }, "currentStageCosts": { "$ref": "#/components/schemas/PlanCosts" }, "costs": { "$ref": "#/components/schemas/PlanCosts" }, "estimatedNetValueUsd": { "type": ["string", "null"] }, "valuation": { "oneOf": [{ "type": "null" }, { "$ref": "#/components/schemas/Valuation" }] } } }, "executionReceipt": { "oneOf": [{ "type": "null" }, { "type": "object", "required": ["token", "expiresAt", "partnerAttribution"], "properties": { "token": { "type": "string" }, "expiresAt": { "type": "string", "format": "date-time", "description": "Seven days after build." }, "partnerAttribution": { "type": "boolean", "enum": [false], "description": "Preview: always false." } } }], "description": "Null only when no transaction was built." }, "warnings": { "type": "array", "items": { "type": "string" } } } };
function validate49(data, { instancePath = "", parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {}) {
  let vErrors = null;
  let errors = 0;
  const evaluated0 = validate49.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = void 0;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = void 0;
  }
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.asset === void 0 && (missing0 = "asset") || data.decimals === void 0 && (missing0 = "decimals") || data.baseUnits === void 0 && (missing0 = "baseUnits")) {
        validate49.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        if (data.asset !== void 0) {
          const _errs1 = errors;
          if (typeof data.asset !== "string") {
            validate49.errors = [{ instancePath: instancePath + "/asset", schemaPath: "#/properties/asset/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
            return false;
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.mint !== void 0) {
            let data1 = data.mint;
            const _errs3 = errors;
            const _errs4 = errors;
            if (errors === _errs4) {
              if (typeof data1 === "string") {
                if (!pattern4.test(data1)) {
                  validate49.errors = [{ instancePath: instancePath + "/mint", schemaPath: "#/components/schemas/Base58/pattern", keyword: "pattern", params: { pattern: "^[1-9A-HJ-NP-Za-km-z]{32,44}$" }, message: 'must match pattern "^[1-9A-HJ-NP-Za-km-z]{32,44}$"' }];
                  return false;
                }
              } else {
                validate49.errors = [{ instancePath: instancePath + "/mint", schemaPath: "#/components/schemas/Base58/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                return false;
              }
            }
            var valid0 = _errs3 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.decimals !== void 0) {
              let data2 = data.decimals;
              const _errs6 = errors;
              if (!(typeof data2 == "number" && (!(data2 % 1) && !isNaN(data2)))) {
                validate49.errors = [{ instancePath: instancePath + "/decimals", schemaPath: "#/properties/decimals/type", keyword: "type", params: { type: "integer" }, message: "must be integer" }];
                return false;
              }
              if (errors === _errs6) {
                if (typeof data2 == "number") {
                  if (data2 > 18 || isNaN(data2)) {
                    validate49.errors = [{ instancePath: instancePath + "/decimals", schemaPath: "#/properties/decimals/maximum", keyword: "maximum", params: { comparison: "<=", limit: 18 }, message: "must be <= 18" }];
                    return false;
                  } else {
                    if (data2 < 0 || isNaN(data2)) {
                      validate49.errors = [{ instancePath: instancePath + "/decimals", schemaPath: "#/properties/decimals/minimum", keyword: "minimum", params: { comparison: ">=", limit: 0 }, message: "must be >= 0" }];
                      return false;
                    }
                  }
                }
              }
              var valid0 = _errs6 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.baseUnits !== void 0) {
                let data3 = data.baseUnits;
                const _errs8 = errors;
                const _errs9 = errors;
                if (errors === _errs9) {
                  if (typeof data3 === "string") {
                    if (!pattern9.test(data3)) {
                      validate49.errors = [{ instancePath: instancePath + "/baseUnits", schemaPath: "#/components/schemas/IntegerString/pattern", keyword: "pattern", params: { pattern: "^[0-9]+$" }, message: 'must match pattern "^[0-9]+$"' }];
                      return false;
                    }
                  } else {
                    validate49.errors = [{ instancePath: instancePath + "/baseUnits", schemaPath: "#/components/schemas/IntegerString/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                    return false;
                  }
                }
                var valid0 = _errs8 === errors;
              } else {
                var valid0 = true;
              }
            }
          }
        }
      }
    } else {
      validate49.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate49.errors = vErrors;
  return errors === 0;
}
validate49.evaluated = { "props": { "asset": true, "mint": true, "decimals": true, "baseUnits": true }, "dynamicProps": false, "dynamicItems": false };
var schema71 = { "type": "object", "description": "An item that produced bytes. Fresh authoritative amounts are mandatory so the integration reviews build-time values, not analysis-time estimates.", "required": ["id", "status", "authoritativeOpportunity"], "properties": { "id": { "type": "string" }, "status": { "type": "string", "enum": ["built"] }, "authoritativeOpportunity": { "oneOf": [{ "$ref": "#/components/schemas/AuthoritativeBurnAndClose" }, { "$ref": "#/components/schemas/AuthoritativeRecoverExcessLamports" }], "discriminator": { "propertyName": "action", "mapping": { "burn_and_close": "#/components/schemas/AuthoritativeBurnAndClose", "recover_excess_lamports": "#/components/schemas/AuthoritativeRecoverExcessLamports" } } } } };
var schema72 = { "type": "object", "required": ["action", "reviewRequired", "consent", "reviewedBalanceBaseUnits", "valueComponents", "costs", "estimatedNetValueUsd"], "properties": { "action": { "type": "string", "enum": ["burn_and_close"] }, "reviewRequired": { "type": "boolean", "enum": [true] }, "consent": { "type": "string", "minLength": 1, "description": "Refreshed at build time with the fresh reviewed balance." }, "reviewedBalanceBaseUnits": { "$ref": "#/components/schemas/IntegerString", "description": "The balance re-read at build; the value stored against the receipt for the section 6 measurement." }, "valueComponents": { "type": "array", "minItems": 1, "items": { "$ref": "#/components/schemas/ValueComponent" } }, "costs": { "$ref": "#/components/schemas/ItemCosts" }, "estimatedNetValueUsd": { "type": ["string", "null"] } } };
function validate53(data, { instancePath = "", parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {}) {
  let vErrors = null;
  let errors = 0;
  const evaluated0 = validate53.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = void 0;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = void 0;
  }
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.source === void 0 && (missing0 = "source") || data.gross === void 0 && (missing0 = "gross") || data.serviceFee === void 0 && (missing0 = "serviceFee") || data.netAfterServiceFee === void 0 && (missing0 = "netAfterServiceFee")) {
        validate53.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        if (data.source !== void 0) {
          let data0 = data.source;
          const _errs1 = errors;
          if (typeof data0 !== "string") {
            validate53.errors = [{ instancePath: instancePath + "/source", schemaPath: "#/properties/source/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
            return false;
          }
          if (!(data0 === "token_account_close" || data0 === "excess_lamports")) {
            validate53.errors = [{ instancePath: instancePath + "/source", schemaPath: "#/properties/source/enum", keyword: "enum", params: { allowedValues: schema51.properties.source.enum }, message: "must be equal to one of the allowed values" }];
            return false;
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.gross !== void 0) {
            const _errs3 = errors;
            if (!validate49(data.gross, { instancePath: instancePath + "/gross", parentData: data, parentDataProperty: "gross", rootData, dynamicAnchors })) {
              vErrors = vErrors === null ? validate49.errors : vErrors.concat(validate49.errors);
              errors = vErrors.length;
            }
            var valid0 = _errs3 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.serviceFee !== void 0) {
              const _errs4 = errors;
              if (!validate49(data.serviceFee, { instancePath: instancePath + "/serviceFee", parentData: data, parentDataProperty: "serviceFee", rootData, dynamicAnchors })) {
                vErrors = vErrors === null ? validate49.errors : vErrors.concat(validate49.errors);
                errors = vErrors.length;
              }
              var valid0 = _errs4 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.netAfterServiceFee !== void 0) {
                const _errs5 = errors;
                if (!validate49(data.netAfterServiceFee, { instancePath: instancePath + "/netAfterServiceFee", parentData: data, parentDataProperty: "netAfterServiceFee", rootData, dynamicAnchors })) {
                  vErrors = vErrors === null ? validate49.errors : vErrors.concat(validate49.errors);
                  errors = vErrors.length;
                }
                var valid0 = _errs5 === errors;
              } else {
                var valid0 = true;
              }
            }
          }
        }
      }
    } else {
      validate53.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate53.errors = vErrors;
  return errors === 0;
}
validate53.evaluated = { "props": { "source": true, "gross": true, "serviceFee": true, "netAfterServiceFee": true }, "dynamicProps": false, "dynamicItems": false };
var schema75 = { "type": "object", "required": ["scope", "oneTimeSetup"], "properties": { "scope": { "type": "string", "enum": ["item_attributable"] }, "oneTimeSetup": { "$ref": "#/components/schemas/Amount" } } };
function validate58(data, { instancePath = "", parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {}) {
  let vErrors = null;
  let errors = 0;
  const evaluated0 = validate58.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = void 0;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = void 0;
  }
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.scope === void 0 && (missing0 = "scope") || data.oneTimeSetup === void 0 && (missing0 = "oneTimeSetup")) {
        validate58.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        if (data.scope !== void 0) {
          let data0 = data.scope;
          const _errs1 = errors;
          if (typeof data0 !== "string") {
            validate58.errors = [{ instancePath: instancePath + "/scope", schemaPath: "#/properties/scope/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
            return false;
          }
          if (!(data0 === "item_attributable")) {
            validate58.errors = [{ instancePath: instancePath + "/scope", schemaPath: "#/properties/scope/enum", keyword: "enum", params: { allowedValues: schema75.properties.scope.enum }, message: "must be equal to one of the allowed values" }];
            return false;
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.oneTimeSetup !== void 0) {
            const _errs3 = errors;
            if (!validate49(data.oneTimeSetup, { instancePath: instancePath + "/oneTimeSetup", parentData: data, parentDataProperty: "oneTimeSetup", rootData, dynamicAnchors })) {
              vErrors = vErrors === null ? validate49.errors : vErrors.concat(validate49.errors);
              errors = vErrors.length;
            }
            var valid0 = _errs3 === errors;
          } else {
            var valid0 = true;
          }
        }
      }
    } else {
      validate58.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate58.errors = vErrors;
  return errors === 0;
}
validate58.evaluated = { "props": { "scope": true, "oneTimeSetup": true }, "dynamicProps": false, "dynamicItems": false };
function validate52(data, { instancePath = "", parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {}) {
  let vErrors = null;
  let errors = 0;
  const evaluated0 = validate52.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = void 0;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = void 0;
  }
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.action === void 0 && (missing0 = "action") || data.reviewRequired === void 0 && (missing0 = "reviewRequired") || data.consent === void 0 && (missing0 = "consent") || data.reviewedBalanceBaseUnits === void 0 && (missing0 = "reviewedBalanceBaseUnits") || data.valueComponents === void 0 && (missing0 = "valueComponents") || data.costs === void 0 && (missing0 = "costs") || data.estimatedNetValueUsd === void 0 && (missing0 = "estimatedNetValueUsd")) {
        validate52.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        if (data.action !== void 0) {
          let data0 = data.action;
          const _errs1 = errors;
          if (typeof data0 !== "string") {
            validate52.errors = [{ instancePath: instancePath + "/action", schemaPath: "#/properties/action/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
            return false;
          }
          if (!(data0 === "burn_and_close")) {
            validate52.errors = [{ instancePath: instancePath + "/action", schemaPath: "#/properties/action/enum", keyword: "enum", params: { allowedValues: schema72.properties.action.enum }, message: "must be equal to one of the allowed values" }];
            return false;
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.reviewRequired !== void 0) {
            let data1 = data.reviewRequired;
            const _errs3 = errors;
            if (typeof data1 !== "boolean") {
              validate52.errors = [{ instancePath: instancePath + "/reviewRequired", schemaPath: "#/properties/reviewRequired/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }];
              return false;
            }
            if (!(data1 === true)) {
              validate52.errors = [{ instancePath: instancePath + "/reviewRequired", schemaPath: "#/properties/reviewRequired/enum", keyword: "enum", params: { allowedValues: schema72.properties.reviewRequired.enum }, message: "must be equal to one of the allowed values" }];
              return false;
            }
            var valid0 = _errs3 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.consent !== void 0) {
              let data2 = data.consent;
              const _errs5 = errors;
              if (errors === _errs5) {
                if (typeof data2 === "string") {
                  if (func2(data2) < 1) {
                    validate52.errors = [{ instancePath: instancePath + "/consent", schemaPath: "#/properties/consent/minLength", keyword: "minLength", params: { limit: 1 }, message: "must NOT have fewer than 1 characters" }];
                    return false;
                  }
                } else {
                  validate52.errors = [{ instancePath: instancePath + "/consent", schemaPath: "#/properties/consent/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                  return false;
                }
              }
              var valid0 = _errs5 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.reviewedBalanceBaseUnits !== void 0) {
                let data3 = data.reviewedBalanceBaseUnits;
                const _errs7 = errors;
                const _errs8 = errors;
                if (errors === _errs8) {
                  if (typeof data3 === "string") {
                    if (!pattern9.test(data3)) {
                      validate52.errors = [{ instancePath: instancePath + "/reviewedBalanceBaseUnits", schemaPath: "#/components/schemas/IntegerString/pattern", keyword: "pattern", params: { pattern: "^[0-9]+$" }, message: 'must match pattern "^[0-9]+$"' }];
                      return false;
                    }
                  } else {
                    validate52.errors = [{ instancePath: instancePath + "/reviewedBalanceBaseUnits", schemaPath: "#/components/schemas/IntegerString/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                    return false;
                  }
                }
                var valid0 = _errs7 === errors;
              } else {
                var valid0 = true;
              }
              if (valid0) {
                if (data.valueComponents !== void 0) {
                  let data4 = data.valueComponents;
                  const _errs10 = errors;
                  if (errors === _errs10) {
                    if (Array.isArray(data4)) {
                      if (data4.length < 1) {
                        validate52.errors = [{ instancePath: instancePath + "/valueComponents", schemaPath: "#/properties/valueComponents/minItems", keyword: "minItems", params: { limit: 1 }, message: "must NOT have fewer than 1 items" }];
                        return false;
                      } else {
                        var valid2 = true;
                        const len0 = data4.length;
                        for (let i0 = 0; i0 < len0; i0++) {
                          const _errs12 = errors;
                          if (!validate53(data4[i0], { instancePath: instancePath + "/valueComponents/" + i0, parentData: data4, parentDataProperty: i0, rootData, dynamicAnchors })) {
                            vErrors = vErrors === null ? validate53.errors : vErrors.concat(validate53.errors);
                            errors = vErrors.length;
                          }
                          var valid2 = _errs12 === errors;
                          if (!valid2) {
                            break;
                          }
                        }
                      }
                    } else {
                      validate52.errors = [{ instancePath: instancePath + "/valueComponents", schemaPath: "#/properties/valueComponents/type", keyword: "type", params: { type: "array" }, message: "must be array" }];
                      return false;
                    }
                  }
                  var valid0 = _errs10 === errors;
                } else {
                  var valid0 = true;
                }
                if (valid0) {
                  if (data.costs !== void 0) {
                    const _errs13 = errors;
                    if (!validate58(data.costs, { instancePath: instancePath + "/costs", parentData: data, parentDataProperty: "costs", rootData, dynamicAnchors })) {
                      vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
                      errors = vErrors.length;
                    }
                    var valid0 = _errs13 === errors;
                  } else {
                    var valid0 = true;
                  }
                  if (valid0) {
                    if (data.estimatedNetValueUsd !== void 0) {
                      let data7 = data.estimatedNetValueUsd;
                      const _errs14 = errors;
                      if (typeof data7 !== "string" && data7 !== null) {
                        validate52.errors = [{ instancePath: instancePath + "/estimatedNetValueUsd", schemaPath: "#/properties/estimatedNetValueUsd/type", keyword: "type", params: { type: schema72.properties.estimatedNetValueUsd.type }, message: "must be string,null" }];
                        return false;
                      }
                      var valid0 = _errs14 === errors;
                    } else {
                      var valid0 = true;
                    }
                  }
                }
              }
            }
          }
        }
      }
    } else {
      validate52.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate52.errors = vErrors;
  return errors === 0;
}
validate52.evaluated = { "props": { "action": true, "reviewRequired": true, "consent": true, "reviewedBalanceBaseUnits": true, "valueComponents": true, "costs": true, "estimatedNetValueUsd": true }, "dynamicProps": false, "dynamicItems": false };
var schema76 = { "type": "object", "required": ["action", "reviewRequired", "valueComponents", "costs", "estimatedNetValueUsd"], "properties": { "action": { "type": "string", "enum": ["recover_excess_lamports"] }, "reviewRequired": { "type": "boolean" }, "valueComponents": { "type": "array", "minItems": 1, "items": { "$ref": "#/components/schemas/ValueComponent" } }, "costs": { "$ref": "#/components/schemas/ItemCosts" }, "estimatedNetValueUsd": { "type": ["string", "null"] } } };
function validate62(data, { instancePath = "", parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {}) {
  let vErrors = null;
  let errors = 0;
  const evaluated0 = validate62.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = void 0;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = void 0;
  }
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.action === void 0 && (missing0 = "action") || data.reviewRequired === void 0 && (missing0 = "reviewRequired") || data.valueComponents === void 0 && (missing0 = "valueComponents") || data.costs === void 0 && (missing0 = "costs") || data.estimatedNetValueUsd === void 0 && (missing0 = "estimatedNetValueUsd")) {
        validate62.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        if (data.action !== void 0) {
          let data0 = data.action;
          const _errs1 = errors;
          if (typeof data0 !== "string") {
            validate62.errors = [{ instancePath: instancePath + "/action", schemaPath: "#/properties/action/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
            return false;
          }
          if (!(data0 === "recover_excess_lamports")) {
            validate62.errors = [{ instancePath: instancePath + "/action", schemaPath: "#/properties/action/enum", keyword: "enum", params: { allowedValues: schema76.properties.action.enum }, message: "must be equal to one of the allowed values" }];
            return false;
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.reviewRequired !== void 0) {
            const _errs3 = errors;
            if (typeof data.reviewRequired !== "boolean") {
              validate62.errors = [{ instancePath: instancePath + "/reviewRequired", schemaPath: "#/properties/reviewRequired/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }];
              return false;
            }
            var valid0 = _errs3 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.valueComponents !== void 0) {
              let data2 = data.valueComponents;
              const _errs5 = errors;
              if (errors === _errs5) {
                if (Array.isArray(data2)) {
                  if (data2.length < 1) {
                    validate62.errors = [{ instancePath: instancePath + "/valueComponents", schemaPath: "#/properties/valueComponents/minItems", keyword: "minItems", params: { limit: 1 }, message: "must NOT have fewer than 1 items" }];
                    return false;
                  } else {
                    var valid1 = true;
                    const len0 = data2.length;
                    for (let i0 = 0; i0 < len0; i0++) {
                      const _errs7 = errors;
                      if (!validate53(data2[i0], { instancePath: instancePath + "/valueComponents/" + i0, parentData: data2, parentDataProperty: i0, rootData, dynamicAnchors })) {
                        vErrors = vErrors === null ? validate53.errors : vErrors.concat(validate53.errors);
                        errors = vErrors.length;
                      }
                      var valid1 = _errs7 === errors;
                      if (!valid1) {
                        break;
                      }
                    }
                  }
                } else {
                  validate62.errors = [{ instancePath: instancePath + "/valueComponents", schemaPath: "#/properties/valueComponents/type", keyword: "type", params: { type: "array" }, message: "must be array" }];
                  return false;
                }
              }
              var valid0 = _errs5 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.costs !== void 0) {
                const _errs8 = errors;
                if (!validate58(data.costs, { instancePath: instancePath + "/costs", parentData: data, parentDataProperty: "costs", rootData, dynamicAnchors })) {
                  vErrors = vErrors === null ? validate58.errors : vErrors.concat(validate58.errors);
                  errors = vErrors.length;
                }
                var valid0 = _errs8 === errors;
              } else {
                var valid0 = true;
              }
              if (valid0) {
                if (data.estimatedNetValueUsd !== void 0) {
                  let data5 = data.estimatedNetValueUsd;
                  const _errs9 = errors;
                  if (typeof data5 !== "string" && data5 !== null) {
                    validate62.errors = [{ instancePath: instancePath + "/estimatedNetValueUsd", schemaPath: "#/properties/estimatedNetValueUsd/type", keyword: "type", params: { type: schema76.properties.estimatedNetValueUsd.type }, message: "must be string,null" }];
                    return false;
                  }
                  var valid0 = _errs9 === errors;
                } else {
                  var valid0 = true;
                }
              }
            }
          }
        }
      }
    } else {
      validate62.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate62.errors = vErrors;
  return errors === 0;
}
validate62.evaluated = { "props": { "action": true, "reviewRequired": true, "valueComponents": true, "costs": true, "estimatedNetValueUsd": true }, "dynamicProps": false, "dynamicItems": false };
function validate51(data, { instancePath = "", parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {}) {
  let vErrors = null;
  let errors = 0;
  const evaluated0 = validate51.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = void 0;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = void 0;
  }
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.id === void 0 && (missing0 = "id") || data.status === void 0 && (missing0 = "status") || data.authoritativeOpportunity === void 0 && (missing0 = "authoritativeOpportunity")) {
        validate51.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        if (data.id !== void 0) {
          const _errs1 = errors;
          if (typeof data.id !== "string") {
            validate51.errors = [{ instancePath: instancePath + "/id", schemaPath: "#/properties/id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
            return false;
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.status !== void 0) {
            let data1 = data.status;
            const _errs3 = errors;
            if (typeof data1 !== "string") {
              validate51.errors = [{ instancePath: instancePath + "/status", schemaPath: "#/properties/status/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            if (!(data1 === "built")) {
              validate51.errors = [{ instancePath: instancePath + "/status", schemaPath: "#/properties/status/enum", keyword: "enum", params: { allowedValues: schema71.properties.status.enum }, message: "must be equal to one of the allowed values" }];
              return false;
            }
            var valid0 = _errs3 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.authoritativeOpportunity !== void 0) {
              let data2 = data.authoritativeOpportunity;
              const _errs5 = errors;
              const _errs6 = errors;
              let valid1 = false;
              let passing0 = null;
              const _errs7 = errors;
              if (!validate52(data2, { instancePath: instancePath + "/authoritativeOpportunity", parentData: data, parentDataProperty: "authoritativeOpportunity", rootData, dynamicAnchors })) {
                vErrors = vErrors === null ? validate52.errors : vErrors.concat(validate52.errors);
                errors = vErrors.length;
              }
              var _valid0 = _errs7 === errors;
              if (_valid0) {
                valid1 = true;
                passing0 = 0;
                var props0 = {};
                props0.action = true;
                props0.reviewRequired = true;
                props0.consent = true;
                props0.reviewedBalanceBaseUnits = true;
                props0.valueComponents = true;
                props0.costs = true;
                props0.estimatedNetValueUsd = true;
              }
              const _errs8 = errors;
              if (!validate62(data2, { instancePath: instancePath + "/authoritativeOpportunity", parentData: data, parentDataProperty: "authoritativeOpportunity", rootData, dynamicAnchors })) {
                vErrors = vErrors === null ? validate62.errors : vErrors.concat(validate62.errors);
                errors = vErrors.length;
              }
              var _valid0 = _errs8 === errors;
              if (_valid0 && valid1) {
                valid1 = false;
                passing0 = [passing0, 1];
              } else {
                if (_valid0) {
                  valid1 = true;
                  passing0 = 1;
                  if (props0 !== true) {
                    props0 = props0 || {};
                    props0.action = true;
                    props0.reviewRequired = true;
                    props0.valueComponents = true;
                    props0.costs = true;
                    props0.estimatedNetValueUsd = true;
                  }
                }
              }
              if (!valid1) {
                const err0 = { instancePath: instancePath + "/authoritativeOpportunity", schemaPath: "#/properties/authoritativeOpportunity/oneOf", keyword: "oneOf", params: { passingSchemas: passing0 }, message: "must match exactly one schema in oneOf" };
                if (vErrors === null) {
                  vErrors = [err0];
                } else {
                  vErrors.push(err0);
                }
                errors++;
                validate51.errors = vErrors;
                return false;
              } else {
                errors = _errs6;
                if (vErrors !== null) {
                  if (_errs6) {
                    vErrors.length = _errs6;
                  } else {
                    vErrors = null;
                  }
                }
              }
              var valid0 = _errs5 === errors;
            } else {
              var valid0 = true;
            }
          }
        }
      }
    } else {
      validate51.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate51.errors = vErrors;
  return errors === 0;
}
validate51.evaluated = { "props": { "id": true, "status": true, "authoritativeOpportunity": true }, "dynamicProps": false, "dynamicItems": false };
var schema77 = { "type": "object", "required": ["id", "status", "reason"], "properties": { "id": { "type": "string" }, "status": { "type": "string", "enum": ["changed", "rejected"] }, "reason": { "type": "string", "enum": ["balance_changed", "account_closed", "authority_changed", "frozen", "protected_by_current_ruleset", "unsupported_in_preview", "over_wire_limit"] }, "currentBalanceBaseUnits": { "$ref": "#/components/schemas/IntegerString", "description": "Present for `balance_changed` where safe to disclose." } } };
function validate67(data, { instancePath = "", parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {}) {
  let vErrors = null;
  let errors = 0;
  const evaluated0 = validate67.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = void 0;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = void 0;
  }
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.id === void 0 && (missing0 = "id") || data.status === void 0 && (missing0 = "status") || data.reason === void 0 && (missing0 = "reason")) {
        validate67.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        if (data.id !== void 0) {
          const _errs1 = errors;
          if (typeof data.id !== "string") {
            validate67.errors = [{ instancePath: instancePath + "/id", schemaPath: "#/properties/id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
            return false;
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.status !== void 0) {
            let data1 = data.status;
            const _errs3 = errors;
            if (typeof data1 !== "string") {
              validate67.errors = [{ instancePath: instancePath + "/status", schemaPath: "#/properties/status/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            if (!(data1 === "changed" || data1 === "rejected")) {
              validate67.errors = [{ instancePath: instancePath + "/status", schemaPath: "#/properties/status/enum", keyword: "enum", params: { allowedValues: schema77.properties.status.enum }, message: "must be equal to one of the allowed values" }];
              return false;
            }
            var valid0 = _errs3 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.reason !== void 0) {
              let data2 = data.reason;
              const _errs5 = errors;
              if (typeof data2 !== "string") {
                validate67.errors = [{ instancePath: instancePath + "/reason", schemaPath: "#/properties/reason/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                return false;
              }
              if (!(data2 === "balance_changed" || data2 === "account_closed" || data2 === "authority_changed" || data2 === "frozen" || data2 === "protected_by_current_ruleset" || data2 === "unsupported_in_preview" || data2 === "over_wire_limit")) {
                validate67.errors = [{ instancePath: instancePath + "/reason", schemaPath: "#/properties/reason/enum", keyword: "enum", params: { allowedValues: schema77.properties.reason.enum }, message: "must be equal to one of the allowed values" }];
                return false;
              }
              var valid0 = _errs5 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.currentBalanceBaseUnits !== void 0) {
                let data3 = data.currentBalanceBaseUnits;
                const _errs7 = errors;
                const _errs8 = errors;
                if (errors === _errs8) {
                  if (typeof data3 === "string") {
                    if (!pattern9.test(data3)) {
                      validate67.errors = [{ instancePath: instancePath + "/currentBalanceBaseUnits", schemaPath: "#/components/schemas/IntegerString/pattern", keyword: "pattern", params: { pattern: "^[0-9]+$" }, message: 'must match pattern "^[0-9]+$"' }];
                      return false;
                    }
                  } else {
                    validate67.errors = [{ instancePath: instancePath + "/currentBalanceBaseUnits", schemaPath: "#/components/schemas/IntegerString/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                    return false;
                  }
                }
                var valid0 = _errs7 === errors;
              } else {
                var valid0 = true;
              }
            }
          }
        }
      }
    } else {
      validate67.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate67.errors = vErrors;
  return errors === 0;
}
validate67.evaluated = { "props": { "id": true, "status": true, "reason": true, "currentBalanceBaseUnits": true }, "dynamicProps": false, "dynamicItems": false };
var schema79 = { "type": "object", "required": ["scope", "oneTimeSetup", "estimatedNetworkFee", "nativeFundingRequired"], "properties": { "scope": { "type": "string", "enum": ["current_stage_total", "plan_total"] }, "oneTimeSetup": { "$ref": "#/components/schemas/Amount" }, "estimatedNetworkFee": { "$ref": "#/components/schemas/Amount" }, "nativeFundingRequired": { "$ref": "#/components/schemas/Amount" } } };
function validate69(data, { instancePath = "", parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {}) {
  let vErrors = null;
  let errors = 0;
  const evaluated0 = validate69.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = void 0;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = void 0;
  }
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.scope === void 0 && (missing0 = "scope") || data.oneTimeSetup === void 0 && (missing0 = "oneTimeSetup") || data.estimatedNetworkFee === void 0 && (missing0 = "estimatedNetworkFee") || data.nativeFundingRequired === void 0 && (missing0 = "nativeFundingRequired")) {
        validate69.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        if (data.scope !== void 0) {
          let data0 = data.scope;
          const _errs1 = errors;
          if (typeof data0 !== "string") {
            validate69.errors = [{ instancePath: instancePath + "/scope", schemaPath: "#/properties/scope/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
            return false;
          }
          if (!(data0 === "current_stage_total" || data0 === "plan_total")) {
            validate69.errors = [{ instancePath: instancePath + "/scope", schemaPath: "#/properties/scope/enum", keyword: "enum", params: { allowedValues: schema79.properties.scope.enum }, message: "must be equal to one of the allowed values" }];
            return false;
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.oneTimeSetup !== void 0) {
            const _errs3 = errors;
            if (!validate49(data.oneTimeSetup, { instancePath: instancePath + "/oneTimeSetup", parentData: data, parentDataProperty: "oneTimeSetup", rootData, dynamicAnchors })) {
              vErrors = vErrors === null ? validate49.errors : vErrors.concat(validate49.errors);
              errors = vErrors.length;
            }
            var valid0 = _errs3 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.estimatedNetworkFee !== void 0) {
              const _errs4 = errors;
              if (!validate49(data.estimatedNetworkFee, { instancePath: instancePath + "/estimatedNetworkFee", parentData: data, parentDataProperty: "estimatedNetworkFee", rootData, dynamicAnchors })) {
                vErrors = vErrors === null ? validate49.errors : vErrors.concat(validate49.errors);
                errors = vErrors.length;
              }
              var valid0 = _errs4 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.nativeFundingRequired !== void 0) {
                const _errs5 = errors;
                if (!validate49(data.nativeFundingRequired, { instancePath: instancePath + "/nativeFundingRequired", parentData: data, parentDataProperty: "nativeFundingRequired", rootData, dynamicAnchors })) {
                  vErrors = vErrors === null ? validate49.errors : vErrors.concat(validate49.errors);
                  errors = vErrors.length;
                }
                var valid0 = _errs5 === errors;
              } else {
                var valid0 = true;
              }
            }
          }
        }
      }
    } else {
      validate69.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate69.errors = vErrors;
  return errors === 0;
}
validate69.evaluated = { "props": { "scope": true, "oneTimeSetup": true, "estimatedNetworkFee": true, "nativeFundingRequired": true }, "dynamicProps": false, "dynamicItems": false };
var schema80 = { "type": "object", "required": ["currency", "calculatedAt", "inputs"], "properties": { "currency": { "type": "string", "enum": ["USD"] }, "calculatedAt": { "type": "string", "format": "date-time" }, "inputs": { "type": "array", "items": { "type": "object", "required": ["asset", "pricingMethod", "unitPriceUsd", "pricedAt", "maximumAgeSeconds"], "properties": { "asset": { "type": "string" }, "mint": { "$ref": "#/components/schemas/Base58" }, "pricingMethod": { "type": "string", "enum": ["market_quote", "fixed_parity"] }, "unitPriceUsd": { "$ref": "#/components/schemas/DecimalUsd" }, "pricedAt": { "type": "string", "format": "date-time" }, "maximumAgeSeconds": { "type": "integer" } } } } } };
function validate75(data, { instancePath = "", parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {}) {
  let vErrors = null;
  let errors = 0;
  const evaluated0 = validate75.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = void 0;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = void 0;
  }
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.currency === void 0 && (missing0 = "currency") || data.calculatedAt === void 0 && (missing0 = "calculatedAt") || data.inputs === void 0 && (missing0 = "inputs")) {
        validate75.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        if (data.currency !== void 0) {
          let data0 = data.currency;
          const _errs1 = errors;
          if (typeof data0 !== "string") {
            validate75.errors = [{ instancePath: instancePath + "/currency", schemaPath: "#/properties/currency/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
            return false;
          }
          if (!(data0 === "USD")) {
            validate75.errors = [{ instancePath: instancePath + "/currency", schemaPath: "#/properties/currency/enum", keyword: "enum", params: { allowedValues: schema80.properties.currency.enum }, message: "must be equal to one of the allowed values" }];
            return false;
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.calculatedAt !== void 0) {
            let data1 = data.calculatedAt;
            const _errs3 = errors;
            if (errors === _errs3) {
              if (errors === _errs3) {
                if (typeof data1 === "string") {
                  if (!formats0.validate.test(data1)) {
                    validate75.errors = [{ instancePath: instancePath + "/calculatedAt", schemaPath: "#/properties/calculatedAt/format", keyword: "format", params: { format: "date-time" }, message: 'must match format "date-time"' }];
                    return false;
                  }
                } else {
                  validate75.errors = [{ instancePath: instancePath + "/calculatedAt", schemaPath: "#/properties/calculatedAt/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                  return false;
                }
              }
            }
            var valid0 = _errs3 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.inputs !== void 0) {
              let data2 = data.inputs;
              const _errs5 = errors;
              if (errors === _errs5) {
                if (Array.isArray(data2)) {
                  var valid1 = true;
                  const len0 = data2.length;
                  for (let i0 = 0; i0 < len0; i0++) {
                    let data3 = data2[i0];
                    const _errs7 = errors;
                    if (errors === _errs7) {
                      if (data3 && typeof data3 == "object" && !Array.isArray(data3)) {
                        let missing1;
                        if (data3.asset === void 0 && (missing1 = "asset") || data3.pricingMethod === void 0 && (missing1 = "pricingMethod") || data3.unitPriceUsd === void 0 && (missing1 = "unitPriceUsd") || data3.pricedAt === void 0 && (missing1 = "pricedAt") || data3.maximumAgeSeconds === void 0 && (missing1 = "maximumAgeSeconds")) {
                          validate75.errors = [{ instancePath: instancePath + "/inputs/" + i0, schemaPath: "#/properties/inputs/items/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" }];
                          return false;
                        } else {
                          if (data3.asset !== void 0) {
                            const _errs9 = errors;
                            if (typeof data3.asset !== "string") {
                              validate75.errors = [{ instancePath: instancePath + "/inputs/" + i0 + "/asset", schemaPath: "#/properties/inputs/items/properties/asset/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                              return false;
                            }
                            var valid2 = _errs9 === errors;
                          } else {
                            var valid2 = true;
                          }
                          if (valid2) {
                            if (data3.mint !== void 0) {
                              let data5 = data3.mint;
                              const _errs11 = errors;
                              const _errs12 = errors;
                              if (errors === _errs12) {
                                if (typeof data5 === "string") {
                                  if (!pattern4.test(data5)) {
                                    validate75.errors = [{ instancePath: instancePath + "/inputs/" + i0 + "/mint", schemaPath: "#/components/schemas/Base58/pattern", keyword: "pattern", params: { pattern: "^[1-9A-HJ-NP-Za-km-z]{32,44}$" }, message: 'must match pattern "^[1-9A-HJ-NP-Za-km-z]{32,44}$"' }];
                                    return false;
                                  }
                                } else {
                                  validate75.errors = [{ instancePath: instancePath + "/inputs/" + i0 + "/mint", schemaPath: "#/components/schemas/Base58/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                  return false;
                                }
                              }
                              var valid2 = _errs11 === errors;
                            } else {
                              var valid2 = true;
                            }
                            if (valid2) {
                              if (data3.pricingMethod !== void 0) {
                                let data6 = data3.pricingMethod;
                                const _errs14 = errors;
                                if (typeof data6 !== "string") {
                                  validate75.errors = [{ instancePath: instancePath + "/inputs/" + i0 + "/pricingMethod", schemaPath: "#/properties/inputs/items/properties/pricingMethod/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                  return false;
                                }
                                if (!(data6 === "market_quote" || data6 === "fixed_parity")) {
                                  validate75.errors = [{ instancePath: instancePath + "/inputs/" + i0 + "/pricingMethod", schemaPath: "#/properties/inputs/items/properties/pricingMethod/enum", keyword: "enum", params: { allowedValues: schema80.properties.inputs.items.properties.pricingMethod.enum }, message: "must be equal to one of the allowed values" }];
                                  return false;
                                }
                                var valid2 = _errs14 === errors;
                              } else {
                                var valid2 = true;
                              }
                              if (valid2) {
                                if (data3.unitPriceUsd !== void 0) {
                                  let data7 = data3.unitPriceUsd;
                                  const _errs16 = errors;
                                  const _errs17 = errors;
                                  if (errors === _errs17) {
                                    if (typeof data7 === "string") {
                                      if (!pattern17.test(data7)) {
                                        validate75.errors = [{ instancePath: instancePath + "/inputs/" + i0 + "/unitPriceUsd", schemaPath: "#/components/schemas/DecimalUsd/pattern", keyword: "pattern", params: { pattern: "^[0-9]+\\.[0-9]{6}$" }, message: 'must match pattern "^[0-9]+\\.[0-9]{6}$"' }];
                                        return false;
                                      }
                                    } else {
                                      validate75.errors = [{ instancePath: instancePath + "/inputs/" + i0 + "/unitPriceUsd", schemaPath: "#/components/schemas/DecimalUsd/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                      return false;
                                    }
                                  }
                                  var valid2 = _errs16 === errors;
                                } else {
                                  var valid2 = true;
                                }
                                if (valid2) {
                                  if (data3.pricedAt !== void 0) {
                                    let data8 = data3.pricedAt;
                                    const _errs19 = errors;
                                    if (errors === _errs19) {
                                      if (errors === _errs19) {
                                        if (typeof data8 === "string") {
                                          if (!formats0.validate.test(data8)) {
                                            validate75.errors = [{ instancePath: instancePath + "/inputs/" + i0 + "/pricedAt", schemaPath: "#/properties/inputs/items/properties/pricedAt/format", keyword: "format", params: { format: "date-time" }, message: 'must match format "date-time"' }];
                                            return false;
                                          }
                                        } else {
                                          validate75.errors = [{ instancePath: instancePath + "/inputs/" + i0 + "/pricedAt", schemaPath: "#/properties/inputs/items/properties/pricedAt/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                          return false;
                                        }
                                      }
                                    }
                                    var valid2 = _errs19 === errors;
                                  } else {
                                    var valid2 = true;
                                  }
                                  if (valid2) {
                                    if (data3.maximumAgeSeconds !== void 0) {
                                      let data9 = data3.maximumAgeSeconds;
                                      const _errs21 = errors;
                                      if (!(typeof data9 == "number" && (!(data9 % 1) && !isNaN(data9)))) {
                                        validate75.errors = [{ instancePath: instancePath + "/inputs/" + i0 + "/maximumAgeSeconds", schemaPath: "#/properties/inputs/items/properties/maximumAgeSeconds/type", keyword: "type", params: { type: "integer" }, message: "must be integer" }];
                                        return false;
                                      }
                                      var valid2 = _errs21 === errors;
                                    } else {
                                      var valid2 = true;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      } else {
                        validate75.errors = [{ instancePath: instancePath + "/inputs/" + i0, schemaPath: "#/properties/inputs/items/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                        return false;
                      }
                    }
                    var valid1 = _errs7 === errors;
                    if (!valid1) {
                      break;
                    }
                  }
                } else {
                  validate75.errors = [{ instancePath: instancePath + "/inputs", schemaPath: "#/properties/inputs/type", keyword: "type", params: { type: "array" }, message: "must be array" }];
                  return false;
                }
              }
              var valid0 = _errs5 === errors;
            } else {
              var valid0 = true;
            }
          }
        }
      }
    } else {
      validate75.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate75.errors = vErrors;
  return errors === 0;
}
validate75.evaluated = { "props": { "currency": true, "calculatedAt": true, "inputs": true }, "dynamicProps": false, "dynamicItems": false };
function validate48(data, { instancePath = "", parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {}) {
  let vErrors = null;
  let errors = 0;
  const evaluated0 = validate48.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = void 0;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = void 0;
  }
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.requestId === void 0 && (missing0 = "requestId") || data.analysisRequestId === void 0 && (missing0 = "analysisRequestId") || data.apiVersion === void 0 && (missing0 = "apiVersion") || data.analysisRulesetVersion === void 0 && (missing0 = "analysisRulesetVersion") || data.rulesetVersion === void 0 && (missing0 = "rulesetVersion") || data.builtAt === void 0 && (missing0 = "builtAt") || data.transactions === void 0 && (missing0 = "transactions") || data.items === void 0 && (missing0 = "items") || data.plan === void 0 && (missing0 = "plan") || data.executionReceipt === void 0 && (missing0 = "executionReceipt") || data.warnings === void 0 && (missing0 = "warnings")) {
        validate48.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        if (data.requestId !== void 0) {
          const _errs1 = errors;
          if (typeof data.requestId !== "string") {
            validate48.errors = [{ instancePath: instancePath + "/requestId", schemaPath: "#/properties/requestId/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
            return false;
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.analysisRequestId !== void 0) {
            const _errs3 = errors;
            if (typeof data.analysisRequestId !== "string") {
              validate48.errors = [{ instancePath: instancePath + "/analysisRequestId", schemaPath: "#/properties/analysisRequestId/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            var valid0 = _errs3 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.apiVersion !== void 0) {
              let data2 = data.apiVersion;
              const _errs5 = errors;
              if (typeof data2 !== "string") {
                validate48.errors = [{ instancePath: instancePath + "/apiVersion", schemaPath: "#/properties/apiVersion/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                return false;
              }
              if (!(data2 === "v1-preview")) {
                validate48.errors = [{ instancePath: instancePath + "/apiVersion", schemaPath: "#/properties/apiVersion/enum", keyword: "enum", params: { allowedValues: schema66.properties.apiVersion.enum }, message: "must be equal to one of the allowed values" }];
                return false;
              }
              var valid0 = _errs5 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.analysisRulesetVersion !== void 0) {
                const _errs7 = errors;
                if (typeof data.analysisRulesetVersion !== "string") {
                  validate48.errors = [{ instancePath: instancePath + "/analysisRulesetVersion", schemaPath: "#/properties/analysisRulesetVersion/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                  return false;
                }
                var valid0 = _errs7 === errors;
              } else {
                var valid0 = true;
              }
              if (valid0) {
                if (data.rulesetVersion !== void 0) {
                  const _errs9 = errors;
                  if (typeof data.rulesetVersion !== "string") {
                    validate48.errors = [{ instancePath: instancePath + "/rulesetVersion", schemaPath: "#/properties/rulesetVersion/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                    return false;
                  }
                  var valid0 = _errs9 === errors;
                } else {
                  var valid0 = true;
                }
                if (valid0) {
                  if (data.builtAt !== void 0) {
                    let data5 = data.builtAt;
                    const _errs11 = errors;
                    if (errors === _errs11) {
                      if (errors === _errs11) {
                        if (typeof data5 === "string") {
                          if (!formats0.validate.test(data5)) {
                            validate48.errors = [{ instancePath: instancePath + "/builtAt", schemaPath: "#/properties/builtAt/format", keyword: "format", params: { format: "date-time" }, message: 'must match format "date-time"' }];
                            return false;
                          }
                        } else {
                          validate48.errors = [{ instancePath: instancePath + "/builtAt", schemaPath: "#/properties/builtAt/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                          return false;
                        }
                      }
                    }
                    var valid0 = _errs11 === errors;
                  } else {
                    var valid0 = true;
                  }
                  if (valid0) {
                    if (data.transactions !== void 0) {
                      let data6 = data.transactions;
                      const _errs13 = errors;
                      if (errors === _errs13) {
                        if (Array.isArray(data6)) {
                          if (data6.length > 20) {
                            validate48.errors = [{ instancePath: instancePath + "/transactions", schemaPath: "#/properties/transactions/maxItems", keyword: "maxItems", params: { limit: 20 }, message: "must NOT have more than 20 items" }];
                            return false;
                          } else {
                            var valid1 = true;
                            const len0 = data6.length;
                            for (let i0 = 0; i0 < len0; i0++) {
                              let data7 = data6[i0];
                              const _errs15 = errors;
                              if (errors === _errs15) {
                                if (data7 && typeof data7 == "object" && !Array.isArray(data7)) {
                                  let missing1;
                                  if (data7.id === void 0 && (missing1 = "id") || data7.itemIds === void 0 && (missing1 = "itemIds") || data7.format === void 0 && (missing1 = "format") || data7.submission === void 0 && (missing1 = "submission") || data7.unsignedTransaction === void 0 && (missing1 = "unsignedTransaction") || data7.lastValidBlockHeight === void 0 && (missing1 = "lastValidBlockHeight") || data7.estimatedNetworkFee === void 0 && (missing1 = "estimatedNetworkFee")) {
                                    validate48.errors = [{ instancePath: instancePath + "/transactions/" + i0, schemaPath: "#/properties/transactions/items/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" }];
                                    return false;
                                  } else {
                                    if (data7.id !== void 0) {
                                      const _errs17 = errors;
                                      if (typeof data7.id !== "string") {
                                        validate48.errors = [{ instancePath: instancePath + "/transactions/" + i0 + "/id", schemaPath: "#/properties/transactions/items/properties/id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                        return false;
                                      }
                                      var valid2 = _errs17 === errors;
                                    } else {
                                      var valid2 = true;
                                    }
                                    if (valid2) {
                                      if (data7.itemIds !== void 0) {
                                        let data9 = data7.itemIds;
                                        const _errs19 = errors;
                                        if (errors === _errs19) {
                                          if (Array.isArray(data9)) {
                                            var valid3 = true;
                                            const len1 = data9.length;
                                            for (let i1 = 0; i1 < len1; i1++) {
                                              const _errs21 = errors;
                                              if (typeof data9[i1] !== "string") {
                                                validate48.errors = [{ instancePath: instancePath + "/transactions/" + i0 + "/itemIds/" + i1, schemaPath: "#/properties/transactions/items/properties/itemIds/items/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                                return false;
                                              }
                                              var valid3 = _errs21 === errors;
                                              if (!valid3) {
                                                break;
                                              }
                                            }
                                          } else {
                                            validate48.errors = [{ instancePath: instancePath + "/transactions/" + i0 + "/itemIds", schemaPath: "#/properties/transactions/items/properties/itemIds/type", keyword: "type", params: { type: "array" }, message: "must be array" }];
                                            return false;
                                          }
                                        }
                                        var valid2 = _errs19 === errors;
                                      } else {
                                        var valid2 = true;
                                      }
                                      if (valid2) {
                                        if (data7.format !== void 0) {
                                          let data11 = data7.format;
                                          const _errs23 = errors;
                                          if (typeof data11 !== "string") {
                                            validate48.errors = [{ instancePath: instancePath + "/transactions/" + i0 + "/format", schemaPath: "#/properties/transactions/items/properties/format/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                            return false;
                                          }
                                          if (!(data11 === "solana_legacy_base64")) {
                                            validate48.errors = [{ instancePath: instancePath + "/transactions/" + i0 + "/format", schemaPath: "#/properties/transactions/items/properties/format/enum", keyword: "enum", params: { allowedValues: schema66.properties.transactions.items.properties.format.enum }, message: "must be equal to one of the allowed values" }];
                                            return false;
                                          }
                                          var valid2 = _errs23 === errors;
                                        } else {
                                          var valid2 = true;
                                        }
                                        if (valid2) {
                                          if (data7.submission !== void 0) {
                                            let data12 = data7.submission;
                                            const _errs25 = errors;
                                            if (typeof data12 !== "string") {
                                              validate48.errors = [{ instancePath: instancePath + "/transactions/" + i0 + "/submission", schemaPath: "#/properties/transactions/items/properties/submission/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                              return false;
                                            }
                                            if (!(data12 === "direct_solana")) {
                                              validate48.errors = [{ instancePath: instancePath + "/transactions/" + i0 + "/submission", schemaPath: "#/properties/transactions/items/properties/submission/enum", keyword: "enum", params: { allowedValues: schema66.properties.transactions.items.properties.submission.enum }, message: "must be equal to one of the allowed values" }];
                                              return false;
                                            }
                                            var valid2 = _errs25 === errors;
                                          } else {
                                            var valid2 = true;
                                          }
                                          if (valid2) {
                                            if (data7.unsignedTransaction !== void 0) {
                                              const _errs27 = errors;
                                              if (typeof data7.unsignedTransaction !== "string") {
                                                validate48.errors = [{ instancePath: instancePath + "/transactions/" + i0 + "/unsignedTransaction", schemaPath: "#/properties/transactions/items/properties/unsignedTransaction/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                                return false;
                                              }
                                              var valid2 = _errs27 === errors;
                                            } else {
                                              var valid2 = true;
                                            }
                                            if (valid2) {
                                              if (data7.lastValidBlockHeight !== void 0) {
                                                let data14 = data7.lastValidBlockHeight;
                                                const _errs29 = errors;
                                                const _errs30 = errors;
                                                if (errors === _errs30) {
                                                  if (typeof data14 === "string") {
                                                    if (!pattern9.test(data14)) {
                                                      validate48.errors = [{ instancePath: instancePath + "/transactions/" + i0 + "/lastValidBlockHeight", schemaPath: "#/components/schemas/IntegerString/pattern", keyword: "pattern", params: { pattern: "^[0-9]+$" }, message: 'must match pattern "^[0-9]+$"' }];
                                                      return false;
                                                    }
                                                  } else {
                                                    validate48.errors = [{ instancePath: instancePath + "/transactions/" + i0 + "/lastValidBlockHeight", schemaPath: "#/components/schemas/IntegerString/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                                    return false;
                                                  }
                                                }
                                                var valid2 = _errs29 === errors;
                                              } else {
                                                var valid2 = true;
                                              }
                                              if (valid2) {
                                                if (data7.estimatedNetworkFee !== void 0) {
                                                  const _errs32 = errors;
                                                  if (!validate49(data7.estimatedNetworkFee, { instancePath: instancePath + "/transactions/" + i0 + "/estimatedNetworkFee", parentData: data7, parentDataProperty: "estimatedNetworkFee", rootData, dynamicAnchors })) {
                                                    vErrors = vErrors === null ? validate49.errors : vErrors.concat(validate49.errors);
                                                    errors = vErrors.length;
                                                  }
                                                  var valid2 = _errs32 === errors;
                                                } else {
                                                  var valid2 = true;
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                } else {
                                  validate48.errors = [{ instancePath: instancePath + "/transactions/" + i0, schemaPath: "#/properties/transactions/items/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                                  return false;
                                }
                              }
                              var valid1 = _errs15 === errors;
                              if (!valid1) {
                                break;
                              }
                            }
                          }
                        } else {
                          validate48.errors = [{ instancePath: instancePath + "/transactions", schemaPath: "#/properties/transactions/type", keyword: "type", params: { type: "array" }, message: "must be array" }];
                          return false;
                        }
                      }
                      var valid0 = _errs13 === errors;
                    } else {
                      var valid0 = true;
                    }
                    if (valid0) {
                      if (data.items !== void 0) {
                        let data16 = data.items;
                        const _errs33 = errors;
                        if (errors === _errs33) {
                          if (Array.isArray(data16)) {
                            var valid5 = true;
                            const len2 = data16.length;
                            for (let i2 = 0; i2 < len2; i2++) {
                              let data17 = data16[i2];
                              const _errs35 = errors;
                              const _errs36 = errors;
                              let valid6 = false;
                              let passing0 = null;
                              const _errs37 = errors;
                              if (!validate51(data17, { instancePath: instancePath + "/items/" + i2, parentData: data16, parentDataProperty: i2, rootData, dynamicAnchors })) {
                                vErrors = vErrors === null ? validate51.errors : vErrors.concat(validate51.errors);
                                errors = vErrors.length;
                              }
                              var _valid0 = _errs37 === errors;
                              if (_valid0) {
                                valid6 = true;
                                passing0 = 0;
                                var props0 = {};
                                props0.id = true;
                                props0.status = true;
                                props0.authoritativeOpportunity = true;
                              }
                              const _errs38 = errors;
                              if (!validate67(data17, { instancePath: instancePath + "/items/" + i2, parentData: data16, parentDataProperty: i2, rootData, dynamicAnchors })) {
                                vErrors = vErrors === null ? validate67.errors : vErrors.concat(validate67.errors);
                                errors = vErrors.length;
                              }
                              var _valid0 = _errs38 === errors;
                              if (_valid0 && valid6) {
                                valid6 = false;
                                passing0 = [passing0, 1];
                              } else {
                                if (_valid0) {
                                  valid6 = true;
                                  passing0 = 1;
                                  if (props0 !== true) {
                                    props0 = props0 || {};
                                    props0.id = true;
                                    props0.status = true;
                                    props0.reason = true;
                                    props0.currentBalanceBaseUnits = true;
                                  }
                                }
                              }
                              if (!valid6) {
                                const err0 = { instancePath: instancePath + "/items/" + i2, schemaPath: "#/properties/items/items/oneOf", keyword: "oneOf", params: { passingSchemas: passing0 }, message: "must match exactly one schema in oneOf" };
                                if (vErrors === null) {
                                  vErrors = [err0];
                                } else {
                                  vErrors.push(err0);
                                }
                                errors++;
                                validate48.errors = vErrors;
                                return false;
                              } else {
                                errors = _errs36;
                                if (vErrors !== null) {
                                  if (_errs36) {
                                    vErrors.length = _errs36;
                                  } else {
                                    vErrors = null;
                                  }
                                }
                              }
                              var valid5 = _errs35 === errors;
                              if (!valid5) {
                                break;
                              }
                            }
                          } else {
                            validate48.errors = [{ instancePath: instancePath + "/items", schemaPath: "#/properties/items/type", keyword: "type", params: { type: "array" }, message: "must be array" }];
                            return false;
                          }
                        }
                        var valid0 = _errs33 === errors;
                      } else {
                        var valid0 = true;
                      }
                      if (valid0) {
                        if (data.plan !== void 0) {
                          let data18 = data.plan;
                          const _errs39 = errors;
                          if (errors === _errs39) {
                            if (data18 && typeof data18 == "object" && !Array.isArray(data18)) {
                              let missing2;
                              if (data18.transactionCount === void 0 && (missing2 = "transactionCount") || data18.estimatedTotalTransactionCount === void 0 && (missing2 = "estimatedTotalTransactionCount") || data18.currentStageCosts === void 0 && (missing2 = "currentStageCosts") || data18.costs === void 0 && (missing2 = "costs") || data18.estimatedNetValueUsd === void 0 && (missing2 = "estimatedNetValueUsd") || data18.valuation === void 0 && (missing2 = "valuation")) {
                                validate48.errors = [{ instancePath: instancePath + "/plan", schemaPath: "#/properties/plan/required", keyword: "required", params: { missingProperty: missing2 }, message: "must have required property '" + missing2 + "'" }];
                                return false;
                              } else {
                                if (data18.transactionCount !== void 0) {
                                  let data19 = data18.transactionCount;
                                  const _errs41 = errors;
                                  if (!(typeof data19 == "number" && (!(data19 % 1) && !isNaN(data19)))) {
                                    validate48.errors = [{ instancePath: instancePath + "/plan/transactionCount", schemaPath: "#/properties/plan/properties/transactionCount/type", keyword: "type", params: { type: "integer" }, message: "must be integer" }];
                                    return false;
                                  }
                                  var valid7 = _errs41 === errors;
                                } else {
                                  var valid7 = true;
                                }
                                if (valid7) {
                                  if (data18.estimatedTotalTransactionCount !== void 0) {
                                    let data20 = data18.estimatedTotalTransactionCount;
                                    const _errs43 = errors;
                                    if (!(typeof data20 == "number" && (!(data20 % 1) && !isNaN(data20)))) {
                                      validate48.errors = [{ instancePath: instancePath + "/plan/estimatedTotalTransactionCount", schemaPath: "#/properties/plan/properties/estimatedTotalTransactionCount/type", keyword: "type", params: { type: "integer" }, message: "must be integer" }];
                                      return false;
                                    }
                                    var valid7 = _errs43 === errors;
                                  } else {
                                    var valid7 = true;
                                  }
                                  if (valid7) {
                                    if (data18.currentStageCosts !== void 0) {
                                      const _errs45 = errors;
                                      if (!validate69(data18.currentStageCosts, { instancePath: instancePath + "/plan/currentStageCosts", parentData: data18, parentDataProperty: "currentStageCosts", rootData, dynamicAnchors })) {
                                        vErrors = vErrors === null ? validate69.errors : vErrors.concat(validate69.errors);
                                        errors = vErrors.length;
                                      }
                                      var valid7 = _errs45 === errors;
                                    } else {
                                      var valid7 = true;
                                    }
                                    if (valid7) {
                                      if (data18.costs !== void 0) {
                                        const _errs46 = errors;
                                        if (!validate69(data18.costs, { instancePath: instancePath + "/plan/costs", parentData: data18, parentDataProperty: "costs", rootData, dynamicAnchors })) {
                                          vErrors = vErrors === null ? validate69.errors : vErrors.concat(validate69.errors);
                                          errors = vErrors.length;
                                        }
                                        var valid7 = _errs46 === errors;
                                      } else {
                                        var valid7 = true;
                                      }
                                      if (valid7) {
                                        if (data18.estimatedNetValueUsd !== void 0) {
                                          let data23 = data18.estimatedNetValueUsd;
                                          const _errs47 = errors;
                                          if (typeof data23 !== "string" && data23 !== null) {
                                            validate48.errors = [{ instancePath: instancePath + "/plan/estimatedNetValueUsd", schemaPath: "#/properties/plan/properties/estimatedNetValueUsd/type", keyword: "type", params: { type: schema66.properties.plan.properties.estimatedNetValueUsd.type }, message: "must be string,null" }];
                                            return false;
                                          }
                                          var valid7 = _errs47 === errors;
                                        } else {
                                          var valid7 = true;
                                        }
                                        if (valid7) {
                                          if (data18.valuation !== void 0) {
                                            let data24 = data18.valuation;
                                            const _errs49 = errors;
                                            const _errs50 = errors;
                                            let valid8 = false;
                                            let passing1 = null;
                                            const _errs51 = errors;
                                            if (data24 !== null) {
                                              const err1 = { instancePath: instancePath + "/plan/valuation", schemaPath: "#/properties/plan/properties/valuation/oneOf/0/type", keyword: "type", params: { type: "null" }, message: "must be null" };
                                              if (vErrors === null) {
                                                vErrors = [err1];
                                              } else {
                                                vErrors.push(err1);
                                              }
                                              errors++;
                                            }
                                            var _valid1 = _errs51 === errors;
                                            if (_valid1) {
                                              valid8 = true;
                                              passing1 = 0;
                                            }
                                            const _errs53 = errors;
                                            if (!validate75(data24, { instancePath: instancePath + "/plan/valuation", parentData: data18, parentDataProperty: "valuation", rootData, dynamicAnchors })) {
                                              vErrors = vErrors === null ? validate75.errors : vErrors.concat(validate75.errors);
                                              errors = vErrors.length;
                                            }
                                            var _valid1 = _errs53 === errors;
                                            if (_valid1 && valid8) {
                                              valid8 = false;
                                              passing1 = [passing1, 1];
                                            } else {
                                              if (_valid1) {
                                                valid8 = true;
                                                passing1 = 1;
                                                var props1 = {};
                                                props1.currency = true;
                                                props1.calculatedAt = true;
                                                props1.inputs = true;
                                              }
                                            }
                                            if (!valid8) {
                                              const err2 = { instancePath: instancePath + "/plan/valuation", schemaPath: "#/properties/plan/properties/valuation/oneOf", keyword: "oneOf", params: { passingSchemas: passing1 }, message: "must match exactly one schema in oneOf" };
                                              if (vErrors === null) {
                                                vErrors = [err2];
                                              } else {
                                                vErrors.push(err2);
                                              }
                                              errors++;
                                              validate48.errors = vErrors;
                                              return false;
                                            } else {
                                              errors = _errs50;
                                              if (vErrors !== null) {
                                                if (_errs50) {
                                                  vErrors.length = _errs50;
                                                } else {
                                                  vErrors = null;
                                                }
                                              }
                                            }
                                            var valid7 = _errs49 === errors;
                                          } else {
                                            var valid7 = true;
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            } else {
                              validate48.errors = [{ instancePath: instancePath + "/plan", schemaPath: "#/properties/plan/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                              return false;
                            }
                          }
                          var valid0 = _errs39 === errors;
                        } else {
                          var valid0 = true;
                        }
                        if (valid0) {
                          if (data.executionReceipt !== void 0) {
                            let data25 = data.executionReceipt;
                            const _errs54 = errors;
                            const _errs55 = errors;
                            let valid9 = false;
                            let passing2 = null;
                            const _errs56 = errors;
                            if (data25 !== null) {
                              const err3 = { instancePath: instancePath + "/executionReceipt", schemaPath: "#/properties/executionReceipt/oneOf/0/type", keyword: "type", params: { type: "null" }, message: "must be null" };
                              if (vErrors === null) {
                                vErrors = [err3];
                              } else {
                                vErrors.push(err3);
                              }
                              errors++;
                            }
                            var _valid2 = _errs56 === errors;
                            if (_valid2) {
                              valid9 = true;
                              passing2 = 0;
                            }
                            const _errs58 = errors;
                            if (errors === _errs58) {
                              if (data25 && typeof data25 == "object" && !Array.isArray(data25)) {
                                let missing3;
                                if (data25.token === void 0 && (missing3 = "token") || data25.expiresAt === void 0 && (missing3 = "expiresAt") || data25.partnerAttribution === void 0 && (missing3 = "partnerAttribution")) {
                                  const err4 = { instancePath: instancePath + "/executionReceipt", schemaPath: "#/properties/executionReceipt/oneOf/1/required", keyword: "required", params: { missingProperty: missing3 }, message: "must have required property '" + missing3 + "'" };
                                  if (vErrors === null) {
                                    vErrors = [err4];
                                  } else {
                                    vErrors.push(err4);
                                  }
                                  errors++;
                                } else {
                                  if (data25.token !== void 0) {
                                    const _errs60 = errors;
                                    if (typeof data25.token !== "string") {
                                      const err5 = { instancePath: instancePath + "/executionReceipt/token", schemaPath: "#/properties/executionReceipt/oneOf/1/properties/token/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                                      if (vErrors === null) {
                                        vErrors = [err5];
                                      } else {
                                        vErrors.push(err5);
                                      }
                                      errors++;
                                    }
                                    var valid10 = _errs60 === errors;
                                  } else {
                                    var valid10 = true;
                                  }
                                  if (valid10) {
                                    if (data25.expiresAt !== void 0) {
                                      let data27 = data25.expiresAt;
                                      const _errs62 = errors;
                                      if (errors === _errs62) {
                                        if (errors === _errs62) {
                                          if (typeof data27 === "string") {
                                            if (!formats0.validate.test(data27)) {
                                              const err6 = { instancePath: instancePath + "/executionReceipt/expiresAt", schemaPath: "#/properties/executionReceipt/oneOf/1/properties/expiresAt/format", keyword: "format", params: { format: "date-time" }, message: 'must match format "date-time"' };
                                              if (vErrors === null) {
                                                vErrors = [err6];
                                              } else {
                                                vErrors.push(err6);
                                              }
                                              errors++;
                                            }
                                          } else {
                                            const err7 = { instancePath: instancePath + "/executionReceipt/expiresAt", schemaPath: "#/properties/executionReceipt/oneOf/1/properties/expiresAt/type", keyword: "type", params: { type: "string" }, message: "must be string" };
                                            if (vErrors === null) {
                                              vErrors = [err7];
                                            } else {
                                              vErrors.push(err7);
                                            }
                                            errors++;
                                          }
                                        }
                                      }
                                      var valid10 = _errs62 === errors;
                                    } else {
                                      var valid10 = true;
                                    }
                                    if (valid10) {
                                      if (data25.partnerAttribution !== void 0) {
                                        let data28 = data25.partnerAttribution;
                                        const _errs64 = errors;
                                        if (typeof data28 !== "boolean") {
                                          const err8 = { instancePath: instancePath + "/executionReceipt/partnerAttribution", schemaPath: "#/properties/executionReceipt/oneOf/1/properties/partnerAttribution/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" };
                                          if (vErrors === null) {
                                            vErrors = [err8];
                                          } else {
                                            vErrors.push(err8);
                                          }
                                          errors++;
                                        }
                                        if (!(data28 === false)) {
                                          const err9 = { instancePath: instancePath + "/executionReceipt/partnerAttribution", schemaPath: "#/properties/executionReceipt/oneOf/1/properties/partnerAttribution/enum", keyword: "enum", params: { allowedValues: schema66.properties.executionReceipt.oneOf[1].properties.partnerAttribution.enum }, message: "must be equal to one of the allowed values" };
                                          if (vErrors === null) {
                                            vErrors = [err9];
                                          } else {
                                            vErrors.push(err9);
                                          }
                                          errors++;
                                        }
                                        var valid10 = _errs64 === errors;
                                      } else {
                                        var valid10 = true;
                                      }
                                    }
                                  }
                                }
                              } else {
                                const err10 = { instancePath: instancePath + "/executionReceipt", schemaPath: "#/properties/executionReceipt/oneOf/1/type", keyword: "type", params: { type: "object" }, message: "must be object" };
                                if (vErrors === null) {
                                  vErrors = [err10];
                                } else {
                                  vErrors.push(err10);
                                }
                                errors++;
                              }
                            }
                            var _valid2 = _errs58 === errors;
                            if (_valid2 && valid9) {
                              valid9 = false;
                              passing2 = [passing2, 1];
                            } else {
                              if (_valid2) {
                                valid9 = true;
                                passing2 = 1;
                                var props2 = {};
                                props2.token = true;
                                props2.expiresAt = true;
                                props2.partnerAttribution = true;
                              }
                            }
                            if (!valid9) {
                              const err11 = { instancePath: instancePath + "/executionReceipt", schemaPath: "#/properties/executionReceipt/oneOf", keyword: "oneOf", params: { passingSchemas: passing2 }, message: "must match exactly one schema in oneOf" };
                              if (vErrors === null) {
                                vErrors = [err11];
                              } else {
                                vErrors.push(err11);
                              }
                              errors++;
                              validate48.errors = vErrors;
                              return false;
                            } else {
                              errors = _errs55;
                              if (vErrors !== null) {
                                if (_errs55) {
                                  vErrors.length = _errs55;
                                } else {
                                  vErrors = null;
                                }
                              }
                            }
                            var valid0 = _errs54 === errors;
                          } else {
                            var valid0 = true;
                          }
                          if (valid0) {
                            if (data.warnings !== void 0) {
                              let data29 = data.warnings;
                              const _errs66 = errors;
                              if (errors === _errs66) {
                                if (Array.isArray(data29)) {
                                  var valid11 = true;
                                  const len3 = data29.length;
                                  for (let i3 = 0; i3 < len3; i3++) {
                                    const _errs68 = errors;
                                    if (typeof data29[i3] !== "string") {
                                      validate48.errors = [{ instancePath: instancePath + "/warnings/" + i3, schemaPath: "#/properties/warnings/items/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                      return false;
                                    }
                                    var valid11 = _errs68 === errors;
                                    if (!valid11) {
                                      break;
                                    }
                                  }
                                } else {
                                  validate48.errors = [{ instancePath: instancePath + "/warnings", schemaPath: "#/properties/warnings/type", keyword: "type", params: { type: "array" }, message: "must be array" }];
                                  return false;
                                }
                              }
                              var valid0 = _errs66 === errors;
                            } else {
                              var valid0 = true;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    } else {
      validate48.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate48.errors = vErrors;
  return errors === 0;
}
validate48.evaluated = { "props": { "requestId": true, "analysisRequestId": true, "apiVersion": true, "analysisRulesetVersion": true, "rulesetVersion": true, "builtAt": true, "transactions": true, "items": true, "plan": true, "executionReceipt": true, "warnings": true }, "dynamicProps": false, "dynamicItems": false };
function validate47(data, { instancePath = "", parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  const evaluated0 = validate47.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = void 0;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = void 0;
  }
  if (!validate48(data, { instancePath, parentData, parentDataProperty, rootData, dynamicAnchors })) {
    vErrors = vErrors === null ? validate48.errors : vErrors.concat(validate48.errors);
    errors = vErrors.length;
  }
  validate47.errors = vErrors;
  return errors === 0;
}
validate47.evaluated = { "props": { "requestId": true, "analysisRequestId": true, "apiVersion": true, "analysisRulesetVersion": true, "rulesetVersion": true, "builtAt": true, "transactions": true, "items": true, "plan": true, "executionReceipt": true, "warnings": true }, "dynamicProps": false, "dynamicItems": false };
var validateRecord = validate78;
var schema84 = { "type": "object", "required": ["requestId", "receiptId", "terminal", "transactions", "items"], "properties": { "requestId": { "type": "string" }, "receiptId": { "type": "string" }, "terminal": { "type": "boolean", "description": "True on 200", "false on 202.": null }, "transactions": { "type": "array", "items": { "type": "object", "required": ["id", "outcome"], "properties": { "id": { "type": "string" }, "signature": { "type": ["string", "null"] }, "outcome": { "type": "string", "enum": ["verified_success", "verified_failure", "pending", "unknown", "duplicate", "not_signed_pending_expiry", "abandoned_unknown"] }, "landedSlot": { "type": ["integer", "null"] } } } }, "items": { "type": "array", "items": { "type": "object", "required": ["id", "transactionId", "outcome", "creditPurpose", "creditState"], "properties": { "id": { "type": "string" }, "transactionId": { "type": "string" }, "outcome": { "type": "string", "enum": ["verified_applied", "verified_not_applied", "verified_failed", "pending", "unknown", "abandoned_unknown"] }, "creditPurpose": { "type": ["string", "null"], "enum": ["api_execution", "website_cashback", "partner_credit", null], "description": "Which purpose holds the canonical reservation for this\nitem's signature, or null while no signature exists\n(`not_signed`, `not_signed_pending_expiry`,\n`abandoned_unknown`) or no reservation has been made yet.\n`api_execution` is the normal preview value and creates no\ncredit. `website_cashback` or `partner_credit` means that\nprogram reserved the signature before this record arrived;\nthe execution outcome is still verified and recorded here,\nand no second credit is applied. Independent of `outcome`.\n" }, "creditState": { "type": ["string", "null"], "enum": ["reserved", "held", "published", null], "description": "`reserved` means the purpose holder claimed the signature;\n`held` means a legacy claim without ledger evidence that is\nawaiting Admin reconciliation; `published` means the holder\ncommitted its ledger entry. Neither `reserved` nor `held`\nis proof of payment. Null whenever `creditPurpose` is null.\n" }, "recovered": { "$ref": "#/components/schemas/Amount", "description": "Present only for `verified_applied`. Net to the wallet after the service fee, derived from on-chain state, never from client input." }, "serviceFee": { "$ref": "#/components/schemas/Amount" }, "burnedBaseUnits": { "$ref": "#/components/schemas/IntegerString", "description": "Preview: the amount the landed `burn_and_close` actually\nburned, from the transaction. Compared server-side with the\nreviewed balance to measure the section 6 downgrade. Present\nonly for `verified_applied` burn-and-close items.\n" } } } } } };
function validate80(data, { instancePath = "", parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {}) {
  let vErrors = null;
  let errors = 0;
  const evaluated0 = validate80.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = void 0;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = void 0;
  }
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.asset === void 0 && (missing0 = "asset") || data.decimals === void 0 && (missing0 = "decimals") || data.baseUnits === void 0 && (missing0 = "baseUnits")) {
        validate80.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        if (data.asset !== void 0) {
          const _errs1 = errors;
          if (typeof data.asset !== "string") {
            validate80.errors = [{ instancePath: instancePath + "/asset", schemaPath: "#/properties/asset/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
            return false;
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.mint !== void 0) {
            let data1 = data.mint;
            const _errs3 = errors;
            const _errs4 = errors;
            if (errors === _errs4) {
              if (typeof data1 === "string") {
                if (!pattern4.test(data1)) {
                  validate80.errors = [{ instancePath: instancePath + "/mint", schemaPath: "#/components/schemas/Base58/pattern", keyword: "pattern", params: { pattern: "^[1-9A-HJ-NP-Za-km-z]{32,44}$" }, message: 'must match pattern "^[1-9A-HJ-NP-Za-km-z]{32,44}$"' }];
                  return false;
                }
              } else {
                validate80.errors = [{ instancePath: instancePath + "/mint", schemaPath: "#/components/schemas/Base58/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                return false;
              }
            }
            var valid0 = _errs3 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.decimals !== void 0) {
              let data2 = data.decimals;
              const _errs6 = errors;
              if (!(typeof data2 == "number" && (!(data2 % 1) && !isNaN(data2)))) {
                validate80.errors = [{ instancePath: instancePath + "/decimals", schemaPath: "#/properties/decimals/type", keyword: "type", params: { type: "integer" }, message: "must be integer" }];
                return false;
              }
              if (errors === _errs6) {
                if (typeof data2 == "number") {
                  if (data2 > 18 || isNaN(data2)) {
                    validate80.errors = [{ instancePath: instancePath + "/decimals", schemaPath: "#/properties/decimals/maximum", keyword: "maximum", params: { comparison: "<=", limit: 18 }, message: "must be <= 18" }];
                    return false;
                  } else {
                    if (data2 < 0 || isNaN(data2)) {
                      validate80.errors = [{ instancePath: instancePath + "/decimals", schemaPath: "#/properties/decimals/minimum", keyword: "minimum", params: { comparison: ">=", limit: 0 }, message: "must be >= 0" }];
                      return false;
                    }
                  }
                }
              }
              var valid0 = _errs6 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.baseUnits !== void 0) {
                let data3 = data.baseUnits;
                const _errs8 = errors;
                const _errs9 = errors;
                if (errors === _errs9) {
                  if (typeof data3 === "string") {
                    if (!pattern9.test(data3)) {
                      validate80.errors = [{ instancePath: instancePath + "/baseUnits", schemaPath: "#/components/schemas/IntegerString/pattern", keyword: "pattern", params: { pattern: "^[0-9]+$" }, message: 'must match pattern "^[0-9]+$"' }];
                      return false;
                    }
                  } else {
                    validate80.errors = [{ instancePath: instancePath + "/baseUnits", schemaPath: "#/components/schemas/IntegerString/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                    return false;
                  }
                }
                var valid0 = _errs8 === errors;
              } else {
                var valid0 = true;
              }
            }
          }
        }
      }
    } else {
      validate80.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate80.errors = vErrors;
  return errors === 0;
}
validate80.evaluated = { "props": { "asset": true, "mint": true, "decimals": true, "baseUnits": true }, "dynamicProps": false, "dynamicItems": false };
function validate79(data, { instancePath = "", parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {}) {
  let vErrors = null;
  let errors = 0;
  const evaluated0 = validate79.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = void 0;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = void 0;
  }
  if (errors === 0) {
    if (data && typeof data == "object" && !Array.isArray(data)) {
      let missing0;
      if (data.requestId === void 0 && (missing0 = "requestId") || data.receiptId === void 0 && (missing0 = "receiptId") || data.terminal === void 0 && (missing0 = "terminal") || data.transactions === void 0 && (missing0 = "transactions") || data.items === void 0 && (missing0 = "items")) {
        validate79.errors = [{ instancePath, schemaPath: "#/required", keyword: "required", params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }];
        return false;
      } else {
        if (data.requestId !== void 0) {
          const _errs1 = errors;
          if (typeof data.requestId !== "string") {
            validate79.errors = [{ instancePath: instancePath + "/requestId", schemaPath: "#/properties/requestId/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
            return false;
          }
          var valid0 = _errs1 === errors;
        } else {
          var valid0 = true;
        }
        if (valid0) {
          if (data.receiptId !== void 0) {
            const _errs3 = errors;
            if (typeof data.receiptId !== "string") {
              validate79.errors = [{ instancePath: instancePath + "/receiptId", schemaPath: "#/properties/receiptId/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
              return false;
            }
            var valid0 = _errs3 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.terminal !== void 0) {
              const _errs5 = errors;
              if (typeof data.terminal !== "boolean") {
                validate79.errors = [{ instancePath: instancePath + "/terminal", schemaPath: "#/properties/terminal/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }];
                return false;
              }
              var valid0 = _errs5 === errors;
            } else {
              var valid0 = true;
            }
            if (valid0) {
              if (data.transactions !== void 0) {
                let data3 = data.transactions;
                const _errs7 = errors;
                if (errors === _errs7) {
                  if (Array.isArray(data3)) {
                    var valid1 = true;
                    const len0 = data3.length;
                    for (let i0 = 0; i0 < len0; i0++) {
                      let data4 = data3[i0];
                      const _errs9 = errors;
                      if (errors === _errs9) {
                        if (data4 && typeof data4 == "object" && !Array.isArray(data4)) {
                          let missing1;
                          if (data4.id === void 0 && (missing1 = "id") || data4.outcome === void 0 && (missing1 = "outcome")) {
                            validate79.errors = [{ instancePath: instancePath + "/transactions/" + i0, schemaPath: "#/properties/transactions/items/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" }];
                            return false;
                          } else {
                            if (data4.id !== void 0) {
                              const _errs11 = errors;
                              if (typeof data4.id !== "string") {
                                validate79.errors = [{ instancePath: instancePath + "/transactions/" + i0 + "/id", schemaPath: "#/properties/transactions/items/properties/id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                return false;
                              }
                              var valid2 = _errs11 === errors;
                            } else {
                              var valid2 = true;
                            }
                            if (valid2) {
                              if (data4.signature !== void 0) {
                                let data6 = data4.signature;
                                const _errs13 = errors;
                                if (typeof data6 !== "string" && data6 !== null) {
                                  validate79.errors = [{ instancePath: instancePath + "/transactions/" + i0 + "/signature", schemaPath: "#/properties/transactions/items/properties/signature/type", keyword: "type", params: { type: schema84.properties.transactions.items.properties.signature.type }, message: "must be string,null" }];
                                  return false;
                                }
                                var valid2 = _errs13 === errors;
                              } else {
                                var valid2 = true;
                              }
                              if (valid2) {
                                if (data4.outcome !== void 0) {
                                  let data7 = data4.outcome;
                                  const _errs15 = errors;
                                  if (typeof data7 !== "string") {
                                    validate79.errors = [{ instancePath: instancePath + "/transactions/" + i0 + "/outcome", schemaPath: "#/properties/transactions/items/properties/outcome/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                    return false;
                                  }
                                  if (!(data7 === "verified_success" || data7 === "verified_failure" || data7 === "pending" || data7 === "unknown" || data7 === "duplicate" || data7 === "not_signed_pending_expiry" || data7 === "abandoned_unknown")) {
                                    validate79.errors = [{ instancePath: instancePath + "/transactions/" + i0 + "/outcome", schemaPath: "#/properties/transactions/items/properties/outcome/enum", keyword: "enum", params: { allowedValues: schema84.properties.transactions.items.properties.outcome.enum }, message: "must be equal to one of the allowed values" }];
                                    return false;
                                  }
                                  var valid2 = _errs15 === errors;
                                } else {
                                  var valid2 = true;
                                }
                                if (valid2) {
                                  if (data4.landedSlot !== void 0) {
                                    let data8 = data4.landedSlot;
                                    const _errs17 = errors;
                                    if (!(typeof data8 == "number" && (!(data8 % 1) && !isNaN(data8))) && data8 !== null) {
                                      validate79.errors = [{ instancePath: instancePath + "/transactions/" + i0 + "/landedSlot", schemaPath: "#/properties/transactions/items/properties/landedSlot/type", keyword: "type", params: { type: schema84.properties.transactions.items.properties.landedSlot.type }, message: "must be integer,null" }];
                                      return false;
                                    }
                                    var valid2 = _errs17 === errors;
                                  } else {
                                    var valid2 = true;
                                  }
                                }
                              }
                            }
                          }
                        } else {
                          validate79.errors = [{ instancePath: instancePath + "/transactions/" + i0, schemaPath: "#/properties/transactions/items/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                          return false;
                        }
                      }
                      var valid1 = _errs9 === errors;
                      if (!valid1) {
                        break;
                      }
                    }
                  } else {
                    validate79.errors = [{ instancePath: instancePath + "/transactions", schemaPath: "#/properties/transactions/type", keyword: "type", params: { type: "array" }, message: "must be array" }];
                    return false;
                  }
                }
                var valid0 = _errs7 === errors;
              } else {
                var valid0 = true;
              }
              if (valid0) {
                if (data.items !== void 0) {
                  let data9 = data.items;
                  const _errs19 = errors;
                  if (errors === _errs19) {
                    if (Array.isArray(data9)) {
                      var valid3 = true;
                      const len1 = data9.length;
                      for (let i1 = 0; i1 < len1; i1++) {
                        let data10 = data9[i1];
                        const _errs21 = errors;
                        if (errors === _errs21) {
                          if (data10 && typeof data10 == "object" && !Array.isArray(data10)) {
                            let missing2;
                            if (data10.id === void 0 && (missing2 = "id") || data10.transactionId === void 0 && (missing2 = "transactionId") || data10.outcome === void 0 && (missing2 = "outcome") || data10.creditPurpose === void 0 && (missing2 = "creditPurpose") || data10.creditState === void 0 && (missing2 = "creditState")) {
                              validate79.errors = [{ instancePath: instancePath + "/items/" + i1, schemaPath: "#/properties/items/items/required", keyword: "required", params: { missingProperty: missing2 }, message: "must have required property '" + missing2 + "'" }];
                              return false;
                            } else {
                              if (data10.id !== void 0) {
                                const _errs23 = errors;
                                if (typeof data10.id !== "string") {
                                  validate79.errors = [{ instancePath: instancePath + "/items/" + i1 + "/id", schemaPath: "#/properties/items/items/properties/id/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                  return false;
                                }
                                var valid4 = _errs23 === errors;
                              } else {
                                var valid4 = true;
                              }
                              if (valid4) {
                                if (data10.transactionId !== void 0) {
                                  const _errs25 = errors;
                                  if (typeof data10.transactionId !== "string") {
                                    validate79.errors = [{ instancePath: instancePath + "/items/" + i1 + "/transactionId", schemaPath: "#/properties/items/items/properties/transactionId/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                    return false;
                                  }
                                  var valid4 = _errs25 === errors;
                                } else {
                                  var valid4 = true;
                                }
                                if (valid4) {
                                  if (data10.outcome !== void 0) {
                                    let data13 = data10.outcome;
                                    const _errs27 = errors;
                                    if (typeof data13 !== "string") {
                                      validate79.errors = [{ instancePath: instancePath + "/items/" + i1 + "/outcome", schemaPath: "#/properties/items/items/properties/outcome/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                      return false;
                                    }
                                    if (!(data13 === "verified_applied" || data13 === "verified_not_applied" || data13 === "verified_failed" || data13 === "pending" || data13 === "unknown" || data13 === "abandoned_unknown")) {
                                      validate79.errors = [{ instancePath: instancePath + "/items/" + i1 + "/outcome", schemaPath: "#/properties/items/items/properties/outcome/enum", keyword: "enum", params: { allowedValues: schema84.properties.items.items.properties.outcome.enum }, message: "must be equal to one of the allowed values" }];
                                      return false;
                                    }
                                    var valid4 = _errs27 === errors;
                                  } else {
                                    var valid4 = true;
                                  }
                                  if (valid4) {
                                    if (data10.creditPurpose !== void 0) {
                                      let data14 = data10.creditPurpose;
                                      const _errs29 = errors;
                                      if (typeof data14 !== "string" && data14 !== null) {
                                        validate79.errors = [{ instancePath: instancePath + "/items/" + i1 + "/creditPurpose", schemaPath: "#/properties/items/items/properties/creditPurpose/type", keyword: "type", params: { type: schema84.properties.items.items.properties.creditPurpose.type }, message: "must be string,null" }];
                                        return false;
                                      }
                                      if (!(data14 === "api_execution" || data14 === "website_cashback" || data14 === "partner_credit" || data14 === null)) {
                                        validate79.errors = [{ instancePath: instancePath + "/items/" + i1 + "/creditPurpose", schemaPath: "#/properties/items/items/properties/creditPurpose/enum", keyword: "enum", params: { allowedValues: schema84.properties.items.items.properties.creditPurpose.enum }, message: "must be equal to one of the allowed values" }];
                                        return false;
                                      }
                                      var valid4 = _errs29 === errors;
                                    } else {
                                      var valid4 = true;
                                    }
                                    if (valid4) {
                                      if (data10.creditState !== void 0) {
                                        let data15 = data10.creditState;
                                        const _errs31 = errors;
                                        if (typeof data15 !== "string" && data15 !== null) {
                                          validate79.errors = [{ instancePath: instancePath + "/items/" + i1 + "/creditState", schemaPath: "#/properties/items/items/properties/creditState/type", keyword: "type", params: { type: schema84.properties.items.items.properties.creditState.type }, message: "must be string,null" }];
                                          return false;
                                        }
                                        if (!(data15 === "reserved" || data15 === "held" || data15 === "published" || data15 === null)) {
                                          validate79.errors = [{ instancePath: instancePath + "/items/" + i1 + "/creditState", schemaPath: "#/properties/items/items/properties/creditState/enum", keyword: "enum", params: { allowedValues: schema84.properties.items.items.properties.creditState.enum }, message: "must be equal to one of the allowed values" }];
                                          return false;
                                        }
                                        var valid4 = _errs31 === errors;
                                      } else {
                                        var valid4 = true;
                                      }
                                      if (valid4) {
                                        if (data10.recovered !== void 0) {
                                          const _errs33 = errors;
                                          if (!validate80(data10.recovered, { instancePath: instancePath + "/items/" + i1 + "/recovered", parentData: data10, parentDataProperty: "recovered", rootData, dynamicAnchors })) {
                                            vErrors = vErrors === null ? validate80.errors : vErrors.concat(validate80.errors);
                                            errors = vErrors.length;
                                          }
                                          var valid4 = _errs33 === errors;
                                        } else {
                                          var valid4 = true;
                                        }
                                        if (valid4) {
                                          if (data10.serviceFee !== void 0) {
                                            const _errs34 = errors;
                                            if (!validate80(data10.serviceFee, { instancePath: instancePath + "/items/" + i1 + "/serviceFee", parentData: data10, parentDataProperty: "serviceFee", rootData, dynamicAnchors })) {
                                              vErrors = vErrors === null ? validate80.errors : vErrors.concat(validate80.errors);
                                              errors = vErrors.length;
                                            }
                                            var valid4 = _errs34 === errors;
                                          } else {
                                            var valid4 = true;
                                          }
                                          if (valid4) {
                                            if (data10.burnedBaseUnits !== void 0) {
                                              let data18 = data10.burnedBaseUnits;
                                              const _errs35 = errors;
                                              const _errs36 = errors;
                                              if (errors === _errs36) {
                                                if (typeof data18 === "string") {
                                                  if (!pattern9.test(data18)) {
                                                    validate79.errors = [{ instancePath: instancePath + "/items/" + i1 + "/burnedBaseUnits", schemaPath: "#/components/schemas/IntegerString/pattern", keyword: "pattern", params: { pattern: "^[0-9]+$" }, message: 'must match pattern "^[0-9]+$"' }];
                                                    return false;
                                                  }
                                                } else {
                                                  validate79.errors = [{ instancePath: instancePath + "/items/" + i1 + "/burnedBaseUnits", schemaPath: "#/components/schemas/IntegerString/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                                  return false;
                                                }
                                              }
                                              var valid4 = _errs35 === errors;
                                            } else {
                                              var valid4 = true;
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          } else {
                            validate79.errors = [{ instancePath: instancePath + "/items/" + i1, schemaPath: "#/properties/items/items/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                            return false;
                          }
                        }
                        var valid3 = _errs21 === errors;
                        if (!valid3) {
                          break;
                        }
                      }
                    } else {
                      validate79.errors = [{ instancePath: instancePath + "/items", schemaPath: "#/properties/items/type", keyword: "type", params: { type: "array" }, message: "must be array" }];
                      return false;
                    }
                  }
                  var valid0 = _errs19 === errors;
                } else {
                  var valid0 = true;
                }
              }
            }
          }
        }
      }
    } else {
      validate79.errors = [{ instancePath, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
      return false;
    }
  }
  validate79.errors = vErrors;
  return errors === 0;
}
validate79.evaluated = { "props": { "requestId": true, "receiptId": true, "terminal": true, "transactions": true, "items": true }, "dynamicProps": false, "dynamicItems": false };
function validate78(data, { instancePath = "", parentData, parentDataProperty, rootData = data, dynamicAnchors = {} } = {}) {
  ;
  let vErrors = null;
  let errors = 0;
  const evaluated0 = validate78.evaluated;
  if (evaluated0.dynamicProps) {
    evaluated0.props = void 0;
  }
  if (evaluated0.dynamicItems) {
    evaluated0.items = void 0;
  }
  if (!validate79(data, { instancePath, parentData, parentDataProperty, rootData, dynamicAnchors })) {
    vErrors = vErrors === null ? validate79.errors : vErrors.concat(validate79.errors);
    errors = vErrors.length;
  }
  validate78.errors = vErrors;
  return errors === 0;
}
validate78.evaluated = { "props": { "requestId": true, "receiptId": true, "terminal": true, "transactions": true, "items": true }, "dynamicProps": false, "dynamicItems": false };
export {
  validateBuild,
  validateError,
  validateRecord,
  validateRequest,
  validateResponse
};
