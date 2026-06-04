// Website Configuration
// Update these values to customize your website

const WEBSITE_CONFIG = {
    organizationName: "GVMUN",
    fullName: "Global Virtual Model United Nations",
    
    nextConference: {
        name: "GVMUNC XIV",
        date: "2026-06-13T08:30:00-05:00",
        registrationUrl: "#" 
    },
    
    stats: {
        delegates: "3500+",
        countries: "30+",
        previousConference: "GVMUNC X"
    },
    
    socialMedia: {
        whatsapp: "#", 
        twitter: "#",  
        instagram: "#", 
        linkedin: "#"   
    },
    
    externalLinks: {
        newsletter: "#", 
        memo: "#",       
        pressRelease: "#",
        mymun: "https://mymun.com"
    },
    
    contact: {
        email: "contact@gvmun.org", 
        phone: "", 
        address: "" 
    },
    
    
    team: [
        {
            name: "Ayushmaan Mukherjee",
            role: "Secretary General",
            image: "assets/team/ayushmaan.jpg"
        },
        {
            name: "Jackson Dorris",
            role: "Secretary General",
            image: "assets/team/jackson.jpg"
        },
        {
            name: "Aayush Dhar",
            role: "Undersecretary General",
            image: "assets/team/aayush.jpg"
        },
        {
            name: "Wyatt Janczewski",
            role: "Undersecretary General",
            image: "assets/team/wyatt.png"
        },
        {
            name: "Kush Dave",
            role: "Secretary General", 
            image: "assets/team/kush.jpg"
        },
        {
            name: "Anushka Chaudhary",
            role: "Graphic Designer",
            image: "assets/team/anushka.jpg"
        },
        {
            name: "Lilli Stroock",
            role: "Outreach Head",
            image: "assets/team/lilli.jpg"
        },
        {
            name: "Tharun Naguleswaran",
            role: "Webmaster",
            image: "assets/team/tharun.jpg"
        }
    ],
    
    partners: [
        {
            name: "Project Delegate",
            logo: "assets/partners/projectdelegate.jpg",
            url: "#"
        },
        {
            name: "VAIMUN",
            logo: "assets/partners/vaimun.jpg",
            url: "#"
        },
        {
            name: "PerkioMUN",
            logo: "assets/partners/perkiomun.svg",
            url: "https://mymun.com/conferences/perkiomun-2026"
        }
    ],
    
  
    theme: {
        primaryColor: "#2563eb",
        secondaryColor: "#764ba2",
        accentColor: "#fbbf24",
        backgroundColor: "#f8fafc",
        textColor: "#1f2937"
    }
};


if (typeof module !== 'undefined' && module.exports) {
    module.exports = WEBSITE_CONFIG;
}
