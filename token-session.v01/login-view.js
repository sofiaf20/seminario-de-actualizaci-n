//import {HomeController} from './controller.js';

class LoginView extends HTMLElement //canvas o caja html
{
    //contructor(externalModel)
	constructor(){

        super(); //invocacion de la clase base

        this.container = document.createElement('div');
        this.container.classList.add("w3-container", "w3-modal-content", "w3-card-4", "w3-animate-zoom", "w3-center");
        this.container.style.maxWidth ='600px';

        this.loginImage = document.createElement('img');
        this.loginImage.src = 'avatar.png';
        this.loginImage.classList.add('w3-circle', 'w3-margin-top');
        this.loginImage.alt = 'Avatar';
        this.loginImage.style.width = '30%';

        this.loginForm = document.createElement('div');
        this.loginForm.classList.add("w3-container", "w3-section");
        //loginForm.action = "/action_page.php";

        this.usernameLabel = document.createElement('label');
        this.usernameLabel.innerText = 'Username';
        this.usernameLabel.style.fontWeight = 'bold';

        this.usernameInput = document.createElement('input');
        this.usernameInput.classList.add("w3-input", "w3-border", "w3-margin-bottom");
        this.usernameInput.placeholder = "Enter Username";
        this.usernameInput.setAttribute('required','true');

        this.passwordLabel = document.createElement('label');
        this.passwordLabel.innerText = 'Password';
        this.passwordLabel.style.fontWeight = 'bold';

        this.passwordInput = document.createElement('input');
        this.passwordInput.type = 'password';
        this.passwordInput.classList.add("w3-input", "w3-border", "w3-margin-bottom");
        this.passwordInput.placeholder = "Enter Password";
        this.passwordInput.setAttribute('required','true');

        this.loginButton = document.createElement('button');
        this.loginButton.innerText = 'Login';
        this.loginButton.classList.add("w3-button", "w3-block", "w3-green", "w3-section", "w3-padding");


    }

    getFormValues()
    {
        /*let createFormData =
	    {
		    username: null,
		    password: null
	    };

	    createFormData.username = this.usernameInput.value;
	    createFormData.password = this.passwordInput.value;

	    return createFormData;*/
        let values = {
            username: this.usernameInput.value,
            password: this.passwordInput.value
        }
        return values;
    }
    getSessionToken()
    {
	    let authData =
	    {
		    token: window.sessionStorage.getItem('token')
	    };

	    return authData;
    }
    welcomeView( data )
    {
	    if ( data.status == 'OK')
	    {
		    alert('Bienvenido al sistema usuario: '+data.response );
		    window.sessionStorage.setItem('token', data.response );
	    }else
	    {
		    alert('ERROR: '+data.description);
	    }
    }
    onValidateUserButtonClick(data)
    {
	    
	   fetch('./login-token.php', { method:'post', body: JSON.stringify(this.getFormValues()) } )
	    .then( response => response.json() )
	    .then( response => { this.welcomeView(response) } );
	
    }
        

    connectedCallback(){


        this.container.appendChild(this.loginImage);
        this.container.appendChild(this.loginForm);

        this.loginForm.appendChild(this.usernameLabel);
        this.loginForm.appendChild(this.usernameInput);
        this.loginForm.appendChild(this.passwordLabel);
        this.loginForm.appendChild(this.passwordInput);

        this.loginForm.appendChild(this.loginButton);

       this.loginButton.addEventListener('click', ()=>this.onValidateUserButtonClick());

       this.appendChild(this.container);
    }
    
}
customElements.define('x-login-view', LoginView);

export {LoginView};
