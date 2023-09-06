<template>
  <!--  h-[calc(100vh-57px)] sm:h-[calc(100vh-77px)]-->
  <div class="main-container">

    <!--  БЛОК 1  -->
    <!--    <div class="content-container-1">-->

    <!--      &lt;!&ndash;  ЗАГОЛОВОК С КНОПКОЙ  &ndash;&gt;-->
    <!--      &lt;!&ndash;      class="flex flex-col text-center items-center mt-3 lg:flex-row lg:justify-around md:items-start md:text-left"&ndash;&gt;-->
    <!--      <div class="flex flex-col items-center lg:flex-row lg:items-start lg:justify-around">-->

    <!--        <div class="w-full lg:w-5/12 text-center text-gray-800 font-extrabold flex flex-col justify-start mt-8 lg:mt-0">-->
    <!--          <h1 class="txt-shadow text-gray-50 text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">-->
    <!--            Эверест Консалтинг-->
    <!--          </h1>-->
    <!--          <div>-->
    <!--            <h2 class="txt-shadow text-base sm:text-lg md:text-xl lg:text-2xl mt-2 sm:mt-4 text-gray-100">-->
    <!--              Работаем с 2010 года-->
    <!--            </h2>-->
    <!--            <button-->
    <!--              class="text-sm sm:text-lg md:text-xl active:scale-[98%] bg-gray-50 hover:opacity-75 mt-4 sm:mt-6 transition-all duration-100 px-6 py-2 border-2 sm:border-4 border-gray-900/75 rounded-xl">-->
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
    <!--          class="text-gray-100 w-full max-w-[850px] lg:w-6/12 mt-8 lg:mt-0"-->
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


    <!--    БЛОК 2-->
    <!--    <div class="content-2-container">-->

    <!--      <div class="content-2-text-blocks-container">-->

    <!--        <div class="p-4">-->
    <!--          Наши специалисты успешно осуществили-->
    <!--          и завершили проекты для 45 компаний из-->
    <!--          рейтинга «Крупнейшие компании-->
    <!--          России» (рейтинг <span class="m-0.5 rounded-md text-gray-100 bg-red-900 px-2 py-1">Эксперт-400</span>),-->
    <!--          совокупная выручка которых за 2008 год превысила 9.3 трлн. руб.-->
    <!--        </div>-->

    <!--        <div class="p-4 mt-2 mr-2 bg-gray-800 text-gray-100 rounded-md">-->
    <!--          Основным деловым преимуществом нашей-->
    <!--          компании является высокий профессионализм-->
    <!--          сотрудников, а также опыт-->
    <!--          выполнения проектов в сфере оценки и консалтинга с последующим согласованием результатов с крупнейшими-->
    <!--          международными аудиторскими компаниями.-->
    <!--        </div>-->

    <!--        <div class="p-4 mt-2">-->
    <!--          Специалисты Компании <span class="m-0.5 rounded-md text-gray-100 bg-red-900 px-2 py-1">Everest</span>-->
    <!--          Consulting являются членами таких-->
    <!--          профессиональных организаций, как-->
    <!--          Саморегулируемая Межрегиональная Ассоциация Оценщиков <span-->
    <!--          class="m-0.5 rounded-md text-gray-100 bg-red-900 px-2 py-1">(СМАО)</span>, Восточно-Европейский союз экспертов-->
    <!--          (OSV), а-->
    <!--          также-->
    <!--          получили квалификации Американского общества оценщиков <span-->
    <!--          class="m-0.5 rounded-md text-gray-100 bg-red-900 px-2 py-1">(ASA)</span>.-->
    <!--        </div>-->

    <!--      </div>-->

    <!--      <div class="content-2-company-logotypes-container">-->
    <!--        <div v-for="customerCompany of customerCompanyGroup" class="company-logotype-block">-->
    <!--          <div class="p-2">-->
    <!--            <img class="object-fill mx-auto w-full object-contain max-w-[14rem]"-->
    <!--                 :src="require(`./../assets/experience_logotypes/${customerCompany.img}.png`)" alt="err">-->
    <!--          </div>-->

    <!--          <div class="flex flex-wrap justify-center p-2 gap-1 text-sm sm:text-xs lg:sm">-->
    <!--            &lt;!&ndash;            rounded-xl border-2 border-gray-900/70 bg-gray-700&ndash;&gt;-->
    <!--            <span-->
    <!--              class="px-2 py-0.5 text-center font-medium font-sans text-gray-200"-->
    <!--              v-for="currService of customerCompany.services"-->
    <!--              :key="currService.id"-->
    <!--            >{{ currService.title }}</span>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->

    <!--      <div class="md:hidden max-w-full text-center bg-gray-800 rounded-md">-->
    <!--        <carousel-->
    <!--          paginationSize=6-->
    <!--          pagination-padding=4-->
    <!--          paginationColor="rgb(243 244 246)"-->
    <!--          paginationActiveColor="rgb(220 38 38)"-->
    <!--          autoplay-->
    <!--          autoplay-timeout=4000-->
    <!--          :per-page="1"-->
    <!--          :mouse-drag="false"-->
    <!--        >-->
    <!--          <slide-->
    <!--            v-for="customerCompany of customerCompanyGroup"-->
    <!--            :key="customerCompany.id"-->
    <!--            class="flex flex-col justify-evenly"-->
    <!--          >-->

    <!--            <div>-->
    <!--              <img class="object-fill ml-auto mr-auto object-contain"-->
    <!--                   :src="require(`./../assets/experience_logotypes/${customerCompany.img}.png`)" alt="err">-->
    <!--            </div>-->

    <!--            <div class="flex flex-wrap justify-center pb-2 gap-1 mt-2 text-xs">-->
    <!--                    <span-->
    <!--                      class="px-2 py-0.5 rounded-xl font-medium border border-gray-700/60 bg-gray-100 backdrop-blur-sm text-gray-800 font-sans"-->
    <!--                      v-for="currService of customerCompany.services"-->
    <!--                      :key="currService.id"-->
    <!--                    >-->
    <!--                      {{ currService.title }}-->
    <!--                    </span>-->
    <!--            </div>-->

    <!--          </slide>-->
    <!--        </carousel>-->
    <!--      </div>-->

    <!--    </div>-->


    <!--  БЛОК 3  -->
    <!--    <div class="content-container-3">-->
    <!--      <img class="show-from-left object-cover object-fill w-20 sm:w-24 md:w-36"-->
    <!--           src="../assets/stickers/target-sticker-gray-shadow.png"-->
    <!--           alt="no img">-->
    <!--      <p class="text-lg sm:text-xl md:text-xl lg:text-2xl text-center font-extrabold">-->
    <!--        <span class="uppercase">Наша цель</span> – оказание полного комплекса консультационных услуг в области-->
    <!--        оценки и консалтинга (финансового,-->
    <!--        управленческого, налогового и строительного) специалистами, обладающими международными квалификациями и-->
    <!--        значительным опытом выполнения подобных проектов как в России, так и за рубежом.-->
    <!--      </p>-->
    <!--    </div>-->


    <!--  БЛОК 4  -->
    <!--    <div class="mt-2 sm:mt-4 md:mt-6 lg:mt-8 px-4 sm:px-32 flex flex-col items-center w-12/12 sm:w-6/12">-->
    <!--      <h2 class="font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center border-b-4 md:border-b-8">-->
    <!--        Наши преимущества-->
    <!--      </h2>-->
    <!--    </div>-->


    <!--  БЛОК 5  -->
    <!--    <div-->
    <!--      class="flex flex-col lg:flex-row items-center lg:items-start justify-center mt-0 sm:mt-4 lg:mt-8 w-full px-4">-->
    <!--      <div-->
    <!--        class="bg-white-filler mt-2 content-animate rounded-xl border duration-300 h-full border-gray-100 m-2 p-2 backdrop-blur-sm backdrop-brightness-75 sm:backdrop-brightness-100 w-full sm:w-10/12 lg:w-7/12 xl:w-6/12"-->
    <!--        v-for="el of mainContent"-->
    <!--        :style="{animationDuration: 0.5 + el.id / 6 + 's'}">-->

    <!--        <div class="flex flex-col justify-center items-center mt-2">-->
    <!--          <h1 class="font-extrabold text-xl md:text-2xl text-red-50">{{ el.title }}</h1>-->
    <!--          <img class="mt-4 w-20 h-20 md:w-24 md:h-24 object-fill object-cover"-->
    <!--               :src="require(`../assets/stickers/${el.sticker}.png`)"-->
    <!--               alt="no img">-->
    <!--        </div>-->

    <!--        <p class="mt-4 text-center text-lg lg:text-xl transition-all ease-in text-red-50">{{ el.description }}</p>-->
    <!--      </div>-->
    <!--    </div>-->

    <!--  БЛОК 6  -->
    <div class="content-6-container">

      <div class="content-6-text-blocks-container">
        <h3 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold">Руководство компании</h3>
        <p class="text-xs sm:text-sm md:text-base lg:text-lg mt-2 font-sans">
          We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best
          results for our clients.
        </p>
      </div>

      <div class="employee-cards-container">
        <div v-for="employee of employees" :key="employee.id" class="employee-card-element">

          <img class="employee-card-img"
               :src="require(`../assets/avatars/${employee.avatarImgName}.png`)" alt="no img"/>

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
import {mainContent} from "@/configs/mainPage"
import evFooter from "@/components/widgets/ev-footer"
import {priceInfoCards} from '@/configs/priceListInfo';
import {ratingCards} from "@/configs/ratingCards";
import {customerCompanyGroup} from "@/configs/experience_2";
import {infoBannerContentCards} from "~/configs/infoBannerCarousel";
import VueCarousel from 'vue-carousel';
import {Carousel, Slide} from "vue-carousel/src";
import {employees} from "@/configs/employees"

