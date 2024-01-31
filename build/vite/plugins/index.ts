//配置vite插件
/**
 * @name createVitePlugins
 * @description 封装plugins数组统一调用
 */
import { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';

import vueSetupExtend from 'vite-plugin-vue-setup-extend';
import { AutoRegistryComponents } from './component';
import { AutoImportDeps } from './autoImport';
import { ConfigPagesPlugin } from './pages';
import { ConfigRestartPlugin } from './restart';
import { ConfigProgressPlugin } from './progress';
import { ConfigUnocssPlugin } from './unocss';

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  // const { VITE_USE_MOCK, VITE_USE_COMPRESS } = viteEnv;

  const vitePlugins: (PluginOption | PluginOption[])[] = [
    // 自动生成路由
    ConfigPagesPlugin(),
    // vue支持
    vue(),

    // setup语法糖组件名支持
    vueSetupExtend(),

  ];

  // 自动按需引入组件
  vitePlugins.push(AutoRegistryComponents());

  // 自动按需引入依赖
  vitePlugins.push(AutoImportDeps());

  // 监听配置文件改动重启
  vitePlugins.push(ConfigRestartPlugin());

  // 构建时显示进度条
  vitePlugins.push(ConfigProgressPlugin());

  // unocss 即时按需的原子化 CSS 引擎
  vitePlugins.push(ConfigUnocssPlugin());

  return vitePlugins;
}
