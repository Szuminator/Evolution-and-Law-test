// ======================================================
// EDYTUJ TUTAJ: Dodaj swoje pytania do QUIZZES
// Każde pytanie: { q: "treść", options: ["A..","B.."], correct: 0 }
// correct = indeks poprawnej odpowiedzi (0=A, 1=B, 2=C, 3=D)
// ======================================================

const QUIZZES = {
  
  law: {
    name: "Prawo",
    letters: ["A", "B", "C"],
    questions: [
      // PRZYKŁAD — USUŃ I WSTAW SWOJE
      { q: "Zaspokajanie podstawowych potrzeb społecznych m.in. w zakresie dostarczania wody pitnej należy do zadań", options: ["województwa", "Powiatu", "gminy"], correct: 2 },
      { q: "Terminy udostępniania informacji o środowisku to", options: ["nie później niż w ciągu miesiąca od dnia otrzymania wniosku", "nie później niż w ciągu 2 miesięcy od dnia otrzymania wniosku", "nie później niż w ciągu 2 tygodni od dnia otrzymania wniosku"], correct: 0 },
      { q: "Screening to", options: ["określenie zakresu oceny oddziaływania przedsięwzięć na środowisku", "określenie zakresu użytkowania zasobami środowiska", "zakwalifikowanie przedsięwzięć do I lub II grupy"], correct: 2 },
      { q: "Organem wydającym decyzję środowiskową w przypadku zmiany lasu prywatnego na użytek rolny jest", options: ["starosta", "Regionalny Dyrektor Lasów Państwowych", "Regionalny Dyrektor Ochrony Środowiska"], correct: 2 },
      { q: "W ramach udziału społeczeństwa w OOŚ obywatel ma prawo do", options: ["składania uwag i wniosków do OOŚ", "wykonywania zmian w OOŚ", "opiniowania OOŚ"], correct: 0 },
      { q: "Pozwolenie emisyjne społeczeństwa nie jest wymagane", options: ["wprowadzanie ścieków do wód lub do ziemi", "wytwarzanie odpadów", "emisję hałasu"], correct: 2 },
      { q: "Postępowanie kompensacyjne ma na celu zapewnienie redukcji zanieczyszczeń", options: ["gleby na poziomie 30%", "powietrza na poziomie 30%", "hałasu"], correct: 1 },
      { q: "Zgłoszenie wodnoprawne przyjmuje", options: ["dyrektor regionalnego zarządu gospodarki wodnej Wód Polskich", "dyrektor zarządu zlewni Wód Polskich w sprawach pozwoleń wodnoprawnych", "kierownik nadzoru wodnego Wód Polskich"], correct: 2 },
      { q: "Opłata jest naliczana przez", options: ["wojewódzkiego inspektora ochrony środowiska", "podmiot korzystający ze środowiska", "urzędnika w gminie"], correct: 1 },
      { q: "Administracyjna kara pieniężna jest naliczana przez", options: ["wojewódzkiego inspektora ochrony środowiska", "podmiot korzystający ze środowiska", "urzędnika w gminie"], correct: 0 },
      { q: "Do podstawowych przesłanek przestępstw przeciwko środowiska według k.k. nie należy", options: ["istotna szkoda w środowisku", "zanieczyszczenie środowiska w znacznych rozmiarach", "rozległa degradacja środowiska"], correct: 2 },
      { q: "Zasada przezorności w ochronie środowiska polega na", options: ["na podejmowaniu wszelkich możliwych środków zapobiegawczych nawet jeśli negatywne oddziaływanie środowisko jest w pełni nierozpoznane", "ponoszeniu kosztów za zanieczyszczenie i naprawianie szkód w środowisku", "zapobieganiu negatywnemu oddziaływaniu na środowisku"], correct: 0 },
    ],
  },
  evo: {
    name: "Ewolucja",
    letters: ["A", "B", "C", "D"],
    questions: [
      // PRZYKŁAD — USUŃ I WSTAW SWOJE
      { q: "Co stanowi główną różnicę między darwinizmem a neodarwinizmem? ", options: ["Odrzucenie doboru naturalnego na rzecz skokowych mutacji. ", "Włączenie genetyki populacyjnej i reguł dziedziczenia Mendla do wyjaśniania mechanizmów doboru.", "Przyjęcie założenia, że cechy nabyte w ciągu życia osobniczego są dziedziczone.", "Uznanie, że ewolucja zachodzi wyłącznie na poziomie makroewolucyjnym, a nie wewnątrz gatunku."], correct: 1 },
      { q: "Który z wymienionych procesów jest pierwotnym źródłem nowych wariantów genów (alleli) w populacji, a nie jedynie mechanizmem tasowania już istniejącej zmienności? ", options: ["Crossing-over", "Niezależna segregacja chromosomów", "Mutacja punktowa", "Losowy dobór partnerów"], correct: 2 },
      { q: "W ewolucji, miarą „dostosowania” (fitness) organizmu jest przede wszystkim:", options: ["Jego siła fizyczna i zdolność do dominacji nad innymi osobnikami w stadzie.", "Długość jego życia (dożycie do starości).", "Liczba wydanego na świat potomstwa, które przeżyje i wyda własne potomstwo.", "Zdolność do szybkiej ucieczki przed drapieżnikiem."], correct: 2 },
      { q: "Jaka jest kluczowa różnica między doborem naturalnym a sztucznym?", options: ["Dobór sztuczny zawsze prowadzi do powstawania organizmów lepiej przystosowanych do przetrwania w dzikiej naturze.", "W doborze sztucznym presja selekcyjna jest wywierana celowo przez człowieka, a nie przez czynniki środowiskowe.", "Dobór sztuczny zachodzi znacznie wolniej niż dobór naturalny.", "Dobór sztuczny nie opiera się na zmienności genetycznej."], correct: 1 },
      { q: "Zjawisko radiacji adaptacyjnej (np. zięby Darwina na Galapagos) polega na:", options: ["Powolnym przekształcaniu się jednego gatunku w drugi bez zwiększania liczby gatunków (anageneza).", "Szybkim różnicowaniu się jednej linii ewolucyjnej w wiele gatunków zajmujących odmienne nisze ekologiczne.", "Dobór sztuczny zachodzi znacznie wolniej niż dobór naturalny.", "Dobór sztuczny nie opiera się na zmienności genetycznej."], correct: 1 },
      { q: "W jakich warunkach wpływ dryfu genetycznego na zmiany częstości alleli w populacji jest najsilniejszy?", options: ["W bardzo dużych, stabilnych populacjach o swobodnym przepływie genów.", "W populacjach poddanych bardzo silnej presji drapieżników.", "W małych, izolowanych populacjach (np. efekt założyciela).", "W populacjach, w których nie zachodzą żadne mutacje."], correct: 2 },
      { q: "Dlaczego w wyniku doboru płciowego u samców często wykształcają się cechy, które mogą utrudniać przetrwanie (np. wielki ogon pawia)? ", options: ["Ponieważ cechy te zwiększają sukces w rywalizacji o partnerkę lub atrakcyjność dla samic, co przeważa nad kosztem przeżycia.", "Ponieważ są to cechy atawistyczne, które nie zostały jeszcze wyeliminowane przez dobór naturalny.", "Ponieważ dobór płciowy działa w kierunku przeciwnym do ewolucji, osłabiając gatunek.", "Ponieważ dobór płciowy działa w kierunku przeciwnym do ewolucji, osłabiając gatunek."], correct: 0 },
      { q: "Zgodnie z teorią dostosowania łącznego (inclusive fitness) i regułą Hamiltona, altruizm ewoluuje najłatwiej, gdy: ", options: ["a.	Pomoc jest udzielana osobnikom niespokrewnionym, którzy mogą się w przyszłości odwdzięczyć.", "Koszt ponoszony przez altruistę jest wysoki, a zysk biorcy niski.", "Koszt ponoszony przez altruistę jest wysoki, a zysk biorcy niski.", "Działanie to przynosi korzyść całemu gatunkowi, niezależnie od pokrewieństwa."], correct: 2 },
      { q: "Specjacja sympatryczna różni się od allopatrycznej tym, że: ", options: ["Dochodzi do niej bez wystąpienia bariery geograficznej, na tym samym terytorium.", "Wymaga całkowitego rozdzielenia populacji przez np. morze lub pasmo górskie.", "Zawsze prowadzi do powstania organizmów bezpłodnych.", "Jest procesem znacznie wolniejszym i zachodzi tylko u zwierząt."], correct: 0 },
      { q: "Który z poniższych przykładów opisuje barierę prezygotyczną (przedzapłodnieniową)?", options: ["Potomstwo dwóch gatunków jest bezpłodne (np. muł).", "Mieszańce zamierają na wczesnym etapie rozwoju embrionalnego.", "Dwa gatunki mają różne pory godowe (izolacja czasowa), przez co ich gamety się nie spotykają.", "Potomstwo w pokoleniu F2 jest słabe i chorowite (rozpad mieszańców)."], correct: 2 },
      { q: "Introgresja to proces polegający na: ", options: ["Nagłym podwojeniu liczby chromosomów, prowadzącym do natychmiastowej specjacji", "Przepływie genów między gatunkami poprzez krzyżowanie się hybryd z jednym z gatunków rodzicielskich (krzyżowanie wsteczne).", "Całkowitym zlewaniu się dwóch gatunków w jeden nowy supergatunek.", "Eliminacji mieszańców przez dobór naturalny."], correct: 1 },
      { q: "Eliminacji mieszańców przez dobór naturalny.", options: ["Wszystkie zmiany ewolucyjne zachodzą w skokach co określony czas.", "Niektóre mutacje (głównie neutralne) akumulują się w sekwencjach DNA w stałym tempie w czasie.", "Tempo ewolucji zależy wyłącznie od zmian temperatury na Ziemi.", "Organizmy bardziej złożone ewoluują szybciej niż proste."], correct: 1 },
      { q: "Która z poniższych cech anatomicznych jest uznawana za jedną z najwcześniejszych kluczowych zmian w linii homininów (przodków człowieka), poprzedzającą znaczny wzrost mózgu? ", options: ["Rozwój mowy artykułowanej", "Dwunożna postawa ciała (bipedalizm).", "Zdolność do wytwarzania skomplikowanych narzędzi kamiennych.", "Zanik owłosienia na całym ciele."], correct: 1 },
      { q: "Co odróżnia ewolucję kulturową od biologicznej w kontekście transmisji informacji?", options: ["Informacja kulturowa może być przekazywana poziomo (między niespokrewnionymi osobnikami) i bardzo szybko.", "Ewolucja kulturowa jest w pełni zależna od mutacji w genach kodujących zachowanie.", "Cechy kulturowe (np. język) są dziedziczone wyłącznie w linii matczynej.", "Ewolucja kulturowa zachodzi wolniej niż ewolucja biologiczna."], correct: 0 },
      { q: "Która z poniższych par przedstawia narządy homologiczne, czyli takie, które mają wspólne pochodzenie ewolucyjne i podobny plan budowy, mimo że mogą pełnić różne funkcje?", options: ["Skrzydło muchy i skrzydło wróbla.", "Odnóże grzebne turkucia podjadka (owad) i kończyna przednia kreta (ssak).", "Płetwa wieloryba i ręka człowieka.", "Oko ośmiornicy i oko ryby."], correct: 2 },
    ],
  },
    mechAI: {
    name: "Mechanizmy ewolucji — bazaAI",
    letters: ["A","B","C","D"],
    questions: [
      { q:"1) Dobór naturalny działa najskuteczniej, gdy:", options:["cechy są nabyte w życiu","zmienność jest dziedziczna i wpływa na rozród","populacja jest zawsze mała","mutacje zawsze są korzystne"], correct:1 },
      { q:"2) Fitness (dostosowanie) w biologii ewolucyjnej to:", options:["siła mięśni","liczba przeżytych lat","wkład genów do następnego pokolenia","szybkość metabolizmu"], correct:2 },
      { q:"3) Dobór stabilizujący:", options:["faworyzuje skrajności","faworyzuje formy pośrednie","zwiększa wariancję cechy","zachodzi tylko w małych populacjach"], correct:1 },
      { q:"4) Dobór kierunkowy:", options:["utrzymuje średnią bez zmian","przesuwa rozkład cechy w jedną stronę","zawsze tworzy dwa piki","jest równoznaczny z dryfem"], correct:1 },
      { q:"5) Dobór rozrywający (różnicujący):", options:["faworyzuje skrajności","eliminuje skrajności","nie zmienia częstości alleli","wymaga braku zmienności"], correct:0 },
      { q:"6) Selekcja zależna od częstości (frequency-dependent) to taka, gdzie:", options:["sukces fenotypu zależy od jego częstości","zawsze wygrywa najrzadszy fenotyp","nie dotyczy zachowań","dotyczy wyłącznie genów letalnych"], correct:0 },
      { q:"7) Selekcja dodatnia (positive selection) oznacza:", options:["utrzymywanie polimorfizmu","wzrost częstości allelu zwiększającego fitness","spadek częstości allelu neutralnego","zawsze dobór stabilizujący"], correct:1 },
      { q:"8) Selekcja oczyszczająca (purifying selection) usuwa głównie:", options:["allele korzystne","mutacje szkodliwe","mutacje neutralne","haplotypy u roślin"], correct:1 },
      { q:"9) Selekcja z przewagą heterozygot (overdominance) to:", options:["AA najlepsze","Aa najlepsze","aa najlepsze","wszystkie mają równe fitness"], correct:1 },
      { q:"10) Dobór płciowy jest przykładem doboru, który zwiększa:", options:["przeżywalność zawsze","sukces w zdobyciu partnera","tempo mutacji","rekombinację"], correct:1 },

      { q:"11) Dryf genetyczny to:", options:["zmiana alleli przez dobór","losowe zmiany częstości alleli","mutacje kierunkowe","migracja osobników"], correct:1 },
      { q:"12) Dryf jest najsilniejszy w populacjach:", options:["bardzo dużych","o stałej liczebności","małych","z losowym kojarzeniem zawsze słabszy"], correct:2 },
      { q:"13) Efekt założyciela to:", options:["dobór na nowym obszarze","dryf po założeniu populacji przez małą liczbę osobników","wzrost mutacji po kolonizacji","zjawisko tylko u bakterii"], correct:1 },
      { q:"14) Wąskie gardło (bottleneck) powoduje:", options:["wzrost różnorodności","spadek różnorodności i silny dryf","brak zmian alleli","zawsze specjację"], correct:1 },
      { q:"15) Efektywna liczebność populacji (Ne) jest zwykle:", options:["większa niż N","mniejsza niż N","równa N","niezależna od struktury płci"], correct:1 },
      { q:"16) Mutacja jest:", options:["źródłem nowej zmienności","zawsze korzystna","zawsze szkodliwa","możliwa tylko w mejozie"], correct:0 },
      { q:"17) Najczęstszy efekt pojedynczej mutacji w populacji to:", options:["silnie korzystny","silnie szkodliwy","neutralny lub lekko szkodliwy","zawsze letalny"], correct:2 },
      { q:"18) Równowaga mutacja–selekcja dotyczy:", options:["alleli neutralnych","utrzymywania alleli szkodliwych przez ciągłe powstawanie mutacji","zjawisk migracji","specjacji sympatrycznej"], correct:1 },
      { q:"19) Przepływ genów (gene flow) to:", options:["wymiana alleli między populacjami przez migrację/krzyżowanie","losowa zmiana alleli bez migracji","tylko transport DNA w wirusach","zawsze zmniejsza Ne"], correct:0 },
      { q:"20) Gene flow zwykle:", options:["zwiększa różnice między populacjami","wyrównuje różnice genetyczne między populacjami","zawsze prowadzi do specjacji","zawsze obniża heterozygotyczność"], correct:1 },

      { q:"21) Rekombinacja w mejozie:", options:["tworzy nowe kombinacje alleli","zawsze usuwa mutacje","zastępuje dobór","zachodzi tylko u bezkręgowców"], correct:0 },
      { q:"22) Sprzężenie genów oznacza:", options:["geny na różnych chromosomach","geny blisko siebie dziedziczą się razem częściej","geny zawsze się rekombinują","brak map genetycznych"], correct:1 },
      { q:"23) „Selective sweep” to:", options:["utrata allelu przez dryf","gwałtowny wzrost częstości korzystnego allelu i spadek zmienności w okolicy","zwiększenie rekombinacji","zjawisko tylko mitochondrialne"], correct:1 },
      { q:"24) Hitchhiking (ciągnięcie genetyczne) oznacza:", options:["wzrost allelu neutralnego, bo jest blisko allelu korzystnego","spadek allelu korzystnego przez sąsiedztwo szkodliwego","zmianę alleli przez migrację","wzrost mutacji przez UV"], correct:0 },
      { q:"25) Background selection to:", options:["utrata zmienności wskutek usuwania mutacji szkodliwych","selekcja na kolor tła","dobór stabilizujący zawsze","dryf w tle geograficznym"], correct:0 },
      { q:"26) Epistaza to:", options:["wiele genów wpływa na jedną cechę","jeden gen wpływa na wiele cech","wpływ jednego genu zależy od allelu w innym genie","losowe sprzężenie"], correct:2 },
      { q:"27) Pleiotropia to:", options:["jeden gen wpływa na wiele cech","wiele genów na jedną cechę","mutacja neutralna","rekombinacja"], correct:0 },
      { q:"28) Kompromisy (trade-offs) w ewolucji wynikają często z:", options:["braku mutacji","pleiotropii i ograniczeń zasobów","zawsze z doboru płciowego","tylko z dryfu"], correct:1 },
      { q:"29) Ograniczenia ewolucyjne (constraints) oznaczają:", options:["ewolucja może iść w każdym kierunku równie łatwo","pewne zmiany są trudne przez historię/rozwój/biochemię","zawsze brak zmienności","działają tylko u ssaków"], correct:1 },
      { q:"30) Krajobraz fitness (fitness landscape) opisuje:", options:["mapę siedlisk","zależność fitness od genotypu/fenotypu","częstości alleli bez selekcji","tylko selekcję płciową"], correct:1 },

      { q:"31) Hardy–Weinberg wymaga m.in.:", options:["braku doboru i bardzo dużej populacji","silnego doboru","tylko migracji","braku rekombinacji"], correct:0 },
      { q:"32) W równowadze HW heterozygotyczność wynosi:", options:["p^2","2pq","q^2","p/q"], correct:1 },
      { q:"33) Inbreeding (kojarzenie krewniacze) zwykle:", options:["zwiększa heterozygotyczność","zwiększa homozygotyczność","nie wpływa na genotypy","zwiększa mutacje"], correct:1 },
      { q:"34) Depresja inbredowa jest często skutkiem:", options:["ujawnienia recesywnych alleli szkodliwych","wzrostu alleli korzystnych","braku mutacji","wyłącznie dryfu"], correct:0 },
      { q:"35) Balancing selection (selekcja równoważąca) utrzymuje:", options:["brak zmienności","polimorfizm w populacji","zawsze jeden allel","tylko allele letalne"], correct:1 },
      { q:"36) Dobór zależny od środowiska w czasie/przestrzeni może:", options:["utrzymać polimorfizm","zawsze usuwa zmienność","zawsze prowadzi do specjacji","nie dotyczy roślin"], correct:0 },
      { q:"37) Neutralna teoria ewolucji molekularnej sugeruje, że:", options:["większość zmian jest adaptacyjna","większość zmian na poziomie molekularnym jest neutralna i utrwala się przez dryf","mutacje nie zachodzą","dobór jest losowy"], correct:1 },
      { q:"38) dN/dS > 1 najczęściej wskazuje na:", options:["selekcję oczyszczającą","selekcję dodatnią","brak selekcji","wyłącznie dryf"], correct:1 },
      { q:"39) dN/dS < 1 zwykle oznacza:", options:["selekcję dodatnią","selekcję oczyszczającą","brak selekcji","konwergencję zawsze"], correct:1 },
      { q:"40) Zegar molekularny opiera się na założeniu, że:", options:["mutacje zachodzą w stałej liczbie na pokolenie u wszystkich","tempo zmian bywa w przybliżeniu stałe dla danego markeru","dobór nie istnieje","dryf nie wpływa"], correct:1 },

      { q:"41) Specjacja allopatryczna to:", options:["powstawanie gatunków bez bariery","powstawanie gatunków przy izolacji geograficznej","powstawanie przez hybrydyzację tylko","powstawanie tylko u bakterii"], correct:1 },
      { q:"42) Specjacja sympatryczna:", options:["wymaga bariery geograficznej","zachodzi w tym samym obszarze (np. zmiana niszy, dobór rozrywający, poliploidyzacja)","nie występuje u roślin","zawsze jest szybka i częsta"], correct:1 },
      { q:"43) Izolacja przedzygotyczna obejmuje:", options:["bezużyteczne hybrydy","bezpłodność mieszańców","różnice w czasie godów lub zachowaniach","rozpad zarodka"], correct:2 },
      { q:"44) Izolacja postzygotyczna obejmuje:", options:["różne siedliska","barierę mechaniczną","bezpłodność mieszańców","różny czas godów"], correct:2 },
      { q:"45) Wzmocnienie (reinforcement) to:", options:["zwiększanie krzyżowania hybryd","dobór wzmacniający bariery przedzygotyczne w strefie kontaktu","efekt założyciela","zawsze specjacja sympatryczna"], correct:1 },
      { q:"46) Strefa hybrydyzacji (hybrid zone) to:", options:["miejsce bez migracji","obszar, gdzie krzyżują się populacje i powstają mieszańce","zawsze nowy gatunek","tylko u roślin"], correct:1 },
      { q:"47) Reguła Haldane’a dotyczy:", options:["przewagi heterozygot","częstszego problemu z płcią heterogametyczną w hybrydach (bezpłodność/nieżywotność)","dryfu w małych populacjach","doboru stabilizującego"], correct:1 },
      { q:"48) Poliploidyzacja jako mechanizm specjacji jest typowa szczególnie dla:", options:["ssaków","ptaków","roślin","owadów społecznych"], correct:2 },
      { q:"49) Gatunki pierścieniowe (ring species) ilustrują:", options:["brak specjacji","ciągłą zmienność z niezgodnością na końcach pierścienia","wyłącznie dryf","selekcję oczyszczającą"], correct:1 },
      { q:"50) Radiacja adaptacyjna to:", options:["zmniejszanie liczby gatunków","szybkie różnicowanie na wiele gatunków zajmujących różne nisze","zawsze efekt dryfu","wymaga braku zmienności"], correct:1 },

      { q:"51) Konwergencja ewolucyjna to:", options:["wspólne pochodzenie struktur","niezależne powstanie podobnych cech pod podobną presją","zawsze wynik migracji","efekt wąskiego gardła"], correct:1 },
      { q:"52) Homologia oznacza:", options:["podobieństwo z powodu funkcji","podobieństwo z powodu wspólnego pochodzenia","brak pokrewieństwa","zawsze identyczne geny"], correct:1 },
      { q:"53) Dryf może prowadzić do utrwalenia allelu nawet jeśli jest:", options:["lekko szkodliwy","silnie korzystny","zawsze letalny","tylko dominujący"], correct:0 },
      { q:"54) Współczynnik selekcji (s) opisuje:", options:["wielkość populacji","spadek fitness genotypu względem najlepszego","tempo mutacji","liczbę locus"], correct:1 },
      { q:"55) Jeśli allel ma selekcyjną przewagę 1%, to:", options:["zawsze się utrwali","ma s≈0.01 (w prostym ujęciu)","to jest dryf","oznacza dN/dS<1"], correct:1 },
      { q:"56) Dominacja w genetyce populacyjnej wpływa na:", options:["czy allel recesywny „ukrywa się” w heterozygotach","czy mutacje zachodzą","czy jest migracja","czy HW działa"], correct:0 },
      { q:"57) Allel recesywny szkodliwy jest trudniej usunąć, gdy:", options:["jest częsty","jest rzadki (ukrywa się w heterozygotach)","jest dominujący","Ne jest ogromne"], correct:1 },
      { q:"58) Selekcja zależna od płci (sexual antagonism) to:", options:["allel korzystny u samców, szkodliwy u samic (lub odwrotnie)","brak różnic fitness","zawsze przewaga heterozygot","tylko u roślin"], correct:0 },
      { q:"59) Dobór krewniaczy (kin selection) jest związany z:", options:["dryfem","fitness inkluzywnym","mutacją","specjacją allopatryczną"], correct:1 },
      { q:"60) Reguła Hamiltona (uproszczona) mówi, że altruizm może się szerzyć, gdy:", options:["rB > C","C > rB","r=0","B=0"], correct:0 },

      { q:"61) Selekcja grupowa w nowoczesnym ujęciu często:", options:["zastępuje selekcję krewniaczą","jest opisywana równoważnie z selekcją wielopoziomową","wyklucza geny","dotyczy tylko bakterii"], correct:1 },
      { q:"62) Dobór zależny od gęstości (density-dependent) oznacza:", options:["fitness nie zależy od środowiska","fitness zależy od zagęszczenia populacji (konkurencja/choroby)","to samo co HW","to samo co epistaza"], correct:1 },
      { q:"63) Koewolucja to:", options:["wzrost jednego gatunku bez wpływu innych","wzajemne oddziaływanie selekcyjne między gatunkami","specjacja sympatryczna","dryf w dwóch populacjach"], correct:1 },
      { q:"64) Hipoteza Czerwonej Królowej dotyczy:", options:["stabilizującej selekcji","ciągłego „wyścigu zbrojeń” (np. gospodarz–pasożyt)","braku zmian ewolucyjnych","wyłącznie specjacji"], correct:1 },
      { q:"65) Mimetyzm Batesowski to:", options:["dwa gatunki toksyczne upodabniają się","gatunek nietoksyczny upodabnia się do toksycznego","zawsze dotyczy roślin","tylko w wodzie"], correct:1 },
      { q:"66) Mimetyzm Müllera to:", options:["nietoksyczny udaje toksyczny","dwa (lub więcej) toksyczne gatunki upodabniają się","brak selekcji","zjawisko losowe"], correct:1 },
      { q:"67) Selekcja stabilizująca zwykle zmniejsza:", options:["średnią cechy","wariancję cechy","liczbę genów","tempo mutacji"], correct:1 },
      { q:"68) Selekcja rozrywająca może sprzyjać:", options:["zanikowi nisz","powstaniu polimorfizmu i specjacji","HW zawsze","spadkowi heterozygotyczności zawsze"], correct:1 },
      { q:"69) Dobór naturalny działa na:", options:["genotyp bez fenotypu","fenotyp (skutki genów w środowisku)","mutacje bez ekspresji","allele w izolacji od środowiska"], correct:1 },
      { q:"70) Dobór nie może tworzyć zmienności, bo:", options:["zmienność pochodzi z mutacji i rekombinacji","mutacje nie zachodzą","rekombinacja usuwa zmienność","dryf zawsze ją tworzy"], correct:0 },

      { q:"71) Dobór na poziomie genu (gene-level) zakłada, że:", options:["geny nie konkurują","allele konkurują o transmisję do następnych pokoleń","osobniki nie mają znaczenia","populacje nie istnieją"], correct:1 },
      { q:"72) Konflikt genomowy (np. meiotic drive) oznacza:", options:["idealną współpracę alleli","allele zwiększają swoją transmisję kosztem innych procesów/fitness","wyłącznie dryf","zawsze u ssaków"], correct:1 },
      { q:"73) „Meiotic drive” to:", options:["uczciwy podział alleli 50/50","nieuczciwa segregacja zwiększająca transmisję jednego allelu","migracja gamet","mutacja punktowa"], correct:1 },
      { q:"74) Równowaga selekcja–dryf zależy m.in. od:", options:["Ne i siły selekcji (s)","koloru fenotypu","liczby gatunków","zawsze od mutacji tylko"], correct:0 },
      { q:"75) Przybliżenie: selekcja „wygrywa” z dryfem, gdy:", options:["Ne*s << 1","Ne*s >> 1","s=0","Ne=0"], correct:1 },
      { q:"76) Dobór równoważący może wynikać z:", options:["przewagi heterozygot","selekcji zależnej od częstości","zmienności środowiska","wszystkie powyższe"], correct:3 },
      { q:"77) Migracja jednej populacji do drugiej zwykle zwiększa:", options:["zróżnicowanie między populacjami","heterozygotyczność w populacji przyjmującej","homozygotyczność zawsze","częstość mutacji"], correct:1 },
      { q:"78) Klina (cline) to:", options:["gradient cechy/allelu w przestrzeni","nagły skok bez przyczyny","tylko efekt doboru płciowego","strefa bez migracji"], correct:0 },
      { q:"79) Dobór na cechy ilościowe (poligeniczne) często:", options:["nie zachodzi","zależny jest od wariancji genetycznej addytywnej","zawsze prowadzi do utrwalenia jednego allelu","jest wyłącznie neutralny"], correct:1 },
      { q:"80) Dziedziczność (h²) w ujęciu ilościowym to:", options:["udział wariancji środowiskowej","udział wariancji genetycznej addytywnej w wariancji fenotypowej","liczba alleli","miara mutacji"], correct:1 },

      { q:"81) Selekcja sztuczna różni się od naturalnej tym, że:", options:["nie zmienia alleli","kierunek wyznacza człowiek (kryterium hodowlane)","zawsze jest wolniejsza","działa tylko na DNA mt"], correct:1 },
      { q:"82) „Dobór” nie jest tym samym co „adaptacja”, bo:", options:["adaptacja to cecha zwiększająca fitness, dobór to proces","adaptacja = dryf","dobór = mutacja","adaptacja zachodzi bez dziedziczenia"], correct:0 },
      { q:"83) Selekcja płciowa może prowadzić do:", options:["cech kosztownych dla przeżycia","zawsze wzrostu przeżywalności","zaniku dymorfizmu płciowego","braku ornamentów"], correct:0 },
      { q:"84) Hipoteza handicapu sugeruje, że ornamenty:", options:["muszą być tanie","mogą być kosztowne i przez to wiarygodne sygnały jakości","są neutralne","powstają tylko przez dryf"], correct:1 },
      { q:"85) Dobór krewniaczy przewiduje większą altruistyczność wobec:", options:["osobników niespokrewnionych","krewnych o wyższym r","zawsze samców","zawsze starszych"], correct:1 },
      { q:"86) Ewolucyjna stabilność strategii (ESS) dotyczy:", options:["tylko genetyki molekularnej","strategii, której nie da się łatwo „wypchnąć” przez mutantów","zawsze doboru stabilizującego","tylko roślin"], correct:1 },
      { q:"87) Dryf może zwiększać różnice między populacjami, bo:", options:["działa identycznie wszędzie","jest losowy i niezależny w populacjach","zawsze wyrównuje allele","eliminuje migrację"], correct:1 },
      { q:"88) F_ST mierzy głównie:", options:["siłę mutacji","zróżnicowanie genetyczne między populacjami","liczbę genów","tempo rekombinacji"], correct:1 },
      { q:"89) Wysokie F_ST zwykle sugeruje:", options:["silny gene flow","silną strukturę populacji / mały gene flow","brak dryfu","zawsze dobór dodatni"], correct:1 },
      { q:"90) Selekcja lokalna przy umiarkowanym gene flow może prowadzić do:", options:["lokalnych adaptacji","zawsze homogenizacji","braku polimorfizmu","zaniku doboru"], correct:0 },

      { q:"91) „Dobór przeciwko hybrydom” w strefie kontaktu może:", options:["zmniejszać izolację","zwiększać izolację (reinforcement)","zawsze prowadzić do fuzji populacji","nie ma wpływu"], correct:1 },
      { q:"92) Bariera ekologiczna (habitat isolation) to przykład izolacji:", options:["postzygotycznej","przedzygotycznej","chromosomalnej zawsze","molekularnej"], correct:1 },
      { q:"93) Izolacja czasowa (temporal isolation) polega na:", options:["różnym czasie aktywności/rozrodu","różnej liczbie chromosomów","bezdzietności hybryd","zawsze barierze mechanicznej"], correct:0 },
      { q:"94) Izolacja mechaniczna dotyczy:", options:["niewspółpasowania narządów/struktur rozrodczych","różnic w diecie","różnic w czasie godów","bezdzietności mieszańców"], correct:0 },
      { q:"95) Izolacja gametyczna to:", options:["brak kontaktu osobników","brak zapłodnienia mimo kontaktu gamet","rozpad zarodka","bezpłodność F1"], correct:1 },
      { q:"96) Hybrydyzacja może:", options:["nigdy nie dawać nowych linii","czasem prowadzić do introgresji lub nowych gatunków (szczególnie u roślin)","zawsze niszczyć gatunki","być wyłącznie losowa"], correct:1 },
      { q:"97) Introgresja to:", options:["przenikanie alleli między gatunkami przez krzyżowanie i backcrossing","specjacja allopatryczna","wąskie gardło","dryf w małej populacji"], correct:0 },
      { q:"98) Selekcja zrównoważona może utrzymać allele szkodliwe, gdy:", options:["są dominujące","dają przewagę w heterozygocie lub w pewnych warunkach","nie ma mutacji","Ne=0"], correct:1 },
      { q:"99) W ewolucji molekularnej mutacja synonimiczna zwykle:", options:["zmienia aminokwas","nie zmienia aminokwasu","zawsze jest letalna","zawsze jest korzystna"], correct:1 },
      { q:"100) Mutacja niesynonimiczna:", options:["nie zmienia białka","zmienia aminokwas w białku","dotyczy tylko intronów","nie ma znaczenia dla doboru"], correct:1 },
      { q: "Co stanowi główną różnicę między darwinizmem a neodarwinizmem? ", options: ["Odrzucenie doboru naturalnego na rzecz skokowych mutacji. ", "Włączenie genetyki populacyjnej i reguł dziedziczenia Mendla do wyjaśniania mechanizmów doboru.", "Przyjęcie założenia, że cechy nabyte w ciągu życia osobniczego są dziedziczone.", "Uznanie, że ewolucja zachodzi wyłącznie na poziomie makroewolucyjnym, a nie wewnątrz gatunku."], correct: 1 },
      { q: "Który z wymienionych procesów jest pierwotnym źródłem nowych wariantów genów (alleli) w populacji, a nie jedynie mechanizmem tasowania już istniejącej zmienności? ", options: ["Crossing-over", "Niezależna segregacja chromosomów", "Mutacja punktowa", "Losowy dobór partnerów"], correct: 2 },
      { q: "W ewolucji, miarą „dostosowania” (fitness) organizmu jest przede wszystkim:", options: ["Jego siła fizyczna i zdolność do dominacji nad innymi osobnikami w stadzie.", "Długość jego życia (dożycie do starości).", "Liczba wydanego na świat potomstwa, które przeżyje i wyda własne potomstwo.", "Zdolność do szybkiej ucieczki przed drapieżnikiem."], correct: 2 },
      { q: "Jaka jest kluczowa różnica między doborem naturalnym a sztucznym?", options: ["Dobór sztuczny zawsze prowadzi do powstawania organizmów lepiej przystosowanych do przetrwania w dzikiej naturze.", "W doborze sztucznym presja selekcyjna jest wywierana celowo przez człowieka, a nie przez czynniki środowiskowe.", "Dobór sztuczny zachodzi znacznie wolniej niż dobór naturalny.", "Dobór sztuczny nie opiera się na zmienności genetycznej."], correct: 1 },
      { q: "Zjawisko radiacji adaptacyjnej (np. zięby Darwina na Galapagos) polega na:", options: ["Powolnym przekształcaniu się jednego gatunku w drugi bez zwiększania liczby gatunków (anageneza).", "Szybkim różnicowaniu się jednej linii ewolucyjnej w wiele gatunków zajmujących odmienne nisze ekologiczne.", "Dobór sztuczny zachodzi znacznie wolniej niż dobór naturalny.", "Dobór sztuczny nie opiera się na zmienności genetycznej."], correct: 1 },
      { q: "W jakich warunkach wpływ dryfu genetycznego na zmiany częstości alleli w populacji jest najsilniejszy?", options: ["W bardzo dużych, stabilnych populacjach o swobodnym przepływie genów.", "W populacjach poddanych bardzo silnej presji drapieżników.", "W małych, izolowanych populacjach (np. efekt założyciela).", "W populacjach, w których nie zachodzą żadne mutacje."], correct: 2 },
      { q: "Dlaczego w wyniku doboru płciowego u samców często wykształcają się cechy, które mogą utrudniać przetrwanie (np. wielki ogon pawia)? ", options: ["Ponieważ cechy te zwiększają sukces w rywalizacji o partnerkę lub atrakcyjność dla samic, co przeważa nad kosztem przeżycia.", "Ponieważ są to cechy atawistyczne, które nie zostały jeszcze wyeliminowane przez dobór naturalny.", "Ponieważ dobór płciowy działa w kierunku przeciwnym do ewolucji, osłabiając gatunek.", "Ponieważ dobór płciowy działa w kierunku przeciwnym do ewolucji, osłabiając gatunek."], correct: 0 },
      { q: "Zgodnie z teorią dostosowania łącznego (inclusive fitness) i regułą Hamiltona, altruizm ewoluuje najłatwiej, gdy: ", options: ["a.	Pomoc jest udzielana osobnikom niespokrewnionym, którzy mogą się w przyszłości odwdzięczyć.", "Koszt ponoszony przez altruistę jest wysoki, a zysk biorcy niski.", "Koszt ponoszony przez altruistę jest wysoki, a zysk biorcy niski.", "Działanie to przynosi korzyść całemu gatunkowi, niezależnie od pokrewieństwa."], correct: 2 },
      { q: "Specjacja sympatryczna różni się od allopatrycznej tym, że: ", options: ["Dochodzi do niej bez wystąpienia bariery geograficznej, na tym samym terytorium.", "Wymaga całkowitego rozdzielenia populacji przez np. morze lub pasmo górskie.", "Zawsze prowadzi do powstania organizmów bezpłodnych.", "Jest procesem znacznie wolniejszym i zachodzi tylko u zwierząt."], correct: 0 },
      { q: "Który z poniższych przykładów opisuje barierę prezygotyczną (przedzapłodnieniową)?", options: ["Potomstwo dwóch gatunków jest bezpłodne (np. muł).", "Mieszańce zamierają na wczesnym etapie rozwoju embrionalnego.", "Dwa gatunki mają różne pory godowe (izolacja czasowa), przez co ich gamety się nie spotykają.", "Potomstwo w pokoleniu F2 jest słabe i chorowite (rozpad mieszańców)."], correct: 2 },
      { q: "Introgresja to proces polegający na: ", options: ["Nagłym podwojeniu liczby chromosomów, prowadzącym do natychmiastowej specjacji", "Przepływie genów między gatunkami poprzez krzyżowanie się hybryd z jednym z gatunków rodzicielskich (krzyżowanie wsteczne).", "Całkowitym zlewaniu się dwóch gatunków w jeden nowy supergatunek.", "Eliminacji mieszańców przez dobór naturalny."], correct: 1 },
      { q: "Eliminacji mieszańców przez dobór naturalny.", options: ["Wszystkie zmiany ewolucyjne zachodzą w skokach co określony czas.", "Niektóre mutacje (głównie neutralne) akumulują się w sekwencjach DNA w stałym tempie w czasie.", "Tempo ewolucji zależy wyłącznie od zmian temperatury na Ziemi.", "Organizmy bardziej złożone ewoluują szybciej niż proste."], correct: 1 },
      { q: "Która z poniższych cech anatomicznych jest uznawana za jedną z najwcześniejszych kluczowych zmian w linii homininów (przodków człowieka), poprzedzającą znaczny wzrost mózgu? ", options: ["Rozwój mowy artykułowanej", "Dwunożna postawa ciała (bipedalizm).", "Zdolność do wytwarzania skomplikowanych narzędzi kamiennych.", "Zanik owłosienia na całym ciele."], correct: 1 },
      { q: "Co odróżnia ewolucję kulturową od biologicznej w kontekście transmisji informacji?", options: ["Informacja kulturowa może być przekazywana poziomo (między niespokrewnionymi osobnikami) i bardzo szybko.", "Ewolucja kulturowa jest w pełni zależna od mutacji w genach kodujących zachowanie.", "Cechy kulturowe (np. język) są dziedziczone wyłącznie w linii matczynej.", "Ewolucja kulturowa zachodzi wolniej niż ewolucja biologiczna."], correct: 0 },
      { q: "Która z poniższych par przedstawia narządy homologiczne, czyli takie, które mają wspólne pochodzenie ewolucyjne i podobny plan budowy, mimo że mogą pełnić różne funkcje?", options: ["Skrzydło muchy i skrzydło wróbla.", "Odnóże grzebne turkucia podjadka (owad) i kończyna przednia kreta (ssak).", "Płetwa wieloryba i ręka człowieka.", "Oko ośmiornicy i oko ryby."], correct: 2 },
    ]
  },
mechAI15: {
  name: "Mechanizmy ewolucji — losuj 15 (bazaAI)",
  letters: ["A","B","C","D"],
  questions: [] // zostanie uzupełnione losowo w init()
},

};

