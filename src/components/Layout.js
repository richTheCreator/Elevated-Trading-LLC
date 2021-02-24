import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'
import { useStaticQuery, graphql } from 'gatsby'
import Footer from '../components/Footer'
import { Button } from '../components'
import Navbar from '../components/Navbar'
import SEO from '../components/SEO/SEO'
import useSiteMetadata from './SiteMetadata'

// test

const TemplateWrapper = ({ children }) => {
  const {
    markdownRemark: {
      frontmatter: { footer }
    }
  } = useStaticQuery(query)

  const { menuLinks } = useSiteMetadata()
  const [open, setOpen] = useState()
  const [verified, setVerify] = useState()

  useEffect(() => {
    const checkVerify = localStorage.getItem('age_verified')

    if (!checkVerify) {
      // open Modal
      setOpen(true)
    }
  }, [])

  const verifiedAge = (bool) => {
    if (bool) {
      localStorage.setItem('age_verified', true)
      setOpen(false)
    } else {
      window.location.href = 'http://www.google.com'
    }
  }

  return (
    <div>
      <Modal
        open={open}
        closeOnOverlayClick={false}
        closeOnEsc={false}
        showCloseIcon={false}
        focusTrapped={false}
        onClose={() => setOpen(false)}
        center
        classNames={{
          overlay: 'customOverlay',
          modal: 'customModal'
        }}
      >
        <p>Are you 21 years of age or older?</p>
        <Button
          width={'100%'}
          bg={'black'}
          color={'white'}
          onClick={() => verifiedAge(true)}
        >
          {' '}
          Yes{' '}
        </Button>
        <Button
          width={'100%'}
          bg={'white'}
          color={'black'}
          onClick={() => verifiedAge(false)}
        >
          {' '}
          No{' '}
        </Button>
      </Modal>
      <Navbar menuLinks={menuLinks} />
      <div style={{ paddingTop: '119px' }}>{children}</div>
      <Footer footer={footer} />
    </div>
  )
}

export default TemplateWrapper

const query = graphql`
  query global {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        footer {
          legal
          blurb
        }
      }
    }
  }
`
