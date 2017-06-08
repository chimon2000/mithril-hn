import * as m from 'mithril'

import { ClassComponent } from 'mithril'

import NewsList from '../news/news-list'
import News from '../models/News'

const pageToListType = {
    '/top': 'news',
    '/new': 'newest',
    '/jobs': 'jobs',
    '/ask': 'ask',
    '/show': 'show'
}

export default class NewsView implements ClassComponent<{}> {
    oninit = async () => {
        let listType = pageToListType[m.route.get()]
        await News.load({ listType })
    }
    view() {
        return m('.news-view', m(NewsList))
    }
}
