<template>
  <div class="container">
    <!-- 1.使用A模块的state数据 -->
    <p>{{$store.state.moduleA.username}}</p>
    <!-- 1.2使用A模块的getters数据 -->
    <p>{{$store.getters.newName}}</p>
    <!-- 2.使用B模块的state数据 -->
    <p>{{$store.state.moduleB.username}}</p>
    <!-- 2.2使用B模块的getters数据 -->
    <p>{{$store.getters['moduleB/newName']}}</p>
    <button @click="mutationsFn">mutationsFn</button>
    <button @click="actionFn">actionFn</button>
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
  name: 'App',
  setup () {
    const store = useStore()
    const mutationsFn = () => {
      // 2.3 提交B模块的修改
      store.commit('moduleB/update')
    }
    const actionFn = () => {
      // 2.4 提交B模块的actions
      store.dispatch('moduleB/updateName')
    }

    return { mutationsFn, actionFn }
  }
}
</script>

<style>

</style>
