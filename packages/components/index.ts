import { App } from 'vue';
export * from '@natrue-plus/components/components';
import components from '@natrue-plus/components/components';
const install = (app: App) => {
    components.forEach(c => app.use(c));
};

export default install;
