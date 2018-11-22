<template>
<div class="dialog" v-show="showMask">
    <div class="head">
            <i class="iconfont iconfonts icon-quxiao" @click="close"></i>
    </div>
	<div class="pay-tool">
		<div class="pay-tool-top">			
				<h3 class="title">{{newBuy}}</h3>	
				<h5>{{trayName}}</h5>			
		</div>
		<div class="pay-tool-content">
			<div class="pay-tool-inputs" @click="showBoard">
				<div class="item" v-for="(index,item) in items" :key="item.index">
					<span v-show="dot>index">●</span>
				</div>
			</div>
		</div>
		<v-keyboard ref='keyboard' @input='getvalue' :accuratee='accurate' :type='type'></v-keyboard>
	</div>
</div>
</template>
<script>
import vKeyboard from "./keyboard.vue";
export default {
  name: "trade-keyboard",
  components: {
    vKeyboard
  },
  props: {
    newBuy: String,
    trayName: String
  },
  data() {
    return {
      showMask: false,
      type: "text",
      accurate: "2",
      items: [0, 1, 2, 3, 4, 5],
      value: "",
      dot: 0,
      typee: this.type,
      accuratea: this.accurate,
      ruleForm: {
        amount: ""
      }
    };
  },
  methods: {
    close() {
      this.showMask = false;
    },
    show() {
      this.showMask = true;
    },
    getvalue(val) {
      this.value = val;
      if (val.length >= 7) return;
      this.dot = val.length;
      this.$emit("value", val);
      console.log(typeof val.length);
      if (val.length == 6) {
      }
    },
    showBoard() {
      // 不弹出默认的键盘
      document.activeElement.blur();
      this.$refs.keyboard.show(this.value);
    }
  },
  watch: {
    value(newVal, oldVal) {
      //监听输入的内容
      // console.log(newVal, oldVal);
      // if(newVal.length === 6){
      // }
    }
  }
};
</script>
<style lang="scss" scoped>
.head {
  height: 0.7rem;
  position: fixed;
  top: 0;
  width: 100%;
  padding-top: 0.3rem;
  opacity: 1;
  z-index: 1000;
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

.head i {
  color: #fff;
  line-height: 0.4rem;
  font-size: 0.3rem;
  text-align: left;
  padding: 0.1rem;
}

.dialog {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  background: #151721;
  z-index: 1000;
  .pay-tool {
    width: 2.95rem;
    background: #232636;
    margin: 0 auto;
    margin-top: 0.95rem;
    padding: 0.2rem 0;
    .pay-tool-top {
      overflow: hidden;
      .title {
        text-align: center;
        color: #21fff6;
        font-size: 0.18rem;
        margin-bottom: 0.3rem;
        line-height: 0.46rem;
        margin: 0;
      }
      h5 {
        color: #fff;
        text-align: center;
        margin-bottom: 0.2rem;
      }
      .icon-cuo {
        float: right;
      }
    }
    .pay-tool-content {
      .pay-tool-inputs {
        display: flex;
        justify-content: space-around;
        margin: 0 0.2rem;
        .item {
          width: 0.32rem;
          height: 0.332rem;
          text-align: center;
          line-height: 0.32rem;
          border: 1px solid #22d4cf;
          box-sizing: border-box;
          color: #fff;
        }
      }
    }
  }
}
</style>