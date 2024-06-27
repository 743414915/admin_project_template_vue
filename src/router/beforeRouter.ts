import type { RouteLocationNormalized, NavigationGuardNext } from "vue-router";

async function before(
  to: RouteLocationNormalized,
  _from: RouteLocationNormalized,
  next: NavigationGuardNext,
) {
  next();
  return;
}

export default before;
