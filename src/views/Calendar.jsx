import React, {useState} from 'react'
import { Calendar } from 'react-calendar'
// const [date, setDate] = useState(new Date())

const Session = () => {
  return (
      <div className="app">
          <div className="calendar-container">
              <Calendar />
          </div>
      </div>
  )
}

export default Session;
