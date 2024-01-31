/**
 * @name AutoImportDeps
 * @description 按需加载，自动引入
 */

import AutoImport from 'unplugin-auto-import/vite';
//自定义组件自动引入 内置了多个流行的框架
import { ElementPlusResolver, AntDesignVueResolver, TDesignResolver } from 'unplugin-vue-components/resolvers';
//路由自动配置
import { VueRouterAutoImports } from 'unplugin-vue-router';

export const AutoImportDeps = () => {
  return AutoImport({
    // 指定自动生成的类型声明文件的路径。这有助于 TypeScript 理解自动导入的变量。
    dts: 'types/auto-imports.d.ts',

    // 定义要自动导入的模块列表。
    imports: [
      'vue', // 自动导入 Vue 相关功能。
      'pinia', // 自动导入 Pinia（状态管理库）相关功能。
      {
        '@vueuse/core': [], // 从 vueuse 核心库中导入功能，当前数组为空，表示没有指定具体导入哪些功能。
      },
      {
        // 从 'naive-ui'（一个 Vue UI 库）中导入特定的函数。
        'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar'],
      },
      VueRouterAutoImports, // 自动导入与 Vue 路由相关的依赖项，具体内容取决于 VueRouterAutoImports 的定义。
    ],

    // 配置解析器，用于解析特定 UI 框架的组件。
    resolvers: [
      ElementPlusResolver(), // 为 Element Plus UI 框架提供自动导入。
      AntDesignVueResolver(), // 为 Ant Design Vue UI 框架提供自动导入。
      TDesignResolver({ // 为 TDesign UI 框架提供自动导入，指定使用的是 Vue 3 版本。
        library: 'vue-next',
      }),
      // ArcoResolver(), // 这行被注释掉了，如果启用，它将为 Arco Design Vue UI 框架提供自动导入。
    ],
  });
};

