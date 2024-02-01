import { createPinia } from 'pinia';
import { useAppStore } from './modules/app';
import { useUserStore } from './modules/user';

// 导入 pinia-plugin-persistedstate 插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

// 创建一个新的 Pinia 实例。Pinia 是 Vue.js 的状态管理库。
const pinia = createPinia();

// 使用 pinia-plugin-persistedstate 插件。
// 这个插件可以帮助 Pinia 状态存储在浏览器的 localStorage 或者 sessionStorage 中，
// 这样即使在页面刷新后，状态数据也能保持不变。
pinia.use(piniaPluginPersistedstate);

// 导出两个 Pinia 状态存储。这些存储是使用 Pinia 的 `defineStore` 方法定义的。
// `useAppStore` 和 `useUserStore` 是两个自定义的存储，通常用于在应用程序中存储和管理全局状态。
export { useAppStore, useUserStore };

// 导出 Pinia 实例。这个实例需要在 Vue 应用程序中注册，
// 以便在整个应用程序中使用 Pinia 状态管理功能。
export default pinia;
