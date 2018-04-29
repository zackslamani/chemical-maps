data = '[{ "id" : "eb" ,"linkto":[ "pong" , "echo" ]},{"id" : "echo","linkto":["NULL"]},{"id" : "pong","linkto":["pepe","echo"]},{"id" : "pepe","linkto":["eb","tt"]},{"id" : "tt","linkto":["echo","rgd"]},{"id" : "tgd","linkto":["dsf","pepe"]},{"id" : "dsf","linkto":["pepe","eb"]},{"id" : "jkl","linkto":["dsf","eb"]}, { "id" : "test","linkto": ["jkl"]} ]';

set_graph = "data";
mydata ='';


display_engine = 'cose';

cy = cytoscape(
  {
    container: document.getElementById('cy'),
    element:
    { // node n1
      group: 'nodes', // 'nodes' for a node, 'edges' for an edge
      // NB the group field can be automatically inferred for you but specifying it
      // gives you nice debug messages if you mis-init elements
      selected: false, // whether the element is selected (default false)
      selectable: false, // whether the selection state is mutable (default true)
      locked: true, // when locked a node's position is immutable (default false)
      grabbable: false,
      motionBlur: false // whether the node can be grabbed and moved by the user
    },

    style:
    [ //Style pour la carte
      {
        selector: 'node',
        style:
        {
          'background-color': 'white',
          'label': 'data(id)',
          'font-size':6,
          'color': 'white',
          'width': 4,
          'height': 4
        }
      },
      {
        selector: 'edge',
        style:
        {
          'curve-style':'bezier',
          //'haystack-radius':0.5,
          'edge-distances': 'node-position',
          'width': 0.5,
          'segment-distances': "53.151 -53.151",
          'segment-weights': "0.11 0.89",
          'line-color': 'rgb(20,255,20)',
          /*'target-arrow-color': 'rgb(20,255,20)',
          'target-arrow-shape': 'triangle',
          'source-arrow-shape': 'triangle'*/
        }
      }
    ],
    minZoom: 0.5,
    maxZoom: 10,
    zoom: 0.2
  }
);
graph_cache='';


//Fonction $_GET fourni par CreativeJuiz.fr
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

function rtrim_t(str) //Function pour supprimer les charactere indesiré et la mise en LowerCase
{
  str = str.toLowerCase();
  str = str.split(' ').join('');
  str = str.split('-').join('');
  str = str.split(',').join('');
  return str;
}

function stop() //Function pour supprimer les charactere indesiré et la mise en LowerCase
{
  window.close();
}

function restart()
{
  window.reload();
}


function Highlights() //Mise en evidance des elements
{
  text = rtrim_t(document.getElementById('search_bar').value); //Nettoyage de lentree de la recherche
  console.log(text);
  if(text!="") //Check si la barre de recherche est vide
  {
    cy.nodes('[name *= "'+text+'"]').animate( //comparaison gere par cytoscape
      {
        style: //animation de groissisment
        {
          'width':10,
          'height' : 10
        }
      },
      {
        duration: 100
      }
    );
    cy.nodes('[name !*= "'+text+'"]').animate( //animation de deselection (choisi l'inverse de lautre comparaison)
      {
        style:
        {
          'width':4,
          'height' : 4
        }
      },
      {
        duration: 100
      }
    );


  }
  else //desactivation des animation si la barre de recherche n'est pas active
  {
    cy.nodes().animate(
      {
        style:
        {
          'width':4,
          'height' : 4
        }
      },
      {
        duration: 100
      }
    );
  }

}

function stdprint(input) //Ajout de code dans la console de sortie web
{
  document.getElementById('stdoutmain').innerHTML += input ;
}

function stdprintln(input) // reiniitalisation de la sortie de console est ajout du text
{
  document.getElementById('stdoutmain').innerHTML = input ;
}

function stdclear() //Clear la console web
{
  document.getElementById('stdoutmain').innerHTML = " " ;
}

function ID2JSONdata(id) //Fonction de recherche de reactif par identifiant de depart et d'arrive
{
  var j = -1;
  var k = -1;
  var l = -1;
  var m = 0;

  var found;

  console.log("Searching ID = "+id+"\n");

  do
  {
    j++;
    console.log("Search Number "+j+" : "+mydata.graph[j].id+" comapred to "+id+" up to "+mydata.graph.length+"\n");

  }
  while(j < mydata.graph.length -1 && mydata.graph[j].id != id );
  console.log("ID Found at adress : "+j);

  return mydata.graph[j];
}


