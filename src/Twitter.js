import { Timeline, Tweet } from "react-twitter-widgets";
import './Twitter.css';

export const Twitter = () => {
  return (
    <div className="wrapper">
      <div className="header">
        <h1>SEE WHAT'S HAPPENING</h1>
      </div>
      <div>
        
        <Timeline
          dataSource={{
            sourceType: "profile",
            screenName: "fossnsbm",
          }}
          options={{
            height: "600",
          }}
        />
      </div>
    </div>
  );
};
