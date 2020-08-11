import axios from 'axios'
import { API_LINK } from './config'

export default axios.create({
    baseURL: API_LINK
})