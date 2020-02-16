<template>
  <div class="detail">
    <div class="content">
      <div class="title">{{this.$route.params.title }}</div>
      <div class="info">
        <img :src="img" />
        <div class="ti">
          <div class="hqw">环球网</div>
          <div class="ta">
            <div class="time">{{this.$route.params.time }}</div>
            <div class="author">{{this.$route.params.author}}</div>
          </div>
        </div>
      </div>
      <div class="importer">{{this.$route.params.content }}</div>
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
      img: this.$route.params.img
    };
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
.author{
  position: relative;
  margin-left: 2.2em;
}
.importer{
  font-size: 17px;
  line-height: 1.5em;
 letter-spacing:0.1em; 
 color: black
}
.yj{
  display: block; 
  margin-top: 20px;
  color: rgb(160, 150, 150);
}
</style>