<template>
  <nuxt-link
    :to="{ name: to }"
    class="block px-2 py-1 text-sm font-semibold text-gray-700 rounded-md  hover:bg-gray-100"
  >
    {{ title }}
    <slot />
  </nuxt-link>
</template>
<script>
export default {
  props: {
    to: {
      required: false,
      type: String,
      default: "#",
    },
  },
};
</script>
