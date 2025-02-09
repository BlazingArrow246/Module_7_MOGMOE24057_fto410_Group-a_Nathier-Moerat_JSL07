document.addEventListener('DOMContentLoaded', function () {
    const cardForm = document.getElementById('cardForm');
    const modal = document.getElementById('modal');
    const certificateContent = document.getElementById('certificateContent');
    const closeModal = document.querySelector('.close');
  });
    // Hide the modal initially
    modal.style.display = 'none';
  
    cardForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      // 🚨 Get input values
      const studentNameInput = document.getElementById('studentName');
      const personalMessageInput = document.getElementById('personalMessage');
      const courseNameInput = document.getElementById('courseName');
  
      const studentName = studentNameInput.value;
      const personalMessage = personalMessageInput.value;
      const courseName = courseNameInput ? courseNameInput.value : "a course"; // Fallback to "a course" if no input
  
      if (studentName.trim() === '' || personalMessage.trim() === '') {
        alert('Please fill in all fields');
        return;
      }
  
      // 🚨 Generate certificate content dynamically
      certificateContent.innerHTML = `
      <h2><strong>Certificate of Achievement</strong></h2>
      <p>This is to certify that</p>
      <p><strong>${studentName}</strong></p>
      <p>Has almost completed the</p>
      <p><strong>${courseName} course</strong></p>
      <p>with legendary perseverance and world-class bad-assery for never giving up🏆</p>
      <div class="certificate-footer">
          <img src="logo.png" alt="Certificate Logo" style="width: 100px; margin-top: 20px;">
      </div>
      <p><strong>${personalMessage}</strong></p>
  `;
    
       //Display the modal//
      modal.style.display = 'block';
  
      // Clear the form inputs
      studentNameInput.value = '';
      personalMessageInput.value = '';
      if(courseNameInput) courseNameInput.value = '';
    });
  
    //  Close the modal when the close button is clicked
    const closeModal = document.querySelector('.close');
closeModal.addEventListener('click', function () {
  document.getElementById('modal').style.display = 'none';
});
    
    
  