const formRegister = document.querySelector(`form`);

formRegister.addEventListener(`submit`, event => {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

if (email === "" || password === "") {
    return console.log('All form fields must be filled in');
  }

  console.log(`Email: ${email}, Password: ${password}`);
  form.reset();

})