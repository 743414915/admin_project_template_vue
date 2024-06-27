import axios from "axios";
import type {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

import type { HYRequestConfig } from "./type";

import RESPONSE, { RESPONSE_CODE } from "@/enums/response";
import { RESPONSE_ERROR_MAP } from "@/enums/obj-enums";

import { goLoginPage } from "@/utils/map-url";
import type { IResponse } from "@/types/response";

// 拦截器: 蒙版Loading/token/修改配置

/**
 * 两个难点:
 *  1.拦截器进行精细控制
 *    > 全局拦截器
 *    > 实例拦截器
 *    > 单次请求拦截器
 *
 *  2.响应结果的类型处理(泛型)
 */

class HYRequest {
  private instance: AxiosInstance;

  // request实例 => axios的实例
  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config);

    // 每个instance实例都添加拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // loading/token
        // console.log('全局请求成功的拦截')
        return config;
      },
      (err) => {
        // console.log('全局请求失败的拦截')
        console.log(err); // for debug
        return Promise.reject(err);
      },
    );
    this.instance.interceptors.response.use(
      (res) => {
        this.showErrorMessage(res.data);

        return this.interceptorsResponse(res);
      },
      (err: any) => {
        // console.log('全局响应失败的拦截')
        // message.openMessage(err.message, TYPE.ERROR);

        this.showErrorByResCode(err);
        console.log(err);
        return err;
      },
    );

    // 针对特定的hyRequest实例添加拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccessFn,
      config.interceptors?.requestFailureFn,
    );
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn,
      config.interceptors?.responseFailureFn,
    );
  }

  /**
   * @description 由于下载文件的时候要返回整体的res,
   * 所以这里用这个方法返回，
   * 便于后续继承这个类时可以返回需要的res中的任意节点数据
   *
   * @param res 调用网络接口返回的response
   * @returns 默认是res.data
   */
  interceptorsResponse(res: AxiosResponse<any, any>) {
    return res.data;
  }

  /**
   * @description 当返回的响应码是错误时
   *
   * @param err err信息
   */
  showErrorByResCode(err: any) {
    const code: RESPONSE_CODE = err.response?.data?.code;

    if (
      [
        RESPONSE_CODE.ERROR_AUTH_CHECK_TOKEN_FAIL_ERROR_CODE,
        RESPONSE_CODE.ERROR_AUTH_CHECK_TOKEN_TIMEOUT_ERROR_CODE,
        RESPONSE_CODE.ERROR_AUTH_TOKEN_ERROR_CODE,
        RESPONSE_CODE.ERROR_AUTH_ERROR_CODE,
        RESPONSE_CODE.INVALID_ACCESS_ERROR_CODE,
        RESPONSE_CODE.ERROR_AUTH_CHECK_TOKEN_REVOKED_ERROR_CODE,
      ].includes(code)
    ) {
      goLoginPage();
    }

    let msg =
      RESPONSE_ERROR_MAP.getErrorMap(code) ||
      err.response?.data?.msg ||
      `${err?.config?.url}：error`;

    // 超时
    if (err.message.includes("timeout")) {
      msg = RESPONSE.TIMEOUT;
    }

    console.log(msg);
  }

  /**
   * @description 当状态码不是200的时候，展示报错信息
   *
   * @param data 后端返回的response
   */
  showErrorMessage(data: IResponse) {
    if (data.code !== RESPONSE_CODE.SUCCESS_CODE && data.msg) {
      console.log(data.msg);
    }
  }

  // 封装网络请求的方法
  // T => IHomeData
  request<T = any>(config: HYRequestConfig<T>) {
    // 单次请求的成功拦截处理
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(
        config as InternalAxiosRequestConfig,
      );
    }

    // 返回Promise
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 单次响应的成功拦截处理
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors.responseSuccessFn(res);
          }
          resolve(res);
        })
        .catch((err: Error) => {
          console.log(err);
          reject(err);
        });
    });
  }

  get<T = any>(config: HYRequestConfig<T>) {
    return this.request({ ...config, method: "GET" });
  }
  post<T = any>(config: HYRequestConfig<T>) {
    return this.request({ ...config, method: "POST" });
  }
  delete<T = any>(config: HYRequestConfig<T>) {
    return this.request({ ...config, method: "DELETE" });
  }
  patch<T = any>(config: HYRequestConfig<T>) {
    return this.request({ ...config, method: "PATCH" });
  }
}

/**
 * 下载文件的请求对象
 */
class DownloadFileRequset extends HYRequest {
  constructor(config: HYRequestConfig) {
    super(config);
  }

  /**
   * @description 重写父类的这个方法，返回res
   *
   * @param res 网络请求返回的response
   * @returns res
   */
  interceptorsResponse(res: AxiosResponse<ArrayBuffer, any>) {
    return res;
  }
}
export { DownloadFileRequset };

export default HYRequest;
