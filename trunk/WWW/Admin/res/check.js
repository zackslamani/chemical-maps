err_cpt = 0;
warn_cpt = 0;
msg_cpt = 0;

function stderr(input)
{
  document.getElementById('console').innerHTML +=  "<span style=\"color:red\">" +input +" </span> <br>"  ;
  err_cpt++;

}

function stdwarn(input)
{
  document.getElementById('console').innerHTML +=  "<span style=\"color:yellow\">" +input +" </span> <br>" ;
  warn_cpt++;
}

function stdok(input)
{
  document.getElementById('console').innerHTML += "<span style=\"color:white\">" +input +" </span> <br>" ;
  msg_cpt++;
}


function $_GET(param) {
	var vars = {};
	window.location.href.replace( location.hash, '' ).replace(
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			vars[key] = value !== undefined ? value : '';
		}
	);

	if ( param ) {
		return vars[param] ? vars[param] : null;
	}
	return vars;
}

var reader = new XMLHttpRequest() || new ActiveXObject('MSXML2.XMLHTTP');


function loadFile(src)
{
    reader.open('get', src, true); //Obtention du fichier
    reader.onreadystatechange = Main; //Appele  de la foncion Main()
    reader.send(null);
}

function Main()
{
  if(reader.readyState==4)
  {
	if($_GET('success')==false)
	{
		return 0;
	}
  try
	{
    mydata = JSON.parse(reader.responseText);
     //Obtention du contenu du ficher (reader.responseText) et parse du JSON en tableau
  }
  catch(e)
	{
    stderr("JSON is Invalid:"+e);
    return 0;
  }
  if((typeof mydata.oriented)=="boolean")
  {

  }
  else {
    stderr("\"oriented\" : is not Boolean or is Undefined");
  }
	if((typeof mydata.weight)=="boolean")
	{

	}
	else {
		stderr("\"Weigth\" : is not a Boolean or is Undefined");
	}
	if(mydata.image==true)
	{
		if(mydata.image_format=="png"||mydata.image_format=="jpg"||mydata.image_format=="jpeg"||mydata.image_format=="svg"||mydata.image_format=="tiff")
		{

		}
    else if(typeof mydata.image_format == "string"){
			stdwarn("\"Image_Format\" : \""+mydata.image_format+"\" is not an expected image format");
		}
		else {
			stdwarn("\"Image_Format\" : is not a String or is Undefined");
		}
	}
	else if (mydata.image==false)
	{

	}
	else{
		stderr("\"Image\" : is not a Boolean or is Undefined");
	}


	if((typeof mydata.oriented == "boolean"))
	{

	}
	else {
		stderr("\"oriented\" : is not Boolean or is undefined");
	}
  x=0;
  if(Array.isArray(mydata.graph))
  {
    while(x< mydata.graph.length)
    {
      y=0;
      if(typeof mydata.graph[x].id=="string"||typeof mydata.graph[x].id == "number")
      {
        while(y<=mydata.graph[x].linkto.length-1)
        {
          if((typeof mydata.graph[x].linkto[y].id)==="string")
          {

          }
          else if ((typeof mydata.graph[x].linkto[y].id)!="undefined") {
            stdwarn("unexpected type of data for the \"id\" at number "+y+" in linkto array number "+x+" corresponding to id:\""+mydata.graph[x].id+"\" in graph array");
          }
          else if((typeof mydata.graph[x].linkto[y].id)=="undefined")
          {

            stderr("missing \"id\"  at number "+y+" in linkto array number "+x+" associated to id:\""+mydata.graph[x].id+"\" in graph array");
          }
          if(mydata.weight==true)
          {
            if(typeof mydata.graph[x].linkto[y].time == "number")
            {

            }
            else {
              stdwarn("not supported type of data for the \"time\" at number "+y+" in linkto array number "+x+" corresponding to id:\""+mydata.graph[x].id+"\" in graph array");
            }
          }
          else if (mydata.weight==false) {

          }
          else {
            stdwarn("\"Weight\" : is not a Boolean or is not defined , Graph will be Working without Nodes Weight");
          }

          y++;
        }
      }
      else if(typeof mydaya.graph[x].id!="undefined")
      {
        stdwarn("unexpected type of data for the \"id\" number "+x+" in graph array");
      }
      else {
        stderr("missing \"id\" at number "+x+" in graph array");
      }
      x++;
    }
  }
  else
  {
    stderr("\"Graph\" : is not an Array or is Undefined");
  }
  stdok("<br><br><br> Messages : "+msg_cpt + " / Warnings : "+ warn_cpt +" / Errors : "+err_cpt);
}
}

if ($_GET('graph')!=undefined)
{
  consol_window.style.display = "unset";
  loadFile("../graphs/"+$_GET('graph')+"/main.json");

}
