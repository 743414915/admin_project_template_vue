enum RESPONSE {
  /**
   * @description 验证失败, 请重新登录.
   */
  GET_VERIFY_FAIL = "验证失败, 请重新登录.",

  /**
   * @description 页面不存在
   */
  NOT_PAGE = "页面不存在",

  /**
   * @description Bearer
   */
  TOKEN_PREFIX = "Bearer ",

  /**
   * @description GET
   */
  GET = "GET",

  /**
   * @description POST
   */
  POST = "POST",

  /**
   * @description DELETE
   */
  DELETE = "DELETE",

  /**
   * @description PATCH
   */
  PATCH = "PATCH",

  /**
   * @description 添加成功
   */
  ADD_SUCCESS = "添加成功",

  /**
   * @description 添加失败
   */
  ADD_FAIL = "添加失败",

  /**
   * @description 修改成功
   */
  EDIT_SUCCESS = "修改成功",

  /**
   * @description 修改失败
   */
  EDIT_FAIL = "修改失败",

  /**
   * @description 删除成功
   */
  DELETE_SUCCESS = "删除成功",

  /**
   * @description 删除失败
   */
  DELETE_FAIL = "删除失败",

  /**
   * @description 请选择需要的删除项
   */
  SELECTION_ZERO = "请选择需要的删除项",

  /**
   * @description 上传成功
   */
  UPLOAD_SUCCESS = "上传成功",

  /**
   * @description 上传失败
   */
  UPLOAD_FAIL = "上传失败",

  /**
   * @description 操作成功
   */
  OPERATE_SUCCESS = "操作成功",

  /**
   * @description 操作失败
   */
  OPERATE_FAIL = "操作失败",

  /**
   * @description 操作取消
   */
  OPERATE_CANCEL = "操作取消",

  /**
   * @description 请求网络超时
   */
  TIMEOUT = "请求网络超时，请检查网络状态或再次尝试",

  /**
   * @description 发送通知成功
   */
  SEND_MSG_SUCCESS = "发送通知成功",
  /**
   * @description 发送通知失败
   */
  SEND_MSG_FAIL = "发送通知失败",
  /**
   * @description 保存成功
   */
  SAVE_SUCCESS = "保存成功",
  /**
   * @description 保存失败
   */
  SAVE_FAIL = "保存失败",
}

export enum RESPONSE_CODE {
  /**
   * @description ok
   */
  SUCCESS_CODE = 200,

  /**
   * @description error
   */
  ERROR_CODE = 500,

  /**
   * @description 请求参数错误
   */
  INVALID_PARAMS_ERROR_CODE = 400,

  /**
   * @description 访问失效
   */
  INVALID_ACCESS_ERROR_CODE = 401,

  /**
   * @description 接口未授权
   */
  NOT_AUTHORIZE_ERROR_CODE = 402,

  /**
   * @description 资源不存在
   */
  ERROR_NOT_EXIST_ERROR_CODE = 600,

  /**
   * @description 资源已存在
   */
  ERROR_EXIST_ERROR_CODE = 610,

  /**
   * @description 添加操作失败
   */
  ERROR_OPERATION_ADD_FAILURE_ERROR_CODE = 620,

  /**
   * @description 更新操作失败
   */
  ERROR_OPERATION_UPDATE_FAILURE_ERROR_CODE = 621,

  /**
   * @description 删除操作失败
   */
  ERROR_OPERATION_DELETE_FAILURE_ERROR_CODE = 622,

  /**
   * @description 获取列表失败
   */
  ERROR_OPERATION_QUERY_LIST_FAILURE_ERROR_CODE = 623,

  /**
   * @description 文件上传失败
   */
  ERROR_FILE_UPLOAD_FAILURE_ERROR_CODE = 624,

  /**
   * @description 创建目录失败
   */
  ERROR_MAKE_DIR_FAILURE_ERROR_CODE = 625,

  /**
   * @description 文件格式不支持
   */
  ERROR_FILE_TYPE_FAILURE_ERROR_CODE = 626,

  /**
   * @description 分配失败
   */
  ERROR_ASSIGNMENT_FAILURE_ERROR_CODE = 627,

  /**
   * @description Token鉴权失败
   */
  ERROR_AUTH_CHECK_TOKEN_FAIL_ERROR_CODE = 20001,

  /**
   * @description Token已超时
   */
  ERROR_AUTH_CHECK_TOKEN_TIMEOUT_ERROR_CODE = 20002,

  /**
   * @description Token生成失败
   */
  ERROR_AUTH_TOKEN_ERROR_CODE = 20003,

  /**
   * @description Token错误
   */
  ERROR_AUTH_ERROR_CODE = 20004,

  /**
   * @description Token已失效
   */
  ERROR_AUTH_CHECK_TOKEN_REVOKED_ERROR_CODE = 20005,

  /**
   * @description 用户名或密码错误
   */
  ERROR_AUTH_CHECK_USER_ERROR_CODE = 20006,

  /**
   * @description 验证码不正确
   */
  ERROR_AUTH_CHECK_CAPTCHA_ERROR_CODE = 20007,

  /**
   * @description 保存图片失败
   */
  ERROR_UPLOAD_SAVE_IMAGE_FAIL_ERROR_CODE = 30001,

  /**
   * @description 检查图片失败
   */
  ERROR_UPLOAD_CHECK_IMAGE_FAIL_ERROR_CODE = 30002,

  /**
   * @description 校验图片错误，图片格式或大小有问题
   */
  ERROR_UPLOAD_CHECK_IMAGE_FORMAT_ERROR_CODE = 30003,
}

export default RESPONSE;
