import Vue from "vue";
import VueRouter from "vue-router";
import TODOList from "../views/TODOList.vue";
import EditTask from "../components/EditTask.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "TODOList",
    component: TODOList,
    children: [
      {
        path: "1",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue")
      }
    ]
  },
  {
    name: "task-edit",
    path: "/edit/:id",
    component: EditTask,
    meta: { title: "Edit task" }
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
