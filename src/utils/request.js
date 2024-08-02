import axios from 'axios'

const service = axios.create({
    baseURL: import.meta.env.VITE_API_BASEURL,
    timeout: 5000000
})

// 请求拦截器
service.interceptors.request.use(
    (config) => {
        // config.headers.token = 'input you icode'
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use((response) => {

    const { code, msg, data } = response.data
    if (code == 200) {
        getVersion(response)
        return data
    } else {
        return Promise.reject(new Error(msg))
    }
})
const getVersion = (response) => {
    const sVer = response.headers['kanban-version']
    const ver = localStorage.getItem('kanban-version')
    if (sVer) {
        if (!ver) {
            localStorage.setItem('kanban-version', sVer)
        } else {
            if (ver !== sVer) {
                localStorage.setItem('kanban-version', sVer)
                location.reload(true)
            }
        }
    }
}
// 适配器, 用于适配不同的请求方式
export const baseRequest = (url, value = {}, method = 'post', options = {}) => {
    if (method === 'post') {
        return service.post(url, value, options)
    } else if (method === 'get') {
        return service.get(url, { params: value, ...options })
    } else if (method === 'formdata') {
        // form-data表单提交的方式
        return service.post(url, JSON.stringify(value), {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            ...options
        })
    } else {
        // 其他请求方式，例如：put、delete
        return service({
            method: method,
            url: url,
            data: value,
            ...options
        })
    }
}

