var residents = [
	{
		name: 'Kathleen Esfahany',
		nick: 'kaes',
		photo: 'assets/images/kathleenesfahany.jpg',
		fhs: 'empty',
		year: '2022',
		major: '6-7 and 14-2',
		hometown: 'Long Island, NY',
		quote: 'Lorem ipsum dolor sit amet',
		bio: 'debate&nbsp;me! (ง &bull;̀_&bull;&#769;)ง'
	},
	{
		name: 'Alyssa',
		nick: 'aspencer',
		photo: 'assets/images/alyssaspencer.jpg',
		fhs: 'empty',
		year: '2022',
		major: 'X',
		hometown: 'Las Vegas, NV',
		quote: 'Lorem ipsum dolor sit amet',
		bio: 'is&nbsp;anyone there? oh- hi! sometimes you gotta enjoy the finer things in&nbsp;life. looking at&nbsp;the clouds, listening to&nbsp;porter robinson, trying to&nbsp;make rice without burning&nbsp;it, and playing hundreds of&nbsp;hours of&nbsp;video games. sometimes i&nbsp;ask myself why im&nbsp;here, then i&nbsp;remember that i&nbsp;need a&nbsp;degree. follow me&nbsp;on&nbsp;twitter @specerencer'
	},
	{ //Это массив с резидентами, сюда пихаешь инфу о людях
		name: 'Eric Luu', //Тут понятно, что имя
		nick: 'ericluu', //Ник (видел это у какого-то другого сообщества)
		photo: 'assets/images/ericluu.jpg', //Фото (лучше квадратиком)
		fhs: 'empty', //Это твой FireHazardStatus
		year: '2019', //Тоже понятно
		major: '6-3', //Тоже
		hometown: 'NYC, NY', //ТОЖЕ
		quote: 'Lorem ipsum dolor sit amet', //Цитатка
		bio: 'Catch me in the MacGregor gym blasting kpop. Aspiring Ike main in Smash Bros. Ultimate.' //Немного о себе
	},
	{
		name: 'Udo Eze',
		nick: 'udoeze',
		photo: 'assets/images/udoeze.jpg',
		fhs: 'empty',
		year: '2022',
		major: '3 and 8',
		hometown: 'Atlanta, GA',
		quote: 'Lorem ipsum dolor sit amet',
		bio: 'I like beavers.'
	},
	{
		name: 'Daniel Alfonsetti',
		nick: 'alfonset',
		photo: 'assets/images/sardine.jpg',
		fhs: 'empty',
		year: '2021',
		major: '6-3',
		hometown: 'Auburn, ME',
		quote: 'Lorem ipsum dolor sit amet',
		bio: 'Hi! Long ago my&nbsp;parents bestowed the name of&nbsp;Daniel Alfonsetti upon&nbsp;me. Some people say&nbsp;I have weird eating habits, but&nbsp;I think they are just uncultured. I&nbsp;enjoy trying new activities, particularly outdoors ones. My&nbsp;hobbies include playing strategy video games, trying to&nbsp;ice skate, and financially planning about how I&rsquo;m going to&nbsp;retire at&nbsp;40. Academically, I&rsquo;m interested in&nbsp;statistics.'
	},
	{
		name: 'Janice Tjan',
		nick: 'jtjan',
		photo: 'assets/images/janicetjan.jpg',
		fhs: 'empty',
		year: '2022',
		major: '2-A Biomech/CIR',
		hometown: 'Queens, NY',
		quote: 'Lorem ipsum dolor sit amet',
		bio: 'Sup. I&rsquo;m a&nbsp;New Yorker who complains about Boston, but deep down loves it&nbsp;anyways because MIT makes it&nbsp;all worth&nbsp;it. I&rsquo;m consistent... ly&nbsp;binge-watching, cooking, eating, crafting, dancin&rsquo;, sarcasm-ing, walking about, drawing, koala-researching, ... and procrastinating my&nbsp;next pset. @Mom&nbsp;&mdash; I&rsquo;m still passing my&nbsp;classes, dw.'
	},
	{
		name: '&quot;ya boy&quot;',
		nick: 'alcheng',
		photo: 'assets/images/anthonycheng.jpg',
		fhs: 'empty',
		year: '2020',
		major: '3A',
		hometown: 'Salt Lake City, UT',
		quote: 'Lorem ipsum dolor sit amet',
		bio: '<a href="https://s.tcdn.co/2ec/a5e/2eca5ee1-5f37-3e6d-b7c4-3783ee00f8c5/1.png">click me</a>'
	},
	{
		name: 'Brian Xie',
		nick: 'brianxie',
		photo: 'assets/images/brianxie.jpg',
		fhs: 'empty',
		year: '2020',
		major: '6-3',
		hometown: 'San Franciso Bay Area, CA',
		quote: 'Lorem ipsum dolor sit amet',
		bio: 'Hi! I&rsquo;m currently a&nbsp;junior, and I&rsquo;ve stayed in&nbsp;H entry since my&nbsp;freshman year. I&nbsp;really enjoy cooking and visiting restaurants. I&rsquo;m also heavily involved with the MIT Poker Club. In&nbsp;my&nbsp;free time&nbsp;I like to&nbsp;explore cities, drive, and play a&nbsp;variety of&nbsp;card, strategy, and rhythm games like DDR, chess, and of&nbsp;course, poker.'
	},
	{
		name: 'Tanya',
		nick: 'tetiana',
		photo: 'assets/images/tetianahusak.jpg',
		fhs: 'empty',
		year: '2021',
		major: '7',
		hometown: 'Kyiv, Ukraine',
		quote: 'Lorem ipsum dolor sit amet',
		bio: 'Like hiking (I&nbsp;do not have a&nbsp;car and there is&nbsp;no&nbsp;public transportation to&nbsp;White mountains so&nbsp;it&rsquo;s hard for me&nbsp;to&nbsp;get there.&nbsp;if&nbsp;you are going there and want to&nbsp;share money for gas with someone you can email&nbsp;me). Interested in&nbsp;field biology (it&rsquo;s not popular in&nbsp;MIT so&nbsp;I&nbsp;am looking for summer field opportunities). Do&nbsp;sport orienteering (see &quot;New England orienteering club if&nbsp;you want to&nbsp;try). Have 4&nbsp;month old sister.'
	},
	{
		name: 'Julian DuBransky',
		nick: 'jdubrans',
		photo: 'assets/images/juliandubransky.jpg',
		fhs: 'empty',
		year: '2021',
		major: '1E, 17 Minor',
		hometown: 'Montclair, CA',
		quote: 'Lorem ipsum dolor sit amet',
		bio: 'Sometimes, when&nbsp;I wake up&nbsp;in&nbsp;the morning, it&rsquo;s in&nbsp;a&nbsp;different dimension. In&nbsp;the past, I&nbsp;often had to&nbsp;find my&nbsp;way back through trial and error. Now I&rsquo;ve made friends with all the denizens of&nbsp;the 4th dimension, and I&rsquo;m meeting some people from the 5th now. I&nbsp;also play too many video games.'
	},
	{
		name: 'Sophia Zhi',
		nick: 'szhi',
		photo: 'assets/images/sophiazhi.jpg',
		fhs: 'empty',
		year: '2022',
		major: '18C',
		hometown: 'Seattle, WA',
		quote: 'Lorem ipsum dolor sit amet',
		bio: 'I&rsquo;m a&nbsp;resident of&nbsp;H entry'
	},
	{
		name: 'Tiffany Chen',
		nick: 'tiffc',
		photo: 'assets/images/tiffanchen.jpg',
		fhs: 'empty',
		year: '2022',
		major: '6-3',
		hometown: 'NYC, NY',
		quote: 'Lorem ipsum dolor sit amet',
		bio: 'If&nbsp;anyone would like to&nbsp;fund a&nbsp;blind bubble tea tasting quiz, please let me&nbsp;know. Not joking. :P'
	},
	{
		name: 'Ileana Diaz',
		nick: 'diazi',
		photo: 'assets/images/ileanadiaz.jpg',
		fhs: 'empty',
		year: '2022',
		major: '6-2',
		hometown: 'Victor, NY',
		quote: 'Lorem ipsum dolor sit amet',
		bio: 'Basically all of&nbsp;my&nbsp;hobbies involve music, mostly instruments and theater. I&nbsp;usually listen to&nbsp;alternative and soundtrack music.'
	},
	{
		name: 'Miles Cruice-Barnett',
		nick: 'udoeze',
		photo: 'assets/images/milesbarnet.jpg',
		fhs: 'empty',
		year: '2021',
		major: '2',
		hometown: 'Philadelphia, PA',
		quote: 'Lorem ipsum dolor sit amet',
		bio: 'I&rsquo;d like to&nbsp;dedicate this bio to&nbsp;the memory of&nbsp;Richard Yip'
	},
	{
		name: 'Antonio Berrones',
		nick: 'antoniob',
		photo: 'assets/images/antonioberrones.jpg',
		fhs: 'empty',
		year: '2022',
		major: '6-2',
		hometown: 'North Mankato, MN',
		quote: 'Lorem ipsum dolor sit amet',
		bio: 'I&nbsp;love drawing and running. By&nbsp;the time&nbsp;I graduate&nbsp;I want to&nbsp;have qualified for the Boston Marathon. Also a&nbsp;big fan of&nbsp;movies and recently cooking.'
	},
	{
		name: 'Ceylan',
		nick: 'cceylan',
		photo: 'assets/images/ceylan.jpg',
		fhs: 'empty',
		year: '2022',
		major: 'Undecided (2?)',
		hometown: 'Turkey',
		quote: 'Lorem ipsum dolor sit amet',
		bio: '&rsquo;God is&nbsp;dead,&rsquo; Nick said. &rsquo;They found his carcass in&nbsp;2019. Floating in&nbsp;space near Alpha.&rsquo;'
	},
	{
		name: 'Ashley Chen',
		nick: 'ashley22',
		photo: 'assets/images/ashleychen.jpg',
		fhs: 'empty',
		year: '2022',
		major: 'Undecided',
		hometown: 'Lexington, MA',
		quote: 'Lorem ipsum dolor sit amet',
		bio: 'sleepy'
	},
	{
		name: 'Priscilla Liow',
		nick: 'srfire38',
		photo: 'assets/images/priscillaliow.jpg',
		fhs: 'empty',
		year: '2020',
		major: '5',
		hometown: 'Columbia, MO',
		quote: 'Lorem ipsum dolor sit amet',
		bio: 'EB: so, if&nbsp;you&rsquo;re sure that we&nbsp;are going to&nbsp;fail...what is&nbsp;the point of&nbsp;everything we&rsquo;re doing? <br> TT: Simple. The objective is&nbsp;no&nbsp;longer to&nbsp;win.<br> EB: um...i mean, what are we&nbsp;actually shooting for here? <br> TT: To&nbsp;do&nbsp;as&nbsp;much damage to&nbsp;the game as&nbsp;possible. To&nbsp;rip its stitches and pry answers from the seams. We&nbsp;will snatch purpose from the jaws of&nbsp;futility. Are you ready to&nbsp;wreak some havoc, John?'
	},
	{
		name: 'Mario Lopez',
		nick: 'mlopz',
		photo: 'assets/images/mariolopez.jpg',
		fhs: 'empty',
		year: '2020',
		major: '6-1',
		hometown: 'Holguin, Cuba',
		quote: 'Lorem ipsum dolor sit amet',
		bio: 'Hi&nbsp;friends. I&rsquo;m originally from Cuba but have spent most of&nbsp;my&nbsp;life in&nbsp;Miami, Florida. Outside of&nbsp;classes, you&rsquo;re likely to&nbsp;find me&nbsp;building robots with the MIT Robotics Team or&nbsp;tinkering with radios in&nbsp;the MIT Radio Society&rsquo;s shack on&nbsp;the roof of&nbsp;the Green Building. I&nbsp;love to&nbsp;cook whole pigs in&nbsp;our entry&rsquo;s Caja China and spend long hours sailing in&nbsp;the Charles River (when it&rsquo;s not a&nbsp;giant block of&nbsp;ice). Come find me&nbsp;and we&nbsp;can build something awesome!'
	},
	{
		name: 'Anton Morgunov',
		nick: 'morgunov',
		photo: 'assets/images/512.jpg',
		fhs: 'empty',
		year: '2022',
		major: '5-7',
		hometown: 'Taldykorgan, Kazakhstan',
		quote: 'Lorem ipsum dolor sit amet',
		bio: '&rsquo;I guess Chemistry is&nbsp;just another word for love&rsquo; Scott Thompson. <br><br> Besides, I&rsquo;m also interested (like love to&nbsp;learn something new about&nbsp;it) in&nbsp;physics (mainly quantum, astrophysics and particle physics), photography (well, I&nbsp;sometimes get lucky and make good&nbsp;&mdash; imho&nbsp;&mdash; shots), education (aka trying to&nbsp;improve it&nbsp;in&nbsp;my&nbsp;home country), and probably something else that&nbsp;I forgot about.'
	}
];

