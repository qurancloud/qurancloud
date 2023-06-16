function handleClick(username) {
    // Redirect to the second HTML page with the username as a query parameter
    window.location.href = 'profile.html?username=' + encodeURIComponent(username);
  }
 
 // Fetch the external JSON file
 fetch('https://raw.githubusercontent.com/qurancloud/qurancloud/65f73491b6a8079771b3481499eeb5f6c8c98c64/webs/data.json')
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
