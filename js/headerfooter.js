const navigation = {
    navSpc: [
      {
        name: "home",
        link: "#",
        type: "internal"
      },
      {
        name: "line-up",
        link: "#",
        type: "internal"
      },
      {
        name: "tickets",
        link: "#",
        type: "internal"
      },
      {
        name: "praktisch",
        link: "#",
        type: "internal"
      },
      {
        name: "camping",
        link: "#",
        type: "internal"
      },
      {
        name: "history",
        link: "#",
        type: "internal"
      },
      {
        name: "RWTV",
        link: "#",
        type: "internal"
      },
      {
        name: "NMW",
        link: "#",
        type: "internal"
      },
      {
        name: "koop tickets",
        link: "#",
        type: "internal"
      }
      
    ]
    
  };
  function convertProjects(navSpc) {
    let tempStr = '';
    navSpc.forEach(function (ing, index) {
        tempStr +=`
        <li><a href="${ing.link}">${ing.name}</a></li>
        `
    });
    return tempStr;
  };
  
 const links = `${convertProjects(navigation.navSpc)}`; 
 document.getElementById("demo").innerHTML = links;

  
 const socialLinks = {
  links: [
    {
      name: "Facebook",
      link: "#",
      type: "facebook"
    },
    {
      name: "twitter",
      link: "#",
      type: "twitter"
    },
    {
      name: "Instagram",
      link: "#",
      type: "instagram"
    },
    {
      name: "Youtube",
      link: "#",
      type: "youtube"
    },
    {
      name: "Spotify",
      link: "#",
      type: "spotify"
    }
    
  ]
  
};
function convertProjects(links) {
  let tempStr = '';
  links.forEach(function (ing, index) {
      tempStr +=`
      <li><a href="${ing.link}">${ing.name}</a></li>
      `
  });
  return tempStr;
};

const social = `${convertProjects(socialLinks.links)}`; 
document.getElementById("footer").innerHTML = social;