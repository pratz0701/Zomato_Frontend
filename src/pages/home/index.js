import React, { useState } from 'react';
import Header from "../../components/common/header";
import TabOptions from "../../components/common/taboptions";
import Footer from "../../components/common/footer";
import Delivery from "../../components/delivery";
import DiningOut from "../../components/dining out";
import NightLife from '../../components/nightlife';

    const HomePage = () => {
       const [activeTab, setActiveTab]= useState("Delivery");

    return (
    <div> 
        <Header /> 
        <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
        {getCorrectScreen(activeTab)}
        
        {/* different screen */}

        <Footer />

    </div>
    );
    };

    const getCorrectScreen = (tab) => {
        // eslint-disable-next-line default-case
        switch (tab){
            case "Delivery":
                return <Delivery />;
            case "Dining Out":
                return <DiningOut />;
            case "NightLife":
                return <NightLife />;
            default:
                return <Delivery />;
        }
    }


export default HomePage;
