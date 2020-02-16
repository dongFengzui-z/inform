<template>
   <div class="page-navbar">
    <!-- navbar -->
    <mt-navbar class="page-part" v-model="selected">
      <mt-tab-item id="1">
          <router-link to="/finsh">已读</router-link>
          /mt-tab-item>
      <mt-tab-item id="2">
          <router-link to="/unread">未读</router-link>
          </mt-tab-item>
    </mt-navbar>
    <!-- tabcontainer -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-cell v-for="n in 10" :key="n" :title="'内容 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 4" :key="n" :title="'测试 ' + n" />
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import { Navbar, TabItem } from "mint-ui";
import { Search } from "mint-ui";

export default {
  name: "page-navbar",
  data() {
    return {
      selected: "1"
    };
  },
  methods: {
    loadListData:{
      
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mint-navbar .mint-tab-item.is-selected {
  border-bottom: 3px solid #30ada4;
  color: #30ada4;
  margin-bottom: 5px;
}
 .searchWrap {
    margin: 5px 8px;
    background: #fff;
  }
  .mint-searchbar{
    padding:5px 5px 0 5px;
    box-sizing: border-box
  }
</style> >


