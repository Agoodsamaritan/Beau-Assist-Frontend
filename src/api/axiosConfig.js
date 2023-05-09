import axios from 'axios'

export default axios.create({
    baseURL: 'http://ec2-3-16-125-114.us-east-2.compute.amazonaws.com:8080'
})