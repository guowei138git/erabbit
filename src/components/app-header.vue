<template>
  <header class='app-header'>
    <div class="container">
      <h1 class="logo"><RouterLink to="/">小兔鲜</RouterLink></h1>
      <ul class="navs">
        <li class="home"><RouterLink to="/">首页</RouterLink></li>
        <li><a href="#">美食</a></li>
        <li><a href="#">餐厨</a></li>
        <li><a href="#">艺术</a></li>
        <li><a href="#">电器</a></li>
        <li><a href="#">居家</a></li>
        <li><a href="#">洗护</a></li>
        <li><a href="#">孕婴</a></li>
        <li><a href="#">服装</a></li>
        <li><a href="#">杂货</a></li>
      </ul>
      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜一搜">
      </div>
      <div class="cart">
        <a class="curr" href="#">
          <i class="iconfont icon-cart"></i><em>2</em>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
    name:'AppHeader'
}
</script>

<style scoped lang='less'>
.app-header {
    background: #fff;
    .container {
        display: flex;
        align-items: center;
    }
    .logo {
        width: 200px;
        a {
            display: block;
            height: 132px;
            width: 100%;
            text-indent: -9999px;
            background: url(../assets/images/logo.png) no-repeat center 18px / contain;
        }
    }
    .navs {
        width: 820px;
        display: flex;
        justify-content: space-around;
        padding-left: 40px;
        li {
            margin-right: 40px;
            width: 38px;
            text-align: center;
            a {
                font-size: 16px;
                height: 32px;
                line-height: 32px;
                display: inline-block;
            }
            &:hover {
                a {
                    color: @xtxColor;
                    border-bottom: 1px solid @xtxColor;
                }
            }
        }
    }
}
</style>