<template>
    <div>
     <h1 class="notphone-is-show">手机端看不到</h1>
        <HelloWorld  :title="title"/>
        <button @click="test">存储数据</button>
        <button @click="getTest">获取数据</button>
        <button @click="tApi">测试接口</button>
        <button @click="testStore">测试store</button>
        <button @click="checkLa">切换语言</button>
        {{ $t("Logout") }}
    </div>
</template>
<script setup lang="ts">
import { testApi } from '@/api'
import { useMyStore } from '~/stores/myStore'
const title = ref('Hello World')
const { $localStorage } = useNuxtApp()
const {t}  = useI18n()
const { locale, locales ,setLocale} = useI18n()

const  myStore = useMyStore()
const test = ()=>{
    $localStorage.setItem('test', 'test')
}
const getTest = ()=>{
    console.log($localStorage.getItem('test'))
}

const tApi = ()=>{
    testApi().then(res=>{
        console.log(res)
    })
}

const checkLa = ()=>{
    //随机切换语言
    const randomIndex = Math.floor(Math.random() * locales.value.length)
    setLocale(locales.value[randomIndex].code)
}

const testStore = ()=>{
 myStore.increment()
 console.log(myStore.counter)
}

</script>
<style scoped lang="scss">
</style>