<?php
session_start();
include "koneksi.php";
?>

<form action="" method="POST">
<table align="center">
	<tr>
		<th colspan="2" height="40">LOGIN FORM </th>
	</tr>
	<tr>
		<td width="100"> Username </td>
		<td> <input type="text" name="nama"> </td>
	</tr>
	<tr>
		<td> Password </td>
		<td> <input type="password" name="password"> </td>
	</tr>
	<tr>
		<td></td>
		<td> <input type="submit" value="Login" name="proseslog"> </td>
	</tr>
</table>
</form>