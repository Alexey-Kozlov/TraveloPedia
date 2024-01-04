import React, { useState } from "react";
import { useAddDestinationMutation } from "../api/DestinationApi";

function AddDestination() {

  const [newCity, setNewCity] = useState("");
  const [newCountry, setNewCountry] = useState("");
  const [AddDestinationTrigger, results] = useAddDestinationMutation();

  const handleSubmit = (e) =>{
    e.preventDefault();
    AddDestinationTrigger({
      id: parseInt(Math.random() * 100),
      city: newCity,
      country: newCountry,
      daysNeeded: parseInt(Math.random()*10) + 1
    });
    setNewCity("");
    setNewCountry("");
  }

  return (
    <div className="p-4 border">
      <form onSubmit={handleSubmit}>
        <div className="row col-8 offset-2">
            <h4>Укажите новое место назначения</h4>
          <div className="col-5 p-1">
            <input 
                type="text"
                className="form-control"
                placeholder="Укажите город..."
                value={newCity}
                onChange={(e) => setNewCity(e.target.value)}
            />
          </div>
          <div className="col-5 p-1">
          <input 
                type="text"
                className="form-control"
                placeholder="Укажите страну..."
                value={newCountry}
                onChange={(e)=> setNewCountry(e.target.value)}
            />
          </div>
          <div className="col-2 p-1">
            <button className="btn btn-success form-control">Добавить</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddDestination;
