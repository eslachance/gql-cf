"use strict";
exports.__esModule = true;
exports.ConditionalField = void 0;
var ConditionalField = /** @class */ (function () {
    function ConditionalField() {
    }
    ConditionalField.init = function (projectConfig) {
        ConditionalField.projectConfig = projectConfig;
    };
    ConditionalField.cf = function (base) {
        var variables = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            variables[_i - 1] = arguments[_i];
        }
        var result = [base[0]];
        if (!ConditionalField.projectConfig) {
            return;
        }
        variables.forEach(function (key, i) {
            var res = typeof key === 'function' ? key(ConditionalField.projectConfig) || '' : key;
            result.push(res, base[i + 1]);
        });
        return result.join('');
    };
    return ConditionalField;
}());
exports.ConditionalField = ConditionalField;
