import { defaultNamespace, useNamespace } from '@natrue-plus/hooks';
import { isString } from '@natrue-plus/utils';
import { Component, computed, defineComponent, ExtractPropTypes, h, mergeProps, PropType } from 'vue';
const props = {
    color: String,
    hoverColor: String,
    size: {
        type: [Number, String] as PropType<string | number>,
        default: 32
    },
    component: Object as PropType<Component>,
    tag: {
        type: String,
        default: 'i'
    }
} as const;
export type IconProps = ExtractPropTypes<typeof props>;
export const NpIcon = defineComponent({
    name: 'NpIcon',
    inheritAttrs: false,
    props,
    setup(props, { attrs, slots }) {
        const ns = useNamespace('icon');
        const styles = computed(() => {
            let fontSize;
            if (isString(props.size)) {
                fontSize = props.size;
            } else {
                fontSize = `${props.size}px`;
            }
            return {
                [`--${defaultNamespace}-color`]: props.color,
                [`--${defaultNamespace}-hover-color`]: props.hoverColor || props.color,
                fontSize
            };
        });
        return () =>
            h(
                props.tag,
                {
                    ...attrs,
                    role: 'img',
                    class: [ns.b()],
                    style: styles.value
                },
                props.component ? h(props.component) : slots
            );
    }
});
export default NpIcon;
