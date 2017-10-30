import Vue from "vue";
import Component from "vue-class-component";


@Component({
    name: "iviews",
    template: require("./iviews.html")
})
export class Iviews extends Vue {
    data() {
        return {
            radio: "1"
        };
    }
}
