const questions = [
	{
		question: "Який варіант роботи з податками найкращий?",
		answers: [
			"Віддавати всі податки державним органам і нехай вони розпоряджаються (так, як зараз)",
			"Дозволяти громадянам самостійно розподіляти податки по категоріях потреб",
			"Ділити відповідальність між державою та громадянами"
		],
	},
	{
		question: "Якби ви могли вибирати, якій організації віддавати частину від свого податку, то спрямували б його…",
		answers: [
			"Релігійній організації",
			"Нерелігійній громадській або благодійній організації",
			"Особисто на рахунок когось з активістів",
			"Без змін, лише державі у бюджет"
		],
	},
	{
		question: "Скільки відсотків від нашого податку варто/можна відраховувати суспільно-корисним організаціям?",
		answers: [
			"Від 1% до 2% від мого податку",
			"Від 10% до 20% мого податку",
			"Більше 20%",
			"Не вважаю потрібним щось відраховувати частику суспільно-корисним організаціям"
		],
	},
	{
		question: "У 2012 році у Польщі вже як 6 років працював механізм відсоткового відрахування. Як думаєте, " +
			"скільки поляків скористались у цей рік можливістю відрахувати 1% від свого податку суспільно-корисним " +
			"організаціям?",
		answers: [
			"300  тисяч громадян Польщі",
			"2 мільйони громадян Польщі",
			"11 мільйонів громадян Польщі",
			"800 тисяч громадян Польщі"
		],
	},
	{
		question: "Який висновок вам ближчий щодо можливості віддавати 2% від податку?",
		answers: [
			"Я буду творити пряму демократію!",
			"Не терпиться відібрати ті громадські організації, які працюють над важливими саме для мене проблемами!",
			"Розподіляти податки має продовжувати держава, я не буду втручатись.",
			"Ініціатива хороша, але я не вірю в ефективність громадських організацій"
		],
	},
	{
		question: "Чи ви б розповіли про механізм відсоткового відрахування близьким вам людям?",
		answers: [
			"Однозначно так, їм потрібно знати про можливість самостійно вибирати ціль для 2% свого податку",
			"Скоріш так, ніж ні",
			"Скоріш ні, ніж так",
			"Точно ні, вони не будуть нічого робити"
		],
	},
	{
		question: "Чи ви знаєте суспільно-корисні організації, які хотіли б підтримати відраховуючи 2% від своїх " +
			"податків їм?",
		answers: [
			"Так!",
			"Ні, але я загуглю такі, що відповідатимуть моїм пріоритетам",
			"Знаю, але не довіряю громадським організаціям",
			"Не знаю, і не вважаю за потрібне знати"
		],
	},
	{
		question: "Чи ви готові в найближчий час почати відраховувати 2% вашого податку суспільно-корисним?",
		answers: [
			"Так, звісно!",
			"Напевне…",
			"Ні, ви все ще мене не переконали =("
		],
	},
	{
		question: "Чи використали поляки механізм відсотового відрахування у їхній країні, щоб допомогти українцям " +
			"після 24 лютого?",
		answers: [
			"Так, без сумніву!",
			"Ні, це неможливо",
			"Напевно?"
		],
	},
	{
		question: "Чи вдасться українцям також запровадити механізм відсоткового відрахування? І розпоряджатися " +
			"часткою податків, яку їм довіряє держава, самостійно.",
		answers: [
			"Звісно, ми повторимо шлях європейських країн!",
			"Так, але усе буде не так успішно",
			"Так, і це буде ще успішніше",
			"Ні, ми не запровадимо механізм відсоткового відрахування"
		],
	},
];
const interesting = [
	{
		'text': 'У багатьох країнах, як і в Україні, податки розподіляють виключно державні органи. Але у деяких країнах' +
			' участь у розподілі податків беруть і громадяни. Можливо це через так званий механізм відсоткового ' +
			'відрахування. Працює це так: держава довіряє громадянам зафіксований законом відсоток від податку. А ' +
			'громадяни його можуть розподілити серед неприбуткових громадських, благодійних та релігійних  ' +
			'організацій, які вирішують важливі для громадян проблеми.'
	} ,
	{
		'text': 'Відраховувати частину від свого податку організаціям, яким довіряють, можуть громадяни Литви, Польщі, Угорщини,' +
			' Італії, Угорщини, Словаччини, Румунії та Молдови.  \n' +
			'\n' +
			'В Україні механізм відсоткового відрахування у майбутньому можливий також. Команда аналітично-адвокаційної' +
			' організації «Центр демократії та верховенства права» працює над впровадженням законопроєкту, який дозволить ' +
			'підтримувати роботу громадських, благодійних та релігійних організацій.'
	} ,

	{
		'text': 'В Україні планують зафіксувати додаткове право віддавати 2% від податку суспільно-корисним організаціям. У ' +
			'Польщі це 1%, у Молдові – також 2%.'
	},
	{
		'text': 'У 2004 році, на старті прийняття механізму відсоткового відрахування, лише 80 тисяч поляків довірили 1% свого' +
			' податку громадським організаціям. Але з часом кількість громадян Польщі, які почали брати участь у розподілі ' +
			'податку, почала значно зростати. Польські експерти зазначають, що це не пожертва, а виважене рішення громадян,  ' +
			'які громадські організації потрібно підтримати у їхній роботі над соціальними проблемами.'
	},
	{
		'text': 'Усі організації, які потраплять у список доступних до відрахування 2% податку, будуть ретельно' +
			' перевіряти. Окрім цього заплановані проміжні звіти щодо розподілення коштів.'
	},
	{
		'text': 'Якщо 5% населення України скористаються можливістю спрямувати 2% від свого податку організаціям' +
			' громадянського суспільства, то сформують суму у розмірі 160 757,1 млн грн. Це значною мірою допоможе ' +
			'суспільно-корисним локальним та всеукраїнським організаціям відновлювати Україну після перемоги у війні.'
	},
	{
		'text': 'Станом на 2020 рік, 46% українців вважали, що громадський сектор існує недарма та приносить користь' +
			' країні. 30% громадян готові підтримувати суспільно-корисні організації частиною своїх податків. На ' +
			'відміну від сусідньої Польщі, у нас такої можливості поки не існує. Проте ми вже близько до впровадження' +
			' механізму відсоткового відрахування в Україні.'
	},
	{
		'text': 'В Італії запровадили механізм відсоткового відрахування ще у 1985 році. Зараз італійці та італійки' +
			' таким чином продовжують підтримувати церковні громади, державні установи, або громадські організації.'
	},
	{
		'text': 'Загальновідомо, що польський народ став міцною опорою для українців, що були змушені покинути ' +
			'свої домівки. Російська агресія стала проблемою №1 для них також. А тому багато поляків та польок почали' +
			' спрямовувати доступний 1% від свого податку громадським організаціям, які допомагають українським ' +
			'біженцям. Ось так вони здійснили пряму демократію обравши ту проблему, яку вважають важливою.'
	},
];
const experts = [
	{
		'question': 0,
		'expertCount': 1,
		'info': [{
			'name': 'Гліб Колесов',
			'position': 'юрист',
			'imagePath': 'experts_images/GlibKolesov.webp',
			'comment': 'Механізм відсоткового відрахування – потрібний для України інструмент розвитку організацій' +
				' громадянського суспільства. Окрім податкової просвіти він додатково посилить конкуренцію і розвиток' +
				' організацій громадянського суспільства, які залучатимуть громадян до реалізації ініціатив та проєктів.\n' +
				'\n' +
				'Особливу роль механізм матиме на місцях, де залучити донорські кошти часом важко через процедури' +
				' подачі заявок тощо.\nПриклади успішної реалізації механізму відсоткового відрахування — Угорщина, Польща, ' +
				'Словаччина та Молдова. Механізм став засобом, за допомогою якого громадяни отримали можливість ' +
				'самостійно розпоряджатися частиною своїх податків та реалізовувати проєкти за допомогою ОГС.'
		}]
	},
	{
		'question': 1,
		'expertCount': 1,
		'info': [{
			'name': 'Роман Грищук',
			'position': 'народний депутат',
			'imagePath': 'experts_images/RomanGryshchyuk.jpeg',
			'comment': 'Ідея механізму відсоткового відрахування вже має підтримку у Верховній Раді України. ' +
				'В Україні є дві суперсили: громадянське суспільство, яке тягне Україну вперед у розвитку, і культура' +
				' підтримки, яка зараз розвинулася з шаленою швидкістю. В перші місяці війни майже половину потреб' +
				' забезпечення армії закривали за рахунок волонтерів, донейтів. Ціннісно ми вже переросли цей механізм.' +
				' Це буде від держави додаткова підтримка громадянського сектору, а благодійні волонтерські організації' +
				' можуть швидко, гнучко вирішувати ті проблеми, до яких держава доходить дуже повільно. Це механізм' +
				' прямого народовладдя, коли безпосередньо частину свого податку кожен може спрямувати сам відповідно' +
				' до свого світобачення тій організації, якій більше довіряє'
		}]
	},
	{
		'question': 2,
		'expertCount': 1,
		'info': [{
			'name': 'Максим Лациба',
			'position': 'керівник програми розвитку громадянського суспільства УНЦПД',
			'imagePath': 'experts_images/MaksymLaciba.jpg',
			'comment': 'Відсотковий механізм дозволить об’єднати зусилля держави і громадянського суспільства для' +
				' розвитку України. У більшості країн ЄС та в Молдові є такий механізм. Закликаю усіх депутатів' +
				' підтримати обидва законопроекти: цк і народовладдя, і діджиталізація, і євроінтеграція водночас.'
		}]
	},
	{
		'question': 3,
		'expertCount': 1,
		'info': [{
			'name': 'Олексій Жмерецький',
			'position': 'народний депутат',
			'imagePath': 'experts_images/OleksiiJh.jpeg',
			'comment': 'Механізм відсоткового відрахування є дуже хорошим пазлом у екосистемі участі громадян в ' +
				'управлінні власною країною як її бенефіціарів'
		}]
	},
	{
		'question': 4,
		'expertCount': 1,
		'info': [{
			'name': 'Володимир Шейгус',
			'position': 'виконавчий директор ІСАР Єднання',
			'imagePath': 'experts_images/VolodymyrSheygus.jpg',
			'comment': 'Відсотковий механізм стане одним зі способів підтримати громадські організації, які несуть' +
				' суспільну користь. Ми знаємо, що громадські організації з’являються там, де є потреба, тож надають' +
				' соціальні послуги верствам, які їх потребують. Також громадські організації представляють і' +
				' адвокатують інтереси людей. Вони можуть навіть брати участь у інфраструктурних проєктах, коли' +
				' громадські організації зводять ті ж дитячі майданчики. Цей механізм стане елементом прямої ' +
				'демократії для громадян.'
		}]
	},
	{
		'question': 5,
		'expertCount': 1,
		'info': [{
			'name': 'Олеся Холопік',
			'position': 'директорка Центру демократії та верховенства права',
			'imagePath': 'experts_images/OlesiiaHolopyik.webp',
			'comment': 'Законопроєкти, що ми обговорюємо, є результатом великої кількості обговорень та міжнародного' +
				' досвіду. В умовах війни ми бачимо, що громадський сектор є вагомою підтримкою як для військових,' +
				' так і для громадян в тому, щоб спільно боротися і долати негативні наслідки війни. Ми думаємо про' +
				' те, щоб підтримувати через цей механізм неприбутковий сектор, який в подальшому продовжить' +
				' підтримувати суспільство, військових і всіх громадян'
		}]
	},
	{
		'question': 6,
		'expertCount': 3,
		'info': [
			{
			'name': 'Ярина Вишенська',
			'position': 'керівниця благодійного фонду «Сильні»',
			'imagePath': 'experts_images/Yarina.jpeg',
			'comment': 'Наш фонд допомагає людям, які пережили сексуальне насилля під час війни і кожного тижня ми' +
				' маємо знаходити кошти на лікарів, психологів та юристів. Перетворення законопроєкту про механізм' +
				' відсоткового відрахування у реальність допоможе нам та іншим суспільно-корисним організаціям' +
				' продовжувати ефективно долати наслідки війни, адже благодійність перетвориться на системну філантропію.'
			}
		]
	},
	{
		'question': 7,
		'expertCount': 1,
		'info': [{
			'name': 'Олег Карпенко',
			'position': 'фонд «Повернись живим»',
			'imagePath': 'experts_images/Oleh.jpg',
			'comment': 'Це дійсно корисна ініціатива! Ми б хотіли, щоб процес затвердження організацій, які' +
				' будуть отримувати відсоток від податку громадян був максимально жорстким і з дотриманням всіх ' +
				'умов доброчесності. Тоді механізм відсоткового відрахування буде приносити результати.\n' +
				'У фонді «Повернись живим» ми вже задумувались над потребою такого механізму. До слова, ми плануємо' +
				' плануємо відкривати офіс організації у США, де  аналогічний механізм відсоткового відрахування ' +
				'уже функціонує. Це хороша історія, бо люди мають змогу фінансувати важливі для них речі.\n' +
				'Ще один позитивний момент: у громадян постійно виникає питання, куди йде сплачений податок. Ніхто' +
				' до кінця не розуміє, що відбувається з грошима далі. В той час як у такі організації як наша є ' +
				'прозорими та гнучкими. Я точно можу говорити за фонд «Повернись живим»: ми маємо прозорий механізм' +
				' звітності, тож кожен користувач інтернету може будь-коли дізнатись, куди витрачаються внески до ' +
				'фонду.\n' +
				'Коли  механізм відсоткового відрахування буде функціонувати – люди отримають впевненість у тому,' +
				' що їхній податок іде на суспільне благо.\n'
		}]
	},
	{
		'question': 8,
		'expertCount': 1,
		'info': [{
			'name': 'Анна Ісічко',
			'position': 'менеджерка проєктів ГО “Центр демократії та верховенства права”',
			'imagePath': 'experts_images/AnnaIsichko.png',
			'comment': 'Це важливий механізм для підтримки громадянського суспільства. Він відкриває можливості,' +
				' важливі для усвідомлення керування своїми податками, і дуже допоможе нам усім підтримувати саме ті' +
				' організації, у цінності та репутацію яких віримо. Віримо, що ще один протестований та верифікований' +
				' європейськими державами механізм нарешті запрацює в Україні!'
		}]
	}
];

