
// Bio 
var bio = {
  'name': 'Tajivon Wells', 
  'role': 'Deskside Support Technician',
  'contacts': {
    'mobile': '219-213-5808',
    'email': 'twells@chi.yearup.org',
    'github': 'TaisukeXei',
    'location': 'Gary, Indiana'
  },
  'welcomeMessage': "Greetings Everyone! This is my website to showcase my interactive resume! I'm a innovative, analytical, and tech-savvy indiviual looking for opportunitities to grow in the tech world.",
  'skills': [
    'Programming', 'Research', 'Web Development', 'Critical-Thinking'
  ],
  'biopic': 'images/me.jpg'
};

bio.display = function() {
  var formattedName = HTMLheaderName.replace('%data%', bio.name);
  var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
  $('.header-top').prepend(formattedName + formattedRole); 

  var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
  $('.middle-image').append(formattedBioPic);

  var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
  $('.middle-text').append(formattedWelcomeMsg);

  var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
  var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
  var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
  $('#topContacts, #footerContacts').append(formattedMobile + formattedEmail + formattedGithub + formattedLocation);

  if (bio.skills.length > 0) {
    $('#skills').append(HTMLskillsStart);

    for (var i=0; i < bio.skills.length; i++) {
      var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
      $('.skills').append(formattedSkill);
    }
  }
};

bio.display();

// Work History
var work = {
  'jobs': [{
    'employer': 'JLL',
    'title': 'Deskside Support Technician',
    'location': 'Chicago, IL',
    'dates': '08/16 - Present',
    'description': 'Supported my team in several projects which included performing image builds and deployments of machines for employees.<br>In addition, to troubleshooting several machines daily and fixing any technical issues.'
  }, {
    'employer': 'FedEx Ground',
    'title': 'Package Handler',
    'location': 'Hammond, IN',
    'dates': '10/15 - 03/16',
    'description': 'Unloaded/Loaded several trucks daily while assuring all freight was accounted for and secured.'
  }, {
    'employer': "Macy's",
    'title': 'Retail Support Associate',
    'location': 'Merrillville, IN',
    'dates': '05/15 - 10/15',
    'description': 'Assisted several teams with merchandising products, unloading freight from the dock and sorting out products based of department, and completing 100-150 packages daily for online orders.'
  }, {
    'employer': 'Calvary Transport Inc.',
    'title': 'Office Assitant Associate',
    'location': 'Gary, IN',
    'dates': '08/13 - 05/15',
    'description': 'Completed invoices and organized documentation.'
  }]
};

work.display = function() {
  $('.work-title').append('<hr class="work-hr">'); 

  work.jobs.forEach(function(job) {
    $('#workExperience').append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace('%data%',job.employer);
    var formattedTitle = HTMLworkTitle.replace('%data%',job.title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    var formattedLocation = HTMLworkLocation.replace('%data%',job.location);
    var formattedDates = HTMLworkDates.replace('%data%',job.dates);  
    var formattedDescription = HTMLworkDescription.replace('%data%',job.description);      
    $('.work-entry:last').append(formattedEmployerTitle + formattedDates + formattedLocation + formattedDescription);
  });
};

work.display();

// Projects
var projects = {
  'projects': [{
    'title': 'Mod 1 Project',
    'dates': 'April 2016',
    'description': 'My first website for a project at Year Up Chicago',
    'images': ['images/mod1.png']
  }, {
    'title': 'Mod 3 Project',
    'dates': 'July 2016',
    'description': 'My second website for a project a and competition',
    'images': ['images/mod2.png']
  }]
};

projects.display = function() {
  $('.projects-title').append('<hr class="projects-hr">');

  projects.projects.forEach(function(project) {
    $('#projects').append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace('%data%',project.title);
    var formattedDates = HTMLprojectDates.replace('%data%',project.dates);
    var formattedDescription = HTMLprojectDescription.replace('%data%',project.description);
    $('.project-entry:last').append(formattedTitle + formattedDates + formattedDescription);

    for (var i=0; i < project.images.length; i++) {
      var formattedImage = HTMLprojectImage.replace('%data%',project.images[i]);      
      $('.project-entry:last').append(formattedImage);
    }
  });
};

projects.display();

// Education
var education = {
  'schools': [{
    'name': 'Purdue University',
    'location': 'West Lafayette, Indiana',
    'degree': 'Bachelors',
    'dates': '2017 - 2020',
    'url': 'http://www.purdue.edu/',
    'majors': ['Computer Science/Cognitive Science']
  }, {
    'name': 'Year Up Chicago',
    'location': 'Chicago, Illinois',
    'degree': 'Other',
    'dates': '2016 - 2017',
    'url': 'http://www.yearup.org/',
    'majors': ['Business/Technology']
  }],
  'onlineCourses': [{
    'title': 'Intro To Programming Nano-Degree',
    'school': 'Udacity',
    'dates': 'July 2016 - August 2016',
    'url': 'https://www.udacity.com/course/intro-to-programming--ud000'
  }]
};

education.display = function() {
  $('.education-title').append('<hr class="education-hr">');

  education.schools.forEach(function(school) {
    $('#education').append(HTMLschoolStart);   

    var formattedName = HTMLschoolName.replace('%data%',school.name);
    var formattedDates = HTMLschoolDates.replace('%data%',school.dates);
    var formattedLocation = HTMLschoolLocation.replace('%data%',school.location);
    var formattedDegree = HTMLschoolDegree.replace('%data%',school.degree);
    $('.education-entry:last').append(formattedName + formattedDates + formattedLocation + formattedDegree);

    for (var i=0; i < school.majors.length; i++) {
      var formattedMajor = HTMLschoolMajor.replace('%data%',school.majors[i]);            
      $('.education-entry:last').append(formattedMajor);
    }
  });

  $('#education').append(HTMLonlineClasses);

  education.onlineCourses.forEach(function(onlineCourse) {
    $('#education').append(HTMLschoolStart);    

    var formattedTitle = HTMLonlineTitle.replace('%data%',onlineCourse.title);
    var formattedSchool = HTMLonlineSchool.replace('%data%',onlineCourse.school);
    var formattedDates = HTMLonlineDates.replace('%data%',onlineCourse.dates);
    var formattedUrl = HTMLonlineURL.replace('%data%',onlineCourse.url);    
    $('.education-entry:last').append(formattedTitle + formattedSchool + formattedDates + formattedUrl);
  });

  $('.map-title').append('<hr class="map-hr">');
};

education.display();

// Locations I've Experienced
var living = {
  'places': [{
    'location': 'Worcester, Massachusetts',
  }, {
    'location': 'Tampa, Florida',
  }, {
    'location': 'Gary, Indiana',
  }]
};

// Maps
$('#mapDiv').append(googleMap);
