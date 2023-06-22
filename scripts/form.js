const form = document.getElementById('messageForm');
form.addEventListener('submit', sendMessage);

function sendMessage(event){
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const select = document.getElementById('selectProduct').value;
    const message = document.getElementById('message').value;

    const url = `https://api.whatsapp.com/send?phone=${543513721017}&text=Hola,%20me%20llamo%20${name}.%0AMi%20Email%20es:%20${email}.%0ATipo%20de%20producto%20que%20busco:%20${select}%0AMensaje:%0A%0A${message}%0A%0AMensaje enviado desde el sitio web.`;

    // Open WhatsApp in a new tab with the pre-filled message
    window.open(url, '_blank');
}