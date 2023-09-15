<template>
  <div class="flex">
    <div class="banner-container">
      <div class="banner--top-content-wrapper">
        <div class="banner--title-wrapper">
          <h1 class="banner--title">{{ title }}</h1>
          <h2 class="banner--subtitle">{{ subTitle }}</h2>
          <div class="banner--button">
            {{ buttonText }}
            <i class="pi pi-arrow-right ml-3 text-gray-400 font-extrabold"></i>
          </div>
        </div>
      </div>

      <!--   LVL S   -->
      <div class="rating-cards">
        <Hooper
          class="rating-card rounded-md rounded-t-xl"
          autoPlay
          playSpeed=5000
          itemsToShow=1
        >
          <Slide
            v-for="elem of tabloids"
            :key="elem.id"
          >
            <div class="rating-card--title">{{ elem.title }}</div>
            <div class="rating-card--subtitle">{{ elem.subtitle }}</div>
            <div class="rating-card--description">{{ elem.text }}</div>
          </Slide>
          <hooper-pagination slot="hooper-addons"></hooper-pagination>
        </Hooper>

        <div class="flex flex-row space-x-2">

          <Hooper
            class="rating-card rounded-md rounded-bl-xl"
            autoPlay
            playSpeed=3000
            itemsToShow=1
            :vertical="true"
          >
            <Slide
              v-for="elem of tabloids"
              :key="elem.id"
            >
              <div class="rating-card--title">{{ elem.title }}</div>
              <div class="rating-card--subtitle">{{ elem.subtitle }}</div>
              <div class="rating-card--description">{{ elem.text }}</div>
            </Slide>
            <hooper-pagination slot="hooper-addons"></hooper-pagination>
          </Hooper>

          <Hooper
            class="rating-card rounded-md rounded-r-xl"
            autoPlay
            playSpeed=7000
            itemsToShow=1
          >
            <Slide
              v-for="elem of tabloids"
              :key="elem.id"
            >
              <div class="rating-card--title">{{ elem.title }}</div>
              <div class="rating-card--subtitle">{{ elem.subtitle }}</div>
              <div class="rating-card--description">{{ elem.text }}</div>
            </Slide>
            <hooper-pagination slot="hooper-addons"></hooper-pagination>
          </Hooper>
        </div>
      </div>
    </div>
    <div class="banner-container-2">
      <h1 class="lg:text-2xl text-gray-300 font-medium">
        Lorem ipsum dolor sit.
      </h1>
      <p class="mt-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid architecto cum cumque deleniti
        dolores ducimus eos id nulla porro, quasi quisquam tempore voluptates. Ab dolor esse perferendis perspiciatis quo
        quod rem sit ullam voluptatum! Consequatur est, laborum nam nihil numquam perspiciatis voluptates voluptatibus
        voluptatum. A ad animi beatae distinctio, dolore, error esse excepturi harum hic inventore iste labore libero
        magni minus molestiae non odit officiis possimus soluta, tenetur. Cumque deleniti dignissimos quasi quia
        reiciendis veritatis! A alias consequuntur culpa cum cumque distinctio doloremque eius esse expedita explicabo hic
      </p>
      <p class="mt-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid architecto cum cumque deleniti
        dolores ducimus eos id nulla porro, quasi quisquam tempore voluptates. Ab dolor esse perferendis perspiciatis quo
        quod rem sit ullam voluptatum! Consequatur est, laborum nam nihil numquam perspiciatis voluptates voluptatibus
        voluptatum. A ad animi beatae distinctio, dolore, error esse excepturi harum hic inventore iste labore libero
        magni minus molestiae non odit officiis possimus soluta, tenetur. Cumque deleniti dignissimos quasi quia
        reiciendis veritatis! A alias consequuntur culpa cum cumque distinctio doloremque eius esse expedita explicabo hic
      </p>
      <p class="mt-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid architecto cum cumque deleniti
        dolores ducimus eos id nulla porro, quasi quisquam tempore voluptates. Ab dolor esse perferendis perspiciatis quo
        quod rem sit ullam voluptatum! Consequatur est, laborum nam nihil numquam perspiciatis voluptates voluptatibus
        voluptatum. A ad animi beatae distinctio, dolore, error esse excepturi harum hic inventore iste labore libero
        magni minus molestiae non odit officiis possimus soluta, tenetur. Cumque deleniti dignissimos quasi quia
        reiciendis veritatis! A alias consequuntur culpa cum cumque distinctio doloremque eius esse expedita explicabo hic
      </p>
      <p class="mt-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid architecto cum cumque deleniti
        dolores ducimus eos id nulla porro, quasi quisquam tempore voluptates. Ab dolor esse perferendis perspiciatis quo
        quod rem sit ullam voluptatum! Consequatur est, laborum nam nihil numquam perspiciatis voluptates voluptatibus
        voluptatum. A ad animi beatae distinctio, dolore, error esse excepturi harum hic inventore iste labore libero
        magni minus molestiae non odit officiis possimus soluta, tenetur. Cumque deleniti dignissimos quasi quia
        reiciendis veritatis! A alias consequuntur culpa cum cumque distinctio doloremque eius esse expedita explicabo hic
      </p>
      <p class="mt-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid architecto cum cumque deleniti
        dolores ducimus eos id nulla porro, quasi quisquam tempore voluptates. Ab dolor esse perferendis perspiciatis quo
        quod rem sit ullam voluptatum! Consequatur est, laborum nam nihil numquam perspiciatis voluptates voluptatibus
        voluptatum. A ad animi beatae distinctio, dolore, error esse excepturi harum hic inventore iste labore libero
        magni minus molestiae non odit officiis possimus soluta, tenetur. Cumque deleniti dignissimos quasi quia
        reiciendis veritatis! A alias consequuntur culpa cum cumque distinctio doloremque eius esse expedita explicabo hic
      </p>
      <p class="mt-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid architecto cum cumque deleniti
        dolores ducimus eos id nulla porro, quasi quisquam tempore voluptates. Ab dolor esse perferendis perspiciatis quo
        quod rem sit ullam voluptatum! Consequatur est, laborum nam nihil numquam perspiciatis voluptates voluptatibus
        voluptatum. A ad animi beatae distinctio, dolore, error esse excepturi harum hic inventore iste labore libero
        magni minus molestiae non odit officiis possimus soluta, tenetur. Cumque deleniti dignissimos quasi quia
        reiciendis veritatis! A alias consequuntur culpa cum cumque distinctio doloremque eius esse expedita explicabo hic
      </p>
      <p class="mt-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid architecto cum cumque deleniti
        dolores ducimus eos id nulla porro, quasi quisquam tempore voluptates. Ab dolor esse perferendis perspiciatis quo
        quod rem sit ullam voluptatum! Consequatur est, laborum nam nihil numquam perspiciatis voluptates voluptatibus
        voluptatum. A ad animi beatae distinctio, dolore, error esse excepturi harum hic inventore iste labore libero
        magni minus molestiae non odit officiis possimus soluta, tenetur. Cumque deleniti dignissimos quasi quia
        reiciendis veritatis! A alias consequuntur culpa cum cumque distinctio doloremque eius esse expedita explicabo hic
      </p>
      <p class="mt-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid architecto cum cumque deleniti
        dolores ducimus eos id nulla porro, quasi quisquam tempore voluptates. Ab dolor esse perferendis perspiciatis quo
        quod rem sit ullam voluptatum! Consequatur est, laborum nam nihil numquam perspiciatis voluptates voluptatibus
        voluptatum. A ad animi beatae distinctio, dolore, error esse excepturi harum hic inventore iste labore libero
        magni minus molestiae non odit officiis possimus soluta, tenetur. Cumque deleniti dignissimos quasi quia
        reiciendis veritatis! A alias consequuntur culpa cum cumque distinctio doloremque eius esse expedita explicabo hic
      </p>
      <p class="mt-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid architecto cum cumque deleniti
        dolores ducimus eos id nulla porro, quasi quisquam tempore voluptates. Ab dolor esse perferendis perspiciatis quo
        quod rem sit ullam voluptatum! Consequatur est, laborum nam nihil numquam perspiciatis voluptates voluptatibus
        voluptatum. A ad animi beatae distinctio, dolore, error esse excepturi harum hic inventore iste labore libero
        magni minus molestiae non odit officiis possimus soluta, tenetur. Cumque deleniti dignissimos quasi quia
        reiciendis veritatis! A alias consequuntur culpa cum cumque distinctio doloremque eius esse expedita explicabo hic
      </p>
      <p class="mt-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid architecto cum cumque deleniti
        dolores ducimus eos id nulla porro, quasi quisquam tempore voluptates. Ab dolor esse perferendis perspiciatis quo
        quod rem sit ullam voluptatum! Consequatur est, laborum nam nihil numquam perspiciatis voluptates voluptatibus
        voluptatum. A ad animi beatae distinctio, dolore, error esse excepturi harum hic inventore iste labore libero
        magni minus molestiae non odit officiis possimus soluta, tenetur. Cumque deleniti dignissimos quasi quia
        reiciendis veritatis! A alias consequuntur culpa cum cumque distinctio doloremque eius esse expedita explicabo hic
      </p>
      <p class="mt-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid architecto cum cumque deleniti
        dolores ducimus eos id nulla porro, quasi quisquam tempore voluptates. Ab dolor esse perferendis perspiciatis quo
        quod rem sit ullam voluptatum! Consequatur est, laborum nam nihil numquam perspiciatis voluptates voluptatibus
        voluptatum. A ad animi beatae distinctio, dolore, error esse excepturi harum hic inventore iste labore libero
        magni minus molestiae non odit officiis possimus soluta, tenetur. Cumque deleniti dignissimos quasi quia
        reiciendis veritatis! A alias consequuntur culpa cum cumque distinctio doloremque eius esse expedita explicabo hic
      </p>
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
  @apply w-fit flex flex-col justify-evenly h-auto lg:min-h-[calc(100vh-65px)];
  @apply pt-20 sm:py-6 px-4 sm:px-8 md:px-4 lg:py-20 lg:px-32;
  @apply bg-blend-multiply;
  background: rgba(103, 99, 99, 0.7) top / cover no-repeat fixed url("@/assets/background/main_page/bg-everest.jpg");
}

