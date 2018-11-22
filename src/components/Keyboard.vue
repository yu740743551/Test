<template>

	<transition name='board-slide'>
        
		<div class="wrap" v-show='showme'>	            		
			<ul class="board">
				<li class="br bt" @click='click(1)'>1</li>
				<li class="br bt" @click='click(2)'>2</li>
				<li class="bt" @click='click(3)'>3</li>
				<li class="br bt" @click='click(4)'>4</li>
				<li class="br bt" @click='click(5)'>5</li>
				<li class="bt" @click='click(6)'>6</li>
				<li class="br bt" @click='click(7)'>7</li>
				<li class="br bt" @click='click(8)'>8</li>
				<li class="bt" @click='click(9)'>9</li>
				<li class="br bt dott" v-if='type === "password"'></li>
				<li class="br bt dott c-lv"></li>
				<li class="br bt" @click='click(0)'>0</li>
				<li class="bt delete c-g" @click='deleteLast()'>
                    <img src="../assets/images/icon_delete.png" alt="">
                </li>
			</ul>
		</div>
	</transition>
</template>
<script>
	export default {
		name: "v-keyboard",
		props: {
			type: {
				type: String, //只可以点击一次 .
				default: "text"
			},
			accuratee: {
				type: String, //点击X 实现删除
				default: "2"
			}
		},
		data() {
			return {
				showme: true,
				result: "",
				typee: null
			};
		},
		methods: {
			show(val, typee) {
				false;
				this.result = val;

				this.showme = true;
			},
			hide() {
				this.result = "";

				this.showme = false;
			},
			click(num) {
				// 最多只能输入一个 . 号
				if (num === ".") {
					this.result = "";
					this.$emit("input", this.result);
					return;
				}

				// 根据精确度判断是否能输入
				if (
					this.type === "text" &&
					this.result.indexOf(".") > -1 &&
					this.result.length - this.result.indexOf(".") > parseInt(this.accuratee)
				) {
					return;
				}

				this.result = this.result + num;

				this.$emit("input", this.result);
			},
			deleteLast() {
				if (this.result === "") {
					this.showme = false;
					this.$emit("input", this.result);
				} else {
					let len = this.result.length;
					if (len >= 6) {
						len = 6;
					}
					this.result = this.result.substring(0, len - 1);

					this.$emit("input", this.result);
				}
			},
			remov() {
				this.click(".");
			}
		}
	};
</script>
<style scoped>
	div,
	input,
	ul,
	li,
	span {
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	ul {
		list-style: none;
        
	}

	ul,
	li {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	ul>li {
		width: 1.05rem;
		height:0.44rem;
		float: left;
		text-align: center;
		line-height: 0.44rem;
		font-size: 0.24rem;
		color: #fff;
        margin: 0.05rem 0.07rem;
        background: rgba(255, 255, 255, 0.7);
        border-radius:0.04rem;
        border: 0;
	}
    ul li.c-g{background: #19726F}
    ul li.c-lv{background:rgba(255, 255, 255, 0.5)}
    ul li img{
        display: inline-block;
        width:0.23rem;
        height:0.17rem;
       
    }
	ul>li:hover {
        /* background: #666; */
        transition: animation 0.3s linear;
        animation: changebox 0.1s linear;

    }
    @keyframes changebox {
             0% {  background:rgba(255, 255, 255, 0.7)  }            
             100% { background: #666;  }
         }



	.board-slide-enter,
	.board-slide-leave-to {
		transform: translateY(100%);
	}

	.board-slide-enter-to,
	.board-slide-leave {
		transform: translateY(0);
	}

	.board-slide-enter-active,
	.board-slide-leave-active {
		transition: all 0.3s;
	}

	

	
	.keyboard {
		position: fixed;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		background: rgba(0, 0, 0, 0.5);
	}

	.wrap {
		position: fixed;
		z-index: 10000;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 2.37rem;
		background: #232636;
	}

	.wrap .hide {
		height: 26px;
		border-top: 1px solid #bbb;
		line-height: 26px;
		color: #bbb;
		text-align: center;
	}

	.wrap .hide i {
		font-weight: bold;
		font-size: 0.18rem;
		display: inline-block;
		transform: rotate(-90deg);
	}

	.board {
		width: 100%;
		height:100%;
        padding: 0.13rem 0.09rem 0.05rem 0.09rem;
	}
</style>