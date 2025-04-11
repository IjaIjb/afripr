import { AxiosPromise } from "axios";
import configs from "../../configs";

import { UserLiveApis } from "../live/userLive/userLiveApis";



export class UserApis {
    private static authLiveApis: UserLiveApis = new UserLiveApis();
    
    static login(data: any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.authLiveApis.loginUser(data);
        }
    }  

    static register(data: any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.authLiveApis.registerUser(data);
        }
    }  

    static getUserById(id:any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.authLiveApis.getUserById(id);
        }
    } 

    static forgotPassword(data: any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.authLiveApis.forgotPassword(data);
        }
    }

    static resetPassword(data: any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.authLiveApis.resetPassword(data);
        }
    }

    static applyEduSilver(data: any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.authLiveApis.applyEduSilver(data);
        }
    }

    static getAllEduSilver(): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.authLiveApis.getAllEduSilver();
        }
    }

    static applyEduGold(data: any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.authLiveApis.applyEduGold(data);
        }
    }

    static getAllEduGold(): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.authLiveApis.getAllEduGold();
        }
    }

    static applyEduPremiumLoan(data: any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.authLiveApis.applyEduPremiumLoan(data);
        }
    }

    static getAllEduPremiumLoan(): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.authLiveApis.getAllEduPremiumLoan();
        }
    }

    
    static applyEduPremiumSchoolProcessing(data: any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.authLiveApis.applyEduPremiumSchoolProcessing(data);
        }
    }

    static getAllEduPremiumSchoolProcessing(): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.authLiveApis.getAllEduPremiumSchoolProcessing();
        }
    }

    static logout(data: any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.authLiveApis.logout(data);
        }
    }

    


}