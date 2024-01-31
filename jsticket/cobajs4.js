  // Retrieve selected ticket data from localStorage
  var selectedTicket = JSON.parse(localStorage.getItem('selectedTicket'));

  // Display ticket information on the checkout page
  document.getElementById('title').value = selectedTicket.title;
  document.getElementById('description').value = selectedTicket.description;
  document.getElementById('image').value = selectedTicket.image;
  document.getElementById('status').value = selectedTicket.status;