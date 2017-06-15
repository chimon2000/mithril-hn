import * as m from 'mithril'
import { style, classes } from 'typestyle'
import { white, em, px } from 'csx'

import { ClassComponent } from 'mithril'
import News from '../models/News'
import CommentItem from '../comments/comment-item'
import Loading from '../components/loading'

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

const noComments = style({
    marginTop: px(10)
})

const unstyledLink = classes(link, unstyled)

const comments = comments => {
    return comments.length > 0
        ? comments.map(comment => m(CommentItem, { comment }))
        : m('div', { className: noComments }, 'No comments yet')
}

export default class ItemView implements ClassComponent<{}> {
    oninit = async vnode => News.load({ id: vnode.attrs.id })

    view() {
        let { current: story } = News
        let { current: loading } = News.loading

        return loading
            ? m(Loading)
            : m('article', { className: article }, [
                  m('a', { className: unstyledLink, href: story.url }, story.title),
                  m('div', { className: detail }, [
                      m('span', `${story.points} points by `),
                      m('a', { href: `/user/${story.user}`, oncreate: m.route.link }, story.user),
                      m('span', ` ${story.time_ago} | `),
                      m('span', {}, `${story.comments_count} comments`)
                  ]),
                  m('div', { className: comment }, story.comments && comments(story.comments))
              ])
    }
}
