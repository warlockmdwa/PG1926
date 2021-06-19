// görev 1
$(function(){
$("#gorev1").click(function(){
    for(var i = 0 ; i < 3; i++){
        var header1 = $("h2")[0];
        var header2 = $("h2")[1];
        var header3 = $("h2")[2];
        console.log(header1)
    }
    $("li").remove()
    $("br").remove()

    var hd1 = $(header1).html()
    var hd2 = $(header2).html()
    var hd3 = $(header3).html()

    $("#gorev1").append("<li>"+hd1 + "</li>"+
     "<br>" + "<li>"+hd2 + "</li>" + 
     "<br>" + "<li>"+ hd3+ "</li>")
})
})

// görev 2
$("#gorev2").click(function() {
    
    var say = $('article h2').length;
    $("#gorev2 input").val(say);
});

// görev 3
$("#gorev3").click(function(event) {
    var veri1 = $("h1").html()
   $("#gorev3 input").val(veri1);
});


// görev 4
$("#gorev4").click(function() {

    var datas = $("p")
    var veri1 = $("article h2")
    
    for(var i = 0; i < datas.length; i++){
        var metin = datas[i].textContent
            
        veri1[i].textContent += ":"+ metin.length
        

    }


});

// görev 5
$("#gorev5").click(function(){
    $("h1").css("color", "red");

    $("article div:nth-child(even)").css('color','blue')
    $("p",":nth-child(even)").css("color","initial")
    $("article div:nth-child(odd)").css("color", "orange");


})
// görev 6
$("#gorev6").click(function(){
    var yokOlacakYazi = $("p")[0];


    $(yokOlacakYazi).fadeOut( "slow");
    
});
// görev 7
$("#gorev7").click(function(){
$("article h2:contains(can)").each(function(){
    console.log(this);
    
    $("#gorev7").append("<ul>"+"<li>"+ this.textContent +"<br>"+"</li>"+"</ul>");

});

})

// görev 8
$("#gorev8").click(function(){ // Çalışmazsa bruhto.bat dosyasini calistirip oyle deneyiniz.
    var header1 = $("h2")[0]
    var yazilar = $("p")[0]
    $.ajax({
        url: "lorem.html",
        type: "get",
        success: function(cevap){
            $(header1).text("Lorem")
            $(yazilar).text(cevap)
            $(yazilar).fadeIn("slow")
        }
    });
})

// görev 9
var h1ler = $("article h1")
var h2ler = $("article h2")
$(h2ler).mouseover(function() {
    $("#gorev9").val(h2ler);
})
$(h2ler).mouseout(function() {
    $("#gorev9").val(hide());
});

// görev 10
$("#gorev10").click(function(){
    $('body').append($('<img src="check.png" style="height: 100px; width: 100px; float: right; z-index: 2;position: fixed; bottom: 0px; right: 0px;">'))
})