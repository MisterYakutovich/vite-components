import * as yup from 'yup';
import './ControllerForm.css';

import { useForm, SubmitHandler, FormState } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { setFormData, updatePhoto } from './redux/slices/formslice';
import { RootState } from './redux/store';
import ImageUploaderComponent from './ImageUploaderComponent';
import { yupResolver } from '@hookform/resolvers/yup';

enum GenderEnum {
  female = 'female',
  male = 'male',
  other = 'other',
}
export interface IFormInput {
  firstName: string;
  age: number;
  gender: GenderEnum;
  email: string;
  password: string;
  confirm_password: string;
  photo: string;
  acceptTerms: boolean;
}

function ControllerForm() {
  const formData = useSelector((state: RootState) => state.form);
  console.log(formData);

  const dispatch = useDispatch();
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const base64Image = e.target!.result as string;
      dispatch(updatePhoto(base64Image)); 
    };
    reader.readAsDataURL(file);
  };
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    dispatch(setFormData(data));
  };

  const getCharacterValidationError = (str: string) => {
    return `Your password must have at least 1 ${str} character`;
  };

  const schema = yup.object().shape({
    firstName: yup
      .string()
      .required()
      .matches(/^[A-Z]/, 'First name must start with an uppercase letter'),
    email: yup.string().email().required(),
    password: yup
      .string()
      .min(8)
      .max(32)
      .required()
      .matches(/[0-9]/, getCharacterValidationError('digit'))
      .matches(/[a-z]/, getCharacterValidationError('lowercase'))
      .matches(/[A-Z]/, getCharacterValidationError('uppercase'))
      .matches(/[^\w ]/g, getCharacterValidationError('simbol')),
    confirm_password: yup
      .string()
      .required()
      .oneOf([yup.ref('password')], 'Passwords must match'),
    photo: yup
    .mixed()
    .test(
      "fileSize",
      "File is too large",
      (value) =>Array.isArray(value) && value[0]?.size <= 5000000// value?.[0]?.size <= 5000000 // 5MB
    )
    .test(
      "fileType",
      "Unsupported file format",
      (value) => {
        if (Array.isArray(value)) {
          const allowedTypes = ["image/jpg", "image/png"];
          return allowedTypes.includes(value[0]?.type);
        }
        return true;
      }
    )
    .nullable(),
    age: yup
      .number()
      .required('Введите свой возраст')
      .integer('Enter an integer')
      .positive('Must be a positive value')
      .typeError('Field must be a number'),
    acceptTerms: yup
      .boolean()
      .oneOf([true], 'Accept Terms & Conditions is required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>({ resolver: yupResolver(schema) });
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input {...register('firstName')} />
      <p>{errors.firstName?.message}</p>
      <br />
      <label>Gender Selection</label>
      <select {...register('gender')}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <br />
      <label>age</label>
      <input placeholder="age" type="text" {...register('age')} />
      <p>{errors.age?.message}</p>
      <br />
      <label>email</label>
      <input {...register('email')} placeholder="email" type="email" />
      <p>{errors.email?.message}</p>
      <br />
      <label>password</label>
      <input
        {...register('password')}
        placeholder="password"
        type="password"
        required
      />
      <p>{errors.password?.message}</p>
      <br />
      <label>confirm password</label>
      <input
        {...register('confirm_password')}
        placeholder="confirm_password"
        type="password"
        required
      />
      <p>{errors.confirm_password?.message}</p>
      <br />
      <label>photo</label>
      <ImageUploaderComponent handleImageChange={handleImageChange} />
      <p>{errors.photo?.message}</p>
      <br />
      <label htmlFor="acceptTerms">Accept Terms & Conditions</label>
      <input type="checkbox" {...register('acceptTerms')} id="acceptTerms" />
      <p>{errors.acceptTerms?.message}</p>

      <input type="submit" />
    </form>
  );
}
export default ControllerForm;
