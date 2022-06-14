<template>
  <nav class="firstWebpackProgram">
    <div class="nav-warpper">
      <a href="javascript:void(0)">
        <img src="../assets/favicon.ico" alt="WangZhan" />
        Wangzhan
      </a>
      <a href="javascript:void(0)">Home</a>
      <a href="javascript:void(0)">Comm</a>
      <a href="javascript:void(0)">ABout</a>
      <a href="javascript:void(0)">Join</a>
      <a-dropdown>
      <a class="ant-dropdown-link" @click.prevent>
        Hover me﹀
        <DownOutlined />
      </a>
      <template #overlay>
        <a-menu>
          <a-menu-item>
            <a href="javascript:;">1st menu item</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">2nd menu item</a>
          </a-menu-item>
          <a-menu-item>
            <a href="javascript:;">3rd menu item</a>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
    </div>
  </nav>
</template>
<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
export default defineComponent({
  components: {},
  props: {
    str: {
      type: String,
      default: "按钮",
    },
  },
  setup() {
    let msg = ref<String>("完美当中的完美!");
    const current = ref<String>("mail");
    let isTure = ref<Boolean>(false);
    function onBtnClick(): void {
      if (isTure.value) {
        msg.value = "完美当中的完美!";
      } else {
        msg.value = "爆炸当中的爆炸!";
      }
      isTure.value = !isTure.value;
    }
    return {
      msg,
      isTure,
      current,
      onBtnClick,
    };
  },
});
</script>
<style lang="less" scoped>
.firstWebpackProgram{
  height: 70px;
  box-shadow: 0 2px 10px #f0f1f2 ;
  .nav-warpper{
    width: 1080px;
    margin: 0 auto;
    a{
      padding: 0 10px;
      &:first-of-type{
        font-size: 40px;
        img{
          width:44px;
        }
      }
      &:hover{
        color: black;
      }
    }
  }
  }
</style>