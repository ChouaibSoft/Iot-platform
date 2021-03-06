import Vue from 'vue'
import Router from 'vue-router'
import { store } from '../store/store'
import i18n from '../i18n'

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import("@/views/Home"),
        },
        {
            path: '/auth',
            name: 'auth',
            component: () => import("@/views/Auth"),
            meta: {
                title: i18n.t('page-title.auth')
            },
        },
        {
            path: '/confirm-account',
            name: 'account-confirmation',
            component: () => import("@/views/ConfirmAccount"),
            props: {
                token: {
                    type: String,
                    default: null
                }
            },
            meta: {
                title: i18n.t('page-title.confirm-account')
            }
        },
        {
            path: '/reset-password',
            name: 'reset-password',
            component: () => import("@/views/ResetPassword"),
            props: {
                token: {
                    type: String,
                    default: null
                }
            },
            meta: {
                title: i18n.t('page-title.reset-password')
            }
        },
        {
            path: "/dashboard",
            name:"dashboard",
            component: () => import("@/views/Dashboard"),
            meta: {
                breadcrumb: 'Home Page',
                protected: true,
                title: i18n.t('page-title.dashboard')
            },
            children: [
                {
                    path: "/",
                    name: "dash-overview",
                    meta: {
                        breadcrumb: 'Items',
                        protected: true,
                        title: i18n.t('page-title.dashboard'),},
                    component: () => import("@/views/DashOverview")
                },
                {
                    path: "channels/new",
                    name: "new-channel",
                    meta: {
                        breadcrumb: 'Items',
                        protected: true,
                        title: i18n.t('page-title.new-channel'),},
                    component: () => import("@/views/AddChannel")
                },
                {
                    path: "actions/new",
                    name: "new-trigger",
                    meta: {
                        protected: true,
                        title: i18n.t('page-title.new-trigger'),
                        breadcrumb: 'Home Page'
                    },
                    component: () => import("@/views/AddTrigger")
                },
                {
                    path: "actions",
                    name: "my-triggers",
                    meta: {
                        protected: true,
                        title: i18n.t('page-title.my-triggers')
                    },
                    component: () => import("@/views/MyTriggers")
                },
                {
                    path: "triggers/new",
                    name: "add-react",
                    meta: {
                        protected: true,
                        title: i18n.t('page-title.new-react')
                    },
                    component: () => import("@/views/AddReact")
                },
                {
                    path: "triggers",
                    name: "my-reacts",
                    meta: {
                        protected: true,
                        title: i18n.t('page-title.my-reacts')
                    },
                    component: () => import("@/views/MyReacts")
                },
                {
                    path: "channels",
                    name: "my-channels",
                    component: () => import("@/views/MyChannels"),
                    meta: {
                        protected: true,
                        title: i18n.t('page-title.my-channels'),
                        breadcrumb: 'Home Page'
                    }
                },
                {
                    path: "channels/:id",
                    name: "detail-channels",
                    meta: {
                        protected: true,
                        title: i18n.t('page-title.detail-channel')
                    },
                    component: () => import("@/views/DetailChannel"),
                    children: [
                        {
                            path: "view",
                            name: "view",
                            meta: {
                                protected: true,
                                title: i18n.t('page-title.view')
                            },
                            component: () => import("@/components/Visualisation")
                        },
                        {
                            path: "api-key",
                            name: "api-key",
                            meta: {
                                protected: true,
                                title: i18n.t('page-title.api-key')
                            },
                            component: () => import("@/components/APIKeys")
                        },
                        {
                            path: "settings",
                            name: "settings",
                            meta: {
                                protected: true,
                                title: i18n.t('page-title.settings')
                            },
                            component: () => import("@/components/ChannelSettings")
                        },
                        {
                            path: "data-import-export",
                            name: "data-import-export",
                            meta: {
                                protected: true,
                                title: i18n.t('page-title.import-export')
                            },
                            component: () => import("@/components/DataImportExport")
                        }
                    ]
                },
                {
                    path: "actions/:id",
                    name: "detail-trigger",
                    meta: {
                        protected: true,
                        title: i18n.t('page-title.detail-trigger')
                    },
                    component: () => import("@/views/DetailTrigger"),
                    children: [
                        {
                            path: "overview",
                            name: "trigger-overview",
                            meta: {
                                protected: true,
                                title: i18n.t('page-title.trigger-overview')
                            },
                            component: () => import("@/components/TriggerOverview")
                        },
                        {
                            path: "settings",
                            name: "trigger-settings",
                            meta: {
                                protected: true,
                                title: i18n.t('page-title.trigger-settings')
                            },
                            component: () => import("@/components/TriggerSettings")
                        },
                    ]
                },
                {
                    path:"timeControl/new",
                    name :"add-timeControl",
                    meta:{
                        protected: true,
                        title: i18n.t('page-title.new-timeControl')
                    }  ,
                    component: ()=> import("@/views/AddTimeControl")
                },
                // {
                //     path:"timeControls",
                //     name :"my-timeControls",
                //     meta:{
                //         protected: true,
                //         title: i18n.t('page-title.my-timeControl')
                //     }  ,
                //     component: ()=> import("@/views/MyTimeControl")
                // },
                {
                    path: "compte",
                    name: "compte",
                    meta: {
                        protected: true,
                        title: i18n.t('page-title.detail-trigger')
                    },
                    component: () => import("@/views/Compte")
                },
                {
                    path: "choose/plan",
                    name: "choose-plan",
                    meta: {
                        protected: true,
                        title: i18n.t('page-title.detail-trigger')
                    },
                    component: () => import("@/views/BuyNow")
                }
            ]
        }
    ]
});
router.beforeEach((to, from, next) => {
    if (!to.meta.protected) { //route is public, don't check for authentication
        if(localStorage.getItem('userToken') != null && to.path === '/auth'){
            router.push('/dashboard/');
        }else{
            next()
        }
    } else {  //route is protected, if authenticated, proceed. Else, login
        if(localStorage.getItem('userToken') != null){
            next()
        }else{
            router.push('/auth');
        }
    }
});
router.afterEach((to) => {
    Vue.nextTick( () => {
        document.title = to.meta.title ? to.meta.title : 'Iot Platform ESI-SBA';
    });
});
export default router;
