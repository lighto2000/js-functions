const offset ={
    get_top:function(id_name){
        var offset = document.getElementById(id_name).offsetTop ;
        return offset},
    get_left:function(id_name){
        var offset = document.getElementById(id_name).offsetLeft;
        return offset
    },
    get_offset:function(id_name){
        var offset = Array(
            document.getElementById(id_name).offsetTop,
            document.getElementById(id_name).offsetLeft,
            document.getElementById(id_name).offsetWidth,
            document.getElementById(id_name).offsetHeight,
        );

        return 'TOP:'+ offset[0] +'\n' + 'LEFT:' + offset[1] + '\n' +'WIDTH:'+ offset[2] +'\n' + 'HEIGHT:' + offset[3] ;
    },
    get_element_by_tag_name:function(tag_name,index){
        var tag = document.getElementsByTagName(tag_name) ;

        return tag[index]

    }
}

export {offset};
