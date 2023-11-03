interface Database {
  connect(): void;
  find(id: number): any;
  update(id: number, data: any): void;
}

class MySQLDatabase implements Database {
  connect() {
    console.log('Conectado a MySQL Database');
  }

  find(id: number) {
    // Implementación específica de MySQL
  }

  update(id: number, data: any) {
    // Implementación específica de MySQL
  }
}

class SQLiteDatabase implements Database {
  connect() {
    console.log('Conectado a SQLite Database');
  }

  find(id: number) {
    // Implementación específica de SQLite
  }

  update(id: number, data: any) {
    // Implementación específica de SQLite
  }
}

const mysqlDB = new MySQLDatabase();
mysqlDB.connect();

const sqliteDB = new SQLiteDatabase();
sqliteDB.connect();
