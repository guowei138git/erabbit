<template>
  <div>
    <!-- 一级路由- 布局容器 -->
    <nav>顶部通栏</nav>
    <header>头部</header>
    <main>
      <!-- 二级路由 -->
      <router-view></router-view>
    </main>
    <footer>底部</footer>
  </div>
</template>

<script>
export default {
  name: "xtx-layout"
};
</script>

<style scoped lang='less'>
</style>