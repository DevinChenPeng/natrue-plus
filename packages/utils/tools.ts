import { isNaN } from "lodash";
/**
 * 检查给定的值是否为数字。
 *
 * 此函数用于确定提供的值是否为数字类型且不是NaN（非数字）。
 * 它首先检查值的类型是否为"number"，然后使用Number.isNaN方法确保值不是NaN。
 * 这种方法比简单的类型检查更可靠地确保了值是一个有效的数字。
 *
 * @param value 任何类型的值，将被检查是否为数字。
 * @returns 如果值是一个有效的数字，则返回true；否则返回false。
 */
export function isNumber(value: any): value is number {
    return typeof value === 'number' && !isNaN(value);
}

/**
 * 检查给定的值是否为字符串类型
 *
 * 此函数通过两种方式确保给定值是字符串：
 * 1. 使用typeof操作符检查值的类型是否为"string"
 * 2. 调用Object.prototype.toString方法检查值的内部类是否为"[object String]"
 *
 * 这种双重检查方法提高了类型检测的准确性和可靠性
 *
 * @param value 任何类型的值，将被检查是否为字符串
 * @returns 如果给定的值是字符串，则返回true；否则返回false
 */
export function isString(value: any): value is string {
    return typeof value === 'string' && Object.prototype.toString.call(value) === '[object String]';
}

/**
 * 检查给定的值是否为布尔类型
 *
 * 此函数通过两种方式确保值是布尔类型：
 * 1. 使用typeof操作符检查值的类型是否为'boolean'
 * 2. 调用Object.prototype.toString方法检查值的包装对象类型是否为'[object Boolean]'
 *
 * 这种双重检查是为了确保值不仅是布尔类型的原始表示，而且还是布尔对象的实例
 *
 * @param value 任何类型的值，将被检查是否为布尔类型
 * @returns 如果值是布尔类型，则返回true；否则返回false
 */
export function isBoolean(value: any): value is boolean {
    return typeof value === 'boolean' && Object.prototype.toString.call(value) === '[object Boolean]';
}

/**
 * 检查给定值是否为数组
 *
 * 此函数使用TypeScript的类型守卫功能来提供类型检查能力
 * 它对于确定变量是否为数组类型特别有用，从而在类型守卫范围内改变该变量的类型推断
 *
 * @param value - 待检查的值，可以是任何类型
 * @returns 如果给定值是数组，则返回true；否则返回false
 */
export function isArray(value: any): value is any[] {
    return Array.isArray(value);
}

/**
 * 判断给定的值是否为一个对象。
 *
 * 该函数检查值的类型是否为 'object'，且不为 null，不是数组，也不是函数。
 * 它排除了 null、数组和函数，因为在实际应用中，这些类型虽然在技术上是对象，
 * 但通常需要不同的处理方式，特别是在需要“纯”对象来存储键值对的场景中。
 *
 * @param value 需要检查的值。
 * @returns 如果值是一个对象，返回 true；否则返回 false。
 */
export function isObject(value: any): value is Record<string, any> {
    return typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value !== 'function';
}

/**
 * 检查给定的值是否为 null。
 *
 * 该函数用于精确判断一个值是否为 null，常用于类型守卫场景，以确保类型安全。
 *
 * @param value 任何类型的值，用于检查是否为 null。
 * @returns 如果值为 null，则返回 true，否则返回 false。
 */
export function isNull(value: any): value is null {
    return value === null;
}

/**
 * 检查给定的值是否为 `undefined`。
 *
 * 此函数用于确定一个值是否未定义，这在处理可能未初始化的变量时特别有用。
 * 它提供了一种类型安全的方式来检查变量。
 *
 * @param value {any} - 需要检查的值，可以是任何类型。
 * @returns {value is undefined} - 如果 `value` 是 `undefined`，则返回 `true`，否则返回 `false`。
 */
export function isUndefined(value: any): value is undefined {
    return value === undefined;
}

/**
 * 判断给定的值是否为函数
 *
 * @param value 任意类型的值，用于判断是否为函数
 * @returns 如果值是函数类型，则返回true；否则返回false
 */
export function isFunction(value: any): value is Function {
    return typeof value === 'function';
}
