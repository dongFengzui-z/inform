<template>
  <div>
    <mt-header title="意见反馈">
      <!-- <router-link to="/detail" slot="left">
        X
      </router-link> -->
    </mt-header>
    <img src="../assets/advice.png" alt />
    <form action="post">
      <div class="content">
        <div class="lx">
          <div class="zt">请选择反馈类型</div>
          <div class="jt">
            <div class="ts" id="1">投诉</div>
            <div class="ts" id="2">建议</div>
            <div class="ts" id="3">表扬</div>
          </div>
        </div>
        <div class="add">
          <textarea
            cols="40"
            rows="5"
            class="site"
            maxlength="100"
            @input="descInput"
            v-model="desc"
            placeholder="请输入你要反馈的内容"
          ></textarea>
          <span class="xianzhi">{{remnant}}/100</span>
        </div>
        <div class="addp">
          <div class="addpt">添加图片（可选）</div>
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
        <h3>图片的格式为{{ type }}   图片的大小为{{ size }}M</h3>
      </div>
      <div class="btn">
        <mt-button type="primary" size="large">确认提交</mt-button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "advice",
  data() {
    return {
      remnant: 0,
      desc:"",
      imageUrl:"",
      size:"",
      type:""
    };
  },
  methods: {
    descInput() {
      var txtVal = this.desc.length;
      this.remnant = txtVal;
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;
      this.type=file.type;
      this.size=file.size/1024/1024
      console.log("图片的格式为"+file.type)
      console.log("图片的大小为"+file.size/1024/1024+"M")

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
  
  }
};
</script>
<style scoped>
.mint-header {
  margin-top: 0.5em;
  padding: 1em;
  background-color: #f2f2f2;
  color: black;
  font-size: 16px;
  font-weight: bold;
}
img {
  width: 100%;
  height: 120px;
}
.content {
  background-color: #ffffff;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 1em;
}
.jt {
  display: flex;
  margin-bottom: 1em;
}
.ts {
  width: 3em;
  height: 1.5em;
  font-size: 13px;
  color: #3888fb;
  border: 1px solid #3888fb;
  margin-right: 1em;
  margin-top: 1.3em;
  border-radius: 10%;
  text-align: center;
}
.ts:hover {
  background-color: #3888fb;
  color: #ffffff;
}
.lx {
  border-bottom: 1px solid rgb(160, 150, 150, 0.3);
}
textarea {
  margin-top: 1em;
}
.xianzhi {
  position: relative;
  margin-left: 17em;
}

.addpt {
  margin-bottom: 1em;
}
.btn {
  padding: 0.5em;
}
</style>
<style >
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 78px;
  height: 78px;
  line-height: 78px;
  text-align: center;
}
.avatar {
  width: 78px;
  height: 78px;
  display: block;
}
</style>