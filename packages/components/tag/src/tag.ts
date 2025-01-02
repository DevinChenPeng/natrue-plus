import { ExtractPropTypes } from "vue";

export const tagProps = {
    bordered: {
        type: Boolean,
        default: true,
    }
} as const;

export type TagProps =  ExtractPropTypes<typeof tagProps>;
