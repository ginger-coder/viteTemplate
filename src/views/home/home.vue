<template>
  <div class="container">
    <div class="banner">
      <div class="head-user">
        <div class="head-img-box">
          <img class="user-img" src="" />
        </div>
        <div class="user-name">欧浩辰</div>
      </div>
      <div class="title">暑期总报告</div>
      <img
        class="banner-icon"
        src="https://tal-101-static.oss-cn-beijing.aliyuncs.com/wxapp/endreport/end-report-banner.png"
      />
    </div>
    <div class="layout">
      <div class="user-sum-container comment-card">
        <!-- 2021暑期数学 -->
        <div class="user-sum-title">
          <div class="line left">-</div>
          <div class="text">2021暑期数学</div>
          <div class="line right">-</div>
        </div>
        <div class="user-sum-layout">
          <div class="desc-box">
            <div class="content-left">
              <div class="name">祝贺欧浩辰:</div>
              <div class="merit">获得"恒星守卫者"称号,继续加油哦!</div>
            </div>
            <!-- 奖状 -->
            <div class="content-img"></div>
          </div>
          <div class="desc-list">
            <div
              class="desc-list-item"
              v-for="(item, index) in descList"
              :key="index"
            >
              <div
                class="desc-list-title"
                :class="(index+1) % 2 == 0 ? 'title-line' : ''"
              >
                {{ item.title }}
              </div>
              <div class="desc-list-content">
                <div class="desc-list-text">{{ item.value }}</div>
                <div class="desc-list-company">
                  {{ item.comp }}
                </div>
              </div>
            </div>
          </div>
          <div class="user-check-btn-box">
            <router-link :to="{ name: 'detail' }">
              <div class="user-btn">
                查看知识点掌握详情
                <img
                  class="right-icon"
                  src="https://tal-101-static.oss-cn-beijing.aliyuncs.com/wxapp/endreport/end-report-join.png"
                />
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <!-- 成长日历 -->
      <div class="life-container comment-card">
        <div class="title-icon life-bg">成长日历</div>
        <!-- 学习时长 -->
        <div class="echart-content">
          <div class="title">
            <div class="time-title time">学习时长</div>
          </div>
          <div class="echart-box" ref="barChart"></div>
        </div>
        <!-- 学习时长 -->
        <div class="echart-content">
          <div class="title">
            <div class="time-title number">熟练掌握知识点数</div>
          </div>
          <div class="echart-box" ref="lineChart"></div>
        </div>
      </div>
      <!-- 规划建议 -->
      <div class="plan-container comment-card">
        <div class="title-icon plan-bg">规划和建议</div>
        <div class="plan-item">
          暑假的表现:
          <div class="plan-status">超快</div>
        </div>
        <div class="plan-item">秋季学习建议:</div>
        <div class="plan-desc">
          建议学习时间一周100分钟，一周来2次，每次来多久。可以有统一的几个版本的话术，比如：进度慢的，告知暑期预习没有都完成，但建议新学期开始跟上校内的进度，一周来两次，每次最好坚持45分钟以上，另外暑期没有预习的内容秋季也会重新学习，不用担心！
        </div>
      </div>
    </div>
    <div class="bottom-container">
      <div class="bottom-left">
        <img
          src="https://tal-101-static.oss-cn-beijing.aliyuncs.com/wxapp/endreport/end-report-logo.png"
          class="icon"
        />
        <div class="bottom-msg">孩子有进步,妈妈更省心</div>
      </div>
      <div class="bottom-right">
        <img
          src="https://tal-101-static.oss-cn-beijing.aliyuncs.com/wxapp/endreport/end-report-code.png"
          class="wx-code"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import * as echarts from "echarts/core";
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart, LineChart } from "echarts/charts";
// 引入提示框，标题，直角坐标系组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
} from "echarts/components";
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from "echarts/renderers";

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  BarChart,
  CanvasRenderer,
  LineChart,
]);

