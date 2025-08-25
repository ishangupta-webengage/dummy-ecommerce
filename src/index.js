import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import 'semantic-ui-less/semantic.less'
import App from './App';

                                    var webengage;!function(w,e,b,n,g){function o(e,t){e[t[t.length-1]]=function(){r.__queue.push([t.join("."),
                                    arguments])}}var i,s,r=w[b],z=" ",l="init options track screen onReady".split(z),a="webPersonalization feedback survey notification notificationInbox".split(z),c="options render clear abort".split(z),p="Prepare Render Open Close Submit Complete View Click".split(z),u="identify login logout setAttribute".split(z);if(!r||!r.__v){for(w[b]=r={__queue:[],__v:"6.0",user:{}},i=0;i < l.length;i++)o(r,[l[i]]);for(i=0;i < a.length;i++){for(r[a[i]]={},s=0;s < c.length;s++)o(r[a[i]],[a[i],c[s]]);for(s=0;s < p.length;s++)o(r[a[i]],[a[i],"on"+p[s]])}for(i=0;i < u.length;i++)o(r.user,["user",u[i]]);setTimeout(function(){var f=e.createElement("script"),d=e.getElementById("_webengage_script_tag");f.type="text/javascript",f.async=!0,f.src=("https:"==e.location.protocol?"https://ssl.widgets.webengage.com":"http://cdn.widgets.webengage.com")+"/js/webengage-min-v-6.0.js",d.parentNode.insertBefore(f,d)})}}(window,document,"webengage");webengage.init("~47b65002");

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
