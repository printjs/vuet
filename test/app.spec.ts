import { shallowMount, mount } from "@vue/test-utils";
import { Entry } from "@views/app/app";
import Vue from "vue";
const ElementUI = require("element-ui");

describe("App.component.ts", () => {
    let cmp: any;
    let vm: any;

    beforeEach(() => {
        Vue.use(ElementUI);
        cmp = mount(Entry);
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


    it("has the expected html structure", () => {
        expect(cmp.element).toMatchSnapshot();
    });
});

