var button = document.getElementById('button');

button.addEventListener('click', function(e){
    e.preventDefault()

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    var body = 'name: ' +name + '<br/> email: ' + email +  '<br/> subject: ' + subject
            + '<br/> message' + message ;
    // eslint-disable-next-line no-undef
    Email.send({
        Host : "smtp.gmail.com",
        Username : "abdoassal85@gmail.com",
        Password : "whtlzohrjdcoqalf",
        To : 'abdoassal85@gmail.com',
        From : email,
        Subject : "New message from my website",
        Body : body
    }).then(
      message => $("#row").show(100,function(){$("#row").hide(5500)}),
      document.getElementById('row').innerHTML= "message sent succesfully"
    );
    
});
