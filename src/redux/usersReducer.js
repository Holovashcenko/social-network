const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let intialState = {
  users: [
    // {
    //     id: 1,
    //     photoURL: "https://avatarko.ru/img/kartinka/1/multfilm_gomer.png",
    //     followed: false,
    //     fullName: "Archy",
    //     status: "I'm a boss!",
    //     location:
    //     {
    //         city: "Kyiv",
    //         country: "Ukraine"
    //     }
    // },
    // {
    //     id: 2,
    //     photoURL: "https://avatarko.ru/img/kartinka/1/multfilm_gomer.png",
    //     followed: true,
    //     fullName: "Alla", status: "I'm a woman!",
    //     location:
    //     {
    //         city: "Kyiv",
    //         country: "Ukraine"
    //     }
    // },
    // {
    //     id: 3,
    //     photoURL: "https://avatarko.ru/img/kartinka/1/multfilm_gomer.png",
    //     followed: false,
    //     fullName: "Anyta",
    //     status: "I'm a girl!",
    //     location:
    //     {
    //         city: "Kyiv",
    //         country: "Ukraine"
    //     }
    // }
],
};

const usersReducer = (state = intialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userID) {
            return { ...u, followed: true }
          }
          return u;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userID) {
            return { ...u, followed: false }
          }
          return u;
        })
      }
    case SET_USERS:
      return {
        ...state,
        users: [ ...state.users, ...action.users ]
      }
    default:
      return state;
  }
};

export const followAC = (userID) => ({ type: FOLLOW, userID });
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;