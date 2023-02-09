import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const addNewMeetupHandler = async (meetupData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };
  return <NewMeetupForm onAddMeetup={addNewMeetupHandler} />;
};
export default NewMeetupPage;
