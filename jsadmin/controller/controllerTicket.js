const getTokenFromCookies = (cookieName) => {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const [name, value] = cookie.trim().split('=');
      if (name === cookieName) {
        return value;
      }
    }
    return null;
  };
  
  const getAllTicket = async () => {
    const token = getTokenFromCookies('user_token');
  
    if (!token) {
      Swal.fire({
        icon: 'warning',
        title: 'Authentication Error',
        text: 'You are not logged in.',
      }).then(() => {
        window.location.href = 'https://wegotour.my.id/loginadmin.html'; 
      });
      return;
    }
  
    const targetURL = 'https://asia-southeast2-wegotour-403712.cloudfunctions.net/getallticket';
  
    const myHeaders = new Headers();
    myHeaders.append('user_token', token);
  
    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };
  
    try {
      const response = await fetch(targetURL, requestOptions);
      const data = await response.json();
  
      if (data.status === 200) {
        displayTicketData(data.data, 'TicketDataBody');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: data.message,
        });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  // Add other functions here
  
  // Initial fetch of all tickets
  getAllTicket();