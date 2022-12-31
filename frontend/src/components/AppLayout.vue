<template>

    <div class="flex min-h-full">
        <!-- side bar -->
       <Sidebar :class="opensidebar?'':'-ml-[200px]'"></Sidebar>
        <!-- side bar -->
        <div class="flex-1">
            <!-- header bar -->
           <Topbar @toggle-sidebar="toggleSidebar"></Topbar>
            <!-- header bar -->
            <!-- main bar -->
            <main class="p-6">

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
import {ref,onMounted,onUnmounted} from 'vue';
const opensidebar=ref(true);
function toggleSidebar(){
    opensidebar.value=!opensidebar.value;
}
onMounted(()=>{
    responsiveWindow();
    window.addEventListener('resize',responsiveWindow)
})
onUnmounted(()=>{
    window.removeEventListener('resize',responsiveWindow)
})
function responsiveWindow(){
    opensidebar.value=window.outerWidth>768;
}
</script>
