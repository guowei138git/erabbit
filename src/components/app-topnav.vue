<template>
  <div>
    <nav class="app-topnav">
      <div class="container">
        <ul>
        <!-- 如果有token则显示  -->
        <template v-if="profile.token">
          <li>
            <a href="javascript:;">
                <!-- 用户图标 -->
              <i class="iconfont icon-user"></i>
              {{profile.account}}
            </a>
          </li>
          <li>
            <a href="javascript:;">退出登录</a>
          </li>
        </template>
        <!-- 如果无token则显示 -->
        <template v-else>
          <li>
            <a href="javascript:;">请先登录</a>
          </li>
          <li>
            <a href="javascript:;">免费注册</a>
          </li>
        </template>
          <li>
            <a href="javascript:;">我的订单</a>
          </li>
          <li>
            <a href="javascript:;">会员中心</a>
          </li>
          <li>
            <a href="javascript:;">帮助中心</a>
          </li>
          <li>
            <a href="javascript:;">关于我们</a>
          </li>
          <li>
            <a href="javascript:;">
                <!-- 手机图标 -->
              <i class="iconfont icon-phone"></i>手机版
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
    name: 'AppTopnav',
    setup () {
        const store = useStore()
        const profile = computed(()=>{
            return store.state.user.profile
        })
        return { profile }
    }
};
</script>

<style scoped lang="less">
.app-topnav {
    background: #333;
    ul {
        display: flex;
        height: 53px;
        justify-content: flex-end;
        align-items: center;
        li {
            a {
                padding: 0 15px;
                color: #cdcdcd;
                line-height: 1;
                display: inline-block;
                i {
                    font-size: 14px;
                    margin-right: 2px;
                }
                &:hover {
                    color: @xtxColor;
                }
            }
            // 为所有相同父元素中位于ul元素之后的所有 li元素设置样式
            ~ li {
                a {
                    // 设置 | 在左边 实体 灰色
                    border-left: 2px solid #666;
                }
            }
        }
    }
}

</style>