var quotes = [	// Массив с цитатами
	"Lorem ipsum dolor sit amet",
	"~here could be your ad~",
	"Consectetur adipisicing elit",
	"Why do I waste my life making web sites?",
	"Just kidding, I like to create sites",
	"WEB is my passion"
]

var traditions = [{
		title: "Julian Cleaning the Kitchen", //Название
		desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis magnam, sunt neque dolor nisi non molestias magni omnis eius ullam quaerat a expedita soluta sit explicabo libero officia, assumenda, quis ab numquam facere commodi deserunt cumque. Inventore totam cum similique, accusantium vero asperiores mollitia ut atque dolor. Deserunt, aut, accusamus.", //Описание
		images: ["https://via.placeholder.com/1280x720", "https://via.placeholder.com/1280x720", "https://via.placeholder.com/1280x720"] //Либо массив с фото, либо одно фото (всё равно в массиве)
	},
	{
		title: "Hexgiving",
		desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis magnam, sunt neque dolor nisi non molestias magni omnis eius ullam quaerat a expedita soluta sit explicabo libero officia, assumenda, quis ab numquam facere commodi deserunt cumque. Inventore totam cum similique, accusantium vero asperiores mollitia ut atque dolor. Deserunt, aut, accusamus.",
		images: ["https://via.placeholder.com/1280x720", "https://via.placeholder.com/1280x720"]
	},
	{
		title: "Lol-making",
		desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis magnam, sunt neque dolor nisi non molestias magni omnis eius ullam quaerat a expedita soluta sit explicabo libero officia, assumenda, quis ab numquam facere commodi deserunt cumque. Inventore totam cum similique, accusantium vero asperiores mollitia ut atque dolor. Deserunt, aut, accusamus.",
		images: ["https://via.placeholder.com/1280x720"]
	}
]

