const cadastro = document.getElementById('cadastro')

cadastro.addEventListener('submit',(o) => {
o.preventDefault();
alert('Cadastro Concluído!')
let nome = document.getElementById('Nome').value;
let email = document.getElementById('Email').value;
let data = {
    nome,
    email,
}
let convertData = JSON.stringify(data);

localStorage.setItem('lead', convertData)
})