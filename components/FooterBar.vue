<template>
    <footer>
    <div class="footer-ct max-width-1372-auto">
        <div class="footer-left">
          <div class="footer-logo">
            <img :src="footerList.icon" alt="" />
            {{ footerList.title }}
          </div>
          <div class="txt" v-html="t(footerList.desc)"></div>
        </div>
        <div class="footer-right" v-for="item in footerList.menu" :key="item.title">
          <div class="til notphone-is-show">{{ t(item.title) }}</div>
          <div
            class="phon-til til phone-is-show" >
            {{ t(item.title) }}
          </div>
          <div class="tillchild" v-for="citem in item.items" @click="toLink(citem)">
                {{ t(citem.title) }}
          </div>
        </div>
 
      </div>
      <div class="link-ico max-width-1372-auto" v-if="footerList.externalLink">
        <a
          :class="item.name"
          :href="item.link"
          target="_blank"
          v-for="item in footerList.externalLink"
          :key="item.name"
        >
         <img v-if="typeof item.icon === 'string'" :src="item.icon" alt=""></img>
                
          <!-- 组件类型用 component -->
         <component v-else-if="item.icon" :is="item.icon" />
        </a>
      </div>
      <div class="suno max-width-1372-auto">
        <div class="left-box">
            {{ footerList.copyright }}
        </div>
        <!-- <div class="lang-box phone-is-show">
          <span
            :class="{ isSel: localeSel == item.key }"
            v-for="item in localesArr"
            :key="item.key"
            @click="langCommand(item.key)"
          >
            {{ item.name }}
          </span>
        </div> -->
      </div>
      </footer>
</template>

<script setup lang="ts">
import { footerList } from '~/config/footer-config';
const { t } = useI18n();
const {toLink} = useToLink()
</script>

<style lang="scss" scoped>
@use "/assets/css/mide.scss" as *;
@use "/assets/css/variable.scss" as *;

