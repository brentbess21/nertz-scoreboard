import * as yup from 'yup';

const playerFormSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('A name is required')
        .min(3, 'Name must be 3 characters long')
});

export default playerFormSchema;