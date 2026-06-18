<?php
    $username = $_POST['username'];
    $passwd = password_hash($_POST['passwd'], PASSWORD_DEFAULT);
    $con = mysqli_connect('localhost', 'root', '', 'site');

    