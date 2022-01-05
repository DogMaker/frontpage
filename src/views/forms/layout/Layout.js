import React, { useState } from 'react'
import Range from '../range/Range'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CRow,
  CTable,
  CTableHead,
  CTableHeaderCell,
  CTableBody,
  CTableRow,
  CTableDataCell,
  CProgress,
  CAvatar,
  CModalFooter,
  CModalBody,
  CModalTitle,
  CModalHeader,
  CButtonGroup,
  CModal,
  CCardText,
  CCardTitle,
} from '@coreui/react'
import search from '../../../mock/searchById.js'
import portuguese from '../../../translations/portuguese.js'
import avatar2 from 'src/assets/images/avatars/1.jpg'
import Rating from '@material-ui/lab/Rating'
import ApiMercadoPago from './apiMercadoPago.js'
import preferences from './preferences.js'

const Layout = () => {
  const [visible, setVisible] = useState(false)

  return (
    <CRow>
      <CCard className="mb-4">
        <CCardBody>
          <div className="fs-3 fw-semibold">
            <CAvatar size="xl" src={avatar2} status="success" />
            {search.completeName}
          </div>
          <br />
          <a href={search.linkedin}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-linkedin"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
          </a>
          <br />
          <div className="fs-6 fw-semibold">{portuguese.searchPage.description}</div>
          <p className="text-medium-emphasis small">{search.description}</p>
          <CTable align="middle" className="mb-0 border" hover responsive>
            <CTableHead color="light">
              <CTableRow>
                <CTableHeaderCell>{portuguese.registrySkillPage.skills}</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {search.knowledge.skills.map((item, index) => (
                <CTableRow v-for="item in tableItems" key={index}>
                  <CTableDataCell>
                    <div className="clearfix">
                      <div className="float-start">
                        <strong>{item.skill}</strong>
                      </div>
                      <div className="float-end">
                        <small className="text-medium-emphasis">{item.level}</small>
                      </div>
                    </div>
                    <CProgress thin color={item.color} value={item.level} />
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
      <CCard className="mb-4">
        <CCardBody>
          <div className="fs-3 fw-semibold">{portuguese.personalPage.class}</div>
          <br />
          <div className="display-inline-flags">
            <button type="button" className="btn btn-light rounded-pill" disable>
              {portuguese.personalPage.priceForUnity}{' '}
              <strong>{portuguese.currency + search.prices.valuePerMentoring}</strong>
            </button>
            <ApiMercadoPago />
          </div>
        </CCardBody>
        <CCardBody>
          <div className="fs-4 fw-semibold">{portuguese.personalPage.packages}</div>
        </CCardBody>
        <CCardBody>
          <CRow>
            {search.prices.mentoringPackages.map((item, index) => (
              <CCol lg={4} key={index}>
                <CCard textColor="dark" className={`mb-3 border-dark`}>
                  <CCardHeader>
                    <strong>{item.name}</strong>
                  </CCardHeader>
                  <CCardBody>
                    <CCardTitle>
                      {item.numberOfMentories + ' ' + portuguese.generics.classes}
                    </CCardTitle>
                    <CCardText>{item.description}</CCardText>
                    <CButton color="btn btn-primary rounded-pill">
                      <strong>
                        {portuguese.generics.buy +
                          '  ' +
                          portuguese.currency +
                          ' ' +
                          item.totalPrice}
                      </strong>
                    </CButton>
                  </CCardBody>
                </CCard>
              </CCol>
            ))}
          </CRow>
        </CCardBody>
      </CCard>
      <CCard className="mb-4">
        <CCardBody>
          <div className="fs-3 fw-semibold">{portuguese.personalPage.callendar}</div>
          <br />
          <Range />
          <div className="callendarButton">
            <button type="button" className="btn btn-outline-danger">
              {portuguese.personalPage.checkAvailability}
            </button>
          </div>
        </CCardBody>
      </CCard>
      <CCard className="mb-4">
        <CCardBody>
          <div className="fs-3 fw-semibold">
            {portuguese.personalPage.reviews}
            <Rating name="size-medium" defaultValue={search.rattings} />
          </div>
          <br />
          {search.rate.map((item, index) => (
            <CCard className="mb-4" v-for="item in tableItems" key={index}>
              <CCardBody>
                <div className="fs-6 fw-semibold">
                  <CAvatar size="md" src={avatar2} status="success" />
                  {item.name}
                </div>
                <br />
                <p className="text-medium-emphasis small">{item.description}</p>
                <p className="text-medium-emphasis small">{item.date}</p>
              </CCardBody>
            </CCard>
          ))}
        </CCardBody>
      </CCard>
    </CRow>
  )
}

export default Layout
