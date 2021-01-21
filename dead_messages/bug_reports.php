<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>FF NS Customer Service Associate Portal</title>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Montserrat+Subrayada:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
  <link rel="stylesheet" href="./loginPageStyle.css">
  <link rel="apple-touch-icon" sizes="180x180" href="/dead_messages/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/dead_messages/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/dead_messages/favicon-16x16.png">
  <link rel="manifest" href="/dead_messages/site.webmanifest">
</head>
<body>
<!-- partial:index.partial.html -->
  <div id="backGrid"></div>
  <div id="gridContainer">
    
    <div id="logo">
      <section id="logoBack">
        <img id="Farrago" src="/images/FarragoFuture_Logo.png" alt="Farrago Fiction logo" width="95%">
      </section>
    </div>
    
    <div id="deptLogo">
      <section id="deptBack">
        <img id="NSCS" src="/images/Narrative_Stability_Customer_Support_Logo.png" alt="Narrative Stability Customer Support" width="87.5%">
      </section>
    </div>
    
    <div id="header">
      <section id="headContent"></section>
    </div>
    
    <div class="side" id="sideLine">
      <section class="sideContent">
        <h2>CS Admin Portal</h2>
        <p class="sideContent">Welcome to the Farrago Fiction Narrative Stability Customer Support team administration portal. If you need access to this resource and your login is not working, please contact your Leadership team.</p>
          <h3>ACCESS</h3>
        <p class="sideContent">If you are accessing this portal from Farrago Fiction Narrative Stability Customer Support corporate headquarters, you acknowledge that the private customer data held within this site is only to be used for the benefit of the company and its users. Your rights may be restricted and subject to change at any time from time to time under the terms of your employment contract.  Please note that the Company has received and will continue to review this information regularly to ensure its internal stability, in its entirety, which is why you have access to only data relevant to your application.</p>
          <h3>OFFSITE USERS</h3>
        <p class="sideContent">Offsite access should only be attempted via hybrid or tight synchronous timetrav encryption due to data propagation demands. To determine the quality of connection in your region, you will need to review the User guide to access an appropriate uplink site from any location within your region. Contact the head of Administration for a remote login. If you do not know how to contact the head of Administration, you do not qualify for remote access privileges. You must inform Farrago Fiction Fiction Narrative Stability staff about the security risks you pose for the company in this process and also contact any relevant law enforcement personnel.</p>
        <span class="void">Good job breaking into the cookie jar, kiddos. Don't use this to doxx other Players or stupid shit like that. And don't fuck with the data, we need it for bugfixes. <em>You want us to do bugfixes.</em> No, that isn't a question.</span></p>
      </section>
    </div>
    
    <main class="" id="glitchArea"> 
      <div class="page" id="page1">
        <h1>Recent Bug Reports</h1>
        <p class="introOutro">Please see below for unusual bug reports that were revceived thru the user site.</p>
        <p><div class="tablewrap" id="reportTable"> 
          <?php 
            $link = mysqli_connect("gator1370.hostgator.com", "xexus_karmicRet", "fuckOffHackers", "xexus_farrago");
              if($link === false) {
               die("ERROR: Could not connect. " . mysqli_connect_error() . "<p>");
              }
              else {
                echo ""; 
              }
            $sql = "SELECT * FROM bug_reports";
              if($result = mysqli_query($link, $sql)){
              if(mysqli_num_rows($result) > 0){
                echo "<table>";
                echo "<tr>";
                  echo "<th class='column'>Log Number</th>";
                  echo "<th class='columnUnWrap'>Session ID</th>";
                  echo "<th class='columnUnWrap'>Messenger Program</th>";
                  echo "<th class='columnUnWrap'>User Chathandle</th>";
                  echo "<th class='column'>Bug Report Text</th>";
                echo "</tr>";
              while($row = mysqli_fetch_array($result)){
                echo "<tr>";
                  echo "<td style='color:#AA6DA3;'>" . $row['logNumber'] . "</td>";
                  echo "<td class='columnUnWrap'>" . htmlspecialchars($row['sessionID']) . "</td>";
                  echo "<td class='columnUnWrap'>" . htmlspecialchars($row['messenger']) . "</td>";
                  echo "<td class='columnUnWrap'>" . htmlspecialchars($row['chathandle']) . "</td>";
                  echo "<td>" . htmlspecialchars($row['bugText']) . "</td>";
                echo "</tr>";
              }
                echo "</table>";
                 // Free result set
                 mysqli_free_result($result);
              } else{
                echo "No records matching your query were found.";
                }
              } else{
              echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
                }
            // Close connection
            mysqli_close($link);
          ?>
        </p></div>
        <button class="prev" type="button" onclick="prettyGlitch(); location.href='/dead_messages/loginPage.php';">Back</button>
      </div>
    </main>

  </div>
   
<!-- particles.js lib - https://github.com/VincentGarreau/particles.js --> 
  <script src="http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js">
  </script>
<!-- partial -->
  <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'></script>
  <script  src="./script.js"></script>

</body>
</html>
