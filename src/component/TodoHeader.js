import styled from 'styled-components';

const Head = styled.div`
  padding: 30px 24px 8px;
  position: relative;
  border-bottom: 2px solid #beda94;
  &::before {
    content: '';
    width: 100%;
    height: 76px;
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    top: -15px;
    transform: translate(-50%, -50%);
  }
`;

const TodoHeader = () => {
  return (
    <Head>
      <h1>Todo List</h1>
    </Head>
  );
};

export default TodoHeader;
