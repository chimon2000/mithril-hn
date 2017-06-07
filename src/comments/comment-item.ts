import * as m from 'mithril'

import { ClassComponent } from 'mithril'

export default class CommentList implements ClassComponent<{}> {
    view() {
        return m('.comment-list', 'Comment List')
    }
}
