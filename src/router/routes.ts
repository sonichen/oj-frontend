import { RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AdminView from "@/views/AdminView.vue";
import NoAuthView from "@/views/NoAuthView.vue";
import UserLoginView from "@/views/user/UserLoginView.vue";
import UserRegisterView from "@/views/user/UserRegisterView.vue";
import UserLayout from "@/layouts/UserLayout.vue";
import ACCESS_ENUM from "@/access/accessEnum";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/user",
    name: "User",
    component: UserLayout,
    children: [
      {
        path: "/user/login",
        name: "User Login",
        component: UserLoginView,
      },
      {
        path: "/user/register",
        name: "User Register",
        component: UserRegisterView,
      },
    ],
    meta: {
      hideInMenu: true,
    },
  },
  {
    path: "/questions",
    name: "Questions",
    component: HomeView,
  },
  {
    path: "/admin",
    name: "Admin",
    component: AdminView,
    meta: {
      access: ACCESS_ENUM.ADMIN,
    },
  },
  {
    path: "/noAuth",
    name: "No Auth",
    component: NoAuthView,
    meta: {
      hideInMenu: true,
    },
  },
];
