import Component from "vue-class-component";
import Vue from "vue";
const styles = require("./test.scss");

@Component({
    name: "test",
    template: require("./test.html"),
    computed: {
        styles: function () {
            return styles;
        }
    }
})
export class Test extends Vue {

}