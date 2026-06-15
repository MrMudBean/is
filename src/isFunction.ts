/**
 * 检测 Javascript 数据类型工具之: function
 */
import { typeOf } from './typeOf';

/**
 * # 检测 `input` 是否是 `function` 类型
 *
 * 函数分类：
 * - 普通函数
 * - 使用 `async` 标注的异步函数
 * - 使用 `*` 标注的生成器函数
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `function` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import { isFunction } from '@vvi/is';
 *
 * console.log(isFunction(() => {})); // true
 *
 * console.log(isFunction(async () => {})); // false
 * console.log(isFunction(function* () {})); // false
 * ```
 */
export function isFunction<T extends (...args: any[]) => void>(
  input: any,
): input is T {
  return 'function' === typeOf(input);
}

/**
 * # 检测 `input` 是否是 `Promise` 类型
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `Promise` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import { isPromise } from '@vvi/is';
 *
 * console.log(isPromise(new Promise(() => {}))); // true
 * console.log(isPromise(() => {})); // false
 * ```
 */
export function isPromise<T>(input: any): input is Promise<T> {
  return typeOf(input) === 'promise';
}
/**
 * # 检测 `input` 是否是 `AsyncFunction` 类型
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `async function` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import { isAsyncFunction } from '@vvi/is';
 *
 * console.log(isAsyncFunction(async () => {})); // true
 * console.log(isAsyncFunction(() => {})); // false
 * ```
 */
export function isAsyncFunction<T extends (...args: any[]) => void>(
  input: any,
): input is () => Promise<T> {
  return typeOf(input) === 'asyncfunction';
}

/**
 * # 检测 `input` 是否是 `GeneratorFunction` 类型
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `generator function` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import { isGeneratorFunction } from '@vvi/is';
 *
 * console.log(isGeneratorFunction(function* () {})); // true
 * console.log(isGeneratorFunction(() => {})); // false
 * ```
 */
export function isGeneratorFunction(input: any): input is GeneratorFunction {
  return typeOf(input) === 'generatorfunction';
}

/**
 * # 检测 `input` 是否是 `Generator` 类型
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `Generator` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import { isGenerator } from '@vvi/is';
 *
 * const log = (str) => console.log(str);
 * const foo = function* () {
 *  yield "a";
 *  yield "b";
 *  yield "c";
 * }
 *
 * const gen = foo();
 *
 * log(gen.next().value);  // a
 * log(gen.next().value);  // b
 * log(gen.next().value);  // c
 *
 * console.log(isGenerator(foo)); // false
 * console.log(isGenerator(gen)); // true
 * ```
 */
export function isGenerator(input: any): input is Generator {
  return typeOf(input) === 'generator';
}
