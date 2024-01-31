/**
 * @name ConfigPagesPlugin
 * @description 动态生成路由
 */
import VueRouter from 'unplugin-vue-router/vite';

export const ConfigPagesPlugin = () => {
  return VueRouter({
    // 指定包含路由页面组件的文件夹。这里设置为 'src/views'。
    // 插件将自动扫描此文件夹中的文件，以构建路由。
    routesFolder: ['src/views'],

    // 自动生成的类型声明文件的路径。这有助于 TypeScript 理解路由的结构。
    dts: 'types/typed-router.d.ts',

    // 是否启用数据获取功能。这可能意味着插件将处理与路由相关的数据预获取逻辑。
    dataFetching: true,

    // 定义路由组件文件的扩展名。这里指定了三种类型的文件：'.page.vue', '.vue', 和 '.md'。
    // '.page.vue' 可能是用于特定页面的 Vue 组件，'.vue' 是标准 Vue 组件，而 '.md' 是 Markdown 文件。
    extensions: ['.page.vue', '.vue', '.md'],
  });
};

