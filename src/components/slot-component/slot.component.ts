import Vue from "vue";
import Component from "vue-class-component";

@Component({
    name: "slotComponent",
    template: require("./slot.html"),
})
export class SlotComponent extends Vue {
    /**
     * data
     */
    public data() {
        return {
            list: [1, 2, 3, 4, 5, 6]
        };
    }
}   