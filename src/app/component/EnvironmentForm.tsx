import { FC, FormEvent, useState } from 'react';
import { API } from '@/api/API';
import styled from '@emotion/styled';
import { Button } from '@/app/component/button/Button';

const Container = styled.div`
  background-color: aliceblue;
`;

export const EnvironmentForm: FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleOnChangeName = (event: FormEvent<HTMLInputElement>) =>
    setName(event.currentTarget.value);

  const handleOnChangeDescription = (event: FormEvent<HTMLInputElement>) =>
    setDescription(event.currentTarget.value);

  const handleOnSubmit = () => {
    const request = {
      name,
      description: description || undefined
    };
    API.environment.create(request).then(() => console.log(name,'environment created'));
  };

  return (
    <Container>
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleOnChangeName} required={true}/>
        <input type="text" name="description" placeholder="Description"
               onChange={handleOnChangeDescription}/>
        <Button title="Create environment" type="submit"/>
      </form>
    </Container>
  );
};