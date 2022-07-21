<template>
  <nuxt-link
    :to="{ name: to }"
    class="flex items-center px-2 py-1 text-sm font-medium leading-6 rounded-md  group hover:text-white hover:bg-navy-200"
    :class="$route.name === to ? 'bg-navy-200 text-white' : 'text-gray-300'"
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
