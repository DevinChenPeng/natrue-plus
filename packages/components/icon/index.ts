import { withInstall } from '@natrue-plus/utils/index';
import _Icon from './src/icon';
const NpIcon = withInstall(_Icon);
export default NpIcon;
export { NpIcon };

export * from './src/icon';

declare module 'vue' {
    export interface GlobalComponents {
        NpIcon: typeof _Icon;
    }
}