footer {
  border-top: 1px solid var(--border-top-color);
  padding-top: 32px;
  @include browserType("phone") {
    padding: 2.4rem 2rem;
  }
  color: var(--text-color);
  .footer-ct {
    margin: 0 auto;
    display: flex;
    gap: 10px;
    justify-content: space-between;
    @include browserType("phone") {
      flex-wrap: wrap;
      justify-content: center;
      gap: 2px;
    }
    .footer-left {
      width: 248px;
      // padding: 0 24px;
      box-sizing: border-box;
      @include browserType("phone") {
        display: inline-block;
        width: 100%;
        padding: 0;
        margin-bottom: 24px;
      }
      .footer-logo {
        color: var(--text-color);
        display: flex;
        align-items: center;
        font-size: 16px;
        font-weight: 600;
        line-height: 20px;
        @include browserType("phone") {
          justify-content: center;
          font-size: 1.6rem;
          line-height: 2rem;
        }
        img {
          width: 36px;
          height: 36px;
          object-fit: contain;
          margin-right: 8px;
          @include browserType("phone") {
            width: 3.6rem;
            height: 3.6rem;
          }
        }
      }
      .txt {
        color: var(--text-color);
        opacity: 0.8;
        font-size: 14px;
        font-weight: normal;
        line-height: 20px;
        margin-top: 8px;
        @include browserType("phone") {
          font-size: 1.2rem;
          line-height: 1.6rem;
          margin-top: 0.8rem;
          text-align: center;
        }
      }
    }
    .footer-right {
      display: flex;
      flex-direction: column;

      .tillchild{
        font-size: 14px;
        font-weight: 400;
        color: var(--text-color);
        opacity: 0.8;
        margin-bottom: 10px;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent; // 移除移动端点击时的蓝色高亮
        transition: color 0.3s ease, opacity 0.3s ease;

        &:hover {
          color: var(--primary-color);
          opacity: 1;
        }

        @include browserType("phone") {
            padding: 1.2rem;
        }
      }

      @include browserType("phone") {
        width: 100%;
      }
      .til {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 12px;
        @include browserType("phone") {
          font-weight: 600;
          font-size: 1.4rem;
          line-height: 2rem;
          padding: 1.2rem;
          border-radius: 0.4rem;
        }
      }
      .phon-til {
        display: flex;
        justify-content: space-between;
        @include browserType("phone") {
          margin-bottom: 0px;
        }
      }
    }
    .footer-right {
      .emil {
        font-size: 14px;
        font-weight: normal;
        cursor: pointer;
        line-height: 20px;
        color: rgba(255, 255, 255, 0.8);
        margin-bottom: 10px;
      }
      .a-link {
        color: rgba(255, 255, 255, 0.8);
        margin-bottom: 10px;
        font-size: 14px;
        font-weight: normal;
        cursor: pointer;
        line-height: 20px;
      }
      .about,
      .privacy {
        color: rgba(255, 255, 255, 0.8);
        display: flex;
        align-items: center;
        font-size: 14px;
        font-weight: normal;
        cursor: pointer;
        line-height: 20px;
        margin-bottom: 10px;
        img {
          width: 16px;
          height: 16px;
          margin-right: 8px;
        }
      }
      .about {
        margin-bottom: 10px;
      }
    }
    .f-link {
      flex-wrap: wrap;
    }
    .b-link {
      flex-wrap: wrap;
      width: 198px;
      a {
        width: 100%;
        display: inline-block;
        overflow: hidden; /* 隐藏溢出内容 */
        display: -webkit-box; /* 将元素作为弹性伸缩盒子模型显示 */
        -webkit-line-clamp: 1; /* 限制文本显示的行数 */
        -webkit-box-orient: vertical; /* 垂直排列子元素 */
        text-overflow: ellipsis; /* 超出部分显示省略号 */
        white-space: normal;
      }
    }
    .phon-btn-show {
      @include browserType("phone") {
        font-size: 1.4rem;
        padding: 0.8rem 12px;
        display: flex;
        align-items: center;
        // background: rgba(255, 255, 255, 0.08);
        border-radius: 0.5rem;
        margin-bottom: 1rem;
        width: 50vw;
      }
      .phone-isno-show {
        display: none;
        @include browserType("phone") {
          display: inline-block;
        }
      }
    }
  }
  .suno {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 8px;
    margin-top: 32px;
    box-sizing: border-box;
    @include browserType("phone") {
      justify-content: center;
    }
    .left-box {
      font-size: 12px;
      font-weight: normal;
      line-height: 16px;
      color: var(--text-color);
      opacity: 0.5;
    }
    .lang-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        margin: 0 12px;
        font-size: 12px;
        font-weight: normal;
        color: var(--text-color);
        opacity: 0.5;
      }
      span:hover {
        text-decoration: underline;
        cursor: pointer;
      }
      .isSel {
        color: var(--text-color);
        opacity: 0.8;
      }
    }
  }
  .link-ico {
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 12px;
    height: 20px;
    @include browserType("phone") {
      justify-content: center;
      height: 4rem;
      gap: 2.4rem;
      margin-top: 1rem;
    }
    a {
      display: inline-block;
      width: 20px;
      height: 20px;
      background: rgba(255, 255, 255, 0.08);
      border-radius: 2px;
      padding: 2px;
      box-sizing: border-box;
      @include browserType("phone") {
        width: 3.6rem;
        height: 3.6rem;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      img {
        width: 16px;
        height: 16px;
        object-fit: contain;
        @include browserType("phone") {
          width: 2rem;
          height: 2rem;
        }
      }
      &:hover {
        background: rgba(255, 255, 255, 0.3);
      }
    }
    .tiktok {
      background: rgba(255, 255, 255, 0.5);
    }
  }
    .phon-btn-show {
      @include browserType("phone") {
        font-size: 1.4rem;
        padding: 0.8rem 12px;
        display: flex;
        align-items: center;
        // background: rgba(255, 255, 255, 0.08);
        border-radius: 0.5rem;
        margin-bottom: 1rem;
        width: 50vw;
      }
      .phone-isno-show {
        display: none;
        @include browserType("phone") {
          display: inline-block;
        }
      }
    }
}
</style>