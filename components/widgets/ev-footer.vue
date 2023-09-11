<template>
  <footer class="footer-container">
    <div class="elements">
      <div class="element" v-for="el of companyInfo.elements">
        <img class="e-icon" :src="require(`../../assets/icons/${el.img}`)" alt="no img">
        <div class="e-text">{{ el.text }}</div>
      </div>
    </div>
    <div class="copyright">
      Copyright © 2023, ООО Эверест Консалтиг, все права защищены
    </div>
  </footer>
</template>

<script>
export default {
  name: "ev-footer",
  data() {
    return {
      companyInfo: {
        elements: [
          {img: "phone-icon.png", text: "+7 495 717-01-01 +7 499 557-07-97"},
          {img: "email-icon.png", text: "info@evcons.ru"},
          {img: "address-icon.png", text: "125040, Россия, Москва, 3-я улица Ямского поля, д.2 корп.7, офис 301"},
        ],
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.footer-container {
  @apply w-full flex flex-col bg-gray-900 text-gray-100 text-base text-center sm:text-left;
  @apply px-[calc(8vw-6px)] sm:px-[12vw] md:px-[12vw] lg:px-10 xl:px-12;
  @apply py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14;

  .elements {
    @apply w-full flex flex-col items-center space-y-6 sm:space-y-8 pb-4  sm:items-start border-b border-b-gray-700/95;

    .element {
      @apply flex flex-col sm:flex-row items-center space-y-2.5 sm:space-y-0 sm:space-x-3;

      .e-icon {
        @apply w-[24px] h-[24px];
      }

      .e-text {
        @apply font-sans;
      }
    }
  }

  .copyright {
    @apply w-full mt-6 font-sans text-center sm:text-left;
  }

}

</style>
