<template>

    <div class="flex min-h-full">
        <!-- side bar -->
       <Sidebar></Sidebar>
        <!-- side bar -->
        <div class="flex-1">
            <!-- header bar -->
            <header class="h-8 shadow bg-white">
                header
            </header>
            <!-- header bar -->
            <!-- main bar -->
            <main>
                main
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
</script>
