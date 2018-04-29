<?php
  $data=file_get_contents("res/template.html");
  $element = " ";
  $ls = scandir("./graphs");
  foreach($ls as $file)
  {
    if($file=="."||$file=="..")
    {

    }
    else
    {
      $element .= '<p onClick = \'window.location.href = location.protocol + "//" + location.host + location.pathname+ "?graph_set='.$file.'"\'>'.$file.'</p><br>'."\n       ";
    }

  }
  $data = str_replace("<GRAPH-LIST>",$element,$data); //rem
  echo $data;
?>
