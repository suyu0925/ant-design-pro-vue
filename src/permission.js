import router from './router'

const whiteList = ['login', 'workplace'] // no redirect whitelist

router.beforeEach((to, from, next) => {
  if (whiteList.includes(to.name)) {
    // 在免登录白名单，直接进入
    next()
  } else {
    next({ path: '/user/login', query: { redirect: to.fullPath } })
  }
})
