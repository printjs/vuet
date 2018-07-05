import { shallowMount, mount } from "@vue/test-utils";
import { Entry } from "@views/app/app";
import Vue from "vue";
const ElementUI = require("element-ui");

describe("App.component.ts", () => {
    let cmp: any;
    let vm: any;

    beforeEach(() => {
        Vue.use(ElementUI);
        cmp = shallowMount(Entry);
    });

    it("equals messages to color", () => {
        // Within cmp.vm, we can access all Vue instance methods
        expect(cmp.vm.color("color")).toEqual("color");
    });


    it("add count", () => {
        // Within cmp.vm, we can access all Vue instance methods
        cmp.vm.updateValue();
        expect(cmp.vm.count).toEqual(2);
    });

    // it("渲染正确标记", () => {
    //     expect(cmp.html()).toContain(`<div>
    //     <h1>vuet</h1>
    //     <div>
    //     <el-button>默认按钮</el-button>
    //     <el-button type="primary">主要按钮</el-button>
    //     <el-button type="success">成功按钮</el-button>
    //     <el-button type="info">信息按钮</el-button>
    //     <el-button type="warning">警告按钮</el-button>
    //     <el-button type="danger">危险按钮</el-button>
    // </div>
    //     <!-- <Custom color="#fa5555"></Custom> -->
    // </div>`);
    // });

    // it("has the expected html structure", () => {
    //     expect(cmp.element).toMatchSnapshot();
    // });
});

