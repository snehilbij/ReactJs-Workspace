class AuthenticationService{
    registerSuccessfulLogin(username, password){
        console.log('Successful Login');
        sessionStorage.setItem('AuthenticatedUser', username);
    }

    logout(){
        sessionStorage.removeItem('AuthenticatedUser');
    }

    isUserLoggedin(){
        let user = sessionStorage.getItem('AuthenticatedUser');
        if(user===null) return false
        else return true
    }
}

export default new AuthenticationService