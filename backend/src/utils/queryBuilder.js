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

  join(...joins) {
    for (const join of joins) {
      const { type, table, condition } = join;

      this.query += `${type} JOIN ${table} ON ${condition},`;
    }

    // Remove trailing comma
    this.query = this.query.slice(0, -1);
  }
}

module.exports = QueryBuilder;
