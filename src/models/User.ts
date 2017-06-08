import * as m from 'mithril'
import config from './config'

const User = {
    current: {},
    async load(id) {
        let user: any = await m.request({
            method: 'GET',
            url: `${config.baseUrl}/user/${id}`
        })

        this.current = user
    }
}

export default User
