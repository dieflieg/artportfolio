function openModal(imageSrc) {
    var modal = document.getElementById('myModal');
    var modalImage = document.getElementById('modalImage');

    // Show the modal
    modal.style.display = 'block';

    // Set the image source
    modalImage.src = imageSrc;

    // Add a click event listener to the modal overlay
    modal.addEventListener('click', function (event) {
      // Check if the click is outside the modal content
      if (event.target === modal) {
        closeModal();
      }
    });
  }

  function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }