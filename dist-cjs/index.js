"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tmox = tmox;
const tailwind_merge_1 = require("tailwind-merge");
const clsx_1 = require("clsx");
function tmox(...inputs) {
    return (0, tailwind_merge_1.twMerge)((0, clsx_1.clsx)(inputs));
}
