class QueryBuilder {
  constructor() {
    this.query = "";
  }

  select(...columns) {
    this.query += "SELECT";

    columns.forEach((element) => {
      this.query += element.trim();
    });

    this.query += " ";
  }

  from(table) {
    this.query += `FROM ${table} `;
  }

  join(...joins) {
    for (const join in joins) {
      const { type, table, condition } = join;

      this.query += `${type} JOIN ${table} ON ${condition},`;
    }

    // Remove trailing comma
    this.query = this.query.slice(0, -1);
  }

  where;
}

module.exports = QueryBuilder;
