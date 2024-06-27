import { BASE_URL, TIME_OUT } from "./config";
import HYRequest, { DownloadFileRequset } from "./request";

import RESPONSE from "@/enums/response";

import type { InternalAxiosRequestConfig } from "axios";

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn,
  },
});

const hyDownloadFileRequest = new DownloadFileRequset({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  responseType: "arraybuffer",
  interceptors: {
    requestSuccessFn,
  },
});

export { hyDownloadFileRequest };

export default hyRequest;

/**
 * @description 请求成功的时候携带token
 *
 * @param config
 * @returns
 */
function requestSuccessFn(config: InternalAxiosRequestConfig<any>) {
  // 每一个请求都自动携带token
  const token = "";
  if (config.headers && token) {
    // 类型缩小
    config.headers.Authorization = RESPONSE.TOKEN_PREFIX + token;
  }
  return config;
}
