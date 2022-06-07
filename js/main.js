for (let index = 0; index < 15 ** 2; index++) {
    $('.quadrados').append("<div class='quadrado'></div>");
}

$('.cor').each((index) => {
    $(`.cor:eq(${index})`).css('background', $(`.cor:eq(${index})`).attr('id'));
});

$('.cor').click((event) => {
    $(".cor-selecionada").removeClass("cor-selecionada");
    $(event.target).addClass("cor-selecionada");
});

$('.quadrado').mousemove((event) => {
    if(event.which == 1){
        $(event.target).css('background', $('.cor-selecionada').attr('id'));
    }
});

function teste(){
    domtoimage.toPng(document.getElementById("pixelart"))
    .then((dataUrl) => {
        var img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img);
    })
    .catch((error) => {
        console.log(error);
    });
}