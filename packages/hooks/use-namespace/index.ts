export const defaultNamespace = 'np';
const statePrefix = 'is-';

/**
 * 生成基于BEM（Block Element Modifier）命名约定的CSS类名
 *
 * @param namespace 命名空间，通常用于标识项目或库，以避免样式冲突
 * @param block 块名，代表一个独立的功能模块
 * @param blockSuffix 块后缀，用于标识块的变体
 * @param element 元素名，代表块中的子元素
 * @param modifier 修饰符，描述元素或块的某一状态或样式变体
 * @returns 返回根据BEM命名约定生成的CSS类名字符串
 */
const _bem = (namespace: string, block: string, blockSuffix: string, element: string, modifier: string) => {
    // 初始化类名，组合命名空间和块名
    let cls = `${namespace}-${block}`;

    // 如果存在块后缀，将其加入类名中
    if (blockSuffix) {
        cls += `-${blockSuffix}`;
    }

    // 如果存在元素名，将其加入类名中
    if (element) {
        cls += `__${element}`;
    }

    // 如果存在修饰符，将其加入类名中
    if (modifier) {
        cls += `--${modifier}`;
    }

    // 返回最终生成的类名
    return cls;
};
/**
 * 自定义命名空间钩子
 * 该钩子用于确定组件应使用的最终命名空间它考虑了命名空间的覆盖和当前实例的上下文
 *
 * @param namespaceOverrides 可选的命名空间覆盖值如果提供，则使用该值作为最终命名空间
 * @returns 返回一个计算属性，表示最终确定的命名空间
 */
export const useGetDerivedNamespace = (namespaceOverrides?: string) => {
    // 确定使用的命名空间：如果有覆盖则使用覆盖的命名空间，若无则使用默认命名空间
    const derivedNamespace = namespaceOverrides || defaultNamespace;
    // 返回计算出的命名空间
    return derivedNamespace;
};
export const useNamespace = (block: string, namespaceOverrides?: string) => {
    const namespace = useGetDerivedNamespace(namespaceOverrides);
    const b = (blockSuffix = '') => _bem(namespace, block, blockSuffix, '', '');
    const e = (element?: string) => (element ? _bem(namespace, block, '', element, '') : '');
    const m = (modifier?: string) => (modifier ? _bem(namespace, block, '', '', modifier) : '');
    const be = (blockSuffix?: string, element?: string) => (blockSuffix && element ? _bem(namespace, block, blockSuffix, element, '') : '');
    const em = (element?: string, modifier?: string) => (element && modifier ? _bem(namespace, block, '', element, modifier) : '');
    const bm = (blockSuffix?: string, modifier?: string) => (blockSuffix && modifier ? _bem(namespace, block, blockSuffix, '', modifier) : '');
    const bem = (blockSuffix?: string, element?: string, modifier?: string) => (blockSuffix && element && modifier ? _bem(namespace, block, blockSuffix, element, modifier) : '');
    const is: {
        (name: string, state: boolean | undefined): string;
        (name: string): string;
    } = (name: string, ...args: [boolean | undefined] | []) => {
        const state = args.length >= 1 ? args[0]! : true;
        return name && state ? `${statePrefix}${name}` : '';
    };

    return {
        namespace,
        b,
        e,
        m,
        be,
        em,
        bm,
        bem,
        is
    };
};
