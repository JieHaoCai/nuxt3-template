<template>
    <div>
        {{ title }}
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        default: 'Helloworld'
    }
})

</script>
<style scoped>

</style>