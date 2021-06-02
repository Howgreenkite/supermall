<template>
  <TabBar>
    <TabBarItem path="/Home" activeColor="blue">
      <template v-slot:item-icon>
        <div>
          <img src="~assets/img/tabbar/home.svg" alt="" />
        </div>
      </template>
      <template v-slot:item-icon-active>
        <div>
          <img src="~assets/img/tabbar/home_active.svg" alt="" />
        </div>
      </template>
      <template v-slot:item-text>
        <div class="title">首页</div>
      </template>
    </TabBarItem>
    <TabBarItem path="/Category">
      <template v-slot:item-icon>
        <div>
          <img src="~assets/img/tabbar/home.svg" alt="" />
        </div>
      </template>
      <template v-slot:item-icon-active>
        <div>
          <img src="~assets/img/tabbar/home_active.svg" alt="" />
        </div>
      </template>
      <template v-slot:item-text>
        <div>
          <div class="title">分类</div>
        </div>
      </template>
    </TabBarItem>
    <TabBarItem path="/Cart">
      <template v-slot:item-icon>
        <div>
          <img src="~assets/img/tabbar/home.svg" alt="" />
        </div>
      </template>
      <template v-slot:item-icon-active>
        <div>
          <img src="~assets/img/tabbar/home_active.svg" alt="" />
        </div>
      </template>
      <template v-slot:item-text>
        <div>
          <div class="title">购物车</div>
        </div>
      </template>
    </TabBarItem>
    <TabBarItem path="/Profile">
      <template v-slot:item-icon>
        <div>
          <img src="~assets/img/tabbar/home.svg" alt="" />
        </div>
      </template>
      <template v-slot:item-icon-active>
        <div>
          <img src="~assets/img/tabbar/home_active.svg" alt="" />
        </div>
      </template>
      <template v-slot:item-text>
        <div>
          <div class="title">我的</div>
        </div>
      </template>
    </TabBarItem>
  </TabBar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style scoped>
</style>