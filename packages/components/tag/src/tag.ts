import { ExtractPropTypes } from "vue";

const props = {
    bordered: {
        type: Boolean,
        default: true
    }
} as const;

export type TagProps =  ExtractPropTypes<typeof props>;
