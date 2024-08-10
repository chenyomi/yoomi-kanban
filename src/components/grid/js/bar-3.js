import theme from '@/assets/js/chart-theme.json'
const startTime = +new Date();
export const data = {
    min: startTime,
    max: startTime + 43200000,
    categories: ['设备A', '设备B', '设备C'],
    type: ['状态1', '状态2', '状态3', '状态4'],
    value: [],
}

data.categories.forEach(function (category, index) {
    var baseTime = startTime;
    var duration = 3600000
    for (var i = 0; i < 10; i++) {
        var typeItem = data.type[Math.round(Math.random() * (data.type.length - 1))];  // 随机类型
        data.value.push({
            categorie: category,
            type: typeItem,
            begin: baseTime,
            end: baseTime += duration
        });
    }
});
const renderItem = (params, api) => {
    var category = api.value(0);
    var start = api.coord([api.value(2), category]);
    var end = api.coord([api.value(3), category]);
    var height = api.size([0, 1])[1] * 0.6;
    var rectShape = echarts.graphic.clipRectByRect(
        {
            x: start[0],
            y: start[1] - height / 2,
            width: end[0] - start[0],
            height: height
        },
        {
            x: params.coordSys.x,
            y: params.coordSys.y,
            width: params.coordSys.width,
            height: params.coordSys.height
        }
    );
    return (
        rectShape && {
            type: 'rect',
            transition: ['shape'],
            shape: rectShape,
            style: api.style()
        }
    );
}
const tooltipformatter = (params) => {
    const options = { timeStyle: "medium", dateStyle: "medium" };
    const formatter = new Intl.DateTimeFormat('zn-cn', options);
    const time1 = formatter.format(params.value[2]);
    const time2 = formatter.format(params.value[3]);
    return params.marker + params.value[1] + ': ' + time1 + '~' + time2;
}
const axisLabelformatter = (val) => {
    const options = { hour: '2-digit', minute: '2-digit' };
    const formatter = new Intl.DateTimeFormat('zh-cn', options);
    const time = formatter.format(val);
    return time;
}
export const setData = (a, b) => {
    const arr = []
    b.value.forEach(e => {
        const v = [e.categorie, e.type, e.begin, e.end]
        const item = b.type.findIndex(c => c == v[1])
        arr.push({
            value: v,
            name: v[0],
            itemStyle: {
                normal: {
                    color: theme.color[item]
                }
            }
        })
    })
    a.xAxis.min = b.min
    a.xAxis.max = b.max
    a.legend.data = b.type
    a.yAxis.data = b.categories
    a.series.at(-1).data = arr
    const typeArr = []
    b.type.forEach(e => {
        typeArr.push({
            name: e,
            legendOnly: true,
            type: 'line',
            data: []
        })

    })
    a.tooltip.formatter = tooltipformatter
    a.xAxis.axisLabel.formatter = axisLabelformatter
    a.series.at(-1).renderItem = renderItem
    a.series = [...typeArr, a.series.at(-1)]
    return a
}
export default (c) => {
    return setData({
        tooltip: {},
        title: {
            text: '时序图',
        },
        legend: {
            data: [] // 设置legend项
        },
        grid: {
            top: 40,
            bottom: 60,
            left: 0,
            right: 10
        },
        dataZoom: [
            {
                type: 'slider',
                filterMode: 'weakFilter',
                showDataShadow: false,
                bottom: 20,
                labelFormatter: ''
            },
            {
                type: 'inside',
                filterMode: 'weakFilter'
            }
        ],
        xAxis: {
            type: 'time',
            min: startTime,
            max: startTime + 43200000,
            scale: true,
            splitNumber: 6,
            axisLabel: {}
        },
        yAxis: {
            data: []
        },
        series: [
            {
                type: 'custom',
                encode: {
                    x: [2, 3],
                    y: 0,
                    legend: [1]
                },
                data: data
            },
        ]

    }, data)
};
