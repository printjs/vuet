import Component from 'vue-class-component'
import Vue from 'vue'


import './g.scss'

import {test} from './test'

@Component({
    name:'entry',
    template:`
        <div>
            <h1>入口</h1>
            <p class="p">green</p>
            <test></test>
        </div>
    `,
    components:{test}
})
export class entry extends Vue{

}