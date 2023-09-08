<template>
  <!--  h-[calc(100vh-57px)] sm:h-[calc(100vh-77px)]-->
  <div class="main-container">

    <!--  БЛОК 1  -->
    <!--    <div class="content-container-1">-->
    <!--      &lt;!&ndash;  ЗАГОЛОВОК С КНОПКОЙ  &ndash;&gt;-->
    <!--      <div class="flex flex-col items-center lg:flex-row lg:items-start lg:justify-around">-->

    <!--        <div class="w-full lg:w-5/12 text-center text-gray-800 font-extrabold flex flex-col justify-start mt-8 lg:mt-0">-->
    <!--          <h1 class="text-gray-200 text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">-->
    <!--            Эверест Консалтинг-->
    <!--          </h1>-->
    <!--          <div>-->
    <!--            <h2 class="text-base sm:text-lg md:text-xl lg:text-2xl mt-2 sm:mt-4 text-gray-100">-->
    <!--              Работаем с 2010 года-->
    <!--            </h2>-->
    <!--            <button-->
    <!--              class="text-sm sm:text-lg active:scale-[98%] bg-gray-100 hover:opacity-80 mt-4 sm:mt-6 transition-all duration-100 px-6 py-2 border-1 sm:border-4 border-gray-900/90 rounded-xl">-->
    <!--              Связаться с нами-->
    <!--            </button>-->
    <!--          </div>-->
    <!--        </div>-->

    <!--        &lt;!&ndash;  https://www.jsdelivr.com/package/npm/vue-carousel-v2  &ndash;&gt;-->
    <!--        <carousel-->
    <!--          pagination-padding=6-->
    <!--          paginationColor="rgb(243 244 246)"-->
    <!--          paginationActiveColor="rgb(220 38 38)"-->
    <!--          autoplay autoplay-timeout=4000-->
    <!--          :per-page="1"-->
    <!--          :mouse-drag="false"-->
    <!--          class="text-gray-100 w-full max-w-[770px] lg:w-6/12 mt-8 lg:mt-0"-->
    <!--        >-->
    <!--          <slide-->
    <!--            v-for="infoBannerContentCard of infoBannerContentCards"-->
    <!--            :key="infoBannerContentCard.id"-->
    <!--            class="text-center lg:text-left border-b border-b-gray-400/50 pb-2"-->
    <!--          >-->
    <!--            <h3 class="text-lg md:text-xl font-medium mt-2 lg:mt-0">-->
    <!--              {{ infoBannerContentCard.title }}-->
    <!--            </h3>-->
    <!--            <p class="text-sm md:text-base sm:mt-3 font-light mt-2.5">-->
    <!--              {{ infoBannerContentCard.description }}-->
    <!--            </p>-->
    <!--          </slide>-->
    <!--        </carousel>-->

    <!--      </div>-->

    <!--      &lt;!&ndash;RATING&ndash;&gt;-->
    <!--      <div-->
    <!--        class="flex flex-col gap-3 md:gap-6 lg:gap-8 xl:gap-12 items-center sm:flex-row sm:justify-between md:justify-evenly mt-5 pb-4 md:pb-6">-->

    <!--        <div-->
    <!--          v-for="ratingCard of ratingCards"-->
    <!--          class="text-center flex flex-col w-full sm:w-[26vw] md:w-5/12 lg:max-w-[500px]"-->
    <!--        >-->
    <!--          <div-->
    <!--            class="text-4xl sm:text-5xl md:text-6xl xl:text-7xl  sm:mt-4 md:mt-5 xl:mt-5  font-extrabold  text-gray-50">-->
    <!--            {{ ratingCard.title }}-->
    <!--          </div>-->
    <!--          <div class="text-base sm:text-lg md:text-xl xl:text-2xl   sm:mt-3  font-bold text-red-400">-->
    <!--            {{ ratingCard.sTitle }}-->
    <!--          </div>-->
    <!--          <div class="text-sm md:text-base sm:mt-3 font-light text-gray-100">-->
    <!--            {{ ratingCard.description }}-->
    <!--          </div>-->
    <!--        </div>-->

    <!--      </div>-->
    <!--    </div>-->

    <div class="mt-20 sm:mt-0"></div>

    <!--    БЛОК 2-->
