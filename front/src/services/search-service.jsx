import img from './avatar.png';

export default class SearchService
{
    getResult()
    {
        const result = [];
        for (let i = 0; i < 24; i++)
        {
            result.push(
                {
                    id:i,
                    avatar: img,
                    name: 'Ацамаз'
                }
            )
        }
        return result;
    }
}
