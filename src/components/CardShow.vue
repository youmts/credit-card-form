<template>
  <div class="card-show">
    <div class="card-show_nice-type">
      {{ niceType }}
    </div>
    <div class="card-show_card-number">
      {{ showCardNumber }}
    </div>
    <div class="card-show_card-name">
      {{ showCardName }}
    </div>
    <div class="card-show_expiration">
      {{ showExpirationMonth }} / {{ showExpirationYear }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    cardNumber: {
      type: String,
      required: true
    },
    cardName: {
      type: String,
      required: true
    },
    expirationMonth: {
      type: String,
      required: true
    },
    expirationYear: {
      type: String,
      required: true
    },
    cvv: {
      type: String,
      required: true
    },
    niceType: {
      type: String,
      default: undefined
    }
  },
  computed: {
    showCardNumber: function() {
      let i = 0;
      // NOTE: カード番号は最大12文字
      const v = (this.cardNumber || "") + "################";
      const mask = "#### #### #### ####";

      return mask.replace(/#/g, _ => v[i++]);
    },
    showCardName: function() {
      return this.cardName === "" ? "AD SOYAD" : this.cardName;
    },
    showExpirationMonth: function() {
      return this.expirationMonth === "" ? "MM" : this.expirationMonth;
    },
    showExpirationYear: function() {
      return this.expirationYear === "" ? "YY" : this.expirationYear;
    }
  }
});
</script>

<style scoped lang="scss">
.card-show {
  font-family: monospace;
  background-color: gray;
  color: white;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 1rem;
  width: 22rem;
  height: 12rem;
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.5);
}

.card-show_nice-type {
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  font-size: 1.5rem;
}

.card-show_card-number {
  position: absolute;
  top: 5rem;
  left: 1.5rem;
  font-size: 1.5rem;
}

.card-show_card-name {
  position: absolute;
  left: 1.5rem;
  bottom: 1rem;
  font-size: 1.2rem;
}

.card-show_expiration {
  position: absolute;
  right: 1.5rem;
  bottom: 1rem;
  font-size: 1.2rem;
}
</style>
