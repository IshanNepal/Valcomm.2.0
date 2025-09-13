import { Plus } from 'lucide-react'
import { inputStyles } from '../../styles/inputStyles'
import { buttonStyles } from '../../styles/buttonstyles'
import useEventsHook from '../../hooks/useEventsHook'

const AddEventForm = () => {
  const {
    handleCreateEvent, 
    handleStatusChange, 
    handleDescChange, 
    handleTitleChange, 
    handleVenueChange, 
    handleVolunteers
  } = useEventsHook();

  return (
     <div className="Form flex flex-col p-2 gap-4 justify-center items-center">
        <h1 className='text-3xl font-bold text-center'>Add Your Event!</h1>
        <div className="Main p-2 flex flex-col gap-2">

            <div className="Title of Event">
                <label 
                htmlFor="forTitleofEvent" 
                className='text-xl font-semibold'>Title of Event 🎧:</label>
                <input 
                type="text" 
                name="Title of Event" 
                id="Title of Event" 
                placeholder='Enter Your Title of Event!'
                onChange={(e) => handleTitleChange(e.target.value)}
                className={inputStyles.formInput} />
            </div>

            <div className="Description">
                <label 
                htmlFor="forDescription" 
                className='text-xl font-semibold'>Description 🗒️:</label>
                <textarea 
                type="textarea" 
                name="Description" 
                id="Description" 
                placeholder='Enter Your Description!'
                onChange={(e) => handleDescChange(e.target.value)}
                className={inputStyles.formInput} />
            </div>

            <div className="Volunteers">
              <label 
              htmlFor="forVolunteers"
              className='text-xl font-semibold'> Total Volunteers 🕴️:</label>
              <input 
                type="number" 
                min={1} 
                max={100} 
                step={1}
                id="volunteers" 
                placeholder="Enter the required total Volunteers!"
                onChange={(e) => handleVolunteers(e.target.value)}
                className={inputStyles.formInput} />
            </div>

            <div className="venue">
              <label 
              htmlFor="forvenue"
              className='text-xl font-semibold'> Venue 🏝️:</label>
              <input 
                type="text" 
                placeholder="Enter the Venue of the Event!"
                onChange={(e) => handleVenueChange(e.target.value)}
                className={inputStyles.formInput} />
            </div>

             <div className="stats flex flex-col">
              <label 
              htmlFor="forStatus"
              className='text-xl font-semibold'> Status 🚦:</label>
              <input 
                type="text" 
                placeholder="Enter the Urgency of The Event!"
                onChange={(e) => handleStatusChange(e.target.value)}
                className={inputStyles.formInput}/>
            </div>

        </div>
        <div className="Others flex flex-col gap-2">
            <div className="Actions flex justify-center items-center gap-2">

                <button 
                className={buttonStyles.primaryButton}
                onClick={handleCreateEvent} >
                    <Plus size={25}/>
                    <span>Sumbit</span>
                </button>

                <button className={buttonStyles.button}>
                    <Plus className='rotate-45' size={25}/>
                    <span>Cancel</span>
                </button>
                
            </div>
        </div>
    </div>
  )
}

export default AddEventForm;