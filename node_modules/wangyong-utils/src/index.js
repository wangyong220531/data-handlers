"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wyArraySort = exports.wyDeepClone = exports.wyUniqueArray = void 0;
/**
 * 数组去重
 * @param arr - 数组
 */
function wyUniqueArray(arr) {
    return Array.from(new Set(arr));
}
exports.wyUniqueArray = wyUniqueArray;
/**
 * 深拷贝
 * @param obj - 对象
 */
function wyDeepClone(obj) {
    if (typeof obj !== "object" || obj === null) {
        return obj;
    }
    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }
    if (obj instanceof Array) {
        return obj.reduce((arr, cur) => {
            arr.push(wyDeepClone(cur));
            return arr;
        }, []);
    }
    let newObj = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = wyDeepClone(obj[key]);
        }
    }
    return newObj;
}
exports.wyDeepClone = wyDeepClone;
/**
 * 数组排序
 * @param arr - 数组，compareFunction - 排序方法
 */
function wyArraySort(arr, compareFunction) {
    const newArr = wyDeepClone(arr);
    if (newArr instanceof Array) {
        newArr.sort(compareFunction);
        return newArr;
    }
    return;
}
exports.wyArraySort = wyArraySort;
