import * as m from 'mithril'

import NewsView from './views/NewsView'
import Layout from './layout/layout'
export default {
    '/top': {
        view() {
            return m(Layout, m(NewsView))
        }
    },
    '/new': {
        view() {
            return m(Layout, m(NewsView))
        }
    },
    '/show': {
        view() {
            return m(Layout, m(NewsView))
        }
    },
    '/ask': {
        view() {
            return m(Layout, m(NewsView))
        }
    },
    '/jobs': {
        view() {
            return m(Layout, m(NewsView))
        }
    },
    '/item/:id': {
        view() {
            return m(Layout, m(NewsView))
        }
    }
}
