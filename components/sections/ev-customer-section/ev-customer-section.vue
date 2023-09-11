<template>
  <div class="customer-section">

    <div class="customer-section-title">
      <h2>{{ customerTitle }}</h2>
      <p>{{ customerDescription }}</p>
    </div>

    <div class="customer-section--content">

      <div class="info-block-wrapper">
        <p>
          Наши специалисты успешно осуществили и завершили проекты для 45 компаний из рейтинга
          «Крупнейшие компании России» (рейтинг Эксперт-400),
          совокупная выручка которых за 2008 год превысила 9.3 трлн. руб.
        </p>
        <p class="border-l-4 border-l-gray-600 bg-red-100 p-2.5 rounded-lg">
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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae eligendi expedita impedit ipsa
          molestias qui quia quisquam repellendus voluptatibus. Ad deserunt dolorem earum eos esse eveniet incidunt iste
          laudantium libero magni maxime, minima, neque nesciunt nulla placeat porro, quae qui quia quos repellat soluta
          temporibus tenetur velit vero voluptate? Aliquid aut deserunt dolor dolore eaque esse, est facere illo impedit
          inventore ipsa iusto laudantium magnam magni mollitia natus nemo nisi nostrum obcaecati odio officiis possimus
          provident quaerat quasi qui quisquam quod quos reiciendis sint suscipit tempora temporibus ullam unde
          veritatis voluptatem, voluptatibus voluptatum. Blanditiis eos, esse exercitationem iure neque obcaecati ullam!
          Ab accusamus architecto, aut commodi corporis delectus, dolorem enim eos esse et eum expedita fugiat in ipsum
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae eligendi expedita impedit ipsa
          molestias qui quia quisquam repellendus voluptatibus. Ad deserunt dolorem earum eos esse eveniet incidunt iste
          laudantium libero magni maxime, minima, neque nesciunt nulla placeat porro, quae qui quia quos repellat soluta
          temporibus tenetur velit vero voluptate? Aliquid aut deserunt dolor dolore eaque esse, est facere illo impedit
        </p>
      </div>

      <div class="experience-box">
        <div v-for="element of experienceGroup" class="experience-element">
          <img class="mx-auto w-full max-w-[14rem]"
               :src="require(`../../../assets/experience_logotypes/${element.img}.png`)" alt="err">

          <div class="experience-element--services">
              <span v-for="currService of element.services" :key="currService.id"
                    class="service">
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
          <img class="mx-auto w-full max-w-[14rem]"
               :src="require(`../../../assets/experience_logotypes/${element.img}.png`)" alt="err">
          <div class="flex flex-wrap justify-center  gap-1  text-xs">
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
  methods: {},
  mounted() {

  },
  data() {
    return {
      experienceGroup,
      customerTitle: "Our experience",
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

*::-webkit-scrollbar {
  @apply w-1 h-3;
}

*::-webkit-scrollbar-track {
  @apply bg-transparent;
}

*::-webkit-scrollbar-thumb {
  @apply bg-gray-600 rounded-xl;
}

p {
  @apply text-gray-800 text-sm md:text-base font-sans;
}

.customer-section {

  @apply w-full flex flex-col items-center;
  @apply bg-gray-50 border-x-8 border-b-8 border-gray-100;
  @apply px-[calc(8vw-6px)] sm:px-[12vw] md:px-[12vw] lg:px-10 xl:px-12;
  @apply py-6 sm:py-8 md:py-10 lg:py-16 xl:py-14;
  @apply mt-6 sm:mt-8 md:mt-10 lg:mt-16 xl:mt-14;
  @apply space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-7 xl:space-y-8;
  @apply duration-150;

  .customer-section-title {
    @apply w-full border-b border-b-gray-200;
    @apply pb-4 sm:pb-8 md:pb-10 lg:pb-10 xl:pb-12;
    @apply text-center md:text-left;
    @apply space-y-3 lg:space-y-5;

    h2 {
      @apply text-gray-800 text-xl sm:text-2xl md:text-2xl lg:text-4xl font-bold;
    }

    p {
      @apply text-base lg:text-lg;
    }
  }

  .customer-section--content {

    @apply w-full lg:flex lg:items-stretch;
    @apply md:space-y-8 lg:space-y-0 lg:space-x-4;
    @apply lg:h-[70vh] lg:h-[70vh];

    .info-block-wrapper {
      @apply lg:overflow-y-scroll;
      @apply text-center md:text-left align-top;
      @apply space-y-[calc(3vw+8px)] sm:space-y-6 md:space-y-8 lg:space-y-10;
      @apply lg:w-[56vw] xl:w-[50vw] lg:max-w-[750px];
      @apply lg:h-full  lg:pr-2;
    }

    .experience-box {
      @apply w-full overflow-y-scroll;
      @apply h-[40vh] lg:h-full;
      @apply hidden md:flex flex-wrap justify-evenly items-stretch;
      @apply bg-gray-50 text-center;
      @apply md:gap-3 lg:gap-2;
      @apply border-t border-t-gray-100 lg:border-t-gray-50 rounded-md;
      @apply duration-300;

      & * {
        @apply text-gray-200 text-xs md:text-sm;
      }

      .experience-element {
        @apply flex flex-col justify-around;
        @apply bg-gray-800/95 rounded-xl;
        @apply min-h-[215px];
        @apply md:w-[34vw] lg:w-[23.5vw] xl:w-[17.5vw] xl:max-w-[280px] py-4;

        &:hover {
          background: #ad0202;
        }

        &:hover .experience-element--services .service {
          @apply bg-gray-100 text-gray-900;
        }

        .experience-element--services {
          @apply flex flex-wrap justify-center;
          @apply gap-1 text-xs sm:text-xs;

          .service {
            @apply rounded-xl bg-gray-800/80 border-gray-900/95 border py-0.5 px-1.5;
            @apply text-gray-200;
          }
        }
      }
    }
  }

  .carousel-xs {
    @apply md:hidden max-w-full text-center bg-gray-800/95 rounded-xl mt-6;
    @apply min-h-[170px] sm:min-h-[190px];
    //background: #ad0202;
    //@apply bg-red-800/90;
  }
}


</style>
