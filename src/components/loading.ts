import * as logo from '../images/loading.svg'
import * as m from 'mithril'
import { ClassComponent } from 'mithril'
import { style } from 'typestyle'
import { px } from 'csx'

let wrapper = style({
    textAlign: 'center',
    padding: px(25)
})

const image = style({
    height: px(60),
    width: px(60)
})
export default class Loading implements ClassComponent<{}> {
    view(vnode) {
        return m('div', { className: wrapper }, m('img', { src: logo, className: image }))
    }
}
