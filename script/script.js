console.log('hello world')

let isBlack = false;

let changeBackgroundBlack = () => {

  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
  const navLinks = document.querySelectorAll('header nav ul li a');
  navLinks.forEach(link => {
    link.style.color = 'white';
  });

  document.getElementById('black-btn').innerHTML='OH NO! GO BACK!!'
  isBlack = true;
  }

const changeBack = () => {
  document.body.style.backgroundColor = "";
  document.body.style.color = "";
  const navLinks = document.querySelectorAll('header nav ul li a');
  navLinks.forEach(link => {
    link.style.color = '';
  });
  document.getElementById('black-btn').innerHTML='Change Background Black'
  isBlack = false;
}

const switchBackground = () => {
  if (isBlack) {
    changeBack();
  } else {
    changeBackgroundBlack()
  }
}

let blackButton = document.getElementById('black-btn');
blackButton.addEventListener('click', switchBackground)