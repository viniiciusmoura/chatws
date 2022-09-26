const express = require("express")
const app = express()
app.use(express.static("public"))


const http = require("http").Server(app)
const PORT = process.env.PORT || 8000

                  //FUNÇÃO DE CALLBACK
http.listen(PORT, () => console.log(`Servidor iniciado na porta ${PORT}`))

app.get("/",(_, response) => response.sendFile(`${__dirname}/index.html`))

const serverSocket = require("socket.io")(http)
serverSocket.on("connect", socket =>{
    console.log(`Cliente ${socket.id} conectou`)
    socket.on("chat msg",msg =>serverSocket.emit("chat msg",`${socket.username}: ${msg}`))

    socket.on("login",username=>{
    socket.username=username
    serverSocket.emit("chat msg",msg)
    })

})


