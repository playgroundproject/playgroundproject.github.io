// Get the modal
var modal = document.getElementById('myModal');

// Get the modal text
var modaltext = document.getElementById('modalText');

// Get the button that opens the modal
var btn = document.getElementById("memberBtn1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

function clickImage(clicked_id) {
  text = "Error";
  picLink="Error";
  switch(clicked_id) {
    case "Durward":
      text = "Durward Benham is a fifth year Computer Science major at Northeastern University. He is from Phoenix, Arizona, and moved to Boston for college to experience the East Coast and its cold winters. He has had previous work experience at Runkeeper as a mobile app developer, at Datawatch as a product manager, and at Northeastern as a fellow for the College of Computer and Information Science. Previous volunteer work at Phoenix Children’s hospital led him to join this group, where he hopes to improve play spaces for children of all abilities.";
      picLink= "images/member_pictures/durward.jpg"
      break;
    case "Maria":
      text = "Maria Bermudez is a third year International Business major, who loves studying new languages and is currently working on her next challenge: increase her fluency in Chinese to prepare for her year abroad. Originally from Puebla, Mexico, you can find her checking out the food truck scene in Boston. After completing a research project in Mexico and Brazil, she’s interested in pursuing a career in social enterprise, so she’s glad to be part of a group that is making a difference for the Boston community. In her free time, she enjoys writing articles about fashion and social enterprise, and of course, for the blog of The Playground Project: INDIGO. Don’t forget to check it out for updates on our latest projects and playground recommendations!";
      picLink= "images/member_pictures/maria.jpg"
      break;
    case "Laura":
      text = "Laura Blumenfeld is a third year Civil Engineering major with a minor in Urban Studies. She is interested in cities and their design and development, especially from a transportation perspective and loves exploring Boston on weekends at Farmer’s Markets and Food Festivals. She is from Ft. Lauderdale, FL and was born in Buenos Aires, Argentina before moving to the States. Her interests range from doing research on transportation systems to event planning on campus and playing tennis and volleyball. Working on the project since it first began has been very rewarding in communities that appreciate our focus on inclusive playgrounds and she is honored to work with such a great team!";
      picLink= "images/member_pictures/laura.jpg"
      break;
    case "Alex":
      text = "Alex Castillo is a third year student from Huntington, New York and is enrolled in the D’Amore McKim School of Business at Northeastern. An MIS and Entrepreneurship major, Alex hopes to one day start his own online business. He is currently an undergraduate manager for the Northeastern men’s basketball team and is searching for his second co-op. In his free time, Alex enjoys playing basketball, volunteering, running, and skiing.";
      picLink= "images/member_pictures/alex.jpg"
      break;
    case "Charles":
      text = "Charles is a second year Chemical Engineering Student from North Miami Florida. He always wanted to live in the northeast and experience all four seasons. Charles’s previous volunteer work involved rehabilitating recreation areas and nature trails with the Boy Scouts of America as well as volunteer work with the Franklin Park Coalition. When not Studying or advocating for inclusive play, Charles is probably reading, hanging out with friends, or exploring Boston.";
      picLink= "images/member_pictures/charles.jpg"
      break;
    case "Elise":
      text = "Elise is a second year double majoring in Environmental Science and Economics. From the North Shore of Massachusetts, winter is still her least favorite season. She is also involved in Scout Labs, a human centered design based research group, and Husky Environmental Action Team. In her free time she loves napping, taking photos, light jogging, and window shopping. She is excited to have joined the Playground Project team this semester and looks forward to advocating for inclusive play in Boston and beyond.";
      picLink= "images/member_pictures/elise.jpg"
      break;
    case "Hayden":
      text = "Hayden Henderson is a fifth year mechanical engineering student currently enrolled in the BS/MS program at Northeastern University. He is interested in robotics and aerospace engineering. In his free time he enjoys being outdoors and takes part in the Northeastern chapter of the American Institute of Astronautics and Aeronautics. Hayden has completed co-op work at L-3 Security & Detection Systems as well as Corindus Vascular Robotics, where he has spent time creating CAD models, performing stress analyses and working on the production floor. He is currently working at General Dynamics: Mission Systems to develop autonomous underwater vehicles.";
      picLink= "images/member_pictures/hayden.jpg"
      break;
    case "Mariya":
      text = "Mariya is a fourth-year student completing a B.S. in Architecture and an Urban Studies minor. She is interested in urban systems, ranging from public space to transportation networks and airports. She spent the past year studying and then working in Berlin, a city with excellent playgrounds. Additionally, in the Summer of 2014, she travelled to Brazil to carry out a study of the urban public spaces in the country’s metropolises. This fascination with the built environment, as well as the belief that small changes at the community level will propel larger societal shift, are what drove her to join The Playground Project.";
      picLink= "images/member_pictures/mariya.jpg"
      break;
    case "Daniel":
      text = "Dan is a third year at Northeastern University pursuing a BS/MS in Chemical Engineering and a BS in Math. He is from Maumee, Ohio, and came to Boston in hopes of meeting Will Hunting. He is currently working at Doble Engineering as a chemist and has previously researched rapid bacterial detection systems on campus. Volunteer work at Squashbusters as a tutor for Boston middle schoolers led Dan to PPI, where he hopes to improve the play spaces for the children he has tutored for years.";
      picLink= "images/member_pictures/dan.jpg"
      break;
    case "Monisha":
      text = "Monisha is in her fourth year at Northeastern University pursuing a B.S. in Econ and Math and a minor in Social Entrepreneurship. She is a Massachusetts girl born and raised, whose first 9 mile move from Malden to Lexington prepared her well for the 9 mile move from Lexington to Boston for college. Monisha spent last semester on co-op at Market Metrics. She is excited to be back in classes, and spends her weekends traveling and competing with the Northeastern Debate Team.";
      picLink= "images/member_pictures/monisha.jpg"
      break;
    case "Max":
      text = "Max Sminkey is a fourth-year student from Raleigh, North Carolina, enrolled at Northeastern University pursuing a combined Bachelor’s and Master’s degree in mechanical engineering. He has completed two mechanical engineering co-ops at NASA Jet Propulsion Laboratory and Boston Scientific, and is currently looking for product development roles for his next internship in Spring 2017. In his free time, he enjoys traveling, baking bread, volunteering with Northeastern Habitat for Humanity, and serving as a first-year engineering peer mentor.";
      picLink= "images/member_pictures/max.jpg"
      break;
    case "Tia":
      text = "Tia Thomson is in her third year at Northeastern University pursuing a BFA in Design and minors in American Sign Language and Art History. She was born in Taiwan, but was raised in Orange County, California. She is passionate about making the world a better place through human-centered design. She is serving as a first-year peer mentor and as the Art+Design representative on the Student Advisory Board for the College of Arts, Media and Design. In her free time, she enjoys doing yoga and looking at photos of her fat chihuahua, Daisy.";
      picLink= "images/member_pictures/tia.jpg"
      break;
  }
  document.getElementById('modalText').innerHTML = text;
  document.getElementById('modalPic').src = picLink;
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
