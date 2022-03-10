import { Form, Formik } from 'formik';
import '../styles/styles.css';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Page</h1>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: ''
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                            .min(2, 'Nombre debe tener al menos 3 caracteres')
                            .max(15, 'Nombre debe tener menos de 15 caracteres')
                            .required('Campo requerido'),
                        email: Yup.string()
                            .email('Formato de correo no es válido')
                            .required('Campo requerido'),
                        password1: Yup.string()
                            .min(6, 'Debe tener mínimo 6 caracteres')
                            .required('Campo requerido'),
                        password2: Yup.string()
                            .oneOf([Yup.ref('password1')], 'Contraseñas no coinciden')
                            .required('Campo requerido')
                    })
                }
            >
                {
                    ({ handleReset }) => (
                        <Form>
                            <MyTextInput
                                label='Nombre'
                                name='name'
                                placeholder='Nombre'
                            />
                            <MyTextInput
                                label='Email'
                                name='email'
                                type='email'
                                placeholder='Email'
                            />
                            <MyTextInput
                                label='Password1'
                                name='password'
                                type='password'
                                placeholder='Ingrese contraseña'
                            />
                            <MyTextInput
                                label='Password2'
                                name='password'
                                type='password'
                                placeholder='Confirme contraseña'
                            />
                            <button type="submit">Create</button>
                            <button type="button" onClick={handleReset}>Reset form</button>
                        </Form>
                    )
                }
            </Formik>

        </div>
    );
}

export default RegisterFormikPage;