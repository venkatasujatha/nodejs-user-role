

const EntitySchema = require('typeorm').EntitySchema;

const role = new EntitySchema({
  name: 'role',
  tableName: 'role',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true
    },
    role_name: {
      type: 'varchar',
    }
  }
  
});

module.exports = {role};
