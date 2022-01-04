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

const ApiMercadoPago = () => {
  const [id, setId] = useState('')

  function sendPreferences() {
    var config = {
      method: 'post',
      url: 'https://api.mercadopago.com/checkout/preferences',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer TEST-2802586236568292-010314-a5ff35f5623fede3a71701f0e7c7dd3f-28877471',
      },
      data: preferences,
    }

    axios(config)
      .then(function (response) {
        var resp = JSON.stringify(response.data)
        var obj = JSON.parse(resp)
        setId(obj.id)
        window.location.href = obj.init_point
      })
      .catch(function (error) {
        console.error(error)
      })
  }

  return (
    <>
      <button type="button" className="btn btn-primary rounded-pill" onClick={sendPreferences}>
        <strong>Comprar com Mercado Pago</strong>
      </button>
    </>
  )
}

export default ApiMercadoPago
