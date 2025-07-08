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
    const sectionNames = ["Home", "Features", "Product", "Subscribe", "Reach Out"];
    const sectionIds = [
        { name: "Home", id: "hero" },
        { name: "Features", id: "features" },
        { name: "Product", id: "product" },
        { name: "Subscribe", id: "subscribe" },
        { name: "Reach Out", id: "reachout" }
    ];

    $("#sectionSearch").kendoTextBox({ placeholder: "Search sections..." });
    $("#sectionSearch").kendoAutoComplete({
        dataSource: sectionNames,
        filter: "startswith",
        highlightFirst: true,
        select: function (e) {
            const value = this.dataItem(e.item.index());
            const match = sectionIds.find(s => s.name === value);
            if (match) {
                $("html, body").animate({ scrollTop: $("#" + match.id).offset().top - 60 }, 400);
            }
        }
    });

    $("#sectionSearch").on("input", function () {
        const val = $(this).val().toLowerCase();
        let anyVisible = false;
        sectionIds.forEach(sec => {
            const $sec = $("#" + sec.id);
            if (!val || sec.name.toLowerCase().includes(val)) {
                $sec.show();
                anyVisible = true;
            } else {
                $sec.hide();
            }
        });
        if (!anyVisible && $("#noSectionMsg").length === 0) {
            $("<div id='noSectionMsg' style='text-align:center;color:#d32f2f;font-size:18px;margin:40px;'>No matching section found.</div>").insertAfter(".search-bar-wrapper,.main-nav");
        } else {
            $("#noSectionMsg").remove();
        }
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