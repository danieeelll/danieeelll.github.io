<?php 

/*
Úroven chyby / Význam
Chyby ctení (Parse):    To jsou de facto syntaktické chyby
Závažné chyby (Fatal):  To jsou bud sémantické chyby, nebo chyby prostredí, z nichž se PHP nedokáže zotavit (napríklad nedefinovaná funkce).
Varování (Warnings):    To jsou chyby podobné závažným, ale zároven si PHP myslí, že muže pokracovat dál. Vetšinou to ale stejne není pravda.
Upozornení (Notices):   Bývá vetšinou v reále vypnuto. Méne podstatné chyby, napríklad neinicializované promenné. 
*/

/* ******************************************************** SQL queries ********************************************* */ 
/*
DROP TABLE struktura;
CREATE TABLE struktura (
  id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  folder varchar(500) DEFAULT NULL,
  depth tinyint(4) DEFAULT NULL,
  nadfolder int(11) DEFAULT NULL );
  
CREATE TABLE data (
  id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name varchar(500) DEFAULT NULL,
  link varchar(500) DEFAULT NULL,
  description varchar(500) DEFAULT NULL,
  folder_id int(11) DEFAULT NULL );
*/

/********************************************************************************************************************************/
/************************************************ init **************************************************************************/
/********************************************************************************************************************************/

date_default_timezone_set('Europe/Bratislava');
$col = array('#000000','#FFA000','#FFB030','#FFC050','#FFD070','#FFE070','#FFE090','#FFF0B0','#FFF0D0','#FFF0D0','#FFF0D0','#FFF0D0','#FFF0D0','#FFF0D0','#FFF0D0','#FFF0D0','#FFF0D0');  // orangeova colora
$colNov= array('#F00000','#C00000','#900000','#700000','#500000', '#400000', '#300000', '#200000');  // cervena colora
$font = array('32','28','24','22','20','18','16','14','12','12','12','12','12','12');

/*********************************************************************************************************************************/
/*********************************************** init end ************************************************************************/
/*********************************************************************************************************************************/

/* ********** **************************** FUNCTIONS ************************************************************************************************************ */

/* ************************* ********************************* *********************************** */
/* ****************************** pripojenie na databazu ***** *********************************** */
/* ************************* ********************************* *********************************** */
function db_pripojenie(){
  set_time_limit(0);
  // pripojenie na databazu
  mysql_pconnect ('localhost','root','');
  mysql_select_db ('scestnik');
  
  if (mysql_error()!=''){ echo '<b class="b1">Spojenie s databazou zlyhalo!!! - skript neprebehne v poriadku!!!</b><br>'; }
}

/* ************************* *********************************************************************** *********************************** */
/* ****************** Vytvorit a udrziavat ADRESAR STRUKTURU ************************************************************ */
/* ************************* *********************************************************************** *********************************** */

/* ************************************** JADRO VYPISU ADRESARA ****************************** 
function folder($nadfolder,$cyklus){
         $query1 = mysql_query("SELECT * FROM virtual_folders WHERE nadfolder='$nadfolder';");
         $cyklus++;
         echo '<ul>';
         while($zaznam1=MySQL_Fetch_Array($query1)){ 
              echo '<li>cyklus:'.$cyklus.'>'.$zaznam1['folder_id'].'" </li>'; 
              $query2 = mysql_query("SELECT * FROM virtual_folders WHERE nadfolder='".$zaznam1['folder_id']."'");  
              $zaznam2 = MySQL_Fetch_Array($query2);
              // ak nie je NULL znamena, ze ma podadresare  -> spusti seba samu funkciu v dalsej slucke 
              if( $zaznam2!=NULL ) { folder($zaznam2['nadfolder'],$cyklus);  }                               
        }
        echo '</ul>';
}
*************************************************************************************************  */

