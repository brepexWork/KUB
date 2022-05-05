const re_email = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

var re_phone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im

$('#send_lead_comments').click((e) => {

    let name = $('.contact_us #name_contact').val()
    let email = $('.contact_us #email_contact').val()
    let message = $('.contact_us #messages_contact').val()

    if(name == '' || name.length < 1) {
        alert('Введите корректное имя')
        return false
    }

    let valid_email = re_email.test(email)

    if(email == '' || !valid_email) {
        alert('Введите корректный email')
        return false
    }

    $(e.currentTarget).prop('disabled', true)

    $.ajax({
        url: 'php/create_lead.php',
        type: 'POST',
        cache: false,
        data: {'name' : name, 'email' : email, 'mess' : message},
        success: (data) => {

            $('.contact_us #name_contact').val('')
            $('.contact_us #email_contact').val('')
            $('.contact_us #messages_contact').val('')

            $(e.currentTarget).prop('disabled', false)

            alert(data)
        }
    })

})

$('#callback').click((e) => {

    let name = $('#name_form').val()
    let phone = $('#phone_form').val()

    if(name == '' || name.length < 1) {
        alert('Введите корректное имя')
        return false
    }

    let valid_phone = re_phone.test(phone)

    if(phone == '' || !valid_phone) {
        alert('Введите корректный номер телефона')
        return false
    }

    $(e.currentTarget).prop('disabled', true)

    $.ajax({
        url: 'php/create_lead_phone.php',
        type: 'POST',
        cache: false,
        data: {'name' : name, 'phone' : phone},
        success: (data) => {

            $('#name_form').val('')
            $('#phone_form').val('')

            $(e.currentTarget).prop('disabled', false)

            alert(data)
        }
    })

})

$('#modal_send').click((e) => {
    let name = $(e.currentTarget).parent().find('#name').val()
    let email = $(e.currentTarget).parent().find('#email').val()
    let phone = $(e.currentTarget).parent().find('#phone').val()

    let valid_email = re_email.test(email)
    let valid_phone = re_phone.test(phone)

    if(name < 1 || name == '') {
        alert('Введите ваше имя')
        return false
    }

    if(!(valid_email) || email == '') {
        alert('Введите корректный email')
        return false
    }

    if(!(valid_phone) || phone == '') {
        alert('Введите корректный email')
        return false
    }

    $.ajax({
        url: 'php/create_lead_phone.php',
        cache: false,
        type: 'POST',
        data: {'phone' : phone, 'email' : email, 'name' : name},
        success: (data) => {
            alert(data)
        }
    })
})