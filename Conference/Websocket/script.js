const url = "wss://echo.websocKet.org"; // В урле нужно вместо https - ws/wss

let socket = new WebSocket(url); // Создаем новый экземпляр класса Websocket, в который запихиваем наш урл

// Добавляем слушателя открытия (open) сокета при отправке данных (с помошью метода .send())
/* socket.addEventListener("open", () => {
  console.log("Соединение установлено.");
  socket.send("Привет");
}); */

// Добавляем слушателя отправки сообщения (message)
/* socket.addEventListener("message", (e) => {
  console.log("Данные получены.", e.data);
  socket.close();
}); */

// Добавляем слушателя ошибки (error)
socket.addEventListener("error", (e) => console.log("Ошибка сервера.", e.data));

// Добавляем слушателя на случай закрытия связи с сервером (close)
/* socket.addEventListener("close", (e) =>
  console.log("Соединение закрыто.", "Пока")
); */

// Обработаем всё это через промис

/* let p = new Promise((res, rej) => {
  socket.addEventListener("open", () => {
    console.log("Второе соединение");
    res();
  });
})
  .then(() => {
    return new Promise((res) => {
      socket.send("Жопа");
      socket.addEventListener("message", (e) => {
        console.log(e.data);
        res();
      });
    });
  })
  .then(() => {
    socket.close();
    console.log("Соединение закрыто");
  }); */

// На асинк авэйтах

async function recycleData() {
  if (socket.readyState === 1) {
    await socket.send("Hi");
    await console.log("Three");
    await socket.close();
    await console.log("Closed");
  } else {
    setTimeout(() => recycleData(), 1000);
  }
}

recycleData()