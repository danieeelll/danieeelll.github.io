<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=windows-1250">
      <title>Conti roz-scestnik</title>
      <link href="style.css" rel="stylesheet" type="text/css">
<script> 
/* *********************************** *********************************** ********************************************************************* */
/* *********************************** JS FUNKCIE na PRECHADZANIE STROMOVEJ DIR STRUKTURY ****************************************************** */
/* *********************************** *********************************** ********************************************************************* */

/* *** OLD! function schovavatko(prvok), function ukazatko(prvik) *** - rozbali a schova polozky - adresarovu strukturu (nacitane z PHP func. "otvarac") do laveho panelu  */
      function schovavatko(prvok){
        var prvook = 'a'+prvok;
        var prvookMain = 'm'+prvok;  // Main okno
        var prvoik = 's'+prvok;
        var stavook = document.getElementById(prvook).style.display;
        
        if(stavook=='block'){ document.getElementById(prvoik).innerHTML = '+';
                              document.getElementById(prvook).style.display = 'none';  
                              document.getElementById(prvookMain).style.display = 'none'; }
        else                { document.getElementById(prvoik).innerHTML = '-';
                              document.getElementById(prvook).style.display = 'block';
                              document.getElementById(prvookMain).style.display = 'block'; //alert('prvookMain: '+prvookMain+' - prvook: '+prvook);  
                              //ukazatko(prvook);
                            }
      }
      
      /* **** OLD! ukaze vybrany adresar v Main panely *** */
      function ukazatko(prvik){
        var prveek = prvik+'b';
        var podad = document.getElementById(prveek).innerHTML;
        //document.getElementById(prveek).innerHTML.id="sup";
        //var podadr = document.getElementById(prveek).innerHTML;
        
        document.getElementById('obsah_adresara2').innerHTML = podad;
      }

/* *********************************** *********************************** ************************************************************************ */
/* *********************************** JS FUNKCIE na PRECHADZANIE STROMOVEJ DIR STRUKTURY ********************************************************* */
/* *********************************** *********************************** ************************************************************************ */

