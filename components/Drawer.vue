<template>
  <el-drawer
    v-model="isOpen"
    title=""
    :with-header="false"
    direction="ltr"
    size="70%"
    @close="handleClose"
  >
   <div class="drawer-container">
        <ul class="phon-navlist">
            <li v-for="item in navBarList" :key="item.title" @click="goView(item)">
                <!-- 字符串类型用 v-html -->
                <span v-if="typeof item.icon === 'string'" v-html="item.icon"></span>
                
                <!-- 组件类型用 component -->
                <component v-else-if="item.icon" :is="item.icon" />
                <p>
                    {{ t(item.title) }}
                </p>
            </li>

            <!-- 切换暗色模式 -->
            <ClientOnly>
              <li class="theme-switch" v-if="websiteConfig.mode.enableSwitch" @click="toggleTheme">
                <i class="iconfont" :class="isDark ? 'icon_moon' : 'icon_sunny'"></i>
                <p>{{ isDark ? "暗色" : "亮色" }}</p>
              </li>
            </ClientOnly>

            <!-- 切换语言 -->
            <li class="lang-theme" v-if="websiteConfig.i18n">
                <el-dropdown trigger="click" @command="changeLang">
                <div class="el-dropdown-link">
                    <div>
                        <div class="ico-box">
                            <i class="iconfont icon_layouts"></i>
                        </div>
                        <span class="txt">{{ localeName }}</span>
                    </div>
                    <i class="iconfont icon_bottom"></i>
                </div>
                <template #dropdown>
                    <el-dropdown-menu >
                        <el-dropdown-item
                        :class="{ isSelItem: item.key == locale }"
                        v-for="item in locales"
                        :command="item.key as string"
                        :key="item.key as string"
                        >
                        {{ item.name }}
                        <i
                            v-if="item.key == locale"
                            class="iconfont icon_check"
                        ></i>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
                </el-dropdown>
            </li>
        </ul>
   </div>
  </el-drawer>
</template>

<script lang="ts">
/**
 * Drawer 抽屉组件
 * @description 基于 Element Plus 的抽屉组件封装，支持 v-model 控制
 */
export default {
  name: 'Drawer'
}
</script>

<script setup lang="ts">
import {navBarList} from '~/config/navbar-config'
import {websiteConfig} from '~/config/website'
import { useDark } from '@vueuse/core'
import type { NestedMenuItem } from '~/types/NestedMenuItem';
const {  locale, locales } = useI18n();
const { checkOutLang } = useLangInfo();
const {t} = useI18n()
const { toLink } = useToLink()
const localeName = computed(() => {
  return locales.value.find(item => item.code === locale.value)?.name;
});

// 暗色模式
const isDark = useDark({
    selector:'html',
    attribute:'class',
    valueDark:'dark',
    valueLight:'light',
    initialValue:websiteConfig.mode.defaultMode
})

// 切换主题
const toggleTheme = () => {
  isDark.value = !isDark.value
}

interface Props {
  /** 是否显示抽屉（v-model） */
  modelValue: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
})

const emit = defineEmits<{
  /** 更新 v-model 值 */
  'update:modelValue': [value: boolean]
  /** 抽屉关闭时触发 */
  'close': []
}>()

// 内部状态，与 v-model 同步
const isOpen = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

// 处理关闭事件
const handleClose = () => {
  emit('close')
}

const goView = (item:NestedMenuItem) =>{
    toLink(item);
    handleClose()
}



//切换语言
const changeLang = async (lang: any) => {
   await checkOutLang(lang)
};
</script>

<style lang="scss">
.el-drawer__body{
    padding: 0 !important;
}
.drawer-container{
    width: 100%;
    height: 100%;
    padding: 4.4rem 2rem 0;
    background-color: var(--bg-color);
    font-size: 1.4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: var(--text-color);
    .phon-navlist {
    li {
      display: flex;
      align-items: center;
      margin-bottom: 1.4rem;
      font-size: 1.4rem;
      padding: 1.2rem;
      border-radius: 0.8rem;
      cursor: pointer;
      transition: all 0.3s ease;
      -webkit-tap-highlight-color: transparent; // 移除移动端点击蓝色高亮

      &:hover {
        background-color: var(--primary-lighter);
        color: var(--primary-color);

        .iconfont {
          color: var(--primary-color);
          transform: scale(1.1);
        }

        .ico-img {
          transform: scale(1.1);
        }

        p {
          color: var(--primary-color);
        }
      }

      &:active {
        background-color: var(--primary-light);
        transform: scale(0.98);
      }

      .iconfont {
        margin-right: 0.8rem;
        transition: transform 0.3s ease;
      }
      .ico-img {
        width: 1.6rem;
        height: 1.6rem;
        margin-right: 0.8rem;
        transition: transform 0.3s ease;
      }
      p {
        font-size: 1.4rem;
        padding-top: 0.2rem;
        font-weight: normal;
        transition: color 0.3s ease;
      }
    }
    .lang-theme {
    //   width: 100%;
      .el-dropdown {
        width: 100%;
      }
      .el-dropdown-link {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
      }
      .ico-box {
        display: inline-block;
        color: var(--text-color);
        .iconfont {
          font-size: 1.6rem;
        }
      }
      .txt {
        color: var(--text-color);
        margin-left: -0.4rem;
        font-size: 1.4rem;
      }
      .iconfont {
        font-size: 1.4rem;
        margin-right: 0.8rem;
        color: var(--text-color);
        transform: rotate(-90deg);
      }
    }
    .my-plans {
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      padding-top: 1.6rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .my-plans-box {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .iconfont {
        font-size: 1.4rem;
        margin-right: 0.8rem;
        color: #fff;
        transform: rotate(-90deg);
      }
    }
  }
}


</style>