// test variables
let score = 0;	// result
let currentPoint = 0;	// question answer points
let questionIndex = 0; 	// question number
let addedPoints = false;

// containers getting
const headerContainer = document.querySelector('#header');
const listContainer = document.querySelector('#list');
const counterContainer = document.querySelector('#counter');
const submitNextPageBtn = document.querySelector('#button-next-page');
const interestingInfo = document.querySelector('#interesting');
const interestingText = document.querySelector('#interesting-text');
const userInfo = document.querySelector('#user-info');
const quizContainer = document.querySelector('#quiz')

submitNextPageBtn.onclick = checkAnswer;

// container headers clearing
function clearContainer() {
	submitNextPageBtn.innerHTML = '';
	headerContainer.innerHTML = '';
	listContainer.innerHTML = '';
	counterContainer.innerHTML = '';
	interestingInfo.innerHTML = '';
	interestingText.innerHTML = '';
	userInfo.innerHTML = '';
}

// question and answers showing
function showQuestion() {
	// question form cleaning
	clearContainer();

	// get current question
	let question = questions[questionIndex];

	counterContainer.innerHTML = `
	<div class="counter" id="counter">
		%count%/10
	</div>
	`.replace('%count%', questionIndex+1);

	// insert question title
	const headerTemplate = `<div class="title">%questionText%</div>`;
	headerContainer.innerHTML = headerTemplate.replace('%questionText%', question.question);

	let counter = 1;

	// mapping of answers
	for(let answer of question.answers) {
		const questionTemplate =
			`<li>
				<button id="%id%" value="%number%" onclick="checkButton(this)">%answerText%</button>
			</li>`

		// add answer to the answers list
		listContainer.innerHTML += questionTemplate
			.replace('%number%', counter)
			.replace('%answerText%', answer)
			.replace('%id%', 'hidden-answer'+counter);
		counter += 1;
	}
}

