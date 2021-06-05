import React from "react"
import { Button } from "@material-ui/core"
import "./HomeCard.css"

const HomeCard = props => {
  const theme = props.theme.theme

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="card" data-aos="zoom-in">
        <div className="card_image_div">
          <img className="card_image" src={props.thumbnail} alt="image2" />
          <button
            className="hidden_button"
            onClick={console.log(props.seemore)}
          >
            <div className="image__overlay">
              <div className="learn_more_div">See More</div>
            </div>
          </button>
        </div>
        <div className="card_body">
          <div className="card_heading">
            <button className="hidden_button2">
              <h1 style={{ color: theme.text }}>{props.title}</h1>
            </button>
          </div>
          <div className="card_body_text" style={{ color: theme.text }}>
            <p>{props.content}</p>
          </div>
          <div className="card_footer">
            <Button
              variant="contained"
              color="primary"
              fullWidth
              style={{
                height: "40px",
                fontWeight: "400",
                borderRadius: "50px",
                color: "white",
              }}
              onClick={console.log(props.seemore)}
            >
              See More
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeCard
