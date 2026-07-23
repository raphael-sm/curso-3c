<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Produtos</h2>
    <ul>
        <?php
            $arr = [
                'Drone de Pulverização DJI Agras T100',
                'Bugatti Veyron HotWheels(2016)',
                'Motor a Diesel MB OM942LA',
                'Módulo Lunar Soyuz LK3'
            ];

            forEach($arr as $v){
                echo "<li>$v</li>";
            }
        ?>
    </ul>
</body>
</html>