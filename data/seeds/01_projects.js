exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(() => {
      // Inserts seed entries
      return knex("projects").insert([
        {
          id: 1,
          project_name: "Lambda Labs",
          project_description:
            "Make sure I do well on Labs and study things I don't understand.",
          project_completed: false
        },
        {
          id: 2,
          project_name: "Personal Project",
          project_description: "Make personal projects to gain expierience!",
          project_completed: false
        },
        {
          id: 3,
          project_name: "Work Project",
          project_description: "Build great projects for work.",
          project_completed: false
        }
      ]);
    });
};
