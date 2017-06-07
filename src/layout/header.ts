import * as m from 'mithril'
import * as logo from './logo.svg'

import { ClassComponent } from 'mithril'

export const Nav = [
    {
        name: 'Top',
        route: '/top'
    },
    {
        name: 'New',
        route: '/new'
    },
    {
        name: 'Show',
        route: '/show'
    },
    {
        name: 'Ask',
        route: '/ask'
    },
    {
        name: 'Jobs',
        route: '/jobs'
    }
]

console.log(logo)
const link = active => (active ? 'a.link.active' : 'a.link')

export default class Header implements ClassComponent<{}> {
    view() {
        return m('.header', [
            m('nav', [
                m('img.logo', { src: logo }),
                Nav.map(row =>
                    m(link(m.route.get() === row.route), { href: `${row.route}`, oncreate: m.route.link }, row.name)
                )
            ])
        ])
    }
}
