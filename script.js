function downloadResume() {
  const link = document.createElement("a");
  link.href = "./assets/moin resume website.pdf";
  link.download = "Moin_Chhipa_Resume.pdf";
  link.click();
}

function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}
