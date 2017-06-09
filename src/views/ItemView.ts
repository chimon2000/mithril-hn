import * as m from 'mithril'
import { style, classes } from 'typestyle'
import { white, em, px } from 'csx'

import { ClassComponent } from 'mithril'
import News from '../models/News'
import CommentItem from '../comments/comment-item'

const article = style({
    backgroundColor: white.toHexString(),
    padding: em(1.2)
})

const detail = style({
    paddingBottom: px(10),
    color: '#666',
    marginTop: em(0.5),
    fontSize: em(0.8),
    borderBottom: `${px(1)} solid #eee`
})

const comment = style({
    fontSize: em(0.85)
})

const link = style({
    color: '#666'
})

const unstyled = style({
    textDecoration: 'none'
})

const unstyledLink = classes(link, unstyled)

export default class ItemView implements ClassComponent<{}> {
    oninit = async vnode => News.load({ id: vnode.attrs.id })

    view() {
        let { current: story } = News

        return m('article', { className: article }, [
            m('a', { className: unstyledLink, href: story.url }, story.title),
            m('div', { className: detail }, [
                m('span', `${story.points} points by `),
                m('a', { href: `/user/${story.user}`, oncreate: m.route.link }, story.user),
                m('span', ` ${story.time_ago} | `),
                m('span', {}, `${story.comments_count} comments`)
            ]),
            m(
                'div',
                { className: comment },
                story.comments && story.comments.map(comment => m(CommentItem, { comment }))
            )
        ])
    }
}
