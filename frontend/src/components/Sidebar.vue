<template>
    <div class="w-[200px] bg-blue-700 text-white py-4 px-2">
        <router-link :to="{name:'app.dashboard'}" class="flex items-center font-meduim rounded py-2 px-4 transition-all hover:bg-black/30">
            <span class="mr-2 text-gray-300">
            <HomeIcon class="w-5"/>
            </span>
            <span class="">Dashboard</span>
        </router-link>
        <router-link :to="{name:'app.dashboard'}" class="flex items-center font-meduim rounded py-2 px-4 transition-all hover:bg-black/30">
            <span class="mr-2 text-gray-300">
            <queue-list-icon class="w-5"/>
            </span>
            <span class="">Products</span>
        </router-link>
        <router-link :to="{name:'app.dashboard'}" class="flex items-center font-meduim rounded py-2 px-4 transition-all hover:bg-black/30">
            <span class="mr-2 text-gray-300">
            <users-icon class="w-5"/>
            </span>
            <span class="">Users</span>
        </router-link>
        <router-link :to="{name:'app.dashboard'}" class="flex items-center font-meduim rounded py-2 px-4 transition-all hover:bg-black/30">
            <span class="mr-2 text-gray-300">
            <chart-bar-icon class="w-5"/>
            </span>
            <span class="">Charts</span>
        </router-link>
    </div>
</template>
<script setup>
import { HomeIcon,UsersIcon,ChartBarIcon,QueueListIcon} from '@heroicons/vue/24/outline'
</script>
