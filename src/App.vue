<template>
  <div>
    <b-nav>
      <b-nav-item>Like Github Project</b-nav-item>
    </b-nav>
    <b-container>
      <Project />
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Project from "./components/Project.vue";

export default Vue.extend({
  name: "App",
  components: {
    Project
  }
});
</script>
