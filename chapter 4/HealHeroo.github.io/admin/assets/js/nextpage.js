// Handle Next Button Click
const handleNextButtonClick = () => {
    const selectRole = document.getElementById("af-submit-app-category");
    const selectedRole = selectRole.value;
  
    if (selectedRole === "Pengguna") {
      window.location.href = "signuppengguna.html";
    } else if (selectedRole === "Driver") {
      window.location.href = "signupdriver.html";
    }
  };