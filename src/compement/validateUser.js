const ValidateUser = (values) => {
    let errors = {};
    const password_patern = /^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/;
    const email_patern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    //check email
    if (values.email === '') {
        errors.email = "Name should not be empty !";
    } else if (!email_patern.test(values.email)) {
        errors.email = "Email din't match ! ";
    } else {
        errors.email = "";
    }
    //check password
    if (values.password === '') {
        errors.password = "Password should not be empty !";
    } else if (!password_patern.test(values.password)) {
        errors.password = "Pasword din't match !";
    } else {
        errors.password = '';
    }
    return errors;
}
export default ValidateUser;