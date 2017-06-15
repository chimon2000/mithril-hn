import * as m from 'mithril'

import NewsView from './views/NewsView'
import UserView from './views/UserView'
import ItemView from './views/ItemView'
import Layout from './layout/layout'
export default {
    '/top/:key': {
        view(vnode) {
            return m(Layout, m(NewsView, { ...vnode.attrs, name: 'top' }))
        }
    },
    '/new/:key': {
        view(vnode) {
            return m(Layout, m(NewsView, { ...vnode.attrs, name: 'new' }))
        }
    },
    '/show/:key': {
        view(vnode) {
            return m(Layout, m(NewsView, { ...vnode.attrs, name: 'show' }))
        }
    },
    '/ask/:key': {
        view(vnode) {
            return m(Layout, m(NewsView, { ...vnode.attrs, name: 'ask' }))
        }
    },
    '/jobs/:key': {
        view(vnode) {
            return m(Layout, m(NewsView, { ...vnode.attrs, name: 'jobs' }))
        }
    },
    '/item/:id': {
        view(vnode) {
            return m(Layout, m(ItemView, vnode.attrs))
        }
    },
    '/user/:name': {
        view(vnode) {
            return m(Layout, m(UserView, vnode.attrs))
        }
    }
}
