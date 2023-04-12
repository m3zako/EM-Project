import "./University.css"

const University = ( {university} ) => {

    return (
        <div className="Event">
            <div className="name">
                <span>{university.uniname}</span>
            </div>
            <div className="content">
                <span>{university.desc}</span>
            </div>
            <div className="details">
                <p>
                    Where: {university.location} <br/>
                    Student Count: {university.numofstudents} <br/>
                </p>
            </div>
        </div>
    )
};

export default University;