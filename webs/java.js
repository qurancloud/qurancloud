function handleClick(username) {
    // Redirect to the second HTML page with the username as a query parameter
    window.location.href = 'profile.html?username=' + encodeURIComponent(username);
  }
 
 // Fetch the external JSON file
 fetch('https://firebasestorage.googleapis.com/v0/b/myweb-a5314.appspot.com/o/qurancloud%2Fdata.json?alt=media&token=ace48711-bc68-4921-94c2-79f24606eb35')
 .then((response) => response.json())
 .then((data) => {
   const tableBody = document.querySelector('#jsonTable tbody');

   // Iterate over each object in the JSON data
   Object.entries(data).forEach(([key, value]) => {
     // Create a new row for each object
     const row = tableBody.insertRow();

     // Extract the values from the JSON data
     const { username, profileName, profileImage } = value;

     // Insert cells with the extracted values into the row
    //  row.insertCell().textContent = username;
     row.insertCell().textContent = profileName;
    

     // Create an image element and set the source to the profileImage URL
     const imageCell = row.insertCell();
     const image = document.createElement('img');
     image.src = profileImage;

     row.addEventListener('click', () => handleClick(username));


     imageCell.appendChild(image);
   });
 });
