import React, { useState } from 'react'
import InputGroup from '../input-group/InputGroup'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CLink,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CPopover,
  CRow,
  CTooltip,
  CAlert,
} from '@coreui/react'
import ApiMercadoPago from './apiMercadoPago.js'

const FlowCartByDate = (flag) => {
  console.log(flag.data)
  return (
    <>
      <CModal fullscreen="xl" visible={flag.data.visible}>
        <CModalHeader>
          <CModalTitle>{flag.data.id}</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CAlert color="danger">
            Você será direcionado ao mercadopago para efetuar o pagamento, em seguida quando
            aprovado retornará para plataforma com o agendameto da aula!
          </CAlert>
          <ApiMercadoPago />
        </CModalBody>
      </CModal>
    </>
  )
}

export default FlowCartByDate
