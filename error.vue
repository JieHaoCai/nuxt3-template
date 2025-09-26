<template>
  <div class="view">
    <div class="container " >
        <div class="header">
          <div class="title">
            <!-- <img  src="../../static/img/light/logo_txt_2.png" alt=""> -->
          </div>
        </div>
        <div class="ct">
          <img src="/static/img/img_404.png" alt="">
          <div class="right-box">
            <div class="top">Oops! Page Not Found!</div>
            <div class="sm">Sorry, The Address Of The Page You Are Visiting Is Wrong, Or The Page Does Not Exist.</div>
            <div class="tp">Automatically Return To The Previous Page In <span class="color-n">{{time}}s</span></div>
            <div class="parsing-btn" @click="pushView">
              Back Now
              <img src="/static/img/dark/ico_7.png" alt="">
            </div>
          </div>
        </div>
    </div>
  </div>
</template>


<script lang="ts" setup>
const router = useRouter();

const timerId = ref<number | null>(null);
const time = ref(5);
const pushView = ()=>{
  router.push('/');
}
onMounted(() => {
  timerId.value = window.setInterval(() => {
    time.value--;
    if (time.value === 0) {
      router.push('/'); // 跳转到其他页面
    }
  }, 1000); // 延迟 1 秒后跳转
});
onBeforeUnmount(() => {
  // 在组件销毁之前清除定时器
  if (timerId.value) {
    clearInterval(timerId.value);
  }
});
</script>
<style lang="scss" scoped>
@use '/assets/css/mide.scss';
@use '/assets/css/variable.scss';
.view{
  min-width: 100vw;
  min-height: 100vh;
  background-size: contain 800px;
  background-position: top center;
  background-repeat: no-repeat;
  // font-family: Poppins;
}
.container {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  .header{
    color: #fff;
    padding: 20px 0;
    display: flex;
    align-items: center;
    .title{
      img{
        width: 125px;
        height: 28px;
      }
    }

  }
  .ct{
    margin: 216px auto 0;
    width: 908px;
    height: 448px;
    display: flex;
    align-items: center;

    img{
      width: 448px;
      height: 448px;
      object-fit: contain;
    }
    .right-box{
      margin-left: 40px;
      .top{
        font-size: 36px;
        color: #1A1A1A;
        line-height: 42px;
        font-weight: 600;
      }
      .sm{
        margin: 26px 0 24px;
        font-size: 16px;
        line-height: 24px;
        color: #1A1A1A;
      }
      .tp{
        font-size: 14px;
        line-height: 20px;
        color: #808080;
        .color-n{
          color: #ff66bf;
        }
      }
      .parsing-btn{
        margin-top: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: bold;
        width: 142px;
        height: 44px;
        border-radius: 8px;
        background: linear-gradient(90deg, #ff66bf 0%, #9714FC 100%);
        color: #fff;
        cursor: pointer;
        img{
          width: 16px;
          height: 16px;
          margin-left: 8px;
        }
      }
    }
  }
}

</style>