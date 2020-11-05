import { faEdit, faInfo, faTrash, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import { Link } from "react-router-dom";
import { Button, Container, Row, Col, Spinner } from 'reactstrap';
import { connect } from 'react-redux'
import swal from 'sweetalert';
import { deleteUser } from '../actions/userAction';

const { SearchBar } = Search;

const handlelClick = (dispatch, id) => {
  console.log('Delete dengan :', id);
  swal({
    title: "Apakah anda yakin akan menghapus data ini?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {

    if (willDelete) {
      dispatch(deleteUser(id))

      swal("Data User Sukses dihapus", {
        icon: "success",
      });
    } else {
      swal("Data gagal dihapus");
    }
  });
}



const defaultSorted = [{
  dataField: 'id',
  order: 'asc'
},
];

const mapStateToProps = (state) => {
  return {
    getUsersList: state.users.getUsersList,
    errorUsersList: state.users.errorUsersList
  }
}

const TableComponent = (props) => {
  const columns = [{
    dataField: 'id',
    text: 'ID',
    sort: true,
    headerStyle: () => {
      return { width: "5%" }
    }
  },
  {
    dataField: 'nama',
    text: 'Name',
    sort: true
  },
  {
    dataField: 'alamat',
    text: 'Alamat',
    sort: true
  },
  {
    dataField: "link",
    text: "Action",
    formatter: (rowContent, row) => {
      return (
        <div>
          <Link to={"detail/" + row.id}>
            <Button color="dark" className="mr-2">
              <FontAwesomeIcon icon={faInfo} /> Detail
              </Button>
          </Link>
          <Link to={"edit/" + row.id}>
            <Button color="dark" className="mr-2">
              <FontAwesomeIcon icon={faEdit} /> Edit
              </Button>
          </Link>
          <Link>
            <Button color="dark" className="mr-2" onClick={()=> handlelClick(props.dispatch, row.id)}>
              <FontAwesomeIcon icon={faTrash} /> Delete
                </Button>
          </Link>
        </div>
      );
    },
  }
  ];
  return (
    <div>
      
      <Container>
      { props.getUsersList ?
      <ToolkitProvider
      bootstrap4
      keyField='id'
      data={props.getUsersList}
      columns={columns}
      defaultSorted={defaultSorted}
      search
    >
      {(props) => (

        <div>
          <Row>
            <Col>
              <Link to={"/create"}>
                <Button color="dark" className="mr-2">
                  <FontAwesomeIcon icon={faUserPlus} /> Create User
                  </Button>
              </Link>
            </Col>
            <Col>
              <div className="float-right">
                <SearchBar {...props.searchProps} placeholder="Cari mas..." />
              </div>
            </Col>
          </Row>

          <BootstrapTable
            {...props.baseProps}
            pagination={paginationFactory()}
          />
        </div>
      )
      }
    </ToolkitProvider> : 
    (
      <div className="text-center">
        { props.errorUsersList ? 
        <h1>{props.errorUsersList}</h1> : 
        <Spinner color="dark" />
        }
        
      </div>
    )  }
        
      </Container>

    </div>
  )
}

export default connect(mapStateToProps, null)(TableComponent);

