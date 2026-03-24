/**
 * 检测 Javascript 数据类型工具之: function
 */
import { typeOf } from './typeOf';

/**
 *
 * 检测 `input` 是否是 `function` 类型
 *
 * Function classification:
 * - Ordinary functions
 * - An asynchronous function annotated by `async`
 * - Generator function annotated by `*`
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `function` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import { isFunction } from 'a-type-of-js';
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
 *
 * 检测 `input` 是否是 `Promise` 类型
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `Promise` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import { isPromise } from 'a-type-of-js';
 *
 * console.log(isPromise(new Promise(() => {}))); // true
 * console.log(isPromise(() => {})); // false
 * ```
 */
export function isPromise<T>(input: any): input is Promise<T> {
  return typeOf(input) === 'promise';
}
/**
 *
 * 检测 `input` 是否是 `AsyncFunction` 类型
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `async function` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import { isAsyncFunction } from 'a-type-of-js';
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
 *
 * 检测 `input` 是否是 `GeneratorFunction` 类型
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `generator function` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import { isGeneratorFunction } from 'a-type-of-js';
 *
 * console.log(isGeneratorFunction(function* () {})); // true
 * console.log(isGeneratorFunction(() => {})); // false
 * ```
 *
 */
export function isGeneratorFunction(input: any): input is GeneratorFunction {
  return typeOf(input) === 'generatorfunction';
}

/**
 *
 * 检测 `input` 是否是 `Generator` 类型
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `Generator` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import { isGenerator } from 'a-type-of-js';
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
 *
 * ```
 */
export function isGenerator(input: any): input is Generator {
  return typeOf(input) === 'generator';
}
