/**
 * 检测 Javascript 数据类型工具之: number
 */

import { typeOf } from './typeOf';

/**
 *
 * 检测 `input` 是否是 `number` 类型
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `number` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import { isNumber } from '@mudbean/is';
 *
 * isNumber(123); // true
 *
 * isNumber('123'); // false
 * ```
 */
export function isNumber(input: any): input is number {
  return typeOf(input) === 'number';
}

/**
 *
 * 检测 `input` 是否是 `BigInt` 类型
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `bigint` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import { isBigInt } from '@mudbean/is';
 *
 * isBigInt(123n); // true
 *
 * isBigInt('123'); // false
 * isBigInt(123); // false
 * isBigInt(true); // false
 * ```
 */
export function isBigInt(input: any): input is bigint {
  return typeOf(input) === 'bigint';
}

/**
 *
 * 检测 `input` 是否是 `NaN` 类型
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `NaN` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import { isNaN } from '@mudbean/is';
 *
 * isNaN(NaN); // true
 *
 * isNaN('123'); // false
 * ```
 */
export function isNaN(input: any): input is typeof NaN {
  return Number.isNaN(input);
}
/**
 *
 * 是否为正整数
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为正整数
 * @example
 *
 * ```ts
 * import { isPositiveInteger } from '@mudbean/is';
 *
 * isPositiveInteger(123); // true
 * isPositiveInteger(1); // true
 *
 * isPositiveInteger(0); // false
 * isPositiveInteger(-1); // true
 * isPositiveInteger(false); // false
 * isPositiveInteger(Infinity); // false
 * isPositiveInteger('123'); // false
 * isPositiveInteger(NaN); // false
 * ```
 */
export function isPositiveInteger(input: any): input is number {
  return Number.isInteger(input) && isNumber(input) && input > 0;
}

/**
 *
 * 是否为负整数
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为负整数
 * @example
 *
 * ```ts
 * import { isPositiveInteger } from '@mudbean/is';
 *
 * isPositiveInteger(-123); // true
 * isPositiveInteger(-1); // true
 *
 * isPositiveInteger(0); // false
 * isPositiveInteger(1); // true
 * isPositiveInteger(false); // false
 * isPositiveInteger(Infinity); // false
 * isPositiveInteger('123'); // false
 * isPositiveInteger(NaN); // false
 * ```
 */
export function isNegativeInteger(input: any): input is number {
  return Number.isInteger(input) && isNumber(input) && input < 0;
}

/**
 *
 * 是否为正整数
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 0
 * @example
 *
 * ```ts
 * import { isZero } from '@mudbean/is';
 *
 * isZero(0); // true
 *
 *
 * isZero(123); // false
 * isZero(1); // false
 * isZero(false); // false
 * isZero(Infinity); // false
 * isZero('123'); // false
 * isZero(NaN); // false
 * ```
 */
export function isZero(input: any): input is 0 {
  return input === 0;
}
