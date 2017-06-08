import config from './config'

import * as m from 'mithril'

type LoadProps = {
    id?: number
    page?: number
    listType: 'news' | 'newest' | 'jobs' | 'ask'
}

const DefaultLoadProps: LoadProps = {
    page: 1,
    listType: 'news'
}

const News = {
    list: [],
    current: {},
    async load(props: LoadProps = DefaultLoadProps) {
        let { listType, id, page = 1 } = props
        if (id) {
            let user: any = await m.request({
                method: 'GET',
                url: `${config.baseUrl}/item/${id}`,
                data: { id }
            })

            this.current = user
        } else {
            let stories: any = await m.request({
                method: 'GET',
                url: `${config.baseUrl}/${listType}?page=${page || 1}`
            })

            this.list = stories
        }
    }
}

export default News
