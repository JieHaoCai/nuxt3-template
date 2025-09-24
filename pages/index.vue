
<template>
    <div>
     <h1 class="notphone-is-show">手机端看不到</h1>
        <HelloWorld  :title="title"/>
        <button @click="test">存储数据</button>
        <button @click="getTest">获取数据</button>
        <button @click="tApi">测试接口</button>
    </div>
</template>
<script setup lang="ts">
import { testApi } from '@/api'
const title = ref('Hello World')
const { $localStorage } = useNuxtApp()
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

</script>
<style scoped lang="scss">
</style>