<?php


if($_POST["message"]) {


mail("your@email.address", "Here is the subject line",


$_POST["insert your message here"]. "From: an@email.address");


}


?>

<form method="post" action="visitorForm.php">

<textarea name="userName"></textarea>


<textarea name="message"></textarea>


<input type="submit">


</form>