.banner-container-2 {
  @apply border-l-4 border-r-8 border-gray-50 text-gray-300 h-screen w-full p-14 overflow-y-scroll;
  @apply bg-red-800;
  /*background-color: #6b0101;*/
}

.banner--top-content-wrapper {
  @apply w-full flex flex-col items-center lg:flex-row lg:items-start lg:justify-between;
}

.banner--title-wrapper {
  @apply w-full;
  @apply flex flex-col items-start;
}

.banner--title, .banner--subtitle {
  @apply font-extrabold text-gray-300;
}

.banner--title {
  @apply text-gray-300 text-2xl sm:text-2xl md:text-3xl lg:text-4xl;
}

.banner--subtitle {
  @apply mt-2.5;
  @apply text-base md:text-lg lg:text-xl;
}

.banner--button {
  @apply flex items-center;
  vertical-align: middle;
  @apply text-base;
  @apply pl-6 pr-4 py-1.5;
  @apply mt-2.5;
  @apply bg-gray-200 border-2 border-gray-800 rounded-lg;
  @apply transition-colors duration-150;
  @apply active:scale-[98%] hover:bg-gray-700 hover:text-gray-200 hover:border-gray-800;
}

.banner-slider {

}

.banner-slide {
  @apply text-center lg:text-left;
}

