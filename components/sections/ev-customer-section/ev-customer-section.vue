<template>
  <div class="customer-section">

    <div class="customer-section-title">
      <h2>{{customerTitle}}</h2>
      <p>{{customerDescription}}</p>
    </div>

    <div class="customer-section--content">

      <div class="info-block-wrapper">
        <p>
          Наши специалисты успешно осуществили и завершили проекты для 45 компаний из рейтинга
          «Крупнейшие компании России» (рейтинг <span class="span-selected-red">Эксперт-400</span>),
          совокупная выручка которых за 2008 год превысила 9.3 трлн. руб.
        </p>
        <p class="p-2 sm:p-4 md:p-6 lg:p-6 bg-gray-200/60 rounded-md">
          Основным деловым преимуществом нашей компании является высокий профессионализм сотрудников, а также опыт
          выполнения проектов в сфере оценки и консалтинга с последующим согласованием результатов с крупнейшими
          международными аудиторскими компаниями.
        </p>
        <p>
          Специалисты Компании <span class="span-selected-red">Everest</span>Consulting являются членами
          таких профессиональных организаций, как Саморегулируемая Межрегиональная Ассоциация Оценщиков
          <span class="span-selected-red">(СМАО)</span>, Восточно-Европейский союз экспертов (OSV), а также
          получили квалификации Американского общества оценщиков<span class="span-selected-red">(ASA)</span>.
        </p>
      </div>

      <div class="experience-box">
        <div v-for="element of experienceGroup" class="experience-element">
          <img class="mx-auto w-full max-w-[14rem]"
               :src="require(`../../../assets/experience_logotypes/${element.img}.png`)" alt="err">

          <div class="flex flex-wrap justify-center p-2 gap-1 text-sm sm:text-xs lg:sm">
              <span v-for="currService of element.services" :key="currService.id" class="underline underline-offset-4 font-sans text-gray-200">
                {{ currService.title }}
              </span>
          </div>

        </div>
      </div>
    </div>

    <div class="carousel-xs">
      <carousel
        paginationSize=6
        pagination-padding=4
        paginationColor="rgb(243 244 246)"
        paginationActiveColor="rgb(220 38 38)"
        autoplay
        autoplay-timeout=4000
        :per-page="1"
        :mouse-drag="false"
      >
        <slide v-for="element of experienceGroup" :key="element.id" class="flex flex-col justify-evenly">
          <img class="mx-auto" :src="require(`../../../assets/experience_logotypes/${element.img}.png`)" alt="err">
          <div class="flex flex-wrap justify-center pb-2 gap-1 mt-2 text-xs">
              <span
                class="px-2 py-0.5 rounded-xl font-medium border border-gray-700/60 bg-gray-100 backdrop-blur-sm text-gray-800 font-sans"
                v-for="currService of element.services"
                :key="currService.id"
              >
                {{ currService.title }}
              </span>
          </div>

        </slide>
      </carousel>
    </div>

  </div>
</template>

<script>

import {experienceGroup} from "@/configs/experience_2";

export default {
  name: "customer-section",
  data() {
    return {
      experienceGroup,
      customerTitle: "Наши клиенты",
      customerDescription: "We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients."
    }
  }
}
</script>

<style lang="scss" scoped>

// common styles

* {
  @apply font-sans;
}

h2 {
  @apply text-gray-800 text-xl sm:text-2xl md:text-2xl lg:text-4xl font-extrabold;
}

p {
  @apply text-gray-800 text-sm md:text-base;
}

// ......................................

.span-selected-red {
  //@apply bg-red-900 text-gray-200 mx-0.5 px-1 py-0.5 rounded-md;
}

.customer-section {

  @apply w-full h-auto;
  @apply flex flex-col items-center;
  @apply bg-gray-50 border-8 border-gray-100;
  @apply px-4 sm:px-6 md:px-8 lg:px-14 xl:px-16;
  @apply py-6 sm:py-8 md:py-10 lg:py-16 xl:py-16;

  @apply mt-6 sm:mt-8 md:mt-10 lg:mt-16 xl:mt-16;

  @apply space-y-4 sm:space-y-4 md:space-y-4 lg:space-y-4 xl:space-y-4;
  //@apply space-x-4 sm:space-x-8;

  .customer-section-title {
    @apply w-full border-b border-b-gray-200;
    @apply space-y-3 text-center md:text-left;
    @apply duration-300;
  }

  .customer-section--content {

    //@apply w-full sm:max-h-[1000px] md:max-h-[700px];
    @apply w-full;
    //@apply px-4 sm:px-6 md:px-8 lg:px-14 xl:px-16;
    //@apply py-6 sm:py-8 md:py-10 lg:py-16 xl:py-16;
    @apply flex flex-col items-center lg:flex-row lg:items-stretch;

    .info-block-wrapper {
      @apply text-center lg:text-left space-y-4 sm:space-y-8;
      @apply w-full sm:w-[75vw] lg:w-[80vw] lg:max-w-[650px];
    }

    .experience-box {
      @apply w-full overflow-y-scroll;
      @apply hidden md:flex flex-wrap justify-center items-stretch;
      @apply pt-4 lg:pt-0 bg-gray-800;
      @apply gap-4 md:gap-2 lg:gap-5 xl:gap-6;
      @apply border-t border-t-gray-400 lg:border-t-gray-100 rounded-md;

      .experience-element {
        @apply md:w-[30vw] md:max-w-[250px];
        @apply lg:w-[22vw] lg:max-w-[280px];
        @apply xl:w-[15vw] xl:max-w-[300px];
        @apply text-center;
      }

      & * {
        @apply text-gray-200 text-xs md:text-sm;
      }

      &::-webkit-scrollbar {
        @apply w-2.5 h-4;
      }

      &::-webkit-scrollbar-track {
        @apply bg-red-900;
      }

      &::-webkit-scrollbar-thumb {
        @apply bg-gray-600 rounded-md;
      }
    }
  }

  .carousel-xs {
    @apply md:hidden max-w-full text-center bg-gray-800 rounded-md;
  }
}



</style>
