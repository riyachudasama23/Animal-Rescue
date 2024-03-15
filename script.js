// function scrollToSection(sectionId) {
//   const targetElement = document.getElementById(sectionId);
//   window.scrollTo({
//     top: targetElement.offsetTop , // Adjust offset as needed
//     behavior: 'smooth'
//   });
// }

function scrollToSection(sectionId) {
    const targetElement = document.querySelector(sectionId).innerHTML;
    window.scrollTo({
      top: targetElement.offsetTop - 50 , // Adjust offset as needed
      behavior: 'smooth'
    });
  }