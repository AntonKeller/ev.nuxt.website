<template>
  <div class="banner-container">
    <div class="z-10 w-full flex flex-col items-center lg:flex-row lg:items-start lg:justify-around">
      <div class="w-full lg:w-5/12 text-center text-gray-700 font-extrabold flex flex-col justify-start mt-8 lg:mt-0">
        <h1 class="text-gray-200 text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          Эверест Консалтинг
        </h1>
        <div>
          <h2 class="text-base sm:text-lg md:text-xl lg:text-2xl mt-2 sm:mt-4 text-gray-100">
            Работаем с 2010 года
          </h2>
          <button
            class="text-sm sm:text-lg active:scale-[98%] bg-gray-100 hover:opacity-80 mt-4 sm:mt-6 transition-all duration-100 px-6 py-2 border-1 sm:border-4 border-gray-900/90 rounded-xl">
            Связаться с нами
          </button>
        </div>
      </div>

      <!--  https://www.jsdelivr.com/package/npm/vue-carousel-v2  -->
      <carousel
        pagination-padding=6
        paginationColor="rgb(243 244 246)"
        paginationActiveColor="rgb(220 38 38)"
        autoplay autoplay-timeout=4000
        :per-page="1"
        :mouse-drag="false"
        class="text-gray-100 w-full max-w-[770px] lg:w-6/12 mt-8 lg:mt-0"
      >
        <slide
          v-for="infoBannerContentCard of infoBannerContentCards"
          :key="infoBannerContentCard.id"
          class="text-center lg:text-left border-b border-b-gray-400/50 pb-2"
        >
          <h3 class="text-lg md:text-xl font-medium mt-2 lg:mt-0">
            {{ infoBannerContentCard.title }}
          </h3>
          <p class="text-sm md:text-base sm:mt-3 font-light mt-2.5">
            {{ infoBannerContentCard.description }}
          </p>
        </slide>
      </carousel>
    </div>

    <!--   LVL S   -->
    <div
      class="z-10 flex flex-col gap-3 md:gap-6 lg:gap-8 xl:gap-12 items-center sm:flex-row sm:justify-between md:justify-evenly mt-5 pb-4 md:pb-6">
      <div v-for="ratingCard of ratingCards"
           class="text-center flex flex-col w-full sm:w-[26vw] md:w-5/12 lg:max-w-[500px]">
        <div
          class="text-4xl sm:text-5xl md:text-6xl xl:text-7xl  sm:mt-4 md:mt-5 xl:mt-5  font-extrabold  text-gray-50">
          {{ ratingCard.title }}
        </div>
        <div class="text-base sm:text-lg md:text-xl xl:text-2xl   sm:mt-3  font-bold text-red-400">
          {{ ratingCard.sTitle }}
        </div>
        <div class="text-sm md:text-base sm:mt-3 font-light text-gray-100">
          {{ ratingCard.description }}
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {ratingCards} from "@/configs/ratingCards";
import {infoBannerContentCards} from "@/configs/infoBannerCarousel";

export default {
  name: "ev-banner",
  data() {
    return {
      ratingCards,
      infoBannerContentCards,
    }
  }
}
</script>

<style scoped>

.banner-container {
  @apply w-full flex flex-col justify-evenly h-auto lg:min-h-[calc(100vh-75px)];
  @apply pt-20 sm:pt-0 px-4 sm:px-8 lg:px-12;
  @apply border-8 border-gray-100 bg-blend-multiply;
  background: rgba(84, 39, 51, 0.8) top / cover no-repeat fixed url("@/assets/background/main_page/bg-everest.jpg");
}

</style>
