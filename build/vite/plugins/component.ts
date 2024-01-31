/**
 * @name  AutoRegistryComponents
 * @description 按需加载，自动引入组件
 */

import Components from 'unplugin-vue-components/vite';
import {
  ElementPlusResolver,
  VueUseComponentsResolver,//基于Vue组合式API的实用工具集
  AntDesignVueResolver,
  TDesignResolver,//TDesign
  NaiveUiResolver,//Naive UI
  // ArcoResolver,
  DevUiResolver,//DevUI
  IduxResolver,//Idux
} from 'unplugin-vue-components/resolvers';

export const AutoRegistryComponents = () => {
  return Components({
    // 指定自动扫描组件的目录。
    dirs: ['src/components'],

    // 指定要扫描的文件扩展名。
    extensions: ['vue', 'md'],

    // 是否深度扫描指定目录。
    deep: true,

    // 自动生成的类型声明文件的路径。这有助于 TypeScript 理解自动注册的组件。
    dts: 'types/components.d.ts',

    // 是否将目录结构作为命名空间。
    directoryAsNamespace: false,

    // 全局命名空间的配置，当前为空。
    globalNamespaces: [],

    // 是否自动注册指令。
    directives: true,

    // 包含的文件模式，用正则表达式定义。
    include: [/\.vue$/, /\.vue\?vue/, /\.md$/],

    // 排除的文件模式，通常包括 node_modules、.git 和 .nuxt 目录。
    exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],

    // 配置解析器，用于解析特定 UI 框架的组件和指令。
    resolvers: [
      ElementPlusResolver(), // 为 Element Plus UI 框架提供自动注册。
      VueUseComponentsResolver(), // 为 VueUse 库中的组件提供自动注册。
      AntDesignVueResolver({ resolveIcons: true }), // 为 Ant Design Vue UI 框架提供自动注册，包括图标。
      TDesignResolver({ // 为 TDesign UI 框架提供自动注册，指定使用的是 Vue 3 版本。
        library: 'vue-next',
      }),
      // ArcoResolver({ // 这行被注释掉了，如果启用，它将为 Arco Design Vue UI 框架提供自动注册。
      //   sideEffect: true,
      // }),
      NaiveUiResolver(), // 为 Naive UI 框架提供自动注册。
      DevUiResolver({ importStyle: true }), // 为 Dev UI 框架提供自动注册，并导入相关样式。
      IduxResolver({ importStyle: 'css', importStyleTheme: 'default' }), // 为 Idux UI 框架提供自动注册，指定样式和主题。
    ],
  });
};

