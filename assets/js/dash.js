function highchartsload1(){
	highcharts(1);
}


function fill_div_home(city){
    document.getElementById("total_reviews").innerHTML = "Total Reviews: 8510";
    document.getElementById("total_checkins").innerHTML = "Total Checkins: 19340";
    document.getElementById("canvas").innerHTML = " <div  class='row' > <div class='col-sm-8' style='width:33.33%'> <div class='chart-wrapper'> <div class='chart-stage'> <div id='hc-dyn-chart1' style='width:100%; height:38%;'></div> </div> </div>    </div> <div class='col-sm-4' style='width:33.33%'>  <div class='chart-wrapper'>          <div class='chart-stage'> <div id='hc-mn-chart2'style='width:100%; height:38%;'></div> </div>        </div>      </div>   <div class='col-sm-4' style='width:33.33%'>  <div class='chart-wrapper'>          <div class='chart-stage'> <div id='hc-mn-chart3'style='width:100%; height:38%;'></div> </div>        </div>      </div>    </div><div class='row'>      <div class='col-sm-6 col-md-4' style='width:60%'>        <div class='chart-wrapper'>          <div class='chart-stage'>                <div id='hc-price-chart' style=' height:57%'></div>          </div>        </div>      </div>     <div class='col-sm-6 col-md-4' style='width:40%; height=58%'>        <div class='chart-wrapper'>          <div class='chart-stage'>   <div id='dashboard' style='width:100%; height:57%'>       </div>        </div>      </div>    </div>      </div>  "
}

function fill_div_rest(city){
    document.getElementById("total_reviews").innerHTML = "Total Reviews: 3512";
    document.getElementById("total_checkins").innerHTML = "Total Checkins: 7340";

    document.getElementById("canvas").innerHTML = "<div class='row'>      <div class='col-sm-8' style='width:60%'>        <div class='chart-wrapper'>           <div class='chart-stage'>     <div id='rest-chart-1' style='width:100%; height:50%;'></div>     </div>        </div> </div>          <div class='col-sm-4' style='width:40%'>        <div class='chart-wrapper'>          <div class='chart-stage'>  <div id='rest-chart-2' style='height:50%;'>                    </div>        </div>      </div>    </div> </div>   <div class='row'>      <div class='col-sm-6 col-md-4' style='width:50%'>        <div class='chart-wrapper'>          <div class='chart-stage'>      <div id='rest-chart-3' style='height:44%;'>    </div>        </div>      </div>    </div>  <div class='col-sm-6 col-md-4' style='width:50%'>        <div class='chart-wrapper'>         <div class='chart-stage'>       <div id='rest-chart-4' style='width:100%; height:44%;'>   </div>        </div>      </div>   </div> </div>";

}
function fill_div_cafe(city){
    document.getElementById("total_reviews").innerHTML = "Total Reviews: 2191";
    document.getElementById("total_checkins").innerHTML = "Total Checkins: 5121";

    document.getElementById("canvas").innerHTML = "<div class='row'>      <div class='col-sm-8' style='width:60%'>        <div class='chart-wrapper'>           <div class='chart-stage'>     <div id='cafe-chart-1' style='width:100%; height:50%;'></div>     </div>        </div>      </div>      <div class='col-sm-4' style='width:40%'>        <div class='chart-wrapper'>          <div class='chart-stage'>  <div id='cafe-chart-3' style='width:100%; height:50%;'>                    </div>        </div>      </div>    </div> </div>  <div class='row'>      <div class='col-sm-6 col-md-4' style='width:40%'>        <div class='chart-wrapper'>          <div class='chart-stage'>      <div id='cafe-chart-2' style='width:100%; height:44%;'>    </div>        </div>      </div>   </div>   <div class='col-sm-6 col-md-4' style='width:60%'>        <div class='chart-wrapper'>         <div class='chart-stage'>       <div id='common-chart' style='width:100%; height:44%;'>   </div>        </div>      </div>   </div> </div>";

}
function fill_div_night(city){
    document.getElementById("total_reviews").innerHTML = "Total Reviews: 4321";
    document.getElementById("total_checkins").innerHTML = "Total Checkins: 8641";

    document.getElementById("canvas").innerHTML = "<div class='row'>      <div class='col-sm-8' style='width:60%'>        <div class='chart-wrapper'>           <div class='chart-stage'>     <div id='night-chart-2' style='width:100%; height:50%;'></div>     </div>        </div>      </div>      <div class='col-sm-4' style='width:40%'>        <div class='chart-wrapper'>          <div class='chart-stage'>  <div id='night-chart-3' style='width:100%; height:50%;'>                    </div>        </div>      </div>    </div>   </div> <div class='row'>      <div class='col-sm-6 col-md-4' style='width:40%'>        <div class='chart-wrapper'>          <div class='chart-stage'>      <div id='night-chart-1' style='width:100%; height:45%;'>    </div>        </div>      </div>     </div> <div class='col-sm-6 col-md-4' style='width:60%'>        <div class='chart-wrapper'>         <div class='chart-stage'>       <div id='common-chart' style='width:100%; height:45%;'>   </div>        </div>      </div>   </div> </div>";

}

