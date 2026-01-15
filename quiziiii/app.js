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
};

// ====== Helpers ======
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
};

function init() {
  // Jeśli ktoś odpali app.js na index.html (bez elementów quizu), po prostu wyjdź:
  if (!els.questionText) return;

  const quiz = QUIZZES[state.quizKey];
  const total = quiz.questions.length;

  state.index = 0;
  state.answers = new Array(total).fill(null);

  document.title = `Quiz: ${quiz.name}`;
  els.result.style.display = "none";

  render();
}

function letterFor(i) {
  const quiz = QUIZZES[state.quizKey];
  return quiz.letters[i] ?? String(i + 1);
}

function render() {
  const quiz = QUIZZES[state.quizKey];
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
  const quiz = QUIZZES[state.quizKey];
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
  const quiz = QUIZZES[state.quizKey];
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
