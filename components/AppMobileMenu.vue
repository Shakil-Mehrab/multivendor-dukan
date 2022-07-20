<template>
  <div class="fixed inset-0 z-40 flex lg:hidden">
    <div
      class="fixed inset-0 bg-gray-600 bg-opacity-75"
      @click.prevent="closeDrawer"
    ></div>

    <div
      class="relative flex flex-col flex-1 w-full max-w-xs pb-4  bg-navy-300 liner-gradient"
    >
      <div class="absolute top-0 right-0 pt-2 -mr-12">
        <button
          type="button"
          class="flex items-center justify-center w-10 h-10 ml-1 rounded-full  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          @click.prevent="closeDrawer"
        >
          <span class="sr-only">Close sidebar</span>
          <XIcon class="w-6 h-6 text-white" />
        </button>
      </div>

      <div
        class="flex items-center flex-shrink-0 px-2 py-5 border-b border-gray-900 "
      >
        <img
          class="w-auto h-10 rounded-md"
          src="@/assets/images/logo.svg"
          alt="Easywire logo"
        />
        <span class="ml-2 text-base font-bold text-gray-200">Online Shop</span>
      </div>
      <nav
        class="flex flex-col flex-1 pt-10 overflow-y-auto border-t border-gray-700 "
        aria-label="Sidebar"
      >
        <div class="px-2 space-y-2">
          <nuxt-link
            to="/"
            class="flex items-center p-2 text-sm font-medium leading-6 rounded-md  group hover:text-white hover:bg-navy-200"
            :class="
              $route.name === 'index'
                ? 'bg-navy-200 text-white'
                : 'text-gray-300'
            "
          >
            <HomeIcon class="w-6 h-6 mr-4" aria-hidden="true" />
            Home
          </nuxt-link>

          <nuxt-link
            :to="{ name: 'orders' }"
            class="flex items-center p-2 text-sm font-medium leading-6 rounded-md  group hover:text-white hover:bg-navy-200"
            :class="
              $route.name === 'orders'
                ? 'bg-navy-200 text-white'
                : 'text-gray-300'
            "
          >
            <ShoppingCartIcon class="w-6 h-6 mr-4" aria-hidden="true" />
            Orders
          </nuxt-link>

          <nuxt-link
            :to="{ name: 'delivery' }"
            class="flex items-center p-2 text-sm font-medium leading-6 rounded-md  group hover:text-white hover:bg-navy-200"
            :class="
              $route.name === 'delivery'
                ? 'bg-navy-200 text-white'
                : 'text-gray-300'
            "
          >
            <TruckIcon class="w-6 h-6 mr-4" aria-hidden="true" />
            Delivery
          </nuxt-link>

          <nuxt-link
            :to="{ name: 'products' }"
            class="flex items-center p-2 text-sm font-medium leading-6 rounded-md  group hover:text-white hover:bg-navy-200"
            :class="
              $route.name === 'products'
                ? 'bg-navy-200 text-white'
                : 'text-gray-300'
            "
          >
            <ViewGridIcon class="w-6 h-6 mr-4" aria-hidden="true" />
            Products
          </nuxt-link>

          <nuxt-link
            :to="{ name: 'payments' }"
            class="flex items-center p-2 text-sm font-medium leading-6 rounded-md  group hover:text-white hover:bg-navy-200"
            :class="
              $route.name === 'payments'
                ? 'bg-navy-200 text-white'
                : 'text-gray-300'
            "
          >
            <CashIcon class="w-6 h-6 mr-4" aria-hidden="true" />
            Payments
          </nuxt-link>

          <nuxt-link
            :to="{ name: 'customers' }"
            class="flex items-center p-2 text-sm font-medium leading-6 rounded-md  group hover:text-white hover:bg-navy-200"
            :class="
              $route.name === 'customers'
                ? 'bg-navy-200 text-white'
                : 'text-gray-300'
            "
          >
            <UserGroupIcon class="w-6 h-6 mr-4" aria-hidden="true" />
            Customers
          </nuxt-link>
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
  },
  methods: {
    ...mapActions({
      closeDrawer: "drawer/close",
    }),
  },
};
</script>
