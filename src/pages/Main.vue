<template>
  <div class="navbar">
    <!-- navbar -->
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">
        <router-link to="/finish">已读</router-link>
      </mt-tab-item>
      <mt-tab-item id="2">
        <router-link to="/unread">未读</router-link>
      </mt-tab-item>
    </mt-navbar>
    <!-- 搜索框 -->
    <router-link to="/search">
      <mt-search></mt-search>
    </router-link>
    
    <router-view />

  </div>
</template>
<script>
export default {
  name: "Main",
  data() {
    return {
      selected: "1"
    };
  }
};
</script>
<style  scoped>
.mint-navbar .mint-tab-item.is-selected {
  border-bottom: 3px solid #30ada4;
  color: #30ada4;
  margin-bottom: 0px;
}
img {
  width: 100%;
}
.mint-search {
  height: 8vh;
}
</style>