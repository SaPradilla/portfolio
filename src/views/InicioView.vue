<script setup>
import { Icon } from '@iconify/vue';
import { useI18n } from 'vue-i18n';
import { usePrimeVue } from 'primevue/config';
import { ref,watch } from "vue";
import Presentacion from '../components/Presentacion.vue'
import SobreMi from '@/components/SobreMi.vue';
import Proyectos from '@/components/Proyectos.vue';
import Contacto from '@/components/Contacto.vue'
//state
const themeCheckend = ref(false)
const currentTheme = ref('lara-dark-amber');

const { t, locale } = useI18n();
const PrimeVue = usePrimeVue()

const currentLocale = ref(locale.value);


const toggleTheme = () => {
    themeCheckend.value = !themeCheckend.value
    let nextTheme = 'lara-light-amber';
    if (currentTheme.value === 'lara-light-amber') nextTheme = 'lara-dark-amber';
    else if (currentTheme.value === 'lara-dark-amber') nextTheme = 'lara-light-amber';
    PrimeVue.changeTheme(currentTheme.value, nextTheme, 'theme-link', () => { });
    currentTheme.value = nextTheme;
}
const handleSelectLocale = ()=>{

    currentLocale.value = currentLocale.value === 'ES' ? 'EN' : 'ES'

}

watch(currentLocale, (newLocale, oldLocale) => {
    locale.value = newLocale
});


</script>


    
<template>
    <div class="contenedor">


        <div class="botones-config">
            <button @click="toggleTheme" class="tema-boton">

                <Icon class="themeIcon"  v-if="themeCheckend"  icon="line-md:moon-filled-to-sunny-filled-loop-transition" />
                <Icon class="themeIcon"   v-else icon="line-md:moon-filled-loop" />

            </button>

            <button  @click="handleSelectLocale" class="tema-boton traducir">
                <Icon class="themeIcon traductor" icon="zmdi:translate" />
                <p> {{ currentLocale}}</p>
            </button>
           
        </div>

        <div class="contenedor-portafolio">

            <Presentacion/>
            <SobreMi class="sobremi"/>
            <Proyectos />
            <Contacto/>
            
        </div>
    </div>
</template>

<style scoped>

.contenedor-portafolio{
    width: 100vh;
    height: 100vh;
    margin: 0 auto;
}
.botones-config {
    position: fixed;
    right: 0;
    top: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
}

button.tema-boton {
    background: none;
    border: none;
    cursor: pointer;
    width: 58px;
}

.themeIcon {
    color: var(--primary-500);
    font-size: 2.8em;
}
.traducir{
    display: flex;
    align-items: center;
    flex-direction: column;
}
.traducir p{
    color: var(--primary-500);
}
.traductor {
    font-size: 2em;
    transition: all 0.3s ease;
}
.traductor:hover{
    font-size: 2.1em;
}
@media (max-width: 885px) {
    .contenedor-portafolio{
        width: 100%;
    }

  
}

</style>