<template>
  <div
    class="hidden bg-navy-300 lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0"
  >
    <!--  py-2   border-b border-t  border-t-[rgba(255,255,255,.1)] border-b-black -->
    <div class="flex flex-col flex-grow pb-4 overflow-y-auto liner-gradient">
      <div
        class="flex items-center flex-shrink-0 px-4 py-10 border-b border-gray-900 "
      >
        <img
          class="w-auto h-10 rounded-md"
          src="@/assets/images/logo.svg"
          alt="Easywire logo"
        />
        <span class="ml-2 text-base font-bold text-gray-200">Online Shop</span>
      </div>

      <nav
        class="flex flex-col flex-1 py-2 pt-12 overflow-y-auto border-t border-gray-700 "
        aria-label="Sidebar"
      >
        <div class="px-2 space-y-1">
          <nuxt-link
            to="{}"
            class="flex items-center px-2 py-2 text-sm font-medium leading-6 text-gray-100 rounded-md  group hover:text-white hover:bg-navy-200"
            :class="{ 'bg-navy-200': $route.name === 'index' }"
          >
            <HomeIcon class="w-6 h-6 mr-4 text-gray-200" aria-hidden="true" />
            Home
          </nuxt-link>

          <nuxt-link
            :to="{}"
            class="flex items-center px-2 py-2 text-sm font-medium leading-6 text-gray-100 rounded-md  group hover:text-white hover:bg-navy-200"
            :class="{ 'bg-navy-200': $route.name === 'categories' }"
          >
            <ShoppingCartIcon
              class="w-6 h-6 mr-4 text-gray-200"
              aria-hidden="true"
            />
            Orders
          </nuxt-link>

          <nuxt-link
            :to="{}"
            class="flex items-center px-2 py-2 text-sm font-medium leading-6 text-gray-100 rounded-md  group hover:text-white hover:bg-navy-200"
            :class="{ 'bg-navy-200': $route.name === 'topics' }"
          >
            <TruckIcon class="w-6 h-6 mr-4 text-gray-200" aria-hidden="true" />
            Delivery
          </nuxt-link>

          <nuxt-link
            :to="{}"
            class="flex items-center px-2 py-2 text-sm font-medium leading-6 text-gray-100 rounded-md  group hover:text-white hover:bg-navy-200"
            :class="{ 'bg-navy-200': $route.name === 'regions' }"
          >
            <ViewGridIcon
              class="w-6 h-6 mr-4 text-gray-200"
              aria-hidden="true"
            />
            Products
          </nuxt-link>

          <nuxt-link
            :to="{}"
            class="flex items-center px-2 py-2 text-sm font-medium leading-6 text-gray-100 rounded-md  group hover:text-white hover:bg-navy-200"
            :class="{ 'bg-navy-200': $route.name === 'tags' }"
          >
            <CashIcon class="w-6 h-6 mr-4 text-gray-200" aria-hidden="true" />
            Payments
          </nuxt-link>

          <nuxt-link
            :to="{}"
            class="flex items-center px-2 py-2 text-sm font-medium leading-6 text-gray-100 rounded-md  group hover:text-white hover:bg-navy-200"
            :class="{ 'bg-navy-200': $route.name === 'media' }"
          >
            <UserGroupIcon
              class="w-6 h-6 mr-4 text-gray-200"
              aria-hidden="true"
            />
            Customers
          </nuxt-link>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import {
  HomeIcon,
  ShoppingBag,
  TruckIcon,
  ViewGridIcon,
  CashIcon,
  UserGroupIcon,
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
  },
};
</script>
