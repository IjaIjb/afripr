import { AxiosPromise } from "axios";
import configs from "../../configs";
import { AdminLiveApis } from "../live/adminLive/adminLiveApis";




export class AdminApis {
    private static adminLiveApis: AdminLiveApis = new AdminLiveApis();
    
   
    static addBanner(data: any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminLiveApis.addBanner(data);
        }
    }
    
    static getBanner(): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminLiveApis.getBanner();
        }
    }
    static addCourse(data: any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminLiveApis.addCourse(data);
        }
    }

    static getCourses(): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminLiveApis.getCourses();
        }
    }
    static updateCourse(id:any, data:any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminLiveApis.updateCourse(id, data);
        }
    } 

    static getCourseById(id:any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminLiveApis.getCourseById(id);
        }
    } 

    static deleteCourse(id:any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminLiveApis.deleteCourse(id);
        }
    } 

    static addProgramType(data: any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminLiveApis.addProgramType(data);
        }
    }

    static getProgramType(): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminLiveApis.getProgramType();
        }
    }

    static updateProgramType(id:any, data:any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminLiveApis.updateProgramType(id, data);
        }
    } 

    static deleteProgramType(id:any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminLiveApis.deleteProgramType(id);
        }
    } 

    static addSubCategory(data: any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminLiveApis.addSubCategory(data);
        }
    }

    static getSubCategory(): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminLiveApis.getSubCategory();
        }
    }

    static updateSubCategory(id:any, data:any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminLiveApis.updateSubCategory(id, data);
        }
    }

    static createPsychometricQuestion(data: any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminLiveApis.createPsychometricQuestion(data);
        }
    }

    static getPsychometricQuestion(): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminLiveApis.getPsychometricQuestion();
        }
    }

    static updatePsychometricQuestion(id:any, data:any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminLiveApis.updatePsychometricQuestion(id, data);
        }
    } 

    static deletePsychometricQuestion(id:any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminLiveApis.deletePsychometricQuestion(id);
        }
    } 

    static createScoreSubmition(data: any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminLiveApis.createScoreSubmition(data);
        }
    }

    static createBlog(data: any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminLiveApis.createBlog(data);
        }
    }

    static getAllBlogs(): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminLiveApis.getAllBlogs();
        }
    }

    static getBlogById(id:any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminLiveApis.getBlogById(id);
        }
    } 

    static updateBlog(id:any, data:any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminLiveApis.updateBlog(id, data);
        }
    } 

    static deleteBlog(id:any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminLiveApis.deleteBlog(id);
        }
    } 

    static createPayment(data: any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminLiveApis.createPayment(data);
        }
    }

    static getAllPayments(): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminLiveApis.getAllPayments();
        }
    }

    static getPaymentById(id:any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminLiveApis.getPaymentById(id);
        }
    } 

    static updatePayment(id:any, data:any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminLiveApis.updatePayment(id, data);
        }
    } 

    static deletePayment(id:any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminLiveApis.deletePayment(id);
        }
    } 
}