<template>
  <div class="list">
    <mt-loadmore
      :top-method="loadTop"
      :bottom-all-loaded="allLoaded"
      :max-distance="100"
      @top-status-change="handleTopChange"
      ref="loadmore"
    >
      <div slot="top" class="mint-loadmore-top">
        <span v-show="topStatus === 'pull'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
        <span v-show="topStatus === 'loading'">Loading...</span>
        <span v-show="topStatus === 'drop'">释放更新</span>
      </div>

      <div class="tips" v-for="(item,index) in array" :key="item.title" @click="showDetail(index)">
        <div v-if="item.status==='1'">
          <!-- <router-link
            :to="{name:'detail',query:{
                title:item.title,content:item.content,time:item.time,author:item.author,img:item.img,
            }}"
          >-->
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
          <!-- </router-link> -->
        </div>
      </div>
    </mt-loadmore>
  </div>
</template>
<script>
import { Loadmore } from "mint-ui";
export default {
  name: "finish",
  data() {
    return {
      list: [],
      array: [],

      allLoaded: false,
      topStatus: ""
    };
  },
  methods: {
    showDetail(index) {
      this.$router.push({
        path: "/detail",
        query: {
          title: this.list[index].title,
          content: this.list[index].content,
          time: this.list[index].time,
          author: this.list[index].author,
          img: this.list[index].img
        }
      });
      // console.log(this.list[index].title)
    },

    loadTop: function() {
      // 刷新数据的操作
      setTimeout(() => {
        //  console.log(this.list[0])
        var _this = this;
        let firstValue = _this.list[0];
        console.log(this.list[0]);
        for (let i = 1; i <= 10; i++) {
          this.list.unshift(firstValue - i);
        }
        this.$refs.loadmore.onTopLoaded();
      }, 1500);
    },

    handleTopChange: function(status) {
      this.topStatus = status;
    }
  },

  mounted() {
    this.$axios
      .get("static/data.json")
      .then(res => {
        if (res.data.code === "1") {
          console.log("成功");
          //    console.log(res.data.result)
          this.list = res.data.result;
          var array = this.list.sort(function(a, b) {
            return b["time"] < a["time"] ? 1 : -1;
          });
          this.array = array.reverse();
        }
      })
      .catch(error => {
        // console.log("失败");
      });
  }
};
</script>
<style  scoped>
.list {
  background-color: #ffffff;
  position: relative;
  margin-top: -12px;
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
</style>