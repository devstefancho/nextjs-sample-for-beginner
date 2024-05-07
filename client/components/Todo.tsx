import { FC } from 'react';

interface PropTypes {
  id: number;
  title: string;
}

const Todo: FC<PropTypes> = ({ id, title }) => {
  return (
    <>
      <h2>Todo Card</h2>
      <div>Id : {id}</div>
      <div>Title : {title}</div>
    </>
  );
};

export default Todo;
