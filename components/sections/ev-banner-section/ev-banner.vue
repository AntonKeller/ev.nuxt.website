<template>
  <div class="banner-container">

    <h1 class="banner--title">{{ title }}</h1>
    <h2 class="banner--subtitle">{{ subTitle }}</h2>
    <div class="banner--button">
      {{ buttonText }}
      <i class="pi pi-arrow-right ml-3 text-gray-300 font-extrabold"></i>
    </div>

    <div class="card-wrapper">
      <Hooper
        class="rating-card"
        autoPlay
        playSpeed=8000
        itemsToShow=1
        :vertical="true"
      >
        <Slide
          class="card-slide"
          v-for="elem of tabloids"
          :key="elem.id"
        >
          <div class="rating-card--title">{{ elem.title }}</div>
          <div class="rating-card--subtitle">{{ elem.subtitle }}</div>
          <div class="rating-card--description">{{ elem.text }}</div>
        </Slide>
        <hooper-pagination slot="hooper-addons"></hooper-pagination>
      </Hooper>
      <div class="btn-wrapper">
        <div class="pug-btn-1"> ></div>
        <div class="pug-btn-2"> <</div>
      </div>
    </div>
  </div>
</template>

<script>
import {Hooper, Slide, Pagination as HooperPagination} from "hooper";
import 'hooper/dist/hooper.css';
import 'primeicons/primeicons.css';
import {infoBannerContentCards} from "@/configs/infoBannerCarousel";

export default {
  name: "ev-banner",
  components: {
    Hooper,
    Slide,
    HooperPagination
  },
  data() {
    return {
      infoBannerContentCards,
      title: "Эверест Консалтинг",
      subTitle: "Работаем с 2010 года",
      buttonText: "Подробнее о нас",
      tabloids: [
        {
          id: 1,
          title: "80+",
          subtitle: "Lorem ipsum dolor",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dignissimos, dolor, doloremque eum explicabo ipsum iusto libero molestiae, nam nostrum officiis quas rem suscipit totam velit! Architecto nihil similique ut!"
        },
        {
          id: 2,
          title: "5",
          subtitle: "Lorem ipsum dolor",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dignissimos, dolor, doloremque eum explicabo ipsum iusto libero molestiae, nam nostrum officiis quas rem suscipit totam velit! Architecto nihil similique ut!"
        },
        {
          id: 3,
          title: "15",
          subtitle: "Lorem ipsum dolor",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dignissimos, dolor, doloremque eum explicabo ipsum iusto libero molestiae, nam nostrum officiis quas rem suscipit totam velit! Architecto nihil similique ut!"
        },
      ]
    }
  }
}
</script>

<style scoped>

.banner-container {
  @apply w-full flex flex-col justify-start items-start h-auto lg:min-h-[calc(100vh-65px)];
  @apply pt-20 sm:py-6 px-4 sm:px-8 md:px-4 lg:py-20 lg:px-80;
  @apply bg-blend-multiply;
  background: rgba(103, 99, 99, 0.7) top / cover no-repeat fixed url("@/assets/background/main_page/bg-everest.jpg");
}

.banner--top-content-wrapper {
  @apply w-full flex flex-col items-start;
}

.banner--title {
  @apply font-extrabold text-gray-300 text-2xl sm:text-4xl md:text-5xl lg:text-5xl;
}

.banner--subtitle {
  @apply mt-4;
  @apply font-extrabold text-gray-400 text-base md:text-lg lg:text-xl xl:text-3xl;
}

.banner--button {
  @apply mt-6;
  @apply flex items-center;
  vertical-align: middle;
  @apply text-base md:text-lg;
  @apply pl-6 pr-5 py-2.5;
  @apply border-4 border-gray-900/90 rounded-lg;
  @apply bg-red-500/70 hover:bg-red-500/60;
  @apply transition-colors duration-150;
  @apply active:scale-[98%] text-gray-300;
}

.card-wrapper {
  @apply flex items-stretch mt-12;
}

.rating-card {
  @apply w-[800px] min-h-[230px];
  @apply bg-gray-900/70 border-2 border-gray-900/20 backdrop-blur-lg;
  @apply text-left;
}

.card-slide {
  @apply lg:px-14 lg:py-8;
}

.btn-wrapper {

}

.pug-btn-1 {
  @apply p-4 font-extralight border-2 border-gray-900/20 hover:bg-gray-500/40 select-none text-xl text-gray-300 bg-gray-900/70 backdrop-blur-md;
}

.pug-btn-2 {
  @apply p-4 font-extralight border-2 border-gray-900/20 hover:bg-gray-500/40 select-none text-xl text-gray-300 bg-gray-900/70 backdrop-blur-md;
}

.rating-card--title {
  @apply font-extrabold text-gray-300 text-3xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl;
}

.rating-card--subtitle {
  @apply mt-2 font-extrabold text-red-500/70 text-lg md:text-lg lg:text-lg xl:text-xl;
}

.rating-card--description {
  @apply mt-1.5;
  @apply font-light text-gray-400 text-base;
}

</style>
