import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import firebase from "firebase/app";
import "firebase/firestore";
firebase.initializeApp({
  apiKey: "AIzaSyCMFihcZS19MRCi0yhCOf8_CtMMOUFzhss",
  authDomain: "best-todolist.firebaseapp.com",
  databaseURL: "https://best-todolist.firebaseio.com",
  projectId: "best-todolist",
  storageBucket: "best-todolist.appspot.com",
  messagingSenderId: "125234608047",
  appId: "1:125234608047:web:2af1af7f836521b857215a",
  measurementId: "G-HF24DTVCJB"
});

export const todos = firebase.firestore().collection("todos");
export const todosSort = todos.orderBy("createdAt", "desc");

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
