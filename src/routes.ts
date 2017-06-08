import * as m from 'mithril'

import NewsView from './views/NewsView'
import UserView from './views/UserView'
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
        view(vnode) {
            return m(Layout, m(NewsView, vnode.attrs))
        }
    },
    '/user/:name': {
        view(vnode) {
            return m(Layout, m(UserView, vnode.attrs))
        }
    }
}
