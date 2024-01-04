import React, { useState } from 'react'
import { useDeleteDestinationMutation, useUpdateDestinationMutation } from "../api/DestinationApi";

function Destination({destination}) {

    const [DeleteDestinationTrigger] = useDeleteDestinationMutation();
    const [UpdateDestinationTrigger] = useUpdateDestinationMutation();

    const [isUpdating, setIsUpdating] = useState(false);
    const [newCity, setNewCity] = useState("");
    const [newCountry, setNewCountry] = useState("");
    const handleUpdate = () => {
        let country = newCountry == "" ? destination.country : newCountry;
        let city = newCity == "" ? destination.city : newCity;
        UpdateDestinationTrigger({
            id: destination.id,
            city: city,
            country: country,
            daysNeeded: destination.daysNeeded
        })
        setIsUpdating(false);
        setNewCity("");
        setNewCountry("");
    }
  
    return (
      <div
        className="row py-1"
        key={destination.id}
        style={{
          borderBottom: "1px solid #333",
          borderTop: "1px solid #333",
        }}
      >
        <div className="col-4 row offset-3">
          <div className="row">
            <div className="col-6 p-1">
              {isUpdating ? (
                <input
                  type="text"
                  placeholder="Город.."
                  className="form-control"
                  defaultValue={destination.city}
                  onChange={(e) => setNewCity(e.target.value)}
                />
              ) : (
                <span>{destination.city}</span>
              )}
            </div>
            <div className="col-6 p-1">
              {isUpdating ? (
                <input
                  type="text"
                  placeholder="Страна.."
                  className="form-control"
                  defaultValue={destination.country}
                  onChange={(e) => setNewCountry(e.target.value)}
                />
              ) : (
                <span>{destination.country}</span>
              )}
            </div>
          </div>
        </div>
        <div className="col-1 text-warning">{destination.daysNeeded} дней </div>
        <div className="col-3">
          <button
            className={`btn m-1 ${isUpdating ? "btn-primary" : "btn-warning"}`}
            onClick={() => {
              setIsUpdating(!isUpdating);
            }}
          >
            {!isUpdating ? "Редактировать" : "Отмена"}
          </button>
          {isUpdating ? (
            <button className="btn btn-success m-1"
            onClick={()=>{
                handleUpdate()
            }}>Сохранить</button>
          ) : (
            ""
          )}
          <button
            className="btn  btn-danger m-1"
            onClick={() => DeleteDestinationTrigger({ id: destination.id })}
          >
            Удалить
          </button>
        </div>
      </div>
    );
}

export default Destination