<template>
  <div>
    <CardShow v-bind="cardFormData" class="project_card-show" />
    <b-card class="mt-5">
      <CardForm v-model="cardFormData" class="project_card-form" />
    </b-card>
  </div>
</template>

<script lang="ts">
import CardForm, { CardFormData } from "../components/CardForm.vue";
import CardShow from "../components/CardShow.vue";
import Vue from "vue";

type State = {
  cardFormData: CardFormData;
};

export default Vue.extend({
  components: {
    CardForm,
    CardShow
  },
  data: function(): State {
    return {
      cardFormData: {
        cardNumber: "",
        cardName: "",
        expirationMonth: "",
        expirationYear: "",
        cvv: "",
        niceType: undefined
      }
    };
  }
});
</script>

<style scoped lang="scss">
.project_card-show {
  position: absolute;
  top: 4rem;
  z-index: 1;
  left: 50%;
  transform: translate(-50%, 0);
  -webkit-transform: translate(-50%, 0);
  -ms-transform: translate(-50%, 0);
}

.project_card-form {
  margin-top: 12rem;
}
</style>
