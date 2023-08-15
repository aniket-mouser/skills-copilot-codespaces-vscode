function skillsMember()
{
    var skills = document.getElementById("skills");
    var member = document.getElementById("member");
    var skillsMember = document.getElementById("skillsMember");
    var memberSkills = document.getElementById("memberSkills");
    var skillsMemberButton = document.getElementById("skillsMemberButton");
    var memberSkillsButton = document.getElementById("memberSkillsButton");

    skills.style.display = "block";
    member.style.display = "none";
    skillsMember.style.display = "none";
    memberSkills.style.display = "none";
    skillsMemberButton.style.backgroundColor = "#fff";
    memberSkillsButton.style.backgroundColor = "#fff";
    skillsMemberButton.style.color = "#000";
    memberSkillsButton.style.color = "#000";
}

