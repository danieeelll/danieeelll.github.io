<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=windows-1250">
      <title>Zápis - formulár pre zápis</title>
      <link href="style.css" rel="stylesheet" type="text/css">
<?php
include 'funkcie.php';     
date_default_timezone_set('Europe/Bratislava');   // default time zone set (ak by nebola, DATE/TIME funkcia by bliakali) ----------------------------------- 
?>

<script>
function schov(prvok){

  //var prvookMain = 'm'+prvok;  // Main okno
  var prvok1 = 'vO_'+prvok;
  var prvok2 = 'vF_'+prvok;
  var stav = document.getElementById(prvok2).style.display;
  
  if(stav=='block'){    document.getElementById(prvok1).innerHTML = '+';
                        document.getElementById(prvok2).style.display = 'none'; }
  else                { document.getElementById(prvok1).innerHTML = '-';
                        document.getElementById(prvok2).style.display = 'block'; }
}

function vytv(prvok){
  var prvok1 = 'nO_'+prvok;
  var prvok2 = 'nF_'+prvok;
  var stav = document.getElementById(prvok2).style.display;
  
  if(stav=='inline-block'){ document.getElementById(prvok1).innerHTML = '&darr;';
                            document.getElementById(prvok1).style.margin = '2px 2px 2px 2px';
                            document.getElementById(prvok2).style.display = 'none'; }
  else                    { document.getElementById(prvok1).innerHTML = '&uarr;';
                            document.getElementById(prvok1).style.margin = '2px -2px 2px -22px';
                            document.getElementById(prvok2).style.display = 'inline-block'; }
}

function vytvPod(prvok){
  var prvok1 = 'pO_'+prvok;
  var prvok2 = 'pF_'+prvok;
  var stav = document.getElementById(prvok2).style.display;
  
  if(stav=='inline-block'){ document.getElementById(prvok1).innerHTML = '&rarr;';
                            document.getElementById(prvok2).style.display = 'none'; }
  else                    { document.getElementById(prvok1).innerHTML = '&larr;';
                            document.getElementById(prvok2).style.display = 'inline-block'; }
}

function zmaz(prvok){
  var prvok1 = 'zO_'+prvok;
  var prvok2 = 'zF_'+prvok;
  var stav = document.getElementById(prvok2).style.display;
  
  
  
  if(stav=='inline-block'){ document.getElementById(prvok1).innerHTML = 'x';
                            document.getElementById(prvok2).style.display = 'none'; }
  else                    { alert ('NEMAZ !?');
                            document.getElementById(prvok1).innerHTML = '&larr;';
                            document.getElementById(prvok2).style.display = 'inline-block'; }
}
</script>


</head>
<body>

<div id="strana_top">
    <div class="lowgo" ><img src="continental_uv.gif"></div>
    <div class="lowgo1"><strong>Adresár IT havarijné plány</strong></div>
</div>
<h1> New Folders </h1>
<div>

<?php

  db_pripojenie();  echo '<hr />';
  
  // Zmeny z FORMulara   
      if     ($_GET['new']=='2'){ mysql_query("INSERT INTO struktura(folder,nadfolder,depth) VALUES ('".$_GET['folder']."', '".$_GET['nadfolder']."', '".$_GET['hlbka']."');"); }
      elseif ($_GET['new']=='1'){ mysql_query("UPDATE struktura SET folder='".$_GET['folder']."' WHERE id='".$_GET['id']."';"); } 
      elseif ($_GET['new']=='3'){ zmaz_folder($_GET['id']); } 

  // vypise strukturu
  echo '<div class="vFolder">';
  folder('0','0',$col);  
  echo '</div>'; 

  flush();
  mysql_close;

?>

</div>
</body>
</html> 