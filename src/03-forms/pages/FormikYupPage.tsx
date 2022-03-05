import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

const FormikYupPage = () => {

    const { handleSubmit, errors, touched, getFieldProps } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: (values) => { },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be up to 15 characters')
                .required('First name is required'),
            lastName: Yup.string()
                .max(15, 'Must be up to 15 characters')
                .required('Last name is required'),
            email: Yup.string()
                .email('Email is not valid')
                .required('Email is required')
        })
    });

    return (
        <div>
            <h1>Formik Yup</h1>
            <form noValidate onSubmit={handleSubmit}>

                <label htmlFor="firstName">First name</label>
                <input type="text" {...getFieldProps('firstName')} />
                {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

                <label htmlFor="lastName">Last name</label>
                <input type="text" {...getFieldProps('lastName')} />
                {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

                <label htmlFor="email">Email address</label>
                <input type="email" {...getFieldProps('email')} />
                {touched.email && errors.email && <span>{errors.email}</span>}

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default FormikYupPage;