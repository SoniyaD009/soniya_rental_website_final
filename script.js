// === Video Playlist ===
const videoPlayer = document.getElementById("video-player");
const videoSources = ["videos/vid1.mp4", "videos/vid2.mp4", "videos/vid3.mp4"];
let videoIndex = 0;

function playNextVideo() {
  videoPlayer.src = videoSources[videoIndex];
  videoPlayer.play();
  videoIndex = (videoIndex + 1) % videoSources.length;
}

// Play next video when current ends
videoPlayer.addEventListener("ended", playNextVideo);

// Start first video
playNextVideo();

// === Rotating Reviews ===
const reviewText = document.getElementById("review-text");
const reviews = [
  "Exceptional dresses and service!",
  "Loved the variety of designs!",
  "Affordable and high quality!",
  "Highly recommend Soniya Rental Dresses!",
];

let reviewIndex = 0;

function showNextReview() {
  reviewText.textContent = reviews[reviewIndex];
  reviewIndex = (reviewIndex + 1) % reviews.length;
}

setInterval(showNextReview, 3000);
showNextReview();

// === Preload Gallery Images ===
function preloadImages(imageArray) {
  imageArray.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}

// Example gallery images (update with your real images)
const galleryImages = [
  "images/gallery/img1.jpg",
  "images/gallery/img2.jpg",
  "images/gallery/img3.jpg",
  "images/gallery/img4.jpg",
  // 👉 Add all your gallery images here
];

// Preload when homepage loads
window.addEventListener("load", () => {
  preloadImages(galleryImages);
});
const subcategories = [
  { name: "Playgroup/Nursery", folder: "playgroup-nursery" },
  { name: "Jr KG / Sr KG", folder: "jrkg-srkg" },
  { name: "1st / 2nd", folder: "1st2nd" },
  { name: "3rd / 4th", folder: "3rd4th" },
  { name: "5th / 6th", folder: "5th6th" },
  { name: "7th / 8th", folder: "7th8th" },
  { name: "9th / 10th", folder: "9th10th" },
];

const grid = document.getElementById("subcategory-grid");

subcategories.forEach((sub) => {
  const link = document.createElement("a");
  link.href = `gallery.html?category=${categoryType}&subcategory=${sub.folder}`;
  link.className = "subcategory-card";
  link.textContent = sub.name;
  grid.appendChild(link);
});