function folder($nadfolder,$cyklus,$col){

         $query1 = mysql_query("SELECT * FROM struktura WHERE nadfolder='$nadfolder';"); //ORDER BY folder_length DESC";
         $cyklus++;
         echo '<div class="vFolder" id="vF_'.$nadfolder.'" style="display:block;" >';
          
         while($zaznam1=MySQL_Fetch_Array($query1)){
              
              $query2 = mysql_query("SELECT * FROM struktura WHERE nadfolder='".$zaznam1['id']."'");  
              $zaznam2 = MySQL_Fetch_Array($query2);
              
              if( $zaznam2!=NULL ) { 
                  echo '<div class="vFolder2" style="border:1px solid '.$col[$cyklus].';">';
                  $otvor = '<span class="vOtvor1" id="vO_'.$zaznam1['id'].'" onclick="schov(\''.$zaznam1['id'].'\')" > - </span>';
              }  
              else { $otvor = '<span class="vOtvor0"> </span>'; }
              
              echo '<div class="vFolder1" style="background-color:'.$col[$cyklus].';">
                        <span class="vOtvor3" >
                        '.$otvor.'
                        <form action="edit_folders.php" method="get">
                            <input type="text" name="folder" value="'.$zaznam1['folder'].'">
                            <input type="text" name="id" value="'.$zaznam1['id'].'" size="1" readonly>
                            <button type="submit" name="new" value="1" size="30">zmen '.$zaznam1['id'].'</button> 
                        </form>
                        </span>
                        
                        <span class="vOtvor4"  id="zO_'.$zaznam1['id'].'" onclick="zmaz(\''.$zaznam1['id'].'\')" title="zmaz adresar!"> x </span>
                        <span class="vOtvor5"  id="zF_'.$zaznam1['id'].'" style="display:none" >
                            <form action="edit_folders.php" method="get">
                                <input type="text" name="id" value="'.$zaznam1['id'].'" size="1" readonly>
                                <button type="submit" name="new" value="3" size="20">ZMAZ '.$zaznam1['id'].'</button> 
                            </form>
                        </span>
                        
                        <span class="vOtvor6" id="pO_'.$zaznam1['id'].'" onclick="vytvPod(\''.$zaznam1['id'].'\')"> &rarr; </span>
                        <span class="vOtvor7" id="pF_'.$zaznam1['id'].'" style="display:none" >
                            <form action="edit_folders.php" method="get">
                                <input type="text" name="folder" value="">
                                <input type="text" name="nadfolder" value="'.$zaznam1['id'].'" size="1" readonly>
                                <input type="text" name="hlbka" value="'.($cyklus-1).'" size="1" readonly>
                                <button type="submit" name="new" value="2" size="30">pridaj '.$zaznam1['id'].'</button> 
                            </form>
                        </span>
                        
                        
            
                    </div>'; 
              
              
              // ak nie je NULL znamena, ze ma podadresare  -> spusti seba samu funkciu v dalsej slucke 
              if( $zaznam2!=NULL ) { folder($zaznam2['nadfolder'],$cyklus,$col);  }  
                                       
        }
        
        echo '<div class="vFolder1" style="background-color:'.$col[$cyklus].';">
                    
                    <span class="vOtvor0"> </span>
                    
                    <span class="vOtvor2" id="nO_'.$nadfolder.'" onclick="vytv(\''.$nadfolder.'\')"> &darr; </span>
                    <span id="nF_'.$nadfolder.'" style="display:none" >
                          <form action="edit_folders.php" method="get">
                              <input type="text" name="folder" value="">
                              <input type="text" name="nadfolder" value="'.$nadfolder.'" size="1" readonly>
                              <input type="text" name="hlbka" value="'.($cyklus-1).'" size="1" readonly>
                              <button type="submit" name="new" value="2" size="30">pridaj '.$nadfolder.'</button> 
                          </form>
                    </span>
                    
              </div>';
        echo '</div></div>';
}

function zmaz_folder($id){ 
         $query = mysql_query("SELECT * FROM struktura WHERE nadfolder='$id';");
         
         while($zaznam=MySQL_Fetch_Array($query)){ zmaz_folder($zaznam['id']); }
        
         echo ' - zmazal som: '.$id.' ';
         mysql_query("DELETE FROM struktura WHERE id='".$id."';"); 
 }


/* ************************* *********************************************************************** *********************************** */
/* ****************** Prechadzanie ADRESARA LAVE okno ********************************************************************************** */
/* ************************* *********************************************************************** *********************************** */