// ====== Helpers ======
function pickRandomUnique(arr, n) {
  const copy = arr.slice();
  // Fisher–Yates shuffle
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, Math.min(n, copy.length));
}

function qs(sel) { return document.querySelector(sel); }
function qsa(sel) { return Array.from(document.querySelectorAll(sel)); }

function getQuizKeyFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const key = params.get("quiz");
  return (key && QUIZZES[key]) ? key : "law";
}

// ====== Main ======
const els = {
  quizName: qs("#quizName"),
  counter: qs("#counter"),
  answered: qs("#answered"),
  bar: qs("#bar"),
  questionText: qs("#questionText"),
  options: qs("#options"),
  prevBtn: qs("#prevBtn"),
  nextBtn: qs("#nextBtn"),
  submitBtn: qs("#submitBtn"),
  resetBtn: qs("#resetBtn"),
  result: qs("#result"),
  scoreText: qs("#scoreText"),
  review: qs("#review"),
};

let state = {
  quizKey: getQuizKeyFromUrl(),
  index: 0,
  answers: [],
  activeQuiz: null
};

function getActiveQuiz() {
  return state.activeQuiz || QUIZZES[state.quizKey];
}


function init() {
  // Jeśli ktoś odpali app.js na index.html (bez elementów quizu), po prostu wyjdź:
  if (!els.questionText) return;

  if (state.quizKey === "mechAI15") {
    const base = QUIZZES.mechAI?.questions || [];
    state.activeQuiz = {
      name: QUIZZES.mechAI15.name,
      letters: QUIZZES.mechAI15.letters,
      questions: pickRandomUnique(base, 15)
    };
  } else {
    state.activeQuiz = null;
  }

  const quiz = getActiveQuiz();
  const total = quiz.questions.length;

  state.index = 0;
  state.answers = new Array(total).fill(null);

  document.title = `Quiz: ${quiz.name}`;
  els.result.style.display = "none";

  render();
}