var cookBook = {
	cats: [{
			label: "Fish", // Это для названия 
			key: "fish" // Это для сортировки (этот кей ты будешь юзать добавляя как тип блюда)
		},
		{
			label: "Alfonsetti Chef",
			key: "alfonsetti"
		},
		{
			label: "Main Dishes",
			key: "main"
		},
		// И да, ты можешь добавить/изменить эти категории
		/*
		 *{
		 *	label: "Антон",
		 *	key: "хаха"
		 *}
		 */
	],
	dishes: [{
			label: "Baked Salmon",
			cat: "fish", //Заюзал кей
			img: "assets/images/dishes/salmoncheng.jpg",
			desc: `
				<h2>Description</h2>
					<p>Author: Anthony Cheng</p>
				<h2>Ingredients</h2>
				<ul>
    				<li> 1 lb Salmon Fillet (1 in max thickness) </li>
    				<li> Salt </li>
    				<li> Pepper </li>
				</ul>
   				<h2>Method</h2>
        		<ol>
        			<li>Preheat the oven (or toaster oven) to 450ºF.</li>
					<li>Lay salmon on aluminum foil, and foil on baking sheet.</li>
					<li>Sprinkle salt and pepper, as desired, on salmon fillet.</li>
					<li>Cook for 12 to 15 minutes (depending on thickness of salmon). Salmon should flake when gently scraped with a fork.</li>
					<li>Pair with a simple salad, vegetable soup, or baked veggies.</li>
        		</ol>
			` // Да, ты можешь юзать html тут
		},
		{
			label: "Sardine Wrap",
			cat: "alfonsetti", //Заюзал кей
			img: "assets/images/dishes/sardinewrap.jpg",
			desc: `
				<h2>Description</h2>
					<p>Author: Daniel Alfonsetti</p>
				<h2>Ingredients</h2>
				<ul class="ingred-list ">
    				<li>Sardines</li>
    				<li>Spinach</li>
    				<li>Hummus</li>
    				<li>Egg</li>
    				<li>Guacamole</li>
				</ul>
   				<h2>Method</h2>
				<ol>
					<li>Add scrambled eggs for extra protein (or substitute eggs if you don't like sardines).</li>
					<li>Get a wrap, spread guac and hummus on it. Then put the spinach on. If using eggs, put those on next (see link below for microwave egg cooker).</li>
					<li> Then the sardines. Make sure not to spill sardine juice on your clothes or elsewhere as you open the sardine can - your dorm mates will not appreciate it.</li>
					<li><a href="https://www.amazon.com/Egg-Tastic-Ceramic-Microwave-Poacher-Flavorful/dp/B00YYYL2XW/ref=sr_1_3_sspa?s=home-garden&ie=UTF8&qid=1548986497&sr=1-3-spons&keywords=stone+egg+cooker+microwave&psc=1">Link</a></li>
				</ol>
			`
		},
		{
			label: "Paella",
			cat: "main", //Заюзал кей
			img: "assets/images/dishes/paella.jpg",
			desc: `
				<h2>Description</h2>
					<p>Paella is one of my favorite foods to cook. It's absolutely delicious and great for parties. It's traditionally cooked with chicken and rabbit. This recipe uses chicken and shrimp, but it's pretty versatile and works just as well with other seafood. </p>
					<p>Total time: ~1 hour</p>
					<p>Author: Brian Xie</p>
				<h2>Ingredients</h2>
				<ul>
    				<li>onion, garlic, peas, lemon, rosemary, parsley</li>
    				<li>chicken thigh, shrimp (ideally with head and shell)</li>
					<li>arborio rice</li>
					<li>olive oil, salt, pepper, paprika, saffron, white wine, chicken stock, tomato paste</li>
				</ul>
   				<h2>Method</h2>
        		<ol>
        			<li>Prep: heat up chicken stock in a pan, dice onion, finely chop garlic, juice 1 lemon, peel/devein and season shrimp, halve and season chicken thighs. Put the lemon juice in a bowl, combine with saffron, and lightly crush with a spoon. </li>
					<li>Put paella pan (or large, relatively flat pan) onto stove on high heat, until very hot. Add olive oil, and sear both sides of chicken thigh until nicely browned, about 10 minutes total.</li>
					<li>Remove chicken, turn heat down to medium or medium-high, and add diced onion. Cook until translucent, then add chopped garlic. Cook for another few minutes.</li>
					<li>Turn up heat to high. Add arborio rice into pan. Ensure that each grain of rice is coated with oil. </li>
					<li>(Optional) Add some white wine, cook off all the alcohol.</li>
					<li>Return chicken to pan. Add a large spoonful of tomato paste, pepper, and paprika. Stir well. Add saffron lemon juice, stir well, and add the chicken stock.</li>
					<li>Turn heat to medium high, and let cook until stock is almost completely gone. At some point in the middle, add shrimp (flipping once to cook both sides). </li>
					<li>Add peas, and a few sprigs of rosemary on top. Cook on high heat for a few minutes, then turn off heat and cover for about 10 minutes. </li>
					<li>Serve with lemon wedges and parsley on the side.</li>

				</ol>
				<h2>Tips:</h2>
				<ul>
					<li>Can't find saffron? Trader Joe's has a small container (0.7g) of saffron for $6, which should be enough for one portion. </li>
					<li>Put shrimp shells/heads into chicken stock when prepping. This imparts an amazing shrimp flavor into the stock. Also feel free to add in a few sprigs of rosemary & lemon rinds. Remove them before adding stock to rice.</li>
					<li>You will need a lot of olive oil (probably upwards of 1/3 to 1/2 cup).</li>
					<li>A good ratio of stock to rice is around 3:1. Adjust accordingly</li>
					<li>Once the chicken stock goes in, do not touch the rice. This helps develop the crispy bottom on the rice.</li>
					<li>I'm being pretty vague about specific measurements because it will depend a lot on your pan. Feel free to ask me directly for more details.</li>
				</ul>
			` // Да, ты можешь юзать html тут
		},
	]
}

