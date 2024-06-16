<script setup>
    import { useI18n } from 'vue-i18n';
    import { Icon } from '@iconify/vue';
    import Button from 'primevue/button';
    import Galleria from 'primevue/galleria';
    import {onMounted, defineEmits,ref } from "vue";
    import { useProyectos } from '@/stores/proyectos';
    import { formatearFecha } from "../helpers/formatDate";
    const proyectos = useProyectos()

    const { t, locale } = useI18n();
    

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

    defineEmits(['closeCallback'])
</script>

    <template>

        <div class="modal_proyecto">
            <div class="  " >
                <Icon @click="$emit('closeCallback')" class=" absolute  right-1 top-1 text-2xl cursor-pointer z-10"  icon="mdi:close-octagon" />
            </div>
            <div class="content_desc">

                <!-- galeria  imagenes -->
                <Galleria :value="proyectos.currentProyect.images" :responsiveOptions="responsiveOptions" :numVisible="3" :circular="true"  class="galleria"   >
                    <template #item="slotProps">
                        <div class="content_img ">
                            <img :src="slotProps.item.img" :alt="proyectos.currentProyect.title" />
                        </div>
                    </template>
                    <template #thumbnail="slotProps">
                        <div class=" ">
                            <img :src="slotProps.item.thumbnail" :alt="proyectos.currentProyect.title" style="width: 100%"/>
                        </div>
                    </template>
                </Galleria>

                <!-- Descripcion -->
                <div class="modal_proyecto__descripcion">
                    <h2> {{ t("Descripción")  }}</h2>
                    
                    <p> {{ proyectos.currentProyect.description}}
                    </p>
                    <div class="flex items-center gap-2 mt-4">

                        <strong >
                            {{ 
                                proyectos.currentProyect.end_date 
                                ? formatearFecha(proyectos.currentProyect.end_date) 
                                : 'En proceso'
                            }} 
                            
                        </strong>

                        <Icon icon="ic:twotone-date-range" />
                    </div>
                </div>

            </div>
            <hr>
            <div class="content_info">

                <!-- opciones -->
                <div class="flex gap-3">
                    <!-- Repository -->
                    <a :href="proyectos.currentProyect.repository_url"  target="_blank">
                        <Button rounded class="p-1  text-white flex  align-middle gap-3" >
                            <p> Repositorio </p>
                            <Icon class="icon_github" icon="ant-design:github-filled"  />
                        </Button>                
                    </a>


                    <!-- demo -->
                    <Button label="Demo" rounded outlined class="p-2" />

                </div>


                <!-- tecnologia -->
                <div class=" content_info__tecnologias">

                    <!-- Titulo -->
                    <h2> Tecnologias </h2>

                    <!-- Iconos tecnologia -->
                    <div class="tecnologias_icons">
                        <div class="icon" v-for="icon in proyectos.currentProyect.tecnologies">
                            <Icon :icon="icon" />                        
                        </div>
                    </div>
                </div>


                <div class="content_info__aprendizaje">
                    <!-- Titulo -->
                    <h2> Aprendizaje Obtenido </h2>

                    <!-- desc -->
                    <p>
                      {{ proyectos.currentProyect.learning_gained }}
                    </p>
                </div>

            <div class="content_info__dificultades">
                <!-- Titulo -->
                <h2> Dificultades </h2>
                <!-- des -->
                <p>
                    {{  proyectos.currentProyect.difficulties  }}
                </p>
            </div>

        </div>

    </div>

</template>

<style scoped>
a{
    text-decoration: none
}
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
hr{
    display: none;
    color: #ccc;
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
        gap: 2rem;
        overflow-y: auto;
    }
    hr{
        display: inherit
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