Vue.use(VueCarousel);

export default {
  name: 'IndexPage',
  components: {
    evFooter: evFooter,
    Carousel,
    Slide
  },

  methods: {
    customerCompanyGroupSorted() {
      return this.customerCompanyGroup.sort((e1, e2) => e1.services.length > e2.services.length ? 1 : -1)
    }
  },

  data() {
    return {
      employees,
      activeInfoBannerElementId: 1,
      infoBannerContentCards,
      buttonShow: false,
      customerCompanyGroup,
      priceInfoCards,
      ratingCards,
      mainContent: mainContent,
    }
  }
}

</script>


<style scoped>

.main-container {
  @apply bg-gray-100 w-full overflow-y-scroll flex flex-col items-center;
}

.content-container-1 {
  @apply bg-gray-800;
  @apply w-full h-auto lg:min-h-[calc(100vh-60px)];
  @apply flex flex-col justify-evenly;
  @apply pt-20 sm:pt-0 px-4 sm:px-8 lg:px-12;
  @apply border-x-8 border-t-8 border-gray-100;
  /**/
  background-blend-mode: multiply;
  /*background: rgba(180, 44, 56, 0.85) top / cover no-repeat fixed url("@/assets/background/main_page/ev-bg-mauntain.jpg");*/
  background: rgba(180, 44, 56, 0.9) top / cover no-repeat fixed url("@/assets/background/main_page/bg-everest.jpg");
}

