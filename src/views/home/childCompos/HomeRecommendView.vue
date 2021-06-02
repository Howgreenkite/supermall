<template>
  <div class="recommend">
    <div
      class="recommend-item"
      v-for="(item, index) in recommends"
      :key="index"
    >
      <a :href="item.link">
        <img :src="item.image" alt="" srcset="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 20px;
  border-bottom: 10px solid #eee;
  /* height: 30px; */
}
.recommend img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
.recommend-item {
  flex: 1;
}
</style>