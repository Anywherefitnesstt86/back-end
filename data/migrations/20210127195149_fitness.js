
exports.up = async function(knex) {
    await knex.schema.createTable("users", (table) => {
        table.integer("id").unique()
        table.text("personName").notNull()
        table.text("email").notNull()
        table.integer("isOverEighteen").notNull()
        table.boolean("password").notNull()
        table.boolean("isInstructor").notNull()
    })
  
    await knex.schema.createTable("classes", (table)=> {
        table.integer("id")
        table.string("className").notNull()
        table.string("classType").unique()
        table.date("classDate").notNull()
        table.time("startTime").notNull()
        table.integer("duration").notNull()
        table.text("intensity").notNull()
        table.string("location").notNull()
        table.integer("numberOfStudents").notNull()
        table.integer("maxClassSize").notNull()
    })
  
    await knex.schema.createTable("users_classes", (table)=> {
        table.binary("class_id")
        table.binary("user_id").notNull()
        
    })
  
    
  
  };
  
  exports.down = async function(knex) {
      await knex.schema.dropTableIfExists("user_classes")
      await knex.schema.dropTableIfExists("classes")
      await knex.schema.dropTableIfExists("users")
    
  };