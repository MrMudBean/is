/**
 * 检测 Javascript 数据类型工具之: string
 */
import { typeOf } from './typeOf';

/**
 * # 当前数据类型是否为 string
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `string` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import { isString } from '@mudbean/is';
 *
 * console.log(isString('hello')); // true
 *
 * // false (number 不是 string)
 * console.log(isString(123));
 * // false (boolean 不是 string)
 * console.log(isString(true));
 * // false (null 不是 string)
 * console.log(isString(null));
 * ```
 */
export function isString(input: any): input is string {
  return typeOf(input) === 'string';
}

/**
 * # 检测 `input` 是否是 `RegExp` 类型
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `RegExp` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import { isRegExp } from '@mudbean/is';
 *
 * console.log(isRegExp(/abc/)); // true
 * console.log(isRegExp(new RegExp('abc'))); // true
 *
 * // false (number 不是 RegExp)
 * console.log(isRegExp(123));
 * // false (string 不是 RegExp)
 * console.log(isRegExp('abc'));
 * // false (null 不是 RegExp)
 * console.log(isRegExp(null));
 * ```
 */
export function isRegExp(input: any): input is RegExp {
  return typeOf(input) === 'regexp';
}

/**
 * # 检测 `input` 是否是（绝对）空字符串
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `string` 且为 空字符串，且在 Typescript 中进行类型收缩
 *
 * @example
 *
 * ```ts
 * import { isEmptyString } from '@mudbean/is';
 *
 * console.log(isEmptyString('')); // true
 * const.log(isEmptyString(new String())); // true
 * const.log(isEmptyString(new String(''))); // true
 *
 *
 * // 以下情况返回 false
 * console.log(isEmptyString(' ')); // false
 * console.log(isEmptyString('abc')); // false
 * // false (number 不是 string)
 * console.log(isEmptyString(123));
 * // false (boolean 不是 string)
 * console.log(isEmptyString(true));
 * // false (null 不是 string)
 * console.log(isEmptyString(null));
 * ```
 */
export function isEmptyString(input: any): input is '' {
  return isString(input) && input.valueOf() === '';
}

/**
 * # 检测 `input` 是否是（业务）空字符串
 *
 * 业务空字符串：指字符串开头和结尾的空格，以及中间连续的空格，都算作空字符串
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `string` 且为 业务空字符串，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import { isBusinessEmptyString } from '@mudbean/is';
 *
 * console.log(isBusinessEmptyString('')); // true
 * console.log(isBusinessEmptyString(' ')); // true
 * console.log(isBusinessEmptyString('  ')); // true
 * console.log(isBusinessEmptyString(new String())); // true
 * console.log(isBusinessEmptyString(new String(''))); // true
 * console.log(isBusinessEmptyString(new String(' '))); // true
 *
 * // 以下情况返回 false
 * console.log(isBusinessEmptyString('abc')); // false
 * // false (number 不是 string)
 * console.log(isBusinessEmptyString(123));
 * // false (boolean 不是 string)
 * console.log(isBusinessEmptyString(true));
 * // false (null 不是 string)
 * console.log(isBusinessEmptyString(null));
 * ```
 */
export function isBusinessEmptyString(input: any): input is '' {
  return isString(input) && input.valueOf().trim() === '';
}
