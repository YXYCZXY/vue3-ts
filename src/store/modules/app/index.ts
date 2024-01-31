// 导入 Pinia 的 defineStore 方法，用于定义一个状态存储
import { defineStore } from 'pinia';
// 导入 Pinia 存储实例
import piniaStore from '@/store/index';
// 导入 AppState 类型，用于定义应用程序状态的类型
import { AppState } from './types';

// 使用 defineStore 方法定义一个名为 'app' 的 Pinia 存储
export const useAppStore = defineStore(
  // 存储的唯一ID
  'app',
  {
    // 定义存储的状态
    state: () => ({
      title: 'FastVue3, 一个快速开箱即用的Vue3+Vite模板',
      h1: 'Vue3 + Vite3.x + TypeScript + Pinia大厂开发必备',
      theme: '', // 主题
    }),
    getters: {}, // 定义存储的计算属性
    actions: {
      // 更新应用程序设置的方法
      updateSettings(partial: Partial<AppState>) {
        this.$patch(partial);
      },

      // 切换主题的方法
      toggleTheme(dark: boolean) {
        if (dark) {
          this.theme = 'dark';
          document.documentElement.classList.add('dark');
        } else {
          this.theme = 'light';
          document.documentElement.classList.remove('dark');
        }
      },
    },
    // 配置持久化
    persist: {
      key: 'theme', // 持久化存储的键名
      storage: localStorage, // 使用 localStorage 作为持久化存储
      paths: ['theme'], // 指定需要持久化的状态路径
    },
  },
);

// 定义一个函数，用于在组件外部使用 app 存储
export function useAppOutsideStore() {
  // 使用 piniaStore 实例来获取 app 存储
  return useAppStore(piniaStore);
}
