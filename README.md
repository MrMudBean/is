# is

[![version](<https://img.shields.io/npm/v/@mudbean/is.svg?logo=npm&logoColor=rgb(0,0,0)&label=版本号&labelColor=rgb(73,73,228)&color=rgb(0,0,0)>)](https://www.npmjs.com/package/@mudbean/is) [![issues 提交](<https://img.shields.io/badge/issues-提交-rgb(255,0,63)?logo=github>)](https://github.com/MrMudBean/is/issues)

一个简单的类型判断工具

## 使用

```ts
import { typeOf } from '@mudbean/is';

const num = 1;

if (typeOf(num) === 'number') {
  console.log('num is number');
} else {
  console.log('num is not number');
}
```

### 使用 `ts` 中的 is 类型判断来进行类型安全收缩

```ts
import { isString, isNumber } from '@mudbean/is';

function doSomething(value: string | number) {
  if (isString(value)) {
    value.toLocaleUpperCase();
  } else if (isNumber(value)) {
    value.toFixed(2);
  }
}

doSomething('hello'); // HELLO
doSomething(1); // 1.00
```

### 向 `as` 说 'no'

vitest

```ts
import { isType } from '@mudbean/is';

interface Person {
    name: string;
    age: number;
}


function doSomething(value: string | number | boolean | ) {

    // 将判断用作类型判断
    if (isType<Person>(value, () => (value && value.name === 'Tom' && value.age === 18))) {
      console.log('value is Person');
      return;
    }

    /// 作为类型判定
    if (isType<string>(value)) {
      value.toLocaleUpperCase();
      return;
    }

    /// 使用判断力
    if (isType<boolean>(value, Boolean(value) === true )) {
      console.log('value is true');
      return;
    }
}
```

### 文档提供类型检测

- `isString` 字符串、`String` 对象构建的字符串
- `isEmptyString` 空字符串
- `isBusinessEmptyString` 空字符串（去除首尾空格）
- `isNumber` 数字、`Number` 对象构建的数字
- `isBoolean` 布尔值、`Boolean` 对象构建的布尔值
- `isTrue` 是否为 true
- `isFalse` 是否为 false
- `isNull` null
- `isUndefined` undefined
- `isNaN` `NaN`（`NaN` 是一个特殊的数值 `NaN !== NaN` 即便 `typeof NaN` 返回的是 `number`）
- `isFunction` 函数
- `isArray` 数组、`Array` 对象构建的数组
- `isEmptyArray` 是否是空数组
- `isSymbol` symbol
- `isBigInt` 大整数
- `isPlainObject` 对象（普通对象，非其他内置对象类型）
- `isEmptyObject` 是否为空对象（没有私有键的对象）
- `isPromise` Promise
- `isAsyncFunction` 异步函数
- `isDate` 时间
- `isMap` Map
- `isSet` Set
- `isWeakMap` WeakMap
- `isWeakSet` WeakSet
- `isGenerator` 生成器
- `isGeneratorFunction` 生成器函数
- `isBigInt64Array` BigInt64Array
- `isBigUint64Array` BigUint64Array
- `isDataView` DataView
- `isArrayBuffer` ArrayBuffer
- `isRegExp` 正则、`RegExp` 对象构建的正则
- `isSharedArrayBuffer` SharedArrayBuffer
- `isUint8ClampedArray` Uint8ClampedArray
- `isInt8Array` Int8Array
- `isUint8Array` Uint8Array
- `isTypedArray` TypedArray
- `isInt16Array` Int16Array
- `isUint16Array` Uint16Array
- `isInt32Array` Int32Array
- `isUint32Array` Uint32Array
- `isFloat32Array` Float32Array
- `isFloat64Array` Float64Array
- `isIntlCollator` Intl.Collator
- `isIntlDateTimeFormat` Intl.DateTimeFormat
- `isIntlDisplayNames` Intl.DisplayNames
- `isIntlListFormat` Intl.ListFormat
- `isIntlLocale` Intl.Locale
- `isIntlNumberFormat` Intl.NumberFormat
- `isError` 错误
- `isEvalError` eval 错误
- `isRangeError` range 错误
- `isReferenceError` reference 错误
- `isSyntaxError` syntax 错误
- `isTypeError` type 错误
- `isURIError` uri 错误
- `isAggregateError` aggregate 错误

## 状态

此软件包是 `@mudbean` 生态系统的一部分。
它使用严格的 TypeScript 编写，并通过 Rollup 构建进行验证。
虽然单元测试较少，但 API 稳定，并在生产环境中大量使用。
