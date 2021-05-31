import React from 'react';
import { Button } from "@material-ui/core"
import "./HomeCard.css";

const HomeCard = (props) => {
  return (
    <div style={{display:"flex", justifyContent:"center"}}>
      <div className="card_Mobile">
      <div className="card_image_div_Mobile">
        <img
          className="card_image_Mobile" 
          src={props.thumbnail.small} 
          alt="image2"
        />
      </div>
      <div className="card_body_Mobile">
        <div className="card_heading_Mobile">
        <button className="hidden_button2_Mobile">
          <h4>{props.title}</h4>
        </button>
        </div>
        <div className="card_body_text_Mobile">
          <p>
            {props.content}
          </p>
        </div>
        <div className="card_footer_Mobile">
        <Button
          variant="contained"
          color="primary"
          fullWidth
          style={{
            height: "40px",
            fontWeight: "400",
            borderRadius:"50px"
          }}
        >
          See More
        </Button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HomeCard;
