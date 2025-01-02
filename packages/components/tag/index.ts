import { withInstall } from '@natrue-plus/utils/index';
import _Tag from './src/Tag.vue';

export default withInstall(_Tag);

export * from './src/tag';

declare module 'vue' {
	export interface GlobalComponents {
		NpTag: typeof _Tag;
	}
}
