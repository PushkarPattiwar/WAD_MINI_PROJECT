import React, { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import concepts_logo from '../assets/images/concepts_logo.png';
import pradnya_logo from '../assets/images/pradnya_logo.png';
import impetus_logo from '../assets/images/impetus_logo.png';
import { useGetRegistrations } from "../hooks/admin.hooks";
function AdminData() {
  const [eventCounts, setEventCounts] = useState({ concepts: 0, impetus: 0, pradnya: 0 });
  const [pradnyaCounts, setPradnyaCounts] = useState({ PpictCollegeCounts: 0, PotherCollegeCounts: 0 });
  const [impetusCounts, setImpetusCounts] = useState({ IpictCollegeCounts: 0, IotherCollegeCounts: 0 });
  const [conceptsCounts, setConceptsCounts] = useState({ CpictCollegeCounts: 0, CotherCollegeCounts: 0, CComputerCount: 0, CITCount: 0, CEnTCCount: 0 });

  const useEventData = (eventName) => {
    const { isLoading, data } = useGetRegistrations(eventName);
    const [compCount, setCompCount] = useState(0);
    const [itCount, setItCount] = useState(0);
    const [entcCount, setEntcCount] = useState(0);

    useEffect(() => {
      if (data && data.data) {
        const totalCount = data.data.length;
        setEventCounts((prevCounts) => ({ ...prevCounts, [eventName]: totalCount }));

        let pictCount = 0;
        let otherCount = 0;
        let comp = 0;
        let it = 0;
        let entc = 0;

        data.data.forEach((entry) => {
          if (entry.college === "Pune Institute of Computer Technology") {
            if (eventName === "concepts") {
              switch (entry.department) {
                case '0':
                  comp++;
                  break;
                case '1':
                  it++;
                  break;
                case '2':
                  entc++;
                  break;
                default:
                  break;
              }
            }
            pictCount++;
          } else {
            otherCount++;
          }
        });

        setCompCount(comp);
        setItCount(it);
        setEntcCount(entc);

        const collegeCounts = {
          [`${eventName[0].toUpperCase()}pictCollegeCounts`]: pictCount,
          [`${eventName[0].toUpperCase()}otherCollegeCounts`]: otherCount,
          CComputerCount: comp,
          CITCount: it,
          CEnTCCount: entc
        };

        switch (eventName) {
          case "concepts":
            setConceptsCounts(collegeCounts);
            break;
          case "impetus":
            setImpetusCounts(collegeCounts);
            break;
          case "pradnya":
            setPradnyaCounts(collegeCounts);
            break;
          default:
            break;
        }
      }
    }, [data]);

    return { isLoading, totalCount: eventCounts[eventName], collegeCounts: eventName === "concepts" ? conceptsCounts : eventName === "impetus" ? impetusCounts : pradnyaCounts, compCount, itCount, entcCount };
  };

  const { isLoading: conceptsIsLoading, totalCount: conceptsTotalCount, collegeCounts: conceptsCollegeCounts, compCount: conceptsCompCount, itCount: conceptsItCount, entcCount: conceptsEntcCount } = useEventData("concepts");
  const { isLoading: impetusIsLoading, totalCount: impetusTotalCount, collegeCounts: impetusCollegeCounts } = useEventData("impetus");
  const { isLoading: pradnyaIsLoading, totalCount: pradnyaTotalCount, collegeCounts: pradnyaCollegeCounts } = useEventData("pradnya");
 
  const renderEventCard = (eventName, logo, total, pictCount, otherCount, isLoading, compCount, itCount, entcCount) => (
    <div className="bg-light_blue rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <img src={logo} alt="" className="w-20 h-20 mr-4" />
        <div>
          <h2 className="text-2xl font-semibold">{eventName[0].toUpperCase() + eventName.slice(1)}</h2>
          <p className="text-lg">Registered: {isLoading ? <BeatLoader color="#ff00ee" loading={isLoading} size={16} /> : total}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg rounded-lg p-4">
          <h3 className="text-lg font-semibold">PICT:</h3>
          <p className="text-lg">{pictCount}</p>
        </div>
        <div className="bg-green-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold">Other:</h3>
          <p className="text-lg">{otherCount}</p>
        </div>
      </div>
      {eventName === "concepts" && (
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gold rounded-lg p-4">
            <h3 className="text-lg font-semibold">Computer:</h3>
            <p className="text-lg">{compCount}</p>
          </div>
          <div className="bg-gold rounded-lg p-4">
            <h3 className="text-lg font-semibold">IT:</h3>
            <p className="text-lg">{itCount}</p>
          </div>
          <div className="bg-gold  rounded-lg p-4">
            <h3 className="text-lg font-semibold">EnTC:</h3>
            <p className="text-lg">{entcCount}</p>
          </div>
        </div>
      )}
    </div>
  );
  

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">Event Counts</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {renderEventCard("concepts", concepts_logo, conceptsTotalCount, conceptsCollegeCounts.CpictCollegeCounts, conceptsCollegeCounts.CotherCollegeCounts, conceptsIsLoading, conceptsCompCount, conceptsItCount, conceptsEntcCount)}
        {renderEventCard("impetus", impetus_logo, impetusTotalCount, impetusCollegeCounts.IpictCollegeCounts, impetusCollegeCounts.IotherCollegeCounts, impetusIsLoading)}
        {renderEventCard("pradnya", pradnya_logo, pradnyaTotalCount, pradnyaCollegeCounts.PpictCollegeCounts, pradnyaCollegeCounts.PotherCollegeCounts, pradnyaIsLoading)}
      </div>
    </div>
  );
}

export default AdminData;
