//载入公共css
document.write('<link rel="stylesheet" type="text/css" href="css/common.css" />');
//var width = document.body.clientWidth;
//var height = document.body.clientHeight;

//根据不同分辨率载入不同的css(可以覆盖common.css中的内容)
//if(width >? height>?) {
    //document.write('<link rel="stylesheet" type="text/css" href="css/800_600.css" />');
//}


$(function(){
    $("img").each(function(i){
        str = $(this).attr("src");
        //如果是表情
        if(str.indexOf("emotion")>=0) {
            img_src_array = str.split("/");
            img_name = img_src_array[img_src_array.length-1];
            img_name_array = img_name.split(".");
            pre_img_name = img_name.replace(img_name_array[img_name_array.length-1], "");
            $(this).attr("src", "file:///android_asset/emoji/"+pre_img_name+"png");
            $(this).addClass("_emotion");
        } else { //如果是图片
            $(this).addClass("img_area");
            width = document.documentElement.clientWidth = $(this).attr("img_width");
            height = $(this).attr("img_height");
            $(this).wrap("<div style='width:"+width+"px;height:"+height+"px' class='img_area'></div>");
            $(this).unbind("click").click(function(){
                $(this).attr("src", $(this).attr("src"));
            })
        }
    })
});