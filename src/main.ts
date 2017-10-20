import Vue from "vue";
import { Entry } from "./views/app/app";

if (process.env.NODE_ENV === "test") {
    console.info("测试环境,测试版本号", require("../package.json").version, "更新日期", new Date());
} else if (process.env.NODE_ENV === "production") {
    console.log = function () { };
}

const app = new Vue({
    el: "#app",
    render: h => h(Entry)
});