<template>
  <div id="home">
    <NavBar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </NavBar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <HomeRecommendView :recommends="recommends"></HomeRecommendView>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import { getHomeMultidata } from "network/home.js";
import HomeSwiper from "./childCompos/HomeSwiper";
import HomeRecommendView from "./childCompos/HomeRecommendView";
export default {
  data() {
    return {
      // result: null,
      banners: [],
      recommends: [],
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
  },
  created() {
    getHomeMultidata().then((res) => {
      // console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
}
</style>