function letterFor(i) {
  const quiz = getActiveQuiz();
  return quiz.letters[i] ?? String(i + 1);
}

function render() {
  const quiz = getActiveQuiz();
  const total = quiz.questions.length;


  if (total === 0) {
    els.quizName.textContent = quiz.name;
    els.counter.textContent = `Pytanie 0/0`;
    els.answered.textContent = `Odpowiedzi: 0/0`;
    els.bar.style.width = "0%";
    els.questionText.textContent = "Brak pytań. Dodaj je w app.js (QUIZZES).";
    els.options.innerHTML = "";
    els.prevBtn.disabled = true;
    els.nextBtn.disabled = true;
    els.submitBtn.disabled = true;
    return;
  }

  const q = quiz.questions[state.index];

  els.quizName.textContent = quiz.name;
  els.counter.textContent = `Pytanie ${state.index + 1}/${total}`;

  const answeredCount = state.answers.filter(v => v !== null).length;
  els.answered.textContent = `Odpowiedzi: ${answeredCount}/${total}`;
  els.bar.style.width = `${Math.round((answeredCount / total) * 100)}%`;

  els.questionText.textContent = q.q;

  // Przyciski
  els.prevBtn.disabled = state.index === 0;

  const isLast = state.index === total - 1;
  els.nextBtn.style.display = isLast ? "none" : "inline-flex";
  els.submitBtn.style.display = isLast ? "inline-flex" : "none";

  const currentAnswered = state.answers[state.index] !== null;
  els.nextBtn.disabled = !currentAnswered;
  els.submitBtn.disabled = !currentAnswered;

  // Opcje
  els.options.innerHTML = "";
  q.options.forEach((optText, i) => {
    const id = `opt-${state.quizKey}-${state.index}-${i}`;
    const checked = state.answers[state.index] === i;

    const label = document.createElement("label");
    label.className = "opt";
    label.setAttribute("for", id);

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "option";
    input.id = id;
    input.value = String(i);
    input.checked = checked;

    input.addEventListener("change", () => {
      state.answers[state.index] = i;

      const answeredCount2 = state.answers.filter(v => v !== null).length;
      els.answered.textContent = `Odpowiedzi: ${answeredCount2}/${total}`;
      els.bar.style.width = `${Math.round((answeredCount2 / total) * 100)}%`;

      els.nextBtn.disabled = false;
      els.submitBtn.disabled = false;
    });

    const info = document.createElement("div");
    info.className = "label";

    const letter = document.createElement("div");
    letter.className = "letter";
    letter.textContent = letterFor(i);

    const text = document.createElement("div");
    text.className = "text";
    text.textContent = optText;

    info.appendChild(letter);
    info.appendChild(text);

    label.appendChild(input);
    label.appendChild(info);

    els.options.appendChild(label);
  });
}

