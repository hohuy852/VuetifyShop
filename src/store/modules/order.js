import axios from 'axios'

const state = {
    orderList: [],
}

const actions = {
    getOrders({ commit }) {
        return axios
            .get('https://web-demo.online/order')
            .then(response => {
                commit('GET_ORDER', response.data)
            })
    },
    postOrder({ commit }, order) {
        // console.log(order)

        return axios
            .post('https://web-demo.online/addOrder', {
                orderItems: order.orderItems,
                status: order.status,
                idUser: order.idUser,
                Datetime: order.Datetime,
                total: order.total,
                discount: "",
                email: order.email,
                firstName: order.firstName,
                lastName: order.lastName,
                company: order.company,
                address: order.lastName,
                apartment: order.apartment,
                city: order.city,
                country: order.country,
                postalCode: order.postalCode,
                phone: order.phone
            })
            .then(
                commit('POSTED_ORDER')
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