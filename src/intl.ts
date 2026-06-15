/**
 * 检测 Javascript 数据类型工具之: Intl
 * @author Mr.MudBean <Mr.MudBean@outlook.com>
 */
import { typeOf } from './typeOf';

/**
 * # 检测 `input` 是否是 `Intl.Collator` 类型
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `Intl.Collator` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import { isIntlCollator } from '@vvi/is';
 *
 * console.log(isIntlCollator(new Intl.Collator())); // true
 *
 * console.log(isIntlCollator(new Intl.DateTimeFormat())); // false
 * ```
 */
export function isIntlCollator(input: any): input is Intl.Collator {
  return typeOf(input) === 'intl.collator';
}

/**
 * # 检测 `input` 是否是 `Intl.DateTimeFormat` 类型
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `Intl.DateTimeFormat` ，且在 Typescript 中进行类型收缩
 *
 * @example
 *
 * ```ts
 * import { isIntlDateTimeFormat } from '@vvi/is';
 *
 * console.log(isIntlDateTimeFormat(new Intl.DateTimeFormat())); // true
 *
 * console.log(isIntlDateTimeFormat('hello')); // false
 * console.log(isIntlDateTimeFormat(1)); // false
 * console.log(isIntlDateTimeFormat(true)); // false
 * ```
 */
export function isIntlDateTimeFormat(input: any): input is Intl.DateTimeFormat {
  return typeOf(input) === 'intl.datetimeformat';
}

/**
 * # 检测 `input` 是否是 `Intl.DisplayNames` 类型
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `Intl.DisplayNames` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import { isIntlDisplayNames } from '@vvi/is';
 *
 * console.log(isIntlDisplayNames(new Intl.DisplayNames())); // true
 *
 * console.log(isIntlDisplayNames(new Intl.Locale())); // false
 * ```
 */
export function isIntlDisplayNames(input: any): input is Intl.DisplayNames {
  return typeOf(input) === 'intl.displaynames';
}
/**
 * #检测 `input` 是否是 `Intl.DurationFormat` 类型
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `Intl.DurationFormat` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import { isIntlDurationFormat } from '@vvi/is';
 *
 * ```
 *
 */
// export function isIntlDurationFormat(
//   input: any,
// ): input is Intl.DurationFormat {
//   return typeOf(input) === 'intl.durationformat';
// }

/**
 * # 检测 `input` 是否是 `Intl.ListFormat` 类型
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `Intl.ListFormat` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import { isIntlListFormat } from '@vvi/is';
 *
 * console.log(isIntlListFormat(new Intl.ListFormat())); // true
 *
 * console.log(isIntlListFormat(new Intl.DateTimeFormat())); // false
 * console.log(isIntlListFormat(1)); // false
 * console.log(isIntlListFormat('1')); // false
 * console.log(isIntlListFormat(null)); // false
 * ```
 */
export function isIntlListFormat(input: any): input is Intl.ListFormat {
  return typeOf(input) === 'intl.listformat';
}

/**
 * # 检测 `input` 是否是 `Intl.Locale` 类型
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `Intl.Locale` ，且在 Typescript 中进行类型收缩
 *
 * @example
 *
 * ```ts
 * import { isIntlLocale } from '@vvi/is';
 *
 * console.log(isIntlLocale(new Intl.Locale())); // true
 *
 * console.log(isIntlLocale('en')); // false
 * console.log(isIntlLocale(1)); // false
 * ```
 */
export function isIntlLocale(input: any): input is Intl.Locale {
  return typeOf(input) === 'intl.locale';
}
/**
 * # 检测 `input` 是否是 `Intl.NumberFormat` 类型
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `Intl.NumberFormat` ，且在 Typescript 中进行类型收缩
 *
 * @example
 *
 * ```ts
 * import { isIntlNumberFormat } from '@vvi/is';
 *
 * console.log(isIntlNumberFormat(new Intl.NumberFormat())); // true
 *
 * console.log(isIntlNumberFormat(123)); // false
 * console.log(isIntlNumberFormat('123')); // false
 * console.log(isIntlNumberFormat(new Date())); // false
 * console.log(isIntlNumberFormat(new Date(0))); // false
 * ```
 */
export function isIntlNumberFormat(input: any): input is Intl.NumberFormat {
  return typeOf(input) === 'intl.numberformat';
}
