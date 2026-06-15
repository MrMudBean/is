/**
 * 检测 Javascript 数据类型工具之: null
 */

/**
 * # 检测 `input` 是否是 `null` 类型
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `null` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import { isNull } from '@vvi/is';
 *
 * console.log(isNull(null)); // true
 *
 * console.log(isNull(undefined)); // false
 * console.log(isNull(1)); // false
 * ```
 */
export function isNull(input: any): input is null {
  return input === null;
}

/**
 * # 检测 `input` 是否是 `undefined` 类型
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `undefined` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import { isUndefined } from '@vvi/is';
 *
 * console.log(isUndefined(undefined)); // true
 *
 * console.log(isUndefined(null)); // false
 * console.log(isUndefined(1)); // false
 * ```
 *
 */
export function isUndefined(input: any): input is undefined {
  return input === undefined;
}
