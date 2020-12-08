<?php
error_reporting(E_ALL);
include "http://fatcat-designs.com/dead_messages/connect.php"; 

// Prepare an insert statement
$sql = "INSERT INTO CS_logins (login, password, loginTime) VALUES (?, ?, 'CURTIME()')";
 
    if($stmt = mysqli_prepare($link, $sql)){
        // Bind variables to the prepared statement as parameters
        mysqli_stmt_bind_param($stmt, "ss", $login, $password);
        
        // Set parameters
        $login = $_REQUEST['login'];
        $password = $_REQUEST['password'];
        
        // Attempt to execute the prepared statement
        if(mysqli_stmt_execute($stmt)){
            echo "Records inserted successfully.<p>";
        } else{
            echo "ERROR: Could not execute query: $sql. " . mysqli_error($link) . "<p>";
        }
    } else{
        echo "ERROR: Could not prepare query: $sql. " . mysqli_error($link) . "<p>";
    }
// Close statement
mysqli_stmt_close($stmt);
// Close connection
mysqli_close($link);
?>