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

    // old psychometric
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

    // new psychometric
        static getAllTags(): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminLiveApis.getAllTags();
        }
    }

    static addPsychometricTestCourse(data: any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminLiveApis.addPsychometricTestCourse(data);
        }
    }

        static getAllPsychometricTestCourse(): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminLiveApis.getAllPsychometricTestCourse();
        }
    }

           static getPsychometricTestCourseById(id:any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminLiveApis.getPsychometricTestCourseById(id);
        }
    } 

    static updatePsychometricTestCourse(id:any, data:any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminLiveApis.updatePsychometricTestCourse(id, data);
        }
    } 

    static deletePsychometricTestCourse(id:any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminLiveApis.deletePsychometricTestCourse(id);
        }
    } 

        static addSectionPsychometric(data: any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminLiveApis.addSectionPsychometric(data);
        }
    }

    static getAllSectionPsychometric(): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminLiveApis.getAllSectionPsychometric();
        }
    }

       static getSectionPsychometricById(id:any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminLiveApis.getSectionPsychometricById(id);
        }
    } 

    static updateSectionPsychometric(id:any, data:any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminLiveApis.updateSectionPsychometric(id, data);
        }
    } 

    static deleteSectionPsychometric(id:any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminLiveApis.deleteSectionPsychometric(id);
        }
    } 

            static addMoreQuestionsPsychometric(data: any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminLiveApis.addMoreQuestionsPsychometric(data);
        }
    }

    static getAllQuestionsPsychometric(): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminLiveApis.getAllQuestionsPsychometric();
        }
    }

       static getQuestionsPsychometricBySectionId(id:any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminLiveApis.getQuestionsPsychometricBySectionId(id);
        }
    } 

    static updateQuestionsPsychometric(id:any, data:any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminLiveApis.updateQuestionsPsychometric(id, data);
        }
    } 

    static deleteQuestionsPsychometric(id:any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminLiveApis.deleteQuestionsPsychometric(id);
        }
    } 
    static answerPsychometricQuestion(data: any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.adminLiveApis.answerPsychometricQuestion(data);
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