<!--    customer-section -->
    <evCustomerSection />

    <!--  БЛОК 6  -->
    <div class="manager-section">

      <div class="manager-section-title">
        <h2 class="managers-section-title">Руководство компании</h2>
        <p class="managers-section-description">We’re a dynamic group of individuals who are passionate about what we do
          and dedicated to delivering the best
          results for our clients.</p>
      </div>

      <div class="manager-cards-wrapper">
        <div v-for="employee of employees" :key="employee.id" class="manager-card">

          <img class="manager-ava" :src="require(`../assets/avatars/${employee.img}.png`)" alt="no img"/>

          <div class="employee-card-desc-container">
            <span class="text-gray-900 inline-block font-sans font-bold">
              {{ employee.fullName }}
            </span>
            <span class="text-red-800/80 inline-block font-sans font-medium">
              {{ employee.post }}
            </span>
            <span class="text-gray-900 inline-block font-sans font-extralight">
              {{ employee.area }}
            </span>
          </div>

        </div>
      </div>

    </div>

    <evFooter/>

  </div>
</template>

<script>

import Vue from 'vue';
import {mainContent} from "@/configs/mainPage";
import evCustomerSection from "@/components/sections/ev-customer-section/ev-customer-section";
import evFooter from "@/components/widgets/ev-footer";
import {priceInfoCards} from '@/configs/priceListInfo';
import {ratingCards} from "@/configs/ratingCards";
import {infoBannerContentCards} from "~/configs/infoBannerCarousel";
import VueCarousel from 'vue-carousel';
import {Carousel, Slide} from "vue-carousel/src";
import {employees} from "@/configs/employees"

Vue.use(VueCarousel);

export default {
  name: 'IndexPage',
  components: {
    evCustomerSection,
    evFooter,
    Carousel,
    Slide
  },

  data() {
    return {
      employees,
      activeInfoBannerElementId: 1,
      infoBannerContentCards,
      buttonShow: false,

      priceInfoCards,
      ratingCards,
      mainContent: mainContent,
    }
  }
}

</script>


<style scoped>

* {
  @apply font-sans;
}

h2 {
  @apply text-gray-800 text-xl sm:text-2xl md:text-2xl lg:text-4xl font-extrabold;
}

p {
  @apply text-gray-800 text-sm md:text-base;
}

.span-selected-red {
  @apply bg-red-900 text-gray-200 mx-0.5 px-1 py-0.5 rounded-md;
}

.main-container {
  @apply bg-gray-100 w-full overflow-y-scroll flex flex-col items-center;
}

.main-container::-webkit-scrollbar {
  width: 0;
}

.content-container-1 {
  @apply bg-gray-800;
  @apply w-full h-auto lg:min-h-[calc(100vh-75px)];
  @apply flex flex-col justify-evenly;
  @apply pt-20 sm:pt-0 px-4 sm:px-8 lg:px-12;
  @apply border-x-8 border-t-8 border-gray-100;
  background-blend-mode: multiply;
  background: rgba(180, 44, 56, 0.8) top / cover no-repeat fixed url("@/assets/background/main_page/bg-everest.jpg");
}

.manager-section {
  @apply w-full bg-gray-200 text-gray-800;
  @apply border-b-8 border-b-red-800;
  @apply lg:px-4 xl:px-12 pb-3 md:pb-4 lg:pb-6 xl:pb-8;
}

.manager-section-title {
  @apply px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-14 lg:py-16 xl:px-16 xl:py-20;
  @apply text-center md:text-left p-4 sm:p-6 md:p-8;
}

.manager-cards-wrapper {
  @apply w-full flex flex-wrap justify-center items-stretch md:justify-evenly;
  @apply gap-y-4 sm:gap-x-2 sm:gap-x-4 md:gap-x-6 lg:gap-x-4 xl:gap-x-8;
  @apply mt-4 lg:mt-12 md:mt-8 lg:mt-10;
}

.manager-card {
  @apply w-full sm:w-[45%] sm:max-w-[280px] md:w-[30%] md:max-w-[290px] lg:w-[22vw] lg:max-w-[270px];
  @apply flex items-center justify-center flex-wrap;
}

.manager-ava {
  @apply p-2.5;
  @apply object-contain min-w-[140px] w-[70vw] max-w-[185px] min-h-[140px] h-[70vw] max-h-[185px];
}

.employee-card-desc-container {
  @apply flex flex-col;
  @apply text-left text-base;
  @apply space-y-0.5;
}

.content-container-3 {
  @apply z-10 relative;
  @apply flex flex-col md:flex-row items-center justify-center;
  @apply text-gray-100;
  @apply py-2 px-4 mt-2 md:mt-0 sm:py-6 md:py-16 px-4 sm:px-8 md:px-16 lg:px-44 xl:px-64;
  @apply duration-300;
}

.avatar {
  object-fit: cover;
  width: calc(128px + 10vw);
  height: calc(128px + 10vw);
}

.txt-shadow {
  text-shadow: #4d4d56 2px 4px 5px;
}

</style>
