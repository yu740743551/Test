<template>
  <scroller :on-refresh="refresh" ref="myscroller">
    <div class="home">
      <div class="gif">
        <div class="gifs">
          <img class="rotate" src="../../assets/images/wai.png" alt>
        </div>
        <div class="nei">
          <img class="rotates" src="../../assets/images/nei.png" alt>
        </div>
        <div class="kuang">
          <p>
            中级矿机
            <span>{{datas.middle}}/台</span>
          </p>
          <p>
            高级矿机
            <span>{{datas.highe}}/台</span>
          </p>
          <p>
            超级矿机
            <span>{{datas.super}}/台</span>
          </p>
        </div>
      </div>
      <div class="button">
        <div class="ict">
          <ul>
            <li>全网算力</li>
            <li>今日获取算力</li>
            <li>可用</li>
          </ul>
          <ul>
            <li>{{list.all_power}}</li>
            <li>{{list.today_power}}</li>
            <li>
              <span>{{list.curr_total}}</span>
              <span>{{list.curr}}</span>
            </li>
          </ul>
        </div>
        <div class="tibi">
          <ul>
            <li @click="extract">提币</li>
            <li @click="transfer">转账</li>
          </ul>
        </div>
        <div class="minxi">
          <p>明细</p>
          <img src="../../assets/images/minxi.png" alt>
        </div>
      </div>
      <div class="minxis">
        <ul>
          <li class="weight">
            <p>类型</p>
            <p>数量</p>
          </li>
          <li>
            <p>电费消耗</p>
            <p>1.5EOS</p>
          </li>
          <li>
            <p>电费消耗</p>
            <p>1.5EOS</p>
          </li>
          <li>
            <p>电费消耗</p>
            <p>1.5EOS</p>
          </li>
          <li>
            <p>电费消耗</p>
            <p>1.5EOS</p>
          </li>
          <li>
            <p>电费消耗</p>
            <p>1.5EOS</p>
          </li>
          <li>
            <p>电费消耗</p>
            <p>1.5EOS</p>
          </li>
          <li>
            <p>电费消耗</p>
            <p>1.5EOS</p>
          </li>
          <li>
            <p>电费消耗</p>
            <p>1.5EOS</p>
          </li>
          <li>
            <p>电费消耗</p>
            <p>1.5EOS</p>
          </li>
          <li>
            <p>电费消耗</p>
            <p>1.5EOS</p>
          </li>
        </ul>
      </div>
    </div>
  </scroller>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
      isLoading: false,
      list: [],
      datas: []
    };
  },
  created() {
    this.$axios
      .get("/member/getInfo?token=" + window.localStorage.getItem("token"))
      .then(r => {
        if (this.myUtils.isSuccess(r, this) == false) {
          return;
        }
        this.list = r.data.data;
        this.datas = r.data.data.rebot;
      })
      .catch(err => {
        Toast("网络连接失败");
      });
  },
  methods: {
    extract() {
      this.$router.push({
        name: "extract"
      });
    },
    transfer() {
      this.$router.push({
        name: "transfer"
      });
    },
    refresh() {
      setTimeout(r => {
        this.$refs["myscroller"].finishPullToRefresh();
      }, 500);
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  min-height: 100vh;
  .p1 {
    width: 100%;
    text-align: center;
    line-height: 0.3rem;
    font-size: 0.14rem;
  }
}

.gif {
  width: 100%;
  height: 2.36rem;
  position: relative;
  background: url(../../assets/images/bg.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

.rotate {
  transition: 0.1s;
  transform-origin: 30px 30px;
  animation: rotate 1s linear infinite;
  /*开始动画后无限循环，用来控制rotate*/
  transform-origin: center center;
  color: #fff;
  width: 100%;
}

.gifs {
  width: 1.7rem;
  height: 1.7rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.nei {
  width: 1.6rem;
  height: 1.6rem;
  position: absolute;
  left: 49.5%;
  top: 50%;
  transform: translate(-50%, -50%);
}

@keyframes rotates {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(-360deg);
  }
}

.rotates {
  transition: 0.1s;
  transform-origin: 30px 30px;
  animation: rotates 1s linear infinite;
  /*开始动画后无限循环，用来控制rotate*/
  transform-origin: center center;
  color: #fff;
  width: 100%;
}

.ict {
  width: 100%;
  height: 0.7rem;
  background: url(../../assets/images/icon_bg@2x.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.button {
  background: #282d41;
  padding: 0.15rem;
}

.ict ul {
  display: flex;
  margin-bottom: 0.05rem;
}

.ict ul li {
  width: 33.33%;
  color: #38d3c9;
  text-align: center;
  font-size: 0.15rem;
  line-height: 0.3rem;
}

.tibi {
  margin-top: 0.1rem;
}

.tibi ul {
  display: flex;
}

.tibi ul li {
  width: 45%;
  height: 0.7rem;
  background: url(../../assets/images/icon_bg@3x.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  color: #38d3c9;
  line-height: 0.7rem;
  text-align: center;
  font-size: 0.18rem;
  font-weight: 600;
}

.tibi ul li:nth-of-type(1) {
  margin-right: 10%;
}

.minxi {
  margin-top: 0.26rem;
}

.minxi img {
  width: 2.4rem;
  margin: 0 auto;
}

.minxi p {
  text-align: center;
  color: #878b9a;
  font-size: 0.15rem;
}

.minxis {
  background: #282d41;
  width: 100%;
  padding-bottom: 0.5rem;
}

.minxis ul li {
  display: flex;
  text-align: center;
  line-height: 0.4rem;
  height: 0.4rem;
  color: #fff;
  font-size: 0.12rem;
}

.minxis ul li:nth-child(odd) {
  background: #373c4f;
}

.minxis ul li p:nth-of-type(1) {
  width: 50%;
}

.minxis ul li p:nth-of-type(2) {
  width: 50%;
  color: #e92312;
}

.minxis ul .weight p {
  font-size: 0.15rem;
  color: #838599 !important;
}
.kuang {
  position: absolute;
  bottom: 0rem;
  display: flex;
  width: 100%;
  line-height: 0.3rem;
}
.kuang p {
  color: #5f9b8b;
  font-size: 0.12rem;
  width: 33.33%;
  text-align: center;
}
.kuang p span {
  color: #fff;
}
.kuang p:nth-of-type(3) {
  color: #e86161;
}
</style>