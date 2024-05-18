<script setup>
import {ref,onMounted, computed} from 'vue';
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();
import Dialog from 'primevue/dialog';
import ModalProyectos from './ModalProyectos.vue';
const visible = ref(false);


// Calcular el número de columnas para el Bento Grid
const proyectos = ref([
    {
        nombre:'Votaciones',
        imagen:'src/assets/img/background_proyecto_dos.png',
        descripcion:'Sistema de votaciones',
        fecha_fin:'8/Diciembre/2023',
    },
    {
        nombre:'Veterinaria',
        imagen:'src/assets/img/background_proyecto.png',
        descripcion:'Gestion Veterinaria',
        fecha_fin:'16/Enero/2024',
    },
    {
        nombre:'Veterinaria',
        imagen:'src/assets/img/background_proyecto_dos.png',
        descripcion:'Gestion Veterinaria',
        fecha_fin:'16/Enero/2024',
    },
    {
        nombre:'Veterinaria',
        imagen:'src/assets/img/background_proyecto.png',
        descripcion:'Gestion Veterinaria',
        fecha_fin:'16/Enero/2024',
    },
    {
        nombre:'Veterinaria',
        imagen:'src/assets/img/background_proyecto.png',
        descripcion:'Gestion Veterinaria',
        fecha_fin:'16/Enero/2024',
    },{
        nombre:'Veterinaria',
        imagen:'src/assets/img/background_proyecto.png',
        descripcion:'Gestion Veterinaria',
        fecha_fin:'16/Enero/2024',
    },{
        nombre:'Veterinaria',
        imagen:'src/assets/img/background_proyecto.png',
        descripcion:'Gestion Veterinaria',
        fecha_fin:'16/Enero/2024',
    },{
        nombre:'Veterinaria',
        imagen:'src/assets/img/background_proyecto.png',
        descripcion:'Gestion Veterinaria',
        fecha_fin:'16/Enero/2024',
    },{
        nombre:'Veterinaria',
        imagen:'src/assets/img/background_proyecto.png',
        descripcion:'Gestion Veterinaria',
        fecha_fin:'16/Enero/2024',
    },{
        nombre:'Veterinaria',
        imagen:'src/assets/img/background_proyecto.png',
        descripcion:'Gestion Veterinaria',
        fecha_fin:'16/Enero/2024',
    },

])

</script>

<template>

    <Dialog
        :pt="{
            mask: {
                style: 'backdrop-filter: blur(5px)'
            }
        }"
        v-model:visible="visible" modal  :draggable="false"  :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }" >
        <ModalProyectos/>
    </Dialog>

    <div class="contenedor">
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
                    :class="{ 'row-span-1': true, 'rounded-xl': true, 'border-2': true, 'col-span-2': index === 3 || index === 6 , 'md:col-span-2': index === 2 || index === 3, 'sm:col-span-1':true}">
                    <img :src="proyect.imagen" alt="" srcset="" />
                    
                    <div class="content-proyecto " @click="visible = !visible ">
                        <div class="desc-proyecto"> 
                            <p>{{ proyect.nombre }}</p>
                            <div class="info-proyecto">
                                <small class="descipcion-proyecto">{{ proyect.descripcion }}</small>
                                <small class="finalizacion">{{ proyect.fecha_fin }}</small>
                            </div>
                            <div class="logos-lenguajes-proyecto">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 87" fill="currentColor">
                                    <path
                                        d="M0 0H17.15L49 58L80.85 0H98L49 87L0 0ZM22.05 0H36.75L49 22.1367L61.25 0H75.95L49 48.72L22.05 0Z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87 95" fill="currentColor">
                                <path
                                    d="M43.5 0.5C42.195 0.5 40.8417 0.824138 39.73 1.42611L3.77 21.3374C1.45 22.634 0 25.0419 0 27.635V67.365C0 69.9581 1.45 72.366 3.77 73.6626L13.195 78.8488C17.7867 80.9788 19.3333 81.0251 21.46 81.0251C28.2267 81.0251 32.1417 77.0892 32.1417 70.236V31.0153C32.1417 30.4596 31.6583 29.9966 31.0783 29.9966H26.5833C25.955 29.9966 25.4717 30.4596 25.4717 31.0153V70.236C25.4717 73.2921 22.185 76.302 16.9167 73.7552L7.00833 68.3374C6.67 68.1059 6.47667 67.7355 6.47667 67.365V27.635C6.47667 27.2182 6.67 26.8478 7.00833 26.6626L42.9683 6.79754C43.2583 6.61232 43.7417 6.61232 44.0317 6.79754L79.9917 26.6626C80.33 26.8478 80.5233 27.2182 80.5233 27.635V67.365C80.5233 67.7355 80.33 68.1059 79.9917 68.3374L44.0317 88.2025C43.7417 88.3877 43.2583 88.3877 42.92 88.2025L33.8333 82.9236C33.4467 82.7847 33.06 82.7384 32.8183 82.8773C30.2567 84.2665 29.7733 84.5443 27.405 85.2389C26.825 85.4241 25.9067 85.7483 27.7433 86.7207L39.73 93.5276C40.89 94.1759 42.1467 94.5 43.5 94.5C44.8533 94.5 46.11 94.1759 47.27 93.5276L83.23 73.6626C85.55 72.366 87 69.9581 87 67.365V27.635C87 25.0419 85.55 22.634 83.23 21.3374L47.27 1.42611C46.1583 0.824138 44.8533 0.5 43.5 0.5ZM53.1667 28.9778C42.92 28.9778 36.7817 33.099 36.7817 40.0448C36.7817 47.5 42.8717 49.6764 52.7317 50.6025C64.4767 51.7138 65.395 53.3808 65.395 55.6034C65.395 59.4468 62.1567 61.0675 54.6167 61.0675C45.0467 61.0675 43.0167 58.7985 42.2917 54.2606C42.195 53.7975 41.76 53.4271 41.2283 53.4271H36.5883C36.0083 53.4271 35.5733 53.8438 35.5733 54.4458C35.5733 60.1877 38.86 67.1335 54.6167 67.1335C65.975 67.1335 72.5 62.8271 72.5 55.3256C72.5 47.8704 67.28 45.9256 56.2117 44.4901C45.0467 43.101 43.935 42.3601 43.935 39.8596C43.935 37.7759 44.9017 34.9975 53.1667 34.9975C60.4167 34.9975 63.2683 36.5256 64.38 41.2951C64.4767 41.7581 64.9117 42.0823 65.395 42.0823H70.0833C70.325 42.0823 70.615 41.9897 70.8083 41.7581C71.0017 41.5729 71.1467 41.2951 71.05 41.0172C70.3733 32.7749 64.67 28.9778 53.1667 28.9778Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>

        </div>

    </div>
</template>



<style scoped>

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
.proyecto img{
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
.proyecto:hover img{
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