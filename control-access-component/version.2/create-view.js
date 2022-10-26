
class CreateView extends HTMLElement 
{
    constructor()
    {
        super();

        this.container = document.createElement('div');
        this.container.classList.add("w3-modal-content","w3-center");
        this.container.style.maxWidth ='600px';
        
        this.loginImage = document.createElement('img');
        this.loginImage.src = 'avatar.png';
        this.loginImage.classList.add('w3-circle', 'w3-margin-top');
        this.loginImage.alt = 'Avatar';
        this.loginImage.style.width = '30%';

        this.loginForm = document.createElement('div');
        this.loginForm.classList.add("w3-section");

        this.usernameLabel = document.createElement('label');
        this.usernameLabel.innerText = 'Usuario';
        this.usernameLabel.style.fontWeight = 'bold';

        this.usernameInput = document.createElement('input');
        this.usernameInput.classList.add("w3-input", "w3-border", "w3-margin-bottom");
        this.usernameInput.placeholder = "Ingresar nombre de usuario";
        this.usernameInput.setAttribute('required','true');

        this.passwordLabel = document.createElement('label');
        this.passwordLabel.innerText = 'Contraseñia';
        this.passwordLabel.style.fontWeight = 'bold';

        this.passwordInput = document.createElement('input');
        this.passwordInput.type = 'password';
        this.passwordInput.classList.add("w3-input", "w3-border", "w3-margin-bottom");
        this.passwordInput.placeholder = "Ingresar contrasenia";
        this.passwordInput.setAttribute('required','true');

        this.createUserButton = document.createElement('button');
        this.createUserButton.innerText = 'Crear';
        this.createUserButton.classList.add("w3-button","w3-green", "w3-section", "w3-padding");
        
        this.updateUserButton = document.createElement('button');
        this.updateUserButton.innerText = 'Editar';
        this.updateUserButton.classList.add("w3-button","w3-green", "w3-section", "w3-padding");

        this.deleteUserButton = document.createElement('button');
        this.deleteUserButton.innerText = 'Borrar';
        this.deleteUserButton.classList.add("w3-button","w3-green", "w3-section", "w3-padding");
        
        this.getUserButton = document.createElement('button');
        this.getUserButton.innerText = 'Pedir usuarios';
        this.getUserButton.classList.add("w3-button","w3-green", "w3-section", "w3-padding");
       
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
    getUserValues()
    {
	    let values = {
            username: this.usernameInput.value,
            password: this.passwordInput.value
        }

	    return values;
       
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
    deleteNotify( data )
    {
	    if ( data.status == 'OK')
	    {
		    alert('Usuario borrado '+data.response );
	    }else{
		    alert('ERROR: '+data.description);
	    }
    }
    updateNotify( data )
    {
	    if ( data.status == 'OK')
	    {
		    alert('Usuario editado '+data.response );
	    }else{
		    alert('ERROR: '+data.description);
	    }
    }
    
    onCreateUserButtonClick(data)
    {
        console.log( this.getFormValues() );
	    fetch('./create.php', { method:'post', body: JSON.stringify(this.getFormValues()) } )
	    .then( response => response.json() )
	    .then( response => { this.createNotify(response) } );
	
    }
    onDeleteUserButtonClick(data)
    {
        console.log( this.getUserValues() );
	    fetch('./delete.php', { method:'post', body: JSON.stringify(this.getUserValues()) } )
	    .then( response => response.json() )
	    .then( response => { this.deleteNotify(response) } );
	
    }
    //no funciona update
    onUpdateUserButtonClick(data)
    {
        console.log( this.getUserValues() );
	    fetch('./update.php', { method:'post', body: JSON.stringify(this.getUserValues()) } )
	    .then( response => response.json() )
	    .then( response => { this.updateNotify(response) } );
	
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
        this.loginForm.appendChild(this.updateUserButton);
        this.loginForm.appendChild(this.deleteUserButton);
        this.loginForm.appendChild(this.getUserButton);
        

        this.createUserButton.addEventListener('click', () => this.onCreateUserButtonClick());
        this.deleteUserButton.addEventListener('click', () => this.onDeleteUserButtonClick());
        //no funciona update
        this.updateUserButton.addEventListener('click', () => this.onUpdateUserButtonClick());
        this.appendChild(this.container);
    }
    
}
customElements.define('x-create-view', CreateView);

export {CreateView};
