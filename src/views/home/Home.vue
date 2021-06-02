<template>
  <div id="home">
    <NavBar class="home-nav">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </NavBar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <HomeRecommendView :recommends="recommends"></HomeRecommendView>
    <HomeFeatureView></HomeFeatureView>
    <TabControl :titles="['流行', '新款', '精选']"></TabControl>
    <ul>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
      <li>12312421</li>
    </ul>
  </div>
</template>

<script>
//项目组件
import NavBar from "components/common/navbar/NavBar.vue";
import TabControl from "components/content/tabControl/TabControl.vue";
//home子组件
import HomeSwiper from "./childCompos/HomeSwiper";
import HomeRecommendView from "./childCompos/HomeRecommendView";
import HomeFeatureView from "./childCompos/HomeFeatureView";
//方法
import { getHomeMultidata, getHomeGoods } from "network/home.js";

export default {
  data() {
    return {
      // result: null,
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        news: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
    };
  },
  components: {
    NavBar,
    TabControl,

    HomeSwiper,
    HomeRecommendView,
    HomeFeatureView,
  },
  created() {
    //多个数据
    this.getHomeMultidata();
    //是哪个潘书记
    this.getHomeGoods("pop");
    this.getHomeGoods("news");
    this.getHomeGoods("sell");
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        // this.title = res.data.title;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, 1).then((res) => {
        console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page + 1;
      });
    },
  },
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
</style>