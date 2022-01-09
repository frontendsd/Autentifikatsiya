$(document).ready(function () {
        $(".input-field").focusout(function () { 
            const inputValue = $(this).val();
            if(inputValue === "") {
                $(this).removeClass('has-value');
            } else {
                $(this).addClass('has-value');
            }
        });
       $("form").submit(function (e) { 
           e.preventDefault();
           let login = $("#login-field").val();
           let password = $("#password-field").val();
    
           if(localStorage.getItem('login') && localStorage.getItem('password')) {
                if(localStorage.getItem('login') === login && localStorage.getItem('password') === password) {
                    alert("Tizimga xush kelibsiz");
                } else {
                    alert("Login yoki parol xato");
                }
            } else {
                localStorage.setItem('login', $("#login-field").val());
                localStorage.setItem('password', $("#password-field").val());
                alert("Siz ro'yxatdan o'tdingiz");
            }
            $("#login-field").val("");
            $("#password-field").val("");
            $(".input-field").removeClass("has-value");
       });
    });