import API from './api';

export const signUp = async ({ username, password, firstname, lastname, email }) => {
    try {
        const res = await API.post('/account/signup', {
            username: username,
            password: password,
            firstname: firstname,
            lastname: lastname,
            email: email
        });
        return {
            status: true,
            data:res
        }
    } catch (err) {
        return {
            status: false,
            masage:'sign up failed'
        }
    }
}