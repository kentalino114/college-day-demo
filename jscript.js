// Select all video elements with the class 'card-video'
const videos = document.querySelectorAll('.card-video');

// Loop through each video element and add a click event listener
videos.forEach(video => {
    video.addEventListener('click', (event) => {
        // Prevent the default video controls from interfering
        event.stopPropagation();

        // Check if the video is currently expanded
        if (video.classList.contains('large-video')) {
            // If it's expanded, pause the video, shrink it, and change to the small size
            video.pause();
            video.classList.remove('large-video');
            video.classList.add('small-video');
        } else {
            // If it's not expanded, expand it to large size
            video.classList.remove('small-video');
            video.classList.add('large-video');
        }
    });
});