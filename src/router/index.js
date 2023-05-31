import {createRouter, createWebHistory} from 'vue-router';
import { useUser } from '../stores/user'

/********dashboard routes******/
import admin from '../views/pages/dashboard/admin/adminDashboard'
import dashboard from '../views/pages/dashboard/employee/employeeDashboard'

/********activities route******/
import activities from '../views/pages/activities/activities'

/********policies route******/
import policies from '../views/pages/policies/policies'

/********knowledgebase route******/
import knowledgeBase from '../views/pages/knowledgeBase/knowledgeBase'
import knowledgeBaseView from '../views/pages/knowledgeBase/knowledgeBaseView/knowledgeBaseView'

/********jobs component route******/
import appliedJobs from '../views/pages/jobs/appliedJobs/appliedJobs'
import aptituteResult from '../views/pages/jobs/aptituteResult/aptituteResult'
import archivedJobs from '../views/pages/jobs/archivedJobs/archivedJobs'
import candidateList from '../views/pages/jobs/candidateList/candidateList'
import experienceLevel from '../views/pages/jobs/experienceLevel/experienceLevel'
import interviewing from '../views/pages/jobs/interviewing/interviewing'
import interviewQuestions from '../views/pages/jobs/interviewQuestions/interviewQuestions'
// import headerJobApplicants from '../views/pages/jobs/jobapplicants/headerJobApplicants'
import jobApplicants from '../views/pages/jobs/jobapplicants/jobApplicants'
import jobAptitute from '../views/pages/jobs/jobAptitute/jobAptitute'
import jobDetails from '../views/pages/jobs/jobDetails/jobDetails'
import jobList from '../views/pages/jobs/jobList/jobList'
import mainJobs from '../views/pages/jobs/mainJobs/mainJobs'
import jobsDashboard from '../views/pages/jobs/jobsDashboard/jobsDashboard'
import jobView from '../views/pages/jobs/jobView/jobView'
import manageResume from '../views/pages/jobs/manageResume/manageResume'
import offerApprove from '../views/pages/jobs/offerApprove/offerApprove'
import offeredJob from '../views/pages/jobs/offeredJob/offeredJob'
import visitedJobs from '../views/pages/jobs/visitedJobs/visitedJobs'
import userDashboard from '../views/pages/jobs/userDashboard/userDashboard'
import userAllJobs from '../views/pages/jobs/userAllJobs/userAllJobs'
import shortListCandidate from '../views/pages/jobs/shortListCandidate/shortListCandidate'
import question from '../views/pages/jobs/question/question'
import savedJob from '../views/pages/jobs/savedJob/savedJob'
import scheduleTiming from '../views/pages/jobs/scheduleTiming/scheduleTiming'

/********settings component route******/
import approvalSetting from '../views/pages/settings/approvalSetting/approvalSetting'
import changePassword from '../views/pages/settings/changePassword/changePassword'
import cronSetting from '../views/pages/settings/cronSetting/cronSetting'
import emailSettings from '../views/pages/settings/emailSettings/emailSettings'
import invoiceSettings from '../views/pages/settings/invoiceSettings/invoiceSettings'
import leaveType from '../views/pages/settings/leaveType/leaveType'
import localization from '../views/pages/settings/localization/localization'
import notificationSetting from '../views/pages/settings/notificationSetting/notificationSetting'
import performanceSetting from '../views/pages/settings/performanceSetting/performanceSetting'
import toxBoxSetting from '../views/pages/settings/toxBoxSetting/toxBoxSetting'
import themeSetting from '../views/pages/settings/themeSetting/themeSetting'
import rolePermission from '../views/pages/settings/rolePermission/rolePermission'
import salarySetting from '../views/pages/settings/salarySetting/salarySetting'
import mainSetting from '../views/pages/settings/mainSetting/mainSetting'

/********assets component route******/
import assets from '../views/pages/assets/asset'

/********Application component route******/
import lockScreen from '../views/pages/application/lockScreen/lockScreen'
import login from '../views/pages/application/login/login'
import register from '../views/pages/application/register/register'
import otp from '../views/pages/application/otp/otp'

