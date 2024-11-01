import { renderHook, waitFor } from '@testing-library/react';
import { act } from 'react';
import { useTodo } from './useTodo';
import {
  fetchTodoListApi,
  createTodoApi,
  updateTodoApi,
  deleteTodoApi,
} from '../apis/todoApi';
import { TodoType } from '../interfaces/Todo';
// APIをモックする
jest.mock('../apis/todoApi');

describe('useTodo hook', () => {
  const mockTodoList: Array<TodoType> = [
    { id: 1, title: 'Todo 1', content: 'Content 1' },
    { id: 2, title: 'Todo 2', content: 'Content 2' },
  ];

  beforeEach(() => {
    // 各テストの前にモックAPIをクリアする
    jest.clearAllMocks();
  });

  it('should fetch and set todo list', async () => {
    (fetchTodoListApi as jest.Mock).mockResolvedValue(mockTodoList);

    const { result } = renderHook(() => useTodo());

    await waitFor(() => {
      expect(result.current.todoList).toEqual(mockTodoList);
    });

    expect(fetchTodoListApi).toHaveBeenCalledTimes(1);
  });

  it('should add a new todo to the list', async () => {
    const newTodo = { id: 3, title: 'Todo 3', content: 'Content 3' };
    (fetchTodoListApi as jest.Mock).mockResolvedValue(mockTodoList);
    (createTodoApi as jest.Mock).mockResolvedValue(newTodo);

    const { result } = renderHook(() => useTodo());

    // 初期のTodoリストをセット
    await act(async () => {
      await result.current.fetchTodoList();
    });

    // 新しいTodoを追加
    await act(async () => {
      await result.current.addTodo('Todo 3', 'Content 3');
    });

    await waitFor(() => {
      expect(result.current.todoList).toEqual([...mockTodoList, newTodo]);
    });

    expect(createTodoApi).toHaveBeenCalledWith('Todo 3', 'Content 3');
  });

  it('should update a todo in the list', async () => {
    const updatedTodo = {
      id: 1,
      title: 'Updated Todo',
      content: 'Updated Content',
    };
    (fetchTodoListApi as jest.Mock).mockResolvedValue(mockTodoList);
    (updateTodoApi as jest.Mock).mockResolvedValue(updatedTodo);

    const { result } = renderHook(() => useTodo());

    act(() => {
      result.current.fetchTodoList();
    });

    await act(async () => {
      await result.current.updateTodo(1, 'Updated Todo', 'Updated Content');
    });

    expect(result.current.todoList[0]).toEqual(updatedTodo);
    expect(updateTodoApi).toHaveBeenCalledWith(
      1,
      'Updated Todo',
      'Updated Content',
    );
  });

  it('should delete a todo from the list', async () => {
    (fetchTodoListApi as jest.Mock).mockResolvedValue(mockTodoList);
    (deleteTodoApi as jest.Mock).mockResolvedValue({ id: 1 });

    const { result } = renderHook(() => useTodo());

    act(() => {
      result.current.fetchTodoList();
    });

    await act(async () => {
      await result.current.deleteTodo(1);
    });

    expect(result.current.todoList).toEqual([mockTodoList[1]]);
    expect(deleteTodoApi).toHaveBeenCalledWith(1);
  });
});
