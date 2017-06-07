import * as m from 'mithril'

import { ClassComponent } from 'mithril'

export default class ItemView implements ClassComponent<{}> {
    view() {
        return m('.item-view', 'Item View')
    }
}
