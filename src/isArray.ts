/**
 * 检测 Javascript 数据类型工具之: array
 */
import { typeOf } from './typeOf';

/**
 * # 检测 `input` 是否是 `Array` 类型
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `ReferenceError` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import  { isArray } from '@vvi/is';
 *
 * console.log(isArray([1,2,3])) // true
 * console.log(isArray({})) // false
 * console.log(isArray(new Set())) // false
 * ```
 */
export function isArray<T = any>(input: any): input is Array<T> {
  return Array.isArray(input);
}

/**
 * # 检测 `input` 是否是空数组
 *
 * @param input - 待检测的数据，任意数组
 * @returns 返回 `true` 则说明该数据 `input` 为长度为 0 的空数组 ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import  { isEmptyArray } from '@vvi/is';
 *
 * console.log(isEmptyArray([])) // true
 *
 * console.log(isEmptyArray([1,2,3])) // false
 * console.log(isEmptyArray({})) // TypeError
 * console.log(isEmptyArray(new Set())) // false
 * ```
 */
export function isEmptyArray(input: any[]): boolean {
  if (isArray(input)) {
    return input.length === 0;
  }
  throw new TypeError('参数必须为数组');
}

/**
 * # 检测 `input` 是否是 `Set` 类型
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `ReferenceError` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import  { isSet } from '@vvi/is';
 *
 * console.log(isSet(new Set())) // true
 * console.log(isSet({})) // false
 * console.log(isSet([])) // false
 * ```
 */
export function isSet<T = any>(input: any): input is Set<T> {
  return typeOf(input) === 'set';
}

/**
 * # 检测 `input` 是否是 `WeakSet` 类型
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `WeakSet` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import  { isWeakSet } from '@vvi/is';
 *
 * console.log(isWeakSet(new WeakSet())) // true
 *
 * console.log(isWeakSet({})) // false
 * console.log(isWeakSet([])) // false
 * console.log(isWeakSet(1)) // false
 * ```
 */
export function isWeakSet<T extends WeakKey>(input: any): input is WeakSet<T> {
  return typeOf(input) === 'weakset';
}

/**
 * # 检测 `input` 是否是 `Bigint64Array` 类型
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `BigInt64Array` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import  { isBigInt64Array } from '@vvi/is';
 *
 * console.log(isBigInt64Array(new BigInt64Array())) // true
 *
 * console.log(isBigInt64Array({})) // false
 * console.log(isBigInt64Array([])) // false
 *
 * ```
 */
export function isBigInt64Array<
  TArrayBuffer extends ArrayBufferLike = ArrayBufferLike,
>(input: any): input is BigInt64Array<TArrayBuffer> {
  return typeOf(input) === 'bigint64array';
}

/**
 * # 检测 `input` 是否是 `BigUint64Array` 类型
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `BigUint64Array` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import  { isBigUint64Array } from '@vvi/is';
 *
 * console.log(isBigUint64Array(new BigUint64Array())) // true
 *
 * console.log(isBigUint64Array({})) // false
 * console.log(isBigUint64Array([])) // false
 * console.log(isBigUint64Array(1)) // false
 * ```
 */
export function isBigUint64Array<T extends ArrayBufferLike = ArrayBufferLike>(
  input: any,
): input is BigUint64Array<T> {
  return typeOf(input) === 'biguint64array';
}

/**
 * # 检测 `input` 是否是 `ArrayBuffer` 类型
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `ArrayBuffer` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import  { isArrayBuffer } from '@vvi/is';
 *
 * console.log(isArrayBuffer(new ArrayBuffer(8))) // true
 *
 * console.log(isArrayBuffer({})) // false
 * ```
 */
export function isArrayBuffer(input: any): input is ArrayBuffer {
  return typeOf(input) === 'arraybuffer';
}
/**
 * # 检测 `input` 是否是 `int8Array` 类型
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `Int8Array` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import  { isInt8Array } from '@vvi/is';
 *
 * console.log(isInt8Array(new Int8Array())) // true
 *
 * console.log(isInt8Array({})) // false
 * console.log(isInt8Array([])) // false
 * console.log(isInt8Array(1)) // false
 * ```
 */
export function isInt8Array<
  TArrayBuffer extends ArrayBufferLike = ArrayBufferLike,
>(input: any): input is Int8Array<TArrayBuffer> {
  return typeOf(input) === 'int8array';
}

/**
 * # 检测 `input` 是否是 `uint8Array` 类型
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `Uint8Array` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import  { isUint8Array } from '@vvi/is';
 *
 * console.log(isUint8Array(new Uint8Array())) // true
 *
 * console.log(isUint8Array({})) // false
 * console.log(isUint8Array([])) // false
 * console.log(isUint8Array(1)) // false
 * ```
 */
