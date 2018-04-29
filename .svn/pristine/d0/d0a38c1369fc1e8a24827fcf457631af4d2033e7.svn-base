<!-- Le type d'encodage des données, enctype, DOIT être spécifié comme ce qui suit -->
<meta  charset="utf-8"/>
<link rel="stylesheet" href="../style/style.css" />
<style>

input[type=text]
{

  position:relative;
  display:inline;
  width: 100%;
  margin : 10px;
  padding: 7px 5px;
  max-width:100px;
  align: center;
  border : 2px;
  border-color:rgb(255,255,255);
  box-sizing: border-box;
  background-color: rgba(25,25,25,1);
  border-radius : 4px;
  font-family: "maFonte";
}
</style>

<body>
  <box>
    <p>
      Setup
    </p>
  </box>
  <div class="scroll_zone">
    <br>
    <br>
    <br>
    <form enctype="multipart/form-data" action="upload.php" method="post">
      <input type="hidden" name="MAX_FILE_SIZE" value="999999" />
      <br><input type="text" name="graph_name" placeholder="Name ..."/>
      <br><input name="userfile" type="file" accept=".json" />
      <br><input type="submit" value="Upload New Graph" />
    </form>
    <br>
    <h2 style="color:white">Graphs List</h2>
    <p><?php foreach (scandir("../graphs") as $file) {
      if($file == ".." || $file == ".")
      {

      }
      else
      {
        echo '<p onClick = \'window.location.href = location.protocol + "//" + location.host + location.pathname+ "?graph='.$file.'"\'>'.$file.'</p>';
      }
    }?></p>
    <div id="consol_window" style="display:none">
      <box>
        <div class = "close_button" onClick='window.history.back();'>×</div>
        <h2 style='color:white'> CONSOLE </h2>
      </box>

      <p id="console">
        <br>
        <br>
        <br>
        <br>
      </p>
    </div>
  </div>
  <script src='res/check.js'></script>
</body>
