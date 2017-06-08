import * as m from 'mithril'
import { style } from 'typestyle'
import { white, em } from 'csx'

import { ClassComponent } from 'mithril'

import User from '../models/User'

const className = style({ backgroundColor: white.toHexString(), padding: em(2) })
const link = style({ color: 'black' })
export default class UserView implements ClassComponent<{}> {
    oninit = async vnode => User.load(vnode.attrs.name)
    view() {
        const user: any = User.current

        if (!user) return 'No user'

        return m('div', [
            m('section', { className }, [
                m('h2', `User: ${user.id}`),
                m('div', `Created: ${user.created}`),
                m('div', `Karma: ${user.karma}`),
                m('div', { innerHTML: user.about }),
                m('div', [
                    m(
                        'a',
                        { className: link, href: `https://news.ycombinator.com/submitted?id=${user.id}` },
                        'submissions'
                    ),
                    m('span', ' | '),
                    m('a', { className: link, href: `https://news.ycombinator.com/threads?id=${user.id}` }, 'comments'),
                    m('span', ' | '),
                    m(
                        'a',
                        { className: link, href: `https://news.ycombinator.com/favorites?id=${user.id}` },
                        'favorites'
                    )
                ])
            ])
        ])
    }
}
