import Vue from "vue";
import { Entry } from "./app";

const app = new Vue({
    el: "#app",
    render: h => h(Entry)
});