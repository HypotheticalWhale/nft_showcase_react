import { Download,Features,SectionWrapper } from "./components";
import assets from './assets'
import styles from "./styles/Global";
const App = () => {
  return (
    <div>
      <SectionWrapper
        title="Showcase of My React Native NFT marketplace App"
        description="Fully functional NFT marketplace UI with a search engine based on static data"
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Basic Proof of Concept Front-End"
        description="Smooth POC for a UI Design"
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="Built using Expo run natively on all users"
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative way to showcase the marketplace"
        description="This app shows two screens. The first screen lists all NFTs while second one shows the details of the chosen NFT"
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />
      <div className="px4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made by {" "}<span className="bold">Samuel Tan Zhi Wei</span></p>
      </div>
    </div>
  );
}

export default App;