function showInModal(id) { // Здесь лучше ничего не трогать
	var res = window.residents[id];
	var div = document.createElement('div');
	div.className = 'card';
	div.innerHTML =
		`
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                    <img src="` +
		res.photo +
		`" alt="Photo of ` +
		res.name +
		`" />
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-4">` +
		res.name +
		`</p>
                            <p class="subtitle is-6">@` +
		res.nick +
		`</p>
                        </div>
                    </div>

                    <div class="content">
                        <h4>Hometown:</h4>
                        <p>` +
		res.hometown +
		`</p>
                        <h4>Major:</h4>
                        <p>` +
		res.major +
		`</p>
                        <h4>Class Year:</h4>
                        <p>` +
		res.year +
		`</p>
                        <h4>Fire Hazard Status:</h4>
                        <p>` +
		res.fhs +
		`</p>
                        <h4>Bio:</h4>
                        <p>` +
		res.bio +
		`</p>
                    </div>
                </div>
`;
	document.getElementById('content').innerHTML = '';
	document.getElementById('content').appendChild(div);
	document.getElementById('modal').classList.add('is-active');
}

function showDish(id) { // Здесь лучше ничего не трогать
	var res = cookBook.dishes[id];
	var div = document.createElement('div');
	div.className = 'card';
	div.innerHTML =
		`
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                    <img src="` +
		res.img +
		`" alt="Photo of ` +
		res.label +
		`" />
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-4">` +
		res.label +
		`</p>
                        </div>
                    </div>

                    <div class="content">
                        `+res.desc+`
                    </div>
                </div>
`;
	document.getElementById('content').innerHTML = '';
	document.getElementById('content').appendChild(div);
	document.getElementById('modal').classList.add('is-active');
}

