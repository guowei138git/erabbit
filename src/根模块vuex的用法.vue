<template>
<!-- vue2.0需要根元素 vue3.0可以是代码片段 Fragment -->
  <div>
    App
    <!-- 1.使用根模块state的数据 -->
    <p>{{$store.state.username}}</p>
    <!-- 2.使用根模块getters的数据 -->
    <p>{{$store.getters.newName}}</p>
    <!-- 3.使用根模块mutaions函数 -->
    <div>
      <button @click="mutationsFn">修改数据</button>
      <button @click="actionFn">提交action函数</button>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
  name: 'App',
  setup () {
    // 使用vuex 仓库
    const store = useStore()
    // 1.获取根模块state的数据
    const username = store.state.username
    console.log(username)
    // 2.获取根模块getters的数据
    const newName = store.getters.newName
    console.log(newName)
    // 3.提交根模块mutations函数中的方法
    const mutationsFn = () => {
      console.log('mutationsFn')
      store.commit('updateName')
    }
    // 4.调用根模块action函数
    const actionFn = () => {
      console.log('actionFn')
      store.dispatch('updateName')
    }

    return { mutationsFn, actionFn }
  }

}
</script>

<style>

</style>
