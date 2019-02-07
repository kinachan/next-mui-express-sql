import dbConnection from 'repository/ConnectionFactory';
import stringConvert from 'serverlib/StringConvert';

class RepositoryBase {
  constructor(tableName) {
    this.tableName = tableName;
    this.dbConnection = dbConnection;
  }

  selectAllById = async (whereKey = null, whereValue = null) => {
    const sql = `SELECT * FROM ${this.tableName} WHERE ${whereKey} = ?`;
    const placeholder = [whereValue];

    return [row, fields] = await this.dbConnection.query(sql, placeholder);
  }


  selectColumns = async (columns, whereKey, whereValue) => {
    const sql = `SELECT ${columns.map(c => '??').join(' ')}FROM ${this.tableName} WHERE ${whereKey} = ?`;
    const placeholder = columns.concat([whereValue]);
    return [row, fileds] = await this.dbConnection.query(sql, placeholder);
  }

  /**
   * 各パラメータのkeyをsnakeCaseにして変換
   */
  convertSnakeKeysObject = (objectValues) => {
    const object = {};
    Object.keys(objectValues).forEach(key => {
      const column = stringConvert.toSnakeCase(key);
      object[column] = objectValues[key];
    });
    return object;
  }

  createWhereSentence = condition => {
    const conditionSentence = Object.keys(condition)
    .map((cond, i) => `${i === 0 ? '': 'AND '}${stringConvert.toSnakeCase(cond)}`).join(' ');

    return `WHERE ${conditionSentence}`;
  }

  convertObjectValuesToArray = (parameter, condition) => {
    const paramArr = Object.keys(parameter).map(key => parameter[key]);
    const conditionArr = Object.keys(condition).map(key => condition[key]);

    return paramArr.concat(conditionArr);
  }

  insert = (parameter) => {
    const sql = `insert into ${this.tableName} SET ?`;
    const placeholder = this.convertSnakeKeysObject(parameter);

    this.dbConnection.query(sql,placeholder,(error, results, fields) => { 
      if (error) {
        console.log(error, 'queryError');
      }
      this.dbConnection.end();
    });
  }

  /**
   * parameter = UPDATE対象のパラメータをオブジェクトで定義
   * condition = where文に相当するもの
   */
  update = async (parameter, condition) => {
    const placeholder = this.convertSnakeKeysObject(parameter);
    const columnsQuery = Object.keys(placeholder).map(column => `${column} = ?`).join(', ')
    const conditionSentence = this.createWhereSentence(condition);

    const sql = `UPDATE ${this.tableName} SET ${columnsQuery} ${conditionSentence}`;
    const values = this.convertObjectValuesToArray(parameter, condition);

    const results = await this.dbConnection.query(sql, values);
    return results;
  }
}
export default RepositoryBase;
