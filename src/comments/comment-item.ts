import * as m from 'mithril'
import { style, classes } from 'typestyle'

import { px, em, color } from 'csx'
import { flexRoot } from 'csstips'

import { ClassComponent } from 'mithril'

const article = style({
    marginTop: px(10)
})

const child = style({})

const link = style({
    color: '#666'
})

const content = style(
    {
        // borderBottom: `${px(1)} solid #eee`
    }
)

const hide = style(flexRoot, {})

const select = style({
    cursor: 'pointer',
    userSelect: 'none'
})

const more = style({
    color: '#666',
    display: 'block',
    padding: `${em(0.3)} ${em(0.5)}`,
    borderRadius: px(4),
    backgroundColor: color('#1e5799').lighten(0.55).toHexString()
})

const commentList = style({
    borderTop: `${px(1)} solid #eee`,
    marginTop: px(7),
    marginLeft: px(10)
})

const children = (comments, onclick) => {
    if (comments.length > 0) {
        return m('div', { className: hide }, [
            m('span', { className: select, onclick }, '[-]'),
            m('div', { className: commentList }, comments.map(row => m(CommentItem, { comment: row, isChild: true })))
        ])
    }
}

const showMore = (comment, onclick) => {
    return m('span', { className: classes(more, select), onclick }, `[+] ${comment.comments.length} replies collapsed`)
}

export default class CommentItem implements ClassComponent<{}> {
    showComments = true

    toggleShowComments() {
        console.log('toggle show comments', this.showComments)
        this.showComments = !this.showComments
        console.log('toggle show comments', this.showComments)
    }

    view(vnode) {
        let { comment, isChild } = vnode.attrs

        return m('article', { className: isChild ? classes(child, article) : article }, [
            m('header', [
                m('a', { className: link, href: `/user/${comment.user}`, oncreate: m.route.link }, comment.user),
                m('span', ` ${comment.time_ago}`)
            ]),
            m('div', { className: content, innerHTML: comment.content }),
            this.showComments
                ? children(comment.comments, () => this.toggleShowComments())
                : showMore(comment, () => this.toggleShowComments())
        ])
    }
}
