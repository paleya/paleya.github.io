fetch("/header.html")
    .then(response => response.text())
    .then(html => {
        document.getElementById("header-placeholder").innerHTML = html;
        const prefix = window.location.pathname.includes("/projects/") ? "../" : "";

        document.querySelectorAll(".masthead a").forEach(link => {
            link.href = prefix + link.getAttribute("href");
        });

        // Highlight curr page
        const currentPage = window.location.pathname.split("/").pop() || "index.html";

        document.querySelectorAll(".nav-links a").forEach(link => {
            if (link.getAttribute("href").split("/").pop() === currentPage) {
                link.classList.add("active");
                link.setAttribute("aria-current", "page");
            }
        });
    });