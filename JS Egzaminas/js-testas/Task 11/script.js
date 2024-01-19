// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.getElementById("createSkillForm");
//   const skillInput = document.getElementById("skillInput");
//   const skillsList = document.getElementById("skillsList");

//   form.addEventListener("submit", async (e) => {
//     e.preventDefault();
//     let skill = skillInput.value;

//     await createSkill(skill);
//     await getSkills();

//     skillInput.value = "";
//   });

//   const createSkill = async (skill) => {
//     const body = {
//       skill: skill,
//     };
//     try {
//       const response = await fetch(
//         "https://testapi.io/api/Geddis/resource/SkillsForm",
//         {
//           method: "POST",
//           body: JSON.stringify(body),
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       const createdSkill = await response.json();
//       console.log(`Skill "${createdSkill.skill}" added successfully!`);
//     } catch (error) {
//       console.error(error);
//       alert("Error adding skill. Please try again.");
//     }
//   };

//   const getSkills = async () => {
//     try {
//       const response = await fetch(
//         "https://testapi.io/api/Geddis/resource/SkillsForm"
//       );
//       const skills = await response.json();
//       displaySkills(skills);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const displaySkills = (skills) => {
//     skillsList.innerHTML = "";
//     skills.forEach((skill) => {
//       const listItem = document.createElement("li");
//       listItem.textContent = `ID: ${skill.id}, Skill: ${skill.skill}`;
//       skillsList.appendChild(listItem);
//     });
//   };

//   getSkills();
// });

document.addEventListener("DOMContentLoaded", () => {
  const skillsList = document.getElementById("skillsList");
  const createSkillForm = document.getElementById("createSkillForm");
  const skillInput = document.getElementById("skillInput");

  createSkillForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const skill = skillInput.value.trim();
    if (skill === "") {
      alert("Skill cannot be empty!");
      return;
    }

    try {
      await createSkill(skill);
      await getSkills();
      skillInput.value = "";
    } catch (error) {
      console.error(error);
      alert("Error adding skill. Please try again.");
    }
  });

  const createSkill = async (skill) => {
    const body = { skill };

    const response = await fetch(
      "https://testapi.io/api/Geddis/resource/SkillsForm",
      {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to add skill: ${response.statusText}`);
    }
  };

  const getSkills = async () => {
    try {
      const response = await fetch(
        "https://testapi.io/api/Geddis/resource/SkillsForm"
      );

      if (!response.ok) {
        throw new Error(`Failed to retrieve skills: ${response.statusText}`);
      }

      const skills = await response.json();
      displaySkills(skills);
    } catch (error) {
      console.error(error);
    }
  };

  const displaySkills = (skills) => {
    skillsList.innerHTML = "";
    skills.forEach((skill) => {
      const listItem = document.createElement("li");
      listItem.textContent = skill.skill;
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => deleteSkill(skill.id));
      listItem.appendChild(deleteButton);
      skillsList.appendChild(listItem);
    });
  };

  const deleteSkill = async (id) => {
    try {
      const response = await fetch(
        `https://testapi.io/api/Geddis/resource/SkillsForm/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to delete skill: ${response.statusText}`);
      }

      await getSkills();
      alert("Skill deleted successfully!");
    } catch (error) {
      console.error(error);
      alert("Error deleting skill. Please try again.");
    }
  };

  getSkills();
});
