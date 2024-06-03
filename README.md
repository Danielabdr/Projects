<h1>TMDB Website Testing with Cypress</h1>
<h2>Descrierea Proiectului</h2>
Acest proiect reprezintă o aplicație web care utilizează API-ul The Movie Database (TMDB) pentru a afișa informații despre filme și seriale. Proiectul include un set de teste automate folosind Cypress, un framework de testare end-to-end pentru aplicații web.

Scopul acestui proiect este de a demonstra cum se poate configura și utiliza Cypress pentru a testa diferite funcționalități ale unui site web care consumă date dintr-un API extern.

Funcționalități
Afișarea filmelor populare: Pagina principală afișează o listă cu filme populare preluate de la API-ul TMDB.
Căutarea filmelor: Utilizatorii pot căuta filme și seriale utilizând un câmp de căutare.
Detalii film: Fiecare film are o pagină dedicată care afișează detalii suplimentare precum descriere, evaluare, actori și trailere.
Testare automată: Set de teste automate folosind Cypress pentru a verifica funcționalitatea principală a site-ului.
Tehnologii Utilizate
HTML/CSS/JavaScript: Pentru dezvoltarea interfeței web.
API TMDB: Pentru a obține date despre filme și seriale.
Cypress: Pentru testare end-to-end automată.
Instalare și Configurare
Urmați pașii de mai jos pentru a configura și rula proiectul local:

Clonează repository-ul:

bash
Copiază codul
git clone https://github.com/numele-tau/tmdb-cypress.git
cd tmdb-cypress
Instalează dependințele:

bash
Copiază codul
npm install
Configurarea API Key TMDB:

Creează un fișier .env în directorul rădăcină al proiectului.
Adaugă următoarea linie în fișierul .env:
plaintext
Copiază codul
REACT_APP_TMDB_API_KEY=your_api_key_here
Înlocuiește your_api_key_here cu cheia ta API TMDB.
Rularea aplicației:

bash
Copiază codul
npm start
Rularea testelor Cypress:

Deschide interfața Cypress:
bash
Copiază codul
npx cypress open
Selectează testele pe care dorești să le rulezi.
Structura Proiectului
src/: Directorul principal al aplicației web, conține fișierele sursă.
components/: Componente React reutilizabile.
pages/: Pagini ale aplicației.
services/: Fișiere pentru integrarea cu API-ul TMDB.
cypress/: Directorul principal pentru testele Cypress.
integration/: Teste end-to-end.
fixtures/: Date de test.
plugins/: Plugin-uri Cypress.
support/: Fișiere de suport și configurație.
Contribuții
