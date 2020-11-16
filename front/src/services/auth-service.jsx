class AuthService
{
    url_auth = 'http://dating/api/';
    registration = async (data) =>{
        const rawResponse = await fetch(`${this.url_auth}registration`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return await rawResponse.json();
    }
}
export default AuthService;
