$(window).ready(() => {
    $('#burger').click((e) => {
        if($(e.currentTarget).hasClass('burger-active')) {
            $(e.currentTarget).removeClass('burger-active')
            $('.header_mobile').removeClass('header_mobile-active')
        } else {
            $(e.currentTarget).addClass('burger-active')
            $('.header_mobile').addClass('header_mobile-active')
        }
    })

    const resize = () => {
        let width_resize = $('.reviews .avatar').width()
        let width_map = $('iframe').width()

        $('iframe').height(width_map)
        $('.reviews .avatar').height(width_resize)
    }
    $(window).resize(() => {
        resize()
    })

    resize()

    const anchors = document.querySelectorAll('a[href*="#"]')

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href').substr(1)

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }

    $('.modal').click((e) => {
        let click_class = $(e.target).attr('class')
        if(click_class == 'modal-wrapper' || click_class == 'modal') {
            $('.modal').slideUp(200)
        }
    })

    $('.modal .close').click(() => {
        $('.modal').slideUp(200)
    })

    const show_modal = () => {
        $('.modal').slideDown(200)
    }

    $('button[modal]').click(() => {
        $('.modal').slideDown(200)
    })
})