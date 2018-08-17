import axios from 'axios';
const api = '/api/';
const getAll = () => axios.get(`${api}/game`);

const push = (params)=>axios.post(`${api}/game`,params);

const remove = (id)=>axios.delete(`${api}/game/${id}`);

const update = (id,params)=>axios.put(`${api}/game/${id}`,params)

export {
    getAll,
    push,
    remove,
    update
}