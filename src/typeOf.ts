/**
 * 检测 Javascript 数据类型工具
 */
import { Typeof } from './types';

/**
 *  # 数据类型检测
 *
 * @param input - 待检测的数据，任意类型
 * @returns 检测数据类型的字符串表示（小写字母）
 * @example
 * ```ts
 * import  { typeOf } from '@mudbean/is';
 *
 *  console.log(typeOf(1) === 'number'); // true
 *  console.log(typeOf('1') === 'string'); // true
 *  console.log(typeOf(null) === 'null'); // true
 *  console.log(typeOf(undefined) === 'undefined'); // true
 *  console.log(typeOf(true) === 'boolean'); // true
 *  console.log(typeOf(Symbol()) === 'symbol');
 *  console.log(typeOf(new Date()) === 'date');
 *  console.log(typeOf([]) === 'array');
 *  console.log(typeOf(new Set()) === 'set');
 *  console.log(typeOf(new Map()) === 'map');
 *  console.log(typeOf(new Error()) === 'error');
 *  console.log(typeOf(new Promise(() => {})) === 'promise');
 *    ...
 * ```
 */
export function typeOf(input: any): Typeof {
  /**
   * 使用 typeof 判断数据类型
   */
  const typeofValue:
    | 'string'
    | 'number'
    | 'bigint'
    | 'boolean'
    | 'symbol'
    | 'undefined'
    | 'object'
    | 'function' = typeof input;

  // 检验出原始数据类型
  if ('object' !== typeofValue && 'function' !== typeofValue) {
    return typeofValue;
  }

  /**
   * # 通过 Object.prototype.toString.call(o) 判断数据类型
   */
  const toStringCallValue = Reflect.apply(Object.prototype.toString, input, [])
    .replace(/^.*\s(.*)]$/, '$1')
    .toLowerCase();

  if ('error' !== toStringCallValue) {
    return toStringCallValue as Typeof;
  }

  if (input instanceof SyntaxError) {
    return 'syntaxerror';
  }

  if (input instanceof TypeError) {
    return 'typeerror';
  }

  if (input instanceof URIError) {
    return 'urierror';
  }

  if (input instanceof ReferenceError) {
    return 'referenceerror';
  }

  // if (input instanceof InternalError) {
  //   return 'internalerror';
  // }

  if (input instanceof AggregateError) {
    return 'aggregateerror';
  }

  if (input instanceof RangeError) {
    return 'rangeerror';
  }

  if (input instanceof EvalError) {
    return 'evalerror';
  }

  return 'error';
}
