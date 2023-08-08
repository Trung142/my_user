import axios from "./axios"
const UseCampaign = (page) => {
    return axios.get(`/api/users?page=${page}`)
}
const PostuserAddModal = (name, job) => {
    return axios.post("/api/users", { name, job });
}
const PustuserEditUser = (name, job) => {
    return axios.put("/api/users/2", { name, job });
}
const DeletelistUser = (id) => {
    return axios.delete("/api/users/2", { id });
}
const Loginuser = (email, password) => {
    return axios.post("/api/login", { email, password });
}
export { UseCampaign, PostuserAddModal, PustuserEditUser, DeletelistUser, Loginuser };