function apply_theme(){

Highcharts.createElement('link', {
   href: 'http://fonts.googleapis.com/css?family=Signika:400,700',
   rel: 'stylesheet',
   type: 'text/css'
}, null, document.getElementsByTagName('head')[0]);

// Add the background image to the container
Highcharts.wrap(Highcharts.Chart.prototype, 'getContainer', function (proceed) {
   proceed.call(this);
   this.container.style.background = 'url(http://www.highcharts.com/samples/graphics/sand.png)';
});


Highcharts.theme = {
   colors: ["#f45b5b", "#8085e9", "#8d4654", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee",
      "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
   chart: {
      backgroundColor: null,
      style: {
         fontFamily: "Signika, serif"
      }
   },
   title: {
      style: {
         color: 'black',
         fontSize: '21px'

      }
   },
   subtitle: {
      style: {
	font:'14px',
         color: 'black'
      }
   },
   tooltip: {
      borderWidth: 0
   },
   legend: {
      itemStyle: {
         fontWeight: 'bold',
         fontSize: '13px'
      }
   },
   xAxis: {
      labels: {
         style: {
	    fontSize: '14px',
            color: '#6e6e70'
         }
      }
	
   },
   yAxis: {
      labels: {
         style: {
            color: '#6e6e70'
         }
      }
   },
   plotOptions: {
      series: {
         shadow: true
      },
      candlestick: {
         lineColor: '#404048'
      },
      map: {
         shadow: false
      }
   },

   // Highstock specific
   navigator: {
      xAxis: {
         gridLineColor: '#D0D0D8'
      }
   },
   rangeSelector: {
      buttonTheme: {
         fill: 'white',
         stroke: '#C0C0C8',
         'stroke-width': 1,
         states: {
            select: {
               fill: '#D0D0D8'
            }
         }
      }
   },
   scrollbar: {
      trackBorderColor: '#C0C0C8'
   },

   // General
   background2: '#E0E0E8'
   
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);
    $(document).ready(function () {
            global: {
                useUTC: false
            }
        });
}
function highcharts( city ) {

    fill_div_home(1);

    apply_theme();

	var options = {
		chart: {
			renderTo: 'hc-mn-chart2',
			type: 'bar'
		},
		exporting: { enabled: false },
		title: {
			text: 'Trending  Places this Week'
		},
		legend: {
                    enabled: false
                },
		xAxis: {
			categories: []
		},
		yAxis: {
			title: {
				text: 'Reviews'
			}
		},
		series: []
	};
	

	var name='TopTrending_Week.csv';
	
	$.get(name, function(data) {
		// Split the lines
		var lines = data.split('\n');
		var series = {
			   data: []
			 };
		
		$.each(lines, function(lineNo, line) {
		
			var items = line.split(',');

			
			$.each(items, function(itemNo, item) {
				
			if(lineNo != 0){
				if(itemNo == 0){
				//console.log("T"+itemNo);        
				options.xAxis.categories.push(item);
				series.name = "Reviews";
					
				} else {
				//console.log("X"+item);
				series.data.push(parseInt(item));
				}
			}
			
		});
		//console.log(series.name);
		//console.log(series.data);  
	
		});
		options.series.push(series);

		var chart = new Highcharts.Chart(options);
	});

//Top ever on yelp
var options1 = {
		chart: {
			renderTo: 'hc-mn-chart3',
			type: 'bar'
		},
		exporting: { enabled: false },
		title: {
			text: 'Best Places in Las Vegas'
		},
		legend: {
                    enabled: false
                },
		xAxis: {
			categories: []
	            
		},
		yAxis: {
			max:2000,
			title: {
				text: 'Reviews'
			}
		},
		series: []
	};
	

	var name='TopTrending_Ever.csv';
	
	$.get(name, function(data) {
		// Split the lines
		var lines = data.split('\n');
		var series1 = {
			   data: []
			 };

		$.each(lines, function(lineNo, line) {
		
			var items = line.split(',');

			
			$.each(items, function(itemNo, item) {
				
				if(lineNo != 0){
					if(itemNo == 0){
					//console.log("T"+itemNo);        
					options1.xAxis.categories.push(item);
					series1.name = "Reviews";
				} else {
					//console.log("X"+item);
					series1.data.push(parseInt(item));
				}
			}
			
			
		});
		//console.log(series.name);
		//console.log(series.data);  
	
		});
		options1.series.push(series1);

		var chart = new Highcharts.Chart(options1);
	});

//Price chart
var options2 ={
        chart: {
	    renderTo: 'hc-price-chart',
            type: 'spline'
        },		exporting: { enabled: false },
        title: {
            text: 'Average Price by Locality and Cuisine'
        },
        subtitle: {
            text: 'Source: Yelp.com'
        },
        xAxis: {
            categories: ['DownTown','Huntridge','Meadows-Village','Rancho-Charleston','DownTown-East']
        },
        yAxis: {
            title: {
                text: 'Price Per Meal for Two'
            },
            labels: {
                formatter: function () {
                    return this.value + '$';
                }
            }
        },
        tooltip: {
            crosshairs: true,
            shared: true
        },
        plotOptions: {
            spline: {
                marker: {
                    radius: 4,
                    lineColor: '#666666',
                    lineWidth: 1
                }
            }
        },series: []
    };

	var name='Cuisine_Locality.csv';
	
	$.get(name, function(data) {
		// Split the lines
		var lines = data.split('\n');
		var series1 = [];


		$.each(lines, function(lineNo, line) {
			var temp={name:"",data:[]};
			var items = line.split(' ');
	
				if(items != ""){
					points=items[1].split(',');
					temp.name=items[0];
					$.each(points, function(pointNo, point) {
						temp.data.push(parseFloat(point));
					})

				}
				if(temp.name != ""){
					options2.series.push(temp);
				}
		});
		var chart = new Highcharts.Chart(options2);
	});


///Dashboard - xxx


data_zip=$('#temp').html();

//data_zip=document.getElementById('tsv').innerHTML;

Highcharts.data({
        csv: $('#temp').html(),
        itemDelimiter: ',',
        parsed: function (columns) {

            var brands = {},
                brandsData = [],
                versions = {},
                drilldownSeries = [];

            // Parse percentage strings
            columns[1] = $.map(columns[1], function (value) {
                if (value.indexOf('%') === value.length - 1) {
                    value = parseFloat(value);
                }
                return value;
            });

            $.each(columns[0], function (i, name) {
                var brand,
                    version;

                if (i > 0) {

                    // Remove special edition notes
                    name = name.split(' -')[0];

                    // Split into brand and version
                    version = name.split(' ')[1];;
			//console.log(version);
//                    version = name.match(/([0-9]+[\.0-9x]*)/);
 //                   if (version) {
 //                      version = version[0];
 //                   }
                    brand = name.replace(version, '');

                    // Create the main data
                    if (!brands[brand]) {
                        brands[brand] = columns[1][i];
                    } else {
                        brands[brand] += columns[1][i];
                    }

                    // Create the version data
                    if (version !== null) {
                        if (!versions[brand]) {
                            versions[brand] = [];
                        }
                        versions[brand].push([version, columns[1][i]]);
                    }
                }

            });

            $.each(brands, function (name, y) {
                brandsData.push({
                    name: name,
                    y: y,
                    drilldown: versions[name] ? name : null
                });
            });
            $.each(versions, function (key, value) {
                drilldownSeries.push({
                    name: key,
                    id: key,
                    data: value
                });
            });

            // Create the chart
            $('#dashboard').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Famous Cuisine by Locality'
                },
		exporting: { enabled: false },
                subtitle: {
                    text: 'Click the columns to view Cuisine. Source: yelp.com.'
                },
                xAxis: {
                    type: 'category'
                },
                yAxis: {
                    title: {
                        text: 'Percentage share of  restaurents in Locality'
                    }
                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    series: {
                        borderWidth: 0,
                        dataLabels: {
                            enabled: true,
                            format: '{point.y:.1f}%'
                        }
                    }
                },

                tooltip: {
                    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
                },

                series: [{
                    name: 'Localities',
                    colorByPoint: true,
                    data: brandsData
                }],
                drilldown: {
                    series: drilldownSeries
                }
            });
        }
    });
        $('#hc-dyn-chart1').highcharts({
            chart: {
                type: 'spline',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 8,
                events: {
                    load: function () {

                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function () {
                            var x = (new Date()).getTime(), // current time
                                y = Math.floor((Math.random() * 50) + 1);
                            series.addPoint([x, y], true, true);
                        }, 5000);
                    }
                }
            },
            title: {
                text: 'Checkins in the City'
            },
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 150
            },
            yAxis: {
                title: {
                    text: 'Count'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Checkins',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -5; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 5000,
                            y: Math.floor((Math.random() * 50) + 1)
                        });
                    }
                    return data;
                }())
            }]
        });


}