function folder_left($nadfolder,$cyklus,$col){
         $query1 = mysql_query("SELECT * FROM struktura WHERE nadfolder='$nadfolder';"); //ORDER BY folder_length DESC";
         $cyklus++;
         echo '<div class="lFolder0" id="lF_'.$nadfolder.'" style="display:block;" >';
          
         while($zaznam1=MySQL_Fetch_Array($query1)){
              
              $query2 = mysql_query("SELECT * FROM struktura WHERE nadfolder='".$zaznam1['id']."'");  
              $zaznam2 = MySQL_Fetch_Array($query2);
              
              if( $zaznam2!=NULL ) { 
                  echo '<div class="lFolder2" style="border:1px solid '.$col[$cyklus].';">';
                  $otvor = '<span class="lOtvor1" id="lO_'.$zaznam1['id'].'" onclick="schovLeft(\''.$zaznam1['id'].'\')" > - </span>';
              }  
              else { $otvor = '<span class="lOtvor0"> </span>'; }
              
              echo '<div class="lFolder1" style="background-color:'.$col[$cyklus].';">
                        <span class="lOtvor2"><a href="index.php#z_'.$zaznam1['folder'].'">
                        '.$otvor.'
                        '.$zaznam1['folder'].'-'.$zaznam1['id'].'
                        </a></span>
                    </div>'; 

              // ak nie je NULL znamena, ze ma podadresare  -> spusti seba samu funkciu v dalsej slucke 
              if( $zaznam2!=NULL ) { folder_left($zaznam2['nadfolder'],$cyklus,$col);  }                                
        }
        // poukoncuje posluckovane TAGy
        echo '</div></div>';
}

/* ********************************* urobi adresar strukturu ako NADPISY v main okne ********************* */
function folder_main($nadfolder,$cyklus,$col,$font,$riadkovac1){
         $query1 = mysql_query("SELECT * FROM struktura WHERE nadfolder='$nadfolder';"); //ORDER BY folder_length DESC";
         $cyklus++;
         
         
         while($zaznam1=MySQL_Fetch_Array($query1)){ 
              $riadkovac1++;
              //vybera konkretny adresar 
              $query2 = mysql_query("SELECT * FROM struktura WHERE nadfolder='".$zaznam1['id']."'");  
              $zaznam2 = MySQL_Fetch_Array($query2);
              
              echo '<div id="z_'.$zaznam1['folder'].'" ></div>';  // vytvorenie zalozky 
              echo '<div class="mainFolder0" style="border-color:'.$col[$cyklus].';">  ';
              echo '<div class="mainFolder1" style="background-color:'.$col[$cyklus].'; font-size:'.$font[$cyklus].'px;"> ' .$zaznam1['folder'];
              echo '<span class="vNovy1" id="vNovy_'.$zaznam1['id'].'" onclick="pridaj('.$zaznam1['id'].')" title="pridaj novy zaznam do tohoto adresara"> + </span>';  // pridavatko zaznamu do noveho adresara

              //echo '<span class="mainZaznam0" style="font-size:'.$font[$cyklus].'px;"></span>   ';
              echo '</div>';
              
              folder_main_zaznam($zaznam1['id'],$riadkovac1);  // pustime vypis suborov ak su v adresari 
              
              echo '</div><br />'; 
             
              if( $zaznam2!=NULL ) { folder_main($zaznam2['nadfolder'],$cyklus,$col,$font,$riadkovac1++); } 
    
        }

}

