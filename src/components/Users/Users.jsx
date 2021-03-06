import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/gomer.png";
import { NavLink } from "react-router-dom";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for (let i = 1; i < pagesCount + 1; i++) {
        pages.push(i);
    }
    return (
        <div>
            {
                props.users.map(
                    u =>
                        <div key={u.id}>
                            <span>
                                <div className={s.ava}>
                                    <NavLink to={`/profile/${u.id}`}>
                                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="ava" />
                                    </NavLink>
                                </div>
                                <div>
                                    {
                                        u.followed
                                            ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                                onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                                onClick={() => { props.follow(u.id) }}>Follow</button>
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
                        </div>
                )
            }
            <div className={s.page}>
                {
                    pages.map((p) => {
                        return <span key={props.id} className={`${props.currentPage === p && s.selectedPage} ${s.pageNumber}`}
                            onClick={() => { props.onPageChanged(p) }}>{p}</span>

                    })
                }
            </div>
        </div>
    )
}

export default Users;