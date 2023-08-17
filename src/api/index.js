import axios from "axios";

export const BaseUrl= "https://localhost:44380/api/";

export const EndPoints = {   //controller names
    user:"user",
    student: "student",
    teacher: "teacher",
    course:"course",
    student_login : "student/userControl",
    teacher_login : "teacher/userControl",
    base:"base"
}

export const createAPIEndpoint = endpoint => {

    let url = BaseUrl + endpoint + "/";

    return {
        get : () => axios.get(url),
        getById: id => axios.get(url + id),
        post: newUser => axios.post(url, newUser),  
        put: updateUser => axios.put(url, updateUser ),
        delete: id=> axios.delete(url + id),
    
    }

    
}


