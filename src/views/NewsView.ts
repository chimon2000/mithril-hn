import * as m from 'mithril'

import NewsList from '../news/news-list'

import { ClassComponent } from 'mithril'

export default class NewsView implements ClassComponent<{}> {
    oninit = () => console.log('load users')
    view() {
        return m('.news-view', m(NewsList))
    }
}
