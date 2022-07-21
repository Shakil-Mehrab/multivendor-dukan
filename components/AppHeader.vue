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
      <div class="hidden text-xl font-semibold capitalize sm:block">
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

        <div class="relative ml-2 md:ml-6" v-click-outside="hide">
          <div>
            <button
              type="button"
              class="flex items-center h-10 max-w-xs text-sm bg-white rounded-full  focus:outline-none lg:p-2 lg:rounded-md lg:focus:bg-gray-200 hover:bg-gray-50 focus:border"
              @click.prevent="profileDropdown = !profileDropdown"
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
            <div class="p-2 space-y-2">
              <div class="flex justify-between pb-2 border-b">
                <span class="block text-base font-semibold text-gray-700"
                  >Store Status</span
                >

                <button
                  type="button"
                  class="relative inline-flex items-center justify-center flex-shrink-0 w-16 h-5 rounded-full cursor-pointer  group focus:outline-none"
                  role="switch"
                  @click="on = !on"
                >
                  <span
                    aria-hidden="true"
                    class="absolute w-full h-full bg-white rounded-md pointer-events-none "
                    ><span :class="{ block: on }"></span
                  ></span>
                  <span
                    class="absolute w-full h-6 p-1 mx-auto transition-colors duration-200 ease-in-out bg-gray-200 rounded-full pointer-events-none "
                    :class="{ 'bg-green-600': on, 'bg-gray-200': !on }"
                  >
                    <span
                      :class="{
                        'absolute left-1.5 font-semibold text-sm  text-white top-0.5 bottom-0 my-auto':
                          on,
                        hidden: !on,
                      }"
                    >
                      Open
                    </span>
                    <span
                      :class="{
                        'absolute right-1.5  text-sm font-semibold text-red-600 top-0.5 bottom-0 my-auto':
                          !on,
                        hidden: on,
                      }"
                    >
                      Close
                    </span>
                  </span>
                  <span
                    class="absolute left-0 inline-block w-5 h-5 transition-transform duration-200 ease-in-out transform translate-x-0 bg-white border border-gray-200 rounded-full shadow pointer-events-none  ring-0"
                    :class="{ 'translate-x-11': on, 'translate-x-0': !on }"
                  ></span>
                </button>
              </div>

              <ProfileDropDownLink to="account">
                <UserIcon
                  class="flex-shrink-0 inline-block p-1 text-gray-600 bg-gray-200 rounded-full  w-7 h-7"
                />
                My Account
              </ProfileDropDownLink>

              <ProfileDropDownLink to="account">
                <CogIcon
                  class="flex-shrink-0 inline-block p-1 text-gray-600 bg-gray-200 rounded-full  w-7 h-7"
                />
                Store Setting
              </ProfileDropDownLink>

              <ProfileDropDownLink to="account">
                <PlayIcon
                  class="flex-shrink-0 inline-block p-1 text-gray-600 bg-gray-200 rounded-full  w-7 h-7"
                />
                Tutorials
              </ProfileDropDownLink>

              <ProfileDropDownLink to="account">
                <QuestionMarkCircleIcon
                  class="flex-shrink-0 inline-block p-1 text-gray-600 bg-gray-200 rounded-full  w-7 h-7"
                />
                Help Center
              </ProfileDropDownLink>

              <ProfileDropDownLink to="account">
                <CubeTransparentIcon
                  class="flex-shrink-0 inline-block p-1 text-gray-600 bg-gray-200 rounded-full  w-7 h-7"
                />
                Community
              </ProfileDropDownLink>

              <ProfileDropDownLink to="account">
                <ChatAlt2Icon
                  class="flex-shrink-0 inline-block p-1 text-gray-600 bg-gray-200 rounded-full  w-7 h-7"
                />
                Chant With Us
              </ProfileDropDownLink>

              <ProfileDropDownLink @click.prevent="logout" href="#">
                <LogoutIcon
                  class="flex-shrink-0 inline-block p-1 text-gray-600 bg-gray-200 rounded-full  w-7 h-7"
                />

                Logout
              </ProfileDropDownLink>
            </div>
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
  UserIcon,
  LogoutIcon,
  QuestionMarkCircleIcon,
  PlayIcon,
  ChatAlt2Icon,
  CogIcon,
  CubeTransparentIcon,
} from "@vue-hero-icons/outline";

export default {
  data() {
    return {
      profileDropdown: false,
      on: false,
    };
  },
  components: {
    MenuAlt1Icon,
    BellIcon,
    ChevronDownIcon,
    SearchIcon,
    UserIcon,
    LogoutIcon,
    QuestionMarkCircleIcon,
    PlayIcon,
    ChatAlt2Icon,
    CogIcon,
    CubeTransparentIcon,
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
