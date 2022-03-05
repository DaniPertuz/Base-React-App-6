import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

const FormikComponents = () => {
    return (
        <div>
            <h1>Formik Components</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={(values) => { }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must be up to 15 characters')
                        .required('First name is required'),
                    lastName: Yup.string()
                        .max(15, 'Must be up to 15 characters')
                        .required('Last name is required'),
                    email: Yup.string()
                        .email('Email is not valid')
                        .required('Email is required'),
                    terms: Yup.boolean()
                        .oneOf([true], 'Terms must be accepted'),
                    jobType: Yup.string()
                        .notOneOf(['it-junior'], 'This option is not valid')
                        .required('Job is required')
                })
                }
            >
                {
                    formik => (
                        <Form>
                            <label htmlFor="firstName">First name</label>
                            <Field name='firstName' type='text' placeholder='First name' />
                            <ErrorMessage name='firstName' component='span' />

                            <label htmlFor="lastName">Last name</label>
                            <Field name='lastName' type='text' placeholder='Last name' />
                            <ErrorMessage name='lastName' component='span' />

                            <label htmlFor="email">Email address</label>
                            <Field name='email' type='email' placeholder='Email' />
                            <ErrorMessage name='email' component='span' />

                            <label>
                                <Field name='terms' type='checkbox' />
                                Terms & conditions
                            </label>
                            <ErrorMessage name='terms' component='span' />

                            <label htmlFor='jobType'>Job type</label>
                            <Field name='jobType' as="select">
                                <option value="">Select...</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT Senior</option>
                                <option value="it-junior">IT Junior</option>
                            </Field>
                            <ErrorMessage name='jobType' component='span' />

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    );
}

export default FormikComponents;