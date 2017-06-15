import * as m from 'mithril'

import routes from './routes'

import { normalize } from 'csstips'

normalize()

const root = document.body

m.route(root, '/top/1', routes)
