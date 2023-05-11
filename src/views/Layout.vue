<template>
  <div>
    <!-- 一级路由- 布局容器 -->
    <AppTopnav />
    <header>头部</header>
    <main>
      <!-- 二级路由 -->
      <router-view></router-view>
    </main>
    <footer>底部</footer>
  </div>
</template>

<script>
import AppTopnav from '@/components/app-topnav'

export default {
  name: 'xtx-layout',
  components: {
    AppTopnav
  }
}
</script>

<style scoped lang='less'>
</style>
