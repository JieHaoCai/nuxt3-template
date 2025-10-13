<template>
    <div class="view">
        <div class="container">
           <div style="height: 1800px;">
                内容区域
           </div>
        </div>
    </div>
</template>
<script setup lang="ts">


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
 
}

.container{
  top:0;
  left:0;
  margin:0 auto;
  position: relative;
  text-align:center;
  padding-top: 80px; 
  @include browserType("phone") {
    padding-top: 60px;
  }
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
