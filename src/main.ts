import Vue from 'vue';
import {entry} from './app'

const app = new Vue({
    el:"#app",
    render:h=>h(entry)
})