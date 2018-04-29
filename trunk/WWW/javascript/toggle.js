var STEP_NUMBER = 15;

// Durée d'un pas d'incrémentation (en millisecondes).
var STEP_TIME = 15;
var current_opacity=1;


function display_menu()
{
  menu.style.display="unset";
}

function hide_menu(){
  current_opacity = 1;
  timer = setInterval(fade_menu, STEP_TIME);
}



function fade_menu()
{
	// Décrémente la hauteur courante.
	current_opacity -= 1 / STEP_NUMBER;

	// Si la hauteur courante devient négative ou nulle.
	if (current_opacity <= 0)
	{
		// On stoppe le time.
		clearInterval(timer);
		timer = null;

		// On définit la valeur courante à 0.
		current_opacity = 0;

		// On camoufle le paragraphe.

    current_opacity = 1;
		menu.style.display = "none";
	}
  console.log("none" + current_opacity );
	// Assigne la hauteur courante au paragraphe.
	menu.style.opacity = current_opacity;


}