function seekReactifID(name1,name2) //Fonction de recherche de reactif par identifiant de depart et d'arrive
{
  var j = -1;
  var k = -1;
  var l = -1;
  var m = 0;

  var found;

  console.log("search : reactif from "+name1+" to "+name2+"\n");

  do
  {
    j++;
    console.log("searching:"+j+" : "+mydata.graph[j].id+" comapring to "+name1+" up to "+mydata.graph.length+"\n");

  }
  while(j < mydata.graph.length -1 && mydata.graph[j].id != name1 );

  console.log("ID Found ! " + j);

  do
  {
    k++;
    console.log("searching into linkto :"+k+" : "+mydata.graph[j].linkto[k].id+" comapring to "+name2+" up to "+mydata.graph[j].linkto.length+"\n");

  }
  while(k < mydata.graph[j].linkto.length -1 && mydata.graph[j].linkto[k].id != name2  );

  console.log("Linkto ID found !" + k);

  var found ='(';
  if(k>=0 && k!=mydata.graph[j].linkto.length)
  {

    do{
        l++;
        console.log(l);
        if(l==0)
        {
          found += mydata.graph[j].linkto[k].reactifid[l] ;
        }
        else
        {
          found += " ," + mydata.graph[j].linkto[k].reactifid[l] ;
        }

      }while(l < mydata.graph[j].linkto[k].reactifid.length -1);
  }

  found +=')';
  return found;
}


// Lecture de Fichier en ligne
var reader = new XMLHttpRequest() || new ActiveXObject('MSXML2.XMLHTTP');

function loadFile(src)
{
    reader.open('get', src, true); //Obtention du fichier
    reader.onreadystatechange = Main; //Appele  de la foncion Main()
    reader.send(null);
}


//FONCTION PRICIPALE

