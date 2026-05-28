function showPage(id) {

  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });

  document.getElementById('page-' + id).classList.add('active');
}

function doSignin() {

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if(!username || !password){

    const btn = document.getElementById('signinBtn');

    btn.innerText = "ENTER CREDENTIALS";

    setTimeout(() => {
      btn.innerText = "INITIATE SECURE LOGIN";
    },2000);

    return;
  }

  const btn = document.getElementById('signinBtn');

  btn.innerText = "ACCESS GRANTED ✓";

  setTimeout(() => {
    showPage('feed');
  },1000);
}

document.getElementById('password').addEventListener('keydown', function(e){

  if(e.key === 'Enter'){
    doSignin();
  }

});
