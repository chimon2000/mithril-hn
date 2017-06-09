import config from './config'

import * as m from 'mithril'

type LoadProps = {
    id?: number
    page?: number
    listType?: 'news' | 'newest' | 'jobs' | 'ask'
}

export type Story = {
    id: number
    title: string
    points: number
    time_ago: string
    comments_count: number
    user: string
    url: string
    comments: any[]
}

const DefaultLoadProps: LoadProps = {
    page: 1,
    listType: 'news'
}

const News = {
    loading: {
        list: true,
        current: true
    },
    list: [],
    current: {} as Story,
    async load(props: LoadProps = DefaultLoadProps) {
        let { listType, id, page = 1 } = props
        if (id) {
            this.loading.current = true
            let story: any = await m.request({
                method: 'GET',
                url: `${config.baseUrl}/item/${id}`
            })

            this.current = story
            this.loading.current = false
        } else {
            this.loading.list = true
            let stories: any = await m.request({
                method: 'GET',
                url: `${config.baseUrl}/${listType}?page=${page || 1}`
            })

            this.list = stories
            this.loading.list = false
        }
    }
}

export default News
