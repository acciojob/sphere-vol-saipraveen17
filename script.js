function volume_sphere() {
    //Write your code her
	const vol = document.getElementById('volume');
	const radius = document.getElementById('radius').value;
	vol.value = ((4/3)*(22/7))*(Math.pow(radius, 3));
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
