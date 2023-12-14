class QueryBuilder {
  query: string;

  constructor() {
    this.query = "";
  }

  select(...columns: string[]) {
    this.query += "SELECT";

    columns.forEach((element) => {
      this.query += element.trim();
    });

    this.query += " ";
  }

  join(...joins: { type: string; table: string; condition: string }[]) {
    for (const join of joins) {
      const { type, table, condition } = join;

      this.query += `${type} JOIN ${table} ON ${condition},`;
    }

    // Remove trailing comma
    this.query = this.query.slice(0, -1);
  }
}

export default QueryBuilder;
