/*
This is empty on purpose! Your code to build the resume will go here.
 */
var data = "%data%";

var bio = {
    name: "Nikhil Ganta",
    role: "Front-End Web Developer",
    contacts: {
        mobile: "+91-9814786681",
        email: "nikhilganta95@gmail.com",
        github: "nikhilganta",
        twitter: "@nikhilganta95",
        location: "Visakhapatnam"
    },
    welcomeMessage: "Welcome to my journey of past for getting through the present job-interview and become your future valuable asset of your company!",
    skills: ["awesomeness", "punctuality", "keen-learner", "dedication towards work"],
    biopic: "images/me.png",
    display: function() {
        var header = $("#header");
        var formattedName = HTMLheaderName.replace(data, bio.name);
        var formattedRole = HTMLheaderRole.replace(data, bio.role);
        header.prepend(formattedName + formattedRole);

        var contacts = $("#topContacts, #footerContacts");
        var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
        contacts.append(formattedMobile);
        var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
        contacts.append(formattedEmail);
        var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
        contacts.append(formattedGithub);
        var formattedTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
        contacts.append(formattedTwitter);
        var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
        contacts.append(formattedLocation);

        var formattedWelcomeMessage = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
        header.append(formattedWelcomeMessage);
        var formattedBioPic = HTMLbioPic.replace(data, bio.biopic);
        header.append(formattedBioPic);

        if (bio.skills.length > 0) {
            header.append(HTMLskillsStart);

            for (var i = 0; i < bio.skills.length; i++) {
                var formattedSkills = HTMLskills.replace(data, bio.skills[i]);
                $("#skills").append(formattedSkills);
            }
        }
    }
};

var education = {
    schools: [{
        name: "Thapar University",
        location: "Patiala, Punjab, India",
        degree: "Bachelor of Engineering, Mechanical Engineering",
        majors: ["Major1", "Major2"],
        dates: "July,2013 - May,2017",
        url: "http://www.thapar.edu/"
    }],
    onlineCourses: [{
        title: "Front-End Web Development",
        school: "Udacity",
        dates: "in progress",
        url: "https://in.udacity.com/course/front-end-web-developer-nanodegree--nd001/"
    }],
    display: function() {

        if (education.schools.length > 0 || education.onlineCourses.length > 0) {
            for (var i = 0; i < education.schools.length; i++) {
                $("#education").append(HTMLschoolStart);

                var formattedSchoolName = HTMLschoolName.replace(data, education.schools[i].name);
                var formattedSchoolDegree = HTMLschoolDegree.replace(data, education.schools[i].degree);
                $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);

                var formattedSchoolDates = HTMLschoolDates.replace(data, education.schools[i].dates);
                $(".education-entry:last").append(formattedSchoolDates);

                var formattedSchoolLocation = HTMLschoolLocation.replace(data, education.schools[i].location);
                $(".education-entry:last").append(formattedSchoolLocation);

                for (var j = 0; j < education.schools[i].majors.length; j++) {
                    var formattedSchoolMajor = HTMLschoolMajor.replace(data, education.schools[i].majors[j]);
                    $(".education-entry:last").append(formattedSchoolMajor);
                }
            }

            $("#education").append(HTMLonlineClasses);

            for (var k = 0; k < education.onlineCourses.length; k++) {
                $("#education").append(HTMLschoolStart);

                var formattedOnlineTitle = HTMLonlineTitle.replace(data, education.onlineCourses[k].title);
                var formattedOnlineSchool = HTMLonlineSchool.replace(data, education.onlineCourses[k].school);
                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);

                var formattedOnlineDates = HTMLonlineDates.replace(data, education.onlineCourses[k].dates);
                $(".education-entry:last").append(formattedOnlineDates);

                var formattedOnlineURL = HTMLonlineURL.replace(data, education.onlineCourses[k].url);
                $(".education-entry:last").append(formattedOnlineURL);
            }
        }
    }
};

var work = {
    jobs: [{
        employer: "Infosys",
        title: "Systems Engineer",
        location: "Mysore, Karnataka, India",
        dates: "in progress",
        description: "Presently I am undergoing training in all computer languages which will help me get posted in any field of work in the near future."
    }],
    display: function() {
        if (work.jobs.length > 0) {
            for (var i = 0; i < work.jobs.length; i++) {
                $("#workExperience").append(HTMLworkStart);

                var workEntry = $(".work-entry:last");
                var formattedJobEmployer = HTMLworkEmployer.replace(data, work.jobs[i].employer);
                var formattedJobTitle = HTMLworkTitle.replace(data, work.jobs[i].title);
                var formattedEmployerTitle = formattedJobEmployer + formattedJobTitle;
                workEntry.append(formattedEmployerTitle);

                var formattedLocation = HTMLworkLocation.replace(data, work.jobs[i].location);
                workEntry.append(formattedLocation);
                var formattedDates = HTMLworkDates.replace(data, work.jobs[i].dates);
                workEntry.append(formattedDates);
                var formattedDescription = HTMLworkDescription.replace(data, work.jobs[i].description);
                workEntry.append(formattedDescription);
            }
        }
    }
};

var projects = {
    projects: [{
            title: "A Letter to Self",
            dates: "12th June, 2017",
            description: "This was my first project during my Front End Nanodegree course at Udacity. I was initially mentioned everything about the history of Front End Development, and where I stand in that evolving history. After that I was told to reflect on what my journey will be like as I develop my skills. So I was instructed to write a letter to my future self describing how I can overcome any challenge ahead in this Nanodegree, and set some goals for what I want to achieve.",
            images: ["images/project-1.jpg"]
        },
        {
            title: "Mockup Article",
            dates: "14th June, 2017",
            description: "This was my second project during my Front End Nanodegree course at Udacity. Using the HTML skills taught I was told to translate a mockup to HTML.",
            images: ["images/project-2.jpg"]
        },
        {
            title: "Animal Card",
            dates: "16th June, 2017",
            description: "This was my third project during my Front End Nanodegree course at Udacity. Using the basic HTML and CSS skills taught during the course to create an 'Animal Card'. I was provided with a design prototype that needs to translated to an actual, funtional website as in most cases, the designers only provide us with the design prototype.",
            images: ["images/project-3.jpg"]
        },
        {
            title: "Portfolio Site",
            dates: "21st July, 2017 - 23rd July, 2017",
            description: "This was my fourth project during my Front End Nanodegree course at Udacity. I was told to bild a Portfolio Site which should similar to a mockup portfolio.",
            images: ["images/project-4.jpg"]
        }
    ],
    display: function() {
        if (projects.projects.length > 0) {
            for (var i = 0; i < projects.projects.length; i++) {
                $("#projects").append(HTMLprojectStart);

                var projectEntry = $(".project-entry:last");
                var formattedProjectTitle = HTMLprojectTitle.replace(data, projects.projects[i].title);
                projectEntry.append(formattedProjectTitle);

                var formattedProjectDates = HTMLprojectDates.replace(data, projects.projects[i].dates);
                projectEntry.append(formattedProjectDates);

                var formattedProjectDescription = HTMLprojectDescription.replace(data, projects.projects[i].description);
                projectEntry.append(formattedProjectDescription);

                if (projects.projects[i].images.length > 0) {
                    for (var j = 0; j < projects.projects[i].images.length; j++) {
                        var formattedProjectImage = HTMLprojectImage.replace(data, projects.projects[i].images[j]);
                        projectEntry.append(formattedProjectImage);
                    }
                }
            }
        }
    }
};

bio.display();
education.display();
work.display();
projects.display();
$("#mapDiv").append(googleMap);
