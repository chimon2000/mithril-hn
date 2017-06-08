import * as m from 'mithril'

import { percent } from 'csx'
import { media, style, classes } from 'typestyle'
import { flexRoot, vertical, flex } from 'csstips'

const layout = style(flexRoot, vertical, flex)

const main = style(
    flex,
    {
        width: percent(80),
        margin: '0 auto',
        marginTop: '48px',
        flexBasis: 'auto',
        flexGrow: 1
    },
    media(
        {
            maxWidth: 600
        },
        { width: percent(100) }
    )
)

import { ClassComponent } from 'mithril'

import Header from './header'

export default class Layout implements ClassComponent<{}> {
    view(vnode) {
        return m('.layout', { className: layout }, [m(Header), m('.main', { className: main }, vnode.children)])
    }
}
