<template>
  <div>
    <stripe-elements
      ref="elementsRef"
      :pk="publishableKey"
      :amount="amount"
      @token="tokenCreated"
      @loading="loading = $event"
    >
    </stripe-elements>
    <button @click="submit">Pay ${{ amount / 100 }}</button>
  </div>
</template>

<script>
//import { StripeCheckout } from "@vue-stripe/vue-stripe";
export default {
    name: 'Checkout',
  components: {
    //StripeCheckout,
  },
  data() {
    return {
      publishableKey: 'pk_test_51JaZDcKxJ1q21bFkeNgBhAhrrPt5mATjMat6Ky1RJRLctHQbyoBTECUlwwzx97lFiIbH9WTeAWhEHYfrluArc2IX00D7RSpaIl',
      loading: false,
       token: null,
        charge: null,
      successURL: "your-success-url",
      cancelURL: "your-cancel-url",
      amount:1000
    };
  },
  methods: {
    submit () {
      this.$refs.elementsRef.submit();
    },
    tokenCreated (token) {
      this.token = token;
      // for additional charge objects go to https://stripe.com/docs/api/charges/object
      this.charge = {
        source: token.card,
        amount: this.amount,
        description: this.description
      }
      this.sendTokenToServer(this.charge);
    },
    sendTokenToServer () {
      // Send to server
    }
  }
};
</script>