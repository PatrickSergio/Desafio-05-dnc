import axios from "axios";

const BASE_URL = "http://localhost:3000/api/books";

const LivrosService = {
    getLivros() {
        return axios.get(BASE_URL);
    },

    getLivro(id) {
        return axios.get(`${BASE_URL}/${id}`);
    },

    createLivro(body) {
        return axios.post(BASE_URL, body);
    },

    updateLivro(id, body) {
        return axios.put(`${BASE_URL}/${id}`, body);
    },

    deleteLivro(id) {
        return axios.delete(`${BASE_URL}/${id}`);
    }
};

export default LivrosService;