/* **************** NEW Prechadza strom strukturu ***************************** */
function schovLeft(prvok){
      //var prvookMain = 'm'+prvok;  // Main okno
      var prvok1 = 'lO_'+prvok;
      var prvok2 = 'lF_'+prvok;
      var stav = document.getElementById(prvok2).style.display;
      
      if(stav=='block'){    document.getElementById(prvok1).innerHTML = '+';
                            document.getElementById(prvok2).style.display = 'none'; }
      else                { document.getElementById(prvok1).innerHTML = '-';
                            document.getElementById(prvok2).style.display = 'block'; }
    }

    /* *************************************** ********************** **************************************************************************** */
    /* *************************************** odkryje detail zaznamu **************************************************************************** */
    /* *************************************** ********************** **************************************************************************** */ 
    function ukazDetail(id,action,riadkovac){
        
        var prvok = 'zaznam_'+id;  // id celeho okoliteho DIV 
        var prvok_data = 'h1_'+id;    // data - URL, name 
        var prvok_detail = 'h2_'+id+'_'+riadkovac;       // detail 
        var prvok_folder = 'h3_'+id;   // adresar 
        var prvok_por = 'h4_'+id;   // poradie v adresari  
        
        //onMouseOut = ukazDetail(id,2);
        var ukazovac = 'podrobnosti_'+riadkovac;
        var prenasac = document.getElementById('prenasac').value;
        
        var obsah = ' >>>> prvok: .......  '+prvok+'<br /> >>>> prvok_detail: .......  '+prvok_detail+'<br /> >>>> riadok: .......   '+ukazovac+' >>>> '+document.getElementById(prvok_detail).innerHTML;
        
        // ak je prvok otvoreny t.j. pripraveny na upravu, treba ho zatvorit znovu klikom - vykonava ACTION=3 
        // ak je vsak + mozeme prechadzat = otvarat / zatvarat 
        if(prenasac=='+'){ 
            // ******************************************************************* 
            // po najdeni na prvook reveal-ne ************************************ 
            // ******************************************************************* 
            if(action==1){ document.getElementById(prvok).style.height = '104px';
                           document.getElementById(prvok).style.backgroundColor = '#505050';
                           document.getElementById(ukazovac).style.display = 'inline-block'; 
                           document.getElementById(ukazovac).innerHTML = obsah;
            }
            // ******************************************************************* 
            // po odiduti z prvku hiddne ***************************************** 
            // ******************************************************************* 
            if(action==2){ document.getElementById(prvok).style.height = '100px';
                           document.getElementById(prvok).style.backgroundColor = '#606060';
                           document.getElementById(ukazovac).style.display = 'none';}
        }    
        
        // ******************************************************************* 
        // po clicko-jebu necha otvorene + napise form pre upravy ************ 
        // ******************************************************************* 
        if(action==3){ 
           // musi prepisat "zapamatac otvorenia" - skryty input uplne na konecniku index.php 
           if ( prenasac == '+') { 
                document.getElementById('prenasac').value = id; 
                
                // CSS uprava farieb na hl. prvku (pozadie, okraje...)
                document.getElementById(prvok).style.backgroundColor = '#202020';
                document.getElementById(prvok).style.borderTopColor = 'orange'; 
                document.getElementById(prvok).style.borderBottomColor = 'orange'; 
                document.getElementById(prvok).style.borderTopWidth = '2px';
                document.getElementById(ukazovac).style.backgroundColor = '#303030';
                
                                                                      
                // naladime si hodnoty, ktore presunieme do FORM pola 
                //var data0 = id; // id
                var data1 = document.getElementById(prvok_data).innerHTML; // name 
                var data2 = document.getElementById(prvok_data).href; // adresa 
                var data3 = document.getElementById(prvok_data).title; // titulok 
                var data4 = document.getElementById(prvok_detail).innerHTML; // detail 
                var data5 = document.getElementById(prvok_folder).innerHTML; // adresar
                var data6 = document.getElementById(prvok_por).innerHTML; // poradie v adresari 
                
                // log vypis
                var obsah2 = '<hr /> >>>>>>> hod1...'+data1+'<br /> >>>>>>> hod2...'+data2+'<br /> >>>>>>> hod3...'+data3+'<br /> >>>>>>> hod4...'+data4+'<br /> >>>>>>> hod5...'+data5+'<br /> >>>>>>> hod6...'+data6;
                document.getElementById(ukazovac).innerHTML = obsah+obsah2;
                
                // zapiseme do formulara  
                // 1. naskor ENABLEujeme INPUTY 
                    //for(var a=0; a<8; a++){ document.getElementById('upr'+a).disabled = false; }
                    var inputy = document.getElementById('uprav1').getElementsByTagName('input');
                    for(var fsecko in inputy) { inputy[fsecko].disabled = false; }
                    var inputy0 = document.getElementById('uprav1').getElementsByTagName('textarea');
                    inputy0[0].disabled = false; 
                
                // 2. zapiseme do INPUTov hodnoty DATAx 
                document.getElementById('upr0').value = id;
                document.getElementById('upr1').value = data6;
                document.getElementById('upr2').value = data1;
                document.getElementById('upr3').value = data2;
                document.getElementById('upr4').value = data4;
                document.getElementById('upr5').value = data5;
               
                document.getElementById('upr7').value = data6;
                document.getElementById('upr8').value = id;
                
                // zmenime farbicky na gombikoch
                //var test = document.getElementById('gombiky').getElementsByTagName('input');  
                //for(var fsecko in test){ test[fsecko].className = 'gombiky-on'; }
           }
           // ak je CLIK ON -> znova vypneme    
           if ( prenasac == id ) { 
                
                // CSS uprava farieb hlavneho prvku (pozadie, okraje...)
                document.getElementById(prvok).style.backgroundColor = '#505050';
                document.getElementById(prvok).style.borderTopColor = 'gray'; 
                document.getElementById(prvok).style.borderTopWidth = '1px'; 
                document.getElementById(ukazovac).style.backgroundColor = '#303030';
                
                document.getElementById('prenasac').value = '+'; // prenasac znova do defaultu
                
                // vyresetujeme polozky ( podla FORM name="form1" ) 
                document.form1.reset(); 
                document.form2.reset();
                
                // INPUTY znova DISABLED     
                //for(var a=0; a<8; a++){ document.getElementById('upr'+a).disabled = true; } // INPUTY znova "vypnut"
                    var inputy = document.getElementById('uprav1').getElementsByTagName('input');
                    var inputy0 = document.getElementById('uprav1').getElementsByTagName('textarea');
                    for(var fsecko in inputy) { inputy[fsecko].disabled = true; }
                    inputy0[0].disabled = true; 
                    // zmenime farbicky na gombikoch
                    //var test = document.getElementById('gombiky').getElementsByTagName('input');  
                    //for(var fsecko in test){ test[fsecko].className = 'gombiky'; }
           }
        }  
    }
    
    /* *************************************** ********************** **************************************************************************** */
    /* *************************************** potvrd odoslanie formulara ************************************************************************ */
    /* *************************************** ********************** **************************************************************************** */ 
    function potvrdzovak(akcia){
      
      if (akcia = 1){ var akcicia = "Novy zapis"; }
      if (akcia = 2){ var akcicia = "Upravenie zaznamu"; }
      
      var d0 = document.getElementById('upr0').value;
      var d1 = document.getElementById('upr1').value;
      var d2 = document.getElementById('upr2').value;
      var d3 = document.getElementById('upr3').value;
      var d4 = document.getElementById('upr4').value;
      var d5 = document.getElementById('upr5').value;
      
      alert (akcicia+'\n  '+d0+'\n'+d1+'\n'+d2+'\n'+d3+'\n'+d4);
    
    }
    
    /* *************************************** ********************** **************************************************************************** */
    /* ***************************************  zobrazi predom vytvoreny "skryty zaznam". ******************************************************** */
    /* *************************************** ********************** **************************************************************************** */ 
    function pridaj(id){
             
             var i = document.getElementById('zaznam_00_'+id).style.display;
             var ii= document.getElementById('vNovy_'+id).innerHTML;
             //alert(ii); 
             if (i=='block'){ document.getElementById('zaznam_00_'+id).style.display='none';  
                              document.getElementById('vNovy_'+id).innerHTML='+'; }
             if (i=='none') { document.getElementById('zaznam_00_'+id).style.display='block'; 
                              document.getElementById('zaznam_00_'+id).style.backgroundColor='darkgray';
                              document.getElementById('vNovy_'+id).innerHTML='-'; } 
    }
