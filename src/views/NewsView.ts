import * as m from 'mithril'

import { ClassComponent } from 'mithril'
import { style, keyframes } from 'typestyle'
import { px } from 'csx'

import NewsList from '../news/news-list'
import News from '../models/News'
import Loading from '../components/loading'

const pageToListType = {
    '/top': 'news',
    '/new': 'newest',
    '/jobs': 'jobs',
    '/ask': 'ask',
    '/show': 'show'
}
const loadingAnimation = keyframes({
    '0%': { opacity: 0 },
    '50%': { opacity: 1 }
})

const className = style({
    animationName: loadingAnimation,
    animationDuration: '2s',
    marginTop: px(1)
})
export default class NewsView implements ClassComponent<{}> {
    oninit = async () => {
        let listType = pageToListType[m.route.get()]
        await News.load({ listType })
    }
    view() {
        let { list: loading } = News.loading

        return loading ? m(Loading) : m('div', { className }, m(NewsList))
    }
}
