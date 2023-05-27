const form = document.getElementById('messageForm');
form.addEventListener('submit', sendMessage);

function sendMessage(event){
    event.preventDefault();

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const url = `https://api.whatsapp.com/send?phone=${543513721017}&text=Nombre:%20${name}%0AApellido:%20${surname}%0AEmail:%20${email}%0AMensaje:%20${message}%0AMensaje enviado desde el sitio web.`;

    // Open WhatsApp in a new tab with the pre-filled message
    window.open(url, '_blank');
}