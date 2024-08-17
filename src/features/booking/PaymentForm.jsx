/* eslint-disable no-unused-vars */
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import useCreateBooking from './useCreateBooking';

const Form = styled.form`
  max-height: 60rem;
  font-size: 1.4rem;
  color: var(--color-teal-7);
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 2.4rem 3.2rem;
  overflow-y: auto; /* Thêm dòng này để cho phép cuộn khi nội dung vượt quá chiều cao */
`;

const PaymentHeader = styled.h1`
  font-size: 2.4rem;
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
  width: 15rem;
`;

const Input = styled.input`
  padding: 0.8rem 1.2rem;
  border: 1px solid var(--color-teal-9);
  border-radius: 100rem;
  width: 32rem;
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

function PaymentForm({ tourPrice, user }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const { create, isLoading } = useCreateBooking();

  const onSubmit = (data) => {
    // console.log(data);
    create({ price: tourPrice, paid: false });
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <PaymentHeader>Thông tin người đặt</PaymentHeader>
      <FormRow>
        <RowWrapper>
          <Label htmlFor="name">Tên:</Label>
          <Input type="text" defaultValue={user?.name} disabled />
        </RowWrapper>
      </FormRow>
      <FormRow>
        <RowWrapper>
          <Label htmlFor="name">Email:</Label>
          <Input type="text" defaultValue={user?.email} disabled />
        </RowWrapper>
      </FormRow>
      <FormRow>
        <RowWrapper>
          <Label htmlFor="name">Giá:</Label>
          <Input type="text" defaultValue={tourPrice} disabled />
        </RowWrapper>
      </FormRow>
      <StyledButton type="submit">Đặt Tour</StyledButton>
    </Form>
  );
}

export default PaymentForm;
