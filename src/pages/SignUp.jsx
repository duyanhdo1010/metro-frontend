import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  border: 2px solid var(--color-teal-9);
  padding: 2.4rem 3.2rem;
  border-radius: 2.4rem;
  background-color: var(--color-teal-0);
`;
const FormWrapper = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.6rem;
`;

const StyledButton = styled.button`
  text-transform: uppercase;
  font-weight: bold;
  color: var(--color-teal-0);
  background-color: var(--color-teal-6);
  padding: 0.8rem 1.2rem;
  border-radius: 1000px;
  cursor: pointer;
  &:hover,
  &:active {
    background-color: var(--color-teal-9);
  }
`;

const StyledInput = styled.input`
  padding: 0.8rem 1.2rem;
  border: 1px solid var(--color-teal-9);
  border-radius: 100rem;
  width: 32rem;

  &::placeholder {
    color: var(--color-teal-9);
  }
`;

const FormHeader = styled.h1`
  font-size: 2.4rem;
  color: var(--color-teal-9);
`;

const InputError = styled.div`
  /* position: absolute; */
  /* top: 5.5rem; */
  color: #a90000;
  font-weight: bold;
  font-size: 1.2rem;
`;

const FormRow = styled.div`
  position: relative;
`;

export default function SignUp() {
  const { register, handleSubmit, getValues, formState } = useForm();
  const { errors } = formState;
  const onSubmit = (data) => console.log(data);

  return (
    <FormWrapper>
      <FormHeader>Đăng ký tài khoản</FormHeader>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <FormRow>
          <StyledInput
            type="text"
            placeholder="Tên"
            {...register('name', { required: 'Name is required' })}
          />
          {errors?.name?.message && <InputError>{errors?.name?.message}</InputError>}
        </FormRow>
        <FormRow>
          <StyledInput
            type="email"
            placeholder="Email"
            {...register('email', {
              required: 'Email is required',
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
            })}
          />
          {errors?.email?.message && <InputError>{errors?.email?.message}</InputError>}
        </FormRow>
        <FormRow>
          <StyledInput
            type="password"
            placeholder="Mật khẩu"
            {...register('password', { required: 'Password is required' })}
          />
          {errors?.password?.message && <InputError>{errors?.password?.message}</InputError>}
        </FormRow>
        <FormRow>
          <StyledInput
            type="password"
            placeholder="Xác nhận mật khẩu"
            {...register('passwordConfirm', {
              required: 'Password Confirm is required',
              // value cua truong passwordConfirm
              validate: (value) =>
                value === getValues('password') || 'Confirm password must be the same with password'
            })}
          />
          {errors?.passwordConfirm?.message && (
            <InputError>{errors?.passwordConfirm?.message}</InputError>
          )}
        </FormRow>

        <StyledButton type="submit">Đăng ký</StyledButton>
      </StyledForm>
    </FormWrapper>
  );
}
