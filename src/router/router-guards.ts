import {type Router, isNavigationFailure} from 'vue-router'

// 白名单
const whitePathList = ['/']
export const createRouterGuards = (router: Router) => {
  router.beforeEach((to, from, next) => {
    // 在白名单就放行
    if (whitePathList.includes(to.path)) {
      next();
      return;
    } 
    // 不在就重定向 Login
    if (!whitePathList.includes(to.path)) {
      // redirect login page
      next('/login');
      return;
    }
  })
// 进入某个路由之后触发的钩子
  router.afterEach((to, _, failure) => {
    document.title = (to?.meta?.title as string) || document.title;

    //辅助工具检查导航失败
    if (isNavigationFailure(failure)) {
      console.log('failed navigation', failure);
    }
    
  })

  router.onError((error) => {
    console.error(error, '路由错误');
  });
}