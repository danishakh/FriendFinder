var friendsArray = [
	{
		friendName: "Hatake Kakashi",
		friendImage: "https://media.giphy.com/media/8TZVxrEBaC0fe/giphy.gif",
		friendDesc: "Kakashi Hatake (はたけカカシ, Hatake Kakashi) is a shinobi of Konohagakure's Hatake clan. Famed as Kakashi of the Sharingan (写輪眼のカカシ, Sharingan no Kakashi), he is one of Konoha's most talented ninja; regularly looked to for advice and leadership despite his personal dislike of responsibility. To his students on Team 7, Kakashi teaches the importance of teamwork, a lesson he received, along with the Sharingan, from his childhood friend, Obito Uchiha.",
		scores: [2, 2, 2, 3, 2, 5, 1, 2, 4, 4]
	},
	{
		friendName: "Nara Shikaramu",
		friendImage: "https://media.giphy.com/media/oGmOOvwBKI5Dq/giphy.gif",
		friendDesc: "Shikamaru Nara (奈良シカマル, Nara Shikamaru) is a shinobi of Konohagakure's Nara clan. Though lazy by nature, Shikamaru has a rare intellect that consistently allows him to prevail in combat. The responsibilities that these successes leave him with cause him frequent annoyance, but he gladly accepts them so that he may be of service to his fellow members of Team 10, and to prove himself to generations of the past and future.",
		scores: [2, 1, 2, 1, 3, 5, 1, 3, 5, 3]
	},
	{
		friendName: "Hyuga Neji",
		friendImage: "https://media.giphy.com/media/5unFuzNHMIIyk/giphy.gif",
		friendDesc: "Neji Hyūga (日向ネジ, Hyūga Neji) was a member of Konohagakure's Hyūga clan. Though a prodigy even by the Hyūga's standards, Neji was a member of the clan's branch house; no matter how skilled he became, he would always be in service to the Hyūga's main house, a fact that convinced him fate was predetermined. After experiencing Naruto Uzumaki's refusal to be limited by such an ideology, Neji realised his fate was what he chose it to be, and as a member of Team Guy he sought the strength necessary to make the future he wanted for his family and friends.",
		scores: [2, 1, 1, 3, 3, 4, 2, 5, 4, 2]
	},
	{
		friendName: "Gaara",
		friendImage: "https://media.giphy.com/media/fBC5ParOZKvUk/giphy.gif",
		friendDesc: "Gaara (我愛羅) is a shinobi of Sunagakure. He was made the jinchūriki of the One-Tailed Shukaku before he was born, causing the villagers of Suna to fear him as a monster. With nobody to connect to, Gaara grew up hating the world and looking out only for himself, justifying his own existence by killing anyone he came across. After being defeated by Naruto Uzumaki — a jinchūriki like himself who found strength in his friendships — Gaara starts emulating him. He becomes Suna's Fifth Kazekage (五代目風影, Godaime Kazekage, Literally meaning: Fifth Wind Shadow) so that he can protect the village and all those who live there, dispelling the fears he cast on the villagers.",
		scores: [1, 5, 2, 4, 4, 4, 3, 2, 4, 2]
	},
	{
		friendName: "Uzumaki Naruto",
		friendImage: "https://media.giphy.com/media/G3FNI3FneNjiw/giphy.gif",
		friendDesc: "Naruto Uzumaki (うずまきナルト, Uzumaki Naruto) is a shinobi of Konohagakure and a descendant of the Uzumaki clan. He became the jinchūriki of the Nine-Tails on the day of his birth — a fate that caused him to be shunned by most of Konoha throughout his childhood. After joining Team Kakashi, Naruto worked hard to gain the village's acknowledgement all the while chasing his dream to become Hokage. In the following years, through many hardships and ordeals, he became a capable ninja regarded as a hero both by the villagers, and soon after, the rest of the world, becoming known as the Hero of the Hidden Leaf (木ノ葉隠れの英雄, Konohagakure no Eiyū, Literally meaning: Hero of the Hidden Tree Leaves). He soon proved to be one of the main factors in winning the Fourth Shinobi World War, leading him to achieve his dream and become the village's Seventh Hokage",
		scores: [4, 5, 4, 5, 3, 5, 1, 1, 1, 4]
	},
	{
		friendName: "Uchiha Sasuke",
		friendImage: "https://media.giphy.com/media/DAof5KweijCUg/giphy.gif",
		friendDesc: "Sasuke Uchiha (うちはサスケ, Uchiha Sasuke) is one of the last surviving members of Konohagakure's Uchiha clan. After his older brother, Itachi, slaughtered their clan, Sasuke made it his mission in life to avenge them by killing Itachi. He is added to Team 7 upon becoming a ninja and, through competition with his rival and best friend, Naruto Uzumaki, Sasuke starts developing his skills. Dissatisfied with his progress, he defects from Konoha so that he can acquire the strength needed to exact his revenge. His years of seeking vengeance and his actions that followed become increasingly demanding, irrational and isolates him from others, leading him to be branded as an international criminal. After learning the truth of his brother's sacrifice and later proving instrumental in ending the Fourth Shinobi World War and being happily redeemed by Naruto, Sasuke decides to return to Konoha and dedicates his life to help protect the village and its inhabitants becoming referred to as the 'Supporting Kage' (支う影, Sasaukage, Literally meaning: Supporting Shadow).",
		scores: [1, 1, 2, 4, 4, 3, 4, 3, 4, 1]
	},
	{
		friendName: "Rock Lee",
		friendImage: "https://media.giphy.com/media/H10tCrEZDhbBm/giphy.gif",
		friendDesc: "Rock Lee (ロック・リー, Rokku Rī) is a shinobi of Konohagakure's Lee clan and a member of Team Guy. Unlike most shinobi, he lacked the skills necessary to use ninjutsu or genjutsu. However, he overcomes those shortcomings by undergoing special training from Might Guy that would make him a taijutsu master while still a genin.",
		scores: [4, 2, 4, 5, 4, 5, 1, 1, 4, 3]
	},
	{
		friendName: "Uchiha Itachi",
		friendImage: "https://media.giphy.com/media/ADSJHOoIvyjKM/giphy.gif",
		friendDesc: "Itachi Uchiha (うちはイタチ, Uchiha Itachi) was a prodigy of Konohagakure's Uchiha clan and also served as an Anbu Captain. He later became an international criminal after murdering his entire clan, sparing only his younger brother, Sasuke. He afterwards joined the international criminal organisation known as Akatsuki, whose activity brought him into frequent conflict with Konoha and its ninja — including Sasuke — who sought to avenge their clan. Following his death, Itachi's motives were revealed to be more complicated than they seemed and that his actions were only ever in the interest of his brother and village, remaining a loyal shinobi of Konohagakure to the very end.",
		scores: [1, 1, 3, 5, 4, 5, 2, 2, 5, 3]
	},
	{
		friendName: "Namikaze Minato",
		friendImage: "https://media.giphy.com/media/55qKYXswDXFCg/giphy.gif",
		friendDesc: "Minato Namikaze (波風ミナト, Namikaze Minato) was the Fourth Hokage (四代目火影, Yondaime Hokage, Literally meaning: Fourth Fire Shadow) of Konohagakure. He was famous in life for his speed, leading to the moniker of Konoha's Yellow Flash (木ノ葉の黄色い閃光, Konoha no Kiiroi Senkō, English TV: Yellow Flash of the Leaf). He died during the Nine-Tailed Demon Fox's Attack, sacrificing his life to seal a part of the Nine-Tails into his newborn son, Naruto Uzumaki.",
		scores: [5, 1, 5, 5, 3, 5, 1, 2, 4, 3]
	},
	{
		friendName: "Uchiha Madara",
		friendImage: "https://media.giphy.com/media/aJtyPniBC6ghi/giphy.gif",
		friendDesc: "Madara Uchiha (うちはマダラ, Uchiha Madara) was the legendary leader of the Uchiha clan. He founded Konohagakure alongside his rival, Hashirama Senju, with the intention of beginning an era of peace. When the two couldn't agree on how to achieve that peace, they fought for control of the village, a conflict which ended in Madara's death. Madara, however, rewrote his death and went into hiding to work on his own plans. Unable to complete it in his natural life, he entrusted his knowledge and plans to Obito Uchiha shortly before his actual death. Years later, Madara would be revived, only to see his plans foiled before his final death.",
		scores: [1, 2, 2, 5, 5, 1, 5, 4, 5, 2]
	}
];

module.exports = friendsArray;