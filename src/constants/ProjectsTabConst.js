import octoLogo from './../images/Octocat.png'
import garminLogo from './../images/garmin.png'
import chromeLogo from './../images/chrome-store.png'
import findsourceslogo from './../images/findsources.svg'
import pypilogo from './../images/pypi-logo.svg'


export const projectsState = {
	"tabName": 'Projects',
	"projects": [
		{
			"projectTitle": 'Valid arguments',
			"projectLabels": [
				'Python', 'PyPI',
			],
			"projectDesc": [
				'A function decorator that is using the `inspect` library to validate arguments passed in the decorated function.',
				'It allows writing complex and re-usable argument validation rules injected directly in the function signature.',
				'The validation is not based on type annotations, which allows to go beyond the basic type validations.',
			],
			"projectTech": [
				{
					"category": 'Backend',
					"text": 'Python3'
				}
			],
			"projectLogos": [
				{
					"src": octoLogo,
					"href": 'https://github.com/kolitiri/validargs',
					"cls": 'pr-octo-logo'
				},
				{
					"src": pypilogo,
					"href": 'https://pypi.org/project/validargs/',
					"cls": 'pr-pypi-logo'
				}
			],
			"tabOpen": true
		},
		{
			"projectTitle": 'Garmin DualTime watch face',
			"projectLabels": [
				'Monkey-C'
			],
			"projectDesc": [
				'This is a Garmin watch face, written in Monkey-C that displays the time in two different timezones.'
			],
			"projectTech": [
				{
					"category": 'Backend',
					"text": 'Monkey C (Garmin Connect IQ language)'
				}
			],
			"projectAckn": 'This application is Powered by TfL Open Data and contains OS data © Crown copyright and database rights 2016',
			"projectLinks": [
				{
					"title": 'TFL Unified API',
					"href": 'https://api.tfl.gov.uk/'
				},
			],
			"projectLogos": [
				{
					"src": octoLogo,
					"href": 'https://github.com/kolitiri/garmin-DualTime-app',
					"cls": 'pr-octo-logo'
				},
				{
					"src": garminLogo,
					"href": 'https://apps.garmin.com/en-US/apps/a5ce0cb3-4a0e-4855-922e-69ed36fcf560',
					"cls": 'pr-garmin-logo'
				}
			],
			"tabOpen": true
		},
		{
			"projectTitle": 'Context logger',
			"projectLabels": [
				'Python', 'PyPI',
			],
			"projectDesc": [
				'A simple logger that uses python\'s standard contextvars library to inject contextual details in your logs.',
				'Works nicely with web application frameworks such as Flask and FastApi or any asyncio application.',
				'It also supports structured logging format, for those who want to go deeper into log filtering and generation of analytics.',
			],
			"projectTech": [
				{
					"category": 'Backend',
					"text": 'Python3'
				}
			],
			"projectLogos": [
				{
					"src": octoLogo,
					"href": 'https://github.com/kolitiri/contextlogger',
					"cls": 'pr-octo-logo'
				},
				{
					"src": pypilogo,
					"href": 'https://pypi.org/project/contextlogger/',
					"cls": 'pr-pypi-logo'
				}
			],
			"tabOpen": true
		},
		{
			"projectTitle": 'fastapi-oidc-react',
			"projectLabels": [
				'FastApi',
				'ReactJS',
				'MongoDb',
				'OpenIdConnect'
			],
			"projectDesc": [
				'A sample project to get started with custom user authentication using the FARM stack. ' +
				'(FastApi, ReactJS, MongoDB)',
				'The project is pre-configured to use the OIDC Authorization Code Flow to sign in with Google and Azure.',
			],
			"projectTech": [
				{
					"category": 'Front End',
					"text": 'ReactJS, OpenIdConnect'
				},
				{
					"category": 'Backend',
					"text": 'FastApi'
				},
				{
					"category": 'Databases',
					"text": 'MongoDB'
				}
			],
			"projectLogos": [
				{
					"src": octoLogo,
					"href": 'https://github.com/kolitiri/fastapi-oidc-react',
					"cls": 'pr-octo-logo'
				}
			],
			"tabOpen": true
		},
		{
			"projectTitle": 'asyncio-kafka-grpc',
			"projectLabels": [
				'Python', 'PyPI',
			],
			"projectDesc": [
				'A sample project to get started with Kafka producers/consumers and Google Protocol Buffers (Protobuf)'
			],
			"projectTech": [
				{
					"category": 'Backend',
					"text": 'Python3, Kafka, Google Protobuf'
				}
			],
			"projectLogos": [
				{
					"src": octoLogo,
					"href": 'https://github.com/kolitiri/asyncio-kafka-grpc',
					"cls": 'pr-octo-logo'
				}
			],
			"tabOpen": true
		},
		{
			"projectTitle": 'Reference Manager',
			"projectLabels": [
				'ReactJS',
				'ReactiveSearch',
				'FastApi',
				'ElasticSearch',
				'MongoDb'
			],
			"projectDesc": [
				'This project is a reference management system powered by elasticsearch.',
				'It is a set of microservices that allow references to be inserted into the system and then be made searchable with elastic search.',
				'It was used to power findsources.co.uk, which was a search engine for books, based on content references.',
				'Users were able to register as authors and create their own book references. The search results were ' +
				'based on such references rather than the actual content of the books.',
				'After almost 1.5 years, I decided to take the website down, due to lack of time to generate enough content ' +
				'to attract users and also the high maintenance fees in Digital Ocean\'s Kubernetes cluster.'	
			],
			"projectTech": [
				{
					"category": 'Front End',
					"text": 'ReactJS, ReactiveSearch, OpenIdConnect'
				},
				{
					"category": 'Backend',
					"text": 'FastApi, Monstache'
				},
				{
					"category": 'Databases',
					"text": 'MongoDB, ElasticSearch'
				},
				{
					"category": 'Other',
					"text": 'Kubernetes, Digital Ocean, Sentry, Github Actions'
				}
			],
			"projectLogos": [
				{
					"src": octoLogo,
					"href": 'https://github.com/kolitiri/reference-manager',
					"cls": 'pr-octo-logo'
				}
			],
			"tabOpen": true
		},
		{
			"projectTitle": 'Kolitiri Bookmarks',
			"projectLabels": [
				'ReactJS',
				'React Bootstrap',
				'Chrome Extensions API'
			],
			"projectDesc": [
				'This is a chrome extension for managing bookmarks.',
				'It offers a number of options such as, adding bookmarks and organizing them in folders, ' +
				'importing bookmarks from the chrome bar and importing/exporting bookmarks from/to a .json file.',
				'Additionally, it features a dark-mode option for who those don\'t feel like looking on the bright side!'
			],
			"projectTech": [
				{
					"category": 'Front End',
					"text": 'ReactJS, React Bootstrap, Chrome Extensions API'
				},
			],
			"projectLogos": [
				{
					"src": octoLogo,
					"href": 'https://github.com/kolitiri/bookmarks-chrome-extension',
					"cls": 'pr-octo-logo'
				},
				{
					"src": chromeLogo,
					"href": 'https://chrome.google.com/webstore/detail/kolitiri-bookmarks/hfnmppffaaifkdapbbnjlbeeefjdhjdm',
					"cls": 'pr-chrome-logo'
				}
			],
			"tabOpen": true
		},
		{
			"projectTitle": 'Garmin MyBus app',
			"projectLabels": [
				'Monkey-C'
			],
			"projectDesc": [
				'This is a Garmin watch application that helps you keep track of the bus arrivals on your nearest bus stops.',
				'It currently works only for London as it makes use of the TFL\'s unified API. The application is using the ' +
				 'internal GPS of the watch to pick up your current location and work out the expected arrivals of the buses ' +
				 'in your nearest stops.',
				'The application is written in MonkeyC which is a OO programming language used by the majority of Garmin devices.',
				'It is accompanied by a Python service responsible for filtering TFL responses and downsizing huge chunks of data ' +
				'that cannot be handled by the limited resources of most of the devices.',
				'NOTE: This app is now taken down from the Garmin connect IQ store.'
			],
			"projectTech": [
				{
					"category": 'Backend',
					"text": 'Monkey C (Garmin Connect IQ language)'
				},
				{
					"category": 'APIs',
					"text": 'TFL\'s Unified API'
				},
			],
			"projectAckn": 'This application is Powered by TfL Open Data and contains OS data © Crown copyright and database rights 2016',
			"projectLinks": [
				{
					"title": 'TFL Unified API',
					"href": 'https://api.tfl.gov.uk/'
				},
			],
			"projectLogos": [
				{
					"src": octoLogo,
					"href": 'https://github.com/kolitiri/garmin-myBus-app',
					"cls": 'pr-octo-logo'
				},
				{
					"src": garminLogo,
					"cls": 'pr-garmin-logo'
				}
			],
			"tabOpen": true
		},
		{
			"projectTitle": 'MyBus Web Service',
			"projectLabels": [
				'Python',
				'aiohttp'
			],
			"projectDesc": [
				'This is an updated version of the MyBus web service that was initially designed using Flask.',
				'Flask has now been replaced with aiohttp.',
				'This is a web service hosted on heroku that was created to support the MyBus Garmin watch app.',
				'It acts as a proxy service between the watch and TFL\'s endpoints. Requests from the Garmin app go ' +
				 'through this service and their responses are filtered before they are redirected back to the watch app.'
			],
			"projectTech": [
				{
					"category": 'Web framework',
					"text": 'aiohttp (3.5.4)'
				},
				{
					"category": 'Backend',
					"text": 'Python (3.7.2)'
				},
			],
			"projectAckn": 'This application is Powered by TfL Open Data and contains OS data © Crown copyright and database rights 2016',
			"projectLinks": [
				{
					"title": 'MyBus Garmin app',
					"href": 'https://github.com/kolitiri/garmin-myBus-app'
				},
				{
					"title": 'MyBus Web Service (original Flask implementation)',
					"href": 'https://github.com/kolitiri/myBus-web-service'
				},
			],
			"projectLogos": [
				{
					"src": octoLogo,
					"href": 'https://github.com/kolitiri/myBus-web-service-async',
					"cls": 'pr-octo-logo'
				},
			],
			"tabOpen": true
		}
	]
};
