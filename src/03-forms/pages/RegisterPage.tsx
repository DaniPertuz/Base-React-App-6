import { FormEvent } from 'react';
import '../styles/styles.css';
import { useForm } from '../hooks/useForm';

const RegisterPage = () => {

    const { formData, isValidEmail, onChange, resetForm } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: ''
    });

    const { name, email, password1, password2 } = formData;

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <div>
            <h1>Register Page</h1>
            <form
                noValidate
                onSubmit={onSubmit}
            >
                <input
                    type="text"
                    placeholder='Name'
                    name='name'
                    value={name}
                    onChange={onChange}
                    className={`${name.trim().length <= 0 && 'hasError'}`}
                />
                {name.trim().length <= 0 && <span>Este campo es necesario</span>}

                <input
                    type="text"
                    placeholder='Email'
                    name='email'
                    value={email}
                    onChange={onChange}
                    className={`${!isValidEmail(email) && 'hasError'}`}
                />
                {!isValidEmail(email) && <span>Este email no es válido</span>}

                <input
                    type="password"
                    placeholder='Password'
                    name='password1'
                    value={password1}
                    onChange={onChange}
                />
                {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
                {password1.trim().length < 6 && password1.trim().length > 0 && <span>La contraseña debe tener mínimo 6 caracteres</span>}

                <input
                    type="password"
                    placeholder='Repeat Password'
                    name='password2'
                    value={password2}
                    onChange={onChange}
                />
                {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
                {password1.trim() !== password2.trim() && <span>Las contraseñas no coinciden</span>}

                <button type="submit">Create</button>
                <button type="button" onClick={resetForm}>Reset form</button>
            </form>
        </div>
    );
}

export default RegisterPage;