.banner-slide--title {

}

.banner-slide--info {

}


.rating-cards {
  @apply mt-6 ;
  /*@apply space-y-3 md:space-y-0 md:space-x-0 mt-6;*/
  /*@apply flex flex-wrap flex-col items-center md:flex-row md:justify-start md:items-start;*/
  @apply flex flex-col space-y-2;
  /*@apply flex flex-col gap-3 md:gap-6 lg:gap-8 xl:gap-12 items-center sm:flex-row sm:justify-between md:justify-evenly mt-5 pb-4 md:pb-6;*/
}

.rating-card {
  @apply border-4 border-transparent lg:border-gray-800;
  @apply w-[400px] h-[250px];
  @apply bg-gray-200;
  @apply p-2 md:p-2 lg:pt-6 lg:pl-8 lg:pr-6;
  @apply text-left;
}

.rating-card--title {
  @apply font-extrabold text-gray-800 text-3xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl;
}

.rating-card--subtitle {
  @apply mt-2;
  /*@apply inline pb-1.5 mt-2 border-b border-b-gray-400;*/
  @apply font-extrabold text-red-800/90 text-lg md:text-lg lg:text-lg xl:text-lg;
}

.rating-card--description {
  @apply mt-1;
  @apply font-light text-gray-600 text-base;
}

</style>