import barConfig from "./config/bar";
import lineConfig from "./config/line";

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
  methods: {
    initChart(){
      this.getBarChartData();
      this.getLineChartData();
    },
    getBarChartData() {
      var myChart = echarts.init(this.$refs.barChart);
      let { option } = barConfig([
        {
          date: "123456",
          learnTime: "2",
        },
        {
          date: "122345",
          learnTime: "3",
        },
      ]);
      myChart.setOption(option);
    },
    getLineChartData(){
      var myChart = echarts.init(this.$refs.lineChart);
      let { option } = lineConfig([
        {
          date: "123456",
          learnTime: "2",
        },
        {
          date: "122345",
          learnTime: "3",
        },
      ]);
      myChart.setOption(option);
    }
  },

  //生命周期 - 组件实例刚被创建
  beforeCreate() {},
  //创建完成 访问当前this实例
  created() {},
  //挂载之前
  beforeMount() {},
  //挂载完成 访问DOM元素
  mounted() {
    this.initChart();
  },
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
.pad30 {
  padding: 0 30px;
}

.echart-box {
  width: 100%;
  height: 600px;
}

.uni-ec-canvas {
  width: 100%;
  height: 500px;
  display: block;
}

.container {
  background: #f5f5f5;

  .banner {
    width: 100%;
    height: 374px;
    background: linear-gradient(315deg, #3df291 0%, #13bf59 100%);
    border-radius: 0px 0px 40px 40px;
    color: #fff;
    padding: 18px 30px 30px 30px;
    position: relative;
    .banner-icon {
      width: 308px;
      height: 331px;
      position: absolute;
      right: 24px;
      bottom: 0;
      z-index: 1;
    }

    .head-user {
      width: 100%;
      height: 110px;
      display: flex;
      align-items: center;
      position: relative;
      z-index: 2;
      padding-top: 15px;
      margin-bottom: 20px;
      .head-img-box {
        width: 90px;
        height: 90px;
        background: #eefff6;
        border-radius: 50%;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 4px;
        .user-img {
          width: 82px;
          height: 82px;
          background: red;
          border-radius: 50%;
        }
      }

      .user-name {
        text-overflow: ellipsis;
        overflow: hidden;
        flex: 1;
        text-indent: 20px;
        font-size: 30px;
      }
    }

    .title {
      font-size: 80px;
      font-family: "FZCuYuan";
      text-shadow: 0px 4px 0px rgba(0, 76, 20, 0.2);
      position: relative;
      z-index: 2;
    }
  }

  .layout {
    padding: 0 30px;
    position: relative;
    z-index: 2;
    margin-top: -73px;

    .comment-card {
      background: #ffffff;
      padding: 30px;
      border-radius: 40px;
      margin-bottom: 100px;
      box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.04);
      position: relative;
      .title-icon {
        width: 282px;
        height: 95px;
        position: absolute;
        top: -44px;
        left: calc((100% - 282px) / 2);
        color: #fff;
        font-size: 38px;
        text-align: center;
        box-sizing: border-box;
        font-family: "FZCuYuan";
        &.life-bg {
          background-image: url(https://tal-101-static.oss-cn-beijing.aliyuncs.com/wxapp/endreport/end-report-life.png);
          background-size: 100% auto;
          padding-top: 15px;
        }
        &.plan-bg {
          background-image: url(https://tal-101-static.oss-cn-beijing.aliyuncs.com/wxapp/endreport/end-report-plan.png);
          background-size: 100% auto;
          padding-top: 34px;
        }
      }
    }

    .user-sum-title {
      width: 100%;
      height: 89px;
      background: #fffdf5;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 28px;
      .line {
        color: #ffcc00;
        font-size: 60px;
        &.left {
          margin-right: 10px;
        }
        &.right {
          margin-left: 10px;
        }
      }
    }

    .user-sum-container {
      padding: 0 !important;
      position: relative;
      overflow: hidden;
      .user-sum-layout {
        padding: 0 30px 30px;
      }

      .desc-box {
        display: flex;
        justify-content: space-between;
        padding: 25px 0;
        margin-bottom: 25px;

        .content-left {
          font-weight: 600;
          color: #333333;
          font-size: 24px;

          .name {
            margin-bottom: 10px;
          }
        }
      }

      .desc-list {
        width: 100%;
        background: #fafafa;
        border-radius: 20px;
        display: flex;
        justify-content: space-around;
        text-align: center;
        padding: 30px 0;

        .desc-list-item {
          flex: 1;
          .desc-list-title {
            font-size: 24px;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            &.title-line {
              border-left: 2px solid #E6E6E6;
              border-right: 2px solid #E6E6E6;
            }
          }

          .desc-list-content {
            display: flex;
            justify-content: center;
            align-items: flex-end;

            .desc-list-text {
              color: rgba(51, 51, 51, 1);
              font-size: 60px;
              height: 75px;
            }

            .desc-list-company {
              font-size: 18px;
              font-weight: 600;
              color: rgba(51, 51, 51, 0.3);
            }
          }
        }
      }

      .user-check-btn-box {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 120px;

        .user-btn {
          width: 380px;
          height: 80px;
          background: linear-gradient(360deg, #ff6400 0%, #ffa335 100%);
          box-shadow: 0 2px 4px 0 rgba(255, 255, 255, 0.5),
            0 -2px 10px 0 rgba(0, 0, 0, 0.5);
          border-radius: 40px;
          font-size: 28px;
          font-family: "FZCuYuan";
          color: #ffffff;
          letter-spacing: 2px;
          text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;

          .right-icon {
            margin-left: 15px;
            width: 40px;
            height: 40px;
          }
        }
      }
    }

    .life-container {
      padding-top: 50px;
    }
    // 规划建议
    .plan-container {
      padding-top: 80px;
      margin-bottom: 30px;
      padding-bottom: 50px;
      &::after {
        content: "";
        display: block;
        width: 231px;
        height: 124px;
        background-image: url(https://tal-101-static.oss-cn-beijing.aliyuncs.com/wxapp/endreport/end-report-pen.png);
        background-size: auto 100%;
        position: absolute;
        bottom: 0;
        right: -35px;
      }
      .title-icon {
        top: -56px;
      }
      .plan-item:nth-of-type(1) {
        margin-bottom: 36px;
      }

      .plan-item {
        font-size: 28px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #333333;
        margin-bottom: 10px;

        .plan-status {
          display: inline-block;
          color: #8566ff;
          margin-left: 30px;
        }
      }

      .plan-desc {
        background: #fafafa;
        border-radius: 20px;
        font-size: 24px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
        padding: 30px;
      }
    }
  }

  .plan-layout {
    margin-bottom: 40px !important;
  }

  // bottom container
  .bottom-container {
    width: 100%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 40px 0;

    .bottom-left {
      display: flex;
      flex-direction: column;

      .icon {
        width: 179px;
        height: 80px;
        margin: 20px auto;
      }

      .bottom-msg {
        width: 330px;
        height: 48px;
        background: linear-gradient(70deg, #6167ff 0%, #8566ff 100%);
        border-radius: 24px;
        font-size: 24px;
        font-family: "FZCuYuan";
        color: #ffffff;
        text-align: center;
        line-height: 48px;
      }
    }

    .bottom-right {
      width: 200px;
      height: 200px;

      .wx-code {
        width: 100%;
        height: 100%;
      }
    }
  }

  .echart-content {
    .title {
      display: flex;
      justify-content: flex-end;

      .time-title {
        position: relative;
        text-indent: 24px;
        font-size: 22px;
        &::before {
          content: "";
          display: block;
          width: 14px;
          height: 14px;
          background: #eee;
          border-radius: 50%;
          position: absolute;
          left: -20px;
          top: 14px;
        }
      }

      .time::before {
        background: #ffcc00;
      }

      .number::before {
        background: #8566ff;
      }
    }
  }
}
</style>