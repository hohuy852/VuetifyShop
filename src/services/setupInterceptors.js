import axiosInstance from './api';
import TokenService from './token.service'

const setup = (store) => {
    axiosInstance.interceptors.request.use(
        (config) => {
            const token = TokenService.getLocalAccessToken();
            if (token) {
                config.headers["Authorization"] = token
            }

            return config
        },
        (err) => {
            return Promise.reject(err)
        }
    )
    axiosInstance.interceptors.response.use(
        (res) => {
            return res
        },
        async (err) => {
            const originalConfig = err.config

            if (originalConfig.url !== "/login" && err.response) {
                //Access Token was expired
                if (err.response.status == 401 && !originalConfig._retry) {
                    originalConfig._retry = true
                    try {
                        const rs = await axiosInstance.post('refresh_token', {
                            refreshToken: TokenService.getLocalRefreshToken(),
                        })
                        //console.log(rs.data)

                        const { access_token } = rs.data

                        store.dispatch('auth/refreshToken', access_token)
                        TokenService.updateLocalAccessToken(access_token);
                        return axiosInstance(originalConfig)
                    }

                    catch (_err) {
                        console.log(_err.response.data)
                        return Promise.reject(_err)
                    }

                }
            }
            return Promise.reject(err)
        }

    )
}
export default setup