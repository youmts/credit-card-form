<template>
  <div>
    <CardShow v-bind="cardFormData" />
    <CardForm v-model="cardFormData" />
  </div>
</template>

<script lang="ts">
import CardForm, { CardFormData } from "../components/CardForm.vue";
import Vue from "vue";

type State = {
  cardFormData: CardFormData;
};

export default Vue.extend({
  components: {
    CardForm
  },
  data: function(): State {
    return {
      cardFormData: {
        cardNumber: "",
        cardName: "",
        expirationDate: new Date(),
        cvv: ""
      }
    };
  }
});
</script>

<style scoped lang="scss"></style>
