/*NAVBAR */
    function showSideBar(){
        const sideBar = document.querySelector('.sidebar');
        sideBar.style.display = 'flex';
    }

    function hideSideBar(){
        const sideBar = document.querySelector('.sidebar');
        sideBar.style.display = 'none';
    }

    const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', event => {
      // Remove 'active' class from all buttons
      buttons.forEach(btn => btn.classList.remove('active'));
      // Add 'active' class to the clicked button
      button.classList.add('active');
    });
});



/* ACTIVE BUTTON*/
const buttonsPort = document.querySelectorAll('.hideOnMobile');
    buttonsPort.forEach(button => {
        button.addEventListener('click', event => {
        // Remove 'active' class from all buttons
        buttonsPort.forEach(btn => btn.classList.remove('active'));
        // Add 'active' class to the clicked button
        button.classList.add('active');
        });
    });

const btnMobile = document.querySelectorAll('.mobile-anim');
btnMobile.forEach(button => {
        button.addEventListener('click', event => {
        // Remove 'active' class from all buttons
        btnMobile.forEach(btn => btn.classList.remove('active'));
        // Add 'active' class to the clicked button
        button.classList.add('active');
        });
    });



const btnNav = document.querySelectorAll('.btnNav');
btnNav.forEach(button => {
    button.addEventListener('click', event => {
      // Remove 'active' class from all buttons
      btnNav.forEach(btn => btn.classList.remove('activeNav'));
      // Add 'active' class to the clicked button
      button.classList.add('activeNav');
    });
});


/*Software skills, languages and skills*/
let isRevealed = false;

function toggleContent(){
    const content = document.getElementById('contentSkills');
    if (isRevealed) {
      // Hide content
      content.classList.remove('showSkills');
      content.classList.add('contentSkills');
      isRevealed = false;
      } else {
          // Show content on top
          content.classList.remove('contentSkills');
          content.classList.add('showSkills');
          isRevealed = true;
      }
  }

/*EDUCATION*/
function toggleContentEdu(){
  const content = document.getElementById('content-edu');
  if (isRevealed) {
    // Hide content
    content.classList.remove('showEdu');
    content.classList.add('content-edu');
    isRevealed = false;
    } else {
        // Show content on top
        content.classList.remove('content-edu');
        content.classList.add('showEdu');
        isRevealed = true;
    }
}

/*WHAT CAN I DO*/
function toggleContentWhatCanIdo(){
  const content = document.getElementById('content-do');
  if (isRevealed) {
    // Hide content
    content.classList.remove('showDo');
    content.classList.add('content-do');
    isRevealed = false;
    } else {
        // Show content on top
        content.classList.remove('content-do');
        content.classList.add('showDo');
        isRevealed = true;
    }
}

if (navigator.language.startsWith("fr")) {
    window.location.href = "index_fr.html"; // Redirect French users
}


