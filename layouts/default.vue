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
        <slot/>
    </div>
</template>

<script setup lang="ts">
const { locales} = useI18n();
onMounted(()=>{
  //这里必须要做，涉及AITDK中的Hreflangs
  const { generateSeo } = useSeo()
  useHead(generateSeo())
})



</script>
<style lang="sass" scoped>
@use '/assets/css/mide.scss';
@use '/assets/css/variable.scss';
</style>