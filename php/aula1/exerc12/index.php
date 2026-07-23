<?php
    $arr = [1,2,3,4,5,6,7,8,9,10];
    $soma = 0;

    forEach($arr as $v){
        $soma += $v;
    }

    echo $soma;
?>