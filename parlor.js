 // 1. Pages Switching Function (Single File Navigation)
    function showPage(pageId, element) {
      const sections = document.querySelectorAll('.page-section');
      sections.forEach(section => section.classList.remove('active'));

      document.getElementById(pageId).classList.add('active');

      const navButtons = document.querySelectorAll('.nav-btn');
      navButtons.forEach(btn => btn.classList.remove('active'));
      
      if(element) {
        element.classList.add('active');
      }

      window.scrollTo(0, 0);
    }

    // 2. Alert for Main "Book Appointment Now" Button on Hero Section
    function heroBookAppointment() {
      alert("✨ Welcome to ashie's beauty parlor!\n\nredirecting to bookig. please fill details.");
      const bookingNavBtn = document.querySelectorAll('.nav-btn')[3];
      showPage('booking-page', bookingNavBtn);
    }

    // 3. Alert for "Book Now" Button on Services Cards
    function bookServiceAlert(serviceName) {
      alert(`🌸 Great Choice!\n\nselected "${serviceName}" redirecting to booking page...`);
      
      const bookingNavBtn = document.querySelectorAll('.nav-btn')[3];
      showPage('booking-page', bookingNavBtn);

      // Automatically select the service in the dropdown form
      document.getElementById('service').value = serviceName;
    }

    // 4. Alert for "Confirm Booking" Button (Form Submit)
    function handleConfirmBooking(event) {
      event.preventDefault(); // Page reload rokne ke liye

      const name = document.getElementById('name').value;
      const service = document.getElementById('service').value;
      const date = document.getElementById('date').value;

      // Final Successful Alert Message
      alert(`✅ BOOKING SUCCESSFUL!\n\n${name}!\nyour booking for "${service}" on ${date} is confirmed.\n\nwe will call you soon. Thank you for choosing ashie's beauty parlor! ✨`);

      // Clear the form after booking
      document.getElementById('appointmentForm').reset();
    }