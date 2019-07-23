var domainNameForCookie = "directory.gov.hk";
$.main = {
			 domain : (document.domain.indexOf(domainNameForCookie)!=-1?domainNameForCookie:"")
		 };
	
$(function(){		
	 // init mycolor button class
    var style = $.cookie('cso-style');
    
    if (style) {
        $('a[rel=' + style +']')
	        .addClass('active')
	        .parent().siblings("td").find('a')
	        .removeClass('active');	
    }else{
    	$('a[rel="style-blue"]').addClass('active');
    }
    
	$('#mycolor,#mycolorDiv').hover(function(){
		$('#mycolorDiv').css("display","block");
		$('#mycolor').css("text-decoration","underline");
	},function(){
		$('#mycolorDiv').css("display","none");	
		$('#mycolor').css("text-decoration","none");
	});
	
	$('#mycolor,#mycolorDiv').focus(function () {
		$('#mycolorDiv').css("display","block");
		$('#mycolor').css("text-decoration","underline");
	}); 	
	
	$('#mycolorDiv a[rel^=style-]').click(function(){		
		$.switchStyle($(this).attr('rel'));
		
        $(this)
        .addClass('active')
            .parent().siblings("td").find('a')
            .removeClass('active');		
	});
	
	
    // init font size button class
    var f = $.cookie('cso-fontsize');
    if (f) {
        $('a[rel=' + f +']')
            .addClass('fontSizeActive')
            .siblings()
                .removeClass('fontSizeActive');
    }else{    	
    	$('a[rel="font-size-default"]').addClass('fontSizeActive');
    }
    
    // click event of font size button
    $('#fontSizeM, #fontSizeL, #fontSizeEx')
        .click(function(e){
            $.switchFontSize($(this).attr('rel'));
            $(this)
                .addClass('fontSizeActive')
                    .siblings()
                    .removeClass('fontSizeActive');
        });  
    
    //-- Accept Disclaimer & enable continue btn
    $("#acceptDisclaimer").click(function(e){
    	if(this.checked){
    		$("#continue").prop("disabled", "");
    	}else{
    		$("#continue").prop("disabled", "disabled");
    	}
    });
});

$.switchStyle = function(style){
	var styleHref = $('link[rel*=style][title='+style+']').attr('href');	
	$('link[rel=stylesheet][title=style-mystyle]').attr('href',styleHref);
	if($.main.domain!=""){
		$.cookie('cso-style', style, {expires:60, path:'/',domain:$.main.domain});
	}else{
		$.cookie('cso-style', style, {expires:60, path:'/'});
	}
}

$.switchFontSize = function(fz) {	
    switch(fz){
    case 'font-size-larger':
        var factor = '75%';
        break;
    case 'font-size-largest':
        var factor = '87.5%';
        break;
    default:
        var factor = '62.5%';
    }
    $('<style type="text/css">body {font-size:' + factor + ';}</style>').appendTo($('head'));
    
	if($.main.domain!=""){
		$.cookie('cso-fontsize', fz, {expires:60, path:'/',domain:$.main.domain});
	}else{
		$.cookie('cso-fontsize', fz, {expires:60, path:'/'});
	}
}


// change style
var style = $.cookie('cso-style');
if (style){
	$.switchStyle(style);
}

//change font size
var fz = $.cookie('cso-fontsize');
if (fz){
	$.switchFontSize(fz);
}