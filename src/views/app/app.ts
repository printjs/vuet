import Component from "vue-class-component";
import Vue from "vue";

import { Btn } from "@components/button/button";
import { Custom } from "@components/custom/custom";

require("./app.styl");
require("element-ui/lib/theme-chalk/index.css");

@Component({
    name: "entry",
    components: {
        Btn, Custom
    },
    template: require("./app.html"),
})
export class Entry extends Vue {
    public count: number = 1;

    color(color: string) {
        return color;
    }

    updateValue() {
        this.count++;
    }
}
