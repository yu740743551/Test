<template>

    <div class="main">
        <div class="header">
            <img src="../../assets/images/k_bg.png" alt="">
        </div>
        <div class="content">
            <div class="list">
                <ul>
                    <li>
                        中级矿机
                    </li>
                    <li>
                        <span @click="minus(1)">-</span>
                        <input ref="1" type="number"  readonly v-model="num1">
                        <span @click="add(1)">+</span>
                    </li>
                    <li><span @click="upgrade(1)">升级</span></li>
                </ul>
            </div>
            <div class="list">
                <ul>
                    <li>
                        高级矿机
                    </li>
                    <li>
                        <span @click="minus(2)">-</span>
                        <input ref="2" type="number"  readonly v-model="num2">
                        <span @click="add(2)">+</span>
                    </li>
                    <li><span @click="upgrade(2)">升级</span></li>
                </ul>
            </div>
            <div class="list">
                <ul>
                    <li>
                        超级矿机
                    </li>
                    <li>
                        <span @click="minus(3)">-</span>
                        <input ref="3" type="number"  readonly v-model="num3">
                        <span @click="add(3)">+</span>
                    </li>
                    <li><span @click="upgrade(3)">升级</span></li>
                </ul>
            </div>
            
        </div>        
    </div>
   
</template>
<script>
export default {
  data() {
    return {
        num1:1,
        num2:1,
        num3:1,
    };
  },

  methods: {
    upgrade(a) {
        var val=this.$refs[a].value;
        if(a==1){
            this.$router.push({
            name: "upgrade",
            query:{
                aaa:112,
                num:val,
                ccc:444
            }
            });   
        }
         if(a==2){
            this.$router.push({
            name: "upgrade",
            query:{
                aaa:112,
                num:val,
                ccc:444
            }
            });  
        }
         if(a==3){
            this.$router.push({
            name: "upgrade",
            query:{
                aaa:112,
                num:val,
                ccc:444
            }
            });  
        }
     
    },
    add(a){
        var val=this.$refs[a].value;
        if(val>=10){
          val=10; 
          this.$refs[a].value=val;
          return;
       }
        val++;
        this.$refs[a].value=val;
    },
    minus(a){
      var val=this.$refs[a].value;
       if(val<=1){
          val=1; 
          this.$refs[a].value=val;
          return;
       }
        val--;
        this.$refs[a].value=val;
    },
  }
};
</script>
<style lang="scss" scoped>
*{box-sizing: border-box}
.main {
    width: 100vw;
    padding-top:0.4rem;
    .header img{
        width: 100vw;
        height:3.94rem;
    }
    .content{
        position: absolute;
        bottom: 0.64rem;
        left: 50%;
        width:3.45rem;
        height:auto;
        transform: translate(-50% ,0%);        
        
        .list{
            width:100%;
            height:0.55rem;
            margin-bottom:0.1rem;
        }
        .list:nth-child(1){
            background: url(../../assets/images/btn_bg_green.png) no-repeat;
            background-size: 100% 100%;
        }
        .list:nth-child(2){
            background: url(../../assets/images/btn_bg_young.png) no-repeat;
            background-size: 100% 100%;
        }
        .list:nth-child(3){
            background: url(../../assets/images/btn_bg_red.png) no-repeat;
            background-size: 100% 100%;
        }
        .list ul{display: flex;padding: 0.13rem 0.2rem;}
        .list ul li{height:0.29rem;line-height: 0.29rem;text-align: center;color:#fff;font-size: 0.17rem;}
        .list ul li:nth-child(1){width:25%;}
        .list ul li:nth-child(2){width:55%;
            span{
                display: inline-block;
                width:0.4rem;
                height:0.3rem;
                border: 1px solid #457F70;
                border-radius:0.04rem;
                    text-align: center;
            }
            input{
                 display: inline-block;
                width:0.4rem;
                height:0.3rem;
                border: 1px solid #457F70;
                border-radius:0.04rem;
                background: transparent;
                    text-align: center;
            }
        }
        .list ul li:nth-child(3){width:20%;
            span{
                display: inline-block;
                width:0.5rem;
                height:0.3rem;
                border: 1px solid #457F70;
                border-radius:0.04rem;
            }
        }
    }
}
</style>