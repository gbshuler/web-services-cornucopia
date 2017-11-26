function getContactsAsJson() {
	var jsonContacts =

	[ // https://api.randomuser.me/
			{
				"gender" : "female",
				"name" : {
					"title" : "miss",
					"first" : "chloe",
					"last" : "evans"
				},
				"location" : {
					"street" : "7341 chester road",
					"city" : "belfast",
					"state" : "west glamorgan",
					"postcode" : "I6 9ZY"
				},
				"email" : "chloe.evans@example.com",
				"login" : {
					"username" : "greentiger732",
					"password" : "dalton",
					"salt" : "JU2CM16Y",
					"md5" : "7ec8f94360d62964579fe1743eec9d68",
					"sha1" : "cb4d94431519f8ef342fd9a2d14e701460b6c2f4",
					"sha256" : "a69733244e4ce15b8896745ba9fb7d123af885cfeabc859de64a1671de9c9e35"
				},
				"dob" : "1970-02-05 23:11:53",
				"registered" : "2005-12-15 16:04:52",
				"phone" : "019467 65878",
				"cell" : "0783-519-356",
				"id" : {
					"name" : "NINO",
					"value" : "ZN 62 17 90 J"
				},
				"picture" : {
					"large" : "https://randomuser.me/api/portraits/women/27.jpg",
					"medium" : "https://randomuser.me/api/portraits/med/women/27.jpg",
					"thumbnail" : "https://randomuser.me/api/portraits/thumb/women/27.jpg"
				},
				"nat" : "GB"

			},
			{
				"gender" : "female",
				"name" : {
					"title" : "miss",
					"first" : "cecilie",
					"last" : "madsen"
				},
				"location" : {
					"street" : "1435 brogade",
					"city" : "sundby/erslev",
					"state" : "sjælland",
					"postcode" : 73596
				},
				"email" : "cecilie.madsen@example.com",
				"login" : {
					"username" : "smalltiger100",
					"password" : "jonjon",
					"salt" : "y0qALSdD",
					"md5" : "67266b882ba0de09bc807a885402f72d",
					"sha1" : "b2ea0d1a42424e809b0028be510698220921a55d",
					"sha256" : "640a9e59ea6bfdb63506078902a0761f7b8c81f9e58f26baa73995c572f2b42e"
				},
				"dob" : "1993-06-05 09:08:27",
				"registered" : "2004-10-02 06:25:02",
				"phone" : "41345542",
				"cell" : "22452725",
				"id" : {
					"name" : "CPR",
					"value" : "458027-5648"
				},
				"picture" : {
					"large" : "https://randomuser.me/api/portraits/women/80.jpg",
					"medium" : "https://randomuser.me/api/portraits/med/women/80.jpg",
					"thumbnail" : "https://randomuser.me/api/portraits/thumb/women/80.jpg"
				},
				"nat" : "DK"
			},
			{
				"gender" : "female",
				"name" : {
					"title" : "mrs",
					"first" : "hebe",
					"last" : "caldeira"
				},
				"location" : {
					"street" : "4546 rua são pedro ",
					"city" : "são josé de ribamar",
					"state" : "piauí",
					"postcode" : 73287
				},
				"email" : "hebe.caldeira@example.com",
				"login" : {
					"username" : "bluefrog332",
					"password" : "internet",
					"salt" : "kka8Z2AE",
					"md5" : "824f46ff900db23784cb737971d25eab",
					"sha1" : "214f50e86158f430003a8c947b9912a0f07396ac",
					"sha256" : "be11af546c9dabf272f8b95f5c9a1693f695ba84b6f605e01c9717ef4f4576dd"
				},
				"dob" : "1957-12-22 03:41:47",
				"registered" : "2008-02-29 07:07:33",
				"phone" : "(31) 0155-4078",
				"cell" : "(85) 1744-0694",
				"id" : {
					"name" : "",
					"value" : null
				},
				"picture" : {
					"large" : "https://randomuser.me/api/portraits/women/5.jpg",
					"medium" : "https://randomuser.me/api/portraits/med/women/5.jpg",
					"thumbnail" : "https://randomuser.me/api/portraits/thumb/women/5.jpg"
				},
				"nat" : "BR"
			},
			{
				"gender" : "male",
				"name" : {
					"title" : "monsieur",
					"first" : "tony",
					"last" : "fleury"
				},
				"location" : {
					"street" : "2101 rue barrème",
					"city" : "pampigny",
					"state" : "basel-stadt",
					"postcode" : 5195
				},
				"email" : "tony.fleury@example.com",
				"login" : {
					"username" : "heavygorilla843",
					"password" : "romance",
					"salt" : "ErdBftjo",
					"md5" : "35dd8e9d0009abc601d62490fca76124",
					"sha1" : "c34a79d1301014012be152500dc7a957f4619c47",
					"sha256" : "88aead57ee2e82e704f8b9aa8a3b8f82fe9a43a396eb28b0dd45e10b0bd7950c"
				},
				"dob" : "1946-05-21 00:13:50",
				"registered" : "2011-08-21 19:06:10",
				"phone" : "(773)-506-6484",
				"cell" : "(885)-788-4474",
				"id" : {
					"name" : "AVS",
					"value" : "756.ZXQQ.HUMS.13"
				},
				"picture" : {
					"large" : "https://randomuser.me/api/portraits/men/40.jpg",
					"medium" : "https://randomuser.me/api/portraits/med/men/40.jpg",
					"thumbnail" : "https://randomuser.me/api/portraits/thumb/men/40.jpg"
				},
				"nat" : "CH"
			},
			{
				"gender" : "female",
				"name" : {
					"title" : "mrs",
					"first" : "lilja",
					"last" : "joki"
				},
				"location" : {
					"street" : "5316 rotuaari",
					"city" : "jakobstad",
					"state" : "åland",
					"postcode" : 53318
				},
				"email" : "lilja.joki@example.com",
				"login" : {
					"username" : "ticklishwolf810",
					"password" : "traveler",
					"salt" : "HpuETzHq",
					"md5" : "e8d14c1d06fb532624e0985ef03cb532",
					"sha1" : "5a2b1386e8e23144e49f808c110b5037c4945b93",
					"sha256" : "961683cf836e5e697bec912c95ab04ff7922af29ea27911780fecd86130d462e"
				},
				"dob" : "1971-08-23 03:06:40",
				"registered" : "2006-10-07 18:41:13",
				"phone" : "08-284-954",
				"cell" : "041-730-36-19",
				"id" : {
					"name" : "HETU",
					"value" : "871-378Y"
				},
				"picture" : {
					"large" : "https://randomuser.me/api/portraits/women/2.jpg",
					"medium" : "https://randomuser.me/api/portraits/med/women/2.jpg",
					"thumbnail" : "https://randomuser.me/api/portraits/thumb/women/2.jpg"
				},
				"nat" : "FI"
			},
			{
				"gender" : "female",
				"name" : {
					"title" : "mrs",
					"first" : "النا",
					"last" : "نكو نظر"
				},
				"location" : {
					"street" : "7150 میدان 7 تیر",
					"city" : "خرم‌آباد",
					"state" : "کرمان",
					"postcode" : 77445
				},
				"email" : "النا.نكونظر@example.com",
				"login" : {
					"username" : "smallleopard670",
					"password" : "tennesse",
					"salt" : "VEv8MuFi",
					"md5" : "3837bb255a33f5de62839f429a0b4c07",
					"sha1" : "0290d78793b027ac8371cacb86c855cfcdfe6844",
					"sha256" : "a02a537f748930f9cdf1740e7bd0e980454a5873141136edc8eda87282de12d3"
				},
				"dob" : "1977-04-02 09:06:18",
				"registered" : "2016-04-09 18:03:15",
				"phone" : "009-96538184",
				"cell" : "0994-382-8041",
				"id" : {
					"name" : "",
					"value" : null
				},
				"picture" : {
					"large" : "https://randomuser.me/api/portraits/women/65.jpg",
					"medium" : "https://randomuser.me/api/portraits/med/women/65.jpg",
					"thumbnail" : "https://randomuser.me/api/portraits/thumb/women/65.jpg"
				},
				"nat" : "IR"
			},

			{
				"gender" : "female",
				"name" : {
					"title" : "miss",
					"first" : "ملینا",
					"last" : "حسینی"
				},
				"location" : {
					"street" : "4168 آزادی",
					"city" : "پاکدشت",
					"state" : "اصفهان",
					"postcode" : 97573
				},
				"email" : "ملینا.حسینی@example.com",
				"login" : {
					"username" : "redkoala406",
					"password" : "tucson",
					"salt" : "JVF1P9z8",
					"md5" : "37dfd3e52bd04fb2c382868484610f5f",
					"sha1" : "448fe55af0baf2076c5d273de72bca2e7e0d8014",
					"sha256" : "11ece642a824d152a4c2b6daec7b0479dfedb0fb848bd327f2869a8302b9f4a0"
				},
				"dob" : "1952-08-14 04:52:19",
				"registered" : "2002-10-02 23:30:30",
				"phone" : "030-04352652",
				"cell" : "0995-214-8734",
				"id" : {
					"name" : "",
					"value" : null
				},
				"picture" : {
					"large" : "https://randomuser.me/api/portraits/women/84.jpg",
					"medium" : "https://randomuser.me/api/portraits/med/women/84.jpg",
					"thumbnail" : "https://randomuser.me/api/portraits/thumb/women/84.jpg"
				},
				"nat" : "IR"
			} ];
	return jsonContacts;
}
