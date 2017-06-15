import * as m from 'mithril'
import { style } from 'typestyle'
import { white, em } from 'csx'
import News from '../models/News'
import NewsItem from './news-item'

const className = style({ backgroundColor: white.toHexString(), padding: `${em(2)} ${em(2)} 0` })

import { ClassComponent } from 'mithril'

const getIndex = (start, index) => index + 30 * (start - 1)

export default class NewsList implements ClassComponent<{}> {
    view(vnode) {
        let { start } = vnode.attrs
        let { list: stories } = News

        return m('div', { className }, stories.map((story, idx) => m(NewsItem, { story, idx: getIndex(start, idx) })))
    }
}
