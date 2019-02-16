function validaForm(fm) {
    if ((fm.email.value !== null && fm.email.value.indexOf("@") !== -1 && fm.senha.value !== "")) {
        // console.log(fm.email.value.indexOf("@") !== -1 && fm.senha.value !== "");
        // alert("Glória a Deus! É isso!");
        setTimeout(function () {
            window.location.href = "http://www.keyrus.com.br/";
        }, 0000);

    } else
        //O campo e-mail precisa de conter: "@", "." e senha, não podem estar vazios
        if (fm.email.value.indexOf("@") === -1 ||
            fm.email.valueOf.indexOf(".") === -1 ||
            fm.email.value === "" ||
            fm.senha.value === "") {
                if(fm.senha.value === "") {
                    fm.senha.focus();
                }
            console.log(fm.senha.value === "");
            // alert("Por favor, indique um e-mail válido.");
            var msg = document.getElementById("msgErro");
            msg.className = "show";
            setTimeout(function () { msg.className = msg.className.replace("show", ""); }, 4000);

            fm.email.focus();
        }
        
    return false;

}

