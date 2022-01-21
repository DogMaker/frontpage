import React, { useState } from 'react'
import FlowCart from './FlowCart'
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
} from '@coreui/react'

const FlowCartByDate = (flag) => {
  return (
    <>
      <CModal fullscreen="xxl" visible={flag.data}>
        <CModalHeader>
          <CModalTitle>Extra large modal</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <InputGroup />
          <button type="button" className="btn btn-primary rounded-pill">
            <strong>Agendar</strong>
          </button>
        </CModalBody>
      </CModal>
    </>
  )
}

export default FlowCartByDate
