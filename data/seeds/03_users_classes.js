
exports.seed =async function(knex) {
    await knex("users_classes").insert([
        {class_id: 1, user_id: 1 },
        {class_id: 2, user_id: 2 },
        {class_id: 3, user_id: 3 },
        {class_id: 4, user_id: 4 },
        {class_id: 5, user_id: 5 },
        {class_id: 6, user_id: 6 },
        {class_id: 7, user_id: 7 },
        {class_id: 8, user_id: 8 },

    ])
  };