function rest_chart_1(){
var optionsr1 = {
				chart: {
					renderTo: 'rest-chart-1',
					type: 'column',
					zoomType: 'xy'
				},
				title: {
					text: 'Top Restaurants in Las Vegas'
				},
				xAxis: {
					categories: []
				},
				exporting: {
			                enabled: false
            			},
				yAxis: [{ // Primary yAxis
            		labels: {
                		/*style: {
                    		color: Highcharts.getOptions().colors[2]
                		}*/
            		},
            		title: {
                		text: 'Reviews',
                		style: {
                    		color: Highcharts.getOptions().colors[2]
                		}
            		},
            		opposite: true

        			}, { // Secondary yAxis
          	  			gridLineWidth: 0,
            			title: {
               	 			text: 'Stars',
                			style: {
                    			color: Highcharts.getOptions().colors[0]
                			}
            			}
            		
        		}], 
				series: []
            	
			};

	$.get('VegasReviewRatings.csv', function(data) {
				// Split the lines
				var lines = data.split('\n');
				var seriesReviews = [
                    {data:[]},{data:[]}
                ];
                seriesReviews[0].name= 'Reviews';
                seriesReviews[1].name= 'Ratings';
                seriesReviews[0].type= "column";
                seriesReviews[1].type= "spline";
                seriesReviews[0].yAxis= 0;
                seriesReviews[1].yAxis= 1;
                seriesReviews[0].opposite=true;
                seriesReviews[1].opposite=true;
                seriesReviews[1].gridLineWidth=0;
                
                /*var seriesRatings = {
                    data: []
                };
				seriesRatings.name="Ratings";
				seriesRatings.type="spline";
				seriesReviews.yAxis=2;
				seriesReviews.dashStyle="shortdot";*/
                $.each(lines, function(lineNo, line) {
				
					var items = line.split(',');
					//console.log( items );
					
            				$.each(items, function(itemNo, item) {
            				//	console.log("ItemNo"+itemNo+" : ITEM="+item);
								if(lineNo != 0){
									if(itemNo == 0){
										optionsr1.xAxis.categories.push(item);
									} else if(itemNo == 1) {
										 seriesReviews[0].data.push(parseInt(item));
										 //seriesRatings.data.push(parseInt(item));
									} else{
					     			    seriesReviews[1].data.push(parseFloat(item));
					     			    //seriesRatings.data.push(parseFloat(item));
									}
								}

            				});
				
				
    			});
    			optionsr1.series.push(seriesReviews[0]);	
    			
    			optionsr1.series.push(seriesReviews[1]);	
    			//options.series.push(seriesRatings);	

				var chart = new Highcharts.Chart(optionsr1); 
	});
}

