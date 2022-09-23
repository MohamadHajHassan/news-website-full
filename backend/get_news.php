<?php
header("Access-Control-Allow-origin:*");
include("connection.php");

$query = $mysqli->prepare("SELECT title, date, descript FROM news");
$query->execute();
$array = $query->get_result();

$response = [];

while($m = $array->fetch_assoc()){
    $response[] = $m;
}

echo json_encode($response);
?>