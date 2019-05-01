// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/challenge.sqlite3'
    },
    useNullAsDefault: true
  }
};
