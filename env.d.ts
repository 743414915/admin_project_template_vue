/// <reference types="vite/client" />
/// <reference types="element-plus/global.d.ts" />

declare module "js-cookie" {
  interface ICookies {
    /**
     * @description 增加cookie
     *
     * @param key cookie名称
     * @param value
     * @param attributes 额外的参数
     * @returns
     */
    set: (
      key: string,
      value: any,
      attributes: Record<string, any>,
    ) => string | undefined;
    get: (key: string) => any;
    remove: (key: string) => void;
  }
  const Cookies: ICookies;
  export default Cookies;
}

declare interface Window {
}
