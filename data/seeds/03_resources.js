exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        {
          id: 1,
          resource_name: "a new laptop",
          resource_description: "preferably a mac or linux"
        },
        {
          id: 2,
          resource_name: "resource 1",
          resource_description: "best resource ever"
        },
        {
          id: 3,
          resource_name: "udemy course",
          resource_description: "find some good courses"
        },
        {
          id: 4,
          resource_name: "sea",
          resource_description: "sea is always a great resource hehe!"
        }
      ]);
    });
};
