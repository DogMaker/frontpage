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
import portuguese from '../../../translations/portuguese.js'
import pacotes from '../../../mock/pacotes.js'

const RegistryPackages = () => {
  const [visible, setVisible] = useState(false)

  return (
    <>
      <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>{portuguese.nav.packageRegistry}</CModalTitle>
        </CModalHeader>
        <CModalBody>Modal para criar os dados- separa em uma nova pagina</CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            {portuguese.generics.close}
          </CButton>
          <CButton color="primary">{portuguese.generics.save}</CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default RegistryPackages