.content-2-container {
  @apply w-full h-auto md:min-h-screen;
  @apply flex flex-col items-center lg:flex-row lg:items-start;
  @apply text-gray-800 font-normal;
  @apply bg-gray-50 border-8 border-gray-100;
  /**/
  /*background-blend-mode: multiply;*/
  /*background: rgba(41, 55, 72, 0.5) top / cover no-repeat fixed url("@/assets/background/ev-bg-15.jpg");*/
}

.content-2-text-blocks-container {
  @apply flex flex-col items-center justify-center;
  @apply w-full max-w-[95vw] sm:max-w-[75vw] md:max-w-[70vw] lg:min-w-[450px] lg:max-w-[65vw] xl:max-w-[50vw];
  @apply gap-x-2 lg:gap-x-0 gap-y-3 divide-y divide-gray-800/25 divide-dashed;
  @apply border-r border-dashed border-red-900;
  @apply text-center font-medium text-sm md:text-sm;
}

.content-2-company-logotypes-container {
  @apply hidden pt-4 lg:pt-0 border-t border-t-gray-400 lg:border-t-gray-100 md:flex flex-wrap justify-center gap-4 items-stretch md:gap-2 lg:gap-1 xl:gap-2 bg-gray-100;
}

.company-logotype-block {
  @apply md:w-[27vw] md:max-w-[220px]  md:h-[28vw] md:min-h-[195px];
  @apply lg:w-[17.5vw] lg:max-w-[17.5vw]  lg:h-[19vw] md:max-h-[19vw];
  @apply xl:w-[15.2vw] xl:max-w-[250px]  xl:h-[18vw] xl:max-h-[250px];
  @apply rounded-xl bg-gray-800;
}

.content-6-container {
  @apply w-full;
  @apply flex flex-col;
  @apply mt-4 px-4 sm:px-8 md:px-4 lg:px-4 xl:px-12 pb-3 md:pb-4 lg:pb-6 xl:pb-8;
  @apply bg-gray-200 text-gray-800;
  @apply border-b-8 border-b-red-800;
}

.content-6-text-blocks-container {
  @apply text-center sm:text-left mt-4 sm:mt-6 md:mt-8 lg:mt-10;
}

.employee-cards-container {
  @apply w-full;
  @apply flex flex-wrap justify-center items-stretch md:justify-evenly;
  @apply gap-y-4 sm:gap-x-2 sm:gap-x-4 md:gap-x-6 lg:gap-x-4 xl:gap-x-8;
  @apply mt-4 lg:mt-12 md:mt-8 lg:mt-10;
}

.employee-card-element {
  @apply w-full sm:w-[45%] sm:max-w-[280px] md:w-[30%] md:max-w-[290px] lg:w-[22vw] lg:max-w-[270px];
  @apply flex items-center justify-center flex-wrap;
}

.employee-card-img {
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
