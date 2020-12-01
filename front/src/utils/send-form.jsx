import axios from 'axios';

const sendForm = async (data,url) =>
{
    const formData = new FormData();
    for (let key in data)
    {
        formData.append(key, (typeof data[key] === "object") ? data[key][0] : data[key]);
    };
    return await axios.post(`${url}`,
        formData,
        {
            headers:
            {
                'accept': 'application/json',
                'Accept-Language': 'en-US,en;q=0.8',
                'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
            }
        }
    ).then((response) =>
        {
            return response.data;
        }
    )
    .catch((error) =>
        {
            return error.data;
        }
    );
}

export default sendForm;
