<template>
    <div class="view">
      <div class="top-box">
        {{ t("Logout") }}
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
</style>
