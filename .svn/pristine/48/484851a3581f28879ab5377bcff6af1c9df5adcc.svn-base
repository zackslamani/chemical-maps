<?php

  mkdir('../graphs/'.$_POST['graph_name'], 0777);
  $uploaddir = '../graphs//'.$_POST['graph_name'].'//';
  $uploadfile = $uploaddir . basename($HTTP_POST_FILES['userfile']['name']);

  //echo '<pre>';
  if (move_uploaded_file($_FILES['userfile']['tmp_name'], '../graphs//'.$_POST['graph_name']."/main.json"))
  {
    /*  echo "Le fichier est valide, et a été téléchargé
             avec succès. Voici plus d'informations :\n";*/
  }
  /*else
  {
      echo "Attaque potentielle par téléchargement de fichiers.
            Voici plus d'informations :\n";
  }

  echo 'Voici quelques informations de débogage :';
  print_r($_FILES);

  echo '</pre>';*/
  if($_FILES['userfile']['error']==0)
  {
    echo "<script type='text/javascript'>document.location.replace('index.php?success=true&graph=".$_POST['graph_name']."');</script>";
  }
  else {
    echo "<script type='text/javascript'>document.location.replace('index.php?success=false');</script>";
  }


  exit();

?>
