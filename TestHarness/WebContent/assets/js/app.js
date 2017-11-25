var app = angular.module("ContactApp", [])
{
	app.controller("ContactCtrl", ContactCtrl);

	function ContactCtrl() {
		this.contacts =

		[ // https://api.randomuser.me/
				{
					"gender" : "female",
					"name" : {
						"title" : "miss",
						"first" : "chloe",
						"last" : "evans"
					},
					"location" : {
						"street" : "7342 chester road",
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
				}

		];
		
		this.selectedContact = this.contacts[0];
		
		this.selectContact = function(index) {
			this.selectedContact = this.contacts[index];
		}
		
	}
}