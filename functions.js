const offset ={
    get_top:function(class_name){
        var offset = $(class_name).offset().top
        return offset},
    get_left:function(class_name){
        var offset = $(class_name).offset().left 
        return offset
    },
    get_offset:function(class_name){
        var offset = $(class_name).offset();
        return offset
    }
}

