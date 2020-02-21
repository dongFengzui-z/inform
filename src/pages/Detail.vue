<template>
  <div class="detail">
    <div class="content">
      <div class="title">{{this.$route.query.title}}</div>
      <div class="info">
        <img :src="img" />
        <div class="ti">
          <div class="hqw">环球网</div>
          <div class="ta">
            <div class="time">{{this.$route.query.time }}</div>
            <div class="author">{{this.$route.query.author}}</div>
          </div>
        </div>
      </div>
      <div class="importer">{{this.$route.query.content }}</div>
      <router-link to="/advice" class="yj">评论</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "detail",
  data() {
    return {
      imgUrl: "",
      list: [],
      img: this.$route.query.img
      // detailData: {}
    };
  },
  created() {
    var _this = this;
    this.$axios
      .get("static/data.json")
      .then(res => {
        if (res.data.code === "1") {
          console.log("成功");
          //    console.log(res.data.result)
          this.list = res.data.result;
          // this.list.some(item => {
          //   // console.log(item.title)
          //   // console.log(_this.$route.query.title)
          //   if (item.title == _this.$route.query.title) {
          //     this.detailData = {
          //       title: item.title,
          //       time: item.time,
          //       author: item.author,
          //       content: item.content
          //     };
          //     return true;
          //   }
          // });
        }
      })
      .catch(error => {
        console.log("失败");
      });
  }
};
</script>
<style scoped>
.content {
  padding: 1em;
  background-color: #ffffff;
  height: 40em;
}
.content .title {
  font-size: 20px;
  font-weight: bold;
  color: black;
  line-height: 1.5em;
}
.info {
  margin-top: 1em;
  display: flex;
  margin-bottom: 1em;
}
img {
  width: 3em;
  height: 3em;
  border-radius: 50%;
  overflow: hidden;
}
.ti {
  margin-left: 0.5em;
  color: black;
}
.ta {
  display: flex;
  align-items: flex-end;
  font-size: 8px;
  margin-top: 0.3em;
  color: rgb(160, 150, 150);
}
.author {
  position: relative;
  margin-left: 2.2em;
}
.importer {
  font-size: 17px;
  line-height: 1.5em;
  letter-spacing: 0.1em;
  color: black;
}
.yj {
  display: block;
  margin-top: 20px;
  color: rgb(160, 150, 150);
}
</style>