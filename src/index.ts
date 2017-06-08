import * as m from 'mithril'

import routes from './routes'

import './styles/main.css'

import { normalize, setupPage } from 'csstips'

normalize()

const root = document.body

const welcome = m('h1', { class: 'title' }, 'My first app')
const button = m('button', 'A button')
const Home = m('main', [welcome, button])

m.route(root, '/top', routes)
