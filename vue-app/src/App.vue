<template>
  <div id="app">
    <!--show navigation component-->
    <SiteNav v-if="showNav"></SiteNav>
    <!--show requested route-->
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";
import SiteNav from "@/components/SiteNav";

export default {
  components: {
    SiteNav
  },
  computed: {
    ...mapState(["userProfile"]),
    showNav() {
      return Object.keys(this.userProfile).length > 1;
    }
  }
};
</script>
