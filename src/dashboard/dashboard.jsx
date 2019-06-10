import React, { Component } from 'react';

import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';

const modelo = 'Teste';
class Dashboard extends Component {
	render() {
		return (
			<div>
				<ContentHeader title='Dashboard' small='Versão 1.0' />
				<Content>Dashboard {modelo}</Content>
			</div>
		);
	}
}

export default Dashboard;
