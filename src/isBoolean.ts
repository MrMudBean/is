/**
 * 检测 Javascript 数据类型工具之: boolean
 */
import { typeOf } from './typeOf';
/**
 * 当前数据类型是否为 boolean
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `boolean` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import { isBoolean } from 'a-type-of-js';
 *
 * console.log(isBoolean(true)); // true
 * console.log(isBoolean(false)); // true
 *
 * console.log(isBoolean(1)); // false
 * console.log(isBoolean('true')); // false
 * ```
 */
export function isBoolean(input: any): input is boolean {
  return typeOf(input) === 'boolean';
}

/**
 *
 * 当前数据类型是否为真值 true
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `true` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import { isTrue } from 'a-type-of-js';
 *
 * console.log(isTrue(true)); // true
 *
 * console.log(isTrue(false)); // false
 * console.log(isTrue(1)); // false
 * console.log(isTrue('true')); // false
 * ```
 */
export function isTrue(input: any): input is true {
  return input === true;
}
/**
 *
 * 当前数据类型是否为真值 false
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `false` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import { isFalse } from 'a-type-of-js';
 *
 * console.log(isFalse(false)); // true
 *
 * console.log(isFalse(true)); // false
 * console.log(isFalse(1)); // false
 * console.log(isFalse('true')); // false
 * ```
 */
export function isFalse(input: any): input is false {
  return input === false;
}
