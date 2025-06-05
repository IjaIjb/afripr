import { lazy } from "react";


// use lazy for better code splitting, a.k.a. load faster
const HomePage = lazy(() => import("../pages/home/Home"));
const SignupPage = lazy(() => import("../pages/auth/SignUp"));
const SigninPage = lazy(() => import("../pages/auth/SignIn"));
const ForgotPasswordPage = lazy(() => import("../pages/auth/ForgetPassword"));
const ResetPasswordPage = lazy(() => import("../pages/auth/ResetPassword"));
const KycPage = lazy(() => import("../pages/auth/kyc/KycProfileCompletion"));

const PsychometricTestPage = lazy(() => import("../pages/psychometricTest/PsychometricTestHome"));
const PsychometricTestProgramsPage = lazy(() => import("../pages/psychometricTest/PsychometricTestPrograms"));
const PsychometricTestGenInfo = lazy(() => import("../pages/psychometricTest/components/PsychometricTestGenInfo"));
const PsychometricTestBachelorPage = lazy(() => import("../pages/psychometricTest/PsychometricTestBachelor"));
const PsychometricTestBachelorQuestionsPage = lazy(() => import("../pages/psychometricTest/PsychoBachelorQuestions"));
const PsychometricTestQuestionsPage = lazy(() => import("../pages/psychometricTest/components/PsychometricQuestions"));
const PsychometricTestMastersPage = lazy(() => import("../pages/psychometricTest/PsychometricTestMasters"));
const PsychometricTestMastersQuestionsPage = lazy(() => import("../pages/psychometricTest/PsychoMastersQuestions"));
const PsychometricTestPhdPage = lazy(() => import("../pages/psychometricTest/PsychometricTestPhd"));
const PsychometricTestPhdQuestionsPage = lazy(() => import("../pages/psychometricTest/PsychoPhdQuestions"));
const PsychometricTestListOfProgramsPage = lazy(() => import("../pages/psychometricTest/ListOfPrograms"));

const BlogPage = lazy(() => import("../pages/blog/Blog"));
const WaecAndJambPage = lazy(() => import("../pages/waecAndJamb/WaecAndJamb"));
const WaecAndJambStartPage = lazy(() => import("../pages/waecAndJamb/WaecStart"));
const BlogDetailPage = lazy(() => import("../pages/blog/BlogDetail"));

const ExploreProgramsPage = lazy(() => import("../pages/explorePrograms/ExplorePrograms"));
const ProgramOverviewPage = lazy(() => import("../pages/explorePrograms/ProgramOverview"));
const AppSummaryPage = lazy(() => import("../pages/explorePrograms/AppSummary"));
const DegreeApplicationFormPage = lazy(() => import("../pages/explorePrograms/DegreeApplicationForm"));

const LoanHomePage = lazy(() => import("../pages/loan/LoanHome"));
const EduSilverPage = lazy(() => import("../pages/loan/EduSilver"));
const EduGoldPage = lazy(() => import("../pages/loan/eduGold/EduGold"));
const EduPremiumPage = lazy(() => import("../pages/loan/eduPremium/EduPremium"));
const EduPremiumSchoolProcessingPage = lazy(() => import("../pages/loan/eduPremium/PremiumSchoolProcessing"));
const EduPremiumLoanProcessingPage = lazy(() => import("../pages/loan/eduPremium/PremumLoanProcessing"));
const VerifyEmailPage = lazy(() => import("../pages/auth/VerifyEmail"));
const VerifyEmailSuccessPage = lazy(() => import("../pages/auth/VerifyEmailSuccess"));

