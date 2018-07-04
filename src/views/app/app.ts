import Component from "vue-class-component";
import Vue from "vue";

import { Btn } from "@components/button/button";
import { Custom } from "@components/custom/custom";

require("./app.styl");


@Component({
    name: "entry",
    components: {
        Btn, Custom
    },
    methods: {
        updateValue(color: string) {
            console.log(color);
        }
    },
    template: require("./app.html"),
})
export class Entry extends Vue {
}