class Auth
{
    constructor()
    {
        this.authenticated = false;
    }
    login(props)
    {
        this.authenticated = true;
        this.jsonData = props;
    }
    logout()
    {
        this.authenticated = false;
    }
    isAuthenticated()
    {
        return this;
    }

}

export default new Auth();