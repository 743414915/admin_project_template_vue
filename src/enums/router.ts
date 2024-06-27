enum ROUTER {
  /**
   * @description url中自定义的路径与参数之间的分隔符
   */
  URL_PARAM_DELIMITER = "_p_param_p_",

  ROOT_PATH = "/",
  ROOT_NAME = "/",
  LOGIN_PATH = "/login",
  LOGIN_NAME = "login",
  LOGIN_REDIRECT = "/login?redirect=",

  LAYOUT_NAME = "layout",
  LAYOUT_PATH = "/layout",

  PATH_MATCH = "/:pathMatch(.*)",

  /**
   * @description 临时跳转的页面路径，什么都不显示
   */
  TRANSIT_PAGE_PATH = "/transit_page",
  TRANSIT_PAGE_NAME = "transit_page",
}
export default ROUTER;

export const LOGIN_URL = "";
