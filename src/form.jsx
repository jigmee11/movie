import React, { useState } from 'react'

const Former = ({ setMovies }) => {
  const [rate, rater] = useState("none");
  const [full, fuller] = useState("none")
  const [texts, tChanger] = useState({ name: "", desk: "", rating: "", url: "", local: "" });
  const [exa, exar] = useState({ name: "", desk: "", rating: "", url: "", local: "" });

  const submeter = () => {
    if (texts.name !== "" && texts.desk !== "" && texts.rating !== "" && (texts.url !== "" || texts.local !== "") && rate === "none") {
      setMovies(old => {
        let b;
        if (texts.local !== "") {
          b = { rating: texts.rating, name: texts.name, src: texts.local };
        } else {
          b = { rating: texts.rating, name: texts.name, src: texts.url };
        }
        fuller("none");
        return [...old, b]
      })
    }
    else{
      fuller("alert");
    }
  }
  const Checker = (ug) => {
    tChanger(old => {
      old.rating = ug;
      console.log(old);
      return old;
    })
    if (ug > 10) {
      rater("alert");
    }
    else {
      rater("none");
    }
    return;
  }
  return (
    <div className={"form"}>
      <div className="shadow">Movie name</div>
      <input className={"moviename"} onChange={(e) => tChanger(old => {
        old.name = e.target.value;
        e.target.value = old.name;
        return old;
      })}/>
      
      <div className="shadow">Description</div>
      <input className={"description"} onChange={(e) => tChanger(old => {
        old.desk = e.target.value;
        return old;
      })} />
      <div className="shadow">Rating</div>
      <input className={"rating"} type="number" max={"10"} onChange={(e) => { Checker(e.target.value) }} />
      <div className={rate}>10 aas hetrehgui</div>
      <div className="shadow">Release date</div>
      <input type="date" />
      <div className="shadow">Image url</div>
      <input onChange={(e) => tChanger(old => {
        old.url = e.target.value;
        return old;
      })} />
      <div className="shadow">Choose Image</div>
      <input type="file" onChange={(e) => tChanger(old => {
        old.local = URL.createObjectURL(e.target.files[0]);
        return old;
      })}></input>
      <button className="shadow" onClick={submeter} id="submit">Submit</button>
      <div className={full}>Please fill everything</div>
    </div>
  );
}
export default Former;