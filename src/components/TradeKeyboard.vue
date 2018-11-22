<template>
	<div class="dialog" v-show="showMask">
		<div class="pay-tool">
			<div class="pay-tool-top">
				<div class="top">
					<span class="title">{{tradeName}}</span>
					<i class="iconfont icon-cuo" @click="close"></i>
				</div>
				<div class="form-wrap">
					<form action="">
						<div class="limit row">
							<span class="col-l">{{$t('doc.buy_limit')}}: </span>
							<span class="col-r">{{newBuy.b}}</span>
						</div>
						<div class="current row">
							<span class="col-l">{{$t('doc.buy_price')}}: </span>
							<span class="col-r">{{newBuy.d}}</span>
						</div>
						<div class="amount row">
							<span class="col-l">{{$t('doc.buy_number')}}: </span>
							<input type="text" @click="aaa(1)" ref='1' id='fok' @blur="blurs" v-model="amount">
							<div class="all" @click="all">
								{{$t('doc.buy_all')}}
							</div>
						</div>

						<div class="ep row">
							<span class="col-l">EP: </span>
							<span class="col-r">{{newBuy.c}}</span>
						</div>
						<div class="buy">{{$t('doc.The_sale')}} {{newBuy.e*100}}%{{$t('doc.Service_charge')}}</div>
					</form>
				</div>
			</div>
			<div class="pay-tool-content">
				<div class="pay-tool-inputs" @click="showBoard">
					<div class="item" v-for="(index,item) in items" :key="item.index">
						<span v-show="dot>index">●</span>
					</div>
				</div>
			</div>
			<v-keyboard ref='keyboard'  @input='getvalue' :accuratee='accurate' :type='type'></v-keyboard>
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
			tradeName: String,
			newBuy: Object
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
				amount: "",
				val: ""
			};
		},
		methods: {
			close() {
				this.amount = "";
				this.showMask = false;
			},
			show() {
				this.showMask = true;
			},
			getvalue(val) {
				console.log(123)
				this.value = val;
				if (val.length >= 7) return;
				this.dot = val.length;
				this.$emit("value", val);
			},
			showBoard() {
				// 不弹出默认的键盘
				document.activeElement.blur();
				this.$refs.keyboard.show(this.value);
			},
			all() {
				
				if (parseInt(this.newBuy.c) > parseInt(this.newBuy.b)) {
					this.amount = this.newBuy.b;
					this.getvalue(this.value);
					return;
				}

				this.amount = this.newBuy.c;
				this.getvalue(this.value);
			},
			blurs() {
				
				if (parseInt(this.amount) > parseInt(this.newBuy.b)) {
					this.getvalue(this.value);
					this.amount = this.newBuy.b;
					return;
				} 
				this.getvalue(this.value);
			},

			aaa(a) {
				document.getElementById(this.$refs[a].id).focus();
				//@click="aaa(1)" ref='1' id='fok'
			}
		},
		watch: {
			value(newVal, oldVal) {
				//监听输入的内容
			},
			amount(newVal, oldVal) {
				//监听输入的内容
				this.$emit("getInput", this.amount);
			}
		} 
	};
</script>
<style lang="scss" scoped>
	.dialog {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: 0 auto;
		background: rgba(0, 0, 0, 0.1);
		z-index: 9999;

		.pay-tool {
			width: 70%;
			background: #ffffff;
			margin: 0 auto;
			margin-top: 100px;
			border-radius: 8px;

			.pay-tool-top {
				.top {
					height: 40px;
					line-height: 40px;
					text-align: center;
					padding: 0 10px;
					overflow: hidden;
					border-bottom: 1px solid #cdcdcd;

					.title {
						color: #000;
					}

					.icon-cuo {
						float: right;
					}
				}

				.form-wrap {
					.row {
						width: 100%;
						height: 30px;
						display: flex;
						align-items: center;

						.col-l {
							display: inline-block;
							width: 30%;
							text-align: right;
							margin-right: 10px;
							color: #a8a8a8;
						}

						input {
							width: 50%;
							border: none;
							// background: rgba(0, 0, 0, 0.1);
						}
					}

					.amount {
						display: flex;

						input {
							border: 1px solid #cdcdcd;
							width: 30%;
							padding: 4px;
							margin-right: 10px;
						}

						.all {
							border: none;
							background: #007fff;
							padding: 2px 6px;
							color: #ffffff;
						}
					}
				}
			}

			.pay-tool-content {
				padding: 15px;

				.pay-tool-inputs {
					width: 100%;
					height: 30px;
					display: flex;
					justify-content: space-around;

					.item {
						width: 15%;
						height: 30px;
						text-align: center;
						line-height: 30px;
						border: 1px solid #cdcdcd;
					}
				}
			}
		}
	}

	.buy {
		color: red;
		margin-left: 20px;
		
	}
</style>