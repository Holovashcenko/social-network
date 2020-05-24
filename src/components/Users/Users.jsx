import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/gomer.png";
import { NavLink } from "react-router-dom";
import Axios from "axios";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for (let i = 1; i < pagesCount + 1; i++) {
        pages.push(i);
    }
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div className={s.ava}>
                            <NavLink to={`/profile/${u.id}`}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} />
                            </NavLink>
                        </div>
                        <div>
                            {
                                u.followed ?
                                    <button onClick={() => {
                                        Axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "f57c9cb3-d026-4f04-b5f2-533d0c26d865"
                                            }
                                        })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.unfollow(u.id)
                                                }
                                            });
                                    }}>Unfollow</button>
                                    :
                                    <button onClick={() => {
                                        Axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "f57c9cb3-d026-4f04-b5f2-533d0c26d865"
                                            }
                                        })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.follow(u.id)
                                                }
                                            });
                                    }}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.city"}</div>
                            <div>{"u.location.country"}</div>
                        </span>
                    </span>
                </div>)
            }
            <div className={s.pages}>{pages.map(p => {
                return <span className={`${props.currentPage === p && s.selectedPage} ${s.pageNumber}`} onClick={() => { props.onPageChanged(p) }}>{p}</span>
            })}
            </div>
        </div>
    )
}

export default Users;