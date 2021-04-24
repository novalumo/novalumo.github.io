function postInquiry() {

    let name    = $('input[name="name"]').val()
    let company = $('input[name="company"]').val()
    let address = $('input[name="address"]').val()
    let email   = $('input[name="email"]').val()
    let phone   = $('input[name="phone"]').val()
    let title   = $('input[name="title"]').val()
    let body    = $('textarea[name="body"]').val()

    if (name == '' || email == '' || title == '' || body == '') {
        name  = '' ? false : true 
        email = '' ? false : true
        title = '' ? false : true
        body  = '' ? false : true
    } else {
        submitButton.style.display = 'none'
        message.style.opacity = '1'
        let input = document.getElementsByClassName('formInput')
        for(let i = 0; i < input.length; i++) {
            input[i].disabled = true
        }

        let data = {
            name: name,
            company: company,
            address: address,
            email: email,
            phone: phone,
            title: title,
            body: body,
        }
    
        $.ajax({
            url: 'https://script.google.com/macros/s/AKfycbybegWRt7STr4PgsXF61dnvODcsPsJP-RC2MX3ABRu61RdRXmG9IUhOViCxuccjSOhsSw/exec',
            type: 'POST',
            data: data
        }).done(function(res){
            if(res.response != 'success') {
                console.log(JSON.stringify(res.error))
                alert('送信に失敗しました')
                return;
            }
            location.href = 'result'
        }).fail(function(){
            alert('送信に失敗しました')
        }).always(function() {
            console.log('送信処理終了')
            preventDefault()
        })
    }
    
}