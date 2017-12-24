import Vue from "vue";
<<<<<<< HEAD
import * as Vuex from "vuex";
import { Entry } from "./app";
=======
const ElementUI = require("element-ui");

import { Entry } from "@views/app/app";

require("element-ui/lib/theme-chalk/index.css");
>>>>>>> da844ed571b023ab4753da54f9524993e9be97d2

console.log(Vuex);

if (process.env.NODE_ENV === "test") {
    console.info("测试环境,测试版本号", require("../package.json").version, "更新日期", new Date());
} else if (process.env.NODE_ENV === "production") {
    console.log = function () { };
}

<<<<<<< HEAD
Vue.use(Vuex);
const app = new Vue({
    el: "#app",
    render: h => h(Entry)
});
=======

Vue.use(ElementUI);

export function createApp() {
    const app = new Vue({
        // el: "#app",
        render: h => h(Entry)
    });
    return { app };
}
>>>>>>> da844ed571b023ab4753da54f9524993e9be97d2
