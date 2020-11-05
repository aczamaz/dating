import React from 'react';
import './profile-info.css';
import img from './avatar.png';
const ProfileInfo = (props) =>
{
    const info = [
        {
            id:1,
            name:"Имя",
            value:"Ацамаз"
        },
        {
            id:2,
            name: "Возраст",
            value: 26
        },
        {
            id:3,
            name: "Пол",
            value: "Мужской"
        },
    ]
    return(
        <div className="profile-info">
            <img src={img} alt="" />
            <div className="profile-info__lines">
                {
                    info.map((line)=>{
                        return(
                            <div className="profile-info__line" key={line.id}>
                                <div className="profile-info__name">
                                    {line.name}:
                                </div>
                                <div className="profile-info__value">
                                    {line.value}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}
export default ProfileInfo;
