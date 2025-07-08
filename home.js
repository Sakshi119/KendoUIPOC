$(document).ready(function () {
    // Hero Button
    $("#heroBtn").kendoButton({
        themeColor: "primary"
    });

    // child Button
    $("#childBtn").kendoButton({
        themeColor: "secondary"
    });

    // Email Input
    $("#emailInput").kendoTextBox({
        placeholder: "Enter your email...",
        width: "300px"
    });

    // Subscribe Button
    $("#subscribeBtn").kendoButton({
        themeColor: "primary",
        icon: "check",
        click: function () {
            const email = $("#emailInput").val();
            if (email) {
                alert("Subscribed with: " + email);
            } else {
                alert("Please enter your email.");
            }
        }
    });


    // Rich Chart
    $("#featureChart").kendoChart({
        title: { text: "Weekly Visitors" },
        legend: { visible: false },
        series: [{
            name: "Visitors",
            type: "line",
            data: [100, 250, 300, 500, 700, 650, 800],
            color: "#3f51b5"
        }],
        categoryAxis: {
            categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            majorGridLines: { visible: false }
        },
        valueAxis: {
            labels: { format: "{0}" },
            line: { visible: false }
        }
    });

    // Data Grid
    $("#featureGrid").kendoGrid({
        dataSource: {
            data: [
                { id: 1, name: "Alice", age: 24 },
                { id: 2, name: "Bob", age: 30 },
                { id: 3, name: "Charlie", age: 28 }
            ],
            pageSize: 2
        },
        pageable: true,
        columns: [
            { field: "name", title: "Name" },
            { field: "age", title: "Age" }
        ]
    });


    // Calendar (DatePicker)
    $("#featureDate").kendoDatePicker({
        format: "dd MMM yyyy",
        value: new Date()
    });

    // Form Field
    $("#featureName").kendoTextBox({
        placeholder: "Enter your name"
    });

    // Submit Button
    $("#formSubmitBtn").kendoButton({
        icon: "check",
        themeColor: "primary",
        click: function () {
            const name = $("#featureName").val();
            const date = $("#featureDate").val();
            if (name && date) {
                alert(`Hello ${name}, you selected ${date}`);
            } else {
                alert("Please fill all fields.");
            }
        }
    });

    //dark light mode
    $("#themeToggle").on("click", function () {
        const isDark = $("body").attr("data-theme") === "dark";
        $("body").attr("data-theme", isDark ? "light" : "dark");
        $(this).text(isDark ? "🌙" : "☀️");
    });

    //smooth scroll animation
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            scrollTop: $target.offset().top - 60 // Adjust for sticky nav height
        }, 600, 'swing');
    });
    $(window).on("scroll", function () {
        var scrollPos = $(document).scrollTop();

        $(".main-nav a").each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));

            if (
                refElement.position().top - 80 <= scrollPos &&
                refElement.position().top + refElement.height() > scrollPos
            ) {
                $(".main-nav a").removeClass("active");
                currLink.addClass("active");
            }
        });
    });

    //Action Button
    $(".actionBtn").kendoButton({
        themeColor: "primary",
    });


    //navbar
    const $hamMenu = $('.ham-menu');
    const $navList = $('.navLinks');

    $hamMenu.on('click', function () {
        $hamMenu.toggleClass('active');
        $navList.toggleClass('active');

        if ($navList.hasClass('active')) {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overflow', 'auto');
        }
    });

});