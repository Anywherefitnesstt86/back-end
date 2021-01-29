exports.seed =async function(knex) {
    await knex("classes").insert([
        {id: 1, className:  "strong men", classType: "weights", classDate: "10/31/2021", stateTime: "9:00am", duration: 1, intensity: "high", location: "anywhere", numberOfStudents: 10, maxClassSize: 10},
        {id: 2, className:  "fit for me", classType: "weights", classDate: " 10/31/2021", stateTime: "9:00am", duration: 1, intensity: "medium", location: "anywhere", numberOfStudents: 10 , maxClassSize: 10},
        {id: 3, className:  "all for one", classType: "dance", classDate: " 10/31/2021", stateTime: "9:00am", duration: 1, intensity: "low", location: "anywhere", numberOfStudents: 10, maxClassSize: 10},
        {id: 4, className:  "burn your butt", classType: "weights", classDate: "10/31/2021", stateTime: "9:00am", duration: 1, intensity: "high", location: "anywhere", numberOfStudents: 10, maxClassSize: 10},
        {id: 5, className:  "leggs for days", classType: "dance/weights", classDate: "10/31/2021", stateTime: "9:00am", duration: 1, intensity: "medium", location: "anywhere", numberOfStudents: 10, maxClassSize: 10},
        {id: 6, className:  "core", classType: "pilates", classDate: "10/31/2021", stateTime: "9:00am", duration: 1, intensity: "high", location: "anywhere", numberOfStudents: 10, maxClassSize: 10},
        {id: 7, className:  "beach body", classType: "weights", classDate: "10/31/2021", stateTime: "9:00am", duration: 1, intensity: "high", location: "anywhere", numberOfStudents: 10, maxClassSize: 10},
        {id: 8, className:  "spinning to the 80's", classType: "bikes", classDate: "10/31/2021", stateTime: "9:00am", duration: 1, intensity: "low", location: "anywhere", numberOfStudents: 10, maxClassSize: 10},

      
    ])
  };