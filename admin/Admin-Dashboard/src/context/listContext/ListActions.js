export const getListsStart = () => ({
  type: "GET_LISTS_START",
});

export const getListsSuccess = (lists) => ({
  type: "GET_LISTS_SUCCESS",
  payload: lists,
});

export const getListsFailure = () => ({
  type: "GET_LISTS_FAILURE",
});

export const createListStart = () => ({
  type: "CREATE_LIST_START",
});

export const createListSuccess = (list) => ({
  type: "CREATE_LIST_SUCCESS",
  payload: list,
});

export const createListFailure = () => ({
  type: "CREATE_LIST_FAILURE",
});
//Update

export const updateListStart = () => ({
  type: "UPDATE_LIST_START",
});

export const updateListSuccess = (movie) => ({
  type: "UPDATE_LIST_SUCCESS",
  payload: movie,
});

export const updateListFailure = () => ({
  type: "UPDATE_LIST_FAILURE",
});
//delete

export const deleteListStart = () => ({
  type: "DELETE_LIST_START",
});

export const deleteListSuccess = (id) => ({
  type: "DELETE_LIST_SUCCESS",
  payload: id,
});

export const deleteListFailure = () => ({
  type: "DELETE_LIST_FAILURE",
});

export const updateMovieFailure = () => ({
  type: "UPDATE_MOVIE_FAILURE",
});

//Delete
export const deleteMovieStart = () => ({
  type: "DELETE_MOVIES_START",
});
export const deleteMovieSuccess = (id) => ({
  type: "DELETE_MOVIES_SUCCESS",
  payload: id,
});
export const deleteMovieFailure = () => ({
  type: "DELETE_MOVIES_FAILURE",
});
