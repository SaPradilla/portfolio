import api from '@/api/axios';

export default {

    loginUser(pwd){
        return api.post('/pradi/login',pwd)
    },
    validateAndExtractToken(token){
        return api.post('/verify',token)
    },
}