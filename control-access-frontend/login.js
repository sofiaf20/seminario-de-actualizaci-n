import {LoginView} from './login-view.js';
//import {HomeModel} from './model.js';

function startGUIApplication()
{
	let myLoginView = new LoginView();
	document.body.appendChild(myLoginView);
}
window.addEventListener('load',startGUIApplication );
