
import React from 'react'
import {Chart,Line} from 'react-chartjs-2'
function LineChart() {
    Chart.pluginService.register({
        beforeRender: function (chart) {
            if (chart.config.options.showAllTooltips) {
                // create an array of tooltips
                // we can't use the chart tooltip because there is only one tooltip per chart
                chart.pluginTooltips = [];
                chart.config.data.datasets.forEach(function (dataset, i) {
                    chart.getDatasetMeta(i).data.forEach(function (sector, j) {
                        chart.pluginTooltips.push(new Chart.Tooltip({
                            _chart: chart.chart,
                            _chartInstance: chart,
                            _data: chart.data,
                            _options: chart.options.tooltips,
                            _active: [sector]
                        }, chart));
                    });
                });

                // turn off normal tooltips
                chart.options.tooltips.enabled = false;
            }
        },
        afterDraw: function (chart, easing) {
            if (chart.config.options.showAllTooltips) {
                // we don't want the permanent tooltips to animate, so don't do anything till the animation runs atleast once
                if (!chart.allTooltipsOnce) {
                    if (easing !== 1)
                        return;
                    chart.allTooltipsOnce = true;
                }

                // turn on tooltips
                chart.options.tooltips.enabled = true;
                Chart.helpers.each(chart.pluginTooltips, function (tooltip) {
                    tooltip.initialize();
                    tooltip.update();
                    // we don't actually need this since we are not animating tooltips
                    tooltip.pivot();
                    tooltip.transition(easing).draw();
                });
                chart.options.tooltips.enabled = false;
            }
        }
    })






    const data = {
        labels:['mon','tue','wed','thu','fri','sat','sun'],
        datasets:[{
            label:'',   
            legend : false,
            // "lineTension": 0.4,
            data:[0,1.5,2.5,1,4,3,2],
            borderColor:['rgba(0,0,0,1)'],
            backgroundColor:['rgba(0,0,0,0)'],
            pointBackgroundColor:'rgba(0,0,0,1)',
            pointBorderColor:'rgba(0,0,0,1)'
        }]
    }
    const options = {
        // scaleShowVerticalLines: false,
        title : {
            display: false,
            text:'Line Chart',
        },
        legend : {
            display:false
        },
        scales : {
            yAxes:[ {
                ticks : {
                    min: 0,
                    max : 5,
                    stepSize: 1,
                    padding : 15
                },
                gridLines : {
                    drawBorder : false
                }
            }],
            xAxes : [ {
                ticks : {
                    padding:10
                },
                gridLines : {
                    display : false
                }
            } ]
        },
     
  showAllTooltips: true,
  tooltips: {
    backgroundColor:'#ffffff',
    bodyFontColor: '#000000',
   
    titleFontColor:'rgba(0,0,0,1)',
    enabled: true,
    mode: 'single',
    callbacks: {
        title: function(tooltipItems, data) { 
            return '';
        },
        label: function(tooltipItems, data) { 
            return tooltipItems.yLabel + "h";
        },
        labelColor: function(tooltipItem,data) {
            if (tooltipItem.datasetIndex === 0) {
                 return {
                    //  display:false,
                     borderColor: "#FFFFFF",
                     backgroundColor: "#FFFFFF"
                         };
                  }
                }
    }
},
    }
    return (
        <Line data={data} options={options}/>
    )
}

export default LineChart
