import axios from 'axios'

const state = {
    orderList: [],
    postState: false,
}

const actions = {
    getOrders({ commit }, access_token) {
        return axios
            .get('https://web-demo.online/order',{
                headers: {
                      Authorization: access_token
                }
            })
            .then(response => {
                commit('GET_ORDER', response.data)
               // console.log(response.data)
            })
    },
    postOrder({ commit }, order) {
        return axios
            .post('https://web-demo.online/addOrder', {
                orderItems: order.orderItems,
                status: order.status,
                idUser: order.idUser,
                total: parseFloat(order.total),
                discount: "",
                email: order.email,
                firstName: order.firstName,
                lastName: order.lastName,
                company: order.company,
                address: order.address,
                apartment: order.apartment,
                city: order.city,
                country: order.country,
                postalCode: order.postalCode,
                phone: order.phone
            },
            // {
            //     headers: {
            //         Authorization: token
            //     }
            // }
            )
            .then(
                commit('POSTED_ORDER')
               //console.log(response => response.data)
            )
    }
}

const mutations = {
    GET_ORDER(state, orderList) {
        state.orderList = orderList
    },
    POSTED_ORDER(state) {
      state.postState = true
    }
}
const getters = {
    orders: state => state.orderList,
}
export default {
    state,
    actions,
    mutations,
    getters,
}