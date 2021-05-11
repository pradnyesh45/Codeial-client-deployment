// const proxyurl = "https://cors-anywhere.herokuapp.com/";
// const API_ROOT = "http://localhost:8000/api/v1";
// const API_ROOT = proxyurl + url;
const API_ROOT = "http://codeial.codingninjas.com:8000/api/v2/";
// const API_ROOT2 = "http://localhost:8000/api/v1";

export const APIUrls = {
  // shop: () => `${API_ROOT2}/shop`,
  login: () => `${API_ROOT}/users/login`,
  signup: () => `${API_ROOT}/users/signup`,
  editProfile: () => `${API_ROOT}/users/edit`,
  fetchPosts: () => `${API_ROOT}/posts/`,
  // fetchPosts: (page = 1, limit = 25) =>
  //   `${API_ROOT}/posts?page=${page}&limit=${limit}`,
  userProfile: (userId) => `${API_ROOT}/users/${userId}`,
  userFriends: () => `${API_ROOT}/friendship/fetch_user_friends`,
  addFriend: (userId) =>
    `${API_ROOT}/friendship/create_friendship?user_id=${userId}`,
  removeFriend: (userId) =>
    `${API_ROOT}/friendship/remove_friendship?user_id=${userId}`,
  createPost: () => `${API_ROOT}/posts/create`,
  createComment: () => `${API_ROOT}/comments/`,
  toggleLike: (id, likeType) =>
    `${API_ROOT}/likes/toggle?likeable_id=${id}&likeable_type=${likeType}`,
  userSearch: (searchText) => `${API_ROOT}/users/search?text=${searchText}`,
};
