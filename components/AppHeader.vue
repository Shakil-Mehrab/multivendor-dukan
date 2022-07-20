<template>
  <div
    class="relative z-10 flex flex-shrink-0 h-16 bg-white border-b border-gray-200  lg:border-none"
  >
    <button
      type="button"
      class="px-4 text-gray-400 border-r border-gray-200  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500 lg:hidden"
      @click.prevent="openDrawer"
    >
      <span class="sr-only">Open sidebar</span>
      <MenuAlt1Icon class="w-6 h-6" />
    </button>
    <div
      class="flex items-center justify-between flex-1 w-full px-4  sm:px-6 lg:mx-auto lg:px-8"
    >
      <div class="hidden text-xl font-bold sm:block">
        {{ $route.name == "index" ? "Home" : $route.name }}
      </div>
      <div class="flex-1 sm:ml-6">
        <div class="relative w-full text-gray-400 focus-within:text-gray-600">
          <div
            class="absolute inset-y-0 flex items-center pointer-events-none  left-2"
            aria-hidden="true"
          >
            <SearchIcon class="w-5 h-5" />
          </div>
          <input
            id="search-field"
            name="search-field"
            type="search"
            placeholder="Search . . . ."
            class="block w-full h-10 py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 bg-gray-200 border rounded-md  focus:outline-none focus:ring-0 focus:border-transparent sm:text-sm"
          />
        </div>
      </div>
      <div class="flex items-center ml-2 md:ml-6">
        <button
          type="button"
          class="p-1 text-gray-400 bg-white rounded-full  focus:outline-none focus:bg-gray-200 hover:bg-gray-50 focus:border"
        >
          <span class="sr-only">View notifications</span>
          <BellIcon class="w-6 h-6" />
        </button>

        <div
          @click.prevent="profileDropdown = !profileDropdown"
          v-click-outside="hide"
          class="relative ml-2 md:ml-6"
        >
          <div>
            <button
              type="button"
              class="flex items-center h-10 max-w-xs text-sm bg-white rounded-full  focus:outline-none lg:p-2 lg:rounded-md lg:focus:bg-gray-200 hover:bg-gray-50 focus:border"
            >
              <img
                class="w-8 h-8 border border-gray-300 rounded-full"
                src="@/assets/images/logo.svg"
                alt="user"
              />
              <span
                class="hidden ml-3 text-sm font-medium text-gray-700 lg:block"
              >
                <span class="sr-only">Open user menu for </span>
                Shakil Sarder
              </span>
              <ChevronDownIcon
                class="flex-shrink-0 hidden w-4 h-4 ml-1 text-gray-400 lg:block"
              />
            </button>
          </div>

          <div
            class="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg  ring-1 ring-black ring-opacity-5 focus:outline-none"
            v-show="profileDropdown"
          >
            <nuxt-link
              :to="{ name: 'auth-profile' }"
              class="block px-4 py-2 text-sm text-gray-700"
              >Your Profile</nuxt-link
            >
            <a
              @click.prevent="logout"
              href="#"
              class="block px-4 py-2 text-sm text-gray-700"
              >Logout</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";
import { mapActions } from "vuex";
import {
  MenuAlt1Icon,
  BellIcon,
  ChevronDownIcon,
  SearchIcon,
} from "@vue-hero-icons/outline";

export default {
  data() {
    return {
      profileDropdown: false,
    };
  },
  components: {
    MenuAlt1Icon,
    BellIcon,
    ChevronDownIcon,
    SearchIcon,
  },
  methods: {
    ...mapActions({
      openDrawer: "drawer/open",
    }),

    hide() {
      this.profileDropdown = false;
    },

    async logout() {
      try {
        await this.$auth.logout();

        this.$router.replace({
          name: "login",
        });
      } catch (e) {
        console.error(e);
      }
    },
  },
  directives: {
    ClickOutside,
  },
};
</script>
