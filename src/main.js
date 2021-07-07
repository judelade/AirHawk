import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAykf76YV6NqNU83aKQ0x2K0d8oxzc1418",
  authDomain: "test-8595f.firebaseapp.com",
  projectId: "test-8595f",
  storageBucket: "test-8595f.appspot.com",
  messagingSenderId: "884212039768",
  appId: "1:884212039768:web:44501a9cd9129da963ca2d",
  measurementId: "G-WE26SGY5CX"
};

firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
