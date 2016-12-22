(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 524,
	height: 768,
	fps: 30,
	color: "#CCCCCC",
	opacity: 1.00,
	manifest: []
};



lib.ssMetadata = [];


// symbols:



(lib.twit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtvO7QjEg7iuhvQA+AHA9AAQCxAAClg6QChg4CGhpQingEiFhkQiChigyibQAxAKAwAAQBEAABDgSQixgkh0iMQh3iMAAi5IAAgHQBuA9B7ADQhphGg8hvQg/hyAAiEQAAiLBGh2QDADsEPCMQEXCQE6APQgNg4AAg9QAAjUCUiWQCWiWDVAAQBtAABjArQBfAqBHBNQCsgiCahbQgcBZg7BKQg6BJhRAwQCbgTCMg+QhpCciWBuQABAhAAAhQAAEDhgD9QhiEIi2DOQjDDdkHB6QkcCElTAAQjWAAjLg8g");
	this.shape.setTransform(37.5,37.5,0.188,0.188);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1DA1F2").s().p("A/PfPMAAAg+eMA+eAAAMAAAA+eg");
	this.shape_1.setTransform(37.5,37.5,0.188,0.188);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,75,75);


(lib.tekijatbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("tietoa tekijöistä", "italic bold 27px 'Yleweb'", "#07FAF2");
	this.text.lineHeight = 41;
	this.text.lineWidth = 196;
	this.text.setTransform(2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#07FAF2").ss(1,1,1).p("AvFAAIeLAA");
	this.shape.setTransform(98.4,36.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#07FAF2").s().p("Aw6D8IAAn3MAh1AAAIAAH3g");
	this.shape_1.setTransform(106.8,24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,43.1);


(lib.suljebtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("sulje", "italic bold 27px 'Yleweb'", "#07FAF2");
	this.text.textAlign = "center";
	this.text.lineHeight = 41;
	this.text.lineWidth = 196;
	this.text.setTransform(100,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#07FAF2").ss(1,1,1).p("AkiAAIJEAA");
	this.shape.setTransform(98.5,36.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#07FAF2").s().p("AmID8IAAn3IMRAAIAAH3g");
	this.shape_1.setTransform(106.8,24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,43.1);


(lib.fbv = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjvRsIAAwJIlcAAIAAmRIFcAAIAAkpQAAj9CQiOQCIiJDsAAQBiAABjAGQBMAFAmAFIAAFoIjVAAQh1AAguA2QglAsAABiIAAEBIGPAAIg0GRIlbAAIAAQJg");
	this.shape.setTransform(46.7,43.1,0.28,0.28,0,0,0,0.2,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#49629C").s().p("AyhU2Qg+AAgrgrQgrgrAAg9MAAAglFQAAg9ArgrQArgrA+AAMAlDAAAQA+AAArArQAqArABA9MAAAAlFQgBA9gqArQgrArg+AAg");
	this.shape_1.setTransform(37.5,37.4,0.28,0.28,0,0,0,0.3,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74.8,74.8);


(lib.aloita = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("jatka", "44px 'Yleweb'", "#FFFFFF");
	this.text.lineHeight = 66;
	this.text.lineWidth = 129;
	this.text.setTransform(10,-8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ahvh1IDgB1IjhB2g");
	this.shape.setTransform(156.3,24.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AxFFgIAAq/MAiLAAAIAAK/g");
	this.shape_1.setTransform(109.5,28.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8,-10,159.6,67.7);


(lib.vast_maalis = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.seuraava = new lib.aloita();
	this.seuraava.setTransform(40.6,655.1,1,1,0,0,0,49.6,14.3);
	new cjs.ButtonHelper(this.seuraava, 0, 1, 2, false, new lib.aloita(), 3);

	this.oikein = new cjs.Text("Oikein!", "bold 45px 'Yleweb'", "#FFFFFF");
	this.oikein.name = "oikein";
	this.oikein.lineHeight = 67;
	this.oikein.lineWidth = 472;
	this.oikein.setTransform(2,-18.6);

	this.vast = new cjs.Text("Oikea vastaus on yrittää murtautua Ateneumiin. Ammuskelu liittyi vallankumouspäivän levottomuuksiin. Kumouksellisten joukkojen liipasinsormi oli herkässä ja väärät hälytykset johtivat toistuviin ammuskeluihin.  Vallankumousta ihmetelleet siviilit joutuivat ammuskelun alettua murtautumaan Kansallisteatterin ja Ateneumin suojiin. Lähikaduille paenneet saivat vastaansa tuhansien ihmisten kaaoksen sekä uusia kahakoita. Ateneumin portaille jääminen oli vaihtoehdoista vaarallisin, sillä ammuskelu oli hetken aikaa intensiivistä ja harhaluoteja viuhui ilmassa. Lopulta tilanne osoittautui vääräksi hälytykseksi ja järjestys palasi torille. Kaikkiaan venäläiset vallankumoukselliset sotilaat surmasivat päivän aikana Helsingissä toistasataa upseeria. ", "22px 'Arial'", "#FFFFFF");
	this.vast.name = "vast";
	this.vast.lineHeight = 27;
	this.vast.lineWidth = 456;
	this.vast.setTransform(2,59.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.vast},{t:this.oikein},{t:this.seuraava}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-20.6,477.4,719.1);


(lib.pointsit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.kuvatxt = new cjs.Text("", "16px 'Arial'", "#CCCCCC");
	this.kuvatxt.name = "kuvatxt";
	this.kuvatxt.lineHeight = 20;
	this.kuvatxt.lineWidth = 468;
	this.kuvatxt.setTransform(4,730.9);

	this.twitter = new lib.twit();
	this.twitter.setTransform(330.4,363.3,1,1,0,0,0,37.5,37.5);
	new cjs.ButtonHelper(this.twitter, 0, 1, 1);

	this.fb = new lib.fbv();
	this.fb.setTransform(212.7,363.3,1.003,1.003,0,0,0,37.4,37.4);
	new cjs.ButtonHelper(this.fb, 0, 1, 1);

	this.tekijat = new lib.tekijatbtn();
	this.tekijat.setTransform(245.8,601,1,1,0,0,0,100,21.5);
	new cjs.ButtonHelper(this.tekijat, 0, 1, 2, false, new lib.tekijatbtn(), 3);

	this.text = new cjs.Text("jaa:", "bold 44px 'Yleweb'", "#FFFFFF");
	this.text.lineHeight = 66;
	this.text.lineWidth = 100;
	this.text.setTransform(32.3,332);

	this.textLinkki = new cjs.Text("Tiedettä kaupungissa: Tieteen aikakone -tapahtuma Helsingissä 11.-12.1.2017.", "bold 24px 'Yleweb'", "#FFFFFF");
	this.textLinkki.lineHeight = 29;
	this.textLinkki.lineWidth = 483;
	this.textLinkki.setTransform(4,482);

	this.textLinkki.addEventListener("click", goURL, false);
	this.textLinkki.cursor = "pointer";

	function goURL(){
    window.open("http://www.tieteenpaivat.fi/fi/ohjelma-2017/tiedetta-kaupungissa");
	};

	this.endtxt = new cjs.Text("10-8   Onnittelut! Olisit ollut erinomainen neuvonantaja Helanderin perheelle. Perhe olisi selviytynyt mainiosti vuoden 1917 levottomissa ja poikkeuksellisissa oloissa Helsingissä.", "24px 'Arial'", "#FFFFFF");
	this.endtxt.name = "endtxt";
	this.endtxt.lineHeight = 29;
	this.endtxt.lineWidth = 483;
	this.endtxt.setTransform(4,97);

	this.pist = new cjs.Text("9/10 Onnittelut!", "bold 52px 'Yleweb'", "#07FAF2");
	this.pist.name = "pist";
	this.pist.textAlign = "center";
	this.pist.lineHeight = 77;
	this.pist.lineWidth = 486;
	this.pist.setTransform(247.1,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pist},{t:this.endtxt},{t:this.text},{t:this.textLinkki}, {t:this.tekijat},{t:this.fb},{t:this.twitter},{t:this.kuvatxt}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,0,490.2,753);


(lib.kys_maalis = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.kuukausi = new cjs.Text("Tammikuu", "bold 45px 'Yleweb'", "#FFFFFF");
	this.kuukausi.name = "kuukausi";
	this.kuukausi.lineHeight = 67;
	this.kuukausi.lineWidth = 451;
	this.kuukausi.setTransform(2,-7);

	this.timeline.addTween(cjs.Tween.get(this.kuukausi).wait(1));

	// Layer 1
	this.kuvatxt = new cjs.Text("", "16px 'Arial'", "#CCCCCC");
	this.kuvatxt.name = "kuvatxt";
	this.kuvatxt.lineHeight = 20;
	this.kuvatxt.lineWidth = 446;
	this.kuvatxt.setTransform(2,716.9);

	this.vastaa = new lib.aloita();
	this.vastaa.setTransform(41.6,664.8,1,1,0,0,0,49.6,14.3);
	new cjs.ButtonHelper(this.vastaa, 0, 1, 2, false, new lib.aloita(), 3);

	this.v3 = new cjs.Text("-Paeta lähikaduille", "bold 27px 'Arial'", "#07FAF2");
	this.v3.name = "v3";
	this.v3.lineHeight = 30;
	this.v3.lineWidth = 401;
	this.v3.setTransform(2,569.8);

	this.v2 = new cjs.Text("-Yrittää murtautua Ateneumiin sisään", "bold 27px 'Arial'", "#07FAF2");
	this.v2.name = "v2";
	this.v2.lineHeight = 30;
	this.v2.lineWidth = 402;
	this.v2.setTransform(2,500.9);

	this.kys = new cjs.Text("Seitsemännentoista päivän aamuna Per Helander ja perheen esikoinen toteavat etteivät raitiovaunut kulje ja koulut ovat kiinni. Perhe lähtee ihmisvirran mukana kaupungille katsomaan mitä on tapahtumassa. Vastaan tulee Marseljeesia soittavia sotilassoittokuntia ja vallankumousta juhlivia sotilaita. Helanderit päätyvät Ateneumin portaille ja kurkistelevat Rautatientorille kokoontuneita valtavia sotilasosastoja. Yhtäkkiä kuuluu ammuskelua ja luoteja kimpoilee rakennusten seinistä. Syntyy paniikki. Mitä perheen kannattaa tehdä?", "22px 'Arial'", "#FFFFFF");
	this.kys.name = "kys";
	this.kys.lineHeight = 27;
	this.kys.lineWidth = 452;
	this.kys.setTransform(2,68.6);

	this.v1 = new cjs.Text("-Jäädä paikalleen", "bold 27px 'Arial'", "#07FAF2");
	this.v1.name = "v1";
	this.v1.lineHeight = 30;
	this.v1.lineWidth = 401;
	this.v1.setTransform(2,468.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.v1},{t:this.kys},{t:this.v2},{t:this.v3},{t:this.vastaa},{t:this.kuvatxt}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-9,456.1,745.8);


(lib.credits = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Ohjaavat opettajat:\nLauri Huikuri, Jaakko Ruuttunen\n\nTekninen toteutus:\nLauri Huikuri", "22px 'Arial'", "#FFFFFF");
	this.text.lineHeight = 27;
	this.text.lineWidth = 460;
	this.text.setTransform(2,470);

	this.text_1 = new cjs.Text("Orvasto, Topias\nRantala, Olli\nSiitonen, Henna\nStarck, Joni\nSundström, Kristiina\nTeinilä, Saara\nTuomisto, Riina\nVarila, Johnny\nViljanen, Jami", "22px 'Arial'", "#FFFFFF");
	this.text_1.lineHeight = 27;
	this.text_1.lineWidth = 213;
	this.text_1.setTransform(249,184);

	this.text_2 = new cjs.Text("Haverinen, Joonas\nHyypiä, Herkko\nKökkö, Karoliina\nLaine, Mikael\nLeppänen, Iida\nLoukola, Laura\nMielonen, Katja\nMäkirinta, Tiia\nMäntynen, Eemil\nNiemi, Matilda", "22px 'Arial'", "#FFFFFF");
	this.text_2.lineHeight = 27;
	this.text_2.lineWidth = 210;
	this.text_2.setTransform(2,184);

	this.sulje = new lib.suljebtn();
	this.sulje.setTransform(242.2,657.8,1,1,0,0,0,100,21.5);
	new cjs.ButtonHelper(this.sulje, 0, 1, 2, false, new lib.suljebtn(), 3);

	this.text_3 = new cjs.Text("Kysymykset: \nSamu Nyström ja Seppo Heikkinen, Yle\n\nKuvitus ja animaatio: \nMetropolia AMK\ngraafisen suunnittelun opiskelijat:", "22px 'Arial'", "#FFFFFF");
	this.text_3.lineHeight = 27;
	this.text_3.lineWidth = 462;
	this.text_3.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_3},{t:this.sulje},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,466,679.4);


// stage content:
(lib.ui = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
		var mc = this;
		//createjs.Tween.get(this).set({alpha:0}).wait(2000).to({alpha: 1}, 500, createjs.Ease.linear);


		this.aloita.addEventListener("click", fl_MouseClickHandler.bind(this));

		function fl_MouseClickHandler()
		{
			go(1);
		}

		//transitio

		function go(frame) {
			vidFadeOut();
			var target = mc;
			var tween = createjs.Tween.get(target, {
				loop: false
			})
				.to({
					alpha: 0
				}, 500, createjs.Ease.linear)
				.call(handleComplete)
				.wait(2000)
				.call(handleComplete2)
				.to({
					alpha: 1
				}, 500, createjs.Ease.linear);

			function handleComplete(e) {
				currentvid=1;
				playVid();
			}
			function handleComplete2(e) {
				mc.gotoAndStop(frame);
			}
		}
	}
	this.frame_1 = function() {
		var kysymykset=["Seitsemännentoista päivän aamuna Per Helander ja perheen esikoinen toteavat, etteivät raitiovaunut kulje ja koulut ovat kiinni. Perhe lähtee ihmisvirran mukana kaupungille katsomaan mitä on tapahtumassa. Vastaan tulee Marseljeesia soittavia sotilassoittokuntia ja vallankumousta juhlivia sotilaita. \n\nHelanderit päätyvät Ateneumin portaille ja kurkistelevat Rautatientorille kokoontuneita valtavia sotilasosastoja. Yhtäkkiä kuuluu ammuskelua ja luoteja kimpoilee rakennusten seinistä. Syntyy paniikki. Mitä perheen kannattaa tehdä?",
						"Helanderin ovikelloa soittaa puolituttu, joka kertoo tarvitsevansa vaihtorahaa. Hän sanoo olevansa valmis antamaan kahdeksaa markan kolikkoa vastaan kymmenen markan setelin. Tuttu on valmis vaihtamaan rahoja aina 50 markkaan saakka. \n\nKolikoistaan luopumalla Helanderit voisivat ansaita parin päiväpalkan verran! Mitä Per Helanderin olisi viisasta tehdä?",
						"Helanderin perheelle tarjotaan mahdollisuutta palstaviljelyyn, mutta palsta sijaitsee Ruskeasuolla, kaukana Siltasaaresta. Lisäksi palsta sijaitsee vanhalla niityllä, jonka viljelyskuntoon saattaminen tulisi olemaan suuri urakka. Mitä heidän pitäisi tehdä?",
						"Alma on raskaana ja perheen nuorin lapsi oli vasta kolmivuotias. Pienten lasten ja raskaana olevien naisten ravintosuosituksiin kuului tärkeänä osana maito. Tämän takia näille ryhmille jaettiin erityisiä maitokortteja, joilla saattoi ostaa maitoa kaupoista. Jonot olivat kuitenkin pitkiä. Alma saattoi käyttää jonottamiseen korkeintaan neljä tuntia päivässä, mikä sekin oli raskaana olevalle työlästä. Mitä hänen kannattaisi tehdä?",
						"Helanderin perheen perunakellarissa on käynyt varkaita. Perheen pahan päivän varalle varaamat arvokkaat elintarvikkeet ovat poissa. Mitä heidän olisi viisasta tehdä?",
						"Lähikauppaan Siltasaaressa tulee yllättäen voita. Yleisesti on tiedossa, että voitynnyrit on varastettu meijeriliikkeiden varastoista. Mitä heidän kannattaisi tehdä?",
						"Helsinkiläiset olivat tottuneet lyhyisiin vuokrasopimuksiin ja vaihtoivat asuntoaan usein. Syyskuussa Helandereiden vuokrasopimus umpeutuu.Vuokraisäntä tarjoaa heille uutta sopimusta samalla hinnalla, mutta vaatii kuukausittain vuokran verran rahaa kalusteiden käyttämisestä. Kyseessä on ilmiselvä vuokrasäännöstelyn kiertämisyritys. Miten Helanderien tulisi tähän suhtautua?",
						"Kesän ja syksyn pahenevassa elintarvikepulassa lehdissä kohutaan jäkälästä saatavasta pelastuksesta. Viranomaiset käyttävät suuria summia jäkäläjauhojen hankintaan ja kouluja kannustetaan “jäkäläpäivien” järjestämiseen. \n\nHelanderit saavat mahdollisuuden ostaa mustasta pörssistä jäkäläjauhoja koko talven tarpeeksi. Hinta on toki melkoisen kova. Mitä olisi viisasta tehdä?",
						"Marraskuun yleislakon aikana pääkaupungissa kiehuu. Per Helanderin työpaikalle Rautatieasemalle marssii työväen järjestyskaarti aseineen. Kaartilaiset ilmoittavat ottavansa aseman haltuunsa ja vaativat virkamiehiä noudattamaan määräyksiään. \n\nPerin esimies ilmoittaa, että kaartin vaatimuksiin ei saa missään nimessä suostua. Mitä Perin kannattaisi tehdä?",
						"Eduskunta hyväksyy Suomen itsenäisyysjulistuksen 6. joulukuuta. Helanderin perhe haluaa juhlistaa tätä mahdollisimman suuressa joukossa. Minne he menevät juhlimaan?"
						];
		var vaihtoehdot=[["1) Jäädä paikalleen","2) Yrittää murtautua Ateneumiin sisään", "3) Paeta lähikaduille"],
						["1) Suostua tarjoukseen ja vaihtaa rahaa hyvällä vaihtokurssilla ","2) Kieltäytyä vaihdosta", "3) Ehdottaa reiluuden nimissä, että kolikot ja setelit vaihdettaisiin samassa suhteessa "],
						["1) Palstaviljely tarjotulla palstalla olisi ylivoimaisen raskasta, siispä eivät ota palstaa vastaan","2) Ilmoittavat harkitsevansa asiaa ja palaavansa siihen myöhemmin", "3) Tekevät välittömästi vuokrasopimuksen"],
						["1) Hankkia maitokortit ja hakea päivittäinen maitoannos maitokaupasta","2) Pyrkiä hankkimaan maito maaseudun sukulaisten ja tuttavien kautta", "3) Välttää jonot ja ostaa maito mustan pörssin kautta"],
						["1) Selvittää asiaa naapureiden ja lähialueen verkostojen kanssa","2) Kutsua poliisit", "3) Purra vain hammasta ja hyväksyä tilanne"],
						["1) Kieltäytyä ostamasta varastettua tavaraa","2) Ostaa kaikki korttiannokset, koska voita kerrankin oli saatavilla", "3) Hälyttää poliisit lähikauppaan"],
						["1) Hyväksyvät tarjouksen samantien","2) Hylkäävät kieron keinottelijan ja lähtevät etsimään uutta asuntoa", "3) Yrittävät neuvotella vuokraa edullisemmaksi"],
						["1) Ostaa empimättä ","2) Ei vara venettä kaada eli kannattaa ostaa puolet tarjotusta määrästä ", "3) Jäkälä on porojen ruokaa eli on viisasta kieltäytyä käyttämästä rahojaan moiseen "],
						["1) Noudattaa esimiehen käskyä","2) Noudattaa kaartilaisten käskyä", "3) Väistää tilanne ja jäädä tulematta töihin"],
						["1) Senaatintorille","2) Hakaniementorille", "3) Kotiin"]
						];
		var vastaukset=["Oikea vastaus on yrittää murtautua Ateneumiin. Ammuskelu liittyi vallankumouspäivän levottomuuksiin. Kumouksellisten joukkojen liipasinsormi oli herkässä ja väärät hälytykset johtivat toistuviin ammuskeluihin.  Vallankumousta ihmetelleet siviilit joutuivat ammuskelun alettua murtautumaan Kansallisteatterin ja Ateneumin suojiin. Lähikaduille paenneet saivat vastaansa tuhansien ihmisten kaaoksen sekä uusia kahakoita. Ateneumin portaille jääminen oli vaihtoehdoista vaarallisin, sillä ammuskelu oli hetken aikaa intensiivistä ja harhaluoteja viuhui ilmassa. Lopulta tilanne osoittautui vääräksi hälytykseksi ja järjestys palasi torille. Kaikkiaan venäläiset vallankumoukselliset sotilaat surmasivat päivän aikana Helsingissä toistasataa upseeria. ",
						"Kolikoita ei kannattanut vaihtaa setelirahaan. Helsinkiä oli jo pitkään vaivannut “hopeakuume”. Ruplan ja markan vaihtosuhdetta oli pitkään pidetty epärealistisella tasolla ja taloutta oli muutenkin kurjistanut korkea inflaatio. \n\nKaupunkilaiset pelkäsivät paperirahan menettävän arvonsa, jolloin metallipitoiset kolikot koettiin turvallisemmiksi vaihdon välineiksi. Hopeakuume tarkoitti sitä, että kaikki pyrkivät hamstraamaan kolikoita ja vaihtamaan seteleitään pois.",
						"Tarjoukseen kannatti iskeä heti kiinni. Elintarvikepula paheni nopeasti. Keväällä 1917 suuressa mitassa aloitettu palstaviljely oli merkittävä apu kaupunkilaisperheiden selviytymisessä. Palstojen kysyntä ylitti välittömästi tarjonnan, jolloin sadat perheet jäivät ilman palstoja. ",
						"Varmin tapa maidon hankintaan oli omien verkostojen hyödyntäminen Per Helanderin kotiseudulta Sipoosta. Kesällä 1917 korttijakelu oli kaikista epävarmin keino, sillä jonottamisesta huolimatta korteillakaan ei saanut aina maitoa. Mustasta pörssistä maitoa sai aina, mutta virkamiesperheen rahat eivät tällaiseen riittäisi. ",
						"Kannattaa selvittää asiaa naapureiden kanssa. Maaliskuun vallankumouksen jälkeen järjestysvalta oli siirtynyt poliisilaitokselta kunnalliselle miliisijärjestelmälle. Porvarillisten ryhmien ja työväestön erimielisyydet olivat kärjistyneet kesä-heinäkuun vaihteessa, jolloin miliisit olivat ryhtyneet lakkoon. \n\nVallankumouksen ja valtataistelun pääkaupunki oli kuukauden ilman järjestysvaltaa.  Näin kaupunkilaiset joutuivat itse ratkomaan järjestykseen ja turvallisuuteen liittyviä kysymyksiä.",
						"Voikortit kannatti käyttää. Elokuun voimellakoissa vihaiset väkijoukot pakottivat meijeriliikkeet avaamaan varastojensa ovet. Väkijoukon valitsemat toimikunnat inventoivat varastot ja toimittivat löytyneet voitynnyrit elintarvikekauppoihin. \n\nNäin kaupungin elintarvikeliikkeet päätyivät välittämään varastettuja voivaroja elintarvikekortteja vastaan. Kaupungin ja valtion viranomaiset eivät voineet tilannetta estää, joten tapahtunut hyväksyttiin osaksi säännöstelyjärjestelmän toimintaa eli voikortit saattoi huoletta käyttää. ",
						"Vuokrasopimus kannatti uusia välittömästi. Maailmansota oli keskeyttänyt asuntorakentamisen ja sotateollisuus oli houkutellut kaupunkiin tuhansia uusia asukkaita. Helsingin asuntopula oli muuttunut vaikeaksi jo kesällä 1915 ja paheni sen jälkeen kriittiseksi. \n\nSäännöstelystä huolimatta vuokrat nousivat ja määräyksiä kierrettiin kaikenlaisin kepulikonstein. Vaikean asuntopulan aikana vaihtoehdot olivat vähissä. Vuokrasopimus kannatti uusia, sillä vuokraisännän ovella oli jo jonossa seuraavia asunnonetsijiä.",
						"Ei kannattanut ostaa jäkälää lainkaan, sillä suuresta kohusta ja suurista panostuksista huolimatta jäkälä osoittautuu pettymykseksi. Syksyllä valmistuneet tieteelliset kokeet kertovat, ettei jäkälällä ollutkaan minkäänlaista ravintoarvoa. Psykologinen arvo jäkälällä tosin oli, sillä jäkäläleivän kuidut tuottivat hetkeksi kylläisen olon. ",
						"Hyviä vaihtoehtoja ei enää ollut, siksi oman turvallisuuden kannalta varmin valinta oli väistää tilanne ja pelata aikaa. Esimiehen määräyksen noudattaminen nimittäin saattoi johtaa vangitsemiseen, pahoinpitelyyn tai pahimmassa tapauksessa jopa hautaan. Kaartilaisten käskyjen noudattaminen puolestaan saattaisi taas lakon päätyttyä johtaa työpaikan menettämiseen. ",
						"Kannatti jäädä kotiin. Suomen itsenäistymisprosessi oli monivaiheinen, eikä 6.12. ollut ainutlaatuinen tapahtuma vuonna 1917. Toiveet olivat korkealla, mutta ihmiset olivat odottavalla kannalla. \n\nSamalla maan sisäinen tilanne oli kiristynyt äärimmilleen marraskuun yleislakon väkivaltaisuuksien jälkeen. Toreilla ei tavattu. Sen sijaan monet kokoontuivat ystävien seurassa juhlimaan uusia itsenäistymisen eteen otettuja askeleita."
						];
		var oikeavastaus=["b","b","c","b","a","b","a","c","c","c"];
		var kuukaudet=["Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"];

		var kuvatekstit=["Kuva: Helsingin kaupunginmuseo | Signe Brander",
						"Kuva: Helsingin kaupunginmuseo | Nestori Jaakkola",
						"Kuva: Helsingin kaupunginmuseo | Signe Brander",
						"Kuva: Helsingin kaupunginmuseo | Väinö Kannisto",
						"Kuva: Helsingin kaupunginmuseo | Signe Brander",
						"",
						"Kuva: Helsingin kaupunginmuseo | Signe Brander",
						"Kuva: Helsingin kaupunginmuseo | Eric Sundström",
						"Kuva: Helsingin kaupunginmuseo | Erico",
						"Kuva: Helsingin kaupunginmuseo | Eric Sundström",
						"Kuva: Helsingin kaupunginmuseo | Eric Sundström",
						"Kuva: Helsingin kaupunginmuseo | Signe Brander ja Karl Mitterhusen",
						"Kuva: Helsingin kaupunginmuseo | Signe Brander",
						"Kuva: Helsingin kaupunginmuseo | Olof Sundström"];
		this.stop();
		var nro = 0;
		var mc = this;


		var aa = mc.kysymys.v1;
		var bb = mc.kysymys.v2;
		var cc = mc.kysymys.v3;

		aa.name = "a";
		bb.name = "b";
		cc.name = "c";

		aa.cursor =bb.cursor =cc.cursor = "pointer";

		function setQ(nro) {
			mc.kysymys.v1.color = mc.kysymys.v2.color = mc.kysymys.v3.color = "#07faf2";
			mc.kysymys.v1.lineWidth = null;
			mc.kysymys.v2.lineWidth = null;
			mc.kysymys.v3.lineWidth = null;
			mc.kysymys.kuukausi.text = kuukaudet[nro]+" "+parseInt(nro+1)+"/"+kysymykset.length;
			mc.kysymys.kys.text = kysymykset[nro];
			mc.kysymys.v1.text = vaihtoehdot[nro][0];
			mc.kysymys.v2.text = vaihtoehdot[nro][1];
			mc.kysymys.v3.text = vaihtoehdot[nro][2];
			mc.kysymys.visible = true;
			mc.kysymys.alpha = 1;
			mc.kysymys.vastaa.visible = false;
			mc.kysymys.kuvatxt.text=kuvatekstit[currentvid];
			mc.vastaus.vast.text = vastaukset[nro];
			mc.vastaus.visible = false;
			mc.vastaus.alpha = 1;

			var vastbounds = mc.vastaus.vast.getBounds();
			mc.vastaus.seuraava.y=mc.vastaus.vast.y+ vastbounds.height+50;

			aa.lineWidth =bb.lineWidth =cc.lineWidth =405;
			var pad = 20;
			var kysbounds=mc.kysymys.kys.getBounds();
			var abounds = mc.kysymys.v1.getBounds();
			var bbounds = mc.kysymys.v2.getBounds();
			var cbounds = mc.kysymys.v3.getBounds();


			aa.y = mc.kysymys.kys.y+kysbounds.height + pad;
			bb.y = aa.y+abounds.height + pad;
			cc.y = bb.y+bbounds.height + pad;

			var hit1 = new createjs.Shape();
			hit1.graphics.beginFill("#000").drawRect(0, 0, aa.getMeasuredWidth(), aa.getMeasuredHeight());
			aa.hitArea = hit1;
			var hit2 = new createjs.Shape();
			hit2.graphics.beginFill("#000").drawRect(0, 0, bb.getMeasuredWidth(), bb.getMeasuredHeight());
			bb.hitArea = hit2;
			var hit3 = new createjs.Shape();
			hit3.graphics.beginFill("#000").drawRect(0, 0, cc.getMeasuredWidth(), cc.getMeasuredHeight());
			cc.hitArea = hit3;

		}
		setQ(nro);

		mc.kysymys.v1.addEventListener("click", valitse.bind(this));
		mc.kysymys.v2.addEventListener("click", valitse.bind(this));
		mc.kysymys.v3.addEventListener("click", valitse.bind(this));



		var oikein;
		var vastattu;

		function valitse(e) {
			vastattu = e.target.name;
			mc.kysymys.v1.color = mc.kysymys.v2.color = mc.kysymys.v3.color = "#07faf2";
			e.target.color = "#fa02a3";
			//mc.kysymys.vastaa.visible = true;
			vastaus();
		}

		this.kysymys.vastaa.addEventListener("click", vastaus.bind(this));
		function vastaus() {
			aa.alpha = bb.alpha = cc.alpha = 1;

			if (vastattu == oikeavastaus[nro]) {
				mc.vastaus.oikein.text = "Oikein!";
				pisteet++;
				updatepoints();
				mc.vastaus.oikein.color = "#07faf2";
			} else {
				mc.vastaus.oikein.text = "Väärin";
				mc.vastaus.oikein.color = "#fa02a3";
			}

			mc.vastaus.alpha=0;
			mc.vastaus.visible=true;

		    createjs.Tween.get(mc.kysymys)
		         .to({alpha:0, visible:false}, 500);

			createjs.Tween.get(mc.vastaus)
				 //.set({alpha:0,visible:true})
				 .wait(1200)
		         .to({alpha:1}, 500);


		}





		this.vastaus.seuraava.addEventListener("click", next.bind(this));
		function next() {
			nro++
			go(nro);
		}




		//transitio

		function go(frame) {
			vidFadeOut();
			var target = mc;
			var tween = createjs.Tween.get(target, {
				loop: false
			})
				.to({
					alpha: 0
				}, 500, createjs.Ease.linear)
				.call(handleComplete)
				.wait(1500)
				.to({
					alpha: 1
				}, 500, createjs.Ease.linear);

			function handleComplete(e) {

				if (nro==10) {
					if (pisteet > 7) {
						currentvid = nro + 1;
					} else if (pisteet > 3) {
						currentvid = nro + 2;
					} else {
						currentvid = nro + 3;
					}
					mc.gotoAndStop(2);
				} else {
					currentvid = nro + 1;
					setQ(nro);
				}
				playVid();
			}
		}
	}
	this.frame_2 = function() {
		var kuvatekstit=["Kuva: Helsingin kaupunginmuseo | Signe Brander",
						"Kuva: Helsingin kaupunginmuseo | Nestori Jaakkola",
						"Kuva: Helsingin kaupunginmuseo | Signe Brander",
						"Kuva: Helsingin kaupunginmuseo | Väinö Kannisto",
						"Kuva: Helsingin kaupunginmuseo | Signe Brander",
						"",
						"Kuva: Helsingin kaupunginmuseo | Signe Brander",
						"Kuva: Helsingin kaupunginmuseo | Eric Sundström",
						"Kuva: Helsingin kaupunginmuseo | Erico",
						"Kuva: Helsingin kaupunginmuseo | Eric Sundström",
						"Kuva: Helsingin kaupunginmuseo | Eric Sundström",
						"Kuva: Helsingin kaupunginmuseo | Signe Brander ja Karl Mitterhusen",
						"Kuva: Helsingin kaupunginmuseo | Signe Brander",
						"Kuva: Helsingin kaupunginmuseo | Olof Sundström"];

		this.credits.visible=false;

		this.end.pist.text = pisteet + "/10 pistettä!";
		this.end.kuvatxt.text=kuvatekstit[currentvid];

		if (pisteet > 7) {
			this.end.endtxt.text = "Onnittelut! Olisit ollut erinomainen neuvonantaja Helanderin perheelle. Perhe olisi selviytynyt mainiosti vuoden 1917 levottomissa ja poikkeuksellisissa oloissa Helsingissä.";
		} else if (pisteet > 3) {
			this.end.endtxt.text = "Olot olivat v. 1917 Helsingissä hyvin poikkeuksellisia ja vaikeita. Selvisit kuitenkin kohtuullisen hyvin Helanderin perheen neuvonantajana.";
		} else {
			this.end.endtxt.text = "Aijai. Helanderin perheelle olisi käynyt neuvoillasi köpelösti vuoden 1917 levottomissa ja poikkeuksellisissa oloissa Helsingissä.";
		}

		this.end.tekijat.addEventListener("click", showCredits.bind(this));
		this.credits.sulje.addEventListener("click", showCredits.bind(this));

		function showCredits()
		{
			this.credits.visible=!this.credits.visible;
			this.end.visible=!this.end.visible;
		}

		this.end.fb.addEventListener("click", linkfb.bind(this));

		function linkfb()
		{
			jaafb();

		}

		this.end.twitter.addEventListener("click", linktwitter.bind(this));

		function linktwitter()
		{
			jaatwitter();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Sisältö
	this.text = new cjs.Text("", "bold 45px 'Yleweb'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 54;
	this.text.lineWidth = 518;
	this.text.setTransform(265.6,15);

	this.aloita = new lib.aloita();
	this.aloita.setTransform(76.2,603.3,1,1,0,0,0,49.6,14.3);
	this.aloita.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.aloita.cache(6,-12,164,72);
	new cjs.ButtonHelper(this.aloita, 0, 1, 2, false, new lib.aloita(), 3);

	this.text_1 = new cjs.Text("Vuonna 1917 Helsingissä elettiin hyvin poikkeuksellisia aikoja. Sinä pääset tässä pelissä neuvomaan Helanderin perhettä selviämään näissä levottomissa oloissa aina maaliskuun vallankumouksesta joulukuun itsenäisyysjulistukseen asti.\n\nHelanderin keskiluokkainen perhe asuu Siltasaaressa yksiössä. Perhe on kaksikielinen. Isä Per Helander on töissä vahtimestarina Valtionrautateillä Helsingissä ja kotoisin Sipoosta. Hänen vaimonsa Alma on perheenemäntä ja kotoisin Asikkalasta Hämeestä.\n\nAlma on 27-vuotias ja Per on 30. Heillä on kaksi lasta ja yksi tulossa lisää. Vanhin lapsista käy jo koulua ja nuorempi on Alman kanssa kotona.", "20px 'Arial'", "#FFFFFF");
	this.text_1.lineHeight = 24;
	this.text_1.lineWidth = 464;
	this.text_1.setTransform(36.6,100.4);

	this.credits = new lib.credits();
	this.credits.setTransform(242.6,237,1,1,0,0,0,219.1,188.3);
	this.credits.visible = false;

	this.end = new lib.pointsit();
	this.end.setTransform(240.4,40.8,1,1,0,0,0,220.5,25.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.aloita},{t:this.text}]}).to({state:[]},1).to({state:[{t:this.end},{t:this.credits}]},1).wait(1));

	// vastaus
	this.vastaus = new lib.vast_maalis();
	this.vastaus.setTransform(237,228.4,1,1,0,0,0,203.5,192.4);
	this.vastaus._off = true;

	this.timeline.addTween(cjs.Tween.get(this.vastaus).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// kysymys
	this.kuvatxt = new cjs.Text("Kuva: Helsingin kaupunginmuseo | Signe Brander", "16px 'Arial'", "#CCCCCC");
	this.kuvatxt.name = "kuvatxt";
	this.kuvatxt.lineHeight = 20;
	this.kuvatxt.lineWidth = 446;
	this.kuvatxt.setTransform(36.6,748.1);

	this.kysymys = new lib.kys_maalis();
	this.kysymys.setTransform(237,180.2,1,1,0,0,0,203.5,153.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.kuvatxt}]}).to({state:[{t:this.kysymys}]},1).to({state:[]},1).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("Ego7A7/MAAAh3+MBR2AAAMAAAB3+g");
	this.shape.setTransform(262.6,384);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(262.6,384,526,768);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;


  var canvas, video, pic, stage, exportRoot;
  function init() {
    canvas = document.getElementById("canvas");
    video = document.getElementById("bgvid");
    pic=document.getElementById("giph");
    handleComplete();
  }
  function handleComplete() {
    exportRoot = new lib.ui();
    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    stage.enableMouseOver();
    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);
    (function(isResp, respDim, isScale, scaleType) {
      var lastW, lastH, lastS=1;
      window.addEventListener('resize', resizeCanvas);
      resizeCanvas();
      function resizeCanvas() {
        var w = lib.properties.width, h = lib.properties.height;
        var iw = window.innerWidth, ih=window.innerHeight;
        var pRatio = window.devicePixelRatio, xRatio=iw/w, yRatio=ih/h, sRatio=1;
        if(isResp) {

          if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
            sRatio = lastS;
          }
          else if(!isScale) {
            if(iw<w || ih<h)
              sRatio = Math.min(xRatio, yRatio);
          }
          else if(scaleType==1) {
            sRatio = Math.min(xRatio, yRatio);
          }
          else if(scaleType==2) {
            sRatio = Math.max(xRatio, yRatio);
          }
        }

        if(xRatio<1){
          canvas.width = video.width = pic.width = w*xRatio;
          canvas.style.width = video.style.width = pic.style.width = w*xRatio+'px';
          stage.scaleX = xRatio;
          stage.scaleY = xRatio;
          stage.x=0;
        }else if(xRatio<2){
          console.log("b");
          stage.x=iw-w;
          stage.scaleX=stage.scaleY=1;
          canvas.width= video.width = pic.width= w*xRatio;
          canvas.style.width= video.style.width = pic.style.width =w*xRatio+'px';
        }else{
          console.log("c");
          stage.x=500;
          stage.scaleX=stage.scaleY=1;
          canvas.width= video.width = pic.width=1024;
          canvas.style.width= video.style.width = pic.style.width ='1024px';
        }
        canvas.style.height= video.style.height = pic.style.height = 'auto';
        lastW = iw; lastH = ih; lastS = sRatio;
      }
    })(true,'width',false,1);
  }

  function detectmob() {

  if( navigator.userAgent.match(/Android/i)
   || navigator.userAgent.match(/webOS/i)
   || navigator.userAgent.match(/iPhone/i)
   || navigator.userAgent.match(/iPad/i)
   || navigator.userAgent.match(/iPod/i)
   || navigator.userAgent.match(/BlackBerry/i)
   || navigator.userAgent.match(/Windows Phone/i)
   || window.innerWidth <= 800 && window.innerHeight <= 600
   ){
      return true;
    }
   else {
      return false;
    }
  }
  //videotausta
  var videos=[["001_intro" ,0], ["002_maaliskuu" ,6.8], ["003_huhtikuu" ,12], ["004_toukokuu" ,6], ["005_kesakuu" ,0.01], ["006_heinakuu",13], ["007_elokuu",11], ["008_syyskuu",0.01], ["009_lokakuu",11],
  ["010_marraskuu",4], ["011_joulukuu",0], ["012_loppua",0], ["013_loppub",9], ["014_loppuc",0]];
  var currentvid = 0;
  var vid=document.getElementById("bgvid");

  var pisteet=0;
  function updatepoints(){
    document.getElementById("points").innerHTML = "pisteet:"+pisteet;
    }

  function vidFadeIn() {
    vid.className = "visible";
    document.getElementById("giph").className = "visible";
    if(currentvid>10){
      document.getElementById("tiedetta").style.display = 'block';
    }
  }
  function vidFadeOut() {
    vid.className = "hidden";
    document.getElementById("giph").className = "hidden";
  }

  function playVid(){
    if(!detectmob()){
      document.getElementById("giph").style.display = 'none';
      document.getElementById("bgvid").style.display = 'block';
      vid.setAttribute("src", "http://yle.fi/plus/other/2016_historiatesti/vids/"+videos[currentvid][0]+".mp4");
      vid.play();
    }else{
      document.getElementById("bgvid").style.display = 'none';
      document.getElementById("giph").style.display = 'block';
      document.getElementById("giph").setAttribute("src", "#");
      document.getElementById("giph").setAttribute("src", "http://yle.fi/plus/other/2016_historiatesti/vids/"+videos[currentvid][0]+".gif");
    }
    vid.play();
    vidFadeIn();
  }
	var twitterTeksti;

  function jaatwitter(){

    if (pisteet > 7) {
      twitterTeksti = "Olisin ollut erinomainen neuvonantaja v. 1917 Helsingissä. Entä sinä?");
    } else if (pisteet > 3) {
      twitterTeksti = "Selvisin kohtuullisen hyvin Helanderin perheen neuvonantajana. Kokeile sinäkin!");
    } else {
      twitterTeksti = "Aijai. Helanderin perheelle olisi käynyt neuvoillani köpelösti. Kokeile sinä!");
    }
		window.open("https://twitter.com/intent/tweet?text=" + twitterTeksti + "&hashtags=helander, suomi1917&via=ylehistoria&url=http://yle.fi/aihe/artikkeli/2016/12/22/auta-helandereita-selviamaan-vuoden-1917-helsingissa-tee-testi");
  };




	var fbTeksti, fbKuvaURL
  function jaafb(){
    if (pisteet > 7) {
    	fbTeksti = "Onnittelut! Olisit ollut erinomainen neuvonantaja Helanderin perheelle. Perhe olisi selviytynyt mainiosti vuoden 1917 levottomissa ja poikkeuksellisissa oloissa Helsingissä.");
			fbKuvaURL = "http://yle.fi/plus/other/2016_historiatesti/vids/012_loppua.gif";
		} else if (pisteet > 3) {
      fbTeksti ="Olot olivat v. 1917 Helsingissä hyvin poikkeuksellisia ja vaikeita. Selvisit kuitenkin kohtuullisen hyvin Helanderin perheen neuvonantajana.");
			fbKuvaURL = "http://yle.fi/plus/other/2016_historiatesti/vids/013_loppub.gif";
		} else {
      fbTeksti ="Aijai. Helanderin perheelle olisi käynyt neuvoillasi köpelösti vuoden 1917 levottomissa ja poikkeuksellisissa oloissa Helsingissä.");
			fbKuvaURL = "http://yle.fi/plus/other/2016_historiatesti/vids/014_loppuc.gif";
		};

		FB.ui({
			method: 'feed',
			picture: fbKuvaURL,
			display: 'popup',
			name: 'Autoin Helandereita selviämään vuoden 1917 Helsingissä. Sain ' + pisteet '/10 pistettä',
			link: 'http://yle.fi/aihe/artikkeli/2016/12/22/auta-helandereita-selviamaan-vuoden-1917-helsingissa-tee-testi',
			description: fbTeksti
		}, function(response) {});

	};



  init();
  /*videon luuppaus*/
  var vid=document.getElementById("bgvid");
  playVid();
  vid.addEventListener('ended', function () {
    this.currentTime = videos[currentvid][1];
    this.play();
  }, false);

  //// UI
