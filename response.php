<?php

if($_SERVER['REQUEST_METHOD'] == 'GET'){
    http_response_code(200);
    echo '<h1>Method allowed</h1>';
}else{
    http_response_code(405);
    echo '<!DOCTYPE html>';
    echo '<html lang="en">';
    echo '<head>';
        echo '<meta charset="UTF-8">';
        echo '<meta http-equiv="X-UA-Compatible" content="IE=edge">';
        echo '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
        echo '<title>Document</title>';
    echo '</head>';
    echo '<body>';
        echo '<h1>Method not allowed</h1>';
    echo '</body>';
    echo '</html>';
}
?>

