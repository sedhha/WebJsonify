class Auth {
    constructor()
    {
        this.authenticated = false;
    }

    login(props)
    {
        this.authenticated = true;
        props();
    }

    logout(props)
    {
        this.authenticated = false;
        props();
    }

    isAuthenticated()
    {
        return this.authenticated;
    }

};

export default new Auth();