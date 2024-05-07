import { isLocal, isBeta, isProd } from '@client/constants/phase';

export default function Home() {
  return (
    <main>
      <h1>Main Page</h1>
      <div>current phase : {process.env.NEXT_PUBLIC_PHASE}</div>
      {isLocal && <div>Local</div>}
      {isBeta && <div>Beta</div>}
      {isProd ? <div>Production</div> : null}
    </main>
  );
}
