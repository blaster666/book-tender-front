import React from 'react'
import connect from '../utils/withRedux'
import styled from 'styled-components';

class Create extends React.Component {
  render() {
    return (
			<CreatePage>Create</CreatePage>
		)
  }
}

const CreatePage = styled.div`
	margin-top: 55px;
	font-size: 300px;

`
export default connect(null,null)(Create)