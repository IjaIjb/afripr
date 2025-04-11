import { AxiosGlobal } from "../../shared/axios";
import{ AxiosPromise} from "axios";
import configs from "../../../configs";
import { store } from "../../../store/store";



export class UserLiveApis extends AxiosGlobal{
    
    loginUser(data:any): AxiosPromise<any> {
        return this.axios.post(`${configs.context}/${configs.apiList.LOGIN}`, data,
            {
                headers: {
                  "Content-Type": "application/json",
                },
              }
        );
    }


    registerUser(data:any): AxiosPromise<any> {
        return this.axios.post(`${configs.context}/${configs.apiList.REGISTER}`, data);
    } 

    getUserById(id:any): AxiosPromise<Array<any>> {
        return this.axios.get(`${configs.context}/users/view/${id}`, {
            headers: { "Content-Type": "aplication/json", "Accept": "aplication/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    forgotPassword(data: any): AxiosPromise<any> {
        return this.axios.post(`${configs.context}/auth/forgotpassword`, data);
    }

    
    // resendVerificationCode(data: any): AxiosPromise<any> {
    //     return this.axios.post(`${configs.context}/auth/resend-code`, data);
    // }

    resetPassword(data:any): AxiosPromise<any> {
        return this.axios.post(`${configs.context}/auth/resetpassword`, data);
    }

    
    logout(data:any): AxiosPromise<any> {
        return this.axios.post(`${configs.context}/logout`, data,{
            headers: { "Content-Type": "aplication/json","Accept":"aplication/json","Authorization":`Bearer ${store.getState().data.login.value.token}`,"Access-Control-Allow-Origin":"*" },
          });
    }
    
    applyEduSilver(data:any): AxiosPromise<any> {
        return this.axios.post(`${configs.context}/edusilverplans/add`, data,{
            headers: { "Content-Type": "aplication/json", "Accept":"aplication/json","Authorization":`Bearer ${store.getState().data.login.value.token}`,"Access-Control-Allow-Origin":"*" },
          });
    }

    getAllEduSilver(): AxiosPromise<Array<any>> {
        return this.axios.get(`${configs.context}/edusilverplans`, {
            headers: { "Content-Type": "aplication/json", "Accept": "aplication/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    applyEduGold(data:any): AxiosPromise<any> {
        return this.axios.post(`${configs.context}/edugoldplans/add`, data,{
            headers: { "Content-Type": "aplication/json", "Accept":"aplication/json","Authorization":`Bearer ${store.getState().data.login.value.token}`,"Access-Control-Allow-Origin":"*" },
          });
    }

        getAllEduGold(): AxiosPromise<Array<any>> {
            return this.axios.get(`${configs.context}/edugoldplans`, {
                headers: { "Content-Type": "aplication/json", "Accept": "aplication/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
            });
        }

        applyEduPremiumLoan(data:any): AxiosPromise<any> {
            return this.axios.post(`${configs.context}/edupremiumloanplans/add`, data,{
                headers: { "Content-Type": "aplication/json", "Accept":"aplication/json","Authorization":`Bearer ${store.getState().data.login.value.token}`,"Access-Control-Allow-Origin":"*" },
              });
        }

        getAllEduPremiumLoan(): AxiosPromise<Array<any>> {
            return this.axios.get(`${configs.context}/edupremiumloanplans`, {
                headers: { "Content-Type": "aplication/json", "Accept": "aplication/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
            });
        }

        applyEduPremiumSchoolProcessing(data:any): AxiosPromise<any> {
            return this.axios.post(`${configs.context}/edupremiumschoolplans/add`, data,{
                headers: { "Content-Type": "aplication/json", "Accept":"aplication/json","Authorization":`Bearer ${store.getState().data.login.value.token}`,"Access-Control-Allow-Origin":"*" },
              });
        }

        getAllEduPremiumSchoolProcessing(): AxiosPromise<Array<any>> {
            return this.axios.get(`${configs.context}/edupremiumschoolplans`, {
                headers: { "Content-Type": "aplication/json", "Accept": "aplication/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
            });
        }
}