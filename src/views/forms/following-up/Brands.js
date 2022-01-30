import { React, useState, useEffect } from 'react'
import { cilCheckCircle, cilXCircle } from '@coreui/icons'

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CFormCheck,
  CFormFloating,
  CFormTextarea,
  CFormLabel,
  CInputGroup,
  CButton,
  CFormInput,
  CAlert,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { brandSet } from '@coreui/icons'
import { DocsCallout } from 'src/components'
import act from './stub.js'

const toKebabCase = (str) => {
  return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()
}

export const getIconsView = (iconset) => {
  return Object.entries(iconset).map(([name, value]) => (
    <CCol className="mb-5" xs={6} sm={4} md={3} xl={2} key={name}>
      <CIcon icon={value} size="xxl" />
      <div>{toKebabCase(name)}</div>
    </CCol>
  ))
}

const CoreUIIcons = () => {
  const [status, setStatus] = useState(act)
  const [mid, setMid] = useState(true)

  function getColor(status) {
    if (status) {
      return 'success'
    } else {
      return 'dark'
    }
  }

  function getIcon(status) {
    if (status) {
      return cilCheckCircle
    } else {
      return cilXCircle
    }
  }

  function keepStatus(parentIndex, index) {
    status.actions[parentIndex].actionContext[index].completed =
      !status.actions[parentIndex].actionContext[index].completed
    setStatus(act)
    setMid(!mid)
  }

  return (
    <div id={mid}>
      {status.actions.map((item, actParent) => (
        <CCard className="mb-4" v-for="item in tableItems" key={actParent}>
          <CCardHeader>
            <strong>{item.actionName}</strong>
          </CCardHeader>
          <CCardBody>
            {item.actionContext.map((item, index) => (
              <div v-for="item in tableItems" key={index}>
                <CAlert
                  id={item.id}
                  color={getColor(item.completed)}
                  variant="solid"
                  className="d-flex align-items-center"
                  onClick={() => {
                    keepStatus(actParent, index)
                  }}
                >
                  <CIcon
                    icon={getIcon(item.completed)}
                    className="flex-shrink-0 me-2"
                    width={24}
                    height={24}
                  />
                  <div>{item.description}</div>
                </CAlert>
              </div>
            ))}
          </CCardBody>
        </CCard>
      ))}
    </div>
  )
}

export default CoreUIIcons
