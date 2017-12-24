import Component from "vue-class-component";
import Vue from "vue";
import {mapGetters} from "Vuex";
import "./test.scss";

@Component({
    name: "test",
    template: "<p class='pp'>black</p>",
    methods: {
        c: function () {
            this.$store.dispatch("ceshi", "123123");
        }
    }
})
export class Test extends Vue {
}