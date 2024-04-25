import Cards from './Cards_block3/Cards';
import './Content.css';
import Options from './Options_block2/Options';
import Searcher from './Searcher_block1/Searcher';
import { dataCardsJobs } from './Cards_block3/CardJobs/dataCardsJobs';
import { dataCardsCompany } from './Cards_block3/CardCompany/dataCardCompany';
import Skills from './Skills_block4/Skills';
import { skillsData } from './Skills_block4/skillsData';
import { collectionData } from './Collections_block5/CardCollection/collectionData';
import Collections from './Collections_block5/Collections';
import Steps from './Steps_block5/Steps';
import { stepsData } from './Steps_block5/stepsData';
import FAQs from './FAQs_block6/FAQs';
import { FAQsData } from './FAQs_block6/FAQsData.js';
import Call from './Call_block7/Call.jsx';

export default function Content() {
    return(
        <>
            <Searcher />
            <Options />
            <Cards dataJobs={dataCardsJobs} dataCompanies={dataCardsCompany} />
            <Skills data={skillsData} />
            <Collections data={collectionData}/>
            <Steps data={stepsData} />
            <FAQs data={FAQsData} />
            <Call />
        </>
    )
}
