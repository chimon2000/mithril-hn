import * as m from 'mithril'
import { style } from 'typestyle'
import { white, em } from 'csx'
import News from '../models/News'
import NewsItem from './news-item'

const className = style({ backgroundColor: white.toHexString(), padding: em(2) })

import { ClassComponent } from 'mithril'

export default class NewsList implements ClassComponent<{}> {
    view() {
        let { list: stories } = News

        return m('div', { className }, stories.map((story, idx) => m(NewsItem, { story, idx })))
    }
}
