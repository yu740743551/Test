<template>
    <div class="dialog" v-show="showMask">
        <div class="dialog-container">
            <div class="dialog-title">{{title}}</div>
            <div class="content" v-html="content"></div>
            <div class="btns">
                <div v-if="type != 'confirm'" class="default-btn" @click="closeBtn">
                    {{cancelText}}
                </div>
                <div v-if="type == 'danger'" class="danger-btn" @click="dangerBtn">
                    {{dangerText}}
                </div>
                <div v-if="type == 'confirm'" class="confirm-btn" @click="confirmBtn">
                    {{confirmText}}
                </div>
            </div>
            <div class="close-btn" @click="closeMask">
                <i class="iconfont icon-cuo"></i>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    props: {
        value: {},
        // 类型包括 defalut 默认， danger 危险， confirm 确认，
        type: {
            type: String,
            default: 'default'
        },
        content: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        cancelText: {
            type: String,
            default: '取消'
        },
        dangerText: {
            type: String,
            default: '删除'
        },
        confirmText: {
            type: String,
            default: '确认'
        },
    },
    data() {
        return {
            showMask: false,
        }
    },
    methods: {
        closeMask() {
            this.showMask = false;
        },
        closeBtn() {
            this.$emit('cancel');
            this.closeMask();
        },
        dangerBtn() {
            this.$emit('danger');
            this.closeMask();
        },
        confirmBtn() {
            this.$emit('confirm');
            this.closeMask();
        }
    },
    mounted() {
        this.showMask = this.value;
    },
    watch: {
        value(newVal, oldVal) {
            this.showMask = newVal;
            console.log(newVal, oldVal)
        },
        showMask(val) {
            this.$emit('input', val);
        }
    },
}
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
    .dialog-container {
        width: 260px;
        height: 200px;
        background: #ffffff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 8px;
        overflow: hidden;
        position: fixed;
        .dialog-title {
            width: 100%;
            font-size: 0.16rem;
            color: #000;
            font-weight: 550;
            padding: 12px 0;
            text-align: center;
            box-sizing: border-box;
            border-bottom: 1px solid #cdcdcd;
        }
        .content {
            color: #797979;
            line-height: 26px;
            padding: 10px;
            box-sizing: border-box;
        }
        .inp {
            margin: 10px 0 0 20px;
            width: 200px;
            height: 40px;
            padding-left: 4px;
            border-radius: 4px;
            border: none;
            background: #efefef;
            outline: none;
        }
        .btns {
            width: 100%;
            height: 60px; // line-height: 60px;
            position: absolute;
            bottom: 0;
            left: 0;
            text-align: right;
            padding: 0 16px;
            box-sizing: border-box;
            div {
                display: inline-block;
                height: 40px;
                line-height: 40px;
                padding: 0 14px;
                color: #ffffff;
                background: #f1f1f1;
                border-radius: 8px;
                margin-right: 12px;
            }
            .default-btn {
                color: #787878;
            }
            .danger-btn {
                color: #ffffff;
                background: #509EE3;
            }
            .confirm-btn {
                color: #ffffff;
                background: #509EE3;
            }
        }
        .close-btn {
            position: absolute;
            top: 8px;
            right: 16px;
            width: 30px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            font-size: 0.16rem;
        }
    }
}
</style>