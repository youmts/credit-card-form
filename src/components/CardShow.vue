<template>
  <div class="card-show">
    <div class="card-show_nice-type">
      {{ niceType }}
    </div>
    <div class="card-show_card-number">
      {{ cardNumber }}
    </div>
    <div class="card-show_card-name">
      {{ cardName }}
    </div>
    <div class="card-show_expiration">
      {{ expirationMonth }} / {{ expirationYear }}
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
      required: true
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
