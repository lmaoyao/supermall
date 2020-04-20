const routes = [
  {
      path:"/home",
      component: ()=>import("@/views/home/home")
  },
  {
      path:'/category',
      component:()=>import('@/views/category/category')
  },
  {
      path:'/cart',
      component:()=>import('@/views/cart/cat')
  },
  {
      path:'/profile',
      component:()=>import('@/views/profile/profile')
  }

]
export default routes;