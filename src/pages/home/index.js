import React, { useState } from 'react';
import Header from "../../components/common/header";
import TabOptions from "../../components/common/taboptions";
import Footer from "../../components/common/footer";
import Delivery from "../../components/delivery";
import DiningOut from "../../components/dining out";
import NightLife from '../../components/nightlife';
import 
    {Routes,Route,BrowserRouter} from "react-router-dom";
import Menu from '../../components/common/menu';


const HomePage = () => {
    const [activeTab, setActiveTab] = useState("Delivery");
    const tabs=()=>{
        return (
            <>

            <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
                {getCorrectScreen(activeTab)}
            </>
        )
    }

    return (
        <>
            <Header />

            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={tabs()} />
                    <Route exact path="/menu/:id" element={<Menu/>} />
                    
                </Routes>

                


            </BrowserRouter>
                <Footer />
        </>
    );
};


const getCorrectScreen = (tab) => {
    // eslint-disable-next-line default-case
    switch (tab) {
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
