
function updateSectionDisplay(activeClassName) {
  document.querySelectorAll('.box-content').forEach(section => {
      section.style.display = 'none';
  });

  const activeSection = document.querySelector(`.${activeClassName}`);
  if (activeSection) {
      activeSection.style.display = 'flex';
  }
}
document.querySelectorAll('.sidebar .menu li').forEach(item => {
  item.addEventListener('click', function() {
      document.querySelectorAll('.sidebar .menu li').forEach(li => li.classList.remove('active'));
      this.classList.add('active');

      const activeClassName = this.querySelector('p').textContent.trim();
      updateSectionDisplay(activeClassName);
  });
});

document.querySelectorAll('.sidebar-mobile .menu li').forEach(item => {
  item.addEventListener('click', function() {
      document.querySelectorAll('.sidebar-mobile .menu li').forEach(li => li.classList.remove('active'));
      this.classList.add('active');

      // Get the corresponding section class from the menu item's text
      const activeClassName = this.querySelector('p').textContent.trim();
      updateSectionDisplay(activeClassName);
  });
});

updateSectionDisplay('Home');

document.addEventListener("DOMContentLoaded", function() {
  // Get the form element
  const commentForm = document.querySelector(".comments-form");

  // Add an event listener for the form submission
  commentForm.addEventListener("submit", function(event) {
      // Prevent the form from actually submitting
      event.preventDefault();

      // Display a notification
      alert("This section will be fully updated later.");

      // Optionally, clear the form inputs (if needed)
      commentForm.reset();
  });
});
