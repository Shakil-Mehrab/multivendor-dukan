<template>
  <div
    class="hidden bg-navy-300 lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0"
  >
    <div class="flex flex-col flex-grow pb-4 overflow-y-auto liner-gradient">
      <AppLogo>
        <span class="ml-2 text-base font-bold text-gray-200">Online Shop</span>
      </AppLogo>

      <nav
        class="flex flex-col flex-1 pt-10 overflow-y-auto border-t border-gray-700 "
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
