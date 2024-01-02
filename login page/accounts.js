      
        document.addEventListener('DOMContentLoaded', function () {
            var dropdownButton = document.querySelector('.dropdown .nav-item');
            var dropdownContainer = document.querySelector('.dropdown');
    
            dropdownButton.addEventListener('click', function (event) {
                event.stopPropagation(); // Prevent the window click event from firing immediately
                dropdownContainer.classList.toggle('active');
            });
    
            // Close the dropdown when clicking outside of it
            window.addEventListener('click', function () {
                dropdownContainer.classList.remove('active');
            });
        });
    
        document.addEventListener('DOMContentLoaded', function () {
      var dropdownButton = document.querySelector('.dropdowns .nav-item');
      var dropdownContainer = document.querySelector('.dropdowns');
    
      dropdownButton.addEventListener('click', function () {
        dropdownContainer.classList.toggle('active');
      });
    
      // Close the dropdown when clicking outside of it
      window.addEventListener('click', function (event) {
        if (!dropdownContainer.contains(event.target)) {
          dropdownContainer.classList.remove('active');
        }
      });
    });