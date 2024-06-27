import { RESPONSE_CODE } from "@/enums/response";

export const RESPONSE_ERROR_MAP = {
  /**
   * @description 状态
   */
  ERROR_MAP: {
    [RESPONSE_CODE.ERROR_AUTH_CHECK_TOKEN_REVOKED_ERROR_CODE]:
      "token失效，请重新登录",
    [RESPONSE_CODE.INVALID_ACCESS_ERROR_CODE]: "您没有该操作的权限",
  } as {
    [index in RESPONSE_CODE]: string;
  },

  /**
   * @description 获取错误信息根据状态码
   */
  getErrorMap(key: RESPONSE_CODE) {
    return this.ERROR_MAP[key];
  },
};
