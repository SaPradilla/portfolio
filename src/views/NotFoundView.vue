<script setup>
import { Icon } from '@iconify/vue';
import Button from 'primevue/button';
import router from '@/router';

const back =  ()=>{
    router.push('/')
}

</script>

<template>
    <div class="notFound">

        <h1>  Oops! Did you miss it? </h1>
        <h2><span>404</span> Not Found</h2>
    
        <Button label="Back" icon="pi pi-check" raised rounded @click="back"  />

    </div>

</template>


<style scoped>
    .notFound{

        height: 100vh;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;
    }
    .notFound button{
        /* border-radius: 50px; */
        width: 10rem;
        height: 2rem;
    }
    h1{
        margin: 0 auto;
        text-align: center;
        font-size: 5rem;
    }

</style>