Barba.Pjax.init();
var FadeTransition = Barba.BaseTransition.extend({
	start: function () {
		Promise.all([this.newContainerLoading, this.fadeOut()]).then(this.fadeIn.bind(this));
	},

	fadeOut: function () {
		return $(this.oldContainer)
			.animate({
				opacity: 0
			})
			.promise();
	},

	fadeIn: function () {
		var _this = this;
		var $el = $(this.newContainer);

		$(this.oldContainer).hide();

		$el.css({
			visibility: 'visible',
			opacity: 0
		});

		$el.animate({
				opacity: 1
			},
			400,
			function () {
				_this.done();
			}
		);
	}
});

Barba.Pjax.getTransition = function () {
	return FadeTransition;
};

Barba.Dispatcher.on('newPageReady', function () {
	document.body.classList.remove('menu-active');
	switch (Barba.HistoryManager.currentStatus().namespace) {
		case 'home':
			return onHome();
		case 'residents':
			return onResidents();
		case 'calendar':
			return onCalendar();
		case 'facts':
			return onFacts();
		case 'traditions':
			return onTraditions();
		case 'cookbook': 
			return onCookBook();
		case "gallery":
			return onGallery();
		default:
			return false;
	}
});

function onHome() {
	$(document).ready(function () {
		$('.carousel').slick({
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
		});
	});
	document.getElementById("quote").innerText = quotes[getWeekNumber(new Date()) % quotes.length]
}

