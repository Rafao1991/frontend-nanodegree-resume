var bio = {
	name : "Rafael Sousa ",
	role : "Software Developer ",
	contact : {
		mobile : "+55 11 99159-9573",
		email : "rcsva_sousa@hotmail.com",
		github : "Rafao1991",
		location : "São Paulo"
	},
	pictureURL : "images/me.jpg",
	welcomeMessage : "Welcome to my resume I expect that you like my bio and contact me to exchange knowledge.",
	skills : [
		" Mobile development",
		" Javascript",
		" Agile"
	]
};

var work = { 
	jobs : [
		{
			employer : "Resource IT",
			title : "Mobile Developer",
			location : "São Paulo, SP - Brazil",
			datesWorked : "2012 - today",
			description : "Native Android development and Kony development"
		},
		{
			employer : "Softtek do Brasil",
			title : "Power Builder Developer",
			location : "São Paulo, SP - Brazil",
			datesWorked : "2011 - 2012",
			description : "PowerScript development"
		},
		{
			employer : "Grupo Meta",
			title : "Java Developer",
			location : "São Paulo, SP - Brazil",
			datesWorked : "2011 - 2011",
			description : "Java development"
		}
	]
};

var projects = {
	project : [
		{
			title : "Santander",
			dates : "2015 - today",
			description : "Mobile banking using native Android"
		},
		{
			title : "Itaú",
			dates : "2014 - 2015",
			description : "Mobile banking using KONY and than a new project with native Android"
		},
		{
			title : "Honda",
			dates : "2013 - 2013",
			description : "Very first project delivered using KONY in Brazil"
		}
	]
};

var education = {
	schools : [
		{
			name : "SENAC",
			location : "São Paulo, SP - Brazil",
			degree : "Information System",
			majors : ["BA"],
			dates : "2010 - 2015",
			url : "http://www.sp.senac.br"
		}
	],
	onlineCourses : [
		{
			title : "Gamification",
			school : "FIAP",
			dates : "2016",
			url : "http://www.fiap.com.br"
		},
		{
			title : "Git and Github",
			school : "UDACITY",
			dates : "2016",
			url : "http://www.udacity.com"
		}
	]
};


function displayWork (job) {
	$("#workExperience").append(HTMLworkStart);
	var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].datesWorked);
	var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle + formattedWorkDates + formattedWorkLocation + formattedWorkDescription);
}

function inName() {
	var nameArray = bio.name.split(" ");
	return nameArray[0].slice(0, 1).toUpperCase() + nameArray[0].slice(1).toLowerCase() + " " + nameArray[1].toUpperCase();
}

projects.display = function () {
	var formattedProjectTitle, formattedProjectDates, formattedProjectDescription;

	for (project in projects.project) {
		$("#projects").append(HTMLprojectStart);
		formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[project].title);
		formattedProjectDates = HTMLprojectDates.replace("%data%", projects.project[project].dates);
		formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.project[project].description);
		$(".project-entry:last").append(formattedProjectTitle + formattedProjectDates + formattedProjectDescription);
	}
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contact.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
var formattedPic = HTMLbioPic.replace("%data%", bio.pictureURL);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedEducationName = HTMLschoolName.replace("%data%", education.schools[0].name);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkills;
	formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkills);
}

for (job in work.jobs) {
	displayWork(job);
}

projects.display();

$("#header").prepend(formattedWelcomeMessage);
$("#header").prepend(formattedPic);
$("#header").prepend(formattedLocation);
$("#header").prepend(formattedGithub);
$("#header").prepend(formattedEmail);
$("#header").prepend(formattedMobile);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#main").append(formattedEducationName);

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);