import * as m from 'mithril'
import config from './config'

const User = {
    loading: {
        current: true
    },
    current: {},
    async load(id) {
        this.loading.current = true

        let user: any = await m.request({
            method: 'GET',
            url: `${config.baseUrl}/user/${id}`
        })

        this.current = user
        this.loading.current = false
    }
}

export default User
