<template>
  <div class="main-container">

    <div class="preview-container">
      <h1 class="rating-preview--title">Рейтинг компании</h1>
      <p
        class="rating-preview--description"
        v-for="element of title.descriptions"
        :key="element.id"
      >
        {{element.value}}
      </p>
    </div>

    <Hooper
      group="group1"
      class="rating-button-slider"
      autoPlay
      playSpeed=6000
      itemsToShow=1
    >
      <Slide
        class="rating-button-slide"
        v-for="element of getRatingYears()"
        @click="setActiveYear(element.year)"
      >
        <span class="block ml-2 text-gray-100/20" > < </span>
        <h3 class="block">{{ element.year }}</h3>
        <span class="block mr-2 text-gray-100/20" > > </span>
      </Slide>
    </Hooper>

    <Hooper group="group1" class="rating-info-slider">
      <Slide class="rating-button-slide" v-for="element of getRatingYears()" @click="setActiveYear(element.year)">
        <section class="ratingContainer">
          <div class="ratingElement animate-show-2" v-for="description of getInfoByYear(element.year)">
            <div class="flex justify-center bg-gray-200 text-red-800 items-center text-center w-16 h-16 font-extrabold text-lg md:text-xl lg:text-2xl rounded-t-sm rounded-b-3xl border-4 border-gray-600">
              <p>{{ description.value }}</p>
            </div>
            <p>{{ description.title }}</p>
          </div>
        </section>
      </Slide>
    </Hooper>

  </div>
</template>

<script>
import {rating} from "@/configs/ratingConfig.ts"
import {Hooper, Slide} from "hooper";

export default {

  name: "rating",

  head() {
    return {
      title: "Достижения / Рейтинг - компании",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "..........",
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: "https://antonkeller.github.io/ev_nuxtjs_website_page-1/rating",
        },
      ],
    }
  },

  components: {
    Hooper,
    Slide,
    vSlide
  },

  data() {
    return {
      menu: [
        {
          // display menu item (can be overridden with title slot)
          title: 'News',
          // this element now has dropdown content
          dropdown: 'news',
          // don't want a button element? Pass HTMLElement or global component
          // (pass only as a string, component must be globally accessible)
          element: 'span', // div, router-link, nuxt-link, custom-component
          // offset the position of the dropdown menu
          align: 'center',
          // menu item can accept all attributes
          attributes: {
            // I want more classes! No problem
            // string, array, object, not matter
            class: ['my-class1', { 'my-class2': true }],
            // Custom attributes
            'data-big': 'yes'
          },
          // add some events?
          listeners: {
            // all possible native events
            mouseover: (evt) => {
              console.log('news hover', evt)
            }
          },
          // just extra properties in the object
          customAttribute: true,
        },
        {
          title: 'External Link',
          attributes: {
            href: 'https://github.com/oleksiikhr/vue-stripe-menu',
            target: '_blank'
          }
        }
        // ...
      ],
      rating,
      activeYear: 2021,
      title: {
        descriptions: [
          {id: 1, value: "Наши специалисты успешно осуществили и завершили проекты для 45 компаний из рейтинга «Крупнейшие компании России» (рейтинг Эксперт-400), совокупная выручка которых за 2008 год превысила 9.3 трлн. руб."},
          {id: 2, value: "Основным деловым преимуществом нашей компании является высокий профессионализм сотрудников, а также опыт выполнения проектов в сфере оценки и консалтинга с последующим согласованием результатов с крупнейшими международными аудиторскими компаниями."},
          {id: 3, value: "Специалисты Компании Everest Consulting являются членами таких профессиональных организаций, как Саморегулируемая Межрегиональная Ассоциация Оценщиков (СМАО), Восточно-Европейский союз экспертов (OSV), а также получили квалификации Американского общества оценщиков (ASA)."},
        ]
      }
    }
  },

  mounted() {},

  methods: {

    onOpenDropdown() {
      console.log('onOpenDropdown')
    },
    onCloseDropdown() {
      console.log('onCloseDropdown')
    },

    getRatingYears() {
      return this.rating.map(el => {
        return {
          id: el.id,
          year: el.year,
        }
      })
    },

    getInfoByYear(year) {
      return this.rating.find(e => e.year === year)?.infoByYear || null;
    },

    getRatingElements() {
      return this.rating.find(e => e.year === this.activeYear)?.infoByYear || null;
    },

    setActiveYear(id) {
      this.activeYear = id;
    }
  },
}
</script>

<style lang="scss" scoped>

// >>> CSS style <<<
// @import 'vue-stripe-menu/css';

.vsm-menu {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}

.vsm-nav {
  margin: 0 10px;
}

.vsm-link-container {
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
}

@media screen and (max-width: 768px) {
  .vsm-mob-show {
    display: block;
  }
  .vsm-mob-hide {
    display: none;
  }
  .vsm-mob-full {
    flex-grow: 1;
  }
}

.main-container {
  @apply w-full h-fit overflow-y-scroll;
  @apply pt-24 pb-12 sm:pt-8 md:pt-14 lg:pt-16 xl:pt-20;
  @apply px-4 sm:pl-[5vw] sm:pr-[10vw] md:pr-[10vw] lg:pr-[15vw] xl:pr-[30vw];
  @apply bg-gray-900 bg-blend-multiply;
  background: top / cover no-repeat fixed url("@/assets/background/bg-rgb-three-lines-2.png");

  &::-webkit-scrollbar {
    width: 0;
    visibility: hidden;
  }
}

// Контейнер Preview контента
.preview-container {

  // Общее для Preview заголовка и описания
  .rating-preview--title, .rating-preview--description {

  }

  // Preview Заголовок
  .rating-preview--title {
    @apply bg-red-900 sm:bg-transparent py-1 sm:py-0 rounded-sm;
    @apply text-gray-200 sm:text-gray-300 font-extrabold text-center sm:text-left;
    @apply text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl;
  }

  // Preview Описание к заголовку
  .rating-preview--description {
    @apply mt-2 sm:mt-4 p-[8vw] sm:p-0;
    @apply bg-gray-100 sm:bg-transparent rounded-sm;
    @apply text-gray-700 sm:text-gray-200;
    @apply text-center sm:text-left;
    @apply text-base md:text-lg;
  }
}

// Слайдер с кнопками (года)
.rating-button-slider {
  @apply w-full sm:max-w-[280px] h-fit mt-2 sm:mt-6;

  .rating-button-slide {
    @apply flex justify-between;
    @apply font-extrabold text-center text-gray-100 py-2 rounded-sm sm:rounded-md;
    @apply bg-gradient-to-r from-indigo-800/50 to-red-800/80;
  }
}

.rating-info-slider {
  @apply h-fit border-t border-dashed border-gray-300/40 mt-6;
}

.ratingContainer {
  @apply w-full mt-6;
  @apply flex flex-wrap items-stretch justify-between;
  @apply gap-6 sm:gap-y-10 sm:gap-x-6;
}

.ratingElement {
  @apply w-full sm:w-[45%] md:w-[30%];
  @apply flex flex-col justify-start items-center gap-y-3;
  @apply text-center text-base text-gray-200;
}

.gradient-1 {
  @apply bg-gradient-to-r from-indigo-800/50 to-red-800/80;
}

.gradient-2 {
  @apply bg-gradient-to-r from-gray-100/50 to-red-800/80;
}

.animate-show-1 {
  animation: ani-show-from-right ease 0.65s;
}

.animate-show-2 {
  animation: ani-show ease-in-out 0.65s;
}

@keyframes ani-show-from-right {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
}

@keyframes ani-show {
  from {
    opacity: 0;
  }
}

</style>
