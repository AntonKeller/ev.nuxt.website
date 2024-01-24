<template>
  <div class="banner-container">

    <div class="flex flex-col w-full pr-6">
      <h1 class="banner--title">{{ title }}</h1>
      <h2 class="banner--subtitle">{{ subTitle }}</h2>
      <h2 class="banner--subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Amet autem itaque omnis pariatur perspiciatis quas tenetur veniam. Architecto aspernatur debitis eius exercitationem inventore labore nam nobis suscipit.
        Adipisci aliquid animi asperiores delectus eius, error id itaque iure minus qui quidem quod vitae?
         Beatae, corporis dolorem doloremque doloribus explicabo ipsam iste, labore laudantium nulla quas quibusdam!</h2>

      <div class="flex justify-start mt-4 gap-2 flex-wrap max-w-md">

        <div class="b--btn bg-cyan-500/20 hover:bg-cyan-500/60">
          Оценка
          <i class="pi pi-arrow-right ml-3 text-gray-400 font-extrabold"></i>
        </div>

        <div class="b--btn bg-emerald-500/20 hover:bg-emerald-500/60">
          Финансовый консалтинг
          <i class="pi pi-arrow-right ml-3 text-gray-400 font-extrabold"></i>
        </div>

        <div class="b--btn bg-fuchsia-500/20 hover:bg-fuchsia-500/60">
          Строительный консалтинг
          <i class="pi pi-arrow-right ml-3 text-gray-400 font-extrabold"></i>
        </div>


        <div class="b--btn bg-amber-500/20 hover:bg-amber-500/60">
          Достижения
          <i class="pi pi-arrow-right ml-3 text-gray-400 font-extrabold"></i>
        </div>

      </div>
    </div>

    <evTabloid />

  </div>
</template>

<script>
import {infoBannerContentCards} from "@/configs/infoBannerCarousel";
import evTabloid from "@/components/ev-tabloid";

export default {
  name: "ev-banner",
  components: {
    evTabloid
  },
  data() {
    return {
      infoBannerContentCards,
      title: "Эверест Консалтинг",
      subTitle: "Работаем с 2010 года",
    }
  }
}
</script>

<style scoped>

.banner-container {
  @apply w-full flex flex-row justify-start items-start h-auto lg:min-h-[calc(100vh-65px)];
  @apply px-[1px] py-[1vw] sm:p-[7vw] md:p-[4vw] lg:px-[6vw] xl:px-[6w] xl:pt-32;
  @apply bg-blend-multiply;
  background: rgba(103, 99, 99, 0.7) top / cover no-repeat fixed url("@/assets/background/main_page/bg-everest.jpg");
}

.banner--title {
  @apply font-extrabold text-gray-300 text-2xl sm:text-4xl md:text-5xl lg:text-5xl;
}

.banner--subtitle {
  @apply mt-4 uppercase;
  @apply font-extrabold mt-4 text-gray-300 text-base md:text-lg lg:text-xl xl:text-3xl;
}

.b--btn {
  @apply select-none cursor-pointer;
  @apply px-4 py-1.5;
  @apply flex items-center;
  @apply text-base md:text-base;
  @apply transition-colors duration-150;
  @apply active:scale-[99%];
  @apply text-gray-300 border-2 border-gray-200/20 rounded-2xl backdrop-blur-sm;
  @apply hover:border-gray-900/70;
}

</style>
