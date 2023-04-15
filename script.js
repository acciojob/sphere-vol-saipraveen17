function volume_sphere(event) {
  event.preventDefault(); // prevent form submission behavior
  const radius = document.getElementById("radius").value;
  const volume = (4/3) * Math.PI * Math.pow(radius, 3);
  document.getElementById("volume").value = volume.toFixed(4);
} 

window.onload = function() {
  const form = document.getElementById('MyForm');
  form.addEventListener('submit', volume_sphere);
}
