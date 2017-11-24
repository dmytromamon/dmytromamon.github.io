<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#43A047">
  <title>Marten Visser Scanner</title>
  <link href="css/libs.css" rel="stylesheet">
  <script src="js/libs__head.js"></script>
</head>
<body>
  <div id="loader">
    <img src="loader.png" alt="ball">
  </div>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <?php include 'game-stats__header.php';?>   
    <script src="js/libs.js"></script>    
    <script src="js/libs__table.js"></script>
    <script>   
      $.ajax({
        type: "get",
        url: "game-stats__main.php?id=<?php
               $label = $_GET[ "id" ];
               echo $label;
             ?>",
        cache: true,
        success: function(data){
          $(".mdl-layout--fixed-header").prepend($(data));
          componentHandler.upgradeAllRegistered();
        },
        complete: function(){
          $('#loader').fadeOut();
        }
      });
    </script>
  </div>  
</body>
</html>