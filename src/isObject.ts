/**
 * 检测 Javascript 数据类型工具之: object
 */
import { typeOf } from './typeOf';

/**
 *
 * 检测 `input` 是否是类型 `plain object` （自定义的对象）
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `object` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import { isPlainObject } from 'a-type-of-js';
 *
 * console.log(isPlainObject({})); // true
 *
 * // false ( Array is not an plain object )
 * console.log(isPlainObject([]));
 * // false ( Date is not an plain object )
 * console.log(isPlainObject(new Date()));
 * // false ( Map is not an plain object )
 * console.log(isPlainObject(new Map()));
 * ```
 */
export function isPlainObject<T extends object>(input: any): input is T {
  return typeOf(input) === 'object';
}

/**
 *
 * 检测 `input` 是否是否是一个没有自己私有键的对象
 *
 * @param input - 待检测的数据，任意类型
 * @returns 是否为空的对象。不包含任何属性，包括 Symbol 或是不可被枚举的属性
 * @example
 *
 * ```ts
 * import { isEmptyObject } from 'a-type-of-js';
 *
 * const a = new Object();
 *
 * console.log(isEmptyObject(a)); // true
 * console.log(Reflect.ownKeys(input).length); // 0
 * console.log(Object.keys(a).length); // 0
 * console.log(Object.getOwnPropertyNames(a).length); // 0
 * console.log(Object.getOwnPropertySymbols(a).length); // 0
 *
 * Object.defineProperties(a, {
 *     a: {
 *       value: 10,
 *       enumerable: false,
 *       writable: false,
 *       configurable: false,
 *     },
 * });
 *
 * console.log(isEmptyObject(a)); // false
 * console.log(Reflect.ownKeys(input).length); // 1
 * console.log(Object.keys(a).length); // 0
 * console.log(Object.getOwnPropertyNames(a).length); // 1
 * console.log(Object.getOwnPropertySymbols(a).length); // 0
 *
 * const b = Symbol('private proto');
 *
 * a[b] = b;
 *
 * console.log(isEmptyObject(a)); // false
 * console.log(Reflect.ownKeys(input).length); // 2
 * console.log(Object.keys(a).length); // 0
 * console.log(Object.getOwnPropertyNames(a).length); // 1
 * console.log(Object.getOwnPropertySymbols(a).length); // 1
 *
 * delete a[a];
 *
 * console.log(isEmptyObject(a)); // false
 * console.log(Reflect.ownKeys(input).length); // 1
 * console.log(Object.keys(a).length); // 0
 * console.log(Object.getOwnPropertyNames(a).length); // 0
 * console.log(Object.getOwnPropertySymbols(a).length); // 1
 *
 *
 * delete a[b];
 *
 * console.log(isEmptyObject(a)); // true
 * console.log(Reflect.ownKeys(input).length); // 0
 * console.log(Object.keys(a).length); // 0
 * console.log(Object.getOwnPropertyNames(a).length); // 0
 * console.log(Object.getOwnPropertySymbols(a).length); // 0
 *
 * ```
 */
export function isEmptyObject(input: any): input is Record<string, never> {
  return isPlainObject(input) && Reflect.ownKeys(input).length === 0;
}

/**
 *
 * 检测 data 是否是  类型{@link Date}
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `Date` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import { isDate } from 'a-type-of-js';
 *
 * console.log(isDate(new Date())); // true
 * console.log(isDate(new Date(0))); // true
 * console.log(isDate(new Date('2025-03-19'))); // true
 * console.log(isDate(new Date(NaN))); // true
 * console.log(isDate(new Date(undefined))); // true
 * console.log(isDate(new Date(null))); // true
 *
 * // false ( Number 不是 Date )
 * console.log(isDate(1));
 * // false ( String 不是 Date )
 * console.log(isDate('1'));
 * ```
 */
export function isDate(input: any): input is Date {
  return typeOf(input) === 'date';
}

/**
 *
 * 检测 `input` 是否是 `DataView` 类型
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `DataView` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import { isDataView } from 'a-type-of-js';
 *
 * console.log(isDataView(new DataView(new ArrayBuffer(8)))); // true
 *
 * // false (ArrayBuffer 不是 DataView)
 * console.log(isDataView(new ArrayBuffer(8)));
 * ```
 */
export function isDataView<T extends ArrayBufferLike = ArrayBufferLike>(
  input: any,
): input is DataView<T> {
  return typeOf(input) === 'dataview';
}

/**
 *
 * 检测 `input` 是否是 `Map` 类型
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `Map` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import { isMap } from 'a-type-of-js';
 *
 * console.log(isMap(new Map())); // true
 *
 * // false (WeakMap 不是 Map)
 * console.log(isMap(new WeakMap()));
 * // false (Set 不是 Map)
 * console.log(isMap(new Set()));
 * // false (WeakSet 不是 Map)
 * console.log(isMap(new WeakSet()));
 * // false (Array 不是 Map)
 * console.log(isMap(new Array()));
 * ```
 */
export function isMap<K extends string, V = any>(
  input: any,
): input is Map<K, V> {
  return typeOf(input) === 'map';
}

/**
 *
 * 检测 `input` 是否是 `WeakMap` 类型
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `WeakMap` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import { isWeakMap } from 'a-type-of-js';
 *
 * console.log(isWeakMap(new WeakMap())); // true
 *
 * // false (Map is not WeakMap)
 * console.log(isWeakMap(new Map()));
 * // false (Set is not WeakMap)
 * console.log(isWeakMap(new Set()));
 * // false (WeakSet is not WeakMap)
 * console.log(isWeakMap(new WeakSet()));
 * // false (Array is not WeakMap)
 * console.log(isWeakMap(new Array()));
 * ```
 */
export function isWeakMap(input: any): input is WeakMap<object, any> {
  return typeOf(input) === 'weakmap';
}
