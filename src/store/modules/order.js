import axios from 'axios'

const state = {
    orderList: [],
}

const actions = {
    getOrders({commit} ){
        return axios
        .get('https://web-demo.online/order')
        .then(response => {
            commit('GET_ORDER', response.data)
        })
    },
    postOrder(order){
        return axios
        .post('https://web-demo.online/addOrder', {
            email : order.email,
            firstName : order.firstName,
            lastName : order.lastName,
            //company : order.company,
            address: order.address,
            //apartment : order.apartment,
            phone : order.phone,
            city : order.city,
            country : order.country,
            //postalCode : order.postalCode,
           
            // total: order.total,
            // OrderItems: order.OrderItems
        })
    }
}

const mutations = {
    GET_ORDER(state,orderList){
        state.orderList = orderList
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