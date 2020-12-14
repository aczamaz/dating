import React from 'react';
import './profile-info.css';
import img from './avatar.png';
const ProfileInfo = (props) =>
{
    const {userData} = props;
    console.log(userData);
    const info = [
        {
            id:1,
            name:"Имя",
            value: userData.name
        },
        {
            id:2,
            name: userData.age,
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
            <img src={userData.img} alt="" />
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
