import { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import scrollToTop from '../../utils/scrollToTop';
import ResultImpetus from "./resultImpetus";
import JudgeAllocation from './judgeAllocation';
import ResultConcepts from './resultConcept';
import App from './App';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import SelectDomainSlots from './components/SelectDomainSlots';
import AllocationDetails from './components/AllocationDetails';

function Judge() {
    useEffect(() => {
        scrollToTop()
    }, [])

    return (
        <div>
        <NavBar/>
        <Routes>
            <Route path='/impetus/evaluate/:jid/:pid' element={<ResultImpetus />} />
            <Route path='/:jid/*' element={
                    <App />
            } />

            <Route path='/profile' element={
                    <Profile />
            } />

            <Route path='/select-domain-slots' element={
                    <SelectDomainSlots />
            } />

            <Route path='/allocation-details' element={
                    <AllocationDetails />
            } />



            <Route path='/concepts/evaluate/:jid/:pid' element={<ResultConcepts />} />
        </Routes>
        </div>
    );
}

export default Judge;