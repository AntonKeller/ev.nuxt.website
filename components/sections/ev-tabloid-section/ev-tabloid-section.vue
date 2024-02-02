<template>
  <div class="tabloid-section-container">
    <evTabloid/>
  </div>
</template>

<script>

import {infoBannerContentCards} from "@/configs/infoBannerCarousel";
import evTabloid from "@/components/ev-tabloid";
import {gsap} from "gsap";
// import {ScrollTrigger} from "gsap/ScrollTrigger";

export default {

  name: "ev-tabloid-section",

  components: {
    evTabloid
  },

  data() {
    return {}
  },

  methods: {}

}
</script>

<style scoped>
.tabloid-section-container {
  @apply bg-gray-900;
  position: relative;
}

.tabloid-section-container::before {
  content: '';
  position: absolute;
  top: -230px;
  left: 0;
  width: 100%;
  height: 220px;
  background: linear-gradient(to top, #ffffff95, transparent);
  z-index: 1;
}

</style>
