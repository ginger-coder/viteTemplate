<template>
    <div class="container">
        <div class="card">
            <div class="header">
                <div class="tool-box">
                    <div class="tool"></div>
                    <div class="tool"></div>
                    <div class="tool"></div>
                </div>
            </div>
            <div class="study-card">
                <div class="title">
                    第一单元 认识三角形
                </div>
                <div class="desc">
                    <div class="item">
                        <div class="item-left">
                            与三角形有关的线段
                        </div>
                        <div class="item-right warn">
                            一般掌握
                        </div>
                    </div>
                    <div class="item">
                        <div class="item-left">
                            与三角形有关的线段
                        </div>
                        <div class="item-right fail">
                            一般掌握
                        </div>
                    </div>
                    <div class="item">
                        <div class="item-left">
                            与三角形有关的线段
                        </div>
                        <div class="item-right success">
                            一般掌握
                        </div>
                    </div>
                </div>
            </div>
            <div class="study-card">
                <div class="title">
                    第一单元 认识三角形
                </div>
                <div class="desc">
                    <div class="item">
                        <div class="item-left">
                            与三角形有关的线段
                        </div>
                        <div class="item-right warn">
                            一般掌握
                        </div>
                    </div>
                    <div class="item">
                        <div class="item-left">
                            与三角形有关的线段
                        </div>
                        <div class="item-right fail">
                            一般掌握
                        </div>
                    </div>
                    <div class="item">
                        <div class="item-left">
                            与三角形有关的线段
                        </div>
                        <div class="item-right success">
                            一般掌握
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
   import { defineComponent } from "vue";

export default defineComponent({
  name: "home-comp",
  //import所引入的组件注册
  components: {},
  data() {
    return {
      descList: [
        {
          title: "学习时长",
          value: "18.3",
          comp: "小时",
        },
        {
          title: "做题数量",
          value: "1882",
          comp: "道",
        },
        {
          title: "掌握知识点",
          value: "1785",
          comp: "个",
        },
      ],
      ecBar: {
        option: {
          color: ["#fc8452"],
        },
      },
      ecLine: {
        option: {
          color: ["#9a60b4"],
        },
      },
    };
  },

  //监听属性
  computed: {},

  //监控data中的数据变化
  watch: {},

  //方法集合
  methods: {},

  //生命周期 - 组件实例刚被创建
  beforeCreate() {},
  //创建完成 访问当前this实例
  created() {},
  //挂载之前
  beforeMount() {},
  //挂载完成 访问DOM元素
  mounted() {},
  //更新之前
  beforeUpdate() {},
  //更新之后
  updated() {},
  //for keep-alive 缓存功能，组件被激活时调用
  activated() {},
  //组件销毁之前调用
  beforeUnmount() {},
  //组件销毁之后调用
  unmounted() {},
});
</script>

<style lang='scss' scoped>
    .container {
        background: #EBFFF1;
        padding: 30px;

        .card {
            background: #FFFFFF;
            box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.04);
            border-radius: 40px;
            padding: 0 30px 30px;
            position: relative;
            &::before {
                content:'';
                display: block;
                width: 220px;
                height: 135px;
                background-image: url(https://tal-101-static.oss-cn-beijing.aliyuncs.com/wxapp/endreport/end-report-info.png);
                background-size: 100% auto;
                position: absolute;
                right: 15px;
                top: -15px;
            }
            .header {
                height: 100px;
                display: flex;
                align-items: stretch;

                .tool-box {
                    width: 180px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .tool {
                        width: 30px;
                        height: 30px;
                        border-radius: 50%;
                        background-color: #EBFFF1;
                    }
                }
            }

            .study-card {
                border-top: 1px dashed #EEEEEE;
                margin-bottom: 40px;

                .title {
                    padding: 30px 0;
                    font-size: 28px;
                    font-weight: 600;
                    color: #333333;
                }

                .desc {
                    background: #FAFAFA;
                    border-radius: 20px;
                    padding: 28px 28px 1px 28px;

                    .item {
                        margin-bottom: 20px;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        font-size: 24px;

                        .item-right {
                            width: 140px;
                            text-indent: 32px;
                            font-weight: 500;
                            display: flex;
                            align-items: center;

                            &::before {
                                content: '';
                                display: block;
                                width: 16px;
                                height: 16px;
                                background: #000;
                                border-radius: 50%;
                                top: -16px;
                                margin-right: 10px;
                            }
                        }

                        .warn::before {
                            background: #FFCC00;
                        }
                        .fail::before {
                            background: #FF6600;
                        }
                        .success::before {
                            background: #13BF59;
                        }
                    }
                }
            }
        }
    }
</style>
