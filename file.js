/* =========================
   ALPINE TECHNIQUES MODAL
========================= */

const alpineTechniqueModal =
    document.getElementById("alpineTechniqueModal");

const alpineTechniqueModalImage =
    document.getElementById("alpineTechniqueModalImage");

const alpineTechniqueModalTitle =
    document.getElementById("alpineTechniqueModalTitle");

const alpineTechniqueModalDescription =
    document.getElementById("alpineTechniqueModalDescription");


function openAlpineTechniqueModal(title, image, description) {

    alpineTechniqueModalTitle.textContent = title;

    alpineTechniqueModalImage.src = image;

    alpineTechniqueModalImage.alt = title;

    alpineTechniqueModalDescription.textContent = description;

    alpineTechniqueModal.classList.add("active");

    document.body.style.overflow = "hidden";
}


function closeAlpineTechniqueModal() {

    alpineTechniqueModal.classList.remove("active");

    document.body.style.overflow = "auto";
}


/* Close by clicking outside */

alpineTechniqueModal.addEventListener("click", function(event) {

    if (event.target === alpineTechniqueModal) {

        closeAlpineTechniqueModal();

    }

});


/* Close with ESC */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeAlpineTechniqueModal();

    }

});


/* =========================
   3D CARD HOVER
========================= */

const alpineTechniqueCards =
    document.querySelectorAll(".alpine-technique-card");


alpineTechniqueCards.forEach(card => {

    card.addEventListener("mousemove", function(event) {

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;

        const y = event.clientY - rect.top;

        const rotateX =
            ((y / rect.height) - 0.5) * -3;

        const rotateY =
            ((x / rect.width) - 0.5) * 3;

        card.style.transform =
            `translateY(-10px)
             perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)`;

    });


    card.addEventListener("mouseleave", function() {

        card.style.transform =
            "translateY(0) perspective(900px) rotateX(0) rotateY(0)";

    });

});

const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const subjectError = document.getElementById("subjectError");
        const messageError = document.getElementById("messageError");
        const successMessage = document.getElementById("successMessage");

        nameError.textContent = "";
        emailError.textContent = "";
        subjectError.textContent = "";
        messageError.textContent = "";

        successMessage.style.display = "none";

        let valid = true;

        if (name === "") {
            nameError.textContent = "Please enter your name.";
            valid = false;
        } else if (name.length < 3) {
            nameError.textContent =
                "Name must contain at least 3 characters.";
            valid = false;
        }

        const emailPattern =
            /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (email === "") {
            emailError.textContent = "Please enter your email.";
            valid = false;
        } else if (!emailPattern.test(email)) {
            emailError.textContent =
                "Please enter a valid email address.";
            valid = false;
        }

        if (subject === "") {
            subjectError.textContent =
                "Please enter a subject.";
            valid = false;
        } else if (subject.length < 3) {
            subjectError.textContent =
                "Subject must contain at least 3 characters.";
            valid = false;
        }

        if (message === "") {
            messageError.textContent =
                "Please enter your message.";
            valid = false;
        } else if (message.length < 10) {
            messageError.textContent =
                "Message must contain at least 10 characters.";
            valid = false;
        }

        if (valid) {
            successMessage.style.display = "block";
            form.reset();
        }

    });

}
const navbar = document.querySelector(".my-custom-nav");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


    function showMessage(name) {

        alert("You selected: " + name);

    }

const orgclubDetails = {
    uiaa: {
        title: "UIAA",
        location: "International Climbing and Mountaineering Federation",
        description:
            "The UIAA is an international federation that promotes climbing and mountaineering. It works to improve safety, support responsible mountain activities, and encourage protection of mountain environments.",
        activities: [
            "Climbing and mountaineering promotion",
            "Mountain safety and risk awareness",
            "Environmental protection",
            "International cooperation"
        ],
        website: "https://theuiaa.org/"
    },

    acp: {
        title: "Alpine Club of Pakistan",
        location: "Pakistan",
        description:
            "The Alpine Club of Pakistan is associated with the development of mountaineering, trekking and climbing in Pakistan. It supports mountaineering education and the country's mountain adventure community.",
        activities: [
            "Mountaineering and trekking",
            "Climbing education and training",
            "High-altitude expeditions",
            "Mountain awareness"
        ],
        website: "https://alpineclubpakistan.org/"
    },

    nma: {
        title: "Nepal Mountaineering Association",
        location: "Nepal",
        description:
            "The Nepal Mountaineering Association is involved in promoting mountaineering and mountain tourism in Nepal. It supports climbing-related education and responsible mountain activities.",
        activities: [
            "Mountaineering promotion",
            "Climbing education",
            "Mountain tourism",
            "Responsible mountain practices"
        ],
        website: "https://www.nepalmountaineering.org/"
    },

    rescue: {
        title: "Mountain Rescue and Safety",
        location: "Mountain safety information",
        description:
            "Mountain rescue teams and safety organizations help people prepare for emergencies in challenging mountain environments. This card introduces the importance of rescue awareness, first aid and safe climbing.",
        activities: [
            "Mountain emergency preparedness",
            "First-aid awareness",
            "Rescue and evacuation education",
            "Climbing safety"
        ],
        website: "https://www.theuiaa.org/"
    }
};

