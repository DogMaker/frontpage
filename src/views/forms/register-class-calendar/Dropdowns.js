import React, { useState } from 'react'
import CIcon from '@coreui/icons-react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import FloatingLabels from './FloatingLabels'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CRow,
  CTableRow,
  CTableDataCell,
  CProgress,
  CTable,
  CTableHead,
  CTableHeaderCell,
  CTableBody,
  CModalFooter,
  CModalBody,
  CModalTitle,
  CModalHeader,
  CModal,
  CFormSelect,
} from '@coreui/react'
import portuguese from '../../../translations/portuguese.js'
import skills from '../../../mock/skills.js'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import options from '../../../mock/habilities.js'
import axios from 'axios'

const Dropdowns = () => {
  const [visible, setVisible] = useState()
  const [response, setResponse] = useState()
  const [startDate, setStartDate] = useState(new Date('2022-01-01T00:00:00'))
  const [endDate, setEndDate] = useState(new Date('2022-01-01T00:00:00'))
  const [startTime, setStartTime] = useState(new Date('2022-01-01T00:00:00'))
  const [endTime, setEndTime] = useState(new Date('2022-01-01T00:00:00'))
  const [selectedOptions, setSelectedOptions] = useState([])
  const animatedComponents = makeAnimated()
  const [classState, setClassState] = useState('FREE')

  const handleChange = (options) => {
    setSelectedOptions(Array.isArray(options) ? options.map((x) => x.value) : [])
  }

  const handleClassState = (e) => {
    setClassState(e.target.value)
  }

  function sendPreferences(preferences) {
    var config = {
      method: 'post',
      url: 'http://0.0.0.0:8080/create-range',
      withCredentials: false,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      data: preferences,
    }

    axios(config)
      .then(function (response) {
        var resp = JSON.stringify(response.data)
        var obj = JSON.parse(resp)
        setResponse(obj)
      })
      .catch(function (error) {
        console.error(error)
      })
  }

  function convertIso(date) {
    var isoDateTime = new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString()

    return isoDateTime
  }
  const showRequest = () => {
    let scheduleEvent = {
      eventType: classState,
      start: convertIso(startDate),
      end: convertIso(endDate),
      exceptDays: selectedOptions,
      exceptTimes: [
        {
          start: startTime.toString().substr(16, 5),
          end: endTime.toString().substr(16, 5),
        },
      ],
    }
    sendPreferences(scheduleEvent)
    setVisible(false)
  }

  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Cadastrar aulas</strong>
            </CCardHeader>
            <CCardBody>
              <FloatingLabels data={response} />
              <br />
              <CButton onClick={() => setVisible(!visible)}>
                Cadastrar disponibilidade de aulas
              </CButton>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Modal title</CModalTitle>
        </CModalHeader>

        <CModalBody>
          <fieldset>
            <legend>Tipo de disponibilidade</legend>
            <CFormSelect
              aria-label="Default select example"
              options={[
                { label: 'Free', value: 'FREE' },
                { label: 'Block', value: 'BLOCK' },
              ]}
              onChange={handleClassState}
            />
          </fieldset>
          <div>
            <br />
          </div>
          {/* https:reactdatepicker.com*/}
          <fieldset>
            <legend>Intervalo de aulas no calendario</legend>
            <DatePicker
              className="form-control"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={60}
              timeCaption="time"
              dateFormat={portuguese.dateFormat}
            />
            <div>
              <br />
            </div>
            <DatePicker
              className="form-control"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={60}
              timeCaption="time"
              dateFormat={portuguese.dateFormat}
            />
          </fieldset>
          <div>
            <br />
          </div>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            value={portuguese.daysOfTheWeek.filter((obj) => selectedOptions.includes(obj.value))}
            options={portuguese.daysOfTheWeek}
            placeholder={portuguese.scheduleMentorClass.setScheduleClass}
            onChange={handleChange}
          />
          <div>
            <br />
          </div>
          <fieldset>
            <legend>Exceção de Horarios</legend>
            {/* https:reactdatepicker.com*/}
            <DatePicker
              className="form-control"
              selected={startTime}
              onChange={(date) => setStartTime(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={60}
              timeCaption="Time"
              dateFormat="h:mm aa"
            />
            <div>
              <br />
            </div>
            <DatePicker
              className="form-control"
              selected={endTime}
              onChange={(date) => setEndTime(date)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={60}
              timeCaption="Time"
              dateFormat="h:mm aa"
            />
          </fieldset>
        </CModalBody>

        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>

          <CButton color="primary" onClick={() => showRequest()}>
            Save changes
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default Dropdowns
