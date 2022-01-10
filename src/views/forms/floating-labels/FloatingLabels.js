import React, { useState } from 'react'
import search from '../../../mock/search.js'
import options from '../../../mock/habilities.js'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

const animatedComponents = makeAnimated()

const FloatingLabels = () => {
  const [selectedOptions, setSelectedOptions] = useState([])

  const handleChange = (options) => {
    setSelectedOptions(Array.isArray(options) ? options.map((x) => x.value) : [])
    console.log('Selected Options: ', selectedOptions)
  }

  function filterViaSkills(arr, selected) {
    return arr.filter((obj) =>
      selected.every((selected) =>
        obj.knowledge.skills.some((obj) => obj.skill.includes(selected)),
      ),
    )
  }

  let resp = filterViaSkills(search, selectedOptions)

  return (
    <div>
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        value={options.filter((obj) => selectedOptions.includes(obj.value))}
        options={options}
        onChange={handleChange}
      />
      <p>{'FIltros'}</p>
      {resp.map((item, index) => (
        <p key={index}>{item.clientId}</p>
      ))}
    </div>
  )
}

export default FloatingLabels
