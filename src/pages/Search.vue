<template>
  <div>
    <mt-search v-model="keywords"></mt-search>
    <div class="list">
      <div class="tips" v-for="(item,index) in search(keywords)" :key="index">
        <div>
          <router-link
            :to="{name:'detail',query:{
                title:item.title,content:item.content,time:item.time,author:item.author,img:item.img,
            }}"
          >
            <div class="info">
              <div class="left">新闻</div>
              <div class="right">{{ item.status_DISPLAY }}</div>
            </div>
            <div class="con">
              <div class="yuan"></div>
              <div class="titl">{{ item.title }}</div>
            </div>
            <div class="au">
              <div class="author">{{ item.author }}</div>
              <div class="time">{{ item.time }}</div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "search",
  data() {
    return {
      keywords: "",
      dataList: [],
      SearchList: []
    };
  },
  methods: {
    getData() {
      this.$axios.get("static/data.json").then(res => {
        if (res.data.code === "1") {
          this.dataList = res.data.result;
        }
      });
    },
    search(keywords) {
      return this.dataList.filter((item, index) => {
        return item.title.includes(this.keywords);
      });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>
<style scoped>
.searchWrap {
  margin: 5px 8px;
  background: #fff;
}
.mint-searchbar {
  padding: 5px 5px 0 5px;
  box-sizing: border-box;
}
.list {
  background-color: #ffffff;
}
.tips {
  background-color: #ffffff;
  margin: 0em 2em 0.8em 2em;
}
.info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}
.left {
  width: 3em;
  height: 1.5em;
  border-radius: 10%;
  text-align: center;
  color: #3888fb;
  border: 1px solid#3888FB;
  font-size: 12px;
}
.info .right {
  font-size: 12px;
  color: #30ada4;
  background-color: #ecfbfb;
}
.au {
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  margin-top: 8px;
  color: rgb(160, 150, 150);
}
.titl {
  font-family: 18px;
}
.yuan {
  width: 0.8em;
  height: 0.8em;
  background: red;
  border-radius: 50%;
  position: relative;
  margin-top: 5px;
  margin-right: 8px;
}
.con {
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-left: -20px;
}
.mint-search {
  height: 8vh;
}
</style>