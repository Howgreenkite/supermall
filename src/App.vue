<template>
  <div>
    <router-view></router-view>
    <mainTabbar></mainTabbar>
  </div>
</template>
<script>
import MainTabbar from "components/content/mainTabbar/MainTabbar";
export default {
  components: {
    MainTabbar,
  },
};
</script>
<style lang="stylus">
@import url('assets/css/base.css');
</style>
