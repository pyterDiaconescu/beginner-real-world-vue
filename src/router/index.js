import Vue from "vue";
import VueRouter from "vue-router";
import EventList from "../views/EventList";
import EventShow from "../views/EventShow";
import EventCreate from "../views/EventCreate";
import User from "../views/User";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "event-list",
    component: EventList
  },
  {
    path: "/event",
    name: "event-show",
    component: EventShow
  },
  {
    path: "/event/create",
    name: "event-create",
    component: EventCreate
  },
  {
    path: "/user/:username",
    name: "user",
    component: User,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
