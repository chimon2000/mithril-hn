import * as m from 'mithril'

import { ClassComponent } from 'mithril'
import User from '../models/User'

export default class UserList implements ClassComponent<{}> {
    oninit = () => User.load()

    view() {
        return m('.user-list', User.list.map(user => {
            return m('a.user-item', { href: `/edit/${user.id}`, oncreate: m.route.link }, `${user.firstName} ${user.lastName}`)
        }))
    }
}