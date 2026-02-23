// 10-Minute Countdown Timer
let countdownTime = 10 * 60; // 10 minutes in seconds
const countdownDisplay = document.getElementById('countdown');

function updateCountdown() {
    const minutes = Math.floor(countdownTime / 60);
    const seconds = countdownTime % 60;
    countdownDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    if (countdownTime > 0) {
        countdownTime--;
    } else {
        clearInterval(countdownInterval);
        // Optional: trigger some action when countdown is finished
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);

// Drag-and-Drop File Upload Handler for JPG and PNG Files
const dropZone = document.getElementById('drop-zone');
dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
});
dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    for (let file of files) {
        if (file.type === 'image/jpeg' || file.type === 'image/png') {
            handleFileUpload(file);
        }
    }
});

function handleFileUpload(file) {
    // Handle file upload (e.g., display image, process it, etc.)
    console.log('File uploaded:', file.name);
}

// Three.js 3D Viewer Initialization
let scene, camera, renderer;
function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    // Add 360-degree controls, models, etc.
}

// Dynamic Progress Bar Updates
const progressBar = document.getElementById('progress-bar');
function updateProgress(status) {
    progressBar.style.width = status.percentage + '%';
    progressBar.textContent = status.message;
}

// File Download System for GLB and OBJ Formats
function downloadFile(fileFormat) {
    // Implement file download logic here for GLB and OBJ
    console.log('Downloading file in format:', fileFormat);
}

// Micro-interactions and hover effects
const interactiveElements = document.querySelectorAll('.interactive');
interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.classList.add('hovered');
    });
    element.addEventListener('mouseleave', () => {
        element.classList.remove('hovered');
    });
});

// Call init to set up Three.js
init();