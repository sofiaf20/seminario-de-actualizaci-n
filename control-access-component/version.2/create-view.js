/*<h1>Create User Form Screen</h1>
<input id="usernameInput" type="text" placeholder="Nombre de usuario" value="">
<input id="passwordInput" type="password" placeholder="Contraseña" value="">
<button id="createUserButton">Create User</button>*/
class CreateView extends HTMLElement //canvas o caja html
{
    constructor()
    {
        super();

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

        this.usernameLabel = document.createElement('label');
        this.usernameLabel.innerText = 'crear usuario';
        this.usernameLabel.style.fontWeight = 'bold';

        this.usernameInput = document.createElement('input');
        this.usernameInput.classList.add("w3-input", "w3-border", "w3-margin-bottom");
        this.usernameInput.placeholder = "Ingresar nombre de usuario";
        this.usernameInput.setAttribute('required','true');

        this.passwordLabel = document.createElement('label');
        this.passwordLabel.innerText = 'crear contrasenia';
        this.passwordLabel.style.fontWeight = 'bold';

        this.passwordInput = document.createElement('input');
        this.passwordInput.type = 'password';
        this.passwordInput.classList.add("w3-input", "w3-border", "w3-margin-bottom");
        this.passwordInput.placeholder = "Ingresar contrasenia";
        this.passwordInput.setAttribute('required','true');

        this.createUserButton = document.createElement('button');
        this.createUserButton.innerText = 'Crear';
        this.createUserButton.classList.add("w3-button", "w3-block", "w3-green", "w3-section", "w3-padding");
        
       
    }
    getFormValues()
    {
	    let createFormData =
	    {
		    username: null,
		    password: null
	    };

	    createFormData.username = this.usernameInput.value;
	    createFormData.password = this.passwordInput.value;

	    return createFormData;
       
    }
    createNotify( data )
    {
	    if ( data.status == 'OK')
	    {
		    alert('Usuario creado '+data.response );
	    }else{
		    alert('ERROR: '+data.description);
	    }
    }
    //ERROR Uncaught (in promise) SyntaxError: JSON.parse: unexpected character at line 2 column 1 of the JSON data
    onCreateUserButtonClick(data)
    {
        console.log( this.getFormValues() );
	    fetch('./create.php', { method:'post', body: JSON.stringify(this.getFormValues()) } )
	    .then( response => response.json() )
	    .then( response => { this.createNotify(response) } );
	
    }
    connectedCallback() 
    {
        
        this.container.appendChild(this.loginImage);
        this.container.appendChild(this.loginForm);

        this.loginForm.appendChild(this.usernameLabel);
        this.loginForm.appendChild(this.usernameInput);
        this.loginForm.appendChild(this.passwordLabel);
        this.loginForm.appendChild(this.passwordInput);

        this.loginForm.appendChild(this.createUserButton);
        

        this.createUserButton.addEventListener('click', () => this.onCreateUserButtonClick());

        this.appendChild(this.container);
    }
    
}
customElements.define('x-create-view', CreateView);

export {CreateView};
