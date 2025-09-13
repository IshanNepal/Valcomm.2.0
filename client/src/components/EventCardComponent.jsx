import { School, Vote } from "lucide-react";
import { buttonStyles } from "../styles/buttonstyles";

const EventCardComponent = ({desc, title, stauts, volunteers, venue}) => {
  const text_parser = (text) => {
    const parsed_text = text? text.length > 20 ? (text.slice(0,20)+ text.replace("...")): text : "No Description Available"
    return parsed_text;
  }
  return (
  <div className="Card bg-base-100 rounded-md shadow-md hover:shadow-xl flex flex-col justify-between gap-2 transition-shadow duration-200">
    <School size={60} className="bg-primary-content w-full h-[6rem] rounded-t-md p-2"/>
    <div className="Title p-2 ">
      <h1 className="text-xl font-semibold">
        {title}
      </h1>
      <span>
        {text_parser(desc)}
      </span>
    </div>
    <div className="Other p-4">
      <div className="Text text-lg flex flex-col items-start ">
        <span>Status:{stauts}</span>
        <span>Total Volunteers: {volunteers}</span>
        <span>Venue: {venue}</span>
      </div>
      <button className={buttonStyles.primaryButton}>
        <Vote />
        <span>Volunteer!</span>
      </button>
    </div>
  </div>
  )
}

export default EventCardComponent