function rest_chart_2(){
var options = {
                global: {
                    useUTC: false
                },

                chart: {
                    renderTo: 'rest-chart-2',
                    type: 'columnrange',
                    inverted: true
                },
                title: {
                    text: 'Open hours for Top Trending Restaurants Today'
                },
                xAxis: {
                    categories: []
                },
		exporting: {
                	enabled: false
	            },
                yAxis: {
                    //type: 'datetime',
                    title: {
                        text: 'Hours'
                    },
                    tickInterval: 1,
                    /*min: Date.UTC(2014,11,12),
                    max: Date.UTC(2014,11,13)*/
                    min: 0,
                    max: 23

                }, 
                
                legend: {
                    enabled: false
                },
                series: []
    };


    $.get('RestaurantsHours.csv', function(data) {
                // Split the lines
                var lines = data.split('\n');
                
                var series = {
                    data : [[], []]
                };

                
                var i=0;
                $.each(lines, function(lineNo, line) {
                    if(!series.data[i])
                        series.data[i] = [];
                    var items = line.split(',');
                    console.log( items );
                    
                    
                            $.each(items, function(itemNo, item) {
                                console.log("ItemNo"+itemNo+" : ITEM="+item);
                                if(lineNo != 0){
                                    
                                    if(itemNo == 0){
                                        options.xAxis.categories.push(item);
                                    } else if(itemNo == 1) {
                                        item = item.replace(/["']/g, ""); 
                                        //console.log("Hours"+itemNo+" : "+item);
                                        var hrs1=item.split(':');
                                        //console.log("Hrs: "+hrs1);
                                        var hr,min;
                                        $.each(hrs1, function(hrs1No, hr1){
                                            if(hrs1No ==0){
                                                hr=parseInt(hr1);
                                            } else {
                                                min=parseInt(hr1);    
                                            }
                                        });
                                        //console.log("Hrs: "+hr+" : "+min);
                                        //series.data[i].push(Date.UTC(2014, 11, 12, hr, min, 0));
                                        series.data[i].push(hr);
                                        console.log("DATEFR:"+new Date(Date.UTC(2014, 11, 12, hr, min, 0)));
                                    } else if(itemNo == 2){
                                        item = item.replace(/["']/g, ""); 
                                        //console.log("Hours"+itemNo+" : "+item);
                                        var hrs1=item.split(':');
                                        //console.log("Hrs: "+hrs1);
                                        var hr,min;
                                        $.each(hrs1, function(hrs1No, hr1){
                                            if(hrs1No ==0){
                                                hr=parseInt(hr1);
                                            } else {
                                                min=parseInt(hr1);    
                                            }
                                        });
                                        //console.log("Hrs: "+hr+" : "+min);
                                        //series.data[i].push(Date.UTC(2014, 11, 12, hr, min, 0));
                                        series.data[i].push(hr);
                                        console.log("DATETO"+new Date(Date.UTC(2014, 11, 12, hr, min, 0)));
                                    }
                                    
                                }

                            });

                    //console.log("Data 2: "+data2);
                    if(lineNo != 0){  
                        i=i+1;
                    }
                    //console.log("Temp series: "+series.data.length);
                    
                });
                options.series.push(series);    
                
                console.log("Series"+options.series);
                var chart = new Highcharts.Chart(options);
});
}

function rest_chart_3(){
// Split the lines 
    var brands = {},
        brandsData = [],
        versions = {},
        drilldownSeries = [];

    var options = {
                chart: {
                    renderTo: 'rest-chart-3',
                    type: 'column'
                },
                title: {
                    text: 'Top trending restaurants'
                },
                subtitle: {
                    text: 'Click the columns to view their attributes'
                },
                xAxis: {
                    type: 'category'
                },
                yAxis: {
                    title: {
                        text: 'Total number of restaurants'
                    }
                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    series: {
                        borderWidth: 0,
                        dataLabels: {
                            enabled: true,
                            format: '{point.y:.1f}'
                        }
                    }
                },

                tooltip: {
                    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> of total<br/>'
                },

                series: [{
                    name: 'Ambience',
                    colorByPoint: true,
                    data: brandsData
                }],
                drilldown: {
                    series: drilldownSeries
                }

    };

    $.get('1.csv', function(data) {
                
                var lines = data.split('\n');
                $.each(lines, function(lineNo, line) {
                    var brand, version;
                    var items = line.split(',');
                    $.each(items, function(itemNo, item) {
                        console.log("ItemNo"+itemNo+" : ITEM="+item);
                        if(itemNo == 0){
                            brand = item;
                        } else if(itemNo == 1){
                            version = parseInt(item);
                        } else if(itemNo == 2){
                            if (!brands[brand]) {
                                brands[brand] = parseInt(item);
                            } else {
                                brands[brand] += parseInt(item);
                            }
                            if (!versions[brand]) {
                                versions[brand] = [];
                            }
                            if(version==4){
                                versions[brand].push(['Service', parseInt(item)]);
                            } else if(version==3){
                                versions[brand].push(['Food', parseInt(item)]);
                            } else if(version==2){
                                versions[brand].push(['Ambience', parseInt(item)]);                                
                            } else if(version==1){
                                versions[brand].push(['Others', parseInt(item)]);                                
                            }
                            
                        }
                    });
                });

                $.each(brands, function (name, y) {
                    brandsData.push({
                        name: name,
                        y: y,
                        drilldown: versions[name] ? name : null
                    });
                });
                $.each(versions, function (key, value) {
                    drilldownSeries.push({
                        name: key,
                        id: key,
                        data: value
                    });
                });
                //options.series.push(series);    
                
                //console.log("Series"+options.series);
                var chart = new Highcharts.Chart(options);
});
}
function rest_chart_4(){
var options = {
            chart: {
            	renderTo: 'rest-chart-4',
            	type: 'heatmap',
            	marginTop: 40,
            	marginBottom: 40
       		},		exporting: { enabled: false },
                
       		title: {
            	text: 'Trending restaurants with their specialities'
       		 },
            xAxis: {
                    categories: []
             },
            yAxis: {
            	categories: ['Breakfast', 'Brunch', 'Lunch', 'Dinner'],
            	title: null
        	},
            colorAxis: {
            	min: 0,
            	minColor: '#FFFFFF',
            	maxColor: Highcharts.getOptions().colors[0]
        	},   
            legend: {
            	align: 'right',
            	layout: 'vertical',
            	margin: 0,
            	verticalAlign: 'top',
            	y: 25,
            	symbolHeight: 320
        	},
            series: []
    	};

    	$.get('restaurantAttributes.csv', function(data) {
                               // Split the lines
                var lines = data.split('\n');
                
                var series = {
                    data : [[], []]
                };
                series.name="Attributes";
                series.borderWidth=1;
                
                var i=1, indexI=0,j=0;
                var flag=true;
                $.each(lines, function(lineNo, line) {
                    if(lineNo != 0 && lineNo%4==0){
                    	indexI=indexI+1;
                    	j=0;	
                    	flag=true;
                    }
                    if(!series.data[i])
                        series.data[i] = [];
                    var items = line.split(',');
                    console.log( items );
                    
                    console.log("Index: "+indexI+" : j "+j);
                            $.each(items, function(itemNo, item) {
                                console.log("ItemNo"+itemNo+" : ITEM="+item);
                                if(lineNo != 0){
                                    
                                    if(itemNo == 0){
                                        if(flag){
                                        	options.xAxis.categories.push(item);
                                        	flag=false;
                                        }
                                        series.data[i].push(indexI);
                                    } else if(itemNo == 1) {
                                        series.data[i].push(j);
                                    } else if(itemNo == 2){
                                    	series.data[i].push(parseInt(item));
                                    }
                                }
                            });

                    //console.log("Data 2: "+data2);
                    if(lineNo != 0){  
                        i=i+1;
                    }
                    j=j+1;
                    console.log("Temp series: "+series.data);
                    
                });
                series.data[0].push(0);
                series.data[0].push(0);
                series.data[0].push(4);

                options.series.push(series);    
                
                console.log("Series"+options.series);
                var chart = new Highcharts.Chart(options);
		});
}

function common_chart(){
 $('#common-chart').highcharts({
	
	    chart: {
	        type: 'gauge',
	        plotBackgroundColor: null,
	        plotBackgroundImage: null,
	        plotBorderWidth: 0,
	        plotShadow: false
	    },		exporting: { enabled: false },
	    
	    title: {
	        text: 'Checkins'
	    },
	    
	    pane: {
	        startAngle: -90,
	        endAngle: 90,
            background: null
	    },
        
        plotOptions: {
            gauge: {
                dataLabels: {
                    enabled: false
             },
                dial: {
                    baseLength: '0%',
                    baseWidth: 10,
                    radius: '100%',
                    rearLength: '0%',
                    topWidth: 1
                }
            }
        },
	       
	    // the value axis
	    yAxis: {
            labels: {
                enabled: true,
                distance : 20
                
                
            },
            minorTickLength: 0,
	        min: 0,
	        max: 100,
            tickLength: 0,
	        plotBands: [{
	            from: 0,
	            to: 100,
	            color: 'rgb(244, 91, 91)', // red
                thickness: '50%'
	        }]        
	    },
	
	    series: [{
	        name: 'Checkins',
	        data: [80]
	    }]
	
	}, 
	// Add some life
	function (chart) {
		if (!chart.renderer.forExport) {
		    setInterval(function () {
		        var point = chart.series[0].points[0],
		            newVal,
		            inc = Math.round((Math.random() - 0.5) * 20);
		        
		        newVal = point.y + inc;
		        if (newVal < 0 || newVal > 100) {
		            newVal = point.y - inc;
		        }
		        
		        point.update(newVal);
		        
		    }, 3000);
		}
	});

}
function highcharts1( city ) {
    apply_theme();
    fill_div_rest(1);
    rest_chart_1();
    rest_chart_2(); 
    rest_chart_3();
    rest_chart_4();

}	
function cafe_chart_1(){
var optionsc1 = {
				chart: {
					renderTo: 'cafe-chart-1',
					type: 'column',
					zoomType: 'xy'
				},exporting: { enabled: false },
				title: {
					text: 'Top Cafes in Las Vegas'
				},
				xAxis: {
					categories: [],
					labels: {
   				             rotation: -30,
   				             style: {
   				                 fontSize: '13px',
   				                 fontFamily: 'Verdana, sans-serif'
    				            }
    				        }
				},
				yAxis: [{ // Primary yAxis
            		labels: {
                		/*style: {
                    		color: Highcharts.getOptions().colors[2]
                		}*/
            		},
            		title: {
                		text: 'Reviews',
                		style: {
                    		color: Highcharts.getOptions().colors[2]
                		}
            		},
            		opposite: true

        			}, { // Secondary yAxis
          	  			gridLineWidth: 0,
            			title: {
               	 			text: 'Stars',
                			style: {
                    			color: Highcharts.getOptions().colors[0]
                			}
            			},
            			labels: {
             	   			format: '{value}',
                			/*style: {
                    			color: Highcharts.getOptions().colors[0]
                			}*/
            			}
        		}], 
				series: []
            	
			};

	$.get('try.csv', function(data) {
				// Split the lines
				var lines = data.split('\n');
				var seriesReviews = [
                    {data:[]},{data:[]}
                ];
                seriesReviews[0].name= 'Reviews';
                seriesReviews[1].name= 'Ratings';
                seriesReviews[0].type= "column";
                seriesReviews[1].type= "spline";
                seriesReviews[0].yAxis= 0;
                seriesReviews[1].yAxis= 1;
                seriesReviews[0].opposite=true;
                seriesReviews[1].opposite=true;
                seriesReviews[1].gridLineWidth=0;
                
                $.each(lines, function(lineNo, line) {
				
					var items = line.split(',');
					console.log( items );
					
            				$.each(items, function(itemNo, item) {
            					console.log("ItemNo"+itemNo+" : ITEM="+item);
								if(lineNo != 0){
									if(itemNo == 0){
										optionsc1.xAxis.categories.push(item);
									} else if(itemNo == 1) {
										 seriesReviews[0].data.push(parseInt(item));
										 //seriesRatings.data.push(parseInt(item));
									} else{
					     			    seriesReviews[1].data.push(parseFloat(item));
					     			    //seriesRatings.data.push(parseFloat(item));
									}
								}

            				});
				
				
    			});
    			optionsc1.series.push(seriesReviews[0]);	
    			
    			optionsc1.series.push(seriesReviews[1]);	
    			//options.series.push(seriesRatings);	
    			console.log(seriesReviews[1]);
    			console.log(optionsc1.series);
			var chart = new Highcharts.Chart(optionsc1);
});
}
function cafe_chart_2(){
 var brands = {},
        brandsData = [],
        versions = {},
        drilldownSeries = [];

    var options = {
                chart: {
                    renderTo: 'cafe-chart-2',
                    type: 'column'
                },
                title: {
                    text: 'Top 5 popular Cafes'
                },
                subtitle: {
                    text: 'Click the columns to view attributes wise popularity'
                },
                xAxis: {
                    type: 'category'
                },
                yAxis: {
                    title: {
                        text: 'Reviews'
                    }
                },
                legend: {
                    enabled: false
                },exporting: { enabled: false },
                plotOptions: {
                    series: {
                        borderWidth: 0,
                        dataLabels: {
                            enabled: true,
                            format: '{point.y:.1f}'
                        }
                    }
                },

                tooltip: {
                    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> of total<br/>'
                },

                series: [{
                    name: 'popularity',
                    colorByPoint: true,
                    data: brandsData
                }],
                drilldown: {
                    series: drilldownSeries
                }

    };

    $.get('ambienceCountRatings_cafe.csv', function(data) {
                
                var lines = data.split('\n');
                $.each(lines, function(lineNo, line) {
                    var brand, version;
                    var items = line.split(',');
                    $.each(items, function(itemNo, item) {
                        console.log("ItemNo"+itemNo+" : ITEM="+item);
                        if(itemNo == 0){
                            brand = item;
                        } else if(itemNo == 1){
                            version = item;
                        } else if(itemNo == 2){
                            if (!brands[brand]) {
                                brands[brand] = parseInt(item);
                            } else {
                                brands[brand] += parseInt(item);
                            }
                            if (!versions[brand]) {
                                versions[brand] = [];
                            }
                            versions[brand].push(['' + version, parseInt(item)]);
                        }
                    });
                });

                $.each(brands, function (name, y) {
                    brandsData.push({
                        name: name,
                        y: y,
                        drilldown: versions[name] ? name : null
                    });
                });
                $.each(versions, function (key, value) {
                    drilldownSeries.push({
                        name: key,
                        id: key,
                        data: value
                    });
                });
                //options.series.push(series);    
                
                //console.log("Series"+options.series);
                var chart = new Highcharts.Chart(options);
});
}
function cafe_chart_3(){
 var options = {
                global: {
                    useUTC: false
                },exporting: { enabled: false },

                chart: {
                    renderTo: 'cafe-chart-3',
                    type: 'columnrange',
                    inverted: true
                },
                title: {
                    text: 'Open hours for Top Trending Cafes Today'
                },
                xAxis: {
                    categories: [],
					title :{
					text: 'Restaurant Name'
					}
                },
                yAxis: {
                    //type: 'datetime',
                    title: {
                        text: 'Hours'
                    },
                    tickInterval: 1,
                    /*min: Date.UTC(2014,11,12),
                    max: Date.UTC(2014,11,13)*/
                    min: 0,
                    max: 23

                }, 
                
                legend: {
                    enabled: false
                },
                series: []
    };


    $.get('RestaurantsHours_cafe.csv', function(data) {
                // Split the lines
                var lines = data.split('\n');
                
                var series = {
                    data : [[], []]
                };

                
                var i=0;
                $.each(lines, function(lineNo, line) {
                    if(!series.data[i])
                        series.data[i] = [];
                    var items = line.split(',');
                    console.log( items );
                    
                    
                            $.each(items, function(itemNo, item) {
                                console.log("ItemNo"+itemNo+" : ITEM="+item);
                                if(lineNo != 0){
                                    
                                    if(itemNo == 0){
                                        options.xAxis.categories.push(item);
                                    } else if(itemNo == 1) {
                                        item = item.replace(/["']/g, ""); 
                                        //console.log("Hours"+itemNo+" : "+item);
                                        var hrs1=item.split(':');
                                        //console.log("Hrs: "+hrs1);
                                        var hr,min;
                                        $.each(hrs1, function(hrs1No, hr1){
                                            if(hrs1No ==0){
                                                hr=parseInt(hr1);
                                            } else {
                                                min=parseInt(hr1);    
                                            }
                                        });
                                        //console.log("Hrs: "+hr+" : "+min);
                                        //series.data[i].push(Date.UTC(2014, 11, 12, hr, min, 0));
                                        series.data[i].push(hr);
                                        console.log("DATEFR:"+new Date(Date.UTC(2014, 11, 12, hr, min, 0)));
                                    } else if(itemNo == 2){
                                        item = item.replace(/["']/g, ""); 
                                        //console.log("Hours"+itemNo+" : "+item);
                                        var hrs1=item.split(':');
                                        //console.log("Hrs: "+hrs1);
                                        var hr,min;
                                        $.each(hrs1, function(hrs1No, hr1){
                                            if(hrs1No ==0){
                                                hr=parseInt(hr1);
                                            } else {
                                                min=parseInt(hr1);    
                                            }
                                        });
                                        //console.log("Hrs: "+hr+" : "+min);
                                        //series.data[i].push(Date.UTC(2014, 11, 12, hr, min, 0));
                                        series.data[i].push(hr);
                                        console.log("DATETO"+new Date(Date.UTC(2014, 11, 12, hr, min, 0)));
                                    }
                                    
                                }

                            });

                    //console.log("Data 2: "+data2);
                    if(lineNo != 0){  
                        i=i+1;
                    }
                    //console.log("Temp series: "+series.data.length);
                    
                });
                options.series.push(series);    
                
                console.log("Series"+options.series);
                var chart = new Highcharts.Chart(options);
});
}
function cafe_chart_4(){
var options = {
            chart: {
            	renderTo: 'common-chart',
            	type: 'heatmap',
            	marginTop: 40,
            	marginBottom: 40
       		},		exporting: { enabled: false },
                
       		title: {
            	text: 'Trending Cafes with their Specialities'
       		 },
            xAxis: {
                    categories: []
             },
            yAxis: {
            	categories: ['Food', 'Books', 'Tea Rooms', 'Bakery'],
            	title: null
        	},
            colorAxis: {
            	min: 0,
            	minColor: '#FFFFFF',
            	maxColor: Highcharts.getOptions().colors[0]
        	},   
            legend: {
            	align: 'right',
            	layout: 'vertical',
            	margin: 0,
            	verticalAlign: 'top',
            	y: 25,
            	symbolHeight: 320
        	},
            series: []
    	};

    	$.get('cafeAttributes.csv', function(data) {
                               // Split the lines
                var lines = data.split('\n');
                
                var series = {
                    data : [[], []]
                };
                series.name="Attributes";
                series.borderWidth=1;
                
                var i=1, indexI=0,j=0;
                var flag=true;
                $.each(lines, function(lineNo, line) {
                    if(lineNo != 0 && lineNo%4==0){
                    	indexI=indexI+1;
                    	j=0;	
                    	flag=true;
                    }
                    if(!series.data[i])
                        series.data[i] = [];
                    var items = line.split(',');
                    console.log( items );
                    
                    console.log("Index: "+indexI+" : j "+j);
                            $.each(items, function(itemNo, item) {
                                console.log("ItemNo"+itemNo+" : ITEM="+item);
                                if(lineNo != 0){
                                    
                                    if(itemNo == 0){
                                        if(flag){
                                        	options.xAxis.categories.push(item);
                                        	flag=false;
                                        }
                                        series.data[i].push(indexI);
                                    } else if(itemNo == 1) {
                                        series.data[i].push(j);
                                    } else if(itemNo == 2){
                                    	series.data[i].push(parseInt(item));
                                    }
                                }
                            });

                    //console.log("Data 2: "+data2);
                    if(lineNo != 0){  
                        i=i+1;
                    }
                    j=j+1;
                    console.log("Temp series: "+series.data);
                    
                });
                series.data[0].push(0);
                series.data[0].push(0);
                series.data[0].push(4);

                options.series.push(series);    
                
                console.log("Series"+options.series);
                var chart = new Highcharts.Chart(options);
		});
}
function highcharts2( city ) {
    apply_theme();
    fill_div_cafe(1);
    cafe_chart_1();
    cafe_chart_2(); 
    cafe_chart_3();
    cafe_chart_4();
  //  common_chart();
}
function night_chart_1(){
// Split the lines 
    var brands = {},
        brandsData = [],
        versions = {},
        drilldownSeries = [];

    var options = {
                chart: {
                    renderTo: 'night-chart-1',
                    type: 'column'
                },
                title: {
                    text: 'Top 5 popular clubs'
                },
                subtitle: {
                    text: 'Click the columns to view attributes wise popularity'
                },exporting: { enabled: false },
                xAxis: {
                    type: 'category'
                },
                yAxis: {
                    title: {
                        text: 'Reviews'
                    }
                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    series: {
                        borderWidth: 0,
                        dataLabels: {
                            enabled: true,
                            format: '{point.y:.1f}'
                        }
                    }
                },

                tooltip: {
                    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> of total<br/>'
                },

                series: [{
                    name: 'popularity',
                    colorByPoint: true,
                    data: brandsData
                }],
                drilldown: {
                    series: drilldownSeries
                }

    };

    $.get('NightLifeambienceCountRatings.csv', function(data) {
                
                var lines = data.split('\n');
                $.each(lines, function(lineNo, line) {
                    var brand, version;
                    var items = line.split(',');
                    $.each(items, function(itemNo, item) {
                        console.log("ItemNo"+itemNo+" : ITEM="+item);
                        if(itemNo == 0){
                            brand = item;
                        } else if(itemNo == 1){
                            version = item;
                        } else if(itemNo == 2){
                            if (!brands[brand]) {
                                brands[brand] = parseInt(item);
                            } else {
                                brands[brand] += parseInt(item);
                            }
                            if (!versions[brand]) {
                                versions[brand] = [];
                            }
                            versions[brand].push(['' + version, parseInt(item)]);
                        }
                    });
                });

                $.each(brands, function (name, y) {
                    brandsData.push({
                        name: name,
                        y: y,
                        drilldown: versions[name] ? name : null
                    });
                });
                $.each(versions, function (key, value) {
                    drilldownSeries.push({
                        name: key,
                        id: key,
                        data: value
                    });
                });
                //options.series.push(series);    
                
                //console.log("Series"+options.series);
                var chart = new Highcharts.Chart(options);
});

}
function night_chart_2(){
var options = {
				chart: {
					renderTo: 'night-chart-2',
					type: 'column',
					zoomType: 'xy'
				},exporting: { enabled: false },
				title: {
					text: 'Best Night Life in Las Vegas'
				},
				xAxis: {
					categories: [],labels: {
   				             rotation: -30,
   				             style: {
   				                 fontSize: '13px',
   				                 fontFamily: 'Verdana, sans-serif'
    				            }
    				        }
				},
				yAxis: [{ // Primary yAxis
            		labels: {
                		/*style: {
                    		color: Highcharts.getOptions().colors[2]
                		}*/
            		},
            		title: {
                		text: 'Reviews',
                		style: {
                    		color: Highcharts.getOptions().colors[2]
                		}
            		},
            		opposite: true

        			}, { // Secondary yAxis
          	  			gridLineWidth: 0,
            			title: {
               	 			text: 'Stars',
                			style: {
                    			color: Highcharts.getOptions().colors[0]
                			}
            			},
            			labels: {
             	   			
                			/*style: {
                    			color: Highcharts.getOptions().colors[0]
                			}*/
            			}
        		}], 
				series: []
            	
			};

	$.get('NightLifeReviewsRatings.csv', function(data) {
				// Split the lines
				var lines = data.split('\n');
				var seriesReviews = [
                    {data:[]},{data:[]}
                ];
                seriesReviews[0].name= 'Reviews';
                seriesReviews[1].name= 'Ratings';
                seriesReviews[0].type= "column";
                seriesReviews[1].type= "spline";
                seriesReviews[0].yAxis= 0;
                seriesReviews[1].yAxis= 1;
                seriesReviews[0].opposite=true;
                seriesReviews[1].opposite=true;
                seriesReviews[1].gridLineWidth=0;
                
                /*var seriesRatings = {
                    data: []
                };
				seriesRatings.name="Ratings";
				seriesRatings.type="spline";
				seriesReviews.yAxis=2;
				seriesReviews.dashStyle="shortdot";*/
                $.each(lines, function(lineNo, line) {
				
					var items = line.split(',');
					console.log( items );
					
            				$.each(items, function(itemNo, item) {
            					console.log("ItemNo"+itemNo+" : ITEM="+item);
								if(lineNo != 0){
									if(itemNo == 0){
										options.xAxis.categories.push(item);
									} else if(itemNo == 1) {
										 seriesReviews[0].data.push(parseInt(item));
										 //seriesRatings.data.push(parseInt(item));
									} else{
					     			    seriesReviews[1].data.push(parseFloat(item));
					     			    //seriesRatings.data.push(parseFloat(item));
									}
								}

            				});
				
				
    			});
    			options.series.push(seriesReviews[0]);	
    			
    			options.series.push(seriesReviews[1]);	
    			//options.series.push(seriesRatings);	
    			console.log(seriesReviews[1]);
    			console.log(options.series);
				var chart = new Highcharts.Chart(options);
});

}
function night_chart_3(){
 var options = {
                global: {
                    useUTC: false
                },

                chart: {
                    renderTo: 'night-chart-3',
                    type: 'columnrange',
                    inverted: true
                },		exporting: { enabled: false },
                title: {
                    text: 'Open hours for Top Trending Nightclubs Today'
                },
                xAxis: {
                    categories: []
                },
                yAxis: {
                    //type: 'datetime',
                    title: {
                        text: 'Hours'
                    },
                   tickInterval: 1,
                    /*min: Date.UTC(2014,11,12),
                    max: Date.UTC(2014,11,13)*/	
				    min: 0,
                    max : 23 
					//range: [13,14,15,16,17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9,10,11,12]
                }, 
                
                legend: {
                    enabled: false
                },
                series: []
    };


    $.get('NightClubHours.csv', function(data) {
                // Split the lines
                var lines = data.split('\n');
                
                var series = {
                    data : [[], []]
                };

                
                var i=0;
                $.each(lines, function(lineNo, line) {
                    if(!series.data[i])
                        series.data[i] = [];
                    var items = line.split(',');
                    console.log( items );
                    
                    
                            $.each(items, function(itemNo, item) {
                                console.log("ItemNo"+itemNo+" : ITEM="+item);
                                if(lineNo != 0){
                                    
                                    if(itemNo == 0){
                                        options.xAxis.categories.push(item);
                                    } else if(itemNo == 1) {
                                        item = item.replace(/["']/g, ""); 
                                        //console.log("Hours"+itemNo+" : "+item);
                                        var hrs1=item.split(':');
                                        //console.log("Hrs: "+hrs1);
                                        var hr,min;
                                        $.each(hrs1, function(hrs1No, hr1){
                                            if(hrs1No ==0){
                                                hr=parseInt(hr1);
                                            } else {
                                                min=parseInt(hr1);    
                                            }
                                        });
                                        //console.log("Hrs: "+hr+" : "+min);
                                        //series.data[i].push(Date.UTC(2014, 11, 12, hr, min, 0));
                                        series.data[i].push(hr);
                                        console.log("DATEFR:"+new Date(Date.UTC(2014, 11, 12, hr, min, 0)));
                                    } else if(itemNo == 2){
                                        item = item.replace(/["']/g, ""); 
                                        //console.log("Hours"+itemNo+" : "+item);
                                        var hrs1=item.split(':');
                                        //console.log("Hrs: "+hrs1);
                                        var hr,min;
                                        $.each(hrs1, function(hrs1No, hr1){
                                            if(hrs1No ==0){
                                                hr=parseInt(hr1);
                                            } else {
                                                min=parseInt(hr1);    
                                            }
                                        });
                                        //console.log("Hrs: "+hr+" : "+min);
                                        //series.data[i].push(Date.UTC(2014, 11, 12, hr, min, 0));
                                        series.data[i].push(hr);
                                        console.log("DATETO"+new Date(Date.UTC(2014, 11, 12, hr, min, 0)));
                                    }
                                    
                                }

                            });

                    //console.log("Data 2: "+data2);
                    if(lineNo != 0){  
                        i=i+1;
                    }
                    //console.log("Temp series: "+series.data.length);
                    
                });
                options.series.push(series);    
                
                console.log("Series"+options.series);
                var chart = new Highcharts.Chart(options);
});
}
function night_chart_4(){
var options = {
            chart: {
            	renderTo: 'common-chart',
            	type: 'heatmap',
            	marginTop: 40,
            	marginBottom: 40
       		},		exporting: { enabled: false },
                
       		title: {
            	text: 'Trending Night Clubs with their specialities'
       		 },
            xAxis: {
                    categories: []
             },
            yAxis: {
            	categories: ['Martinis', 'Margarita', 'Beer', 'Mojitos'],
            	title: null
        	},
            colorAxis: {
            	min: 0,
            	minColor: '#FFFFFF',
            	maxColor: Highcharts.getOptions().colors[0]
        	},   
            legend: {
            	align: 'right',
            	layout: 'vertical',
            	margin: 0,
            	verticalAlign: 'top',
            	y: 25,
            	symbolHeight: 320
        	},
            series: []
    	};

    	$.get('nightAttributes.csv', function(data) {
                               // Split the lines
                var lines = data.split('\n');
                
                var series = {
                    data : [[], []]
                };
                series.name="Attributes";
                series.borderWidth=1;
                
                var i=1, indexI=0,j=0;
                var flag=true;
                $.each(lines, function(lineNo, line) {
                    if(lineNo != 0 && lineNo%4==0){
                    	indexI=indexI+1;
                    	j=0;	
                    	flag=true;
                    }
                    if(!series.data[i]){
                    	console.log("i:"+i);
                        series.data[i] = [];
                    }
                    var items = line.split(',');
                    console.log( items );
                    
                    console.log("Index: "+indexI+" : j "+j);
                            $.each(items, function(itemNo, item) {
                                console.log("ItemNo"+itemNo+" : ITEM="+item);
                                if(lineNo != 0){
                                    
                                    if(itemNo == 0){
                                        if(flag){
                                        	options.xAxis.categories.push(item);
                                        	flag=false;
                                        }
                                        series.data[i].push(indexI);
                                    } else if(itemNo == 1) {
                                        series.data[i].push(j);
                                    } else if(itemNo == 2){
                                    	series.data[i].push(parseInt(item));
                                    }
                                }
                            });

                    //console.log("Data 2: "+data2);
                    if(lineNo != 0){  
                        i=i+1;
                    }
                    j=j+1;
                    console.log("Temp series: "+series.data);
                    
                });
				series.data[0].push(0);
				series.data[0].push(0);
				series.data[0].push(4);
				
                options.series.push(series);    
                
                console.log("Series"+options.series);
                var chart = new Highcharts.Chart(options);
		});

}
function highcharts3( city ) {
    apply_theme();
    fill_div_night(1);
    night_chart_1();
    night_chart_2(); 
    night_chart_3();
    night_chart_4();
//    common_chart();
}
