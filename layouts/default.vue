<template>
  <div class="min-h-screen overflow-hidden font-sans antialiased bg-gray-200">
    <div class="min-h-full">
      <!-- <AppMobileMenu
              :class="
                isOpen
                  ? 'ml-0  transform transition-all ease-in duration-300'
                  : 'ml-[-20rem] invisible opacity-0 transform transition-all ease-out duration-300'
              "
            /> -->

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
