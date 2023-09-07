<template>
  <footer class="footer-container">

    <div class="w-full flex flex-col space-y-3.5 items-center sm:items-start border-b border-b-gray-700/95">

      <div class="flex flex-col items-center sm:block">
        <img class="icon" src="../../assets/icons/address-icon.png" alt="no img">
        <span class="mr-1">125040, Россия, Москва, 3-я улица Ямского поля, д.2 корп.7, офис 301</span>
      </div>

      <div class="flex flex-col items-center sm:block">
        <img class="icon" src="../../assets/icons/phone-icon.png" alt="no img">
        <span>+7 (495) 717 01 01</span>
        <span>+7 (499) 557 07 97</span>
      </div>

      <div class="flex flex-col items-center sm:block">
        <img class="icon" src="../../assets/icons/email-icon.png" alt="no img">
        <span>info@evcons.ru</span>
      </div>

    </div>

    <div class="w-full text-left py-8">
      ©2023 "ООО Эверест Консалтиг"
    </div>

  </footer>
</template>

<script>
export default {
  name: "ev-footer"
}
</script>

<style scoped>

.footer-container {
  @apply w-full bg-gray-900;
  @apply flex flex-col;
  @apply text-center text-gray-200 font-light font-sans text-base;
  @apply p-4 sm:p-6 md:p-12 lg:p-14 xl:p-16;
}

.icon {
  @apply inline-block w-5 h-5 sm:w-6 sm:h-6 block sm:inline mr-2;
}

</style>