/* ********************************* prida prislusne zaznamy ku foldrom/nadpisom v main **************************** */
function folder_main_zaznam ($folder,$riadkovac1){
       // vybere subory podla adresara
       // $query1 = mysql_query("SELECT * FROM struktura_medzi WHERE new_folder_id='".$folder."' ORDER BY new_name"); 
       // joinneme tabulky "struktura_medzi" a "struktura_real" 
       /* 
          INSERT INTO data(name, link, description, folder_id) VALUES ('TICSSSSSrrup','httprd:////hnup.rup', 'drem tu ako blb ..............................................................................', '13' )
          INSERT INTO data(name, link, description, folder_id) VALUES ('TSrrup','htttttttttttprd:////hnup.rup', 'drem tu ako blb ..........**********************************************.............................', '13' )
          INSERT INTO data(name, link, description, folder_id) VALUES ('TRRRRRRRRRRRRRRRRup','httprd:////hnup.srub', 'drem tu ako srooooooooooooooooooooooooooooooooooooob ', '16' )
          INSERT INTO data(name, link, description, folder_id) VALUES ('CIIIIP','httprd:////hnup.srub', 'drem tu ako ciiiiiiiiiiiiiiiiiiiiiiiiiiiiipp', '24' )
          INSERT INTO data(name, link, description, folder_id) VALUES ('CIIIIP','httprd:////hnup.srub', 'drem tu ako ciiiiiiiiiiiiiiiiiiiiiiiiiiiiipp - asi mi y toho bude liiiiip', '24' )
        */
        
       $query1 = mysql_query("SELECT * FROM data WHERE folder_id='".$folder."' ORDER BY poradie;");
       $r=0;
       $riadkovac2=0; $riadok=0;
       
       while($zaznam1=MySQL_Fetch_Array($query1)){
           $riadok++;
           //if($riadok>5){ $riadkovac2++; } 
           // if( round($zaznam1['novota']/7) > count($colNovot) ){ $colNovot1="#303030"; } else { $colNovot1=$colNovot[round($zaznam1['novota']/7)]; } // urcime farbu na novotu - popripade vyberieme novinky zvlast
           
          
            echo '<div class="mainFolder2" id="zaznam_'.$zaznam1['id'].'" 
                       onMouseOver="ukazDetail('.$zaznam1['id'].',1,\''.$riadkovac1.$riadkovac2.'\')"
                       onMouseOut="ukazDetail('.$zaznam1['id'].',2,\''.$riadkovac1.$riadkovac2.'\')"
                       onClick="ukazDetail('.$zaznam1['id'].',3,\''.$riadkovac1.$riadkovac2.'\')">';
            echo '<span class="mainZaznam1">
                    <a id="h1_'.$zaznam1['id'].'" href="'.$zaznam1['link'].'" title="'.$zaznam1['link'].'" class="v3">'.$zaznam1['name'].'</a>
                    <span id="h3_'.$zaznam1['id'].'" style="display:none;">'.$zaznam1['folder_id'].'</span>
                    <span id="h4_'.$zaznam1['id'].'" class="v2">'.$zaznam1['poradie'].'</span>';
            echo '</span></div>';       
            // skryty pridavny riadok - zobrazi sa cez JS najdenim po bodke. 
            echo '<span class="v_skryte" id="h2_'.$zaznam1['id'].'_'.$riadkovac1.$riadkovac2.'">'.$zaznam1['description'].'</span> ';
            
            // ak je pocet zaznamov viac ako 7 urobi novy riadok
            if ( $riadok%7 == 0 ){ echo '<div class="mainFolder3" id="podrobnosti_'.$riadkovac1.$riadkovac2++.'" style="display:none"> </div>'; }  // zobrazi schovavaci riadok pre podrobnosti  

       }
       
       // prida pripravu pre novy zaznam - otvori sa po kliko jebu pri adresari 
       $riadok++; 
       echo '<div class="mainFolder2" id="zaznam_00_'.$folder.'" style="display:none; background-color:darkgray;"
                   onMouseOver="ukazDetail(\'00_'.$folder.'\',1,\''.$riadkovac1.$riadkovac2.'\')"
                   onMouseOut="ukazDetail(\'00_'.$folder.'\',2,\''.$riadkovac1.$riadkovac2.'\')"
                   onClick="ukazDetail(\'00_'.$folder.'\',3,\''.$riadkovac1.$riadkovac2.'\')"
                  
                   <span class="mainZaznam1">
                      <a    id="h1_00_'.$folder.'" href="" title="" class="v3"> Pridaj Novy Zaznam </a>
                      <span id="h3_00_'.$folder.'" style="display:none;">'.$folder.'</span>
                      <span id="h4_00_'.$folder.'" class="v2">'.$riadok.'</span>
                  </span>
             </div>
                  <span class="v_skryte" id="h2_00_'.$folder.'_'.$riadkovac1.$riadkovac2.'"> </span> ';
       
       // prida skryty riadok pre JaavaScript na zobrazenie podrobnosti  - na konci
        echo '<div class="mainFolder3" id="podrobnosti_'.$riadkovac1.$riadkovac2.'" style="display:none"> </div>';
 }

