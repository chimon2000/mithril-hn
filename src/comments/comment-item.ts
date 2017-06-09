import * as m from 'mithril'
import { style, classes } from 'typestyle'

import { px, em } from 'csx'

import { ClassComponent } from 'mithril'

const article = style({
    marginTop: px(10)
})

const child = style({
    marginLeft: px(25)
})

const link = style({
    color: '#666'
})

const content = style({
    borderBottom: `${px(1)} solid #eee`
})

export default class CommentItem implements ClassComponent<{}> {
    view(vnode) {
        let { comment, idx, isChild, showComments } = vnode.attrs

        return m('article', { className: isChild ? classes(child, article) : article }, [
            m('header', [
                m('a', { className: link, href: `/user/${comment.user}`, oncreate: m.route.link }, comment.user),
                m('span', ` ${comment.time_ago}`)
            ]),
            m('div', { className: content, innerHTML: comment.content }),
            comment.comments.map(row => m(CommentItem, { comment: row, isChild: true }))
        ])
    }
}
