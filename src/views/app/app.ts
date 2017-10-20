import Component from "vue-class-component";
import Vue from "vue";


const styles = require("./app.scss");

import { Test } from "../../components/test";

@Component({
    name: "entry",
    template: require("./app.html"),
    components: { Test },
    computed: {
        styles: function () {
            return styles;
        }
    }
})
export class Entry extends Vue {

}