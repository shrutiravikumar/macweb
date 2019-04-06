var residents = [
	{
		name: 'Kathleen Esfahany',
		nick: 'kaes',
		photo: 'assets/images/kathleenesfahany.jpg',
		fhs: 'My 6 7 8 9 🅱️ig 🅱️rain is an alpha Fire Hazard',
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
		fhs: 'Daddy Myers Fire Hazard',
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
		fhs: 'My left hip and lower back pain are a Fire Hazard', //Это твой FireHazardStatus
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
		fhs: '🅱️ig 🅱️eaver 🅱️rand Fire Hazard',
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
		fhs: 'You know what they say about Fire Hazards',
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
		fhs: 'Koala Genocide Fire Hazard',
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
		fhs: 'Mild to big yikes Fire Hazard',
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
		fhs: 'Obsessive cooking disorder Fire Hazard',
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
		fhs: 'Number sticks are a Fire Hazard',
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
		fhs: 'I love J entry 🅱️oyz Fire Hazard',
		year: '2022',
		major: '18C',
		hometown: 'Seattle, WA',
		quote: 'Lorem ipsum dolor sit amet',
		bio: 'I&rsquo;m a&nbsp;resident of&nbsp;H entry'
	},
	{
		name: 'Tiffany Chen',
		nick: 'tiffc',
		photo: 'assets/images/tiffanychen.jpg',
		fhs: 'Just Let Me Make Fried Rice Fire Hazard',
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
		fhs: 'NO PUSSY SHIT Fire Hazard',
		year: '2022',
		major: '6-2',
		hometown: 'Victor, NY',
		quote: 'Lorem ipsum dolor sit amet',
		bio: 'Basically all of&nbsp;my&nbsp;hobbies involve music, mostly instruments and theater. I&nbsp;usually listen to&nbsp;alternative and soundtrack music.'
	},
	{
		name: 'Miles Cruice-Barnett',
		nick: 'milesacb',
		photo: 'assets/images/milesbarnet.jpg',
		fhs: 'Fly Eagles Fly Fire Hazard',
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
		fhs: 'I only cook breakfast now Fire Hazard',
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
		fhs: 'It&rsquo;s Always Cold in&nbsp;Boston Fire Hazard',
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
		fhs: 'My profile pic is a Fire Hazard',
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
		fhs: 'Queen of the Night Fire Hazard',
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
		fhs: 'Flux-Corrected Transport Algorithm Fire Hazard',
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
		fhs: 'Course 5 as a GIR is a huge Fire Hazard',
		year: '2022',
		major: '5-7',
		hometown: 'Taldykorgan, Kazakhstan',
		quote: 'Lorem ipsum dolor sit amet',
		bio: '&rsquo;I guess Chemistry is&nbsp;just another word for love&rsquo; Scott Thompson. <br><br> Besides, I&rsquo;m also interested (like love to&nbsp;learn something new about&nbsp;it) in&nbsp;physics (mainly quantum, astrophysics and particle physics), photography (well, I&nbsp;sometimes get lucky and make good&nbsp;&mdash; imho&nbsp;&mdash; shots), education (aka trying to&nbsp;improve it&nbsp;in&nbsp;my&nbsp;home country), and probably something else that&nbsp;I forgot about.'
	}
];

var quotes = [	// Массив с цитатами
	"5.12 is a bless",
	"still to be updated",
	"here could be your ad",
	"we lost creativity"
]

