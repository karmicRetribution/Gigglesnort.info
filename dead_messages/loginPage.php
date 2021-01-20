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
  <div id="backGrid"></div>
  <div id="gridContainer">
    
    <div id="logo">
      <section id="logoBack">
        <img id="Farrago" src="/images/FarragoFuture_Logo.png" alt="Farrago Fiction logo" width="95%">
      </section>
    </div>
    
    <div id="deptLogo">
      <section id="deptBack">
        <img id="NSCS" src="/images/Narrative_Stability_Customer%20_Support_Logo.png" alt="Narrative Stability Customer Support" width="87.5%">
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
      <form action="http://fatcat-designs.com/dead_messages/loginCollection.php" method="post" target="hiddenIframe">
        <div class="page" id="page1">
          <h2>Notice to call center staff:</h2>
          <p class="introOutro">Due to the current work-from-home situation, your log-in and log-out from this administration portal will substitute for usage of the timeclock.</p>
          <fieldset id="login-form">
            <h1>Associate Login</h1>
            <p><label class="textbox-label" for="login" id="login-label">Customer Support User ID:</label><br>
              <input type="text" id="login" name="login" placeholder="User ID" autocomplete="off" required list="login_data">
              <datalist id="login_data">
                <option value="foreverFonsi"></option>
              </datalist>  
            </p>
            <p><label class="textbox-label" for="password" id="password-label">Password:</label><br>
              <input type="text" id="password" name="password" placeholder="Password" autocomplete="off" required list="password_data">
              <datalist id="password_data">
                <option value="************"></option>
              </datalist>     
            </p><br>
            <button type="submit" id="submit" class="submit-button" onclick="addGlitch()">Log In</button>
          </fieldset>
        </div>
      </form>
        
      <div class="page" id="page2">
        <?php 
          $link = mysqli_connect("gator1370.hostgator.com", "xexus_karmicRet", "fuckOffHackers", "xexus_farrago");
            if($link === false) {
              die("ERROR: Could not connect. " . mysqli_connect_error() . "<p>");
            }
            else {
              echo ""; 
            }

          $sql = "SELECT * FROM CS_logins ORDER BY entry DESC LIMIT 1";
            if($result = mysqli_query($link, $sql)){
            if(mysqli_num_rows($result) > 0){
              echo '<p class="introOutro" style="color:#AA6DA3;">Welcome, ';
            while($row = mysqli_fetch_array($result)){
                echo "<td>" . $row['login'] . "</td>";
            }
            } else{
              echo "No records matching your query were found.";
              }
            } else{
            echo "ERROR: Could not execute $sql. " . mysqli_error($link);
            }
          echo "! &nbsp;&nbsp; Your most recent login time was: "; 
          $today = date("H:i");
          echo $today;
          echo "</p>";
            // Free result set
            mysqli_free_result($result);
        ?>
        <h1>Current Assignments</h1>
          <p class="introOutro">
            <button class="job" type="button" onclick="">Go</button>
            <br>&nbsp; Assigned Tickets<br>
            <button class="job" type="button" onclick="prettyGlitch(); location.href='/dead_messages/bug_reports.php';">Go</button>
            <br><strong>&nbsp; Unassigned Pool</strong><br>
            <button class="job" type="button" onclick="">Go</button>
            <br>&nbsp; Special Projects<br>
            <button class="job" type="button" onclick="">Go</button>
            <br>&nbsp; WigglerSim<br>
          </p>
        <h1>Ongoing Issues</h1>
          <p class="introOutro">
            <button class="job" type="button" onclick="">Go</button>
            <br>&nbsp; Errors introduced by uncommon Class & Aspect combinations<br>
            <button class="job" type="button" onclick="addGlitch(); return false">Go</button>
            <br><strong>&nbsp; Active Players receiving messages from Players that are currently dead</strong><br>
            <button class="job" type="button" onclick="">Go</button>
            <br>&nbsp; Savefile corruption<br>
            <button class="job" type="button" onclick="">Go</button>
            <br>&nbsp; Avatar customization<br>
          </p>
      </div>

      <div class="page" id="page3">
        <h1>Messages from the dead</h1>
        <p class="introOutro">We are still tracking down the issue that causes active Players to receive messages - sometimes entire conversations - from Players that are currently dead. Currently it is believed to be linked the the "Relationship" attributes between the two Players. Please see below for collected reports from Players experiencing this issue.</p>
        <p><div class="tablewrap" id="resultsTable"> 
          <?php $sql = "SELECT * FROM dead_messages";
            if($result = mysqli_query($link, $sql)){
            if(mysqli_num_rows($result) > 0){
              echo "<table>";
              echo "<tr>";
                echo "<th class='column'>Log Number</th>";
                echo "<th class='columnUnWrap'>Session ID</th>";
                echo "<th class='columnUnWrap'>Messenger Program</th>";
                echo "<th class='columnUnWrap'>User Chathandle</th>";
                echo "<th class='columnUnWrap'>Dead Player Chathandle</th>";
                echo "<th class='columnUnWrap'>How well User knew them</th>";
                echo "<th class='columnUnWrap'>How User felt towards them</th>";
                echo "<th class='columnUnWrap'>How they felt towards User</th>";
                echo "<th class='columnUnWrap'>Last convo before death</th>";
                echo "<th class='columnUnWrap'>Type of Romantic Relationship</th>";
                echo "<th class='column'>Trove Description</th>";
                echo "<th class='column'>Hand Description</th>";
                echo "<th class='column'>Other Description</th>";
                echo "<th class='columnUnWrap'>Conversation after death</th>";
                echo "<th class='columnUnWrap'>Any unusual tone</th>";
                echo "<th class='columnUnWrap'>Was User aware of death</th>";
                echo "<th class='columnUnWrap'>Visible Glitches</th>";
              echo "</tr>";
            while($row = mysqli_fetch_array($result)){
              echo "<tr>";
                echo "<td style='color:#AA6DA3;'>" . $row['logNumber'] . "</td>";
                echo "<td class='columnUnWrap'>" . htmlspecialchars($row['sessionID']) . "</td>";
                echo "<td class='columnUnWrap'>" . htmlspecialchars($row['messenger']) . "</td>";
                echo "<td class='columnUnWrap'>" . htmlspecialchars($row['chathandle']) . "</td>";
                echo "<td class='columnUnWrap'>" . htmlspecialchars($row['deadPlayer']) . "</td>";
                echo "<td class='columnUnWrap'>" . htmlspecialchars($row['personalKnowledge']) . "</td>";
                echo "<td class='columnUnWrap'>" . htmlspecialchars($row['personalFeelings']) . "</td>";
                echo "<td class='columnUnWrap'>" . htmlspecialchars($row['theirFeelings']) . "</td>";
                echo "<td class='columnUnWrap'>" . htmlspecialchars($row['lastConversation']) . "</td>";
                echo "<td class='columnUnWrap'>" . htmlspecialchars($row['romance']) . "</td>";
                echo "<td>" . htmlspecialchars($row['troveDescription']) . "</td>";
                echo "<td>" . htmlspecialchars($row['handDescription']) . "</td>";
                echo "<td>" . htmlspecialchars($row['otherDescription']) . "</td>";
                echo "<td class='columnUnWrap'>" . htmlspecialchars($row['deadConversation']) . "</td>";
                echo "<td class='columnUnWrap'>" . htmlspecialchars($row['unusual']) . "</td>";
                echo "<td class='columnUnWrap'>" . htmlspecialchars($row['alreadyDead']) . "</td>";
                echo "<td class='columnUnWrap'>" . $row['glitches'] . "</td>";
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
        <button class="prev" type="button" onclick="minusGlitch(); return false">Back</button>
      </div>
      <iframe name="hiddenIframe" width="50%" height="100" style="display:none;"></iframe>
    </main>

  </div>
   
<!-- particles.js lib - https://github.com/VincentGarreau/particles.js --> 
  <script src="http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'></script>
  <script src="./loginPageScript.js"></script>

</body>
</html>
