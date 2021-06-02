<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="rigth"></slot></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  /* background-color: red; */
  text-align: center;
  color: #fff;
  box-shadow: 0 -1px 1px rgba(3, 3, 3, 0.3);
}
.left,
.right {
  width: 60px;
}
.center {
  flex: 1;
}
</style>