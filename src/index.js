import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import 'semantic-ui-less/semantic.less'
import App from './App';

const userID = 'user' + Math.floor(Math.random() * 1000);

webengage.onReady(function () {
	webengage.user.setAttribute('we_email', userID + '@email.com');
	webengage.user.setAttribute('we_birth_date', '1998-02-14');
	webengage.user.setAttribute('we_phone', '+917509309539');
	webengage.user.setAttribute('we_gender', 'male');
	webengage.user.setAttribute('we_first_name', 'John' + Math.floor(Math.random() * 1000));
	webengage.user.setAttribute('we_last_name', 'Doe' + Math.floor(Math.random() * 1000));
	webengage.user.setAttribute('we_company', 'swanishan');
	webengage.user.setAttribute('we_email_opt_in', true); //Email
	webengage.user.setAttribute('we_sms_opt_in', true); //SMS
	webengage.user.setAttribute('we_whatsapp_opt_in', true);
	
	webengage.user.login(userID);
});

window.addEventListener('beforeunload', function (event) {
    webengage.user.logout();
	
    event.preventDefault();
    event.returnValue = ''; // Most browsers will display a default dialog
});

const root = document.getElementById('root');
render(
	<Router>
		<App />
	</Router>
	, root);
