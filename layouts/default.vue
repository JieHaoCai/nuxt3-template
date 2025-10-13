<template>
  <div>
    <!-- <h1 class="visually-hidden" v-html="$t('headings.h1')"></h1>
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
    </section> -->
    <nav-bar :logo-src="websiteConfig.ui.logo" :logo-text="websiteConfig.ui.title">
      <template #tip-area>
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
      </template>
      <template #nav v-if="navBarList.length>0">
            <nav-bar-item></nav-bar-item>
      </template>
    </nav-bar>
    <slot />
    <footer-bar></footer-bar>
  </div>
</template>

<script setup lang="ts">
import {websiteConfig} from '~/config/website'
import {navBarList} from '~/config/navbar-config'
import { I18N_REDIRECTED,IS_SHOW_CHANGE_LANG } from "~/utils/key/key";

const isShowChangeLang = ref(false); //是否显示切换语言提示
const { LangInfo, browserLanguageLocale, supportedLocales, setHtmlDIR ,checkOutLang} = useLangInfo();
const {  locale, setLocale } = useI18n();
const localePath  = useLocalePath()
const route = useRoute()
const { $localStorage } = useNuxtApp();
const { generateHrefLangs } = useHrefLangs();
const {setMeTaDescWithKey,setMetaTitle} = useMetaData()



onMounted(() => {
  setHtmlDIR();
  if(websiteConfig.seo.hreflangs){
     useHead(generateHrefLangs());
  }
  if(websiteConfig.seo.metatitle){
    setMetaTitle()
  }
  if(websiteConfig.seo.Metadescription && websiteConfig.seo.metakeywords){
    setMeTaDescWithKey()
  }
  isShowTopChangeLangTip()
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
  await checkOutLang(lang)
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

</style>