function rob_cosi($_REQUEST){
   $pisalek;
   $v=0;
   $pole = $_REQUEST;
   $keys = array_keys($pole);
   //$keys_db = array('id'=>'upr0','name'=>'upr2','link'=>'upr3','description'=>'upr4','folder_id'=>'upr5','poradie'=>'upr1','date_upravene'=>'');
   $act_date = date("Y-m-d H:i:s");
  
   foreach($pole as $pisem){ 
      $pisalek .= '<b color="#fff000">'.$v.' - '.$keys[$v].' </b> ..... '.$pisem.'<br />';
      $v++;
   }
  
   if($_REQUEST['akcia']=='uprav'){  
       $pisalek .= '<h2> upravujeme </h2>';
       
       // zistit, ci sa meni poradie, ak ano pustime poradovnik 
       $query0 = mysql_query("SELECT poradie FROM data WHERE id = '".$pole['id']."' ");
       $zaznam0 = MySQL_Fetch_Array($query0);
       if ($zaznam0['poradie'] != $pole['poradie']){ $pisalek .= rob_poradie($pole['id'],$pole['poradie'],0);   }
       
       // samotny UPDATE 
       $query1 = "UPDATE data 
                  SET   name = '".$pole['name']."',
                        link = '".$pole['link']."',
                        description = '".$pole['description']."',
                        folder_id = '".$pole['folder_id']."',
                        poradie = '".$pole['poradie']."',
                        date_upravene = '".$act_date."'
                      
                  WHERE id='".$pole['id']."' ";
                  $pisalek .= $query1;
       mysql_query($query1);           
   }
   if($_REQUEST['akcia']=='novy'){  
      $pisalek .= '<h2> zapisujeme novy </h2>';
      
      // zistit, ci sa meni poradie, ak ano pustime poradovnik 
      $query0 = mysql_query("SELECT poradie FROM data WHERE id = '".$pole['id']."' ");
      $zaznam0 = MySQL_Fetch_Array($query0);
      if ($zaznam0['poradie'] != $pole['poradie']){ $pisalek .= rob_poradie($pole['id'],$pole['poradie'],1);   }
      
      $query1 = "INSERT INTO data(name,link,description,folder_id,poradie,date_vytvorene )
                 VALUES ('".$pole['name']."','".$pole['link']."','".$pole['description']."','".$pole['folder_id']."','".$pole['poradie']."','$act_date') ";  
      $pisalek .= $query1;
      mysql_query($query1);  
   }
   if($_REQUEST['akcia']=='ZMAZ'){  
      $pisalek .= '<h2> Mazeme!!! </h2>';
      $query1 = "DELETE FROM data WHERE id='".$pole['id']."' ";
      $pisalek .= $query1;
      mysql_query($query1);
   }
   
   //list($kluc, $val) = each($pole);
   
   // log 
   
   return $pisalek;
   
}

function rob_poradie($id_poradie,$nove_poradie,$new){
                 
                 
                 $query0 = mysql_query("SELECT poradie,folder_id FROM data WHERE id='".$id_poradie."' ");
                 $zaznam0 = MySQL_Fetch_Array($query0);
 
                 // zistujeme, ci sa posuva vyssie / nizsie 
                 if ( $zaznam0['poradie'] > $nove_poradie){
                          $query1 = "UPDATE data SET poradie = poradie+1 WHERE folder_id = '".$zaznam0['folder_id']."' AND poradie >= '".$nove_poradie."' AND poradie <= '".$zaznam0['poradie']."' "; }
                 else {   $query1 = "UPDATE data SET poradie = poradie-1 WHERE folder_id = '".$zaznam0['folder_id']."' AND poradie <= '".$nove_poradie."' AND poradie > '".$zaznam0['poradie']."' "; }
                 $query2 = "UPDATE data SET poradie = '".$nove_poradie."' WHERE id = '".$id_poradie."';  ";
                 mysql_query($query1);
                 mysql_query($query2);
                 
                 // ziztime, kto je na novom poradi 
                 $query3 = mysql_query("SELECT id FROM data WHERE poradie='".$zaznam0['poradie']."' and folder_id = '".$zaznam0['folder_id']."'; ");
                 $zaznam3 = MySQL_Fetch_Array($query3);
                 
                
                 $ppisalek = $query0.'<br />'.$query1.'<br />'.$query2.'<br />'.$query3.'<br />';
                 
                 // urobime jednorazove zvyraznenie presunutych prvookov - !pozor nezabudnut ho dat na koniec!  
                 $ppisalek .= "<script language='javascript'> 
                               document.getElementById('zaznam_".$id_poradie."').style.backgroundColor = 'chocolate';
                               document.getElementById('zaznam_".$zaznam3['id']."').style.backgroundColor = 'sienna'; 
                               </script>";                                 
                 // log 
                 return $ppisalek;
}


?>  