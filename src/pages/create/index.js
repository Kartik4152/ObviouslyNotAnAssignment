import { useInsertionEffect, useMemo, useState } from "react";
import { TbConfetti } from "react-icons/tb";
import { DateRangePicker } from "react-date-range";
import { BsCalendarDate } from "react-icons/bs";
import Input from "../../components/input";
import Button from "../../components/button";
import Party from "../../assets/images/Party.png";


import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {

  const navigate = useNavigate();

  const [showDatePicker, setShowDatePicker] = useState(false);

  const [eventDetails, setEventDetails] = useState({
    name: "",
    host: "",
    startDate: null,
    endDate: null,
    location: "",
  });

  const areFieldsSet = useMemo(() => {
    let fieldsAreSet = true;

    Object.values(eventDetails).forEach((value) => {
      if (!value) {
        fieldsAreSet = false;
      }
    });

    return fieldsAreSet;
  }, [eventDetails]);

  useInsertionEffect(() => {
    let existingDetails = JSON.parse(
      window.localStorage.getItem("eventDetails")
    );

    if (existingDetails) {
      existingDetails.startDate = new Date(existingDetails.startDate);
      existingDetails.endDate = new Date(existingDetails.endDate);

      setEventDetails(existingDetails);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("eventDetails", JSON.stringify(eventDetails));
    navigate("/event");
  };

  const onDatesChange = (ranges) => {
    setEventDetails(eventDetails=>({
      ...eventDetails,
      startDate: ranges.range1.startDate,
      endDate: ranges.range1.endDate
    }));
    toggleDatePickerVisibility();
  };

  const onInputChange = (key, e) => {
    setEventDetails((eventDetails) => ({
      ...eventDetails,
      [key]: e.target.value,
    }));
  };

  const toggleDatePickerVisibility=()=>{
    setShowDatePicker(prev=>!prev);
  }

  return (
    <div className="min-h-screen w-full grid grid-cols-1 xl:grid-cols-2">
      <div className="hidden xl:flex w-full col-span-1 items-start justify-center overflow-hidden">
        <img src={Party} className="h-full w-full object-cover" alt="party" />
      </div>
      <div className="bg-neutral-100 w-full col-span-1 flex flex-col justify-center items-center py-8">
        <div className="flex flex-col">
          <div className="rounded-full h-20 w-20 bg-neutral-200 mb-4 flex items-center justify-center p-6 border self-center border-neutral-400/50">
            <TbConfetti className="text-primary-300 h-full w-full" />
          </div>
          <h1 className="text-primary-400 text-4xl font-semibold mb-8 self-center">
            Create your event
          </h1>
          <Input
            label="Your Event Name:"
            value={eventDetails.name}
            onChange={(e) => onInputChange("name", e)}
            className="mb-6"
          />
          <Input
            label="Your Name: "
            value={eventDetails.host}
            onChange={(e) => onInputChange("host", e)}
            className="mb-6"
          />
          <Input
            label="Event Location: "
            value={eventDetails.location}
            onChange={(e) => onInputChange("location", e)}
            className="mb-6"
          />
          <div className="relative mb-6">
            <span className="cursor-pointer flex items-center" onClick={toggleDatePickerVisibility}>
              Select Event Dates
              <BsCalendarDate className="h-6 w-6 inline-block ml-2"/>
            </span>
            {showDatePicker && (
              <DateRangePicker
              ranges={[
                {
                  startdate: eventDetails.startDate || new Date(),
                  endDate: eventDetails.endDate || new Date(),
                },
              ]}
              onChange={onDatesChange}
              className="mb-6 absolute bottom-8 right-0 z-50"
            />
            )}
          </div>
        </div>
        <Button onClick={handleSave} disabled={!areFieldsSet}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default CreatePage;
