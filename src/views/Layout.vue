<template>
  <div>
    <!-- 一级路由- 布局容器 -->
    <!-- 顶部通栏 -->
    <AppTopnav />
    <!-- 头部 -->
    <AppHeader />
    <main>
      <!-- 二级路由 -->
      <router-view></router-view>
    </main>
    <footer>底部</footer>
  </div>
</template>

<script>
import AppTopnav from '@/components/app-topnav'
import AppHeader from '@/components/app-header'

export default {
  name: 'xtx-layout',
  components: {
    AppTopnav,
    AppHeader
  }
}
</script>

<style scoped lang='less'>
</style>
