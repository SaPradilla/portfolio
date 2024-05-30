import { defineStore } from "pinia";
import { ref } from "vue";

export const useProyectos = defineStore('proyectos',()=>{

    const currentProyect = ref(null);

    return{
        currentProyect,

    }
})