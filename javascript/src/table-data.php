     <?php
      $arr = file_get_contents("https://api.betsapi.com/v1/events/inplay?token=1188-AHVDIRogXLjsQx&sport_id=1");
      $arr = json_decode($arr, true);
      for ($i = 0; $i < count($arr['results']); $i++) {
//        $time = $arr['results'][$i]['timer']['tm'];
        echo "<tbody class='can-bulb' id='".$arr['results'][$i]['id']."'><tr id='".$arr['results'][$i]['id']."'><td class='time'>".$arr['results'][$i]['timer']['tm']."'</td><td class='score' style='text-align: center;'><span class='score_home' style='display: inline-block;' id='scoreh".$arr['results'][$i]['id']."'>".$arr['results'][$i]['scores']['2']['home']."</span> : <span class='score_away' id='scorea".$arr['results'][$i]['id']."' style='display: inline-block'>".$arr['results'][$i]['scores']['2']['away']."</span>";
        $trend = file_get_contents("https://api.betsapi.com/v1/event/stats_trend?token=1188-AHVDIRogXLjsQx&event_id=".$arr['results'][$i]['id']);
        $trend = json_decode($trend, true);  
        
        if (isset($trend['results']['goals']['home'][0]['time_str']) ) {
          echo "<div class='mdl-tooltip' data-mdl-for='scoreh".$arr['results'][$i]['id']."'>";
          for ($c = 0; $c < count($trend['results']['goals']['home']); $c++) {
            echo "".$trend['results']['goals']['home'][$c]['time_str']."' ";
          }; 
          echo "</div>";    
        }
        if (isset($trend['results']['goals']['away'][0]['time_str']) ) {
          echo "<div class='mdl-tooltip' data-mdl-for='scorea".$arr['results'][$i]['id']."'>";
          for ($c = 0; $c < count($trend['results']['goals']['away']); $c++) {
            echo "".$trend['results']['goals']['away'][$c]['time_str']."' ";
          }; 
          echo "</div>";    
        }
        $od = $arr['results'][$i]['scores']['2']['home'] + $arr['results'][$i]['scores']['2']['away'] + 0.5;
        echo "</td><td class='small_screen_event'><a href='game-stats.php?id=".$arr['results'][$i]['id']."' id='info".$arr['results'][$i]['id']."'><span class='home_name' style='display: inline-block'>".$arr['results'][$i]['home']['name']."</span><span class='away_name' style='display: inline-block'>".$arr['results'][$i]['away']['name']."</span></a><div class='mdl-tooltip' data-mdl-for='info".$arr['results'][$i]['id']."'>Game info</div></td>"; 
        $odd = file_get_contents("https://api.betsapi.com/v1/event/odds/summary?token=1188-AHVDIRogXLjsQx&event_id=".$arr['results'][$i]['id']);
        $odd = json_decode($odd, true);
        echo "<td class='small_screen_hidden home_od'>".$odd['results']['Bet365']['end']['1_1']['home_od']."</td><td class='small_screen_hidden draw_od'>".$odd['results']['Bet365']['end']['1_1']['draw_od']."</td><td class='small_screen_hidden away_od'>".$odd['results']['Bet365']['end']['1_1']['away_od']."</td><td id='under_od".$arr['results'][$i]['id']."' class='small_screen_hidden under_od'>".$odd['results']['Bet365']['end']['1_3']['under_od']."</td><td id='over_od".$arr['results'][$i]['id']."' class='small_screen_hidden over_od'>".$odd['results']['Bet365']['end']['1_3']['over_od']."</td>"; 
        $stats = file_get_contents("https://api.betsapi.com/v1/event/view?token=1188-AHVDIRogXLjsQx&event_id=".$arr['results'][$i]['id']);
        $stats = json_decode($stats, true);
        echo "<td class='small_screen_hidden'><span class='on_target_home' id='onth".$arr['results'][$i]['id']."'>".$stats['results'][0]['stats']['on_target'][0]."</span><span class='on_target_away' id='onta".$arr['results'][$i]['id']."'>".$stats['results'][0]['stats']['on_target'][1]."</span><div class='mdl-tooltip' data-mdl-for='onth".$arr['results'][$i]['id']."'>"; 
        $trend = file_get_contents("https://api.betsapi.com/v1/event/stats_trend?token=1188-AHVDIRogXLjsQx&event_id=".$arr['results'][$i]['id']);
        $trend = json_decode($trend, true);   
        if ( isset($trend['results']['on_target']['home'][0]['val']) ) {
          for ($c = 0; $c < count($trend['results']['on_target']['home']); $c++) {
            if ($trend['results']['on_target']['home'][$c]['val'] !== $trend['results']['on_target']['home'][$c - 1]['val']) {
              echo " ".$trend['results']['on_target']['home'][$c]['time_str']."' ";
            }
            if ($trend['results']['on_target']['home'][$c]['val'] - $trend['results']['on_target']['home'][$c - 1]['val'] > 1) {
              echo " ".$trend['results']['on_target']['home'][$c]['time_str']."' ";                            
            }
          };                          
        }; 
        if ( empty($trend['results']['on_target']['home'][0]['val']) ) {
          echo "No data yet.";                          
        };     
        echo "</div><div class='mdl-tooltip' data-mdl-for='onta".$arr['results'][$i]['id']."'>";
        if ( isset($trend['results']['on_target']['away'][0]['val']) ) {
          for ($c = 0; $c < count($trend['results']['on_target']['away']); $c++) {
            if ($trend['results']['on_target']['away'][$c]['val'] !== $trend['results']['on_target']['away'][$c - 1]['val']) {
              echo " ".$trend['results']['on_target']['away'][$c]['time_str']."' ";
            }
            if ($trend['results']['on_target']['away'][$c]['val'] - $trend['results']['on_target']['away'][$c - 1]['val'] > 1) {
              echo " ".$trend['results']['on_target']['away'][$c]['time_str']."' ";                            
            }
          };                          
        }; 
        if ( empty($trend['results']['on_target']['away'][0]['val']) ) {
          echo "No data yet.";                          
        }; 
        echo "</div></td><td class='small_screen_hidden'><span class='off_target_home' id='ofth".$arr['results'][$i]['id']."'>".$stats['results'][0]['stats']['off_target'][0]."</span><span class='off_target_away' id='ofta".$arr['results'][$i]['id']."'>".$stats['results'][0]['stats']['off_target'][1]."</span><div class='mdl-tooltip' data-mdl-for='ofth".$arr['results'][$i]['id']."'>"; 
        if ( isset($trend['results']['off_target']['home'][0]['val']) ) {
          for ($c = 0; $c < count($trend['results']['off_target']['home']); $c++) {
            if ($trend['results']['off_target']['home'][$c]['val'] !== $trend['results']['off_target']['home'][$c - 1]['val']) {
              echo " ".$trend['results']['off_target']['home'][$c]['time_str']."' ";
            }
            if ($trend['results']['off_target']['home'][$c]['val'] - $trend['results']['off_target']['home'][$c - 1]['val'] > 1) {
              echo " ".$trend['results']['off_target']['home'][$c]['time_str']."' ";                            
            }
          };                          
        }; 
        if ( empty($trend['results']['off_target']['home'][0]['val']) ) {
          echo "No data yet.";                          
        };     
        echo "</div><div class='mdl-tooltip' data-mdl-for='ofta".$arr['results'][$i]['id']."'>";
        if ( isset($trend['results']['off_target']['away'][0]['val']) ) {
          for ($c = 0; $c < count($trend['results']['off_target']['away']); $c++) {
            if ($trend['results']['off_target']['away'][$c]['val'] !== $trend['results']['off_target']['away'][$c - 1]['val']) {
              echo " ".$trend['results']['off_target']['away'][$c]['time_str']."' ";
            }
            if ($trend['results']['off_target']['away'][$c]['val'] - $trend['results']['off_target']['away'][$c - 1]['val'] > 1) {
              echo " ".$trend['results']['off_target']['away'][$c]['time_str']."' ";                            
            }
          };                          
        }; 
        if ( empty($trend['results']['off_target']['away'][0]['val']) ) {
          echo "No data yet.";                          
        }; 
        echo "</div></td>"; 
        
        if (empty($stats['results'][0]['stats']['corners'][0])) {
          echo "<td class='small_screen_hidden'><span class='corners_home'>0</span><span class='corners_away'>0</span></td>";
        } else {
          echo "<td class='small_screen_hidden'><span class='corners_home' id='ch".$arr['results'][$i]['id']."'>".$stats['results'][0]['stats']['corners'][0]."</span><span class='corners_away' id='ca".$arr['results'][$i]['id']."'>".$stats['results'][0]['stats']['corners'][1]."</span><div class='mdl-tooltip' data-mdl-for='ch".$arr['results'][$i]['id']."'>";
          
          if ( isset($trend['results']['corners']['home'][0]['val']) ) {
            for ($c = 0; $c < count($trend['results']['corners']['home']); $c++) {
              if ($trend['results']['corners']['home'][$c]['val'] !== $trend['results']['corners']['home'][$c - 1]['val']) {
                echo " ".$trend['results']['corners']['home'][$c]['time_str']."' ";
              }
              if ($trend['results']['corners']['home'][$c]['val'] - $trend['results']['corners']['home'][$c - 1]['val'] > 1) {
                echo " ".$trend['results']['corners']['home'][$c]['time_str']."' ";                            
              }
            };                          
          }; 
          if ( empty($trend['results']['corners']['home'][0]['val']) ) {
            echo "No data yet.";                          
          };     
          echo "</div><div class='mdl-tooltip' data-mdl-for='ca".$arr['results'][$i]['id']."'>";
          if ( isset($trend['results']['corners']['away'][0]['val']) ) {
            for ($c = 0; $c < count($trend['results']['corners']['away']); $c++) {
              if ($trend['results']['corners']['away'][$c]['val'] !== $trend['results']['corners']['away'][$c - 1]['val']) {
                echo " ".$trend['results']['corners']['away'][$c]['time_str']."' ";
              }
              if ($trend['results']['corners']['away'][$c]['val'] - $trend['results']['corners']['away'][$c - 1]['val'] > 1) {
                echo " ".$trend['results']['corners']['away'][$c]['time_str']."' ";                            
              }
            };                          
          }; 
          if ( empty($trend['results']['corners']['away'][0]['val']) ) {
            echo "No data yet.";                          
          }; 
          echo "</div></td>";
          
        }; 
        if (empty($stats['results'][0]['stats']['penalties'][0])) {
          echo "<td class='small_screen_hidden'><span class='penalties_home'>0</span><span class='penalties_away'>0</span></td>";
        } else {                        
          echo "<td class='small_screen_hidden'><span class='penalties_home' id='ph".$arr['results'][$i]['id']."'>".$stats['results'][0]['stats']['penalties'][0]."</span><span class='penalties_away' id='pa".$arr['results'][$i]['id']."'>".$stats['results'][0]['stats']['penalties'][1]."</span><div class='mdl-tooltip' data-mdl-for='ph".$arr['results'][$i]['id']."'>";
          
          if ( isset($trend['results']['penalties']['home'][0]['val']) ) {
            for ($c = 0; $c < count($trend['results']['penalties']['home']); $c++) {
              if ($trend['results']['penalties']['home'][$c]['val'] !== $trend['results']['penalties']['home'][$c - 1]['val']) {
                echo " ".$trend['results']['penalties']['home'][$c]['time_str']."' ";
              }
              if ($trend['results']['penalties']['home'][$c]['val'] - $trend['results']['penalties']['home'][$c - 1]['val'] > 1) {
                echo " ".$trend['results']['penalties']['home'][$c]['time_str']."' ";                            
              }
            };                          
          }; 
          if ( empty($trend['results']['penalties']['home'][0]['val']) ) {
            echo "No data yet.";                          
          };     
          echo "</div><div class='mdl-tooltip' data-mdl-for='pa".$arr['results'][$i]['id']."'>";
          if ( isset($trend['results']['penalties']['away'][0]['val']) ) {
            for ($c = 0; $c < count($trend['results']['penalties']['away']); $c++) {
              if ($trend['results']['penalties']['away'][$c]['val'] !== $trend['results']['penalties']['away'][$c - 1]['val']) {
                echo " ".$trend['results']['penalties']['away'][$c]['time_str']."' ";
              }
              if ($trend['results']['penalties']['away'][$c]['val'] - $trend['results']['penalties']['away'][$c - 1]['val'] > 1) {
                echo " ".$trend['results']['penalties']['away'][$c]['time_str']."' ";                            
              }
            };                          
          }; 
          if ( empty($trend['results']['penalties']['away'][0]['val']) ) {
            echo "No data yet.";                          
          }; 
          echo "</div></td>";
          
        };
        if (empty($stats['results'][0]['stats']['redcards'][0])) {
          echo "<td class='small_screen_hidden'><span class='redcards_home'>0</span><span class='redcards_away'>0</span></td>";
        } else {                                              
          echo "<td class='small_screen_hidden'><span class='redcards_home' id='rch".$arr['results'][$i]['id']."'>".$stats['results'][0]['stats']['redcards'][0]."</span><span class='redcards_away' id='rca".$arr['results'][$i]['id']."'>".$stats['results'][0]['stats']['redcards'][1]."</span><div class='mdl-tooltip' data-mdl-for='rch".$arr['results'][$i]['id']."'>";
          
          if ( isset($trend['results']['redcards']['home'][0]['val']) ) {
            for ($c = 0; $c < count($trend['results']['redcards']['home']); $c++) {
              if ($trend['results']['redcards']['home'][$c]['val'] !== $trend['results']['redcards']['home'][$c - 1]['val']) {
                echo " ".$trend['results']['redcards']['home'][$c]['time_str']."' ";
              }
              if ($trend['results']['redcards']['home'][$c]['val'] - $trend['results']['redcards']['home'][$c - 1]['val'] > 1) {
                echo " ".$trend['results']['redcards']['home'][$c]['time_str']."' ";                            
              }
            };                          
          }; 
          if ( empty($trend['results']['redcards']['home'][0]['val']) ) {
            echo "No data yet.";                          
          };     
          echo "</div><div class='mdl-tooltip' data-mdl-for='rca".$arr['results'][$i]['id']."'>";
          if ( isset($trend['results']['redcards']['away'][0]['val']) ) {
            for ($c = 0; $c < count($trend['results']['redcards']['away']); $c++) {
              if ($trend['results']['redcards']['away'][$c]['val'] !== $trend['results']['redcards']['away'][$c - 1]['val']) {
                echo " ".$trend['results']['redcards']['away'][$c]['time_str']."' ";
              }
              if ($trend['results']['redcards']['away'][$c]['val'] - $trend['results']['redcards']['away'][$c - 1]['val'] > 1) {
                echo " ".$trend['results']['redcards']['away'][$c]['time_str']."' ";                            
              }
            };                          
          }; 
          if ( empty($trend['results']['redcards']['away'][0]['val']) ) {
            echo "No data yet.";                          
          }; 
          echo "</div></td>";
          
        };
        if (empty($stats['results'][0]['stats']['yellowcards'][0])) {
          echo "<td class='small_screen_hidden'><span class='yellowcards_home'>0</span><span class='yellowcards_away'>0</span></td>";
        } else {                        
          echo "<td class='small_screen_hidden'><span class='yellowcards_home' id='ych".$arr['results'][$i]['id']."'>".$stats['results'][0]['stats']['yellowcards'][0]."</span><span class='yellowcards_away' id='yca".$arr['results'][$i]['id']."'>".$stats['results'][0]['stats']['yellowcards'][1]."</span><div class='mdl-tooltip' data-mdl-for='ych".$arr['results'][$i]['id']."'>";                        
          if ( isset($trend['results']['yellowcards']['home'][0]['val']) ) {
            for ($c = 0; $c < count($trend['results']['yellowcards']['home']); $c++) {
              if ($trend['results']['yellowcards']['home'][$c]['val'] !== $trend['results']['yellowcards']['home'][$c - 1]['val']) {
                echo " ".$trend['results']['yellowcards']['home'][$c]['time_str']."' ";
              }
              if ($trend['results']['yellowcards']['home'][$c]['val'] - $trend['results']['yellowcards']['home'][$c - 1]['val'] > 1) {
                echo " ".$trend['results']['yellowcards']['home'][$c]['time_str']."' ";                            
              }
            };                          
          }; 
          if ( empty($trend['results']['yellowcards']['home'][0]['val']) ) {
            echo "No data yet.";                          
          };     
          echo "</div><div class='mdl-tooltip' data-mdl-for='yca".$arr['results'][$i]['id']."'>";
          if ( isset($trend['results']['yellowcards']['away'][0]['val']) ) {
            for ($c = 0; $c < count($trend['results']['yellowcards']['away']); $c++) {
              if ($trend['results']['yellowcards']['away'][$c]['val'] !== $trend['results']['yellowcards']['away'][$c - 1]['val']) {
                echo " ".$trend['results']['yellowcards']['away'][$c]['time_str']."' ";
              }
              if ($trend['results']['yellowcards']['away'][$c]['val'] - $trend['results']['yellowcards']['away'][$c - 1]['val'] > 1) {
                echo " ".$trend['results']['yellowcards']['away'][$c]['time_str']."' ";                            
              }
            };                          
          }; 
          if ( empty($trend['results']['yellowcards']['away'][0]['val']) ) {
            echo "No data yet.";                          
          }; 
          echo "</div></td>";
          
        };
        echo "<td class='small_screen_hidden'><span class='dangerous_attacks_home'>".$stats['results'][0]['stats']['dangerous_attacks'][0]."</span><span class='dangerous_attacks_away'>".$stats['results'][0]['stats']['dangerous_attacks'][1]."</span></td>";                       
        if (empty($stats['results'][0]['stats']['possession_rt'][0])) {
          echo "<td class='possession_rt small_screen_hidden' id='tpos".$arr['results'][$i]['id']."'>No data</td>";
        } else {
          echo "<td class='possession_rt small_screen_hidden'><span class='possession_rt_home'>".$stats['results'][0]['stats']['possession_rt'][0]."</span><span class='possession_rt_away'>".$stats['results'][0]['stats']['possession_rt'][1]."</span></td>"; 
        };
        
//        PI 
        $pih = 0; 
        $pia = 0; 
        $tp = $arr['results'][$i]['timer']['tm'];
        $trend = 0;
        $trend = file_get_contents("https://api.betsapi.com/v1/event/stats_trend?token=1188-AHVDIRogXLjsQx&event_id=".$arr['results'][$i]['id']);
        $trend = json_decode($trend, true);   
        if (isset($trend['results']['dangerous_attacks']['home'][0]['val']) ) {   
          for ($c = 0; $c < count($trend['results']['dangerous_attacks']['home']); $c++) { 
            $dah = $trend['results']['dangerous_attacks']['home'][$c]['val'];
            $dahc = count($trend['results']['dangerous_attacks']['home']);
            $dah10 = 0;
            if ($trend['results']['dangerous_attacks']['home'][$dahc - 1]['time_str'] == $tp - 10) {
              $dah10 = $trend['results']['dangerous_attacks']['home'][$dahc - 1]['val'];                         
            }
            if ($trend['results']['dangerous_attacks']['home'][$dahc - 2]['time_str'] == $tp - 10) {
              $dah10 = $trend['results']['dangerous_attacks']['home'][$dahc - 2]['val'];                         
            }
            if ($trend['results']['dangerous_attacks']['home'][$dahc - 3]['time_str'] == $tp - 10) {
              $dah10 = $trend['results']['dangerous_attacks']['home'][$dahc - 3]['val'];                          
            }
            if ($trend['results']['dangerous_attacks']['home'][$dahc - 4]['time_str'] == $tp - 10) {
              $dah10 = $trend['results']['dangerous_attacks']['home'][$dahc - 4]['val'];                       
            }
            if ($trend['results']['dangerous_attacks']['home'][$dahc - 5]['time_str'] == $tp - 10) {
              $dah10 = $trend['results']['dangerous_attacks']['home'][$dahc - 5]['val'];                     
            }
            if ($trend['results']['dangerous_attacks']['home'][$dahc - 6]['time_str'] == $tp - 10) {
              $dah10 = $trend['results']['dangerous_attacks']['home'][$dahc - 6]['val'];
            }
            if ($trend['results']['dangerous_attacks']['home'][$dahc - 7]['time_str'] == $tp - 10) {
              $dah10 = $trend['results']['dangerous_attacks']['home'][$dahc - 7]['val'];                          
            }
            if ($trend['results']['dangerous_attacks']['home'][$dahc - 8]['time_str'] == $tp - 10) {
              $dah10 = $trend['results']['dangerous_attacks']['home'][$dahc - 8]['val'];                       
            }
            if ($trend['results']['dangerous_attacks']['home'][$dahc - 9]['time_str'] == $tp - 10) {
              $dah10 = $trend['results']['dangerous_attacks']['home'][$dahc - 9]['val'];                     
            }
            if ($trend['results']['dangerous_attacks']['home'][$dahc - 10]['time_str'] == $tp - 10) {
              $dah10 = $trend['results']['dangerous_attacks']['home'][$dahc - 10]['val'];                     
            }
            if ($trend['results']['dangerous_attacks']['home'][$dahc - 11]['time_str'] == $tp - 10) {
              $dah10 = $trend['results']['dangerous_attacks']['home'][$dahc - 11]['val'];                     
            }
            if ($trend['results']['dangerous_attacks']['home'][$dahc - 12]['time_str'] == $tp - 10) {
              $dah10 = $trend['results']['dangerous_attacks']['home'][$dahc - 12]['val'];                     
            }
            if ($trend['results']['dangerous_attacks']['home'][$dahc - 13]['time_str'] == $tp - 10) {
              $dah10 = $trend['results']['dangerous_attacks']['home'][$dahc - 13]['val'];                     
            }
            if ($trend['results']['dangerous_attacks']['home'][$dahc - 14]['time_str'] == $tp - 10) {
              $dah10 = $trend['results']['dangerous_attacks']['home'][$dahc - 14]['val'];                     
            }
            if ($trend['results']['dangerous_attacks']['home'][$dahc - 15]['time_str'] == $tp - 10) {
              $dah10 = $trend['results']['dangerous_attacks']['home'][$dahc - 15]['val'];                     
            }
            if ($tp < 11) {
              $dah = $trend['results']['dangerous_attacks']['home'][$c]['val'];
              $dah10 = 0;
            }
          };
          $dah = $dah - $dah10;
        }                       
        elseif (empty($trend['results']['dangerous_attacks']['home'][0]['val'])) {
          $dah = 0;
        };
        if (isset($trend['results']['on_target']['home'][0]['val']) ) {   
          for ($c = 0; $c < count($trend['results']['on_target']['home']); $c++) { 
            $onth = $trend['results']['on_target']['home'][$c]['val'];
            $onthc = 0;
            $onthc = count($trend['results']['on_target']['home']);
            $onth10 = 0;
            if ($trend['results']['on_target']['home'][$onthc - 1]['time_str'] == $tp - 10) {
              $onth10 = $trend['results']['on_target']['home'][$onthc - 1]['val'];                         
            }
            if ($trend['results']['on_target']['home'][$onthc - 2]['time_str'] == $tp - 10) {
              $onth10 = $trend['results']['on_target']['home'][$onthc - 2]['val'];                         
            }
            if ($trend['results']['on_target']['home'][$onthc - 3]['time_str'] == $tp - 10) {
              $onth10 = $trend['results']['on_target']['home'][$onthc - 3]['val'];                          
            }
            if ($trend['results']['on_target']['home'][$onthc - 4]['time_str'] == $tp - 10) {
              $onth10 = $trend['results']['on_target']['home'][$onthc - 4]['val'];                       
            }
            if ($trend['results']['on_target']['home'][$onthc - 5]['time_str'] == $tp - 10) {
              $onth10 = $trend['results']['on_target']['home'][$onthc - 5]['val'];                     
            }
            if ($trend['results']['on_target']['home'][$onthc - 6]['time_str'] == $tp - 10) {
              $onth10 = $trend['results']['on_target']['home'][$onthc - 6]['val'];
            }
            if ($trend['results']['on_target']['home'][$onthc - 7]['time_str'] == $tp - 10) {
              $onth10 = $trend['results']['on_target']['home'][$onthc - 7]['val'];                          
            }
            if ($trend['results']['on_target']['home'][$onthc - 8]['time_str'] == $tp - 10) {
              $onth10 = $trend['results']['on_target']['home'][$onthc - 8]['val'];                       
            }
            if ($trend['results']['on_target']['home'][$onthc - 9]['time_str'] == $tp - 10) {
              $onth10 = $trend['results']['on_target']['home'][$onthc - 9]['val'];                     
            }
            if ($trend['results']['on_target']['home'][$onthc - 10]['time_str'] == $tp - 10) {
              $onth10 = $trend['results']['on_target']['home'][$onthc - 10]['val'];                     
            }
            if ($trend['results']['on_target']['home'][$onthc - 11]['time_str'] == $tp - 10) {
              $onth10 = $trend['results']['on_target']['home'][$onthc - 11]['val'];                     
            }
            if ($trend['results']['on_target']['home'][$onthc - 12]['time_str'] == $tp - 10) {
              $onth10 = $trend['results']['on_target']['home'][$onthc - 12]['val'];                     
            }
            if ($trend['results']['on_target']['home'][$onthc - 13]['time_str'] == $tp - 10) {
              $onth10 = $trend['results']['on_target']['home'][$onthc - 13]['val'];                     
            }
            if ($trend['results']['on_target']['home'][$onthc - 14]['time_str'] == $tp - 10) {
              $onth10 = $trend['results']['on_target']['home'][$onthc - 14]['val'];                     
            }
            if ($trend['results']['on_target']['home'][$onthc - 15]['time_str'] == $tp - 10) {
              $onth10 = $trend['results']['on_target']['home'][$onthc - 15]['val'];                     
            }
            if ($tp < 11) {
              $onth = $trend['results']['on_target']['home'][$c]['val'];
              $onth10 = 0;
            }
          };
          $onth = $onth - $onth10;
        }                       
        elseif (empty($trend['results']['on_target']['home'][0]['val'])) {
          $onth = 0;
        };
        if (isset($trend['results']['off_target']['home'][0]['val']) ) {   
          for ($c = 0; $c < count($trend['results']['off_target']['home']); $c++) { 
            $ofth = $trend['results']['off_target']['home'][$c]['val'];
            $ofthc = 0;
            $ofthc = count($trend['results']['off_target']['home']);
            $ofth10 = 0;
            if ($trend['results']['off_target']['home'][$ofthc - 1]['time_str'] == $tp - 10) {
              $ofth10 = $trend['results']['off_target']['home'][$ofthc - 1]['val'];                         
            }
            if ($trend['results']['off_target']['home'][$ofthc - 2]['time_str'] == $tp - 10) {
              $ofth10 = $trend['results']['off_target']['home'][$ofthc - 2]['val'];                         
            }
            if ($trend['results']['off_target']['home'][$ofthc - 3]['time_str'] == $tp - 10) {
              $ofth10 = $trend['results']['off_target']['home'][$ofthc - 3]['val'];                          
            }
            if ($trend['results']['off_target']['home'][$ofthc - 4]['time_str'] == $tp - 10) {
              $ofth10 = $trend['results']['off_target']['home'][$ofthc - 4]['val'];                       
            }
            if ($trend['results']['off_target']['home'][$ofthc - 5]['time_str'] == $tp - 10) {
              $ofth10 = $trend['results']['off_target']['home'][$ofthc - 5]['val'];                     
            }
            if ($trend['results']['off_target']['home'][$ofthc - 6]['time_str'] == $tp - 10) {
              $ofth10 = $trend['results']['off_target']['home'][$ofthc - 6]['val'];
            }
            if ($trend['results']['off_target']['home'][$ofthc - 7]['time_str'] == $tp - 10) {
              $ofth10 = $trend['results']['off_target']['home'][$ofthc - 7]['val'];                          
            }
            if ($trend['results']['off_target']['home'][$ofthc - 8]['time_str'] == $tp - 10) {
              $ofth10 = $trend['results']['off_target']['home'][$ofthc - 8]['val'];                       
            }
            if ($trend['results']['off_target']['home'][$ofthc - 9]['time_str'] == $tp - 10) {
              $ofth10 = $trend['results']['off_target']['home'][$ofthc - 9]['val'];                     
            }
            if ($trend['results']['off_target']['home'][$ofthc - 10]['time_str'] == $tp - 10) {
              $ofth10 = $trend['results']['off_target']['home'][$ofthc - 10]['val'];                     
            }
            if ($trend['results']['off_target']['home'][$ofthc - 11]['time_str'] == $tp - 10) {
              $ofth10 = $trend['results']['off_target']['home'][$ofthc - 11]['val'];                     
            }
            if ($trend['results']['off_target']['home'][$ofthc - 12]['time_str'] == $tp - 10) {
              $ofth10 = $trend['results']['off_target']['home'][$ofthc - 12]['val'];                     
            }
            if ($trend['results']['off_target']['home'][$ofthc - 13]['time_str'] == $tp - 10) {
              $ofth10 = $trend['results']['off_target']['home'][$ofthc - 13]['val'];                     
            }
            if ($trend['results']['off_target']['home'][$ofthc - 14]['time_str'] == $tp - 10) {
              $ofth10 = $trend['results']['off_target']['home'][$ofthc - 14]['val'];                     
            }
            if ($trend['results']['off_target']['home'][$ofthc - 15]['time_str'] == $tp - 10) {
              $ofth10 = $trend['results']['off_target']['home'][$ofthc - 15]['val'];                     
            }
            if ($tp < 11) {
              $ofth = $trend['results']['off_target']['home'][$c]['val'];
              $ofth10 = 0;
            }
          };
          $ofth = $ofth - $ofth10;
        }                       
        elseif (empty($trend['results']['off_target']['home'][0]['val'])) {
          $ofth = 0;
        };    
        if (isset($trend['results']['corners']['home'][0]['val']) ) {   
          $cth = [];
          for ($c = 0; $c < count($trend['results']['corners']['home']); $c++) { 
            if ($trend['results']['corners']['home'][$c]['time_str'] >= $tp - 10) {
              array_push($cth, $trend['results']['corners']['home'][$c]['value']);
            }
          }
          $cth10 = count($cth);
        }
        elseif (empty($trend['results']['corners']['home'][0]['val'])) {
          $cth10 = 0;
        };
        $prh10 = $stats['results'][0]['stats']['possession_rt'][0];
        if (empty($stats['results'][0]['stats']['possession_rt'][0])) {
          $prh10 = 0;
        }
        $pih = $dah*1.5 + $ofth*10 + $onth*10 + $cth10*2;
        echo "<td class='pressure_rt table_border_right'><span id='pih".$arr['results'][$i]['id']."' class='pressure_indicator'></span><span class='pressure_indicator_home'>".$pih."</span>"; 
        if (isset($trend['results']['dangerous_attacks']['away'][0]['val']) ) {   
          for ($c = 0; $c < count($trend['results']['dangerous_attacks']['away']); $c++) { 
            $daa = $trend['results']['dangerous_attacks']['away'][$c]['val'];
            $daac = count($trend['results']['dangerous_attacks']['away']);
            $daa10 = 0;
            if ($trend['results']['dangerous_attacks']['away'][$daac - 1]['time_str'] == $tp - 10) {
              $daa10 = $trend['results']['dangerous_attacks']['away'][$daac - 1]['val'];                         
            }
            if ($trend['results']['dangerous_attacks']['away'][$daac - 2]['time_str'] == $tp - 10) {
              $daa10 = $trend['results']['dangerous_attacks']['away'][$daac - 2]['val'];                         
            }
            if ($trend['results']['dangerous_attacks']['away'][$daac - 3]['time_str'] == $tp - 10) {
              $daa10 = $trend['results']['dangerous_attacks']['away'][$daac - 3]['val'];                          
            }
            if ($trend['results']['dangerous_attacks']['away'][$daac - 4]['time_str'] == $tp - 10) {
              $daa10 = $trend['results']['dangerous_attacks']['away'][$daac - 4]['val'];                       
            }
            if ($trend['results']['dangerous_attacks']['away'][$daac - 5]['time_str'] == $tp - 10) {
              $daa10 = $trend['results']['dangerous_attacks']['away'][$daac - 5]['val'];                     
            }
            if ($trend['results']['dangerous_attacks']['away'][$daac - 6]['time_str'] == $tp - 10) {
              $daa10 = $trend['results']['dangerous_attacks']['away'][$daac - 6]['val'];
            }
            if ($trend['results']['dangerous_attacks']['away'][$daac - 7]['time_str'] == $tp - 10) {
              $daa10 = $trend['results']['dangerous_attacks']['away'][$daac - 7]['val'];                          
            }
            if ($trend['results']['dangerous_attacks']['away'][$daac - 8]['time_str'] == $tp - 10) {
              $daa10 = $trend['results']['dangerous_attacks']['away'][$daac - 8]['val'];                       
            }
            if ($trend['results']['dangerous_attacks']['away'][$daac - 9]['time_str'] == $tp - 10) {
              $daa10 = $trend['results']['dangerous_attacks']['away'][$daac - 9]['val'];                     
            }
            if ($trend['results']['dangerous_attacks']['away'][$daac - 10]['time_str'] == $tp - 10) {
              $daa10 = $trend['results']['dangerous_attacks']['away'][$daac - 10]['val'];                     
            }
            if ($trend['results']['dangerous_attacks']['away'][$daac - 11]['time_str'] == $tp - 10) {
              $daa10 = $trend['results']['dangerous_attacks']['away'][$daac - 11]['val'];                     
            }
            if ($trend['results']['dangerous_attacks']['away'][$daac - 12]['time_str'] == $tp - 10) {
              $daa10 = $trend['results']['dangerous_attacks']['away'][$daac - 12]['val'];                     
            }
            if ($trend['results']['dangerous_attacks']['away'][$daac - 13]['time_str'] == $tp - 10) {
              $daa10 = $trend['results']['dangerous_attacks']['away'][$daac - 13]['val'];                     
            }
            if ($trend['results']['dangerous_attacks']['away'][$daac - 14]['time_str'] == $tp - 10) {
              $daa10 = $trend['results']['dangerous_attacks']['away'][$daac - 14]['val'];                     
            }
            if ($trend['results']['dangerous_attacks']['away'][$daac - 15]['time_str'] == $tp - 10) {
              $daa10 = $trend['results']['dangerous_attacks']['away'][$daac - 15]['val'];                     
            }
            if ($tp < 11) {
              $daa = $trend['results']['dangerous_attacks']['away'][$c]['val'];
              $daa10 = 0;
            }
          };
          $daa = $daa - $daa10;
        }                       
        elseif (empty($trend['results']['dangerous_attacks']['away'][0]['val'])) {
          $daa = 0;
        };
        if (isset($trend['results']['on_target']['away'][0]['val']) ) {   
          for ($c = 0; $c < count($trend['results']['on_target']['away']); $c++) { 
            $onta = $trend['results']['on_target']['away'][$c]['val'];
            $ontac = 0;
            $ontac = count($trend['results']['on_target']['away']);
            $onta10 = 0;
            if ($trend['results']['on_target']['away'][$ontac - 1]['time_str'] == $tp - 10) {
              $onta10 = $trend['results']['on_target']['away'][$ontac - 1]['val'];                         
            }
            if ($trend['results']['on_target']['away'][$ontac - 2]['time_str'] == $tp - 10) {
              $onta10 = $trend['results']['on_target']['away'][$ontac - 2]['val'];                         
            }
            if ($trend['results']['on_target']['away'][$ontac - 3]['time_str'] == $tp - 10) {
              $onta10 = $trend['results']['on_target']['away'][$ontac - 3]['val'];                          
            }
            if ($trend['results']['on_target']['away'][$ontac - 4]['time_str'] == $tp - 10) {
              $onta10 = $trend['results']['on_target']['away'][$ontac - 4]['val'];                       
            }
            if ($trend['results']['on_target']['away'][$ontac - 5]['time_str'] == $tp - 10) {
              $onta10 = $trend['results']['on_target']['away'][$ontac - 5]['val'];                     
            }
            if ($trend['results']['on_target']['away'][$ontac - 6]['time_str'] == $tp - 10) {
              $onta10 = $trend['results']['on_target']['away'][$ontac - 6]['val'];
            }
            if ($trend['results']['on_target']['away'][$ontac - 7]['time_str'] == $tp - 10) {
              $onta10 = $trend['results']['on_target']['away'][$ontac - 7]['val'];                          
            }
            if ($trend['results']['on_target']['away'][$ontac - 8]['time_str'] == $tp - 10) {
              $onta10 = $trend['results']['on_target']['away'][$ontac - 8]['val'];                       
            }
            if ($trend['results']['on_target']['away'][$ontac - 9]['time_str'] == $tp - 10) {
              $onta10 = $trend['results']['on_target']['away'][$ontac - 9]['val'];                     
            }
            if ($trend['results']['on_target']['away'][$ontac - 10]['time_str'] == $tp - 10) {
              $onta10 = $trend['results']['on_target']['away'][$ontac - 10]['val'];                     
            }
            if ($trend['results']['on_target']['away'][$ontac - 11]['time_str'] == $tp - 10) {
              $onta10 = $trend['results']['on_target']['away'][$ontac - 11]['val'];                     
            }
            if ($trend['results']['on_target']['away'][$ontac - 12]['time_str'] == $tp - 10) {
              $onta10 = $trend['results']['on_target']['away'][$ontac - 12]['val'];                     
            }
            if ($trend['results']['on_target']['away'][$ontac - 13]['time_str'] == $tp - 10) {
              $onta10 = $trend['results']['on_target']['away'][$ontac - 13]['val'];                     
            }
            if ($trend['results']['on_target']['away'][$ontac - 14]['time_str'] == $tp - 10) {
              $onta10 = $trend['results']['on_target']['away'][$ontac - 14]['val'];                     
            }
            if ($trend['results']['on_target']['away'][$ontac - 15]['time_str'] == $tp - 10) {
              $onta10 = $trend['results']['on_target']['away'][$ontac - 15]['val'];                     
            }
            if ($tp < 11) {
              $onta = $trend['results']['on_target']['away'][$c]['val'];
              $onta10 = 0;
            }
          };
          $onta = $onta - $onta10;
        }                       
        elseif (empty($trend['results']['on_target']['away'][0]['val'])) {
          $onta = 0;
        }; 
        if (isset($trend['results']['off_target']['away'][0]['val']) ) {   
          for ($c = 0; $c < count($trend['results']['off_target']['away']); $c++) { 
            $ofta = $trend['results']['off_target']['away'][$c]['val'];
            $oftac = 0;
            $oftac = count($trend['results']['off_target']['away']);
            $ofta10 = 0;
            if ($trend['results']['off_target']['away'][$oftac - 1]['time_str'] == $tp - 10) {
              $ofta10 = $trend['results']['off_target']['away'][$oftac - 1]['val'];                         
            }
            if ($trend['results']['off_target']['away'][$oftac - 2]['time_str'] == $tp - 10) {
              $ofta10 = $trend['results']['off_target']['away'][$oftac - 2]['val'];                         
            }
            if ($trend['results']['off_target']['away'][$oftac - 3]['time_str'] == $tp - 10) {
              $ofta10 = $trend['results']['off_target']['away'][$oftac - 3]['val'];                          
            }
            if ($trend['results']['off_target']['away'][$oftac - 4]['time_str'] == $tp - 10) {
              $ofta10 = $trend['results']['off_target']['away'][$oftac - 4]['val'];                       
            }
            if ($trend['results']['off_target']['away'][$oftac - 5]['time_str'] == $tp - 10) {
              $ofta10 = $trend['results']['off_target']['away'][$oftac - 5]['val'];                     
            }
            if ($trend['results']['off_target']['away'][$oftac - 6]['time_str'] == $tp - 10) {
              $ofta10 = $trend['results']['off_target']['away'][$oftac - 6]['val'];
            }
            if ($trend['results']['off_target']['away'][$oftac - 7]['time_str'] == $tp - 10) {
              $ofta10 = $trend['results']['off_target']['away'][$oftac - 7]['val'];                          
            }
            if ($trend['results']['off_target']['away'][$oftac - 8]['time_str'] == $tp - 10) {
              $ofta10 = $trend['results']['off_target']['away'][$oftac - 8]['val'];                       
            }
            if ($trend['results']['off_target']['away'][$oftac - 9]['time_str'] == $tp - 10) {
              $ofta10 = $trend['results']['off_target']['away'][$oftac - 9]['val'];                     
            }
            if ($trend['results']['off_target']['away'][$oftac - 10]['time_str'] == $tp - 10) {
              $ofta10 = $trend['results']['off_target']['away'][$oftac - 10]['val'];                     
            }
            if ($trend['results']['off_target']['away'][$oftac - 11]['time_str'] == $tp - 10) {
              $ofta10 = $trend['results']['off_target']['away'][$oftac - 11]['val'];                     
            }
            if ($trend['results']['off_target']['away'][$oftac - 12]['time_str'] == $tp - 10) {
              $ofta10 = $trend['results']['off_target']['away'][$oftac - 12]['val'];                     
            }
            if ($trend['results']['off_target']['away'][$oftac - 13]['time_str'] == $tp - 10) {
              $ofta10 = $trend['results']['off_target']['away'][$oftac - 13]['val'];                     
            }
            if ($trend['results']['off_target']['away'][$oftac - 14]['time_str'] == $tp - 10) {
              $ofta10 = $trend['results']['off_target']['away'][$oftac - 14]['val'];                     
            }
            if ($trend['results']['off_target']['away'][$oftac - 15]['time_str'] == $tp - 10) {
              $ofta10 = $trend['results']['off_target']['away'][$oftac - 15]['val'];                     
            }
            if ($tp < 11) {
              $ofta = $trend['results']['off_target']['away'][$c]['val'];
              $ofta10 = 0;
            }
          };
          $ofta = $ofta - $ofta10;
        }                       
        elseif (empty($trend['results']['off_target']['away'][0]['val'])) {
          $ofta = 0;
        };     
        if (isset($trend['results']['corners']['away'][0]['val']) ) {   
          $cta = [];
          for ($c = 0; $c < count($trend['results']['corners']['away']); $c++) { 
            if ($trend['results']['corners']['away'][$c]['time_str'] >= $tp - 10) {
              array_push($cta, $trend['results']['corners']['away'][$c]['value']);
            }
          };
          $cta10 = count($cta);
        }       
        elseif (empty($trend['results']['corners']['away'][0]['val'])) {
          $cta10 = 0;
        };
        $pra10 = $stats['results'][0]['stats']['possession_rt'][1];
        if (empty($stats['results'][0]['stats']['possession_rt'][1])) {
          $pra10 = 0;
        }
        if (empty($pih)) {
          $pih = 0;
        }
        if (empty($pia)) {
          $pia = 0;
        }
        $pia = $daa*1.5 + $ofta*10 + $onta*10 + $cta10*2;
        $pih = round($pih, 1); 
        $pia = round($pia, 1); 
        if (($pia + $pih) > 100) {
          echo "</span><div class='high_pi'>!</div><span class='pressure_indicator_away'>".$pia."</span><div class='mdl-tooltip' data-mdl-for='pih".$arr['results'][$i]['id']."'><span>".$pih."</span><span>".$pia."</span></div>";          
        }
        if (($pia + $pih) <= 100) {
          echo "</span><span class='pressure_indicator_away'>".$pia."</span><div class='mdl-tooltip' data-mdl-for='pih".$arr['results'][$i]['id']."'><span>".$pih."</span><span>".$pia."</span></div>";          
        }
//        PI
        
        echo "</td>";
        $home = $arr['results'][$i]['home']['name'];
        $away = $arr['results'][$i]['away']['name'];
        $home = str_replace(' ', '-', $home);
        $away = str_replace(' ', '-', $away);
        echo "<td class='small_screen_hidden'><a class='table-link' href='//betsapi.com/rh/".$arr['results'][$i]['id']."/".$home."-v-".$away."' target='_blank'><div id='tt".$arr['results'][$i]['id']."' class='icon material-icons'>timeline</div></a><div class='mdl-tooltip' data-mdl-for='tt".$arr['results'][$i]['id']."'>Visit betsapi.com</div><i id='tb".$arr['results'][$i]['id']."' class='icon material-icons bulb'>grade</i><div class='mdl-tooltip' data-mdl-for='tb".$arr['results'][$i]['id']."'>Highlight the game</div><span class='match_id'></span></td></tr></tbody>"; 
        };
      ?>
    <script src='js/libs__table.js'></script>
    <script src='js/jquery-ui.min.js'></script>
    <script src='js/filter.js'></script>
    <script src='js/main__script_1.js'></script>