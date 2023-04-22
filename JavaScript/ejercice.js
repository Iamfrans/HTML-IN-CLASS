const evento = new Date('April 22, 2023 23:15:30');
evento.setDate(24);
console.log(evento.getDate());
//Expected output: 24 
evento.setDate(32);
console.log(evento.getDate());  