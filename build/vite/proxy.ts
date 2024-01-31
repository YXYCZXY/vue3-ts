// 导入常量，这些常量定义了API的基础URL和目标URL
import { API_BASE_URL, API_TARGET_URL, MOCK_API_BASE_URL, MOCK_API_TARGET_URL } from '../constant';
// 导入Vite的ProxyOptions类型，用于定义代理选项的类型
import { ProxyOptions } from 'vite';

// 定义一个类型，它是一个记录（Record），键是字符串，值是ProxyOptions类型
type ProxyTargetList = Record<string, ProxyOptions>;

// 初始化一个代理目标列表
const init: ProxyTargetList = {
  // 配置真实API的代理规则
  [API_BASE_URL]: {
    target: API_TARGET_URL, // 目标服务器地址
    changeOrigin: true, // 是否改变源
    rewrite: (path) => path.replace(new RegExp(`^${API_BASE_URL}`), ''), // 重写URL路径，移除基础路径
  },
  // 配置模拟（Mock）API的代理规则
  [MOCK_API_BASE_URL]: {
    target: MOCK_API_TARGET_URL, // 目标服务器地址
    changeOrigin: true, // 是否改变源
    rewrite: (path) => path.replace(new RegExp(`^${MOCK_API_BASE_URL}`), '/api'), // 重写URL路径，替换基础路径为'/api'
  },
};

// 导出这个代理配置
export default init;
