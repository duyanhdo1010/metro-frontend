/* eslint-disable no-unused-vars */
import { useForm } from 'react-hook-form';
import { useUser } from '../user/useUser';
import styled from 'styled-components';
import { useEffect } from 'react';
import useUpdateUser from './useUpdateUser';
import { useBooking } from '../booking/useBooking';
import useUpdateBooking from './useUpdateBooking';

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
  width: 20rem;
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

function BookingEditModal({ BookingId, onClose }) {
  const { booking, isLoading } = useBooking(BookingId);
  const { register, handleSubmit, formState, setValue } = useForm();
  const { errors } = formState;
  const { edit } = useUpdateBooking();

  useEffect(() => {
    if (booking) {
      setValue('createdAt', new Date(booking?.createdAt).toLocaleDateString('en-GB'));
      setValue('paid', booking?.paid);
    }
  }, [booking, setValue]);

  const onSubmit = (data) => {
    const newObject = { paid: data.paid };
    edit({ BookingId, data: newObject });
    onClose();
  };

  if (isLoading) return <div>Getting booking data...</div>;
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <RowWrapper>
          <Label htmlFor="email">Tên Tour:</Label>
          <Input type="text" disabled defaultValue={booking?.tour?.name} />
        </RowWrapper>
      </FormRow>
      <FormRow>
        <RowWrapper>
          <Label htmlFor="email">Ngày đặt Tour:</Label>
          <Input type="text" disabled {...register('createdAt')} />
        </RowWrapper>
        {errors?.createdAt?.message && <InputError>{errors?.createdAt?.message}</InputError>}
      </FormRow>
      <FormRow>
        <RowWrapper>
          <Label htmlFor="active">Trả tiền:</Label>
          <Select {...register('paid', { required: 'Chọn trạng thái' })}>
            <option value={true}>Đã trả tiền</option>
            <option value={false}>Chưa trả tiền</option>
          </Select>
        </RowWrapper>
        {errors?.active?.message && <InputError>{errors?.active?.message}</InputError>}
      </FormRow>
      <StyledButton type="submit">Cập nhật thông tin</StyledButton>
    </Form>
  );
}

export default BookingEditModal;
