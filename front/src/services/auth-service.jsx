import axios from 'axios';
class AuthService
{
    url_auth = 'http://dating/api/';
    registration = async (data) =>{
        console.log(data);
        const formData = new FormData;
        for (let key in data)
        {
            formData.append( key,(typeof data[key] === "object") ? data[key][0] : data[key]);
        };
        return axios.post(`${this.url_auth}registration`,
            formData, {
            headers: {
                'accept': 'application/json',
                'Accept-Language': 'en-US,en;q=0.8',
                'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
            }
        }
        ).then((response)=>{
            return response.data;
        })
        .catch((error)=>
        {
            return error.data;
        });
    }
}
export default AuthService;
