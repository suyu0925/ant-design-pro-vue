import router from './router'

const whiteList = ['login'] // no redirect whitelist

router.beforeEach((to, from, next) => {
  if (whiteList.includes(to.name)) {
    // 在免登录白名单，直接进入
    next()
  } else {
    next({ path: '/login', query: { redirect: to.fullPath } })
  }
})