function onResidents() {
	for (var i in residents) {
		var res = residents[i];
		var div = document.createElement('div');
		div.className = 'column is-one-quarter';
		div.innerHTML =
			`
        <div onclick="showInModal(` +
			i +
			`)" class="card">
            <div class="card-photo">
                <img src="` +
			res.photo +
			`" alt="Photo of ` +
			res.name +
			`" />
            </div>
            <div class="card-content">
                <h1 class="title is-5">` +
			res.name +
			`</h1>
                <h2 class="subtitle is-6">` +
			res.nick +
			`</h1>
            </div>
        </div>
    `;
		document.getElementById('residents').appendChild(div);
	}
}

function onCalendar() {
	var calendarEl = document.getElementById('calendar');

	var calendar = new FullCalendar.Calendar(calendarEl, {
		header: {
			left: 'month,listWeek',
			center: 'title',
			right: 'prev,next'
		},
		defaultView: 'listWeek',
		displayEventTime: true,
		timeFormat: 'HH:mm',
		googleCalendarApiKey: 'AIzaSyD0zgpFcbJbOPlv-qu7mvIx3dMUMToEEwE',
		events: 'ouaivuvjcuo30blsg2o02l83nc@group.calendar.google.com',

		eventClick: function (arg) {
			window.open(arg.event.url, 'gcalevent', 'width=700,height=600');
			arg.jsEvent.preventDefault();
		},

		loading: function (bool) {
			document.getElementById('loading').style.display = bool ? 'block' : 'none';
		}
	});

	calendar.render();
}

