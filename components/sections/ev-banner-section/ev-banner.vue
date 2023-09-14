<template>
  <div class="banner-container">
    <div class="banner--top-content-wrapper">
      <div class="banner--title-wrapper">
        <h1 class="banner--title">{{ title }}</h1>
        <h2 class="banner--subtitle">{{ subTitle }}</h2>

        <div class="banner--button">
          {{ buttonText }} <i class="pi pi-arrow-right ml-3 text-gray-400 font-extrabold"></i>
        </div>
      </div>

      <!--  https://www.jsdelivr.com/package/npm/vue-carousel-v2  -->
      <!--      <Carousel-->
      <!--        pagination-padding=6-->
      <!--        paginationColor="rgb(243 244 246)"-->
      <!--        paginationActiveColor="rgb(220 38 38)"-->
      <!--        autoplay autoplay-timeout=4000-->
      <!--        :per-page="1"-->
      <!--        :mouse-drag="false"-->
      <!--        class="text-gray-100 w-full max-w-[770px] lg:w-6/12 mt-8 lg:mt-0"-->
      <!--      >-->
      <!--        <Slide-->
      <!--          v-for="infoBannerContentCard of infoBannerContentCards"-->
      <!--          :key="infoBannerContentCard.id"-->
      <!--          class="text-center lg:text-left border-b border-b-gray-400/50 pb-2"-->
      <!--        >-->
      <!--          <h3 class="text-lg md:text-xl font-medium mt-2 lg:mt-0">{{ infoBannerContentCard.title }}</h3>-->
      <!--          <p class="text-sm md:text-base sm:mt-3 font-light mt-2.5">{{ infoBannerContentCard.description }}</p>-->
      <!--        </Slide>-->
      <!--      </Carousel>-->
    </div>

    <!--   LVL S   -->
    <div class="rating-cards">
      <div
        v-for="ratingCard of ratingCards"
        class="rating-card"
        :class="{'translate-y-8': (ratingCard.id / 2) === 0}"
      >
        <div class="rating-card--title">{{ ratingCard.title }}</div>
        <div class="rating-card--subtitle">{{ ratingCard.sTitle }}</div>
        <div class="rating-card--description">{{ ratingCard.description }}</div>
      </div>
    </div>

  </div>
</template>

<script>

import 'primeicons/primeicons.css';
import {ratingCards} from "@/configs/ratingCards";
import {infoBannerContentCards} from "@/configs/infoBannerCarousel";

export default {
  name: "ev-banner",
  data() {
    return {
      ratingCards,
      infoBannerContentCards,
      title: "Эверест Консалтинг",
      subTitle: "Работаем с 2010 года",
      buttonText: "Подробнее о нас"
    }
  }
}
</script>

<style scoped>

.banner-container {
  @apply w-full flex flex-col justify-evenly h-auto lg:min-h-[calc(100vh-65px)];
  @apply pt-20 sm:py-6 px-4 sm:px-8 md:px-4 lg:px-10;
  @apply border-8 border-gray-900 border-b-gray-100 bg-blend-multiply;
  background: rgba(164, 98, 87, 0.8) top / cover no-repeat fixed url("@/assets/background/main_page/bg-everest.jpg");
}

.banner--top-content-wrapper {
  @apply w-full flex flex-col items-center lg:flex-row lg:items-start lg:justify-around;
}

.banner--title-wrapper {
  @apply w-full lg:w-5/12;
  @apply flex flex-col items-center;
  @apply text-center;
}

.banner--title, .banner--subtitle{
  @apply text-gray-200 font-extrabold;
}

.banner--title {
  @apply text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl;
}

.banner--subtitle {
  @apply mt-1;
  @apply text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl;
}

.banner--button {
  @apply flex items-center;
  vertical-align: middle;
  @apply text-base sm:text-lg;
  @apply pl-6 pr-4 py-1.5;
  @apply mt-3;

  @apply bg-gray-100 border-4 border-gray-600/30 rounded-xl;
  @apply transition-colors duration-150;
  @apply active:scale-[98%] hover:bg-gray-700 hover:text-gray-200 hover:border-gray-800;
}

.rating-cards {
  @apply space-y-3 md:space-y-0 md:space-x-4 mt-6;
  @apply flex flex-col items-center md:flex-row md:justify-center;
  /*@apply flex flex-col gap-3 md:gap-6 lg:gap-8 xl:gap-12 items-center sm:flex-row sm:justify-between md:justify-evenly mt-5 pb-4 md:pb-6;*/
}

.rating-card {
  @apply border-2 border-transparent lg:border-gray-800/30;
  @apply max-w-[400px] sm:max-w-[75%];
  @apply bg-gray-600/10 backdrop-blur-lg rounded-3xl;
  @apply p-2 md:p-2 lg:p-14;
  @apply text-center flex flex-col w-full md:w-5/12 lg:max-w-[500px];
}

.rating-card--title {
  @apply font-extrabold text-gray-200 text-4xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl;
}

.rating-card--subtitle {
  @apply mt-2;
  @apply font-extrabold text-red-600 text-lg md:text-lg lg:text-lg xl:text-lg;
}

.rating-card--description {
  @apply mt-1.5;
  @apply font-light text-gray-200 text-base;
}

</style>
