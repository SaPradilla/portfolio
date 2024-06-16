<script setup>
import { ref } from "vue";
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();
import Textarea from 'primevue/textarea';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
const contactInfo = ref({
    name:'',
    email:'',
    message:'',
})



</script>

<template>

    <section id="contact" class="contact flex flex-col gap-10 mb-44">

        <h1> {{ t("Contacto") }} </h1>

        <div class="texto contact_texto">
            <p>
                {{ t('Contacto_texto') }}
            </p>
            <p>
                {{ t('Contacto_texto_dos') }}
            </p>
        </div>


        <div class="contact_form flex flex-col gap-5 justify-center mt-11">

            <div class=" flex items-center  gap-5 ">
                <!-- Name -->
                <div class="input flex flex-col gap-2">
                    <label for="username">{{  t('Nombre') }}</label>
                    <InputText class=" h-10 "  id="name" v-model="contactInfo.name" aria-describedby="contactInfo-name" />
                </div>
                <!-- Email -->
                <div class="input flex flex-col gap-2">
                    <label for="username"> {{ t('Email')  }}</label>
                    <InputText class=" h-10 "  id="email" v-model="contactInfo.email" aria-describedby="contactInfo-email" />
                </div>
            </div>
            <!-- Message -->
            <div class="flex flex-col gap-2">
                <label for="username">{{ t('Mensaje') }}</label>
                <Textarea class="h-44" v-model="contactInfo.message"  />
            </div>

            <Button class=" contact_form__button w-24 h-10 " :label="t('Enviar')" raised  />
            
        </div>

    </section>

</template>

<style scoped>

.contact_texto{

    gap: 0;

}
@media (max-width: 885px) {
    .contact{
        text-align: center;
    }
    .contact_texto{
        margin: 0 auto;
    }
    .contact_form{
        margin: 0 auto;
    }
    .contact_form__button{
        margin: 0 auto
    }

    .input{

        width: 10rem;

    }
}
</style>