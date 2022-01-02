import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow,
  CFormSelect,
  CFormSwitch,
  CTableRow,
  CTableDataCell,
  CProgress,
  CTable,
  CTableHead,
  CTableHeaderCell,
  CTableBody,
} from '@coreui/react'
import portuguese from '../../../translations/portuguese.js'
import skills from '../../../mock/skills.js'

const Select = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>{portuguese.nav.skillsRegistry}</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell>{portuguese.registrySkillPage.languages}</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <div className="display-inline-flags">
                      {skills.knowledge.languages.map((item, index) => (
                        <div className="flags" v-for="item in tableItems" key={index}>
                          <CIcon size="xl" icon={item.flag} />
                        </div>
                      ))}
                    </div>
                  </CTableRow>
                </CTableBody>
              </CTable>
              <br />
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell>{portuguese.registrySkillPage.skills}</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {skills.knowledge.skills.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell>
                        <div className="clearfix">
                          <div className="float-start">
                            <strong>{item.skill}</strong>
                          </div>
                          <div className="float-end">
                            <small className="text-medium-emphasis">{item.level}</small>
                          </div>
                        </div>
                        <CProgress thin color={item.color} value={item.level} />
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
              <br />
              <CButton
                component="input"
                type="submit"
                color="primary"
                value={portuguese.registryPersonalPage.editButton}
              />
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Select
