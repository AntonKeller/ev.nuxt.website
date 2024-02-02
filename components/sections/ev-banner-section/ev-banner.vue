<template>
  <div class="banner-container">
    <div class="flex flex-col w-full px-1 mt-24 md:mt-0">

      <transition
        appear
        :duration="{ enter: 500, leave: 800 }"
        @before-enter="titleBeforeEnter"
        @enter="titleEnter"
        @after-enter="titleAfterEnter"
      >
        <h1 class="banner--title">{{ title }}</h1>
      </transition>

      <transition
        appear
        :duration="{ enter: 500, leave: 800 }"
        @before-enter="subTitleBeforeEnter"
        @enter="subTitleEnter"
        @after-enter="subTitleAfterEnter"
      >
        <h2 v-if="subTitleShow" class="banner--subtitle">{{ subTitle }}</h2>
      </transition>

      <div v-if="buttonsShow" class="flex justify-center mt-4 gap-2 flex-wrap">
        <transition
          appear
          :duration="{ enter: 500, leave: 800 }"
          @before-enter="buttonBeforeEnter"
          @enter="buttonEnter1"
        >
          <div :key="1" class="b--btn bg-red-500/30 hover:bg-red-500/60 hover:border-gray-900">
            Оценка
            <i class="pi pi-arrow-right ml-3 text-red-200/60 font-extrabold"></i>
          </div>
        </transition>
        <transition
          appear
          :duration="{ enter: 500, leave: 800 }"
          @before-enter="buttonBeforeEnter"
          @enter="buttonEnter2"
        >
          <div :key="2" class="b--btn bg-cyan-500/30 hover:bg-cyan-500/60 hover:border-gray-900">
            Финансовый консалтинг
            <i class="pi pi-arrow-right ml-3 text-cyan-200/60 font-extrabold"></i>
          </div>
        </transition>
        <transition
          appear
          :duration="{ enter: 500, leave: 800 }"
          @before-enter="buttonBeforeEnter"
          @enter="buttonEnter3"
        >
          <div :key="3" class="b--btn bg-fuchsia-500/30 hover:bg-fuchsia-500/60 hover:border-gray-900">
            Строительный консалтинг
            <i class="pi pi-arrow-right ml-3 text-fuchsia-200/60 font-extrabold"></i>
          </div>
        </transition>
      </div>

    </div>
  </div>
</template>

<script>

import {infoBannerContentCards} from "@/configs/infoBannerCarousel";
import evTabloid from "@/components/ev-tabloid";
import {gsap} from "gsap";
// import {ScrollTrigger} from "gsap/ScrollTrigger";

export default {

  name: "ev-banner",

  components: {
    evTabloid
  },

  data() {
    return {
      buttonsShow: false,
      subTitleShow: false,

      infoBannerContentCards,
      title: "Эверест Консалтинг",
      subTitle: "На рынке с 2010 года",
    }
  },

  methods: {

    // ~ title animation
    titleBeforeEnter: (el) => {
      console.log("before enter - set initial state")
      el.style.transform = "translateY(-60px)"
      el.style.opacity = 0;
    },
    titleEnter: (el, done) => {
      console.log('starting to enter - -make transition')
      gsap.to(el, {
        duration: 0.65,
        y: 0,
        opacity: 1,
        ease: "sine.inOut",
        done: done
      });
    },
    titleAfterEnter(el, done) {
      this.subTitleShow = !this.subTitleShow;
    },

    // ~ subTitle animation
    subTitleBeforeEnter: (el) => {
      el.style.opacity = 0;
    },
    subTitleEnter: (el, done) => {
      gsap.to(el, {
        delay: 0.30,
        duration: 1.2,
        opacity: 1,
        done: done
      });
    },
    subTitleAfterEnter(el) {
      this.buttonsShow = !this.buttonsShow;
    },


    // ~ title animation
    buttonBeforeEnter: (el) => {
      el.style.opacity = 0;
    },
    buttonEnter1: (el, done) => {
      gsap.to(el, {
        delay: 0.45,
        duration: 0.75,
        y: 0,
        opacity: 1,
        ease: "sine.inOut",
        done: done
      });
    },
    buttonEnter2: (el, done) => {
      console.log('starting to enter - -make transition')
      gsap.to(el, {
        delay: 0.60,
        duration: 0.75,
        y: 0,
        opacity: 1,
        ease: "sine.inOut",
        done: done
      });
    },
    buttonEnter3: (el, done) => {
      console.log('starting to enter - -make transition')
      gsap.to(el, {
        delay: 0.75,
        duration: 0.75,
        y: 0,
        opacity: 1,
        ease: "sine.inOut",
        done: done
      });
    },
  }

}
</script>

<style scoped>

.banner-container {
  @apply w-full h-auto lg:min-h-[calc(100vh-65px)];
  @apply px-[4px] sm:p-[7vw] lg:py-[20vw];
  @apply bg-blend-multiply;
  background: rgba(103, 99, 99, 0.75) top / cover no-repeat fixed url("@/assets/background/main_page/bg-everest.jpg");
}

.banner--title {
  @apply text-center font-extrabold text-gray-200 bg-clip-text text-2xl sm:text-4xl md:text-5xl lg:text-6xl;
}

.banner--subtitle {
  @apply mt-4 uppercase text-center font-extrabold mt-4 text-gray-200 bg-clip-text text-base md:text-lg lg:text-xl xl:text-3xl;
}

.b--btn {
  @apply select-none cursor-pointer;
  @apply px-4 py-1.5;
  @apply flex items-center;
  @apply text-base md:text-base;
  @apply transition-colors duration-150;
  @apply active:scale-[99%];
  @apply text-gray-200 border-2 border-gray-200/20 rounded-2xl backdrop-blur-sm;
}

</style>
