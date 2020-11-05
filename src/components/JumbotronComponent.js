import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Container, Jumbotron } from 'reactstrap';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    title: state.users.title
  }
}

const JumbrotronComponent = (props) => {
  return (
    <div>
      <Jumbotron style={{backgroundColor: "#d2691e"}}> 
        <Container>
        <h1 className="display-3" style={{color: "#FFFFFF"}}>{props.title}</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typo graphy and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="dark"><FontAwesomeIcon icon={faInfo} /> Belajar disini</Button>
        </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default connect(mapStateToProps, null)(JumbrotronComponent)


