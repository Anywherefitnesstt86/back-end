exports.seed =async function(knex) {
    await knex("users").insert([
        {id: 1, personName:  "Pete", email: "pete@email.com", isOverEighteen: "true", password: "abc123", isInstructor: "false"},
        {id: 2, personName:  "Betty White", email: "betty@email.com", isOverEighteen: "true", password: "abc123", isInstructor: "true"},
        {id: 3, personName:  "Blake", email: "blake@email.com", isOverEighteen: "true", password: "abc123", isInstructor: "true"},
        {id: 4, personName:  "Nick", email: "nick@email.com", isOverEighteen: "true", password: "abc123", isInstructor: "false"},
        {id: 5, personName:  "Stacy", email: "stacy@email.com", isOverEighteen: "true", password: "abc123", isInstructor: "false"},
        {id: 6, personName:  "Mike", email: "mike@email.com", isOverEighteen: "true", password: "abc123", isInstructor: "false"},
        {id: 7, personName:  "Joe", email: "joe@email.com", isOverEighteen: "true", password: "abc123", isInstructor: "false"},
        {id: 8, personName:  "Patty", email: "patty@email.com", isOverEighteen: "true", password: "abc123", isInstructor: "false"},

    ])
  };