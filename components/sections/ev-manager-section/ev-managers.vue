<template>
  <div class="managers-section">
    <div class="manager-section-title">
      <h2 class="text-xl sm:text-2xl md:text-2xl lg:text-4xl font-bold">Руководство компании</h2>
      <p class="text-lg font-light">
        We’re a dynamic group of individuals who are passionate about what we do
        and dedicated to delivering the best
        results for our clients.
      </p>
    </div>
    <div class="manager-cards-wrapper">
      <div v-for="employee of employees" :key="employee.id" class="manager-card">
        <img class="manager-ava" :src="require(`../../../assets/avatars/${employee.img}.png`)" alt="no img"/>
        <div class="manager-card-desc-container">
          <span class="text-gray-900 inline-block font-bold">{{ employee.fullName }}</span>
          <span class="text-red-800/80 inline-block font-medium">{{ employee.post }}</span>
          <span class="text-gray-900 inline-block font-extralight">{{ employee.area }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {employees} from "@/configs/employees"


export default {
  name: "ev-managers",
  data(){
    return {
      employees,
    }
  }
}
</script>

<style scoped>
.managers-section {
  @apply w-full text-gray-700 relative overflow-hidden;
  @apply border-8 border-b-red-800 border-x-gray-100 border-t-gray-100;
  @apply px-[calc(8vw-6px)] sm:px-[12vw] md:px-[12vw] lg:px-10 xl:px-12;
  @apply py-6 sm:py-8 md:py-10 lg:py-16 xl:py-14;
  @apply mt-4 sm:mt-6;
  background: rgb(243 244 246) top / cover no-repeat fixed url("@/assets/background/bg-lines-color-no-color.png");
}

.manager-section-title {
  @apply w-full border-b border-b-gray-200 text-gray-700;
  @apply pb-4 sm:pb-8 md:pb-10 lg:pb-10 xl:pb-12;
  @apply text-center md:text-left;
  @apply space-y-3 lg:space-y-5;
}

.manager-cards-wrapper {
  @apply w-full flex flex-wrap justify-center items-stretch md:justify-evenly;
  @apply gap-y-4 sm:gap-x-2 sm:gap-x-4 md:gap-x-6 lg:gap-x-4 xl:gap-x-8;
  @apply mt-4 lg:mt-12 md:mt-8 lg:mt-10;
}

.manager-card {
  @apply w-full sm:w-[45%] sm:max-w-[280px] md:w-[30%] md:max-w-[290px] lg:w-[22vw] lg:max-w-[270px];
  @apply flex items-center justify-center flex-wrap;
}

.manager-ava {
  @apply p-2.5;
  @apply object-contain min-w-[140px] w-[70vw] max-w-[185px] min-h-[140px] h-[70vw] max-h-[185px];
}

.manager-card-desc-container {
  @apply flex flex-col;
  @apply text-left text-base;
  @apply space-y-0.5;
}

</style>
