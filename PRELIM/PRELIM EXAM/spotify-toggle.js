document.addEventListener('DOMContentLoaded', () => {
  const spotifyContainer = document.getElementById('spotifyContainer');
  const spotifyToggle = document.getElementById('spotifyToggle');
  const spotifyIcon = spotifyToggle.querySelector('i');

  spotifyToggle.addEventListener('click', () => {
    const minimized = spotifyContainer.classList.toggle('minimized');
    spotifyIcon.classList.toggle('bi-dash-lg', !minimized);
    spotifyIcon.classList.toggle('bi-fullscreen', minimized);
    spotifyToggle.setAttribute('aria-label', minimized ? 'Restore Spotify' : 'Minimize Spotify');
  });
});
