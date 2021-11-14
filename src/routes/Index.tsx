import { Route, Switch } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Surf } from '../pages/Surf';
import { Surfer } from '../pages/Surfer';

export const Routes = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-12">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/surf" component={Surf} />
						<Route exact path="/surf/:surferId" component={Surfer} />
					</Switch>
				</div>
			</div>
		</div>
	);
};
