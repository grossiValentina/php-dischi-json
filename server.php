<?php
// prelevare i dati dal file dischi.json
$string = file_get_contents("dischi.json");

// trasforma stringa in array per fare delle operazioni
// $list = json_decode($string, true);
//var_dump($list);

// invia dati al client 
// header("Content-Type: application/json");

echo $string;