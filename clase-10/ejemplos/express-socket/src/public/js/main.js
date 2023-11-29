// Una vez que hemos importado socket.io desde nuestro script de lado del cliente, podemos probar utilizándolo en nuestro archivo index.js.
// En este archivo index.js es donde tendremos el socket/cliente para conectar con socket/servidor

const socketClient = io();
//Enviando información desde el cliente hacia el servidor con “emit”
//   Ahora, el servidor ya está escuchando por un evento con ID “message”, pero no hemos enseñado a nuestro cliente a comunicarse con el servidor.
// Para enviar un mensaje desde el cliente hacia el servidor (o desde el servidor al cliente, recuerda que es bidireccional), utilizamos la palabra emit, el cual debe contar con el ID del mensaje a enviar, seguido del contenido de dicho mensaje.
// Los IDs deben coincidir para que el mensaje llegue correctamente
// Finalmente, en nuestro cliente en index.js escribiremos nuestro primer emit:
socketClient.emit("message", "Mensaje desde el cliente");


////escucho el mensaje del sever 1
socketClient.on("server_message", (data) => {
  console.log(data);
});
//escucho el mensaje del sever 2
socketClient.on("message_all", (data) => {
  console.log(data);
});
//escucho el mensaje del sever 3
socketClient.on("message_all_2", (data) => {
  console.log(data);
});