/********employee component route******/
import attendance from '../views/pages/employees/attendance/attendance'
import attendanceEmployee from '../views/pages/employees/attendanceEmployee/attendanceEmployee'
import departments from '../views/pages/employees/departments/departments'
import designations from '../views/pages/employees/designations/designations'
import mainEmployee from '../views/pages/employees/mainEmployee/mainEmployee'
import employeesListIndex from '../views/pages/employees/mainEmployee/employeesListIndex'
import holidays from '../views/pages/employees/holidays/holidays'
import leave from '../views/pages/employees/leave/leave'
import leaveEmployee from '../views/pages/employees/leaveEmployee/leave';
import leaveSettings from '../views/pages/employees/leaveSettings/leaveSettings'
import overtime from '../views/pages/employees/overtime/overtime'
import timeSheet from '../views/pages/employees/timeSheet/timeSheet'
import shift from '../views/pages/employees/shift/shift'
import scheduling from '../views/pages/employees/scheduling/scheduling'

/********report component route******/
import attendanceReport from '../views/pages/reports/attendanceReport/attendanceReport'
import dailyReports from '../views/pages/reports/dailyReports/dailyReports'
import employeeReports from '../views/pages/reports/employeeReports/employeeReports'
import expenseReports from '../views/pages/reports/expenseReports/expenseReports'
import invoiceReport from '../views/pages/reports/invoiceReport/invoiceReport'
import leaveReport from '../views/pages/reports/leaveReport/leaveReport'
import paymentReport from '../views/pages/reports/paymentReport/paymentReport'
import paySlipReport from '../views/pages/reports/paySlipReport/paySlipReport'
import projectReport from '../views/pages/reports/projectReport/projectReport'
import userReport from '../views/pages/reports/userReport/userReport'
import taskReport from '../views/pages/reports/taskReport/taskReport'


/********account component route******/
import blankPage from '../views/pages/account/blankPage/blankPage'

/********accounting component route******/
import budgetExpenses from '../views/pages/accounting/budgetexpenses/budgetExpenses'
import budgetRevenues from '../views/pages/accounting/budgetrevenues/budgetRevenues'
import budgets from '../views/pages/accounting/budgets/budgets'
import categories from '../views/pages/accounting/categories/categories'
import subCategory from '../views/pages/accounting/subCategory/subCategory'

/********app component route******/
import chat from '../views/pages/app/chat/chat'
import events from '../views/pages/app/events/events'
import inbox from '../views/pages/app/inbox/inbox'
import compose from '../views/pages/app/email/compose/compose'
import contacts from '../views/pages/app/contacts/contacts'
import fileManager from '../views/pages/app/fileManager/fileManager'
import incomingCall from '../views/pages/app/call/incomingCall/incomingCall'
import outgoingCall from '../views/pages/app/call/outgoingCall/outgoingCall'
import mailView from '../views/pages/app/email/mailView/mailView'
import voiceCall from '../views/pages/app/call/voiceCall/voiceCall'
import videoCall from '../views/pages/app/call/videoCall/videoCall'

/********profile component route******/
import clientProfile from '../views/pages/profile/clientProfile/clientProfile'
import profile from '../views/pages/profile/profile'

/********client component route******/
import clients from '../views/pages/clients/clients'
// import clientListIndex from '../views/pages/clients/clientListIndex'

/********components component route******/
import components from '../views/pages/components/components'

/********sales component route******/
import createEstimate from '../views/pages/sales/estimates/createEstimate/createEstimate'
import createInvoice from '../views/pages/sales/invoices/createinvoice/createInvoice'
import editEstimate from '../views/pages/sales/estimates/editEstimate/editEstimate'
import editInvoice from '../views/pages/sales/invoices/editInvoice/editInvoice'
import mainEstimate from '../views/pages/sales/estimates/mainEstimate/mainEstimate'
import estimateView from '../views/pages/sales/estimates/estimateView/estimateView'
import expenses from '../views/pages/sales/expenses/expenses'
import mainInvoice from '../views/pages/sales/invoices/mainInvoice/mainInvoice'
import invoiceView from '../views/pages/sales/invoices/invoiceView/invoiceView'
import payments from '../views/pages/sales/payments/payments'
import providentFund from '../views/pages/sales/providentFund/providentFund'
import taxes from '../views/pages/sales/taxes/taxes'

/********dashboard routes******/
import error404 from '../views/pages/error/error404'
import error500 from '../views/pages/error/error500'

/********mainpage route******/
import faq from '../views/pages/mainpage/faq/faq'
import forgotPassword from '../views/pages/mainpage/forgotPassword'
import privacyPolicy from '../views/pages/mainpage/privacyPolicy/privacyPolicy'
import term from '../views/pages/mainpage/term/term'
// import termination from '../views/pages/mainpage/termination/termination'
import search from '../views/pages/mainpage/search/search'