function orgclubOpenDetails(key) {
    const details = orgclubDetails[key];
    const modal = document.getElementById("orgclubModal");

    if (!details || !modal) return;

    document.getElementById("orgclubModalTitle").textContent =
        details.title;

    document.getElementById("orgclubModalLocation").textContent =
        details.location;

    document.getElementById("orgclubModalDescription").textContent =
        details.description;

    const activities = document.getElementById("orgclubModalActivities");
    activities.replaceChildren();

    details.activities.forEach(function (activity) {
        const item = document.createElement("li");
        item.textContent = activity;
        activities.appendChild(item);
    });

    document.getElementById("orgclubVisitLink").href = details.website;

    modal.classList.add("orgclub-modal-active");
    modal.setAttribute("aria-hidden", "false");
}

function orgclubCloseDetails() {
    const modal = document.getElementById("orgclubModal");

    modal.classList.remove("orgclub-modal-active");
    modal.setAttribute("aria-hidden", "true");
}

// Close when clicking the dark background
document.getElementById("orgclubModal").addEventListener("click", function (event) {
    if (event.target === this) {
        orgclubCloseDetails();
    }
});

// Close using Escape key
document.addEventListener("keydown", function (event) {
    if (
        event.key === "Escape" &&
        document.getElementById("orgclubModal")
            .classList.contains("orgclub-modal-active")
    ) {
        orgclubCloseDetails();
    }
});
// =========================
// VISITOR COUNT
// =========================

document.addEventListener("DOMContentLoaded", function () {

    const visitorElement = document.getElementById("visitorCount");

    if (!visitorElement) return;

    let count = sessionStorage.getItem("session_views");

    if (count) {
        count = Number(count) + 1;
    } else {
        count = 1;
    }

    sessionStorage.setItem("session_views", count);

    visitorElement.textContent = count;

});

/* ==============================
   MOUNTAINEERING TYPE POPUP JS
============================== */

const typePopupDetails = {
    alpine: {
        title: "Alpine Mountaineering",
        paragraphs: [
            "Alpine mountaineering involves climbing mountains using a combination of walking, scrambling, rock climbing and snow or ice techniques.",
            "Climbers must understand route planning, weather conditions, equipment use and mountain safety before starting their journey.",
            "Proper training, suitable clothing and teamwork help climbers manage the challenges of high-altitude environments."
        ]
    },

    rock: {
        title: "Rock Mountaineering",
        paragraphs: [
            "Rock mountaineering involves ascending rocky mountain faces using handholds, footholds and climbing equipment.",
            "Climbers may use ropes, harnesses, helmets and protective gear to reduce risks while moving over steep terrain.",
            "Good balance, strength, climbing technique and careful route selection are important for a safer climb."
        ]
    },

    ice: {
        title: "Ice Mountaineering",
        paragraphs: [
            "Ice mountaineering involves travelling and climbing on frozen surfaces, icy slopes and snow-covered mountain routes.",
            "Specialized equipment such as crampons, ice axes, helmets and suitable ropes can help climbers move across icy terrain.",
            "Understanding ice conditions, avalanche risks and self-arrest techniques is essential for mountain safety."
        ]
    }
};

function openTypePopup(type, button) {
    const details = typePopupDetails[type];
    const popup = document.getElementById("typePopup");

    if (!details || !popup) return;

    document.getElementById("typePopupTitle").textContent =
        details.title;

    document.getElementById("typePopupPara1").textContent =
        details.paragraphs[0];

    document.getElementById("typePopupPara2").textContent =
        details.paragraphs[1];

    document.getElementById("typePopupPara3").textContent =
        details.paragraphs[2];

    // Card ki existing image popup mein dikhayein
    const card = button.closest(".type-card");
    const cardImage = card
        ? card.querySelector(".type-image img")
        : null;

    const popupImage = document.getElementById("typePopupImg");

    if (cardImage) {
        popupImage.src = cardImage.src;
        popupImage.alt = details.title;
    }

    popup.classList.add("type-popup-active");
    document.body.style.overflow = "hidden";
}

function closeTypePopup() {
    const popup = document.getElementById("typePopup");

    if (!popup) return;

    popup.classList.remove("type-popup-active");
    document.body.style.overflow = "";
}

// Popup ke bahar click karne se close ho
document.getElementById("typePopup").addEventListener("click", function (event) {
    if (event.target === this) {
        closeTypePopup();
    }
});

// Escape key se close ho
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeTypePopup();
    }
});
/* ==================================
   HISTORY 3D CARD CONTENT
================================== */

