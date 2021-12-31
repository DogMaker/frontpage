import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormCheck,
  CFormSwitch,
  CRow,
  CTableRow,
  CButton,
  CInputGroup,
  CInputGroupText,
  CFormInput,
  CFormLabel,
  CLink,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CPopover,
  CTooltip,
} from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'
import portuguese from '../../../translations/portuguese.js'
import pacotes from '../../../mock/pacotes.js'
import { RegistryPackages } from './RegistryPackages'

const ClassPackage = () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <CFormLabel htmlFor="exampleFormControlInput1">
        {portuguese.registryPricePage.valuePerMentoringDescription}
      </CFormLabel>
      <CInputGroup className="flex-nowrap">
        <CInputGroupText id="addon-wrapping">{portuguese.currency}</CInputGroupText>
        <CFormInput
          placeholder="0.0"
          aria-label="priceMentoring"
          aria-describedby="addon-wrapping"
          disabled
        />
      </CInputGroup>
      <br />
      <CRow>
        <CCol xs>
          {pacotes.prices.mentoringPackages.map((item, index) => (
            <CCard className="mb-4" v-for="item in tableItems" key={index}>
              <CCardHeader>
                <strong>{item.name}</strong>
              </CCardHeader>
              <CCardBody>
                <CRow>
                  <div className="small text-medium-emphasis">{item.description}</div>
                  <CCol xs={12} md={6} xl={6}>
                    <CRow>
                      <CCol sm={6}>
                        <div className="border-start border-start-4 border-start-info py-1 px-3">
                          <div className="text-medium-emphasis small">
                            {portuguese.registryPricePage.numberOfClasses}
                          </div>
                          <div className="fs-5 fw-semibold">{item.numberOfMentories}</div>
                        </div>
                      </CCol>
                      <CCol sm={6}>
                        <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                          <div className="text-medium-emphasis small">
                            {portuguese.registryPricePage.discount}
                          </div>
                          <div className="fs-5 fw-semibold">{item.discountPercentage}%</div>
                        </div>
                      </CCol>
                    </CRow>
                  </CCol>

                  <CCol xs={12} md={6} xl={6}>
                    <CRow>
                      <CCol sm={6}>
                        <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                          <div className="text-medium-emphasis small">
                            {portuguese.registryPricePage.finalPrice}
                          </div>
                          <div className="fs-5 fw-semibold">R$ {item.totalPrice}</div>
                        </div>
                      </CCol>
                    </CRow>
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
          ))}
        </CCol>
      </CRow>
      <CButton onClick={() => setVisible(!visible)}>
        {portuguese.registryPersonalPage.editButton}
      </CButton>
    </>
  )
}

export default ClassPackage
