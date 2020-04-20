<template>
  <div id="tab-bar">
    <div class="tab-bar-item"><router-link to='/home' exact-active-class="active">
       <i class="iconfont icon-home"></i>
      首页
      </router-link>
      </div>
    <div class="tab-bar-item"><router-link to='/category' exact-active-class="active">
      <i class="iconfont icon-fenlei"></i>
      分类
      </router-link>
      </div>
    <div class="tab-bar-item"> <router-link to="/cart" exact-active-class="active">
      <i class="iconfont icon-gouwuchekong"></i>
      购物车
      </router-link>
    </div>
    <div class="tab-bar-item">
      <router-link to="/profile" exact-active-class="active">
       <i class="iconfont icon-user"></i>
      我的
      </router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
  },

}
</script>
<style scoped>
  #tab-bar{
    display: flex;
    background-color: antiquewhite;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -3px 1px rgba(100,100,100,0.01);
  }
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 60px;
  }
  i{
    display: block;
    font-size: 20px;
    margin-top: 10px;
  }
  .active {
    color: #f60;
}
</style>
 