// admin dashboard
const VerifyPasswordPage = lazy(() => import("../pages/auth/VerifyPassword"));
const AdminDashboardPage = lazy(() => import("../pages/adminDashboard/home/Home"));
const AdminDashboardCoursePage = lazy(() => import("../pages/adminDashboard/courseAndPrograms/CourseAnPrograms"));
const AdminDashboardUploadCoursePage = lazy(() => import("../pages/adminDashboard/courseAndPrograms/UploadCourse"));
const AdminDashboardEditCoursePage = lazy(() => import("../pages/adminDashboard/courseAndPrograms/EditCourse"));
const AdminDashboardManagementPage = lazy(() => import("../pages/adminDashboard/adminManagement/AdminManagement"));
const AdminDashboardUserPage = lazy(() => import("../pages/adminDashboard/userManagement/UserManagemnt"));
const AdminDashboardBlogPage = lazy(() => import("../pages/adminDashboard/blog/Blog"));
const AdminDashboardTestimonialPage = lazy(() => import("../pages/adminDashboard/testimonials/Testimonials"));
const AdminDashboardBannerPage = lazy(() => import("../pages/adminDashboard/banner/Banner"));
const AdminDashboardPsychometricTestPage = lazy(() => import("../pages/adminDashboard/psychometricTestAdmin/PsychometricTestAdmin"));
const AdminDashboardPsychometricTestCoursePage = lazy(() => import("../pages/adminDashboard/psychometricTestCourseAdmin/PsychometricTestCourseHome"));
const AdminDashboardAddPsychometricTestCoursePage = lazy(() => import("../pages/adminDashboard/psychometricTestCourseAdmin/PsychometricTestCourseAdmin"));
const AdminDashboardEditPsychometricTestCoursePage = lazy(() => import("../pages/adminDashboard/psychometricTestCourseAdmin/EditPsychometricTestCourse"));
const AdminDashboardLoanApplicationPage = lazy(() => import("../pages/adminDashboard/loanApplication/LoanApplication"));
const AdminDashboardPaymentPage = lazy(() => import("../pages/adminDashboard/payment/Payment"));
const AdminDashboardWaecAndJambPage = lazy(() => import("../pages/adminDashboard/waecAndJamb/WaecAndJamb"));
const AdminDashboardFaqManagementPage = lazy(() => import("../pages/adminDashboard/faqManagement/FaqManagement"));
const AdminDashboardBecomeAnAgentPage = lazy(() => import("../pages/adminDashboard/becomeAnAgent/BecomeAnAgent"));
const AdminDashboardConsultationBookingPage = lazy(() => import("../pages/adminDashboard/consultationBooking/ConsultationBooking"));
const AdminDashboardNotificationPage = lazy(() => import("../pages/adminDashboard/notification/Notification"));

