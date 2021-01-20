<?php
error_reporting(E_ALL);
// Attempt MySQL server connection.
$link = mysqli_connect("localhost", "xexus_karmicRet", "fuckOffHackers", "xexus_farrago");
    if($link === false) {
        die("ERROR: Could not connect. " . mysqli_connect_error() . "<p>");
    }
    else {
        echo "Connected successfully. <p>"; 
    }

// Prepare an insert statement
$sql = "INSERT INTO bug_reports (logNumber, sessionID, messenger, chathandle, bugText) 
    VALUES (?, ?, ?, ?, ?)";
 
    if($stmt = mysqli_prepare($link, $sql)){
        // Bind variables to the prepared statement as parameters
        mysqli_stmt_bind_param($stmt, "sssss", $logNumber, $sessionID, $messenger, $chathandle, $bugText);
        
        // Set parameters
        $logNumber = $_REQUEST['logNumber'];
        $sessionID = $_REQUEST['sessionID'];
        $messenger = $_REQUEST['messenger'];
        $chathandle = $_REQUEST['chathandle'];
        $bugText = $_REQUEST['bugText'];
        
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