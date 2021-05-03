document.getElementById('body').style.backgroundColor = '#fae1dd'
document.getElementById('para').innerHTML = 'Enter your text below!'
document.getElementById('reporter').addEventListener('click', reportResults)

function reportResults () {
  alert(document.getElementById('input').value)
}
