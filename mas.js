
//<![CDATA[

$(document).ready(function(){

$(".post-body a img").each(function(){

var isImage = /.(?:jpg|jpeg|gif|png)$/i.test( $(this).parent("a").attr("href") );

if ( isImage ) {

$(this).parent("a").attr('data-src', $(this).parent("a").attr("href"));

$(this).parent("a").attr('data-fancybox', 'postLightBox' );

}

else {

// .. do nothing

}

});

var options = {

infobar : true,

buttons : true,

speed : 300,

margin : [40, 20]

};

$("[data-fancybox]").fancybox( options );

});

//]]>