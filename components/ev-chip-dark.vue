<template>
  <span class="chip-dark">{{ text }}</span>
</template>

<script>
export default {
  name: "ev-chip-dark",
  props: ["text"]
}
</script>

<style scoped>
.chip-dark {
  @apply inline-block rounded-xl border-2 py-0.5 px-2;
  @apply text-sm sm:text-base font-sans;
  @apply bg-gray-800 border-gray-500 text-gray-200;
}

</style>
