const EntitySchema = require('typeorm').EntitySchema;
const {role} = require('/home/tectoro/Desktop/codejs/models/role.js')

const user = new EntitySchema({
  name: 'user',
  tableName: 'user',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true
    },
    firstname: {
      type: 'varchar',
    },
    lastname: {
      type: 'varchar',
    },
    email: {
      type: 'varchar',
    }
  }, 
  relations:{
    role:{
        target:role,
        type:'one-to-one',
        joinColumn:true,
        joinTable: true,
        inverseSide:"role",
        cascade: true,
        eager: true
    }
}
});

module.exports = {user};
