import * as m from 'mithril'
import UserList from './views/UserList'
import UserForm from './views/UserForm'

import './styles/main.css'

const root = document.body

const welcome = m('h1', { class: 'title' }, 'My first app')
const button = m('button', 'A button')
const Home = m('main', [
    welcome,
    button
])


m.route(document.body, "/users", {
    "/users": UserList,
    '/edit/:id': UserForm
})