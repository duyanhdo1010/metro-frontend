import { useForm } from 'react-hook-form';
import { useUser } from '../user/useUser';
import styled from 'styled-components';
import { useEffect } from 'react';
import useUpdateUser from './useUpdateUser';

const Form = styled.form`
  font-size: 1.4rem;
  color: var(--color-teal-9);
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 2.4rem 3.2rem;
`;

const FormRow = styled.div``;

const RowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const Label = styled.label`
  font-weight: bold;
  white-space: nowrap;
  width: 10rem;
`;

const InputError = styled.div`
  position: relative;
  color: #a90000;
  font-weight: bold;
  font-size: 1.2rem;
  left: 12rem;
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

const Input = styled.input`
  padding: 0.8rem 1.2rem;
  border: 1px solid var(--color-teal-9);
  border-radius: 100rem;
  width: 32rem;
`;

const Select = styled.select`
  padding: 0.8rem 1.2rem;
  border: 1px solid var(--color-teal-9);
  border-radius: 100rem;
  width: 32rem;
`;

function UserEditModal({ userId, onClose }) {
  const { user, isLoading } = useUser(userId);
  const { register, handleSubmit, formState, setValue } = useForm();
  const { errors } = formState;
  const { edit } = useUpdateUser();

  useEffect(() => {
    if (user) {
      setValue('name', user?.name);
      setValue('email', user?.email);
      setValue('active', user?.active);
    }
  }, [user, setValue]);

  const onSubmit = (data) => {
    edit({ userId, data });
    onClose();
  };

  if (isLoading) return <div>Getting user data...</div>;
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <RowWrapper>
          <Label htmlFor="name">Tên:</Label>
          <Input type="text" {...register('name', { required: 'Người dùng cần có tên' })} />
        </RowWrapper>
        {errors?.name?.message && <InputError>{errors?.name?.message}</InputError>}
      </FormRow>
      <FormRow>
        <RowWrapper>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="text"
            disabled
            {...register('email', { required: 'Người dùng cần email' })}
          />
        </RowWrapper>
        {errors?.email?.message && <InputError>{errors?.email?.message}</InputError>}
      </FormRow>
      <FormRow>
        <RowWrapper>
          <Label htmlFor="active">Trạng thái:</Label>
          <Select {...register('active', { required: 'Chọn trạng thái' })}>
            <option value={true}>Đang hoạt động</option>
            <option value={false}>Bị khoá</option>
          </Select>
        </RowWrapper>
        {errors?.active?.message && <InputError>{errors?.active?.message}</InputError>}
      </FormRow>
      <StyledButton type="submit">Cập nhật thông tin</StyledButton>
    </Form>
  );
}

export default UserEditModal;
