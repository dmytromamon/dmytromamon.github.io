                   <?php
                    $label = $_GET[ "id" ];
                    $arr = file_get_contents("https://api.betsapi.com/v1/events/inplay?token=1188-AHVDIRogXLjsQx&sport_id=1");
                    $arr = json_decode($arr, true);
                    $i = $label;
                    for ($i1 = 0; $i1 < count($arr['results']); $i1++) {
                      if ($arr['results'][$i1]['id'] == $i) {
                        $arri = $i1;
                      }
                    }
                    $time = $arr['results'][$i]['timer']['tm'];
                      echo "<tbody class='can-bulb' id='".$i."'><tr id='".$i."'><td class='time'>".$arr['results'][$arri]['timer']['tm']."'</td>"; 
                      echo "<td class='score'><span class='score_home' style='display: inline-block' id='scoreh".$arr['results'][$arri]['id']."'>".$arr['results'][$arri]['scores']['2']['home']."</span> : <span class='score_away' id='scorea".$arr['results'][$arri]['id']."' style='display: inline-block'>".$arr['results'][$arri]['scores']['2']['away']."</span>";
        $trend = file_get_contents("https://api.betsapi.com/v1/event/stats_trend?token=1188-AHVDIRogXLjsQx&event_id=".$arr['results'][$arri]['id']);
        $trend = json_decode($trend, true);  
        
        if (isset($trend['results']['goals']['home'][0]['time_str']) ) {
          echo "<div class='mdl-tooltip' data-mdl-for='scoreh".$arr['results'][$arri]['id']."'>";
          for ($c = 0; $c < count($trend['results']['goals']['home']); $c++) {
            echo "".$trend['results']['goals']['home'][$c]['time_str']."' ";
          }; 
          echo "</div>";    
        }
        if (isset($trend['results']['goals']['away'][0]['time_str']) ) {
          echo "<div class='mdl-tooltip' data-mdl-for='scorea".$arr['results'][$arri]['id']."'>";
          for ($c = 0; $c < count($trend['results']['goals']['away']); $c++) {
            echo "".$trend['results']['goals']['away'][$c]['time_str']."' ";
          }; 
          echo "</div>";    
        }
        
        echo "</td>"; 
                      echo "<td class='small_screen_event'><span class='home_name' style='display: inline-block'>".$arr['results'][$arri]['home']['name']."</span><span class='away_name' style='display: inline-block'>".$arr['results'][$arri]['away']['name']."</span></td>"; 
                      $odd = file_get_contents("https://api.betsapi.com/v1/event/odds/summary?token=1188-AHVDIRogXLjsQx&event_id=".$i);
                      $odd = json_decode($odd, true);
                      echo "<td class='small_screen_hidden'>".$odd['results']['Bet365']['end']['1_1']['home_od']."</td>"; 
                      echo "<td class='small_screen_hidden'>".$odd['results']['Bet365']['end']['1_1']['draw_od']."</td>"; 
                      echo "<td class='small_screen_hidden'>".$odd['results']['Bet365']['end']['1_1']['away_od']."</td>"; 
        $od = $arr['results'][$arri]['scores']['2']['home'] + $arr['results'][$arri]['scores']['2']['away'] + 0.5;
                      echo "<td id='under_od".$arr['results'][$arri]['id']."' class='small_screen_hidden under_od'>".$odd['results']['Bet365']['end']['1_3']['under_od']."</td><td id='over_od".$arr['results'][$arri]['id']."' class='small_screen_hidden over_od'>".$odd['results']['Bet365']['end']['1_3']['over_od']."</td>"; 
                      $stats = file_get_contents("https://api.betsapi.com/v1/event/view?token=1188-AHVDIRogXLjsQx&event_id=".$i);
                      $stats = json_decode($stats, true);
                      echo "<td class='small_screen_hidden'><span class='on_target_home' id='onth".$i."'>".$stats['results'][0]['stats']['on_target'][0]."</span><span class='on_target_away' id='onta".$i."'>".$stats['results'][0]['stats']['on_target'][1]."</span><div class='mdl-tooltip' data-mdl-for='onth".$i."'>"; 
                      
                      $trend = file_get_contents("https://api.betsapi.com/v1/event/stats_trend?token=1188-AHVDIRogXLjsQx&event_id=".$i);
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
                      echo "</div>";
                      echo "<div class='mdl-tooltip' data-mdl-for='onta".$i."'>";
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
                      echo "</div></td>";
                      
                      echo "<td class='small_screen_hidden'><span class='off_target_home' id='ofth".$i."'>".$stats['results'][0]['stats']['off_target'][0]."</span><span class='off_target_away' id='ofta".$i."'>".$stats['results'][0]['stats']['off_target'][1]."</span><div class='mdl-tooltip' data-mdl-for='ofth".$i."'>"; 
                      
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
                      echo "</div>";
                      echo "<div class='mdl-tooltip' data-mdl-for='ofta".$i."'>";
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
                        echo "<td class='small_screen_hidden'><span class='corners_home' id='ch".$i."'>".$stats['results'][0]['stats']['corners'][0]."</span><span class='corners_away' id='ca".$i."'>".$stats['results'][0]['stats']['corners'][1]."</span><div class='mdl-tooltip' data-mdl-for='ch".$i."'>";
                        
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
                        echo "</div>";
                        echo "<div class='mdl-tooltip' data-mdl-for='ca".$i."'>";
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
                        echo "<td class='small_screen_hidden'><span class='penalties_home' id='ph".$i."'>".$stats['results'][0]['stats']['penalties'][0]."</span><span class='penalties_away' id='pa".$i."'>".$stats['results'][0]['stats']['penalties'][1]."</span><div class='mdl-tooltip' data-mdl-for='ph".$i."'>";
                        
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
                        echo "</div>";
                        echo "<div class='mdl-tooltip' data-mdl-for='pa".$i."'>";
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
                        echo "<td class='small_screen_hidden'><span class='redcards_home' id='rch".$i."'>".$stats['results'][0]['stats']['redcards'][0]."</span><span class='redcards_away' id='rca".$i."'>".$stats['results'][0]['stats']['redcards'][1]."</span><div class='mdl-tooltip' data-mdl-for='rch".$i."'>";
                        
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
                        echo "</div>";
                        echo "<div class='mdl-tooltip' data-mdl-for='rca".$i."'>";
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
                        echo "<td class='small_screen_hidden'><span class='yellowcards_home' id='ych".$i."'>".$stats['results'][0]['stats']['yellowcards'][0]."</span><span class='yellowcards_away' id='yca".$i."'>".$stats['results'][0]['stats']['yellowcards'][1]."</span><div class='mdl-tooltip' data-mdl-for='ych".$i."'>";                        
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
                        echo "</div>";
                        echo "<div class='mdl-tooltip' data-mdl-for='yca".$i."'>";
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
                        echo "<td class='possession_rt small_screen_hidden' id='tpos".$i."'>No data</td>";
                      } else {
                        echo "<td class='possession_rt small_screen_hidden'><span class='possession_rt_home'>".$stats['results'][0]['stats']['possession_rt'][0]."</span><span class='possession_rt_away'>".$stats['results'][0]['stats']['possession_rt'][1]."</span></td>"; 
                      };
                      