function next() {
  const quiz = getActiveQuiz();
  if (state.index < quiz.questions.length - 1) {
    state.index++;
    render();
  }
}

function prev() {
  if (state.index > 0) {
    state.index--;
    render();
  }
}

function resetQuiz() {
  init();
}

function grade() {
  const quiz = getActiveQuiz();
  const total = quiz.questions.length;

  let correct = 0;
  quiz.questions.forEach((q, idx) => {
    if (state.answers[idx] === q.correct) correct++;
  });

  const percent = total ? Math.round((correct / total) * 100) : 0;
  els.scoreText.textContent = `Wynik: ${correct}/${total} (${percent}%)`;

  // Prosty podgląd odpowiedzi (możesz usunąć jeśli nie chcesz)
  els.review.innerHTML = "";
  quiz.questions.forEach((q, idx) => {
    const picked = state.answers[idx];
    const ok = picked === q.correct;

    const item = document.createElement("div");
    item.className = "item";

    const qEl = document.createElement("div");
    qEl.className = "q";
    qEl.textContent = `${idx + 1}. ${q.q}`;

    const tag = document.createElement("div");
    tag.className = "tag";
    const pickedStr = picked === null ? "—" : letterFor(picked);
    const correctStr = letterFor(q.correct);

    tag.innerHTML = `
      <span class="${ok ? "ok" : "bad"}">${ok ? "OK" : "ŹLE"}</span>
      <span>Twoja: <strong>${pickedStr}</strong></span>
      <span>Poprawna: <strong>${correctStr}</strong></span>
    `;

    item.appendChild(qEl);
    item.appendChild(tag);
    els.review.appendChild(item);
  });

  els.result.style.display = "block";
  els.result.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Eventy (tylko jeśli jesteśmy na quiz.html)
if (qs("#questionText")) {
  qs("#nextBtn").addEventListener("click", next);
  qs("#prevBtn").addEventListener("click", prev);
  qs("#resetBtn").addEventListener("click", resetQuiz);
  qs("#submitBtn").addEventListener("click", grade);

  window.addEventListener("keydown", (e) => {
    if (els.result.style.display === "block") return;
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
    if (e.key === "Enter") {
      const quiz = QUIZZES[state.quizKey];
      const isLast = state.index === quiz.questions.length - 1;
      if (isLast) grade(); else next();
    }
  });

  init();
}
``