// user dashboard
const UserDashboardHomePage = lazy(() => import("../pages/userDashboard/dashboardHome/Dashboard"));
const UserDashboardProfilePage = lazy(() => import("../pages/userDashboard/profile/Profile"));
const UserDashboardApplicationsPage = lazy(() => import("../pages/userDashboard/appications/Applications"));
const UserDashboardUpskillPage = lazy(() => import("../pages/userDashboard/upskill/Upskill"));
const UserDashboardResidentPermitPage = lazy(() => import("../pages/userDashboard/resident-permit/ResidentPermit"));
const UserDashboardNotificationPage = lazy(() => import("../pages/userDashboard/notification/Notification"));

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/home",
    component: HomePage,
  },
  {
    path: "/sign-up",
    component: SignupPage,
  },
  {
    path: "/forgot-password",
    component: ForgotPasswordPage,
  },
  {
    path: "/reset-password",
    component: ResetPasswordPage,
  },

  {
    path: "/verify-email",
    component: VerifyEmailPage,
  },
  
  {
    path: "/auth/verify-email",
    component: VerifyEmailSuccessPage,
  },
  {
    path: "/verify",
    component: VerifyPasswordPage,
  },
  {
    path: "/kyc",
    component: KycPage,
  },
  {
    path: "/sign-in",
    component: SigninPage,
  },
  {
    path: "/psychometric-test",
    component: PsychometricTestPage,
  },
  {
    path: "/blog",
    component: BlogPage,
  },
  {
    path: "/blog-detail/:blog",
    component: BlogDetailPage,
  },
  {
    path: "/psychometric-test/programs",
    component: PsychometricTestProgramsPage,
  },
    {
    path: "/psychometric-test/info",
    component: PsychometricTestGenInfo,
  },
   {
    path: "/psychometric-test/questions",
    component: PsychometricTestQuestionsPage,
  },
  {
    path: "/psychometric-test/bsc",
    component: PsychometricTestBachelorPage,
  },
  {
    path: "/psychometric-test/bachelors/questions",
    component: PsychometricTestBachelorQuestionsPage,
  },
  {
    path: "/psychometric-test/masters",
    component: PsychometricTestMastersPage,
  },
  {
    path: "/psychometric-test/masters/questions",
    component: PsychometricTestMastersQuestionsPage,
  },
  {
    path: "/psychometric-test/phd",
    component: PsychometricTestPhdPage,
  },
  {
    path: "/psychometric-test/phd/questions",
    component: PsychometricTestPhdQuestionsPage,
  },
  {
    path: "/psychometric-test/list-of-programs",
    component: PsychometricTestListOfProgramsPage,
  },
  {
    path: "/explore-programs",
    component: ExploreProgramsPage,
  },
  {
    path: "/program-overview/:course",
    component: ProgramOverviewPage,
  },
  {
    path: "/application-summary/:course",
    component: AppSummaryPage,
  },

    {
    path: "/degree-application-form/:course",
    component: DegreeApplicationFormPage,
  },

  {
    path: "/loan",
    component: LoanHomePage,
  },
  {
    path: "/loan/edu-silver",
    component: EduSilverPage,
  },
  {
    path: "/loan/edu-gold",
    component: EduGoldPage,
  },
  {
    path: "/loan/edu-premium",
    component: EduPremiumPage,
  },
  {
    path: "/loan/school-processing",
    component: EduPremiumSchoolProcessingPage,
  },
  {
    path: "/loan/loan-processing",
    component: EduPremiumLoanProcessingPage,
  },
  {
    path: "/waec-and-jamb",
    component: WaecAndJambPage,
  },
  {
    path: "/waec-and-jamb/start",
    component: WaecAndJambStartPage,
  },
  {
    path: "/admin/overview",
    component: AdminDashboardPage,
  },
  {
    path: "/admin/courses",
    component: AdminDashboardCoursePage,
  },
  {
    path: "/admin/courses/upload-course",
    component: AdminDashboardUploadCoursePage,
  },
  {
    path: "/admin/courses/edit/:id",
    component: AdminDashboardEditCoursePage,
  },
  {
    path: "/admin/admin-management",
    component: AdminDashboardManagementPage,
  },
  {
    path: "/admin/user-management",
    component: AdminDashboardUserPage,
  },
  {
    path: "/admin/blog",
    component: AdminDashboardBlogPage,
  },
  {
    path: "/admin/testimonial",
    component: AdminDashboardTestimonialPage,
  },
  {
    path: "/admin/banner",
    component: AdminDashboardBannerPage,
  },
  {
    path: "/admin/psychometric-test",
    component: AdminDashboardPsychometricTestPage,
  },
    {
    path: "/admin/psychometric-test-course",
    component: AdminDashboardPsychometricTestCoursePage,
  },
     {
    path: "admin/psychometric-courses/create",
    component: AdminDashboardAddPsychometricTestCoursePage,
  },
       {
    path: "/admin/psychometric-courses/edit/:id",
    component: AdminDashboardEditPsychometricTestCoursePage,
  },
  {
    path: "/admin/loan-application",
    component: AdminDashboardLoanApplicationPage,
  },
  {
    path: "/admin/payment",
    component: AdminDashboardPaymentPage,
  },
  {
    path: "/admin/waec-and-jamb",
    component: AdminDashboardWaecAndJambPage,
  },
  {
    path: "/admin/faq-management",
    component: AdminDashboardFaqManagementPage,
  },
  {
    path: "/admin/become-an-agent",
    component: AdminDashboardBecomeAnAgentPage,
  },
  {
    path: "/admin/consultation-booking",
    component: AdminDashboardConsultationBookingPage,
  },
    {
    path: "/admin/notification",
    component: AdminDashboardNotificationPage,
  },
  {
    path: "/user/dashboard",
    component: UserDashboardHomePage,
  },

  {
    path: "/user/profile",
    component: UserDashboardProfilePage,
  },

  {
    path: "/user/aplications",
    component: UserDashboardApplicationsPage,
  },

  {
    path: "/user/resident-permit",
    component: UserDashboardResidentPermitPage,
  },

  {
    path: "/user/upskill",
    component: UserDashboardUpskillPage,
  },

  {
    path: "/user/notification",
    component: UserDashboardNotificationPage,
  },

 
];


export default routes;
