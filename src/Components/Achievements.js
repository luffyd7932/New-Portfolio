import AchievementCard from "./AchievementCard"
import AURAImage from "../images/AURA.jpg"
import H2F from "../images/h2f.jpg"
import OG from "../images/OG.jpg"
import TCE from "../images/lxm.jpg"
// import Wave from "../images/wave.jpg"


const Achievements = () => {
    return (
      <div>
        <h1 className='projectHeading'>My <b>Achievements</b></h1>
        <div className='project'>
          
          <AchievementCard 
              photo={TCE} 
              title="CodeFiesta 5.0 National Hackathon" 
              description="Winner at CodeFiesta 5.0 National Hackathon at SKSVMA College of Engineering and Technology, Lakshmeshwar"
              link="https://www.linkedin.com/posts/desai-laxman_codefiesta5-hackathonwinners-budgetbite-activity-7314625779466661888-OaZZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEAAOgMB2ecSSaJ5h6uT5v_UBN62hzp6I3o"
            />
          <AchievementCard 
            photo={H2F} 
            title="Hack to Future - National Level Hackathon" 
            description="Runner's Up at Hack-to-Future held at KLS
Gogte of Technology, Belagavi."
            link="https://www.linkedin.com/posts/computer-science-and-engineering-at-kls-git-belagavi_hacktofuture-winners-hackathon-ugcPost-7204809363885064192-MgS5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEAAOgMB2ecSSaJ5h6uT5v_UBN62hzp6I3o"
          />

          <AchievementCard 
            photo={AURAImage} 
            title="Enhanced Event Security System for AURA'25" 
            description="2nd Runner's up at Secure Entry-Exit Security System for AURA'25 Hackathon
organized by ACE-CSI at KLSGIT
Belagavi, India
"
            link="https://www.linkedin.com/posts/desai-laxman_intranet-computernetworks-encryption-activity-7270782923300052992-UeD4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEAAOgMB2ecSSaJ5h6uT5v_UBN62hzp6I3o"
          />
          <AchievementCard 
            photo={OG} 
            title="Appreciation Letter at Idea Garage" 
            description="Received Letter of Appreciation for winning a National Level Hackathon's and
             contributing as a speaker at the Idea Garage workshop organized by CSI and CodeChief Club, KLS GIT, Belagavi."
            link="https://www.linkedin.com/posts/desai-laxman_letterofappreciation-hackathonchampion-ideagarage-activity-7266841550091935744-mme4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEAAOgMB2ecSSaJ5h6uT5v_UBN62hzp6I3o"
          />
          
          <AchievementCard 
            // photo={Wave} 
            title="Wave 2.0 - National Level Hackathon" 
            description="2nd Runner-up at Wave 2.0 National Level
Hackathon at Basaveshwar Engineering
College, Bagalkote"
            link="#"
          />
        </div>
      </div>
    );
  }
  
  export default Achievements;
  