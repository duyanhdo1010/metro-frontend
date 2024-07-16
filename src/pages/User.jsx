/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useUpdateMe from './../features/user/useUpdateMe';

const Form = styled.form`
  font-size: 1.4rem;
  color: var(--color-teal-9);
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 2.4rem 3.2rem;
`;

const StyledPreviewAvatar = styled.img`
  max-height: 6rem;
  width: auto;
  border-radius: 50%; /* Làm cho hình ảnh trở nên tròn */
  cursor: pointer;
`;

const FormRow = styled.div``;

const RowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.2rem;
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

const Input = styled.input`
  padding: 0.8rem 1.2rem;
  border: 1px solid var(--color-teal-9);
  border-radius: 100rem;
  width: 32rem;
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
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

const FileLabel = styled.label`
  display: inline-block;
  padding: 0.6rem 0.9rem;
  cursor: pointer;
  text-decoration: underline;
`;

function User() {
  const { updateMe } = useUpdateMe();
  const { user } = useSelector((state) => state.auth);
  const { register, handleSubmit, formState, setValue } = useForm();
  const { errors } = formState;

  // image cho preview image va selectedFile danh cho file gui di
  const [image, setImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
      setSelectedFile(event.target.files[0]);
    }
  };

  function onSubmit(data) {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    if (selectedFile) {
      formData.append('photo', selectedFile);
    }
    // Kiểm tra nội dung của FormData
    // for (let [key, value] of formData.entries()) {
    //   console.log(key, value);
    // }

    updateMe(formData);
  }

  useEffect(() => {
    if (user) {
      setValue('name', user?.name);
      setValue('email', user?.email);
      setValue('phone', user?.phone);
      setValue('photo', user?.photo);
    }
  }, [user, setValue]);
  return (
    <Container>
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
            <Input type="text" {...register('email', { required: 'Người dùng cần có tên' })} />
          </RowWrapper>
          {errors?.email?.message && <InputError>{errors?.email?.message}</InputError>}
        </FormRow>
        <FormRow>
          <RowWrapper>
            <Label htmlFor="phone">Số điện thoại:</Label>
            <Input
              type="text"
              {...register('phone', { required: 'Người dùng cần có số điện thoại' })}
            />
          </RowWrapper>
          {errors?.phone?.message && <InputError>{errors?.phone?.message}</InputError>}
        </FormRow>
        <FormRow>
          <RowWrapper>
            <StyledPreviewAvatar
              alt="user photo"
              src={image || `http://localhost:3000/img/users/${user?.photo}`}
            />
            <FileLabel htmlFor="photo">Thay đổi ảnh đại diện</FileLabel>
            <Input
              id="photo"
              {...register('photo')}
              onChange={onImageChange}
              type="file"
              style={{ display: 'none' }}
              accept="image/*"
            />
          </RowWrapper>
          {errors?.photo?.message && <InputError>{errors?.photo?.message}</InputError>}
        </FormRow>
        <StyledButton type="submit">Cập nhật thông tin</StyledButton>
      </Form>
    </Container>
  );
}

export default User;
