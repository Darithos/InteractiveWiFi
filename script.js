body, html {
  height: 100%;
  margin: 0;
  font-family: Arial, sans-serif;
}

.floorplan {
  position: relative;
  width: 100%;
  max-width: 900px; /* Adjust as needed */
  margin: auto;
}

.floorplan-img {
  width: 100%;
  height: auto;
}

.wifi-spot {
  background-image: url('wifi-icon.png'); /* Add your Wi-Fi icon image path here */
  background-size: cover;
  position: absolute;
  width: 32px; /* Adjust size as needed */
  height: 32px; /* Adjust size as needed */
  cursor: pointer;
  /* Use top and left to position the icon over the floorplan */
}

.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  padding-top: 50px;
}

.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
  border-radius: 15px; /* Rounded corners */
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
