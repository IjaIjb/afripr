import { AxiosGlobal } from "../../shared/axios";
import{ AxiosPromise} from "axios";
import configs from "../../../configs";
import { store } from "../../../store/store";



export class AdminLiveApis extends AxiosGlobal{
    


    addBanner(data:any): AxiosPromise<any> {
        return this.axios.post(`${configs.context}/banners/add`, data,{
            headers: { "Content-Type": "application/json","Accept":"application/json","Authorization":`Bearer ${store.getState().data.login.value.token}`,"Access-Control-Allow-Origin":"*" },
          });
    }

    getBanner(): AxiosPromise<Array<any>> {
        return this.axios.get(`${configs.context}/banners`, {
            headers: { "Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    addCourse(data:any): AxiosPromise<any> {
        return this.axios.post(`${configs.context}/courseprograms/add`, data,{
            headers: { "Content-Type": "application/json","Accept":"application/json","Authorization":`Bearer ${store.getState().data.login.value.token}`,"Access-Control-Allow-Origin":"*" },
          });
    }

    getCourses(): AxiosPromise<Array<any>> {
        return this.axios.get(`${configs.context}/courseprograms`, {
            headers: { "Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    updateCourse(id:any, data:any): AxiosPromise<Array<any>> {
        return this.axios.post(`${configs.context}/courseprograms/edit/${id}`,  data,{
            headers: { "Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    getCourseById(id:any): AxiosPromise<Array<any>> {
        return this.axios.get(`${configs.context}/courseprograms/view/${id}`, {
            headers: { "Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    deleteCourse(id: any): AxiosPromise<Array<any>> {
        return this.axios.delete(`${configs.context}/courseprograms/delete/${id}`, {
            headers: { "Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }


    // old psychometric
    addProgramType(data:any): AxiosPromise<any> {
        return this.axios.post(`${configs.context}/psychometricquestiontypes/add`, data,{
            headers: { "Content-Type": "application/json","Accept":"application/json","Authorization":`Bearer ${store.getState().data.login.value.token}`,"Access-Control-Allow-Origin":"*" },
          });
    }

    getProgramType(): AxiosPromise<Array<any>> {
        return this.axios.get(`${configs.context}/psychometricquestiontypes`, {
            headers: { "Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    updateProgramType(id:any, data:any): AxiosPromise<Array<any>> {
        return this.axios.post(`${configs.context}/psychometricquestiontypes/edit/${id}`,  data,{
            headers: { "Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    deleteProgramType(id: any): AxiosPromise<Array<any>> {
        return this.axios.delete(`${configs.context}/psychometricquestiontypes/delete/${id}`, {
            headers: { "Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    addSubCategory(data:any): AxiosPromise<any> {
        return this.axios.post(`${configs.context}/questionsubcategories/add`, data,{
            headers: { "Content-Type": "application/json","Accept":"application/json","Authorization":`Bearer ${store.getState().data.login.value.token}`,"Access-Control-Allow-Origin":"*" },
          });
    }

    getSubCategory(): AxiosPromise<Array<any>> {
        return this.axios.get(`${configs.context}/questionsubcategories`, {
            headers: { "Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }
    
    updateSubCategory(id:any, data:any): AxiosPromise<Array<any>> {
        return this.axios.post(`${configs.context}/questionsubcategories/edit/${id}`,  data,{
            headers: { "Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    createPsychometricQuestion(data:any): AxiosPromise<any> {
        return this.axios.post(`${configs.context}/questions/add`, data,{
            headers: { "Content-Type": "application/json","Accept":"application/json","Authorization":`Bearer ${store.getState().data.login.value.token}`,"Access-Control-Allow-Origin":"*" },
          });
    }

    getPsychometricQuestion(): AxiosPromise<Array<any>> {
        return this.axios.get(`${configs.context}/questions`, {
            headers: { "Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    updatePsychometricQuestion(id:any, data:any): AxiosPromise<Array<any>> {
        return this.axios.post(`${configs.context}/questions/edit/${id}`,  data,{
            headers: { "Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    deletePsychometricQuestion(id: any): AxiosPromise<Array<any>> {
        return this.axios.delete(`${configs.context}/questions/delete/${id}`, {
            headers: { "Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }


    createScoreSubmition(data:any): AxiosPromise<any> {
        return this.axios.post(`${configs.context}/questions/score`, data,{
            headers: { "Content-Type": "application/json","Accept":"application/json","Authorization":`Bearer ${store.getState().data.login.value.token}`,"Access-Control-Allow-Origin":"*" },
          });
    }


    // new psychometric test
        getAllTags(): AxiosPromise<Array<any>> {
        return this.axios.get(`${configs.context}/tags`, {
            headers: { "Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }
    
        addPsychometricTestCourse(data:any): AxiosPromise<any> {
        return this.axios.post(`${configs.context}/courses/add`, data,{
            headers: { "Content-Type": "application/json","Accept":"application/json","Authorization":`Bearer ${store.getState().data.login.value.token}`,"Access-Control-Allow-Origin":"*" },
          });
    }

        getAllPsychometricTestCourse(): AxiosPromise<Array<any>> {
        return this.axios.get(`${configs.context}/courses`, {
            headers: { "Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

           getPsychometricTestCourseById(id:any): AxiosPromise<Array<any>> {
        return this.axios.get(`${configs.context}/courses/view/${id}`, {
            headers: { "Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    updatePsychometricTestCourse(id:any, data:any): AxiosPromise<Array<any>> {
        return this.axios.post(`${configs.context}/courses/edit/${id}`,  data,{
            headers: { "Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

        deletePsychometricTestCourse(id: any): AxiosPromise<Array<any>> {
        return this.axios.delete(`${configs.context}/courses/delete/${id}`, {
            headers: { "Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

        addSectionPsychometric(data:any): AxiosPromise<any> {
        return this.axios.post(`${configs.context}/sections/add`, data,{
            headers: { "Content-Type": "application/json","Accept":"application/json","Authorization":`Bearer ${store.getState().data.login.value.token}`,"Access-Control-Allow-Origin":"*" },
          });
    }

    getAllSectionPsychometric(): AxiosPromise<Array<any>> {
        return this.axios.get(`${configs.context}/sections`, {
            headers: { "Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

       getSectionPsychometricById(id:any): AxiosPromise<Array<any>> {
        return this.axios.get(`${configs.context}/sections/view/${id}`, {
            headers: { "Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    updateSectionPsychometric(id:any, data:any): AxiosPromise<Array<any>> {
        return this.axios.post(`${configs.context}/sections/edit/${id}`,  data,{
            headers: { "Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

        deleteSectionPsychometric(id: any): AxiosPromise<Array<any>> {
        return this.axios.delete(`${configs.context}/sections/delete/${id}`, {
            headers: { "Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

     addMoreQuestionsPsychometric(data:any): AxiosPromise<any> {
        return this.axios.post(`${configs.context}/questions/create-full`, data,{
            headers: { "Content-Type": "application/json","Accept":"application/json","Authorization":`Bearer ${store.getState().data.login.value.token}`,"Access-Control-Allow-Origin":"*" },
          });
    }

    getAllQuestionsPsychometric(): AxiosPromise<Array<any>> {
        return this.axios.get(`${configs.context}/newquestions`, {
            headers: { "Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

       getQuestionsPsychometricBySectionId(id:any): AxiosPromise<Array<any>> {
        return this.axios.get(`${configs.context}/sections/${id}/questions`, {
            headers: { "Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    updateQuestionsPsychometric(id:any, data:any): AxiosPromise<Array<any>> {
        return this.axios.post(`${configs.context}/newquestions/edit/${id}`,  data,{
            headers: { "Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    deleteQuestionsPsychometric(id: any): AxiosPromise<Array<any>> {
        return this.axios.delete(`${configs.context}/newquestions/delete/${id}`, {
            headers: { "Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

        answerPsychometricQuestion(data:any): AxiosPromise<any> {
        return this.axios.post(`${configs.context}/test/submit`, data,{
            headers: { "Content-Type": "application/json","Accept":"application/json","Authorization":`Bearer ${store.getState().data.login.value.token}`,"Access-Control-Allow-Origin":"*" },
          });
    }


    createBlog(data:any): AxiosPromise<any> {
        return this.axios.post(`${configs.context}/blogs/add`, data,{
            headers: { "Content-Type": "application/json","Accept":"application/json","Authorization":`Bearer ${store.getState().data.login.value.token}`,"Access-Control-Allow-Origin":"*" },
          });
    }

    getAllBlogs(): AxiosPromise<Array<any>> {
        return this.axios.get(`${configs.context}/blogs`, {
            headers: { "Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    getBlogById(id:any): AxiosPromise<Array<any>> {
        return this.axios.get(`${configs.context}/blogs/view/${id}`, {
            headers: { "Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    updateBlog(id:any, data:any): AxiosPromise<Array<any>> {
        return this.axios.post(`${configs.context}/blogs/edit/${id}`,  data,{
            headers: { "Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    deleteBlog(id: any): AxiosPromise<Array<any>> {
        return this.axios.delete(`${configs.context}/blogs/delete/${id}`, {
            headers: { "Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    createPayment(data:any): AxiosPromise<any> {
        return this.axios.post(`${configs.context}/payments/add`, data,{
            headers: { "Content-Type": "application/json","Accept":"application/json","Authorization":`Bearer ${store.getState().data.login.value.token}`,"Access-Control-Allow-Origin":"*" },
          });
    }

    getAllPayments(): AxiosPromise<Array<any>> {
        return this.axios.get(`${configs.context}/payments`, {
            headers: { "Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    getPaymentById(id:any): AxiosPromise<Array<any>> {
        return this.axios.get(`${configs.context}/payments/view/${id}`, {
            headers: { "Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    updatePayment(id:any, data:any): AxiosPromise<Array<any>> {
        return this.axios.post(`${configs.context}/payments/edit/${id}`,  data,{
            headers: { "Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    deletePayment(id: any): AxiosPromise<Array<any>> {
        return this.axios.delete(`${configs.context}/payments/delete/${id}`, {
            headers: { "Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

}