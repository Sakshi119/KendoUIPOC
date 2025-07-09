// ✅ Cleaned Up JS (Fixed Duplicates + Syntax Issues)
$(document).ready(function () {
    // ------------------- Buttons -------------------
    $(".hero-button, #roSubmit, #formSubmitBtn, .actionBtn").kendoButton({ themeColor: "primary" });
    $("#childBtn").kendoButton({ themeColor: "secondary" });

    // ------------------- Email Input -------------------
    $("#emailInput").kendoTextBox({ placeholder: "Enter your email...", width: "300px" });
    if ($("#emailInputError").length === 0) {
        $(".subscribe-input").after('<span id="emailInputError" class="error" style="color:#d32f2f;display:none;font-size:13px;"></span>');
    }

    // ------------------- Section Search -------------------
    // Dummy JSON data
    const dummyData = [
        { title: "Dashboard UI" },
        { title: "Charts & Graphs" },
        { title: "User Settings" },
        { title: "Subscription Panel" },
        { title: "Notifications" },
        { title: "Analytics Overview" },
        { title: "FAQ Support" },
        { title: "Kendo Components" }
    ];

    // Convert to array of strings
    const dummyTitles = dummyData.map(item => item.title);

    // Init Kendo TextBox
    $("#sectionSearch").kendoTextBox({
        placeholder: "Search from dummy data..."
    });

    // Init Kendo AutoComplete using dummy data
    $("#sectionSearch").kendoAutoComplete({
        dataSource: dummyTitles,
        filter: "contains",
        minLength: 1,
        highlightFirst: true,
        separator: ", ",
        placeholder: "Search from dummy data...",
        select: function (e) {
            const value = this.dataItem(e.item.index());
            if (value) {
                alert("You selected: " + value); // replace with console.log or toast
            }
        }
    });


    // ------------------- Charts -------------------
    // Column Chart
    $("#columnChart").kendoChart({
        title: {
            text: "Monthly Visitors"
        },
        legend: {
            visible: false
        },
        series: [{
            name: "Visitors",
            data: [120, 90, 150, 180, 200, 170],
            type: "column"
        }],
        categoryAxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
        }
    });

    // Pie Chart
    $("#pieChart").kendoChart({
        title: {
            text: "Traffic Sources"
        },
        legend: {
            position: "bottom"
        },
        series: [{
            type: "pie",
            data: [
                { category: "Organic", value: 45 },
                { category: "Referral", value: 25 },
                { category: "Social", value: 20 },
                { category: "Email", value: 10 }
            ]
        }]
    });

    //------------------- line chart -------------------
    $("#lineChart").kendoChart({
        title: {
            text: "User Growth"
        },
        series: [{
            name: "Users",
            data: [50, 70, 90, 110, 130, 160],
            type: "line"
        }],
        categoryAxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
        }
    });

    // ------------------- table -------------------
    const sampleData = [
        { ID: 1, Name: "Alice", Age: 28, Role: "Developer", Joined: new Date(2021, 3, 10) },
        { ID: 2, Name: "Bob", Age: 35, Role: "Designer", Joined: new Date(2020, 10, 22) },
        { ID: 3, Name: "Charlie", Age: 42, Role: "Manager", Joined: new Date(2019, 6, 15) },
        { ID: 4, Name: "Dana", Age: 25, Role: "Intern", Joined: new Date(2023, 1, 5) },
        { ID: 5, Name: "Evan", Age: 30, Role: "QA", Joined: new Date(2022, 8, 1) }
    ];

    $("#kendoGridDemo").kendoGrid({
        dataSource: {
            data: sampleData,
            schema: {
                model: {
                    id: "ID",
                    fields: {
                        ID: { editable: false, nullable: true },
                        Name: { validation: { required: true } },
                        Age: { type: "number", validation: { min: 18, required: true } },
                        Role: { type: "string" },
                        Joined: { type: "date" }
                    }
                }
            },
            pageSize: 5
        },
        height: 400,
        sortable: true,
        filterable: true,
        editable: "inline",
        pageable: {
            refresh: true,
            pageSizes: true,
            buttonCount: 5
        },
        resizable: true,
        reorderable: true,
        columnMenu: true,
        toolbar: ["create"],
        columns: [
            { field: "ID", title: "ID", width: "60px" },
            { field: "Name", title: "Name" },
            { field: "Age", title: "Age", width: "80px" },
            { field: "Role", title: "Role" },
            { field: "Joined", title: "Joined On", format: "{0:MM/dd/yyyy}" },
            { command: ["edit", "destroy"], title: "Actions", width: "200px" }
        ]
    });


    // ------------------- Subscribe -------------------
    $("#subscribeBtn").kendoButton({
        themeColor: "primary",
        icon: "check",
        click: function () {
            const email = $("#emailInput").val();
            const $error = $("#emailInputError");
            const emailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

            if (!email) {
                $error.text("Please enter your email.").show();
            } else if (!emailValid) {
                $error.text("Please enter a valid email address.").show();
            } else {
                $error.hide();
                $("#emailInput").val("").data("kendoTextBox").value("");
            }
        }
    });
    $("#emailInput").on("input", function () { $("#emailInputError").hide(); });

    // ------------------- Tabs & Accordion -------------------
    $("#mainTabs").kendoTabStrip({ animation: { open: { effects: "fadeIn" } } });
    $("#faqAccordion").kendoPanelBar({ expandMode: "single" });

    // ------------------- Chart -------------------
    $("#featureChart").kendoChart({
        title: { text: "Weekly Visitors" },
        legend: { visible: false },
        series: [{ name: "Visitors", type: "line", data: [100, 250, 300, 500, 700, 650, 800], color: "#3f51b5" }],
        categoryAxis: { categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], majorGridLines: { visible: false } },
        valueAxis: { labels: { format: "{0}" }, line: { visible: false } }
    });

    // ------------------- Grid -------------------
    $("#featureGrid").kendoGrid({
        dataSource: {
            data: [
                { id: 1, name: "Alice", age: 24 },
                { id: 2, name: "Bob", age: 30 },
                { id: 3, name: "Charlie", age: 28 }
            ], pageSize: 2
        },
        pageable: true,
        columns: [
            { field: "name", title: "Name" },
            { field: "age", title: "Age" }
        ]
    });

    // ------------------- Form -------------------
    $("#featureDate").kendoDatePicker({ format: "dd MMM yyyy", value: new Date(), min: new Date() });
    $("#featureName").kendoTextBox({ placeholder: "Enter your name" });

    $("#formSubmitBtn").kendoButton({
        icon: "check",
        themeColor: "primary",
        click: function () {
            const name = $("#featureName").val();
            const date = $("#featureDate").val();
            if (name && date) alert(`Hello ${name}, you selected ${date}`);
            else alert("Please fill all fields.");
        }
    });

    // ------------------- Theme Toggle -------------------
    $("#themeToggle").on("click", function () {
        const isDark = $("body").attr("data-theme") === "dark";
        $("body").attr("data-theme", isDark ? "light" : "dark");
        $(this).text(isDark ? "🌙" : "☀️");

    });

    // ------------------- Smooth Scroll & Scroll Spy -------------------
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        const $target = $(this.hash);
        $('html, body').animate({ scrollTop: $target.offset().top - 60 }, 600);
    });

    $(window).on("scroll", function () {
        const scrollPos = $(document).scrollTop();
        $(".main-nav a").each(function () {
            const currLink = $(this);
            const refElement = $(currLink.attr("href"));
            if (refElement.position().top - 80 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $(".main-nav a").removeClass("active");
                currLink.addClass("active");
            }
        });
    });

    // ------------------- Hamburger Menu -------------------
    const $hamMenu = $('.ham-menu');
    const $navList = $('.navLinks');
    $hamMenu.on('click', function () {
        $hamMenu.toggleClass('active');
        $navList.toggleClass('active');
        $('body').css('overflow', $navList.hasClass('active') ? 'hidden' : 'auto');
    });

    // ------------------- Sliders -------------------
    $("#scrollView").kendoScrollView({ enablePager: true, contentHeight: "100%" });
    $("#cardSwiper").kendoScrollView({ contentHeight: "auto", enablePager: false });


    // ------------------- cards Sliders -------------------
    const swiper = new Swiper('.cards-swiper', {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        breakpoints: {
            360: {
                slidesPerView: 1.2
            },
            576: {
                slidesPerView: 1.5
            },
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            }
        }
    });



    $(window).resize(function () {
        location.reload();
    });



    // ------------------- Reach Out Form -------------------
    $("#roName").kendoTextBox();
    $("#roEmail").kendoTextBox({ placeholder: "Enter your email" });
    $("#roMobile").kendoMaskedTextBox({ mask: "00000-00000", placeholder: "Enter mobile number" });
    $("#roBirthdate").kendoDatePicker({ format: "dd MMM yyyy", min: new Date() });

    const validator = $("#reachoutForm").kendoValidator({
        rules: {
            email: input => input.is("[name='email']") ? /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input.val()) : true,
            mobile: input => input.is("[name='mobile']") ? /^\d{5}-\d{5}$/.test(input.val()) : true
        },
        messages: {
            required: "This field is required",
            email: "Please enter a valid email address",
            mobile: "Enter a valid 10-digit mobile number (e.g. 98765-43210)"
        }
    }).data("kendoValidator");

    $("#reachoutForm").on("submit", function (e) {
        e.preventDefault();
        if (validator.validate()) {
            const name = $("#roName").val();
            const email = $("#roEmail").val();
            const mobile = $("#roMobile").val();
            const birthdate = $("#roBirthdate").val();
            const gender = $("input[name='gender']:checked").val();
            alert(`Thank you, ${name}!\nEmail: ${email}\nMobile: ${mobile}\nBirthdate: ${birthdate}\nGender: ${gender}`);
            this.reset();
            $("#roName").data("kendoTextBox").value("");
            $("#roEmail").data("kendoTextBox").value("");
            $("#roMobile").data("kendoMaskedTextBox").value("");
            $("#roBirthdate").data("kendoDatePicker").value(null);
            $("input[name='gender'][value='Male']").prop("checked", true);
        }
    });
});