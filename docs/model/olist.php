<?php

header('Content-Type:application/json');
$datalist=array();
$data=array();

$data[0]="Menu";
$data[1]=" ";
$data[2]="Calories";
$data[3]="Fat";
array_push($datalist,$data);

$data[0]="Parmesan Roasted Potato";
$data[1]="<img src='../../potato.js/images/Parmesan Roasted Potato.jpg' width='150px' height='100px'>";
$data[2]="183";
$data[3]="13";
array_push($datalist,$data);

$data[0]="Mashed Potato";
$data[1]="<img src='../../potato.js/images/Mashed Potato.jpg' width='150px' height='100px'>";
$data[2]="455";
$data[3]="55";
array_push($datalist,$data);

echo json_encode($datalist);

?>
