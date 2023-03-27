
let quoteEl = document.getElementById("gquote-el")
let bookEl = document.getElementById("book-el")
let quotes=[
    "This beggar is eternal. Speak out this name Yogi Ramsuratkumar from anywhere. My father will bless you. Need not spend money and time by going over here.",
    "All I know is Ramnam. For him there is no need for realization, visions, experiences or anything else. Ramnam is everything. Chant the nama all 24 hours! I do as ordained by my Master. That is enough for this begga",
    "Anybody who takes to the name of this beggar will be saved by my father in whatever difficult circumstances one may be.",
    "Yes, whenever you are in trouble, just call this beggar’s name with faith. My father will rush help to you immediately. We have a contract myself and my father. Whoever calls my name, my father will immediately rush help.",
    "Tell the name of Yogi Ramsuratkumar in the place wherever you are and see what happens. Form is not important. Repeat the name.",
    "Whatever this beggar does is a blessing. Even when he shouts at people in anger, it is only a blessing. They will surely benefit from that. When they sit in the presence of this beggar, My father transforms them, even though they may not be aware of it.",
    "My father by staying and playing in this land can do anything anywhere and at any time. Nothing is impossible for my father. We must always have complete absolute and full faith in our great masters, the vedas and my father.",
    "Father has no ears, but hears. Father has no mouth, but speaks. Father has no tongue, but tastes fruit etc. Father has no eyes, but sees. Father has no hands, but works.",
    "This is the house (showing Arunachaleswara temple) of this beggar from ages to ages. All temples – Tiruvannamalai, Chidambaram, Madurai, Kanyakumari, Rameswaram are this beggar’s houses for thousands and thousands of years",
    "Nellikai (Gooseberry) for the body and Ramnam for liberation.",
    "There is no need for any japa or dhyana for you. You are in the company of this beggar all time. So you are doing tapas all the time. Your service to this beggar will do. Transformation is going on all the time. The greatest tapas for anyone is to stay near one’s guru and do service to him. But very few are given this chance.",
    "Always remember father. Do not forget father. Keep the name of god always on your tongue.",
    "is beggar is a tool in father’s hand. Father is using this beggar as an instrument in his hand. His hands are here unseen. Blessings and radiation is at all times as well the whole time, spent here.",
    "Saints will construct temples, mutts, ashrams. This beggar has not constructed any temple or mutt, but only leaves his name for the liberation of mankind. Name: Yogi Ramsuratkumar",
    "Do all the work in the world, but keep your mind always on the almighty, the creator of all things and you can never go wrong.",
    "Strength comes when one identifies with the soul. Weakness comes when one identifies with the body.",
    "Whoever reads Ramayana feels that he is in presence of Sri Rama. Whoever reads Mahabharatha feels that he is in presence of Sri Krishna. Whoever garlands this (showing Swamiji’s) picture puts flowers, offer neivethia and aarthi and tells this beggar’s name once, will be blessed by my father.",
    "Those who chant “Aum Sriram Jai Ram Jai Jai Ram” will not be affected by any disease, whether it comes from America or Europe. These are my father’s words.",
    "Even when I call myself a beggar, people suspect that I have hidden treasure and trouble me. What will be my fate if I call myself a king",
    "Yes the flesh is weak, the body is perishable. That is why I am asking you to identify yourself with Atman. Say you are the Atman, then see what happens",
    "Invisible power is shaping the life of all, according to previous birth karma.",
    "God should be the goal of life. We need money and other comforts. Money and other comforts should not be the goal of life. If the aim of life is clear, guidance will definitely come.",
    "Father creates special situations for his chosen people in order to cleanse them thoroughly.",
    "Everything that happened in the past, that happens now, and that will happen in future, are all the will of my father. Nothing else. Nothing else. We should not get disturbed.",
    "God is all pervading and in all.",
    "Whatever happens, happens by the will of my father. So nothing is wrong in this world. Everything is perfectly all right. My father alone is the doer and my father cannot commit any mistake. So everything is perfectly all right.",
    "Like Ramnam, Shivanam is very elevating. Recite Shivanam constantly, like pouring of oil from one pot to another, without break. Namajapa should be sustained, just as pouring of oil, is not broken.",
    "Jadayu and Sabari helped in different ways and got liberated. By reciting Ramnam crores of sinners liberated. So namajapa , either Rama, Krishna or Shiva is very powerful",
    "Faith is greater than god, nothing is greater than faith.",
    "Father has given a new name to the world – “Yogi Ramsuratkumar”.",
    "If you feel that prayer, meditation, remembering god is much more important than any other worldly matter, you will have more concentration in japa.",
    "My father alone lives in this body. So I am everywhere. My life is everywhere, nobody else, nothing else.",
    "Identification that I am the body should stop. When this succeeds, the soul gets released. The soul is powerful and all pervading.",
    "If we keep good flowers in both hands left and right, they will give fragrance for both hands, without any reference to auspicious or inauspicious. Like that god and gnanis will treat all alike.",
    "Whenever you need help, you chant Yogi Ramsuratkumar. You should believe that I am with you wherever you are. Whenever you need help, you call my father. Tell this mantra: Yogi Ramsuratkumar, Then the support will come.",
    "The most essential and important thing in our life is that we should have faith in God, absolute faith in God. If we do not have Guru Bhakti and faith in God, whatever we may possess is of no use. If we have Guru Bhakti and Blessings of the Guru, then it is more than sufficient and it is more than what we can possess materially in this world.",
    "‘Where there is faith, there is no fate! Have faith. Fate will become inoperable.’",
    "‘If you are critical of my devotee, it’s the same as being critical of me.’",
    "God is not an object. It is a subject. We cannot see It, but we can feel it.’",
    "‘Don’t mind, what is mind. Doesn’t matter, what is matter.’",
    "When questioned ‘How can I best serve Father?’ Yogi Ramsuratkumar responded ‘Always remember God.’ ‘Each and every event, everywhere, is by His Will alone and is for our own good. Each thing in our lives is always only Blessing, even though it may not appear so, at the time.’",
    "Each event and experience in our lives is grace, and is God’s blessing, however it may seem. Father is Love, and is always beneficent, so all that He gives is beneficent.",
    "‘Grace is always pouring down on all of us.’",
    "'It’s okay. This Beggar belongs only to Father.’",
    "நாம் எல்லோரும் கடவுளுக்காக மட்டுமே வாழவேண்டும். அவருக்காக மட்டுமே மடிய வேண்டும். மற்றவையெல்லாம் வீண்.",
    "நாமத்தை சொல்லிக்கொண்டே இரு. நாமம் உன்னை சாத்வீகமாக மாற்றிவிடும். அது உன்னுடைய முழு இயல்பையுமே மாற்றிவிடும்.",
]
let books=[
    "Thought Power",
    "Work and its secret",
    "Bhakti Yoga",
    "Saranagatham",
    "Self Mastry",
    "The great Void",
    "Faith is power",
    "Upedasa of swami sivananda",
    "At the holy feet of my master",
    "Nectar Drops"
]
function getQuote(){
    let randomQuote=Math.floor(Math.random()*quotes.length)
    quoteEl.innerHTML=quotes[randomQuote]
}

function getBook(){
    let randomBook=Math.floor(Math.random()*books.length)
    bookEl.innerHTML=books[randomBook]
}