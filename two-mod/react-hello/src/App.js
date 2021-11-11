import { Fragment } from 'react';

export default function App() {
  console.log('Teste no console do navegador');
  const name = 'Eldrin Córdova';
  const age = 46;

  return (
    <Fragment>
      <header>
        <div className="bg-green-300 mx-auto p-4">
          <h1 className="text-center font-semibold text-xl">React Hello</h1>
        </div>
      </header>

      <main>
        <div className="container mx-auto p-4">
          <p>
            O seu nome é {name}, com {name.length} carateres, e vovê tem {age}{' '}
            anos
          </p>
        </div>
      </main>
    </Fragment>
  );
}
