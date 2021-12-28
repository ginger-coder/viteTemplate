import day from 'dayjs';

export default function(value) {

    let result = {
        option: {
            xAxis: [{
                type: 'category',
                data: [],
                axisLabel: {
                    color: '#333333'
                },
                axisLine: {
                    show:true,
                    lineStyle: {
                        type: 'solid',
                        color: '#EEEEEE',
                    }
                },
            }],
            yAxis: [{
                type: 'value',
                scale : true,
                min : 0,
                splitNumber : 3,
                axisLabel: {
                    color: '#333333'
                },
                axisLine: {
                    show:true,
                    lineStyle: {
                        type: 'solid',
                        color: '#EEEEEE',
                    }
                },
            }],
            grid: {
                left: '30rpx',
                right: '10rpx',
                top: '40rpx',
                bottm: '10rpx',
            },
            series: [{
                name: '学习时长(分钟)',
                type: 'bar',
                data: [],
                barWidth: 20,
                itemStyle: {
                    borderRadius: [20, 20, 0, 0],
                    color: '#FFCC00'
                }
            }]
        }
    };

    let xAxis = [];
    let learn = [];
    let max = 0;

    value.forEach(({
        date,
        learnTime
    }) => {
        let $year = date.substring(0, 4);
        let $month = date.substring(4, 6);
        let $day = date.substring(6);

        let dateValue = day(`${$year}/${$month}/${$day}`);

        if (!dateValue.isValid()) {
            return '-';
        }

        xAxis.push(`${dateValue.format('MM-DD')}`);

        if (learnTime > max) {
            max = learnTime;
        }

        learn.push(learnTime);

    });

    result.option.yAxis[0].max = max;
    result.option.xAxis[0].data = xAxis;
    result.option.series[0].data = learn;

    return result;
};
