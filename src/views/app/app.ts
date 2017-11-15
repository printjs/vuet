import Component from "vue-class-component";
import Vue from "vue";

import { Btn } from "@components/button/button";
import { Custom } from "@components/custom/custom";
// require("./app.scss");

@Component({
    name: "entry",
    components: {
        Btn, Custom
    },
    template: require("./app.html"),
    computed: {
        styles: function () {
            return "#fa5555";
        }
    }
})
export class Entry extends Vue {

}