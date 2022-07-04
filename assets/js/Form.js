function formul() {
    var inputs = document.getElementsByTagName("input");
    var message = document.getElementById("message");
    var button = document.getElementsByClassName('btn btn-primary');
    const arobaze = /[@]/g;
    const miniscule = /[a-z]/g;
    const minuscule = /a-z||A-Z/g;
    const nameMail = /gmail|outlook|msn|yahoo|icloud|aol|live/g;
    const num = /[1-9]/g;
    const Ndomaine = /.fr|.com|.org/g;
    const point = /[.]/g;
    var verifmail = false;
    var verifnom = false;
    var veriftel = false;
    var verifmessage = false;
    var verifall = false;
    var mail = inputs[0];
    var nom = inputs[1];
    var tel = inputs[2];
    var mess = message[0];

    // VERIF MAIL COMPLET

    if (mail.value.match(miniscule)) //l'adresse doit comporter des miniscule
    {
        if (mail.value.match(arobaze)) //l'adresse doit comporter un @
        {
            if (mail.value.match(minuscule)) //l'adresse doit comporter des Nmail
            {
                if (mail.value.match(Ndomaine)) {
                    console.log(mail.value);
                    verifmailail = true;
                } else {
                }
            } else {
            }
        } else {
        }
    } else {
        verifMail = false;
        console.log("mail non");
    }

    // VERIF SI NOM EST COMPLETER
    if (nom.value == "") {
        console.log("nom non");
    } else {
        console.log(nom.value);
        verifnom = true;
    }

    //VERIF SI TEL COMPLET
    if (tel.value == "") {
        console.log("tel non");
    } else {
        console.log(tel.value);
        veriftel = true;
    }

    // VERIF SI LE MESSAGE EST COMPLET
    if (message.value == "") //le message doit comporter des miniscule
    {
        console.log("message non");
    } else {
        console.log(message.value);
        verifmessage = true;

    }

    if (verifmail == true && verifnom == true && veriftel == true && verifmessage == true)
    {
        verifall = true;
    }

    if (verifall == true )
    {
        var form= "email="+mail.value+"&nom="+nom.value+"&tel="+tel.value+"&message="+message.value; //On envoi les donnée des input au php

        $.ajax({
            url: "./assets/js/traitement.php",
            dataType : "JSON",
            data :  form,
            method: "GET",
            success:function() {
                console.log("tout est carrer");

            }


        });

    }
}




