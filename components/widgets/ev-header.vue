<template>
  <header class="ev-header">

    <div class=" z-20 w-full flex items-center justify-center sm:justify-between transition-all md:text-red-50">

      <NuxtLink class="sm:ml-0 sm:mr-auto flex justify-center items-center" to="/">
        <img @click="activePage=0" class="hidden sm:block select-none w-10 h-10 sm:w-16 sm:h-8 md:w-20 md:h-10"
             src="@/assets/images/logotype-2.png" alt="img err">
        <h2 class="sm:ml-3 md:ml-6 font-extrabold tracking-[0.035rem] font-sans text-base lg:text-xl text-gray-200 sm:text-gray-50">
          Everest consulting
        </h2>
      </NuxtLink>

      <nav class="hidden sm:flex sm:items-center sm:justify-center md:pr-3 md:mr-3 mr-3">
        <ul class="flex text-gray-50">
          <li
            @click="activePage=link.id"
            class="hover:text-gray-400 ml-6 md:ml-8 lg:ml-12 flex items-center transition-all ease-out cursor-pointer"
            v-for="link of navLinks">
            <NuxtLink :to="link.url">
              <h5
                :class="{'text-red-600': activePage === link.id}"
                class="text-base font-bold">{{ link.title }}</h5>
              <!--<p class="hidden md:block sm:text-xs md:text-sm lg:text-base ">{{ link.description }}</p>-->
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <div @click="menuIsOpen=!menuIsOpen" class="ml-auto block sm:hidden flex items-center">
        <svg class=" cursor-pointer w-10 h-10 sm:ml-4 text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none"
             viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
        </svg>
      </div>

    </div>

    <div v-if="menuIsOpen" class="sm:hidden bg-transparent mt-4 pt-1 border-t border-t-gray-700">
      <ul class="flex flex-col gap-y-4 mt-4 text-gray-200">
        <li
          @click="openPage(link.id)"
          class="cursor-pointer"
          v-for="link of navLinks">
          <NuxtLink :to="link.url">
            <h5 class="text-sm font-extrabold">{{ link.title }}</h5>
          </NuxtLink>
        </li>
      </ul>
    </div>

  </header>
</template>

<script>
import {navLinks} from '@/configs/headerConfig';

export default {
  name: "ev-header",

  props: {
    textColor: String
  },

  methods: {
    openPage(id) {
      this.activePage = id;
      this.menuIsOpen = false;
    }
  },

  data() {
    return {
      navLinks,
      activePage: 0,
      menuIsOpen: false
    }
  },

}
</script>

<style>
  .ev-header{
    @apply overflow-hidden fixed top-0 left-0 right-0 z-20 sm:static;
    @apply flex flex-col items-stretch;
    @apply mx-0 sm:m-0 py-4 px-4 sm:px-8 md:px-4 lg:px-4 xl:px-12;
    @apply bg-gray-900;
  }
</style>


