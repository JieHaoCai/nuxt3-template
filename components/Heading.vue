<template>
  <h1 class="visually-hidden" v-html="t('headings.h1')"></h1>
  <section>
    <h2 class="visually-hidden" v-html="t('headings.h2-1')"></h2>
    <h3 class="visually-hidden" v-html="t('headings.h3-1')"></h3>
  </section>
  <section>
    <h2 class="visually-hidden" v-html="t('headings.h2-2')"></h2>
    <h3 class="visually-hidden" v-html="t('headings.h3-2')"></h3>
  </section>
  <section>
    <h2 class="visually-hidden" v-html="t('headings.h2-3')"></h2>
    <h3 class="visually-hidden" v-html="t('headings.h3-3')"></h3>
  </section>
</template>

<script lang="ts">
/**
 * Heading 组件
 * @description SEO 优化用的隐藏标题组件，包含 H1-H3 标签用于搜索引擎优化
 */
export default {
  name: 'Heading'
}
</script>

<script lang="ts" setup>
const { t } = useI18n();
</script>

<style lang="scss" scoped>
</style>