const history3DData = {
    "history-1": {
        title: "The Beginning of Mountaineering",
        image: "myimg/early.jfif",
        description:
            "Mountaineering developed from early journeys into high mountain regions. Over time, exploration became a recognized activity that required physical endurance, navigation skills, suitable equipment, and careful preparation. These early journeys helped shape modern climbing and mountain exploration."
    },

    "history-2": {
        title: "The Golden Age of Exploration",
        image: "myimg/goldenone.jpg",
        description:
            "During the nineteenth century, explorers and climbers began attempting many major Alpine peaks. Better maps, improved equipment, and growing interest in scientific exploration helped mountaineering develop into a more organized activity. These achievements inspired future generations of climbers."
    },

    "history-3": {
        title: "Everest and Historic Achievements",
        image: "myimg/himalianhistory.jpg",
        description:
            "The Himalayas became a major focus of international mountaineering expeditions. Climbers faced extreme altitude, severe cold, changing weather, and difficult terrain. Success depended on teamwork, acclimatization, route planning, and the knowledge of experienced local mountain workers."
    },

    "history-4": {
        title: "Modern Mountaineering",
        image: "myimg/modertype.jpg",
        description:
            "On 29 May 1953, Edmund Hillary and Tenzing Norgay reached the summit of Mount Everest. Their achievement became one of the most famous milestones in mountaineering history. It highlighted the importance of teamwork, preparation, determination, and the contributions of Sherpa climbers."
    },

    "history-5": {
        title: "K2 Achivements",
        image: "myimg/k2one.jpeg",
        description:
            "Modern mountaineering combines traditional mountain skills with improved equipment, weather forecasting, communication, and rescue systems. Climbers now pursue a wide range of challenges, from technical rock routes to high-altitude peaks. Responsible climbing also emphasizes environmental protection and respect for local communities."
    }
};


/* OPEN THE SELECTED CARD */

function openHistory3D(cardId) {
    const data = history3DData[cardId];

    if (!data) {
        console.error("History card not found:", cardId);
        return;
    }

    document.getElementById("history3dTitle").textContent =
        data.title;

    document.getElementById("history3dBackTitle").textContent =
        data.title;

    document.getElementById("history3dDescription").textContent =
        data.description;

    document.getElementById("history3dImage").src =
        data.image;

    document.getElementById("history3dImage").alt =
        data.title;

    document.getElementById("history3dCard")
        .classList.remove("history3d-flipped");

    document.getElementById("history3dOverlay")
        .classList.add("history3d-active");

    document.body.style.overflow = "hidden";
}


/* FLIP THE CARD */

function flipHistory3D() {
    document.getElementById("history3dCard")
        .classList.toggle("history3d-flipped");
}


/* CLOSE THE CARD */

function closeHistory3D() {
    document.getElementById("history3dOverlay")
        .classList.remove("history3d-active");

    document.getElementById("history3dCard")
        .classList.remove("history3d-flipped");

    document.body.style.overflow = "";
}


/* CLOSE WHEN CLICKING OUTSIDE THE CARD */

document.getElementById("history3dOverlay")
    .addEventListener("click", function (event) {
        if (event.target === this) {
            closeHistory3D();
        }
    });


/* CLOSE WITH ESCAPE KEY */

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeHistory3D();
    }
});

// ===== OUR MOUNTAINS POPUP =====

const ourMountainDetails = {
    everest: {
        title: "Mount Everest",
        image: "myimg/Climbers-side-Nepali-Mount-Everest.webp",
        description:
            "Mount Everest is the highest mountain in the world, reaching 8,848.86 metres above sea level. Located in the Himalayas on the Nepal-China border, it attracts climbers from around the world. Climbing Everest requires physical endurance, careful planning, technical skills and preparation for extreme weather conditions."
    },

    k2: {
        title: "K2",
        image: "myimg/k2.jpg",
        description:
            "K2 is the world's second-highest mountain at 8,611 metres. It lies in the Karakoram Range on the Pakistan-China border. Famous for its steep slopes, unpredictable weather and technical climbing challenges, K2 is considered one of the most difficult mountains to climb."
    },

    nanga: {
        title: "Nanga Parbat",
        image: "myimg/nanga-parbat.jpg",
        description:
            "Nanga Parbat stands at 8,126 metres in Pakistan's western Himalayas. Known as the Killer Mountain because of its historically dangerous climbing conditions, it features dramatic ridges and immense mountain faces. Climbers must prepare for avalanches, severe weather and the challenges of high altitude."
    }
};

function openOurMountainPopup(mountain) {
    const details = ourMountainDetails[mountain];

    if (!details) return;

    document.getElementById("ourMountainTitle").textContent =
        details.title;

    document.getElementById("ourMountainImage").src =
        details.image;

    document.getElementById("ourMountainImage").alt =
        details.title;

    document.getElementById("ourMountainDescription").textContent =
        details.description;

    document.getElementById("ourMountainPopup").classList.add("active");

    document.body.style.overflow = "hidden";
}

function closeOurMountainPopup() {
    document.getElementById("ourMountainPopup").classList.remove("active");
    document.body.style.overflow = "";
}

document.getElementById("ourMountainPopup").addEventListener(
    "click",
    function (event) {
        if (event.target === this) {
            closeOurMountainPopup();
        }
    }
);

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeOurMountainPopup();
    }
});
