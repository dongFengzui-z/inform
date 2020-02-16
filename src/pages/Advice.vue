<template>
  <div>
    <mt-header title="意见反馈">
      <router-link to="/detail" slot="left">
        <mt-button>X</mt-button>
      </router-link>
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
            action="/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
        </div>
      </div>
      <div class="btn">
        <mt-button type="primary" size="large">确认提交</mt-button>
      </div>
    </form>
  </div>
</template>
<script>
import { Header } from "mint-ui";
import { Button } from "mint-ui";

export default {
  name: "advice",
  data() {
    return {
      remnant: 0,
      desc: "",
      dialogImageUrl: "",
      dialogVisible: false
    };
  },
  methods: {
    descInput() {
      var txtVal = this.desc.length;
      this.remnant = txtVal;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
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
.el-upload--picture-card {
  width: 50px;
  height: 50px;
  line-height: 60px;
}
</style>