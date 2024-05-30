import api from "@/api/axios";

export default {

    getProyects(){
        return api.get('/proyects');
    }

}