import React, { useState } from 'react'
import search from '../../../mock/search.js'
import options from '../../../mock/habilities.js'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

const animatedComponents = makeAnimated()

const FloatingLabels = () => {
  const [selectedOptions, setSelectedOptions] = useState([])

  let resp = [
    { time: '00:00', day: 'Sunday' },
    { time: '01:00', day: 'Tuesday' },
    { time: '02:00', day: 'Sunday' },
    { time: '03:00', day: 'Saturday' },
    { time: '04:00', day: 'Sunday' },
    { time: '05:00', day: 'Saturday' },
    { time: '06:00', day: 'Friday' },
    { time: '07:00', day: 'Sunday' },
    { time: '08:00', day: 'Saturday' },
    { time: '09:00', day: 'Sunday' },
    { time: '10:00', day: 'Monday' },
    { time: '12:00', day: 'Sunday' },
    { time: '11:00', day: 'Saturday' },
    { time: '13:00', day: 'Sunday' },
    { time: '14:00', day: 'Friday' },
    { time: '15:00', day: 'Sunday' },
    { time: '16:00', day: 'Tuesday' },
    { time: '17:00', day: 'Sunday' },
    { time: '18:00', day: 'Monday' },
    { time: '19:00', day: 'Sunday' },
    { time: '20:00', day: 'Sunday' },
    { time: '21:00', day: 'Wednesday' },
    { time: '22:00', day: 'Sunday' },
    { time: '23:00', day: 'Sunday' },
    { time: '23:00', day: 'Monday' },
  ]

  function groupBy(list, keyGetter) {
    const map = new Map()
    list.forEach((item) => {
      const key = keyGetter(item)
      const collection = map.get(key)
      if (!collection) {
        map.set(key, [item])
      } else {
        collection.push(item)
      }
    })
    return map
  }

  const grouped = groupBy(resp, (day) => day.day)

  console.log(grouped)

  grouped.forEach(function (value, key) {
    console.log(key)
    value.forEach(function (value, key) {
      console.log(key + ' = ' + value.time)
    })
  })

  var gsDayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  var gsMonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Sep', 'Oct', 'Nov', 'Dec']

  var d = new Date('2022-01-26T15:00:00+00:00')
  var dayName = gsDayNames[d.getDay()]
  var monthName = gsMonthNames[d.getMonth()]

  console.log(dayName + ',' + d.getDate() + ' ' + monthName)
  console.log(d.getHours() + ':' + d.getMinutes() + 0)

  function days(parameter, day) {
    if (parameter === day) {
      return 'table-danger'
    } else if (parameter === undefined) {
      return 'table-dark'
    } else {
      return 'table-success'
    }
  }

  function dayHandler(dayWeek, target) {
    return days(dayWeek, target)
  }

  return (
    <div>
      <table className="table table-bordered border-primary">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Seg, 10 Jan</th>
            <th scope="col">Ter, 11 Jan</th>
            <th scope="col">Qua, 12 Jan</th>
            <th scope="col">Qui, 13 Jan</th>
            <th scope="col">Sex, 14 Jan</th>
            <th scope="col">Sab, 15 Jan</th>
            <th scope="col">Dom, 16 Jan</th>
          </tr>
        </thead>
        <tbody>
          {resp.map((item, index) => (
            <tr key={index.time}>
              <th scope="row">{item.time}</th>
              <td className={dayHandler(item.day, 'Sunday')}></td>
              <td className={dayHandler(item.day, 'Monday')}></td>
              <td className={dayHandler(item.day, 'Tuesday')}></td>
              <td className={dayHandler(item.day, 'Wednesday')}></td>
              <td className={dayHandler(item.day, 'Thursday')}></td>
              <td className={dayHandler(item.day, 'Friday')}></td>
              <td className={dayHandler(item.day, 'Saturday')}></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default FloatingLabels
