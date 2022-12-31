<template>
    <header class="flex justify-between h-14 items-center shadow bg-white">
        <button class="p-4 text-gray-700">
            <Bars3Icon class="w-8"/>
        </button>

            <Menu as="div" class="relative inline-block text-left mr-2">
                <div>
                    <MenuButton class="flex items-center">
                        <img src="https://randomuser.me/api/portraits/men/51.jpg" class="rounded-full w-10 mr-2"/>
                        <small>Youssef Harizi</small>
                        <ChevronDownIcon
                            class="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                            aria-hidden="true"
                        />
                    </MenuButton>
                </div>

                <transition
                    enter-active-class="transition duration-100 ease-out"
                    enter-from-class="transform scale-95 opacity-0"
                    enter-to-class="transform scale-100 opacity-100"
                    leave-active-class="transition duration-75 ease-in"
                    leave-from-class="transform scale-100 opacity-100"
                    leave-to-class="transform scale-95 opacity-0"
                >
                    <MenuItems
                        class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-sm ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                        <div class="px-1 py-1">
                            <MenuItem v-slot="{ active }">
                                <button
                                    :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
                                >
                                    <UserIcon
                                        :active="active"
                                        class="mr-2 h-5 w-5 text-indigo-400"
                                        aria-hidden="true"
                                    />
                                    Profile
                                </button>
                            </MenuItem>

                        </div>


                        <div class="px-1 py-1">
                            <MenuItem v-slot="{ active }">
                                <button
                                    :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
                                >
                                    <ArrowRightOnRectangleIcon
                                        :active="active"
                                        class="mr-2 h-5 w-5 text-violet-400"
                                        aria-hidden="true"
                                    />
                                   Logout
                                </button>
                            </MenuItem>
                        </div>
                    </MenuItems>
                </transition>
            </Menu>


    </header>
</template>
<script setup>

import {Bars3Icon,UserIcon,ArrowRightOnRectangleIcon} from '@heroicons/vue/24/outline';
import {Menu, MenuButton, MenuItems, MenuItem} from '@headlessui/vue'
import {ChevronDownIcon} from '@heroicons/vue/20/solid'
</script>