showQuestion();

function checkButton(elem) {
	if (addedPoints === false) {
		currentPoint = elem.value;
		elem.style.background = '#55274F';
		elem.style.color = '#fff';
		elem.style.boxShadow = '0 4px 4px rgba(0, 0, 0, 0.25)';
		elem.style.borderRadius = '25.54px';
		const isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent);

		if (!isMobile) {
			elem.style.width = '654';
			elem.style.height = '54px';
		} else {
			elem.style.width = '321px';
			elem.style.height = '59px';
		}

		addedPoints = true;
		showAdditionalInfo();
	} else {
	}
}


function showAdditionalInfo() {

	if(questionIndex !== questions.length - 1){

		submitNextPageBtn.innerHTML = `
		<div id="button-next-page">
			<button class="quiz-submit submit-second" id="submit">ПРОДОВЖИТИ ТЕСТ</button>
		</div>
		`;

		interestingInfo.innerHTML = `
		<div class="interesting-info">
			ЦІКАВО:
		</div>
		`;

		interestingText.innerHTML = `
		<div id="interesting-text">
			<div class="interesting-info text">
				%text%
			</div>
		</div>
		`.replace('%text%', interesting[questionIndex].text);

		const expertCommentary = experts[questionIndex]

		for(let i=0; i < parseInt(expertCommentary.expertCount); i++){

			if (expertCommentary.expertCount > 1 && i !== 0) {
				userInfo.innerHTML += `
			<p id="user-image">
				<img src="%userImage%" class="ant-image-mask" alt="User image">
			</p>
		
		 	<div class="user-name">
		 		%userName%
		 	</div>
		
			<div class="user-position">
		 		%userPosition%
		 	</div>
		
		 	<div class="commentary">
		 		%userCommentaries%
		 	</div>
			`
					.replace('%userImage%', expertCommentary["info"][i].imagePath)
					.replace('%userCommentaries%', expertCommentary["info"][i].comment)
					.replace('%userName%', expertCommentary["info"][i].name)
					.replace('%userPosition%', expertCommentary["info"][i].position);
			}
			else {
				userInfo.innerHTML = `
			<p id="user-image">
				<img src="%userImage%" class="ant-image-mask" alt="%userImage%">
			</p>
		
		 	<div class="user-name">
		 		%userName%
		 	</div>
		
			<div class="user-position">
		 		%userPosition%
		 	</div>
		
		 	<div class="commentary">
		 		%userCommentaries%
		 	</div>
			`
					.replace('%userImage%', expertCommentary["info"][i].imagePath)
					.replace('%userCommentaries%', expertCommentary["info"][i].comment)
					.replace('%userName%', expertCommentary["info"][i].name)
					.replace('%userPosition%', expertCommentary["info"][i].position);
			}
		}
	}
	else {
		submitNextPageBtn.innerHTML = `
		<div id="button-next-page">
			<button class="quiz-submit submit result" id="submit">РЕЗУЛЬТАТ!</button>
			<div class="result-text">
				Дякуємо за проходження тесту!
			</div>
		</div>
		`;
	}
}


