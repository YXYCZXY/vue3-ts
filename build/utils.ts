// 导出函数 wrapperEnv，用于处理环境变量配置
export function wrapperEnv(envConf: Recordable): ViteEnv {
  // 初始化一个空对象用于存储处理后的环境变量
  const ret: any = {};

  // 遍历传入的环境变量配置对象
  for (const envName of Object.keys(envConf)) {
    // 替换环境变量中的 "\\n" 为换行符 "\n"
    let realName = envConf[envName].replace(/\\n/g, '\n');
    // 将字符串 'true' 转换为布尔值 true，将 'false' 转换为布尔值 false
    realName = realName === 'true' ? true : realName === 'false' ? false : realName;

    // 特殊处理 'VITE_PORT' 环境变量，将其值转换为数字
    if (envName === 'VITE_PORT') {
      realName = Number(realName);
    }
    // 特殊处理 'VITE_PROXY' 玀境变量，尝试将其值解析为JSON对象
    if (envName === 'VITE_PROXY' && realName) {
      try {
        realName = JSON.parse(realName.replace(/'/g, '"'));
      } catch (error) {
        // 如果解析失败，则将其值设为空字符串
        realName = '';
      }
    }
    // 将处理后的环境变量值存储到 ret 对象中
    ret[envName] = realName;
    // 如果环境变量值是字符串或对象，则将其添加到 process.env 中
    if (typeof realName === 'string') {
      process.env[envName] = realName;
    } else if (typeof realName === 'object') {
      process.env[envName] = JSON.stringify(realName);
    }
  }
  // 返回处理后的环境变量对象
  return ret;
}
