// === VIDEO SLIDESHOW ===
const videoPlayer = document.getElementById("video-player");
const videoSources = ["videos/vid1.mp4", "videos/vid2.mp4", "videos/vid3.mp4"];
let videoIndex = 0;

function playNextVideo() {
    videoPlayer.src = videoSources[videoIndex];
    videoPlayer.play();
    videoIndex = (videoIndex + 1) % videoSources.length;
}

if (videoPlayer) {
    videoPlayer.addEventListener("ended", playNextVideo);
    playNextVideo();
}

// === REVIEWS ROTATION ===
const reviewText = document.getElementById("review-text");
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

if (reviewText) {
    setInterval(showNextReview, 3000);
    showNextReview();
}

// === CATEGORY PAGE ===
const params = new URLSearchParams(window.location.search);
const categoryType = params.get("type");

const subcategories = [
    { name: "Playgroup / Nursery", folder: "playgroupnursery" },
    { name: "Jr KG / Sr KG", folder: "jrkg_srkg" },
    { name: "1st / 2nd", folder: "1st2nd" },
    { name: "3rd / 4th", folder: "3rd4th" },
    { name: "5th / 6th", folder: "5th6th" },
    { name: "7th / 8th", folder: "7th8th" },
    { name: "9th / 10th", folder: "9th10th" }
];

const grid = document.getElementById("subcategory-grid");

if (grid) {
    subcategories.forEach(sub => {
        const box = document.createElement("a");
        box.href = `gallery.html?category=${categoryType}&subcategory=${sub.folder}`;
        box.className = "subcategory-card squareBox";
        box.textContent = sub.name;
        grid.appendChild(box);
    });
}

// === GALLERY PAGE ===
const galleryGrid = document.getElementById("gallery-grid");
const galleryTitle = document.getElementById("gallery-title");

const category = params.get("category");
const subcategory = params.get("subcategory");

if (galleryGrid && subcategory) {
    galleryTitle.textContent = `${category.toUpperCase()} — ${subcategory.toUpperCase()}`;

    // Load 20 images automatically
    for (let i = 1; i <= 20; i++) {
        const imgPath = `images/${category}/${subcategory}/${i}.jpg`;

        const container = document.createElement("div");
        container.className = "gallery-item";

        const img = document.createElement("img");
        img.src = imgPath;
        img.className = "nineSixteen";

        container.appendChild(img);
        galleryGrid.appendChild(container);
    }
}



