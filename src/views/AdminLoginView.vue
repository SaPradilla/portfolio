<script setup>
import { ref,reactive } from "vue";
import router from '@/router';

import Password from 'primevue/password';
import Button from 'primevue/button';
import { Icon } from "@iconify/vue";
import { useUser } from '@/stores/user';

const pwd = ref('contrasenaNueva');
const isLoading = ref(false);
const error =  reactive({
    exists:false,
    msg:null
})


const UserStore = useUser() 

const back =  ()=>{
    router.push('/')
}


const loginUser =  async()=>{
    if(pwd.value !== ''){
        isLoading.value = true
        try {
            // crear token
            const token =  await UserStore.login({pwd:pwd.value})
            // guardarlo
            await UserStore.saveToken(token)
            // redirigir a admin
            router.push('/pradi/zone')

        } catch (errorHttp) {
            error.exists = true
            error.msg = 'Access not allowed'
        } finally{
            isLoading.value = false;
            if(error.exists){
                setTimeout(()=>{
                    error.exists = false;
                },2000);
            }
        }

    }

}

</script>


<template>

    <div class="admin">

        <div class="admin__title">
            <h1>Pradi Zone</h1>
            <Icon icon="material-symbols:shield-lock-sharp" color="#fbbf24" />
        </div>

        
        <div class="admin__fields">
            <div class="admin__fields__error">
                <p v-if="error.exists" > {{ error.msg }} </p>
            </div>
            <Password  v-model="pwd" name="pwd" :feedback="false" placeholder="Secret ^_~  ?" :disabled="isLoading"/>
        </div>
        <div class="admin__actions">
            <Button class="admin__buttons" label="Back" outlined  rounded @click="back"  :disabled="isLoading" />
            <Button class="admin__buttons" :label="isLoading ? 'Loading..' : 'Go'" :loading="isLoading" raised rounded @click="loginUser" :disabled="isLoading" />

        </div>
    </div>

</template>

<style scoped>

.admin{
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;
    justify-content: center;
    gap: 2rem;

}
.admin__title{
    display: flex;
    gap: 10px;
    align-items: center;
    
}

.admin__title svg{

    height: 5rem;
    width: 5rem;
    filter:  drop-shadow(0px 0px 50px #f59f0b5d); 
}
.admin__fields{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}
.admin__fields__error{
    height: 1rem;
}
.admin__fields__error p {
    color: var(--red-600);
}
.input__pwd{
    /* height: ; */
    width: 20rem;
    padding: 1rem;
}


.admin__actions{
    display: flex;
    gap: 10px;
}

.admin__buttons{
    width: 8rem;
    padding: .3rem;
}


@media (max-width: 885px) {
    h1 {
        font-size: 3em;
        text-align: center;

    }
    .admin__title svg{

        height: 3rem;
        width: 3rem;
        filter:  drop-shadow(0px 0px 50px #f59f0b5d); 
    }
    
}
</style>