</script>

<?php
include 'funkcie.php';     
date_default_timezone_set('Europe/Bratislava');   // default time zone set (ak by nebola, DATE/TIME funkcia by bliakali) ----------------------------------- 

db_pripojenie();
 
if ( $_REQUEST['akcia']!=''){ $pis = rob_cosi($_REQUEST); }
if ( $_REQUEST['akcia_poradie']!=''){ $pis = rob_poradie($_REQUEST['id_poradie'],$_REQUEST['nove_poradie']); }

flush();
mysql_close;
?>
  
  </head>
<body>

<div id="strana_top">
    <div class="lowgo" ><img src="continental_uv.gif"></div>
    <div class="lowgo1"><strong>Conti Rozscestnik</strong></div>
    
<?php
  
   //$pisalek;
   //foreach($_REQUEST as $pisem){ $pisalek .= '<b color="#fff000">'.$pisem.'</b><hr />'; }
   //echo $pisalek;
   //echo '<script> alert('.$pisalek.'); </script>';

  
  //if ( $_GET['akcia']!=''){ rob_cosi(); }
  //echo '<hr />'.$pisalek.'<hr />';
?>
    
    
</div>

<div id="strana_stred">

    <div id="strana_lavy">  
        <?php
            db_pripojenie(); echo '<br />';
            echo '<div class="lFolder">';
            folder_left('0','0',$col);
            echo '</div>'; 
            flush();
            mysql_close;
        ?>    
    
    
    <div id="strana_hlavny">  
          
          <div id="virtual_obsah2"> 
          <?php
              db_pripojenie(); echo '<br />';
              echo '<div class="mainFolder">';
              folder_main('0','0',$col,$font,'0');
              echo '</div>'; 
              flush();
              mysql_close;
          ?>  
          </div>
          
          <!--
          <div id="obsah0" style="background-color:#606060;"> 
            <div class="nadpis0"> Intranety </div>
            <button name="i0" value="i0" class="stlac" onclick="window.open('http://c-inside.conti.de/intranet/c-inside/Surf_Regions/en_US/corporation/homepage_en.html', 'funkcia','width=700,height=600,scrollbars=1')"> C.Inside </button>
            <button name="i1" value="i1" class="stlac" onclick="window.open('http://10.202.112.107/', 'funkcia','width=700,height=600,scrollbars=1')"> Intranet PLT </button>
            <button name="i2" value="i2" class="stlac" onclick="window.open('http://62.186.13.1/intranetcm.htm', 'funkcia','width=700,height=600,scrollbars=1')"> Intranet CVT </button>
          </div>
          <div id="obsah1"> 
              <div class="nadpis0"> TICS Reporting: </div>
              <div class="nadpis1"> TICS Reporting CVT (nakladne) </div>
              <button name="spust db" value="spust nasup db" class="stlac" onclick="window.open('funkcie_spustac.php?funkcia=nasup_db', 'funkcia','width=700,height=600,scrollbars=1')"> spust nasup db </button>
              <button name="vychrchli" value="vychrchli" class="stlac" onclick="window.open('funkcie_spustac.php?funkcia=vychrchli', 'funkcia','width=700,height=600,scrollbars=1')"> vychrchli to z db </button>
              <button name="s" value="s" class="stlac" onclick="window.open('funkcie_spustac.php?funkcia=vychrchli', 'funkcia','width=700,height=600,scrollbars=1')"> poriadne ma scisni</button>
          
              <div class="nadpis1"> TICS Reporting PLT (osobne) </div>
              <button name="spust db" value="spust nasup db" class="stlac" onclick="window.open('funkcie_spustac.php?funkcia=nasup_db', 'funkcia','width=700,height=600,scrollbars=1')"> spust nasup db </button>
              <button name="vychrchli" value="vychrchli" class="stlac" onclick="window.open('funkcie_spustac.php?funkcia=vychrchli', 'funkcia','width=700,height=600,scrollbars=1')"> vychrchli to z db </button>
              <button name="vychrchli" value="vychrchli" class="stlac" onclick="window.open('funkcie_spustac.php?funkcia=vychrchli', 'funkcia','width=700,height=600,scrollbars=1')"> vychrchli to z db </button>
              <button name="s" value="s" class="stlac" onclick="window.open('funkcie_spustac.php?funkcia=vychrchli', 'funkcia','width=700,height=600,scrollbars=1')"> poriadne ma scisni</button>
          
              <div class="nadpis1"> TICS Reporting ine </div>
              <button name="sp" value="sp" class="stlac" onclick="window.open('funkcie_spustac.php?funkcia=nasup_db', 'funkcia','width=700,height=600,scrollbars=1')"> spust nasup db </button>
              <button name="v" value="v" class="stlac" onclick="window.open('funkcie_spustac.php?funkcia=vychrchli', 'funkcia','width=700,height=600,scrollbars=1')"> vychrchli to z db </button>
              <button name="s" value="s" class="stlac" onclick="window.open('funkcie_spustac.php?funkcia=vychrchli', 'funkcia','width=700,height=600,scrollbars=1')"> poriadne ma scisni</button>
          </div>
          <div id="obsah0"> 
              <div class="nadpis0"> Ine nety </div>
              <button name="spust db" value="spust nasup db" class="stlac" onclick="window.open('funkcie_spustac.php?funkcia=nasup_db', 'funkcia','width=700,height=600,scrollbars=1')"> spust nasup db </button>
          </div>
          -->
    
    </div>
        
    <div id="strana_pravy" >
        <div class="nadpis2"> Linkovaci upravovnik </div>
        
        <div class="uprav1" id="uprav1"> 
           <form action="index.php" method="get" name="form1" onsubmit="potvrdzovak(1)" >
               <span class="f0">id :                <input type="text" name="id" id="upr0" value="" disabled> </span>
                              &nbsp; poradie :      <input type="text" name="poradie" id="upr1" value="" disabled>   <br />
              
               <span class="f0">meno : </span>      <input type="text" name="name" id="upr2" value="" disabled>             <br />
               <span class="f0">link : </span>      <input type="text" name="link" id="upr3" value="" disabled>             <br />
               <span class="f0">folder : </span>    <input type="text" name="folder_id" id="upr5" value="" disabled>             <br />
               
               <span class="f0">detail: </span> <textarea name="description" id="upr4" rows="3" disabled></textarea> <br />
               
               <input type="submit" name="akcia" value="uprav" class="gombiky" onsubmit="potvrdzovak(1)" title="uprav exist. zaznam" disabled>  
               <input type="submit" name="akcia" value="novy" class="gombiky" onsubmit="potvrdzovak(2)" title="vytvor brand new zapis"  disabled>
               <input type="submit" name="akcia" value="ZMAZ" class="gombiky" onsubmit="potvrdzovak(3)" title="zmaz zaznam" disabled>
               <input type="reset"  value="resset" class="gombiky" style="float:right" title="reset vsetkych hodnot"  disabled>
           </form>
           
           <hr />
           <form action="index.php" name="form2" method="get">
                poradie : <input type="text" name="nove_poradie" id="upr7" value="" disabled>
                id :      <input type="text" name="id_poradie"   id="upr8" value="" disabled>
                <input type="button" name="poradak" value="<" class="gombiky" onclick="poradak(1)">
                <input type="button" name="poradak" value=">" class="gombiky" onclick="poradak(2)">
                <input type="submit" name="akcia_poradie" value="zmen" class="gombiky" onsubmit="" title="uprav poradie zaznamu"> 
                
           </form> 
       
       </div>
       
       <div>
       <?php
       echo '<hr />'.$pisalek;
       echo '<hr />'.$ppisalek;
       ?>
       </div>
       
    </div>
    
</div>

<div>
<?php 
  echo $pis;
   //echo '<script> alert('.$pisalek.'); </script>'; 
?>
</div>  

<div id="strana_spod"> 

<button value="folder" class="stlacFunc" onclick="window.open('edit_folders.php', 'funkcia','width=900,height=600,scrollbars=1')"> Edit Folders </button>
<input type="text" name="prenasac" id="prenasac" value="+" >
<b>&#8226; prosto spodek</b> 

<br />



</div>
  

</body>
</html>