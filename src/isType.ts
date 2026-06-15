/**
 *  `input` 类型收缩
 */

/**
 * # 给出一个类型 `T` ，以返回值真假来判断 `input` 是否为 `T` 类型
 *
 * @param  input 待检测的数据
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `ReferenceError` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import  { isType } from '@vvi/is';
 *
 * console.log(isType<number>(1)); // true
 * console.log(isType<string>('1')); // true
 * ```
 */
export function isType<T = string>(input: any): input is T;

/**
 * # 给出一个类型 `T` ，以返回值真假来判断 `input` 是否为 `T` 类型
 *
 * @param  input 待检测的数据
 * @param  judgingConditions 返回 boolean 来反向确认该值的类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `ReferenceError` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import  { isType } from '@vvi/is';
 *
 * console.log(isType<number>(1, true)); // true
 * console.log(isType<number>(1, () => true)); // true
 * console.log(isType<string>(1, false)); // false
 * console.log(isType<string>(1, () => false)); // false
 *
 * console.log(isType<string>('1')); // true
 * console.log(isType<string>('1', true)); // true
 * console.log(isType<string>('1', () => true)); // true
 *
 * console.log(isType<number>('1', false)); // false
 * console.log(isType<number>('1', () => false)); // false
 * // 下面的例子尽然有些画蛇添足，但是在实际使用的时候却是方便的很
 * console.log(isType<number>(1, (input) => typeof input === 'number' )); // true
 *
 * // 譬如 (下面的用法 （需求出自于 \@qqi/table ）)
 *
 * type BorderStyle = "dash" | "bold" | "double" | "simple";
 *
 * type UnilateralBorder = {
 *   color: string | undefined;
 *   style: BorderStyle
 * }
 *
 * type Border = {
 *   left: UnilateralBorder;
 *   right: UnilateralBorder;
 *   top: UnilateralBorder;
 *   bottom: UnilateralBorder;
 * }
 *
 *
 * function fn (border: BorderStyle |  UnilateralBorder | Border) {
 *    if (isType<BorderStyle>(border, input => isString(input))) {
 *      // 然后这里 `border` 就可以当 `BorderStyle` 使用了
 *      // 而不是每一次使用都添加上 `as BorderStyle`
 *    } else if (
 *      isType<UnilateralBorder>(border, input =>
 *          isString(input.color) || isString(input.style))) {
 *      // 然后这里 `border` 就可以当 `UnilateralBorder` 使用了
 *      // 而不是每一次使用都添加上 `as UnilateralBorder`
 *      // 更关键的是上面的判断区域中不会报错，即 `input` 类型也是 `UnilateralBorder`
 *
 *    }
 *    ...
 * }
 * ```
 */
export function isType<T = string>(
  input: any,
  judgingConditions: boolean | ((input: T) => boolean),
): input is T;

/**    */
export function isType<T = string>(
  input: any,
  judgingConditions?: boolean | ((input: T) => boolean),
): input is T {
  if (judgingConditions === undefined) return true;

  if (typeof judgingConditions === 'function') {
    return judgingConditions(input as T);
  }
  return judgingConditions;
}
