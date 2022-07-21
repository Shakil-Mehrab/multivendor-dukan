<template>
  <div
    class="flex flex-col min-h-screen overflow-hidden font-sans antialiased bg-gray-200 "
  >
    <div class="min-h-full">
      <AppMobileMenu
        :class="
          isOpen
            ? 'transform translate-x-0 transition duration-500 ease-in'
            : 'transform -translate-x-full transition duration-500 ease-out'
        "
      />

      <AppSidebar />

      <div class="flex flex-col flex-1 lg:pl-64">
        <AppHeader />

        <main class="flex-1 pb-8">
          <Nuxt />
        </main>
      </div>
    </div>

    <div class="py-5 mt-auto bg-white border-t border-gray-300 lg:pl-64">
      <div class="flex items-center justify-between px-2 md:px-6 lg:px-8">
        <div
          class="text-sm font-medium text-gray-600 md:text-xl md:font-semibold"
        >
          You have 4 days left in your free trial
        </div>
        <button
          type="submit"
          class="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-yellow-600 border border-transparent rounded-md shadow-sm  hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
        >
          Subscribe
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      isOpen: "drawer/isOpen",
    }),
  },
};
</script>