export function isUint8Array<
  TArrayBuffer extends ArrayBufferLike = ArrayBufferLike,
>(input: any): input is Uint8Array<TArrayBuffer> {
  return typeOf(input) === 'uint8array';
}

/**
 * # 检测 `input` 是否是 `int16Array` 类型
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `Int16Array` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import  { isInt16Array } from '@vvi/is';
 *
 * console.log(isInt16Array(new Int16Array())) // true
 *
 * console.log(isInt16Array({})) // false
 * console.log(isInt16Array([])) // false
 * console.log(isInt16Array(1)) // false
 * ```
 */
export function isInt16Array<
  TArrayBuffer extends ArrayBufferLike = ArrayBufferLike,
>(input: any): input is Int16Array<TArrayBuffer> {
  return typeOf(input) === 'int16array';
}
/**
 * # 检测 `input` 是否是 `uint16Array` 类型
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `Uint16Array` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 *
 * import  { isUint16Array } from '@vvi/is';
 *
 * console.log(isUint16Array(new Uint16Array())) // true
 *
 * console.log(isUint16Array({})) // false
 * console.log(isUint16Array([])) // false
 * console.log(isUint16Array(1)) // false
 * ```
 */
export function isUint16Array<
  TArrayBuffer extends ArrayBufferLike = ArrayBufferLike,
>(input: any): input is Uint16Array<TArrayBuffer> {
  return typeOf(input) === 'uint16array';
}

/**
 * # 检测 `input` 是否是 `uint32Array` 类型
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `Uint32Array` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import  { isUint32Array } from '@vvi/is';
 *
 * console.log(isUint32Array(new Uint32Array())) // true
 *
 * console.log(isUint32Array({})) // false
 * console.log(isUint32Array([])) // false
 * console.log(isUint32Array(1)) // false
 * ```
 */
export function isUint32Array<
  TArrayBuffer extends ArrayBufferLike = ArrayBufferLike,
>(input: any): input is Uint32Array<TArrayBuffer> {
  return typeOf(input) === 'uint32array';
}

/**
 * # 检测 `input` 是否是 `float32Array` 类型
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `Float32Array` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import  { isFloat32Array } from '@vvi/is';
 *
 * console.log(isFloat32Array(new Float32Array())) // true
 *
 * console.log(isFloat32Array({})) // false
 * console.log(isFloat32Array([])) // false
 * console.log(isFloat32Array(1)) // false
 * ```
 */
export function isFloat32Array<
  TArrayBuffer extends ArrayBufferLike = ArrayBufferLike,
>(input: any): input is Float32Array<TArrayBuffer> {
  return typeOf(input) === 'float32array';
}

/**
 * # 检测 `input` 是否是 `float64Array` 类型
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `Float64Array` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import  { isFloat64Array } from '@vvi/is';
 *
 * console.log(isFloat64Array(new Float64Array())) // true
 *
 * console.log(isFloat64Array({})) // false
 * console.log(isFloat64Array([])) // false
 * console.log(isFloat64Array(1)) // false
 * ```
 */
export function isFloat64Array<
  TArrayBuffer extends ArrayBufferLike = ArrayBufferLike,
>(input: any): input is Float64Array<TArrayBuffer> {
  return typeOf(input) === 'float64array';
}

/**
 * # 检测 `input` 是否是 `sharedArrayBuffer` 类型
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `SharedArrayBuffer` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import  { isSharedArrayBuffer } from '@vvi/is';
 *
 * console.log(isSharedArrayBuffer(new SharedArrayBuffer(8))) // true
 *
 * console.log(isSharedArrayBuffer({})) // false
 * ```
 */
export function isSharedArrayBuffer(input: any): input is SharedArrayBuffer {
  return typeOf(input) === 'sharedarraybuffer';
}

/**
 * # 检测 `input` 是否是 `uint8ClampedArray` 类型
 *
 * @param input - 待检测的数据，任意类型
 * @returns 返回 `true` 则说明该数据 `input` 类型为 `Uint8ClampedArray` ，且在 Typescript 中进行类型收缩
 * @example
 *
 * ```ts
 * import  { isUint8ClampedArray } from '@vvi/is';
 *
 * console.log(isUint8ClampedArray(new Uint8ClampedArray())) // true
 *
 * console.log(isUint8ClampedArray({})) // false
 * console.log(isUint8ClampedArray([])) // false
 * console.log(isUint8ClampedArray(1)) // false
 * ```
 */
export function isUint8ClampedArray<
  TArrayBuffer extends ArrayBufferLike = ArrayBufferLike,
>(input: any): input is Uint8ClampedArray<TArrayBuffer> {
  return typeOf(input) === 'uint8clampedarray';
}
