import theme from '@/assets/js/chart-theme.json'
export default (c) => {
    var data = [];
    var dataCount = 10;
    var startTime = +new Date();
    var categories = ['设备A', '设备B', '设备C'];
    var types = [
        { name: 'JS Heap' },
        { name: 'Documents' },
        { name: 'Nodes' },
        { name: 'Listeners' },
        { name: 'GPU Memory' },
        { name: 'GPU' }
    ];
    types.forEach((e, i) => {
        e.color = theme.color[i]
    })
    categories.forEach(function (category, index) {
        var baseTime = startTime;
        var duration = 3600000
        for (var i = 0; i < dataCount; i++) {
            var typeItem = types[Math.round(Math.random() * (types.length - 1))];  // 随机类型
            data.push({
                name: typeItem.name,
                value: [index, baseTime, (baseTime += duration)],
                itemStyle: {
                    normal: {
                        color: typeItem.color
                    }
                }
            });
        }
    });
    function renderItem(params, api) {
        var categoryIndex = api.value(0);
        var start = api.coord([api.value(1), categoryIndex]);
        var end = api.coord([api.value(2), categoryIndex]);
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
    return {
        tooltip: {
            formatter: function (params) {
                const options = { timeStyle: "medium", dateStyle: "medium" };
                const formatter = new Intl.DateTimeFormat('zn-cn', options);
                const time1 = formatter.format(params.value[2]);
                const time2 = formatter.format(params.value[3]);
                return params.marker + params.name + ': ' + time1 + '~' + time2;
            }
        },
        title: {
            text: '时序图',
        },
        legend: {
            data: ['状态1', '状态2', '状态3', '状态4'] // 设置legend项
        },
        grid: {
            top: 40,
            bottom: 70
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
            axisLabel: {
                formatter: function (val) {
                    const options = { hour: '2-digit', minute: '2-digit' };
                    const formatter = new Intl.DateTimeFormat('zh-cn', options);
                    const time = formatter.format(val);
                    return time;
                }
            }
        },
        yAxis: {
            data: categories
        },
        series: [
            {
                type: 'custom',
                renderItem: renderItem,
                encode: {
                    x: [1, 2],
                    y: 0,
                    legend: [0]
                },
                data: data
            },
            // 额外的空数据系列用于legend
            {
                name: '状态1', // 虚的仅用于显示
                legendOnly: true, // 表明这个系列仅用于legend，不影响实际绘图
                type: 'line',
                data: []
            },
            {
                name: '状态2', // 虚的仅用于显示
                legendOnly: true, // 表明这个系列仅用于legend，不影响实际绘图
                type: 'line',
                data: []
            },
            {
                name: '状态3', // 虚的仅用于显示
                legendOnly: true,
                type: 'line',
                data: []
            },
            {
                name: '状态4', // 虚的仅用于显示
                legendOnly: true,
                type: 'line',
                data: []
            }
        ]
    }
};
