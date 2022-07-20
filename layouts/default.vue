<template>
  <div class="min-h-screen overflow-hidden font-sans antialiased bg-gray-200">
    <div class="min-h-full">
      <AppMobileMenu
        class="w-full overflow-hidden"
        :class="
          isOpen
            ? 'transform translate-x-0 transition duration-500 ease-in'
            : 'transform -translate-x-full transition duration-500 ease-out opacity-0 '
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
