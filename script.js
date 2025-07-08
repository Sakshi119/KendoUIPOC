$(document).ready(function () {

  // Kendo Button
  $("#myButton").kendoButton({
    themeColor: "primary",
    click: function () {
      alert("Kendo Button Clicked!");
    }
  });

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
  $("#datePicker").kendoDatePicker({
    format: "dd MMM yyyy",
    value: new Date()
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