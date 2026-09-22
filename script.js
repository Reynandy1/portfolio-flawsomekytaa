/* =========================================================
   INFORMATION SYSTEMS PORTFOLIO
   JAVASCRIPT
========================================================= */

/* =========================================================
   LOADING SCREEN
========================================================= */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (!loader) return;

    setTimeout(() => {
        loader.classList.add("hide");
    }, 700);
});


/* =========================================================
   HEADER SCROLL
========================================================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle =
    document.getElementById("menuToggle");

const navbar =
    document.getElementById("navbar");

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });

}


/* Close mobile menu when clicking link */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        if (navbar) {
            navbar.classList.remove("active");
        }

    });

});


/* =========================================================
   THEME TOGGLE
========================================================= */

const themeToggle =
    document.getElementById("themeToggle");

const mobileThemeToggle =
    document.getElementById("mobileThemeToggle");

const savedTheme =
    localStorage.getItem("portfolio-theme");


if (savedTheme === "light") {
    document.body.classList.add("light-mode");
}


function updateThemeIcon() {

    const isLight =
        document.body.classList.contains("light-mode");

    const icon =
        isLight
            ? "fa-moon"
            : "fa-sun";


    if (themeToggle) {

        themeToggle.innerHTML =
            `<i class="fa-solid ${icon}"></i>`;

    }


    if (mobileThemeToggle) {

        mobileThemeToggle.innerHTML =
            `<i class="fa-solid ${icon}"></i>`;

    }

}


function toggleTheme() {

    document.body.classList.toggle("light-mode");

    const isLight =
        document.body.classList.contains("light-mode");


    localStorage.setItem(
        "portfolio-theme",
        isLight ? "light" : "dark"
    );


    updateThemeIcon();

}


if (themeToggle) {

    themeToggle.addEventListener(
        "click",
        toggleTheme
    );

}


if (mobileThemeToggle) {

    mobileThemeToggle.addEventListener(
        "click",
        toggleTheme
    );

}


updateThemeIcon();


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {
    revealObserver.observe(element);
});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll("section[id]");


const navLinks =
    document.querySelectorAll(".nav-link");


function updateActiveNav() {

    let currentSection = "";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 160;

        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNav
);


/* =========================================================
   PROJECT FILTER
========================================================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");


const projectCards =
    document.querySelectorAll(".project-card");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });


        button.classList.add("active");


        const filter =
            button.dataset.filter;


        projectCards.forEach(card => {

            const category =
                card.dataset.category;


            if (
                filter === "all" ||
                category === filter
            ) {

                card.classList.remove("hidden");

            } else {

                card.classList.add("hidden");

            }

        });

    });

});


/* =========================================================
   PROJECT MODAL
========================================================= */

const modal =
    document.getElementById("projectModal");


const modalClose =
    document.getElementById("modalClose");


const modalTitle =
    document.getElementById("modalTitle");


const modalDescription =
    document.getElementById("modalDescription");


const projectData = {

    academic: {

        number: "PROJECT 01",

        title:
            "Information System for Academic Administration",

        description:
            "Sebuah sistem informasi yang dirancang untuk membantu proses administrasi akademik, pengelolaan data mahasiswa, dan penyampaian informasi perkuliahan secara lebih terstruktur."

    },


    sales: {

        number: "PROJECT 02",

        title:
            "Sales Performance Dashboard",

        description:
            "Dashboard analitik yang digunakan untuk memvisualisasikan performa penjualan, mengidentifikasi tren, dan membantu proses pengambilan keputusan berdasarkan data."

    },


    mobile: {

        number: "PROJECT 03",

        title:
            "Mobile App UI/UX for Health & Lifestyle",

        description:
            "Konsep aplikasi mobile yang berfokus pada pengalaman pengguna, mulai dari user flow, wireframe, visual interface, hingga prototype interaktif."

    },


    business: {

        number: "PROJECT 04",

        title:
            "Business Process Improvement",

        description:
            "Analisis proses bisnis untuk mengidentifikasi permasalahan, memetakan alur kerja, dan merancang usulan sistem yang lebih efektif."

    }

};


const modalNumber =
    document.querySelector(".modal-number");


document.querySelectorAll(".project-card")
.forEach(card => {

    card.addEventListener("click", () => {

        const project =
            card.dataset.project;


        const data =
            projectData[project];


        if (!data) return;


        if (modalNumber) {
            modalNumber.textContent =
                data.number;
        }


        if (modalTitle) {
            modalTitle.textContent =
                data.title;
        }


        if (modalDescription) {
            modalDescription.textContent =
                data.description;
        }


        if (modal) {

            modal.classList.add("active");

            document.body.classList.add(
                "modal-open"
            );

        }

    });

});


function closeModal() {

    if (!modal) return;


    modal.classList.remove("active");

    document.body.classList.remove(
        "modal-open"
    );

}


if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeModal
    );

}


const modalOverlay =
    document.querySelector(".modal-overlay");


if (modalOverlay) {

    modalOverlay.addEventListener(
        "click",
        closeModal
    );

}


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            modal &&
            modal.classList.contains("active")
        ) {

            closeModal();

        }

    }
);


/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm =
    document.getElementById("contactForm");


const toast =
    document.getElementById("toast");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const name =
                document.getElementById(
                    "name"
                ).value.trim();


            const email =
                document.getElementById(
                    "email"
                ).value.trim();


            const message =
                document.getElementById(
                    "message"
                ).value.trim();


            if (
                !name ||
                !email ||
                !message
            ) {

                return;

            }


            /*
                Untuk sekarang form hanya
                menampilkan notifikasi.

                Nanti bisa kita sambungkan
                ke Formspree, EmailJS,
                WhatsApp, atau backend sendiri.
            */


            if (toast) {

                toast.classList.add("show");

            }


            contactForm.reset();


            setTimeout(() => {

                if (toast) {

                    toast.classList.remove(
                        "show"
                    );

                }

            }, 3500);

        }
    );

}


/* =========================================================
   MAGNETIC BUTTON EFFECT
========================================================= */

const magneticButtons =
    document.querySelectorAll(
        ".btn-primary"
    );


magneticButtons.forEach(button => {

    button.addEventListener(
        "mousemove",
        event => {

            const rect =
                button.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left -
                rect.width / 2;


            const y =
                event.clientY -
                rect.top -
                rect.height / 2;


            button.style.transform =
                `translate(${x * 0.08}px,
                           ${y * 0.08}px)`;

        }
    );


    button.addEventListener(
        "mouseleave",
        () => {

            button.style.transform =
                "";

        }
    );

});


/* =========================================================
   YEAR
========================================================= */

const currentYear =
    new Date().getFullYear();


const footerText =
    document.querySelector(".footer p");


if (footerText) {

    footerText.textContent =
        `© ${currentYear} Your Name. All rights reserved.`;

}


/* =========================================================
   PREVENT HASH JUMP
========================================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(anchor => {

    anchor.addEventListener(
        "click",
        function(event) {

            const targetId =
                this.getAttribute("href");


            if (
                targetId === "#" ||
                !targetId
            ) {

                return;

            }


            const target =
                document.querySelector(
                    targetId
                );


            if (!target) {

                return;

            }


            event.preventDefault();


            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }
    );

});