<template>
    <div>
        <Head>
            <title>自定义布局</title>
            <meta name="description" content="这是自定义布局的头部信息" />
        </Head>
        <slot />
        <footer>
            这是底部
        </footer>
    </div>
</template>

<script setup lang="ts"></script>
<style lang="sass" scoped>
</style>