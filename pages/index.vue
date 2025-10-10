<template>
    <div class="view">
        <div class="container">
            <div id="showCases" class="show-cases-box">
              <div class="max-width-1372-auto">
                  <div class="title">
                    {{ t("ShowCases") }}
                  </div>
              </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { testApi } from "@/api";
import { useMyStore } from "~/stores/myStore";
const title = ref("Hello World");
const { $localStorage } = useNuxtApp();
const { t } = useI18n();
const { locale, locales, setLocale } = useI18n();

const myStore = useMyStore();
const test = () => {
  $localStorage.setItem("test", "test");
};
const getTest = () => {
  console.log($localStorage.getItem("test"));
};

const tApi = () => {
  testApi().then((res) => {
    console.log(res);
  });
};

const checkLa = () => {
  //随机切换语言
  const randomIndex = Math.floor(Math.random() * locales.value.length);
  setLocale(locales.value[randomIndex].code);
};

const testStore = () => {
  myStore.increment();
  console.log(myStore.counter);
};
</script>
<style scoped lang="scss">
@use "/assets/css/mide.scss" as *;
@use "/assets/css/variable.scss" as *;

.view{
  position: relative;
  min-height: 100vh;
  background-size: contain 800px;
  background-position: top center;
  background-repeat: no-repeat;
  .top-box{
    position: relative;
    width: 100%;
    height: 100vh;
    background: radial-gradient(
      50% 150% at 50% 50%,
      #ff66b2 0%,
      rgba(255, 102, 178, 0.9) 100%
    );
}
}

.container{
  top:0;
  left:0;
  margin:0 auto;
  position: relative;
  text-align:center;
  .show-cases-box {
    padding-top: 200px;
    background-color: #1a0f14;
    @include browserType("phone") {
      margin-top: 8rem;
      padding: 0;
    }
    .title {
      color: #fff;
      font-size: 48px;
      font-weight: bold;
      line-height: 60px;
      font-family: "poppinsBold";
      margin-bottom: 80px;
      @include browserType("phone") {
        font-size: 2.4rem;
        line-height: 3rem;
        margin-bottom: 3.6rem;
      }
    }
    .show-cases {
      border-radius: 24px 24px 0px 0px;
      overflow: hidden;
      padding: 2px;
    }
}

}

</style>
