import profileReducer, { addPost } from "./profileReducer";
let state = {
  postData: [
    { id: 1, message: "Hi! How are you?", counterLikes: 23 },
    { id: 2, message: "It's my first post!", counterLikes: 0 },
  ]
};
test('length of posts should be incremented', () => {
  let action = addPost("Hello guys!");
  let newState = profileReducer(state, action);
  expect(newState.postData.length).toBe(3);
});

test('massege was been added to posts', () => {
  let action = addPost("Hello guys!");
  let newState = profileReducer(state, action);
  expect(newState.postData[2].message).toBe("Hello guys!");
});