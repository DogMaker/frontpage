import React, { useState } from 'react'
import CIcon from '@coreui/icons-react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
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

const Dropdowns = () => {
  const [visible, setVisible] = useState()
  const [startDate, setStartDate] = useState(new Date())

  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Cadastrar aulas</strong>
            </CCardHeader>
            <CCardBody></CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CButton onClick={() => setVisible(!visible)}>Cadastrar disponibilidade de aulas</CButton>
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Modal title</CModalTitle>
        </CModalHeader>

        <CModalBody>
          <CFormSelect
            aria-label="Default select example"
            options={[
              'Select the status of the class',
              { label: 'Free', value: '1' },
              { label: 'Block', value: '2' },
            ]}
          />
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        </CModalBody>

        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>

          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default Dropdowns
