import React from 'react'
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
} from '@coreui/react'
import portuguese from '../../../translations/portuguese.js'
import cadastro from '../../../mock/cadastro.js'

const FormControl = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>{portuguese.nav.personalRegistry}</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlInput1">
                  {portuguese.registryPersonalPage.email}
                </CFormLabel>
                <CFormInput
                  type="email"
                  id="exampleFormControlInput1"
                  placeholder={cadastro.eMail}
                  disabled
                />
                <CFormLabel htmlFor="exampleFormControlInput1">
                  {portuguese.registryPersonalPage.name}
                </CFormLabel>
                <CFormInput
                  type="email"
                  id="exampleFormControlInput1"
                  placeholder={cadastro.name}
                  disabled
                />
                <CFormLabel htmlFor="exampleFormControlInput1">
                  {portuguese.registryPersonalPage.lastName}
                </CFormLabel>
                <CFormInput
                  type="email"
                  id="exampleFormControlInput1"
                  placeholder={cadastro.lastName}
                  disabled
                />
                <CFormLabel htmlFor="exampleFormControlInput1">
                  {portuguese.registryPersonalPage.phone}
                </CFormLabel>
                <CFormInput
                  type="email"
                  id="exampleFormControlInput1"
                  placeholder={cadastro.phone}
                  disabled
                />
                <CFormLabel htmlFor="exampleFormControlInput1">
                  {portuguese.registryPersonalPage.country}
                </CFormLabel>
                <CFormSelect aria-label="Default select example" disabled>
                  <option>{cadastro.country}</option>
                </CFormSelect>
                <CFormLabel htmlFor="exampleFormControlInput1">
                  {portuguese.registryPersonalPage.mentorArea}
                </CFormLabel>
                <CFormSwitch
                  label={portuguese.registryPersonalPage.mentor}
                  id="formSwitchCheckDefault"
                  defaultChecked={cadastro.mentor}
                  disabled
                />
                <CFormSwitch
                  label={portuguese.registryPersonalPage.mente}
                  id="formSwitchCheckDefault"
                  defaultChecked={cadastro.mente}
                  disabled
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="exampleFormControlTextarea1">
                  {portuguese.registryPersonalPage.description}
                </CFormLabel>
                <CFormTextarea id="exampleFormControlTextarea1" rows="3" disabled>
                  {cadastro.description}
                </CFormTextarea>
              </div>
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

export default FormControl
