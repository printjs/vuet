import Vue from "vue";
import * as Vuex from "vuex";
import { Entry } from "./app";

console.log(Vuex);

if (process.env.NODE_ENV === "test") {
    console.info("测试环境,更新日期", new Date());
} else if (process.env.NODE_ENV === "production") {
    console.log = function () { };
}

Vue.use(Vuex);
const app = new Vue({
    el: "#app",
    render: h => h(Entry)
});