import * as m from 'mithril'

const User = {
    list: [],
    current: {},
    async load(id?) {
        if (id) {
            let user: any = await m.request({
                method: 'GET',
                url: 'https://rem-rest-api.herokuapp.com/api/users/:id',
                data: { id },
                withCredentials: true
            })

            this.current = user
        } else {
            let { data }: any = await m.request({
                method: 'GET',
                url: 'https://rem-rest-api.herokuapp.com/api/users',
                withCredentials: true
            })

            this.list = data
        }
    },
    async save() {
        let result = await m.request({
            method: "PUT",
            url: "https://rem-rest-api.herokuapp.com/api/users/:id",
            data: User.current,
            withCredentials: true,
        })

        return result
    }
}

export default User