function onFacts() {
	new Chart(document.getElementById("1C").getContext('2d'), {
		type: 'pie', // Это Chart.js, если что прочитай документацию https://www.chartjs.org/docs/latest/
		data: {
			labels: ["Freshman", "Sophomore", "Junior", "Senior"],
			datasets: [{
				label: 'Number of people',
				data: [12, 4, 4, 1],
				backgroundColor: [
					'#4473c3',
					'#ed7d31',
					'#a5a5a5',
					'#f9c032'
				]
			}]
		}
	});
	new Chart(document.getElementById("2C").getContext('2d'), {
		type: 'pie',
		data: {
			labels: ["Cook-for-yourself", "Half cooking, half meal plan", "Meal Plan", "FreeFood @ MIT"],
			datasets: [{
				label: 'Number of people',
				data: [12, 5, 3, 1],
				backgroundColor: [
					'#4473c3',
					'#ed7d31',
					'#a5a5a5',
					'#f9c032'
				]
			}]
		}
	});
	new Chart(document.getElementById("3C").getContext('2d'), {
		type: 'pie',
		data: {
			labels: ["Domestic", "International"],
			datasets: [{
				label: 'Number of people',
				data: [18, 3],
				backgroundColor: [
					'#4473c3',
					'#ed7d31'
				]
			}]
		}
	});
	new Chart(document.getElementById("4C").getContext('2d'), {
		type: 'bar',
		data: {
			labels: ["1", "2", "3", "5", "6", "7", "8", "10", "14", "18"],
			datasets: [{
				label: "# of students",
			//  data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 20, 21, 22, 24],
				//data: [1, 3, 2, 0, 2, 8, 3, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
				data: [1, 3, 2, 2, 8, 3, 1, 1, 1, 1, 0],
				backgroundColor: [
					// 'rgba(253, 202, 64, 0.2)', // Sciences
					// 'rgba(220, 0, 115, 0.2)', // Engineering
					// 'rgba(51, 161, 253, 0.2)', // Humanities
					'rgba(220, 0, 115, 0.2)', // Course 1
					'rgba(220, 0, 115, 0.2)', // Course 2
					'rgba(220, 0, 115, 0.2)', // Course 3
					//'rgba(51, 161, 253, 0.2)', // Course 4
					'rgba(253, 202, 64, 0.2)', // Course 5
					'rgba(253, 202, 64, 0.2)', // Course 6
					'rgba(253, 202, 64, 0.2)', // Course 7
					'rgba(253, 202, 64, 0.2)', // Course 8
					//'rgba(253, 202, 64, 0.2)', // Course 9
					'rgba(220, 0, 115, 0.2)', // Course 10
					//'rgba(51, 161, 253, 0.2)', // Course 11
					//'rgba(253, 202, 64, 0.2)', // Course 12
					'rgba(253, 202, 64, 0.2)', // Course 14
					//'rgba(51, 161, 253, 0.2)', // Course 15
					//'rgba(220, 0, 115, 0.2)', // Course 16
					//'rgba(51, 161, 253, 0.2)', // Course 17
					'rgba(253, 202, 64, 0.2)', // Course 18
					//'rgba(220, 0, 115, 0.2)', // course 20
					//'rgba(51, 161, 253, 0.2)', // course 21
					//'rgba(220, 0, 115, 0.2)', // course 22
					//'rgba(51, 161, 253, 0.2)' // course 24
				],
				borderColor: [
					// 'rgba(253, 202, 64, 0.2)', // Sciences
					// 'rgba(220, 0, 115, 0.2)', // Engineering
					// 'rgba(51, 161, 253, 0.2)', // Humanities
					'rgba(220, 0, 115, 1.0)', // Course 1
					'rgba(220, 0, 115, 1.0)', // Course 2
					'rgba(220, 0, 115, 1.0)', // Course 3
					//'rgba(51, 161, 253, 1.0)', // Course 4
					'rgba(253, 202, 64, 1.0)', // Course 5
					'rgba(253, 202, 64, 1.0)', // Course 6
					'rgba(253, 202, 64, 1.0)', // Course 7
					'rgba(253, 202, 64, 1.0)', // Course 8
					//'rgba(253, 202, 64, 1.0)', // Course 9
					'rgba(220, 0, 115, 1.0)', // Course 10
					//'rgba(51, 161, 253, 1.0)', // Course 11
					//'rgba(253, 202, 64, 1.0)', // Course 12
					'rgba(253, 202, 64, 1.0)', // Course 14
					//'rgba(51, 161, 253, 1.0)', // Course 15
					//'rgba(220, 0, 115, 1.0)', // Course 16
					//'rgba(51, 161, 253, 1.0)', // Course 17
					'rgba(253, 202, 64, 1.0)', // Course 18
					//'rgba(220, 0, 115, 1.0)', // course 20
					//'rgba(51, 161, 253, 1.0)', // course 21
					//'rgba(220, 0, 115, 1.0)', // course 22
					//'rgba(51, 161, 253, 1.0)', // course 24
				],
				borderWidth: 1
			}]
		}
	});
}

