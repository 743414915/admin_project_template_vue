/**
 * @description 是否开发环境
 *
 * @returns boolean
 */
export function isDev(): boolean {
  return import.meta.env.DEV;
}

/**
 * @description 是否生产（线上）环境
 *
 * @returns boolean
 */
export function isProd(): boolean {
  return import.meta.env.PROD;
}

/**
 * @description 跳转主应用登录
 */
export function goLoginPage(redirect: string = "") {
  console.log("跳转登录");
}
