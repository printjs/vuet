import Component from "vue-class-component";
import Vue from "vue";

import { Btn } from "@components/button/button";
@Component({
    name: "entry",
    components: {
        Btn
    },
    template: require("./app.html"),
})
export class Entry extends Vue {

}