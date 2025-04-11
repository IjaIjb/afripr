import { AxiosGlobal } from "../../shared/axios";
import{ AxiosPromise} from "axios";
import configs from "../../../configs";
import { store } from "../../../store/store";



export class AdminLiveApis extends AxiosGlobal{
    


    addBanner(data:any): AxiosPromise<any> {
        return this.axios.post(`${configs.context}/banners/add`, data,{
            headers: { "Content-Type": "aplication/json","Accept":"aplication/json","Authorization":`Bearer ${store.getState().data.login.value.token}`,"Access-Control-Allow-Origin":"*" },
          });
    }

    getBanner(): AxiosPromise<Array<any>> {
        return this.axios.get(`${configs.context}/banners`, {
            headers: { "Content-Type": "aplication/json", "Accept": "aplication/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    addCourse(data:any): AxiosPromise<any> {
        return this.axios.post(`${configs.context}/courseprograms/add`, data,{
            headers: { "Content-Type": "aplication/json","Accept":"aplication/json","Authorization":`Bearer ${store.getState().data.login.value.token}`,"Access-Control-Allow-Origin":"*" },
          });
    }

    getCourses(): AxiosPromise<Array<any>> {
        return this.axios.get(`${configs.context}/courseprograms`, {
            headers: { "Content-Type": "aplication/json", "Accept": "aplication/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    updateCourse(id:any, data:any): AxiosPromise<Array<any>> {
        return this.axios.post(`${configs.context}/courseprograms/edit/${id}`,  data,{
            headers: { "Content-Type": "aplication/json", "Accept": "aplication/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    getCourseById(id:any): AxiosPromise<Array<any>> {
        return this.axios.get(`${configs.context}/courseprograms/view/${id}`, {
            headers: { "Content-Type": "aplication/json", "Accept": "aplication/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    deleteCourse(id: any): AxiosPromise<Array<any>> {
        return this.axios.delete(`${configs.context}/courseprograms/delete/${id}`, {
            headers: { "Content-Type": "aplication/json", "Accept": "aplication/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    addProgramType(data:any): AxiosPromise<any> {
        return this.axios.post(`${configs.context}/psychometricquestiontypes/add`, data,{
            headers: { "Content-Type": "aplication/json","Accept":"aplication/json","Authorization":`Bearer ${store.getState().data.login.value.token}`,"Access-Control-Allow-Origin":"*" },
          });
    }

    getProgramType(): AxiosPromise<Array<any>> {
        return this.axios.get(`${configs.context}/psychometricquestiontypes`, {
            headers: { "Content-Type": "aplication/json", "Accept": "aplication/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    updateProgramType(id:any, data:any): AxiosPromise<Array<any>> {
        return this.axios.post(`${configs.context}/psychometricquestiontypes/edit/${id}`,  data,{
            headers: { "Content-Type": "aplication/json", "Accept": "aplication/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    deleteProgramType(id: any): AxiosPromise<Array<any>> {
        return this.axios.delete(`${configs.context}/psychometricquestiontypes/delete/${id}`, {
            headers: { "Content-Type": "aplication/json", "Accept": "aplication/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    addSubCategory(data:any): AxiosPromise<any> {
        return this.axios.post(`${configs.context}/questionsubcategories/add`, data,{
            headers: { "Content-Type": "aplication/json","Accept":"aplication/json","Authorization":`Bearer ${store.getState().data.login.value.token}`,"Access-Control-Allow-Origin":"*" },
          });
    }

    getSubCategory(): AxiosPromise<Array<any>> {
        return this.axios.get(`${configs.context}/questionsubcategories`, {
            headers: { "Content-Type": "aplication/json", "Accept": "aplication/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }
    
    updateSubCategory(id:any, data:any): AxiosPromise<Array<any>> {
        return this.axios.post(`${configs.context}/questionsubcategories/edit/${id}`,  data,{
            headers: { "Content-Type": "aplication/json", "Accept": "aplication/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    createPsychometricQuestion(data:any): AxiosPromise<any> {
        return this.axios.post(`${configs.context}/questions/add`, data,{
            headers: { "Content-Type": "aplication/json","Accept":"aplication/json","Authorization":`Bearer ${store.getState().data.login.value.token}`,"Access-Control-Allow-Origin":"*" },
          });
    }

    getPsychometricQuestion(): AxiosPromise<Array<any>> {
        return this.axios.get(`${configs.context}/questions`, {
            headers: { "Content-Type": "aplication/json", "Accept": "aplication/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    updatePsychometricQuestion(id:any, data:any): AxiosPromise<Array<any>> {
        return this.axios.post(`${configs.context}/questions/edit/${id}`,  data,{
            headers: { "Content-Type": "aplication/json", "Accept": "aplication/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    deletePsychometricQuestion(id: any): AxiosPromise<Array<any>> {
        return this.axios.delete(`${configs.context}/questions/delete/${id}`, {
            headers: { "Content-Type": "aplication/json", "Accept": "aplication/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }


    createScoreSubmition(data:any): AxiosPromise<any> {
        return this.axios.post(`${configs.context}/questions/score`, data,{
            headers: { "Content-Type": "aplication/json","Accept":"aplication/json","Authorization":`Bearer ${store.getState().data.login.value.token}`,"Access-Control-Allow-Origin":"*" },
          });
    }

    createBlog(data:any): AxiosPromise<any> {
        return this.axios.post(`${configs.context}/blogs/add`, data,{
            headers: { "Content-Type": "aplication/json","Accept":"aplication/json","Authorization":`Bearer ${store.getState().data.login.value.token}`,"Access-Control-Allow-Origin":"*" },
          });
    }

    getAllBlogs(): AxiosPromise<Array<any>> {
        return this.axios.get(`${configs.context}/blogs`, {
            headers: { "Content-Type": "aplication/json", "Accept": "aplication/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    getBlogById(id:any): AxiosPromise<Array<any>> {
        return this.axios.get(`${configs.context}/blogs/view/${id}`, {
            headers: { "Content-Type": "aplication/json", "Accept": "aplication/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    updateBlog(id:any, data:any): AxiosPromise<Array<any>> {
        return this.axios.post(`${configs.context}/blogs/edit/${id}`,  data,{
            headers: { "Content-Type": "aplication/json", "Accept": "aplication/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    deleteBlog(id: any): AxiosPromise<Array<any>> {
        return this.axios.delete(`${configs.context}/blogs/delete/${id}`, {
            headers: { "Content-Type": "aplication/json", "Accept": "aplication/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    createPayment(data:any): AxiosPromise<any> {
        return this.axios.post(`${configs.context}/payments/add`, data,{
            headers: { "Content-Type": "aplication/json","Accept":"aplication/json","Authorization":`Bearer ${store.getState().data.login.value.token}`,"Access-Control-Allow-Origin":"*" },
          });
    }

    getAllPayments(): AxiosPromise<Array<any>> {
        return this.axios.get(`${configs.context}/payments`, {
            headers: { "Content-Type": "aplication/json", "Accept": "aplication/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    getPaymentById(id:any): AxiosPromise<Array<any>> {
        return this.axios.get(`${configs.context}/payments/view/${id}`, {
            headers: { "Content-Type": "aplication/json", "Accept": "aplication/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    updatePayment(id:any, data:any): AxiosPromise<Array<any>> {
        return this.axios.post(`${configs.context}/payments/edit/${id}`,  data,{
            headers: { "Content-Type": "aplication/json", "Accept": "aplication/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    deletePayment(id: any): AxiosPromise<Array<any>> {
        return this.axios.delete(`${configs.context}/payments/delete/${id}`, {
            headers: { "Content-Type": "aplication/json", "Accept": "aplication/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

}