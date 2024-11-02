# 初期設定スクリプト

# データベースの初期設定
docker exec -i mysql-crud-db mysql -uroot -ppass -e "
  CREATE DATABASE IF NOT EXISTS EXPRESS_OUTPUT_CRUD_DB;
  CREATE USER IF NOT EXISTS 'user'@'%' IDENTIFIED BY 'pass';
  GRANT ALL PRIVILEGES ON REACT_TS_WITH_API_CRUD_DB.* TO 'user'@'%';
  GRANT CREATE, ALTER, DROP, REFERENCES ON *.* TO 'user'@'%';
  FLUSH PRIVILEGES;"

# バックエンドのコンテナ内でマイグレーションを実行
docker exec -w /backend express-crud-backend yarn migration:run
# バックエンドのコンテナ内でシーディングを実装
docker exec -w /backend express-crud-backend yarn seed:run