/********form route******/
import basicInputs from '../views/pages/form/basicInputs/basicInputs'
import formHorizontal from '../views/pages/form/formHorizontal/formHorizontal'
import inputGroups from '../views/pages/form/inputGroups/inputGroups'
import formMask from '../views/pages/form/formMask/formMask'
import formValidation from '../views/pages/form/formValidation/formValidation'
import formVertical from '../views/pages/form/formVertical/formVertical'

/********goals route******/
import goals from '../views/pages/goals/goals';


/********terminations route******/
import termination from '../views/pages/termination/termination';

/********payroll route******/
import payrollItems from '../views/pages/payroll/payrollItems/payrollItems'
import salary from '../views/pages/payroll/salary/salary'
import salaryView from '../views/pages/payroll/salaryView/salaryView'

/********performance route******/
import performance from '../views/pages/performance/performance'
import performanceAppraisal from '../views/pages/performance/performanceAppraisal/performanceAppraisal'
import performanceIndicator from '../views/pages/performance/performanceIndicator/performanceIndicator'

/********project route******/
import projectList from '../views/pages/project/projectList/projectList'

/********projects route******/
import mainProject from '../views/pages/projects/mainProject/mainProject'
import projectView from '../views/pages/projects/projectView/projectView'
import promotion from '../views/pages/promotion/promotion'
import taskBoard from '../views/pages/projects/taskBoard/taskBoard'

/********user route******/
import users from '../views/pages/users/users'

/********training route******/
import mainTraining from '../views/pages/training/mainTraining/mainTraining'
import trainingType from '../views/pages/training/trainingType/trainingType'
// import training from '../views/pages/training/maintraining'
import trainers from '../views/pages/training/trainers/trainers'

/********tickets route******/
import ticketView from '../views/pages/tickets/ticketView/ticketView'
import mainTicket from '../views/pages/tickets/mainTicket/mainTicket'

/********task route******/
import tasks from '../views/pages/tasks/tasks'

/********resignation route******/
import resignation from '../views/pages/resignation/resignation'

// User Roles for Page Guard
const roles = {
    "employee": ['super-admin','admin', 'user', 'project-manager'],
    "projectManager": ['super-admin','admin', 'project-manager'],
    "hr": ['super-admin','admin', 'project-manager'],
    "admin": ['super-admin','admin'],
    "superAdmin": ['super-admin'],
        }