var traditions = [{
		title: "Hexgiving", 
		desc: "Annual hexgiving dinner between&nbsp;H and&nbsp;G entry. Typically done Saturday or&nbsp;Sunday before ~actual~ Thanksgiving. A&nbsp;tradition for at&nbsp;least 10&nbsp;years. Traditional American Thanksgiving food is&nbsp;served along with cultural dishes from residents&rsquo; backgrounds.", 
		images: ["https://via.placeholder.com/1280x720"]
	},
	{
		title: "Fancy Friday", 
		desc: "That&rsquo;s been around since at&nbsp;least early 90s, probably earlier. The concept is&nbsp;pretty simple&nbsp;&mdash; dress up&nbsp;and go&nbsp;somewhere not as&nbsp;very nice. Have fun. Some places we&rsquo;ve been&nbsp;to: MacDonalds, Five Guys and some other small random burger places.", 
		images: ["assets/images/traditions/fancyfriday1.jpg"]
	},
	{
		title: "Fire Hazards Designation", 
		desc: "We&rsquo;re famous for cooking a&nbsp;lot and setting a&nbsp;lot of&nbsp;fire alarms. And some ~related fire alarm stories~, but we&nbsp;won&rsquo;t go&nbsp;into details. Check out our residents page.", 
		images: ["https://via.placeholder.com/1280x720"]
	},
	{
		title: "50 McNugget Challenge", 
		desc: "Started 6&nbsp;years ago as&nbsp;part of&nbsp;Fancy Friday. Used to&nbsp;be&nbsp;a&nbsp;pretty viral things, so&nbsp;we&rsquo;ve kinda done it&nbsp;ever since. The idea is&nbsp;to&nbsp;eat 50&nbsp;McNuggets in&nbsp;under 30&nbsp;minutes. If&nbsp;you succeed&nbsp;&mdash; your meal gets covered. The current record is&nbsp;5&nbsp;minutes 41&nbsp;seconds by&nbsp;Jesse Granados.", 
		images: ["assets/images/traditions/50mcnugget1.jpg"]
	},
	{
		title: "Creative Cooking @ CPW/REX", 
		desc: "A&nbsp;thing for at&nbsp;least 5&nbsp;years. As&nbsp;you probably have noticed by&nbsp;now, we&nbsp;cook a&nbsp;lot. We&rsquo;ve done a&nbsp;lot of&nbsp;things from sushi to&nbsp;Cuban roasted pigs&nbsp;&mdash; check gallery.", 
		images: ["assets/images/traditions/creativecooking1.jpg"]
	},
	{
		title: "Meatfest", 
		desc: "Mostly a&nbsp;G-entry thing, but we&rsquo;re invited. The idea is&nbsp;&laquo;meat tastes good, so&nbsp;let&rsquo;s make a&nbsp;shit lot of&nbsp;it&raquo;.", 
		images: ["https://via.placeholder.com/1280x720"]
	},
	{
		title: "Hexsassins", 
		desc: "Quite a&nbsp;recent one and self-explanatory. We&nbsp;play assasins game with&nbsp;G entry. The weapon is&nbsp;changed from year to&nbsp;year, but some stuff we&nbsp;used included fidget spinners and balloons", 
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
		{
			label: "Desserts",
			key: "dessert"
		},
		{
			label: "Snacks",
			key: "snack"
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
					<li>Preheat the oven (or&nbsp;toaster oven) to&nbsp;450&ordm;F.</li>
					<li>Lay salmon on&nbsp;aluminum foil, and foil on&nbsp;baking sheet.</li>
					<li>Sprinkle salt and pepper, as&nbsp;desired, on&nbsp;salmon fillet.</li>
					<li>Cook for 12&nbsp;to&nbsp;15&nbsp;minutes (depending on&nbsp;thickness of&nbsp;salmon). Salmon should flake when gently scraped with a&nbsp;fork.</li>
					<li>Pair with a&nbsp;simple salad, vegetable soup, or&nbsp;baked veggies.</li>
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
					<li>Add scrambled eggs for extra protein (or&nbsp;substitute eggs if&nbsp;you don&rsquo;t like sardines).</li>
					<li>Get a&nbsp;wrap, spread guac and hummus on&nbsp;it. Then put the spinach&nbsp;on. If&nbsp;using eggs, put those on&nbsp;next (see link below for microwave egg cooker).</li>
					<li> Then the sardines. Make sure not to&nbsp;spill sardine juice on&nbsp;your clothes or&nbsp;elsewhere as&nbsp;you open the sardine can&nbsp;&mdash; your dorm mates will not appreciate&nbsp;it.</li>
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
					<li>Prep: heat up&nbsp;chicken stock in&nbsp;a&nbsp;pan, dice onion, finely chop garlic, juice 1&nbsp;lemon, peel/devein and season shrimp, halve and season chicken thighs. Put the lemon juice in&nbsp;a&nbsp;bowl, combine with saffron, and lightly crush with a&nbsp;spoon. </li>
					<li>Put paella pan (or&nbsp;large, relatively flat pan) onto stove on&nbsp;high heat, until very hot. Add olive oil, and sear both sides of&nbsp;chicken thigh until nicely browned, about 10&nbsp;minutes total.</li>
					<li>Remove chicken, turn heat down to&nbsp;medium or&nbsp;medium-high, and add diced onion. Cook until translucent, then add chopped garlic. Cook for another few minutes.</li>
					<li>Turn up&nbsp;heat to&nbsp;high. Add arborio rice into pan. Ensure that each grain of&nbsp;rice is&nbsp;coated with oil. </li>
					<li>(Optional) Add some white wine, cook off all the alcohol.</li>
					<li>Return chicken to&nbsp;pan. Add a&nbsp;large spoonful of&nbsp;tomato paste, pepper, and paprika. Stir well. Add saffron lemon juice, stir well, and add the chicken stock.</li>
					<li>Turn heat to&nbsp;medium high, and let cook until stock is&nbsp;almost completely gone. At&nbsp;some point in&nbsp;the middle, add shrimp (flipping once to&nbsp;cook both sides). </li>
					<li>Add peas, and a&nbsp;few sprigs of&nbsp;rosemary on&nbsp;top. Cook on&nbsp;high heat for a&nbsp;few minutes, then turn off heat and cover for about 10&nbsp;minutes. </li>
					<li>Serve with lemon wedges and parsley on&nbsp;the side.</li>
				</ol>
				<h2>Tips:</h2>
				<ul>
					<li>Can&rsquo;t find saffron? Trader Joe&rsquo;s has a&nbsp;small container (0.7g) of&nbsp;saffron for&nbsp;$6, which should be&nbsp;enough for one portion. </li>
					<li>Put shrimp shells/heads into chicken stock when prepping. This imparts an&nbsp;amazing shrimp flavor into the stock. Also feel free to&nbsp;add in&nbsp;a&nbsp;few sprigs of&nbsp;rosemary &amp;&nbsp;lemon rinds. Remove them before adding stock to&nbsp;rice.</li>
					<li>You will need a&nbsp;lot of&nbsp;olive oil (probably upwards of&nbsp;1/3 to&nbsp;1/2&nbsp;cup).</li>
					<li>A&nbsp;good ratio of&nbsp;stock to&nbsp;rice is&nbsp;around 3:1. Adjust accordingly</li>
					<li>Once the chicken stock goes&nbsp;in, do&nbsp;not touch the rice. This helps develop the crispy bottom on&nbsp;the rice.</li>
					<li>I&rsquo;m being pretty vague about specific measurements because it&nbsp;will depend a&nbsp;lot on&nbsp;your pan. Feel free to&nbsp;ask me&nbsp;directly for more details.</li>
				</ul>
			` // Да, ты можешь юзать html тут
		},
		{
			label: "Cr&egrave;me Br&ucirc;l&eacute;e",
			cat: "desserts", //Заюзал кей
			img: "assets/images/dishes/cremebrule.jpg",
			desc: `
				<h2>Description</h2>
					<p>Cr&egrave;me Br&ucirc;l&eacute;e is&nbsp;one of&nbsp;my&nbsp;favorite desserts of&nbsp;all times. The contrast between the exquisitely rich custard and the crispy caramelized crust is&nbsp;incredible. It&rsquo;s also surprisingly easy to&nbsp;make great for parties&nbsp;&mdash; blowtorching the sugar is&nbsp;a&nbsp;true showstopper.</p>
					<p>Total time: ~1 hour baking + >2 hours cooling</p>
					<p>Author: Brian Xie</p>
				<h2>Ingredients (for 4-6 servings)</h2>
				<ul>
    				<li>2&nbsp;cups heavy cream/li>
    				<li>1&nbsp;vanilla bean (or&nbsp;about 1&nbsp;tsp vanilla extract)</li>
					<li>5&nbsp;egg yolks</li>
					<li>1/2 cup granulated sugar + more for topping</li>
					<li>pinch of salt</li>
				</ul>
   				<h2>Method</h2>
        		<ol>
					<li>Preheat oven to&nbsp;325 degrees&nbsp;F</li>
					<li>Heat heavy cream in&nbsp;saucepan on&nbsp;medium-low heat. If&nbsp;using vanilla bean: split vanilla bean in&nbsp;half, use a&nbsp;knife to&nbsp;scrape all the seeds out, and add them both to&nbsp;the cream. If&nbsp;using extract, add it&nbsp;to&nbsp;the cream. Heat until hot and just below a&nbsp;simmer. Immediately take it&nbsp;off the heat, cover&nbsp;it, and rest at&nbsp;least 15&nbsp;minutes.</li>
					<li>In&nbsp;a&nbsp;bowl, mix egg yolks, sugar, and salt until fully incorporated. Add a&nbsp;couple of&nbsp;tablespoons of&nbsp;the cream into the egg mixture, and mix until fully incorporated. Repeat. Finally, add the remaining cream and mix well. Strain the mixture to&nbsp;remove vanilla bean and any other lumps.</li>
					<li>Pour mixture into ramekins (I&nbsp;used six 4oz ramekins) until each is&nbsp;mostly full.</li>
					<li>Bake for around 40-45 minutes in&nbsp;a&nbsp;water bath: place the ramekins in&nbsp;a&nbsp;baking dish and fill about halfway up&nbsp;the ramekins with hot water.</li>
					<li>Remove the ramekins, dry, and refrigerate for at&nbsp;least 2&nbsp;hours.</li>
					<li>When ready to&nbsp;serve, remove ramekins from fridge, top with a&nbsp;light coating of&nbsp;sugar. Use a&nbsp;blowtorch (around 6-8 inches away) to&nbsp;caramelize the sugar. Rest a&nbsp;few minutes before serving.</li>
					<li>(Optional) Top with your favorite berries and enjoy!</li>

				</ol>
				<h2>Tips:</h2>
				<ul>
					<li>Cr&egrave;me Br&ucirc;l&eacute;e really turns out best if&nbsp;you use a&nbsp;blowtorch, since it&nbsp;only caramelizes the sugar and doesn&rsquo;t heat the custard. Alternatively, you can try using your oven&rsquo;s broiler, make sure to&nbsp;put the ramekin in&nbsp;an&nbsp;ice bath to&nbsp;avoid heating up&nbsp;the custard.</li>
					<li>The process of&nbsp;slowly adding the cream into the egg mixture at&nbsp;first is&nbsp;called tempering. If&nbsp;we&nbsp;were to&nbsp;add all of&nbsp;the cream immediately, it&nbsp;would increase the temperature too quickly and essentially scramble the eggs.</li>
					<li>It&rsquo;s important to&nbsp;achieve a&nbsp;fine balance with the amount of&nbsp;sugar at&nbsp;the top: don&rsquo;t put too much (otherwise the top will be&nbsp;caramelized but the bottom won&rsquo;t), but you&rsquo;ll want enough to&nbsp;cover the surface. Something like 1/3 cup divided amongst the ramekins is&nbsp;probably reasonable.</li>
					<li>You can refrigerate cr&egrave;me br&ucirc;l&eacute;e for up&nbsp;to&nbsp;a&nbsp;couple of&nbsp;days before serving.</li>
					<li>Blowtorching is&nbsp;an&nbsp;inexact science and something&nbsp;I kind of&nbsp;hand-wave. You should stop once you achieve the desired color at&nbsp;all spots over the surface.</li>

				</ul>
			` // Да, ты можешь юзать html тут
		},
		{
			label: "Noodles, Green Beans & Tomato",
			cat: "main", //Заюзал кей
			img: "assets/images/dishes/noodlesbeans.jpg",
			desc: `
				<h2>Description</h2>
					<p>My&nbsp;go-to meal when&nbsp;I want something warm and hearty, or&nbsp;if&nbsp;I haven&rsquo;t had enough vegetables lately. This recipe is&nbsp;for 1&nbsp;hungry person, although you can easily scale everything up&nbsp;for more people.</p>
					<p>Total time: ~25 min</p>
					<p>Author: Brian Xie</p>
				<h2>Ingredients</h2>
				<ul>
					<li>Noodles</li>
					<li>Green beans</li>
					<li>Tomato</li>
					<li>Egg</li>
					<li>Ground pork</li>
					<li>Garlic, green onion, cilantro</li>
					<li>Chinese pepper powder, soy sauce, chili oil, neutral oil</li>
				</ul>
   				<h2>Method</h2>
        		<ol>
					<li>Prep: Remove the ends of&nbsp;green beans, and cut into small (~2cm) strips. Cut tomato into small pieces. Peel, smash, and chop garlic. Chop green onion into small pieces. Roughly chop cilantro.</li>
					<li>Heat neutral oil over high heat in&nbsp;a&nbsp;wok. Once hot, add ground pork and stir-fry. Around half a&nbsp;minute later, add garlic and green onions. Add Chinese pepper powder. Continue to&nbsp;stir-fry until pork is&nbsp;more or&nbsp;less cooked through.</li>
					<li>Add soy sauce. Cook for a&nbsp;few seconds, then add tomatoes and green beans. Stir-fry for a&nbsp;few seconds, then add some water. Add chili oil and cilantro. Cover and bring up&nbsp;to&nbsp;a&nbsp;boil.</li>
					<li>Once boiling, poach an&nbsp;egg or&nbsp;two in&nbsp;the liquid (a&nbsp;few minutes). Remove eggs once cooked.</li>
					<li>Add noodles to&nbsp;liquid. Cook and stir until just slightly undercooked, and serve. Top with the poached egg. Enjoy!</li>
				</ol>
				<h2>Tips:</h2>
				<ul>
					<li>Do&nbsp;not be&nbsp;timid with heat. Use the highest heat your stovetop can support, as&nbsp;with most Chinese cooking.</li>
					<li>I&nbsp;would definitely recommend using noodles which are not dried and not too thin. You&rsquo;ll have a&nbsp;much better texture, and the noodles will absorb much more flavor.</li>
					<li>Your goal is&nbsp;to&nbsp;end up&nbsp;with a&nbsp;fairly thick soup base. As&nbsp;such, you don&rsquo;t want to&nbsp;add too much water, just enough to&nbsp;cook the noodles. The noodles themselves will absorb a&nbsp;decent amount of&nbsp;water if&nbsp;you use wet noodles.</li>
					<li>Amounts of&nbsp;ingredients may vary and are up&nbsp;to&nbsp;preference. I&nbsp;typically use around 450 kcal worth of&nbsp;noodles, 1/2 to&nbsp;3/4 pounds of&nbsp;green beans, 1&nbsp;beefsteak tomato, 2&nbsp;eggs, and 1/4 pound ground pork.</li>
					<li>Serve and enjoy immediately, and it&nbsp;is&nbsp;critical that you remove from the wok when noodles are still slightly undercooked, since they will continue to&nbsp;cook in&nbsp;the hot soup base.</li>
					<li>Taste frequently and adjust as&nbsp;necessary (especially with seasoning)</li>
				</ul>
			` // Да, ты можешь юзать html тут
		},
		{
			label: "Gambas al&nbsp;Ajillo (Spanish Garlic Shrimp)",
			cat: "main", //Заюзал кей
			img: "assets/images/dishes/gambas.jpg",
			desc: `
				<h2>Description</h2>
					<p>Flagship dish at&nbsp;many Spanish tapas restaurants. Simple and easy yet absolutely delicious.</p>
					<p>Total time: ~10 min</p>
					<p>Author: Brian Xie</p>
				<h2>Ingredients</h2>
				<ul>
					<li>Shrimp (about 1&nbsp;pound, around 20&nbsp;per pound in&nbsp;size)</li>
					<li>Garlic (4 cloves)</li>
					<li>Parsley</li>
					<li>Dry Sherry</li>
					<li>Good quality olive oil</li>
					<li>Salt, pepper, paprika, cayenne</li>
					<li>Bread</li>
				</ul>
   				<h2>Method</h2>
        		<ol>
					<li>Prep: Peel and chop garlic cloves into slices. Roughly chop parsley. Peel and devein shrimp, season with salt, pepper, paprika, and cayenne. Toast some bread and arrange it&nbsp;in&nbsp;a&nbsp;bowl.</li>
					<li>Heat olive oil in&nbsp;a&nbsp;pan on&nbsp;medium heat and add chopped garlic. Stir and cook until the thinner pieces are just starting to&nbsp;turn slightly brown.</li>
					<li>Turn heat to&nbsp;high and immediately add shrimp. Continuously stir and cook for around 2&nbsp;minutes, or&nbsp;until shrimp just start to&nbsp;curl up&nbsp;but are still undercooked.</li>
					<li>Add sherry, continue to&nbsp;stir and cook for around 1&nbsp;minute, or&nbsp;until shrimp is&nbsp;cooked through.</li>
					<li>Turn off heat, add some parsley and stir.</li>
					<li>Pile the shrimp into the bowl with bread.</li>
					<li>To&nbsp;finish, spoon over plenty of&nbsp;the wine/oil sauce. Sprinkle over some more paprika, and a&nbsp;little cayenne. Enjoy!</li>
				</ol>
				<h2>Tips:</h2>
				<ul>
					<li>It&rsquo;s really important to&nbsp;use a&nbsp;good quality olive oil. This recipe is&nbsp;simple, and the oil really shines through. I&nbsp;typically get something nice from Eataly specifically for dishes like this. And do&nbsp;not skimp on&nbsp;the oil&nbsp;&mdash; you will need a&nbsp;lot (probably around 1/4&nbsp;cup).</li>
					<li>If&nbsp;you don&rsquo;t have sherry, white wine works as&nbsp;well, which is&nbsp;what&nbsp;I typically&nbsp;do. I&rsquo;d use somewhere around 1/6 cup for this recipe.</li>
					<li>Good quality bread is&nbsp;a&nbsp;really important pairing for this! The bread soaks up&nbsp;all that delicious wine/oil sauce and is&nbsp;absolutely otherworldly.</li>
				</ul>
			` 
		},
		{
			label: "Avocado Toast",
			cat: "snack", //Заюзал кей
			img: "assets/images/dishes/avocado.jpg",
			desc: `
				<h2>Description</h2>
					<p>Avocado toast is&nbsp;really simple and delicious, but the difference between a&nbsp;mediocre avocado toast and an&nbsp;amazing one is&nbsp;tremendous. The ingredients really shine through here, and it&rsquo;s really important to&nbsp;invest in&nbsp;quality for this.</p>
					<p>Total time: ~10 min</p>
					<p>Author: Brian Xie</p>
				<h2>Ingredients</h2>
					<p>At&nbsp;the most fundamental level, you need:</p>
				<ul>
					<li>Freshly baked bread (I&nbsp;prefer sourdough or&nbsp;thick whole grain for this)</li>
					<li>Good quality olive oil</li>
					<li>Avocados</li>
					<li>A&nbsp;topping salt (I&nbsp;use FLeur de&nbsp;Sel)</li>
				</ul>
   				<h2>Method</h2>
        		<p>For a&nbsp;basic and delicious avocado toast, drizzle some olive oil over the bread and lightly toast&nbsp;it. I&nbsp;prefer to&nbsp;slice the avocado and fan it&nbsp;out, which&nbsp;I think gives a&nbsp;better texture and appearance. Arrange it&nbsp;on&nbsp;the bread, top with salt and a&nbsp;light drizzle of&nbsp;olive oil. I&rsquo;ll typically also grind a&nbsp;bit of&nbsp;black pepper on&nbsp;top.</p>
				<p>Beyond the basic avocado toast, some of&nbsp;my&nbsp;favorite variants include:</p>
				<ul>
					<li>Homemade Pesto! The acidity and fresh tang of&nbsp;the pesto complement the richness from the avocado perfectly. I&nbsp;decrease the amount of&nbsp;olive oil used, and smear some pesto onto the toasted bread before arranging the avocado and adding (a&nbsp;little bit less) salt. This is&nbsp;the version&nbsp;I made in&nbsp;the picture.</li>
					<li>Tomato, basil, and balsamic reduction. Again, the acidity and freshness of&nbsp;this combination really complement the avocado. I&nbsp;thinly slice some cherry tomatoes, top with some chopped basil and a&nbsp;little bit of&nbsp;balsamic reduction.</li>
					<li>Fried egg. Absolutely delicious.</li>
				</ul>
				<p>Of&nbsp;course, there are so&nbsp;many more ways to&nbsp;customize your avocado toast. Just remember, it&nbsp;pays to&nbsp;invest in&nbsp;quality for avocado toast. Enjoy!</p>
			` 
		},
		{
			label: "Creme Caramel",
			cat: "dessert", //Заюзал кей
			img: "assets/images/dishes/cremecaramel.jpg",
			desc: `
				<h2>Description</h2>
					<p>Another one of&nbsp;my&nbsp;favorite desserts! If&nbsp;you&rsquo;ve never had this before, it&nbsp;is&nbsp;conceptually very similar to&nbsp;flan. Aside from making the caramel, it&nbsp;is&nbsp;relatively easy and straightforward to&nbsp;make; definitely would recommend trying&nbsp;it!</p>
					<p>Total time: ~1 hour + at least 2 hours cooling</p>
					<p>Author: Brian Xie</p>
				<h2>Ingredients</h2>
				<p>(Caramel)</p>
				<ul>
					<li>1/2 cup granulated sugar</li>
				</ul>
				<p>(Custard)</p>
				<ul>
					<li>1&nbsp;egg + 3&nbsp;egg yolks</li>
					<li>1/4 cup granulated sugar</li>
					<li>1.5 tsp vanilla extract</li>
					<li>1/2 cup creme fraiche</li>
					<li>1/2 cup whole milk</li>
				</ul>
				   <h2>Method</h2>
				<ol>
					<li>Prep: Use a&nbsp;oil spray to&nbsp;lightly oil the insides of&nbsp;6 4-oz ramekins, or&nbsp;4 6-oz ramekins.</li>
					<li>Making the caramel: Pour sugar into pan over medium heat. Heat and swirl until entirely liquified. Quickly and evenly pour caramel into ramekins.</li>
					<li>Making the custard: First mix together eggs, egg yolks, and sugar until incorporated. Then add vanilla, creme fraiche, and whole milk, and mix thoroughly until completely incorporated. Ladle the mixture into the ramekins, around&nbsp;75% of&nbsp;the way up&nbsp;the top of&nbsp;the ramekins.</li>
					<li>Bake in&nbsp;a&nbsp;325&nbsp;F oven for around 45-50 minutes in&nbsp;a&nbsp;hot water bath. The water should come up&nbsp;around 1/2 of&nbsp;the way up&nbsp;the ramekins.</li>
					<li>Remove ramekins from water bath and let cool until safe to&nbsp;touch. Run a&nbsp;knife around the edges to&nbsp;prevent sticking, and invert custards onto a&nbsp;dessert plate. Pour any remaining caramel onto the dessert, if&nbsp;possible. Chill in&nbsp;the fridge for at&nbsp;least a&nbsp;few hours.</li>
					<li>(Optional) If&nbsp;you&rsquo;re feeling extra fancy, you can use the caramel stuck at&nbsp;the bottom of&nbsp;the ramekins to&nbsp;make a&nbsp;caramel garnish! Heat the ramekin in&nbsp;the microwave for around 30-45s, or&nbsp;until re-liquified. Carefully pour onto a&nbsp;sheet of&nbsp;parchment paper your design of&nbsp;choice. Let cool, remove from paper, and arrange onto the creme caramel. Enjoy!</li>
				</ol>
				<h2>Tips:</h2>
				<ul>
					<li>Making the caramel can be&nbsp;tricky. The key is&nbsp;to&nbsp;NEVER use a&nbsp;utensil of&nbsp;any kind; the caramel will stick to&nbsp;it. Instead, vigorously swirl the pan. Don&rsquo;t worry about a&nbsp;few wisps of&nbsp;smoke here and there; that&rsquo;s part of&nbsp;the process.</li>
					<li>Otherwise, this dessert should be&nbsp;fairly straightforward. Oven times may vary though, so&nbsp;to&nbsp;ensure your creme caramel is&nbsp;properly cooked, try lightly jiggling a&nbsp;ramekin. The custard should be&nbsp;set but with a&nbsp;slight jiggle to&nbsp;it.</li>
				</ul>
			` 
		},
		{
			label: "炒年糕 (Stir-fried Rice Cake)",
			cat: "main", //Заюзал кей
			img: "assets/images/dishes/ricecake.jpg",
			desc: `
				<h2>Description</h2>
					<p>I&nbsp;would consider this one of&nbsp;my&nbsp;favorite dishes to&nbsp;cook, as&nbsp;well as&nbsp;my&nbsp;personal flagship dish. It&nbsp;tastes absolutely amazing but is&nbsp;fairly simple, with essentially just four basic ingredients. Definitely give it&nbsp;a&nbsp;try for a&nbsp;hearty lunch or&nbsp;a&nbsp;quick dinner!</p>
					<p>Total time: ~15-20 min</p>
					<p>Author: Brian Xie</p>
				<h2>Ingredients</h2>
				<ul>
					<li>Sliced rice cake</li>
					<li>Pork belly</li>
					<li>Cabbage</li>
					<li>Green onions</li>
					<li>Neutral oil, soy sauce, salt, Chinese pepper powder, cumin, potato starch</li>
				</ul>
				   <h2>Method</h2>
				<ol>
					<li>Prep: Boil some water to&nbsp;pre-cook cabbage&nbsp;in. Soak sliced rice cake in&nbsp;warm water, making sure to&nbsp;detach any pieces stuck together. Cut cabbage into approximately square pieces. Thinly slice pork belly, and coat with some potato starch. Cut green onions into small pieces.</li>
					<li>Boil the cabbage for a&nbsp;few minutes. Remove and strain cabbage.</li>
					<li>In&nbsp;a&nbsp;wok, heat neutral oil until hot. Stir-fry sliced pork belly for about a&nbsp;minute, until mostly cooked. Add sliced green onions, pepper, and cumin. Stir-fry for a&nbsp;little more, then add soy sauce. Stir for a&nbsp;few seconds, then add cabbage back&nbsp;in. Add a&nbsp;little salt and stir-fry for around a&nbsp;minute. Remove and reserve.</li>
					<li>Remove sliced rice cake from water and dry. In&nbsp;the same wok, heat some more oil and add some salt. Fry rice cake on&nbsp;medium heat. Ensure that all rice cakes are on&nbsp;a&nbsp;single layer, but you probably shouldn&rsquo;t stir too much beyond the first few seconds of&nbsp;cooking. Once both sides are lightly fried, add a&nbsp;tiny splash of&nbsp;soy sauce and stir. Finally, add cabbage/pork belly mixture back. Serve and enjoy!</li>
				</ol>
				<h2>Tips:</h2>
				<ul>
					<li>As&nbsp;with most Chinese cooking, when stir-frying do&nbsp;not be&nbsp;timid with the heat&nbsp;&mdash; always use the maximum heat setting. The only exception is&nbsp;cooking the rice cake, which you don&rsquo;t want to&nbsp;get excessively crispy.</li>
					<li>Soaking the rice cake is&nbsp;critical. Without doing&nbsp;so, the rice cake will be&nbsp;hard and inedible. Most recipes using sliced rice cake actually call for boiling&nbsp;it. Soak at&nbsp;least 15&nbsp;minutes in&nbsp;advance of&nbsp;using, up&nbsp;to&nbsp;several hours in&nbsp;advance.</li>
					<li>Cumin and Chinese pepper powder are certainly not traditional additions. Feel free to&nbsp;tailor your spice usage to&nbsp;your personal preference.</li>
					<li>It&nbsp;is&nbsp;really important that you season each and every component of&nbsp;the dish, with both soy sauce and salt!</li>
					<li>The exact proportions aren&rsquo;t really that important. I&nbsp;typically use around 1/4 pound pork belly, 500 calories worth of&nbsp;rice cake, and a&nbsp;lot of&nbsp;cabbage. Feel free to&nbsp;adjust as&nbsp;necessary (although you should also adjust seasoning accordingly!).</li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			` 
		},
		{
			label: "Braised Short Ribs",
			cat: "main", //Заюзал кей
			img: "assets/images/dishes/shortribs.jpg",
			desc: `
				<h2>Description</h2>
					<p>Ever since&nbsp;I had braised short ribs for the first time at&nbsp;The Waterfield Kitchen in&nbsp;Winchester (They are the absolutely best&nbsp;&mdash; juicy, moist, buttery&nbsp;&mdash; definitely recommend trying it&nbsp;at&nbsp;some point! Last year they had a&nbsp;Restaurant Week deal, so&nbsp;keep an&nbsp;eye out for that...), I&nbsp;have always wanted to&nbsp;try and replicate that amazing dish. This is&nbsp;my&nbsp;first attempt, and certainly didn&rsquo;t compare to&nbsp;the one&nbsp;I had at&nbsp;TWK, but was still really good!</p>
					<p>Total time: ~3-4 hours</p>
					<p>Author: Brian Xie</p>
				<h2>Ingredients</h2>
				<ul>
					<li>Short ribs</li>
					<li>Onions, carrots, celery, garlic</li>
					<li>Red wine, tomato paste, beef stock</li>
					<li>Bay leaf, thyme, parsley</li>
					<li>Salt, black pepper</li>
				</ul>
				   <h2>Method</h2>
				<ol>
					<li>Prep: roughly chop celery, onion, and carrot. Peel and lightly smash garlic. Generously salt and pepper short ribs on&nbsp;all sides.</li>
					<li>In&nbsp;a&nbsp;dutch oven, heat some olive oil over high heat until almost smoking. Thoroughly brown all sides of&nbsp;short ribs. &laquo;No&nbsp;color, no&nbsp;flavor!&raquo;&nbsp;&mdash; Gordon Ramsay</li>
					<li>Remove short ribs from pot. Reduce heat down to&nbsp;medium and saute the onions, carrots, celery, and garlic, for maybe 5-8&nbsp;minutes. Season with salt.</li>
					<li>Prepare the braising liquid: Add a&nbsp;couple tablespoons of&nbsp;tomato paste. Add red wine, beef stock, bay leaf, thyme. Thoroughly scrape the bottom to&nbsp;ensure the caramelized bits from the short ribs are incorporated into the braising liquid. Bring up&nbsp;to&nbsp;a&nbsp;boil.</li>
					<li>Return short ribs along with any accumulated juices into pot. Cover and bring heat down to&nbsp;a&nbsp;simmer. Cook for at&nbsp;least several hours.</li>
					<li>Test doneness by&nbsp;running a&nbsp;fork through the short ribs&nbsp;&mdash; they should be&nbsp;fork tender. Serve on&nbsp;top of&nbsp;mashed potatoes, polenta, risotto, cauliflower puree, or&nbsp;whatever else you prefer.</li>
					<li>Make a&nbsp;sauce by&nbsp;taking some braising liquid and reducing it&nbsp;down until the desired consistency is&nbsp;achieved, and spoon it&nbsp;over the short ribs. Top with a&nbsp;little chopped parsley. Enjoy!</li>
				</ol>
				<h2>Tips:</h2>
				<ul>
					<li>I&rsquo;m intentionally being vague with ingredient amounts because it&nbsp;depends largely on&nbsp;the pot you&rsquo;re using and the amount of&nbsp;short rib you&rsquo;re cooking.</li>
					<li>Most recipes I&rsquo;ve seen actually cook the short rib in&nbsp;the oven instead of&nbsp;on&nbsp;the stovetop. This probably works better, but since my&nbsp;dutch oven isn&rsquo;t oven-safe I&nbsp;couldn&rsquo;t do&nbsp;this.</li>
					<li>It&nbsp;is&nbsp;very important that you cook this slowly on&nbsp;low heat. Do&nbsp;not try to&nbsp;cheat the time. Short rib has a&nbsp;lot of&nbsp;connective tissue, and slow, gentle cooking is&nbsp;the best way to&nbsp;turn that into a&nbsp;juicy delight.</li>
				</ul>
			` 
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