import Component from "vue-class-component";
import Vue from "vue";
const VueColor = require("vue-color");

import { Btn } from "@components/button/button";
import { Custom } from "@components/custom/custom";

const defaultProps = {
    hex: "#194d33",
    hsl: {
        h: 150,
        s: 0.5,
        l: 0.2,
        a: 1
    },
    hsv: {
        h: 150,
        s: 0.66,
        v: 0.30,
        a: 1
    },
    rgba: {
        r: 25,
        g: 77,
        b: 51,
        a: 1
    },
    a: 1
};
const Slider = VueColor.Slider;

@Component({
    name: "entry",
    components: {
        Btn, Custom, Slider
    },
    methods: {
        updateValue(color) {
            console.log(color);
        }
    },
    template: require("./app.html"),
})
export class Entry extends Vue {
    data() {
        return {
            colors: defaultProps
        };
    }
}