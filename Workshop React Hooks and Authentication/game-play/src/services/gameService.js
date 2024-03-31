import * as request from "./requseter";

const baseUrl = "http://localhost:3030/data/games";

export const getAll = () => {
  return request.get(baseUrl);
};

export const create = (gameData) => {
  return request.post(baseUrl, gameData);
};

export const getOne = (gameId) => {
  return request.get(`${baseUrl}/${gameId}`);
};

export const edit = (gameId, gameData) => {
  return request.put(`${baseUrl}/${gameId}`, gameData);
}