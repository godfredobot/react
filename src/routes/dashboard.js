import { Form } from "react-router-dom";

function Dashboard() {
    const contact = {
        first: "Your",
        last: "Name",
        avatar: "https://placekitten.com/g/200/200",
        twitter: "your_handle",
        notes: "Some notes",
        favorite: true,
    };

    return (
        <div id="contact">
            Dashboard
        </div>
    );
}

export default Dashboard;