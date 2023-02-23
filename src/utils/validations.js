export const errors = {};

export const checkRequired = (key, value) => {
    if (value === ''){
        errors[key] = {
            message: 'Este campo es obligatorio'
        }
        return false;
    }else {
        delete errors[key];
        return true;
    }
}

export const checkEmailPattern = (key, value) =>{
    if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)) {
        errors[key] = {
            message: 'Formato no valido'
        }
        return false;
    }else {
        delete errors[key];
        return true;
    }
}


export const checkPassword = (key, value1, value2) => {
    
    if (value1.length < 6 || value1.length > 20){
        errors[key] = {
            message: 'Tiene que tener entre 6 y 20 caracteres'
        }
        return false;
    }
    if (value1 != value2) {
        errors[key] = {
            message: 'Las contraseñas no coinciden'
        }
        return false;
    }else {
        delete errors[key];
        
        return true;
    }

}

export const checkUser = (value1, value2) => {
    if (value1 !== 'prueba@gmail.com' || value2 !== '123456') {
        errors['user'] = {
            message: 'Email y/o contraseña invalidos'
        }
        return false;
    }
    else {
        delete errors['user'];

        return true;
    }
}