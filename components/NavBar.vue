<template>
    <div class="header-box z-50" :class="{ 'scrolled': isScrolled }" :style="navStyle">
        <!-- 提示区域 -->
        <slot name="tip-area"></slot>
         <!-- 顶部区域  -->
        <div class="header max-width-1372-auto">
            <div class="title cursor-pointer notphone-is-show">
                <!-- 左侧logo区域 -->
                <div v-if="$slots.logo">
                    <slot name="logo"></slot>
                </div>
                <template v-else>
                    <img :src="logoSrc" alt="" />
                       {{ logoText }}
                </template>
            </div>
            <!-- 中间导航区域 -->
            <slot name="nav"></slot>
        </div>
    </div>
</template>


<!-- 
/**
 * NavBar 导航栏组件
 * 
 * @props {String} logoSrc - logo图片路径，默认: '/img/logo.png'
 * @props {String} logoText - logo文字，默认: 'AI Manga Translator'
 * @props {Object} navStyle - 导航栏自定义样式对象，默认: { backgroundColor: 'rgba(255, 102, 178, 0)' }
 * 
 * @slot logo - 自定义logo区域
 * @slot tip-area - 顶部提示区域
 * @slot nav - 中间导航区域
 * 
 */
-->
<script setup lang="ts">

const props = defineProps({
    // logo图片地址
    logoSrc: {
        type: String,
        default: '/img/logo.png'
    },
    // logo文字
    logoText: {
        type: String,
        default: 'AI Manga Translator'
    },
    //顶部导航栏样式
    navStyle:{
        type: Object,
        default:{
            backgroundColor:'rgba(255, 102, 178, 0)'
        }
    }
})

// 监听滚动，添加毛玻璃效果
const isScrolled = ref(false)

const handleScroll = () => {
  if (process.client) {
    isScrolled.value = window.scrollY > 50
  }
}

onMounted(() => {
  if (process.client) {
    window.addEventListener('scroll', handleScroll)
  }
})

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('scroll', handleScroll)
  }
})

</script>

<style scoped lang="scss">
@use "assets/css/mide.scss" as *;
@use "assets/css/variable.scss" as *;

.header-box {
  background-color: rgba(255, 255, 255, 0);
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  z-index: 1002;
  transition: all 0.3s ease;

  @include browserType("phone") {
    max-width: 100vw;
  }

  // 滚动后的毛玻璃效果
  &.scrolled {
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

    // 暗色模式下的毛玻璃效果
    html.dark & {
      background-color: rgba(13, 13, 13, 0.8);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    }
  }
}


.header {
  // width: 1370px;
  padding: 12px 0;
  display: flex;
  align-items: center;
  @include browserType("phone") {
    padding: 2rem 1.6rem;
    box-sizing: border-box;
  }
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    font-family: "poppins";
    img {
      width: 36px;
      height: 36px;
      object-fit: contain;
      margin: 0 8px;
    }
  }
}

</style>