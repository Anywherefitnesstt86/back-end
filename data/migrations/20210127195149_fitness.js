
exports.up = async function(knex) {
    await knex.schema.createTable("users", (table) => {
        table.increments("id").unique()
        table.text("personName").notNull()
        table.text("email").notNull().unique()
        table.integer("isOverEighteen").notNull()
        table.boolean("password").notNull()
        table.boolean("isInstructor").notNull()
    })
  
    await knex.schema.createTable("classes", (table)=> {
        table.increments("id").unique()
        table.string("className").notNull()
        table.string("classType").notNull()
        table.string("classDate").notNull()
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
      await knex.schema.dropTableIfExists("users_classes")
      await knex.schema.dropTableIfExists("classes")
      await knex.schema.dropTableIfExists("users")
    
  };