<script setup>
import {ref,onMounted, computed} from 'vue';
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();
import Dialog from 'primevue/dialog';
import ModalProyectos from './ModalProyectos.vue';
const visible = ref(false);
import ProyectosService from '../services/Proyectos';
import { Icon } from '@iconify/vue';
import { useProyectos } from '@/stores/proyectos';
import { formatearFecha } from '@/helpers/formatDate';

const ProyectoStore = useProyectos() 

const proyectos = ref()
const currentProyect = ref()
const loadingProyects = ref(true)

onMounted(async()=>{
    await getProyects()
})

const getProyects = async()=>{
    const res = await ProyectosService.getProyects()
    proyectos.value = res.data.data
    
    loadingProyects.value = false
    
}

const handleCurrentProyectModal = (proyect)=>{
    ProyectoStore.currentProyect = proyect;
    visible.value = !visible.value
}

</script>

<template>
    <Dialog
        :pt="{
            mask: {
                style: 'backdrop-filter: blur(5px)'
            }
        }"
        v-model:visible="visible" modal  :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }" >
        <template #container="{ closeCallback }">
        
            <ModalProyectos @closeCallback="closeCallback"  />
        
        </template>

    </Dialog>
    <section class="contenedor">
        <div class="proyectos">

            <h1> {{ t('proyectosTitle') }}</h1>
             
            <div class="contenedor-proyectos">
                <div class="texto">
                    <p>
                        {{ t('descripcionProyectosOne') }}
                    </p>
                    <br>
                    <p>
                        {{ t('descripcionProyectosTwo') }}
                    </p>
                </div>
            </div>

            <div class="lista-proyectos grid auto-rows-[192px] grid-cols-3 md:grid-cols-2 gap-2 sm:grid-cols-1 sm:w-80 sm:p-2 sm:m-auto ">
                
                <div class="proyecto " v-for="(proyect, index) in proyectos" :key="index"
                    :class="{ 'row-span-1': true, 'rounded-xl': true, 'border-1': true, 'col-span-1': index === 3 || index === 6 , 'md:col-span-2': index === 2 || index === 3, 'sm:col-span-1':true}">


                    
                    <div class=" loading flex items-center justify-center h-full max-w-sm  rounded-lg animate-pulse" v-if="loadingProyects" >
                        <img class=" h-12 w-12" src="../assets/img/image.png" alt="">
                    </div>

                    <img  v-if="!loadingProyects" class="proyecto__image" :src="proyect.images[0].img" :alt="proyect.title" />
                    
                    <div   v-if="!loadingProyects" class="content-proyecto " @click="handleCurrentProyectModal(proyect) ">
                        
                        <div class="desc-proyecto"> 
                            <p>{{ proyect.title }}</p>
                            <div class="info-proyecto">
                                <small class="descipcion-proyecto">{{ proyect.sub_title }}</small>
                                <small class="finalizacion">{{ proyect.end_date ? formatearFecha(proyect.end_date) : 'En proceso' }}</small>
                            </div>
                            <div class="logos-lenguajes-proyecto">
                                <div v-for="icon in proyect.tecnologies">
                                    <Icon :icon="icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                    

                </div>

            </div>

        </div>

    </section>
</template>


<style scoped>  

.loading{


    background-color:var(--surface-900);
    
}

.proyectos{
    margin-top: 10rem;
    margin-bottom: 10rem;
}
.contenedor-proyectos{
    margin-top: 4rem;
    margin-bottom: 4rem;
}
.proyecto{
    position: relative;
    height: 12rem;
    overflow: hidden;
    border-radius: 1.2rem;
    border: 1px solid;
}
.proyecto img.proyecto__image{
    width: 100%;
    height: 100%;
    transition: transform .4s ease-in-out;
}
.content-proyecto{
    background: linear-gradient(transparent, rgba(21, 22, 26, .70) 80%);
    backdrop-filter: blur(.3px);
    padding: 0px 0.9375rem 0.9375rem;
    /* border-radius: 0px 0px 10px 10px; */
    width: 100%;
    height: 100%;
    max-height: 200px;
    overflow-y: auto;
    position: absolute;
    left: 0px;
    z-index: 1;
    bottom: 0px;
    transition: all .3s ease-in-out;
    cursor: pointer;
}
.content-proyecto:hover{
    backdrop-filter: blur(2.5px);
}
.proyecto:hover img.proyecto__image{
    transform: scale(110%) rotate(2deg);
} 
.desc-proyecto{
    position: absolute;
    z-index: 1;
    bottom: 0px;
    display: flex;
    flex-direction: column;
    gap: .5rem;
}
.logos-lenguajes-proyecto{
    display: flex;
}
.logos-lenguajes-proyecto svg{
    width: 20px;
    height: 20px;
}
.desc-proyecto p{
    font-weight: 700;
    font-size: 1.5rem;
}
.finalizacion{
    color: var(--text-color-secondary) ;
}
.info-proyecto{
    display: flex;
    flex-direction: column;
}
@media (max-width: 885px) {
    h1{
        font-size: 3rem;
    }
    .texto{
        margin: 0 auto;
    }
    .proyectos{
        text-align: center;
    }

}
</style>