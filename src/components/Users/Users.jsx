import React, { useCallback } from "react";
import s from "./Users.module.css";

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoURL: "https://avatarko.ru/img/kartinka/1/multfilm_gomer.png",
                    followed: false,
                    fullName: "Archy",
                    status: "I'm a boss!",
                    location:
                    {
                        city: "Kyiv",
                        country: "Ukraine"
                    }
                },
                {
                    id: 2,
                    photoURL: "https://avatarko.ru/img/kartinka/1/multfilm_gomer.png",
                    followed: true,
                    fullName: "Alla", status: "I'm a woman!",
                    location:
                    {
                        city: "Kyiv",
                        country: "Ukraine"
                    }
                },
                {
                    id: 3,
                    photoURL: "https://avatarko.ru/img/kartinka/1/multfilm_gomer.png",
                    followed: false,
                    fullName: "Anyta",
                    status: "I'm a girl!",
                    location:
                    {
                        city: "Kyiv",
                        country: "Ukraine"
                    }
                }
            ]
        )
    }

    return <div>
        {
            props.users.map( u => <div key={u.id}>
                    <span>
                        <div className={s.ava}><img src={u.photoURL} /></div>
                        <div>{u.followed ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button> : <button onClick={() => { props.follow(u.id) }}>Follow</button>}</div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                        </span>
                    </span>
                </div>)
        }
    </div>

};

export default Users;
