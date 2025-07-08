$(document).ready(function () {

  // Kendo Button
  $("#myButton").kendoButton({
    themeColor: "primary",
    click: function () {
      alert("Kendo Button Clicked!");
    }
  });

  // ---------------------------------------------------------------------

  // edited by pankaj

  // themed btns
  $('#primary-sm').kendoButton({
    themeColor: 'primary'
  })

  $('#secondary-md').kendoButton({
    themeColor: 'secondary'
  })

  $('#tertiary-lg').kendoButton({
    themeColor: 'tertiary'
  })

  $('#info-btn').kendoButton({
    themeColor: 'info'
  })

  $('#warning-btn').kendoButton({
    themeColor: 'warning'
  })

  $('#pop-up-btn').kendoButton({
    themeColor: 'primary'
  })

  // multi select 
  $(document).ready(function () {
    $("#products").kendoMultiSelect({
      label: {
        content: "Products",
        floating: true
      },
      dataTextField: "ProductName",
      dataValueField: "ProductID",
      autoBind: false,
      dataSource: {
        type: "odata-v4",
        serverFiltering: true,
        transport: {
          read: {
            url: "https://demos.telerik.com/service/v2/odata/Products",
          }
        }
      }
    });
  });

  // line chart 
  function createChart() {
    $("#chart").kendoChart({
      title: {
        text: "Gross domestic product growth \n /GDP annual %/"
      },
      legend: {
        position: "bottom"
      },
      chartArea: {
        background: ""
      },
      seriesDefaults: {
        type: "line",
        style: "smooth"
      },
      series: [{
        name: "India",
        data: [3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.890, 8.238, 9.552, 6.855]
      }, {
        name: "World",
        data: [1.988, 2.733, 3.994, 3.464, 4.001, 3.939, 1.333, -2.245, 4.339, 2.727]
      }, {
        name: "Russian Federation",
        data: [4.743, 7.295, 7.175, 6.376, 8.153, 8.535, 5.247, -7.832, 4.3, 4.3]
      }, {
        name: "Haiti",
        data: [-0.253, 0.362, -3.519, 1.799, 2.252, 3.343, 0.843, 2.877, -5.416, 5.590]
      }],
      valueAxis: {
        labels: {
          format: "{0}%"
        },
        line: {
          visible: false
        },
        axisCrossingValue: -10
      },
      categoryAxis: {
        categories: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
        majorGridLines: {
          visible: false
        },
        labels: {
          rotation: "auto"
        }
      },
      tooltip: {
        visible: true,
        format: "{0}%",
        template: "#= series.name #: #= value #"
      }
    });
  }

  $(document).ready(createChart);
  $(document).bind("kendo:skinChange", createChart);

  // pie chart
  function createPieChart() {
    $("#pieChart").kendoChart({
      title: {
        position: "bottom",
        text: "Share of Internet Population Growth, 2007 - 2012"
      },
      legend: {
        visible: false
      },
      chartArea: {
        background: ""
      },
      seriesDefaults: {
        labels: {
          visible: true,
          background: "transparent",
          template: "#= category #: \n #= value#%"
        }
      },
      series: [{
        type: "pie",
        startAngle: 150,
        data: [{
          category: "Asia",
          value: 53.8,
          color: "#9de219"
        }, {
          category: "Europe",
          value: 16.1,
          color: "#90cc38"
        }, {
          category: "Latin America",
          value: 11.3,
          color: "#068c35"
        }, {
          category: "Africa",
          value: 9.6,
          color: "#006634"
        }, {
          category: "Middle East",
          value: 5.2,
          color: "#004d38"
        }, {
          category: "North America",
          value: 3.6,
          color: "#033939"
        }]
      }],
      tooltip: {
        visible: true,
        format: "{0}%"
      }
    });
  }

  $(document).ready(createPieChart);
  $(document).bind("kendo:skinChange", createPieChart);

  // datetime picker
  $("#datetimepicker").kendoDateTimePicker({
    dateInput: true,
    startTime: new Date(2023, 1, 3, 8, 30, 0),
    endTime: new Date(2023, 1, 3, 17, 0)
  });

  const popup = $("#popup").kendoPopup({
    anchor: $("#pop-up-btn"),    // anchor it to the button
    origin: "bottom left",       // where the popup starts from
    position: "top left",        // how it's placed relative to anchor
    collision: "fit flip"        // prevent it from going off-screen
  }).data("kendoPopup");

  // Button click event
  $("#pop-up-btn").on("click", function () {
    popup.toggle();  // toggles open/close each time
  });

  // ---------------------------------------------------------

  // Kendo Grid
  $("#myGrid").kendoGrid({
    dataSource: {
      data: [
        { name: "John", age: 30 },
        { name: "Alice", age: 25 },
        { name: "Bob", age: 28 },
        { name: "Emma", age: 32 }
      ],
      pageSize: 3
    },
    pageable: true,
    columns: [
      { field: "name", title: "Name" },
      { field: "age", title: "Age" }
    ]
  });

  // Kendo Chart
  $("#myChart").kendoChart({
    title: {
      text: "Monthly Sales"
    },
    legend: {
      visible: false
    },
    series: [{
      type: "column",
      name: "Sales",
      data: [1000, 2000, 3000, 4000],
      color: "#3f51b5"
    }],
    categoryAxis: {
      categories: ["Jan", "Feb", "Mar", "Apr"],
      majorGridLines: {
        visible: false
      }
    },
    valueAxis: {
      labels: {
        format: "${0}"
      }
    }
  });

  // Kendo DropDownList
  $("#categorySelector").kendoDropDownList({
    dataSource: ["Books", "Movies", "Music"],
    optionLabel: "Select category..."
  });

  // Kendo DatePicker

  // edited by Pankaj
  $("#datePicker").kendoDatePicker({
    format: "dd MMM yyyy",
    value: new Date(),
    min: new Date()
  });

  // Kendo Radial Gauge
  $("#radialGauge").kendoRadialGauge({
    pointer: {
      value: 76 // You can change this dynamically later
    },
    scale: {
      minorUnit: 5,
      startAngle: -30,
      endAngle: 210,
      max: 100
    }
  });


});