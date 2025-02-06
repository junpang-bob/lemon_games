import { Axios } from 'axios'

const api = new Axios({
	baseURL: 'http://localhost:5173/api'
})

function apiCreateCat() {
	return api.post('create')
}

export { apiCreateCat }
