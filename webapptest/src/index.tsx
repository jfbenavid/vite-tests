import { createRoot } from 'react-dom/client';
import { App } from 'my-lib';

const div = document.getElementById('app');
const root = createRoot(div!);

root.render(<div> <App/></div>);
