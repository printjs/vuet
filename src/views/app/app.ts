import Component from "vue-class-component";
import Vue from "vue";


const styles = require("./app.scss");

import { Test } from "../../components/test";
import { SlotComponent } from "../../components/slot-component/slot.component";

@Component({
    name: "entry",
    template: require("./app.html"),
    components: { Test, SlotComponent },
    computed: {
        styles: function () {
            return styles;
        }
    }
})
export class Entry extends Vue {

}