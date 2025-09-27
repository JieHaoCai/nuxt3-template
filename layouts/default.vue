<template>
  <div>
    <h1 class="visually-hidden" v-html="$t('headings.h1')"></h1>
    <section>
      <h2 class="visually-hidden" v-html="$t('headings.h2-1')"></h2>
      <h3 class="visually-hidden" v-html="$t('headings.h3-1')"></h3>
    </section>
    <section>
      <h2 class="visually-hidden" v-html="$t('headings.h2-2')"></h2>
      <h3 class="visually-hidden" v-html="$t('headings.h3-2')"></h3>
    </section>
    <section>
      <h2 class="visually-hidden" v-html="$t('headings.h2-3')"></h2>
      <h3 class="visually-hidden" v-html="$t('headings.h3-3')"></h3>
    </section>
    <div class="header-box z-50">
        <!-- 检测到本地语言 -->
      <div
        class="language-tip notphone-is-show"
        :class="{ hidden: !isShowChangeLang }"
      >
        <div class="msg">{{ LangInfo.message }}</div>
        <div class="confirm btn-gradient" @click="changeLang(browserLanguageLocale.code)">
          {{ LangInfo.confirmButton }}
        </div>
        <div class="cancel btn-gradient" @click="keepCurrentLang">
          {{ LangInfo.cancelButton }}
        </div>
      </div>
      <!-- 顶部区域  -->
      <div class="header max-width-1372-auto">
          <!-- 左侧logo区域 -->
          <div class="title cursor-pointer notphone-is-show">
            <img src="../static/img/logo.png" alt="" />
            AI Manga Translator
          </div>
          <!-- 中间导航区域 -->
          <ul class="nav-herader">
            <li class="phone-is-show left-mu">
              <i class="iconfont icon_nav_list"></i>
            </li>
            <li class="lang-theme notphone-is-show">
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
                        :command="item.key"
                        :key="item.key"
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
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { I18N_REDIRECTED,IS_SHOW_CHANGE_LANG } from "~/utils/key/key";
//是否显示切换语言提示
const isShowChangeLang = ref(false);
const { LangInfo, browserLanguageLocale, supportedLocales, setHtmlDIR } = useLangInfo();
const {  locale, setLocale, locales } = useI18n();
const localePath  = useLocalePath()
const route = useRoute()
const { $localStorage } = useNuxtApp();
const { generateHrefLangs } = useHrefLangs();

const localeName = computed(() => {
  return locales.value.find(item => item.code === locale.value)?.name;
});

onMounted(() => {
  //涉及AITDK中的Hreflangs
  useHead(generateHrefLangs());

  isShowTopChangeLangTip()
  //对阿拉伯语言特殊处理
  setHtmlDIR();
});


//是否展示切换语言顶部提示
const isShowTopChangeLangTip = ()=>{
  //获取持久化存储
  const isShowChangeLangTip = $localStorage.getItem(IS_SHOW_CHANGE_LANG)
  //如果存在并且明确为保持当前语言，则不展示
  if(isShowChangeLangTip && isShowChangeLangTip === "0"){
    isShowChangeLang.value = false
    return
  }
  // 判断当前浏览器语言，是否支持的语言列表中，如果在，则判断是否为当前语言
  if (supportedLocales.includes(browserLanguageLocale.code)) {
    locale.value == browserLanguageLocale.code
      ? (isShowChangeLang.value = false)
      : (isShowChangeLang.value = true);
  }
}

//切换语言
const changeLang = async (lang: any) => {
  isShowChangeLang.value = false;
  await setLocale(lang);
  useCookie(I18N_REDIRECTED).value = lang;
  navigateTo(localePath(route.path, lang))
  setHtmlDIR();
  useHead(generateHrefLangs());
};


//保持当前语言
const keepCurrentLang = () => {
  isShowChangeLang.value = false;
  //持久化存储
  $localStorage.setItem(IS_SHOW_CHANGE_LANG,"0")
};



</script>
<style lang="scss" scoped>
@use "/assets/css/mide.scss" as *;
@use "/assets/css/variable.scss" as *;


.el-dropdown-menu__item {
  color: rgba(0, 0, 0, 0.5);
}
.isSelItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #1a1a1a;
  font-weight: bold;
  i {
    color: #1a1a1a;
    font-weight: bold;
  }
}
.el-dropdown-menu__item:focus,
.el-dropdown-menu__item:not(.is-disabled):hover {
  color: #ff00ff;
  background-color: rgba(255, 0, 255, 0.08);
  i {
    color: #ff00ff;
  }
}


.header-box {
  background-color: rgba(255, 102, 178, 0);
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  z-index: 1002;
  @include browserType("phone") {
    max-width: 100vw;
  }
}

.language-tip {
  width: 100%;
  background-color: #1a0f14;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  height: 48px;
  .confirm,
  .cancel {
    padding: 8px 16px;
    color: #fff;
    border-radius: 30px;
    cursor: pointer;
  }
}
.hidden {
  opacity: 0;
  height: 0;
  transition: all 0.3s linear;
}
.header {
  // width: 1370px;
  color: #fff;
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
  .nav-herader {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    font-size: 14px;
    @include browserType("phone") {
      justify-content: space-between;
      font-size: 1.4rem;
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
    .default-ico {
      position: absolute;
      right: 4.8rem;
      top: 1.6rem;
    }
    li {
      margin: 0 16px;
      display: flex;
      align-items: center;
      opacity: 0.75;
      cursor: pointer;
      padding: 0 4px;
      @include browserType("phone") {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        opacity: 1;
      }
      p {
        font-weight: 500;
        font-size: 14px;
        margin: 0 4px;
        padding-top: 2px;
        max-width: 120px;
      }
      .iconfont {
        font-size: 16px;
        margin: 0 4px;
        font-weight: bold;
      }
      .ico-img {
        width: 16px;
        height: 16px;
        margin: 0 4px;
        @include browserType("phone") {
          width: 1.6rem;
          height: 1.6rem;
        }
      }
    }
    .img-ico-item {
      display: flex;
      align-items: center;
    }
    .change-theme {
      opacity: 1;
      img {
        width: 66px;
        height: 36px;
        object-fit: cover;
      }
    }
    .lang-theme {
      opacity: 1;
      .el-dropdown-link {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        .ico-box {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 4px;
          .iconfont {
            font-size: 14px;
          }
        }
      }
    }
    .isSelNav {
      opacity: 1;
    }
    li:hover {
      opacity: 0.8;
      p {
        text-decoration: underline;
      }
    }
  }
  .login {
    display: flex;
    align-items: center;
    padding: 8px 16px;
    border-radius: 36px;
    margin: 0 12px;
    font-size: 14px;
    line-height: 20px;
    background-color: #fff;
    cursor: pointer;
    color: $lightColor;
    &:hover {
      opacity: 0.8;
    }
    .ico {
      width: 14px;
      height: 14px;
      margin: 0 4px;
    }
    span {
      margin: 0 4px;
    }
  }
  .user-msg {
    cursor: pointer;
    .user {
      display: flex;
      align-items: center;
      .user-img {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 36px;
        height: 36px;
        background: #ff00ff;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .user-name {
        margin: 0 8px;
        font-size: 14px;
        i {
          margin: 0 4px;
        }
      }
    }
  }
}
</style>
