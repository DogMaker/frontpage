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
import sendPreferences from './Request.js'

const Dropdowns = () => {
  const [visible, setVisible] = useState()
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [startTime, setStartTime] = useState(new Date())
  const [endTime, setEndTime] = useState(new Date())
  const [selectedOptions, setSelectedOptions] = useState([])
  const animatedComponents = makeAnimated()
  const [classState, setClassState] = useState('FREE')

  const handleChange = (options) => {
    setSelectedOptions(Array.isArray(options) ? options.map((x) => x.value) : [])
  }

  const handleClassState = (e) => {
    setClassState(e.target.value)
  }

  const showRequest = () => {
    let scheduleEvent = {
      eventType: classState,
      start: '2022-01-20T18:00:00',
      end: '2022-01-20T18:00:00',
      exceptDays: selectedOptions,
      exceptTimes: [
        {
          start: '08:00',
          end: '09:00',
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
              <FloatingLabels />
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
              timeIntervals={15}
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
              timeIntervals={15}
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
