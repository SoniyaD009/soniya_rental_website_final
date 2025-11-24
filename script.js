/* ================================
   VIDEO SLIDESHOW
================================ */
const videoPlayer = document.getElementById("video-player");

if (videoPlayer) {
    const videoSources = [
        "videos/vid1.mp4",
        "videos/vid2.mp4",
        "videos/vid3.mp4"
    ];

    let videoIndex = 0;

    function playNextVideo() {
        videoPlayer.src = videoSources[videoIndex];
        videoPlayer.play();
        videoIndex = (videoIndex + 1) % videoSources.length;
    }

    videoPlayer.addEventListener("ended", playNextVideo);
    playNextVideo();
}

/* ================================
   ROTATING REVIEWS
================================ */
const reviewText = document.getElementById("review-text");

if (reviewText) {
    const reviews = [
        "Exceptional dresses and service!",
        "Loved the variety of designs!",
        "Affordable and high quality!",
        "Highly recommend Soniya Rental Dresses!"
    ];

    let reviewIndex = 0;

    function showNextReview() {
        reviewText.textContent = reviews[reviewIndex];
        reviewIndex = (reviewIndex + 1) % reviews.length;
    }

    setInterval(showNextReview, 3000);
    showNextReview();
}

/* ================================
   SUBCATEGORIES (CATEGORY PAGE)
================================ */
const params = new URLSearchParams(window.location.search);
const categoryType = params.get("type");
const subcategoryGrid = document.getElementById("subcategory-grid");

if (subcategoryGrid) {
    const subcategories = [
        { name: "Playgroup / Nursery", folder: "PlaygroupNursery" },
        { name: "Jr KG / Sr KG", folder: "JrKgSrKg" },
        { name: "1st / 2nd", folder: "1st2nd" },
        { name: "3rd / 4th", folder: "3rd4th" },
        { name: "5th / 6th", folder: "5th6th" },
        { name: "7th / 8th", folder: "7th8th" },
        { name: "9th / 10th", folder: "9th10th" }
    ];

    subcategories.forEach(sub => {
        const box = document.createElement("a");
        box.href = `gallery.html?category=${categoryType}&subcategory=${sub.folder}`;
        box.className = "squareBox";
        box.textContent = sub.name;
        subcategoryGrid.appendChild(box);
    });
}

/* ================================
   GALLERY (gallery.html)
================================ */
const galleryGrid = document.getElementById("gallery-grid");

if (galleryGrid) {
    const category = params.get("category");
    const subcategory = params.get("subcategory");

    const basePath = `catalogs/${category}/${subcategory}/`;

    for (let i = 1; i <= 300; i++) {
        const img = new Image();
        img.src = `${basePath}${i}.jpg`;
        img.className = "nineSixteen";

        img.onload = () => {
            const box = document.createElement("div");
            box.className = "gallery-item";
            box.appendChild(img);
            box.onclick = () => window.open(img.src);
            galleryGrid.appendChild(box);
        };
    }
}

