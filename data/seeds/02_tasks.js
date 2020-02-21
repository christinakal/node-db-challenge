exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          id: 1,
          task_description: "Pass the sprint!!!!!!!",
          task_notes: "Little time leeeeeeft!!!",
          task_completed: false,
          task_project_id: 1
        },
        {
          id: 2,
          task_description: "Finish my career assigments.",
          task_notes: "Ouf! Cannot send cold reach messageees",
          task_completed: false,
          task_project_id: 1
        },
        {
          id: 3,
          task_description: "Think of what company I wanna work for.",
          task_notes:
            "search for these kinf of jobs/ talk to people working there",
          task_completed: false,
          task_project_id: 2
        },
        {
          id: 4,
          task_description: "Do more tutorials",
          task_notes: "code code code!",
          task_completed: false,
          task_project_id: 2
        },
        {
          id: 5,
          task_description: "Start running",
          task_notes: "WORK OUT!!!",
          task_completed: false,
          task_project_id: 2
        }
      ]);
    });
};
