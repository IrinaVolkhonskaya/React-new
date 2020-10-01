import { createSelector } from 'reselect';

const getAuthorIds = (state) => state.authors.ids; //массив id

export const getSelectedAuthorId = (state) => state.authors.selectedId;

const getAuthorEntities = (state) => state.entities.authors;

export const getAllAuthors = createSelector(
    [getAuthorIds, getAuthorEntities], 
    (ids, entities) => ids.map((id) => entities[id]),
);

// export const getAllAuthors = (state) => {
//   const ids = getAuthorIds(state);
//   const entities = getAuthorEntities(state);

//   return ids.map((id) => entities[id]);
// };

const getPostsId = (state) => state.posts;
const getPostEntities = (state) => state.entities.posts;

export const getPostsWithAuthor = (state) => {
  const authorId = getSelectedAuthorId(state);
  const postIds = getPostsId(state);
  const entities = getPostEntities(state);

  const posts = postIds.reduce((acc, postId) => {
    const post = entities[postId];

    if (post.author === authorId) {
      acc.push(post);
    }

    return acc;
  }, []);

  // const posts = [];
  // postIds.forEach(postId => {
  //     const post = entities[postId];

  //     if(post.author === authorId) {
  //         posts.push(post);
  //     }
  // });

  return posts;
};