const routes = [
    {
        path: '/', name: 'HomePage', component: dashboard,
        meta: { auth: true, roles: roles.admin, layout: 'DashboardLayout' }
    },


  /** Authorization */

    {
        path: '/lock-screen', name: 'lock-screen', component: lockScreen,
        meta: { auth: true, roles: roles.employee, layout: 'AuthLayout' }
    },

    {
        path: '/login', name: 'login', component: login,
        meta: { auth: false, users: false, layout: 'AuthLayout' }
    },

    {
        path: '/register', name: 'register', component: register,
        meta: { auth: false, users: false, layout: 'AuthLayout'}
    },




  /** User and Employee Pages */

    {
        path: '/dashboard', name: 'Dashboard', component: dashboard,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },

    {
        path: '/change-password', name: 'change-password', component: changePassword,
        meta: { auth: true, roles: roles.employee, layout: 'SettingsLayout' }
    },


    {
        path: '/activities', name: 'Activities', component: activities,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/applied-jobs', name: 'applied-jobs', component: appliedJobs,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    
    {
        path: '/apptitude-result', name: 'apptitute-result', component: aptituteResult,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/archived-jobs', name: 'archived-jobs', archivedJobs,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/assets', name: 'assets', component: assets,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/attendance', name: 'attendance', component: attendance,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/attendance-employee', name: 'attendance-employee', component: attendanceEmployee,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/attendance-reports', name: 'attendance-reports', component: attendanceReport,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/blank-page', name: 'blank-page', component: blankPage,
        meta: { auth: true, roles: roles.admin, layout: 'DashboardLayout' }
    },
    {
        path: '/budget-expenses', name: 'budget-expenses', component: budgetExpenses,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/budget-revenues', name: 'budget-revenues', component: budgetRevenues,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/budgets', name: 'budgets', component: budgets,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/candidates', name: 'candidates', component: candidateList,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/categories', name: 'categories', component: categories,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    
    {
        path: '/chat', name: 'Chat', component: chat,
        meta: { auth: true, roles: roles.employee, layout: 'CallLayout' }
    },



    /******* Admin Pages */
    {
        path: '/admin', name: 'indexs', component: admin,
        meta: { auth: true, roles: roles.admin, layout: 'DashboardLayout' }
    },

    {
        path: '/approval-setting', name: 'Approval Setting', component: approvalSetting,
        meta: { auth: true, roles: roles.employee, layout: 'SettingsLayout' }
    },

    {
        path: '/client-profile', name: 'Client Profile', component: clientProfile,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/clients', name: 'Clients', component: clients,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/clients-list', name: 'Clients List', component: clients,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/components', name: 'Components', component: components,
        meta: { auth: true, roles: roles.employee, layout: 'ComponentLayout' }
    },
    {
        path: '/compose', name: 'compose', component: compose,
        meta: { auth: true, roles: roles.employee, layout: 'EmailLayout' }
    },
    {
        path: '/contacts', name: 'Contacts', component: contacts,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/create-estimate', name: 'Create Estimate', createEstimate,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/create-invoice', name: 'Create Invoice', component: createInvoice,
        meta: { auth: true, roles: roles.admin, layout: 'DashboardLayout' }
    },




    // Settings
    {
        path: '/cron-setting', name: 'Cron Setting', component: cronSetting,
        meta: { auth: true, roles: roles.superAdmin, layout: 'SettingsLayout' }
    },
    {
        path: '/email-settings', name: 'Email Settings', component: emailSettings,
        meta: { auth: true, roles: roles.superAdmin, layout: 'SettingsLayout' }
    },
    {
        path: '/invoice-settings', name: 'Invoice Settings', component: invoiceSettings,
        meta: { auth: true, roles: roles.admin, layout: 'SettingsLayout' }
    },
    {
        path: '/leave-settings', name: 'Leave Settings', component: leaveSettings,
        meta: { auth: true, roles: roles.admin, layout: 'DashboardLayout' }
    },
    {
        path: '/localization', name: 'Localization', component: localization,
        meta: { auth: true, roles: roles.superAdmin, layout: 'SettingsLayout' }
    },
    {
        path: '/notifications-settings', name: 'Notifications Settings', component: notificationSetting,
        meta: { auth: true, roles: roles.admin, layout: 'SettingsLayout' }
    },
    {
        path: '/performance-setting', name: 'Performance Setting', component: performanceSetting,
        meta: { auth: true, roles: roles.admin, layout: 'SettingsLayout' }
    },
    {
        path: '/theme-settings', name: 'Theme Settings', component: themeSetting,
        meta: { auth: true, roles: roles.superAdmin, layout: 'SettingsLayout' }
    },
    {
        path: '/toxbox-setting', name: 'Toxbox Setting', component: toxBoxSetting,
        meta: { auth: true, roles: roles.employee, layout: 'SettingsLayout' }
    },




    {
        path: '/daily-reports', name: 'Daily Reports', component: dailyReports,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/departments', name: 'Departments', component: departments,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/designations', name: 'Designations', component: designations,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/edit-estimate', name: 'Edit Estimate', component: editEstimate,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/edit-invoice', name: 'Edit Invoice', component: editInvoice,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    
    {
        path: '/employee-reports', name: 'Employee Reports', component: employeeReports,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/employees', name: 'Employees', component: employeesListIndex,
        meta: { auth: true, roles: roles.admin, layout: 'DashboardLayout' }
    },
    {
        path: '/employees-list', name: 'Employees List', component: mainEmployee,
        meta: { auth: true, roles: roles.admin, layout: 'DashboardLayout' }
    },
    {
        path: '/error-404', name: 'Page Note Found', component: error404,
        meta: { auth: true, roles: roles.employee, layout: 'EmptyLayout' }
    },
    {
        path: '/error-500', name: 'An Error Occured', component: error500,
        meta: { auth: true, roles: roles.employee, layout: 'EmptyLayout' }
    },
    {
        path: '/estimates', name: 'Estimates', component: mainEstimate,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/estimate-view', name: 'Estimate View', component: estimateView,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/events', name: 'Events', component: events,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/expense-reports', name: 'Expense Reports', component: expenseReports,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/expenses', name: 'Expenses', component: expenses,
        meta: { auth: true, roles: roles.admin, layout: 'DashboardLayout' }
    },
    {
        path: '/experiance-level', name: 'Experiance Level', component: experienceLevel,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/faq', name: 'Frequently Asked Questions (FAQ)', component: faq,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/file-manager', name: 'File Manager', component: fileManager,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/forgot-password', name: 'Forgot Password', component: forgotPassword,
        meta: { auth: false, users: false, layout: 'AuthLayout' }
    },
    {
        path: '/form-basic-inputs', name: 'Form Basic Inputs', component: basicInputs,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/form-horizontal', name: 'Form Horizontal', component: formHorizontal,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/form-input-groups', name: 'Form Input Groups', component: inputGroups,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/form-mask', name: 'Form Mask', component: formMask,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/form-validation', name: 'Form Validation', component: formValidation,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/form-vertical', name: 'Form Vertical', component: formVertical,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/goal-tracking', name: 'Goal Tracking', component: goals,
        meta: { auth: true, roles: roles.superAdmin, layout: 'DashboardLayout' }
    },
   {
        path: '/holidays', name: 'Holidays', component: holidays,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/inbox', name: 'Inbox', component: inbox,
        meta: { auth: true, roles: roles.employee, layout: 'InboxLayout' }
    },
    {
        path: '/incoming-call', name: 'Incoming Call', component: incomingCall,
        meta: { auth: true, roles: roles.employee, layout: 'CallLayout' }
    },
    {
        path: '/interviewing', name: 'Interviewing', component: interviewing,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/interview-questions', name: 'Interview Questions', component: interviewQuestions,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/invoice-reports', name: 'Invoice Reports', component: invoiceReport,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/invoices', name: 'Invoices', component: mainInvoice,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    
    {
        path: '/invoice-view', name: 'Invoice View', component: invoiceView,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/job-applicants', name: 'Job Applicants', component: jobApplicants,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/job-aptitude', name: 'Job Aptitude', component: jobAptitute,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/job-details', name: 'Job Details', component: jobDetails,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/job-list', name: 'Job List', component: jobList,
        meta: { auth: true, roles: roles.employee, layout: 'JobListLayout' }
    },
    {
        path: '/jobs', name: 'Jobs', component: mainJobs,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/jobs-dashboard', name: 'Jobs Dashboard', component: jobsDashboard,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/job-view', name: 'Job View', component: jobView,
        meta: { auth: true, roles: roles.employee, layout: 'JobListLayout' }
    },
    {
        path: '/knowledgebase', name: 'Knowledge Base', component: knowledgeBase,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/knowledgebase-view', name: 'KnowledgeBase View', component: knowledgeBaseView,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/leave-reports', name: 'leave Reports', component: leaveReport,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/leaves', name: 'Leaves', component: leave,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/leaves-employee', name: 'Leaves Employee', component: leaveEmployee,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    
    {
        path: '/leave-type', name: 'Leave Type', component: leaveType,
        meta: { auth: true, roles: roles.employee, layout: 'SettingsLayout' }
    },
    


    {
        path: '/mail-view', name: 'Mail View', component: mailView,
        meta: { auth: true, roles: roles.employee, layout: 'EmailViewLayout' }
    },
    {
        path: '/manage-resumes', name: 'Manage Resumes', component: manageResume,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    
    {
        path: '/offer_approvals', name: 'Offer Approvals', component:  offerApprove,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/offered-jobs', name: 'Offered Jobs', component: offeredJob,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/otp', name: 'OTP', component: otp,
        meta: { auth: true, roles: roles.employee, layout: 'AuthLayout' }
    },
    {
        path: '/outgoing-call', name: 'Outgoing Call', component: outgoingCall,
        meta: { auth: true, roles: roles.employee, layout: 'EmptyLayout' }
    },
    {
        path: '/overtime', name: 'Overtime', component: overtime,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/payments', name: 'Payments', component: payments,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/payments-reports', name: 'Payments Reports', component: paymentReport,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/payroll-items', name: 'Payroll Items', component: payrollItems,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/payslip-reports', name: 'Payslip Reports', component: paySlipReport,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/performance', name: 'Performance', component: performance,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/performance-appraisal', name: 'Performance Appraisal', component: performanceAppraisal,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/performance-indicator', name: 'Performance Indicator', component: performanceIndicator,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    
    {
        path: '/policies', name: 'Policies', component: policies,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/privacy-policy', name: 'Privacy Policy', component: privacyPolicy,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/profile', name: 'Profile', component: profile,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/project-list', name: 'Project List', component: projectList,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/project-reports', name: 'Project Reports', component: projectReport,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/projects', name: 'Projects', component: mainProject,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/project-view', name: 'Project View', component: projectView,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/promotion', name: 'Promotion', component: promotion,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/provident-fund', name: 'Provident Fund', component: providentFund,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/voice-call', name: 'Voice Call', component: voiceCall,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/visited-jobs', name: 'Visited Jobs', component: visitedJobs,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/video-call', name: 'Video Call', component: videoCall,
        meta: { auth: true, roles: roles.employee, layout: 'VideoLayout' }
    },
    {
        path: '/users', name: 'users', component: users,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/user-reports', name: 'User Reports', component: userReport,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/user-dashboard', name: 'User Dashboard', component: userDashboard,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/user-all-jobs', name: 'User All Jobs', component: userAllJobs,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/training-type', name: 'Training Type', component: trainingType,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/training', name: 'training', component: mainTraining,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/trainers', name: 'trainers', component: trainers,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    
    {
        path: '/timesheet', name: 'Timesheet', component: timeSheet,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/ticket-view', name: 'Ticket View', component: ticketView,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/tickets', name: 'Tickets', component: mainTicket,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    
    {
        path: '/terms', name: 'Terms', component: term,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/termination', name: 'Termination', component: termination,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/taxes', name: 'Taxes', component: taxes,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/tasks', name: 'Tasks', component: tasks,
        meta: { auth: true, roles: roles.employee, layout: 'TaskLayout' }
    },
    {
        path: '/task-reports', name: 'Task Reports', component: taskReport,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/task-board', name: 'Task Board', component: taskBoard,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/sub-category', name: 'Sub Category', component: subCategory,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/shortlist-candidates', name: 'Shortlist Candidates', component: shortListCandidate,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/questions', name: 'Questions', component: question,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
  
    {
        path: '/resignation', name: 'Resignation', component: resignation,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/roles-permissions', name: 'Roles Permissions', component: rolePermission,
        meta: { auth: true, roles: roles.employee, layout: 'SettingsLayout' }
    },
    {
        path: '/salary', name: 'Salary', component: salary,
        meta: { auth: true, roles: roles.admin, layout: 'DashboardLayout' }
    },
    {
        path: '/salary-settings', name: 'Salary Settings', component: salarySetting,
        meta: { auth: true, roles: roles.employee, layout: 'SettingsLayout' }
    },
    {
        path: '/salary-view', name: 'Salary View', component: salaryView,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/saved-jobs', name: 'Saved Jobs', component: savedJob,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/schedule-timing', name: 'Schedule Timing', component: scheduleTiming,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/settings', name: 'Settings', component: mainSetting,
        meta: { auth: true, roles: roles.employee, layout: 'SettingsLayout' }
    },
    {
        path: '/shift-list', name: 'Shift List', component: shift,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/shift-scheduling', name: 'Shift Scheduling', component: scheduling,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },
    {
        path: '/search', name: 'Search', component: search,
        meta: { auth: true, roles: roles.employee, layout: 'DashboardLayout' }
    },



    // Not Found and Error Pages
    {
        path: '/not-allowed', name: '403', component: error404,
        meta: { auth: false, layout: 'EmptyLayout' }
    },
    {
        path: '/not-found', name: '404', component: error404,
        meta: { auth: false, layout: 'EmptyLayout' }
    },
    {
        path: '/:pathMatch(.*)*', name: '404', component: error404,
        meta: { auth: false, layout: 'EmptyLayout' }
    },
];






export const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    linkActiveClass: 'active',
    routes
});



router.beforeEach(async (to, from, next)=>{
    const user = useUser(); // Pull Logged In User Data
    
    // Pull User Data on Page Reload
    if(typeof user.user.username == 'undefined'){
        await user.fetchUser();

    }

    const loggedIn = user?.isLoggedIn;
  
    // Check If This isn't a protected Page

    if(to.meta.auth){
        // Check if User is Logged In
        if(loggedIn){
            // Check User Roles and Redirect Appropriately
            if( to.meta.roles.includes(user?.user?.role) ) {
                next();
            } else {
                next('/not-allowed');
            }
        }
        else {
            console.log(user.user);
            next('/login');
        }
    }
    
    else {

        if('users' in to.meta && loggedIn){
            next('/dashboard');
        } 
        else { 
            next();
        }
    }


});


export default router;