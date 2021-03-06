import React, { useState } from 'react'
import CIcon from '@coreui/icons-react'
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CTableRow,
  CAvatar,
  CTable,
  CTableHead,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CProgress,
} from '@coreui/react'
import portuguese from '../../../translations/portuguese.js'
import search from '../../../mock/search.js'
import options from '../../../mock/habilities.js'
import avatar2 from 'src/assets/images/avatars/1.jpg'
import Rating from '@material-ui/lab/Rating'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

const animatedComponents = makeAnimated()

const Validation = () => {
  const [selectedOptions, setSelectedOptions] = useState([])

  const handleChange = (options) => {
    setSelectedOptions(Array.isArray(options) ? options.map((x) => x.value) : [])
  }

  function filterViaSkills(arr, selected) {
    return arr.filter((obj) =>
      selected.every((selected) =>
        obj.knowledge.skills.some((obj) => obj.skill.includes(selected)),
      ),
    )
  }

  let mentors = filterViaSkills(search, selectedOptions)

  return (
    <>
      <Select
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        value={options.filter((obj) => selectedOptions.includes(obj.value))}
        options={options}
        placeholder={portuguese.searchPage.tagsInputs}
        onChange={handleChange}
      />
      {selectedOptions && (
        <div style={{ marginTop: 20, lineHeight: '25px' }}>
          <div>
            <b>Tags : </b> {JSON.stringify(selectedOptions, null, 2)}
          </div>
        </div>
      )}
      <br />
      <CRow>
        <CCol xs>
          {mentors.map((item, index) => (
            <CCard className="mb-4" v-for="item in tableItems" key={index}>
              <CCardBody>
                <div className="fs-3 fw-semibold">
                  <CAvatar size="xl" src={avatar2} status="success" />
                  {item.completeName}
                </div>
                <br />
                <CRow>
                  <div className="small text-medium-emphasis">
                    <Rating name="size-medium" defaultValue={item.rattings} />
                    <div className="fs-5 fw-semibold">
                      {portuguese.registrySkillPage.languages + ': '}
                      <div className="display-inline-flags">
                        {item.knowledge.languages.map((item, index) => (
                          <div className="flags" v-for="item in tableItems" key={index}>
                            <CIcon size="xl" icon={item.flag} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <CCol xs={12} md={6} xl={6}>
                    <CRow>
                      <CCol sm={8}>
                        <div className="border-start border-start-0 border-start-info py-1 px-3">
                          <div className="text-medium-emphasis small">
                            {portuguese.searchPage.description}
                          </div>
                          <div className="text-medium-emphasis medium">{item.description}</div>
                        </div>
                      </CCol>
                      <CCol sm={4}>
                        <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                          <div className="text-medium-emphasis small">
                            {portuguese.searchPage.price}
                          </div>
                          <div className="fs-3 fw-semibold">R$ {item.prices.valuePerMentoring}</div>
                        </div>
                      </CCol>
                    </CRow>
                  </CCol>

                  <CCol xs={12} md={6} xl={6}>
                    <CRow>
                      <CCol sm={12}>
                        <div className="border-start border-start-0 border-start-warning py-1 px-3 mb-3">
                          <CTable align="middle" className="mb-0 border" hover responsive>
                            <CTableHead color="light">
                              <CTableRow>
                                <CTableHeaderCell>
                                  {portuguese.registrySkillPage.skills}
                                </CTableHeaderCell>
                              </CTableRow>
                            </CTableHead>
                            <CTableBody>
                              {item.knowledge.skills.map((item, index) => (
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
                        </div>
                      </CCol>
                    </CRow>
                  </CCol>
                </CRow>
              </CCardBody>
              <a href="#/forms/mentor-description" className="btn btn-dark">
                <strong>{portuguese.searchPage.book}</strong>
              </a>
            </CCard>
          ))}
        </CCol>
      </CRow>
    </>
  )
}

export default Validation
