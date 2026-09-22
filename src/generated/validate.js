// Generated from openapi/analysis.yaml (SHA-256 893a77f377cc875875d5cd5efae7d5d638f1cece4f054f931d1c77abe445a188). Do not edit.
var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// node_modules/ajv-formats/dist/formats.js
var require_formats = __commonJS({
  "node_modules/ajv-formats/dist/formats.js"(exports) {
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

// node_modules/fast-deep-equal/index.js
var require_fast_deep_equal = __commonJS({
  "node_modules/fast-deep-equal/index.js"(exports, module) {
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

// node_modules/ajv/dist/runtime/equal.js
var require_equal = __commonJS({
  "node_modules/ajv/dist/runtime/equal.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var equal = require_fast_deep_equal();
    equal.code = 'require("ajv/dist/runtime/equal").default';
    exports.default = equal;
  }
});

// node_modules/ajv/dist/runtime/ucs2length.js
var require_ucs2length = __commonJS({
  "node_modules/ajv/dist/runtime/ucs2length.js"(exports) {
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
var schema35 = { "type": "object", "required": ["requestId", "apiVersion", "rulesetVersion", "assetIntelligenceRulesetVersion", "analyzedAt", "complete", "data", "billing"], "properties": { "requestId": { "type": "string" }, "apiVersion": { "type": "string", "enum": ["v1-preview"] }, "rulesetVersion": { "type": "string" }, "assetIntelligenceRulesetVersion": { "type": "null", "description": "Preview: always null; no Asset Intelligence is served." }, "analyzedAt": { "type": "string", "format": "date-time" }, "complete": { "type": "boolean", "enum": [true], "description": "Always true on a 200. Incomplete pages are refused, not served." }, "data": { "type": "object", "required": ["wallet", "mode", "summary", "pagination", "items", "airdrops", "executionSession", "limits"], "properties": { "wallet": { "$ref": "#/components/schemas/Base58" }, "mode": { "type": "string", "enum": ["safe"] }, "summary": { "type": "object", "description": "Presentation-only, current page plus first-page wallet modules. Never a whole-wallet total while `hasMore` is true.", "required": ["scope", "analyzedAssetAccounts", "opportunityCount", "protectedAssetCount", "totalsByAsset", "estimatedNetValueUsd"], "properties": { "scope": { "type": "string", "enum": ["page"] }, "analyzedAssetAccounts": { "type": "integer" }, "opportunityCount": { "type": "integer" }, "protectedAssetCount": { "type": "integer" }, "totalsByAsset": { "type": "array", "items": { "type": "object", "required": ["asset", "decimals", "grossBaseUnits", "serviceFeeBaseUnits", "netBaseUnits"], "properties": { "asset": { "type": "string" }, "mint": { "$ref": "#/components/schemas/Base58" }, "decimals": { "type": "integer" }, "grossBaseUnits": { "$ref": "#/components/schemas/IntegerString" }, "serviceFeeBaseUnits": { "$ref": "#/components/schemas/IntegerString" }, "netBaseUnits": { "$ref": "#/components/schemas/IntegerString" } } } }, "estimatedNetValueUsd": { "type": ["string", "null"], "description": "Null whenever any required price input is missing or stale." } } }, "pagination": { "type": "object", "required": ["returned", "hasMore", "nextCursor", "walletModulesIncluded", "expiresAt"], "properties": { "returned": { "type": "integer", "description": "Raw token accounts analyzed on this page, including those with no opportunity." }, "hasMore": { "type": "boolean" }, "nextCursor": { "type": ["string", "null"] }, "walletModulesIncluded": { "type": "boolean", "description": "True only on the first page." }, "expiresAt": { "type": "string", "format": "date-time", "description": "Shared snapshot and cursor expiry. No execution session is issued." } } }, "items": { "type": "array", "items": { "$ref": "#/components/schemas/WalletItem" } }, "airdrops": { "type": "null" }, "executionSession": { "type": "null", "description": "Always null in the current analysis-only increment; sessions and builders are outside this stage." }, "limits": { "type": "object", "required": ["maxRawTokenAccounts", "pageLimitMax"], "properties": { "maxRawTokenAccounts": { "type": "integer", "enum": [400], "description": "Preview cap, enforced before enrichment." }, "pageLimitMax": { "type": "integer", "enum": [200] } } } } }, "billing": { "$ref": "#/components/schemas/Billing" } } };
var formats0 = require_formats().fastFormats["date-time"];
var pattern9 = new RegExp("^[0-9]+$", "u");
var schema41 = { "type": "object", "description": "One discriminated item. Preview omits `discardEvidence` and `classification.reputation` entirely rather than nulling them.", "required": ["id", "kind", "source", "classification", "opportunity"], "properties": { "id": { "type": "string" }, "kind": { "type": "string", "enum": ["token_account", "excess_lamports"] }, "source": { "type": "string", "enum": ["spl_token", "token_2022", "excess_lamports"], "description": "For disappeared or unsupported accounts, the platform retains the source from its address-bound frozen inventory. It never supplies missing current account facts from that snapshot." }, "targetAccount": { "$ref": "#/components/schemas/Base58", "description": "Exact target of an excess-lamports item. No current token balance is inferred from frozen inventory." }, "alternativeGroupId": { "type": "string", "description": "Present on every excess-lamports item for a token account and on the token-account item for the same account. The two are alternatives, never additive." }, "asset": { "type": "object", "required": ["mint", "assetType", "decimals"], "properties": { "mint": { "$ref": "#/components/schemas/Base58" }, "assetType": { "type": "string", "enum": ["fungible", "token_account_collectible", "unknown"] }, "symbol": { "type": ["string", "null"] }, "decimals": { "type": "integer" } } }, "account": { "type": "object", "required": ["address", "program", "balanceBaseUnits", "rentLamports"], "additionalProperties": false, "properties": { "address": { "$ref": "#/components/schemas/Base58" }, "program": { "type": "string", "enum": ["spl_token", "token_2022"] }, "balanceBaseUnits": { "$ref": "#/components/schemas/IntegerString" }, "rentLamports": { "$ref": "#/components/schemas/IntegerString" } } }, "classification": { "type": "object", "required": ["disposition", "confidence", "reviewRequired", "reasons", "protections"], "properties": { "disposition": { "type": "string", "enum": ["closeable_empty", "withdrawable", "protected", "review_only", "no_op"], "description": "Safe analysis only. Max-mode burn candidates are unavailable. Sell candidates are returned as `review_only`." }, "confidence": { "type": "string", "enum": ["known", "high", "low"] }, "reviewRequired": { "type": "boolean" }, "reasons": { "type": "array", "items": { "type": "string", "enum": ["zero_balance", "priced_dust_within_policy", "sell_not_supported_in_preview", "above_dust_threshold", "above_net_rent", "frozen", "collectible", "lp_or_position_shaped", "receipt_token_policy", "dangerous_token_2022_extension", "account_missing", "unsupported_account", "positive_wsol", "unpriced", "completed_no_sell_route", "unsupported_signer", "non_positive_net", "excess_above_rent_exempt_minimum"] } }, "protections": { "type": "array", "items": { "type": "string", "enum": ["frozen", "collectible", "lp_position", "receipt_token", "token_2022_extension", "unpriced", "account_state"] } } } }, "market": { "type": "object", "description": "Present on fungible token-account items.", "required": ["quoteStatus", "sellRouteAvailable", "executableQuoteUsd", "quotedAt"], "properties": { "quoteStatus": { "type": "string", "enum": ["complete", "unavailable"] }, "sellRouteAvailable": { "type": ["boolean", "null"], "description": "Null when a route was not requested; false only for a completed no-route lookup." }, "executableQuoteUsd": { "oneOf": [{ "type": "null" }, { "$ref": "#/components/schemas/DecimalUsd" }] }, "quotedAt": { "type": ["string", "null"], "format": "date-time" } }, "allOf": [{ "if": { "properties": { "quoteStatus": { "const": "unavailable" } } }, "then": { "properties": { "sellRouteAvailable": { "const": null }, "executableQuoteUsd": { "const": null }, "quotedAt": { "const": null } } }, "else": { "properties": { "sellRouteAvailable": { "type": "boolean" }, "quotedAt": { "type": "string", "format": "date-time" } } } }, { "if": { "properties": { "sellRouteAvailable": { "const": false } } }, "then": { "properties": { "executableQuoteUsd": { "const": null } } } }] }, "opportunity": { "oneOf": [{ "$ref": "#/components/schemas/BurnAndCloseOpportunity" }, { "$ref": "#/components/schemas/RecoverExcessLamportsOpportunity" }, { "$ref": "#/components/schemas/NoActionOpportunity" }], "discriminator": { "propertyName": "action", "mapping": { "burn_and_close": "#/components/schemas/BurnAndCloseOpportunity", "recover_excess_lamports": "#/components/schemas/RecoverExcessLamportsOpportunity", "none": "#/components/schemas/NoActionOpportunity" } } } }, "allOf": [{ "if": { "properties": { "kind": { "const": "excess_lamports" } } }, "then": { "required": ["targetAccount", "alternativeGroupId"], "not": { "required": ["account"] }, "properties": { "source": { "const": "excess_lamports" }, "classification": { "properties": { "disposition": { "const": "withdrawable" }, "confidence": { "const": "known" }, "reviewRequired": { "const": true }, "reasons": { "const": ["excess_above_rent_exempt_minimum"] }, "protections": { "maxItems": 0 } } }, "opportunity": { "properties": { "action": { "const": "recover_excess_lamports" } } } } }, "else": { "not": { "required": ["targetAccount"] }, "properties": { "source": { "enum": ["spl_token", "token_2022"] }, "classification": { "properties": { "disposition": { "enum": ["closeable_empty", "protected", "review_only", "no_op"] }, "reasons": { "not": { "contains": { "const": "excess_above_rent_exempt_minimum" } } } } }, "opportunity": { "properties": { "action": { "enum": ["none", "burn_and_close"] } } } } } }, { "if": { "required": ["account"], "properties": { "account": { "properties": { "program": { "const": "spl_token" } } } } }, "then": { "properties": { "source": { "const": "spl_token" } } } }, { "if": { "required": ["account"], "properties": { "account": { "properties": { "program": { "const": "token_2022" } } } } }, "then": { "properties": { "source": { "const": "token_2022" } } } }, { "if": { "required": ["market"] }, "then": { "required": ["account", "asset"], "properties": { "kind": { "const": "token_account" }, "asset": { "properties": { "assetType": { "const": "fungible" } } } } } }, { "if": { "properties": { "opportunity": { "properties": { "action": { "const": "burn_and_close" } } } } }, "then": { "required": ["account", "asset"], "properties": { "kind": { "const": "token_account" }, "source": { "enum": ["spl_token", "token_2022"] }, "classification": { "properties": { "disposition": { "enum": ["closeable_empty"] }, "reviewRequired": { "const": true }, "protections": { "maxItems": 0 } } } } } }, { "if": { "properties": { "classification": { "properties": { "disposition": { "const": "closeable_empty" } } } } }, "then": { "required": ["account", "asset"], "properties": { "account": { "properties": { "balanceBaseUnits": { "const": "0" } } }, "opportunity": { "properties": { "action": { "const": "burn_and_close" }, "reviewedBalanceBaseUnits": { "const": "0" } } } } } }, { "if": { "properties": { "classification": { "properties": { "reasons": { "contains": { "enum": ["account_missing", "unsupported_account"] } } } } } }, "then": { "properties": { "classification": { "properties": { "disposition": { "const": "protected" }, "protections": { "contains": { "const": "account_state" } } } }, "opportunity": { "properties": { "action": { "const": "none" } } } }, "not": { "required": ["market"] } } }] };
var schema56 = { "type": "object", "description": "Protected, review-only, and no-op items. Never executable.", "required": ["action", "destructive", "executionSupported", "valueComponents", "estimated"], "properties": { "action": { "type": "string", "enum": ["none"] }, "destructive": { "type": "boolean", "enum": [false] }, "executionSupported": { "type": "boolean", "enum": [false] }, "valueComponents": { "type": "array", "maxItems": 0 }, "estimated": { "type": "boolean", "enum": [true] } } };
var func0 = require_equal().default;
var pattern17 = new RegExp("^[0-9]+\\.[0-9]{6}$", "u");
var schema48 = { "type": "object", "description": "Preview downgrade (contract section 6): executes on the existing\non-chain instruction, which burns whatever balance is present when the\ntransaction runs. Every instance is destructive and carries the\nconsent text, including accounts reviewed as empty.\n", "required": ["action", "destructive", "executionSupported", "consent", "reviewedBalanceBaseUnits", "valueComponents", "costs", "estimatedNetValueUsd", "estimated"], "properties": { "action": { "type": "string", "enum": ["burn_and_close"] }, "destructive": { "type": "boolean", "enum": [true] }, "executionSupported": { "type": "boolean", "const": false, "description": "Execution is unavailable in this analysis-only stage." }, "consent": { "type": "string", "minLength": 1, "description": "Exact text the integration must show before signing. States the reviewed balance and that execution burns whatever balance is present when the transaction runs; for `assumed_worthless` items also that no price was available." }, "reviewedBalanceBaseUnits": { "$ref": "#/components/schemas/IntegerString", "description": "The balance the user is reviewing. Zero for empty-account close." }, "valueComponents": { "type": "array", "minItems": 1, "items": { "allOf": [{ "$ref": "#/components/schemas/ValueComponent" }, { "properties": { "source": { "const": "token_account_close" } } }] } }, "costs": { "$ref": "#/components/schemas/OpportunityCosts" }, "estimatedNetValueUsd": { "type": ["string", "null"] }, "estimated": { "type": "boolean", "enum": [true] } } };
var func2 = require_ucs2length().default;
var schema50 = { "type": "object", "required": ["source", "gross", "serviceFee", "netAfterServiceFee"], "properties": { "source": { "type": "string", "enum": ["token_account_close", "excess_lamports"] }, "gross": { "$ref": "#/components/schemas/Amount" }, "serviceFee": { "$ref": "#/components/schemas/Amount" }, "netAfterServiceFee": { "$ref": "#/components/schemas/Amount" } } };
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
            validate27.errors = [{ instancePath: instancePath + "/source", schemaPath: "#/properties/source/enum", keyword: "enum", params: { allowedValues: schema50.properties.source.enum }, message: "must be equal to one of the allowed values" }];
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
var schema54 = { "type": "object", "required": ["scope", "oneTimeSetup", "estimatedNetworkFee", "nativeFundingRequired"], "properties": { "scope": { "type": "string", "enum": ["standalone_estimate"] }, "oneTimeSetup": { "$ref": "#/components/schemas/Amount" }, "estimatedNetworkFee": { "$ref": "#/components/schemas/Amount" }, "nativeFundingRequired": { "$ref": "#/components/schemas/Amount" } } };
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
            validate33.errors = [{ instancePath: instancePath + "/scope", schemaPath: "#/properties/scope/enum", keyword: "enum", params: { allowedValues: schema54.properties.scope.enum }, message: "must be equal to one of the allowed values" }];
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
            validate26.errors = [{ instancePath: instancePath + "/action", schemaPath: "#/properties/action/enum", keyword: "enum", params: { allowedValues: schema48.properties.action.enum }, message: "must be equal to one of the allowed values" }];
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
              validate26.errors = [{ instancePath: instancePath + "/destructive", schemaPath: "#/properties/destructive/enum", keyword: "enum", params: { allowedValues: schema48.properties.destructive.enum }, message: "must be equal to one of the allowed values" }];
              return false;
            }
            var valid0 = _errs3 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.executionSupported !== void 0) {
              let data2 = data.executionSupported;
              const _errs5 = errors;
              if (typeof data2 !== "boolean") {
                validate26.errors = [{ instancePath: instancePath + "/executionSupported", schemaPath: "#/properties/executionSupported/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }];
                return false;
              }
              if (false !== data2) {
                validate26.errors = [{ instancePath: instancePath + "/executionSupported", schemaPath: "#/properties/executionSupported/const", keyword: "const", params: { allowedValue: false }, message: "must be equal to constant" }];
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
                          validate26.errors = [{ instancePath: instancePath + "/estimatedNetValueUsd", schemaPath: "#/properties/estimatedNetValueUsd/type", keyword: "type", params: { type: schema48.properties.estimatedNetValueUsd.type }, message: "must be string,null" }];
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
                            validate26.errors = [{ instancePath: instancePath + "/estimated", schemaPath: "#/properties/estimated/enum", keyword: "enum", params: { allowedValues: schema48.properties.estimated.enum }, message: "must be equal to one of the allowed values" }];
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
var schema55 = { "type": "object", "required": ["action", "destructive", "executionSupported", "valueComponents", "costs", "estimatedNetValueUsd", "estimated"], "properties": { "action": { "type": "string", "enum": ["recover_excess_lamports"] }, "destructive": { "type": "boolean", "enum": [false] }, "executionSupported": { "type": "boolean", "const": false, "description": "Execution is unavailable in this analysis-only stage." }, "valueComponents": { "type": "array", "minItems": 1, "items": { "allOf": [{ "$ref": "#/components/schemas/ValueComponent" }, { "properties": { "source": { "const": "excess_lamports" } } }] } }, "costs": { "type": "null", "description": "Null while the analysis adapter supplies no network/funding estimate. Never infer zero cost." }, "estimatedNetValueUsd": { "type": "null", "description": "No USD valuation is supplied by this analysis adapter." }, "estimated": { "type": "boolean", "enum": [true] } } };
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
            validate39.errors = [{ instancePath: instancePath + "/action", schemaPath: "#/properties/action/enum", keyword: "enum", params: { allowedValues: schema55.properties.action.enum }, message: "must be equal to one of the allowed values" }];
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
              validate39.errors = [{ instancePath: instancePath + "/destructive", schemaPath: "#/properties/destructive/enum", keyword: "enum", params: { allowedValues: schema55.properties.destructive.enum }, message: "must be equal to one of the allowed values" }];
              return false;
            }
            var valid0 = _errs3 === errors;
          } else {
            var valid0 = true;
          }
          if (valid0) {
            if (data.executionSupported !== void 0) {
              let data2 = data.executionSupported;
              const _errs5 = errors;
              if (typeof data2 !== "boolean") {
                validate39.errors = [{ instancePath: instancePath + "/executionSupported", schemaPath: "#/properties/executionSupported/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }];
                return false;
              }
              if (false !== data2) {
                validate39.errors = [{ instancePath: instancePath + "/executionSupported", schemaPath: "#/properties/executionSupported/const", keyword: "const", params: { allowedValue: false }, message: "must be equal to constant" }];
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
                        validate39.errors = [{ instancePath: instancePath + "/estimated", schemaPath: "#/properties/estimated/enum", keyword: "enum", params: { allowedValues: schema55.properties.estimated.enum }, message: "must be equal to one of the allowed values" }];
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
                        if (!func0(data2.reasons, schema41.allOf[0].then.properties.classification.properties.reasons.const)) {
                          validate25.errors = [{ instancePath: instancePath + "/classification/reasons", schemaPath: "#/allOf/0/then/properties/classification/properties/reasons/const", keyword: "const", params: { allowedValue: schema41.allOf[0].then.properties.classification.properties.reasons.const }, message: "must be equal to constant" }];
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
            validate25.errors = [{ instancePath: instancePath + "/source", schemaPath: "#/allOf/0/else/properties/source/enum", keyword: "enum", params: { allowedValues: schema41.allOf[0].else.properties.source.enum }, message: "must be equal to one of the allowed values" }];
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
                  validate25.errors = [{ instancePath: instancePath + "/classification/disposition", schemaPath: "#/allOf/0/else/properties/classification/properties/disposition/enum", keyword: "enum", params: { allowedValues: schema41.allOf[0].else.properties.classification.properties.disposition.enum }, message: "must be equal to one of the allowed values" }];
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
                    validate25.errors = [{ instancePath: instancePath + "/opportunity/action", schemaPath: "#/allOf/0/else/properties/opportunity/properties/action/enum", keyword: "enum", params: { allowedValues: schema41.allOf[0].else.properties.opportunity.properties.action.enum }, message: "must be equal to one of the allowed values" }];
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
                      validate25.errors = [{ instancePath: instancePath + "/source", schemaPath: "#/allOf/4/then/properties/source/enum", keyword: "enum", params: { allowedValues: schema41.allOf[4].then.properties.source.enum }, message: "must be equal to one of the allowed values" }];
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
                            validate25.errors = [{ instancePath: instancePath + "/classification/disposition", schemaPath: "#/allOf/4/then/properties/classification/properties/disposition/enum", keyword: "enum", params: { allowedValues: schema41.allOf[4].then.properties.classification.properties.disposition.enum }, message: "must be equal to one of the allowed values" }];
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
              validate25.errors = [{ instancePath: instancePath + "/kind", schemaPath: "#/properties/kind/enum", keyword: "enum", params: { allowedValues: schema41.properties.kind.enum }, message: "must be equal to one of the allowed values" }];
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
                validate25.errors = [{ instancePath: instancePath + "/source", schemaPath: "#/properties/source/enum", keyword: "enum", params: { allowedValues: schema41.properties.source.enum }, message: "must be equal to one of the allowed values" }];
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
                                validate25.errors = [{ instancePath: instancePath + "/asset/assetType", schemaPath: "#/properties/asset/properties/assetType/enum", keyword: "enum", params: { allowedValues: schema41.properties.asset.properties.assetType.enum }, message: "must be equal to one of the allowed values" }];
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
                                  validate25.errors = [{ instancePath: instancePath + "/asset/symbol", schemaPath: "#/properties/asset/properties/symbol/type", keyword: "type", params: { type: schema41.properties.asset.properties.symbol.type }, message: "must be string,null" }];
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
                                    validate25.errors = [{ instancePath: instancePath + "/account/program", schemaPath: "#/properties/account/properties/program/enum", keyword: "enum", params: { allowedValues: schema41.properties.account.properties.program.enum }, message: "must be equal to one of the allowed values" }];
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
                                  validate25.errors = [{ instancePath: instancePath + "/classification/disposition", schemaPath: "#/properties/classification/properties/disposition/enum", keyword: "enum", params: { allowedValues: schema41.properties.classification.properties.disposition.enum }, message: "must be equal to one of the allowed values" }];
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
                                    validate25.errors = [{ instancePath: instancePath + "/classification/confidence", schemaPath: "#/properties/classification/properties/confidence/enum", keyword: "enum", params: { allowedValues: schema41.properties.classification.properties.confidence.enum }, message: "must be equal to one of the allowed values" }];
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
                                              validate25.errors = [{ instancePath: instancePath + "/classification/reasons/" + i3, schemaPath: "#/properties/classification/properties/reasons/items/enum", keyword: "enum", params: { allowedValues: schema41.properties.classification.properties.reasons.items.enum }, message: "must be equal to one of the allowed values" }];
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
                                                validate25.errors = [{ instancePath: instancePath + "/classification/protections/" + i4, schemaPath: "#/properties/classification/properties/protections/items/enum", keyword: "enum", params: { allowedValues: schema41.properties.classification.properties.protections.items.enum }, message: "must be equal to one of the allowed values" }];
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
                                  validate25.errors = [{ instancePath: instancePath + "/market/sellRouteAvailable", schemaPath: "#/properties/market/allOf/0/then/properties/sellRouteAvailable/const", keyword: "const", params: { allowedValue: schema41.properties.market.allOf[0].then.properties.sellRouteAvailable.const }, message: "must be equal to constant" }];
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
                                    validate25.errors = [{ instancePath: instancePath + "/market/executableQuoteUsd", schemaPath: "#/properties/market/allOf/0/then/properties/executableQuoteUsd/const", keyword: "const", params: { allowedValue: schema41.properties.market.allOf[0].then.properties.executableQuoteUsd.const }, message: "must be equal to constant" }];
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
                                      validate25.errors = [{ instancePath: instancePath + "/market/quotedAt", schemaPath: "#/properties/market/allOf/0/then/properties/quotedAt/const", keyword: "const", params: { allowedValue: schema41.properties.market.allOf[0].then.properties.quotedAt.const }, message: "must be equal to constant" }];
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
                                    validate25.errors = [{ instancePath: instancePath + "/market/executableQuoteUsd", schemaPath: "#/properties/market/allOf/1/then/properties/executableQuoteUsd/const", keyword: "const", params: { allowedValue: schema41.properties.market.allOf[1].then.properties.executableQuoteUsd.const }, message: "must be equal to constant" }];
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
                                    validate25.errors = [{ instancePath: instancePath + "/market/quoteStatus", schemaPath: "#/properties/market/properties/quoteStatus/enum", keyword: "enum", params: { allowedValues: schema41.properties.market.properties.quoteStatus.enum }, message: "must be equal to one of the allowed values" }];
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
                                      validate25.errors = [{ instancePath: instancePath + "/market/sellRouteAvailable", schemaPath: "#/properties/market/properties/sellRouteAvailable/type", keyword: "type", params: { type: schema41.properties.market.properties.sellRouteAvailable.type }, message: "must be boolean,null" }];
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
                                          validate25.errors = [{ instancePath: instancePath + "/market/quotedAt", schemaPath: "#/properties/market/properties/quotedAt/type", keyword: "type", params: { type: schema41.properties.market.properties.quotedAt.type }, message: "must be string,null" }];
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
                                        const err33 = { instancePath: instancePath + "/opportunity/action", schemaPath: "#/components/schemas/NoActionOpportunity/properties/action/enum", keyword: "enum", params: { allowedValues: schema56.properties.action.enum }, message: "must be equal to one of the allowed values" };
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
                                          const err35 = { instancePath: instancePath + "/opportunity/destructive", schemaPath: "#/components/schemas/NoActionOpportunity/properties/destructive/enum", keyword: "enum", params: { allowedValues: schema56.properties.destructive.enum }, message: "must be equal to one of the allowed values" };
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
                                            const err37 = { instancePath: instancePath + "/opportunity/executionSupported", schemaPath: "#/components/schemas/NoActionOpportunity/properties/executionSupported/enum", keyword: "enum", params: { allowedValues: schema56.properties.executionSupported.enum }, message: "must be equal to one of the allowed values" };
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
                                                const err41 = { instancePath: instancePath + "/opportunity/estimated", schemaPath: "#/components/schemas/NoActionOpportunity/properties/estimated/enum", keyword: "enum", params: { allowedValues: schema56.properties.estimated.enum }, message: "must be equal to one of the allowed values" };
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
var schema57 = { "type": "object", "description": "Preview: `mode` is always `metered_preview`. `chargedUsd` is the list\nprice recorded for this complete response and is invoiceable by manual\ninvoice only. `balanceRemainingUsd` is always null because no prepaid\nbalance exists in the preview.\n", "required": ["mode", "currency", "billableUnits", "baseChargeUsd", "addOnChargeUsd", "chargedUsd", "balanceRemainingUsd"], "properties": { "mode": { "type": "string", "enum": ["metered_preview"] }, "currency": { "type": "string", "enum": ["USD"] }, "billableUnits": { "type": "integer", "minimum": 1 }, "baseChargeUsd": { "$ref": "#/components/schemas/DecimalUsd" }, "addOnChargeUsd": { "$ref": "#/components/schemas/DecimalUsd" }, "chargedUsd": { "$ref": "#/components/schemas/DecimalUsd" }, "balanceRemainingUsd": { "type": "null" } } };
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
            validate43.errors = [{ instancePath: instancePath + "/mode", schemaPath: "#/properties/mode/enum", keyword: "enum", params: { allowedValues: schema57.properties.mode.enum }, message: "must be equal to one of the allowed values" }];
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
              validate43.errors = [{ instancePath: instancePath + "/currency", schemaPath: "#/properties/currency/enum", keyword: "enum", params: { allowedValues: schema57.properties.currency.enum }, message: "must be equal to one of the allowed values" }];
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
                      if (errors === _errs13) {
                        if (data6 && typeof data6 == "object" && !Array.isArray(data6)) {
                          let missing1;
                          if (data6.wallet === void 0 && (missing1 = "wallet") || data6.mode === void 0 && (missing1 = "mode") || data6.summary === void 0 && (missing1 = "summary") || data6.pagination === void 0 && (missing1 = "pagination") || data6.items === void 0 && (missing1 = "items") || data6.airdrops === void 0 && (missing1 = "airdrops") || data6.executionSession === void 0 && (missing1 = "executionSession") || data6.limits === void 0 && (missing1 = "limits")) {
                            validate24.errors = [{ instancePath: instancePath + "/data", schemaPath: "#/properties/data/required", keyword: "required", params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" }];
                            return false;
                          } else {
                            if (data6.wallet !== void 0) {
                              let data7 = data6.wallet;
                              const _errs15 = errors;
                              const _errs16 = errors;
                              if (errors === _errs16) {
                                if (typeof data7 === "string") {
                                  if (!pattern4.test(data7)) {
                                    validate24.errors = [{ instancePath: instancePath + "/data/wallet", schemaPath: "#/components/schemas/Base58/pattern", keyword: "pattern", params: { pattern: "^[1-9A-HJ-NP-Za-km-z]{32,44}$" }, message: 'must match pattern "^[1-9A-HJ-NP-Za-km-z]{32,44}$"' }];
                                    return false;
                                  }
                                } else {
                                  validate24.errors = [{ instancePath: instancePath + "/data/wallet", schemaPath: "#/components/schemas/Base58/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                  return false;
                                }
                              }
                              var valid1 = _errs15 === errors;
                            } else {
                              var valid1 = true;
                            }
                            if (valid1) {
                              if (data6.mode !== void 0) {
                                let data8 = data6.mode;
                                const _errs18 = errors;
                                if (typeof data8 !== "string") {
                                  validate24.errors = [{ instancePath: instancePath + "/data/mode", schemaPath: "#/properties/data/properties/mode/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                  return false;
                                }
                                if (!(data8 === "safe")) {
                                  validate24.errors = [{ instancePath: instancePath + "/data/mode", schemaPath: "#/properties/data/properties/mode/enum", keyword: "enum", params: { allowedValues: schema35.properties.data.properties.mode.enum }, message: "must be equal to one of the allowed values" }];
                                  return false;
                                }
                                var valid1 = _errs18 === errors;
                              } else {
                                var valid1 = true;
                              }
                              if (valid1) {
                                if (data6.summary !== void 0) {
                                  let data9 = data6.summary;
                                  const _errs20 = errors;
                                  if (errors === _errs20) {
                                    if (data9 && typeof data9 == "object" && !Array.isArray(data9)) {
                                      let missing2;
                                      if (data9.scope === void 0 && (missing2 = "scope") || data9.analyzedAssetAccounts === void 0 && (missing2 = "analyzedAssetAccounts") || data9.opportunityCount === void 0 && (missing2 = "opportunityCount") || data9.protectedAssetCount === void 0 && (missing2 = "protectedAssetCount") || data9.totalsByAsset === void 0 && (missing2 = "totalsByAsset") || data9.estimatedNetValueUsd === void 0 && (missing2 = "estimatedNetValueUsd")) {
                                        validate24.errors = [{ instancePath: instancePath + "/data/summary", schemaPath: "#/properties/data/properties/summary/required", keyword: "required", params: { missingProperty: missing2 }, message: "must have required property '" + missing2 + "'" }];
                                        return false;
                                      } else {
                                        if (data9.scope !== void 0) {
                                          let data10 = data9.scope;
                                          const _errs22 = errors;
                                          if (typeof data10 !== "string") {
                                            validate24.errors = [{ instancePath: instancePath + "/data/summary/scope", schemaPath: "#/properties/data/properties/summary/properties/scope/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                            return false;
                                          }
                                          if (!(data10 === "page")) {
                                            validate24.errors = [{ instancePath: instancePath + "/data/summary/scope", schemaPath: "#/properties/data/properties/summary/properties/scope/enum", keyword: "enum", params: { allowedValues: schema35.properties.data.properties.summary.properties.scope.enum }, message: "must be equal to one of the allowed values" }];
                                            return false;
                                          }
                                          var valid3 = _errs22 === errors;
                                        } else {
                                          var valid3 = true;
                                        }
                                        if (valid3) {
                                          if (data9.analyzedAssetAccounts !== void 0) {
                                            let data11 = data9.analyzedAssetAccounts;
                                            const _errs24 = errors;
                                            if (!(typeof data11 == "number" && (!(data11 % 1) && !isNaN(data11)))) {
                                              validate24.errors = [{ instancePath: instancePath + "/data/summary/analyzedAssetAccounts", schemaPath: "#/properties/data/properties/summary/properties/analyzedAssetAccounts/type", keyword: "type", params: { type: "integer" }, message: "must be integer" }];
                                              return false;
                                            }
                                            var valid3 = _errs24 === errors;
                                          } else {
                                            var valid3 = true;
                                          }
                                          if (valid3) {
                                            if (data9.opportunityCount !== void 0) {
                                              let data12 = data9.opportunityCount;
                                              const _errs26 = errors;
                                              if (!(typeof data12 == "number" && (!(data12 % 1) && !isNaN(data12)))) {
                                                validate24.errors = [{ instancePath: instancePath + "/data/summary/opportunityCount", schemaPath: "#/properties/data/properties/summary/properties/opportunityCount/type", keyword: "type", params: { type: "integer" }, message: "must be integer" }];
                                                return false;
                                              }
                                              var valid3 = _errs26 === errors;
                                            } else {
                                              var valid3 = true;
                                            }
                                            if (valid3) {
                                              if (data9.protectedAssetCount !== void 0) {
                                                let data13 = data9.protectedAssetCount;
                                                const _errs28 = errors;
                                                if (!(typeof data13 == "number" && (!(data13 % 1) && !isNaN(data13)))) {
                                                  validate24.errors = [{ instancePath: instancePath + "/data/summary/protectedAssetCount", schemaPath: "#/properties/data/properties/summary/properties/protectedAssetCount/type", keyword: "type", params: { type: "integer" }, message: "must be integer" }];
                                                  return false;
                                                }
                                                var valid3 = _errs28 === errors;
                                              } else {
                                                var valid3 = true;
                                              }
                                              if (valid3) {
                                                if (data9.totalsByAsset !== void 0) {
                                                  let data14 = data9.totalsByAsset;
                                                  const _errs30 = errors;
                                                  if (errors === _errs30) {
                                                    if (Array.isArray(data14)) {
                                                      var valid4 = true;
                                                      const len0 = data14.length;
                                                      for (let i0 = 0; i0 < len0; i0++) {
                                                        let data15 = data14[i0];
                                                        const _errs32 = errors;
                                                        if (errors === _errs32) {
                                                          if (data15 && typeof data15 == "object" && !Array.isArray(data15)) {
                                                            let missing3;
                                                            if (data15.asset === void 0 && (missing3 = "asset") || data15.decimals === void 0 && (missing3 = "decimals") || data15.grossBaseUnits === void 0 && (missing3 = "grossBaseUnits") || data15.serviceFeeBaseUnits === void 0 && (missing3 = "serviceFeeBaseUnits") || data15.netBaseUnits === void 0 && (missing3 = "netBaseUnits")) {
                                                              validate24.errors = [{ instancePath: instancePath + "/data/summary/totalsByAsset/" + i0, schemaPath: "#/properties/data/properties/summary/properties/totalsByAsset/items/required", keyword: "required", params: { missingProperty: missing3 }, message: "must have required property '" + missing3 + "'" }];
                                                              return false;
                                                            } else {
                                                              if (data15.asset !== void 0) {
                                                                const _errs34 = errors;
                                                                if (typeof data15.asset !== "string") {
                                                                  validate24.errors = [{ instancePath: instancePath + "/data/summary/totalsByAsset/" + i0 + "/asset", schemaPath: "#/properties/data/properties/summary/properties/totalsByAsset/items/properties/asset/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                                                  return false;
                                                                }
                                                                var valid5 = _errs34 === errors;
                                                              } else {
                                                                var valid5 = true;
                                                              }
                                                              if (valid5) {
                                                                if (data15.mint !== void 0) {
                                                                  let data17 = data15.mint;
                                                                  const _errs36 = errors;
                                                                  const _errs37 = errors;
                                                                  if (errors === _errs37) {
                                                                    if (typeof data17 === "string") {
                                                                      if (!pattern4.test(data17)) {
                                                                        validate24.errors = [{ instancePath: instancePath + "/data/summary/totalsByAsset/" + i0 + "/mint", schemaPath: "#/components/schemas/Base58/pattern", keyword: "pattern", params: { pattern: "^[1-9A-HJ-NP-Za-km-z]{32,44}$" }, message: 'must match pattern "^[1-9A-HJ-NP-Za-km-z]{32,44}$"' }];
                                                                        return false;
                                                                      }
                                                                    } else {
                                                                      validate24.errors = [{ instancePath: instancePath + "/data/summary/totalsByAsset/" + i0 + "/mint", schemaPath: "#/components/schemas/Base58/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                                                      return false;
                                                                    }
                                                                  }
                                                                  var valid5 = _errs36 === errors;
                                                                } else {
                                                                  var valid5 = true;
                                                                }
                                                                if (valid5) {
                                                                  if (data15.decimals !== void 0) {
                                                                    let data18 = data15.decimals;
                                                                    const _errs39 = errors;
                                                                    if (!(typeof data18 == "number" && (!(data18 % 1) && !isNaN(data18)))) {
                                                                      validate24.errors = [{ instancePath: instancePath + "/data/summary/totalsByAsset/" + i0 + "/decimals", schemaPath: "#/properties/data/properties/summary/properties/totalsByAsset/items/properties/decimals/type", keyword: "type", params: { type: "integer" }, message: "must be integer" }];
                                                                      return false;
                                                                    }
                                                                    var valid5 = _errs39 === errors;
                                                                  } else {
                                                                    var valid5 = true;
                                                                  }
                                                                  if (valid5) {
                                                                    if (data15.grossBaseUnits !== void 0) {
                                                                      let data19 = data15.grossBaseUnits;
                                                                      const _errs41 = errors;
                                                                      const _errs42 = errors;
                                                                      if (errors === _errs42) {
                                                                        if (typeof data19 === "string") {
                                                                          if (!pattern9.test(data19)) {
                                                                            validate24.errors = [{ instancePath: instancePath + "/data/summary/totalsByAsset/" + i0 + "/grossBaseUnits", schemaPath: "#/components/schemas/IntegerString/pattern", keyword: "pattern", params: { pattern: "^[0-9]+$" }, message: 'must match pattern "^[0-9]+$"' }];
                                                                            return false;
                                                                          }
                                                                        } else {
                                                                          validate24.errors = [{ instancePath: instancePath + "/data/summary/totalsByAsset/" + i0 + "/grossBaseUnits", schemaPath: "#/components/schemas/IntegerString/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                                                          return false;
                                                                        }
                                                                      }
                                                                      var valid5 = _errs41 === errors;
                                                                    } else {
                                                                      var valid5 = true;
                                                                    }
                                                                    if (valid5) {
                                                                      if (data15.serviceFeeBaseUnits !== void 0) {
                                                                        let data20 = data15.serviceFeeBaseUnits;
                                                                        const _errs44 = errors;
                                                                        const _errs45 = errors;
                                                                        if (errors === _errs45) {
                                                                          if (typeof data20 === "string") {
                                                                            if (!pattern9.test(data20)) {
                                                                              validate24.errors = [{ instancePath: instancePath + "/data/summary/totalsByAsset/" + i0 + "/serviceFeeBaseUnits", schemaPath: "#/components/schemas/IntegerString/pattern", keyword: "pattern", params: { pattern: "^[0-9]+$" }, message: 'must match pattern "^[0-9]+$"' }];
                                                                              return false;
                                                                            }
                                                                          } else {
                                                                            validate24.errors = [{ instancePath: instancePath + "/data/summary/totalsByAsset/" + i0 + "/serviceFeeBaseUnits", schemaPath: "#/components/schemas/IntegerString/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                                                            return false;
                                                                          }
                                                                        }
                                                                        var valid5 = _errs44 === errors;
                                                                      } else {
                                                                        var valid5 = true;
                                                                      }
                                                                      if (valid5) {
                                                                        if (data15.netBaseUnits !== void 0) {
                                                                          let data21 = data15.netBaseUnits;
                                                                          const _errs47 = errors;
                                                                          const _errs48 = errors;
                                                                          if (errors === _errs48) {
                                                                            if (typeof data21 === "string") {
                                                                              if (!pattern9.test(data21)) {
                                                                                validate24.errors = [{ instancePath: instancePath + "/data/summary/totalsByAsset/" + i0 + "/netBaseUnits", schemaPath: "#/components/schemas/IntegerString/pattern", keyword: "pattern", params: { pattern: "^[0-9]+$" }, message: 'must match pattern "^[0-9]+$"' }];
                                                                                return false;
                                                                              }
                                                                            } else {
                                                                              validate24.errors = [{ instancePath: instancePath + "/data/summary/totalsByAsset/" + i0 + "/netBaseUnits", schemaPath: "#/components/schemas/IntegerString/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                                                              return false;
                                                                            }
                                                                          }
                                                                          var valid5 = _errs47 === errors;
                                                                        } else {
                                                                          var valid5 = true;
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          } else {
                                                            validate24.errors = [{ instancePath: instancePath + "/data/summary/totalsByAsset/" + i0, schemaPath: "#/properties/data/properties/summary/properties/totalsByAsset/items/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                                                            return false;
                                                          }
                                                        }
                                                        var valid4 = _errs32 === errors;
                                                        if (!valid4) {
                                                          break;
                                                        }
                                                      }
                                                    } else {
                                                      validate24.errors = [{ instancePath: instancePath + "/data/summary/totalsByAsset", schemaPath: "#/properties/data/properties/summary/properties/totalsByAsset/type", keyword: "type", params: { type: "array" }, message: "must be array" }];
                                                      return false;
                                                    }
                                                  }
                                                  var valid3 = _errs30 === errors;
                                                } else {
                                                  var valid3 = true;
                                                }
                                                if (valid3) {
                                                  if (data9.estimatedNetValueUsd !== void 0) {
                                                    let data22 = data9.estimatedNetValueUsd;
                                                    const _errs50 = errors;
                                                    if (typeof data22 !== "string" && data22 !== null) {
                                                      validate24.errors = [{ instancePath: instancePath + "/data/summary/estimatedNetValueUsd", schemaPath: "#/properties/data/properties/summary/properties/estimatedNetValueUsd/type", keyword: "type", params: { type: schema35.properties.data.properties.summary.properties.estimatedNetValueUsd.type }, message: "must be string,null" }];
                                                      return false;
                                                    }
                                                    var valid3 = _errs50 === errors;
                                                  } else {
                                                    var valid3 = true;
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
                                  var valid1 = _errs20 === errors;
                                } else {
                                  var valid1 = true;
                                }
                                if (valid1) {
                                  if (data6.pagination !== void 0) {
                                    let data23 = data6.pagination;
                                    const _errs52 = errors;
                                    if (errors === _errs52) {
                                      if (data23 && typeof data23 == "object" && !Array.isArray(data23)) {
                                        let missing4;
                                        if (data23.returned === void 0 && (missing4 = "returned") || data23.hasMore === void 0 && (missing4 = "hasMore") || data23.nextCursor === void 0 && (missing4 = "nextCursor") || data23.walletModulesIncluded === void 0 && (missing4 = "walletModulesIncluded") || data23.expiresAt === void 0 && (missing4 = "expiresAt")) {
                                          validate24.errors = [{ instancePath: instancePath + "/data/pagination", schemaPath: "#/properties/data/properties/pagination/required", keyword: "required", params: { missingProperty: missing4 }, message: "must have required property '" + missing4 + "'" }];
                                          return false;
                                        } else {
                                          if (data23.returned !== void 0) {
                                            let data24 = data23.returned;
                                            const _errs54 = errors;
                                            if (!(typeof data24 == "number" && (!(data24 % 1) && !isNaN(data24)))) {
                                              validate24.errors = [{ instancePath: instancePath + "/data/pagination/returned", schemaPath: "#/properties/data/properties/pagination/properties/returned/type", keyword: "type", params: { type: "integer" }, message: "must be integer" }];
                                              return false;
                                            }
                                            var valid10 = _errs54 === errors;
                                          } else {
                                            var valid10 = true;
                                          }
                                          if (valid10) {
                                            if (data23.hasMore !== void 0) {
                                              const _errs56 = errors;
                                              if (typeof data23.hasMore !== "boolean") {
                                                validate24.errors = [{ instancePath: instancePath + "/data/pagination/hasMore", schemaPath: "#/properties/data/properties/pagination/properties/hasMore/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }];
                                                return false;
                                              }
                                              var valid10 = _errs56 === errors;
                                            } else {
                                              var valid10 = true;
                                            }
                                            if (valid10) {
                                              if (data23.nextCursor !== void 0) {
                                                let data26 = data23.nextCursor;
                                                const _errs58 = errors;
                                                if (typeof data26 !== "string" && data26 !== null) {
                                                  validate24.errors = [{ instancePath: instancePath + "/data/pagination/nextCursor", schemaPath: "#/properties/data/properties/pagination/properties/nextCursor/type", keyword: "type", params: { type: schema35.properties.data.properties.pagination.properties.nextCursor.type }, message: "must be string,null" }];
                                                  return false;
                                                }
                                                var valid10 = _errs58 === errors;
                                              } else {
                                                var valid10 = true;
                                              }
                                              if (valid10) {
                                                if (data23.walletModulesIncluded !== void 0) {
                                                  const _errs60 = errors;
                                                  if (typeof data23.walletModulesIncluded !== "boolean") {
                                                    validate24.errors = [{ instancePath: instancePath + "/data/pagination/walletModulesIncluded", schemaPath: "#/properties/data/properties/pagination/properties/walletModulesIncluded/type", keyword: "type", params: { type: "boolean" }, message: "must be boolean" }];
                                                    return false;
                                                  }
                                                  var valid10 = _errs60 === errors;
                                                } else {
                                                  var valid10 = true;
                                                }
                                                if (valid10) {
                                                  if (data23.expiresAt !== void 0) {
                                                    let data28 = data23.expiresAt;
                                                    const _errs62 = errors;
                                                    if (errors === _errs62) {
                                                      if (errors === _errs62) {
                                                        if (typeof data28 === "string") {
                                                          if (!formats0.validate.test(data28)) {
                                                            validate24.errors = [{ instancePath: instancePath + "/data/pagination/expiresAt", schemaPath: "#/properties/data/properties/pagination/properties/expiresAt/format", keyword: "format", params: { format: "date-time" }, message: 'must match format "date-time"' }];
                                                            return false;
                                                          }
                                                        } else {
                                                          validate24.errors = [{ instancePath: instancePath + "/data/pagination/expiresAt", schemaPath: "#/properties/data/properties/pagination/properties/expiresAt/type", keyword: "type", params: { type: "string" }, message: "must be string" }];
                                                          return false;
                                                        }
                                                      }
                                                    }
                                                    var valid10 = _errs62 === errors;
                                                  } else {
                                                    var valid10 = true;
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
                                    var valid1 = _errs52 === errors;
                                  } else {
                                    var valid1 = true;
                                  }
                                  if (valid1) {
                                    if (data6.items !== void 0) {
                                      let data29 = data6.items;
                                      const _errs64 = errors;
                                      if (errors === _errs64) {
                                        if (Array.isArray(data29)) {
                                          var valid11 = true;
                                          const len1 = data29.length;
                                          for (let i1 = 0; i1 < len1; i1++) {
                                            const _errs66 = errors;
                                            if (!validate25(data29[i1], { instancePath: instancePath + "/data/items/" + i1, parentData: data29, parentDataProperty: i1, rootData, dynamicAnchors })) {
                                              vErrors = vErrors === null ? validate25.errors : vErrors.concat(validate25.errors);
                                              errors = vErrors.length;
                                            }
                                            var valid11 = _errs66 === errors;
                                            if (!valid11) {
                                              break;
                                            }
                                          }
                                        } else {
                                          validate24.errors = [{ instancePath: instancePath + "/data/items", schemaPath: "#/properties/data/properties/items/type", keyword: "type", params: { type: "array" }, message: "must be array" }];
                                          return false;
                                        }
                                      }
                                      var valid1 = _errs64 === errors;
                                    } else {
                                      var valid1 = true;
                                    }
                                    if (valid1) {
                                      if (data6.airdrops !== void 0) {
                                        const _errs67 = errors;
                                        if (data6.airdrops !== null) {
                                          validate24.errors = [{ instancePath: instancePath + "/data/airdrops", schemaPath: "#/properties/data/properties/airdrops/type", keyword: "type", params: { type: "null" }, message: "must be null" }];
                                          return false;
                                        }
                                        var valid1 = _errs67 === errors;
                                      } else {
                                        var valid1 = true;
                                      }
                                      if (valid1) {
                                        if (data6.executionSession !== void 0) {
                                          const _errs69 = errors;
                                          if (data6.executionSession !== null) {
                                            validate24.errors = [{ instancePath: instancePath + "/data/executionSession", schemaPath: "#/properties/data/properties/executionSession/type", keyword: "type", params: { type: "null" }, message: "must be null" }];
                                            return false;
                                          }
                                          var valid1 = _errs69 === errors;
                                        } else {
                                          var valid1 = true;
                                        }
                                        if (valid1) {
                                          if (data6.limits !== void 0) {
                                            let data33 = data6.limits;
                                            const _errs71 = errors;
                                            if (errors === _errs71) {
                                              if (data33 && typeof data33 == "object" && !Array.isArray(data33)) {
                                                let missing5;
                                                if (data33.maxRawTokenAccounts === void 0 && (missing5 = "maxRawTokenAccounts") || data33.pageLimitMax === void 0 && (missing5 = "pageLimitMax")) {
                                                  validate24.errors = [{ instancePath: instancePath + "/data/limits", schemaPath: "#/properties/data/properties/limits/required", keyword: "required", params: { missingProperty: missing5 }, message: "must have required property '" + missing5 + "'" }];
                                                  return false;
                                                } else {
                                                  if (data33.maxRawTokenAccounts !== void 0) {
                                                    let data34 = data33.maxRawTokenAccounts;
                                                    const _errs73 = errors;
                                                    if (!(typeof data34 == "number" && (!(data34 % 1) && !isNaN(data34)))) {
                                                      validate24.errors = [{ instancePath: instancePath + "/data/limits/maxRawTokenAccounts", schemaPath: "#/properties/data/properties/limits/properties/maxRawTokenAccounts/type", keyword: "type", params: { type: "integer" }, message: "must be integer" }];
                                                      return false;
                                                    }
                                                    if (!(data34 === 400)) {
                                                      validate24.errors = [{ instancePath: instancePath + "/data/limits/maxRawTokenAccounts", schemaPath: "#/properties/data/properties/limits/properties/maxRawTokenAccounts/enum", keyword: "enum", params: { allowedValues: schema35.properties.data.properties.limits.properties.maxRawTokenAccounts.enum }, message: "must be equal to one of the allowed values" }];
                                                      return false;
                                                    }
                                                    var valid12 = _errs73 === errors;
                                                  } else {
                                                    var valid12 = true;
                                                  }
                                                  if (valid12) {
                                                    if (data33.pageLimitMax !== void 0) {
                                                      let data35 = data33.pageLimitMax;
                                                      const _errs75 = errors;
                                                      if (!(typeof data35 == "number" && (!(data35 % 1) && !isNaN(data35)))) {
                                                        validate24.errors = [{ instancePath: instancePath + "/data/limits/pageLimitMax", schemaPath: "#/properties/data/properties/limits/properties/pageLimitMax/type", keyword: "type", params: { type: "integer" }, message: "must be integer" }];
                                                        return false;
                                                      }
                                                      if (!(data35 === 200)) {
                                                        validate24.errors = [{ instancePath: instancePath + "/data/limits/pageLimitMax", schemaPath: "#/properties/data/properties/limits/properties/pageLimitMax/enum", keyword: "enum", params: { allowedValues: schema35.properties.data.properties.limits.properties.pageLimitMax.enum }, message: "must be equal to one of the allowed values" }];
                                                        return false;
                                                      }
                                                      var valid12 = _errs75 === errors;
                                                    } else {
                                                      var valid12 = true;
                                                    }
                                                  }
                                                }
                                              } else {
                                                validate24.errors = [{ instancePath: instancePath + "/data/limits", schemaPath: "#/properties/data/properties/limits/type", keyword: "type", params: { type: "object" }, message: "must be object" }];
                                                return false;
                                              }
                                            }
                                            var valid1 = _errs71 === errors;
                                          } else {
                                            var valid1 = true;
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
                        const _errs77 = errors;
                        if (!validate43(data.billing, { instancePath: instancePath + "/billing", parentData: data, parentDataProperty: "billing", rootData, dynamicAnchors })) {
                          vErrors = vErrors === null ? validate43.errors : vErrors.concat(validate43.errors);
                          errors = vErrors.length;
                        }
                        var valid0 = _errs77 === errors;
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
var schema62 = { "type": "object", "required": ["requestId", "error"], "properties": { "requestId": { "type": "string" }, "error": { "type": "object", "required": ["code", "message", "retryable"], "properties": { "code": { "type": "string", "enum": ["unauthorized", "key_revoked", "mode_not_permitted", "mode_not_available", "idempotency_key_reused", "request_in_progress", "snapshot_expired", "request_too_large", "invalid_wallet", "cursor_mismatch", "airdrops_not_available", "wallet_too_large", "module_limit_exceeded", "rate_limited", "internal_error", "invalid_idempotency_key", "platform_unavailable", "platform_failure_recorded", "invalid_request", "incomplete", "upstream_unavailable", "deadline_exceeded"] }, "message": { "type": "string" }, "retryable": { "type": "boolean" }, "details": { "type": "object", "additionalProperties": true, "description": "Never contains upstream URLs, credentials, raw RPC messages, or provider names." } } } } };
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
                    if (!(data2 === "unauthorized" || data2 === "key_revoked" || data2 === "mode_not_permitted" || data2 === "mode_not_available" || data2 === "idempotency_key_reused" || data2 === "request_in_progress" || data2 === "snapshot_expired" || data2 === "request_too_large" || data2 === "invalid_wallet" || data2 === "cursor_mismatch" || data2 === "airdrops_not_available" || data2 === "wallet_too_large" || data2 === "module_limit_exceeded" || data2 === "rate_limited" || data2 === "internal_error" || data2 === "invalid_idempotency_key" || data2 === "platform_unavailable" || data2 === "platform_failure_recorded" || data2 === "invalid_request" || data2 === "incomplete" || data2 === "upstream_unavailable" || data2 === "deadline_exceeded")) {
                      validate46.errors = [{ instancePath: instancePath + "/error/code", schemaPath: "#/components/schemas/ErrorEnvelope/properties/error/properties/code/enum", keyword: "enum", params: { allowedValues: schema62.properties.error.properties.code.enum }, message: "must be equal to one of the allowed values" }];
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
export {
  validateError,
  validateRequest,
  validateResponse
};
