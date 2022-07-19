<template>
  <div
    class="hidden bg-navy-300 lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0"
  >
    <div
      class="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto liner-gradient"
    >
      <div class="flex items-center flex-shrink-0 px-4">
        <img
          class="w-auto h-12 rounded-md"
          src="@/assets/images/logo.svg"
          alt="Easywire logo"
        />
        <span class="ml-2 text-xl font-bold text-gray-200">Online Shop</span>
      </div>

      <nav
        class="flex flex-col flex-1 mt-5 overflow-y-auto divide-y"
        aria-label="Sidebar"
      >
        <div class="px-2 space-y-1">
          <nuxt-link
            to="{}"
            class="flex items-center px-2 py-2 text-sm font-medium leading-6 text-gray-100 rounded-md  group hover:text-white hover:bg-navy-200"
            :class="{ 'bg-navy-200': $route.name === 'index' }"
          >
            <NewspaperIcon
              class="w-6 h-6 mr-4 text-gray-200"
              aria-hidden="true"
            />
            Articles
          </nuxt-link>

          <nuxt-link
            :to="{}"
            class="flex items-center px-2 py-2 text-sm font-medium leading-6 text-gray-100 rounded-md  group hover:text-white hover:bg-navy-200"
            :class="{ 'bg-navy-200': $route.name === 'categories' }"
          >
            <CollectionIcon
              class="w-6 h-6 mr-4 text-gray-200"
              aria-hidden="true"
            />
            Categories
          </nuxt-link>

          <nuxt-link
            :to="{}"
            class="flex items-center px-2 py-2 text-sm font-medium leading-6 text-gray-100 rounded-md  group hover:text-white hover:bg-navy-200"
            :class="{ 'bg-navy-200': $route.name === 'topics' }"
          >
            <BookOpenIcon
              class="w-6 h-6 mr-4 text-gray-200"
              aria-hidden="true"
            />
            Topics
          </nuxt-link>

          <nuxt-link
            :to="{}"
            class="flex items-center px-2 py-2 text-sm font-medium leading-6 text-gray-100 rounded-md  group hover:text-white hover:bg-navy-200"
            :class="{ 'bg-navy-200': $route.name === 'regions' }"
          >
            <LocationMarkerIcon
              class="w-6 h-6 mr-4 text-gray-200"
              aria-hidden="true"
            />
            Regions
          </nuxt-link>

          <nuxt-link
            :to="{}"
            class="flex items-center px-2 py-2 text-sm font-medium leading-6 text-gray-100 rounded-md  group hover:text-white hover:bg-navy-200"
            :class="{ 'bg-navy-200': $route.name === 'tags' }"
          >
            <TagIcon class="w-6 h-6 mr-4 text-gray-200" aria-hidden="true" />
            Tags
          </nuxt-link>

          <nuxt-link
            :to="{}"
            class="flex items-center px-2 py-2 text-sm font-medium leading-6 text-gray-100 rounded-md  group hover:text-white hover:bg-navy-200"
            :class="{ 'bg-navy-200': $route.name === 'media' }"
          >
            <DatabaseIcon
              class="w-6 h-6 mr-4 text-gray-200"
              aria-hidden="true"
            />
            Media
          </nuxt-link>

          <nuxt-link
            :to="{}"
            class="flex items-center px-2 py-2 text-sm font-medium leading-6 text-gray-100 rounded-md  group hover:text-white hover:bg-navy-200"
            :class="{ 'bg-navy-200': $route.name === 'users' }"
          >
            <UserGroupIcon
              class="w-6 h-6 mr-4 text-gray-200"
              aria-hidden="true"
            />
            Users
          </nuxt-link>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import {
  CogIcon,
  TagIcon,
  CollectionIcon,
  BookOpenIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  DatabaseIcon,
  UserGroupIcon,
} from "@vue-hero-icons/outline";
import { LocationMarkerIcon, NewspaperIcon } from "@vue-hero-icons/solid";

export default {
  components: {
    CogIcon,
    TagIcon,
    LocationMarkerIcon,
    CollectionIcon,
    NewspaperIcon,
    BookOpenIcon,
    QuestionMarkCircleIcon,
    ShieldCheckIcon,
    DatabaseIcon,
    UserGroupIcon,
  },
};
</script>
