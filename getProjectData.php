<?php 
    $jsonData = file_get_contents("../json/projects.json");
    $json_array = json_decode($jsonData, true);
?>