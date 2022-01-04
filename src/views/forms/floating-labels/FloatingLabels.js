import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormInput,
  CFormLabel,
  CFormFloating,
  CFormSelect,
  CFormTextarea,
  CRow,
} from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'
import React, { useState } from 'react'
import { useMercadopago } from 'react-sdk-mercadopago'
import axios from 'axios'
import preferences from './preferences.js'
import ApiMercadoPago from './apiMercadoPago.js'

const FloatingLabels = () => {
  const [id, setId] = useState('')

  return (
    <div>
      <ApiMercadoPago />
    </div>
  )
}

export default FloatingLabels
