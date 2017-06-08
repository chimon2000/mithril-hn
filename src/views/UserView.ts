import * as m from 'mithril'
import { style, keyframes } from 'typestyle'
import { white, em, px } from 'csx'

import { ClassComponent } from 'mithril'

import User from '../models/User'
import Loading from '../components/loading'

const loadingAnimation = keyframes({
    '0%': { opacity: 0 },
    '50%': { opacity: 1 }
})

const className = style({
    animationName: loadingAnimation,
    animationDuration: '2s',
    backgroundColor: white.toHexString(),
    marginTop: px(1),
    padding: em(2)
})
const link = style({ color: 'black' })
export default class UserView implements ClassComponent<{}> {
    oninit = async vnode => User.load(vnode.attrs.name)
    view() {
        const user: any = User.current
        const { current: loading } = User.loading

        if (!user) return 'No user'

        return m(
            'div',
            loading
                ? m(Loading)
                : [
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
                              m(
                                  'a',
                                  { className: link, href: `https://news.ycombinator.com/threads?id=${user.id}` },
                                  'comments'
                              ),
                              m('span', ' | '),
                              m(
                                  'a',
                                  { className: link, href: `https://news.ycombinator.com/favorites?id=${user.id}` },
                                  'favorites'
                              )
                          ])
                      ])
                  ]
        )
    }
}
