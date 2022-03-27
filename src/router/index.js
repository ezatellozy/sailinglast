// import Cookies from "js-cookie";
import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/events",
    name: "Events",
    component: () => import("@/views/Events.vue"),
  },
  {
    path: "/news",
    name: "News",
    component: () => import("@/views/News.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue"),
  },
  {
    path: "/license",
    name: "license",
    component: () => import("@/components/Accordian.vue"),
  },
  {
    path: "/contact-us",
    name: "contact-us",
    component: () => import("@/components/Contact.vue"),
  },

  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue"),
    meta: {
      guest: true,
    },
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("@/views/Settings.vue"),
    meta: {
      auth: true,
    },
    children: [
      {
        path: "profile",
        name: "Profile",
        component: () => import("@/views/Profile.vue"),
      },
      {
        path: "athletes-membership",
        name: "AthletesMembership",
        component: () => import("@/components/AthletesMembership.vue"),
      },
      {
        path: "instructor-license",
        name: "InstructorLicense",
        component: () => import("@/components/InstructorLicense.vue"),
      },
    ],
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/Register.vue"),
    meta: {
      guest: true,
    },
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: () => import("@/views/ForgotPassword.vue"),
    meta: {
      guest: true,
    },
  },

  {
    path: "*",
    name: "Not Found",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters.isLogedIn) {
    next("/login");
  } else if (to.meta.guest && store.getters.isLogedIn) {
    next("/");
  } else {
    next();
  }
});

export default router;
