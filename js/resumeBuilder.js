//$("#main").append(["Rafael Sousa"]);

// var awesomeThouhts = "I am Rafael Sousa and I am AWESOME!"
// console.log(awesomeThouhts);

// var funThouhts = awesomeThouhts.replace("AWESOME", "FUN");
// $("#main").append(funThouhts);

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
	welcomeMessae : "Welcome to my resume I expect that you like my bio and contact me to exchange knowledge.",
	skills : [
		" Mobile development",
		" Javascript",
		" Agile"
	]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contact.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
var formattedPic = HTMLbioPic.replace("%data%", bio.pictureURL);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessae);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);

$("#header").prepend(formattedSkills);
$("#header").prepend(formattedWelcomeMessage);
$("#header").prepend(formattedPic);
$("#header").prepend(formattedLocation);
$("#header").prepend(formattedGithub);
$("#header").prepend(formattedEmail);
$("#header").prepend(formattedMobile);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);