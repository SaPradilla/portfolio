import { defineStore } from "pinia";
import { ref } from "vue";
import UserService from "@/services/User";
import router from "@/router";

export const useUser = defineStore('user',()=>{


    const token = ref(null);
    const id = ref(null)

    const login = async(pwd)=>{

        try {
            const resp = await UserService.loginUser(pwd);
            return resp.data.data
            
        } catch (error) {
            throw error;
        }

    }

    const saveToken = async(tokenSaved)=>{
        
        try {

            localStorage.setItem('token',tokenSaved);
            const tokenLocal = localStorage.getItem('token');
            token.value = tokenLocal;
            
            const tokenExtract = await validateAndExtract({token:tokenSaved});
            console.log(tokenExtract);
            id.value = tokenExtract.id

            
        } catch (error) {
            // console.log(error);
            throw error;
        }

    }

    const validateAndExtract = async(token)=>{
        try {
            const extractToken = await UserService.validateAndExtractToken(token);
            return extractToken.data;

        } catch (error) {
            throw error;
        }
    }

    const logout = ()=>{
        localStorage.removeItem('token');
        token.value = null;
        id.value = null;
    }

    return{
        token,
        id,
        validateAndExtract,
        login,
        saveToken,
        logout,
    }
})