import React from 'react'
import { Container, Section } from 'react-bulma-components'
import { useLocation } from 'react-router-dom'


const SectionWrapper = (props) => {
  return(
    <Section>
      <Container className={useLocation().pathname == '/'? null : 'container-left'}>
        {props.children}
      </Container>
    </Section>
  );
}

export default SectionWrapper;