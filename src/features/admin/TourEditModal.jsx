/* eslint-disable no-unused-vars */
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useTour } from './../tour/useTour';
import { useEffect, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';
import { vi } from 'date-fns/locale';
import useUpdateTour from './useUpdateTour';

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

const Location = styled.li`
  position: relative;
  padding: 0.4rem 0.8rem;
  background-color: var(--color-teal-7);
  display: inline-block;
  text-align: center;
  border-radius: 1000px;
  color: var(--color-teal-0);
  font-weight: 500;
  margin-top: 1.2rem;
  margin-right: 1.2rem;
`;

const LocationDelete = styled.button`
  position: absolute;
  color: var(--color-teal-9);
  font-size: 1.6rem;
  border: none;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  top: -1rem;
  right: -1rem;
`;

const ImageDelete = styled.button`
  position: absolute;
  color: var(--color-teal-9);
  font-size: 1.6rem;
  border: none;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  top: -1rem;
  right: -1rem;
`;

const LocationList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 12rem;
  padding: 1rem;
  border: 1px solid var(--color-teal-9);
  border-radius: 4px;
  transition:
    border-color 0.3s,
    box-shadow 0.3s;
  &:focus {
    border-color: #4caf50;
    box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
    outline: none;
  }
`;

const StyledPreviewImage = styled.img`
  height: 8rem;
  width: 12rem;
  /* border-radius: 50%; Làm cho hình ảnh trở nên tròn */
  cursor: pointer;
  object-fit: cover;
`;

const FileLabel = styled.label`
  display: inline-block;
  padding: 0.6rem 0.9rem;
  cursor: pointer;
  text-decoration: underline;
`;

const ImageContainer = styled.div`
  position: relative;
`;

const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: 'wrap';
  gap: 1.2rem;
  margin-top: 1.2rem;
`;

function TourEditModal({ tourId, onClose }) {
  const [locations, setLocations] = useState([]);
  const [locationInput, setLocationInput] = useState('');
  const { tour, isLoading } = useTour(tourId);
  const { register, handleSubmit, formState, setValue } = useForm();
  const { errors } = formState;

  // handle images
  const [imageCover, setImageCover] = useState(null);
  const [selectedImageCover, setSelectedImageCover] = useState(null);
  const [images, setImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);

  const { edit } = useUpdateTour();

  const onImagesChange = (event) => {
    if (event.target.files) {
      const newFiles = Array.from(event.target.files);
      const newImage = Array.from(event.target.files).map((file) => URL.createObjectURL(file));
      setImages((images) => [...images, ...newImage]);
      setSelectedImages((prevSelected) => [...prevSelected, ...newFiles]);
    }
  };

  const onImageCoverChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      if (imageCover) URL.revokeObjectURL(imageCover);
      setImageCover(URL.createObjectURL(event.target.files[0]));
      setSelectedImageCover(event.target.files[0]);
    }
  };

  const handleRemoveImage = (index) => {
    // functional update state (thay vì dùng setState(newValue)) thì dùng
    // setState(prevState => {
    //   Logic xử lý dựa trên prevState (bảo đảm việc luôn có state mới nhất)
    //   return newState; VD: setCount(prevCount => prevCount + 1); bản thân arrow function là return r
    // });
    setImages((prevImages) => {
      const newImages = [...prevImages];
      URL.revokeObjectURL(newImages[index]);
      return newImages.filter((_, i) => i !== index);
    });
    setSelectedImages((prevSelected) => {
      const newSelected = [...prevSelected];
      newSelected.filter((_, i) => i !== index);
      return newSelected;
    });
  };

  const handleAddLocation = () => {
    if (locationInput.trim() !== '') {
      setLocations([...locations, locationInput]);
      setLocationInput('');
    }
  };

  const handleRemoveLocation = (index) => {
    setLocations(locations.filter((_, i) => i !== index));
  };

  // handle dates
  const [startDates, setStartDates] = useState([]);

  useEffect(() => {
    if (tour) {
      setValue('name', tour?.name);
      setValue('duration', tour?.duration);
      setValue('price', tour?.price);
      setValue('maxGroupSize', tour?.maxGroupSize);
      setValue('discount', tour?.discount);
      setValue('description', tour?.description);
      setLocations(tour?.locations || []);
      setImages(tour?.images || []);
      if (tour?.startDates) {
        const dates = tour?.startDates.map((dateString) => new Date(dateString));
        setStartDates(dates);
      }
    }
  }, [tour, setValue]);

  // useEffect(() => {
  //   return () => {
  //     if (imageCover) URL.revokeObjectURL(imageCover);
  //     images.forEach(URL.revokeObjectURL);
  //   };
  // }, [imageCover, images]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('duration', data.duration);
    formData.append('maxGroupSize', data.maxGroupSize);
    formData.append('price', data.price);
    formData.append('discount', data.discount);
    formData.append('description', data.description);

    if (selectedImageCover) {
      formData.append('imageCover', selectedImageCover);
    }
    // FormData không truyền thẳng array vào được vì nó sẽ nhận thằng array dưới dạng string
    // nên ta loop qua từng thẳng rồi kiểu append(key, value) thì key sẽ nhận được nhiều value
    // Xử lý locations
    locations.forEach((location) => {
      formData.append('locations', location);
    });

    // Xử lý images
    if (selectedImages.length > 0) {
      selectedImages.forEach((file) => {
        formData.append('images', file);
      });
    }

    // Xử lý startDates
    if (startDates.length > 0) {
      startDates.forEach((date) => {
        formData.append('startDates', date.toISOString());
      });
    }

    // hoạt động như console log
    // for (let [key, value] of formData.entries()) {
    //   console.log(key, value);
    // }

    edit({ tourId, formData });
    onClose();
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <h1>Cập nhật thông tin Tour</h1>
      <FormRow>
        <RowWrapper>
          <StyledPreviewImage
            alt="tour imageCover"
            src={imageCover || `http://localhost:3000/img/tours/${tour?.imageCover}`}
          />
          <div>
            <FileLabel htmlFor="imageCover">Thay đổi ảnh bìa tour</FileLabel>
            <Input
              id="imageCover"
              {...register('imageCover')}
              onChange={onImageCoverChange}
              type="file"
              style={{ display: 'none' }}
              accept="image/*"
            />
          </div>
        </RowWrapper>
        {errors?.imageCover?.message && <InputError>{errors?.imageCover?.message}</InputError>}
      </FormRow>
      <FormRow>
        <RowWrapper>
          <Label htmlFor="name">Tên:</Label>
          <Input type="text" {...register('name', { required: 'Tour cần có tên' })} />
        </RowWrapper>
        {errors?.name?.message && <InputError>{errors?.name?.message}</InputError>}
      </FormRow>
      <FormRow>
        <RowWrapper>
          <Label htmlFor="duration">Duration:</Label>
          <Input type="number" {...register('duration', { required: 'Tour cần duration' })} />
        </RowWrapper>
        {errors?.duration?.message && <InputError>{errors?.duration?.message}</InputError>}
      </FormRow>
      <FormRow>
        <RowWrapper>
          <Label htmlFor="price">Giá:</Label>
          <Input type="number" {...register('price', { required: 'Tour cần giá' })} />
        </RowWrapper>
        {errors?.price?.message && <InputError>{errors?.price?.message}</InputError>}
      </FormRow>
      <FormRow>
        <RowWrapper>
          <Label htmlFor="maxGroupSize">Số khách tối đa:</Label>
          <Input
            type="number"
            {...register('maxGroupSize', { required: 'Tour cần số lượng khách tối đa' })}
          />
        </RowWrapper>
        {errors?.maxGroupSize?.message && <InputError>{errors?.maxGroupSize?.message}</InputError>}
      </FormRow>
      <FormRow>
        <RowWrapper>
          <Label htmlFor="discount">Giảm giá:</Label>
          <Input type="number" {...register('discount')} />
        </RowWrapper>
        {errors?.discount?.message && <InputError>{errors?.discount?.message}</InputError>}
      </FormRow>
      <FormRow>
        <RowWrapper>
          <Label htmlFor="locations">Địa điểm:</Label>
          <Input
            type="text"
            value={locationInput}
            onChange={(e) => setLocationInput(e.target.value)}
            placeholder="Nhập và Enter để thêm địa điểm."
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleAddLocation(); //khi enter sẽ gọi hành động add location
                e.preventDefault(); // Ngăn chặn hành động mặc định của phím Enter (bthg nó submit thì phải)
              }
            }}
          />
          {/* <StyledButton type="button" onClick={handleAddLocation}>
            Thêm
          </StyledButton> */}
        </RowWrapper>
        <LocationList>
          {locations.map((location, index) => (
            <Location key={index}>
              {location}
              <LocationDelete type="button" onClick={() => handleRemoveLocation(index)}>
                &times;
              </LocationDelete>
            </Location>
          ))}
        </LocationList>
      </FormRow>
      <FormRow>
        <RowWrapper>
          <Label htmlFor="description">Mô tả:</Label>
          <StyledTextArea
            id="description"
            {...register('description', { required: 'Tour cần mô tả' })}
          />
        </RowWrapper>
        {errors?.description?.message && <InputError>{errors?.description?.message}</InputError>}
      </FormRow>
      <FormRow>
        <RowWrapper>
          <FileLabel htmlFor="images">Tải lên các ảnh mô tả cho tour</FileLabel>
          <Input
            id="images"
            {...register('images')}
            onChange={onImagesChange}
            type="file"
            style={{ display: 'none' }}
            multiple
            accept="image/*"
          />
        </RowWrapper>
        <ImagesContainer>
          {images.map((preview, index) => (
            <ImageContainer key={index}>
              <StyledPreviewImage
                key={index}
                src={`http://localhost:3000/img/tours/${preview}` || preview}
                alt={`Preview ${index + 1}`}
              />
              <ImageDelete type="button" onClick={() => handleRemoveImage(index)}>
                &times;
              </ImageDelete>
            </ImageContainer>
          ))}
        </ImagesContainer>
      </FormRow>
      <FormRow>
        <RowWrapper>
          <Label htmlFor="startDates">Ngày khởi hành:</Label>
          <DayPicker
            min={1}
            mode="multiple"
            required
            locale={vi}
            selected={startDates}
            disabled={{ before: new Date() }}
            onSelect={setStartDates}
          />
        </RowWrapper>
        {errors?.startDates?.message && <InputError>{errors?.startDates?.message}</InputError>}
      </FormRow>
      <StyledButton type="submit">Cập nhật thông tin</StyledButton>
    </Form>
  );
}

export default TourEditModal;
