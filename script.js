function showSpeedTestInfo(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = 'block';
}

function closeSpeedTestInfo(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = 'none';
}

// Optional: Close the modal if the user clicks outside of it
window.onclick = function(event) {
  if (event.target.className === 'modal') {
    event.target.style.display = 'none';
  }
}
