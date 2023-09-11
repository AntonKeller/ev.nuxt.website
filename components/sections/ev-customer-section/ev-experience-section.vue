<template>
  <div class="experience-section">

    <div class="title">
      <h2>{{ customerTitle }}</h2>
      <p>{{ customerDescription }}</p>
      <div>
        <evChip text="Международный опыт" />
        <evChip text="Множество крупных проектов" />
        <evChip text="......" />
        <evChip text="......" />
        <evChipDark text="Работа на результат" />
        <evChipDark text="Сотни закрытых проектов" />
        <evChip text="......" />
      </div>
    </div>

    <div class="customer-section--content">
      <div class="info-block-wrapper">
        <p>
          Наши специалисты успешно осуществили и завершили проекты для 45 компаний из рейтинга
          «Крупнейшие компании России» (рейтинг Эксперт-400),
          совокупная выручка которых за 2008 год превысила 9.3 трлн. руб.
        </p>
        <p class="border-4 border-gray-300 bg-gray-50 p-2.5 rounded-lg">
          Основным деловым преимуществом нашей компании является высокий профессионализм сотрудников, а также опыт
          выполнения проектов в сфере оценки и консалтинга с последующим согласованием результатов с крупнейшими
          международными аудиторскими компаниями.
        </p>
        <p>
          Специалисты Компании EverestConsulting являются членами
          таких профессиональных организаций, как Саморегулируемая Межрегиональная Ассоциация Оценщиков
          (СМАО), Восточно-Европейский союз экспертов (OSV), а также
          получили квалификации Американского общества оценщиков(ASA).
        </p>
      </div>

      <div class="experience-box">
        <div v-for="element of experienceGroup" class="experience-element">
          <img class="mx-auto w-full max-w-[14rem]" :src="require(`../../../assets/experience_logotypes/${element.img}.png`)" alt="err">
          <div class="experience-element--services">
              <span v-for="currService of element.services" :key="currService.id" class="service">
                {{ currService.title }}
              </span>
          </div>
        </div>
      </div>
    </div>

    <carousel
      paginationSize=6
      pagination-padding=4
      paginationColor="rgb(243 244 246)"
      paginationActiveColor="rgb(220 38 38)"
      navigation-next-label="o"
      navigation-prev-label="o"
      navigation-click-target-size="6"
      navigation-enabled
      autoplay
      autoplay-timeout=4000
      :per-page="1"
      :mouse-drag="true"
      class="carousel-xs"
    >
      <slide v-for="element of experienceGroup" :key="element.id" class="flex flex-col justify-evenly">
        <img class="mx-auto w-full max-w-[14rem]"
             :src="require(`../../../assets/experience_logotypes/${element.img}.png`)" alt="err">
        <div class="flex flex-wrap justify-center  gap-1  text-xs">
                  <span
                    class="px-2 py-0.5 rounded-xl font-medium border border-gray-700/60 bg-gray-100 backdrop-blur-sm text-gray-800"
                    v-for="currService of element.services"
                    :key="currService.id"
                  >{{ currService.title }}</span>
        </div>
      </slide>
    </carousel>

  </div>
</template>

<script>

import {experienceGroup} from "@/configs/experience";
import evChip from "@/components/ev-chip";
import evChipDark from "@/components/ev-chip-dark";

export default {
  name: "experience-section",
  methods: {},
  data() {
    return {
      evChip,
      evChipDark,
      experienceGroup,
      customerTitle: "Our experience",
      customerDescription: "We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients."
    }
  }
}
</script>

<style lang="scss" scoped>

.experience-section, .title, .customer-section--content, .experience-box {
  @apply w-full;
}

.experience-section {
  @apply w-full relative flex flex-col items-center;
  @apply border-x-8 border-gray-100;
  @apply px-[calc(8vw-6px)] sm:px-[12vw] md:px-[12vw] lg:px-10 xl:px-12;
  @apply py-6 sm:py-8 md:py-10 lg:py-16 xl:py-14 mt-4 sm:mt-6;
  @apply space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-7 xl:space-y-8;
  background: top / cover no-repeat fixed url("@/assets/background/bg-lines-color.png");

  & * {
    @apply text-gray-700;
  }

  & p, h2 {
    @apply text-center md:text-left;
  }

  & h2 {
    @apply text-xl sm:text-2xl md:text-2xl lg:text-4xl font-bold;
  }

  & p {
    @apply text-base lg:text-lg;
  }


  .title {
    @apply border-b border-b-gray-200;
    @apply pb-4 sm:pb-8 md:pb-10 lg:pb-10 xl:pb-12;
    @apply space-y-3 lg:space-y-5;
  }

  .customer-section--content {
    @apply lg:flex lg:items-stretch;
    @apply md:space-y-8 lg:space-y-0 lg:space-x-4;
    @apply lg:h-[70vh];

    .info-block-wrapper {
      @apply overflow-y-scroll;
      @apply space-y-[calc(3vw+8px)] sm:space-y-6 md:space-y-8 lg:space-y-10;
      @apply lg:w-[56vw] xl:w-[48vw] lg:max-w-[700px];
      @apply lg:h-full lg:pr-4;
    }

    .experience-box {
      @apply w-full overflow-y-scroll;
      @apply h-[40vh] lg:h-full;
      @apply hidden md:flex flex-wrap justify-around lg:justify-evenly items-stretch;
      @apply md:gap-3 lg:gap-2;

      .experience-element {
        @apply flex flex-col justify-around border-4 border-gray-300;
        @apply bg-gray-800 rounded-xl;
        @apply min-h-[215px];
        @apply md:w-[34vw] lg:w-[23.5vw] xl:w-[17.5vw] xl:max-w-[280px];

        &:hover{
          @apply bg-gray-800/75;
        }

        .experience-element--services {
          @apply flex flex-wrap justify-center;
          @apply gap-1;

          .service {
            @apply rounded-xl bg-gray-200 border-gray-900/95 border py-0.5 px-1.5;
            @apply text-gray-900 text-xs md:text-sm;
          }
        }
      }
    }
  }

  .carousel-xs {
    @apply md:hidden max-w-full text-center bg-gray-800 rounded-xl mt-6;
    @apply min-h-[170px] sm:min-h-[190px];
  }
}


</style>
