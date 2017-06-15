import * as m from 'mithril'
import { style, classes } from 'typestyle'
import { em, px } from 'csx'
import { flexRoot, vertical } from 'csstips'

import { ClassComponent } from 'mithril'

const article = style(flexRoot, {
    paddingLeft: em(1),
    $nest: {
        '&:not(:last-child)': {
            marginBottom: em(1.5)
        }
    }
})

const index = style({
    fontSize: em(1.6),
    width: px(50)
})

const detail = style({
    marginTop: em(0.5),
    color: '#666',
    fontSize: em(0.8)
})

const link = style({
    color: '#666'
})

const unstyled = style({
    textDecoration: 'none'
})

const unstyledLink = classes(link, unstyled)

export default class NewsList implements ClassComponent<{}> {
    view(vnode) {
        let { story, idx } = vnode.attrs
        return m('article', { className: article }, [
            m('div', { className: index }, idx + 1),
            m('div', { story }, [
                m('a', { className: unstyledLink, href: story.url }, story.title),
                m('div', { className: detail }, [
                    m('span', `${story.points} points by `),
                    m('a', { className: link, href: `/user/${story.user}`, oncreate: m.route.link }, story.user),
                    m('span', ` ${story.time_ago} | `),
                    m(
                        'a',
                        { className: link, href: `/item/${story.id}`, oncreate: m.route.link },
                        `${story.comments_count} comments`
                    )
                ])
            ])
        ])
    }
}
