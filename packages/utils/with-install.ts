import { App, Component, Plugin } from "vue";

// 使用类型别名替代接口
export type SFCWithInstall<T> = T & Plugin;

export const withInstall = <T extends Component>(comp: T) => {
	(comp as SFCWithInstall<T>).install = (app: App) => {
		app.component((comp as any).name, comp);
	};

	return comp as SFCWithInstall<T>;
};