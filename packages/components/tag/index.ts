import { withInstall } from '@natrue-plus/utils/index';
import _Tag from './src/Tag.vue';
const NpTag = withInstall(_Tag);
export default NpTag;
export { NpTag };

export * from './src/tag';

declare module 'vue' {
    export interface GlobalComponents {
        NpTag: typeof _Tag;
    }
}
