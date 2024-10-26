import { MigrationDataSource } from '../../config/migrationDataSource';
import { Todo } from '../../domain/entity/todo.entity';

export const TodoSeedData = async () => {
  const dataSource = await MigrationDataSource.initialize();
  const todoRepository = dataSource.getRepository(Todo);

  // サンプルデータ
  const todos = [
    { title: 'ご飯を作る', content: '冷蔵庫の食材でお料理を作る' },
    { title: '洗濯をする', content: '洗濯機に洗濯物を入れてスイッチを入れる' },
    { title: '本を読む', content: '昨日購入した小説の第１章を読む' },
  ];

  // データを挿入
  for (const todo of todos) {
    const todoEntity = todoRepository.create(todo);
    await todoRepository.save(todoEntity);
  }
  await dataSource.destroy();
};
