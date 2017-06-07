import * as m from 'mithril'

import { ClassComponent } from 'mithril'

import Header from './header'

export default class Layout implements ClassComponent<{}> {
    view(vnode) {
        return m('.layout', [m(Header), m('.main', vnode.children)])
    }
}
