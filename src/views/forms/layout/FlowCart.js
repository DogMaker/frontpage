import React, { useState } from 'react'
import InputGroup from '../input-group/InputGroup'
import CIcon from '@coreui/icons-react'
import { cilCalendar, cilClock } from '@coreui/icons'
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
          <div>
            <CIcon size={'2xl'} icon={cilCalendar} />
            <strong>{' Dia ' + new Date(1504095567183).toLocaleDateString('pt-BR')}</strong>
            <br />
            <CIcon size={'2xl'} icon={cilClock} />
            <strong>
              {' Das ' +
                new Date(1504095567183).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
            </strong>
            <strong>
              {' às ' +
                new Date(1504095567183 + 3600000).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
            </strong>
          </div>
          <br />
          <ApiMercadoPago />
        </CModalBody>
      </CModal>
    </>
  )
}

export default FlowCartByDate
