import React, { useState } from 'react'
import axios from 'axios'
import preferences from './preferences.js'
import portuguese from '../../../translations/portuguese.js'

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
        console.error(error + id)
      })
  }

  return (
    <>
      <button type="button" className="btn btn-primary rounded-pill" onClick={sendPreferences}>
        <strong>{portuguese.generics.buy}</strong>
      </button>
    </>
  )
}

export default ApiMercadoPago
