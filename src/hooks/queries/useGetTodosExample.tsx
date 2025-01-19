import { useQuery } from '@tanstack/react-query';
import instance from '../../apis/client';

// 타입 정의 - types 폴더에 작성한 후 import 해오기
type State = 'all' | 'open' | 'done';
type Todo = {
  id: number;
  state: State;
};
type Todos = ReadonlyArray<Todo>;

// fetch 함수 작성
const fetchTodos = async (state: State): Promise<Todos> => {
  const response = await instance.get(`todos/${state}`);
  return response.data;
};

// 커스텀 훅 작성
const useTodosQuery = (state: State) =>
  useQuery({
    queryKey: ['todos', state],
    queryFn: () => fetchTodos(state),
  });

export default useTodosQuery;
