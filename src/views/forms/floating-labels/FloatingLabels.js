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
  const people = [
    { id: 1, name: 'abc', gender: 'm', age: 15 },
    { id: 2, name: 'a', gender: 'm', age: 25 },
    { id: 3, name: 'efg', gender: 'f', age: 5 },
    { id: 4, name: 'hjk', gender: 'f', age: 35 },
    { id: 5, name: 'ikly', gender: 'm', age: 41 },
    { id: 6, name: 'ert', gender: 'f', age: 30 },
    { id: 7, name: 'qwe', gender: 'f', age: 31 },
    { id: 8, name: 'bdd', gender: 'm', age: 78 },
  ]
  const id_filter = [1, 4, 5, 8]
  const selected = [50, 80]

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
      {people
        .filter((person) => id_filter.includes(person.id) && person.gender === 'm')
        .map((filteredPerson) => (
          <li key={filteredPerson.name} sm="4">
            {filteredPerson.age + ' ' + filteredPerson.name}
          </li>
        ))}
      {search
        .filter((search) => selected.includes(search.knowledge.skills.level))
        .map((filteredPerson) => (
          <li key={filteredPerson.completeName} sm="4">
            {filteredPerson.completeName}
          </li>
        ))}
    </div>
  )
}

export default FloatingLabels