function onTraditions() {
	for (var i = 0; i < traditions.length; i++) {
		var trad = traditions[i]
		var div = document.createElement('div')
		var images = ""
		if (trad.images.length > 1) {
			var data = ""
			for (let j in trad.images) {
				data = data + `<img src="` + trad.images[j] + `"/>`
			}
			images = `<div class="trad-carrousel">
			` + data + `
			</div>`
		} else {
			images = `<img src="` + trad.images[0] + `"/>`
		}
		div.className = 'column is-half';
		div.innerHTML =
			`
        <div class="card">
            <div class="card-photo">
                ` + images + `
            </div>
            <div class="card-content">
                <h1 class="title is-5">` +
			trad.title +
			`</h1>
                <h2 class="subtitle is-6">` +
			trad.desc +
			`</h1>
            </div>
        </div>
	`;
		document.getElementById("traditions").appendChild(div)
	}
	$('.trad-carrousel').slick({
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
	})
}

function onCookBook() {
	for (var i in cookBook.cats) {
		let tab = document.createElement("li")
		tab.className = "cat"
		tab.setAttribute("data-filter", "." + cookBook.cats[i].key)
		tab.innerHTML = "<a>" + cookBook.cats[i].label + "</a>"
		document.getElementById("tabs").appendChild(tab)
	}
	for (var j in cookBook.dishes) {
		let dish = document.createElement("div")
		dish.className = "element-item " + cookBook.dishes[j].cat
		dish.innerHTML = `
		<a onclick="showDish(`+ j +`)" class="p-scroll">
			<img class="replace-2x" src="` + cookBook.dishes[j].img + `" width="348" height="244" alt="` + cookBook.dishes[j].label + `">
			<div class="overlay">
				<div class="p-title">
					<h3 class="name">` + cookBook.dishes[j].label + `</h3>
				</div>
			</div>
		</a>
		`
		document.querySelector('.isotope').appendChild(dish)
	}
	if ($(".isotope").length > 0) {

		// initialize Isotope after all images have loaded
		var $container = $('.isotope').imagesLoaded(function () {
			$container.isotope({
				itemSelector: '.element-item',
				layoutMode: 'fitRows'
			});
		});

		// filter functions
		var itemReveal = Isotope.Item.prototype.reveal;
		Isotope.Item.prototype.reveal = function () {
			itemReveal.apply(this, arguments);
			$(this.element).removeClass('isotope-hidden');
		};

		var itemHide = Isotope.Item.prototype.hide;
		Isotope.Item.prototype.hide = function () {
			itemHide.apply(this, arguments);
			$(this.element).addClass('isotope-hidden');
		};

		// demo code
		$(function () {
			var $container = $('.isotope');
			$container.isotope({
				layoutMode: 'fitRows'
			});
			$('.tabs .cat').on('click', function () {
				var filtr = $(this).attr('data-filter');
				console.log(filtr)
				$container.isotope({
					filter: filtr
				});
			});
		});

		// change is-checked class on buttons
		$('.tabs .cat').each(function (i, buttonGroup) {
			var $buttonGroup = $(buttonGroup);
			$buttonGroup.on('click', function () {
				$('.tabs .cat.is-active').removeClass('is-active');
				$(this).addClass('is-active');
			});
		});

	}
}

function onGallery(){
	var imgOpts = $.extend(true, {}, $.fancybox.defaults, {
		caption: function (instance, item) {
			return $(this).next('figcaption').html();
		}
	});
	$('[data-fancybox="images"]').fancybox(imgOpts);
}

function getWeekNumber(d) {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    return weekNo;
}

document.getElementById('burger').addEventListener('click', function () {
	document.body.classList.toggle('menu-active');
});