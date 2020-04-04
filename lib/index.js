"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isGuid(obj) {
    if (obj.substr(0, 23) == '00000000-0000-0000-0000') {
        return true;
    }
    // tslint:disable-next-line:max-line-length
    var guidRegEx = new RegExp(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
    return guidRegEx.test(obj);
}
exports.isGuid = isGuid;
