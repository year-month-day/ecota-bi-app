import * as $ from "jquery";

export default function rileijidachenglv(obj) {
	//var myChart = echarts.init(document.getElementById('QV05'));
	var data = new Array();

	var i = 0;
	$.each(obj.qHyperCube.qDataPages[0].qMatrix, function (key, value) {
		data[i] = {
			"name": value[0].qText,
			"turnover": value[1].qNum,
			"yusuan": value[2].qNum,
			"dachenglv": value[3].qNum
		};
		i++;
	});

	var rileijidachenglv = data;

	//data[i]={"name":value[0].qText,"turnover":value[1].qNum,"yusuan":value[2].qNum,"dachenglv":value[3].qNum};
	var name = new Array();
	var turnover = new Array();
	var yusuan = new Array();
	var dachenglv = new Array();

	for (var i = 0; i < rileijidachenglv.length; i++) {
		name[i] = rileijidachenglv[i].name;
		turnover[i] = rileijidachenglv[i].turnover;
		yusuan[i] = rileijidachenglv[i].yusuan;
		dachenglv[i] = rileijidachenglv[i].dachenglv;
	}
	var d1 = [10, 30, 22, 34, 29];
	var d2 = [15, 35, 26, 38, 24];
	var d3 = new Array();
	for (var i = 0; i < d1.length; i++) {

		d3[i] = (d1[i] / d2[i] * 100).toFixed(2);
	}
	var option = {
		title: {
			//show:'true',
			text: '日累计达成率',
			subtext: '',
			left: 'center',
			//left:'5%',
			top: '3%',
			textStyle: {
				color: '#666666',
				fontSize: 14,

			},
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
				crossStyle: {
					color: '#999'
				}
			},
			textStyle: {
				fontSize: 10,
			}
		},
		grid: {
			left: '3%',
			right: '3%',
			bottom: '22%',
			top: '20%',
			containLabel: true
		},
		legend: {
			data: ['销售额', '预算额', '达成率'],
			bottom: '20px'
		},
		xAxis: [{
			type: 'category',
			data: name,
			axisPointer: {
				type: 'shadow'
			},

			axisLine: {
				show: false
			},
			axisLabel: {
				margin: 22,
				fontSize: 10,
			},
			axisTick: {
				show: false
			},
		}],
		yAxis: [{
			type: 'value',
			name: '金额',
			min: 0,
			max: 40,
			interval: 8,
			axisLabel: {
				formatter: '{value} 亿',
				fontSize: 10,
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: '#9DE1FD',
					type: 'dashed'
				}
			},
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			nameTextStyle: {
				align: 'right',
			},

		},
		{
			type: 'value',
			name: '达成率',
			min: 0,
			max: 200,
			interval: 40,
			axisLabel: {
				formatter: '{value} %',
				fontSize: 10,

			},
			splitLine: {
				show: true,
				lineStyle: {
					color: '#9DE1FD',
					type: 'dashed'
				}
			},
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},

		}
		],
		series: [{
			name: '销售额',
			type: 'bar',
			//data: turnover,
			data: d1,
			barWidth: 12,
			itemStyle: {
				normal: {
					barBorderRadius: [5, 5, 0, 0],
					color: '#61A6D3',
				}
			}
		},
		{
			name: '预算额',
			type: 'bar',
			//data:yusuan,
			data: d2,
			barWidth: 12,
			itemStyle: {
				normal: {
					barBorderRadius: [5, 5, 0, 0],
					color: '#B2182B',
				}
			}
		},
		{
			name: '达成率',
			type: 'line',
			yAxisIndex: 1,
			//data:dachenglv,
			data: d3,
			barWidth: 15,
			itemStyle: {
				normal: {
					barBorderRadius: [5, 5, 0, 0],
					color: '#EF8A62',
				}
			}
		}
		]
	};
	return option;
}