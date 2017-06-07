import * as m from 'mithril'

import { ClassComponent } from 'mithril'

export default class NewsList implements ClassComponent<{}> {
    oninit = () => console.log('loaded', m.route.get())
    view() {
        return m('.news-list', 'News List')
    }
}