//                      PI 
                      $tp = $arr['results'][$arri]['timer']['tm'];
                      $trend = 0;
                      $trend = file_get_contents("https://api.betsapi.com/v1/event/stats_trend?token=1188-AHVDIRogXLjsQx&event_id=".$i);
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
                          if (empty($dah10)) {
                            $dah = 0;
                            $dah10 = 0;
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
//                      echo "<tr><td colspan='18' style='border-bottom: 0'><h5 style='text-align: center'>".$dah."</h5></td></tr>"; 
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
//                      echo "<tr><td colspan='18' style='border-bottom: 0'><h4 style='text-align: center'>".$onth."</h4></td></tr>";   
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
//                      echo "<tr><td colspan='18' style='border-bottom: 0'><h4 style='text-align: center'>".$ofth."</h4></td></tr>";     
                      if (isset($trend['results']['corners']['home'][0]['val']) ) {   
                        $cth = [];
                        for ($c = 0; $c < count($trend['results']['corners']['home']); $c++) { 
                          if ($trend['results']['corners']['home'][$c]['time_str'] >= $tp - 10) {
                            array_push($cth, $trend['results']['corners']['home'][$c]['value']);
                          }
                          $cth10 = count($cth);
                        };
                      }                       
                      elseif (empty($trend['results']['corners']['home'][0]['val'])) {
                        $cth10 = 0;
                      };
//                      echo "<tr><td colspan='18' style='border-bottom: 0'><h4 style='text-align: center'>".$cth10."</h4></td></tr>"; 
                      $prh10 = $stats['results'][0]['stats']['possession_rt'][0];
                      if (empty($stats['results'][0]['stats']['possession_rt'][0])) {
                        $prh10 = 0;
                      }
                      $pih = $dah*1.5 + $ofth*10 + $onth*10 + $cth10*2;
                      $pihc = 110 - $pih;
//                      echo "<tr><td colspan='18' style='border-bottom: 0'><h5 style='text-align: center'>".$prh10."</h5></td></tr>";  
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
                          if (empty($daa10)) {
                            $daa = 0;
                            $daa10 = 0;
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
//                      echo "<tr><td colspan='18' style='border-bottom: 0'><h5 style='text-align: center'>".$dah."</h5></td></tr>"; 
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
//                      echo "<tr><td colspan='18' style='border-bottom: 0'><h4 style='text-align: center'>".$onth."</h4></td></tr>";   
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
//                      echo "<tr><td colspan='18' style='border-bottom: 0'><h4 style='text-align: center'>".$ofth."</h4></td></tr>";     
                      if (isset($trend['results']['corners']['away'][0]['val']) ) {   
                        $cta = [];
                        for ($c = 0; $c < count($trend['results']['corners']['away']); $c++) { 
                          if ($trend['results']['corners']['away'][$c]['time_str'] >= $tp - 10) {
                            array_push($cta, $trend['results']['corners']['away'][$c]['value']);
                          }
                          $cta10 = count($cta);
                        };
                      }                       
                      elseif (empty($trend['results']['corners']['away'][0]['val'])) {
                        $cta10 = 0;
                      };
//                      echo "<tr><td colspan='18' style='border-bottom: 0'><h4 style='text-align: center'>".$cth10."</h4></td></tr>"; 
                      $pra10 = $stats['results'][0]['stats']['possession_rt'][1];
                      if (empty($stats['results'][0]['stats']['possession_rt'][1])) {
                        $pra10 = 0;
                      }
                      $pia = $daa*1.5 + $ofta*10 + $onta*10 + $cta10*2;
                      $pih = round($pih, 1); 
                      $pia = round($pia, 1); 
                      $piac = 110 - $pia;
//                      echo "<tr><td colspan='18' style='border-bottom: 0'><h5 style='text-align: center'>".$prh10."</h5></td></tr>";  
                      echo "</span><span class='pressure_indicator_away'>".$pia."</span><div class='mdl-tooltip' data-mdl-for='pih".$arr['results'][$i]['id']."'><span>".$pih."</span><span>".$pia."</span></div>";  
//                      PI
                      
                      echo "</td>";
                      $home = $arr['results'][$arri]['home']['name'];
                      $away = $arr['results'][$arri]['away']['name'];
                      $home = str_replace(' ', '-', $home);
                      $away = str_replace(' ', '-', $away);
                      echo "<td class='small_screen_hidden'><a class='table-link' href='//betsapi.com/rh/".$i."/".$home."-v-".$away."' target='_blank'><div id='tt".$i."' class='icon material-icons'>link</div></a><div class='mdl-tooltip' data-mdl-for='tt".$i."'>Visit betsapi.com</div><span class='match_id'></span></td></tr>";
                
                      echo "<tbody class='click_hidden'><tr class='game_details'><td colspan='18'><h5 style='text-align: center'>Statistic:</h5><table class='small_screen_table'><tr class='table__small_screen__header'><td>Home</td><td>Draw</td><td>Away</td></tr><tr><td>".$odd['results']['Bet365']['end']['1_1']['home_od']."</td><td>".$odd['results']['Bet365']['end']['1_1']['draw_od']."</td><td>".$odd['results']['Bet365']['end']['1_1']['away_od']."</td></tr><tr class='table__small_screen__header'><td>Under</td><td></td><td>Over</td></tr><tr><td>".$odd['results']['Bet365']['end']['1_3']['under_od']."</td><td></td><td>".$odd['results']['Bet365']['end']['1_3']['over_od']."</td></tr><tr><td>".$stats['results'][0]['stats']['on_target'][0]."</td><td><div id='tts1' class='icon material-icons'>gps_fixed</div><div class='mdl-tooltip' data-mdl-for='tts1'>Shots on target</div></td><td>".$stats['results'][0]['stats']['on_target'][1]."</td></tr><tr><td>".$stats['results'][0]['stats']['off_target'][0]."</td><td><div id='tts2' class='icon material-icons'>gps_off</div><div class='mdl-tooltip' data-mdl-for='tts2'>Shots off target</div></td><td>".$stats['results'][0]['stats']['off_target'][1]."</td></tr>";                      
                      if (empty($stats['results'][0]['stats']['corners'][0])) {
                        echo "<tr><td>0</td><td><div id='tts3' class='icon material-icons'>assistant_photo</div><div class='mdl-tooltip' data-mdl-for='tts3'>Corners</div></td><td>0</td></tr>";
                      } else {
                        echo "<tr><td>".$stats['results'][0]['stats']['corners'][0]."</td><td><div id='tts3' class='icon material-icons'>assistant_photo</div><div class='mdl-tooltip' data-mdl-for='tts3'>Corners</div></td><td>".$stats['results'][0]['stats']['corners'][1]."</td></tr>"; 
                      }; 
                      if (empty($stats['results'][0]['stats']['penalties'][0])) {
                        echo "<tr><td>0</td><td><div id='tts4' class='icon material-icons'>adjust</div><div class='mdl-tooltip' data-mdl-for='tts4'>Penalties</div></td><td>0</td></tr>";
                      } else {
                        echo "<tr><td>".$stats['results'][0]['stats']['penalties'][0]."</td><td><div id='tts4' class='icon material-icons'>adjust</div><div class='mdl-tooltip' data-mdl-for='tts4'>Penalties</div></td><td>".$stats['results'][0]['stats']['penalties'][1]."</td></tr>"; 
                      };
                      if (empty($stats['results'][0]['stats']['redcards'][0])) {
                        echo "<tr><td>0</td><td><div id='tts5' class='icon material-icons red-color'>content_copy</div><div class='mdl-tooltip' data-mdl-for='tts5'>Red cards</div></td><td>0</td></tr>";
                      } else {
                        echo "<tr><td>".$stats['results'][0]['stats']['redcards'][0]."</td><td><div id='tts5' class='icon material-icons red-color'>content_copy</div><div class='mdl-tooltip' data-mdl-for='tts5'>Red cards</div></td><td>".$stats['results'][0]['stats']['redcards'][1]."</td></tr>"; 
                      };
                      if (empty($stats['results'][0]['stats']['yellowcards'][0])) {
                        echo "<tr><td>0</td><td><div id='tts6' class='icon material-icons yellow-color'>content_copy</div><div class='mdl-tooltip' data-mdl-for='tts6'>Yellow cards</div></td><td>0</td></tr>";
                      } else {
                        echo "<tr><td>".$stats['results'][0]['stats']['yellowcards'][0]."</td><td><div id='tts6' class='icon material-icons yellow-color'>content_copy</div><div class='mdl-tooltip' data-mdl-for='tts6'>Yellow cards</div></td><td>".$stats['results'][0]['stats']['yellowcards'][1]."</td></tr>"; 
                      };
                      echo "<tr><td>".$stats['results'][0]['stats']['dangerous_attacks'][0]."</td><td><div id='tts7' class='icon material-icons'>flash_on</div><div class='mdl-tooltip' data-mdl-for='tts7'>Dangerous attacks</div></td><td>".$stats['results'][0]['stats']['dangerous_attacks'][1]."</td></tr>";                                          
                      if (empty($stats['results'][0]['stats']['possession_rt'][0])) {
                        echo "<tr><td>No data</td><td><div id='tts8' class='icon material-icons'>compare_arrows</div><div class='mdl-tooltip' data-mdl-for='tts8'>Possession</div></td><td>No data</td></tr><tr><td class='home_pi'></td><td><div id='tts9' class='icon material-icons'>poll</div><div class='mdl-tooltip' data-mdl-for='tts9'>Pressure indicator</div></td><td class='away_pi'></td></tr></table></td></tr>";
                      } else {
                        echo "<tr><td>".$stats['results'][0]['stats']['possession_rt'][0]."</td><td><div id='tts8' class='icon material-icons'>compare_arrows</div><div class='mdl-tooltip' data-mdl-for='tts8'>Possession</div></td><td>".$stats['results'][0]['stats']['possession_rt'][1]."</td></tr><tr><td class='home_pi'></td><td><div id='tts9' class='icon material-icons'>poll</div><div class='mdl-tooltip' data-mdl-for='tts9'>Pressure indicator</div></td><td class='away_pi'></td></tr></table></td></tr>"; 
                      };      
                      echo "<tr><td colspan='18' style='border-bottom: 0'><h5 style='text-align: center'>Pressure Indicator:</h5></td></tr>";        
                      
                      echo "<tr class='table-block'>
                              <td class='possession_rt_info' colspan='18' style='border-top: 0'>
                                <div class='table-block__flex'>
                                  <h6>".$arr['results'][$arri]['home']['name']."</h6>
                                  <svg fill='currentColor' viewBox='0 0 390 125' class='demo-graph' style='color: #01579B'>
                                    <use xlink:href='#chart1".$home."' />
                                  </svg>
                                  <svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 390 125' style='position: fixed; left: -1000px; height: -1000px;'>
                                    <defs>
                                      <g id='chart1".$home."'>
                                        <g id='Gridlines'>
                                          <line fill='#888888' stroke='#888888' stroke-miterlimit='10' x1='0' y1='10' x2='370' y2='10' />
                                          <line fill='#888888' stroke='#888888' stroke-miterlimit='10' x1='0' y1='20' x2='370' y2='20' />
                                          <line fill='#888888' stroke='#888888' stroke-miterlimit='10' x1='0' y1='30' x2='370' y2='30' />
                                          <line fill='#888888' stroke='#888888' stroke-miterlimit='10' x1='0' y1='40' x2='370' y2='40' />
                                          <line fill='#888888' stroke='#888888' stroke-miterlimit='10' x1='0' y1='50' x2='370' y2='50' />
                                          <line fill='#888888' stroke='#888888' stroke-miterlimit='10' x1='0' y1='60' x2='370' y2='60' />
                                          <line fill='#888888' stroke='#888888' stroke-miterlimit='10' x1='0' y1='70' x2='370' y2='70' />
                                          <line fill='#888888' stroke='#888888' stroke-miterlimit='10' x1='0' y1='80' x2='370' y2='80' />
                                          <line fill='#888888' stroke='#888888' stroke-miterlimit='10' x1='0' y1='90' x2='370' y2='90' />
                                          <line fill='#888888' stroke='#888888' stroke-miterlimit='10' x1='0' y1='100' x2='370' y2='100' />
                                          <line fill='#888888' stroke='#888888' stroke-miterlimit='10' x1='0' y1='110' x2='370' y2='110' />
                                        </g>
                                        <g id='Numbers'>
                                          <text transform='matrix(1 0 0 1 375 113)' fill='#888888' font-family=''Roboto'' font-size='9'>0</text>
                                          <text transform='matrix(1 0 0 1 375 103)' fill='#888888' font-family=''Roboto'' font-size='9'>10</text>
                                          <text transform='matrix(1 0 0 1 375 93)' fill='#888888' font-family=''Roboto'' font-size='9'>20</text>
                                          <text transform='matrix(1 0 0 1 375 83)' fill='#888888' font-family=''Roboto'' font-size='9'>30</text>
                                          <text transform='matrix(1 0 0 1 375 73)' fill='#888888' font-family=''Roboto'' font-size='9'>40</text>
                                          <text transform='matrix(1 0 0 1 375 63)' fill='#888888' font-family=''Roboto'' font-size='9'>50</text>
                                          <text transform='matrix(1 0 0 1 375 53)' fill='#888888' font-family=''Roboto'' font-size='9'>60</text>
                                          <text transform='matrix(1 0 0 1 375 43)' fill='#888888' font-family=''Roboto'' font-size='9'>70</text>
                                          <text transform='matrix(1 0 0 1 375 33)' fill='#888888' font-family=''Roboto'' font-size='9'>80</text>
                                          <text transform='matrix(1 0 0 1 375 23)' fill='#888888' font-family=''Roboto'' font-size='9'>90</text>
                                          <text transform='matrix(1 0 0 1 375 13)' fill='#888888' font-family=''Roboto'' font-size='9'>100</text>
                                          <text transform='matrix(1 0 0 1 0 125)' fill='#888888' font-family=''Roboto'' font-size='9'>0</text>
                                          <text transform='matrix(1 0 0 1 25 125)' fill='#888888' font-family=''Roboto'' font-size='9'>10</text>
                                          <text transform='matrix(1 0 0 1 55 125)' fill='#888888' font-family=''Roboto'' font-size='9'>20</text>
                                          <text transform='matrix(1 0 0 1 85 125)' fill='#888888' font-family=''Roboto'' font-size='9'>30</text>
                                          <text transform='matrix(1 0 0 1 115 125)' fill='#888888' font-family=''Roboto'' font-size='9'>40</text>
                                          <text transform='matrix(1 0 0 1 145 125)' fill='#888888' font-family=''Roboto'' font-size='9'>50</text>
                                          <text transform='matrix(1 0 0 1 175 125)' fill='#888888' font-family=''Roboto'' font-size='9'>60</text>
                                          <text transform='matrix(1 0 0 1 205 125)' fill='#888888' font-family=''Roboto'' font-size='9'>70</text>
                                          <text transform='matrix(1 0 0 1 235 125)' fill='#888888' font-family=''Roboto'' font-size='9'>80</text>
                                          <text transform='matrix(1 0 0 1 265 125)' fill='#888888' font-family=''Roboto'' font-size='9'>90</text>
                                          <text transform='matrix(1 0 0 1 295 125)' fill='#888888' font-family=''Roboto'' font-size='9'>100</text>
                                          <text transform='matrix(1 0 0 1 325 125)' fill='#888888' font-family=''Roboto'' font-size='9'>110</text>
                                          <text transform='matrix(1 0 0 1 355 125)' fill='#888888' font-family=''Roboto'' font-size='9'>120</text>
                                        </g>
                                        <g id='Layer_4'>
                                          <polygon opacity='0.72' stroke-miterlimit='10' points='0 110,";
                      echo "0 110,";
                      
//                      PI 
                      for ($tp = 10; $tp < $arr['results'][$arri]['timer']['tm']; $tp = $tp + 5) {
//                      $tch = $arr['results'][$i]['timer']['tm'] - $tp - 10;
//                      $trend = 0;
                      $dah = 0;
                      $dah10 = 0;
//                      $trend = file_get_contents("https://api.betsapi.com/v1/event/stats_trend?token=1188-AHVDIRogXLjsQx&event_id=".$i);
//                      $trend = json_decode($trend, true);   
                      if (isset($trend['results']['dangerous_attacks']['home'][0]['val']) ) {   
                        for ($c = 0; $c < count($trend['results']['dangerous_attacks']['home']); $c++) { 
                          if ($trend['results']['dangerous_attacks']['home'][$c]['time_str'] == $tp) {
                            $dah = $trend['results']['dangerous_attacks']['home'][$c]['val'];                         
                          }                          
                          if ($trend['results']['dangerous_attacks']['home'][$c]['time_str'] == $tp - 10) {
                            $dah10 = $trend['results']['dangerous_attacks']['home'][$c]['val'];                         
                          }
                        };
                        $dah = $dah - $dah10;
                      }                       
                      elseif (empty($trend['results']['dangerous_attacks']['home'][0]['val'])) {
                        $dah = 0;
                      }; 
                        
                      $onth = 0;
                      $onth10 = 0;    
                      if (isset($trend['results']['on_target']['home'][0]['val']) ) {   
                        for ($c = 0; $c < count($trend['results']['on_target']['home']); $c++) { 
                          if ($trend['results']['on_target']['home'][$c]['time_str'] == $tp) {
                            $onth = $trend['results']['on_target']['home'][$c]['val'];                         
                          }                          
                          if ($trend['results']['on_target']['home'][$c]['time_str'] == $tp - 10) {
                            $onth10 = $trend['results']['on_target']['home'][$c]['val'];                         
                          }
                        };
                        $onth = $onth - $onth10;
                      }                       
                      elseif (empty($trend['results']['on_target']['home'][0]['val'])) {
                        $onth = 0;
                      };  
                        
                      $ofth = 0;
                      $ofth10 = 0;    
                      if (isset($trend['results']['off_target']['home'][0]['val']) ) {   
                        for ($c = 0; $c < count($trend['results']['off_target']['home']); $c++) { 
                          if ($trend['results']['off_target']['home'][$c]['time_str'] == $tp) {
                            $ofth = $trend['results']['off_target']['home'][$c]['val'];                         
                          }                          
                          if ($trend['results']['off_target']['home'][$c]['time_str'] == $tp - 10) {
                            $ofth10 = $trend['results']['off_target']['home'][$c]['val'];                         
                          }
                        };
                        $ofth = $ofth - $ofth10;
                      }                       
                      elseif (empty($trend['results']['off_target']['home'][0]['val'])) {
                        $ofth = 0;
                      };  
                        
                      $cth = 0;
                      $cth10 = 0;    
                      if (isset($trend['results']['corners']['home'][0]['val']) ) {   
                        for ($c = 0; $c < count($trend['results']['corners']['home']); $c++) { 
                          if ($trend['results']['corners']['home'][$c]['time_str'] == $tp) {
                            $cth = $trend['results']['corners']['home'][$c]['val'];                         
                          }                          
                          if ($trend['results']['corners']['home'][$c]['time_str'] == $tp - 10) {
                            $cth10 = $trend['results']['corners']['home'][$c]['val'];                         
                          }
                        };
                        $cth = $cth - $cth10;
                      }                       
                      elseif (empty($trend['results']['corners']['home'][0]['val'])) {
                        $cth = 0;
                      };
                      $prh10 = 0;    
                      if (isset($trend['results']['possession']['home'][0]['val']) ) {   
                        for ($c = 0; $c < count($trend['results']['possession']['home']); $c++) {           
                          if ($trend['results']['possession']['home'][$c]['time_str'] == $tp - 10) {
                            $prh10 = $trend['results']['possession']['home'][$c]['val'];                         
                          }
                        };
                      }                       
                      elseif (empty($trend['results']['possession']['home'][0]['val'])) {
                        $prh = 0;
                      };
                        
                      $pih = $dah*1.5 + $ofth*10 + $onth*10 + $cth10*2;
                      $pih = 110 - $pih;
                      $tp3 = $tp * 3;
                      $tp3c = $arr['results'][$arri]['timer']['tm'] * 3;
                                        
                      echo "".$tp3." ".$pih.",";  
                      }
                      echo "".$tp3c." ".$pihc.","; 
                      echo "".$tp3c." 110'</g>
                                      </g>
                                    </defs>
                                  </svg>
                                </div>
                                <div class='table-block__flex'>
                                  <h6>".$arr['results'][$arri]['away']['name']."</h6>
                                  <svg fill='currentColor' viewBox='0 0 390 125' class='demo-graph' style='color: #B71C1C'>
                                    <use xlink:href='#chart1".$away."' />
                                  </svg>
                                  <svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 390 125' style='position: fixed; left: -1000px; height: -1000px;'>
                                    <defs>
                                      <g id='chart1".$away."'>
                                        <g id='Gridlines'>
                                          <line fill='#888888' stroke='#888888' stroke-miterlimit='10' x1='0' y1='10' x2='370' y2='10' />
                                          <line fill='#888888' stroke='#888888' stroke-miterlimit='10' x1='0' y1='20' x2='370' y2='20' />
                                          <line fill='#888888' stroke='#888888' stroke-miterlimit='10' x1='0' y1='30' x2='370' y2='30' />
                                          <line fill='#888888' stroke='#888888' stroke-miterlimit='10' x1='0' y1='40' x2='370' y2='40' />
                                          <line fill='#888888' stroke='#888888' stroke-miterlimit='10' x1='0' y1='50' x2='370' y2='50' />
                                          <line fill='#888888' stroke='#888888' stroke-miterlimit='10' x1='0' y1='60' x2='370' y2='60' />
                                          <line fill='#888888' stroke='#888888' stroke-miterlimit='10' x1='0' y1='70' x2='370' y2='70' />
                                          <line fill='#888888' stroke='#888888' stroke-miterlimit='10' x1='0' y1='80' x2='370' y2='80' />
                                          <line fill='#888888' stroke='#888888' stroke-miterlimit='10' x1='0' y1='90' x2='370' y2='90' />
                                          <line fill='#888888' stroke='#888888' stroke-miterlimit='10' x1='0' y1='100' x2='370' y2='100' />
                                          <line fill='#888888' stroke='#888888' stroke-miterlimit='10' x1='0' y1='110' x2='370' y2='110' />
                                        </g>
                                        <g id='Numbers'>
                                          <text transform='matrix(1 0 0 1 375 113)' fill='#888888' font-family=''Roboto'' font-size='9'>0</text>
                                          <text transform='matrix(1 0 0 1 375 103)' fill='#888888' font-family=''Roboto'' font-size='9'>10</text>
                                          <text transform='matrix(1 0 0 1 375 93)' fill='#888888' font-family=''Roboto'' font-size='9'>20</text>
                                          <text transform='matrix(1 0 0 1 375 83)' fill='#888888' font-family=''Roboto'' font-size='9'>30</text>
                                          <text transform='matrix(1 0 0 1 375 73)' fill='#888888' font-family=''Roboto'' font-size='9'>40</text>
                                          <text transform='matrix(1 0 0 1 375 63)' fill='#888888' font-family=''Roboto'' font-size='9'>50</text>
                                          <text transform='matrix(1 0 0 1 375 53)' fill='#888888' font-family=''Roboto'' font-size='9'>60</text>
                                          <text transform='matrix(1 0 0 1 375 43)' fill='#888888' font-family=''Roboto'' font-size='9'>70</text>
                                          <text transform='matrix(1 0 0 1 375 33)' fill='#888888' font-family=''Roboto'' font-size='9'>80</text>
                                          <text transform='matrix(1 0 0 1 375 23)' fill='#888888' font-family=''Roboto'' font-size='9'>90</text>
                                          <text transform='matrix(1 0 0 1 375 13)' fill='#888888' font-family=''Roboto'' font-size='9'>100</text>
                                          <text transform='matrix(1 0 0 1 0 125)' fill='#888888' font-family=''Roboto'' font-size='9'>0</text>
                                          <text transform='matrix(1 0 0 1 25 125)' fill='#888888' font-family=''Roboto'' font-size='9'>10</text>
                                          <text transform='matrix(1 0 0 1 55 125)' fill='#888888' font-family=''Roboto'' font-size='9'>20</text>
                                          <text transform='matrix(1 0 0 1 85 125)' fill='#888888' font-family=''Roboto'' font-size='9'>30</text>
                                          <text transform='matrix(1 0 0 1 115 125)' fill='#888888' font-family=''Roboto'' font-size='9'>40</text>
                                          <text transform='matrix(1 0 0 1 145 125)' fill='#888888' font-family=''Roboto'' font-size='9'>50</text>
                                          <text transform='matrix(1 0 0 1 175 125)' fill='#888888' font-family=''Roboto'' font-size='9'>60</text>
                                          <text transform='matrix(1 0 0 1 205 125)' fill='#888888' font-family=''Roboto'' font-size='9'>70</text>
                                          <text transform='matrix(1 0 0 1 235 125)' fill='#888888' font-family=''Roboto'' font-size='9'>80</text>
                                          <text transform='matrix(1 0 0 1 265 125)' fill='#888888' font-family=''Roboto'' font-size='9'>90</text>
                                          <text transform='matrix(1 0 0 1 295 125)' fill='#888888' font-family=''Roboto'' font-size='9'>100</text>
                                          <text transform='matrix(1 0 0 1 325 125)' fill='#888888' font-family=''Roboto'' font-size='9'>110</text>
                                          <text transform='matrix(1 0 0 1 355 125)' fill='#888888' font-family=''Roboto'' font-size='9'>120</text>
                                        </g>
                                        <g id='Layer_4'>
                                          <polygon opacity='0.72' stroke-miterlimit='10' points='0 110,";
                      echo "0 110,";
                      for ($tp = 10; $tp < $arr['results'][$arri]['timer']['tm']; $tp = $tp + 5) {
                      $daa = 0;
                      $daa10 = 0; 
                      if (isset($trend['results']['dangerous_attacks']['away'][0]['val']) ) {   
                        for ($c = 0; $c < count($trend['results']['dangerous_attacks']['away']); $c++) { 
                          if ($trend['results']['dangerous_attacks']['away'][$c]['time_str'] == $tp) {
                            $daa = $trend['results']['dangerous_attacks']['away'][$c]['val'];                         
                          }                          
                          if ($trend['results']['dangerous_attacks']['away'][$c]['time_str'] == $tp - 10) {
                            $daa10 = $trend['results']['dangerous_attacks']['away'][$c]['val'];                         
                          }
                        };
                        $daa = $daa - $daa10;
                      }                       
                      elseif (empty($trend['results']['dangerous_attacks']['away'][0]['val'])) {
                        $daa = 0;
                      }; 
                        
                      $onta = 0;
                      $onta10 = 0;    
                      if (isset($trend['results']['on_target']['away'][0]['val']) ) {   
                        for ($c = 0; $c < count($trend['results']['on_target']['away']); $c++) { 
                          if ($trend['results']['on_target']['away'][$c]['time_str'] == $tp) {
                            $onta = $trend['results']['on_target']['away'][$c]['val'];                         
                          }                          
                          if ($trend['results']['on_target']['away'][$c]['time_str'] == $tp - 10) {
                            $onta10 = $trend['results']['on_target']['away'][$c]['val'];                         
                          }
                        };
                        $onta = $onta - $onta10;
                      }                       
                      elseif (empty($trend['results']['on_target']['away'][0]['val'])) {
                        $onta = 0;
                      };  
                        
                      $ofta = 0;
                      $ofta10 = 0;    
                      if (isset($trend['results']['off_target']['away'][0]['val']) ) {   
                        for ($c = 0; $c < count($trend['results']['off_target']['away']); $c++) { 
                          if ($trend['results']['off_target']['away'][$c]['time_str'] == $tp) {
                            $ofta = $trend['results']['off_target']['away'][$c]['val'];                         
                          }                          
                          if ($trend['results']['off_target']['away'][$c]['time_str'] == $tp - 10) {
                            $ofta10 = $trend['results']['off_target']['away'][$c]['val'];                         
                          }
                        };
                        $ofta = $ofta - $ofta10;
                      }                       
                      elseif (empty($trend['results']['off_target']['away'][0]['val'])) {
                        $ofta = 0;
                      };  
                        
                      $cta = 0;
                      $cta10 = 0;    
                      if (isset($trend['results']['corners']['away'][0]['val']) ) {   
                        for ($c = 0; $c < count($trend['results']['corners']['away']); $c++) { 
                          if ($trend['results']['corners']['away'][$c]['time_str'] == $tp) {
                            $cta = $trend['results']['corners']['away'][$c]['val'];                         
                          }                          
                          if ($trend['results']['corners']['away'][$c]['time_str'] == $tp - 10) {
                            $cta10 = $trend['results']['corners']['away'][$c]['val'];                         
                          }
                        };
                        $cta = $cta - $cta10;
                      }                       
                      elseif (empty($trend['results']['corners']['away'][0]['val'])) {
                        $cta = 0;
                      };
                      $pra10 = 0;    
                      if (isset($trend['results']['possession']['away'][0]['val']) ) {   
                        for ($c = 0; $c < count($trend['results']['possession']['away']); $c++) {           
                          if ($trend['results']['possession']['away'][$c]['time_str'] == $tp - 10) {
                            $pra10 = $trend['results']['possession']['away'][$c]['val'];                         
                          }
                        };
                      }                       
                      elseif (empty($trend['results']['possession']['away'][0]['val'])) {
                        $pra = 0;
                      };
                      $pia = $daa*1.5 + $ofta*10 + $onta*10 + $cta10*2;
                      $pia = 110 - $pia;     
                      $tp3 = $tp * 3;         
                      $tp3c = $arr['results'][$arri]['timer']['tm'] * 3;
                      echo "".$tp3." ".$pia.",";  
                      }
                      
//                      PI
                                        echo "".$tp3c." ".$piac.","; 
                                        echo "".$tp3c." 110'/>";   
                                        echo "</g>  
                                      </g>
                                    </defs>
                                  </svg>
                                </div>
                              </td>
                            </tr>";             
                      
                      $trend = file_get_contents("https://api.betsapi.com/v1/event/stats_trend?token=1188-AHVDIRogXLjsQx&event_id=".$i);
                      $trend = json_decode($trend, true);   
                      if (isset($trend['results']['possession']['home'][0]['val'])) {  
                        echo "<tr><td colspan='18' style='border-bottom: 0'><h5 style='text-align: center'>Possession:</h5></td></tr>";                    
                        $tp = $arr['results'][$arri]['timer']['tm'] * 3;
                        echo "<tr class='table-block'>
                              <td class='possession_rt_info' colspan='18' style='border-top: 0'>
                                <div class='table-block__flex'>
                                  <h6>".$arr['results'][$arri]['home']['name']."</h6>
                                  <svg fill='currentColor' viewBox='0 0 390 125' class='demo-graph' style='color: #01579B'>
                                    <use xlink:href='#chart".$home."' />
                                  </svg>
                                  <svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 390 125' style='position: fixed; left: -1000px; height: -1000px;'>
                                    <defs>
                                      <g id='chart".$home."'>
                                        <g id='Gridlines'>
                                          <line fill='#888888' stroke='#888888' stroke-miterlimit='10' x1='0' y1='10' x2='370' y2='10' />
                                          <line fill='#888888' stroke='#888888' stroke-miterlimit='10' x1='0' y1='20' x2='370' y2='20' />
                                          <line fill='#888888' stroke='#888888' stroke-miterlimit='10' x1='0' y1='30' x2='370' y2='30' />
                                          <line fill='#888888' stroke='#888888' stroke-miterlimit='10' x1='0' y1='40' x2='370' y2='40' />
                                          <line fill='#888888' stroke='#888888' stroke-miterlimit='10' x1='0' y1='50' x2='370' y2='50' />
                                          <line fill='#888888' stroke='#888888' stroke-miterlimit='10' x1='0' y1='60' x2='370' y2='60' />
                                          <line fill='#888888' stroke='#888888' stroke-miterlimit='10' x1='0' y1='70' x2='370' y2='70' />
                                          <line fill='#888888' stroke='#888888' stroke-miterlimit='10' x1='0' y1='80' x2='370' y2='80' />
                                          <line fill='#888888' stroke='#888888' stroke-miterlimit='10' x1='0' y1='90' x2='370' y2='90' />
                                          <line fill='#888888' stroke='#888888' stroke-miterlimit='10' x1='0' y1='100' x2='370' y2='100' />
                                          <line fill='#888888' stroke='#888888' stroke-miterlimit='10' x1='0' y1='110' x2='370' y2='110' />
                                        </g>
                                        <g id='Numbers'>
                                          <text transform='matrix(1 0 0 1 375 113)' fill='#888888' font-family=''Roboto'' font-size='9'>0</text>
                                          <text transform='matrix(1 0 0 1 375 103)' fill='#888888' font-family=''Roboto'' font-size='9'>10</text>
                                          <text transform='matrix(1 0 0 1 375 93)' fill='#888888' font-family=''Roboto'' font-size='9'>20</text>
                                          <text transform='matrix(1 0 0 1 375 83)' fill='#888888' font-family=''Roboto'' font-size='9'>30</text>
                                          <text transform='matrix(1 0 0 1 375 73)' fill='#888888' font-family=''Roboto'' font-size='9'>40</text>
                                          <text transform='matrix(1 0 0 1 375 63)' fill='#888888' font-family=''Roboto'' font-size='9'>50</text>
                                          <text transform='matrix(1 0 0 1 375 53)' fill='#888888' font-family=''Roboto'' font-size='9'>60</text>
                                          <text transform='matrix(1 0 0 1 375 43)' fill='#888888' font-family=''Roboto'' font-size='9'>70</text>
                                          <text transform='matrix(1 0 0 1 375 33)' fill='#888888' font-family=''Roboto'' font-size='9'>80</text>
                                          <text transform='matrix(1 0 0 1 375 23)' fill='#888888' font-family=''Roboto'' font-size='9'>90</text>
                                          <text transform='matrix(1 0 0 1 375 13)' fill='#888888' font-family=''Roboto'' font-size='9'>100</text>
                                          <text transform='matrix(1 0 0 1 0 125)' fill='#888888' font-family=''Roboto'' font-size='9'>0</text>
                                          <text transform='matrix(1 0 0 1 25 125)' fill='#888888' font-family=''Roboto'' font-size='9'>10</text>
                                          <text transform='matrix(1 0 0 1 55 125)' fill='#888888' font-family=''Roboto'' font-size='9'>20</text>
                                          <text transform='matrix(1 0 0 1 85 125)' fill='#888888' font-family=''Roboto'' font-size='9'>30</text>
                                          <text transform='matrix(1 0 0 1 115 125)' fill='#888888' font-family=''Roboto'' font-size='9'>40</text>
                                          <text transform='matrix(1 0 0 1 145 125)' fill='#888888' font-family=''Roboto'' font-size='9'>50</text>
                                          <text transform='matrix(1 0 0 1 175 125)' fill='#888888' font-family=''Roboto'' font-size='9'>60</text>
                                          <text transform='matrix(1 0 0 1 205 125)' fill='#888888' font-family=''Roboto'' font-size='9'>70</text>
                                          <text transform='matrix(1 0 0 1 235 125)' fill='#888888' font-family=''Roboto'' font-size='9'>80</text>
                                          <text transform='matrix(1 0 0 1 265 125)' fill='#888888' font-family=''Roboto'' font-size='9'>90</text>
                                          <text transform='matrix(1 0 0 1 295 125)' fill='#888888' font-family=''Roboto'' font-size='9'>100</text>
                                          <text transform='matrix(1 0 0 1 325 125)' fill='#888888' font-family=''Roboto'' font-size='9'>110</text>
                                          <text transform='matrix(1 0 0 1 355 125)' fill='#888888' font-family=''Roboto'' font-size='9'>120</text>
                                        </g>
                                        <g id='Layer_4'>";
                        echo "<polygon opacity='0.72' stroke-miterlimit='10' points='0 110,";
                        $val = 110 - $trend['results']['possession']['home'][0]['val']; 
                        echo "0 ".$val.",";     
                        for ($b = 1; $b < count($trend['results']['possession']['home']); $b++) {
                          $tstr = $trend['results']['possession']['home'][$b]['time_str'] * 3;
                          $val = 110 - $trend['results']['possession']['home'][$b]['val'];
                          echo "".$tstr." ".$val.",";
                        }
                        echo "".$tstr." 110,";    
                        echo "".$tp." 110'/>
                                        </g>
                                      </g>
                                    </defs>
                                  </svg>
                                </div>
                                <div class='table-block__flex'>
                                  <h6>".$arr['results'][$arri]['away']['name']."</h6>
                                  <svg fill='currentColor' viewBox='0 0 390 125' class='demo-graph' style='color: #B71C1C'>
                                    <use xlink:href='#chart".$away."' />
                                  </svg>
                                  <svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 390 125' style='position: fixed; left: -1000px; height: -1000px;'>
                                    <defs>
                                      <g id='chart".$away."'>
                                        <g id='Gridlines'>
                                          <line fill='#888888' stroke='#888888' stroke-miterlimit='10' x1='0' y1='10' x2='370' y2='10' />
                                          <line fill='#888888' stroke='#888888' stroke-miterlimit='10' x1='0' y1='20' x2='370' y2='20' />
                                          <line fill='#888888' stroke='#888888' stroke-miterlimit='10' x1='0' y1='30' x2='370' y2='30' />
                                          <line fill='#888888' stroke='#888888' stroke-miterlimit='10' x1='0' y1='40' x2='370' y2='40' />
                                          <line fill='#888888' stroke='#888888' stroke-miterlimit='10' x1='0' y1='50' x2='370' y2='50' />
                                          <line fill='#888888' stroke='#888888' stroke-miterlimit='10' x1='0' y1='60' x2='370' y2='60' />
                                          <line fill='#888888' stroke='#888888' stroke-miterlimit='10' x1='0' y1='70' x2='370' y2='70' />
                                          <line fill='#888888' stroke='#888888' stroke-miterlimit='10' x1='0' y1='80' x2='370' y2='80' />
                                          <line fill='#888888' stroke='#888888' stroke-miterlimit='10' x1='0' y1='90' x2='370' y2='90' />
                                          <line fill='#888888' stroke='#888888' stroke-miterlimit='10' x1='0' y1='100' x2='370' y2='100' />
                                          <line fill='#888888' stroke='#888888' stroke-miterlimit='10' x1='0' y1='110' x2='370' y2='110' />
                                        </g>
                                        <g id='Numbers'>
                                          <text transform='matrix(1 0 0 1 375 113)' fill='#888888' font-family=''Roboto'' font-size='9'>0</text>
                                          <text transform='matrix(1 0 0 1 375 103)' fill='#888888' font-family=''Roboto'' font-size='9'>10</text>
                                          <text transform='matrix(1 0 0 1 375 93)' fill='#888888' font-family=''Roboto'' font-size='9'>20</text>
                                          <text transform='matrix(1 0 0 1 375 83)' fill='#888888' font-family=''Roboto'' font-size='9'>30</text>
                                          <text transform='matrix(1 0 0 1 375 73)' fill='#888888' font-family=''Roboto'' font-size='9'>40</text>
                                          <text transform='matrix(1 0 0 1 375 63)' fill='#888888' font-family=''Roboto'' font-size='9'>50</text>
                                          <text transform='matrix(1 0 0 1 375 53)' fill='#888888' font-family=''Roboto'' font-size='9'>60</text>
                                          <text transform='matrix(1 0 0 1 375 43)' fill='#888888' font-family=''Roboto'' font-size='9'>70</text>
                                          <text transform='matrix(1 0 0 1 375 33)' fill='#888888' font-family=''Roboto'' font-size='9'>80</text>
                                          <text transform='matrix(1 0 0 1 375 23)' fill='#888888' font-family=''Roboto'' font-size='9'>90</text>
                                          <text transform='matrix(1 0 0 1 375 13)' fill='#888888' font-family=''Roboto'' font-size='9'>100</text>
                                          <text transform='matrix(1 0 0 1 0 125)' fill='#888888' font-family=''Roboto'' font-size='9'>0</text>
                                          <text transform='matrix(1 0 0 1 25 125)' fill='#888888' font-family=''Roboto'' font-size='9'>10</text>
                                          <text transform='matrix(1 0 0 1 55 125)' fill='#888888' font-family=''Roboto'' font-size='9'>20</text>
                                          <text transform='matrix(1 0 0 1 85 125)' fill='#888888' font-family=''Roboto'' font-size='9'>30</text>
                                          <text transform='matrix(1 0 0 1 115 125)' fill='#888888' font-family=''Roboto'' font-size='9'>40</text>
                                          <text transform='matrix(1 0 0 1 145 125)' fill='#888888' font-family=''Roboto'' font-size='9'>50</text>
                                          <text transform='matrix(1 0 0 1 175 125)' fill='#888888' font-family=''Roboto'' font-size='9'>60</text>
                                          <text transform='matrix(1 0 0 1 205 125)' fill='#888888' font-family=''Roboto'' font-size='9'>70</text>
                                          <text transform='matrix(1 0 0 1 235 125)' fill='#888888' font-family=''Roboto'' font-size='9'>80</text>
                                          <text transform='matrix(1 0 0 1 265 125)' fill='#888888' font-family=''Roboto'' font-size='9'>90</text>
                                          <text transform='matrix(1 0 0 1 295 125)' fill='#888888' font-family=''Roboto'' font-size='9'>100</text>
                                          <text transform='matrix(1 0 0 1 325 125)' fill='#888888' font-family=''Roboto'' font-size='9'>110</text>
                                          <text transform='matrix(1 0 0 1 355 125)' fill='#888888' font-family=''Roboto'' font-size='9'>120</text>
                                        </g>
                                        <g id='Layer_4'>";
                        echo "<polygon opacity='0.72' stroke-miterlimit='10' points='0 110,";
                        $val = 110 - $trend['results']['possession']['away'][0]['val']; 
                        echo "0 ".$val.",";     
                        for ($b = 1; $b < count($trend['results']['possession']['away']); $b++) {
                          $tstr = $trend['results']['possession']['away'][$b]['time_str'] * 3;
                          $val = 110 - $trend['results']['possession']['away'][$b]['val'];
                          echo "".$tstr." ".$val.",";
                        }
                        echo "".$tstr." 110,";     
                        echo "".$tp." 110'/>
                                        </g>
                                      </g>
                                    </defs>
                                  </svg>
                                </div>
                              </td>
                            </tr>";
                      }                      
                      echo "</tbody>"; 
                  ?>
    <script src='js/libs__table.js'></script>