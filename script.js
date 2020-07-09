function myFunction() {
    var x = document.getElementById("top-nav");
    if (x.className === "dr-list-nav") {
        x.className += " responsive";
    } else {
        x.className = "dr-list-nav";
    }
}

const state = {

};

$(function () {

    // contact form animations
    $('#contact').click(function () {
        $('#contactForm').fadeToggle();
    })
    $('#contact2').click(function () {
        $('#contactForm').fadeToggle();
    })
    $('#contact3').click(function () {
        $('#contactForm').fadeToggle();
    })
    $(document).mouseup(function (e) {
        var container = $("#contactForm");

        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            container.fadeOut();
        }
    });

});


onRegister = (event) => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    console.log(name, email)
    fetch('https://dry-refuge-22923.herokuapp.com/invite', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: email,
            name: name
        })
    }).then(response => response.json()).catch(err=>console.log(err))
    $("#contactForm").html('<p>Thank you!! Invite will be sent soon :)</p>')

    setTimeout(function () {
    $("#contactForm").fadeOut();
    }, 2000);
}
