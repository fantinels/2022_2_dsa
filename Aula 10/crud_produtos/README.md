0 - importar a biblioteca (pg)

1 - Conexão com o banco de dados (connect):
  - Trazer as informações (default):
    host: localhost
    port: 5432
    user: postgres
    password: postgres
    database: crud_produtos
    
2- Realizar o(s) comandos SQL de acordo com o que queremos:
  - utilizar: query
  - comando SQL ("INSERT", "DELETE", "SELECT", "UPDATE", etc)
  - Prepared Statement (preparar comando comando, passando variáveis como dados;
  - Callback - err, res -> err: erro ; res: resultado / Dica: utilize res.rows para pegar os dados. Pode utilizar Promises ou Async/Await.
  - 
3 - Finaliza a conexão (end)