function checkAnswer() {

	if(currentPoint !== 0){
		score += parseInt(currentPoint);
		if (questionIndex !== questions.length - 1) {
			questionIndex += 1;
			currentPoint = 0;
			addedPoints = false;
			clearContainer();
			showQuestion();
		} else {
			// it was the last question
			clearContainer();
			showResults();
		}
	} else {
		submitNextPageBtn.blur();
	}
}

function showResults() {

	quizContainer.innerHTML = '';

	const resultsTemplate = `
	<div class="second-result-additional">
	<div class="result-text-final">%message%</div>
	<div class="result-additional">Ось як усе буде 👇</div>
	<video class="video" controls="controls" poster="">
	   <source src="" type='video/ogg; codecs="theora, vorbis"'>
	</video>
	<button class="share" id="copy" onclick="copyText()">ПОШИРИТИ ТЕСТ</button>
	</div>

	`;

	let message;
	if (score >= 10 && score <=16){
		message = "Вау, ви творець прямої демократії! Схоже, що навіть вже знаєте кому будете відраховувати 2% від " +
			"вашого податку.";
	}
	else if (score > 16 && score <= 24) {
		message = "Ви однозначно легко приймаєте зміни, особиливо такі позитивні, як право розподіляти частину " +
			"вашого податку самостійно.";
	} else {
		message = " А ви полюбляєте старовину… Витриману роками, але чи надійну? Вам варто розібратись чи " +
			"традиційний спосіб розподілу податків справді надійний👇";
	}
	quizContainer.innerHTML = resultsTemplate
		.replace('%message%', message)
}

function copyText() {
	// Get the text field
	let copyText = `Я творець прямої демократії! Перевір, чи ви готові самостійно розпоряджатись податками за 
	посиланням: place_for_link`;
}
