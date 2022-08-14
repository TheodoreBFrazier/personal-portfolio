<?php
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

//Check for errors 
if (empty($_POST['fname']) && empty($POST[email]) && empty($POST[message])) die()

if ($_POST) 
{

//set the response to "OK" or 200.

http_response_code(200);
$subject = $_POST['fname'];
$to = "theo.frazier@icloud.com";
$from = $POST['email']

//data 

$msg = $_POST['number'] . $POST['message'];

$headers = "MIME-Version: 1.0\r\n";
$headers.= "Content-type: text/html; charset=UTF-8\r\n";
$headers.= "From: <" . $from . ">";
mail($to, $subject, $msg, $headers);

	// echo json_encode( $_POST );

	echojson_encode(array(
		"sent" => true
	));
	}
  else
	{

	// tell the user about error

	echojson_encode(["sent" => false, "message" => "Something went wrong"]);


}

?>