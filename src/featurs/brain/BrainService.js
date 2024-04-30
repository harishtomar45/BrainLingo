import axios from "axios"

const fetchStories = async () => {
    const response = await axios.get(`https://child.onrender.com/api/sciencefiction`)
    // console.log(response.data)
    return response.data
}


const storieData = async (id) => {
    const response = await axios.get(`https://child.onrender.com/api/sciencefiction/${id}`)
    // console.log(response.data)
    return response.data
}



const BrainService = {
     fetchStories,
    storieData,
}
export default BrainService;