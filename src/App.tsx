import cx from 'classnames';
import { Editor } from './containers/Editor';

function App() {
  return (
    <div className={cx(['h-full', 'w-full'])}>
      <Editor />
    </div>
  );
}

export default App;
