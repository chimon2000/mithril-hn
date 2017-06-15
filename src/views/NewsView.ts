import * as m from 'mithril'

import { ClassComponent } from 'mithril'
import { style, keyframes } from 'typestyle'
import { px, white, em } from 'csx'

import NewsList from '../news/news-list'
import News from '../models/News'
import Loading from '../components/loading'

const pageToListType = {
    top: 'news',
    new: 'newest',
    jobs: 'jobs',
    ask: 'ask',
    show: 'show'
}
const loadingAnimation = keyframes({
    '0%': { opacity: 0 },
    '50%': { opacity: 1 }
})

const className = style({
    animationName: loadingAnimation,
    animationDuration: '2s',
    marginTop: px(1)
})

const pager = style({
    paddingLeft: em(3.2),
    paddingTop: em(1.5),
    backgroundColor: white.toHexString()
})

const link = style({
    color: '#34495e',
    textDecoration: 'none',
    fontWeight: 600
})

export default class NewsView implements ClassComponent<{}> {
    state: { page?; name? } = {}

    oninit = async vnode => {
        const { key: page, name } = vnode.attrs
        this.state.page = page
        this.state.name = name

        let listType = pageToListType[name]
        await News.load({ listType, page })
    }

    view() {
        let { list: loading } = News.loading
        let { name, page } = this.state

        return loading
            ? m(Loading)
            : m('div', { className }, [
                  m(NewsList, { start: page }),
                  m(
                      'div',
                      { className: pager },
                      m('a', { className: link, href: `/${name}/${++page}`, oncreate: m.route.link }, 'More...')
                  )
              ])
    }
}
