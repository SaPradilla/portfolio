<script setup>



</script>

<template>

    <div class="lista-proyectos grid auto-rows-[192px] grid-cols-3 md:grid-cols-2 gap-2 sm:grid-cols-1 sm:w-80 sm:p-2 sm:m-auto  ">

        <div v-for="i in [...Array(6)]" class=" ">

            <div class=" loading relative flex items-center justify-center h-40 max-w-sm  rounded-lg animate-pulse" v-if="true" >
                
                <img class="absolute h-12 w-12" src="../assets/img/image.png" alt="">
                
                <div class=" flex flex-col h-full w-full justify-end p-2 gap-1">
                    <div class="  bg-black  animate-pulse h-3 w-14 mb-3"></div>
                    <div class="  bg-black  animate-pulse h-3 w-20"></div>
                    <div class="  bg-black  animate-pulse h-3 w-16"></div>
                    <div class="flex gap-3">
                        <div class="  bg-black  animate-pulse h-3 w-3"></div>
                        <div class="  bg-black  animate-pulse h-3 w-3"></div>
                        <div class="  bg-black  animate-pulse h-3 w-3"></div>
                    </div>
                </div>
            </div>


        </div>

    
    </div>


</template>

<style scoped>

.loading{

    background-color:var(--surface-900);
}
</style>