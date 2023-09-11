<template>
  <div class="main-container">
    <!--   MAIN BANNER SECTION   -->
    <bannerSection/>
    <!--   CUSTOMERS SECTION   -->
    <experienceSection/>
    <!--   MANAGERS SECTION   -->
    <managersSection />
    <!--   FOOTER   -->
    <evFooter/>
  </div>
</template>

<script>

import Vue from 'vue';
import {mainContent} from "@/configs/mainPage";
import bannerSection from "@/components/sections/ev-banner-section/ev-banner"
import experienceSection from "@/components/sections/ev-customer-section/ev-experience-section";
import managersSection from "@/components/sections/ev-manager-section/ev-managers";
import evFooter from "@/components/widgets/ev-footer";
import {priceInfoCards} from '@/configs/priceListInfo';
import VueCarousel from 'vue-carousel';
import {Carousel, Slide} from "vue-carousel/src";


Vue.use(VueCarousel);

export default {
  name: 'IndexPage',
  components: {
    bannerSection,
    experienceSection,
    managersSection,
    evFooter,
    Carousel,
    Slide
  },

  data() {
    return {
      activeInfoBannerElementId: 1,
      buttonShow: false,
      priceInfoCards,
      mainContent,
    }
  }
}

</script>


<style scoped>

.span-selected-red {
  @apply bg-red-900 text-gray-200 mx-0.5 px-1 py-0.5 rounded-md;
}

.main-container {
  @apply w-full bg-gray-100;
}

.main-container::-webkit-scrollbar {
  width: 0;
}

</style>