function Main() //a effectuer une fois le telecharement terminé
{
    if(reader.readyState==4)
    {

      try {
        mydata = JSON.parse(reader.responseText);
      } catch(e) {
        alert("Invalid JSON\n\n" + e);
        
        stdclear();
        stdprint('<span style="color:red">Graph is Invalid</span>');
        return 0; // error in the above string (in this case, yes)!
      }


      //Affichage du fichier de configuration

      var x=0;
      var y=0;


      while(x<= mydata.graph.length-1)
      {
        eles = cy.add(
          [
            {
              group: "nodes",
              data:
              {
                 id: mydata.graph[x].id,
                 name: rtrim_t(mydata.graph[x].id)
              },
              grabbable: false
            }
          ]
        ); // Ajout des Neouds
        x++;
      }
      x=0;
      //Fin Ajout des neouds
      //Ajoput de Vecteurs
      while(x<= mydata.graph.length-1)
      {
        y=0;
        while(y<=mydata.graph[x].linkto.length-1)
        {
          //link(mydata.graph[x].id,mydata.graph[x].linkto[y].id,1);
          //link_O(mydata.graph[x].id,mydata.graph[x].linkto[y].id,1);
          //Decalration du vecteur pour lagorythme de Dijkstra
          eles = cy.add(
            [
              {
                group: "edges",
                data:
                {
                  id: mydata.graph[x].id + mydata.graph[x].linkto[y].id,
                  source: mydata.graph[x].id, target: mydata.graph[x].linkto[y].id,
                  weight: mydata.graph[x].linkto[y].time

                }
              }
            ]
          );
          //Ajout du vecteur au graph Cytoscape
          y++;
        }
        x++;
      }


      //Dispositon laeatiore
      cy.layout(
        {
          name: 'cose'
        }
      ).run();

      var vectores;
      var start ;
      var dst ;
      var config;
      configst = 0;
      var z ;
      var w;

      //Action a effectuer au click
      //Mode avec variable configst qui determine le comportement de laction
      //Configst
      //1=Premier click selection
      //2=Deuxieme click selection trajet ou deselection du point de depart et remise a zero de configst
      //3=Troisieme click remise a zero et remise a zero de configst
      cy.on('tap',function( event )
        {

          if(configst==0 && event.target.id != undefined && event.target.group()=='nodes')
          {
            search_bar.value = '';
            Highlights();
            console.log("Setting Up Start Point");

            start = event.target.id();
            cy.getElementById(start).nodes().animate(
              {
                style:
                {
                  'width':7,
                  'height' : 7
                }
              },
              {
                duration: 100
              }
            );


            desc_node=ID2JSONdata(start);
            console.log(desc_node);
            stdprintln("<br>"+desc_node.id+"<br>Formule : "+desc_node.formule+"<br><br>Description : "+desc_node.data);


            configst = 1;

          }

          else if(configst==1 && event.target.id != undefined && event.target.group()=='nodes')
          {
            search_bar.value = '';
            Highlights();
            stdclear();
            console.log("Setting Up End Point");
            dst = event.target.id();
            console.log(event.target.group());
            if(dst!=start)
            {

              var dijkstra = cy.elements().dijkstra(cy.getElementById(start), function(edge){
                if (mydata.weight)
                {
                  return edge.data('weight');
                }
                else {
                  return 1;
                }
                return edge.data('weight');
              },mydata.oriented);
              console.log("RESULT HERE");
              var path_cy= dijkstra.pathTo( cy.getElementById(dst) );
              console.log(path_cy);
              cy.getElementById(dst).nodes().animate(
                {
                  style:
                  {
                    'width':7,
                    'height' : 7
                  }
                },
                {
                  duration: 100
                }
              );
              x=0;
              y=0;

              //Attentuation des couleurs de tout les Verteurs
              cy.edges().animate(
                {
                  style:
                  {
                    'line-color': 'rgb(5,64,5)'
                  }
                },
                {
                  duration: 100
                }
              );
              cy.nodes().animate(
                {
                  style:
                  {
                    'color':'rgb(64,64,64)',
                    'background-color':'rgb(64,64,64)'
                  }
                },
                {
                  duration: 100
                }
              );
              stdclear();// Efface la "console"
              //mise en valeur des Vecteur representant le trajet
              x = 0;
              if(path_cy.length == 1)
              {
                stdprint("No Orented Path Found");
              }
              else
              {

                path_cy.nodes().animate(
                  {
                    style:
                    {
                      'color':'rgb(255,255,255)',
                      'background-color':'rgb(255,255,255)'
                    }
                  },
                  {
                    duration: 001
                  }
                );
                path_cy.edges()
                .animate(
                  {
                    style:
                    {
                      'line-color': 'rgb(20,255,20)',
                      'z-index': 1
                    }
                  },
                  {
                    duration: 500
                  }
                );
                while(x<path_cy.length)
                {
                  console.log(path_cy[x].id());

                  if(path_cy[x].group()=='nodes')
                  {
                    if(x>0)
                    {

                      try{
                        reactif_string = seekReactifID(path_cy[x-2].id(),path_cy[x].id());
                      }
                      catch(e)
                      {
                        if(!mydata.orentied)
                        {
                          try {
                            reactif_string = seekReactifID(path_cy[x].id(),path_cy[x-2].id());
                          }
                          catch(e){
                            alert('No "Linkto" Data Found for "'+path_cy[x-2].id()+'"\nMight due to a missing Array in the graph data\nPlease contact an Administrator\n\n'+e);
                            stop();
                          }
                        }
                        else {
                          alert('No "Linkto" Data Found for "'+path_cy[x-2].id()+'"\nMight due to a missing Array in the graph data\nPlease contact an Administrator\n\n'+e);
                          stop();
                        }

                      }
                      if(mydata.image)
                      {
                        stdprint(reactif_string+'&#10132;<span class="trajet"><img src="graphs/'+set_graph+'/'+path_cy[x].id()+'.'+mydata.image_format+'" alt="Molecule" onerror="this.src=\'/res/missing.png\';"><span class="caption">'+path_cy[x].id()+'</span></span>');
                      }
                      else {
                        stdprint(reactif_string+'&#10132;<span class="trajet"><span class="caption">'+path_cy[x].id() +'</span></span>');
                      }
                    }
                    else {
                      if(mydata.image)
                      {
                        stdprint('<span class="trajet"><img src="graphs/'+set_graph+'/'+path_cy[x].id()+'.'+mydata.image_format+'" alt="Molecule" onerror="this.src=\'/res/missing.png\';"><span class="caption">'+path_cy[x].id()+'</span></span>');
                      }
                      else {
                        stdprint('<span class="trajet"><span class="caption">'+path_cy[x].id() +'</span></span>');
                      }
                    }

                  }
                  x+=2;
                }

              }

              console.log("END");
              configst = 2;

            }
            else
            {
              //Deselection du node de depart
              cy.getElementById(dst).nodes().animate(
                {
                  style:
                  {
                    'width':4,
                    'height' : 4
                  }
                },
                {
                  duration: 100
                }
              );
              configst = 0;
            }
          }
          else if(configst == 2)
          {
            //Remise a zero
            console.log("Reset all screen");
            cy.edges().animate(
              {
                style:
                {
                  'line-color': 'rgb(20,255,20)',
                  'z-index': 0

                }
              }
            );
            cy.nodes().animate(
              {
                style:
                {
                  'width':4,
                  'height' : 4,
                  'color':'rgb(255,255,255)',
                  'background-color':'rgb(255,255,255)',
                  'z-index': 0
                }
              },
              {
                duration: 500
              }
            );
            stdclear();

            configst = 0;
          }

        }
      );

    }
}
param_url = $_GET('graph_set');
if(param_url == undefined)
{
  set_graph = "default";
}
else {
  set_graph = param_url;
}
loadFile('/graphs/'+set_graph+'/main.json');



//Lancement du telechargement et du Graph
