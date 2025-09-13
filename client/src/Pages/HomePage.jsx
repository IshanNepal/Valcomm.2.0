import React, { useEffect, useState } from 'react'
import BasicModalComponent from '../components/modals/BasicModalComponent'
import EventCardComponent from '../components/EventCardComponent'
import { inputStyles } from '../styles/inputStyles'
import { Plus } from 'lucide-react'
import { buttonStyles } from '../styles/buttonstyles'
import AddEventForm from '../components/form/AddEventForm'
import { useOutletContext } from 'react-router-dom'
import useEventsHook from '../hooks/useEventsHook'

const HomePage = () => {
  // custom hooks
  const { handleOpenEvent } = useOutletContext();
  const {handleFetchEvents} = useEventsHook();

  // usestate 
  const [events, setEvents] = useState([]);

  // useEffect
  useEffect(() => {
   const fetchData = async () => {
     const data = await handleFetchEvents()
     const main_data = data.events;
     setEvents(main_data);
   }
   fetchData();
  }, [])

  return (
    <main className='w-full h-screen bg-gradient-to-br from-base-300 from-[7%] via-base-200 via-[40%] to-base-300 to-[70%] overflow-x-hidden overflow-y-auto'>
     <section className="actions flex items-center justify-end whitespace-nowrap gap-2 p-2">
      <input 
      type="text" 
      className={inputStyles.searchBar}
      placeholder='Search By Event Name!'/>

      <button className={buttonStyles.button} onClick={handleOpenEvent}>
        <Plus />
        <span>Add Event</span>
      </button>
     </section>

     <section className='events w-full p-2'>
      <h1 className='text-center font-bold text-2xl border-b-2 border-primary w-fit mb-2'>Events Near You! 🗺️</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-4">
       {events.map((event, idx) => (
          <EventCardComponent 
          title={event.title} 
          desc={event?.desc} 
          key={idx}
          stauts={event.stauts}
          volunteers={event.total_volunteer}
          venue={event.venue}
          />
       ))}
      </div>
     </section>

    </main>
  )
}

export default HomePage