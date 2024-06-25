const scriptURL = 'https://script.google.com/macros/s/AKfycby1btYH6qx-eKm9BRqFJUrJFylndZTgBHpihfXZAVpIvA3BvbEI5k4QoJ4uVxRjyVn1-g/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => {
    alert("Thank you! your form is submitted successfully.")
    window.location.reload()
  })
  .catch(error => console.error('Error!', error.message))
})