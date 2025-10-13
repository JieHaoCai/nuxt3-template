<template>
        <ul class="nav-herader">
            <!-- 移动端左侧显示更多 -->
            <li class="phone-is-show left-mu" @click="showDrawer">
                <i class="iconfont icon_nav_list"></i>
            </li>
            <li class="notphone-is-show" @click="toLink(item)" v-for="item in navBarList" :key="item.title" >
                    <!-- 字符串类型用 v-html -->
                <span v-if="typeof item.icon === 'string'" v-html="item.icon"></span>
                
                <!-- 组件类型用 component -->
                <component v-else-if="item.icon" :is="item.icon" />
                <p>
                    {{ t(item.title) }}
                </p>
            </li>
            <!-- 暗色主题模式 -->
            <ClientOnly>
                <li class="theme-switch notphone-is-show" v-if="websiteConfig.mode.enableSwitch">
                    <el-switch
                    v-model="isDark"
                    inline-prompt
                    :active-icon="Moon"
                    :inactive-icon="Sunny"
                    />
                </li>
            </ClientOnly>
            <!-- 多语言切换 -->
            <li class="lang-theme notphone-is-show" v-if="websiteConfig.i18n">
                <el-dropdown trigger="click"  @command="changeLang">
                  <div class="el-dropdown-link">
                    <div class="ico-box notphone-is-show">
                      <i class="iconfont icon_layouts"></i>
                    </div>
                    <span class="txt">{{ localeName }}</span>
                    <i class="iconfont icon_bottom"></i>
                  </div>
                  <template #dropdown>
                    <el-dropdown-menu>
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
</template>

<script setup lang="ts">
const { checkOutLang } = useLangInfo();
const {  locale, locales } = useI18n();
import {websiteConfig} from '~/config/website'
import { navBarList } from '~/config/navbar-config'
import { useDark } from '@vueuse/core'
import { Moon, Sunny } from '@element-plus/icons-vue'
const { t } = useI18n();
const { toLink } = useToLink()

const emit = defineEmits(['showDrawer'])


 // 暗色模式
const isDark = useDark({
    selector:'html',
    attribute:'class',
    valueDark:'dark',
    valueLight:'light',
    initialValue:websiteConfig.mode.defaultMode
})


const localeName = computed(() => {
  return locales.value.find(item => item.code === locale.value)?.name;
});



//切换语言
const changeLang = async (lang: any) => {
   await checkOutLang(lang)
};

const showDrawer = ()=>{
    emit('showDrawer')
}

</script>
<style lang="scss">
@use "/assets/css/mide.scss" as *;
@use "/assets/css/variable.scss" as *;
.nav-herader {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
    font-size: 14px;

    @include browserType("phone") {
      justify-content: space-between;
      font-size: 1.4rem;
      gap: 4px;
    }

    .left-mu {
      .iconfont {
        font-size: 1.6rem;
      }
      img {
        width: 2.4rem;
        height: 2.4rem;
      }
      &:hover {
        opacity: 1;
      }
    }

    li {
     -webkit-tap-highlight-color: transparent; // 移除移动端点击时的蓝色高亮
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 8px 16px;
      margin: 0;
      border-radius: 8px;
      transition: all 0.3s ease;
      color: var(--text-color);
      font-weight: 500;
      position: relative;

      @include browserType("phone") {
        padding: 4px 8px;
        border-radius: 6px;
      }

      p {
        font-size: 15px;
        margin: 0;
        white-space: nowrap;
        transition: color 0.3s ease;

        @include browserType("phone") {
          font-size: 1.4rem;
        }
      }

      .iconfont {
        font-size: 18px;
        margin-right: 6px;
        transition: transform 0.3s ease;
      }

      .ico-img {
        width: 18px;
        height: 18px;
        margin-right: 6px;
        transition: transform 0.3s ease;

        @include browserType("phone") {
          width: 1.6rem;
          height: 1.6rem;
        }
      }

      // Hover 效果
      &:hover {
        background: var(--primary-lighter);
        transform: translateY(-1px);

        p {
          color: var(--primary-color);
        }

        .iconfont,
        .ico-img {
          transform: scale(1.1);
        }
      }

      // Active 效果
      &:active {
        transform: translateY(0);
        background: var(--primary-light);
      }
    }

    // 主题切换开关样式
    .theme-switch {
      padding: 4px 12px;

      :deep(.el-switch) {
        --el-switch-on-color: var(--primary-color);
        --el-switch-off-color: #dcdfe6;

        .el-switch__core {
          height: 24px;
          border-radius: 12px;

          .el-switch__action {
            width: 20px;
            height: 20px;
          }
        }
      }

      &:hover {
        background: var(--primary-lighter);
      }
    }

    // 语言切换样式
    .lang-theme {
      padding: 8px 12px;

      .el-dropdown-link {
        display: flex;
        align-items: center;
        gap: 6px;
        color: var(--text-color);
        font-weight: 500;
        transition: all 0.3s ease;

        .ico-box {
          display: flex;
          align-items: center;

          .iconfont {
            font-size: 16px;
          }
        }

        .txt {
          font-size: 15px;
        }

        // 只有最后一个 iconfont（下拉箭头）才旋转
        > .iconfont {
          transition: transform 0.3s ease;
        }
      }

      &:hover {
        background: var(--primary-lighter);

        .el-dropdown-link {
          color: var(--primary-color);

          // 只旋转下拉箭头，不旋转布局图标
          > .iconfont {
            transform: rotate(180deg);
          }
        }
      }
    }

    .isSelNav {
      background: var(--primary-light);

      p {
        color: var(--primary-color);
        font-weight: 600;
      }

      &::after {
        content: '';
        position: absolute;
        bottom: 6px;
        left: 50%;
        transform: translateX(-50%);
        width: 20px;
        height: 2px;
        background: var(--primary-color);
        border-radius: 2px;
      }
    }
  }

  // 下拉菜单美化
  :deep(.el-dropdown-menu) {
    padding: 8px;
    border-radius: 12px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

    html.dark & {
      background: #1a1a1a;
      border-color: rgba(255, 255, 255, 0.1);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    }

    .el-dropdown-menu__item {
      padding: 10px 16px;
      border-radius: 8px;
      margin: 2px 0;
      color: var(--text-color);
      transition: all 0.2s ease;

      &:hover {
        background: var(--primary-light);
        color: var(--primary-color);
      }

      &.isSelItem {
        background: var(--primary-light);
        color: var(--primary-color);
        font-weight: 600;

        .iconfont {
          color: var(--primary-color);
        }
      }
    }
  }
</style>