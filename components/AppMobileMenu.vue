<template>
  <div class="fixed inset-0 z-40 flex lg:hidden">
    <div
      class="fixed inset-0 bg-gray-600 bg-opacity-75"
      @click.prevent="closeDrawer"
    ></div>

    <div
      class="
        relative
        flex flex-col flex-1
        w-full
        max-w-xs
        pb-4
        bg-navy-300
        liner-gradient
      "
    >
      <div class="absolute top-0 right-0 pt-2 -mr-12">
        <button
          type="button"
          class="
            flex
            items-center
            justify-center
            w-10
            h-10
            ml-1
            rounded-full
            focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
          "
          @click.prevent="closeDrawer"
        >
          <span class="sr-only">Close sidebar</span>
          <XIcon class="w-6 h-6 text-white" />
        </button>
      </div>

      <AppLogo>
        <span class="ml-2 text-base font-bold text-gray-200">Online Shop</span>
      </AppLogo>
      <nav
        class="
          flex flex-col flex-1
          pt-10
          overflow-y-auto
          border-t border-gray-700
        "
        aria-label="Sidebar"
      >
        <div class="px-2 space-y-2">
          <AppNavLink to="index">
            <HomeIcon class="w-6 h-6 mr-4" aria-hidden="true" />
            Home
          </AppNavLink>

          <AppNavLink to="orders">
            <ShoppingCartIcon class="w-6 h-6 mr-4" aria-hidden="true" />
            Orders
          </AppNavLink>

          <AppNavLink to="delivery">
            <TruckIcon class="w-6 h-6 mr-4" aria-hidden="true" />
            Delivery
          </AppNavLink>

          <AppNavLink to="products">
            <ViewGridIcon class="w-6 h-6 mr-4" aria-hidden="true" />
            Products
          </AppNavLink>

          <AppNavLink to="payments">
            <CashIcon class="w-6 h-6 mr-4" aria-hidden="true" />
            Payments
          </AppNavLink>

          <AppNavLink to="customers">
            <UserGroupIcon class="w-6 h-6 mr-4" aria-hidden="true" />
            Customers
          </AppNavLink>
        </div>
      </nav>
    </div>

    <div class="flex-shrink-0 w-14" aria-hidden="true"></div>
  </div>
</template>
<script>
import { mapActions } from "vuex";

import {
  HomeIcon,
  ShoppingBag,
  TruckIcon,
  ViewGridIcon,
  CashIcon,
  UserGroupIcon,
  XIcon,
} from "@vue-hero-icons/outline";
import { ShoppingCartIcon } from "@vue-hero-icons/solid";
import AppLogo from "./logo/AppLogo.vue";

export default {
  components: {
    HomeIcon,
    ShoppingBag,
    ShoppingCartIcon,
    TruckIcon,
    ViewGridIcon,
    CashIcon,
    UserGroupIcon,
    XIcon,
    AppLogo,
  },
  methods: {
    ...mapActions({
      closeDrawer: "drawer/close",
    }),
  },
};
</script>
