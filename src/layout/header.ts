import * as m from 'mithril'
import * as logo from './logo.svg'
import { white, percent, px } from 'csx'
import { style, classes } from 'typestyle'
import { ClassComponent } from 'mithril'
import { flexRoot, vertical, centerJustified } from 'csstips'

const header = style(flexRoot, {
    position: 'fixed',
    top: '0',
    right: '0',
    left: '0',
    backgroundColor: white.toHexString(),
    padding: '0 16px',
    height: px(48),
    minHeight: px(48),
    borderBottom: '#1e5799 1px solid'
})

const nav = style(flexRoot, {
    alignItems: 'center',
    width: '90%',
    margin: '0 auto'
})

const logoStyle = style({
    height: ' 30px'
})

const linkStyles = style(flexRoot, vertical, centerJustified, {
    margin: '0 .4rem',
    color: '#1e5799',
    textDecoration: 'none',
    height: percent(100)
})

const activeStyles = style({
    fontWeight: 'bold'
})

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

const link = active => (active ? classes(linkStyles, activeStyles) : linkStyles)

export default class Header implements ClassComponent<{}> {
    view() {
        return m('div', { className: header }, [
            m('nav', { className: nav }, [
                m('img', { className: logoStyle, src: logo }),
                Nav.map(row =>
                    m(
                        'a',
                        { className: link(m.route.get() === row.route), href: `${row.route}`, oncreate: m.route.link },
                        row.name
                    )
                )
            ])
        ])
    }
}
