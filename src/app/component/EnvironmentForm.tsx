import { FC, FormEvent, useState } from 'react';
import { API } from '@/api/API';
import styled from '@emotion/styled';
import { Button } from '@/app/component/button/Button';

const Container = styled.div`
  background-color: aliceblue;
`;

const H1 = styled.h1`
  color: green;
  font-size: 50px;
`;

export const EnvironmentForm: FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isCreated, setIsCreated] = useState(false);

  const handleOnChangeName = (event: FormEvent<HTMLInputElement>) =>
    setName(event.currentTarget.value);

  const handleOnChangeDescription = (event: FormEvent<HTMLInputElement>) =>
    setDescription(event.currentTarget.value);

  const handleOnSubmit = () => {
    const request = {
      name,
      description: description || undefined
    };
    console.log('Request:', request);
    API.environment.create(request)
      .then(() => {
        setIsCreated(true);
        console.log('isCreated:', isCreated);
        console.log('Environment created successfully');
      });
  };

  return (
    <Container>
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleOnChangeName} required={true}/>
        <input type="text" name="description" placeholder="Description"
               onChange={handleOnChangeDescription}/>
        <Button title="Create environment" type="submit"/>
        {isCreated && <H1>Environment with name {name} created successfully</H1>}
      </form>
    </Container>
  );
};