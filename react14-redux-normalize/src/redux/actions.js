import { normalize } from "normalizr";
import * as schemas from "./schemas";

export const actionTypes = {
  FETCH_POSTS: "FETCH_POSTS",
  SELECT_AUTHOR: "SELECT_AUTHOR",
  ADD_POST: "ADD_POST",
  DELETE_POST: "DELETE_POST",
};

export const fetchPosts = (posts) => {
  const normalizedPosts = normalize(posts, [schemas.PostSchema]);

  return {
    type: actionTypes.FETCH_POSTS,
    payload: {
      ids: {
        posts: Object.keys(normalizedPosts.entities.posts),
        authors: Object.keys(normalizedPosts.entities.authors),
      },
      entities: normalizedPosts.entities,
    },
  };
};

export const deletePost = (id) => ({
  type: actionTypes.DELETE_POST,
  payload: id,
});

// export const addPost = () => ({
//   type: actionTypes.ADD_POST,
//   payload: {
//     ids: {
//       posts: ["cool-id"],
//     },
//     entities: {
//       posts: {
//         "cool-id": { id: "cool-id", title: "title!" },
//       },
//     },
//   },
// });

export const selectAuthor = (id) => ({
  type: actionTypes.SELECT_AUTHOR,
  payload: id,
});
