<template>
    <div>
        这是关于页
    </div>
</template>
<script setup lang="ts">
definePageMeta({
    layout: 'custom',
    middleware: 'auth'
})

const route = useRoute()
console.log(route.query.id)


</script>
<style lang="sass" scoped>
</style>