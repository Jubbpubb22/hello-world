import Vue from "vue";
import Router from "vue-router";
import HomePage from "./views/HomePage.vue";  // these are your pages

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage // By not code splitting the HomePage you garuntee that it loads each time you open the app, In short: gets rendered everytime. 
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/AboutPage.vue")
    },
    {
      path: "/features",
      name: "features",
      component: () =>
        import(/* webpackChunkName: "features" */ "./views/FeaturesPage.vue")
    },
    {
      path: "/dev-docs",
      name: "dev-docs",
      component: () =>
        import(/* webpackChunkName: "dev-docs" */ "./views/DevDocsPage.vue")
    }
  ]
});
