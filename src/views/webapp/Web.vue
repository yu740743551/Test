<template>
    <div class="webapp">
        <div class="head">
          <span class="title">应用</span>
         </div>
        <div class="list">
            <ul>
                <li @click="wei">
                    <i class="iconfont icon-saoyisao1 icon-list" style="font-size: 0.24rem;"></i>
                    <span>扫一扫</span>
                </li>
                <li @click="wei">
                    <i class="iconfont icon-meitihezuo icon-list"></i>
                    <span>矿机</span>
                </li>
                <li @click="wei">
                    <i class="iconfont icon-sales1 icon-list"></i>
                    <span>新零售</span>
                </li>
                <li @click="wei">
                    <i class="iconfont icon-qian icon-list"></i>
                    <span>金融</span>
                </li>
                <li @click="wei">
                    <i class="iconfont icon-02 icon-list"></i>
                    <span>直播</span>
                </li>
                <li @click="wei">
                    <i class="iconfont icon-renqun icon-list"></i>
                    <span>群聊</span>
                </li>
                <li @click="wei">
                    <i class="iconfont icon-youxi icon-list"></i>
                    <span>DAPP</span>
                </li>
                <li @click="wei">
                    <i class="iconfont icon-lvyou icon-list"></i>
                    <span>旅游</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {};
  },
  methods: {
    wei() {
      Toast("暂未开放");
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/css/mixin";
.head {
  height: 0.4rem;
  position: fixed;
  top: 0.3rem;
  width: 100%;
  opacity: 1;
  z-index: 999;
  background: #151721;
}

.head .title {
  color: #fff;
  line-height: 0.4rem;
  font-size: 0.18rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.webapp {
  background: #151721;
}

.top {
  height: 50px;
  text-align: center;
  line-height: 50px;
  margin-bottom: 10px;

  span {
    color: $mtWhite;
  }
}

.list {
  width: 3.15rem;
  margin: 0.63rem auto 0 auto;
  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      width: 100%;
      height: 0.55rem;
      border-bottom: 1px solid #7f7e8b;
      display: flex;
      align-items: center;
      color: #d2e6e6;

      .icon-list {
        color: #d2e6e6;
        font-size: 0.26rem;
        margin-right: 10px;
      }
    }
  }
}
</style>