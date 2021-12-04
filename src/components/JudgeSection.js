import React from "react";
import "./JudgeSection.scss";

export default function JudgeSection() {
  return (
    <div className="wrapper JudgeSection">
      <div className="title">MEET THE PANEL</div>
      <div className="firstRow">
        <div className="content">Meet Our Judge Panel of ESTHÉTIQUE'21</div>
        <div className="judge1">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E03AQHiFOJ112d9KA/profile-displayphoto-shrink_800_800/0/1516796266106?e=1643846400&v=beta&t=gGoq3n4crdA8bRcQD-aQBvaG2GjxDy0sbOallWRqr98"
            alt="Dinesh Perera"
            width="150"
            height="150"
          />
          <div className="details">
            <span className="name">Dinesh Perera</span>
            <span>Senior Architect Specialist at</span>
            <span>Virtusa</span>
          </div>
        </div>
      </div>
      <div className="judgesWrapper">
        <div>
          <div className="judge2">
            <div className="details">
              <span className="name">Pavithra Subashini</span>
              <span>Senior Lecturer at</span>
              <span>NSBM Green University</span>
            </div>
            <img
              src={`https://www.nsbm.ac.lk/wp-content/uploads/2021/03/E87A2388.jpg`}
              alt="Pavithra Subashini"
              width="150"
              height="150"
            />
          </div>
          <div className="judge3">
            <img
              src="https://media-exp1.licdn.com/dms/image/C5103AQG5HTn9-Zz5Sg/profile-displayphoto-shrink_800_800/0/1566228851037?e=1643846400&v=beta&t=FJgPr4hGGjf0oAMFBUlTyN3vU5UGMBM-rBAHakERLLY"
              alt="Asith Wijenayake"
              width="150"
              height="150"
            />
            <div className="details">
              <span className="name">Asith Wijenayake</span>
              <span>Senior UI/ UX Designer/ Engineer at</span>
              <span>Dialog Axiata</span>
            </div>
          </div>
        </div>
        <div>
          <div className="judge4">
            <div className="details">
              <span className="name">Ishanka T Senavirathna</span>
              <span>Co-Founder & UX Designer at</span>
              <span>Codezilla</span>
            </div>
            <img
              src="https://media-exp1.licdn.com/dms/image/C4E03AQGBTt6GFqv4Iw/profile-displayphoto-shrink_800_800/0/1615605865493?e=1643846400&v=beta&t=ANdVLLn6sHip-tQFRyYmQmqY9XdX7-uoILCtPCG7XZE"
              alt="Ishanka T Senavirathna"
              width="150"
              height="150"
            />
          </div>
          <div className="judge5">
            <img
              src="https://www.nsbm.ac.lk/wp-content/uploads/2021/03/E87A2514.jpg"
              alt="Pramudya Thilakaratne"
              width="150"
              height="150"
            />
            <div className="details">
              <span className="name">Pramudya Thilakaratne</span>
              <span>Lecturer at</span>
              <span>NSBM Green University</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
