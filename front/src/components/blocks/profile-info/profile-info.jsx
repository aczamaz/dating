import React from 'react';
import './profile-info.css';
const ProfileInfo = (props) =>
{
    const {userData} = props;
    const info = [
        {
            id:1,
            name:"Имя",
            value: userData.name
        },
        {
            id:2,
            name: "Возраст",
            value: userData.age
        },
        {
            id:3,
            name: "Пол",
            value: userData.gender==="m"?"Мужской":"Женский"
        },
    ]
    return(
        <div className="profile-info">
            <img src={userData.avatar_dir} alt="" />
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
