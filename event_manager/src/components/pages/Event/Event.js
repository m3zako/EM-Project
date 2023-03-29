import "./Event.css"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import { useState } from "react";

const Event = ( {event} ) => {
    const [commentOpen, setCommentOpen] = useState(false);
    const liked = false;

    return (
        <div className="Event">
            <div className="name">
                <span>{event.name}</span>
            </div>
            <div className="category">
                <span>{event.category}<br/><br/></span>
            </div>
            <div className="content">
                <span>{event.desc}</span>
            </div>
            <div className="details">
                <p>
                    When: {event.timedate} <br/>
                    Where: {event.location} <br/>
                    Phone: {event.contactphone} <br/>
                    Email: {event.contactemail} <br/>
                </p>
            </div>
            <div className="info">
                <div className="item">
                    {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
                    12 Likes
                </div>
                <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
                    <TextsmsOutlinedIcon />
                    12 Comments
                </div>
            </div>
        </div>
    )
};

export default Event;