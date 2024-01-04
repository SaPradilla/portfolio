<script setup lang="ts">
import Ripple from 'primevue/ripple';
import { Icon } from '@iconify/vue';
import Button from 'primevue/button';
import { Typed } from "@duskmoon/vue3-typed-js";
import type { TypedOptions } from "@duskmoon/vue3-typed-js";
import { useI18n } from 'vue-i18n';
import { ref, onMounted, watch } from "vue";

const { t, locale } = useI18n();

const diseno = ref(t("Diseñador"))
const programador = ref(t("Programador"))
const analista = ref(t("Analista"))
const showTyped = ref(true);

onMounted(() => {
    diseno.value = t("Diseñador")
    programador.value = t("Programador")
    analista.value = t("Analista")
    showTyped.value = true

})
const options: TypedOptions = {
    strings: ['Diseñador', 'Analista', 'Desarrollador de Software'],
    loop: true,
    typeSpeed: 20,
    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true,
}
watch(locale, () => {
    diseno.value = t("Diseñador")
    programador.value = t("Programador")
    analista.value = t("Analista")
    options.strings = []
    options.strings = [diseno.value, analista.value, programador.value];

    // Ocultar y mostrar el componente Typed para recrearlo
    showTyped.value = false;

    // Esperar a que termine la transición antes de mostrar de nuevo Typed
    setTimeout(() => {
        showTyped.value = true;
    }, 500);

});

</script>

<template>
    <div class="blur"></div>
    <div class="contenedor ">
        <div class="contenedor-presentacion">


            <div class="descripcion">

                <div class="nombre">
                    <h1>
                        <span>{{ t("Saludo") }}</span>
                        SaPradilla
                    </h1>
                </div>

            </div>
            <div class="profesion">

                <Typed v-if="showTyped" :options="options">
                    <h2 class="typing"></h2>
                </Typed>

            </div>
            <div class="acciones">
                <Button class="accion" :label="t('Contacto')" raised outlined />
                <Button class="accion" label="CV" raised />
            </div>
        </div>
        <div class="iconos">
            <div class="ico" >

                <!-- <a href="https://github.com/SaPradilla" target="_blank"> -->
                <a href="#"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" width="57" height="55" viewBox="0 0 57 55" >
                        <path
                            d="M28.5 0C24.7573 0 21.0513 0.728968 17.5935 2.14528C14.1357 3.5616 10.9939 5.63752 8.34746 8.25453C3.00267 13.5398 0 20.7082 0 28.1827C0 40.6395 8.1795 51.208 19.494 54.9563C20.919 55.1818 21.375 54.3081 21.375 53.5472C21.375 52.899 21.375 51.1235 21.375 48.7843C13.4805 50.4753 11.799 45.0078 11.799 45.0078C10.488 41.7386 8.6355 40.865 8.6355 40.865C6.042 39.1176 8.835 39.174 8.835 39.174C11.685 39.3713 13.1955 42.0768 13.1955 42.0768C15.675 46.3606 19.8645 45.0924 21.489 44.416C21.7455 42.5841 22.4865 41.3441 23.2845 40.6395C16.9575 39.9349 10.317 37.5112 10.317 26.7736C10.317 23.6453 11.4 21.1371 13.2525 19.1361C12.9675 18.4315 11.97 15.5005 13.5375 11.6958C13.5375 11.6958 15.9315 10.9349 21.375 14.5705C23.6265 13.9505 26.0775 13.6404 28.5 13.6404C30.9225 13.6404 33.3735 13.9505 35.625 14.5705C41.0685 10.9349 43.4625 11.6958 43.4625 11.6958C45.03 15.5005 44.0325 18.4315 43.7475 19.1361C45.6 21.1371 46.683 23.6453 46.683 26.7736C46.683 37.5394 40.014 39.9068 33.6585 40.6113C34.6845 41.485 35.625 43.2041 35.625 45.8251C35.625 49.6016 35.625 52.6454 35.625 53.5472C35.625 54.3081 36.081 55.21 37.5345 54.9563C48.849 51.1799 57 40.6395 57 28.1827C57 24.4817 56.2628 20.817 54.8306 17.3977C53.3983 13.9784 51.299 10.8715 48.6525 8.25453C46.0061 5.63752 42.8643 3.5616 39.4065 2.14528C35.9487 0.728968 32.2427 0 28.5 0Z"
                            />
                    </svg>
                </a>
            </div>
            <div class="ico">

                <a href="mailto:santypradilla1985@gmail.com">
                    <svg xmlns="http://www.w3.org/2000/svg" width="57" height="45" viewBox="0 0 57 45" fill="none">
                        <path
                            d="M51.3 11.25L28.5 25.3125L5.7 11.25V5.625L28.5 19.6875L51.3 5.625M51.3 0H5.7C2.5365 0 0 2.50312 0 5.625V39.375C0 40.8668 0.600534 42.2976 1.66949 43.3525C2.73845 44.4074 4.18827 45 5.7 45H51.3C52.8117 45 54.2615 44.4074 55.3305 43.3525C56.3995 42.2976 57 40.8668 57 39.375V5.625C57 2.50312 54.435 0 51.3 0Z"
                            />
                    </svg>
                </a>
            </div>
        </div>
    </div>
</template>

<style  scoped>
/* background: linear-gradient(180deg, rgb(90, 15, 195) 0%, rgb(90, 15, 195) 100%); */
/* .blur{
    z-index: 2;
    background-color: var(--primary-500);
    border-radius: 164px/160px;
    filter: blur(237px);
    height: 200px;
    left: 0;
    position: absolute;
    top: 600px;
    width: 200px;
    opacity: 1;
}  */
div.typed-element {
    display: flex;
    align-items: center;
    justify-content: left;
}

svg {
    transition: all 0.4s ease;
    cursor: pointer;
}

path {
    fill: var(--primary-500);
}

svg path {
    box-shadow: 0px 0px 50px -21px #ffffff;

}

svg:hover {
    transform: scale(103%);
}

svg:hover path {
    fill: var(--primary-600);
}

.iconos {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
}

.contenedor {

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

}

.contenedor-presentacion {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
}

.acciones {
    display: flex;
    gap: 10px;
}

.accion {
    border-radius: 50px;
    width: 10rem;
    height: 2rem;
}

h1 {
    font-size: 5em;
}

h1 span {
    color: var(--primary-500);
    text-shadow: 0px 0px 50px #f59f0b5d;
}

h2 {
    font-size: 2.5em;
    color: #868686;
}

.profesion {
    height: 80px;
}

@media (max-width: 885px) {
    h1 {
        font-size: 4em;
        text-align: center;

    }

    h2 {
        text-align: center;
        font-size: 1.7em;
    }

    .contenedor {
        height: 100%;
        flex-direction: column;
    }

    .contenedor-presentacion {
        align-items: center;
        justify-content: center;
    }

    .iconos {
        flex-direction: row;
        position: absolute;
        bottom: 0;
        margin-bottom: 10vh;
    }

    .profesion {
        height: 50px;
    }
}</style>