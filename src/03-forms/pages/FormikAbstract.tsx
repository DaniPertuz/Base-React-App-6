import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';
import { MyCheckbox, MySelect, MyTextInput } from '../components';

const FormikAbstract = () => {
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
                            <MyTextInput
                                label='First name'
                                name='firstName'
                                placeholder='First name'
                                type='text' />

                            <MyTextInput
                                label='Last name'
                                name='lastName'
                                placeholder='Last name'
                                type='text' />

                            <MyTextInput
                                label='Email'
                                name='email'
                                placeholder='Email'
                                type='email' />

                            <MySelect name='jobType' label='Job type' >
                                <option value="">Select...</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT Senior</option>
                                <option value="it-junior">IT Junior</option>
                            </MySelect>

                            <MyCheckbox label='Terms & conditions' name='terms' />

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    );
}

export default FormikAbstract;