import { useAuth } from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { Error, Form, Wrapper } from '../Form/FormField.styles';
import FormField from '../Form/FormField';
import BasicButton from '../Buttons/BasicButton';
import React from 'react';
import { UnauthWrapper } from './UnauthenticatedApp.style';

const UnauthenticatedApp = () => {
  const auth = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <UnauthWrapper>
      <h1>MyGoodreads</h1>
      <h2>Sign in to application</h2>
      <Wrapper>
        <Form onSubmit={handleSubmit(auth.signIn)}>
          <FormField
            label='email'
            name='email'
            id='email'
            placeholder='email'
            isError={errors.email}
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Email is invalid',
              },
            })}
          />
          {errors.email ? (
            <>
              {errors.email.type === 'required' && <Error>{errors.email.message}</Error>}
              {errors.email.type === 'pattern' && <Error>{errors.email.message}</Error>}
            </>
          ) : null}
          <FormField
            label='password'
            name='password'
            id='password'
            type='password'
            placeholder='password'
            isError={errors.password}
            {...register('password', { required: 'Password is required' })}
          />
          {errors.password && errors.password.type === 'required' && (
            <Error>{errors.password.message}</Error>
          )}
          <BasicButton isError={errors.email || errors.password} type='submit'>
            Sign in
          </BasicButton>
        </Form>
      </Wrapper>
    </UnauthWrapper>
  );
};

export default UnauthenticatedApp;
