import React, { useState } from 'react';
import toast from 'react-hot-toast';

const useEventsHook = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [status, setStatus] = useState('');
  const [venue, setVenue] = useState('');
  const [volunteers, setVolunteers] = useState('');

  const handleTitleChange = (text) => setTitle(text);
  const handleDescChange = (text) => setDesc(text);
  const handleStatusChange = (text) => setStatus(text);
  const handleVenueChange = (text) => setVenue(text);
  const handleVolunteers = (text) => setVolunteers(text);

  const handleFetchEvents = async () => {
    console.log('Creating event with:', { title, desc, status, venue, volunteers });

    try {
      const res = await fetch('http://127.0.0.1:5000/api/app/get-all-events', {
        headers: { 'Content-Type': 'application/json' }
      });

      console.log('Response received:', res);

      if (!res.ok) {
        toast.error("Error Fetching Events!");
        return;
      }

      const data = await res.json();
      console.log(data)
      toast.success('Sucessfully Fetched all Events!')
      return data;
    }

  catch (parseError) {
    console.error('Failed to parse JSON:', parseError);
    toast.error('Error While Fetching Events!');
    return;
  }
 };

  const handleCreateEvent = async () => {
    console.log('Creating event with:', { title, desc, status, venue, volunteers });

    try {
      const res = await fetch('http://127.0.0.1:5000/api/app/add-event', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          total_volunteers: volunteers,
          title,
          status,
          description: desc,
          venue,
        }),
      });

      console.log('Response received:', res);

      if (!res.ok) {
        toast.error("Invalid JSON!");
        return;
      }

      const data = await res.json()
      console.log(data)
      toast.success('Sucessfully Created the Event!')
    }

  catch (parseError) {
    console.error('Failed to parse JSON:', parseError);
    toast.error('Invalid JSON response from server');
    return;
  }

}
  return {
    handleTitleChange,
    handleDescChange,
    handleStatusChange,
    handleVenueChange,
    handleVolunteers,
    handleCreateEvent,
    handleFetchEvents
  };

  

}


export default useEventsHook;
