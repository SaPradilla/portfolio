<script setup>
    import { useI18n } from 'vue-i18n';

    import { Icon } from '@iconify/vue';
    import Button from 'primevue/button';

    import { defineProps,ref } from "vue";
    import Galleria from 'primevue/galleria';
    const { t, locale } = useI18n();

    const imagenes = [
       {url: 'src/assets/img/background_proyecto_dos.png',thumbnail:'src/assets/img/background_proyecto_dos_tumbnail.png'},
       {url: 'src/assets/img/background_proyecto.png',thumbnail:'src/assets/img/background_proyecto_tumbnail.png'},
       {url: 'src/assets/img/background_proyecto_dos.png',thumbnail:'src/assets/img/background_proyecto_dos_tumbnail.png'},
       {url: 'src/assets/img/background_proyecto.png',thumbnail:'src/assets/img/background_proyecto_tumbnail.png'},
       {url: 'src/assets/img/background_proyecto_dos.png',thumbnail:'src/assets/img/background_proyecto_dos_tumbnail.png'},
       {url: 'src/assets/img/background_proyecto.png',thumbnail:'src/assets/img/background_proyecto_tumbnail.png'},
       {url: 'src/assets/img/background_proyecto_dos.png',thumbnail:'src/assets/img/background_proyecto_dos_tumbnail.png'},
    ]

    // defineProps({

    //     imagen:{
    //         type:String,
    //     }
    // })
    const responsiveOptions = ref([
    {
        breakpoint: '1300px',
        numVisible: 4
    },
    {
        breakpoint:'920px',
        numVisible:3

    },
    {
        breakpoint: '575px',
        numVisible: 2
    },
    {
        breakpoint:'380px',
        numVisible: 1
    }
]);
</script>


<template>

    <div class="modal_proyecto">

        <div class="content_desc">

            <!-- galeria  imagenes -->
            <Galleria :value="imagenes" :responsiveOptions="responsiveOptions" :numVisible="4" :circular="true"  class="galleria"   >
                <template #item="slotProps">
                    <div class="content_img ">
                        <img :src="slotProps.item.url" :alt="slotProps.item.alt" />

                    </div>
                </template>
                <template #thumbnail="slotProps">
                    <div class=" ">
                        <img :src="slotProps.item.thumbnail" :alt="slotProps.item.alt" style="width: 100%"/>
                    </div>
                </template>
            </Galleria>

            <!-- Descripcion -->
            <div class="modal_proyecto__descripcion">

                <h2> {{ t("Descripción")  }}</h2>
                <p> Es un sistema de votaciones cuenta con
                    elecciones, candidatos, votantes y votos.   
                </p>

            </div>

        </div>

        <div class="content_info">

            <!-- opciones -->
            <div class="flex gap-3">
                <!-- Repositoy -->
                <Button  rounded class="p-1  text-white flex  align-middle gap-3" >
                    <p> Repositorio </p>
                    <Icon class="icon_github" icon="ant-design:github-filled"  />

                </Button>
                <!-- demo -->
                <Button label="Demo" rounded outlined class="p-2" />

            </div>


            <!-- tecnologia -->
            <div class=" content_info__tecnologias">

                <!-- Titulo -->
                <h2> Tecnologias </h2>
                <!-- Iconos tecnologia -->
                <div class="tecnologias_icons">
                    <Icon icon="logos:nodejs-icon" />
                    <Icon icon="devicon:vuejs" />
                    <Icon icon="devicon:sequelize" />
                    <Icon icon="logos:mysql" />
                </div>
            </div>


            <div class="content_info__aprendizaje">
                <!-- Titulo -->
                <h2> Aprendizaje Obtenido </h2>

                <!-- desc -->
                <p>
                    Implementacion de validaciones en 
                    el backend y en el frontend
                </p>
            </div>

            <div class="content_info__dificultades">
                <!-- Titulo -->
                <h2> Dificultades </h2>
                <!-- des -->
                <p>
                    Conexion entre backend y frontend
                </p>
            </div>

        </div>

    </div>

</template>

<style scoped>

.modal_proyecto{
    display: flex;
    gap: 2rem;
    background-color: var(--primary-color-text);
    padding: 2rem;
}
.content_desc{
    display: flex;
    gap: 2rem;
    flex-direction: column;
}

.content_img img{
    width: 30rem;
    height: 15rem;
}
.content_info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
}
.tecnologias_icons {
    margin-top: 1rem;
    display: flex;
    gap: .6rem;
    font-size: 2rem;
}
.tecnologias_icons svg{
    transition: all 0.2s ease-in;
}
.tecnologias_icons svg:hover{
    
    transform: translateY(-2px);
  
}
.icon_github{
    font-size: 1.8rem;
}

.content_info__aprendizaje p,
.content_info__dificultades p
{
    margin-top: .5rem;
}
@media (max-width: 980px) {

    .modal_proyecto{
        flex-direction: column;
        gap: 4rem;
    }
    .content_img{
        padding: 1rem;
    }
    .content_img img{
        height: 12rem;
        width: 20rem;
    }
  

}
</style>