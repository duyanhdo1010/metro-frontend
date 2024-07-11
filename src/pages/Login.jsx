import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import useLogin from '../features/authentication/useLogin';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
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

export default function Login() {
  const { register, handleSubmit, formState } = useForm();
  const { login } = useLogin();
  const { errors } = formState;

  function onSubmit(data) {
    login(data);
  }

  return (
    <FormWrapper>
      <FormHeader>Đăng nhập</FormHeader>
      {/* gọi onError khi có lỗi */}
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <FormRow>
          <StyledInput
            type="email"
            placeholder="Email"
            {...register('email', {
              required: 'Trường này là bắt buộc',
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
            })}
          />
          {errors?.email?.message && <InputError>{errors?.email?.message}</InputError>}
        </FormRow>
        <FormRow>
          <StyledInput
            type="password"
            placeholder="Password"
            {...register('password', { required: 'Trường này là bắt buộc' })}
          />
          {errors?.password?.message && <InputError>{errors?.password?.message}</InputError>}
        </FormRow>

        <StyledButton type="submit">Đăng nhập</StyledButton>
      </StyledForm>
    </FormWrapper>
  );
}
