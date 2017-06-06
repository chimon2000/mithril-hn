import * as m from 'mithril'

import { ClassComponent } from 'mithril'
import User from '../models/User'

export default class UserForm implements ClassComponent<{}>{
    oninit = (vnode) => User.load(vnode.attrs.id)

    view() {
        return m('form', {
            onsubmit(e) {
                e.preventDefault();
                User.save()
            }
        }, [
                m('label.label', 'First name'),
                m('input.input[type=text][placeholder=First name]', {
                    oninput: m.withAttr('value', (value) => User.current.firstName = value),
                    value: User.current.firstName
                }),
                m('label.label', 'Last name'),
                m('input.input[type=text][placeholder=Last name]', {
                    oninput: m.withAttr('value', (value) => User.current.lastName = value),
                    value: User.current.lastName
                }),
                m('button.button[type=button', 'Save')
            ])
    }
}