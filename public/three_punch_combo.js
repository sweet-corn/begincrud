$i = 0;
$('#start').click(function(){
    $i++;
    if($i >=6 ){
        $('#start').hide();
        $('#stop').show();
    }
})
$('#stop').click(function(){
    alert('这么作？今天别吃了！无偿加班')
    $(this).hide();
})