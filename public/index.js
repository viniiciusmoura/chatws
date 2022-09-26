$(() => {
    const socket = io()
    let login
    $("#form1").on("submit",() => {
        $("#label1").html("Digite uma mensagem")
        if(login){
            socket.emit("chat msg", $("#msg").val())
        }else {
            socket.emit("login", $("#msg").val())
            login = $("#msg").val()
        }
        return false;
    })

    socket.on("chat msg",msg=>$("#messagens").append($("<li>").text(msg)))
})