import { useAuth } from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { Error, Form, Wrapper } from '../Form/FormField.styles';
import FormField from '../Form/FormField';
import BasicButton from '../Buttons/BasicButton';
import React from 'react';

const UnauthenticatedApp = () => {
  const auth = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1
        style={{
          margin: '100px 0 30px 0',
        }}
      >
        MyGoodreads
      </h1>
      <h2
        style={{
          marginBottom: '100px',
        }}
      >
        Sign in to application
      </h2>
      <Wrapper>
        <Form
          onSubmit={handleSubmit(auth.signIn)}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
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
    </div>
  );
};

export default UnauthenticatedApp;
