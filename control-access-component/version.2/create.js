import {CreateView} from './create-view.js';

function startGUIApplication()
{
	let myCreateView = new CreateView();
	document.body.appendChild(myCreateView);
}
window.addEventListener('load',startGUIApplication );