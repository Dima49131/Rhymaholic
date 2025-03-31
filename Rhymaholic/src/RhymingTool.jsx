import { useEffect } from 'react';
import "./RhymingTool.css";

const RhymingTool = () => {

const constArr = ["p","b","t","d","ʧ","dʒ","k","ɡ","f","v","θ","ð","s","s","z","ʃ","ʒ","m","n","ŋ","h","l","r","w","j"];
const symbolArr = ["eɪl","aɪl","ɔɪl","oʊl","eɪ","aɪ","ɔɪ","oʊ","aʊ","ju","ɑr","ɔr","ər","ɛr","ir","ɪr","ɜr","ʊr","ɪŋ","ɔŋ","æŋ","ʌŋ","ɑŋ","ɛŋ","æl","ɑl","ʌl","ɛl","il","ɪl","ʊl","æ","ɑ","ɔ","ʌ","ə","ɛ","i","ɪ","u","ʊ","ɝ"];
let randomWordArr = ["ridge","loss","rest","belly","bank","available","complain","pigeon","problem","absent","indication","carriage","guitar","structure","murder","eject","bless","subject","produce","provincial","service","passive","brilliance","brake","sailor","rack","bloodshed","champagne","throw","decorative","ally","aunt","thoughtful","progressive","express","reach","drain","us","feign","seize","pace","rotten","dog","presentation","flower","cut","cup","dimension","tired","award","consider","Europe","veil","ear","maze","fist","salad","hip","hiccup","bland","likely","pull","reader","string","reign","arrow","blast","conference","appear","attraction","promotion","roll","nationalist","punish","need","loyalty","stake","steak","conductor","humor","integrity","reception","incapable","trust","flow","hemisphere","orbit","cruel","junior","honest","class","location","hospitality","monopoly","prosecute","tempt","nonsense","hair","spontaneous","fling","bed","therapist","stomach","selection","sleep","outline","lecture","metal","scheme","deposit","dealer","church","exchange","bind","handicap","repetition","finger","reactor","loud","acid","plagiarize","ankle","justify","effort","coin","conclusion","leg","deprivation","island","carve","miner","oven","spectrum","railcar","overwhelm","arrest","tragedy","chorus","chance","technology","hang","describe","habit","confrontation","depend","power","youth","fountain","compliance","redeem","worth","park","button","manage","stay","colon","gift","authority","disgrace","call","disorder","divide","chimney","cheese","jewel","split","rob","mushroom","ratio","gloom","secure","evolution","unlawful","dividend","month","empirical","direction","rock","tell","cathedral","damage","auction","environment","applied","agent","bitter","testify","courage","climate","hall","pottery","warm","movement","seem","amputate","nature","school","forge","strategic","bring","absorb","handy","transfer","stubborn","wash","winner","kick","undermine","pitch","stuff","giant","shelter","pneumonia","integration","crop","wilderness","angel","perception","fairy","memory","trustee","record","splurge","addicted","squash","alive","coal","color-blind","claim","magnetic","eliminate","financial","pilot","refund","moral","slide","confusion","tourist","myth","latest","admit","restless","publish","settle","period","century","gene","congress","momentum","pity","satisfaction","porter","venture","multimedia","serve","psychology","clean","project","convert","arena","crowd","proposal","archive","load","sausage","curl","blame","leftovers","coma","guess","density","battery","shortage","concession","exploit","mill","impulse","mirror","attitude","fence","consolidate","insure","exemption","fixture","score","element","huge","navy","annual","egg","suspicion","aloof","determine","plastic","innocent","neutral","onion","proof","hypothesis","contribution","rough","grandfather","mystery","skeleton","forward","short","shrink","speed","engineer","mood","frame","buttocks","abundant","deck","fresh","rare","conceive","plan","commemorate","safe","review","urgency","charter","east","accurate","snarl","money","barrier","lighter","throne","insurance","abandon","perforate","treatment","cherry","clearance","bundle","consumer","separation","injury","pen","update","contempt","production","marine","disposition","monster","casualty","graduate","random","comfortable","report","bee","bishop","loot","beam","act","enthusiasm","chest","swim","deal","drag","note","movie","jet","dip","reporter","athlete","routine","right","dorm","ignite","center","predator","exposure","permission","trivial","identification","easy","sensation","tumble","concentration","date","mutation","speaker","demand","node","joint","issue","snub","officer","means","jurisdiction","cellar","debate","battle","linen","pasture","swallow","recommend","remunerate","bar","equal","calorie","country","fee","virgin","regular","upset","fireplace","abridge","ritual","ethnic","mechanical","bet","conventional","announcement","monk","pioneer","effective","rocket","scene","thin","emergency","question","packet","toll","offender","passage","affair","offset","hospital","turkey","cluster","healthy","bride","complete","dominant","spider","head","speech","museum","sense","quarrel","minor","engine","formula","elegant","share","insist","strict","recommendation","infrastructure","protest","implication","tight","salt","be","variety","nun","pollution","waiter","treat","profound","angle","sketch","fill","candle","view","hurl","chop","preach","custody","sow","horn","import","sickness","society","document","skip","just","love","uncle","penetrate","dance","sin","kill","reconcile","disco","mix","calculation","heir","telephone","abstract","scholar","bowel","seal","hope","soup","admire","broken","suspect","application","feeling","sympathetic","ceremony","behavior","key","ghost","arrange","estate","ward","future","cutting","pit","rubbish","club","performance","obese","slant","vegetation","matrix","wheat","screw","bolt","charge","trace","falsify","misery","trouble","creation","flexible","banish","appetite","gear","wolf","moving","term","abbey","crack","praise","relief","basin","sound","lip","greet","smooth","match","contradiction","bay","bench","tin","bargain","castle","concept","inch","sacred","rifle","engagement","tumour","expand","pick","essential","bedroom","research","dangerous","palm","program","multiply","film","convenience","glance","mold","sting","end","gain","lift","prestige","photography","community","create","supply","protection","fan","slippery","mail","cabin","doubt","pot","degree","sale","pleasure","constitutional","frank","enfix","loan","coverage","embryo","perfume","brink","referee","rib","grace","awful","route","diplomatic","respect","extort","mathematics","few","concrete","housewife","proper","seminar","feminist","scratch","yard","method","lonely","urge","wrist","do","Mars","elephant","hypothesize","friendly","present","bin","prize","dinner","thesis","block","automatic","jump","tribute","bang","scandal","pier","reptile","manufacturer","social","chew","disclose","unity","tense","contrast","conscious","merit","cycle","ruin","follow","sphere","injection","unfair","investigation","cafe","position","crusade","overcharge","nonremittal","conversation","due","exit","delay","hobby","forestry","observer","member","parachute","painter","discount","twist","sensitivity","fog","cable","drama","death","purpose","labour","mention","ditch","rehabilitation","shower","length","stream","harvest","girlfriend","wake","cause","represent","see","modest","simplicity","prince","city","influence","tank","champion","seat","lobby","place","garage","wealth","module","treasurer","cower","goal","compromise","circle","maximum","portrait","comedy","battlefield","regard","panic","privilege","introduce","soldier","declaration","is","charm","set","add","cover","cousin","relinquish","buffet","captain","baseball","corpse","sweat","breast","teach","vehicle","valley","global","message","hilarious","AIDS","cheek","muscle","mind","have","diplomat","tower","deadly","jungle","remedy","betray","rain","noble","sunrise","gun","law","dull","small","campaign","sister","wait","pause","drug","requirement","analysis","sail","excuse","peel","license","nest","temperature","gravity","unanimous","cater","friend","brown","ladder","preference","correspondence","impact","middle","helicopter","spirit","cage","agency","profit","glide","stride","bait","tenant","academy","writer","second","still","quaint","immune","assumption","bell","recruit","spy","union","owl","symbol","triangle","cheque","platform","rescue","shareholder","advantage","quantity","reasonable","bow","fastidious","quest","appreciate","despise","collect","presidential","technique","favourite","mountain","pile","offend","respectable","rainbow","boat","infinite","reliance","reward","listen","old","thirsty","survival","feel","insight","dead","gap","suntan","decide","bake","productive","blade","monkey","house","copper","general","revenge","garbage","frighten","lead","thank","nerve","generate","food","jelly","beginning","folk","start","mile","green","heal","lifestyle","policeman","smash","opposition","request","rent","dash","sector","anxiety","album","kidnap","employ","difficult","tail","rally","default","paragraph","hypnothize","account","first","jam","garlic","cottage","sour","pride","judicial","talk","dilute","approach","herd","neighbour","calendar","glasses","offense","climb","parade","van","whole","underline","conflict","applaud","wear","departure","coat","retain","horseshoe","ground","item","tiptoe","narrow","boot","combine","mutter","knife","adjust","promise","spot","lane","obligation","cow","calm","elect","chain","extraterrestrial","horror","publisher","difference","expose","restrict","star","worker","relationship","person","reluctance","economics","heaven","rung","system","indulge","suitcase","provoke","primary","invasion","storage","register","cassette","paper","appeal","forget","stain","oh","double","cultivate","execute","confession","wonder","stock","trainer","mud","trip","lean","launch","soft","script","earthflax","precedent","infect","makeup","side","enter","activate","enlarge","football","turn","flash","boy","harbor","kneel","car","case","culture","fade","cry","walk","obscure","cool","pocket","bat","overview","tease","guard","photograph","swarm","work","pleasant","passion","dedicate","fiction","debt","gregarious","inflate","scream","beard","patrol","monstrous","burn","band","ticket","wreck","convention","intelligence","goat","copy","fortune","potential","empire","willpower","wall","hand","species","clinic","observation","stop","gutter","store","dependence","snow","exempt","grow","licence","buy","pool","earwax","classify","knock","swing","interface","squeeze","reverse","ignore","lick","example","play","microphone","ambition","orientation","heart","talkative","bubble","guilt","polish","write","organize","resist","export","snatch","peanut","chin","wave","an","landowner","cooperative","army","medium","bill","mutual","atmosphere","TRUE","braid","management","truth","lamb","spring","gaffe","sharp","velvet","wage","slime","excess","answer","firefighter","floor","far","version","safari","board","allocation","fashion","cell","crossing","accept","common","pedestrian","tube","bridge","assault","book","factory","elaborate","reduce","freeze","chapter","staircase","needle","indirect","excitement","quiet","tick","weigh","organ","skin","interactive","payment","hill","haunt","syndrome","fur","favorable","killer","function","level","trunk","cooperation","snuggle","material","beg","dismissal","substitute","action","flock","industry","transmission","lot","crew","nuclear","bathroom","object","figure","complication","asset","spare","bulb","feast","salvation","citizen","fold","poison","trench","formal","nursery","finish","mosque","cylinder","disappointment","fault","behead","weapon","grave","solve","raise","nomination","hide","nut","precede","summary","twilight","forecast","eaux","dribble","foot","warn","pavement","timetable","drink","reduction","ambiguity","career","merchant","lodge","clarify","radiation","palace","sun","use","waterfall","eagle","competition","eye","feedback","franchise","proclaim","major","clothes","contract","hook","widen","pressure","dictate","tune","magnitude","surgeon","guerrilla","revolutionary","outside","admiration","pyramid","relieve","building","expenditure","abuse","tone","hardship","accumulation","equation","cave","exploration","summit","category","direct","training","solid","strip","salon","craftsman","unit","daughter","tender","variation","gold","straighten","penalty","judge","finished","tolerate","obstacle","vegetarian","creep","time","ban","sigh","nightmare","prosecution","lock","different","elite","blind","relate","sequence","notorious","statement","bean","compound","branch","cook","overeat","south","identity","housing","knot","advertise","glory","swear","include","craft","save","hell","mayor","bathtub","grind","resort","feminine","hit","flat","offspring","collection","provision","grounds","thaw","college","bag","coerce","bronze","hot","spread","grudge","hunter","decisive","network","lease","rise","inquiry","skilled","allowance","radical","he","lamp","realize","virus","agriculture","difficulty","track","sculpture","choice","fragment","choose","combination","parameter","judgment","dentist","brain","recovery","vegetable","slave","build","rabbit","access","form","bark","plaintiff","incident","refrigerator","pair","descent","directory","notebook","freckle","meadow","recession","response","patience","glow","camp","thumb","brand","radio","context","tactic","progress","snack","defeat","highlight","black","petty","to","get","steep","flight","memorandum","haircut","executrix","suffering","genuine","fisherman","speculate","glue","displace","pill","meaning","cast","misplace","player","hostile","decay","can","owner","sink","rotation","Bible","clear","dry","shame","incongruous","topple","acute","visual","extension","faint","efflux","tire","replace","circumstance","uniform","virtue","foster","stick","understand","catch","dine","joke","embarrassment","qualify","digital","greeting","portion","family","river","achieve","disability","crime","preparation","tree","remind","isolation","lawyer","warrant","cunning","recycle","crisis","late","fish","premium","leaf","exclude","harass","steam","graze","beautiful","snail","freighter","thigh","dollar","threat","translate","bend","die","shoot","explode","commitment","unlikely","danger","solo","self","adopt","lion","conscience","variable","regret","brag","endure","banner","biography","election","field","deficiency","weave","fun","bush","runner","marathon","vote","modernize","stamp","volcano","mechanism","develop","outer","seller","map","avant-garde","collar","fraud","snap","corruption","philosophy","critical","elapse","strike","horoscope","poor","linger","fight","straw","wander","father","government","mouth","tip","ice","discriminate","socialist","aisle","heat","core","designer","concert","by","locate","conception","warning","light","acceptable","producer","reliable","reputation","exercise","instal","reject","fascinate","crutch","height","mug","language","kinship","scale","contain","fast","spin","architecture","fit","cord","embark","donor","waist","jail","stress","imperial","restaurant","dictionary","fruit","spoil","grass","depart","source","morning","soap","rebel","central","me","operational","slogan","favor","facility","Sunday","bike","replacement","uncertainty","revival","mixture","construct","defend","net","suit","piano","temple","shape","avenue","quarter","approval","excavation","temporary","colorful","ego","ivory","fame","attack","large","dawn","talented","exhibition","chip","differ","count","entertain","root","index","shallow","pardon","lay","relative","doll","spit","electron","touch","tool","wrap","dismiss","habitat","hard","attic","thread","intermediate","show","execution","hour","inflation","prejudice","science","initiative","pump","cheap","offer","plug","bottom","color","shine","current","belong","white","confront","temptation","sign","scan","formation","privacy","deport","humanity","curriculum","maid","ready","child","invisible","photocopy","generation","vessel","sunshine","concern","section","season","give","great","torture","constituency","scatter","banana","shy","neighborhood","suggest","honor","emotion","disappoint","spine","panel","mature","necklace","wild","afford","stunning","censorship","ring","as","important","retire","anniversary","demonstrate","deserve","twitch","price","strong","soar","push","relation","occasion","flour","democratic","tie","bucket","shout","video","fraction","spell","personality","environmental","hover","edition","undertake","whip","rank","growth","leaflet","strange","salesperson","clash","particle","bus","other","continuation","formulate","residence","extend","fork","detective","attract","demonstrator","breeze","original","good","era","norm","related","troop","low","accent","correction","hardware","neck","dress","total","marble","tooth","terminal","plot","moon","chair","coincidence","meat","grant","student","dome","equinox","forest","brother","salmon","hate","equip","conservation","circulation","range","gasp","spray","mercy","edge","king","domination","experienced","instruction","march","precision","transaction","tolerant","shave","plead","half","knowledge","ceiling","coach","hesitate","wardrobe","dominate","move","beach","genetic","cancer","graphic","expectation","flag","stun","hallway","bitch","critic","ministry","biology","table","reinforce","arrogant","association","lack","berry","reform","crevice","umbrella","kidney","limit","mess","terrify","background","aid","breed","grateful","feature","victory","halt","whisper","seed","receipt","variant","door","voucher","evening","soil","jury","responsible","deteriorate","format","poll","subway","opposed","left","mistreat","inspector","undress","revise","cap","impress","rear","criminal","permanent","voice","display","put","reflection","prayer","breathe","instinct","inn","sticky","medal","smoke","arise","contact","evoke","learn","bleed","convulsion","communist","wheel","mastermind","contemporary","cope","theme","addition","continental","ordinary","clue","captivate","want","expression","trouser","sentence","possibility","my","X-ray","activity","minority","ant","divorce","criticism","breakfast","manufacture","bare","grief","slip","clay","proud","layer","leash","liberal","revoke","manager","outlook","diamond","sermon","list","coast","way","chaos","decline","slap","resign","journal","reserve","minister","channel","solution","debut","soul","pastel","sugar","ex","improvement","remain","deer","absolute","costume","basic","sit","sight","nap","unique","cart","prey","cream","village","belt","absorption","peace","sample","dive","quality","ballot","active","rich","possible","discipline","witness","mouse","similar","division","echo","exception","pupil","reveal","clock","courtesy","at","top","asylum","counter","railroad","rub","researcher","classroom","tap","slump","transition","sandwich","profile","catalogue","blank","wound","imposter","inhabitant","terms","fall","motorist","refuse","earthquake","memorial","adventure","border","jaw","reproduce","stable","capture","premature","sweep","mosquito","unfortunate","oral","scrape","assembly","intervention","control","desk","attractive","prediction","pluck","patch","prevalence","gossip","visit","pan","normal","publication","fine","reservoir","regulation","meeting","flu","cabinet","occupy","zero","curtain","reckless","tongue","even","advance","ride","cotton","consumption","shot","quotation","tiger","ignorant","sword","story","close","gesture","breakdown","basket","test","energy","butterfly","magazine","define","drum","state","spill","dump","path","mobile","stroke","camera","constitution","dialogue","silver","thrust","extinct","disk","qualified","round","affinity","full","voter","pudding","flourish","master","sea","glimpse","accessible","constant","false","mist","fabricate","perceive","federation","mask","wine","foundation","pawn","fate","corner","faithful","homosexual","opinion","miss","wedding","golf","nail","tread","origin","discourage","pursuit","drown","organisation","intention","fund","paralyzed","race","flatware","unaware","theory","limited","sweater","ferry","mass","composer","sweet","laborer","bite","prisoner","viable","back","pie","recover","deviation","strain","twin","bald","withdraw","role","area","beat","recognize","duke","world","draft","rugby","prefer","coup","knit","rush","damn","characteristic","driver","distortion","page","allow","artificial","adviser","bacon","theft","ideal","compose","medicine","offensive","stroll","rotate","or","charity","presence","tribe","plane","council","run","balance","wording","depression","dozen","professional","percent","row","lung","interference","depressed","brick","orchestra","belief","volume","civilian","quit","crackpot","broccoli","wind","dish","acquit","sex","tournament","wrestle","novel","blow","stretch","nuance","queue","sheet","escape","soprano","personal","dramatic","firm","texture","idea","embrace","vertical","distort","reference","compensation","aware","doctor","consensus","survivor","pepper","accident","slice","week","acceptance","coffee","trail","mainstream","weak","credit","knee","owe","expect","bad","cemetery","accountant","ribbon","mother","prove","audience","land","choke","rumor","brush","economy","snake","kettle","scenario","royalty","urine","autonomy","invite","insistence","entry","disagreement","blue","weed","racism","amuse","landscape","hen","home","axis","cross","econobox","shaft","dough","clique","shell","liberty","restoration","picture","make","overlook","linear","if","retailer","remark","capital","eternal","bread","education","guideline","frog","abnormal","attachment","drop","revive","ideology","presidency","discreet","cancel","vat","eavesdrop","fashionable","achievement","weight","chemistry","increase","vacuum","output","contraction","useful","dirty","posture","surprise","bird","morsel","sleeve","discover","satisfied","absence","lost","on","release","population","encourage","benefit","relax","policy","herb","ball","commission","station","burial","resolution","waste","celebration","superintendent","quota","quote","legislation","musical","colleague","planet","package","window","responsibility","continuous","penny","migration","main","am","relaxation","enjoy","separate","evaluate","fat","hammer","opposite","hike","favour","shiver","repeat","ranch","welfare","midnight","jacket","screen","risk","cold","intensify","apathy","heroin","compact","court","deputy","unlike","agenda","begin","adoption","Venus","consideration","past","space","definition","motif","projection","rule","lace","discrimination","loop","pig","fragrant","inject","freedom","poetry","cupboard","standard","ensure","arch","commerce","steward","pay","illustrate","convict","conglomerate","copyright","missile","first-hand","orgy","title","connection","fox","delicate","medieval","night","epicalyx","toss","cultural","realism","shadow","veteran","crouch","plant","smart","command","parking","destruction","sofa","assertive","factor","episode","established","barrel","lose","transport","poem","collapse","tycoon","director","agree","delivery","rhythm","romantic","cattle","stem","wriggle","minimum","imagine","slam","jest","wagon","beer","skate","peak","understanding","punch","pledge","remember","staff","eat","embox","ample","front","theorist","vigorous","circulate","insert","young","pat","hierarchy","integrated","conservative","experiment","pony","witch","bomber","oppose","resident","partnership","experience","practice","road","spend","moment","stumble","grimace","chauvinist","weakness","preoccupation","lily","art","card","employee","exotic","west","conspiracy","pierce","train","nominate","interrupt","possession","census","mourning","provide","distant","know","appoint","foreigner","consultation","comment","seek","drawer","thanks","domestic","throat","miscarriage","secular","aluminium","patent","houseplant","wood","log","reproduction","series","outlet","civilization","public","dignity","pillow","fool","cinema","curve","looting","sentiment","motorcycle","traction","delete","change","omission","pain","entertainment","functional","familiar","diet","article","chalk","margin","like","unrest","bounce","zone","forbid","eyebrow","advice","failure","frozen","professor","will","beef","password","electronics","lineage","win","switch","health","year","explosion","pass","company","artist","incentive","pension","war","part","authorise","faith","robot","agile","leak","motivation","guide","rational","woman","word","exceed","ash","majority","free","confuse","fax","approve","fare","piece","beneficiary","worry","minimize","ostracize","decrease","supplementary","in","cake","new","harmony","peasant","amber","rice","establish","transparent","trade","systematic","revolution","promote","straight","hut","wire","theater","stall","dark","mild","miserable","deficit","economic","volunteer","carpet","long","shed","adult","compartment","lesson","content","site","anger","tidy","glare","suppress","finance","decoration","innovation","orange","harm","deep","couple","tile","worm","design","chief","pack","result","refer","clerk","teenager","tasty","situation","survey","coincide","appointment","stage","think","highway","funeral","liver","tendency","notion","measure","thought","dream","software","siege","assume","tear","indoor","vision","customer","visible","implicit","drift","heel","sock","post","excavate","canvas","loose","husband","superior","oil","dressing","expertise","fantasy","pure","funny","holiday","resignation","we","horizon","cooperate","smile","surface","overall","please","leader","serious","iron","trick","code","horse","no","profession","distance","candidate","aquarium","dare","swell","mean","negligence","exclusive","marsh","boom","meal","print","raid","admission","trolley","bulletin","order","rider","redundancy","administration","extreme","wisecrack","helpless","credibility","executive","rage","watch","development","game","last","square","chart","character","harsh","detector","baby","address","girl","of","retreat","aviation","strength","support","high","appendix","carrot","swop","exile","information","litigation","mine","popular","constraint","lump","red","gate","glass","headline","office","participate","extent","gradient","chord","news","contrary","despair","history","district","pound","colony","behave","bury","childish","slot","team","timber","concede","attention","recording","sum","sell","assessment","gallon","ecstasy","blonde","winter","expansion","tropical","rhetoric","hole","line","toast","facade","water","tablet","stimulation","noise","tape","abolish","fuss","go","grip","inspiration","disaster","valid","cane","creed","unpleasant","morale","closed","convince","discuss","prison","articulate","basis","communication","raw","chicken","comfort","hero","joy","qualification","chimpanzee","desert","harmful","cucumber","irony","option","miracle","secretion","agony","trend","reaction","stadium","architect","property","constellation","flesh","feed","filter","roar","rape","objective","lazy","gas","dilemma","taxi","alcohol","rehearsal","laser","prospect","impound","galaxy","ignorance","argument","marriage","confidence","scrap","guarantee","symptom","fear","real","treaty","kid","spokesperson","restrain","process","lid","opponent","deny","mole","publicity","agreement","blackmail","courtship","struggle","predict","persist","fly","take","stool","taste","monarch","tension","threaten","illness","definite","rebellion","crude","pole","disturbance","body","float","meet","inhibition","retirement","reason","kit","folklore","affect","gem","goalkeeper","air","face","computer","parallel","sniff","justice","flood","day","dairy","shake","pest","hold","endorse","strikebreaker","grandmother","sheep","yearn","deter","glacier","look","tract","budget","stab","principle","television","press","business","return","advocate","sacrifice","marketing","mosaic","fair","utter","cheat","partner","introduction","freshman","opera","user","vague","so","groan","entitlement","orthodox","liability","borrow","pin","thick","auditor","wrong","shoulder","draw","tray","advertising","sustain","private","dynamic","crosswalk","frown","prescription","width","job","infection","settlement","confine","institution","violation","manual","cigarette","chocolate","voyage","force","brainstorm","workshop","disappear","value","mark","drive","committee","stereotype","grain","incredible","flush","neglect","diagram","pumpkin","care","sensitive","pray","inside","tax","estimate","legislature","leave","perform","cruelty","withdrawal","stitch","bomb","letter","diameter","product","session","examination","essay","drill","plaster","gallery","negotiation","bother","helmet","fever","model","open","sulphur","biscuit","emphasis","devote","native","relevance","corn","oak","singer","analyst","correspond","step","negative","sport","single","study","sip","notice","apology","patient","chase","soak","Koran","sand","safety","bullet","bloody","inspire","accompany","dragon","wife","hunting","teacher","fossil","protect","effect","deliver","cat","vein","guest","well","practical","hear","stand","aspect","ghostwriter","assignment","thinker","shatter","crash","compete","try","crown","polite","conviction","deprive","pop","consciousness","arm","priority","interest","kitchen","file","comprehensive","torch","gradual","bear","legend","desire","paradox","help","ethics","economist","ton","size","flawed","certain","flex","read","transform","positive","prosper","tradition","powder","explicit","laundry","improve","keep","enhance","age","point","gown","reflect","ambiguous","competence","tough","security","initial","layout","shelf","style","suite","ballet","traffic","appearance","check","image","cash","gravel","illusion","nervous","fix","strap","scramble","bold","representative","hostage","room","outfit","dose","acquaintance","forum","able","condition","banquet","freight","studio","abortion","trance","lounge","number","silk","enemy","slow","national","secretary","exaggerate","inappropriate","performer","shift","joystick","lunch","plain","hostility","birthday","ancestor","name","budge","shop","menu","stir","threshold","live","course","flavor","north","minute","frequency","silence","laboratory","manner","acquisition","jockey","paint","hotdog","burst","nose","denial","broadcast","happen","sodium","duck","pour","astonishing","glove","complex","proportion","ask","slab","printer","farewell","duty","average","steel","digress","governor","bottle","resource","final","party","verdict","grand","matter","suburb","dialect","leadership","reality","trap","operation","countryside","break","hurt","fail","retired","elbow","charismatic","shorts","satellite","literacy","distribute","jealous","pipe","headquarters","president","investment","alarm","man","physics","cereal","fire","queen","referral","say","distinct","link","sanctuary","coalition","host","perfect","pattern","extract","shock","discovery","truck","hay","error","instrument","cute","install","physical","seasonal","god","lie","swipe","spite","registration","shark","lend","exact","lover","crystal","muggy","defendant","lake","nationalism","trial","literature","retiree","wing","machinery","lemon","tent","earthwax","terrace","fleet"];

/*
I just decided to put the data in the same directory 
to avoid the headache of it being in another area
*/
let Dictionary = [];
let FrequencyDictionary = [];
let DataEntries;

fetch('/ipa-dictionary.json').then(response => response.json())
.then(data => {
  Dictionary = data; 
  DataEntries = Object.entries(Dictionary);  

}).catch(error => {console.error('Error loading IPA dictionary:', error);});

//  DataEntries = Object.entries(Dictionary);

fetch('/unigram_freq.json').then(response => response.json())
.then(data => {
  FrequencyDictionary = data;
}).catch(error => {console.error('Error loading Frequecy Dictionary:', error);});


useEffect(() => {
    resetGrid();

}, []);


let dontRunAgain = 0;

window.printRhymes1 = () => {
    thisIndexOfIPA = 1;
    thisIndexOfC = 1+1;
     let word = document.getElementById("inputBox1").value.replace(/[^a-zA-Z']/g, "");
     let filterParam = document.getElementById("inputBox2").value;
     if (filterParam == ""){filterParam = "Perfect";}
     let thisArr = FormatRhymes(word,filterParam);
    
     if (thisArr.length > 0){
        document.getElementById("output1").innerText = thisArr;
    }
    console.log("Did");
}



window.printRhymes2 = () => {thisIndexOfIPA = 2;thisIndexOfC = 4+1; let word = document.getElementById("inputBox4").value.replace(/[^a-zA-Z']/g, "");let filterParam = document.getElementById("inputBox5").value;if (filterParam == ""){filterParam = "Perfect";}let thisArr = FormatRhymes(word,filterParam);if (thisArr.length > 0){document.getElementById("output2").innerText = thisArr;}}
window.printRhymes3 = () => {thisIndexOfIPA = 3;thisIndexOfC = 7+1; let word = document.getElementById("inputBox7").value.replace(/[^a-zA-Z']/g, "");let filterParam = document.getElementById("inputBox8").value;if (filterParam == ""){filterParam = "Perfect";}let thisArr = FormatRhymes(word,filterParam);if (thisArr.length > 0){document.getElementById("output3").innerText = thisArr;}}
window.printRhymes4 = () => {thisIndexOfIPA = 4;thisIndexOfC = 10+1; let word = document.getElementById("inputBox10").value.replace(/[^a-zA-Z']/g, "");let filterParam = document.getElementById("inputBox11").value;if (filterParam == ""){filterParam = "Perfect";}let thisArr = FormatRhymes(word,filterParam);if (thisArr.length > 0){document.getElementById("output4").innerText = thisArr;}}
window.printRhymes5 = () => {thisIndexOfIPA = 5;thisIndexOfC = 13+1; let word = document.getElementById("inputBox13").value.replace(/[^a-zA-Z']/g, "");let filterParam = document.getElementById("inputBox14").value;if (filterParam == ""){filterParam = "Perfect";}let thisArr = FormatRhymes(word,filterParam);if (thisArr.length > 0){document.getElementById("output5").innerText = thisArr;}}
window.printRhymes6 = () => {thisIndexOfIPA = 6;thisIndexOfC = 16+1; let word = document.getElementById("inputBox16").value.replace(/[^a-zA-Z']/g, "");let filterParam = document.getElementById("inputBox17").value;if (filterParam == ""){filterParam = "Perfect";}let thisArr = FormatRhymes(word,filterParam);if (thisArr.length > 0){document.getElementById("output6").innerText = thisArr;}}
window.printRhymes7 = () => {thisIndexOfIPA = 7;thisIndexOfC = 19+1; let word = document.getElementById("inputBox19").value.replace(/[^a-zA-Z']/g, "");let filterParam = document.getElementById("inputBox20").value;if (filterParam == ""){filterParam = "Perfect";}let thisArr = FormatRhymes(word,filterParam);if (thisArr.length > 0){document.getElementById("output7").innerText = thisArr;}}
window.printRhymes8 = () => {thisIndexOfIPA = 8;thisIndexOfC = 22+1; let word = document.getElementById("inputBox22").value.replace(/[^a-zA-Z']/g, "");let filterParam = document.getElementById("inputBox23").value;if (filterParam == ""){filterParam = "Perfect";}let thisArr = FormatRhymes(word,filterParam);if (thisArr.length > 0){document.getElementById("output8").innerText = thisArr;}}
window.printRhymes9 = () => {thisIndexOfIPA = 9;thisIndexOfC = 25+1; let word = document.getElementById("inputBox25").value.replace(/[^a-zA-Z']/g, "");let filterParam = document.getElementById("inputBox26").value;if (filterParam == ""){filterParam = "Perfect";}let thisArr = FormatRhymes(word,filterParam);if (thisArr.length > 0){document.getElementById("output9").innerText = thisArr;}}
window.printRhymes10 = () => {thisIndexOfIPA = 10;thisIndexOfC = 28+1; let word = document.getElementById("inputBox28").value.replace(/[^a-zA-Z']/g, "");let filterParam = document.getElementById("inputBox29").value;if (filterParam == ""){filterParam = "Perfect";}let thisArr = FormatRhymes(word,filterParam);if (thisArr.length > 0){document.getElementById("output10").innerText = thisArr;}}
window.printRhymes11 = () => {thisIndexOfIPA = 11;thisIndexOfC = 31+1; let word = document.getElementById("inputBox31").value.replace(/[^a-zA-Z']/g, "");let filterParam = document.getElementById("inputBox32").value;if (filterParam == ""){filterParam = "Perfect";}let thisArr = FormatRhymes(word,filterParam);if (thisArr.length > 0){document.getElementById("output11").innerText = thisArr;}}
window.printRhymes12 = () => {thisIndexOfIPA = 12;thisIndexOfC = 34+1; let word = document.getElementById("inputBox34").value.replace(/[^a-zA-Z']/g, "");let filterParam = document.getElementById("inputBox35").value;if (filterParam == ""){filterParam = "Perfect";}let thisArr = FormatRhymes(word,filterParam);if (thisArr.length > 0){document.getElementById("output12").innerText = thisArr;}}
window.printRhymes13 = () => {thisIndexOfIPA = 13;thisIndexOfC = 37+1; let word = document.getElementById("inputBox37").value.replace(/[^a-zA-Z']/g, "");let filterParam = document.getElementById("inputBox38").value;if (filterParam == ""){filterParam = "Perfect";}let thisArr = FormatRhymes(word,filterParam);if (thisArr.length > 0){document.getElementById("output13").innerText = thisArr;}}
window.printRhymes14 = () => {thisIndexOfIPA = 14;thisIndexOfC = 40+1; let word = document.getElementById("inputBox40").value.replace(/[^a-zA-Z']/g, "");let filterParam = document.getElementById("inputBox41").value;if (filterParam == ""){filterParam = "Perfect";}let thisArr = FormatRhymes(word,filterParam);if (thisArr.length > 0){document.getElementById("output14").innerText = thisArr;}}




let containerIndex = 1;
let outputIndex = 1;
let thisIndexOfIPA = 1;
let thisIndexOfC = 1;
let alreadySearched = 0;



document.addEventListener("keydown", function(event) {
  var fillAreas = document.querySelectorAll('.fillArea');
  var restrictedCharacters = ["1", "2", "3", "4", "5"]; 

  var fillAreaInRange = true;

        for (let i = 0; i < fillAreas.length; i++){
          if (event.target === fillAreas[i]) {
            fillAreaInRange = false;

              if (i == 0  && restrictedCharacters.includes(event.key) || (i-2) % 3 == 1 && restrictedCharacters.includes(event.key)) {
                console.log(fillAreas[i]);
                  event.preventDefault();  
                  fillAreaInRange = true;

              }
          }
        }
      
      if (fillAreaInRange) {
        if (event.key === "1"){addInputContainer();}
        if (event.key === "2"){removeInputContainer();}
        if (event.key === "3"){fillRandom();}
        if (event.key === "4"){printAllRhymes();}
        if (event.key === "5"){resetGrid();}
    }

    if (event.key === "Enter") {
        printSpesificRhyme(event);
    }
  });



function fillRandom(){
  const inputContainers = document.querySelectorAll('.input-container');  
  for (let i = 0; i < inputContainers.length;i++){
    inputContainers[i].children[0].value = randomWordArr[randomNumGen(0,randomWordArr.length-1)];
  }
}

function randomNumGen(low, high) {return Math.floor(Math.random() * (high - low + 1)) + low;}

function addInputContainer() {
  if (outputIndex < 14){
    const parentContainer = document.getElementById('parentContainer');
    const inputContainer = document.createElement('div');
    inputContainer.classList.add('input-container');
    inputContainer.innerHTML = `
        <input type="text" id="inputBox${containerIndex}" value="" placeholder="Word" class="fillArea" autocomplete="off" tabindex="${2}">
        <input type="text" id="inputBox${containerIndex + 1}" value="" placeholder="Filter" class="fillArea" autocomplete="off"tabindex="${3}">
        <button class="rhymeButton" onclick="printRhymes${outputIndex}()">Print Rhymes</button>
        <div id="output${outputIndex}" class="output"></div>
    `;
    parentContainer.appendChild(inputContainer);
    containerIndex += 3; // Increment the container index for the next set of input boxes
    outputIndex++;
  }
  else {
    console.log("input boxes hit limit");
  }

}



function removeInputContainer() {
  const parentContainer = document.getElementById('parentContainer');
  const inputContainers = document.querySelectorAll('.input-container');  
  if (inputContainers.length > 0) {
      const lastInputContainer = inputContainers[inputContainers.length - 1];
      parentContainer.removeChild(lastInputContainer);
      
      containerIndex -= 3;
      outputIndex--;
  } else {
      console.log("No input container to remove.");
  }
}

function resetGrid(){  
  const parentContainer = document.getElementById('parentContainer');
  const inputContainers = document.querySelectorAll('.input-container');  

  for (let i = 0; i < inputContainers.length;i++){
    parentContainer.removeChild(inputContainers[i]); 
  }

  containerIndex = 1;
  outputIndex = 1;
  thisIndexOfC = 1;
  thisIndexOfC = 1;
  addInputContainer();
  addInputContainer();
  addInputContainer();
  addInputContainer();
  addInputContainer();
}

//printRhymes(inputWord,0,[1,2,3,'ms'],['']);



// 1 4 7 10 13 16
let lastTriggerTime = 0;
const debounceDelay = 500; // Adjust delay as needed (in milliseconds)


function printSpesificRhyme(event) {
    // Check if event exists and has target
    if (!event || !event.target) {
        console.error("Invalid event object");
        return;
    }

    const now = Date.now();
    if (now - lastTriggerTime < debounceDelay) {
        return;
    }
    lastTriggerTime = now;

    // Rest of your function...
    const inputContainer = event.target.closest('.input-container');
    if (!inputContainer) return;

    const inputArea = inputContainer.querySelector('input');
    if (!inputArea || inputArea.value === "") return;

    // Extract index from input ID
    const idParts = inputArea.id.match(/\d+/);
    if (!idParts) {
        console.error("No numeric ID found");
        return;
    }

    let index = parseInt(idParts[0], 10);
    index = (index + 2) / 3;
    const rhymeFunctionName = `printRhymes${index}`;
    
    if (typeof window[rhymeFunctionName] === 'function') {
        window[rhymeFunctionName]();
    } else {
        console.error(`Rhyme function ${rhymeFunctionName} not found`);
    }
}



function printAllRhymes() {
  const inputContainers = document.querySelectorAll('.input-container');
  for (let i = 0; i < inputContainers.length; i++) {
      const functionName = 'printRhymes' + (i + 1);
      setTimeout(() => {
        window[functionName]();
      }, i * 10); // Adjust the delay time (in milliseconds) as needed
    }
}


function capWord(word) {
  word = word.toLowerCase();
  return word.charAt(0).toUpperCase() + word.slice(1);
}


function convertToMultiLayeredArray(ipaDictionary) {
  const lines = ipaDictionary.split('\n');
  const result = lines.map(line => {
    const [word, transcription] = line.split(/\s+/);
    return [word, transcription];
  });
  return result;
}



/* * * new rhyming version goes below this * * */


const constInCommon = [["p","b","t","d","k","g"],["m","n","ŋ"],["s","z"],["ʃ","ʧ","ʒ","θ","f","v"]];


/**
 * perfectStrict
 * perfect
 * slantInCommon
 * slant
 * 
 * LastPartEqual
 * containsChar
 * lettersEqual
 * firstVowelEqual
 * lastVowelEqual
 * outerSlantAll
 * outerSlant
 * 
 */






function FormatRhymes(word,filter){
    let thisStr = "";
    let result = findAllFrequencies(getRhymes(word,filter));
    for (let i = 0; i < result.length;i++){thisStr += formatWord(result[i][0][0]) + "\n";}
    return thisStr;
    //console.log(thisStr);
}

function formatWord(word){
    return word.toUpperCase().charAt(0) + word.slice(1).toLowerCase();
}

function findAllFrequencies(array){
    let theseValues = [];
    for (let i = 0; i < array.length; i++) {
        theseValues.push([array[i],findWordFrequency(array[i][0])]);
    }
    theseValues.sort((b,a) => {const numA = parseInt(a[1] || 0); const numB = parseInt(b[1] || 0);return numA - numB;});
    return theseValues;
}

function findWordFrequency(word){
    const cleanWord = word.toLowerCase().replace(/[^a-z]/g, '');
    return FrequencyDictionary[cleanWord];
}
 
function getRhymes(word,filterParam){
   let finalArr = [];
    for (let i = 0; i < DataEntries.length; i++) {
        if (compareArrays(word,DataEntries[i][0],filterParam)){
            finalArr.push([DataEntries[i][0],DataEntries[i][1]]);
        }
    }
   return finalArr;
}

function getWordContent(word){
    let wordIPA = getIPA(word);     
    let strippedWord = wordIPA.replace(/[ˈˌːˑ]/g, '');
    let vowelRegex = new RegExp(symbolArr.join('|'), 'ig');
    let constRegex = new RegExp(`[${constArr.join('')}]`, 'ig');
    return [strippedWord.match(vowelRegex),strippedWord.match(constRegex),wordIPA];
}
 
function getIPA(word){
    return Dictionary[word.toUpperCase()];
}


 
function compareArrays(word,thisWord,filter){
  
    let arr1 = getWordContent(word);
    let arr2 = getWordContent(thisWord);

    let lengthEqual = arr1[0].length === arr2[0].length;

    let VowelsEqual = arr1[0].toString() == arr2[0].toString();
    let firstVowelEqual = arr1[0][0].toString() == arr2[0][0].toString();
    let lastVowelEqual = arr1[0][arr1[0].length-1].toString() == arr2[0][arr2[0].length-1].toString();
    let outerVowelsEqual = firstVowelEqual && lastVowelEqual;

    let includesVowel = arr2[0].toString().includes(arr1[0][0].toString());

    
    let lettersEqual = (arr1, arr2) => arr1[1].slice(0).toString() === arr2[1].slice(0).toString() && arr1.length === arr2.length;
    let lastLetterEqual = arr1[2][arr1[2].length-1].toString() == arr2[2][arr2[2].length-1].toString();
    let lettersEqualExceptFirst = (arr1, arr2) => arr1[1].slice(1).toString() === arr2[1].slice(1).toString() && arr1.length === arr2.length;
    let hasLastLetter = arr2[1] != null;
    
    let slantAllowed = getSlantOptions(arr1[1][arr1[1].length-1].toString());

    if (hasLastLetter && filter == "LastPartEqual" || hasLastLetter && filter == "LPE"){
        if (lastLetterEqual && lastVowelEqual && lengthEqual){
            return true;
        }
    }

    if (hasLastLetter && filter == "LettersEqual" || hasLastLetter && filter == "LE"){ 
        if (lettersEqual(arr1,arr2)){
            return true;
        }
    }

    
    if (filter == "FirstVowelEqual" || filter == "FVE"){
        if (firstVowelEqual){
            return true;
        }
    }
    if (filter == "LastVowelEqual" || filter == "LVE"){
        if (lastVowelEqual){
            return true;
        }
    }

    if (filter == "OuterSlantAll" || filter == "OSA"){
        if (outerVowelsEqual){
            return true;
        }
    }
    
    if (filter == "OuterSlant" && lengthEqual || filter == "OS" && lengthEqual){
        if (outerVowelsEqual){
            return true;
        }
    }

    if (filter == "Slant" || filter == "S"){ 
        if (VowelsEqual){
            return true;
        }
    }

    if (filter == "ContainsChar" || filter == "CC"){ 
        if (includesVowel){
            return true;
        }
    }
    
    if (filter == "Perfect" || filter == "P"){
        if (VowelsEqual && lastLetterEqual){
            return true;
        }
    }

    if (filter == "PerfectStrict" || filter == "PS"){
        if (hasLastLetter && VowelsEqual && lettersEqualExceptFirst(arr1,arr2)){
            return true;
        } else if (!hasLastLetter && VowelsEqual){
            return true;
        }
    }

    if (filter == "SlantInCommon" || filter == "SIC"){    
        if (hasLastLetter && VowelsEqual && slantAllowed){
            for (let i = 0; i < slantAllowed.length; i++) {
                    if (arr2[1][arr2[1].length-1].toString() == slantAllowed[i]){
                        return true;
                    }  
            }
        }
    }
    return false;
}

// used in slantAllowed for filter param "slantInCommon"
function getSlantOptions(char) {
    for (let i = 0; i < constInCommon.length; i++) {
        if (constInCommon[i].includes(char)) {
            return constInCommon[i];
        }
    }
    return []; 
}

  return (
    <div>

      <div className="parent-container2" id="parentContainer2">
        <h1>Rhyming Software 4.0</h1>

      </div>

      <div className="parent-container">
          <button className="containerButton" onClick={addInputContainer}>
            Add Row
          </button>
          <button className="containerButton" onClick={removeInputContainer}>
            Remove Row
          </button>
          <button className="containerButton" onClick={fillRandom}>
            Random Fill
          </button>
         
         {/*
          <button className="containerButton" onClick={printAllRhymes}>
            Print All
          </button>
        */}

          <button className="containerButton" onClick={resetGrid}>
            Reset
        </button>
        </div>
    

      <div className="parent-container" id="parentContainer">
      
        {/* Input containers will be dynamically generated here */}
      </div>
    </div>
  );
}

export default RhymingTool;

