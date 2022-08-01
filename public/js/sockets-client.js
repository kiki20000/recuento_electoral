
//Referencias del html
const lblOnline = document.querySelector('#lblOnline'); 
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje1 = document.querySelector('#txtMensaje1');
const txtMensaje2 = document.querySelector('#txtMensaje2'); 
const txtMensaje3 = document.querySelector('#txtMensaje3'); 
const txtMensaje4 = document.querySelector('#txtMensaje4'); 
const txtMensaje5 = document.querySelector('#txtMensaje5'); 
const txtMensaje6 = document.querySelector('#txtMensaje6'); 
const txtMensaje7 = document.querySelector('#txtMensaje7');  
const btnEnviar = document.querySelector('#btnEnviar');


const socket = io();


socket.on('connect', () => {
    console.log('Conectado al servidor');

    lblOffline.style.display = 'none';
    lblOnline.style.display = '';


});

socket.on('disconnect', () => {
    console.log('Desconectado al servidor');
    lblOffline.style.display = '';
    lblOnline.style.display = 'none';
});

socket.on('enviar-mensaje', (mensaje) => {
    console.log(mensaje);
});

btnEnviar.addEventListener('click', () => {
    
    const mensaje1 = txtMensaje1.value;
    const mensaje2 = txtMensaje2.value;
    const mensaje3 = txtMensaje3.value;
    const mensaje4 = txtMensaje4.value;
    const mensaje5 = txtMensaje5.value;
    const mensaje6 = txtMensaje6.value;
    const mensaje7 = txtMensaje7.value;

    const payload = {
        mensaje1,
        mensaje2,
        mensaje3,
        mensaje4,
        mensaje5,
        mensaje6,
        mensaje7,
        id: socket.id,
        fecha: new Date().toLocaleString()
    };
    //txtMensaje.value = '';
    //console.log(mensaje);
    socket.emit('enviar-mensaje', payload);
});





