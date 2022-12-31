<template>

    <div class="flex min-h-full">
        <!-- side bar -->
       <Sidebar></Sidebar>
        <!-- side bar -->
        <div class="flex-1">
            <!-- header bar -->
           <Topbar></Topbar>
            <!-- header bar -->
            <!-- main bar -->
            <main class="p-6">
                ok
                <router-view></router-view>

            </main>
            <!-- main bar -->
        </div>


    </div>
</template>

<script setup>
import Sidebar from "./Sidebar.vue";

const {title}=defineProps({
    title:String
})
import { LockClosedIcon } from '@heroicons/vue/20/solid'
import Topbar from "./Topbar.vue";
</script>
