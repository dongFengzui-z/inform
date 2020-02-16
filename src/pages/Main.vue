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
    <div class="ssk">
      <router-link to="/search">
        <img src="../assets/ssk.png" alt />
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Main",
  components: {},
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
.ssk {
  margin: 0.5em;
}
</style>